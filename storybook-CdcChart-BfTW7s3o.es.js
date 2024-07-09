import { r as se, R as E } from "./storybook-index-BmAYD2Ot.es.js";
import { v as Yf, a as vy, i as Xf, b as qf, g as xy } from "./storybook-isSolr-B1sVi3Vf.es.js";
import { _ as Br, P as by, D as Sy, C as Ey, A as ky, b as xi, F as Gf, g as Ry } from "./storybook-Filters-tazhNw2q.es.js";
import { L as Id, a as wy } from "./storybook-coveUpdateWorker-D1xxZDqt.es.js";
import { B as ls } from "./storybook-Button-Djy4jtV0.es.js";
import { p as Ty, P as Ce } from "./storybook-index-Cdio1Uc1.es.js";
import { d as Cy } from "./storybook-debounce-DkpRHYWr.es.js";
import { a as Ay } from "./storybook-_commonjsHelpers-CT_km90n.es.js";
import { P as Zf } from "./storybook-papaparse.min-CIo65Eg9.es.js";
import { H as Ci, T as Ly } from "./storybook-index-R_DM8DTt.es.js";
import { _ as sn } from "./storybook-extends-DX42hfxm.es.js";
import { p as Qf, e as bi, s as Fr, c as It, h as Jf, a as iu, f as Un, t as Sc, i as Ho, m as md, j as ep, k as jn, l as tp, n as Py, o as Dy, G as _y, q as Ac, r as rr, u as Lc, g as Ko, T as vt, b as Pc, I as np } from "./storybook-InputToggle-CYpJLuKf.es.js";
import { t as Oy, a as En, f as vf, L as rp, b as Vl, g as Si, S as Ny, M as yd, D as Fy } from "./storybook-DataTable-wMJ4KnD8.es.js";
import { E as Cr, L as My } from "./storybook-Loading-DS8g8-4Q.es.js";
import { b as ou, t as zy, e as Ph, f as ap, g as Iy, h as $y, j as By, k as ip, m as Hy, G as Je, c as wn } from "./storybook-Group-DMkA2r_N.es.js";
import { s as Xl, t as Dh, a as _h, b as Oh, d as fs, B as hr, c as Wn, C as Wy } from "./storybook-Circle-DG-wjuHC.es.js";
import { R as Vy } from "./storybook-index-vT4_U9I1.es.js";
import { e as ss, a as Cn, b as An, c as Ln, d as Pn, A as Ai } from "./storybook-index-CUdl0IAB.es.js";
import { _ as er } from "./storybook-lodash-QEop74tm.es.js";
import { i as Nh, m as gd, c as Fh, j as rc, k as ac, l as ic, n as op, o as jy, p as lp, b as Mh, d as zh } from "./storybook-year-CVXTNX_T.es.js";
import { a as it } from "./storybook-Icon-B5TlldJZ.es.js";
import { C as Uy, V as Ky, a as sp } from "./storybook-footnoteSymbols-BeqsPrEk.es.js";
import { S as Et, T as qe, C as nt, D as Yy } from "./storybook-DataTableEditor-BUtAyse4.es.js";
import { T as fe } from "./storybook-Tooltip-BxtpAmS8.es.js";
import { I as za } from "./storybook-InputSelect-CDWSnKkx.es.js";
import { S as Ih } from "./storybook-icon-check-D6W9UsJG.es.js";
import { A as oc } from "./storybook-Accordion-BJt7AwfQ.es.js";
import { u as Xy, p as qy, s as Gy, a as Zy } from "./storybook-useDataVizClasses-BwbaCKu-.es.js";
import { n as cp } from "./storybook-numberFromString-Cv9lvdGP.es.js";
import { D as Qy } from "./storybook-DataTransform-BIsXVJjR.es.js";
import { c as up } from "./storybook-cacheBustingString-Dx7lC4Lx.es.js";
function $h(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function dp(e) {
  let t = e, r = e;
  e.length === 1 && (t = (f, d) => e(f) - d, r = Jy(e));
  function i(f, d, u, h) {
    for (u == null && (u = 0), h == null && (h = f.length); u < h; ) {
      const y = u + h >>> 1;
      r(f[y], d) < 0 ? u = y + 1 : h = y;
    }
    return u;
  }
  function a(f, d, u, h) {
    for (u == null && (u = 0), h == null && (h = f.length); u < h; ) {
      const y = u + h >>> 1;
      r(f[y], d) > 0 ? h = y : u = y + 1;
    }
    return u;
  }
  function l(f, d, u, h) {
    u == null && (u = 0), h == null && (h = f.length);
    const y = i(f, d, u, h - 1);
    return y > u && t(f[y - 1], d) > -t(f[y], d) ? y - 1 : y;
  }
  return { left: i, center: l, right: a };
}
function Jy(e) {
  return (t, r) => $h(e(t), r);
}
function* eg(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
function tg(e, t) {
  let r = 0, i, a = 0, l = 0;
  for (let f of e)
    f != null && (f = +f) >= f && (i = f - a, a += i / ++r, l += i * (f - a));
  if (r > 1)
    return l / (r - 1);
}
function ng(e, t) {
  const r = tg(e);
  return r && Math.sqrt(r);
}
function ql(e, t) {
  let r;
  for (const i of e)
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  return r;
}
function Gl(e, t) {
  let r;
  for (const i of e)
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  return r;
}
function Bh(e, t, r = 0, i = e.length - 1, a = $h) {
  for (; i > r; ) {
    if (i - r > 600) {
      const u = i - r + 1, h = t - r + 1, y = Math.log(u), v = 0.5 * Math.exp(2 * y / 3), b = 0.5 * Math.sqrt(y * v * (u - v) / u) * (h - u / 2 < 0 ? -1 : 1), P = Math.max(r, Math.floor(t - h * v / u + b)), k = Math.min(i, Math.floor(t + (u - h) * v / u + b));
      Bh(e, t, P, k, a);
    }
    const l = e[t];
    let f = r, d = i;
    for (jl(e, r, t), a(e[i], l) > 0 && jl(e, r, i); f < d; ) {
      for (jl(e, f, d), ++f, --d; a(e[f], l) < 0; )
        ++f;
      for (; a(e[d], l) > 0; )
        --d;
    }
    a(e[r], l) === 0 ? jl(e, r, d) : (++d, jl(e, d, i)), d <= t && (r = d + 1), t <= d && (i = d - 1);
  }
  return e;
}
function jl(e, t, r) {
  const i = e[t];
  e[t] = e[r], e[r] = i;
}
function rg(e, t, r) {
  if (e = Float64Array.from(eg(e)), !!(i = e.length)) {
    if ((t = +t) <= 0 || i < 2)
      return Gl(e);
    if (t >= 1)
      return ql(e);
    var i, a = (i - 1) * t, l = Math.floor(a), f = ql(Bh(e, l).subarray(0, l + 1)), d = Gl(e.subarray(l + 1));
    return f + (d - f) * (a - l);
  }
}
function ag(e, t) {
  let r = 0, i = 0;
  for (let a of e)
    a != null && (a = +a) >= a && (++r, i += a);
  if (r)
    return i / r;
}
function ig(e, t) {
  return rg(e, 0.5);
}
class fp extends Map {
  constructor(t, r = sg) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null)
      for (const [i, a] of t)
        this.set(i, a);
  }
  get(t) {
    return super.get(pp(this, t));
  }
  has(t) {
    return super.has(pp(this, t));
  }
  set(t, r) {
    return super.set(og(this, t), r);
  }
  delete(t) {
    return super.delete(lg(this, t));
  }
}
function pp({ _intern: e, _key: t }, r) {
  const i = t(r);
  return e.has(i) ? e.get(i) : r;
}
function og({ _intern: e, _key: t }, r) {
  const i = t(r);
  return e.has(i) ? e.get(i) : (e.set(i, r), r);
}
function lg({ _intern: e, _key: t }, r) {
  const i = t(r);
  return e.has(i) && (r = e.get(i), e.delete(i)), r;
}
function sg(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function cg(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var i = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, l = new Array(a); ++i < a; )
    l[i] = e + i * r;
  return l;
}
const hp = Symbol("implicit");
function xf() {
  var e = new fp(), t = [], r = [], i = hp;
  function a(l) {
    let f = e.get(l);
    if (f === void 0) {
      if (i !== hp)
        return i;
      e.set(l, f = t.push(l) - 1);
    }
    return r[f % r.length];
  }
  return a.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new fp();
    for (const f of l)
      e.has(f) || e.set(f, t.push(f) - 1);
    return a;
  }, a.range = function(l) {
    return arguments.length ? (r = Array.from(l), a) : r.slice();
  }, a.unknown = function(l) {
    return arguments.length ? (i = l, a) : i;
  }, a.copy = function() {
    return xf(t, r).unknown(i);
  }, ou.apply(a, arguments), a;
}
function bf() {
  var e = xf().unknown(void 0), t = e.domain, r = e.range, i = 0, a = 1, l, f, d = !1, u = 0, h = 0, y = 0.5;
  delete e.unknown;
  function v() {
    var b = t().length, P = a < i, k = P ? a : i, N = P ? i : a;
    l = (N - k) / Math.max(1, b - u + h * 2), d && (l = Math.floor(l)), k += (N - k - l * (b - u)) * y, f = l * (1 - u), d && (k = Math.round(k), f = Math.round(f));
    var R = cg(b).map(function(m) {
      return k + l * m;
    });
    return r(P ? R.reverse() : R);
  }
  return e.domain = function(b) {
    return arguments.length ? (t(b), v()) : t();
  }, e.range = function(b) {
    return arguments.length ? ([i, a] = b, i = +i, a = +a, v()) : [i, a];
  }, e.rangeRound = function(b) {
    return [i, a] = b, i = +i, a = +a, d = !0, v();
  }, e.bandwidth = function() {
    return f;
  }, e.step = function() {
    return l;
  }, e.round = function(b) {
    return arguments.length ? (d = !!b, v()) : d;
  }, e.padding = function(b) {
    return arguments.length ? (u = Math.min(1, h = +b), v()) : u;
  }, e.paddingInner = function(b) {
    return arguments.length ? (u = Math.min(1, b), v()) : u;
  }, e.paddingOuter = function(b) {
    return arguments.length ? (h = +b, v()) : h;
  }, e.align = function(b) {
    return arguments.length ? (y = Math.max(0, Math.min(1, b)), v()) : y;
  }, e.copy = function() {
    return bf(t(), [i, a]).round(d).paddingInner(u).paddingOuter(h).align(y);
  }, ou.apply(v(), arguments);
}
function Hh(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Hh(t());
  }, e;
}
function ug() {
  return Hh(bf.apply(null, arguments).paddingInner(1));
}
function Wh(e, t) {
  e = e.slice();
  var r = 0, i = e.length - 1, a = e[r], l = e[i], f;
  return l < a && (f = r, r = i, i = f, f = a, a = l, l = f), e[r] = t.floor(a), e[i] = t.ceil(l), e;
}
function mp(e) {
  return Math.log(e);
}
function yp(e) {
  return Math.exp(e);
}
function dg(e) {
  return -Math.log(-e);
}
function fg(e) {
  return -Math.exp(-e);
}
function pg(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function hg(e) {
  return e === 10 ? pg : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function mg(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function gp(e) {
  return (t, r) => -e(-t, r);
}
function yg(e) {
  const t = e(mp, yp), r = t.domain;
  let i = 10, a, l;
  function f() {
    return a = mg(i), l = hg(i), r()[0] < 0 ? (a = gp(a), l = gp(l), e(dg, fg)) : e(mp, yp), t;
  }
  return t.base = function(d) {
    return arguments.length ? (i = +d, f()) : i;
  }, t.domain = function(d) {
    return arguments.length ? (r(d), f()) : r();
  }, t.ticks = (d) => {
    const u = r();
    let h = u[0], y = u[u.length - 1];
    const v = y < h;
    v && ([h, y] = [y, h]);
    let b = a(h), P = a(y), k, N;
    const R = d == null ? 10 : +d;
    let m = [];
    if (!(i % 1) && P - b < R) {
      if (b = Math.floor(b), P = Math.ceil(P), h > 0) {
        for (; b <= P; ++b)
          for (k = 1; k < i; ++k)
            if (N = b < 0 ? k / l(-b) : k * l(b), !(N < h)) {
              if (N > y)
                break;
              m.push(N);
            }
      } else
        for (; b <= P; ++b)
          for (k = i - 1; k >= 1; --k)
            if (N = b > 0 ? k / l(-b) : k * l(b), !(N < h)) {
              if (N > y)
                break;
              m.push(N);
            }
      m.length * 2 < R && (m = ap(h, y, R));
    } else
      m = ap(b, P, Math.min(P - b, R)).map(l);
    return v ? m.reverse() : m;
  }, t.tickFormat = (d, u) => {
    if (d == null && (d = 10), u == null && (u = i === 10 ? "s" : ","), typeof u != "function" && (!(i % 1) && (u = Iy(u)).precision == null && (u.trim = !0), u = $y(u)), d === 1 / 0)
      return u;
    const h = Math.max(1, i * d / t.ticks().length);
    return (y) => {
      let v = y / l(Math.round(a(y)));
      return v * i < i - 0.5 && (v *= i), v <= h ? u(y) : "";
    };
  }, t.nice = () => r(Wh(r(), {
    floor: (d) => l(Math.floor(a(d))),
    ceil: (d) => l(Math.ceil(a(d)))
  })), t;
}
function Vh() {
  const e = yg(zy()).domain([1, 10]);
  return e.copy = () => Ph(e, Vh()).base(e.base()), ou.apply(e, arguments), e;
}
const Dc = Nh(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Dc.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Nh((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Dc);
Dc.range;
function gg(e, t, r, i, a, l) {
  const f = [
    [Xl, 1, rc],
    [Xl, 5, 5 * rc],
    [Xl, 15, 15 * rc],
    [Xl, 30, 30 * rc],
    [l, 1, ac],
    [l, 5, 5 * ac],
    [l, 15, 15 * ac],
    [l, 30, 30 * ac],
    [a, 1, ic],
    [a, 3, 3 * ic],
    [a, 6, 6 * ic],
    [a, 12, 12 * ic],
    [i, 1, op],
    [i, 2, 2 * op],
    [r, 1, jy],
    [t, 1, lp],
    [t, 3, 3 * lp],
    [e, 1, gd]
  ];
  function d(h, y, v) {
    const b = y < h;
    b && ([h, y] = [y, h]);
    const P = v && typeof v.range == "function" ? v : u(h, y, v), k = P ? P.range(h, +y + 1) : [];
    return b ? k.reverse() : k;
  }
  function u(h, y, v) {
    const b = Math.abs(y - h) / v, P = By(([, , R]) => R).right(f, b);
    if (P === f.length)
      return e.every(ip(h / gd, y / gd, v));
    if (P === 0)
      return Dc.every(Math.max(ip(h, y, v), 1));
    const [k, N] = f[b / f[P - 1][2] < f[P][2] / b ? P - 1 : P];
    return k.every(N);
  }
  return [d, u];
}
const [vg, xg] = gg(Fh, Oh, zh, Mh, _h, Dh);
function bg(e) {
  return new Date(e);
}
function Sg(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function jh(e, t, r, i, a, l, f, d, u, h) {
  var y = Hy(), v = y.invert, b = y.domain, P = h(".%L"), k = h(":%S"), N = h("%I:%M"), R = h("%I %p"), m = h("%a %d"), O = h("%b %d"), D = h("%B"), L = h("%Y");
  function _(C) {
    return (u(C) < C ? P : d(C) < C ? k : f(C) < C ? N : l(C) < C ? R : i(C) < C ? a(C) < C ? m : O : r(C) < C ? D : L)(C);
  }
  return y.invert = function(C) {
    return new Date(v(C));
  }, y.domain = function(C) {
    return arguments.length ? b(Array.from(C, Sg)) : b().map(bg);
  }, y.ticks = function(C) {
    var V = b();
    return e(V[0], V[V.length - 1], C ?? 10);
  }, y.tickFormat = function(C, V) {
    return V == null ? _ : h(V);
  }, y.nice = function(C) {
    var V = b();
    return (!C || typeof C.range != "function") && (C = t(V[0], V[V.length - 1], C ?? 10)), C ? b(Wh(V, C)) : y;
  }, y.copy = function() {
    return Ph(y, jh(e, t, r, i, a, l, f, d, u, h));
  }, y;
}
function Eg() {
  return ou.apply(jh(vg, xg, Fh, Oh, zh, Mh, _h, Dh, Xl, Oy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var kg = fs("domain", "range", "reverse", "align", "padding", "round");
function $d(e) {
  return kg(bf(), e);
}
var Rg = fs("domain", "range", "reverse", "align", "padding", "round");
function Wo(e) {
  return Rg(ug(), e);
}
var wg = fs("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function Tg(e) {
  return wg(Eg(), e);
}
var Cg = fs("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function _c(e) {
  return Cg(Vh(), e);
}
var Ag = fs("domain", "range", "reverse", "unknown");
function Uh(e) {
  return Ag(xf(), e);
}
function Lg(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Pg(e, t) {
  var r = e;
  return "ticks" in r ? r.ticks(t) : r.domain().filter(function(i, a, l) {
    return t == null || l.length <= t || a % Math.round((l.length - 1) / t) === 0;
  });
}
function Dg(e) {
  return e == null ? void 0 : e.toString();
}
var Li = [], _g = function() {
  return Li.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Og = function() {
  return Li.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, vp = "ResizeObserver loop completed with undelivered notifications.", Ng = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: vp
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = vp), window.dispatchEvent(e);
}, cs;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(cs || (cs = {}));
var Pi = function(e) {
  return Object.freeze(e);
}, Kh = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Pi(this);
  }
  return e;
}(), Yh = function() {
  function e(t, r, i, a) {
    return this.x = t, this.y = r, this.width = i, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Pi(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, i = t.y, a = t.top, l = t.right, f = t.bottom, d = t.left, u = t.width, h = t.height;
    return { x: r, y: i, top: a, right: l, bottom: f, left: d, width: u, height: h };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Sf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Xh = function(e) {
  if (Sf(e)) {
    var t = e.getBBox(), r = t.width, i = t.height;
    return !r && !i;
  }
  var a = e, l = a.offsetWidth, f = a.offsetHeight;
  return !(l || f || e.getClientRects().length);
}, xp = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Fg = function(e) {
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
}, Zl = typeof window < "u" ? window : {}, lc = /* @__PURE__ */ new WeakMap(), bp = /auto|scroll/, Mg = /^tb|vertical/, zg = /msie|trident/i.test(Zl.navigator && Zl.navigator.userAgent), Mr = function(e) {
  return parseFloat(e || "0");
}, jo = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Kh((r ? t : e) || 0, (r ? e : t) || 0);
}, Sp = Pi({
  devicePixelContentBoxSize: jo(),
  borderBoxSize: jo(),
  contentBoxSize: jo(),
  contentRect: new Yh(0, 0, 0, 0)
}), qh = function(e, t) {
  if (t === void 0 && (t = !1), lc.has(e) && !t)
    return lc.get(e);
  if (Xh(e))
    return lc.set(e, Sp), Sp;
  var r = getComputedStyle(e), i = Sf(e) && e.ownerSVGElement && e.getBBox(), a = !zg && r.boxSizing === "border-box", l = Mg.test(r.writingMode || ""), f = !i && bp.test(r.overflowY || ""), d = !i && bp.test(r.overflowX || ""), u = i ? 0 : Mr(r.paddingTop), h = i ? 0 : Mr(r.paddingRight), y = i ? 0 : Mr(r.paddingBottom), v = i ? 0 : Mr(r.paddingLeft), b = i ? 0 : Mr(r.borderTopWidth), P = i ? 0 : Mr(r.borderRightWidth), k = i ? 0 : Mr(r.borderBottomWidth), N = i ? 0 : Mr(r.borderLeftWidth), R = v + h, m = u + y, O = N + P, D = b + k, L = d ? e.offsetHeight - D - e.clientHeight : 0, _ = f ? e.offsetWidth - O - e.clientWidth : 0, C = a ? R + O : 0, V = a ? m + D : 0, H = i ? i.width : Mr(r.width) - C - _, X = i ? i.height : Mr(r.height) - V - L, le = H + R + _ + O, Z = X + m + L + D, W = Pi({
    devicePixelContentBoxSize: jo(Math.round(H * devicePixelRatio), Math.round(X * devicePixelRatio), l),
    borderBoxSize: jo(le, Z, l),
    contentBoxSize: jo(H, X, l),
    contentRect: new Yh(v, u, H, X)
  });
  return lc.set(e, W), W;
}, Gh = function(e, t, r) {
  var i = qh(e, r), a = i.borderBoxSize, l = i.contentBoxSize, f = i.devicePixelContentBoxSize;
  switch (t) {
    case cs.DEVICE_PIXEL_CONTENT_BOX:
      return f;
    case cs.BORDER_BOX:
      return a;
    default:
      return l;
  }
}, Zh = /* @__PURE__ */ function() {
  function e(t) {
    var r = qh(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Pi([r.borderBoxSize]), this.contentBoxSize = Pi([r.contentBoxSize]), this.devicePixelContentBoxSize = Pi([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Qh = function(e) {
  if (Xh(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, Ig = function() {
  var e = 1 / 0, t = [];
  Li.forEach(function(f) {
    if (f.activeTargets.length !== 0) {
      var d = [];
      f.activeTargets.forEach(function(h) {
        var y = new Zh(h.target), v = Qh(h.target);
        d.push(y), h.lastReportedSize = Gh(h.target, h.observedBox), v < e && (e = v);
      }), t.push(function() {
        f.callback.call(f.observer, d, f.observer);
      }), f.activeTargets.splice(0, f.activeTargets.length);
    }
  });
  for (var r = 0, i = t; r < i.length; r++) {
    var a = i[r];
    a();
  }
  return e;
}, Ep = function(e) {
  Li.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (Qh(a.target) > e ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, $g = function() {
  var e = 0;
  for (Ep(e); _g(); )
    e = Ig(), Ep(e);
  return Og() && Ng(), e > 0;
}, vd, Jh = [], Bg = function() {
  return Jh.splice(0).forEach(function(e) {
    return e();
  });
}, Hg = function(e) {
  if (!vd) {
    var t = 0, r = document.createTextNode(""), i = { characterData: !0 };
    new MutationObserver(function() {
      return Bg();
    }).observe(r, i), vd = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  Jh.push(e), vd();
}, Wg = function(e) {
  Hg(function() {
    requestAnimationFrame(e);
  });
}, Ec = 0, Vg = function() {
  return !!Ec;
}, jg = 250, Ug = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, kp = [
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
], Rp = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, xd = !1, Kg = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = jg), !xd) {
      xd = !0;
      var i = Rp(t);
      Wg(function() {
        var a = !1;
        try {
          a = $g();
        } finally {
          if (xd = !1, t = i - Rp(), !Vg())
            return;
          a ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, Ug);
    };
    document.body ? r() : Zl.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), kp.forEach(function(r) {
      return Zl.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), kp.forEach(function(r) {
      return Zl.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Bd = new Kg(), wp = function(e) {
  !Ec && e > 0 && Bd.start(), Ec += e, !Ec && Bd.stop();
}, Yg = function(e) {
  return !Sf(e) && !Fg(e) && getComputedStyle(e).display === "inline";
}, Xg = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || cs.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Gh(this.target, this.observedBox, !0);
    return Yg(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), qg = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), sc = /* @__PURE__ */ new WeakMap(), Tp = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, cc = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var i = new qg(t, r);
    sc.set(t, i);
  }, e.observe = function(t, r, i) {
    var a = sc.get(t), l = a.observationTargets.length === 0;
    Tp(a.observationTargets, r) < 0 && (l && Li.push(a), a.observationTargets.push(new Xg(r, i && i.box)), wp(1), Bd.schedule());
  }, e.unobserve = function(t, r) {
    var i = sc.get(t), a = Tp(i.observationTargets, r), l = i.observationTargets.length === 1;
    a >= 0 && (l && Li.splice(Li.indexOf(i), 1), i.observationTargets.splice(a, 1), wp(-1));
  }, e.disconnect = function(t) {
    var r = this, i = sc.get(t);
    i.observationTargets.slice().forEach(function(a) {
      return r.unobserve(t, a.target);
    }), i.activeTargets.splice(0, i.activeTargets.length);
  }, e;
}(), Gg = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    cc.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!xp(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    cc.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!xp(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    cc.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    cc.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const Zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: Gg,
  ResizeObserverEntry: Zh,
  ResizeObserverSize: Kh
}, Symbol.toStringTag, { value: "Module" })), Qg = /* @__PURE__ */ Ay(Zg);
var Cp = nm, Da = tm(Ty), Jg = tm(Cy), Io = nv(se), ev = Qg, tv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function em(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (em = function(a) {
    return a ? r : t;
  })(e);
}
function nv(e, t) {
  if (e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = em(t);
  if (r && r.has(e))
    return r.get(e);
  var i = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var f = a ? Object.getOwnPropertyDescriptor(e, l) : null;
      f && (f.get || f.set) ? Object.defineProperty(i, l, f) : i[l] = e[l];
    }
  return i.default = e, r && r.set(e, i), i;
}
function tm(e) {
  return e && e.__esModule ? e : { default: e };
}
function Oc() {
  return Oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Oc.apply(this, arguments);
}
function rv(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var av = [];
function nm(e) {
  var t = e.className, r = e.children, i = e.debounceTime, a = i === void 0 ? 300 : i, l = e.ignoreDimensions, f = l === void 0 ? av : l, d = e.parentSizeStyles, u = d === void 0 ? {
    width: "100%",
    height: "100%"
  } : d, h = e.enableDebounceLeadingCall, y = h === void 0 ? !0 : h, v = rv(e, tv), b = (0, Io.useRef)(null), P = (0, Io.useRef)(0), k = (0, Io.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), N = k[0], R = k[1], m = (0, Io.useMemo)(function() {
    var O = Array.isArray(f) ? f : [f];
    return (0, Jg.default)(function(D) {
      R(function(L) {
        var _ = Object.keys(L), C = _.filter(function(H) {
          return L[H] !== D[H];
        }), V = C.every(function(H) {
          return O.includes(H);
        });
        return V ? L : D;
      });
    }, a, {
      leading: y
    });
  }, [a, y, f]);
  return (0, Io.useEffect)(function() {
    var O = new ev.ResizeObserver(function(D) {
      D === void 0 && (D = []), D.forEach(function(L) {
        var _ = L.contentRect, C = _.left, V = _.top, H = _.width, X = _.height;
        P.current = window.requestAnimationFrame(function() {
          m({
            width: H,
            height: X,
            top: V,
            left: C
          });
        });
      });
    });
    return b.current && O.observe(b.current), function() {
      window.cancelAnimationFrame(P.current), O.disconnect(), m != null && m.cancel && m.cancel();
    };
  }, [m]), /* @__PURE__ */ Io.default.createElement("div", Oc({
    style: u,
    ref: b,
    className: t
  }, v), r(Oc({}, N, {
    ref: b.current,
    resize: m
  })));
}
nm.propTypes = {
  className: Da.default.string,
  debounceTime: Da.default.number,
  enableDebounceLeadingCall: Da.default.bool,
  ignoreDimensions: Da.default.oneOfType([Da.default.any, Da.default.arrayOf(Da.default.any)]),
  children: Da.default.func.isRequired
};
var bd = /* @__PURE__ */ new Date(), Sd = /* @__PURE__ */ new Date();
function ia(e, t, r, i) {
  function a(l) {
    return e(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
  }
  return a.floor = function(l) {
    return e(l = /* @__PURE__ */ new Date(+l)), l;
  }, a.ceil = function(l) {
    return e(l = new Date(l - 1)), t(l, 1), e(l), l;
  }, a.round = function(l) {
    var f = a(l), d = a.ceil(l);
    return l - f < d - l ? f : d;
  }, a.offset = function(l, f) {
    return t(l = /* @__PURE__ */ new Date(+l), f == null ? 1 : Math.floor(f)), l;
  }, a.range = function(l, f, d) {
    var u = [], h;
    if (l = a.ceil(l), d = d == null ? 1 : Math.floor(d), !(l < f) || !(d > 0))
      return u;
    do
      u.push(h = /* @__PURE__ */ new Date(+l)), t(l, d), e(l);
    while (h < l && l < f);
    return u;
  }, a.filter = function(l) {
    return ia(function(f) {
      if (f >= f)
        for (; e(f), !l(f); )
          f.setTime(f - 1);
    }, function(f, d) {
      if (f >= f)
        if (d < 0)
          for (; ++d <= 0; )
            for (; t(f, -1), !l(f); )
              ;
        else
          for (; --d >= 0; )
            for (; t(f, 1), !l(f); )
              ;
    });
  }, r && (a.count = function(l, f) {
    return bd.setTime(+l), Sd.setTime(+f), e(bd), e(Sd), Math.floor(r(bd, Sd));
  }, a.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? a.filter(i ? function(f) {
      return i(f) % l === 0;
    } : function(f) {
      return a.count(0, f) % l === 0;
    }) : a;
  }), a;
}
const iv = 1e3, Ef = iv * 60, ov = Ef * 60, kf = ov * 24, rm = kf * 7;
var Rf = ia(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ef) / kf,
  (e) => e.getDate() - 1
);
Rf.range;
function zi(e) {
  return ia(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setDate(t.getDate() + r * 7);
  }, function(t, r) {
    return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ef) / rm;
  });
}
var am = zi(0), Nc = zi(1), lv = zi(2), sv = zi(3), Yo = zi(4), cv = zi(5), uv = zi(6);
am.range;
Nc.range;
lv.range;
sv.range;
Yo.range;
cv.range;
uv.range;
var Ni = ia(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Ni.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ia(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setFullYear(t.getFullYear() + r * e);
  });
};
Ni.range;
var wf = ia(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / kf;
}, function(e) {
  return e.getUTCDate() - 1;
});
wf.range;
function Ii(e) {
  return ia(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, function(t, r) {
    return (r - t) / rm;
  });
}
var im = Ii(0), Fc = Ii(1), dv = Ii(2), fv = Ii(3), Xo = Ii(4), pv = Ii(5), hv = Ii(6);
im.range;
Fc.range;
dv.range;
fv.range;
Xo.range;
pv.range;
hv.range;
var Fi = ia(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Fi.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ia(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  });
};
Fi.range;
function Ed(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function kd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Ul(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function mv(e) {
  var t = e.dateTime, r = e.date, i = e.time, a = e.periods, l = e.days, f = e.shortDays, d = e.months, u = e.shortMonths, h = Kl(a), y = Yl(a), v = Kl(l), b = Yl(l), P = Kl(f), k = Yl(f), N = Kl(d), R = Yl(d), m = Kl(u), O = Yl(u), D = {
    a: ee,
    A: ie,
    b: q,
    B: j,
    c: null,
    d: Op,
    e: Op,
    f: Iv,
    g: Xv,
    G: Gv,
    H: Fv,
    I: Mv,
    j: zv,
    L: om,
    m: $v,
    M: Bv,
    p: J,
    q: oe,
    Q: Mp,
    s: zp,
    S: Hv,
    u: Wv,
    U: Vv,
    V: jv,
    w: Uv,
    W: Kv,
    x: null,
    X: null,
    y: Yv,
    Y: qv,
    Z: Zv,
    "%": Fp
  }, L = {
    a: De,
    A: ye,
    b: de,
    B: Ee,
    c: null,
    d: Np,
    e: Np,
    f: tx,
    g: dx,
    G: px,
    H: Qv,
    I: Jv,
    j: ex,
    L: sm,
    m: nx,
    M: rx,
    p: re,
    q: Oe,
    Q: Mp,
    s: zp,
    S: ax,
    u: ix,
    U: ox,
    V: lx,
    w: sx,
    W: cx,
    x: null,
    X: null,
    y: ux,
    Y: fx,
    Z: hx,
    "%": Fp
  }, _ = {
    a: le,
    A: Z,
    b: W,
    B: U,
    c: B,
    d: Dp,
    e: Dp,
    f: Dv,
    g: Pp,
    G: Lp,
    H: _p,
    I: _p,
    j: Cv,
    L: Pv,
    m: Tv,
    M: Av,
    p: X,
    q: wv,
    Q: Ov,
    s: Nv,
    S: Lv,
    u: bv,
    U: Sv,
    V: Ev,
    w: xv,
    W: kv,
    x: $,
    X: ne,
    y: Pp,
    Y: Lp,
    Z: Rv,
    "%": _v
  };
  D.x = C(r, D), D.X = C(i, D), D.c = C(t, D), L.x = C(r, L), L.X = C(i, L), L.c = C(t, L);
  function C(ve, ce) {
    return function(be) {
      var G = [], Pe = -1, Se = 0, je = ve.length, Ke, Ge, Be;
      for (be instanceof Date || (be = /* @__PURE__ */ new Date(+be)); ++Pe < je; )
        ve.charCodeAt(Pe) === 37 && (G.push(ve.slice(Se, Pe)), (Ge = Ap[Ke = ve.charAt(++Pe)]) != null ? Ke = ve.charAt(++Pe) : Ge = Ke === "e" ? " " : "0", (Be = ce[Ke]) && (Ke = Be(be, Ge)), G.push(Ke), Se = Pe + 1);
      return G.push(ve.slice(Se, Pe)), G.join("");
    };
  }
  function V(ve, ce) {
    return function(be) {
      var G = Ul(1900, void 0, 1), Pe = H(G, ve, be += "", 0), Se, je;
      if (Pe != be.length)
        return null;
      if ("Q" in G)
        return new Date(G.Q);
      if ("s" in G)
        return new Date(G.s * 1e3 + ("L" in G ? G.L : 0));
      if (ce && !("Z" in G) && (G.Z = 0), "p" in G && (G.H = G.H % 12 + G.p * 12), G.m === void 0 && (G.m = "q" in G ? G.q : 0), "V" in G) {
        if (G.V < 1 || G.V > 53)
          return null;
        "w" in G || (G.w = 1), "Z" in G ? (Se = kd(Ul(G.y, 0, 1)), je = Se.getUTCDay(), Se = je > 4 || je === 0 ? Fc.ceil(Se) : Fc(Se), Se = wf.offset(Se, (G.V - 1) * 7), G.y = Se.getUTCFullYear(), G.m = Se.getUTCMonth(), G.d = Se.getUTCDate() + (G.w + 6) % 7) : (Se = Ed(Ul(G.y, 0, 1)), je = Se.getDay(), Se = je > 4 || je === 0 ? Nc.ceil(Se) : Nc(Se), Se = Rf.offset(Se, (G.V - 1) * 7), G.y = Se.getFullYear(), G.m = Se.getMonth(), G.d = Se.getDate() + (G.w + 6) % 7);
      } else
        ("W" in G || "U" in G) && ("w" in G || (G.w = "u" in G ? G.u % 7 : "W" in G ? 1 : 0), je = "Z" in G ? kd(Ul(G.y, 0, 1)).getUTCDay() : Ed(Ul(G.y, 0, 1)).getDay(), G.m = 0, G.d = "W" in G ? (G.w + 6) % 7 + G.W * 7 - (je + 5) % 7 : G.w + G.U * 7 - (je + 6) % 7);
      return "Z" in G ? (G.H += G.Z / 100 | 0, G.M += G.Z % 100, kd(G)) : Ed(G);
    };
  }
  function H(ve, ce, be, G) {
    for (var Pe = 0, Se = ce.length, je = be.length, Ke, Ge; Pe < Se; ) {
      if (G >= je)
        return -1;
      if (Ke = ce.charCodeAt(Pe++), Ke === 37) {
        if (Ke = ce.charAt(Pe++), Ge = _[Ke in Ap ? ce.charAt(Pe++) : Ke], !Ge || (G = Ge(ve, be, G)) < 0)
          return -1;
      } else if (Ke != be.charCodeAt(G++))
        return -1;
    }
    return G;
  }
  function X(ve, ce, be) {
    var G = h.exec(ce.slice(be));
    return G ? (ve.p = y.get(G[0].toLowerCase()), be + G[0].length) : -1;
  }
  function le(ve, ce, be) {
    var G = P.exec(ce.slice(be));
    return G ? (ve.w = k.get(G[0].toLowerCase()), be + G[0].length) : -1;
  }
  function Z(ve, ce, be) {
    var G = v.exec(ce.slice(be));
    return G ? (ve.w = b.get(G[0].toLowerCase()), be + G[0].length) : -1;
  }
  function W(ve, ce, be) {
    var G = m.exec(ce.slice(be));
    return G ? (ve.m = O.get(G[0].toLowerCase()), be + G[0].length) : -1;
  }
  function U(ve, ce, be) {
    var G = N.exec(ce.slice(be));
    return G ? (ve.m = R.get(G[0].toLowerCase()), be + G[0].length) : -1;
  }
  function B(ve, ce, be) {
    return H(ve, t, ce, be);
  }
  function $(ve, ce, be) {
    return H(ve, r, ce, be);
  }
  function ne(ve, ce, be) {
    return H(ve, i, ce, be);
  }
  function ee(ve) {
    return f[ve.getDay()];
  }
  function ie(ve) {
    return l[ve.getDay()];
  }
  function q(ve) {
    return u[ve.getMonth()];
  }
  function j(ve) {
    return d[ve.getMonth()];
  }
  function J(ve) {
    return a[+(ve.getHours() >= 12)];
  }
  function oe(ve) {
    return 1 + ~~(ve.getMonth() / 3);
  }
  function De(ve) {
    return f[ve.getUTCDay()];
  }
  function ye(ve) {
    return l[ve.getUTCDay()];
  }
  function de(ve) {
    return u[ve.getUTCMonth()];
  }
  function Ee(ve) {
    return d[ve.getUTCMonth()];
  }
  function re(ve) {
    return a[+(ve.getUTCHours() >= 12)];
  }
  function Oe(ve) {
    return 1 + ~~(ve.getUTCMonth() / 3);
  }
  return {
    format: function(ve) {
      var ce = C(ve += "", D);
      return ce.toString = function() {
        return ve;
      }, ce;
    },
    parse: function(ve) {
      var ce = V(ve += "", !1);
      return ce.toString = function() {
        return ve;
      }, ce;
    },
    utcFormat: function(ve) {
      var ce = C(ve += "", L);
      return ce.toString = function() {
        return ve;
      }, ce;
    },
    utcParse: function(ve) {
      var ce = V(ve += "", !0);
      return ce.toString = function() {
        return ve;
      }, ce;
    }
  };
}
var Ap = { "-": "", _: " ", 0: "0" }, Fn = /^\s*\d+/, yv = /^%/, gv = /[\\^$*+?|[\]().{}]/g;
function Vt(e, t, r) {
  var i = e < 0 ? "-" : "", a = (i ? -e : e) + "", l = a.length;
  return i + (l < r ? new Array(r - l + 1).join(t) + a : a);
}
function vv(e) {
  return e.replace(gv, "\\$&");
}
function Kl(e) {
  return new RegExp("^(?:" + e.map(vv).join("|") + ")", "i");
}
function Yl(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function xv(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 1));
  return i ? (e.w = +i[0], r + i[0].length) : -1;
}
function bv(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 1));
  return i ? (e.u = +i[0], r + i[0].length) : -1;
}
function Sv(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 2));
  return i ? (e.U = +i[0], r + i[0].length) : -1;
}
function Ev(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 2));
  return i ? (e.V = +i[0], r + i[0].length) : -1;
}
function kv(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 2));
  return i ? (e.W = +i[0], r + i[0].length) : -1;
}
function Lp(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 4));
  return i ? (e.y = +i[0], r + i[0].length) : -1;
}
function Pp(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 2));
  return i ? (e.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), r + i[0].length) : -1;
}
function Rv(e, t, r) {
  var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return i ? (e.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), r + i[0].length) : -1;
}
function wv(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 1));
  return i ? (e.q = i[0] * 3 - 3, r + i[0].length) : -1;
}
function Tv(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 2));
  return i ? (e.m = i[0] - 1, r + i[0].length) : -1;
}
function Dp(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 2));
  return i ? (e.d = +i[0], r + i[0].length) : -1;
}
function Cv(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 3));
  return i ? (e.m = 0, e.d = +i[0], r + i[0].length) : -1;
}
function _p(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 2));
  return i ? (e.H = +i[0], r + i[0].length) : -1;
}
function Av(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 2));
  return i ? (e.M = +i[0], r + i[0].length) : -1;
}
function Lv(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 2));
  return i ? (e.S = +i[0], r + i[0].length) : -1;
}
function Pv(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 3));
  return i ? (e.L = +i[0], r + i[0].length) : -1;
}
function Dv(e, t, r) {
  var i = Fn.exec(t.slice(r, r + 6));
  return i ? (e.L = Math.floor(i[0] / 1e3), r + i[0].length) : -1;
}
function _v(e, t, r) {
  var i = yv.exec(t.slice(r, r + 1));
  return i ? r + i[0].length : -1;
}
function Ov(e, t, r) {
  var i = Fn.exec(t.slice(r));
  return i ? (e.Q = +i[0], r + i[0].length) : -1;
}
function Nv(e, t, r) {
  var i = Fn.exec(t.slice(r));
  return i ? (e.s = +i[0], r + i[0].length) : -1;
}
function Op(e, t) {
  return Vt(e.getDate(), t, 2);
}
function Fv(e, t) {
  return Vt(e.getHours(), t, 2);
}
function Mv(e, t) {
  return Vt(e.getHours() % 12 || 12, t, 2);
}
function zv(e, t) {
  return Vt(1 + Rf.count(Ni(e), e), t, 3);
}
function om(e, t) {
  return Vt(e.getMilliseconds(), t, 3);
}
function Iv(e, t) {
  return om(e, t) + "000";
}
function $v(e, t) {
  return Vt(e.getMonth() + 1, t, 2);
}
function Bv(e, t) {
  return Vt(e.getMinutes(), t, 2);
}
function Hv(e, t) {
  return Vt(e.getSeconds(), t, 2);
}
function Wv(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Vv(e, t) {
  return Vt(am.count(Ni(e) - 1, e), t, 2);
}
function lm(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Yo(e) : Yo.ceil(e);
}
function jv(e, t) {
  return e = lm(e), Vt(Yo.count(Ni(e), e) + (Ni(e).getDay() === 4), t, 2);
}
function Uv(e) {
  return e.getDay();
}
function Kv(e, t) {
  return Vt(Nc.count(Ni(e) - 1, e), t, 2);
}
function Yv(e, t) {
  return Vt(e.getFullYear() % 100, t, 2);
}
function Xv(e, t) {
  return e = lm(e), Vt(e.getFullYear() % 100, t, 2);
}
function qv(e, t) {
  return Vt(e.getFullYear() % 1e4, t, 4);
}
function Gv(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Yo(e) : Yo.ceil(e), Vt(e.getFullYear() % 1e4, t, 4);
}
function Zv(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Vt(t / 60 | 0, "0", 2) + Vt(t % 60, "0", 2);
}
function Np(e, t) {
  return Vt(e.getUTCDate(), t, 2);
}
function Qv(e, t) {
  return Vt(e.getUTCHours(), t, 2);
}
function Jv(e, t) {
  return Vt(e.getUTCHours() % 12 || 12, t, 2);
}
function ex(e, t) {
  return Vt(1 + wf.count(Fi(e), e), t, 3);
}
function sm(e, t) {
  return Vt(e.getUTCMilliseconds(), t, 3);
}
function tx(e, t) {
  return sm(e, t) + "000";
}
function nx(e, t) {
  return Vt(e.getUTCMonth() + 1, t, 2);
}
function rx(e, t) {
  return Vt(e.getUTCMinutes(), t, 2);
}
function ax(e, t) {
  return Vt(e.getUTCSeconds(), t, 2);
}
function ix(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ox(e, t) {
  return Vt(im.count(Fi(e) - 1, e), t, 2);
}
function cm(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Xo(e) : Xo.ceil(e);
}
function lx(e, t) {
  return e = cm(e), Vt(Xo.count(Fi(e), e) + (Fi(e).getUTCDay() === 4), t, 2);
}
function sx(e) {
  return e.getUTCDay();
}
function cx(e, t) {
  return Vt(Fc.count(Fi(e) - 1, e), t, 2);
}
function ux(e, t) {
  return Vt(e.getUTCFullYear() % 100, t, 2);
}
function dx(e, t) {
  return e = cm(e), Vt(e.getUTCFullYear() % 100, t, 2);
}
function fx(e, t) {
  return Vt(e.getUTCFullYear() % 1e4, t, 4);
}
function px(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Xo(e) : Xo.ceil(e), Vt(e.getUTCFullYear() % 1e4, t, 4);
}
function hx() {
  return "+0000";
}
function Fp() {
  return "%";
}
function Mp(e) {
  return +e;
}
function zp(e) {
  return Math.floor(+e / 1e3);
}
var $o, Hd, um;
mx({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function mx(e) {
  return $o = mv(e), Hd = $o.format, um = $o.parse, $o.utcFormat, $o.utcParse, $o;
}
const bt = se.createContext({}), _t = {
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
    if (_t.str(e) || _t.num(e))
      return e === t;
    if (_t.obj(e) && _t.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let r;
    for (r in e)
      if (!(r in t))
        return !1;
    for (r in t)
      if (e[r] !== t[r])
        return !1;
    return _t.und(r) ? e === t : !0;
  }
};
function yx(e, t) {
  return (r) => (_t.arr(r) ? r : Object.keys(r)).reduce((i, a) => {
    const l = a;
    return i[l] = e(l), i;
  }, e);
}
function dm() {
  const e = se.useState(!1), t = e[1];
  return se.useCallback(() => t((i) => !i), []);
}
function Ei(e, t) {
  return _t.und(e) || _t.nul(e) ? t : e;
}
function Vo(e) {
  return _t.und(e) ? [] : _t.arr(e) ? e : [e];
}
function Rr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  return _t.fun(e) ? e(...r) : e;
}
function gx(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Br(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Rd(e) {
  const t = gx(e);
  if (_t.und(t))
    return sn({
      to: t
    }, e);
  const r = Object.keys(e).reduce((i, a) => _t.und(t[a]) ? sn({}, i, {
    [a]: e[a]
  }) : i, {});
  return sn({
    to: t
  }, r);
}
function vx(e, t) {
  return t && (_t.fun(t) ? t(e) : _t.obj(t) && (t.current = e)), e;
}
class wr {
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
class Wd extends wr {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof wr && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof wr && t.removeChild(this));
  }
}
class fm extends wr {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof wr && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof wr && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const r = {};
    for (const i in this.payload) {
      const a = this.payload[i];
      t && !(a instanceof wr) || (r[i] = a instanceof wr ? a[t ? "getAnimatedValue" : "getValue"]() : a);
    }
    return r;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let Tf;
function xx(e, t) {
  Tf = {
    fn: e,
    transform: t
  };
}
let pm;
function bx(e) {
  pm = e;
}
let hm = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Mc;
function Sx(e) {
  Mc = e;
}
let mm = () => Date.now(), Ex = (e) => e.current, ym;
function kx(e) {
  ym = e;
}
class Rx extends fm {
  constructor(t, r) {
    super(), this.update = void 0, this.payload = t.style ? sn({}, t, {
      style: ym(t.style)
    }) : t, this.update = r, this.attach();
  }
}
const wx = (e) => _t.fun(e) && !(e.prototype instanceof E.Component), Tx = (e) => se.forwardRef((r, i) => {
  const a = dm(), l = se.useRef(!0), f = se.useRef(null), d = se.useRef(null), u = se.useCallback((b) => {
    const P = f.current, k = () => {
      let N = !1;
      d.current && (N = Tf.fn(d.current, f.current.getAnimatedValue())), (!d.current || N === !1) && a();
    };
    f.current = new Rx(b, k), P && P.detach();
  }, []);
  se.useEffect(() => () => {
    l.current = !1, f.current && f.current.detach();
  }, []), se.useImperativeHandle(i, () => Ex(d)), u(r);
  const h = f.current.getValue();
  h.scrollTop, h.scrollLeft;
  const y = Br(h, ["scrollTop", "scrollLeft"]), v = wx(e) ? void 0 : (b) => d.current = vx(b, i);
  return E.createElement(e, sn({}, y, {
    ref: v
  }));
});
let Ql = !1;
const Di = /* @__PURE__ */ new Set(), gm = () => {
  if (!Ql)
    return !1;
  let e = mm();
  for (let t of Di) {
    let r = !1;
    for (let i = 0; i < t.configs.length; i++) {
      let a = t.configs[i], l, f;
      for (let d = 0; d < a.animatedValues.length; d++) {
        let u = a.animatedValues[d];
        if (u.done)
          continue;
        let h = a.fromValues[d], y = a.toValues[d], v = u.lastPosition, b = y instanceof wr, P = Array.isArray(a.initialVelocity) ? a.initialVelocity[d] : a.initialVelocity;
        if (b && (y = y.getValue()), a.immediate) {
          u.setValue(y), u.done = !0;
          continue;
        }
        if (typeof h == "string" || typeof y == "string") {
          u.setValue(y), u.done = !0;
          continue;
        }
        if (a.duration !== void 0)
          v = h + a.easing((e - u.startTime) / a.duration) * (y - h), l = e >= u.startTime + a.duration;
        else if (a.decay)
          v = h + P / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - u.startTime))), l = Math.abs(u.lastPosition - v) < 0.1, l && (y = v);
        else {
          f = u.lastTime !== void 0 ? u.lastTime : e, P = u.lastVelocity !== void 0 ? u.lastVelocity : a.initialVelocity, e > f + 64 && (f = e);
          let k = Math.floor(e - f);
          for (let O = 0; O < k; ++O) {
            let D = -a.tension * (v - y), L = -a.friction * P, _ = (D + L) / a.mass;
            P = P + _ * 1 / 1e3, v = v + P * 1 / 1e3;
          }
          let N = a.clamp && a.tension !== 0 ? h < y ? v > y : v < y : !1, R = Math.abs(P) <= a.precision, m = a.tension !== 0 ? Math.abs(y - v) <= a.precision : !0;
          l = N || R && m, u.lastVelocity = P, u.lastTime = e;
        }
        b && !a.toValues[d].done && (l = !1), l ? (u.value !== y && (v = y), u.done = !0) : r = !0, u.setValue(v), u.lastPosition = v;
      }
      t.props.onFrame && (t.values[a.name] = a.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), r || (Di.delete(t), t.stop(!0));
  }
  return Di.size ? hm(gm) : Ql = !1, Ql;
}, Cx = (e) => {
  Di.has(e) || Di.add(e), Ql || (Ql = !0, hm(gm));
}, Ax = (e) => {
  Di.has(e) && Di.delete(e);
};
function zc(e, t, r) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return zc({
      range: e,
      output: t,
      extrapolate: r
    });
  if (Mc && typeof e.output[0] == "string")
    return Mc(e);
  const i = e, a = i.output, l = i.range || [0, 1], f = i.extrapolateLeft || i.extrapolate || "extend", d = i.extrapolateRight || i.extrapolate || "extend", u = i.easing || ((h) => h);
  return (h) => {
    const y = Px(h, l);
    return Lx(h, l[y], l[y + 1], a[y], a[y + 1], u, f, d, i.map);
  };
}
function Lx(e, t, r, i, a, l, f, d, u) {
  let h = u ? u(e) : e;
  if (h < t) {
    if (f === "identity")
      return h;
    f === "clamp" && (h = t);
  }
  if (h > r) {
    if (d === "identity")
      return h;
    d === "clamp" && (h = r);
  }
  return i === a ? i : t === r ? e <= t ? i : a : (t === -1 / 0 ? h = -h : r === 1 / 0 ? h = h - t : h = (h - t) / (r - t), h = l(h), i === -1 / 0 ? h = -h : a === 1 / 0 ? h = h + i : h = h * (a - i) + i, h);
}
function Px(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
class qo extends Wd {
  constructor(t, r, i, a) {
    super(), this.calc = void 0, this.payload = t instanceof Wd && !(t instanceof qo) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = zc(r, i, a);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, r, i) {
    this.calc = zc(t, r, i);
  }
  interpolate(t, r, i) {
    return new qo(this, t, r, i);
  }
}
const Dx = (e, t, r) => e && new qo(e, t, r);
function vm(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((r) => vm(r, t));
}
class Vd extends wr {
  constructor(t) {
    var r;
    super(), r = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(i, a) {
      a === void 0 && (a = !0), r.value = i, a && r.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && vm(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, r, i) {
    return new qo(this, t, r, i);
  }
}
class _x extends Wd {
  constructor(t) {
    super(), this.payload = t.map((r) => new Vd(r));
  }
  setValue(t, r) {
    r === void 0 && (r = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((i, a) => this.payload[a].setValue(i, r)) : this.payload.forEach((i) => i.setValue(t, r));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, r) {
    return new qo(this, t, r);
  }
}
let Ox = 0;
class Nx {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Ox++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const r = Rd(t), i = r.delay, a = i === void 0 ? 0 : i, l = r.to, f = Br(r, ["delay", "to"]);
    if (_t.arr(l) || _t.fun(l))
      this.queue.push(sn({}, f, {
        delay: a,
        to: l
      }));
    else if (l) {
      let d = {};
      Object.entries(l).forEach((u) => {
        let h = u[0], y = u[1];
        const v = sn({
          to: {
            [h]: y
          },
          delay: Rr(a, h)
        }, f), b = d[v.delay] && d[v.delay].to;
        d[v.delay] = sn({}, d[v.delay], v, {
          to: sn({}, b, v.to)
        });
      }), this.queue = Object.values(d);
    }
    return this.queue = this.queue.sort((d, u) => d.delay - u.delay), this.diff(f), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((a) => {
        let l = a.from, f = l === void 0 ? {} : l, d = a.to, u = d === void 0 ? {} : d;
        _t.obj(f) && (this.merged = sn({}, f, this.merged)), _t.obj(u) && (this.merged = sn({}, this.merged, u));
      });
      const r = this.local = ++this.guid, i = this.localQueue = this.queue;
      this.queue = [], i.forEach((a, l) => {
        let f = a.delay, d = Br(a, ["delay"]);
        const u = (y) => {
          l === i.length - 1 && r === this.guid && y && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let h = _t.arr(d.to) || _t.fun(d.to);
        f ? setTimeout(() => {
          r === this.guid && (h ? this.runAsync(d, u) : this.diff(d).start(u));
        }, f) : h ? this.runAsync(d, u) : this.diff(d).start(u);
      });
    } else
      _t.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Cx(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((r) => r(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && Ax(this), this;
  }
  runAsync(t, r) {
    var i = this;
    t.delay;
    let a = Br(t, ["delay"]);
    const l = this.local;
    let f = Promise.resolve(void 0);
    if (_t.arr(a.to))
      for (let d = 0; d < a.to.length; d++) {
        const u = d, h = sn({}, a, Rd(a.to[u]));
        _t.arr(h.config) && (h.config = h.config[u]), f = f.then(() => {
          if (l === this.guid)
            return new Promise((y) => this.diff(h).start(y));
        });
      }
    else if (_t.fun(a.to)) {
      let d = 0, u;
      f = f.then(() => a.to(
        // next(props)
        (h) => {
          const y = sn({}, a, Rd(h));
          if (_t.arr(y.config) && (y.config = y.config[d]), d++, l === this.guid)
            return u = new Promise((v) => this.diff(y).start(v));
        },
        // cancel()
        function(h) {
          return h === void 0 && (h = !0), i.stop(h);
        }
      ).then(() => u));
    }
    f.then(r);
  }
  diff(t) {
    this.props = sn({}, this.props, t);
    let r = this.props, i = r.from, a = i === void 0 ? {} : i, l = r.to, f = l === void 0 ? {} : l, d = r.config, u = d === void 0 ? {} : d, h = r.reverse, y = r.attach, v = r.reset, b = r.immediate;
    if (h) {
      var P = [f, a];
      a = P[0], f = P[1];
    }
    this.merged = sn({}, a, this.merged, f), this.hasChanged = !1;
    let k = y && y(this);
    if (this.animations = Object.entries(this.merged).reduce((N, R) => {
      let m = R[0], O = R[1], D = N[m] || {};
      const L = _t.num(O), _ = _t.str(O) && !O.startsWith("#") && !/\d/.test(O) && !pm[O], C = _t.arr(O), V = !L && !C && !_;
      let H = _t.und(a[m]) ? O : a[m], X = L || C || _ ? O : 1, le = Rr(u, m);
      k && (X = k.animations[m].parent);
      let Z = D.parent, W = D.interpolation, U = Vo(k ? X.getPayload() : X), B, $ = O;
      V && ($ = Mc({
        range: [0, 1],
        output: [O, O]
      })(1));
      let ne = W && W.getValue();
      const ie = !_t.und(Z) && D.animatedValues.some((oe) => !oe.done), q = !_t.equ($, ne), j = !_t.equ($, D.previous), J = !_t.equ(le, D.config);
      if (v || j && q || J) {
        if (L || _)
          Z = W = D.parent || new Vd(H);
        else if (C)
          Z = W = D.parent || new _x(H);
        else if (V) {
          let oe = D.interpolation && D.interpolation.calc(D.parent.value);
          oe = oe !== void 0 && !v ? oe : H, D.parent ? (Z = D.parent, Z.setValue(0, !1)) : Z = new Vd(0);
          const De = {
            output: [oe, O]
          };
          D.interpolation ? (W = D.interpolation, D.interpolation.updateConfig(De)) : W = Z.interpolate(De);
        }
        return U = Vo(k ? X.getPayload() : X), B = Vo(Z.getPayload()), v && !V && Z.setValue(H, !1), this.hasChanged = !0, B.forEach((oe) => {
          oe.startPosition = oe.value, oe.lastPosition = oe.value, oe.lastVelocity = ie ? oe.lastVelocity : void 0, oe.lastTime = ie ? oe.lastTime : void 0, oe.startTime = mm(), oe.done = !1, oe.animatedStyles.clear();
        }), Rr(b, m) && Z.setValue(V ? X : O, !1), sn({}, N, {
          [m]: sn({}, D, {
            name: m,
            parent: Z,
            interpolation: W,
            animatedValues: B,
            toValues: U,
            previous: $,
            config: le,
            fromValues: Vo(Z.getValue()),
            immediate: Rr(b, m),
            initialVelocity: Ei(le.velocity, 0),
            clamp: Ei(le.clamp, !1),
            precision: Ei(le.precision, 0.01),
            tension: Ei(le.tension, 170),
            friction: Ei(le.friction, 26),
            mass: Ei(le.mass, 1),
            duration: le.duration,
            easing: Ei(le.easing, (oe) => oe),
            decay: le.decay
          })
        });
      } else
        return q ? N : (V && (Z.setValue(1, !1), W.updateConfig({
          output: [$, $]
        })), Z.done = !0, this.hasChanged = !0, sn({}, N, {
          [m]: sn({}, N[m], {
            previous: $
          })
        }));
    }, this.animations), this.hasChanged) {
      this.configs = Object.values(this.animations), this.values = {}, this.interpolations = {};
      for (let N in this.animations)
        this.interpolations[N] = this.animations[N].interpolation, this.values[N] = this.animations[N].interpolation.getValue();
    }
    return this;
  }
  destroy() {
    this.stop(), this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.local = 0;
  }
}
let Fx = 0;
const kc = "enter", wd = "leave", Td = "update", Mx = (e, t) => (typeof t == "function" ? e.map(t) : Vo(t)).map(String), jd = (e) => {
  let t = e.items, r = e.keys, i = r === void 0 ? (l) => l : r, a = Br(e, ["items", "keys"]);
  return t = Vo(t !== void 0 ? t : null), sn({
    items: t,
    keys: Mx(t, i)
  }, a);
};
function zx(e, t, r) {
  const i = sn({
    items: e,
    keys: t || ((O) => O)
  }, r), a = jd(i), l = a.lazy, f = l === void 0 ? !1 : l;
  a.unique;
  const d = a.reset, u = d === void 0 ? !1 : d;
  a.enter, a.leave, a.update;
  const h = a.onDestroyed;
  a.keys, a.items;
  const y = a.onFrame, v = a.onRest, b = a.onStart, P = a.ref, k = Br(a, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), N = dm(), R = se.useRef(!1), m = se.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!i.ref,
    instances: !R.current && /* @__PURE__ */ new Map(),
    forceUpdate: N
  });
  return se.useImperativeHandle(i.ref, () => ({
    start: () => Promise.all(Array.from(m.current.instances).map((O) => {
      let D = O[1];
      return new Promise((L) => D.start(L));
    })),
    stop: (O) => Array.from(m.current.instances).forEach((D) => D[1].stop(O)),
    get controllers() {
      return Array.from(m.current.instances).map((O) => O[1]);
    }
  })), m.current = Ix(m.current, i), m.current.changed && m.current.transitions.forEach((O) => {
    const D = O.slot, L = O.from, _ = O.to, C = O.config, V = O.trail, H = O.key, X = O.item;
    m.current.instances.has(H) || m.current.instances.set(H, new Nx());
    const le = m.current.instances.get(H), Z = sn({}, k, {
      to: _,
      from: L,
      config: C,
      ref: P,
      onRest: (W) => {
        m.current.mounted && (O.destroyed && (!P && !f && Ip(m, H), h && h(X)), !Array.from(m.current.instances).some(($) => !$[1].idle) && (P || f) && m.current.deleted.length > 0 && Ip(m), v && v(X, D, W));
      },
      onStart: b && (() => b(X, D)),
      onFrame: y && ((W) => y(X, D, W)),
      delay: V,
      reset: u && D === kc
      // Update controller
    });
    le.update(Z), m.current.paused || le.start();
  }), se.useEffect(() => (m.current.mounted = R.current = !0, () => {
    m.current.mounted = R.current = !1, Array.from(m.current.instances).map((O) => O[1].destroy()), m.current.instances.clear();
  }), []), m.current.transitions.map((O) => {
    let D = O.item, L = O.slot, _ = O.key;
    return {
      item: D,
      key: _,
      state: L,
      props: m.current.instances.get(_).getValues()
    };
  });
}
function Ip(e, t) {
  const r = e.current.deleted;
  for (let i of r) {
    let a = i.key;
    const l = (f) => f.key !== a;
    (_t.und(t) || t === a) && (e.current.instances.delete(a), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function Ix(e, t) {
  let r = e.first, i = e.prevProps, a = Br(e, ["first", "prevProps"]), l = jd(t), f = l.items, d = l.keys, u = l.initial, h = l.from, y = l.enter, v = l.leave, b = l.update, P = l.trail, k = P === void 0 ? 0 : P, N = l.unique, R = l.config, m = l.order, O = m === void 0 ? [kc, wd, Td] : m, D = jd(i), L = D.keys, _ = D.items, C = sn({}, a.current), V = [...a.deleted], H = Object.keys(C), X = new Set(H), le = new Set(d), Z = d.filter((ne) => !X.has(ne)), W = a.transitions.filter((ne) => !ne.destroyed && !le.has(ne.originalKey)).map((ne) => ne.originalKey), U = d.filter((ne) => X.has(ne)), B = -k;
  for (; O.length; )
    switch (O.shift()) {
      case kc: {
        Z.forEach((ee, ie) => {
          N && V.find((oe) => oe.originalKey === ee) && (V = V.filter((oe) => oe.originalKey !== ee));
          const q = d.indexOf(ee), j = f[q], J = r && u !== void 0 ? "initial" : kc;
          C[ee] = {
            slot: J,
            originalKey: ee,
            key: N ? String(ee) : Fx++,
            item: j,
            trail: B = B + k,
            config: Rr(R, j, J),
            from: Rr(r && u !== void 0 ? u || {} : h, j),
            to: Rr(y, j)
          };
        });
        break;
      }
      case wd: {
        W.forEach((ee) => {
          const ie = L.indexOf(ee), q = _[ie], j = wd;
          V.unshift(sn({}, C[ee], {
            slot: j,
            destroyed: !0,
            left: L[Math.max(0, ie - 1)],
            right: L[Math.min(L.length, ie + 1)],
            trail: B = B + k,
            config: Rr(R, q, j),
            to: Rr(v, q)
          })), delete C[ee];
        });
        break;
      }
      case Td: {
        U.forEach((ee) => {
          const ie = d.indexOf(ee), q = f[ie], j = Td;
          C[ee] = sn({}, C[ee], {
            item: q,
            slot: j,
            trail: B = B + k,
            config: Rr(R, q, j),
            to: Rr(b, q)
          });
        });
        break;
      }
    }
  let $ = d.map((ne) => C[ne]);
  return V.forEach((ne) => {
    let ee = ne.left;
    ne.right;
    let ie = Br(ne, ["left", "right"]), q;
    (q = $.findIndex((j) => j.originalKey === ee)) !== -1 && (q += 1), q = Math.max(0, q), $ = [...$.slice(0, q), ie, ...$.slice(q)];
  }), sn({}, a, {
    changed: Z.length || W.length || U.length,
    first: r && Z.length === 0,
    transitions: $,
    current: C,
    deleted: V,
    prevProps: t
  });
}
class $x extends fm {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof wr) && (t = Tf.transform(t)), this.payload = t;
  }
}
const Ic = {
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
}, Tr = "[-+]?\\d*\\.?\\d+", $c = Tr + "%";
function lu() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Bx = new RegExp("rgb" + lu(Tr, Tr, Tr)), Hx = new RegExp("rgba" + lu(Tr, Tr, Tr, Tr)), Wx = new RegExp("hsl" + lu(Tr, $c, $c)), Vx = new RegExp("hsla" + lu(Tr, $c, $c, Tr)), jx = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Ux = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Kx = /^#([0-9a-fA-F]{6})$/, Yx = /^#([0-9a-fA-F]{8})$/;
function Xx(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Kx.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ic.hasOwnProperty(e) ? Ic[e] : (t = Bx.exec(e)) ? (Bo(t[1]) << 24 | // r
  Bo(t[2]) << 16 | // g
  Bo(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Hx.exec(e)) ? (Bo(t[1]) << 24 | // r
  Bo(t[2]) << 16 | // g
  Bo(t[3]) << 8 | // b
  Hp(t[4])) >>> // a
  0 : (t = jx.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Yx.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ux.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Wx.exec(e)) ? ($p(
    Bp(t[1]),
    // h
    uc(t[2]),
    // s
    uc(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Vx.exec(e)) ? ($p(
    Bp(t[1]),
    // h
    uc(t[2]),
    // s
    uc(t[3])
    // l
  ) | Hp(t[4])) >>> // a
  0 : null;
}
function Cd(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function $p(e, t, r) {
  const i = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - i, l = Cd(a, i, e + 1 / 3), f = Cd(a, i, e), d = Cd(a, i, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(f * 255) << 16 | Math.round(d * 255) << 8;
}
function Bo(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Bp(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Hp(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function uc(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Wp(e) {
  let t = Xx(e);
  if (t === null)
    return e;
  t = t || 0;
  let r = (t & 4278190080) >>> 24, i = (t & 16711680) >>> 16, a = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${r}, ${i}, ${a}, ${l})`;
}
const dc = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, qx = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Gx = new RegExp(`(${Object.keys(Ic).join("|")})`, "g"), Zx = (e) => {
  const t = e.output.map((a) => a.replace(qx, Wp)).map((a) => a.replace(Gx, Wp)), r = t[0].match(dc).map(() => []);
  t.forEach((a) => {
    a.match(dc).forEach((l, f) => r[f].push(+l));
  });
  const i = t[0].match(dc).map((a, l) => zc(sn({}, e, {
    output: r[l]
  })));
  return (a) => {
    let l = 0;
    return t[0].replace(dc, () => i[l++](a)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (f, d, u, h, y) => `rgba(${Math.round(d)}, ${Math.round(u)}, ${Math.round(h)}, ${y})`);
  };
};
let Jl = {
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
const Qx = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Jx = ["Webkit", "Ms", "Moz", "O"];
Jl = Object.keys(Jl).reduce((e, t) => (Jx.forEach((r) => e[Qx(r, t)] = e[t]), e), Jl);
function eb(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !r && typeof t == "number" && t !== 0 && !(Jl.hasOwnProperty(e) && Jl[e]) ? t + "px" : ("" + t).trim();
}
const Vp = {};
kx((e) => new $x(e));
Sx(Zx);
bx(Ic);
xx((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const a = t.style, l = t.children, f = t.scrollTop, d = t.scrollLeft, u = Br(t, ["style", "children", "scrollTop", "scrollLeft"]), h = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    f !== void 0 && (e.scrollTop = f), d !== void 0 && (e.scrollLeft = d), l !== void 0 && (e.textContent = l);
    for (let y in a)
      if (a.hasOwnProperty(y)) {
        var r = y.indexOf("--") === 0, i = eb(y, a[y], r);
        y === "float" && (y = "cssFloat"), r ? e.style.setProperty(y, i) : e.style[y] = i;
      }
    for (let y in u) {
      const v = h ? y : Vp[y] || (Vp[y] = y.replace(/([A-Z])/g, (b) => "-" + b.toLowerCase()));
      typeof e.getAttribute(v) < "u" && e.setAttribute(v, u[y]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const tb = [
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
], nb = yx(Tx), jp = nb(tb);
function rb(e) {
  return e.innerRadius;
}
function ab(e) {
  return e.outerRadius;
}
function ib(e) {
  return e.startAngle;
}
function ob(e) {
  return e.endAngle;
}
function lb(e) {
  return e && e.padAngle;
}
function sb(e, t, r, i, a, l, f, d) {
  var u = r - e, h = i - t, y = f - a, v = d - l, b = v * u - y * h;
  if (!(b * b < Un))
    return b = (y * (t - l) - v * (e - a)) / b, [e + b * u, t + b * h];
}
function fc(e, t, r, i, a, l, f) {
  var d = e - r, u = t - i, h = (f ? l : -l) / Ho(d * d + u * u), y = h * u, v = -h * d, b = e + y, P = t + v, k = r + y, N = i + v, R = (b + k) / 2, m = (P + N) / 2, O = k - b, D = N - P, L = O * O + D * D, _ = a - l, C = b * N - k * P, V = (D < 0 ? -1 : 1) * Ho(Dy(0, _ * _ * L - C * C)), H = (C * D - O * V) / L, X = (-C * O - D * V) / L, le = (C * D + O * V) / L, Z = (-C * O + D * V) / L, W = H - R, U = X - m, B = le - R, $ = Z - m;
  return W * W + U * U > B * B + $ * $ && (H = le, X = Z), {
    cx: H,
    cy: X,
    x01: -y,
    y01: -v,
    x11: H * (a / _ - 1),
    y11: X * (a / _ - 1)
  };
}
function cb() {
  var e = rb, t = ab, r = It(0), i = null, a = ib, l = ob, f = lb, d = null;
  function u() {
    var h, y, v = +e.apply(this, arguments), b = +t.apply(this, arguments), P = a.apply(this, arguments) - Jf, k = l.apply(this, arguments) - Jf, N = ep(k - P), R = k > P;
    if (d || (d = h = iu()), b < v && (y = b, b = v, v = y), !(b > Un))
      d.moveTo(0, 0);
    else if (N > Sc - Un)
      d.moveTo(b * bi(P), b * Fr(P)), d.arc(0, 0, b, P, k, !R), v > Un && (d.moveTo(v * bi(k), v * Fr(k)), d.arc(0, 0, v, k, P, R));
    else {
      var m = P, O = k, D = P, L = k, _ = N, C = N, V = f.apply(this, arguments) / 2, H = V > Un && (i ? +i.apply(this, arguments) : Ho(v * v + b * b)), X = md(ep(b - v) / 2, +r.apply(this, arguments)), le = X, Z = X, W, U;
      if (H > Un) {
        var B = tp(H / v * Fr(V)), $ = tp(H / b * Fr(V));
        (_ -= B * 2) > Un ? (B *= R ? 1 : -1, D += B, L -= B) : (_ = 0, D = L = (P + k) / 2), (C -= $ * 2) > Un ? ($ *= R ? 1 : -1, m += $, O -= $) : (C = 0, m = O = (P + k) / 2);
      }
      var ne = b * bi(m), ee = b * Fr(m), ie = v * bi(L), q = v * Fr(L);
      if (X > Un) {
        var j = b * bi(O), J = b * Fr(O), oe = v * bi(D), De = v * Fr(D), ye;
        if (N < Qf && (ye = sb(ne, ee, oe, De, j, J, ie, q))) {
          var de = ne - ye[0], Ee = ee - ye[1], re = j - ye[0], Oe = J - ye[1], ve = 1 / Fr(Py((de * re + Ee * Oe) / (Ho(de * de + Ee * Ee) * Ho(re * re + Oe * Oe))) / 2), ce = Ho(ye[0] * ye[0] + ye[1] * ye[1]);
          le = md(X, (v - ce) / (ve - 1)), Z = md(X, (b - ce) / (ve + 1));
        }
      }
      C > Un ? Z > Un ? (W = fc(oe, De, ne, ee, b, Z, R), U = fc(j, J, ie, q, b, Z, R), d.moveTo(W.cx + W.x01, W.cy + W.y01), Z < X ? d.arc(W.cx, W.cy, Z, jn(W.y01, W.x01), jn(U.y01, U.x01), !R) : (d.arc(W.cx, W.cy, Z, jn(W.y01, W.x01), jn(W.y11, W.x11), !R), d.arc(0, 0, b, jn(W.cy + W.y11, W.cx + W.x11), jn(U.cy + U.y11, U.cx + U.x11), !R), d.arc(U.cx, U.cy, Z, jn(U.y11, U.x11), jn(U.y01, U.x01), !R))) : (d.moveTo(ne, ee), d.arc(0, 0, b, m, O, !R)) : d.moveTo(ne, ee), !(v > Un) || !(_ > Un) ? d.lineTo(ie, q) : le > Un ? (W = fc(ie, q, j, J, v, -le, R), U = fc(ne, ee, oe, De, v, -le, R), d.lineTo(W.cx + W.x01, W.cy + W.y01), le < X ? d.arc(W.cx, W.cy, le, jn(W.y01, W.x01), jn(U.y01, U.x01), !R) : (d.arc(W.cx, W.cy, le, jn(W.y01, W.x01), jn(W.y11, W.x11), !R), d.arc(0, 0, v, jn(W.cy + W.y11, W.cx + W.x11), jn(U.cy + U.y11, U.cx + U.x11), R), d.arc(U.cx, U.cy, le, jn(U.y11, U.x11), jn(U.y01, U.x01), !R))) : d.arc(0, 0, v, L, D, R);
    }
    if (d.closePath(), h)
      return d = null, h + "" || null;
  }
  return u.centroid = function() {
    var h = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, y = (+a.apply(this, arguments) + +l.apply(this, arguments)) / 2 - Qf / 2;
    return [bi(y) * h, Fr(y) * h];
  }, u.innerRadius = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : It(+h), u) : e;
  }, u.outerRadius = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : It(+h), u) : t;
  }, u.cornerRadius = function(h) {
    return arguments.length ? (r = typeof h == "function" ? h : It(+h), u) : r;
  }, u.padRadius = function(h) {
    return arguments.length ? (i = h == null ? null : typeof h == "function" ? h : It(+h), u) : i;
  }, u.startAngle = function(h) {
    return arguments.length ? (a = typeof h == "function" ? h : It(+h), u) : a;
  }, u.endAngle = function(h) {
    return arguments.length ? (l = typeof h == "function" ? h : It(+h), u) : l;
  }, u.padAngle = function(h) {
    return arguments.length ? (f = typeof h == "function" ? h : It(+h), u) : f;
  }, u.context = function(h) {
    return arguments.length ? (d = h ?? null, u) : d;
  }, u;
}
function xm(e) {
  this._context = e;
}
xm.prototype = {
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
function su(e) {
  return new xm(e);
}
function Cf(e) {
  return e[0];
}
function Af(e) {
  return e[1];
}
function bm() {
  var e = Cf, t = Af, r = It(!0), i = null, a = su, l = null;
  function f(d) {
    var u, h = d.length, y, v = !1, b;
    for (i == null && (l = a(b = iu())), u = 0; u <= h; ++u)
      !(u < h && r(y = d[u], u, d)) === v && ((v = !v) ? l.lineStart() : l.lineEnd()), v && l.point(+e(y, u, d), +t(y, u, d));
    if (b)
      return l = null, b + "" || null;
  }
  return f.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : It(+d), f) : e;
  }, f.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : It(+d), f) : t;
  }, f.defined = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : It(!!d), f) : r;
  }, f.curve = function(d) {
    return arguments.length ? (a = d, i != null && (l = a(i)), f) : a;
  }, f.context = function(d) {
    return arguments.length ? (d == null ? i = l = null : l = a(i = d), f) : i;
  }, f;
}
function ub() {
  var e = Cf, t = null, r = It(0), i = Af, a = It(!0), l = null, f = su, d = null;
  function u(y) {
    var v, b, P, k = y.length, N, R = !1, m, O = new Array(k), D = new Array(k);
    for (l == null && (d = f(m = iu())), v = 0; v <= k; ++v) {
      if (!(v < k && a(N = y[v], v, y)) === R)
        if (R = !R)
          b = v, d.areaStart(), d.lineStart();
        else {
          for (d.lineEnd(), d.lineStart(), P = v - 1; P >= b; --P)
            d.point(O[P], D[P]);
          d.lineEnd(), d.areaEnd();
        }
      R && (O[v] = +e(N, v, y), D[v] = +r(N, v, y), d.point(t ? +t(N, v, y) : O[v], i ? +i(N, v, y) : D[v]));
    }
    if (m)
      return d = null, m + "" || null;
  }
  function h() {
    return bm().defined(a).curve(f).context(l);
  }
  return u.x = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : It(+y), t = null, u) : e;
  }, u.x0 = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : It(+y), u) : e;
  }, u.x1 = function(y) {
    return arguments.length ? (t = y == null ? null : typeof y == "function" ? y : It(+y), u) : t;
  }, u.y = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : It(+y), i = null, u) : r;
  }, u.y0 = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : It(+y), u) : r;
  }, u.y1 = function(y) {
    return arguments.length ? (i = y == null ? null : typeof y == "function" ? y : It(+y), u) : i;
  }, u.lineX0 = u.lineY0 = function() {
    return h().x(e).y(r);
  }, u.lineY1 = function() {
    return h().x(e).y(i);
  }, u.lineX1 = function() {
    return h().x(t).y(r);
  }, u.defined = function(y) {
    return arguments.length ? (a = typeof y == "function" ? y : It(!!y), u) : a;
  }, u.curve = function(y) {
    return arguments.length ? (f = y, l != null && (d = f(l)), u) : f;
  }, u.context = function(y) {
    return arguments.length ? (y == null ? l = d = null : d = f(l = y), u) : l;
  }, u;
}
function db(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function fb(e) {
  return e;
}
function pb() {
  var e = fb, t = db, r = null, i = It(0), a = It(Sc), l = It(0);
  function f(d) {
    var u, h = d.length, y, v, b = 0, P = new Array(h), k = new Array(h), N = +i.apply(this, arguments), R = Math.min(Sc, Math.max(-Sc, a.apply(this, arguments) - N)), m, O = Math.min(Math.abs(R) / h, l.apply(this, arguments)), D = O * (R < 0 ? -1 : 1), L;
    for (u = 0; u < h; ++u)
      (L = k[P[u] = u] = +e(d[u], u, d)) > 0 && (b += L);
    for (t != null ? P.sort(function(_, C) {
      return t(k[_], k[C]);
    }) : r != null && P.sort(function(_, C) {
      return r(d[_], d[C]);
    }), u = 0, v = b ? (R - h * D) / b : 0; u < h; ++u, N = m)
      y = P[u], L = k[y], m = N + (L > 0 ? L * v : 0) + D, k[y] = {
        data: d[y],
        index: u,
        value: L,
        startAngle: N,
        endAngle: m,
        padAngle: O
      };
    return k;
  }
  return f.value = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : It(+d), f) : e;
  }, f.sortValues = function(d) {
    return arguments.length ? (t = d, r = null, f) : t;
  }, f.sort = function(d) {
    return arguments.length ? (r = d, t = null, f) : r;
  }, f.startAngle = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : It(+d), f) : i;
  }, f.endAngle = function(d) {
    return arguments.length ? (a = typeof d == "function" ? d : It(+d), f) : a;
  }, f.padAngle = function(d) {
    return arguments.length ? (l = typeof d == "function" ? d : It(+d), f) : l;
  }, f;
}
var Ud = Array.prototype.slice;
function hb(e) {
  return e.source;
}
function mb(e) {
  return e.target;
}
function yb(e) {
  var t = hb, r = mb, i = Cf, a = Af, l = null;
  function f() {
    var d, u = Ud.call(arguments), h = t.apply(this, u), y = r.apply(this, u);
    if (l || (l = d = iu()), e(l, +i.apply(this, (u[0] = h, u)), +a.apply(this, u), +i.apply(this, (u[0] = y, u)), +a.apply(this, u)), d)
      return l = null, d + "" || null;
  }
  return f.source = function(d) {
    return arguments.length ? (t = d, f) : t;
  }, f.target = function(d) {
    return arguments.length ? (r = d, f) : r;
  }, f.x = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : It(+d), f) : i;
  }, f.y = function(d) {
    return arguments.length ? (a = typeof d == "function" ? d : It(+d), f) : a;
  }, f.context = function(d) {
    return arguments.length ? (l = d ?? null, f) : l;
  }, f;
}
function gb(e, t, r, i, a) {
  e.moveTo(t, r), e.bezierCurveTo(t = (t + i) / 2, r, t, a, i, a);
}
function vb() {
  return yb(gb);
}
function Ia() {
}
function Bc(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function cu(e) {
  this._context = e;
}
cu.prototype = {
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
        Bc(this, this._x1, this._y1);
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
        Bc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function xb(e) {
  return new cu(e);
}
function Sm(e) {
  this._context = e;
}
Sm.prototype = {
  areaStart: Ia,
  areaEnd: Ia,
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
        Bc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function bb(e) {
  return new Sm(e);
}
function Em(e) {
  this._context = e;
}
Em.prototype = {
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
        var r = (this._x0 + 4 * this._x1 + e) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, i) : this._context.moveTo(r, i);
        break;
      case 3:
        this._point = 4;
      default:
        Bc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Sb(e) {
  return new Em(e);
}
function km(e, t) {
  this._basis = new cu(e), this._beta = t;
}
km.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var i = e[0], a = t[0], l = e[r] - i, f = t[r] - a, d = -1, u; ++d <= r; )
        u = d / r, this._basis.point(
          this._beta * e[d] + (1 - this._beta) * (i + u * l),
          this._beta * t[d] + (1 - this._beta) * (a + u * f)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const Eb = function e(t) {
  function r(i) {
    return t === 1 ? new cu(i) : new km(i, t);
  }
  return r.beta = function(i) {
    return e(+i);
  }, r;
}(0.85);
function Hc(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Lf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Lf.prototype = {
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
        Hc(this, this._x1, this._y1);
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
        Hc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const kb = function e(t) {
  function r(i) {
    return new Lf(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
}(0);
function Pf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Pf.prototype = {
  areaStart: Ia,
  areaEnd: Ia,
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
        Hc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Rb = function e(t) {
  function r(i) {
    return new Pf(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
}(0);
function Df(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Df.prototype = {
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
        Hc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const wb = function e(t) {
  function r(i) {
    return new Df(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
}(0);
function _f(e, t, r) {
  var i = e._x1, a = e._y1, l = e._x2, f = e._y2;
  if (e._l01_a > Un) {
    var d = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, u = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * d - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / u, a = (a * d - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / u;
  }
  if (e._l23_a > Un) {
    var h = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, y = 3 * e._l23_a * (e._l23_a + e._l12_a);
    l = (l * h + e._x1 * e._l23_2a - t * e._l12_2a) / y, f = (f * h + e._y1 * e._l23_2a - r * e._l12_2a) / y;
  }
  e._context.bezierCurveTo(i, a, l, f, e._x2, e._y2);
}
function Rm(e, t) {
  this._context = e, this._alpha = t;
}
Rm.prototype = {
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
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
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
        _f(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Tb = function e(t) {
  function r(i) {
    return t ? new Rm(i, t) : new Lf(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
}(0.5);
function wm(e, t) {
  this._context = e, this._alpha = t;
}
wm.prototype = {
  areaStart: Ia,
  areaEnd: Ia,
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
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
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
        _f(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Cb = function e(t) {
  function r(i) {
    return t ? new wm(i, t) : new Pf(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
}(0.5);
function Tm(e, t) {
  this._context = e, this._alpha = t;
}
Tm.prototype = {
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
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
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
        _f(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ab = function e(t) {
  function r(i) {
    return t ? new Tm(i, t) : new Df(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
}(0.5);
function Cm(e) {
  this._context = e;
}
Cm.prototype = {
  areaStart: Ia,
  areaEnd: Ia,
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
function Kd(e) {
  return new Cm(e);
}
function Up(e) {
  return e < 0 ? -1 : 1;
}
function Kp(e, t, r) {
  var i = e._x1 - e._x0, a = t - e._x1, l = (e._y1 - e._y0) / (i || a < 0 && -0), f = (r - e._y1) / (a || i < 0 && -0), d = (l * a + f * i) / (i + a);
  return (Up(l) + Up(f)) * Math.min(Math.abs(l), Math.abs(f), 0.5 * Math.abs(d)) || 0;
}
function Yp(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Ad(e, t, r) {
  var i = e._x0, a = e._y0, l = e._x1, f = e._y1, d = (l - i) / 3;
  e._context.bezierCurveTo(i + d, a + d * t, l - d, f - d * r, l, f);
}
function Wc(e) {
  this._context = e;
}
Wc.prototype = {
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
        Ad(this, this._t0, Yp(this, this._t0));
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
          this._point = 3, Ad(this, Yp(this, r = Kp(this, e, t)), r);
          break;
        default:
          Ad(this, this._t0, r = Kp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Am(e) {
  this._context = new Lm(e);
}
(Am.prototype = Object.create(Wc.prototype)).point = function(e, t) {
  Wc.prototype.point.call(this, t, e);
};
function Lm(e) {
  this._context = e;
}
Lm.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, i, a, l) {
    this._context.bezierCurveTo(t, e, i, r, l, a);
  }
};
function Rc(e) {
  return new Wc(e);
}
function Lb(e) {
  return new Am(e);
}
function Pm(e) {
  this._context = e;
}
Pm.prototype = {
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
        for (var i = Xp(e), a = Xp(t), l = 0, f = 1; f < r; ++l, ++f)
          this._context.bezierCurveTo(i[0][l], a[0][l], i[1][l], a[1][l], e[f], t[f]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Xp(e) {
  var t, r = e.length - 1, i, a = new Array(r), l = new Array(r), f = new Array(r);
  for (a[0] = 0, l[0] = 2, f[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    a[t] = 1, l[t] = 4, f[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, l[r - 1] = 7, f[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    i = a[t] / l[t - 1], l[t] -= i, f[t] -= i * f[t - 1];
  for (a[r - 1] = f[r - 1] / l[r - 1], t = r - 2; t >= 0; --t)
    a[t] = (f[t] - a[t + 1]) / l[t];
  for (l[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t)
    l[t] = 2 * e[t + 1] - a[t + 1];
  return [a, l];
}
function Pb(e) {
  return new Pm(e);
}
function uu(e, t) {
  this._context = e, this._t = t;
}
uu.prototype = {
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
function Db(e) {
  return new uu(e, 0.5);
}
function _b(e) {
  return new uu(e, 0);
}
function Ob(e) {
  return new uu(e, 1);
}
function Go(e, t) {
  if ((f = e.length) > 1)
    for (var r = 1, i, a, l = e[t[0]], f, d = l.length; r < f; ++r)
      for (a = l, l = e[t[r]], i = 0; i < d; ++i)
        l[i][1] += l[i][0] = isNaN(a[i][1]) ? a[i][0] : a[i][1];
}
function Zo(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; )
    r[t] = t;
  return r;
}
function Nb(e, t) {
  return e[t];
}
function Of() {
  var e = It([]), t = Zo, r = Go, i = Nb;
  function a(l) {
    var f = e.apply(this, arguments), d, u = l.length, h = f.length, y = new Array(h), v;
    for (d = 0; d < h; ++d) {
      for (var b = f[d], P = y[d] = new Array(u), k = 0, N; k < u; ++k)
        P[k] = N = [0, +i(l[k], b, k, l)], N.data = l[k];
      P.key = b;
    }
    for (d = 0, v = t(y); d < h; ++d)
      y[v[d]].index = d;
    return r(y, v), y;
  }
  return a.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : It(Ud.call(l)), a) : e;
  }, a.value = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : It(+l), a) : i;
  }, a.order = function(l) {
    return arguments.length ? (t = l == null ? Zo : typeof l == "function" ? l : It(Ud.call(l)), a) : t;
  }, a.offset = function(l) {
    return arguments.length ? (r = l ?? Go, a) : r;
  }, a;
}
function Fb(e, t) {
  if ((i = e.length) > 0) {
    for (var r, i, a = 0, l = e[0].length, f; a < l; ++a) {
      for (f = r = 0; r < i; ++r)
        f += e[r][a][1] || 0;
      if (f)
        for (r = 0; r < i; ++r)
          e[r][a][1] /= f;
    }
    Go(e, t);
  }
}
function Mb(e, t) {
  if ((u = e.length) > 0)
    for (var r, i = 0, a, l, f, d, u, h = e[t[0]].length; i < h; ++i)
      for (f = d = 0, r = 0; r < u; ++r)
        (l = (a = e[t[r]][i])[1] - a[0]) > 0 ? (a[0] = f, a[1] = f += l) : l < 0 ? (a[1] = d, a[0] = d += l) : (a[0] = 0, a[1] = l);
}
function zb(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, i = e[t[0]], a, l = i.length; r < l; ++r) {
      for (var f = 0, d = 0; f < a; ++f)
        d += e[f][r][1] || 0;
      i[r][1] += i[r][0] = -d / 2;
    }
    Go(e, t);
  }
}
function Ib(e, t) {
  if (!(!((f = e.length) > 0) || !((l = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, i = 1, a, l, f; i < l; ++i) {
      for (var d = 0, u = 0, h = 0; d < f; ++d) {
        for (var y = e[t[d]], v = y[i][1] || 0, b = y[i - 1][1] || 0, P = (v - b) / 2, k = 0; k < d; ++k) {
          var N = e[t[k]], R = N[i][1] || 0, m = N[i - 1][1] || 0;
          P += R - m;
        }
        u += v, h += P * v;
      }
      a[i - 1][1] += a[i - 1][0] = r, u && (r -= h / u);
    }
    a[i - 1][1] += a[i - 1][0] = r, Go(e, t);
  }
}
function $b(e) {
  var t = e.map(Bb);
  return Zo(e).sort(function(r, i) {
    return t[r] - t[i];
  });
}
function Bb(e) {
  for (var t = -1, r = 0, i = e.length, a, l = -1 / 0; ++t < i; )
    (a = +e[t][1]) > l && (l = a, r = t);
  return r;
}
function Dm(e) {
  var t = e.map(_m);
  return Zo(e).sort(function(r, i) {
    return t[r] - t[i];
  });
}
function _m(e) {
  for (var t = 0, r = -1, i = e.length, a; ++r < i; )
    (a = +e[r][1]) && (t += a);
  return t;
}
function Hb(e) {
  return Dm(e).reverse();
}
function Wb(e) {
  var t = e.length, r, i, a = e.map(_m), l = $b(e), f = 0, d = 0, u = [], h = [];
  for (r = 0; r < t; ++r)
    i = l[r], f < d ? (f += a[i], u.push(i)) : (d += a[i], h.push(i));
  return h.reverse().concat(u);
}
function Vb(e) {
  return Zo(e).reverse();
}
function vn(e, t) {
  e(t);
}
var qp = {
  ascending: Dm,
  descending: Hb,
  insideout: Wb,
  none: Zo,
  reverse: Vb
};
function Nf(e) {
  return e && qp[e] || qp.none;
}
var Gp = {
  expand: Fb,
  diverging: Mb,
  none: Go,
  silhouette: zb,
  wiggle: Ib
};
function Ff(e) {
  return e && Gp[e] || Gp.none;
}
function jb(e) {
  var t = e === void 0 ? {} : e, r = t.innerRadius, i = t.outerRadius, a = t.cornerRadius, l = t.startAngle, f = t.endAngle, d = t.padAngle, u = t.padRadius, h = cb();
  return r != null && vn(h.innerRadius, r), i != null && vn(h.outerRadius, i), a != null && vn(h.cornerRadius, a), l != null && vn(h.startAngle, l), f != null && vn(h.endAngle, f), d != null && vn(h.padAngle, d), u != null && vn(h.padRadius, u), h;
}
function Mf(e) {
  var t = e === void 0 ? {} : e, r = t.x, i = t.x0, a = t.x1, l = t.y, f = t.y0, d = t.y1, u = t.defined, h = t.curve, y = ub();
  return r && vn(y.x, r), i && vn(y.x0, i), a && vn(y.x1, a), l && vn(y.y, l), f && vn(y.y0, f), d && vn(y.y1, d), u && y.defined(u), h && y.curve(h), y;
}
function Om(e) {
  var t = e === void 0 ? {} : e, r = t.x, i = t.y, a = t.defined, l = t.curve, f = bm();
  return r && vn(f.x, r), i && vn(f.y, i), a && f.defined(a), l && f.curve(l), f;
}
function Ub(e) {
  var t = e === void 0 ? {} : e, r = t.startAngle, i = t.endAngle, a = t.padAngle, l = t.value, f = t.sort, d = t.sortValues, u = pb();
  return (f === null || f != null) && u.sort(f), (d === null || d != null) && u.sortValues(d), l != null && u.value(l), a != null && vn(u.padAngle, a), r != null && vn(u.startAngle, r), i != null && vn(u.endAngle, i), u;
}
function Kb(e) {
  var t = e.keys, r = e.value, i = e.order, a = e.offset, l = Of();
  return t && l.keys(t), r && vn(l.value, r), i && l.order(Nf(i)), a && l.offset(Ff(a)), l;
}
var Yb = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function Yd() {
  return Yd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Yd.apply(this, arguments);
}
function Xb(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function qb(e) {
  var t = e.className, r = e.top, i = e.left, a = e.data, l = a === void 0 ? [] : a, f = e.centroid, d = e.innerRadius, u = d === void 0 ? 0 : d, h = e.outerRadius, y = e.cornerRadius, v = e.startAngle, b = e.endAngle, P = e.padAngle, k = e.padRadius, N = e.pieSort, R = e.pieSortValues, m = e.pieValue, O = e.children, D = e.fill, L = D === void 0 ? "" : D, _ = Xb(e, Yb), C = jb({
    innerRadius: u,
    outerRadius: h,
    cornerRadius: y,
    padRadius: k
  }), V = Ub({
    startAngle: v,
    endAngle: b,
    padAngle: P,
    value: m,
    sort: N,
    sortValues: R
  }), H = V(l);
  return O ? /* @__PURE__ */ E.createElement(E.Fragment, null, O({
    arcs: H,
    path: C,
    pie: V
  })) : /* @__PURE__ */ E.createElement(Je, {
    className: "visx-pie-arcs-group",
    top: r,
    left: i
  }, H.map(function(X, le) {
    return /* @__PURE__ */ E.createElement("g", {
      key: "pie-arc-" + le
    }, /* @__PURE__ */ E.createElement("path", Yd({
      className: wn("visx-pie-arc", t),
      d: C(X) || "",
      fill: L == null || typeof L == "string" ? L : L(X)
    }, _)), f == null ? void 0 : f(C.centroid(X), X));
  }));
}
var Gb = ["from", "to", "fill", "className", "innerRef"];
function Xd() {
  return Xd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Xd.apply(this, arguments);
}
function Zb(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Qt(e) {
  var t = e.from, r = t === void 0 ? {
    x: 0,
    y: 0
  } : t, i = e.to, a = i === void 0 ? {
    x: 1,
    y: 1
  } : i, l = e.fill, f = l === void 0 ? "transparent" : l, d = e.className, u = e.innerRef, h = Zb(e, Gb), y = r.x === a.x || r.y === a.y;
  return /* @__PURE__ */ E.createElement("line", Xd({
    ref: u,
    className: wn("visx-line", d),
    x1: r.x,
    y1: r.y,
    x2: a.x,
    y2: a.y,
    fill: f,
    shapeRendering: y ? "crispEdges" : "auto"
  }, h));
}
var Qb = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function qd() {
  return qd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, qd.apply(this, arguments);
}
function Jb(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Hr(e) {
  var t = e.children, r = e.data, i = r === void 0 ? [] : r, a = e.x, l = e.y, f = e.fill, d = f === void 0 ? "transparent" : f, u = e.className, h = e.curve, y = e.innerRef, v = e.defined, b = v === void 0 ? function() {
    return !0;
  } : v, P = Jb(e, Qb), k = Om({
    x: a,
    y: l,
    defined: b,
    curve: h
  });
  return t ? /* @__PURE__ */ E.createElement(E.Fragment, null, t({
    path: k
  })) : /* @__PURE__ */ E.createElement("path", qd({
    ref: y,
    className: wn("visx-linepath", u),
    d: k(i) || "",
    fill: d,
    strokeLinecap: "round"
  }, P));
}
var e0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
function Gd() {
  return Gd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Gd.apply(this, arguments);
}
function t0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function n0(e) {
  var t = e.children, r = e.x, i = e.x0, a = e.x1, l = e.y, f = e.y0, d = e.y1, u = e.data, h = u === void 0 ? [] : u, y = e.defined, v = y === void 0 ? function() {
    return !0;
  } : y, b = e.className, P = e.curve, k = e.innerRef, N = t0(e, e0), R = Mf({
    x: r,
    x0: i,
    x1: a,
    y: l,
    y0: f,
    y1: d,
    defined: v,
    curve: P
  });
  return t ? /* @__PURE__ */ E.createElement(E.Fragment, null, t({
    path: R
  })) : /* @__PURE__ */ E.createElement("path", Gd({
    ref: k,
    className: wn("visx-area", b),
    d: R(h) || ""
  }, N));
}
var r0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
function Zd() {
  return Zd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Zd.apply(this, arguments);
}
function a0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function i0(e) {
  var t = e.x, r = e.x0, i = e.x1, a = e.y, l = e.y1, f = e.y0, d = e.yScale, u = e.data, h = u === void 0 ? [] : u, y = e.defined, v = y === void 0 ? function() {
    return !0;
  } : y, b = e.className, P = e.curve, k = e.innerRef, N = e.children, R = a0(e, r0), m = Mf({
    x: t,
    x0: r,
    x1: i,
    defined: v,
    curve: P
  });
  return f == null ? m.y0(d.range()[0]) : vn(m.y0, f), a && !l && vn(m.y1, a), l && !a && vn(m.y1, l), N ? /* @__PURE__ */ E.createElement(E.Fragment, null, N({
    path: m
  })) : /* @__PURE__ */ E.createElement("path", Zd({
    ref: k,
    className: wn("visx-area-closed", b),
    d: m(h) || ""
  }, R));
}
var o0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function Qd() {
  return Qd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Qd.apply(this, arguments);
}
function l0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function s0(e) {
  var t = e.className, r = e.top, i = e.left, a = e.keys, l = e.data, f = e.curve, d = e.defined, u = e.x, h = e.x0, y = e.x1, v = e.y0, b = e.y1, P = e.value, k = e.order, N = e.offset, R = e.color, m = e.children, O = l0(e, o0), D = Kb({
    keys: a,
    value: P,
    order: k,
    offset: N
  }), L = Mf({
    x: u,
    x0: h,
    x1: y,
    y0: v,
    y1: b,
    curve: f,
    defined: d
  }), _ = D(l);
  return m ? /* @__PURE__ */ E.createElement(E.Fragment, null, m({
    stacks: _,
    path: L,
    stack: D
  })) : /* @__PURE__ */ E.createElement(Je, {
    top: r,
    left: i
  }, _.map(function(C, V) {
    return /* @__PURE__ */ E.createElement("path", Qd({
      className: wn("visx-stack", t),
      key: "stack-" + V + "-" + (C.key || ""),
      d: L(C) || "",
      fill: R == null ? void 0 : R(C.key, V)
    }, O));
  }));
}
var c0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function Vc() {
  return Vc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Vc.apply(this, arguments);
}
function u0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function d0(e) {
  var t = e.className, r = e.top, i = e.left, a = e.keys, l = e.data, f = e.curve, d = e.defined, u = e.x, h = e.x0, y = e.x1, v = e.y0, b = e.y1, P = e.value, k = e.order, N = e.offset, R = e.color, m = e.children, O = u0(e, c0);
  return /* @__PURE__ */ E.createElement(s0, Vc({
    className: t,
    top: r,
    left: i,
    keys: a,
    data: l,
    curve: f,
    defined: d,
    x: u,
    x0: h,
    x1: y,
    y0: v,
    y1: b,
    value: P,
    order: k,
    offset: N,
    color: R
  }, O), m || function(D) {
    var L = D.stacks, _ = D.path;
    return L.map(function(C, V) {
      return /* @__PURE__ */ E.createElement("path", Vc({
        className: wn("visx-area-stack", t),
        key: "area-stack-" + V + "-" + (C.key || ""),
        d: _(C) || "",
        fill: R == null ? void 0 : R(C.key, V)
      }, O));
    });
  });
}
function zf(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), r = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / r.length;
}
var f0 = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
function Jd() {
  return Jd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Jd.apply(this, arguments);
}
function p0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Nm(e) {
  var t = e.data, r = e.className, i = e.top, a = e.left, l = e.x0, f = e.x0Scale, d = e.x1Scale, u = e.yScale, h = e.color, y = e.keys, v = e.height, b = e.children, P = p0(e, f0), k = zf(d), N = t.map(function(R, m) {
    return {
      index: m,
      x0: f(l(R)),
      bars: y.map(function(O, D) {
        var L = R[O];
        return {
          index: D,
          key: O,
          value: L,
          width: k,
          x: d(O) || 0,
          y: u(L) || 0,
          color: h(O, D),
          height: v - (u(L) || 0)
        };
      })
    };
  });
  return b ? /* @__PURE__ */ E.createElement(E.Fragment, null, b(N)) : /* @__PURE__ */ E.createElement(Je, {
    className: wn("visx-bar-group", r),
    top: i,
    left: a
  }, N.map(function(R) {
    return /* @__PURE__ */ E.createElement(Je, {
      key: "bar-group-" + R.index + "-" + R.x0,
      left: R.x0
    }, R.bars.map(function(m) {
      return /* @__PURE__ */ E.createElement(hr, Jd({
        key: "bar-group-bar-" + R.index + "-" + m.index + "-" + m.value + "-" + m.key,
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height,
        fill: m.color
      }, P));
    }));
  }));
}
function Fm(e) {
  return e == null ? void 0 : e[0];
}
function Mm(e) {
  return e == null ? void 0 : e[1];
}
var h0 = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function ef() {
  return ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, ef.apply(this, arguments);
}
function m0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function y0(e) {
  var t = e.data, r = e.className, i = e.top, a = e.left, l = e.x, f = e.y0, d = f === void 0 ? Fm : f, u = e.y1, h = u === void 0 ? Mm : u, y = e.xScale, v = e.yScale, b = e.color, P = e.keys, k = e.value, N = e.order, R = e.offset, m = e.children, O = m0(e, h0), D = Of();
  P && D.keys(P), k && vn(D.value, k), N && D.order(Nf(N)), R && D.offset(Ff(R));
  var L = D(t), _ = zf(y), C = L.map(function(V, H) {
    var X = V.key;
    return {
      index: H,
      key: X,
      bars: V.map(function(le, Z) {
        var W = (v(d(le)) || 0) - (v(h(le)) || 0), U = v(h(le)), B = "bandwidth" in y ? y(l(le.data)) : Math.max((y(l(le.data)) || 0) - _ / 2);
        return {
          bar: le,
          key: X,
          index: Z,
          height: W,
          width: _,
          x: B || 0,
          y: U || 0,
          color: b(V.key, Z)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ E.createElement(E.Fragment, null, m(C)) : /* @__PURE__ */ E.createElement(Je, {
    className: wn("visx-bar-stack", r),
    top: i,
    left: a
  }, C.map(function(V) {
    return V.bars.map(function(H) {
      return /* @__PURE__ */ E.createElement(hr, ef({
        key: "bar-stack-" + V.index + "-" + H.index,
        x: H.x,
        y: H.y,
        height: H.height,
        width: H.width,
        fill: H.color
      }, O));
    });
  }));
}
var g0 = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function tf() {
  return tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, tf.apply(this, arguments);
}
function v0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function x0(e) {
  var t = e.data, r = e.className, i = e.top, a = e.left, l = e.y, f = e.x0, d = f === void 0 ? Fm : f, u = e.x1, h = u === void 0 ? Mm : u, y = e.xScale, v = e.yScale, b = e.color, P = e.keys, k = e.value, N = e.order, R = e.offset, m = e.children, O = v0(e, g0), D = Of();
  P && D.keys(P), k && vn(D.value, k), N && D.order(Nf(N)), R && D.offset(Ff(R));
  var L = D(t), _ = zf(v), C = L.map(function(V, H) {
    var X = V.key;
    return {
      index: H,
      key: X,
      bars: V.map(function(le, Z) {
        var W = (y(h(le)) || 0) - (y(d(le)) || 0), U = y(d(le)), B = "bandwidth" in v ? v(l(le.data)) : Math.max((v(l(le.data)) || 0) - W / 2);
        return {
          bar: le,
          key: X,
          index: Z,
          height: _,
          width: W,
          x: U || 0,
          y: B || 0,
          color: b(V.key, Z)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ E.createElement(E.Fragment, null, m(C)) : /* @__PURE__ */ E.createElement(Je, {
    className: wn("visx-bar-stack-horizontal", r),
    top: i,
    left: a
  }, C.map(function(V) {
    return V.bars.map(function(H) {
      return /* @__PURE__ */ E.createElement(hr, tf({
        key: "bar-stack-" + V.index + "-" + H.index,
        x: H.x,
        y: H.y,
        height: H.height,
        width: H.width,
        fill: H.color
      }, O));
    });
  }));
}
var Zp = "http://www.w3.org/2000/svg";
function b0(e) {
  var t = document.getElementById(e);
  if (!t) {
    var r = document.createElementNS(Zp, "svg");
    r.setAttribute("aria-hidden", "true"), r.style.opacity = "0", r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", r.style.pointerEvents = "none", t = document.createElementNS(Zp, "path"), t.setAttribute("id", e), r.appendChild(t), document.body.appendChild(r);
  }
  return t;
}
var S0 = "__visx_splitpath_svg_path_measurement_id", Qp = function() {
  return !0;
};
function E0(e) {
  var t = e.path, r = e.pointsInSegments, i = e.segmentation, a = i === void 0 ? "x" : i, l = e.sampleRate, f = l === void 0 ? 1 : l;
  try {
    var d = b0(S0);
    d.setAttribute("d", t);
    var u = d.getTotalLength(), h = r.length, y = r.map(function() {
      return [];
    });
    if (a === "x" || a === "y")
      for (var v = r.map(function(U) {
        var B;
        return (B = U.find(function($) {
          return typeof $[a] == "number";
        })) == null ? void 0 : B[a];
      }), b = d.getPointAtLength(0), P = d.getPointAtLength(u), k = P[a] > b[a], N = k ? v.map(function(U) {
        return typeof U > "u" ? Qp : function(B) {
          return B >= U;
        };
      }) : v.map(function(U) {
        return typeof U > "u" ? Qp : function(B) {
          return B <= U;
        };
      }), R = 0, m = 0; m <= u; m += f) {
        for (var O = d.getPointAtLength(m), D = O[a]; R < h - 1 && N[R + 1](D); )
          R += 1;
        y[R].push(O);
      }
    else {
      var L = r.map(function(U) {
        return U.length;
      }), _ = L.reduce(function(U, B) {
        return U + B;
      }, 0), C = u / Math.max(1, _ - 1), V = L.slice(0, h - 1);
      V.unshift(0);
      for (var H = 2; H < h; H += 1)
        V[H] += V[H - 1];
      for (var X = 0; X < h; X += 1)
        V[X] *= C;
      for (var le = 0, Z = 0; Z <= u; Z += f) {
        for (var W = d.getPointAtLength(Z); le < h - 1 && Z >= V[le + 1]; )
          le += 1;
        y[le].push(W);
      }
    }
    return y;
  } catch {
    return [];
  }
}
function nf() {
  return nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, nf.apply(this, arguments);
}
var k0 = function(t) {
  return t.x || 0;
}, R0 = function(t) {
  return t.y || 0;
};
function zm(e) {
  var t = e.children, r = e.className, i = e.curve, a = e.defined, l = e.segmentation, f = e.sampleRate, d = e.segments, u = e.x, h = e.y, y = e.styles, v = se.useMemo(function() {
    var k = typeof u == "number" || typeof u > "u" ? function() {
      return u;
    } : u, N = typeof h == "number" || typeof h > "u" ? function() {
      return h;
    } : h;
    return d.map(function(R) {
      return R.map(function(m, O) {
        return {
          x: k(m, O, R),
          y: N(m, O, R)
        };
      });
    });
  }, [u, h, d]), b = se.useMemo(function() {
    var k = Om({
      x: u,
      y: h,
      defined: a,
      curve: i
    });
    return k(d.flat()) || "";
  }, [u, h, a, i, d]), P = se.useMemo(function() {
    return E0({
      path: b,
      segmentation: l,
      pointsInSegments: v,
      sampleRate: f
    });
  }, [b, l, v, f]);
  return /* @__PURE__ */ E.createElement("g", null, P.map(function(k, N) {
    return t ? /* @__PURE__ */ E.createElement(E.Fragment, {
      key: N
    }, t({
      index: N,
      segment: k,
      styles: y[N] || y[N % y.length]
    })) : /* @__PURE__ */ E.createElement(Hr, nf({
      key: N,
      className: r,
      data: k,
      x: k0,
      y: R0
    }, y[N] || y[N % y.length]));
  }));
}
zm.propTypes = {
  segments: Ce.arrayOf(Ce.array).isRequired,
  styles: Ce.array.isRequired,
  children: Ce.func,
  className: Ce.string
};
var w0 = ["tooltipOpen"];
function T0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function jc() {
  return jc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, jc.apply(this, arguments);
}
function Im(e) {
  var t = se.useState(jc({
    tooltipOpen: !1
  }, e)), r = t[0], i = t[1], a = se.useCallback(function(f) {
    return i(typeof f == "function" ? function(d) {
      d.tooltipOpen;
      var u = T0(d, w0);
      return jc({}, f(u), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: f.tooltipLeft,
      tooltipTop: f.tooltipTop,
      tooltipData: f.tooltipData
    });
  }, [i]), l = se.useCallback(function() {
    return i({
      tooltipOpen: !1,
      tooltipLeft: void 0,
      tooltipTop: void 0,
      tooltipData: void 0
    });
  }, [i]);
  return {
    tooltipOpen: r.tooltipOpen,
    tooltipLeft: r.tooltipLeft,
    tooltipTop: r.tooltipTop,
    tooltipData: r.tooltipData,
    updateTooltip: i,
    showTooltip: a,
    hideTooltip: l
  };
}
var C0 = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function Uc() {
  return Uc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Uc.apply(this, arguments);
}
function A0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var $m = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, If = /* @__PURE__ */ E.forwardRef(function(e, t) {
  var r = e.className, i = e.top, a = e.left, l = e.offsetLeft, f = l === void 0 ? 10 : l, d = e.offsetTop, u = d === void 0 ? 10 : d, h = e.style, y = h === void 0 ? $m : h, v = e.children, b = e.unstyled, P = b === void 0 ? !1 : b, k = e.applyPositionStyle, N = k === void 0 ? !1 : k, R = A0(e, C0);
  return /* @__PURE__ */ E.createElement("div", Uc({
    ref: t,
    className: wn("visx-tooltip", r),
    style: Uc({
      top: i == null || u == null ? i : i + u,
      left: a == null || f == null ? a : a + f
    }, N && {
      position: "absolute"
    }, !P && y)
  }, R), v);
});
If.propTypes = {
  children: Ce.node,
  className: Ce.string,
  left: Ce.number,
  offsetLeft: Ce.number,
  offsetTop: Ce.number,
  top: Ce.number,
  applyPositionStyle: Ce.bool,
  unstyled: Ce.bool
};
If.displayName = "Tooltip";
function rf() {
  return rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, rf.apply(this, arguments);
}
function L0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function P0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, af(e, t);
}
function af(e, t) {
  return af = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, a) {
    return i.__proto__ = a, i;
  }, af(e, t);
}
var Jp = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function D0(e) {
  var t;
  return t = /* @__PURE__ */ function(r) {
    P0(i, r);
    function i(l) {
      var f;
      return f = r.call(this, l) || this, f.state = {
        rect: void 0,
        parentRect: void 0
      }, f.nodeRef = /* @__PURE__ */ E.createRef(), f.getRects = f.getRects.bind(L0(f)), f;
    }
    var a = i.prototype;
    return a.componentDidMount = function() {
      var f, d = this;
      this.node = (f = this.nodeRef) != null && f.current ? this.nodeRef.current : Vy.findDOMNode(this), this.setState(function() {
        return d.getRects();
      });
    }, a.getRects = function() {
      if (!this.node)
        return this.state;
      var f = this.node, d = f.parentNode, u = f.getBoundingClientRect ? f.getBoundingClientRect() : Jp, h = d != null && d.getBoundingClientRect ? d.getBoundingClientRect() : Jp;
      return {
        rect: u,
        parentRect: h
      };
    }, a.render = function() {
      return /* @__PURE__ */ E.createElement(e, rf({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, i;
  }(E.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var Bm = /* @__PURE__ */ se.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), _0 = Bm.Provider;
Bm.Consumer;
var O0 = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function Kc() {
  return Kc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Kc.apply(this, arguments);
}
function N0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Hm(e) {
  var t = e.children;
  e.getRects;
  var r = e.left, i = r === void 0 ? 0 : r, a = e.offsetLeft, l = a === void 0 ? 10 : a, f = e.offsetTop, d = f === void 0 ? 10 : f, u = e.parentRect, h = e.rect, y = e.style, v = y === void 0 ? $m : y, b = e.top, P = b === void 0 ? 0 : b, k = e.unstyled, N = k === void 0 ? !1 : k, R = e.nodeRef, m = N0(e, O0), O, D = !1, L = !1;
  if (h && u) {
    var _ = i, C = P;
    if (u.width) {
      var V = _ + l + h.width - u.width, H = h.width - _ - l;
      D = V > 0 && V > H;
    } else {
      var X = _ + l + h.width - window.innerWidth, le = h.width - _ - l;
      D = X > 0 && X > le;
    }
    if (u.height) {
      var Z = C + d + h.height - u.height, W = h.height - C - d;
      L = Z > 0 && Z > W;
    } else
      L = C + d + h.height > window.innerHeight;
    _ = D ? _ - h.width - l : _ + l, C = L ? C - h.height - d : C + d, _ = Math.round(_), C = Math.round(C), O = "translate(" + _ + "px, " + C + "px)";
  }
  return /* @__PURE__ */ E.createElement(If, Kc({
    ref: R,
    style: Kc({
      left: 0,
      top: 0,
      transform: O
    }, !N && v)
  }, m), /* @__PURE__ */ E.createElement(_0, {
    value: {
      isFlippedVertically: !L,
      isFlippedHorizontally: !D
    }
  }, t));
}
Hm.propTypes = {
  nodeRef: Ce.oneOfType([Ce.string, Ce.func, Ce.object])
};
const Wm = D0(Hm);
var of = /* @__PURE__ */ function() {
  function e(r) {
    var i = r.x, a = i === void 0 ? 0 : i, l = r.y, f = l === void 0 ? 0 : l;
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
function F0(e) {
  return !!e && e instanceof Element;
}
function M0(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function z0(e) {
  return !!e && "createSVGPoint" in e;
}
function I0(e) {
  return !!e && "getScreenCTM" in e;
}
function $0(e) {
  return !!e && "changedTouches" in e;
}
function B0(e) {
  return !!e && "clientX" in e;
}
function H0(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function es() {
  return es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, es.apply(this, arguments);
}
var Ld = {
  x: 0,
  y: 0
};
function W0(e) {
  if (!e)
    return es({}, Ld);
  if ($0(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : es({}, Ld);
  if (B0(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, r = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return r ? {
    x: r.x + r.width / 2,
    y: r.y + r.height / 2
  } : es({}, Ld);
}
function eh(e, t) {
  if (!e || !t)
    return null;
  var r = W0(t), i = M0(e) ? e.ownerSVGElement : e, a = I0(i) ? i.getScreenCTM() : null;
  if (z0(i) && a) {
    var l = i.createSVGPoint();
    return l.x = r.x, l.y = r.y, l = l.matrixTransform(a.inverse()), new of({
      x: l.x,
      y: l.y
    });
  }
  var f = e.getBoundingClientRect();
  return new of({
    x: r.x - f.left - e.clientLeft,
    y: r.y - f.top - e.clientTop
  });
}
function th(e, t) {
  if (F0(e) && t)
    return eh(e, t);
  if (H0(e)) {
    var r = e, i = r.target;
    if (i)
      return eh(i, r);
  }
  return null;
}
const Vm = (e) => {
  const { tableData: t, config: r, formatNumber: i, capitalize: a, formatDate: l, formatTooltipsDate: f, parseDate: d, setSharedFilter: u } = se.useContext(bt), { xScale: h, yScale: y, showTooltip: v, hideTooltip: b } = e, { xAxis: P, visualizationType: k, orientation: N, yAxis: R, runtime: m } = r, O = (B, $) => {
    const { x: ne, y: ee } = $, q = {
      data: B || {},
      dataXPosition: ne + 10,
      dataYPosition: ee
    };
    return {
      tooltipLeft: q.dataXPosition,
      tooltipTop: q.dataYPosition,
      tooltipData: q
    };
  }, D = (B, $) => {
    B.stopPropagation();
    const ne = th(B), { x: ee, y: ie } = ne, { data: q, arc: j } = $ ?? {}, J = C(ee - Number(r.yAxis.size || 0)), oe = k !== "Pie" ? r.series.filter((be) => be.tooltip === !0).map((be) => be.dataKey) : r.series.map((be) => be.dataKey);
    oe.push(r.xAxis.dataKey), r.visualizationType === "Forecasting" && r.series.map((be) => {
      be.confidenceIntervals.map((G) => {
        G.showInTooltip && (oe.push(G.high), oe.push(G.low));
      });
    });
    function De(be) {
      let G = [];
      for (let Pe in be)
        be.hasOwnProperty(Pe) && G.push(be[Pe].name);
      return G;
    }
    oe.push(...De(r.columns)), oe.push(...De(r.columns));
    const ye = X(J, oe), de = t.filter((be) => be[P.dataKey] === V(ie)), Ee = N === "vertical" ? ye : de, re = (be) => {
      const G = r.series.filter((Se) => Se.dataKey === be)[0];
      return G != null && G.axis ? String(G.axis).toLowerCase() : "left";
    }, ve = (() => {
      var je, Ke, Ge;
      const be = r.columns, G = [], Pe = [];
      for (const [Be, yt] of Object.entries(be)) {
        const He = {
          addColPrefix: r.columns[Be].prefix,
          addColSuffix: r.columns[Be].suffix,
          addColRoundTo: r.columns[Be].roundToPlace ? r.columns[Be].roundToPlace : "",
          addColCommas: r.columns[Be].commas
        };
        let ze = null;
        r.visualizationType === "Pie" ? ze = j == null ? void 0 : j.data[yt.name] : ze = (je = Ee[0]) == null ? void 0 : je[yt.name];
        const Fe = vf(ze, "left", !0, r, He);
        yt.tooltips && G.push([yt.label, Fe]);
      }
      const Se = [];
      return G.forEach((Be) => {
        Se.push([Be[0], Be[1]]);
      }), k === "Pie" && Pe.push(
        // ignore
        [r.xAxis.dataKey, q],
        [r.runtime.yAxis.dataKey, i(j == null ? void 0 : j.data[r.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((j == null ? void 0 : j.endAngle) - (j == null ? void 0 : j.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), k === "Forest Plot" && Pe.push([r.xAxis.dataKey, V(ie)]), k !== "Pie" && k !== "Forest Plot" && Pe.push(
        ...(Ge = (Ke = le()) == null ? void 0 : Ke.filter((Be) => {
          var yt, He;
          return ((yt = r.series) == null ? void 0 : yt.find((ze) => ze.dataKey === Be && (ze == null ? void 0 : ze.tooltip))) || ((He = r.xAxis) == null ? void 0 : He.dataKey) == Be;
        })) == null ? void 0 : Ge.flatMap((Be) => {
          var Fe, Ne, ot, Ue;
          const yt = r.general.showMissingDataLabel && !((Fe = Ee[0]) != null && Fe[Be]);
          let He = Be === r.xAxis.dataKey ? (Ne = Ee[0]) == null ? void 0 : Ne[Be] : i((ot = Ee[0]) == null ? void 0 : ot[Be], re(Be));
          He = yt ? "N/A" : He;
          const ze = (Ue = r.preliminaryData) == null ? void 0 : Ue.find((et) => {
            var ut;
            return et.label && et.type === "suppression" && et.displayTooltip && ((ut = Ee[0]) == null ? void 0 : ut[Be]) === et.value && (!et.column || Be === et.column);
          });
          return ze && (He = ze.label), [[Be, He, re(Be)]];
        })
      ), [...Pe, ...Se];
    })();
    if (!ve)
      return;
    const ce = O(ve, ne);
    v(ce);
  }, L = () => {
    r.visualizationType === "Area Chart" ? setTimeout(() => {
      b();
    }, 3e3) : b();
  }, _ = (B) => {
    if (r.xAxis.type === "categorical" || r.visualizationType === "Combo") {
      let $ = h.step();
      const ee = Math.floor(Number(B) / $);
      return h.domain()[ee - 1];
    }
    if (En(r.xAxis) && r.visualizationType !== "Combo") {
      const $ = dp((q) => d(q[r.xAxis.dataKey])).left, ne = h.invert(h(B)), ee = $(r.data, ne, 1);
      return d(r.data[ee - 1][r.xAxis.dataKey]);
    }
  }, C = (B, $ = !1) => {
    if (k !== "Pie" && N !== "horizontal") {
      if (h.type === "point" || P.type === "continuous" || En(P)) {
        let ne = null, ee = Number.MAX_VALUE, ie = B;
        return t.forEach((q) => {
          const j = En(P) ? h(d(q[P.dataKey])) : h(q[P.dataKey]);
          let J = r.barHeight;
          const oe = Math.abs(Number(j - ie + ($ ? J * 2 : 0)));
          oe <= ee && (ee = oe, ne = (En(P), q[P.dataKey]));
        }), ne;
      }
      if (r.xAxis.type === "categorical" || k === "Combo" && N !== "horizontal" && k !== "Forest Plot") {
        let ee = (h.range()[1] - h.range()[0]) / (h.domain().length + 1);
        const q = Math.floor((Number(B) - ee / 2) / ee);
        return h.domain()[q];
      }
      if (En(P) && k !== "Combo" && N !== "horizontal") {
        const ne = dp((j) => d(j[r.xAxis.dataKey])).left, ee = h.invert(B), ie = ne(r.data, ee, 1);
        return d(r.data[ie - 1][r.xAxis.dataKey]);
      }
    }
  }, V = (B, $) => {
    if (k === "Pie")
      return;
    let ne = Number.MAX_VALUE, ee = null;
    return t.forEach((ie, q) => {
      const j = y(k !== "Forest Plot" ? ie[r.xAxis.dataKey] : q), J = Math.abs(j - B);
      J < ne && (ne = J, ee = ie[r.xAxis.dataKey]);
    }), ee;
  }, H = (B) => {
    var $, ne;
    try {
      const ee = th(B), { x: ie } = ee;
      if (!ie)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let q = C(ie, !0), j = ($ = r.data) == null ? void 0 : $.filter((J) => J[r.xAxis.dataKey] === q);
      if (!q)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (En(P) && q && (q = new Date(q), q = l(q), j = (ne = r.data) == null ? void 0 : ne.filter((J) => l(new Date(J[r.xAxis.dataKey])) === q)), !j[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${q}`);
      u && (r != null && r.uid) && (j != null && j[0]) && u(r.uid, j[0]);
    } catch (ee) {
      console.error(ee.message);
    }
  }, X = (B, $) => {
    try {
      let ne;
      return P.type === "categorical" ? ne = t.filter((ie) => ie[P.dataKey] === B) : ne = t.filter((ie) => ie[P.dataKey] === B), !ne || ne.length === 0 ? [] : ne.map((ie) => Object.fromEntries(Object.entries(ie).filter(([q, j]) => $.includes(q))));
    } catch (ne) {
      console.error("COVE", ne);
    }
  }, le = () => {
    var B;
    try {
      let $, ne = [], ee = [];
      if ((B = r.series) == null || B.forEach((ie) => {
        ie.type === "Forecasting" && (ne.push(ie.stageColumn), ie == null || ie.confidenceIntervals.forEach((q) => {
          q.showInTooltip === !0 && (ee.push(q.low), ee.push(q.high));
        }));
      }), !r.dashboard)
        switch (k) {
          case "Combo":
            $ = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys, ...ee];
            break;
          case "Forecasting":
            $ = [m.xAxis.dataKey, ...ne, ...ee];
            break;
          case "Line":
            $ = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Area Chart":
            $ = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Bar":
            $ = N === "vertical" ? [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys] : [m.yAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Pie":
            $ = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return r.dashboard && ($ = [m.xAxis.dataKey, ...m == null ? void 0 : m.barSeriesKeys, ...m == null ? void 0 : m.lineSeriesKeys, ...ne, ...ee]), $;
    } catch ($) {
      console.error("COVE", $);
    }
  }, Z = (B) => {
    const { dataXPosition: $, dataYPosition: ne } = B;
    return {
      opacity: r.tooltips.opacity ? r.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${$}px, ${Number(ne)}px)`
    };
  }, W = (B) => {
    var ne, ee;
    let $ = r.series.filter((ie) => ie.dataKey === B);
    return (ne = $[0]) != null && ne.name ? (ee = $[0]) == null ? void 0 : ee.name : B;
  };
  return {
    getIncludedTooltipSeries: le,
    getXValueFromCoordinate: C,
    getXValueFromCoordinateDate: _,
    getYScaleValues: X,
    handleTooltipClick: H,
    handleTooltipMouseOff: L,
    handleTooltipMouseOver: D,
    TooltipListItem: ({ item: B }) => {
      const [$, ne] = B, [ee, ie, q] = ne;
      if (k === "Forest Plot")
        return ee === r.xAxis.dataKey ? /* @__PURE__ */ React.createElement("li", { className: "tooltip-heading" }, `${a(r.xAxis.dataKey ? `${r.xAxis.dataKey}: ` : "")} ${En(R) ? l(d(ee, !1)) : ie}`) : /* @__PURE__ */ React.createElement("li", { className: "tooltip-body" }, `${W(ee)}: ${i(ie, "left")}`);
      const j = r.tooltips.dateDisplayFormat ? f(d(ie, !1)) : l(d(ie, !1));
      return k === "Bar" && N === "horizontal" && ee === r.xAxis.dataKey ? /* @__PURE__ */ React.createElement("li", { className: "tooltip-heading" }, `${a(r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ` : "")} ${r.xAxis.type === "date" ? j : ie}`) : ee === r.xAxis.dataKey ? /* @__PURE__ */ React.createElement("li", { className: "tooltip-heading" }, `${a(r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ` : "")} ${En(P) ? j : ie}`) : /* @__PURE__ */ React.createElement("li", { className: "tooltip-body" }, `${W(ee)}: ${ie}`);
    },
    tooltipStyles: Z
  };
};
function $f(e, { threshold: t = 0, root: r = null, rootMargin: i = "0%", freezeOnceVisible: a = !1 }) {
  const [l, f] = se.useState(), d = (l == null ? void 0 : l.isIntersecting) && a, u = ([h]) => {
    f(h);
  };
  return se.useEffect(() => {
    setTimeout(() => {
      const h = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || d || !h)
        return;
      const v = { threshold: t, root: r, rootMargin: i }, b = new IntersectionObserver(u, v);
      return b.observe(h), () => b.disconnect();
    }, 500);
  }, [e, t, r, i, d]), l;
}
const lf = (e, t = !1) => {
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
var V0 = ["flexDirection", "alignItems", "margin", "display", "children"];
function sf() {
  return sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, sf.apply(this, arguments);
}
function j0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Yc(e) {
  var t = e.flexDirection, r = t === void 0 ? "row" : t, i = e.alignItems, a = i === void 0 ? "center" : i, l = e.margin, f = l === void 0 ? "0" : l, d = e.display, u = d === void 0 ? "flex" : d, h = e.children, y = j0(e, V0);
  return /* @__PURE__ */ E.createElement("div", sf({
    className: "visx-legend-item",
    style: {
      display: u,
      alignItems: a,
      flexDirection: r,
      margin: f
    }
  }, y), h);
}
Yc.propTypes = {
  alignItems: Ce.string,
  margin: Ce.oneOfType([Ce.string, Ce.number]),
  children: Ce.node,
  display: Ce.string
};
var U0 = ["flex", "label", "margin", "align", "children"];
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, cf.apply(this, arguments);
}
function K0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Xc(e) {
  var t = e.flex, r = t === void 0 ? "1" : t, i = e.label, a = e.margin, l = a === void 0 ? "5px 0" : a, f = e.align, d = f === void 0 ? "left" : f, u = e.children, h = K0(e, U0);
  return /* @__PURE__ */ E.createElement("div", cf({
    className: "visx-legend-label",
    style: {
      justifyContent: d,
      display: "flex",
      flex: r,
      margin: l
    }
  }, h), u || i);
}
Xc.propTypes = {
  align: Ce.string,
  label: Ce.node,
  flex: Ce.oneOfType([Ce.string, Ce.number]),
  margin: Ce.oneOfType([Ce.string, Ce.number]),
  children: Ce.node
};
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, uf.apply(this, arguments);
}
function Bf(e) {
  var t = e.fill, r = e.width, i = e.height, a = e.style;
  return /* @__PURE__ */ E.createElement("div", {
    style: uf({
      width: r,
      height: i,
      background: t
    }, a)
  });
}
Bf.propTypes = {
  fill: Ce.string,
  width: Ce.oneOfType([Ce.string, Ce.number]),
  height: Ce.oneOfType([Ce.string, Ce.number])
};
function jm(e) {
  var t = e.fill, r = e.width, i = e.height, a = e.style, l = typeof r == "string" || typeof r > "u" ? 0 : r, f = typeof i == "string" || typeof i > "u" ? 0 : i, d = Math.max(l, f), u = d / 2;
  return /* @__PURE__ */ E.createElement("svg", {
    width: d,
    height: d
  }, /* @__PURE__ */ E.createElement(Je, {
    top: u,
    left: u
  }, /* @__PURE__ */ E.createElement("circle", {
    r: u,
    fill: t,
    style: a
  })));
}
jm.propTypes = {
  fill: Ce.string,
  width: Ce.oneOfType([Ce.string, Ce.number]),
  height: Ce.oneOfType([Ce.string, Ce.number])
};
function Um(e) {
  var t = e.fill, r = e.width, i = e.height, a = e.style, l = typeof i == "string" || typeof i > "u" ? 0 : i, f = typeof (a == null ? void 0 : a.strokeWidth) == "number" ? a == null ? void 0 : a.strokeWidth : 2;
  return /* @__PURE__ */ E.createElement("svg", {
    width: r,
    height: i
  }, /* @__PURE__ */ E.createElement(Je, {
    top: l / 2 - f / 2
  }, /* @__PURE__ */ E.createElement("line", {
    x1: 0,
    x2: r,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: f,
    style: a
  })));
}
Um.propTypes = {
  fill: Ce.string,
  width: Ce.oneOfType([Ce.string, Ce.number]),
  height: Ce.oneOfType([Ce.string, Ce.number])
};
function ts() {
  return ts = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, ts.apply(this, arguments);
}
var Pd = function() {
};
function Y0(e) {
  var t = e.shape, r = t === void 0 ? "rect" : t, i = e.fill, a = i === void 0 ? Pd : i, l = e.size, f = l === void 0 ? Pd : l, d = e.width, u = e.height, h = e.label, y = e.item, v = e.itemIndex, b = e.shapeStyle, P = b === void 0 ? Pd : b, k = {
    width: d,
    height: u,
    item: y,
    itemIndex: v,
    label: h,
    fill: a(ts({}, h)),
    size: f(ts({}, h)),
    style: P(ts({}, h))
  };
  return typeof r == "string" ? r === "circle" ? /* @__PURE__ */ E.createElement(jm, k) : r === "line" ? /* @__PURE__ */ E.createElement(Um, k) : /* @__PURE__ */ E.createElement(Bf, k) : /* @__PURE__ */ E.isValidElement(r) ? /* @__PURE__ */ E.cloneElement(r, k) : r ? /* @__PURE__ */ E.createElement(r, k) : null;
}
function qc() {
  return qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, qc.apply(this, arguments);
}
function Km(e) {
  var t = e.shape, r = t === void 0 ? Bf : t, i = e.width, a = e.height, l = e.margin, f = e.label, d = e.item, u = e.itemIndex, h = e.fill, y = e.size, v = e.shapeStyle;
  return /* @__PURE__ */ E.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: y ? y(qc({}, f)) : i,
      height: y ? y(qc({}, f)) : a,
      margin: l
    }
  }, Y0({
    shape: r,
    item: d,
    itemIndex: u,
    label: f,
    width: i,
    height: a,
    fill: h,
    shapeStyle: v
  }));
}
Km.propTypes = {
  itemIndex: Ce.number.isRequired,
  margin: Ce.oneOfType([Ce.string, Ce.number]),
  width: Ce.oneOfType([Ce.string, Ce.number]),
  height: Ce.oneOfType([Ce.string, Ce.number])
};
function Ym(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function nh(e) {
  return String(Ym(e));
}
function X0(e) {
  var t = e.scale, r = e.labelFormat;
  return function(i, a) {
    return {
      datum: i,
      index: a,
      text: "" + r(i, a),
      value: t(i)
    };
  };
}
var q0 = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function ns() {
  return ns = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, ns.apply(this, arguments);
}
function G0(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Z0 = {
  display: "flex"
};
function Xm(e) {
  var t = e.className, r = e.style, i = r === void 0 ? Z0 : r, a = e.scale, l = e.shape, f = e.domain, d = e.fill, u = d === void 0 ? nh : d, h = e.size, y = h === void 0 ? nh : h, v = e.labelFormat, b = v === void 0 ? Ym : v, P = e.labelTransform, k = P === void 0 ? X0 : P, N = e.shapeWidth, R = N === void 0 ? 15 : N, m = e.shapeHeight, O = m === void 0 ? 15 : m, D = e.shapeMargin, L = D === void 0 ? "2px 4px 2px 0" : D, _ = e.shapeStyle, C = e.labelAlign, V = C === void 0 ? "left" : C, H = e.labelFlex, X = H === void 0 ? "1" : H, le = e.labelMargin, Z = le === void 0 ? "0 4px" : le, W = e.itemMargin, U = W === void 0 ? "0" : W, B = e.direction, $ = B === void 0 ? "column" : B, ne = e.itemDirection, ee = ne === void 0 ? "row" : ne, ie = e.legendLabelProps, q = e.children, j = G0(e, q0), J = f || ("domain" in a ? a.domain() : []), oe = k({
    scale: a,
    labelFormat: b
  }), De = J.map(oe);
  return q ? /* @__PURE__ */ E.createElement(E.Fragment, null, q(De)) : /* @__PURE__ */ E.createElement("div", {
    className: wn("visx-legend", t),
    style: ns({}, i, {
      flexDirection: $
    })
  }, De.map(function(ye, de) {
    return /* @__PURE__ */ E.createElement(Yc, ns({
      key: "legend-" + ye.text + "-" + de,
      margin: U,
      flexDirection: ee
    }, j), /* @__PURE__ */ E.createElement(Km, {
      shape: l,
      height: O,
      width: R,
      margin: L,
      item: J[de],
      itemIndex: de,
      label: ye,
      fill: u,
      size: y,
      shapeStyle: _
    }), /* @__PURE__ */ E.createElement(Xc, ns({
      label: ye.text,
      flex: X,
      margin: Z,
      align: V
    }, ie)));
  }));
}
Xm.propTypes = {
  children: Ce.func,
  className: Ce.string,
  domain: Ce.array,
  shapeWidth: Ce.oneOfType([Ce.string, Ce.number]),
  shapeHeight: Ce.oneOfType([Ce.string, Ce.number]),
  shapeMargin: Ce.oneOfType([Ce.string, Ce.number]),
  labelAlign: Ce.string,
  labelFlex: Ce.oneOfType([Ce.string, Ce.number]),
  labelMargin: Ce.oneOfType([Ce.string, Ce.number]),
  itemMargin: Ce.oneOfType([Ce.string, Ce.number]),
  fill: Ce.func,
  size: Ce.func,
  shapeStyle: Ce.func
};
function Q0(e) {
  return /* @__PURE__ */ E.createElement(Xm, e);
}
function J0(e) {
  let t = ["legend-container"], r = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), r.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && r.push("single-row"), e.legend.reverseLabelOrder && (r.push("d-flex"), r.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && r.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: r
  };
}
const du = (e, t) => {
  var N;
  const { formatDate: r, parseDate: i } = se.useContext(bt);
  let a = [], l = "", f = [], d = [];
  ((N = e.series) == null ? void 0 : N.length) > 0 && e.data ? (a = e.series[0], l = e.series[0].dataKey, f = e.highlightedBarValues, d = e.data.map((R) => R[e.xAxis.dataKey])) : (a = [], l = "", f = [], d = []);
  const u = (R, m) => {
    const O = [...e.highlightedBarValues];
    O[m].borderWidth = R.target.value, t({
      ...e,
      highlightedBarValues: O
    });
  }, h = (R, m) => {
    R.preventDefault();
    const O = [...e.highlightedBarValues];
    O[m].value = R.target.value, O[m].dataKey = l, t({
      ...e,
      highlightedBarValues: O
    });
  }, y = (R, m) => {
    R.preventDefault();
    const O = [...e.highlightedBarValues];
    O.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: O
    });
  }, v = (R, m) => {
    R.preventDefault();
    const O = [...e.highlightedBarValues];
    O.splice(m, 1), t({
      ...e,
      highlightedBarValues: O
    });
  }, b = (R, m) => {
    const O = [...e.highlightedBarValues];
    O[m].color = R.target.value, t({
      ...e
    });
  }, P = (R, m) => {
    const O = [...e.highlightedBarValues];
    O[m].legendLabel = R.target.value, t({
      ...e,
      copyOfHighlightedBarValues: O
    });
  }, k = () => {
  };
  return k.checkFontColor = (R, m, O) => {
    if (e.xAxis.type === "date") {
      if (k.formatDates(m).includes(R))
        return "#000";
    } else if (m.includes(R))
      return "#000";
    return O;
  }, k.formatDates = (R) => R.map((m) => m ? r(i(m)) : !1), k.findDuplicates = (R) => {
    const m = {};
    return R == null ? void 0 : R.filter((D) => {
      const { legendLabel: L } = D;
      return m[L] ? !1 : (m[L] = !0, !0);
    });
  }, {
    HighLightedBarUtils: k,
    highlightedSeries: a,
    highlightedSeriesKey: l,
    highlightedBarValues: f,
    highlightedSeriesValues: d,
    handleUpdateHighlightedBar: h,
    handleAddNewHighlightedBar: y,
    handleRemoveHighlightedBar: v,
    handleUpdateHighlightedBarColor: b,
    handleHighlightedBarLegendLabel: P,
    handleUpdateHighlightedBorderWidth: u
  };
}, qm = (e) => {
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
}, eS = (e, t) => e ? t ? "35px" : "15px" : "0px", Gm = se.forwardRef(({ config: e, colorScale: t, seriesHighlight: r, highlight: i, highlightReset: a, currentViewport: l, formatLabels: f, skipId: d = "legend" }, u) => {
  const { innerClasses: h, containerClasses: y } = J0(e), { runtime: v, legend: b } = e;
  if (!b)
    return null;
  const P = (b == null ? void 0 : b.position) === "bottom" || ["sm", "xs", "xxs"].includes(l) && !b.hide, k = {
    marginBottom: P ? "15px" : "0px",
    marginTop: P && e.orientation === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : eS(P, e.brush.active)
  }, { HighLightedBarUtils: N } = du(e);
  let R = N.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ React.createElement("aside", { ref: u, style: k, id: d || "legend", className: y.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, b.label && /* @__PURE__ */ React.createElement("h3", null, Ci(b.label)), b.description && /* @__PURE__ */ React.createElement("p", null, Ci(b.description)), /* @__PURE__ */ React.createElement(Q0, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (m) => {
    var O, D, L, _;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: h.join(" ") }, f(m).map((C, V) => {
      var le, Z, W, U;
      let H = ["legend-item", `legend-text--${C.text.replace(" ", "").toLowerCase()}`], X = C.datum;
      if (e.exclusions.active && ((le = e.exclusions.keys) != null && le.includes(X)))
        return null;
      if (v.seriesLabels) {
        let B = e.runtime.seriesLabelsAll.indexOf(X);
        X = e.runtime.seriesKeys[B], ((Z = v == null ? void 0 : v.forecastingSeriesKeys) == null ? void 0 : Z.length) > 0 && (X = C.text);
      }
      return r.length > 0 && r.includes(X) === !1 && H.push("inactive"), /* @__PURE__ */ React.createElement(
        Yc,
        {
          className: H.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${V}`,
          onKeyDown: (B) => {
            B.key === "Enter" && (B.preventDefault(), i(C));
          },
          onClick: (B) => {
            B.preventDefault(), i(C);
          },
          role: "button"
        },
        /* @__PURE__ */ React.createElement("div", null, e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ React.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ React.createElement(Qt, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: C.value, strokeWidth: 2, strokeDasharray: qm((W = e.series[V]) != null && W.type ? (U = e.series[V]) == null ? void 0 : U.type : "") })) : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement(rp, { viewport: l, margin: "0", fill: C.value, display: !0 }))),
        /* @__PURE__ */ React.createElement(Xc, { align: "left", margin: "0 0 0 4px" }, C.text)
      );
    }), R.map((C, V) => {
      let H = "legend-item", X = C.legendLabel;
      return X ? (r.length > 0 && r.includes(X) === !1 && (H += " inactive"), /* @__PURE__ */ React.createElement(
        Yc,
        {
          className: H,
          tabIndex: 0,
          key: `legend-quantile-${V}`,
          onKeyDown: (le) => {
            le.key === "Enter" && (le.preventDefault(), i(C.legendLabel));
          },
          onClick: (le) => {
            le.preventDefault(), i(C.legendLabel);
          }
        },
        /* @__PURE__ */ React.createElement(rp, { fill: "transparent", borderColor: C.color ? C.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ React.createElement(Xc, { align: "left", margin: "0 0 0 4px" }, C.legendLabel ? C.legendLabel : C.value)
      )) : !1;
    })), /* @__PURE__ */ React.createElement(React.Fragment, null, ((O = e == null ? void 0 : e.preliminaryData) == null ? void 0 : O.some((C) => C.label && C.type === "effect" && C.style)) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("div", { className: e.legend.singleRow && P ? "legend-container__inner bottom single-row" : "" }, (D = e == null ? void 0 : e.preliminaryData) == null ? void 0 : D.map((C, V) => /* @__PURE__ */ React.createElement(React.Fragment, null, C.label && C.type === "effect" && C.style && /* @__PURE__ */ React.createElement("div", { key: V, className: "legend-preliminary" }, /* @__PURE__ */ React.createElement("span", { className: C.symbol }, C.lineCode), /* @__PURE__ */ React.createElement("p", null, " ", C.label)))))), !e.legend.hideSuppressedLabels && ((L = e == null ? void 0 : e.preliminaryData) == null ? void 0 : L.some((C) => C.label && C.displayLegend && C.type === "suppression" && C.value && ((C == null ? void 0 : C.style) || C.symbol))) && (e.visualizationType === "Bar" && e.visualizationSubType === "regular" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("div", { className: e.legend.singleRow && P ? "legend-container__inner bottom single-row" : "" }, (_ = e == null ? void 0 : e.preliminaryData) == null ? void 0 : _.map(
      (C, V) => C.displayLegend && C.type === "suppression" && /* @__PURE__ */ React.createElement(React.Fragment, null, e.visualizationType === "Bar" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { key: V + "Bar", className: `legend-preliminary ${C.symbol}` }, /* @__PURE__ */ React.createElement("span", { className: C.symbol }, C.iconCode), /* @__PURE__ */ React.createElement("p", { className: C.type }, C.label))), e.visualizationType === "Line" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { key: V + "Line", className: "legend-preliminary " }, /* @__PURE__ */ React.createElement("span", null, C.lineCode), /* @__PURE__ */ React.createElement("p", { className: C.type }, C.label))), e.visualizationType === "Combo" && /* @__PURE__ */ React.createElement(React.Fragment, null, C.symbol && C.iconCode && /* @__PURE__ */ React.createElement("div", { key: V + "Combo", className: `legend-preliminary ${C.symbol}` }, /* @__PURE__ */ React.createElement("span", { className: C.symbol }, C.iconCode), /* @__PURE__ */ React.createElement("p", { className: C.type }, C.label)), C.style && C.lineCode && /* @__PURE__ */ React.createElement("div", { key: V + "Combo", className: "legend-preliminary" }, /* @__PURE__ */ React.createElement("span", null, C.lineCode), /* @__PURE__ */ React.createElement("p", null, C.label))))
    )))));
  }), r.length > 0 && /* @__PURE__ */ React.createElement(ls, { onClick: (m) => a(m), style: { marginTop: "1rem" } }, "Reset"));
});
function tS(e) {
  return _y({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const Zm = (e, t, r, i) => (a) => {
  var b, P, k, N, R;
  const { visualizationType: l, visualizationSubType: f, series: d, runtime: u } = e, h = (m) => {
    var O;
    return e.legend.reverseLabelOrder && ((O = e.legend) == null ? void 0 : O.position) === "bottom" ? m.reverse() : m;
  }, y = (b = e.legend) == null ? void 0 : b.colorCode;
  if (l === "Deviation Bar") {
    const [m, O] = Ac[e.twoColor.palette], D = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: m
    }, L = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: O
    };
    return h([D, L]);
  }
  if (l === "Bar" && f === "regular" && y && (d == null ? void 0 : d.length) === 1) {
    let m = rr[e.palette];
    for (; t.length > m.length; )
      m = m.concat(m);
    m = m.slice(0, r.length);
    const O = /* @__PURE__ */ new Set();
    t.forEach((L) => O.add(L[y]));
    const D = Array.from(O).map((L, _) => ({
      datum: L,
      index: _,
      text: L,
      value: m[_]
    }));
    return h(D);
  }
  if (((P = u == null ? void 0 : u.forecastingSeriesKeys) == null ? void 0 : P.length) > 0) {
    let m = [];
    return (N = (k = e.runtime) == null ? void 0 : k.forecastingSeriesKeys) == null || N.map((O, D) => {
      var L;
      return (L = O == null ? void 0 : O.stages) == null ? void 0 : L.map((_, C) => {
        var X, le, Z, W;
        let V = (X = Lc[_.color]) != null && X[2] ? (le = Lc[_.color]) == null ? void 0 : le[2] : (Z = rr[_.color]) != null && Z[2] ? (W = rr[_.color]) == null ? void 0 : W[2] : "#ccc";
        const H = {
          datum: _.key,
          index: C,
          text: _.key,
          value: V
        };
        m.push(H);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((O, D) => {
      let L = rr[e.palette][D] ? rr[e.palette][D] : "#ccc";
      const _ = {
        datum: O,
        index: D,
        text: O,
        value: L
      };
      m.push(_);
    }), h(m);
  }
  if (e.series.filter((m) => !!m.name).length > 0) {
    const m = /* @__PURE__ */ new Set();
    e.series.forEach((D) => {
      m.add(D.name || D.dataKey);
    });
    const O = Array.from(m).map((D, L) => ({
      datum: D,
      index: L,
      text: D,
      value: i(D)
    }));
    return h(O);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const m = a.length - 1;
    let O = [];
    return (R = e.suppressedData) == null || R.forEach(({ label: D, icon: L }, _) => {
      if (D && L) {
        const C = {
          datum: D,
          index: m + _,
          text: D,
          icon: /* @__PURE__ */ React.createElement(tS, { color: "#000", size: 15 })
        };
        O.push(C);
      }
    }), [...a, ...O];
  }
  return h(a);
}, pc = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), nS = (e) => {
  const { transformedData: t, config: r, colorScale: i, currentViewport: a, dimensions: l, highlight: f, highlightReset: d, seriesHighlight: u } = se.useContext(bt), { tooltipData: h, showTooltip: y, hideTooltip: v, tooltipOpen: b, tooltipLeft: P, tooltipTop: k } = Im(), { handleTooltipMouseOver: N, handleTooltipMouseOff: R, TooltipListItem: m } = Vm({
    xScale: !1,
    yScale: !1,
    showTooltip: y,
    hideTooltip: v
  }), [O, D] = se.useState(void 0), [L, _] = se.useState(!1), C = Object.values(r.columns).filter((j) => j.showInViz), V = C.length > 0, H = V ? "pivotColumn" : void 0, X = se.useMemo(() => {
    if (V) {
      let j = [];
      const J = r.yAxis.dataKey, oe = C.map((de) => de.name), De = [J, ...oe], ye = r.xAxis.dataKey;
      return t.forEach((de) => {
        De.forEach((Ee) => {
          const re = de[Ee];
          re && j.push({
            [H]: re,
            [ye]: `${de[ye]} - ${Ee}`
          });
        });
      }), j;
    }
    return t;
  }, [t, V]), le = se.useMemo(() => {
    if (V) {
      const j = {};
      X.forEach((De) => {
        j[De[r.xAxis.dataKey]] || (j[De[r.xAxis.dataKey]] = !0);
      });
      const J = Object.entries(j).length;
      let oe = r.customColors || rr[r.palette];
      return oe = oe.slice(0, J), Uh({
        domain: Object.keys(j),
        range: oe,
        unknown: null
      });
    }
    return i;
  }, [i, V]), Z = se.useRef(), W = $f(Z, {
    freezeOnceVisible: !1
  });
  se.useEffect(() => {
    document.querySelector(".isEditor") && _((J) => !0);
  }), se.useEffect(() => {
    W != null && W.isIntersecting && r.animate && !L && setTimeout(() => {
      _(!0);
    }, 500);
  }, [W == null ? void 0 : W.isIntersecting, r.animate]);
  const U = ({ arcs: j, path: J, getKey: oe }) => {
    const De = zx(j, oe, {
      from: pc,
      enter: pc,
      update: pc,
      leave: pc
    });
    return se.useEffect(() => {
      const ye = setTimeout(() => {
        v();
      }, 500);
      return () => {
        clearTimeout(ye);
      };
    }, [h]), /* @__PURE__ */ E.createElement(E.Fragment, null, De.map(({ item: ye, props: de, key: Ee }, re) => /* @__PURE__ */ E.createElement(Je, { className: ye.data[r.xAxis.dataKey], key: `${Ee}-${re}`, style: { opacity: r.legend.behavior === "highlight" && u.length > 0 && u.indexOf(ye.data[r.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ E.createElement(
      jp.path,
      {
        d: Dx(
          [de.startAngle, de.endAngle],
          (Oe, ve) => J({
            ...ye,
            startAngle: Oe,
            endAngle: ve
          })
        ),
        fill: le(ye.data[r.runtime.xAxis.dataKey]),
        onMouseEnter: (Oe) => N(Oe, { data: ye.data[r.runtime.xAxis.dataKey], arc: ye }),
        onMouseLeave: (Oe) => R()
      }
    ))), De.map(({ item: ye, key: de }, Ee) => {
      const [re, Oe] = J.centroid(ye), ve = ye.endAngle - ye.startAngle >= 0.1;
      let ce = "#FFF";
      return le(ye.data[r.runtime.xAxis.dataKey]) && (ce = Ko(ce, le(ye.data[r.runtime.xAxis.dataKey]))), /* @__PURE__ */ E.createElement(jp.g, { key: `${de}${Ee}` }, ve && /* @__PURE__ */ E.createElement(vt, { style: { fill: ce }, x: re, y: Oe, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((ye.endAngle - ye.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [B] = l;
  r && r.legend && !r.legend.hide && a === "lg" && (B = B * 0.73);
  const $ = r.heights.vertical, ne = Math.min(B, $) / 2, ee = $ / 2, ie = r.pieType === "Donut" ? 75 : ne;
  se.useEffect(() => {
    if (u.length > 0 && r.legend.behavior !== "highlight") {
      let j = [];
      X.forEach((J) => {
        u.indexOf(J[r.runtime.xAxis.dataKey]) !== -1 && j.push(J);
      }), D(j);
    } else
      D(void 0);
  }, [u]);
  const q = Zm(r, [], X, le);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Cr, { component: "PieChart" }, /* @__PURE__ */ E.createElement("svg", { width: ne * 2, height: $, className: `animated-pie group ${r.animate === !1 || L ? "animated" : ""}`, role: "img", "aria-label": lf(r) }, /* @__PURE__ */ E.createElement(Je, { top: ee, left: ne }, /* @__PURE__ */ E.createElement(
    qb,
    {
      data: O || X,
      pieValue: (j) => j[H || r.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: ne - ie,
      outerRadius: ne
    },
    (j) => /* @__PURE__ */ E.createElement(U, { ...j, getKey: (J) => J.data[r.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ E.createElement("div", { ref: Z }), h && Object.entries(h.data).length > 0 && b && y && h.dataYPosition && h.dataXPosition && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${r.tooltips.opacity / 100}) !important`), /* @__PURE__ */ E.createElement(Wm, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: P, top: k }, /* @__PURE__ */ E.createElement("ul", null, typeof h == "object" && Object.entries(h.data).map((j, J) => /* @__PURE__ */ E.createElement(m, { item: j, key: J })))))), /* @__PURE__ */ E.createElement(Gm, { config: r, colorScale: le, seriesHighlight: u, highlight: f, highlightReset: d, currentViewport: a, formatLabels: q }));
};
function ps(e) {
  return e.split("-")[1];
}
function Hf(e) {
  return e === "y" ? "height" : "width";
}
function _i(e) {
  return e.split("-")[0];
}
function hs(e) {
  return ["top", "bottom"].includes(_i(e)) ? "x" : "y";
}
function rh(e, t, r) {
  let { reference: i, floating: a } = e;
  const l = i.x + i.width / 2 - a.width / 2, f = i.y + i.height / 2 - a.height / 2, d = hs(t), u = Hf(d), h = i[u] / 2 - a[u] / 2, y = d === "x";
  let v;
  switch (_i(t)) {
    case "top":
      v = { x: l, y: i.y - a.height };
      break;
    case "bottom":
      v = { x: l, y: i.y + i.height };
      break;
    case "right":
      v = { x: i.x + i.width, y: f };
      break;
    case "left":
      v = { x: i.x - a.width, y: f };
      break;
    default:
      v = { x: i.x, y: i.y };
  }
  switch (ps(t)) {
    case "start":
      v[d] -= h * (r && y ? -1 : 1);
      break;
    case "end":
      v[d] += h * (r && y ? -1 : 1);
  }
  return v;
}
function Qm(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function rs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Jm(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: i, y: a, platform: l, rects: f, elements: d, strategy: u } = e, { boundary: h = "clippingAncestors", rootBoundary: y = "viewport", elementContext: v = "floating", altBoundary: b = !1, padding: P = 0 } = t, k = Qm(P), N = d[b ? v === "floating" ? "reference" : "floating" : v], R = rs(await l.getClippingRect({ element: (r = await (l.isElement == null ? void 0 : l.isElement(N))) == null || r ? N : N.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(d.floating)), boundary: h, rootBoundary: y, strategy: u })), m = v === "floating" ? { ...f.floating, x: i, y: a } : f.reference, O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d.floating)), D = await (l.isElement == null ? void 0 : l.isElement(O)) && await (l.getScale == null ? void 0 : l.getScale(O)) || { x: 1, y: 1 }, L = rs(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: O, strategy: u }) : m);
  return { top: (R.top - L.top + k.top) / D.y, bottom: (L.bottom - R.bottom + k.bottom) / D.y, left: (R.left - L.left + k.left) / D.x, right: (L.right - R.right + k.right) / D.x };
}
const rS = Math.min, aS = Math.max;
function df(e, t, r) {
  return aS(e, rS(t, r));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const iS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Gc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => iS[t]);
}
function oS(e, t, r) {
  r === void 0 && (r = !1);
  const i = ps(e), a = hs(e), l = Hf(a);
  let f = a === "x" ? i === (r ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (f = Gc(f)), { main: f, cross: Gc(f) };
}
const lS = { start: "end", end: "start" };
function Dd(e) {
  return e.replace(/start|end/g, (t) => lS[t]);
}
const sS = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: i, middlewareData: a, rects: l, initialPlacement: f, platform: d, elements: u } = t, { mainAxis: h = !0, crossAxis: y = !0, fallbackPlacements: v, fallbackStrategy: b = "bestFit", fallbackAxisSideDirection: P = "none", flipAlignment: k = !0, ...N } = e, R = _i(i), m = _i(f) === f, O = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), D = v || (m || !k ? [Gc(f)] : function(Z) {
      const W = Gc(Z);
      return [Dd(Z), W, Dd(W)];
    }(f));
    v || P === "none" || D.push(...function(Z, W, U, B) {
      const $ = ps(Z);
      let ne = function(ee, ie, q) {
        const j = ["left", "right"], J = ["right", "left"], oe = ["top", "bottom"], De = ["bottom", "top"];
        switch (ee) {
          case "top":
          case "bottom":
            return q ? ie ? J : j : ie ? j : J;
          case "left":
          case "right":
            return ie ? oe : De;
          default:
            return [];
        }
      }(_i(Z), U === "start", B);
      return $ && (ne = ne.map((ee) => ee + "-" + $), W && (ne = ne.concat(ne.map(Dd)))), ne;
    }(f, k, P, O));
    const L = [f, ...D], _ = await Jm(t, N), C = [];
    let V = ((r = a.flip) == null ? void 0 : r.overflows) || [];
    if (h && C.push(_[R]), y) {
      const { main: Z, cross: W } = oS(i, l, O);
      C.push(_[Z], _[W]);
    }
    if (V = [...V, { placement: i, overflows: C }], !C.every((Z) => Z <= 0)) {
      var H, X;
      const Z = (((H = a.flip) == null ? void 0 : H.index) || 0) + 1, W = L[Z];
      if (W)
        return { data: { index: Z, overflows: V }, reset: { placement: W } };
      let U = (X = V.find((B) => B.overflows[0] <= 0)) == null ? void 0 : X.placement;
      if (!U)
        switch (b) {
          case "bestFit": {
            var le;
            const B = (le = V.map(($) => [$.placement, $.overflows.filter((ne) => ne > 0).reduce((ne, ee) => ne + ee, 0)]).sort(($, ne) => $[1] - ne[1])[0]) == null ? void 0 : le[0];
            B && (U = B);
            break;
          }
          case "initialPlacement":
            U = f;
        }
      if (i !== U)
        return { reset: { placement: U } };
    }
    return {};
  } };
}, cS = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: i } = t, a = await async function(l, f) {
      const { placement: d, platform: u, elements: h } = l, y = await (u.isRTL == null ? void 0 : u.isRTL(h.floating)), v = _i(d), b = ps(d), P = hs(d) === "x", k = ["left", "top"].includes(v) ? -1 : 1, N = y && P ? -1 : 1, R = typeof f == "function" ? f(l) : f;
      let { mainAxis: m, crossAxis: O, alignmentAxis: D } = typeof R == "number" ? { mainAxis: R, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...R };
      return b && typeof D == "number" && (O = b === "end" ? -1 * D : D), P ? { x: O * N, y: m * k } : { x: m * k, y: O * N };
    }(t, e);
    return { x: r + a.x, y: i + a.y, data: a };
  } };
}, uS = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: i, placement: a } = t, { mainAxis: l = !0, crossAxis: f = !1, limiter: d = { fn: (R) => {
      let { x: m, y: O } = R;
      return { x: m, y: O };
    } }, ...u } = e, h = { x: r, y: i }, y = await Jm(t, u), v = hs(_i(a)), b = v === "x" ? "y" : "x";
    let P = h[v], k = h[b];
    if (l) {
      const R = v === "y" ? "bottom" : "right";
      P = df(P + y[v === "y" ? "top" : "left"], P, P - y[R]);
    }
    if (f) {
      const R = b === "y" ? "bottom" : "right";
      k = df(k + y[b === "y" ? "top" : "left"], k, k - y[R]);
    }
    const N = d.fn({ ...t, [v]: P, [b]: k });
    return { ...N, data: { x: N.x - r, y: N.y - i } };
  } };
};
function pr(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wr(e) {
  return pr(e).getComputedStyle(e);
}
const ah = Math.min, as = Math.max, Zc = Math.round;
function ey(e) {
  const t = Wr(e);
  let r = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, l = e.offsetHeight, f = Zc(r) !== a || Zc(i) !== l;
  return f && (r = a, i = l), { width: r, height: i, fallback: f };
}
function $a(e) {
  return ny(e) ? (e.nodeName || "").toLowerCase() : "";
}
let hc;
function ty() {
  if (hc)
    return hc;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (hc = e.brands.map((t) => t.brand + "/" + t.version).join(" "), hc) : navigator.userAgent;
}
function Vr(e) {
  return e instanceof pr(e).HTMLElement;
}
function Fa(e) {
  return e instanceof pr(e).Element;
}
function ny(e) {
  return e instanceof pr(e).Node;
}
function ih(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof pr(e).ShadowRoot || e instanceof ShadowRoot;
}
function fu(e) {
  const { overflow: t, overflowX: r, overflowY: i, display: a } = Wr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + r) && !["inline", "contents"].includes(a);
}
function dS(e) {
  return ["table", "td", "th"].includes($a(e));
}
function ff(e) {
  const t = /firefox/i.test(ty()), r = Wr(e), i = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!i && i !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((a) => r.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const l = r.contain;
    return l != null && l.includes(a);
  });
}
function ry() {
  return !/^((?!chrome|android).)*safari/i.test(ty());
}
function Wf(e) {
  return ["html", "body", "#document"].includes($a(e));
}
function ay(e) {
  return Fa(e) ? e : e.contextElement;
}
const iy = { x: 1, y: 1 };
function Uo(e) {
  const t = ay(e);
  if (!Vr(t))
    return iy;
  const r = t.getBoundingClientRect(), { width: i, height: a, fallback: l } = ey(t);
  let f = (l ? Zc(r.width) : r.width) / i, d = (l ? Zc(r.height) : r.height) / a;
  return f && Number.isFinite(f) || (f = 1), d && Number.isFinite(d) || (d = 1), { x: f, y: d };
}
function us(e, t, r, i) {
  var a, l;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const f = e.getBoundingClientRect(), d = ay(e);
  let u = iy;
  t && (i ? Fa(i) && (u = Uo(i)) : u = Uo(e));
  const h = d ? pr(d) : window, y = !ry() && r;
  let v = (f.left + (y && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, b = (f.top + (y && ((l = h.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / u.y, P = f.width / u.x, k = f.height / u.y;
  if (d) {
    const N = pr(d), R = i && Fa(i) ? pr(i) : i;
    let m = N.frameElement;
    for (; m && i && R !== N; ) {
      const O = Uo(m), D = m.getBoundingClientRect(), L = getComputedStyle(m);
      D.x += (m.clientLeft + parseFloat(L.paddingLeft)) * O.x, D.y += (m.clientTop + parseFloat(L.paddingTop)) * O.y, v *= O.x, b *= O.y, P *= O.x, k *= O.y, v += D.x, b += D.y, m = pr(m).frameElement;
    }
  }
  return { width: P, height: k, top: b, right: v + P, bottom: b + k, left: v, x: v, y: b };
}
function Ma(e) {
  return ((ny(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function pu(e) {
  return Fa(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function oy(e) {
  return us(Ma(e)).left + pu(e).scrollLeft;
}
function ds(e) {
  if ($a(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ih(e) && e.host || Ma(e);
  return ih(t) ? t.host : t;
}
function ly(e) {
  const t = ds(e);
  return Wf(t) ? t.ownerDocument.body : Vr(t) && fu(t) ? t : ly(t);
}
function sy(e, t) {
  var r;
  t === void 0 && (t = []);
  const i = ly(e), a = i === ((r = e.ownerDocument) == null ? void 0 : r.body), l = pr(i);
  return a ? t.concat(l, l.visualViewport || [], fu(i) ? i : []) : t.concat(i, sy(i));
}
function oh(e, t, r) {
  return t === "viewport" ? rs(function(i, a) {
    const l = pr(i), f = Ma(i), d = l.visualViewport;
    let u = f.clientWidth, h = f.clientHeight, y = 0, v = 0;
    if (d) {
      u = d.width, h = d.height;
      const b = ry();
      (b || !b && a === "fixed") && (y = d.offsetLeft, v = d.offsetTop);
    }
    return { width: u, height: h, x: y, y: v };
  }(e, r)) : Fa(t) ? rs(function(i, a) {
    const l = us(i, !0, a === "fixed"), f = l.top + i.clientTop, d = l.left + i.clientLeft, u = Vr(i) ? Uo(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * u.x, height: i.clientHeight * u.y, x: d * u.x, y: f * u.y };
  }(t, r)) : rs(function(i) {
    const a = Ma(i), l = pu(i), f = i.ownerDocument.body, d = as(a.scrollWidth, a.clientWidth, f.scrollWidth, f.clientWidth), u = as(a.scrollHeight, a.clientHeight, f.scrollHeight, f.clientHeight);
    let h = -l.scrollLeft + oy(i);
    const y = -l.scrollTop;
    return Wr(f).direction === "rtl" && (h += as(a.clientWidth, f.clientWidth) - d), { width: d, height: u, x: h, y };
  }(Ma(e)));
}
function lh(e) {
  return Vr(e) && Wr(e).position !== "fixed" ? e.offsetParent : null;
}
function sh(e) {
  const t = pr(e);
  let r = lh(e);
  for (; r && dS(r) && Wr(r).position === "static"; )
    r = lh(r);
  return r && ($a(r) === "html" || $a(r) === "body" && Wr(r).position === "static" && !ff(r)) ? t : r || function(i) {
    let a = ds(i);
    for (; Vr(a) && !Wf(a); ) {
      if (ff(a))
        return a;
      a = ds(a);
    }
    return null;
  }(e) || t;
}
function fS(e, t, r) {
  const i = Vr(t), a = Ma(t), l = us(e, !0, r === "fixed", t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const d = { x: 0, y: 0 };
  if (i || !i && r !== "fixed")
    if (($a(t) !== "body" || fu(a)) && (f = pu(t)), Vr(t)) {
      const u = us(t, !0);
      d.x = u.x + t.clientLeft, d.y = u.y + t.clientTop;
    } else
      a && (d.x = oy(a));
  return { x: l.left + f.scrollLeft - d.x, y: l.top + f.scrollTop - d.y, width: l.width, height: l.height };
}
const pS = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: i, strategy: a } = e;
  const l = r === "clippingAncestors" ? function(h, y) {
    const v = y.get(h);
    if (v)
      return v;
    let b = sy(h).filter((R) => Fa(R) && $a(R) !== "body"), P = null;
    const k = Wr(h).position === "fixed";
    let N = k ? ds(h) : h;
    for (; Fa(N) && !Wf(N); ) {
      const R = Wr(N), m = ff(N);
      (k ? m || P : m || R.position !== "static" || !P || !["absolute", "fixed"].includes(P.position)) ? P = R : b = b.filter((O) => O !== N), N = ds(N);
    }
    return y.set(h, b), b;
  }(t, this._c) : [].concat(r), f = [...l, i], d = f[0], u = f.reduce((h, y) => {
    const v = oh(t, y, a);
    return h.top = as(v.top, h.top), h.right = ah(v.right, h.right), h.bottom = ah(v.bottom, h.bottom), h.left = as(v.left, h.left), h;
  }, oh(t, d, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: i } = e;
  const a = Vr(r), l = Ma(r);
  if (r === l)
    return t;
  let f = { scrollLeft: 0, scrollTop: 0 }, d = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && (($a(r) !== "body" || fu(l)) && (f = pu(r)), Vr(r))) {
    const h = us(r);
    d = Uo(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  return { width: t.width * d.x, height: t.height * d.y, x: t.x * d.x - f.scrollLeft * d.x + u.x, y: t.y * d.y - f.scrollTop * d.y + u.y };
}, isElement: Fa, getDimensions: function(e) {
  return Vr(e) ? ey(e) : e.getBoundingClientRect();
}, getOffsetParent: sh, getDocumentElement: Ma, getScale: Uo, async getElementRects(e) {
  let { reference: t, floating: r, strategy: i } = e;
  const a = this.getOffsetParent || sh, l = this.getDimensions;
  return { reference: fS(t, await a(r), i), floating: { x: 0, y: 0, ...await l(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Wr(e).direction === "rtl" }, ch = (e, t, r) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: pS, ...r }, l = { ...a.platform, _c: i };
  return (async (f, d, u) => {
    const { placement: h = "bottom", strategy: y = "absolute", middleware: v = [], platform: b } = u, P = v.filter(Boolean), k = await (b.isRTL == null ? void 0 : b.isRTL(d));
    if (b == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), P.filter((_) => {
      let { name: C } = _;
      return C === "autoPlacement" || C === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    f && d || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let N = await b.getElementRects({ reference: f, floating: d, strategy: y }), { x: R, y: m } = rh(N, h, k), O = h, D = {}, L = 0;
    for (let _ = 0; _ < P.length; _++) {
      const { name: C, fn: V } = P[_], { x: H, y: X, data: le, reset: Z } = await V({ x: R, y: m, initialPlacement: h, placement: O, strategy: y, middlewareData: D, rects: N, platform: b, elements: { reference: f, floating: d } });
      R = H ?? R, m = X ?? m, D = { ...D, [C]: { ...D[C], ...le } }, L > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), Z && L <= 50 && (L++, typeof Z == "object" && (Z.placement && (O = Z.placement), Z.rects && (N = Z.rects === !0 ? await b.getElementRects({ reference: f, floating: d, strategy: y }) : Z.rects), { x: R, y: m } = rh(N, O, k)), _ = -1);
    }
    return { x: R, y: m, placement: O, strategy: y, middlewareData: D };
  })(e, t, { ...a, platform: l });
};
var _a, Oi = { exports: {} }, uh = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
_a = uh, function() {
  var e = E, t = 60103, r = 60106;
  _a.Fragment = 60107;
  var i = 60108, a = 60114, l = 60109, f = 60110, d = 60112, u = 60113, h = 60120, y = 60115, v = 60116, b = 60121, P = 60122, k = 60117, N = 60129, R = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    t = m("react.element"), r = m("react.portal"), _a.Fragment = m("react.fragment"), i = m("react.strict_mode"), a = m("react.profiler"), l = m("react.provider"), f = m("react.context"), d = m("react.forward_ref"), u = m("react.suspense"), h = m("react.suspense_list"), y = m("react.memo"), v = m("react.lazy"), b = m("react.block"), P = m("react.server.block"), k = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), N = m("react.debug_trace_mode"), m("react.offscreen"), R = m("react.legacy_hidden");
  }
  var O = typeof Symbol == "function" && Symbol.iterator, D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function L(ce) {
    for (var be = arguments.length, G = new Array(be > 1 ? be - 1 : 0), Pe = 1; Pe < be; Pe++)
      G[Pe - 1] = arguments[Pe];
    _("error", ce, G);
  }
  function _(ce, be, G) {
    var Pe = D.ReactDebugCurrentFrame, Se = "";
    if (X) {
      var je = V(X.type), Ke = X._owner;
      Se += function(Be, yt, He) {
        var ze = "";
        if (yt) {
          var Fe = yt.fileName, Ne = Fe.replace(C, "");
          if (/^index\./.test(Ne)) {
            var ot = Fe.match(C);
            if (ot) {
              var Ue = ot[1];
              Ue && (Ne = Ue.replace(C, "") + "/" + Ne);
            }
          }
          ze = " (at " + Ne + ":" + yt.lineNumber + ")";
        } else
          He && (ze = " (created by " + He + ")");
        return `
    in ` + (Be || "Unknown") + ze;
      }(je, X._source, Ke && V(Ke.type));
    }
    (Se += Pe.getStackAddendum()) !== "" && (be += "%s", G = G.concat([Se]));
    var Ge = G.map(function(Be) {
      return "" + Be;
    });
    Ge.unshift("Warning: " + be), Function.prototype.apply.call(console[ce], console, Ge);
  }
  var C = /^(.*)[\\\/]/;
  function V(ce) {
    if (ce == null)
      return null;
    if (typeof ce.tag == "number" && L("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof ce == "function")
      return ce.displayName || ce.name || null;
    if (typeof ce == "string")
      return ce;
    switch (ce) {
      case _a.Fragment:
        return "Fragment";
      case r:
        return "Portal";
      case a:
        return "Profiler";
      case i:
        return "StrictMode";
      case u:
        return "Suspense";
      case h:
        return "SuspenseList";
    }
    if (typeof ce == "object")
      switch (ce.$$typeof) {
        case f:
          return "Context.Consumer";
        case l:
          return "Context.Provider";
        case d:
          return Pe = ce, Se = ce.render, je = "ForwardRef", Ke = Se.displayName || Se.name || "", Pe.displayName || (Ke !== "" ? je + "(" + Ke + ")" : je);
        case y:
          return V(ce.type);
        case b:
          return V(ce.render);
        case v:
          var be = (G = ce)._status === 1 ? G._result : null;
          if (be)
            return V(be);
      }
    var G, Pe, Se, je, Ke;
    return null;
  }
  var H = {};
  D.ReactDebugCurrentFrame;
  var X = null;
  function le(ce) {
    X = ce;
  }
  var Z, W, U, B = D.ReactCurrentOwner, $ = Object.prototype.hasOwnProperty, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(ce, be, G, Pe, Se) {
    var je, Ke = {}, Ge = null, Be = null;
    for (je in G !== void 0 && (Ge = "" + G), function(ze) {
      if ($.call(ze, "key")) {
        var Fe = Object.getOwnPropertyDescriptor(ze, "key").get;
        if (Fe && Fe.isReactWarning)
          return !1;
      }
      return ze.key !== void 0;
    }(be) && (Ge = "" + be.key), function(ze) {
      if ($.call(ze, "ref")) {
        var Fe = Object.getOwnPropertyDescriptor(ze, "ref").get;
        if (Fe && Fe.isReactWarning)
          return !1;
      }
      return ze.ref !== void 0;
    }(be) && (Be = be.ref, function(ze, Fe) {
      if (typeof ze.ref == "string" && B.current && Fe && B.current.stateNode !== Fe) {
        var Ne = V(B.current.type);
        U[Ne] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(B.current.type), ze.ref), U[Ne] = !0);
      }
    }(be, Se)), be)
      $.call(be, je) && !ne.hasOwnProperty(je) && (Ke[je] = be[je]);
    if (ce && ce.defaultProps) {
      var yt = ce.defaultProps;
      for (je in yt)
        Ke[je] === void 0 && (Ke[je] = yt[je]);
    }
    if (Ge || Be) {
      var He = typeof ce == "function" ? ce.displayName || ce.name || "Unknown" : ce;
      Ge && function(ze, Fe) {
        var Ne = function() {
          Z || (Z = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Fe));
        };
        Ne.isReactWarning = !0, Object.defineProperty(ze, "key", { get: Ne, configurable: !0 });
      }(Ke, He), Be && function(ze, Fe) {
        var Ne = function() {
          W || (W = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Fe));
        };
        Ne.isReactWarning = !0, Object.defineProperty(ze, "ref", { get: Ne, configurable: !0 });
      }(Ke, He);
    }
    return function(ze, Fe, Ne, ot, Ue, et, ut) {
      var st = { $$typeof: t, type: ze, key: Fe, ref: Ne, props: ut, _owner: et, _store: {} };
      return Object.defineProperty(st._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(st, "_self", { configurable: !1, enumerable: !1, writable: !1, value: ot }), Object.defineProperty(st, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Ue }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
    }(ce, Ge, Be, Se, Pe, B.current, Ke);
  }
  U = {};
  var ie, q = D.ReactCurrentOwner;
  function j(ce) {
    X = ce;
  }
  function J(ce) {
    return typeof ce == "object" && ce !== null && ce.$$typeof === t;
  }
  function oe() {
    if (q.current) {
      var ce = V(q.current.type);
      if (ce)
        return `

Check the render method of \`` + ce + "`.";
    }
    return "";
  }
  D.ReactDebugCurrentFrame, ie = !1;
  var De = {};
  function ye(ce, be) {
    if (ce._store && !ce._store.validated && ce.key == null) {
      ce._store.validated = !0;
      var G = function(Se) {
        var je = oe();
        if (!je) {
          var Ke = typeof Se == "string" ? Se : Se.displayName || Se.name;
          Ke && (je = `

Check the top-level render call using <` + Ke + ">.");
        }
        return je;
      }(be);
      if (!De[G]) {
        De[G] = !0;
        var Pe = "";
        ce && ce._owner && ce._owner !== q.current && (Pe = " It was passed a child from " + V(ce._owner.type) + "."), j(ce), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Pe), j(null);
      }
    }
  }
  function de(ce, be) {
    if (typeof ce == "object") {
      if (Array.isArray(ce))
        for (var G = 0; G < ce.length; G++) {
          var Pe = ce[G];
          J(Pe) && ye(Pe, be);
        }
      else if (J(ce))
        ce._store && (ce._store.validated = !0);
      else if (ce) {
        var Se = function(Ge) {
          if (Ge === null || typeof Ge != "object")
            return null;
          var Be = O && Ge[O] || Ge["@@iterator"];
          return typeof Be == "function" ? Be : null;
        }(ce);
        if (typeof Se == "function" && Se !== ce.entries)
          for (var je, Ke = Se.call(ce); !(je = Ke.next()).done; )
            J(je.value) && ye(je.value, be);
      }
    }
  }
  function Ee(ce) {
    var be, G = ce.type;
    if (G != null && typeof G != "string") {
      if (typeof G == "function")
        be = G.propTypes;
      else {
        if (typeof G != "object" || G.$$typeof !== d && G.$$typeof !== y)
          return;
        be = G.propTypes;
      }
      if (be) {
        var Pe = V(G);
        (function(Se, je, Ke, Ge, Be) {
          var yt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var He in Se)
            if (yt(Se, He)) {
              var ze = void 0;
              try {
                if (typeof Se[He] != "function") {
                  var Fe = Error((Ge || "React class") + ": " + Ke + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Se[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Fe.name = "Invariant Violation", Fe;
                }
                ze = Se[He](je, He, Ge, Ke, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ne) {
                ze = Ne;
              }
              !ze || ze instanceof Error || (le(Be), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ge || "React class", Ke, He, typeof ze), le(null)), ze instanceof Error && !(ze.message in H) && (H[ze.message] = !0, le(Be), L("Failed %s type: %s", Ke, ze.message), le(null));
            }
        })(be, ce.props, "prop", Pe, ce);
      } else
        G.PropTypes === void 0 || ie || (ie = !0, L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V(G) || "Unknown"));
      typeof G.getDefaultProps != "function" || G.getDefaultProps.isReactClassApproved || L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function re(ce, be, G, Pe, Se, je) {
    var Ke = function(Ne) {
      return typeof Ne == "string" || typeof Ne == "function" || Ne === _a.Fragment || Ne === a || Ne === N || Ne === i || Ne === u || Ne === h || Ne === R || typeof Ne == "object" && Ne !== null && (Ne.$$typeof === v || Ne.$$typeof === y || Ne.$$typeof === l || Ne.$$typeof === f || Ne.$$typeof === d || Ne.$$typeof === k || Ne.$$typeof === b || Ne[0] === P);
    }(ce);
    if (!Ke) {
      var Ge = "";
      (ce === void 0 || typeof ce == "object" && ce !== null && Object.keys(ce).length === 0) && (Ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Be, yt = /* @__PURE__ */ function(Ne) {
        return "";
      }();
      Ge += yt || oe(), ce === null ? Be = "null" : Array.isArray(ce) ? Be = "array" : ce !== void 0 && ce.$$typeof === t ? (Be = "<" + (V(ce.type) || "Unknown") + " />", Ge = " Did you accidentally export a JSX literal instead of a component?") : Be = typeof ce, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Be, Ge);
    }
    var He = ee(ce, be, G, Se, je);
    if (He == null)
      return He;
    if (Ke) {
      var ze = be.children;
      if (ze !== void 0)
        if (Pe)
          if (Array.isArray(ze)) {
            for (var Fe = 0; Fe < ze.length; Fe++)
              de(ze[Fe], ce);
            Object.freeze && Object.freeze(ze);
          } else
            L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          de(ze, ce);
    }
    return ce === _a.Fragment ? function(Ne) {
      for (var ot = Object.keys(Ne.props), Ue = 0; Ue < ot.length; Ue++) {
        var et = ot[Ue];
        if (et !== "children" && et !== "key") {
          j(Ne), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", et), j(null);
          break;
        }
      }
      Ne.ref !== null && (j(Ne), L("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
    }(He) : Ee(He), He;
  }
  var Oe = function(ce, be, G) {
    return re(ce, be, G, !1);
  }, ve = function(ce, be, G) {
    return re(ce, be, G, !0);
  };
  _a.jsx = Oe, _a.jsxs = ve;
}(), Oi.exports = uh;
var _d, cy = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
_d = cy, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var r = [], i = 0; i < arguments.length; i++) {
      var a = arguments[i];
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
          for (var d in a)
            e.call(a, d) && a[d] && r.push(d);
        }
      }
    }
    return r.join(" ");
  }
  _d.exports ? (t.default = t, _d.exports = t) : window.classNames = t;
}();
var dh = cy.exports;
const fh = (e, t, r) => {
  let i = null;
  return function(...a) {
    i && clearTimeout(i), i = setTimeout(() => {
      i = null, e.apply(this, a);
    }, t);
  };
}, hS = ({ content: e }) => Oi.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), mS = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, yS = se.createContext({ getTooltipData: () => mS });
function uy(e = "DEFAULT_TOOLTIP_ID") {
  return se.useContext(yS).getTooltipData(e);
}
const ph = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: r = null, place: i = "top", offset: a = 10, strategy: l = "absolute", middlewares: f = [cS(Number(a)), sS(), uS({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const d = f;
  return r ? (d.push({ name: "arrow", options: u = { element: r, padding: 5 }, async fn(h) {
    const { element: y, padding: v = 0 } = u || {}, { x: b, y: P, placement: k, rects: N, platform: R } = h;
    if (y == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const m = Qm(v), O = { x: b, y: P }, D = hs(k), L = Hf(D), _ = await R.getDimensions(y), C = D === "y" ? "top" : "left", V = D === "y" ? "bottom" : "right", H = N.reference[L] + N.reference[D] - O[D] - N.floating[L], X = O[D] - N.reference[D], le = await (R.getOffsetParent == null ? void 0 : R.getOffsetParent(y));
    let Z = le ? D === "y" ? le.clientHeight || 0 : le.clientWidth || 0 : 0;
    Z === 0 && (Z = N.floating[L]);
    const W = H / 2 - X / 2, U = m[C], B = Z - _[L] - m[V], $ = Z / 2 - _[L] / 2 + W, ne = df(U, $, B), ee = ps(k) != null && $ != ne && N.reference[L] / 2 - ($ < U ? m[C] : m[V]) - _[L] / 2 < 0;
    return { [D]: O[D] - (ee ? $ < U ? U - $ : B - $ : 0), data: { [D]: ne, centerOffset: $ - ne } };
  } }), ch(e, t, { placement: i, strategy: l, middleware: d }).then(({ x: h, y, placement: v, middlewareData: b }) => {
    var P, k;
    const N = { left: `${h}px`, top: `${y}px` }, { x: R, y: m } = (P = b.arrow) !== null && P !== void 0 ? P : { x: 0, y: 0 };
    return { tooltipStyles: N, tooltipArrowStyles: { left: R != null ? `${R}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", [(k = { top: "bottom", right: "left", bottom: "top", left: "right" }[v.split("-")[0]]) !== null && k !== void 0 ? k : "bottom"]: "-4px" } };
  })) : ch(e, t, { placement: "bottom", strategy: l, middleware: d }).then(({ x: h, y }) => ({ tooltipStyles: { left: `${h}px`, top: `${y}px` }, tooltipArrowStyles: {} }));
  var u;
};
var ki = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const hh = ({ id: e, className: t, classNameArrow: r, variant: i = "dark", anchorId: a, anchorSelect: l, place: f = "top", offset: d = 10, events: u = ["hover"], positionStrategy: h = "absolute", middlewares: y, wrapper: v, children: b = null, delayShow: P = 0, delayHide: k = 0, float: N = !1, noArrow: R = !1, clickable: m = !1, closeOnEsc: O = !1, style: D, position: L, afterShow: _, afterHide: C, content: V, html: H, isOpen: X, setIsOpen: le, activeAnchor: Z, setActiveAnchor: W }) => {
  const U = se.useRef(null), B = se.useRef(null), $ = se.useRef(null), ne = se.useRef(null), [ee, ie] = se.useState({}), [q, j] = se.useState({}), [J, oe] = se.useState(!1), [De, ye] = se.useState(!1), de = se.useRef(!1), Ee = se.useRef(null), { anchorRefs: re, setActiveAnchor: Oe } = uy(e), ve = se.useRef(!1), [ce, be] = se.useState([]), G = se.useRef(!1);
  se.useLayoutEffect(() => (G.current = !0, () => {
    G.current = !1;
  }), []), se.useEffect(() => {
    if (!J) {
      const Ue = setTimeout(() => {
        ye(!1);
      }, 150);
      return () => {
        clearTimeout(Ue);
      };
    }
    return () => null;
  }, [J]);
  const Pe = (Ue) => {
    G.current && (Ue && ye(!0), setTimeout(() => {
      G.current && (le == null || le(Ue), X === void 0 && oe(Ue));
    }, 10));
  };
  se.useEffect(() => {
    if (X === void 0)
      return () => null;
    X && ye(!0);
    const Ue = setTimeout(() => {
      oe(X);
    }, 10);
    return () => {
      clearTimeout(Ue);
    };
  }, [X]), se.useEffect(() => {
    J !== de.current && (de.current = J, J ? _ == null || _() : C == null || C());
  }, [J]);
  const Se = (Ue = k) => {
    ne.current && clearTimeout(ne.current), ne.current = setTimeout(() => {
      ve.current || Pe(!1);
    }, Ue);
  }, je = (Ue) => {
    var et;
    if (!Ue)
      return;
    P ? ($.current && clearTimeout($.current), $.current = setTimeout(() => {
      Pe(!0);
    }, P)) : Pe(!0);
    const ut = (et = Ue.currentTarget) !== null && et !== void 0 ? et : Ue.target;
    W(ut), Oe({ current: ut }), ne.current && clearTimeout(ne.current);
  }, Ke = () => {
    m ? Se(k || 100) : k ? Se() : Pe(!1), $.current && clearTimeout($.current);
  }, Ge = ({ x: Ue, y: et }) => {
    ph({ place: f, offset: d, elementReference: { getBoundingClientRect: () => ({ x: Ue, y: et, width: 0, height: 0, top: et, left: Ue, right: Ue, bottom: et }) }, tooltipReference: U.current, tooltipArrowReference: B.current, strategy: h, middlewares: y }).then((ut) => {
      Object.keys(ut.tooltipStyles).length && ie(ut.tooltipStyles), Object.keys(ut.tooltipArrowStyles).length && j(ut.tooltipArrowStyles);
    });
  }, Be = (Ue) => {
    if (!Ue)
      return;
    const et = Ue, ut = { x: et.clientX, y: et.clientY };
    Ge(ut), Ee.current = ut;
  }, yt = (Ue) => {
    je(Ue), k && Se();
  }, He = (Ue) => {
    const et = document.querySelector(`[id='${a}']`);
    et != null && et.contains(Ue.target) || ce.some((ut) => ut.contains(Ue.target)) || Pe(!1);
  }, ze = (Ue) => {
    Ue.key === "Escape" && Pe(!1);
  }, Fe = fh(je, 50), Ne = fh(Ke, 50);
  se.useEffect(() => {
    var Ue, et;
    const ut = new Set(re);
    ce.forEach((dt) => {
      ut.add({ current: dt });
    });
    const st = document.querySelector(`[id='${a}']`);
    st && ut.add({ current: st }), O && window.addEventListener("keydown", ze);
    const Ct = [];
    u.find((dt) => dt === "click") && (window.addEventListener("click", He), Ct.push({ event: "click", listener: yt })), u.find((dt) => dt === "hover") && (Ct.push({ event: "mouseenter", listener: Fe }, { event: "mouseleave", listener: Ne }, { event: "focus", listener: Fe }, { event: "blur", listener: Ne }), N && Ct.push({ event: "mousemove", listener: Be }));
    const Gt = () => {
      ve.current = !0;
    }, Wt = () => {
      ve.current = !1, Ke();
    };
    return m && ((Ue = U.current) === null || Ue === void 0 || Ue.addEventListener("mouseenter", Gt), (et = U.current) === null || et === void 0 || et.addEventListener("mouseleave", Wt)), Ct.forEach(({ event: dt, listener: Rt }) => {
      ut.forEach((cn) => {
        var Jt;
        (Jt = cn.current) === null || Jt === void 0 || Jt.addEventListener(dt, Rt);
      });
    }), () => {
      var dt, Rt;
      u.find((cn) => cn === "click") && window.removeEventListener("click", He), O && window.removeEventListener("keydown", ze), m && ((dt = U.current) === null || dt === void 0 || dt.removeEventListener("mouseenter", Gt), (Rt = U.current) === null || Rt === void 0 || Rt.removeEventListener("mouseleave", Wt)), Ct.forEach(({ event: cn, listener: Jt }) => {
        ut.forEach((jt) => {
          var fn;
          (fn = jt.current) === null || fn === void 0 || fn.removeEventListener(cn, Jt);
        });
      });
    };
  }, [De, re, ce, O, u]), se.useEffect(() => {
    let Ue = l ?? "";
    !Ue && e && (Ue = `[data-tooltip-id='${e}']`);
    const et = new MutationObserver((ut) => {
      const st = [];
      ut.forEach((Ct) => {
        if (Ct.type === "attributes" && Ct.attributeName === "data-tooltip-id" && Ct.target.getAttribute("data-tooltip-id") === e && st.push(Ct.target), Ct.type === "childList" && (Z && [...Ct.removedNodes].some((Gt) => !!Gt.contains(Z) && (ye(!1), Pe(!1), W(null), !0)), Ue))
          try {
            const Gt = [...Ct.addedNodes].filter((Wt) => Wt.nodeType === 1);
            st.push(...Gt.filter((Wt) => Wt.matches(Ue))), st.push(...Gt.flatMap((Wt) => [...Wt.querySelectorAll(Ue)]));
          } catch {
          }
      }), st.length && be((Ct) => [...Ct, ...st]);
    });
    return et.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      et.disconnect();
    };
  }, [e, l, Z]), se.useEffect(() => {
    L ? Ge(L) : N ? Ee.current && Ge(Ee.current) : ph({ place: f, offset: d, elementReference: Z, tooltipReference: U.current, tooltipArrowReference: B.current, strategy: h, middlewares: y }).then((Ue) => {
      G.current && (Object.keys(Ue.tooltipStyles).length && ie(Ue.tooltipStyles), Object.keys(Ue.tooltipArrowStyles).length && j(Ue.tooltipArrowStyles));
    });
  }, [J, Z, V, H, f, d, h, L]), se.useEffect(() => {
    var Ue;
    const et = document.querySelector(`[id='${a}']`), ut = [...ce, et];
    Z && ut.includes(Z) || W((Ue = ce[0]) !== null && Ue !== void 0 ? Ue : et);
  }, [a, ce, Z]), se.useEffect(() => () => {
    $.current && clearTimeout($.current), ne.current && clearTimeout(ne.current);
  }, []), se.useEffect(() => {
    let Ue = l;
    if (!Ue && e && (Ue = `[data-tooltip-id='${e}']`), Ue)
      try {
        const et = Array.from(document.querySelectorAll(Ue));
        be(et);
      } catch {
        be([]);
      }
  }, [e, l]);
  const ot = !!(H || V || b) && J && Object.keys(ee).length > 0;
  return De ? Oi.exports.jsxs(v, { id: e, role: "tooltip", className: dh("react-tooltip", ki.tooltip, ki[i], t, { [ki.show]: ot, [ki.fixed]: h === "fixed", [ki.clickable]: m }), style: { ...D, ...ee }, ref: U, children: [H && Oi.exports.jsx(hS, { content: H }) || V || b, Oi.exports.jsx(v, { className: dh("react-tooltip-arrow", ki.arrow, r, { [ki["no-arrow"]]: R }), style: q, ref: B })] }) : null;
}, dy = ({ id: e, anchorId: t, anchorSelect: r, content: i, html: a, className: l, classNameArrow: f, variant: d = "dark", place: u = "top", offset: h = 10, wrapper: y = "div", children: v = null, events: b = ["hover"], positionStrategy: P = "absolute", middlewares: k, delayShow: N = 0, delayHide: R = 0, float: m = !1, noArrow: O = !1, clickable: D = !1, closeOnEsc: L = !1, style: _, position: C, isOpen: V, setIsOpen: H, afterShow: X, afterHide: le }) => {
  const [Z, W] = se.useState(i), [U, B] = se.useState(a), [$, ne] = se.useState(u), [ee, ie] = se.useState(d), [q, j] = se.useState(h), [J, oe] = se.useState(N), [De, ye] = se.useState(R), [de, Ee] = se.useState(m), [re, Oe] = se.useState(y), [ve, ce] = se.useState(b), [be, G] = se.useState(P), [Pe, Se] = se.useState(null), { anchorRefs: je, activeAnchor: Ke } = uy(e), Ge = (He) => He == null ? void 0 : He.getAttributeNames().reduce((ze, Fe) => {
    var Ne;
    return Fe.startsWith("data-tooltip-") && (ze[Fe.replace(/^data-tooltip-/, "")] = (Ne = He == null ? void 0 : He.getAttribute(Fe)) !== null && Ne !== void 0 ? Ne : null), ze;
  }, {}), Be = (He) => {
    const ze = { place: (Fe) => {
      var Ne;
      ne((Ne = Fe) !== null && Ne !== void 0 ? Ne : u);
    }, content: (Fe) => {
      W(Fe ?? i);
    }, html: (Fe) => {
      B(Fe ?? a);
    }, variant: (Fe) => {
      var Ne;
      ie((Ne = Fe) !== null && Ne !== void 0 ? Ne : d);
    }, offset: (Fe) => {
      j(Fe === null ? h : Number(Fe));
    }, wrapper: (Fe) => {
      var Ne;
      Oe((Ne = Fe) !== null && Ne !== void 0 ? Ne : y);
    }, events: (Fe) => {
      const Ne = Fe == null ? void 0 : Fe.split(" ");
      ce(Ne ?? b);
    }, "position-strategy": (Fe) => {
      var Ne;
      G((Ne = Fe) !== null && Ne !== void 0 ? Ne : P);
    }, "delay-show": (Fe) => {
      oe(Fe === null ? N : Number(Fe));
    }, "delay-hide": (Fe) => {
      ye(Fe === null ? R : Number(Fe));
    }, float: (Fe) => {
      Ee(Fe === null ? m : !!Fe);
    } };
    Object.values(ze).forEach((Fe) => Fe(null)), Object.entries(He).forEach(([Fe, Ne]) => {
      var ot;
      (ot = ze[Fe]) === null || ot === void 0 || ot.call(ze, Ne);
    });
  };
  se.useEffect(() => {
    W(i);
  }, [i]), se.useEffect(() => {
    B(a);
  }, [a]), se.useEffect(() => {
    ne(u);
  }, [u]), se.useEffect(() => {
    var He;
    const ze = new Set(je);
    let Fe = r;
    if (!Fe && e && (Fe = `[data-tooltip-id='${e}']`), Fe)
      try {
        document.querySelectorAll(Fe).forEach((ut) => {
          ze.add({ current: ut });
        });
      } catch {
        console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`);
      }
    const Ne = document.querySelector(`[id='${t}']`);
    if (Ne && ze.add({ current: Ne }), !ze.size)
      return () => null;
    const ot = (He = Pe ?? Ne) !== null && He !== void 0 ? He : Ke.current, Ue = new MutationObserver((ut) => {
      ut.forEach((st) => {
        var Ct;
        if (!ot || st.type !== "attributes" || !(!((Ct = st.attributeName) === null || Ct === void 0) && Ct.startsWith("data-tooltip-")))
          return;
        const Gt = Ge(ot);
        Be(Gt);
      });
    }), et = { attributes: !0, childList: !1, subtree: !1 };
    if (ot) {
      const ut = Ge(ot);
      Be(ut), Ue.observe(ot, et);
    }
    return () => {
      Ue.disconnect();
    };
  }, [je, Ke, Pe, t, r]);
  const yt = { id: e, anchorId: t, anchorSelect: r, className: l, classNameArrow: f, content: Z, html: U, place: $, variant: ee, offset: q, wrapper: re, events: ve, positionStrategy: be, middlewares: k, delayShow: J, delayHide: De, float: de, noArrow: O, clickable: D, closeOnEsc: L, style: _, position: C, isOpen: V, setIsOpen: H, afterShow: X, afterHide: le, activeAnchor: Pe, setActiveAnchor: (He) => Se(He) };
  return v ? Oi.exports.jsx(hh, { ...yt, children: v }) : Oi.exports.jsx(hh, { ...yt });
};
function mh(e, t) {
  let r;
  if (t === void 0)
    for (const i of e)
      i != null && (r < i || r === void 0 && i >= i) && (r = i);
  else {
    let i = -1;
    for (let a of e)
      (a = t(a, ++i, e)) != null && (r < a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function gS(e, t) {
  let r;
  if (t === void 0)
    for (const i of e)
      i != null && (r > i || r === void 0 && i >= i) && (r = i);
  else {
    let i = -1;
    for (let a of e)
      (a = t(a, ++i, e)) != null && (r > a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function Od(e, t) {
  let r = 0;
  if (t === void 0)
    for (let i of e)
      (i = +i) && (r += i);
  else {
    let i = -1;
    for (let a of e)
      (a = +t(a, ++i, e)) && (r += a);
  }
  return r;
}
function vS(e) {
  return e.depth;
}
function xS(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function mc(e) {
  return function() {
    return e;
  };
}
function yh(e, t) {
  return Qc(e.source, t.source) || e.index - t.index;
}
function gh(e, t) {
  return Qc(e.target, t.target) || e.index - t.index;
}
function Qc(e, t) {
  return e.y0 - t.y0;
}
function Nd(e) {
  return e.value;
}
function bS(e) {
  return e.index;
}
function SS(e) {
  return e.nodes;
}
function ES(e) {
  return e.links;
}
function vh(e, t) {
  const r = e.get(t);
  if (!r)
    throw new Error("missing: " + t);
  return r;
}
function xh({ nodes: e }) {
  for (const t of e) {
    let r = t.y0, i = r;
    for (const a of t.sourceLinks)
      a.y0 = r + a.width / 2, r += a.width;
    for (const a of t.targetLinks)
      a.y1 = i + a.width / 2, i += a.width;
  }
}
function kS() {
  let e = 0, t = 0, r = 1, i = 1, a = 24, l = 8, f, d = bS, u = xS, h, y, v = SS, b = ES, P = 6;
  function k() {
    const $ = { nodes: v.apply(null, arguments), links: b.apply(null, arguments) };
    return N($), R($), m($), O($), _($), xh($), $;
  }
  k.update = function($) {
    return xh($), $;
  }, k.nodeId = function($) {
    return arguments.length ? (d = typeof $ == "function" ? $ : mc($), k) : d;
  }, k.nodeAlign = function($) {
    return arguments.length ? (u = typeof $ == "function" ? $ : mc($), k) : u;
  }, k.nodeSort = function($) {
    return arguments.length ? (h = $, k) : h;
  }, k.nodeWidth = function($) {
    return arguments.length ? (a = +$, k) : a;
  }, k.nodePadding = function($) {
    return arguments.length ? (l = f = +$, k) : l;
  }, k.nodes = function($) {
    return arguments.length ? (v = typeof $ == "function" ? $ : mc($), k) : v;
  }, k.links = function($) {
    return arguments.length ? (b = typeof $ == "function" ? $ : mc($), k) : b;
  }, k.linkSort = function($) {
    return arguments.length ? (y = $, k) : y;
  }, k.size = function($) {
    return arguments.length ? (e = t = 0, r = +$[0], i = +$[1], k) : [r - e, i - t];
  }, k.extent = function($) {
    return arguments.length ? (e = +$[0][0], r = +$[1][0], t = +$[0][1], i = +$[1][1], k) : [[e, t], [r, i]];
  }, k.iterations = function($) {
    return arguments.length ? (P = +$, k) : P;
  };
  function N({ nodes: $, links: ne }) {
    for (const [ie, q] of $.entries())
      q.index = ie, q.sourceLinks = [], q.targetLinks = [];
    const ee = new Map($.map((ie, q) => [d(ie, q, $), ie]));
    for (const [ie, q] of ne.entries()) {
      q.index = ie;
      let { source: j, target: J } = q;
      typeof j != "object" && (j = q.source = vh(ee, j)), typeof J != "object" && (J = q.target = vh(ee, J)), j.sourceLinks.push(q), J.targetLinks.push(q);
    }
    if (y != null)
      for (const { sourceLinks: ie, targetLinks: q } of $)
        ie.sort(y), q.sort(y);
  }
  function R({ nodes: $ }) {
    for (const ne of $)
      ne.value = ne.fixedValue === void 0 ? Math.max(Od(ne.sourceLinks, Nd), Od(ne.targetLinks, Nd)) : ne.fixedValue;
  }
  function m({ nodes: $ }) {
    const ne = $.length;
    let ee = new Set($), ie = /* @__PURE__ */ new Set(), q = 0;
    for (; ee.size; ) {
      for (const j of ee) {
        j.depth = q;
        for (const { target: J } of j.sourceLinks)
          ie.add(J);
      }
      if (++q > ne)
        throw new Error("circular link");
      ee = ie, ie = /* @__PURE__ */ new Set();
    }
  }
  function O({ nodes: $ }) {
    const ne = $.length;
    let ee = new Set($), ie = /* @__PURE__ */ new Set(), q = 0;
    for (; ee.size; ) {
      for (const j of ee) {
        j.height = q;
        for (const { source: J } of j.targetLinks)
          ie.add(J);
      }
      if (++q > ne)
        throw new Error("circular link");
      ee = ie, ie = /* @__PURE__ */ new Set();
    }
  }
  function D({ nodes: $ }) {
    const ne = mh($, (q) => q.depth) + 1, ee = (r - e - a) / (ne - 1), ie = new Array(ne);
    for (const q of $) {
      const j = Math.max(0, Math.min(ne - 1, Math.floor(u.call(null, q, ne))));
      q.layer = j, q.x0 = e + j * ee, q.x1 = q.x0 + a, ie[j] ? ie[j].push(q) : ie[j] = [q];
    }
    if (h)
      for (const q of ie)
        q.sort(h);
    return ie;
  }
  function L($) {
    const ne = gS($, (ee) => (i - t - (ee.length - 1) * f) / Od(ee, Nd));
    for (const ee of $) {
      let ie = t;
      for (const q of ee) {
        q.y0 = ie, q.y1 = ie + q.value * ne, ie = q.y1 + f;
        for (const j of q.sourceLinks)
          j.width = j.value * ne;
      }
      ie = (i - ie + f) / (ee.length + 1);
      for (let q = 0; q < ee.length; ++q) {
        const j = ee[q];
        j.y0 += ie * (q + 1), j.y1 += ie * (q + 1);
      }
      W(ee);
    }
  }
  function _($) {
    const ne = D($);
    f = Math.min(l, (i - t) / (mh(ne, (ee) => ee.length) - 1)), L(ne);
    for (let ee = 0; ee < P; ++ee) {
      const ie = Math.pow(0.99, ee), q = Math.max(1 - ie, (ee + 1) / P);
      V(ne, ie, q), C(ne, ie, q);
    }
  }
  function C($, ne, ee) {
    for (let ie = 1, q = $.length; ie < q; ++ie) {
      const j = $[ie];
      for (const J of j) {
        let oe = 0, De = 0;
        for (const { source: de, value: Ee } of J.targetLinks) {
          let re = Ee * (J.layer - de.layer);
          oe += U(de, J) * re, De += re;
        }
        if (!(De > 0))
          continue;
        let ye = (oe / De - J.y0) * ne;
        J.y0 += ye, J.y1 += ye, Z(J);
      }
      h === void 0 && j.sort(Qc), H(j, ee);
    }
  }
  function V($, ne, ee) {
    for (let ie = $.length, q = ie - 2; q >= 0; --q) {
      const j = $[q];
      for (const J of j) {
        let oe = 0, De = 0;
        for (const { target: de, value: Ee } of J.sourceLinks) {
          let re = Ee * (de.layer - J.layer);
          oe += B(J, de) * re, De += re;
        }
        if (!(De > 0))
          continue;
        let ye = (oe / De - J.y0) * ne;
        J.y0 += ye, J.y1 += ye, Z(J);
      }
      h === void 0 && j.sort(Qc), H(j, ee);
    }
  }
  function H($, ne) {
    const ee = $.length >> 1, ie = $[ee];
    le($, ie.y0 - f, ee - 1, ne), X($, ie.y1 + f, ee + 1, ne), le($, i, $.length - 1, ne), X($, t, 0, ne);
  }
  function X($, ne, ee, ie) {
    for (; ee < $.length; ++ee) {
      const q = $[ee], j = (ne - q.y0) * ie;
      j > 1e-6 && (q.y0 += j, q.y1 += j), ne = q.y1 + f;
    }
  }
  function le($, ne, ee, ie) {
    for (; ee >= 0; --ee) {
      const q = $[ee], j = (q.y1 - ne) * ie;
      j > 1e-6 && (q.y0 -= j, q.y1 -= j), ne = q.y0 - f;
    }
  }
  function Z({ sourceLinks: $, targetLinks: ne }) {
    if (y === void 0) {
      for (const { source: { sourceLinks: ee } } of ne)
        ee.sort(gh);
      for (const { target: { targetLinks: ee } } of $)
        ee.sort(yh);
    }
  }
  function W($) {
    if (y === void 0)
      for (const { sourceLinks: ne, targetLinks: ee } of $)
        ne.sort(gh), ee.sort(yh);
  }
  function U($, ne) {
    let ee = $.y0 - ($.sourceLinks.length - 1) * f / 2;
    for (const { target: ie, width: q } of $.sourceLinks) {
      if (ie === ne)
        break;
      ee += q + f;
    }
    for (const { source: ie, width: q } of ne.targetLinks) {
      if (ie === $)
        break;
      ee -= q;
    }
    return ee;
  }
  function B($, ne) {
    let ee = ne.y0 - (ne.targetLinks.length - 1) * f / 2;
    for (const { source: ie, width: q } of ne.targetLinks) {
      if (ie === $)
        break;
      ee += q + f;
    }
    for (const { target: ie, width: q } of $.sourceLinks) {
      if (ie === ne)
        break;
      ee -= q;
    }
    return ee;
  }
  return k;
}
function RS(e) {
  return [e.source.x1, e.y0];
}
function wS(e) {
  return [e.target.x0, e.y1];
}
function TS() {
  return vb().source(RS).target(wS);
}
var Ba = {}, Ri = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bh;
function CS() {
  if (bh)
    return Ri;
  bh = 1;
  var e = se;
  function t(g) {
    for (var w = "https://reactjs.org/docs/error-decoder.html?invariant=" + g, I = 1; I < arguments.length; I++)
      w += "&args[]=" + encodeURIComponent(arguments[I]);
    return "Minified React error #" + g + "; visit " + w + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, i = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, l = {};
  function f(g) {
    return r.call(l, g) ? !0 : r.call(a, g) ? !1 : i.test(g) ? l[g] = !0 : (a[g] = !0, !1);
  }
  function d(g, w, I, Y, ge, pe, ke) {
    this.acceptsBooleans = w === 2 || w === 3 || w === 4, this.attributeName = Y, this.attributeNamespace = ge, this.mustUseProperty = I, this.propertyName = g, this.type = w, this.sanitizeURL = pe, this.removeEmptyString = ke;
  }
  var u = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(g) {
    u[g] = new d(g, 0, !1, g, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(g) {
    var w = g[0];
    u[w] = new d(w, 1, !1, g[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(g) {
    u[g] = new d(g, 2, !1, g.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(g) {
    u[g] = new d(g, 2, !1, g, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(g) {
    u[g] = new d(g, 3, !1, g.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(g) {
    u[g] = new d(g, 3, !0, g, null, !1, !1);
  }), ["capture", "download"].forEach(function(g) {
    u[g] = new d(g, 4, !1, g, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(g) {
    u[g] = new d(g, 6, !1, g, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(g) {
    u[g] = new d(g, 5, !1, g.toLowerCase(), null, !1, !1);
  });
  var h = /[\-:]([a-z])/g;
  function y(g) {
    return g[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(g) {
    var w = g.replace(
      h,
      y
    );
    u[w] = new d(w, 1, !1, g, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(g) {
    var w = g.replace(h, y);
    u[w] = new d(w, 1, !1, g, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(g) {
    var w = g.replace(h, y);
    u[w] = new d(w, 1, !1, g, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(g) {
    u[g] = new d(g, 1, !1, g.toLowerCase(), null, !1, !1);
  }), u.xlinkHref = new d("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(g) {
    u[g] = new d(g, 1, !1, g.toLowerCase(), null, !0, !0);
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
  }, b = ["Webkit", "ms", "Moz", "O"];
  Object.keys(v).forEach(function(g) {
    b.forEach(function(w) {
      w = w + g.charAt(0).toUpperCase() + g.substring(1), v[w] = v[g];
    });
  });
  var P = /["'&<>]/;
  function k(g) {
    if (typeof g == "boolean" || typeof g == "number")
      return "" + g;
    g = "" + g;
    var w = P.exec(g);
    if (w) {
      var I = "", Y, ge = 0;
      for (Y = w.index; Y < g.length; Y++) {
        switch (g.charCodeAt(Y)) {
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
        ge !== Y && (I += g.substring(ge, Y)), ge = Y + 1, I += w;
      }
      g = ge !== Y ? I + g.substring(ge, Y) : I;
    }
    return g;
  }
  var N = /([A-Z])/g, R = /^ms-/, m = Array.isArray;
  function O(g, w) {
    return { insertionMode: g, selectedValue: w };
  }
  function D(g, w, I) {
    switch (w) {
      case "select":
        return O(1, I.value != null ? I.value : I.defaultValue);
      case "svg":
        return O(2, null);
      case "math":
        return O(3, null);
      case "foreignObject":
        return O(1, null);
      case "table":
        return O(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return O(5, null);
      case "colgroup":
        return O(7, null);
      case "tr":
        return O(6, null);
    }
    return 4 <= g.insertionMode || g.insertionMode === 0 ? O(1, null) : g;
  }
  var L = /* @__PURE__ */ new Map();
  function _(g, w, I) {
    if (typeof I != "object")
      throw Error(t(62));
    w = !0;
    for (var Y in I)
      if (r.call(I, Y)) {
        var ge = I[Y];
        if (ge != null && typeof ge != "boolean" && ge !== "") {
          if (Y.indexOf("--") === 0) {
            var pe = k(Y);
            ge = k(("" + ge).trim());
          } else {
            pe = Y;
            var ke = L.get(pe);
            ke !== void 0 || (ke = k(pe.replace(N, "-$1").toLowerCase().replace(R, "-ms-")), L.set(pe, ke)), pe = ke, ge = typeof ge == "number" ? ge === 0 || r.call(v, Y) ? "" + ge : ge + "px" : k(("" + ge).trim());
          }
          w ? (w = !1, g.push(' style="', pe, ":", ge)) : g.push(";", pe, ":", ge);
        }
      }
    w || g.push('"');
  }
  function C(g, w, I, Y) {
    switch (I) {
      case "style":
        _(g, w, Y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < I.length) || I[0] !== "o" && I[0] !== "O" || I[1] !== "n" && I[1] !== "N") {
      if (w = u.hasOwnProperty(I) ? u[I] : null, w !== null) {
        switch (typeof Y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!w.acceptsBooleans)
              return;
        }
        switch (I = w.attributeName, w.type) {
          case 3:
            Y && g.push(" ", I, '=""');
            break;
          case 4:
            Y === !0 ? g.push(" ", I, '=""') : Y !== !1 && g.push(" ", I, '="', k(Y), '"');
            break;
          case 5:
            isNaN(Y) || g.push(" ", I, '="', k(Y), '"');
            break;
          case 6:
            !isNaN(Y) && 1 <= Y && g.push(" ", I, '="', k(Y), '"');
            break;
          default:
            w.sanitizeURL && (Y = "" + Y), g.push(" ", I, '="', k(Y), '"');
        }
      } else if (f(I)) {
        switch (typeof Y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (w = I.toLowerCase().slice(0, 5), w !== "data-" && w !== "aria-")
              return;
        }
        g.push(" ", I, '="', k(Y), '"');
      }
    }
  }
  function V(g, w, I) {
    if (w != null) {
      if (I != null)
        throw Error(t(60));
      if (typeof w != "object" || !("__html" in w))
        throw Error(t(61));
      w = w.__html, w != null && g.push("" + w);
    }
  }
  function H(g) {
    var w = "";
    return e.Children.forEach(g, function(I) {
      I != null && (w += I);
    }), w;
  }
  function X(g, w, I, Y) {
    g.push(W(I));
    var ge = I = null, pe;
    for (pe in w)
      if (r.call(w, pe)) {
        var ke = w[pe];
        if (ke != null)
          switch (pe) {
            case "children":
              I = ke;
              break;
            case "dangerouslySetInnerHTML":
              ge = ke;
              break;
            default:
              C(g, Y, pe, ke);
          }
      }
    return g.push(">"), V(g, ge, I), typeof I == "string" ? (g.push(k(I)), null) : I;
  }
  var le = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Z = /* @__PURE__ */ new Map();
  function W(g) {
    var w = Z.get(g);
    if (w === void 0) {
      if (!le.test(g))
        throw Error(t(65, g));
      w = "<" + g, Z.set(g, w);
    }
    return w;
  }
  function U(g, w, I, Y, ge) {
    switch (w) {
      case "select":
        g.push(W("select"));
        var pe = null, ke = null;
        for (te in I)
          if (r.call(I, te)) {
            var $e = I[te];
            if ($e != null)
              switch (te) {
                case "children":
                  pe = $e;
                  break;
                case "dangerouslySetInnerHTML":
                  ke = $e;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  C(g, Y, te, $e);
              }
          }
        return g.push(">"), V(g, ke, pe), pe;
      case "option":
        ke = ge.selectedValue, g.push(W("option"));
        var rt = $e = null, ct = null, te = null;
        for (pe in I)
          if (r.call(I, pe)) {
            var ae = I[pe];
            if (ae != null)
              switch (pe) {
                case "children":
                  $e = ae;
                  break;
                case "selected":
                  ct = ae;
                  break;
                case "dangerouslySetInnerHTML":
                  te = ae;
                  break;
                case "value":
                  rt = ae;
                default:
                  C(g, Y, pe, ae);
              }
          }
        if (ke != null)
          if (I = rt !== null ? "" + rt : H($e), m(ke)) {
            for (Y = 0; Y < ke.length; Y++)
              if ("" + ke[Y] === I) {
                g.push(' selected=""');
                break;
              }
          } else
            "" + ke === I && g.push(' selected=""');
        else
          ct && g.push(' selected=""');
        return g.push(">"), V(g, te, $e), $e;
      case "textarea":
        g.push(W("textarea")), te = ke = pe = null;
        for ($e in I)
          if (r.call(I, $e) && (rt = I[$e], rt != null))
            switch ($e) {
              case "children":
                te = rt;
                break;
              case "value":
                pe = rt;
                break;
              case "defaultValue":
                ke = rt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                C(
                  g,
                  Y,
                  $e,
                  rt
                );
            }
        if (pe === null && ke !== null && (pe = ke), g.push(">"), te != null) {
          if (pe != null)
            throw Error(t(92));
          if (m(te) && 1 < te.length)
            throw Error(t(93));
          pe = "" + te;
        }
        return typeof pe == "string" && pe[0] === `
` && g.push(`
`), pe !== null && g.push(k("" + pe)), null;
      case "input":
        g.push(W("input")), rt = te = $e = pe = null;
        for (ke in I)
          if (r.call(I, ke) && (ct = I[ke], ct != null))
            switch (ke) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                rt = ct;
                break;
              case "defaultValue":
                $e = ct;
                break;
              case "checked":
                te = ct;
                break;
              case "value":
                pe = ct;
                break;
              default:
                C(g, Y, ke, ct);
            }
        return te !== null ? C(g, Y, "checked", te) : rt !== null && C(g, Y, "checked", rt), pe !== null ? C(g, Y, "value", pe) : $e !== null && C(g, Y, "value", $e), g.push("/>"), null;
      case "menuitem":
        g.push(W("menuitem"));
        for (var ue in I)
          if (r.call(I, ue) && (pe = I[ue], pe != null))
            switch (ue) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                C(g, Y, ue, pe);
            }
        return g.push(">"), null;
      case "title":
        g.push(W("title")), pe = null;
        for (ae in I)
          if (r.call(I, ae) && (ke = I[ae], ke != null))
            switch (ae) {
              case "children":
                pe = ke;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                C(g, Y, ae, ke);
            }
        return g.push(">"), pe;
      case "listing":
      case "pre":
        g.push(W(w)), ke = pe = null;
        for (rt in I)
          if (r.call(I, rt) && ($e = I[rt], $e != null))
            switch (rt) {
              case "children":
                pe = $e;
                break;
              case "dangerouslySetInnerHTML":
                ke = $e;
                break;
              default:
                C(g, Y, rt, $e);
            }
        if (g.push(">"), ke != null) {
          if (pe != null)
            throw Error(t(60));
          if (typeof ke != "object" || !("__html" in ke))
            throw Error(t(61));
          I = ke.__html, I != null && (typeof I == "string" && 0 < I.length && I[0] === `
` ? g.push(`
`, I) : g.push("" + I));
        }
        return typeof pe == "string" && pe[0] === `
` && g.push(`
`), pe;
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
        g.push(W(w));
        for (var Re in I)
          if (r.call(I, Re) && (pe = I[Re], pe != null))
            switch (Re) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, w));
              default:
                C(g, Y, Re, pe);
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
          I,
          w,
          Y
        );
      case "html":
        return ge.insertionMode === 0 && g.push("<!DOCTYPE html>"), X(g, I, w, Y);
      default:
        if (w.indexOf("-") === -1 && typeof I.is != "string")
          return X(g, I, w, Y);
        g.push(W(w)), ke = pe = null;
        for (ct in I)
          if (r.call(I, ct) && ($e = I[ct], $e != null))
            switch (ct) {
              case "children":
                pe = $e;
                break;
              case "dangerouslySetInnerHTML":
                ke = $e;
                break;
              case "style":
                _(g, Y, $e);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                f(ct) && typeof $e != "function" && typeof $e != "symbol" && g.push(" ", ct, '="', k($e), '"');
            }
        return g.push(">"), V(g, ke, pe), pe;
    }
  }
  function B(g, w, I) {
    if (g.push('<!--$?--><template id="'), I === null)
      throw Error(t(395));
    return g.push(I), g.push('"></template>');
  }
  function $(g, w, I, Y) {
    switch (I.insertionMode) {
      case 0:
      case 1:
        return g.push('<div hidden id="'), g.push(w.segmentPrefix), w = Y.toString(16), g.push(w), g.push('">');
      case 2:
        return g.push('<svg aria-hidden="true" style="display:none" id="'), g.push(w.segmentPrefix), w = Y.toString(16), g.push(w), g.push('">');
      case 3:
        return g.push('<math aria-hidden="true" style="display:none" id="'), g.push(w.segmentPrefix), w = Y.toString(16), g.push(w), g.push('">');
      case 4:
        return g.push('<table hidden id="'), g.push(w.segmentPrefix), w = Y.toString(16), g.push(w), g.push('">');
      case 5:
        return g.push('<table hidden><tbody id="'), g.push(w.segmentPrefix), w = Y.toString(16), g.push(w), g.push('">');
      case 6:
        return g.push('<table hidden><tr id="'), g.push(w.segmentPrefix), w = Y.toString(16), g.push(w), g.push('">');
      case 7:
        return g.push('<table hidden><colgroup id="'), g.push(w.segmentPrefix), w = Y.toString(16), g.push(w), g.push('">');
      default:
        throw Error(t(397));
    }
  }
  function ne(g, w) {
    switch (w.insertionMode) {
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
  var ee = /[<\u2028\u2029]/g;
  function ie(g) {
    return JSON.stringify(g).replace(ee, function(w) {
      switch (w) {
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
  function q(g, w) {
    return w = w === void 0 ? "" : w, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: w + "P:", segmentPrefix: w + "S:", boundaryPrefix: w + "B:", idPrefix: w, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: g };
  }
  function j(g, w, I, Y) {
    return I.generateStaticMarkup ? (g.push(k(w)), !1) : (w === "" ? g = Y : (Y && g.push("<!-- -->"), g.push(k(w)), g = !0), g);
  }
  var J = Object.assign, oe = Symbol.for("react.element"), De = Symbol.for("react.portal"), ye = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), Ee = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), Oe = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), Se = Symbol.for("react.scope"), je = Symbol.for("react.debug_trace_mode"), Ke = Symbol.for("react.legacy_hidden"), Ge = Symbol.for("react.default_value"), Be = Symbol.iterator;
  function yt(g) {
    if (g == null)
      return null;
    if (typeof g == "function")
      return g.displayName || g.name || null;
    if (typeof g == "string")
      return g;
    switch (g) {
      case ye:
        return "Fragment";
      case De:
        return "Portal";
      case Ee:
        return "Profiler";
      case de:
        return "StrictMode";
      case ce:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof g == "object")
      switch (g.$$typeof) {
        case Oe:
          return (g.displayName || "Context") + ".Consumer";
        case re:
          return (g._context.displayName || "Context") + ".Provider";
        case ve:
          var w = g.render;
          return g = g.displayName, g || (g = w.displayName || w.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
        case G:
          return w = g.displayName || null, w !== null ? w : yt(g.type) || "Memo";
        case Pe:
          w = g._payload, g = g._init;
          try {
            return yt(g(w));
          } catch {
          }
      }
    return null;
  }
  var He = {};
  function ze(g, w) {
    if (g = g.contextTypes, !g)
      return He;
    var I = {}, Y;
    for (Y in g)
      I[Y] = w[Y];
    return I;
  }
  var Fe = null;
  function Ne(g, w) {
    if (g !== w) {
      g.context._currentValue2 = g.parentValue, g = g.parent;
      var I = w.parent;
      if (g === null) {
        if (I !== null)
          throw Error(t(401));
      } else {
        if (I === null)
          throw Error(t(401));
        Ne(g, I);
      }
      w.context._currentValue2 = w.value;
    }
  }
  function ot(g) {
    g.context._currentValue2 = g.parentValue, g = g.parent, g !== null && ot(g);
  }
  function Ue(g) {
    var w = g.parent;
    w !== null && Ue(w), g.context._currentValue2 = g.value;
  }
  function et(g, w) {
    if (g.context._currentValue2 = g.parentValue, g = g.parent, g === null)
      throw Error(t(402));
    g.depth === w.depth ? Ne(g, w) : et(g, w);
  }
  function ut(g, w) {
    var I = w.parent;
    if (I === null)
      throw Error(t(402));
    g.depth === I.depth ? Ne(g, I) : ut(g, I), w.context._currentValue2 = w.value;
  }
  function st(g) {
    var w = Fe;
    w !== g && (w === null ? Ue(g) : g === null ? ot(w) : w.depth === g.depth ? Ne(w, g) : w.depth > g.depth ? et(w, g) : ut(w, g), Fe = g);
  }
  var Ct = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(g, w) {
    g = g._reactInternals, g.queue !== null && g.queue.push(w);
  }, enqueueReplaceState: function(g, w) {
    g = g._reactInternals, g.replace = !0, g.queue = [w];
  }, enqueueForceUpdate: function() {
  } };
  function Gt(g, w, I, Y) {
    var ge = g.state !== void 0 ? g.state : null;
    g.updater = Ct, g.props = I, g.state = ge;
    var pe = { queue: [], replace: !1 };
    g._reactInternals = pe;
    var ke = w.contextType;
    if (g.context = typeof ke == "object" && ke !== null ? ke._currentValue2 : Y, ke = w.getDerivedStateFromProps, typeof ke == "function" && (ke = ke(I, ge), ge = ke == null ? ge : J({}, ge, ke), g.state = ge), typeof w.getDerivedStateFromProps != "function" && typeof g.getSnapshotBeforeUpdate != "function" && (typeof g.UNSAFE_componentWillMount == "function" || typeof g.componentWillMount == "function"))
      if (w = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), w !== g.state && Ct.enqueueReplaceState(g, g.state, null), pe.queue !== null && 0 < pe.queue.length)
        if (w = pe.queue, ke = pe.replace, pe.queue = null, pe.replace = !1, ke && w.length === 1)
          g.state = w[0];
        else {
          for (pe = ke ? w[0] : g.state, ge = !0, ke = ke ? 1 : 0; ke < w.length; ke++) {
            var $e = w[ke];
            $e = typeof $e == "function" ? $e.call(g, pe, I, Y) : $e, $e != null && (ge ? (ge = !1, pe = J({}, pe, $e)) : J(pe, $e));
          }
          g.state = pe;
        }
      else
        pe.queue = null;
  }
  var Wt = { id: 1, overflow: "" };
  function dt(g, w, I) {
    var Y = g.id;
    g = g.overflow;
    var ge = 32 - Rt(Y) - 1;
    Y &= ~(1 << ge), I += 1;
    var pe = 32 - Rt(w) + ge;
    if (30 < pe) {
      var ke = ge - ge % 5;
      return pe = (Y & (1 << ke) - 1).toString(32), Y >>= ke, ge -= ke, { id: 1 << 32 - Rt(w) + ge | I << ge | Y, overflow: pe + g };
    }
    return { id: 1 << pe | I << ge | Y, overflow: g };
  }
  var Rt = Math.clz32 ? Math.clz32 : jt, cn = Math.log, Jt = Math.LN2;
  function jt(g) {
    return g >>>= 0, g === 0 ? 32 : 31 - (cn(g) / Jt | 0) | 0;
  }
  function fn(g, w) {
    return g === w && (g !== 0 || 1 / g === 1 / w) || g !== g && w !== w;
  }
  var Le = typeof Object.is == "function" ? Object.is : fn, ft = null, $t = null, Dt = null, St = null, hn = !1, Lt = !1, en = 0, an = null, Sn = 0;
  function Ut() {
    if (ft === null)
      throw Error(t(321));
    return ft;
  }
  function Kt() {
    if (0 < Sn)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Tn() {
    return St === null ? Dt === null ? (hn = !1, Dt = St = Kt()) : (hn = !0, St = Dt) : St.next === null ? (hn = !1, St = St.next = Kt()) : (hn = !0, St = St.next), St;
  }
  function _n() {
    $t = ft = null, Lt = !1, Dt = null, Sn = 0, St = an = null;
  }
  function Mn(g, w) {
    return typeof w == "function" ? w(g) : w;
  }
  function Bt(g, w, I) {
    if (ft = Ut(), St = Tn(), hn) {
      var Y = St.queue;
      if (w = Y.dispatch, an !== null && (I = an.get(Y), I !== void 0)) {
        an.delete(Y), Y = St.memoizedState;
        do
          Y = g(Y, I.action), I = I.next;
        while (I !== null);
        return St.memoizedState = Y, [Y, w];
      }
      return [St.memoizedState, w];
    }
    return g = g === Mn ? typeof w == "function" ? w() : w : I !== void 0 ? I(w) : w, St.memoizedState = g, g = St.queue = { last: null, dispatch: null }, g = g.dispatch = zn.bind(null, ft, g), [St.memoizedState, g];
  }
  function On(g, w) {
    if (ft = Ut(), St = Tn(), w = w === void 0 ? null : w, St !== null) {
      var I = St.memoizedState;
      if (I !== null && w !== null) {
        var Y = I[1];
        e:
          if (Y === null)
            Y = !1;
          else {
            for (var ge = 0; ge < Y.length && ge < w.length; ge++)
              if (!Le(w[ge], Y[ge])) {
                Y = !1;
                break e;
              }
            Y = !0;
          }
        if (Y)
          return I[0];
      }
    }
    return g = g(), St.memoizedState = [g, w], g;
  }
  function zn(g, w, I) {
    if (25 <= Sn)
      throw Error(t(301));
    if (g === ft)
      if (Lt = !0, g = { action: I, next: null }, an === null && (an = /* @__PURE__ */ new Map()), I = an.get(w), I === void 0)
        an.set(w, g);
      else {
        for (w = I; w.next !== null; )
          w = w.next;
        w.next = g;
      }
  }
  function kn() {
    throw Error(t(394));
  }
  function xn() {
  }
  var we = { readContext: function(g) {
    return g._currentValue2;
  }, useContext: function(g) {
    return Ut(), g._currentValue2;
  }, useMemo: On, useReducer: Bt, useRef: function(g) {
    ft = Ut(), St = Tn();
    var w = St.memoizedState;
    return w === null ? (g = { current: g }, St.memoizedState = g) : w;
  }, useState: function(g) {
    return Bt(Mn, g);
  }, useInsertionEffect: xn, useLayoutEffect: function() {
  }, useCallback: function(g, w) {
    return On(function() {
      return g;
    }, w);
  }, useImperativeHandle: xn, useEffect: xn, useDebugValue: xn, useDeferredValue: function(g) {
    return Ut(), g;
  }, useTransition: function() {
    return Ut(), [
      !1,
      kn
    ];
  }, useId: function() {
    var g = $t.treeContext, w = g.overflow;
    g = g.id, g = (g & ~(1 << 32 - Rt(g) - 1)).toString(32) + w;
    var I = at;
    if (I === null)
      throw Error(t(404));
    return w = en++, g = ":" + I.idPrefix + "R" + g, 0 < w && (g += "H" + w.toString(32)), g + ":";
  }, useMutableSource: function(g, w) {
    return Ut(), w(g._source);
  }, useSyncExternalStore: function(g, w, I) {
    if (I === void 0)
      throw Error(t(407));
    return I();
  } }, at = null, tt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function z(g) {
    return console.error(g), null;
  }
  function Te() {
  }
  function We(g, w, I, Y, ge, pe, ke, $e, rt) {
    var ct = [], te = /* @__PURE__ */ new Set();
    return w = { destination: null, responseState: w, progressiveChunkSize: Y === void 0 ? 12800 : Y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: te, pingedTasks: ct, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: ge === void 0 ? z : ge, onAllReady: Te, onShellReady: ke === void 0 ? Te : ke, onShellError: Te, onFatalError: Te }, I = Qe(w, 0, null, I, !1, !1), I.parentFlushed = !0, g = Me(w, g, null, I, te, He, null, Wt), ct.push(g), w;
  }
  function Me(g, w, I, Y, ge, pe, ke, $e) {
    g.allPendingTasks++, I === null ? g.pendingRootTasks++ : I.pendingTasks++;
    var rt = { node: w, ping: function() {
      var ct = g.pingedTasks;
      ct.push(rt), ct.length === 1 && tn(g);
    }, blockedBoundary: I, blockedSegment: Y, abortSet: ge, legacyContext: pe, context: ke, treeContext: $e };
    return ge.add(rt), rt;
  }
  function Qe(g, w, I, Y, ge, pe) {
    return { status: 0, id: -1, index: w, parentFlushed: !1, chunks: [], children: [], formatContext: Y, boundary: I, lastPushedText: ge, textEmbedded: pe };
  }
  function Ze(g, w) {
    if (g = g.onError(w), g != null && typeof g != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof g + '" instead');
    return g;
  }
  function mt(g, w) {
    var I = g.onShellError;
    I(w), I = g.onFatalError, I(w), g.destination !== null ? (g.status = 2, g.destination.destroy(w)) : (g.status = 1, g.fatalError = w);
  }
  function xt(g, w, I, Y, ge) {
    for (ft = {}, $t = w, en = 0, g = I(Y, ge); Lt; )
      Lt = !1, en = 0, Sn += 1, St = null, g = I(Y, ge);
    return _n(), g;
  }
  function Ye(g, w, I, Y) {
    var ge = I.render(), pe = Y.childContextTypes;
    if (pe != null) {
      var ke = w.legacyContext;
      if (typeof I.getChildContext != "function")
        Y = ke;
      else {
        I = I.getChildContext();
        for (var $e in I)
          if (!($e in pe))
            throw Error(t(108, yt(Y) || "Unknown", $e));
        Y = J({}, ke, I);
      }
      w.legacyContext = Y, Pt(g, w, ge), w.legacyContext = ke;
    } else
      Pt(g, w, ge);
  }
  function Yt(g, w) {
    if (g && g.defaultProps) {
      w = J({}, w), g = g.defaultProps;
      for (var I in g)
        w[I] === void 0 && (w[I] = g[I]);
      return w;
    }
    return w;
  }
  function Mt(g, w, I, Y, ge) {
    if (typeof I == "function")
      if (I.prototype && I.prototype.isReactComponent) {
        ge = ze(I, w.legacyContext);
        var pe = I.contextType;
        pe = new I(Y, typeof pe == "object" && pe !== null ? pe._currentValue2 : ge), Gt(pe, I, Y, ge), Ye(g, w, pe, I);
      } else {
        pe = ze(I, w.legacyContext), ge = xt(g, w, I, Y, pe);
        var ke = en !== 0;
        if (typeof ge == "object" && ge !== null && typeof ge.render == "function" && ge.$$typeof === void 0)
          Gt(ge, I, Y, pe), Ye(g, w, ge, I);
        else if (ke) {
          Y = w.treeContext, w.treeContext = dt(Y, 1, 0);
          try {
            Pt(g, w, ge);
          } finally {
            w.treeContext = Y;
          }
        } else
          Pt(g, w, ge);
      }
    else if (typeof I == "string") {
      switch (ge = w.blockedSegment, pe = U(ge.chunks, I, Y, g.responseState, ge.formatContext), ge.lastPushedText = !1, ke = ge.formatContext, ge.formatContext = D(ke, I, Y), wt(g, w, pe), ge.formatContext = ke, I) {
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
          ge.chunks.push("</", I, ">");
      }
      ge.lastPushedText = !1;
    } else {
      switch (I) {
        case Ke:
        case je:
        case de:
        case Ee:
        case ye:
          Pt(g, w, Y.children);
          return;
        case be:
          Pt(g, w, Y.children);
          return;
        case Se:
          throw Error(t(343));
        case ce:
          e: {
            I = w.blockedBoundary, ge = w.blockedSegment, pe = Y.fallback, Y = Y.children, ke = /* @__PURE__ */ new Set();
            var $e = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: ke, errorDigest: null }, rt = Qe(g, ge.chunks.length, $e, ge.formatContext, !1, !1);
            ge.children.push(rt), ge.lastPushedText = !1;
            var ct = Qe(g, 0, null, ge.formatContext, !1, !1);
            ct.parentFlushed = !0, w.blockedBoundary = $e, w.blockedSegment = ct;
            try {
              if (wt(
                g,
                w,
                Y
              ), g.responseState.generateStaticMarkup || ct.lastPushedText && ct.textEmbedded && ct.chunks.push("<!-- -->"), ct.status = 1, Ot($e, ct), $e.pendingTasks === 0)
                break e;
            } catch (te) {
              ct.status = 4, $e.forceClientRender = !0, $e.errorDigest = Ze(g, te);
            } finally {
              w.blockedBoundary = I, w.blockedSegment = ge;
            }
            w = Me(g, pe, I, rt, ke, w.legacyContext, w.context, w.treeContext), g.pingedTasks.push(w);
          }
          return;
      }
      if (typeof I == "object" && I !== null)
        switch (I.$$typeof) {
          case ve:
            if (Y = xt(g, w, I.render, Y, ge), en !== 0) {
              I = w.treeContext, w.treeContext = dt(I, 1, 0);
              try {
                Pt(g, w, Y);
              } finally {
                w.treeContext = I;
              }
            } else
              Pt(g, w, Y);
            return;
          case G:
            I = I.type, Y = Yt(I, Y), Mt(g, w, I, Y, ge);
            return;
          case re:
            if (ge = Y.children, I = I._context, Y = Y.value, pe = I._currentValue2, I._currentValue2 = Y, ke = Fe, Fe = Y = { parent: ke, depth: ke === null ? 0 : ke.depth + 1, context: I, parentValue: pe, value: Y }, w.context = Y, Pt(g, w, ge), g = Fe, g === null)
              throw Error(t(403));
            Y = g.parentValue, g.context._currentValue2 = Y === Ge ? g.context._defaultValue : Y, g = Fe = g.parent, w.context = g;
            return;
          case Oe:
            Y = Y.children, Y = Y(I._currentValue2), Pt(g, w, Y);
            return;
          case Pe:
            ge = I._init, I = ge(I._payload), Y = Yt(I, Y), Mt(
              g,
              w,
              I,
              Y,
              void 0
            );
            return;
        }
      throw Error(t(130, I == null ? I : typeof I, ""));
    }
  }
  function Pt(g, w, I) {
    if (w.node = I, typeof I == "object" && I !== null) {
      switch (I.$$typeof) {
        case oe:
          Mt(g, w, I.type, I.props, I.ref);
          return;
        case De:
          throw Error(t(257));
        case Pe:
          var Y = I._init;
          I = Y(I._payload), Pt(g, w, I);
          return;
      }
      if (m(I)) {
        lt(g, w, I);
        return;
      }
      if (I === null || typeof I != "object" ? Y = null : (Y = Be && I[Be] || I["@@iterator"], Y = typeof Y == "function" ? Y : null), Y && (Y = Y.call(I))) {
        if (I = Y.next(), !I.done) {
          var ge = [];
          do
            ge.push(I.value), I = Y.next();
          while (!I.done);
          lt(g, w, ge);
        }
        return;
      }
      throw g = Object.prototype.toString.call(I), Error(t(31, g === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : g));
    }
    typeof I == "string" ? (Y = w.blockedSegment, Y.lastPushedText = j(w.blockedSegment.chunks, I, g.responseState, Y.lastPushedText)) : typeof I == "number" && (Y = w.blockedSegment, Y.lastPushedText = j(w.blockedSegment.chunks, "" + I, g.responseState, Y.lastPushedText));
  }
  function lt(g, w, I) {
    for (var Y = I.length, ge = 0; ge < Y; ge++) {
      var pe = w.treeContext;
      w.treeContext = dt(pe, Y, ge);
      try {
        wt(g, w, I[ge]);
      } finally {
        w.treeContext = pe;
      }
    }
  }
  function wt(g, w, I) {
    var Y = w.blockedSegment.formatContext, ge = w.legacyContext, pe = w.context;
    try {
      return Pt(g, w, I);
    } catch (rt) {
      if (_n(), typeof rt == "object" && rt !== null && typeof rt.then == "function") {
        I = rt;
        var ke = w.blockedSegment, $e = Qe(g, ke.chunks.length, null, ke.formatContext, ke.lastPushedText, !0);
        ke.children.push($e), ke.lastPushedText = !1, g = Me(g, w.node, w.blockedBoundary, $e, w.abortSet, w.legacyContext, w.context, w.treeContext).ping, I.then(g, g), w.blockedSegment.formatContext = Y, w.legacyContext = ge, w.context = pe, st(pe);
      } else
        throw w.blockedSegment.formatContext = Y, w.legacyContext = ge, w.context = pe, st(pe), rt;
    }
  }
  function At(g) {
    var w = g.blockedBoundary;
    g = g.blockedSegment, g.status = 3, on(this, w, g);
  }
  function Ht(g, w, I) {
    var Y = g.blockedBoundary;
    g.blockedSegment.status = 3, Y === null ? (w.allPendingTasks--, w.status !== 2 && (w.status = 2, w.destination !== null && w.destination.push(null))) : (Y.pendingTasks--, Y.forceClientRender || (Y.forceClientRender = !0, g = I === void 0 ? Error(t(432)) : I, Y.errorDigest = w.onError(g), Y.parentFlushed && w.clientRenderedBoundaries.push(Y)), Y.fallbackAbortableTasks.forEach(function(ge) {
      return Ht(ge, w, I);
    }), Y.fallbackAbortableTasks.clear(), w.allPendingTasks--, w.allPendingTasks === 0 && (Y = w.onAllReady, Y()));
  }
  function Ot(g, w) {
    if (w.chunks.length === 0 && w.children.length === 1 && w.children[0].boundary === null) {
      var I = w.children[0];
      I.id = w.id, I.parentFlushed = !0, I.status === 1 && Ot(g, I);
    } else
      g.completedSegments.push(w);
  }
  function on(g, w, I) {
    if (w === null) {
      if (I.parentFlushed) {
        if (g.completedRootSegment !== null)
          throw Error(t(389));
        g.completedRootSegment = I;
      }
      g.pendingRootTasks--, g.pendingRootTasks === 0 && (g.onShellError = Te, w = g.onShellReady, w());
    } else
      w.pendingTasks--, w.forceClientRender || (w.pendingTasks === 0 ? (I.parentFlushed && I.status === 1 && Ot(w, I), w.parentFlushed && g.completedBoundaries.push(w), w.fallbackAbortableTasks.forEach(At, g), w.fallbackAbortableTasks.clear()) : I.parentFlushed && I.status === 1 && (Ot(w, I), w.completedSegments.length === 1 && w.parentFlushed && g.partialBoundaries.push(w)));
    g.allPendingTasks--, g.allPendingTasks === 0 && (g = g.onAllReady, g());
  }
  function tn(g) {
    if (g.status !== 2) {
      var w = Fe, I = tt.current;
      tt.current = we;
      var Y = at;
      at = g.responseState;
      try {
        var ge = g.pingedTasks, pe;
        for (pe = 0; pe < ge.length; pe++) {
          var ke = ge[pe], $e = g, rt = ke.blockedSegment;
          if (rt.status === 0) {
            st(ke.context);
            try {
              Pt($e, ke, ke.node), $e.responseState.generateStaticMarkup || rt.lastPushedText && rt.textEmbedded && rt.chunks.push("<!-- -->"), ke.abortSet.delete(ke), rt.status = 1, on($e, ke.blockedBoundary, rt);
            } catch (ht) {
              if (_n(), typeof ht == "object" && ht !== null && typeof ht.then == "function") {
                var ct = ke.ping;
                ht.then(ct, ct);
              } else {
                ke.abortSet.delete(ke), rt.status = 4;
                var te = ke.blockedBoundary, ae = ht, ue = Ze($e, ae);
                if (te === null ? mt($e, ae) : (te.pendingTasks--, te.forceClientRender || (te.forceClientRender = !0, te.errorDigest = ue, te.parentFlushed && $e.clientRenderedBoundaries.push(te))), $e.allPendingTasks--, $e.allPendingTasks === 0) {
                  var Re = $e.onAllReady;
                  Re();
                }
              }
            } finally {
            }
          }
        }
        ge.splice(0, pe), g.destination !== null && yn(g, g.destination);
      } catch (ht) {
        Ze(g, ht), mt(g, ht);
      } finally {
        at = Y, tt.current = I, I === we && st(w);
      }
    }
  }
  function nn(g, w, I) {
    switch (I.parentFlushed = !0, I.status) {
      case 0:
        var Y = I.id = g.nextSegmentId++;
        return I.lastPushedText = !1, I.textEmbedded = !1, g = g.responseState, w.push('<template id="'), w.push(g.placeholderPrefix), g = Y.toString(16), w.push(g), w.push('"></template>');
      case 1:
        I.status = 2;
        var ge = !0;
        Y = I.chunks;
        var pe = 0;
        I = I.children;
        for (var ke = 0; ke < I.length; ke++) {
          for (ge = I[ke]; pe < ge.index; pe++)
            w.push(Y[pe]);
          ge = Xt(g, w, ge);
        }
        for (; pe < Y.length - 1; pe++)
          w.push(Y[pe]);
        return pe < Y.length && (ge = w.push(Y[pe])), ge;
      default:
        throw Error(t(390));
    }
  }
  function Xt(g, w, I) {
    var Y = I.boundary;
    if (Y === null)
      return nn(g, w, I);
    if (Y.parentFlushed = !0, Y.forceClientRender)
      return g.responseState.generateStaticMarkup || (Y = Y.errorDigest, w.push("<!--$!-->"), w.push("<template"), Y && (w.push(' data-dgst="'), Y = k(Y), w.push(Y), w.push('"')), w.push("></template>")), nn(g, w, I), g = g.responseState.generateStaticMarkup ? !0 : w.push("<!--/$-->"), g;
    if (0 < Y.pendingTasks) {
      Y.rootSegmentID = g.nextSegmentId++, 0 < Y.completedSegments.length && g.partialBoundaries.push(Y);
      var ge = g.responseState, pe = ge.nextSuspenseID++;
      return ge = ge.boundaryPrefix + pe.toString(16), Y = Y.id = ge, B(w, g.responseState, Y), nn(g, w, I), w.push("<!--/$-->");
    }
    if (Y.byteSize > g.progressiveChunkSize)
      return Y.rootSegmentID = g.nextSegmentId++, g.completedBoundaries.push(Y), B(w, g.responseState, Y.id), nn(g, w, I), w.push("<!--/$-->");
    if (g.responseState.generateStaticMarkup || w.push("<!--$-->"), I = Y.completedSegments, I.length !== 1)
      throw Error(t(391));
    return Xt(g, w, I[0]), g = g.responseState.generateStaticMarkup ? !0 : w.push("<!--/$-->"), g;
  }
  function mn(g, w, I) {
    return $(w, g.responseState, I.formatContext, I.id), Xt(g, w, I), ne(w, I.formatContext);
  }
  function Nt(g, w, I) {
    for (var Y = I.completedSegments, ge = 0; ge < Y.length; ge++)
      ln(g, w, I, Y[ge]);
    if (Y.length = 0, g = g.responseState, Y = I.id, I = I.rootSegmentID, w.push(g.startInlineScript), g.sentCompleteBoundaryFunction ? w.push('$RC("') : (g.sentCompleteBoundaryFunction = !0, w.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), Y === null)
      throw Error(t(395));
    return I = I.toString(16), w.push(Y), w.push('","'), w.push(g.segmentPrefix), w.push(I), w.push('")<\/script>');
  }
  function ln(g, w, I, Y) {
    if (Y.status === 2)
      return !0;
    var ge = Y.id;
    if (ge === -1) {
      if ((Y.id = I.rootSegmentID) === -1)
        throw Error(t(392));
      return mn(g, w, Y);
    }
    return mn(g, w, Y), g = g.responseState, w.push(g.startInlineScript), g.sentCompleteSegmentFunction ? w.push('$RS("') : (g.sentCompleteSegmentFunction = !0, w.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), w.push(g.segmentPrefix), ge = ge.toString(16), w.push(ge), w.push('","'), w.push(g.placeholderPrefix), w.push(ge), w.push('")<\/script>');
  }
  function yn(g, w) {
    try {
      var I = g.completedRootSegment;
      if (I !== null && g.pendingRootTasks === 0) {
        Xt(g, w, I), g.completedRootSegment = null;
        var Y = g.responseState.bootstrapChunks;
        for (I = 0; I < Y.length - 1; I++)
          w.push(Y[I]);
        I < Y.length && w.push(Y[I]);
      }
      var ge = g.clientRenderedBoundaries, pe;
      for (pe = 0; pe < ge.length; pe++) {
        var ke = ge[pe];
        Y = w;
        var $e = g.responseState, rt = ke.id, ct = ke.errorDigest, te = ke.errorMessage, ae = ke.errorComponentStack;
        if (Y.push($e.startInlineScript), $e.sentClientRenderFunction ? Y.push('$RX("') : ($e.sentClientRenderFunction = !0, Y.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), rt === null)
          throw Error(t(395));
        if (Y.push(rt), Y.push('"'), ct || te || ae) {
          Y.push(",");
          var ue = ie(ct || "");
          Y.push(ue);
        }
        if (te || ae) {
          Y.push(",");
          var Re = ie(te || "");
          Y.push(Re);
        }
        if (ae) {
          Y.push(",");
          var ht = ie(ae);
          Y.push(ht);
        }
        if (!Y.push(")<\/script>")) {
          g.destination = null, pe++, ge.splice(0, pe);
          return;
        }
      }
      ge.splice(0, pe);
      var gn = g.completedBoundaries;
      for (pe = 0; pe < gn.length; pe++)
        if (!Nt(g, w, gn[pe])) {
          g.destination = null, pe++, gn.splice(0, pe);
          return;
        }
      gn.splice(0, pe);
      var Rn = g.partialBoundaries;
      for (pe = 0; pe < Rn.length; pe++) {
        var ar = Rn[pe];
        e: {
          ge = g, ke = w;
          var Nn = ar.completedSegments;
          for ($e = 0; $e < Nn.length; $e++)
            if (!ln(ge, ke, ar, Nn[$e])) {
              $e++, Nn.splice(0, $e);
              var mr = !1;
              break e;
            }
          Nn.splice(0, $e), mr = !0;
        }
        if (!mr) {
          g.destination = null, pe++, Rn.splice(0, pe);
          return;
        }
      }
      Rn.splice(0, pe);
      var ir = g.completedBoundaries;
      for (pe = 0; pe < ir.length; pe++)
        if (!Nt(g, w, ir[pe])) {
          g.destination = null, pe++, ir.splice(0, pe);
          return;
        }
      ir.splice(0, pe);
    } finally {
      g.allPendingTasks === 0 && g.pingedTasks.length === 0 && g.clientRenderedBoundaries.length === 0 && g.completedBoundaries.length === 0 && w.push(null);
    }
  }
  function In(g, w) {
    try {
      var I = g.abortableTasks;
      I.forEach(function(Y) {
        return Ht(Y, g, w);
      }), I.clear(), g.destination !== null && yn(g, g.destination);
    } catch (Y) {
      Ze(g, Y), mt(g, Y);
    }
  }
  function un() {
  }
  function bn(g, w, I, Y) {
    var ge = !1, pe = null, ke = "", $e = { push: function(ct) {
      return ct !== null && (ke += ct), !0;
    }, destroy: function(ct) {
      ge = !0, pe = ct;
    } }, rt = !1;
    if (g = We(g, q(I, w ? w.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, un, void 0, function() {
      rt = !0;
    }), tn(g), In(g, Y), g.status === 1)
      g.status = 2, $e.destroy(g.fatalError);
    else if (g.status !== 2 && g.destination === null) {
      g.destination = $e;
      try {
        yn(g, $e);
      } catch (ct) {
        Ze(g, ct), mt(g, ct);
      }
    }
    if (ge)
      throw pe;
    if (!rt)
      throw Error(t(426));
    return ke;
  }
  return Ri.renderToNodeStream = function() {
    throw Error(t(207));
  }, Ri.renderToStaticMarkup = function(g, w) {
    return bn(g, w, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ri.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Ri.renderToString = function(g, w) {
    return bn(g, w, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ri.version = "18.2.0", Ri;
}
var yc = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sh;
function AS() {
  if (Sh)
    return yc;
  Sh = 1;
  var e = se;
  function t(x) {
    for (var T = "https://reactjs.org/docs/error-decoder.html?invariant=" + x, F = 1; F < arguments.length; F++)
      T += "&args[]=" + encodeURIComponent(arguments[F]);
    return "Minified React error #" + x + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, i = 0;
  function a(x, T) {
    if (T.length !== 0)
      if (512 < T.length)
        0 < i && (x.enqueue(new Uint8Array(r.buffer, 0, i)), r = new Uint8Array(512), i = 0), x.enqueue(T);
      else {
        var F = r.length - i;
        F < T.length && (F === 0 ? x.enqueue(r) : (r.set(T.subarray(0, F), i), x.enqueue(r), T = T.subarray(F)), r = new Uint8Array(512), i = 0), r.set(T, i), i += T.length;
      }
  }
  function l(x, T) {
    return a(x, T), !0;
  }
  function f(x) {
    r && 0 < i && (x.enqueue(new Uint8Array(r.buffer, 0, i)), r = null, i = 0);
  }
  var d = new TextEncoder();
  function u(x) {
    return d.encode(x);
  }
  function h(x) {
    return d.encode(x);
  }
  function y(x, T) {
    typeof x.error == "function" ? x.error(T) : x.close();
  }
  var v = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, k = {};
  function N(x) {
    return v.call(k, x) ? !0 : v.call(P, x) ? !1 : b.test(x) ? k[x] = !0 : (P[x] = !0, !1);
  }
  function R(x, T, F, K, xe, me, Ae) {
    this.acceptsBooleans = T === 2 || T === 3 || T === 4, this.attributeName = K, this.attributeNamespace = xe, this.mustUseProperty = F, this.propertyName = x, this.type = T, this.sanitizeURL = me, this.removeEmptyString = Ae;
  }
  var m = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(x) {
    m[x] = new R(x, 0, !1, x, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(x) {
    var T = x[0];
    m[T] = new R(T, 1, !1, x[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(x) {
    m[x] = new R(x, 2, !1, x.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(x) {
    m[x] = new R(x, 2, !1, x, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(x) {
    m[x] = new R(x, 3, !1, x.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(x) {
    m[x] = new R(x, 3, !0, x, null, !1, !1);
  }), ["capture", "download"].forEach(function(x) {
    m[x] = new R(x, 4, !1, x, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(x) {
    m[x] = new R(x, 6, !1, x, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(x) {
    m[x] = new R(x, 5, !1, x.toLowerCase(), null, !1, !1);
  });
  var O = /[\-:]([a-z])/g;
  function D(x) {
    return x[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(x) {
    var T = x.replace(
      O,
      D
    );
    m[T] = new R(T, 1, !1, x, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(x) {
    var T = x.replace(O, D);
    m[T] = new R(T, 1, !1, x, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(x) {
    var T = x.replace(O, D);
    m[T] = new R(T, 1, !1, x, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(x) {
    m[x] = new R(x, 1, !1, x.toLowerCase(), null, !1, !1);
  }), m.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(x) {
    m[x] = new R(x, 1, !1, x.toLowerCase(), null, !0, !0);
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
  }, _ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(L).forEach(function(x) {
    _.forEach(function(T) {
      T = T + x.charAt(0).toUpperCase() + x.substring(1), L[T] = L[x];
    });
  });
  var C = /["'&<>]/;
  function V(x) {
    if (typeof x == "boolean" || typeof x == "number")
      return "" + x;
    x = "" + x;
    var T = C.exec(x);
    if (T) {
      var F = "", K, xe = 0;
      for (K = T.index; K < x.length; K++) {
        switch (x.charCodeAt(K)) {
          case 34:
            T = "&quot;";
            break;
          case 38:
            T = "&amp;";
            break;
          case 39:
            T = "&#x27;";
            break;
          case 60:
            T = "&lt;";
            break;
          case 62:
            T = "&gt;";
            break;
          default:
            continue;
        }
        xe !== K && (F += x.substring(xe, K)), xe = K + 1, F += T;
      }
      x = xe !== K ? F + x.substring(xe, K) : F;
    }
    return x;
  }
  var H = /([A-Z])/g, X = /^ms-/, le = Array.isArray, Z = h("<script>"), W = h("<\/script>"), U = h('<script src="'), B = h('<script type="module" src="'), $ = h('" async=""><\/script>'), ne = /(<\/|<)(s)(cript)/gi;
  function ee(x, T, F, K) {
    return "" + T + (F === "s" ? "\\u0073" : "\\u0053") + K;
  }
  function ie(x, T, F, K, xe) {
    x = x === void 0 ? "" : x, T = T === void 0 ? Z : h('<script nonce="' + V(T) + '">');
    var me = [];
    if (F !== void 0 && me.push(T, u(("" + F).replace(ne, ee)), W), K !== void 0)
      for (F = 0; F < K.length; F++)
        me.push(U, u(V(K[F])), $);
    if (xe !== void 0)
      for (K = 0; K < xe.length; K++)
        me.push(B, u(V(xe[K])), $);
    return { bootstrapChunks: me, startInlineScript: T, placeholderPrefix: h(x + "P:"), segmentPrefix: h(x + "S:"), boundaryPrefix: x + "B:", idPrefix: x, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function q(x, T) {
    return { insertionMode: x, selectedValue: T };
  }
  function j(x) {
    return q(x === "http://www.w3.org/2000/svg" ? 2 : x === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function J(x, T, F) {
    switch (T) {
      case "select":
        return q(1, F.value != null ? F.value : F.defaultValue);
      case "svg":
        return q(2, null);
      case "math":
        return q(3, null);
      case "foreignObject":
        return q(1, null);
      case "table":
        return q(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return q(5, null);
      case "colgroup":
        return q(7, null);
      case "tr":
        return q(6, null);
    }
    return 4 <= x.insertionMode || x.insertionMode === 0 ? q(1, null) : x;
  }
  var oe = h("<!-- -->");
  function De(x, T, F, K) {
    return T === "" ? K : (K && x.push(oe), x.push(u(V(T))), !0);
  }
  var ye = /* @__PURE__ */ new Map(), de = h(' style="'), Ee = h(":"), re = h(";");
  function Oe(x, T, F) {
    if (typeof F != "object")
      throw Error(t(62));
    T = !0;
    for (var K in F)
      if (v.call(F, K)) {
        var xe = F[K];
        if (xe != null && typeof xe != "boolean" && xe !== "") {
          if (K.indexOf("--") === 0) {
            var me = u(V(K));
            xe = u(V(("" + xe).trim()));
          } else {
            me = K;
            var Ae = ye.get(me);
            Ae !== void 0 || (Ae = h(V(me.replace(H, "-$1").toLowerCase().replace(X, "-ms-"))), ye.set(me, Ae)), me = Ae, xe = typeof xe == "number" ? xe === 0 || v.call(L, K) ? u("" + xe) : u(xe + "px") : u(V(("" + xe).trim()));
          }
          T ? (T = !1, x.push(de, me, Ee, xe)) : x.push(re, me, Ee, xe);
        }
      }
    T || x.push(be);
  }
  var ve = h(" "), ce = h('="'), be = h('"'), G = h('=""');
  function Pe(x, T, F, K) {
    switch (F) {
      case "style":
        Oe(x, T, K);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < F.length) || F[0] !== "o" && F[0] !== "O" || F[1] !== "n" && F[1] !== "N") {
      if (T = m.hasOwnProperty(F) ? m[F] : null, T !== null) {
        switch (typeof K) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!T.acceptsBooleans)
              return;
        }
        switch (F = u(T.attributeName), T.type) {
          case 3:
            K && x.push(ve, F, G);
            break;
          case 4:
            K === !0 ? x.push(ve, F, G) : K !== !1 && x.push(ve, F, ce, u(V(K)), be);
            break;
          case 5:
            isNaN(K) || x.push(ve, F, ce, u(V(K)), be);
            break;
          case 6:
            !isNaN(K) && 1 <= K && x.push(ve, F, ce, u(V(K)), be);
            break;
          default:
            T.sanitizeURL && (K = "" + K), x.push(ve, F, ce, u(V(K)), be);
        }
      } else if (N(F)) {
        switch (typeof K) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (T = F.toLowerCase().slice(0, 5), T !== "data-" && T !== "aria-")
              return;
        }
        x.push(ve, u(F), ce, u(V(K)), be);
      }
    }
  }
  var Se = h(">"), je = h("/>");
  function Ke(x, T, F) {
    if (T != null) {
      if (F != null)
        throw Error(t(60));
      if (typeof T != "object" || !("__html" in T))
        throw Error(t(61));
      T = T.__html, T != null && x.push(u("" + T));
    }
  }
  function Ge(x) {
    var T = "";
    return e.Children.forEach(x, function(F) {
      F != null && (T += F);
    }), T;
  }
  var Be = h(' selected=""');
  function yt(x, T, F, K) {
    x.push(Ne(F));
    var xe = F = null, me;
    for (me in T)
      if (v.call(T, me)) {
        var Ae = T[me];
        if (Ae != null)
          switch (me) {
            case "children":
              F = Ae;
              break;
            case "dangerouslySetInnerHTML":
              xe = Ae;
              break;
            default:
              Pe(x, K, me, Ae);
          }
      }
    return x.push(Se), Ke(x, xe, F), typeof F == "string" ? (x.push(u(V(F))), null) : F;
  }
  var He = h(`
`), ze = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Fe = /* @__PURE__ */ new Map();
  function Ne(x) {
    var T = Fe.get(x);
    if (T === void 0) {
      if (!ze.test(x))
        throw Error(t(65, x));
      T = h("<" + x), Fe.set(x, T);
    }
    return T;
  }
  var ot = h("<!DOCTYPE html>");
  function Ue(x, T, F, K, xe) {
    switch (T) {
      case "select":
        x.push(Ne("select"));
        var me = null, Ae = null;
        for (kt in F)
          if (v.call(F, kt)) {
            var Ve = F[kt];
            if (Ve != null)
              switch (kt) {
                case "children":
                  me = Ve;
                  break;
                case "dangerouslySetInnerHTML":
                  Ae = Ve;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Pe(x, K, kt, Ve);
              }
          }
        return x.push(Se), Ke(x, Ae, me), me;
      case "option":
        Ae = xe.selectedValue, x.push(Ne("option"));
        var pt = Ve = null, Tt = null, kt = null;
        for (me in F)
          if (v.call(F, me)) {
            var Zt = F[me];
            if (Zt != null)
              switch (me) {
                case "children":
                  Ve = Zt;
                  break;
                case "selected":
                  Tt = Zt;
                  break;
                case "dangerouslySetInnerHTML":
                  kt = Zt;
                  break;
                case "value":
                  pt = Zt;
                default:
                  Pe(x, K, me, Zt);
              }
          }
        if (Ae != null)
          if (F = pt !== null ? "" + pt : Ge(Ve), le(Ae)) {
            for (K = 0; K < Ae.length; K++)
              if ("" + Ae[K] === F) {
                x.push(Be);
                break;
              }
          } else
            "" + Ae === F && x.push(Be);
        else
          Tt && x.push(Be);
        return x.push(Se), Ke(x, kt, Ve), Ve;
      case "textarea":
        x.push(Ne("textarea")), kt = Ae = me = null;
        for (Ve in F)
          if (v.call(F, Ve) && (pt = F[Ve], pt != null))
            switch (Ve) {
              case "children":
                kt = pt;
                break;
              case "value":
                me = pt;
                break;
              case "defaultValue":
                Ae = pt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                Pe(x, K, Ve, pt);
            }
        if (me === null && Ae !== null && (me = Ae), x.push(Se), kt != null) {
          if (me != null)
            throw Error(t(92));
          if (le(kt) && 1 < kt.length)
            throw Error(t(93));
          me = "" + kt;
        }
        return typeof me == "string" && me[0] === `
` && x.push(He), me !== null && x.push(u(V("" + me))), null;
      case "input":
        x.push(Ne("input")), pt = kt = Ve = me = null;
        for (Ae in F)
          if (v.call(F, Ae) && (Tt = F[Ae], Tt != null))
            switch (Ae) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                pt = Tt;
                break;
              case "defaultValue":
                Ve = Tt;
                break;
              case "checked":
                kt = Tt;
                break;
              case "value":
                me = Tt;
                break;
              default:
                Pe(x, K, Ae, Tt);
            }
        return kt !== null ? Pe(
          x,
          K,
          "checked",
          kt
        ) : pt !== null && Pe(x, K, "checked", pt), me !== null ? Pe(x, K, "value", me) : Ve !== null && Pe(x, K, "value", Ve), x.push(je), null;
      case "menuitem":
        x.push(Ne("menuitem"));
        for (var Bn in F)
          if (v.call(F, Bn) && (me = F[Bn], me != null))
            switch (Bn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                Pe(x, K, Bn, me);
            }
        return x.push(Se), null;
      case "title":
        x.push(Ne("title")), me = null;
        for (Zt in F)
          if (v.call(F, Zt) && (Ae = F[Zt], Ae != null))
            switch (Zt) {
              case "children":
                me = Ae;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                Pe(x, K, Zt, Ae);
            }
        return x.push(Se), me;
      case "listing":
      case "pre":
        x.push(Ne(T)), Ae = me = null;
        for (pt in F)
          if (v.call(F, pt) && (Ve = F[pt], Ve != null))
            switch (pt) {
              case "children":
                me = Ve;
                break;
              case "dangerouslySetInnerHTML":
                Ae = Ve;
                break;
              default:
                Pe(x, K, pt, Ve);
            }
        if (x.push(Se), Ae != null) {
          if (me != null)
            throw Error(t(60));
          if (typeof Ae != "object" || !("__html" in Ae))
            throw Error(t(61));
          F = Ae.__html, F != null && (typeof F == "string" && 0 < F.length && F[0] === `
` ? x.push(He, u(F)) : x.push(u("" + F)));
        }
        return typeof me == "string" && me[0] === `
` && x.push(He), me;
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
        x.push(Ne(T));
        for (var Yn in F)
          if (v.call(F, Yn) && (me = F[Yn], me != null))
            switch (Yn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, T));
              default:
                Pe(x, K, Yn, me);
            }
        return x.push(je), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return yt(x, F, T, K);
      case "html":
        return xe.insertionMode === 0 && x.push(ot), yt(x, F, T, K);
      default:
        if (T.indexOf("-") === -1 && typeof F.is != "string")
          return yt(x, F, T, K);
        x.push(Ne(T)), Ae = me = null;
        for (Tt in F)
          if (v.call(F, Tt) && (Ve = F[Tt], Ve != null))
            switch (Tt) {
              case "children":
                me = Ve;
                break;
              case "dangerouslySetInnerHTML":
                Ae = Ve;
                break;
              case "style":
                Oe(x, K, Ve);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                N(Tt) && typeof Ve != "function" && typeof Ve != "symbol" && x.push(ve, u(Tt), ce, u(V(Ve)), be);
            }
        return x.push(Se), Ke(x, Ae, me), me;
    }
  }
  var et = h("</"), ut = h(">"), st = h('<template id="'), Ct = h('"></template>'), Gt = h("<!--$-->"), Wt = h('<!--$?--><template id="'), dt = h('"></template>'), Rt = h("<!--$!-->"), cn = h("<!--/$-->"), Jt = h("<template"), jt = h('"'), fn = h(' data-dgst="');
  h(' data-msg="'), h(' data-stck="');
  var Le = h("></template>");
  function ft(x, T, F) {
    if (a(x, Wt), F === null)
      throw Error(t(395));
    return a(x, F), l(x, dt);
  }
  var $t = h('<div hidden id="'), Dt = h('">'), St = h("</div>"), hn = h('<svg aria-hidden="true" style="display:none" id="'), Lt = h('">'), en = h("</svg>"), an = h('<math aria-hidden="true" style="display:none" id="'), Sn = h('">'), Ut = h("</math>"), Kt = h('<table hidden id="'), Tn = h('">'), _n = h("</table>"), Mn = h('<table hidden><tbody id="'), Bt = h('">'), On = h("</tbody></table>"), zn = h('<table hidden><tr id="'), kn = h('">'), xn = h("</tr></table>"), we = h('<table hidden><colgroup id="'), at = h('">'), tt = h("</colgroup></table>");
  function z(x, T, F, K) {
    switch (F.insertionMode) {
      case 0:
      case 1:
        return a(x, $t), a(x, T.segmentPrefix), a(x, u(K.toString(16))), l(x, Dt);
      case 2:
        return a(x, hn), a(x, T.segmentPrefix), a(x, u(K.toString(16))), l(x, Lt);
      case 3:
        return a(x, an), a(x, T.segmentPrefix), a(x, u(K.toString(16))), l(x, Sn);
      case 4:
        return a(x, Kt), a(x, T.segmentPrefix), a(x, u(K.toString(16))), l(x, Tn);
      case 5:
        return a(x, Mn), a(x, T.segmentPrefix), a(x, u(K.toString(16))), l(x, Bt);
      case 6:
        return a(x, zn), a(x, T.segmentPrefix), a(x, u(K.toString(16))), l(x, kn);
      case 7:
        return a(
          x,
          we
        ), a(x, T.segmentPrefix), a(x, u(K.toString(16))), l(x, at);
      default:
        throw Error(t(397));
    }
  }
  function Te(x, T) {
    switch (T.insertionMode) {
      case 0:
      case 1:
        return l(x, St);
      case 2:
        return l(x, en);
      case 3:
        return l(x, Ut);
      case 4:
        return l(x, _n);
      case 5:
        return l(x, On);
      case 6:
        return l(x, xn);
      case 7:
        return l(x, tt);
      default:
        throw Error(t(397));
    }
  }
  var We = h('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Me = h('$RS("'), Qe = h('","'), Ze = h('")<\/script>'), mt = h('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), xt = h('$RC("'), Ye = h('","'), Yt = h('")<\/script>'), Mt = h('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Pt = h('$RX("'), lt = h('"'), wt = h(")<\/script>"), At = h(","), Ht = /[<\u2028\u2029]/g;
  function Ot(x) {
    return JSON.stringify(x).replace(Ht, function(T) {
      switch (T) {
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
  var on = Object.assign, tn = Symbol.for("react.element"), nn = Symbol.for("react.portal"), Xt = Symbol.for("react.fragment"), mn = Symbol.for("react.strict_mode"), Nt = Symbol.for("react.profiler"), ln = Symbol.for("react.provider"), yn = Symbol.for("react.context"), In = Symbol.for("react.forward_ref"), un = Symbol.for("react.suspense"), bn = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), I = Symbol.for("react.scope"), Y = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), pe = Symbol.for("react.default_value"), ke = Symbol.iterator;
  function $e(x) {
    if (x == null)
      return null;
    if (typeof x == "function")
      return x.displayName || x.name || null;
    if (typeof x == "string")
      return x;
    switch (x) {
      case Xt:
        return "Fragment";
      case nn:
        return "Portal";
      case Nt:
        return "Profiler";
      case mn:
        return "StrictMode";
      case un:
        return "Suspense";
      case bn:
        return "SuspenseList";
    }
    if (typeof x == "object")
      switch (x.$$typeof) {
        case yn:
          return (x.displayName || "Context") + ".Consumer";
        case ln:
          return (x._context.displayName || "Context") + ".Provider";
        case In:
          var T = x.render;
          return x = x.displayName, x || (x = T.displayName || T.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
        case g:
          return T = x.displayName || null, T !== null ? T : $e(x.type) || "Memo";
        case w:
          T = x._payload, x = x._init;
          try {
            return $e(x(T));
          } catch {
          }
      }
    return null;
  }
  var rt = {};
  function ct(x, T) {
    if (x = x.contextTypes, !x)
      return rt;
    var F = {}, K;
    for (K in x)
      F[K] = T[K];
    return F;
  }
  var te = null;
  function ae(x, T) {
    if (x !== T) {
      x.context._currentValue = x.parentValue, x = x.parent;
      var F = T.parent;
      if (x === null) {
        if (F !== null)
          throw Error(t(401));
      } else {
        if (F === null)
          throw Error(t(401));
        ae(x, F);
      }
      T.context._currentValue = T.value;
    }
  }
  function ue(x) {
    x.context._currentValue = x.parentValue, x = x.parent, x !== null && ue(x);
  }
  function Re(x) {
    var T = x.parent;
    T !== null && Re(T), x.context._currentValue = x.value;
  }
  function ht(x, T) {
    if (x.context._currentValue = x.parentValue, x = x.parent, x === null)
      throw Error(t(402));
    x.depth === T.depth ? ae(x, T) : ht(x, T);
  }
  function gn(x, T) {
    var F = T.parent;
    if (F === null)
      throw Error(t(402));
    x.depth === F.depth ? ae(x, F) : gn(x, F), T.context._currentValue = T.value;
  }
  function Rn(x) {
    var T = te;
    T !== x && (T === null ? Re(x) : x === null ? ue(T) : T.depth === x.depth ? ae(T, x) : T.depth > x.depth ? ht(T, x) : gn(T, x), te = x);
  }
  var ar = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(x, T) {
    x = x._reactInternals, x.queue !== null && x.queue.push(T);
  }, enqueueReplaceState: function(x, T) {
    x = x._reactInternals, x.replace = !0, x.queue = [T];
  }, enqueueForceUpdate: function() {
  } };
  function Nn(x, T, F, K) {
    var xe = x.state !== void 0 ? x.state : null;
    x.updater = ar, x.props = F, x.state = xe;
    var me = { queue: [], replace: !1 };
    x._reactInternals = me;
    var Ae = T.contextType;
    if (x.context = typeof Ae == "object" && Ae !== null ? Ae._currentValue : K, Ae = T.getDerivedStateFromProps, typeof Ae == "function" && (Ae = Ae(F, xe), xe = Ae == null ? xe : on({}, xe, Ae), x.state = xe), typeof T.getDerivedStateFromProps != "function" && typeof x.getSnapshotBeforeUpdate != "function" && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function"))
      if (T = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), T !== x.state && ar.enqueueReplaceState(x, x.state, null), me.queue !== null && 0 < me.queue.length)
        if (T = me.queue, Ae = me.replace, me.queue = null, me.replace = !1, Ae && T.length === 1)
          x.state = T[0];
        else {
          for (me = Ae ? T[0] : x.state, xe = !0, Ae = Ae ? 1 : 0; Ae < T.length; Ae++) {
            var Ve = T[Ae];
            Ve = typeof Ve == "function" ? Ve.call(x, me, F, K) : Ve, Ve != null && (xe ? (xe = !1, me = on({}, me, Ve)) : on(me, Ve));
          }
          x.state = me;
        }
      else
        me.queue = null;
  }
  var mr = { id: 1, overflow: "" };
  function ir(x, T, F) {
    var K = x.id;
    x = x.overflow;
    var xe = 32 - yr(K) - 1;
    K &= ~(1 << xe), F += 1;
    var me = 32 - yr(T) + xe;
    if (30 < me) {
      var Ae = xe - xe % 5;
      return me = (K & (1 << Ae) - 1).toString(32), K >>= Ae, xe -= Ae, { id: 1 << 32 - yr(T) + xe | F << xe | K, overflow: me + x };
    }
    return { id: 1 << me | F << xe | K, overflow: x };
  }
  var yr = Math.clz32 ? Math.clz32 : oa, Jo = Math.log, el = Math.LN2;
  function oa(x) {
    return x >>>= 0, x === 0 ? 32 : 31 - (Jo(x) / el | 0) | 0;
  }
  function nr(x, T) {
    return x === T && (x !== 0 || 1 / x === 1 / T) || x !== x && T !== T;
  }
  var tl = typeof Object.is == "function" ? Object.is : nr, or = null, Ha = null, la = null, qt = null, gr = !1, sa = !1, vr = 0, cr = null, ca = 0;
  function ur() {
    if (or === null)
      throw Error(t(321));
    return or;
  }
  function Kn() {
    if (0 < ca)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Wa() {
    return qt === null ? la === null ? (gr = !1, la = qt = Kn()) : (gr = !0, qt = la) : qt.next === null ? (gr = !1, qt = qt.next = Kn()) : (gr = !0, qt = qt.next), qt;
  }
  function jr() {
    Ha = or = null, sa = !1, la = null, ca = 0, qt = cr = null;
  }
  function $i(x, T) {
    return typeof T == "function" ? T(x) : T;
  }
  function ua(x, T, F) {
    if (or = ur(), qt = Wa(), gr) {
      var K = qt.queue;
      if (T = K.dispatch, cr !== null && (F = cr.get(K), F !== void 0)) {
        cr.delete(K), K = qt.memoizedState;
        do
          K = x(K, F.action), F = F.next;
        while (F !== null);
        return qt.memoizedState = K, [K, T];
      }
      return [qt.memoizedState, T];
    }
    return x = x === $i ? typeof T == "function" ? T() : T : F !== void 0 ? F(T) : T, qt.memoizedState = x, x = qt.queue = { last: null, dispatch: null }, x = x.dispatch = nl.bind(null, or, x), [qt.memoizedState, x];
  }
  function Bi(x, T) {
    if (or = ur(), qt = Wa(), T = T === void 0 ? null : T, qt !== null) {
      var F = qt.memoizedState;
      if (F !== null && T !== null) {
        var K = F[1];
        e:
          if (K === null)
            K = !1;
          else {
            for (var xe = 0; xe < K.length && xe < T.length; xe++)
              if (!tl(T[xe], K[xe])) {
                K = !1;
                break e;
              }
            K = !0;
          }
        if (K)
          return F[0];
      }
    }
    return x = x(), qt.memoizedState = [x, T], x;
  }
  function nl(x, T, F) {
    if (25 <= ca)
      throw Error(t(301));
    if (x === or)
      if (sa = !0, x = { action: F, next: null }, cr === null && (cr = /* @__PURE__ */ new Map()), F = cr.get(T), F === void 0)
        cr.set(T, x);
      else {
        for (T = F; T.next !== null; )
          T = T.next;
        T.next = x;
      }
  }
  function rl() {
    throw Error(t(394));
  }
  function da() {
  }
  var Hi = { readContext: function(x) {
    return x._currentValue;
  }, useContext: function(x) {
    return ur(), x._currentValue;
  }, useMemo: Bi, useReducer: ua, useRef: function(x) {
    or = ur(), qt = Wa();
    var T = qt.memoizedState;
    return T === null ? (x = { current: x }, qt.memoizedState = x) : T;
  }, useState: function(x) {
    return ua($i, x);
  }, useInsertionEffect: da, useLayoutEffect: function() {
  }, useCallback: function(x, T) {
    return Bi(function() {
      return x;
    }, T);
  }, useImperativeHandle: da, useEffect: da, useDebugValue: da, useDeferredValue: function(x) {
    return ur(), x;
  }, useTransition: function() {
    return ur(), [!1, rl];
  }, useId: function() {
    var x = Ha.treeContext, T = x.overflow;
    x = x.id, x = (x & ~(1 << 32 - yr(x) - 1)).toString(32) + T;
    var F = Ur;
    if (F === null)
      throw Error(t(404));
    return T = vr++, x = ":" + F.idPrefix + "R" + x, 0 < T && (x += "H" + T.toString(32)), x + ":";
  }, useMutableSource: function(x, T) {
    return ur(), T(x._source);
  }, useSyncExternalStore: function(x, T, F) {
    if (F === void 0)
      throw Error(t(407));
    return F();
  } }, Ur = null, Va = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function al(x) {
    return console.error(x), null;
  }
  function Ar() {
  }
  function ja(x, T, F, K, xe, me, Ae, Ve, pt) {
    var Tt = [], kt = /* @__PURE__ */ new Set();
    return T = { destination: null, responseState: T, progressiveChunkSize: K === void 0 ? 12800 : K, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: kt, pingedTasks: Tt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: xe === void 0 ? al : xe, onAllReady: me === void 0 ? Ar : me, onShellReady: Ae === void 0 ? Ar : Ae, onShellError: Ve === void 0 ? Ar : Ve, onFatalError: pt === void 0 ? Ar : pt }, F = Lr(T, 0, null, F, !1, !1), F.parentFlushed = !0, x = Ua(T, x, null, F, kt, rt, null, mr), Tt.push(x), T;
  }
  function Ua(x, T, F, K, xe, me, Ae, Ve) {
    x.allPendingTasks++, F === null ? x.pendingRootTasks++ : F.pendingTasks++;
    var pt = { node: T, ping: function() {
      var Tt = x.pingedTasks;
      Tt.push(pt), Tt.length === 1 && Xi(x);
    }, blockedBoundary: F, blockedSegment: K, abortSet: xe, legacyContext: me, context: Ae, treeContext: Ve };
    return xe.add(pt), pt;
  }
  function Lr(x, T, F, K, xe, me) {
    return { status: 0, id: -1, index: T, parentFlushed: !1, chunks: [], children: [], formatContext: K, boundary: F, lastPushedText: xe, textEmbedded: me };
  }
  function Kr(x, T) {
    if (x = x.onError(T), x != null && typeof x != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof x + '" instead');
    return x;
  }
  function fa(x, T) {
    var F = x.onShellError;
    F(T), F = x.onFatalError, F(T), x.destination !== null ? (x.status = 2, y(x.destination, T)) : (x.status = 1, x.fatalError = T);
  }
  function Wi(x, T, F, K, xe) {
    for (or = {}, Ha = T, vr = 0, x = F(K, xe); sa; )
      sa = !1, vr = 0, ca += 1, qt = null, x = F(K, xe);
    return jr(), x;
  }
  function Vi(x, T, F, K) {
    var xe = F.render(), me = K.childContextTypes;
    if (me != null) {
      var Ae = T.legacyContext;
      if (typeof F.getChildContext != "function")
        K = Ae;
      else {
        F = F.getChildContext();
        for (var Ve in F)
          if (!(Ve in me))
            throw Error(t(108, $e(K) || "Unknown", Ve));
        K = on({}, Ae, F);
      }
      T.legacyContext = K, $n(x, T, xe), T.legacyContext = Ae;
    } else
      $n(x, T, xe);
  }
  function ji(x, T) {
    if (x && x.defaultProps) {
      T = on({}, T), x = x.defaultProps;
      for (var F in x)
        T[F] === void 0 && (T[F] = x[F]);
      return T;
    }
    return T;
  }
  function pa(x, T, F, K, xe) {
    if (typeof F == "function")
      if (F.prototype && F.prototype.isReactComponent) {
        xe = ct(F, T.legacyContext);
        var me = F.contextType;
        me = new F(K, typeof me == "object" && me !== null ? me._currentValue : xe), Nn(me, F, K, xe), Vi(x, T, me, F);
      } else {
        me = ct(F, T.legacyContext), xe = Wi(x, T, F, K, me);
        var Ae = vr !== 0;
        if (typeof xe == "object" && xe !== null && typeof xe.render == "function" && xe.$$typeof === void 0)
          Nn(xe, F, K, me), Vi(x, T, xe, F);
        else if (Ae) {
          K = T.treeContext, T.treeContext = ir(K, 1, 0);
          try {
            $n(x, T, xe);
          } finally {
            T.treeContext = K;
          }
        } else
          $n(x, T, xe);
      }
    else if (typeof F == "string") {
      switch (xe = T.blockedSegment, me = Ue(xe.chunks, F, K, x.responseState, xe.formatContext), xe.lastPushedText = !1, Ae = xe.formatContext, xe.formatContext = J(Ae, F, K), ha(x, T, me), xe.formatContext = Ae, F) {
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
          xe.chunks.push(et, u(F), ut);
      }
      xe.lastPushedText = !1;
    } else {
      switch (F) {
        case ge:
        case Y:
        case mn:
        case Nt:
        case Xt:
          $n(x, T, K.children);
          return;
        case bn:
          $n(x, T, K.children);
          return;
        case I:
          throw Error(t(343));
        case un:
          e: {
            F = T.blockedBoundary, xe = T.blockedSegment, me = K.fallback, K = K.children, Ae = /* @__PURE__ */ new Set();
            var Ve = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Ae, errorDigest: null }, pt = Lr(x, xe.chunks.length, Ve, xe.formatContext, !1, !1);
            xe.children.push(pt), xe.lastPushedText = !1;
            var Tt = Lr(x, 0, null, xe.formatContext, !1, !1);
            Tt.parentFlushed = !0, T.blockedBoundary = Ve, T.blockedSegment = Tt;
            try {
              if (ha(
                x,
                T,
                K
              ), Tt.lastPushedText && Tt.textEmbedded && Tt.chunks.push(oe), Tt.status = 1, ma(Ve, Tt), Ve.pendingTasks === 0)
                break e;
            } catch (kt) {
              Tt.status = 4, Ve.forceClientRender = !0, Ve.errorDigest = Kr(x, kt);
            } finally {
              T.blockedBoundary = F, T.blockedSegment = xe;
            }
            T = Ua(x, me, F, pt, Ae, T.legacyContext, T.context, T.treeContext), x.pingedTasks.push(T);
          }
          return;
      }
      if (typeof F == "object" && F !== null)
        switch (F.$$typeof) {
          case In:
            if (K = Wi(x, T, F.render, K, xe), vr !== 0) {
              F = T.treeContext, T.treeContext = ir(F, 1, 0);
              try {
                $n(x, T, K);
              } finally {
                T.treeContext = F;
              }
            } else
              $n(x, T, K);
            return;
          case g:
            F = F.type, K = ji(F, K), pa(x, T, F, K, xe);
            return;
          case ln:
            if (xe = K.children, F = F._context, K = K.value, me = F._currentValue, F._currentValue = K, Ae = te, te = K = { parent: Ae, depth: Ae === null ? 0 : Ae.depth + 1, context: F, parentValue: me, value: K }, T.context = K, $n(x, T, xe), x = te, x === null)
              throw Error(t(403));
            K = x.parentValue, x.context._currentValue = K === pe ? x.context._defaultValue : K, x = te = x.parent, T.context = x;
            return;
          case yn:
            K = K.children, K = K(F._currentValue), $n(x, T, K);
            return;
          case w:
            xe = F._init, F = xe(F._payload), K = ji(F, K), pa(x, T, F, K, void 0);
            return;
        }
      throw Error(t(
        130,
        F == null ? F : typeof F,
        ""
      ));
    }
  }
  function $n(x, T, F) {
    if (T.node = F, typeof F == "object" && F !== null) {
      switch (F.$$typeof) {
        case tn:
          pa(x, T, F.type, F.props, F.ref);
          return;
        case nn:
          throw Error(t(257));
        case w:
          var K = F._init;
          F = K(F._payload), $n(x, T, F);
          return;
      }
      if (le(F)) {
        Ui(x, T, F);
        return;
      }
      if (F === null || typeof F != "object" ? K = null : (K = ke && F[ke] || F["@@iterator"], K = typeof K == "function" ? K : null), K && (K = K.call(F))) {
        if (F = K.next(), !F.done) {
          var xe = [];
          do
            xe.push(F.value), F = K.next();
          while (!F.done);
          Ui(x, T, xe);
        }
        return;
      }
      throw x = Object.prototype.toString.call(F), Error(t(31, x === "[object Object]" ? "object with keys {" + Object.keys(F).join(", ") + "}" : x));
    }
    typeof F == "string" ? (K = T.blockedSegment, K.lastPushedText = De(T.blockedSegment.chunks, F, x.responseState, K.lastPushedText)) : typeof F == "number" && (K = T.blockedSegment, K.lastPushedText = De(T.blockedSegment.chunks, "" + F, x.responseState, K.lastPushedText));
  }
  function Ui(x, T, F) {
    for (var K = F.length, xe = 0; xe < K; xe++) {
      var me = T.treeContext;
      T.treeContext = ir(me, K, xe);
      try {
        ha(x, T, F[xe]);
      } finally {
        T.treeContext = me;
      }
    }
  }
  function ha(x, T, F) {
    var K = T.blockedSegment.formatContext, xe = T.legacyContext, me = T.context;
    try {
      return $n(x, T, F);
    } catch (pt) {
      if (jr(), typeof pt == "object" && pt !== null && typeof pt.then == "function") {
        F = pt;
        var Ae = T.blockedSegment, Ve = Lr(x, Ae.chunks.length, null, Ae.formatContext, Ae.lastPushedText, !0);
        Ae.children.push(Ve), Ae.lastPushedText = !1, x = Ua(x, T.node, T.blockedBoundary, Ve, T.abortSet, T.legacyContext, T.context, T.treeContext).ping, F.then(x, x), T.blockedSegment.formatContext = K, T.legacyContext = xe, T.context = me, Rn(me);
      } else
        throw T.blockedSegment.formatContext = K, T.legacyContext = xe, T.context = me, Rn(me), pt;
    }
  }
  function il(x) {
    var T = x.blockedBoundary;
    x = x.blockedSegment, x.status = 3, Yi(this, T, x);
  }
  function Ki(x, T, F) {
    var K = x.blockedBoundary;
    x.blockedSegment.status = 3, K === null ? (T.allPendingTasks--, T.status !== 2 && (T.status = 2, T.destination !== null && T.destination.close())) : (K.pendingTasks--, K.forceClientRender || (K.forceClientRender = !0, x = F === void 0 ? Error(t(432)) : F, K.errorDigest = T.onError(x), K.parentFlushed && T.clientRenderedBoundaries.push(K)), K.fallbackAbortableTasks.forEach(function(xe) {
      return Ki(xe, T, F);
    }), K.fallbackAbortableTasks.clear(), T.allPendingTasks--, T.allPendingTasks === 0 && (K = T.onAllReady, K()));
  }
  function ma(x, T) {
    if (T.chunks.length === 0 && T.children.length === 1 && T.children[0].boundary === null) {
      var F = T.children[0];
      F.id = T.id, F.parentFlushed = !0, F.status === 1 && ma(x, F);
    } else
      x.completedSegments.push(T);
  }
  function Yi(x, T, F) {
    if (T === null) {
      if (F.parentFlushed) {
        if (x.completedRootSegment !== null)
          throw Error(t(389));
        x.completedRootSegment = F;
      }
      x.pendingRootTasks--, x.pendingRootTasks === 0 && (x.onShellError = Ar, T = x.onShellReady, T());
    } else
      T.pendingTasks--, T.forceClientRender || (T.pendingTasks === 0 ? (F.parentFlushed && F.status === 1 && ma(T, F), T.parentFlushed && x.completedBoundaries.push(T), T.fallbackAbortableTasks.forEach(il, x), T.fallbackAbortableTasks.clear()) : F.parentFlushed && F.status === 1 && (ma(T, F), T.completedSegments.length === 1 && T.parentFlushed && x.partialBoundaries.push(T)));
    x.allPendingTasks--, x.allPendingTasks === 0 && (x = x.onAllReady, x());
  }
  function Xi(x) {
    if (x.status !== 2) {
      var T = te, F = Va.current;
      Va.current = Hi;
      var K = Ur;
      Ur = x.responseState;
      try {
        var xe = x.pingedTasks, me;
        for (me = 0; me < xe.length; me++) {
          var Ae = xe[me], Ve = x, pt = Ae.blockedSegment;
          if (pt.status === 0) {
            Rn(Ae.context);
            try {
              $n(Ve, Ae, Ae.node), pt.lastPushedText && pt.textEmbedded && pt.chunks.push(oe), Ae.abortSet.delete(Ae), pt.status = 1, Yi(Ve, Ae.blockedBoundary, pt);
            } catch (Xn) {
              if (jr(), typeof Xn == "object" && Xn !== null && typeof Xn.then == "function") {
                var Tt = Ae.ping;
                Xn.then(Tt, Tt);
              } else {
                Ae.abortSet.delete(Ae), pt.status = 4;
                var kt = Ae.blockedBoundary, Zt = Xn, Bn = Kr(Ve, Zt);
                if (kt === null ? fa(Ve, Zt) : (kt.pendingTasks--, kt.forceClientRender || (kt.forceClientRender = !0, kt.errorDigest = Bn, kt.parentFlushed && Ve.clientRenderedBoundaries.push(kt))), Ve.allPendingTasks--, Ve.allPendingTasks === 0) {
                  var Yn = Ve.onAllReady;
                  Yn();
                }
              }
            } finally {
            }
          }
        }
        xe.splice(0, me), x.destination !== null && Ka(x, x.destination);
      } catch (Xn) {
        Kr(x, Xn), fa(x, Xn);
      } finally {
        Ur = K, Va.current = F, F === Hi && Rn(T);
      }
    }
  }
  function ya(x, T, F) {
    switch (F.parentFlushed = !0, F.status) {
      case 0:
        var K = F.id = x.nextSegmentId++;
        return F.lastPushedText = !1, F.textEmbedded = !1, x = x.responseState, a(T, st), a(T, x.placeholderPrefix), x = u(K.toString(16)), a(T, x), l(T, Ct);
      case 1:
        F.status = 2;
        var xe = !0;
        K = F.chunks;
        var me = 0;
        F = F.children;
        for (var Ae = 0; Ae < F.length; Ae++) {
          for (xe = F[Ae]; me < xe.index; me++)
            a(T, K[me]);
          xe = ga(x, T, xe);
        }
        for (; me < K.length - 1; me++)
          a(T, K[me]);
        return me < K.length && (xe = l(T, K[me])), xe;
      default:
        throw Error(t(390));
    }
  }
  function ga(x, T, F) {
    var K = F.boundary;
    if (K === null)
      return ya(x, T, F);
    if (K.parentFlushed = !0, K.forceClientRender)
      K = K.errorDigest, l(T, Rt), a(T, Jt), K && (a(T, fn), a(T, u(V(K))), a(T, jt)), l(T, Le), ya(x, T, F);
    else if (0 < K.pendingTasks) {
      K.rootSegmentID = x.nextSegmentId++, 0 < K.completedSegments.length && x.partialBoundaries.push(K);
      var xe = x.responseState, me = xe.nextSuspenseID++;
      xe = h(xe.boundaryPrefix + me.toString(16)), K = K.id = xe, ft(T, x.responseState, K), ya(x, T, F);
    } else if (K.byteSize > x.progressiveChunkSize)
      K.rootSegmentID = x.nextSegmentId++, x.completedBoundaries.push(K), ft(T, x.responseState, K.id), ya(x, T, F);
    else {
      if (l(T, Gt), F = K.completedSegments, F.length !== 1)
        throw Error(t(391));
      ga(x, T, F[0]);
    }
    return l(T, cn);
  }
  function qi(x, T, F) {
    return z(T, x.responseState, F.formatContext, F.id), ga(x, T, F), Te(T, F.formatContext);
  }
  function Gi(x, T, F) {
    for (var K = F.completedSegments, xe = 0; xe < K.length; xe++)
      Zi(x, T, F, K[xe]);
    if (K.length = 0, x = x.responseState, K = F.id, F = F.rootSegmentID, a(T, x.startInlineScript), x.sentCompleteBoundaryFunction ? a(T, xt) : (x.sentCompleteBoundaryFunction = !0, a(T, mt)), K === null)
      throw Error(t(395));
    return F = u(F.toString(16)), a(T, K), a(T, Ye), a(T, x.segmentPrefix), a(T, F), l(T, Yt);
  }
  function Zi(x, T, F, K) {
    if (K.status === 2)
      return !0;
    var xe = K.id;
    if (xe === -1) {
      if ((K.id = F.rootSegmentID) === -1)
        throw Error(t(392));
      return qi(x, T, K);
    }
    return qi(x, T, K), x = x.responseState, a(T, x.startInlineScript), x.sentCompleteSegmentFunction ? a(T, Me) : (x.sentCompleteSegmentFunction = !0, a(T, We)), a(T, x.segmentPrefix), xe = u(xe.toString(16)), a(T, xe), a(T, Qe), a(T, x.placeholderPrefix), a(T, xe), l(T, Ze);
  }
  function Ka(x, T) {
    r = new Uint8Array(512), i = 0;
    try {
      var F = x.completedRootSegment;
      if (F !== null && x.pendingRootTasks === 0) {
        ga(x, T, F), x.completedRootSegment = null;
        var K = x.responseState.bootstrapChunks;
        for (F = 0; F < K.length - 1; F++)
          a(T, K[F]);
        F < K.length && l(T, K[F]);
      }
      var xe = x.clientRenderedBoundaries, me;
      for (me = 0; me < xe.length; me++) {
        var Ae = xe[me];
        K = T;
        var Ve = x.responseState, pt = Ae.id, Tt = Ae.errorDigest, kt = Ae.errorMessage, Zt = Ae.errorComponentStack;
        if (a(K, Ve.startInlineScript), Ve.sentClientRenderFunction ? a(K, Pt) : (Ve.sentClientRenderFunction = !0, a(
          K,
          Mt
        )), pt === null)
          throw Error(t(395));
        a(K, pt), a(K, lt), (Tt || kt || Zt) && (a(K, At), a(K, u(Ot(Tt || "")))), (kt || Zt) && (a(K, At), a(K, u(Ot(kt || "")))), Zt && (a(K, At), a(K, u(Ot(Zt)))), l(K, wt);
      }
      xe.splice(0, me);
      var Bn = x.completedBoundaries;
      for (me = 0; me < Bn.length; me++)
        Gi(x, T, Bn[me]);
      Bn.splice(0, me), f(T), r = new Uint8Array(512), i = 0;
      var Yn = x.partialBoundaries;
      for (me = 0; me < Yn.length; me++) {
        var Xn = Yn[me];
        e: {
          xe = x, Ae = T;
          var va = Xn.completedSegments;
          for (Ve = 0; Ve < va.length; Ve++)
            if (!Zi(
              xe,
              Ae,
              Xn,
              va[Ve]
            )) {
              Ve++, va.splice(0, Ve);
              var Ji = !1;
              break e;
            }
          va.splice(0, Ve), Ji = !0;
        }
        if (!Ji) {
          x.destination = null, me++, Yn.splice(0, me);
          return;
        }
      }
      Yn.splice(0, me);
      var Yr = x.completedBoundaries;
      for (me = 0; me < Yr.length; me++)
        Gi(x, T, Yr[me]);
      Yr.splice(0, me);
    } finally {
      f(T), x.allPendingTasks === 0 && x.pingedTasks.length === 0 && x.clientRenderedBoundaries.length === 0 && x.completedBoundaries.length === 0 && T.close();
    }
  }
  function Qi(x, T) {
    try {
      var F = x.abortableTasks;
      F.forEach(function(K) {
        return Ki(K, x, T);
      }), F.clear(), x.destination !== null && Ka(x, x.destination);
    } catch (K) {
      Kr(x, K), fa(x, K);
    }
  }
  return yc.renderToReadableStream = function(x, T) {
    return new Promise(function(F, K) {
      var xe, me, Ae = new Promise(function(kt, Zt) {
        me = kt, xe = Zt;
      }), Ve = ja(x, ie(T ? T.identifierPrefix : void 0, T ? T.nonce : void 0, T ? T.bootstrapScriptContent : void 0, T ? T.bootstrapScripts : void 0, T ? T.bootstrapModules : void 0), j(T ? T.namespaceURI : void 0), T ? T.progressiveChunkSize : void 0, T ? T.onError : void 0, me, function() {
        var kt = new ReadableStream({ type: "bytes", pull: function(Zt) {
          if (Ve.status === 1)
            Ve.status = 2, y(Zt, Ve.fatalError);
          else if (Ve.status !== 2 && Ve.destination === null) {
            Ve.destination = Zt;
            try {
              Ka(Ve, Zt);
            } catch (Bn) {
              Kr(Ve, Bn), fa(Ve, Bn);
            }
          }
        }, cancel: function() {
          Qi(Ve);
        } }, { highWaterMark: 0 });
        kt.allReady = Ae, F(kt);
      }, function(kt) {
        Ae.catch(function() {
        }), K(kt);
      }, xe);
      if (T && T.signal) {
        var pt = T.signal, Tt = function() {
          Qi(Ve, pt.reason), pt.removeEventListener("abort", Tt);
        };
        pt.addEventListener("abort", Tt);
      }
      Xi(Ve);
    });
  }, yc.version = "18.2.0", yc;
}
var wi = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eh;
function LS() {
  return Eh || (Eh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function i(n) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), p = 1; p < o; p++)
          s[p - 1] = arguments[p];
        l("warn", n, s);
      }
    }
    function a(n) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), p = 1; p < o; p++)
          s[p - 1] = arguments[p];
        l("error", n, s);
      }
    }
    function l(n, o, s) {
      {
        var p = r.ReactDebugCurrentFrame, S = p.getStackAddendum();
        S !== "" && (o += "%s", s = s.concat([S]));
        var A = s.map(function(M) {
          return String(M);
        });
        A.unshift("Warning: " + o), Function.prototype.apply.call(console[n], console, A);
      }
    }
    function f(n) {
      n();
    }
    function d(n) {
    }
    function u(n, o) {
      h(n, o);
    }
    function h(n, o) {
      return n.push(o);
    }
    function y(n) {
    }
    function v(n) {
      n.push(null);
    }
    function b(n) {
      return n;
    }
    function P(n) {
      return n;
    }
    function k(n, o) {
      n.destroy(o);
    }
    function N(n) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, s = o && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return s;
      }
    }
    function R(n) {
      try {
        return m(n), !1;
      } catch {
        return !0;
      }
    }
    function m(n) {
      return "" + n;
    }
    function O(n, o) {
      if (R(n))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", o, N(n)), m(n);
    }
    function D(n, o) {
      if (R(n))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", o, N(n)), m(n);
    }
    function L(n) {
      if (R(n))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", N(n)), m(n);
    }
    var _ = Object.prototype.hasOwnProperty, C = 0, V = 1, H = 2, X = 3, le = 4, Z = 5, W = 6, U = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", B = U + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", $ = new RegExp("^[" + U + "][" + B + "]*$"), ne = {}, ee = {};
    function ie(n) {
      return _.call(ee, n) ? !0 : _.call(ne, n) ? !1 : $.test(n) ? (ee[n] = !0, !0) : (ne[n] = !0, a("Invalid attribute name: `%s`", n), !1);
    }
    function q(n, o, s, p) {
      if (s !== null && s.type === C)
        return !1;
      switch (typeof o) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (s !== null)
            return !s.acceptsBooleans;
          var S = n.toLowerCase().slice(0, 5);
          return S !== "data-" && S !== "aria-";
        }
        default:
          return !1;
      }
    }
    function j(n) {
      return oe.hasOwnProperty(n) ? oe[n] : null;
    }
    function J(n, o, s, p, S, A, M) {
      this.acceptsBooleans = o === H || o === X || o === le, this.attributeName = p, this.attributeNamespace = S, this.mustUseProperty = s, this.propertyName = n, this.type = o, this.sanitizeURL = A, this.removeEmptyString = M;
    }
    var oe = {}, De = [
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
    De.forEach(function(n) {
      oe[n] = new J(
        n,
        C,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
      var o = n[0], s = n[1];
      oe[o] = new J(
        o,
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
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
      oe[n] = new J(
        n,
        H,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
      oe[n] = new J(
        n,
        H,
        !1,
        // mustUseProperty
        n,
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
    ].forEach(function(n) {
      oe[n] = new J(
        n,
        X,
        !1,
        // mustUseProperty
        n.toLowerCase(),
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
    ].forEach(function(n) {
      oe[n] = new J(
        n,
        X,
        !0,
        // mustUseProperty
        n,
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
    ].forEach(function(n) {
      oe[n] = new J(
        n,
        le,
        !1,
        // mustUseProperty
        n,
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
    ].forEach(function(n) {
      oe[n] = new J(
        n,
        W,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(n) {
      oe[n] = new J(
        n,
        Z,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ye = /[\-\:]([a-z])/g, de = function(n) {
      return n[1].toUpperCase();
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
    ].forEach(function(n) {
      var o = n.replace(ye, de);
      oe[o] = new J(
        o,
        V,
        !1,
        // mustUseProperty
        n,
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
    ].forEach(function(n) {
      var o = n.replace(ye, de);
      oe[o] = new J(
        o,
        V,
        !1,
        // mustUseProperty
        n,
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
    ].forEach(function(n) {
      var o = n.replace(ye, de);
      oe[o] = new J(
        o,
        V,
        !1,
        // mustUseProperty
        n,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(n) {
      oe[n] = new J(
        n,
        V,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ee = "xlinkHref";
    oe[Ee] = new J(
      "xlinkHref",
      V,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(n) {
      oe[n] = new J(
        n,
        V,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var re = {
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
    function Oe(n, o) {
      return n + o.charAt(0).toUpperCase() + o.substring(1);
    }
    var ve = ["Webkit", "ms", "Moz", "O"];
    Object.keys(re).forEach(function(n) {
      ve.forEach(function(o) {
        re[Oe(o, n)] = re[n];
      });
    });
    var ce = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function be(n, o) {
      ce[o.type] || o.onChange || o.onInput || o.readOnly || o.disabled || o.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), o.onChange || o.readOnly || o.disabled || o.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function G(n, o) {
      if (n.indexOf("-") === -1)
        return typeof o.is == "string";
      switch (n) {
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
    var Pe = {
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
    }, Se = {}, je = new RegExp("^(aria)-[" + B + "]*$"), Ke = new RegExp("^(aria)[A-Z][" + B + "]*$");
    function Ge(n, o) {
      {
        if (_.call(Se, o) && Se[o])
          return !0;
        if (Ke.test(o)) {
          var s = "aria-" + o.slice(4).toLowerCase(), p = Pe.hasOwnProperty(s) ? s : null;
          if (p == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", o), Se[o] = !0, !0;
          if (o !== p)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", o, p), Se[o] = !0, !0;
        }
        if (je.test(o)) {
          var S = o.toLowerCase(), A = Pe.hasOwnProperty(S) ? S : null;
          if (A == null)
            return Se[o] = !0, !1;
          if (o !== A)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", o, A), Se[o] = !0, !0;
        }
      }
      return !0;
    }
    function Be(n, o) {
      {
        var s = [];
        for (var p in o) {
          var S = Ge(n, p);
          S || s.push(p);
        }
        var A = s.map(function(M) {
          return "`" + M + "`";
        }).join(", ");
        s.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", A, n) : s.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", A, n);
      }
    }
    function yt(n, o) {
      G(n, o) || Be(n, o);
    }
    var He = !1;
    function ze(n, o) {
      {
        if (n !== "input" && n !== "textarea" && n !== "select")
          return;
        o != null && o.value === null && !He && (He = !0, n === "select" && o.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", n) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", n));
      }
    }
    var Fe = {
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
    }, Ne = function() {
    };
    {
      var ot = {}, Ue = /^on./, et = /^on[^A-Z]/, ut = new RegExp("^(aria)-[" + B + "]*$"), st = new RegExp("^(aria)[A-Z][" + B + "]*$");
      Ne = function(n, o, s, p) {
        if (_.call(ot, o) && ot[o])
          return !0;
        var S = o.toLowerCase();
        if (S === "onfocusin" || S === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ot[o] = !0, !0;
        if (p != null) {
          var A = p.registrationNameDependencies, M = p.possibleRegistrationNames;
          if (A.hasOwnProperty(o))
            return !0;
          var Q = M.hasOwnProperty(S) ? M[S] : null;
          if (Q != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", o, Q), ot[o] = !0, !0;
          if (Ue.test(o))
            return a("Unknown event handler property `%s`. It will be ignored.", o), ot[o] = !0, !0;
        } else if (Ue.test(o))
          return et.test(o) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", o), ot[o] = !0, !0;
        if (ut.test(o) || st.test(o))
          return !0;
        if (S === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ot[o] = !0, !0;
        if (S === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ot[o] = !0, !0;
        if (S === "is" && s !== null && s !== void 0 && typeof s != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof s), ot[o] = !0, !0;
        if (typeof s == "number" && isNaN(s))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", o), ot[o] = !0, !0;
        var he = j(o), _e = he !== null && he.type === C;
        if (Fe.hasOwnProperty(S)) {
          var Ie = Fe[S];
          if (Ie !== o)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", o, Ie), ot[o] = !0, !0;
        } else if (!_e && o !== S)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", o, S), ot[o] = !0, !0;
        return typeof s == "boolean" && q(o, s, he) ? (s ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', s, o, o, s, o) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', s, o, o, s, o, o, o), ot[o] = !0, !0) : _e ? !0 : q(o, s, he) ? (ot[o] = !0, !1) : ((s === "false" || s === "true") && he !== null && he.type === X && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", s, o, s === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', o, s), ot[o] = !0), !0);
      };
    }
    var Ct = function(n, o, s) {
      {
        var p = [];
        for (var S in o) {
          var A = Ne(n, S, o[S], s);
          A || p.push(S);
        }
        var M = p.map(function(Q) {
          return "`" + Q + "`";
        }).join(", ");
        p.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", M, n) : p.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", M, n);
      }
    };
    function Gt(n, o, s) {
      G(n, o) || Ct(n, o, s);
    }
    var Wt = function() {
    };
    {
      var dt = /^(?:webkit|moz|o)[A-Z]/, Rt = /^-ms-/, cn = /-(.)/g, Jt = /;\s*$/, jt = {}, fn = {}, Le = !1, ft = !1, $t = function(n) {
        return n.replace(cn, function(o, s) {
          return s.toUpperCase();
        });
      }, Dt = function(n) {
        jt.hasOwnProperty(n) && jt[n] || (jt[n] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          n,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          $t(n.replace(Rt, "ms-"))
        ));
      }, St = function(n) {
        jt.hasOwnProperty(n) && jt[n] || (jt[n] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", n, n.charAt(0).toUpperCase() + n.slice(1)));
      }, hn = function(n, o) {
        fn.hasOwnProperty(o) && fn[o] || (fn[o] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, n, o.replace(Jt, "")));
      }, Lt = function(n, o) {
        Le || (Le = !0, a("`NaN` is an invalid value for the `%s` css style property.", n));
      }, en = function(n, o) {
        ft || (ft = !0, a("`Infinity` is an invalid value for the `%s` css style property.", n));
      };
      Wt = function(n, o) {
        n.indexOf("-") > -1 ? Dt(n) : dt.test(n) ? St(n) : Jt.test(o) && hn(n, o), typeof o == "number" && (isNaN(o) ? Lt(n, o) : isFinite(o) || en(n, o));
      };
    }
    var an = Wt, Sn = /["'&<>]/;
    function Ut(n) {
      L(n);
      var o = "" + n, s = Sn.exec(o);
      if (!s)
        return o;
      var p, S = "", A, M = 0;
      for (A = s.index; A < o.length; A++) {
        switch (o.charCodeAt(A)) {
          case 34:
            p = "&quot;";
            break;
          case 38:
            p = "&amp;";
            break;
          case 39:
            p = "&#x27;";
            break;
          case 60:
            p = "&lt;";
            break;
          case 62:
            p = "&gt;";
            break;
          default:
            continue;
        }
        M !== A && (S += o.substring(M, A)), M = A + 1, S += p;
      }
      return M !== A ? S + o.substring(M, A) : S;
    }
    function Kt(n) {
      return typeof n == "boolean" || typeof n == "number" ? "" + n : Ut(n);
    }
    var Tn = /([A-Z])/g, _n = /^ms-/;
    function Mn(n) {
      return n.replace(Tn, "-$1").toLowerCase().replace(_n, "-ms-");
    }
    var Bt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, On = !1;
    function zn(n) {
      !On && Bt.test(n) && (On = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(n)));
    }
    var kn = Array.isArray;
    function xn(n) {
      return kn(n);
    }
    var we = "<script>";
    function at(n, o, s, p, S) {
      var A = n === void 0 ? "" : n, M = we, Q = [];
      return {
        bootstrapChunks: Q,
        startInlineScript: M,
        placeholderPrefix: A + "P:",
        segmentPrefix: A + "S:",
        boundaryPrefix: A + "B:",
        idPrefix: A,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var tt = 0, z = 1, Te = 2, We = 3, Me = 4, Qe = 5, Ze = 6, mt = 7;
    function xt(n, o) {
      return {
        insertionMode: n,
        selectedValue: o
      };
    }
    function Ye(n, o, s) {
      switch (o) {
        case "select":
          return xt(z, s.value != null ? s.value : s.defaultValue);
        case "svg":
          return xt(Te, null);
        case "math":
          return xt(We, null);
        case "foreignObject":
          return xt(z, null);
        case "table":
          return xt(Me, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return xt(Qe, null);
        case "colgroup":
          return xt(mt, null);
        case "tr":
          return xt(Ze, null);
      }
      return n.insertionMode >= Me || n.insertionMode === tt ? xt(z, null) : n;
    }
    var Yt = null;
    function Mt(n) {
      var o = n.nextSuspenseID++;
      return n.boundaryPrefix + o.toString(16);
    }
    function Pt(n, o, s) {
      var p = n.idPrefix, S = ":" + p + "R" + o;
      return s > 0 && (S += "H" + s.toString(32)), S + ":";
    }
    function lt(n) {
      return Kt(n);
    }
    var wt = "<!-- -->";
    function At(n, o, s, p) {
      return o === "" ? p : (p && n.push(wt), n.push(lt(o)), !0);
    }
    function Ht(n, o, s, p) {
      s && p && n.push(wt);
    }
    var Ot = /* @__PURE__ */ new Map();
    function on(n) {
      var o = Ot.get(n);
      if (o !== void 0)
        return o;
      var s = Kt(Mn(n));
      return Ot.set(n, s), s;
    }
    var tn = ' style="', nn = ":", Xt = ";";
    function mn(n, o, s) {
      if (typeof s != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var p = !0;
      for (var S in s)
        if (_.call(s, S)) {
          var A = s[S];
          if (!(A == null || typeof A == "boolean" || A === "")) {
            var M = void 0, Q = void 0, he = S.indexOf("--") === 0;
            he ? (M = Kt(S), D(A, S), Q = Kt(("" + A).trim())) : (an(S, A), M = on(S), typeof A == "number" ? A !== 0 && !_.call(re, S) ? Q = A + "px" : Q = "" + A : (D(A, S), Q = Kt(("" + A).trim()))), p ? (p = !1, n.push(tn, M, nn, Q)) : n.push(Xt, M, nn, Q);
          }
        }
      p || n.push(yn);
    }
    var Nt = " ", ln = '="', yn = '"', In = '=""';
    function un(n, o, s, p) {
      switch (s) {
        case "style": {
          mn(n, o, p);
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
        !(s.length > 2 && (s[0] === "o" || s[0] === "O") && (s[1] === "n" || s[1] === "N"))
      ) {
        var S = j(s);
        if (S !== null) {
          switch (typeof p) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!S.acceptsBooleans)
                return;
          }
          var A = S.attributeName, M = A;
          switch (S.type) {
            case X:
              p && n.push(Nt, M, In);
              return;
            case le:
              p === !0 ? n.push(Nt, M, In) : p === !1 || n.push(Nt, M, ln, Kt(p), yn);
              return;
            case Z:
              isNaN(p) || n.push(Nt, M, ln, Kt(p), yn);
              break;
            case W:
              !isNaN(p) && p >= 1 && n.push(Nt, M, ln, Kt(p), yn);
              break;
            default:
              S.sanitizeURL && (O(p, A), p = "" + p, zn(p)), n.push(Nt, M, ln, Kt(p), yn);
          }
        } else if (ie(s)) {
          switch (typeof p) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Q = s.toLowerCase().slice(0, 5);
              if (Q !== "data-" && Q !== "aria-")
                return;
            }
          }
          n.push(Nt, s, ln, Kt(p), yn);
        }
      }
    }
    var bn = ">", g = "/>";
    function w(n, o, s) {
      if (o != null) {
        if (s != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof o != "object" || !("__html" in o))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var p = o.__html;
        p != null && (L(p), n.push("" + p));
      }
    }
    var I = !1, Y = !1, ge = !1, pe = !1, ke = !1, $e = !1, rt = !1;
    function ct(n, o) {
      {
        var s = n[o];
        if (s != null) {
          var p = xn(s);
          n.multiple && !p ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", o) : !n.multiple && p && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", o);
        }
      }
    }
    function te(n, o, s) {
      be("select", o), ct(o, "value"), ct(o, "defaultValue"), o.value !== void 0 && o.defaultValue !== void 0 && !ge && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ge = !0), n.push(nr("select"));
      var p = null, S = null;
      for (var A in o)
        if (_.call(o, A)) {
          var M = o[A];
          if (M == null)
            continue;
          switch (A) {
            case "children":
              p = M;
              break;
            case "dangerouslySetInnerHTML":
              S = M;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              un(n, s, A, M);
              break;
          }
        }
      return n.push(bn), w(n, S, p), p;
    }
    function ae(n) {
      var o = "";
      return e.Children.forEach(n, function(s) {
        s != null && (o += s, !ke && typeof s != "string" && typeof s != "number" && (ke = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), o;
    }
    var ue = ' selected=""';
    function Re(n, o, s, p) {
      var S = p.selectedValue;
      n.push(nr("option"));
      var A = null, M = null, Q = null, he = null;
      for (var _e in o)
        if (_.call(o, _e)) {
          var Ie = o[_e];
          if (Ie == null)
            continue;
          switch (_e) {
            case "children":
              A = Ie;
              break;
            case "selected":
              Q = Ie, rt || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), rt = !0);
              break;
            case "dangerouslySetInnerHTML":
              he = Ie;
              break;
            case "value":
              M = Ie;
            default:
              un(n, s, _e, Ie);
              break;
          }
        }
      if (S != null) {
        var Xe;
        if (M !== null ? (O(M, "value"), Xe = "" + M) : (he !== null && ($e || ($e = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Xe = ae(A)), xn(S))
          for (var gt = 0; gt < S.length; gt++) {
            O(S[gt], "value");
            var zt = "" + S[gt];
            if (zt === Xe) {
              n.push(ue);
              break;
            }
          }
        else
          O(S, "select.value"), "" + S === Xe && n.push(ue);
      } else
        Q && n.push(ue);
      return n.push(bn), w(n, he, A), A;
    }
    function ht(n, o, s) {
      be("input", o), o.checked !== void 0 && o.defaultChecked !== void 0 && !Y && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", o.type), Y = !0), o.value !== void 0 && o.defaultValue !== void 0 && !I && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", o.type), I = !0), n.push(nr("input"));
      var p = null, S = null, A = null, M = null;
      for (var Q in o)
        if (_.call(o, Q)) {
          var he = o[Q];
          if (he == null)
            continue;
          switch (Q) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              M = he;
              break;
            case "defaultValue":
              S = he;
              break;
            case "checked":
              A = he;
              break;
            case "value":
              p = he;
              break;
            default:
              un(n, s, Q, he);
              break;
          }
        }
      return A !== null ? un(n, s, "checked", A) : M !== null && un(n, s, "checked", M), p !== null ? un(n, s, "value", p) : S !== null && un(n, s, "value", S), n.push(g), null;
    }
    function gn(n, o, s) {
      be("textarea", o), o.value !== void 0 && o.defaultValue !== void 0 && !pe && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), pe = !0), n.push(nr("textarea"));
      var p = null, S = null, A = null;
      for (var M in o)
        if (_.call(o, M)) {
          var Q = o[M];
          if (Q == null)
            continue;
          switch (M) {
            case "children":
              A = Q;
              break;
            case "value":
              p = Q;
              break;
            case "defaultValue":
              S = Q;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              un(n, s, M, Q);
              break;
          }
        }
      if (p === null && S !== null && (p = S), n.push(bn), A != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), p != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (xn(A)) {
          if (A.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          L(A[0]), p = "" + A[0];
        }
        L(A), p = "" + A;
      }
      return typeof p == "string" && p[0] === `
` && n.push(yr), p !== null && (O(p, "value"), n.push(lt("" + p))), null;
    }
    function Rn(n, o, s, p) {
      n.push(nr(s));
      for (var S in o)
        if (_.call(o, S)) {
          var A = o[S];
          if (A == null)
            continue;
          switch (S) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(s + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              un(n, p, S, A);
              break;
          }
        }
      return n.push(g), null;
    }
    function ar(n, o, s) {
      n.push(nr("menuitem"));
      for (var p in o)
        if (_.call(o, p)) {
          var S = o[p];
          if (S == null)
            continue;
          switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              un(n, s, p, S);
              break;
          }
        }
      return n.push(bn), null;
    }
    function Nn(n, o, s) {
      n.push(nr("title"));
      var p = null;
      for (var S in o)
        if (_.call(o, S)) {
          var A = o[S];
          if (A == null)
            continue;
          switch (S) {
            case "children":
              p = A;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              un(n, s, S, A);
              break;
          }
        }
      n.push(bn);
      {
        var M = Array.isArray(p) && p.length < 2 ? p[0] || null : p;
        Array.isArray(p) && p.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : M != null && M.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : M != null && typeof M != "string" && typeof M != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return p;
    }
    function mr(n, o, s, p) {
      n.push(nr(s));
      var S = null, A = null;
      for (var M in o)
        if (_.call(o, M)) {
          var Q = o[M];
          if (Q == null)
            continue;
          switch (M) {
            case "children":
              S = Q;
              break;
            case "dangerouslySetInnerHTML":
              A = Q;
              break;
            default:
              un(n, p, M, Q);
              break;
          }
        }
      return n.push(bn), w(n, A, S), typeof S == "string" ? (n.push(lt(S)), null) : S;
    }
    function ir(n, o, s, p) {
      n.push(nr(s));
      var S = null, A = null;
      for (var M in o)
        if (_.call(o, M)) {
          var Q = o[M];
          if (Q == null)
            continue;
          switch (M) {
            case "children":
              S = Q;
              break;
            case "dangerouslySetInnerHTML":
              A = Q;
              break;
            case "style":
              mn(n, p, Q);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ie(M) && typeof Q != "function" && typeof Q != "symbol" && n.push(Nt, M, ln, Kt(Q), yn);
              break;
          }
        }
      return n.push(bn), w(n, A, S), S;
    }
    var yr = `
`;
    function Jo(n, o, s, p) {
      n.push(nr(s));
      var S = null, A = null;
      for (var M in o)
        if (_.call(o, M)) {
          var Q = o[M];
          if (Q == null)
            continue;
          switch (M) {
            case "children":
              S = Q;
              break;
            case "dangerouslySetInnerHTML":
              A = Q;
              break;
            default:
              un(n, p, M, Q);
              break;
          }
        }
      if (n.push(bn), A != null) {
        if (S != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof A != "object" || !("__html" in A))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var he = A.__html;
        he != null && (typeof he == "string" && he.length > 0 && he[0] === `
` ? n.push(yr, he) : (L(he), n.push("" + he)));
      }
      return typeof S == "string" && S[0] === `
` && n.push(yr), S;
    }
    var el = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, oa = /* @__PURE__ */ new Map();
    function nr(n) {
      var o = oa.get(n);
      if (o === void 0) {
        if (!el.test(n))
          throw new Error("Invalid tag: " + n);
        o = "<" + n, oa.set(n, o);
      }
      return o;
    }
    var tl = "<!DOCTYPE html>";
    function or(n, o, s, p, S) {
      switch (yt(o, s), ze(o, s), Gt(o, s, null), !s.suppressContentEditableWarning && s.contentEditable && s.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), S.insertionMode !== Te && S.insertionMode !== We && o.indexOf("-") === -1 && typeof s.is != "string" && o.toLowerCase() !== o && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o), o) {
        case "select":
          return te(n, s, p);
        case "option":
          return Re(n, s, p, S);
        case "textarea":
          return gn(n, s, p);
        case "input":
          return ht(n, s, p);
        case "menuitem":
          return ar(n, s, p);
        case "title":
          return Nn(n, s, p);
        case "listing":
        case "pre":
          return Jo(n, s, o, p);
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
          return Rn(n, s, o, p);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return mr(n, s, o, p);
        case "html":
          return S.insertionMode === tt && n.push(tl), mr(n, s, o, p);
        default:
          return o.indexOf("-") === -1 && typeof s.is != "string" ? mr(n, s, o, p) : ir(n, s, o, p);
      }
    }
    var Ha = "</", la = ">";
    function qt(n, o, s) {
      switch (o) {
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
          n.push(Ha, o, la);
      }
    }
    function gr(n, o) {
      for (var s = o.bootstrapChunks, p = 0; p < s.length - 1; p++)
        u(n, s[p]);
      return p < s.length ? h(n, s[p]) : !0;
    }
    var sa = '<template id="', vr = '"></template>';
    function cr(n, o, s) {
      u(n, sa), u(n, o.placeholderPrefix);
      var p = s.toString(16);
      return u(n, p), h(n, vr);
    }
    var ca = "<!--$-->", ur = '<!--$?--><template id="', Kn = '"></template>', Wa = "<!--$!-->", jr = "<!--/$-->", $i = "<template", ua = '"', Bi = ' data-dgst="', nl = ' data-msg="', rl = ' data-stck="', da = "></template>";
    function Hi(n, o) {
      return h(n, ca);
    }
    function Ur(n, o, s) {
      if (u(n, ur), s === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return u(n, s), h(n, Kn);
    }
    function Va(n, o, s, p, S) {
      var A;
      return A = h(n, Wa), u(n, $i), s && (u(n, Bi), u(n, Kt(s)), u(n, ua)), p && (u(n, nl), u(n, Kt(p)), u(n, ua)), S && (u(n, rl), u(n, Kt(S)), u(n, ua)), A = h(n, da), A;
    }
    function al(n, o) {
      return h(n, jr);
    }
    function Ar(n, o) {
      return h(n, jr);
    }
    function ja(n, o) {
      return h(n, jr);
    }
    var Ua = '<div hidden id="', Lr = '">', Kr = "</div>", fa = '<svg aria-hidden="true" style="display:none" id="', Wi = '">', Vi = "</svg>", ji = '<math aria-hidden="true" style="display:none" id="', pa = '">', $n = "</math>", Ui = '<table hidden id="', ha = '">', il = "</table>", Ki = '<table hidden><tbody id="', ma = '">', Yi = "</tbody></table>", Xi = '<table hidden><tr id="', ya = '">', ga = "</tr></table>", qi = '<table hidden><colgroup id="', Gi = '">', Zi = "</colgroup></table>";
    function Ka(n, o, s, p) {
      switch (s.insertionMode) {
        case tt:
        case z:
          return u(n, Ua), u(n, o.segmentPrefix), u(n, p.toString(16)), h(n, Lr);
        case Te:
          return u(n, fa), u(n, o.segmentPrefix), u(n, p.toString(16)), h(n, Wi);
        case We:
          return u(n, ji), u(n, o.segmentPrefix), u(n, p.toString(16)), h(n, pa);
        case Me:
          return u(n, Ui), u(n, o.segmentPrefix), u(n, p.toString(16)), h(n, ha);
        case Qe:
          return u(n, Ki), u(n, o.segmentPrefix), u(n, p.toString(16)), h(n, ma);
        case Ze:
          return u(n, Xi), u(n, o.segmentPrefix), u(n, p.toString(16)), h(n, ya);
        case mt:
          return u(n, qi), u(n, o.segmentPrefix), u(n, p.toString(16)), h(n, Gi);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Qi(n, o) {
      switch (o.insertionMode) {
        case tt:
        case z:
          return h(n, Kr);
        case Te:
          return h(n, Vi);
        case We:
          return h(n, $n);
        case Me:
          return h(n, il);
        case Qe:
          return h(n, Yi);
        case Ze:
          return h(n, ga);
        case mt:
          return h(n, Zi);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var x = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", T = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', F = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', K = x + ';$RS("', xe = '$RS("', me = '","', Ae = '")<\/script>';
    function Ve(n, o, s) {
      u(n, o.startInlineScript), o.sentCompleteSegmentFunction ? u(n, xe) : (o.sentCompleteSegmentFunction = !0, u(n, K)), u(n, o.segmentPrefix);
      var p = s.toString(16);
      return u(n, p), u(n, me), u(n, o.placeholderPrefix), u(n, p), h(n, Ae);
    }
    var pt = T + ';$RC("', Tt = '$RC("', kt = '","', Zt = '")<\/script>';
    function Bn(n, o, s, p) {
      if (u(n, o.startInlineScript), o.sentCompleteBoundaryFunction ? u(n, Tt) : (o.sentCompleteBoundaryFunction = !0, u(n, pt)), s === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var S = p.toString(16);
      return u(n, s), u(n, kt), u(n, o.segmentPrefix), u(n, S), h(n, Zt);
    }
    var Yn = F + ';$RX("', Xn = '$RX("', va = '"', Ji = ")<\/script>", Yr = ",";
    function xu(n, o, s, p, S, A) {
      if (u(n, o.startInlineScript), o.sentClientRenderFunction ? u(n, Xn) : (o.sentClientRenderFunction = !0, u(n, Yn)), s === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return u(n, s), u(n, va), (p || S || A) && (u(n, Yr), u(n, ol(p || ""))), (S || A) && (u(n, Yr), u(n, ol(S || ""))), A && (u(n, Yr), u(n, ol(A))), h(n, Ji);
    }
    var bu = /[<\u2028\u2029]/g;
    function ol(n) {
      var o = JSON.stringify(n);
      return o.replace(bu, function(s) {
        switch (s) {
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
    function Su(n, o) {
      var s = at(o);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: s.bootstrapChunks,
        startInlineScript: s.startInlineScript,
        placeholderPrefix: s.placeholderPrefix,
        segmentPrefix: s.segmentPrefix,
        boundaryPrefix: s.boundaryPrefix,
        idPrefix: s.idPrefix,
        nextSuspenseID: s.nextSuspenseID,
        sentCompleteSegmentFunction: s.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: s.sentCompleteBoundaryFunction,
        sentClientRenderFunction: s.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: n
      };
    }
    function Eu() {
      return {
        insertionMode: z,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function gs(n, o, s, p) {
      return s.generateStaticMarkup ? (n.push(Kt(o)), !1) : At(n, o, s, p);
    }
    function vs(n, o, s, p) {
      if (!o.generateStaticMarkup)
        return Ht(n, o, s, p);
    }
    function ku(n, o) {
      return o.generateStaticMarkup ? !0 : Hi(n);
    }
    function Ru(n, o, s, p, S) {
      return o.generateStaticMarkup ? !0 : Va(n, o, s, p, S);
    }
    function wu(n, o) {
      return o.generateStaticMarkup ? !0 : al(n);
    }
    function Tu(n, o) {
      return o.generateStaticMarkup ? !0 : ja(n);
    }
    var Vn = Object.assign, Cu = Symbol.for("react.element"), xs = Symbol.for("react.portal"), eo = Symbol.for("react.fragment"), qn = Symbol.for("react.strict_mode"), bs = Symbol.for("react.profiler"), to = Symbol.for("react.provider"), no = Symbol.for("react.context"), ro = Symbol.for("react.forward_ref"), ao = Symbol.for("react.suspense"), Ya = Symbol.for("react.suspense_list"), Xa = Symbol.for("react.memo"), xa = Symbol.for("react.lazy"), ll = Symbol.for("react.scope"), sl = Symbol.for("react.debug_trace_mode"), cl = Symbol.for("react.legacy_hidden"), io = Symbol.for("react.default_value"), Ss = Symbol.iterator, Au = "@@iterator";
    function Lu(n) {
      if (n === null || typeof n != "object")
        return null;
      var o = Ss && n[Ss] || n[Au];
      return typeof o == "function" ? o : null;
    }
    function Pu(n, o, s) {
      var p = n.displayName;
      if (p)
        return p;
      var S = o.displayName || o.name || "";
      return S !== "" ? s + "(" + S + ")" : s;
    }
    function ul(n) {
      return n.displayName || "Context";
    }
    function pn(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case eo:
          return "Fragment";
        case xs:
          return "Portal";
        case bs:
          return "Profiler";
        case qn:
          return "StrictMode";
        case ao:
          return "Suspense";
        case Ya:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case no:
            var o = n;
            return ul(o) + ".Consumer";
          case to:
            var s = n;
            return ul(s._context) + ".Provider";
          case ro:
            return Pu(n, n.render, "ForwardRef");
          case Xa:
            var p = n.displayName || null;
            return p !== null ? p : pn(n.type) || "Memo";
          case xa: {
            var S = n, A = S._payload, M = S._init;
            try {
              return pn(M(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qa = 0, Es, dl, dn, ba, fl, pl, hl;
    function ml() {
    }
    ml.__reactDisabledLog = !0;
    function ks() {
      {
        if (qa === 0) {
          Es = console.log, dl = console.info, dn = console.warn, ba = console.error, fl = console.group, pl = console.groupCollapsed, hl = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ml,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        qa++;
      }
    }
    function Rs() {
      {
        if (qa--, qa === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Vn({}, n, {
              value: Es
            }),
            info: Vn({}, n, {
              value: dl
            }),
            warn: Vn({}, n, {
              value: dn
            }),
            error: Vn({}, n, {
              value: ba
            }),
            group: Vn({}, n, {
              value: fl
            }),
            groupCollapsed: Vn({}, n, {
              value: pl
            }),
            groupEnd: Vn({}, n, {
              value: hl
            })
          });
        }
        qa < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oo = r.ReactCurrentDispatcher, lo;
    function Ga(n, o, s) {
      {
        if (lo === void 0)
          try {
            throw Error();
          } catch (S) {
            var p = S.stack.trim().match(/\n( *(at )?)/);
            lo = p && p[1] || "";
          }
        return `
` + lo + n;
      }
    }
    var yl = !1, Sa;
    {
      var gl = typeof WeakMap == "function" ? WeakMap : Map;
      Sa = new gl();
    }
    function Xr(n, o) {
      if (!n || yl)
        return "";
      {
        var s = Sa.get(n);
        if (s !== void 0)
          return s;
      }
      var p;
      yl = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = oo.current, oo.current = null, ks();
      try {
        if (o) {
          var M = function() {
            throw Error();
          };
          if (Object.defineProperty(M.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(M, []);
            } catch (Dn) {
              p = Dn;
            }
            Reflect.construct(n, [], M);
          } else {
            try {
              M.call();
            } catch (Dn) {
              p = Dn;
            }
            n.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dn) {
            p = Dn;
          }
          n();
        }
      } catch (Dn) {
        if (Dn && p && typeof Dn.stack == "string") {
          for (var Q = Dn.stack.split(`
`), he = p.stack.split(`
`), _e = Q.length - 1, Ie = he.length - 1; _e >= 1 && Ie >= 0 && Q[_e] !== he[Ie]; )
            Ie--;
          for (; _e >= 1 && Ie >= 0; _e--, Ie--)
            if (Q[_e] !== he[Ie]) {
              if (_e !== 1 || Ie !== 1)
                do
                  if (_e--, Ie--, Ie < 0 || Q[_e] !== he[Ie]) {
                    var Xe = `
` + Q[_e].replace(" at new ", " at ");
                    return n.displayName && Xe.includes("<anonymous>") && (Xe = Xe.replace("<anonymous>", n.displayName)), typeof n == "function" && Sa.set(n, Xe), Xe;
                  }
                while (_e >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        yl = !1, oo.current = A, Rs(), Error.prepareStackTrace = S;
      }
      var gt = n ? n.displayName || n.name : "", zt = gt ? Ga(gt) : "";
      return typeof n == "function" && Sa.set(n, zt), zt;
    }
    function vl(n, o, s) {
      return Xr(n, !0);
    }
    function Za(n, o, s) {
      return Xr(n, !1);
    }
    function Du(n) {
      var o = n.prototype;
      return !!(o && o.isReactComponent);
    }
    function Qa(n, o, s) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Xr(n, Du(n));
      if (typeof n == "string")
        return Ga(n);
      switch (n) {
        case ao:
          return Ga("Suspense");
        case Ya:
          return Ga("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case ro:
            return Za(n.render);
          case Xa:
            return Qa(n.type, o, s);
          case xa: {
            var p = n, S = p._payload, A = p._init;
            try {
              return Qa(A(S), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ws = {}, xl = r.ReactDebugCurrentFrame;
    function so(n) {
      if (n) {
        var o = n._owner, s = Qa(n.type, n._source, o ? o.type : null);
        xl.setExtraStackFrame(s);
      } else
        xl.setExtraStackFrame(null);
    }
    function co(n, o, s, p, S) {
      {
        var A = Function.call.bind(_);
        for (var M in n)
          if (A(n, M)) {
            var Q = void 0;
            try {
              if (typeof n[M] != "function") {
                var he = Error((p || "React class") + ": " + s + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw he.name = "Invariant Violation", he;
              }
              Q = n[M](o, M, p, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              Q = _e;
            }
            Q && !(Q instanceof Error) && (so(S), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", s, M, typeof Q), so(null)), Q instanceof Error && !(Q.message in ws) && (ws[Q.message] = !0, so(S), a("Failed %s type: %s", s, Q.message), so(null));
          }
      }
    }
    var uo;
    uo = {};
    var Ja = {};
    Object.freeze(Ja);
    function ei(n, o) {
      {
        var s = n.contextTypes;
        if (!s)
          return Ja;
        var p = {};
        for (var S in s)
          p[S] = o[S];
        {
          var A = pn(n) || "Unknown";
          co(s, p, "context", A);
        }
        return p;
      }
    }
    function Ts(n, o, s, p) {
      {
        if (typeof n.getChildContext != "function") {
          {
            var S = pn(o) || "Unknown";
            uo[S] || (uo[S] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", S, S));
          }
          return s;
        }
        var A = n.getChildContext();
        for (var M in A)
          if (!(M in p))
            throw new Error((pn(o) || "Unknown") + '.getChildContext(): key "' + M + '" is not defined in childContextTypes.');
        {
          var Q = pn(o) || "Unknown";
          co(p, A, "child context", Q);
        }
        return Vn({}, s, A);
      }
    }
    var qr;
    qr = {};
    var fo = null, Pr = null;
    function bl(n) {
      n.context._currentValue2 = n.parentValue;
    }
    function Gr(n) {
      n.context._currentValue2 = n.value;
    }
    function po(n, o) {
      if (n !== o) {
        bl(n);
        var s = n.parent, p = o.parent;
        if (s === null) {
          if (p !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (p === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          po(s, p);
        }
        Gr(o);
      }
    }
    function Dr(n) {
      bl(n);
      var o = n.parent;
      o !== null && Dr(o);
    }
    function ho(n) {
      var o = n.parent;
      o !== null && ho(o), Gr(n);
    }
    function mo(n, o) {
      bl(n);
      var s = n.parent;
      if (s === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      s.depth === o.depth ? po(s, o) : mo(s, o);
    }
    function ti(n, o) {
      var s = o.parent;
      if (s === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === s.depth ? po(n, s) : ti(n, s), Gr(o);
    }
    function ni(n) {
      var o = Pr, s = n;
      o !== s && (o === null ? ho(s) : s === null ? Dr(o) : o.depth === s.depth ? po(o, s) : o.depth > s.depth ? mo(o, s) : ti(o, s), Pr = s);
    }
    function Cs(n, o) {
      var s;
      s = n._currentValue2, n._currentValue2 = o, n._currentRenderer2 !== void 0 && n._currentRenderer2 !== null && n._currentRenderer2 !== qr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer2 = qr;
      var p = Pr, S = {
        parent: p,
        depth: p === null ? 0 : p.depth + 1,
        context: n,
        parentValue: s,
        value: o
      };
      return Pr = S, S;
    }
    function As(n) {
      var o = Pr;
      if (o === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      o.context !== n && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var s = o.parentValue;
        s === io ? o.context._currentValue2 = o.context._defaultValue : o.context._currentValue2 = s, n._currentRenderer2 !== void 0 && n._currentRenderer2 !== null && n._currentRenderer2 !== qr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer2 = qr;
      }
      return Pr = o.parent;
    }
    function Ls() {
      return Pr;
    }
    function _r(n) {
      var o = n._currentValue2;
      return o;
    }
    function Sl(n) {
      return n._reactInternals;
    }
    function _u(n, o) {
      n._reactInternals = o;
    }
    var Ps = {}, Ea = {}, ri, El, yo, go, vo, ka, ai, ii, xo;
    {
      ri = /* @__PURE__ */ new Set(), El = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), ai = /* @__PURE__ */ new Set(), go = /* @__PURE__ */ new Set(), ii = /* @__PURE__ */ new Set(), xo = /* @__PURE__ */ new Set();
      var oi = /* @__PURE__ */ new Set();
      ka = function(n, o) {
        if (!(n === null || typeof n == "function")) {
          var s = o + "_" + n;
          oi.has(s) || (oi.add(s), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o, n));
        }
      }, vo = function(n, o) {
        if (o === void 0) {
          var s = pn(n) || "Component";
          go.has(s) || (go.add(s), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", s));
        }
      };
    }
    function bo(n, o) {
      {
        var s = n.constructor, p = s && pn(s) || "ReactClass", S = p + "." + o;
        if (Ps[S])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, o, o, p), Ps[S] = !0;
      }
    }
    var So = {
      isMounted: function(n) {
        return !1;
      },
      enqueueSetState: function(n, o, s) {
        var p = Sl(n);
        p.queue === null ? bo(n, "setState") : (p.queue.push(o), s != null && ka(s, "setState"));
      },
      enqueueReplaceState: function(n, o, s) {
        var p = Sl(n);
        p.replace = !0, p.queue = [o], s != null && ka(s, "setState");
      },
      enqueueForceUpdate: function(n, o) {
        var s = Sl(n);
        s.queue === null ? bo(n, "forceUpdate") : o != null && ka(o, "setState");
      }
    };
    function kl(n, o, s, p, S) {
      var A = s(S, p);
      vo(o, A);
      var M = A == null ? p : Vn({}, p, A);
      return M;
    }
    function Ds(n, o, s) {
      var p = Ja, S = n.contextType;
      if ("contextType" in n) {
        var A = (
          // Allow null for conditional declaration
          S === null || S !== void 0 && S.$$typeof === no && S._context === void 0
        );
        if (!A && !xo.has(n)) {
          xo.add(n);
          var M = "";
          S === void 0 ? M = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof S != "object" ? M = " However, it is set to a " + typeof S + "." : S.$$typeof === to ? M = " Did you accidentally pass the Context.Provider instead?" : S._context !== void 0 ? M = " Did you accidentally pass the Context.Consumer instead?" : M = " However, it is set to an object with keys {" + Object.keys(S).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", pn(n) || "Component", M);
        }
      }
      typeof S == "object" && S !== null ? p = _r(S) : p = s;
      var Q = new n(o, p);
      {
        if (typeof n.getDerivedStateFromProps == "function" && (Q.state === null || Q.state === void 0)) {
          var he = pn(n) || "Component";
          ri.has(he) || (ri.add(he), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", he, Q.state === null ? "null" : "undefined", he));
        }
        if (typeof n.getDerivedStateFromProps == "function" || typeof Q.getSnapshotBeforeUpdate == "function") {
          var _e = null, Ie = null, Xe = null;
          if (typeof Q.componentWillMount == "function" && Q.componentWillMount.__suppressDeprecationWarning !== !0 ? _e = "componentWillMount" : typeof Q.UNSAFE_componentWillMount == "function" && (_e = "UNSAFE_componentWillMount"), typeof Q.componentWillReceiveProps == "function" && Q.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Ie = "componentWillReceiveProps" : typeof Q.UNSAFE_componentWillReceiveProps == "function" && (Ie = "UNSAFE_componentWillReceiveProps"), typeof Q.componentWillUpdate == "function" && Q.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Xe = "componentWillUpdate" : typeof Q.UNSAFE_componentWillUpdate == "function" && (Xe = "UNSAFE_componentWillUpdate"), _e !== null || Ie !== null || Xe !== null) {
            var gt = pn(n) || "Component", zt = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            yo.has(gt) || (yo.add(gt), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, gt, zt, _e !== null ? `
  ` + _e : "", Ie !== null ? `
  ` + Ie : "", Xe !== null ? `
  ` + Xe : ""));
          }
        }
      }
      return Q;
    }
    function _s(n, o, s) {
      {
        var p = pn(o) || "Component", S = n.render;
        S || (o.prototype && typeof o.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", p) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", p)), n.getInitialState && !n.getInitialState.isReactClassApproved && !n.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", p), n.getDefaultProps && !n.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", p), n.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", p), n.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", p), n.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", p), o.contextType && o.contextTypes && !ii.has(o) && (ii.add(o), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", p)), typeof n.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", p), o.prototype && o.prototype.isPureReactComponent && typeof n.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", pn(o) || "A pure component"), typeof n.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", p), typeof n.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", p), typeof n.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", p), typeof n.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", p);
        var A = n.props !== s;
        n.props !== void 0 && A && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", p, p), n.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", p, p), typeof n.getSnapshotBeforeUpdate == "function" && typeof n.componentDidUpdate != "function" && !El.has(o) && (El.add(o), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", pn(o))), typeof n.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", p), typeof n.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", p), typeof o.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", p);
        var M = n.state;
        M && (typeof M != "object" || xn(M)) && a("%s.state: must be set to an object or null", p), typeof n.getChildContext == "function" && typeof o.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", p);
      }
    }
    function Os(n, o) {
      var s = o.state;
      if (typeof o.componentWillMount == "function") {
        if (o.componentWillMount.__suppressDeprecationWarning !== !0) {
          var p = pn(n) || "Unknown";
          Ea[p] || (i(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            p
          ), Ea[p] = !0);
        }
        o.componentWillMount();
      }
      typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), s !== o.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", pn(n) || "Component"), So.enqueueReplaceState(o, o.state, null));
    }
    function Ou(n, o, s, p) {
      if (n.queue !== null && n.queue.length > 0) {
        var S = n.queue, A = n.replace;
        if (n.queue = null, n.replace = !1, A && S.length === 1)
          o.state = S[0];
        else {
          for (var M = A ? S[0] : o.state, Q = !0, he = A ? 1 : 0; he < S.length; he++) {
            var _e = S[he], Ie = typeof _e == "function" ? _e.call(o, M, s, p) : _e;
            Ie != null && (Q ? (Q = !1, M = Vn({}, M, Ie)) : Vn(M, Ie));
          }
          o.state = M;
        }
      } else
        n.queue = null;
    }
    function Ns(n, o, s, p) {
      _s(n, o, s);
      var S = n.state !== void 0 ? n.state : null;
      n.updater = So, n.props = s, n.state = S;
      var A = {
        queue: [],
        replace: !1
      };
      _u(n, A);
      var M = o.contextType;
      if (typeof M == "object" && M !== null ? n.context = _r(M) : n.context = p, n.state === s) {
        var Q = pn(o) || "Component";
        ai.has(Q) || (ai.add(Q), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Q));
      }
      var he = o.getDerivedStateFromProps;
      typeof he == "function" && (n.state = kl(n, o, he, S, s)), typeof o.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function") && (Os(o, n), Ou(A, n, s, p));
    }
    var Nu = {
      id: 1,
      overflow: ""
    };
    function Fu(n) {
      var o = n.overflow, s = n.id, p = s & ~Mu(s);
      return p.toString(32) + o;
    }
    function Rl(n, o, s) {
      var p = n.id, S = n.overflow, A = li(p) - 1, M = p & ~(1 << A), Q = s + 1, he = li(o) + A;
      if (he > 30) {
        var _e = A - A % 5, Ie = (1 << _e) - 1, Xe = (M & Ie).toString(32), gt = M >> _e, zt = A - _e, Dn = li(o) + zt, ra = Q << zt, aa = ra | gt, kr = Xe + S;
        return {
          id: 1 << Dn | aa,
          overflow: kr
        };
      } else {
        var Pa = Q << A, hd = Pa | M, gy = S;
        return {
          id: 1 << he | hd,
          overflow: gy
        };
      }
    }
    function li(n) {
      return 32 - zu(n);
    }
    function Mu(n) {
      return 1 << li(n) - 1;
    }
    var zu = Math.clz32 ? Math.clz32 : Iu, wl = Math.log, Eo = Math.LN2;
    function Iu(n) {
      var o = n >>> 0;
      return o === 0 ? 32 : 31 - (wl(o) / Eo | 0) | 0;
    }
    function $u(n, o) {
      return n === o && (n !== 0 || 1 / n === 1 / o) || n !== n && o !== o;
    }
    var Bu = typeof Object.is == "function" ? Object.is : $u, xr = null, Tl = null, ko = null, rn = null, Gn = !1, Ra = !1, Zr = 0, Ft = null, Or = 0, Ro = 25, Zn = !1, Qn;
    function dr() {
      if (xr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Zn && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), xr;
    }
    function Hu(n, o) {
      if (o === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Qn), !1;
      n.length !== o.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Qn, "[" + n.join(", ") + "]", "[" + o.join(", ") + "]");
      for (var s = 0; s < o.length && s < n.length; s++)
        if (!Bu(n[s], o[s]))
          return !1;
      return !0;
    }
    function lr() {
      if (Or > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Nr() {
      return rn === null ? ko === null ? (Gn = !1, ko = rn = lr()) : (Gn = !0, rn = ko) : rn.next === null ? (Gn = !1, rn = rn.next = lr()) : (Gn = !0, rn = rn.next), rn;
    }
    function Qr(n, o) {
      xr = o, Tl = n, Zn = !1, Zr = 0;
    }
    function Wu(n, o, s, p) {
      for (; Ra; )
        Ra = !1, Zr = 0, Or += 1, rn = null, s = n(o, p);
      return si(), s;
    }
    function Cl() {
      var n = Zr !== 0;
      return n;
    }
    function si() {
      Zn = !1, xr = null, Tl = null, Ra = !1, ko = null, Or = 0, Ft = null, rn = null;
    }
    function Vu(n) {
      return Zn && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), _r(n);
    }
    function ju(n) {
      return Qn = "useContext", dr(), _r(n);
    }
    function wo(n, o) {
      return typeof o == "function" ? o(n) : o;
    }
    function Al(n) {
      return Qn = "useState", Fs(
        wo,
        // useReducer has a special case to support lazy useState initializers
        n
      );
    }
    function Fs(n, o, s) {
      if (n !== wo && (Qn = "useReducer"), xr = dr(), rn = Nr(), Gn) {
        var p = rn.queue, S = p.dispatch;
        if (Ft !== null) {
          var A = Ft.get(p);
          if (A !== void 0) {
            Ft.delete(p);
            var M = rn.memoizedState, Q = A;
            do {
              var he = Q.action;
              Zn = !0, M = n(M, he), Zn = !1, Q = Q.next;
            } while (Q !== null);
            return rn.memoizedState = M, [M, S];
          }
        }
        return [rn.memoizedState, S];
      } else {
        Zn = !0;
        var _e;
        n === wo ? _e = typeof o == "function" ? o() : o : _e = s !== void 0 ? s(o) : o, Zn = !1, rn.memoizedState = _e;
        var Ie = rn.queue = {
          last: null,
          dispatch: null
        }, Xe = Ie.dispatch = zs.bind(null, xr, Ie);
        return [rn.memoizedState, Xe];
      }
    }
    function Ms(n, o) {
      xr = dr(), rn = Nr();
      var s = o === void 0 ? null : o;
      if (rn !== null) {
        var p = rn.memoizedState;
        if (p !== null && s !== null) {
          var S = p[1];
          if (Hu(s, S))
            return p[0];
        }
      }
      Zn = !0;
      var A = n();
      return Zn = !1, rn.memoizedState = [A, s], A;
    }
    function Ll(n) {
      xr = dr(), rn = Nr();
      var o = rn.memoizedState;
      if (o === null) {
        var s = {
          current: n
        };
        return Object.seal(s), rn.memoizedState = s, s;
      } else
        return o;
    }
    function Uu(n, o) {
      Qn = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function zs(n, o, s) {
      if (Or >= Ro)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (n === xr) {
        Ra = !0;
        var p = {
          action: s,
          next: null
        };
        Ft === null && (Ft = /* @__PURE__ */ new Map());
        var S = Ft.get(o);
        if (S === void 0)
          Ft.set(o, p);
        else {
          for (var A = S; A.next !== null; )
            A = A.next;
          A.next = p;
        }
      }
    }
    function Is(n, o) {
      return Ms(function() {
        return n;
      }, o);
    }
    function Ku(n, o, s) {
      return dr(), o(n._source);
    }
    function Yu(n, o, s) {
      if (s === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return s();
    }
    function Xu(n) {
      return dr(), n;
    }
    function qu() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Gu() {
      return dr(), [!1, qu];
    }
    function Zu() {
      var n = Tl, o = Fu(n.treeContext), s = Pl;
      if (s === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var p = Zr++;
      return Pt(s, o, p);
    }
    function To() {
    }
    var $s = {
      readContext: Vu,
      useContext: ju,
      useMemo: Ms,
      useReducer: Fs,
      useRef: Ll,
      useState: Al,
      useInsertionEffect: To,
      useLayoutEffect: Uu,
      useCallback: Is,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: To,
      // Effects are not run in the server environment.
      useEffect: To,
      // Debugging effect
      useDebugValue: To,
      useDeferredValue: Xu,
      useTransition: Gu,
      useId: Zu,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Ku,
      useSyncExternalStore: Yu
    }, Pl = null;
    function Bs(n) {
      Pl = n;
    }
    function Co(n) {
      try {
        var o = "", s = n;
        do {
          switch (s.tag) {
            case 0:
              o += Ga(s.type, null, null);
              break;
            case 1:
              o += Za(s.type, null, null);
              break;
            case 2:
              o += vl(s.type, null, null);
              break;
          }
          s = s.parent;
        } while (s);
        return o;
      } catch (p) {
        return `
Error generating stack: ` + p.message + `
` + p.stack;
      }
    }
    var Ao = r.ReactCurrentDispatcher, ci = r.ReactDebugCurrentFrame, Lo = 0, wa = 1, Po = 2, Do = 3, _o = 4, Ta = 0, Dl = 1, Jr = 2, Hs = 12800;
    function Qu(n) {
      return console.error(n), null;
    }
    function Ca() {
    }
    function Aa(n, o, s, p, S, A, M, Q, he) {
      var _e = [], Ie = /* @__PURE__ */ new Set(), Xe = {
        destination: null,
        responseState: o,
        progressiveChunkSize: p === void 0 ? Hs : p,
        status: Ta,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: Ie,
        pingedTasks: _e,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: S === void 0 ? Qu : S,
        onAllReady: Ca,
        onShellReady: M === void 0 ? Ca : M,
        onShellError: Ca,
        onFatalError: Ca
      }, gt = Oo(
        Xe,
        0,
        null,
        s,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      gt.parentFlushed = !0;
      var zt = ea(Xe, n, null, gt, Ie, Ja, fo, Nu);
      return _e.push(zt), Xe;
    }
    function Ju(n, o) {
      var s = n.pingedTasks;
      s.push(o), s.length === 1 && f(function() {
        return Bl(n);
      });
    }
    function ed(n, o) {
      return {
        id: Yt,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: o,
        errorDigest: null
      };
    }
    function ea(n, o, s, p, S, A, M, Q) {
      n.allPendingTasks++, s === null ? n.pendingRootTasks++ : s.pendingTasks++;
      var he = {
        node: o,
        ping: function() {
          return Ju(n, he);
        },
        blockedBoundary: s,
        blockedSegment: p,
        abortSet: S,
        legacyContext: A,
        context: M,
        treeContext: Q
      };
      return he.componentStack = null, S.add(he), he;
    }
    function Oo(n, o, s, p, S, A) {
      return {
        status: Lo,
        id: -1,
        // lazily assigned later
        index: o,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: p,
        boundary: s,
        lastPushedText: S,
        textEmbedded: A
      };
    }
    var br = null;
    function _l() {
      return br === null || br.componentStack === null ? "" : Co(br.componentStack);
    }
    function ta(n, o) {
      n.componentStack = {
        tag: 0,
        parent: n.componentStack,
        type: o
      };
    }
    function ui(n, o) {
      n.componentStack = {
        tag: 1,
        parent: n.componentStack,
        type: o
      };
    }
    function Sr(n, o) {
      n.componentStack = {
        tag: 2,
        parent: n.componentStack,
        type: o
      };
    }
    function fr(n) {
      n.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : n.componentStack = n.componentStack.parent;
    }
    var Er = null;
    function No(n, o) {
      {
        var s;
        typeof o == "string" ? s = o : o && typeof o.message == "string" ? s = o.message : s = String(o);
        var p = Er || _l();
        Er = null, n.errorMessage = s, n.errorComponentStack = p;
      }
    }
    function di(n, o) {
      var s = n.onError(o);
      if (s != null && typeof s != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof s + '" instead');
      return s;
    }
    function sr(n, o) {
      var s = n.onShellError;
      s(o);
      var p = n.onFatalError;
      p(o), n.destination !== null ? (n.status = Jr, k(n.destination, o)) : (n.status = Dl, n.fatalError = o);
    }
    function fi(n, o, s) {
      ta(o, "Suspense");
      var p = o.blockedBoundary, S = o.blockedSegment, A = s.fallback, M = s.children, Q = /* @__PURE__ */ new Set(), he = ed(n, Q), _e = S.chunks.length, Ie = Oo(
        n,
        _e,
        he,
        S.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      S.children.push(Ie), S.lastPushedText = !1;
      var Xe = Oo(
        n,
        0,
        null,
        S.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Xe.parentFlushed = !0, o.blockedBoundary = he, o.blockedSegment = Xe;
      try {
        if (Hn(n, o, M), vs(Xe.chunks, n.responseState, Xe.lastPushedText, Xe.textEmbedded), Xe.status = wa, La(he, Xe), he.pendingTasks === 0) {
          fr(o);
          return;
        }
      } catch (zt) {
        Xe.status = _o, he.forceClientRender = !0, he.errorDigest = di(n, zt), No(he, zt);
      } finally {
        o.blockedBoundary = p, o.blockedSegment = S;
      }
      var gt = ea(n, A, p, Ie, Q, o.legacyContext, o.context, o.treeContext);
      gt.componentStack = o.componentStack, n.pingedTasks.push(gt), fr(o);
    }
    function Ol(n, o, s, p) {
      ta(o, s);
      var S = o.blockedSegment, A = or(S.chunks, s, p, n.responseState, S.formatContext);
      S.lastPushedText = !1;
      var M = S.formatContext;
      S.formatContext = Ye(M, s, p), Hn(n, o, A), S.formatContext = M, qt(S.chunks, s), S.lastPushedText = !1, fr(o);
    }
    function pi(n) {
      return n.prototype && n.prototype.isReactComponent;
    }
    function hi(n, o, s, p, S) {
      var A = {};
      Qr(o, A);
      var M = s(p, S);
      return Wu(s, p, M, S);
    }
    function Ws(n, o, s, p, S) {
      var A = s.render();
      s.props !== S && (Fl || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", pn(p) || "a component"), Fl = !0);
      {
        var M = p.childContextTypes;
        if (M != null) {
          var Q = o.legacyContext, he = Ts(s, p, Q, M);
          o.legacyContext = he, Jn(n, o, A), o.legacyContext = Q;
          return;
        }
      }
      Jn(n, o, A);
    }
    function td(n, o, s, p) {
      Sr(o, s);
      var S = ei(s, o.legacyContext), A = Ds(s, p, S);
      Ns(A, s, p, S), Ws(n, o, A, s, p), fr(o);
    }
    var Vs = {}, mi = {}, Nl = {}, js = {}, Fl = !1, yi = !1, Ml = !1, zl = !1;
    function Us(n, o, s, p) {
      var S;
      if (S = ei(s, o.legacyContext), ui(o, s), s.prototype && typeof s.prototype.render == "function") {
        var A = pn(s) || "Unknown";
        Vs[A] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", A, A), Vs[A] = !0);
      }
      var M = hi(n, o, s, p, S), Q = Cl();
      if (typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0) {
        var he = pn(s) || "Unknown";
        mi[he] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", he, he, he), mi[he] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof M == "object" && M !== null && typeof M.render == "function" && M.$$typeof === void 0
      ) {
        {
          var _e = pn(s) || "Unknown";
          mi[_e] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _e, _e, _e), mi[_e] = !0);
        }
        Ns(M, s, p, S), Ws(n, o, M, s, p);
      } else if (Ks(s), Q) {
        var Ie = o.treeContext, Xe = 1, gt = 0;
        o.treeContext = Rl(Ie, Xe, gt);
        try {
          Jn(n, o, M);
        } finally {
          o.treeContext = Ie;
        }
      } else
        Jn(n, o, M);
      fr(o);
    }
    function Ks(n) {
      {
        if (n && n.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), typeof n.getDerivedStateFromProps == "function") {
          var o = pn(n) || "Unknown";
          js[o] || (a("%s: Function components do not support getDerivedStateFromProps.", o), js[o] = !0);
        }
        if (typeof n.contextType == "object" && n.contextType !== null) {
          var s = pn(n) || "Unknown";
          Nl[s] || (a("%s: Function components do not support contextType.", s), Nl[s] = !0);
        }
      }
    }
    function Il(n, o) {
      if (n && n.defaultProps) {
        var s = Vn({}, o), p = n.defaultProps;
        for (var S in p)
          s[S] === void 0 && (s[S] = p[S]);
        return s;
      }
      return o;
    }
    function Ys(n, o, s, p, S) {
      ui(o, s.render);
      var A = hi(n, o, s.render, p, S), M = Cl();
      if (M) {
        var Q = o.treeContext, he = 1, _e = 0;
        o.treeContext = Rl(Q, he, _e);
        try {
          Jn(n, o, A);
        } finally {
          o.treeContext = Q;
        }
      } else
        Jn(n, o, A);
      fr(o);
    }
    function nd(n, o, s, p, S) {
      var A = s.type, M = Il(A, p);
      $l(n, o, A, M, S);
    }
    function rd(n, o, s, p) {
      s._context === void 0 ? s !== s.Consumer && (zl || (zl = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : s = s._context;
      var S = p.children;
      typeof S != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var A = _r(s), M = S(A);
      Jn(n, o, M);
    }
    function Xs(n, o, s, p) {
      var S = s._context, A = p.value, M = p.children, Q;
      Q = o.context, o.context = Cs(S, A), Jn(n, o, M), o.context = As(S), Q !== o.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function ad(n, o, s, p, S) {
      ta(o, "Lazy");
      var A = s._payload, M = s._init, Q = M(A), he = Il(Q, p);
      $l(n, o, Q, he, S), fr(o);
    }
    function $l(n, o, s, p, S) {
      if (typeof s == "function")
        if (pi(s)) {
          td(n, o, s, p);
          return;
        } else {
          Us(n, o, s, p);
          return;
        }
      if (typeof s == "string") {
        Ol(n, o, s, p);
        return;
      }
      switch (s) {
        case cl:
        case sl:
        case qn:
        case bs:
        case eo: {
          Jn(n, o, p.children);
          return;
        }
        case Ya: {
          ta(o, "SuspenseList"), Jn(n, o, p.children), fr(o);
          return;
        }
        case ll:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ao: {
          fi(n, o, p);
          return;
        }
      }
      if (typeof s == "object" && s !== null)
        switch (s.$$typeof) {
          case ro: {
            Ys(n, o, s, p, S);
            return;
          }
          case Xa: {
            nd(n, o, s, p, S);
            return;
          }
          case to: {
            Xs(n, o, s, p);
            return;
          }
          case no: {
            rd(n, o, s, p);
            return;
          }
          case xa: {
            ad(n, o, s, p);
            return;
          }
        }
      var A = "";
      throw (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (s == null ? s : typeof s) + "." + A));
    }
    function id(n, o) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      n[Symbol.toStringTag] === "Generator" && (yi || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), yi = !0), n.entries === o && (Ml || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ml = !0);
    }
    function Jn(n, o, s) {
      try {
        return od(n, o, s);
      } catch (p) {
        throw typeof p == "object" && p !== null && typeof p.then == "function" || (Er = Er !== null ? Er : _l()), p;
      }
    }
    function od(n, o, s) {
      if (o.node = s, typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Cu: {
            var p = s, S = p.type, A = p.props, M = p.ref;
            $l(n, o, S, A, M);
            return;
          }
          case xs:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case xa: {
            var Q = s, he = Q._payload, _e = Q._init, Ie;
            try {
              Ie = _e(he);
            } catch (Pa) {
              throw typeof Pa == "object" && Pa !== null && typeof Pa.then == "function" && ta(o, "Lazy"), Pa;
            }
            Jn(n, o, Ie);
            return;
          }
        }
        if (xn(s)) {
          Fo(n, o, s);
          return;
        }
        var Xe = Lu(s);
        if (Xe) {
          id(s, Xe);
          var gt = Xe.call(s);
          if (gt) {
            var zt = gt.next();
            if (!zt.done) {
              var Dn = [];
              do
                Dn.push(zt.value), zt = gt.next();
              while (!zt.done);
              Fo(n, o, Dn);
              return;
            }
            return;
          }
        }
        var ra = Object.prototype.toString.call(s);
        throw new Error("Objects are not valid as a React child (found: " + (ra === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : ra) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof s == "string") {
        var aa = o.blockedSegment;
        aa.lastPushedText = gs(o.blockedSegment.chunks, s, n.responseState, aa.lastPushedText);
        return;
      }
      if (typeof s == "number") {
        var kr = o.blockedSegment;
        kr.lastPushedText = gs(o.blockedSegment.chunks, "" + s, n.responseState, kr.lastPushedText);
        return;
      }
      typeof s == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Fo(n, o, s) {
      for (var p = s.length, S = 0; S < p; S++) {
        var A = o.treeContext;
        o.treeContext = Rl(A, p, S);
        try {
          Hn(n, o, s[S]);
        } finally {
          o.treeContext = A;
        }
      }
    }
    function ld(n, o, s) {
      var p = o.blockedSegment, S = p.chunks.length, A = Oo(
        n,
        S,
        null,
        p.formatContext,
        // Adopt the parent segment's leading text embed
        p.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      p.children.push(A), p.lastPushedText = !1;
      var M = ea(n, o.node, o.blockedBoundary, A, o.abortSet, o.legacyContext, o.context, o.treeContext);
      o.componentStack !== null && (M.componentStack = o.componentStack.parent);
      var Q = M.ping;
      s.then(Q, Q);
    }
    function Hn(n, o, s) {
      var p = o.blockedSegment.formatContext, S = o.legacyContext, A = o.context, M = null;
      M = o.componentStack;
      try {
        return Jn(n, o, s);
      } catch (Q) {
        if (si(), typeof Q == "object" && Q !== null && typeof Q.then == "function") {
          ld(n, o, Q), o.blockedSegment.formatContext = p, o.legacyContext = S, o.context = A, ni(A), o.componentStack = M;
          return;
        } else
          throw o.blockedSegment.formatContext = p, o.legacyContext = S, o.context = A, ni(A), o.componentStack = M, Q;
      }
    }
    function sd(n, o, s, p) {
      var S = di(n, p);
      if (o === null ? sr(n, p) : (o.pendingTasks--, o.forceClientRender || (o.forceClientRender = !0, o.errorDigest = S, No(o, p), o.parentFlushed && n.clientRenderedBoundaries.push(o))), n.allPendingTasks--, n.allPendingTasks === 0) {
        var A = n.onAllReady;
        A();
      }
    }
    function qs(n) {
      var o = this, s = n.blockedBoundary, p = n.blockedSegment;
      p.status = Do, Zs(o, s, p);
    }
    function Gs(n, o, s) {
      var p = n.blockedBoundary, S = n.blockedSegment;
      if (S.status = Do, p === null)
        o.allPendingTasks--, o.status !== Jr && (o.status = Jr, o.destination !== null && v(o.destination));
      else {
        if (p.pendingTasks--, !p.forceClientRender) {
          p.forceClientRender = !0;
          var A = s === void 0 ? new Error("The render was aborted by the server without a reason.") : s;
          p.errorDigest = o.onError(A);
          {
            var M = "The server did not finish this Suspense boundary: ";
            A && typeof A.message == "string" ? A = M + A.message : A = M + String(A);
            var Q = br;
            br = n;
            try {
              No(p, A);
            } finally {
              br = Q;
            }
          }
          p.parentFlushed && o.clientRenderedBoundaries.push(p);
        }
        if (p.fallbackAbortableTasks.forEach(function(_e) {
          return Gs(_e, o, s);
        }), p.fallbackAbortableTasks.clear(), o.allPendingTasks--, o.allPendingTasks === 0) {
          var he = o.onAllReady;
          he();
        }
      }
    }
    function La(n, o) {
      if (o.chunks.length === 0 && o.children.length === 1 && o.children[0].boundary === null) {
        var s = o.children[0];
        s.id = o.id, s.parentFlushed = !0, s.status === wa && La(n, s);
      } else {
        var p = n.completedSegments;
        p.push(o);
      }
    }
    function Zs(n, o, s) {
      if (o === null) {
        if (s.parentFlushed) {
          if (n.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          n.completedRootSegment = s;
        }
        if (n.pendingRootTasks--, n.pendingRootTasks === 0) {
          n.onShellError = Ca;
          var p = n.onShellReady;
          p();
        }
      } else if (o.pendingTasks--, !o.forceClientRender) {
        if (o.pendingTasks === 0)
          s.parentFlushed && s.status === wa && La(o, s), o.parentFlushed && n.completedBoundaries.push(o), o.fallbackAbortableTasks.forEach(qs, n), o.fallbackAbortableTasks.clear();
        else if (s.parentFlushed && s.status === wa) {
          La(o, s);
          var S = o.completedSegments;
          S.length === 1 && o.parentFlushed && n.partialBoundaries.push(o);
        }
      }
      if (n.allPendingTasks--, n.allPendingTasks === 0) {
        var A = n.onAllReady;
        A();
      }
    }
    function cd(n, o) {
      var s = o.blockedSegment;
      if (s.status === Lo) {
        ni(o.context);
        var p = null;
        p = br, br = o;
        try {
          Jn(n, o, o.node), vs(s.chunks, n.responseState, s.lastPushedText, s.textEmbedded), o.abortSet.delete(o), s.status = wa, Zs(n, o.blockedBoundary, s);
        } catch (A) {
          if (si(), typeof A == "object" && A !== null && typeof A.then == "function") {
            var S = o.ping;
            A.then(S, S);
          } else
            o.abortSet.delete(o), s.status = _o, sd(n, o.blockedBoundary, s, A);
        } finally {
          br = p;
        }
      }
    }
    function Bl(n) {
      if (n.status !== Jr) {
        var o = Ls(), s = Ao.current;
        Ao.current = $s;
        var p;
        p = ci.getCurrentStack, ci.getCurrentStack = _l;
        var S = Pl;
        Bs(n.responseState);
        try {
          var A = n.pingedTasks, M;
          for (M = 0; M < A.length; M++) {
            var Q = A[M];
            cd(n, Q);
          }
          A.splice(0, M), n.destination !== null && zo(n, n.destination);
        } catch (he) {
          di(n, he), sr(n, he);
        } finally {
          Bs(S), Ao.current = s, ci.getCurrentStack = p, s === $s && ni(o);
        }
      }
    }
    function na(n, o, s) {
      switch (s.parentFlushed = !0, s.status) {
        case Lo: {
          var p = s.id = n.nextSegmentId++;
          return s.lastPushedText = !1, s.textEmbedded = !1, cr(o, n.responseState, p);
        }
        case wa: {
          s.status = Po;
          for (var S = !0, A = s.chunks, M = 0, Q = s.children, he = 0; he < Q.length; he++) {
            for (var _e = Q[he]; M < _e.index; M++)
              u(o, A[M]);
            S = gi(n, o, _e);
          }
          for (; M < A.length - 1; M++)
            u(o, A[M]);
          return M < A.length && (S = h(o, A[M])), S;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function gi(n, o, s) {
      var p = s.boundary;
      if (p === null)
        return na(n, o, s);
      if (p.parentFlushed = !0, p.forceClientRender)
        return Ru(o, n.responseState, p.errorDigest, p.errorMessage, p.errorComponentStack), na(n, o, s), Tu(o, n.responseState);
      if (p.pendingTasks > 0) {
        p.rootSegmentID = n.nextSegmentId++, p.completedSegments.length > 0 && n.partialBoundaries.push(p);
        var S = p.id = Mt(n.responseState);
        return Ur(o, n.responseState, S), na(n, o, s), Ar(o, n.responseState);
      } else {
        if (p.byteSize > n.progressiveChunkSize)
          return p.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(p), Ur(o, n.responseState, p.id), na(n, o, s), Ar(o, n.responseState);
        ku(o, n.responseState);
        var A = p.completedSegments;
        if (A.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var M = A[0];
        return gi(n, o, M), wu(o, n.responseState);
      }
    }
    function ud(n, o, s) {
      return xu(o, n.responseState, s.id, s.errorDigest, s.errorMessage, s.errorComponentStack);
    }
    function Hl(n, o, s) {
      return Ka(o, n.responseState, s.formatContext, s.id), gi(n, o, s), Qi(o, s.formatContext);
    }
    function vi(n, o, s) {
      for (var p = s.completedSegments, S = 0; S < p.length; S++) {
        var A = p[S];
        Qs(n, o, s, A);
      }
      return p.length = 0, Bn(o, n.responseState, s.id, s.rootSegmentID);
    }
    function Mo(n, o, s) {
      for (var p = s.completedSegments, S = 0; S < p.length; S++) {
        var A = p[S];
        if (!Qs(n, o, s, A))
          return S++, p.splice(0, S), !1;
      }
      return p.splice(0, S), !0;
    }
    function Qs(n, o, s, p) {
      if (p.status === Po)
        return !0;
      var S = p.id;
      if (S === -1) {
        var A = p.id = s.rootSegmentID;
        if (A === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Hl(n, o, p);
      } else
        return Hl(n, o, p), Ve(o, n.responseState, S);
    }
    function zo(n, o) {
      try {
        var s = n.completedRootSegment;
        s !== null && n.pendingRootTasks === 0 && (gi(n, o, s), n.completedRootSegment = null, gr(o, n.responseState));
        var p = n.clientRenderedBoundaries, S;
        for (S = 0; S < p.length; S++) {
          var A = p[S];
          if (!ud(n, o, A)) {
            n.destination = null, S++, p.splice(0, S);
            return;
          }
        }
        p.splice(0, S);
        var M = n.completedBoundaries;
        for (S = 0; S < M.length; S++) {
          var Q = M[S];
          if (!vi(n, o, Q)) {
            n.destination = null, S++, M.splice(0, S);
            return;
          }
        }
        M.splice(0, S);
        var he = n.partialBoundaries;
        for (S = 0; S < he.length; S++) {
          var _e = he[S];
          if (!Mo(n, o, _e)) {
            n.destination = null, S++, he.splice(0, S);
            return;
          }
        }
        he.splice(0, S);
        var Ie = n.completedBoundaries;
        for (S = 0; S < Ie.length; S++) {
          var Xe = Ie[S];
          if (!vi(n, o, Xe)) {
            n.destination = null, S++, Ie.splice(0, S);
            return;
          }
        }
        Ie.splice(0, S);
      } finally {
        n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), v(o));
      }
    }
    function Js(n) {
      f(function() {
        return Bl(n);
      });
    }
    function dd(n, o) {
      if (n.status === Dl) {
        n.status = Jr, k(o, n.fatalError);
        return;
      }
      if (n.status !== Jr && n.destination === null) {
        n.destination = o;
        try {
          zo(n, o);
        } catch (s) {
          di(n, s), sr(n, s);
        }
      }
    }
    function ec(n, o) {
      try {
        var s = n.abortableTasks;
        s.forEach(function(p) {
          return Gs(p, n, o);
        }), s.clear(), n.destination !== null && zo(n, n.destination);
      } catch (p) {
        di(n, p), sr(n, p);
      }
    }
    function Wl() {
    }
    function tc(n, o, s, p) {
      var S = !1, A = null, M = "", Q = {
        push: function(Xe) {
          return Xe !== null && (M += Xe), !0;
        },
        destroy: function(Xe) {
          S = !0, A = Xe;
        }
      }, he = !1;
      function _e() {
        he = !0;
      }
      var Ie = Aa(n, Su(s, o ? o.identifierPrefix : void 0), Eu(), 1 / 0, Wl, void 0, _e);
      if (Js(Ie), ec(Ie, p), dd(Ie, Q), S)
        throw A;
      if (!he)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return M;
    }
    function fd(n, o) {
      return tc(n, o, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function nc(n, o) {
      return tc(n, o, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function pd() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function c() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    wi.renderToNodeStream = pd, wi.renderToStaticMarkup = nc, wi.renderToStaticNodeStream = c, wi.renderToString = fd, wi.version = t;
  }()), wi;
}
var gc = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kh;
function PS() {
  return kh || (kh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function i(c) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
          o[s - 1] = arguments[s];
        l("warn", c, o);
      }
    }
    function a(c) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
          o[s - 1] = arguments[s];
        l("error", c, o);
      }
    }
    function l(c, n, o) {
      {
        var s = r.ReactDebugCurrentFrame, p = s.getStackAddendum();
        p !== "" && (n += "%s", o = o.concat([p]));
        var S = o.map(function(A) {
          return String(A);
        });
        S.unshift("Warning: " + n), Function.prototype.apply.call(console[c], console, S);
      }
    }
    function f(c) {
      c();
    }
    var d = 512, u = null, h = 0;
    function y(c) {
      u = new Uint8Array(d), h = 0;
    }
    function v(c, n) {
      if (n.length !== 0) {
        if (n.length > d) {
          h > 0 && (c.enqueue(new Uint8Array(u.buffer, 0, h)), u = new Uint8Array(d), h = 0), c.enqueue(n);
          return;
        }
        var o = n, s = u.length - h;
        s < o.length && (s === 0 ? c.enqueue(u) : (u.set(o.subarray(0, s), h), c.enqueue(u), o = o.subarray(s)), u = new Uint8Array(d), h = 0), u.set(o, h), h += o.length;
      }
    }
    function b(c, n) {
      return v(c, n), !0;
    }
    function P(c) {
      u && h > 0 && (c.enqueue(new Uint8Array(u.buffer, 0, h)), u = null, h = 0);
    }
    function k(c) {
      c.close();
    }
    var N = new TextEncoder();
    function R(c) {
      return N.encode(c);
    }
    function m(c) {
      return N.encode(c);
    }
    function O(c, n) {
      typeof c.error == "function" ? c.error(n) : c.close();
    }
    function D(c) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return o;
      }
    }
    function L(c) {
      try {
        return _(c), !1;
      } catch {
        return !0;
      }
    }
    function _(c) {
      return "" + c;
    }
    function C(c, n) {
      if (L(c))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", n, D(c)), _(c);
    }
    function V(c, n) {
      if (L(c))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", n, D(c)), _(c);
    }
    function H(c) {
      if (L(c))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", D(c)), _(c);
    }
    var X = Object.prototype.hasOwnProperty, le = 0, Z = 1, W = 2, U = 3, B = 4, $ = 5, ne = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ie = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", q = new RegExp("^[" + ee + "][" + ie + "]*$"), j = {}, J = {};
    function oe(c) {
      return X.call(J, c) ? !0 : X.call(j, c) ? !1 : q.test(c) ? (J[c] = !0, !0) : (j[c] = !0, a("Invalid attribute name: `%s`", c), !1);
    }
    function De(c, n, o, s) {
      if (o !== null && o.type === le)
        return !1;
      switch (typeof n) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (o !== null)
            return !o.acceptsBooleans;
          var p = c.toLowerCase().slice(0, 5);
          return p !== "data-" && p !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ye(c) {
      return Ee.hasOwnProperty(c) ? Ee[c] : null;
    }
    function de(c, n, o, s, p, S, A) {
      this.acceptsBooleans = n === W || n === U || n === B, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = c, this.type = n, this.sanitizeURL = S, this.removeEmptyString = A;
    }
    var Ee = {}, re = [
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
    re.forEach(function(c) {
      Ee[c] = new de(
        c,
        le,
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
      var n = c[0], o = c[1];
      Ee[n] = new de(
        n,
        Z,
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
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(c) {
      Ee[c] = new de(
        c,
        W,
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
      Ee[c] = new de(
        c,
        W,
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
      Ee[c] = new de(
        c,
        U,
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
      Ee[c] = new de(
        c,
        U,
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
      Ee[c] = new de(
        c,
        B,
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
      Ee[c] = new de(
        c,
        ne,
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
      Ee[c] = new de(
        c,
        $,
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
    var Oe = /[\-\:]([a-z])/g, ve = function(c) {
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
      var n = c.replace(Oe, ve);
      Ee[n] = new de(
        n,
        Z,
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
      var n = c.replace(Oe, ve);
      Ee[n] = new de(
        n,
        Z,
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
      var n = c.replace(Oe, ve);
      Ee[n] = new de(
        n,
        Z,
        !1,
        // mustUseProperty
        c,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(c) {
      Ee[c] = new de(
        c,
        Z,
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
    var ce = "xlinkHref";
    Ee[ce] = new de(
      "xlinkHref",
      Z,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(c) {
      Ee[c] = new de(
        c,
        Z,
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
    var be = {
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
    function G(c, n) {
      return c + n.charAt(0).toUpperCase() + n.substring(1);
    }
    var Pe = ["Webkit", "ms", "Moz", "O"];
    Object.keys(be).forEach(function(c) {
      Pe.forEach(function(n) {
        be[G(n, c)] = be[c];
      });
    });
    var Se = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function je(c, n) {
      Se[n.type] || n.onChange || n.onInput || n.readOnly || n.disabled || n.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), n.onChange || n.readOnly || n.disabled || n.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ke(c, n) {
      if (c.indexOf("-") === -1)
        return typeof n.is == "string";
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
    var Ge = {
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
    }, Be = {}, yt = new RegExp("^(aria)-[" + ie + "]*$"), He = new RegExp("^(aria)[A-Z][" + ie + "]*$");
    function ze(c, n) {
      {
        if (X.call(Be, n) && Be[n])
          return !0;
        if (He.test(n)) {
          var o = "aria-" + n.slice(4).toLowerCase(), s = Ge.hasOwnProperty(o) ? o : null;
          if (s == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", n), Be[n] = !0, !0;
          if (n !== s)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", n, s), Be[n] = !0, !0;
        }
        if (yt.test(n)) {
          var p = n.toLowerCase(), S = Ge.hasOwnProperty(p) ? p : null;
          if (S == null)
            return Be[n] = !0, !1;
          if (n !== S)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", n, S), Be[n] = !0, !0;
        }
      }
      return !0;
    }
    function Fe(c, n) {
      {
        var o = [];
        for (var s in n) {
          var p = ze(c, s);
          p || o.push(s);
        }
        var S = o.map(function(A) {
          return "`" + A + "`";
        }).join(", ");
        o.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, c) : o.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, c);
      }
    }
    function Ne(c, n) {
      Ke(c, n) || Fe(c, n);
    }
    var ot = !1;
    function Ue(c, n) {
      {
        if (c !== "input" && c !== "textarea" && c !== "select")
          return;
        n != null && n.value === null && !ot && (ot = !0, c === "select" && n.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", c) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", c));
      }
    }
    var et = {
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
      var st = {}, Ct = /^on./, Gt = /^on[^A-Z]/, Wt = new RegExp("^(aria)-[" + ie + "]*$"), dt = new RegExp("^(aria)[A-Z][" + ie + "]*$");
      ut = function(c, n, o, s) {
        if (X.call(st, n) && st[n])
          return !0;
        var p = n.toLowerCase();
        if (p === "onfocusin" || p === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), st[n] = !0, !0;
        if (s != null) {
          var S = s.registrationNameDependencies, A = s.possibleRegistrationNames;
          if (S.hasOwnProperty(n))
            return !0;
          var M = A.hasOwnProperty(p) ? A[p] : null;
          if (M != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", n, M), st[n] = !0, !0;
          if (Ct.test(n))
            return a("Unknown event handler property `%s`. It will be ignored.", n), st[n] = !0, !0;
        } else if (Ct.test(n))
          return Gt.test(n) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", n), st[n] = !0, !0;
        if (Wt.test(n) || dt.test(n))
          return !0;
        if (p === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), st[n] = !0, !0;
        if (p === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), st[n] = !0, !0;
        if (p === "is" && o !== null && o !== void 0 && typeof o != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof o), st[n] = !0, !0;
        if (typeof o == "number" && isNaN(o))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", n), st[n] = !0, !0;
        var Q = ye(n), he = Q !== null && Q.type === le;
        if (et.hasOwnProperty(p)) {
          var _e = et[p];
          if (_e !== n)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", n, _e), st[n] = !0, !0;
        } else if (!he && n !== p)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", n, p), st[n] = !0, !0;
        return typeof o == "boolean" && De(n, o, Q) ? (o ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', o, n, n, o, n) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', o, n, n, o, n, n, n), st[n] = !0, !0) : he ? !0 : De(n, o, Q) ? (st[n] = !0, !1) : ((o === "false" || o === "true") && Q !== null && Q.type === U && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", o, n, o === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', n, o), st[n] = !0), !0);
      };
    }
    var Rt = function(c, n, o) {
      {
        var s = [];
        for (var p in n) {
          var S = ut(c, p, n[p], o);
          S || s.push(p);
        }
        var A = s.map(function(M) {
          return "`" + M + "`";
        }).join(", ");
        s.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", A, c) : s.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", A, c);
      }
    };
    function cn(c, n, o) {
      Ke(c, n) || Rt(c, n, o);
    }
    var Jt = function() {
    };
    {
      var jt = /^(?:webkit|moz|o)[A-Z]/, fn = /^-ms-/, Le = /-(.)/g, ft = /;\s*$/, $t = {}, Dt = {}, St = !1, hn = !1, Lt = function(c) {
        return c.replace(Le, function(n, o) {
          return o.toUpperCase();
        });
      }, en = function(c) {
        $t.hasOwnProperty(c) && $t[c] || ($t[c] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          c,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Lt(c.replace(fn, "ms-"))
        ));
      }, an = function(c) {
        $t.hasOwnProperty(c) && $t[c] || ($t[c] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", c, c.charAt(0).toUpperCase() + c.slice(1)));
      }, Sn = function(c, n) {
        Dt.hasOwnProperty(n) && Dt[n] || (Dt[n] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, c, n.replace(ft, "")));
      }, Ut = function(c, n) {
        St || (St = !0, a("`NaN` is an invalid value for the `%s` css style property.", c));
      }, Kt = function(c, n) {
        hn || (hn = !0, a("`Infinity` is an invalid value for the `%s` css style property.", c));
      };
      Jt = function(c, n) {
        c.indexOf("-") > -1 ? en(c) : jt.test(c) ? an(c) : ft.test(n) && Sn(c, n), typeof n == "number" && (isNaN(n) ? Ut(c, n) : isFinite(n) || Kt(c, n));
      };
    }
    var Tn = Jt, _n = /["'&<>]/;
    function Mn(c) {
      H(c);
      var n = "" + c, o = _n.exec(n);
      if (!o)
        return n;
      var s, p = "", S, A = 0;
      for (S = o.index; S < n.length; S++) {
        switch (n.charCodeAt(S)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        A !== S && (p += n.substring(A, S)), A = S + 1, p += s;
      }
      return A !== S ? p + n.substring(A, S) : p;
    }
    function Bt(c) {
      return typeof c == "boolean" || typeof c == "number" ? "" + c : Mn(c);
    }
    var On = /([A-Z])/g, zn = /^ms-/;
    function kn(c) {
      return c.replace(On, "-$1").toLowerCase().replace(zn, "-ms-");
    }
    var xn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, we = !1;
    function at(c) {
      !we && xn.test(c) && (we = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(c)));
    }
    var tt = Array.isArray;
    function z(c) {
      return tt(c);
    }
    var Te = m("<script>"), We = m("<\/script>"), Me = m('<script src="'), Qe = m('<script type="module" src="'), Ze = m('" async=""><\/script>');
    function mt(c) {
      return H(c), ("" + c).replace(xt, Ye);
    }
    var xt = /(<\/|<)(s)(cript)/gi, Ye = function(c, n, o, s) {
      return "" + n + (o === "s" ? "\\u0073" : "\\u0053") + s;
    };
    function Yt(c, n, o, s, p) {
      var S = c === void 0 ? "" : c, A = n === void 0 ? Te : m('<script nonce="' + Bt(n) + '">'), M = [];
      if (o !== void 0 && M.push(A, R(mt(o)), We), s !== void 0)
        for (var Q = 0; Q < s.length; Q++)
          M.push(Me, R(Bt(s[Q])), Ze);
      if (p !== void 0)
        for (var he = 0; he < p.length; he++)
          M.push(Qe, R(Bt(p[he])), Ze);
      return {
        bootstrapChunks: M,
        startInlineScript: A,
        placeholderPrefix: m(S + "P:"),
        segmentPrefix: m(S + "S:"),
        boundaryPrefix: S + "B:",
        idPrefix: S,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Mt = 0, Pt = 1, lt = 2, wt = 3, At = 4, Ht = 5, Ot = 6, on = 7;
    function tn(c, n) {
      return {
        insertionMode: c,
        selectedValue: n
      };
    }
    function nn(c) {
      var n = c === "http://www.w3.org/2000/svg" ? lt : c === "http://www.w3.org/1998/Math/MathML" ? wt : Mt;
      return tn(n, null);
    }
    function Xt(c, n, o) {
      switch (n) {
        case "select":
          return tn(Pt, o.value != null ? o.value : o.defaultValue);
        case "svg":
          return tn(lt, null);
        case "math":
          return tn(wt, null);
        case "foreignObject":
          return tn(Pt, null);
        case "table":
          return tn(At, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return tn(Ht, null);
        case "colgroup":
          return tn(on, null);
        case "tr":
          return tn(Ot, null);
      }
      return c.insertionMode >= At || c.insertionMode === Mt ? tn(Pt, null) : c;
    }
    var mn = null;
    function Nt(c) {
      var n = c.nextSuspenseID++;
      return m(c.boundaryPrefix + n.toString(16));
    }
    function ln(c, n, o) {
      var s = c.idPrefix, p = ":" + s + "R" + n;
      return o > 0 && (p += "H" + o.toString(32)), p + ":";
    }
    function yn(c) {
      return Bt(c);
    }
    var In = m("<!-- -->");
    function un(c, n, o, s) {
      return n === "" ? s : (s && c.push(In), c.push(R(yn(n))), !0);
    }
    function bn(c, n, o, s) {
      o && s && c.push(In);
    }
    var g = /* @__PURE__ */ new Map();
    function w(c) {
      var n = g.get(c);
      if (n !== void 0)
        return n;
      var o = m(Bt(kn(c)));
      return g.set(c, o), o;
    }
    var I = m(' style="'), Y = m(":"), ge = m(";");
    function pe(c, n, o) {
      if (typeof o != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var s = !0;
      for (var p in o)
        if (X.call(o, p)) {
          var S = o[p];
          if (!(S == null || typeof S == "boolean" || S === "")) {
            var A = void 0, M = void 0, Q = p.indexOf("--") === 0;
            Q ? (A = R(Bt(p)), V(S, p), M = R(Bt(("" + S).trim()))) : (Tn(p, S), A = w(p), typeof S == "number" ? S !== 0 && !X.call(be, p) ? M = R(S + "px") : M = R("" + S) : (V(S, p), M = R(Bt(("" + S).trim())))), s ? (s = !1, c.push(I, A, Y, M)) : c.push(ge, A, Y, M);
          }
        }
      s || c.push(rt);
    }
    var ke = m(" "), $e = m('="'), rt = m('"'), ct = m('=""');
    function te(c, n, o, s) {
      switch (o) {
        case "style": {
          pe(c, n, s);
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
        !(o.length > 2 && (o[0] === "o" || o[0] === "O") && (o[1] === "n" || o[1] === "N"))
      ) {
        var p = ye(o);
        if (p !== null) {
          switch (typeof s) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!p.acceptsBooleans)
                return;
          }
          var S = p.attributeName, A = R(S);
          switch (p.type) {
            case U:
              s && c.push(ke, A, ct);
              return;
            case B:
              s === !0 ? c.push(ke, A, ct) : s === !1 || c.push(ke, A, $e, R(Bt(s)), rt);
              return;
            case $:
              isNaN(s) || c.push(ke, A, $e, R(Bt(s)), rt);
              break;
            case ne:
              !isNaN(s) && s >= 1 && c.push(ke, A, $e, R(Bt(s)), rt);
              break;
            default:
              p.sanitizeURL && (C(s, S), s = "" + s, at(s)), c.push(ke, A, $e, R(Bt(s)), rt);
          }
        } else if (oe(o)) {
          switch (typeof s) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var M = o.toLowerCase().slice(0, 5);
              if (M !== "data-" && M !== "aria-")
                return;
            }
          }
          c.push(ke, R(o), $e, R(Bt(s)), rt);
        }
      }
    }
    var ae = m(">"), ue = m("/>");
    function Re(c, n, o) {
      if (n != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof n != "object" || !("__html" in n))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var s = n.__html;
        s != null && (H(s), c.push(R("" + s)));
      }
    }
    var ht = !1, gn = !1, Rn = !1, ar = !1, Nn = !1, mr = !1, ir = !1;
    function yr(c, n) {
      {
        var o = c[n];
        if (o != null) {
          var s = z(o);
          c.multiple && !s ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", n) : !c.multiple && s && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", n);
        }
      }
    }
    function Jo(c, n, o) {
      je("select", n), yr(n, "value"), yr(n, "defaultValue"), n.value !== void 0 && n.defaultValue !== void 0 && !Rn && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Rn = !0), c.push(Kn("select"));
      var s = null, p = null;
      for (var S in n)
        if (X.call(n, S)) {
          var A = n[S];
          if (A == null)
            continue;
          switch (S) {
            case "children":
              s = A;
              break;
            case "dangerouslySetInnerHTML":
              p = A;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              te(c, o, S, A);
              break;
          }
        }
      return c.push(ae), Re(c, p, s), s;
    }
    function el(c) {
      var n = "";
      return e.Children.forEach(c, function(o) {
        o != null && (n += o, !Nn && typeof o != "string" && typeof o != "number" && (Nn = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), n;
    }
    var oa = m(' selected=""');
    function nr(c, n, o, s) {
      var p = s.selectedValue;
      c.push(Kn("option"));
      var S = null, A = null, M = null, Q = null;
      for (var he in n)
        if (X.call(n, he)) {
          var _e = n[he];
          if (_e == null)
            continue;
          switch (he) {
            case "children":
              S = _e;
              break;
            case "selected":
              M = _e, ir || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ir = !0);
              break;
            case "dangerouslySetInnerHTML":
              Q = _e;
              break;
            case "value":
              A = _e;
            default:
              te(c, o, he, _e);
              break;
          }
        }
      if (p != null) {
        var Ie;
        if (A !== null ? (C(A, "value"), Ie = "" + A) : (Q !== null && (mr || (mr = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Ie = el(S)), z(p))
          for (var Xe = 0; Xe < p.length; Xe++) {
            C(p[Xe], "value");
            var gt = "" + p[Xe];
            if (gt === Ie) {
              c.push(oa);
              break;
            }
          }
        else
          C(p, "select.value"), "" + p === Ie && c.push(oa);
      } else
        M && c.push(oa);
      return c.push(ae), Re(c, Q, S), S;
    }
    function tl(c, n, o) {
      je("input", n), n.checked !== void 0 && n.defaultChecked !== void 0 && !gn && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), gn = !0), n.value !== void 0 && n.defaultValue !== void 0 && !ht && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), ht = !0), c.push(Kn("input"));
      var s = null, p = null, S = null, A = null;
      for (var M in n)
        if (X.call(n, M)) {
          var Q = n[M];
          if (Q == null)
            continue;
          switch (M) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              A = Q;
              break;
            case "defaultValue":
              p = Q;
              break;
            case "checked":
              S = Q;
              break;
            case "value":
              s = Q;
              break;
            default:
              te(c, o, M, Q);
              break;
          }
        }
      return S !== null ? te(c, o, "checked", S) : A !== null && te(c, o, "checked", A), s !== null ? te(c, o, "value", s) : p !== null && te(c, o, "value", p), c.push(ue), null;
    }
    function or(c, n, o) {
      je("textarea", n), n.value !== void 0 && n.defaultValue !== void 0 && !ar && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ar = !0), c.push(Kn("textarea"));
      var s = null, p = null, S = null;
      for (var A in n)
        if (X.call(n, A)) {
          var M = n[A];
          if (M == null)
            continue;
          switch (A) {
            case "children":
              S = M;
              break;
            case "value":
              s = M;
              break;
            case "defaultValue":
              p = M;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              te(c, o, A, M);
              break;
          }
        }
      if (s === null && p !== null && (s = p), c.push(ae), S != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), s != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (z(S)) {
          if (S.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          H(S[0]), s = "" + S[0];
        }
        H(S), s = "" + S;
      }
      return typeof s == "string" && s[0] === `
` && c.push(vr), s !== null && (C(s, "value"), c.push(R(yn("" + s)))), null;
    }
    function Ha(c, n, o, s) {
      c.push(Kn(o));
      for (var p in n)
        if (X.call(n, p)) {
          var S = n[p];
          if (S == null)
            continue;
          switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(o + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              te(c, s, p, S);
              break;
          }
        }
      return c.push(ue), null;
    }
    function la(c, n, o) {
      c.push(Kn("menuitem"));
      for (var s in n)
        if (X.call(n, s)) {
          var p = n[s];
          if (p == null)
            continue;
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              te(c, o, s, p);
              break;
          }
        }
      return c.push(ae), null;
    }
    function qt(c, n, o) {
      c.push(Kn("title"));
      var s = null;
      for (var p in n)
        if (X.call(n, p)) {
          var S = n[p];
          if (S == null)
            continue;
          switch (p) {
            case "children":
              s = S;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              te(c, o, p, S);
              break;
          }
        }
      c.push(ae);
      {
        var A = Array.isArray(s) && s.length < 2 ? s[0] || null : s;
        Array.isArray(s) && s.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : A != null && A.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : A != null && typeof A != "string" && typeof A != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return s;
    }
    function gr(c, n, o, s) {
      c.push(Kn(o));
      var p = null, S = null;
      for (var A in n)
        if (X.call(n, A)) {
          var M = n[A];
          if (M == null)
            continue;
          switch (A) {
            case "children":
              p = M;
              break;
            case "dangerouslySetInnerHTML":
              S = M;
              break;
            default:
              te(c, s, A, M);
              break;
          }
        }
      return c.push(ae), Re(c, S, p), typeof p == "string" ? (c.push(R(yn(p))), null) : p;
    }
    function sa(c, n, o, s) {
      c.push(Kn(o));
      var p = null, S = null;
      for (var A in n)
        if (X.call(n, A)) {
          var M = n[A];
          if (M == null)
            continue;
          switch (A) {
            case "children":
              p = M;
              break;
            case "dangerouslySetInnerHTML":
              S = M;
              break;
            case "style":
              pe(c, s, M);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              oe(A) && typeof M != "function" && typeof M != "symbol" && c.push(ke, R(A), $e, R(Bt(M)), rt);
              break;
          }
        }
      return c.push(ae), Re(c, S, p), p;
    }
    var vr = m(`
`);
    function cr(c, n, o, s) {
      c.push(Kn(o));
      var p = null, S = null;
      for (var A in n)
        if (X.call(n, A)) {
          var M = n[A];
          if (M == null)
            continue;
          switch (A) {
            case "children":
              p = M;
              break;
            case "dangerouslySetInnerHTML":
              S = M;
              break;
            default:
              te(c, s, A, M);
              break;
          }
        }
      if (c.push(ae), S != null) {
        if (p != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof S != "object" || !("__html" in S))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var Q = S.__html;
        Q != null && (typeof Q == "string" && Q.length > 0 && Q[0] === `
` ? c.push(vr, R(Q)) : (H(Q), c.push(R("" + Q))));
      }
      return typeof p == "string" && p[0] === `
` && c.push(vr), p;
    }
    var ca = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ur = /* @__PURE__ */ new Map();
    function Kn(c) {
      var n = ur.get(c);
      if (n === void 0) {
        if (!ca.test(c))
          throw new Error("Invalid tag: " + c);
        n = m("<" + c), ur.set(c, n);
      }
      return n;
    }
    var Wa = m("<!DOCTYPE html>");
    function jr(c, n, o, s, p) {
      switch (Ne(n, o), Ue(n, o), cn(n, o, null), !o.suppressContentEditableWarning && o.contentEditable && o.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), p.insertionMode !== lt && p.insertionMode !== wt && n.indexOf("-") === -1 && typeof o.is != "string" && n.toLowerCase() !== n && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", n), n) {
        case "select":
          return Jo(c, o, s);
        case "option":
          return nr(c, o, s, p);
        case "textarea":
          return or(c, o, s);
        case "input":
          return tl(c, o, s);
        case "menuitem":
          return la(c, o, s);
        case "title":
          return qt(c, o, s);
        case "listing":
        case "pre":
          return cr(c, o, n, s);
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
          return Ha(c, o, n, s);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return gr(c, o, n, s);
        case "html":
          return p.insertionMode === Mt && c.push(Wa), gr(c, o, n, s);
        default:
          return n.indexOf("-") === -1 && typeof o.is != "string" ? gr(c, o, n, s) : sa(c, o, n, s);
      }
    }
    var $i = m("</"), ua = m(">");
    function Bi(c, n, o) {
      switch (n) {
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
          c.push($i, R(n), ua);
      }
    }
    function nl(c, n) {
      for (var o = n.bootstrapChunks, s = 0; s < o.length - 1; s++)
        v(c, o[s]);
      return s < o.length ? b(c, o[s]) : !0;
    }
    var rl = m('<template id="'), da = m('"></template>');
    function Hi(c, n, o) {
      v(c, rl), v(c, n.placeholderPrefix);
      var s = R(o.toString(16));
      return v(c, s), b(c, da);
    }
    var Ur = m("<!--$-->"), Va = m('<!--$?--><template id="'), al = m('"></template>'), Ar = m("<!--$!-->"), ja = m("<!--/$-->"), Ua = m("<template"), Lr = m('"'), Kr = m(' data-dgst="'), fa = m(' data-msg="'), Wi = m(' data-stck="'), Vi = m("></template>");
    function ji(c, n) {
      return b(c, Ur);
    }
    function pa(c, n, o) {
      if (v(c, Va), o === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(c, o), b(c, al);
    }
    function $n(c, n, o, s, p) {
      var S;
      return S = b(c, Ar), v(c, Ua), o && (v(c, Kr), v(c, R(Bt(o))), v(c, Lr)), s && (v(c, fa), v(c, R(Bt(s))), v(c, Lr)), p && (v(c, Wi), v(c, R(Bt(p))), v(c, Lr)), S = b(c, Vi), S;
    }
    function Ui(c, n) {
      return b(c, ja);
    }
    function ha(c, n) {
      return b(c, ja);
    }
    function il(c, n) {
      return b(c, ja);
    }
    var Ki = m('<div hidden id="'), ma = m('">'), Yi = m("</div>"), Xi = m('<svg aria-hidden="true" style="display:none" id="'), ya = m('">'), ga = m("</svg>"), qi = m('<math aria-hidden="true" style="display:none" id="'), Gi = m('">'), Zi = m("</math>"), Ka = m('<table hidden id="'), Qi = m('">'), x = m("</table>"), T = m('<table hidden><tbody id="'), F = m('">'), K = m("</tbody></table>"), xe = m('<table hidden><tr id="'), me = m('">'), Ae = m("</tr></table>"), Ve = m('<table hidden><colgroup id="'), pt = m('">'), Tt = m("</colgroup></table>");
    function kt(c, n, o, s) {
      switch (o.insertionMode) {
        case Mt:
        case Pt:
          return v(c, Ki), v(c, n.segmentPrefix), v(c, R(s.toString(16))), b(c, ma);
        case lt:
          return v(c, Xi), v(c, n.segmentPrefix), v(c, R(s.toString(16))), b(c, ya);
        case wt:
          return v(c, qi), v(c, n.segmentPrefix), v(c, R(s.toString(16))), b(c, Gi);
        case At:
          return v(c, Ka), v(c, n.segmentPrefix), v(c, R(s.toString(16))), b(c, Qi);
        case Ht:
          return v(c, T), v(c, n.segmentPrefix), v(c, R(s.toString(16))), b(c, F);
        case Ot:
          return v(c, xe), v(c, n.segmentPrefix), v(c, R(s.toString(16))), b(c, me);
        case on:
          return v(c, Ve), v(c, n.segmentPrefix), v(c, R(s.toString(16))), b(c, pt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Zt(c, n) {
      switch (n.insertionMode) {
        case Mt:
        case Pt:
          return b(c, Yi);
        case lt:
          return b(c, ga);
        case wt:
          return b(c, Zi);
        case At:
          return b(c, x);
        case Ht:
          return b(c, K);
        case Ot:
          return b(c, Ae);
        case on:
          return b(c, Tt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Bn = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Yn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Xn = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', va = m(Bn + ';$RS("'), Ji = m('$RS("'), Yr = m('","'), xu = m('")<\/script>');
    function bu(c, n, o) {
      v(c, n.startInlineScript), n.sentCompleteSegmentFunction ? v(c, Ji) : (n.sentCompleteSegmentFunction = !0, v(c, va)), v(c, n.segmentPrefix);
      var s = R(o.toString(16));
      return v(c, s), v(c, Yr), v(c, n.placeholderPrefix), v(c, s), b(c, xu);
    }
    var ol = m(Yn + ';$RC("'), Su = m('$RC("'), Eu = m('","'), gs = m('")<\/script>');
    function vs(c, n, o, s) {
      if (v(c, n.startInlineScript), n.sentCompleteBoundaryFunction ? v(c, Su) : (n.sentCompleteBoundaryFunction = !0, v(c, ol)), o === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var p = R(s.toString(16));
      return v(c, o), v(c, Eu), v(c, n.segmentPrefix), v(c, p), b(c, gs);
    }
    var ku = m(Xn + ';$RX("'), Ru = m('$RX("'), wu = m('"'), Tu = m(")<\/script>"), Vn = m(",");
    function Cu(c, n, o, s, p, S) {
      if (v(c, n.startInlineScript), n.sentClientRenderFunction ? v(c, Ru) : (n.sentClientRenderFunction = !0, v(c, ku)), o === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(c, o), v(c, wu), (s || p || S) && (v(c, Vn), v(c, R(eo(s || "")))), (p || S) && (v(c, Vn), v(c, R(eo(p || "")))), S && (v(c, Vn), v(c, R(eo(S)))), b(c, Tu);
    }
    var xs = /[<\u2028\u2029]/g;
    function eo(c) {
      var n = JSON.stringify(c);
      return n.replace(xs, function(o) {
        switch (o) {
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
    var qn = Object.assign, bs = Symbol.for("react.element"), to = Symbol.for("react.portal"), no = Symbol.for("react.fragment"), ro = Symbol.for("react.strict_mode"), ao = Symbol.for("react.profiler"), Ya = Symbol.for("react.provider"), Xa = Symbol.for("react.context"), xa = Symbol.for("react.forward_ref"), ll = Symbol.for("react.suspense"), sl = Symbol.for("react.suspense_list"), cl = Symbol.for("react.memo"), io = Symbol.for("react.lazy"), Ss = Symbol.for("react.scope"), Au = Symbol.for("react.debug_trace_mode"), Lu = Symbol.for("react.legacy_hidden"), Pu = Symbol.for("react.default_value"), ul = Symbol.iterator, pn = "@@iterator";
    function qa(c) {
      if (c === null || typeof c != "object")
        return null;
      var n = ul && c[ul] || c[pn];
      return typeof n == "function" ? n : null;
    }
    function Es(c, n, o) {
      var s = c.displayName;
      if (s)
        return s;
      var p = n.displayName || n.name || "";
      return p !== "" ? o + "(" + p + ")" : o;
    }
    function dl(c) {
      return c.displayName || "Context";
    }
    function dn(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case no:
          return "Fragment";
        case to:
          return "Portal";
        case ao:
          return "Profiler";
        case ro:
          return "StrictMode";
        case ll:
          return "Suspense";
        case sl:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case Xa:
            var n = c;
            return dl(n) + ".Consumer";
          case Ya:
            var o = c;
            return dl(o._context) + ".Provider";
          case xa:
            return Es(c, c.render, "ForwardRef");
          case cl:
            var s = c.displayName || null;
            return s !== null ? s : dn(c.type) || "Memo";
          case io: {
            var p = c, S = p._payload, A = p._init;
            try {
              return dn(A(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ba = 0, fl, pl, hl, ml, ks, Rs, oo;
    function lo() {
    }
    lo.__reactDisabledLog = !0;
    function Ga() {
      {
        if (ba === 0) {
          fl = console.log, pl = console.info, hl = console.warn, ml = console.error, ks = console.group, Rs = console.groupCollapsed, oo = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: lo,
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
        ba++;
      }
    }
    function yl() {
      {
        if (ba--, ba === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: qn({}, c, {
              value: fl
            }),
            info: qn({}, c, {
              value: pl
            }),
            warn: qn({}, c, {
              value: hl
            }),
            error: qn({}, c, {
              value: ml
            }),
            group: qn({}, c, {
              value: ks
            }),
            groupCollapsed: qn({}, c, {
              value: Rs
            }),
            groupEnd: qn({}, c, {
              value: oo
            })
          });
        }
        ba < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Sa = r.ReactCurrentDispatcher, gl;
    function Xr(c, n, o) {
      {
        if (gl === void 0)
          try {
            throw Error();
          } catch (p) {
            var s = p.stack.trim().match(/\n( *(at )?)/);
            gl = s && s[1] || "";
          }
        return `
` + gl + c;
      }
    }
    var vl = !1, Za;
    {
      var Du = typeof WeakMap == "function" ? WeakMap : Map;
      Za = new Du();
    }
    function Qa(c, n) {
      if (!c || vl)
        return "";
      {
        var o = Za.get(c);
        if (o !== void 0)
          return o;
      }
      var s;
      vl = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = Sa.current, Sa.current = null, Ga();
      try {
        if (n) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (zt) {
              s = zt;
            }
            Reflect.construct(c, [], A);
          } else {
            try {
              A.call();
            } catch (zt) {
              s = zt;
            }
            c.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (zt) {
            s = zt;
          }
          c();
        }
      } catch (zt) {
        if (zt && s && typeof zt.stack == "string") {
          for (var M = zt.stack.split(`
`), Q = s.stack.split(`
`), he = M.length - 1, _e = Q.length - 1; he >= 1 && _e >= 0 && M[he] !== Q[_e]; )
            _e--;
          for (; he >= 1 && _e >= 0; he--, _e--)
            if (M[he] !== Q[_e]) {
              if (he !== 1 || _e !== 1)
                do
                  if (he--, _e--, _e < 0 || M[he] !== Q[_e]) {
                    var Ie = `
` + M[he].replace(" at new ", " at ");
                    return c.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", c.displayName)), typeof c == "function" && Za.set(c, Ie), Ie;
                  }
                while (he >= 1 && _e >= 0);
              break;
            }
        }
      } finally {
        vl = !1, Sa.current = S, yl(), Error.prepareStackTrace = p;
      }
      var Xe = c ? c.displayName || c.name : "", gt = Xe ? Xr(Xe) : "";
      return typeof c == "function" && Za.set(c, gt), gt;
    }
    function ws(c, n, o) {
      return Qa(c, !0);
    }
    function xl(c, n, o) {
      return Qa(c, !1);
    }
    function so(c) {
      var n = c.prototype;
      return !!(n && n.isReactComponent);
    }
    function co(c, n, o) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return Qa(c, so(c));
      if (typeof c == "string")
        return Xr(c);
      switch (c) {
        case ll:
          return Xr("Suspense");
        case sl:
          return Xr("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case xa:
            return xl(c.render);
          case cl:
            return co(c.type, n, o);
          case io: {
            var s = c, p = s._payload, S = s._init;
            try {
              return co(S(p), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var uo = {}, Ja = r.ReactDebugCurrentFrame;
    function ei(c) {
      if (c) {
        var n = c._owner, o = co(c.type, c._source, n ? n.type : null);
        Ja.setExtraStackFrame(o);
      } else
        Ja.setExtraStackFrame(null);
    }
    function Ts(c, n, o, s, p) {
      {
        var S = Function.call.bind(X);
        for (var A in c)
          if (S(c, A)) {
            var M = void 0;
            try {
              if (typeof c[A] != "function") {
                var Q = Error((s || "React class") + ": " + o + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              M = c[A](n, A, s, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (he) {
              M = he;
            }
            M && !(M instanceof Error) && (ei(p), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", o, A, typeof M), ei(null)), M instanceof Error && !(M.message in uo) && (uo[M.message] = !0, ei(p), a("Failed %s type: %s", o, M.message), ei(null));
          }
      }
    }
    var qr;
    qr = {};
    var fo = {};
    Object.freeze(fo);
    function Pr(c, n) {
      {
        var o = c.contextTypes;
        if (!o)
          return fo;
        var s = {};
        for (var p in o)
          s[p] = n[p];
        {
          var S = dn(c) || "Unknown";
          Ts(o, s, "context", S);
        }
        return s;
      }
    }
    function bl(c, n, o, s) {
      {
        if (typeof c.getChildContext != "function") {
          {
            var p = dn(n) || "Unknown";
            qr[p] || (qr[p] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return o;
        }
        var S = c.getChildContext();
        for (var A in S)
          if (!(A in s))
            throw new Error((dn(n) || "Unknown") + '.getChildContext(): key "' + A + '" is not defined in childContextTypes.');
        {
          var M = dn(n) || "Unknown";
          Ts(s, S, "child context", M);
        }
        return qn({}, o, S);
      }
    }
    var Gr;
    Gr = {};
    var po = null, Dr = null;
    function ho(c) {
      c.context._currentValue = c.parentValue;
    }
    function mo(c) {
      c.context._currentValue = c.value;
    }
    function ti(c, n) {
      if (c !== n) {
        ho(c);
        var o = c.parent, s = n.parent;
        if (o === null) {
          if (s !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (s === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ti(o, s);
        }
        mo(n);
      }
    }
    function ni(c) {
      ho(c);
      var n = c.parent;
      n !== null && ni(n);
    }
    function Cs(c) {
      var n = c.parent;
      n !== null && Cs(n), mo(c);
    }
    function As(c, n) {
      ho(c);
      var o = c.parent;
      if (o === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      o.depth === n.depth ? ti(o, n) : As(o, n);
    }
    function Ls(c, n) {
      var o = n.parent;
      if (o === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      c.depth === o.depth ? ti(c, o) : Ls(c, o), mo(n);
    }
    function _r(c) {
      var n = Dr, o = c;
      n !== o && (n === null ? Cs(o) : o === null ? ni(n) : n.depth === o.depth ? ti(n, o) : n.depth > o.depth ? As(n, o) : Ls(n, o), Dr = o);
    }
    function Sl(c, n) {
      var o;
      o = c._currentValue, c._currentValue = n, c._currentRenderer !== void 0 && c._currentRenderer !== null && c._currentRenderer !== Gr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), c._currentRenderer = Gr;
      var s = Dr, p = {
        parent: s,
        depth: s === null ? 0 : s.depth + 1,
        context: c,
        parentValue: o,
        value: n
      };
      return Dr = p, p;
    }
    function _u(c) {
      var n = Dr;
      if (n === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      n.context !== c && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var o = n.parentValue;
        o === Pu ? n.context._currentValue = n.context._defaultValue : n.context._currentValue = o, c._currentRenderer !== void 0 && c._currentRenderer !== null && c._currentRenderer !== Gr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), c._currentRenderer = Gr;
      }
      return Dr = n.parent;
    }
    function Ps() {
      return Dr;
    }
    function Ea(c) {
      var n = c._currentValue;
      return n;
    }
    function ri(c) {
      return c._reactInternals;
    }
    function El(c, n) {
      c._reactInternals = n;
    }
    var yo = {}, go = {}, vo, ka, ai, ii, xo, oi, bo, So, kl;
    {
      vo = /* @__PURE__ */ new Set(), ka = /* @__PURE__ */ new Set(), ai = /* @__PURE__ */ new Set(), bo = /* @__PURE__ */ new Set(), ii = /* @__PURE__ */ new Set(), So = /* @__PURE__ */ new Set(), kl = /* @__PURE__ */ new Set();
      var Ds = /* @__PURE__ */ new Set();
      oi = function(c, n) {
        if (!(c === null || typeof c == "function")) {
          var o = n + "_" + c;
          Ds.has(o) || (Ds.add(o), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, c));
        }
      }, xo = function(c, n) {
        if (n === void 0) {
          var o = dn(c) || "Component";
          ii.has(o) || (ii.add(o), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", o));
        }
      };
    }
    function _s(c, n) {
      {
        var o = c.constructor, s = o && dn(o) || "ReactClass", p = s + "." + n;
        if (yo[p])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, n, n, s), yo[p] = !0;
      }
    }
    var Os = {
      isMounted: function(c) {
        return !1;
      },
      enqueueSetState: function(c, n, o) {
        var s = ri(c);
        s.queue === null ? _s(c, "setState") : (s.queue.push(n), o != null && oi(o, "setState"));
      },
      enqueueReplaceState: function(c, n, o) {
        var s = ri(c);
        s.replace = !0, s.queue = [n], o != null && oi(o, "setState");
      },
      enqueueForceUpdate: function(c, n) {
        var o = ri(c);
        o.queue === null ? _s(c, "forceUpdate") : n != null && oi(n, "setState");
      }
    };
    function Ou(c, n, o, s, p) {
      var S = o(p, s);
      xo(n, S);
      var A = S == null ? s : qn({}, s, S);
      return A;
    }
    function Ns(c, n, o) {
      var s = fo, p = c.contextType;
      if ("contextType" in c) {
        var S = (
          // Allow null for conditional declaration
          p === null || p !== void 0 && p.$$typeof === Xa && p._context === void 0
        );
        if (!S && !kl.has(c)) {
          kl.add(c);
          var A = "";
          p === void 0 ? A = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? A = " However, it is set to a " + typeof p + "." : p.$$typeof === Ya ? A = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? A = " Did you accidentally pass the Context.Consumer instead?" : A = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", dn(c) || "Component", A);
        }
      }
      typeof p == "object" && p !== null ? s = Ea(p) : s = o;
      var M = new c(n, s);
      {
        if (typeof c.getDerivedStateFromProps == "function" && (M.state === null || M.state === void 0)) {
          var Q = dn(c) || "Component";
          vo.has(Q) || (vo.add(Q), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Q, M.state === null ? "null" : "undefined", Q));
        }
        if (typeof c.getDerivedStateFromProps == "function" || typeof M.getSnapshotBeforeUpdate == "function") {
          var he = null, _e = null, Ie = null;
          if (typeof M.componentWillMount == "function" && M.componentWillMount.__suppressDeprecationWarning !== !0 ? he = "componentWillMount" : typeof M.UNSAFE_componentWillMount == "function" && (he = "UNSAFE_componentWillMount"), typeof M.componentWillReceiveProps == "function" && M.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? _e = "componentWillReceiveProps" : typeof M.UNSAFE_componentWillReceiveProps == "function" && (_e = "UNSAFE_componentWillReceiveProps"), typeof M.componentWillUpdate == "function" && M.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Ie = "componentWillUpdate" : typeof M.UNSAFE_componentWillUpdate == "function" && (Ie = "UNSAFE_componentWillUpdate"), he !== null || _e !== null || Ie !== null) {
            var Xe = dn(c) || "Component", gt = typeof c.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ai.has(Xe) || (ai.add(Xe), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Xe, gt, he !== null ? `
  ` + he : "", _e !== null ? `
  ` + _e : "", Ie !== null ? `
  ` + Ie : ""));
          }
        }
      }
      return M;
    }
    function Nu(c, n, o) {
      {
        var s = dn(n) || "Component", p = c.render;
        p || (n.prototype && typeof n.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), c.getInitialState && !c.getInitialState.isReactClassApproved && !c.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), c.getDefaultProps && !c.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), c.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), c.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), c.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), n.contextType && n.contextTypes && !So.has(n) && (So.add(n), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof c.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), n.prototype && n.prototype.isPureReactComponent && typeof c.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", dn(n) || "A pure component"), typeof c.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof c.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof c.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof c.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var S = c.props !== o;
        c.props !== void 0 && S && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), c.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof c.getSnapshotBeforeUpdate == "function" && typeof c.componentDidUpdate != "function" && !ka.has(n) && (ka.add(n), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", dn(n))), typeof c.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof c.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof n.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var A = c.state;
        A && (typeof A != "object" || z(A)) && a("%s.state: must be set to an object or null", s), typeof c.getChildContext == "function" && typeof n.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function Fu(c, n) {
      var o = n.state;
      if (typeof n.componentWillMount == "function") {
        if (n.componentWillMount.__suppressDeprecationWarning !== !0) {
          var s = dn(c) || "Unknown";
          go[s] || (i(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            s
          ), go[s] = !0);
        }
        n.componentWillMount();
      }
      typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), o !== n.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", dn(c) || "Component"), Os.enqueueReplaceState(n, n.state, null));
    }
    function Rl(c, n, o, s) {
      if (c.queue !== null && c.queue.length > 0) {
        var p = c.queue, S = c.replace;
        if (c.queue = null, c.replace = !1, S && p.length === 1)
          n.state = p[0];
        else {
          for (var A = S ? p[0] : n.state, M = !0, Q = S ? 1 : 0; Q < p.length; Q++) {
            var he = p[Q], _e = typeof he == "function" ? he.call(n, A, o, s) : he;
            _e != null && (M ? (M = !1, A = qn({}, A, _e)) : qn(A, _e));
          }
          n.state = A;
        }
      } else
        c.queue = null;
    }
    function li(c, n, o, s) {
      Nu(c, n, o);
      var p = c.state !== void 0 ? c.state : null;
      c.updater = Os, c.props = o, c.state = p;
      var S = {
        queue: [],
        replace: !1
      };
      El(c, S);
      var A = n.contextType;
      if (typeof A == "object" && A !== null ? c.context = Ea(A) : c.context = s, c.state === o) {
        var M = dn(n) || "Component";
        bo.has(M) || (bo.add(M), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", M));
      }
      var Q = n.getDerivedStateFromProps;
      typeof Q == "function" && (c.state = Ou(c, n, Q, p, o)), typeof n.getDerivedStateFromProps != "function" && typeof c.getSnapshotBeforeUpdate != "function" && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (Fu(n, c), Rl(S, c, o, s));
    }
    var Mu = {
      id: 1,
      overflow: ""
    };
    function zu(c) {
      var n = c.overflow, o = c.id, s = o & ~Iu(o);
      return s.toString(32) + n;
    }
    function wl(c, n, o) {
      var s = c.id, p = c.overflow, S = Eo(s) - 1, A = s & ~(1 << S), M = o + 1, Q = Eo(n) + S;
      if (Q > 30) {
        var he = S - S % 5, _e = (1 << he) - 1, Ie = (A & _e).toString(32), Xe = A >> he, gt = S - he, zt = Eo(n) + gt, Dn = M << gt, ra = Dn | Xe, aa = Ie + p;
        return {
          id: 1 << zt | ra,
          overflow: aa
        };
      } else {
        var kr = M << S, Pa = kr | A, hd = p;
        return {
          id: 1 << Q | Pa,
          overflow: hd
        };
      }
    }
    function Eo(c) {
      return 32 - $u(c);
    }
    function Iu(c) {
      return 1 << Eo(c) - 1;
    }
    var $u = Math.clz32 ? Math.clz32 : Tl, Bu = Math.log, xr = Math.LN2;
    function Tl(c) {
      var n = c >>> 0;
      return n === 0 ? 32 : 31 - (Bu(n) / xr | 0) | 0;
    }
    function ko(c, n) {
      return c === n && (c !== 0 || 1 / c === 1 / n) || c !== c && n !== n;
    }
    var rn = typeof Object.is == "function" ? Object.is : ko, Gn = null, Ra = null, Zr = null, Ft = null, Or = !1, Ro = !1, Zn = 0, Qn = null, dr = 0, Hu = 25, lr = !1, Nr;
    function Qr() {
      if (Gn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return lr && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Gn;
    }
    function Wu(c, n) {
      if (n === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Nr), !1;
      c.length !== n.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Nr, "[" + c.join(", ") + "]", "[" + n.join(", ") + "]");
      for (var o = 0; o < n.length && o < c.length; o++)
        if (!rn(c[o], n[o]))
          return !1;
      return !0;
    }
    function Cl() {
      if (dr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function si() {
      return Ft === null ? Zr === null ? (Or = !1, Zr = Ft = Cl()) : (Or = !0, Ft = Zr) : Ft.next === null ? (Or = !1, Ft = Ft.next = Cl()) : (Or = !0, Ft = Ft.next), Ft;
    }
    function Vu(c, n) {
      Gn = n, Ra = c, lr = !1, Zn = 0;
    }
    function ju(c, n, o, s) {
      for (; Ro; )
        Ro = !1, Zn = 0, dr += 1, Ft = null, o = c(n, s);
      return Al(), o;
    }
    function wo() {
      var c = Zn !== 0;
      return c;
    }
    function Al() {
      lr = !1, Gn = null, Ra = null, Ro = !1, Zr = null, dr = 0, Qn = null, Ft = null;
    }
    function Fs(c) {
      return lr && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Ea(c);
    }
    function Ms(c) {
      return Nr = "useContext", Qr(), Ea(c);
    }
    function Ll(c, n) {
      return typeof n == "function" ? n(c) : n;
    }
    function Uu(c) {
      return Nr = "useState", zs(
        Ll,
        // useReducer has a special case to support lazy useState initializers
        c
      );
    }
    function zs(c, n, o) {
      if (c !== Ll && (Nr = "useReducer"), Gn = Qr(), Ft = si(), Or) {
        var s = Ft.queue, p = s.dispatch;
        if (Qn !== null) {
          var S = Qn.get(s);
          if (S !== void 0) {
            Qn.delete(s);
            var A = Ft.memoizedState, M = S;
            do {
              var Q = M.action;
              lr = !0, A = c(A, Q), lr = !1, M = M.next;
            } while (M !== null);
            return Ft.memoizedState = A, [A, p];
          }
        }
        return [Ft.memoizedState, p];
      } else {
        lr = !0;
        var he;
        c === Ll ? he = typeof n == "function" ? n() : n : he = o !== void 0 ? o(n) : n, lr = !1, Ft.memoizedState = he;
        var _e = Ft.queue = {
          last: null,
          dispatch: null
        }, Ie = _e.dispatch = Xu.bind(null, Gn, _e);
        return [Ft.memoizedState, Ie];
      }
    }
    function Is(c, n) {
      Gn = Qr(), Ft = si();
      var o = n === void 0 ? null : n;
      if (Ft !== null) {
        var s = Ft.memoizedState;
        if (s !== null && o !== null) {
          var p = s[1];
          if (Wu(o, p))
            return s[0];
        }
      }
      lr = !0;
      var S = c();
      return lr = !1, Ft.memoizedState = [S, o], S;
    }
    function Ku(c) {
      Gn = Qr(), Ft = si();
      var n = Ft.memoizedState;
      if (n === null) {
        var o = {
          current: c
        };
        return Object.seal(o), Ft.memoizedState = o, o;
      } else
        return n;
    }
    function Yu(c, n) {
      Nr = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Xu(c, n, o) {
      if (dr >= Hu)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (c === Gn) {
        Ro = !0;
        var s = {
          action: o,
          next: null
        };
        Qn === null && (Qn = /* @__PURE__ */ new Map());
        var p = Qn.get(n);
        if (p === void 0)
          Qn.set(n, s);
        else {
          for (var S = p; S.next !== null; )
            S = S.next;
          S.next = s;
        }
      }
    }
    function qu(c, n) {
      return Is(function() {
        return c;
      }, n);
    }
    function Gu(c, n, o) {
      return Qr(), n(c._source);
    }
    function Zu(c, n, o) {
      if (o === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return o();
    }
    function To(c) {
      return Qr(), c;
    }
    function $s() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Pl() {
      return Qr(), [!1, $s];
    }
    function Bs() {
      var c = Ra, n = zu(c.treeContext), o = ci;
      if (o === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var s = Zn++;
      return ln(o, n, s);
    }
    function Co() {
    }
    var Ao = {
      readContext: Fs,
      useContext: Ms,
      useMemo: Is,
      useReducer: zs,
      useRef: Ku,
      useState: Uu,
      useInsertionEffect: Co,
      useLayoutEffect: Yu,
      useCallback: qu,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Co,
      // Effects are not run in the server environment.
      useEffect: Co,
      // Debugging effect
      useDebugValue: Co,
      useDeferredValue: To,
      useTransition: Pl,
      useId: Bs,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Gu,
      useSyncExternalStore: Zu
    }, ci = null;
    function Lo(c) {
      ci = c;
    }
    function wa(c) {
      try {
        var n = "", o = c;
        do {
          switch (o.tag) {
            case 0:
              n += Xr(o.type, null, null);
              break;
            case 1:
              n += xl(o.type, null, null);
              break;
            case 2:
              n += ws(o.type, null, null);
              break;
          }
          o = o.parent;
        } while (o);
        return n;
      } catch (s) {
        return `
Error generating stack: ` + s.message + `
` + s.stack;
      }
    }
    var Po = r.ReactCurrentDispatcher, Do = r.ReactDebugCurrentFrame, _o = 0, Ta = 1, Dl = 2, Jr = 3, Hs = 4, Qu = 0, Ca = 1, Aa = 2, Ju = 12800;
    function ed(c) {
      return console.error(c), null;
    }
    function ea() {
    }
    function Oo(c, n, o, s, p, S, A, M, Q) {
      var he = [], _e = /* @__PURE__ */ new Set(), Ie = {
        destination: null,
        responseState: n,
        progressiveChunkSize: s === void 0 ? Ju : s,
        status: Qu,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: _e,
        pingedTasks: he,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: p === void 0 ? ed : p,
        onAllReady: S === void 0 ? ea : S,
        onShellReady: A === void 0 ? ea : A,
        onShellError: M === void 0 ? ea : M,
        onFatalError: Q === void 0 ? ea : Q
      }, Xe = ui(
        Ie,
        0,
        null,
        o,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      Xe.parentFlushed = !0;
      var gt = ta(Ie, c, null, Xe, _e, fo, po, Mu);
      return he.push(gt), Ie;
    }
    function br(c, n) {
      var o = c.pingedTasks;
      o.push(n), o.length === 1 && f(function() {
        return Hl(c);
      });
    }
    function _l(c, n) {
      return {
        id: mn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: n,
        errorDigest: null
      };
    }
    function ta(c, n, o, s, p, S, A, M) {
      c.allPendingTasks++, o === null ? c.pendingRootTasks++ : o.pendingTasks++;
      var Q = {
        node: n,
        ping: function() {
          return br(c, Q);
        },
        blockedBoundary: o,
        blockedSegment: s,
        abortSet: p,
        legacyContext: S,
        context: A,
        treeContext: M
      };
      return Q.componentStack = null, p.add(Q), Q;
    }
    function ui(c, n, o, s, p, S) {
      return {
        status: _o,
        id: -1,
        // lazily assigned later
        index: n,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: s,
        boundary: o,
        lastPushedText: p,
        textEmbedded: S
      };
    }
    var Sr = null;
    function fr() {
      return Sr === null || Sr.componentStack === null ? "" : wa(Sr.componentStack);
    }
    function Er(c, n) {
      c.componentStack = {
        tag: 0,
        parent: c.componentStack,
        type: n
      };
    }
    function No(c, n) {
      c.componentStack = {
        tag: 1,
        parent: c.componentStack,
        type: n
      };
    }
    function di(c, n) {
      c.componentStack = {
        tag: 2,
        parent: c.componentStack,
        type: n
      };
    }
    function sr(c) {
      c.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : c.componentStack = c.componentStack.parent;
    }
    var fi = null;
    function Ol(c, n) {
      {
        var o;
        typeof n == "string" ? o = n : n && typeof n.message == "string" ? o = n.message : o = String(n);
        var s = fi || fr();
        fi = null, c.errorMessage = o, c.errorComponentStack = s;
      }
    }
    function pi(c, n) {
      var o = c.onError(n);
      if (o != null && typeof o != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
      return o;
    }
    function hi(c, n) {
      var o = c.onShellError;
      o(n);
      var s = c.onFatalError;
      s(n), c.destination !== null ? (c.status = Aa, O(c.destination, n)) : (c.status = Ca, c.fatalError = n);
    }
    function Ws(c, n, o) {
      Er(n, "Suspense");
      var s = n.blockedBoundary, p = n.blockedSegment, S = o.fallback, A = o.children, M = /* @__PURE__ */ new Set(), Q = _l(c, M), he = p.chunks.length, _e = ui(
        c,
        he,
        Q,
        p.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      p.children.push(_e), p.lastPushedText = !1;
      var Ie = ui(
        c,
        0,
        null,
        p.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Ie.parentFlushed = !0, n.blockedBoundary = Q, n.blockedSegment = Ie;
      try {
        if (La(c, n, A), bn(Ie.chunks, c.responseState, Ie.lastPushedText, Ie.textEmbedded), Ie.status = Ta, na(Q, Ie), Q.pendingTasks === 0) {
          sr(n);
          return;
        }
      } catch (gt) {
        Ie.status = Hs, Q.forceClientRender = !0, Q.errorDigest = pi(c, gt), Ol(Q, gt);
      } finally {
        n.blockedBoundary = s, n.blockedSegment = p;
      }
      var Xe = ta(c, S, s, _e, M, n.legacyContext, n.context, n.treeContext);
      Xe.componentStack = n.componentStack, c.pingedTasks.push(Xe), sr(n);
    }
    function td(c, n, o, s) {
      Er(n, o);
      var p = n.blockedSegment, S = jr(p.chunks, o, s, c.responseState, p.formatContext);
      p.lastPushedText = !1;
      var A = p.formatContext;
      p.formatContext = Xt(A, o, s), La(c, n, S), p.formatContext = A, Bi(p.chunks, o), p.lastPushedText = !1, sr(n);
    }
    function Vs(c) {
      return c.prototype && c.prototype.isReactComponent;
    }
    function mi(c, n, o, s, p) {
      var S = {};
      Vu(n, S);
      var A = o(s, p);
      return ju(o, s, A, p);
    }
    function Nl(c, n, o, s, p) {
      var S = o.render();
      o.props !== p && (Us || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", dn(s) || "a component"), Us = !0);
      {
        var A = s.childContextTypes;
        if (A != null) {
          var M = n.legacyContext, Q = bl(o, s, M, A);
          n.legacyContext = Q, Hn(c, n, S), n.legacyContext = M;
          return;
        }
      }
      Hn(c, n, S);
    }
    function js(c, n, o, s) {
      di(n, o);
      var p = Pr(o, n.legacyContext), S = Ns(o, s, p);
      li(S, o, s, p), Nl(c, n, S, o, s), sr(n);
    }
    var Fl = {}, yi = {}, Ml = {}, zl = {}, Us = !1, Ks = !1, Il = !1, Ys = !1;
    function nd(c, n, o, s) {
      var p;
      if (p = Pr(o, n.legacyContext), No(n, o), o.prototype && typeof o.prototype.render == "function") {
        var S = dn(o) || "Unknown";
        Fl[S] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), Fl[S] = !0);
      }
      var A = mi(c, n, o, s, p), M = wo();
      if (typeof A == "object" && A !== null && typeof A.render == "function" && A.$$typeof === void 0) {
        var Q = dn(o) || "Unknown";
        yi[Q] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", Q, Q, Q), yi[Q] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof A == "object" && A !== null && typeof A.render == "function" && A.$$typeof === void 0
      ) {
        {
          var he = dn(o) || "Unknown";
          yi[he] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", he, he, he), yi[he] = !0);
        }
        li(A, o, s, p), Nl(c, n, A, o, s);
      } else if (rd(o), M) {
        var _e = n.treeContext, Ie = 1, Xe = 0;
        n.treeContext = wl(_e, Ie, Xe);
        try {
          Hn(c, n, A);
        } finally {
          n.treeContext = _e;
        }
      } else
        Hn(c, n, A);
      sr(n);
    }
    function rd(c) {
      {
        if (c && c.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", c.displayName || c.name || "Component"), typeof c.getDerivedStateFromProps == "function") {
          var n = dn(c) || "Unknown";
          zl[n] || (a("%s: Function components do not support getDerivedStateFromProps.", n), zl[n] = !0);
        }
        if (typeof c.contextType == "object" && c.contextType !== null) {
          var o = dn(c) || "Unknown";
          Ml[o] || (a("%s: Function components do not support contextType.", o), Ml[o] = !0);
        }
      }
    }
    function Xs(c, n) {
      if (c && c.defaultProps) {
        var o = qn({}, n), s = c.defaultProps;
        for (var p in s)
          o[p] === void 0 && (o[p] = s[p]);
        return o;
      }
      return n;
    }
    function ad(c, n, o, s, p) {
      No(n, o.render);
      var S = mi(c, n, o.render, s, p), A = wo();
      if (A) {
        var M = n.treeContext, Q = 1, he = 0;
        n.treeContext = wl(M, Q, he);
        try {
          Hn(c, n, S);
        } finally {
          n.treeContext = M;
        }
      } else
        Hn(c, n, S);
      sr(n);
    }
    function $l(c, n, o, s, p) {
      var S = o.type, A = Xs(S, s);
      Fo(c, n, S, A, p);
    }
    function id(c, n, o, s) {
      o._context === void 0 ? o !== o.Consumer && (Ys || (Ys = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var p = s.children;
      typeof p != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var S = Ea(o), A = p(S);
      Hn(c, n, A);
    }
    function Jn(c, n, o, s) {
      var p = o._context, S = s.value, A = s.children, M;
      M = n.context, n.context = Sl(p, S), Hn(c, n, A), n.context = _u(p), M !== n.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function od(c, n, o, s, p) {
      Er(n, "Lazy");
      var S = o._payload, A = o._init, M = A(S), Q = Xs(M, s);
      Fo(c, n, M, Q, p), sr(n);
    }
    function Fo(c, n, o, s, p) {
      if (typeof o == "function")
        if (Vs(o)) {
          js(c, n, o, s);
          return;
        } else {
          nd(c, n, o, s);
          return;
        }
      if (typeof o == "string") {
        td(c, n, o, s);
        return;
      }
      switch (o) {
        case Lu:
        case Au:
        case ro:
        case ao:
        case no: {
          Hn(c, n, s.children);
          return;
        }
        case sl: {
          Er(n, "SuspenseList"), Hn(c, n, s.children), sr(n);
          return;
        }
        case Ss:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ll: {
          Ws(c, n, s);
          return;
        }
      }
      if (typeof o == "object" && o !== null)
        switch (o.$$typeof) {
          case xa: {
            ad(c, n, o, s, p);
            return;
          }
          case cl: {
            $l(c, n, o, s, p);
            return;
          }
          case Ya: {
            Jn(c, n, o, s);
            return;
          }
          case Xa: {
            id(c, n, o, s);
            return;
          }
          case io: {
            od(c, n, o, s);
            return;
          }
        }
      var S = "";
      throw (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (o == null ? o : typeof o) + "." + S));
    }
    function ld(c, n) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      c[Symbol.toStringTag] === "Generator" && (Ks || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ks = !0), c.entries === n && (Il || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Il = !0);
    }
    function Hn(c, n, o) {
      try {
        return sd(c, n, o);
      } catch (s) {
        throw typeof s == "object" && s !== null && typeof s.then == "function" || (fi = fi !== null ? fi : fr()), s;
      }
    }
    function sd(c, n, o) {
      if (n.node = o, typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case bs: {
            var s = o, p = s.type, S = s.props, A = s.ref;
            Fo(c, n, p, S, A);
            return;
          }
          case to:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case io: {
            var M = o, Q = M._payload, he = M._init, _e;
            try {
              _e = he(Q);
            } catch (kr) {
              throw typeof kr == "object" && kr !== null && typeof kr.then == "function" && Er(n, "Lazy"), kr;
            }
            Hn(c, n, _e);
            return;
          }
        }
        if (z(o)) {
          qs(c, n, o);
          return;
        }
        var Ie = qa(o);
        if (Ie) {
          ld(o, Ie);
          var Xe = Ie.call(o);
          if (Xe) {
            var gt = Xe.next();
            if (!gt.done) {
              var zt = [];
              do
                zt.push(gt.value), gt = Xe.next();
              while (!gt.done);
              qs(c, n, zt);
              return;
            }
            return;
          }
        }
        var Dn = Object.prototype.toString.call(o);
        throw new Error("Objects are not valid as a React child (found: " + (Dn === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : Dn) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof o == "string") {
        var ra = n.blockedSegment;
        ra.lastPushedText = un(n.blockedSegment.chunks, o, c.responseState, ra.lastPushedText);
        return;
      }
      if (typeof o == "number") {
        var aa = n.blockedSegment;
        aa.lastPushedText = un(n.blockedSegment.chunks, "" + o, c.responseState, aa.lastPushedText);
        return;
      }
      typeof o == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function qs(c, n, o) {
      for (var s = o.length, p = 0; p < s; p++) {
        var S = n.treeContext;
        n.treeContext = wl(S, s, p);
        try {
          La(c, n, o[p]);
        } finally {
          n.treeContext = S;
        }
      }
    }
    function Gs(c, n, o) {
      var s = n.blockedSegment, p = s.chunks.length, S = ui(
        c,
        p,
        null,
        s.formatContext,
        // Adopt the parent segment's leading text embed
        s.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      s.children.push(S), s.lastPushedText = !1;
      var A = ta(c, n.node, n.blockedBoundary, S, n.abortSet, n.legacyContext, n.context, n.treeContext);
      n.componentStack !== null && (A.componentStack = n.componentStack.parent);
      var M = A.ping;
      o.then(M, M);
    }
    function La(c, n, o) {
      var s = n.blockedSegment.formatContext, p = n.legacyContext, S = n.context, A = null;
      A = n.componentStack;
      try {
        return Hn(c, n, o);
      } catch (M) {
        if (Al(), typeof M == "object" && M !== null && typeof M.then == "function") {
          Gs(c, n, M), n.blockedSegment.formatContext = s, n.legacyContext = p, n.context = S, _r(S), n.componentStack = A;
          return;
        } else
          throw n.blockedSegment.formatContext = s, n.legacyContext = p, n.context = S, _r(S), n.componentStack = A, M;
      }
    }
    function Zs(c, n, o, s) {
      var p = pi(c, s);
      if (n === null ? hi(c, s) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, n.errorDigest = p, Ol(n, s), n.parentFlushed && c.clientRenderedBoundaries.push(n))), c.allPendingTasks--, c.allPendingTasks === 0) {
        var S = c.onAllReady;
        S();
      }
    }
    function cd(c) {
      var n = this, o = c.blockedBoundary, s = c.blockedSegment;
      s.status = Jr, gi(n, o, s);
    }
    function Bl(c, n, o) {
      var s = c.blockedBoundary, p = c.blockedSegment;
      if (p.status = Jr, s === null)
        n.allPendingTasks--, n.status !== Aa && (n.status = Aa, n.destination !== null && k(n.destination));
      else {
        if (s.pendingTasks--, !s.forceClientRender) {
          s.forceClientRender = !0;
          var S = o === void 0 ? new Error("The render was aborted by the server without a reason.") : o;
          s.errorDigest = n.onError(S);
          {
            var A = "The server did not finish this Suspense boundary: ";
            S && typeof S.message == "string" ? S = A + S.message : S = A + String(S);
            var M = Sr;
            Sr = c;
            try {
              Ol(s, S);
            } finally {
              Sr = M;
            }
          }
          s.parentFlushed && n.clientRenderedBoundaries.push(s);
        }
        if (s.fallbackAbortableTasks.forEach(function(he) {
          return Bl(he, n, o);
        }), s.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0) {
          var Q = n.onAllReady;
          Q();
        }
      }
    }
    function na(c, n) {
      if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
        var o = n.children[0];
        o.id = n.id, o.parentFlushed = !0, o.status === Ta && na(c, o);
      } else {
        var s = c.completedSegments;
        s.push(n);
      }
    }
    function gi(c, n, o) {
      if (n === null) {
        if (o.parentFlushed) {
          if (c.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          c.completedRootSegment = o;
        }
        if (c.pendingRootTasks--, c.pendingRootTasks === 0) {
          c.onShellError = ea;
          var s = c.onShellReady;
          s();
        }
      } else if (n.pendingTasks--, !n.forceClientRender) {
        if (n.pendingTasks === 0)
          o.parentFlushed && o.status === Ta && na(n, o), n.parentFlushed && c.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(cd, c), n.fallbackAbortableTasks.clear();
        else if (o.parentFlushed && o.status === Ta) {
          na(n, o);
          var p = n.completedSegments;
          p.length === 1 && n.parentFlushed && c.partialBoundaries.push(n);
        }
      }
      if (c.allPendingTasks--, c.allPendingTasks === 0) {
        var S = c.onAllReady;
        S();
      }
    }
    function ud(c, n) {
      var o = n.blockedSegment;
      if (o.status === _o) {
        _r(n.context);
        var s = null;
        s = Sr, Sr = n;
        try {
          Hn(c, n, n.node), bn(o.chunks, c.responseState, o.lastPushedText, o.textEmbedded), n.abortSet.delete(n), o.status = Ta, gi(c, n.blockedBoundary, o);
        } catch (S) {
          if (Al(), typeof S == "object" && S !== null && typeof S.then == "function") {
            var p = n.ping;
            S.then(p, p);
          } else
            n.abortSet.delete(n), o.status = Hs, Zs(c, n.blockedBoundary, o, S);
        } finally {
          Sr = s;
        }
      }
    }
    function Hl(c) {
      if (c.status !== Aa) {
        var n = Ps(), o = Po.current;
        Po.current = Ao;
        var s;
        s = Do.getCurrentStack, Do.getCurrentStack = fr;
        var p = ci;
        Lo(c.responseState);
        try {
          var S = c.pingedTasks, A;
          for (A = 0; A < S.length; A++) {
            var M = S[A];
            ud(c, M);
          }
          S.splice(0, A), c.destination !== null && Wl(c, c.destination);
        } catch (Q) {
          pi(c, Q), hi(c, Q);
        } finally {
          Lo(p), Po.current = o, Do.getCurrentStack = s, o === Ao && _r(n);
        }
      }
    }
    function vi(c, n, o) {
      switch (o.parentFlushed = !0, o.status) {
        case _o: {
          var s = o.id = c.nextSegmentId++;
          return o.lastPushedText = !1, o.textEmbedded = !1, Hi(n, c.responseState, s);
        }
        case Ta: {
          o.status = Dl;
          for (var p = !0, S = o.chunks, A = 0, M = o.children, Q = 0; Q < M.length; Q++) {
            for (var he = M[Q]; A < he.index; A++)
              v(n, S[A]);
            p = Mo(c, n, he);
          }
          for (; A < S.length - 1; A++)
            v(n, S[A]);
          return A < S.length && (p = b(n, S[A])), p;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Mo(c, n, o) {
      var s = o.boundary;
      if (s === null)
        return vi(c, n, o);
      if (s.parentFlushed = !0, s.forceClientRender)
        return $n(n, c.responseState, s.errorDigest, s.errorMessage, s.errorComponentStack), vi(c, n, o), il(n, c.responseState);
      if (s.pendingTasks > 0) {
        s.rootSegmentID = c.nextSegmentId++, s.completedSegments.length > 0 && c.partialBoundaries.push(s);
        var p = s.id = Nt(c.responseState);
        return pa(n, c.responseState, p), vi(c, n, o), ha(n, c.responseState);
      } else {
        if (s.byteSize > c.progressiveChunkSize)
          return s.rootSegmentID = c.nextSegmentId++, c.completedBoundaries.push(s), pa(n, c.responseState, s.id), vi(c, n, o), ha(n, c.responseState);
        ji(n, c.responseState);
        var S = s.completedSegments;
        if (S.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var A = S[0];
        return Mo(c, n, A), Ui(n, c.responseState);
      }
    }
    function Qs(c, n, o) {
      return Cu(n, c.responseState, o.id, o.errorDigest, o.errorMessage, o.errorComponentStack);
    }
    function zo(c, n, o) {
      return kt(n, c.responseState, o.formatContext, o.id), Mo(c, n, o), Zt(n, o.formatContext);
    }
    function Js(c, n, o) {
      for (var s = o.completedSegments, p = 0; p < s.length; p++) {
        var S = s[p];
        ec(c, n, o, S);
      }
      return s.length = 0, vs(n, c.responseState, o.id, o.rootSegmentID);
    }
    function dd(c, n, o) {
      for (var s = o.completedSegments, p = 0; p < s.length; p++) {
        var S = s[p];
        if (!ec(c, n, o, S))
          return p++, s.splice(0, p), !1;
      }
      return s.splice(0, p), !0;
    }
    function ec(c, n, o, s) {
      if (s.status === Dl)
        return !0;
      var p = s.id;
      if (p === -1) {
        var S = s.id = o.rootSegmentID;
        if (S === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return zo(c, n, s);
      } else
        return zo(c, n, s), bu(n, c.responseState, p);
    }
    function Wl(c, n) {
      y();
      try {
        var o = c.completedRootSegment;
        o !== null && c.pendingRootTasks === 0 && (Mo(c, n, o), c.completedRootSegment = null, nl(n, c.responseState));
        var s = c.clientRenderedBoundaries, p;
        for (p = 0; p < s.length; p++) {
          var S = s[p];
          Qs(c, n, S);
        }
        s.splice(0, p);
        var A = c.completedBoundaries;
        for (p = 0; p < A.length; p++) {
          var M = A[p];
          Js(c, n, M);
        }
        A.splice(0, p), P(n), y(n);
        var Q = c.partialBoundaries;
        for (p = 0; p < Q.length; p++) {
          var he = Q[p];
          if (!dd(c, n, he)) {
            c.destination = null, p++, Q.splice(0, p);
            return;
          }
        }
        Q.splice(0, p);
        var _e = c.completedBoundaries;
        for (p = 0; p < _e.length; p++) {
          var Ie = _e[p];
          Js(c, n, Ie);
        }
        _e.splice(0, p);
      } finally {
        P(n), c.allPendingTasks === 0 && c.pingedTasks.length === 0 && c.clientRenderedBoundaries.length === 0 && c.completedBoundaries.length === 0 && (c.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), k(n));
      }
    }
    function tc(c) {
      f(function() {
        return Hl(c);
      });
    }
    function fd(c, n) {
      if (c.status === Ca) {
        c.status = Aa, O(n, c.fatalError);
        return;
      }
      if (c.status !== Aa && c.destination === null) {
        c.destination = n;
        try {
          Wl(c, n);
        } catch (o) {
          pi(c, o), hi(c, o);
        }
      }
    }
    function nc(c, n) {
      try {
        var o = c.abortableTasks;
        o.forEach(function(s) {
          return Bl(s, c, n);
        }), o.clear(), c.destination !== null && Wl(c, c.destination);
      } catch (s) {
        pi(c, s), hi(c, s);
      }
    }
    function pd(c, n) {
      return new Promise(function(o, s) {
        var p, S, A = new Promise(function(Xe, gt) {
          S = Xe, p = gt;
        });
        function M() {
          var Xe = new ReadableStream(
            {
              type: "bytes",
              pull: function(gt) {
                fd(he, gt);
              },
              cancel: function(gt) {
                nc(he);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          Xe.allReady = A, o(Xe);
        }
        function Q(Xe) {
          A.catch(function() {
          }), s(Xe);
        }
        var he = Oo(c, Yt(n ? n.identifierPrefix : void 0, n ? n.nonce : void 0, n ? n.bootstrapScriptContent : void 0, n ? n.bootstrapScripts : void 0, n ? n.bootstrapModules : void 0), nn(n ? n.namespaceURI : void 0), n ? n.progressiveChunkSize : void 0, n ? n.onError : void 0, S, M, Q, p);
        if (n && n.signal) {
          var _e = n.signal, Ie = function() {
            nc(he, _e.reason), _e.removeEventListener("abort", Ie);
          };
          _e.addEventListener("abort", Ie);
        }
        tc(he);
      });
    }
    gc.renderToReadableStream = pd, gc.version = t;
  }()), gc;
}
var Mi, pf;
process.env.NODE_ENV === "production" ? (Mi = CS(), pf = AS()) : (Mi = LS(), pf = PS());
Ba.version = Mi.version;
Ba.renderToString = Mi.renderToString;
Ba.renderToStaticMarkup = Mi.renderToStaticMarkup;
Ba.renderToNodeStream = Mi.renderToNodeStream;
Ba.renderToStaticNodeStream = Mi.renderToStaticNodeStream;
Ba.renderToReadableStream = pf.renderToReadableStream;
const DS = ({ width: e, height: t, runtime: r }) => {
  var de, Ee;
  const { config: i } = se.useContext(bt), { sankey: a } = i, l = (re) => re.visualizationType === "Sankey", [f, d] = se.useState(0), u = se.useRef([]), [h, y] = se.useState(""), v = (re) => {
    y(re);
  }, b = () => {
    y("");
  }, [P, k] = se.useState(!1);
  se.useEffect(() => {
    window.innerWidth < 768 && window.innerHeight > window.innerWidth && k(!0);
  }, [window.innerWidth]);
  const N = () => {
    k(!1);
  };
  if (se.useEffect(() => {
    var Oe;
    let re = 0;
    (Oe = u == null ? void 0 : u.current) == null || Oe.map((ve) => {
      const ce = ve == null ? void 0 : ve.getBoundingClientRect().width;
      ce > re && (re = ce);
    }), d(re);
  }, [u, a, window.innerWidth]), !l(i))
    return;
  const R = i == null ? void 0 : i.data[0], m = Array.from(new Set((de = R == null ? void 0 : R.links) == null ? void 0 : de.flatMap((re) => [re.source, re.target]))), O = {
    nodes: m.map((re) => ({ id: re })),
    links: (Ee = R == null ? void 0 : R.links) == null ? void 0 : Ee.map((re) => ({
      source: m.findIndex((Oe) => Oe === re.source),
      target: m.findIndex((Oe) => Oe === re.target),
      value: re.value
    }))
  }, _ = kS().nodeWidth(a.nodeSize.nodeWidth).nodePadding(a.nodePadding).iterations(a.iterations).nodeAlign(vS).extent([
    [a.margin.margin_x, Number(a.margin.margin_y)],
    [e - 5 - f, i.heights.vertical - 50]
  ]), { nodes: C, links: V } = _(O), H = (re) => {
    var G;
    let Oe = 30, ve = 0, ce = "node-value--storynode", be = !0;
    return (G = R == null ? void 0 : R.storyNodeText) != null && G.every((Pe) => Pe.StoryNode !== re) && (be = !1, ve = 10, Oe = 8, ce = "node-value"), { textPositionHorizontal: Oe, textPositionVertical: ve, classStyle: ce, storyNodes: be };
  }, X = (re) => {
    const Oe = O.nodes.find((be) => be.id === re), ve = [], ce = [];
    return Oe && (V.forEach((be) => {
      const G = be.target, Pe = be.source;
      G.id === re && ve.push(Pe.id);
    }), ve.forEach((be) => {
      V.forEach((G) => {
        const Pe = G.target, Se = G.source;
        Pe.id === h && Se.id === be && ce.push(G);
      });
    })), { sourceNodes: ve, activeLinks: ce };
  }, le = `${((R == null ? void 0 : R.tooltips.find((re) => re.node === h)) || {}).value}`, Z = `${((R == null ? void 0 : R.tooltips.find((re) => re.node === h)) || {}).summary}`, W = ((R == null ? void 0 : R.tooltips.find((re) => re.node === h)) || {}).column1Label, U = ((R == null ? void 0 : R.tooltips.find((re) => re.node === h)) || {}).column2Label, B = ((R == null ? void 0 : R.tooltips.find((re) => re.node === h)) || {}).column1, $ = ((R == null ? void 0 : R.tooltips.find((re) => re.node === h)) || {}).column2, ne = ({ columnData: re }) => /* @__PURE__ */ React.createElement("ul", null, re == null ? void 0 : re.map((Oe, ve) => /* @__PURE__ */ React.createElement("li", { key: ve }, Oe.label, ": ", Oe.value, " (", Oe.additional_info, "%)"))), ee = Ba.renderToString(/* @__PURE__ */ React.createElement(ne, { columnData: B })), ie = Ba.renderToString(/* @__PURE__ */ React.createElement(ne, { columnData: $ })), q = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${h}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${le}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${Z}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${W}<strong></span>
                          ${ee}
                        </div>
                        <div>
                          <span><strong>${U}<strong></span>
                          ${ie}
                        </div>
                      </div>
                    </div>`, j = O.nodes.map((re, Oe) => {
    var Ke, Ge;
    let { textPositionHorizontal: ve, textPositionVertical: ce, classStyle: be, storyNodes: G } = H(re.id), { sourceNodes: Pe } = X(h), Se = a.opacity.nodeOpacityDefault, je = a.nodeColor.default;
    return h !== re.id && h !== "" && !Pe.includes(re.id) && (je = a.nodeColor.inactive, Se = a.opacity.nodeOpacityInactive), /* @__PURE__ */ React.createElement(Je, { className: "", key: Oe }, /* @__PURE__ */ React.createElement(
      "rect",
      {
        height: re.y1 - re.y0 + 2,
        width: _.nodeWidth(),
        x: re.x0,
        y: re.y0 - 1,
        fill: je,
        fillOpacity: Se,
        rx: a.rxValue,
        "data-tooltip-html": R.tooltips && i.enableTooltips ? q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`,
        onClick: () => v(re.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), G ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      vt,
      {
        x: re.x0 + ve,
        textAnchor: O.nodes.length - 1 === Oe ? "end" : "start",
        verticalAnchor: "end",
        y: (re.y1 + re.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        className: "node-text",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(re.id),
        "data-tooltip-html": R.tooltips && i.enableTooltips ? q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`
      },
      (((Ke = R == null ? void 0 : R.storyNodeText) == null ? void 0 : Ke.find((Be) => Be.StoryNode === re.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ React.createElement(
      vt,
      {
        verticalAnchor: "end",
        className: be,
        x: re.x0 + ve,
        y: (re.y1 + re.y0 + 25) / 2,
        fill: a.storyNodeFontColor || a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(re.id),
        "data-tooltip-html": R.tooltips && i.enableTooltips ? q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`
      },
      typeof re.value == "number" ? re.value.toLocaleString() : re.value
    ), /* @__PURE__ */ React.createElement(
      vt,
      {
        x: re.x0 + ve,
        y: (re.y1 + re.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: O.nodes.length === Oe ? "end" : "start",
        className: "node-text",
        verticalAnchor: "end",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(re.id),
        "data-tooltip-html": R.tooltips && i.enableTooltips ? q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`
      },
      (((Ge = R == null ? void 0 : R.storyNodeText) == null ? void 0 : Ge.find((Be) => Be.StoryNode === re.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      vt,
      {
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(re.id),
        "data-tooltip-html": R.tooltips && i.enableTooltips ? q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`,
        x: re.x0 + ve,
        y: (re.y1 + re.y0) / 2 + ce,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start"
      },
      re.id
    ), /* @__PURE__ */ React.createElement(
      "text",
      {
        x: re.x0 + ve,
        y: (re.y1 + re.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(re.id),
        "data-tooltip-html": R.tooltips && i.enableTooltips ? q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`
      },
      /* @__PURE__ */ React.createElement("tspan", { className: be }, a.nodeValueStyle.textBefore + (typeof re.value == "number" ? re.value.toLocaleString() : re.value) + a.nodeValueStyle.textAfter)
    )));
  }), J = V.map((re, Oe) => {
    const ce = TS()(re);
    let be = a.opacity.LinkOpacityDefault, G = a.linkColor.default, { activeLinks: Pe } = X(h);
    return !Pe.includes(re) && h !== "" && (G = a.linkColor.inactive, be = a.opacity.LinkOpacityInactive), /* @__PURE__ */ React.createElement(
      "path",
      {
        key: Oe,
        d: ce,
        stroke: G,
        fill: "none",
        strokeOpacity: be,
        strokeWidth: re.width + 2,
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(re.target.id || null),
        "data-tooltip-html": R.tooltips && i.enableTooltips ? q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`
      }
    );
  }), oe = O.nodes.reduce((re, Oe) => Math.max(re, Oe.depth), -1), ye = O.nodes.filter((re) => re.depth === oe).map((re, Oe) => {
    var Ke, Ge;
    let { textPositionHorizontal: ve, textPositionVertical: ce, classStyle: be, storyNodes: G } = H(re.id), { sourceNodes: Pe } = X(h), Se = a.opacity.nodeOpacityDefault, je = a.nodeColor.default;
    return h !== re.id && h !== "" && !Pe.includes(re.id) && (je = a.nodeColor.inactive, Se = a.opacity.nodeOpacityInactive), /* @__PURE__ */ React.createElement(Je, { className: "", key: Oe, innerRef: (Be) => u.current[Oe] = Be }, /* @__PURE__ */ React.createElement(
      "rect",
      {
        height: re.y1 - re.y0 + 2,
        width: _.nodeWidth(),
        x: re.x0,
        y: re.y0 - 1,
        fill: je,
        fillOpacity: Se,
        rx: a.rxValue,
        "data-tooltip-html": R.tooltips && i.enableTooltips ? q : null,
        "data-tooltip-id": "tooltip",
        onClick: () => v(re.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), G ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      vt,
      {
        x: re.x0 + ve,
        textAnchor: O.nodes.length - 1 === Oe ? "end" : "start",
        verticalAnchor: "end",
        y: (re.y1 + re.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((Ke = R == null ? void 0 : R.storyNodeText) == null ? void 0 : Ke.find((Be) => Be.StoryNode === re.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ React.createElement(vt, { verticalAnchor: "end", className: be, x: re.x0 + ve, y: (re.y1 + re.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof re.value == "number" ? re.value.toLocaleString() : re.value), /* @__PURE__ */ React.createElement(
      vt,
      {
        x: re.x0 + ve,
        y: (re.y1 + re.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: O.nodes.length === Oe ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Ge = R == null ? void 0 : R.storyNodeText) == null ? void 0 : Ge.find((Be) => Be.StoryNode === re.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("text", { x: re.x0 + ve, y: (re.y1 + re.y0) / 2 + ce, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("tspan", { id: re.id, className: "node-id" }, re.id)), /* @__PURE__ */ React.createElement(
      "text",
      {
        x: re.x0 + ve,
        y: (re.y1 + re.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ React.createElement("tspan", { onClick: () => v(re.id), className: be }, a.nodeValueStyle.textBefore + (typeof re.value == "number" ? re.value.toLocaleString() : re.value) + a.nodeValueStyle.textAfter)
    )));
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ React.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(i.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ React.createElement(Je, { className: "links" }, J), /* @__PURE__ */ React.createElement(Je, { className: "nodes" }, j), /* @__PURE__ */ React.createElement(Je, { className: "finalNodes", style: { display: "none" } }, ye)), /* @__PURE__ */ React.createElement(dy, { id: `cdc-open-viz-tooltip-${r.uniqueId}-sankey`, afterHide: () => b(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), P && /* @__PURE__ */ React.createElement("div", { className: "popup" }, /* @__PURE__ */ React.createElement("div", { className: "popup-content" }, /* @__PURE__ */ React.createElement("button", { className: "visually-hidden", onClick: N }, "Select for accessible version."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var tr = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
function _S(e) {
  var t = e.labelOffset, r = e.labelProps, i = e.orientation, a = e.range, l = e.tickLabelFontSize, f = e.tickLength, d = i === tr.left || i === tr.top ? -1 : 1, u, h, y;
  if (i === tr.top || i === tr.bottom) {
    var v = i === tr.bottom && typeof r.fontSize == "number" ? r.fontSize : 0;
    u = (Number(a[0]) + Number(a[a.length - 1])) / 2, h = d * (f + t + l + v);
  } else
    u = d * ((Number(a[0]) + Number(a[a.length - 1])) / 2), h = -(f + t), y = "rotate(" + d * 90 + ")";
  return {
    x: u,
    y: h,
    transform: y
  };
}
function is() {
  return is = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, is.apply(this, arguments);
}
function OS(e) {
  var t = e.hideTicks, r = e.horizontal, i = e.orientation, a = e.tickClassName, l = e.tickComponent, f = e.tickLabelProps, d = e.tickStroke, u = d === void 0 ? "#222" : d, h = e.tickTransform, y = e.ticks, v = e.strokeWidth, b = e.tickLineProps;
  return y.map(function(P) {
    var k, N = P.value, R = P.index, m = P.from, O = P.to, D = P.formattedValue, L = (k = f[R]) != null ? k : {}, _ = Math.max(10, typeof L.fontSize == "number" && L.fontSize || 0), C = O.y + (r && i !== tr.top ? _ : 0);
    return /* @__PURE__ */ E.createElement(Je, {
      key: "visx-tick-" + N + "-" + R,
      className: wn("visx-axis-tick", a),
      transform: h
    }, !t && /* @__PURE__ */ E.createElement(Qt, is({
      from: m,
      to: O,
      stroke: u,
      strokeWidth: v,
      strokeLinecap: "square"
    }, b)), l ? l(is({}, L, {
      x: O.x,
      y: C,
      formattedValue: D
    })) : /* @__PURE__ */ E.createElement(vt, is({
      x: O.x,
      y: C
    }, L), D));
  });
}
function Jc() {
  return Jc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Jc.apply(this, arguments);
}
var Rh = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function NS(e) {
  var t = e.axisFromPoint, r = e.axisLineClassName, i = e.axisToPoint, a = e.hideAxisLine, l = e.hideTicks, f = e.horizontal, d = e.label, u = d === void 0 ? "" : d, h = e.labelClassName, y = e.labelOffset, v = y === void 0 ? 14 : y, b = e.labelProps, P = b === void 0 ? Rh : b, k = e.orientation, N = k === void 0 ? tr.bottom : k, R = e.scale, m = e.stroke, O = m === void 0 ? "#222" : m, D = e.strokeDasharray, L = e.strokeWidth, _ = L === void 0 ? 1 : L, C = e.tickClassName, V = e.tickComponent, H = e.tickLineProps, X = e.tickLabelProps, le = e.tickLength, Z = le === void 0 ? 8 : le, W = e.tickStroke, U = W === void 0 ? "#222" : W, B = e.tickTransform, $ = e.ticks, ne = e.ticksComponent, ee = ne === void 0 ? OS : ne, ie = Jc({}, Rh, typeof X == "object" ? X : null), q = $.map(function(J) {
    var oe = J.value, De = J.index;
    return typeof X == "function" ? X(oe, De, $) : ie;
  }), j = Math.max.apply(Math, [10].concat(q.map(function(J) {
    return typeof J.fontSize == "number" ? J.fontSize : 0;
  })));
  return /* @__PURE__ */ E.createElement(E.Fragment, null, ee({
    hideTicks: l,
    horizontal: f,
    orientation: N,
    scale: R,
    tickClassName: C,
    tickComponent: V,
    tickLabelProps: q,
    tickStroke: U,
    tickTransform: B,
    ticks: $,
    strokeWidth: _,
    tickLineProps: H
  }), !a && /* @__PURE__ */ E.createElement(Qt, {
    className: wn("visx-axis-line", r),
    from: t,
    to: i,
    stroke: O,
    strokeWidth: _,
    strokeDasharray: D
  }), u && /* @__PURE__ */ E.createElement(vt, Jc({
    className: wn("visx-axis-label", h)
  }, _S({
    labelOffset: v,
    labelProps: P,
    orientation: N,
    range: R.range(),
    tickLabelFontSize: j,
    tickLength: Z
  }), P), u));
}
function FS(e, t) {
  t === void 0 && (t = "center");
  var r = e;
  if (t !== "start" && "bandwidth" in r) {
    var i = r.bandwidth();
    return t === "center" && (i /= 2), r.round() && (i = Math.round(i)), function(a) {
      var l = r(a);
      return typeof l == "number" ? l + i : l;
    };
  }
  return e;
}
function MS(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Dg;
}
function vc(e, t) {
  var r = e.x, i = e.y;
  return new of(t ? {
    x: r,
    y: i
  } : {
    x: i,
    y: r
  });
}
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, hf.apply(this, arguments);
}
var Fd = 0;
function zS(e) {
  return e === void 0 && (e = Fd), typeof e == "number" ? {
    start: e,
    end: e
  } : hf({
    start: Fd,
    end: Fd
  }, e);
}
var IS = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function mf() {
  return mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, mf.apply(this, arguments);
}
function $S(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function hu(e) {
  var t = e.children, r = t === void 0 ? NS : t, i = e.axisClassName, a = e.hideAxisLine, l = a === void 0 ? !1 : a, f = e.hideTicks, d = f === void 0 ? !1 : f, u = e.hideZero, h = u === void 0 ? !1 : u, y = e.innerRef, v = e.left, b = v === void 0 ? 0 : v, P = e.numTicks, k = P === void 0 ? 10 : P, N = e.orientation, R = N === void 0 ? tr.bottom : N, m = e.rangePadding, O = m === void 0 ? 0 : m, D = e.scale, L = e.tickFormat, _ = e.tickLength, C = _ === void 0 ? 8 : _, V = e.tickValues, H = e.top, X = H === void 0 ? 0 : H, le = $S(e, IS), Z = L ?? MS(D), W = R === tr.left, U = R === tr.top, B = U || R === tr.bottom, $ = FS(D), ne = W || U ? -1 : 1, ee = D.range(), ie = zS(O), q = vc({
    x: Number(ee[0]) + 0.5 - ie.start,
    y: 0
  }, B), j = vc({
    x: Number(ee[ee.length - 1]) + 0.5 + ie.end,
    y: 0
  }, B), J = (V ?? Pg(D, k)).filter(function(De) {
    return !h || De !== 0 && De !== "0";
  }).map(function(De, ye) {
    return {
      value: De,
      index: ye
    };
  }), oe = J.map(function(De) {
    var ye = De.value, de = De.index, Ee = Lg($(ye));
    return {
      value: ye,
      index: de,
      from: vc({
        x: Ee,
        y: 0
      }, B),
      to: vc({
        x: Ee,
        y: C * ne
      }, B),
      formattedValue: Z(ye, de, J)
    };
  });
  return /* @__PURE__ */ E.createElement(Je, {
    className: wn("visx-axis", i),
    innerRef: y,
    top: X,
    left: b
  }, r(mf({}, le, {
    axisFromPoint: q,
    axisToPoint: j,
    hideAxisLine: l,
    hideTicks: d,
    hideZero: h,
    horizontal: B,
    numTicks: k,
    orientation: R,
    rangePadding: O,
    scale: D,
    tickFormat: Z,
    tickLength: C,
    tickPosition: $,
    tickSign: ne,
    ticks: oe
  })));
}
var BS = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function eu() {
  return eu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, eu.apply(this, arguments);
}
function HS(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var WS = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function VS(e) {
  var t = e.axisClassName, r = e.labelOffset, i = r === void 0 ? 36 : r, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = HS(e, BS), u = typeof f == "function" ? f : eu({}, WS, f);
  return /* @__PURE__ */ E.createElement(hu, eu({
    axisClassName: wn("visx-axis-left", t),
    labelOffset: i,
    orientation: tr.left,
    tickLabelProps: u,
    tickLength: l
  }, d));
}
var jS = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function tu() {
  return tu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, tu.apply(this, arguments);
}
function US(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var KS = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function YS(e) {
  var t = e.axisClassName, r = e.labelOffset, i = r === void 0 ? 36 : r, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = US(e, jS), u = typeof f == "function" ? f : tu({}, KS, f);
  return /* @__PURE__ */ E.createElement(hu, tu({
    axisClassName: wn("visx-axis-right", t),
    labelOffset: i,
    orientation: tr.right,
    tickLabelProps: u,
    tickLength: l
  }, d));
}
var XS = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function nu() {
  return nu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, nu.apply(this, arguments);
}
function qS(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var GS = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function ZS(e) {
  var t = e.axisClassName, r = e.labelOffset, i = r === void 0 ? 8 : r, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = qS(e, XS), u = typeof f == "function" ? f : nu({}, GS, f);
  return /* @__PURE__ */ E.createElement(hu, nu({
    axisClassName: wn("visx-axis-top", t),
    labelOffset: i,
    orientation: tr.top,
    tickLabelProps: u,
    tickLength: l
  }, d));
}
var QS = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function ru() {
  return ru = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, ru.apply(this, arguments);
}
function JS(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var eE = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function wc(e) {
  var t = e.axisClassName, r = e.labelOffset, i = r === void 0 ? 8 : r, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = JS(e, QS), u = typeof f == "function" ? f : ru({}, eE, f);
  return /* @__PURE__ */ E.createElement(hu, ru({
    axisClassName: wn("visx-axis-bottom", t),
    labelOffset: i,
    orientation: tr.bottom,
    tickLabelProps: u,
    tickLength: l
  }, d));
}
const os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: xb,
  curveBasisClosed: bb,
  curveBasisOpen: Sb,
  curveBundle: Eb,
  curveCardinal: kb,
  curveCardinalClosed: Rb,
  curveCardinalOpen: wb,
  curveCatmullRom: Tb,
  curveCatmullRomClosed: Cb,
  curveCatmullRomOpen: Ab,
  curveLinear: su,
  curveLinearClosed: Kd,
  curveMonotoneX: Rc,
  curveMonotoneY: Lb,
  curveNatural: Pb,
  curveStep: Db,
  curveStepAfter: Ob,
  curveStepBefore: _b
}, Symbol.toStringTag, { value: "Module" })), tE = (e) => {
  var C, V;
  const { xScale: t, yScale: r, yMax: i, xMax: a, handleTooltipMouseOver: l, handleTooltipMouseOff: f, isDebug: d, children: u } = e;
  let { transformedData: h, config: y, handleLineType: v, parseDate: b, formatDate: P, formatNumber: k, seriesHighlight: N, colorScale: R, rawData: m, brushConfig: O } = se.useContext(bt);
  const D = (C = y.brush) != null && C.active && ((V = O.data) != null && V.length) ? O.data : h;
  if (!D)
    return;
  const L = (H) => (En(y.xAxis) ? t(b(H[y.xAxis.dataKey], !1)) : t(H[y.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), _ = (H, X, le = void 0) => r(H[le.dataKey]);
  return D && /* @__PURE__ */ E.createElement("svg", null, /* @__PURE__ */ E.createElement(Cr, { component: "AreaChart" }, /* @__PURE__ */ E.createElement(Je, { className: "area-chart", key: "area-wrapper", left: Number(y.yAxis.size) }, (y.runtime.areaSeriesKeys || y.series).map((H, X) => {
    let le = D.map((B) => ({
      [y.xAxis.dataKey]: B[y.xAxis.dataKey],
      [H.dataKey]: B[H.dataKey]
    })), Z = os[H.lineType], W = y.legend.behavior === "highlight" && N.length > 0 && N.indexOf(H.dataKey) === -1, U = y.legend.behavior === "highlight" || N.length === 0 || N.indexOf(H.dataKey) !== -1;
    return /* @__PURE__ */ E.createElement(E.Fragment, { key: X }, /* @__PURE__ */ E.createElement(
      Hr,
      {
        data: le,
        x: (B) => L(B),
        y: (B) => _(B, X, H),
        stroke: U ? R ? R(y.runtime.seriesLabels ? y.runtime.seriesLabels[H.dataKey] : H.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: Z,
        strokeDasharray: H.type ? v(H.type) : 0
      }
    ), /* @__PURE__ */ E.createElement(
      i0,
      {
        key: "area-chart",
        fill: U ? R ? R(y.runtime.seriesLabels ? y.runtime.seriesLabels[H.dataKey] : H.dataKey) : "#000" : "transparent",
        fillOpacity: W ? 0.25 : 0.5,
        data: le,
        x: (B) => L(B),
        y: (B) => _(B, X, H),
        yScale: r,
        curve: Z,
        strokeDasharray: H.type ? v(H.type) : 0
      }
    ));
  }), /* @__PURE__ */ E.createElement(hr, { width: Number(a), height: Number(i), fill: "transparent", fillOpacity: 0.05, onMouseMove: (H) => l(H, m), onMouseLeave: f }))));
}, nE = se.memo(tE), rE = ({ xScale: e, yScale: t, yMax: r, xMax: i, handleTooltipMouseOver: a, handleTooltipMouseOff: l, isDebug: f }) => {
  var N, R;
  let { transformedData: d, config: u, seriesHighlight: h, colorScale: y, rawData: v } = se.useContext(bt);
  const b = (N = u.brush) != null && N.active && ((R = u.brush.data) != null && R.length) ? u.brush.data : d;
  if (!b)
    return;
  const P = (m) => {
    if (u.xAxis.type === "categorical")
      return e(m);
    if (En(u.xAxis)) {
      let O = new Date(m);
      return e(O);
    }
  };
  return b && /* @__PURE__ */ E.createElement("svg", { height: Number(r) }, /* @__PURE__ */ E.createElement(Cr, { component: "AreaChartStacked" }, /* @__PURE__ */ E.createElement(Je, { className: "area-chart", key: "area-wrapper", left: Number(u.yAxis.size) + 2 / 2, height: Number(r), style: { overflow: "hidden" } }, /* @__PURE__ */ E.createElement(
    d0,
    {
      data: b,
      keys: u.runtime.areaSeriesKeys.map((m) => m.dataKey) || u.series.map((m) => m.dataKey),
      x0: (m) => P(m.data[u.xAxis.dataKey]),
      y0: (m) => Number(t(m[0])),
      y1: (m) => Number(t(m[1])),
      curve: os[Pc[u.stackedAreaChartLineType]]
    },
    ({ stacks: m, path: O }) => m.map((D, L) => {
      let _ = u.legend.behavior === "highlight" && h.length > 0 && h.indexOf(D.key) === -1, C = u.legend.behavior === "highlight" || h.length === 0 || h.indexOf(D.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ E.createElement(
          "path",
          {
            key: D.key,
            d: O(D) || "",
            strokeWidth: 2,
            stroke: C ? y ? y(u.runtime.seriesLabels ? u.runtime.seriesLabels[D.key] : D.key) : "#000" : "transparent",
            fillOpacity: _ ? 0.2 : 1,
            fill: C ? y ? y(u.runtime.seriesLabels ? u.runtime.seriesLabels[D.key] : D.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ E.createElement(hr, { width: Number(i), height: Number(r), fill: "transparent", onMouseMove: (m) => a(m, v), onMouseLeave: l }))));
}, aE = se.memo(rE), mu = () => {
  const { config: e, colorPalettes: t, tableData: r, updateConfig: i, parseDate: a, formatDate: l, setSeriesHighlight: f, seriesHighlight: d } = se.useContext(bt), { orientation: u } = e, [h, y] = se.useState(null), v = u === "horizontal", b = 1, P = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, k = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, N = e.yAxis.labelPlacement === "Below Bar", R = e.yAxis.displayNumbersOnBar, m = e.orientation === "horizontal" ? "yAxis" : "xAxis", O = e.barStyle === "rounded", D = e.visualizationSubType === "stacked", L = e.tipRounding, _ = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", C = e.runtime.seriesKeys.length, V = { small: 16, medium: 18, large: 20 }, H = Object.keys(e.runtime.seriesLabels).length > 1, le = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (d != null && d.length) ? d : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
  return se.useEffect(() => {
    u === "horizontal" && !e.yAxis.labelPlacement && i({
      ...e,
      yAxis: {
        ...e.yAxis,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, i]), se.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && i({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), se.useEffect(() => {
    e.visualizationSubType === "horizontal" && i({
      ...e,
      orientation: "horizontal"
    });
  }, []), se.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && i({ ...e, isLollipopChart: !0 }), (O || e.barStyle === "flat") && i({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    isHorizontal: v,
    barBorderWidth: b,
    lollipopBarWidth: P,
    lollipopShapeSize: k,
    isLabelBelowBar: N,
    displayNumbersOnBar: R,
    shouldSuppress: (j) => {
      var J;
      return (J = e.preliminaryData) == null ? void 0 : J.some((oe) => {
        const De = oe.column ? oe.column === j.key : !0, ye = String(j.value) === String(oe.value) && oe.value !== "";
        return De && ye && oe.symbol && oe.type === "suppression";
      });
    },
    section: m,
    isRounded: O,
    isStacked: D,
    tipRounding: L,
    radius: _,
    stackCount: C,
    barStackedSeriesKeys: le,
    fontSize: V,
    hasMultipleSeries: H,
    applyRadius: (j) => {
      if (j == null || !O)
        return {};
      let J = {};
      return (D && j + 1 === C || !D) && (J = v ? { borderRadius: `0 ${_}  ${_}  0` } : { borderRadius: `${_} ${_} 0 0` }), !D && j === -1 && (J = v ? { borderRadius: `${_} 0  0 ${_} ` } : { borderRadius: ` 0  0 ${_} ${_}` }), L === "full" && D && j === 0 && C > 1 && (J = v ? { borderRadius: `${_} 0 0 ${_}` } : { borderRadius: `0 0 ${_} ${_}` }), L === "full" && (D && j === 0 && C === 1 || !D) && (J = { borderRadius: _ }), J;
    },
    updateBars: (j) => {
      if (e.visualizationType !== "Bar" && !v)
        return j;
      const J = [...j];
      let oe;
      const De = {
        stacked: e.barHeight,
        lollipop: P
      };
      D ? oe = De.stacked : oe = De[e.isLollipopChart ? "lollipop" : "stacked"] * C;
      const ye = N ? V[e.fontSize] * 1.2 : 0;
      let de = Number(e.barSpace), Ee = J.length * (oe + ye + de);
      return v && (e.heights.horizontal = Ee), J.map((re, Oe) => {
        let ve = 0;
        return re.index !== 0 && (ve = (oe + de + ye) * Oe), { ...re, y: ve, height: oe };
      });
    },
    assignColorsToValues: (j, J, oe) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return oe;
      const De = e.customColors ?? t[e.palette], ye = r.map((Oe) => Oe[e.legend.colorCode]);
      let de = /* @__PURE__ */ new Map(), Ee = [];
      for (let Oe = 0; Oe < ye.length; Oe++)
        de.has(ye[Oe]) || de.set(ye[Oe], De[de.size % De.length]), Ee.push(de.get(ye[Oe]));
      for (; Ee.length < j; )
        Ee = Ee.concat(Ee);
      return Ee[J];
    },
    getHighlightedBarColorByValue: (j) => {
      const J = e == null ? void 0 : e.highlightedBarValues.find((oe) => {
        if (oe.value)
          return e.xAxis.type === "date" ? l(a(oe.value)) === j : oe.value === j;
      });
      return J != null && J.color ? J.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (j) => {
      const J = e == null ? void 0 : e.highlightedBarValues.filter((oe) => {
        if (oe.value)
          return e.xAxis.type === "date" ? l(a(oe.value)) === j : oe.value === j;
      })[0];
      return J != null && J.color ? J : !1;
    },
    getAdditionalColumn: (j, J) => {
      if (!J)
        return "";
      const oe = e.columns, De = [];
      let ye = "";
      const de = r.find((Ee) => Ee[e.xAxis.dataKey] === J) || {};
      return Object.keys(oe).forEach((Ee) => {
        if (j && e.columns[Ee].series && e.columns[Ee].series !== j)
          return;
        const re = {
          addColPrefix: e.columns[Ee].prefix,
          addColSuffix: e.columns[Ee].suffix,
          addColRoundTo: e.columns[Ee].roundToPlace ? e.columns[Ee].roundToPlace : "",
          addColCommas: e.columns[Ee].commas
        }, Oe = vf(de[e.columns[Ee].name], "left", !0, e, re);
        e.columns[Ee].tooltips && De.push([e.columns[Ee].label, Oe]);
      }), De.forEach((Ee) => {
        ye += `${Ee[0]} : ${Ee[1]} <br/>`;
      }), ye;
    },
    hoveredBar: h,
    setHoveredBar: y,
    onMouseOverBar: (j, J) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && J && f([J]), y(j);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && f([]);
    }
  };
}, ms = se.createContext(null), Vf = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: r = 1, yMax: i, handleTooltipMouseOff: a, handleTooltipMouseOver: l, handleTooltipClick: f, tooltipData: d, showTooltip: u, hideTooltip: h }) => {
  const { parseDate: y, config: v } = se.useContext(bt), { runtime: b, regions: P, visualizationType: k, orientation: N, xAxis: R } = v, m = e.domain(), O = (_) => {
    let C;
    if (!(_ != null && _.fromType) || _.fromType === "Fixed") {
      const V = new Date(_.from), H = y(Vl(v.xAxis.dateParseFormat, V)).getTime();
      C = e(H), k === "Bar" && R.type === "date-time" && (C = C - t * r / 2);
    }
    if (_.fromType === "Previous Days") {
      const V = Number(_.from) || 0;
      m.map((Z) => Vl(v.xAxis.dateParseFormat, new Date(Z)));
      const H = _.toType === "Last Date" ? new Date(m[m.length - 1]).getTime() : new Date(_.to), X = v.xAxis.type === "categorical" ? Vl(v.xAxis.dateParseFormat, H) : Vl(v.xAxis.dateParseFormat, H), le = new Date(X);
      if (C = new Date(le.setDate(le.getDate() - Number(V))), R.type === "date") {
        C = new Date(Vl(R.dateParseFormat, C)).getTime();
        let Z = m[0], W = Math.abs(C - Z);
        for (let U = 1; U < m.length; U++) {
          const B = Math.abs(C - m[U]);
          B < W && (W = B, Z = m[U]);
        }
        C = Z;
      }
      if (R.type === "categorical") {
        let Z = m[0], W = Math.abs(new Date(C).getTime() - new Date(Z).getTime());
        for (let U = 1; U < m.length; U++) {
          const B = Math.abs(new Date(C).getTime() - new Date(m[U]).getTime());
          B < W && (W = B, Z = m[U]);
        }
        C = Z;
      }
      C = e(C);
    }
    if (R.type === "categorical" && _.fromType !== "Previous Days" && (C = e(_.from)), k === "Line" || k === "Area Chart") {
      let V = Number(v.yAxis.size);
      e.bandwidth && (V += e.bandwidth() / 2), C = C + V;
    }
    return k === "Bar" && v.xAxis.type === "date-time" && _.fromType === "Previous Days" && (C = C - t * r / 2), C;
  }, D = (_) => {
    let C;
    if (R.type === "categorical" && (C = e(_.to)), En(R) && ((!(_ != null && _.toType) || _.toType === "Fixed") && (C = e(y(_.to).getTime())), (k === "Bar" || v.visualizationType === "Combo") && (C = _.toType !== "Last Date" ? e(y(_.to).getTime()) + t * r : C)), _.toType === "Last Date") {
      const V = m[m.length - 1];
      C = Number(e(V) + ((k === "Bar" || k === "Combo") && v.xAxis.type === "date" ? t * r : 0));
    }
    if (k === "Line" || k === "Area Chart") {
      let V = Number(v.yAxis.size);
      e.bandwidth && (V += e.bandwidth() / 2), C = C + V;
    }
    return k === "Bar" && v.xAxis.type === "date-time" && _.toType !== "Last Date" && (C = C - t * r / 2), (k === "Bar" || k === "Combo") && R.type === "categorical" && (C = C + (k === "Bar" || k === "Combo" ? t * r : 0)), C;
  }, L = (_, C) => _ - C;
  if (P && N === "vertical")
    return P.map((_) => {
      const C = O(_), V = D(_), H = L(V, C);
      if (!C || !V)
        return null;
      const X = () => /* @__PURE__ */ E.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${C} -5
                L${C} 5
                M${C} 0
                L${V} 0
                M${V} -5
                L${V} 5`
        }
      ), le = () => /* @__PURE__ */ E.createElement("rect", { x: C, y: 0, width: H, height: i, fill: _.background, opacity: 0.3 });
      return /* @__PURE__ */ E.createElement(Je, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: _.label, onMouseMove: l, onMouseLeave: a, handleTooltipClick: f, tooltipData: JSON.stringify(d), showTooltip: u }, /* @__PURE__ */ E.createElement(X, null), /* @__PURE__ */ E.createElement(le, null), /* @__PURE__ */ E.createElement(vt, { x: C + H / 2, y: 5, fill: _.color, verticalAnchor: "start", textAnchor: "middle" }, _.label));
    });
};
function yu(e) {
  var J, oe;
  const { config: t, index: r, id: i, className: a, background: l, borderColor: f, borderWidth: d, width: u, height: h, x: y, y: v, onMouseOver: b, onMouseLeave: P, onClick: k, tooltipHtml: N, tooltipId: R, styleOverrides: m, seriesHighlight: O } = e, D = Math.max(0, u), L = Math.max(0, h), _ = t.orientation === "horizontal", C = t.barStyle === "rounded", V = t.visualizationSubType === "stacked", H = t.tipRounding, X = t.visualizationType === "Combo" && ((oe = (J = t.runtime) == null ? void 0 : J.barSeriesKeys) == null ? void 0 : oe.length), le = t.runtime.seriesKeys.length, Z = t.visualizationType === "Bar" && t.legend.axisAlign && (O != null && O.length) ? O == null ? void 0 : O.length : 0, W = X || Z || le;
  let U = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (U > D / 2 || U > L / 2) && (U = Math.min(D / 2, L / 2));
  const B = () => `M${y},${v + L}
      L${y},${v + U}
      Q${y},${v} ${y + U},${v}
      L${y + D - U},${v}
      Q${y + D},${v} ${y + D},${v + U}
      L${y + D},${v + L}
      L${y},${v + L}`, $ = () => `M${y},${v + L}
      L${y},${v}
      L${y + D - U},${v}
      Q${y + D},${v} ${y + D},${v + U}
      L${y + D},${v + L - U}
      Q${y + D},${v + L} ${y + D - U},${v + L}
      L${y},${v + L}`, ne = () => `M${y + U},${v + L}
      Q${y},${v + L} ${y},${v + L - U}
      L${y},${v}
      L${y + D},${v}
      L${y + D},${v + L - U}
      Q${y + D},${v + L} ${y + D - U},${v + L}
      L${y + U},${v + L}`, ee = () => `M${y + U},${v + L}
      Q${y},${v + L} ${y},${v + L - U}
      L${y},${v + U}
      Q${y},${v} ${y + U},${v}
      L${y + D},${v}
      L${y + D},${v + L}
      L${y + U},${v + L}`, ie = () => `M${y + U},${v + L}
      Q${y},${v + L} ${y},${v + L - U}
      L${y},${v + U}
      Q${y},${v} ${y + U},${v}
      L${y + D - U},${v}
      Q${y + D},${v} ${y + D},${v + U}
      L${y + D},${v + L - U}
      Q${y + D},${v + L} ${y + D - U},${v + L}
      L${y + U},${v + L}`, q = () => `M${y},${v}
      L${y + D},${v}
      L${y + D},${v + L}
      L${y},${v + L}
      L${y},${v}`;
  let j;
  return r == null || !C ? j = q() : (j = q(), (V && r + 1 === W || !V) && (j = _ ? $() : B()), !V && r === -1 && (j = _ ? ee() : ne()), H === "full" && V && r === 0 && W > 1 && (j = _ ? ee() : ne()), H === "full" && (V && r === 0 && W === 1 || !V) && (j = ie())), /* @__PURE__ */ React.createElement(
    "path",
    {
      id: i,
      className: a,
      d: j,
      fill: l,
      stroke: f,
      strokeWidth: d,
      onMouseOver: b,
      onMouseLeave: P,
      onClick: k,
      "data-tooltip-html": N,
      "data-tooltip-id": R,
      style: {
        transition: "all 0.2s linear",
        ...m
      }
    }
  );
}
const iE = () => {
  var le, Z;
  const [e, t] = se.useState(0), { xScale: r, yScale: i, seriesScale: a, xMax: l, yMax: f } = se.useContext(ms), { transformedData: d, colorScale: u, seriesHighlight: h, config: y, formatNumber: v, formatDate: b, parseDate: P, setSharedFilter: k } = se.useContext(bt), { isHorizontal: N, barBorderWidth: R, applyRadius: m, hoveredBar: O, getAdditionalColumn: D, onMouseLeaveBar: L, onMouseOverBar: _, barStackedSeriesKeys: C } = mu(), { orientation: V } = y, H = (le = y.brush) != null && le.active && ((Z = y.brush.data) != null && Z.length) ? y.brush.data : d, X = y.runtime.xAxis.type === "date-time" || y.runtime.xAxis.type === "date";
  return y.visualizationSubType === "stacked" && !N && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(y0, { data: H, keys: C, x: (W) => W[y.runtime.xAxis.dataKey], xScale: r, yScale: i, color: u }, (W) => W.reverse().map(
    (U) => U.bars.map((B) => {
      let $ = y.legend.behavior === "highlight" && h.length > 0 && h.indexOf(B.key) === -1, ne = y.legend.behavior === "highlight" || h.length === 0 || h.indexOf(B.key) !== -1, ee = X ? a.range()[1] - a.range()[0] : l / U.bars.length;
      y.runtime.xAxis.type !== "date" && (ee = y.barThickness * ee);
      const ie = B.bar.data[y.runtime.xAxis.dataKey], q = X ? b(P(ie)) : ie, j = v(B.bar ? B.bar.data[B.key] : 0, "left");
      if (!j)
        return;
      const J = r(X ? P(ie) : ie) - (X ? ee / 2 : 0), oe = y.runtime.xAxis.label ? `${y.runtime.xAxis.label}: ${q}` : q, De = D(O), ye = `${y.runtime.seriesLabels[B.key]}: ${j}`, de = `<ul>
                  <li class="tooltip-heading"">${oe}</li>
                  <li class="tooltip-body ">${ye}</li>
                  <li class="tooltip-body ">${De}</li>
                    </li></ul>`;
      return t(ee), /* @__PURE__ */ E.createElement(Je, { key: `${U.index}--${B.index}--${V}` }, /* @__PURE__ */ E.createElement(Je, { key: `bar-stack-${U.index}-${B.index}`, id: `barStack${U.index}-${B.index}`, className: "stack vertical" }, /* @__PURE__ */ E.createElement(vt, { display: y.labels && ne ? "block" : "none", opacity: $ ? 0.5 : 1, x: J + e / 2, y: B.y - 5, fill: "#000", textAnchor: "middle" }, j), yu({
        config: y,
        seriesHighlight: h,
        index: U.index,
        background: u(y.runtime.seriesLabels[B.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${y.barHasBorder === "true" ? R : 0}px`,
        width: ee,
        height: B.height,
        x: J,
        y: B.y,
        onMouseOver: () => _(q, B.key),
        onMouseLeave: L,
        tooltipHtml: de,
        tooltipId: `cdc-open-viz-tooltip-${y.runtime.uniqueId}`,
        onClick: (Ee) => {
          Ee.preventDefault(), k && (B[y.xAxis.dataKey] = q, k(y.uid, B));
        },
        styleOverrides: {
          animationDelay: `${U.index * 0.5}s`,
          transformOrigin: `${ee / 2}px ${B.y + B.height}px`,
          opacity: $ ? 0.2 : 1,
          display: ne ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ E.createElement(Vf, { xScale: r, yMax: f, barWidth: e, totalBarsInGroup: 1 }));
}, oE = () => {
  const { yMax: e, yScale: t, xScale: r } = se.useContext(ms), {
    animatedChart: i,
    colorScale: a,
    config: l,
    formatDate: f,
    formatNumber: d,
    getTextWidth: u,
    parseDate: h,
    seriesHighlight: y,
    setSharedFilter: v,
    transformedData: b
  } = se.useContext(bt), { barBorderWidth: P, displayNumbersOnBar: k, fontSize: N, getAdditionalColumn: R, hoveredBar: m, isHorizontal: O, isLabelBelowBar: D, onMouseLeaveBar: L, onMouseOverBar: _, updateBars: C, barStackedSeriesKeys: V } = mu(), { orientation: H, visualizationSubType: X } = l;
  return l.visualizationSubType === "stacked" && O && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(x0, { data: b, keys: V, height: e, y: (le) => le[l.runtime.yAxis.dataKey], xScale: r, yScale: t, color: a, offset: "none" }, (le) => le.map(
    (Z) => C(Z.bars).map((W, U) => {
      const B = l.legend.behavior === "highlight" && y.length > 0 && y.indexOf(W.key) === -1, $ = l.legend.behavior === "highlight" || y.length === 0 || y.indexOf(W.key) !== -1;
      l.barHeight = Number(l.barHeight);
      const ne = Ko("#000", a(l.runtime.seriesLabels[W.key])), ee = d(b[W.index][W.key], "left"), ie = l.runtime.yAxis.type === "date" ? f(h(b[W.index][l.runtime.originalXAxis.dataKey])) : b[W.index][l.runtime.originalXAxis.dataKey], q = l.runtime.yAxis.label ? `${l.runtime.yAxis.label}: ${ie}` : ie, j = u(ee, `normal ${N[l.fontSize]}px sans-serif`), J = R(m), oe = `${l.runtime.seriesLabels[W.key]}: ${ee}`, De = `<ul>
                  <li class="tooltip-heading"">${q}</li>
                  <li class="tooltip-body ">${oe}</li>
                  <li class="tooltip-body ">${J}</li>
                    </li></ul>`;
      return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Je, { key: U, id: `barStack${Z.index}-${W.index}`, className: "stack horizontal" }, yu({
        config: l,
        seriesHighlight: y,
        index: Z.index,
        className: `animated-chart group ${i ? "animated" : ""}`,
        background: a(l.runtime.seriesLabels[W.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${l.barHasBorder === "true" ? P : 0}px`,
        width: W.width,
        height: W.height,
        x: W.x,
        y: W.y,
        onMouseOver: () => _(ie, W.key),
        onMouseLeave: L,
        tooltipHtml: De,
        tooltipId: `cdc-open-viz-tooltip-${l.runtime.uniqueId}`,
        onClick: (ye) => {
          ye.preventDefault(), v && (W[l.xAxis.dataKey] = ee, v(l.uid, W));
        },
        styleOverrides: {
          animationDelay: `${Z.index * 0.5}s`,
          transformOrigin: `${W.x}px 0`,
          opacity: B ? 0.2 : 1,
          display: $ ? "block" : "none"
        }
      }), H === "horizontal" && X === "stacked" && D && Z.index === 0 && !l.yAxis.hideLabel && /* @__PURE__ */ E.createElement(
        vt,
        {
          x: `${W.x + (l.isLollipopChart ? 15 : 5)}`,
          y: W.y + W.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        ie
      ), k && j < W.width && /* @__PURE__ */ E.createElement(
        vt,
        {
          display: $ ? "block" : "none",
          x: W.x + Z.bars[W.index].width / 2,
          y: W.y + W.height / 2,
          fill: ne,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        ee
      )));
    })
  )));
}, fy = ({ bar: e, defaultBarHeight: t, defaultBarWidth: r, config: i, isNumber: a, getTextWidth: l, barWidth: f, isVertical: d }) => {
  let h = t, y = r, v = "", b = !1, P = !1, k = !1;
  const N = i.general.showSuppressedSymbol;
  if (i.preliminaryData.forEach((O) => {
    (!O.column || O.column === e.key) && O.type === "suppression" && O.value && String(O.value) === String(e.value) && (!O.hideBarSymbol && N ? (h = f > 10 ? 3 : 0, y = 3, b = !0) : (h = 0, y = 0, b = !0));
  }), !b && !a(e.value) && i.general.showMissingDataLabel) {
    const D = l(v, `normal ${f / 2}px sans-serif`) < f && f > 10;
    P = !0, h = D ? 3 : 0, y = 3;
  }
  return !b && String(e.value) === "0" && i.general.showZeroValueDataLabel && (h = l(v, `normal ${f / 2}px sans-serif`) < f && f > 10 ? 3 : 0, y = 3, k = !0), { barWidthHorizontal: y, barHeight: h, isSuppressed: b, showMissingDataLabel: P, showZeroValueDataLabel: k, getBarY: (O, D) => b || P || k ? D - 3 : O, getBarLabel: (O) => {
    let D = O;
    return String(D) === "0" && (D = ""), b && (D = ""), P && (D = "N/A"), k && (D = "0"), !i.labels && !b && !k && !P && d && (D = ""), !i.yAxis.displayNumbersOnBar && !d && !b && !k && !P && (D = ""), l(v, `normal ${f / 2}px sans-serif`) < f && f > 10 && d ? D : d ? "" : D;
  } };
}, gu = (e, t, r) => !!(e === "Line" && t.length < 3 && r), lE = () => {
  const { xScale: e, yScale: t, xMax: r, yMax: i, seriesScale: a } = se.useContext(ms), [l, f] = se.useState(0), [d, u] = se.useState(0), {
    // prettier-ignore
    assignColorsToValues: h,
    barBorderWidth: y,
    getAdditionalColumn: v,
    getHighlightedBarByValue: b,
    getHighlightedBarColorByValue: P,
    lollipopBarWidth: k,
    lollipopShapeSize: N,
    onMouseLeaveBar: R,
    onMouseOverBar: m,
    section: O
  } = mu(), { colorScale: D, config: L, dashboardConfig: _, tableData: C, formatDate: V, formatNumber: H, getXAxisData: X, getYAxisData: le, isNumber: Z, parseDate: W, seriesHighlight: U, setSharedFilter: B, transformedData: $, brushConfig: ne, getTextWidth: ee } = se.useContext(bt), { HighLightedBarUtils: ie } = du(L);
  let q = $;
  return L.preliminaryData.some((J) => J.value && J.type === "suppression") && (q = C), ne.data.length && (q = ne.data), L.visualizationSubType !== "stacked" && (L.visualizationType === "Bar" || L.visualizationType === "Combo" || gu(L.visualizationType, q, L.allowLineToBarGraph)) && L.orientation === "vertical" && /* @__PURE__ */ E.createElement(Je, null, /* @__PURE__ */ E.createElement(
    Nm,
    {
      data: q,
      keys: L.runtime.barSeriesKeys || L.runtime.seriesKeys,
      height: i,
      x0: (J) => {
        const oe = J[L.runtime.originalXAxis.dataKey];
        return En(L.runtime.xAxis) ? W(oe) : oe;
      },
      x0Scale: e,
      x1Scale: a,
      yScale: t,
      color: () => ""
    },
    (J) => J.map((oe, De) => /* @__PURE__ */ E.createElement(Je, { className: `bar-group-${oe.index}-${oe.x0}--${De} ${L.orientation}`, key: `bar-group-${oe.index}-${oe.x0}--${De}`, id: `bar-group-${oe.index}-${oe.x0}--${De}`, left: oe.x0 }, oe.bars.map((ye, de) => {
      const Ee = L.useLogScale ? 0.1 : 0;
      let re = L.highlightedBarValues.map((ft) => ft.value).filter((ft) => ft !== void 0);
      re = L.xAxis.type === "date" ? ie.formatDates(re) : re;
      const Oe = L.legend.behavior === "highlight" && U.length > 0 && U.indexOf(ye.key) === -1, ve = L.legend.behavior === "highlight" || U.length === 0 || U.indexOf(ye.key) !== -1;
      let ce = a.range()[1] - a.range()[0];
      const be = Math.abs(t(ye.value) - t(Ee)), G = ye.value >= 0 && Z(ye.value) ? ye.y : t(0);
      let Pe = L.isLollipopChart ? k : a.bandwidth(), Se = ye.x + (L.isLollipopChart ? (ce / oe.bars.length - k) / 2 : 0) - (L.xAxis.type === "date-time" ? ce / 2 : 0);
      f(Pe), u(oe.bars.length);
      const je = H(/[a-zA-Z]/.test(String(ye.value)) ? "" : ye.value, "left"), Ke = L.runtime[O].type === "date" ? V(W(q[oe.index][L.runtime.originalXAxis.dataKey])) : q[oe.index][L.runtime.originalXAxis.dataKey], Ge = ye.value < 0 ? -1 : de, Be = v(ye.key, q[oe.index][L.runtime.originalXAxis.dataKey]);
      let yt = L.runtime.xAxis.label ? `${L.runtime.xAxis.label}: ${Ke}` : Ke;
      const He = `${L.runtime.seriesLabels[ye.key]}: ${je}`, ze = `<ul>
                  <li class="tooltip-heading">${yt}</li>
                  <li class="tooltip-body ">${He}</li>
                  ${Be ? '<li class="tooltip-body ">' + Be + "</li>" : ""}
                    </li></ul>`;
      let Fe = "#000000";
      Fe = ie.checkFontColor(je, re, Fe);
      let Ne = L.runtime.seriesLabels && L.runtime.seriesLabels[ye.key] ? D(L.runtime.seriesLabels[ye.key]) : D(ye.key);
      Ne = h(J.length, oe.index, Ne);
      const ot = L.isLollipopChart && L.lollipopColorStyle === "regular", Ue = L.isLollipopChart && L.lollipopColorStyle === "two-tone", et = re == null ? void 0 : re.includes(Ke), ut = P(Ke), st = b(Ke), Ct = et ? ut : L.barHasBorder === "true" ? "#000" : "transparent", Gt = et ? st.borderWidth : L.isLollipopChart ? 0 : L.barHasBorder === "true" ? y : 0, { barHeight: Wt, isSuppressed: dt, getBarY: Rt, getBarLabel: cn } = fy({ bar: ye, defaultBarHeight: be, config: L, isNumber: Z, getTextWidth: ee, barWidth: Pe, isVertical: !0, yAxisValue: je }), Jt = cn(je), jt = Rt(G, t(Ee)), fn = dt ? "none" : "block", Le = (ft, $t) => {
        var hn;
        let Dt = ft, St = "#f2f2f2";
        if (_ && ((hn = _.dashboard.sharedFilters) == null ? void 0 : hn.length) !== 0) {
          const { sharedFilters: Lt } = _.dashboard;
          return Dt = Lt ? Lt.map((en) => en.setBy === L.uid ? en.resetLabel === en.active || en.active === $[oe.index][L.xAxis.dataKey] ? D(L.runtime.seriesLabels[ye.key]) : St : D(L.runtime.seriesLabels[ye.key]))[0] : D(L.runtime.seriesLabels[ye.key]), ot && (Dt = ft), Ue && (Dt = ss(ft).brighten(1)), et && (Dt = "transparent"), Dt;
        }
        return Ue && (Dt = ss(ft).brighten(1)), et && (Dt = "transparent"), Dt;
      };
      return /* @__PURE__ */ E.createElement(Je, { key: `${oe.index}--${de}` }, /* @__PURE__ */ E.createElement(Je, { key: `bar-sub-group-${oe.index}-${oe.x0}-${jt}--${de}` }, yu({
        config: L,
        index: Ge,
        id: `barGroup${oe.index}`,
        background: Le(D(L.runtime.seriesLabels[ye.key])),
        borderColor: Ct,
        borderStyle: "solid",
        borderWidth: `${Gt}px`,
        width: Pe,
        height: Wt,
        x: Se,
        y: jt,
        onMouseOver: () => m(Ke, ye.key),
        onMouseLeave: R,
        tooltipHtml: ze,
        tooltipId: `cdc-open-viz-tooltip-${L.runtime.uniqueId}`,
        onClick: (ft) => {
          ft.preventDefault(), B && (ye[L.xAxis.dataKey] = Ke, B(L.uid, ye));
        },
        styleOverrides: {
          transformOrigin: `0 ${jt + Wt}px`,
          opacity: Oe ? 0.2 : 1,
          display: ve ? "block" : "none",
          cursor: _ ? "pointer" : "default"
        }
      }), L.preliminaryData.map((ft, $t) => {
        const Dt = !ft.column || ft.column === ye.key;
        if (!(String(ft.value) === String(ye.value) && ft.value !== "" && Dt) || Pe < 10 || !L.general.showSuppressedSymbol || ft.hideBarSymbol)
          return;
        const Lt = String(ft.symbol).includes("Asterisk"), en = Lt ? -5 : -8, an = Lt ? "middle" : "end", Sn = ft.symbol === "Asterisk" ? Pe * 1.2 : ft.symbol === "Double Asterisk" ? Pe : Pe / 1.5;
        return /* @__PURE__ */ E.createElement(
          vt,
          {
            key: $t,
            dy: en,
            display: ve ? "block" : "none",
            opacity: Oe ? 0.5 : 1,
            x: Se + Pe / 2,
            y: jt,
            verticalAnchor: an,
            fill: Fe,
            textAnchor: "middle",
            fontSize: `${Sn}px`
          },
          ft.iconCode
        );
      }), /* @__PURE__ */ E.createElement(
        vt,
        {
          display: ve ? "block" : "none",
          opacity: Oe ? 0.5 : 1,
          x: Se + Pe / 2,
          y: jt - 5,
          fill: Fe,
          textAnchor: "middle",
          fontSize: Pe / 2
        },
        Jt
      ), L.isLollipopChart && L.lollipopShape === "circle" && /* @__PURE__ */ E.createElement(
        "circle",
        {
          display: fn,
          cx: Se + N / 3.5,
          cy: ye.y,
          r: N / 2,
          fill: Ne,
          key: `circle--${ye.index}`,
          "data-tooltip-html": ze,
          "data-tooltip-id": `cdc-open-viz-tooltip-${L.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), L.isLollipopChart && L.lollipopShape === "square" && /* @__PURE__ */ E.createElement(
        "rect",
        {
          display: fn,
          x: Se - k / 2,
          y: jt,
          width: N,
          height: N,
          fill: Ne,
          key: `circle--${ye.index}`,
          "data-tooltip-html": ze,
          "data-tooltip-id": `cdc-open-viz-tooltip-${L.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ E.createElement("animate", { attributeName: "height", values: `0, ${N}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(L.confidenceKeys).length > 0 ? q.map((J) => {
    let oe, De, ye, de, Ee = 5;
    return oe = e(X(J)) + (L.xAxis.type !== "date-time" ? a.range()[1] / 2 : 0), ye = t(le(J, L.confidenceKeys.lower)), de = t(le(J, L.confidenceKeys.upper)), /* @__PURE__ */ E.createElement(
      "path",
      {
        key: `confidence-interval-v-${De}-${J[L.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${oe - Ee} ${ye}
                    L${oe + Ee} ${ye}
                    M${oe} ${ye}
                    L${oe} ${de}
                    M${oe - Ee} ${de}
                    L${oe + Ee} ${de}`
      }
    );
  }) : "", /* @__PURE__ */ E.createElement(Vf, { xScale: e, yMax: i, barWidth: l, totalBarsInGroup: d }));
}, sE = () => {
  var ie;
  const { xScale: e, yScale: t, yMax: r, seriesScale: i } = se.useContext(ms), { transformedData: a, tableData: l, colorScale: f, seriesHighlight: d, config: u, formatNumber: h, formatDate: y, parseDate: v, setSharedFilter: b, isNumber: P, getTextWidth: k, getYAxisData: N, getXAxisData: R } = se.useContext(bt), { isHorizontal: m, barBorderWidth: O, updateBars: D, assignColorsToValues: L, section: _, fontSize: C, isLabelBelowBar: V, displayNumbersOnBar: H, lollipopBarWidth: X, lollipopShapeSize: le, getHighlightedBarColorByValue: Z, getHighlightedBarByValue: W, getAdditionalColumn: U, hoveredBar: B, onMouseLeaveBar: $, onMouseOverBar: ne } = mu(), { HighLightedBarUtils: ee } = du(u);
  return u.visualizationSubType !== "stacked" && u.visualizationType === "Bar" && u.orientation === "horizontal" && /* @__PURE__ */ E.createElement(Je, null, /* @__PURE__ */ E.createElement(
    Nm,
    {
      data: (ie = u.preliminaryData) != null && ie.some((q) => q.value && q.type === "suppression") ? l : a,
      keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys,
      height: r,
      x0: (q) => q[u.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: i,
      yScale: e,
      color: () => ""
    },
    (q) => D(q).map((j, J) => /* @__PURE__ */ E.createElement(Je, { className: `bar-group-${j.index}-${j.x0}--${J} ${u.orientation}`, key: `bar-group-${j.index}-${j.x0}--${J}`, id: `bar-group-${j.index}-${j.x0}--${J}`, top: j.y }, j.bars.map((oe, De) => {
      var hn;
      const ye = u.useLogScale ? 0.1 : 0;
      let de = u.highlightedBarValues.map((Lt) => Lt.value).filter((Lt) => Lt !== void 0);
      de = u.xAxis.type === "date" ? ee.formatDates(de) : de;
      let Ee = u.legend.behavior === "highlight" && d.length > 0 && d.indexOf(oe.key) === -1, re = u.legend.behavior === "highlight" || d.length === 0 || d.indexOf(oe.key) !== -1, Oe = u.barHeight, ve = parseInt(u.isLollipopChart ? X : Oe);
      isNaN(ve) && (ve = 25);
      let ce = oe.value >= 0 && P(oe.value) ? oe.y : t(ye);
      const be = Math.abs(e(oe.value) - e(ye)), G = oe.value >= 0 && P(oe.value), { barWidthHorizontal: Pe, isSuppressed: Se, getBarLabel: je } = fy({ bar: oe, defaultBarWidth: be, config: u, isNumber: P, getTextWidth: k, isVertical: !1 }), Ke = oe.value < 0 ? Math.abs(e(oe.value)) : e(ye), Ge = h(oe.value, "left"), Be = u.runtime[_].type === "date" ? y(v(a[j.index][u.runtime.originalXAxis.dataKey])) : a[j.index][u.runtime.originalXAxis.dataKey], yt = G ? "above" : "below", He = je(Ge), ze = k(Be, `normal ${C[u.fontSize]}px sans-serif`), Fe = Number(ze) < be - 5;
      let Ne = Fe ? "end" : "start", ot = "start", Ue = Fe ? -5 : 5, et = 10;
      yt === "below" && (Ne = Fe ? "start" : "end", Ue = Fe ? 5 : -5, u.isLollipopChart && (ot = "end", et = -10));
      const ut = oe.value < 0 ? -1 : De;
      let st = u.runtime.yAxis.label ? `${u.runtime.yAxis.label}: ${Be}` : Be;
      const Ct = U(B), Gt = `${u.runtime.seriesLabels[oe.key]}: ${Ge}`, Wt = `<ul>
                  <li class="tooltip-heading"">${st}</li>
                  <li class="tooltip-body ">${Gt}</li>
                  <li class="tooltip-body ">${Ct}</li>
                    </li></ul>`;
      let dt = "#000000";
      dt = ee.checkFontColor(Ge, de, dt);
      let Rt = u.runtime.seriesLabels && u.runtime.seriesLabels[oe.key] ? f(u.runtime.seriesLabels[oe.key]) : f(oe.key);
      Rt = L(q.length, j.index, Rt);
      const cn = u.isLollipopChart && u.lollipopColorStyle === "regular", Jt = u.isLollipopChart && u.lollipopColorStyle === "two-tone", jt = de == null ? void 0 : de.includes(Be), fn = Z(Be), Le = W(Be), ft = jt ? fn : u.barHasBorder === "true" ? "#000" : "transparent", $t = jt ? Le.borderWidth : u.isLollipopChart ? 0 : u.barHasBorder === "true" ? O : 0, Dt = Se ? "none" : "block";
      Rt && dt && Fe && (dt = Ko("#000", Rt));
      const St = () => cn ? Rt : Jt ? ss(Rt).brighten(1) : jt ? "transparent" : Rt;
      return /* @__PURE__ */ E.createElement(Je, { key: `${j.index}--${De}` }, /* @__PURE__ */ E.createElement(Je, { key: `bar-sub-group-${j.index}-${j.x0}-${ce}--${De}` }, yu({
        config: u,
        index: ut,
        id: `barGroup${j.index}`,
        background: St(),
        borderColor: ft,
        borderStyle: "solid",
        borderWidth: `${$t}px`,
        width: Pe,
        height: ve,
        x: Ke,
        y: Oe * oe.index,
        onMouseOver: () => ne(Be, oe.key),
        onMouseLeave: $,
        tooltipHtml: Wt,
        tooltipId: `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
        onClick: (Lt) => {
          Lt.preventDefault(), b && (oe[u.xAxis.dataKey] = Ge, b(u.uid, oe));
        },
        styleOverrides: {
          transformOrigin: `0 ${ce + Oe}px`,
          opacity: Ee ? 0.2 : 1,
          display: re ? "block" : "none"
        }
      }), (hn = u.preliminaryData) == null ? void 0 : hn.map((Lt, en) => {
        const an = !Lt.column || Lt.column === oe.key;
        if (!(String(Lt.value) === String(oe.value) && Lt.value !== "" && an) || Lt.hideBarSymbol || !u.general.showSuppressedSymbol)
          return;
        const Tn = String(Lt.symbol).includes("Asterisk") ? "middle" : "end", _n = Lt.symbol === "Asterisk" ? Oe * 1.2 : Lt.symbol === "Double Asterisk" ? Oe : Oe / 1.5;
        return /* @__PURE__ */ E.createElement(
          vt,
          {
            key: en,
            fontSize: _n,
            display: re ? "block" : "none",
            opacity: Ee ? 0.5 : 1,
            x: Ke,
            y: u.barHeight / 2 + u.barHeight * oe.index,
            fill: "#000",
            dy: u.barHeight / 5,
            dx: 10,
            textAnchor: "start",
            verticalAnchor: Tn
          },
          Lt.iconCode
        );
      }), !u.isLollipopChart && /* @__PURE__ */ E.createElement(
        vt,
        {
          display: re ? "block" : "none",
          x: oe.y,
          opacity: Ee ? 0.5 : 1,
          y: u.barHeight / 2 + u.barHeight * oe.index,
          fill: dt,
          dx: He === "N/A" ? 20 : Ue,
          verticalAnchor: "middle",
          textAnchor: He === "N/A" ? "middle" : Ne
        },
        He
      ), u.isLollipopChart && H && /* @__PURE__ */ E.createElement(
        vt,
        {
          display: re ? "block" : "none",
          x: oe.y,
          y: 0,
          fill: "#000000",
          dx: et,
          textAnchor: ot,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        He
      ), V && !u.yAxis.hideLabel && /* @__PURE__ */ E.createElement(vt, { x: u.yAxis.hideAxis ? 0 : 5, y: j.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, u.runtime.yAxis.type === "date" ? y(v(a[j.index][u.runtime.originalXAxis.dataKey])) : m ? a[j.index][u.runtime.originalXAxis.dataKey] : h(a[j.index][u.runtime.originalXAxis.dataKey])), u.isLollipopChart && u.lollipopShape === "circle" && /* @__PURE__ */ E.createElement(
        "circle",
        {
          display: Dt,
          cx: oe.y,
          cy: Oe * oe.index + X / 2,
          r: le / 2,
          fill: Rt,
          key: `circle--${oe.index}`,
          "data-tooltip-html": Wt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), u.isLollipopChart && u.lollipopShape === "square" && /* @__PURE__ */ E.createElement(
        "rect",
        {
          display: Dt,
          x: oe.y > 10 ? oe.y - le / 2 : 0,
          y: 0 - X / 2,
          width: le,
          height: le,
          fill: Rt,
          key: `circle--${oe.index}`,
          "data-tooltip-html": Wt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ E.createElement("animate", { attributeName: "height", values: `0, ${le}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(u.confidenceKeys).length > 0 ? a.map((q) => {
    let j, J, oe, De = 5;
    return j = t(R(q)) - 0.75 * u.barHeight, J = e(N(q, u.confidenceKeys.upper)), oe = e(N(q, u.confidenceKeys.lower)), /* @__PURE__ */ E.createElement(
      "path",
      {
        key: `confidence-interval-h-${j}-${q[u.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${oe} ${j - De}
                    L${oe} ${j + De}
                    M${oe} ${j}
                    L${J} ${j}
                    M${J} ${j - De}
                    L${J} ${j + De} `
      }
    );
  }) : "");
}, xc = {
  Vertical: lE,
  Horizontal: sE,
  StackedVertical: iE,
  StackedHorizontal: oE
}, cE = ({ xScale: e, yScale: t, seriesScale: r, xMax: i, yMax: a, handleTooltipMouseOver: l, handleTooltipMouseOff: f, handleTooltipClick: d }) => {
  const { transformedData: u, config: h } = se.useContext(bt), y = {
    xScale: e,
    yScale: t,
    xMax: i,
    yMax: a,
    seriesScale: r
  };
  return /* @__PURE__ */ E.createElement(Cr, { component: "BarChart" }, /* @__PURE__ */ E.createElement(ms.Provider, { value: y }, /* @__PURE__ */ E.createElement(Je, { left: parseFloat(h.runtime.yAxis.size) }, /* @__PURE__ */ E.createElement(xc.StackedVertical, null), /* @__PURE__ */ E.createElement(xc.StackedHorizontal, null), /* @__PURE__ */ E.createElement(xc.Vertical, null), /* @__PURE__ */ E.createElement(xc.Horizontal, null), /* @__PURE__ */ E.createElement(hr, { key: "bars", display: h.tooltips.singleSeries ? "none" : "block", width: Number(i), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (v) => l(v, u), onMouseOut: f, onClick: (v) => d(v, u) }))));
};
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Na.apply(this, arguments);
}
function Ti(e) {
  var t = e.x1, r = e.x2, i = e.y1, a = e.y2;
  return {
    x1: i,
    x2: a,
    y1: t,
    y2: r
  };
}
function py(e) {
  var t = e.left, r = t === void 0 ? 0 : t, i = e.top, a = i === void 0 ? 0 : i, l = e.className, f = e.max, d = e.min, u = e.firstQuartile, h = e.thirdQuartile, y = e.median, v = e.boxWidth, b = v === void 0 ? 10 : v, P = e.fill, k = e.fillOpacity, N = e.stroke, R = e.strokeWidth, m = e.rx, O = m === void 0 ? 2 : m, D = e.ry, L = D === void 0 ? 2 : D, _ = e.valueScale, C = e.outliers, V = C === void 0 ? [] : C, H = e.horizontal, X = e.medianProps, le = X === void 0 ? {} : X, Z = e.maxProps, W = Z === void 0 ? {} : Z, U = e.minProps, B = U === void 0 ? {} : U, $ = e.boxProps, ne = $ === void 0 ? {} : $, ee = e.outlierProps, ie = ee === void 0 ? {} : ee, q = e.container, j = q === void 0 ? !1 : q, J = e.containerProps, oe = J === void 0 ? {} : J, De = e.children, ye = H ? a : r, de = ye + (b || 0) / 2, Ee = _.range(), re = _(d ?? 0), Oe = _(u ?? 0), ve = _(y ?? 0), ce = _(h ?? 0), be = _(f ?? 0), G = {
    valueRange: Ee,
    center: de,
    offset: ye,
    boxWidth: b,
    max: {
      x1: de - (b || 0) / 4,
      x2: de + (b || 0) / 4,
      y1: be,
      y2: be
    },
    maxToThird: {
      x1: de,
      x2: de,
      y1: be,
      y2: ce
    },
    median: {
      x1: ye,
      x2: ye + (b || 0),
      y1: ve,
      y2: ve
    },
    minToFirst: {
      x1: de,
      x2: de,
      y1: Oe,
      y2: re
    },
    min: {
      x1: de - (b || 0) / 4,
      x2: de + (b || 0) / 4,
      y1: re,
      y2: re
    },
    box: {
      x1: ye,
      x2: b || 0,
      y1: ce,
      y2: Math.abs(ce - Oe)
    },
    container: {
      x1: ye,
      x2: b || 0,
      y1: Math.min.apply(Math, Ee),
      y2: Math.abs(Ee[0] - Ee[1])
    }
  };
  return H && (G.max = Ti(G.max), G.maxToThird = Ti(G.maxToThird), G.box.y1 = Oe, G.box = Ti(G.box), G.median = Ti(G.median), G.minToFirst = Ti(G.minToFirst), G.min = Ti(G.min), G.container = Ti(G.container), G.container.y1 = Math.min.apply(Math, Ee)), De ? /* @__PURE__ */ E.createElement(E.Fragment, null, De(G)) : /* @__PURE__ */ E.createElement(Je, {
    className: wn("visx-boxplot", l)
  }, V.map(function(Pe, Se) {
    var je = H ? _(Pe) : de, Ke = H ? de : _(Pe);
    return /* @__PURE__ */ E.createElement("circle", Na({
      key: "visx-boxplot-outlier-" + Se,
      className: "visx-boxplot-outlier",
      cx: je,
      cy: Ke,
      r: 4,
      stroke: N,
      strokeWidth: R,
      fill: P,
      fillOpacity: k
    }, ie));
  }), /* @__PURE__ */ E.createElement("line", Na({
    className: "visx-boxplot-max",
    x1: G.max.x1,
    y1: G.max.y1,
    x2: G.max.x2,
    y2: G.max.y2,
    stroke: N,
    strokeWidth: R
  }, W)), /* @__PURE__ */ E.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: G.maxToThird.x1,
    y1: G.maxToThird.y1,
    x2: G.maxToThird.x2,
    y2: G.maxToThird.y2,
    stroke: N,
    strokeWidth: R
  }), /* @__PURE__ */ E.createElement("rect", Na({
    className: "visx-boxplot-box",
    x: G.box.x1,
    y: G.box.y1,
    width: G.box.x2,
    height: G.box.y2,
    stroke: N,
    strokeWidth: R,
    fill: P,
    fillOpacity: k,
    rx: O,
    ry: L
  }, ne)), /* @__PURE__ */ E.createElement("line", Na({
    className: "visx-boxplot-median",
    x1: G.median.x1,
    y1: G.median.y1,
    x2: G.median.x2,
    y2: G.median.y2,
    stroke: N,
    strokeWidth: R
  }, le)), /* @__PURE__ */ E.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: G.minToFirst.x1,
    y1: G.minToFirst.y1,
    x2: G.minToFirst.x2,
    y2: G.minToFirst.y2,
    stroke: N,
    strokeWidth: R
  }), /* @__PURE__ */ E.createElement("line", Na({
    className: "visx-boxplot-min",
    x1: G.min.x1,
    y1: G.min.y1,
    x2: G.min.x2,
    y2: G.min.y2,
    stroke: N,
    strokeWidth: R
  }, B)), j && /* @__PURE__ */ E.createElement("rect", Na({
    x: G.container.x1,
    y: G.container.y1,
    width: G.container.x2,
    height: G.container.y2,
    fillOpacity: "0"
  }, oe)));
}
py.propTypes = {
  max: Ce.number,
  min: Ce.number,
  firstQuartile: Ce.number,
  thirdQuartile: Ce.number,
  median: Ce.number,
  boxWidth: Ce.number,
  fill: Ce.string,
  fillOpacity: Ce.oneOfType([Ce.number, Ce.string]),
  stroke: Ce.string,
  strokeWidth: Ce.oneOfType([Ce.number, Ce.string]),
  rx: Ce.number,
  ry: Ce.number,
  outliers: Ce.arrayOf(Ce.number),
  container: Ce.bool,
  children: Ce.func
};
const uE = ({ xScale: e, yScale: t }) => {
  const { config: r, setConfig: i } = se.useContext(bt), { boxplot: a } = r;
  se.useEffect(() => {
    r.legend.hide === !1 && i({
      ...r,
      legend: {
        ...r.legend,
        hide: !0
      }
    });
  }, []);
  const l = `cdc-open-viz-tooltip-${r.runtime.uniqueId}`, f = (R) => `
      <strong>${R.columnCategory}</strong></br>
      ${a.labels.q1}: ${R.columnFirstQuartile}<br/>
      ${a.labels.q3}: ${R.columnThirdQuartile}<br/>
      ${a.labels.iqr}: ${R.columnIqr}<br/>
      ${a.labels.median}: ${R.columnMedian}
    `, d = (R) => Number(R.columnMax), u = (R) => Number(R.columnMin), h = (R) => Number(R.columnMedian), y = (R) => Number(R.columnThirdQuartile), v = (R) => Number(R.columnFirstQuartile), b = 0.5, P = e.bandwidth(), k = Math.min(40, P), N = rr[r == null ? void 0 : r.palette][0] ? rr[r == null ? void 0 : r.palette][0] : "#000";
  return /* @__PURE__ */ E.createElement(Cr, { component: "BoxPlot" }, /* @__PURE__ */ E.createElement(Je, { className: "boxplot", key: "boxplot-group" }, a.plots.map((R, m) => {
    const O = P - k, D = 4;
    return /* @__PURE__ */ E.createElement(Je, { key: `boxplotplot-${m}` }, a.plotNonOutlierValues && R.nonOutlierValues.map((L, _) => /* @__PURE__ */ E.createElement("circle", { cx: e(R.columnCategory) + Number(r.yAxis.size) + P / 2, cy: t(L), r: D, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${m}--circle-${_}` })), /* @__PURE__ */ E.createElement(
      py,
      {
        "data-left": e(R.columnCategory) + r.yAxis.size + O / 2 + 0.5,
        key: `box-plot-${m}`,
        min: u(R),
        max: d(R),
        left: Number(e(R.columnCategory)) + Number(r.yAxis.size) + O / 2 + 0.5,
        firstQuartile: v(R),
        thirdQuartile: y(R),
        median: h(R),
        boxWidth: k,
        fill: N,
        fillOpacity: b,
        stroke: "black",
        valueScale: t,
        outliers: a.plotOutlierValues ? R.columnOutliers : [],
        outlierProps: {
          style: {
            fill: `${N}`,
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
          "data-tooltip-html": f(R),
          "data-tooltip-id": l,
          tabIndex: -1
        }
      }
    ));
  })));
}, dE = ({ xScale: e, yScale: t }) => {
  const { transformedData: r, config: i, tableData: a, formatNumber: l, seriesHighlight: f, colorPalettes: d } = se.useContext(bt), u = 4.5, h = Object.keys(i.runtime.seriesLabels).length > 1, y = Object.entries(i.columns).filter(([b, P]) => P.tooltips).map(([b, P]) => [
    P.label || P.name,
    P.name,
    {
      addColPrefix: P.prefix,
      addColSuffix: P.suffix,
      addColRoundTo: P.roundToPlace,
      addColCommas: P.commas
    }
  ]), v = (b, P, k) => `<div>
    ${i.legend.showLegendValuesTooltip && i.runtime.seriesLabels && h ? `${i.runtime.seriesLabels[P] || ""}<br/>` : ""}
    ${i.xAxis.label}: ${l(b[i.xAxis.dataKey], "bottom")} <br/>
    ${i.yAxis.label}: ${l(b[P], "left")}<br/>
   ${y.map(([N, R, m]) => `${N} : ${vf(a[k][R], "left", !1, i, m)}<br/>`).join("")}
</div>`;
  return /* @__PURE__ */ E.createElement(Je, { className: "scatter-plot", left: i.yAxis.size }, r.map((b, P) => i.runtime.seriesKeys.map((k, N) => {
    const R = i.legend.behavior === "highlight" && f.length > 0 && f.indexOf(k) === -1, m = i.legend.behavior === "highlight" || f.length === 0 || f.indexOf(k) !== -1, O = i.palette ? d[i.palette][N] : "#000";
    let D = {
      filter: "unset",
      opacity: 1,
      stroke: m ? "black" : ""
    };
    return /* @__PURE__ */ E.createElement(
      "circle",
      {
        key: `${P}-${N}`,
        r: u,
        cx: e(b[i.xAxis.dataKey]),
        cy: t(b[k]),
        fill: m ? O : "transparent",
        fillOpacity: R ? 0.25 : 1,
        style: D,
        "data-tooltip-html": v(b, k, P),
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        tabIndex: -1
      }
    );
  })));
};
function fE({ height: e, xScale: t }) {
  const { transformedData: r, config: i, formatNumber: a, twoColorPalette: l, getTextWidth: f, updateConfig: d, parseDate: u, formatDate: h, currentViewport: y } = se.useContext(bt), { barStyle: v, tipRounding: b, roundingStyle: P, twoColor: k } = i, N = se.useRef([]), [R, m] = se.useState(window.innerWidth), O = P === "standard" ? "8px" : P === "shallow" ? "5px" : P === "finger" ? "15px" : "0px", D = { small: 16, medium: 18, large: 20 };
  i.barStyle;
  const L = Number(i.xAxis.target), _ = i.series[0].dataKey, C = Number(t.domain()[1]), H = r.some((q) => q[_] < 0) || L > 0 || t.domain()[0] < 0, X = i.barHasBorder === "true" ? 1 : 0, le = i.lollipopSize === "large" ? 7 : i.lollipopSize === "medium" ? 6 : 5, Z = i.lollipopSize === "large" ? 14 : i.lollipopSize === "medium" ? 12 : 10, W = Math.max(t(0), Math.min(t(L), t(C))), U = (q) => {
    if (q == null || v !== "rounded")
      return;
    let j = {};
    return q === "left" && (j = { borderRadius: `${O} 0 0 ${O}` }), q === "right" && (j = { borderRadius: `0 ${O} ${O} 0` }), b === "full" && (j = { borderRadius: O }), j;
  }, B = {
    calculate: function() {
      const j = r[0][_] < L ? "left" : "right", J = `${i.xAxis.targetLabel} ${a(i.xAxis.target || 0, "left")}`, oe = f(J, `bold ${D[i.fontSize]}px sans-serif`);
      let De = i.isLollipopChart ? le / 2 : Number(i.barHeight) / 2, ye = 0, de = 0, Ee = !1;
      j === "right" && (ye = -10, Ee = oe - ye < W, de = W - oe), j === "left" && (ye = 10, Ee = t(C) - W > oe + ye, de = W), this.text = J, this.y = De, this.x = de, this.padding = ye, this.showLabel = i.xAxis.showTargetLabel ? Ee : !1;
    }
  };
  B.calculate();
  const $ = se.useRef(null), ne = $f($, {});
  se.useEffect(() => {
    const q = () => {
      var j;
      m(window.innerWidth), (j = N.current) == null || j.forEach((J) => {
        !J || !J.style || (J.style.transition = "none", J.style.transform = "translate(0) scale(1)");
      });
    };
    return window.addEventListener("resize", q), () => {
      window.removeEventListener("resize", q);
    };
  }, []);
  const [ee, ie] = se.useState(!1);
  return se.useEffect(() => {
    ne != null && ne.isIntersecting && setTimeout(() => {
      ie(!0);
    }, 100);
  }, [ne == null ? void 0 : ne.isIntersecting, i.animate]), se.useEffect(() => {
    var q;
    (q = N.current) == null || q.forEach((j, J) => {
      if (!(!j || !j.style)) {
        if (i.animate) {
          const oe = L / C * 100;
          j.style.opacity = "0", j.style.transform = `translate(${oe / 1.07}%) scale(0, 1)`, setTimeout(() => {
            j.style.opacity = "1", j.style.transform = "translate(0) scale(1)", j.style.transition = "transform 0.5s ease";
          }, 100);
        } else
          j.style.transition = "none", j.style.opacity = "0";
        i.animate || (j.style.transition = "none", j.style.opacity = "1");
      }
    });
  }, [i.animate, i, ee]), /* @__PURE__ */ React.createElement(Cr, { component: "Deviation Bar" }, /* @__PURE__ */ React.createElement(Je, { left: Number(i.xAxis.size) }, r.map((q, j) => {
    const J = Number(q[_]), oe = i.isLollipopChart ? le : Number(i.barHeight), De = Number(i.barSpace), ye = Math.abs(t(J) - W), de = t(J), Ee = J > L ? W : de, re = J < L ? "left" : "right";
    let Oe = 0;
    Oe = j !== 0 ? (De + oe + X) * j : Oe;
    const ve = (De + oe + X) * r.length;
    i.heights.horizontal = ve;
    const be = f(a(J, "left"), `normal ${D[i.fontSize]}px sans-serif`) < ye - 6, G = de, Pe = Oe + oe / 2, Se = de, je = Oe + oe / 2, Ke = de, Ge = Oe - oe / 2, Be = U(re), [yt, He] = l[k.palette], ze = { left: yt, right: He }, Fe = Ko("#000", ze[re]);
    let Ne = pE(i.isLollipopChart, be, Z, Fe);
    const ot = a(J, "left"), Ue = i.runtime.yAxis.type === "date" ? h(u(r[j][i.runtime.originalXAxis.dataKey])) : r[j][i.runtime.originalXAxis.dataKey];
    let et = i.runtime.yAxis.label ? `${i.runtime.yAxis.label}: ${Ue}` : Ue, ut = i.runtime.xAxis.label ? `${i.runtime.xAxis.label}: ${ot}` : ot;
    const st = `<div>
          ${et}<br />
          ${ut}
            </div>`;
    return /* @__PURE__ */ React.createElement(Je, { key: `deviation-bar-${i.orientation}-${_}-${j}` }, /* @__PURE__ */ React.createElement(
      "foreignObject",
      {
        ref: (Ct) => {
          N.current[j] = Ct;
        },
        x: Ee,
        y: Oe,
        width: ye,
        height: oe,
        "data-tooltip-html": st,
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ React.createElement("div", { style: { width: ye, height: oe, border: `${X}px solid #333`, backgroundColor: ze[re], ...Be } })
    ), i.yAxis.displayNumbersOnBar && /* @__PURE__ */ React.createElement(vt, { verticalAnchor: "middle", x: G, y: Pe, ...Ne[re] }, a(q[_], "left")), i.isLollipopChart && i.lollipopShape === "circle" && /* @__PURE__ */ React.createElement("circle", { cx: Se, cy: je, r: Z / 2, fill: ze[re], style: { filter: "unset", opacity: 1 } }), i.isLollipopChart && i.lollipopShape === "square" && /* @__PURE__ */ React.createElement("rect", { x: Ke, y: Ge, width: Z, height: Z, fill: ze[re], style: { opacity: 1, filter: "unset" } }));
  }), B.showLabel && /* @__PURE__ */ React.createElement(vt, { fontWeight: "bold", dx: B.padding, verticalAnchor: "middle", x: B.x, y: B.y }, B.text), H && /* @__PURE__ */ React.createElement(Qt, { from: { x: W, y: 0 }, to: { x: W, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ React.createElement("foreignObject", { y: e / 2, ref: $ }));
}
function pE(e, t, r, i) {
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
      fill: t ? i : "#000000"
    },
    left: {
      textAnchor: t ? "start" : "end",
      dx: t ? 6 : -6,
      fill: t ? i : "#000000"
    }
  };
}
const hE = ({ xScale: e, yScale: t, height: r, width: i, handleTooltipMouseOver: a, handleTooltipMouseOff: l }) => {
  var k;
  const { transformedData: f, rawData: d, config: u, seriesHighlight: h } = se.useContext(bt), { xAxis: y, yAxis: v, legend: b, runtime: P } = u;
  return f && /* @__PURE__ */ E.createElement(Cr, { component: "ForecastingChart" }, /* @__PURE__ */ E.createElement(Je, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(v.size) }, (k = P.forecastingSeriesKeys) == null ? void 0 : k.map((N, R) => !N || !N.stages ? !1 : N.stages.map((m, O) => {
    var V;
    const { behavior: D } = b, L = d.filter((H) => H[N.stageColumn] === m.key);
    let _ = D === "highlight" && h.length > 0 && h.indexOf(m.key) === -1, C = D === "highlight" || h.length === 0 || h.indexOf(m.key) !== -1;
    return /* @__PURE__ */ E.createElement(Je, { className: `forecasting-areas-combo-${R}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${R}` }, (V = N.confidenceIntervals) == null ? void 0 : V.map((H, X) => {
      const le = Lc[m.color] || rr[m.color] || !1, Z = () => C && le[2] ? le[2] : "transparent", W = () => C && le[1] ? le[1] : "transparent";
      if (!(H.high === "" || H.low === ""))
        return /* @__PURE__ */ E.createElement(Je, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${O}-${X}` }, /* @__PURE__ */ E.createElement(
          n0,
          {
            curve: Rc,
            data: L,
            fill: Z(),
            opacity: _ ? 0.1 : 0.5,
            x: (U) => e(Date.parse(U[y.dataKey])),
            y0: (U) => t(U[H.low]),
            y1: (U) => t(U[H.high])
          }
        ), X === 0 && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Hr, { data: L, x: (U) => Number(e(Date.parse(U[y.dataKey]))), y: (U) => Number(t(U[H.high])), curve: Rc, stroke: W(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ E.createElement(Hr, { data: L, x: (U) => Number(e(Date.parse(U[y.dataKey]))), y: (U) => Number(t(U[H.low])), curve: Rc, stroke: W(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ E.createElement(Je, { key: "tooltip-hover-section" }, /* @__PURE__ */ E.createElement(hr, { key: "bars", width: Number(i), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (N) => a(N, f), onMouseOut: l }))));
};
function Tc(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function vu(e, t) {
  const r = e.series.every(({ type: b }) => b === "Bar"), i = e.series.every(({ type: b }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(b)), a = (b) => (P) => b.reduce((k, N) => isNaN(Number(P[N])) ? k : k + Number(P[N]), 0), l = () => {
    let b = Math.max(...t.map((P) => Math.max(...e.runtime.seriesKeys.map((k) => Tc(P[k]) ? Number(u(P[k])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && r) && e.visualizationSubType === "stacked") {
      const P = t.map(a(e.runtime.seriesKeys)).filter((k) => !isNaN(k));
      b = Math.max(...P);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const P = t.map(a(e.runtime.seriesKeys));
      b = Math.max(...P);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (b = Math.max(...t.map((P) => Tc(P[e.series.dataKey]) ? Number(u(P[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !r && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const P = t.map(a(e.runtime.barSeriesKeys)), k = Math.max(...t.map((R) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(u(R[m])))))), N = Math.max(...P);
      b = Math.max(N, k);
    }
    return b;
  }, f = () => {
    const b = Math.min(...t.map((P) => Math.min(...e.runtime.seriesKeys.map((k) => Tc(P[k]) ? Number(u(P[k])) : 1 / 0))));
    return String(b);
  }, d = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((b) => t.some((P) => P[b] >= 0)) : !1, u = (b) => b === null || b === "" ? "" : typeof b == "string" ? b.replace(/[,$]/g, "") : b, h = Number(l()), y = Number(f()), v = d();
  return { minValue: y, maxValue: h, existPositiveValue: v, isAllLine: i };
}
function jf({ config: e, yMax: t = 0, data: r = [], updateConfig: i }) {
  var b, P, k, N;
  const a = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((R) => R.axis === "Right").map((R) => R.dataKey);
  let { minValue: f } = vu(e, r);
  const d = (R) => {
    if (!R)
      return [0];
    let m = [];
    return R.map((O, D) => m = [...m, ...r.map((L) => Number(L[O]))]), m;
  };
  let u = Math.max.apply(null, d(l));
  e.yAxis.rightMax > u && (u = e.yAxis.rightMax), e.yAxis.rightMin < f && (f = e.yAxis.rightMin);
  const h = ((P = (b = e.runtime) == null ? void 0 : b.barSeriesKeys) == null ? void 0 : P.length) > 0, y = ((N = (k = e.runtime) == null ? void 0 : k.lineSeriesKeys) == null ? void 0 : N.length) > 0;
  return (h || y) && f > 0 && (f = 0), { yScaleRight: Wn({
    domain: [f, u],
    range: [t, 0]
  }), hasRightAxis: a };
}
const mE = (e) => {
  const { preliminaryData: t, data: r, stroke: i, strokeWidth: a, handleLineType: l, lineType: f, seriesKey: d } = e, u = t.filter((b) => b.seriesKey && b.column && b.value && b.type && b.style && b.type === "effect"), h = (b) => u.find((P) => P.seriesKey === d && b[P.column] === P.value && P.type === "effect" && P.style !== "Open Circles");
  let y = [];
  const v = (b) => ({
    stroke: i,
    strokeWidth: a,
    strokeDasharray: b
  });
  return r.forEach((b, P) => {
    let k = h(b), N = v(l(k ? k.style : f));
    y.push(N), k && P > 0 && (y[P - 1] = v(l(k.style)));
  }), y;
}, yE = (e, t, r) => {
  const i = e == null ? void 0 : e.filter((l) => l.style === "Open Circles" && l.type === "effect").map((l) => ({ column: l.column, value: l.value, seriesKey: l.seriesKey })), a = [];
  return t.forEach((l) => {
    i.forEach((f) => {
      l[f.column] === f.value && f.seriesKey === r && a.push(l);
    });
  }), a;
}, au = (e) => !isNaN(parseFloat(e)) && isFinite(e), gE = (e, t, r) => {
  const i = {
    data: [],
    style: ""
  };
  if (!e.length)
    return i;
  const a = e[0], l = (d) => {
    if (!(d.type === "effect" || d.hideLineStyle))
      return d.type == "suppression" && d.value === a[t] && (!d.column || d.column === t);
  }, f = r.find(l);
  if (f && f.style) {
    const d = { ...a, [t]: 0 };
    i.data.push(d), i.style = f.style;
    let u = 1;
    for (; u < e.length && !au(e[u][t]); )
      u++;
    u < e.length && i.data.push(e[u]);
  } else
    i.data.push(a);
  return i;
}, vE = (e, t, r) => {
  const i = {
    data: [],
    style: ""
  };
  let a = -1;
  return r == null || r.forEach((l) => {
    if (l.type !== "effect" && e[e.length - 1][t] === l.value && l.style && (!l.column || l.column === t) && l.type == "suppression" && !l.hideLineStyle) {
      const f = e.length - 1, d = { ...e[f], [t]: 0 };
      i.data.push(d);
      let u = f - 1;
      for (; u >= 0 && !au(e[u][t]); )
        u--;
      u >= 0 && a !== u && (i.data.push(e[u]), a = u), i.style = l.style;
    }
  }), i;
};
function xE(e, t, r, i) {
  const a = {
    data: [],
    style: ""
  }, l = (f) => f > 0 && f < e.length - 1;
  return i == null || i.forEach((f) => {
    if (f.type === "effect" || f.hideLineStyle)
      return;
    const d = f.value;
    e.reduce((h, y, v) => (y[t] === d && l(v) && (!f.column || f.column === t) && h.push(v), h), []).forEach((h) => {
      a.style = f.style, au(e[h - 1][t]) && a.data.push(e[h - 1]);
      const y = e.slice(h + 1).findIndex((v) => v[t] !== d && au(v[t]));
      y !== -1 && a.data.push(e[h + 1 + y]);
    });
  }), a.data = er.uniqWith(a.data, (f, d) => f[r] === d[r] && f[t] === d[t]), a;
}
const bE = (e, t, r, i) => {
  const a = gE(e, t, r), l = vE(e, t, r), f = xE(e, t, i, r);
  return [a, f, l].filter((d) => d.data.length > 0 && d.style !== "");
}, Md = (e) => {
  var L, _, C, V, H, X, le, Z;
  const { config: t, d: r, tableData: i, displayArea: a, seriesKey: l, tooltipData: f, xScale: d, yScale: u, colorScale: h, parseDate: y, yScaleRight: v, data: b, circleData: P, dataIndex: k, mode: N } = e, { lineDatapointStyle: R } = t, m = (L = t == null ? void 0 : t.series.filter((W) => W.dataKey === l)) == null ? void 0 : L[0], O = (W, U, B, $, ne) => {
    const ee = B.runtime.seriesLabels || [];
    let ie;
    return W ? ie = U(ee[$] || ne) : ie = "transparent", B.lineDatapointColor === "Lighter than Line" && ie !== "transparent" && ie && (ie = ss(ie).brighten(1)), ie;
  }, D = (W) => (t.xAxis.type === "categorical" ? d(W) : d(y(W))) + (d.bandwidth ? d.bandwidth() / 2 : 0);
  if (N === "ALWAYS_SHOW_POINTS") {
    if (R === "hidden")
      return /* @__PURE__ */ E.createElement(E.Fragment, null);
    if (R === "always show")
      return (P == null ? void 0 : P.some((U) => U[t.xAxis.dataKey] === r[t.xAxis.dataKey] && U[l] === r[l])) ? /* @__PURE__ */ E.createElement(E.Fragment, null) : /* @__PURE__ */ E.createElement(
        "circle",
        {
          cx: D(r[t.xAxis.dataKey]),
          cy: m.axis === "Right" ? v(r[m.dataKey]) : u(r[m.dataKey]),
          r: 4.5,
          opacity: r[l] ? 1 : 0,
          fillOpacity: 1,
          fill: O(a, h, t, l, l),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (N === "HOVER_POINTS" && R === "hover") {
    if (!f || !l || !f.data)
      return;
    let W = (C = (_ = f == null ? void 0 : f.data) == null ? void 0 : _[0]) == null ? void 0 : C[1];
    if (!W)
      return;
    let U, B = f.data.filter((ee) => ee[0] === l), $ = (V = B == null ? void 0 : B[0]) == null ? void 0 : V[0], ne = (H = B == null ? void 0 : B[0]) == null ? void 0 : H[2];
    return $ ? (f == null || f.data.indexOf($), U = (X = i == null ? void 0 : i.find((ee) => ee[t == null ? void 0 : t.xAxis.dataKey] === W)) == null ? void 0 : X[l], f == null ? void 0 : f.data.map((ee, ie) => (t.runtime.seriesLabelsAll.indexOf(W), isNaN(U) ? /* @__PURE__ */ E.createElement(E.Fragment, null) : (P == null ? void 0 : P.some((j) => j[t.xAxis.dataKey] === W)) ? /* @__PURE__ */ E.createElement(E.Fragment, null) : /* @__PURE__ */ E.createElement(
      "circle",
      {
        cx: D(W),
        cy: ne === "right" ? v(U) : u(U),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: O(a, h, t, $, l),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(ee)}--${ie}`
      }
    )))) : void 0;
  }
  return N === "ISOLATED_POINTS" && N && ((U, B) => {
    const $ = b[U], ne = U > 0 ? b[U - 1] : null, ee = U < b.length - 1 ? b[U + 1] : null;
    let ie = !1;
    return U === 0 && ee && !ee[B] && (ie = !0), U === b.length - 1 && ne && !ne[B] && (ie = !0), U > 0 && U < b.length - 1 && $ && $[B] && (!ne || !ne[B]) && (!ee || !ee[B]) && (ie = !0), ie;
  })(k, l) ? /* @__PURE__ */ E.createElement("circle", { cx: D(r[(le = t.xAxis) == null ? void 0 : le.dataKey]), cy: m.axis === "Right" ? v(r[m.dataKey]) : u(r[m == null ? void 0 : m.dataKey]), r: 5.3, strokeWidth: 2, stroke: h(t.runtime.seriesLabels[l]), fill: h((Z = t.runtime) == null ? void 0 : Z.seriesLabels[l]) }) : null;
}, wh = (e) => {
  var U;
  const {
    getXAxisData: t,
    getYAxisData: r,
    handleTooltipClick: i,
    handleTooltipMouseOff: a,
    handleTooltipMouseOver: l,
    tooltipData: f,
    xMax: d,
    xScale: u,
    yMax: h,
    yScale: y
  } = e, { colorScale: v, config: b, formatNumber: P, handleLineType: k, isNumber: N, parseDate: R, seriesHighlight: m, tableData: O, transformedData: D, updateConfig: L, brushConfig: _, clean: C } = se.useContext(bt), { yScaleRight: V } = jf({ config: b, yMax: h, data: D, updateConfig: L });
  if (!l)
    return;
  const { lineDatapointStyle: H, showLineSeriesLabels: X, legend: le } = b;
  let Z = D, W = O;
  return _.data.length > 0 && ((U = b.brush) != null && U.active) && (Z = C(_.data), W = C(_.data)), /* @__PURE__ */ E.createElement(Cr, { component: "LineChart" }, /* @__PURE__ */ E.createElement(Je, { left: Number(b.runtime.yAxis.size) }, " ", (b.runtime.lineSeriesKeys || b.runtime.seriesKeys).map((B, $) => {
    var ye;
    let ne = b.series.filter((de) => de.dataKey === B)[0].type;
    const ee = b.series.filter((de) => de.dataKey === B), ie = ee[0].axis ? ee[0].axis : "left";
    let q = le.behavior === "highlight" || m.length === 0 || m.indexOf(B) !== -1;
    const j = yE(b == null ? void 0 : b.preliminaryData, W, B);
    let J = mE({ preliminaryData: b.preliminaryData, data: W, stroke: v(b.runtime.seriesLabels[B]), strokeWidth: ee[0].weight || 2, handleLineType: k, lineType: ne, seriesKey: B });
    const oe = bE(O, B, b.preliminaryData, b.xAxis.dataKey);
    let De = (de) => u(t(de)) + (u.bandwidth ? u.bandwidth() / 2 : 0);
    return /* @__PURE__ */ E.createElement(
      Je,
      {
        key: `series-${B}`,
        opacity: le.behavior === "highlight" && m.length > 0 && m.indexOf(B) === -1 ? 0.5 : 1,
        display: le.behavior === "highlight" || m.length === 0 && !le.dynamicLegend || m.indexOf(B) !== -1 ? "block" : "none"
      },
      Z.map((de, Ee) => {
        const re = b.series.find(({ dataKey: G }) => G === B), { axis: Oe } = re, ve = Object.keys(b.runtime.seriesLabels).length > 1, ce = Oe === "Right" ? "rightLabel" : "label";
        let be = b.runtime.yAxis[ce];
        return ve || (be = b.isLegendValue ? b.runtime.seriesLabels[B] : be), de[B] !== void 0 && de[B] !== "" && de[B] !== null && N(de[B]) && /* @__PURE__ */ E.createElement(Je, { key: `series-${B}-point-${Ee}`, className: "checkwidth" }, /* @__PURE__ */ E.createElement(hr, { key: "bars", width: Number(d), height: Number(h), fill: "transparent", fillOpacity: 0.05, onMouseMove: (G) => l(G, O), onMouseOut: a, onClick: (G) => i(G, Z) }), /* @__PURE__ */ E.createElement(vt, { display: b.labels ? "block" : "none", x: De(de), y: ie === "Right" ? V(r(de, B)) : y(r(de, B)), fill: "#000", textAnchor: "middle" }, P(de[B], "left")), (H === "hidden" || H === "always show") && /* @__PURE__ */ E.createElement(
          Md,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: Ee,
            circleData: j,
            tableData: O,
            data: Z,
            d: de,
            config: b,
            seriesKey: B,
            displayArea: q,
            tooltipData: f,
            xScale: u,
            yScale: y,
            colorScale: v,
            parseDate: R,
            yScaleRight: V,
            seriesAxis: ie,
            key: `line-circle--${Ee}`
          }
        ), /* @__PURE__ */ E.createElement(
          Md,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: Ee,
            tableData: O,
            circleData: j,
            data: Z,
            d: de,
            config: b,
            seriesKey: B,
            displayArea: q,
            tooltipData: f,
            xScale: u,
            yScale: y,
            colorScale: v,
            parseDate: R,
            yScaleRight: V,
            seriesAxis: ie,
            key: `isolated-circle-${Ee}`
          }
        ));
      }),
      /* @__PURE__ */ E.createElement(E.Fragment, null, H === "hover" && /* @__PURE__ */ E.createElement(
        Md,
        {
          tableData: O,
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: j,
          data: Z,
          config: b,
          seriesKey: B,
          displayArea: q,
          tooltipData: f,
          xScale: u,
          yScale: y,
          colorScale: v,
          parseDate: R,
          yScaleRight: V,
          seriesAxis: ie
        }
      )),
      (ye = b == null ? void 0 : b.preliminaryData) != null && ye.some((de) => de.value && de.type) ? /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(
        zm,
        {
          curve: os[ee[0].lineType],
          segments: Z.map((de) => [de]),
          segmentation: "x",
          x: (de) => De(de),
          y: (de) => ie === "Right" ? V(r(de, B)) : y(Number(r(de, B))),
          styles: J,
          defined: (de, Ee) => de[B] !== "" && de[B] !== null && de[B] !== void 0
        }
      ), oe.map((de, Ee) => /* @__PURE__ */ E.createElement(
        Hr,
        {
          key: Ee,
          data: de.data,
          x: (re) => De(re),
          y: (re) => ie === "Right" ? V(r(re, B)) : y(Number(r(re, B))),
          stroke: v(b.runtime.seriesLabels[B]),
          strokeWidth: ee[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: k(de.style),
          defined: (re, Oe) => re[B] !== "" && re[B] !== null && re[B] !== void 0
        }
      ))) : /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(
        Hr,
        {
          curve: os[ee[0].lineType],
          data: b.xAxis.type === "date-time" || b.xAxis.type === "date" ? Z.sort((de, Ee) => {
            let re = t(de), Oe = t(Ee);
            return re < Oe ? -1 : Oe < re ? 1 : 0;
          }) : Z,
          x: (de) => De(de),
          y: (de) => ie === "Right" ? V(r(de, B)) : y(Number(r(de, B))),
          stroke: v(b.runtime.seriesLabels[B]),
          strokeWidth: ee[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: ne ? k(ne) : 0,
          defined: (de, Ee) => de[B] !== "" && de[B] !== null && de[B] !== void 0
        }
      )),
      j.map((de, Ee) => /* @__PURE__ */ E.createElement(
        "circle",
        {
          key: Ee,
          cx: De(de),
          cy: ie === "Right" ? V(r(de, B)) : y(Number(r(de, B))),
          r: 6,
          strokeWidth: ee[0].weight || 2,
          stroke: v ? v(b.runtime.seriesLabels[B]) : "#000",
          fill: "#fff"
        }
      )),
      b.animate && /* @__PURE__ */ E.createElement(
        Hr,
        {
          className: "animation",
          curve: os[ee[0].lineType],
          data: Z,
          x: (de) => De(de),
          y: (de) => ie === "Right" ? V(r(de, B)) : y(Number(r(de, B))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: ne ? k(ne) : 0,
          defined: (de, Ee) => de[B] !== "" && de[B] !== null && de[B] !== void 0
        }
      ),
      X && (b.runtime.lineSeriesKeys || b.runtime.seriesKeys).map((de) => {
        let Ee;
        for (let re = Z.length - 1; re >= 0; re--)
          if (Z[re][de]) {
            Ee = Z[re];
            break;
          }
        return Ee ? /* @__PURE__ */ E.createElement("text", { x: De(Ee) + 5, y: y(r(Ee, de)), alignmentBaseline: "middle", fill: b.colorMatchLineSeriesLabels && v ? v(b.runtime.seriesLabels[de] || de) : "black" }, b.runtime.seriesLabels[de] || de) : /* @__PURE__ */ E.createElement(E.Fragment, null);
      })
    );
  }), b.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ E.createElement(vt, { x: d / 2, y: h / 2, fill: "black", textAnchor: "middle", color: "black" }, b.legend.dynamicLegendChartMessage)));
}, SE = (e) => {
  const { rawData: t, updateConfig: r } = se.useContext(bt), { xScale: i, yScale: a, config: l, height: f, width: d, handleTooltipMouseOff: u, handleTooltipMouseOver: h } = e, { forestPlot: y } = l, v = l.xAxis.tickWidthMax + 10, [b, P] = se.useState(!1);
  se.useEffect(() => {
    try {
      const L = ["estimateField", "lower", "upper", "estimateRadius"], _ = l, C = 10;
      for (let V = 0; V < C; V++)
        L.forEach((H) => {
          var X;
          l.forestPlot[H] && l.forestPlot[H] !== ((X = _.columns[l.forestPlot[`additionalColumn${V}`]]) == null ? void 0 : X.name) && (delete _.columns[`additionalColumn${V}`], _.columns[l.forestPlot[H]] = {}, _.columns[l.forestPlot[H]].dataKey = _.forestPlot[H], _.columns[l.forestPlot[H]].name = _.forestPlot[H], _.columns[l.forestPlot[H]].dataTable = !0, _.columns[l.forestPlot[H]].tooltips = !0, _.columns[l.forestPlot[H]].label = _.forestPlot[H]);
        });
      l.forestPlot.radius.scalingColumn && (_.columns[l.forestPlot.radius.scalingColumn] = {}, _.columns[l.forestPlot.radius.scalingColumn].dataKey = _.forestPlot.radius.scalingColumn, _.columns[l.forestPlot.radius.scalingColumn].name = _.forestPlot.radius.scalingColumn, _.columns[l.forestPlot.radius.scalingColumn].label = _.forestPlot.radius.scalingColumn, _.columns[l.forestPlot.radius.scalingColumn].dataTable = !0, _.columns[l.forestPlot.radius.scalingColumn].tooltips = !0), _.table.showVertical && (_.table.indexLabel = l.xAxis.dataKey), r(_);
    } catch (L) {
      console.log(L.message);
    }
  }, []), se.useEffect(() => {
    !b && l.forestPlot.type === "Logarithmic" && (r({
      ...l,
      dataFormat: {
        ...l.dataFormat,
        roundTo: 2
      }
    }), P(!0));
  }, [l.forestPlot.type]);
  const k = l.data.find((L) => L[l.xAxis.dataKey] === l.forestPlot.pooledResult.column), N = k ? [
    { x: i(k[l.forestPlot.lower]), y: f - Number(l.forestPlot.rowHeight) },
    { x: i(k[l.forestPlot.estimateField]), y: f - y.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: i(k[l.forestPlot.upper]), y: f - Number(l.forestPlot.rowHeight) },
    { x: i(k[l.forestPlot.estimateField]), y: f + y.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: i(k[l.forestPlot.lower]), y: f - Number(l.forestPlot.rowHeight) }
  ] : [], R = l.forestPlot.rowHeight, m = [
    { x: 0, y: R },
    { x: d, y: R }
  ], O = [
    { x: 0, y: f },
    { x: d, y: f }
  ], D = Object.entries(l.columns).map((L) => L[1]).filter((L) => L.forestPlot === !0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Je, { width: d }, y.title && /* @__PURE__ */ React.createElement(vt, { className: "forest-plot--title", x: y.type === "Linear" ? i(0) : i(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Si(l.fontSize), fill: "black" }, y.title), y.lineOfNoEffect.show && y.type === "Linear" && /* @__PURE__ */ React.createElement(Qt, { from: { x: i(0), y: 0 + R }, to: { x: i(0), y: f }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), y.lineOfNoEffect.show && y.type === "Logarithmic" && /* @__PURE__ */ React.createElement(Qt, { from: { x: i(1), y: 0 + R }, to: { x: i(1), y: f }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), t.map((L, _) => {
    const C = Wn({
      domain: t.map((W) => W[y.radius.scalingColumn]),
      range: [y.radius.min, y.radius.max]
    }), V = y.radius.scalingColumn !== "" ? C(t[_][y.radius.scalingColumn]) : 4, H = y.colors.shape ? y.colors.shape : "black", X = y.colors.line ? y.colors.line : "black", le = 4;
    return L[l.xAxis.dataKey] === y.pooledResult.column ? /* @__PURE__ */ React.createElement(Hr, { data: N, x: (W) => W.x, y: (W) => W.y - Si(l.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: Kd }) : /* @__PURE__ */ React.createElement(Je, null, /* @__PURE__ */ React.createElement(
      "path",
      {
        stroke: X,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${i(L[y.lower])} ${a(_) - Number(le)}
                    L${i(L[y.lower])} ${a(_) + Number(le)}
                `
      }
    ), /* @__PURE__ */ React.createElement(
      "path",
      {
        stroke: X,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${i(L[y.upper])} ${a(_) - Number(le)}
                    L${i(L[y.upper])} ${a(_) + Number(le)}
                `
      }
    ), /* @__PURE__ */ React.createElement("line", { stroke: X, className: `line-${L[l.yAxis.dataKey]}`, key: _, x1: i(L[y.lower]), x2: i(L[y.upper]), y1: a(_), y2: a(_) }), y.shape === "circle" && /* @__PURE__ */ React.createElement(Wy, { className: "forest-plot--circle", cx: i(Number(L[y.estimateField])), cy: a(_), r: y.radius.scalingColumn !== "" ? C(t[_][y.radius.scalingColumn]) : 4, fill: H, style: { opacity: 1, filter: "unset" } }), y.shape === "square" && /* @__PURE__ */ React.createElement("rect", { className: "forest-plot--square", x: i(Number(L[y.estimateField])), y: a(_) - V / 2, width: V, height: V, fill: H, style: { opacity: 1, filter: "unset" } }), y.shape === "text" && /* @__PURE__ */ React.createElement(vt, { className: "forest-plot--text", x: i(Number(L[y.estimateField])), y: a(_), textAnchor: "middle", verticalAnchor: "middle", fontSize: Si(l.fontSize), fill: H }, L[y.estimateField]));
  }), N && y.regression.showDiamond && /* @__PURE__ */ React.createElement(Hr, { data: N, x: (L) => L.x, y: (L) => L.y, stroke: "black", strokeWidth: 2, fill: y.regression.baseLineColor, curve: Kd }), y.regression.description && /* @__PURE__ */ React.createElement(vt, { x: 0 - Number(l.xAxis.size), width: d, y: f - l.forestPlot.rowHeight - Number(y.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, y.regression.description), /* @__PURE__ */ React.createElement(hr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: d, height: f, fill: "transparent", fillOpacity: 0.5, onMouseMove: (L) => h(L, t), onMouseOut: u })), /* @__PURE__ */ React.createElement(Qt, { from: m[0], to: m[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ React.createElement(Qt, { from: O[0], to: O[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), D.map((L) => t.map((_, C) => /* @__PURE__ */ React.createElement(vt, { className: `${_[L.name]}`, x: L.forestPlotAlignRight ? d : L.forestPlotStartingPoint, y: a(C), textAnchor: L.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Si(l.fontSize), fill: "black" }, _[L.name]))), !y.hideDateCategoryCol && t.map((L, _) => /* @__PURE__ */ React.createElement(vt, { className: `${L[l.xAxis.dataKey]}`, x: 0, y: a(_), textAnchor: "start", verticalAnchor: "middle", fontSize: Si(l.fontSize), fill: "black" }, L[l.xAxis.dataKey])), !y.hideDateCategoryCol && l.xAxis.dataKey && /* @__PURE__ */ React.createElement(vt, { className: l.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Si(l.fontSize), fill: "black" }, l.xAxis.dataKey), D.map((L) => /* @__PURE__ */ React.createElement(vt, { className: `${L.label}`, x: L.forestPlotAlignRight ? d : L.forestPlotStartingPoint, y: 0, textAnchor: L.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Si(l.fontSize), fill: "black" }, L.label)), y.leftLabel && /* @__PURE__ */ React.createElement(vt, { className: "forest-plot__left-label", x: y.type === "Linear" ? i(0) - 25 : i(1) - 25, y: f + v, textAnchor: "end", verticalAnchor: "start" }, y.leftLabel), y.rightLabel && /* @__PURE__ */ React.createElement(vt, { className: "forest-plot__right-label", x: y.type === "Linear" ? i(0) + 25 : i(1) + 25, y: f + v, textAnchor: "start", verticalAnchor: "start" }, y.rightLabel));
}, EE = ({ width: e, height: t, originalWidth: r }) => {
  var D, L, _;
  const { config: i, colorScale: a, transformedData: l, formatNumber: f, seriesHighlight: d, getTextWidth: u } = se.useContext(bt);
  if (!i || ((D = i == null ? void 0 : i.series) == null ? void 0 : D.length) < 2)
    return;
  const h = i.barHasBorder === "true" ? 1 : 0, y = e / 2, v = { small: 16, medium: 18, large: 20 }, b = 1.02, P = {
    parentKey: (L = i.dataDescription) == null ? void 0 : L.seriesKey,
    dataKey: i.series[0].dataKey,
    dataKeyLabel: i.runtime.seriesLabels[i.series[0].dataKey] || i.series[0].dataKey,
    color: a(i.runtime.seriesLabels[i.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((C) => C[i.series[0].dataKey])
    ),
    labelColor: ""
  }, k = {
    parentKey: (_ = i.dataDescription) == null ? void 0 : _.seriesKey,
    dataKey: i.series[1].dataKey,
    dataKeyLabel: i.runtime.seriesLabels[i.series[1].dataKey] || i.series[1].dataKey,
    color: a(i.runtime.seriesLabels[i.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((C) => C[i.series[1].dataKey])
    ),
    labelColor: ""
  }, N = Wn({
    domain: [0, Math.max(P.max * b, k.max * 1.1)],
    range: [0, y]
  });
  P.labelColor = P.color ? Ko("#000", P.color) : "#000", k.labelColor = k.color ? Ko("#000", k.color) : "#000";
  const R = i.yAxis.label ? `${i.yAxis.label}: ` : "", m = (C) => {
    var V;
    return `<p>
				${(V = i.dataDescription) == null ? void 0 : V.seriesKey}: ${P.dataKeyLabel}<br/>
				${i.xAxis.dataKey}: ${C[i.xAxis.dataKey]}<br/>
				${R}${f(C[P.dataKey], "left")}
			</p>`;
  }, O = (C) => {
    var V;
    return `<p>
				${(V = i.dataDescription) == null ? void 0 : V.seriesKey}: ${k.dataKeyLabel}<br/>
				${i.xAxis.dataKey}: ${C[i.xAxis.dataKey]}<br/>
				${R}${f(C[k.dataKey], "left")}
			</p>`;
  };
  return e > 0 && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ E.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: r, height: t, viewBox: `0 0 ${e + Number(i.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ E.createElement("title", null, `Paired bar chart graphic with the title ${i.title ? i.title : "No Title Found"}`), /* @__PURE__ */ E.createElement(Je, { top: 0, left: Number(i.xAxis.size) }, l.filter((C) => i.series[0].dataKey === P.dataKey).map((C, V) => {
    var ne, ee;
    let H = i.legend.behavior === "highlight" && d.length > 0 && d.indexOf(i.series[0].dataKey) === -1, X = i.legend.behavior === "highlight" || d.length === 0 || d.indexOf(i.series[0].dataKey) !== -1, le = N(C[i.series[0].dataKey]), Z = Number(i.barHeight) ? Number(i.barHeight) : 25, W = 0;
    W = V !== 0 ? (Number(i.barSpace) + Z + h) * V : W;
    const U = (Number(i.barSpace) + Z + h) * l.length;
    i.heights.horizontal = U;
    const $ = u(f(C[P.dataKey], "left"), `normal ${v[i.fontSize]}px sans-serif`) < le - 5;
    return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Je, { key: `group-${P.dataKey}-${C[i.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ E.createElement(
      hr,
      {
        id: `bar-${P.dataKey}-${C[(ne = i.dataDescription) == null ? void 0 : ne.xKey]}`,
        className: "bar group-1",
        key: `bar-${P.dataKey}-${C[(ee = i.dataDescription) == null ? void 0 : ee.xKey]}`,
        x: y - le,
        y: W,
        width: N(C[i.series[0].dataKey]),
        height: Z,
        fill: P.color,
        "data-tooltip-html": m(C),
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: h,
        opacity: H ? 0.5 : 1,
        display: X ? "block" : "none",
        tabIndex: -1
      }
    ), i.yAxis.displayNumbersOnBar && X && /* @__PURE__ */ E.createElement(vt, { textAnchor: $ ? "start" : "end", dx: $ ? 5 : -5, verticalAnchor: "middle", x: y - le, y: W + i.barHeight / 2, fill: $ ? P.labelColor : "#000" }, f(C[P.dataKey], "left"))));
  }), l.filter((C) => i.series[1].dataKey === k.dataKey).map((C, V) => {
    var ne, ee, ie;
    let H = N(C[i.series[1].dataKey]), X = i.legend.behavior === "highlight" && d.length > 0 && d.indexOf(i.series[1].dataKey) === -1, le = i.legend.behavior === "highlight" || d.length === 0 || d.indexOf(i.series[1].dataKey) !== -1, Z = i.barHeight ? Number(i.barHeight) : 25, W = 0;
    W = V !== 0 ? (Number(i.barSpace) + Z + h) * V : W;
    const U = (Number(i.barSpace) + Z + h) * l.length;
    i.heights.horizontal = U;
    const $ = u(f(C[k.dataKey], "left"), `normal ${v[i.fontSize]}px sans-serif`) < H - 5;
    return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("style", null, `
                      .bar-${k.dataKey}-${C[i.xAxis.dataKey]} {
                          transform-origin: ${y}px ${W}px
                      }
							      `), /* @__PURE__ */ E.createElement(Je, { key: `group-${k.dataKey}-${C[(ne = i.dataDescription) == null ? void 0 : ne.xKey]}`, className: "horizontal" }, /* @__PURE__ */ E.createElement(
      hr,
      {
        id: `bar-${k.dataKey}-${C[(ee = i.dataDescription) == null ? void 0 : ee.xKey]}`,
        className: "bar group-2",
        key: `bar-${k.dataKey}-${C[(ie = i.dataDescription) == null ? void 0 : ie.xKey]}`,
        x: y,
        y: W,
        width: N(C[i.series[1].dataKey]),
        height: Z,
        fill: k.color,
        "data-tooltip-html": O(C),
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        strokeWidth: h,
        stroke: "#333",
        opacity: X ? 0.5 : 1,
        display: le ? "block" : "none",
        tabIndex: -1
      }
    ), i.yAxis.displayNumbersOnBar && le && /* @__PURE__ */ E.createElement(vt, { textAnchor: $ ? "end" : "start", dx: $ ? -5 : 5, verticalAnchor: "middle", x: y + H, y: W + i.barHeight / 2, fill: $ ? k.labelColor : "#000" }, f(C[k.dataKey], "left"))));
  }))));
}, hy = ({ config: e, minValue: t, maxValue: r, existPositiveValue: i, data: a, isAllLine: l, tableData: f }) => {
  let d = 0, u = 0, h = 0, y = 0;
  if (!a)
    return { min: d, max: u };
  const v = () => gu(e.visualizationType, a, e.allowLineToBarGraph), { visualizationType: b, series: P } = e, { max: k, min: N } = e.runtime.yAxis, R = i ? k >= r : k >= 0, m = e.useLogScale ? N >= 0 : N <= 0 && t >= 0 || N <= t && t < 0;
  d = N && m ? N : t, u = k && R ? k : Number.MIN_VALUE;
  const { lower: O, upper: D } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (O && D && e.visualizationType === "Bar") {
    const L = d < 0 ? 1.1 : 0;
    u = Math.max(r, Math.max(...a.flatMap((_) => [_[D], _[O]])) * 1.15), d = Math.min(t, Math.min(...a.flatMap((_) => [_[D], _[O]])) * 1.15) * L;
  }
  if (e.series.filter((L) => (L == null ? void 0 : L.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: L }
    } = e;
    if ((L == null ? void 0 : L.length) > 0) {
      let _ = [];
      L.forEach((X) => {
        var le;
        (le = X.confidenceIntervals) == null || le.map((Z) => {
          _.push(Z.high), _.push(Z.low);
        });
      });
      const C = a.map((X) => _.map((le) => X[le])), V = Math.max.apply(
        null,
        C.map((X) => X[0])
      ), H = Math.min.apply(
        null,
        C.map((X) => X[1])
      );
      V > u && (u = V), H < d && (d = H);
    }
  }
  if (b === "Combo")
    try {
      if (!a)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let L = P.filter((V) => V.axis === "Left"), _ = P.filter((V) => V.axis === "Right");
      const C = (V, H, X, le = "left") => {
        let Z = 0;
        return (H.map((U) => U.dataKey) || []).forEach((U) => {
          let B = H.find((ee) => ee.dataKey === U), $ = V.map((ee) => ee[U]), ne = Math.max.apply(null, $);
          e.visualizationSubType === "stacked" && le === "left" && B.type === "Bar" && (Z += ne), ne > X && (X = ne), X < Z && (X = Z);
        }), X;
      };
      h = C(a, L, h, "left"), y = C(a, _, y, "right"), h < k && (h = k);
    } catch (L) {
      console.error(L.message);
    }
  if ((b === "Bar" || v() || b === "Combo" && !l) && d > 0 && (d = 0), (e.visualizationType === "Bar" || v() || e.visualizationType === "Combo" && !l) && d < 0 && (d = d * 1.1), e.visualizationType === "Combo" && l && ((N == null || N === "") && d > 0 && (d = 0), N)) {
    const L = e.useLogScale ? N >= 0 && N < t : N < t;
    d = N && L ? N : t;
  }
  if (e.visualizationType === "Deviation Bar" && d > 0) {
    const L = Number(N) < Math.min(t, Number(e.xAxis.target));
    d = N && L ? N : 0;
  }
  if (e.visualizationType === "Line" && !v()) {
    const L = e.useLogScale ? N >= 0 && N < t : N < t, _ = f == null ? void 0 : f.some((C, V) => {
      var H;
      return (H = e.preliminaryData) == null ? void 0 : H.some((X) => {
        var U;
        if (X.type !== "suppression" || !X.style)
          return !1;
        const le = er.pick(C, (U = e.runtime) == null ? void 0 : U.seriesKeys), Z = er.values(le).includes(X.value);
        return (X.column ? C[X.column] === X.value : Z) && (V === 0 || V === f.length - 1);
      });
    });
    d = N && L ? N : _ ? 0 : t;
  }
  if (u === Number.MIN_VALUE && (u = i ? r : 0), e.runtime.yAxis.paddingPercent) {
    let L = (u - d) * e.runtime.yAxis.paddingPercent;
    d -= L, u += L;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const L = a.map((C) => C[e.series[0].dataKey]), _ = Math.max(...L).toString().length;
    switch (!0) {
      case (_ > 8 && _ <= 12):
        u = u * 1.3;
        break;
      case (_ > 4 && _ <= 7):
        u = u * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (d < 0 ? (u *= 1 + e.yAxis.scalePadding * 2 / 100, d *= 1 + e.yAxis.scalePadding * 2 / 100) : u *= 1 + e.yAxis.scalePadding / 100), { min: d, max: u, leftMax: h, rightMax: y };
}, zr = {
  TIME: "time",
  LOG: "log",
  POINT: "point",
  LINEAR: "linear",
  BAND: "band"
}, kE = (e) => {
  let { xAxisDataMapped: t, xMax: r, yMax: i, min: a, max: l, config: f, data: d } = e;
  const { rawData: u, dimensions: h } = se.useContext(bt), [y, v] = h, b = f.runtime.barSeriesKeys || f.runtime.seriesKeys, P = f.runtime.xAxis.type, k = f.orientation === "horizontal", N = (X) => X[f.runtime.originalXAxis.dataKey], R = d.map((X) => N(X)), { visualizationType: m } = f;
  let O = null, D = null, L = null, _ = null, C = null, V = null, H = null;
  if (k && (O = wE({ min: a * 1.03, ...e }), O.type = f.useLogScale ? zr.LOG : zr.LINEAR, D = CE(P, t), D.rangeRound([0, i]), C = Th(b, [0, i])), k || (H = Th(R, [0, r], 0.5), O = bc(t, [0, r], 1 - f.barThickness), D = TE(e), C = bc(b, [0, O.bandwidth()], 0)), f.xAxis.type === "date" && !k) {
    const X = t ? t.sort() : [];
    O = bc(X, [0, r], 1 - f.barThickness);
  }
  if (f.xAxis.type === "date-time") {
    let X = Math.min(...t), le = Math.max(...t);
    X -= (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (le - X), le += (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (le - X), O = Tg({
      domain: [X, le],
      range: [0, r]
    }), O.type = zr.TIME;
    let Z = Number.MAX_VALUE, W = t ? t.sort() : [];
    for (let U = 0; U < W.length - 1; U++) {
      let B = O(W[U + 1]) - O(W[U]);
      B < Z && (Z = B);
    }
    (t.length === 1 || Z > r / 4) && (Z = r / 4), C = bc(b, [0, (f.barThickness || 1) * Z], 0);
  }
  if (f.visualizationType === "Deviation Bar") {
    const X = f.isLollipopChart ? 1.05 : 1.03;
    D = $d({
      domain: t,
      range: [0, i]
    }), O = Wn({
      domain: [a * X, Math.max(Number(f.xAxis.target), l)],
      range: [0, r],
      round: !0,
      nice: !0
    }), O.type = zr.LINEAR;
  }
  if (f.visualizationType === "Scatter Plot" && f.xAxis.type === "continuous" && (O = Wn({
    domain: [0, Math.max.apply(null, O.domain())],
    range: [0, r]
  }), O.type = zr.LINEAR), m === "Box Plot") {
    const X = [];
    if (f.boxplot.plots.map((U) => U.columnOutliers.map((B) => X.push(B))) && !f.boxplot.hideOutliers) {
      let U = Math.min(...X), B = Math.max(...X);
      U < a && (a = U), B > l && (l = B);
    }
    let Z = Math.min(...f.boxplot.plots.map((U) => U.columnLowerBounds)), W = Math.max(...f.boxplot.plots.map((U) => U.columnUpperBounds));
    Z < a && (a = Z), W > l && (l = W), D = Wn({
      range: [i, 0],
      round: !0,
      domain: [a, l]
    }), O = $d({
      range: [0, r],
      round: !0,
      domain: f.boxplot.categories,
      padding: 0.4
    }), O.type = zr.BAND;
  }
  if (m === "Paired Bar") {
    let le = Math.max.apply(
      Math,
      d.map((W) => {
        var U;
        return W[(U = f.series[0]) == null ? void 0 : U.dataKey];
      })
    ), Z = Math.max.apply(
      Math,
      d.map((W) => {
        var U;
        return W[(U = f.series[1]) == null ? void 0 : U.dataKey];
      })
    );
    _ = Wn({
      domain: [0, Math.max(le, Z) * 1.02],
      range: [r / 2, 0]
    }), L = Wn({
      domain: _.domain(),
      range: [r / 2, r],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const X = () => f.forestPlot.regression.showDiamond || f.forestPlot.regression.description ? [0 + f.forestPlot.rowHeight * 2, i - f.forestPlot.rowHeight] : [0 + f.forestPlot.rowHeight * 2, i];
    D = Wn({
      domain: [0, u.length],
      range: X()
    });
    const le = 5, Z = Number(f.forestPlot.leftWidthOffset) / 100 * r, W = Number(f.forestPlot.rightWidthOffset) / 100 * r, U = Number(f.forestPlot.rightWidthOffsetMobile) / 100 * r, B = Number(f.forestPlot.leftWidthOffsetMobile) / 100 * r;
    if (y > 480) {
      if (f.forestPlot.type === "Linear" && (O = Wn({
        domain: [Math.min(...d.map(($) => parseFloat($[f.forestPlot.lower]))) - le, Math.max(...d.map(($) => parseFloat($[f.forestPlot.upper]))) + le],
        range: [Z, h[0] - W]
      }), O.type = zr.LINEAR), f.forestPlot.type === "Logarithmic") {
        let $ = Math.max(...d.map((ee) => parseFloat(ee[f.forestPlot.upper]))), ne = Math.min(...d.map((ee) => parseFloat(ee[f.forestPlot.lower])));
        O = _c({
          domain: [ne, $],
          range: [Z, r - W],
          nice: !0
        }), O.type = zr.LOG;
      }
    } else if (f.forestPlot.type === "Linear" && (O = Wn({
      domain: [Math.min(...d.map(($) => parseFloat($[f.forestPlot.lower]))) - le, Math.max(...d.map(($) => parseFloat($[f.forestPlot.upper]))) + le],
      range: [B, r - U],
      type: zr.LINEAR
    })), f.forestPlot.type === "Logarithmic") {
      let $ = Math.max(...d.map((ee) => parseFloat(ee[f.forestPlot.upper]))), ne = Math.min(...d.map((ee) => parseFloat(ee[f.forestPlot.lower])));
      O = _c({
        domain: [ne, $],
        range: [Z, r - W],
        nice: !0,
        base: $ > 1 ? 10 : 2,
        round: !1,
        type: zr.LOG
      });
    }
  }
  return { xScale: O, yScale: D, seriesScale: C, g1xScale: _, g2xScale: L, xScaleNoPadding: V, xScaleBrush: H };
}, RE = (e, t, r) => {
  const i = t.domain();
  if (t.type === "time") {
    const a = e[e.length - 1], l = e[0], f = (a - l) / (r - 1), d = [];
    for (let u = a; u >= l; u -= f)
      d.push(u);
    return d[d.length - 1] !== l && d.push(l), d.reverse(), d;
  }
  if (i.length > 2) {
    const a = r || 1, l = [];
    for (let f = i.length; f > 0; f -= a) {
      const d = Math.max(Math.round(f) - 1, 0);
      l.push(i[d]);
    }
    return l.reverse(), l;
  }
}, wE = ({ min: e, max: t, xMax: r, config: i }) => (e = i.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (i.useLogScale ? _c : Wn)({
  domain: [e, t],
  range: [0, r],
  nice: i.useLogScale,
  zero: i.useLogScale
})), TE = ({ min: e, max: t, yMax: r, config: i, leftMax: a }) => {
  e = i.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const l = i.useLogScale ? _c : Wn;
  return i.visualizationType === "Combo" && (t = a), l({
    domain: [e, t],
    range: [r, 0],
    nice: i.useLogScale,
    zero: i.useLogScale
  });
}, CE = (e, t) => e === "date" ? Wn({
  domain: [Math.min(...t), Math.max(...t)]
}) : Wo({ domain: t, padding: 0.5 }), Th = (e, t, r = 0) => Wo({
  domain: e,
  range: t,
  padding: r
}), bc = (e, t, r = 0) => $d({
  domain: e,
  range: t,
  padding: r
});
function AE(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const ys = () => {
  const { config: e } = se.useContext(bt), { visualizationType: t, series: r, orientation: i, visualizationSubType: a } = e, l = [
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
  ], f = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], d = () => !["Forest Plot", "Sankey"].includes(t), u = () => !["Spark Line"].includes(t), h = () => !["Spark Line"].includes(t), y = () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), v = () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), b = () => {
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
  }, P = () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"), k = () => e.visualizationType === "Bar" && e.visualizationSubType === "stacked" ? !1 : !!["Bar", "Combo"].includes(e.visualizationType), N = () => {
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
  }, R = () => {
    if ((t === "Bar" || !0) && a === "regular")
      return !0;
  }, m = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && i === "vertical", O = () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : r == null ? void 0 : r.some((je) => je.type === "Bar" || je.type === "Paired Bar" || je.type === "Deviation Bar"), D = () => {
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
    enabledChartTypes: l,
    headerColors: f,
    visCanAnimate: v,
    visHasAnchors: N,
    visHasBarBorders: O,
    visHasDataCutoff: D,
    visHasLabelOnData: y,
    visHasDataSuppression: R,
    visHasLegend: b,
    visHasLegendAxisAlign: () => t === "Bar" && a === "stacked" && e.legend.behavior === "isolate",
    visHasBrushChart: m,
    visHasNumbersOnBars: P,
    visHasaAdditionalLabelsOnBars: k,
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : i === "horizontal" || t === "Paired Bar",
    visSupportsBarThickness: () => !["Forest Plot"].includes(t),
    visSupportsChartHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxis: d,
    visSupportsDateCategoryAxisLabel: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisLine: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisTicks: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryHeight: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsDateCategoryNumTicks: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryTickRotation: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxisPadding: () => e.xAxis.type === "date-time",
    visSupportsFilters: () => !["Forest Plot", "Sankey"].includes(t),
    visSupportsFootnotes: h,
    visSupportsLeftValueAxis: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsNonSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsPreliminaryData: () => (e == null || e.series.some((Se) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(Se == null ? void 0 : Se.type)), t === "Line" || t === "Bar" && a === "regular" || t === "Combo"),
    visSupportsRankByValue: () => !["Spark Line"].includes(t),
    visSupportsRegions: () => !["Forest Plot", "Pie", "Paired Bar", "Spark Line", "Sankey"].includes(t),
    visSupportsResponsiveTicks: () => !["Spark Line"].includes(t),
    visSupportsReverseColorPalette: () => !["Forest Plot", "Paired Bar", "Deviation Bar", "Sankey"].includes(t),
    visSupportsSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsSuperTitle: u,
    visSupportsTooltipLines: () => !!["Combo", "Forecasting", "Area Chart", "Line", "Bar"].includes(t),
    visHasSelectableLegendValues: L,
    visSupportsTooltipOpacity: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsValueAxisGridLines: () => {
      const Se = ["Forest Plot"];
      return !(i === "horizontal" || Se.includes(t));
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
var LE = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function yf() {
  return yf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, yf.apply(this, arguments);
}
function PE(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function my(e) {
  var t = e.id, r = e.markerWidth, i = r === void 0 ? 3 : r, a = e.markerHeight, l = a === void 0 ? 3 : a, f = e.markerUnits, d = f === void 0 ? "userSpaceOnUse" : f, u = e.children, h = PE(e, LE);
  return /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("marker", yf({
    id: t,
    markerWidth: i,
    markerHeight: l,
    markerUnits: d
  }, h), u));
}
my.propTypes = {
  id: Ce.string.isRequired,
  size: Ce.number,
  markerWidth: Ce.oneOfType([Ce.string, Ce.number]),
  markerHeight: Ce.oneOfType([Ce.string, Ce.number]),
  markerUnits: Ce.string,
  refX: Ce.oneOfType([Ce.string, Ce.number]),
  refY: Ce.oneOfType([Ce.string, Ce.number]),
  strokeWidth: Ce.number,
  children: Ce.node.isRequired
};
var DE = ["id", "size", "strokeWidth"];
function gf() {
  return gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, gf.apply(this, arguments);
}
function _E(e, t) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function OE(e) {
  var t = e.id, r = e.size, i = r === void 0 ? 9 : r, a = e.strokeWidth, l = a === void 0 ? 1 : a, f = _E(e, DE), d = i + l * 2, u = i, h = d / 2, y = "0 0, " + i + " " + i / 2 + ", 0 " + i;
  return /* @__PURE__ */ E.createElement(my, gf({
    id: t,
    markerWidth: d,
    markerHeight: d,
    refX: u,
    refY: h,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: l
  }, f), /* @__PURE__ */ E.createElement("g", {
    transform: "translate(" + l + ", " + l + ")"
  }, /* @__PURE__ */ E.createElement("polyline", {
    points: y
  })));
}
const Ir = (e) => {
  var Mn, Bt, On, zn, kn, xn;
  const { transformedData: t, tableData: r, dimensions: i, config: a, parseDate: l, formatDate: f, currentViewport: d, formatNumber: u, handleChartAriaLabels: h, updateConfig: y, handleLineType: v, getTextWidth: b, brushConfig: P } = se.useContext(bt), { visualizationType: k, visualizationSubType: N, orientation: R, xAxis: m, yAxis: O, runtime: D, debugSvg: L } = a, _ = () => gu(a.visualizationType, t, a.allowLineToBarGraph);
  let [C] = i;
  a && a.legend && !a.legend.hide && ((Mn = a.legend) == null ? void 0 : Mn.position) !== "bottom" && ["lg", "md"].includes(d) && (C = C * 0.73);
  const { horizontal: V } = a.heights, H = R === "horizontal" || a.visualizationType === "Forest Plot", X = !0, le = isNaN(parseInt(D.xAxis.labelOffset)) ? 0 : parseInt(D.xAxis.labelOffset), Z = isNaN(parseInt(D.yAxis.labelOffset)) ? 0 : parseInt(D.yAxis.labelOffset), W = isNaN(parseInt(D.xAxis.size)) ? 0 : parseInt(D.xAxis.size);
  let U = a.aspectRatio ? C * a.aspectRatio : a.visualizationType === "Forest Plot" ? a.heights.vertical : a.heights[R];
  U = Number(U);
  const B = C - D.yAxis.size - (k === "Combo" ? a.yAxis.rightAxisSize : 0);
  let $ = U - (R === "horizontal" ? 0 : W);
  U += R === "horizontal" ? W : 0, a.visualizationType === "Forest Plot" && (U = U + a.data.length * a.forestPlot.rowHeight, $ = $ + a.data.length * a.forestPlot.rowHeight, C = i[0]), (Bt = a.brush) != null && Bt.active && (U = U + ((On = a.brush) == null ? void 0 : On.height));
  const { minValue: ne, maxValue: ee, existPositiveValue: ie, isAllLine: q } = vu(a, t), { visSupportsReactTooltip: j } = ys(), { hasTopAxis: J } = AE(a), [oe, De] = se.useState(!1), [ye, de] = se.useState({ x: 0, y: 0 });
  se.useRef(null);
  const Ee = se.useRef(), re = se.useRef(), Oe = $f(Ee, {
    freezeOnceVisible: !1
  }), ve = (we) => En(a.runtime.xAxis) ? l(we[a.runtime.originalXAxis.dataKey]).getTime() : we[a.runtime.originalXAxis.dataKey], ce = (we, at) => we[at], be = (zn = a.brush) != null && zn.active && ((kn = P.data) != null && kn.length) ? P.data.map((we) => ve(we)) : t.map((we) => ve(we)), G = a.orientation === "horizontal" || a.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", Pe = { data: t, tableData: r, config: a, minValue: ne, maxValue: ee, isAllLine: q, existPositiveValue: ie, xAxisDataMapped: be, xMax: B, yMax: $ }, { min: Se, max: je, leftMax: Ke, rightMax: Ge } = hy(Pe), { yScaleRight: Be, hasRightAxis: yt } = jf({ config: a, yMax: $, data: t, updateConfig: y }), { xScale: He, yScale: ze, seriesScale: Fe, g1xScale: Ne, g2xScale: ot, xScaleNoPadding: Ue, xScaleBrush: et } = kE({ ...Pe, min: Se, max: je, leftMax: Ke, rightMax: Ge, dimensions: i }), [ut, st] = se.useState(null);
  se.useEffect(() => {
    var we;
    st((we = re == null ? void 0 : re.current) == null ? void 0 : we.getBoundingClientRect());
  }, [re, a.legend]);
  const Ct = (we, at) => {
    if (a.useLogScale && we === 0.1 && (we = 0), !(a.data && !a.data[at] && k === "Forest Plot"))
      return a.visualizationType === "Forest Plot" ? a.data[at][a.xAxis.dataKey] : En(D.yAxis) ? f(l(we)) : R === "vertical" && je - Se < 3 ? u(we, "left", X, !1, !1, "1") : R === "vertical" ? u(we, "left", X) : we;
  }, Gt = (we) => (a.useLogScale && we === 0.1 && (we = 0), En(D.xAxis) && a.visualizationType !== "Forest Plot" ? f(we) : R === "horizontal" && a.visualizationType !== "Forest Plot" ? u(we, "left", X) : a.xAxis.type === "continuous" && a.visualizationType !== "Forest Plot" ? u(we, "bottom", X) : a.visualizationType === "Forest Plot" ? u(we, "left", a.dataFormat.abbreviated, a.runtime.xAxis.prefix, a.runtime.xAxis.suffix, Number(a.dataFormat.roundTo)) : we), Wt = (we) => {
    let { numTicks: at } = D[we];
    D[we].viewportNumTicks && D[we].viewportNumTicks[d] && (at = D[we].viewportNumTicks[d]);
    let tt;
    return we === "yAxis" && (tt = H && !at ? t.length : H && at ? at : !H && !at ? void 0 : !H && at && at, tt === void 0 && !a.dataFormat.roundTo && (Number(je) <= 3 ? tt = 2 : tt = 4), Number(tt) > Number(je) && (tt = Number(Se) < 0 ? Math.round(je) * 2 : Math.round(je))), we === "xAxis" && (tt = H && !at ? void 0 : H && at ? at : !H && !at ? void 0 : !H && at && at, H && tt === void 0 && !a.dataFormat.roundTo && (je <= 3 ? tt = 2 : tt = 4), a.visualizationType === "Forest Plot" && (tt = a.yAxis.numTicks !== "" ? a.yAxis.numTicks : 4)), tt;
  }, { tooltipData: dt, showTooltip: Rt, hideTooltip: cn, tooltipOpen: Jt, tooltipLeft: jt, tooltipTop: fn } = Im(), {
    handleTooltipMouseOver: Le,
    handleTooltipClick: ft,
    handleTooltipMouseOff: $t,
    tooltipStyles: Dt,
    TooltipListItem: St,
    getXValueFromCoordinateDate: hn,
    getXValueFromCoordinate: Lt
  } = Vm({
    xScale: He,
    yScale: ze,
    showTooltip: Rt,
    hideTooltip: cn
  });
  se.useEffect(() => {
    document.querySelector(".isEditor") && De((at) => !0);
  }), se.useEffect(() => {
    (Oe == null ? void 0 : Oe.isIntersecting) === !0 && a.animate && setTimeout(() => {
      De((we) => !0);
    }, 500);
  }, [Oe == null ? void 0 : Oe.isIntersecting, a.animate]);
  const en = () => {
    const { visualizationType: we } = a;
    return we === "Combo" && D.forecastingSeriesKeys > 0 || we === "Area Chart" || we === "Line" || we === "Bar";
  }, an = Number(R === "horizontal" ? a.xAxis.size : a.yAxis.size), Sn = { small: 16, medium: 18, large: 20 }, Ut = () => a.visualizationType === "Forest Plot" ? a.data.length : Wt("yAxis"), Kt = () => {
    let we = a.xAxis.manualStep;
    return a.xAxis.viewportStepCount && a.xAxis.viewportStepCount[d] && (we = a.xAxis.viewportStepCount[d]), we;
  }, Tn = (we) => {
    const at = we.currentTarget.getBoundingClientRect(), tt = we.clientX - at.left, z = we.clientY - at.top;
    de({
      x: tt,
      y: z
    });
  }, _n = () => {
    let we = 40;
    return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(wc, { top: $, left: Number(D.yAxis.size), label: D.xAxis.label, tickFormat: En(D.xAxis) ? f : u, scale: Ne, stroke: "#333", tickStroke: "#333", numTicks: D.xAxis.numTicks || void 0 }, (at) => /* @__PURE__ */ E.createElement(Je, { className: "bottom-axis" }, at.ticks.map((tt, z) => {
      const Te = tt.index !== 0 ? a.yAxis.tickRotation : 0, We = tt.index !== 0 && a.yAxis.tickRotation && a.yAxis.tickRotation > 0 ? "end" : "middle", Qe = b(tt.value, `normal ${Sn[a.fontSize]}px sans-serif`) * Math.sin(Te * (Math.PI / 180)) + 25;
      return Qe > we && (we = Qe), /* @__PURE__ */ E.createElement(Je, { key: `vx-tick-${tt.value}-${z}`, className: "vx-axis-tick" }, !D.yAxis.hideTicks && /* @__PURE__ */ E.createElement(Qt, { from: tt.from, to: tt.to, stroke: "#333" }), !D.yAxis.hideLabel && /* @__PURE__ */ E.createElement(vt, { x: tt.to.x, y: tt.to.y, angle: -Te, verticalAnchor: "start", textAnchor: We }, u(tt.value, "left")));
    }), !D.yAxis.hideAxis && /* @__PURE__ */ E.createElement(Qt, { from: at.axisFromPoint, to: at.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ E.createElement(
      wc,
      {
        top: $,
        left: Number(D.yAxis.size),
        label: D.xAxis.label,
        tickFormat: En(D.xAxis) ? f : D.xAxis.dataKey !== "Year" ? u : (at) => at,
        scale: ot,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: D.xAxis.numTicks || void 0
      },
      (at) => /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Je, { className: "bottom-axis" }, at.ticks.map((tt, z) => {
        const Te = tt.index !== 0 ? a.yAxis.tickRotation : 0, We = tt.index !== 0 && a.yAxis.tickRotation && a.yAxis.tickRotation > 0 ? "end" : "middle", Qe = b(tt.value, `normal ${Sn[a.fontSize]}px sans-serif`) * Math.sin(Te * (Math.PI / 180)) + 25;
        return Qe > we && (we = Qe), /* @__PURE__ */ E.createElement(Je, { key: `vx-tick-${tt.value}-${z}`, className: "vx-axis-tick" }, !D.yAxis.hideTicks && /* @__PURE__ */ E.createElement(Qt, { from: tt.from, to: tt.to, stroke: "#333" }), !D.yAxis.hideLabel && /* @__PURE__ */ E.createElement(vt, { x: tt.to.x, y: tt.to.y, angle: -Te, verticalAnchor: "start", textAnchor: We }, u(tt.value, "left")));
      }), !D.yAxis.hideAxis && /* @__PURE__ */ E.createElement(Qt, { from: at.axisFromPoint, to: at.axisToPoint, stroke: "#333" })), /* @__PURE__ */ E.createElement(Je, null, /* @__PURE__ */ E.createElement(vt, { x: B / 2, y: we + 20 + le, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, D.xAxis.label)), re.current ? re.current.setAttribute("height", Number(U) + Number(we) + (D.xAxis.label ? 50 : 0) + "px") : "")
    ));
  };
  return isNaN(C) ? /* @__PURE__ */ E.createElement(E.Fragment, null) : /* @__PURE__ */ E.createElement(Cr, { component: "LinearChart" }, /* @__PURE__ */ E.createElement("div", { style: { width: `${C}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ E.createElement(
    "svg",
    {
      onMouseMove: Tn,
      width: "100%",
      height: U,
      className: `linear ${a.animate ? "animated" : ""} ${oe && a.animate ? "animate" : ""} ${L && "debug"}`,
      role: "img",
      "aria-label": h(a),
      ref: re,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ E.createElement(hr, { width: C, height: U, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(k) && /* @__PURE__ */ E.createElement(VS, { scale: ze, tickLength: a.useLogScale ? 6 : 8, left: Number(D.yAxis.size) - a.yAxis.axisPadding, label: D.yAxis.label || D.yAxis.label, stroke: "#333", tickFormat: (we, at) => Ct(we, at), numTicks: Ut() }, (we) => {
      const at = a.orientation === "horizontal" ? (we.axisToPoint.y - we.axisFromPoint.y) / 2 : (we.axisFromPoint.y - we.axisToPoint.y) / 2, tt = $ / we.ticks.length / 2 - $ / we.ticks.length * (1 - a.barThickness) + 5;
      return /* @__PURE__ */ E.createElement(Je, { className: "left-axis" }, we.ticks.map((z, Te) => {
        const We = we.ticks[0].to.y, Me = 15, Qe = String(z.value).startsWith("1") || z.value === 0.1 ? "block" : "none", Ze = Qe === "block" ? 7 : 0, mt = { x: z.to.x - Ze, y: z.to.y }, xt = z.index !== 0 || a.xAxis.hideAxis;
        return /* @__PURE__ */ E.createElement(Je, { key: `vx-tick-${z.value}-${Te}`, className: "vx-axis-tick" }, !D.yAxis.hideTicks && /* @__PURE__ */ E.createElement(Qt, { key: `${z.value}--hide-hideTicks`, from: z.from, to: a.useLogScale ? mt : z.to, stroke: a.yAxis.tickColor, display: R === "horizontal" ? "none" : "block" }), D.yAxis.gridLines && xt ? /* @__PURE__ */ E.createElement(Qt, { key: `${z.value}--hide-hideGridLines`, display: (a.useLogScale && Qe).toString(), from: { x: z.from.x + B, y: z.from.y }, to: z.from, stroke: "rgba(0,0,0,0.3)" }) : "", R === "horizontal" && N !== "stacked" && a.yAxis.labelPlacement === "On Date/Category Axis" && !a.yAxis.hideLabel && /* @__PURE__ */ E.createElement(
          vt,
          {
            transform: `translate(${z.to.x - 5}, ${a.isLollipopChart ? z.to.y - We : z.to.y - We + (Number(a.barHeight * a.series.length) - Me) / 2}) rotate(-${a.runtime.horizontal && a.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          z.formattedValue
        ), R === "horizontal" && N === "stacked" && a.yAxis.labelPlacement === "On Date/Category Axis" && !a.yAxis.hideLabel && /* @__PURE__ */ E.createElement(vt, { transform: `translate(${z.to.x - 5}, ${z.to.y - We + (Number(a.barHeight) - Me) / 2}) rotate(-${D.horizontal ? D.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, z.formattedValue), R === "horizontal" && k === "Paired Bar" && !a.yAxis.hideLabel && /* @__PURE__ */ E.createElement(vt, { transform: `translate(${z.to.x - 5}, ${z.to.y - We + Number(a.barHeight) / 2}) rotate(-${D.horizontal ? D.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, z.formattedValue), R === "horizontal" && k === "Deviation Bar" && !a.yAxis.hideLabel && /* @__PURE__ */ E.createElement(vt, { transform: `translate(${z.to.x - 5}, ${a.isLollipopChart ? z.to.y - We + 2 : z.to.y - We + Number(a.barHeight) / 2}) rotate(-${D.horizontal ? D.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, z.formattedValue), R === "vertical" && k !== "Paired Bar" && !a.yAxis.hideLabel && /* @__PURE__ */ E.createElement(
          vt,
          {
            display: a.useLogScale ? Qe : "block",
            dx: a.useLogScale ? -6 : 0,
            x: a.runtime.horizontal ? z.from.x + 2 : z.to.x,
            y: z.to.y + (a.runtime.horizontal ? tt : 0),
            angle: -Number(a.yAxis.tickRotation) || 0,
            verticalAnchor: a.runtime.horizontal ? "start" : "middle",
            textAnchor: a.runtime.horizontal ? "start" : "end",
            fill: a.yAxis.tickLabelColor
          },
          z.formattedValue
        ));
      }), !a.yAxis.hideAxis && /* @__PURE__ */ E.createElement(Qt, { from: we.axisFromPoint, to: D.horizontal ? { x: 0, y: a.visualizationType === "Forest Plot" ? U : Number(V) } : we.axisToPoint, stroke: "#000" }), ze.domain()[0] < 0 && /* @__PURE__ */ E.createElement(Qt, { from: { x: we.axisFromPoint.x, y: ze(0) }, to: { x: B, y: ze(0) }, stroke: "#333" }), k === "Bar" && R === "horizontal" && He.domain()[0] < 0 && /* @__PURE__ */ E.createElement(Qt, { from: { x: He(0), y: 0 }, to: { x: He(0), y: $ }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ E.createElement(vt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * D.yAxis.size + Z}, ${at}) rotate(-90)`, fontWeight: "bold", fill: a.yAxis.labelColor }, we.label));
    }),
    yt && /* @__PURE__ */ E.createElement(YS, { scale: Be, left: Number(C - a.yAxis.rightAxisSize), label: a.yAxis.rightLabel, tickFormat: (we) => u(we, "right"), numTicks: D.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (we) => {
      const at = a.orientation === "horizontal" ? (we.axisToPoint.y - we.axisFromPoint.y) / 2 : (we.axisFromPoint.y - we.axisToPoint.y) / 2, tt = $ / we.ticks.length / 2 - $ / we.ticks.length * (1 - a.barThickness) + 5;
      return /* @__PURE__ */ E.createElement(Je, { className: "right-axis" }, we.ticks.map((z, Te) => /* @__PURE__ */ E.createElement(Je, { key: `vx-tick-${z.value}-${Te}`, className: "vx-axis-tick" }, !D.yAxis.rightHideTicks && /* @__PURE__ */ E.createElement(Qt, { from: z.from, to: z.to, display: D.horizontal ? "none" : "block", stroke: a.yAxis.rightAxisTickColor }), D.yAxis.rightGridLines ? /* @__PURE__ */ E.createElement(Qt, { from: { x: z.from.x + B, y: z.from.y }, to: z.from, stroke: "rgba(0,0,0,0.3)" }) : "", !a.yAxis.rightHideLabel && /* @__PURE__ */ E.createElement(vt, { x: z.to.x, y: z.to.y + (D.horizontal ? tt : 0), verticalAnchor: D.horizontal ? "start" : "middle", textAnchor: "start", fill: a.yAxis.rightAxisTickLabelColor }, z.formattedValue))), !a.yAxis.rightHideAxis && /* @__PURE__ */ E.createElement(Qt, { from: we.axisFromPoint, to: we.axisToPoint, stroke: "#333" }), /* @__PURE__ */ E.createElement(vt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${a.yAxis.rightLabelOffsetSize ? a.yAxis.rightLabelOffsetSize : 0}, ${at}) rotate(-90)`, fontWeight: "bold", fill: a.yAxis.rightAxisLabelColor }, we.label));
    }),
    J && a.topAxis.hasLine && /* @__PURE__ */ E.createElement(
      ZS,
      {
        stroke: "#333",
        left: Number(D.yAxis.size),
        scale: He,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    k !== "Paired Bar" && k !== "Spark Line" && /* @__PURE__ */ E.createElement(
      wc,
      {
        top: D.horizontal && a.visualizationType !== "Forest Plot" ? Number(V) + Number(a.xAxis.axisPadding) : a.visualizationType === "Forest Plot" ? $ + Number(a.xAxis.axisPadding) : $,
        left: a.visualizationType !== "Forest Plot" ? Number(D.yAxis.size) : 0,
        label: a[G].label,
        tickFormat: Gt,
        scale: He,
        stroke: "#333",
        numTicks: Wt("xAxis"),
        tickStroke: "#333",
        tickValues: a.xAxis.manual ? RE(be, He, a.xAxis.type === "date-time" ? Wt("xAxis") : Kt()) : void 0
      },
      (we) => {
        const at = a.visualizationType !== "Forest Plot" ? (we.axisToPoint.x - we.axisFromPoint.x) / 2 : i[0] / 2, tt = (lt) => /\s/.test(lt), z = we.ticks.some((lt) => tt(lt.value)), Te = 8, We = Math.max(...we.ticks.map((lt) => b(lt.formattedValue, `normal ${Sn[a.fontSize]}px sans-serif`))), Me = z ? 180 : 100, Qe = we.ticks.map((lt) => b(lt.formattedValue, `normal ${Sn[a.fontSize]}px sans-serif`)), Ze = Qe.reduce((lt, wt) => lt + wt, Me), mt = (B - Ze) / (we.ticks.length - 1);
        let xt = [0];
        for (let lt = 1; lt < Qe.length; lt++)
          xt[lt] = xt[lt - 1] + Qe[lt - 1] + mt;
        let Ye = !1;
        Qe.forEach((lt, wt) => {
          if (xt[wt] + Qe[wt] > xt[wt + 1]) {
            Ye = !0;
            return;
          }
        });
        const Yt = Ye && a.isResponsiveTicks ? We + Te + 20 : 0;
        Number(a.xAxis.tickRotation) > 0 && Number(a.xAxis.tickRotation), a.dynamicMarginTop = Yt, a.xAxis.tickWidthMax = We;
        let Mt = 40;
        const Pt = /* @__PURE__ */ E.createElement(Je, { className: "bottom-axis", width: i[0] }, we.ticks.map((lt, wt, At) => {
          const Ht = String(lt.value).startsWith("1") || lt.value === 0.1 ? "block" : "none", Ot = Ht === "block" ? 16 : Te, on = { x: lt.to.x, y: Ot }, tn = b(lt.formattedValue, `normal ${Sn[a.fontSize]}px sans-serif`), nn = 100 / At.length;
          a.yAxis.tickRotation = a.isResponsiveTicks && a.orientation === "horizontal" ? 0 : a.yAxis.tickRotation, a.xAxis.tickRotation = a.isResponsiveTicks && a.orientation === "vertical" ? 0 : a.xAxis.tickRotation;
          const Xt = a.isResponsiveTicks && Ye ? -Number(a.xAxis.maxTickRotation) || -90 : -Number(a.runtime.xAxis.tickRotation), mn = tn * Math.sin(Xt * -1 * (Math.PI / 180)) + 25;
          return mn > Mt && (Mt = mn), /* @__PURE__ */ E.createElement(Je, { key: `vx-tick-${lt.value}-${wt}`, className: "vx-axis-tick" }, !a.xAxis.hideTicks && /* @__PURE__ */ E.createElement(Qt, { from: lt.from, to: R === "horizontal" && a.useLogScale ? on : lt.to, stroke: a.xAxis.tickColor, strokeWidth: Ht === "block" && a.useLogScale ? 1.3 : 1 }), !a.xAxis.hideLabel && /* @__PURE__ */ E.createElement(
            vt,
            {
              dy: a.orientation === "horizontal" && a.useLogScale ? 8 : 0,
              display: a.orientation === "horizontal" && a.useLogScale ? Ht : "block",
              x: lt.to.x,
              y: lt.to.y,
              angle: Xt,
              verticalAnchor: Xt < -50 ? "middle" : "start",
              textAnchor: Xt ? "end" : "middle",
              width: Ye && !a.isResponsiveTicks && !Number(a[G].tickRotation) ? nn : void 0,
              fill: a.xAxis.tickLabelColor
            },
            lt.formattedValue
          ));
        }), !a.xAxis.hideAxis && /* @__PURE__ */ E.createElement(Qt, { from: we.axisFromPoint, to: we.axisToPoint, stroke: "#333" }), /* @__PURE__ */ E.createElement(vt, { x: at, y: Mt + 20 + le, textAnchor: "middle", verticalAnchor: "start", fontWeight: "bold", fill: a.xAxis.labelColor }, we.label));
        return re.current && re.current.setAttribute("height", Number(U) + Number(Mt) + (D.xAxis.label ? 50 : 0) + "px"), Pt;
      }
    ),
    k === "Paired Bar" && _n(),
    k === "Deviation Bar" && ((xn = a.series) == null ? void 0 : xn.length) === 1 && /* @__PURE__ */ E.createElement(fE, { animatedChart: oe, xScale: He, yScale: ze, width: B, height: $ }),
    k === "Paired Bar" && /* @__PURE__ */ E.createElement(EE, { originalWidth: C, width: B, height: $ }),
    k === "Scatter Plot" && /* @__PURE__ */ E.createElement(
      dE,
      {
        xScale: He,
        yScale: ze,
        getXAxisData: ve,
        getYAxisData: ce,
        xMax: B,
        yMax: $,
        handleTooltipMouseOver: Le,
        handleTooltipMouseOff: $t,
        handleTooltipClick: ft,
        tooltipData: dt,
        showTooltip: Rt
      }
    ),
    k === "Box Plot" && /* @__PURE__ */ E.createElement(uE, { xScale: He, yScale: ze }),
    (k === "Area Chart" && a.visualizationSubType === "regular" || k === "Combo") && /* @__PURE__ */ E.createElement(nE, { xScale: He, yScale: ze, yMax: $, xMax: B, chartRef: re, width: B, height: $, handleTooltipMouseOver: Le, handleTooltipMouseOff: $t, tooltipData: dt, showTooltip: Rt }),
    (k === "Area Chart" && a.visualizationSubType === "stacked" || k === "Combo") && /* @__PURE__ */ E.createElement(aE, { xScale: He, yScale: ze, yMax: $, xMax: B, chartRef: re, width: B, height: $, handleTooltipMouseOver: Le, handleTooltipMouseOff: $t, tooltipData: dt, showTooltip: Rt }),
    (k === "Bar" || k === "Combo" || _()) && /* @__PURE__ */ E.createElement(
      cE,
      {
        xScale: He,
        yScale: ze,
        seriesScale: Fe,
        xMax: B,
        yMax: $,
        getXAxisData: ve,
        getYAxisData: ce,
        animatedChart: oe,
        visible: oe,
        handleTooltipMouseOver: Le,
        handleTooltipMouseOff: $t,
        handleTooltipClick: ft,
        tooltipData: dt,
        showTooltip: Rt,
        chartRef: re
      }
    ),
    (k === "Line" && !_() || k === "Combo") && /* @__PURE__ */ E.createElement(
      wh,
      {
        xScale: He,
        yScale: ze,
        getXAxisData: ve,
        getYAxisData: ce,
        xMax: B,
        yMax: $,
        seriesStyle: a.series,
        handleTooltipMouseOver: Le,
        handleTooltipMouseOff: $t,
        handleTooltipClick: ft,
        tooltipData: dt,
        showTooltip: Rt,
        chartRef: re
      }
    ),
    (k === "Forecasting" || k === "Combo") && /* @__PURE__ */ E.createElement(
      hE,
      {
        showTooltip: Rt,
        tooltipData: dt,
        xScale: He,
        yScale: ze,
        width: B,
        le: !0,
        height: $,
        xScaleNoPadding: Ue,
        chartRef: re,
        getXValueFromCoordinate: Lt,
        handleTooltipMouseOver: Le,
        handleTooltipMouseOff: $t,
        isBrush: !1
      }
    ),
    a.yAxis.anchors && a.yAxis.anchors.map((we) => /* @__PURE__ */ E.createElement(Qt, { strokeDasharray: v(we.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + a.yAxis.size, y: ze(we.value) }, to: { x: B, y: ze(we.value) }, display: D.horizontal ? "none" : "block" })),
    k === "Forest Plot" && /* @__PURE__ */ E.createElement(
      SE,
      {
        xScale: He,
        yScale: ze,
        seriesScale: Fe,
        width: C,
        height: U,
        getXAxisData: ve,
        getYAxisData: ce,
        animatedChart: oe,
        visible: oe,
        handleTooltipMouseOver: Le,
        handleTooltipMouseOff: $t,
        handleTooltipClick: ft,
        tooltipData: dt,
        showTooltip: Rt,
        chartRef: re,
        config: a
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(a.visualizationType) && !1,
    !["Paired Bar", "Box Plot", "Area Chart", "Scatter Plot", "Deviation Bar", "Forecasting", "Bar"].includes(k) && !_() && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(wh, { xScale: He, yScale: ze, getXAxisData: ve, getYAxisData: ce, xMax: B, yMax: $, seriesStyle: a.series })),
    a.yAxis.anchors && a.yAxis.anchors.map((we, at) => {
      let tt = ze(we.value);
      if (!we.value)
        return;
      const z = R === "horizontal" && k === "Bar" ? a.barHeight / 4 : 0;
      if (tt)
        return (
          // prettier-ignore
          /* @__PURE__ */ E.createElement(
            Qt,
            {
              key: `yAxis-${we.value}--${at}`,
              strokeDasharray: v(we.lineStyle),
              stroke: we.color ? we.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + an, y: tt - z },
              to: { x: C - a.yAxis.rightAxisSize, y: tt - z }
            }
          )
        );
    }),
    a.xAxis.anchors && a.xAxis.anchors.map((we, at) => {
      let tt = m;
      R === "horizontal" && (tt = O);
      let z = En(tt) ? He(l(we.value, !1)) : He(we.value);
      if (z)
        return (
          // prettier-ignore
          /* @__PURE__ */ E.createElement(
            Qt,
            {
              key: `xAxis-${we.value}--${at}`,
              strokeDasharray: v(we.lineStyle),
              stroke: we.color ? we.color : "rgba(0,0,0,1)",
              fill: we.color ? we.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(z) + Number(an), y: 0 },
              to: { x: Number(z) + Number(an), y: $ }
            }
          )
        );
    }),
    a.visualizationType !== "Bar" && a.visualizationType !== "Combo" && /* @__PURE__ */ E.createElement(Vf, { xScale: He, handleTooltipClick: ft, handleTooltipMouseOff: $t, handleTooltipMouseOver: Le, showTooltip: Rt, hideTooltip: cn, tooltipData: dt, yMax: $, width: C }),
    en && Rt && dt && a.visual.verticalHoverLine && /* @__PURE__ */ E.createElement(Je, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ E.createElement(Qt, { from: { x: dt.dataXPosition - 10, y: 0 }, to: { x: dt.dataXPosition - 10, y: $ }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    en && Rt && dt && a.visual.horizontalHoverLine && /* @__PURE__ */ E.createElement(Je, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: a.yAxis.size ? a.yAxis.size : 0 }, /* @__PURE__ */ E.createElement(Qt, { from: { x: 0, y: dt.dataYPosition }, to: { x: B, y: dt.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    a.filters && a.filters.values.length === 0 && t.length === 0 && /* @__PURE__ */ E.createElement(vt, { x: Number(a.yAxis.size) + Number(B / 2), y: U / 2 - a.xAxis.padding / 2, textAnchor: "middle" }, a.chartMessage.noData),
    (a.visualizationType === "Bar" || _()) && a.tooltips.singleSeries && a.visual.horizontalHoverLine && /* @__PURE__ */ E.createElement(Je, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: a.yAxis.size ? a.yAxis.size : 0 }, /* @__PURE__ */ E.createElement(Qt, { from: { x: 0, y: ye.y }, to: { x: B, y: ye.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    (a.visualizationType === "Bar" || _()) && a.tooltips.singleSeries && a.visual.verticalHoverLine && /* @__PURE__ */ E.createElement(Je, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ E.createElement(Qt, { from: { x: ye.x, y: 0 }, to: { x: ye.x, y: $ }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    !1
  ), dt && Object.entries(dt.data).length > 0 && Jt && Rt && dt.dataYPosition && dt.dataXPosition && !a.tooltips.singleSeries && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${a.tooltips.opacity / 100}) !important;`), /* @__PURE__ */ E.createElement("style", null, ".tooltip {max-width:300px} !important; word-wrap: break-word; "), /* @__PURE__ */ E.createElement(Wm, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: jt, top: fn }, /* @__PURE__ */ E.createElement("ul", null, typeof dt == "object" && Object.entries(dt.data).map((we, at) => /* @__PURE__ */ E.createElement(St, { item: we, key: at }))))), j() && /* @__PURE__ */ E.createElement(dy, { id: `cdc-open-viz-tooltip-${D.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${a.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ E.createElement("div", { className: "animation-trigger", ref: Ee })));
}, NE = (e) => {
  var Z;
  const { width: t, height: r } = e, { transformedData: i, config: a, parseDate: l, formatDate: f, seriesHighlight: d, formatNumber: u, colorScale: h, handleChartAriaLabels: y } = se.useContext(bt);
  let v = Number(t);
  const { minValue: b, maxValue: P } = vu(a, i), k = { top: 5, right: 10, bottom: 10, left: 10 }, N = Number(r), R = v - a.runtime.yAxis.size, m = N - k.top - 20, O = (W) => a.runtime.xAxis.type === "date" ? l(W[a.runtime.originalXAxis.dataKey]).getTime() : W[a.runtime.originalXAxis.dataKey], D = (W, U) => W[U];
  let L, _;
  const { max: C, min: V } = a.runtime.yAxis, H = Number(C) >= Number(P), X = Number(V) <= Number(b);
  if (i) {
    let W = Number(V && X ? V : b), U = Number(C && H ? C : Number.MIN_VALUE);
    if (U === Number.MIN_VALUE && (U = P), a.runtime.yAxis.paddingPercent) {
      let $ = (U - W) * a.runtime.yAxis.paddingPercent;
      W -= $, U += $;
    }
    let B = i.map(($) => O($));
    a.runtime.horizontal ? (L = Wn({
      domain: [W, U],
      range: [0, R]
    }), _ = a.runtime.xAxis.type === "date" ? Wn({ domain: [Math.min(...B), Math.max(...B)] }) : Wo({ domain: B, padding: 0.5 }), Wo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, m]
    }), _.rangeRound([0, m])) : (W = W < 0 ? W * 1.11 : W, _ = Wn({
      domain: [W, U],
      range: [m - k.bottom, k.top]
    }), L = Wo({
      domain: B,
      range: [k.left, v - k.right]
    }), Wo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, R]
    }));
  }
  const le = [L.domain()[0], L.domain()[L.domain().length - 1]];
  return /* @__PURE__ */ E.createElement(Cr, { component: "SparkLine" }, /* @__PURE__ */ E.createElement("svg", { role: "img", "aria-label": y(a), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ E.createElement("title", null, `Spark line graphic with the title ${a.title ? a.title : "No Title Found"}`), ((Z = a.runtime.lineSeriesKeys) == null ? void 0 : Z.length) > 0 ? a.runtime.lineSeriesKeys : a.runtime.seriesKeys.map((W, U) => /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(
    Je,
    {
      style: { width: v },
      className: "sparkline-group",
      key: `series-${W}`,
      opacity: a.legend.behavior === "highlight" && d.length > 0 && d.indexOf(W) === -1 ? 0.5 : 1,
      display: a.legend.behavior === "highlight" || d.length === 0 || d.indexOf(W) !== -1 ? "block" : "none"
    },
    i.map((B, $) => /* @__PURE__ */ E.createElement(Je, { key: `series-${W}-point-${$}` }, /* @__PURE__ */ E.createElement(vt, { display: a.labels ? "block" : "none", x: L(O(B)), y: _(D(B, W)), fill: h ? h(a.runtime.seriesLabels ? a.runtime.seriesLabels[W] : W) : "#000", textAnchor: "middle" }, u(B[W])))),
    /* @__PURE__ */ E.createElement(
      Hr,
      {
        curve: su,
        data: i,
        x: (B) => L(O(B)),
        y: (B) => _(D(B, W)),
        stroke: h ? h(a.runtime.seriesLabels ? a.runtime.seriesLabels[W] : W) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${U})`
      }
    ),
    /* @__PURE__ */ E.createElement(OE, { id: `arrow--${U}`, refX: 2, size: 6, markerEnd: `url(#arrow--${U})`, strokeOpacity: 1, fillOpacity: 1, fill: h ? h(a.runtime.seriesLabels ? a.runtime.seriesLabels[W] : W) : "#000" })
  ), /* @__PURE__ */ E.createElement(
    wc,
    {
      top: m + k.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: L,
      tickValues: le,
      tickFormat: (B) => a.xAxis.type === "date" ? f(B) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, FE = se.forwardRef((e, t) => {
  const {
    config: r,
    colorScale: i,
    seriesHighlight: a,
    highlight: l,
    tableData: f,
    highlightReset: d,
    transformedData: u,
    currentViewport: h
  } = se.useContext(bt);
  if (!r.legend)
    return null;
  const y = Zm(r, f, u, i);
  return !["Box Plot", "Pie"].includes(r.visualizationType) && /* @__PURE__ */ React.createElement(Gm, { ref: t, skipId: e.skipId || "legend", config: r, colorScale: i, seriesHighlight: a, highlight: l, highlightReset: d, currentViewport: h, formatLabels: y });
}), zd = {
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
}, Cc = (e) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ se.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), ME = ({ name: e }) => {
  var d, u, h, y, v;
  const { config: t, rawData: r, updateConfig: i } = se.useContext(bt);
  if (t.visualizationType !== "Forest Plot")
    return;
  const a = (b) => {
    b.orientation === "horizontal" && (b.labels = !1), b.table.show === void 0 && (b.table.show = !isDashboard), b.visualizationType === "Combo" && (b.orientation = "vertical");
  }, l = (b = !0) => {
    let P = {};
    return r.forEach((k) => {
      Object.keys(k).forEach((N) => P[N] = !0);
    }), b && Object.keys(P).forEach((k) => {
      (t.series && t.series.filter((N) => N.dataKey === k).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(k)) && delete P[k];
    }), Object.keys(P);
  }, f = (b, P, k, N) => {
    if (b === "boxplot" && P === "legend") {
      i({
        ...t,
        [b]: {
          ...t[b],
          [P]: {
            ...t.boxplot[P],
            [k]: N
          }
        }
      });
      return;
    }
    if (b === "boxplot" && P === "labels") {
      i({
        ...t,
        [b]: {
          ...t[b],
          [P]: {
            ...t.boxplot[P],
            [k]: N
          }
        }
      });
      return;
    }
    if (b === "forestPlot" && P) {
      let D = {
        ...t,
        [b]: {
          ...t[b],
          [P]: {
            ...t.forestPlot[P],
            [k]: N
          }
        }
      };
      i(D);
      return;
    }
    if (b === "columns" && P !== "" && k !== "") {
      i({
        ...t,
        [b]: {
          ...t[b],
          [P]: {
            ...t[b][P],
            [k]: N
          }
        }
      });
      return;
    }
    if (b === null && P === null) {
      let D = { ...t, [k]: N };
      a(D), i(D);
      return;
    }
    const R = Array.isArray(t[b]);
    let m = R ? [...t[b], N] : { ...t[b], [k]: N };
    P !== null && (R ? (m = [...t[b]], m[P] = { ...m[P], [k]: N }) : typeof N == "string" ? m[P] = N : m = { ...t[b], [P]: { ...t[b][P], [k]: N } });
    let O = { ...t, [b]: m };
    a(O), i(O);
  };
  return /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ React.createElement(Cc, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement(
    Et,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: f,
      options: l(!1),
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ React.createElement(
    Et,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: b.target.value
          }
        }), b.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ React.createElement(qe, { type: "text", value: ((d = t.forestPlot) == null ? void 0 : d.title) || "", updateField: f, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h4", null, "Column Settings"), /* @__PURE__ */ React.createElement(
    Et,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            estimateField: b.target.value
          }
        }), b.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ React.createElement(
    Et,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            shape: b.target.value
          }
        }), b.target.value = "";
      },
      options: ["text", "circle", "square"]
    }
  ), /* @__PURE__ */ React.createElement(
    Et,
    {
      value: t.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: t.forestPlot.lower || "Select",
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            lower: b.target.value
          }
        }), b.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ React.createElement(
    Et,
    {
      value: t.forestPlot.upper,
      label: "Upper CI Column",
      initial: t.forestPlot.upper || "Select",
      required: !0,
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            upper: b.target.value
          }
        }), b.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Pooled Result Column", /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: t.forestPlot.pooledResult.column || "",
      label: "Pooled Result Row",
      onChange: (b) => {
        i({
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
  ))), /* @__PURE__ */ React.createElement(nt, { value: ((h = (u = t.forestPlot) == null ? void 0 : u.lineOfNoEffect) == null ? void 0 : h.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: f }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h4", null, "Width Settings"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffset || 0,
      onChange: (b) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffset: b.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left Mobile(%)"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffsetMobile || 0,
      onChange: (b) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffsetMobile: b.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right (%)"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.rightWidthOffset || 0,
      onChange: (b) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffset: b.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right Mobile(%)"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.rightWidthOffsetMobile || 0,
      onChange: (b) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: b.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement(qe, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: f, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ React.createElement(qe, { type: "text", value: ((y = t.forestPlot) == null ? void 0 : y.leftLabel) || "", updateField: f, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ React.createElement(qe, { type: "text", value: ((v = t.forestPlot) == null ? void 0 : v.rightLabel) || "", updateField: f, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(
    Et,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && i({
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
  ), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ React.createElement(
    "input",
    {
      min: 3,
      max: 6,
      value: t.forestPlot.radius.min || 3,
      onChange: (b) => {
        i({
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
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Radius Maximum Size"), /* @__PURE__ */ React.createElement(
    "input",
    {
      min: 7,
      max: 10,
      value: t.forestPlot.radius.max,
      onChange: (b) => {
        i({
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
}, Qo = E.createContext({}), zE = (e) => {
  const { updateConfig: t, config: r, rawData: i } = se.useContext(bt), { getColumns: a, selectComponent: l } = e, f = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], d = (u, h, y) => {
    let v = [...r.series];
    if (v[u][y] = h, y === "type" && h === "Bar" && (v[u].axis = "Left"), v[u].type === "Forecasting") {
      let b = Array.from(new Set(i.map((k) => k[v[u].dataKey]))), P = [];
      b.forEach((k) => {
        P.push({ key: k });
      }), v[u].stages = P, v[u].stageColumn = v[u].dataKey;
    }
    t({ ...r, series: v });
  };
  return /* @__PURE__ */ E.createElement(Qo.Provider, { value: { updateSeries: d, supportedRightAxisTypes: f, getColumns: a, selectComponent: l } }, e.children);
}, IE = (e) => {
  const { config: t, updateConfig: r } = se.useContext(bt), { series: i, index: a } = e;
  if (!(() => {
    let u = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((y) => y.includes(i.type)) && (u = !0), u;
  })())
    return;
  const f = (u, h) => {
    let y = [...t.series];
    y[u].lineType = h, r({ ...t, series: y });
  };
  let d = [];
  return Object.keys(Pc).map((u) => d.push(Pc[u])), /* @__PURE__ */ E.createElement(
    za,
    {
      initial: "Select an option",
      value: i.lineType ? i.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (u) => {
        f(a, u.target.value);
      },
      options: d
    }
  );
}, $E = (e) => {
  const { config: t } = se.useContext(bt), { updateSeries: r } = se.useContext(Qo), { index: i, series: a } = e, l = () => {
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
    return /* @__PURE__ */ E.createElement(
      za,
      {
        initial: "Select an option",
        value: a.type,
        label: "Series Type",
        onChange: (f) => {
          r(i, f.target.value, "type");
        },
        options: l()
      }
    );
}, BE = (e) => {
  const { config: t, updateConfig: r, rawData: i } = se.useContext(bt), { updateSeries: a, getColumns: l } = se.useContext(Qo), { index: f, series: d } = e;
  return /* @__PURE__ */ E.createElement(
    za,
    {
      initial: "Select an option",
      value: d.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (u) => {
        let h = [], y = new Set(i == null ? void 0 : i.map((b) => b[u.target.value]));
        y = Array.from(y), y = y.filter((b) => b !== void 0), y.forEach((b) => h.push({ key: b }));
        const v = [...t.series];
        v[f] = { ...v[f], stages: h, stageColumn: u.target.value }, r({
          ...t,
          series: v
        });
      },
      options: l(!1)
    }
  );
}, HE = (e) => {
  const { config: t, rawData: r } = se.useContext(bt), { updateSeries: i } = se.useContext(Qo), { index: a, series: l } = e;
  if (l.type !== "Forecasting" || !r || !l.stageColumn)
    return;
  let f = new Set(r.map((d) => d[l.stageColumn]));
  return f = Array.from(f), f = f.filter((d) => d !== void 0), /* @__PURE__ */ E.createElement(
    za,
    {
      initial: "Select an option",
      value: l.stageItem,
      label: "Forecasting Item Column",
      onChange: (d) => {
        i(a, d.target.value, "stageItem");
      },
      options: f
    }
  );
}, WE = (e) => {
  const { config: t } = se.useContext(bt), { updateSeries: r, supportedRightAxisTypes: i } = se.useContext(Qo), { index: a, series: l } = e;
  if (!(t.visualizationType !== "Combo" || !l) && i.includes(l.type))
    return /* @__PURE__ */ E.createElement(
      za,
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
}, VE = (e) => {
  var l;
  const { config: t, updateConfig: r } = se.useContext(bt), { index: i, series: a } = e;
  if (a.type === "Forecasting" && a)
    return (l = a == null ? void 0 : a.stages) == null ? void 0 : l.map((f, d) => {
      var u, h, y, v;
      return /* @__PURE__ */ E.createElement(
        za,
        {
          key: `${f}--${d}`,
          initial: "Select an option",
          value: (h = (u = t.series) == null ? void 0 : u[i].stages) != null && h[d].color ? (v = (y = t.series) == null ? void 0 : y[i].stages) == null ? void 0 : v[d].color : "Select",
          label: `${f.key} Series Color`,
          onChange: (b) => {
            const P = [...t.series], k = P[i].stages;
            k[d].color = b.target.value, P[i] = { ...P[i], stages: k }, r({
              ...t,
              series: P
            });
          },
          options: Object.keys(Lc)
        }
      );
    });
}, jE = (e) => {
  var f;
  const { config: t, updateConfig: r } = se.useContext(bt), { series: i, index: a } = e, { getColumns: l } = se.useContext(Qo);
  if (i.type === "Forecasting")
    return /* @__PURE__ */ E.createElement("div", { className: "edit-block" }, /* @__PURE__ */ E.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ E.createElement("fieldset", null, /* @__PURE__ */ E.createElement(Ai, { allowZeroExpanded: !0 }, (f = i == null ? void 0 : i.confidenceIntervals) == null ? void 0 : f.map((d, u) => {
      const h = d.showInTooltip ? d.showInTooltip : !1, y = (v, b, P) => {
        v.preventDefault();
        let k = [...t.series];
        k[b].confidenceIntervals[P].showInTooltip = !h, r({
          ...t,
          series: k
        });
      };
      return /* @__PURE__ */ E.createElement(Cn, { className: "series-item series-item--chart", key: `${u}` }, /* @__PURE__ */ E.createElement(An, { className: "series-item__title" }, /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Ln, { className: "accordion__button accordion__button" }, "Group ", u + 1, /* @__PURE__ */ E.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (v) => {
            v.preventDefault();
            const b = [...t.series[a].confidenceIntervals];
            b.splice(u, 1);
            const P = [...t.series];
            P[a] = { ...P[a], confidenceIntervals: [...b] }, r({
              ...t,
              series: P
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ E.createElement(Pn, null, /* @__PURE__ */ E.createElement("div", { className: "input-group" }, /* @__PURE__ */ E.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ E.createElement("div", { className: "cove-input__checkbox--small", onClick: (v) => y(v, a, u) }, /* @__PURE__ */ E.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, h && /* @__PURE__ */ E.createElement(Ih, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ E.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: h || !1, readOnly: !0 }))), /* @__PURE__ */ E.createElement(
        za,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[u].low ? t.series[a].confidenceIntervals[u].low : "Select",
          label: "Low Confidence Interval",
          onChange: (v) => {
            const b = [...t.series[a].confidenceIntervals];
            b[u].low = v.target.value;
            const P = [...t.series];
            P[a] = { ...P[a], confidenceIntervals: b }, r({
              ...t,
              series: P
            });
          },
          options: l()
        }
      ), /* @__PURE__ */ E.createElement(
        za,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[u].high ? t.series[a].confidenceIntervals[u].high : "Select",
          label: "High Confidence Interval",
          onChange: (v) => {
            const b = [...t.series[a].confidenceIntervals];
            b[u].high = v.target.value;
            const P = [...t.series];
            P[a] = { ...P[a], confidenceIntervals: b }, r({
              ...t,
              series: P
            });
          },
          options: l()
        }
      )));
    })), /* @__PURE__ */ E.createElement(
      "button",
      {
        className: "btn full-width",
        onClick: (d) => {
          d.preventDefault();
          let u = null;
          t.series[a].confidenceIntervals ? u = [...t.series[a].confidenceIntervals] : u = [];
          const h = [...t.series];
          h[a] = { ...h[a], confidenceIntervals: [...u, { high: "", low: "" }] }, r({
            ...t,
            series: h
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, UE = (e) => {
  const { series: t, index: r } = e, { config: i, updateConfig: a } = se.useContext(bt);
  if (!["Line", "Combo", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (d, u, h, y) => {
    let v = [...i.series], b = { ...i.runtime.seriesLabels };
    v[d].weight = u && Math.max(Number(h), Math.min(Number(y), Number(u))), b[v[d].dataKey] = v[d].weight ? v[d].weight : v[d].dataKey;
    const P = {
      ...i,
      series: v,
      runtime: {
        ...i.runtime,
        seriesLabels: b
      }
    };
    a(P);
  };
  return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("label", { htmlFor: "series-weight" }, "Line Weight"), /* @__PURE__ */ E.createElement(
    "input",
    {
      type: "number",
      key: `series-weight-${r}`,
      value: t.weight ? t.weight : "",
      min: "1",
      max: "9",
      onChange: (d) => {
        f(r, d.target.value, d.target.min, d.target.max);
      }
    }
  ));
}, KE = (e) => {
  const { series: t, index: r } = e, { config: i, updateConfig: a } = se.useContext(bt);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation Bar", "Paired Bar", "Scatter Plot", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (d, u) => {
    let h = [...i.series], y = { ...i.runtime.seriesLabels };
    h[d].name = u, y[h[d].dataKey] = h[d].name ? h[d].name : h[d].dataKey;
    let v = {
      ...i,
      series: h,
      runtime: {
        ...i.runtime,
        seriesLabels: y
      }
    };
    a(v);
  };
  return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ E.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${r}`,
      value: t.name ? t.name : "",
      onChange: (d) => {
        f(r, d.target.value);
      }
    }
  ));
}, YE = (e) => {
  const { series: t, index: r } = e, { config: i, updateConfig: a } = se.useContext(bt);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(i.visualizationType))
    return;
  const l = (f) => {
    let d = [...i.series];
    d[f].tooltip && d[f].tooltip, d[f].tooltip = !d[f].tooltip, a({
      ...i,
      series: d
    });
  };
  return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("div", { className: "input-group" }, /* @__PURE__ */ E.createElement("label", { htmlFor: `series-tooltip--${r}` }, "Show In Tooltip"), /* @__PURE__ */ E.createElement("div", { className: "cove-input__checkbox--small", onClick: (f) => l(r) }, /* @__PURE__ */ E.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ E.createElement(Ih, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ E.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${r}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, XE = (e) => {
  const { config: t, updateConfig: r } = se.useContext(bt), { series: i, index: a } = e, l = (d) => {
    let u = [...t.series], h = -1;
    for (let y = 0; y < u.length; y++)
      if (u[y].dataKey === d) {
        h = y;
        break;
      }
    if (h !== -1) {
      u.splice(h, 1);
      let y = { ...t, series: u };
      u.length === 0 && delete y.series, r(y);
    }
    t.visualizationType === "Paired Bar" && r({
      ...t,
      series: []
    });
  }, f = (d, u, h) => {
    d.preventDefault(), l(u.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ E.createElement("button", { className: "series-list__remove", onClick: (d) => f(d, i) }, "Remove");
}, yy = (e) => {
  const { config: t } = se.useContext(bt), { series: r, getItemStyle: i, sortableItemStyles: a, chartsWithOptions: l, index: f } = e;
  return /* @__PURE__ */ E.createElement(by, { key: r.dataKey, draggableId: `draggableFilter-${r.dataKey}`, index: f }, (d, u) => /* @__PURE__ */ E.createElement("div", { key: f, className: u.isDragging ? "currently-dragging" : "", style: i(u.isDragging, d.draggableProps.style, a), ref: d.innerRef, ...d.draggableProps, ...d.dragHandleProps }, /* @__PURE__ */ E.createElement(Ai, { allowZeroExpanded: !0 }, /* @__PURE__ */ E.createElement(Cn, { className: "series-item series-item--chart" }, /* @__PURE__ */ E.createElement(An, { className: "series-item__title" }, /* @__PURE__ */ E.createElement(Ln, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ E.createElement(it, { display: "move", size: 15, style: { cursor: "default" } }), r.dataKey, /* @__PURE__ */ E.createElement($r.Button.Remove, { series: r, index: f }))), l.includes(t.visualizationType) && /* @__PURE__ */ E.createElement(Pn, null, /* @__PURE__ */ E.createElement($r.Input.Name, { series: r, index: f }), /* @__PURE__ */ E.createElement($r.Input.Weight, { series: r, index: f }), /* @__PURE__ */ E.createElement($r.Dropdown.SeriesType, { series: r, index: f }), /* @__PURE__ */ E.createElement($r.Dropdown.AxisPosition, { series: r, index: f }), /* @__PURE__ */ E.createElement($r.Dropdown.LineType, { series: r, index: f }), /* @__PURE__ */ E.createElement($r.Dropdown.ForecastingColor, { series: r, index: f }), /* @__PURE__ */ E.createElement($r.Dropdown.ConfidenceInterval, { series: r, index: f }), /* @__PURE__ */ E.createElement($r.Checkbox.DisplayInTooltip, { series: r, index: f }))))));
}, qE = (e) => {
  const { series: t, getItemStyle: r, sortableItemStyles: i, chartsWithOptions: a } = e;
  return t.map((l, f) => /* @__PURE__ */ E.createElement(yy, { getItemStyle: r, sortableItemStyles: i, chartsWithOptions: a, series: l, index: f, key: `series-list-${f}` }));
}, $r = {
  Wrapper: zE,
  Dropdown: {
    SeriesType: $E,
    AxisPosition: WE,
    ConfidenceInterval: jE,
    LineType: IE,
    ForecastingStage: BE,
    ForecastingColumn: HE,
    ForecastingColor: VE
  },
  Input: {
    Name: KE,
    Weight: UE
  },
  Checkbox: {
    DisplayInTooltip: YE
  },
  Button: {
    Remove: XE
  },
  Item: yy,
  List: qE
}, GE = se.memo(({ config: e, updateConfig: t }) => {
  let r = (u, h, y) => {
    let v = [];
    e.regions && (v = [...e.regions]), v[y][u] = h, t({ ...e, regions: v });
  }, i = (u, h, y, v, b) => r(y, v, b), a = (u) => {
    let h = [];
    e.regions && (h = [...e.regions]), h.splice(u, 1), t({ ...e, regions: h });
  }, l = () => {
    let u = [];
    e.regions && (u = [...e.regions]), u.push({}), t({ ...e, regions: u });
  };
  const f = ["Fixed", "Previous Days"], d = ["Last Date", "Fixed"];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, e.regions && e.regions.map(({ label: u, color: h, from: y, to: v, background: b, range: P = "Custom" }, k) => {
    var N;
    return /* @__PURE__ */ React.createElement("div", { className: "edit-block", key: `region-${k}` }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (R) => {
          R.preventDefault(), a(k);
        }
      },
      "Remove"
    ), /* @__PURE__ */ React.createElement(qe, { value: u, label: "Region Label", fieldName: "label", i: k, updateField: i }), /* @__PURE__ */ React.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ React.createElement(qe, { value: h, label: "Text Color", fieldName: "color", updateField: (R, m, O, D) => r(O, D, k) }), /* @__PURE__ */ React.createElement(qe, { value: b, label: "Background", fieldName: "background", updateField: (R, m, O, D) => r(O, D, k) })), /* @__PURE__ */ React.createElement(
      Et,
      {
        value: e.regions[k].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (R) => {
          if (R.target.value !== "" && R.target.value !== "Select") {
            const m = [...e.regions];
            m[k].fromType = R.target.value, t({
              ...e,
              regions: m
            });
          }
          R.target.value = "";
        },
        options: f
      }
    ), (e.regions[k].fromType === "Fixed" || e.regions[k].fromType === "Previous Days" || !e.regions[k].fromType) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      qe,
      {
        value: y,
        label: e.regions[k].fromType === "Fixed" || !((N = e.regions[k]) != null && N.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (R, m, O, D) => r(O, D, k),
        tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
      }
    )), /* @__PURE__ */ React.createElement(
      Et,
      {
        value: e.regions[k].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (R) => {
          if (R.target.value !== "" && R.target.value !== "Select") {
            const m = [...e.regions];
            m[k].toType = R.target.value, t({
              ...e,
              regions: m
            });
          }
          R.target.value = "";
        },
        options: d
      }
    ), (e.regions[k].toType === "Fixed" || !e.regions[k].toType) && /* @__PURE__ */ React.createElement(qe, { value: v, label: "To Value", fieldName: "to", updateField: (R, m, O, D) => r(O, D, k) }));
  }), !e.regions && /* @__PURE__ */ React.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ React.createElement(
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
}), ZE = ({ name: e }) => {
  const { visSupportsRegions: t } = ys(), { config: r, updateConfig: i } = se.useContext(bt);
  return t() ? /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, e)), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement(GE, { config: r, updateConfig: i }))) : null;
}, Uf = se.createContext(null), Kf = () => {
  const e = se.useContext(Uf);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, QE = (e) => {
  const { config: t } = se.useContext(bt), { updateField: r } = Kf(), { enabledChartTypes: i, visHasNumbersOnBars: a, visHasaAdditionalLabelsOnBars: l, visHasLabelOnData: f, visSupportsChartHeight: d, visSupportsSuperTitle: u, visSupportsFootnotes: h } = ys(), { visualizationType: y, visualizationSubType: v, barStyle: b } = t, P = () => (y === "Bar" || y === "Deviation Bar") && v !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ React.createElement(Cn, null, " ", /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, "General")), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement(Et, { value: y, fieldName: "visualizationType", label: "Chart Type", updateField: r, options: i }), d() && t.orientation === "vertical" && /* @__PURE__ */ React.createElement(
    qe,
    {
      type: "number",
      value: t.heights.vertical,
      section: "heights",
      fieldName: "vertical",
      label: "Chart Height",
      updateField: r
    }
  ), (y === "Bar" || y === "Combo" || y === "Area Chart") && /* @__PURE__ */ React.createElement(Et, { value: v || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: r, options: ["regular", "stacked"] }), y === "Area Chart" && v === "stacked" && /* @__PURE__ */ React.createElement(Et, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: r, options: Object.keys(Pc) }), y === "Bar" && /* @__PURE__ */ React.createElement(Et, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: r, options: ["vertical", "horizontal"] }), y === "Deviation Bar" && /* @__PURE__ */ React.createElement(Et, { label: "Orientation", options: ["horizontal"] }), (y === "Bar" || y === "Deviation Bar") && /* @__PURE__ */ React.createElement(
    Et,
    {
      value: t.isLollipopChart ? "lollipop" : b || "flat",
      fieldName: "barStyle",
      label: "bar style",
      updateField: r,
      options: P(),
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Consider using the 'Flat' bar style when presenting data that includes '0' values.")))
    }
  ), (y === "Bar" || y === "Deviation Bar") && b === "rounded" && /* @__PURE__ */ React.createElement(Et, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: r, options: ["top", "full"] }), (y === "Bar" || y === "Deviation Bar") && b === "rounded" && /* @__PURE__ */ React.createElement(Et, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: r, options: ["standard", "shallow", "finger"] }), y === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ React.createElement(Et, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: r, options: ["Below Bar", "On Date/Category Axis"] }), a() ? /* @__PURE__ */ React.createElement(nt, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: r }) : f() && /* @__PURE__ */ React.createElement(
    nt,
    {
      value: t.labels,
      fieldName: "labels",
      label: "Display label on data",
      updateField: r,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, 'Selecting this option will not hide the display of "zero value", "suppressed data", or "missing data" indicators on the chart (if applicable).')))
    }
  ), l() && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    nt,
    {
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, ' Selecting this option will display "N/A" on the Date/Category Axis as an indication of missing or undefined data values.'))),
      value: t.general.showMissingDataLabel,
      section: "general",
      fieldName: "showMissingDataLabel",
      label: 'Display "Missing Data" Label',
      updateField: r
    }
  ), /* @__PURE__ */ React.createElement(
    nt,
    {
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, ' Selecting this option will display a thin line slightly above the Date/Category Axis to indicate "zero value" where zero values are indicated in the Data Series.'))),
      value: t.general.showZeroValueDataLabel,
      section: "general",
      fieldName: "showZeroValueDataLabel",
      label: 'Display "Zero Value Data" Label',
      updateField: r
    }
  ), /* @__PURE__ */ React.createElement(
    nt,
    {
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, 'Selecting this option will display "suppressed data symbol" on the Date/Category Axis where suppressed data values are indicated in the Data Series, unless a different symbol was chosen from the data series (e.g., suppression symbol) menu.'))),
      value: t.general.showSuppressedSymbol,
      section: "general",
      fieldName: "showSuppressedSymbol",
      label: 'Display "suppressed data" label',
      updateField: r
    }
  )), y === "Pie" && /* @__PURE__ */ React.createElement(Et, { fieldName: "pieType", label: "Pie Chart Type", updateField: r, options: ["Regular", "Donut"] }), y === "Line" && /* @__PURE__ */ React.createElement(
    nt,
    {
      value: t.allowLineToBarGraph,
      fieldName: "allowLineToBarGraph",
      label: "Convert to Bar Graph",
      updateField: r,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Switch to bar graph when less than 3 data points available.")))
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: r,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ React.createElement(nt, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: r }), u() && /* @__PURE__ */ React.createElement(
    qe,
    {
      value: t.superTitle,
      updateField: r,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      type: "textarea",
      value: t.introText,
      updateField: r,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: r,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), h() && /* @__PURE__ */ React.createElement(
    qe,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: r,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Consider adding footnotes when displaying 'suppressed,' 'no data,' and 'zero values' to ensure accurate interpretation of the data.")))
    }
  )));
}, JE = (e) => {
  const { config: t } = se.useContext(bt), { boxplot: r } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: i } = Kf();
  return /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, e.name)), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ React.createElement(
    qe,
    {
      type: "text",
      value: r.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: i,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      type: "text",
      value: r.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: i,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      type: "text",
      value: r.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: i,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      type: "text",
      value: r.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: i,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      type: "text",
      value: r.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: i,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ React.createElement(qe, { type: "text", value: r.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: i }), /* @__PURE__ */ React.createElement(qe, { type: "text", value: r.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: i }), /* @__PURE__ */ React.createElement(qe, { type: "text", value: r.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: i }), /* @__PURE__ */ React.createElement(qe, { type: "text", value: r.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: i }), /* @__PURE__ */ React.createElement(qe, { type: "text", value: r.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: i })));
}, ek = (e, t) => {
  let r = [], i = [], a = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    r = Object.keys(Ac).filter((f) => l ? f.endsWith("reverse") : !f.endsWith("reverse"));
  } else {
    const l = [], f = [];
    for (const d in rr) {
      const u = d.startsWith("sequential"), h = d.startsWith("qualitative"), y = d.endsWith("reverse");
      u && (!e.isPaletteReversed && !y || e.isPaletteReversed && y) && l.push(d), h && (!e.isPaletteReversed && !y || e.isPaletteReversed && y) && f.push(d);
    }
    i = l, a = f;
  }
  return se.useEffect(() => {
    let l = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: l } });
  }, [e.twoColor.isPaletteReversed]), se.useEffect(() => {
    let l = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (l = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (l = e.palette.slice(0, -7)), t({ ...e, palette: l });
  }, [e.isPaletteReversed]), { twoColorPalettes: r, sequential: i, nonSequential: a };
}, tk = (e) => {
  var V;
  const { config: t, updateConfig: r, colorPalettes: i, twoColorPalette: a } = se.useContext(bt), { visual: l } = t, { setLollipopShape: f, updateField: d } = Kf(), { visHasBarBorders: u, visCanAnimate: h, visSupportsNonSequentialPallete: y, headerColors: v, visSupportsTooltipOpacity: b, visSupportsTooltipLines: P, visSupportsBarSpace: k, visSupportsBarThickness: N, visHasDataCutoff: R, visSupportsSequentialPallete: m, visSupportsReverseColorPalette: O } = ys(), { twoColorPalettes: D, sequential: L, nonSequential: _ } = ek(t, r), C = (H, X) => {
    if (console.log("value", X), H === "storyNodeFontColor") {
      r({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: X
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
            default: X
          }
        }
      });
  };
  return /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, "Visual")), /* @__PURE__ */ React.createElement(Pn, null, t.isLollipopChart && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("fieldset", { className: "header" }, /* @__PURE__ */ React.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ React.createElement(
    "div",
    {
      onChange: (H) => {
        f(H.target.value);
      }
    },
    /* @__PURE__ */ React.createElement("label", { className: "radio-label" }, /* @__PURE__ */ React.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ React.createElement("label", { className: "radio-label" }, /* @__PURE__ */ React.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ React.createElement(Et, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: d, options: ["regular", "two-tone"] }), /* @__PURE__ */ React.createElement(Et, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: d, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ React.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ React.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ React.createElement(Et, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: d, options: ["true", "false"] }), /* @__PURE__ */ React.createElement(nt, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: d }), /* @__PURE__ */ React.createElement(nt, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: d })), /* @__PURE__ */ React.createElement(Et, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: d, options: ["small", "medium", "large"] }), u() && /* @__PURE__ */ React.createElement(Et, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: d, options: ["true", "false"] }), h() && /* @__PURE__ */ React.createElement(nt, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: d }), (((V = t.series) == null ? void 0 : V.some((H) => H.type === "Line" || H.type === "dashed-lg" || H.type === "dashed-sm" || H.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Et, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: d, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ React.createElement(Et, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: d, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ React.createElement("label", { className: "header" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ React.createElement("ul", { className: "color-palette" }, v.map((H) => /* @__PURE__ */ React.createElement(
    "button",
    {
      title: H,
      key: H,
      onClick: (X) => {
        X.preventDefault(), r({ ...t, theme: H });
      },
      className: t.theme === H ? "selected " + H : H
    }
  )))), (y() || y()) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label" }, "Chart Color Palette")), O() && /* @__PURE__ */ React.createElement(np, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: d, value: t.isPaletteReversed }), m() && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "Sequential"), /* @__PURE__ */ React.createElement("ul", { className: "color-palette" }, L.map((H) => {
    const X = {
      backgroundColor: i[H][2]
    }, le = {
      backgroundColor: i[H][3]
    }, Z = {
      backgroundColor: i[H][5]
    };
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (W) => {
          W.preventDefault(), r({ ...t, palette: H });
        },
        className: t.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ React.createElement("span", { style: X }),
      /* @__PURE__ */ React.createElement("span", { style: le }),
      /* @__PURE__ */ React.createElement("span", { style: Z })
    );
  }))), y() && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ React.createElement("ul", { className: "color-palette" }, _.map((H) => {
    const X = {
      backgroundColor: i[H][2]
    }, le = {
      backgroundColor: i[H][4]
    }, Z = {
      backgroundColor: i[H][6]
    };
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (W) => {
          W.preventDefault(), r({ ...t, palette: H });
        },
        className: t.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ React.createElement("span", { style: X }),
      /* @__PURE__ */ React.createElement("span", { style: le }),
      /* @__PURE__ */ React.createElement("span", { style: Z })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ React.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (H) => C("nodeColor", H.target.value) }), /* @__PURE__ */ React.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ React.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ React.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (H) => C("storyNodeFontColor", H.target.value) }), /* @__PURE__ */ React.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ React.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ React.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (H) => C("linkColor", H.target.value) }), /* @__PURE__ */ React.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(np, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: d, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ React.createElement("ul", { className: "color-palette" }, D.map((H) => {
    const X = {
      backgroundColor: a[H][0]
    }, le = {
      backgroundColor: a[H][1]
    };
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (Z) => {
          Z.preventDefault(), r({ ...t, twoColor: { ...t.twoColor, palette: H } });
        },
        className: t.twoColor.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ React.createElement("span", { className: "two-color", style: X }),
      /* @__PURE__ */ React.createElement("span", { className: "two-color", style: le })
    );
  }))), R() && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    qe,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: d,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), N() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ React.createElement(qe, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: d, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ React.createElement(qe, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: d }), k() && /* @__PURE__ */ React.createElement(qe, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: d, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ React.createElement(nt, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: d }), t.visualizationType === "Spark Line" && /* @__PURE__ */ React.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ React.createElement(nt, { value: l == null ? void 0 : l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: d }), /* @__PURE__ */ React.createElement(nt, { value: l == null ? void 0 : l.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: d }), /* @__PURE__ */ React.createElement(nt, { value: l == null ? void 0 : l.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: d }), /* @__PURE__ */ React.createElement(nt, { value: l == null ? void 0 : l.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: d }), /* @__PURE__ */ React.createElement(nt, { value: l == null ? void 0 : l.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: d })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ React.createElement(nt, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: d }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ React.createElement(nt, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: d }), P() && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(nt, { value: l.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: d }), /* @__PURE__ */ React.createElement(nt, { value: l.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: d })), b() && /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ React.createElement(
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
  )), t.visualizationType === "Bar" && /* @__PURE__ */ React.createElement(nt, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: d }), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ React.createElement(
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
}, nk = () => {
  var d, u;
  const { config: e, updateConfig: t } = se.useContext(bt), r = (d = e.data) == null ? void 0 : d[0], { updateField: i } = se.useContext(Uf);
  if (e.visualizationType !== "Sankey")
    return;
  const a = (h, y, v) => {
    let b = [];
    r != null && r.storyNodeText && (b = [...r == null ? void 0 : r.storyNodeText]), b[v][h] = y, t({
      ...e,
      sankey: {
        ...e.sankey,
        data: {
          ...e.sankey.data,
          storyNodeText: b
        }
      }
    });
  }, l = () => {
    const h = r;
    h.storyNodeText.push({
      StoryNode: "",
      segmentTextBefore: "",
      segmentTextAfter: ""
    }), t({
      ...e,
      sankey: {
        ...e.sankey,
        data: [{ ...h }]
      }
    });
  }, f = (h) => {
    const y = r;
    y.storyNodeText.splice(h, 1), t({ ...e, sankey: { ...e.sankey, data: { ...y } } });
  };
  return /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, "Sankey Settings")), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement("p", null, "Node stories can provide additional details to support public health messaging. COVE can display a maximum of 3 node stories."), (r == null ? void 0 : r.storyNodeText) && (r == null ? void 0 : r.storyNodeText.map(({ StoryNode: h, segmentTextBefore: y, segmentTextAfter: v }, b) => /* @__PURE__ */ React.createElement("div", { key: b, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ React.createElement("label", null, "Story Node Text", /* @__PURE__ */ React.createElement("input", { type: "text", value: h, fieldName: "StoryNode", label: "StoryNode", onChange: (P) => a("StoryNode", P.target.value, b) })), /* @__PURE__ */ React.createElement("label", null, "Story Text Before", /* @__PURE__ */ React.createElement("input", { type: "text", value: y, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (P) => a("segmentTextBefore", P.target.value, b) })), /* @__PURE__ */ React.createElement("label", null, "Story Text After", /* @__PURE__ */ React.createElement("input", { type: "text", value: v, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (P) => a("segmentTextAfter", P.target.value, b) })), /* @__PURE__ */ React.createElement(ls, { onClick: (P) => f(b), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), ((u = r == null ? void 0 : r.storyNodeText) == null ? void 0 : u.length) < 3 && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (h) => {
        h.preventDefault(), l();
      }
    },
    "Add StoryNode"
  ), /* @__PURE__ */ React.createElement(nt, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: i })));
}, rk = (e) => {
  var h;
  const { updateConfig: t, config: r, unfilteredData: i, dimensions: a } = se.useContext(bt), l = (y = !0) => {
    const v = {};
    return i.forEach((b) => {
      Object.keys(b).forEach((P) => v[P] = !0);
    }), y && Object.keys(v).forEach((b) => {
      (r.series && r.series.filter((P) => P.dataKey === b).length > 0 || r.confidenceKeys && Object.keys(r.confidenceKeys).includes(b)) && delete v[b];
    }), Object.keys(v);
  }, f = (y, v, b) => {
    const P = [...r == null ? void 0 : r.annotations];
    P[b][v] = y, P[b].savedDimensions = [a[0], a[1]], t({
      ...r,
      annotations: P
    });
  }, d = () => {
    var k, N, R;
    const y = (k = document.querySelector(".chart-container > div > svg")) == null ? void 0 : k.getBoundingClientRect(), v = [y.width, y.height], b = {
      text: "New Annotation",
      snapToNearestPoint: !1,
      fontSize: 16,
      bezier: 10,
      show: {
        desktop: !0,
        tablet: !0,
        mobile: !0
      },
      markerType: "arrow",
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
      x: (Number(v == null ? void 0 : v[0]) + 350) / 2,
      y: Number((v == null ? void 0 : v[1]) / 2),
      xKey: r.xAxis.type === "date" ? new Date((R = (N = r == null ? void 0 : r.data) == null ? void 0 : N[0]) == null ? void 0 : R[r.xAxis.dataKey]).getTime() : r.xAxis.type === "categorical" ? "1/15/2016" : "",
      yKey: "",
      dx: 0,
      dy: 0,
      opacity: "100",
      savedDimensions: [a[0] * 0.73, a[1]],
      connectionType: "line"
    }, P = Array.isArray(r.annotations) ? r.annotations : [];
    t({
      ...r,
      annotations: [...P, b]
    });
  }, u = (y) => {
    const v = r.annotations.filter((b, P) => P !== y);
    t({
      ...r,
      annotations: v
    });
  };
  return /* @__PURE__ */ E.createElement(oc, null, /* @__PURE__ */ E.createElement(oc.Section, { title: e.name }, (r == null ? void 0 : r.annotations) && (r == null ? void 0 : r.annotations.map((y, v) => {
    var b, P, k, N, R, m, O, D, L;
    return /* @__PURE__ */ E.createElement(oc, null, /* @__PURE__ */ E.createElement(oc.Section, { title: y.text ? y.text.substring(0, 15) + "..." : `Annotation ${v + 1}` }, /* @__PURE__ */ E.createElement("div", { className: "annotation-group" }, /* @__PURE__ */ E.createElement("label", null, "Annotation Text:", /* @__PURE__ */ E.createElement("textarea", { rows: 5, value: y.text, onChange: (_) => f(_.target.value, "text", v) })), /* @__PURE__ */ E.createElement("label", null, "Opacity", /* @__PURE__ */ E.createElement("br", null), /* @__PURE__ */ E.createElement(
      "input",
      {
        type: "range",
        onChange: (_) => {
          const C = er.cloneDeep(r == null ? void 0 : r.annotations);
          C[v].opacity = _.target.value, t({
            ...r,
            annotations: C
          });
        },
        value: ((P = (b = r == null ? void 0 : r.annotations) == null ? void 0 : b[v]) == null ? void 0 : P.opacity) || "100"
      }
    )), /* @__PURE__ */ E.createElement("label", null, "Edit Subject", /* @__PURE__ */ E.createElement(
      "input",
      {
        type: "checkbox",
        checked: (N = (k = r == null ? void 0 : r.annotations[v]) == null ? void 0 : k.edit) == null ? void 0 : N.subject,
        onClick: (_) => {
          const C = er.cloneDeep(r == null ? void 0 : r.annotations);
          C[v].edit.subject = _.target.checked, t({
            ...r,
            annotations: C
          });
        }
      }
    )), /* @__PURE__ */ E.createElement("label", null, "Edit Label", /* @__PURE__ */ E.createElement(
      "input",
      {
        type: "checkbox",
        checked: (m = (R = r == null ? void 0 : r.annotations[v]) == null ? void 0 : R.edit) == null ? void 0 : m.label,
        onClick: (_) => {
          const C = er.cloneDeep(r == null ? void 0 : r.annotations);
          C[v].edit.label = _.target.checked, t({
            ...r,
            annotations: C
          });
        }
      }
    )), /* @__PURE__ */ E.createElement("label", null, "Connection Type:", /* @__PURE__ */ E.createElement(
      "select",
      {
        onChange: (_) => {
          const C = er.cloneDeep(r == null ? void 0 : r.annotations);
          C[v].connectionType = _.target.value, t({
            ...r,
            annotations: C
          });
        },
        value: (O = r == null ? void 0 : r.annotations[v]) == null ? void 0 : O.connectionType
      },
      /* @__PURE__ */ E.createElement("option", { key: "select", value: "select" }, "Select"),
      ["curve", "line", "elbow", "none"].map((_, C) => /* @__PURE__ */ E.createElement("option", { key: _, value: _ }, _))
    )), y.connectionType === "curve" && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("label", null, "Curve Control", /* @__PURE__ */ E.createElement(
      "input",
      {
        type: "range",
        min: "-20",
        max: "20",
        value: ((D = r == null ? void 0 : r.annotations[v]) == null ? void 0 : D.bezier) || 0,
        onChange: (_) => {
          const C = er.cloneDeep(r == null ? void 0 : r.annotations);
          C[v].bezier = _.target.value, t({
            ...r,
            annotations: C
          });
        }
      }
    ))), /* @__PURE__ */ E.createElement("label", null, "Marker", /* @__PURE__ */ E.createElement(
      "select",
      {
        onChange: (_) => {
          const C = er.cloneDeep(r == null ? void 0 : r.annotations);
          C[v].marker = _.target.value, t({
            ...r,
            annotations: C
          });
        }
      },
      ["circle", "arrow"].map((_, C) => /* @__PURE__ */ E.createElement("option", null, _))
    )), /* @__PURE__ */ E.createElement("label", null, "Snap to Nearest Point", /* @__PURE__ */ E.createElement(
      "input",
      {
        type: "checkbox",
        checked: (L = r == null ? void 0 : r.annotations[v]) == null ? void 0 : L.snapToNearestPoint,
        onClick: (_) => {
          const C = er.cloneDeep(r == null ? void 0 : r.annotations);
          C[v].snapToNearestPoint = _.target.checked, t({
            ...r,
            annotations: C
          });
        }
      }
    )), y.snapToNearestPoint && /* @__PURE__ */ E.createElement("label", null, "Associated Series:", /* @__PURE__ */ E.createElement(
      "select",
      {
        onChange: (_) => {
          const C = er.cloneDeep(r == null ? void 0 : r.annotations);
          C[v].seriesKey = _.target.value, t({
            ...r,
            annotations: C
          });
        }
      },
      /* @__PURE__ */ E.createElement("option", { key: "none", value: "none" }, "None"),
      l(!1).map((_, C) => /* @__PURE__ */ E.createElement("option", null, _))
    )), /* @__PURE__ */ E.createElement(ls, { className: "warn btn-warn btn btn-remove delete", onClick: () => u(v) }, "Delete Annotation"))));
  })), ((h = r == null ? void 0 : r.annotations) == null ? void 0 : h.length) < 3 && /* @__PURE__ */ E.createElement(ls, { onClick: d }, "Add Annotation")));
}, Oa = {
  ForestPlot: ME,
  Series: $r,
  Regions: ZE,
  General: QE,
  BoxPlot: JE,
  Visual: tk,
  Sankey: nk,
  Annotate: rk
}, ak = ({ config: e, updateConfig: t, data: r }) => {
  var R, m, O;
  const i = e.visualizationType === "Combo", a = ((R = e.runtime.lineSeriesKeys) == null ? void 0 : R.length) > 0, l = ((m = e.runtime.barSeriesKeys) == null ? void 0 : m.length) > 0, f = i && a, d = i && l, u = () => er.uniq(er.flatMap(r, er.keys)), h = () => e.visualizationType === "Line" || f ? ["effect", "suppression"] : ["suppression"], y = {
    "Dashed Small": "- - -",
    "Dashed Medium": "– –",
    "Dashed Large": "— –",
    "Open Circles": "◯"
  }, v = (D) => {
    if (e.visualizationType === "Line" || i) {
      const L = Object.keys(y);
      return D === "suppression" ? L.slice(0, -1) : L;
    }
  }, b = () => {
    if (e.visualizationType === "Bar" || d)
      return Object.keys(sp);
  };
  let P = (D) => {
    let L = [];
    e.preliminaryData && (L = [...e.preliminaryData]), L.splice(D, 1), t({ ...e, preliminaryData: L });
  }, k = () => {
    const D = e.visualizationType === "Line" ? "effect" : "suppression";
    let L = e.preliminaryData ? [...e.preliminaryData] : [];
    const _ = {
      type: D,
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
      hideLineStyle: !1
    };
    L.push(_), t({ ...e, preliminaryData: L });
  }, N = (D, L, _) => {
    let C = [];
    e.preliminaryData && (C = [...e.preliminaryData]), C[_][D] = L, D === "symbol" && (C[_].iconCode = sp[L]), D === "style" && (C[_].lineCode = y[L]), t({ ...e, preliminaryData: C });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, e.preliminaryData && ((O = e.preliminaryData) == null ? void 0 : O.map(({ column: D, displayLegend: L, displayTable: _, displayTooltip: C, label: V, seriesKey: H, style: X, symbol: le, type: Z, value: W, hideBarSymbol: U, hideLineStyle: B }, $) => {
    var ne, ee;
    return /* @__PURE__ */ React.createElement("div", { key: `preliminaryData-${$}`, className: "edit-block" }, /* @__PURE__ */ React.createElement("p", null, " ", Z === "suppression" ? "Suppressed" : "Effect", " Data"), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (ie) => {
          ie.preventDefault(), P($);
        }
      },
      "Remove"
    ), /* @__PURE__ */ React.createElement(Et, { value: Z, initial: e.visualizationType == "Bar" ? "" : "Select", fieldName: "type", label: "Type", updateField: (ie, q, j, J) => N(j, J, $), options: h() }), Z === "suppression" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      Et,
      {
        tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, ` If no “Data Series" is selected, the symbol will be applied to "all" suppressed values indicated in the dataset. If you select a particular data series, there's no need to fill in “suppression line style” and “suppression symbol” below.`))),
        value: D,
        initial: "Select",
        fieldName: "column",
        label: "Add Data Series",
        updateField: (ie, q, j, J) => N(j, J, $),
        options: (ne = e.runtime) == null ? void 0 : ne.seriesKeys
      }
    ), /* @__PURE__ */ React.createElement(qe, { value: W, fieldName: "value", label: "Suppressed Data  Value", updateField: (ie, q, j, J) => N(j, J, $) }), (f || e.visualizationType === "Line") && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      Et,
      {
        tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "The recommended approach for presenting data is to include a footnote indicating any data suppression."))),
        value: X,
        initial: "Select",
        fieldName: "style",
        label: "suppression line style",
        updateField: (ie, q, j, J) => N(j, J, $),
        options: v(Z)
      }
    ), /* @__PURE__ */ React.createElement(nt, { value: B, fieldName: "hideLineStyle", label: "Hide Suppressed line Style", updateField: (ie, q, j, J) => N(j, J, $) })), (d || e.visualizationType === "Bar") && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      Et,
      {
        tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, 'The suggested method for presenting suppressed data is to use "double asterisks". If "double asterisks" are already used elsewhere (e.g., footnotes), please select an alternative symbol from the menu to denote data suppression.'))),
        value: le,
        initial: "Select",
        fieldName: "symbol",
        label: e.visualizationType === "Combo" ? "suppression bar symbol" : "suppression symbol",
        updateField: (ie, q, j, J) => N(j, J, $),
        options: b()
      }
    ), /* @__PURE__ */ React.createElement(nt, { value: U, fieldName: "hideBarSymbol", label: "Hide Suppressed Bar Symbol  ", updateField: (ie, q, j, J) => N(j, J, $) })), /* @__PURE__ */ React.createElement(
      qe,
      {
        tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "This label will display in the tooltip and legend."))),
        value: V || "Suppressed",
        fieldName: "label",
        label: "Suppressed Data Label",
        placeholder: "",
        updateField: (ie, q, j, J) => N(j, J, $)
      }
    ), /* @__PURE__ */ React.createElement(
      nt,
      {
        tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Enabling this tooltip will provide a clearer indication of 'suppressed' or 'zero data' values, whichever is applicable. Deselecting 'Display In Tooltip' indicates that you do not want to display 'suppressed' or 'zero data' values in tooltips when hovering over them."))),
        value: C,
        fieldName: "displayTooltip",
        label: "Display in tooltips",
        updateField: (ie, q, j, J) => N(j, J, $)
      }
    ), /* @__PURE__ */ React.createElement(
      nt,
      {
        tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, 'Deselecting "Display in Legend" indicates that you do not want to display suppressed data in the legend.'))),
        value: L,
        fieldName: "displayLegend",
        label: "Display in legend",
        updateField: (ie, q, j, J) => N(j, J, $)
      }
    ), /* @__PURE__ */ React.createElement(
      nt,
      {
        tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, 'Deselecting "Display In Data Table" indicates that you do not want to display suppressed data in the data table.'))),
        value: _,
        fieldName: "displayTable",
        label: "Display in table",
        updateField: (ie, q, j, J) => N(j, J, $)
      }
    )) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Et, { value: H, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (ie, q, j, J) => N(j, J, $), options: e.runtime.lineSeriesKeys ?? ((ee = e.runtime) == null ? void 0 : ee.seriesKeys) }), /* @__PURE__ */ React.createElement(Et, { value: D, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (ie, q, j, J) => N(j, J, $), options: u() }), /* @__PURE__ */ React.createElement(qe, { value: W, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (ie, q, j, J) => N(j, J, $) }), /* @__PURE__ */ React.createElement(Et, { value: X, initial: "Select", fieldName: "style", label: "Style", updateField: (ie, q, j, J) => N(j, J, $), options: v(Z) }), /* @__PURE__ */ React.createElement(qe, { value: V, fieldName: "label", label: "Label", placeholder: "", updateField: (ie, q, j, J) => N(j, J, $) })));
  })), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: k, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Bar/Line"));
}, ik = () => {
  var Xt, mn, Nt, ln, yn, In, un, bn, g, w, I, Y, ge, pe, ke, $e, rt, ct;
  const {
    config: e,
    updateConfig: t,
    tableData: r,
    transformedData: i,
    loading: a,
    colorScale: l,
    colorPalettes: f,
    twoColorPalette: d,
    unfilteredData: u,
    excludedData: h,
    isDashboard: y,
    setParentConfig: v,
    missingRequiredSections: b,
    isDebug: P,
    setFilteredData: k,
    lineOptions: N,
    rawData: R,
    highlight: m,
    highlightReset: O,
    dimensions: D
  } = se.useContext(bt), { minValue: L, maxValue: _, existPositiveValue: C, isAllLine: V } = vu(e, u), H = { data: i, config: e }, { leftMax: X, rightMax: le } = hy(H), {
    headerColors: Z,
    visSupportsTooltipLines: W,
    visSupportsNonSequentialPallete: U,
    visSupportsSequentialPallete: B,
    visSupportsReverseColorPalette: $,
    visHasLabelOnData: ne,
    visHasNumbersOnBars: ee,
    visHasAnchors: ie,
    visHasBarBorders: q,
    visHasDataCutoff: j,
    visHasSelectableLegendValues: J,
    visCanAnimate: oe,
    visHasLegend: De,
    visHasLegendAxisAlign: ye,
    visHasBrushChart: de,
    visSupportsDateCategoryAxis: Ee,
    visSupportsValueAxisMin: re,
    visSupportsValueAxisMax: Oe,
    visSupportsDateCategoryAxisLabel: ve,
    visSupportsDateCategoryAxisLine: ce,
    visSupportsDateCategoryAxisTicks: be,
    visSupportsDateCategoryTickRotation: G,
    visSupportsDateCategoryNumTicks: Pe,
    visSupportsDateCategoryAxisPadding: Se,
    visSupportsRegions: je,
    visSupportsFilters: Ke,
    visSupportsPreliminaryData: Ge,
    visSupportsValueAxisGridLines: Be,
    visSupportsValueAxisLine: yt,
    visSupportsValueAxisTicks: He,
    visSupportsValueAxisLabels: ze,
    visSupportsBarSpace: Fe,
    visSupportsBarThickness: Ne,
    visSupportsFootnotes: ot,
    visSupportsSuperTitle: Ue,
    visSupportsDataCutoff: et,
    visSupportsChartHeight: ut,
    visSupportsLeftValueAxis: st,
    visSupportsTooltipOpacity: Ct,
    visSupportsRankByValue: Gt,
    visSupportsResponsiveTicks: Wt,
    visSupportsDateCategoryHeight: dt,
    visHasDataSuppression: Rt
  } = ys();
  se.useEffect(() => {
    let te = [];
    e.series && (te = e.series.map((ae) => ({
      ...ae,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: te
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
  const { hasRightAxis: cn } = jf({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), Jt = (te, ae) => ({
    ...ae
  }), jt = {
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
  }, fn = (te) => {
    te.orientation === "horizontal" && (te.labels = !1), te.table.show === void 0 && (te.table.show = !y), te.visualizationType === "Combo" && (te.orientation = "vertical"), En(te.xAxis) && !te.xAxis.padding && (te.xAxis.padding = 6), te.visualizationType === "Line" && (te.visualizationSubType = "regular", te.barStyle = "flat", te.isLollipopChart = !1);
  }, Le = (te, ae, ue, Re) => {
    if (P && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", te, ae, ue, Re), te === "boxplot" && ae === "legend") {
      t({
        ...e,
        [te]: {
          ...e[te],
          [ae]: {
            ...e.boxplot[ae],
            [ue]: Re
          }
        }
      });
      return;
    }
    if (te === "boxplot" && ae === "labels") {
      t({
        ...e,
        [te]: {
          ...e[te],
          [ae]: {
            ...e.boxplot[ae],
            [ue]: Re
          }
        }
      });
      return;
    }
    const ht = (Nn) => Nn === 0 ? !0 : !!Nn;
    if (te === "columns" && ht(ae) && ht(ue)) {
      t({
        ...e,
        columns: {
          ...e.columns,
          [ae]: {
            ...e.columns[ae],
            [ue]: Re
          }
        }
      });
      return;
    }
    if (te === null && ae === null) {
      ht(ue) || console.error("fieldName is required");
      let Nn = { ...e, [ue]: Re };
      fn(Nn), t(Nn);
      return;
    }
    const gn = Array.isArray(e[te]);
    let Rn = gn ? [...e[te], Re] : { ...e[te], [ue]: Re };
    ht(ae) && (gn ? (Rn = [...e[te]], Rn[ae] = { ...Rn[ae], [ue]: Re }) : typeof Re == "string" ? Rn[ae] = Re : ht(ue) && (Rn = { ...e[te], [ae]: { ...e[te][ae], [ue]: Re } }));
    let ar = { ...e, [te]: Rn };
    fn(ar), t(ar);
  }, [ft, $t] = se.useState(!0), [Dt, St] = se.useState(!1);
  if (a)
    return null;
  se.useEffect(() => {
    var te;
    (te = e.general) != null && te.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const hn = (te) => {
    t({
      ...e,
      lollipopShape: te
    });
  }, Lt = (te) => {
    let ae = e.series ? [...e.series] : [], ue = Array.from(new Set(i.map((ht) => ht[te]))), Re = [];
    ue.forEach((ht) => {
      Re.push({ key: ht });
    }), e.visualizationType === "Forecasting" ? ae.push({ dataKey: te, type: e.visualizationType, stages: Re, stageColumn: te, axis: "Left", tooltip: !0 }) : ae.push({ dataKey: te, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: ae });
  }, en = (te) => {
    const ae = e.series[0].dataKey, ue = i.sort((ht, gn) => ht[ae] - gn[ae]), Re = te === "asc" ? ue : ue.reverse();
    t({ ...e }, Re);
  }, an = (te) => {
    let ae = [...e.exclusions.keys];
    ae.push(te);
    let ue = { ...e.exclusions, keys: ae };
    t({ ...e, exclusions: ue });
  }, Sn = (te) => {
    let ae = -1, ue = [...e.exclusions.keys];
    for (let Re = 0; Re < ue.length; Re++)
      if (ue[Re] === te) {
        ae = Re;
        break;
      }
    if (ae !== -1) {
      ue.splice(ae, 1);
      let Re = { ...e.exclusions, keys: ue }, ht = { ...e, exclusions: Re };
      ue.length === 0 && delete ht.exclusions.keys, t(ht);
    }
  }, Ut = (te = !0) => {
    let ae = {};
    if (u.forEach((ue) => {
      Object.keys(ue).forEach((Re) => ae[Re] = !0);
    }), te) {
      const { lower: ue, upper: Re } = e.confidenceKeys || {};
      Object.keys(ae).forEach((ht) => {
        (e.series && e.series.filter((gn) => gn.dataKey === ht).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(ht) && (ue && Re || ue || Re) && ht !== ue && ht !== Re) && delete ae[ht];
      });
    }
    return Object.keys(ae);
  }, Kt = (te) => {
    if (!te)
      return [];
    const ae = /* @__PURE__ */ new Set();
    for (let ue = 0; ue < te.length; ue++)
      for (const [Re] of Object.entries(te[ue]))
        ae.add(Re);
    return Array.from(ae);
  }, Tn = (te, ae = !1) => {
    let ue = [];
    return h.forEach((Re) => {
      ue.push(Re[te]);
    }), ae ? [...new Set(ue)] : ue;
  }, _n = () => {
    $t(!ft), t({
      ...e,
      showEditorPanel: !ft
    });
  }, Mn = () => {
    let te = JSON.parse(JSON.stringify(e));
    return b() === !1 && delete te.newViz, delete te.runtime, te;
  };
  se.useEffect(() => {
    if (v) {
      const te = Mn();
      v(te);
    }
  }, [e]), se.useEffect(() => {
    const te = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], ae = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: ae
      },
      yAxis: {
        ...e.yAxis,
        anchors: te
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
  const Bt = se.useCallback(() => {
    const te = [...e.exclusions.keys];
    return /* @__PURE__ */ React.createElement("ul", { className: "series-list" }, te.map((ae, ue) => /* @__PURE__ */ React.createElement("li", { key: ae }, /* @__PURE__ */ React.createElement("div", { className: "series-list__name", "data-title": ae }, /* @__PURE__ */ React.createElement("div", { className: "series-list__name--text" }, ae)), /* @__PURE__ */ React.createElement("button", { className: "series-list__remove", onClick: () => Sn(ae) }, "×"))));
  }, [e]), On = (te, ae) => {
    let ue = e.series, [Re] = ue.splice(te, 1);
    ue.splice(ae, 0, Re), t({ ...e, series: ue });
  };
  e.isLollipopChart && ((Xt = e == null ? void 0 : e.series) == null ? void 0 : Xt.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((mn = e == null ? void 0 : e.series) == null ? void 0 : mn.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((Nt = e == null ? void 0 : e.series) == null ? void 0 : Nt.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((ln = e == null ? void 0 : e.series) == null ? void 0 : ln.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const zn = e.orientation === "horizontal" ? "xAxis" : "yAxis", [kn, xn] = se.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), we = () => {
    const te = e[zn].max, ae = e[zn].rightMax;
    let ue = "", Re = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (te && parseFloat(te) < parseFloat(_) && C):
          ue = "Max value must be more than " + _;
          break;
        case (te && parseFloat(te) < 0 && !C):
          ue = "Value must be more than or equal to 0";
          break;
        default:
          ue = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (te && parseFloat(te) < X):
          ue = "Max value must be more than " + X;
          break;
        case (ae && parseFloat(ae) < le):
          Re = "Max value must be more than " + le;
          break;
        case (te && parseFloat(te) < 0 && !C):
          ue = "Value must be more than or equal to 0";
          break;
        default:
          ue = "";
      }
    xn((ht) => ({ ...ht, maxMsg: ue, rightMaxMessage: Re }));
  }, at = () => {
    const te = parseFloat(e[zn].min);
    let ae = Number(L), ue = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && te < 0):
        ue = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && te > ae):
        ue = "Value should not exceed " + L;
        break;
      case (e.visualizationType === "Combo" && V && te > ae):
        ue = "Value should not exceed " + L;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !V) && ae > 0 && te > 0):
        ue = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && te >= Math.min(ae, e.xAxis.target)):
        ue = "Value must be less than " + Math.min(ae, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && te && ae < 0 && te > ae):
        ue = "Value should not exceed " + L;
        break;
      default:
        ue = "";
    }
    xn((Re) => ({ ...Re, minMsg: ue }));
  };
  se.useEffect(() => {
    at(), we();
  }, [L, _, e]);
  const tt = ((yn = e == null ? void 0 : e.dataKey) == null ? void 0 : yn.includes("http://")) || ((In = e == null ? void 0 : e.dataKey) == null ? void 0 : In.includes("https://")), z = () => {
    var te, ae;
    if (P !== void 0 && P && !((te = e == null ? void 0 : e.xAxis) != null && te.dataKey)) {
      let ue = Ut(!1);
      if (ue.includes("Date"))
        return "Date";
      if (ue.includes("Race"))
        return "Race";
      if (ue.includes("Month"))
        return "Month";
    }
    return ((ae = e == null ? void 0 : e.xAxis) == null ? void 0 : ae.dataKey) || "";
  }, Te = () => {
    if (P !== void 0 && P && Ut(!1).length > 0) {
      let te = Ut(!1).filter((ae) => ae !== z());
      if (te.length > 0)
        return te[0];
    }
    return "";
  };
  if (P && !e.xAxis.dataKey && (e.xAxis.dataKey = z()), P && ((un = e == null ? void 0 : e.series) == null ? void 0 : un.length) === 0) {
    let te = Te();
    te !== "" && Lt(te), P && console.log("### COVE DEBUG: Chart: Setting default datacol=", te);
  }
  const We = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], Me = [
    /* @__PURE__ */ React.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((bn = e.data) == null ? void 0 : bn[0]) || []).map((ae) => {
      const ue = e == null ? void 0 : e.series.some((Re) => Re.dataKey === ae);
      if (ae !== e.xAxis.dataKey && !ue)
        return Me.push(
          /* @__PURE__ */ React.createElement("option", { value: ae, key: ae }, ae)
        );
    });
    let te = {};
    e.data.forEach((ae) => {
      Object.keys(ae).forEach((ue) => {
        te[ue] = te[ue] || [];
        const Re = typeof ae[ue] == "number" ? ae[ue].toString() : ae[ue];
        te[ue].indexOf(Re) === -1 && te[ue].push(Re);
      });
    });
  }
  if (!e.data && i) {
    if (!i[0])
      return;
    Object.keys(i[0]).map((ae) => {
      const ue = i.some((Re) => Re.dataKey === ae);
      if (ae !== e.xAxis.dataKey && !ue)
        return Me.push(
          /* @__PURE__ */ React.createElement("option", { value: ae, key: ae }, ae)
        );
    });
    let te = {};
    i.forEach((ae) => {
      Object.keys(ae).forEach((ue) => {
        te[ue] = te[ue] || [];
        const Re = typeof ae[ue] == "number" ? ae[ue].toString() : ae[ue];
        te[ue].indexOf(Re) === -1 && te[ue].push(Re);
      });
    });
  }
  const Qe = (te) => {
    const ae = er.cloneDeep(e.columns);
    delete ae[te], t({
      ...e,
      columns: ae
    });
  }, Ze = async (te, ae, ue) => {
    switch (ae) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [te]: {
              ...e.columns[te],
              [ae]: ue
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [te]: {
              ...e.columns[te],
              [ae]: ue
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: mt,
    highlightedSeriesValues: xt,
    handleUpdateHighlightedBar: Ye,
    handleAddNewHighlightedBar: Yt,
    handleRemoveHighlightedBar: Mt,
    handleUpdateHighlightedBarColor: Pt,
    handleHighlightedBarLegendLabel: lt,
    handleUpdateHighlightedBorderWidth: wt
  } = du(e, t), At = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, Ht = () => {
    const te = i.map((ae) => ae[e.legend.colorCode]);
    return At ? te : Ut(!1).filter((ae) => ae !== e.xAxis.dataKey);
  }, Ot = (te) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: te } });
  }, on = (te, ae, ue) => {
    var gn;
    const Re = { ...e[te], [ae]: ue }, ht = { ...e, [te]: Re };
    ue === "highlight" && ((gn = e.legend.seriesHighlight) != null && gn.length) && (ht.legend.seriesHighlight.length = 0), t(ht);
  }, tn = (te, ae, ue) => {
    const Re = { ...e.xAxis[te] };
    Re[ae] = ue;
    const ht = { ...e, xAxis: { ...e.xAxis, [te]: Re } };
    t(ht);
  }, nn = {
    addNewExclusion: an,
    data: i,
    editColumn: Ze,
    getColumns: Ut,
    getDataValueOptions: Kt,
    getDataValues: Tn,
    getItemStyle: Jt,
    handleSeriesChange: On,
    handleAddNewHighlightedBar: Yt,
    setCategoryAxis: z,
    sortSeries: en,
    updateField: Le,
    warningMsg: kn,
    highlightedBarValues: mt,
    handleHighlightedBarLegendLabel: lt,
    handleUpdateHighlightedBar: Ye,
    handleRemoveHighlightedBar: Mt,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: xt,
    handleUpdateHighlightedBorderWidth: wt,
    handleUpdateHighlightedBarColor: Pt,
    setLollipopShape: hn
  };
  return /* @__PURE__ */ React.createElement(Uf.Provider, { value: nn }, /* @__PURE__ */ React.createElement(Cr, { component: "EditorPanel" }, /* @__PURE__ */ React.createElement(Id.Sidebar, { displayPanel: ft, isDashboard: y, title: "Configure Chart", onBackClick: _n }, /* @__PURE__ */ React.createElement(Ai, { allowZeroExpanded: !0 }, /* @__PURE__ */ React.createElement(Oa.General, { name: "General" }), /* @__PURE__ */ React.createElement(Oa.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ React.createElement(Oa.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ React.createElement(Cc, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ React.createElement(Pn, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ React.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ React.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Et,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (te) => {
        te.target.value !== "" && te.target.value !== "Select" && Lt(te.target.value), te.target.value = "";
      },
      options: Ut()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ React.createElement(Oa.Series.Wrapper, { getColumns: Ut }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ React.createElement(Sy, { onDragEnd: ({ source: te, destination: ae }) => On(te.index, ae.index) }, /* @__PURE__ */ React.createElement(Ey, { droppableId: "filter_order" }, (te) => /* @__PURE__ */ React.createElement("ul", { ...te.droppableProps, className: "series-list", ref: te.innerRef }, /* @__PURE__ */ React.createElement(Oa.Series.List, { series: e.series, getItemStyle: Jt, sortableItemStyles: jt, chartsWithOptions: We }), te.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ React.createElement(Et, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: Le, initial: "Select", options: Ut() }), /* @__PURE__ */ React.createElement(Et, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: Le, initial: "Select", options: Ut() })), Gt() && e.series && e.series.length === 1 && /* @__PURE__ */ React.createElement(Et, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (te) => en(te.target.value), options: ["asc", "desc"] }), Ge() && /* @__PURE__ */ React.createElement(ak, { config: e, updateConfig: t, data: i }))), /* @__PURE__ */ React.createElement(Oa.BoxPlot, { name: "Measures" }), st() && /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ React.createElement(Cc, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ React.createElement(Pn, null, e.visualizationType === "Pie" && /* @__PURE__ */ React.createElement(
    Et,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: Le,
      options: Ut(!1),
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: Le }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ React.createElement(nt, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: Le }), /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.yAxis.numTicks,
      placeholder: "Auto",
      type: "number",
      section: "yAxis",
      fieldName: "numTicks",
      label: "Number of ticks",
      className: "number-narrow",
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used."))),
      updateField: Le
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.labelOffset, section: "yAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Le }), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ React.createElement(nt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Le }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Le }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), Be() && /* @__PURE__ */ React.createElement(nt, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: Le }), /* @__PURE__ */ React.createElement(nt, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: Le }), e.yAxis.enablePadding && /* @__PURE__ */ React.createElement(qe, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: Le, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ React.createElement(nt, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: Le })), /* @__PURE__ */ React.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ React.createElement(
    nt,
    {
      value: e.dataFormat.commas,
      section: "dataFormat",
      fieldName: "commas",
      label: "Add commas",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Selecting this option will add commas to the left value axis, tooltip hover, and data table.")))
    }
  ), /* @__PURE__ */ React.createElement(
    nt,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ React.createElement(qe, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: Le, min: 0 }), /* @__PURE__ */ React.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ React.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ React.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ React.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ React.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ React.createElement(React.Fragment, null, yt() && /* @__PURE__ */ React.createElement(nt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Le }), ze() && /* @__PURE__ */ React.createElement(nt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Le }), He() && /* @__PURE__ */ React.createElement(nt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Le }), Oe() && /* @__PURE__ */ React.createElement(qe, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: Le }), /* @__PURE__ */ React.createElement("span", { style: { color: "red", display: "block" } }, kn.maxMsg), re() && /* @__PURE__ */ React.createElement(qe, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Le }), /* @__PURE__ */ React.createElement("span", { style: { color: "red", display: "block" } }, kn.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(qe, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: Le }), /* @__PURE__ */ React.createElement(qe, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: Le }), /* @__PURE__ */ React.createElement(nt, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: Le })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(nt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Le }), /* @__PURE__ */ React.createElement(nt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Le }), /* @__PURE__ */ React.createElement(nt, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Le }), /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: Le }), /* @__PURE__ */ React.createElement("span", { style: { color: "red", display: "block" } }, kn.maxMsg), /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: Le }), /* @__PURE__ */ React.createElement("span", { style: { color: "red", display: "block" } }, kn.minMsg)), ie() && e.orientation !== "horizontal" && /* @__PURE__ */ React.createElement("div", { className: "edit-block" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ React.createElement(Ai, { allowZeroExpanded: !0 }, (w = (g = e.yAxis) == null ? void 0 : g.anchors) == null ? void 0 : w.map((te, ae) => /* @__PURE__ */ React.createElement(Cn, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${ae}` }, /* @__PURE__ */ React.createElement(An, { className: "series-item__title" }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Ln, { className: "accordion__button accordion__button" }, "Anchor ", ae + 1, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ue) => {
        ue.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(ae, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, "Anchor Value"), /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[ae].value ? e.yAxis.anchors[ae].value : "",
      onChange: (ue) => {
        ue.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[ae].value = ue.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, "Anchor Color"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[ae].color ? e.yAxis.anchors[ae].color : "",
      onChange: (ue) => {
        ue.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[ae].color = ue.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ React.createElement(
    "select",
    {
      value: e.yAxis.anchors[ae].lineStyle || "",
      onChange: (ue) => {
        const Re = [...e.yAxis.anchors];
        Re[ae].lineStyle = ue.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ React.createElement("option", null, "Select"),
    N.map((ue) => /* @__PURE__ */ React.createElement("option", { key: ue.key }, ue.value))
  )))))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (te) => {
        te.preventDefault();
        const ae = [...e.yAxis.anchors];
        ae.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ae
          }
        });
      }
    },
    "Add Anchor"
  )), ie() && e.orientation === "horizontal" && /* @__PURE__ */ React.createElement("div", { className: "edit-block" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ React.createElement(Ai, { allowZeroExpanded: !0 }, (Y = (I = e.xAxis) == null ? void 0 : I.anchors) == null ? void 0 : Y.map((te, ae) => /* @__PURE__ */ React.createElement(Cn, { className: "series-item series-item--chart", key: `xaxis-anchors-${ae}` }, /* @__PURE__ */ React.createElement(An, { className: "series-item__title" }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Ln, { className: "accordion__button accordion__button" }, "Anchor ", ae + 1, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ue) => {
        ue.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(ae, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, "Anchor Value"), /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[ae].value ? e.xAxis.anchors[ae].value : "",
      onChange: (ue) => {
        ue.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[ae].value = ue.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, "Anchor Color"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[ae].color ? e.xAxis.anchors[ae].color : "",
      onChange: (ue) => {
        ue.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[ae].color = ue.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ React.createElement(
    "select",
    {
      value: e.xAxis.anchors[ae].lineStyle || "",
      onChange: (ue) => {
        const Re = [...e.xAxis.anchors];
        Re[ae].lineStyle = ue.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ React.createElement("option", null, "Select"),
    N.map((ue) => /* @__PURE__ */ React.createElement("option", { key: ue.key }, ue.value))
  )))))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (te) => {
        te.preventDefault();
        const ae = [...e.xAxis.anchors];
        ae.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ae
          }
        });
      }
    },
    "Add Anchor"
  )))), cn && /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, "Right Value Axis")), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: Le }), /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: Le }), /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: Le }), /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: Le }), /* @__PURE__ */ React.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ React.createElement(nt, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: Le }), /* @__PURE__ */ React.createElement(qe, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Le, min: 0 }), /* @__PURE__ */ React.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ React.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ React.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ React.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ React.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ React.createElement(nt, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: Le }), /* @__PURE__ */ React.createElement(nt, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Tick Labels", updateField: Le }), /* @__PURE__ */ React.createElement(nt, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: Le }), /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: Le }), /* @__PURE__ */ React.createElement("span", { style: { color: "red", display: "block" } }, kn.rightMaxMessage), /* @__PURE__ */ React.createElement(qe, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: Le }), /* @__PURE__ */ React.createElement("span", { style: { color: "red", display: "block" } }, kn.minMsg))), Ee() && /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ React.createElement(Cc, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ React.createElement(Pn, null, e.visualizationType !== "Pie" && /* @__PURE__ */ React.createElement(React.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: e.xAxis.type,
      onChange: (te) => t({
        ...e,
        xAxis: {
          ...e.xAxis,
          type: te.target.value
        }
      })
    },
    /* @__PURE__ */ React.createElement("option", { value: "categorical" }, "Categorical (Linear Scale)"),
    /* @__PURE__ */ React.createElement("option", { value: "date" }, "Date (Linear Scale)"),
    /* @__PURE__ */ React.createElement("option", { value: "date-time" }, "Date (Date Time Scale)"),
    e.visualizationType === "Scatter Plot" && /* @__PURE__ */ React.createElement("option", { value: "continuous" }, "Continuous")
  )), /* @__PURE__ */ React.createElement(nt, { value: e.xAxis.manual, section: "xAxis", fieldName: "manual", label: "Manual Ticks", updateField: Le }), Se() && /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ React.createElement(
    Et,
    {
      value: e.xAxis.dataKey || z() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: Le,
      options: Ut(!1),
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ React.createElement(
    Et,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: Le,
      options: Ut(!1),
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(qe, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: Le }), e.xAxis.type === "continuous" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ React.createElement(
    nt,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), En(e.xAxis) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ React.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ React.createElement(
    qe,
    {
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: Le
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: Le
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: Le
    }
  ), /* @__PURE__ */ React.createElement(
    qe,
    {
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: Le
    }
  )), /* @__PURE__ */ React.createElement(
    nt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: Le
    }
  ), !1, e.exclusions.active && /* @__PURE__ */ React.createElement(React.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ React.createElement(React.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ React.createElement(Bt, null)), /* @__PURE__ */ React.createElement(
    Et,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (te) => {
        te.target.value !== "" && te.target.value !== "Select" && an(te.target.value), te.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(qe, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: Le, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ React.createElement(qe, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: Le, value: e.exclusions.dateEnd || "" }))), Pe() && e.xAxis.type !== "date-time" && e.xAxis.manual && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.xAxis.manualStep,
      placeholder: "Auto",
      type: "number",
      min: 1,
      section: "xAxis",
      fieldName: "manualStep",
      label: "Step count",
      className: "number-narrow",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Number of data points which are assigned a tick, starting from the right most data point. Value of 1 will show a tick at every data point, value of 2 will show a tick for every other, etc.")))
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("button", { onClick: () => St(!Dt), className: "edit-label" }, "Step Count: viewport overrides ", /* @__PURE__ */ React.createElement("span", { style: { transform: `rotate(${Dt ? "90deg" : "0deg"})` } }, ">"))), Dt && /* @__PURE__ */ React.createElement("div", { className: "edit-block" }, Object.keys(Yf).map((te) => /* @__PURE__ */ React.createElement(
    qe,
    {
      key: `viewport-step-count-input-${te}`,
      value: e.xAxis.viewportStepCount ? e.xAxis.viewportStepCount[te] : void 0,
      placeholder: "Auto",
      type: "number",
      label: te,
      className: "number-narrow",
      updateField: (ae, ue, Re, ht) => tn("viewportStepCount", te, ht)
    }
  ))))), Pe() && (e.xAxis.type === "date-time" || !e.xAxis.manual) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.xAxis.numTicks,
      placeholder: "Auto",
      type: "number",
      min: 1,
      section: "xAxis",
      fieldName: "numTicks",
      label: "Number of ticks",
      className: "number-narrow",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, 'Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used. To enforce an exact number of ticks, check "Manual Ticks" above.')))
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("button", { onClick: () => St(!Dt), className: "edit-label" }, "Number of ticks: viewport overrides ", /* @__PURE__ */ React.createElement("span", { style: { transform: `rotate(${Dt ? "90deg" : "0deg"})` } }, ">"))), Dt && /* @__PURE__ */ React.createElement("div", { className: "edit-block" }, Object.keys(Yf).map((te) => /* @__PURE__ */ React.createElement(
    qe,
    {
      key: `viewport-num-ticks-input-${te}`,
      value: e.xAxis.viewportNumTicks ? e.xAxis.viewportNumTicks[te] : void 0,
      placeholder: "Auto",
      type: "number",
      label: te,
      className: "number-narrow",
      updateField: (ae, ue, Re, ht) => tn("viewportNumTicks", te, ht)
    }
  ))))), dt() && /* @__PURE__ */ React.createElement(qe, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: Le }), /* @__PURE__ */ React.createElement(qe, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Le }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(nt, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: Le }), /* @__PURE__ */ React.createElement(qe, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Le, min: 0 })), Wt() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ React.createElement(nt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Le }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && G() && /* @__PURE__ */ React.createElement(qe, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Le }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ React.createElement(
    qe,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ React.createElement(React.Fragment, null, ce() && /* @__PURE__ */ React.createElement(nt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Le }), ve() && /* @__PURE__ */ React.createElement(nt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Le })) : /* @__PURE__ */ React.createElement(React.Fragment, null, ce() && /* @__PURE__ */ React.createElement(nt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Le }), ve() && /* @__PURE__ */ React.createElement(nt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Le }), be() && /* @__PURE__ */ React.createElement(nt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Le })), ((ge = e.series) == null ? void 0 : ge.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && mt.map((te, ae) => /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("div", { className: "edit-block", key: `highlighted-bar-${ae}` }, /* @__PURE__ */ React.createElement("button", { className: "remove-column", onClick: (ue) => Mt(ue, ae) }, "Remove"), /* @__PURE__ */ React.createElement("p", null, "Highlighted Bar ", ae + 1), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ React.createElement("select", { value: e.highlightedBarValues[ae].value, onChange: (ue) => Ye(ue, ae) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "- Select Value -"), xt && [...new Set(xt)].sort().map((ue) => /* @__PURE__ */ React.createElement("option", { key: `special-class-value-option-${ae}-${ue}` }, ue)))), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ React.createElement("input", { type: "text", value: e.highlightedBarValues[ae].color ? e.highlightedBarValues[ae].color : "", onChange: (ue) => Pt(ue, ae) })), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ React.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[ae].borderWidth ? e.highlightedBarValues[ae].borderWidth : "", onChange: (ue) => wt(ue, ae) })), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ React.createElement("input", { type: "text", value: e.highlightedBarValues[ae].legendLabel ? e.highlightedBarValues[ae].legendLabel : "", onChange: (ue) => lt(ue, ae) }))))), /* @__PURE__ */ React.createElement("button", { className: "btn full-width", onClick: (te) => Yt(te) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    nt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ React.createElement(React.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ React.createElement(Bt, null)), /* @__PURE__ */ React.createElement(
    Et,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (te) => {
        te.target.value !== "" && te.target.value !== "Select" && an(te.target.value), te.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  ))), ie() && e.orientation !== "horizontal" && /* @__PURE__ */ React.createElement("div", { className: "edit-block" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ React.createElement(Ai, { allowZeroExpanded: !0 }, (ke = (pe = e.xAxis) == null ? void 0 : pe.anchors) == null ? void 0 : ke.map((te, ae) => /* @__PURE__ */ React.createElement(Cn, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${ae}` }, /* @__PURE__ */ React.createElement(An, { className: "series-item__title" }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Ln, { className: "accordion__button accordion__button" }, "Anchor ", ae + 1, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ue) => {
        ue.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(ae, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, "Anchor Value"), /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[ae].value ? e.xAxis.anchors[ae].value : "",
      onChange: (ue) => {
        ue.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[ae].value = ue.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, "Anchor Color"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[ae].color ? e.xAxis.anchors[ae].color : "",
      onChange: (ue) => {
        ue.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[ae].color = ue.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ React.createElement(
    "select",
    {
      value: e.xAxis.anchors[ae].lineStyle || "",
      onChange: (ue) => {
        const Re = [...e.xAxis.anchors];
        Re[ae].lineStyle = ue.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ React.createElement("option", null, "Select"),
    N.map((ue) => /* @__PURE__ */ React.createElement("option", { key: ue.key }, ue.value))
  )))))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (te) => {
        te.preventDefault();
        const ae = [...e.xAxis.anchors];
        ae.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ae
          }
        });
      }
    },
    "Add Anchor"
  )), ie() && e.orientation === "horizontal" && /* @__PURE__ */ React.createElement("div", { className: "edit-block" }, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ React.createElement(Ai, { allowZeroExpanded: !0 }, (rt = ($e = e.yAxis) == null ? void 0 : $e.anchors) == null ? void 0 : rt.map((te, ae) => /* @__PURE__ */ React.createElement(Cn, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${ae}` }, /* @__PURE__ */ React.createElement(An, { className: "series-item__title" }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Ln, { className: "accordion__button accordion__button" }, "Anchor ", ae + 1, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ue) => {
        ue.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(ae, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, "Anchor Value"), /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[ae].value ? e.yAxis.anchors[ae].value : "",
      onChange: (ue) => {
        ue.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[ae].value = ue.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, "Anchor Color"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[ae].color ? e.yAxis.anchors[ae].color : "",
      onChange: (ue) => {
        ue.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[ae].color = ue.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ React.createElement(
    "select",
    {
      value: e.yAxis.anchors[ae].lineStyle || "",
      onChange: (ue) => {
        const Re = [...e.yAxis.anchors];
        Re[ae].lineStyle = ue.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ React.createElement("option", null, "Select"),
    N.map((ue) => /* @__PURE__ */ React.createElement("option", { key: ue.key }, ue.value))
  )))))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (te) => {
        te.preventDefault();
        const ae = [...e.yAxis.anchors];
        ae.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ae
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ React.createElement(Oa.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, "Columns")), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement(Uy, { config: e, updateField: Le, deleteColumn: Qe }), " ")), De() && /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, "Legend")), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement(nt, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: Le }), /* @__PURE__ */ React.createElement(
    nt,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), /* @__PURE__ */ React.createElement(
    nt,
    {
      value: e.legend.hideSuppressedLabels,
      section: "legend",
      fieldName: "hideSuppressedLabels",
      label: "Hide Suppressed Labels",
      updateField: Le,
      tooltip: /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, `Hiding suppressed labels will not override the 'Special Class' assigned to line chart indicating "suppressed" data in the Data Series Panel.`)))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ React.createElement(nt, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: Le }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ React.createElement(Et, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: Le, options: Kt(i) }), /* @__PURE__ */ React.createElement(Et, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[te, , ae, ue]) => on(te, ae, ue), options: ["highlight", "isolate"] }), ye() && /* @__PURE__ */ React.createElement(nt, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: Le }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ React.createElement(nt, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: Le }), J && e.legend.behavior === "isolate" && !At && /* @__PURE__ */ React.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ React.createElement(fe, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(fe.Target, null, /* @__PURE__ */ React.createElement(it, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(fe.Content, null, /* @__PURE__ */ React.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((te, ae) => /* @__PURE__ */ React.createElement("fieldset", { className: "edit-block", key: `${te}-${ae}` }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (ue) => {
        ue.preventDefault();
        const Re = [...e.legend.seriesHighlight];
        Re.splice(ae, 1), Le("legend", null, "seriesHighlight", Re), Re.length || O();
      }
    },
    "Remove"
  ), /* @__PURE__ */ React.createElement(
    Et,
    {
      value: e.legend.seriesHighlight[ae],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (ue) => {
        const Re = [...e.legend.seriesHighlight];
        Re.includes(ue.target.value) || (Re[ae] = ue.target.value, Ot([...Re]));
      },
      options: Ht()
    }
  ))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (te) => {
        te.preventDefault();
        const ae = Ht(), ue = [...e.legend.seriesHighlight];
        if (ue.length < ae.length) {
          const [ht] = ae.filter((gn) => !ue.includes(gn));
          ue.push(ht), Ot([...ue]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ React.createElement(qe, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: Le }), /* @__PURE__ */ React.createElement(Et, { value: (ct = e.legend) == null ? void 0 : ct.position, section: "legend", fieldName: "position", label: "Position", updateField: Le, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(nt, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: Le }), /* @__PURE__ */ React.createElement(nt, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: Le })), /* @__PURE__ */ React.createElement(qe, { type: "textarea", value: e.legend.description, updateField: Le, section: "legend", fieldName: "description", label: "Legend Description" }))), Ke() && /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, "Filters")), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement(Ky, { config: e, updateField: Le, rawData: R }))), /* @__PURE__ */ React.createElement(Oa.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ React.createElement(Cn, null, /* @__PURE__ */ React.createElement(An, null, /* @__PURE__ */ React.createElement(Ln, null, "Data Table")), /* @__PURE__ */ React.createElement(Pn, null, /* @__PURE__ */ React.createElement(Yy, { config: e, columns: Object.keys(i[0] || {}), updateField: Le, isDashboard: y, isLoadedFromUrl: tt }), " ")), !1), e.type !== "Spark Line" && /* @__PURE__ */ React.createElement(ky, { loadConfig: t, state: e, convertStateToConfig: Mn }))));
}, Ch = (e) => {
  let t = "", r = Math.abs(e);
  return r >= 1e9 ? (t = "B", e = e / 1e9) : r >= 1e6 ? (t = "M", e = e / 1e6) : r >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, ok = (e) => {
  e.sort((h, y) => h - y);
  const t = Math.floor(e.length / 2), r = e.length % 2 === 0, i = r ? e.slice(0, t) : e.slice(0, t + 1), a = r ? e.slice(t) : e.slice(t + 1), l = Math.floor(i.length / 2), f = r ? (i[l - 1] + i[l]) / 2 : i[l], d = Math.floor(a.length / 2), u = r ? (a[d - 1] + a[d]) / 2 : a[d];
  return { q1: f, q3: u };
}, lk = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), sk = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), ck = [
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
], Ah = (e = "#000000", t = !1) => {
  let r = ss(e), i = t ? r.brighten(0.5).hex() : r.saturate(1.3).hex();
  return [e, i, r.darken(0.3).hex()];
}, Lh = (e) => {
  const t = /(?:\.([^.]+))$/, r = /[?&]wt=(csv|json)(?:&|$)/, i = new URL(e, window.location.origin), a = i.pathname, l = i.search, f = t.exec(a);
  if (f && f[1])
    return f[1];
  const d = r.exec(l);
  return d && d[1] ? d[1] : "";
};
function Hk({ configUrl: e, config: t, isEditor: r = !1, isDebug: i = !1, isDashboard: a = !1, setConfig: l, setEditing: f, hostname: d, link: u, setSharedFilter: h, setSharedFilterValue: y, dashboardConfig: v }) {
  var Tn, _n, Mn, Bt, On, zn, kn, xn, we, at, tt;
  const b = new Qy(), [P, k] = se.useState(!0), [N, R] = se.useState(null), [m, O] = se.useState({}), [D, L] = se.useState(m.data || []), [_, C] = se.useState(void 0), [V, H] = se.useState(void 0), [X, le] = se.useState(t && ((_n = (Tn = t == null ? void 0 : t.legend) == null ? void 0 : Tn.seriesHighlight) != null && _n.length) ? [...(Mn = t == null ? void 0 : t.legend) == null ? void 0 : Mn.seriesHighlight] : []), [Z, W] = se.useState("lg"), [U, B] = se.useState([]), [$, ne] = se.useState(), [ee, ie] = se.useState(), [q, j] = se.useState(!1), [J, oe] = se.useState([]), [De] = se.useState(`cove-${Math.random().toString(16).slice(-4)}`), [ye, de] = se.useState({
    data: [],
    isActive: !1,
    isBrushing: !1
  });
  se.useRef(/* @__PURE__ */ new Map()), se.useRef();
  const Ee = se.useRef(null);
  i && console.log("Chart config, isEditor", m, r);
  let { legend: re, title: Oe, description: ve, visualizationType: ce } = m;
  r && (!Oe || Oe === "") && (Oe = "Chart Title"), m.table && (!((Bt = m.table) != null && Bt.label) || ((On = m.table) == null ? void 0 : On.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: be, lineDatapointClass: G, contentClasses: Pe, sparkLineStyles: Se } = Xy(m), je = se.useId(), Ke = (zn = m.legend) != null && zn.hide ? m != null && m.title ? `dataTableSection__${m.title.replace(/\s/g, "")}` : "dataTableSection" : je, Ge = () => gu(m.visualizationType, V, m.allowLineToBarGraph), Be = async () => {
    var z;
    if (m.dataUrl) {
      const Te = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let We = Object.fromEntries(new URLSearchParams(Te.search)), Me = !1;
      if ((z = m.filters) == null || z.forEach((mt) => {
        mt.type === "url" && We[mt.queryParameter] !== decodeURIComponent(mt.active) && (We[mt.queryParameter] = mt.active, Me = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !Me)
        return;
      let Qe = `${Te.origin}${Te.pathname}${Object.keys(We).map((mt, xt) => {
        let Ye = xt === 0 ? "?" : "&";
        return Ye += mt + "=", Ye += We[mt], Ye;
      }).join("")}`, Ze = [];
      try {
        const mt = Lh(Te.href);
        mt === "csv" || Xf(Qe) ? Ze = await fetch(Qe).then((xt) => xt.text()).then((xt) => Zf.parse(xt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : mt === "json" || qf(Qe) ? Ze = await fetch(Qe).then((xt) => xt.json()) : Ze = [];
      } catch {
        console.error(`Cannot parse URL: ${Qe}`), Ze = [];
      }
      m.dataDescription && (Ze = b.autoStandardize(Ze), Ze = b.developerStandardize(Ze, m.dataDescription)), Object.assign(Ze, { urlFiltered: !0 }), He({ ...m, runtimeDataUrl: Qe, data: Ze, formattedData: Ze }), Ze && (L(Ze), C(Ze), H(xi(m.filters, Ze)));
    }
  }, yt = async () => {
    let z = t || await (await fetch(e)).json(), Te = z.data || [];
    const We = z.filters ? z.filters.filter((Ze) => Ze.type === "url").length > 0 : !1;
    if (z.dataUrl && !We)
      try {
        const Ze = Lh(z.dataUrl);
        (Ze === "csv" || Xf(z.dataUrl)) && (Te = await fetch(z.dataUrl + `?v=${up()}`).then((mt) => mt.text()).then((mt) => (mt = mt.replace(/(".*?")|,/g, (...Ye) => Ye[1] || "|"), mt = mt.replace(/["]+/g, ""), Zf.parse(mt, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (Ze === "json" || qf(z.dataUrl)) && (Te = await fetch(z.dataUrl + `?v=${up()}`).then((mt) => mt.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${z.dataUrl}`), Te = [];
      }
    z.dataDescription && (Te = b.autoStandardize(Te), Te = b.developerStandardize(Te, z.dataDescription)), Te && (L(Te), C(Te)), z !== void 0 && z.table !== void 0 && (!z.table || !z.table.showVertical) && (z.table = z.table || {}, z.table.showVertical = !1);
    let Me = { ...zd, ...z };
    Me.filters && Me.filters.forEach((Ze, mt) => {
      const xt = Ry(Ze);
      xt && (Me.filters[mt].active = xt);
    }), Me.visualizationType === "Box Plot" && (Me.legend.hide = !0), Me.table.show === void 0 && (Me.table.show = !a), Me.series.forEach((Ze) => {
      (Ze.tooltip === void 0 || Ze.tooltip === null) && (Ze.tooltip = !0), Ze.axis || (Ze.axis = "Left");
    }), !Me.data && Te && (Me.data = Te);
    const Qe = { ...await wy(Me) };
    He(Qe, Te);
  }, He = (z, Te) => {
    var Ze, mt, xt;
    let We = Te || D;
    Object.keys(zd).forEach((Ye) => {
      z[Ye] && typeof z[Ye] == "object" && !Array.isArray(z[Ye]) && (z[Ye] = { ...zd[Ye], ...z[Ye] });
    });
    let Me = [];
    if (z.exclusions && z.exclusions.active)
      if (z.xAxis.type === "categorical" && ((Ze = z.exclusions.keys) == null ? void 0 : Ze.length) > 0)
        Me = We.filter((Ye) => !z.exclusions.keys.includes(Ye[z.xAxis.dataKey]));
      else if (En(z.xAxis) && (z.exclusions.dateStart || z.exclusions.dateEnd) && z.xAxis.dateParseFormat) {
        const Ye = (wt) => new Date(wt).getTime();
        let Yt = Ye(z.exclusions.dateStart), Mt = Ye(z.exclusions.dateEnd) + 86399999, Pt = typeof Yt !== void 0 && isNaN(Yt) === !1, lt = typeof Mt !== void 0 && isNaN(Mt) === !1;
        Pt && lt ? Me = We.filter((wt) => Ye(wt[z.xAxis.dataKey]) >= Yt && Ye(wt[z.xAxis.dataKey]) <= Mt) : Pt ? Me = We.filter((wt) => Ye(wt[z.xAxis.dataKey]) >= Yt) : lt && (Me = We.filter((wt) => Ye(wt[z.xAxis.dataKey]) <= Mt));
      } else
        Me = Te || D;
    else
      Me = Te || D;
    C(Me);
    let Qe = [];
    if (z.filters && (z.filters.forEach((Ye, Yt) => {
      let Mt = [];
      Mt = Ye.orderedValues || ze(Ye.columnName, Me).sort(Ye.order === "desc" ? sk : lk), z.filters[Yt].values = Mt, z.filters[Yt].active = z.filters[Yt].active || Mt[0], z.filters[Yt].filterStyle = z.filters[Yt].filterStyle ? z.filters[Yt].filterStyle : "dropdown";
    }), Qe = xi(z.filters, Me), H(Qe)), z.xAxis.type === "date-time" && m.orientation === "horizontal" && (z.xAxis.type = "date"), z.runtime = {}, z.runtime.seriesLabels = {}, z.runtime.seriesLabelsAll = [], z.runtime.originalXAxis = z.xAxis, z.visualizationType === "Pie" ? (z.runtime.seriesKeys = (Te || We).map((Ye) => Ye[z.xAxis.dataKey]), z.runtime.seriesLabelsAll = z.runtime.seriesKeys) : z.runtime.seriesKeys = z.series ? z.series.map((Ye) => (z.runtime.seriesLabels[Ye.dataKey] = Ye.name || Ye.label || Ye.dataKey, z.runtime.seriesLabelsAll.push(Ye.name || Ye.dataKey), Ye.dataKey)) : [], z.visualizationType === "Box Plot" && z.series) {
      let Ye = Me ? Me.map((At) => At[z.xAxis.dataKey]) : We.map((At) => At[z.xAxis.dataKey]), Yt = Me ? Me.map((At) => {
        var Ht;
        return Number(At[(Ht = z == null ? void 0 : z.series[0]) == null ? void 0 : Ht.dataKey]);
      }) : We.map((At) => {
        var Ht;
        return Number(At[(Ht = z == null ? void 0 : z.series[0]) == null ? void 0 : Ht.dataKey]);
      });
      const Pt = function(At) {
        return At.filter(function(Ht, Ot, on) {
          return on.indexOf(Ht) === Ot;
        });
      }(Ye);
      let lt = [];
      const wt = [];
      if (!Pt)
        return;
      Pt.forEach((At) => {
        try {
          if (!At)
            throw new Le("No groups resolved in box plots");
          let Ht = Me ? Me.filter((g) => g[z.xAxis.dataKey] === At) : We.filter((g) => g[z.xAxis.dataKey] === At), Ot = Ht.map((g) => {
            var w;
            return Number(g[(w = z == null ? void 0 : z.series[0]) == null ? void 0 : w.dataKey]);
          }), on = Ot.sort((g, w) => g - w);
          const tn = ok(on);
          if (!Ht)
            throw new Le("boxplots dont have data yet");
          if (!wt)
            throw new Le("boxplots dont have plots yet");
          z.boxplot.firstQuartilePercentage === "" && (z.boxplot.firstQuartilePercentage = 0), z.boxplot.thirdQuartilePercentage === "" && (z.boxplot.thirdQuartilePercentage = 0);
          const nn = tn.q1, Xt = tn.q3, mn = Xt - nn, Nt = nn - (Xt - nn) * 1.5, ln = Xt + (Xt - nn) * 1.5, yn = on.filter((g) => g < Nt || g > ln);
          let In = Ot;
          In = In.filter((g) => !yn.includes(g));
          const un = Gl(Ot) || 0, bn = ql([un, nn - 1.5 * mn]);
          wt.push({
            columnCategory: At,
            columnMax: Gl([ql(Ot), nn + 1.5 * mn]),
            columnThirdQuartile: Number(Xt).toFixed(z.dataFormat.roundTo),
            columnMedian: Number(ig(Ot)).toFixed(z.dataFormat.roundTo),
            columnFirstQuartile: nn.toFixed(z.dataFormat.roundTo),
            columnMin: bn,
            columnTotal: Ot.reduce((g, w) => g + w, 0),
            columnSd: Number(ng(Ot)).toFixed(z.dataFormat.roundTo),
            columnMean: Number(ag(Ot)).toFixed(z.dataFormat.roundTo),
            columnIqr: Number(mn).toFixed(z.dataFormat.roundTo),
            columnLowerBounds: bn,
            columnUpperBounds: Gl([ql(on), nn + 1.5 * mn]),
            columnOutliers: yn,
            values: Ot,
            nonOutlierValues: In
          });
        } catch (Ht) {
          console.error("COVE: ", Ht.message);
        }
      }), lt = JSON.parse(JSON.stringify(wt)), lt.map((At) => (At.columnIqr = void 0, At.nonOutlierValues = void 0, At.columnLowerBounds = void 0, At.columnUpperBounds = void 0, null)), z.boxplot.allValues = Yt, z.boxplot.categories = Pt, z.boxplot.plots = wt, z.boxplot.tableData = lt;
    }
    z.visualizationType === "Combo" && z.series && (z.runtime.barSeriesKeys = [], z.runtime.lineSeriesKeys = [], z.runtime.areaSeriesKeys = [], z.runtime.forecastingSeriesKeys = [], z.series.forEach((Ye) => {
      Ye.type === "Area Chart" && z.runtime.areaSeriesKeys.push(Ye), Ye.type === "Forecasting" && z.runtime.forecastingSeriesKeys.push(Ye), (Ye.type === "Bar" || Ye.type === "Combo") && z.runtime.barSeriesKeys.push(Ye.dataKey), (Ye.type === "Line" || Ye.type === "dashed-sm" || Ye.type === "dashed-md" || Ye.type === "dashed-lg") && z.runtime.lineSeriesKeys.push(Ye.dataKey), Ye.type === "Combo" && (Ye.type = "Bar");
    })), z.visualizationType === "Forecasting" && z.series && (z.runtime.forecastingSeriesKeys = [], z.series.forEach((Ye) => {
      Ye.type === "Forecasting" && z.runtime.forecastingSeriesKeys.push(Ye);
    })), z.visualizationType === "Area Chart" && z.series && (z.runtime.areaSeriesKeys = [], z.series.forEach((Ye) => {
      z.runtime.areaSeriesKeys.push({ ...Ye, type: "Area Chart" });
    })), z.visualizationType === "Bar" && z.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(z.visualizationType) ? (z.runtime.xAxis = z.yAxis.yAxis ? z.yAxis.yAxis : z.yAxis, z.runtime.yAxis = z.xAxis.xAxis ? z.xAxis.xAxis : z.xAxis, z.runtime.horizontal = !1, z.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(z.visualizationType) && !Ge() ? (z.runtime.xAxis = z.xAxis, z.runtime.yAxis = z.yAxis, z.runtime.horizontal = !1, z.orientation = "vertical") : (z.runtime.xAxis = z.xAxis, z.runtime.yAxis = z.yAxis, z.runtime.horizontal = !1), z.runtime.uniqueId = Date.now(), z.runtime.editorErrorMessage = z.visualizationType === "Pie" && !z.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", z.runtime.editorErrorMessage = z.visualizationType === "Sankey" && !z.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (mt = z.legend.seriesHighlight) != null && mt.length && le((xt = z.legend) == null ? void 0 : xt.seriesHighlight), O(z);
  }, ze = (z, Te = this.state.data) => {
    const We = [];
    return Te.forEach((Me) => {
      const Qe = Me[z];
      Qe && We.includes(Qe) === !1 && We.push(Qe);
    }), We;
  }, Fe = (z, Te) => {
    let We = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, Me = parseFloat(z[We]), Qe = parseFloat(Te[We]);
    return Me < Qe ? m.sortData === "ascending" ? 1 : -1 : Me > Qe ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, Ne = new vy((z) => {
    for (let Te of z) {
      let { width: We, height: Me } = Te.contentRect, Qe = xy(We), Ze = 32, mt = 350;
      W(Qe), r && (We = We - mt), Te.target.dataset.lollipop === "true" && (We = We - 2.5), We = We - Ze, B([We, Me]);
    }
  }), ot = se.useCallback((z) => {
    z !== null && Ne.observe(z), ie(z);
  }, []);
  function Ue(z) {
    return Object.keys(z).length === 0;
  }
  se.useEffect(() => {
    yt();
  }, []), se.useEffect(() => {
    Be();
  }, [JSON.stringify(m.filters)]), se.useEffect(() => {
    ee && !Ue(m) && !q && (qy("cove_loaded", { config: m }), j(!0));
  }, [ee, m]), se.useEffect(() => {
    const z = (Te) => {
      let We = [];
      We.push(Te.detail), ne(We);
    };
    return Gy("cove_filterData", (Te) => z(Te)), () => {
      Zy("cove_filterData", z);
    };
  }, [m]), se.useEffect(() => {
    if ($ && $[0] && !$[0].hasOwnProperty("active")) {
      let Te = { ...m };
      delete Te.filters, O(Te), H(xi($, _));
    }
    if ($ && $.length > 0 && $.length > 0 && $[0].hasOwnProperty("active")) {
      let z = { ...m, filters: $ };
      O(z), H(xi($, _));
    }
  }, [$]), t && se.useEffect(() => {
    yt();
  }, [t.data]), se.useEffect(() => {
    var z;
    if (D && m.xAxis && ((z = m.runtime) != null && z.seriesKeys)) {
      const Te = ["Paired Bar", "Deviation Bar"].includes(m.visualizationType) ? m.twoColor.palette : m.palette, We = { ...rr, ...Ac };
      let Me = m.customColors || We[Te], Qe = m.runtime.seriesKeys.length, Ze;
      for (; Qe > Me.length; )
        Me = Me.concat(Me);
      Me = Me.slice(0, Qe), Ze = () => Uh({
        domain: m.runtime.seriesLabelsAll,
        range: Me,
        unknown: null
      }), R(Ze), k(!1);
    }
    m && D && m.sortData && D.sort(Fe);
  }, [m, D]);
  const et = (z) => {
    if (X.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      ut();
      return;
    }
    const Te = [...X];
    let We = z.datum;
    m.runtime.seriesLabels && m.runtime.seriesKeys.forEach((Me) => {
      m.runtime.seriesLabels[Me] === z.datum && (We = Me);
    }), Te.indexOf(We) !== -1 ? Te.splice(Te.indexOf(We), 1) : Te.push(We), le(Te);
  }, ut = () => {
    try {
      const z = Ee.current;
      if (!z)
        throw new Le("No legend available to set previous focus on.");
      z.focus();
    } catch (z) {
      console.error("COVE:", z.message);
    }
    le([]);
  }, st = m.orientation === "horizontal" ? "yAxis" : "xAxis", Ct = (z, Te = !0) => {
    let We = um(m.runtime[st].dateParseFormat)(z);
    return We || (Te && (m.runtime.editorErrorMessage = `Error parsing date "${z}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, Gt = (z) => Hd(m.runtime[st].dateDisplayFormat)(z), Wt = (z) => Hd(m.tooltips.dateDisplayFormat)(z);
  function dt(z, Te) {
    const Me = document.createElement("canvas").getContext("2d");
    if (!Me) {
      console.error("2d context not found");
      return;
    }
    return Me.font = Te || getComputedStyle(document.body).font, Math.ceil(Me.measureText(z).width);
  }
  const Rt = (z, Te, We = !1, Me, Qe, Ze) => {
    if (isNaN(z) || !z)
      return z;
    const mt = z < 0;
    (Te === void 0 || !Te) && (Te = "left"), mt && (z = Math.abs(z));
    let {
      dataFormat: { commas: xt, abbreviated: Ye, roundTo: Yt, prefix: Mt, suffix: Pt, rightRoundTo: lt, bottomRoundTo: wt, rightPrefix: At, rightSuffix: Ht, bottomPrefix: Ot, bottomSuffix: on, bottomAbbreviated: tn }
    } = m;
    String(z).indexOf(",") !== -1 && (z = z.replaceAll(",", ""));
    let nn = z, Xt = {
      useGrouping: !!xt
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Te === "left" || Te === void 0) {
      let ln;
      Ze !== void 0 ? ln = Ze ? Number(Ze) : 0 : ln = Yt ? Number(Yt) : 0, Xt = {
        useGrouping: Ze ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: ln,
        maximumFractionDigits: ln
      };
    }
    Te === "right" && (Xt = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: lt ? Number(lt) : 0,
      maximumFractionDigits: lt ? Number(lt) : 0
    });
    const mn = () => m.forestPlot.type === "Logarithmic" && !wt ? 2 : Number(wt) ? Number(wt) : 0;
    if (Te === "bottom" && (Xt = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: mn(),
      maximumFractionDigits: mn()
    }), z = cp(z), isNaN(z))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${nn}. Try reviewing your data and selections in the Data Series section.`, nn;
    if (!m.dataFormat)
      return z;
    if (m.dataCutoff) {
      let ln = cp(m.dataCutoff);
      z < ln && (z = ln);
    }
    Te === "left" && xt && Ye && We || Te === "bottom" && xt && Ye && We ? z = z : z = z.toLocaleString("en-US", Xt);
    let Nt = "";
    return Ye && Te === "left" && We && (z = Ch(parseFloat(z))), tn && Te === "bottom" && We && (z = Ch(parseFloat(z))), Me && Te === "left" ? Nt = Me + Nt : Mt && Te === "left" && (Nt += Mt), At && Te === "right" && (Nt += At), Ot && Te === "bottom" && (Nt += Ot), Nt += z, Qe && Te === "left" ? Nt += Qe : Pt && Te === "left" && (Nt += Pt), Ht && Te === "right" && (Nt += Ht), on && Te === "bottom" && (Nt += on), mt && (Nt = "-" + Nt), String(Nt);
  }, cn = {
    "Paired Bar": /* @__PURE__ */ E.createElement(Ir, null),
    Forecasting: /* @__PURE__ */ E.createElement(Ir, null),
    Bar: /* @__PURE__ */ E.createElement(Ir, null),
    Line: /* @__PURE__ */ E.createElement(Ir, null),
    Combo: /* @__PURE__ */ E.createElement(Ir, null),
    Pie: /* @__PURE__ */ E.createElement(nS, null),
    "Box Plot": /* @__PURE__ */ E.createElement(Ir, null),
    "Area Chart": /* @__PURE__ */ E.createElement(Ir, null),
    "Scatter Plot": /* @__PURE__ */ E.createElement(Ir, null),
    "Deviation Bar": /* @__PURE__ */ E.createElement(Ir, null),
    "Forest Plot": /* @__PURE__ */ E.createElement(Ir, null)
  }, Jt = () => {
    if (m.visualizationType === "Sankey" || m.visualizationType === "Forecasting" || m.visualizationType === "Forest Plot")
      return !1;
    if (m.visualizationType === "Pie") {
      if ((m == null ? void 0 : m.yAxis.dataKey) === void 0)
        return !0;
    } else if ((m == null ? void 0 : m.series) === void 0 || !((m == null ? void 0 : m.series.length) > 0))
      return !0;
    return !m.xAxis.dataKey;
  }, jt = (z, Te) => {
    if (z === null || z === "" || z === void 0)
      return "";
    if (typeof z == "string" && z.length > 0 && m.legend.type === "equalnumber")
      return z;
    let We = z, Me;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(Qe) {
      var Ze = m.columns[Qe];
      Ze.name === Te && (Me = Ze);
    }), Me === void 0 && (Me = m.type === "chart" ? m.dataFormat : m.primary, Me.useCommas = Me.commas, Me.roundToPlace = Me.roundTo ? Me.roundTo : ""), Me) {
      let Qe = !1, Ze = 0;
      Number(z) && (Me.roundToPlace >= 0 && (Qe = Me.roundToPlace ? Me.roundToPlace !== "" || Me.roundToPlace !== null : !1, Ze = Me.roundToPlace ? Number(Me.roundToPlace) : 0, Me.hasOwnProperty("roundToPlace") && Qe && (We = Number(z).toFixed(Ze))), Me.hasOwnProperty("useCommas") && Me.useCommas === !0 && (We = Number(z).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: Qe ? Ze : 0,
        maximumFractionDigits: Qe ? Ze : 5
      }))), We = (Me.prefix || "") + We + (Me.suffix || "");
    }
    return We;
  }, fn = () => {
    const z = (We) => {
      We && We.preventDefault();
      let Me = { ...m };
      delete Me.newViz, He(Me);
    }, Te = {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ E.createElement("section", { className: "waiting", style: Te }, /* @__PURE__ */ E.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ E.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ E.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ E.createElement(ls, { className: "btn", style: { margin: "1em auto" }, disabled: Jt(), onClick: (We) => z(We) }, "I'm Done")));
  }, Le = () => {
    const z = {
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
    return /* @__PURE__ */ E.createElement("section", { className: "waiting", style: z }, /* @__PURE__ */ E.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ E.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ E.createElement("p", null, m.runtime.editorErrorMessage)));
  }, ft = (z) => {
    try {
      if (!z)
        throw new Le("COVE: No rowObj in applyLegendToRow");
      if (m.type === "navigation") {
        let Te = rr[m.color] || rr.bluegreenreverse;
        return Ah(Te[3]);
      }
      return Ah();
    } catch (Te) {
      console.error("COVE: ", Te);
    }
  }, $t = (z) => {
    var Te;
    return Array.isArray(z) ? m.visualizationType === "Forecasting" ? z : (Te = m == null ? void 0 : m.xAxis) != null && Te.dataKey ? b.cleanData(z, m.xAxis.dataKey) : z : [];
  }, Dt = (z) => z;
  let St = /* @__PURE__ */ E.createElement(My, null);
  const hn = (z) => {
    if (!(!z || !z.toLowerCase))
      return z.toLowerCase().replaceAll(/ /g, "-");
  }, Lt = () => {
    var We, Me, Qe;
    const z = (re == null ? void 0 : re.position) === "bottom" || ["sm", "xs", "xxs"].includes(Z), Te = ["chart-container", "p-relative"];
    return ((We = m.legend) == null ? void 0 : We.position) === "bottom" && Te.push("bottom"), (Me = m.legend) != null && Me.hide && Te.push("legend-hidden"), G && Te.push(G), m.barHasBorder || Te.push("chart-bar--no-border"), (Qe = m.brush) != null && Qe.active && (v == null ? void 0 : v.type) === "dashboard" && (!z || m.legend.hide) && Te.push("dashboard-brush"), Te.push(...Pe), Te;
  }, en = () => {
    var We, Me;
    const z = ["subtext "], Te = (re == null ? void 0 : re.position) === "bottom" || ["sm", "xs", "xxs"].includes(Z);
    return m.isResponsiveTicks && z.push("subtext--responsive-ticks "), (We = m.brush) != null && We.active && !Te && z.push("subtext--brush-active "), (Me = m.brush) != null && Me.active && m.legend.hide && z.push("subtext--brush-active "), z;
  };
  if (!P) {
    const z = /* @__PURE__ */ E.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    St = /* @__PURE__ */ E.createElement(E.Fragment, null, r && /* @__PURE__ */ E.createElement(ik, null), /* @__PURE__ */ E.createElement(Id.Responsive, { isEditor: r }, m.newViz && /* @__PURE__ */ E.createElement(fn, null), m.newViz === void 0 && r && m.runtime && ((kn = m.runtime) == null ? void 0 : kn.editorErrorMessage) && /* @__PURE__ */ E.createElement(Le, null), !Jt() && !m.newViz && /* @__PURE__ */ E.createElement("div", { className: `cdc-chart-inner-container cove-component__content type-${hn(m.visualizationType)}`, "aria-label": lf(m), tabIndex: 0 }, /* @__PURE__ */ E.createElement(Ly, { showTitle: m.showTitle, isDashboard: a, title: Oe, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), m.filters && !$ && m.visualizationType !== "Spark Line" && /* @__PURE__ */ E.createElement(Gf, { config: m, setConfig: O, setFilteredData: H, filteredData: V, excludedData: _, filterData: xi, dimensions: U }), /* @__PURE__ */ E.createElement(Ny, { skipId: Ke, skipMessage: "Skip Over Chart Container" }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ E.createElement("section", { className: "introText" }, Ci(m.introText)), /* @__PURE__ */ E.createElement("div", { className: Lt().join(" ") }, m.visualizationType !== "Spark Line" && m.visualizationType !== "Line" && cn[m.visualizationType], m.visualizationType === "Line" && (Ge() ? cn.Bar : cn.Line), m.visualizationType === "Spark Line" && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Gf, { config: m, setConfig: O, setFilteredData: H, filteredData: V, excludedData: _, filterData: xi, dimensions: U }), (m == null ? void 0 : m.introText) && /* @__PURE__ */ E.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Ci(m.introText)), /* @__PURE__ */ E.createElement("div", { style: { height: "100px", width: "100%", ...Se } }, /* @__PURE__ */ E.createElement(Cp, null, (Te) => /* @__PURE__ */ E.createElement(NE, { width: Te.width, height: Te.height }))), ve && /* @__PURE__ */ E.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Ci(ve))), m.visualizationType === "Sankey" && /* @__PURE__ */ E.createElement(Cp, { "aria-hidden": "true" }, (Te) => /* @__PURE__ */ E.createElement(DS, { runtime: m.runtime, width: Te.width, height: Te.height })), !m.legend.hide && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" && /* @__PURE__ */ E.createElement(FE, { ref: Ee })), a && m.table && m.table.show && m.table.showDataTableLink ? z : u && u, ve && m.visualizationType !== "Spark Line" && /* @__PURE__ */ E.createElement("div", { className: en().join("") }, Ci(ve)), !1, /* @__PURE__ */ E.createElement(yd.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ E.createElement(yd.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: De }), m.table.showDownloadPdfButton && /* @__PURE__ */ E.createElement(yd.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: De })), (m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" || m.visualizationType === "Sankey" && m.table.show) && /* @__PURE__ */ E.createElement(
      Fy,
      {
        config: m,
        rawData: m.visualizationType === "Sankey" ? (we = (xn = m == null ? void 0 : m.data) == null ? void 0 : xn[0]) == null ? void 0 : we.tableData : m.table.customTableConfig ? xi(m.filters, m.data) : m.data,
        runtimeData: m.visualizationType === "Sankey" ? (tt = (at = m == null ? void 0 : m.data) == null ? void 0 : at[0]) == null ? void 0 : tt.tableData : V || _,
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: jt,
        displayGeoName: Dt,
        applyLegendToRow: ft,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: Oe,
        viewport: Z,
        tabbingId: Ke,
        colorScale: N
      }
    ), (m == null ? void 0 : m.footnotes) && /* @__PURE__ */ E.createElement("section", { className: "footnotes" }, Ci(m.footnotes)))));
  }
  const Kt = {
    brushConfig: ye,
    capitalize: (z) => z.charAt(0).toUpperCase() + z.slice(1),
    clean: $t,
    colorPalettes: rr,
    colorScale: N,
    config: m,
    currentViewport: Z,
    dashboardConfig: v,
    debugSvg: i,
    dimensions: U,
    dynamicLegendItems: J,
    excludedData: _,
    formatDate: Gt,
    formatNumber: Rt,
    formatTooltipsDate: Wt,
    getTextWidth: dt,
    getXAxisData: (z) => En(m.runtime.xAxis) ? Ct(z[m.runtime.originalXAxis.dataKey]).getTime() : z[m.runtime.originalXAxis.dataKey],
    getYAxisData: (z, Te) => z[Te],
    handleChartAriaLabels: lf,
    handleLineType: qm,
    highlight: et,
    highlightReset: ut,
    imageId: De,
    isDashboard: a,
    isDebug: i,
    isEditor: r,
    isNumber: Tc,
    legend: re,
    lineOptions: ck,
    loading: P,
    missingRequiredSections: Jt,
    outerContainerRef: ot,
    parseDate: Ct,
    rawData: D ?? {},
    seriesHighlight: X,
    setBrushConfig: de,
    setConfig: O,
    setDynamicLegendItems: oe,
    setEditing: f,
    setFilteredData: H,
    setParentConfig: l,
    setSeriesHighlight: le,
    setSharedFilter: h,
    setSharedFilterValue: y,
    tableData: V || _,
    // do not clean table data
    transformedData: $t(V || _),
    // do this right before passing to components
    twoColorPalette: Ac,
    unfilteredData: D,
    updateConfig: He
  };
  return /* @__PURE__ */ E.createElement(bt.Provider, { value: Kt }, /* @__PURE__ */ E.createElement(Id.VisualizationWrapper, { config: m, isEditor: r, currentViewport: Z, ref: ot, imageId: De, showEditorPanel: m == null ? void 0 : m.showEditorPanel }, St));
}
export {
  Hk as C
};
