import { R as l, r as F } from "./storybook-e61d95ab.es.js";
import { i as HC, g as UC, P as Jm } from "./storybook-7366772a.es.js";
import { t as qC, f as KC, g as Ca, L as eg, c as jC, b as tg, a as GC, d as YC, A as XC, M as zu, D as ZC } from "./storybook-8910ca4d.es.js";
import { p as Cy, P as G } from "./storybook-b8c9afe4.es.js";
import { d as QC } from "./storybook-460d8c0a.es.js";
import { g as Ty, a as Df, c as xo } from "./storybook-c5d32002.es.js";
import { H as Qi, T as JC } from "./storybook-826feda6.es.js";
import { e as ii, a as ln, b as cn, c as un, d as dn, A as Ji, f as ng } from "./storybook-bb6534e3.es.js";
import { _ as Et } from "./storybook-70f3d2a3.es.js";
import { E as Lr, L as eT } from "./storybook-a0c99f4a.es.js";
import { G as He, a as Yt, B as ar, i as vc, t as tT, b as Dy, d as rg, f as nT, e as rT, g as iT, h as ig, s as ko, j as Ny, k as Oy, l as Py, m as aT, n as ls, c as Cn, C as oT, I as Ti, S as ky } from "./storybook-3a8ee141.es.js";
import { p as sT, R as Ly, r as Nf } from "./storybook-975e540d.es.js";
import { i as Ry, m as Wu, c as My, j as ll, k as cl, l as ul, n as ag, o as lT, p as og, b as $y, d as Iy } from "./storybook-bedc547d.es.js";
import { i as sg } from "./storybook-9f3340e2.es.js";
import { I as lt } from "./storybook-03f28f41.es.js";
import "./storybook-4ed993c7.es.js";
import { T as he } from "./storybook-46a89ba7.es.js";
import { B as cT } from "./storybook-8d78bf52.es.js";
import { u as uT, p as dT, s as fT, a as pT, c as hT } from "./storybook-25f566e3.es.js";
import { n as lg, D as mT } from "./storybook-28c41e3d.es.js";
var Od = Math.PI, Pd = 2 * Od, Xi = 1e-6, gT = Pd - Xi;
function kd() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function cs() {
  return new kd();
}
kd.prototype = cs.prototype = {
  constructor: kd,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, n, r) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
  },
  bezierCurveTo: function(e, t, n, r, a, o) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +a) + "," + (this._y1 = +o);
  },
  arcTo: function(e, t, n, r, a) {
    e = +e, t = +t, n = +n, r = +r, a = +a;
    var o = this._x1, u = this._y1, c = n - e, d = r - t, f = o - e, h = u - t, m = f * f + h * h;
    if (a < 0)
      throw new Error("negative radius: " + a);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (m > Xi)
      if (!(Math.abs(h * c - d * f) > Xi) || !a)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var g = n - o, v = r - u, y = c * c + d * d, E = g * g + v * v, b = Math.sqrt(y), x = Math.sqrt(m), w = a * Math.tan((Od - Math.acos((y + m - E) / (2 * b * x))) / 2), A = w / x, D = w / b;
        Math.abs(A - 1) > Xi && (this._ += "L" + (e + A * f) + "," + (t + A * h)), this._ += "A" + a + "," + a + ",0,0," + +(h * g > f * v) + "," + (this._x1 = e + D * c) + "," + (this._y1 = t + D * d);
      }
  },
  arc: function(e, t, n, r, a, o) {
    e = +e, t = +t, n = +n, o = !!o;
    var u = n * Math.cos(r), c = n * Math.sin(r), d = e + u, f = t + c, h = 1 ^ o, m = o ? r - a : a - r;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + d + "," + f : (Math.abs(this._x1 - d) > Xi || Math.abs(this._y1 - f) > Xi) && (this._ += "L" + d + "," + f), n && (m < 0 && (m = m % Pd + Pd), m > gT ? this._ += "A" + n + "," + n + ",0,1," + h + "," + (e - u) + "," + (t - c) + "A" + n + "," + n + ",0,1," + h + "," + (this._x1 = d) + "," + (this._y1 = f) : m > Xi && (this._ += "A" + n + "," + n + ",0," + +(m >= Od) + "," + h + "," + (this._x1 = e + n * Math.cos(a)) + "," + (this._y1 = t + n * Math.sin(a))));
  },
  rect: function(e, t, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function yt(e) {
  return function() {
    return e;
  };
}
var cg = Math.abs, Ln = Math.atan2, Ui = Math.cos, vT = Math.max, Vu = Math.min, Br = Math.sin, ka = Math.sqrt, Rn = 1e-12, Ia = Math.PI, Ml = Ia / 2, Lo = 2 * Ia;
function yT(e) {
  return e > 1 ? 0 : e < -1 ? Ia : Math.acos(e);
}
function ug(e) {
  return e >= 1 ? Ml : e <= -1 ? -Ml : Math.asin(e);
}
function xT(e) {
  return e.innerRadius;
}
function bT(e) {
  return e.outerRadius;
}
function ET(e) {
  return e.startAngle;
}
function ST(e) {
  return e.endAngle;
}
function AT(e) {
  return e && e.padAngle;
}
function wT(e, t, n, r, a, o, u, c) {
  var d = n - e, f = r - t, h = u - a, m = c - o, g = m * d - h * f;
  if (!(g * g < Rn))
    return g = (h * (t - o) - m * (e - a)) / g, [e + g * d, t + g * f];
}
function dl(e, t, n, r, a, o, u) {
  var c = e - n, d = t - r, f = (u ? o : -o) / ka(c * c + d * d), h = f * d, m = -f * c, g = e + h, v = t + m, y = n + h, E = r + m, b = (g + y) / 2, x = (v + E) / 2, w = y - g, A = E - v, D = w * w + A * A, _ = a - o, C = g * E - y * v, $ = (A < 0 ? -1 : 1) * ka(vT(0, _ * _ * D - C * C)), O = (C * A - w * $) / D, I = (-C * w - A * $) / D, B = (C * A + w * $) / D, L = (-C * w + A * $) / D, N = O - b, z = I - x, W = B - b, M = L - x;
  return N * N + z * z > W * W + M * M && (O = B, I = L), {
    cx: O,
    cy: I,
    x01: -h,
    y01: -m,
    x11: O * (a / _ - 1),
    y11: I * (a / _ - 1)
  };
}
function _T() {
  var e = xT, t = bT, n = yt(0), r = null, a = ET, o = ST, u = AT, c = null;
  function d() {
    var f, h, m = +e.apply(this, arguments), g = +t.apply(this, arguments), v = a.apply(this, arguments) - Ml, y = o.apply(this, arguments) - Ml, E = cg(y - v), b = y > v;
    if (c || (c = f = cs()), g < m && (h = g, g = m, m = h), !(g > Rn))
      c.moveTo(0, 0);
    else if (E > Lo - Rn)
      c.moveTo(g * Ui(v), g * Br(v)), c.arc(0, 0, g, v, y, !b), m > Rn && (c.moveTo(m * Ui(y), m * Br(y)), c.arc(0, 0, m, y, v, b));
    else {
      var x = v, w = y, A = v, D = y, _ = E, C = E, $ = u.apply(this, arguments) / 2, O = $ > Rn && (r ? +r.apply(this, arguments) : ka(m * m + g * g)), I = Vu(cg(g - m) / 2, +n.apply(this, arguments)), B = I, L = I, N, z;
      if (O > Rn) {
        var W = ug(O / m * Br($)), M = ug(O / g * Br($));
        (_ -= W * 2) > Rn ? (W *= b ? 1 : -1, A += W, D -= W) : (_ = 0, A = D = (v + y) / 2), (C -= M * 2) > Rn ? (M *= b ? 1 : -1, x += M, w -= M) : (C = 0, x = w = (v + y) / 2);
      }
      var H = g * Ui(x), K = g * Br(x), re = m * Ui(D), ie = m * Br(D);
      if (I > Rn) {
        var te = g * Ui(w), ce = g * Br(w), oe = m * Ui(A), Se = m * Br(A), Te;
        if (E < Ia && (Te = wT(H, K, oe, Se, te, ce, re, ie))) {
          var ke = H - Te[0], Ie = K - Te[1], We = te - Te[0], De = ce - Te[1], le = 1 / Br(yT((ke * We + Ie * De) / (ka(ke * ke + Ie * Ie) * ka(We * We + De * De))) / 2), ee = ka(Te[0] * Te[0] + Te[1] * Te[1]);
          B = Vu(I, (m - ee) / (le - 1)), L = Vu(I, (g - ee) / (le + 1));
        }
      }
      C > Rn ? L > Rn ? (N = dl(oe, Se, H, K, g, L, b), z = dl(te, ce, re, ie, g, L, b), c.moveTo(N.cx + N.x01, N.cy + N.y01), L < I ? c.arc(N.cx, N.cy, L, Ln(N.y01, N.x01), Ln(z.y01, z.x01), !b) : (c.arc(N.cx, N.cy, L, Ln(N.y01, N.x01), Ln(N.y11, N.x11), !b), c.arc(0, 0, g, Ln(N.cy + N.y11, N.cx + N.x11), Ln(z.cy + z.y11, z.cx + z.x11), !b), c.arc(z.cx, z.cy, L, Ln(z.y11, z.x11), Ln(z.y01, z.x01), !b))) : (c.moveTo(H, K), c.arc(0, 0, g, x, w, !b)) : c.moveTo(H, K), !(m > Rn) || !(_ > Rn) ? c.lineTo(re, ie) : B > Rn ? (N = dl(re, ie, te, ce, m, -B, b), z = dl(H, K, oe, Se, m, -B, b), c.lineTo(N.cx + N.x01, N.cy + N.y01), B < I ? c.arc(N.cx, N.cy, B, Ln(N.y01, N.x01), Ln(z.y01, z.x01), !b) : (c.arc(N.cx, N.cy, B, Ln(N.y01, N.x01), Ln(N.y11, N.x11), !b), c.arc(0, 0, m, Ln(N.cy + N.y11, N.cx + N.x11), Ln(z.cy + z.y11, z.cx + z.x11), b), c.arc(z.cx, z.cy, B, Ln(z.y11, z.x11), Ln(z.y01, z.x01), !b))) : c.arc(0, 0, m, D, A, b);
    }
    if (c.closePath(), f)
      return c = null, f + "" || null;
  }
  return d.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, h = (+a.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Ia / 2;
    return [Ui(h) * f, Br(h) * f];
  }, d.innerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : yt(+f), d) : e;
  }, d.outerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : yt(+f), d) : t;
  }, d.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : yt(+f), d) : n;
  }, d.padRadius = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : yt(+f), d) : r;
  }, d.startAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : yt(+f), d) : a;
  }, d.endAngle = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : yt(+f), d) : o;
  }, d.padAngle = function(f) {
    return arguments.length ? (u = typeof f == "function" ? f : yt(+f), d) : u;
  }, d.context = function(f) {
    return arguments.length ? (c = f ?? null, d) : c;
  }, d;
}
function By(e) {
  this._context = e;
}
By.prototype = {
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
function yc(e) {
  return new By(e);
}
function Fy(e) {
  return e[0];
}
function zy(e) {
  return e[1];
}
function Wy() {
  var e = Fy, t = zy, n = yt(!0), r = null, a = yc, o = null;
  function u(c) {
    var d, f = c.length, h, m = !1, g;
    for (r == null && (o = a(g = cs())), d = 0; d <= f; ++d)
      !(d < f && n(h = c[d], d, c)) === m && ((m = !m) ? o.lineStart() : o.lineEnd()), m && o.point(+e(h, d, c), +t(h, d, c));
    if (g)
      return o = null, g + "" || null;
  }
  return u.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : yt(+c), u) : e;
  }, u.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : yt(+c), u) : t;
  }, u.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : yt(!!c), u) : n;
  }, u.curve = function(c) {
    return arguments.length ? (a = c, r != null && (o = a(r)), u) : a;
  }, u.context = function(c) {
    return arguments.length ? (c == null ? r = o = null : o = a(r = c), u) : r;
  }, u;
}
function CT() {
  var e = Fy, t = null, n = yt(0), r = zy, a = yt(!0), o = null, u = yc, c = null;
  function d(h) {
    var m, g, v, y = h.length, E, b = !1, x, w = new Array(y), A = new Array(y);
    for (o == null && (c = u(x = cs())), m = 0; m <= y; ++m) {
      if (!(m < y && a(E = h[m], m, h)) === b)
        if (b = !b)
          g = m, c.areaStart(), c.lineStart();
        else {
          for (c.lineEnd(), c.lineStart(), v = m - 1; v >= g; --v)
            c.point(w[v], A[v]);
          c.lineEnd(), c.areaEnd();
        }
      b && (w[m] = +e(E, m, h), A[m] = +n(E, m, h), c.point(t ? +t(E, m, h) : w[m], r ? +r(E, m, h) : A[m]));
    }
    if (x)
      return c = null, x + "" || null;
  }
  function f() {
    return Wy().defined(a).curve(u).context(o);
  }
  return d.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : yt(+h), t = null, d) : e;
  }, d.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : yt(+h), d) : e;
  }, d.x1 = function(h) {
    return arguments.length ? (t = h == null ? null : typeof h == "function" ? h : yt(+h), d) : t;
  }, d.y = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : yt(+h), r = null, d) : n;
  }, d.y0 = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : yt(+h), d) : n;
  }, d.y1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : yt(+h), d) : r;
  }, d.lineX0 = d.lineY0 = function() {
    return f().x(e).y(n);
  }, d.lineY1 = function() {
    return f().x(e).y(r);
  }, d.lineX1 = function() {
    return f().x(t).y(n);
  }, d.defined = function(h) {
    return arguments.length ? (a = typeof h == "function" ? h : yt(!!h), d) : a;
  }, d.curve = function(h) {
    return arguments.length ? (u = h, o != null && (c = u(o)), d) : u;
  }, d.context = function(h) {
    return arguments.length ? (h == null ? o = c = null : c = u(o = h), d) : o;
  }, d;
}
function TT(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function DT(e) {
  return e;
}
function NT() {
  var e = DT, t = TT, n = null, r = yt(0), a = yt(Lo), o = yt(0);
  function u(c) {
    var d, f = c.length, h, m, g = 0, v = new Array(f), y = new Array(f), E = +r.apply(this, arguments), b = Math.min(Lo, Math.max(-Lo, a.apply(this, arguments) - E)), x, w = Math.min(Math.abs(b) / f, o.apply(this, arguments)), A = w * (b < 0 ? -1 : 1), D;
    for (d = 0; d < f; ++d)
      (D = y[v[d] = d] = +e(c[d], d, c)) > 0 && (g += D);
    for (t != null ? v.sort(function(_, C) {
      return t(y[_], y[C]);
    }) : n != null && v.sort(function(_, C) {
      return n(c[_], c[C]);
    }), d = 0, m = g ? (b - f * A) / g : 0; d < f; ++d, E = x)
      h = v[d], D = y[h], x = E + (D > 0 ? D * m : 0) + A, y[h] = {
        data: c[h],
        index: d,
        value: D,
        startAngle: E,
        endAngle: x,
        padAngle: w
      };
    return y;
  }
  return u.value = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : yt(+c), u) : e;
  }, u.sortValues = function(c) {
    return arguments.length ? (t = c, n = null, u) : t;
  }, u.sort = function(c) {
    return arguments.length ? (n = c, t = null, u) : n;
  }, u.startAngle = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : yt(+c), u) : r;
  }, u.endAngle = function(c) {
    return arguments.length ? (a = typeof c == "function" ? c : yt(+c), u) : a;
  }, u.padAngle = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : yt(+c), u) : o;
  }, u;
}
var dg = Array.prototype.slice;
const OT = {
  draw: function(e, t) {
    var n = Math.sqrt(t / Ia);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, Lo);
  }
};
var Vy = Math.sqrt(1 / 3), PT = Vy * 2;
const kT = {
  draw: function(e, t) {
    var n = Math.sqrt(t / PT), r = n * Vy;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
};
function LT() {
  var e = yt(OT), t = yt(64), n = null;
  function r() {
    var a;
    if (n || (n = a = cs()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), a)
      return n = null, a + "" || null;
  }
  return r.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : yt(a), r) : e;
  }, r.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : yt(+a), r) : t;
  }, r.context = function(a) {
    return arguments.length ? (n = a ?? null, r) : n;
  }, r;
}
function Di() {
}
function $l(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function xc(e) {
  this._context = e;
}
xc.prototype = {
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
        $l(this, this._x1, this._y1);
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
        $l(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function RT(e) {
  return new xc(e);
}
function Hy(e) {
  this._context = e;
}
Hy.prototype = {
  areaStart: Di,
  areaEnd: Di,
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
        $l(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function MT(e) {
  return new Hy(e);
}
function Uy(e) {
  this._context = e;
}
Uy.prototype = {
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
        $l(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function $T(e) {
  return new Uy(e);
}
function qy(e, t) {
  this._basis = new xc(e), this._beta = t;
}
qy.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var r = e[0], a = t[0], o = e[n] - r, u = t[n] - a, c = -1, d; ++c <= n; )
        d = c / n, this._basis.point(
          this._beta * e[c] + (1 - this._beta) * (r + d * o),
          this._beta * t[c] + (1 - this._beta) * (a + d * u)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const IT = function e(t) {
  function n(r) {
    return t === 1 ? new xc(r) : new qy(r, t);
  }
  return n.beta = function(r) {
    return e(+r);
  }, n;
}(0.85);
function Il(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function Of(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Of.prototype = {
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
        Il(this, this._x1, this._y1);
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
        Il(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const BT = function e(t) {
  function n(r) {
    return new Of(r, t);
  }
  return n.tension = function(r) {
    return e(+r);
  }, n;
}(0);
function Pf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Pf.prototype = {
  areaStart: Di,
  areaEnd: Di,
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
        Il(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const FT = function e(t) {
  function n(r) {
    return new Pf(r, t);
  }
  return n.tension = function(r) {
    return e(+r);
  }, n;
}(0);
function kf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
kf.prototype = {
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
        Il(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const zT = function e(t) {
  function n(r) {
    return new kf(r, t);
  }
  return n.tension = function(r) {
    return e(+r);
  }, n;
}(0);
function Lf(e, t, n) {
  var r = e._x1, a = e._y1, o = e._x2, u = e._y2;
  if (e._l01_a > Rn) {
    var c = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, d = 3 * e._l01_a * (e._l01_a + e._l12_a);
    r = (r * c - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / d, a = (a * c - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / d;
  }
  if (e._l23_a > Rn) {
    var f = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, h = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * f + e._x1 * e._l23_2a - t * e._l12_2a) / h, u = (u * f + e._y1 * e._l23_2a - n * e._l12_2a) / h;
  }
  e._context.bezierCurveTo(r, a, o, u, e._x2, e._y2);
}
function Ky(e, t) {
  this._context = e, this._alpha = t;
}
Ky.prototype = {
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
        Lf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const WT = function e(t) {
  function n(r) {
    return t ? new Ky(r, t) : new Of(r, 0);
  }
  return n.alpha = function(r) {
    return e(+r);
  }, n;
}(0.5);
function jy(e, t) {
  this._context = e, this._alpha = t;
}
jy.prototype = {
  areaStart: Di,
  areaEnd: Di,
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
        Lf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const VT = function e(t) {
  function n(r) {
    return t ? new jy(r, t) : new Pf(r, 0);
  }
  return n.alpha = function(r) {
    return e(+r);
  }, n;
}(0.5);
function Gy(e, t) {
  this._context = e, this._alpha = t;
}
Gy.prototype = {
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
        Lf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const HT = function e(t) {
  function n(r) {
    return t ? new Gy(r, t) : new kf(r, 0);
  }
  return n.alpha = function(r) {
    return e(+r);
  }, n;
}(0.5);
function Yy(e) {
  this._context = e;
}
Yy.prototype = {
  areaStart: Di,
  areaEnd: Di,
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
function Xy(e) {
  return new Yy(e);
}
function fg(e) {
  return e < 0 ? -1 : 1;
}
function pg(e, t, n) {
  var r = e._x1 - e._x0, a = t - e._x1, o = (e._y1 - e._y0) / (r || a < 0 && -0), u = (n - e._y1) / (a || r < 0 && -0), c = (o * a + u * r) / (r + a);
  return (fg(o) + fg(u)) * Math.min(Math.abs(o), Math.abs(u), 0.5 * Math.abs(c)) || 0;
}
function hg(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Hu(e, t, n) {
  var r = e._x0, a = e._y0, o = e._x1, u = e._y1, c = (o - r) / 3;
  e._context.bezierCurveTo(r + c, a + c * t, o - c, u - c * n, o, u);
}
function Bl(e) {
  this._context = e;
}
Bl.prototype = {
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
        Hu(this, this._t0, hg(this, this._t0));
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
          this._point = 3, Hu(this, hg(this, n = pg(this, e, t)), n);
          break;
        default:
          Hu(this, this._t0, n = pg(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Zy(e) {
  this._context = new Qy(e);
}
(Zy.prototype = Object.create(Bl.prototype)).point = function(e, t) {
  Bl.prototype.point.call(this, t, e);
};
function Qy(e) {
  this._context = e;
}
Qy.prototype = {
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
function Dl(e) {
  return new Bl(e);
}
function UT(e) {
  return new Zy(e);
}
function Jy(e) {
  this._context = e;
}
Jy.prototype = {
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
        for (var r = mg(e), a = mg(t), o = 0, u = 1; u < n; ++o, ++u)
          this._context.bezierCurveTo(r[0][o], a[0][o], r[1][o], a[1][o], e[u], t[u]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function mg(e) {
  var t, n = e.length - 1, r, a = new Array(n), o = new Array(n), u = new Array(n);
  for (a[0] = 0, o[0] = 2, u[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    a[t] = 1, o[t] = 4, u[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[n - 1] = 2, o[n - 1] = 7, u[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
    r = a[t] / o[t - 1], o[t] -= r, u[t] -= r * u[t - 1];
  for (a[n - 1] = u[n - 1] / o[n - 1], t = n - 2; t >= 0; --t)
    a[t] = (u[t] - a[t + 1]) / o[t];
  for (o[n - 1] = (e[n] + a[n - 1]) / 2, t = 0; t < n - 1; ++t)
    o[t] = 2 * e[t + 1] - a[t + 1];
  return [a, o];
}
function qT(e) {
  return new Jy(e);
}
function bc(e, t) {
  this._context = e, this._t = t;
}
bc.prototype = {
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
function KT(e) {
  return new bc(e, 0.5);
}
function jT(e) {
  return new bc(e, 0);
}
function GT(e) {
  return new bc(e, 1);
}
function Ba(e, t) {
  if ((u = e.length) > 1)
    for (var n = 1, r, a, o = e[t[0]], u, c = o.length; n < u; ++n)
      for (a = o, o = e[t[n]], r = 0; r < c; ++r)
        o[r][1] += o[r][0] = isNaN(a[r][1]) ? a[r][0] : a[r][1];
}
function Fa(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function YT(e, t) {
  return e[t];
}
function Rf() {
  var e = yt([]), t = Fa, n = Ba, r = YT;
  function a(o) {
    var u = e.apply(this, arguments), c, d = o.length, f = u.length, h = new Array(f), m;
    for (c = 0; c < f; ++c) {
      for (var g = u[c], v = h[c] = new Array(d), y = 0, E; y < d; ++y)
        v[y] = E = [0, +r(o[y], g, y, o)], E.data = o[y];
      v.key = g;
    }
    for (c = 0, m = t(h); c < f; ++c)
      h[m[c]].index = c;
    return n(h, m), h;
  }
  return a.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : yt(dg.call(o)), a) : e;
  }, a.value = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : yt(+o), a) : r;
  }, a.order = function(o) {
    return arguments.length ? (t = o == null ? Fa : typeof o == "function" ? o : yt(dg.call(o)), a) : t;
  }, a.offset = function(o) {
    return arguments.length ? (n = o ?? Ba, a) : n;
  }, a;
}
function XT(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, a = 0, o = e[0].length, u; a < o; ++a) {
      for (u = n = 0; n < r; ++n)
        u += e[n][a][1] || 0;
      if (u)
        for (n = 0; n < r; ++n)
          e[n][a][1] /= u;
    }
    Ba(e, t);
  }
}
function ZT(e, t) {
  if ((d = e.length) > 0)
    for (var n, r = 0, a, o, u, c, d, f = e[t[0]].length; r < f; ++r)
      for (u = c = 0, n = 0; n < d; ++n)
        (o = (a = e[t[n]][r])[1] - a[0]) > 0 ? (a[0] = u, a[1] = u += o) : o < 0 ? (a[1] = c, a[0] = c += o) : (a[0] = 0, a[1] = o);
}
function QT(e, t) {
  if ((a = e.length) > 0) {
    for (var n = 0, r = e[t[0]], a, o = r.length; n < o; ++n) {
      for (var u = 0, c = 0; u < a; ++u)
        c += e[u][n][1] || 0;
      r[n][1] += r[n][0] = -c / 2;
    }
    Ba(e, t);
  }
}
function JT(e, t) {
  if (!(!((u = e.length) > 0) || !((o = (a = e[t[0]]).length) > 0))) {
    for (var n = 0, r = 1, a, o, u; r < o; ++r) {
      for (var c = 0, d = 0, f = 0; c < u; ++c) {
        for (var h = e[t[c]], m = h[r][1] || 0, g = h[r - 1][1] || 0, v = (m - g) / 2, y = 0; y < c; ++y) {
          var E = e[t[y]], b = E[r][1] || 0, x = E[r - 1][1] || 0;
          v += b - x;
        }
        d += m, f += v * m;
      }
      a[r - 1][1] += a[r - 1][0] = n, d && (n -= f / d);
    }
    a[r - 1][1] += a[r - 1][0] = n, Ba(e, t);
  }
}
function eD(e) {
  var t = e.map(tD);
  return Fa(e).sort(function(n, r) {
    return t[n] - t[r];
  });
}
function tD(e) {
  for (var t = -1, n = 0, r = e.length, a, o = -1 / 0; ++t < r; )
    (a = +e[t][1]) > o && (o = a, n = t);
  return n;
}
function ex(e) {
  var t = e.map(tx);
  return Fa(e).sort(function(n, r) {
    return t[n] - t[r];
  });
}
function tx(e) {
  for (var t = 0, n = -1, r = e.length, a; ++n < r; )
    (a = +e[n][1]) && (t += a);
  return t;
}
function nD(e) {
  return ex(e).reverse();
}
function rD(e) {
  var t = e.length, n, r, a = e.map(tx), o = eD(e), u = 0, c = 0, d = [], f = [];
  for (n = 0; n < t; ++n)
    r = o[n], u < c ? (u += a[r], d.push(r)) : (c += a[r], f.push(r));
  return f.reverse().concat(d);
}
function iD(e) {
  return Fa(e).reverse();
}
function qt(e, t) {
  e(t);
}
var gg = {
  ascending: ex,
  descending: nD,
  insideout: rD,
  none: Fa,
  reverse: iD
};
function Mf(e) {
  return e && gg[e] || gg.none;
}
var vg = {
  expand: XT,
  diverging: ZT,
  none: Ba,
  silhouette: QT,
  wiggle: JT
};
function $f(e) {
  return e && vg[e] || vg.none;
}
function aD(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, r = t.outerRadius, a = t.cornerRadius, o = t.startAngle, u = t.endAngle, c = t.padAngle, d = t.padRadius, f = _T();
  return n != null && qt(f.innerRadius, n), r != null && qt(f.outerRadius, r), a != null && qt(f.cornerRadius, a), o != null && qt(f.startAngle, o), u != null && qt(f.endAngle, u), c != null && qt(f.padAngle, c), d != null && qt(f.padRadius, d), f;
}
function If(e) {
  var t = e === void 0 ? {} : e, n = t.x, r = t.x0, a = t.x1, o = t.y, u = t.y0, c = t.y1, d = t.defined, f = t.curve, h = CT();
  return n && qt(h.x, n), r && qt(h.x0, r), a && qt(h.x1, a), o && qt(h.y, o), u && qt(h.y0, u), c && qt(h.y1, c), d && h.defined(d), f && h.curve(f), h;
}
function oD(e) {
  var t = e === void 0 ? {} : e, n = t.x, r = t.y, a = t.defined, o = t.curve, u = Wy();
  return n && qt(u.x, n), r && qt(u.y, r), a && u.defined(a), o && u.curve(o), u;
}
function sD(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, r = t.endAngle, a = t.padAngle, o = t.value, u = t.sort, c = t.sortValues, d = NT();
  return (u === null || u != null) && d.sort(u), (c === null || c != null) && d.sortValues(c), o != null && d.value(o), a != null && qt(d.padAngle, a), n != null && qt(d.startAngle, n), r != null && qt(d.endAngle, r), d;
}
function lD(e) {
  var t = e.keys, n = e.value, r = e.order, a = e.offset, o = Rf();
  return t && o.keys(t), n && qt(o.value, n), r && o.order(Mf(r)), a && o.offset($f(a)), o;
}
var cD = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function Ld() {
  return Ld = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ld.apply(this, arguments);
}
function uD(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function dD(e) {
  var t = e.className, n = e.top, r = e.left, a = e.data, o = a === void 0 ? [] : a, u = e.centroid, c = e.innerRadius, d = c === void 0 ? 0 : c, f = e.outerRadius, h = e.cornerRadius, m = e.startAngle, g = e.endAngle, v = e.padAngle, y = e.padRadius, E = e.pieSort, b = e.pieSortValues, x = e.pieValue, w = e.children, A = e.fill, D = A === void 0 ? "" : A, _ = uD(e, cD), C = aD({
    innerRadius: d,
    outerRadius: f,
    cornerRadius: h,
    padRadius: y
  }), $ = sD({
    startAngle: m,
    endAngle: g,
    padAngle: v,
    value: x,
    sort: E,
    sortValues: b
  }), O = $(o);
  return w ? /* @__PURE__ */ l.createElement(l.Fragment, null, w({
    arcs: O,
    path: C,
    pie: $
  })) : /* @__PURE__ */ l.createElement(He, {
    className: "visx-pie-arcs-group",
    top: n,
    left: r
  }, O.map(function(I, B) {
    return /* @__PURE__ */ l.createElement("g", {
      key: "pie-arc-" + B
    }, /* @__PURE__ */ l.createElement("path", Ld({
      className: Yt("visx-pie-arc", t),
      d: C(I) || "",
      fill: D == null || typeof D == "string" ? D : D(I)
    }, _)), u == null ? void 0 : u(C.centroid(I), I));
  }));
}
var fD = ["from", "to", "fill", "className", "innerRef"];
function Rd() {
  return Rd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Rd.apply(this, arguments);
}
function pD(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Mt(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, r = e.to, a = r === void 0 ? {
    x: 1,
    y: 1
  } : r, o = e.fill, u = o === void 0 ? "transparent" : o, c = e.className, d = e.innerRef, f = pD(e, fD), h = n.x === a.x || n.y === a.y;
  return /* @__PURE__ */ l.createElement("line", Rd({
    ref: d,
    className: Yt("visx-line", c),
    x1: n.x,
    y1: n.y,
    x2: a.x,
    y2: a.y,
    fill: u,
    shapeRendering: h ? "crispEdges" : "auto"
  }, f));
}
var hD = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function Md() {
  return Md = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Md.apply(this, arguments);
}
function mD(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function aa(e) {
  var t = e.children, n = e.data, r = n === void 0 ? [] : n, a = e.x, o = e.y, u = e.fill, c = u === void 0 ? "transparent" : u, d = e.className, f = e.curve, h = e.innerRef, m = e.defined, g = m === void 0 ? function() {
    return !0;
  } : m, v = mD(e, hD), y = oD({
    x: a,
    y: o,
    defined: g,
    curve: f
  });
  return t ? /* @__PURE__ */ l.createElement(l.Fragment, null, t({
    path: y
  })) : /* @__PURE__ */ l.createElement("path", Md({
    ref: h,
    className: Yt("visx-linepath", d),
    d: y(r) || "",
    fill: c,
    strokeLinecap: "round"
  }, v));
}
var gD = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
function $d() {
  return $d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $d.apply(this, arguments);
}
function vD(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function yD(e) {
  var t = e.children, n = e.x, r = e.x0, a = e.x1, o = e.y, u = e.y0, c = e.y1, d = e.data, f = d === void 0 ? [] : d, h = e.defined, m = h === void 0 ? function() {
    return !0;
  } : h, g = e.className, v = e.curve, y = e.innerRef, E = vD(e, gD), b = If({
    x: n,
    x0: r,
    x1: a,
    y: o,
    y0: u,
    y1: c,
    defined: m,
    curve: v
  });
  return t ? /* @__PURE__ */ l.createElement(l.Fragment, null, t({
    path: b
  })) : /* @__PURE__ */ l.createElement("path", $d({
    ref: y,
    className: Yt("visx-area", g),
    d: b(f) || ""
  }, E));
}
var xD = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
function Id() {
  return Id = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Id.apply(this, arguments);
}
function bD(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function ED(e) {
  var t = e.x, n = e.x0, r = e.x1, a = e.y, o = e.y1, u = e.y0, c = e.yScale, d = e.data, f = d === void 0 ? [] : d, h = e.defined, m = h === void 0 ? function() {
    return !0;
  } : h, g = e.className, v = e.curve, y = e.innerRef, E = e.children, b = bD(e, xD), x = If({
    x: t,
    x0: n,
    x1: r,
    defined: m,
    curve: v
  });
  return u == null ? x.y0(c.range()[0]) : qt(x.y0, u), a && !o && qt(x.y1, a), o && !a && qt(x.y1, o), E ? /* @__PURE__ */ l.createElement(l.Fragment, null, E({
    path: x
  })) : /* @__PURE__ */ l.createElement("path", Id({
    ref: y,
    className: Yt("visx-area-closed", g),
    d: x(f) || ""
  }, b));
}
var SD = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function Bd() {
  return Bd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bd.apply(this, arguments);
}
function AD(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function wD(e) {
  var t = e.className, n = e.top, r = e.left, a = e.keys, o = e.data, u = e.curve, c = e.defined, d = e.x, f = e.x0, h = e.x1, m = e.y0, g = e.y1, v = e.value, y = e.order, E = e.offset, b = e.color, x = e.children, w = AD(e, SD), A = lD({
    keys: a,
    value: v,
    order: y,
    offset: E
  }), D = If({
    x: d,
    x0: f,
    x1: h,
    y0: m,
    y1: g,
    curve: u,
    defined: c
  }), _ = A(o);
  return x ? /* @__PURE__ */ l.createElement(l.Fragment, null, x({
    stacks: _,
    path: D,
    stack: A
  })) : /* @__PURE__ */ l.createElement(He, {
    top: n,
    left: r
  }, _.map(function(C, $) {
    return /* @__PURE__ */ l.createElement("path", Bd({
      className: Yt("visx-stack", t),
      key: "stack-" + $ + "-" + (C.key || ""),
      d: D(C) || "",
      fill: b == null ? void 0 : b(C.key, $)
    }, w));
  }));
}
var _D = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function Fl() {
  return Fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Fl.apply(this, arguments);
}
function CD(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function TD(e) {
  var t = e.className, n = e.top, r = e.left, a = e.keys, o = e.data, u = e.curve, c = e.defined, d = e.x, f = e.x0, h = e.x1, m = e.y0, g = e.y1, v = e.value, y = e.order, E = e.offset, b = e.color, x = e.children, w = CD(e, _D);
  return /* @__PURE__ */ l.createElement(wD, Fl({
    className: t,
    top: n,
    left: r,
    keys: a,
    data: o,
    curve: u,
    defined: c,
    x: d,
    x0: f,
    x1: h,
    y0: m,
    y1: g,
    value: v,
    order: y,
    offset: E,
    color: b
  }, w), x || function(A) {
    var D = A.stacks, _ = A.path;
    return D.map(function(C, $) {
      return /* @__PURE__ */ l.createElement("path", Fl({
        className: Yt("visx-area-stack", t),
        key: "area-stack-" + $ + "-" + (C.key || ""),
        d: _(C) || "",
        fill: b == null ? void 0 : b(C.key, $)
      }, w));
    });
  });
}
function Bf(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var DD = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
function Fd() {
  return Fd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Fd.apply(this, arguments);
}
function ND(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function nx(e) {
  var t = e.data, n = e.className, r = e.top, a = e.left, o = e.x0, u = e.x0Scale, c = e.x1Scale, d = e.yScale, f = e.color, h = e.keys, m = e.height, g = e.children, v = ND(e, DD), y = Bf(c), E = t.map(function(b, x) {
    return {
      index: x,
      x0: u(o(b)),
      bars: h.map(function(w, A) {
        var D = b[w];
        return {
          index: A,
          key: w,
          value: D,
          width: y,
          x: c(w) || 0,
          y: d(D) || 0,
          color: f(w, A),
          height: m - (d(D) || 0)
        };
      })
    };
  });
  return g ? /* @__PURE__ */ l.createElement(l.Fragment, null, g(E)) : /* @__PURE__ */ l.createElement(He, {
    className: Yt("visx-bar-group", n),
    top: r,
    left: a
  }, E.map(function(b) {
    return /* @__PURE__ */ l.createElement(He, {
      key: "bar-group-" + b.index + "-" + b.x0,
      left: b.x0
    }, b.bars.map(function(x) {
      return /* @__PURE__ */ l.createElement(ar, Fd({
        key: "bar-group-bar-" + b.index + "-" + x.index + "-" + x.value + "-" + x.key,
        x: x.x,
        y: x.y,
        width: x.width,
        height: x.height,
        fill: x.color
      }, v));
    }));
  }));
}
function rx(e) {
  return e == null ? void 0 : e[0];
}
function ix(e) {
  return e == null ? void 0 : e[1];
}
var OD = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function zd() {
  return zd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zd.apply(this, arguments);
}
function PD(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function kD(e) {
  var t = e.data, n = e.className, r = e.top, a = e.left, o = e.x, u = e.y0, c = u === void 0 ? rx : u, d = e.y1, f = d === void 0 ? ix : d, h = e.xScale, m = e.yScale, g = e.color, v = e.keys, y = e.value, E = e.order, b = e.offset, x = e.children, w = PD(e, OD), A = Rf();
  v && A.keys(v), y && qt(A.value, y), E && A.order(Mf(E)), b && A.offset($f(b));
  var D = A(t), _ = Bf(h), C = D.map(function($, O) {
    var I = $.key;
    return {
      index: O,
      key: I,
      bars: $.map(function(B, L) {
        var N = (m(c(B)) || 0) - (m(f(B)) || 0), z = m(f(B)), W = "bandwidth" in h ? h(o(B.data)) : Math.max((h(o(B.data)) || 0) - _ / 2);
        return {
          bar: B,
          key: I,
          index: L,
          height: N,
          width: _,
          x: W || 0,
          y: z || 0,
          color: g($.key, L)
        };
      })
    };
  });
  return x ? /* @__PURE__ */ l.createElement(l.Fragment, null, x(C)) : /* @__PURE__ */ l.createElement(He, {
    className: Yt("visx-bar-stack", n),
    top: r,
    left: a
  }, C.map(function($) {
    return $.bars.map(function(O) {
      return /* @__PURE__ */ l.createElement(ar, zd({
        key: "bar-stack-" + $.index + "-" + O.index,
        x: O.x,
        y: O.y,
        height: O.height,
        width: O.width,
        fill: O.color
      }, w));
    });
  }));
}
var LD = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function Wd() {
  return Wd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wd.apply(this, arguments);
}
function RD(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function MD(e) {
  var t = e.data, n = e.className, r = e.top, a = e.left, o = e.y, u = e.x0, c = u === void 0 ? rx : u, d = e.x1, f = d === void 0 ? ix : d, h = e.xScale, m = e.yScale, g = e.color, v = e.keys, y = e.value, E = e.order, b = e.offset, x = e.children, w = RD(e, LD), A = Rf();
  v && A.keys(v), y && qt(A.value, y), E && A.order(Mf(E)), b && A.offset($f(b));
  var D = A(t), _ = Bf(m), C = D.map(function($, O) {
    var I = $.key;
    return {
      index: O,
      key: I,
      bars: $.map(function(B, L) {
        var N = (h(f(B)) || 0) - (h(c(B)) || 0), z = h(c(B)), W = "bandwidth" in m ? m(o(B.data)) : Math.max((m(o(B.data)) || 0) - N / 2);
        return {
          bar: B,
          key: I,
          index: L,
          height: _,
          width: N,
          x: z || 0,
          y: W || 0,
          color: g($.key, L)
        };
      })
    };
  });
  return x ? /* @__PURE__ */ l.createElement(l.Fragment, null, x(C)) : /* @__PURE__ */ l.createElement(He, {
    className: Yt("visx-bar-stack-horizontal", n),
    top: r,
    left: a
  }, C.map(function($) {
    return $.bars.map(function(O) {
      return /* @__PURE__ */ l.createElement(ar, Wd({
        key: "bar-stack-" + $.index + "-" + O.index,
        x: O.x,
        y: O.y,
        height: O.height,
        width: O.width,
        fill: O.color
      }, w));
    });
  }));
}
class yg extends Map {
  constructor(t, n = BD) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [r, a] of t)
        this.set(r, a);
  }
  get(t) {
    return super.get(xg(this, t));
  }
  has(t) {
    return super.has(xg(this, t));
  }
  set(t, n) {
    return super.set($D(this, t), n);
  }
  delete(t) {
    return super.delete(ID(this, t));
  }
}
function xg({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function $D({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function ID({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function BD(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function FD(e, t, n) {
  e = +e, t = +t, n = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +n;
  for (var r = -1, a = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(a); ++r < a; )
    o[r] = e + r * n;
  return o;
}
const bg = Symbol("implicit");
function Ff() {
  var e = new yg(), t = [], n = [], r = bg;
  function a(o) {
    let u = e.get(o);
    if (u === void 0) {
      if (r !== bg)
        return r;
      e.set(o, u = t.push(o) - 1);
    }
    return n[u % n.length];
  }
  return a.domain = function(o) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new yg();
    for (const u of o)
      e.has(u) || e.set(u, t.push(u) - 1);
    return a;
  }, a.range = function(o) {
    return arguments.length ? (n = Array.from(o), a) : n.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (r = o, a) : r;
  }, a.copy = function() {
    return Ff(t, n).unknown(r);
  }, vc.apply(a, arguments), a;
}
function zf() {
  var e = Ff().unknown(void 0), t = e.domain, n = e.range, r = 0, a = 1, o, u, c = !1, d = 0, f = 0, h = 0.5;
  delete e.unknown;
  function m() {
    var g = t().length, v = a < r, y = v ? a : r, E = v ? r : a;
    o = (E - y) / Math.max(1, g - d + f * 2), c && (o = Math.floor(o)), y += (E - y - o * (g - d)) * h, u = o * (1 - d), c && (y = Math.round(y), u = Math.round(u));
    var b = FD(g).map(function(x) {
      return y + o * x;
    });
    return n(v ? b.reverse() : b);
  }
  return e.domain = function(g) {
    return arguments.length ? (t(g), m()) : t();
  }, e.range = function(g) {
    return arguments.length ? ([r, a] = g, r = +r, a = +a, m()) : [r, a];
  }, e.rangeRound = function(g) {
    return [r, a] = g, r = +r, a = +a, c = !0, m();
  }, e.bandwidth = function() {
    return u;
  }, e.step = function() {
    return o;
  }, e.round = function(g) {
    return arguments.length ? (c = !!g, m()) : c;
  }, e.padding = function(g) {
    return arguments.length ? (d = Math.min(1, f = +g), m()) : d;
  }, e.paddingInner = function(g) {
    return arguments.length ? (d = Math.min(1, g), m()) : d;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (f = +g, m()) : f;
  }, e.align = function(g) {
    return arguments.length ? (h = Math.max(0, Math.min(1, g)), m()) : h;
  }, e.copy = function() {
    return zf(t(), [r, a]).round(c).paddingInner(d).paddingOuter(f).align(h);
  }, vc.apply(m(), arguments);
}
function ax(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return ax(t());
  }, e;
}
function zD() {
  return ax(zf.apply(null, arguments).paddingInner(1));
}
function ox(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, a = e[n], o = e[r], u;
  return o < a && (u = n, n = r, r = u, u = a, a = o, o = u), e[n] = t.floor(a), e[r] = t.ceil(o), e;
}
function Eg(e) {
  return Math.log(e);
}
function Sg(e) {
  return Math.exp(e);
}
function WD(e) {
  return -Math.log(-e);
}
function VD(e) {
  return -Math.exp(-e);
}
function HD(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function UD(e) {
  return e === 10 ? HD : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function qD(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Ag(e) {
  return (t, n) => -e(-t, n);
}
function KD(e) {
  const t = e(Eg, Sg), n = t.domain;
  let r = 10, a, o;
  function u() {
    return a = qD(r), o = UD(r), n()[0] < 0 ? (a = Ag(a), o = Ag(o), e(WD, VD)) : e(Eg, Sg), t;
  }
  return t.base = function(c) {
    return arguments.length ? (r = +c, u()) : r;
  }, t.domain = function(c) {
    return arguments.length ? (n(c), u()) : n();
  }, t.ticks = (c) => {
    const d = n();
    let f = d[0], h = d[d.length - 1];
    const m = h < f;
    m && ([f, h] = [h, f]);
    let g = a(f), v = a(h), y, E;
    const b = c == null ? 10 : +c;
    let x = [];
    if (!(r % 1) && v - g < b) {
      if (g = Math.floor(g), v = Math.ceil(v), f > 0) {
        for (; g <= v; ++g)
          for (y = 1; y < r; ++y)
            if (E = g < 0 ? y / o(-g) : y * o(g), !(E < f)) {
              if (E > h)
                break;
              x.push(E);
            }
      } else
        for (; g <= v; ++g)
          for (y = r - 1; y >= 1; --y)
            if (E = g > 0 ? y / o(-g) : y * o(g), !(E < f)) {
              if (E > h)
                break;
              x.push(E);
            }
      x.length * 2 < b && (x = rg(f, h, b));
    } else
      x = rg(g, v, Math.min(v - g, b)).map(o);
    return m ? x.reverse() : x;
  }, t.tickFormat = (c, d) => {
    if (c == null && (c = 10), d == null && (d = r === 10 ? "s" : ","), typeof d != "function" && (!(r % 1) && (d = nT(d)).precision == null && (d.trim = !0), d = rT(d)), c === 1 / 0)
      return d;
    const f = Math.max(1, r * c / t.ticks().length);
    return (h) => {
      let m = h / o(Math.round(a(h)));
      return m * r < r - 0.5 && (m *= r), m <= f ? d(h) : "";
    };
  }, t.nice = () => n(ox(n(), {
    floor: (c) => o(Math.floor(a(c))),
    ceil: (c) => o(Math.ceil(a(c)))
  })), t;
}
function sx() {
  const e = KD(tT()).domain([1, 10]);
  return e.copy = () => Dy(e, sx()).base(e.base()), vc.apply(e, arguments), e;
}
const zl = Ry(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
zl.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ry((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : zl);
zl.range;
function jD(e, t, n, r, a, o) {
  const u = [
    [ko, 1, ll],
    [ko, 5, 5 * ll],
    [ko, 15, 15 * ll],
    [ko, 30, 30 * ll],
    [o, 1, cl],
    [o, 5, 5 * cl],
    [o, 15, 15 * cl],
    [o, 30, 30 * cl],
    [a, 1, ul],
    [a, 3, 3 * ul],
    [a, 6, 6 * ul],
    [a, 12, 12 * ul],
    [r, 1, ag],
    [r, 2, 2 * ag],
    [n, 1, lT],
    [t, 1, og],
    [t, 3, 3 * og],
    [e, 1, Wu]
  ];
  function c(f, h, m) {
    const g = h < f;
    g && ([f, h] = [h, f]);
    const v = m && typeof m.range == "function" ? m : d(f, h, m), y = v ? v.range(f, +h + 1) : [];
    return g ? y.reverse() : y;
  }
  function d(f, h, m) {
    const g = Math.abs(h - f) / m, v = iT(([, , b]) => b).right(u, g);
    if (v === u.length)
      return e.every(ig(f / Wu, h / Wu, m));
    if (v === 0)
      return zl.every(Math.max(ig(f, h, m), 1));
    const [y, E] = u[g / u[v - 1][2] < u[v][2] / g ? v - 1 : v];
    return y.every(E);
  }
  return [c, d];
}
const [GD, YD] = jD(My, Py, Iy, $y, Oy, Ny);
function XD(e) {
  return new Date(e);
}
function ZD(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function lx(e, t, n, r, a, o, u, c, d, f) {
  var h = aT(), m = h.invert, g = h.domain, v = f(".%L"), y = f(":%S"), E = f("%I:%M"), b = f("%I %p"), x = f("%a %d"), w = f("%b %d"), A = f("%B"), D = f("%Y");
  function _(C) {
    return (d(C) < C ? v : c(C) < C ? y : u(C) < C ? E : o(C) < C ? b : r(C) < C ? a(C) < C ? x : w : n(C) < C ? A : D)(C);
  }
  return h.invert = function(C) {
    return new Date(m(C));
  }, h.domain = function(C) {
    return arguments.length ? g(Array.from(C, ZD)) : g().map(XD);
  }, h.ticks = function(C) {
    var $ = g();
    return e($[0], $[$.length - 1], C ?? 10);
  }, h.tickFormat = function(C, $) {
    return $ == null ? _ : f($);
  }, h.nice = function(C) {
    var $ = g();
    return (!C || typeof C.range != "function") && (C = t($[0], $[$.length - 1], C ?? 10)), C ? g(ox($, C)) : h;
  }, h.copy = function() {
    return Dy(h, lx(e, t, n, r, a, o, u, c, d, f));
  }, h;
}
function QD() {
  return vc.apply(lx(GD, YD, My, Py, Iy, $y, Oy, Ny, ko, qC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var JD = ls("domain", "range", "reverse", "align", "padding", "round");
function wg(e) {
  return JD(zf(), e);
}
var eN = ls("domain", "range", "reverse", "align", "padding", "round");
function La(e) {
  return eN(zD(), e);
}
var tN = ls("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function nN(e) {
  return tN(QD(), e);
}
var rN = ls("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function cx(e) {
  return rN(sx(), e);
}
var iN = ls("domain", "range", "reverse", "unknown");
function aN(e) {
  return iN(Ff(), e);
}
function oN(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function sN(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(r, a, o) {
    return t == null || o.length <= t || a % Math.round((o.length - 1) / t) === 0;
  });
}
function lN(e) {
  return e == null ? void 0 : e.toString();
}
var Vd = { exports: {} }, Tt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _g;
function cN() {
  if (_g)
    return Tt;
  _g = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function A(_) {
    if (typeof _ == "object" && _ !== null) {
      var C = _.$$typeof;
      switch (C) {
        case t:
          switch (_ = _.type, _) {
            case d:
            case f:
            case r:
            case o:
            case a:
            case m:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case c:
                case h:
                case y:
                case v:
                case u:
                  return _;
                default:
                  return C;
              }
          }
        case n:
          return C;
      }
    }
  }
  function D(_) {
    return A(_) === f;
  }
  return Tt.AsyncMode = d, Tt.ConcurrentMode = f, Tt.ContextConsumer = c, Tt.ContextProvider = u, Tt.Element = t, Tt.ForwardRef = h, Tt.Fragment = r, Tt.Lazy = y, Tt.Memo = v, Tt.Portal = n, Tt.Profiler = o, Tt.StrictMode = a, Tt.Suspense = m, Tt.isAsyncMode = function(_) {
    return D(_) || A(_) === d;
  }, Tt.isConcurrentMode = D, Tt.isContextConsumer = function(_) {
    return A(_) === c;
  }, Tt.isContextProvider = function(_) {
    return A(_) === u;
  }, Tt.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, Tt.isForwardRef = function(_) {
    return A(_) === h;
  }, Tt.isFragment = function(_) {
    return A(_) === r;
  }, Tt.isLazy = function(_) {
    return A(_) === y;
  }, Tt.isMemo = function(_) {
    return A(_) === v;
  }, Tt.isPortal = function(_) {
    return A(_) === n;
  }, Tt.isProfiler = function(_) {
    return A(_) === o;
  }, Tt.isStrictMode = function(_) {
    return A(_) === a;
  }, Tt.isSuspense = function(_) {
    return A(_) === m;
  }, Tt.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === f || _ === o || _ === a || _ === m || _ === g || typeof _ == "object" && _ !== null && (_.$$typeof === y || _.$$typeof === v || _.$$typeof === u || _.$$typeof === c || _.$$typeof === h || _.$$typeof === b || _.$$typeof === x || _.$$typeof === w || _.$$typeof === E);
  }, Tt.typeOf = A, Tt;
}
var Dt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cg;
function uN() {
  return Cg || (Cg = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function A(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === r || V === f || V === o || V === a || V === m || V === g || typeof V == "object" && V !== null && (V.$$typeof === y || V.$$typeof === v || V.$$typeof === u || V.$$typeof === c || V.$$typeof === h || V.$$typeof === b || V.$$typeof === x || V.$$typeof === w || V.$$typeof === E);
    }
    function D(V) {
      if (typeof V == "object" && V !== null) {
        var Oe = V.$$typeof;
        switch (Oe) {
          case t:
            var ae = V.type;
            switch (ae) {
              case d:
              case f:
              case r:
              case o:
              case a:
              case m:
                return ae;
              default:
                var Ne = ae && ae.$$typeof;
                switch (Ne) {
                  case c:
                  case h:
                  case y:
                  case v:
                  case u:
                    return Ne;
                  default:
                    return Oe;
                }
            }
          case n:
            return Oe;
        }
      }
    }
    var _ = d, C = f, $ = c, O = u, I = t, B = h, L = r, N = y, z = v, W = n, M = o, H = a, K = m, re = !1;
    function ie(V) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), te(V) || D(V) === d;
    }
    function te(V) {
      return D(V) === f;
    }
    function ce(V) {
      return D(V) === c;
    }
    function oe(V) {
      return D(V) === u;
    }
    function Se(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function Te(V) {
      return D(V) === h;
    }
    function ke(V) {
      return D(V) === r;
    }
    function Ie(V) {
      return D(V) === y;
    }
    function We(V) {
      return D(V) === v;
    }
    function De(V) {
      return D(V) === n;
    }
    function le(V) {
      return D(V) === o;
    }
    function ee(V) {
      return D(V) === a;
    }
    function me(V) {
      return D(V) === m;
    }
    Dt.AsyncMode = _, Dt.ConcurrentMode = C, Dt.ContextConsumer = $, Dt.ContextProvider = O, Dt.Element = I, Dt.ForwardRef = B, Dt.Fragment = L, Dt.Lazy = N, Dt.Memo = z, Dt.Portal = W, Dt.Profiler = M, Dt.StrictMode = H, Dt.Suspense = K, Dt.isAsyncMode = ie, Dt.isConcurrentMode = te, Dt.isContextConsumer = ce, Dt.isContextProvider = oe, Dt.isElement = Se, Dt.isForwardRef = Te, Dt.isFragment = ke, Dt.isLazy = Ie, Dt.isMemo = We, Dt.isPortal = De, Dt.isProfiler = le, Dt.isStrictMode = ee, Dt.isSuspense = me, Dt.isValidElementType = A, Dt.typeOf = D;
  }()), Dt;
}
process.env.NODE_ENV === "production" ? Vd.exports = cN() : Vd.exports = uN();
var dN = Vd.exports, Wf = dN, fN = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, pN = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, hN = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ux = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Vf = {};
Vf[Wf.ForwardRef] = hN;
Vf[Wf.Memo] = ux;
function Tg(e) {
  return Wf.isMemo(e) ? ux : Vf[e.$$typeof] || fN;
}
var mN = Object.defineProperty, gN = Object.getOwnPropertyNames, Dg = Object.getOwnPropertySymbols, vN = Object.getOwnPropertyDescriptor, yN = Object.getPrototypeOf, Ng = Object.prototype;
function dx(e, t, n) {
  if (typeof t != "string") {
    if (Ng) {
      var r = yN(t);
      r && r !== Ng && dx(e, r, n);
    }
    var a = gN(t);
    Dg && (a = a.concat(Dg(t)));
    for (var o = Tg(e), u = Tg(t), c = 0; c < a.length; ++c) {
      var d = a[c];
      if (!pN[d] && !(n && n[d]) && !(u && u[d]) && !(o && o[d])) {
        var f = vN(t, d);
        try {
          mN(e, d, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var xN = dx;
const Og = /* @__PURE__ */ Ty(xN);
function fx(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Pg(e) {
  let t = e, n = e;
  e.length === 1 && (t = (u, c) => e(u) - c, n = bN(e));
  function r(u, c, d, f) {
    for (d == null && (d = 0), f == null && (f = u.length); d < f; ) {
      const h = d + f >>> 1;
      n(u[h], c) < 0 ? d = h + 1 : f = h;
    }
    return d;
  }
  function a(u, c, d, f) {
    for (d == null && (d = 0), f == null && (f = u.length); d < f; ) {
      const h = d + f >>> 1;
      n(u[h], c) > 0 ? f = h : d = h + 1;
    }
    return d;
  }
  function o(u, c, d, f) {
    d == null && (d = 0), f == null && (f = u.length);
    const h = r(u, c, d, f - 1);
    return h > d && t(u[h - 1], c) > -t(u[h], c) ? h - 1 : h;
  }
  return { left: r, center: o, right: a };
}
function bN(e) {
  return (t, n) => fx(e(t), n);
}
function* EN(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let r of e)
      (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
function SN(e, t) {
  let n = 0, r, a = 0, o = 0;
  if (t === void 0)
    for (let u of e)
      u != null && (u = +u) >= u && (r = u - a, a += r / ++n, o += r * (u - a));
  else {
    let u = -1;
    for (let c of e)
      (c = t(c, ++u, e)) != null && (c = +c) >= c && (r = c - a, a += r / ++n, o += r * (c - a));
  }
  if (n > 1)
    return o / (n - 1);
}
function AN(e, t) {
  const n = SN(e, t);
  return n && Math.sqrt(n);
}
function Ro(e, t) {
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
function Mo(e, t) {
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
function px(e, t, n = 0, r = e.length - 1, a = fx) {
  for (; r > n; ) {
    if (r - n > 600) {
      const d = r - n + 1, f = t - n + 1, h = Math.log(d), m = 0.5 * Math.exp(2 * h / 3), g = 0.5 * Math.sqrt(h * m * (d - m) / d) * (f - d / 2 < 0 ? -1 : 1), v = Math.max(n, Math.floor(t - f * m / d + g)), y = Math.min(r, Math.floor(t + (d - f) * m / d + g));
      px(e, t, v, y, a);
    }
    const o = e[t];
    let u = n, c = r;
    for (bo(e, n, t), a(e[r], o) > 0 && bo(e, n, r); u < c; ) {
      for (bo(e, u, c), ++u, --c; a(e[u], o) < 0; )
        ++u;
      for (; a(e[c], o) > 0; )
        --c;
    }
    a(e[n], o) === 0 ? bo(e, n, c) : (++c, bo(e, c, r)), c <= t && (n = c + 1), t <= c && (r = c - 1);
  }
  return e;
}
function bo(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function wN(e, t, n) {
  if (e = Float64Array.from(EN(e, n)), !!(r = e.length)) {
    if ((t = +t) <= 0 || r < 2)
      return Mo(e);
    if (t >= 1)
      return Ro(e);
    var r, a = (r - 1) * t, o = Math.floor(a), u = Ro(px(e, o).subarray(0, o + 1)), c = Mo(e.subarray(o + 1));
    return u + (c - u) * (a - o);
  }
}
function _N(e, t) {
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
function CN(e, t) {
  return wN(e, 0.5, t);
}
var ea = [], TN = function() {
  return ea.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, DN = function() {
  return ea.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, kg = "ResizeObserver loop completed with undelivered notifications.", NN = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: kg
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = kg), window.dispatchEvent(e);
}, Go;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Go || (Go = {}));
var ta = function(e) {
  return Object.freeze(e);
}, hx = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, ta(this);
  }
  return e;
}(), mx = function() {
  function e(t, n, r, a) {
    return this.x = t, this.y = n, this.width = r, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, ta(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, a = t.top, o = t.right, u = t.bottom, c = t.left, d = t.width, f = t.height;
    return { x: n, y: r, top: a, right: o, bottom: u, left: c, width: d, height: f };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Hf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, gx = function(e) {
  if (Hf(e)) {
    var t = e.getBBox(), n = t.width, r = t.height;
    return !n && !r;
  }
  var a = e, o = a.offsetWidth, u = a.offsetHeight;
  return !(o || u || e.getClientRects().length);
}, Lg = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, ON = function(e) {
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
}, $o = typeof window < "u" ? window : {}, fl = /* @__PURE__ */ new WeakMap(), Rg = /auto|scroll/, PN = /^tb|vertical/, kN = /msie|trident/i.test($o.navigator && $o.navigator.userAgent), Fr = function(e) {
  return parseFloat(e || "0");
}, Ma = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new hx((n ? t : e) || 0, (n ? e : t) || 0);
}, Mg = ta({
  devicePixelContentBoxSize: Ma(),
  borderBoxSize: Ma(),
  contentBoxSize: Ma(),
  contentRect: new mx(0, 0, 0, 0)
}), vx = function(e, t) {
  if (t === void 0 && (t = !1), fl.has(e) && !t)
    return fl.get(e);
  if (gx(e))
    return fl.set(e, Mg), Mg;
  var n = getComputedStyle(e), r = Hf(e) && e.ownerSVGElement && e.getBBox(), a = !kN && n.boxSizing === "border-box", o = PN.test(n.writingMode || ""), u = !r && Rg.test(n.overflowY || ""), c = !r && Rg.test(n.overflowX || ""), d = r ? 0 : Fr(n.paddingTop), f = r ? 0 : Fr(n.paddingRight), h = r ? 0 : Fr(n.paddingBottom), m = r ? 0 : Fr(n.paddingLeft), g = r ? 0 : Fr(n.borderTopWidth), v = r ? 0 : Fr(n.borderRightWidth), y = r ? 0 : Fr(n.borderBottomWidth), E = r ? 0 : Fr(n.borderLeftWidth), b = m + f, x = d + h, w = E + v, A = g + y, D = c ? e.offsetHeight - A - e.clientHeight : 0, _ = u ? e.offsetWidth - w - e.clientWidth : 0, C = a ? b + w : 0, $ = a ? x + A : 0, O = r ? r.width : Fr(n.width) - C - _, I = r ? r.height : Fr(n.height) - $ - D, B = O + b + _ + w, L = I + x + D + A, N = ta({
    devicePixelContentBoxSize: Ma(Math.round(O * devicePixelRatio), Math.round(I * devicePixelRatio), o),
    borderBoxSize: Ma(B, L, o),
    contentBoxSize: Ma(O, I, o),
    contentRect: new mx(m, d, O, I)
  });
  return fl.set(e, N), N;
}, yx = function(e, t, n) {
  var r = vx(e, n), a = r.borderBoxSize, o = r.contentBoxSize, u = r.devicePixelContentBoxSize;
  switch (t) {
    case Go.DEVICE_PIXEL_CONTENT_BOX:
      return u;
    case Go.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, xx = function() {
  function e(t) {
    var n = vx(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = ta([n.borderBoxSize]), this.contentBoxSize = ta([n.contentBoxSize]), this.devicePixelContentBoxSize = ta([n.devicePixelContentBoxSize]);
  }
  return e;
}(), bx = function(e) {
  if (gx(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, LN = function() {
  var e = 1 / 0, t = [];
  ea.forEach(function(u) {
    if (u.activeTargets.length !== 0) {
      var c = [];
      u.activeTargets.forEach(function(f) {
        var h = new xx(f.target), m = bx(f.target);
        c.push(h), f.lastReportedSize = yx(f.target, f.observedBox), m < e && (e = m);
      }), t.push(function() {
        u.callback.call(u.observer, c, u.observer);
      }), u.activeTargets.splice(0, u.activeTargets.length);
    }
  });
  for (var n = 0, r = t; n < r.length; n++) {
    var a = r[n];
    a();
  }
  return e;
}, $g = function(e) {
  ea.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(a) {
      a.isActive() && (bx(a.target) > e ? n.activeTargets.push(a) : n.skippedTargets.push(a));
    });
  });
}, RN = function() {
  var e = 0;
  for ($g(e); TN(); )
    e = LN(), $g(e);
  return DN() && NN(), e > 0;
}, Uu, Ex = [], MN = function() {
  return Ex.splice(0).forEach(function(e) {
    return e();
  });
}, $N = function(e) {
  if (!Uu) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return MN();
    }).observe(n, r), Uu = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  Ex.push(e), Uu();
}, IN = function(e) {
  $N(function() {
    requestAnimationFrame(e);
  });
}, Nl = 0, BN = function() {
  return !!Nl;
}, FN = 250, zN = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Ig = [
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
], Bg = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, qu = !1, WN = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = FN), !qu) {
      qu = !0;
      var r = Bg(t);
      IN(function() {
        var a = !1;
        try {
          a = RN();
        } finally {
          if (qu = !1, t = r - Bg(), !BN())
            return;
          a ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, zN);
    };
    document.body ? n() : $o.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Ig.forEach(function(n) {
      return $o.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Ig.forEach(function(n) {
      return $o.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Hd = new WN(), Fg = function(e) {
  !Nl && e > 0 && Hd.start(), Nl += e, !Nl && Hd.stop();
}, VN = function(e) {
  return !Hf(e) && !ON(e) && getComputedStyle(e).display === "inline";
}, HN = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || Go.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = yx(this.target, this.observedBox, !0);
    return VN(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), UN = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), pl = /* @__PURE__ */ new WeakMap(), zg = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, hl = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new UN(t, n);
    pl.set(t, r);
  }, e.observe = function(t, n, r) {
    var a = pl.get(t), o = a.observationTargets.length === 0;
    zg(a.observationTargets, n) < 0 && (o && ea.push(a), a.observationTargets.push(new HN(n, r && r.box)), Fg(1), Hd.schedule());
  }, e.unobserve = function(t, n) {
    var r = pl.get(t), a = zg(r.observationTargets, n), o = r.observationTargets.length === 1;
    a >= 0 && (o && ea.splice(ea.indexOf(r), 1), r.observationTargets.splice(a, 1), Fg(-1));
  }, e.disconnect = function(t) {
    var n = this, r = pl.get(t);
    r.observationTargets.slice().forEach(function(a) {
      return n.unobserve(t, a.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), qN = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    hl.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Lg(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    hl.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Lg(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    hl.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    hl.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const KN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: qN,
  ResizeObserverEntry: xx,
  ResizeObserverSize: hx
}, Symbol.toStringTag, { value: "Module" })), jN = /* @__PURE__ */ Df(KN);
var GN = wx, vi = Ax(Cy), YN = Ax(QC), Ta = QN(F), XN = jN, ZN = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function Sx(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Sx = function(a) {
    return a ? n : t;
  })(e);
}
function QN(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = Sx(t);
  if (n && n.has(e))
    return n.get(e);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var u = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      u && (u.get || u.set) ? Object.defineProperty(r, o, u) : r[o] = e[o];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Ax(e) {
  return e && e.__esModule ? e : { default: e };
}
function Wl() {
  return Wl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wl.apply(this, arguments);
}
function JN(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var eO = [];
function wx(e) {
  var t = e.className, n = e.children, r = e.debounceTime, a = r === void 0 ? 300 : r, o = e.ignoreDimensions, u = o === void 0 ? eO : o, c = e.parentSizeStyles, d = c === void 0 ? {
    width: "100%",
    height: "100%"
  } : c, f = e.enableDebounceLeadingCall, h = f === void 0 ? !0 : f, m = JN(e, ZN), g = (0, Ta.useRef)(null), v = (0, Ta.useRef)(0), y = (0, Ta.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), E = y[0], b = y[1], x = (0, Ta.useMemo)(function() {
    var w = Array.isArray(u) ? u : [u];
    return (0, YN.default)(function(A) {
      b(function(D) {
        var _ = Object.keys(D), C = _.filter(function(O) {
          return D[O] !== A[O];
        }), $ = C.every(function(O) {
          return w.includes(O);
        });
        return $ ? D : A;
      });
    }, a, {
      leading: h
    });
  }, [a, h, u]);
  return (0, Ta.useEffect)(function() {
    var w = new XN.ResizeObserver(function(A) {
      A === void 0 && (A = []), A.forEach(function(D) {
        var _ = D.contentRect, C = _.left, $ = _.top, O = _.width, I = _.height;
        v.current = window.requestAnimationFrame(function() {
          x({
            width: O,
            height: I,
            top: $,
            left: C
          });
        });
      });
    });
    return g.current && w.observe(g.current), function() {
      window.cancelAnimationFrame(v.current), w.disconnect(), x != null && x.cancel && x.cancel();
    };
  }, [x]), /* @__PURE__ */ Ta.default.createElement("div", Wl({
    style: d,
    ref: g,
    className: t
  }, m), n(Wl({}, E, {
    ref: g.current,
    resize: x
  })));
}
wx.propTypes = {
  className: vi.default.string,
  debounceTime: vi.default.number,
  enableDebounceLeadingCall: vi.default.bool,
  ignoreDimensions: vi.default.oneOfType([vi.default.any, vi.default.arrayOf(vi.default.any)]),
  children: vi.default.func.isRequired
};
var Ku = /* @__PURE__ */ new Date(), ju = /* @__PURE__ */ new Date();
function ai(e, t, n, r) {
  function a(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return a.floor = function(o) {
    return e(o = /* @__PURE__ */ new Date(+o)), o;
  }, a.ceil = function(o) {
    return e(o = new Date(o - 1)), t(o, 1), e(o), o;
  }, a.round = function(o) {
    var u = a(o), c = a.ceil(o);
    return o - u < c - o ? u : c;
  }, a.offset = function(o, u) {
    return t(o = /* @__PURE__ */ new Date(+o), u == null ? 1 : Math.floor(u)), o;
  }, a.range = function(o, u, c) {
    var d = [], f;
    if (o = a.ceil(o), c = c == null ? 1 : Math.floor(c), !(o < u) || !(c > 0))
      return d;
    do
      d.push(f = /* @__PURE__ */ new Date(+o)), t(o, c), e(o);
    while (f < o && o < u);
    return d;
  }, a.filter = function(o) {
    return ai(function(u) {
      if (u >= u)
        for (; e(u), !o(u); )
          u.setTime(u - 1);
    }, function(u, c) {
      if (u >= u)
        if (c < 0)
          for (; ++c <= 0; )
            for (; t(u, -1), !o(u); )
              ;
        else
          for (; --c >= 0; )
            for (; t(u, 1), !o(u); )
              ;
    });
  }, n && (a.count = function(o, u) {
    return Ku.setTime(+o), ju.setTime(+u), e(Ku), e(ju), Math.floor(n(Ku, ju));
  }, a.every = function(o) {
    return o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? a.filter(r ? function(u) {
      return r(u) % o === 0;
    } : function(u) {
      return a.count(0, u) % o === 0;
    }) : a;
  }), a;
}
const tO = 1e3, Uf = tO * 60, nO = Uf * 60, qf = nO * 24, _x = qf * 7;
var Cx = ai(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Uf) / qf,
  (e) => e.getDate() - 1
);
const Tx = Cx;
Cx.range;
function sa(e) {
  return ai(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Uf) / _x;
  });
}
var Dx = sa(0), Vl = sa(1), rO = sa(2), iO = sa(3), za = sa(4), aO = sa(5), oO = sa(6);
Dx.range;
Vl.range;
rO.range;
iO.range;
za.range;
aO.range;
oO.range;
var Kf = ai(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Kf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ai(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const Yo = Kf;
Kf.range;
var Nx = ai(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / qf;
}, function(e) {
  return e.getUTCDate() - 1;
});
const Ox = Nx;
Nx.range;
function la(e) {
  return ai(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / _x;
  });
}
var Px = la(0), Hl = la(1), sO = la(2), lO = la(3), Wa = la(4), cO = la(5), uO = la(6);
Px.range;
Hl.range;
sO.range;
lO.range;
Wa.range;
cO.range;
uO.range;
var jf = ai(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
jf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ai(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const Xo = jf;
jf.range;
function Gu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Yu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Eo(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function dO(e) {
  var t = e.dateTime, n = e.date, r = e.time, a = e.periods, o = e.days, u = e.shortDays, c = e.months, d = e.shortMonths, f = So(a), h = Ao(a), m = So(o), g = Ao(o), v = So(u), y = Ao(u), E = So(c), b = Ao(c), x = So(d), w = Ao(d), A = {
    a: K,
    A: re,
    b: ie,
    B: te,
    c: null,
    d: Kg,
    e: Kg,
    f: RO,
    g: UO,
    G: KO,
    H: PO,
    I: kO,
    j: LO,
    L: kx,
    m: MO,
    M: $O,
    p: ce,
    q: oe,
    Q: Yg,
    s: Xg,
    S: IO,
    u: BO,
    U: FO,
    V: zO,
    w: WO,
    W: VO,
    x: null,
    X: null,
    y: HO,
    Y: qO,
    Z: jO,
    "%": Gg
  }, D = {
    a: Se,
    A: Te,
    b: ke,
    B: Ie,
    c: null,
    d: jg,
    e: jg,
    f: ZO,
    g: sP,
    G: cP,
    H: GO,
    I: YO,
    j: XO,
    L: Rx,
    m: QO,
    M: JO,
    p: We,
    q: De,
    Q: Yg,
    s: Xg,
    S: eP,
    u: tP,
    U: nP,
    V: rP,
    w: iP,
    W: aP,
    x: null,
    X: null,
    y: oP,
    Y: lP,
    Z: uP,
    "%": Gg
  }, _ = {
    a: B,
    A: L,
    b: N,
    B: z,
    c: W,
    d: Ug,
    e: Ug,
    f: TO,
    g: Hg,
    G: Vg,
    H: qg,
    I: qg,
    j: AO,
    L: CO,
    m: SO,
    M: wO,
    p: I,
    q: EO,
    Q: NO,
    s: OO,
    S: _O,
    u: gO,
    U: vO,
    V: yO,
    w: mO,
    W: xO,
    x: M,
    X: H,
    y: Hg,
    Y: Vg,
    Z: bO,
    "%": DO
  };
  A.x = C(n, A), A.X = C(r, A), A.c = C(t, A), D.x = C(n, D), D.X = C(r, D), D.c = C(t, D);
  function C(le, ee) {
    return function(me) {
      var V = [], Oe = -1, ae = 0, Ne = le.length, Ee, Pe, nt;
      for (me instanceof Date || (me = /* @__PURE__ */ new Date(+me)); ++Oe < Ne; )
        le.charCodeAt(Oe) === 37 && (V.push(le.slice(ae, Oe)), (Pe = Wg[Ee = le.charAt(++Oe)]) != null ? Ee = le.charAt(++Oe) : Pe = Ee === "e" ? " " : "0", (nt = ee[Ee]) && (Ee = nt(me, Pe)), V.push(Ee), ae = Oe + 1);
      return V.push(le.slice(ae, Oe)), V.join("");
    };
  }
  function $(le, ee) {
    return function(me) {
      var V = Eo(1900, void 0, 1), Oe = O(V, le, me += "", 0), ae, Ne;
      if (Oe != me.length)
        return null;
      if ("Q" in V)
        return new Date(V.Q);
      if ("s" in V)
        return new Date(V.s * 1e3 + ("L" in V ? V.L : 0));
      if (ee && !("Z" in V) && (V.Z = 0), "p" in V && (V.H = V.H % 12 + V.p * 12), V.m === void 0 && (V.m = "q" in V ? V.q : 0), "V" in V) {
        if (V.V < 1 || V.V > 53)
          return null;
        "w" in V || (V.w = 1), "Z" in V ? (ae = Yu(Eo(V.y, 0, 1)), Ne = ae.getUTCDay(), ae = Ne > 4 || Ne === 0 ? Hl.ceil(ae) : Hl(ae), ae = Ox.offset(ae, (V.V - 1) * 7), V.y = ae.getUTCFullYear(), V.m = ae.getUTCMonth(), V.d = ae.getUTCDate() + (V.w + 6) % 7) : (ae = Gu(Eo(V.y, 0, 1)), Ne = ae.getDay(), ae = Ne > 4 || Ne === 0 ? Vl.ceil(ae) : Vl(ae), ae = Tx.offset(ae, (V.V - 1) * 7), V.y = ae.getFullYear(), V.m = ae.getMonth(), V.d = ae.getDate() + (V.w + 6) % 7);
      } else
        ("W" in V || "U" in V) && ("w" in V || (V.w = "u" in V ? V.u % 7 : "W" in V ? 1 : 0), Ne = "Z" in V ? Yu(Eo(V.y, 0, 1)).getUTCDay() : Gu(Eo(V.y, 0, 1)).getDay(), V.m = 0, V.d = "W" in V ? (V.w + 6) % 7 + V.W * 7 - (Ne + 5) % 7 : V.w + V.U * 7 - (Ne + 6) % 7);
      return "Z" in V ? (V.H += V.Z / 100 | 0, V.M += V.Z % 100, Yu(V)) : Gu(V);
    };
  }
  function O(le, ee, me, V) {
    for (var Oe = 0, ae = ee.length, Ne = me.length, Ee, Pe; Oe < ae; ) {
      if (V >= Ne)
        return -1;
      if (Ee = ee.charCodeAt(Oe++), Ee === 37) {
        if (Ee = ee.charAt(Oe++), Pe = _[Ee in Wg ? ee.charAt(Oe++) : Ee], !Pe || (V = Pe(le, me, V)) < 0)
          return -1;
      } else if (Ee != me.charCodeAt(V++))
        return -1;
    }
    return V;
  }
  function I(le, ee, me) {
    var V = f.exec(ee.slice(me));
    return V ? (le.p = h.get(V[0].toLowerCase()), me + V[0].length) : -1;
  }
  function B(le, ee, me) {
    var V = v.exec(ee.slice(me));
    return V ? (le.w = y.get(V[0].toLowerCase()), me + V[0].length) : -1;
  }
  function L(le, ee, me) {
    var V = m.exec(ee.slice(me));
    return V ? (le.w = g.get(V[0].toLowerCase()), me + V[0].length) : -1;
  }
  function N(le, ee, me) {
    var V = x.exec(ee.slice(me));
    return V ? (le.m = w.get(V[0].toLowerCase()), me + V[0].length) : -1;
  }
  function z(le, ee, me) {
    var V = E.exec(ee.slice(me));
    return V ? (le.m = b.get(V[0].toLowerCase()), me + V[0].length) : -1;
  }
  function W(le, ee, me) {
    return O(le, t, ee, me);
  }
  function M(le, ee, me) {
    return O(le, n, ee, me);
  }
  function H(le, ee, me) {
    return O(le, r, ee, me);
  }
  function K(le) {
    return u[le.getDay()];
  }
  function re(le) {
    return o[le.getDay()];
  }
  function ie(le) {
    return d[le.getMonth()];
  }
  function te(le) {
    return c[le.getMonth()];
  }
  function ce(le) {
    return a[+(le.getHours() >= 12)];
  }
  function oe(le) {
    return 1 + ~~(le.getMonth() / 3);
  }
  function Se(le) {
    return u[le.getUTCDay()];
  }
  function Te(le) {
    return o[le.getUTCDay()];
  }
  function ke(le) {
    return d[le.getUTCMonth()];
  }
  function Ie(le) {
    return c[le.getUTCMonth()];
  }
  function We(le) {
    return a[+(le.getUTCHours() >= 12)];
  }
  function De(le) {
    return 1 + ~~(le.getUTCMonth() / 3);
  }
  return {
    format: function(le) {
      var ee = C(le += "", A);
      return ee.toString = function() {
        return le;
      }, ee;
    },
    parse: function(le) {
      var ee = $(le += "", !1);
      return ee.toString = function() {
        return le;
      }, ee;
    },
    utcFormat: function(le) {
      var ee = C(le += "", D);
      return ee.toString = function() {
        return le;
      }, ee;
    },
    utcParse: function(le) {
      var ee = $(le += "", !0);
      return ee.toString = function() {
        return le;
      }, ee;
    }
  };
}
var Wg = { "-": "", _: " ", 0: "0" }, yn = /^\s*\d+/, fO = /^%/, pO = /[\\^$*+?|[\]().{}]/g;
function St(e, t, n) {
  var r = e < 0 ? "-" : "", a = (r ? -e : e) + "", o = a.length;
  return r + (o < n ? new Array(n - o + 1).join(t) + a : a);
}
function hO(e) {
  return e.replace(pO, "\\$&");
}
function So(e) {
  return new RegExp("^(?:" + e.map(hO).join("|") + ")", "i");
}
function Ao(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function mO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function gO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function vO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function yO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function xO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function Vg(e, t, n) {
  var r = yn.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Hg(e, t, n) {
  var r = yn.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function bO(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function EO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function SO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Ug(e, t, n) {
  var r = yn.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function AO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function qg(e, t, n) {
  var r = yn.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function wO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function _O(e, t, n) {
  var r = yn.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function CO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function TO(e, t, n) {
  var r = yn.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function DO(e, t, n) {
  var r = fO.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function NO(e, t, n) {
  var r = yn.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function OO(e, t, n) {
  var r = yn.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Kg(e, t) {
  return St(e.getDate(), t, 2);
}
function PO(e, t) {
  return St(e.getHours(), t, 2);
}
function kO(e, t) {
  return St(e.getHours() % 12 || 12, t, 2);
}
function LO(e, t) {
  return St(1 + Tx.count(Yo(e), e), t, 3);
}
function kx(e, t) {
  return St(e.getMilliseconds(), t, 3);
}
function RO(e, t) {
  return kx(e, t) + "000";
}
function MO(e, t) {
  return St(e.getMonth() + 1, t, 2);
}
function $O(e, t) {
  return St(e.getMinutes(), t, 2);
}
function IO(e, t) {
  return St(e.getSeconds(), t, 2);
}
function BO(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function FO(e, t) {
  return St(Dx.count(Yo(e) - 1, e), t, 2);
}
function Lx(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? za(e) : za.ceil(e);
}
function zO(e, t) {
  return e = Lx(e), St(za.count(Yo(e), e) + (Yo(e).getDay() === 4), t, 2);
}
function WO(e) {
  return e.getDay();
}
function VO(e, t) {
  return St(Vl.count(Yo(e) - 1, e), t, 2);
}
function HO(e, t) {
  return St(e.getFullYear() % 100, t, 2);
}
function UO(e, t) {
  return e = Lx(e), St(e.getFullYear() % 100, t, 2);
}
function qO(e, t) {
  return St(e.getFullYear() % 1e4, t, 4);
}
function KO(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? za(e) : za.ceil(e), St(e.getFullYear() % 1e4, t, 4);
}
function jO(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + St(t / 60 | 0, "0", 2) + St(t % 60, "0", 2);
}
function jg(e, t) {
  return St(e.getUTCDate(), t, 2);
}
function GO(e, t) {
  return St(e.getUTCHours(), t, 2);
}
function YO(e, t) {
  return St(e.getUTCHours() % 12 || 12, t, 2);
}
function XO(e, t) {
  return St(1 + Ox.count(Xo(e), e), t, 3);
}
function Rx(e, t) {
  return St(e.getUTCMilliseconds(), t, 3);
}
function ZO(e, t) {
  return Rx(e, t) + "000";
}
function QO(e, t) {
  return St(e.getUTCMonth() + 1, t, 2);
}
function JO(e, t) {
  return St(e.getUTCMinutes(), t, 2);
}
function eP(e, t) {
  return St(e.getUTCSeconds(), t, 2);
}
function tP(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function nP(e, t) {
  return St(Px.count(Xo(e) - 1, e), t, 2);
}
function Mx(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Wa(e) : Wa.ceil(e);
}
function rP(e, t) {
  return e = Mx(e), St(Wa.count(Xo(e), e) + (Xo(e).getUTCDay() === 4), t, 2);
}
function iP(e) {
  return e.getUTCDay();
}
function aP(e, t) {
  return St(Hl.count(Xo(e) - 1, e), t, 2);
}
function oP(e, t) {
  return St(e.getUTCFullYear() % 100, t, 2);
}
function sP(e, t) {
  return e = Mx(e), St(e.getUTCFullYear() % 100, t, 2);
}
function lP(e, t) {
  return St(e.getUTCFullYear() % 1e4, t, 4);
}
function cP(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Wa(e) : Wa.ceil(e), St(e.getUTCFullYear() % 1e4, t, 4);
}
function uP() {
  return "+0000";
}
function Gg() {
  return "%";
}
function Yg(e) {
  return +e;
}
function Xg(e) {
  return Math.floor(+e / 1e3);
}
var Da, $x, Ix;
dP({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function dP(e) {
  return Da = dO(e), $x = Da.format, Ix = Da.parse, Da.utcFormat, Da.utcParse, Da;
}
const pt = F.createContext({});
function br(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
const vt = {
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
    if (vt.str(e) || vt.num(e))
      return e === t;
    if (vt.obj(e) && vt.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let n;
    for (n in e)
      if (!(n in t))
        return !1;
    for (n in t)
      if (e[n] !== t[n])
        return !1;
    return vt.und(n) ? e === t : !0;
  }
};
function fP(e, t) {
  return t === void 0 && (t = !0), (n) => (vt.arr(n) ? n : Object.keys(n)).reduce((r, a) => {
    const o = t ? a[0].toLowerCase() + a.substring(1) : a;
    return r[o] = e(o), r;
  }, e);
}
function Bx() {
  const e = F.useState(!1), t = e[1];
  return F.useCallback(() => t((r) => !r), []);
}
function qi(e, t) {
  return vt.und(e) || vt.nul(e) ? t : e;
}
function Ra(e) {
  return vt.und(e) ? [] : vt.arr(e) ? e : [e];
}
function Nr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return vt.fun(e) ? e(...n) : e;
}
function pP(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, br(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Xu(e) {
  const t = pP(e);
  if (vt.und(t))
    return Et({
      to: t
    }, e);
  const n = Object.keys(e).reduce((r, a) => vt.und(t[a]) ? Et({}, r, {
    [a]: e[a]
  }) : r, {});
  return Et({
    to: t
  }, n);
}
function hP(e, t) {
  return t && (vt.fun(t) ? t(e) : vt.obj(t) && (t.current = e)), e;
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
class Ud extends Or {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Or && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Or && t.removeChild(this));
  }
}
class Fx extends Or {
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
function mP(e, t) {
  Gf = {
    fn: e,
    transform: t
  };
}
let zx;
function gP(e) {
  zx = e;
}
let Wx = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Ul;
function vP(e) {
  Ul = e;
}
let Vx = () => Date.now(), yP = (e) => e.current, Hx;
function xP(e) {
  Hx = e;
}
class bP extends Fx {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? Et({}, t, {
      style: Hx(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const EP = (e) => vt.fun(e) && !(e.prototype instanceof l.Component), SP = (e) => F.forwardRef((n, r) => {
  const a = Bx(), o = F.useRef(!0), u = F.useRef(null), c = F.useRef(null), d = F.useCallback((g) => {
    const v = u.current, y = () => {
      let E = !1;
      c.current && (E = Gf.fn(c.current, u.current.getAnimatedValue())), (!c.current || E === !1) && a();
    };
    u.current = new bP(g, y), v && v.detach();
  }, []);
  F.useEffect(() => () => {
    o.current = !1, u.current && u.current.detach();
  }, []), F.useImperativeHandle(r, () => yP(c)), d(n);
  const f = u.current.getValue();
  f.scrollTop, f.scrollLeft;
  const h = br(f, ["scrollTop", "scrollLeft"]), m = EP(e) ? void 0 : (g) => c.current = hP(g, r);
  return l.createElement(e, Et({}, h, {
    ref: m
  }));
});
let Io = !1;
const na = /* @__PURE__ */ new Set(), Ux = () => {
  if (!Io)
    return !1;
  let e = Vx();
  for (let t of na) {
    let n = !1;
    for (let r = 0; r < t.configs.length; r++) {
      let a = t.configs[r], o, u;
      for (let c = 0; c < a.animatedValues.length; c++) {
        let d = a.animatedValues[c];
        if (d.done)
          continue;
        let f = a.fromValues[c], h = a.toValues[c], m = d.lastPosition, g = h instanceof Or, v = Array.isArray(a.initialVelocity) ? a.initialVelocity[c] : a.initialVelocity;
        if (g && (h = h.getValue()), a.immediate) {
          d.setValue(h), d.done = !0;
          continue;
        }
        if (typeof f == "string" || typeof h == "string") {
          d.setValue(h), d.done = !0;
          continue;
        }
        if (a.duration !== void 0)
          m = f + a.easing((e - d.startTime) / a.duration) * (h - f), o = e >= d.startTime + a.duration;
        else if (a.decay)
          m = f + v / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - d.startTime))), o = Math.abs(d.lastPosition - m) < 0.1, o && (h = m);
        else {
          u = d.lastTime !== void 0 ? d.lastTime : e, v = d.lastVelocity !== void 0 ? d.lastVelocity : a.initialVelocity, e > u + 64 && (u = e);
          let y = Math.floor(e - u);
          for (let w = 0; w < y; ++w) {
            let A = -a.tension * (m - h), D = -a.friction * v, _ = (A + D) / a.mass;
            v = v + _ * 1 / 1e3, m = m + v * 1 / 1e3;
          }
          let E = a.clamp && a.tension !== 0 ? f < h ? m > h : m < h : !1, b = Math.abs(v) <= a.precision, x = a.tension !== 0 ? Math.abs(h - m) <= a.precision : !0;
          o = E || b && x, d.lastVelocity = v, d.lastTime = e;
        }
        g && !a.toValues[c].done && (o = !1), o ? (d.value !== h && (m = h), d.done = !0) : n = !0, d.setValue(m), d.lastPosition = m;
      }
      t.props.onFrame && (t.values[a.name] = a.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (na.delete(t), t.stop(!0));
  }
  return na.size ? Wx(Ux) : Io = !1, Io;
}, AP = (e) => {
  na.has(e) || na.add(e), Io || (Io = !0, Wx(Ux));
}, wP = (e) => {
  na.has(e) && na.delete(e);
};
function ql(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return ql({
      range: e,
      output: t,
      extrapolate: n
    });
  if (Ul && typeof e.output[0] == "string")
    return Ul(e);
  const r = e, a = r.output, o = r.range || [0, 1], u = r.extrapolateLeft || r.extrapolate || "extend", c = r.extrapolateRight || r.extrapolate || "extend", d = r.easing || ((f) => f);
  return (f) => {
    const h = CP(f, o);
    return _P(f, o[h], o[h + 1], a[h], a[h + 1], d, u, c, r.map);
  };
}
function _P(e, t, n, r, a, o, u, c, d) {
  let f = d ? d(e) : e;
  if (f < t) {
    if (u === "identity")
      return f;
    u === "clamp" && (f = t);
  }
  if (f > n) {
    if (c === "identity")
      return f;
    c === "clamp" && (f = n);
  }
  return r === a ? r : t === n ? e <= t ? r : a : (t === -1 / 0 ? f = -f : n === 1 / 0 ? f = f - t : f = (f - t) / (n - t), f = o(f), r === -1 / 0 ? f = -f : a === 1 / 0 ? f = f + r : f = f * (a - r) + r, f);
}
function CP(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class Va extends Ud {
  constructor(t, n, r, a) {
    super(), this.calc = void 0, this.payload = t instanceof Ud && !(t instanceof Va) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = ql(n, r, a);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, r) {
    this.calc = ql(t, n, r);
  }
  interpolate(t, n, r) {
    return new Va(this, t, n, r);
  }
}
const TP = (e, t, n) => e && new Va(e, t, n);
function qx(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => qx(n, t));
}
class qd extends Or {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(r, a) {
      a === void 0 && (a = !0), n.value = r, a && n.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && qx(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, n, r) {
    return new Va(this, t, n, r);
  }
}
class DP extends Ud {
  constructor(t) {
    super(), this.payload = t.map((n) => new qd(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((r, a) => this.payload[a].setValue(r, n)) : this.payload.forEach((r) => r.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new Va(this, t, n);
  }
}
let NP = 0;
class OP {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = NP++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = Xu(t), r = n.delay, a = r === void 0 ? 0 : r, o = n.to, u = br(n, ["delay", "to"]);
    if (vt.arr(o) || vt.fun(o))
      this.queue.push(Et({}, u, {
        delay: a,
        to: o
      }));
    else if (o) {
      let c = {};
      Object.entries(o).forEach((d) => {
        let f = d[0], h = d[1];
        const m = Et({
          to: {
            [f]: h
          },
          delay: Nr(a, f)
        }, u), g = c[m.delay] && c[m.delay].to;
        c[m.delay] = Et({}, c[m.delay], m, {
          to: Et({}, g, m.to)
        });
      }), this.queue = Object.values(c);
    }
    return this.queue = this.queue.sort((c, d) => c.delay - d.delay), this.diff(u), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((a) => {
        let o = a.from, u = o === void 0 ? {} : o, c = a.to, d = c === void 0 ? {} : c;
        vt.obj(u) && (this.merged = Et({}, u, this.merged)), vt.obj(d) && (this.merged = Et({}, this.merged, d));
      });
      const n = this.local = ++this.guid, r = this.localQueue = this.queue;
      this.queue = [], r.forEach((a, o) => {
        let u = a.delay, c = br(a, ["delay"]);
        const d = (h) => {
          o === r.length - 1 && n === this.guid && h && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let f = vt.arr(c.to) || vt.fun(c.to);
        u ? setTimeout(() => {
          n === this.guid && (f ? this.runAsync(c, d) : this.diff(c).start(d));
        }, u) : f ? this.runAsync(c, d) : this.diff(c).start(d);
      });
    } else
      vt.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), AP(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && wP(this), this;
  }
  runAsync(t, n) {
    var r = this;
    t.delay;
    let a = br(t, ["delay"]);
    const o = this.local;
    let u = Promise.resolve(void 0);
    if (vt.arr(a.to))
      for (let c = 0; c < a.to.length; c++) {
        const d = c, f = Et({}, a, Xu(a.to[d]));
        vt.arr(f.config) && (f.config = f.config[d]), u = u.then(() => {
          if (o === this.guid)
            return new Promise((h) => this.diff(f).start(h));
        });
      }
    else if (vt.fun(a.to)) {
      let c = 0, d;
      u = u.then(() => a.to(
        // next(props)
        (f) => {
          const h = Et({}, a, Xu(f));
          if (vt.arr(h.config) && (h.config = h.config[c]), c++, o === this.guid)
            return d = new Promise((m) => this.diff(h).start(m));
        },
        // cancel()
        function(f) {
          return f === void 0 && (f = !0), r.stop(f);
        }
      ).then(() => d));
    }
    u.then(n);
  }
  diff(t) {
    this.props = Et({}, this.props, t);
    let n = this.props, r = n.from, a = r === void 0 ? {} : r, o = n.to, u = o === void 0 ? {} : o, c = n.config, d = c === void 0 ? {} : c, f = n.reverse, h = n.attach, m = n.reset, g = n.immediate;
    if (f) {
      var v = [u, a];
      a = v[0], u = v[1];
    }
    this.merged = Et({}, a, this.merged, u), this.hasChanged = !1;
    let y = h && h(this);
    if (this.animations = Object.entries(this.merged).reduce((E, b) => {
      let x = b[0], w = b[1], A = E[x] || {};
      const D = vt.num(w), _ = vt.str(w) && !w.startsWith("#") && !/\d/.test(w) && !zx[w], C = vt.arr(w), $ = !D && !C && !_;
      let O = vt.und(a[x]) ? w : a[x], I = D || C || _ ? w : 1, B = Nr(d, x);
      y && (I = y.animations[x].parent);
      let L = A.parent, N = A.interpolation, z = Ra(y ? I.getPayload() : I), W, M = w;
      $ && (M = Ul({
        range: [0, 1],
        output: [w, w]
      })(1));
      let H = N && N.getValue();
      const re = !vt.und(L) && A.animatedValues.some((oe) => !oe.done), ie = !vt.equ(M, H), te = !vt.equ(M, A.previous), ce = !vt.equ(B, A.config);
      if (m || te && ie || ce) {
        if (D || _)
          L = N = A.parent || new qd(O);
        else if (C)
          L = N = A.parent || new DP(O);
        else if ($) {
          let oe = A.interpolation && A.interpolation.calc(A.parent.value);
          oe = oe !== void 0 && !m ? oe : O, A.parent ? (L = A.parent, L.setValue(0, !1)) : L = new qd(0);
          const Se = {
            output: [oe, w]
          };
          A.interpolation ? (N = A.interpolation, A.interpolation.updateConfig(Se)) : N = L.interpolate(Se);
        }
        return z = Ra(y ? I.getPayload() : I), W = Ra(L.getPayload()), m && !$ && L.setValue(O, !1), this.hasChanged = !0, W.forEach((oe) => {
          oe.startPosition = oe.value, oe.lastPosition = oe.value, oe.lastVelocity = re ? oe.lastVelocity : void 0, oe.lastTime = re ? oe.lastTime : void 0, oe.startTime = Vx(), oe.done = !1, oe.animatedStyles.clear();
        }), Nr(g, x) && L.setValue($ ? I : w, !1), Et({}, E, {
          [x]: Et({}, A, {
            name: x,
            parent: L,
            interpolation: N,
            animatedValues: W,
            toValues: z,
            previous: M,
            config: B,
            fromValues: Ra(L.getValue()),
            immediate: Nr(g, x),
            initialVelocity: qi(B.velocity, 0),
            clamp: qi(B.clamp, !1),
            precision: qi(B.precision, 0.01),
            tension: qi(B.tension, 170),
            friction: qi(B.friction, 26),
            mass: qi(B.mass, 1),
            duration: B.duration,
            easing: qi(B.easing, (oe) => oe),
            decay: B.decay
          })
        });
      } else
        return ie ? E : ($ && (L.setValue(1, !1), N.updateConfig({
          output: [M, M]
        })), L.done = !0, this.hasChanged = !0, Et({}, E, {
          [x]: Et({}, E[x], {
            previous: M
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
let PP = 0;
const Ol = "enter", Zu = "leave", Qu = "update", kP = (e, t) => (typeof t == "function" ? e.map(t) : Ra(t)).map(String), Kd = (e) => {
  let t = e.items, n = e.keys, r = n === void 0 ? (o) => o : n, a = br(e, ["items", "keys"]);
  return t = Ra(t !== void 0 ? t : null), Et({
    items: t,
    keys: kP(t, r)
  }, a);
};
function LP(e, t, n) {
  const r = Et({
    items: e,
    keys: t || ((w) => w)
  }, n), a = Kd(r), o = a.lazy, u = o === void 0 ? !1 : o;
  a.unique;
  const c = a.reset, d = c === void 0 ? !1 : c;
  a.enter, a.leave, a.update;
  const f = a.onDestroyed;
  a.keys, a.items;
  const h = a.onFrame, m = a.onRest, g = a.onStart, v = a.ref, y = br(a, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), E = Bx(), b = F.useRef(!1), x = F.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!r.ref,
    instances: !b.current && /* @__PURE__ */ new Map(),
    forceUpdate: E
  });
  return F.useImperativeHandle(r.ref, () => ({
    start: () => Promise.all(Array.from(x.current.instances).map((w) => {
      let A = w[1];
      return new Promise((D) => A.start(D));
    })),
    stop: (w) => Array.from(x.current.instances).forEach((A) => A[1].stop(w)),
    get controllers() {
      return Array.from(x.current.instances).map((w) => w[1]);
    }
  })), x.current = RP(x.current, r), x.current.changed && x.current.transitions.forEach((w) => {
    const A = w.slot, D = w.from, _ = w.to, C = w.config, $ = w.trail, O = w.key, I = w.item;
    x.current.instances.has(O) || x.current.instances.set(O, new OP());
    const B = x.current.instances.get(O), L = Et({}, y, {
      to: _,
      from: D,
      config: C,
      ref: v,
      onRest: (N) => {
        x.current.mounted && (w.destroyed && (!v && !u && Zg(x, O), f && f(I)), !Array.from(x.current.instances).some((M) => !M[1].idle) && (v || u) && x.current.deleted.length > 0 && Zg(x), m && m(I, A, N));
      },
      onStart: g && (() => g(I, A)),
      onFrame: h && ((N) => h(I, A, N)),
      delay: $,
      reset: d && A === Ol
      // Update controller
    });
    B.update(L), x.current.paused || B.start();
  }), F.useEffect(() => (x.current.mounted = b.current = !0, () => {
    x.current.mounted = b.current = !1, Array.from(x.current.instances).map((w) => w[1].destroy()), x.current.instances.clear();
  }), []), x.current.transitions.map((w) => {
    let A = w.item, D = w.slot, _ = w.key;
    return {
      item: A,
      key: _,
      state: D,
      props: x.current.instances.get(_).getValues()
    };
  });
}
function Zg(e, t) {
  const n = e.current.deleted;
  for (let r of n) {
    let a = r.key;
    const o = (u) => u.key !== a;
    (vt.und(t) || t === a) && (e.current.instances.delete(a), e.current.transitions = e.current.transitions.filter(o), e.current.deleted = e.current.deleted.filter(o));
  }
  e.current.forceUpdate();
}
function RP(e, t) {
  let n = e.first, r = e.prevProps, a = br(e, ["first", "prevProps"]), o = Kd(t), u = o.items, c = o.keys, d = o.initial, f = o.from, h = o.enter, m = o.leave, g = o.update, v = o.trail, y = v === void 0 ? 0 : v, E = o.unique, b = o.config, x = o.order, w = x === void 0 ? [Ol, Zu, Qu] : x, A = Kd(r), D = A.keys, _ = A.items, C = Et({}, a.current), $ = [...a.deleted], O = Object.keys(C), I = new Set(O), B = new Set(c), L = c.filter((H) => !I.has(H)), N = a.transitions.filter((H) => !H.destroyed && !B.has(H.originalKey)).map((H) => H.originalKey), z = c.filter((H) => I.has(H)), W = -y;
  for (; w.length; )
    switch (w.shift()) {
      case Ol: {
        L.forEach((K, re) => {
          E && $.find((oe) => oe.originalKey === K) && ($ = $.filter((oe) => oe.originalKey !== K));
          const ie = c.indexOf(K), te = u[ie], ce = n && d !== void 0 ? "initial" : Ol;
          C[K] = {
            slot: ce,
            originalKey: K,
            key: E ? String(K) : PP++,
            item: te,
            trail: W = W + y,
            config: Nr(b, te, ce),
            from: Nr(n && d !== void 0 ? d || {} : f, te),
            to: Nr(h, te)
          };
        });
        break;
      }
      case Zu: {
        N.forEach((K) => {
          const re = D.indexOf(K), ie = _[re], te = Zu;
          $.unshift(Et({}, C[K], {
            slot: te,
            destroyed: !0,
            left: D[Math.max(0, re - 1)],
            right: D[Math.min(D.length, re + 1)],
            trail: W = W + y,
            config: Nr(b, ie, te),
            to: Nr(m, ie)
          })), delete C[K];
        });
        break;
      }
      case Qu: {
        z.forEach((K) => {
          const re = c.indexOf(K), ie = u[re], te = Qu;
          C[K] = Et({}, C[K], {
            item: ie,
            slot: te,
            trail: W = W + y,
            config: Nr(b, ie, te),
            to: Nr(g, ie)
          });
        });
        break;
      }
    }
  let M = c.map((H) => C[H]);
  return $.forEach((H) => {
    let K = H.left;
    H.right;
    let re = br(H, ["left", "right"]), ie;
    (ie = M.findIndex((te) => te.originalKey === K)) !== -1 && (ie += 1), ie = Math.max(0, ie), M = [...M.slice(0, ie), re, ...M.slice(ie)];
  }), Et({}, a, {
    changed: L.length || N.length || z.length,
    first: n && L.length === 0,
    transitions: M,
    current: C,
    deleted: $,
    prevProps: t
  });
}
class MP extends Fx {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Or) && (t = Gf.transform(t)), this.payload = t;
  }
}
const Kl = {
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
}, Pr = "[-+]?\\d*\\.?\\d+", jl = Pr + "%";
function Ec() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const $P = new RegExp("rgb" + Ec(Pr, Pr, Pr)), IP = new RegExp("rgba" + Ec(Pr, Pr, Pr, Pr)), BP = new RegExp("hsl" + Ec(Pr, jl, jl)), FP = new RegExp("hsla" + Ec(Pr, jl, jl, Pr)), zP = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, WP = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, VP = /^#([0-9a-fA-F]{6})$/, HP = /^#([0-9a-fA-F]{8})$/;
function UP(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = VP.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Kl.hasOwnProperty(e) ? Kl[e] : (t = $P.exec(e)) ? (Na(t[1]) << 24 | // r
  Na(t[2]) << 16 | // g
  Na(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = IP.exec(e)) ? (Na(t[1]) << 24 | // r
  Na(t[2]) << 16 | // g
  Na(t[3]) << 8 | // b
  ev(t[4])) >>> // a
  0 : (t = zP.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = HP.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = WP.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = BP.exec(e)) ? (Qg(
    Jg(t[1]),
    // h
    ml(t[2]),
    // s
    ml(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = FP.exec(e)) ? (Qg(
    Jg(t[1]),
    // h
    ml(t[2]),
    // s
    ml(t[3])
    // l
  ) | ev(t[4])) >>> // a
  0 : null;
}
function Ju(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Qg(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r, o = Ju(a, r, e + 1 / 3), u = Ju(a, r, e), c = Ju(a, r, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(u * 255) << 16 | Math.round(c * 255) << 8;
}
function Na(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Jg(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function ev(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function ml(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function tv(e) {
  let t = UP(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, a = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${a}, ${o})`;
}
const gl = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, qP = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, KP = new RegExp(`(${Object.keys(Kl).join("|")})`, "g"), jP = (e) => {
  const t = e.output.map((a) => a.replace(qP, tv)).map((a) => a.replace(KP, tv)), n = t[0].match(gl).map(() => []);
  t.forEach((a) => {
    a.match(gl).forEach((o, u) => n[u].push(+o));
  });
  const r = t[0].match(gl).map((a, o) => ql(Et({}, e, {
    output: n[o]
  })));
  return (a) => {
    let o = 0;
    return t[0].replace(gl, () => r[o++](a)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (u, c, d, f, h) => `rgba(${Math.round(c)}, ${Math.round(d)}, ${Math.round(f)}, ${h})`);
  };
};
let Bo = {
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
const GP = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), YP = ["Webkit", "Ms", "Moz", "O"];
Bo = Object.keys(Bo).reduce((e, t) => (YP.forEach((n) => e[GP(n, t)] = e[t]), e), Bo);
function XP(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(Bo.hasOwnProperty(e) && Bo[e]) ? t + "px" : ("" + t).trim();
}
const nv = {};
xP((e) => new MP(e));
vP(jP);
gP(Kl);
mP((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const a = t.style, o = t.children, u = t.scrollTop, c = t.scrollLeft, d = br(t, ["style", "children", "scrollTop", "scrollLeft"]), f = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    u !== void 0 && (e.scrollTop = u), c !== void 0 && (e.scrollLeft = c), o !== void 0 && (e.textContent = o);
    for (let h in a)
      if (a.hasOwnProperty(h)) {
        var n = h.indexOf("--") === 0, r = XP(h, a[h], n);
        h === "float" && (h = "cssFloat"), n ? e.style.setProperty(h, r) : e.style[h] = r;
      }
    for (let h in d) {
      const m = f ? h : nv[h] || (nv[h] = h.replace(/([A-Z])/g, (g) => "-" + g.toLowerCase()));
      typeof e.getAttribute(m) < "u" && e.setAttribute(m, d[h]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const ZP = [
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
], QP = fP(SP, !1), rv = QP(ZP);
var JP = Kx;
function Kx(e, t, n) {
  e instanceof RegExp && (e = iv(e, n)), t instanceof RegExp && (t = iv(t, n));
  var r = jx(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function iv(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
Kx.range = jx;
function jx(e, t, n) {
  var r, a, o, u, c, d = n.indexOf(e), f = n.indexOf(t, d + 1), h = d;
  if (d >= 0 && f > 0) {
    for (r = [], o = n.length; h >= 0 && !c; )
      h == d ? (r.push(h), d = n.indexOf(e, h + 1)) : r.length == 1 ? c = [r.pop(), f] : (a = r.pop(), a < o && (o = a, u = f), f = n.indexOf(t, h + 1)), h = d < f && d >= 0 ? d : f;
    r.length && (c = [o, u]);
  }
  return c;
}
var ek = Gx;
function Gx(e, t, n) {
  e instanceof RegExp && (e = av(e, n)), t instanceof RegExp && (t = av(t, n));
  var r = Yx(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function av(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
Gx.range = Yx;
function Yx(e, t, n) {
  var r, a, o, u, c, d = n.indexOf(e), f = n.indexOf(t, d + 1), h = d;
  if (d >= 0 && f > 0) {
    if (e === t)
      return [d, f];
    for (r = [], o = n.length; h >= 0 && !c; )
      h == d ? (r.push(h), d = n.indexOf(e, h + 1)) : r.length == 1 ? c = [r.pop(), f] : (a = r.pop(), a < o && (o = a, u = f), f = n.indexOf(t, h + 1)), h = d < f && d >= 0 ? d : f;
    r.length && (c = [o, u]);
  }
  return c;
}
var tk = ek, nk = Xx;
function Xx(e, t, n) {
  var r = e;
  return rk(e, t).reduce(function(a, o) {
    return a.replace(o.functionIdentifier + "(" + o.matches.body + ")", ik(o.matches.body, o.functionIdentifier, n, r, t));
  }, e);
}
function rk(e, t) {
  var n = [], r = typeof t == "string" ? new RegExp("\\b(" + t + ")\\(") : t;
  do {
    var a = r.exec(e);
    if (!a)
      return n;
    if (a[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + t);
    var o = a[1], u = a.index, c = tk("(", ")", e.substring(u));
    if (!c || c.start !== a[0].length - 1)
      throw new SyntaxError(o + "(): missing closing ')' in the value '" + e + "'");
    n.push({ matches: c, functionIdentifier: o }), e = c.post;
  } while (r.test(e));
  return n;
}
function ik(e, t, n, r, a) {
  return n(Xx(e, a, n), t, r);
}
var zn = function(e) {
  this.value = e;
};
zn.math = {
  isDegree: !0,
  // mode of calculator
  acos: function(e) {
    return zn.math.isDegree ? 180 / Math.PI * Math.acos(e) : Math.acos(e);
  },
  add: function(e, t) {
    return e + t;
  },
  asin: function(e) {
    return zn.math.isDegree ? 180 / Math.PI * Math.asin(e) : Math.asin(e);
  },
  atan: function(e) {
    return zn.math.isDegree ? 180 / Math.PI * Math.atan(e) : Math.atan(e);
  },
  acosh: function(e) {
    return Math.log(e + Math.sqrt(e * e - 1));
  },
  asinh: function(e) {
    return Math.log(e + Math.sqrt(e * e + 1));
  },
  atanh: function(e) {
    return Math.log((1 + e) / (1 - e));
  },
  C: function(e, t) {
    var n = 1, r = e - t, a = t;
    a < r && (a = r, r = t);
    for (var o = a + 1; o <= e; o++)
      n *= o;
    return n / zn.math.fact(r);
  },
  changeSign: function(e) {
    return -e;
  },
  cos: function(e) {
    return zn.math.isDegree && (e = zn.math.toRadian(e)), Math.cos(e);
  },
  cosh: function(e) {
    return (Math.pow(Math.E, e) + Math.pow(Math.E, -1 * e)) / 2;
  },
  div: function(e, t) {
    return e / t;
  },
  fact: function(e) {
    if (e % 1 !== 0)
      return "NaN";
    for (var t = 1, n = 2; n <= e; n++)
      t *= n;
    return t;
  },
  inverse: function(e) {
    return 1 / e;
  },
  log: function(e) {
    return Math.log(e) / Math.log(10);
  },
  mod: function(e, t) {
    return e % t;
  },
  mul: function(e, t) {
    return e * t;
  },
  P: function(e, t) {
    for (var n = 1, r = Math.floor(e) - Math.floor(t) + 1; r <= Math.floor(e); r++)
      n *= r;
    return n;
  },
  Pi: function(e, t, n) {
    for (var r = 1, a = e; a <= t; a++)
      r *= Number(n.postfixEval({
        n: a
      }));
    return r;
  },
  pow10x: function(e) {
    for (var t = 1; e--; )
      t *= 10;
    return t;
  },
  sigma: function(e, t, n) {
    for (var r = 0, a = e; a <= t; a++)
      r += Number(n.postfixEval({
        n: a
      }));
    return r;
  },
  sin: function(e) {
    return zn.math.isDegree && (e = zn.math.toRadian(e)), Math.sin(e);
  },
  sinh: function(e) {
    return (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e)) / 2;
  },
  sub: function(e, t) {
    return e - t;
  },
  tan: function(e) {
    return zn.math.isDegree && (e = zn.math.toRadian(e)), Math.tan(e);
  },
  tanh: function(e) {
    return zn.sinha(e) / zn.cosha(e);
  },
  toRadian: function(e) {
    return e * Math.PI / 180;
  },
  and: function(e, t) {
    return e & t;
  }
};
zn.Exception = function(e) {
  this.message = e;
};
var ak = zn, ot = ak;
function Bn(e, t) {
  for (var n = 0; n < e.length; n++)
    e[n] += t;
  return e;
}
var Si = [
  { token: "sin", show: "sin", type: 0, value: ot.math.sin },
  { token: "cos", show: "cos", type: 0, value: ot.math.cos },
  { token: "tan", show: "tan", type: 0, value: ot.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: ot.math.P },
  { token: "C", show: "C", type: 10, value: ot.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: ot.math.asin },
  { token: "acos", show: "acos", type: 0, value: ot.math.acos },
  { token: "atan", show: "atan", type: 0, value: ot.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: ot.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: ot.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: ot.math.div },
  { token: "!", show: "!", type: 7, value: ot.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: ot.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: ot.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: ot.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: ot.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: ot.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: ot.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: ot.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: ot.math.add },
  { token: "-", show: "-", type: 9, value: ot.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: ot.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: ot.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: ot.math.and }
], jd = {
  0: 11,
  1: 0,
  2: 3,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 11,
  8: 11,
  9: 1,
  10: 10,
  11: 0,
  12: 11,
  13: 0,
  14: -1,
  15: 11
  // will be filtered after lexer
};
for (var vl = 0; vl < Si.length; vl++)
  Si[vl].precedence = jd[Si[vl].type];
var zr = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  9: !0,
  12: !0,
  13: !0,
  14: !0,
  15: !0
}, Oa = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0,
  10: !0,
  11: !0,
  12: !0,
  13: !0,
  15: !0
}, ok = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, Dr = {}, wo = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, sk = {
  1: !0
}, Wn = [
  [],
  [
    "1",
    "2",
    "3",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "+",
    "-",
    "*",
    "/",
    "(",
    ")",
    "^",
    "!",
    "P",
    "C",
    "e",
    "0",
    ".",
    ",",
    "n",
    " ",
    "&"
  ],
  ["pi", "ln", "Pi"],
  ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"],
  ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"],
  ["acosh", "atanh", "asinh", "Sigma"]
];
function lk(e, t, n, r) {
  for (var a = 0; a < r; a++)
    if (e[n + a] !== t[a])
      return !1;
  return !0;
}
ot.tokenTypes = {
  FUNCTION_WITH_ONE_ARG: 0,
  NUMBER: 1,
  BINARY_OPERATOR_HIGH_PRECENDENCE: 2,
  CONSTANT: 3,
  OPENING_PARENTHESIS: 4,
  CLOSING_PARENTHESIS: 5,
  DECIMAL: 6,
  POSTFIX_FUNCTION_WITH_ONE_ARG: 7,
  FUNCTION_WITH_N_ARGS: 8,
  BINARY_OPERATOR_LOW_PRECENDENCE: 9,
  BINARY_OPERATOR_PERMUTATION: 10,
  COMMA: 11,
  EVALUATED_FUNCTION: 12,
  EVALUATED_FUNCTION_PARAMETER: 13,
  SPACE: 14
};
ot.addToken = function(e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t].token.length, r = -1;
    e[t].type === ot.tokenTypes.FUNCTION_WITH_N_ARGS && e[t].numberOfArguments === void 0 && (e[t].numberOfArguments = 2), Wn[n] = Wn[n] || [];
    for (var a = 0; a < Wn[n].length; a++)
      if (e[t].token === Wn[n][a]) {
        r = Zx(Wn[n][a], Si);
        break;
      }
    r === -1 ? (Si.push(e[t]), e[t].precedence = jd[e[t].type], Wn.length <= e[t].token.length && (Wn[e[t].token.length] = []), Wn[e[t].token.length].push(e[t].token)) : (Si[r] = e[t], e[t].precedence = jd[e[t].type]);
  }
};
function Zx(e, t) {
  for (var n = 0; n < t.length; n++)
    if (t[n].token === e)
      return n;
  return -1;
}
function ck(e) {
  for (var t = [], n = e.length, r, a, o, u = 0; u < n; u++)
    if (!(u < n - 1 && e[u] === " " && e[u + 1] === " ")) {
      for (r = "", a = e.length - u > Wn.length - 2 ? Wn.length - 1 : e.length - u; a > 0; a--)
        if (Wn[a] !== void 0)
          for (o = 0; o < Wn[a].length; o++)
            lk(e, Wn[a][o], u, a) && (r = Wn[a][o], o = Wn[a].length, a = 0);
      if (u += r.length - 1, r === "")
        throw new ot.Exception("Can't understand after " + e.slice(u));
      t.push(Si[Zx(r, Si)]);
    }
  return t;
}
var uk = {
  value: ot.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, yl = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, _o = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
ot.lex = function(e, t) {
  var n = [_o], r = [], a = e, o = zr, u = 0, c = Dr, d = "", f;
  typeof t < "u" && ot.addToken(t);
  var h = {}, m = ck(a);
  for (f = 0; f < m.length; f++) {
    var g = m[f];
    if (g.type === 14) {
      if (f > 0 && f < m.length - 1 && m[f + 1].type === 1 && (m[f - 1].type === 1 || m[f - 1].type === 6))
        throw new ot.Exception("Unexpected Space");
      continue;
    }
    var v = g.token, y = g.type, E = g.value, b = g.precedence, x = g.show, w = n[n.length - 1], A;
    for (A = r.length; A-- && r[A] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(y) !== -1) {
        if (o[y] !== !0)
          throw new ot.Exception(v + " is not allowed after " + d);
        n.push(yl), o = Oa, c = wo, r.pop();
      }
    if (o[y] !== !0)
      throw new ot.Exception(v + " is not allowed after " + d);
    if (c[y] === !0 && (y = 2, E = ot.math.mul, x = "&times;", b = 3, f = f - 1), h = {
      value: E,
      type: y,
      pre: b,
      show: x,
      numberOfArguments: g.numberOfArguments
    }, y === 0)
      o = zr, c = Dr, Bn(r, 2), n.push(h), m[f + 1].type !== 4 && (n.push(_o), r.push(2));
    else if (y === 1)
      w.type === 1 ? (w.value += E, Bn(r, 1)) : n.push(h), o = Oa, c = ok;
    else if (y === 2)
      o = zr, c = Dr, Bn(r, 2), n.push(h);
    else if (y === 3)
      n.push(h), o = Oa, c = wo;
    else if (y === 4)
      Bn(r, 1), u++, o = zr, c = Dr, n.push(h);
    else if (y === 5) {
      if (!u)
        throw new ot.Exception("Closing parenthesis are more than opening one, wait What!!!");
      u--, o = Oa, c = wo, n.push(h), Bn(r, 1);
    } else if (y === 6) {
      if (w.hasDec)
        throw new ot.Exception("Two decimals are not allowed in one number");
      w.type !== 1 && (w = {
        value: 0,
        type: 1,
        pre: 0
      }, n.push(w)), o = sk, Bn(r, 1), c = Dr, w.value += E, w.hasDec = !0;
    } else
      y === 7 && (o = Oa, c = wo, Bn(r, 1), n.push(h));
    y === 8 ? (o = zr, c = Dr, Bn(r, g.numberOfArguments + 2), n.push(h), m[f + 1].type !== 4 && (n.push(_o), r.push(g.numberOfArguments + 2))) : y === 9 ? (w.type === 9 ? w.value === ot.math.add ? (w.value = E, w.show = x, Bn(r, 1)) : w.value === ot.math.sub && x === "-" && (w.value = ot.math.add, w.show = "+", Bn(r, 1)) : w.type !== 5 && w.type !== 7 && w.type !== 1 && w.type !== 3 && w.type !== 13 ? v === "-" && (o = zr, c = Dr, Bn(r, 2).push(2), n.push(uk), n.push(_o)) : (n.push(h), Bn(r, 2)), o = zr, c = Dr) : y === 10 ? (o = zr, c = Dr, Bn(r, 2), n.push(h)) : y === 11 ? (o = zr, c = Dr, n.push(h)) : y === 12 ? (o = zr, c = Dr, Bn(r, 6), n.push(h), m[f + 1].type !== 4 && (n.push(_o), r.push(6))) : y === 13 && (o = Oa, c = wo, n.push(h)), Bn(r, -1), d = v;
  }
  for (A = r.length; A--; )
    n.push(yl);
  if (o[5] !== !0)
    throw new ot.Exception("complete the expression");
  for (; u--; )
    n.push(yl);
  return n.push(yl), new ot(n);
};
var dk = ot, Gd = dk;
Gd.prototype.toPostfix = function() {
  for (var e = [], t, n, r, a, o, u = [{ value: "(", type: 4, pre: 0 }], c = this.value, d = 1; d < c.length; d++)
    if (c[d].type === 1 || c[d].type === 3 || c[d].type === 13)
      c[d].type === 1 && (c[d].value = Number(c[d].value)), e.push(c[d]);
    else if (c[d].type === 4)
      u.push(c[d]);
    else if (c[d].type === 5)
      for (; (n = u.pop()).type !== 4; )
        e.push(n);
    else if (c[d].type === 11) {
      for (; (n = u.pop()).type !== 4; )
        e.push(n);
      u.push(n);
    } else {
      t = c[d], a = t.pre, o = u[u.length - 1], r = o.pre;
      var f = o.value == "Math.pow" && t.value == "Math.pow";
      if (a > r)
        u.push(t);
      else {
        for (; r >= a && !f || f && a < r; )
          n = u.pop(), o = u[u.length - 1], e.push(n), r = o.pre, f = t.value == "Math.pow" && o.value == "Math.pow";
        u.push(t);
      }
    }
  return new Gd(e);
};
var fk = Gd, Fo = fk;
Fo.prototype.postfixEval = function(e) {
  e = e || {}, e.PI = Math.PI, e.E = Math.E;
  for (var t = [], n, r, a, o = this.value, u = typeof e.n < "u", c = 0; c < o.length; c++)
    if (o[c].type === 1)
      t.push({ value: o[c].value, type: 1 });
    else if (o[c].type === 3)
      t.push({ value: e[o[c].value], type: 1 });
    else if (o[c].type === 0)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(o[c]) : t[t.length - 1].value = o[c].value(t[t.length - 1].value);
    else if (o[c].type === 7)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(o[c]) : t[t.length - 1].value = o[c].value(t[t.length - 1].value);
    else if (o[c].type === 8) {
      for (var d = [], f = 0; f < o[c].numberOfArguments; f++)
        d.push(t.pop().value);
      t.push({ type: 1, value: o[c].value.apply(o[c], d.reverse()) });
    } else
      o[c].type === 10 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r.value = r.concat(n), r.value.push(o[c]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(o[c]), t.push(n)) : t.push({ type: 1, value: o[c].value(r.value, n.value) })) : o[c].type === 2 || o[c].type === 9 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r = r.concat(n), r.push(o[c]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(o[c]), t.push(n)) : t.push({ type: 1, value: o[c].value(r.value, n.value) })) : o[c].type === 12 ? (n = t.pop(), typeof n.type < "u" && (n = [n]), r = t.pop(), a = t.pop(), t.push({ type: 1, value: o[c].value(a.value, r.value, new Fo(n)) })) : o[c].type === 13 && (u ? t.push({ value: e[o[c].value], type: 3 }) : t.push([o[c]]));
  if (t.length > 1)
    throw new Fo.Exception("Uncaught Syntax error");
  return t[0].value > 1e15 ? "Infinity" : parseFloat(t[0].value.toFixed(15));
};
Fo.eval = function(e, t, n) {
  return typeof t > "u" ? this.lex(e).toPostfix().postfixEval() : typeof n > "u" ? typeof t.length < "u" ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(n);
};
var pk = Fo, Qx = pk;
Qx.prototype.formulaEval = function() {
  for (var e, t, n, r = [], a = this.value, o = 0; o < a.length; o++)
    a[o].type === 1 || a[o].type === 3 ? r.push({ value: a[o].type === 3 ? a[o].show : a[o].value, type: 1 }) : a[o].type === 13 ? r.push({ value: a[o].show, type: 1 }) : a[o].type === 0 ? r[r.length - 1] = { value: a[o].show + (a[o].show != "-" ? "(" : "") + r[r.length - 1].value + (a[o].show != "-" ? ")" : ""), type: 0 } : a[o].type === 7 ? r[r.length - 1] = { value: (r[r.length - 1].type != 1 ? "(" : "") + r[r.length - 1].value + (r[r.length - 1].type != 1 ? ")" : "") + a[o].show, type: 7 } : a[o].type === 10 ? (e = r.pop(), t = r.pop(), a[o].show === "P" || a[o].show === "C" ? r.push({ value: "<sup>" + t.value + "</sup>" + a[o].show + "<sub>" + e.value + "</sub>", type: 10 }) : r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + "<sup>" + e.value + "</sup>", type: 1 })) : a[o].type === 2 || a[o].type === 9 ? (e = r.pop(), t = r.pop(), r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + a[o].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""), type: a[o].type })) : a[o].type === 12 && (e = r.pop(), t = r.pop(), n = r.pop(), r.push({ value: a[o].show + "(" + n.value + "," + t.value + "," + e.value + ")", type: 12 }));
  return r[0].value;
};
var hk = Qx, mk = JP, gk = nk, vk = hk, yk = 100, xk = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, ed, bk = Ek;
function Ek(e, t) {
  ed = 0, t = Math.pow(10, t === void 0 ? 5 : t), e = e.replace(/\n+/g, " ");
  function n(a, o, u) {
    if (ed++ > yk)
      throw ed = 0, new Error("Call stack overflow for " + u);
    if (a === "")
      throw new Error(o + "(): '" + u + "' must contain a non-whitespace string");
    a = r(a, u);
    var c = Sk(a);
    if (c.length > 1 || a.indexOf("var(") > -1)
      return o + "(" + a + ")";
    var d = c[0] || "";
    d === "%" && (a = a.replace(/\b[0-9\.]+%/g, function(m) {
      return parseFloat(m.slice(0, -1)) * 0.01;
    }));
    var f = a.replace(new RegExp(d, "gi"), ""), h;
    try {
      h = vk.eval(f);
    } catch {
      return o + "(" + a + ")";
    }
    return d === "%" && (h *= 100), (o.length || d === "%") && (h = Math.round(h * t) / t), h += d, h;
  }
  function r(a, o) {
    a = a.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var u = "", c = a, d; d = xk.exec(c); ) {
      d[0].index > 0 && (u += c.substring(0, d[0].index));
      var f = mk("(", ")", c.substring([0].index));
      if (f.body === "")
        throw new Error("'" + a + "' must contain a non-whitespace string");
      var h = n(f.body, "", o);
      u += f.pre + h, c = f.post;
    }
    return u + c;
  }
  return gk(e, /((?:\-[a-z]+\-)?calc)\(/, n);
}
function Sk(e) {
  for (var t = [], n = [], r = /[\.0-9]([%a-z]+)/gi, a = r.exec(e); a; )
    !a || !a[1] || (n.indexOf(a[1].toLowerCase()) === -1 && (t.push(a[1]), n.push(a[1].toLowerCase())), a = r.exec(e));
  return t;
}
const td = /* @__PURE__ */ Ty(bk);
var ov = "__react_svg_text_measurement_id";
function Ak(e, t) {
  try {
    var n = document.getElementById(ov);
    if (!n) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttribute("aria-hidden", "true"), r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", n = document.createElementNS("http://www.w3.org/2000/svg", "text"), n.setAttribute("id", ov), r.appendChild(n), document.body.appendChild(r);
    }
    return Object.assign(n.style, t), n.textContent = e, n.getComputedTextLength();
  } catch {
    return null;
  }
}
const sv = sT(Ak, function(e, t) {
  return e + "_" + JSON.stringify(t);
});
var wk = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function _k(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function nd(e) {
  return typeof e == "number";
}
function lv(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function Ck(e) {
  var t = e.verticalAnchor, n = t === void 0 ? "end" : t, r = e.scaleToFit, a = r === void 0 ? !1 : r, o = e.angle, u = e.width, c = e.lineHeight, d = c === void 0 ? "1em" : c, f = e.capHeight, h = f === void 0 ? "0.71em" : f, m = e.children, g = e.style, v = _k(e, wk), y = v.x, E = y === void 0 ? 0 : y, b = v.y, x = b === void 0 ? 0 : b, w = !lv(E) || !lv(x), A = F.useMemo(function() {
    var I = m == null ? [] : m.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: I.map(function(B) {
        return {
          word: B,
          wordWidth: sv(B, g) || 0
        };
      }),
      spaceWidth: sv(" ", g) || 0
    };
  }, [m, g]), D = A.wordsWithWidth, _ = A.spaceWidth, C = F.useMemo(function() {
    return w ? [] : u || a ? D.reduce(function(I, B) {
      var L = B.word, N = B.wordWidth, z = I[I.length - 1];
      if (z && (u == null || a || (z.width || 0) + N + _ < u))
        z.words.push(L), z.width = z.width || 0, z.width += N + _;
      else {
        var W = {
          words: [L],
          width: N
        };
        I.push(W);
      }
      return I;
    }, []) : [{
      words: m == null ? [] : m.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [w, u, a, m, D, _]), $ = F.useMemo(function() {
    var I = w ? "" : td(n === "start" ? "calc(" + h + ")" : n === "middle" ? "calc(" + (C.length - 1) / 2 + " * -" + d + " + (" + h + " / 2))" : "calc(" + (C.length - 1) + " * -" + d + ")");
    return I;
  }, [w, n, h, C.length, d]), O = F.useMemo(function() {
    var I = [];
    if (w)
      return "";
    if (nd(E) && nd(x) && nd(u) && a && C.length > 0) {
      var B = C[0].width || 1, L = a === "shrink-only" ? Math.min(u / B, 1) : u / B, N = L, z = E - L * E, W = x - N * x;
      I.push("matrix(" + L + ", 0, 0, " + N + ", " + z + ", " + W + ")");
    }
    return o && I.push("rotate(" + o + ", " + E + ", " + x + ")"), I.length > 0 ? I.join(" ") : "";
  }, [w, E, x, u, a, C, o]);
  return {
    wordsByLines: C,
    startDy: $,
    transform: O
  };
}
var Tk = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function Yd() {
  return Yd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yd.apply(this, arguments);
}
function Dk(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Nk = {
  overflow: "visible"
};
function ut(e) {
  var t = e.dx, n = t === void 0 ? 0 : t, r = e.dy, a = r === void 0 ? 0 : r, o = e.textAnchor, u = o === void 0 ? "start" : o, c = e.innerRef, d = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var f = e.lineHeight, h = f === void 0 ? "1em" : f;
  e.scaleToFit, e.capHeight, e.width;
  var m = Dk(e, Tk), g = m.x, v = g === void 0 ? 0 : g, y = m.fontSize, E = Ck(e), b = E.wordsByLines, x = E.startDy, w = E.transform;
  return /* @__PURE__ */ l.createElement("svg", {
    ref: c,
    x: n,
    y: a,
    fontSize: y,
    style: Nk
  }, b.length > 0 ? /* @__PURE__ */ l.createElement("text", Yd({
    ref: d,
    transform: w
  }, m, {
    textAnchor: u
  }), b.map(function(A, D) {
    return /* @__PURE__ */ l.createElement("tspan", {
      key: D,
      x: v,
      dy: D === 0 ? x : h
    }, A.words.join(" "));
  })) : null);
}
var Ok = ["tooltipOpen"];
function Pk(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Gl() {
  return Gl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gl.apply(this, arguments);
}
function Jx(e) {
  var t = F.useState(Gl({
    tooltipOpen: !1
  }, e)), n = t[0], r = t[1], a = F.useCallback(function(u) {
    return r(typeof u == "function" ? function(c) {
      c.tooltipOpen;
      var d = Pk(c, Ok);
      return Gl({}, u(d), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: u.tooltipLeft,
      tooltipTop: u.tooltipTop,
      tooltipData: u.tooltipData
    });
  }, [r]), o = F.useCallback(function() {
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
var kk = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function Yl() {
  return Yl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yl.apply(this, arguments);
}
function Lk(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var eb = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, Yf = /* @__PURE__ */ l.forwardRef(function(e, t) {
  var n = e.className, r = e.top, a = e.left, o = e.offsetLeft, u = o === void 0 ? 10 : o, c = e.offsetTop, d = c === void 0 ? 10 : c, f = e.style, h = f === void 0 ? eb : f, m = e.children, g = e.unstyled, v = g === void 0 ? !1 : g, y = e.applyPositionStyle, E = y === void 0 ? !1 : y, b = Lk(e, kk);
  return /* @__PURE__ */ l.createElement("div", Yl({
    ref: t,
    className: Yt("visx-tooltip", n),
    style: Yl({
      top: r == null || d == null ? r : r + d,
      left: a == null || u == null ? a : a + u
    }, E && {
      position: "absolute"
    }, !v && h)
  }, b), m);
});
Yf.propTypes = {
  children: G.node,
  className: G.string,
  left: G.number,
  offsetLeft: G.number,
  offsetTop: G.number,
  top: G.number,
  applyPositionStyle: G.bool,
  unstyled: G.bool
};
Yf.displayName = "Tooltip";
const Rk = Yf;
function Xd() {
  return Xd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xd.apply(this, arguments);
}
function Mk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $k(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Zd(e, t);
}
function Zd(e, t) {
  return Zd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Zd(e, t);
}
var cv = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function Ik(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    $k(r, n);
    function r(o) {
      var u;
      return u = n.call(this, o) || this, u.state = {
        rect: void 0,
        parentRect: void 0
      }, u.nodeRef = /* @__PURE__ */ l.createRef(), u.getRects = u.getRects.bind(Mk(u)), u;
    }
    var a = r.prototype;
    return a.componentDidMount = function() {
      var u, c = this;
      this.node = (u = this.nodeRef) != null && u.current ? this.nodeRef.current : Ly.findDOMNode(this), this.setState(function() {
        return c.getRects();
      });
    }, a.getRects = function() {
      if (!this.node)
        return this.state;
      var u = this.node, c = u.parentNode, d = u.getBoundingClientRect ? u.getBoundingClientRect() : cv, f = c != null && c.getBoundingClientRect ? c.getBoundingClientRect() : cv;
      return {
        rect: d,
        parentRect: f
      };
    }, a.render = function() {
      return /* @__PURE__ */ l.createElement(e, Xd({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, r;
  }(l.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var tb = /* @__PURE__ */ F.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), Bk = tb.Provider;
tb.Consumer;
var Fk = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function Xl() {
  return Xl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xl.apply(this, arguments);
}
function zk(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function nb(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, r = n === void 0 ? 0 : n, a = e.offsetLeft, o = a === void 0 ? 10 : a, u = e.offsetTop, c = u === void 0 ? 10 : u, d = e.parentRect, f = e.rect, h = e.style, m = h === void 0 ? eb : h, g = e.top, v = g === void 0 ? 0 : g, y = e.unstyled, E = y === void 0 ? !1 : y, b = e.nodeRef, x = zk(e, Fk), w, A = !1, D = !1;
  if (f && d) {
    var _ = r, C = v;
    if (d.width) {
      var $ = _ + o + f.width - d.width, O = f.width - _ - o;
      A = $ > 0 && $ > O;
    } else {
      var I = _ + o + f.width - window.innerWidth, B = f.width - _ - o;
      A = I > 0 && I > B;
    }
    if (d.height) {
      var L = C + c + f.height - d.height, N = f.height - C - c;
      D = L > 0 && L > N;
    } else
      D = C + c + f.height > window.innerHeight;
    _ = A ? _ - f.width - o : _ + o, C = D ? C - f.height - c : C + c, _ = Math.round(_), C = Math.round(C), w = "translate(" + _ + "px, " + C + "px)";
  }
  return /* @__PURE__ */ l.createElement(Rk, Xl({
    ref: b,
    style: Xl({
      left: 0,
      top: 0,
      transform: w
    }, !E && m)
  }, x), /* @__PURE__ */ l.createElement(Bk, {
    value: {
      isFlippedVertically: !D,
      isFlippedHorizontally: !A
    }
  }, t));
}
nb.propTypes = {
  nodeRef: G.oneOfType([G.string, G.func, G.object])
};
const rb = Ik(nb);
var Ha = /* @__PURE__ */ function() {
  function e(n) {
    var r = n.x, a = r === void 0 ? 0 : r, o = n.y, u = o === void 0 ? 0 : o;
    this.x = 0, this.y = 0, this.x = a, this.y = u;
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
function Wk(e, t) {
  return new Ha({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function Vk(e, t) {
  return new Ha({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const Hk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: Ha,
  subtractPoints: Vk,
  sumPoints: Wk
}, Symbol.toStringTag, { value: "Module" }));
function Uk(e) {
  return !!e && e instanceof Element;
}
function qk(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function Kk(e) {
  return !!e && "createSVGPoint" in e;
}
function jk(e) {
  return !!e && "getScreenCTM" in e;
}
function Gk(e) {
  return !!e && "changedTouches" in e;
}
function Yk(e) {
  return !!e && "clientX" in e;
}
function Xk(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function zo() {
  return zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zo.apply(this, arguments);
}
var rd = {
  x: 0,
  y: 0
};
function Zk(e) {
  if (!e)
    return zo({}, rd);
  if (Gk(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : zo({}, rd);
  if (Yk(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : zo({}, rd);
}
function Qd(e, t) {
  if (!e || !t)
    return null;
  var n = Zk(t), r = qk(e) ? e.ownerSVGElement : e, a = jk(r) ? r.getScreenCTM() : null;
  if (Kk(r) && a) {
    var o = r.createSVGPoint();
    return o.x = n.x, o.y = n.y, o = o.matrixTransform(a.inverse()), new Ha({
      x: o.x,
      y: o.y
    });
  }
  var u = e.getBoundingClientRect();
  return new Ha({
    x: n.x - u.left - e.clientLeft,
    y: n.y - u.top - e.clientTop
  });
}
function Jd(e, t) {
  if (Uk(e) && t)
    return Qd(e, t);
  if (Xk(e)) {
    var n = e, r = n.target;
    if (r)
      return Qd(r, n);
  }
  return null;
}
const Qk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Jd,
  touchPoint: Qd
}, Symbol.toStringTag, { value: "Module" })), ib = (e) => {
  const { tableData: t, config: n, formatNumber: r, capitalize: a, formatDate: o, parseDate: u } = F.useContext(pt), { xScale: c, yScale: d, showTooltip: f, hideTooltip: h } = e, { xAxis: m, visualizationType: g, orientation: v, yAxis: y, runtime: E } = n, b = (N, z) => {
    const { x: W, y: M } = z, K = {
      data: N || {},
      dataXPosition: W + 10,
      dataYPosition: M
    };
    return {
      tooltipLeft: K.dataXPosition,
      tooltipTop: K.dataYPosition,
      tooltipData: K
    };
  }, x = (N, z) => {
    N.stopPropagation();
    const W = Jd(N), { x: M, y: H } = W, { data: K, arc: re } = z, ie = D(M - Number(n.yAxis.size || 0)), te = g !== "Pie" ? n.series.filter((De) => De.tooltip === !0).map((De) => De.dataKey) : n.series.map((De) => De.dataKey);
    te.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((De) => {
      De.confidenceIntervals.map((le) => {
        le.showInTooltip && (te.push(le.high), te.push(le.low));
      });
    });
    const ce = $(ie, te), oe = t.filter((De) => De[m.dataKey] === _(H)), Se = v === "vertical" ? ce : oe;
    g === "Forest Plot" && (t == null || t.filter((De) => De[m.dataKey] === _(H))[0][n.forestPlot.estimateField]);
    const Te = (De) => {
      const le = n.series.filter((me) => me.dataKey === De)[0];
      return le != null && le.axis ? String(le.axis).toLowerCase() : "left";
    }, Ie = (() => {
      if (g === "Forest Plot") {
        const De = n.columns, le = [];
        for (const [me, V] of Object.entries(De)) {
          const Oe = {
            addColPrefix: n.columns[me].prefix,
            addColSuffix: n.columns[me].suffix,
            addColRoundTo: n.columns[me].roundToPlace ? n.columns[me].roundToPlace : "",
            addColCommas: n.columns[me].commas
          };
          let ae = _(H, V.name);
          const Ne = KC(ae, "left", !0, n, Oe);
          V.tooltips && le.push([V.label, Ne]);
        }
        const ee = [];
        return ee.push([n.xAxis.dataKey, _(H)]), le.forEach((me) => {
          ee.push([me[0], me[1]]);
        }), ee;
      }
      return g === "Pie" ? [
        [n.xAxis.dataKey, K],
        [n.runtime.yAxis.dataKey, r(re == null ? void 0 : re.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((re == null ? void 0 : re.endAngle) - (re == null ? void 0 : re.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ] : O().filter(Boolean).flatMap((De, le) => Se[0][De] ? [[De, Se[0][De], Te(De)]] : []);
    })();
    if (!Ie)
      return;
    const We = b(Ie, W);
    f(We);
  }, w = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      h();
    }, 3e3) : h();
  }, A = (N) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let z = c.step();
      const M = Math.floor(Number(N) / z);
      return c.domain()[M - 1];
    }
    if (n.xAxis.type === "date" && n.visualizationType !== "Combo") {
      const z = Pg((K) => u(K[n.xAxis.dataKey])).left, W = c.invert(c(N)), M = z(n.data, W, 1);
      return u(n.data[M - 1][n.xAxis.dataKey]);
    }
  }, D = (N) => {
    if (g !== "Pie" && v !== "horizontal") {
      if (c.type === "point" || m.type === "continuous" || m.type === "date") {
        let z = null, W = Number.MAX_VALUE, M = N;
        return t.forEach((H) => {
          const K = m.type === "date" ? c(u(H[m.dataKey])) : c(H[m.dataKey]), re = Math.abs(Number(K - M));
          re < W && (W = re, z = m.type === "date" ? u(H[m.dataKey]) : H[m.dataKey]);
        }), z;
      }
      if (n.xAxis.type === "categorical" || g === "Combo" && v !== "horizontal" && g !== "Forest Plot") {
        let z = c.step();
        const M = Math.floor(Number(N) / z);
        return c.domain()[M - 1];
      }
      if (n.xAxis.type === "date" && g !== "Combo" && v !== "horizontal") {
        const z = Pg((K) => u(K[n.xAxis.dataKey])).left, W = c.invert(N), M = z(n.data, W, 1);
        return u(n.data[M - 1][n.xAxis.dataKey]);
      }
    }
  }, _ = (N, z) => {
    if (g === "Pie")
      return;
    let W = Number.MAX_VALUE, M = null;
    return t.forEach((H, K) => {
      const re = d(g !== "Forest Plot" ? H[n.xAxis.dataKey] : K), ie = Math.abs(re - N);
      ie < W && (W = ie, M = z ? H[z] : H[n.xAxis.dataKey]);
    }), M;
  }, C = (N) => {
    try {
      const z = Jd(N), { x: W } = z;
      if (!W)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let M = D(W);
      if (!M)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      let H = n.data.filter((K) => K[n.xAxis.dataKey] === M);
      setSharedFilter && setSharedFilter(n.uid, H[0]);
    } catch (z) {
      console.error(z.message);
    }
  }, $ = (N, z) => {
    try {
      const W = o(N);
      let M;
      return m.type === "categorical" ? M = t.filter((K) => K[m.dataKey] === N) : M = t.filter((K) => o(u(K[m.dataKey])) === W), !M || M.length === 0 ? [] : M.map((K) => Object.fromEntries(Object.entries(K).filter(([re, ie]) => z.includes(re))));
    } catch (W) {
      console.error("COVE", W);
    }
  }, O = () => {
    var N;
    try {
      let z, W = [], M = [];
      if ((N = n.series) == null || N.forEach((H) => {
        H.type === "Forecasting" && (W.push(H.stageColumn), H == null || H.confidenceIntervals.forEach((K) => {
          K.showInTooltip === !0 && (M.push(K.low), M.push(K.high));
        }));
      }), !n.dashboard)
        switch (g) {
          case "Combo":
            z = [E.xAxis.dataKey, ...E == null ? void 0 : E.seriesKeys, ...W, ...M];
            break;
          case "Forecasting":
            z = [E.xAxis.dataKey, ...W, ...M];
            break;
          case "Line":
            z = [E.xAxis.dataKey, ...E == null ? void 0 : E.seriesKeys];
            break;
          case "Area Chart":
            z = [E.xAxis.dataKey, ...E == null ? void 0 : E.seriesKeys];
            break;
          case "Bar":
            z = v === "vertical" ? [E.xAxis.dataKey, ...E == null ? void 0 : E.seriesKeys] : [E.yAxis.dataKey, ...E == null ? void 0 : E.seriesKeys];
            break;
          case "Pie":
            z = [E.xAxis.dataKey, ...E == null ? void 0 : E.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (z = [E.xAxis.dataKey, ...E == null ? void 0 : E.barSeriesKeys, ...E == null ? void 0 : E.lineSeriesKeys, ...W, ...M]), z;
    } catch (z) {
      console.error("COVE", z);
    }
  }, I = (N) => {
    const { dataXPosition: z, dataYPosition: W } = N;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${z}px, ${Number(W)}px)`
    };
  }, B = (N) => {
    var W, M;
    let z = n.series.filter((H) => H.dataKey === N);
    return (W = z[0]) != null && W.name ? (M = z[0]) == null ? void 0 : M.name : N;
  };
  return {
    getIncludedTooltipSeries: O,
    getXValueFromCoordinate: D,
    getXValueFromCoordinateDate: A,
    getYScaleValues: $,
    handleTooltipClick: C,
    handleTooltipMouseOff: w,
    handleTooltipMouseOver: x,
    TooltipListItem: ({ item: N }) => {
      const [z, W] = N, [M, H, K] = W;
      return g === "Forest Plot" ? M === n.xAxis.dataKey ? /* @__PURE__ */ l.createElement("li", { className: "tooltip-heading" }, `${a(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${n.yAxis.type === "date" ? o(u(M, !1)) : H}`) : /* @__PURE__ */ l.createElement("li", { className: "tooltip-body" }, `${B(M)}: ${r(H, "left")}`) : g === "Bar" && v === "horizontal" && M === n.xAxis.dataKey ? /* @__PURE__ */ l.createElement("li", { className: "tooltip-heading" }, `${a(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${H}`) : M === n.xAxis.dataKey ? /* @__PURE__ */ l.createElement("li", { className: "tooltip-heading" }, `${a(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${n.xAxis.type === "date", H}`) : /* @__PURE__ */ l.createElement("li", { className: "tooltip-body" }, `${B(M)}: ${r(H, K)}`);
    },
    tooltipStyles: I
  };
};
function Xf(e, { threshold: t = 0, root: n = null, rootMargin: r = "0%", freezeOnceVisible: a = !1 }) {
  const [o, u] = F.useState(), c = (o == null ? void 0 : o.isIntersecting) && a, d = ([f]) => {
    u(f);
  };
  return F.useEffect(() => {
    setTimeout(() => {
      const f = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || c || !f)
        return;
      const m = { threshold: t, root: n, rootMargin: r }, g = new IntersectionObserver(d, m);
      return g.observe(f), () => g.disconnect();
    }, 500);
  }, [e, t, n, r, c]), o;
}
const xl = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), Jk = (e) => {
  const { transformedData: t, config: n, dimensions: r, seriesHighlight: a, colorScale: o, formatNumber: u, currentViewport: c, handleChartAriaLabels: d, isEditor: f } = F.useContext(pt), { tooltipData: h, showTooltip: m, hideTooltip: g, tooltipOpen: v, tooltipLeft: y, tooltipTop: E } = Jx(), { handleTooltipMouseOver: b, handleTooltipMouseOff: x, TooltipListItem: w } = ib({
    xScale: !1,
    yScale: !1,
    showTooltip: m,
    hideTooltip: g
  }), [A, D] = F.useState(void 0), [_, C] = F.useState(!1), $ = F.useRef(), O = Xf($, {
    freezeOnceVisible: !1
  });
  F.useEffect(() => {
    document.querySelector(".isEditor") && C((K) => !0);
  }), F.useEffect(() => {
    O != null && O.isIntersecting && n.animate && !_ && setTimeout(() => {
      C(!0);
    }, 500);
  }, [O == null ? void 0 : O.isIntersecting, n.animate]);
  const I = ({ arcs: H, path: K, getKey: re }) => {
    const ie = LP(H, re, {
      from: xl,
      enter: xl,
      update: xl,
      leave: xl
    });
    return F.useEffect(() => {
      const te = setTimeout(() => {
        g();
      }, 500);
      return () => {
        clearTimeout(te);
      };
    }, [h]), /* @__PURE__ */ l.createElement(l.Fragment, null, ie.map(({ item: te, props: ce, key: oe }, Se) => /* @__PURE__ */ l.createElement(He, { className: te.data[n.xAxis.dataKey], key: `${oe}-${Se}`, style: { opacity: n.legend.behavior === "highlight" && a.length > 0 && a.indexOf(te.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ l.createElement(
      rv.path,
      {
        d: TP(
          [ce.startAngle, ce.endAngle],
          (Te, ke) => K({
            ...te,
            startAngle: Te,
            endAngle: ke
          })
        ),
        fill: o(te.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (Te) => b(Te, { data: te.data[n.runtime.xAxis.dataKey], arc: te }),
        onMouseLeave: (Te) => x()
      }
    ))), ie.map(({ item: te, key: ce }) => {
      const [oe, Se] = K.centroid(te), Te = te.endAngle - te.startAngle >= 0.1;
      let ke = "#FFF";
      return o(te.data[n.runtime.xAxis.dataKey]) && ii.contrast(ke, o(te.data[n.runtime.xAxis.dataKey])) < 3.5 && (ke = "000"), /* @__PURE__ */ l.createElement(rv.g, { key: ce }, Te && /* @__PURE__ */ l.createElement(ut, { style: { fill: ke }, x: oe, y: Se, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((te.endAngle - te.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [B] = r;
  n && n.legend && !n.legend.hide && c === "lg" && (B = B * 0.73);
  const L = n.heights.vertical, N = Math.min(B, L) / 2, z = L / 2, W = B / 2, M = n.pieType === "Donut" ? 75 : N;
  return F.useEffect(() => {
    if (a.length > 0 && n.legend.behavior !== "highlight") {
      let H = [];
      t.forEach((K) => {
        a.indexOf(K[n.runtime.xAxis.dataKey]) !== -1 && H.push(K);
      }), D(H);
    } else
      D(void 0);
  }, [a]), /* @__PURE__ */ l.createElement(Lr, { component: "PieChart" }, /* @__PURE__ */ l.createElement("svg", { width: B, height: L, className: `animated-pie group ${n.animate === !1 || _ ? "animated" : ""}`, role: "img", "aria-label": d(n) }, /* @__PURE__ */ l.createElement(He, { top: z, left: W }, /* @__PURE__ */ l.createElement(
    dD,
    {
      data: A || t,
      pieValue: (H) => H[n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: N - M,
      outerRadius: N
    },
    (H) => /* @__PURE__ */ l.createElement(I, { ...H, getKey: (K) => K.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ l.createElement("div", { ref: $ }), h && Object.entries(h.data).length > 0 && v && m && h.dataYPosition && h.dataXPosition && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ l.createElement(rb, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: y, top: E }, /* @__PURE__ */ l.createElement("ul", null, typeof h == "object" && Object.entries(h.data).map((H, K) => /* @__PURE__ */ l.createElement(w, { item: H, key: K }))))));
};
var eL = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const Vn = eL;
function tL(e) {
  var t = e.labelOffset, n = e.labelProps, r = e.orientation, a = e.range, o = e.tickLabelFontSize, u = e.tickLength, c = r === Vn.left || r === Vn.top ? -1 : 1, d, f, h;
  if (r === Vn.top || r === Vn.bottom) {
    var m = r === Vn.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    d = (Number(a[0]) + Number(a[a.length - 1])) / 2, f = c * (u + t + o + m);
  } else
    d = c * ((Number(a[0]) + Number(a[a.length - 1])) / 2), f = -(u + t), h = "rotate(" + c * 90 + ")";
  return {
    x: d,
    y: f,
    transform: h
  };
}
function Wo() {
  return Wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wo.apply(this, arguments);
}
function nL(e) {
  var t = e.hideTicks, n = e.horizontal, r = e.orientation, a = e.tickClassName, o = e.tickComponent, u = e.tickLabelProps, c = e.tickStroke, d = c === void 0 ? "#222" : c, f = e.tickTransform, h = e.ticks, m = e.strokeWidth, g = e.tickLineProps;
  return h.map(function(v) {
    var y, E = v.value, b = v.index, x = v.from, w = v.to, A = v.formattedValue, D = (y = u[b]) != null ? y : {}, _ = Math.max(10, typeof D.fontSize == "number" && D.fontSize || 0), C = w.y + (n && r !== Vn.top ? _ : 0);
    return /* @__PURE__ */ l.createElement(He, {
      key: "visx-tick-" + E + "-" + b,
      className: Yt("visx-axis-tick", a),
      transform: f
    }, !t && /* @__PURE__ */ l.createElement(Mt, Wo({
      from: x,
      to: w,
      stroke: d,
      strokeWidth: m,
      strokeLinecap: "square"
    }, g)), o ? o(Wo({}, D, {
      x: w.x,
      y: C,
      formattedValue: A
    })) : /* @__PURE__ */ l.createElement(ut, Wo({
      x: w.x,
      y: C
    }, D), A));
  });
}
function Zl() {
  return Zl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zl.apply(this, arguments);
}
var uv = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function rL(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, r = e.axisToPoint, a = e.hideAxisLine, o = e.hideTicks, u = e.horizontal, c = e.label, d = c === void 0 ? "" : c, f = e.labelClassName, h = e.labelOffset, m = h === void 0 ? 14 : h, g = e.labelProps, v = g === void 0 ? uv : g, y = e.orientation, E = y === void 0 ? Vn.bottom : y, b = e.scale, x = e.stroke, w = x === void 0 ? "#222" : x, A = e.strokeDasharray, D = e.strokeWidth, _ = D === void 0 ? 1 : D, C = e.tickClassName, $ = e.tickComponent, O = e.tickLineProps, I = e.tickLabelProps, B = e.tickLength, L = B === void 0 ? 8 : B, N = e.tickStroke, z = N === void 0 ? "#222" : N, W = e.tickTransform, M = e.ticks, H = e.ticksComponent, K = H === void 0 ? nL : H, re = Zl({}, uv, typeof I == "object" ? I : null), ie = M.map(function(ce) {
    var oe = ce.value, Se = ce.index;
    return typeof I == "function" ? I(oe, Se, M) : re;
  }), te = Math.max.apply(Math, [10].concat(ie.map(function(ce) {
    return typeof ce.fontSize == "number" ? ce.fontSize : 0;
  })));
  return /* @__PURE__ */ l.createElement(l.Fragment, null, K({
    hideTicks: o,
    horizontal: u,
    orientation: E,
    scale: b,
    tickClassName: C,
    tickComponent: $,
    tickLabelProps: ie,
    tickStroke: z,
    tickTransform: W,
    ticks: M,
    strokeWidth: _,
    tickLineProps: O
  }), !a && /* @__PURE__ */ l.createElement(Mt, {
    className: Yt("visx-axis-line", n),
    from: t,
    to: r,
    stroke: w,
    strokeWidth: _,
    strokeDasharray: A
  }), d && /* @__PURE__ */ l.createElement(ut, Zl({
    className: Yt("visx-axis-label", f)
  }, tL({
    labelOffset: m,
    labelProps: v,
    orientation: E,
    range: b.range(),
    tickLabelFontSize: te,
    tickLength: L
  }), v), d));
}
function iL(e, t) {
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
function aL(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : lN;
}
function bl(e, t) {
  var n = e.x, r = e.y;
  return new Ha(t ? {
    x: n,
    y: r
  } : {
    x: r,
    y: n
  });
}
function ef() {
  return ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ef.apply(this, arguments);
}
var id = 0;
function oL(e) {
  return e === void 0 && (e = id), typeof e == "number" ? {
    start: e,
    end: e
  } : ef({
    start: id,
    end: id
  }, e);
}
var sL = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function tf() {
  return tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tf.apply(this, arguments);
}
function lL(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Sc(e) {
  var t = e.children, n = t === void 0 ? rL : t, r = e.axisClassName, a = e.hideAxisLine, o = a === void 0 ? !1 : a, u = e.hideTicks, c = u === void 0 ? !1 : u, d = e.hideZero, f = d === void 0 ? !1 : d, h = e.innerRef, m = e.left, g = m === void 0 ? 0 : m, v = e.numTicks, y = v === void 0 ? 10 : v, E = e.orientation, b = E === void 0 ? Vn.bottom : E, x = e.rangePadding, w = x === void 0 ? 0 : x, A = e.scale, D = e.tickFormat, _ = e.tickLength, C = _ === void 0 ? 8 : _, $ = e.tickValues, O = e.top, I = O === void 0 ? 0 : O, B = lL(e, sL), L = D ?? aL(A), N = b === Vn.left, z = b === Vn.top, W = z || b === Vn.bottom, M = iL(A), H = N || z ? -1 : 1, K = A.range(), re = oL(w), ie = bl({
    x: Number(K[0]) + 0.5 - re.start,
    y: 0
  }, W), te = bl({
    x: Number(K[K.length - 1]) + 0.5 + re.end,
    y: 0
  }, W), ce = ($ ?? sN(A, y)).filter(function(Se) {
    return !f || Se !== 0 && Se !== "0";
  }).map(function(Se, Te) {
    return {
      value: Se,
      index: Te
    };
  }), oe = ce.map(function(Se) {
    var Te = Se.value, ke = Se.index, Ie = oN(M(Te));
    return {
      value: Te,
      index: ke,
      from: bl({
        x: Ie,
        y: 0
      }, W),
      to: bl({
        x: Ie,
        y: C * H
      }, W),
      formattedValue: L(Te, ke, ce)
    };
  });
  return /* @__PURE__ */ l.createElement(He, {
    className: Yt("visx-axis", r),
    innerRef: h,
    top: I,
    left: g
  }, n(tf({}, B, {
    axisFromPoint: ie,
    axisToPoint: te,
    hideAxisLine: o,
    hideTicks: c,
    hideZero: f,
    horizontal: W,
    numTicks: y,
    orientation: b,
    rangePadding: w,
    scale: A,
    tickFormat: L,
    tickLength: C,
    tickPosition: M,
    tickSign: H,
    ticks: oe
  })));
}
var cL = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function Ql() {
  return Ql = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ql.apply(this, arguments);
}
function uL(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var dL = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function fL(e) {
  var t = e.axisClassName, n = e.labelOffset, r = n === void 0 ? 36 : n, a = e.tickLength, o = a === void 0 ? 8 : a, u = e.tickLabelProps, c = uL(e, cL), d = typeof u == "function" ? u : Ql({}, dL, u);
  return /* @__PURE__ */ l.createElement(Sc, Ql({
    axisClassName: Yt("visx-axis-left", t),
    labelOffset: r,
    orientation: Vn.left,
    tickLabelProps: d,
    tickLength: o
  }, c));
}
var pL = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function Jl() {
  return Jl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Jl.apply(this, arguments);
}
function hL(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var mL = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function gL(e) {
  var t = e.axisClassName, n = e.labelOffset, r = n === void 0 ? 36 : n, a = e.tickLength, o = a === void 0 ? 8 : a, u = e.tickLabelProps, c = hL(e, pL), d = typeof u == "function" ? u : Jl({}, mL, u);
  return /* @__PURE__ */ l.createElement(Sc, Jl({
    axisClassName: Yt("visx-axis-right", t),
    labelOffset: r,
    orientation: Vn.right,
    tickLabelProps: d,
    tickLength: o
  }, c));
}
var vL = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function ec() {
  return ec = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ec.apply(this, arguments);
}
function yL(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var xL = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function bL(e) {
  var t = e.axisClassName, n = e.labelOffset, r = n === void 0 ? 8 : n, a = e.tickLength, o = a === void 0 ? 8 : a, u = e.tickLabelProps, c = yL(e, vL), d = typeof u == "function" ? u : ec({}, xL, u);
  return /* @__PURE__ */ l.createElement(Sc, ec({
    axisClassName: Yt("visx-axis-top", t),
    labelOffset: r,
    orientation: Vn.top,
    tickLabelProps: d,
    tickLength: o
  }, c));
}
var EL = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function tc() {
  return tc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tc.apply(this, arguments);
}
function SL(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var AL = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Pl(e) {
  var t = e.axisClassName, n = e.labelOffset, r = n === void 0 ? 8 : n, a = e.tickLength, o = a === void 0 ? 8 : a, u = e.tickLabelProps, c = SL(e, EL), d = typeof u == "function" ? u : tc({}, AL, u);
  return /* @__PURE__ */ l.createElement(Sc, tc({
    axisClassName: Yt("visx-axis-bottom", t),
    labelOffset: r,
    orientation: Vn.bottom,
    tickLabelProps: d,
    tickLength: o
  }, c));
}
function us(e) {
  return e.split("-")[1];
}
function Zf(e) {
  return e === "y" ? "height" : "width";
}
function ra(e) {
  return e.split("-")[0];
}
function ds(e) {
  return ["top", "bottom"].includes(ra(e)) ? "x" : "y";
}
function dv(e, t, n) {
  let { reference: r, floating: a } = e;
  const o = r.x + r.width / 2 - a.width / 2, u = r.y + r.height / 2 - a.height / 2, c = ds(t), d = Zf(c), f = r[d] / 2 - a[d] / 2, h = c === "x";
  let m;
  switch (ra(t)) {
    case "top":
      m = { x: o, y: r.y - a.height };
      break;
    case "bottom":
      m = { x: o, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: u };
      break;
    case "left":
      m = { x: r.x - a.width, y: u };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (us(t)) {
    case "start":
      m[c] -= f * (n && h ? -1 : 1);
      break;
    case "end":
      m[c] += f * (n && h ? -1 : 1);
  }
  return m;
}
function ab(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Vo(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function ob(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: a, platform: o, rects: u, elements: c, strategy: d } = e, { boundary: f = "clippingAncestors", rootBoundary: h = "viewport", elementContext: m = "floating", altBoundary: g = !1, padding: v = 0 } = t, y = ab(v), E = c[g ? m === "floating" ? "reference" : "floating" : m], b = Vo(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(E))) == null || n ? E : E.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(c.floating)), boundary: f, rootBoundary: h, strategy: d })), x = m === "floating" ? { ...u.floating, x: r, y: a } : u.reference, w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c.floating)), A = await (o.isElement == null ? void 0 : o.isElement(w)) && await (o.getScale == null ? void 0 : o.getScale(w)) || { x: 1, y: 1 }, D = Vo(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: x, offsetParent: w, strategy: d }) : x);
  return { top: (b.top - D.top + y.top) / A.y, bottom: (D.bottom - b.bottom + y.bottom) / A.y, left: (b.left - D.left + y.left) / A.x, right: (D.right - b.right + y.right) / A.x };
}
const wL = Math.min, _L = Math.max;
function nf(e, t, n) {
  return _L(e, wL(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const CL = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => CL[t]);
}
function TL(e, t, n) {
  n === void 0 && (n = !1);
  const r = us(e), a = ds(e), o = Zf(a);
  let u = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (u = nc(u)), { main: u, cross: nc(u) };
}
const DL = { start: "end", end: "start" };
function ad(e) {
  return e.replace(/start|end/g, (t) => DL[t]);
}
const NL = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: r, middlewareData: a, rects: o, initialPlacement: u, platform: c, elements: d } = t, { mainAxis: f = !0, crossAxis: h = !0, fallbackPlacements: m, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: y = !0, ...E } = e, b = ra(r), x = ra(u) === u, w = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), A = m || (x || !y ? [nc(u)] : function(L) {
      const N = nc(L);
      return [ad(L), N, ad(N)];
    }(u));
    m || v === "none" || A.push(...function(L, N, z, W) {
      const M = us(L);
      let H = function(K, re, ie) {
        const te = ["left", "right"], ce = ["right", "left"], oe = ["top", "bottom"], Se = ["bottom", "top"];
        switch (K) {
          case "top":
          case "bottom":
            return ie ? re ? ce : te : re ? te : ce;
          case "left":
          case "right":
            return re ? oe : Se;
          default:
            return [];
        }
      }(ra(L), z === "start", W);
      return M && (H = H.map((K) => K + "-" + M), N && (H = H.concat(H.map(ad)))), H;
    }(u, y, v, w));
    const D = [u, ...A], _ = await ob(t, E), C = [];
    let $ = ((n = a.flip) == null ? void 0 : n.overflows) || [];
    if (f && C.push(_[b]), h) {
      const { main: L, cross: N } = TL(r, o, w);
      C.push(_[L], _[N]);
    }
    if ($ = [...$, { placement: r, overflows: C }], !C.every((L) => L <= 0)) {
      var O, I;
      const L = (((O = a.flip) == null ? void 0 : O.index) || 0) + 1, N = D[L];
      if (N)
        return { data: { index: L, overflows: $ }, reset: { placement: N } };
      let z = (I = $.find((W) => W.overflows[0] <= 0)) == null ? void 0 : I.placement;
      if (!z)
        switch (g) {
          case "bestFit": {
            var B;
            const W = (B = $.map((M) => [M.placement, M.overflows.filter((H) => H > 0).reduce((H, K) => H + K, 0)]).sort((M, H) => M[1] - H[1])[0]) == null ? void 0 : B[0];
            W && (z = W);
            break;
          }
          case "initialPlacement":
            z = u;
        }
      if (r !== z)
        return { reset: { placement: z } };
    }
    return {};
  } };
}, OL = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: r } = t, a = await async function(o, u) {
      const { placement: c, platform: d, elements: f } = o, h = await (d.isRTL == null ? void 0 : d.isRTL(f.floating)), m = ra(c), g = us(c), v = ds(c) === "x", y = ["left", "top"].includes(m) ? -1 : 1, E = h && v ? -1 : 1, b = typeof u == "function" ? u(o) : u;
      let { mainAxis: x, crossAxis: w, alignmentAxis: A } = typeof b == "number" ? { mainAxis: b, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...b };
      return g && typeof A == "number" && (w = g === "end" ? -1 * A : A), v ? { x: w * E, y: x * y } : { x: x * y, y: w * E };
    }(t, e);
    return { x: n + a.x, y: r + a.y, data: a };
  } };
}, PL = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: r, placement: a } = t, { mainAxis: o = !0, crossAxis: u = !1, limiter: c = { fn: (b) => {
      let { x, y: w } = b;
      return { x, y: w };
    } }, ...d } = e, f = { x: n, y: r }, h = await ob(t, d), m = ds(ra(a)), g = m === "x" ? "y" : "x";
    let v = f[m], y = f[g];
    if (o) {
      const b = m === "y" ? "bottom" : "right";
      v = nf(v + h[m === "y" ? "top" : "left"], v, v - h[b]);
    }
    if (u) {
      const b = g === "y" ? "bottom" : "right";
      y = nf(y + h[g === "y" ? "top" : "left"], y, y - h[b]);
    }
    const E = c.fn({ ...t, [m]: v, [g]: y });
    return { ...E, data: { x: E.x - n, y: E.y - r } };
  } };
};
function yr(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ur(e) {
  return yr(e).getComputedStyle(e);
}
const fv = Math.min, Ho = Math.max, rc = Math.round;
function sb(e) {
  const t = Ur(e);
  let n = parseFloat(t.width), r = parseFloat(t.height);
  const a = e.offsetWidth, o = e.offsetHeight, u = rc(n) !== a || rc(r) !== o;
  return u && (n = a, r = o), { width: n, height: r, fallback: u };
}
function Ni(e) {
  return cb(e) ? (e.nodeName || "").toLowerCase() : "";
}
let El;
function lb() {
  if (El)
    return El;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (El = e.brands.map((t) => t.brand + "/" + t.version).join(" "), El) : navigator.userAgent;
}
function qr(e) {
  return e instanceof yr(e).HTMLElement;
}
function Ai(e) {
  return e instanceof yr(e).Element;
}
function cb(e) {
  return e instanceof yr(e).Node;
}
function pv(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof yr(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ac(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: a } = Ur(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function kL(e) {
  return ["table", "td", "th"].includes(Ni(e));
}
function rf(e) {
  const t = /firefox/i.test(lb()), n = Ur(e), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((a) => n.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const o = n.contain;
    return o != null && o.includes(a);
  });
}
function ub() {
  return !/^((?!chrome|android).)*safari/i.test(lb());
}
function Qf(e) {
  return ["html", "body", "#document"].includes(Ni(e));
}
function db(e) {
  return Ai(e) ? e : e.contextElement;
}
const fb = { x: 1, y: 1 };
function $a(e) {
  const t = db(e);
  if (!qr(t))
    return fb;
  const n = t.getBoundingClientRect(), { width: r, height: a, fallback: o } = sb(t);
  let u = (o ? rc(n.width) : n.width) / r, c = (o ? rc(n.height) : n.height) / a;
  return u && Number.isFinite(u) || (u = 1), c && Number.isFinite(c) || (c = 1), { x: u, y: c };
}
function Zo(e, t, n, r) {
  var a, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const u = e.getBoundingClientRect(), c = db(e);
  let d = fb;
  t && (r ? Ai(r) && (d = $a(r)) : d = $a(e));
  const f = c ? yr(c) : window, h = !ub() && n;
  let m = (u.left + (h && ((a = f.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / d.x, g = (u.top + (h && ((o = f.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / d.y, v = u.width / d.x, y = u.height / d.y;
  if (c) {
    const E = yr(c), b = r && Ai(r) ? yr(r) : r;
    let x = E.frameElement;
    for (; x && r && b !== E; ) {
      const w = $a(x), A = x.getBoundingClientRect(), D = getComputedStyle(x);
      A.x += (x.clientLeft + parseFloat(D.paddingLeft)) * w.x, A.y += (x.clientTop + parseFloat(D.paddingTop)) * w.y, m *= w.x, g *= w.y, v *= w.x, y *= w.y, m += A.x, g += A.y, x = yr(x).frameElement;
    }
  }
  return { width: v, height: y, top: g, right: m + v, bottom: g + y, left: m, x: m, y: g };
}
function wi(e) {
  return ((cb(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function wc(e) {
  return Ai(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function pb(e) {
  return Zo(wi(e)).left + wc(e).scrollLeft;
}
function Qo(e) {
  if (Ni(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || pv(e) && e.host || wi(e);
  return pv(t) ? t.host : t;
}
function hb(e) {
  const t = Qo(e);
  return Qf(t) ? t.ownerDocument.body : qr(t) && Ac(t) ? t : hb(t);
}
function mb(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = hb(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = yr(r);
  return a ? t.concat(o, o.visualViewport || [], Ac(r) ? r : []) : t.concat(r, mb(r));
}
function hv(e, t, n) {
  return t === "viewport" ? Vo(function(r, a) {
    const o = yr(r), u = wi(r), c = o.visualViewport;
    let d = u.clientWidth, f = u.clientHeight, h = 0, m = 0;
    if (c) {
      d = c.width, f = c.height;
      const g = ub();
      (g || !g && a === "fixed") && (h = c.offsetLeft, m = c.offsetTop);
    }
    return { width: d, height: f, x: h, y: m };
  }(e, n)) : Ai(t) ? Vo(function(r, a) {
    const o = Zo(r, !0, a === "fixed"), u = o.top + r.clientTop, c = o.left + r.clientLeft, d = qr(r) ? $a(r) : { x: 1, y: 1 };
    return { width: r.clientWidth * d.x, height: r.clientHeight * d.y, x: c * d.x, y: u * d.y };
  }(t, n)) : Vo(function(r) {
    const a = wi(r), o = wc(r), u = r.ownerDocument.body, c = Ho(a.scrollWidth, a.clientWidth, u.scrollWidth, u.clientWidth), d = Ho(a.scrollHeight, a.clientHeight, u.scrollHeight, u.clientHeight);
    let f = -o.scrollLeft + pb(r);
    const h = -o.scrollTop;
    return Ur(u).direction === "rtl" && (f += Ho(a.clientWidth, u.clientWidth) - c), { width: c, height: d, x: f, y: h };
  }(wi(e)));
}
function mv(e) {
  return qr(e) && Ur(e).position !== "fixed" ? e.offsetParent : null;
}
function gv(e) {
  const t = yr(e);
  let n = mv(e);
  for (; n && kL(n) && Ur(n).position === "static"; )
    n = mv(n);
  return n && (Ni(n) === "html" || Ni(n) === "body" && Ur(n).position === "static" && !rf(n)) ? t : n || function(r) {
    let a = Qo(r);
    for (; qr(a) && !Qf(a); ) {
      if (rf(a))
        return a;
      a = Qo(a);
    }
    return null;
  }(e) || t;
}
function LL(e, t, n) {
  const r = qr(t), a = wi(t), o = Zo(e, !0, n === "fixed", t);
  let u = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (r || !r && n !== "fixed")
    if ((Ni(t) !== "body" || Ac(a)) && (u = wc(t)), qr(t)) {
      const d = Zo(t, !0);
      c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else
      a && (c.x = pb(a));
  return { x: o.left + u.scrollLeft - c.x, y: o.top + u.scrollTop - c.y, width: o.width, height: o.height };
}
const RL = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: a } = e;
  const o = n === "clippingAncestors" ? function(f, h) {
    const m = h.get(f);
    if (m)
      return m;
    let g = mb(f).filter((b) => Ai(b) && Ni(b) !== "body"), v = null;
    const y = Ur(f).position === "fixed";
    let E = y ? Qo(f) : f;
    for (; Ai(E) && !Qf(E); ) {
      const b = Ur(E), x = rf(E);
      (y ? x || v : x || b.position !== "static" || !v || !["absolute", "fixed"].includes(v.position)) ? v = b : g = g.filter((w) => w !== E), E = Qo(E);
    }
    return h.set(f, g), g;
  }(t, this._c) : [].concat(n), u = [...o, r], c = u[0], d = u.reduce((f, h) => {
    const m = hv(t, h, a);
    return f.top = Ho(m.top, f.top), f.right = fv(m.right, f.right), f.bottom = fv(m.bottom, f.bottom), f.left = Ho(m.left, f.left), f;
  }, hv(t, c, a));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const a = qr(n), o = wi(n);
  if (n === o)
    return t;
  let u = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((a || !a && r !== "fixed") && ((Ni(n) !== "body" || Ac(o)) && (u = wc(n)), qr(n))) {
    const f = Zo(n);
    c = $a(n), d.x = f.x + n.clientLeft, d.y = f.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - u.scrollLeft * c.x + d.x, y: t.y * c.y - u.scrollTop * c.y + d.y };
}, isElement: Ai, getDimensions: function(e) {
  return qr(e) ? sb(e) : e.getBoundingClientRect();
}, getOffsetParent: gv, getDocumentElement: wi, getScale: $a, async getElementRects(e) {
  let { reference: t, floating: n, strategy: r } = e;
  const a = this.getOffsetParent || gv, o = this.getDimensions;
  return { reference: LL(t, await a(n), r), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Ur(e).direction === "rtl" }, vv = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = { platform: RL, ...n }, o = { ...a.platform, _c: r };
  return (async (u, c, d) => {
    const { placement: f = "bottom", strategy: h = "absolute", middleware: m = [], platform: g } = d, v = m.filter(Boolean), y = await (g.isRTL == null ? void 0 : g.isRTL(c));
    if (g == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), v.filter((_) => {
      let { name: C } = _;
      return C === "autoPlacement" || C === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    u && c || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let E = await g.getElementRects({ reference: u, floating: c, strategy: h }), { x: b, y: x } = dv(E, f, y), w = f, A = {}, D = 0;
    for (let _ = 0; _ < v.length; _++) {
      const { name: C, fn: $ } = v[_], { x: O, y: I, data: B, reset: L } = await $({ x: b, y: x, initialPlacement: f, placement: w, strategy: h, middlewareData: A, rects: E, platform: g, elements: { reference: u, floating: c } });
      b = O ?? b, x = I ?? x, A = { ...A, [C]: { ...A[C], ...B } }, D > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), L && D <= 50 && (D++, typeof L == "object" && (L.placement && (w = L.placement), L.rects && (E = L.rects === !0 ? await g.getElementRects({ reference: u, floating: c, strategy: h }) : L.rects), { x: b, y: x } = dv(E, w, y)), _ = -1);
    }
    return { x: b, y: x, placement: w, strategy: h, middlewareData: A };
  })(e, t, { ...a, platform: o });
};
var yi, ia = { exports: {} }, yv = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
yi = yv, function() {
  var e = l, t = 60103, n = 60106;
  yi.Fragment = 60107;
  var r = 60108, a = 60114, o = 60109, u = 60110, c = 60112, d = 60113, f = 60120, h = 60115, m = 60116, g = 60121, v = 60122, y = 60117, E = 60129, b = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var x = Symbol.for;
    t = x("react.element"), n = x("react.portal"), yi.Fragment = x("react.fragment"), r = x("react.strict_mode"), a = x("react.profiler"), o = x("react.provider"), u = x("react.context"), c = x("react.forward_ref"), d = x("react.suspense"), f = x("react.suspense_list"), h = x("react.memo"), m = x("react.lazy"), g = x("react.block"), v = x("react.server.block"), y = x("react.fundamental"), x("react.scope"), x("react.opaque.id"), E = x("react.debug_trace_mode"), x("react.offscreen"), b = x("react.legacy_hidden");
  }
  var w = typeof Symbol == "function" && Symbol.iterator, A = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function D(ee) {
    for (var me = arguments.length, V = new Array(me > 1 ? me - 1 : 0), Oe = 1; Oe < me; Oe++)
      V[Oe - 1] = arguments[Oe];
    _("error", ee, V);
  }
  function _(ee, me, V) {
    var Oe = A.ReactDebugCurrentFrame, ae = "";
    if (I) {
      var Ne = $(I.type), Ee = I._owner;
      ae += function(nt, At, je) {
        var Le = "";
        if (At) {
          var Ae = At.fileName, xe = Ae.replace(C, "");
          if (/^index\./.test(xe)) {
            var ht = Ae.match(C);
            if (ht) {
              var we = ht[1];
              we && (xe = we.replace(C, "") + "/" + xe);
            }
          }
          Le = " (at " + xe + ":" + At.lineNumber + ")";
        } else
          je && (Le = " (created by " + je + ")");
        return `
    in ` + (nt || "Unknown") + Le;
      }(Ne, I._source, Ee && $(Ee.type));
    }
    (ae += Oe.getStackAddendum()) !== "" && (me += "%s", V = V.concat([ae]));
    var Pe = V.map(function(nt) {
      return "" + nt;
    });
    Pe.unshift("Warning: " + me), Function.prototype.apply.call(console[ee], console, Pe);
  }
  var C = /^(.*)[\\\/]/;
  function $(ee) {
    if (ee == null)
      return null;
    if (typeof ee.tag == "number" && D("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof ee == "function")
      return ee.displayName || ee.name || null;
    if (typeof ee == "string")
      return ee;
    switch (ee) {
      case yi.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case a:
        return "Profiler";
      case r:
        return "StrictMode";
      case d:
        return "Suspense";
      case f:
        return "SuspenseList";
    }
    if (typeof ee == "object")
      switch (ee.$$typeof) {
        case u:
          return "Context.Consumer";
        case o:
          return "Context.Provider";
        case c:
          return Oe = ee, ae = ee.render, Ne = "ForwardRef", Ee = ae.displayName || ae.name || "", Oe.displayName || (Ee !== "" ? Ne + "(" + Ee + ")" : Ne);
        case h:
          return $(ee.type);
        case g:
          return $(ee.render);
        case m:
          var me = (V = ee)._status === 1 ? V._result : null;
          if (me)
            return $(me);
      }
    var V, Oe, ae, Ne, Ee;
    return null;
  }
  var O = {};
  A.ReactDebugCurrentFrame;
  var I = null;
  function B(ee) {
    I = ee;
  }
  var L, N, z, W = A.ReactCurrentOwner, M = Object.prototype.hasOwnProperty, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function K(ee, me, V, Oe, ae) {
    var Ne, Ee = {}, Pe = null, nt = null;
    for (Ne in V !== void 0 && (Pe = "" + V), function(Le) {
      if (M.call(Le, "key")) {
        var Ae = Object.getOwnPropertyDescriptor(Le, "key").get;
        if (Ae && Ae.isReactWarning)
          return !1;
      }
      return Le.key !== void 0;
    }(me) && (Pe = "" + me.key), function(Le) {
      if (M.call(Le, "ref")) {
        var Ae = Object.getOwnPropertyDescriptor(Le, "ref").get;
        if (Ae && Ae.isReactWarning)
          return !1;
      }
      return Le.ref !== void 0;
    }(me) && (nt = me.ref, function(Le, Ae) {
      if (typeof Le.ref == "string" && W.current && Ae && W.current.stateNode !== Ae) {
        var xe = $(W.current.type);
        z[xe] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(W.current.type), Le.ref), z[xe] = !0);
      }
    }(me, ae)), me)
      M.call(me, Ne) && !H.hasOwnProperty(Ne) && (Ee[Ne] = me[Ne]);
    if (ee && ee.defaultProps) {
      var At = ee.defaultProps;
      for (Ne in At)
        Ee[Ne] === void 0 && (Ee[Ne] = At[Ne]);
    }
    if (Pe || nt) {
      var je = typeof ee == "function" ? ee.displayName || ee.name || "Unknown" : ee;
      Pe && function(Le, Ae) {
        var xe = function() {
          L || (L = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ae));
        };
        xe.isReactWarning = !0, Object.defineProperty(Le, "key", { get: xe, configurable: !0 });
      }(Ee, je), nt && function(Le, Ae) {
        var xe = function() {
          N || (N = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ae));
        };
        xe.isReactWarning = !0, Object.defineProperty(Le, "ref", { get: xe, configurable: !0 });
      }(Ee, je);
    }
    return function(Le, Ae, xe, ht, we, Ge, Xe) {
      var Y = { $$typeof: t, type: Le, key: Ae, ref: xe, props: Xe, _owner: Ge, _store: {} };
      return Object.defineProperty(Y._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(Y, "_self", { configurable: !1, enumerable: !1, writable: !1, value: ht }), Object.defineProperty(Y, "_source", { configurable: !1, enumerable: !1, writable: !1, value: we }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    }(ee, Pe, nt, ae, Oe, W.current, Ee);
  }
  z = {};
  var re, ie = A.ReactCurrentOwner;
  function te(ee) {
    I = ee;
  }
  function ce(ee) {
    return typeof ee == "object" && ee !== null && ee.$$typeof === t;
  }
  function oe() {
    if (ie.current) {
      var ee = $(ie.current.type);
      if (ee)
        return `

Check the render method of \`` + ee + "`.";
    }
    return "";
  }
  A.ReactDebugCurrentFrame, re = !1;
  var Se = {};
  function Te(ee, me) {
    if (ee._store && !ee._store.validated && ee.key == null) {
      ee._store.validated = !0;
      var V = function(ae) {
        var Ne = oe();
        if (!Ne) {
          var Ee = typeof ae == "string" ? ae : ae.displayName || ae.name;
          Ee && (Ne = `

Check the top-level render call using <` + Ee + ">.");
        }
        return Ne;
      }(me);
      if (!Se[V]) {
        Se[V] = !0;
        var Oe = "";
        ee && ee._owner && ee._owner !== ie.current && (Oe = " It was passed a child from " + $(ee._owner.type) + "."), te(ee), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, Oe), te(null);
      }
    }
  }
  function ke(ee, me) {
    if (typeof ee == "object") {
      if (Array.isArray(ee))
        for (var V = 0; V < ee.length; V++) {
          var Oe = ee[V];
          ce(Oe) && Te(Oe, me);
        }
      else if (ce(ee))
        ee._store && (ee._store.validated = !0);
      else if (ee) {
        var ae = function(Pe) {
          if (Pe === null || typeof Pe != "object")
            return null;
          var nt = w && Pe[w] || Pe["@@iterator"];
          return typeof nt == "function" ? nt : null;
        }(ee);
        if (typeof ae == "function" && ae !== ee.entries)
          for (var Ne, Ee = ae.call(ee); !(Ne = Ee.next()).done; )
            ce(Ne.value) && Te(Ne.value, me);
      }
    }
  }
  function Ie(ee) {
    var me, V = ee.type;
    if (V != null && typeof V != "string") {
      if (typeof V == "function")
        me = V.propTypes;
      else {
        if (typeof V != "object" || V.$$typeof !== c && V.$$typeof !== h)
          return;
        me = V.propTypes;
      }
      if (me) {
        var Oe = $(V);
        (function(ae, Ne, Ee, Pe, nt) {
          var At = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var je in ae)
            if (At(ae, je)) {
              var Le = void 0;
              try {
                if (typeof ae[je] != "function") {
                  var Ae = Error((Pe || "React class") + ": " + Ee + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof ae[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ae.name = "Invariant Violation", Ae;
                }
                Le = ae[je](Ne, je, Pe, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (xe) {
                Le = xe;
              }
              !Le || Le instanceof Error || (B(nt), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", Ee, je, typeof Le), B(null)), Le instanceof Error && !(Le.message in O) && (O[Le.message] = !0, B(nt), D("Failed %s type: %s", Ee, Le.message), B(null));
            }
        })(me, ee.props, "prop", Oe, ee);
      } else
        V.PropTypes === void 0 || re || (re = !0, D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $(V) || "Unknown"));
      typeof V.getDefaultProps != "function" || V.getDefaultProps.isReactClassApproved || D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function We(ee, me, V, Oe, ae, Ne) {
    var Ee = function(xe) {
      return typeof xe == "string" || typeof xe == "function" || xe === yi.Fragment || xe === a || xe === E || xe === r || xe === d || xe === f || xe === b || typeof xe == "object" && xe !== null && (xe.$$typeof === m || xe.$$typeof === h || xe.$$typeof === o || xe.$$typeof === u || xe.$$typeof === c || xe.$$typeof === y || xe.$$typeof === g || xe[0] === v);
    }(ee);
    if (!Ee) {
      var Pe = "";
      (ee === void 0 || typeof ee == "object" && ee !== null && Object.keys(ee).length === 0) && (Pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var nt, At = function(xe) {
        return xe !== void 0 ? `

Check your code at ` + xe.fileName.replace(/^.*[\\\/]/, "") + ":" + xe.lineNumber + "." : "";
      }(ae);
      Pe += At || oe(), ee === null ? nt = "null" : Array.isArray(ee) ? nt = "array" : ee !== void 0 && ee.$$typeof === t ? (nt = "<" + ($(ee.type) || "Unknown") + " />", Pe = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof ee, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, Pe);
    }
    var je = K(ee, me, V, ae, Ne);
    if (je == null)
      return je;
    if (Ee) {
      var Le = me.children;
      if (Le !== void 0)
        if (Oe)
          if (Array.isArray(Le)) {
            for (var Ae = 0; Ae < Le.length; Ae++)
              ke(Le[Ae], ee);
            Object.freeze && Object.freeze(Le);
          } else
            D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ke(Le, ee);
    }
    return ee === yi.Fragment ? function(xe) {
      for (var ht = Object.keys(xe.props), we = 0; we < ht.length; we++) {
        var Ge = ht[we];
        if (Ge !== "children" && Ge !== "key") {
          te(xe), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ge), te(null);
          break;
        }
      }
      xe.ref !== null && (te(xe), D("Invalid attribute `ref` supplied to `React.Fragment`."), te(null));
    }(je) : Ie(je), je;
  }
  var De = function(ee, me, V) {
    return We(ee, me, V, !1);
  }, le = function(ee, me, V) {
    return We(ee, me, V, !0);
  };
  yi.jsx = De, yi.jsxs = le;
}(), ia.exports = yv;
var od, gb = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
od = gb, function() {
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
            var u = t.apply(null, a);
            u && n.push(u);
          }
        } else if (o === "object") {
          if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
            n.push(a.toString());
            continue;
          }
          for (var c in a)
            e.call(a, c) && a[c] && n.push(c);
        }
      }
    }
    return n.join(" ");
  }
  od.exports ? (t.default = t, od.exports = t) : window.classNames = t;
}();
var xv = gb.exports;
const bv = (e, t, n) => {
  let r = null;
  return function(...a) {
    r && clearTimeout(r), r = setTimeout(() => {
      r = null, n || e.apply(this, a);
    }, t);
  };
}, ML = ({ content: e }) => ia.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), $L = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, IL = F.createContext({ getTooltipData: () => $L });
function vb(e = "DEFAULT_TOOLTIP_ID") {
  return F.useContext(IL).getTooltipData(e);
}
const Ev = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: r = "top", offset: a = 10, strategy: o = "absolute", middlewares: u = [OL(Number(a)), NL(), PL({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const c = u;
  return n ? (c.push({ name: "arrow", options: d = { element: n, padding: 5 }, async fn(f) {
    const { element: h, padding: m = 0 } = d || {}, { x: g, y: v, placement: y, rects: E, platform: b } = f;
    if (h == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const x = ab(m), w = { x: g, y: v }, A = ds(y), D = Zf(A), _ = await b.getDimensions(h), C = A === "y" ? "top" : "left", $ = A === "y" ? "bottom" : "right", O = E.reference[D] + E.reference[A] - w[A] - E.floating[D], I = w[A] - E.reference[A], B = await (b.getOffsetParent == null ? void 0 : b.getOffsetParent(h));
    let L = B ? A === "y" ? B.clientHeight || 0 : B.clientWidth || 0 : 0;
    L === 0 && (L = E.floating[D]);
    const N = O / 2 - I / 2, z = x[C], W = L - _[D] - x[$], M = L / 2 - _[D] / 2 + N, H = nf(z, M, W), K = us(y) != null && M != H && E.reference[D] / 2 - (M < z ? x[C] : x[$]) - _[D] / 2 < 0;
    return { [A]: w[A] - (K ? M < z ? z - M : W - M : 0), data: { [A]: H, centerOffset: M - H } };
  } }), vv(e, t, { placement: r, strategy: o, middleware: c }).then(({ x: f, y: h, placement: m, middlewareData: g }) => {
    var v, y;
    const E = { left: `${f}px`, top: `${h}px` }, { x: b, y: x } = (v = g.arrow) !== null && v !== void 0 ? v : { x: 0, y: 0 };
    return { tooltipStyles: E, tooltipArrowStyles: { left: b != null ? `${b}px` : "", top: x != null ? `${x}px` : "", right: "", bottom: "", [(y = { top: "bottom", right: "left", bottom: "top", left: "right" }[m.split("-")[0]]) !== null && y !== void 0 ? y : "bottom"]: "-4px" } };
  })) : vv(e, t, { placement: "bottom", strategy: o, middleware: c }).then(({ x: f, y: h }) => ({ tooltipStyles: { left: `${f}px`, top: `${h}px` }, tooltipArrowStyles: {} }));
  var d;
};
var Ki = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Sv = ({ id: e, className: t, classNameArrow: n, variant: r = "dark", anchorId: a, anchorSelect: o, place: u = "top", offset: c = 10, events: d = ["hover"], positionStrategy: f = "absolute", middlewares: h, wrapper: m, children: g = null, delayShow: v = 0, delayHide: y = 0, float: E = !1, noArrow: b = !1, clickable: x = !1, closeOnEsc: w = !1, style: A, position: D, afterShow: _, afterHide: C, content: $, html: O, isOpen: I, setIsOpen: B, activeAnchor: L, setActiveAnchor: N }) => {
  const z = F.useRef(null), W = F.useRef(null), M = F.useRef(null), H = F.useRef(null), [K, re] = F.useState({}), [ie, te] = F.useState({}), [ce, oe] = F.useState(!1), [Se, Te] = F.useState(!1), ke = F.useRef(!1), Ie = F.useRef(null), { anchorRefs: We, setActiveAnchor: De } = vb(e), le = F.useRef(!1), [ee, me] = F.useState([]), V = F.useRef(!1);
  F.useLayoutEffect(() => (V.current = !0, () => {
    V.current = !1;
  }), []), F.useEffect(() => {
    if (!ce) {
      const we = setTimeout(() => {
        Te(!1);
      }, 150);
      return () => {
        clearTimeout(we);
      };
    }
    return () => null;
  }, [ce]);
  const Oe = (we) => {
    V.current && (we && Te(!0), setTimeout(() => {
      V.current && (B == null || B(we), I === void 0 && oe(we));
    }, 10));
  };
  F.useEffect(() => {
    if (I === void 0)
      return () => null;
    I && Te(!0);
    const we = setTimeout(() => {
      oe(I);
    }, 10);
    return () => {
      clearTimeout(we);
    };
  }, [I]), F.useEffect(() => {
    ce !== ke.current && (ke.current = ce, ce ? _ == null || _() : C == null || C());
  }, [ce]);
  const ae = (we = y) => {
    H.current && clearTimeout(H.current), H.current = setTimeout(() => {
      le.current || Oe(!1);
    }, we);
  }, Ne = (we) => {
    var Ge;
    if (!we)
      return;
    v ? (M.current && clearTimeout(M.current), M.current = setTimeout(() => {
      Oe(!0);
    }, v)) : Oe(!0);
    const Xe = (Ge = we.currentTarget) !== null && Ge !== void 0 ? Ge : we.target;
    N(Xe), De({ current: Xe }), H.current && clearTimeout(H.current);
  }, Ee = () => {
    x ? ae(y || 100) : y ? ae() : Oe(!1), M.current && clearTimeout(M.current);
  }, Pe = ({ x: we, y: Ge }) => {
    Ev({ place: u, offset: c, elementReference: { getBoundingClientRect: () => ({ x: we, y: Ge, width: 0, height: 0, top: Ge, left: we, right: we, bottom: Ge }) }, tooltipReference: z.current, tooltipArrowReference: W.current, strategy: f, middlewares: h }).then((Xe) => {
      Object.keys(Xe.tooltipStyles).length && re(Xe.tooltipStyles), Object.keys(Xe.tooltipArrowStyles).length && te(Xe.tooltipArrowStyles);
    });
  }, nt = (we) => {
    if (!we)
      return;
    const Ge = we, Xe = { x: Ge.clientX, y: Ge.clientY };
    Pe(Xe), Ie.current = Xe;
  }, At = (we) => {
    Ne(we), y && ae();
  }, je = (we) => {
    const Ge = document.querySelector(`[id='${a}']`);
    Ge != null && Ge.contains(we.target) || ee.some((Xe) => Xe.contains(we.target)) || Oe(!1);
  }, Le = (we) => {
    we.key === "Escape" && Oe(!1);
  }, Ae = bv(Ne, 50), xe = bv(Ee, 50);
  F.useEffect(() => {
    var we, Ge;
    const Xe = new Set(We);
    ee.forEach((Wt) => {
      Xe.add({ current: Wt });
    });
    const Y = document.querySelector(`[id='${a}']`);
    Y && Xe.add({ current: Y }), w && window.addEventListener("keydown", Le);
    const tt = [];
    d.find((Wt) => Wt === "click") && (window.addEventListener("click", je), tt.push({ event: "click", listener: At })), d.find((Wt) => Wt === "hover") && (tt.push({ event: "mouseenter", listener: Ae }, { event: "mouseleave", listener: xe }, { event: "focus", listener: Ae }, { event: "blur", listener: xe }), E && tt.push({ event: "mousemove", listener: nt }));
    const zt = () => {
      le.current = !0;
    }, Kt = () => {
      le.current = !1, Ee();
    };
    return x && ((we = z.current) === null || we === void 0 || we.addEventListener("mouseenter", zt), (Ge = z.current) === null || Ge === void 0 || Ge.addEventListener("mouseleave", Kt)), tt.forEach(({ event: Wt, listener: Qt }) => {
      Xe.forEach((jt) => {
        var $t;
        ($t = jt.current) === null || $t === void 0 || $t.addEventListener(Wt, Qt);
      });
    }), () => {
      var Wt, Qt;
      d.find((jt) => jt === "click") && window.removeEventListener("click", je), w && window.removeEventListener("keydown", Le), x && ((Wt = z.current) === null || Wt === void 0 || Wt.removeEventListener("mouseenter", zt), (Qt = z.current) === null || Qt === void 0 || Qt.removeEventListener("mouseleave", Kt)), tt.forEach(({ event: jt, listener: $t }) => {
        Xe.forEach((fn) => {
          var jn;
          (jn = fn.current) === null || jn === void 0 || jn.removeEventListener(jt, $t);
        });
      });
    };
  }, [Se, We, ee, w, d]), F.useEffect(() => {
    let we = o ?? "";
    !we && e && (we = `[data-tooltip-id='${e}']`);
    const Ge = new MutationObserver((Xe) => {
      const Y = [];
      Xe.forEach((tt) => {
        if (tt.type === "attributes" && tt.attributeName === "data-tooltip-id" && tt.target.getAttribute("data-tooltip-id") === e && Y.push(tt.target), tt.type === "childList" && (L && [...tt.removedNodes].some((zt) => !!zt.contains(L) && (Te(!1), Oe(!1), N(null), !0)), we))
          try {
            const zt = [...tt.addedNodes].filter((Kt) => Kt.nodeType === 1);
            Y.push(...zt.filter((Kt) => Kt.matches(we))), Y.push(...zt.flatMap((Kt) => [...Kt.querySelectorAll(we)]));
          } catch {
          }
      }), Y.length && me((tt) => [...tt, ...Y]);
    });
    return Ge.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Ge.disconnect();
    };
  }, [e, o, L]), F.useEffect(() => {
    D ? Pe(D) : E ? Ie.current && Pe(Ie.current) : Ev({ place: u, offset: c, elementReference: L, tooltipReference: z.current, tooltipArrowReference: W.current, strategy: f, middlewares: h }).then((we) => {
      V.current && (Object.keys(we.tooltipStyles).length && re(we.tooltipStyles), Object.keys(we.tooltipArrowStyles).length && te(we.tooltipArrowStyles));
    });
  }, [ce, L, $, O, u, c, f, D]), F.useEffect(() => {
    var we;
    const Ge = document.querySelector(`[id='${a}']`), Xe = [...ee, Ge];
    L && Xe.includes(L) || N((we = ee[0]) !== null && we !== void 0 ? we : Ge);
  }, [a, ee, L]), F.useEffect(() => () => {
    M.current && clearTimeout(M.current), H.current && clearTimeout(H.current);
  }, []), F.useEffect(() => {
    let we = o;
    if (!we && e && (we = `[data-tooltip-id='${e}']`), we)
      try {
        const Ge = Array.from(document.querySelectorAll(we));
        me(Ge);
      } catch {
        me([]);
      }
  }, [e, o]);
  const ht = !!(O || $ || g) && ce && Object.keys(K).length > 0;
  return Se ? ia.exports.jsxs(m, { id: e, role: "tooltip", className: xv("react-tooltip", Ki.tooltip, Ki[r], t, { [Ki.show]: ht, [Ki.fixed]: f === "fixed", [Ki.clickable]: x }), style: { ...A, ...K }, ref: z, children: [O && ia.exports.jsx(ML, { content: O }) || $ || g, ia.exports.jsx(m, { className: xv("react-tooltip-arrow", Ki.arrow, n, { [Ki["no-arrow"]]: b }), style: ie, ref: W })] }) : null;
}, BL = ({ id: e, anchorId: t, anchorSelect: n, content: r, html: a, className: o, classNameArrow: u, variant: c = "dark", place: d = "top", offset: f = 10, wrapper: h = "div", children: m = null, events: g = ["hover"], positionStrategy: v = "absolute", middlewares: y, delayShow: E = 0, delayHide: b = 0, float: x = !1, noArrow: w = !1, clickable: A = !1, closeOnEsc: D = !1, style: _, position: C, isOpen: $, setIsOpen: O, afterShow: I, afterHide: B }) => {
  const [L, N] = F.useState(r), [z, W] = F.useState(a), [M, H] = F.useState(d), [K, re] = F.useState(c), [ie, te] = F.useState(f), [ce, oe] = F.useState(E), [Se, Te] = F.useState(b), [ke, Ie] = F.useState(x), [We, De] = F.useState(h), [le, ee] = F.useState(g), [me, V] = F.useState(v), [Oe, ae] = F.useState(null), { anchorRefs: Ne, activeAnchor: Ee } = vb(e), Pe = (je) => je == null ? void 0 : je.getAttributeNames().reduce((Le, Ae) => {
    var xe;
    return Ae.startsWith("data-tooltip-") && (Le[Ae.replace(/^data-tooltip-/, "")] = (xe = je == null ? void 0 : je.getAttribute(Ae)) !== null && xe !== void 0 ? xe : null), Le;
  }, {}), nt = (je) => {
    const Le = { place: (Ae) => {
      var xe;
      H((xe = Ae) !== null && xe !== void 0 ? xe : d);
    }, content: (Ae) => {
      N(Ae ?? r);
    }, html: (Ae) => {
      W(Ae ?? a);
    }, variant: (Ae) => {
      var xe;
      re((xe = Ae) !== null && xe !== void 0 ? xe : c);
    }, offset: (Ae) => {
      te(Ae === null ? f : Number(Ae));
    }, wrapper: (Ae) => {
      var xe;
      De((xe = Ae) !== null && xe !== void 0 ? xe : h);
    }, events: (Ae) => {
      const xe = Ae == null ? void 0 : Ae.split(" ");
      ee(xe ?? g);
    }, "position-strategy": (Ae) => {
      var xe;
      V((xe = Ae) !== null && xe !== void 0 ? xe : v);
    }, "delay-show": (Ae) => {
      oe(Ae === null ? E : Number(Ae));
    }, "delay-hide": (Ae) => {
      Te(Ae === null ? b : Number(Ae));
    }, float: (Ae) => {
      Ie(Ae === null ? x : !!Ae);
    } };
    Object.values(Le).forEach((Ae) => Ae(null)), Object.entries(je).forEach(([Ae, xe]) => {
      var ht;
      (ht = Le[Ae]) === null || ht === void 0 || ht.call(Le, xe);
    });
  };
  F.useEffect(() => {
    N(r);
  }, [r]), F.useEffect(() => {
    W(a);
  }, [a]), F.useEffect(() => {
    H(d);
  }, [d]), F.useEffect(() => {
    var je;
    const Le = new Set(Ne);
    let Ae = n;
    if (!Ae && e && (Ae = `[data-tooltip-id='${e}']`), Ae)
      try {
        document.querySelectorAll(Ae).forEach((Xe) => {
          Le.add({ current: Xe });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const xe = document.querySelector(`[id='${t}']`);
    if (xe && Le.add({ current: xe }), !Le.size)
      return () => null;
    const ht = (je = Oe ?? xe) !== null && je !== void 0 ? je : Ee.current, we = new MutationObserver((Xe) => {
      Xe.forEach((Y) => {
        var tt;
        if (!ht || Y.type !== "attributes" || !(!((tt = Y.attributeName) === null || tt === void 0) && tt.startsWith("data-tooltip-")))
          return;
        const zt = Pe(ht);
        nt(zt);
      });
    }), Ge = { attributes: !0, childList: !1, subtree: !1 };
    if (ht) {
      const Xe = Pe(ht);
      nt(Xe), we.observe(ht, Ge);
    }
    return () => {
      we.disconnect();
    };
  }, [Ne, Ee, Oe, t, n]);
  const At = { id: e, anchorId: t, anchorSelect: n, className: o, classNameArrow: u, content: L, html: z, place: M, variant: K, offset: ie, wrapper: We, events: le, positionStrategy: me, middlewares: y, delayShow: ce, delayHide: Se, float: ke, noArrow: w, clickable: A, closeOnEsc: D, style: _, position: C, isOpen: $, setIsOpen: O, afterShow: I, afterHide: B, activeAnchor: Oe, setActiveAnchor: (je) => ae(je) };
  return m ? ia.exports.jsx(Sv, { ...At, children: m }) : ia.exports.jsx(Sv, { ...At });
}, Jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: RT,
  curveBasisClosed: MT,
  curveBasisOpen: $T,
  curveBundle: IT,
  curveCardinal: BT,
  curveCardinalClosed: FT,
  curveCardinalOpen: zT,
  curveCatmullRom: WT,
  curveCatmullRomClosed: VT,
  curveCatmullRomOpen: HT,
  curveLinear: yc,
  curveLinearClosed: Xy,
  curveMonotoneX: Dl,
  curveMonotoneY: UT,
  curveNatural: qT,
  curveStep: KT,
  curveStepAfter: GT,
  curveStepBefore: jT
}, Symbol.toStringTag, { value: "Module" })), FL = (e) => {
  var _;
  const { xScale: t, yScale: n, yMax: r, xMax: a, handleTooltipMouseOver: o, handleTooltipMouseOff: u, isDebug: c, children: d } = e;
  let { transformedData: f, config: h, handleLineType: m, parseDate: g, formatDate: v, formatNumber: y, seriesHighlight: E, colorScale: b, rawData: x } = F.useContext(pt);
  const w = h.brush.active && ((_ = h.brush.data) != null && _.length) ? h.brush.data : f;
  if (!w)
    return;
  const A = (C) => h.xAxis.type === "date" ? t(g(C[h.xAxis.dataKey], !1)) : t(C[h.xAxis.dataKey]), D = (C, $, O = void 0) => n(C[O.dataKey]);
  return w && /* @__PURE__ */ l.createElement("svg", null, /* @__PURE__ */ l.createElement(Lr, { component: "AreaChart" }, /* @__PURE__ */ l.createElement(He, { className: "area-chart", key: "area-wrapper", left: Number(h.yAxis.size) }, (h.runtime.areaSeriesKeys || h.series).map((C, $) => {
    let O = w.map((N) => ({
      [h.xAxis.dataKey]: N[h.xAxis.dataKey],
      [C.dataKey]: N[C.dataKey]
    })), I = Jf[C.lineType], B = h.legend.behavior === "highlight" && E.length > 0 && E.indexOf(C.dataKey) === -1, L = h.legend.behavior === "highlight" || E.length === 0 || E.indexOf(C.dataKey) !== -1;
    return h.xAxis.type === "date" ? w.map((N) => t(g(N[h.xAxis.dataKey]))) : w.map((N) => t(N[h.xAxis.dataKey])), /* @__PURE__ */ l.createElement(l.Fragment, { key: $ }, /* @__PURE__ */ l.createElement(
      aa,
      {
        data: O,
        x: (N) => A(N),
        y: (N) => D(N, $, C),
        stroke: L ? b ? b(h.runtime.seriesLabels ? h.runtime.seriesLabels[C.dataKey] : C.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: I,
        strokeDasharray: C.type ? m(C.type) : 0
      }
    ), /* @__PURE__ */ l.createElement(
      ED,
      {
        key: "area-chart",
        fill: L ? b ? b(h.runtime.seriesLabels ? h.runtime.seriesLabels[C.dataKey] : C.dataKey) : "#000" : "transparent",
        fillOpacity: B ? 0.25 : 0.5,
        data: O,
        x: (N) => A(N),
        y: (N) => D(N, $, C),
        yScale: n,
        curve: I,
        strokeDasharray: C.type ? m(C.type) : 0
      }
    ));
  }), /* @__PURE__ */ l.createElement(ar, { width: Number(a), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (C) => o(C, x), onMouseLeave: u }))));
}, zL = F.memo(FL), ic = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, WL = ({ xScale: e, yScale: t, yMax: n, xMax: r, handleTooltipMouseOver: a, handleTooltipMouseOff: o, isDebug: u }) => {
  var E;
  let { transformedData: c, config: d, seriesHighlight: f, colorScale: h, rawData: m } = F.useContext(pt);
  const g = d.brush.active && ((E = d.brush.data) != null && E.length) ? d.brush.data : c;
  if (!g)
    return;
  const v = (b) => {
    if (d.xAxis.type === "categorical")
      return e(b);
    if (d.xAxis.type === "date") {
      let x = new Date(b);
      return e(x);
    }
  }, y = 2;
  return g && /* @__PURE__ */ l.createElement("svg", { height: Number(n) }, /* @__PURE__ */ l.createElement(Lr, { component: "AreaChartStacked" }, /* @__PURE__ */ l.createElement(He, { className: "area-chart", key: "area-wrapper", left: Number(d.yAxis.size) + y / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ l.createElement(
    TD,
    {
      data: g,
      keys: d.runtime.areaSeriesKeys.map((b) => b.dataKey) || d.series.map((b) => b.dataKey),
      x0: (b) => v(b.data[d.xAxis.dataKey]),
      y0: (b) => Number(t(b[0])),
      y1: (b) => Number(t(b[1])),
      curve: Jf[ic[d.stackedAreaChartLineType]]
    },
    ({ stacks: b, path: x }) => b.map((w, A) => {
      let D = d.legend.behavior === "highlight" && f.length > 0 && f.indexOf(w.key) === -1, _ = d.legend.behavior === "highlight" || f.length === 0 || f.indexOf(w.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ l.createElement(
          "path",
          {
            key: w.key,
            d: x(w) || "",
            strokeWidth: 2,
            stroke: _ ? h ? h(d.runtime.seriesLabels ? d.runtime.seriesLabels[w.key] : w.key) : "#000" : "transparent",
            fillOpacity: D ? 0.25 : 0.5,
            fill: _ ? h ? h(d.runtime.seriesLabels ? d.runtime.seriesLabels[w.key] : w.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ l.createElement(ar, { width: Number(r), height: Number(n), fill: "transparent", onMouseMove: (b) => a(b, m), onMouseLeave: o }))));
}, VL = F.memo(WL), fs = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: r, parseDate: a, formatDate: o } = F.useContext(pt), { orientation: u } = e, c = u === "horizontal", d = 1, f = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, h = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, m = e.yAxis.labelPlacement === "Below Bar", g = e.yAxis.displayNumbersOnBar, v = e.orientation === "horizontal" ? "yAxis" : "xAxis", y = e.barStyle === "rounded", E = e.visualizationSubType === "stacked", b = e.tipRounding, x = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", w = e.runtime.seriesKeys.length, A = { small: 16, medium: 18, large: 20 }, D = Object.keys(e.runtime.seriesLabels).length > 1;
  return F.useEffect(() => {
    u === "horizontal" && !e.yAxis.labelPlacement && r({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, r]), F.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && r({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), F.useEffect(() => {
    e.visualizationSubType === "horizontal" && r({
      ...e,
      orientation: "horizontal"
    });
  }, []), F.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && r({ ...e, isLollipopChart: !0 }), (y || e.barStyle === "flat") && r({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    isHorizontal: c,
    barBorderWidth: d,
    lollipopBarWidth: f,
    lollipopShapeSize: h,
    isLabelBelowBar: m,
    displayNumbersOnBar: g,
    section: v,
    isRounded: y,
    isStacked: E,
    tipRounding: b,
    radius: x,
    stackCount: w,
    fontSize: A,
    hasMultipleSeries: D,
    applyRadius: (B) => {
      if (B == null || !y)
        return {};
      let L = {};
      return (E && B + 1 === w || !E) && (L = c ? { borderRadius: `0 ${x}  ${x}  0` } : { borderRadius: `${x} ${x} 0 0` }), !E && B === -1 && (L = c ? { borderRadius: `${x} 0  0 ${x} ` } : { borderRadius: ` 0  0 ${x} ${x}` }), b === "full" && E && B === 0 && w > 1 && (L = c ? { borderRadius: `${x} 0 0 ${x}` } : { borderRadius: `0 0 ${x} ${x}` }), b === "full" && (E && B === 0 && w === 1 || !E) && (L = { borderRadius: x }), L;
    },
    updateBars: (B) => {
      if (e.visualizationType !== "Bar" && !c)
        return B;
      const L = [...B];
      let N;
      const z = {
        stacked: e.barHeight,
        lollipop: f
      };
      E ? N = z.stacked : N = z[e.isLollipopChart ? "lollipop" : "stacked"] * w;
      const W = m ? A[e.fontSize] * 1.2 : 0;
      let M = Number(e.barSpace), H = L.length * (N + W + M);
      return c && (e.heights.horizontal = H), L.map((K, re) => {
        let ie = 0;
        return K.index !== 0 && (ie = (N + M + W) * re), { ...K, y: ie, height: N };
      });
    },
    assignColorsToValues: (B, L, N) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return N;
      const z = e.customColors ?? t[e.palette], W = n.map((re) => re[e.legend.colorCode]);
      let M = /* @__PURE__ */ new Map(), H = [];
      for (let re = 0; re < W.length; re++)
        M.has(W[re]) || M.set(W[re], z[M.size % z.length]), H.push(M.get(W[re]));
      for (; H.length < B; )
        H = H.concat(H);
      return H[L];
    },
    getHighlightedBarColorByValue: (B) => {
      const L = e == null ? void 0 : e.highlightedBarValues.filter((N) => {
        if (N.value)
          return e.xAxis.type === "date" ? o(a(N.value)) === B : N.value === B;
      })[0];
      return L != null && L.color ? L.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (B) => {
      const L = e == null ? void 0 : e.highlightedBarValues.filter((N) => {
        if (N.value)
          return e.xAxis.type === "date" ? o(a(N.value)) === B : N.value === B;
      })[0];
      return L != null && L.color ? L : !1;
    }
  };
}, HL = (e) => {
  var A;
  const { xScale: t, yScale: n, xMax: r, yMax: a } = e, { transformedData: o, colorScale: u, seriesHighlight: c, config: d, formatNumber: f, formatDate: h, parseDate: m, setSharedFilter: g } = F.useContext(pt), { isHorizontal: v, barBorderWidth: y, hasMultipleSeries: E, applyRadius: b } = fs(), { orientation: x } = d, w = d.brush.active && ((A = d.brush.data) != null && A.length) ? d.brush.data : o;
  return d.visualizationSubType === "stacked" && !v && /* @__PURE__ */ l.createElement(kD, { data: w, keys: d.runtime.barSeriesKeys || d.runtime.seriesKeys, x: (D) => D[d.runtime.xAxis.dataKey], xScale: t, yScale: n, color: u }, (D) => D.reverse().map(
    (_) => _.bars.map((C) => {
      let $ = d.legend.behavior === "highlight" && c.length > 0 && c.indexOf(C.key) === -1, O = d.legend.behavior === "highlight" || c.length === 0 || c.indexOf(C.key) !== -1, I = r / _.bars.length, B = I * (d.barThickness || 0.8), L = I * (1 - (d.barThickness || 0.8)) / 2;
      const N = d.runtime.xAxis.type === "date" ? h(m(w[C.index][d.runtime.xAxis.dataKey])) : w[C.index][d.runtime.xAxis.dataKey], z = f(C.bar ? C.bar.data[C.key] : 0, "left");
      if (!z)
        return /* @__PURE__ */ l.createElement(l.Fragment, null);
      const W = b(_.index);
      let M = d.runtime.yAxis.label ? `${d.runtime.yAxis.label}: ${z}` : z;
      const H = d.runtime.xAxis.label ? `${d.runtime.xAxis.label}: ${N}` : N;
      E || (M = d.isLegendValue ? `${C.key}: ${z}` : d.runtime.yAxis.label ? `${d.runtime.yAxis.label}: ${z}` : z);
      const {
        legend: { showLegendValuesTooltip: K },
        runtime: { seriesLabels: re }
      } = d, ie = `<div>
                    <p class="tooltip-heading"><strong>${H}</strong></p>
                    ${K && re && E ? `${re[C.key] || ""}<br/>` : ""}
                    ${M}<br />
                      </div>`;
      return /* @__PURE__ */ l.createElement(He, { key: `${_.index}--${C.index}--${x}` }, /* @__PURE__ */ l.createElement("style", null, `
                           #barStack${_.index}-${C.index} rect,
                           #barStack${_.index}-${C.index} foreignObject div{
                            animation-delay: ${_.index * 0.5}s;
                            transform-origin: ${B / 2}px ${C.y + C.height}px
                          }
                        `), /* @__PURE__ */ l.createElement(He, { key: `bar-stack-${_.index}-${C.index}`, id: `barStack${_.index}-${C.index}`, className: "stack vertical" }, /* @__PURE__ */ l.createElement(ut, { display: d.labels && O ? "block" : "none", opacity: $ ? 0.5 : 1, x: I * C.index + L, y: C.y - 5, fill: "#000", textAnchor: "middle" }, z), /* @__PURE__ */ l.createElement(
        "foreignObject",
        {
          key: `bar-stack-${_.index}-${C.index}`,
          x: I * C.index + L,
          y: C.y,
          width: B,
          height: C.height,
          display: O ? "block" : "none",
          "data-tooltip-html": ie,
          "data-tooltip-id": `cdc-open-viz-tooltip-${d.runtime.uniqueId}`,
          onClick: (te) => {
            te.preventDefault(), g && (C[d.xAxis.dataKey] = N, g(d.uid, C));
          }
        },
        /* @__PURE__ */ l.createElement("div", { style: { opacity: $ ? 0.5 : 1, width: B, height: C.height, background: C.color, border: `${d.barHasBorder === "true" ? y : 0}px solid #333`, ...W } })
      )));
    })
  ));
}, UL = (e) => {
  const { xScale: t, yScale: n, xMax: r, yMax: a } = e, { transformedData: o, colorScale: u, seriesHighlight: c, config: d, formatNumber: f, formatDate: h, parseDate: m, setSharedFilter: g, animatedChart: v, getTextWidth: y } = F.useContext(pt), { isHorizontal: E, barBorderWidth: b, hasMultipleSeries: x, applyRadius: w, updateBars: A, isLabelBelowBar: D, displayNumbersOnBar: _, fontSize: C } = fs(), { orientation: $, visualizationSubType: O } = d;
  return d.visualizationSubType === "stacked" && E && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(MD, { data: o, keys: d.runtime.barSeriesKeys || d.runtime.seriesKeys, height: a, y: (I) => I[d.runtime.yAxis.dataKey], xScale: t, yScale: n, color: u, offset: "none" }, (I) => I.map(
    (B) => A(B.bars).map((L, N) => {
      let z = d.legend.behavior === "highlight" && c.length > 0 && c.indexOf(L.key) === -1, W = d.legend.behavior === "highlight" || c.length === 0 || c.indexOf(L.key) !== -1;
      d.barHeight = Number(d.barHeight);
      let M = "#000000";
      const H = f(o[L.index][L.key], "left"), K = d.runtime.yAxis.type === "date" ? h(m(o[L.index][d.runtime.originalXAxis.dataKey])) : o[L.index][d.runtime.originalXAxis.dataKey], re = w(B.index);
      let ie = d.runtime.yAxis.label ? `${d.runtime.yAxis.label}: ${K}` : K, te = d.runtime.xAxis.label ? `${d.runtime.xAxis.label}: ${H}` : H, ce = y(H, `normal ${C[d.fontSize]}px sans-serif`);
      x || (te = d.isLegendValue ? `${L.key}: ${H}` : d.runtime.xAxis.label ? `${d.runtime.xAxis.label}: ${H}` : te);
      const oe = `<div>
                    ${d.legend.showLegendValuesTooltip && d.runtime.seriesLabels && x ? `${d.runtime.seriesLabels[L.key] || ""}<br/>` : ""}
                    ${ie}<br />
                    ${te}
                      </div>`;
      return ii.contrast(M, L.color) < 4.9 && (M = "#FFFFFF"), /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("style", null, `
                         #barStack${B.index}-${L.index} rect,
                         #barStack${B.index}-${L.index} foreignObject div{
                          animation-delay: ${B.index * 0.5}s;
                          transform-origin: ${L.x}px
                        }
                      `), /* @__PURE__ */ l.createElement(He, { key: N, id: `barStack${B.index}-${L.index}`, className: "stack horizontal" }, /* @__PURE__ */ l.createElement(
        "foreignObject",
        {
          key: `barstack-horizontal-${B.index}-${L.index}-${N}`,
          className: `animated-chart group ${v ? "animated" : ""}`,
          x: L.x,
          y: L.y,
          width: L.width,
          height: L.height,
          opacity: z ? 0.5 : 1,
          display: W ? "block" : "none",
          "data-tooltip-html": oe,
          "data-tooltip-id": `cdc-open-viz-tooltip-${d.runtime.uniqueId}`,
          onClick: (Se) => {
            Se.preventDefault(), g && (L[d.xAxis.dataKey] = H, g(d.uid, L));
          }
        },
        /* @__PURE__ */ l.createElement("div", { style: { width: L.width, height: L.height, background: L.color, border: `${d.barHasBorder === "true" ? b : 0}px solid #333`, ...re } })
      ), $ === "horizontal" && O === "stacked" && D && B.index === 0 && !d.yAxis.hideLabel && /* @__PURE__ */ l.createElement(
        ut,
        {
          x: `${L.x + (d.isLollipopChart ? 15 : 5)}`,
          y: L.y + L.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        K
      ), _ && ce < L.width && /* @__PURE__ */ l.createElement(
        ut,
        {
          display: W ? "block" : "none",
          x: L.x + B.bars[L.index].width / 2,
          y: L.y + L.height / 2,
          fill: M,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        H
      )));
    })
  )));
}, _c = (e, t) => {
  var E;
  const { formatDate: n, parseDate: r } = F.useContext(pt);
  let a = [], o = "", u = [], c = [];
  ((E = e.series) == null ? void 0 : E.length) > 0 && e.data ? (a = e.series[0], o = e.series[0].dataKey, u = e.highlightedBarValues, c = e.data.map((b) => b[e.xAxis.dataKey])) : (a = [], o = "", u = [], c = []);
  const d = (b, x) => {
    const w = [...e.highlightedBarValues];
    w[x].borderWidth = b.target.value, t({
      ...e,
      highlightedBarValues: w
    });
  }, f = (b, x) => {
    b.preventDefault();
    const w = [...e.highlightedBarValues];
    w[x].value = b.target.value, w[x].dataKey = o, t({
      ...e,
      highlightedBarValues: w
    });
  }, h = (b, x) => {
    b.preventDefault();
    const w = [...e.highlightedBarValues];
    w.push({ dataKey: o }), t({
      ...e,
      highlightedBarValues: w
    });
  }, m = (b, x) => {
    b.preventDefault();
    const w = [...e.highlightedBarValues];
    w.splice(x, 1), t({
      ...e,
      highlightedBarValues: w
    });
  }, g = (b, x) => {
    const w = [...e.highlightedBarValues];
    w[x].color = b.target.value, t({
      ...e
    });
  }, v = (b, x) => {
    const w = [...e.highlightedBarValues];
    w[x].legendLabel = b.target.value, t({
      ...e,
      copyOfHighlightedBarValues: w
    });
  }, y = () => {
  };
  return y.checkFontColor = (b, x, w) => {
    if (e.xAxis.type === "date") {
      if (y.formatDates(x).includes(b))
        return "#000";
    } else if (x.includes(b))
      return "#000";
    return w;
  }, y.formatDates = (b) => b.map((x) => x ? n(r(x)) : !1), y.findDuplicates = (b) => {
    const x = {};
    return b.filter((A) => {
      const { legendLabel: D } = A;
      return x[D] ? !1 : (x[D] = !0, !0);
    });
  }, {
    HighLightedBarUtils: y,
    highlightedSeries: a,
    highlightedSeriesKey: o,
    highlightedBarValues: u,
    highlightedSeriesValues: c,
    handleUpdateHighlightedBar: f,
    handleAddNewHighlightedBar: h,
    handleRemoveHighlightedBar: m,
    handleUpdateHighlightedBarColor: g,
    handleHighlightedBarLegendLabel: v,
    handleUpdateHighlightedBorderWidth: d
  };
}, qL = (e) => {
  var z;
  const { xScale: t, yScale: n, xMax: r, yMax: a, seriesScale: o } = e, { transformedData: u, colorScale: c, seriesHighlight: d, config: f, formatNumber: h, formatDate: m, parseDate: g, setSharedFilter: v, isNumber: y, getXAxisData: E, getYAxisData: b } = F.useContext(pt), { barBorderWidth: x, hasMultipleSeries: w, applyRadius: A, updateBars: D, assignColorsToValues: _, section: C, lollipopBarWidth: $, lollipopShapeSize: O, getHighlightedBarColorByValue: I, getHighlightedBarByValue: B } = fs(), { HighLightedBarUtils: L } = _c(f), N = f.brush.active && ((z = f.brush.data) != null && z.length) ? f.brush.data : u;
  return f.visualizationSubType !== "stacked" && (f.visualizationType === "Bar" || f.visualizationType === "Combo") && f.orientation === "vertical" && /* @__PURE__ */ l.createElement(He, null, /* @__PURE__ */ l.createElement(
    nx,
    {
      data: N,
      keys: f.runtime.barSeriesKeys || f.runtime.seriesKeys,
      height: a,
      x0: (W) => W[f.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: o,
      yScale: n,
      color: () => ""
    },
    (W) => D(W).map((M, H) => /* @__PURE__ */ l.createElement(He, { className: `bar-group-${M.index}-${M.x0}--${H} ${f.orientation}`, key: `bar-group-${M.index}-${M.x0}--${H}`, id: `bar-group-${M.index}-${M.x0}--${H}`, left: r / W.length * M.index }, M.bars.map((K, re) => {
      const ie = f.useLogScale ? 0.1 : 0;
      let te = f.highlightedBarValues.map((Ge) => Ge.value).filter((Ge) => Ge !== void 0);
      te = f.xAxis.type === "date" ? L.formatDates(te) : te;
      let ce = f.legend.behavior === "highlight" && d.length > 0 && d.indexOf(K.key) === -1, oe = f.legend.behavior === "highlight" || d.length === 0 || d.indexOf(K.key) !== -1, Se = Math.abs(n(K.value) - n(ie)), Te = K.value >= 0 && y(K.value) ? K.y : n(0), ke = r / W.length * (f.barThickness || 0.8), Ie = r / W.length * (1 - (f.barThickness || 0.8)) / 2;
      f.isLollipopChart && (Ie = r / W.length / 2 - $ / 2);
      let We = f.isLollipopChart ? $ : ke / M.bars.length, De = h(K.value, "left"), le = f.runtime[C].type === "date" ? m(g(N[M.index][f.runtime.originalXAxis.dataKey])) : N[M.index][f.runtime.originalXAxis.dataKey];
      const ee = K.value < 0 ? -1 : re, me = A(ee);
      let V = f.runtime.yAxis.label ? `${f.runtime.yAxis.label}: ${De}` : De, Oe = f.runtime.xAxis.label ? `${f.runtime.xAxis.label}: ${le}` : le;
      w || (V = f.isLegendValue ? `${K.key}: ${De}` : f.runtime.yAxis.label ? `${f.runtime.yAxis.label}: ${De}` : De);
      const ae = `<ul>
                  ${f.legend.showLegendValuesTooltip && f.runtime.seriesLabels && w ? `${f.runtime.seriesLabels[K.key] || ""}<br/>` : ""}
                  <li class="tooltip-heading">${V}</li>
                  <li class="tooltip-body">${Oe}</li>
                    </li></ul>`;
      let Ne = "#000000";
      Ne = L.checkFontColor(De, te, Ne);
      let Ee = f.runtime.seriesLabels && f.runtime.seriesLabels[K.key] ? c(f.runtime.seriesLabels[K.key]) : c(K.key);
      Ee = _(W.length, M.index, Ee);
      const Pe = f.isLollipopChart && f.lollipopColorStyle === "regular", nt = f.isLollipopChart && f.lollipopColorStyle === "two-tone", At = te == null ? void 0 : te.includes(le), je = I(le), Le = B(le), Ae = At ? je : f.barHasBorder === "true" ? "#000" : "transparent", xe = At ? Le.borderWidth : f.isLollipopChart ? 0 : f.barHasBorder === "true" ? x : 0, we = {
        background: (() => Pe ? Ee : nt ? ii(Ee).brighten(1) : At ? "transparent" : Ee)(),
        borderColor: Ae,
        borderStyle: "solid",
        borderWidth: xe,
        width: We,
        height: Se,
        ...me
      };
      return /* @__PURE__ */ l.createElement(He, { key: `${M.index}--${re}` }, /* @__PURE__ */ l.createElement("style", null, `
                        .linear #barGroup${M.index} div,
                        .Combo #barGroup${M.index} div {
                          transform-origin: 0 ${Te + Se}px;
                        }
                      `), /* @__PURE__ */ l.createElement(He, { key: `bar-sub-group-${M.index}-${M.x0}-${Te}--${re}` }, /* @__PURE__ */ l.createElement(
        "foreignObject",
        {
          id: `barGroup${M.index}`,
          key: `bar-group-bar-${M.index}-${K.index}-${K.value}-${K.key}`,
          x: We * K.index + Ie,
          y: Te,
          width: We,
          height: Se,
          opacity: ce ? 0.5 : 1,
          display: oe ? "block" : "none",
          "data-tooltip-html": ae,
          "data-tooltip-id": `cdc-open-viz-tooltip-${f.runtime.uniqueId}`,
          onClick: (Ge) => {
            Ge.preventDefault(), v && (K[f.xAxis.dataKey] = le, v(f.uid, K));
          }
        },
        /* @__PURE__ */ l.createElement("div", { style: we })
      ), /* @__PURE__ */ l.createElement(ut, { display: f.labels && oe ? "block" : "none", opacity: ce ? 0.5 : 1, x: We * (K.index + 0.5) + Ie, y: Te - 5, fill: Ne, textAnchor: "middle" }, De), f.isLollipopChart && f.lollipopShape === "circle" && /* @__PURE__ */ l.createElement(
        "circle",
        {
          cx: We * (M.bars.length - K.index - 1) + Ie + O / 3.5,
          cy: K.y,
          r: O / 2,
          fill: Ee,
          key: `circle--${K.index}`,
          "data-tooltip-html": ae,
          "data-tooltip-id": `cdc-open-viz-tooltip-${f.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), f.isLollipopChart && f.lollipopShape === "square" && /* @__PURE__ */ l.createElement(
        "rect",
        {
          x: Ie - $ / 2,
          y: Te,
          width: O,
          height: O,
          fill: Ee,
          key: `circle--${K.index}`,
          "data-tooltip-html": ae,
          "data-tooltip-id": `cdc-open-viz-tooltip-${f.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ l.createElement("animate", { attributeName: "height", values: `0, ${O}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(f.confidenceKeys).length > 0 ? N.map((W) => {
    let M, H, K, re, ie = 5;
    return M = t(E(W)), K = n(b(W, f.confidenceKeys.lower)), re = n(b(W, f.confidenceKeys.upper)), /* @__PURE__ */ l.createElement(
      "path",
      {
        key: `confidence-interval-v-${H}-${W[f.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${M - ie} ${K}
                    L${M + ie} ${K}
                    M${M} ${K}
                    L${M} ${re}
                    M${M - ie} ${re}
                    L${M + ie} ${re}`
      }
    );
  }) : "");
}, KL = (e) => {
  const { xScale: t, yScale: n, yMax: r, seriesScale: a } = e, { transformedData: o, colorScale: u, seriesHighlight: c, config: d, formatNumber: f, formatDate: h, parseDate: m, setSharedFilter: g, isNumber: v, getTextWidth: y, getYAxisData: E, getXAxisData: b } = F.useContext(pt), { isHorizontal: x, barBorderWidth: w, hasMultipleSeries: A, applyRadius: D, updateBars: _, assignColorsToValues: C, section: $, fontSize: O, isLabelBelowBar: I, displayNumbersOnBar: B, lollipopBarWidth: L, lollipopShapeSize: N, getHighlightedBarColorByValue: z, getHighlightedBarByValue: W } = fs(), { HighLightedBarUtils: M } = _c(d);
  return d.visualizationSubType !== "stacked" && d.visualizationType === "Bar" && d.orientation === "horizontal" && /* @__PURE__ */ l.createElement(He, null, /* @__PURE__ */ l.createElement(
    nx,
    {
      data: o,
      keys: d.runtime.barSeriesKeys || d.runtime.seriesKeys,
      height: r,
      x0: (H) => H[d.runtime.originalXAxis.dataKey],
      x0Scale: n,
      x1Scale: a,
      yScale: t,
      color: () => ""
    },
    (H) => _(H).map((K, re) => /* @__PURE__ */ l.createElement(He, { className: `bar-group-${K.index}-${K.x0}--${re} ${d.orientation}`, key: `bar-group-${K.index}-${K.x0}--${re}`, id: `bar-group-${K.index}-${K.x0}--${re}`, top: K.y }, K.bars.map((ie, te) => {
      const ce = d.useLogScale ? 0.1 : 0;
      let oe = d.highlightedBarValues.map(($t) => $t.value).filter(($t) => $t !== void 0);
      oe = d.xAxis.type === "date" ? M.formatDates(oe) : oe;
      let Se = d.legend.behavior === "highlight" && c.length > 0 && c.indexOf(ie.key) === -1, Te = d.legend.behavior === "highlight" || c.length === 0 || c.indexOf(ie.key) !== -1, ke = d.barHeight, Ie = ie.value >= 0 && v(ie.value) ? ie.y : n(0);
      const We = ie.value < 0 ? Math.abs(t(ie.value)) : t(0), De = Math.abs(t(ie.value) - t(ce)), le = d.barHeight, ee = f(ie.value, "left"), me = d.runtime[$].type === "date" ? h(m(o[K.index][d.runtime.originalXAxis.dataKey])) : o[K.index][d.runtime.originalXAxis.dataKey], V = ie.value < 0 ? "below" : "above";
      let ae = y(me, `normal ${O[d.fontSize]}px sans-serif`) < De - 5, Ne = ae ? "end" : "start", Ee = "start", Pe = ae ? -5 : 5, nt = 10;
      V === "below" && (Ne = ae ? "start" : "end", Pe = ae ? 5 : -5, d.isLollipopChart && (Ee = "end", nt = -10));
      const At = ie.value < 0 ? -1 : te, je = D(At);
      let Le = d.runtime.yAxis.label ? `${d.runtime.yAxis.label}: ${ee}` : ee, Ae = d.runtime.xAxis.label ? `${d.runtime.xAxis.label}: ${me}` : me;
      A || (Ae = d.isLegendValue ? `<p className="tooltip-heading">${ie.key}: ${me}</p>` : d.runtime.xAxis.label ? `<p className="tooltip-heading">${d.runtime.xAxis.label}: ${me}</p>` : me);
      const xe = `<ul>
                  ${d.legend.showLegendValuesTooltip && d.runtime.seriesLabels && A ? `${d.runtime.seriesLabels[ie.key] || ""}<br/>` : ""}
                  <li class="tooltip-heading">${Le}</li>
                  <li class="tooltip-body">${Ae}</li>
                    </li></ul>`;
      let ht = "#000000";
      ht = M.checkFontColor(ee, oe, ht);
      let we = d.runtime.seriesLabels && d.runtime.seriesLabels[ie.key] ? u(d.runtime.seriesLabels[ie.key]) : u(ie.key);
      we = C(H.length, K.index, we);
      const Ge = d.isLollipopChart && d.lollipopColorStyle === "regular", Xe = d.isLollipopChart && d.lollipopColorStyle === "two-tone", Y = oe == null ? void 0 : oe.includes(ee), tt = z(ee), zt = W(ee), Kt = Y ? tt : d.barHasBorder === "true" ? "#000" : "transparent", Wt = Y ? zt.borderWidth : d.isLollipopChart ? 0 : d.barHasBorder === "true" ? w : 0;
      we && ht && ii.contrast(ht, we) < 4.9 && (ht = ae ? "#FFFFFF" : "#000000");
      const jt = {
        background: (() => Ge ? we : Xe ? ii(we).brighten(1) : Y ? "transparent" : we)(),
        borderColor: Kt,
        borderStyle: "solid",
        borderWidth: Wt,
        width: De,
        height: d.isLollipopChart ? L : le,
        ...je
      };
      return /* @__PURE__ */ l.createElement(He, { key: `${K.index}--${te}` }, /* @__PURE__ */ l.createElement("style", null, `
                        .linear #barGroup${K.index} div,
                        .Combo #barGroup${K.index} div {
                          transform-origin: 0 ${Ie + ke}px;
                        }
                      `), /* @__PURE__ */ l.createElement(He, { key: `bar-sub-group-${K.index}-${K.x0}-${Ie}--${te}` }, /* @__PURE__ */ l.createElement(
        "foreignObject",
        {
          id: `barGroup${K.index}`,
          key: `bar-group-bar-${K.index}-${ie.index}-${ie.value}-${ie.key}`,
          x: We,
          y: le * ie.index,
          width: De,
          height: d.isLollipopChart ? L : le,
          opacity: Se ? 0.5 : 1,
          display: Te ? "block" : "none",
          "data-tooltip-html": xe,
          "data-tooltip-id": `cdc-open-viz-tooltip-${d.runtime.uniqueId}`,
          onClick: ($t) => {
            $t.preventDefault(), g && (ie[d.xAxis.dataKey] = ee, g(d.uid, ie));
          }
        },
        /* @__PURE__ */ l.createElement("div", { style: jt })
      ), !d.isLollipopChart && B && /* @__PURE__ */ l.createElement(
        ut,
        {
          display: Te ? "block" : "none",
          x: ie.y,
          y: d.barHeight / 2 + d.barHeight * ie.index,
          fill: ht,
          dx: Pe,
          verticalAnchor: "middle",
          textAnchor: Ne
        },
        ee
      ), d.isLollipopChart && B && /* @__PURE__ */ l.createElement(
        ut,
        {
          display: Te ? "block" : "none",
          x: ie.y,
          y: 0,
          fill: "#000000",
          dx: nt,
          textAnchor: Ee,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        ee
      ), I && !d.yAxis.hideLabel && /* @__PURE__ */ l.createElement(ut, { x: d.yAxis.hideAxis ? 0 : 5, y: K.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, d.runtime.yAxis.type === "date" ? h(m(o[K.index][d.runtime.originalXAxis.dataKey])) : x ? o[K.index][d.runtime.originalXAxis.dataKey] : f(o[K.index][d.runtime.originalXAxis.dataKey])), d.isLollipopChart && d.lollipopShape === "circle" && /* @__PURE__ */ l.createElement("circle", { cx: ie.y, cy: 0 + L / 2, r: N / 2, fill: we, key: `circle--${ie.index}`, "data-tooltip-html": xe, "data-tooltip-id": `cdc-open-viz-tooltip-${d.runtime.uniqueId}`, style: { filter: "unset", opacity: 1 } }), d.isLollipopChart && d.lollipopShape === "square" && /* @__PURE__ */ l.createElement(
        "rect",
        {
          x: ie.y > 10 ? ie.y - N / 2 : 0,
          y: 0 - L / 2,
          width: N,
          height: N,
          fill: we,
          key: `circle--${ie.index}`,
          "data-tooltip-html": xe,
          "data-tooltip-id": `cdc-open-viz-tooltip-${d.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ l.createElement("animate", { attributeName: "height", values: `0, ${N}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(d.confidenceKeys).length > 0 ? o.map((H) => {
    let K, re, ie, te = 5;
    return K = n(b(H)) - 0.75 * d.barHeight, re = t(E(H, d.confidenceKeys.upper)), ie = t(E(H, d.confidenceKeys.lower)), /* @__PURE__ */ l.createElement(
      "path",
      {
        key: `confidence-interval-h-${K}-${H[d.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ie} ${K - te}
                    L${ie} ${K + te}
                    M${ie} ${K}
                    L${re} ${K}
                    M${re} ${K - te}
                    L${re} ${K + te} `
      }
    );
  }) : "");
}, Sl = {
  Vertical: qL,
  Horizontal: KL,
  StackedVertical: HL,
  StackedHorizontal: UL
}, jL = ({ xScale: e, yScale: t, seriesScale: n, xMax: r, yMax: a, handleTooltipMouseOver: o, handleTooltipMouseOff: u, handleTooltipClick: c }) => {
  const { transformedData: d, config: f } = F.useContext(pt);
  return /* @__PURE__ */ l.createElement(Lr, { component: "BarChart" }, /* @__PURE__ */ l.createElement(He, { left: parseFloat(f.runtime.yAxis.size) }, /* @__PURE__ */ l.createElement(Sl.StackedVertical, { xScale: e, yScale: t, xMax: r, yMax: a }), /* @__PURE__ */ l.createElement(Sl.StackedHorizontal, { xScale: e, yScale: t, xMax: r, yMax: a }), /* @__PURE__ */ l.createElement(Sl.Vertical, { xScale: e, yScale: t, xMax: r, yMax: a, seriesScale: n }), /* @__PURE__ */ l.createElement(Sl.Horizontal, { xScale: e, yScale: t, xMax: r, yMax: a, seriesScale: n }), /* @__PURE__ */ l.createElement(ar, { key: "bars", width: Number(r), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (h) => o(h, d), onMouseOut: u, onClick: (h) => c(h, d) })));
};
function xi() {
  return xi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xi.apply(this, arguments);
}
function ji(e) {
  var t = e.x1, n = e.x2, r = e.y1, a = e.y2;
  return {
    x1: r,
    x2: a,
    y1: t,
    y2: n
  };
}
function yb(e) {
  var t = e.left, n = t === void 0 ? 0 : t, r = e.top, a = r === void 0 ? 0 : r, o = e.className, u = e.max, c = e.min, d = e.firstQuartile, f = e.thirdQuartile, h = e.median, m = e.boxWidth, g = m === void 0 ? 10 : m, v = e.fill, y = e.fillOpacity, E = e.stroke, b = e.strokeWidth, x = e.rx, w = x === void 0 ? 2 : x, A = e.ry, D = A === void 0 ? 2 : A, _ = e.valueScale, C = e.outliers, $ = C === void 0 ? [] : C, O = e.horizontal, I = e.medianProps, B = I === void 0 ? {} : I, L = e.maxProps, N = L === void 0 ? {} : L, z = e.minProps, W = z === void 0 ? {} : z, M = e.boxProps, H = M === void 0 ? {} : M, K = e.outlierProps, re = K === void 0 ? {} : K, ie = e.container, te = ie === void 0 ? !1 : ie, ce = e.containerProps, oe = ce === void 0 ? {} : ce, Se = e.children, Te = O ? a : n, ke = Te + (g || 0) / 2, Ie = _.range(), We = _(c ?? 0), De = _(d ?? 0), le = _(h ?? 0), ee = _(f ?? 0), me = _(u ?? 0), V = {
    valueRange: Ie,
    center: ke,
    offset: Te,
    boxWidth: g,
    max: {
      x1: ke - (g || 0) / 4,
      x2: ke + (g || 0) / 4,
      y1: me,
      y2: me
    },
    maxToThird: {
      x1: ke,
      x2: ke,
      y1: me,
      y2: ee
    },
    median: {
      x1: Te,
      x2: Te + (g || 0),
      y1: le,
      y2: le
    },
    minToFirst: {
      x1: ke,
      x2: ke,
      y1: De,
      y2: We
    },
    min: {
      x1: ke - (g || 0) / 4,
      x2: ke + (g || 0) / 4,
      y1: We,
      y2: We
    },
    box: {
      x1: Te,
      x2: g || 0,
      y1: ee,
      y2: Math.abs(ee - De)
    },
    container: {
      x1: Te,
      x2: g || 0,
      y1: Math.min.apply(Math, Ie),
      y2: Math.abs(Ie[0] - Ie[1])
    }
  };
  return O && (V.max = ji(V.max), V.maxToThird = ji(V.maxToThird), V.box.y1 = De, V.box = ji(V.box), V.median = ji(V.median), V.minToFirst = ji(V.minToFirst), V.min = ji(V.min), V.container = ji(V.container), V.container.y1 = Math.min.apply(Math, Ie)), Se ? /* @__PURE__ */ l.createElement(l.Fragment, null, Se(V)) : /* @__PURE__ */ l.createElement(He, {
    className: Yt("visx-boxplot", o)
  }, $.map(function(Oe, ae) {
    var Ne = O ? _(Oe) : ke, Ee = O ? ke : _(Oe);
    return /* @__PURE__ */ l.createElement("circle", xi({
      key: "visx-boxplot-outlier-" + ae,
      className: "visx-boxplot-outlier",
      cx: Ne,
      cy: Ee,
      r: 4,
      stroke: E,
      strokeWidth: b,
      fill: v,
      fillOpacity: y
    }, re));
  }), /* @__PURE__ */ l.createElement("line", xi({
    className: "visx-boxplot-max",
    x1: V.max.x1,
    y1: V.max.y1,
    x2: V.max.x2,
    y2: V.max.y2,
    stroke: E,
    strokeWidth: b
  }, N)), /* @__PURE__ */ l.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: V.maxToThird.x1,
    y1: V.maxToThird.y1,
    x2: V.maxToThird.x2,
    y2: V.maxToThird.y2,
    stroke: E,
    strokeWidth: b
  }), /* @__PURE__ */ l.createElement("rect", xi({
    className: "visx-boxplot-box",
    x: V.box.x1,
    y: V.box.y1,
    width: V.box.x2,
    height: V.box.y2,
    stroke: E,
    strokeWidth: b,
    fill: v,
    fillOpacity: y,
    rx: w,
    ry: D
  }, H)), /* @__PURE__ */ l.createElement("line", xi({
    className: "visx-boxplot-median",
    x1: V.median.x1,
    y1: V.median.y1,
    x2: V.median.x2,
    y2: V.median.y2,
    stroke: E,
    strokeWidth: b
  }, B)), /* @__PURE__ */ l.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: V.minToFirst.x1,
    y1: V.minToFirst.y1,
    x2: V.minToFirst.x2,
    y2: V.minToFirst.y2,
    stroke: E,
    strokeWidth: b
  }), /* @__PURE__ */ l.createElement("line", xi({
    className: "visx-boxplot-min",
    x1: V.min.x1,
    y1: V.min.y1,
    x2: V.min.x2,
    y2: V.min.y2,
    stroke: E,
    strokeWidth: b
  }, W)), te && /* @__PURE__ */ l.createElement("rect", xi({
    x: V.container.x1,
    y: V.container.y1,
    width: V.container.x2,
    height: V.container.y2,
    fillOpacity: "0"
  }, oe)));
}
yb.propTypes = {
  max: G.number,
  min: G.number,
  firstQuartile: G.number,
  thirdQuartile: G.number,
  median: G.number,
  boxWidth: G.number,
  fill: G.string,
  fillOpacity: G.oneOfType([G.number, G.string]),
  stroke: G.string,
  strokeWidth: G.oneOfType([G.number, G.string]),
  rx: G.number,
  ry: G.number,
  outliers: G.arrayOf(G.number),
  container: G.bool,
  children: G.func
};
var ac = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ac.exports;
(function(e, t) {
  (function() {
    var n, r = "4.17.21", a = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", c = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", f = 500, h = "__lodash_placeholder__", m = 1, g = 2, v = 4, y = 1, E = 2, b = 1, x = 2, w = 4, A = 8, D = 16, _ = 32, C = 64, $ = 128, O = 256, I = 512, B = 30, L = "...", N = 800, z = 16, W = 1, M = 2, H = 3, K = 1 / 0, re = 9007199254740991, ie = 17976931348623157e292, te = 0 / 0, ce = 4294967295, oe = ce - 1, Se = ce >>> 1, Te = [
      ["ary", $],
      ["bind", b],
      ["bindKey", x],
      ["curry", A],
      ["curryRight", D],
      ["flip", I],
      ["partial", _],
      ["partialRight", C],
      ["rearg", O]
    ], ke = "[object Arguments]", Ie = "[object Array]", We = "[object AsyncFunction]", De = "[object Boolean]", le = "[object Date]", ee = "[object DOMException]", me = "[object Error]", V = "[object Function]", Oe = "[object GeneratorFunction]", ae = "[object Map]", Ne = "[object Number]", Ee = "[object Null]", Pe = "[object Object]", nt = "[object Promise]", At = "[object Proxy]", je = "[object RegExp]", Le = "[object Set]", Ae = "[object String]", xe = "[object Symbol]", ht = "[object Undefined]", we = "[object WeakMap]", Ge = "[object WeakSet]", Xe = "[object ArrayBuffer]", Y = "[object DataView]", tt = "[object Float32Array]", zt = "[object Float64Array]", Kt = "[object Int8Array]", Wt = "[object Int16Array]", Qt = "[object Int32Array]", jt = "[object Uint8Array]", $t = "[object Uint8ClampedArray]", fn = "[object Uint16Array]", jn = "[object Uint32Array]", oi = /\b__p \+= '';/g, ua = /\b(__p \+=) '' \+/g, Dn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Kr = /&(?:amp|lt|gt|quot|#39);/g, Sr = /[&<>"']/g, Pi = RegExp(Kr.source), jr = RegExp(Sr.source), fe = /<%-([\s\S]+?)%>/g, ze = /<%([\s\S]+?)%>/g, rt = /<%=([\s\S]+?)%>/g, Ve = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rn = /^\w*$/, xn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pn = /[\\^$.*+?()[\]{}|]/g, k = RegExp(pn.source), pe = /^\s+/, be = /\s/, _e = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, $e = /\{\n\/\* \[wrapped with (.+)\] \*/, Be = /,? & /, Ce = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, et = /[()=,{}\[\]\/\s]/, Je = /\\(\\)?/g, Jt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Nn = /\w*$/, kt = /^[-+]0x[0-9a-f]+$/i, or = /^0b[01]+$/i, dt = /^\[object .+?Constructor\]$/, It = /^0o[0-7]+$/i, Vt = /^(?:0|[1-9]\d*)$/, en = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, bn = /($^)/, hn = /['\n\r\u2028\u2029\\]/g, En = "\\ud800-\\udfff", Sn = "\\u0300-\\u036f", Xt = "\\ufe20-\\ufe2f", On = "\\u20d0-\\u20ff", Rr = Sn + Xt + On, Gr = "\\u2700-\\u27bf", ki = "a-z\\xdf-\\xf6\\xf8-\\xff", Li = "\\xac\\xb1\\xd7\\xf7", an = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ar = "\\u2000-\\u206f", xs = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Xa = "A-Z\\xc0-\\xd6\\xd8-\\xde", Za = "\\ufe0e\\ufe0f", Qa = Li + an + Ar + xs, da = "['’]", bs = "[" + En + "]", Ja = "[" + Qa + "]", Ri = "[" + Rr + "]", eo = "\\d+", Es = "[" + Gr + "]", to = "[" + ki + "]", no = "[^" + En + Qa + eo + Gr + ki + Xa + "]", fa = "\\ud83c[\\udffb-\\udfff]", Ss = "(?:" + Ri + "|" + fa + ")", U = "[^" + En + "]", j = "(?:\\ud83c[\\udde6-\\uddff]){2}", Q = "[\\ud800-\\udbff][\\udc00-\\udfff]", ue = "[" + Xa + "]", _t = "\\u200d", An = "(?:" + to + "|" + no + ")", sr = "(?:" + ue + "|" + no + ")", si = "(?:" + da + "(?:d|ll|m|re|s|t|ve))?", Vp = "(?:" + da + "(?:D|LL|M|RE|S|T|VE))?", Hp = Ss + "?", Up = "[" + Za + "]?", j0 = "(?:" + _t + "(?:" + [U, j, Q].join("|") + ")" + Up + Hp + ")*", G0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Y0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", qp = Up + Hp + j0, X0 = "(?:" + [Es, j, Q].join("|") + ")" + qp, Z0 = "(?:" + [U + Ri + "?", Ri, j, Q, bs].join("|") + ")", Q0 = RegExp(da, "g"), J0 = RegExp(Ri, "g"), Rc = RegExp(fa + "(?=" + fa + ")|" + Z0 + qp, "g"), eE = RegExp([
      ue + "?" + to + "+" + si + "(?=" + [Ja, ue, "$"].join("|") + ")",
      sr + "+" + Vp + "(?=" + [Ja, ue + An, "$"].join("|") + ")",
      ue + "?" + An + "+" + si,
      ue + "+" + Vp,
      Y0,
      G0,
      eo,
      X0
    ].join("|"), "g"), tE = RegExp("[" + _t + En + Rr + Za + "]"), nE = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, rE = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], iE = -1, Ht = {};
    Ht[tt] = Ht[zt] = Ht[Kt] = Ht[Wt] = Ht[Qt] = Ht[jt] = Ht[$t] = Ht[fn] = Ht[jn] = !0, Ht[ke] = Ht[Ie] = Ht[Xe] = Ht[De] = Ht[Y] = Ht[le] = Ht[me] = Ht[V] = Ht[ae] = Ht[Ne] = Ht[Pe] = Ht[je] = Ht[Le] = Ht[Ae] = Ht[we] = !1;
    var Bt = {};
    Bt[ke] = Bt[Ie] = Bt[Xe] = Bt[Y] = Bt[De] = Bt[le] = Bt[tt] = Bt[zt] = Bt[Kt] = Bt[Wt] = Bt[Qt] = Bt[ae] = Bt[Ne] = Bt[Pe] = Bt[je] = Bt[Le] = Bt[Ae] = Bt[xe] = Bt[jt] = Bt[$t] = Bt[fn] = Bt[jn] = !0, Bt[me] = Bt[V] = Bt[we] = !1;
    var aE = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, oE = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, sE = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, lE = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, cE = parseFloat, uE = parseInt, Kp = typeof xo == "object" && xo && xo.Object === Object && xo, dE = typeof self == "object" && self && self.Object === Object && self, wn = Kp || dE || Function("return this")(), Mc = t && !t.nodeType && t, Mi = Mc && !0 && e && !e.nodeType && e, jp = Mi && Mi.exports === Mc, $c = jp && Kp.process, lr = function() {
      try {
        var J = Mi && Mi.require && Mi.require("util").types;
        return J || $c && $c.binding && $c.binding("util");
      } catch {
      }
    }(), Gp = lr && lr.isArrayBuffer, Yp = lr && lr.isDate, Xp = lr && lr.isMap, Zp = lr && lr.isRegExp, Qp = lr && lr.isSet, Jp = lr && lr.isTypedArray;
    function Gn(J, de, se) {
      switch (se.length) {
        case 0:
          return J.call(de);
        case 1:
          return J.call(de, se[0]);
        case 2:
          return J.call(de, se[0], se[1]);
        case 3:
          return J.call(de, se[0], se[1], se[2]);
      }
      return J.apply(de, se);
    }
    function fE(J, de, se, Fe) {
      for (var it = -1, wt = J == null ? 0 : J.length; ++it < wt; ) {
        var on = J[it];
        de(Fe, on, se(on), J);
      }
      return Fe;
    }
    function cr(J, de) {
      for (var se = -1, Fe = J == null ? 0 : J.length; ++se < Fe && de(J[se], se, J) !== !1; )
        ;
      return J;
    }
    function pE(J, de) {
      for (var se = J == null ? 0 : J.length; se-- && de(J[se], se, J) !== !1; )
        ;
      return J;
    }
    function eh(J, de) {
      for (var se = -1, Fe = J == null ? 0 : J.length; ++se < Fe; )
        if (!de(J[se], se, J))
          return !1;
      return !0;
    }
    function li(J, de) {
      for (var se = -1, Fe = J == null ? 0 : J.length, it = 0, wt = []; ++se < Fe; ) {
        var on = J[se];
        de(on, se, J) && (wt[it++] = on);
      }
      return wt;
    }
    function As(J, de) {
      var se = J == null ? 0 : J.length;
      return !!se && pa(J, de, 0) > -1;
    }
    function Ic(J, de, se) {
      for (var Fe = -1, it = J == null ? 0 : J.length; ++Fe < it; )
        if (se(de, J[Fe]))
          return !0;
      return !1;
    }
    function Ut(J, de) {
      for (var se = -1, Fe = J == null ? 0 : J.length, it = Array(Fe); ++se < Fe; )
        it[se] = de(J[se], se, J);
      return it;
    }
    function ci(J, de) {
      for (var se = -1, Fe = de.length, it = J.length; ++se < Fe; )
        J[it + se] = de[se];
      return J;
    }
    function Bc(J, de, se, Fe) {
      var it = -1, wt = J == null ? 0 : J.length;
      for (Fe && wt && (se = J[++it]); ++it < wt; )
        se = de(se, J[it], it, J);
      return se;
    }
    function hE(J, de, se, Fe) {
      var it = J == null ? 0 : J.length;
      for (Fe && it && (se = J[--it]); it--; )
        se = de(se, J[it], it, J);
      return se;
    }
    function Fc(J, de) {
      for (var se = -1, Fe = J == null ? 0 : J.length; ++se < Fe; )
        if (de(J[se], se, J))
          return !0;
      return !1;
    }
    var mE = zc("length");
    function gE(J) {
      return J.split("");
    }
    function vE(J) {
      return J.match(Ce) || [];
    }
    function th(J, de, se) {
      var Fe;
      return se(J, function(it, wt, on) {
        if (de(it, wt, on))
          return Fe = wt, !1;
      }), Fe;
    }
    function ws(J, de, se, Fe) {
      for (var it = J.length, wt = se + (Fe ? 1 : -1); Fe ? wt-- : ++wt < it; )
        if (de(J[wt], wt, J))
          return wt;
      return -1;
    }
    function pa(J, de, se) {
      return de === de ? NE(J, de, se) : ws(J, nh, se);
    }
    function yE(J, de, se, Fe) {
      for (var it = se - 1, wt = J.length; ++it < wt; )
        if (Fe(J[it], de))
          return it;
      return -1;
    }
    function nh(J) {
      return J !== J;
    }
    function rh(J, de) {
      var se = J == null ? 0 : J.length;
      return se ? Vc(J, de) / se : te;
    }
    function zc(J) {
      return function(de) {
        return de == null ? n : de[J];
      };
    }
    function Wc(J) {
      return function(de) {
        return J == null ? n : J[de];
      };
    }
    function ih(J, de, se, Fe, it) {
      return it(J, function(wt, on, Rt) {
        se = Fe ? (Fe = !1, wt) : de(se, wt, on, Rt);
      }), se;
    }
    function xE(J, de) {
      var se = J.length;
      for (J.sort(de); se--; )
        J[se] = J[se].value;
      return J;
    }
    function Vc(J, de) {
      for (var se, Fe = -1, it = J.length; ++Fe < it; ) {
        var wt = de(J[Fe]);
        wt !== n && (se = se === n ? wt : se + wt);
      }
      return se;
    }
    function Hc(J, de) {
      for (var se = -1, Fe = Array(J); ++se < J; )
        Fe[se] = de(se);
      return Fe;
    }
    function bE(J, de) {
      return Ut(de, function(se) {
        return [se, J[se]];
      });
    }
    function ah(J) {
      return J && J.slice(0, ch(J) + 1).replace(pe, "");
    }
    function Yn(J) {
      return function(de) {
        return J(de);
      };
    }
    function Uc(J, de) {
      return Ut(de, function(se) {
        return J[se];
      });
    }
    function ro(J, de) {
      return J.has(de);
    }
    function oh(J, de) {
      for (var se = -1, Fe = J.length; ++se < Fe && pa(de, J[se], 0) > -1; )
        ;
      return se;
    }
    function sh(J, de) {
      for (var se = J.length; se-- && pa(de, J[se], 0) > -1; )
        ;
      return se;
    }
    function EE(J, de) {
      for (var se = J.length, Fe = 0; se--; )
        J[se] === de && ++Fe;
      return Fe;
    }
    var SE = Wc(aE), AE = Wc(oE);
    function wE(J) {
      return "\\" + lE[J];
    }
    function _E(J, de) {
      return J == null ? n : J[de];
    }
    function ha(J) {
      return tE.test(J);
    }
    function CE(J) {
      return nE.test(J);
    }
    function TE(J) {
      for (var de, se = []; !(de = J.next()).done; )
        se.push(de.value);
      return se;
    }
    function qc(J) {
      var de = -1, se = Array(J.size);
      return J.forEach(function(Fe, it) {
        se[++de] = [it, Fe];
      }), se;
    }
    function lh(J, de) {
      return function(se) {
        return J(de(se));
      };
    }
    function ui(J, de) {
      for (var se = -1, Fe = J.length, it = 0, wt = []; ++se < Fe; ) {
        var on = J[se];
        (on === de || on === h) && (J[se] = h, wt[it++] = se);
      }
      return wt;
    }
    function _s(J) {
      var de = -1, se = Array(J.size);
      return J.forEach(function(Fe) {
        se[++de] = Fe;
      }), se;
    }
    function DE(J) {
      var de = -1, se = Array(J.size);
      return J.forEach(function(Fe) {
        se[++de] = [Fe, Fe];
      }), se;
    }
    function NE(J, de, se) {
      for (var Fe = se - 1, it = J.length; ++Fe < it; )
        if (J[Fe] === de)
          return Fe;
      return -1;
    }
    function OE(J, de, se) {
      for (var Fe = se + 1; Fe--; )
        if (J[Fe] === de)
          return Fe;
      return Fe;
    }
    function ma(J) {
      return ha(J) ? kE(J) : mE(J);
    }
    function wr(J) {
      return ha(J) ? LE(J) : gE(J);
    }
    function ch(J) {
      for (var de = J.length; de-- && be.test(J.charAt(de)); )
        ;
      return de;
    }
    var PE = Wc(sE);
    function kE(J) {
      for (var de = Rc.lastIndex = 0; Rc.test(J); )
        ++de;
      return de;
    }
    function LE(J) {
      return J.match(Rc) || [];
    }
    function RE(J) {
      return J.match(eE) || [];
    }
    var ME = function J(de) {
      de = de == null ? wn : ga.defaults(wn.Object(), de, ga.pick(wn, rE));
      var se = de.Array, Fe = de.Date, it = de.Error, wt = de.Function, on = de.Math, Rt = de.Object, Kc = de.RegExp, $E = de.String, ur = de.TypeError, Cs = se.prototype, IE = wt.prototype, va = Rt.prototype, Ts = de["__core-js_shared__"], Ds = IE.toString, Lt = va.hasOwnProperty, BE = 0, uh = function() {
        var i = /[^.]+$/.exec(Ts && Ts.keys && Ts.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), Ns = va.toString, FE = Ds.call(Rt), zE = wn._, WE = Kc(
        "^" + Ds.call(Lt).replace(pn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Os = jp ? de.Buffer : n, di = de.Symbol, Ps = de.Uint8Array, dh = Os ? Os.allocUnsafe : n, ks = lh(Rt.getPrototypeOf, Rt), fh = Rt.create, ph = va.propertyIsEnumerable, Ls = Cs.splice, hh = di ? di.isConcatSpreadable : n, io = di ? di.iterator : n, $i = di ? di.toStringTag : n, Rs = function() {
        try {
          var i = Wi(Rt, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), VE = de.clearTimeout !== wn.clearTimeout && de.clearTimeout, HE = Fe && Fe.now !== wn.Date.now && Fe.now, UE = de.setTimeout !== wn.setTimeout && de.setTimeout, Ms = on.ceil, $s = on.floor, jc = Rt.getOwnPropertySymbols, qE = Os ? Os.isBuffer : n, mh = de.isFinite, KE = Cs.join, jE = lh(Rt.keys, Rt), sn = on.max, Pn = on.min, GE = Fe.now, YE = de.parseInt, gh = on.random, XE = Cs.reverse, Gc = Wi(de, "DataView"), ao = Wi(de, "Map"), Yc = Wi(de, "Promise"), ya = Wi(de, "Set"), oo = Wi(de, "WeakMap"), so = Wi(Rt, "create"), Is = oo && new oo(), xa = {}, ZE = Vi(Gc), QE = Vi(ao), JE = Vi(Yc), e1 = Vi(ya), t1 = Vi(oo), Bs = di ? di.prototype : n, lo = Bs ? Bs.valueOf : n, vh = Bs ? Bs.toString : n;
      function P(i) {
        if (Zt(i) && !at(i) && !(i instanceof gt)) {
          if (i instanceof dr)
            return i;
          if (Lt.call(i, "__wrapped__"))
            return ym(i);
        }
        return new dr(i);
      }
      var ba = function() {
        function i() {
        }
        return function(s) {
          if (!Gt(s))
            return {};
          if (fh)
            return fh(s);
          i.prototype = s;
          var p = new i();
          return i.prototype = n, p;
        };
      }();
      function Fs() {
      }
      function dr(i, s) {
        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
      }
      P.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: fe,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: ze,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: rt,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: P
        }
      }, P.prototype = Fs.prototype, P.prototype.constructor = P, dr.prototype = ba(Fs.prototype), dr.prototype.constructor = dr;
      function gt(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ce, this.__views__ = [];
      }
      function n1() {
        var i = new gt(this.__wrapped__);
        return i.__actions__ = Hn(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Hn(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Hn(this.__views__), i;
      }
      function r1() {
        if (this.__filtered__) {
          var i = new gt(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function i1() {
        var i = this.__wrapped__.value(), s = this.__dir__, p = at(i), S = s < 0, T = p ? i.length : 0, R = gS(0, T, this.__views__), q = R.start, X = R.end, ne = X - q, ge = S ? X : q - 1, ve = this.__iteratees__, ye = ve.length, Re = 0, Ue = Pn(ne, this.__takeCount__);
        if (!p || !S && T == ne && Ue == ne)
          return Wh(i, this.__actions__);
        var Ze = [];
        e:
          for (; ne-- && Re < Ue; ) {
            ge += s;
            for (var ct = -1, Qe = i[ge]; ++ct < ye; ) {
              var mt = ve[ct], xt = mt.iteratee, Qn = mt.type, In = xt(Qe);
              if (Qn == M)
                Qe = In;
              else if (!In) {
                if (Qn == W)
                  continue e;
                break e;
              }
            }
            Ze[Re++] = Qe;
          }
        return Ze;
      }
      gt.prototype = ba(Fs.prototype), gt.prototype.constructor = gt;
      function Ii(i) {
        var s = -1, p = i == null ? 0 : i.length;
        for (this.clear(); ++s < p; ) {
          var S = i[s];
          this.set(S[0], S[1]);
        }
      }
      function a1() {
        this.__data__ = so ? so(null) : {}, this.size = 0;
      }
      function o1(i) {
        var s = this.has(i) && delete this.__data__[i];
        return this.size -= s ? 1 : 0, s;
      }
      function s1(i) {
        var s = this.__data__;
        if (so) {
          var p = s[i];
          return p === d ? n : p;
        }
        return Lt.call(s, i) ? s[i] : n;
      }
      function l1(i) {
        var s = this.__data__;
        return so ? s[i] !== n : Lt.call(s, i);
      }
      function c1(i, s) {
        var p = this.__data__;
        return this.size += this.has(i) ? 0 : 1, p[i] = so && s === n ? d : s, this;
      }
      Ii.prototype.clear = a1, Ii.prototype.delete = o1, Ii.prototype.get = s1, Ii.prototype.has = l1, Ii.prototype.set = c1;
      function Yr(i) {
        var s = -1, p = i == null ? 0 : i.length;
        for (this.clear(); ++s < p; ) {
          var S = i[s];
          this.set(S[0], S[1]);
        }
      }
      function u1() {
        this.__data__ = [], this.size = 0;
      }
      function d1(i) {
        var s = this.__data__, p = zs(s, i);
        if (p < 0)
          return !1;
        var S = s.length - 1;
        return p == S ? s.pop() : Ls.call(s, p, 1), --this.size, !0;
      }
      function f1(i) {
        var s = this.__data__, p = zs(s, i);
        return p < 0 ? n : s[p][1];
      }
      function p1(i) {
        return zs(this.__data__, i) > -1;
      }
      function h1(i, s) {
        var p = this.__data__, S = zs(p, i);
        return S < 0 ? (++this.size, p.push([i, s])) : p[S][1] = s, this;
      }
      Yr.prototype.clear = u1, Yr.prototype.delete = d1, Yr.prototype.get = f1, Yr.prototype.has = p1, Yr.prototype.set = h1;
      function Xr(i) {
        var s = -1, p = i == null ? 0 : i.length;
        for (this.clear(); ++s < p; ) {
          var S = i[s];
          this.set(S[0], S[1]);
        }
      }
      function m1() {
        this.size = 0, this.__data__ = {
          hash: new Ii(),
          map: new (ao || Yr)(),
          string: new Ii()
        };
      }
      function g1(i) {
        var s = Qs(this, i).delete(i);
        return this.size -= s ? 1 : 0, s;
      }
      function v1(i) {
        return Qs(this, i).get(i);
      }
      function y1(i) {
        return Qs(this, i).has(i);
      }
      function x1(i, s) {
        var p = Qs(this, i), S = p.size;
        return p.set(i, s), this.size += p.size == S ? 0 : 1, this;
      }
      Xr.prototype.clear = m1, Xr.prototype.delete = g1, Xr.prototype.get = v1, Xr.prototype.has = y1, Xr.prototype.set = x1;
      function Bi(i) {
        var s = -1, p = i == null ? 0 : i.length;
        for (this.__data__ = new Xr(); ++s < p; )
          this.add(i[s]);
      }
      function b1(i) {
        return this.__data__.set(i, d), this;
      }
      function E1(i) {
        return this.__data__.has(i);
      }
      Bi.prototype.add = Bi.prototype.push = b1, Bi.prototype.has = E1;
      function _r(i) {
        var s = this.__data__ = new Yr(i);
        this.size = s.size;
      }
      function S1() {
        this.__data__ = new Yr(), this.size = 0;
      }
      function A1(i) {
        var s = this.__data__, p = s.delete(i);
        return this.size = s.size, p;
      }
      function w1(i) {
        return this.__data__.get(i);
      }
      function _1(i) {
        return this.__data__.has(i);
      }
      function C1(i, s) {
        var p = this.__data__;
        if (p instanceof Yr) {
          var S = p.__data__;
          if (!ao || S.length < a - 1)
            return S.push([i, s]), this.size = ++p.size, this;
          p = this.__data__ = new Xr(S);
        }
        return p.set(i, s), this.size = p.size, this;
      }
      _r.prototype.clear = S1, _r.prototype.delete = A1, _r.prototype.get = w1, _r.prototype.has = _1, _r.prototype.set = C1;
      function yh(i, s) {
        var p = at(i), S = !p && Hi(i), T = !p && !S && gi(i), R = !p && !S && !T && wa(i), q = p || S || T || R, X = q ? Hc(i.length, $E) : [], ne = X.length;
        for (var ge in i)
          (s || Lt.call(i, ge)) && !(q && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ge == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          T && (ge == "offset" || ge == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          R && (ge == "buffer" || ge == "byteLength" || ge == "byteOffset") || // Skip index properties.
          ei(ge, ne))) && X.push(ge);
        return X;
      }
      function xh(i) {
        var s = i.length;
        return s ? i[ou(0, s - 1)] : n;
      }
      function T1(i, s) {
        return Js(Hn(i), Fi(s, 0, i.length));
      }
      function D1(i) {
        return Js(Hn(i));
      }
      function Xc(i, s, p) {
        (p !== n && !Cr(i[s], p) || p === n && !(s in i)) && Zr(i, s, p);
      }
      function co(i, s, p) {
        var S = i[s];
        (!(Lt.call(i, s) && Cr(S, p)) || p === n && !(s in i)) && Zr(i, s, p);
      }
      function zs(i, s) {
        for (var p = i.length; p--; )
          if (Cr(i[p][0], s))
            return p;
        return -1;
      }
      function N1(i, s, p, S) {
        return fi(i, function(T, R, q) {
          s(S, T, p(T), q);
        }), S;
      }
      function bh(i, s) {
        return i && $r(s, mn(s), i);
      }
      function O1(i, s) {
        return i && $r(s, qn(s), i);
      }
      function Zr(i, s, p) {
        s == "__proto__" && Rs ? Rs(i, s, {
          configurable: !0,
          enumerable: !0,
          value: p,
          writable: !0
        }) : i[s] = p;
      }
      function Zc(i, s) {
        for (var p = -1, S = s.length, T = se(S), R = i == null; ++p < S; )
          T[p] = R ? n : Pu(i, s[p]);
        return T;
      }
      function Fi(i, s, p) {
        return i === i && (p !== n && (i = i <= p ? i : p), s !== n && (i = i >= s ? i : s)), i;
      }
      function fr(i, s, p, S, T, R) {
        var q, X = s & m, ne = s & g, ge = s & v;
        if (p && (q = T ? p(i, S, T, R) : p(i)), q !== n)
          return q;
        if (!Gt(i))
          return i;
        var ve = at(i);
        if (ve) {
          if (q = yS(i), !X)
            return Hn(i, q);
        } else {
          var ye = kn(i), Re = ye == V || ye == Oe;
          if (gi(i))
            return Uh(i, X);
          if (ye == Pe || ye == ke || Re && !T) {
            if (q = ne || Re ? {} : cm(i), !X)
              return ne ? sS(i, O1(q, i)) : oS(i, bh(q, i));
          } else {
            if (!Bt[ye])
              return T ? i : {};
            q = xS(i, ye, X);
          }
        }
        R || (R = new _r());
        var Ue = R.get(i);
        if (Ue)
          return Ue;
        R.set(i, q), Bm(i) ? i.forEach(function(Qe) {
          q.add(fr(Qe, s, p, Qe, i, R));
        }) : $m(i) && i.forEach(function(Qe, mt) {
          q.set(mt, fr(Qe, s, p, mt, i, R));
        });
        var Ze = ge ? ne ? vu : gu : ne ? qn : mn, ct = ve ? n : Ze(i);
        return cr(ct || i, function(Qe, mt) {
          ct && (mt = Qe, Qe = i[mt]), co(q, mt, fr(Qe, s, p, mt, i, R));
        }), q;
      }
      function P1(i) {
        var s = mn(i);
        return function(p) {
          return Eh(p, i, s);
        };
      }
      function Eh(i, s, p) {
        var S = p.length;
        if (i == null)
          return !S;
        for (i = Rt(i); S--; ) {
          var T = p[S], R = s[T], q = i[T];
          if (q === n && !(T in i) || !R(q))
            return !1;
        }
        return !0;
      }
      function Sh(i, s, p) {
        if (typeof i != "function")
          throw new ur(u);
        return vo(function() {
          i.apply(n, p);
        }, s);
      }
      function uo(i, s, p, S) {
        var T = -1, R = As, q = !0, X = i.length, ne = [], ge = s.length;
        if (!X)
          return ne;
        p && (s = Ut(s, Yn(p))), S ? (R = Ic, q = !1) : s.length >= a && (R = ro, q = !1, s = new Bi(s));
        e:
          for (; ++T < X; ) {
            var ve = i[T], ye = p == null ? ve : p(ve);
            if (ve = S || ve !== 0 ? ve : 0, q && ye === ye) {
              for (var Re = ge; Re--; )
                if (s[Re] === ye)
                  continue e;
              ne.push(ve);
            } else
              R(s, ye, S) || ne.push(ve);
          }
        return ne;
      }
      var fi = Yh(Mr), Ah = Yh(Jc, !0);
      function k1(i, s) {
        var p = !0;
        return fi(i, function(S, T, R) {
          return p = !!s(S, T, R), p;
        }), p;
      }
      function Ws(i, s, p) {
        for (var S = -1, T = i.length; ++S < T; ) {
          var R = i[S], q = s(R);
          if (q != null && (X === n ? q === q && !Zn(q) : p(q, X)))
            var X = q, ne = R;
        }
        return ne;
      }
      function L1(i, s, p, S) {
        var T = i.length;
        for (p = st(p), p < 0 && (p = -p > T ? 0 : T + p), S = S === n || S > T ? T : st(S), S < 0 && (S += T), S = p > S ? 0 : zm(S); p < S; )
          i[p++] = s;
        return i;
      }
      function wh(i, s) {
        var p = [];
        return fi(i, function(S, T, R) {
          s(S, T, R) && p.push(S);
        }), p;
      }
      function _n(i, s, p, S, T) {
        var R = -1, q = i.length;
        for (p || (p = ES), T || (T = []); ++R < q; ) {
          var X = i[R];
          s > 0 && p(X) ? s > 1 ? _n(X, s - 1, p, S, T) : ci(T, X) : S || (T[T.length] = X);
        }
        return T;
      }
      var Qc = Xh(), _h = Xh(!0);
      function Mr(i, s) {
        return i && Qc(i, s, mn);
      }
      function Jc(i, s) {
        return i && _h(i, s, mn);
      }
      function Vs(i, s) {
        return li(s, function(p) {
          return ti(i[p]);
        });
      }
      function zi(i, s) {
        s = hi(s, i);
        for (var p = 0, S = s.length; i != null && p < S; )
          i = i[Ir(s[p++])];
        return p && p == S ? i : n;
      }
      function Ch(i, s, p) {
        var S = s(i);
        return at(i) ? S : ci(S, p(i));
      }
      function Mn(i) {
        return i == null ? i === n ? ht : Ee : $i && $i in Rt(i) ? mS(i) : DS(i);
      }
      function eu(i, s) {
        return i > s;
      }
      function R1(i, s) {
        return i != null && Lt.call(i, s);
      }
      function M1(i, s) {
        return i != null && s in Rt(i);
      }
      function $1(i, s, p) {
        return i >= Pn(s, p) && i < sn(s, p);
      }
      function tu(i, s, p) {
        for (var S = p ? Ic : As, T = i[0].length, R = i.length, q = R, X = se(R), ne = 1 / 0, ge = []; q--; ) {
          var ve = i[q];
          q && s && (ve = Ut(ve, Yn(s))), ne = Pn(ve.length, ne), X[q] = !p && (s || T >= 120 && ve.length >= 120) ? new Bi(q && ve) : n;
        }
        ve = i[0];
        var ye = -1, Re = X[0];
        e:
          for (; ++ye < T && ge.length < ne; ) {
            var Ue = ve[ye], Ze = s ? s(Ue) : Ue;
            if (Ue = p || Ue !== 0 ? Ue : 0, !(Re ? ro(Re, Ze) : S(ge, Ze, p))) {
              for (q = R; --q; ) {
                var ct = X[q];
                if (!(ct ? ro(ct, Ze) : S(i[q], Ze, p)))
                  continue e;
              }
              Re && Re.push(Ze), ge.push(Ue);
            }
          }
        return ge;
      }
      function I1(i, s, p, S) {
        return Mr(i, function(T, R, q) {
          s(S, p(T), R, q);
        }), S;
      }
      function fo(i, s, p) {
        s = hi(s, i), i = pm(i, s);
        var S = i == null ? i : i[Ir(hr(s))];
        return S == null ? n : Gn(S, i, p);
      }
      function Th(i) {
        return Zt(i) && Mn(i) == ke;
      }
      function B1(i) {
        return Zt(i) && Mn(i) == Xe;
      }
      function F1(i) {
        return Zt(i) && Mn(i) == le;
      }
      function po(i, s, p, S, T) {
        return i === s ? !0 : i == null || s == null || !Zt(i) && !Zt(s) ? i !== i && s !== s : z1(i, s, p, S, po, T);
      }
      function z1(i, s, p, S, T, R) {
        var q = at(i), X = at(s), ne = q ? Ie : kn(i), ge = X ? Ie : kn(s);
        ne = ne == ke ? Pe : ne, ge = ge == ke ? Pe : ge;
        var ve = ne == Pe, ye = ge == Pe, Re = ne == ge;
        if (Re && gi(i)) {
          if (!gi(s))
            return !1;
          q = !0, ve = !1;
        }
        if (Re && !ve)
          return R || (R = new _r()), q || wa(i) ? om(i, s, p, S, T, R) : pS(i, s, ne, p, S, T, R);
        if (!(p & y)) {
          var Ue = ve && Lt.call(i, "__wrapped__"), Ze = ye && Lt.call(s, "__wrapped__");
          if (Ue || Ze) {
            var ct = Ue ? i.value() : i, Qe = Ze ? s.value() : s;
            return R || (R = new _r()), T(ct, Qe, p, S, R);
          }
        }
        return Re ? (R || (R = new _r()), hS(i, s, p, S, T, R)) : !1;
      }
      function W1(i) {
        return Zt(i) && kn(i) == ae;
      }
      function nu(i, s, p, S) {
        var T = p.length, R = T, q = !S;
        if (i == null)
          return !R;
        for (i = Rt(i); T--; ) {
          var X = p[T];
          if (q && X[2] ? X[1] !== i[X[0]] : !(X[0] in i))
            return !1;
        }
        for (; ++T < R; ) {
          X = p[T];
          var ne = X[0], ge = i[ne], ve = X[1];
          if (q && X[2]) {
            if (ge === n && !(ne in i))
              return !1;
          } else {
            var ye = new _r();
            if (S)
              var Re = S(ge, ve, ne, i, s, ye);
            if (!(Re === n ? po(ve, ge, y | E, S, ye) : Re))
              return !1;
          }
        }
        return !0;
      }
      function Dh(i) {
        if (!Gt(i) || AS(i))
          return !1;
        var s = ti(i) ? WE : dt;
        return s.test(Vi(i));
      }
      function V1(i) {
        return Zt(i) && Mn(i) == je;
      }
      function H1(i) {
        return Zt(i) && kn(i) == Le;
      }
      function U1(i) {
        return Zt(i) && al(i.length) && !!Ht[Mn(i)];
      }
      function Nh(i) {
        return typeof i == "function" ? i : i == null ? Kn : typeof i == "object" ? at(i) ? kh(i[0], i[1]) : Ph(i) : Zm(i);
      }
      function ru(i) {
        if (!go(i))
          return jE(i);
        var s = [];
        for (var p in Rt(i))
          Lt.call(i, p) && p != "constructor" && s.push(p);
        return s;
      }
      function q1(i) {
        if (!Gt(i))
          return TS(i);
        var s = go(i), p = [];
        for (var S in i)
          S == "constructor" && (s || !Lt.call(i, S)) || p.push(S);
        return p;
      }
      function iu(i, s) {
        return i < s;
      }
      function Oh(i, s) {
        var p = -1, S = Un(i) ? se(i.length) : [];
        return fi(i, function(T, R, q) {
          S[++p] = s(T, R, q);
        }), S;
      }
      function Ph(i) {
        var s = xu(i);
        return s.length == 1 && s[0][2] ? dm(s[0][0], s[0][1]) : function(p) {
          return p === i || nu(p, i, s);
        };
      }
      function kh(i, s) {
        return Eu(i) && um(s) ? dm(Ir(i), s) : function(p) {
          var S = Pu(p, i);
          return S === n && S === s ? ku(p, i) : po(s, S, y | E);
        };
      }
      function Hs(i, s, p, S, T) {
        i !== s && Qc(s, function(R, q) {
          if (T || (T = new _r()), Gt(R))
            K1(i, s, q, p, Hs, S, T);
          else {
            var X = S ? S(Au(i, q), R, q + "", i, s, T) : n;
            X === n && (X = R), Xc(i, q, X);
          }
        }, qn);
      }
      function K1(i, s, p, S, T, R, q) {
        var X = Au(i, p), ne = Au(s, p), ge = q.get(ne);
        if (ge) {
          Xc(i, p, ge);
          return;
        }
        var ve = R ? R(X, ne, p + "", i, s, q) : n, ye = ve === n;
        if (ye) {
          var Re = at(ne), Ue = !Re && gi(ne), Ze = !Re && !Ue && wa(ne);
          ve = ne, Re || Ue || Ze ? at(X) ? ve = X : tn(X) ? ve = Hn(X) : Ue ? (ye = !1, ve = Uh(ne, !0)) : Ze ? (ye = !1, ve = qh(ne, !0)) : ve = [] : yo(ne) || Hi(ne) ? (ve = X, Hi(X) ? ve = Wm(X) : (!Gt(X) || ti(X)) && (ve = cm(ne))) : ye = !1;
        }
        ye && (q.set(ne, ve), T(ve, ne, S, R, q), q.delete(ne)), Xc(i, p, ve);
      }
      function Lh(i, s) {
        var p = i.length;
        if (p)
          return s += s < 0 ? p : 0, ei(s, p) ? i[s] : n;
      }
      function Rh(i, s, p) {
        s.length ? s = Ut(s, function(R) {
          return at(R) ? function(q) {
            return zi(q, R.length === 1 ? R[0] : R);
          } : R;
        }) : s = [Kn];
        var S = -1;
        s = Ut(s, Yn(Ye()));
        var T = Oh(i, function(R, q, X) {
          var ne = Ut(s, function(ge) {
            return ge(R);
          });
          return { criteria: ne, index: ++S, value: R };
        });
        return xE(T, function(R, q) {
          return aS(R, q, p);
        });
      }
      function j1(i, s) {
        return Mh(i, s, function(p, S) {
          return ku(i, S);
        });
      }
      function Mh(i, s, p) {
        for (var S = -1, T = s.length, R = {}; ++S < T; ) {
          var q = s[S], X = zi(i, q);
          p(X, q) && ho(R, hi(q, i), X);
        }
        return R;
      }
      function G1(i) {
        return function(s) {
          return zi(s, i);
        };
      }
      function au(i, s, p, S) {
        var T = S ? yE : pa, R = -1, q = s.length, X = i;
        for (i === s && (s = Hn(s)), p && (X = Ut(i, Yn(p))); ++R < q; )
          for (var ne = 0, ge = s[R], ve = p ? p(ge) : ge; (ne = T(X, ve, ne, S)) > -1; )
            X !== i && Ls.call(X, ne, 1), Ls.call(i, ne, 1);
        return i;
      }
      function $h(i, s) {
        for (var p = i ? s.length : 0, S = p - 1; p--; ) {
          var T = s[p];
          if (p == S || T !== R) {
            var R = T;
            ei(T) ? Ls.call(i, T, 1) : cu(i, T);
          }
        }
        return i;
      }
      function ou(i, s) {
        return i + $s(gh() * (s - i + 1));
      }
      function Y1(i, s, p, S) {
        for (var T = -1, R = sn(Ms((s - i) / (p || 1)), 0), q = se(R); R--; )
          q[S ? R : ++T] = i, i += p;
        return q;
      }
      function su(i, s) {
        var p = "";
        if (!i || s < 1 || s > re)
          return p;
        do
          s % 2 && (p += i), s = $s(s / 2), s && (i += i);
        while (s);
        return p;
      }
      function ft(i, s) {
        return wu(fm(i, s, Kn), i + "");
      }
      function X1(i) {
        return xh(_a(i));
      }
      function Z1(i, s) {
        var p = _a(i);
        return Js(p, Fi(s, 0, p.length));
      }
      function ho(i, s, p, S) {
        if (!Gt(i))
          return i;
        s = hi(s, i);
        for (var T = -1, R = s.length, q = R - 1, X = i; X != null && ++T < R; ) {
          var ne = Ir(s[T]), ge = p;
          if (ne === "__proto__" || ne === "constructor" || ne === "prototype")
            return i;
          if (T != q) {
            var ve = X[ne];
            ge = S ? S(ve, ne, X) : n, ge === n && (ge = Gt(ve) ? ve : ei(s[T + 1]) ? [] : {});
          }
          co(X, ne, ge), X = X[ne];
        }
        return i;
      }
      var Ih = Is ? function(i, s) {
        return Is.set(i, s), i;
      } : Kn, Q1 = Rs ? function(i, s) {
        return Rs(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ru(s),
          writable: !0
        });
      } : Kn;
      function J1(i) {
        return Js(_a(i));
      }
      function pr(i, s, p) {
        var S = -1, T = i.length;
        s < 0 && (s = -s > T ? 0 : T + s), p = p > T ? T : p, p < 0 && (p += T), T = s > p ? 0 : p - s >>> 0, s >>>= 0;
        for (var R = se(T); ++S < T; )
          R[S] = i[S + s];
        return R;
      }
      function eS(i, s) {
        var p;
        return fi(i, function(S, T, R) {
          return p = s(S, T, R), !p;
        }), !!p;
      }
      function Us(i, s, p) {
        var S = 0, T = i == null ? S : i.length;
        if (typeof s == "number" && s === s && T <= Se) {
          for (; S < T; ) {
            var R = S + T >>> 1, q = i[R];
            q !== null && !Zn(q) && (p ? q <= s : q < s) ? S = R + 1 : T = R;
          }
          return T;
        }
        return lu(i, s, Kn, p);
      }
      function lu(i, s, p, S) {
        var T = 0, R = i == null ? 0 : i.length;
        if (R === 0)
          return 0;
        s = p(s);
        for (var q = s !== s, X = s === null, ne = Zn(s), ge = s === n; T < R; ) {
          var ve = $s((T + R) / 2), ye = p(i[ve]), Re = ye !== n, Ue = ye === null, Ze = ye === ye, ct = Zn(ye);
          if (q)
            var Qe = S || Ze;
          else
            ge ? Qe = Ze && (S || Re) : X ? Qe = Ze && Re && (S || !Ue) : ne ? Qe = Ze && Re && !Ue && (S || !ct) : Ue || ct ? Qe = !1 : Qe = S ? ye <= s : ye < s;
          Qe ? T = ve + 1 : R = ve;
        }
        return Pn(R, oe);
      }
      function Bh(i, s) {
        for (var p = -1, S = i.length, T = 0, R = []; ++p < S; ) {
          var q = i[p], X = s ? s(q) : q;
          if (!p || !Cr(X, ne)) {
            var ne = X;
            R[T++] = q === 0 ? 0 : q;
          }
        }
        return R;
      }
      function Fh(i) {
        return typeof i == "number" ? i : Zn(i) ? te : +i;
      }
      function Xn(i) {
        if (typeof i == "string")
          return i;
        if (at(i))
          return Ut(i, Xn) + "";
        if (Zn(i))
          return vh ? vh.call(i) : "";
        var s = i + "";
        return s == "0" && 1 / i == -K ? "-0" : s;
      }
      function pi(i, s, p) {
        var S = -1, T = As, R = i.length, q = !0, X = [], ne = X;
        if (p)
          q = !1, T = Ic;
        else if (R >= a) {
          var ge = s ? null : dS(i);
          if (ge)
            return _s(ge);
          q = !1, T = ro, ne = new Bi();
        } else
          ne = s ? [] : X;
        e:
          for (; ++S < R; ) {
            var ve = i[S], ye = s ? s(ve) : ve;
            if (ve = p || ve !== 0 ? ve : 0, q && ye === ye) {
              for (var Re = ne.length; Re--; )
                if (ne[Re] === ye)
                  continue e;
              s && ne.push(ye), X.push(ve);
            } else
              T(ne, ye, p) || (ne !== X && ne.push(ye), X.push(ve));
          }
        return X;
      }
      function cu(i, s) {
        return s = hi(s, i), i = pm(i, s), i == null || delete i[Ir(hr(s))];
      }
      function zh(i, s, p, S) {
        return ho(i, s, p(zi(i, s)), S);
      }
      function qs(i, s, p, S) {
        for (var T = i.length, R = S ? T : -1; (S ? R-- : ++R < T) && s(i[R], R, i); )
          ;
        return p ? pr(i, S ? 0 : R, S ? R + 1 : T) : pr(i, S ? R + 1 : 0, S ? T : R);
      }
      function Wh(i, s) {
        var p = i;
        return p instanceof gt && (p = p.value()), Bc(s, function(S, T) {
          return T.func.apply(T.thisArg, ci([S], T.args));
        }, p);
      }
      function uu(i, s, p) {
        var S = i.length;
        if (S < 2)
          return S ? pi(i[0]) : [];
        for (var T = -1, R = se(S); ++T < S; )
          for (var q = i[T], X = -1; ++X < S; )
            X != T && (R[T] = uo(R[T] || q, i[X], s, p));
        return pi(_n(R, 1), s, p);
      }
      function Vh(i, s, p) {
        for (var S = -1, T = i.length, R = s.length, q = {}; ++S < T; ) {
          var X = S < R ? s[S] : n;
          p(q, i[S], X);
        }
        return q;
      }
      function du(i) {
        return tn(i) ? i : [];
      }
      function fu(i) {
        return typeof i == "function" ? i : Kn;
      }
      function hi(i, s) {
        return at(i) ? i : Eu(i, s) ? [i] : vm(Ct(i));
      }
      var tS = ft;
      function mi(i, s, p) {
        var S = i.length;
        return p = p === n ? S : p, !s && p >= S ? i : pr(i, s, p);
      }
      var Hh = VE || function(i) {
        return wn.clearTimeout(i);
      };
      function Uh(i, s) {
        if (s)
          return i.slice();
        var p = i.length, S = dh ? dh(p) : new i.constructor(p);
        return i.copy(S), S;
      }
      function pu(i) {
        var s = new i.constructor(i.byteLength);
        return new Ps(s).set(new Ps(i)), s;
      }
      function nS(i, s) {
        var p = s ? pu(i.buffer) : i.buffer;
        return new i.constructor(p, i.byteOffset, i.byteLength);
      }
      function rS(i) {
        var s = new i.constructor(i.source, Nn.exec(i));
        return s.lastIndex = i.lastIndex, s;
      }
      function iS(i) {
        return lo ? Rt(lo.call(i)) : {};
      }
      function qh(i, s) {
        var p = s ? pu(i.buffer) : i.buffer;
        return new i.constructor(p, i.byteOffset, i.length);
      }
      function Kh(i, s) {
        if (i !== s) {
          var p = i !== n, S = i === null, T = i === i, R = Zn(i), q = s !== n, X = s === null, ne = s === s, ge = Zn(s);
          if (!X && !ge && !R && i > s || R && q && ne && !X && !ge || S && q && ne || !p && ne || !T)
            return 1;
          if (!S && !R && !ge && i < s || ge && p && T && !S && !R || X && p && T || !q && T || !ne)
            return -1;
        }
        return 0;
      }
      function aS(i, s, p) {
        for (var S = -1, T = i.criteria, R = s.criteria, q = T.length, X = p.length; ++S < q; ) {
          var ne = Kh(T[S], R[S]);
          if (ne) {
            if (S >= X)
              return ne;
            var ge = p[S];
            return ne * (ge == "desc" ? -1 : 1);
          }
        }
        return i.index - s.index;
      }
      function jh(i, s, p, S) {
        for (var T = -1, R = i.length, q = p.length, X = -1, ne = s.length, ge = sn(R - q, 0), ve = se(ne + ge), ye = !S; ++X < ne; )
          ve[X] = s[X];
        for (; ++T < q; )
          (ye || T < R) && (ve[p[T]] = i[T]);
        for (; ge--; )
          ve[X++] = i[T++];
        return ve;
      }
      function Gh(i, s, p, S) {
        for (var T = -1, R = i.length, q = -1, X = p.length, ne = -1, ge = s.length, ve = sn(R - X, 0), ye = se(ve + ge), Re = !S; ++T < ve; )
          ye[T] = i[T];
        for (var Ue = T; ++ne < ge; )
          ye[Ue + ne] = s[ne];
        for (; ++q < X; )
          (Re || T < R) && (ye[Ue + p[q]] = i[T++]);
        return ye;
      }
      function Hn(i, s) {
        var p = -1, S = i.length;
        for (s || (s = se(S)); ++p < S; )
          s[p] = i[p];
        return s;
      }
      function $r(i, s, p, S) {
        var T = !p;
        p || (p = {});
        for (var R = -1, q = s.length; ++R < q; ) {
          var X = s[R], ne = S ? S(p[X], i[X], X, p, i) : n;
          ne === n && (ne = i[X]), T ? Zr(p, X, ne) : co(p, X, ne);
        }
        return p;
      }
      function oS(i, s) {
        return $r(i, bu(i), s);
      }
      function sS(i, s) {
        return $r(i, sm(i), s);
      }
      function Ks(i, s) {
        return function(p, S) {
          var T = at(p) ? fE : N1, R = s ? s() : {};
          return T(p, i, Ye(S, 2), R);
        };
      }
      function Ea(i) {
        return ft(function(s, p) {
          var S = -1, T = p.length, R = T > 1 ? p[T - 1] : n, q = T > 2 ? p[2] : n;
          for (R = i.length > 3 && typeof R == "function" ? (T--, R) : n, q && $n(p[0], p[1], q) && (R = T < 3 ? n : R, T = 1), s = Rt(s); ++S < T; ) {
            var X = p[S];
            X && i(s, X, S, R);
          }
          return s;
        });
      }
      function Yh(i, s) {
        return function(p, S) {
          if (p == null)
            return p;
          if (!Un(p))
            return i(p, S);
          for (var T = p.length, R = s ? T : -1, q = Rt(p); (s ? R-- : ++R < T) && S(q[R], R, q) !== !1; )
            ;
          return p;
        };
      }
      function Xh(i) {
        return function(s, p, S) {
          for (var T = -1, R = Rt(s), q = S(s), X = q.length; X--; ) {
            var ne = q[i ? X : ++T];
            if (p(R[ne], ne, R) === !1)
              break;
          }
          return s;
        };
      }
      function lS(i, s, p) {
        var S = s & b, T = mo(i);
        function R() {
          var q = this && this !== wn && this instanceof R ? T : i;
          return q.apply(S ? p : this, arguments);
        }
        return R;
      }
      function Zh(i) {
        return function(s) {
          s = Ct(s);
          var p = ha(s) ? wr(s) : n, S = p ? p[0] : s.charAt(0), T = p ? mi(p, 1).join("") : s.slice(1);
          return S[i]() + T;
        };
      }
      function Sa(i) {
        return function(s) {
          return Bc(Ym(Gm(s).replace(Q0, "")), i, "");
        };
      }
      function mo(i) {
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return new i();
            case 1:
              return new i(s[0]);
            case 2:
              return new i(s[0], s[1]);
            case 3:
              return new i(s[0], s[1], s[2]);
            case 4:
              return new i(s[0], s[1], s[2], s[3]);
            case 5:
              return new i(s[0], s[1], s[2], s[3], s[4]);
            case 6:
              return new i(s[0], s[1], s[2], s[3], s[4], s[5]);
            case 7:
              return new i(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
          }
          var p = ba(i.prototype), S = i.apply(p, s);
          return Gt(S) ? S : p;
        };
      }
      function cS(i, s, p) {
        var S = mo(i);
        function T() {
          for (var R = arguments.length, q = se(R), X = R, ne = Aa(T); X--; )
            q[X] = arguments[X];
          var ge = R < 3 && q[0] !== ne && q[R - 1] !== ne ? [] : ui(q, ne);
          if (R -= ge.length, R < p)
            return nm(
              i,
              s,
              js,
              T.placeholder,
              n,
              q,
              ge,
              n,
              n,
              p - R
            );
          var ve = this && this !== wn && this instanceof T ? S : i;
          return Gn(ve, this, q);
        }
        return T;
      }
      function Qh(i) {
        return function(s, p, S) {
          var T = Rt(s);
          if (!Un(s)) {
            var R = Ye(p, 3);
            s = mn(s), p = function(X) {
              return R(T[X], X, T);
            };
          }
          var q = i(s, p, S);
          return q > -1 ? T[R ? s[q] : q] : n;
        };
      }
      function Jh(i) {
        return Jr(function(s) {
          var p = s.length, S = p, T = dr.prototype.thru;
          for (i && s.reverse(); S--; ) {
            var R = s[S];
            if (typeof R != "function")
              throw new ur(u);
            if (T && !q && Zs(R) == "wrapper")
              var q = new dr([], !0);
          }
          for (S = q ? S : p; ++S < p; ) {
            R = s[S];
            var X = Zs(R), ne = X == "wrapper" ? yu(R) : n;
            ne && Su(ne[0]) && ne[1] == ($ | A | _ | O) && !ne[4].length && ne[9] == 1 ? q = q[Zs(ne[0])].apply(q, ne[3]) : q = R.length == 1 && Su(R) ? q[X]() : q.thru(R);
          }
          return function() {
            var ge = arguments, ve = ge[0];
            if (q && ge.length == 1 && at(ve))
              return q.plant(ve).value();
            for (var ye = 0, Re = p ? s[ye].apply(this, ge) : ve; ++ye < p; )
              Re = s[ye].call(this, Re);
            return Re;
          };
        });
      }
      function js(i, s, p, S, T, R, q, X, ne, ge) {
        var ve = s & $, ye = s & b, Re = s & x, Ue = s & (A | D), Ze = s & I, ct = Re ? n : mo(i);
        function Qe() {
          for (var mt = arguments.length, xt = se(mt), Qn = mt; Qn--; )
            xt[Qn] = arguments[Qn];
          if (Ue)
            var In = Aa(Qe), Jn = EE(xt, In);
          if (S && (xt = jh(xt, S, T, Ue)), R && (xt = Gh(xt, R, q, Ue)), mt -= Jn, Ue && mt < ge) {
            var nn = ui(xt, In);
            return nm(
              i,
              s,
              js,
              Qe.placeholder,
              p,
              xt,
              nn,
              X,
              ne,
              ge - mt
            );
          }
          var Tr = ye ? p : this, ri = Re ? Tr[i] : i;
          return mt = xt.length, X ? xt = NS(xt, X) : Ze && mt > 1 && xt.reverse(), ve && ne < mt && (xt.length = ne), this && this !== wn && this instanceof Qe && (ri = ct || mo(ri)), ri.apply(Tr, xt);
        }
        return Qe;
      }
      function em(i, s) {
        return function(p, S) {
          return I1(p, i, s(S), {});
        };
      }
      function Gs(i, s) {
        return function(p, S) {
          var T;
          if (p === n && S === n)
            return s;
          if (p !== n && (T = p), S !== n) {
            if (T === n)
              return S;
            typeof p == "string" || typeof S == "string" ? (p = Xn(p), S = Xn(S)) : (p = Fh(p), S = Fh(S)), T = i(p, S);
          }
          return T;
        };
      }
      function hu(i) {
        return Jr(function(s) {
          return s = Ut(s, Yn(Ye())), ft(function(p) {
            var S = this;
            return i(s, function(T) {
              return Gn(T, S, p);
            });
          });
        });
      }
      function Ys(i, s) {
        s = s === n ? " " : Xn(s);
        var p = s.length;
        if (p < 2)
          return p ? su(s, i) : s;
        var S = su(s, Ms(i / ma(s)));
        return ha(s) ? mi(wr(S), 0, i).join("") : S.slice(0, i);
      }
      function uS(i, s, p, S) {
        var T = s & b, R = mo(i);
        function q() {
          for (var X = -1, ne = arguments.length, ge = -1, ve = S.length, ye = se(ve + ne), Re = this && this !== wn && this instanceof q ? R : i; ++ge < ve; )
            ye[ge] = S[ge];
          for (; ne--; )
            ye[ge++] = arguments[++X];
          return Gn(Re, T ? p : this, ye);
        }
        return q;
      }
      function tm(i) {
        return function(s, p, S) {
          return S && typeof S != "number" && $n(s, p, S) && (p = S = n), s = ni(s), p === n ? (p = s, s = 0) : p = ni(p), S = S === n ? s < p ? 1 : -1 : ni(S), Y1(s, p, S, i);
        };
      }
      function Xs(i) {
        return function(s, p) {
          return typeof s == "string" && typeof p == "string" || (s = mr(s), p = mr(p)), i(s, p);
        };
      }
      function nm(i, s, p, S, T, R, q, X, ne, ge) {
        var ve = s & A, ye = ve ? q : n, Re = ve ? n : q, Ue = ve ? R : n, Ze = ve ? n : R;
        s |= ve ? _ : C, s &= ~(ve ? C : _), s & w || (s &= ~(b | x));
        var ct = [
          i,
          s,
          T,
          Ue,
          ye,
          Ze,
          Re,
          X,
          ne,
          ge
        ], Qe = p.apply(n, ct);
        return Su(i) && hm(Qe, ct), Qe.placeholder = S, mm(Qe, i, s);
      }
      function mu(i) {
        var s = on[i];
        return function(p, S) {
          if (p = mr(p), S = S == null ? 0 : Pn(st(S), 292), S && mh(p)) {
            var T = (Ct(p) + "e").split("e"), R = s(T[0] + "e" + (+T[1] + S));
            return T = (Ct(R) + "e").split("e"), +(T[0] + "e" + (+T[1] - S));
          }
          return s(p);
        };
      }
      var dS = ya && 1 / _s(new ya([, -0]))[1] == K ? function(i) {
        return new ya(i);
      } : Iu;
      function rm(i) {
        return function(s) {
          var p = kn(s);
          return p == ae ? qc(s) : p == Le ? DE(s) : bE(s, i(s));
        };
      }
      function Qr(i, s, p, S, T, R, q, X) {
        var ne = s & x;
        if (!ne && typeof i != "function")
          throw new ur(u);
        var ge = S ? S.length : 0;
        if (ge || (s &= ~(_ | C), S = T = n), q = q === n ? q : sn(st(q), 0), X = X === n ? X : st(X), ge -= T ? T.length : 0, s & C) {
          var ve = S, ye = T;
          S = T = n;
        }
        var Re = ne ? n : yu(i), Ue = [
          i,
          s,
          p,
          S,
          T,
          ve,
          ye,
          R,
          q,
          X
        ];
        if (Re && CS(Ue, Re), i = Ue[0], s = Ue[1], p = Ue[2], S = Ue[3], T = Ue[4], X = Ue[9] = Ue[9] === n ? ne ? 0 : i.length : sn(Ue[9] - ge, 0), !X && s & (A | D) && (s &= ~(A | D)), !s || s == b)
          var Ze = lS(i, s, p);
        else
          s == A || s == D ? Ze = cS(i, s, X) : (s == _ || s == (b | _)) && !T.length ? Ze = uS(i, s, p, S) : Ze = js.apply(n, Ue);
        var ct = Re ? Ih : hm;
        return mm(ct(Ze, Ue), i, s);
      }
      function im(i, s, p, S) {
        return i === n || Cr(i, va[p]) && !Lt.call(S, p) ? s : i;
      }
      function am(i, s, p, S, T, R) {
        return Gt(i) && Gt(s) && (R.set(s, i), Hs(i, s, n, am, R), R.delete(s)), i;
      }
      function fS(i) {
        return yo(i) ? n : i;
      }
      function om(i, s, p, S, T, R) {
        var q = p & y, X = i.length, ne = s.length;
        if (X != ne && !(q && ne > X))
          return !1;
        var ge = R.get(i), ve = R.get(s);
        if (ge && ve)
          return ge == s && ve == i;
        var ye = -1, Re = !0, Ue = p & E ? new Bi() : n;
        for (R.set(i, s), R.set(s, i); ++ye < X; ) {
          var Ze = i[ye], ct = s[ye];
          if (S)
            var Qe = q ? S(ct, Ze, ye, s, i, R) : S(Ze, ct, ye, i, s, R);
          if (Qe !== n) {
            if (Qe)
              continue;
            Re = !1;
            break;
          }
          if (Ue) {
            if (!Fc(s, function(mt, xt) {
              if (!ro(Ue, xt) && (Ze === mt || T(Ze, mt, p, S, R)))
                return Ue.push(xt);
            })) {
              Re = !1;
              break;
            }
          } else if (!(Ze === ct || T(Ze, ct, p, S, R))) {
            Re = !1;
            break;
          }
        }
        return R.delete(i), R.delete(s), Re;
      }
      function pS(i, s, p, S, T, R, q) {
        switch (p) {
          case Y:
            if (i.byteLength != s.byteLength || i.byteOffset != s.byteOffset)
              return !1;
            i = i.buffer, s = s.buffer;
          case Xe:
            return !(i.byteLength != s.byteLength || !R(new Ps(i), new Ps(s)));
          case De:
          case le:
          case Ne:
            return Cr(+i, +s);
          case me:
            return i.name == s.name && i.message == s.message;
          case je:
          case Ae:
            return i == s + "";
          case ae:
            var X = qc;
          case Le:
            var ne = S & y;
            if (X || (X = _s), i.size != s.size && !ne)
              return !1;
            var ge = q.get(i);
            if (ge)
              return ge == s;
            S |= E, q.set(i, s);
            var ve = om(X(i), X(s), S, T, R, q);
            return q.delete(i), ve;
          case xe:
            if (lo)
              return lo.call(i) == lo.call(s);
        }
        return !1;
      }
      function hS(i, s, p, S, T, R) {
        var q = p & y, X = gu(i), ne = X.length, ge = gu(s), ve = ge.length;
        if (ne != ve && !q)
          return !1;
        for (var ye = ne; ye--; ) {
          var Re = X[ye];
          if (!(q ? Re in s : Lt.call(s, Re)))
            return !1;
        }
        var Ue = R.get(i), Ze = R.get(s);
        if (Ue && Ze)
          return Ue == s && Ze == i;
        var ct = !0;
        R.set(i, s), R.set(s, i);
        for (var Qe = q; ++ye < ne; ) {
          Re = X[ye];
          var mt = i[Re], xt = s[Re];
          if (S)
            var Qn = q ? S(xt, mt, Re, s, i, R) : S(mt, xt, Re, i, s, R);
          if (!(Qn === n ? mt === xt || T(mt, xt, p, S, R) : Qn)) {
            ct = !1;
            break;
          }
          Qe || (Qe = Re == "constructor");
        }
        if (ct && !Qe) {
          var In = i.constructor, Jn = s.constructor;
          In != Jn && "constructor" in i && "constructor" in s && !(typeof In == "function" && In instanceof In && typeof Jn == "function" && Jn instanceof Jn) && (ct = !1);
        }
        return R.delete(i), R.delete(s), ct;
      }
      function Jr(i) {
        return wu(fm(i, n, Em), i + "");
      }
      function gu(i) {
        return Ch(i, mn, bu);
      }
      function vu(i) {
        return Ch(i, qn, sm);
      }
      var yu = Is ? function(i) {
        return Is.get(i);
      } : Iu;
      function Zs(i) {
        for (var s = i.name + "", p = xa[s], S = Lt.call(xa, s) ? p.length : 0; S--; ) {
          var T = p[S], R = T.func;
          if (R == null || R == i)
            return T.name;
        }
        return s;
      }
      function Aa(i) {
        var s = Lt.call(P, "placeholder") ? P : i;
        return s.placeholder;
      }
      function Ye() {
        var i = P.iteratee || Mu;
        return i = i === Mu ? Nh : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function Qs(i, s) {
        var p = i.__data__;
        return SS(s) ? p[typeof s == "string" ? "string" : "hash"] : p.map;
      }
      function xu(i) {
        for (var s = mn(i), p = s.length; p--; ) {
          var S = s[p], T = i[S];
          s[p] = [S, T, um(T)];
        }
        return s;
      }
      function Wi(i, s) {
        var p = _E(i, s);
        return Dh(p) ? p : n;
      }
      function mS(i) {
        var s = Lt.call(i, $i), p = i[$i];
        try {
          i[$i] = n;
          var S = !0;
        } catch {
        }
        var T = Ns.call(i);
        return S && (s ? i[$i] = p : delete i[$i]), T;
      }
      var bu = jc ? function(i) {
        return i == null ? [] : (i = Rt(i), li(jc(i), function(s) {
          return ph.call(i, s);
        }));
      } : Bu, sm = jc ? function(i) {
        for (var s = []; i; )
          ci(s, bu(i)), i = ks(i);
        return s;
      } : Bu, kn = Mn;
      (Gc && kn(new Gc(new ArrayBuffer(1))) != Y || ao && kn(new ao()) != ae || Yc && kn(Yc.resolve()) != nt || ya && kn(new ya()) != Le || oo && kn(new oo()) != we) && (kn = function(i) {
        var s = Mn(i), p = s == Pe ? i.constructor : n, S = p ? Vi(p) : "";
        if (S)
          switch (S) {
            case ZE:
              return Y;
            case QE:
              return ae;
            case JE:
              return nt;
            case e1:
              return Le;
            case t1:
              return we;
          }
        return s;
      });
      function gS(i, s, p) {
        for (var S = -1, T = p.length; ++S < T; ) {
          var R = p[S], q = R.size;
          switch (R.type) {
            case "drop":
              i += q;
              break;
            case "dropRight":
              s -= q;
              break;
            case "take":
              s = Pn(s, i + q);
              break;
            case "takeRight":
              i = sn(i, s - q);
              break;
          }
        }
        return { start: i, end: s };
      }
      function vS(i) {
        var s = i.match($e);
        return s ? s[1].split(Be) : [];
      }
      function lm(i, s, p) {
        s = hi(s, i);
        for (var S = -1, T = s.length, R = !1; ++S < T; ) {
          var q = Ir(s[S]);
          if (!(R = i != null && p(i, q)))
            break;
          i = i[q];
        }
        return R || ++S != T ? R : (T = i == null ? 0 : i.length, !!T && al(T) && ei(q, T) && (at(i) || Hi(i)));
      }
      function yS(i) {
        var s = i.length, p = new i.constructor(s);
        return s && typeof i[0] == "string" && Lt.call(i, "index") && (p.index = i.index, p.input = i.input), p;
      }
      function cm(i) {
        return typeof i.constructor == "function" && !go(i) ? ba(ks(i)) : {};
      }
      function xS(i, s, p) {
        var S = i.constructor;
        switch (s) {
          case Xe:
            return pu(i);
          case De:
          case le:
            return new S(+i);
          case Y:
            return nS(i, p);
          case tt:
          case zt:
          case Kt:
          case Wt:
          case Qt:
          case jt:
          case $t:
          case fn:
          case jn:
            return qh(i, p);
          case ae:
            return new S();
          case Ne:
          case Ae:
            return new S(i);
          case je:
            return rS(i);
          case Le:
            return new S();
          case xe:
            return iS(i);
        }
      }
      function bS(i, s) {
        var p = s.length;
        if (!p)
          return i;
        var S = p - 1;
        return s[S] = (p > 1 ? "& " : "") + s[S], s = s.join(p > 2 ? ", " : " "), i.replace(_e, `{
/* [wrapped with ` + s + `] */
`);
      }
      function ES(i) {
        return at(i) || Hi(i) || !!(hh && i && i[hh]);
      }
      function ei(i, s) {
        var p = typeof i;
        return s = s ?? re, !!s && (p == "number" || p != "symbol" && Vt.test(i)) && i > -1 && i % 1 == 0 && i < s;
      }
      function $n(i, s, p) {
        if (!Gt(p))
          return !1;
        var S = typeof s;
        return (S == "number" ? Un(p) && ei(s, p.length) : S == "string" && s in p) ? Cr(p[s], i) : !1;
      }
      function Eu(i, s) {
        if (at(i))
          return !1;
        var p = typeof i;
        return p == "number" || p == "symbol" || p == "boolean" || i == null || Zn(i) ? !0 : rn.test(i) || !Ve.test(i) || s != null && i in Rt(s);
      }
      function SS(i) {
        var s = typeof i;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? i !== "__proto__" : i === null;
      }
      function Su(i) {
        var s = Zs(i), p = P[s];
        if (typeof p != "function" || !(s in gt.prototype))
          return !1;
        if (i === p)
          return !0;
        var S = yu(p);
        return !!S && i === S[0];
      }
      function AS(i) {
        return !!uh && uh in i;
      }
      var wS = Ts ? ti : Fu;
      function go(i) {
        var s = i && i.constructor, p = typeof s == "function" && s.prototype || va;
        return i === p;
      }
      function um(i) {
        return i === i && !Gt(i);
      }
      function dm(i, s) {
        return function(p) {
          return p == null ? !1 : p[i] === s && (s !== n || i in Rt(p));
        };
      }
      function _S(i) {
        var s = rl(i, function(S) {
          return p.size === f && p.clear(), S;
        }), p = s.cache;
        return s;
      }
      function CS(i, s) {
        var p = i[1], S = s[1], T = p | S, R = T < (b | x | $), q = S == $ && p == A || S == $ && p == O && i[7].length <= s[8] || S == ($ | O) && s[7].length <= s[8] && p == A;
        if (!(R || q))
          return i;
        S & b && (i[2] = s[2], T |= p & b ? 0 : w);
        var X = s[3];
        if (X) {
          var ne = i[3];
          i[3] = ne ? jh(ne, X, s[4]) : X, i[4] = ne ? ui(i[3], h) : s[4];
        }
        return X = s[5], X && (ne = i[5], i[5] = ne ? Gh(ne, X, s[6]) : X, i[6] = ne ? ui(i[5], h) : s[6]), X = s[7], X && (i[7] = X), S & $ && (i[8] = i[8] == null ? s[8] : Pn(i[8], s[8])), i[9] == null && (i[9] = s[9]), i[0] = s[0], i[1] = T, i;
      }
      function TS(i) {
        var s = [];
        if (i != null)
          for (var p in Rt(i))
            s.push(p);
        return s;
      }
      function DS(i) {
        return Ns.call(i);
      }
      function fm(i, s, p) {
        return s = sn(s === n ? i.length - 1 : s, 0), function() {
          for (var S = arguments, T = -1, R = sn(S.length - s, 0), q = se(R); ++T < R; )
            q[T] = S[s + T];
          T = -1;
          for (var X = se(s + 1); ++T < s; )
            X[T] = S[T];
          return X[s] = p(q), Gn(i, this, X);
        };
      }
      function pm(i, s) {
        return s.length < 2 ? i : zi(i, pr(s, 0, -1));
      }
      function NS(i, s) {
        for (var p = i.length, S = Pn(s.length, p), T = Hn(i); S--; ) {
          var R = s[S];
          i[S] = ei(R, p) ? T[R] : n;
        }
        return i;
      }
      function Au(i, s) {
        if (!(s === "constructor" && typeof i[s] == "function") && s != "__proto__")
          return i[s];
      }
      var hm = gm(Ih), vo = UE || function(i, s) {
        return wn.setTimeout(i, s);
      }, wu = gm(Q1);
      function mm(i, s, p) {
        var S = s + "";
        return wu(i, bS(S, OS(vS(S), p)));
      }
      function gm(i) {
        var s = 0, p = 0;
        return function() {
          var S = GE(), T = z - (S - p);
          if (p = S, T > 0) {
            if (++s >= N)
              return arguments[0];
          } else
            s = 0;
          return i.apply(n, arguments);
        };
      }
      function Js(i, s) {
        var p = -1, S = i.length, T = S - 1;
        for (s = s === n ? S : s; ++p < s; ) {
          var R = ou(p, T), q = i[R];
          i[R] = i[p], i[p] = q;
        }
        return i.length = s, i;
      }
      var vm = _S(function(i) {
        var s = [];
        return i.charCodeAt(0) === 46 && s.push(""), i.replace(xn, function(p, S, T, R) {
          s.push(T ? R.replace(Je, "$1") : S || p);
        }), s;
      });
      function Ir(i) {
        if (typeof i == "string" || Zn(i))
          return i;
        var s = i + "";
        return s == "0" && 1 / i == -K ? "-0" : s;
      }
      function Vi(i) {
        if (i != null) {
          try {
            return Ds.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function OS(i, s) {
        return cr(Te, function(p) {
          var S = "_." + p[0];
          s & p[1] && !As(i, S) && i.push(S);
        }), i.sort();
      }
      function ym(i) {
        if (i instanceof gt)
          return i.clone();
        var s = new dr(i.__wrapped__, i.__chain__);
        return s.__actions__ = Hn(i.__actions__), s.__index__ = i.__index__, s.__values__ = i.__values__, s;
      }
      function PS(i, s, p) {
        (p ? $n(i, s, p) : s === n) ? s = 1 : s = sn(st(s), 0);
        var S = i == null ? 0 : i.length;
        if (!S || s < 1)
          return [];
        for (var T = 0, R = 0, q = se(Ms(S / s)); T < S; )
          q[R++] = pr(i, T, T += s);
        return q;
      }
      function kS(i) {
        for (var s = -1, p = i == null ? 0 : i.length, S = 0, T = []; ++s < p; ) {
          var R = i[s];
          R && (T[S++] = R);
        }
        return T;
      }
      function LS() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var s = se(i - 1), p = arguments[0], S = i; S--; )
          s[S - 1] = arguments[S];
        return ci(at(p) ? Hn(p) : [p], _n(s, 1));
      }
      var RS = ft(function(i, s) {
        return tn(i) ? uo(i, _n(s, 1, tn, !0)) : [];
      }), MS = ft(function(i, s) {
        var p = hr(s);
        return tn(p) && (p = n), tn(i) ? uo(i, _n(s, 1, tn, !0), Ye(p, 2)) : [];
      }), $S = ft(function(i, s) {
        var p = hr(s);
        return tn(p) && (p = n), tn(i) ? uo(i, _n(s, 1, tn, !0), n, p) : [];
      });
      function IS(i, s, p) {
        var S = i == null ? 0 : i.length;
        return S ? (s = p || s === n ? 1 : st(s), pr(i, s < 0 ? 0 : s, S)) : [];
      }
      function BS(i, s, p) {
        var S = i == null ? 0 : i.length;
        return S ? (s = p || s === n ? 1 : st(s), s = S - s, pr(i, 0, s < 0 ? 0 : s)) : [];
      }
      function FS(i, s) {
        return i && i.length ? qs(i, Ye(s, 3), !0, !0) : [];
      }
      function zS(i, s) {
        return i && i.length ? qs(i, Ye(s, 3), !0) : [];
      }
      function WS(i, s, p, S) {
        var T = i == null ? 0 : i.length;
        return T ? (p && typeof p != "number" && $n(i, s, p) && (p = 0, S = T), L1(i, s, p, S)) : [];
      }
      function xm(i, s, p) {
        var S = i == null ? 0 : i.length;
        if (!S)
          return -1;
        var T = p == null ? 0 : st(p);
        return T < 0 && (T = sn(S + T, 0)), ws(i, Ye(s, 3), T);
      }
      function bm(i, s, p) {
        var S = i == null ? 0 : i.length;
        if (!S)
          return -1;
        var T = S - 1;
        return p !== n && (T = st(p), T = p < 0 ? sn(S + T, 0) : Pn(T, S - 1)), ws(i, Ye(s, 3), T, !0);
      }
      function Em(i) {
        var s = i == null ? 0 : i.length;
        return s ? _n(i, 1) : [];
      }
      function VS(i) {
        var s = i == null ? 0 : i.length;
        return s ? _n(i, K) : [];
      }
      function HS(i, s) {
        var p = i == null ? 0 : i.length;
        return p ? (s = s === n ? 1 : st(s), _n(i, s)) : [];
      }
      function US(i) {
        for (var s = -1, p = i == null ? 0 : i.length, S = {}; ++s < p; ) {
          var T = i[s];
          S[T[0]] = T[1];
        }
        return S;
      }
      function Sm(i) {
        return i && i.length ? i[0] : n;
      }
      function qS(i, s, p) {
        var S = i == null ? 0 : i.length;
        if (!S)
          return -1;
        var T = p == null ? 0 : st(p);
        return T < 0 && (T = sn(S + T, 0)), pa(i, s, T);
      }
      function KS(i) {
        var s = i == null ? 0 : i.length;
        return s ? pr(i, 0, -1) : [];
      }
      var jS = ft(function(i) {
        var s = Ut(i, du);
        return s.length && s[0] === i[0] ? tu(s) : [];
      }), GS = ft(function(i) {
        var s = hr(i), p = Ut(i, du);
        return s === hr(p) ? s = n : p.pop(), p.length && p[0] === i[0] ? tu(p, Ye(s, 2)) : [];
      }), YS = ft(function(i) {
        var s = hr(i), p = Ut(i, du);
        return s = typeof s == "function" ? s : n, s && p.pop(), p.length && p[0] === i[0] ? tu(p, n, s) : [];
      });
      function XS(i, s) {
        return i == null ? "" : KE.call(i, s);
      }
      function hr(i) {
        var s = i == null ? 0 : i.length;
        return s ? i[s - 1] : n;
      }
      function ZS(i, s, p) {
        var S = i == null ? 0 : i.length;
        if (!S)
          return -1;
        var T = S;
        return p !== n && (T = st(p), T = T < 0 ? sn(S + T, 0) : Pn(T, S - 1)), s === s ? OE(i, s, T) : ws(i, nh, T, !0);
      }
      function QS(i, s) {
        return i && i.length ? Lh(i, st(s)) : n;
      }
      var JS = ft(Am);
      function Am(i, s) {
        return i && i.length && s && s.length ? au(i, s) : i;
      }
      function eA(i, s, p) {
        return i && i.length && s && s.length ? au(i, s, Ye(p, 2)) : i;
      }
      function tA(i, s, p) {
        return i && i.length && s && s.length ? au(i, s, n, p) : i;
      }
      var nA = Jr(function(i, s) {
        var p = i == null ? 0 : i.length, S = Zc(i, s);
        return $h(i, Ut(s, function(T) {
          return ei(T, p) ? +T : T;
        }).sort(Kh)), S;
      });
      function rA(i, s) {
        var p = [];
        if (!(i && i.length))
          return p;
        var S = -1, T = [], R = i.length;
        for (s = Ye(s, 3); ++S < R; ) {
          var q = i[S];
          s(q, S, i) && (p.push(q), T.push(S));
        }
        return $h(i, T), p;
      }
      function _u(i) {
        return i == null ? i : XE.call(i);
      }
      function iA(i, s, p) {
        var S = i == null ? 0 : i.length;
        return S ? (p && typeof p != "number" && $n(i, s, p) ? (s = 0, p = S) : (s = s == null ? 0 : st(s), p = p === n ? S : st(p)), pr(i, s, p)) : [];
      }
      function aA(i, s) {
        return Us(i, s);
      }
      function oA(i, s, p) {
        return lu(i, s, Ye(p, 2));
      }
      function sA(i, s) {
        var p = i == null ? 0 : i.length;
        if (p) {
          var S = Us(i, s);
          if (S < p && Cr(i[S], s))
            return S;
        }
        return -1;
      }
      function lA(i, s) {
        return Us(i, s, !0);
      }
      function cA(i, s, p) {
        return lu(i, s, Ye(p, 2), !0);
      }
      function uA(i, s) {
        var p = i == null ? 0 : i.length;
        if (p) {
          var S = Us(i, s, !0) - 1;
          if (Cr(i[S], s))
            return S;
        }
        return -1;
      }
      function dA(i) {
        return i && i.length ? Bh(i) : [];
      }
      function fA(i, s) {
        return i && i.length ? Bh(i, Ye(s, 2)) : [];
      }
      function pA(i) {
        var s = i == null ? 0 : i.length;
        return s ? pr(i, 1, s) : [];
      }
      function hA(i, s, p) {
        return i && i.length ? (s = p || s === n ? 1 : st(s), pr(i, 0, s < 0 ? 0 : s)) : [];
      }
      function mA(i, s, p) {
        var S = i == null ? 0 : i.length;
        return S ? (s = p || s === n ? 1 : st(s), s = S - s, pr(i, s < 0 ? 0 : s, S)) : [];
      }
      function gA(i, s) {
        return i && i.length ? qs(i, Ye(s, 3), !1, !0) : [];
      }
      function vA(i, s) {
        return i && i.length ? qs(i, Ye(s, 3)) : [];
      }
      var yA = ft(function(i) {
        return pi(_n(i, 1, tn, !0));
      }), xA = ft(function(i) {
        var s = hr(i);
        return tn(s) && (s = n), pi(_n(i, 1, tn, !0), Ye(s, 2));
      }), bA = ft(function(i) {
        var s = hr(i);
        return s = typeof s == "function" ? s : n, pi(_n(i, 1, tn, !0), n, s);
      });
      function EA(i) {
        return i && i.length ? pi(i) : [];
      }
      function SA(i, s) {
        return i && i.length ? pi(i, Ye(s, 2)) : [];
      }
      function AA(i, s) {
        return s = typeof s == "function" ? s : n, i && i.length ? pi(i, n, s) : [];
      }
      function Cu(i) {
        if (!(i && i.length))
          return [];
        var s = 0;
        return i = li(i, function(p) {
          if (tn(p))
            return s = sn(p.length, s), !0;
        }), Hc(s, function(p) {
          return Ut(i, zc(p));
        });
      }
      function wm(i, s) {
        if (!(i && i.length))
          return [];
        var p = Cu(i);
        return s == null ? p : Ut(p, function(S) {
          return Gn(s, n, S);
        });
      }
      var wA = ft(function(i, s) {
        return tn(i) ? uo(i, s) : [];
      }), _A = ft(function(i) {
        return uu(li(i, tn));
      }), CA = ft(function(i) {
        var s = hr(i);
        return tn(s) && (s = n), uu(li(i, tn), Ye(s, 2));
      }), TA = ft(function(i) {
        var s = hr(i);
        return s = typeof s == "function" ? s : n, uu(li(i, tn), n, s);
      }), DA = ft(Cu);
      function NA(i, s) {
        return Vh(i || [], s || [], co);
      }
      function OA(i, s) {
        return Vh(i || [], s || [], ho);
      }
      var PA = ft(function(i) {
        var s = i.length, p = s > 1 ? i[s - 1] : n;
        return p = typeof p == "function" ? (i.pop(), p) : n, wm(i, p);
      });
      function _m(i) {
        var s = P(i);
        return s.__chain__ = !0, s;
      }
      function kA(i, s) {
        return s(i), i;
      }
      function el(i, s) {
        return s(i);
      }
      var LA = Jr(function(i) {
        var s = i.length, p = s ? i[0] : 0, S = this.__wrapped__, T = function(R) {
          return Zc(R, i);
        };
        return s > 1 || this.__actions__.length || !(S instanceof gt) || !ei(p) ? this.thru(T) : (S = S.slice(p, +p + (s ? 1 : 0)), S.__actions__.push({
          func: el,
          args: [T],
          thisArg: n
        }), new dr(S, this.__chain__).thru(function(R) {
          return s && !R.length && R.push(n), R;
        }));
      });
      function RA() {
        return _m(this);
      }
      function MA() {
        return new dr(this.value(), this.__chain__);
      }
      function $A() {
        this.__values__ === n && (this.__values__ = Fm(this.value()));
        var i = this.__index__ >= this.__values__.length, s = i ? n : this.__values__[this.__index__++];
        return { done: i, value: s };
      }
      function IA() {
        return this;
      }
      function BA(i) {
        for (var s, p = this; p instanceof Fs; ) {
          var S = ym(p);
          S.__index__ = 0, S.__values__ = n, s ? T.__wrapped__ = S : s = S;
          var T = S;
          p = p.__wrapped__;
        }
        return T.__wrapped__ = i, s;
      }
      function FA() {
        var i = this.__wrapped__;
        if (i instanceof gt) {
          var s = i;
          return this.__actions__.length && (s = new gt(this)), s = s.reverse(), s.__actions__.push({
            func: el,
            args: [_u],
            thisArg: n
          }), new dr(s, this.__chain__);
        }
        return this.thru(_u);
      }
      function zA() {
        return Wh(this.__wrapped__, this.__actions__);
      }
      var WA = Ks(function(i, s, p) {
        Lt.call(i, p) ? ++i[p] : Zr(i, p, 1);
      });
      function VA(i, s, p) {
        var S = at(i) ? eh : k1;
        return p && $n(i, s, p) && (s = n), S(i, Ye(s, 3));
      }
      function HA(i, s) {
        var p = at(i) ? li : wh;
        return p(i, Ye(s, 3));
      }
      var UA = Qh(xm), qA = Qh(bm);
      function KA(i, s) {
        return _n(tl(i, s), 1);
      }
      function jA(i, s) {
        return _n(tl(i, s), K);
      }
      function GA(i, s, p) {
        return p = p === n ? 1 : st(p), _n(tl(i, s), p);
      }
      function Cm(i, s) {
        var p = at(i) ? cr : fi;
        return p(i, Ye(s, 3));
      }
      function Tm(i, s) {
        var p = at(i) ? pE : Ah;
        return p(i, Ye(s, 3));
      }
      var YA = Ks(function(i, s, p) {
        Lt.call(i, p) ? i[p].push(s) : Zr(i, p, [s]);
      });
      function XA(i, s, p, S) {
        i = Un(i) ? i : _a(i), p = p && !S ? st(p) : 0;
        var T = i.length;
        return p < 0 && (p = sn(T + p, 0)), ol(i) ? p <= T && i.indexOf(s, p) > -1 : !!T && pa(i, s, p) > -1;
      }
      var ZA = ft(function(i, s, p) {
        var S = -1, T = typeof s == "function", R = Un(i) ? se(i.length) : [];
        return fi(i, function(q) {
          R[++S] = T ? Gn(s, q, p) : fo(q, s, p);
        }), R;
      }), QA = Ks(function(i, s, p) {
        Zr(i, p, s);
      });
      function tl(i, s) {
        var p = at(i) ? Ut : Oh;
        return p(i, Ye(s, 3));
      }
      function JA(i, s, p, S) {
        return i == null ? [] : (at(s) || (s = s == null ? [] : [s]), p = S ? n : p, at(p) || (p = p == null ? [] : [p]), Rh(i, s, p));
      }
      var ew = Ks(function(i, s, p) {
        i[p ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function tw(i, s, p) {
        var S = at(i) ? Bc : ih, T = arguments.length < 3;
        return S(i, Ye(s, 4), p, T, fi);
      }
      function nw(i, s, p) {
        var S = at(i) ? hE : ih, T = arguments.length < 3;
        return S(i, Ye(s, 4), p, T, Ah);
      }
      function rw(i, s) {
        var p = at(i) ? li : wh;
        return p(i, il(Ye(s, 3)));
      }
      function iw(i) {
        var s = at(i) ? xh : X1;
        return s(i);
      }
      function aw(i, s, p) {
        (p ? $n(i, s, p) : s === n) ? s = 1 : s = st(s);
        var S = at(i) ? T1 : Z1;
        return S(i, s);
      }
      function ow(i) {
        var s = at(i) ? D1 : J1;
        return s(i);
      }
      function sw(i) {
        if (i == null)
          return 0;
        if (Un(i))
          return ol(i) ? ma(i) : i.length;
        var s = kn(i);
        return s == ae || s == Le ? i.size : ru(i).length;
      }
      function lw(i, s, p) {
        var S = at(i) ? Fc : eS;
        return p && $n(i, s, p) && (s = n), S(i, Ye(s, 3));
      }
      var cw = ft(function(i, s) {
        if (i == null)
          return [];
        var p = s.length;
        return p > 1 && $n(i, s[0], s[1]) ? s = [] : p > 2 && $n(s[0], s[1], s[2]) && (s = [s[0]]), Rh(i, _n(s, 1), []);
      }), nl = HE || function() {
        return wn.Date.now();
      };
      function uw(i, s) {
        if (typeof s != "function")
          throw new ur(u);
        return i = st(i), function() {
          if (--i < 1)
            return s.apply(this, arguments);
        };
      }
      function Dm(i, s, p) {
        return s = p ? n : s, s = i && s == null ? i.length : s, Qr(i, $, n, n, n, n, s);
      }
      function Nm(i, s) {
        var p;
        if (typeof s != "function")
          throw new ur(u);
        return i = st(i), function() {
          return --i > 0 && (p = s.apply(this, arguments)), i <= 1 && (s = n), p;
        };
      }
      var Tu = ft(function(i, s, p) {
        var S = b;
        if (p.length) {
          var T = ui(p, Aa(Tu));
          S |= _;
        }
        return Qr(i, S, s, p, T);
      }), Om = ft(function(i, s, p) {
        var S = b | x;
        if (p.length) {
          var T = ui(p, Aa(Om));
          S |= _;
        }
        return Qr(s, S, i, p, T);
      });
      function Pm(i, s, p) {
        s = p ? n : s;
        var S = Qr(i, A, n, n, n, n, n, s);
        return S.placeholder = Pm.placeholder, S;
      }
      function km(i, s, p) {
        s = p ? n : s;
        var S = Qr(i, D, n, n, n, n, n, s);
        return S.placeholder = km.placeholder, S;
      }
      function Lm(i, s, p) {
        var S, T, R, q, X, ne, ge = 0, ve = !1, ye = !1, Re = !0;
        if (typeof i != "function")
          throw new ur(u);
        s = mr(s) || 0, Gt(p) && (ve = !!p.leading, ye = "maxWait" in p, R = ye ? sn(mr(p.maxWait) || 0, s) : R, Re = "trailing" in p ? !!p.trailing : Re);
        function Ue(nn) {
          var Tr = S, ri = T;
          return S = T = n, ge = nn, q = i.apply(ri, Tr), q;
        }
        function Ze(nn) {
          return ge = nn, X = vo(mt, s), ve ? Ue(nn) : q;
        }
        function ct(nn) {
          var Tr = nn - ne, ri = nn - ge, Qm = s - Tr;
          return ye ? Pn(Qm, R - ri) : Qm;
        }
        function Qe(nn) {
          var Tr = nn - ne, ri = nn - ge;
          return ne === n || Tr >= s || Tr < 0 || ye && ri >= R;
        }
        function mt() {
          var nn = nl();
          if (Qe(nn))
            return xt(nn);
          X = vo(mt, ct(nn));
        }
        function xt(nn) {
          return X = n, Re && S ? Ue(nn) : (S = T = n, q);
        }
        function Qn() {
          X !== n && Hh(X), ge = 0, S = ne = T = X = n;
        }
        function In() {
          return X === n ? q : xt(nl());
        }
        function Jn() {
          var nn = nl(), Tr = Qe(nn);
          if (S = arguments, T = this, ne = nn, Tr) {
            if (X === n)
              return Ze(ne);
            if (ye)
              return Hh(X), X = vo(mt, s), Ue(ne);
          }
          return X === n && (X = vo(mt, s)), q;
        }
        return Jn.cancel = Qn, Jn.flush = In, Jn;
      }
      var dw = ft(function(i, s) {
        return Sh(i, 1, s);
      }), fw = ft(function(i, s, p) {
        return Sh(i, mr(s) || 0, p);
      });
      function pw(i) {
        return Qr(i, I);
      }
      function rl(i, s) {
        if (typeof i != "function" || s != null && typeof s != "function")
          throw new ur(u);
        var p = function() {
          var S = arguments, T = s ? s.apply(this, S) : S[0], R = p.cache;
          if (R.has(T))
            return R.get(T);
          var q = i.apply(this, S);
          return p.cache = R.set(T, q) || R, q;
        };
        return p.cache = new (rl.Cache || Xr)(), p;
      }
      rl.Cache = Xr;
      function il(i) {
        if (typeof i != "function")
          throw new ur(u);
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return !i.call(this);
            case 1:
              return !i.call(this, s[0]);
            case 2:
              return !i.call(this, s[0], s[1]);
            case 3:
              return !i.call(this, s[0], s[1], s[2]);
          }
          return !i.apply(this, s);
        };
      }
      function hw(i) {
        return Nm(2, i);
      }
      var mw = tS(function(i, s) {
        s = s.length == 1 && at(s[0]) ? Ut(s[0], Yn(Ye())) : Ut(_n(s, 1), Yn(Ye()));
        var p = s.length;
        return ft(function(S) {
          for (var T = -1, R = Pn(S.length, p); ++T < R; )
            S[T] = s[T].call(this, S[T]);
          return Gn(i, this, S);
        });
      }), Du = ft(function(i, s) {
        var p = ui(s, Aa(Du));
        return Qr(i, _, n, s, p);
      }), Rm = ft(function(i, s) {
        var p = ui(s, Aa(Rm));
        return Qr(i, C, n, s, p);
      }), gw = Jr(function(i, s) {
        return Qr(i, O, n, n, n, s);
      });
      function vw(i, s) {
        if (typeof i != "function")
          throw new ur(u);
        return s = s === n ? s : st(s), ft(i, s);
      }
      function yw(i, s) {
        if (typeof i != "function")
          throw new ur(u);
        return s = s == null ? 0 : sn(st(s), 0), ft(function(p) {
          var S = p[s], T = mi(p, 0, s);
          return S && ci(T, S), Gn(i, this, T);
        });
      }
      function xw(i, s, p) {
        var S = !0, T = !0;
        if (typeof i != "function")
          throw new ur(u);
        return Gt(p) && (S = "leading" in p ? !!p.leading : S, T = "trailing" in p ? !!p.trailing : T), Lm(i, s, {
          leading: S,
          maxWait: s,
          trailing: T
        });
      }
      function bw(i) {
        return Dm(i, 1);
      }
      function Ew(i, s) {
        return Du(fu(s), i);
      }
      function Sw() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return at(i) ? i : [i];
      }
      function Aw(i) {
        return fr(i, v);
      }
      function ww(i, s) {
        return s = typeof s == "function" ? s : n, fr(i, v, s);
      }
      function _w(i) {
        return fr(i, m | v);
      }
      function Cw(i, s) {
        return s = typeof s == "function" ? s : n, fr(i, m | v, s);
      }
      function Tw(i, s) {
        return s == null || Eh(i, s, mn(s));
      }
      function Cr(i, s) {
        return i === s || i !== i && s !== s;
      }
      var Dw = Xs(eu), Nw = Xs(function(i, s) {
        return i >= s;
      }), Hi = Th(function() {
        return arguments;
      }()) ? Th : function(i) {
        return Zt(i) && Lt.call(i, "callee") && !ph.call(i, "callee");
      }, at = se.isArray, Ow = Gp ? Yn(Gp) : B1;
      function Un(i) {
        return i != null && al(i.length) && !ti(i);
      }
      function tn(i) {
        return Zt(i) && Un(i);
      }
      function Pw(i) {
        return i === !0 || i === !1 || Zt(i) && Mn(i) == De;
      }
      var gi = qE || Fu, kw = Yp ? Yn(Yp) : F1;
      function Lw(i) {
        return Zt(i) && i.nodeType === 1 && !yo(i);
      }
      function Rw(i) {
        if (i == null)
          return !0;
        if (Un(i) && (at(i) || typeof i == "string" || typeof i.splice == "function" || gi(i) || wa(i) || Hi(i)))
          return !i.length;
        var s = kn(i);
        if (s == ae || s == Le)
          return !i.size;
        if (go(i))
          return !ru(i).length;
        for (var p in i)
          if (Lt.call(i, p))
            return !1;
        return !0;
      }
      function Mw(i, s) {
        return po(i, s);
      }
      function $w(i, s, p) {
        p = typeof p == "function" ? p : n;
        var S = p ? p(i, s) : n;
        return S === n ? po(i, s, n, p) : !!S;
      }
      function Nu(i) {
        if (!Zt(i))
          return !1;
        var s = Mn(i);
        return s == me || s == ee || typeof i.message == "string" && typeof i.name == "string" && !yo(i);
      }
      function Iw(i) {
        return typeof i == "number" && mh(i);
      }
      function ti(i) {
        if (!Gt(i))
          return !1;
        var s = Mn(i);
        return s == V || s == Oe || s == We || s == At;
      }
      function Mm(i) {
        return typeof i == "number" && i == st(i);
      }
      function al(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= re;
      }
      function Gt(i) {
        var s = typeof i;
        return i != null && (s == "object" || s == "function");
      }
      function Zt(i) {
        return i != null && typeof i == "object";
      }
      var $m = Xp ? Yn(Xp) : W1;
      function Bw(i, s) {
        return i === s || nu(i, s, xu(s));
      }
      function Fw(i, s, p) {
        return p = typeof p == "function" ? p : n, nu(i, s, xu(s), p);
      }
      function zw(i) {
        return Im(i) && i != +i;
      }
      function Ww(i) {
        if (wS(i))
          throw new it(o);
        return Dh(i);
      }
      function Vw(i) {
        return i === null;
      }
      function Hw(i) {
        return i == null;
      }
      function Im(i) {
        return typeof i == "number" || Zt(i) && Mn(i) == Ne;
      }
      function yo(i) {
        if (!Zt(i) || Mn(i) != Pe)
          return !1;
        var s = ks(i);
        if (s === null)
          return !0;
        var p = Lt.call(s, "constructor") && s.constructor;
        return typeof p == "function" && p instanceof p && Ds.call(p) == FE;
      }
      var Ou = Zp ? Yn(Zp) : V1;
      function Uw(i) {
        return Mm(i) && i >= -re && i <= re;
      }
      var Bm = Qp ? Yn(Qp) : H1;
      function ol(i) {
        return typeof i == "string" || !at(i) && Zt(i) && Mn(i) == Ae;
      }
      function Zn(i) {
        return typeof i == "symbol" || Zt(i) && Mn(i) == xe;
      }
      var wa = Jp ? Yn(Jp) : U1;
      function qw(i) {
        return i === n;
      }
      function Kw(i) {
        return Zt(i) && kn(i) == we;
      }
      function jw(i) {
        return Zt(i) && Mn(i) == Ge;
      }
      var Gw = Xs(iu), Yw = Xs(function(i, s) {
        return i <= s;
      });
      function Fm(i) {
        if (!i)
          return [];
        if (Un(i))
          return ol(i) ? wr(i) : Hn(i);
        if (io && i[io])
          return TE(i[io]());
        var s = kn(i), p = s == ae ? qc : s == Le ? _s : _a;
        return p(i);
      }
      function ni(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = mr(i), i === K || i === -K) {
          var s = i < 0 ? -1 : 1;
          return s * ie;
        }
        return i === i ? i : 0;
      }
      function st(i) {
        var s = ni(i), p = s % 1;
        return s === s ? p ? s - p : s : 0;
      }
      function zm(i) {
        return i ? Fi(st(i), 0, ce) : 0;
      }
      function mr(i) {
        if (typeof i == "number")
          return i;
        if (Zn(i))
          return te;
        if (Gt(i)) {
          var s = typeof i.valueOf == "function" ? i.valueOf() : i;
          i = Gt(s) ? s + "" : s;
        }
        if (typeof i != "string")
          return i === 0 ? i : +i;
        i = ah(i);
        var p = or.test(i);
        return p || It.test(i) ? uE(i.slice(2), p ? 2 : 8) : kt.test(i) ? te : +i;
      }
      function Wm(i) {
        return $r(i, qn(i));
      }
      function Xw(i) {
        return i ? Fi(st(i), -re, re) : i === 0 ? i : 0;
      }
      function Ct(i) {
        return i == null ? "" : Xn(i);
      }
      var Zw = Ea(function(i, s) {
        if (go(s) || Un(s)) {
          $r(s, mn(s), i);
          return;
        }
        for (var p in s)
          Lt.call(s, p) && co(i, p, s[p]);
      }), Vm = Ea(function(i, s) {
        $r(s, qn(s), i);
      }), sl = Ea(function(i, s, p, S) {
        $r(s, qn(s), i, S);
      }), Qw = Ea(function(i, s, p, S) {
        $r(s, mn(s), i, S);
      }), Jw = Jr(Zc);
      function e_(i, s) {
        var p = ba(i);
        return s == null ? p : bh(p, s);
      }
      var t_ = ft(function(i, s) {
        i = Rt(i);
        var p = -1, S = s.length, T = S > 2 ? s[2] : n;
        for (T && $n(s[0], s[1], T) && (S = 1); ++p < S; )
          for (var R = s[p], q = qn(R), X = -1, ne = q.length; ++X < ne; ) {
            var ge = q[X], ve = i[ge];
            (ve === n || Cr(ve, va[ge]) && !Lt.call(i, ge)) && (i[ge] = R[ge]);
          }
        return i;
      }), n_ = ft(function(i) {
        return i.push(n, am), Gn(Hm, n, i);
      });
      function r_(i, s) {
        return th(i, Ye(s, 3), Mr);
      }
      function i_(i, s) {
        return th(i, Ye(s, 3), Jc);
      }
      function a_(i, s) {
        return i == null ? i : Qc(i, Ye(s, 3), qn);
      }
      function o_(i, s) {
        return i == null ? i : _h(i, Ye(s, 3), qn);
      }
      function s_(i, s) {
        return i && Mr(i, Ye(s, 3));
      }
      function l_(i, s) {
        return i && Jc(i, Ye(s, 3));
      }
      function c_(i) {
        return i == null ? [] : Vs(i, mn(i));
      }
      function u_(i) {
        return i == null ? [] : Vs(i, qn(i));
      }
      function Pu(i, s, p) {
        var S = i == null ? n : zi(i, s);
        return S === n ? p : S;
      }
      function d_(i, s) {
        return i != null && lm(i, s, R1);
      }
      function ku(i, s) {
        return i != null && lm(i, s, M1);
      }
      var f_ = em(function(i, s, p) {
        s != null && typeof s.toString != "function" && (s = Ns.call(s)), i[s] = p;
      }, Ru(Kn)), p_ = em(function(i, s, p) {
        s != null && typeof s.toString != "function" && (s = Ns.call(s)), Lt.call(i, s) ? i[s].push(p) : i[s] = [p];
      }, Ye), h_ = ft(fo);
      function mn(i) {
        return Un(i) ? yh(i) : ru(i);
      }
      function qn(i) {
        return Un(i) ? yh(i, !0) : q1(i);
      }
      function m_(i, s) {
        var p = {};
        return s = Ye(s, 3), Mr(i, function(S, T, R) {
          Zr(p, s(S, T, R), S);
        }), p;
      }
      function g_(i, s) {
        var p = {};
        return s = Ye(s, 3), Mr(i, function(S, T, R) {
          Zr(p, T, s(S, T, R));
        }), p;
      }
      var v_ = Ea(function(i, s, p) {
        Hs(i, s, p);
      }), Hm = Ea(function(i, s, p, S) {
        Hs(i, s, p, S);
      }), y_ = Jr(function(i, s) {
        var p = {};
        if (i == null)
          return p;
        var S = !1;
        s = Ut(s, function(R) {
          return R = hi(R, i), S || (S = R.length > 1), R;
        }), $r(i, vu(i), p), S && (p = fr(p, m | g | v, fS));
        for (var T = s.length; T--; )
          cu(p, s[T]);
        return p;
      });
      function x_(i, s) {
        return Um(i, il(Ye(s)));
      }
      var b_ = Jr(function(i, s) {
        return i == null ? {} : j1(i, s);
      });
      function Um(i, s) {
        if (i == null)
          return {};
        var p = Ut(vu(i), function(S) {
          return [S];
        });
        return s = Ye(s), Mh(i, p, function(S, T) {
          return s(S, T[0]);
        });
      }
      function E_(i, s, p) {
        s = hi(s, i);
        var S = -1, T = s.length;
        for (T || (T = 1, i = n); ++S < T; ) {
          var R = i == null ? n : i[Ir(s[S])];
          R === n && (S = T, R = p), i = ti(R) ? R.call(i) : R;
        }
        return i;
      }
      function S_(i, s, p) {
        return i == null ? i : ho(i, s, p);
      }
      function A_(i, s, p, S) {
        return S = typeof S == "function" ? S : n, i == null ? i : ho(i, s, p, S);
      }
      var qm = rm(mn), Km = rm(qn);
      function w_(i, s, p) {
        var S = at(i), T = S || gi(i) || wa(i);
        if (s = Ye(s, 4), p == null) {
          var R = i && i.constructor;
          T ? p = S ? new R() : [] : Gt(i) ? p = ti(R) ? ba(ks(i)) : {} : p = {};
        }
        return (T ? cr : Mr)(i, function(q, X, ne) {
          return s(p, q, X, ne);
        }), p;
      }
      function __(i, s) {
        return i == null ? !0 : cu(i, s);
      }
      function C_(i, s, p) {
        return i == null ? i : zh(i, s, fu(p));
      }
      function T_(i, s, p, S) {
        return S = typeof S == "function" ? S : n, i == null ? i : zh(i, s, fu(p), S);
      }
      function _a(i) {
        return i == null ? [] : Uc(i, mn(i));
      }
      function D_(i) {
        return i == null ? [] : Uc(i, qn(i));
      }
      function N_(i, s, p) {
        return p === n && (p = s, s = n), p !== n && (p = mr(p), p = p === p ? p : 0), s !== n && (s = mr(s), s = s === s ? s : 0), Fi(mr(i), s, p);
      }
      function O_(i, s, p) {
        return s = ni(s), p === n ? (p = s, s = 0) : p = ni(p), i = mr(i), $1(i, s, p);
      }
      function P_(i, s, p) {
        if (p && typeof p != "boolean" && $n(i, s, p) && (s = p = n), p === n && (typeof s == "boolean" ? (p = s, s = n) : typeof i == "boolean" && (p = i, i = n)), i === n && s === n ? (i = 0, s = 1) : (i = ni(i), s === n ? (s = i, i = 0) : s = ni(s)), i > s) {
          var S = i;
          i = s, s = S;
        }
        if (p || i % 1 || s % 1) {
          var T = gh();
          return Pn(i + T * (s - i + cE("1e-" + ((T + "").length - 1))), s);
        }
        return ou(i, s);
      }
      var k_ = Sa(function(i, s, p) {
        return s = s.toLowerCase(), i + (p ? jm(s) : s);
      });
      function jm(i) {
        return Lu(Ct(i).toLowerCase());
      }
      function Gm(i) {
        return i = Ct(i), i && i.replace(en, SE).replace(J0, "");
      }
      function L_(i, s, p) {
        i = Ct(i), s = Xn(s);
        var S = i.length;
        p = p === n ? S : Fi(st(p), 0, S);
        var T = p;
        return p -= s.length, p >= 0 && i.slice(p, T) == s;
      }
      function R_(i) {
        return i = Ct(i), i && jr.test(i) ? i.replace(Sr, AE) : i;
      }
      function M_(i) {
        return i = Ct(i), i && k.test(i) ? i.replace(pn, "\\$&") : i;
      }
      var $_ = Sa(function(i, s, p) {
        return i + (p ? "-" : "") + s.toLowerCase();
      }), I_ = Sa(function(i, s, p) {
        return i + (p ? " " : "") + s.toLowerCase();
      }), B_ = Zh("toLowerCase");
      function F_(i, s, p) {
        i = Ct(i), s = st(s);
        var S = s ? ma(i) : 0;
        if (!s || S >= s)
          return i;
        var T = (s - S) / 2;
        return Ys($s(T), p) + i + Ys(Ms(T), p);
      }
      function z_(i, s, p) {
        i = Ct(i), s = st(s);
        var S = s ? ma(i) : 0;
        return s && S < s ? i + Ys(s - S, p) : i;
      }
      function W_(i, s, p) {
        i = Ct(i), s = st(s);
        var S = s ? ma(i) : 0;
        return s && S < s ? Ys(s - S, p) + i : i;
      }
      function V_(i, s, p) {
        return p || s == null ? s = 0 : s && (s = +s), YE(Ct(i).replace(pe, ""), s || 0);
      }
      function H_(i, s, p) {
        return (p ? $n(i, s, p) : s === n) ? s = 1 : s = st(s), su(Ct(i), s);
      }
      function U_() {
        var i = arguments, s = Ct(i[0]);
        return i.length < 3 ? s : s.replace(i[1], i[2]);
      }
      var q_ = Sa(function(i, s, p) {
        return i + (p ? "_" : "") + s.toLowerCase();
      });
      function K_(i, s, p) {
        return p && typeof p != "number" && $n(i, s, p) && (s = p = n), p = p === n ? ce : p >>> 0, p ? (i = Ct(i), i && (typeof s == "string" || s != null && !Ou(s)) && (s = Xn(s), !s && ha(i)) ? mi(wr(i), 0, p) : i.split(s, p)) : [];
      }
      var j_ = Sa(function(i, s, p) {
        return i + (p ? " " : "") + Lu(s);
      });
      function G_(i, s, p) {
        return i = Ct(i), p = p == null ? 0 : Fi(st(p), 0, i.length), s = Xn(s), i.slice(p, p + s.length) == s;
      }
      function Y_(i, s, p) {
        var S = P.templateSettings;
        p && $n(i, s, p) && (s = n), i = Ct(i), s = sl({}, s, S, im);
        var T = sl({}, s.imports, S.imports, im), R = mn(T), q = Uc(T, R), X, ne, ge = 0, ve = s.interpolate || bn, ye = "__p += '", Re = Kc(
          (s.escape || bn).source + "|" + ve.source + "|" + (ve === rt ? Jt : bn).source + "|" + (s.evaluate || bn).source + "|$",
          "g"
        ), Ue = "//# sourceURL=" + (Lt.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++iE + "]") + `
`;
        i.replace(Re, function(Qe, mt, xt, Qn, In, Jn) {
          return xt || (xt = Qn), ye += i.slice(ge, Jn).replace(hn, wE), mt && (X = !0, ye += `' +
__e(` + mt + `) +
'`), In && (ne = !0, ye += `';
` + In + `;
__p += '`), xt && (ye += `' +
((__t = (` + xt + `)) == null ? '' : __t) +
'`), ge = Jn + Qe.length, Qe;
        }), ye += `';
`;
        var Ze = Lt.call(s, "variable") && s.variable;
        if (!Ze)
          ye = `with (obj) {
` + ye + `
}
`;
        else if (et.test(Ze))
          throw new it(c);
        ye = (ne ? ye.replace(oi, "") : ye).replace(ua, "$1").replace(Dn, "$1;"), ye = "function(" + (Ze || "obj") + `) {
` + (Ze ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (X ? ", __e = _.escape" : "") + (ne ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ye + `return __p
}`;
        var ct = Xm(function() {
          return wt(R, Ue + "return " + ye).apply(n, q);
        });
        if (ct.source = ye, Nu(ct))
          throw ct;
        return ct;
      }
      function X_(i) {
        return Ct(i).toLowerCase();
      }
      function Z_(i) {
        return Ct(i).toUpperCase();
      }
      function Q_(i, s, p) {
        if (i = Ct(i), i && (p || s === n))
          return ah(i);
        if (!i || !(s = Xn(s)))
          return i;
        var S = wr(i), T = wr(s), R = oh(S, T), q = sh(S, T) + 1;
        return mi(S, R, q).join("");
      }
      function J_(i, s, p) {
        if (i = Ct(i), i && (p || s === n))
          return i.slice(0, ch(i) + 1);
        if (!i || !(s = Xn(s)))
          return i;
        var S = wr(i), T = sh(S, wr(s)) + 1;
        return mi(S, 0, T).join("");
      }
      function eC(i, s, p) {
        if (i = Ct(i), i && (p || s === n))
          return i.replace(pe, "");
        if (!i || !(s = Xn(s)))
          return i;
        var S = wr(i), T = oh(S, wr(s));
        return mi(S, T).join("");
      }
      function tC(i, s) {
        var p = B, S = L;
        if (Gt(s)) {
          var T = "separator" in s ? s.separator : T;
          p = "length" in s ? st(s.length) : p, S = "omission" in s ? Xn(s.omission) : S;
        }
        i = Ct(i);
        var R = i.length;
        if (ha(i)) {
          var q = wr(i);
          R = q.length;
        }
        if (p >= R)
          return i;
        var X = p - ma(S);
        if (X < 1)
          return S;
        var ne = q ? mi(q, 0, X).join("") : i.slice(0, X);
        if (T === n)
          return ne + S;
        if (q && (X += ne.length - X), Ou(T)) {
          if (i.slice(X).search(T)) {
            var ge, ve = ne;
            for (T.global || (T = Kc(T.source, Ct(Nn.exec(T)) + "g")), T.lastIndex = 0; ge = T.exec(ve); )
              var ye = ge.index;
            ne = ne.slice(0, ye === n ? X : ye);
          }
        } else if (i.indexOf(Xn(T), X) != X) {
          var Re = ne.lastIndexOf(T);
          Re > -1 && (ne = ne.slice(0, Re));
        }
        return ne + S;
      }
      function nC(i) {
        return i = Ct(i), i && Pi.test(i) ? i.replace(Kr, PE) : i;
      }
      var rC = Sa(function(i, s, p) {
        return i + (p ? " " : "") + s.toUpperCase();
      }), Lu = Zh("toUpperCase");
      function Ym(i, s, p) {
        return i = Ct(i), s = p ? n : s, s === n ? CE(i) ? RE(i) : vE(i) : i.match(s) || [];
      }
      var Xm = ft(function(i, s) {
        try {
          return Gn(i, n, s);
        } catch (p) {
          return Nu(p) ? p : new it(p);
        }
      }), iC = Jr(function(i, s) {
        return cr(s, function(p) {
          p = Ir(p), Zr(i, p, Tu(i[p], i));
        }), i;
      });
      function aC(i) {
        var s = i == null ? 0 : i.length, p = Ye();
        return i = s ? Ut(i, function(S) {
          if (typeof S[1] != "function")
            throw new ur(u);
          return [p(S[0]), S[1]];
        }) : [], ft(function(S) {
          for (var T = -1; ++T < s; ) {
            var R = i[T];
            if (Gn(R[0], this, S))
              return Gn(R[1], this, S);
          }
        });
      }
      function oC(i) {
        return P1(fr(i, m));
      }
      function Ru(i) {
        return function() {
          return i;
        };
      }
      function sC(i, s) {
        return i == null || i !== i ? s : i;
      }
      var lC = Jh(), cC = Jh(!0);
      function Kn(i) {
        return i;
      }
      function Mu(i) {
        return Nh(typeof i == "function" ? i : fr(i, m));
      }
      function uC(i) {
        return Ph(fr(i, m));
      }
      function dC(i, s) {
        return kh(i, fr(s, m));
      }
      var fC = ft(function(i, s) {
        return function(p) {
          return fo(p, i, s);
        };
      }), pC = ft(function(i, s) {
        return function(p) {
          return fo(i, p, s);
        };
      });
      function $u(i, s, p) {
        var S = mn(s), T = Vs(s, S);
        p == null && !(Gt(s) && (T.length || !S.length)) && (p = s, s = i, i = this, T = Vs(s, mn(s)));
        var R = !(Gt(p) && "chain" in p) || !!p.chain, q = ti(i);
        return cr(T, function(X) {
          var ne = s[X];
          i[X] = ne, q && (i.prototype[X] = function() {
            var ge = this.__chain__;
            if (R || ge) {
              var ve = i(this.__wrapped__), ye = ve.__actions__ = Hn(this.__actions__);
              return ye.push({ func: ne, args: arguments, thisArg: i }), ve.__chain__ = ge, ve;
            }
            return ne.apply(i, ci([this.value()], arguments));
          });
        }), i;
      }
      function hC() {
        return wn._ === this && (wn._ = zE), this;
      }
      function Iu() {
      }
      function mC(i) {
        return i = st(i), ft(function(s) {
          return Lh(s, i);
        });
      }
      var gC = hu(Ut), vC = hu(eh), yC = hu(Fc);
      function Zm(i) {
        return Eu(i) ? zc(Ir(i)) : G1(i);
      }
      function xC(i) {
        return function(s) {
          return i == null ? n : zi(i, s);
        };
      }
      var bC = tm(), EC = tm(!0);
      function Bu() {
        return [];
      }
      function Fu() {
        return !1;
      }
      function SC() {
        return {};
      }
      function AC() {
        return "";
      }
      function wC() {
        return !0;
      }
      function _C(i, s) {
        if (i = st(i), i < 1 || i > re)
          return [];
        var p = ce, S = Pn(i, ce);
        s = Ye(s), i -= ce;
        for (var T = Hc(S, s); ++p < i; )
          s(p);
        return T;
      }
      function CC(i) {
        return at(i) ? Ut(i, Ir) : Zn(i) ? [i] : Hn(vm(Ct(i)));
      }
      function TC(i) {
        var s = ++BE;
        return Ct(i) + s;
      }
      var DC = Gs(function(i, s) {
        return i + s;
      }, 0), NC = mu("ceil"), OC = Gs(function(i, s) {
        return i / s;
      }, 1), PC = mu("floor");
      function kC(i) {
        return i && i.length ? Ws(i, Kn, eu) : n;
      }
      function LC(i, s) {
        return i && i.length ? Ws(i, Ye(s, 2), eu) : n;
      }
      function RC(i) {
        return rh(i, Kn);
      }
      function MC(i, s) {
        return rh(i, Ye(s, 2));
      }
      function $C(i) {
        return i && i.length ? Ws(i, Kn, iu) : n;
      }
      function IC(i, s) {
        return i && i.length ? Ws(i, Ye(s, 2), iu) : n;
      }
      var BC = Gs(function(i, s) {
        return i * s;
      }, 1), FC = mu("round"), zC = Gs(function(i, s) {
        return i - s;
      }, 0);
      function WC(i) {
        return i && i.length ? Vc(i, Kn) : 0;
      }
      function VC(i, s) {
        return i && i.length ? Vc(i, Ye(s, 2)) : 0;
      }
      return P.after = uw, P.ary = Dm, P.assign = Zw, P.assignIn = Vm, P.assignInWith = sl, P.assignWith = Qw, P.at = Jw, P.before = Nm, P.bind = Tu, P.bindAll = iC, P.bindKey = Om, P.castArray = Sw, P.chain = _m, P.chunk = PS, P.compact = kS, P.concat = LS, P.cond = aC, P.conforms = oC, P.constant = Ru, P.countBy = WA, P.create = e_, P.curry = Pm, P.curryRight = km, P.debounce = Lm, P.defaults = t_, P.defaultsDeep = n_, P.defer = dw, P.delay = fw, P.difference = RS, P.differenceBy = MS, P.differenceWith = $S, P.drop = IS, P.dropRight = BS, P.dropRightWhile = FS, P.dropWhile = zS, P.fill = WS, P.filter = HA, P.flatMap = KA, P.flatMapDeep = jA, P.flatMapDepth = GA, P.flatten = Em, P.flattenDeep = VS, P.flattenDepth = HS, P.flip = pw, P.flow = lC, P.flowRight = cC, P.fromPairs = US, P.functions = c_, P.functionsIn = u_, P.groupBy = YA, P.initial = KS, P.intersection = jS, P.intersectionBy = GS, P.intersectionWith = YS, P.invert = f_, P.invertBy = p_, P.invokeMap = ZA, P.iteratee = Mu, P.keyBy = QA, P.keys = mn, P.keysIn = qn, P.map = tl, P.mapKeys = m_, P.mapValues = g_, P.matches = uC, P.matchesProperty = dC, P.memoize = rl, P.merge = v_, P.mergeWith = Hm, P.method = fC, P.methodOf = pC, P.mixin = $u, P.negate = il, P.nthArg = mC, P.omit = y_, P.omitBy = x_, P.once = hw, P.orderBy = JA, P.over = gC, P.overArgs = mw, P.overEvery = vC, P.overSome = yC, P.partial = Du, P.partialRight = Rm, P.partition = ew, P.pick = b_, P.pickBy = Um, P.property = Zm, P.propertyOf = xC, P.pull = JS, P.pullAll = Am, P.pullAllBy = eA, P.pullAllWith = tA, P.pullAt = nA, P.range = bC, P.rangeRight = EC, P.rearg = gw, P.reject = rw, P.remove = rA, P.rest = vw, P.reverse = _u, P.sampleSize = aw, P.set = S_, P.setWith = A_, P.shuffle = ow, P.slice = iA, P.sortBy = cw, P.sortedUniq = dA, P.sortedUniqBy = fA, P.split = K_, P.spread = yw, P.tail = pA, P.take = hA, P.takeRight = mA, P.takeRightWhile = gA, P.takeWhile = vA, P.tap = kA, P.throttle = xw, P.thru = el, P.toArray = Fm, P.toPairs = qm, P.toPairsIn = Km, P.toPath = CC, P.toPlainObject = Wm, P.transform = w_, P.unary = bw, P.union = yA, P.unionBy = xA, P.unionWith = bA, P.uniq = EA, P.uniqBy = SA, P.uniqWith = AA, P.unset = __, P.unzip = Cu, P.unzipWith = wm, P.update = C_, P.updateWith = T_, P.values = _a, P.valuesIn = D_, P.without = wA, P.words = Ym, P.wrap = Ew, P.xor = _A, P.xorBy = CA, P.xorWith = TA, P.zip = DA, P.zipObject = NA, P.zipObjectDeep = OA, P.zipWith = PA, P.entries = qm, P.entriesIn = Km, P.extend = Vm, P.extendWith = sl, $u(P, P), P.add = DC, P.attempt = Xm, P.camelCase = k_, P.capitalize = jm, P.ceil = NC, P.clamp = N_, P.clone = Aw, P.cloneDeep = _w, P.cloneDeepWith = Cw, P.cloneWith = ww, P.conformsTo = Tw, P.deburr = Gm, P.defaultTo = sC, P.divide = OC, P.endsWith = L_, P.eq = Cr, P.escape = R_, P.escapeRegExp = M_, P.every = VA, P.find = UA, P.findIndex = xm, P.findKey = r_, P.findLast = qA, P.findLastIndex = bm, P.findLastKey = i_, P.floor = PC, P.forEach = Cm, P.forEachRight = Tm, P.forIn = a_, P.forInRight = o_, P.forOwn = s_, P.forOwnRight = l_, P.get = Pu, P.gt = Dw, P.gte = Nw, P.has = d_, P.hasIn = ku, P.head = Sm, P.identity = Kn, P.includes = XA, P.indexOf = qS, P.inRange = O_, P.invoke = h_, P.isArguments = Hi, P.isArray = at, P.isArrayBuffer = Ow, P.isArrayLike = Un, P.isArrayLikeObject = tn, P.isBoolean = Pw, P.isBuffer = gi, P.isDate = kw, P.isElement = Lw, P.isEmpty = Rw, P.isEqual = Mw, P.isEqualWith = $w, P.isError = Nu, P.isFinite = Iw, P.isFunction = ti, P.isInteger = Mm, P.isLength = al, P.isMap = $m, P.isMatch = Bw, P.isMatchWith = Fw, P.isNaN = zw, P.isNative = Ww, P.isNil = Hw, P.isNull = Vw, P.isNumber = Im, P.isObject = Gt, P.isObjectLike = Zt, P.isPlainObject = yo, P.isRegExp = Ou, P.isSafeInteger = Uw, P.isSet = Bm, P.isString = ol, P.isSymbol = Zn, P.isTypedArray = wa, P.isUndefined = qw, P.isWeakMap = Kw, P.isWeakSet = jw, P.join = XS, P.kebabCase = $_, P.last = hr, P.lastIndexOf = ZS, P.lowerCase = I_, P.lowerFirst = B_, P.lt = Gw, P.lte = Yw, P.max = kC, P.maxBy = LC, P.mean = RC, P.meanBy = MC, P.min = $C, P.minBy = IC, P.stubArray = Bu, P.stubFalse = Fu, P.stubObject = SC, P.stubString = AC, P.stubTrue = wC, P.multiply = BC, P.nth = QS, P.noConflict = hC, P.noop = Iu, P.now = nl, P.pad = F_, P.padEnd = z_, P.padStart = W_, P.parseInt = V_, P.random = P_, P.reduce = tw, P.reduceRight = nw, P.repeat = H_, P.replace = U_, P.result = E_, P.round = FC, P.runInContext = J, P.sample = iw, P.size = sw, P.snakeCase = q_, P.some = lw, P.sortedIndex = aA, P.sortedIndexBy = oA, P.sortedIndexOf = sA, P.sortedLastIndex = lA, P.sortedLastIndexBy = cA, P.sortedLastIndexOf = uA, P.startCase = j_, P.startsWith = G_, P.subtract = zC, P.sum = WC, P.sumBy = VC, P.template = Y_, P.times = _C, P.toFinite = ni, P.toInteger = st, P.toLength = zm, P.toLower = X_, P.toNumber = mr, P.toSafeInteger = Xw, P.toString = Ct, P.toUpper = Z_, P.trim = Q_, P.trimEnd = J_, P.trimStart = eC, P.truncate = tC, P.unescape = nC, P.uniqueId = TC, P.upperCase = rC, P.upperFirst = Lu, P.each = Cm, P.eachRight = Tm, P.first = Sm, $u(P, function() {
        var i = {};
        return Mr(P, function(s, p) {
          Lt.call(P.prototype, p) || (i[p] = s);
        }), i;
      }(), { chain: !1 }), P.VERSION = r, cr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        P[i].placeholder = P;
      }), cr(["drop", "take"], function(i, s) {
        gt.prototype[i] = function(p) {
          p = p === n ? 1 : sn(st(p), 0);
          var S = this.__filtered__ && !s ? new gt(this) : this.clone();
          return S.__filtered__ ? S.__takeCount__ = Pn(p, S.__takeCount__) : S.__views__.push({
            size: Pn(p, ce),
            type: i + (S.__dir__ < 0 ? "Right" : "")
          }), S;
        }, gt.prototype[i + "Right"] = function(p) {
          return this.reverse()[i](p).reverse();
        };
      }), cr(["filter", "map", "takeWhile"], function(i, s) {
        var p = s + 1, S = p == W || p == H;
        gt.prototype[i] = function(T) {
          var R = this.clone();
          return R.__iteratees__.push({
            iteratee: Ye(T, 3),
            type: p
          }), R.__filtered__ = R.__filtered__ || S, R;
        };
      }), cr(["head", "last"], function(i, s) {
        var p = "take" + (s ? "Right" : "");
        gt.prototype[i] = function() {
          return this[p](1).value()[0];
        };
      }), cr(["initial", "tail"], function(i, s) {
        var p = "drop" + (s ? "" : "Right");
        gt.prototype[i] = function() {
          return this.__filtered__ ? new gt(this) : this[p](1);
        };
      }), gt.prototype.compact = function() {
        return this.filter(Kn);
      }, gt.prototype.find = function(i) {
        return this.filter(i).head();
      }, gt.prototype.findLast = function(i) {
        return this.reverse().find(i);
      }, gt.prototype.invokeMap = ft(function(i, s) {
        return typeof i == "function" ? new gt(this) : this.map(function(p) {
          return fo(p, i, s);
        });
      }), gt.prototype.reject = function(i) {
        return this.filter(il(Ye(i)));
      }, gt.prototype.slice = function(i, s) {
        i = st(i);
        var p = this;
        return p.__filtered__ && (i > 0 || s < 0) ? new gt(p) : (i < 0 ? p = p.takeRight(-i) : i && (p = p.drop(i)), s !== n && (s = st(s), p = s < 0 ? p.dropRight(-s) : p.take(s - i)), p);
      }, gt.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, gt.prototype.toArray = function() {
        return this.take(ce);
      }, Mr(gt.prototype, function(i, s) {
        var p = /^(?:filter|find|map|reject)|While$/.test(s), S = /^(?:head|last)$/.test(s), T = P[S ? "take" + (s == "last" ? "Right" : "") : s], R = S || /^find/.test(s);
        T && (P.prototype[s] = function() {
          var q = this.__wrapped__, X = S ? [1] : arguments, ne = q instanceof gt, ge = X[0], ve = ne || at(q), ye = function(mt) {
            var xt = T.apply(P, ci([mt], X));
            return S && Re ? xt[0] : xt;
          };
          ve && p && typeof ge == "function" && ge.length != 1 && (ne = ve = !1);
          var Re = this.__chain__, Ue = !!this.__actions__.length, Ze = R && !Re, ct = ne && !Ue;
          if (!R && ve) {
            q = ct ? q : new gt(this);
            var Qe = i.apply(q, X);
            return Qe.__actions__.push({ func: el, args: [ye], thisArg: n }), new dr(Qe, Re);
          }
          return Ze && ct ? i.apply(this, X) : (Qe = this.thru(ye), Ze ? S ? Qe.value()[0] : Qe.value() : Qe);
        });
      }), cr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var s = Cs[i], p = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", S = /^(?:pop|shift)$/.test(i);
        P.prototype[i] = function() {
          var T = arguments;
          if (S && !this.__chain__) {
            var R = this.value();
            return s.apply(at(R) ? R : [], T);
          }
          return this[p](function(q) {
            return s.apply(at(q) ? q : [], T);
          });
        };
      }), Mr(gt.prototype, function(i, s) {
        var p = P[s];
        if (p) {
          var S = p.name + "";
          Lt.call(xa, S) || (xa[S] = []), xa[S].push({ name: s, func: p });
        }
      }), xa[js(n, x).name] = [{
        name: "wrapper",
        func: n
      }], gt.prototype.clone = n1, gt.prototype.reverse = r1, gt.prototype.value = i1, P.prototype.at = LA, P.prototype.chain = RA, P.prototype.commit = MA, P.prototype.next = $A, P.prototype.plant = BA, P.prototype.reverse = FA, P.prototype.toJSON = P.prototype.valueOf = P.prototype.value = zA, P.prototype.first = P.prototype.head, io && (P.prototype[io] = IA), P;
    }, ga = ME();
    Mi ? ((Mi.exports = ga)._ = ga, Mc._ = ga) : wn._ = ga;
  }).call(xo);
})(ac, ac.exports);
ac.exports;
function ep(e) {
  delete e.qualitative9;
  let t = {};
  for (const [n, r] of Object.entries(e)) {
    const a = String(n);
    if (a.endsWith("reverse"))
      t = { ...e };
    else {
      let o = a.concat("reverse");
      t[o] = [...r].reverse();
    }
  }
  return { ...t, ...e };
}
const GL = {
  yelloworangered: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  yelloworangebrown: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  pinkpurple: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  bluegreen: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  orangered: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  red: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  greenblue: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#267BA6", "#0868ac", "#084081"],
  yellowpurple: ["#FFF0B0", "#F5CC76", "#EDAE4B", "#E3683C", "#BF2A48", "#6D2059", "#8F0C4B", "#310958", "#0E0943"],
  qualitative1: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#6a3d9a", "#cab2d6", "#E31A90", "#15017A", "#C2C0FC"],
  qualitative2: ["#7fc97f", "#beaed4", "#ff9", "#386cb0", "#f0027f", "#bf5b17", "#666", "#fedab8"],
  qualitative3: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666"],
  qualitative4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ff3", "#a65628", "#f781bf"],
  qualitative9: ["#497d0c", "#84BC49", "#88c3ea", "#fcad90", "#f26b4f", "#c31b1f", "#c31b1f"],
  "sequential-blue-2(MPX)": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "sequential-orange(MPX)": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"]
}, YL = {
  "qualitative-bold": ["#377eb8", "#ff7f00", "#4daf4a", "#984ea3", "#e41a1c", "#ffff33", "#a65628", "#f781bf", "#3399CC"],
  "qualitative-soft": ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#ACA9EB"],
  qualitative1: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#6a3d9a", "#cab2d6", "#E31A90", "#15017A", "#C2C0FC"],
  qualitative2: ["#7fc97f", "#beaed4", "#ff9", "#386cb0", "#f0027f", "#bf5b17", "#666", "#fedab8"],
  qualitative3: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666"],
  qualitative4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ff3", "#a65628", "#f781bf"],
  "sequential-blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "sequential-blue-2-(MPX)": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "sequential-orange-(MPX)": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "sequential-green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, XL = {
  "monochrome-1": ["#A6CEE3", "#15017A"],
  "monochrome-2": ["#C2C0FC", "#15017A"],
  "monochrome-3": ["#cab2d6", "#6a3d9a"],
  "monochrome-4": ["#C2C0FC", "#6a3d9a"],
  "monochrome-5": ["#fedab8", "#bf5b17"],
  "cool-1": ["#b2df8a", "#1f78b4"],
  "cool-2": ["#a6cee3", "#72D66B"],
  "cool-3": ["#C2C0FC", "#386cb0"],
  "cool-4": ["#72D66B", "#6a3d9a"],
  "cool-5": ["#a6cee3", "#6a3d9a"],
  "warm-1": ["#e31a1c", "#fedab8"],
  "complementary-1": ["#1f78b4", "#e6ab02"],
  "complementary-2": ["#1f78b4", "#ff7f00"],
  "complementary-3": ["#6a3d9a", "#ff7f00"],
  "complementary-4": ["#6a3d9a", "#e6ab02"],
  "complementary-5": ["#df168c", "#1EB386"]
}, ZL = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, oc = ZL, Ei = ep(YL);
ep(GL);
const af = ep(XL), QL = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: r } = F.useContext(pt);
  F.useEffect(() => {
    n.legend.hide === !1 && r({
      ...n,
      legend: {
        ...n.legend,
        hide: !0
      }
    });
  }, []);
  const a = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, o = (E) => `
      <strong>${E.columnCategory}</strong></br>
      ${n.boxplot.labels.q1}: ${E.columnFirstQuartile}<br/>
      ${n.boxplot.labels.q3}: ${E.columnThirdQuartile}<br/>
      ${n.boxplot.labels.iqr}: ${E.columnIqr}<br/>
      ${n.boxplot.labels.median}: ${E.columnMedian}
    `, u = (E) => Number(E.columnMax), c = (E) => Number(E.columnMin), d = (E) => Number(E.columnMedian), f = (E) => Number(E.columnThirdQuartile), h = (E) => Number(E.columnFirstQuartile), m = 0.5, g = e.bandwidth(), v = Math.min(40, g), y = Ei[n == null ? void 0 : n.palette][0] ? Ei[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ l.createElement(Lr, { component: "BoxPlot" }, /* @__PURE__ */ l.createElement(He, { className: "boxplot", key: "boxplot-group" }, n.boxplot.plots.map((E, b) => {
    const x = g - v, w = 4;
    return /* @__PURE__ */ l.createElement(He, { key: `boxplotplot-${b}` }, n.boxplot.plotNonOutlierValues && E.nonOutlierValues.map((A, D) => /* @__PURE__ */ l.createElement("circle", { cx: e(E.columnCategory) + Number(n.yAxis.size) + g / 2, cy: t(A), r: w, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${b}--circle-${D}` })), /* @__PURE__ */ l.createElement(
      yb,
      {
        "data-left": e(E.columnCategory) + n.yAxis.size + x / 2 + 0.5,
        key: `box-plot-${b}`,
        min: c(E),
        max: u(E),
        left: Number(e(E.columnCategory)) + Number(n.yAxis.size) + x / 2 + 0.5,
        firstQuartile: h(E),
        thirdQuartile: f(E),
        median: d(E),
        boxWidth: v,
        fill: y,
        fillOpacity: m,
        stroke: "black",
        valueScale: t,
        outliers: n.boxplot.plotOutlierValues ? E.columnOutliers : [],
        outlierProps: {
          style: {
            fill: `${y}`,
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
            strokeWidth: n.boxplot.borders === "true" ? 1 : 0
          }
        },
        maxProps: {
          style: {
            stroke: "black"
          }
        },
        container: !0,
        containerProps: {
          "data-tooltip-html": o(E),
          "data-tooltip-id": a
        }
      }
    ));
  })));
}, JL = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: r }) => {
  const { colorScale: a, transformedData: o, config: u, formatNumber: c, seriesHighlight: d, colorPalettes: f } = F.useContext(pt);
  let h = 4.5;
  const m = Object.keys(u.runtime.seriesLabels).length > 1, g = (v, y) => `<div>
    ${u.legend.showLegendValuesTooltip && u.runtime.seriesLabels && m ? `${u.runtime.seriesLabels[y] || ""}<br/>` : ""}
    ${u.xAxis.label}: ${c(v[u.xAxis.dataKey], "bottom")} <br/>
    ${u.yAxis.label}: ${c(v[y], "left")}
</div>`;
  return /* @__PURE__ */ l.createElement(He, { className: "scatter-plot", left: u.yAxis.size }, o.map((v, y) => u.runtime.seriesKeys.map((E, b) => {
    const x = u.legend.behavior === "highlight" && d.length > 0 && d.indexOf(E) === -1, w = u.legend.behavior === "highlight" || d.length === 0 || d.indexOf(E) !== -1, A = u.palette ? f[u.palette][b] : "#000";
    let D = {
      filter: "unset",
      opacity: 1,
      stroke: w ? "black" : ""
    };
    return /* @__PURE__ */ l.createElement(
      "circle",
      {
        key: `${y}-${b}`,
        r: h,
        cx: e(v[u.xAxis.dataKey]),
        cy: t(v[E]),
        fill: w ? A : "transparent",
        fillOpacity: x ? 0.25 : 1,
        style: D,
        "data-tooltip-html": g(v, E),
        "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`
      }
    );
  })));
};
function eR({ height: e, xScale: t }) {
  var ie;
  const { transformedData: n, config: r, formatNumber: a, twoColorPalette: o, getTextWidth: u, updateConfig: c, parseDate: d, formatDate: f, currentViewport: h } = F.useContext(pt), { barStyle: m, tipRounding: g, roundingStyle: v, twoColor: y } = r, E = F.useRef([]), [b, x] = F.useState(window.innerWidth), w = v === "standard" ? "8px" : v === "shallow" ? "5px" : v === "finger" ? "15px" : "0px", A = { small: 16, medium: 18, large: 20 };
  r.barStyle;
  const D = Number(r.xAxis.target), _ = r.series[0].dataKey, C = Number(t.domain()[1]), O = n.some((te) => te[_] < 0) || D > 0 || t.domain()[0] < 0, I = r.barHasBorder === "true" ? 1 : 0, B = r.lollipopSize === "large" ? 7 : r.lollipopSize === "medium" ? 6 : 5, L = r.lollipopSize === "large" ? 14 : r.lollipopSize === "medium" ? 12 : 10, N = Math.max(t(0), Math.min(t(D), t(C))), z = (te) => {
    if (te == null || m !== "rounded")
      return;
    let ce = {};
    return te === "left" && (ce = { borderRadius: `${w} 0 0 ${w}` }), te === "right" && (ce = { borderRadius: `0 ${w} ${w} 0` }), g === "full" && (ce = { borderRadius: w }), ce;
  }, W = {
    calculate: function() {
      const ce = n[0][_] < D ? "left" : "right", oe = `${r.xAxis.targetLabel} ${a(r.xAxis.target || 0, "left")}`, Se = u(oe, `bold ${A[r.fontSize]}px sans-serif`);
      let Te = r.isLollipopChart ? B / 2 : Number(r.barHeight) / 2, ke = 0, Ie = 0, We = !1;
      ce === "right" && (ke = -10, We = Se - ke < N, Ie = N - Se), ce === "left" && (ke = 10, We = t(C) - N > Se + ke, Ie = N), this.text = oe, this.y = Te, this.x = Ie, this.padding = ke, this.showLabel = r.xAxis.showTargetLabel ? We : !1;
    }
  };
  W.calculate();
  const M = F.useRef(null), H = Xf(M, {});
  F.useEffect(() => {
    const te = () => {
      x(window.innerWidth), E.current.forEach((ce) => {
        ce.style.transition = "none", ce.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", te), () => {
      window.removeEventListener("resize", te);
    };
  }, []);
  const [K, re] = F.useState(!1);
  return F.useEffect(() => {
    H != null && H.isIntersecting && setTimeout(() => {
      re(!0);
    }, 100);
  }, [H == null ? void 0 : H.isIntersecting, r.animate]), F.useEffect(() => {
    E.current.forEach((te, ce) => {
      if (r.animate) {
        const oe = D / C * 100;
        te.style.opacity = "0", te.style.transform = `translate(${oe / 1.07}%) scale(0, 1)`, setTimeout(() => {
          te.style.opacity = "1", te.style.transform = "translate(0) scale(1)", te.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        te.style.transition = "none", te.style.opacity = "0";
      r.animate || (te.style.transition = "none", te.style.opacity = "1");
    });
  }, [r.animate, r, K]), !r || ((ie = r == null ? void 0 : r.series) == null ? void 0 : ie.length) !== 1 ? /* @__PURE__ */ l.createElement(l.Fragment, null) : /* @__PURE__ */ l.createElement(Lr, { component: "Deviation Bar" }, /* @__PURE__ */ l.createElement(He, { left: Number(r.xAxis.size) }, n.map((te, ce) => {
    const oe = Number(te[_]), Se = r.isLollipopChart ? B : Number(r.barHeight), Te = Number(r.barSpace), ke = Math.abs(t(oe) - N), Ie = t(oe), We = oe > D ? N : Ie, De = oe < D ? "left" : "right";
    let le = 0;
    le = ce !== 0 ? (Te + Se + I) * ce : le;
    const ee = (Te + Se + I) * n.length;
    r.heights.horizontal = ee;
    const V = u(a(oe, "left"), `normal ${A[r.fontSize]}px sans-serif`) < ke - 6, Oe = Ie, ae = le + Se / 2, Ne = Ie, Ee = le + Se / 2, Pe = Ie, nt = le - Se / 2, At = z(De), [je, Le] = o[y.palette], Ae = { left: je, right: Le }, ht = ii.contrast("#000000", Ae[De]) < 4.9 ? "#FFFFFF" : "#000000";
    let we = tR(r.isLollipopChart, V, L, ht);
    const Ge = a(oe, "left"), Xe = r.runtime.yAxis.type === "date" ? f(d(n[ce][r.runtime.originalXAxis.dataKey])) : n[ce][r.runtime.originalXAxis.dataKey];
    let Y = r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ${Xe}` : Xe, tt = r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ${Ge}` : Ge;
    const zt = `<div>
          ${Y}<br />
          ${tt}
            </div>`;
    return /* @__PURE__ */ l.createElement(He, { key: `deviation-bar-${r.orientation}-${_}-${ce}` }, /* @__PURE__ */ l.createElement(
      "foreignObject",
      {
        ref: (Kt) => {
          E.current[ce] = Kt;
        },
        x: We,
        y: le,
        width: ke,
        height: Se,
        "data-tooltip-html": zt,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.runtime.uniqueId}`
      },
      /* @__PURE__ */ l.createElement("div", { style: { width: ke, height: Se, border: `${I}px solid #333`, backgroundColor: Ae[De], ...At } })
    ), r.yAxis.displayNumbersOnBar && /* @__PURE__ */ l.createElement(ut, { verticalAnchor: "middle", x: Oe, y: ae, ...we[De] }, a(te[_], "left")), r.isLollipopChart && r.lollipopShape === "circle" && /* @__PURE__ */ l.createElement("circle", { cx: Ne, cy: Ee, r: L / 2, fill: Ae[De], style: { filter: "unset", opacity: 1 } }), r.isLollipopChart && r.lollipopShape === "square" && /* @__PURE__ */ l.createElement("rect", { x: Pe, y: nt, width: L, height: L, fill: Ae[De], style: { opacity: 1, filter: "unset" } }));
  }), W.showLabel && /* @__PURE__ */ l.createElement(ut, { fontWeight: "bold", dx: W.padding, verticalAnchor: "middle", x: W.x, y: W.y }, W.text), O && /* @__PURE__ */ l.createElement(Mt, { from: { x: N, y: 0 }, to: { x: N, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ l.createElement("foreignObject", { y: e / 2, ref: M }));
}
function tR(e, t, n, r) {
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
const nR = ({ xScale: e, yScale: t, height: n, width: r, handleTooltipMouseOver: a, handleTooltipMouseOff: o }) => {
  var y;
  const { transformedData: u, rawData: c, config: d, seriesHighlight: f } = F.useContext(pt), { xAxis: h, yAxis: m, legend: g, runtime: v } = d;
  return u && /* @__PURE__ */ l.createElement(Lr, { component: "ForecastingChart" }, /* @__PURE__ */ l.createElement(He, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(m.size) }, (y = v.forecastingSeriesKeys) == null ? void 0 : y.map((E, b) => !E || !E.stages ? !1 : E.stages.map((x, w) => {
    var $;
    const { behavior: A } = g, D = c.filter((O) => O[E.stageColumn] === x.key);
    let _ = A === "highlight" && f.length > 0 && f.indexOf(x.key) === -1, C = A === "highlight" || f.length === 0 || f.indexOf(x.key) !== -1;
    return /* @__PURE__ */ l.createElement(He, { className: `forecasting-areas-combo-${b}`, key: `forecasting-areas--stage-${x.key.replaceAll(" ", "-")}-${b}` }, ($ = E.confidenceIntervals) == null ? void 0 : $.map((O, I) => {
      const B = oc[x.color] || Ei[x.color] || !1, L = () => C && B[2] ? B[2] : "transparent", N = () => C && B[1] ? B[1] : "transparent";
      if (!(O.high === "" || O.low === ""))
        return /* @__PURE__ */ l.createElement(He, { key: `forecasting-areas--stage-${x.key.replaceAll(" ", "-")}--group-${w}-${I}` }, /* @__PURE__ */ l.createElement(
          yD,
          {
            curve: Dl,
            data: D,
            fill: L(),
            opacity: _ ? 0.1 : 0.5,
            x: (z) => e(Date.parse(z[h.dataKey])),
            y0: (z) => t(z[O.low]),
            y1: (z) => t(z[O.high])
          }
        ), I === 0 && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(aa, { data: D, x: (z) => Number(e(Date.parse(z[h.dataKey]))), y: (z) => Number(t(z[O.high])), curve: Dl, stroke: N(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ l.createElement(aa, { data: D, x: (z) => Number(e(Date.parse(z[h.dataKey]))), y: (z) => Number(t(z[O.low])), curve: Dl, stroke: N(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ l.createElement(He, { key: "tooltip-hover-section" }, /* @__PURE__ */ l.createElement(ar, { key: "bars", width: Number(r), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (E) => a(E, u), onMouseOut: o }))));
};
function kl(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Cc(e, t) {
  const n = e.series.every(({ type: g }) => g === "Bar"), r = e.series.every(({ type: g }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(g)), a = (g) => (v) => g.reduce((y, E) => isNaN(Number(v[E])) ? y : y + Number(v[E]), 0), o = () => {
    let g = Math.max(...t.map((v) => Math.max(...e.runtime.seriesKeys.map((y) => kl(v[y]) ? Number(d(v[y])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const v = t.map(a(e.runtime.seriesKeys)).filter((y) => !isNaN(y));
      g = Math.max(...v);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const v = t.map(a(e.runtime.seriesKeys));
      g = Math.max(...v);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (g = Math.max(...t.map((v) => kl(v[e.series.dataKey]) ? Number(d(v[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const v = t.map(a(e.runtime.barSeriesKeys)), y = Math.max(...t.map((b) => Math.max(...e.runtime.lineSeriesKeys.map((x) => Number(d(b[x])))))), E = Math.max(...v);
      g = Math.max(E, y);
    }
    return g;
  }, u = () => {
    const g = Math.min(...t.map((v) => Math.min(...e.runtime.seriesKeys.map((y) => kl(v[y]) ? Number(d(v[y])) : 1 / 0))));
    return String(g);
  }, c = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((g) => t.some((v) => v[g] >= 0)) : !1, d = (g) => g === null || g === "" ? "" : typeof g == "string" ? g.replace(/[,$]/g, "") : g, f = Number(o()), h = Number(u()), m = c();
  return { minValue: h, maxValue: f, existPositiveValue: m, isAllLine: r };
}
function tp({ config: e, yMax: t = 0, data: n = [], updateConfig: r }) {
  var g, v, y, E;
  const a = e.visualizationType === "Combo" && e.orientation === "vertical", o = e.series && e.series.filter((b) => b.axis === "Right").map((b) => b.dataKey);
  let { minValue: u } = Cc(e, n);
  const c = (b) => {
    if (!b)
      return [0];
    let x = [];
    return b.map((w, A) => x = [...x, ...n.map((D) => Number(D[w]))]), x;
  }, d = Math.max.apply(null, c(o)), f = ((v = (g = e.runtime) == null ? void 0 : g.barSeriesKeys) == null ? void 0 : v.length) > 0, h = ((E = (y = e.runtime) == null ? void 0 : y.lineSeriesKeys) == null ? void 0 : E.length) > 0;
  return (f || h) && u > 0 && (u = 0), { yScaleRight: Cn({
    domain: [u, d],
    range: [t, 0]
  }), hasRightAxis: a };
}
const Av = (e) => {
  var y, E, b, x, w, A;
  const { config: t, d: n, displayArea: r, seriesKey: a, tooltipData: o, xScale: u, yScale: c, colorScale: d, parseDate: f, yScaleRight: h } = e, { lineDatapointStyle: m } = t, g = (y = t == null ? void 0 : t.series.filter((D) => D.dataKey === a)) == null ? void 0 : y[0];
  if (m === "hidden")
    return null;
  const v = (D, _, C, $, O, I) => {
    const B = C.customColors || [], L = C.runtime.seriesLabels || [];
    let N;
    const z = (W) => C.runtime.seriesLabelsAll.indexOf(W);
    if (D)
      if (_) {
        if (z(O) === !1)
          return;
        N = _(L[O] || I);
      } else
        B && (N = B.length > 0 ? _(z(O)) : "transparent");
    else
      N = "transparent";
    return N;
  };
  if (m === "always show")
    return /* @__PURE__ */ l.createElement(
      "circle",
      {
        cx: t.xAxis.type === "categorical" ? u(n[t.xAxis.dataKey]) : u(f(n[t.xAxis.dataKey])),
        cy: g.axis === "Right" ? h(n[g.dataKey]) : c(n[g.dataKey]),
        r: 4.5,
        opacity: n[a] ? 1 : 0,
        fillOpacity: 1,
        fill: r ? d ? d(a) : "#000" : "transparent",
        style: { filter: "unset", opacity: 1 }
      }
    );
  if (m === "hover") {
    if (!o || !o.data)
      return;
    let D = (b = (E = o == null ? void 0 : o.data) == null ? void 0 : E[0]) == null ? void 0 : b[1];
    if (!D)
      return;
    let _, C = o.data.filter((I) => I[0] === a), $ = (x = C == null ? void 0 : C[0]) == null ? void 0 : x[0], O = (w = C == null ? void 0 : C[0]) == null ? void 0 : w[2];
    return o.data.indexOf($), _ = (A = C == null ? void 0 : C[0]) == null ? void 0 : A[1], o.data.map((I, B) => {
      let L = t.runtime.seriesLabelsAll.indexOf(D);
      return isNaN(_) ? /* @__PURE__ */ l.createElement(l.Fragment, null) : /* @__PURE__ */ l.createElement(
        "circle",
        {
          cx: t.xAxis.type === "categorical" ? u(D) : u(f(D)),
          cy: O === "right" ? h(_) : c(_),
          r: 4.5,
          opacity: 1,
          fillOpacity: 1,
          fill: v(r, d, t, L, $, a),
          style: { filter: "unset", opacity: 1 }
        }
      );
    });
  }
  return null;
}, wv = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: r, xMax: a, yMax: o, handleTooltipMouseOver: u, handleTooltipMouseOff: c, showTooltip: d, seriesStyle: f = "Line", svgRef: h, handleTooltipClick: m, tooltipData: g }) => {
  const { transformedData: v, colorScale: y, seriesHighlight: E, config: b, formatNumber: x, formatDate: w, parseDate: A, isNumber: D, updateConfig: _, handleLineType: C, tableData: $ } = F.useContext(pt), { yScaleRight: O } = tp({ config: b, yMax: o, data: v, updateConfig: _ });
  if (u)
    return /* @__PURE__ */ l.createElement(Lr, { component: "LineChart" }, /* @__PURE__ */ l.createElement(He, { left: b.runtime.yAxis.size ? parseInt(b.runtime.yAxis.size) : 66 }, " ", (b.runtime.lineSeriesKeys || b.runtime.seriesKeys).map((I, B) => {
      let L = b.series.filter((M) => M.dataKey === I)[0].type;
      const N = b.series.filter((M) => M.dataKey === I), z = N[0].axis ? N[0].axis : "left";
      let W = b.legend.behavior === "highlight" || E.length === 0 || E.indexOf(I) !== -1;
      return /* @__PURE__ */ l.createElement(
        He,
        {
          key: `series-${I}`,
          opacity: b.legend.behavior === "highlight" && E.length > 0 && E.indexOf(I) === -1 ? 0.5 : 1,
          display: b.legend.behavior === "highlight" || E.length === 0 && !b.legend.dynamicLegend || E.indexOf(I) !== -1 ? "block" : "none"
        },
        v.map((M, H) => {
          const K = b.series.find(({ dataKey: oe }) => oe === I), { axis: re } = K;
          b.runtime.xAxis.type === "date" ? w(A(M[b.runtime.xAxis.dataKey])) : M[b.runtime.xAxis.dataKey], r(M, I);
          const ie = Object.keys(b.runtime.seriesLabels).length > 1, te = re === "Right" ? "rightLabel" : "label";
          let ce = b.runtime.yAxis[te];
          return ie || (ce = b.isLegendValue ? b.runtime.seriesLabels[I] : ce), M[I] !== void 0 && M[I] !== "" && M[I] !== null && D(M[I]) && /* @__PURE__ */ l.createElement(He, { key: `series-${I}-point-${H}`, className: "checkwidth" }, /* @__PURE__ */ l.createElement(ar, { key: "bars", width: Number(a), height: Number(o), fill: "transparent", fillOpacity: 0.05, onMouseMove: (oe) => u(oe, $), onMouseOut: c, onClick: (oe) => m(oe, v) }), /* @__PURE__ */ l.createElement(ut, { display: b.labels ? "block" : "none", x: e(n(M)), y: z === "Right" ? O(r(M, I)) : t(r(M, I)), fill: "#000", textAnchor: "middle" }, x(M[I], "left")), b.lineDatapointStyle === "hidden" || b.lineDatapointStyle === "always show" && /* @__PURE__ */ l.createElement(Av, { d: M, config: b, seriesKey: I, displayArea: W, tooltipData: g, xScale: e, yScale: t, colorScale: y, parseDate: A, yScaleRight: O }));
        }),
        /* @__PURE__ */ l.createElement(l.Fragment, null, b.lineDatapointStyle === "hover" && /* @__PURE__ */ l.createElement(Av, { config: b, seriesKey: I, displayArea: W, tooltipData: g, xScale: e, yScale: t, colorScale: y, parseDate: A, yScaleRight: O, seriesAxis: z })),
        /* @__PURE__ */ l.createElement(
          aa,
          {
            curve: Jf[N[0].lineType],
            data: v,
            x: (M) => e(n(M)),
            y: (M) => z === "Right" ? O(r(M, I)) : t(r(M, I)),
            stroke: y ? y(b.runtime.seriesLabels[I]) : "#000",
            strokeWidth: 2,
            strokeOpacity: 1,
            strokeDasharray: L ? C(L) : 0,
            defined: (M, H) => M[I] !== "" && M[I] !== null && M[I] !== void 0
          }
        ),
        b.animate && /* @__PURE__ */ l.createElement(
          aa,
          {
            className: "animation",
            curve: N.lineType,
            data: v,
            x: (M) => e(n(M)),
            y: (M) => z === "Right" ? O(r(M, I)) : t(r(M, I)),
            stroke: "#fff",
            strokeWidth: 3,
            strokeOpacity: 1,
            shapeRendering: "geometricPrecision",
            strokeDasharray: L ? C(L) : 0,
            defined: (M, H) => D(M[b.runtime.seriesLabels[I]])
          }
        ),
        b.showLineSeriesLabels && (b.runtime.lineSeriesKeys || b.runtime.seriesKeys).map((M) => {
          let H;
          for (let K = v.length - 1; K >= 0; K--)
            if (v[K][M]) {
              H = v[K];
              break;
            }
          return H ? /* @__PURE__ */ l.createElement("text", { x: e(n(H)) + 5, y: t(r(H, M)), alignmentBaseline: "middle", fill: b.colorMatchLineSeriesLabels && y ? y(b.runtime.seriesLabels[M] || M) : "black" }, b.runtime.seriesLabels[M] || M) : /* @__PURE__ */ l.createElement(l.Fragment, null);
        })
      );
    }), b.legend.dynamicLegend && E.length === 0 && /* @__PURE__ */ l.createElement(ut, { x: a / 2, y: o / 2, fill: "black", textAnchor: "middle", color: "black" }, b.legend.dynamicLegendChartMessage)));
};
function xb(e) {
  var t = e.top, n = t === void 0 ? 0 : t, r = e.left, a = r === void 0 ? 0 : r, o = e.className, u = e.children;
  return /* @__PURE__ */ l.createElement(He, {
    className: Yt("visx-glyph", o),
    top: n,
    left: a
  }, u);
}
xb.propTypes = {
  top: G.number,
  left: G.number,
  className: G.string,
  children: G.node
};
var rR = ["children", "className", "top", "left", "size"];
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, of.apply(this, arguments);
}
function iR(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function bb(e) {
  var t = e.children, n = e.className, r = e.top, a = e.left, o = e.size, u = iR(e, rR), c = LT();
  return c.type(kT), (typeof o == "number" || o) && c.size(o), t ? /* @__PURE__ */ l.createElement(l.Fragment, null, t({
    path: c
  })) : /* @__PURE__ */ l.createElement(xb, {
    top: r,
    left: a
  }, /* @__PURE__ */ l.createElement("path", of({
    className: Yt("visx-glyph-diamond", n),
    d: c() || ""
  }, u)));
}
bb.propTypes = {
  children: G.func,
  className: G.string,
  top: G.number,
  left: G.number,
  size: G.oneOfType([G.number, G.func])
};
const aR = (e) => {
  const { transformedData: t, updateConfig: n, dimensions: r, rawData: a } = F.useContext(pt), { xScale: o, yScale: u, config: c, height: d, width: f, handleTooltipMouseOff: h, handleTooltipMouseOver: m, maxWidth: g, maxHeight: v } = e, { forestPlot: y, runtime: E, dataFormat: b } = c;
  F.useEffect(() => {
    c.legend.hide || n({
      ...c,
      legend: {
        ...c.legend,
        hide: !0
      },
      xAxis: {
        ...c.xAxis,
        size: 0
      }
    });
  }, []);
  const x = 5, w = [
    { x: o(y.regression.lower), y: d - Number(c.forestPlot.rowHeight) },
    { x: o(y.regression.estimateField), y: d - x - Number(c.forestPlot.rowHeight) },
    { x: o(y.regression.upper), y: d - Number(c.forestPlot.rowHeight) },
    { x: o(y.regression.estimateField), y: d + x - Number(c.forestPlot.rowHeight) },
    { x: o(y.regression.lower), y: d - Number(c.forestPlot.rowHeight) }
  ], A = c.forestPlot.rowHeight, D = [
    { x: 0, y: A },
    { x: f, y: A }
  ], _ = [
    { x: 0, y: d },
    { x: f, y: d }
  ], C = Object.entries(c.columns).map(($) => $[1]).filter(($) => $.forestPlot === !0);
  return y.rightWidthOffset !== 0 && Number(y.rightWidthOffset) / 100 * f, y.leftWidthOffset !== 0 && Number(y.leftWidthOffset) / 100 * f, /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(He, null, y.title !== "" && /* @__PURE__ */ l.createElement(ut, { className: "forest-plot--title", x: o(0), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Ca(c.fontSize), fill: "black" }, y.title), y.regression.showBaseLine && /* @__PURE__ */ l.createElement(Mt, { from: { x: o(y.regression.estimateField), y: 0 + A }, to: { x: o(y.regression.estimateField), y: d }, className: "forestplot__baseline", stroke: y.regression.baseLineColor || "black" }), y.showZeroLine && /* @__PURE__ */ l.createElement(Mt, { from: { x: o(0), y: 0 + A }, to: { x: o(0), y: d }, className: "forestplot__zero-line", stroke: "gray", strokeDasharray: "5 5" }), t.map(($, O) => {
    const I = Cn({
      domain: o.domain(),
      range: [y.radius.min, y.radius.max]
    }), B = y.radius.scalingColumn !== "" ? I(t[O][y.estimateField]) * 5 : 4, L = y.radius.scalingColumn !== "" ? I(t[O][y.estimateField]) : 4, N = y.colors.shape ? y.colors.shape : "black", z = y.colors.line ? y.colors.line : "black", W = 4;
    return /* @__PURE__ */ l.createElement(He, null, /* @__PURE__ */ l.createElement(
      "path",
      {
        stroke: z,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${o($[y.lower])} ${u(O) - Number(W)}
                    L${o($[y.lower])} ${u(O) + Number(W)}
                `
      }
    ), /* @__PURE__ */ l.createElement(
      "path",
      {
        stroke: z,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${o($[y.upper])} ${u(O) - Number(W)}
                    L${o($[y.upper])} ${u(O) + Number(W)}
                `
      }
    ), /* @__PURE__ */ l.createElement("line", { stroke: z, className: `line-${$[c.yAxis.dataKey]}`, key: O, x1: o($[y.lower]), x2: o($[y.upper]), y1: u(O), y2: u(O) }), y.shape === "circle" && /* @__PURE__ */ l.createElement(oT, { className: "forest-plot--circle", cx: o(Number($[y.estimateField])), cy: u(O), r: y.radius.scalingColumn !== "" ? I(t[O][y.estimateField]) : 4, fill: N, style: { opacity: 1, filter: "unset" } }), y.shape === "square" && /* @__PURE__ */ l.createElement("rect", { className: "forest-plot--square", x: o(Number($[y.estimateField])), y: u(O) - L / 2, width: L, height: L, fill: N, style: { opacity: 1, filter: "unset" } }), y.shape === "diamond" && /* @__PURE__ */ l.createElement(bb, { className: "forest-plot--diamond", size: B, top: u(O), left: o(Number($[y.estimateField])), fill: N }), y.shape === "text" && /* @__PURE__ */ l.createElement(ut, { className: "forest-plot--text", x: o(Number($[y.estimateField])), y: u(O), textAnchor: "middle", verticalAnchor: "middle", fontSize: Ca(c.fontSize), fill: N }, $[y.estimateField]));
  }), w && y.regression.showDiamond && /* @__PURE__ */ l.createElement(aa, { data: w, x: ($) => $.x, y: ($) => $.y, stroke: "black", strokeWidth: 2, fill: y.regression.baseLineColor, curve: Xy }), y.regression.description && /* @__PURE__ */ l.createElement(ut, { x: 0 - Number(c.xAxis.size), width: f, y: d - c.forestPlot.rowHeight - Number(y.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, y.regression.description), /* @__PURE__ */ l.createElement(ar, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: f, height: d, fill: "transparent", fillOpacity: 0.5, onMouseMove: ($) => m($, t), onMouseOut: h })), /* @__PURE__ */ l.createElement(Mt, { from: D[0], to: D[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ l.createElement(Mt, { from: _[0], to: _[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), C.map(($) => a.map((O, I) => /* @__PURE__ */ l.createElement(ut, { className: `${O[$.name]}`, x: $.forestPlotAlignRight ? f : $.forestPlotStartingPoint, y: u(I), textAnchor: $.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Ca(c.fontSize), fill: "black" }, O[$.name]))), !y.hideDateCategoryCol && t.map(($, O) => /* @__PURE__ */ l.createElement(ut, { className: `${$[c.xAxis.dataKey]}`, x: 0, y: u(O), textAnchor: "start", verticalAnchor: "middle", fontSize: Ca(c.fontSize), fill: "black" }, $[c.xAxis.dataKey])), !y.hideDateCategoryCol && c.xAxis.dataKey && /* @__PURE__ */ l.createElement(ut, { className: c.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Ca(c.fontSize), fill: "black" }, c.xAxis.dataKey), C.map(($) => /* @__PURE__ */ l.createElement(ut, { className: `${$.label}`, x: $.forestPlotAlignRight ? f : $.forestPlotStartingPoint, y: 0, textAnchor: $.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Ca(c.fontSize), fill: "black" }, $.label)));
}, oR = ({ width: e, height: t, originalWidth: n }) => {
  var D;
  const { config: r, colorScale: a, transformedData: o, formatNumber: u, seriesHighlight: c, getTextWidth: d } = F.useContext(pt);
  if (!r || ((D = r == null ? void 0 : r.series) == null ? void 0 : D.length) < 2)
    return;
  const f = r.barHasBorder === "true" ? 1 : 0, h = e / 2, m = { small: 16, medium: 18, large: 20 }, g = 1.02, v = {
    parentKey: r.dataDescription.seriesKey,
    dataKey: r.series[0].dataKey,
    color: a(r.runtime.seriesLabels[r.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((_) => _[r.series[0].dataKey])
    ),
    labelColor: ""
  }, y = {
    parentKey: r.dataDescription.seriesKey,
    dataKey: r.series[1].dataKey,
    color: a(r.runtime.seriesLabels[r.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((_) => _[r.series[1].dataKey])
    ),
    labelColor: ""
  }, E = Cn({
    domain: [0, Math.max(v.max * g, y.max * 1.1)],
    range: [0, h]
  });
  let b = "#000000";
  ii.contrast(b, v.color) < 4.9 && (v.labelColor = "#FFFFFF"), ii.contrast(b, y.color) < 4.9 && (y.labelColor = "#FFFFFF");
  const x = r.yAxis.label ? `${r.yAxis.label}: ` : "", w = (_) => `<p>
				${r.dataDescription.seriesKey}: ${v.dataKey}<br/>
				${r.xAxis.dataKey}: ${_[r.xAxis.dataKey]}<br/>
				${x}${u(_[v.dataKey], "left")}
			</p>`, A = (_) => `<p>
				${r.dataDescription.seriesKey}: ${y.dataKey}<br/>
				${r.xAxis.dataKey}: ${_[r.xAxis.dataKey]}<br/>
				${x}${u(_[y.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ l.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(r.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ l.createElement(He, { top: 0, left: Number(r.xAxis.size) }, o.filter((_) => r.series[0].dataKey === v.dataKey).map((_, C) => {
    let $ = r.legend.behavior === "highlight" && c.length > 0 && c.indexOf(r.series[0].dataKey) === -1, O = r.legend.behavior === "highlight" || c.length === 0 || c.indexOf(r.series[0].dataKey) !== -1, I = E(_[r.series[0].dataKey]), B = Number(r.barHeight) ? Number(r.barHeight) : 25, L = 0;
    L = C !== 0 ? (Number(r.barSpace) + B + f) * C : L;
    const N = (Number(r.barSpace) + B + f) * o.length;
    r.heights.horizontal = N;
    const W = d(u(_[v.dataKey], "left"), `normal ${m[r.fontSize]}px sans-serif`) < I - 5;
    return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(He, { key: `group-${v.dataKey}-${_[r.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ l.createElement(
      ar,
      {
        id: `bar-${v.dataKey}-${_[r.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${v.dataKey}-${_[r.dataDescription.xKey]}`,
        x: h - I,
        y: L,
        width: E(_[r.series[0].dataKey]),
        height: B,
        fill: v.color,
        "data-tooltip-html": w(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: f,
        opacity: $ ? 0.5 : 1,
        display: O ? "block" : "none"
      }
    ), r.yAxis.displayNumbersOnBar && O && /* @__PURE__ */ l.createElement(ut, { textAnchor: W ? "start" : "end", dx: W ? 5 : -5, verticalAnchor: "middle", x: h - I, y: L + r.barHeight / 2, fill: W ? v.labelColor : "#000" }, u(_[v.dataKey], "left"))));
  }), o.filter((_) => r.series[1].dataKey === y.dataKey).map((_, C) => {
    let $ = E(_[r.series[1].dataKey]), O = r.legend.behavior === "highlight" && c.length > 0 && c.indexOf(r.series[1].dataKey) === -1, I = r.legend.behavior === "highlight" || c.length === 0 || c.indexOf(r.series[1].dataKey) !== -1, B = r.barHeight ? Number(r.barHeight) : 25, L = 0;
    L = C !== 0 ? (Number(r.barSpace) + B + f) * C : L;
    const N = (Number(r.barSpace) + B + f) * o.length;
    r.heights.horizontal = N;
    const W = d(u(_[y.dataKey], "left"), `normal ${m[r.fontSize]}px sans-serif`) < $ - 5;
    return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("style", null, `
                      .bar-${y.dataKey}-${_[r.xAxis.dataKey]} {
                          transform-origin: ${h}px ${L}px
                      }
							      `), /* @__PURE__ */ l.createElement(He, { key: `group-${y.dataKey}-${_[r.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ l.createElement(
      ar,
      {
        id: `bar-${y.dataKey}-${_[r.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${y.dataKey}-${_[r.dataDescription.xKey]}`,
        x: h,
        y: L,
        width: E(_[r.series[1].dataKey]),
        height: B,
        fill: y.color,
        "data-tooltip-html": A(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.runtime.uniqueId}`,
        strokeWidth: f,
        stroke: "#333",
        opacity: O ? 0.5 : 1,
        display: I ? "block" : "none"
      }
    ), r.yAxis.displayNumbersOnBar && I && /* @__PURE__ */ l.createElement(ut, { textAnchor: W ? "end" : "start", dx: W ? -5 : 5, verticalAnchor: "middle", x: h + $, y: L + r.barHeight / 2, fill: W ? y.labelColor : "#000" }, u(_[y.dataKey], "left"))));
  }))));
}, sR = ({ config: e, minValue: t, maxValue: n, existPositiveValue: r, data: a, isAllLine: o }) => {
  let u = 0, c = 0;
  if (!a)
    return { min: u, max: c };
  const { max: d, min: f } = e.runtime.yAxis, h = 1.15, m = r ? d >= n : d >= 0, g = e.useLogScale ? f >= 0 : f <= 0 && t >= 0 || f <= t && t < 0;
  u = f && g ? f : t, c = d && m ? d : Number.MIN_VALUE;
  let v = 0;
  if (e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Deviation Bar") {
    let y = 0;
    if (e.hasOwnProperty("confidenceKeys")) {
      let E = a.map(function(x) {
        return x[e.confidenceKeys.upper];
      });
      y = Math.max.apply(Math, E), y > c && (c = y * h);
      let b = a.map(function(x) {
        return x[e.confidenceKeys.lower] !== void 0 ? x[e.confidenceKeys.lower] : "";
      });
      v = Math.min.apply(Math, b), v < u && (u = v * h);
    }
  }
  if (e.visualizationType === "Forecasting") {
    const {
      runtime: { forecastingSeriesKeys: y }
    } = e;
    if (y.length > 0) {
      let E = [];
      y.forEach((A) => {
        var D;
        (D = A.confidenceIntervals) == null || D.map((_) => {
          E.push(_.high), E.push(_.low);
        });
      });
      const b = a.map((A) => E.map((D) => A[D])), x = Math.max.apply(
        null,
        b.map((A) => A[0])
      ), w = Math.min.apply(
        null,
        b.map((A) => A[1])
      );
      x > c && (c = x), w < u && (u = w);
    }
  }
  if ((e.visualizationType === "Bar" && v >= 0 || e.visualizationType === "Combo" && !o) && u > 0 && (u = 0), e.visualizationType === "Combo" && o && ((f == null || f === "") && u > 0 && (u = 0), f)) {
    const y = e.useLogScale ? f >= 0 && f < t : f < t;
    u = f && y ? f : t;
  }
  if (e.visualizationType === "Deviation Bar" && u > 0) {
    const y = Number(f) < Math.min(t, Number(e.xAxis.target));
    u = f && y ? f : 0;
  }
  if (e.visualizationType === "Line") {
    const y = e.useLogScale ? f >= 0 && f < t : f < t;
    u = f && y ? f : t;
  }
  if (c === Number.MIN_VALUE && (c = r ? n : 0), e.runtime.yAxis.paddingPercent) {
    let y = (c - u) * e.runtime.yAxis.paddingPercent;
    u -= y, c += y;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const y = a.map((b) => b[e.series[0].dataKey]), E = Math.max(...y).toString().length;
    switch (!0) {
      case (E > 8 && E <= 12):
        c = c * 1.3;
        break;
      case (E > 4 && E <= 7):
        c = c * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (u < 0 ? (c *= 1.2, u *= 1.2) : c *= 1.1), { min: u, max: c };
}, lR = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: r, min: a, max: o, config: u, data: c } = e;
  const { rawData: d, dimensions: f } = F.useContext(pt), [h, m] = f, g = u.runtime.barSeriesKeys || u.runtime.seriesKeys, v = u.runtime.xAxis.type, y = u.orientation === "horizontal", E = (B) => B[u.runtime.originalXAxis.dataKey], b = c.map((B) => E(B)), { visualizationType: x } = u;
  let w = null, A = null, D = null, _ = null, C = null, $ = null, O = null;
  const I = {
    TIME: "time",
    LOG: "log",
    POINT: "point",
    LINEAR: "linear",
    BAND: "band"
  };
  if (y && (w = cR({ min: a * 1.03, ...e }), w.type = u.useLogScale ? I.LOG : I.LINEAR, A = dR(v, t), A.rangeRound([0, r]), C = Al(g, [0, r])), y || (O = Al(b, [0, n], 0.5), w = Al(t, [0, n], 0.5), w.type = I.POINT, A = uR(e), C = Al(g, [0, n])), u.xAxis.type === "date" && u.xAxis.sortDates && (w = nN({
    domain: [Math.min(...t), Math.max(...t)],
    range: [0, n]
  }), O = w, w.type = I.LINEAR), u.visualizationType === "Deviation Bar") {
    const B = u.isLollipopChart ? 1.05 : 1.03;
    A = wg({
      domain: t,
      range: [0, r]
    }), w = Cn({
      domain: [a * B, Math.max(Number(u.xAxis.target), o)],
      range: [0, n],
      round: !0,
      nice: !0
    }), w.type = I.LINEAR;
  }
  if (u.visualizationType === "Scatter Plot" && u.xAxis.type === "continuous" && (w = Cn({
    domain: [0, Math.max.apply(null, w.domain())],
    range: [0, n]
  }), w.type = I.LINEAR), x === "Box Plot") {
    const B = [];
    if (u.boxplot.plots.map((W) => W.columnOutliers.map((M) => B.push(M))) && !u.boxplot.hideOutliers) {
      let W = Math.min(...B), M = Math.max(...B);
      W < a && (a = W), M > o && (o = M);
    }
    let N = Math.min(...u.boxplot.plots.map((W) => W.columnLowerBounds)), z = Math.max(...u.boxplot.plots.map((W) => W.columnUpperBounds));
    N < a && (a = N), z > o && (o = z), A = Cn({
      range: [r, 0],
      round: !0,
      domain: [a, o]
    }), w = wg({
      range: [0, n],
      round: !0,
      domain: u.boxplot.categories,
      padding: 0.4
    }), w.type = I.BAND;
  }
  if (x === "Paired Bar") {
    let L = Math.max.apply(
      Math,
      c.map((z) => {
        var W;
        return z[(W = u.series[0]) == null ? void 0 : W.dataKey];
      })
    ), N = Math.max.apply(
      Math,
      c.map((z) => {
        var W;
        return z[(W = u.series[1]) == null ? void 0 : W.dataKey];
      })
    );
    _ = Cn({
      domain: [0, Math.max(L, N) * 1.02],
      range: [n / 2, 0]
    }), D = Cn({
      domain: _.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (x === "Forest Plot") {
    const B = () => u.forestPlot.regression.showDiamond || u.forestPlot.regression.description ? [0 + u.forestPlot.rowHeight * 2, r - u.forestPlot.rowHeight] : [0 + u.forestPlot.rowHeight * 2, r];
    A = Cn({
      domain: [0, d.length],
      range: B()
    });
    const L = 5, N = Number(u.forestPlot.leftWidthOffset) / 100 * n, z = Number(u.forestPlot.rightWidthOffset) / 100 * n, W = Number(u.forestPlot.rightWidthOffsetMobile) / 100 * n, M = Number(u.forestPlot.leftWidthOffsetMobile) / 100 * n;
    h > 480 ? w = Cn({
      domain: [Math.min(...c.map((H) => parseFloat(H[u.forestPlot.lower]))) - L, Math.max(...c.map((H) => parseFloat(H[u.forestPlot.upper]))) + L],
      range: [N, n - z],
      type: "linear"
    }) : w = Cn({
      domain: [Math.min(...c.map((H) => parseFloat(H[u.forestPlot.lower]))) - L, Math.max(...c.map((H) => parseFloat(H[u.forestPlot.upper]))) + L],
      range: [M, n - W],
      type: "linear"
    });
  }
  return { xScale: w, yScale: A, seriesScale: C, g1xScale: _, g2xScale: D, xScaleNoPadding: $, xScaleBrush: O };
}, cR = ({ min: e, max: t, xMax: n, config: r }) => (e = r.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (r.useLogScale ? cx : Cn)({
  domain: [e, t],
  range: [0, n],
  nice: r.useLogScale,
  zero: r.useLogScale,
  type: r.useLogScale ? "log" : "linear"
})), uR = ({ min: e, max: t, yMax: n, config: r }) => (e = r.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (r.useLogScale ? cx : Cn)({
  domain: [e, t],
  range: [n, 0],
  nice: r.useLogScale,
  zero: r.useLogScale
})), dR = (e, t) => e === "date" ? Cn({
  domain: [Math.min(...t), Math.max(...t)]
}) : La({ domain: t, padding: 0.5 }), Al = (e, t, n = 0) => La({
  domain: e,
  range: t,
  padding: n,
  type: "point"
});
function fR(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
var np = {};
const pR = /* @__PURE__ */ Df(Hk), hR = /* @__PURE__ */ Df(Qk);
var rp = {};
rp.__esModule = !0;
rp.default = mR;
var wl = F;
function mR(e) {
  var t = (0, wl.useState)(e), n = t[0], r = t[1], a = (0, wl.useRef)(null), o = (0, wl.useCallback)(function(u, c) {
    a.current = c || null, r(u);
  }, [r]);
  return (0, wl.useLayoutEffect)(function() {
    a.current && (a.current(n), a.current = null);
  }, [n]), [n, o];
}
var ip = {}, ap = {};
ap.__esModule = !0;
ap.default = gR;
function gR(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var op = {};
op.__esModule = !0;
op.default = xR;
function vR(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = yR(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yR(e, t) {
  if (e) {
    if (typeof e == "string")
      return _v(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _v(e, t);
  }
}
function _v(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function xR(e, t) {
  for (var n = e, r = 1 / 0, a = vR(t), o; !(o = a()).done; ) {
    var u = o.value, c = Math.sqrt(Math.pow(u.x - e.x, 2) + Math.pow(u.y - e.y, 2));
    c < r && (r = c, n = {
      x: u.x,
      y: u.y
    });
  }
  return n;
}
ip.__esModule = !0;
ip.default = ER;
var Cv = Eb(ap), bR = Eb(op);
function Eb(e) {
  return e && e.__esModule ? e : { default: e };
}
function ER(e, t, n) {
  var r, a, o, u;
  return n === void 0 && (n = {}), t.length > 0 ? (0, bR.default)(e, t) : {
    x: (0, Cv.default)(e.x, (r = n.xMin) != null ? r : -1 / 0, (a = n.xMax) != null ? a : 1 / 0),
    y: (0, Cv.default)(e.y, (o = n.yMin) != null ? o : -1 / 0, (u = n.yMax) != null ? u : 1 / 0)
  };
}
var sp = {};
sp.__esModule = !0;
sp.default = wR;
var SR = F;
function AR(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var r = [], a = e.getTotalLength(), o = 0; o <= a; o += n) {
    var u = e.getPointAtLength(o), c = u.matrixTransform(t);
    r.push(c);
  }
  return r;
}
function wR(e) {
  var t = (0, SR.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return AR(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
np.__esModule = !0;
np.default = TR;
var Gi = F, Pa = pR, Tv = hR, _R = lp(rp), Dv = lp(ip), CR = lp(sp);
function lp(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vr() {
  return Vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vr.apply(this, arguments);
}
function TR(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, r = n === void 0 ? !1 : n, a = t.snapToPointer, o = a === void 0 ? !0 : a, u = t.onDragEnd, c = t.onDragMove, d = t.onDragStart, f = t.x, h = t.y, m = t.dx, g = t.dy, v = t.isDragging, y = t.restrict, E = y === void 0 ? {} : y, b = t.restrictToPath, x = (0, Gi.useRef)({
    x: f,
    y: h,
    dx: m,
    dy: g
  }), w = (0, _R.default)({
    x: f,
    y: h,
    dx: m ?? 0,
    dy: g ?? 0,
    isDragging: !1
  }), A = w[0], D = w[1], _ = (0, Gi.useState)(new Pa.Point({
    x: 0,
    y: 0
  })), C = _[0], $ = _[1];
  (0, Gi.useEffect)(function() {
    (x.current.x !== f || x.current.y !== h || x.current.dx !== m || x.current.dy !== g) && (x.current = {
      x: f,
      y: h,
      dx: m,
      dy: g
    }, D(function(N) {
      return Vr({}, N, {
        x: f,
        y: h,
        dx: m ?? 0,
        dy: g ?? 0
      });
    }));
  }), (0, Gi.useEffect)(function() {
    v !== void 0 && A.isDragging !== v && D(function(N) {
      return Vr({}, N, {
        isDragging: v
      });
    });
  }, [A.isDragging, v, D]);
  var O = (0, CR.default)(b), I = (0, Gi.useCallback)(function(N) {
    N.persist(), D(function(z) {
      var W = z.x, M = W === void 0 ? 0 : W, H = z.y, K = H === void 0 ? 0 : H, re = z.dx, ie = z.dy, te = new Pa.Point({
        x: (M || 0) + re,
        y: (K || 0) + ie
      }), ce = (0, Tv.localPoint)(N) || new Pa.Point({
        x: 0,
        y: 0
      }), oe = o ? ce : te, Se = (0, Dv.default)(oe, O, E);
      return $((0, Pa.subtractPoints)(te, ce)), {
        isDragging: !0,
        dx: r ? 0 : z.dx,
        dy: r ? 0 : z.dy,
        x: r ? Se.x : Se.x - z.dx,
        y: r ? Se.y : Se.y - z.dy
      };
    }, d && function(z) {
      d(Vr({}, z, {
        event: N
      }));
    });
  }, [d, r, E, O, D, o]), B = (0, Gi.useCallback)(function(N) {
    N.persist(), D(function(z) {
      if (!z.isDragging)
        return z;
      var W = z.x, M = W === void 0 ? 0 : W, H = z.y, K = H === void 0 ? 0 : H, re = (0, Tv.localPoint)(N) || new Pa.Point({
        x: 0,
        y: 0
      }), ie = o ? re : (0, Pa.sumPoints)(re, C), te = (0, Dv.default)(ie, O, E);
      return Vr({}, z, {
        dx: te.x - M,
        dy: te.y - K
      });
    }, c && function(z) {
      z.isDragging && c(Vr({}, z, {
        event: N
      }));
    });
  }, [D, c, o, C, O, E]), L = (0, Gi.useCallback)(function(N) {
    N.persist(), D(function(z) {
      return Vr({}, z, {
        isDragging: !1
      });
    }, u && function(z) {
      u(Vr({}, z, {
        event: N
      }));
    });
  }, [u, D]);
  return Vr({}, A, {
    dragEnd: L,
    dragMove: B,
    dragStart: I
  });
}
var Tc = Sb, Co = cp(Cy), sd = cp(F), DR = cp(np);
function cp(e) {
  return e && e.__esModule ? e : { default: e };
}
function Sb(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, r = e.snapToPointer, a = r === void 0 ? !0 : r, o = e.children, u = e.dx, c = e.dy, d = e.height, f = e.onDragEnd, h = e.onDragMove, m = e.onDragStart, g = e.resetOnStart, v = e.width, y = e.x, E = e.y, b = e.isDragging, x = e.restrict, w = e.restrictToPath, A = (0, DR.default)({
    resetOnStart: g,
    snapToPointer: a,
    onDragEnd: f,
    onDragMove: h,
    onDragStart: m,
    x: y,
    y: E,
    dx: u,
    dy: c,
    isDragging: b,
    restrict: x,
    restrictToPath: w
  });
  return /* @__PURE__ */ sd.default.createElement(sd.default.Fragment, null, A.isDragging && n && /* @__PURE__ */ sd.default.createElement("rect", {
    width: v,
    height: d,
    onPointerDown: A.dragStart,
    onPointerMove: A.dragMove,
    onPointerUp: A.dragEnd,
    fill: "transparent"
  }), o(A));
}
Sb.propTypes = {
  children: Co.default.func.isRequired,
  width: Co.default.number.isRequired,
  height: Co.default.number.isRequired,
  captureDragArea: Co.default.bool,
  isDragging: Co.default.bool
};
function sc(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var n = e.range(), r = n[0], a = n[1], o = 0, u = "step" in e && typeof e.step < "u" ? e.step() : 1, c = u * (a - r) / Math.abs(a - r);
  if (c > 0)
    for (; t > r + c * (o + 1); )
      o += 1;
  else
    for (; t < r + c * (o + 1); )
      o += 1;
  return o;
}
function Nv(e, t, n, r) {
  var a, o = sc(e, t + (t < n ? -r : r)), u = sc(e, n + (n < t ? -r : r)), c = Math.min(o, u), d = Math.max(o, u);
  if ("invert" in e && typeof e.invert < "u")
    a = {
      start: c,
      end: d
    };
  else {
    for (var f = [], h = e.domain(), m = c; m <= d; m += 1)
      f.push(h[m]);
    a = {
      values: f
    };
  }
  return a;
}
function up(e) {
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
function vr() {
  return vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vr.apply(this, arguments);
}
function NR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, sf(e, t);
}
function sf(e, t) {
  return sf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, sf(e, t);
}
var Ab = /* @__PURE__ */ function(e) {
  NR(t, e);
  function t() {
    for (var r, a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(o)) || this, r.handleDragStart = function(c) {
      var d = r.props, f = d.onBrushHandleChange, h = d.type, m = d.onBrushStart;
      f && f(h, up(c.event)), m && m(c);
    }, r.handleDragMove = function(c) {
      var d = r.props, f = d.updateBrush, h = d.type, m = d.isControlled;
      !c.isDragging || m || f(function(g) {
        var v = g.start, y = g.end, E = 0, b = Math.max(v.x, y.x), x = Math.min(v.x, y.x), w = Math.max(v.y, y.y), A = Math.min(v.y, y.y);
        switch (h) {
          case "right":
            return E = b + c.dx, vr({}, g, {
              activeHandle: h,
              extent: vr({}, g.extent, {
                x0: Math.max(Math.min(E, v.x), g.bounds.x0),
                x1: Math.min(Math.max(E, v.x), g.bounds.x1)
              })
            });
          case "left":
            return E = x + c.dx, vr({}, g, {
              activeHandle: h,
              extent: vr({}, g.extent, {
                x0: Math.min(E, y.x),
                x1: Math.max(E, y.x)
              })
            });
          case "bottom":
            return E = w + c.dy, vr({}, g, {
              activeHandle: h,
              extent: vr({}, g.extent, {
                y0: Math.min(E, v.y),
                y1: Math.max(E, v.y)
              })
            });
          case "top":
            return E = A + c.dy, vr({}, g, {
              activeHandle: h,
              extent: vr({}, g.extent, {
                y0: Math.min(E, y.y),
                y1: Math.max(E, y.y)
              })
            });
          default:
            return g;
        }
      });
    }, r.handleDragEnd = function() {
      var c = r.props, d = c.updateBrush, f = c.onBrushEnd, h = c.onBrushHandleChange, m = c.isControlled;
      m || d(function(g) {
        var v = g.start, y = g.end, E = g.extent;
        v.x = Math.min(E.x0, E.x1), v.y = Math.min(E.y0, E.y0), y.x = Math.max(E.x0, E.x1), y.y = Math.max(E.y0, E.y1);
        var b = vr({}, g, {
          start: v,
          end: y,
          activeHandle: null,
          isBrushing: !1,
          extent: {
            x0: Math.min(v.x, y.x),
            x1: Math.max(v.x, y.x),
            y0: Math.min(v.y, y.y),
            y1: Math.max(v.y, y.y)
          }
        });
        return f && f(b), b;
      }), h && h();
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var a = this, o = this.props, u = o.stageWidth, c = o.stageHeight, d = o.brush, f = o.type, h = o.handle, m = o.isControlled, g = o.isDragInProgress, v = o.renderBrushHandle, y = h.x, E = h.y, b = h.width, x = h.height, w = f === "right" || f === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ l.createElement(Tc, {
      width: u,
      height: c,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: m ? g : void 0
    }, function(A) {
      var D = A.dragStart, _ = A.dragEnd, C = A.dragMove, $ = A.isDragging;
      return /* @__PURE__ */ l.createElement("g", null, $ && /* @__PURE__ */ l.createElement("rect", {
        fill: "transparent",
        width: u,
        height: c,
        style: {
          cursor: w
        },
        onPointerMove: C,
        onPointerUp: m ? void 0 : _,
        onPointerLeave: m ? void 0 : _
      }), !v && /* @__PURE__ */ l.createElement("rect", {
        x: y,
        y: E,
        width: b,
        height: x,
        fill: "transparent",
        className: "visx-brush-handle-" + f,
        onPointerDown: D,
        onPointerMove: C,
        onPointerUp: m ? void 0 : _,
        style: {
          cursor: w,
          pointerEvents: d.activeHandle || d.isBrushing ? "none" : "all"
        }
      }), v && /* @__PURE__ */ l.createElement("g", {
        onPointerDown: D,
        onPointerMove: C,
        onPointerUp: m ? void 0 : _
      }, v(vr({}, a.props.handle, {
        height: c,
        className: "visx-brush-handle-" + f,
        isBrushActive: d.extent.x0 !== -1 && d.extent.x1 !== -1
      }))));
    });
  }, t;
}(l.Component);
Ab.propTypes = {
  stageWidth: G.number.isRequired,
  stageHeight: G.number.isRequired,
  updateBrush: G.func.isRequired,
  onBrushStart: G.func,
  onBrushEnd: G.func,
  handle: G.shape({
    x: G.number.isRequired,
    y: G.number.isRequired,
    width: G.number.isRequired,
    height: G.number.isRequired
  }).isRequired,
  isControlled: G.bool,
  isDragInProgress: G.bool,
  onBrushHandleChange: G.func,
  renderBrushHandle: G.func
};
function er() {
  return er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, er.apply(this, arguments);
}
function OR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, lf(e, t);
}
function lf(e, t) {
  return lf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, lf(e, t);
}
var dp = /* @__PURE__ */ function(e) {
  OR(t, e);
  function t() {
    for (var r, a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(o)) || this, r.cornerDragMove = function(c) {
      var d = r.props, f = d.updateBrush, h = d.type;
      c.isDragging && f(function(m) {
        var g = m.start, v = m.end, y = Math.max(g.x, v.x), E = Math.min(g.x, v.x), b = Math.max(g.y, v.y), x = Math.min(g.y, v.y), w = 0, A = 0;
        switch (h) {
          case "topRight":
            return w = y + c.dx, A = x + c.dy, er({}, m, {
              activeHandle: h,
              extent: er({}, m.extent, {
                x0: Math.max(Math.min(w, g.x), m.bounds.x0),
                x1: Math.min(Math.max(w, g.x), m.bounds.x1),
                y0: Math.max(Math.min(A, v.y), m.bounds.y0),
                y1: Math.min(Math.max(A, v.y), m.bounds.y1)
              })
            });
          case "topLeft":
            return w = E + c.dx, A = x + c.dy, er({}, m, {
              activeHandle: h,
              extent: er({}, m.extent, {
                x0: Math.max(Math.min(w, v.x), m.bounds.x0),
                x1: Math.min(Math.max(w, v.x), m.bounds.x1),
                y0: Math.max(Math.min(A, v.y), m.bounds.y0),
                y1: Math.min(Math.max(A, v.y), m.bounds.y1)
              })
            });
          case "bottomLeft":
            return w = E + c.dx, A = b + c.dy, er({}, m, {
              activeHandle: h,
              extent: er({}, m.extent, {
                x0: Math.max(Math.min(w, v.x), m.bounds.x0),
                x1: Math.min(Math.max(w, v.x), m.bounds.x1),
                y0: Math.max(Math.min(A, g.y), m.bounds.y0),
                y1: Math.min(Math.max(A, g.y), m.bounds.y1)
              })
            });
          case "bottomRight":
            return w = y + c.dx, A = b + c.dy, er({}, m, {
              activeHandle: h,
              extent: er({}, m.extent, {
                x0: Math.max(Math.min(w, g.x), m.bounds.x0),
                x1: Math.min(Math.max(w, g.x), m.bounds.x1),
                y0: Math.max(Math.min(A, g.y), m.bounds.y0),
                y1: Math.min(Math.max(A, g.y), m.bounds.y1)
              })
            });
          default:
            return m;
        }
      });
    }, r.cornerDragEnd = function() {
      var c = r.props, d = c.updateBrush, f = c.onBrushEnd;
      d(function(h) {
        var m = h.start, g = h.end, v = h.extent;
        m.x = Math.min(v.x0, v.x1), m.y = Math.min(v.y0, v.y0), g.x = Math.max(v.x0, v.x1), g.y = Math.max(v.y0, v.y1);
        var y = er({}, h, {
          start: m,
          end: g,
          activeHandle: null,
          domain: {
            x0: Math.min(m.x, g.x),
            x1: Math.max(m.x, g.x),
            y0: Math.min(m.y, g.y),
            y1: Math.max(m.y, g.y)
          }
        });
        return f && f(y), y;
      });
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var a = this.props, o = a.type, u = a.brush, c = a.stageWidth, d = a.stageHeight, f = a.style, h = a.corner, m = (f == null ? void 0 : f.cursor) || (o === "topLeft" || o === "bottomRight" ? "nwse-resize" : "nesw-resize"), g = u.activeHandle || u.isBrushing ? "none" : "all";
    return /* @__PURE__ */ l.createElement(Tc, {
      width: c,
      height: d,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(v) {
      var y = v.dragMove, E = v.dragEnd, b = v.dragStart, x = v.isDragging;
      return /* @__PURE__ */ l.createElement("g", null, x && /* @__PURE__ */ l.createElement("rect", {
        fill: "transparent",
        width: c,
        height: d,
        style: {
          cursor: m
        },
        onPointerMove: y,
        onPointerUp: E
      }), /* @__PURE__ */ l.createElement("rect", er({
        fill: "transparent",
        onPointerDown: b,
        onPointerMove: y,
        onPointerUp: E,
        className: "visx-brush-corner-" + o,
        style: er({
          cursor: m,
          pointerEvents: g
        }, f)
      }, h)));
    });
  }, t;
}(l.Component);
dp.propTypes = {
  stageWidth: G.number.isRequired,
  stageHeight: G.number.isRequired,
  updateBrush: G.func.isRequired,
  onBrushEnd: G.func,
  corner: G.shape({
    x: G.number.isRequired,
    y: G.number.isRequired,
    width: G.number.isRequired,
    height: G.number.isRequired
  }).isRequired
};
dp.defaultProps = {
  style: {}
};
function bi() {
  return bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bi.apply(this, arguments);
}
function PR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, cf(e, t);
}
function cf(e, t) {
  return cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, cf(e, t);
}
var kR = {
  cursor: "move"
}, fp = /* @__PURE__ */ function(e) {
  PR(t, e);
  function t() {
    for (var r, a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(o)) || this, r.selectionDragStart = function(c) {
      var d = r.props, f = d.onMoveSelectionChange, h = d.onBrushStart;
      f && f("move", up(c.event)), h && h(c);
    }, r.selectionDragMove = function(c) {
      var d = r.props, f = d.updateBrush, h = d.isControlled;
      h || f(function(m) {
        var g = m.start, v = g.x, y = g.y, E = m.end, b = E.x, x = E.y, w = c.dx > 0 ? Math.min(c.dx, m.bounds.x1 - b) : Math.max(c.dx, m.bounds.x0 - v), A = c.dy > 0 ? Math.min(c.dy, m.bounds.y1 - x) : Math.max(c.dy, m.bounds.y0 - y);
        return bi({}, m, {
          isBrushing: !0,
          extent: bi({}, m.extent, {
            x0: v + w,
            x1: b + w,
            y0: y + A,
            y1: x + A
          })
        });
      });
    }, r.selectionDragEnd = function() {
      var c = r.props, d = c.updateBrush, f = c.onBrushEnd, h = c.onMoveSelectionChange, m = c.isControlled;
      m || d(function(g) {
        var v = bi({}, g, {
          isBrushing: !1,
          start: bi({}, g.start, {
            x: Math.min(g.extent.x0, g.extent.x1),
            y: Math.min(g.extent.y0, g.extent.y1)
          }),
          end: bi({}, g.end, {
            x: Math.max(g.extent.x0, g.extent.x1),
            y: Math.max(g.extent.y0, g.extent.y1)
          })
        });
        return f && f(v), v;
      }), h && h();
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var a = this.props, o = a.width, u = a.height, c = a.stageWidth, d = a.stageHeight, f = a.brush, h = a.disableDraggingSelection, m = a.onMouseLeave, g = a.onMouseMove, v = a.onMouseUp, y = a.onClick, E = a.selectedBoxStyle, b = a.isControlled, x = a.isDragInProgress;
    return /* @__PURE__ */ l.createElement(Tc, {
      width: o,
      height: u,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: b ? x : void 0
    }, function(w) {
      var A = w.isDragging, D = w.dragStart, _ = w.dragEnd, C = w.dragMove;
      return /* @__PURE__ */ l.createElement("g", null, A && /* @__PURE__ */ l.createElement("rect", {
        width: c,
        height: d,
        fill: "transparent",
        onPointerUp: b ? void 0 : _,
        onPointerMove: C,
        onPointerLeave: b ? void 0 : _,
        style: kR
      }), /* @__PURE__ */ l.createElement("rect", bi({
        x: Math.min(f.extent.x0, f.extent.x1),
        y: Math.min(f.extent.y0, f.extent.y1),
        width: o,
        height: u,
        className: "visx-brush-selection",
        onPointerDown: h ? void 0 : D,
        onPointerLeave: function(O) {
          m && m(O);
        },
        onPointerMove: function(O) {
          C(O), g && g(O);
        },
        onPointerUp: function(O) {
          b || _(O), v && v(O);
        },
        onClick: function(O) {
          y && y(O);
        },
        style: {
          pointerEvents: f.isBrushing || f.activeHandle ? "none" : "all",
          cursor: h ? void 0 : "move"
        }
      }, E)));
    });
  }, t;
}(l.Component);
fp.propTypes = {
  width: G.number.isRequired,
  height: G.number.isRequired,
  stageWidth: G.number.isRequired,
  stageHeight: G.number.isRequired,
  updateBrush: G.func.isRequired,
  onMoveSelectionChange: G.func,
  onBrushStart: G.func,
  onBrushEnd: G.func,
  disableDraggingSelection: G.bool.isRequired,
  onMouseLeave: G.func,
  onMouseMove: G.func,
  onMouseUp: G.func,
  onClick: G.func,
  isControlled: G.bool,
  isDragInProgress: G.bool
};
fp.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tr.apply(this, arguments);
}
function LR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, uf(e, t);
}
function uf(e, t) {
  return uf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, uf(e, t);
}
var RR = {
  cursor: "crosshair"
}, pp = /* @__PURE__ */ function(e) {
  LR(t, e);
  function t(r) {
    var a;
    a = e.call(this, r) || this, a.mouseUpTime = 0, a.mouseDownTime = 0, a.handleWindowPointerUp = function() {
      var c = a.props, d = c.useWindowMoveEvents, f = c.onBrushEnd, h = c.resetOnEnd, m = a.state.brushingType;
      d && m && a.updateBrush(function(g) {
        var v = g.start, y = g.end, E = g.extent;
        v.x = Math.min(E.x0, E.x1), v.y = Math.min(E.y0, E.y0), y.x = Math.max(E.x0, E.x1), y.y = Math.max(E.y0, E.y1);
        var b = tr({}, g, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return f && f(b), h && a.reset(), b;
      });
    }, a.handleWindowPointerMove = function(c) {
      var d = a.props.useWindowMoveEvents, f = a.state, h = f.brushingType, m = f.isBrushing, g = f.brushPageOffset, v = f.start;
      if (!(!d || !m)) {
        var y = c.pageX - ((g == null ? void 0 : g.pageX) || 0), E = c.pageY - ((g == null ? void 0 : g.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(h ?? "") && a.updateBrush(function(b) {
          var x = b.start, w = x.x, A = x.y, D = b.end, _ = D.x, C = D.y;
          return tr({}, b, {
            isBrushing: !0,
            extent: tr({}, b.extent, a.getExtent({
              x: h === "left" ? Math.min(Math.max(w + y, b.bounds.x0), b.bounds.x1) : w,
              y: h === "top" ? Math.min(Math.max(A + E, b.bounds.y0), b.bounds.y1) : A
            }, {
              x: h === "right" ? Math.min(Math.max(_ + y, b.bounds.x0), b.bounds.x1) : _,
              y: h === "bottom" ? Math.min(Math.max(C + E, b.bounds.y0), b.bounds.y1) : C
            }))
          });
        }), h === "move" && a.updateBrush(function(b) {
          var x = b.start, w = x.x, A = x.y, D = b.end, _ = D.x, C = D.y, $ = y > 0 ? Math.min(y, b.bounds.x1 - _) : Math.max(y, b.bounds.x0 - w), O = E > 0 ? Math.min(E, b.bounds.y1 - C) : Math.max(E, b.bounds.y0 - A);
          return tr({}, b, {
            isBrushing: !0,
            extent: tr({}, b.extent, {
              x0: w + $,
              y0: A + O,
              x1: _ + $,
              y1: C + O
            })
          });
        }), h === "select" && a.updateBrush(function(b) {
          var x = b.start, w = x.x, A = x.y, D = {
            x: Math.min(Math.max(w + y, b.bounds.x0), b.bounds.x1),
            y: Math.min(Math.max(A + E, b.bounds.y0), b.bounds.y1)
          }, _ = a.getExtent(v, D), C = tr({}, b, {
            end: D,
            extent: _
          });
          return C;
        });
      }
    }, a.getExtent = function(c, d) {
      var f = a.props, h = f.brushDirection, m = f.width, g = f.height, v = h === "vertical" ? 0 : Math.min(c.x || 0, d.x || 0), y = h === "vertical" ? m : Math.max(c.x || 0, d.x || 0), E = h === "horizontal" ? 0 : Math.min(c.y || 0, d.y || 0), b = h === "horizontal" ? g : Math.max(c.y || 0, d.y || 0);
      return {
        x0: v,
        x1: y,
        y0: E,
        y1: b
      };
    }, a.handleDragStart = function(c) {
      var d = a.props, f = d.onBrushStart, h = d.left, m = d.top, g = d.inheritedMargin, v = d.useWindowMoveEvents, y = g != null && g.left ? g.left : 0, E = g != null && g.top ? g.top : 0, b = {
        x: (c.x || 0) + c.dx - h - y,
        y: (c.y || 0) + c.dy - m - E
      }, x = tr({}, b);
      f && f(b), a.updateBrush(function(w) {
        return tr({}, w, {
          start: b,
          end: x,
          extent: {
            x0: -1,
            x1: -1,
            y0: -1,
            y1: -1
          },
          isBrushing: !0,
          brushingType: "select",
          brushPageOffset: v ? up(c.event) : void 0
        });
      });
    }, a.handleBrushStart = function(c) {
      var d = a.props, f = d.onBrushStart, h = d.left, m = d.top, g = d.inheritedMargin;
      if (f) {
        var v = g != null && g.left ? g.left : 0, y = g != null && g.top ? g.top : 0, E = {
          x: (c.x || 0) + c.dx - h - v,
          y: (c.y || 0) + c.dy - m - y
        };
        f(E);
      }
    }, a.handleDragMove = function(c) {
      var d = a.props, f = d.left, h = d.top, m = d.inheritedMargin, g = d.useWindowMoveEvents;
      if (!(!c.isDragging || g)) {
        var v = (m == null ? void 0 : m.left) || 0, y = (m == null ? void 0 : m.top) || 0, E = {
          x: (c.x || 0) + c.dx - f - v,
          y: (c.y || 0) + c.dy - h - y
        };
        a.updateBrush(function(b) {
          var x = b.start, w = a.getExtent(x, E);
          return tr({}, b, {
            end: E,
            extent: w
          });
        });
      }
    }, a.handleDragEnd = function() {
      var c = a.props, d = c.onBrushEnd, f = c.resetOnEnd, h = c.useWindowMoveEvents;
      h || a.updateBrush(function(m) {
        var g = m.extent, v = tr({}, m, {
          start: {
            x: g.x0,
            y: g.y0
          },
          end: {
            x: g.x1,
            y: g.y1
          },
          isBrushing: !1,
          brushingType: void 0,
          activeHandle: null
        });
        return d && d(v), f && a.reset(), v;
      });
    }, a.getBrushWidth = function() {
      var c = a.state.extent, d = c.x0, f = c.x1;
      return Math.max(Math.max(d, f) - Math.min(d, f), 0);
    }, a.getBrushHeight = function() {
      var c = a.state.extent, d = c.y1, f = c.y0;
      return Math.max(Math.max(f, d) - Math.min(f, d), 0);
    }, a.handles = function() {
      var c = a.props.handleSize, d = a.state.extent, f = d.x0, h = d.x1, m = d.y0, g = d.y1, v = c / 2, y = a.getBrushWidth(), E = a.getBrushHeight();
      return {
        top: {
          x: f - v,
          y: m - v,
          height: c,
          width: y + c
        },
        bottom: {
          x: f - v,
          y: g - v,
          height: c,
          width: y + c
        },
        right: {
          x: h - v,
          y: m - v,
          height: E + c,
          width: c
        },
        left: {
          x: f - v,
          y: m - v,
          height: E + c,
          width: c
        }
      };
    }, a.corners = function() {
      var c = a.props.handleSize, d = a.state.extent, f = d.x0, h = d.x1, m = d.y0, g = d.y1, v = c / 2, y = c, E = c;
      return {
        topLeft: {
          x: Math.min(f, h) - v,
          y: Math.min(m, g) - v,
          width: y,
          height: E
        },
        topRight: {
          x: Math.max(f, h) - v,
          y: Math.min(m, g) - v,
          width: y,
          height: E
        },
        bottomLeft: {
          x: Math.min(f, h) - v,
          y: Math.max(m, g) - v,
          width: y,
          height: E
        },
        bottomRight: {
          x: Math.max(f, h) - v,
          y: Math.max(m, g) - v,
          width: y,
          height: E
        }
      };
    }, a.updateBrush = function(c) {
      var d = a.props.onChange;
      a.setState(c, function() {
        d && d(a.state);
      });
    }, a.reset = function() {
      var c = a.props, d = c.width, f = c.height;
      a.updateBrush(function() {
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
      });
    }, a.handleBrushingTypeChange = function(c, d) {
      a.updateBrush(function(f) {
        var h = tr({}, f, {
          brushingType: c,
          isBrushing: c !== void 0
        });
        return (d || c === void 0) && (h.brushPageOffset = d), h;
      });
    };
    var o = r.initialBrushPosition, u = o ? a.getExtent(o.start, o.end) : {
      x0: -1,
      x1: -1,
      y0: -1,
      y1: -1
    };
    return a.state = {
      start: {
        x: Math.max(0, u.x0),
        y: Math.max(0, u.y0)
      },
      end: {
        x: Math.max(0, u.x1),
        y: Math.max(0, u.y1)
      },
      extent: u,
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
    (this.props.width !== a.width || this.props.height !== a.height) && this.setState(function(u) {
      var c = u.start, d = u.end, f = u.extent;
      if (!(f.x0 === -1 && f.x1 === -1 && f.y0 === -1 && f.y1 === -1)) {
        var h = o.props.width / a.width, m = o.props.height / a.height;
        c = {
          x: h * f.x0,
          y: m * f.y0
        }, d = {
          x: h * f.x1,
          y: m * f.y1
        }, f = o.getExtent(c, d);
      }
      return {
        start: c,
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
    var a = this, o = this.state, u = o.start, c = o.end, d = this.props, f = d.top, h = d.left, m = d.width, g = d.height, v = d.onMouseLeave, y = d.onMouseUp, E = d.onMouseMove, b = d.onBrushEnd, x = d.onClick, w = d.resizeTriggerAreas, A = d.selectedBoxStyle, D = d.disableDraggingSelection, _ = d.clickSensitivity, C = d.useWindowMoveEvents, $ = d.renderBrushHandle, O = this.state.brushingType, I = this.handles(), B = this.corners(), L = this.getBrushWidth(), N = this.getBrushHeight(), z = new Set(w);
    return /* @__PURE__ */ l.createElement(He, {
      className: "visx-brush",
      top: f,
      left: h
    }, /* @__PURE__ */ l.createElement(Tc, {
      width: m,
      height: g,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: C ? O === "select" : void 0
    }, function(W) {
      var M = W.dragStart, H = W.isDragging, K = W.dragMove, re = W.dragEnd;
      return /* @__PURE__ */ l.createElement(ar, {
        className: "visx-brush-overlay",
        fill: "transparent",
        x: 0,
        y: 0,
        width: m,
        height: g,
        onDoubleClick: function() {
          return a.reset();
        },
        onClick: function(te) {
          var ce = a.mouseUpTime - a.mouseDownTime;
          x && ce < _ && x(te);
        },
        onPointerDown: function(te) {
          a.mouseDownTime = Date.now(), M(te);
        },
        onPointerLeave: function(te) {
          v && v(te);
        },
        onPointerMove: function(te) {
          !H && E && E(te), H && K(te);
        },
        onPointerUp: function(te) {
          a.mouseUpTime = Date.now(), y && y(te), re(te);
        },
        style: RR
      });
    }), u && c && /* @__PURE__ */ l.createElement(fp, {
      updateBrush: this.updateBrush,
      width: L,
      height: N,
      stageWidth: m,
      stageHeight: g,
      brush: this.state,
      disableDraggingSelection: D,
      onBrushEnd: b,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: v,
      onMouseMove: E,
      onMouseUp: y,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: x,
      selectedBoxStyle: A,
      isControlled: C,
      isDragInProgress: C ? O === "move" : void 0
    }), u && c && Object.keys(I).filter(function(W) {
      return z.has(W);
    }).map(function(W) {
      var M = I[W];
      return M && /* @__PURE__ */ l.createElement(Ab, {
        key: "handle-" + W,
        type: W,
        handle: M,
        stageWidth: m,
        stageHeight: g,
        updateBrush: a.updateBrush,
        brush: a.state,
        onBrushStart: a.handleBrushStart,
        onBrushEnd: b,
        isControlled: C,
        isDragInProgress: C ? O === W : void 0,
        onBrushHandleChange: a.handleBrushingTypeChange,
        renderBrushHandle: $
      });
    }), u && c && Object.keys(B).filter(function(W) {
      return z.has(W);
    }).map(function(W) {
      var M = B[W];
      return M && /* @__PURE__ */ l.createElement(dp, {
        key: "corner-" + W,
        type: W,
        brush: a.state,
        updateBrush: a.updateBrush,
        stageWidth: m,
        stageHeight: g,
        corner: M,
        onBrushEnd: b
      });
    }));
  }, t;
}(l.Component);
pp.propTypes = {
  brushDirection: G.oneOf(["horizontal", "vertical", "both"]),
  width: G.number.isRequired,
  height: G.number.isRequired,
  left: G.number.isRequired,
  top: G.number.isRequired,
  onChange: G.func,
  handleSize: G.number,
  resizeTriggerAreas: G.array,
  onBrushStart: G.func,
  onBrushEnd: G.func,
  onMouseLeave: G.func,
  onMouseUp: G.func,
  onMouseMove: G.func,
  onClick: G.func,
  clickSensitivity: G.number,
  disableDraggingSelection: G.bool,
  resetOnEnd: G.bool,
  useWindowMoveEvents: G.bool,
  renderBrushHandle: G.func
};
pp.defaultProps = {
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
  clickSensitivity: 200,
  resetOnEnd: !1,
  initialBrushPosition: null,
  useWindowMoveEvents: !1,
  renderBrushHandles: null
};
function MR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, df(e, t);
}
function df(e, t) {
  return df = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, df(e, t);
}
var Ov = 2, Pv = "steelblue", hp = /* @__PURE__ */ function(e) {
  MR(t, e);
  function t() {
    for (var r, a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(o)) || this, r.handleChange = function(c) {
      var d = r.props.onChange;
      if (d) {
        var f = c.extent.x0;
        if (typeof f > "u" || f < 0) {
          d(null);
          return;
        }
        var h = r.convertRangeToDomain(c);
        d(h);
      }
    }, r.handleBrushStart = function(c) {
      var d = r.props.onBrushStart;
      if (d) {
        var f = c.x, h = c.y, m = r.props, g = m.xScale, v = m.yScale, y = sc(g, f), E = sc(v, h);
        d({
          x: "invert" in g && typeof g.invert < "u" ? y : g.domain()[y],
          y: "invert" in v && typeof v.invert < "u" ? E : v.domain()[E]
        });
      }
    }, r.handleBrushEnd = function(c) {
      var d = r.props.onBrushEnd;
      if (d) {
        var f = c.extent.x0;
        if (typeof f > "u" || f < 0) {
          d(null);
          return;
        }
        var h = r.convertRangeToDomain(c);
        d(h);
      }
    }, r;
  }
  var n = t.prototype;
  return n.convertRangeToDomain = function(a) {
    var o = this.props, u = o.xScale, c = o.yScale, d = a.extent, f = d.x0, h = d.x1, m = d.y0, g = d.y1, v = Nv(u, f || 0, h || 0, Ov), y = Nv(c, m || 0, g || 0, Ov), E = {
      x0: v.start || 0,
      x1: v.end || 0,
      xValues: v.values,
      y0: y.start || 0,
      y1: y.end || 0,
      yValues: y.values
    };
    return E;
  }, n.render = function() {
    var a = this.props, o = a.xScale, u = a.yScale, c = a.height, d = a.width, f = a.margin, h = a.brushDirection, m = a.initialBrushPosition, g = a.innerRef, v = a.resizeTriggerAreas, y = a.brushRegion, E = a.yAxisOrientation, b = a.xAxisOrientation, x = a.selectedBoxStyle, w = a.disableDraggingSelection, A = a.resetOnEnd, D = a.onMouseLeave, _ = a.onMouseMove, C = a.onClick, $ = a.handleSize, O = a.useWindowMoveEvents, I = a.renderBrushHandle;
    if (!o || !u)
      return null;
    var B, L, N, z, W = f != null && f.left ? f.left : 0, M = f != null && f.top ? f.top : 0, H = f != null && f.right ? f.right : 0, K = f != null && f.bottom ? f.bottom : 0;
    return y === "chart" ? (N = 0, z = 0, B = d, L = c) : y === "yAxis" ? (z = 0, L = c, E === "right" ? (N = d, B = H) : (N = -W, B = W)) : (N = 0, B = d, b === "bottom" ? (z = c, L = K) : (z = -M, L = M)), /* @__PURE__ */ l.createElement(pp, {
      width: B,
      height: L,
      left: N,
      top: z,
      brushDirection: h,
      disableDraggingSelection: w,
      handleSize: $,
      inheritedMargin: f,
      initialBrushPosition: m,
      ref: g,
      resetOnEnd: A,
      resizeTriggerAreas: v,
      selectedBoxStyle: x,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: C,
      onMouseLeave: D,
      onMouseMove: _,
      useWindowMoveEvents: O,
      renderBrushHandle: I
    });
  }, t;
}(F.Component);
hp.propTypes = {
  height: G.number,
  width: G.number,
  onChange: G.func,
  onBrushEnd: G.func,
  brushDirection: G.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: G.array,
  brushRegion: G.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: G.oneOf(["left", "right"]),
  xAxisOrientation: G.oneOf(["top", "bottom"]),
  disableDraggingSelection: G.bool,
  resetOnEnd: G.bool,
  handleSize: G.number,
  useWindowMoveEvents: G.bool,
  renderBrushHandle: G.func
};
hp.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: Pv,
    fillOpacity: 0.2,
    stroke: Pv,
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
const $R = hp, IR = (e) => {
  const { transformedData: t, config: n, parseDate: r, formatDate: a, updateConfig: o } = F.useContext(pt), { fontSize: u } = fs(), [c, d] = F.useState([...t]), f = F.useRef(null), h = 15, [m, g] = F.useState({
    startPosition: 0,
    endPosition: 0,
    startValue: "",
    endValue: ""
  }), v = {
    start: { x: 0 },
    end: { x: e.xMax }
  }, y = {
    fill: "#ddd",
    stroke: "blue",
    fillOpacity: 0.8,
    strokeOpacity: 0,
    rx: h
  }, E = (x) => {
    var O;
    if (!x)
      return;
    const { xValues: w } = x, A = (O = n.xAxis) == null ? void 0 : O.dataKey, D = t.filter((I) => w.includes(I[A])), _ = w.slice().reverse().find((I) => I !== void 0), C = w.find((I) => I !== void 0), $ = (I) => n.runtime.xAxis.type === "date" ? a(r(I)) : I;
    g((I) => {
      var B, L;
      return {
        ...I,
        startPosition: (B = f.current) == null ? void 0 : B.state.start.x,
        endPosition: (L = f.current) == null ? void 0 : L.state.end.x,
        endValue: $(_),
        startValue: $(C)
      };
    }), d(D);
  };
  F.useEffect(() => {
    o({
      ...n,
      brush: {
        ...n.brush,
        data: c
      }
    });
  }, [c]), F.useEffect(() => {
    n.brush.active || d(t);
  }, [n.brush.active]);
  const b = () => {
    const x = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
    let w = 0;
    const A = 20;
    return n.xAxis.label || (!n.isResponsiveTicks && x && (w = Number(x + n.xAxis.tickWidthMax) / 1.6), !n.isResponsiveTicks && !x && (w = Number(n.xAxis.labelOffset) - A), n.isResponsiveTicks && n.dynamicMarginTop && (w = Number(n.xAxis.labelOffset + n.xAxis.tickWidthMax / 1.6)), n.isResponsiveTicks && !n.dynamicMarginTop && (w = Number(n.xAxis.labelOffset - A))), n.xAxis.label && (!n.isResponsiveTicks && x && (w = Number(n.xAxis.tickWidthMax + x)), !n.isResponsiveTicks && !x && (w = n.xAxis.labelOffset + A), n.isResponsiveTicks && !x && (w = Number(n.dynamicMarginTop ? n.dynamicMarginTop : n.xAxis.labelOffset) + A)), w;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(n.visualizationType))
    return /* @__PURE__ */ l.createElement(He, { display: n.brush.active ? "block" : "none", top: Number(e.yMax) + b(), left: Number(n.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ l.createElement("rect", { fill: "#eee", width: e.xMax, height: n.brush.height, rx: h }), /* @__PURE__ */ l.createElement(
      $R,
      {
        renderBrushHandle: (x) => {
          var w;
          return /* @__PURE__ */ l.createElement(BR, { textProps: m, fontSize: u[n.fontSize], ...x, isBrushing: (w = f.current) == null ? void 0 : w.state.isBrushing });
        },
        innerRef: f,
        useWindowMoveEvents: !0,
        selectedBoxStyle: y,
        xScale: e.xScaleBrush,
        yScale: e.yScale,
        width: e.xMax,
        resizeTriggerAreas: ["left", "right"],
        height: n.brush.height,
        handleSize: 8,
        brushDirection: "horizontal",
        initialBrushPosition: v,
        onChange: E
      }
    ));
}, BR = (e) => {
  const { x: t, isBrushActive: n, isBrushing: r, className: a, textProps: o } = e, u = 8;
  if (!n)
    return null;
  const c = a.includes("left"), d = c ? "scale(-1, 1)" : "translate(0,0)", f = c ? "end" : "start";
  return /* @__PURE__ */ l.createElement(He, { left: t + u / 2, top: -2 }, /* @__PURE__ */ l.createElement(ut, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: f, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, c ? o.startValue : o.endValue), /* @__PURE__ */ l.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: r ? "#297EF1" : "#666", strokeWidth: "1", transform: d }));
}, Wr = (e) => {
  var jr;
  const { isEditor: t, isDashboard: n, transformedData: r, dimensions: a, config: o, parseDate: u, formatDate: c, currentViewport: d, formatNumber: f, handleChartAriaLabels: h, updateConfig: m, handleLineType: g, rawData: v, capitalize: y, setSharedFilter: E, setSharedFilterValue: b, getTextWidth: x, isDebug: w } = F.useContext(pt), { visualizationType: A, visualizationSubType: D, orientation: _, xAxis: C, yAxis: $, runtime: O, debugSvg: I } = o;
  let [B] = a;
  o && o.legend && !o.legend.hide && o.legend.position !== "bottom" && ["lg", "md"].includes(d) && (B = B * 0.73);
  const { horizontal: L } = o.heights, N = _ === "horizontal", z = !0;
  let W = o.aspectRatio ? B * o.aspectRatio : o.visualizationType === "Forest Plot" ? o.heights.vertical : o.heights[_];
  const M = B - O.yAxis.size - (A === "Combo" ? o.yAxis.rightAxisSize : 0);
  let H = W - (_ === "horizontal" ? 0 : O.xAxis.size);
  o.visualizationType === "Forest Plot" && (W = W + o.data.length * o.forestPlot.rowHeight, H = H + o.data.length * o.forestPlot.rowHeight), o.brush.active && (W = W + o.brush.height);
  const { minValue: K, maxValue: re, existPositiveValue: ie, isAllLine: te } = Cc(o, r), { yScaleRight: ce, hasRightAxis: oe } = tp({ config: o, yMax: H, data: r, updateConfig: m }), { hasTopAxis: Se } = fR(o), [Te, ke] = F.useState(!1), Ie = F.useRef(), We = F.useRef(), De = Xf(Ie, {
    freezeOnceVisible: !1
  }), le = (fe) => o.runtime.xAxis.type === "date" ? u(fe[o.runtime.originalXAxis.dataKey]).getTime() : fe[o.runtime.originalXAxis.dataKey], ee = (fe, ze) => fe[ze], me = o.brush.active && ((jr = o.brush.data) != null && jr.length) ? o.brush.data.map((fe) => le(fe)) : r.map((fe) => le(fe)), V = o.orientation === "horizontal" ? "yAxis" : "xAxis", Oe = { data: r, config: o, minValue: K, maxValue: re, isAllLine: te, existPositiveValue: ie, xAxisDataMapped: me, xMax: M, yMax: H }, { min: ae, max: Ne } = sR(Oe), { xScale: Ee, yScale: Pe, seriesScale: nt, g1xScale: At, g2xScale: je, xScaleNoPadding: Le, xScaleBrush: Ae } = lR({ ...Oe, min: ae, max: Ne }), [xe, ht] = F.useState(null);
  F.useEffect(() => {
    var fe;
    ht((fe = We == null ? void 0 : We.current) == null ? void 0 : fe.getBoundingClientRect());
  }, [We, o.legend]);
  const we = (fe, ze) => {
    if (o.useLogScale && fe === 0.1 && (fe = 0), !(o.data && !o.data[ze] && A === "Forest Plot"))
      return o.visualizationType === "Forest Plot" ? o.data[ze][o.xAxis.dataKey] : O.yAxis.type === "date" ? c(u(fe)) : _ === "vertical" ? f(fe, "left", z) : fe;
  }, Ge = (fe) => (o.useLogScale && fe === 0.1 && (fe = 0), O.xAxis.type === "date" ? c(fe) : _ === "horizontal" ? f(fe, "left", z) : o.xAxis.type === "continuous" ? f(fe, "bottom", z) : fe), Xe = (fe) => {
    const { numTicks: ze } = O[fe];
    let rt;
    return fe === "yAxis" && (rt = N && !ze ? r.length : N && ze ? ze : !N && !ze ? void 0 : !N && ze && ze, rt === void 0 && !o.dataFormat.roundTo && (Number(Ne) <= 3 ? rt = 2 : rt = 4), Number(rt) > Number(Ne) && (rt = Number(ae) < 0 ? Math.round(Ne) * 2 : Math.round(Ne))), fe === "xAxis" && (rt = N && !ze ? void 0 : N && ze ? ze : !N && !ze ? void 0 : !N && ze && ze, N && rt === void 0 && !o.dataFormat.roundTo && (Ne <= 3 ? rt = 2 : rt = 4)), rt;
  }, { tooltipData: Y, showTooltip: tt, hideTooltip: zt, tooltipOpen: Kt, tooltipLeft: Wt, tooltipTop: Qt } = Jx(), {
    handleTooltipMouseOver: jt,
    handleTooltipClick: $t,
    handleTooltipMouseOff: fn,
    tooltipStyles: jn,
    TooltipListItem: oi,
    getXValueFromCoordinateDate: ua,
    getXValueFromCoordinate: Dn
  } = ib({
    xScale: Ee,
    yScale: Pe,
    showTooltip: tt,
    hideTooltip: zt
  });
  F.useEffect(() => {
    document.querySelector(".isEditor") && ke((ze) => !0);
  }), F.useEffect(() => {
    (De == null ? void 0 : De.isIntersecting) === !0 && o.animate && setTimeout(() => {
      ke((fe) => !0);
    }, 500);
  }, [De == null ? void 0 : De.isIntersecting, o.animate]);
  const Kr = () => {
    const { visualizationType: fe } = o;
    return fe === "Combo" && O.forecastingSeriesKeys > 0 || fe === "Area Chart" || fe === "Line" || fe === "Bar";
  }, Sr = Number(_ === "horizontal" ? o.xAxis.size : o.yAxis.size), Pi = () => o.visualizationType === "Forest Plot" ? o.data.length : Xe("yAxis");
  return isNaN(B) ? /* @__PURE__ */ l.createElement(l.Fragment, null) : /* @__PURE__ */ l.createElement(Lr, { component: "LinearChart" }, /* @__PURE__ */ l.createElement("div", { style: { width: `${B}px`, height: `${W}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ l.createElement("svg", { width: "100%", height: "100%", className: `linear ${o.animate ? "animated" : ""} ${Te && o.animate ? "animate" : ""} ${I && "debug"}`, role: "img", "aria-label": h(o), ref: We, style: { overflow: "visible" } }, /* @__PURE__ */ l.createElement(ar, { width: B, height: W, fill: "transparent" }), " ", o.regions ? o.regions.map((fe) => {
    if (!Object.keys(fe).includes("from") || !Object.keys(fe).includes("to"))
      return null;
    let ze, rt, Ve;
    return o.xAxis.type === "date" && (ze = Ee(u(fe.from).getTime()), rt = Ee(u(fe.to).getTime()), Ve = rt - ze), o.xAxis.type === "categorical" && (ze = Ee(fe.from), rt = Ee(fe.to), Ve = rt - ze), !ze || !rt ? null : /* @__PURE__ */ l.createElement(He, { className: "regions", left: Number(O.yAxis.size), key: fe.label }, /* @__PURE__ */ l.createElement(
      "path",
      {
        stroke: "#333",
        d: `M${ze} -5
                          L${ze} 5
                          M${ze} 0
                          L${rt} 0
                          M${rt} -5
                          L${rt} 5`
      }
    ), /* @__PURE__ */ l.createElement("rect", { x: ze, y: 0, width: Ve, height: H, fill: fe.background, opacity: 0.3 }), /* @__PURE__ */ l.createElement(ut, { x: ze + Ve / 2, y: 5, fill: fe.color, verticalAnchor: "start", textAnchor: "middle" }, fe.label));
  }) : "", !["Spark Line", "Forest Plot"].includes(A) && /* @__PURE__ */ l.createElement(fL, { scale: Pe, tickLength: o.useLogScale ? 6 : 8, left: Number(O.yAxis.size) - o.yAxis.axisPadding, label: O.yAxis.label, stroke: "#333", tickFormat: (fe, ze) => we(fe, ze), numTicks: Pi() }, (fe) => {
    const ze = O.horizontal ? (fe.axisToPoint.y - fe.axisFromPoint.y) / 2 : (fe.axisFromPoint.y - fe.axisToPoint.y) / 2, rt = H / fe.ticks.length / 2 - H / fe.ticks.length * (1 - o.barThickness) + 5;
    return /* @__PURE__ */ l.createElement(He, { className: "left-axis" }, fe.ticks.map((Ve, rn) => {
      const xn = fe.ticks[0].to.y, pn = 15, k = String(Ve.value).startsWith("1") || Ve.value === 0.1 ? "block" : "none", pe = k === "block" ? 7 : 0, be = { x: Ve.to.x - pe, y: Ve.to.y };
      return /* @__PURE__ */ l.createElement(He, { key: `vx-tick-${Ve.value}-${rn}`, className: "vx-axis-tick" }, !O.yAxis.hideTicks && /* @__PURE__ */ l.createElement(Mt, { key: `${Ve.value}--hide-hideTicks`, from: Ve.from, to: o.useLogScale ? be : Ve.to, stroke: o.yAxis.tickColor, display: O.horizontal ? "none" : "block" }), O.yAxis.gridLines ? /* @__PURE__ */ l.createElement(Mt, { key: `${Ve.value}--hide-hideGridLines`, display: (o.useLogScale && k).toString(), from: { x: Ve.from.x + M, y: Ve.from.y }, to: Ve.from, stroke: "rgba(0,0,0,0.3)" }) : "", _ === "horizontal" && D !== "stacked" && o.yAxis.labelPlacement === "On Date/Category Axis" && !o.yAxis.hideLabel && /* @__PURE__ */ l.createElement(
        ut,
        {
          transform: `translate(${Ve.to.x - 5}, ${o.isLollipopChart ? Ve.to.y - xn : Ve.to.y - xn + (Number(o.barHeight * o.series.length) - pn) / 2}) rotate(-${o.runtime.horizontal && o.runtime.yAxis.tickRotation || 0})`,
          verticalAnchor: "start",
          textAnchor: "end"
        },
        Ve.formattedValue
      ), _ === "horizontal" && D === "stacked" && o.yAxis.labelPlacement === "On Date/Category Axis" && !o.yAxis.hideLabel && /* @__PURE__ */ l.createElement(ut, { transform: `translate(${Ve.to.x - 5}, ${Ve.to.y - xn + (Number(o.barHeight) - pn) / 2}) rotate(-${O.horizontal ? O.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, Ve.formattedValue), _ === "horizontal" && A === "Paired Bar" && !o.yAxis.hideLabel && /* @__PURE__ */ l.createElement(ut, { transform: `translate(${Ve.to.x - 5}, ${Ve.to.y - xn + Number(o.barHeight) / 2}) rotate(-${O.horizontal ? O.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Ve.formattedValue), _ === "horizontal" && A === "Deviation Bar" && !o.yAxis.hideLabel && /* @__PURE__ */ l.createElement(ut, { transform: `translate(${Ve.to.x - 5}, ${o.isLollipopChart ? Ve.to.y - xn + 2 : Ve.to.y - xn + Number(o.barHeight) / 2}) rotate(-${O.horizontal ? O.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Ve.formattedValue), _ === "vertical" && A !== "Paired Bar" && !o.yAxis.hideLabel && /* @__PURE__ */ l.createElement(
        ut,
        {
          display: o.useLogScale ? k : "block",
          dx: o.useLogScale ? -6 : 0,
          x: o.runtime.horizontal ? Ve.from.x + 2 : Ve.to.x,
          y: Ve.to.y + (o.runtime.horizontal ? rt : 0),
          angle: -Number(o.yAxis.tickRotation) || 0,
          verticalAnchor: o.runtime.horizontal ? "start" : "middle",
          textAnchor: o.runtime.horizontal ? "start" : "end",
          fill: o.yAxis.tickLabelColor
        },
        Ve.formattedValue
      ));
    }), !o.yAxis.hideAxis && /* @__PURE__ */ l.createElement(Mt, { from: fe.axisFromPoint, to: O.horizontal ? { x: 0, y: o.visualizationType === "Forest Plot" ? W : Number(L) } : fe.axisToPoint, stroke: "#000" }), Pe.domain()[0] < 0 && /* @__PURE__ */ l.createElement(Mt, { from: { x: fe.axisFromPoint.x, y: Pe(0) }, to: { x: M, y: Pe(0) }, stroke: "#333" }), A === "Bar" && _ === "horizontal" && Ee.domain()[0] < 0 && /* @__PURE__ */ l.createElement(Mt, { from: { x: Ee(0), y: 0 }, to: { x: Ee(0), y: H }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ l.createElement(ut, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * O.yAxis.size}, ${ze}) rotate(-90)`, fontWeight: "bold", fill: o.yAxis.labelColor }, fe.label));
  }), oe && /* @__PURE__ */ l.createElement(gL, { scale: ce, left: Number(B - o.yAxis.rightAxisSize), label: o.yAxis.rightLabel, tickFormat: (fe) => f(fe, "right"), numTicks: O.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (fe) => {
    const ze = O.horizontal ? (fe.axisToPoint.y - fe.axisFromPoint.y) / 2 : (fe.axisFromPoint.y - fe.axisToPoint.y) / 2, rt = H / fe.ticks.length / 2 - H / fe.ticks.length * (1 - o.barThickness) + 5;
    return /* @__PURE__ */ l.createElement(He, { className: "right-axis" }, fe.ticks.map((Ve, rn) => /* @__PURE__ */ l.createElement(He, { key: `vx-tick-${Ve.value}-${rn}`, className: "vx-axis-tick" }, !O.yAxis.rightHideTicks && /* @__PURE__ */ l.createElement(Mt, { from: Ve.from, to: Ve.to, display: O.horizontal ? "none" : "block", stroke: o.yAxis.rightAxisTickColor }), O.yAxis.rightGridLines ? /* @__PURE__ */ l.createElement(Mt, { from: { x: Ve.from.x + M, y: Ve.from.y }, to: Ve.from, stroke: "rgba(0,0,0,0.3)" }) : "", !o.yAxis.rightHideLabel && /* @__PURE__ */ l.createElement(ut, { x: Ve.to.x, y: Ve.to.y + (O.horizontal ? rt : 0), verticalAnchor: O.horizontal ? "start" : "middle", textAnchor: "start", fill: o.yAxis.rightAxisTickLabelColor }, Ve.formattedValue))), !o.yAxis.rightHideAxis && /* @__PURE__ */ l.createElement(Mt, { from: fe.axisFromPoint, to: fe.axisToPoint, stroke: "#333" }), /* @__PURE__ */ l.createElement(ut, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${o.yAxis.rightLabelOffsetSize ? o.yAxis.rightLabelOffsetSize : 0}, ${ze}) rotate(-90)`, fontWeight: "bold", fill: o.yAxis.rightAxisLabelColor }, fe.label));
  }), Se && o.topAxis.hasLine && /* @__PURE__ */ l.createElement(
    bL,
    {
      stroke: "#333",
      left: Number(O.yAxis.size),
      scale: Ee,
      hideTicks: !0,
      hideZero: !0,
      tickLabelProps: () => ({
        fill: "transparent"
      })
    }
  ), A !== "Paired Bar" && A !== "Spark Line" && /* @__PURE__ */ l.createElement(
    Pl,
    {
      top: O.horizontal && o.visualizationType !== "Forest Plot" ? Number(L) + Number(o.xAxis.axisPadding) : (o.visualizationType === "Forest Plot", H + Number(o.xAxis.axisPadding)),
      left: Number(O.yAxis.size),
      label: O.xAxis.label,
      tickFormat: Ge,
      scale: Ee,
      stroke: "#333",
      numTicks: Xe("xAxis"),
      tickStroke: "#333"
    },
    (fe) => {
      const ze = o.visualizationType !== "Forest Plot" ? (fe.axisToPoint.x - fe.axisFromPoint.x) / 2 : B / 2, rt = (Je) => /\s/.test(Je), Ve = fe.ticks.some((Je) => rt(Je.value)), rn = { small: 16, medium: 18, large: 20 }, xn = 8, pn = Math.max(...fe.ticks.map((Je) => x(Je.formattedValue, `normal ${rn[o.fontSize]}px sans-serif`))), k = Ve ? 180 : 100, pe = fe.ticks.map((Je) => x(Je.formattedValue, `normal ${rn[o.fontSize]}px sans-serif`)), be = pe.reduce((Je, Jt) => Je + Jt, k), _e = (M - be) / (fe.ticks.length - 1);
      let $e = [0];
      for (let Je = 1; Je < pe.length; Je++)
        $e[Je] = $e[Je - 1] + pe[Je - 1] + _e;
      let Be = !1;
      pe.forEach((Je, Jt) => {
        if ($e[Jt] + pe[Jt] > $e[Jt + 1]) {
          Be = !0;
          return;
        }
      });
      const Ce = Be && o.isResponsiveTicks ? pn + xn + 20 : 0, et = Number(o.xAxis.tickRotation) > 0 ? Number(o.xAxis.tickRotation) : 0;
      return o.dynamicMarginTop = Ce, o.xAxis.tickWidthMax = pn, /* @__PURE__ */ l.createElement(He, { className: "bottom-axis" }, fe.ticks.map((Je, Jt, Nn) => {
        const kt = String(Je.value).startsWith("1") || Je.value === 0.1 ? "block" : "none", or = kt === "block" ? 16 : xn, dt = { x: Je.to.x, y: or };
        let It = x(Je.formattedValue, `normal ${rn[o.fontSize]}px sans-serif`), Vt = 100 / Nn.length;
        o.yAxis.tickRotation = o.isResponsiveTicks && o.orientation === "horizontal" ? 0 : o.yAxis.tickRotation, o.xAxis.tickRotation = o.isResponsiveTicks && o.orientation === "vertical" ? 0 : o.xAxis.tickRotation;
        const en = o.isResponsiveTicks && Be ? -Number(o.xAxis.maxTickRotation) || -90 : -Number(o.runtime.xAxis.tickRotation);
        return /* @__PURE__ */ l.createElement(He, { key: `vx-tick-${Je.value}-${Jt}`, className: "vx-axis-tick" }, !o.xAxis.hideTicks && /* @__PURE__ */ l.createElement(Mt, { from: Je.from, to: _ === "horizontal" && o.useLogScale ? dt : Je.to, stroke: o.xAxis.tickColor, strokeWidth: kt === "block" ? 1.3 : 1 }), !o.xAxis.hideLabel && /* @__PURE__ */ l.createElement(
          ut,
          {
            dy: o.orientation === "horizontal" && o.useLogScale ? 8 : 0,
            display: o.orientation === "horizontal" && o.useLogScale ? kt : "block",
            x: Je.to.x,
            y: Je.to.y,
            angle: en,
            verticalAnchor: en < -50 ? "middle" : "start",
            textAnchor: en ? "end" : "middle",
            width: Be && !o.isResponsiveTicks && !Number(o[V].tickRotation) ? Vt : It,
            fill: o.xAxis.tickLabelColor
          },
          Je.formattedValue
        ));
      }), !o.xAxis.hideAxis && /* @__PURE__ */ l.createElement(Mt, { from: fe.axisFromPoint, to: fe.axisToPoint, stroke: "#333" }), /* @__PURE__ */ l.createElement(
        ut,
        {
          x: ze,
          y: o.orientation === "horizontal" ? Ce || o.xAxis.labelOffset : o.isResponsiveTicks && Ce && !N ? Ce : Number(et) && !o.isResponsiveTicks && !N ? Number(et + pn / 1.3) : Number(o.xAxis.labelOffset),
          textAnchor: "middle",
          fontWeight: "bold",
          fill: o.xAxis.labelColor
        },
        fe.label
      ));
    }
  ), A === "Paired Bar" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(Pl, { top: H, left: Number(O.yAxis.size), label: O.xAxis.label, tickFormat: O.xAxis.type === "date" ? c : f, scale: At, stroke: "#333", tickStroke: "#333", numTicks: O.xAxis.numTicks || void 0 }, (fe) => /* @__PURE__ */ l.createElement(He, { className: "bottom-axis" }, fe.ticks.map((ze, rt) => {
    const Ve = ze.index !== 0 ? o.yAxis.tickRotation : 0, rn = ze.index !== 0 && o.yAxis.tickRotation && o.yAxis.tickRotation > 0 ? "end" : "middle";
    return /* @__PURE__ */ l.createElement(He, { key: `vx-tick-${ze.value}-${rt}`, className: "vx-axis-tick" }, !O.yAxis.hideTicks && /* @__PURE__ */ l.createElement(Mt, { from: ze.from, to: ze.to, stroke: "#333" }), !O.yAxis.hideLabel && /* @__PURE__ */ l.createElement(ut, { x: ze.to.x, y: ze.to.y, angle: -Ve, verticalAnchor: "start", textAnchor: rn }, f(ze.value, "left")));
  }), !O.yAxis.hideAxis && /* @__PURE__ */ l.createElement(Mt, { from: fe.axisFromPoint, to: fe.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ l.createElement(
    Pl,
    {
      top: H,
      left: Number(O.yAxis.size),
      label: O.xAxis.label,
      tickFormat: O.xAxis.type === "date" ? c : O.xAxis.dataKey !== "Year" ? f : (fe) => fe,
      scale: je,
      stroke: "#333",
      tickStroke: "#333",
      numTicks: O.xAxis.numTicks || void 0
    },
    (fe) => /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(He, { className: "bottom-axis" }, fe.ticks.map((ze, rt) => {
      const Ve = ze.index !== 0 ? o.yAxis.tickRotation : 0, rn = ze.index !== 0 && o.yAxis.tickRotation && o.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ l.createElement(He, { key: `vx-tick-${ze.value}-${rt}`, className: "vx-axis-tick" }, !O.yAxis.hideTicks && /* @__PURE__ */ l.createElement(Mt, { from: ze.from, to: ze.to, stroke: "#333" }), !O.yAxis.hideLabel && /* @__PURE__ */ l.createElement(ut, { x: ze.to.x, y: ze.to.y, angle: -Ve, verticalAnchor: "start", textAnchor: rn }, f(ze.value, "left")));
    }), !O.yAxis.hideAxis && /* @__PURE__ */ l.createElement(Mt, { from: fe.axisFromPoint, to: fe.axisToPoint, stroke: "#333" })), /* @__PURE__ */ l.createElement(He, null, /* @__PURE__ */ l.createElement(ut, { x: M / 2, y: o.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, O.xAxis.label)))
  )), A === "Deviation Bar" && /* @__PURE__ */ l.createElement(eR, { animatedChart: Te, xScale: Ee, yScale: Pe, width: M, height: H }), A === "Paired Bar" && /* @__PURE__ */ l.createElement(oR, { originalWidth: B, width: M, height: H }), A === "Scatter Plot" && /* @__PURE__ */ l.createElement(
    JL,
    {
      xScale: Ee,
      yScale: Pe,
      getXAxisData: le,
      getYAxisData: ee,
      xMax: M,
      yMax: H,
      handleTooltipMouseOver: jt,
      handleTooltipMouseOff: fn,
      handleTooltipClick: $t,
      tooltipData: Y,
      showTooltip: tt
    }
  ), A === "Box Plot" && /* @__PURE__ */ l.createElement(QL, { xScale: Ee, yScale: Pe }), (A === "Area Chart" && o.visualizationSubType === "regular" || A === "Combo") && /* @__PURE__ */ l.createElement(zL, { xScale: Ee, yScale: Pe, yMax: H, xMax: M, chartRef: We, width: M, height: H, handleTooltipMouseOver: jt, handleTooltipMouseOff: fn, tooltipData: Y, showTooltip: tt }), (A === "Area Chart" && o.visualizationSubType === "stacked" || A === "Combo") && /* @__PURE__ */ l.createElement(VL, { xScale: Ee, yScale: Pe, yMax: H, xMax: M, chartRef: We, width: M, height: H, handleTooltipMouseOver: jt, handleTooltipMouseOff: fn, tooltipData: Y, showTooltip: tt }), (A === "Bar" || A === "Combo") && /* @__PURE__ */ l.createElement(
    jL,
    {
      xScale: Ee,
      yScale: Pe,
      seriesScale: nt,
      xMax: M,
      yMax: H,
      getXAxisData: le,
      getYAxisData: ee,
      animatedChart: Te,
      visible: Te,
      handleTooltipMouseOver: jt,
      handleTooltipMouseOff: fn,
      handleTooltipClick: $t,
      tooltipData: Y,
      showTooltip: tt,
      chartRef: We
    }
  ), (A === "Line" || A === "Combo") && /* @__PURE__ */ l.createElement(
    wv,
    {
      xScale: Ee,
      yScale: Pe,
      getXAxisData: le,
      getYAxisData: ee,
      xMax: M,
      yMax: H,
      seriesStyle: o.series,
      handleTooltipMouseOver: jt,
      handleTooltipMouseOff: fn,
      handleTooltipClick: $t,
      tooltipData: Y,
      showTooltip: tt,
      chartRef: We
    }
  ), (A === "Forecasting" || A === "Combo") && /* @__PURE__ */ l.createElement(
    nR,
    {
      showTooltip: tt,
      tooltipData: Y,
      xScale: Ee,
      yScale: Pe,
      width: M,
      le: !0,
      height: H,
      xScaleNoPadding: Le,
      chartRef: We,
      getXValueFromCoordinate: Dn,
      handleTooltipMouseOver: jt,
      handleTooltipMouseOff: fn,
      isBrush: !1
    }
  ), o.yAxis.anchors && o.yAxis.anchors.map((fe) => /* @__PURE__ */ l.createElement(Mt, { strokeDasharray: g(fe.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + o.yAxis.size, y: Pe(fe.value) }, to: { x: M, y: Pe(fe.value) }, display: O.horizontal ? "none" : "block" })), A === "Forest Plot" && /* @__PURE__ */ l.createElement(
    aR,
    {
      xScale: Ee,
      yScale: Pe,
      seriesScale: nt,
      width: M,
      height: H,
      maxWidth: B,
      maxHeight: W,
      getXAxisData: le,
      getYAxisData: ee,
      animatedChart: Te,
      visible: Te,
      handleTooltipMouseOver: jt,
      handleTooltipMouseOff: fn,
      handleTooltipClick: $t,
      tooltipData: Y,
      showTooltip: tt,
      chartRef: We,
      config: o
    }
  ), ["Line", "Bar", "Combo", "Area Chart"].includes(o.visualizationType) && !N && /* @__PURE__ */ l.createElement(IR, { xScaleBrush: Ae, yScale: Pe, xMax: M, yMax: H }), A !== "Bar" && A !== "Paired Bar" && A !== "Box Plot" && A !== "Area Chart" && A !== "Scatter Plot" && A !== "Deviation Bar" && A !== "Forecasting" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(wv, { xScale: Ee, yScale: Pe, getXAxisData: le, getYAxisData: ee, xMax: M, yMax: H, seriesStyle: o.series })), o.yAxis.anchors && o.yAxis.anchors.map((fe, ze) => {
    let rt = Pe(fe.value);
    if (!fe.value)
      return;
    const Ve = _ === "horizontal" && A === "Bar" ? o.barHeight / 4 : 0;
    if (rt)
      return (
        // prettier-ignore
        /* @__PURE__ */ l.createElement(
          Mt,
          {
            key: `yAxis-${fe.value}--${ze}`,
            strokeDasharray: g(fe.lineStyle),
            stroke: fe.color ? fe.color : "rgba(0,0,0,1)",
            className: "anchor-y",
            from: { x: 0 + Sr, y: rt - Ve },
            to: { x: B - o.yAxis.rightAxisSize, y: rt - Ve }
          }
        )
      );
  }), o.xAxis.anchors && o.xAxis.anchors.map((fe, ze) => {
    let rt = C;
    _ === "horizontal" && (rt = $);
    let Ve = rt.type === "date" ? Ee(u(fe.value, !1)) : Ee(fe.value);
    if (Ve)
      return (
        // prettier-ignore
        /* @__PURE__ */ l.createElement(
          Mt,
          {
            key: `xAxis-${fe.value}--${ze}`,
            strokeDasharray: g(fe.lineStyle),
            stroke: fe.color ? fe.color : "rgba(0,0,0,1)",
            fill: fe.color ? fe.color : "rgba(0,0,0,1)",
            className: "anchor-x",
            from: { x: Number(Ve) + Number(Sr), y: 0 },
            to: { x: Number(Ve) + Number(Sr), y: H }
          }
        )
      );
  }), Kr && tt && Y && o.visual.verticalHoverLine && /* @__PURE__ */ l.createElement(He, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ l.createElement(Mt, { from: { x: Y.dataXPosition - 10, y: 0 }, to: { x: Y.dataXPosition - 10, y: H }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })), Kr && tt && Y && o.visual.horizontalHoverLine && /* @__PURE__ */ l.createElement(He, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: o.yAxis.size ? o.yAxis.size : 0 }, /* @__PURE__ */ l.createElement(Mt, { from: { x: 0, y: Y.dataYPosition }, to: { x: M, y: Y.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })), o.filters && o.filters.values.length === 0 && r.length === 0 && /* @__PURE__ */ l.createElement(ut, { x: Number(o.yAxis.size) + Number(M / 2), y: W / 2 - o.xAxis.size / 2, textAnchor: "middle" }, o.chartMessage.noData)), Y && Object.entries(Y.data).length > 0 && Kt && tt && Y.dataYPosition && Y.dataXPosition && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${o.tooltips.opacity / 100}) !important`), /* @__PURE__ */ l.createElement(rb, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: Wt, top: Qt }, /* @__PURE__ */ l.createElement("ul", null, typeof Y == "object" && Object.entries(Y.data).map((fe, ze) => /* @__PURE__ */ l.createElement(oi, { item: fe, key: ze }))))), (o.orientation === "horizontal" || o.visualizationType === "Scatter Plot" || o.visualizationType === "Box Plot") && /* @__PURE__ */ l.createElement(BL, { id: `cdc-open-viz-tooltip-${O.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${o.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ l.createElement("div", { className: "animation-trigger", ref: Ie })));
};
var FR = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
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
function zR(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function wb(e) {
  var t = e.id, n = e.markerWidth, r = n === void 0 ? 3 : n, a = e.markerHeight, o = a === void 0 ? 3 : a, u = e.markerUnits, c = u === void 0 ? "userSpaceOnUse" : u, d = e.children, f = zR(e, FR);
  return /* @__PURE__ */ l.createElement("defs", null, /* @__PURE__ */ l.createElement("marker", ff({
    id: t,
    markerWidth: r,
    markerHeight: o,
    markerUnits: c
  }, f), d));
}
wb.propTypes = {
  id: G.string.isRequired,
  size: G.number,
  markerWidth: G.oneOfType([G.string, G.number]),
  markerHeight: G.oneOfType([G.string, G.number]),
  markerUnits: G.string,
  refX: G.oneOfType([G.string, G.number]),
  refY: G.oneOfType([G.string, G.number]),
  strokeWidth: G.number,
  children: G.node.isRequired
};
var WR = ["id", "size", "strokeWidth"];
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
function VR(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function HR(e) {
  var t = e.id, n = e.size, r = n === void 0 ? 9 : n, a = e.strokeWidth, o = a === void 0 ? 1 : a, u = VR(e, WR), c = r + o * 2, d = r, f = c / 2, h = "0 0, " + r + " " + r / 2 + ", 0 " + r;
  return /* @__PURE__ */ l.createElement(wb, pf({
    id: t,
    markerWidth: c,
    markerHeight: c,
    refX: d,
    refY: f,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: o
  }, u), /* @__PURE__ */ l.createElement("g", {
    transform: "translate(" + o + ", " + o + ")"
  }, /* @__PURE__ */ l.createElement("polyline", {
    points: h
  })));
}
const UR = (e) => {
  var L;
  const { width: t, height: n } = e, { transformedData: r, config: a, parseDate: o, formatDate: u, seriesHighlight: c, formatNumber: d, colorScale: f, handleChartAriaLabels: h } = F.useContext(pt);
  let m = t;
  const { minValue: g, maxValue: v } = Cc(a, r), y = { top: 5, right: 10, bottom: 10, left: 10 }, E = n, b = m - a.runtime.yAxis.size, x = E - y.top - 20, w = (N) => a.runtime.xAxis.type === "date" ? o(N[a.runtime.originalXAxis.dataKey]).getTime() : N[a.runtime.originalXAxis.dataKey], A = (N, z) => N[z];
  let D, _;
  const { max: C, min: $ } = a.runtime.yAxis, O = Number(C) >= Number(v), I = Number($) <= Number(g);
  if (r) {
    let N = $ && I ? $ : g, z = C && O ? C : Number.MIN_VALUE;
    if (z === Number.MIN_VALUE && (z = v), a.runtime.yAxis.paddingPercent) {
      let M = (z - N) * a.runtime.yAxis.paddingPercent;
      N -= M, z += M;
    }
    let W = r.map((M) => w(M));
    a.runtime.horizontal ? (D = Cn({
      domain: [N, z],
      range: [0, b]
    }), _ = a.runtime.xAxis.type === "date" ? Cn({ domain: [Math.min(...W), Math.max(...W)] }) : La({ domain: W, padding: 0.5 }), La({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, x]
    }), _.rangeRound([0, x])) : (N = N < 0 ? N * 1.11 : N, _ = Cn({
      domain: [N, z],
      range: [x - y.bottom, y.top]
    }), D = La({
      domain: W,
      range: [y.left, m - y.right]
    }), La({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, b]
    }));
  }
  const B = [D.domain()[0], D.domain()[D.domain().length - 1]];
  return /* @__PURE__ */ l.createElement(Lr, { component: "SparkLine" }, /* @__PURE__ */ l.createElement("svg", { role: "img", "aria-label": h(a), width: t, height: 100, className: "sparkline", tabIndex: 0 }, ((L = a.runtime.lineSeriesKeys) == null ? void 0 : L.length) > 0 ? a.runtime.lineSeriesKeys : a.runtime.seriesKeys.map((N, z) => /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(
    He,
    {
      style: { width: m },
      className: "sparkline-group",
      key: `series-${N}`,
      opacity: a.legend.behavior === "highlight" && c.length > 0 && c.indexOf(N) === -1 ? 0.5 : 1,
      display: a.legend.behavior === "highlight" || c.length === 0 || c.indexOf(N) !== -1 ? "block" : "none"
    },
    r.map((W, M) => {
      let H = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${d(A(W, N))}` : d(A(W, N)), K = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${W[a.runtime.xAxis.dataKey]}` : W[a.runtime.xAxis.dataKey];
      return `${H}${K}`, a.seriesLabel && `${a.seriesLabel}${N}`, /* @__PURE__ */ l.createElement(He, { key: `series-${N}-point-${M}` }, /* @__PURE__ */ l.createElement(ut, { display: a.labels ? "block" : "none", x: D(w(W)), y: _(A(W, N)), fill: f ? f(a.runtime.seriesLabels ? a.runtime.seriesLabels[N] : N) : "#000", textAnchor: "middle" }, d(W[N])));
    }),
    /* @__PURE__ */ l.createElement(
      aa,
      {
        curve: yc,
        data: r,
        x: (W) => D(w(W)),
        y: (W) => _(A(W, N)),
        stroke: f ? f(a.runtime.seriesLabels ? a.runtime.seriesLabels[N] : N) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${z})`
      }
    ),
    /* @__PURE__ */ l.createElement(
      HR,
      {
        id: `arrow--${z}`,
        refX: 2,
        size: 6,
        markerEnd: `url(#arrow--${z})`,
        strokeOpacity: 1,
        fillOpacity: 1,
        fill: f ? f(a.runtime.seriesLabels ? a.runtime.seriesLabels[N] : N) : "#000"
      }
    )
  ), /* @__PURE__ */ l.createElement(
    Pl,
    {
      top: x + y.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: D,
      tickValues: B,
      tickFormat: (W) => a.xAxis.type === "date" ? u(W) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
};
var qR = ["flexDirection", "alignItems", "margin", "display", "children"];
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
function KR(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function lc(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, r = e.alignItems, a = r === void 0 ? "center" : r, o = e.margin, u = o === void 0 ? "0" : o, c = e.display, d = c === void 0 ? "flex" : c, f = e.children, h = KR(e, qR);
  return /* @__PURE__ */ l.createElement("div", hf({
    className: "visx-legend-item",
    style: {
      display: d,
      alignItems: a,
      flexDirection: n,
      margin: u
    }
  }, h), f);
}
lc.propTypes = {
  alignItems: G.string,
  margin: G.oneOfType([G.string, G.number]),
  children: G.node,
  display: G.string
};
var jR = ["flex", "label", "margin", "align", "children"];
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
function GR(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function cc(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, r = e.label, a = e.margin, o = a === void 0 ? "5px 0" : a, u = e.align, c = u === void 0 ? "left" : u, d = e.children, f = GR(e, jR);
  return /* @__PURE__ */ l.createElement("div", mf({
    className: "visx-legend-label",
    style: {
      justifyContent: c,
      display: "flex",
      flex: n,
      margin: o
    }
  }, f), d || r);
}
cc.propTypes = {
  align: G.string,
  label: G.node,
  flex: G.oneOfType([G.string, G.number]),
  margin: G.oneOfType([G.string, G.number]),
  children: G.node
};
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
function mp(e) {
  var t = e.fill, n = e.width, r = e.height, a = e.style;
  return /* @__PURE__ */ l.createElement("div", {
    style: gf({
      width: n,
      height: r,
      background: t
    }, a)
  });
}
mp.propTypes = {
  fill: G.string,
  width: G.oneOfType([G.string, G.number]),
  height: G.oneOfType([G.string, G.number])
};
function _b(e) {
  var t = e.fill, n = e.width, r = e.height, a = e.style, o = typeof n == "string" || typeof n > "u" ? 0 : n, u = typeof r == "string" || typeof r > "u" ? 0 : r, c = Math.max(o, u), d = c / 2;
  return /* @__PURE__ */ l.createElement("svg", {
    width: c,
    height: c
  }, /* @__PURE__ */ l.createElement(He, {
    top: d,
    left: d
  }, /* @__PURE__ */ l.createElement("circle", {
    r: d,
    fill: t,
    style: a
  })));
}
_b.propTypes = {
  fill: G.string,
  width: G.oneOfType([G.string, G.number]),
  height: G.oneOfType([G.string, G.number])
};
function Cb(e) {
  var t = e.fill, n = e.width, r = e.height, a = e.style, o = typeof r == "string" || typeof r > "u" ? 0 : r, u = typeof (a == null ? void 0 : a.strokeWidth) == "number" ? a == null ? void 0 : a.strokeWidth : 2;
  return /* @__PURE__ */ l.createElement("svg", {
    width: n,
    height: r
  }, /* @__PURE__ */ l.createElement(He, {
    top: o / 2 - u / 2
  }, /* @__PURE__ */ l.createElement("line", {
    x1: 0,
    x2: n,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: u,
    style: a
  })));
}
Cb.propTypes = {
  fill: G.string,
  width: G.oneOfType([G.string, G.number]),
  height: G.oneOfType([G.string, G.number])
};
function Uo() {
  return Uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Uo.apply(this, arguments);
}
var ld = function() {
};
function YR(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, r = e.fill, a = r === void 0 ? ld : r, o = e.size, u = o === void 0 ? ld : o, c = e.width, d = e.height, f = e.label, h = e.item, m = e.itemIndex, g = e.shapeStyle, v = g === void 0 ? ld : g, y = {
    width: c,
    height: d,
    item: h,
    itemIndex: m,
    label: f,
    fill: a(Uo({}, f)),
    size: u(Uo({}, f)),
    style: v(Uo({}, f))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ l.createElement(_b, y) : n === "line" ? /* @__PURE__ */ l.createElement(Cb, y) : /* @__PURE__ */ l.createElement(mp, y) : /* @__PURE__ */ l.isValidElement(n) ? /* @__PURE__ */ l.cloneElement(n, y) : n ? /* @__PURE__ */ l.createElement(n, y) : null;
}
function uc() {
  return uc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, uc.apply(this, arguments);
}
function Tb(e) {
  var t = e.shape, n = t === void 0 ? mp : t, r = e.width, a = e.height, o = e.margin, u = e.label, c = e.item, d = e.itemIndex, f = e.fill, h = e.size, m = e.shapeStyle;
  return /* @__PURE__ */ l.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: h ? h(uc({}, u)) : r,
      height: h ? h(uc({}, u)) : a,
      margin: o
    }
  }, YR({
    shape: n,
    item: c,
    itemIndex: d,
    label: u,
    width: r,
    height: a,
    fill: f,
    shapeStyle: m
  }));
}
Tb.propTypes = {
  itemIndex: G.number.isRequired,
  margin: G.oneOfType([G.string, G.number]),
  width: G.oneOfType([G.string, G.number]),
  height: G.oneOfType([G.string, G.number])
};
function Db(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function kv(e) {
  return String(Db(e));
}
function XR(e) {
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
var ZR = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function qo() {
  return qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qo.apply(this, arguments);
}
function QR(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var JR = {
  display: "flex"
};
function Nb(e) {
  var t = e.className, n = e.style, r = n === void 0 ? JR : n, a = e.scale, o = e.shape, u = e.domain, c = e.fill, d = c === void 0 ? kv : c, f = e.size, h = f === void 0 ? kv : f, m = e.labelFormat, g = m === void 0 ? Db : m, v = e.labelTransform, y = v === void 0 ? XR : v, E = e.shapeWidth, b = E === void 0 ? 15 : E, x = e.shapeHeight, w = x === void 0 ? 15 : x, A = e.shapeMargin, D = A === void 0 ? "2px 4px 2px 0" : A, _ = e.shapeStyle, C = e.labelAlign, $ = C === void 0 ? "left" : C, O = e.labelFlex, I = O === void 0 ? "1" : O, B = e.labelMargin, L = B === void 0 ? "0 4px" : B, N = e.itemMargin, z = N === void 0 ? "0" : N, W = e.direction, M = W === void 0 ? "column" : W, H = e.itemDirection, K = H === void 0 ? "row" : H, re = e.legendLabelProps, ie = e.children, te = QR(e, ZR), ce = u || ("domain" in a ? a.domain() : []), oe = y({
    scale: a,
    labelFormat: g
  }), Se = ce.map(oe);
  return ie ? /* @__PURE__ */ l.createElement(l.Fragment, null, ie(Se)) : /* @__PURE__ */ l.createElement("div", {
    className: Yt("visx-legend", t),
    style: qo({}, r, {
      flexDirection: M
    })
  }, Se.map(function(Te, ke) {
    return /* @__PURE__ */ l.createElement(lc, qo({
      key: "legend-" + Te.text + "-" + ke,
      margin: z,
      flexDirection: K
    }, te), /* @__PURE__ */ l.createElement(Tb, {
      shape: o,
      height: w,
      width: b,
      margin: D,
      item: ce[ke],
      itemIndex: ke,
      label: Te,
      fill: d,
      size: h,
      shapeStyle: _
    }), /* @__PURE__ */ l.createElement(cc, qo({
      label: Te.text,
      flex: I,
      margin: L,
      align: $
    }, re)));
  }));
}
Nb.propTypes = {
  children: G.func,
  className: G.string,
  domain: G.array,
  shapeWidth: G.oneOfType([G.string, G.number]),
  shapeHeight: G.oneOfType([G.string, G.number]),
  shapeMargin: G.oneOfType([G.string, G.number]),
  labelAlign: G.string,
  labelFlex: G.oneOfType([G.string, G.number]),
  labelMargin: G.oneOfType([G.string, G.number]),
  itemMargin: G.oneOfType([G.string, G.number]),
  fill: G.func,
  size: G.func,
  shapeStyle: G.func
};
function eM(e) {
  return /* @__PURE__ */ l.createElement(Nb, e);
}
function tM(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const nM = () => {
  const {
    config: e,
    legend: t,
    colorScale: n,
    seriesHighlight: r,
    highlight: a,
    twoColorPalette: o,
    tableData: u,
    highlightReset: c,
    transformedData: d,
    colorPalettes: f,
    currentViewport: h,
    handleLineType: m
  } = F.useContext(pt), { innerClasses: g, containerClasses: v } = tM(e), { visualizationType: y, visualizationSubType: E, series: b, runtime: x, orientation: w } = e, A = (B) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? B.reverse() : B, D = (B) => {
    var z, W, M, H;
    const L = (z = e.legend) == null ? void 0 : z.colorCode;
    if (y === "Deviation Bar") {
      const [K, re] = o[e.twoColor.palette], ie = {
        datum: "X",
        index: 0,
        text: `Below ${e.xAxis.targetLabel}`,
        value: K
      }, te = {
        datum: "X",
        index: 1,
        text: `Above ${e.xAxis.targetLabel}`,
        value: re
      };
      return A([ie, te]);
    }
    if (y === "Bar" && E === "regular" && L && (b == null ? void 0 : b.length) === 1) {
      let K = f[e.palette];
      for (; u.length > K.length; )
        K = K.concat(K);
      K = K.slice(0, d.length);
      const re = /* @__PURE__ */ new Set();
      u.forEach((te) => re.add(te[L]));
      const ie = Array.from(re).map((te, ce) => ({
        datum: te,
        index: ce,
        text: te,
        value: K[ce]
      }));
      return A(ie);
    }
    if (((W = x == null ? void 0 : x.forecastingSeriesKeys) == null ? void 0 : W.length) > 0) {
      let K = [];
      return (H = (M = e.runtime) == null ? void 0 : M.forecastingSeriesKeys) == null || H.map((re, ie) => {
        var te;
        return (te = re == null ? void 0 : re.stages) == null ? void 0 : te.map((ce, oe) => {
          var ke, Ie, We, De;
          let Se = (ke = oc[ce.color]) != null && ke[2] ? (Ie = oc[ce.color]) == null ? void 0 : Ie[2] : (We = f[ce.color]) != null && We[2] ? (De = f[ce.color]) == null ? void 0 : De[2] : "#ccc";
          const Te = {
            datum: ce.key,
            index: oe,
            text: ce.key,
            value: Se
          };
          K.push(Te);
        });
      }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((re, ie) => {
        let te = f[e.palette][ie] ? f[e.palette][ie] : "#ccc";
        const ce = {
          datum: re,
          index: ie,
          text: re,
          value: te
        };
        K.push(ce);
      }), A(K);
    }
    if (e.series.map((K) => K.name).filter((K) => K).length > 0) {
      let K = f[e.palette];
      for (; u.length > K.length; )
        K = K.concat(K);
      K = K.slice(0, d.length);
      const re = /* @__PURE__ */ new Set();
      e.series.forEach((te) => {
        re.add(te.name ? te.name : te.dataKey);
      });
      const ie = Array.from(re).map((te, ce) => ({
        datum: te,
        index: ce,
        text: te,
        value: n(te)
      }));
      return A(ie);
    }
    return A(B);
  }, _ = () => {
    let B = 0;
    const L = t.position === "bottom" || ["sm", "xs", "xxs"].includes(h), N = e.orientation === "horizontal", z = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, W = e.brush.active, M = 25, H = e.brush.height;
    return !N && L && e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && !z && (B = W ? -e.xAxis.size + e.xAxis.labelOffset + M + H : -e.xAxis.size + e.xAxis.labelOffset + M), !N && L && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && !z && (B = W ? -e.xAxis.size + e.xAxis.labelOffset + M + H : -e.xAxis.size + e.xAxis.labelOffset + M), !N && L && e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && z && (B = W ? e.xAxis.tickWidthMax + H + -e.xAxis.size + e.xAxis.labelOffset + M : e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + M), !N && L && !e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && z && (B = W ? e.xAxis.tickWidthMax + H + -e.xAxis.size + M * 1.4 : e.xAxis.tickWidthMax + -e.xAxis.size + M * 1.3), !N && L && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && !z && (B = W ? e.dynamicMarginTop + -e.xAxis.size + M + H : e.dynamicMarginTop + -e.xAxis.size + M), !N && L && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && !z && (B = W ? e.dynamicMarginTop - M : e.dynamicMarginTop - H - M), `${B}px`;
  }, C = t.position === "bottom" || ["sm", "xs", "xxs"].includes(h);
  C && e.brush.active && e.brush.height * 2 + e.dynamicMarginTop / 2, C && e.isResponsiveTicks && e.dynamicMarginTop && !e.brush.active && e.dynamicMarginTop;
  const $ = {
    marginBottom: C ? "15px" : "0px",
    marginTop: _()
    // marginTop: isBottomOrSmallViewport && orientation === 'horizontal' ? `${config.yAxis.label && config.isResponsiveTicks ? config.dynamicMarginTop : config.runtime.xAxis.size}px` : `${brushHeight + top}px`
  }, { HighLightedBarUtils: O } = _c(e);
  let I = O.findDuplicates(e.highlightedBarValues);
  return t ? e.visualizationType !== "Box Plot" && /* @__PURE__ */ l.createElement("aside", { style: $, id: "legend", className: v.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, t.label && /* @__PURE__ */ l.createElement("h2", null, Qi(t.label)), t.description && /* @__PURE__ */ l.createElement("p", null, Qi(t.description)), /* @__PURE__ */ l.createElement(eM, { scale: n, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (B) => /* @__PURE__ */ l.createElement("div", { className: g.join(" ") }, D(B).map((L, N) => {
    var M, H, K, re;
    let z = ["legend-item", `legend-text--${L.text.replace(" ", "").toLowerCase()}`], W = L.datum;
    if (e.exclusions.active && ((M = e.exclusions.keys) != null && M.includes(W)))
      return null;
    if (x.seriesLabels) {
      let ie = e.runtime.seriesLabelsAll.indexOf(W);
      W = e.runtime.seriesKeys[ie], ((H = x == null ? void 0 : x.forecastingSeriesKeys) == null ? void 0 : H.length) > 0 && (W = L.text);
    }
    return r.length > 0 && r.includes(W) === !1 && z.push("inactive"), /* @__PURE__ */ l.createElement(
      lc,
      {
        className: z.join(" "),
        tabIndex: 0,
        key: `legend-quantile-${N}`,
        onKeyPress: (ie) => {
          ie.key === "Enter" && a(L);
        },
        onClick: () => {
          a(L);
        }
      },
      e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ l.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ l.createElement(Mt, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: L.value, strokeWidth: 2, strokeDasharray: m((K = e.series[N]) != null && K.type ? (re = e.series[N]) == null ? void 0 : re.type : "") })) : /* @__PURE__ */ l.createElement(eg, { fill: L.value }),
      /* @__PURE__ */ l.createElement(cc, { align: "left", margin: "0 0 0 4px" }, L.text)
    );
  }), I.map((L, N) => {
    let z = "legend-item", W = L.legendLabel;
    return W ? (r.length > 0 && r.includes(W) === !1 && (z += " inactive"), /* @__PURE__ */ l.createElement(
      lc,
      {
        className: z,
        tabIndex: 0,
        key: `legend-quantile-${N}`,
        onKeyPress: (M) => {
          M.key === "Enter" && a(L.legendLabel);
        },
        onClick: () => {
          a(L.legendLabel);
        }
      },
      /* @__PURE__ */ l.createElement(eg, { fill: "transparent", borderColor: L.color ? L.color : "rgba(255, 102, 1)" }),
      " ",
      /* @__PURE__ */ l.createElement(cc, { align: "left", margin: "0 0 0 4px" }, L.legendLabel ? L.legendLabel : L.value)
    )) : !1;
  }), r.length > 0 && /* @__PURE__ */ l.createElement("button", { className: `legend-reset ${e.theme}`, onClick: (L) => c(L), tabIndex: 0 }, "Reset")))) : null;
}, cd = {
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
    showVertical: !0
  },
  orientation: "vertical",
  color: "pinkpurple",
  columns: {
    // start with a blank list
  },
  legend: {
    hide: !1,
    behavior: "isolate",
    singleRow: !1,
    colorCode: "",
    reverseLabelOrder: !1,
    description: "",
    dynamicLegend: !1,
    dynamicLegendDefaultText: "Show All",
    dynamicLegendItemLimit: 5,
    dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
    dynamicLegendChartMessage: "Select Options from the Legend",
    lineMode: !1,
    verticalSorted: !1
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
    opacity: 90
  },
  forestPlot: {
    startAt: 0,
    width: "auto",
    colors: {
      line: "",
      shape: ""
    },
    estimateField: "",
    estimateRadius: "",
    lowerCiField: "",
    upperCiField: "",
    shape: "",
    rowHeight: 20,
    showZeroLine: !1,
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
      min: 1,
      max: 8,
      scalingColumn: ""
    },
    regression: {
      lower: 0,
      upper: 0,
      estimateField: 0
    },
    leftWidthOffset: 0,
    rightWidthOffset: 0
  },
  area: {
    isStacked: !1
  }
};
var vf = { exports: {} }, ud = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lv;
function rM() {
  if (Lv)
    return ud;
  Lv = 1;
  var e = F;
  function t(m, g) {
    return m === g && (m !== 0 || 1 / m === 1 / g) || m !== m && g !== g;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, a = e.useEffect, o = e.useLayoutEffect, u = e.useDebugValue;
  function c(m, g) {
    var v = g(), y = r({ inst: { value: v, getSnapshot: g } }), E = y[0].inst, b = y[1];
    return o(function() {
      E.value = v, E.getSnapshot = g, d(E) && b({ inst: E });
    }, [m, v, g]), a(function() {
      return d(E) && b({ inst: E }), m(function() {
        d(E) && b({ inst: E });
      });
    }, [m]), u(v), v;
  }
  function d(m) {
    var g = m.getSnapshot;
    m = m.value;
    try {
      var v = g();
      return !n(m, v);
    } catch {
      return !0;
    }
  }
  function f(m, g) {
    return g();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : c;
  return ud.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, ud;
}
var dd = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rv;
function iM() {
  return Rv || (Rv = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = F, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(A) {
      {
        for (var D = arguments.length, _ = new Array(D > 1 ? D - 1 : 0), C = 1; C < D; C++)
          _[C - 1] = arguments[C];
        r("error", A, _);
      }
    }
    function r(A, D, _) {
      {
        var C = t.ReactDebugCurrentFrame, $ = C.getStackAddendum();
        $ !== "" && (D += "%s", _ = _.concat([$]));
        var O = _.map(function(I) {
          return String(I);
        });
        O.unshift("Warning: " + D), Function.prototype.apply.call(console[A], console, O);
      }
    }
    function a(A, D) {
      return A === D && (A !== 0 || 1 / A === 1 / D) || A !== A && D !== D;
    }
    var o = typeof Object.is == "function" ? Object.is : a, u = e.useState, c = e.useEffect, d = e.useLayoutEffect, f = e.useDebugValue, h = !1, m = !1;
    function g(A, D, _) {
      h || e.startTransition !== void 0 && (h = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var C = D();
      if (!m) {
        var $ = D();
        o(C, $) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), m = !0);
      }
      var O = u({
        inst: {
          value: C,
          getSnapshot: D
        }
      }), I = O[0].inst, B = O[1];
      return d(function() {
        I.value = C, I.getSnapshot = D, v(I) && B({
          inst: I
        });
      }, [A, C, D]), c(function() {
        v(I) && B({
          inst: I
        });
        var L = function() {
          v(I) && B({
            inst: I
          });
        };
        return A(L);
      }, [A]), f(C), C;
    }
    function v(A) {
      var D = A.getSnapshot, _ = A.value;
      try {
        var C = D();
        return !o(_, C);
      } catch {
        return !0;
      }
    }
    function y(A, D, _) {
      return D();
    }
    var E = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", b = !E, x = b ? y : g, w = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x;
    dd.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), dd;
}
process.env.NODE_ENV === "production" ? vf.exports = rM() : vf.exports = iM();
var gp = vf.exports, fd = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mv;
function aM() {
  if (Mv)
    return fd;
  Mv = 1;
  var e = F, t = gp;
  function n(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : n, a = t.useSyncExternalStore, o = e.useRef, u = e.useEffect, c = e.useMemo, d = e.useDebugValue;
  return fd.useSyncExternalStoreWithSelector = function(f, h, m, g, v) {
    var y = o(null);
    if (y.current === null) {
      var E = { hasValue: !1, value: null };
      y.current = E;
    } else
      E = y.current;
    y = c(function() {
      function x(C) {
        if (!w) {
          if (w = !0, A = C, C = g(C), v !== void 0 && E.hasValue) {
            var $ = E.value;
            if (v($, C))
              return D = $;
          }
          return D = C;
        }
        if ($ = D, r(A, C))
          return $;
        var O = g(C);
        return v !== void 0 && v($, O) ? $ : (A = C, D = O);
      }
      var w = !1, A, D, _ = m === void 0 ? null : m;
      return [function() {
        return x(h());
      }, _ === null ? void 0 : function() {
        return x(_());
      }];
    }, [h, m, g, v]);
    var b = a(f, y[0], y[1]);
    return u(function() {
      E.hasValue = !0, E.value = b;
    }, [b]), d(b), b;
  }, fd;
}
var pd = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $v;
function oM() {
  return $v || ($v = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = F, t = gp;
    function n(h, m) {
      return h === m && (h !== 0 || 1 / h === 1 / m) || h !== h && m !== m;
    }
    var r = typeof Object.is == "function" ? Object.is : n, a = t.useSyncExternalStore, o = e.useRef, u = e.useEffect, c = e.useMemo, d = e.useDebugValue;
    function f(h, m, g, v, y) {
      var E = o(null), b;
      E.current === null ? (b = {
        hasValue: !1,
        value: null
      }, E.current = b) : b = E.current;
      var x = c(function() {
        var _ = !1, C, $, O = function(N) {
          if (!_) {
            _ = !0, C = N;
            var z = v(N);
            if (y !== void 0 && b.hasValue) {
              var W = b.value;
              if (y(W, z))
                return $ = W, W;
            }
            return $ = z, z;
          }
          var M = C, H = $;
          if (r(M, N))
            return H;
          var K = v(N);
          return y !== void 0 && y(H, K) ? H : (C = N, $ = K, K);
        }, I = g === void 0 ? null : g, B = function() {
          return O(m());
        }, L = I === null ? void 0 : function() {
          return O(I());
        };
        return [B, L];
      }, [m, g, v, y]), w = x[0], A = x[1], D = a(h, w, A);
      return u(function() {
        b.hasValue = !0, b.value = D;
      }, [D]), d(D), D;
    }
    pd.useSyncExternalStoreWithSelector = f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), pd;
}
process.env.NODE_ENV === "production" ? aM() : oM();
function sM(e) {
  e();
}
let Ob = sM;
const lM = (e) => Ob = e, cM = () => Ob, Iv = Symbol.for("react-redux-context"), Bv = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function uM() {
  var e;
  if (!F.createContext)
    return {};
  const t = (e = Bv[Iv]) != null ? e : Bv[Iv] = /* @__PURE__ */ new Map();
  let n = t.get(F.createContext);
  return n || (n = F.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(F.createContext, n)), n;
}
const Pb = /* @__PURE__ */ uM(), dM = () => {
  throw new Error("uSES not initialized!");
};
var yf = { exports: {} }, Nt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fv;
function fM() {
  if (Fv)
    return Nt;
  Fv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function E(b) {
    if (typeof b == "object" && b !== null) {
      var x = b.$$typeof;
      switch (x) {
        case e:
          switch (b = b.type, b) {
            case n:
            case a:
            case r:
            case f:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case u:
                case d:
                case g:
                case m:
                case o:
                  return b;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Nt.ContextConsumer = u, Nt.ContextProvider = o, Nt.Element = e, Nt.ForwardRef = d, Nt.Fragment = n, Nt.Lazy = g, Nt.Memo = m, Nt.Portal = t, Nt.Profiler = a, Nt.StrictMode = r, Nt.Suspense = f, Nt.SuspenseList = h, Nt.isAsyncMode = function() {
    return !1;
  }, Nt.isConcurrentMode = function() {
    return !1;
  }, Nt.isContextConsumer = function(b) {
    return E(b) === u;
  }, Nt.isContextProvider = function(b) {
    return E(b) === o;
  }, Nt.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, Nt.isForwardRef = function(b) {
    return E(b) === d;
  }, Nt.isFragment = function(b) {
    return E(b) === n;
  }, Nt.isLazy = function(b) {
    return E(b) === g;
  }, Nt.isMemo = function(b) {
    return E(b) === m;
  }, Nt.isPortal = function(b) {
    return E(b) === t;
  }, Nt.isProfiler = function(b) {
    return E(b) === a;
  }, Nt.isStrictMode = function(b) {
    return E(b) === r;
  }, Nt.isSuspense = function(b) {
    return E(b) === f;
  }, Nt.isSuspenseList = function(b) {
    return E(b) === h;
  }, Nt.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === a || b === r || b === f || b === h || b === v || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === m || b.$$typeof === o || b.$$typeof === u || b.$$typeof === d || b.$$typeof === y || b.getModuleId !== void 0);
  }, Nt.typeOf = E, Nt;
}
var Ot = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zv;
function pM() {
  return zv || (zv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, E = !1, b = !1, x = !1, w = !1, A;
    A = Symbol.for("react.module.reference");
    function D(ae) {
      return !!(typeof ae == "string" || typeof ae == "function" || ae === n || ae === a || w || ae === r || ae === f || ae === h || x || ae === v || y || E || b || typeof ae == "object" && ae !== null && (ae.$$typeof === g || ae.$$typeof === m || ae.$$typeof === o || ae.$$typeof === u || ae.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ae.$$typeof === A || ae.getModuleId !== void 0));
    }
    function _(ae) {
      if (typeof ae == "object" && ae !== null) {
        var Ne = ae.$$typeof;
        switch (Ne) {
          case e:
            var Ee = ae.type;
            switch (Ee) {
              case n:
              case a:
              case r:
              case f:
              case h:
                return Ee;
              default:
                var Pe = Ee && Ee.$$typeof;
                switch (Pe) {
                  case c:
                  case u:
                  case d:
                  case g:
                  case m:
                  case o:
                    return Pe;
                  default:
                    return Ne;
                }
            }
          case t:
            return Ne;
        }
      }
    }
    var C = u, $ = o, O = e, I = d, B = n, L = g, N = m, z = t, W = a, M = r, H = f, K = h, re = !1, ie = !1;
    function te(ae) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ce(ae) {
      return ie || (ie = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(ae) {
      return _(ae) === u;
    }
    function Se(ae) {
      return _(ae) === o;
    }
    function Te(ae) {
      return typeof ae == "object" && ae !== null && ae.$$typeof === e;
    }
    function ke(ae) {
      return _(ae) === d;
    }
    function Ie(ae) {
      return _(ae) === n;
    }
    function We(ae) {
      return _(ae) === g;
    }
    function De(ae) {
      return _(ae) === m;
    }
    function le(ae) {
      return _(ae) === t;
    }
    function ee(ae) {
      return _(ae) === a;
    }
    function me(ae) {
      return _(ae) === r;
    }
    function V(ae) {
      return _(ae) === f;
    }
    function Oe(ae) {
      return _(ae) === h;
    }
    Ot.ContextConsumer = C, Ot.ContextProvider = $, Ot.Element = O, Ot.ForwardRef = I, Ot.Fragment = B, Ot.Lazy = L, Ot.Memo = N, Ot.Portal = z, Ot.Profiler = W, Ot.StrictMode = M, Ot.Suspense = H, Ot.SuspenseList = K, Ot.isAsyncMode = te, Ot.isConcurrentMode = ce, Ot.isContextConsumer = oe, Ot.isContextProvider = Se, Ot.isElement = Te, Ot.isForwardRef = ke, Ot.isFragment = Ie, Ot.isLazy = We, Ot.isMemo = De, Ot.isPortal = le, Ot.isProfiler = ee, Ot.isStrictMode = me, Ot.isSuspense = V, Ot.isSuspenseList = Oe, Ot.isValidElementType = D, Ot.typeOf = _;
  }()), Ot;
}
process.env.NODE_ENV === "production" ? yf.exports = fM() : yf.exports = pM();
var Wv = yf.exports;
function vp(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function hd(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || vp(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function hM(e, t, n) {
  hd(e, "mapStateToProps"), hd(t, "mapDispatchToProps"), hd(n, "mergeProps");
}
const mM = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function gM(e, t, n, r, {
  areStatesEqual: a,
  areOwnPropsEqual: o,
  areStatePropsEqual: u
}) {
  let c = !1, d, f, h, m, g;
  function v(w, A) {
    return d = w, f = A, h = e(d, f), m = t(r, f), g = n(h, m, f), c = !0, g;
  }
  function y() {
    return h = e(d, f), t.dependsOnOwnProps && (m = t(r, f)), g = n(h, m, f), g;
  }
  function E() {
    return e.dependsOnOwnProps && (h = e(d, f)), t.dependsOnOwnProps && (m = t(r, f)), g = n(h, m, f), g;
  }
  function b() {
    const w = e(d, f), A = !u(w, h);
    return h = w, A && (g = n(h, m, f)), g;
  }
  function x(w, A) {
    const D = !o(A, f), _ = !a(w, d, A, f);
    return d = w, f = A, D && _ ? y() : D ? E() : _ ? b() : g;
  }
  return function(A, D) {
    return c ? x(A, D) : v(A, D);
  };
}
function vM(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: a
  } = t, o = br(t, mM);
  const u = n(e, o), c = r(e, o), d = a(e, o);
  return process.env.NODE_ENV !== "production" && hM(u, c, d), gM(u, c, d, e, o);
}
function yM(e, t) {
  const n = {};
  for (const r in e) {
    const a = e[r];
    typeof a == "function" && (n[r] = (...o) => t(a(...o)));
  }
  return n;
}
function xM(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function kb(e, t, n) {
  xM(e) || vp(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
}
function xf(e) {
  return function(n) {
    const r = e(n);
    function a() {
      return r;
    }
    return a.dependsOnOwnProps = !1, a;
  };
}
function Vv(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Lb(e, t) {
  return function(r, {
    displayName: a
  }) {
    const o = function(c, d) {
      return o.dependsOnOwnProps ? o.mapToProps(c, d) : o.mapToProps(c, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(c, d) {
      o.mapToProps = e, o.dependsOnOwnProps = Vv(e);
      let f = o(c, d);
      return typeof f == "function" && (o.mapToProps = f, o.dependsOnOwnProps = Vv(f), f = o(c, d)), process.env.NODE_ENV !== "production" && kb(f, a, t), f;
    }, o;
  };
}
function yp(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function bM(e) {
  return e && typeof e == "object" ? xf((t) => (
    // @ts-ignore
    yM(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Lb(e, "mapDispatchToProps")
  ) : yp(e, "mapDispatchToProps") : xf((t) => ({
    dispatch: t
  }));
}
function EM(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Lb(e, "mapStateToProps")
  ) : yp(e, "mapStateToProps") : xf(() => ({}));
}
function SM(e, t, n) {
  return Et({}, n, e, t);
}
function AM(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: a
  }) {
    let o = !1, u;
    return function(d, f, h) {
      const m = e(d, f, h);
      return o ? a(m, u) || (u = m) : (o = !0, u = m, process.env.NODE_ENV !== "production" && kb(u, r, "mergeProps")), u;
    };
  };
}
function wM(e) {
  return e ? typeof e == "function" ? AM(e) : yp(e, "mergeProps") : () => SM;
}
function _M() {
  const e = cM();
  let t = null, n = null;
  return {
    clear() {
      t = null, n = null;
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      let r = [], a = t;
      for (; a; )
        r.push(a), a = a.next;
      return r;
    },
    subscribe(r) {
      let a = !0, o = n = {
        callback: r,
        next: null,
        prev: n
      };
      return o.prev ? o.prev.next = o : t = o, function() {
        !a || t === null || (a = !1, o.next ? o.next.prev = o.prev : n = o.prev, o.prev ? o.prev.next = o.next : t = o.next);
      };
    }
  };
}
const Hv = {
  notify() {
  },
  get: () => []
};
function Rb(e, t) {
  let n, r = Hv, a = 0, o = !1;
  function u(E) {
    h();
    const b = r.subscribe(E);
    let x = !1;
    return () => {
      x || (x = !0, b(), m());
    };
  }
  function c() {
    r.notify();
  }
  function d() {
    y.onStateChange && y.onStateChange();
  }
  function f() {
    return o;
  }
  function h() {
    a++, n || (n = t ? t.addNestedSub(d) : e.subscribe(d), r = _M());
  }
  function m() {
    a--, n && a === 0 && (n(), n = void 0, r.clear(), r = Hv);
  }
  function g() {
    o || (o = !0, h());
  }
  function v() {
    o && (o = !1, m());
  }
  const y = {
    addNestedSub: u,
    notifyNestedSubs: c,
    handleChangeWrapper: d,
    isSubscribed: f,
    trySubscribe: g,
    tryUnsubscribe: v,
    getListeners: () => r
  };
  return y;
}
const CM = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", dc = CM ? F.useLayoutEffect : F.useEffect;
function Uv(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function md(e, t) {
  if (Uv(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let a = 0; a < n.length; a++)
    if (!Object.prototype.hasOwnProperty.call(t, n[a]) || !Uv(e[n[a]], t[n[a]]))
      return !1;
  return !0;
}
const TM = ["reactReduxForwardedRef"];
let Mb = dM;
const DM = (e) => {
  Mb = e;
}, NM = [null, null], OM = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function PM(e, t, n) {
  dc(() => e(...t), n);
}
function kM(e, t, n, r, a, o) {
  e.current = r, n.current = !1, a.current && (a.current = null, o());
}
function LM(e, t, n, r, a, o, u, c, d, f, h) {
  if (!e)
    return () => {
    };
  let m = !1, g = null;
  const v = () => {
    if (m || !c.current)
      return;
    const E = t.getState();
    let b, x;
    try {
      b = r(E, a.current);
    } catch (w) {
      x = w, g = w;
    }
    x || (g = null), b === o.current ? u.current || f() : (o.current = b, d.current = b, u.current = !0, h());
  };
  return n.onStateChange = v, n.trySubscribe(), v(), () => {
    if (m = !0, n.tryUnsubscribe(), n.onStateChange = null, g)
      throw g;
  };
}
function RM(e, t) {
  return e === t;
}
let qv = !1;
function $b(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: a = RM,
  areOwnPropsEqual: o = md,
  areStatePropsEqual: u = md,
  areMergedPropsEqual: c = md,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: d = !1,
  // the context consumer to use
  context: f = Pb
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !qv && (qv = !0, vp('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const h = f, m = EM(e), g = bM(t), v = wM(n), y = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Wv.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${OM(b)}`);
    const x = b.displayName || b.name || "Component", w = `Connect(${x})`, A = {
      shouldHandleStateChanges: y,
      displayName: w,
      wrappedComponentName: x,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: m,
      // @ts-ignore
      initMapDispatchToProps: g,
      initMergeProps: v,
      areStatesEqual: a,
      areStatePropsEqual: u,
      areOwnPropsEqual: o,
      areMergedPropsEqual: c
    };
    function D($) {
      const [O, I, B] = F.useMemo(() => {
        const {
          reactReduxForwardedRef: V
        } = $, Oe = br($, TM);
        return [$.context, V, Oe];
      }, [$]), L = F.useMemo(() => O && O.Consumer && // @ts-ignore
      Wv.isContextConsumer(/* @__PURE__ */ F.createElement(O.Consumer, null)) ? O : h, [O, h]), N = F.useContext(L), z = !!$.store && !!$.store.getState && !!$.store.dispatch, W = !!N && !!N.store;
      if (process.env.NODE_ENV !== "production" && !z && !W)
        throw new Error(`Could not find "store" in the context of "${w}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${w} in connect options.`);
      const M = z ? $.store : N.store, H = W ? N.getServerState : M.getState, K = F.useMemo(() => vM(M.dispatch, A), [M]), [re, ie] = F.useMemo(() => {
        if (!y)
          return NM;
        const V = Rb(M, z ? void 0 : N.subscription), Oe = V.notifyNestedSubs.bind(V);
        return [V, Oe];
      }, [M, z, N]), te = F.useMemo(() => z ? N : Et({}, N, {
        subscription: re
      }), [z, N, re]), ce = F.useRef(), oe = F.useRef(B), Se = F.useRef(), Te = F.useRef(!1);
      F.useRef(!1);
      const ke = F.useRef(!1), Ie = F.useRef();
      dc(() => (ke.current = !0, () => {
        ke.current = !1;
      }), []);
      const We = F.useMemo(() => () => Se.current && B === oe.current ? Se.current : K(M.getState(), B), [M, B]), De = F.useMemo(() => (Oe) => re ? LM(
        y,
        M,
        re,
        // @ts-ignore
        K,
        oe,
        ce,
        Te,
        ke,
        Se,
        ie,
        Oe
      ) : () => {
      }, [re]);
      PM(kM, [oe, ce, Te, B, Se, ie]);
      let le;
      try {
        le = Mb(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          De,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          We,
          H ? () => K(H(), B) : We
        );
      } catch (V) {
        throw Ie.current && (V.message += `
The error may be correlated with this previous error:
${Ie.current.stack}

`), V;
      }
      dc(() => {
        Ie.current = void 0, Se.current = void 0, ce.current = le;
      });
      const ee = F.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ F.createElement(b, Et({}, le, {
          ref: I
        }))
      ), [I, b, le]);
      return F.useMemo(() => y ? /* @__PURE__ */ F.createElement(L.Provider, {
        value: te
      }, ee) : ee, [L, ee, te]);
    }
    const C = F.memo(D);
    if (C.WrappedComponent = b, C.displayName = D.displayName = w, d) {
      const O = F.forwardRef(function(B, L) {
        return /* @__PURE__ */ F.createElement(C, Et({}, B, {
          reactReduxForwardedRef: L
        }));
      });
      return O.displayName = w, O.WrappedComponent = b, Og(O, b);
    }
    return Og(C, b);
  };
}
function MM({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: a = "once",
  noopCheck: o = "once"
}) {
  const u = F.useMemo(() => {
    const f = Rb(e);
    return {
      store: e,
      subscription: f,
      getServerState: r ? () => r : void 0,
      stabilityCheck: a,
      noopCheck: o
    };
  }, [e, r, a, o]), c = F.useMemo(() => e.getState(), [e]);
  dc(() => {
    const {
      subscription: f
    } = u;
    return f.onStateChange = f.notifyNestedSubs, f.trySubscribe(), c !== e.getState() && f.notifyNestedSubs(), () => {
      f.tryUnsubscribe(), f.onStateChange = void 0;
    };
  }, [u, c]);
  const d = t || Pb;
  return /* @__PURE__ */ F.createElement(d.Provider, {
    value: u
  }, n);
}
DM(gp.useSyncExternalStore);
lM(Nf.unstable_batchedUpdates);
function $M(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Ib(e, t) {
  var n = F.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = F.useRef(!0), a = F.useRef(n), o = r.current || !!(t && a.current.inputs && $M(t, a.current.inputs)), u = o ? a.current : {
    inputs: t,
    result: e()
  };
  return F.useEffect(function() {
    r.current = !1, a.current = u;
  }, [u]), u.result;
}
function IM(e, t) {
  return Ib(function() {
    return e;
  }, t);
}
var bt = Ib, Ke = IM, kr = function(t) {
  var n = t.top, r = t.right, a = t.bottom, o = t.left, u = r - o, c = a - n, d = {
    top: n,
    right: r,
    bottom: a,
    left: o,
    width: u,
    height: c,
    x: o,
    y: n,
    center: {
      x: (r + o) / 2,
      y: (a + n) / 2
    }
  };
  return d;
}, xp = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Kv = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, BM = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, gd = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, bp = function(t) {
  var n = t.borderBox, r = t.margin, a = r === void 0 ? gd : r, o = t.border, u = o === void 0 ? gd : o, c = t.padding, d = c === void 0 ? gd : c, f = kr(xp(n, a)), h = kr(Kv(n, u)), m = kr(Kv(h, d));
  return {
    marginBox: f,
    borderBox: kr(n),
    paddingBox: h,
    contentBox: m,
    margin: a,
    border: u,
    padding: d
  };
}, gr = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var a = Number(n);
  return isNaN(a) && (process.env.NODE_ENV !== "production" ? sg(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : sg(!1)), a;
}, FM = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, fc = function(t, n) {
  var r = t.borderBox, a = t.border, o = t.margin, u = t.padding, c = BM(r, n);
  return bp({
    borderBox: c,
    border: a,
    margin: o,
    padding: u
  });
}, pc = function(t, n) {
  return n === void 0 && (n = FM()), fc(t, n);
}, Bb = function(t, n) {
  var r = {
    top: gr(n.marginTop),
    right: gr(n.marginRight),
    bottom: gr(n.marginBottom),
    left: gr(n.marginLeft)
  }, a = {
    top: gr(n.paddingTop),
    right: gr(n.paddingRight),
    bottom: gr(n.paddingBottom),
    left: gr(n.paddingLeft)
  }, o = {
    top: gr(n.borderTopWidth),
    right: gr(n.borderRightWidth),
    bottom: gr(n.borderBottomWidth),
    left: gr(n.borderLeftWidth)
  };
  return bp({
    borderBox: t,
    margin: r,
    padding: a,
    border: o
  });
}, Fb = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Bb(n, r);
}, jv = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function zM(e, t) {
  return !!(e === t || jv(e) && jv(t));
}
function WM(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!zM(e[n], t[n]))
      return !1;
  return !0;
}
function gn(e, t) {
  t === void 0 && (t = WM);
  var n = null;
  function r() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    if (n && n.lastThis === this && t(a, n.lastArgs))
      return n.lastResult;
    var u = e.apply(this, a);
    return n = {
      lastResult: u,
      lastArgs: a,
      lastThis: this
    }, u;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var VM = function(t) {
  var n = [], r = null, a = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    n = c, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return a.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, a;
};
const Jo = VM, HM = process.env.NODE_ENV === "production", UM = /[ \t]{2,}/g, qM = /^[ \t]*/gm, Gv = (e) => e.replace(UM, " ").replace(qM, "").trim(), KM = (e) => Gv(`
  %c@hello-pangea/dnd

  %c${Gv(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), jM = (e) => [KM(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], GM = "__@hello-pangea/dnd-disable-dev-warnings";
function zb(e, t) {
  HM || typeof window < "u" && window[GM] || console[e](...jM(t));
}
const Ft = zb.bind(null, "warn"), bf = zb.bind(null, "error");
function _i() {
}
function YM(e, t) {
  return {
    ...e,
    ...t
  };
}
function xr(e, t, n) {
  const r = t.map((a) => {
    const o = YM(n, a.options);
    return e.addEventListener(a.eventName, a.fn, o), function() {
      e.removeEventListener(a.eventName, a.fn, o);
    };
  });
  return function() {
    r.forEach((o) => {
      o();
    });
  };
}
const XM = process.env.NODE_ENV === "production", Yv = "Invariant failed";
class es extends Error {
}
es.prototype.toString = function() {
  return this.message;
};
function Z(e, t) {
  if (!e)
    throw XM ? new es(Yv) : new es(`${Yv}: ${t || ""}`);
}
class ZM extends l.Component {
  constructor() {
    super(...arguments), this.callbacks = null, this.unbind = _i, this.onWindowError = (t) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Ft(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const r = t.error;
      r instanceof es && (t.preventDefault(), process.env.NODE_ENV !== "production" && bf(r.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (t) => {
      this.callbacks = t;
    };
  }
  componentDidMount() {
    this.unbind = xr(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof es) {
      process.env.NODE_ENV !== "production" && bf(t.message), this.setState({});
      return;
    }
    throw t;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const QM = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, hc = (e) => e + 1, JM = (e) => `
  You have lifted an item in position ${hc(e.source.index)}
`, Wb = (e, t) => {
  const n = e.droppableId === t.droppableId, r = hc(e.index), a = hc(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${a}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${a}
  `;
}, Vb = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, e$ = (e) => {
  const t = e.destination;
  if (t)
    return Wb(e.source, t);
  const n = e.combine;
  return n ? Vb(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Xv = (e) => `
  The item has returned to its starting position
  of ${hc(e.index)}
`, t$ = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Xv(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Wb(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Vb(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Xv(e.source)}
  `;
}, n$ = {
  dragHandleUsageInstructions: QM,
  onDragStart: JM,
  onDragUpdate: e$,
  onDragEnd: t$
};
var Ll = n$;
const vn = {
  x: 0,
  y: 0
}, Tn = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), nr = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Ci = (e, t) => e.x === t.x && e.y === t.y, ja = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), oa = function(e, t, n) {
  return n === void 0 && (n = 0), e === "x" ? {
    x: t,
    y: n
  } : {
    x: n,
    y: t
  };
}, ts = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Zv = (e, t) => Math.min(...t.map((n) => ts(e, n))), Hb = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var r$ = (e, t) => {
  const n = kr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const ps = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Qv = (e) => [{
  x: e.left,
  y: e.top
}, {
  x: e.right,
  y: e.top
}, {
  x: e.left,
  y: e.bottom
}, {
  x: e.right,
  y: e.bottom
}], i$ = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, a$ = (e, t) => t ? ps(e, t.scroll.diff.displacement) : e, o$ = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, s$ = (e, t) => t && t.shouldClipSubject ? r$(t.pageMarginBox, e) : kr(e);
var Ua = (e) => {
  let {
    page: t,
    withPlaceholder: n,
    axis: r,
    frame: a
  } = e;
  const o = a$(t.marginBox, a), u = o$(o, r, n), c = s$(u, a);
  return {
    page: t,
    withPlaceholder: n,
    active: c
  };
}, Ep = (e, t) => {
  e.frame || (process.env.NODE_ENV, Z(!1));
  const n = e.frame, r = nr(t, n.scroll.initial), a = ja(r), o = {
    ...n,
    scroll: {
      initial: n.scroll.initial,
      current: t,
      diff: {
        value: r,
        displacement: a
      },
      max: n.scroll.max
    }
  }, u = Ua({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: o
  });
  return {
    ...e,
    frame: o,
    subject: u
  };
};
const Ub = gn((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), qb = gn((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Dc = gn((e) => Object.values(e)), l$ = gn((e) => Object.values(e));
var ca = gn((e, t) => l$(t).filter((r) => e === r.descriptor.droppableId).sort((r, a) => r.descriptor.index - a.descriptor.index));
function Sp(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Nc(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Oc = gn((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), c$ = (e) => {
  let {
    isMovingForward: t,
    draggable: n,
    destination: r,
    insideDestination: a,
    previousImpact: o
  } = e;
  if (!r.isCombineEnabled || !Sp(o))
    return null;
  function c(y) {
    const E = {
      type: "COMBINE",
      combine: {
        draggableId: y,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...o,
      at: E
    };
  }
  const d = o.displaced.all, f = d.length ? d[0] : null;
  if (t)
    return f ? c(f) : null;
  const h = Oc(n, a);
  if (!f) {
    if (!h.length)
      return null;
    const y = h[h.length - 1];
    return c(y.descriptor.id);
  }
  const m = h.findIndex((y) => y.descriptor.id === f);
  m === -1 && (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find displaced item in set") : Z(!1));
  const g = m - 1;
  if (g < 0)
    return null;
  const v = h[g];
  return c(v.descriptor.id);
}, Ga = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Kb = {
  point: vn,
  value: 0
}, ns = {
  invisible: {},
  visible: {},
  all: []
}, u$ = {
  displaced: ns,
  displacedBy: Kb,
  at: null
};
var d$ = u$, Er = (e, t) => (n) => e <= n && n <= t, jb = (e) => {
  const t = Er(e.top, e.bottom), n = Er(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const o = t(r.top) || t(r.bottom), u = n(r.left) || n(r.right);
    if (o && u)
      return !0;
    const d = r.top < e.top && r.bottom > e.bottom, f = r.left < e.left && r.right > e.right;
    return d && f ? !0 : d && u || f && o;
  };
}, f$ = (e) => {
  const t = Er(e.top, e.bottom), n = Er(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Ap = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Gb = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var p$ = (e) => (t) => {
  const n = Er(t.top, t.bottom), r = Er(t.left, t.right);
  return (a) => e === Ap ? n(a.top) && n(a.bottom) : r(a.left) && r(a.right);
};
const h$ = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : vn;
  return ps(e, n);
}, m$ = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, g$ = (e, t, n) => n(t)(e), wp = (e) => {
  let {
    target: t,
    destination: n,
    viewport: r,
    withDroppableDisplacement: a,
    isVisibleThroughFrameFn: o
  } = e;
  const u = a ? h$(t, n) : t;
  return m$(u, n, o) && g$(u, r, o);
}, v$ = (e) => wp({
  ...e,
  isVisibleThroughFrameFn: jb
}), Yb = (e) => wp({
  ...e,
  isVisibleThroughFrameFn: f$
}), y$ = (e) => wp({
  ...e,
  isVisibleThroughFrameFn: p$(e.destination.axis)
}), x$ = (e, t, n) => {
  if (typeof n == "boolean")
    return n;
  if (!t)
    return !0;
  const {
    invisible: r,
    visible: a
  } = t;
  if (r[e])
    return !1;
  const o = a[e];
  return o ? o.shouldAnimate : !0;
};
function b$(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return kr(xp(n, r));
}
function rs(e) {
  let {
    afterDragging: t,
    destination: n,
    displacedBy: r,
    viewport: a,
    forceShouldAnimate: o,
    last: u
  } = e;
  return t.reduce(function(d, f) {
    const h = b$(f, r), m = f.descriptor.id;
    if (d.all.push(m), !v$({
      target: h,
      destination: n,
      viewport: a,
      withDroppableDisplacement: !0
    }))
      return d.invisible[f.descriptor.id] = !0, d;
    const v = x$(m, u, o), y = {
      draggableId: m,
      shouldAnimate: v
    };
    return d.visible[m] = y, d;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function E$(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Jv(e) {
  let {
    insideDestination: t,
    inHomeList: n,
    displacedBy: r,
    destination: a
  } = e;
  const o = E$(t, {
    inHomeList: n
  });
  return {
    displaced: ns,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: {
        droppableId: a.descriptor.id,
        index: o
      }
    }
  };
}
function mc(e) {
  let {
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: a,
    displacedBy: o,
    last: u,
    index: c,
    forceShouldAnimate: d
  } = e;
  const f = Ga(t, r);
  if (c == null)
    return Jv({
      insideDestination: n,
      inHomeList: f,
      displacedBy: o,
      destination: r
    });
  const h = n.find((E) => E.descriptor.index === c);
  if (!h)
    return Jv({
      insideDestination: n,
      inHomeList: f,
      displacedBy: o,
      destination: r
    });
  const m = Oc(t, n), g = n.indexOf(h), v = m.slice(g);
  return {
    displaced: rs({
      afterDragging: v,
      destination: r,
      displacedBy: o,
      last: u,
      viewport: a.frame,
      forceShouldAnimate: d
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: c
      }
    }
  };
}
function Oi(e, t) {
  return !!t.effected[e];
}
var S$ = (e) => {
  let {
    isMovingForward: t,
    destination: n,
    draggables: r,
    combine: a,
    afterCritical: o
  } = e;
  if (!n.isCombineEnabled)
    return null;
  const u = a.draggableId, d = r[u].descriptor.index;
  return Oi(u, o) ? t ? d : d - 1 : t ? d + 1 : d;
}, A$ = (e) => {
  let {
    isMovingForward: t,
    isInHomeList: n,
    insideDestination: r,
    location: a
  } = e;
  if (!r.length)
    return null;
  const o = a.index, u = t ? o + 1 : o - 1, c = r[0].descriptor.index, d = r[r.length - 1].descriptor.index, f = n ? d : d + 1;
  return u < c || u > f ? null : u;
}, w$ = (e) => {
  let {
    isMovingForward: t,
    isInHomeList: n,
    draggable: r,
    draggables: a,
    destination: o,
    insideDestination: u,
    previousImpact: c,
    viewport: d,
    afterCritical: f
  } = e;
  const h = c.at;
  if (h || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot move in direction without previous impact location") : Z(!1)), h.type === "REORDER") {
    const g = A$({
      isMovingForward: t,
      isInHomeList: n,
      location: h.destination,
      insideDestination: u
    });
    return g == null ? null : mc({
      draggable: r,
      insideDestination: u,
      destination: o,
      viewport: d,
      last: c.displaced,
      displacedBy: c.displacedBy,
      index: g
    });
  }
  const m = S$({
    isMovingForward: t,
    destination: o,
    displaced: c.displaced,
    draggables: a,
    combine: h.combine,
    afterCritical: f
  });
  return m == null ? null : mc({
    draggable: r,
    insideDestination: u,
    destination: o,
    viewport: d,
    last: c.displaced,
    displacedBy: c.displacedBy,
    index: m
  });
}, _$ = (e) => {
  let {
    displaced: t,
    afterCritical: n,
    combineWith: r,
    displacedBy: a
  } = e;
  const o = !!(t.visible[r] || t.invisible[r]);
  return Oi(r, n) ? o ? vn : ja(a.point) : o ? a.point : vn;
}, C$ = (e) => {
  let {
    afterCritical: t,
    impact: n,
    draggables: r
  } = e;
  const a = Nc(n);
  a || (process.env.NODE_ENV, Z(!1));
  const o = a.draggableId, u = r[o].page.borderBox.center, c = _$({
    displaced: n.displaced,
    afterCritical: t,
    combineWith: o,
    displacedBy: n.displacedBy
  });
  return Tn(u, c);
};
const Xb = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, T$ = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, _p = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, ey = (e) => {
  let {
    axis: t,
    moveRelativeTo: n,
    isMoving: r
  } = e;
  return oa(t.line, n.marginBox[t.end] + Xb(t, r), _p(t, n.marginBox, r));
}, ty = (e) => {
  let {
    axis: t,
    moveRelativeTo: n,
    isMoving: r
  } = e;
  return oa(t.line, n.marginBox[t.start] - T$(t, r), _p(t, n.marginBox, r));
}, D$ = (e) => {
  let {
    axis: t,
    moveInto: n,
    isMoving: r
  } = e;
  return oa(t.line, n.contentBox[t.start] + Xb(t, r), _p(t, n.contentBox, r));
};
var N$ = (e) => {
  let {
    impact: t,
    draggable: n,
    draggables: r,
    droppable: a,
    afterCritical: o
  } = e;
  const u = ca(a.descriptor.id, r), c = n.page, d = a.axis;
  if (!u.length)
    return D$({
      axis: d,
      moveInto: a.page,
      isMoving: c
    });
  const {
    displaced: f,
    displacedBy: h
  } = t, m = f.all[0];
  if (m) {
    const v = r[m];
    if (Oi(m, o))
      return ty({
        axis: d,
        moveRelativeTo: v.page,
        isMoving: c
      });
    const y = fc(v.page, h.point);
    return ty({
      axis: d,
      moveRelativeTo: y,
      isMoving: c
    });
  }
  const g = u[u.length - 1];
  if (g.descriptor.id === n.descriptor.id)
    return c.borderBox.center;
  if (Oi(g.descriptor.id, o)) {
    const v = fc(g.page, ja(o.displacedBy.point));
    return ey({
      axis: d,
      moveRelativeTo: v,
      isMoving: c
    });
  }
  return ey({
    axis: d,
    moveRelativeTo: g.page,
    isMoving: c
  });
}, Ef = (e, t) => {
  const n = e.frame;
  return n ? Tn(t, n.scroll.diff.displacement) : t;
};
const O$ = (e) => {
  let {
    impact: t,
    draggable: n,
    droppable: r,
    draggables: a,
    afterCritical: o
  } = e;
  const u = n.page.borderBox.center, c = t.at;
  return !r || !c ? u : c.type === "REORDER" ? N$({
    impact: t,
    draggable: n,
    draggables: a,
    droppable: r,
    afterCritical: o
  }) : C$({
    impact: t,
    draggables: a,
    afterCritical: o
  });
};
var Pc = (e) => {
  const t = O$(e), n = e.droppable;
  return n ? Ef(n, t) : t;
}, Zb = (e, t) => {
  const n = nr(t, e.scroll.initial), r = ja(n);
  return {
    frame: kr({
      top: t.y,
      bottom: t.y + e.frame.height,
      left: t.x,
      right: t.x + e.frame.width
    }),
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: t,
      diff: {
        value: n,
        displacement: r
      }
    }
  };
};
function ny(e, t) {
  return e.map((n) => t[n]);
}
function P$(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var k$ = (e) => {
  let {
    impact: t,
    viewport: n,
    destination: r,
    draggables: a,
    maxScrollChange: o
  } = e;
  const u = Zb(n, Tn(n.scroll.current, o)), c = r.frame ? Ep(r, Tn(r.frame.scroll.current, o)) : r, d = t.displaced, f = rs({
    afterDragging: ny(d.all, a),
    destination: r,
    displacedBy: t.displacedBy,
    viewport: u.frame,
    last: d,
    forceShouldAnimate: !1
  }), h = rs({
    afterDragging: ny(d.all, a),
    destination: c,
    displacedBy: t.displacedBy,
    viewport: n.frame,
    last: d,
    forceShouldAnimate: !1
  }), m = {}, g = {}, v = [d, f, h];
  return d.all.forEach((E) => {
    const b = P$(E, v);
    if (b) {
      g[E] = b;
      return;
    }
    m[E] = !0;
  }), {
    ...t,
    displaced: {
      all: d.all,
      invisible: m,
      visible: g
    }
  };
}, L$ = (e, t) => Tn(e.scroll.diff.displacement, t), Cp = (e) => {
  let {
    pageBorderBoxCenter: t,
    draggable: n,
    viewport: r
  } = e;
  const a = L$(r, t), o = nr(a, n.page.borderBox.center);
  return Tn(n.client.borderBox.center, o);
}, Qb = (e) => {
  let {
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: r,
    viewport: a,
    withDroppableDisplacement: o,
    onlyOnMainAxis: u = !1
  } = e;
  const c = nr(r, t.page.borderBox.center), f = {
    target: ps(t.page.borderBox, c),
    destination: n,
    withDroppableDisplacement: o,
    viewport: a
  };
  return u ? y$(f) : Yb(f);
}, R$ = (e) => {
  let {
    isMovingForward: t,
    draggable: n,
    destination: r,
    draggables: a,
    previousImpact: o,
    viewport: u,
    previousPageBorderBoxCenter: c,
    previousClientSelection: d,
    afterCritical: f
  } = e;
  if (!r.isEnabled)
    return null;
  const h = ca(r.descriptor.id, a), m = Ga(n, r), g = c$({
    isMovingForward: t,
    draggable: n,
    destination: r,
    insideDestination: h,
    previousImpact: o
  }) || w$({
    isMovingForward: t,
    isInHomeList: m,
    draggable: n,
    draggables: a,
    destination: r,
    insideDestination: h,
    previousImpact: o,
    viewport: u,
    afterCritical: f
  });
  if (!g)
    return null;
  const v = Pc({
    impact: g,
    draggable: n,
    droppable: r,
    draggables: a,
    afterCritical: f
  });
  if (Qb({
    draggable: n,
    destination: r,
    newPageBorderBoxCenter: v,
    viewport: u.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Cp({
        pageBorderBoxCenter: v,
        draggable: n,
        viewport: u
      }),
      impact: g,
      scrollJumpRequest: null
    };
  const E = nr(v, c), b = k$({
    impact: g,
    viewport: u,
    destination: r,
    draggables: a,
    maxScrollChange: E
  });
  return {
    clientSelection: d,
    impact: b,
    scrollJumpRequest: E
  };
};
const Fn = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot get clipped area from droppable") : Z(!1)), t;
};
var M$ = (e) => {
  let {
    isMovingForward: t,
    pageBorderBoxCenter: n,
    source: r,
    droppables: a,
    viewport: o
  } = e;
  const u = r.subject.active;
  if (!u)
    return null;
  const c = r.axis, d = Er(u[c.start], u[c.end]), f = Dc(a).filter((m) => m !== r).filter((m) => m.isEnabled).filter((m) => !!m.subject.active).filter((m) => jb(o.frame)(Fn(m))).filter((m) => {
    const g = Fn(m);
    return t ? u[c.crossAxisEnd] < g[c.crossAxisEnd] : g[c.crossAxisStart] < u[c.crossAxisStart];
  }).filter((m) => {
    const g = Fn(m), v = Er(g[c.start], g[c.end]);
    return d(g[c.start]) || d(g[c.end]) || v(u[c.start]) || v(u[c.end]);
  }).sort((m, g) => {
    const v = Fn(m)[c.crossAxisStart], y = Fn(g)[c.crossAxisStart];
    return t ? v - y : y - v;
  }).filter((m, g, v) => Fn(m)[c.crossAxisStart] === Fn(v[0])[c.crossAxisStart]);
  if (!f.length)
    return null;
  if (f.length === 1)
    return f[0];
  const h = f.filter((m) => Er(Fn(m)[c.start], Fn(m)[c.end])(n[c.line]));
  return h.length === 1 ? h[0] : h.length > 1 ? h.sort((m, g) => Fn(m)[c.start] - Fn(g)[c.start])[0] : f.sort((m, g) => {
    const v = Zv(n, Qv(Fn(m))), y = Zv(n, Qv(Fn(g)));
    return v !== y ? v - y : Fn(m)[c.start] - Fn(g)[c.start];
  })[0];
};
const ry = (e, t) => {
  const n = e.page.borderBox.center;
  return Oi(e.descriptor.id, t) ? nr(n, t.displacedBy.point) : n;
}, $$ = (e, t) => {
  const n = e.page.borderBox;
  return Oi(e.descriptor.id, t) ? ps(n, ja(t.displacedBy.point)) : n;
};
var I$ = (e) => {
  let {
    pageBorderBoxCenter: t,
    viewport: n,
    destination: r,
    insideDestination: a,
    afterCritical: o
  } = e;
  return a.filter((c) => Yb({
    target: $$(c, o),
    destination: r,
    viewport: n.frame,
    withDroppableDisplacement: !0
  })).sort((c, d) => {
    const f = ts(t, Ef(r, ry(c, o))), h = ts(t, Ef(r, ry(d, o)));
    return f < h ? -1 : h < f ? 1 : c.descriptor.index - d.descriptor.index;
  })[0] || null;
}, hs = gn(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: oa(t.line, r)
  };
});
const B$ = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return oa(r.line, t[r.line]);
  const a = e.subject.page.contentBox[r.size], d = ca(e.descriptor.id, n).reduce((f, h) => f + h.client.marginBox[r.size], 0) + t[r.line] - a;
  return d <= 0 ? null : oa(r.line, d);
}, Jb = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), e0 = (e, t, n) => {
  const r = e.frame;
  Ga(t, e) && (process.env.NODE_ENV !== "production" ? Z(!1, "Should not add placeholder space to home list") : Z(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot add placeholder size to a subject when it already has one") : Z(!1));
  const a = hs(e.axis, t.displaceBy).point, o = B$(e, a, n), u = {
    placeholderSize: a,
    increasedBy: o,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const h = Ua({
      page: e.subject.page,
      withPlaceholder: u,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: h
    };
  }
  const c = o ? Tn(r.scroll.max, o) : r.scroll.max, d = Jb(r, c), f = Ua({
    page: e.subject.page,
    withPlaceholder: u,
    axis: e.axis,
    frame: d
  });
  return {
    ...e,
    subject: f,
    frame: d
  };
}, F$ = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot remove placeholder form subject when there was none") : Z(!1));
  const n = e.frame;
  if (!n) {
    const u = Ua({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: u
    };
  }
  const r = t.oldFrameMaxScroll;
  r || (process.env.NODE_ENV !== "production" ? Z(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : Z(!1));
  const a = Jb(n, r), o = Ua({
    page: e.subject.page,
    axis: e.axis,
    frame: a,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: o,
    frame: a
  };
};
var z$ = (e) => {
  let {
    previousPageBorderBoxCenter: t,
    moveRelativeTo: n,
    insideDestination: r,
    draggable: a,
    draggables: o,
    destination: u,
    viewport: c,
    afterCritical: d
  } = e;
  if (!n) {
    if (r.length)
      return null;
    const g = {
      displaced: ns,
      displacedBy: Kb,
      at: {
        type: "REORDER",
        destination: {
          droppableId: u.descriptor.id,
          index: 0
        }
      }
    }, v = Pc({
      impact: g,
      draggable: a,
      droppable: u,
      draggables: o,
      afterCritical: d
    }), y = Ga(a, u) ? u : e0(u, a, o);
    return Qb({
      draggable: a,
      destination: y,
      newPageBorderBoxCenter: v,
      viewport: c.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? g : null;
  }
  const f = t[u.axis.line] <= n.page.borderBox.center[u.axis.line], h = (() => {
    const g = n.descriptor.index;
    return n.descriptor.id === a.descriptor.id || f ? g : g + 1;
  })(), m = hs(u.axis, a.displaceBy);
  return mc({
    draggable: a,
    insideDestination: r,
    destination: u,
    viewport: c,
    displacedBy: m,
    last: ns,
    index: h
  });
}, W$ = (e) => {
  let {
    isMovingForward: t,
    previousPageBorderBoxCenter: n,
    draggable: r,
    isOver: a,
    draggables: o,
    droppables: u,
    viewport: c,
    afterCritical: d
  } = e;
  const f = M$({
    isMovingForward: t,
    pageBorderBoxCenter: n,
    source: a,
    droppables: u,
    viewport: c
  });
  if (!f)
    return null;
  const h = ca(f.descriptor.id, o), m = I$({
    pageBorderBoxCenter: n,
    viewport: c,
    destination: f,
    insideDestination: h,
    afterCritical: d
  }), g = z$({
    previousPageBorderBoxCenter: n,
    destination: f,
    draggable: r,
    draggables: o,
    moveRelativeTo: m,
    insideDestination: h,
    viewport: c,
    afterCritical: d
  });
  if (!g)
    return null;
  const v = Pc({
    impact: g,
    draggable: r,
    droppable: f,
    draggables: o,
    afterCritical: d
  });
  return {
    clientSelection: Cp({
      pageBorderBoxCenter: v,
      draggable: r,
      viewport: c
    }),
    impact: g,
    scrollJumpRequest: null
  };
}, rr = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const V$ = (e, t) => {
  const n = rr(e);
  return n ? t[n] : null;
};
var H$ = (e) => {
  let {
    state: t,
    type: n
  } = e;
  const r = V$(t.impact, t.dimensions.droppables), a = !!r, o = t.dimensions.droppables[t.critical.droppable.id], u = r || o, c = u.axis.direction, d = c === "vertical" && (n === "MOVE_UP" || n === "MOVE_DOWN") || c === "horizontal" && (n === "MOVE_LEFT" || n === "MOVE_RIGHT");
  if (d && !a)
    return null;
  const f = n === "MOVE_DOWN" || n === "MOVE_RIGHT", h = t.dimensions.draggables[t.critical.draggable.id], m = t.current.page.borderBoxCenter, {
    draggables: g,
    droppables: v
  } = t.dimensions;
  return d ? R$({
    isMovingForward: f,
    previousPageBorderBoxCenter: m,
    draggable: h,
    destination: u,
    draggables: g,
    viewport: t.viewport,
    previousClientSelection: t.current.client.selection,
    previousImpact: t.impact,
    afterCritical: t.afterCritical
  }) : W$({
    isMovingForward: f,
    previousPageBorderBoxCenter: m,
    draggable: h,
    isOver: u,
    draggables: g,
    droppables: v,
    viewport: t.viewport,
    afterCritical: t.afterCritical
  });
};
function Zi(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function t0(e) {
  const t = Er(e.top, e.bottom), n = Er(e.left, e.right);
  return function(a) {
    return t(a.y) && n(a.x);
  };
}
function U$(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function q$(e) {
  let {
    pageBorderBox: t,
    draggable: n,
    candidates: r
  } = e;
  const a = n.page.borderBox.center, o = r.map((u) => {
    const c = u.axis, d = oa(u.axis.line, t.center[c.line], u.page.borderBox.center[c.crossAxisLine]);
    return {
      id: u.descriptor.id,
      distance: ts(a, d)
    };
  }).sort((u, c) => c.distance - u.distance);
  return o[0] ? o[0].id : null;
}
function K$(e) {
  let {
    pageBorderBox: t,
    draggable: n,
    droppables: r
  } = e;
  const a = Dc(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const u = o.subject.active;
    if (!u || !U$(t, u))
      return !1;
    if (t0(u)(t.center))
      return !0;
    const c = o.axis, d = u.center[c.crossAxisLine], f = t[c.crossAxisStart], h = t[c.crossAxisEnd], m = Er(u[c.crossAxisStart], u[c.crossAxisEnd]), g = m(f), v = m(h);
    return !g && !v ? !0 : g ? f < d : h > d;
  });
  return a.length ? a.length === 1 ? a[0].descriptor.id : q$({
    pageBorderBox: t,
    draggable: n,
    candidates: a
  }) : null;
}
const n0 = (e, t) => kr(ps(e, t));
var j$ = (e, t) => {
  const n = e.frame;
  return n ? n0(t, n.scroll.diff.value) : t;
};
function r0(e) {
  let {
    displaced: t,
    id: n
  } = e;
  return !!(t.visible[n] || t.invisible[n]);
}
function G$(e) {
  let {
    draggable: t,
    closest: n,
    inHomeList: r
  } = e;
  return n ? r && n.descriptor.index > t.descriptor.index ? n.descriptor.index - 1 : n.descriptor.index : null;
}
var Y$ = (e) => {
  let {
    pageBorderBoxWithDroppableScroll: t,
    draggable: n,
    destination: r,
    insideDestination: a,
    last: o,
    viewport: u,
    afterCritical: c
  } = e;
  const d = r.axis, f = hs(r.axis, n.displaceBy), h = f.value, m = t[d.start], g = t[d.end], y = Oc(n, a).find((b) => {
    const x = b.descriptor.id, w = b.page.borderBox.center[d.line], A = Oi(x, c), D = r0({
      displaced: o,
      id: x
    });
    return A ? D ? g <= w : m < w - h : D ? g <= w + h : m < w;
  }) || null, E = G$({
    draggable: n,
    closest: y,
    inHomeList: Ga(n, r)
  });
  return mc({
    draggable: n,
    insideDestination: a,
    destination: r,
    viewport: u,
    last: o,
    displacedBy: f,
    index: E
  });
};
const X$ = 4;
var Z$ = (e) => {
  let {
    draggable: t,
    pageBorderBoxWithDroppableScroll: n,
    previousImpact: r,
    destination: a,
    insideDestination: o,
    afterCritical: u
  } = e;
  if (!a.isCombineEnabled)
    return null;
  const c = a.axis, d = hs(a.axis, t.displaceBy), f = d.value, h = n[c.start], m = n[c.end], v = Oc(t, o).find((E) => {
    const b = E.descriptor.id, x = E.page.borderBox, A = x[c.size] / X$, D = Oi(b, u), _ = r0({
      displaced: r.displaced,
      id: b
    });
    return D ? _ ? m > x[c.start] + A && m < x[c.end] - A : h > x[c.start] - f + A && h < x[c.end] - f - A : _ ? m > x[c.start] + f + A && m < x[c.end] + f - A : h > x[c.start] + A && h < x[c.end] - A;
  });
  return v ? {
    displacedBy: d,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: v.descriptor.id,
        droppableId: a.descriptor.id
      }
    }
  } : null;
}, i0 = (e) => {
  let {
    pageOffset: t,
    draggable: n,
    draggables: r,
    droppables: a,
    previousImpact: o,
    viewport: u,
    afterCritical: c
  } = e;
  const d = n0(n.page.borderBox, t), f = K$({
    pageBorderBox: d,
    draggable: n,
    droppables: a
  });
  if (!f)
    return d$;
  const h = a[f], m = ca(h.descriptor.id, r), g = j$(h, d);
  return Z$({
    pageBorderBoxWithDroppableScroll: g,
    draggable: n,
    previousImpact: o,
    destination: h,
    insideDestination: m,
    afterCritical: c
  }) || Y$({
    pageBorderBoxWithDroppableScroll: g,
    draggable: n,
    destination: h,
    insideDestination: m,
    last: o.displaced,
    viewport: u,
    afterCritical: c
  });
}, Tp = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Q$ = (e) => {
  let {
    previousImpact: t,
    impact: n,
    droppables: r
  } = e;
  const a = rr(t), o = rr(n);
  if (!a || a === o)
    return r;
  const u = r[a];
  if (!u.subject.withPlaceholder)
    return r;
  const c = F$(u);
  return Tp(r, c);
};
var J$ = (e) => {
  let {
    draggable: t,
    draggables: n,
    droppables: r,
    previousImpact: a,
    impact: o
  } = e;
  const u = Q$({
    previousImpact: a,
    impact: o,
    droppables: r
  }), c = rr(o);
  if (!c)
    return u;
  const d = r[c];
  if (Ga(t, d) || d.subject.withPlaceholder)
    return u;
  const f = e0(d, t, n);
  return Tp(u, f);
}, Ko = (e) => {
  let {
    state: t,
    clientSelection: n,
    dimensions: r,
    viewport: a,
    impact: o,
    scrollJumpRequest: u
  } = e;
  const c = a || t.viewport, d = r || t.dimensions, f = n || t.current.client.selection, h = nr(f, t.initial.client.selection), m = {
    offset: h,
    selection: f,
    borderBoxCenter: Tn(t.initial.client.borderBoxCenter, h)
  }, g = {
    selection: Tn(m.selection, c.scroll.current),
    borderBoxCenter: Tn(m.borderBoxCenter, c.scroll.current),
    offset: Tn(m.offset, c.scroll.diff.value)
  }, v = {
    client: m,
    page: g
  };
  if (t.phase === "COLLECTING")
    return {
      ...t,
      dimensions: d,
      viewport: c,
      current: v
    };
  const y = d.draggables[t.critical.draggable.id], E = o || i0({
    pageOffset: g.offset,
    draggable: y,
    draggables: d.draggables,
    droppables: d.droppables,
    previousImpact: t.impact,
    viewport: c,
    afterCritical: t.afterCritical
  }), b = J$({
    draggable: y,
    impact: E,
    previousImpact: t.impact,
    draggables: d.draggables,
    droppables: d.droppables
  });
  return {
    ...t,
    current: v,
    dimensions: {
      draggables: d.draggables,
      droppables: b
    },
    impact: E,
    viewport: c,
    scrollJumpRequest: u || null,
    forceShouldAnimate: u ? !1 : null
  };
};
function eI(e, t) {
  return e.map((n) => t[n]);
}
var a0 = (e) => {
  let {
    impact: t,
    viewport: n,
    draggables: r,
    destination: a,
    forceShouldAnimate: o
  } = e;
  const u = t.displaced, c = eI(u.all, r), d = rs({
    afterDragging: c,
    destination: a,
    displacedBy: t.displacedBy,
    viewport: n.frame,
    forceShouldAnimate: o,
    last: u
  });
  return {
    ...t,
    displaced: d
  };
}, o0 = (e) => {
  let {
    impact: t,
    draggable: n,
    droppable: r,
    draggables: a,
    viewport: o,
    afterCritical: u
  } = e;
  const c = Pc({
    impact: t,
    draggable: n,
    draggables: a,
    droppable: r,
    afterCritical: u
  });
  return Cp({
    pageBorderBoxCenter: c,
    draggable: n,
    viewport: o
  });
}, s0 = (e) => {
  let {
    state: t,
    dimensions: n,
    viewport: r
  } = e;
  t.movementMode !== "SNAP" && (process.env.NODE_ENV, Z(!1));
  const a = t.impact, o = r || t.viewport, u = n || t.dimensions, {
    draggables: c,
    droppables: d
  } = u, f = c[t.critical.draggable.id], h = rr(a);
  h || (process.env.NODE_ENV !== "production" ? Z(!1, "Must be over a destination in SNAP movement mode") : Z(!1));
  const m = d[h], g = a0({
    impact: a,
    viewport: o,
    destination: m,
    draggables: c
  }), v = o0({
    impact: g,
    draggable: f,
    droppable: m,
    draggables: c,
    viewport: o,
    afterCritical: t.afterCritical
  });
  return Ko({
    impact: g,
    clientSelection: v,
    state: t,
    dimensions: u,
    viewport: o
  });
}, tI = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), l0 = (e) => {
  let {
    draggable: t,
    home: n,
    draggables: r,
    viewport: a
  } = e;
  const o = hs(n.axis, t.displaceBy), u = ca(n.descriptor.id, r), c = u.indexOf(t);
  c === -1 && (process.env.NODE_ENV !== "production" ? Z(!1, "Expected draggable to be inside home list") : Z(!1));
  const d = u.slice(c + 1), f = d.reduce((v, y) => (v[y.descriptor.id] = !0, v), {}), h = {
    inVirtualList: n.descriptor.mode === "virtual",
    displacedBy: o,
    effected: f
  };
  return {
    impact: {
      displaced: rs({
        afterDragging: d,
        destination: n,
        displacedBy: o,
        last: null,
        viewport: a.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: tI(t.descriptor)
      }
    },
    afterCritical: h
  };
}, nI = (e, t) => ({
  draggables: e.draggables,
  droppables: Tp(e.droppables, t)
});
const ms = (e) => {
  process.env.NODE_ENV;
}, gs = (e) => {
  process.env.NODE_ENV;
};
var rI = (e) => {
  let {
    draggable: t,
    offset: n,
    initialWindowScroll: r
  } = e;
  const a = fc(t.client, n), o = pc(a, r);
  return {
    ...t,
    placeholder: {
      ...t.placeholder,
      client: a
    },
    client: a,
    page: o
  };
}, iI = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? Z(!1, "Expected Droppable to have a frame") : Z(!1)), t;
}, aI = (e) => {
  let {
    additions: t,
    updatedDroppables: n,
    viewport: r
  } = e;
  const a = r.scroll.diff.value;
  return t.map((o) => {
    const u = o.descriptor.droppableId, c = n[u], f = iI(c).scroll.diff.value, h = Tn(a, f);
    return rI({
      draggable: o,
      offset: h,
      initialWindowScroll: r.scroll.initial
    });
  });
}, oI = (e) => {
  let {
    state: t,
    published: n
  } = e;
  ms();
  const r = n.modified.map((w) => {
    const A = t.dimensions.droppables[w.droppableId];
    return Ep(A, w.scroll);
  }), a = {
    ...t.dimensions.droppables,
    ...Ub(r)
  }, o = qb(aI({
    additions: n.additions,
    updatedDroppables: a,
    viewport: t.viewport
  })), u = {
    ...t.dimensions.draggables,
    ...o
  };
  n.removals.forEach((w) => {
    delete u[w];
  });
  const c = {
    droppables: a,
    draggables: u
  }, d = rr(t.impact), f = d ? c.droppables[d] : null, h = c.draggables[t.critical.draggable.id], m = c.droppables[t.critical.droppable.id], {
    impact: g,
    afterCritical: v
  } = l0({
    draggable: h,
    home: m,
    draggables: u,
    viewport: t.viewport
  }), y = f && f.isCombineEnabled ? t.impact : g, E = i0({
    pageOffset: t.current.page.offset,
    draggable: c.draggables[t.critical.draggable.id],
    draggables: c.draggables,
    droppables: c.droppables,
    previousImpact: y,
    viewport: t.viewport,
    afterCritical: v
  });
  gs();
  const b = {
    ...t,
    phase: "DRAGGING",
    impact: E,
    onLiftImpact: g,
    dimensions: c,
    afterCritical: v,
    forceShouldAnimate: !1
  };
  return t.phase === "COLLECTING" ? b : {
    ...b,
    phase: "DROP_PENDING",
    reason: t.reason,
    isWaiting: !1
  };
};
const Sf = (e) => e.movementMode === "SNAP", vd = (e, t, n) => {
  const r = nI(e.dimensions, t);
  return !Sf(e) || n ? Ko({
    state: e,
    dimensions: r
  }) : s0({
    state: e,
    dimensions: r
  });
};
function yd(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const iy = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var sI = function(e, t) {
  if (e === void 0 && (e = iy), t.type === "FLUSH")
    return {
      ...iy,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? Z(!1, "INITIAL_PUBLISH must come after a IDLE phase") : Z(!1));
    const {
      critical: n,
      clientSelection: r,
      viewport: a,
      dimensions: o,
      movementMode: u
    } = t.payload, c = o.draggables[n.draggable.id], d = o.droppables[n.droppable.id], f = {
      selection: r,
      borderBoxCenter: c.client.borderBox.center,
      offset: vn
    }, h = {
      client: f,
      page: {
        selection: Tn(f.selection, a.scroll.initial),
        borderBoxCenter: Tn(f.selection, a.scroll.initial),
        offset: Tn(f.selection, a.scroll.diff.value)
      }
    }, m = Dc(o.droppables).every((E) => !E.isFixedOnPage), {
      impact: g,
      afterCritical: v
    } = l0({
      draggable: c,
      home: d,
      draggables: o.draggables,
      viewport: a
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: u,
      dimensions: o,
      initial: h,
      current: h,
      isWindowScrollAllowed: m,
      impact: g,
      afterCritical: v,
      onLiftImpact: g,
      viewport: a,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? Z(!1, `Collection cannot start from phase ${e.phase}`) : Z(!1)), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? Z(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : Z(!1)), oI({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Zi(e) || (process.env.NODE_ENV !== "production" ? Z(!1, `${t.type} not permitted in phase ${e.phase}`) : Z(!1));
    const {
      client: n
    } = t.payload;
    return Ci(n, e.current.client.selection) ? e : Ko({
      state: e,
      clientSelection: n,
      impact: Sf(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return yd(e);
    Zi(e) || (process.env.NODE_ENV !== "production" ? Z(!1, `${t.type} not permitted in phase ${e.phase}`) : Z(!1));
    const {
      id: n,
      newScroll: r
    } = t.payload, a = e.dimensions.droppables[n];
    if (!a)
      return e;
    const o = Ep(a, r);
    return vd(e, o, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Zi(e) || (process.env.NODE_ENV !== "production" ? Z(!1, `Attempting to move in an unsupported phase ${e.phase}`) : Z(!1));
    const {
      id: n,
      isEnabled: r
    } = t.payload, a = e.dimensions.droppables[n];
    a || (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : Z(!1)), a.isEnabled === r && (process.env.NODE_ENV !== "production" ? Z(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(a.isEnabled)}`) : Z(!1));
    const o = {
      ...a,
      isEnabled: r
    };
    return vd(e, o, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Zi(e) || (process.env.NODE_ENV !== "production" ? Z(!1, `Attempting to move in an unsupported phase ${e.phase}`) : Z(!1));
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, a = e.dimensions.droppables[n];
    a || (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : Z(!1)), a.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? Z(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(a.isCombineEnabled)}`) : Z(!1));
    const o = {
      ...a,
      isCombineEnabled: r
    };
    return vd(e, o, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Zi(e) || (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot move by window in phase ${e.phase}`) : Z(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? Z(!1, "Window scrolling is currently not supported for fixed lists") : Z(!1));
    const n = t.payload.newScroll;
    if (Ci(e.viewport.scroll.current, n))
      return yd(e);
    const r = Zb(e.viewport, n);
    return Sf(e) ? s0({
      state: e,
      viewport: r
    }) : Ko({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Zi(e))
      return e;
    const n = t.payload.maxScroll;
    if (Ci(n, e.viewport.scroll.max))
      return e;
    const r = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: n
      }
    };
    return {
      ...e,
      viewport: r
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? Z(!1, `${t.type} received while not in DRAGGING phase`) : Z(!1));
    const n = H$({
      state: e,
      type: t.type
    });
    return n ? Ko({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? Z(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : Z(!1)), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: n
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: n,
      dropDuration: r,
      newHomeClientOffset: a
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot animate drop from phase ${e.phase}`) : Z(!1)), {
      phase: "DROP_ANIMATING",
      completed: n,
      dropDuration: r,
      newHomeClientOffset: a,
      dimensions: e.dimensions
    };
  }
  if (t.type === "DROP_COMPLETE") {
    const {
      completed: n
    } = t.payload;
    return {
      phase: "IDLE",
      completed: n,
      shouldFlush: !1
    };
  }
  return e;
};
const lI = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), cI = (e) => ({
  type: "LIFT",
  payload: e
}), uI = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), dI = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), fI = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), pI = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), hI = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), mI = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), c0 = (e) => ({
  type: "MOVE",
  payload: e
}), gI = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), vI = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), yI = () => ({
  type: "MOVE_UP",
  payload: null
}), xI = () => ({
  type: "MOVE_DOWN",
  payload: null
}), bI = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), EI = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Dp = () => ({
  type: "FLUSH",
  payload: null
}), SI = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Np = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), u0 = (e) => ({
  type: "DROP",
  payload: e
}), AI = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), d0 = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function wI(e) {
  if (e.length <= 1)
    return;
  const t = e.map((a) => a.descriptor.index), n = {};
  for (let a = 1; a < t.length; a++) {
    const o = t[a], u = t[a - 1];
    o !== u + 1 && (n[o] = !0);
  }
  if (!Object.keys(n).length)
    return;
  const r = t.map((a) => !!n[a] ? `[🔥${a}]` : `${a}`).join(", ");
  process.env.NODE_ENV !== "production" && Ft(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function _I(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ca(e.droppable.id, t.draggables);
    wI(n);
  }
}
var CI = (e) => (t) => {
  let {
    getState: n,
    dispatch: r
  } = t;
  return (a) => (o) => {
    if (o.type !== "LIFT") {
      a(o);
      return;
    }
    const {
      id: u,
      clientSelection: c,
      movementMode: d
    } = o.payload, f = n();
    f.phase === "DROP_ANIMATING" && r(Np({
      completed: f.completed
    })), n().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? Z(!1, "Unexpected phase to start a drag") : Z(!1)), r(Dp()), r(lI({
      draggableId: u,
      movementMode: d
    }));
    const m = {
      draggableId: u,
      scrollOptions: {
        shouldPublishImmediately: d === "SNAP"
      }
    }, {
      critical: g,
      dimensions: v,
      viewport: y
    } = e.startPublishing(m);
    _I(g, v), r(uI({
      critical: g,
      dimensions: v,
      clientSelection: c,
      movementMode: d,
      viewport: y
    }));
  };
}, TI = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const Op = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, is = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, f0 = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Yi = `${f0.outOfTheWay}s ${Op.outOfTheWay}`, jo = {
  fluid: `opacity ${Yi}`,
  snap: `transform ${Yi}, opacity ${Yi}`,
  drop: (e) => {
    const t = `${e}s ${Op.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Yi}`,
  placeholder: `height ${Yi}, width ${Yi}, margin ${Yi}`
}, ay = (e) => Ci(e, vn) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Af = {
  moveTo: ay,
  drop: (e, t) => {
    const n = ay(e);
    if (n)
      return t ? `${n} scale(${is.scale.drop})` : n;
  }
}, {
  minDropTime: wf,
  maxDropTime: p0
} = f0, DI = p0 - wf, oy = 1500, NI = 0.6;
var OI = (e) => {
  let {
    current: t,
    destination: n,
    reason: r
  } = e;
  const a = ts(t, n);
  if (a <= 0)
    return wf;
  if (a >= oy)
    return p0;
  const o = a / oy, u = wf + DI * o, c = r === "CANCEL" ? u * NI : u;
  return Number(c.toFixed(2));
}, PI = (e) => {
  let {
    impact: t,
    draggable: n,
    dimensions: r,
    viewport: a,
    afterCritical: o
  } = e;
  const {
    draggables: u,
    droppables: c
  } = r, d = rr(t), f = d ? c[d] : null, h = c[n.descriptor.droppableId], m = o0({
    impact: t,
    draggable: n,
    draggables: u,
    afterCritical: o,
    droppable: f || h,
    viewport: a
  });
  return nr(m, n.client.borderBox.center);
}, kI = (e) => {
  let {
    draggables: t,
    reason: n,
    lastImpact: r,
    home: a,
    viewport: o,
    onLiftImpact: u
  } = e;
  return !r.at || n !== "DROP" ? {
    impact: a0({
      draggables: t,
      impact: u,
      destination: a,
      viewport: o,
      forceShouldAnimate: !0
    }),
    didDropInsideDroppable: !1
  } : r.at.type === "REORDER" ? {
    impact: r,
    didDropInsideDroppable: !0
  } : {
    impact: {
      ...r,
      displaced: ns
    },
    didDropInsideDroppable: !0
  };
};
const LI = (e) => {
  let {
    getState: t,
    dispatch: n
  } = e;
  return (r) => (a) => {
    if (a.type !== "DROP") {
      r(a);
      return;
    }
    const o = t(), u = a.payload.reason;
    if (o.phase === "COLLECTING") {
      n(AI({
        reason: u
      }));
      return;
    }
    if (o.phase === "IDLE")
      return;
    o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? Z(!1, "A DROP action occurred while DROP_PENDING and still waiting") : Z(!1)), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot drop in phase: ${o.phase}`) : Z(!1));
    const d = o.critical, f = o.dimensions, h = f.draggables[o.critical.draggable.id], {
      impact: m,
      didDropInsideDroppable: g
    } = kI({
      reason: u,
      lastImpact: o.impact,
      afterCritical: o.afterCritical,
      onLiftImpact: o.onLiftImpact,
      home: o.dimensions.droppables[o.critical.droppable.id],
      viewport: o.viewport,
      draggables: o.dimensions.draggables
    }), v = g ? Sp(m) : null, y = g ? Nc(m) : null, E = {
      index: d.draggable.index,
      droppableId: d.droppable.id
    }, b = {
      draggableId: h.descriptor.id,
      type: h.descriptor.type,
      source: E,
      reason: u,
      mode: o.movementMode,
      destination: v,
      combine: y
    }, x = PI({
      impact: m,
      draggable: h,
      dimensions: f,
      viewport: o.viewport,
      afterCritical: o.afterCritical
    }), w = {
      critical: o.critical,
      afterCritical: o.afterCritical,
      result: b,
      impact: m
    };
    if (!(!Ci(o.current.client.offset, x) || !!b.combine)) {
      n(Np({
        completed: w
      }));
      return;
    }
    const D = OI({
      current: o.current.client.offset,
      destination: x,
      reason: u
    });
    n(SI({
      newHomeClientOffset: x,
      dropDuration: D,
      completed: w
    }));
  };
};
var RI = LI, h0 = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function MI(e) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: (t) => {
      t.target !== window && t.target !== window.document || e();
    }
  };
}
function $I(e) {
  let {
    onWindowScroll: t
  } = e;
  function n() {
    t(h0());
  }
  const r = Jo(n), a = MI(r);
  let o = _i;
  function u() {
    return o !== _i;
  }
  function c() {
    u() && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot start scroll listener when already active") : Z(!1)), o = xr(window, [a]);
  }
  function d() {
    u() || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot stop scroll listener when not active") : Z(!1)), r.cancel(), o(), o = _i;
  }
  return {
    start: c,
    stop: d,
    isActive: u
  };
}
const II = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", BI = (e) => {
  const t = $I({
    onWindowScroll: (n) => {
      e.dispatch(gI({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && II(r) && t.stop(), n(r);
  };
};
var FI = BI, zI = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), a = (o) => {
    if (t) {
      process.env.NODE_ENV !== "production" && Ft("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && Ft(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(o), clearTimeout(r);
  };
  return a.wasCalled = () => t, a;
}, WI = () => {
  const e = [], t = (a) => {
    const o = e.findIndex((c) => c.timerId === a);
    o === -1 && (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find timer") : Z(!1));
    const [u] = e.splice(o, 1);
    u.callback();
  };
  return {
    add: (a) => {
      const o = setTimeout(() => t(o)), u = {
        timerId: o,
        callback: a
      };
      e.push(u);
    },
    flush: () => {
      if (!e.length)
        return;
      const a = [...e];
      e.length = 0, a.forEach((o) => {
        clearTimeout(o.timerId), o.callback();
      });
    }
  };
};
const VI = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, HI = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, UI = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, To = (e, t) => {
  ms(), t(), gs();
}, _l = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function xd(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const a = zI(n);
  e(t, {
    announce: a
  }), a.wasCalled() || n(r(t));
}
var qI = (e, t) => {
  const n = WI();
  let r = null;
  const a = (m, g) => {
    r && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : Z(!1)), To("onBeforeCapture", () => {
      const v = e().onBeforeCapture;
      v && v({
        draggableId: m,
        mode: g
      });
    });
  }, o = (m, g) => {
    r && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : Z(!1)), To("onBeforeDragStart", () => {
      const v = e().onBeforeDragStart;
      v && v(_l(m, g));
    });
  }, u = (m, g) => {
    r && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : Z(!1));
    const v = _l(m, g);
    r = {
      mode: g,
      lastCritical: m,
      lastLocation: v.source,
      lastCombine: null
    }, n.add(() => {
      To("onDragStart", () => xd(e().onDragStart, v, t, Ll.onDragStart));
    });
  }, c = (m, g) => {
    const v = Sp(g), y = Nc(g);
    r || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot fire onDragMove when onDragStart has not been called") : Z(!1));
    const E = !UI(m, r.lastCritical);
    E && (r.lastCritical = m);
    const b = !VI(r.lastLocation, v);
    b && (r.lastLocation = v);
    const x = !HI(r.lastCombine, y);
    if (x && (r.lastCombine = y), !E && !b && !x)
      return;
    const w = {
      ..._l(m, r.mode),
      combine: y,
      destination: v
    };
    n.add(() => {
      To("onDragUpdate", () => xd(e().onDragUpdate, w, t, Ll.onDragUpdate));
    });
  }, d = () => {
    r || (process.env.NODE_ENV !== "production" ? Z(!1, "Can only flush responders while dragging") : Z(!1)), n.flush();
  }, f = (m) => {
    r || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : Z(!1)), r = null, To("onDragEnd", () => xd(e().onDragEnd, m, t, Ll.onDragEnd));
  };
  return {
    beforeCapture: a,
    beforeStart: o,
    start: u,
    update: c,
    flush: d,
    drop: f,
    abort: () => {
      if (!r)
        return;
      const m = {
        ..._l(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      f(m);
    }
  };
}, KI = (e, t) => {
  const n = qI(e, t);
  return (r) => (a) => (o) => {
    if (o.type === "BEFORE_INITIAL_CAPTURE") {
      n.beforeCapture(o.payload.draggableId, o.payload.movementMode);
      return;
    }
    if (o.type === "INITIAL_PUBLISH") {
      const c = o.payload.critical;
      n.beforeStart(c, o.payload.movementMode), a(o), n.start(c, o.payload.movementMode);
      return;
    }
    if (o.type === "DROP_COMPLETE") {
      const c = o.payload.completed.result;
      n.flush(), a(o), n.drop(c);
      return;
    }
    if (a(o), o.type === "FLUSH") {
      n.abort();
      return;
    }
    const u = r.getState();
    u.phase === "DRAGGING" && n.update(u.critical, u.impact);
  };
};
const jI = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot finish a drop animating when no drop is occurring") : Z(!1)), e.dispatch(Np({
    completed: r.completed
  }));
};
var GI = jI;
const YI = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (a) => (o) => {
    if ((o.type === "FLUSH" || o.type === "DROP_COMPLETE" || o.type === "DROP_ANIMATION_FINISHED") && r(), a(o), o.type !== "DROP_ANIMATE")
      return;
    const u = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(d0());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = xr(window, [u]);
    });
  };
};
var XI = YI, ZI = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, QI = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (r.type === "INITIAL_PUBLISH") {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (r.type === "FLUSH") {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (r.type === "DROP_COMPLETE") {
        t = !1;
        const a = r.payload.completed.result;
        a.combine && e.tryShiftRecord(a.draggableId, a.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const JI = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var eB = (e) => (t) => (n) => (r) => {
  if (JI(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const a = t.getState();
    a.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? Z(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : Z(!1)), e.start(a);
    return;
  }
  n(r), e.scroll(t.getState());
};
const tB = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(u0({
    reason: r.reason
  })));
};
var nB = tB;
const rB = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : jC;
var iB = (e) => {
  let {
    dimensionMarshal: t,
    focusMarshal: n,
    styleMarshal: r,
    getResponders: a,
    announce: o,
    autoScroller: u
  } = e;
  return GC(sI, rB(YC(TI(r), ZI(t), CI(t), RI, GI, XI, nB, eB(u), FI, QI(n), KI(a, o))));
};
const bd = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function aB(e) {
  let {
    registry: t,
    callbacks: n
  } = e, r = bd(), a = null;
  const o = () => {
    a || (n.collectionStarting(), a = requestAnimationFrame(() => {
      a = null, ms();
      const {
        additions: f,
        removals: h,
        modified: m
      } = r, g = Object.keys(f).map((E) => t.draggable.getById(E).getDimension(vn)).sort((E, b) => E.descriptor.index - b.descriptor.index), v = Object.keys(m).map((E) => {
        const x = t.droppable.getById(E).callbacks.getScrollWhileDragging();
        return {
          droppableId: E,
          scroll: x
        };
      }), y = {
        additions: g,
        removals: Object.keys(h),
        modified: v
      };
      r = bd(), gs(), n.publish(y);
    }));
  };
  return {
    add: (f) => {
      const h = f.descriptor.id;
      r.additions[h] = f, r.modified[f.descriptor.droppableId] = !0, r.removals[h] && delete r.removals[h], o();
    },
    remove: (f) => {
      const h = f.descriptor;
      r.removals[h.id] = !0, r.modified[h.droppableId] = !0, r.additions[h.id] && delete r.additions[h.id], o();
    },
    stop: () => {
      a && (cancelAnimationFrame(a), a = null, r = bd());
    }
  };
}
var m0 = (e) => {
  let {
    scrollHeight: t,
    scrollWidth: n,
    height: r,
    width: a
  } = e;
  const o = nr({
    x: n,
    y: t
  }, {
    x: a,
    y: r
  });
  return {
    x: Math.max(0, o.x),
    y: Math.max(0, o.y)
  };
}, g0 = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot find document.documentElement") : Z(!1)), e;
}, v0 = () => {
  const e = g0();
  return m0({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, oB = () => {
  const e = h0(), t = v0(), n = e.y, r = e.x, a = g0(), o = a.clientWidth, u = a.clientHeight, c = r + o, d = n + u;
  return {
    frame: kr({
      top: n,
      left: r,
      right: c,
      bottom: d
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: vn,
        displacement: vn
      }
    }
  };
}, sB = (e) => {
  let {
    critical: t,
    scrollOptions: n,
    registry: r
  } = e;
  ms();
  const a = oB(), o = a.scroll.current, u = t.droppable, c = r.droppable.getAllByType(u.type).map((m) => m.callbacks.getDimensionAndWatchScroll(o, n)), d = r.draggable.getAllByType(t.draggable.type).map((m) => m.getDimension(o)), f = {
    draggables: qb(d),
    droppables: Ub(c)
  };
  return gs(), {
    dimensions: f,
    critical: t,
    viewport: a
  };
};
function sy(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Ft(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var lB = (e, t) => {
  let n = null;
  const r = aB({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), a = (g, v) => {
    e.droppable.exists(g) || (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot update is enabled flag of Droppable ${g} as it is not registered`) : Z(!1)), n && t.updateDroppableIsEnabled({
      id: g,
      isEnabled: v
    });
  }, o = (g, v) => {
    n && (e.droppable.exists(g) || (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot update isCombineEnabled flag of Droppable ${g} as it is not registered`) : Z(!1)), t.updateDroppableIsCombineEnabled({
      id: g,
      isCombineEnabled: v
    }));
  }, u = (g, v) => {
    n && (e.droppable.exists(g) || (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot update the scroll on Droppable ${g} as it is not registered`) : Z(!1)), t.updateDroppableScroll({
      id: g,
      newScroll: v
    }));
  }, c = (g, v) => {
    n && e.droppable.getById(g).callbacks.scroll(v);
  }, d = () => {
    if (!n)
      return;
    r.stop();
    const g = n.critical.droppable;
    e.droppable.getAllByType(g.type).forEach((v) => v.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, f = (g) => {
    n || (process.env.NODE_ENV !== "production" ? Z(!1, "Should only be subscribed when a collection is occurring") : Z(!1));
    const v = n.critical.draggable;
    g.type === "ADDITION" && sy(e, v, g.value) && r.add(g.value), g.type === "REMOVAL" && sy(e, v, g.value) && r.remove(g.value);
  };
  return {
    updateDroppableIsEnabled: a,
    updateDroppableIsCombineEnabled: o,
    scrollDroppable: c,
    updateDroppableScroll: u,
    startPublishing: (g) => {
      n && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot start capturing critical dimensions as there is already a collection") : Z(!1));
      const v = e.draggable.getById(g.draggableId), y = e.droppable.getById(v.descriptor.droppableId), E = {
        draggable: v.descriptor,
        droppable: y.descriptor
      }, b = e.subscribe(f);
      return n = {
        critical: E,
        unsubscribe: b
      }, sB({
        critical: E,
        registry: e,
        scrollOptions: g.scrollOptions
      });
    },
    stopPublishing: d
  };
}, y0 = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", cB = (e) => {
  window.scrollBy(e.x, e.y);
};
const uB = gn((e) => Dc(e).filter((t) => !(!t.isEnabled || !t.frame))), dB = (e, t) => uB(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? Z(!1, "Invalid result") : Z(!1)), t0(r.frame.pageMarginBox)(e))) || null;
var fB = (e) => {
  let {
    center: t,
    destination: n,
    droppables: r
  } = e;
  if (n) {
    const o = r[n];
    return o.frame ? o : null;
  }
  return dB(t, r);
};
const as = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (e) => e ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: !1
};
var pB = function(e, t, n) {
  n === void 0 && (n = () => as);
  const r = n(), a = e[t.size] * r.startFromPercentage, o = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: a,
    maxScrollValueAt: o
  };
}, x0 = (e) => {
  let {
    startOfRange: t,
    endOfRange: n,
    current: r
  } = e;
  const a = n - t;
  return a === 0 ? (process.env.NODE_ENV !== "production" && Ft(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - t) / a;
}, Pp = 1, hB = function(e, t, n) {
  n === void 0 && (n = () => as);
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Pp;
  const o = 1 - x0({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), u = r.maxPixelScroll * r.ease(o);
  return Math.ceil(u);
}, mB = (e, t, n) => {
  const r = n(), a = r.durationDampening.accelerateAt, o = r.durationDampening.stopDampeningAt, u = t, c = o, f = Date.now() - u;
  if (f >= o)
    return e;
  if (f < a)
    return Pp;
  const h = x0({
    startOfRange: a,
    endOfRange: c,
    current: f
  }), m = e * r.ease(h);
  return Math.ceil(m);
}, ly = (e) => {
  let {
    distanceToEdge: t,
    thresholds: n,
    dragStartTime: r,
    shouldUseTimeDampening: a,
    getAutoScrollerOptions: o
  } = e;
  const u = hB(t, n, o);
  return u === 0 ? 0 : a ? Math.max(mB(u, r, o), Pp) : u;
}, cy = (e) => {
  let {
    container: t,
    distanceToEdges: n,
    dragStartTime: r,
    axis: a,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: u
  } = e;
  const c = pB(t, a, u);
  return n[a.end] < n[a.start] ? ly({
    distanceToEdge: n[a.end],
    thresholds: c,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: u
  }) : -1 * ly({
    distanceToEdge: n[a.start],
    thresholds: c,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: u
  });
}, gB = (e) => {
  let {
    container: t,
    subject: n,
    proposedScroll: r
  } = e;
  const a = n.height > t.height, o = n.width > t.width;
  return !o && !a ? r : o && a ? null : {
    x: o ? 0 : r.x,
    y: a ? 0 : r.y
  };
};
const vB = Hb((e) => e === 0 ? 0 : e);
var b0 = (e) => {
  let {
    dragStartTime: t,
    container: n,
    subject: r,
    center: a,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: u
  } = e;
  const c = {
    top: a.y - n.top,
    right: n.right - a.x,
    bottom: n.bottom - a.y,
    left: a.x - n.left
  }, d = cy({
    container: n,
    distanceToEdges: c,
    dragStartTime: t,
    axis: Ap,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: u
  }), f = cy({
    container: n,
    distanceToEdges: c,
    dragStartTime: t,
    axis: Gb,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: u
  }), h = vB({
    x: f,
    y: d
  });
  if (Ci(h, vn))
    return null;
  const m = gB({
    container: n,
    subject: r,
    proposedScroll: h
  });
  return m ? Ci(m, vn) ? null : m : null;
};
const yB = Hb((e) => e === 0 ? 0 : e > 0 ? 1 : -1), kp = (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return (t) => {
    let {
      current: n,
      max: r,
      change: a
    } = t;
    const o = Tn(n, a), u = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return Ci(u, vn) ? null : u;
  };
})(), E0 = (e) => {
  let {
    max: t,
    current: n,
    change: r
  } = e;
  const a = {
    x: Math.max(n.x, t.x),
    y: Math.max(n.y, t.y)
  }, o = yB(r), u = kp({
    max: a,
    current: n,
    change: o
  });
  return !u || o.x !== 0 && u.x === 0 || o.y !== 0 && u.y === 0;
}, Lp = (e, t) => E0({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), xB = (e, t) => {
  if (!Lp(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return kp({
    current: r,
    max: n,
    change: t
  });
}, Rp = (e, t) => {
  const n = e.frame;
  return n ? E0({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, bB = (e, t) => {
  const n = e.frame;
  return !n || !Rp(e, t) ? null : kp({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var EB = (e) => {
  let {
    viewport: t,
    subject: n,
    center: r,
    dragStartTime: a,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: u
  } = e;
  const c = b0({
    dragStartTime: a,
    container: t.frame,
    subject: n,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: u
  });
  return c && Lp(t, c) ? c : null;
}, SB = (e) => {
  let {
    droppable: t,
    subject: n,
    center: r,
    dragStartTime: a,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: u
  } = e;
  const c = t.frame;
  if (!c)
    return null;
  const d = b0({
    dragStartTime: a,
    container: c.pageMarginBox,
    subject: n,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: u
  });
  return d && Rp(t, d) ? d : null;
}, uy = (e) => {
  let {
    state: t,
    dragStartTime: n,
    shouldUseTimeDampening: r,
    scrollWindow: a,
    scrollDroppable: o,
    getAutoScrollerOptions: u
  } = e;
  const c = t.current.page.borderBoxCenter, f = t.dimensions.draggables[t.critical.draggable.id].page.marginBox;
  if (t.isWindowScrollAllowed) {
    const g = t.viewport, v = EB({
      dragStartTime: n,
      viewport: g,
      subject: f,
      center: c,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: u
    });
    if (v) {
      a(v);
      return;
    }
  }
  const h = fB({
    center: c,
    destination: rr(t.impact),
    droppables: t.dimensions.droppables
  });
  if (!h)
    return;
  const m = SB({
    dragStartTime: n,
    droppable: h,
    subject: f,
    center: c,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: u
  });
  m && o(h.descriptor.id, m);
}, AB = (e) => {
  let {
    scrollWindow: t,
    scrollDroppable: n,
    getAutoScrollerOptions: r = () => as
  } = e;
  const a = Jo(t), o = Jo(n);
  let u = null;
  const c = (h) => {
    u || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot fluid scroll if not dragging") : Z(!1));
    const {
      shouldUseTimeDampening: m,
      dragStartTime: g
    } = u;
    uy({
      state: h,
      scrollWindow: a,
      scrollDroppable: o,
      dragStartTime: g,
      shouldUseTimeDampening: m,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (h) => {
      ms(), u && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot start auto scrolling when already started") : Z(!1));
      const m = Date.now();
      let g = !1;
      const v = () => {
        g = !0;
      };
      uy({
        state: h,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: v,
        scrollDroppable: v,
        getAutoScrollerOptions: r
      }), u = {
        dragStartTime: m,
        shouldUseTimeDampening: g
      }, gs(), g && c(h);
    },
    stop: () => {
      u && (a.cancel(), o.cancel(), u = null);
    },
    scroll: c
  };
}, wB = (e) => {
  let {
    move: t,
    scrollDroppable: n,
    scrollWindow: r
  } = e;
  const a = (d, f) => {
    const h = Tn(d.current.client.selection, f);
    t({
      client: h
    });
  }, o = (d, f) => {
    if (!Rp(d, f))
      return f;
    const h = bB(d, f);
    if (!h)
      return n(d.descriptor.id, f), null;
    const m = nr(f, h);
    return n(d.descriptor.id, m), nr(f, m);
  }, u = (d, f, h) => {
    if (!d || !Lp(f, h))
      return h;
    const m = xB(f, h);
    if (!m)
      return r(h), null;
    const g = nr(h, m);
    return r(g), nr(h, g);
  };
  return (d) => {
    const f = d.scrollJumpRequest;
    if (!f)
      return;
    const h = rr(d.impact);
    h || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot perform a jump scroll when there is no destination") : Z(!1));
    const m = o(d.dimensions.droppables[h], f);
    if (!m)
      return;
    const g = d.viewport, v = u(d.isWindowScrollAllowed, g, m);
    v && a(d, v);
  };
}, _B = (e) => {
  let {
    scrollDroppable: t,
    scrollWindow: n,
    move: r,
    getAutoScrollerOptions: a
  } = e;
  const o = AB({
    scrollWindow: n,
    scrollDroppable: t,
    getAutoScrollerOptions: a
  }), u = wB({
    move: r,
    scrollWindow: n,
    scrollDroppable: t
  });
  return {
    scroll: (f) => {
      if (!(a().disabled || f.phase !== "DRAGGING")) {
        if (f.movementMode === "FLUID") {
          o.scroll(f);
          return;
        }
        f.scrollJumpRequest && u(f);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const qa = "data-rfd", Ka = (() => {
  const e = `${qa}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), _f = (() => {
  const e = `${qa}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), CB = (() => {
  const e = `${qa}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), dy = {
  contextId: `${qa}-scroll-container-context-id`
}, TB = (e) => (t) => `[${t}="${e}"]`, Do = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), DB = "pointer-events: none;";
var NB = (e) => {
  const t = TB(e), n = (() => {
    const c = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Ka.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: c,
        dragging: DB,
        dropAnimating: c
      }
    };
  })(), r = (() => {
    const c = `
      transition: ${jo.outOfTheWay};
    `;
    return {
      selector: t(_f.contextId),
      styles: {
        dragging: c,
        dropAnimating: c,
        userCancel: c
      }
    };
  })(), a = {
    selector: t(CB.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, u = [r, n, a, {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  }];
  return {
    always: Do(u, "always"),
    resting: Do(u, "resting"),
    dragging: Do(u, "dragging"),
    dropAnimating: Do(u, "dropAnimating"),
    userCancel: Do(u, "userCancel")
  };
};
const OB = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? F.useLayoutEffect : F.useEffect;
var ir = OB;
const Ed = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot find the head to append a style to") : Z(!1)), e;
}, fy = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function PB(e, t) {
  const n = bt(() => NB(e), [e]), r = F.useRef(null), a = F.useRef(null), o = Ke(gn((m) => {
    const g = a.current;
    g || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot set dynamic style element if it is not set") : Z(!1)), g.textContent = m;
  }), []), u = Ke((m) => {
    const g = r.current;
    g || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot set dynamic style element if it is not set") : Z(!1)), g.textContent = m;
  }, []);
  ir(() => {
    !r.current && !a.current || (process.env.NODE_ENV !== "production" ? Z(!1, "style elements already mounted") : Z(!1));
    const m = fy(t), g = fy(t);
    return r.current = m, a.current = g, m.setAttribute(`${qa}-always`, e), g.setAttribute(`${qa}-dynamic`, e), Ed().appendChild(m), Ed().appendChild(g), u(n.always), o(n.resting), () => {
      const v = (y) => {
        const E = y.current;
        E || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot unmount ref as it is not set") : Z(!1)), Ed().removeChild(E), y.current = null;
      };
      v(r), v(a);
    };
  }, [t, u, o, n.always, n.resting, e]);
  const c = Ke(() => o(n.dragging), [o, n.dragging]), d = Ke((m) => {
    if (m === "DROP") {
      o(n.dropAnimating);
      return;
    }
    o(n.userCancel);
  }, [o, n.dropAnimating, n.userCancel]), f = Ke(() => {
    a.current && o(n.resting);
  }, [o, n.resting]);
  return bt(() => ({
    dragging: c,
    dropping: d,
    resting: f
  }), [c, d, f]);
}
function S0(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var A0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) || window;
};
function vs(e) {
  return e instanceof A0(e).HTMLElement;
}
function w0(e, t) {
  const n = `[${Ka.contextId}="${e}"]`, r = S0(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && Ft(`Unable to find any drag handles in the context "${e}"`), null;
  const a = r.find((o) => o.getAttribute(Ka.draggableId) === t);
  return a ? vs(a) ? a : (process.env.NODE_ENV !== "production" && Ft("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Ft(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function kB(e) {
  const t = F.useRef({}), n = F.useRef(null), r = F.useRef(null), a = F.useRef(!1), o = Ke(function(g, v) {
    const y = {
      id: g,
      focus: v
    };
    return t.current[g] = y, function() {
      const b = t.current;
      b[g] !== y && delete b[g];
    };
  }, []), u = Ke(function(g) {
    const v = w0(e, g);
    v && v !== document.activeElement && v.focus();
  }, [e]), c = Ke(function(g, v) {
    n.current === g && (n.current = v);
  }, []), d = Ke(function() {
    r.current || a.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const g = n.current;
      g && u(g);
    }));
  }, [u]), f = Ke(function(g) {
    n.current = null;
    const v = document.activeElement;
    v && v.getAttribute(Ka.draggableId) === g && (n.current = g);
  }, []);
  return ir(() => (a.current = !0, function() {
    a.current = !1;
    const g = r.current;
    g && cancelAnimationFrame(g);
  }), []), bt(() => ({
    register: o,
    tryRecordFocus: f,
    tryRestoreFocusRecorded: d,
    tryShiftRecord: c
  }), [o, f, d, c]);
}
function LB() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(m) {
    return t.push(m), function() {
      const v = t.indexOf(m);
      v !== -1 && t.splice(v, 1);
    };
  }
  function r(m) {
    t.length && t.forEach((g) => g(m));
  }
  function a(m) {
    return e.draggables[m] || null;
  }
  function o(m) {
    const g = a(m);
    return g || (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot find draggable entry with id [${m}]`) : Z(!1)), g;
  }
  const u = {
    register: (m) => {
      e.draggables[m.descriptor.id] = m, r({
        type: "ADDITION",
        value: m
      });
    },
    update: (m, g) => {
      const v = e.draggables[g.descriptor.id];
      v && v.uniqueId === m.uniqueId && (delete e.draggables[g.descriptor.id], e.draggables[m.descriptor.id] = m);
    },
    unregister: (m) => {
      const g = m.descriptor.id, v = a(g);
      v && m.uniqueId === v.uniqueId && (delete e.draggables[g], e.droppables[m.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: m
      }));
    },
    getById: o,
    findById: a,
    exists: (m) => !!a(m),
    getAllByType: (m) => Object.values(e.draggables).filter((g) => g.descriptor.type === m)
  };
  function c(m) {
    return e.droppables[m] || null;
  }
  function d(m) {
    const g = c(m);
    return g || (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot find droppable entry with id [${m}]`) : Z(!1)), g;
  }
  const f = {
    register: (m) => {
      e.droppables[m.descriptor.id] = m;
    },
    unregister: (m) => {
      const g = c(m.descriptor.id);
      g && m.uniqueId === g.uniqueId && delete e.droppables[m.descriptor.id];
    },
    getById: d,
    findById: c,
    exists: (m) => !!c(m),
    getAllByType: (m) => Object.values(e.droppables).filter((g) => g.descriptor.type === m)
  };
  function h() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: u,
    droppable: f,
    subscribe: n,
    clean: h
  };
}
function RB() {
  const e = bt(LB, []);
  return F.useEffect(() => function() {
    l.version.startsWith("16") || l.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Mp = l.createContext(null), os = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot find document.body") : Z(!1)), e;
};
const MB = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var $B = MB;
const IB = (e) => `rfd-announcement-${e}`;
function BB(e) {
  const t = bt(() => IB(e), [e]), n = F.useRef(null);
  return F.useEffect(function() {
    const o = document.createElement("div");
    return n.current = o, o.id = t, o.setAttribute("aria-live", "assertive"), o.setAttribute("aria-atomic", "true"), Et(o.style, $B), os().appendChild(o), function() {
      setTimeout(function() {
        const d = os();
        d.contains(o) && d.removeChild(o), o === n.current && (n.current = null);
      });
    };
  }, [t]), Ke((a) => {
    const o = n.current;
    if (o) {
      o.textContent = a;
      return;
    }
    process.env.NODE_ENV !== "production" && Ft(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${a}"
    `);
  }, []);
}
let FB = 0;
const _0 = {
  separator: "::"
};
function zB(e, t) {
  return t === void 0 && (t = _0), bt(() => `${e}${t.separator}${FB++}`, [t.separator, e]);
}
function WB(e, t) {
  t === void 0 && (t = _0);
  const n = l.useId();
  return bt(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var $p = "useId" in l ? WB : zB;
function VB(e) {
  let {
    contextId: t,
    uniqueId: n
  } = e;
  return `rfd-hidden-text-${t}-${n}`;
}
function HB(e) {
  let {
    contextId: t,
    text: n
  } = e;
  const r = $p("hidden-text", {
    separator: "-"
  }), a = bt(() => VB({
    contextId: t,
    uniqueId: r
  }), [r, t]);
  return F.useEffect(function() {
    const u = document.createElement("div");
    return u.id = a, u.textContent = n, u.style.display = "none", os().appendChild(u), function() {
      const d = os();
      d.contains(u) && d.removeChild(u);
    };
  }, [a, n]), a;
}
var kc = l.createContext(null), UB = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const qB = /(\d+)\.(\d+)\.(\d+)/, py = (e) => {
  const t = qB.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? Z(!1, `Unable to parse React version ${e}`) : Z(!1));
  const n = Number(t[1]), r = Number(t[2]), a = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: a,
    raw: e
  };
}, KB = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var jB = (e, t) => {
  const n = py(e), r = py(t);
  KB(n, r) || process.env.NODE_ENV !== "production" && Ft(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Sd = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var GB = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Ft(`
      No <!doctype html> found.

      ${Sd}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Ft(`
      Unexpected <!doctype> found: (${t.name})

      ${Sd}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Ft(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Sd}
    `);
};
function Ip(e) {
  process.env.NODE_ENV !== "production" && e();
}
function ys(e, t) {
  Ip(() => {
    F.useEffect(() => {
      try {
        e();
      } catch (n) {
        bf(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function YB() {
  ys(() => {
    jB(UB.react, l.version), GB(document);
  }, []);
}
function Bp(e) {
  const t = F.useRef(e);
  return F.useEffect(() => {
    t.current = e;
  }), t;
}
function XB() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(u) {
    return u === e;
  }
  function r(u) {
    e && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot claim lock as it is already claimed") : Z(!1));
    const c = {
      abandon: u
    };
    return e = c, c;
  }
  function a() {
    e || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot release lock when there is no lock") : Z(!1)), e = null;
  }
  function o() {
    e && (e.abandon(), a());
  }
  return {
    isClaimed: t,
    isActive: n,
    claim: r,
    release: a,
    tryAbandon: o
  };
}
function ss(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const ZB = 9, QB = 13, Fp = 27, C0 = 32, JB = 33, eF = 34, tF = 35, nF = 36, rF = 37, iF = 38, aF = 39, oF = 40, sF = {
  [QB]: !0,
  [ZB]: !0
};
var T0 = (e) => {
  sF[e.keyCode] && e.preventDefault();
};
const lF = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var Lc = lF;
const D0 = 0, hy = 5;
function cF(e, t) {
  return Math.abs(t.x - e.x) >= hy || Math.abs(t.y - e.y) >= hy;
}
const my = {
  type: "IDLE"
};
function uF(e) {
  let {
    cancel: t,
    completed: n,
    getPhase: r,
    setPhase: a
  } = e;
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: u,
        clientX: c,
        clientY: d
      } = o;
      if (u !== D0)
        return;
      const f = {
        x: c,
        y: d
      }, h = r();
      if (h.type === "DRAGGING") {
        o.preventDefault(), h.actions.move(f);
        return;
      }
      h.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot be IDLE") : Z(!1));
      const m = h.point;
      if (!cF(m, f))
        return;
      o.preventDefault();
      const g = h.actions.fluidLift(f);
      a({
        type: "DRAGGING",
        actions: g
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const u = r();
      if (u.type !== "DRAGGING") {
        t();
        return;
      }
      o.preventDefault(), u.actions.drop({
        shouldBlockNextClick: !0
      }), n();
    }
  }, {
    eventName: "mousedown",
    fn: (o) => {
      r().type === "DRAGGING" && o.preventDefault(), t();
    }
  }, {
    eventName: "keydown",
    fn: (o) => {
      if (r().type === "PENDING") {
        t();
        return;
      }
      if (o.keyCode === Fp) {
        o.preventDefault(), t();
        return;
      }
      T0(o);
    }
  }, {
    eventName: "resize",
    fn: t
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: () => {
      r().type === "PENDING" && t();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (o) => {
      const u = r();
      if (u.type === "IDLE" && (process.env.NODE_ENV !== "production" ? Z(!1, "Unexpected phase") : Z(!1)), u.actions.shouldRespectForcePress()) {
        t();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Lc,
    fn: t
  }];
}
function dF(e) {
  const t = F.useRef(my), n = F.useRef(_i), r = bt(() => ({
    eventName: "mousedown",
    fn: function(m) {
      if (m.defaultPrevented || m.button !== D0 || m.ctrlKey || m.metaKey || m.shiftKey || m.altKey)
        return;
      const g = e.findClosestDraggableId(m);
      if (!g)
        return;
      const v = e.tryGetLock(g, u, {
        sourceEvent: m
      });
      if (!v)
        return;
      m.preventDefault();
      const y = {
        x: m.clientX,
        y: m.clientY
      };
      n.current(), f(v, y);
    }
  }), [e]), a = bt(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (h) => {
      if (h.defaultPrevented)
        return;
      const m = e.findClosestDraggableId(h);
      if (!m)
        return;
      const g = e.findOptionsForDraggable(m);
      g && (g.shouldRespectForcePress || e.canGetLock(m) && h.preventDefault());
    }
  }), [e]), o = Ke(function() {
    const m = {
      passive: !1,
      capture: !0
    };
    n.current = xr(window, [a, r], m);
  }, [a, r]), u = Ke(() => {
    t.current.type !== "IDLE" && (t.current = my, n.current(), o());
  }, [o]), c = Ke(() => {
    const h = t.current;
    u(), h.type === "DRAGGING" && h.actions.cancel({
      shouldBlockNextClick: !0
    }), h.type === "PENDING" && h.actions.abort();
  }, [u]), d = Ke(function() {
    const m = {
      capture: !0,
      passive: !1
    }, g = uF({
      cancel: c,
      completed: u,
      getPhase: () => t.current,
      setPhase: (v) => {
        t.current = v;
      }
    });
    n.current = xr(window, g, m);
  }, [c, u]), f = Ke(function(m, g) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? Z(!1, "Expected to move from IDLE to PENDING drag") : Z(!1)), t.current = {
      type: "PENDING",
      point: g,
      actions: m
    }, d();
  }, [d]);
  ir(function() {
    return o(), function() {
      n.current();
    };
  }, [o]);
}
function fF() {
}
const pF = {
  [eF]: !0,
  [JB]: !0,
  [nF]: !0,
  [tF]: !0
};
function hF(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (a) => {
      if (a.keyCode === Fp) {
        a.preventDefault(), n();
        return;
      }
      if (a.keyCode === C0) {
        a.preventDefault(), r();
        return;
      }
      if (a.keyCode === oF) {
        a.preventDefault(), e.moveDown();
        return;
      }
      if (a.keyCode === iF) {
        a.preventDefault(), e.moveUp();
        return;
      }
      if (a.keyCode === aF) {
        a.preventDefault(), e.moveRight();
        return;
      }
      if (a.keyCode === rF) {
        a.preventDefault(), e.moveLeft();
        return;
      }
      if (pF[a.keyCode]) {
        a.preventDefault();
        return;
      }
      T0(a);
    }
  }, {
    eventName: "mousedown",
    fn: n
  }, {
    eventName: "mouseup",
    fn: n
  }, {
    eventName: "click",
    fn: n
  }, {
    eventName: "touchstart",
    fn: n
  }, {
    eventName: "resize",
    fn: n
  }, {
    eventName: "wheel",
    fn: n,
    options: {
      passive: !0
    }
  }, {
    eventName: Lc,
    fn: n
  }];
}
function mF(e) {
  const t = F.useRef(fF), n = bt(() => ({
    eventName: "keydown",
    fn: function(o) {
      if (o.defaultPrevented || o.keyCode !== C0)
        return;
      const u = e.findClosestDraggableId(o);
      if (!u)
        return;
      const c = e.tryGetLock(u, h, {
        sourceEvent: o
      });
      if (!c)
        return;
      o.preventDefault();
      let d = !0;
      const f = c.snapLift();
      t.current();
      function h() {
        d || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot stop capturing a keyboard drag when not capturing") : Z(!1)), d = !1, t.current(), r();
      }
      t.current = xr(window, hF(f, h), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = Ke(function() {
    const o = {
      passive: !1,
      capture: !0
    };
    t.current = xr(window, [n], o);
  }, [n]);
  ir(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Ad = {
  type: "IDLE"
}, gF = 120, vF = 0.15;
function yF(e) {
  let {
    cancel: t,
    getPhase: n
  } = e;
  return [{
    eventName: "orientationchange",
    fn: t
  }, {
    eventName: "resize",
    fn: t
  }, {
    eventName: "contextmenu",
    fn: (r) => {
      r.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (r) => {
      if (n().type !== "DRAGGING") {
        t();
        return;
      }
      r.keyCode === Fp && r.preventDefault(), t();
    }
  }, {
    eventName: Lc,
    fn: t
  }];
}
function xF(e) {
  let {
    cancel: t,
    completed: n,
    getPhase: r
  } = e;
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (a) => {
      const o = r();
      if (o.type !== "DRAGGING") {
        t();
        return;
      }
      o.hasMoved = !0;
      const {
        clientX: u,
        clientY: c
      } = a.touches[0], d = {
        x: u,
        y: c
      };
      a.preventDefault(), o.actions.move(d);
    }
  }, {
    eventName: "touchend",
    fn: (a) => {
      const o = r();
      if (o.type !== "DRAGGING") {
        t();
        return;
      }
      a.preventDefault(), o.actions.drop({
        shouldBlockNextClick: !0
      }), n();
    }
  }, {
    eventName: "touchcancel",
    fn: (a) => {
      if (r().type !== "DRAGGING") {
        t();
        return;
      }
      a.preventDefault(), t();
    }
  }, {
    eventName: "touchforcechange",
    fn: (a) => {
      const o = r();
      o.type === "IDLE" && (process.env.NODE_ENV, Z(!1));
      const u = a.touches[0];
      if (!u || !(u.force >= vF))
        return;
      const d = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        d && t();
        return;
      }
      if (d) {
        if (o.hasMoved) {
          a.preventDefault();
          return;
        }
        t();
        return;
      }
      a.preventDefault();
    }
  }, {
    eventName: Lc,
    fn: t
  }];
}
function bF(e) {
  const t = F.useRef(Ad), n = F.useRef(_i), r = Ke(function() {
    return t.current;
  }, []), a = Ke(function(v) {
    t.current = v;
  }, []), o = bt(() => ({
    eventName: "touchstart",
    fn: function(v) {
      if (v.defaultPrevented)
        return;
      const y = e.findClosestDraggableId(v);
      if (!y)
        return;
      const E = e.tryGetLock(y, c, {
        sourceEvent: v
      });
      if (!E)
        return;
      const b = v.touches[0], {
        clientX: x,
        clientY: w
      } = b, A = {
        x,
        y: w
      };
      n.current(), m(E, A);
    }
  }), [e]), u = Ke(function() {
    const v = {
      capture: !0,
      passive: !1
    };
    n.current = xr(window, [o], v);
  }, [o]), c = Ke(() => {
    const g = t.current;
    g.type !== "IDLE" && (g.type === "PENDING" && clearTimeout(g.longPressTimerId), a(Ad), n.current(), u());
  }, [u, a]), d = Ke(() => {
    const g = t.current;
    c(), g.type === "DRAGGING" && g.actions.cancel({
      shouldBlockNextClick: !0
    }), g.type === "PENDING" && g.actions.abort();
  }, [c]), f = Ke(function() {
    const v = {
      capture: !0,
      passive: !1
    }, y = {
      cancel: d,
      completed: c,
      getPhase: r
    }, E = xr(window, xF(y), v), b = xr(window, yF(y), v);
    n.current = function() {
      E(), b();
    };
  }, [d, r, c]), h = Ke(function() {
    const v = r();
    v.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? Z(!1, `Cannot start dragging from phase ${v.type}`) : Z(!1));
    const y = v.actions.fluidLift(v.point);
    a({
      type: "DRAGGING",
      actions: y,
      hasMoved: !1
    });
  }, [r, a]), m = Ke(function(v, y) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? Z(!1, "Expected to move from IDLE to PENDING drag") : Z(!1));
    const E = setTimeout(h, gF);
    a({
      type: "PENDING",
      point: y,
      actions: v,
      longPressTimerId: E
    }), f();
  }, [f, r, a, h]);
  ir(function() {
    return u(), function() {
      n.current();
      const y = r();
      y.type === "PENDING" && (clearTimeout(y.longPressTimerId), a(Ad));
    };
  }, [r, u, a]), ir(function() {
    return xr(window, [{
      eventName: "touchmove",
      fn: () => {
      },
      options: {
        capture: !1,
        passive: !1
      }
    }]);
  }, []);
}
function EF(e) {
  Ip(() => {
    const t = Bp(e);
    ys(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot change the amount of sensor hooks after mounting") : Z(!1));
    });
  });
}
const SF = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function N0(e, t) {
  if (t == null)
    return !1;
  if (SF.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : N0(e, t.parentElement);
}
function AF(e, t) {
  const n = t.target;
  return vs(n) ? N0(e, n) : !1;
}
var wF = (e) => kr(e.getBoundingClientRect()).center;
function _F(e) {
  return e instanceof A0(e).Element;
}
const CF = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function O0(e, t) {
  return e == null ? null : e[CF](t) ? e : O0(e.parentElement, t);
}
function TF(e, t) {
  return e.closest ? e.closest(t) : O0(e, t);
}
function DF(e) {
  return `[${Ka.contextId}="${e}"]`;
}
function NF(e, t) {
  const n = t.target;
  if (!_F(n))
    return process.env.NODE_ENV !== "production" && Ft("event.target must be a Element"), null;
  const r = DF(e), a = TF(n, r);
  return a ? vs(a) ? a : (process.env.NODE_ENV !== "production" && Ft("drag handle must be a HTMLElement"), null) : null;
}
function OF(e, t) {
  const n = NF(e, t);
  return n ? n.getAttribute(Ka.draggableId) : null;
}
function PF(e, t) {
  const n = `[${_f.contextId}="${e}"]`, a = S0(document, n).find((o) => o.getAttribute(_f.id) === t);
  return a ? vs(a) ? a : (process.env.NODE_ENV !== "production" && Ft("Draggable element is not a HTMLElement"), null) : null;
}
function kF(e) {
  e.preventDefault();
}
function Cl(e) {
  let {
    expected: t,
    phase: n,
    isLockActive: r,
    shouldWarn: a
  } = e;
  return r() ? t !== n ? (a && process.env.NODE_ENV !== "production" && Ft(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${t}
        You called an action from outdated phase: ${n}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (a && process.env.NODE_ENV !== "production" && Ft(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function P0(e) {
  let {
    lockAPI: t,
    store: n,
    registry: r,
    draggableId: a
  } = e;
  if (t.isClaimed())
    return !1;
  const o = r.draggable.findById(a);
  return o ? !(!o.options.isEnabled || !y0(n.getState(), a)) : (process.env.NODE_ENV !== "production" && Ft(`Unable to find draggable with id: ${a}`), !1);
}
function LF(e) {
  let {
    lockAPI: t,
    contextId: n,
    store: r,
    registry: a,
    draggableId: o,
    forceSensorStop: u,
    sourceEvent: c
  } = e;
  if (!P0({
    lockAPI: t,
    store: r,
    registry: a,
    draggableId: o
  }))
    return null;
  const f = a.draggable.getById(o), h = PF(n, f.descriptor.id);
  if (!h)
    return process.env.NODE_ENV !== "production" && Ft(`Unable to find draggable element with id: ${o}`), null;
  if (c && !f.options.canDragInteractiveElements && AF(h, c))
    return null;
  const m = t.claim(u || _i);
  let g = "PRE_DRAG";
  function v() {
    return f.options.shouldRespectForcePress;
  }
  function y() {
    return t.isActive(m);
  }
  function E(C, $) {
    Cl({
      expected: C,
      phase: g,
      isLockActive: y,
      shouldWarn: !0
    }) && r.dispatch($());
  }
  const b = E.bind(null, "DRAGGING");
  function x(C) {
    function $() {
      t.release(), g = "COMPLETED";
    }
    g !== "PRE_DRAG" && ($(), process.env.NODE_ENV !== "production" ? Z(!1, `Cannot lift in phase ${g}`) : Z(!1)), r.dispatch(cI(C.liftActionArgs)), g = "DRAGGING";
    function O(I, B) {
      if (B === void 0 && (B = {
        shouldBlockNextClick: !1
      }), C.cleanup(), B.shouldBlockNextClick) {
        const L = xr(window, [{
          eventName: "click",
          fn: kF,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(L);
      }
      $(), r.dispatch(u0({
        reason: I
      }));
    }
    return {
      isActive: () => Cl({
        expected: "DRAGGING",
        phase: g,
        isLockActive: y,
        shouldWarn: !1
      }),
      shouldRespectForcePress: v,
      drop: (I) => O("DROP", I),
      cancel: (I) => O("CANCEL", I),
      ...C.actions
    };
  }
  function w(C) {
    const $ = Jo((I) => {
      b(() => c0({
        client: I
      }));
    });
    return {
      ...x({
        liftActionArgs: {
          id: o,
          clientSelection: C,
          movementMode: "FLUID"
        },
        cleanup: () => $.cancel(),
        actions: {
          move: $
        }
      }),
      move: $
    };
  }
  function A() {
    const C = {
      moveUp: () => b(yI),
      moveRight: () => b(bI),
      moveDown: () => b(xI),
      moveLeft: () => b(EI)
    };
    return x({
      liftActionArgs: {
        id: o,
        clientSelection: wF(h),
        movementMode: "SNAP"
      },
      cleanup: _i,
      actions: C
    });
  }
  function D() {
    Cl({
      expected: "PRE_DRAG",
      phase: g,
      isLockActive: y,
      shouldWarn: !0
    }) && t.release();
  }
  return {
    isActive: () => Cl({
      expected: "PRE_DRAG",
      phase: g,
      isLockActive: y,
      shouldWarn: !1
    }),
    shouldRespectForcePress: v,
    fluidLift: w,
    snapLift: A,
    abort: D
  };
}
const RF = [dF, mF, bF];
function MF(e) {
  let {
    contextId: t,
    store: n,
    registry: r,
    customSensors: a,
    enableDefaultSensors: o
  } = e;
  const u = [...o ? RF : [], ...a || []], c = F.useState(() => XB())[0], d = Ke(function(x, w) {
    ss(x) && !ss(w) && c.tryAbandon();
  }, [c]);
  ir(function() {
    let x = n.getState();
    return n.subscribe(() => {
      const A = n.getState();
      d(x, A), x = A;
    });
  }, [c, n, d]), ir(() => c.tryAbandon, [c.tryAbandon]);
  const f = Ke((b) => P0({
    lockAPI: c,
    registry: r,
    store: n,
    draggableId: b
  }), [c, r, n]), h = Ke((b, x, w) => LF({
    lockAPI: c,
    registry: r,
    contextId: t,
    store: n,
    draggableId: b,
    forceSensorStop: x || null,
    sourceEvent: w && w.sourceEvent ? w.sourceEvent : null
  }), [t, c, r, n]), m = Ke((b) => OF(t, b), [t]), g = Ke((b) => {
    const x = r.draggable.findById(b);
    return x ? x.options : null;
  }, [r.draggable]), v = Ke(function() {
    c.isClaimed() && (c.tryAbandon(), n.getState().phase !== "IDLE" && n.dispatch(Dp()));
  }, [c, n]), y = Ke(() => c.isClaimed(), [c]), E = bt(() => ({
    canGetLock: f,
    tryGetLock: h,
    findClosestDraggableId: m,
    findOptionsForDraggable: g,
    tryReleaseLock: v,
    isLockClaimed: y
  }), [f, h, m, g, v, y]);
  EF(u);
  for (let b = 0; b < u.length; b++)
    u[b](E);
}
const $F = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    l.version.startsWith("16") || l.version.startsWith("17") ? n() : Nf.flushSync(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), IF = (e) => ({
  ...as,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...as.durationDampening,
    ...e.autoScrollerOptions
  }
});
function No(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find store from lazy ref") : Z(!1)), e.current;
}
function BF(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: a,
    dragHandleUsageInstructions: o
  } = e, u = F.useRef(null);
  YB();
  const c = Bp(e), d = Ke(() => $F(c.current), [c]), f = Ke(() => IF(c.current), [c]), h = BB(t), m = HB({
    contextId: t,
    text: o
  }), g = PB(t, a), v = Ke((B) => {
    No(u).dispatch(B);
  }, []), y = bt(() => tg({
    publishWhileDragging: dI,
    updateDroppableScroll: pI,
    updateDroppableIsEnabled: hI,
    updateDroppableIsCombineEnabled: mI,
    collectionStarting: fI
  }, v), [v]), E = RB(), b = bt(() => lB(E, y), [E, y]), x = bt(() => _B({
    scrollWindow: cB,
    scrollDroppable: b.scrollDroppable,
    getAutoScrollerOptions: f,
    ...tg({
      move: c0
    }, v)
  }), [b.scrollDroppable, v, f]), w = kB(t), A = bt(() => iB({
    announce: h,
    autoScroller: x,
    dimensionMarshal: b,
    focusMarshal: w,
    getResponders: d,
    styleMarshal: g
  }), [h, x, b, w, d, g]);
  process.env.NODE_ENV !== "production" && u.current && u.current !== A && process.env.NODE_ENV !== "production" && Ft("unexpected store change"), u.current = A;
  const D = Ke(() => {
    const B = No(u);
    B.getState().phase !== "IDLE" && B.dispatch(Dp());
  }, []), _ = Ke(() => {
    const B = No(u).getState();
    return B.phase === "DROP_ANIMATING" ? !0 : B.phase === "IDLE" ? !1 : B.isDragging;
  }, []), C = bt(() => ({
    isDragging: _,
    tryAbort: D
  }), [_, D]);
  n(C);
  const $ = Ke((B) => y0(No(u).getState(), B), []), O = Ke(() => Zi(No(u).getState()), []), I = bt(() => ({
    marshal: b,
    focus: w,
    contextId: t,
    canLift: $,
    isMovementAllowed: O,
    dragHandleUsageInstructionsId: m,
    registry: E
  }), [t, b, m, w, $, O, E]);
  return MF({
    contextId: t,
    store: A,
    registry: E,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), F.useEffect(() => D, [D]), l.createElement(kc.Provider, {
    value: I
  }, l.createElement(MM, {
    context: Mp,
    store: A
  }, e.children));
}
let FF = 0;
function zF() {
  return bt(() => `${FF++}`, []);
}
function WF() {
  return l.useId();
}
var VF = "useId" in l ? WF : zF;
function gy(e) {
  const t = VF(), n = e.dragHandleUsageInstructions || Ll.dragHandleUsageInstructions;
  return l.createElement(ZM, null, (r) => l.createElement(BF, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: r,
    dragHandleUsageInstructions: n,
    enableDefaultSensors: e.enableDefaultSensors,
    sensors: e.sensors,
    onBeforeCapture: e.onBeforeCapture,
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragUpdate: e.onDragUpdate,
    onDragEnd: e.onDragEnd,
    autoScrollerOptions: e.autoScrollerOptions
  }, e.children));
}
const vy = {
  dragging: 5e3,
  dropAnimating: 4500
}, HF = (e, t) => t ? jo.drop(t.duration) : e ? jo.snap : jo.fluid, UF = (e, t) => {
  if (e)
    return t ? is.opacity.drop : is.opacity.combining;
}, qF = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function KF(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: a,
    dropping: o
  } = e, u = !!a, c = qF(e), d = !!o, f = d ? Af.drop(r, u) : Af.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: HF(c, o),
    transform: f,
    opacity: UF(u, d),
    zIndex: d ? vy.dropAnimating : vy.dragging,
    pointerEvents: "none"
  };
}
function jF(e) {
  return {
    transform: Af.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function GF(e) {
  return e.type === "DRAGGING" ? KF(e) : jF(e);
}
function YF(e, t, n) {
  n === void 0 && (n = vn);
  const r = window.getComputedStyle(t), a = t.getBoundingClientRect(), o = Bb(a, r), u = pc(o, n), c = {
    client: o,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, d = {
    x: o.marginBox.width,
    y: o.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: c,
    displaceBy: d,
    client: o,
    page: u
  };
}
function XF(e) {
  const t = $p("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: a,
    canDragInteractiveElements: o,
    shouldRespectForcePress: u,
    isEnabled: c
  } = e, d = bt(() => ({
    canDragInteractiveElements: o,
    shouldRespectForcePress: u,
    isEnabled: c
  }), [o, c, u]), f = Ke((v) => {
    const y = a();
    return y || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot get dimension when no ref is set") : Z(!1)), YF(n, y, v);
  }, [n, a]), h = bt(() => ({
    uniqueId: t,
    descriptor: n,
    options: d,
    getDimension: f
  }), [n, f, d, t]), m = F.useRef(h), g = F.useRef(!0);
  ir(() => (r.draggable.register(m.current), () => r.draggable.unregister(m.current)), [r.draggable]), ir(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    const v = m.current;
    m.current = h, r.draggable.update(h, v);
  }, [h, r.draggable]);
}
var zp = l.createContext(null);
function k0(e) {
  e && vs(e) || (process.env.NODE_ENV !== "production" ? Z(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : Z(!1));
}
function ZF(e, t, n) {
  ys(() => {
    function r(o) {
      return `Draggable[id: ${o}]: `;
    }
    const a = e.draggableId;
    a || (process.env.NODE_ENV !== "production" ? Z(!1, "Draggable requires a draggableId") : Z(!1)), typeof a != "string" && (process.env.NODE_ENV !== "production" ? Z(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof a}] (value: ${a})`) : Z(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? Z(!1, `${r(a)} requires an integer index prop`) : Z(!1)), e.mapped.type !== "DRAGGING" && (k0(n()), e.isEnabled && (w0(t, a) || (process.env.NODE_ENV !== "production" ? Z(!1, `${r(a)} Unable to find drag handle`) : Z(!1))));
  });
}
function QF(e) {
  Ip(() => {
    const t = F.useRef(e);
    ys(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? Z(!1, "Draggable isClone prop value changed during component life") : Z(!1));
    }, [e]);
  });
}
function gc(e) {
  const t = F.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find required context") : Z(!1)), t;
}
function JF(e) {
  e.preventDefault();
}
const e2 = (e) => {
  const t = F.useRef(null), n = Ke(function(C) {
    C === void 0 && (C = null), t.current = C;
  }, []), r = Ke(() => t.current, []), {
    contextId: a,
    dragHandleUsageInstructionsId: o,
    registry: u
  } = gc(kc), {
    type: c,
    droppableId: d
  } = gc(zp), f = bt(() => ({
    id: e.draggableId,
    index: e.index,
    type: c,
    droppableId: d
  }), [e.draggableId, e.index, c, d]), {
    children: h,
    draggableId: m,
    isEnabled: g,
    shouldRespectForcePress: v,
    canDragInteractiveElements: y,
    isClone: E,
    mapped: b,
    dropAnimationFinished: x
  } = e;
  if (ZF(e, a, r), QF(E), !E) {
    const C = bt(() => ({
      descriptor: f,
      registry: u,
      getDraggableRef: r,
      canDragInteractiveElements: y,
      shouldRespectForcePress: v,
      isEnabled: g
    }), [f, u, r, y, v, g]);
    XF(C);
  }
  const w = bt(() => g ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": o,
    "data-rfd-drag-handle-draggable-id": m,
    "data-rfd-drag-handle-context-id": a,
    draggable: !1,
    onDragStart: JF
  } : null, [a, o, m, g]), A = Ke((C) => {
    b.type === "DRAGGING" && b.dropping && C.propertyName === "transform" && (l.version.startsWith("16") || l.version.startsWith("17") ? x() : Nf.flushSync(x));
  }, [x, b]), D = bt(() => {
    const C = GF(b), $ = b.type === "DRAGGING" && b.dropping ? A : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": a,
        "data-rfd-draggable-id": m,
        style: C,
        onTransitionEnd: $
      },
      dragHandleProps: w
    };
  }, [a, w, m, b, A, n]), _ = bt(() => ({
    draggableId: f.id,
    type: f.type,
    source: {
      index: f.index,
      droppableId: f.droppableId
    }
  }), [f.droppableId, f.id, f.index, f.type]);
  return l.createElement(l.Fragment, null, h(D, b.snapshot, _));
};
var t2 = e2, L0 = (e, t) => e === t, R0 = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const n2 = (e) => e.combine ? e.combine.draggableId : null, r2 = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function i2() {
  const e = gn((a, o) => ({
    x: a,
    y: o
  })), t = gn(function(a, o, u, c, d) {
    return u === void 0 && (u = null), c === void 0 && (c = null), d === void 0 && (d = null), {
      isDragging: !0,
      isClone: o,
      isDropAnimating: !!d,
      dropAnimation: d,
      mode: a,
      draggingOver: u,
      combineWith: c,
      combineTargetFor: null
    };
  }), n = gn(function(a, o, u, c, d, f, h) {
    return d === void 0 && (d = null), f === void 0 && (f = null), h === void 0 && (h = null), {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: d,
        combineWith: f,
        mode: o,
        offset: a,
        dimension: u,
        forceShouldAnimate: h,
        snapshot: t(o, c, d, f, null)
      }
    };
  });
  return (a, o) => {
    if (ss(a)) {
      if (a.critical.draggable.id !== o.draggableId)
        return null;
      const u = a.current.client.offset, c = a.dimensions.draggables[o.draggableId], d = rr(a.impact), f = r2(a.impact), h = a.forceShouldAnimate;
      return n(e(u.x, u.y), a.movementMode, c, o.isClone, d, f, h);
    }
    if (a.phase === "DROP_ANIMATING") {
      const u = a.completed;
      if (u.result.draggableId !== o.draggableId)
        return null;
      const c = o.isClone, d = a.dimensions.draggables[o.draggableId], f = u.result, h = f.mode, m = R0(f), g = n2(f), y = {
        duration: a.dropDuration,
        curve: Op.drop,
        moveTo: a.newHomeClientOffset,
        opacity: g ? is.opacity.drop : null,
        scale: g ? is.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: a.newHomeClientOffset,
          dimension: d,
          dropping: y,
          draggingOver: m,
          combineWith: g,
          mode: h,
          forceShouldAnimate: null,
          snapshot: t(h, c, m, g, y)
        }
      };
    }
    return null;
  };
}
function M0(e) {
  return e === void 0 && (e = null), {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  };
}
const a2 = {
  mapped: {
    type: "SECONDARY",
    offset: vn,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: M0(null)
  }
};
function o2() {
  const e = gn((u, c) => ({
    x: u,
    y: c
  })), t = gn(M0), n = gn(function(u, c, d) {
    return c === void 0 && (c = null), {
      mapped: {
        type: "SECONDARY",
        offset: u,
        combineTargetFor: c,
        shouldAnimateDisplacement: d,
        snapshot: t(c)
      }
    };
  }), r = (u) => u ? n(vn, u, !0) : null, a = (u, c, d, f) => {
    const h = d.displaced.visible[u], m = !!(f.inVirtualList && f.effected[u]), g = Nc(d), v = g && g.draggableId === u ? c : null;
    if (!h) {
      if (!m)
        return r(v);
      if (d.displaced.invisible[u])
        return null;
      const b = ja(f.displacedBy.point), x = e(b.x, b.y);
      return n(x, v, !0);
    }
    if (m)
      return r(v);
    const y = d.displacedBy.point, E = e(y.x, y.y);
    return n(E, v, h.shouldAnimate);
  };
  return (u, c) => {
    if (ss(u))
      return u.critical.draggable.id === c.draggableId ? null : a(c.draggableId, u.critical.draggable.id, u.impact, u.afterCritical);
    if (u.phase === "DROP_ANIMATING") {
      const d = u.completed;
      return d.result.draggableId === c.draggableId ? null : a(c.draggableId, d.result.draggableId, d.impact, d.afterCritical);
    }
    return null;
  };
}
const s2 = () => {
  const e = i2(), t = o2();
  return (r, a) => e(r, a) || t(r, a) || a2;
}, l2 = {
  dropAnimationFinished: d0
}, c2 = $b(s2, l2, null, {
  context: Mp,
  areStatePropsEqual: L0
})(t2);
var u2 = c2;
function $0(e) {
  return gc(zp).isUsingCloneFor === e.draggableId && !e.isClone ? null : l.createElement(u2, e);
}
function I0(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return l.createElement($0, Et({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Wp = (e) => (t) => e === t, d2 = Wp("scroll"), f2 = Wp("auto"), p2 = Wp("visible"), yy = (e, t) => t(e.overflowX) || t(e.overflowY), h2 = (e, t) => t(e.overflowX) && t(e.overflowY), B0 = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return yy(n, d2) || yy(n, f2);
}, m2 = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = os(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, Z(!1)), !B0(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return h2(r, p2) || process.env.NODE_ENV !== "production" && Ft(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, F0 = (e) => e == null ? null : e === document.body ? m2() ? e : null : e === document.documentElement ? null : B0(e) ? e : F0(e.parentElement);
var z0 = F0, g2 = (e) => {
  !e || !z0(e.parentElement) || process.env.NODE_ENV !== "production" && Ft(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Cf = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const W0 = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : W0(e.parentElement) : !1;
var v2 = (e) => {
  const t = z0(e), n = W0(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, y2 = (e) => {
  let {
    descriptor: t,
    isEnabled: n,
    isCombineEnabled: r,
    isFixedOnPage: a,
    direction: o,
    client: u,
    page: c,
    closest: d
  } = e;
  const f = (() => {
    if (!d)
      return null;
    const {
      scrollSize: v,
      client: y
    } = d, E = m0({
      scrollHeight: v.scrollHeight,
      scrollWidth: v.scrollWidth,
      height: y.paddingBox.height,
      width: y.paddingBox.width
    });
    return {
      pageMarginBox: d.page.marginBox,
      frameClient: y,
      scrollSize: v,
      shouldClipSubject: d.shouldClipSubject,
      scroll: {
        initial: d.scroll,
        current: d.scroll,
        max: E,
        diff: {
          value: vn,
          displacement: vn
        }
      }
    };
  })(), h = o === "vertical" ? Ap : Gb, m = Ua({
    page: c,
    withPlaceholder: null,
    axis: h,
    frame: f
  });
  return {
    descriptor: t,
    isCombineEnabled: r,
    isFixedOnPage: a,
    axis: h,
    isEnabled: n,
    client: u,
    page: c,
    frame: f,
    subject: m
  };
};
const x2 = (e, t) => {
  const n = Fb(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, a = n.paddingBox.left - t.scrollLeft, o = r + t.scrollHeight, u = a + t.scrollWidth, d = xp({
    top: r,
    right: u,
    bottom: o,
    left: a
  }, n.border);
  return bp({
    borderBox: d,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var b2 = (e) => {
  let {
    ref: t,
    descriptor: n,
    env: r,
    windowScroll: a,
    direction: o,
    isDropDisabled: u,
    isCombineEnabled: c,
    shouldClipSubject: d
  } = e;
  const f = r.closestScrollable, h = x2(t, f), m = pc(h, a), g = (() => {
    if (!f)
      return null;
    const y = Fb(f), E = {
      scrollHeight: f.scrollHeight,
      scrollWidth: f.scrollWidth
    };
    return {
      client: y,
      page: pc(y, a),
      scroll: Cf(f),
      scrollSize: E,
      shouldClipSubject: d
    };
  })();
  return y2({
    descriptor: n,
    isEnabled: !u,
    isCombineEnabled: c,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: h,
    page: m,
    closest: g
  });
};
const E2 = {
  passive: !1
}, S2 = {
  passive: !0
};
var xy = (e) => e.shouldPublishImmediately ? E2 : S2;
const Tl = (e) => e && e.env.closestScrollable || null;
function A2(e) {
  const t = F.useRef(null), n = gc(kc), r = $p("droppable"), {
    registry: a,
    marshal: o
  } = n, u = Bp(e), c = bt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), d = F.useRef(c), f = bt(() => gn((D, _) => {
    t.current || (process.env.NODE_ENV !== "production" ? Z(!1, "Can only update scroll when dragging") : Z(!1));
    const C = {
      x: D,
      y: _
    };
    o.updateDroppableScroll(c.id, C);
  }), [c.id, o]), h = Ke(() => {
    const D = t.current;
    return !D || !D.env.closestScrollable ? vn : Cf(D.env.closestScrollable);
  }, []), m = Ke(() => {
    const D = h();
    f(D.x, D.y);
  }, [h, f]), g = bt(() => Jo(m), [m]), v = Ke(() => {
    const D = t.current, _ = Tl(D);
    if (D && _ || (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find scroll options while scrolling") : Z(!1)), D.scrollOptions.shouldPublishImmediately) {
      m();
      return;
    }
    g();
  }, [g, m]), y = Ke((D, _) => {
    t.current && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot collect a droppable while a drag is occurring") : Z(!1));
    const C = u.current, $ = C.getDroppableRef();
    $ || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot collect without a droppable ref") : Z(!1));
    const O = v2($), I = {
      ref: $,
      descriptor: c,
      env: O,
      scrollOptions: _
    };
    t.current = I;
    const B = b2({
      ref: $,
      descriptor: c,
      env: O,
      windowScroll: D,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), L = O.closestScrollable;
    return L && (L.setAttribute(dy.contextId, n.contextId), L.addEventListener("scroll", v, xy(I.scrollOptions)), process.env.NODE_ENV !== "production" && g2(L)), B;
  }, [n.contextId, c, v, u]), E = Ke(() => {
    const D = t.current, _ = Tl(D);
    return D && _ || (process.env.NODE_ENV !== "production" ? Z(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : Z(!1)), Cf(_);
  }, []), b = Ke(() => {
    const D = t.current;
    D || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot stop drag when no active drag") : Z(!1));
    const _ = Tl(D);
    t.current = null, _ && (g.cancel(), _.removeAttribute(dy.contextId), _.removeEventListener("scroll", v, xy(D.scrollOptions)));
  }, [v, g]), x = Ke((D) => {
    const _ = t.current;
    _ || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot scroll when there is no drag") : Z(!1));
    const C = Tl(_);
    C || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot scroll a droppable with no closest scrollable") : Z(!1)), C.scrollTop += D.y, C.scrollLeft += D.x;
  }, []), w = bt(() => ({
    getDimensionAndWatchScroll: y,
    getScrollWhileDragging: E,
    dragStopped: b,
    scroll: x
  }), [b, y, E, x]), A = bt(() => ({
    uniqueId: r,
    descriptor: c,
    callbacks: w
  }), [w, c, r]);
  ir(() => (d.current = A.descriptor, a.droppable.register(A), () => {
    t.current && (process.env.NODE_ENV !== "production" && Ft("Unsupported: changing the droppableId or type of a Droppable during a drag"), b()), a.droppable.unregister(A);
  }), [w, c, b, A, o, a.droppable]), ir(() => {
    t.current && o.updateDroppableIsEnabled(d.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, o]), ir(() => {
    t.current && o.updateDroppableIsCombineEnabled(d.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, o]);
}
function wd() {
}
const by = {
  width: 0,
  height: 0,
  margin: i$
}, w2 = (e) => {
  let {
    isAnimatingOpenOnMount: t,
    placeholder: n,
    animate: r
  } = e;
  return t || r === "close" ? by : {
    height: n.client.borderBox.height,
    width: n.client.borderBox.width,
    margin: n.client.margin
  };
}, _2 = (e) => {
  let {
    isAnimatingOpenOnMount: t,
    placeholder: n,
    animate: r
  } = e;
  const a = w2({
    isAnimatingOpenOnMount: t,
    placeholder: n,
    animate: r
  });
  return {
    display: n.display,
    boxSizing: "border-box",
    width: a.width,
    height: a.height,
    marginTop: a.margin.top,
    marginRight: a.margin.right,
    marginBottom: a.margin.bottom,
    marginLeft: a.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? jo.placeholder : null
  };
}, C2 = (e) => {
  const t = F.useRef(null), n = Ke(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: a,
    onClose: o,
    contextId: u
  } = e, [c, d] = F.useState(e.animate === "open");
  F.useEffect(() => c ? r !== "open" ? (n(), d(!1), wd) : t.current ? wd : (t.current = setTimeout(() => {
    t.current = null, d(!1);
  }), n) : wd, [r, c, n]);
  const f = Ke((m) => {
    m.propertyName === "height" && (a(), r === "close" && o());
  }, [r, o, a]), h = _2({
    isAnimatingOpenOnMount: c,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return l.createElement(e.placeholder.tagName, {
    style: h,
    "data-rfd-placeholder-context-id": u,
    onTransitionEnd: f,
    ref: e.innerRef
  });
};
var T2 = l.memo(C2);
function _d(e) {
  return typeof e == "boolean";
}
function Cd(e, t) {
  t.forEach((n) => n(e));
}
const D2 = [function(t) {
  let {
    props: n
  } = t;
  n.droppableId || (process.env.NODE_ENV !== "production" ? Z(!1, "A Droppable requires a droppableId prop") : Z(!1)), typeof n.droppableId != "string" && (process.env.NODE_ENV !== "production" ? Z(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof n.droppableId}]`) : Z(!1));
}, function(t) {
  let {
    props: n
  } = t;
  _d(n.isDropDisabled) || (process.env.NODE_ENV !== "production" ? Z(!1, "isDropDisabled must be a boolean") : Z(!1)), _d(n.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? Z(!1, "isCombineEnabled must be a boolean") : Z(!1)), _d(n.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? Z(!1, "ignoreContainerClipping must be a boolean") : Z(!1));
}, function(t) {
  let {
    getDroppableRef: n
  } = t;
  k0(n());
}], N2 = [function(t) {
  let {
    props: n,
    getPlaceholderRef: r
  } = t;
  !n.placeholder || r() || process.env.NODE_ENV !== "production" && Ft(`
      Droppable setup issue [droppableId: "${n.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], O2 = [function(t) {
  let {
    props: n
  } = t;
  n.renderClone || (process.env.NODE_ENV !== "production" ? Z(!1, "Must provide a clone render function (renderClone) for virtual lists") : Z(!1));
}, function(t) {
  let {
    getPlaceholderRef: n
  } = t;
  n() && (process.env.NODE_ENV !== "production" ? Z(!1, "Expected virtual list to not have a placeholder") : Z(!1));
}];
function P2(e) {
  ys(() => {
    Cd(e, D2), e.props.mode === "standard" && Cd(e, N2), e.props.mode === "virtual" && Cd(e, O2);
  });
}
class k2 extends l.PureComponent {
  constructor() {
    super(...arguments), this.state = {
      isVisible: !!this.props.on,
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    }, this.onClose = () => {
      this.state.animate === "close" && this.setState({
        isVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(t, n) {
    return t.shouldAnimate ? t.on ? {
      isVisible: !0,
      data: t.on,
      animate: "open"
    } : n.isVisible ? {
      isVisible: !0,
      data: n.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: !!t.on,
      data: t.on,
      animate: "none"
    };
  }
  render() {
    if (!this.state.isVisible)
      return null;
    const t = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(t);
  }
}
const L2 = (e) => {
  const t = F.useContext(kc);
  t || (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find app context") : Z(!1));
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, a = F.useRef(null), o = F.useRef(null), {
    children: u,
    droppableId: c,
    type: d,
    mode: f,
    direction: h,
    ignoreContainerClipping: m,
    isDropDisabled: g,
    isCombineEnabled: v,
    snapshot: y,
    useClone: E,
    updateViewportMaxScroll: b,
    getContainerForClone: x
  } = e, w = Ke(() => a.current, []), A = Ke(function(N) {
    N === void 0 && (N = null), a.current = N;
  }, []), D = Ke(() => o.current, []), _ = Ke(function(N) {
    N === void 0 && (N = null), o.current = N;
  }, []);
  P2({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: D
  });
  const C = Ke(() => {
    r() && b({
      maxScroll: v0()
    });
  }, [r, b]);
  A2({
    droppableId: c,
    type: d,
    mode: f,
    direction: h,
    isDropDisabled: g,
    isCombineEnabled: v,
    ignoreContainerClipping: m,
    getDroppableRef: w
  });
  const $ = bt(() => l.createElement(k2, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, (N) => {
    let {
      onClose: z,
      data: W,
      animate: M
    } = N;
    return l.createElement(T2, {
      placeholder: W,
      onClose: z,
      innerRef: _,
      animate: M,
      contextId: n,
      onTransitionEnd: C
    });
  }), [n, C, e.placeholder, e.shouldAnimatePlaceholder, _]), O = bt(() => ({
    innerRef: A,
    placeholder: $,
    droppableProps: {
      "data-rfd-droppable-id": c,
      "data-rfd-droppable-context-id": n
    }
  }), [n, c, $, A]), I = E ? E.dragging.draggableId : null, B = bt(() => ({
    droppableId: c,
    type: d,
    isUsingCloneFor: I
  }), [c, I, d]);
  function L() {
    if (!E)
      return null;
    const {
      dragging: N,
      render: z
    } = E, W = l.createElement($0, {
      draggableId: N.draggableId,
      index: N.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (M, H) => z(M, H, N));
    return Ly.createPortal(W, x());
  }
  return l.createElement(zp.Provider, {
    value: B
  }, u(O, y), L());
};
var R2 = L2;
function M2() {
  return document.body || (process.env.NODE_ENV !== "production" ? Z(!1, "document.body is not ready") : Z(!1)), document.body;
}
const Ey = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: M2
}, V0 = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Ey)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Ey[n]
    });
  return t;
}, Td = (e, t) => e === t.droppable.type, Sy = (e, t) => t.draggables[e.draggable.id], $2 = () => {
  const e = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, t = {
    ...e,
    shouldAnimatePlaceholder: !1
  }, n = gn((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), r = gn((o, u, c, d, f, h) => {
    const m = f.descriptor.id;
    if (f.descriptor.droppableId === o) {
      const y = h ? {
        render: h,
        dragging: n(f.descriptor)
      } : null, E = {
        isDraggingOver: c,
        draggingOverWith: c ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: f.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: E,
        useClone: y
      };
    }
    if (!u)
      return t;
    if (!d)
      return e;
    const v = {
      isDraggingOver: c,
      draggingOverWith: m,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: f.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: v,
      useClone: null
    };
  });
  return (o, u) => {
    const c = V0(u), d = c.droppableId, f = c.type, h = !c.isDropDisabled, m = c.renderClone;
    if (ss(o)) {
      const g = o.critical;
      if (!Td(f, g))
        return t;
      const v = Sy(g, o.dimensions), y = rr(o.impact) === d;
      return r(d, h, y, y, v, m);
    }
    if (o.phase === "DROP_ANIMATING") {
      const g = o.completed;
      if (!Td(f, g.critical))
        return t;
      const v = Sy(g.critical, o.dimensions);
      return r(d, h, R0(g.result) === d, rr(g.impact) === d, v, m);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const g = o.completed;
      if (!Td(f, g.critical))
        return t;
      const v = rr(g.impact) === d, y = !!(g.impact.at && g.impact.at.type === "COMBINE"), E = g.critical.droppable.id === d;
      return v ? y ? e : t : E ? e : t;
    }
    return t;
  };
}, I2 = {
  updateViewportMaxScroll: vI
}, B2 = $b($2, I2, (e, t, n) => ({
  ...V0(n),
  ...e,
  ...t
}), {
  context: Mp,
  areStatePropsEqual: L0
})(R2);
var Ay = B2;
function F2(e, t, n) {
  var r = this, a = F.useRef(null), o = F.useRef(0), u = F.useRef(null), c = F.useRef([]), d = F.useRef(), f = F.useRef(), h = F.useRef(e), m = F.useRef(!0);
  h.current = e;
  var g = !t && t !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  t = +t || 0, n = n || {};
  var v = !!n.leading, y = "trailing" in n ? !!n.trailing : !0, E = "maxWait" in n, b = E ? Math.max(+n.maxWait || 0, t) : null;
  F.useEffect(function() {
    return m.current = !0, function() {
      m.current = !1;
    };
  }, []);
  var x = F.useMemo(function() {
    var w = function(O) {
      var I = c.current, B = d.current;
      return c.current = d.current = null, o.current = O, f.current = h.current.apply(B, I);
    }, A = function(O, I) {
      g && cancelAnimationFrame(u.current), u.current = g ? requestAnimationFrame(O) : setTimeout(O, I);
    }, D = function(O) {
      if (!m.current)
        return !1;
      var I = O - a.current, B = O - o.current;
      return !a.current || I >= t || I < 0 || E && B >= b;
    }, _ = function(O) {
      return u.current = null, y && c.current ? w(O) : (c.current = d.current = null, f.current);
    }, C = function() {
      var O = Date.now();
      if (D(O))
        return _(O);
      if (m.current) {
        var I = O - a.current, B = O - o.current, L = t - I, N = E ? Math.min(L, b - B) : L;
        A(C, N);
      }
    }, $ = function() {
      for (var O = [], I = 0; I < arguments.length; I++)
        O[I] = arguments[I];
      var B = Date.now(), L = D(B);
      if (c.current = O, d.current = r, a.current = B, L) {
        if (!u.current && m.current)
          return o.current = a.current, A(C, t), v ? w(a.current) : f.current;
        if (E)
          return A(C, t), w(a.current);
      }
      return u.current || A(C, t), f.current;
    };
    return $.cancel = function() {
      u.current && (g ? cancelAnimationFrame(u.current) : clearTimeout(u.current)), o.current = 0, c.current = a.current = d.current = u.current = null;
    }, $.isPending = function() {
      return !!u.current;
    }, $.flush = function() {
      return u.current ? _(Date.now()) : f.current;
    }, $;
  }, [v, E, t, b, y, g]);
  return x;
}
function z2(e, t) {
  return e === t;
}
function wy(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function W2(e) {
  var t = F.useState(wy(e)), n = t[0], r = t[1], a = F.useCallback(function(o) {
    return r(wy(o));
  }, []);
  return [n, a];
}
function H0(e, t, n) {
  var r = n && n.equalityFn || z2, a = W2(e), o = a[0], u = a[1], c = F2(F.useCallback(function(f) {
    return u(f);
  }, [u]), t, n), d = F.useRef(e);
  return F.useEffect(function() {
    r(d.current, e) || (c(e), d.current = e);
  }, [e, c, r]), [o, { cancel: c.cancel, isPending: c.isPending, flush: c.flush }];
}
const Tf = ({
  label: e,
  sliderType: t = "flat",
  size: n = "medium",
  activeColor: r = null,
  section: a = null,
  subsection: o = null,
  fieldName: u,
  updateField: c,
  value: d,
  i: f = null,
  min: h = null,
  max: m = null,
  onClick: g,
  ...v
}) => {
  const [y, E] = F.useState(d);
  let b = () => {
    let A = "";
    return a && (A += a + "-"), o && (A += o + "-"), u && (A += u), A;
  };
  const x = () => ({
    flat: " slider--flat",
    block: " slider--block",
    pill: " slider--pill",
    "3d": " slider--3d"
  })[t] || "";
  F.useEffect(() => {
    d !== void 0 && d !== y && E(d);
  }, [d]), F.useEffect(() => {
    d !== void 0 && d !== y && c && c(a, o, u, y, f);
  }, [y]);
  const w = (A) => {
    E(!y), g && g(A);
  };
  return /* @__PURE__ */ l.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ l.createElement("label", null, e), /* @__PURE__ */ l.createElement("div", { className: "cove-input__slider" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + x() + (y ? " active" : ""), onClick: w }, /* @__PURE__ */ l.createElement("div", { className: "cove-input__slider-button" }), /* @__PURE__ */ l.createElement("div", { className: "cove-input__slider-track", style: y && r ? { backgroundColor: r } : null }), /* @__PURE__ */ l.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: b(), checked: y || !1, readOnly: !0 })));
};
Tf.propTypes = {
  /** Add label to the input field */
  label: G.string,
  /** Select the preferred display style of the slider */
  sliderType: G.oneOf(["flat", "block", "pill", "3d"]),
  /** Select the preferred size of the slider */
  size: G.oneOf(["small", "medium", "large"]),
  /** Select the preferred color for the slider when active */
  activeColor: G.string,
  /** Parent key value of nested target config option
   *
   * (optional)*/
  section: G.string,
  /** Child key value of nested target config option
   *
   * (optional, requires `section` value)*/
  subsection: G.string,
  /** Key value of targeted config option */
  fieldName: G.string,
  /** Prop drill down of the updateField function */
  updateField: G.func,
  /** Current value of the input, usually the current config option value */
  stateValue: G.object
};
const Rl = (e) => /* @__PURE__ */ F.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ F.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), Oo = F.memo(({ label: e, value: t, options: n, fieldName: r, section: a = null, subsection: o = null, required: u = !1, tooltip: c, updateField: d, initial: f, ...h }) => {
  let m = n.map((g, v) => /* @__PURE__ */ l.createElement("option", { value: g, key: v }, g));
  return f && m.unshift(
    /* @__PURE__ */ l.createElement("option", { value: "", key: "initial" }, f)
  ), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, e, c), /* @__PURE__ */ l.createElement(
    "select",
    {
      className: u && !t ? "warning" : "",
      name: r,
      value: t,
      onChange: (g) => {
        d(a, o, r, g.target.value);
      },
      ...h
    },
    m
  ));
}), Dd = F.memo(({ label: e, value: t, fieldName: n, section: r = null, subsection: a = null, tooltip: o, updateField: u, ...c }) => /* @__PURE__ */ l.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ l.createElement(
  "input",
  {
    type: "checkbox",
    name: n,
    checked: t,
    onChange: (d) => {
      u(r, a, n, !t);
    },
    ...c
  }
), /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, e, o))), Po = F.memo(({ label: e, tooltip: t, section: n = null, subsection: r = null, fieldName: a, updateField: o, value: u, type: c = "input", i: d = null, min: f = null, ...h }) => {
  const [m, g] = F.useState(u), [v] = H0(m, 500);
  F.useEffect(() => {
    typeof v == "string" && u !== v && o(n, r, a, v, d);
  }, [v]);
  let y = r ? `${n}-${r}-${a}` : `${n}-${r}-${a}`;
  const E = (x) => {
    c !== "number" || f === null || !x.target.value || f <= parseFloat(x.target.value) ? g(x.target.value) : g(f.toString());
  };
  let b = /* @__PURE__ */ l.createElement("input", { type: "text", name: y, onChange: E, ...h, value: m });
  return c === "textarea" && (b = /* @__PURE__ */ l.createElement("textarea", { name: y, onChange: E, ...h, value: m })), c === "number" && (b = /* @__PURE__ */ l.createElement("input", { type: "number", name: y, onChange: E, ...h, value: m })), c === "date" && (b = /* @__PURE__ */ l.createElement("input", { type: "date", name: y, onChange: E, ...h, value: m })), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, e, t), b);
}), V2 = () => {
  var c, d, f, h, m, g, v, y, E, b, x, w;
  const { config: e, rawData: t, updateConfig: n, isDebug: r } = F.useContext(pt), a = (A) => {
    A.orientation === "horizontal" && (A.labels = !1), A.table.show === void 0 && (A.table.show = !isDashboard), A.visualizationType === "Combo" && (A.orientation = "vertical");
  }, o = (A = !0) => {
    let D = {};
    return t.forEach((_) => {
      Object.keys(_).forEach((C) => D[C] = !0);
    }), A && Object.keys(D).forEach((_) => {
      (e.series && e.series.filter((C) => C.dataKey === _).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(_)) && delete D[_];
    }), Object.keys(D);
  }, u = (A, D, _, C) => {
    if (A === "boxplot" && D === "legend") {
      n({
        ...e,
        [A]: {
          ...e[A],
          [D]: {
            ...e.boxplot[D],
            [_]: C
          }
        }
      });
      return;
    }
    if (A === "boxplot" && D === "labels") {
      n({
        ...e,
        [A]: {
          ...e[A],
          [D]: {
            ...e.boxplot[D],
            [_]: C
          }
        }
      });
      return;
    }
    if (A === "forestPlot" && D) {
      n({
        ...e,
        [A]: {
          ...e[A],
          [D]: {
            ...e.forestPlot[D],
            [_]: C
          }
        }
      });
      return;
    }
    if (A === "columns" && D !== "" && _ !== "") {
      n({
        ...e,
        [A]: {
          ...e[A],
          [D]: {
            ...e[A][D],
            [_]: C
          }
        }
      });
      return;
    }
    if (A === null && D === null) {
      let B = { ...e, [_]: C };
      a(B), n(B);
      return;
    }
    const $ = Array.isArray(e[A]);
    let O = $ ? [...e[A], C] : { ...e[A], [_]: C };
    D !== null && ($ ? (O = [...e[A]], O[D] = { ...O[D], [_]: C }) : typeof C == "string" ? O[D] = C : O = { ...e[A], [D]: { ...e[A][D], [_]: C } });
    let I = { ...e, [A]: O };
    a(I), n(I);
  };
  return /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "Forest Plot Settings", (!e.forestPlot.estimateField || !e.forestPlot.upper || !e.forestPlot.lower) && /* @__PURE__ */ l.createElement(Rl, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement(Po, { type: "text", value: ((c = e.forestPlot) == null ? void 0 : c.title) || "", updateField: u, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: e.forestPlot.leftWidthOffset || 0,
      onChange: (A) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            leftWidthOffset: A.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left Mobile(%)"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: e.forestPlot.leftWidthOffsetMobile || 0,
      onChange: (A) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            leftWidthOffsetMobile: A.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right (%)"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: e.forestPlot.rightWidthOffset || 0,
      onChange: (A) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            rightWidthOffset: A.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right Mobile(%)"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: e.forestPlot.rightWidthOffsetMobile || 0,
      onChange: (A) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            rightWidthOffsetMobile: A.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement(
    Oo,
    {
      value: e.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: "Select",
      required: !0,
      onChange: (A) => {
        A.target.value !== "" && A.target.value !== "Select" && n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            estimateField: A.target.value
          }
        }), A.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ l.createElement(
    Oo,
    {
      value: e.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: "Select",
      onChange: (A) => {
        A.target.value !== "" && A.target.value !== "Select" && n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            lower: A.target.value
          }
        }), A.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ l.createElement(
    Oo,
    {
      value: e.forestPlot.upper,
      label: "Upper CI Column",
      initial: "Select",
      required: !0,
      onChange: (A) => {
        A.target.value !== "" && A.target.value !== "Select" && n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            upper: A.target.value
          }
        }), A.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ l.createElement(
    Oo,
    {
      value: e.forestPlot.shape,
      label: "Point Estimate Shape",
      initial: "Select",
      onChange: (A) => {
        A.target.value !== "" && A.target.value !== "Select" && n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            shape: A.target.value
          }
        }), A.target.value = "";
      },
      options: ["text", "circle", "square", "diamond"]
    }
  ), /* @__PURE__ */ l.createElement(
    Oo,
    {
      value: e.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (A) => {
        A.target.value !== "" && A.target.value !== "Select" && n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            radius: {
              ...e.forestPlot.radius,
              scalingColumn: A.target.value
            }
          }
        }), A.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ l.createElement(
    "input",
    {
      min: 1,
      max: 5,
      value: e.forestPlot.radius.min,
      onChange: (A) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            radius: {
              ...e.forestPlot.radius,
              min: Number(A.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Radius Maximum Size"), /* @__PURE__ */ l.createElement(
    "input",
    {
      min: 5,
      max: 10,
      value: e.forestPlot.radius.max,
      onChange: (A) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            radius: {
              ...e.forestPlot.radius,
              max: Number(A.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  )), /* @__PURE__ */ l.createElement(Po, { type: "number", min: 20, max: 45, value: e.forestPlot.rowHeight ? e.forestPlot.rowHeight : 10, updateField: u, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ l.createElement("br", null), /* @__PURE__ */ l.createElement("hr", null), /* @__PURE__ */ l.createElement("br", null), /* @__PURE__ */ l.createElement(Po, { type: "number", value: ((f = (d = e.forestPlot) == null ? void 0 : d.regression) == null ? void 0 : f.estimateField) || "", updateField: u, section: "forestPlot", subsection: "regression", fieldName: "estimateField", label: "Line of No Effect" }), /* @__PURE__ */ l.createElement(Po, { type: "text", value: ((m = (h = e.forestPlot) == null ? void 0 : h.regression) == null ? void 0 : m.baseLineColor) || "black", updateField: u, section: "forestPlot", subsection: "regression", fieldName: "baseLineColor", label: "Base Color" }), /* @__PURE__ */ l.createElement(Dd, { value: ((v = (g = e.forestPlot) == null ? void 0 : g.regression) == null ? void 0 : v.showBaseLine) || !1, section: "forestPlot", subsection: "regression", fieldName: "showBaseLine", label: "Show base line", updateField: u }), /* @__PURE__ */ l.createElement(Dd, { value: ((E = (y = e.forestPlot) == null ? void 0 : y.regression) == null ? void 0 : E.showDiamond) || !1, section: "forestPlot", subsection: "regression", fieldName: "showDiamond", label: "Show Diamond", updateField: u }), /* @__PURE__ */ l.createElement(Dd, { value: ((b = e.forestPlot) == null ? void 0 : b.hideDateCategoryCol) || !1, section: "forestPlot", fieldName: "hideDateCategoryCol", label: "Hide Date Category Column", updateField: u }), /* @__PURE__ */ l.createElement(Po, { type: "text", value: ((w = (x = e.forestPlot) == null ? void 0 : x.regression) == null ? void 0 : w.description) || "", updateField: u, section: "forestPlot", subsection: "regression", fieldName: "description", label: "Description" })));
}, Ya = l.createContext(), H2 = (e) => {
  const { updateConfig: t, config: n } = F.useContext(pt), { getColumns: r, selectComponent: a } = e, o = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], u = (c, d, f) => {
    let h = [...n.series];
    h[c][f] = d, t({ ...n, series: h });
  };
  return /* @__PURE__ */ l.createElement(Ya.Provider, { value: { updateSeries: u, supportedRightAxisTypes: o, getColumns: r, selectComponent: a } }, e.children);
}, U2 = (e) => {
  const { config: t, updateConfig: n } = F.useContext(pt), { series: r, index: a } = e;
  if (!(() => {
    let d = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((h) => h.includes(r.type)) && (d = !0), d;
  })())
    return;
  const u = (d, f) => {
    let h = [...t.series];
    h[d].lineType = f, n({ ...t, series: h });
  };
  let c = [];
  return Object.keys(ic).map((d) => c.push(ic[d])), /* @__PURE__ */ l.createElement(
    Ti,
    {
      initial: "Select an option",
      value: r.lineType ? r.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (d) => {
        u(a, d.target.value);
      },
      options: c
    }
  );
}, q2 = (e) => {
  const { config: t } = F.useContext(pt), { updateSeries: n } = F.useContext(Ya), { index: r, series: a } = e, o = () => {
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
    return /* @__PURE__ */ l.createElement(
      Ti,
      {
        initial: "Select an option",
        value: a.type,
        label: "Series Type",
        onChange: (u) => {
          n(r, u.target.value, "type");
        },
        options: o()
      }
    );
}, K2 = (e) => {
  const { config: t, updateConfig: n, rawData: r } = F.useContext(pt), { updateSeries: a, getColumns: o } = F.useContext(Ya), { index: u, series: c } = e;
  if (c.type === "Forecasting")
    return /* @__PURE__ */ l.createElement(
      Ti,
      {
        initial: "Select an option",
        value: c.stageColumn,
        label: "Add Forecasting Stages",
        onChange: (d) => {
          let f = [], h = new Set(r == null ? void 0 : r.map((g) => g[d.target.value]));
          h = Array.from(h), h = h.filter((g) => g !== void 0), h.forEach((g) => f.push({ key: g }));
          const m = [...t.series];
          m[u] = { ...m[u], stages: f, stageColumn: d.target.value }, n({
            ...t,
            series: m
          });
        },
        options: o(!1)
      }
    );
}, j2 = (e) => {
  const { config: t, rawData: n } = F.useContext(pt), { updateSeries: r } = F.useContext(Ya), { index: a, series: o } = e;
  if (o.type !== "Forecasting" || !n || !o.stageColumn)
    return;
  let u = new Set(n.map((c) => c[o.stageColumn]));
  return u = Array.from(u), u = u.filter((c) => c !== void 0), /* @__PURE__ */ l.createElement(
    Ti,
    {
      initial: "Select an option",
      value: o.stageItem,
      label: "Forecasting Item Column",
      onChange: (c) => {
        r(a, c.target.value, "stageItem");
      },
      options: u
    }
  );
}, G2 = (e) => {
  const { config: t } = F.useContext(pt), { updateSeries: n, supportedRightAxisTypes: r } = F.useContext(Ya), { index: a, series: o } = e;
  if (!(t.visualizationType !== "Combo" || !o) && r.includes(o.type))
    return /* @__PURE__ */ l.createElement(
      Ti,
      {
        initial: "Select an option",
        value: o.axis ? o.axis : "Left",
        label: "Series Axis",
        onChange: (u) => {
          n(a, u.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, Y2 = (e) => {
  var o;
  const { config: t, updateConfig: n } = F.useContext(pt), { index: r, series: a } = e;
  if (a.type === "Forecasting" && a)
    return (o = a == null ? void 0 : a.stages) == null ? void 0 : o.map((u, c) => {
      var d, f, h, m;
      return /* @__PURE__ */ l.createElement(
        Ti,
        {
          key: `${u}--${c}`,
          initial: "Select an option",
          value: (f = (d = t.series) == null ? void 0 : d[r].stages) != null && f[c].color ? (m = (h = t.series) == null ? void 0 : h[r].stages) == null ? void 0 : m[c].color : "Select",
          label: `${u.key} Series Color`,
          onChange: (g) => {
            const v = [...t.series], y = v[r].stages;
            y[c].color = g.target.value, v[r] = { ...v[r], stages: y }, n({
              ...t,
              series: v
            });
          },
          options: Object.keys(oc)
        }
      );
    });
}, X2 = (e) => {
  var u;
  const { config: t, updateConfig: n } = F.useContext(pt), { series: r, index: a } = e, { getColumns: o } = F.useContext(Ya);
  if (r.type === "Forecasting")
    return /* @__PURE__ */ l.createElement("div", { className: "edit-block" }, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ l.createElement("fieldset", null, /* @__PURE__ */ l.createElement(Ji, { allowZeroExpanded: !0 }, (u = r == null ? void 0 : r.confidenceIntervals) == null ? void 0 : u.map((c, d) => {
      const f = c.showInTooltip ? c.showInTooltip : !1, h = (m, g, v) => {
        m.preventDefault();
        let y = [...t.series];
        y[g].confidenceIntervals[v].showInTooltip = !f, n({
          ...t,
          series: y
        });
      };
      return /* @__PURE__ */ l.createElement(ln, { className: "series-item series-item--chart", key: `${d}` }, /* @__PURE__ */ l.createElement(cn, { className: "series-item__title" }, /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(un, { className: "accordion__button accordion__button" }, "Group ", d + 1, /* @__PURE__ */ l.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (m) => {
            m.preventDefault();
            const g = [...t.series[a].confidenceIntervals];
            g.splice(d, 1);
            const v = [...t.series];
            v[a] = { ...v[a], confidenceIntervals: [...g] }, n({
              ...t,
              series: v
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement("div", { className: "input-group" }, /* @__PURE__ */ l.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ l.createElement("div", { className: "cove-input__checkbox--small", onClick: (m) => h(m, a, d) }, /* @__PURE__ */ l.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, f && /* @__PURE__ */ l.createElement(ky, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ l.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: f || !1, readOnly: !0 }))), /* @__PURE__ */ l.createElement(
        Ti,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[d].low ? t.series[a].confidenceIntervals[d].low : "Select",
          label: "Low Confidence Interval",
          onChange: (m) => {
            const g = [...t.series[a].confidenceIntervals];
            g[d].low = m.target.value;
            const v = [...t.series];
            v[a] = { ...v[a], confidenceIntervals: g }, n({
              ...t,
              series: v
            });
          },
          options: o()
        }
      ), /* @__PURE__ */ l.createElement(
        Ti,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[d].high ? t.series[a].confidenceIntervals[d].high : "Select",
          label: "High Confidence Interval",
          onChange: (m) => {
            const g = [...t.series[a].confidenceIntervals];
            g[d].high = m.target.value;
            const v = [...t.series];
            v[a] = { ...v[a], confidenceIntervals: g }, n({
              ...t,
              series: v
            });
          },
          options: o()
        }
      )));
    })), /* @__PURE__ */ l.createElement(
      "button",
      {
        className: "btn full-width",
        onClick: (c) => {
          c.preventDefault();
          let d = null;
          t.series[a].confidenceIntervals ? d = [...t.series[a].confidenceIntervals] : d = [];
          const f = [...t.series];
          f[a] = { ...f[a], confidenceIntervals: [...d, { high: "", low: "" }] }, n({
            ...t,
            series: f
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, Z2 = (e) => {
  const { series: t, index: n } = e, { config: r, updateConfig: a } = F.useContext(pt), o = ["Bar", "Line", "Area Chart"];
  if (r.visualizationType === "Combo" || !o.includes(t.type))
    return;
  let u = (c, d) => {
    let f = [...r.series], h = { ...r.runtime.seriesLabels };
    f[c].name = d, h[f[c].dataKey] = f[c].name ? f[c].name : f[c].dataKey;
    let m = {
      ...r,
      series: f,
      runtime: {
        ...r.runtime,
        seriesLabels: h
      }
    };
    a(m);
  };
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${n}`,
      value: t.name ? t.name : "",
      onChange: (c) => {
        u(n, c.target.value);
      }
    }
  ));
}, Q2 = (e) => {
  const { series: t, index: n } = e, { config: r, updateConfig: a } = F.useContext(pt), o = (u) => {
    let c = [...r.series];
    c[u].tooltip && c[u].tooltip, c[u].tooltip = !c[u].tooltip, a({
      ...r,
      series: c
    });
  };
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "input-group" }, /* @__PURE__ */ l.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ l.createElement("div", { className: "cove-input__checkbox--small", onClick: (u) => o(n) }, /* @__PURE__ */ l.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ l.createElement(ky, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ l.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, J2 = (e) => {
  const { config: t, updateConfig: n } = F.useContext(pt), { series: r, index: a } = e, o = (c) => {
    let d = [...t.series], f = -1;
    for (let h = 0; h < d.length; h++)
      if (d[h].dataKey === c) {
        f = h;
        break;
      }
    if (f !== -1) {
      d.splice(f, 1);
      let h = { ...t, series: d };
      d.length === 0 && delete h.series, n(h);
    }
    t.visualizationType === "Paired Bar" && n({
      ...t,
      series: []
    });
  }, u = (c, d, f) => {
    c.preventDefault(), o(d.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ l.createElement("button", { className: "series-list__remove", onClick: (c) => u(c, r) }, "Remove");
}, U0 = (e) => {
  const { config: t } = F.useContext(pt), { series: n, getItemStyle: r, sortableItemStyles: a, chartsWithOptions: o, index: u } = e;
  return /* @__PURE__ */ l.createElement(I0, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: u }, (c, d) => /* @__PURE__ */ l.createElement("div", { key: u, className: d.isDragging ? "currently-dragging" : "", style: r(d.isDragging, c.draggableProps.style, a), ref: c.innerRef, ...c.draggableProps, ...c.dragHandleProps }, /* @__PURE__ */ l.createElement(Ji, { allowZeroExpanded: !0 }, /* @__PURE__ */ l.createElement(ln, { className: "series-item series-item--chart" }, /* @__PURE__ */ l.createElement(cn, { className: "series-item__title" }, /* @__PURE__ */ l.createElement(un, { className: o.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ l.createElement(lt, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ l.createElement(Hr.Button.Remove, { series: n, index: u }))), o.includes(t.visualizationType) && /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement(Hr.Input.Name, { series: n, index: u }), /* @__PURE__ */ l.createElement(Hr.Dropdown.SeriesType, { series: n, index: u }), /* @__PURE__ */ l.createElement(Hr.Dropdown.AxisPosition, { series: n, index: u }), /* @__PURE__ */ l.createElement(Hr.Dropdown.LineType, { series: n, index: u }), /* @__PURE__ */ l.createElement(Hr.Dropdown.ForecastingColor, { series: n, index: u }), /* @__PURE__ */ l.createElement(Hr.Dropdown.ConfidenceInterval, { series: n, index: u }), /* @__PURE__ */ l.createElement(Hr.Checkbox.DisplayInTooltip, { series: n, index: u }))))));
}, ez = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: r, chartsWithOptions: a } = e;
  return t.map((o, u) => /* @__PURE__ */ l.createElement(U0, { getItemStyle: n, sortableItemStyles: r, chartsWithOptions: a, series: o, index: u, key: `series-list-${u}` }));
}, Hr = {
  Wrapper: H2,
  Dropdown: {
    SeriesType: q2,
    AxisPosition: G2,
    ConfidenceInterval: X2,
    LineType: U2,
    ForecastingStage: K2,
    ForecastingColumn: j2,
    ForecastingColor: Y2
  },
  Input: {
    Name: Z2
  },
  Checkbox: {
    DisplayInTooltip: Q2
  },
  Button: {
    Remove: J2
  },
  Item: U0,
  List: ez
}, tz = (e, t) => {
  let n = [], r = [], a = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const o = e.twoColor.isPaletteReversed;
    n = Object.keys(af).filter((u) => o ? u.endsWith("reverse") : !u.endsWith("reverse"));
  } else {
    const o = [], u = [];
    for (const c in Ei) {
      const d = c.startsWith("sequential"), f = c.startsWith("qualitative"), h = c.endsWith("reverse");
      d && (!e.isPaletteReversed && !h || e.isPaletteReversed && h) && o.push(c), f && (!e.isPaletteReversed && !h || e.isPaletteReversed && h) && u.push(c);
    }
    r = o, a = u;
  }
  return F.useEffect(() => {
    let o = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: o } });
  }, [e.twoColor.isPaletteReversed]), F.useEffect(() => {
    let o = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (o = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (o = e.palette.slice(0, -7)), t({ ...e, palette: o });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: r, nonSequential: a };
}, nz = () => {
  const { config: e } = F.useContext(pt), { visualizationType: t, series: n, orientation: r } = e;
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
    visHasBarBorders: () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : n == null ? void 0 : n.some((Se) => Se.type === "Bar" || Se.type === "Paired Bar" || Se.type === "Deviation Bar"),
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
    visHasNumbersOnBars: () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"),
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : r === "horizontal" || t === "Paired Bar",
    visSupportsBarThickness: () => !["Forest Plot"].includes(t),
    visSupportsChartHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxisLabel: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisLine: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisTicks: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryNumTicks: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryTickRotation: () => !["Forest Plot", "Spark Line"].includes(t),
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
      const oe = ["Forest Plot"];
      return !(r === "horizontal" || oe.includes(t));
    },
    visSupportsValueAxisLabels: () => !0,
    visSupportsValueAxisLine: () => !0,
    visSupportsValueAxisTicks: () => !0
  };
}, q0 = (e) => {
  const [t, n] = F.useState(!1), { config: r, setConfig: a, filteredData: o, setFilteredData: u, excludedData: c, filterData: d } = e, { type: f, filterBehavior: h, filters: m } = r, g = ["dropdown", "pill", "tab", "tab bar"], v = [
    {
      label: "Ascending Alphanumeric",
      value: "asc"
    },
    {
      label: "Descending Alphanumeric",
      value: "desc"
    },
    {
      label: "Custom",
      value: "cust"
    }
  ], y = (_, C, $, O) => {
    const I = [...O.values], [B] = I.splice(_, 1);
    I.splice(C, 0, B);
    const L = r.type === "chart" ? [...r.filters] : [...o], N = { ...L[$] };
    N.values = I, N.orderedValues = I, N.active = I[0], N.order = "cust", L[$] = N, r.type === "map" && u(L), a({ ...r, filters: L });
  }, E = (_) => {
  }, b = (_, C) => {
    let $ = r.type === "map" ? [...o] : [...r.filters];
    $[_].active = C, a({ ...r }), r.filterBehavior === "Apply Button" && n(!0), r.filterBehavior !== "Apply Button" && a({
      ...r,
      filters: $
    }), r.type === "map" && r.filterBehavior === "Filter Change" && u($), r.type === "chart" && r.filterBehavior === "Filter Change" && u(d($, c));
  }, x = (_) => {
    a({ ...r, filters: _ }), f === "map" && u(_, c), f === "chart" && u(d(_, c)), n(!1);
  }, w = (_) => {
    let C = [...r.filters];
    _.preventDefault(), C.map(($) => ($ = D($), $.active = $.values[0], $)), f === "map" ? u(C, c) : u(d(C, c)), a({ ...r, filters: C });
  }, A = {
    buttonText: "Apply Filters",
    resetText: "Reset All",
    introText: "Make a selection from the filters to change the visualization information.",
    applyText: "Select the apply button to update the visualization information."
  }, D = (_) => {
    const { order: C } = _, $ = (I, B) => I.toString().localeCompare(B.toString(), "en", { numeric: !0 }), O = (I, B) => B.toString().localeCompare(I.toString(), "en", { numeric: !0 });
    return (!C || C === "") && (_.order = "asc"), C === "desc" && (_.values = _.values.sort(O)), C === "asc" && (_.values = _.values.sort($)), _;
  };
  return {
    handleApplyButton: x,
    changeFilterActive: b,
    announceChange: E,
    showApplyButton: t,
    handleReset: w,
    filterConstants: A,
    filterStyleOptions: g,
    filterOrderOptions: v,
    handleFilterOrder: y,
    handleSorting: D
  };
}, K0 = (e) => {
  var $;
  const { config: t, filteredData: n, dimensions: r } = e, { filters: a, type: o, general: u, theme: c, filterBehavior: d } = t, [f, h] = F.useState(!1), [m, g] = F.useState(""), v = F.useId(), {
    handleApplyButton: y,
    changeFilterActive: E,
    announceChange: b,
    showApplyButton: x,
    handleReset: w,
    filterConstants: A,
    handleSorting: D
  } = q0(e);
  F.useEffect(() => {
    r && (r[0] < 768 && (a == null ? void 0 : a.length) > 0 ? h(!0) : h(!1));
  }, [r]), F.useEffect(() => {
    if (m) {
      let O = document.getElementById(m.id);
      O && O.focus();
    }
  }, [E, m]);
  const _ = (O) => O.children, C = ["filters-section", o === "map" ? u.headerColor : c];
  if (_.Section = (O) => /* @__PURE__ */ l.createElement("section", { className: C.join(" ") }, /* @__PURE__ */ l.createElement("p", { className: "filters-section__intro-text" }, A.introText, " ", t.filterBehavior === "Apply Button" && A.applyText), /* @__PURE__ */ l.createElement("div", { className: "filters-section__wrapper" }, O.children)), _.ApplyBehavior = (O) => {
    if (d !== "Apply Button")
      return;
    const I = [u != null && u.headerColor ? u.headerColor : c, "apply"];
    return /* @__PURE__ */ l.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ l.createElement(cT, { onClick: () => y(a), disabled: !x, className: I.join(" ") }, A.buttonText), /* @__PURE__ */ l.createElement("a", { href: "#!", role: "button", onClick: w }, A.resetText));
  }, _.TabBar = (O) => {
    const { filter: I, index: B } = O;
    return /* @__PURE__ */ l.createElement("section", { className: "single-filters__tab-bar" }, I.values.map((L, N) => {
      const z = ["button__tab-bar", I.active === L ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ l.createElement(
        "button",
        {
          id: `${L}-${B}-${N}-${v}`,
          className: z.join(" "),
          key: L,
          onClick: (W) => {
            E(B, L), g(W.target);
          },
          onKeyDown: (W) => {
            W.keyCode === 13 && (E(B, L), g(W.target));
          }
        },
        L
      );
    }));
  }, _.Pills = (O) => O.pills, _.Tabs = (O) => O.tabs, _.Dropdown = (O) => {
    const { index: I, label: B, active: L, filters: N } = O;
    return /* @__PURE__ */ l.createElement(
      "select",
      {
        id: `filter-${I}`,
        name: B,
        "aria-label": B,
        className: "filter-select",
        "data-index": "0",
        value: L,
        onChange: (z) => {
          E(I, z.target.value), b(`Filter ${B} value has been changed to ${z.target.value}, please reference the data table to see updated values.`);
        }
      },
      N
    );
  }, _.Style = () => {
    if (a || n) {
      let O = o === "map" ? n : a;
      return delete O.fromHash, O.map((I, B) => {
        if (I.showDropdown === !1)
          return;
        const L = [], N = [], z = [], { active: W, label: M, filterStyle: H } = I;
        D(I), I.values.forEach((re, ie) => {
          const te = ["pill", W === re ? "pill--active" : null, c && c], ce = ["tab", W === re && "tab--active", c && c];
          N.push(
            /* @__PURE__ */ l.createElement("div", { className: "pill__wrapper", key: `pill-${ie}` }, /* @__PURE__ */ l.createElement(
              "button",
              {
                id: `${re}-${B}-${ie}-${v}`,
                className: te.join(" "),
                onKeyDown: (oe) => {
                  oe.keyCode === 13 && (E(B, re), g(oe.target));
                },
                onClick: (oe) => {
                  E(B, re), g(oe.target);
                },
                name: M
              },
              re
            ))
          ), L.push(
            /* @__PURE__ */ l.createElement("option", { key: ie, value: re }, I.labels && I.labels[re] ? I.labels[re] : re)
          ), z.push(
            /* @__PURE__ */ l.createElement(
              "button",
              {
                id: `${re}-${B}-${ie}-${v}`,
                className: ce.join(" "),
                onClick: (oe) => {
                  E(B, re), g(oe.target);
                },
                onKeyDown: (oe) => {
                  oe.keyCode === 13 && (E(B, re), g(oe.target));
                }
              },
              re
            )
          );
        });
        const K = ["single-filters", f ? "single-filters--dropdown" : `single-filters--${H}`];
        return /* @__PURE__ */ l.createElement("div", { className: K.join(" "), key: B }, /* @__PURE__ */ l.createElement(l.Fragment, null, M && /* @__PURE__ */ l.createElement("label", { htmlFor: `filter-${B}` }, M), H === "tab" && !f && /* @__PURE__ */ l.createElement(_.Tabs, { tabs: z }), H === "pill" && !f && /* @__PURE__ */ l.createElement(_.Pills, { pills: N }), H === "tab bar" && !f && /* @__PURE__ */ l.createElement(_.TabBar, { filter: I, index: B }), (H === "dropdown" || f) && /* @__PURE__ */ l.createElement(_.Dropdown, { filter: I, index: B, label: M, active: W, filters: L })));
      });
    }
  }, (($ = t == null ? void 0 : t.filters) == null ? void 0 : $.length) !== 0)
    return /* @__PURE__ */ l.createElement(_, null, /* @__PURE__ */ l.createElement(_.Section, null, /* @__PURE__ */ l.createElement(_.Style, null), /* @__PURE__ */ l.createElement(_.ApplyBehavior, null)));
};
K0.propTypes = {
  // runtimeFilters in place
  filteredData: G.array,
  // function for updating the runtime filters
  setFilteredData: G.func,
  // the full apps config
  config: G.object,
  // updating function for setting fitlerBehavior
  setConfig: G.func,
  // exclusions
  excludedData: G.array,
  // function for filtering the data
  filterData: G.func,
  dimensions: G.array
};
const Me = F.memo(({ label: e, tooltip: t, section: n = null, subsection: r = null, fieldName: a, updateField: o, value: u, type: c = "input", i: d = null, min: f = null, ...h }) => {
  const [m, g] = F.useState(u), [v] = H0(m, 500);
  F.useEffect(() => {
    typeof v == "string" && u !== v && o(n, r, a, v, d);
  }, [v]);
  let y = r ? `${n}-${r}-${a}` : `${n}-${r}-${a}`;
  const E = (x) => {
    c !== "number" || f === null || !x.target.value || f <= parseFloat(x.target.value) ? g(x.target.value) : g(f.toString());
  };
  let b = /* @__PURE__ */ l.createElement("input", { type: "text", name: y, onChange: E, ...h, value: m });
  return c === "textarea" && (b = /* @__PURE__ */ l.createElement("textarea", { name: y, onChange: E, ...h, value: m })), c === "number" && (b = /* @__PURE__ */ l.createElement("input", { type: "number", name: y, onChange: E, ...h, value: m })), c === "date" && (b = /* @__PURE__ */ l.createElement("input", { type: "date", name: y, onChange: E, ...h, value: m })), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, e, t), b);
}), qe = F.memo(({ label: e, value: t, fieldName: n, section: r = null, subsection: a = null, tooltip: o, updateField: u, ...c }) => /* @__PURE__ */ l.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ l.createElement(
  "input",
  {
    type: "checkbox",
    name: n,
    checked: t,
    onChange: (d) => {
      u(r, a, n, !t);
    },
    ...c
  }
), /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, e, o))), Pt = F.memo(({ label: e, value: t, options: n, fieldName: r, section: a = null, subsection: o = null, required: u = !1, tooltip: c, updateField: d, initial: f, ...h }) => {
  let m = n.map((g, v) => /* @__PURE__ */ l.createElement("option", { value: g, key: v }, g));
  return f && m.unshift(
    /* @__PURE__ */ l.createElement("option", { value: "", key: "initial" }, f)
  ), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, e, c), /* @__PURE__ */ l.createElement(
    "select",
    {
      className: u && !t ? "warning" : "",
      name: r,
      value: t,
      onChange: (g) => {
        d(a, o, r, g.target.value);
      },
      ...h
    },
    m
  ));
}), rz = F.memo(({ config: e, updateConfig: t }) => {
  let n = (u, c, d) => {
    let f = [];
    e.regions && (f = [...e.regions]), f[d][u] = c, t({ ...e, regions: f });
  }, r = (u, c, d, f, h) => n(d, f, h), a = (u) => {
    let c = [];
    e.regions && (c = [...e.regions]), c.splice(u, 1), t({ ...e, regions: c });
  }, o = () => {
    let u = [];
    e.regions && (u = [...e.regions]), u.push({}), t({ ...e, regions: u });
  };
  return /* @__PURE__ */ l.createElement(l.Fragment, null, e.regions && e.regions.map(({ label: u, color: c, from: d, to: f, background: h }, m) => /* @__PURE__ */ l.createElement("div", { className: "edit-block", key: `region-${m}` }, /* @__PURE__ */ l.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (g) => {
        g.preventDefault(), a(m);
      }
    },
    "Remove"
  ), /* @__PURE__ */ l.createElement(Me, { value: u, label: "Region Label", fieldName: "label", i: m, updateField: r }), /* @__PURE__ */ l.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ l.createElement(Me, { value: c, label: "Text Color", fieldName: "color", updateField: (g, v, y, E) => n(y, E, m) }), /* @__PURE__ */ l.createElement(Me, { value: h, label: "Background", fieldName: "background", updateField: (g, v, y, E) => n(y, E, m) })), /* @__PURE__ */ l.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ l.createElement(Me, { value: d, label: "From Value", fieldName: "from", updateField: (g, v, y, E) => n(y, E, m) }), /* @__PURE__ */ l.createElement(Me, { value: f, label: "To Value", fieldName: "to", updateField: (g, v, y, E) => n(y, E, m) })))), !e.regions && /* @__PURE__ */ l.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ l.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (u) => {
        u.preventDefault(), o();
      }
    },
    "Add Region"
  ));
}), iz = () => {
  var Xt, On, Rr, Gr, ki, Li, an, Ar, xs, Xa, Za, Qa, da, bs, Ja, Ri, eo, Es, to, no, fa, Ss;
  const { config: e, updateConfig: t, transformedData: n, loading: r, colorPalettes: a, twoColorPalette: o, unfilteredData: u, excludedData: c, isDashboard: d, setParentConfig: f, missingRequiredSections: h, isDebug: m, setFilteredData: g, lineOptions: v, rawData: y } = F.useContext(pt), { minValue: E, maxValue: b, existPositiveValue: x, isAllLine: w } = Cc(e, u), { twoColorPalettes: A, sequential: D, nonSequential: _ } = tz(e, t), {
    enabledChartTypes: C,
    headerColors: $,
    visSupportsTooltipLines: O,
    visSupportsNonSequentialPallete: I,
    visSupportsSequentialPallete: B,
    visSupportsReverseColorPalette: L,
    visHasLabelOnData: N,
    visHasNumbersOnBars: z,
    visHasAnchors: W,
    visHasBarBorders: M,
    visHasDataCutoff: H,
    visCanAnimate: K,
    visHasLegend: re,
    visSupportsDateCategoryAxisLabel: ie,
    visSupportsDateCategoryAxisLine: te,
    visSupportsDateCategoryAxisTicks: ce,
    visSupportsDateCategoryTickRotation: oe,
    visSupportsDateCategoryNumTicks: Se,
    visSupportsRegions: Te,
    visSupportsFilters: ke,
    visSupportsValueAxisGridLines: Ie,
    visSupportsValueAxisLine: We,
    visSupportsValueAxisTicks: De,
    visSupportsValueAxisLabels: le,
    visSupportsBarSpace: ee,
    visSupportsBarThickness: me,
    visSupportsFootnotes: V,
    visSupportsSuperTitle: Oe,
    visSupportsDataCutoff: ae,
    visSupportsChartHeight: Ne,
    visSupportsLeftValueAxis: Ee,
    visSupportsTooltipOpacity: Pe,
    visSupportsRankByValue: nt,
    visSupportsResponsiveTicks: At,
    visSupportsDateCategoryHeight: je
  } = nz(), { handleFilterOrder: Le, filterOrderOptions: Ae, filterStyleOptions: xe } = q0({ config: e, setConfig: t, filteredData: n, setFilteredData: g });
  F.useEffect(() => {
    let U = [];
    e.series && (U = e.series.map((j) => ({
      ...j,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: U
    });
  }, [e.visualizationType]), F.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []);
  const { hasRightAxis: ht } = tp({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), we = (U, j) => ({
    ...j
  }), Ge = {
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
  }, Xe = (U) => {
    U.orientation === "horizontal" && (U.labels = !1), U.table.show === void 0 && (U.table.show = !d), U.visualizationType === "Combo" && (U.orientation = "vertical");
  }, Y = (U, j, Q, ue) => {
    if (m && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", U, j, Q, ue), U === "boxplot" && j === "legend") {
      t({
        ...e,
        [U]: {
          ...e[U],
          [j]: {
            ...e.boxplot[j],
            [Q]: ue
          }
        }
      });
      return;
    }
    if (U === "boxplot" && j === "labels") {
      t({
        ...e,
        [U]: {
          ...e[U],
          [j]: {
            ...e.boxplot[j],
            [Q]: ue
          }
        }
      });
      return;
    }
    if (U === "columns" && j !== "" && Q !== "") {
      t({
        ...e,
        [U]: {
          ...e[U],
          [j]: {
            ...e[U][j],
            [Q]: ue
          }
        }
      });
      return;
    }
    if (U === null && j === null) {
      let si = { ...e, [Q]: ue };
      Xe(si), t(si);
      return;
    }
    const _t = Array.isArray(e[U]);
    let An = _t ? [...e[U], ue] : { ...e[U], [Q]: ue };
    j !== null && (_t ? (An = [...e[U]], An[j] = { ...An[j], [Q]: ue }) : typeof ue == "string" ? An[j] = ue : An = { ...e[U], [j]: { ...e[U][j], [Q]: ue } });
    let sr = { ...e, [U]: An };
    Xe(sr), t(sr);
  }, [tt, zt] = F.useState(!0);
  if (r)
    return null;
  F.useEffect(() => {
    var U;
    (U = e.general) != null && U.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const Kt = (U) => {
    t({
      ...e,
      lollipopShape: U
    });
  }, Wt = (U) => {
    let j = [...e.filters];
    j.splice(U, 1), t({ ...e, filters: j });
  }, Qt = (U, j, Q) => {
    let ue = [...e.filters];
    ue[j][U] = Q, t({ ...e, filters: ue });
  }, jt = () => {
    let U = e.filters ? [...e.filters] : [];
    U.push({ values: [] }), t({ ...e, filters: U });
  }, $t = (U) => {
    let j = e.series ? [...e.series] : [], Q = Array.from(new Set(n.map((_t) => _t[U]))), ue = [];
    Q.forEach((_t) => {
      ue.push({ key: _t });
    }), e.visualizationType === "Forecasting" ? j.push({ dataKey: U, type: e.visualizationType, stages: ue, stageColumn: U, axis: "Left", tooltip: !0 }) : j.push({ dataKey: U, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: j });
  }, fn = (U) => {
    const j = e.series[0].dataKey, Q = n.sort((_t, An) => _t[j] - An[j]), ue = U === "asc" ? Q : Q.reverse();
    t({ ...e }, ue);
  }, jn = (U) => {
    let j = [...e.exclusions.keys];
    j.push(U);
    let Q = { ...e.exclusions, keys: j };
    t({ ...e, exclusions: Q });
  }, oi = (U) => {
    let j = -1, Q = [...e.exclusions.keys];
    for (let ue = 0; ue < Q.length; ue++)
      if (Q[ue] === U) {
        j = ue;
        break;
      }
    if (j !== -1) {
      Q.splice(j, 1);
      let ue = { ...e.exclusions, keys: Q }, _t = { ...e, exclusions: ue };
      Q.length === 0 && delete _t.exclusions.keys, t(_t);
    }
  }, ua = () => {
    let U = {};
    return u.forEach((j) => {
      Object.keys(j).forEach((Q) => U[Q] = !0);
    }), Object.keys(U);
  }, Dn = (U = !0) => {
    let j = {};
    if (u.forEach((Q) => {
      Object.keys(Q).forEach((ue) => j[ue] = !0);
    }), U) {
      const { lower: Q, upper: ue } = e.confidenceKeys || {};
      Object.keys(j).forEach((_t) => {
        (e.series && e.series.filter((An) => An.dataKey === _t).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(_t) && (Q && ue || Q || ue) && _t !== Q && _t !== ue) && delete j[_t];
      });
    }
    return Object.keys(j);
  }, Kr = (U) => {
    if (!U)
      return [];
    const j = /* @__PURE__ */ new Set();
    for (let Q = 0; Q < U.length; Q++)
      for (const [ue] of Object.entries(U[Q]))
        j.add(ue);
    return Array.from(j);
  }, Sr = (U, j = !1) => {
    let Q = [];
    return c.forEach((ue) => {
      Q.push(ue[U]);
    }), j ? [...new Set(Q)] : Q;
  }, Pi = () => (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.visualizationSubType !== "stacked" && (e.orientation === "horizontal" || e.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"], jr = () => {
    zt(!tt);
  }, fe = () => /* @__PURE__ */ l.createElement("section", { className: "waiting" }, /* @__PURE__ */ l.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ l.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ l.createElement("p", null, e.runtime.editorErrorMessage))), ze = () => {
    const U = (j) => {
      j.preventDefault();
      let Q = { ...e };
      delete Q.newViz, t(Q);
    };
    return /* @__PURE__ */ l.createElement("section", { className: "waiting" }, /* @__PURE__ */ l.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ l.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ l.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ l.createElement("button", { className: "btn", style: { margin: "1em auto" }, disabled: h(), onClick: U }, "I'm Done")));
  }, rt = () => {
    let U = JSON.parse(JSON.stringify(e));
    return h() === !1 && delete U.newViz, delete U.runtime, U;
  };
  F.useEffect(() => {
    if (f) {
      const U = rt();
      f(U);
    }
  }, [e]), F.useEffect(() => {
    const U = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], j = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: j
      },
      yAxis: {
        ...e.yAxis,
        anchors: U
      }
    });
  }, [e.orientation]), F.useEffect(() => {
    e.visualizationType === "Paired Bar" && t({
      ...e,
      orientation: "horizontal"
    });
  }, []), F.useEffect(() => {
    e.orientation === "horizontal" && t({
      ...e,
      lollipopShape: e.lollipopShape
    });
  }, [e.isLollipopChart, e.lollipopShape]), F.useEffect(() => {
    e.visualizationType === "Deviation Bar" && t({ ...e, orientation: "horizontal" });
  }, [e.visualizationType]);
  const Ve = F.useCallback(() => {
    const U = [...e.exclusions.keys];
    return /* @__PURE__ */ l.createElement("ul", { className: "series-list" }, U.map((j, Q) => /* @__PURE__ */ l.createElement("li", { key: j }, /* @__PURE__ */ l.createElement("div", { className: "series-list__name", "data-title": j }, /* @__PURE__ */ l.createElement("div", { className: "series-list__name--text" }, j)), /* @__PURE__ */ l.createElement("button", { className: "series-list__remove", onClick: () => oi(j) }, "×"))));
  }, [e]), rn = (U, j) => {
    let Q = e.series, [ue] = Q.splice(U, 1);
    Q.splice(j, 0, ue), t({ ...e, series: Q });
  };
  e.isLollipopChart && ((Xt = e == null ? void 0 : e.series) == null ? void 0 : Xt.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((On = e == null ? void 0 : e.series) == null ? void 0 : On.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((Rr = e == null ? void 0 : e.series) == null ? void 0 : Rr.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((Gr = e == null ? void 0 : e.series) == null ? void 0 : Gr.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const xn = e.orientation === "horizontal" ? "xAxis" : "yAxis", [pn, k] = F.useState({ maxMsg: "", minMsg: "" }), pe = () => {
    const U = e[xn].max;
    let j = "";
    switch (!0) {
      case (U && parseFloat(U) < parseFloat(b) && x):
        j = "Max value must be more than " + b;
        break;
      case (U && parseFloat(U) < 0 && !x):
        j = "Value must be more than or equal to 0";
        break;
      default:
        j = "";
    }
    k((Q) => ({ ...Q, maxMsg: j }));
  }, be = () => {
    const U = e[xn].min;
    let j = Number(E), Q = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && U < 0):
        Q = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && U && parseFloat(U) > j):
        Q = "Value should not exceed " + E;
        break;
      case (e.visualizationType === "Combo" && w && U && parseFloat(U) > j):
        Q = "Value should not exceed " + E;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !w) && U && j > 0 && parseFloat(U) > 0):
        Q = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && parseFloat(U) >= Math.min(j, e.xAxis.target)):
        Q = "Value must be less than " + Math.min(j, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && U && j < 0 && parseFloat(U) > j):
        Q = "Value should not exceed " + E;
        break;
      default:
        Q = "";
    }
    k((ue) => ({ ...ue, minMsg: Q }));
  };
  F.useEffect(() => {
    be(), pe();
  }, [E, b, e]);
  const _e = ((ki = e == null ? void 0 : e.dataKey) == null ? void 0 : ki.includes("http://")) || ((Li = e == null ? void 0 : e.dataKey) == null ? void 0 : Li.includes("https://")), $e = () => {
    var U, j;
    if (m !== void 0 && m && !((U = e == null ? void 0 : e.xAxis) != null && U.dataKey)) {
      let Q = Dn(!1);
      if (Q.includes("Date"))
        return "Date";
      if (Q.includes("Race"))
        return "Race";
      if (Q.includes("Month"))
        return "Month";
    }
    return ((j = e == null ? void 0 : e.xAxis) == null ? void 0 : j.dataKey) || "";
  }, Be = () => {
    if (m !== void 0 && m && Dn(!1).length > 0) {
      let U = Dn(!1).filter((j) => j !== $e());
      if (U.length > 0)
        return U[0];
    }
    return "";
  };
  if (m && !e.xAxis.dataKey && (e.xAxis.dataKey = $e()), m && ((an = e == null ? void 0 : e.series) == null ? void 0 : an.length) === 0) {
    let U = Be();
    U !== "" && $t(U), m && console.log("### COVE DEBUG: Chart: Setting default datacol=", U);
  }
  const Ce = ["Area Chart", "Combo", "Line", "Bar", "Forecasting"], et = [
    /* @__PURE__ */ l.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(e.data[0]).map((j) => {
      const Q = e == null ? void 0 : e.series.some((ue) => ue.dataKey === j);
      if (j !== e.xAxis.dataKey && !Q)
        return et.push(
          /* @__PURE__ */ l.createElement("option", { value: j, key: j }, j)
        );
    });
    let U = {};
    e.data.forEach((j) => {
      Object.keys(j).forEach((Q) => {
        U[Q] = U[Q] || [];
        const ue = typeof j[Q] == "number" ? j[Q].toString() : j[Q];
        U[Q].indexOf(ue) === -1 && U[Q].push(ue);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((j) => {
      const Q = n.some((ue) => ue.dataKey === j);
      if (j !== e.xAxis.dataKey && !Q)
        return et.push(
          /* @__PURE__ */ l.createElement("option", { value: j, key: j }, j)
        );
    });
    let U = {};
    n.forEach((j) => {
      Object.keys(j).forEach((Q) => {
        U[Q] = U[Q] || [];
        const ue = typeof j[Q] == "number" ? j[Q].toString() : j[Q];
        U[Q].indexOf(ue) === -1 && U[Q].push(ue);
      });
    });
  }
  const Je = Object.keys(e.columns).filter((U) => [e.xAxis.dataKey].includes(U) !== !0), Jt = (U) => {
    const j = `additionalColumn${U}`;
    t({
      ...e,
      columns: {
        ...e.columns,
        [j]: {
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
  }, Nn = (U) => {
    const j = e.columns;
    delete j[U], t({
      ...e,
      columns: j
    });
  }, kt = async (U, j, Q) => {
    switch (j) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [U]: {
              ...e.columns[U],
              [j]: Q
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [U]: {
              ...e.columns[U],
              [j]: Q
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: or,
    highlightedSeriesValues: dt,
    handleUpdateHighlightedBar: It,
    handleAddNewHighlightedBar: Vt,
    handleRemoveHighlightedBar: en,
    handleUpdateHighlightedBarColor: bn,
    handleHighlightedBarLegendLabel: hn,
    handleUpdateHighlightedBorderWidth: En
  } = _c(e, t), Sn = (U, j) => {
    let Q = e.columns;
    Q[U].tooltips = j, t({
      ...e,
      columns: Q
    });
  };
  return /* @__PURE__ */ l.createElement(Lr, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ l.createElement(ze, null), e.newViz === void 0 && e.runtime && e.runtime.editorErrorMessage && /* @__PURE__ */ l.createElement(fe, null), /* @__PURE__ */ l.createElement("button", { className: tt ? "editor-toggle" : "editor-toggle collapsed", title: tt ? "Collapse Editor" : "Expand Editor", onClick: jr }), /* @__PURE__ */ l.createElement("section", { className: `${tt ? "editor-panel cove" : "hidden editor-panel cove"}${d ? " dashboard" : ""}` }, /* @__PURE__ */ l.createElement("div", { "aria-level": "2", role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ l.createElement("section", { className: "form-container" }, /* @__PURE__ */ l.createElement(Ji, { allowZeroExpanded: !0 }, /* @__PURE__ */ l.createElement(ln, null, " ", /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "General")), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement(Pt, { value: e.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: Y, options: C }), (e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Area Chart") && /* @__PURE__ */ l.createElement(Pt, { value: e.visualizationSubType || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: Y, options: ["regular", "stacked"] }), e.visualizationType === "Area Chart" && e.visualizationSubType === "stacked" && /* @__PURE__ */ l.createElement(Pt, { value: e.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: Y, options: Object.keys(ic) }), e.visualizationType === "Bar" && /* @__PURE__ */ l.createElement(Pt, { value: e.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: Y, options: ["vertical", "horizontal"] }), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ l.createElement(Pt, { label: "Orientation", options: ["horizontal"] }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && /* @__PURE__ */ l.createElement(Pt, { value: e.isLollipopChart ? "lollipop" : e.barStyle || "flat", fieldName: "barStyle", label: "bar style", updateField: Y, options: Pi() }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.barStyle === "rounded" && /* @__PURE__ */ l.createElement(Pt, { value: e.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: Y, options: ["top", "full"] }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.barStyle === "rounded" && /* @__PURE__ */ l.createElement(Pt, { value: e.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: Y, options: ["standard", "shallow", "finger"] }), e.visualizationType === "Bar" && e.orientation === "horizontal" && /* @__PURE__ */ l.createElement(Pt, { value: e.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: Y, options: ["Below Bar", "On Date/Category Axis"] }), z() ? /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: e.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: Y }) : N() && /* @__PURE__ */ l.createElement(qe, { value: e.labels, fieldName: "labels", label: "Display label on data", updateField: Y }), e.visualizationType === "Pie" && /* @__PURE__ */ l.createElement(Pt, { fieldName: "pieType", label: "Pie Chart Type", updateField: Y, options: ["Regular", "Donut"] }), /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ l.createElement(qe, { value: e.showTitle, fieldName: "showTitle", label: "Show Title", updateField: Y }), Oe() && /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.superTitle,
      updateField: Y,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ l.createElement(
    Me,
    {
      type: "textarea",
      value: e.introText,
      updateField: Y,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ l.createElement(
    Me,
    {
      type: "textarea",
      value: e.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), V() && /* @__PURE__ */ l.createElement(
    Me,
    {
      type: "textarea",
      value: e.footnotes,
      updateField: Y,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Footnotes")))
    }
  ), Ne() && e.orientation === "vertical" && /* @__PURE__ */ l.createElement(Me, { type: "number", value: e.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: Y }))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ l.createElement(V2, null), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ l.createElement(Rl, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ l.createElement(dn, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ l.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ l.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(
    Pt,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (U) => {
        U.target.value !== "" && U.target.value !== "Select" && $t(U.target.value), U.target.value = "";
      },
      options: Dn()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ l.createElement(Hr.Wrapper, { getColumns: Dn }, /* @__PURE__ */ l.createElement("fieldset", null, /* @__PURE__ */ l.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ l.createElement(gy, { onDragEnd: ({ source: U, destination: j }) => rn(U.index, j.index) }, /* @__PURE__ */ l.createElement(Ay, { droppableId: "filter_order" }, (U) => /* @__PURE__ */ l.createElement("ul", { ...U.droppableProps, className: "series-list", ref: U.innerRef }, /* @__PURE__ */ l.createElement(Hr.List, { series: e.series, getItemStyle: we, sortableItemStyles: Ge, chartsWithOptions: Ce }), U.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ l.createElement(Pt, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: Y, initial: "Select", options: Dn() }), /* @__PURE__ */ l.createElement(Pt, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: Y, initial: "Select", options: Dn() })), nt() && e.series && e.series.length === 1 && /* @__PURE__ */ l.createElement(Pt, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (U) => fn(U.target.value), options: ["asc", "desc"] }))), e.visualizationType === "Box Plot" && /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "Measures")), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ l.createElement(
    Me,
    {
      type: "text",
      value: e.boxplot.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ l.createElement(
    Me,
    {
      type: "text",
      value: e.boxplot.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ l.createElement(
    Me,
    {
      type: "text",
      value: e.boxplot.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ l.createElement(
    Me,
    {
      type: "text",
      value: e.boxplot.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ l.createElement(
    Me,
    {
      type: "text",
      value: e.boxplot.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ l.createElement("br", null), /* @__PURE__ */ l.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ l.createElement(Me, { type: "text", value: e.boxplot.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { type: "text", value: e.boxplot.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { type: "text", value: e.boxplot.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { type: "text", value: e.boxplot.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { type: "text", value: e.boxplot.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: Y }))), Ee() && /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ l.createElement(Rl, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ l.createElement(dn, null, e.visualizationType === "Pie" && /* @__PURE__ */ l.createElement(
    Pt,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: Y,
      options: Dn(!1),
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(Me, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label", updateField: Y }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && e.visualizationType !== "Box Plot" && /* @__PURE__ */ l.createElement(qe, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Y }), e.visualizationType === "Paired Bar" && /* @__PURE__ */ l.createElement(Me, { value: e.yAxis.tickRotation || 0, type: "number", min: "0", section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Y }), /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ l.createElement(qe, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Y }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ l.createElement(Me, { value: e.yAxis.tickRotation, type: "number", min: "0", section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Y }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: "0",
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Y }), Ie() && /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: Y }), e.visualizationSubType === "regular" && /* @__PURE__ */ l.createElement(qe, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: Y })), /* @__PURE__ */ l.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ l.createElement(qe, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: Y }), /* @__PURE__ */ l.createElement(
    qe,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ l.createElement(Me, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: Y, min: 0 }), /* @__PURE__ */ l.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ l.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ l.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ l.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ l.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ l.createElement(l.Fragment, null, We() && /* @__PURE__ */ l.createElement(qe, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Y }), le() && /* @__PURE__ */ l.createElement(qe, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Y }), De() && /* @__PURE__ */ l.createElement(qe, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: Y }), /* @__PURE__ */ l.createElement("span", { style: { color: "red", display: "block" } }, pn.maxMsg), /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Y }), /* @__PURE__ */ l.createElement("span", { style: { color: "red", display: "block" } }, pn.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: Y })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "max value", placeholder: "Auto", updateField: Y }), /* @__PURE__ */ l.createElement("span", { style: { color: "red", display: "block" } }, pn.maxMsg), /* @__PURE__ */ l.createElement(Me, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Y }), /* @__PURE__ */ l.createElement("span", { style: { color: "red", display: "block" } }, pn.minMsg)), W() && e.orientation !== "horizontal" && /* @__PURE__ */ l.createElement("div", { className: "edit-block" }, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ l.createElement(Ji, { allowZeroExpanded: !0 }, (xs = (Ar = e.yAxis) == null ? void 0 : Ar.anchors) == null ? void 0 : xs.map((U, j) => /* @__PURE__ */ l.createElement(ln, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${j}` }, /* @__PURE__ */ l.createElement(cn, { className: "series-item__title" }, /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(un, { className: "accordion__button accordion__button" }, "Anchor ", j + 1, /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (Q) => {
        Q.preventDefault();
        const ue = [...e.yAxis.anchors];
        ue.splice(j, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ue
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", null, "Anchor Value"), /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[j].value ? e.yAxis.anchors[j].value : "",
      onChange: (Q) => {
        Q.preventDefault();
        const ue = [...e.yAxis.anchors];
        ue[j].value = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ue
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", null, "Anchor Color"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[j].color ? e.yAxis.anchors[j].color : "",
      onChange: (Q) => {
        Q.preventDefault();
        const ue = [...e.yAxis.anchors];
        ue[j].color = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ue
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ l.createElement(
    "select",
    {
      value: e.yAxis.anchors[j].lineStyle || "",
      onChange: (Q) => {
        const ue = [...e.yAxis.anchors];
        ue[j].lineStyle = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ue
          }
        });
      }
    },
    /* @__PURE__ */ l.createElement("option", null, "Select"),
    v.map((Q) => /* @__PURE__ */ l.createElement("option", { key: Q.key }, Q.value))
  )))))), /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (U) => {
        U.preventDefault();
        const j = [...e.yAxis.anchors];
        j.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: j
          }
        });
      }
    },
    "Add Anchor"
  )), W() && e.orientation === "horizontal" && /* @__PURE__ */ l.createElement("div", { className: "edit-block" }, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ l.createElement(Ji, { allowZeroExpanded: !0 }, (Za = (Xa = e.xAxis) == null ? void 0 : Xa.anchors) == null ? void 0 : Za.map((U, j) => /* @__PURE__ */ l.createElement(ln, { className: "series-item series-item--chart", key: `xaxis-anchors-${j}` }, /* @__PURE__ */ l.createElement(cn, { className: "series-item__title" }, /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(un, { className: "accordion__button accordion__button" }, "Anchor ", j + 1, /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (Q) => {
        Q.preventDefault();
        const ue = [...e.xAxis.anchors];
        ue.splice(j, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ue
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", null, "Anchor Value"), /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[j].value ? e.xAxis.anchors[j].value : "",
      onChange: (Q) => {
        Q.preventDefault();
        const ue = [...e.xAxis.anchors];
        ue[j].value = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ue
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", null, "Anchor Color"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[j].color ? e.xAxis.anchors[j].color : "",
      onChange: (Q) => {
        Q.preventDefault();
        const ue = [...e.xAxis.anchors];
        ue[j].color = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ue
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ l.createElement(
    "select",
    {
      value: e.xAxis.anchors[j].lineStyle || "",
      onChange: (Q) => {
        const ue = [...e.xAxis.anchors];
        ue[j].lineStyle = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ue
          }
        });
      }
    },
    /* @__PURE__ */ l.createElement("option", null, "Select"),
    v.map((Q) => /* @__PURE__ */ l.createElement("option", { key: Q.key }, Q.value))
  )))))), /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (U) => {
        U.preventDefault();
        const j = [...e.xAxis.anchors];
        j.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: j
          }
        });
      }
    },
    "Add Anchor"
  )))), ht && /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "Right Value Axis")), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement(Me, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: Y }), /* @__PURE__ */ l.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ l.createElement(qe, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Y, min: 0 }), /* @__PURE__ */ l.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ l.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ l.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ l.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ l.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: Y }))), /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ l.createElement(Rl, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ l.createElement(dn, null, e.visualizationType !== "Pie" && /* @__PURE__ */ l.createElement(l.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ l.createElement(Pt, { value: e.xAxis.type, section: "xAxis", fieldName: "type", label: "Data Type", updateField: Y, options: e.visualizationType !== "Scatter Plot" ? ["categorical", "date"] : ["categorical", "continuous", "date"] }), /* @__PURE__ */ l.createElement(qe, { value: e.xAxis.sortDates, section: "xAxis", fieldName: "sortDates", label: "Force Date Scale (Sort Dates)", updateField: Y }), " ", /* @__PURE__ */ l.createElement(
    Pt,
    {
      value: e.xAxis.dataKey || $e() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: Y,
      options: Dn(!1),
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ l.createElement(
    Pt,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: Y,
      options: Dn(!1),
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: Y }), e.xAxis.type === "continuous" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ l.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ l.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ l.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ l.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ l.createElement(
    qe,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ l.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.dateParseFormat, section: "xAxis", fieldName: "dateParseFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Parse Format", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.dateDisplayFormat, section: "xAxis", fieldName: "dateDisplayFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Display Format", updateField: Y })), /* @__PURE__ */ l.createElement(
    qe,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: Y
    }
  ), ["Line", "Bar", "Area Chart", "Combo"].includes(e.visualizationType) && e.orientation === "vertical" && /* @__PURE__ */ l.createElement(qe, { value: e.brush.active, section: "brush", fieldName: "active", label: "Brush Slider ", updateField: Y }), e.exclusions.active && /* @__PURE__ */ l.createElement(l.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ l.createElement(l.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("fieldset", null, /* @__PURE__ */ l.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ l.createElement(Ve, null)), /* @__PURE__ */ l.createElement(
    Pt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (U) => {
        U.target.value !== "" && U.target.value !== "Select" && jn(U.target.value), U.target.value = "";
      },
      options: Sr(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(Me, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: Y, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ l.createElement(Me, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: Y, value: e.exclusions.dateEnd || "" }))), Se() && /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: "1", section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Y }), je() && /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.size, type: "number", min: "0", section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: Y }), e.xAxis.type === "continuous" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(qe, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Y, min: 0 })), At() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ l.createElement(qe, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Y }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && oe() && /* @__PURE__ */ l.createElement(Me, { value: e.xAxis.tickRotation, type: "number", min: "0", section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Y }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: "0",
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ l.createElement(l.Fragment, null, te() && /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Y }), ie() && /* @__PURE__ */ l.createElement(qe, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Y })) : /* @__PURE__ */ l.createElement(l.Fragment, null, te() && /* @__PURE__ */ l.createElement(qe, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Y }), ie() && /* @__PURE__ */ l.createElement(qe, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Y }), ce() && /* @__PURE__ */ l.createElement(qe, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Y })), ((Qa = e.series) == null ? void 0 : Qa.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && or.map((U, j) => /* @__PURE__ */ l.createElement("fieldset", null, /* @__PURE__ */ l.createElement("div", { className: "edit-block", key: `highlighted-bar-${j}` }, /* @__PURE__ */ l.createElement("button", { className: "remove-column", onClick: (Q) => en(Q, j) }, "Remove"), /* @__PURE__ */ l.createElement("p", null, "Highlighted Bar ", j + 1), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ l.createElement("select", { value: e.highlightedBarValues[j].value, onChange: (Q) => It(Q, j) }, /* @__PURE__ */ l.createElement("option", { value: "" }, "- Select Value -"), dt && [...new Set(dt)].sort().map((Q) => /* @__PURE__ */ l.createElement("option", { key: `special-class-value-option-${j}-${Q}` }, Q)))), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ l.createElement("input", { type: "text", value: e.highlightedBarValues[j].color ? e.highlightedBarValues[j].color : "", onChange: (Q) => bn(Q, j) })), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ l.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[j].borderWidth ? e.highlightedBarValues[j].borderWidth : "", onChange: (Q) => En(Q, j) })), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ l.createElement("input", { type: "text", value: e.highlightedBarValues[j].legendLabel ? e.highlightedBarValues[j].legendLabel : "", onChange: (Q) => hn(Q, j) }))))), /* @__PURE__ */ l.createElement("button", { className: "btn full-width", onClick: (U) => Vt(U) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(
    qe,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ l.createElement(l.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("fieldset", null, /* @__PURE__ */ l.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ l.createElement(Ve, null)), /* @__PURE__ */ l.createElement(
    Pt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (U) => {
        U.target.value !== "" && U.target.value !== "Select" && jn(U.target.value), U.target.value = "";
      },
      options: Sr(e.xAxis.dataKey, !0)
    }
  ))), W() && e.orientation !== "horizontal" && /* @__PURE__ */ l.createElement("div", { className: "edit-block" }, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ l.createElement(Ji, { allowZeroExpanded: !0 }, (bs = (da = e.xAxis) == null ? void 0 : da.anchors) == null ? void 0 : bs.map((U, j) => /* @__PURE__ */ l.createElement(ln, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${j}` }, /* @__PURE__ */ l.createElement(cn, { className: "series-item__title" }, /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(un, { className: "accordion__button accordion__button" }, "Anchor ", j + 1, /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (Q) => {
        Q.preventDefault();
        const ue = [...e.xAxis.anchors];
        ue.splice(j, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ue
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", null, "Anchor Value"), /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[j].value ? e.xAxis.anchors[j].value : "",
      onChange: (Q) => {
        Q.preventDefault();
        const ue = [...e.xAxis.anchors];
        ue[j].value = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ue
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", null, "Anchor Color"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[j].color ? e.xAxis.anchors[j].color : "",
      onChange: (Q) => {
        Q.preventDefault();
        const ue = [...e.xAxis.anchors];
        ue[j].color = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ue
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ l.createElement(
    "select",
    {
      value: e.xAxis.anchors[j].lineStyle || "",
      onChange: (Q) => {
        const ue = [...e.xAxis.anchors];
        ue[j].lineStyle = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ue
          }
        });
      }
    },
    /* @__PURE__ */ l.createElement("option", null, "Select"),
    v.map((Q) => /* @__PURE__ */ l.createElement("option", { key: Q.key }, Q.value))
  )))))), /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (U) => {
        U.preventDefault();
        const j = [...e.xAxis.anchors];
        j.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: j
          }
        });
      }
    },
    "Add Anchor"
  )), W() && e.orientation === "horizontal" && /* @__PURE__ */ l.createElement("div", { className: "edit-block" }, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ l.createElement(Ji, { allowZeroExpanded: !0 }, (Ri = (Ja = e.yAxis) == null ? void 0 : Ja.anchors) == null ? void 0 : Ri.map((U, j) => /* @__PURE__ */ l.createElement(ln, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${j}` }, /* @__PURE__ */ l.createElement(cn, { className: "series-item__title" }, /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(un, { className: "accordion__button accordion__button" }, "Anchor ", j + 1, /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (Q) => {
        Q.preventDefault();
        const ue = [...e.yAxis.anchors];
        ue.splice(j, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ue
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", null, "Anchor Value"), /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[j].value ? e.yAxis.anchors[j].value : "",
      onChange: (Q) => {
        Q.preventDefault();
        const ue = [...e.yAxis.anchors];
        ue[j].value = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ue
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", null, "Anchor Color"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[j].color ? e.yAxis.anchors[j].color : "",
      onChange: (Q) => {
        Q.preventDefault();
        const ue = [...e.yAxis.anchors];
        ue[j].color = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ue
          }
        });
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ l.createElement(
    "select",
    {
      value: e.yAxis.anchors[j].lineStyle || "",
      onChange: (Q) => {
        const ue = [...e.yAxis.anchors];
        ue[j].lineStyle = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ue
          }
        });
      }
    },
    /* @__PURE__ */ l.createElement("option", null, "Select"),
    v.map((Q) => /* @__PURE__ */ l.createElement("option", { key: Q.key }, Q.value))
  )))))), /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (U) => {
        U.preventDefault();
        const j = [...e.yAxis.anchors];
        j.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: j
          }
        });
      }
    },
    "Add Anchor"
  )))), Te() && /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "Regions")), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement(rz, { config: e, updateConfig: t }))), " ", e.visualizationType !== "Box Plot" && e.table.showVertical && /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "Columns")), /* @__PURE__ */ l.createElement(dn, null, e.type !== "navigation" && /* @__PURE__ */ l.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), Je.map((U) => /* @__PURE__ */ l.createElement("fieldset", { className: "edit-block", key: U }, /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (j) => {
        j.preventDefault(), Nn(U);
      }
    },
    "Remove"
  ), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ l.createElement(
    "select",
    {
      value: e.columns[U] ? e.columns[U].name : et[0],
      onChange: (j) => {
        kt(U, "name", j.target.value);
      }
    },
    et
  )), /* @__PURE__ */ l.createElement(Me, { value: e.columns[U].label, section: "columns", subsection: U, fieldName: "label", label: "Label", updateField: Y }), /* @__PURE__ */ l.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ l.createElement("li", { className: "three-col" }, /* @__PURE__ */ l.createElement(Me, { value: e.columns[U].prefix, section: "columns", subsection: U, fieldName: "prefix", label: "Prefix", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { value: e.columns[U].suffix, section: "columns", subsection: U, fieldName: "suffix", label: "Suffix", updateField: Y }), /* @__PURE__ */ l.createElement(Me, { type: "number", value: e.columns[U].roundToPlace, section: "columns", subsection: U, fieldName: "roundToPlace", label: "Round", updateField: Y })), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("label", { className: "checkbox" }, /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[U].commas,
      onChange: (j) => {
        kt(U, "commas", j.target.checked);
      }
    }
  ), /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("label", { className: "checkbox" }, /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[U].dataTable,
      onChange: (j) => {
        kt(U, "dataTable", j.target.checked);
      }
    }
  ), /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Show in Data Table"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("label", { className: "checkbox" }, /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[U].forestPlot || !1,
      onChange: (j) => {
        kt(U, "forestPlot", j.target.checked);
      }
    }
  ), /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("label", { className: "checkbox" }, /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[U].tooltips || !1,
      onChange: (j) => {
        Sn(U, j.target.checked);
      }
    }
  ), /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Show in tooltip"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("label", { className: "checkbox" }, /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[U].forestPlotAlignRight || !1,
      onChange: (j) => {
        kt(U, "forestPlotAlignRight", j.target.checked);
      }
    }
  ), /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[U].forestPlotAlignRight && /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("label", { className: "text" }, /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "number",
      value: e.columns[U].forestPlotStartingPoint || 0,
      onChange: (j) => {
        kt(U, "forestPlotStartingPoint", j.target.value);
      }
    }
  ))))))), /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (U) => {
        U.preventDefault(), Jt(Je.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ l.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((U, j) => /* @__PURE__ */ l.createElement("fieldset", { className: "edit-block", key: U }, /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (Q) => {
        Q.preventDefault();
        const ue = [...e.legend.additionalCategories];
        ue.splice(j, 1), Y("legend", null, "additionalCategories", ue);
      }
    },
    "Remove"
  ), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Category"), /* @__PURE__ */ l.createElement(
    Me,
    {
      value: U,
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (Q, ue, _t, An) => {
        const sr = [...e.legend.additionalCategories];
        sr[j] = An, Y(Q, ue, _t, sr);
      }
    }
  )))), /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (U) => {
        U.preventDefault();
        const j = [...e.legend.additionalCategories || []];
        j.push(""), Y("legend", null, "additionalCategories", j);
      }
    },
    "Add Category"
  )))), re() && /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "Legend")), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement(qe, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: Y }), /* @__PURE__ */ l.createElement(
    qe,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType !== "Box Plot" && /* @__PURE__ */ l.createElement(qe, { value: !!e.legend.showLegendValuesTooltip, section: "legend", fieldName: "showLegendValuesTooltip", label: "Show Legend Values in Tooltip", updateField: Y }), e.visualizationType === "Line" && /* @__PURE__ */ l.createElement(qe, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: Y }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ l.createElement(Pt, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: Y, options: Kr(n) }), /* @__PURE__ */ l.createElement(Pt, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: Y, options: ["highlight", "isolate"] }), /* @__PURE__ */ l.createElement(Me, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: Y }), /* @__PURE__ */ l.createElement(Pt, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: Y, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(qe, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: Y })), /* @__PURE__ */ l.createElement(Me, { type: "textarea", value: e.legend.description, updateField: Y, section: "legend", fieldName: "description", label: "Legend Description" }))), ke() && /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "Filters")), /* @__PURE__ */ l.createElement(dn, null, e.filters && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(
    Pt,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: Y,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ l.createElement("br", null)), e.filters && /* @__PURE__ */ l.createElement("ul", { className: "filters-list" }, e.filters.map((U, j) => U.type === "url" ? /* @__PURE__ */ l.createElement(l.Fragment, null) : /* @__PURE__ */ l.createElement("fieldset", { className: "edit-block", key: j }, /* @__PURE__ */ l.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        Wt(j);
      }
    },
    "Remove"
  ), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ l.createElement(
    "select",
    {
      value: U.columnName,
      onChange: (Q) => {
        Qt("columnName", j, Q.target.value);
      }
    },
    /* @__PURE__ */ l.createElement("option", { value: "" }, "- Select Option -"),
    ua().map((Q, ue) => /* @__PURE__ */ l.createElement("option", { value: Q, key: ue }, Q))
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "checkbox",
      checked: U.showDropdown === void 0 ? !0 : U.showDropdown,
      onChange: (Q) => {
        Qt("showDropdown", j, Q.target.checked);
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ l.createElement(
    "select",
    {
      value: U.filterStyle,
      onChange: (Q) => {
        Qt("filterStyle", j, Q.target.value);
      }
    },
    xe.map((Q) => /* @__PURE__ */ l.createElement("option", { value: Q }, Q))
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      value: U.label,
      onChange: (Q) => {
        Qt("label", j, Q.target.value);
      }
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ l.createElement("select", { value: U.order ? U.order : "asc", onChange: (Q) => Qt("order", j, Q.target.value) }, Ae.map((Q, ue) => /* @__PURE__ */ l.createElement("option", { value: Q.value, key: `filter-${ue}` }, Q.label))), U.order === "cust" && /* @__PURE__ */ l.createElement(gy, { onDragEnd: ({ source: Q, destination: ue }) => Le(Q.index, ue.index, j, e.filters[j]) }, /* @__PURE__ */ l.createElement(Ay, { droppableId: "filter_order" }, (Q) => {
    var ue;
    return /* @__PURE__ */ l.createElement("ul", { ...Q.droppableProps, className: "sort-list", ref: Q.innerRef, style: { marginTop: "1em" } }, (ue = e.filters[j]) == null ? void 0 : ue.values.map((_t, An) => /* @__PURE__ */ l.createElement(I0, { key: _t, draggableId: `draggableFilter-${_t}`, index: An }, (sr, si) => /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("div", { className: si.isDragging ? "currently-dragging" : "", style: we(si.isDragging, sr.draggableProps.style), ref: sr.innerRef, ...sr.draggableProps, ...sr.dragHandleProps }, _t)))), Q.placeholder);
  })))))), !e.filters && /* @__PURE__ */ l.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ l.createElement("button", { type: "button", onClick: jt, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "Visual")), /* @__PURE__ */ l.createElement(dn, null, e.isLollipopChart && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("fieldset", { className: "header" }, /* @__PURE__ */ l.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ l.createElement(
    "div",
    {
      onChange: (U) => {
        Kt(U.target.value);
      }
    },
    /* @__PURE__ */ l.createElement("label", { className: "radio-label" }, /* @__PURE__ */ l.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: e.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ l.createElement("label", { className: "radio-label" }, /* @__PURE__ */ l.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: e.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ l.createElement(Pt, { value: e.lollipopColorStyle ? e.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: Y, options: ["regular", "two-tone"] }), /* @__PURE__ */ l.createElement(Pt, { value: e.lollipopSize ? e.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: Y, options: ["small", "medium", "large"] })), e.visualizationType === "Box Plot" && /* @__PURE__ */ l.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ l.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ l.createElement(Pt, { value: e.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: Y, options: ["true", "false"] }), /* @__PURE__ */ l.createElement(qe, { value: e.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: Y })), /* @__PURE__ */ l.createElement(Pt, { value: e.fontSize, fieldName: "fontSize", label: "Font Size", updateField: Y, options: ["small", "medium", "large"] }), M() && /* @__PURE__ */ l.createElement(Pt, { value: e.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: Y, options: ["true", "false"] }), K() && /* @__PURE__ */ l.createElement(qe, { value: e.animate, fieldName: "animate", label: "Animate Visualization", updateField: Y }), (((eo = e.series) == null ? void 0 : eo.some((U) => U.type === "Line" || U.type === "dashed-lg" || U.type === "dashed-sm" || U.type === "dashed-md")) && e.visualizationType === "Combo" || e.visualizationType === "Line") && /* @__PURE__ */ l.createElement(Pt, { value: e.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: Y, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ l.createElement("label", { className: "header" }, /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ l.createElement("ul", { className: "color-palette" }, $.map((U) => /* @__PURE__ */ l.createElement(
    "button",
    {
      title: U,
      key: U,
      onClick: (j) => {
        j.preventDefault(), t({ ...e, theme: U });
      },
      className: e.theme === U ? "selected " + U : U
    }
  )))), (I() || I()) && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Chart Color Palette")), L() && /* @__PURE__ */ l.createElement(Tf, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: Y, value: e.isPaletteReversed }), B() && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("span", null, "Sequential"), /* @__PURE__ */ l.createElement("ul", { className: "color-palette" }, D.map((U) => {
    const j = {
      backgroundColor: a[U][2]
    }, Q = {
      backgroundColor: a[U][3]
    }, ue = {
      backgroundColor: a[U][5]
    };
    return /* @__PURE__ */ l.createElement(
      "button",
      {
        title: U,
        key: U,
        onClick: (_t) => {
          _t.preventDefault(), t({ ...e, palette: U });
        },
        className: e.palette === U ? "selected" : ""
      },
      /* @__PURE__ */ l.createElement("span", { style: j }),
      /* @__PURE__ */ l.createElement("span", { style: Q }),
      /* @__PURE__ */ l.createElement("span", { style: ue })
    );
  }))), I() && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ l.createElement("ul", { className: "color-palette" }, _.map((U) => {
    const j = {
      backgroundColor: a[U][2]
    }, Q = {
      backgroundColor: a[U][4]
    }, ue = {
      backgroundColor: a[U][6]
    };
    return /* @__PURE__ */ l.createElement(
      "button",
      {
        title: U,
        key: U,
        onClick: (_t) => {
          _t.preventDefault(), t({ ...e, palette: U });
        },
        className: e.palette === U ? "selected" : ""
      },
      /* @__PURE__ */ l.createElement("span", { style: j }),
      /* @__PURE__ */ l.createElement("span", { style: Q }),
      /* @__PURE__ */ l.createElement("span", { style: ue })
    );
  })))), (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(Tf, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: Y, value: e.twoColor.isPaletteReversed }), /* @__PURE__ */ l.createElement("ul", { className: "color-palette" }, A.map((U) => {
    const j = {
      backgroundColor: o[U][0]
    }, Q = {
      backgroundColor: o[U][1]
    };
    return /* @__PURE__ */ l.createElement(
      "button",
      {
        title: U,
        key: U,
        onClick: (ue) => {
          ue.preventDefault(), t({ ...e, twoColor: { ...e.twoColor, palette: U } });
        },
        className: e.twoColor.palette === U ? "selected" : ""
      },
      /* @__PURE__ */ l.createElement("span", { className: "two-color", style: j }),
      /* @__PURE__ */ l.createElement("span", { className: "two-color", style: Q })
    );
  }))), H() && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: Y,
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), me() && e.orientation === "horizontal" && !e.isLollipopChart && e.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ l.createElement(Me, { type: "number", value: e.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: Y, min: "15" }), (e.visualizationType === "Bar" && e.orientation !== "horizontal" || e.visualizationType === "Combo") && /* @__PURE__ */ l.createElement(Me, { value: e.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: Y }), ee() && /* @__PURE__ */ l.createElement(Me, { type: "number", value: e.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: Y, min: "0" }), (e.visualizationType === "Bar" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ l.createElement(qe, { value: e.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: Y }), e.visualizationType === "Spark Line" && /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ l.createElement(qe, { value: (Es = e.visual) == null ? void 0 : Es.border, section: "visual", fieldName: "border", label: "Show Border", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: (to = e.visual) == null ? void 0 : to.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: (no = e.visual) == null ? void 0 : no.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: (fa = e.visual) == null ? void 0 : fa.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: (Ss = e.visual) == null ? void 0 : Ss.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: Y })), (e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ l.createElement(qe, { value: e.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: Y }), (e.visualizationType === "Line" || e.visualizationType === "Combo") && e.showLineSeriesLabels && /* @__PURE__ */ l.createElement(qe, { value: e.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: Y }), O() && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(qe, { value: e.visual.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.visual.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: Y })), Pe() && /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "number",
      value: e.tooltips.opacity ? e.tooltips.opacity : 100,
      onChange: (U) => t({
        ...e,
        tooltips: {
          ...e.tooltips,
          opacity: U.target.value
        }
      })
    }
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ l.createElement(
    "input",
    {
      type: "text",
      value: e.chartMessage.noData ? e.chartMessage.noData : "",
      onChange: (U) => t({
        ...e,
        chartMessage: {
          ...e.chartMessage,
          noData: U.target.value
        }
      })
    }
  )))), e.visualizationType !== "Spark Line" && /* @__PURE__ */ l.createElement(ln, null, /* @__PURE__ */ l.createElement(cn, null, /* @__PURE__ */ l.createElement(un, null, "Data Table")), /* @__PURE__ */ l.createElement(dn, null, /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.table.label,
      updateField: Y,
      section: "table",
      fieldName: "label",
      id: "tableLabel",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), /* @__PURE__ */ l.createElement(
    qe,
    {
      value: e.table.show,
      section: "table",
      fieldName: "show",
      label: "Show Data Table",
      updateField: Y,
      className: "column-heading",
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
    }
  ), e.visualizationType !== "Box Plot" && /* @__PURE__ */ l.createElement(
    qe,
    {
      value: e.table.showVertical,
      section: "table",
      fieldName: "showVertical",
      label: "Show Vertical Data",
      updateField: Y,
      className: "column-heading",
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), /* @__PURE__ */ l.createElement(Me, { value: e.table.indexLabel, section: "table", fieldName: "indexLabel", label: "Index Column Header", updateField: Y }), /* @__PURE__ */ l.createElement(
    Me,
    {
      value: e.table.caption,
      updateField: Y,
      section: "table",
      type: "textarea",
      fieldName: "caption",
      label: "Data Table Caption",
      placeholder: " Data table",
      tooltip: /* @__PURE__ */ l.createElement(he, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(he.Target, null, /* @__PURE__ */ l.createElement(lt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(he.Content, null, /* @__PURE__ */ l.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ l.createElement(qe, { value: e.table.limitHeight, section: "table", fieldName: "limitHeight", label: "Limit Table Height", updateField: Y }), e.table.limitHeight && /* @__PURE__ */ l.createElement(Me, { value: e.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: "0", max: "500", placeholder: "Height(px)", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.table.expanded, section: "table", fieldName: "expanded", label: "Expanded by Default", updateField: Y }), d && /* @__PURE__ */ l.createElement(qe, { value: e.table.showDataTableLink, section: "table", fieldName: "showDataTableLink", label: "Show Data Table Name & Link", updateField: Y }), _e && /* @__PURE__ */ l.createElement(qe, { value: e.table.showDownloadUrl, section: "table", fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.table.download, section: "table", fieldName: "download", label: "Show Download CSV Link", updateField: Y }), /* @__PURE__ */ l.createElement(qe, { value: e.table.showDownloadImgButton, section: "table", fieldName: "showDownloadImgButton", label: "Display Image Button", updateField: Y })))), e.type !== "Spark Line" && /* @__PURE__ */ l.createElement(XC, { loadConfig: t, state: e, convertStateToConfig: rt }))));
};
const _y = (e) => {
  const n = /(?:\.([^.]+))?$/.exec(e);
  return n ? n[1] : "";
}, Nd = (e = "#000000", t = !1) => {
  let n = ii(e), r = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, r, n.darken(0.3).hex()];
}, az = (e) => {
  try {
    if (!e)
      throw new Error("No row supplied to hashObj");
    let t = JSON.stringify(e), n = 0;
    if (t.length === 0)
      return n;
    for (let r = 0; r < t.length; r++) {
      let a = t.charCodeAt(r);
      n = (n << 5) - n + a, n = n & n;
    }
    return n;
  } catch (t) {
    console.error("COVE: ", t);
  }
};
function Cz({ configUrl: e, config: t, isEditor: n = !1, isDebug: r = !1, isDashboard: a = !1, setConfig: o, setEditing: u, hostname: c, link: d, setSharedFilter: f, setSharedFilterValue: h, dashboardConfig: m }) {
  var xn, pn;
  const g = new mT(), [v, y] = F.useState(!0), [E, b] = F.useState(null), [x, w] = F.useState({}), [A, D] = F.useState(x.data || []), [_, C] = F.useState(void 0), [$, O] = F.useState(void 0), [I, B] = F.useState([]), [L, N] = F.useState("lg"), [z, W] = F.useState([]), [M, H] = F.useState(), [K, re] = F.useState(), [ie, te] = F.useState(!1), [ce, oe] = F.useState([]), [Se] = F.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  let Te = F.useRef(/* @__PURE__ */ new Map()), ke = F.useRef();
  r && console.log("Chart config, isEditor", x, n);
  let { legend: Ie, title: We, description: De, visualizationType: le } = x;
  n && (!We || We === "") && (We = "Chart Title"), x.table && (!((xn = x.table) != null && xn.label) || ((pn = x.table) == null ? void 0 : pn.label) === "") && (x.table.label = "Data Table");
  const { barBorderClass: ee, lineDatapointClass: me, contentClasses: V, sparkLineStyles: Oe } = uT(x), ae = x.showSidebar ? "#legend" : x != null && x.title ? `#dataTableSection__${x.title.replace(/\s/g, "")}` : "#dataTableSection", Ne = (k, pe) => k.toString().localeCompare(pe.toString(), "en", { numeric: !0 }), Ee = (k, pe) => pe.toString().localeCompare(k.toString(), "en", { numeric: !0 }), Pe = (k, pe = !1) => {
    pe && console.log("handleChartAriaLabels Testing On:", k);
    try {
      if (!k.visualizationType)
        throw Error("handleChartAriaLabels: no visualization type found in state");
      let be = "";
      return k.visualizationType && (be += `${k.visualizationType} chart`), k.title && k.visualizationType && (be += ` with the title: ${k.title}`), be;
    } catch (be) {
      console.error("COVE: ", be.message);
    }
  }, nt = async () => {
    if (x.dataUrl) {
      const k = new URL(x.runtimeDataUrl || x.dataUrl, window.location.origin);
      let pe = Object.fromEntries(new URLSearchParams(k.search)), be = !1;
      if (x.filters.forEach((Be) => {
        Be.type === "url" && pe[Be.queryParameter] !== decodeURIComponent(Be.active) && (pe[Be.queryParameter] = Be.active, be = !0);
      }), (!x.formattedData || x.formattedData.urlFiltered) && !be)
        return;
      let _e = `${k.origin}${k.pathname}${Object.keys(pe).map((Be, Ce) => {
        let et = Ce === 0 ? "?" : "&";
        return et += Be + "=", et += pe[Be], et;
      }).join("")}`, $e = [];
      try {
        const Be = _y(k.pathname);
        Be === "csv" ? $e = await fetch(_e).then((Ce) => Ce.text()).then((Ce) => Jm.parse(Ce, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : Be === "json" ? $e = await fetch(_e).then((Ce) => Ce.json()) : $e = [];
      } catch {
        console.error(`Cannot parse URL: ${_e}`), $e = [];
      }
      x.dataDescription && ($e = g.autoStandardize($e), $e = g.developerStandardize($e, x.dataDescription)), Object.assign($e, { urlFiltered: !0 }), Ae({ ...x, runtimeDataUrl: _e, data: $e, formattedData: $e }), $e && (D($e), C($e), O(xe(x.filters, $e)));
    }
  }, At = (k) => {
    switch (k) {
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
  }, je = [
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
  ], Le = async () => {
    let k = t || await (await fetch(e)).json(), pe = k.data || [];
    const be = k.filters ? k.filters.filter((Be) => Be.type === "url").length > 0 : !1;
    if (k.dataUrl && !be)
      try {
        const Be = _y(k.dataUrl);
        Be === "csv" && (pe = await fetch(k.dataUrl + `?v=${ng()}`).then((Ce) => Ce.text()).then((Ce) => (Ce = Ce.replace(/(".*?")|,/g, (...Je) => Je[1] || "|"), Ce = Ce.replace(/["]+/g, ""), Jm.parse(Ce, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), Be === "json" && (pe = await fetch(k.dataUrl + `?v=${ng()}`).then((Ce) => Ce.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${k.dataUrl}`), pe = [];
      }
    k.dataDescription && (pe = g.autoStandardize(pe), pe = g.developerStandardize(pe, k.dataDescription)), pe && (D(pe), C(pe)), k !== void 0 && k.table !== void 0 && (!k.table || !k.table.showVertical) && (k.table = k.table || {}, k.table.showVertical = !1);
    let _e = { ...cd, ...k };
    _e.visualizationType === "Box Plot" && (_e.legend.hide = !0), _e.table.show === void 0 && (_e.table.show = !a), _e.series.map((Be) => {
      Be.tooltip || (Be.tooltip = !0);
    });
    const $e = { ...await hT(_e) };
    Ae($e, pe);
  }, Ae = (k, pe) => {
    var Be;
    let be = pe || A;
    Object.keys(cd).forEach((Ce) => {
      k[Ce] && typeof k[Ce] == "object" && !Array.isArray(k[Ce]) && (k[Ce] = { ...cd[Ce], ...k[Ce] });
    });
    let _e = [];
    if (k.exclusions && k.exclusions.active)
      if (k.xAxis.type === "categorical" && ((Be = k.exclusions.keys) == null ? void 0 : Be.length) > 0)
        _e = be.filter((Ce) => !k.exclusions.keys.includes(Ce[k.xAxis.dataKey]));
      else if (k.xAxis.type === "date" && (k.exclusions.dateStart || k.exclusions.dateEnd) && k.xAxis.dateParseFormat) {
        const Ce = (kt) => new Date(kt).getTime();
        let et = Ce(k.exclusions.dateStart), Je = Ce(k.exclusions.dateEnd) + 86399999, Jt = typeof et !== void 0 && isNaN(et) === !1, Nn = typeof Je !== void 0 && isNaN(Je) === !1;
        Jt && Nn ? _e = be.filter((kt) => Ce(kt[k.xAxis.dataKey]) >= et && Ce(kt[k.xAxis.dataKey]) <= Je) : Jt ? _e = be.filter((kt) => Ce(kt[k.xAxis.dataKey]) >= et) : Nn && (_e = be.filter((kt) => Ce(kt[k.xAxis.dataKey]) <= Je));
      } else
        _e = pe || A;
    else
      _e = pe || A;
    C(_e);
    let $e = [];
    if (k.filters && (k.filters.forEach((Ce, et) => {
      let Je = [];
      Je = Ce.orderedValues || ht(Ce.columnName, _e).sort(Ce.order === "desc" ? Ee : Ne), k.filters[et].values = Je, k.filters[et].active = k.filters[et].active || Je[0], k.filters[et].filterStyle = k.filters[et].filterStyle ? k.filters[et].filterStyle : "dropdown";
    }), $e = xe(k.filters, _e), O($e)), k.runtime = {}, k.runtime.seriesLabels = {}, k.runtime.seriesLabelsAll = [], k.runtime.originalXAxis = k.xAxis, k.visualizationType === "Pie" ? (k.runtime.seriesKeys = (pe || be).map((Ce) => Ce[k.xAxis.dataKey]), k.runtime.seriesLabelsAll = k.runtime.seriesKeys) : k.runtime.seriesKeys = k.series ? k.series.map((Ce) => (k.runtime.seriesLabels[Ce.dataKey] = Ce.name || Ce.label || Ce.dataKey, k.runtime.seriesLabelsAll.push(Ce.name || Ce.dataKey), Ce.dataKey)) : [], k.visualizationType === "Box Plot" && k.series) {
      let Ce = _e ? _e.map((dt) => dt[k.xAxis.dataKey]) : be.map((dt) => dt[k.xAxis.dataKey]), et = _e ? _e.map((dt) => {
        var It;
        return Number(dt[(It = k == null ? void 0 : k.series[0]) == null ? void 0 : It.dataKey]);
      }) : be.map((dt) => {
        var It;
        return Number(dt[(It = k == null ? void 0 : k.series[0]) == null ? void 0 : It.dataKey]);
      });
      const Jt = function(dt) {
        return dt.filter(function(It, Vt, en) {
          return en.indexOf(It) === Vt;
        });
      }(Ce);
      let Nn = [];
      const kt = [], or = (dt) => {
        dt.sort((On, Rr) => On - Rr);
        const It = Math.floor(dt.length / 2), Vt = dt.length % 2 === 0, en = Vt ? dt.slice(0, It) : dt.slice(0, It + 1), bn = Vt ? dt.slice(It) : dt.slice(It + 1), hn = Math.floor(en.length / 2), En = Vt ? (en[hn - 1] + en[hn]) / 2 : en[hn], Sn = Math.floor(bn.length / 2), Xt = Vt ? (bn[Sn - 1] + bn[Sn]) / 2 : bn[Sn];
        return { q1: En, q3: Xt };
      };
      if (!Jt)
        return;
      Jt.forEach((dt) => {
        try {
          if (!dt)
            throw new Error("No groups resolved in box plots");
          let It = _e ? _e.filter((an) => an[k.xAxis.dataKey] === dt) : be.filter((an) => an[k.xAxis.dataKey] === dt), Vt = It.map((an) => {
            var Ar;
            return Number(an[(Ar = k == null ? void 0 : k.series[0]) == null ? void 0 : Ar.dataKey]);
          }), en = Vt.sort((an, Ar) => an - Ar);
          const bn = or(en);
          if (!It)
            throw new Error("boxplots dont have data yet");
          if (!kt)
            throw new Error("boxplots dont have plots yet");
          k.boxplot.firstQuartilePercentage === "" && (k.boxplot.firstQuartilePercentage = 0), k.boxplot.thirdQuartilePercentage === "" && (k.boxplot.thirdQuartilePercentage = 0);
          const hn = bn.q1, En = bn.q3, Sn = En - hn, Xt = hn - (En - hn) * 1.5, On = En + (En - hn) * 1.5, Rr = en.filter((an) => an < Xt || an > On);
          let Gr = Vt;
          Gr = Gr.filter((an) => !Rr.includes(an));
          const ki = Mo(Vt) || 0, Li = Ro([ki, hn - 1.5 * Sn]);
          kt.push({
            columnCategory: dt,
            columnMax: Mo([Ro(Vt), hn + 1.5 * Sn]),
            columnThirdQuartile: Number(En).toFixed(k.dataFormat.roundTo),
            columnMedian: Number(CN(Vt)).toFixed(k.dataFormat.roundTo),
            columnFirstQuartile: hn.toFixed(k.dataFormat.roundTo),
            columnMin: Li,
            columnTotal: Vt.reduce((an, Ar) => an + Ar, 0),
            columnSd: Number(AN(Vt)).toFixed(k.dataFormat.roundTo),
            columnMean: Number(_N(Vt)).toFixed(k.dataFormat.roundTo),
            columnIqr: Number(Sn).toFixed(k.dataFormat.roundTo),
            columnLowerBounds: Li,
            columnUpperBounds: Mo([Ro(en), hn + 1.5 * Sn]),
            columnOutliers: Rr,
            values: Vt,
            nonOutlierValues: Gr
          });
        } catch (It) {
          console.error("COVE: ", It.message);
        }
      }), Nn = JSON.parse(JSON.stringify(kt)), Nn.map((dt) => (dt.columnIqr = void 0, dt.nonOutlierValues = void 0, dt.columnLowerBounds = void 0, dt.columnUpperBounds = void 0, null)), k.boxplot.allValues = et, k.boxplot.categories = Jt, k.boxplot.plots = kt, k.boxplot.tableData = Nn;
    }
    k.visualizationType === "Combo" && k.series && (k.runtime.barSeriesKeys = [], k.runtime.lineSeriesKeys = [], k.runtime.areaSeriesKeys = [], k.runtime.forecastingSeriesKeys = [], k.series.forEach((Ce) => {
      Ce.type === "Area Chart" && k.runtime.areaSeriesKeys.push(Ce), Ce.type === "Forecasting" && k.runtime.forecastingSeriesKeys.push(Ce), Ce.type === "Bar" && k.runtime.barSeriesKeys.push(Ce.dataKey), (Ce.type === "Line" || Ce.type === "dashed-sm" || Ce.type === "dashed-md" || Ce.type === "dashed-lg") && k.runtime.lineSeriesKeys.push(Ce.dataKey);
    })), k.visualizationType === "Forecasting" && k.series && (k.runtime.forecastingSeriesKeys = [], k.series.forEach((Ce) => {
      Ce.type === "Forecasting" && k.runtime.forecastingSeriesKeys.push(Ce);
    })), k.visualizationType === "Area Chart" && k.series && (k.runtime.areaSeriesKeys = [], k.series.forEach((Ce) => {
      k.runtime.areaSeriesKeys.push({ ...Ce, type: "Area Chart" });
    })), k.visualizationType === "Bar" && k.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(k.visualizationType) ? (k.runtime.xAxis = k.yAxis, k.runtime.yAxis = k.xAxis, k.runtime.horizontal = !0, k.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(k.visualizationType) ? (k.runtime.xAxis = k.xAxis, k.runtime.yAxis = k.yAxis, k.runtime.horizontal = !1, k.orientation = "vertical") : (k.runtime.xAxis = k.xAxis, k.runtime.yAxis = k.yAxis, k.runtime.horizontal = !1), k.runtime.uniqueId = Date.now(), k.runtime.editorErrorMessage = k.visualizationType === "Pie" && !k.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", w(k);
  }, xe = (k, pe) => {
    let be = [];
    return pe.forEach((_e) => {
      let $e = !0;
      k.filter((Be) => Be.type !== "url").forEach((Be) => {
        _e[Be.columnName] != Be.active && ($e = !1);
      }), $e && be.push(_e);
    }), be;
  }, ht = (k, pe = this.state.data) => {
    const be = [];
    return pe.forEach((_e) => {
      const $e = _e[k];
      $e && be.includes($e) === !1 && be.push($e);
    }), be;
  }, we = (k, pe) => {
    let be = x.visualizationType === "Bar" && x.visualizationSubType === "horizontal" ? x.xAxis.dataKey : x.yAxis.sortKey, _e = parseFloat(k[be]), $e = parseFloat(pe[be]);
    return _e < $e ? x.sortData === "ascending" ? 1 : -1 : _e > $e ? x.sortData === "ascending" ? -1 : 1 : 0;
  }, Ge = new HC((k) => {
    for (let pe of k) {
      let { width: be, height: _e } = pe.contentRect, $e = UC(be), Be = 32, Ce = 350;
      N($e), n && (be = be - Ce), pe.target.dataset.lollipop === "true" && (be = be - 2.5), be = be - Be, W([be, _e]);
    }
  }), Xe = F.useCallback((k) => {
    k !== null && Ge.observe(k), re(k);
  }, []);
  function Y(k) {
    return Object.keys(k).length === 0;
  }
  F.useEffect(() => {
    Le();
  }, []), F.useEffect(() => {
    nt();
  }, [JSON.stringify(x.filters)]), F.useEffect(() => {
    K && !Y(x) && !ie && (dT("cove_loaded", { config: x }), te(!0));
  }, [K, x]), F.useEffect(() => {
    const k = (pe) => {
      let be = [];
      be.push(pe.detail), H(be);
    };
    return fT("cove_filterData", (pe) => k(pe)), () => {
      pT("cove_filterData", k);
    };
  }, [x]), F.useEffect(() => {
    if (M && M[0] && !M[0].hasOwnProperty("active")) {
      let pe = { ...x };
      delete pe.filters, w(pe), O(xe(M, _));
    }
    if (M && M.length > 0 && M.length > 0 && M[0].hasOwnProperty("active")) {
      let k = { ...x, filters: M };
      w(k), O(xe(M, _));
    }
  }, [M]), t && F.useEffect(() => {
    Le();
  }, [t.data]), F.useEffect(() => {
    if (A && x.xAxis && x.runtime.seriesKeys) {
      const k = x.customColors ? x.customColors : x.visualizationType === "Paired Bar" || x.visualizationType === "Deviation Bar" ? x.twoColor.palette : x.palette, pe = { ...Ei, ...af };
      let be = x.customColors || pe[k], _e = x.runtime.seriesKeys.length, $e;
      for (; _e > be.length; )
        be = be.concat(be);
      be = be.slice(0, _e), $e = () => aN({
        domain: x.runtime.seriesLabelsAll,
        range: be,
        unknown: null
      }), b($e), y(!1);
    }
    x && A && x.sortData && A.sort(we);
  }, [x, A]);
  const tt = (k) => {
    const pe = [];
    if (I.length + 1 === x.runtime.seriesKeys.length && x.visualizationType !== "Forecasting") {
      zt();
      return;
    }
    I.forEach((_e) => {
      pe.push(_e);
    });
    let be = k.datum;
    if (x.runtime.seriesLabels) {
      for (let _e = 0; _e < x.runtime.seriesKeys.length; _e++)
        if (x.runtime.seriesLabels[x.runtime.seriesKeys[_e]] === k.datum) {
          be = x.runtime.seriesKeys[_e];
          break;
        }
    }
    pe.indexOf(be) !== -1 ? pe.splice(pe.indexOf(be), 1) : pe.push(be), B(pe);
  }, zt = () => {
    try {
      const k = document.getElementById("legend");
      if (!k)
        throw new Error("No legend available to set previous focus on.");
      k.focus();
    } catch (k) {
      console.error("COVE:", k.message);
    }
    B([]);
  }, Kt = x.orientation === "horizontal" ? "yAxis" : "xAxis", Wt = (k, pe = !0) => {
    let be = Ix(x.runtime[Kt].dateParseFormat)(k);
    return be || (pe && (x.runtime.editorErrorMessage = `Error parsing date "${k}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, Qt = (k) => $x(x.runtime[Kt].dateDisplayFormat)(k);
  function jt(k, pe) {
    const _e = document.createElement("canvas").getContext("2d");
    if (!_e) {
      console.error("2d context not found");
      return;
    }
    return _e.font = pe || getComputedStyle(document.body).font, Math.ceil(_e.measureText(k).width);
  }
  const $t = (k) => {
    let pe = "", be = Math.abs(k);
    return be >= 1e9 ? (pe = "B", k = k / 1e9) : be >= 1e6 ? (pe = "M", k = k / 1e6) : be >= 1e3 && (pe = "K", k = k / 1e3), k + pe;
  }, fn = (k, pe, be = !1, _e, $e, Be) => {
    if (isNaN(k) || !k)
      return k;
    const Ce = k < 0;
    (pe === void 0 || !pe) && (pe = "left"), Ce && (k = Math.abs(k));
    let {
      dataFormat: { commas: et, abbreviated: Je, roundTo: Jt, prefix: Nn, suffix: kt, rightRoundTo: or, bottomRoundTo: dt, rightPrefix: It, rightSuffix: Vt, bottomPrefix: en, bottomSuffix: bn, bottomAbbreviated: hn }
    } = x;
    String(k).indexOf(",") !== -1 && (k = k.replaceAll(",", ""));
    let En = k, Sn = {
      useGrouping: !!et
      // for old chart data table to work right cant just leave this to undefined
    };
    if (pe === "left" || pe === void 0) {
      let On;
      Be !== void 0 ? On = Be ? Number(Be) : 0 : On = Jt ? Number(Jt) : 0, Sn = {
        useGrouping: Be ? !0 : !!x.dataFormat.commas,
        minimumFractionDigits: On,
        maximumFractionDigits: On
      };
    }
    if (pe === "right" && (Sn = {
      useGrouping: !!x.dataFormat.rightCommas,
      minimumFractionDigits: or ? Number(or) : 0,
      maximumFractionDigits: or ? Number(or) : 0
    }), pe === "bottom" && (Sn = {
      useGrouping: !!x.dataFormat.bottomCommas,
      minimumFractionDigits: dt ? Number(dt) : 0,
      maximumFractionDigits: dt ? Number(dt) : 0
    }), k = lg(k), isNaN(k))
      return x.runtime.editorErrorMessage = `Unable to parse number from data ${En}. Try reviewing your data and selections in the Data Series section.`, En;
    if (!x.dataFormat)
      return k;
    if (x.dataCutoff) {
      let On = lg(x.dataCutoff);
      k < On && (k = On);
    }
    pe === "left" && et && Je && be || pe === "bottom" && et && Je && be ? k = k : k = k.toLocaleString("en-US", Sn);
    let Xt = "";
    return Je && pe === "left" && be && (k = $t(parseFloat(k))), hn && pe === "bottom" && be && (k = $t(parseFloat(k))), _e && pe === "left" ? Xt = _e + Xt : Nn && pe === "left" && (Xt += Nn), It && pe === "right" && (Xt += It), en && pe === "bottom" && (Xt += en), Xt += k, $e && pe === "left" ? Xt += $e : kt && pe === "left" && (Xt += kt), Vt && pe === "right" && (Xt += Vt), bn && pe === "bottom" && (Xt += bn), Ce && (Xt = "-" + Xt), String(Xt);
  }, jn = {
    "Paired Bar": /* @__PURE__ */ l.createElement(Wr, null),
    Forecasting: /* @__PURE__ */ l.createElement(Wr, null),
    Bar: /* @__PURE__ */ l.createElement(Wr, null),
    Line: /* @__PURE__ */ l.createElement(Wr, null),
    Combo: /* @__PURE__ */ l.createElement(Wr, null),
    Pie: /* @__PURE__ */ l.createElement(Jk, null),
    "Box Plot": /* @__PURE__ */ l.createElement(Wr, null),
    "Area Chart": /* @__PURE__ */ l.createElement(Wr, null),
    "Scatter Plot": /* @__PURE__ */ l.createElement(Wr, null),
    "Deviation Bar": /* @__PURE__ */ l.createElement(Wr, null),
    "Forest Plot": /* @__PURE__ */ l.createElement(Wr, null)
  }, oi = () => {
    if (x.visualizationType === "Forecasting" || x.visualizationType === "Forest Plot")
      return !1;
    if (x.visualizationType === "Pie") {
      if ((x == null ? void 0 : x.yAxis.dataKey) === void 0)
        return !0;
    } else if ((x == null ? void 0 : x.series) === void 0 || !((x == null ? void 0 : x.series.length) > 0))
      return !0;
    return !x.xAxis.dataKey;
  }, ua = (k, pe) => {
    if (k === null || k === "" || k === void 0)
      return "";
    if (typeof k == "string" && k.length > 0 && x.legend.type === "equalnumber")
      return k;
    let be = k, _e;
    if (Object.keys(x.columns).length > 0 && Object.keys(x.columns).forEach(function($e) {
      var Be = x.columns[$e];
      Be.name === pe && (_e = Be);
    }), _e === void 0 && (_e = x.type === "chart" ? x.dataFormat : x.primary, _e.useCommas = _e.commas, _e.roundToPlace = _e.roundTo ? _e.roundTo : ""), _e) {
      let $e = !1, Be = 0;
      Number(k) && (_e.roundToPlace >= 0 && ($e = _e.roundToPlace ? _e.roundToPlace !== "" || _e.roundToPlace !== null : !1, Be = _e.roundToPlace ? Number(_e.roundToPlace) : 0, _e.hasOwnProperty("roundToPlace") && $e && (be = Number(k).toFixed(Be))), _e.hasOwnProperty("useCommas") && _e.useCommas === !0 && (be = Number(k).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: $e ? Be : 0,
        maximumFractionDigits: $e ? Be : 5
      }))), be = (_e.prefix || "") + be + (_e.suffix || "");
    }
    return be;
  }, Dn = (k) => {
    var pe, be, _e;
    try {
      if (!k)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (x.type === "navigation") {
        let Be = Ei[x.color] || Ei.bluegreenreverse;
        return Nd(Be[3]);
      }
      let $e = az(k);
      if (Te.current.has($e)) {
        let Be = Te.current.get($e);
        if ((pe = runtimeLegend[Be]) != null && pe.disabled)
          return !1;
        let Ce = (be = runtimeLegend.find((et) => et.bin === Be)) == null ? void 0 : be.color;
        return Nd(Ce, (_e = runtimeLegend[Be]) == null ? void 0 : _e.special);
      }
      return Nd();
    } catch ($e) {
      console.error("COVE: ", $e);
    }
  }, Kr = (k) => {
    var pe;
    return Array.isArray(k) ? x.visualizationType === "Forecasting" ? k : (pe = x == null ? void 0 : x.xAxis) != null && pe.dataKey ? g.cleanData(k, x.xAxis.dataKey) : k : [];
  }, Sr = (k) => k, Pi = (k) => {
    const pe = Ie.position === "bottom" || ["sm", "xs", "xxs"].includes(L), be = k.orientation === "horizontal", _e = Number(k.xAxis.tickRotation) > 0 ? Number(k.xAxis.tickRotation) : 0, $e = k.brush.active, Be = 20, Ce = k.brush.height;
    let et = 0;
    return !pe && be && k.xAxis.label && (et = k.runtime.xAxis.size + k.xAxis.labelOffset), !pe && be && !k.xAxis.label && (et = 0), !be && !pe && k.xAxis.label && _e && !k.isResponsiveTicks && (et = $e ? Ce + k.xAxis.tickWidthMax + -k.xAxis.size + k.xAxis.labelOffset + Be : k.xAxis.tickWidthMax + Be + -k.xAxis.size + k.xAxis.labelOffset), !be && !pe && !k.xAxis.label && _e && k.isResponsiveTicks, !be && !pe && !k.xAxis.label && _e && !k.dynamicMarginTop && !k.isResponsiveTicks && (et = $e ? k.xAxis.tickWidthMax + Ce + Be + -k.xAxis.size : 0), !be && !pe && k.xAxis.label && !_e && !k.isResponsiveTicks && (et = $e ? Ce + -k.xAxis.size + k.xAxis.labelOffset + Be : -k.xAxis.size + k.xAxis.labelOffset + Be), !be && !pe && k.xAxis.label && k.dynamicMarginTop && k.isResponsiveTicks && (et = $e ? Ce + k.xAxis.labelOffset + -k.xAxis.size + k.xAxis.tickWidthMax : k.dynamicMarginTop + -k.xAxis.size + Be), !be && !pe && !k.xAxis.label && k.dynamicMarginTop && k.isResponsiveTicks && (et = $e ? Ce + k.xAxis.labelOffset + -k.xAxis.size + k.xAxis.tickWidthMax : k.dynamicMarginTop + -k.xAxis.size - Be), !be && !pe && k.xAxis.label && !k.dynamicMarginTop && k.isResponsiveTicks && (et = $e ? Ce + k.xAxis.labelOffset + -k.xAxis.size + 25 : k.xAxis.labelOffset + -k.xAxis.size + Be), !be && !pe && !k.xAxis.label && !k.dynamicMarginTop && k.isResponsiveTicks && (et = -k.xAxis.size + Be + k.xAxis.labelOffset), !be && !pe && !k.xAxis.label && !_e && !k.dynamicMarginTop && !k.isResponsiveTicks && (et = $e ? Ce + -k.xAxis.size + k.xAxis.labelOffset : 0), `${et}px`;
  };
  let jr = /* @__PURE__ */ l.createElement(eT, null);
  if (!v) {
    const k = /* @__PURE__ */ l.createElement("a", { href: `#data-table-${x.dataKey}`, className: "margin-left-href" }, x.dataKey, " (Go to Table)");
    jr = /* @__PURE__ */ l.createElement(l.Fragment, null, n && /* @__PURE__ */ l.createElement(iz, null), !oi() && !x.newViz && /* @__PURE__ */ l.createElement("div", { className: "cdc-chart-inner-container" }, /* @__PURE__ */ l.createElement(JC, { showTitle: x.showTitle, isDashboard: a, title: We, superTitle: x.superTitle, classes: ["chart-title", `${x.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ l.createElement("a", { id: "skip-chart-container", className: "cdcdataviz-sr-only-focusable", href: ae }, "Skip Over Chart Container"), x.filters && !M && /* @__PURE__ */ l.createElement(K0, { config: x, setConfig: w, setFilteredData: O, filteredData: $, excludedData: _, filterData: xe, dimensions: z }), (x == null ? void 0 : x.introText) && x.visualizationType !== "Spark Line" && /* @__PURE__ */ l.createElement("section", { className: "introText" }, Qi(x.introText)), /* @__PURE__ */ l.createElement("div", { style: { marginBottom: Pi(x) }, className: `chart-container  p-relative ${x.legend.position === "bottom" ? "bottom" : ""}${x.legend.hide ? " legend-hidden" : ""}${me}${ee} ${V.join(" ")}` }, x.visualizationType !== "Spark Line" && jn[x.visualizationType], x.visualizationType === "Spark Line" && /* @__PURE__ */ l.createElement(l.Fragment, null, (x == null ? void 0 : x.introText) && /* @__PURE__ */ l.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Qi(x.introText)), /* @__PURE__ */ l.createElement("div", { style: { height: "100px", width: "100%", ...Oe } }, /* @__PURE__ */ l.createElement(GN, null, (pe) => /* @__PURE__ */ l.createElement(UR, { width: pe.width, height: pe.height }))), De && /* @__PURE__ */ l.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Qi(De))), !x.legend.hide && x.visualizationType !== "Spark Line" && /* @__PURE__ */ l.createElement(nM, null)), a && x.table && x.table.show && x.table.showDataTableLink ? k : d && d, De && x.visualizationType !== "Spark Line" && /* @__PURE__ */ l.createElement("div", { className: "column " + x.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, Qi(De)), /* @__PURE__ */ l.createElement(zu.Section, { classes: ["download-buttons"] }, x.table.showDownloadImgButton && /* @__PURE__ */ l.createElement(zu.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: x, elementToCapture: Se }), x.table.showDownloadPdfButton && /* @__PURE__ */ l.createElement(zu.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: x, elementToCapture: Se })), x.xAxis.dataKey && x.table.show && x.visualizationType !== "Spark Line" && /* @__PURE__ */ l.createElement(
      ZC,
      {
        config: x,
        rawData: x.data,
        runtimeData: $ || _,
        expandDataTable: x.table.expanded,
        columns: x.columns,
        showDownloadButton: x.general.showDownloadButton,
        runtimeLegend: ce,
        displayDataAsText: ua,
        displayGeoName: Sr,
        applyLegendToRow: Dn,
        tableTitle: x.table.label,
        indexTitle: x.table.indexLabel,
        vizTitle: We,
        viewport: L,
        parseDate: Wt,
        formatDate: Qt,
        formatNumber: fn,
        tabbingId: ae,
        showDownloadImgButton: x.showDownloadImgButton,
        showDownloadPdfButton: x.showDownloadPdfButton,
        innerContainerRef: ke,
        outerContainerRef: Xe,
        imageRef: Se,
        colorScale: E,
        isDebug: r,
        isEditor: n
      }
    ), (x == null ? void 0 : x.footnotes) && /* @__PURE__ */ l.createElement("section", { className: "footnotes" }, Qi(x.footnotes))));
  }
  const Ve = {
    capitalize: (k) => k.charAt(0).toUpperCase() + k.slice(1),
    getXAxisData: (k) => x.runtime.xAxis.type === "date" ? Wt(k[x.runtime.originalXAxis.dataKey]).getTime() : k[x.runtime.originalXAxis.dataKey],
    getYAxisData: (k, pe) => k[pe],
    config: x,
    setConfig: w,
    rawData: A ?? {},
    excludedData: _,
    transformedData: Kr($ || _),
    // do this right before passing to components
    tableData: $ || _,
    // do not clean table data
    unfilteredData: A,
    seriesHighlight: I,
    colorScale: E,
    dimensions: z,
    currentViewport: L,
    parseDate: Wt,
    formatDate: Qt,
    formatNumber: fn,
    loading: v,
    updateConfig: Ae,
    colorPalettes: Ei,
    isDashboard: a,
    setParentConfig: o,
    missingRequiredSections: oi,
    setEditing: u,
    setFilteredData: O,
    handleChartAriaLabels: Pe,
    highlight: tt,
    highlightReset: zt,
    legend: Ie,
    setSeriesHighlight: B,
    dynamicLegendItems: ce,
    setDynamicLegendItems: oe,
    filterData: xe,
    imageId: Se,
    handleLineType: At,
    lineOptions: je,
    isNumber: kl,
    getTextWidth: jt,
    twoColorPalette: af,
    isEditor: n,
    isDebug: r,
    setSharedFilter: f,
    setSharedFilterValue: h,
    dashboardConfig: m
  }, rn = ["cdc-open-viz-module", "type-chart", `${L}`, `font-${x.fontSize}`, `${x.theme}`];
  return x.visualizationType === "Spark Line" && rn.push("type-sparkline"), n && rn.push("spacing-wrapper"), n && rn.push("isEditor"), /* @__PURE__ */ l.createElement(pt.Provider, { value: Ve }, /* @__PURE__ */ l.createElement("div", { className: `${rn.join(" ")}`, ref: Xe, "data-lollipop": x.isLollipopChart, "data-download-id": Se }, jr));
}
export {
  Cz as C
};
