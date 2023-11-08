import { R as i, r as F } from "./storybook-e61d95ab.es.js";
import { i as cu, g as uu, P as Wl } from "./storybook-7366772a.es.js";
import { t as du, f as fu, g as On, L as Vl, A as mu, M as Ri, D as hu } from "./storybook-c449b197.es.js";
import { p as ms, P as V } from "./storybook-b8c9afe4.es.js";
import { d as pu } from "./storybook-006055ee.es.js";
import { a as Hr } from "./storybook-c5d32002.es.js";
import { H as xn, T as yu } from "./storybook-826feda6.es.js";
import { e as Qt, a as lt, b as ot, c as st, d as ct, A as vn } from "./storybook-7cc24c1b.es.js";
import { _ as Ue } from "./storybook-70f3d2a3.es.js";
import { _ as jt, T as $e, c as an, s as Za, P as hs, t as lr, u as gu, D as Hl, C as Kl, I as Il, F as xu } from "./storybook-6928251c.es.js";
import { E as Rt, L as vu } from "./storybook-a0c99f4a.es.js";
import { G as be, c as Ze, j as wi, t as bu, k as ps, m as jl, o as Eu, p as Au, q as Tu, s as ql, u as Su } from "./storybook-b0e07e40.es.js";
import { R as ku } from "./storybook-ac19c974.es.js";
import { B as Pt, s as ra, t as ys, a as gs, b as xs, d as Ta, c as ht, C as wu, I as on, S as vs } from "./storybook-fde5cb17.es.js";
import { i as bs, m as Fi, c as Es, j as La, k as Oa, l as _a, n as Ul, o as Cu, p as Yl, b as As, d as Ts } from "./storybook-bedc547d.es.js";
import { I as De } from "./storybook-d6b8e24c.es.js";
import { T as Q } from "./storybook-46a89ba7.es.js";
import { u as Nu, p as Pu, s as Lu, a as Ou, c as _u } from "./storybook-25f566e3.es.js";
import { n as Xl, D as Mu } from "./storybook-28c41e3d.es.js";
import { c as Ql } from "./storybook-7a3dd9ba.es.js";
var or = Math.PI, sr = 2 * or, gn = 1e-6, Du = sr - gn;
function cr() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Sa() {
  return new cr();
}
cr.prototype = Sa.prototype = {
  constructor: cr,
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
  bezierCurveTo: function(e, t, n, a, r, l) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +a + "," + (this._x1 = +r) + "," + (this._y1 = +l);
  },
  arcTo: function(e, t, n, a, r) {
    e = +e, t = +t, n = +n, a = +a, r = +r;
    var l = this._x1, c = this._y1, o = n - e, s = a - t, u = l - e, d = c - t, m = u * u + d * d;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (m > gn)
      if (!(Math.abs(d * o - s * u) > gn) || !r)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var h = n - l, y = a - c, p = o * o + s * s, g = h * h + y * y, v = Math.sqrt(p), f = Math.sqrt(m), b = r * Math.tan((or - Math.acos((p + m - g) / (2 * v * f))) / 2), x = b / f, w = b / v;
        Math.abs(x - 1) > gn && (this._ += "L" + (e + x * u) + "," + (t + x * d)), this._ += "A" + r + "," + r + ",0,0," + +(d * h > u * y) + "," + (this._x1 = e + w * o) + "," + (this._y1 = t + w * s);
      }
  },
  arc: function(e, t, n, a, r, l) {
    e = +e, t = +t, n = +n, l = !!l;
    var c = n * Math.cos(a), o = n * Math.sin(a), s = e + c, u = t + o, d = 1 ^ l, m = l ? a - r : r - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + s + "," + u : (Math.abs(this._x1 - s) > gn || Math.abs(this._y1 - u) > gn) && (this._ += "L" + s + "," + u), n && (m < 0 && (m = m % sr + sr), m > Du ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (e - c) + "," + (t - o) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = s) + "," + (this._y1 = u) : m > gn && (this._ += "A" + n + "," + n + ",0," + +(m >= or) + "," + d + "," + (this._x1 = e + n * Math.cos(r)) + "," + (this._y1 = t + n * Math.sin(r))));
  },
  rect: function(e, t, n, a) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +a + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Be(e) {
  return function() {
    return e;
  };
}
var Zl = Math.abs, gt = Math.atan2, fn = Math.cos, $u = Math.max, Bi = Math.min, Wt = Math.sin, zn = Math.sqrt, xt = 1e-12, Vn = Math.PI, Ja = Vn / 2, la = 2 * Vn;
function zu(e) {
  return e > 1 ? 0 : e < -1 ? Vn : Math.acos(e);
}
function Jl(e) {
  return e >= 1 ? Ja : e <= -1 ? -Ja : Math.asin(e);
}
function Ru(e) {
  return e.innerRadius;
}
function Fu(e) {
  return e.outerRadius;
}
function Bu(e) {
  return e.startAngle;
}
function Wu(e) {
  return e.endAngle;
}
function Vu(e) {
  return e && e.padAngle;
}
function Hu(e, t, n, a, r, l, c, o) {
  var s = n - e, u = a - t, d = c - r, m = o - l, h = m * s - d * u;
  if (!(h * h < xt))
    return h = (d * (t - l) - m * (e - r)) / h, [e + h * s, t + h * u];
}
function Ma(e, t, n, a, r, l, c) {
  var o = e - n, s = t - a, u = (c ? l : -l) / zn(o * o + s * s), d = u * s, m = -u * o, h = e + d, y = t + m, p = n + d, g = a + m, v = (h + p) / 2, f = (y + g) / 2, b = p - h, x = g - y, w = b * b + x * x, C = r - l, T = h * g - p * y, D = (x < 0 ? -1 : 1) * zn($u(0, C * C * w - T * T)), k = (T * x - b * D) / w, z = (-T * b - x * D) / w, $ = (T * x + b * D) / w, N = (-T * b + x * D) / w, A = k - v, P = z - f, L = $ - v, S = N - f;
  return A * A + P * P > L * L + S * S && (k = $, z = N), {
    cx: k,
    cy: z,
    x01: -d,
    y01: -m,
    x11: k * (r / C - 1),
    y11: z * (r / C - 1)
  };
}
function Ku() {
  var e = Ru, t = Fu, n = Be(0), a = null, r = Bu, l = Wu, c = Vu, o = null;
  function s() {
    var u, d, m = +e.apply(this, arguments), h = +t.apply(this, arguments), y = r.apply(this, arguments) - Ja, p = l.apply(this, arguments) - Ja, g = Zl(p - y), v = p > y;
    if (o || (o = u = Sa()), h < m && (d = h, h = m, m = d), !(h > xt))
      o.moveTo(0, 0);
    else if (g > la - xt)
      o.moveTo(h * fn(y), h * Wt(y)), o.arc(0, 0, h, y, p, !v), m > xt && (o.moveTo(m * fn(p), m * Wt(p)), o.arc(0, 0, m, p, y, v));
    else {
      var f = y, b = p, x = y, w = p, C = g, T = g, D = c.apply(this, arguments) / 2, k = D > xt && (a ? +a.apply(this, arguments) : zn(m * m + h * h)), z = Bi(Zl(h - m) / 2, +n.apply(this, arguments)), $ = z, N = z, A, P;
      if (k > xt) {
        var L = Jl(k / m * Wt(D)), S = Jl(k / h * Wt(D));
        (C -= L * 2) > xt ? (L *= v ? 1 : -1, x += L, w -= L) : (C = 0, x = w = (y + p) / 2), (T -= S * 2) > xt ? (S *= v ? 1 : -1, f += S, b -= S) : (T = 0, f = b = (y + p) / 2);
      }
      var M = h * fn(f), R = h * Wt(f), q = m * fn(w), j = m * Wt(w);
      if (z > xt) {
        var I = h * fn(b), G = h * Wt(b), Y = m * fn(x), ce = m * Wt(x), ue;
        if (g < Vn && (ue = Hu(M, R, Y, ce, I, G, q, j))) {
          var ge = M - ue[0], ke = R - ue[1], Te = I - ue[0], Se = G - ue[1], U = 1 / Wt(zu((ge * Te + ke * Se) / (zn(ge * ge + ke * ke) * zn(Te * Te + Se * Se))) / 2), K = zn(ue[0] * ue[0] + ue[1] * ue[1]);
          $ = Bi(z, (m - K) / (U - 1)), N = Bi(z, (h - K) / (U + 1));
        }
      }
      T > xt ? N > xt ? (A = Ma(Y, ce, M, R, h, N, v), P = Ma(I, G, q, j, h, N, v), o.moveTo(A.cx + A.x01, A.cy + A.y01), N < z ? o.arc(A.cx, A.cy, N, gt(A.y01, A.x01), gt(P.y01, P.x01), !v) : (o.arc(A.cx, A.cy, N, gt(A.y01, A.x01), gt(A.y11, A.x11), !v), o.arc(0, 0, h, gt(A.cy + A.y11, A.cx + A.x11), gt(P.cy + P.y11, P.cx + P.x11), !v), o.arc(P.cx, P.cy, N, gt(P.y11, P.x11), gt(P.y01, P.x01), !v))) : (o.moveTo(M, R), o.arc(0, 0, h, f, b, !v)) : o.moveTo(M, R), !(m > xt) || !(C > xt) ? o.lineTo(q, j) : $ > xt ? (A = Ma(q, j, I, G, m, -$, v), P = Ma(M, R, Y, ce, m, -$, v), o.lineTo(A.cx + A.x01, A.cy + A.y01), $ < z ? o.arc(A.cx, A.cy, $, gt(A.y01, A.x01), gt(P.y01, P.x01), !v) : (o.arc(A.cx, A.cy, $, gt(A.y01, A.x01), gt(A.y11, A.x11), !v), o.arc(0, 0, m, gt(A.cy + A.y11, A.cx + A.x11), gt(P.cy + P.y11, P.cx + P.x11), v), o.arc(P.cx, P.cy, $, gt(P.y11, P.x11), gt(P.y01, P.x01), !v))) : o.arc(0, 0, m, w, x, v);
    }
    if (o.closePath(), u)
      return o = null, u + "" || null;
  }
  return s.centroid = function() {
    var u = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, d = (+r.apply(this, arguments) + +l.apply(this, arguments)) / 2 - Vn / 2;
    return [fn(d) * u, Wt(d) * u];
  }, s.innerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Be(+u), s) : e;
  }, s.outerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Be(+u), s) : t;
  }, s.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : Be(+u), s) : n;
  }, s.padRadius = function(u) {
    return arguments.length ? (a = u == null ? null : typeof u == "function" ? u : Be(+u), s) : a;
  }, s.startAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : Be(+u), s) : r;
  }, s.endAngle = function(u) {
    return arguments.length ? (l = typeof u == "function" ? u : Be(+u), s) : l;
  }, s.padAngle = function(u) {
    return arguments.length ? (c = typeof u == "function" ? u : Be(+u), s) : c;
  }, s.context = function(u) {
    return arguments.length ? (o = u ?? null, s) : o;
  }, s;
}
function Ss(e) {
  this._context = e;
}
Ss.prototype = {
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
function Ci(e) {
  return new Ss(e);
}
function ks(e) {
  return e[0];
}
function ws(e) {
  return e[1];
}
function Cs() {
  var e = ks, t = ws, n = Be(!0), a = null, r = Ci, l = null;
  function c(o) {
    var s, u = o.length, d, m = !1, h;
    for (a == null && (l = r(h = Sa())), s = 0; s <= u; ++s)
      !(s < u && n(d = o[s], s, o)) === m && ((m = !m) ? l.lineStart() : l.lineEnd()), m && l.point(+e(d, s, o), +t(d, s, o));
    if (h)
      return l = null, h + "" || null;
  }
  return c.x = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Be(+o), c) : e;
  }, c.y = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Be(+o), c) : t;
  }, c.defined = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : Be(!!o), c) : n;
  }, c.curve = function(o) {
    return arguments.length ? (r = o, a != null && (l = r(a)), c) : r;
  }, c.context = function(o) {
    return arguments.length ? (o == null ? a = l = null : l = r(a = o), c) : a;
  }, c;
}
function Iu() {
  var e = ks, t = null, n = Be(0), a = ws, r = Be(!0), l = null, c = Ci, o = null;
  function s(d) {
    var m, h, y, p = d.length, g, v = !1, f, b = new Array(p), x = new Array(p);
    for (l == null && (o = c(f = Sa())), m = 0; m <= p; ++m) {
      if (!(m < p && r(g = d[m], m, d)) === v)
        if (v = !v)
          h = m, o.areaStart(), o.lineStart();
        else {
          for (o.lineEnd(), o.lineStart(), y = m - 1; y >= h; --y)
            o.point(b[y], x[y]);
          o.lineEnd(), o.areaEnd();
        }
      v && (b[m] = +e(g, m, d), x[m] = +n(g, m, d), o.point(t ? +t(g, m, d) : b[m], a ? +a(g, m, d) : x[m]));
    }
    if (f)
      return o = null, f + "" || null;
  }
  function u() {
    return Cs().defined(r).curve(c).context(l);
  }
  return s.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Be(+d), t = null, s) : e;
  }, s.x0 = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Be(+d), s) : e;
  }, s.x1 = function(d) {
    return arguments.length ? (t = d == null ? null : typeof d == "function" ? d : Be(+d), s) : t;
  }, s.y = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : Be(+d), a = null, s) : n;
  }, s.y0 = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : Be(+d), s) : n;
  }, s.y1 = function(d) {
    return arguments.length ? (a = d == null ? null : typeof d == "function" ? d : Be(+d), s) : a;
  }, s.lineX0 = s.lineY0 = function() {
    return u().x(e).y(n);
  }, s.lineY1 = function() {
    return u().x(e).y(a);
  }, s.lineX1 = function() {
    return u().x(t).y(n);
  }, s.defined = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : Be(!!d), s) : r;
  }, s.curve = function(d) {
    return arguments.length ? (c = d, l != null && (o = c(l)), s) : c;
  }, s.context = function(d) {
    return arguments.length ? (d == null ? l = o = null : o = c(l = d), s) : l;
  }, s;
}
function ju(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function qu(e) {
  return e;
}
function Uu() {
  var e = qu, t = ju, n = null, a = Be(0), r = Be(la), l = Be(0);
  function c(o) {
    var s, u = o.length, d, m, h = 0, y = new Array(u), p = new Array(u), g = +a.apply(this, arguments), v = Math.min(la, Math.max(-la, r.apply(this, arguments) - g)), f, b = Math.min(Math.abs(v) / u, l.apply(this, arguments)), x = b * (v < 0 ? -1 : 1), w;
    for (s = 0; s < u; ++s)
      (w = p[y[s] = s] = +e(o[s], s, o)) > 0 && (h += w);
    for (t != null ? y.sort(function(C, T) {
      return t(p[C], p[T]);
    }) : n != null && y.sort(function(C, T) {
      return n(o[C], o[T]);
    }), s = 0, m = h ? (v - u * x) / h : 0; s < u; ++s, g = f)
      d = y[s], w = p[d], f = g + (w > 0 ? w * m : 0) + x, p[d] = {
        data: o[d],
        index: s,
        value: w,
        startAngle: g,
        endAngle: f,
        padAngle: b
      };
    return p;
  }
  return c.value = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Be(+o), c) : e;
  }, c.sortValues = function(o) {
    return arguments.length ? (t = o, n = null, c) : t;
  }, c.sort = function(o) {
    return arguments.length ? (n = o, t = null, c) : n;
  }, c.startAngle = function(o) {
    return arguments.length ? (a = typeof o == "function" ? o : Be(+o), c) : a;
  }, c.endAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : Be(+o), c) : r;
  }, c.padAngle = function(o) {
    return arguments.length ? (l = typeof o == "function" ? o : Be(+o), c) : l;
  }, c;
}
var Gl = Array.prototype.slice;
const Yu = {
  draw: function(e, t) {
    var n = Math.sqrt(t / Vn);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, la);
  }
};
var Ns = Math.sqrt(1 / 3), Xu = Ns * 2;
const Qu = {
  draw: function(e, t) {
    var n = Math.sqrt(t / Xu), a = n * Ns;
    e.moveTo(0, -n), e.lineTo(a, 0), e.lineTo(0, n), e.lineTo(-a, 0), e.closePath();
  }
};
function Zu() {
  var e = Be(Yu), t = Be(64), n = null;
  function a() {
    var r;
    if (n || (n = r = Sa()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r)
      return n = null, r + "" || null;
  }
  return a.type = function(r) {
    return arguments.length ? (e = typeof r == "function" ? r : Be(r), a) : e;
  }, a.size = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : Be(+r), a) : t;
  }, a.context = function(r) {
    return arguments.length ? (n = r ?? null, a) : n;
  }, a;
}
function sn() {
}
function Ga(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function Ni(e) {
  this._context = e;
}
Ni.prototype = {
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
        Ga(this, this._x1, this._y1);
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
        Ga(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Ju(e) {
  return new Ni(e);
}
function Ps(e) {
  this._context = e;
}
Ps.prototype = {
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
        Ga(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Gu(e) {
  return new Ps(e);
}
function Ls(e) {
  this._context = e;
}
Ls.prototype = {
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
        Ga(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function ed(e) {
  return new Ls(e);
}
function Os(e, t) {
  this._basis = new Ni(e), this._beta = t;
}
Os.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var a = e[0], r = t[0], l = e[n] - a, c = t[n] - r, o = -1, s; ++o <= n; )
        s = o / n, this._basis.point(
          this._beta * e[o] + (1 - this._beta) * (a + s * l),
          this._beta * t[o] + (1 - this._beta) * (r + s * c)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const td = function e(t) {
  function n(a) {
    return t === 1 ? new Ni(a) : new Os(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function ei(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function Kr(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Kr.prototype = {
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
        ei(this, this._x1, this._y1);
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
        ei(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const nd = function e(t) {
  function n(a) {
    return new Kr(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Ir(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Ir.prototype = {
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
        ei(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const ad = function e(t) {
  function n(a) {
    return new Ir(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function jr(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
jr.prototype = {
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
        ei(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const id = function e(t) {
  function n(a) {
    return new jr(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function qr(e, t, n) {
  var a = e._x1, r = e._y1, l = e._x2, c = e._y2;
  if (e._l01_a > xt) {
    var o = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, s = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * o - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / s, r = (r * o - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / s;
  }
  if (e._l23_a > xt) {
    var u = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, d = 3 * e._l23_a * (e._l23_a + e._l12_a);
    l = (l * u + e._x1 * e._l23_2a - t * e._l12_2a) / d, c = (c * u + e._y1 * e._l23_2a - n * e._l12_2a) / d;
  }
  e._context.bezierCurveTo(a, r, l, c, e._x2, e._y2);
}
function _s(e, t) {
  this._context = e, this._alpha = t;
}
_s.prototype = {
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
        qr(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const rd = function e(t) {
  function n(a) {
    return t ? new _s(a, t) : new Kr(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Ms(e, t) {
  this._context = e, this._alpha = t;
}
Ms.prototype = {
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
        qr(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const ld = function e(t) {
  function n(a) {
    return t ? new Ms(a, t) : new Ir(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Ds(e, t) {
  this._context = e, this._alpha = t;
}
Ds.prototype = {
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
        qr(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const od = function e(t) {
  function n(a) {
    return t ? new Ds(a, t) : new jr(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function $s(e) {
  this._context = e;
}
$s.prototype = {
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
function zs(e) {
  return new $s(e);
}
function eo(e) {
  return e < 0 ? -1 : 1;
}
function to(e, t, n) {
  var a = e._x1 - e._x0, r = t - e._x1, l = (e._y1 - e._y0) / (a || r < 0 && -0), c = (n - e._y1) / (r || a < 0 && -0), o = (l * r + c * a) / (a + r);
  return (eo(l) + eo(c)) * Math.min(Math.abs(l), Math.abs(c), 0.5 * Math.abs(o)) || 0;
}
function no(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Wi(e, t, n) {
  var a = e._x0, r = e._y0, l = e._x1, c = e._y1, o = (l - a) / 3;
  e._context.bezierCurveTo(a + o, r + o * t, l - o, c - o * n, l, c);
}
function ti(e) {
  this._context = e;
}
ti.prototype = {
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
        Wi(this, this._t0, no(this, this._t0));
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
          this._point = 3, Wi(this, no(this, n = to(this, e, t)), n);
          break;
        default:
          Wi(this, this._t0, n = to(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Rs(e) {
  this._context = new Fs(e);
}
(Rs.prototype = Object.create(ti.prototype)).point = function(e, t) {
  ti.prototype.point.call(this, t, e);
};
function Fs(e) {
  this._context = e;
}
Fs.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, n, a, r, l) {
    this._context.bezierCurveTo(t, e, a, n, l, r);
  }
};
function ja(e) {
  return new ti(e);
}
function sd(e) {
  return new Rs(e);
}
function Bs(e) {
  this._context = e;
}
Bs.prototype = {
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
        for (var a = ao(e), r = ao(t), l = 0, c = 1; c < n; ++l, ++c)
          this._context.bezierCurveTo(a[0][l], r[0][l], a[1][l], r[1][l], e[c], t[c]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function ao(e) {
  var t, n = e.length - 1, a, r = new Array(n), l = new Array(n), c = new Array(n);
  for (r[0] = 0, l[0] = 2, c[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    r[t] = 1, l[t] = 4, c[t] = 4 * e[t] + 2 * e[t + 1];
  for (r[n - 1] = 2, l[n - 1] = 7, c[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
    a = r[t] / l[t - 1], l[t] -= a, c[t] -= a * c[t - 1];
  for (r[n - 1] = c[n - 1] / l[n - 1], t = n - 2; t >= 0; --t)
    r[t] = (c[t] - r[t + 1]) / l[t];
  for (l[n - 1] = (e[n] + r[n - 1]) / 2, t = 0; t < n - 1; ++t)
    l[t] = 2 * e[t + 1] - r[t + 1];
  return [r, l];
}
function cd(e) {
  return new Bs(e);
}
function Pi(e, t) {
  this._context = e, this._t = t;
}
Pi.prototype = {
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
function ud(e) {
  return new Pi(e, 0.5);
}
function dd(e) {
  return new Pi(e, 0);
}
function fd(e) {
  return new Pi(e, 1);
}
function Hn(e, t) {
  if ((c = e.length) > 1)
    for (var n = 1, a, r, l = e[t[0]], c, o = l.length; n < c; ++n)
      for (r = l, l = e[t[n]], a = 0; a < o; ++a)
        l[a][1] += l[a][0] = isNaN(r[a][1]) ? r[a][0] : r[a][1];
}
function Kn(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function md(e, t) {
  return e[t];
}
function Ur() {
  var e = Be([]), t = Kn, n = Hn, a = md;
  function r(l) {
    var c = e.apply(this, arguments), o, s = l.length, u = c.length, d = new Array(u), m;
    for (o = 0; o < u; ++o) {
      for (var h = c[o], y = d[o] = new Array(s), p = 0, g; p < s; ++p)
        y[p] = g = [0, +a(l[p], h, p, l)], g.data = l[p];
      y.key = h;
    }
    for (o = 0, m = t(d); o < u; ++o)
      d[m[o]].index = o;
    return n(d, m), d;
  }
  return r.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Be(Gl.call(l)), r) : e;
  }, r.value = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : Be(+l), r) : a;
  }, r.order = function(l) {
    return arguments.length ? (t = l == null ? Kn : typeof l == "function" ? l : Be(Gl.call(l)), r) : t;
  }, r.offset = function(l) {
    return arguments.length ? (n = l ?? Hn, r) : n;
  }, r;
}
function hd(e, t) {
  if ((a = e.length) > 0) {
    for (var n, a, r = 0, l = e[0].length, c; r < l; ++r) {
      for (c = n = 0; n < a; ++n)
        c += e[n][r][1] || 0;
      if (c)
        for (n = 0; n < a; ++n)
          e[n][r][1] /= c;
    }
    Hn(e, t);
  }
}
function pd(e, t) {
  if ((s = e.length) > 0)
    for (var n, a = 0, r, l, c, o, s, u = e[t[0]].length; a < u; ++a)
      for (c = o = 0, n = 0; n < s; ++n)
        (l = (r = e[t[n]][a])[1] - r[0]) > 0 ? (r[0] = c, r[1] = c += l) : l < 0 ? (r[1] = o, r[0] = o += l) : (r[0] = 0, r[1] = l);
}
function yd(e, t) {
  if ((r = e.length) > 0) {
    for (var n = 0, a = e[t[0]], r, l = a.length; n < l; ++n) {
      for (var c = 0, o = 0; c < r; ++c)
        o += e[c][n][1] || 0;
      a[n][1] += a[n][0] = -o / 2;
    }
    Hn(e, t);
  }
}
function gd(e, t) {
  if (!(!((c = e.length) > 0) || !((l = (r = e[t[0]]).length) > 0))) {
    for (var n = 0, a = 1, r, l, c; a < l; ++a) {
      for (var o = 0, s = 0, u = 0; o < c; ++o) {
        for (var d = e[t[o]], m = d[a][1] || 0, h = d[a - 1][1] || 0, y = (m - h) / 2, p = 0; p < o; ++p) {
          var g = e[t[p]], v = g[a][1] || 0, f = g[a - 1][1] || 0;
          y += v - f;
        }
        s += m, u += y * m;
      }
      r[a - 1][1] += r[a - 1][0] = n, s && (n -= u / s);
    }
    r[a - 1][1] += r[a - 1][0] = n, Hn(e, t);
  }
}
function xd(e) {
  var t = e.map(vd);
  return Kn(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function vd(e) {
  for (var t = -1, n = 0, a = e.length, r, l = -1 / 0; ++t < a; )
    (r = +e[t][1]) > l && (l = r, n = t);
  return n;
}
function Ws(e) {
  var t = e.map(Vs);
  return Kn(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function Vs(e) {
  for (var t = 0, n = -1, a = e.length, r; ++n < a; )
    (r = +e[n][1]) && (t += r);
  return t;
}
function bd(e) {
  return Ws(e).reverse();
}
function Ed(e) {
  var t = e.length, n, a, r = e.map(Vs), l = xd(e), c = 0, o = 0, s = [], u = [];
  for (n = 0; n < t; ++n)
    a = l[n], c < o ? (c += r[a], s.push(a)) : (o += r[a], u.push(a));
  return u.reverse().concat(s);
}
function Ad(e) {
  return Kn(e).reverse();
}
function Xe(e, t) {
  e(t);
}
var io = {
  ascending: Ws,
  descending: bd,
  insideout: Ed,
  none: Kn,
  reverse: Ad
};
function Yr(e) {
  return e && io[e] || io.none;
}
var ro = {
  expand: hd,
  diverging: pd,
  none: Hn,
  silhouette: yd,
  wiggle: gd
};
function Xr(e) {
  return e && ro[e] || ro.none;
}
function Td(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, a = t.outerRadius, r = t.cornerRadius, l = t.startAngle, c = t.endAngle, o = t.padAngle, s = t.padRadius, u = Ku();
  return n != null && Xe(u.innerRadius, n), a != null && Xe(u.outerRadius, a), r != null && Xe(u.cornerRadius, r), l != null && Xe(u.startAngle, l), c != null && Xe(u.endAngle, c), o != null && Xe(u.padAngle, o), s != null && Xe(u.padRadius, s), u;
}
function Qr(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.x0, r = t.x1, l = t.y, c = t.y0, o = t.y1, s = t.defined, u = t.curve, d = Iu();
  return n && Xe(d.x, n), a && Xe(d.x0, a), r && Xe(d.x1, r), l && Xe(d.y, l), c && Xe(d.y0, c), o && Xe(d.y1, o), s && d.defined(s), u && d.curve(u), d;
}
function Sd(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.y, r = t.defined, l = t.curve, c = Cs();
  return n && Xe(c.x, n), a && Xe(c.y, a), r && c.defined(r), l && c.curve(l), c;
}
function kd(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, a = t.endAngle, r = t.padAngle, l = t.value, c = t.sort, o = t.sortValues, s = Uu();
  return (c === null || c != null) && s.sort(c), (o === null || o != null) && s.sortValues(o), l != null && s.value(l), r != null && Xe(s.padAngle, r), n != null && Xe(s.startAngle, n), a != null && Xe(s.endAngle, a), s;
}
function wd(e) {
  var t = e.keys, n = e.value, a = e.order, r = e.offset, l = Ur();
  return t && l.keys(t), n && Xe(l.value, n), a && l.order(Yr(a)), r && l.offset(Xr(r)), l;
}
var Cd = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
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
function Nd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Pd(e) {
  var t = e.className, n = e.top, a = e.left, r = e.data, l = r === void 0 ? [] : r, c = e.centroid, o = e.innerRadius, s = o === void 0 ? 0 : o, u = e.outerRadius, d = e.cornerRadius, m = e.startAngle, h = e.endAngle, y = e.padAngle, p = e.padRadius, g = e.pieSort, v = e.pieSortValues, f = e.pieValue, b = e.children, x = e.fill, w = x === void 0 ? "" : x, C = Nd(e, Cd), T = Td({
    innerRadius: s,
    outerRadius: u,
    cornerRadius: d,
    padRadius: p
  }), D = kd({
    startAngle: m,
    endAngle: h,
    padAngle: y,
    value: f,
    sort: g,
    sortValues: v
  }), k = D(l);
  return b ? /* @__PURE__ */ i.createElement(i.Fragment, null, b({
    arcs: k,
    path: T,
    pie: D
  })) : /* @__PURE__ */ i.createElement(be, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, k.map(function(z, $) {
    return /* @__PURE__ */ i.createElement("g", {
      key: "pie-arc-" + $
    }, /* @__PURE__ */ i.createElement("path", ur({
      className: Ze("visx-pie-arc", t),
      d: T(z) || "",
      fill: w == null || typeof w == "string" ? w : w(z)
    }, C)), c == null ? void 0 : c(T.centroid(z), z));
  }));
}
var Ld = ["from", "to", "fill", "className", "innerRef"];
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
function Od(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function qe(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, a = e.to, r = a === void 0 ? {
    x: 1,
    y: 1
  } : a, l = e.fill, c = l === void 0 ? "transparent" : l, o = e.className, s = e.innerRef, u = Od(e, Ld), d = n.x === r.x || n.y === r.y;
  return /* @__PURE__ */ i.createElement("line", dr({
    ref: s,
    className: Ze("visx-line", o),
    x1: n.x,
    y1: n.y,
    x2: r.x,
    y2: r.y,
    fill: c,
    shapeRendering: d ? "crispEdges" : "auto"
  }, u));
}
var _d = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function fr() {
  return fr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fr.apply(this, arguments);
}
function Md(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function kn(e) {
  var t = e.children, n = e.data, a = n === void 0 ? [] : n, r = e.x, l = e.y, c = e.fill, o = c === void 0 ? "transparent" : c, s = e.className, u = e.curve, d = e.innerRef, m = e.defined, h = m === void 0 ? function() {
    return !0;
  } : m, y = Md(e, _d), p = Sd({
    x: r,
    y: l,
    defined: h,
    curve: u
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: p
  })) : /* @__PURE__ */ i.createElement("path", fr({
    ref: d,
    className: Ze("visx-linepath", s),
    d: p(a) || "",
    fill: o,
    strokeLinecap: "round"
  }, y));
}
var Dd = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
function $d(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function zd(e) {
  var t = e.children, n = e.x, a = e.x0, r = e.x1, l = e.y, c = e.y0, o = e.y1, s = e.data, u = s === void 0 ? [] : s, d = e.defined, m = d === void 0 ? function() {
    return !0;
  } : d, h = e.className, y = e.curve, p = e.innerRef, g = $d(e, Dd), v = Qr({
    x: n,
    x0: a,
    x1: r,
    y: l,
    y0: c,
    y1: o,
    defined: m,
    curve: y
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: v
  })) : /* @__PURE__ */ i.createElement("path", mr({
    ref: p,
    className: Ze("visx-area", h),
    d: v(u) || ""
  }, g));
}
var Rd = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
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
function Fd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Bd(e) {
  var t = e.x, n = e.x0, a = e.x1, r = e.y, l = e.y1, c = e.y0, o = e.yScale, s = e.data, u = s === void 0 ? [] : s, d = e.defined, m = d === void 0 ? function() {
    return !0;
  } : d, h = e.className, y = e.curve, p = e.innerRef, g = e.children, v = Fd(e, Rd), f = Qr({
    x: t,
    x0: n,
    x1: a,
    defined: m,
    curve: y
  });
  return c == null ? f.y0(o.range()[0]) : Xe(f.y0, c), r && !l && Xe(f.y1, r), l && !r && Xe(f.y1, l), g ? /* @__PURE__ */ i.createElement(i.Fragment, null, g({
    path: f
  })) : /* @__PURE__ */ i.createElement("path", hr({
    ref: p,
    className: Ze("visx-area-closed", h),
    d: f(u) || ""
  }, v));
}
var Wd = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function Vd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Hd(e) {
  var t = e.className, n = e.top, a = e.left, r = e.keys, l = e.data, c = e.curve, o = e.defined, s = e.x, u = e.x0, d = e.x1, m = e.y0, h = e.y1, y = e.value, p = e.order, g = e.offset, v = e.color, f = e.children, b = Vd(e, Wd), x = wd({
    keys: r,
    value: y,
    order: p,
    offset: g
  }), w = Qr({
    x: s,
    x0: u,
    x1: d,
    y0: m,
    y1: h,
    curve: c,
    defined: o
  }), C = x(l);
  return f ? /* @__PURE__ */ i.createElement(i.Fragment, null, f({
    stacks: C,
    path: w,
    stack: x
  })) : /* @__PURE__ */ i.createElement(be, {
    top: n,
    left: a
  }, C.map(function(T, D) {
    return /* @__PURE__ */ i.createElement("path", pr({
      className: Ze("visx-stack", t),
      key: "stack-" + D + "-" + (T.key || ""),
      d: w(T) || "",
      fill: v == null ? void 0 : v(T.key, D)
    }, b));
  }));
}
var Kd = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ni.apply(this, arguments);
}
function Id(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function jd(e) {
  var t = e.className, n = e.top, a = e.left, r = e.keys, l = e.data, c = e.curve, o = e.defined, s = e.x, u = e.x0, d = e.x1, m = e.y0, h = e.y1, y = e.value, p = e.order, g = e.offset, v = e.color, f = e.children, b = Id(e, Kd);
  return /* @__PURE__ */ i.createElement(Hd, ni({
    className: t,
    top: n,
    left: a,
    keys: r,
    data: l,
    curve: c,
    defined: o,
    x: s,
    x0: u,
    x1: d,
    y0: m,
    y1: h,
    value: y,
    order: p,
    offset: g,
    color: v
  }, b), f || function(x) {
    var w = x.stacks, C = x.path;
    return w.map(function(T, D) {
      return /* @__PURE__ */ i.createElement("path", ni({
        className: Ze("visx-area-stack", t),
        key: "area-stack-" + D + "-" + (T.key || ""),
        d: C(T) || "",
        fill: v == null ? void 0 : v(T.key, D)
      }, b));
    });
  });
}
function Zr(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var qd = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
function Ud(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Hs(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.x0, c = e.x0Scale, o = e.x1Scale, s = e.yScale, u = e.color, d = e.keys, m = e.height, h = e.children, y = Ud(e, qd), p = Zr(o), g = t.map(function(v, f) {
    return {
      index: f,
      x0: c(l(v)),
      bars: d.map(function(b, x) {
        var w = v[b];
        return {
          index: x,
          key: b,
          value: w,
          width: p,
          x: o(b) || 0,
          y: s(w) || 0,
          color: u(b, x),
          height: m - (s(w) || 0)
        };
      })
    };
  });
  return h ? /* @__PURE__ */ i.createElement(i.Fragment, null, h(g)) : /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-bar-group", n),
    top: a,
    left: r
  }, g.map(function(v) {
    return /* @__PURE__ */ i.createElement(be, {
      key: "bar-group-" + v.index + "-" + v.x0,
      left: v.x0
    }, v.bars.map(function(f) {
      return /* @__PURE__ */ i.createElement(Pt, yr({
        key: "bar-group-bar-" + v.index + "-" + f.index + "-" + f.value + "-" + f.key,
        x: f.x,
        y: f.y,
        width: f.width,
        height: f.height,
        fill: f.color
      }, y));
    }));
  }));
}
function Ks(e) {
  return e == null ? void 0 : e[0];
}
function Is(e) {
  return e == null ? void 0 : e[1];
}
var Yd = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function Xd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Qd(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.x, c = e.y0, o = c === void 0 ? Ks : c, s = e.y1, u = s === void 0 ? Is : s, d = e.xScale, m = e.yScale, h = e.color, y = e.keys, p = e.value, g = e.order, v = e.offset, f = e.children, b = Xd(e, Yd), x = Ur();
  y && x.keys(y), p && Xe(x.value, p), g && x.order(Yr(g)), v && x.offset(Xr(v));
  var w = x(t), C = Zr(d), T = w.map(function(D, k) {
    var z = D.key;
    return {
      index: k,
      key: z,
      bars: D.map(function($, N) {
        var A = (m(o($)) || 0) - (m(u($)) || 0), P = m(u($)), L = "bandwidth" in d ? d(l($.data)) : Math.max((d(l($.data)) || 0) - C / 2);
        return {
          bar: $,
          key: z,
          index: N,
          height: A,
          width: C,
          x: L || 0,
          y: P || 0,
          color: h(D.key, N)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ i.createElement(i.Fragment, null, f(T)) : /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-bar-stack", n),
    top: a,
    left: r
  }, T.map(function(D) {
    return D.bars.map(function(k) {
      return /* @__PURE__ */ i.createElement(Pt, gr({
        key: "bar-stack-" + D.index + "-" + k.index,
        x: k.x,
        y: k.y,
        height: k.height,
        width: k.width,
        fill: k.color
      }, b));
    });
  }));
}
var Zd = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function Jd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Gd(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.y, c = e.x0, o = c === void 0 ? Ks : c, s = e.x1, u = s === void 0 ? Is : s, d = e.xScale, m = e.yScale, h = e.color, y = e.keys, p = e.value, g = e.order, v = e.offset, f = e.children, b = Jd(e, Zd), x = Ur();
  y && x.keys(y), p && Xe(x.value, p), g && x.order(Yr(g)), v && x.offset(Xr(v));
  var w = x(t), C = Zr(m), T = w.map(function(D, k) {
    var z = D.key;
    return {
      index: k,
      key: z,
      bars: D.map(function($, N) {
        var A = (d(u($)) || 0) - (d(o($)) || 0), P = d(o($)), L = "bandwidth" in m ? m(l($.data)) : Math.max((m(l($.data)) || 0) - A / 2);
        return {
          bar: $,
          key: z,
          index: N,
          height: C,
          width: A,
          x: P || 0,
          y: L || 0,
          color: h(D.key, N)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ i.createElement(i.Fragment, null, f(T)) : /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-bar-stack-horizontal", n),
    top: a,
    left: r
  }, T.map(function(D) {
    return D.bars.map(function(k) {
      return /* @__PURE__ */ i.createElement(Pt, xr({
        key: "bar-stack-" + D.index + "-" + k.index,
        x: k.x,
        y: k.y,
        height: k.height,
        width: k.width,
        fill: k.color
      }, b));
    });
  }));
}
class lo extends Map {
  constructor(t, n = nf) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [a, r] of t)
        this.set(a, r);
  }
  get(t) {
    return super.get(oo(this, t));
  }
  has(t) {
    return super.has(oo(this, t));
  }
  set(t, n) {
    return super.set(ef(this, t), n);
  }
  delete(t) {
    return super.delete(tf(this, t));
  }
}
function oo({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function ef({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function tf({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function nf(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function af(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var a = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, l = new Array(r); ++a < r; )
    l[a] = e + a * n;
  return l;
}
const so = Symbol("implicit");
function Jr() {
  var e = new lo(), t = [], n = [], a = so;
  function r(l) {
    let c = e.get(l);
    if (c === void 0) {
      if (a !== so)
        return a;
      e.set(l, c = t.push(l) - 1);
    }
    return n[c % n.length];
  }
  return r.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new lo();
    for (const c of l)
      e.has(c) || e.set(c, t.push(c) - 1);
    return r;
  }, r.range = function(l) {
    return arguments.length ? (n = Array.from(l), r) : n.slice();
  }, r.unknown = function(l) {
    return arguments.length ? (a = l, r) : a;
  }, r.copy = function() {
    return Jr(t, n).unknown(a);
  }, wi.apply(r, arguments), r;
}
function Gr() {
  var e = Jr().unknown(void 0), t = e.domain, n = e.range, a = 0, r = 1, l, c, o = !1, s = 0, u = 0, d = 0.5;
  delete e.unknown;
  function m() {
    var h = t().length, y = r < a, p = y ? r : a, g = y ? a : r;
    l = (g - p) / Math.max(1, h - s + u * 2), o && (l = Math.floor(l)), p += (g - p - l * (h - s)) * d, c = l * (1 - s), o && (p = Math.round(p), c = Math.round(c));
    var v = af(h).map(function(f) {
      return p + l * f;
    });
    return n(y ? v.reverse() : v);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), m()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([a, r] = h, a = +a, r = +r, m()) : [a, r];
  }, e.rangeRound = function(h) {
    return [a, r] = h, a = +a, r = +r, o = !0, m();
  }, e.bandwidth = function() {
    return c;
  }, e.step = function() {
    return l;
  }, e.round = function(h) {
    return arguments.length ? (o = !!h, m()) : o;
  }, e.padding = function(h) {
    return arguments.length ? (s = Math.min(1, u = +h), m()) : s;
  }, e.paddingInner = function(h) {
    return arguments.length ? (s = Math.min(1, h), m()) : s;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (u = +h, m()) : u;
  }, e.align = function(h) {
    return arguments.length ? (d = Math.max(0, Math.min(1, h)), m()) : d;
  }, e.copy = function() {
    return Gr(t(), [a, r]).round(o).paddingInner(s).paddingOuter(u).align(d);
  }, wi.apply(m(), arguments);
}
function js(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return js(t());
  }, e;
}
function rf() {
  return js(Gr.apply(null, arguments).paddingInner(1));
}
function qs(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, r = e[n], l = e[a], c;
  return l < r && (c = n, n = a, a = c, c = r, r = l, l = c), e[n] = t.floor(r), e[a] = t.ceil(l), e;
}
function co(e) {
  return Math.log(e);
}
function uo(e) {
  return Math.exp(e);
}
function lf(e) {
  return -Math.log(-e);
}
function of(e) {
  return -Math.exp(-e);
}
function sf(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function cf(e) {
  return e === 10 ? sf : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function uf(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function fo(e) {
  return (t, n) => -e(-t, n);
}
function df(e) {
  const t = e(co, uo), n = t.domain;
  let a = 10, r, l;
  function c() {
    return r = uf(a), l = cf(a), n()[0] < 0 ? (r = fo(r), l = fo(l), e(lf, of)) : e(co, uo), t;
  }
  return t.base = function(o) {
    return arguments.length ? (a = +o, c()) : a;
  }, t.domain = function(o) {
    return arguments.length ? (n(o), c()) : n();
  }, t.ticks = (o) => {
    const s = n();
    let u = s[0], d = s[s.length - 1];
    const m = d < u;
    m && ([u, d] = [d, u]);
    let h = r(u), y = r(d), p, g;
    const v = o == null ? 10 : +o;
    let f = [];
    if (!(a % 1) && y - h < v) {
      if (h = Math.floor(h), y = Math.ceil(y), u > 0) {
        for (; h <= y; ++h)
          for (p = 1; p < a; ++p)
            if (g = h < 0 ? p / l(-h) : p * l(h), !(g < u)) {
              if (g > d)
                break;
              f.push(g);
            }
      } else
        for (; h <= y; ++h)
          for (p = a - 1; p >= 1; --p)
            if (g = h > 0 ? p / l(-h) : p * l(h), !(g < u)) {
              if (g > d)
                break;
              f.push(g);
            }
      f.length * 2 < v && (f = jl(u, d, v));
    } else
      f = jl(h, y, Math.min(y - h, v)).map(l);
    return m ? f.reverse() : f;
  }, t.tickFormat = (o, s) => {
    if (o == null && (o = 10), s == null && (s = a === 10 ? "s" : ","), typeof s != "function" && (!(a % 1) && (s = Eu(s)).precision == null && (s.trim = !0), s = Au(s)), o === 1 / 0)
      return s;
    const u = Math.max(1, a * o / t.ticks().length);
    return (d) => {
      let m = d / l(Math.round(r(d)));
      return m * a < a - 0.5 && (m *= a), m <= u ? s(d) : "";
    };
  }, t.nice = () => n(qs(n(), {
    floor: (o) => l(Math.floor(r(o))),
    ceil: (o) => l(Math.ceil(r(o)))
  })), t;
}
function Us() {
  const e = df(bu()).domain([1, 10]);
  return e.copy = () => ps(e, Us()).base(e.base()), wi.apply(e, arguments), e;
}
const ai = bs(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ai.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? bs((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : ai);
ai.range;
function ff(e, t, n, a, r, l) {
  const c = [
    [ra, 1, La],
    [ra, 5, 5 * La],
    [ra, 15, 15 * La],
    [ra, 30, 30 * La],
    [l, 1, Oa],
    [l, 5, 5 * Oa],
    [l, 15, 15 * Oa],
    [l, 30, 30 * Oa],
    [r, 1, _a],
    [r, 3, 3 * _a],
    [r, 6, 6 * _a],
    [r, 12, 12 * _a],
    [a, 1, Ul],
    [a, 2, 2 * Ul],
    [n, 1, Cu],
    [t, 1, Yl],
    [t, 3, 3 * Yl],
    [e, 1, Fi]
  ];
  function o(u, d, m) {
    const h = d < u;
    h && ([u, d] = [d, u]);
    const y = m && typeof m.range == "function" ? m : s(u, d, m), p = y ? y.range(u, +d + 1) : [];
    return h ? p.reverse() : p;
  }
  function s(u, d, m) {
    const h = Math.abs(d - u) / m, y = Tu(([, , v]) => v).right(c, h);
    if (y === c.length)
      return e.every(ql(u / Fi, d / Fi, m));
    if (y === 0)
      return ai.every(Math.max(ql(u, d, m), 1));
    const [p, g] = c[h / c[y - 1][2] < c[y][2] / h ? y - 1 : y];
    return p.every(g);
  }
  return [o, s];
}
const [mf, hf] = ff(Es, xs, Ts, As, gs, ys);
function pf(e) {
  return new Date(e);
}
function yf(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ys(e, t, n, a, r, l, c, o, s, u) {
  var d = Su(), m = d.invert, h = d.domain, y = u(".%L"), p = u(":%S"), g = u("%I:%M"), v = u("%I %p"), f = u("%a %d"), b = u("%b %d"), x = u("%B"), w = u("%Y");
  function C(T) {
    return (s(T) < T ? y : o(T) < T ? p : c(T) < T ? g : l(T) < T ? v : a(T) < T ? r(T) < T ? f : b : n(T) < T ? x : w)(T);
  }
  return d.invert = function(T) {
    return new Date(m(T));
  }, d.domain = function(T) {
    return arguments.length ? h(Array.from(T, yf)) : h().map(pf);
  }, d.ticks = function(T) {
    var D = h();
    return e(D[0], D[D.length - 1], T ?? 10);
  }, d.tickFormat = function(T, D) {
    return D == null ? C : u(D);
  }, d.nice = function(T) {
    var D = h();
    return (!T || typeof T.range != "function") && (T = t(D[0], D[D.length - 1], T ?? 10)), T ? h(qs(D, T)) : d;
  }, d.copy = function() {
    return ps(d, Ys(e, t, n, a, r, l, c, o, s, u));
  }, d;
}
function gf() {
  return wi.apply(Ys(mf, hf, Es, xs, Ts, As, gs, ys, ra, du).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var xf = Ta("domain", "range", "reverse", "align", "padding", "round");
function mo(e) {
  return xf(Gr(), e);
}
var vf = Ta("domain", "range", "reverse", "align", "padding", "round");
function Rn(e) {
  return vf(rf(), e);
}
var bf = Ta("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function Ef(e) {
  return bf(gf(), e);
}
var Af = Ta("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Xs(e) {
  return Af(Us(), e);
}
var Tf = Ta("domain", "range", "reverse", "unknown");
function Sf(e) {
  return Tf(Jr(), e);
}
function kf(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function wf(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(a, r, l) {
    return t == null || l.length <= t || r % Math.round((l.length - 1) / t) === 0;
  });
}
function Cf(e) {
  return e == null ? void 0 : e.toString();
}
function Qs(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ho(e) {
  let t = e, n = e;
  e.length === 1 && (t = (c, o) => e(c) - o, n = Nf(e));
  function a(c, o, s, u) {
    for (s == null && (s = 0), u == null && (u = c.length); s < u; ) {
      const d = s + u >>> 1;
      n(c[d], o) < 0 ? s = d + 1 : u = d;
    }
    return s;
  }
  function r(c, o, s, u) {
    for (s == null && (s = 0), u == null && (u = c.length); s < u; ) {
      const d = s + u >>> 1;
      n(c[d], o) > 0 ? u = d : s = d + 1;
    }
    return s;
  }
  function l(c, o, s, u) {
    s == null && (s = 0), u == null && (u = c.length);
    const d = a(c, o, s, u - 1);
    return d > s && t(c[d - 1], o) > -t(c[d], o) ? d - 1 : d;
  }
  return { left: a, center: l, right: r };
}
function Nf(e) {
  return (t, n) => Qs(e(t), n);
}
function* Pf(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (a = +a) >= a && (yield a);
  }
}
function Lf(e, t) {
  let n = 0, a, r = 0, l = 0;
  if (t === void 0)
    for (let c of e)
      c != null && (c = +c) >= c && (a = c - r, r += a / ++n, l += a * (c - r));
  else {
    let c = -1;
    for (let o of e)
      (o = t(o, ++c, e)) != null && (o = +o) >= o && (a = o - r, r += a / ++n, l += a * (o - r));
  }
  if (n > 1)
    return l / (n - 1);
}
function Of(e, t) {
  const n = Lf(e, t);
  return n && Math.sqrt(n);
}
function oa(e, t) {
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
function sa(e, t) {
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
function Zs(e, t, n = 0, a = e.length - 1, r = Qs) {
  for (; a > n; ) {
    if (a - n > 600) {
      const s = a - n + 1, u = t - n + 1, d = Math.log(s), m = 0.5 * Math.exp(2 * d / 3), h = 0.5 * Math.sqrt(d * m * (s - m) / s) * (u - s / 2 < 0 ? -1 : 1), y = Math.max(n, Math.floor(t - u * m / s + h)), p = Math.min(a, Math.floor(t + (s - u) * m / s + h));
      Zs(e, t, y, p, r);
    }
    const l = e[t];
    let c = n, o = a;
    for (Jn(e, n, t), r(e[a], l) > 0 && Jn(e, n, a); c < o; ) {
      for (Jn(e, c, o), ++c, --o; r(e[c], l) < 0; )
        ++c;
      for (; r(e[o], l) > 0; )
        --o;
    }
    r(e[n], l) === 0 ? Jn(e, n, o) : (++o, Jn(e, o, a)), o <= t && (n = o + 1), t <= o && (a = o - 1);
  }
  return e;
}
function Jn(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function _f(e, t, n) {
  if (e = Float64Array.from(Pf(e, n)), !!(a = e.length)) {
    if ((t = +t) <= 0 || a < 2)
      return sa(e);
    if (t >= 1)
      return oa(e);
    var a, r = (a - 1) * t, l = Math.floor(r), c = oa(Zs(e, l).subarray(0, l + 1)), o = sa(e.subarray(l + 1));
    return c + (o - c) * (r - l);
  }
}
function Mf(e, t) {
  let n = 0, a = 0;
  if (t === void 0)
    for (let r of e)
      r != null && (r = +r) >= r && (++n, a += r);
  else {
    let r = -1;
    for (let l of e)
      (l = t(l, ++r, e)) != null && (l = +l) >= l && (++n, a += l);
  }
  if (n)
    return a / n;
}
function Df(e, t) {
  return _f(e, 0.5, t);
}
var bn = [], $f = function() {
  return bn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, zf = function() {
  return bn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, po = "ResizeObserver loop completed with undelivered notifications.", Rf = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: po
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = po), window.dispatchEvent(e);
}, xa;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(xa || (xa = {}));
var En = function(e) {
  return Object.freeze(e);
}, Js = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, En(this);
  }
  return e;
}(), Gs = function() {
  function e(t, n, a, r) {
    return this.x = t, this.y = n, this.width = a, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, En(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, r = t.top, l = t.right, c = t.bottom, o = t.left, s = t.width, u = t.height;
    return { x: n, y: a, top: r, right: l, bottom: c, left: o, width: s, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), el = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, ec = function(e) {
  if (el(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var r = e, l = r.offsetWidth, c = r.offsetHeight;
  return !(l || c || e.getClientRects().length);
}, yo = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, Ff = function(e) {
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
}, ca = typeof window < "u" ? window : {}, Da = /* @__PURE__ */ new WeakMap(), go = /auto|scroll/, Bf = /^tb|vertical/, Wf = /msie|trident/i.test(ca.navigator && ca.navigator.userAgent), Vt = function(e) {
  return parseFloat(e || "0");
}, Bn = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Js((n ? t : e) || 0, (n ? e : t) || 0);
}, xo = En({
  devicePixelContentBoxSize: Bn(),
  borderBoxSize: Bn(),
  contentBoxSize: Bn(),
  contentRect: new Gs(0, 0, 0, 0)
}), tc = function(e, t) {
  if (t === void 0 && (t = !1), Da.has(e) && !t)
    return Da.get(e);
  if (ec(e))
    return Da.set(e, xo), xo;
  var n = getComputedStyle(e), a = el(e) && e.ownerSVGElement && e.getBBox(), r = !Wf && n.boxSizing === "border-box", l = Bf.test(n.writingMode || ""), c = !a && go.test(n.overflowY || ""), o = !a && go.test(n.overflowX || ""), s = a ? 0 : Vt(n.paddingTop), u = a ? 0 : Vt(n.paddingRight), d = a ? 0 : Vt(n.paddingBottom), m = a ? 0 : Vt(n.paddingLeft), h = a ? 0 : Vt(n.borderTopWidth), y = a ? 0 : Vt(n.borderRightWidth), p = a ? 0 : Vt(n.borderBottomWidth), g = a ? 0 : Vt(n.borderLeftWidth), v = m + u, f = s + d, b = g + y, x = h + p, w = o ? e.offsetHeight - x - e.clientHeight : 0, C = c ? e.offsetWidth - b - e.clientWidth : 0, T = r ? v + b : 0, D = r ? f + x : 0, k = a ? a.width : Vt(n.width) - T - C, z = a ? a.height : Vt(n.height) - D - w, $ = k + v + C + b, N = z + f + w + x, A = En({
    devicePixelContentBoxSize: Bn(Math.round(k * devicePixelRatio), Math.round(z * devicePixelRatio), l),
    borderBoxSize: Bn($, N, l),
    contentBoxSize: Bn(k, z, l),
    contentRect: new Gs(m, s, k, z)
  });
  return Da.set(e, A), A;
}, nc = function(e, t, n) {
  var a = tc(e, n), r = a.borderBoxSize, l = a.contentBoxSize, c = a.devicePixelContentBoxSize;
  switch (t) {
    case xa.DEVICE_PIXEL_CONTENT_BOX:
      return c;
    case xa.BORDER_BOX:
      return r;
    default:
      return l;
  }
}, ac = function() {
  function e(t) {
    var n = tc(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = En([n.borderBoxSize]), this.contentBoxSize = En([n.contentBoxSize]), this.devicePixelContentBoxSize = En([n.devicePixelContentBoxSize]);
  }
  return e;
}(), ic = function(e) {
  if (ec(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Vf = function() {
  var e = 1 / 0, t = [];
  bn.forEach(function(c) {
    if (c.activeTargets.length !== 0) {
      var o = [];
      c.activeTargets.forEach(function(u) {
        var d = new ac(u.target), m = ic(u.target);
        o.push(d), u.lastReportedSize = nc(u.target, u.observedBox), m < e && (e = m);
      }), t.push(function() {
        c.callback.call(c.observer, o, c.observer);
      }), c.activeTargets.splice(0, c.activeTargets.length);
    }
  });
  for (var n = 0, a = t; n < a.length; n++) {
    var r = a[n];
    r();
  }
  return e;
}, vo = function(e) {
  bn.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(r) {
      r.isActive() && (ic(r.target) > e ? n.activeTargets.push(r) : n.skippedTargets.push(r));
    });
  });
}, Hf = function() {
  var e = 0;
  for (vo(e); $f(); )
    e = Vf(), vo(e);
  return zf() && Rf(), e > 0;
}, Vi, rc = [], Kf = function() {
  return rc.splice(0).forEach(function(e) {
    return e();
  });
}, If = function(e) {
  if (!Vi) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return Kf();
    }).observe(n, a), Vi = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  rc.push(e), Vi();
}, jf = function(e) {
  If(function() {
    requestAnimationFrame(e);
  });
}, qa = 0, qf = function() {
  return !!qa;
}, Uf = 250, Yf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, bo = [
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
], Eo = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Hi = !1, Xf = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = Uf), !Hi) {
      Hi = !0;
      var a = Eo(t);
      jf(function() {
        var r = !1;
        try {
          r = Hf();
        } finally {
          if (Hi = !1, t = a - Eo(), !qf())
            return;
          r ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, Yf);
    };
    document.body ? n() : ca.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), bo.forEach(function(n) {
      return ca.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), bo.forEach(function(n) {
      return ca.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), vr = new Xf(), Ao = function(e) {
  !qa && e > 0 && vr.start(), qa += e, !qa && vr.stop();
}, Qf = function(e) {
  return !el(e) && !Ff(e) && getComputedStyle(e).display === "inline";
}, Zf = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || xa.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = nc(this.target, this.observedBox, !0);
    return Qf(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Jf = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), $a = /* @__PURE__ */ new WeakMap(), To = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, za = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new Jf(t, n);
    $a.set(t, a);
  }, e.observe = function(t, n, a) {
    var r = $a.get(t), l = r.observationTargets.length === 0;
    To(r.observationTargets, n) < 0 && (l && bn.push(r), r.observationTargets.push(new Zf(n, a && a.box)), Ao(1), vr.schedule());
  }, e.unobserve = function(t, n) {
    var a = $a.get(t), r = To(a.observationTargets, n), l = a.observationTargets.length === 1;
    r >= 0 && (l && bn.splice(bn.indexOf(a), 1), a.observationTargets.splice(r, 1), Ao(-1));
  }, e.disconnect = function(t) {
    var n = this, a = $a.get(t);
    a.observationTargets.slice().forEach(function(r) {
      return n.unobserve(t, r.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), Gf = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    za.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!yo(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    za.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!yo(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    za.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    za.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const em = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: Gf,
  ResizeObserverEntry: ac,
  ResizeObserverSize: Js
}, Symbol.toStringTag, { value: "Module" })), tm = /* @__PURE__ */ Hr(em);
var nm = sc, Gt = oc(ms), am = oc(pu), _n = lm(F), im = tm, rm = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function lc(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (lc = function(r) {
    return r ? n : t;
  })(e);
}
function lm(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = lc(t);
  if (n && n.has(e))
    return n.get(e);
  var a = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var c = r ? Object.getOwnPropertyDescriptor(e, l) : null;
      c && (c.get || c.set) ? Object.defineProperty(a, l, c) : a[l] = e[l];
    }
  return a.default = e, n && n.set(e, a), a;
}
function oc(e) {
  return e && e.__esModule ? e : { default: e };
}
function ii() {
  return ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ii.apply(this, arguments);
}
function om(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var sm = [];
function sc(e) {
  var t = e.className, n = e.children, a = e.debounceTime, r = a === void 0 ? 300 : a, l = e.ignoreDimensions, c = l === void 0 ? sm : l, o = e.parentSizeStyles, s = o === void 0 ? {
    width: "100%",
    height: "100%"
  } : o, u = e.enableDebounceLeadingCall, d = u === void 0 ? !0 : u, m = om(e, rm), h = (0, _n.useRef)(null), y = (0, _n.useRef)(0), p = (0, _n.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), g = p[0], v = p[1], f = (0, _n.useMemo)(function() {
    var b = Array.isArray(c) ? c : [c];
    return (0, am.default)(function(x) {
      v(function(w) {
        var C = Object.keys(w), T = C.filter(function(k) {
          return w[k] !== x[k];
        }), D = T.every(function(k) {
          return b.includes(k);
        });
        return D ? w : x;
      });
    }, r, {
      leading: d
    });
  }, [r, d, c]);
  return (0, _n.useEffect)(function() {
    var b = new im.ResizeObserver(function(x) {
      x === void 0 && (x = []), x.forEach(function(w) {
        var C = w.contentRect, T = C.left, D = C.top, k = C.width, z = C.height;
        y.current = window.requestAnimationFrame(function() {
          f({
            width: k,
            height: z,
            top: D,
            left: T
          });
        });
      });
    });
    return h.current && b.observe(h.current), function() {
      window.cancelAnimationFrame(y.current), b.disconnect(), f != null && f.cancel && f.cancel();
    };
  }, [f]), /* @__PURE__ */ _n.default.createElement("div", ii({
    style: s,
    ref: h,
    className: t
  }, m), n(ii({}, g, {
    ref: h.current,
    resize: f
  })));
}
sc.propTypes = {
  className: Gt.default.string,
  debounceTime: Gt.default.number,
  enableDebounceLeadingCall: Gt.default.bool,
  ignoreDimensions: Gt.default.oneOfType([Gt.default.any, Gt.default.arrayOf(Gt.default.any)]),
  children: Gt.default.func.isRequired
};
var Ki = /* @__PURE__ */ new Date(), Ii = /* @__PURE__ */ new Date();
function Zt(e, t, n, a) {
  function r(l) {
    return e(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
  }
  return r.floor = function(l) {
    return e(l = /* @__PURE__ */ new Date(+l)), l;
  }, r.ceil = function(l) {
    return e(l = new Date(l - 1)), t(l, 1), e(l), l;
  }, r.round = function(l) {
    var c = r(l), o = r.ceil(l);
    return l - c < o - l ? c : o;
  }, r.offset = function(l, c) {
    return t(l = /* @__PURE__ */ new Date(+l), c == null ? 1 : Math.floor(c)), l;
  }, r.range = function(l, c, o) {
    var s = [], u;
    if (l = r.ceil(l), o = o == null ? 1 : Math.floor(o), !(l < c) || !(o > 0))
      return s;
    do
      s.push(u = /* @__PURE__ */ new Date(+l)), t(l, o), e(l);
    while (u < l && l < c);
    return s;
  }, r.filter = function(l) {
    return Zt(function(c) {
      if (c >= c)
        for (; e(c), !l(c); )
          c.setTime(c - 1);
    }, function(c, o) {
      if (c >= c)
        if (o < 0)
          for (; ++o <= 0; )
            for (; t(c, -1), !l(c); )
              ;
        else
          for (; --o >= 0; )
            for (; t(c, 1), !l(c); )
              ;
    });
  }, n && (r.count = function(l, c) {
    return Ki.setTime(+l), Ii.setTime(+c), e(Ki), e(Ii), Math.floor(n(Ki, Ii));
  }, r.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? r.filter(a ? function(c) {
      return a(c) % l === 0;
    } : function(c) {
      return r.count(0, c) % l === 0;
    }) : r;
  }), r;
}
const cm = 1e3, tl = cm * 60, um = tl * 60, nl = um * 24, cc = nl * 7;
var uc = Zt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * tl) / nl,
  (e) => e.getDate() - 1
);
const dc = uc;
uc.range;
function wn(e) {
  return Zt(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * tl) / cc;
  });
}
var fc = wn(0), ri = wn(1), dm = wn(2), fm = wn(3), In = wn(4), mm = wn(5), hm = wn(6);
fc.range;
ri.range;
dm.range;
fm.range;
In.range;
mm.range;
hm.range;
var al = Zt(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
al.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Zt(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const va = al;
al.range;
var mc = Zt(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / nl;
}, function(e) {
  return e.getUTCDate() - 1;
});
const hc = mc;
mc.range;
function Cn(e) {
  return Zt(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / cc;
  });
}
var pc = Cn(0), li = Cn(1), pm = Cn(2), ym = Cn(3), jn = Cn(4), gm = Cn(5), xm = Cn(6);
pc.range;
li.range;
pm.range;
ym.range;
jn.range;
gm.range;
xm.range;
var il = Zt(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
il.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Zt(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const ba = il;
il.range;
function ji(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function qi(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Gn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function vm(e) {
  var t = e.dateTime, n = e.date, a = e.time, r = e.periods, l = e.days, c = e.shortDays, o = e.months, s = e.shortMonths, u = ea(r), d = ta(r), m = ea(l), h = ta(l), y = ea(c), p = ta(c), g = ea(o), v = ta(o), f = ea(s), b = ta(s), x = {
    a: R,
    A: q,
    b: j,
    B: I,
    c: null,
    d: Po,
    e: Po,
    f: Hm,
    g: Jm,
    G: eh,
    H: Bm,
    I: Wm,
    j: Vm,
    L: yc,
    m: Km,
    M: Im,
    p: G,
    q: Y,
    Q: _o,
    s: Mo,
    S: jm,
    u: qm,
    U: Um,
    V: Ym,
    w: Xm,
    W: Qm,
    x: null,
    X: null,
    y: Zm,
    Y: Gm,
    Z: th,
    "%": Oo
  }, w = {
    a: ce,
    A: ue,
    b: ge,
    B: ke,
    c: null,
    d: Lo,
    e: Lo,
    f: rh,
    g: ph,
    G: gh,
    H: nh,
    I: ah,
    j: ih,
    L: xc,
    m: lh,
    M: oh,
    p: Te,
    q: Se,
    Q: _o,
    s: Mo,
    S: sh,
    u: ch,
    U: uh,
    V: dh,
    w: fh,
    W: mh,
    x: null,
    X: null,
    y: hh,
    Y: yh,
    Z: xh,
    "%": Oo
  }, C = {
    a: $,
    A: N,
    b: A,
    B: P,
    c: L,
    d: Co,
    e: Co,
    f: $m,
    g: wo,
    G: ko,
    H: No,
    I: No,
    j: Om,
    L: Dm,
    m: Lm,
    M: _m,
    p: z,
    q: Pm,
    Q: Rm,
    s: Fm,
    S: Mm,
    u: Sm,
    U: km,
    V: wm,
    w: Tm,
    W: Cm,
    x: S,
    X: M,
    y: wo,
    Y: ko,
    Z: Nm,
    "%": zm
  };
  x.x = T(n, x), x.X = T(a, x), x.c = T(t, x), w.x = T(n, w), w.X = T(a, w), w.c = T(t, w);
  function T(U, K) {
    return function(ee) {
      var B = [], de = -1, le = 0, fe = U.length, ae, he, Oe;
      for (ee instanceof Date || (ee = /* @__PURE__ */ new Date(+ee)); ++de < fe; )
        U.charCodeAt(de) === 37 && (B.push(U.slice(le, de)), (he = So[ae = U.charAt(++de)]) != null ? ae = U.charAt(++de) : he = ae === "e" ? " " : "0", (Oe = K[ae]) && (ae = Oe(ee, he)), B.push(ae), le = de + 1);
      return B.push(U.slice(le, de)), B.join("");
    };
  }
  function D(U, K) {
    return function(ee) {
      var B = Gn(1900, void 0, 1), de = k(B, U, ee += "", 0), le, fe;
      if (de != ee.length)
        return null;
      if ("Q" in B)
        return new Date(B.Q);
      if ("s" in B)
        return new Date(B.s * 1e3 + ("L" in B ? B.L : 0));
      if (K && !("Z" in B) && (B.Z = 0), "p" in B && (B.H = B.H % 12 + B.p * 12), B.m === void 0 && (B.m = "q" in B ? B.q : 0), "V" in B) {
        if (B.V < 1 || B.V > 53)
          return null;
        "w" in B || (B.w = 1), "Z" in B ? (le = qi(Gn(B.y, 0, 1)), fe = le.getUTCDay(), le = fe > 4 || fe === 0 ? li.ceil(le) : li(le), le = hc.offset(le, (B.V - 1) * 7), B.y = le.getUTCFullYear(), B.m = le.getUTCMonth(), B.d = le.getUTCDate() + (B.w + 6) % 7) : (le = ji(Gn(B.y, 0, 1)), fe = le.getDay(), le = fe > 4 || fe === 0 ? ri.ceil(le) : ri(le), le = dc.offset(le, (B.V - 1) * 7), B.y = le.getFullYear(), B.m = le.getMonth(), B.d = le.getDate() + (B.w + 6) % 7);
      } else
        ("W" in B || "U" in B) && ("w" in B || (B.w = "u" in B ? B.u % 7 : "W" in B ? 1 : 0), fe = "Z" in B ? qi(Gn(B.y, 0, 1)).getUTCDay() : ji(Gn(B.y, 0, 1)).getDay(), B.m = 0, B.d = "W" in B ? (B.w + 6) % 7 + B.W * 7 - (fe + 5) % 7 : B.w + B.U * 7 - (fe + 6) % 7);
      return "Z" in B ? (B.H += B.Z / 100 | 0, B.M += B.Z % 100, qi(B)) : ji(B);
    };
  }
  function k(U, K, ee, B) {
    for (var de = 0, le = K.length, fe = ee.length, ae, he; de < le; ) {
      if (B >= fe)
        return -1;
      if (ae = K.charCodeAt(de++), ae === 37) {
        if (ae = K.charAt(de++), he = C[ae in So ? K.charAt(de++) : ae], !he || (B = he(U, ee, B)) < 0)
          return -1;
      } else if (ae != ee.charCodeAt(B++))
        return -1;
    }
    return B;
  }
  function z(U, K, ee) {
    var B = u.exec(K.slice(ee));
    return B ? (U.p = d.get(B[0].toLowerCase()), ee + B[0].length) : -1;
  }
  function $(U, K, ee) {
    var B = y.exec(K.slice(ee));
    return B ? (U.w = p.get(B[0].toLowerCase()), ee + B[0].length) : -1;
  }
  function N(U, K, ee) {
    var B = m.exec(K.slice(ee));
    return B ? (U.w = h.get(B[0].toLowerCase()), ee + B[0].length) : -1;
  }
  function A(U, K, ee) {
    var B = f.exec(K.slice(ee));
    return B ? (U.m = b.get(B[0].toLowerCase()), ee + B[0].length) : -1;
  }
  function P(U, K, ee) {
    var B = g.exec(K.slice(ee));
    return B ? (U.m = v.get(B[0].toLowerCase()), ee + B[0].length) : -1;
  }
  function L(U, K, ee) {
    return k(U, t, K, ee);
  }
  function S(U, K, ee) {
    return k(U, n, K, ee);
  }
  function M(U, K, ee) {
    return k(U, a, K, ee);
  }
  function R(U) {
    return c[U.getDay()];
  }
  function q(U) {
    return l[U.getDay()];
  }
  function j(U) {
    return s[U.getMonth()];
  }
  function I(U) {
    return o[U.getMonth()];
  }
  function G(U) {
    return r[+(U.getHours() >= 12)];
  }
  function Y(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function ce(U) {
    return c[U.getUTCDay()];
  }
  function ue(U) {
    return l[U.getUTCDay()];
  }
  function ge(U) {
    return s[U.getUTCMonth()];
  }
  function ke(U) {
    return o[U.getUTCMonth()];
  }
  function Te(U) {
    return r[+(U.getUTCHours() >= 12)];
  }
  function Se(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function(U) {
      var K = T(U += "", x);
      return K.toString = function() {
        return U;
      }, K;
    },
    parse: function(U) {
      var K = D(U += "", !1);
      return K.toString = function() {
        return U;
      }, K;
    },
    utcFormat: function(U) {
      var K = T(U += "", w);
      return K.toString = function() {
        return U;
      }, K;
    },
    utcParse: function(U) {
      var K = D(U += "", !0);
      return K.toString = function() {
        return U;
      }, K;
    }
  };
}
var So = { "-": "", _: " ", 0: "0" }, dt = /^\s*\d+/, bm = /^%/, Em = /[\\^$*+?|[\]().{}]/g;
function Ve(e, t, n) {
  var a = e < 0 ? "-" : "", r = (a ? -e : e) + "", l = r.length;
  return a + (l < n ? new Array(n - l + 1).join(t) + r : r);
}
function Am(e) {
  return e.replace(Em, "\\$&");
}
function ea(e) {
  return new RegExp("^(?:" + e.map(Am).join("|") + ")", "i");
}
function ta(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Tm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Sm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function km(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function wm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Cm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function ko(e, t, n) {
  var a = dt.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function wo(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Nm(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Pm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Lm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Co(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Om(e, t, n) {
  var a = dt.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function No(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function _m(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Mm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Dm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function $m(e, t, n) {
  var a = dt.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function zm(e, t, n) {
  var a = bm.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Rm(e, t, n) {
  var a = dt.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Fm(e, t, n) {
  var a = dt.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Po(e, t) {
  return Ve(e.getDate(), t, 2);
}
function Bm(e, t) {
  return Ve(e.getHours(), t, 2);
}
function Wm(e, t) {
  return Ve(e.getHours() % 12 || 12, t, 2);
}
function Vm(e, t) {
  return Ve(1 + dc.count(va(e), e), t, 3);
}
function yc(e, t) {
  return Ve(e.getMilliseconds(), t, 3);
}
function Hm(e, t) {
  return yc(e, t) + "000";
}
function Km(e, t) {
  return Ve(e.getMonth() + 1, t, 2);
}
function Im(e, t) {
  return Ve(e.getMinutes(), t, 2);
}
function jm(e, t) {
  return Ve(e.getSeconds(), t, 2);
}
function qm(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Um(e, t) {
  return Ve(fc.count(va(e) - 1, e), t, 2);
}
function gc(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? In(e) : In.ceil(e);
}
function Ym(e, t) {
  return e = gc(e), Ve(In.count(va(e), e) + (va(e).getDay() === 4), t, 2);
}
function Xm(e) {
  return e.getDay();
}
function Qm(e, t) {
  return Ve(ri.count(va(e) - 1, e), t, 2);
}
function Zm(e, t) {
  return Ve(e.getFullYear() % 100, t, 2);
}
function Jm(e, t) {
  return e = gc(e), Ve(e.getFullYear() % 100, t, 2);
}
function Gm(e, t) {
  return Ve(e.getFullYear() % 1e4, t, 4);
}
function eh(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? In(e) : In.ceil(e), Ve(e.getFullYear() % 1e4, t, 4);
}
function th(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ve(t / 60 | 0, "0", 2) + Ve(t % 60, "0", 2);
}
function Lo(e, t) {
  return Ve(e.getUTCDate(), t, 2);
}
function nh(e, t) {
  return Ve(e.getUTCHours(), t, 2);
}
function ah(e, t) {
  return Ve(e.getUTCHours() % 12 || 12, t, 2);
}
function ih(e, t) {
  return Ve(1 + hc.count(ba(e), e), t, 3);
}
function xc(e, t) {
  return Ve(e.getUTCMilliseconds(), t, 3);
}
function rh(e, t) {
  return xc(e, t) + "000";
}
function lh(e, t) {
  return Ve(e.getUTCMonth() + 1, t, 2);
}
function oh(e, t) {
  return Ve(e.getUTCMinutes(), t, 2);
}
function sh(e, t) {
  return Ve(e.getUTCSeconds(), t, 2);
}
function ch(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function uh(e, t) {
  return Ve(pc.count(ba(e) - 1, e), t, 2);
}
function vc(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? jn(e) : jn.ceil(e);
}
function dh(e, t) {
  return e = vc(e), Ve(jn.count(ba(e), e) + (ba(e).getUTCDay() === 4), t, 2);
}
function fh(e) {
  return e.getUTCDay();
}
function mh(e, t) {
  return Ve(li.count(ba(e) - 1, e), t, 2);
}
function hh(e, t) {
  return Ve(e.getUTCFullYear() % 100, t, 2);
}
function ph(e, t) {
  return e = vc(e), Ve(e.getUTCFullYear() % 100, t, 2);
}
function yh(e, t) {
  return Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function gh(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? jn(e) : jn.ceil(e), Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function xh() {
  return "+0000";
}
function Oo() {
  return "%";
}
function _o(e) {
  return +e;
}
function Mo(e) {
  return Math.floor(+e / 1e3);
}
var Mn, bc, Ec;
vh({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function vh(e) {
  return Mn = vm(e), bc = Mn.format, Ec = Mn.parse, Mn.utcFormat, Mn.utcParse, Mn;
}
const ze = F.createContext({}), Fe = {
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
function bh(e, t) {
  return t === void 0 && (t = !0), (n) => (Fe.arr(n) ? n : Object.keys(n)).reduce((a, r) => {
    const l = t ? r[0].toLowerCase() + r.substring(1) : r;
    return a[l] = e(l), a;
  }, e);
}
function Ac() {
  const e = F.useState(!1), t = e[1];
  return F.useCallback(() => t((a) => !a), []);
}
function mn(e, t) {
  return Fe.und(e) || Fe.nul(e) ? t : e;
}
function Fn(e) {
  return Fe.und(e) ? [] : Fe.arr(e) ? e : [e];
}
function Dt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return Fe.fun(e) ? e(...n) : e;
}
function Eh(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, jt(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Ui(e) {
  const t = Eh(e);
  if (Fe.und(t))
    return Ue({
      to: t
    }, e);
  const n = Object.keys(e).reduce((a, r) => Fe.und(t[r]) ? Ue({}, a, {
    [r]: e[r]
  }) : a, {});
  return Ue({
    to: t
  }, n);
}
function Ah(e, t) {
  return t && (Fe.fun(t) ? t(e) : Fe.obj(t) && (t.current = e)), e;
}
class $t {
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
class br extends $t {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof $t && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof $t && t.removeChild(this));
  }
}
class Tc extends $t {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof $t && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof $t && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const n = {};
    for (const a in this.payload) {
      const r = this.payload[a];
      t && !(r instanceof $t) || (n[a] = r instanceof $t ? r[t ? "getAnimatedValue" : "getValue"]() : r);
    }
    return n;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let rl;
function Th(e, t) {
  rl = {
    fn: e,
    transform: t
  };
}
let Sc;
function Sh(e) {
  Sc = e;
}
let kc = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, oi;
function kh(e) {
  oi = e;
}
let wc = () => Date.now(), wh = (e) => e.current, Cc;
function Ch(e) {
  Cc = e;
}
class Nh extends Tc {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? Ue({}, t, {
      style: Cc(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const Ph = (e) => Fe.fun(e) && !(e.prototype instanceof i.Component), Lh = (e) => F.forwardRef((n, a) => {
  const r = Ac(), l = F.useRef(!0), c = F.useRef(null), o = F.useRef(null), s = F.useCallback((h) => {
    const y = c.current, p = () => {
      let g = !1;
      o.current && (g = rl.fn(o.current, c.current.getAnimatedValue())), (!o.current || g === !1) && r();
    };
    c.current = new Nh(h, p), y && y.detach();
  }, []);
  F.useEffect(() => () => {
    l.current = !1, c.current && c.current.detach();
  }, []), F.useImperativeHandle(a, () => wh(o)), s(n);
  const u = c.current.getValue();
  u.scrollTop, u.scrollLeft;
  const d = jt(u, ["scrollTop", "scrollLeft"]), m = Ph(e) ? void 0 : (h) => o.current = Ah(h, a);
  return i.createElement(e, Ue({}, d, {
    ref: m
  }));
});
let ua = !1;
const An = /* @__PURE__ */ new Set(), Nc = () => {
  if (!ua)
    return !1;
  let e = wc();
  for (let t of An) {
    let n = !1;
    for (let a = 0; a < t.configs.length; a++) {
      let r = t.configs[a], l, c;
      for (let o = 0; o < r.animatedValues.length; o++) {
        let s = r.animatedValues[o];
        if (s.done)
          continue;
        let u = r.fromValues[o], d = r.toValues[o], m = s.lastPosition, h = d instanceof $t, y = Array.isArray(r.initialVelocity) ? r.initialVelocity[o] : r.initialVelocity;
        if (h && (d = d.getValue()), r.immediate) {
          s.setValue(d), s.done = !0;
          continue;
        }
        if (typeof u == "string" || typeof d == "string") {
          s.setValue(d), s.done = !0;
          continue;
        }
        if (r.duration !== void 0)
          m = u + r.easing((e - s.startTime) / r.duration) * (d - u), l = e >= s.startTime + r.duration;
        else if (r.decay)
          m = u + y / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - s.startTime))), l = Math.abs(s.lastPosition - m) < 0.1, l && (d = m);
        else {
          c = s.lastTime !== void 0 ? s.lastTime : e, y = s.lastVelocity !== void 0 ? s.lastVelocity : r.initialVelocity, e > c + 64 && (c = e);
          let p = Math.floor(e - c);
          for (let b = 0; b < p; ++b) {
            let x = -r.tension * (m - d), w = -r.friction * y, C = (x + w) / r.mass;
            y = y + C * 1 / 1e3, m = m + y * 1 / 1e3;
          }
          let g = r.clamp && r.tension !== 0 ? u < d ? m > d : m < d : !1, v = Math.abs(y) <= r.precision, f = r.tension !== 0 ? Math.abs(d - m) <= r.precision : !0;
          l = g || v && f, s.lastVelocity = y, s.lastTime = e;
        }
        h && !r.toValues[o].done && (l = !1), l ? (s.value !== d && (m = d), s.done = !0) : n = !0, s.setValue(m), s.lastPosition = m;
      }
      t.props.onFrame && (t.values[r.name] = r.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (An.delete(t), t.stop(!0));
  }
  return An.size ? kc(Nc) : ua = !1, ua;
}, Oh = (e) => {
  An.has(e) || An.add(e), ua || (ua = !0, kc(Nc));
}, _h = (e) => {
  An.has(e) && An.delete(e);
};
function si(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return si({
      range: e,
      output: t,
      extrapolate: n
    });
  if (oi && typeof e.output[0] == "string")
    return oi(e);
  const a = e, r = a.output, l = a.range || [0, 1], c = a.extrapolateLeft || a.extrapolate || "extend", o = a.extrapolateRight || a.extrapolate || "extend", s = a.easing || ((u) => u);
  return (u) => {
    const d = Dh(u, l);
    return Mh(u, l[d], l[d + 1], r[d], r[d + 1], s, c, o, a.map);
  };
}
function Mh(e, t, n, a, r, l, c, o, s) {
  let u = s ? s(e) : e;
  if (u < t) {
    if (c === "identity")
      return u;
    c === "clamp" && (u = t);
  }
  if (u > n) {
    if (o === "identity")
      return u;
    o === "clamp" && (u = n);
  }
  return a === r ? a : t === n ? e <= t ? a : r : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = l(u), a === -1 / 0 ? u = -u : r === 1 / 0 ? u = u + a : u = u * (r - a) + a, u);
}
function Dh(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class qn extends br {
  constructor(t, n, a, r) {
    super(), this.calc = void 0, this.payload = t instanceof br && !(t instanceof qn) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = si(n, a, r);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, a) {
    this.calc = si(t, n, a);
  }
  interpolate(t, n, a) {
    return new qn(this, t, n, a);
  }
}
const $h = (e, t, n) => e && new qn(e, t, n);
function Pc(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => Pc(n, t));
}
class Er extends $t {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(a, r) {
      r === void 0 && (r = !0), n.value = a, r && n.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && Pc(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, n, a) {
    return new qn(this, t, n, a);
  }
}
class zh extends br {
  constructor(t) {
    super(), this.payload = t.map((n) => new Er(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((a, r) => this.payload[r].setValue(a, n)) : this.payload.forEach((a) => a.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new qn(this, t, n);
  }
}
let Rh = 0;
class Fh {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Rh++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = Ui(t), a = n.delay, r = a === void 0 ? 0 : a, l = n.to, c = jt(n, ["delay", "to"]);
    if (Fe.arr(l) || Fe.fun(l))
      this.queue.push(Ue({}, c, {
        delay: r,
        to: l
      }));
    else if (l) {
      let o = {};
      Object.entries(l).forEach((s) => {
        let u = s[0], d = s[1];
        const m = Ue({
          to: {
            [u]: d
          },
          delay: Dt(r, u)
        }, c), h = o[m.delay] && o[m.delay].to;
        o[m.delay] = Ue({}, o[m.delay], m, {
          to: Ue({}, h, m.to)
        });
      }), this.queue = Object.values(o);
    }
    return this.queue = this.queue.sort((o, s) => o.delay - s.delay), this.diff(c), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((r) => {
        let l = r.from, c = l === void 0 ? {} : l, o = r.to, s = o === void 0 ? {} : o;
        Fe.obj(c) && (this.merged = Ue({}, c, this.merged)), Fe.obj(s) && (this.merged = Ue({}, this.merged, s));
      });
      const n = this.local = ++this.guid, a = this.localQueue = this.queue;
      this.queue = [], a.forEach((r, l) => {
        let c = r.delay, o = jt(r, ["delay"]);
        const s = (d) => {
          l === a.length - 1 && n === this.guid && d && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let u = Fe.arr(o.to) || Fe.fun(o.to);
        c ? setTimeout(() => {
          n === this.guid && (u ? this.runAsync(o, s) : this.diff(o).start(s));
        }, c) : u ? this.runAsync(o, s) : this.diff(o).start(s);
      });
    } else
      Fe.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Oh(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && _h(this), this;
  }
  runAsync(t, n) {
    var a = this;
    t.delay;
    let r = jt(t, ["delay"]);
    const l = this.local;
    let c = Promise.resolve(void 0);
    if (Fe.arr(r.to))
      for (let o = 0; o < r.to.length; o++) {
        const s = o, u = Ue({}, r, Ui(r.to[s]));
        Fe.arr(u.config) && (u.config = u.config[s]), c = c.then(() => {
          if (l === this.guid)
            return new Promise((d) => this.diff(u).start(d));
        });
      }
    else if (Fe.fun(r.to)) {
      let o = 0, s;
      c = c.then(() => r.to(
        // next(props)
        (u) => {
          const d = Ue({}, r, Ui(u));
          if (Fe.arr(d.config) && (d.config = d.config[o]), o++, l === this.guid)
            return s = new Promise((m) => this.diff(d).start(m));
        },
        // cancel()
        function(u) {
          return u === void 0 && (u = !0), a.stop(u);
        }
      ).then(() => s));
    }
    c.then(n);
  }
  diff(t) {
    this.props = Ue({}, this.props, t);
    let n = this.props, a = n.from, r = a === void 0 ? {} : a, l = n.to, c = l === void 0 ? {} : l, o = n.config, s = o === void 0 ? {} : o, u = n.reverse, d = n.attach, m = n.reset, h = n.immediate;
    if (u) {
      var y = [c, r];
      r = y[0], c = y[1];
    }
    this.merged = Ue({}, r, this.merged, c), this.hasChanged = !1;
    let p = d && d(this);
    if (this.animations = Object.entries(this.merged).reduce((g, v) => {
      let f = v[0], b = v[1], x = g[f] || {};
      const w = Fe.num(b), C = Fe.str(b) && !b.startsWith("#") && !/\d/.test(b) && !Sc[b], T = Fe.arr(b), D = !w && !T && !C;
      let k = Fe.und(r[f]) ? b : r[f], z = w || T || C ? b : 1, $ = Dt(s, f);
      p && (z = p.animations[f].parent);
      let N = x.parent, A = x.interpolation, P = Fn(p ? z.getPayload() : z), L, S = b;
      D && (S = oi({
        range: [0, 1],
        output: [b, b]
      })(1));
      let M = A && A.getValue();
      const q = !Fe.und(N) && x.animatedValues.some((Y) => !Y.done), j = !Fe.equ(S, M), I = !Fe.equ(S, x.previous), G = !Fe.equ($, x.config);
      if (m || I && j || G) {
        if (w || C)
          N = A = x.parent || new Er(k);
        else if (T)
          N = A = x.parent || new zh(k);
        else if (D) {
          let Y = x.interpolation && x.interpolation.calc(x.parent.value);
          Y = Y !== void 0 && !m ? Y : k, x.parent ? (N = x.parent, N.setValue(0, !1)) : N = new Er(0);
          const ce = {
            output: [Y, b]
          };
          x.interpolation ? (A = x.interpolation, x.interpolation.updateConfig(ce)) : A = N.interpolate(ce);
        }
        return P = Fn(p ? z.getPayload() : z), L = Fn(N.getPayload()), m && !D && N.setValue(k, !1), this.hasChanged = !0, L.forEach((Y) => {
          Y.startPosition = Y.value, Y.lastPosition = Y.value, Y.lastVelocity = q ? Y.lastVelocity : void 0, Y.lastTime = q ? Y.lastTime : void 0, Y.startTime = wc(), Y.done = !1, Y.animatedStyles.clear();
        }), Dt(h, f) && N.setValue(D ? z : b, !1), Ue({}, g, {
          [f]: Ue({}, x, {
            name: f,
            parent: N,
            interpolation: A,
            animatedValues: L,
            toValues: P,
            previous: S,
            config: $,
            fromValues: Fn(N.getValue()),
            immediate: Dt(h, f),
            initialVelocity: mn($.velocity, 0),
            clamp: mn($.clamp, !1),
            precision: mn($.precision, 0.01),
            tension: mn($.tension, 170),
            friction: mn($.friction, 26),
            mass: mn($.mass, 1),
            duration: $.duration,
            easing: mn($.easing, (Y) => Y),
            decay: $.decay
          })
        });
      } else
        return j ? g : (D && (N.setValue(1, !1), A.updateConfig({
          output: [S, S]
        })), N.done = !0, this.hasChanged = !0, Ue({}, g, {
          [f]: Ue({}, g[f], {
            previous: S
          })
        }));
    }, this.animations), this.hasChanged) {
      this.configs = Object.values(this.animations), this.values = {}, this.interpolations = {};
      for (let g in this.animations)
        this.interpolations[g] = this.animations[g].interpolation, this.values[g] = this.animations[g].interpolation.getValue();
    }
    return this;
  }
  destroy() {
    this.stop(), this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.local = 0;
  }
}
let Bh = 0;
const Ua = "enter", Yi = "leave", Xi = "update", Wh = (e, t) => (typeof t == "function" ? e.map(t) : Fn(t)).map(String), Ar = (e) => {
  let t = e.items, n = e.keys, a = n === void 0 ? (l) => l : n, r = jt(e, ["items", "keys"]);
  return t = Fn(t !== void 0 ? t : null), Ue({
    items: t,
    keys: Wh(t, a)
  }, r);
};
function Vh(e, t, n) {
  const a = Ue({
    items: e,
    keys: t || ((b) => b)
  }, n), r = Ar(a), l = r.lazy, c = l === void 0 ? !1 : l;
  r.unique;
  const o = r.reset, s = o === void 0 ? !1 : o;
  r.enter, r.leave, r.update;
  const u = r.onDestroyed;
  r.keys, r.items;
  const d = r.onFrame, m = r.onRest, h = r.onStart, y = r.ref, p = jt(r, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), g = Ac(), v = F.useRef(!1), f = F.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!a.ref,
    instances: !v.current && /* @__PURE__ */ new Map(),
    forceUpdate: g
  });
  return F.useImperativeHandle(a.ref, () => ({
    start: () => Promise.all(Array.from(f.current.instances).map((b) => {
      let x = b[1];
      return new Promise((w) => x.start(w));
    })),
    stop: (b) => Array.from(f.current.instances).forEach((x) => x[1].stop(b)),
    get controllers() {
      return Array.from(f.current.instances).map((b) => b[1]);
    }
  })), f.current = Hh(f.current, a), f.current.changed && f.current.transitions.forEach((b) => {
    const x = b.slot, w = b.from, C = b.to, T = b.config, D = b.trail, k = b.key, z = b.item;
    f.current.instances.has(k) || f.current.instances.set(k, new Fh());
    const $ = f.current.instances.get(k), N = Ue({}, p, {
      to: C,
      from: w,
      config: T,
      ref: y,
      onRest: (A) => {
        f.current.mounted && (b.destroyed && (!y && !c && Do(f, k), u && u(z)), !Array.from(f.current.instances).some((S) => !S[1].idle) && (y || c) && f.current.deleted.length > 0 && Do(f), m && m(z, x, A));
      },
      onStart: h && (() => h(z, x)),
      onFrame: d && ((A) => d(z, x, A)),
      delay: D,
      reset: s && x === Ua
      // Update controller
    });
    $.update(N), f.current.paused || $.start();
  }), F.useEffect(() => (f.current.mounted = v.current = !0, () => {
    f.current.mounted = v.current = !1, Array.from(f.current.instances).map((b) => b[1].destroy()), f.current.instances.clear();
  }), []), f.current.transitions.map((b) => {
    let x = b.item, w = b.slot, C = b.key;
    return {
      item: x,
      key: C,
      state: w,
      props: f.current.instances.get(C).getValues()
    };
  });
}
function Do(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let r = a.key;
    const l = (c) => c.key !== r;
    (Fe.und(t) || t === r) && (e.current.instances.delete(r), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function Hh(e, t) {
  let n = e.first, a = e.prevProps, r = jt(e, ["first", "prevProps"]), l = Ar(t), c = l.items, o = l.keys, s = l.initial, u = l.from, d = l.enter, m = l.leave, h = l.update, y = l.trail, p = y === void 0 ? 0 : y, g = l.unique, v = l.config, f = l.order, b = f === void 0 ? [Ua, Yi, Xi] : f, x = Ar(a), w = x.keys, C = x.items, T = Ue({}, r.current), D = [...r.deleted], k = Object.keys(T), z = new Set(k), $ = new Set(o), N = o.filter((M) => !z.has(M)), A = r.transitions.filter((M) => !M.destroyed && !$.has(M.originalKey)).map((M) => M.originalKey), P = o.filter((M) => z.has(M)), L = -p;
  for (; b.length; )
    switch (b.shift()) {
      case Ua: {
        N.forEach((R, q) => {
          g && D.find((Y) => Y.originalKey === R) && (D = D.filter((Y) => Y.originalKey !== R));
          const j = o.indexOf(R), I = c[j], G = n && s !== void 0 ? "initial" : Ua;
          T[R] = {
            slot: G,
            originalKey: R,
            key: g ? String(R) : Bh++,
            item: I,
            trail: L = L + p,
            config: Dt(v, I, G),
            from: Dt(n && s !== void 0 ? s || {} : u, I),
            to: Dt(d, I)
          };
        });
        break;
      }
      case Yi: {
        A.forEach((R) => {
          const q = w.indexOf(R), j = C[q], I = Yi;
          D.unshift(Ue({}, T[R], {
            slot: I,
            destroyed: !0,
            left: w[Math.max(0, q - 1)],
            right: w[Math.min(w.length, q + 1)],
            trail: L = L + p,
            config: Dt(v, j, I),
            to: Dt(m, j)
          })), delete T[R];
        });
        break;
      }
      case Xi: {
        P.forEach((R) => {
          const q = o.indexOf(R), j = c[q], I = Xi;
          T[R] = Ue({}, T[R], {
            item: j,
            slot: I,
            trail: L = L + p,
            config: Dt(v, j, I),
            to: Dt(h, j)
          });
        });
        break;
      }
    }
  let S = o.map((M) => T[M]);
  return D.forEach((M) => {
    let R = M.left;
    M.right;
    let q = jt(M, ["left", "right"]), j;
    (j = S.findIndex((I) => I.originalKey === R)) !== -1 && (j += 1), j = Math.max(0, j), S = [...S.slice(0, j), q, ...S.slice(j)];
  }), Ue({}, r, {
    changed: N.length || A.length || P.length,
    first: n && N.length === 0,
    transitions: S,
    current: T,
    deleted: D,
    prevProps: t
  });
}
class Kh extends Tc {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof $t) && (t = rl.transform(t)), this.payload = t;
  }
}
const ci = {
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
}, zt = "[-+]?\\d*\\.?\\d+", ui = zt + "%";
function Li() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Ih = new RegExp("rgb" + Li(zt, zt, zt)), jh = new RegExp("rgba" + Li(zt, zt, zt, zt)), qh = new RegExp("hsl" + Li(zt, ui, ui)), Uh = new RegExp("hsla" + Li(zt, ui, ui, zt)), Yh = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Xh = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Qh = /^#([0-9a-fA-F]{6})$/, Zh = /^#([0-9a-fA-F]{8})$/;
function Jh(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Qh.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : ci.hasOwnProperty(e) ? ci[e] : (t = Ih.exec(e)) ? (Dn(t[1]) << 24 | // r
  Dn(t[2]) << 16 | // g
  Dn(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = jh.exec(e)) ? (Dn(t[1]) << 24 | // r
  Dn(t[2]) << 16 | // g
  Dn(t[3]) << 8 | // b
  Ro(t[4])) >>> // a
  0 : (t = Yh.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Zh.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Xh.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = qh.exec(e)) ? ($o(
    zo(t[1]),
    // h
    Ra(t[2]),
    // s
    Ra(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Uh.exec(e)) ? ($o(
    zo(t[1]),
    // h
    Ra(t[2]),
    // s
    Ra(t[3])
    // l
  ) | Ro(t[4])) >>> // a
  0 : null;
}
function Qi(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function $o(e, t, n) {
  const a = n < 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - a, l = Qi(r, a, e + 1 / 3), c = Qi(r, a, e), o = Qi(r, a, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(c * 255) << 16 | Math.round(o * 255) << 8;
}
function Dn(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function zo(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Ro(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Ra(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Fo(e) {
  let t = Jh(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, r = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${n}, ${a}, ${r}, ${l})`;
}
const Fa = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Gh = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, ep = new RegExp(`(${Object.keys(ci).join("|")})`, "g"), tp = (e) => {
  const t = e.output.map((r) => r.replace(Gh, Fo)).map((r) => r.replace(ep, Fo)), n = t[0].match(Fa).map(() => []);
  t.forEach((r) => {
    r.match(Fa).forEach((l, c) => n[c].push(+l));
  });
  const a = t[0].match(Fa).map((r, l) => si(Ue({}, e, {
    output: n[l]
  })));
  return (r) => {
    let l = 0;
    return t[0].replace(Fa, () => a[l++](r)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (c, o, s, u, d) => `rgba(${Math.round(o)}, ${Math.round(s)}, ${Math.round(u)}, ${d})`);
  };
};
let da = {
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
const np = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), ap = ["Webkit", "Ms", "Moz", "O"];
da = Object.keys(da).reduce((e, t) => (ap.forEach((n) => e[np(n, t)] = e[t]), e), da);
function ip(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(da.hasOwnProperty(e) && da[e]) ? t + "px" : ("" + t).trim();
}
const Bo = {};
Ch((e) => new Kh(e));
kh(tp);
Sh(ci);
Th((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const r = t.style, l = t.children, c = t.scrollTop, o = t.scrollLeft, s = jt(t, ["style", "children", "scrollTop", "scrollLeft"]), u = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    c !== void 0 && (e.scrollTop = c), o !== void 0 && (e.scrollLeft = o), l !== void 0 && (e.textContent = l);
    for (let d in r)
      if (r.hasOwnProperty(d)) {
        var n = d.indexOf("--") === 0, a = ip(d, r[d], n);
        d === "float" && (d = "cssFloat"), n ? e.style.setProperty(d, a) : e.style[d] = a;
      }
    for (let d in s) {
      const m = u ? d : Bo[d] || (Bo[d] = d.replace(/([A-Z])/g, (h) => "-" + h.toLowerCase()));
      typeof e.getAttribute(m) < "u" && e.setAttribute(m, s[d]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const rp = [
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
], lp = bh(Lh, !1), Wo = lp(rp);
var op = ["tooltipOpen"];
function sp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function di() {
  return di = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, di.apply(this, arguments);
}
function Lc(e) {
  var t = F.useState(di({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], r = F.useCallback(function(c) {
    return a(typeof c == "function" ? function(o) {
      o.tooltipOpen;
      var s = sp(o, op);
      return di({}, c(s), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: c.tooltipLeft,
      tooltipTop: c.tooltipTop,
      tooltipData: c.tooltipData
    });
  }, [a]), l = F.useCallback(function() {
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
    hideTooltip: l
  };
}
var cp = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fi.apply(this, arguments);
}
function up(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Oc = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, ll = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.className, a = e.top, r = e.left, l = e.offsetLeft, c = l === void 0 ? 10 : l, o = e.offsetTop, s = o === void 0 ? 10 : o, u = e.style, d = u === void 0 ? Oc : u, m = e.children, h = e.unstyled, y = h === void 0 ? !1 : h, p = e.applyPositionStyle, g = p === void 0 ? !1 : p, v = up(e, cp);
  return /* @__PURE__ */ i.createElement("div", fi({
    ref: t,
    className: Ze("visx-tooltip", n),
    style: fi({
      top: a == null || s == null ? a : a + s,
      left: r == null || c == null ? r : r + c
    }, g && {
      position: "absolute"
    }, !y && d)
  }, v), m);
});
ll.propTypes = {
  children: V.node,
  className: V.string,
  left: V.number,
  offsetLeft: V.number,
  offsetTop: V.number,
  top: V.number,
  applyPositionStyle: V.bool,
  unstyled: V.bool
};
ll.displayName = "Tooltip";
const dp = ll;
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
function fp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Sr(e, t);
}
function Sr(e, t) {
  return Sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Sr(e, t);
}
var Vo = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function hp(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    mp(a, n);
    function a(l) {
      var c;
      return c = n.call(this, l) || this, c.state = {
        rect: void 0,
        parentRect: void 0
      }, c.nodeRef = /* @__PURE__ */ i.createRef(), c.getRects = c.getRects.bind(fp(c)), c;
    }
    var r = a.prototype;
    return r.componentDidMount = function() {
      var c, o = this;
      this.node = (c = this.nodeRef) != null && c.current ? this.nodeRef.current : ku.findDOMNode(this), this.setState(function() {
        return o.getRects();
      });
    }, r.getRects = function() {
      if (!this.node)
        return this.state;
      var c = this.node, o = c.parentNode, s = c.getBoundingClientRect ? c.getBoundingClientRect() : Vo, u = o != null && o.getBoundingClientRect ? o.getBoundingClientRect() : Vo;
      return {
        rect: s,
        parentRect: u
      };
    }, r.render = function() {
      return /* @__PURE__ */ i.createElement(e, Tr({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, a;
  }(i.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var _c = /* @__PURE__ */ F.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), pp = _c.Provider;
_c.Consumer;
var yp = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, mi.apply(this, arguments);
}
function gp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Mc(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, a = n === void 0 ? 0 : n, r = e.offsetLeft, l = r === void 0 ? 10 : r, c = e.offsetTop, o = c === void 0 ? 10 : c, s = e.parentRect, u = e.rect, d = e.style, m = d === void 0 ? Oc : d, h = e.top, y = h === void 0 ? 0 : h, p = e.unstyled, g = p === void 0 ? !1 : p, v = e.nodeRef, f = gp(e, yp), b, x = !1, w = !1;
  if (u && s) {
    var C = a, T = y;
    if (s.width) {
      var D = C + l + u.width - s.width, k = u.width - C - l;
      x = D > 0 && D > k;
    } else {
      var z = C + l + u.width - window.innerWidth, $ = u.width - C - l;
      x = z > 0 && z > $;
    }
    if (s.height) {
      var N = T + o + u.height - s.height, A = u.height - T - o;
      w = N > 0 && N > A;
    } else
      w = T + o + u.height > window.innerHeight;
    C = x ? C - u.width - l : C + l, T = w ? T - u.height - o : T + o, C = Math.round(C), T = Math.round(T), b = "translate(" + C + "px, " + T + "px)";
  }
  return /* @__PURE__ */ i.createElement(dp, mi({
    ref: v,
    style: mi({
      left: 0,
      top: 0,
      transform: b
    }, !g && m)
  }, f), /* @__PURE__ */ i.createElement(pp, {
    value: {
      isFlippedVertically: !w,
      isFlippedHorizontally: !x
    }
  }, t));
}
Mc.propTypes = {
  nodeRef: V.oneOfType([V.string, V.func, V.object])
};
const Dc = hp(Mc);
var Un = /* @__PURE__ */ function() {
  function e(n) {
    var a = n.x, r = a === void 0 ? 0 : a, l = n.y, c = l === void 0 ? 0 : l;
    this.x = 0, this.y = 0, this.x = r, this.y = c;
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
function xp(e, t) {
  return new Un({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function vp(e, t) {
  return new Un({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: Un,
  subtractPoints: vp,
  sumPoints: xp
}, Symbol.toStringTag, { value: "Module" }));
function Ep(e) {
  return !!e && e instanceof Element;
}
function Ap(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function Tp(e) {
  return !!e && "createSVGPoint" in e;
}
function Sp(e) {
  return !!e && "getScreenCTM" in e;
}
function kp(e) {
  return !!e && "changedTouches" in e;
}
function wp(e) {
  return !!e && "clientX" in e;
}
function Cp(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function fa() {
  return fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fa.apply(this, arguments);
}
var Zi = {
  x: 0,
  y: 0
};
function Np(e) {
  if (!e)
    return fa({}, Zi);
  if (kp(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : fa({}, Zi);
  if (wp(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : fa({}, Zi);
}
function kr(e, t) {
  if (!e || !t)
    return null;
  var n = Np(t), a = Ap(e) ? e.ownerSVGElement : e, r = Sp(a) ? a.getScreenCTM() : null;
  if (Tp(a) && r) {
    var l = a.createSVGPoint();
    return l.x = n.x, l.y = n.y, l = l.matrixTransform(r.inverse()), new Un({
      x: l.x,
      y: l.y
    });
  }
  var c = e.getBoundingClientRect();
  return new Un({
    x: n.x - c.left - e.clientLeft,
    y: n.y - c.top - e.clientTop
  });
}
function wr(e, t) {
  if (Ep(e) && t)
    return kr(e, t);
  if (Cp(e)) {
    var n = e, a = n.target;
    if (a)
      return kr(a, n);
  }
  return null;
}
const Pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: wr,
  touchPoint: kr
}, Symbol.toStringTag, { value: "Module" })), $c = (e) => {
  const { tableData: t, config: n, formatNumber: a, capitalize: r, formatDate: l, parseDate: c } = F.useContext(ze), { xScale: o, yScale: s, showTooltip: u, hideTooltip: d } = e, { xAxis: m, visualizationType: h, orientation: y, yAxis: p, runtime: g } = n, v = (A, P) => {
    const { x: L, y: S } = P, R = {
      data: A || {},
      dataXPosition: L + 10,
      dataYPosition: S
    };
    return {
      tooltipLeft: R.dataXPosition,
      tooltipTop: R.dataYPosition,
      tooltipData: R
    };
  }, f = (A, P) => {
    A.stopPropagation();
    const L = wr(A), { x: S, y: M } = L, { data: R, arc: q } = P, j = w(S - Number(n.yAxis.size || 0)), I = h !== "Pie" ? n.series.filter((U) => U.tooltip === !0).map((U) => U.dataKey) : n.series.map((U) => U.dataKey);
    I.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((U) => {
      U.confidenceIntervals.map((K) => {
        K.showInTooltip && (I.push(K.high), I.push(K.low));
      });
    });
    function G(U) {
      let K = [];
      for (let ee in U)
        U.hasOwnProperty(ee) && K.push(U[ee].name);
      return K;
    }
    I.push(...G(n.columns));
    const Y = D(j, I), ce = t.filter((U) => U[m.dataKey] === C(M)), ue = y === "vertical" ? Y : ce;
    h === "Forest Plot" && (t == null || t.filter((U) => U[m.dataKey] === C(M))[0][n.forestPlot.estimateField]);
    const ge = (U) => {
      const K = n.series.filter((B) => B.dataKey === U)[0];
      return K != null && K.axis ? String(K.axis).toLowerCase() : "left";
    }, Te = (() => {
      const U = n.columns, K = [], ee = [];
      for (const [de, le] of Object.entries(U)) {
        const fe = {
          addColPrefix: n.columns[de].prefix,
          addColSuffix: n.columns[de].suffix,
          addColRoundTo: n.columns[de].roundToPlace ? n.columns[de].roundToPlace : "",
          addColCommas: n.columns[de].commas
        };
        let ae = null;
        n.visualizationType === "Pie" ? ae = q == null ? void 0 : q.data[le.name] : ae = ue[0][le.name];
        const he = fu(ae, "left", !0, n, fe);
        le.tooltips && K.push([le.label, he]);
      }
      const B = [];
      return K.forEach((de) => {
        B.push([de[0], de[1]]);
      }), h === "Pie" && ee.push(
        // ignore
        [n.xAxis.dataKey, R],
        [n.runtime.yAxis.dataKey, a(q == null ? void 0 : q.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((q == null ? void 0 : q.endAngle) - (q == null ? void 0 : q.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), h === "Forest Plot" && ee.push([n.xAxis.dataKey, C(M)]), h !== "Pie" && h !== "Forest Plot" && ee.push(
        ...k().filter(Boolean).flatMap((de) => ue[0][de] ? [[de, a(ue[0][de], ge(de))]] : [])
      ), [...ee, ...B];
    })();
    if (!Te)
      return;
    const Se = v(Te, L);
    u(Se);
  }, b = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      d();
    }, 3e3) : d();
  }, x = (A) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let P = o.step();
      const S = Math.floor(Number(A) / P);
      return o.domain()[S - 1];
    }
    if (n.xAxis.type === "date" && n.visualizationType !== "Combo") {
      const P = ho((R) => c(R[n.xAxis.dataKey])).left, L = o.invert(o(A)), S = P(n.data, L, 1);
      return c(n.data[S - 1][n.xAxis.dataKey]);
    }
  }, w = (A) => {
    if (h !== "Pie" && y !== "horizontal") {
      if (o.type === "point" || m.type === "continuous" || m.type === "date") {
        let P = null, L = Number.MAX_VALUE, S = A;
        return t.forEach((M) => {
          const R = m.type === "date" ? o(c(M[m.dataKey])) : o(M[m.dataKey]), q = Math.abs(Number(R - S));
          q < L && (L = q, P = m.type === "date" ? c(M[m.dataKey]) : M[m.dataKey]);
        }), P;
      }
      if (n.xAxis.type === "categorical" || h === "Combo" && y !== "horizontal" && h !== "Forest Plot") {
        let P = o.step();
        const S = Math.floor(Number(A) / P);
        return o.domain()[S - 1];
      }
      if (n.xAxis.type === "date" && h !== "Combo" && y !== "horizontal") {
        const P = ho((R) => c(R[n.xAxis.dataKey])).left, L = o.invert(A), S = P(n.data, L, 1);
        return c(n.data[S - 1][n.xAxis.dataKey]);
      }
    }
  }, C = (A, P) => {
    if (h === "Pie")
      return;
    let L = Number.MAX_VALUE, S = null;
    return t.forEach((M, R) => {
      const q = s(h !== "Forest Plot" ? M[n.xAxis.dataKey] : R), j = Math.abs(q - A);
      j < L && (L = j, S = P ? M[P] : M[n.xAxis.dataKey]);
    }), S;
  }, T = (A) => {
    try {
      const P = wr(A), { x: L } = P;
      if (!L)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let S = w(L);
      if (!S)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      let M = n.data.filter((R) => R[n.xAxis.dataKey] === S);
      setSharedFilter && setSharedFilter(n.uid, M[0]);
    } catch (P) {
      console.error(P.message);
    }
  }, D = (A, P) => {
    try {
      const L = l(A);
      let S;
      return m.type === "categorical" ? S = t.filter((R) => R[m.dataKey] === A) : S = t.filter((R) => l(c(R[m.dataKey])) === L), !S || S.length === 0 ? [] : S.map((R) => Object.fromEntries(Object.entries(R).filter(([q, j]) => P.includes(q))));
    } catch (L) {
      console.error("COVE", L);
    }
  }, k = () => {
    var A;
    try {
      let P, L = [], S = [];
      if ((A = n.series) == null || A.forEach((M) => {
        M.type === "Forecasting" && (L.push(M.stageColumn), M == null || M.confidenceIntervals.forEach((R) => {
          R.showInTooltip === !0 && (S.push(R.low), S.push(R.high));
        }));
      }), !n.dashboard)
        switch (h) {
          case "Combo":
            P = [g.xAxis.dataKey, ...g == null ? void 0 : g.seriesKeys, ...L, ...S];
            break;
          case "Forecasting":
            P = [g.xAxis.dataKey, ...L, ...S];
            break;
          case "Line":
            P = [g.xAxis.dataKey, ...g == null ? void 0 : g.seriesKeys];
            break;
          case "Area Chart":
            P = [g.xAxis.dataKey, ...g == null ? void 0 : g.seriesKeys];
            break;
          case "Bar":
            P = y === "vertical" ? [g.xAxis.dataKey, ...g == null ? void 0 : g.seriesKeys] : [g.yAxis.dataKey, ...g == null ? void 0 : g.seriesKeys];
            break;
          case "Pie":
            P = [g.xAxis.dataKey, ...g == null ? void 0 : g.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (P = [g.xAxis.dataKey, ...g == null ? void 0 : g.barSeriesKeys, ...g == null ? void 0 : g.lineSeriesKeys, ...L, ...S]), P;
    } catch (P) {
      console.error("COVE", P);
    }
  }, z = (A) => {
    const { dataXPosition: P, dataYPosition: L } = A;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${P}px, ${Number(L)}px)`
    };
  }, $ = (A) => {
    var L, S;
    let P = n.series.filter((M) => M.dataKey === A);
    return (L = P[0]) != null && L.name ? (S = P[0]) == null ? void 0 : S.name : A;
  };
  return {
    getIncludedTooltipSeries: k,
    getXValueFromCoordinate: w,
    getXValueFromCoordinateDate: x,
    getYScaleValues: D,
    handleTooltipClick: T,
    handleTooltipMouseOff: b,
    handleTooltipMouseOver: f,
    TooltipListItem: ({ item: A }) => {
      const [P, L] = A, [S, M, R] = L;
      return h === "Forest Plot" ? S === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${n.yAxis.type === "date" ? l(c(S, !1)) : M}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${$(S)}: ${a(M, "left")}`) : h === "Bar" && y === "horizontal" && S === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${M}`) : S === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${n.xAxis.type === "date", M}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${$(S)}: ${M}`);
    },
    tooltipStyles: z
  };
};
function ol(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: r = !1 }) {
  const [l, c] = F.useState(), o = (l == null ? void 0 : l.isIntersecting) && r, s = ([u]) => {
    c(u);
  };
  return F.useEffect(() => {
    setTimeout(() => {
      const u = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || o || !u)
        return;
      const m = { threshold: t, root: n, rootMargin: a }, h = new IntersectionObserver(s, m);
      return h.observe(u), () => h.disconnect();
    }, 500);
  }, [e, t, n, a, o]), l;
}
const Ba = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), Lp = (e) => {
  const { transformedData: t, config: n, dimensions: a, seriesHighlight: r, colorScale: l, formatNumber: c, currentViewport: o, handleChartAriaLabels: s, isEditor: u } = F.useContext(ze), { tooltipData: d, showTooltip: m, hideTooltip: h, tooltipOpen: y, tooltipLeft: p, tooltipTop: g } = Lc(), { handleTooltipMouseOver: v, handleTooltipMouseOff: f, TooltipListItem: b } = $c({
    xScale: !1,
    yScale: !1,
    showTooltip: m,
    hideTooltip: h
  }), [x, w] = F.useState(void 0), [C, T] = F.useState(!1), D = F.useRef(), k = ol(D, {
    freezeOnceVisible: !1
  });
  F.useEffect(() => {
    document.querySelector(".isEditor") && T((R) => !0);
  }), F.useEffect(() => {
    k != null && k.isIntersecting && n.animate && !C && setTimeout(() => {
      T(!0);
    }, 500);
  }, [k == null ? void 0 : k.isIntersecting, n.animate]);
  const z = ({ arcs: M, path: R, getKey: q }) => {
    const j = Vh(M, q, {
      from: Ba,
      enter: Ba,
      update: Ba,
      leave: Ba
    });
    return F.useEffect(() => {
      const I = setTimeout(() => {
        h();
      }, 500);
      return () => {
        clearTimeout(I);
      };
    }, [d]), /* @__PURE__ */ i.createElement(i.Fragment, null, j.map(({ item: I, props: G, key: Y }, ce) => /* @__PURE__ */ i.createElement(be, { className: I.data[n.xAxis.dataKey], key: `${Y}-${ce}`, style: { opacity: n.legend.behavior === "highlight" && r.length > 0 && r.indexOf(I.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ i.createElement(
      Wo.path,
      {
        d: $h(
          [G.startAngle, G.endAngle],
          (ue, ge) => R({
            ...I,
            startAngle: ue,
            endAngle: ge
          })
        ),
        fill: l(I.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (ue) => v(ue, { data: I.data[n.runtime.xAxis.dataKey], arc: I }),
        onMouseLeave: (ue) => f()
      }
    ))), j.map(({ item: I, key: G }) => {
      const [Y, ce] = R.centroid(I), ue = I.endAngle - I.startAngle >= 0.1;
      let ge = "#FFF";
      return l(I.data[n.runtime.xAxis.dataKey]) && Qt.contrast(ge, l(I.data[n.runtime.xAxis.dataKey])) < 3.5 && (ge = "000"), /* @__PURE__ */ i.createElement(Wo.g, { key: G }, ue && /* @__PURE__ */ i.createElement($e, { style: { fill: ge }, x: Y, y: ce, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((I.endAngle - I.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [$] = a;
  n && n.legend && !n.legend.hide && o === "lg" && ($ = $ * 0.73);
  const N = n.heights.vertical, A = Math.min($, N) / 2, P = N / 2, L = $ / 2, S = n.pieType === "Donut" ? 75 : A;
  return F.useEffect(() => {
    if (r.length > 0 && n.legend.behavior !== "highlight") {
      let M = [];
      t.forEach((R) => {
        r.indexOf(R[n.runtime.xAxis.dataKey]) !== -1 && M.push(R);
      }), w(M);
    } else
      w(void 0);
  }, [r]), /* @__PURE__ */ i.createElement(Rt, { component: "PieChart" }, /* @__PURE__ */ i.createElement("svg", { width: $, height: N, className: `animated-pie group ${n.animate === !1 || C ? "animated" : ""}`, role: "img", "aria-label": s(n) }, /* @__PURE__ */ i.createElement(be, { top: P, left: L }, /* @__PURE__ */ i.createElement(
    Pd,
    {
      data: x || t,
      pieValue: (M) => M[n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: A - S,
      outerRadius: A
    },
    (M) => /* @__PURE__ */ i.createElement(z, { ...M, getKey: (R) => R.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ i.createElement("div", { ref: D }), d && Object.entries(d.data).length > 0 && y && m && d.dataYPosition && d.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Dc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: p, top: g }, /* @__PURE__ */ i.createElement("ul", null, typeof d == "object" && Object.entries(d.data).map((M, R) => /* @__PURE__ */ i.createElement(b, { item: M, key: R }))))));
};
var Op = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const bt = Op;
function _p(e) {
  var t = e.labelOffset, n = e.labelProps, a = e.orientation, r = e.range, l = e.tickLabelFontSize, c = e.tickLength, o = a === bt.left || a === bt.top ? -1 : 1, s, u, d;
  if (a === bt.top || a === bt.bottom) {
    var m = a === bt.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    s = (Number(r[0]) + Number(r[r.length - 1])) / 2, u = o * (c + t + l + m);
  } else
    s = o * ((Number(r[0]) + Number(r[r.length - 1])) / 2), u = -(c + t), d = "rotate(" + o * 90 + ")";
  return {
    x: s,
    y: u,
    transform: d
  };
}
function ma() {
  return ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ma.apply(this, arguments);
}
function Mp(e) {
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, r = e.tickClassName, l = e.tickComponent, c = e.tickLabelProps, o = e.tickStroke, s = o === void 0 ? "#222" : o, u = e.tickTransform, d = e.ticks, m = e.strokeWidth, h = e.tickLineProps;
  return d.map(function(y) {
    var p, g = y.value, v = y.index, f = y.from, b = y.to, x = y.formattedValue, w = (p = c[v]) != null ? p : {}, C = Math.max(10, typeof w.fontSize == "number" && w.fontSize || 0), T = b.y + (n && a !== bt.top ? C : 0);
    return /* @__PURE__ */ i.createElement(be, {
      key: "visx-tick-" + g + "-" + v,
      className: Ze("visx-axis-tick", r),
      transform: u
    }, !t && /* @__PURE__ */ i.createElement(qe, ma({
      from: f,
      to: b,
      stroke: s,
      strokeWidth: m,
      strokeLinecap: "square"
    }, h)), l ? l(ma({}, w, {
      x: b.x,
      y: T,
      formattedValue: x
    })) : /* @__PURE__ */ i.createElement($e, ma({
      x: b.x,
      y: T
    }, w), x));
  });
}
function hi() {
  return hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, hi.apply(this, arguments);
}
var Ho = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function Dp(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, r = e.hideAxisLine, l = e.hideTicks, c = e.horizontal, o = e.label, s = o === void 0 ? "" : o, u = e.labelClassName, d = e.labelOffset, m = d === void 0 ? 14 : d, h = e.labelProps, y = h === void 0 ? Ho : h, p = e.orientation, g = p === void 0 ? bt.bottom : p, v = e.scale, f = e.stroke, b = f === void 0 ? "#222" : f, x = e.strokeDasharray, w = e.strokeWidth, C = w === void 0 ? 1 : w, T = e.tickClassName, D = e.tickComponent, k = e.tickLineProps, z = e.tickLabelProps, $ = e.tickLength, N = $ === void 0 ? 8 : $, A = e.tickStroke, P = A === void 0 ? "#222" : A, L = e.tickTransform, S = e.ticks, M = e.ticksComponent, R = M === void 0 ? Mp : M, q = hi({}, Ho, typeof z == "object" ? z : null), j = S.map(function(G) {
    var Y = G.value, ce = G.index;
    return typeof z == "function" ? z(Y, ce, S) : q;
  }), I = Math.max.apply(Math, [10].concat(j.map(function(G) {
    return typeof G.fontSize == "number" ? G.fontSize : 0;
  })));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, R({
    hideTicks: l,
    horizontal: c,
    orientation: g,
    scale: v,
    tickClassName: T,
    tickComponent: D,
    tickLabelProps: j,
    tickStroke: P,
    tickTransform: L,
    ticks: S,
    strokeWidth: C,
    tickLineProps: k
  }), !r && /* @__PURE__ */ i.createElement(qe, {
    className: Ze("visx-axis-line", n),
    from: t,
    to: a,
    stroke: b,
    strokeWidth: C,
    strokeDasharray: x
  }), s && /* @__PURE__ */ i.createElement($e, hi({
    className: Ze("visx-axis-label", u)
  }, _p({
    labelOffset: m,
    labelProps: y,
    orientation: g,
    range: v.range(),
    tickLabelFontSize: I,
    tickLength: N
  }), y), s));
}
function $p(e, t) {
  t === void 0 && (t = "center");
  var n = e;
  if (t !== "start" && "bandwidth" in n) {
    var a = n.bandwidth();
    return t === "center" && (a /= 2), n.round() && (a = Math.round(a)), function(r) {
      var l = n(r);
      return typeof l == "number" ? l + a : l;
    };
  }
  return e;
}
function zp(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Cf;
}
function Wa(e, t) {
  var n = e.x, a = e.y;
  return new Un(t ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  });
}
function Cr() {
  return Cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Cr.apply(this, arguments);
}
var Ji = 0;
function Rp(e) {
  return e === void 0 && (e = Ji), typeof e == "number" ? {
    start: e,
    end: e
  } : Cr({
    start: Ji,
    end: Ji
  }, e);
}
var Fp = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Nr.apply(this, arguments);
}
function Bp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Oi(e) {
  var t = e.children, n = t === void 0 ? Dp : t, a = e.axisClassName, r = e.hideAxisLine, l = r === void 0 ? !1 : r, c = e.hideTicks, o = c === void 0 ? !1 : c, s = e.hideZero, u = s === void 0 ? !1 : s, d = e.innerRef, m = e.left, h = m === void 0 ? 0 : m, y = e.numTicks, p = y === void 0 ? 10 : y, g = e.orientation, v = g === void 0 ? bt.bottom : g, f = e.rangePadding, b = f === void 0 ? 0 : f, x = e.scale, w = e.tickFormat, C = e.tickLength, T = C === void 0 ? 8 : C, D = e.tickValues, k = e.top, z = k === void 0 ? 0 : k, $ = Bp(e, Fp), N = w ?? zp(x), A = v === bt.left, P = v === bt.top, L = P || v === bt.bottom, S = $p(x), M = A || P ? -1 : 1, R = x.range(), q = Rp(b), j = Wa({
    x: Number(R[0]) + 0.5 - q.start,
    y: 0
  }, L), I = Wa({
    x: Number(R[R.length - 1]) + 0.5 + q.end,
    y: 0
  }, L), G = (D ?? wf(x, p)).filter(function(ce) {
    return !u || ce !== 0 && ce !== "0";
  }).map(function(ce, ue) {
    return {
      value: ce,
      index: ue
    };
  }), Y = G.map(function(ce) {
    var ue = ce.value, ge = ce.index, ke = kf(S(ue));
    return {
      value: ue,
      index: ge,
      from: Wa({
        x: ke,
        y: 0
      }, L),
      to: Wa({
        x: ke,
        y: T * M
      }, L),
      formattedValue: N(ue, ge, G)
    };
  });
  return /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-axis", a),
    innerRef: d,
    top: z,
    left: h
  }, n(Nr({}, $, {
    axisFromPoint: j,
    axisToPoint: I,
    hideAxisLine: l,
    hideTicks: o,
    hideZero: u,
    horizontal: L,
    numTicks: p,
    orientation: v,
    rangePadding: b,
    scale: x,
    tickFormat: N,
    tickLength: T,
    tickPosition: S,
    tickSign: M,
    ticks: Y
  })));
}
var Wp = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function pi() {
  return pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, pi.apply(this, arguments);
}
function Vp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Hp = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function Kp(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, r = e.tickLength, l = r === void 0 ? 8 : r, c = e.tickLabelProps, o = Vp(e, Wp), s = typeof c == "function" ? c : pi({}, Hp, c);
  return /* @__PURE__ */ i.createElement(Oi, pi({
    axisClassName: Ze("visx-axis-left", t),
    labelOffset: a,
    orientation: bt.left,
    tickLabelProps: s,
    tickLength: l
  }, o));
}
var Ip = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, yi.apply(this, arguments);
}
function jp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var qp = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function Up(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, r = e.tickLength, l = r === void 0 ? 8 : r, c = e.tickLabelProps, o = jp(e, Ip), s = typeof c == "function" ? c : yi({}, qp, c);
  return /* @__PURE__ */ i.createElement(Oi, yi({
    axisClassName: Ze("visx-axis-right", t),
    labelOffset: a,
    orientation: bt.right,
    tickLabelProps: s,
    tickLength: l
  }, o));
}
var Yp = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function Xp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Qp = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Zp(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, r = e.tickLength, l = r === void 0 ? 8 : r, c = e.tickLabelProps, o = Xp(e, Yp), s = typeof c == "function" ? c : gi({}, Qp, c);
  return /* @__PURE__ */ i.createElement(Oi, gi({
    axisClassName: Ze("visx-axis-top", t),
    labelOffset: a,
    orientation: bt.top,
    tickLabelProps: s,
    tickLength: l
  }, o));
}
var Jp = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function Gp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var ey = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Ya(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, r = e.tickLength, l = r === void 0 ? 8 : r, c = e.tickLabelProps, o = Gp(e, Jp), s = typeof c == "function" ? c : xi({}, ey, c);
  return /* @__PURE__ */ i.createElement(Oi, xi({
    axisClassName: Ze("visx-axis-bottom", t),
    labelOffset: a,
    orientation: bt.bottom,
    tickLabelProps: s,
    tickLength: l
  }, o));
}
function ka(e) {
  return e.split("-")[1];
}
function sl(e) {
  return e === "y" ? "height" : "width";
}
function Tn(e) {
  return e.split("-")[0];
}
function wa(e) {
  return ["top", "bottom"].includes(Tn(e)) ? "x" : "y";
}
function Ko(e, t, n) {
  let { reference: a, floating: r } = e;
  const l = a.x + a.width / 2 - r.width / 2, c = a.y + a.height / 2 - r.height / 2, o = wa(t), s = sl(o), u = a[s] / 2 - r[s] / 2, d = o === "x";
  let m;
  switch (Tn(t)) {
    case "top":
      m = { x: l, y: a.y - r.height };
      break;
    case "bottom":
      m = { x: l, y: a.y + a.height };
      break;
    case "right":
      m = { x: a.x + a.width, y: c };
      break;
    case "left":
      m = { x: a.x - r.width, y: c };
      break;
    default:
      m = { x: a.x, y: a.y };
  }
  switch (ka(t)) {
    case "start":
      m[o] -= u * (n && d ? -1 : 1);
      break;
    case "end":
      m[o] += u * (n && d ? -1 : 1);
  }
  return m;
}
function zc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ha(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Rc(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: r, platform: l, rects: c, elements: o, strategy: s } = e, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: m = "floating", altBoundary: h = !1, padding: y = 0 } = t, p = zc(y), g = o[h ? m === "floating" ? "reference" : "floating" : m], v = ha(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(g))) == null || n ? g : g.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(o.floating)), boundary: u, rootBoundary: d, strategy: s })), f = m === "floating" ? { ...c.floating, x: a, y: r } : c.reference, b = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(o.floating)), x = await (l.isElement == null ? void 0 : l.isElement(b)) && await (l.getScale == null ? void 0 : l.getScale(b)) || { x: 1, y: 1 }, w = ha(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: f, offsetParent: b, strategy: s }) : f);
  return { top: (v.top - w.top + p.top) / x.y, bottom: (w.bottom - v.bottom + p.bottom) / x.y, left: (v.left - w.left + p.left) / x.x, right: (w.right - v.right + p.right) / x.x };
}
const ty = Math.min, ny = Math.max;
function Pr(e, t, n) {
  return ny(e, ty(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const ay = { left: "right", right: "left", bottom: "top", top: "bottom" };
function vi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ay[t]);
}
function iy(e, t, n) {
  n === void 0 && (n = !1);
  const a = ka(e), r = wa(e), l = sl(r);
  let c = r === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (c = vi(c)), { main: c, cross: vi(c) };
}
const ry = { start: "end", end: "start" };
function Gi(e) {
  return e.replace(/start|end/g, (t) => ry[t]);
}
const ly = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: r, rects: l, initialPlacement: c, platform: o, elements: s } = t, { mainAxis: u = !0, crossAxis: d = !0, fallbackPlacements: m, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: p = !0, ...g } = e, v = Tn(a), f = Tn(c) === c, b = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), x = m || (f || !p ? [vi(c)] : function(N) {
      const A = vi(N);
      return [Gi(N), A, Gi(A)];
    }(c));
    m || y === "none" || x.push(...function(N, A, P, L) {
      const S = ka(N);
      let M = function(R, q, j) {
        const I = ["left", "right"], G = ["right", "left"], Y = ["top", "bottom"], ce = ["bottom", "top"];
        switch (R) {
          case "top":
          case "bottom":
            return j ? q ? G : I : q ? I : G;
          case "left":
          case "right":
            return q ? Y : ce;
          default:
            return [];
        }
      }(Tn(N), P === "start", L);
      return S && (M = M.map((R) => R + "-" + S), A && (M = M.concat(M.map(Gi)))), M;
    }(c, p, y, b));
    const w = [c, ...x], C = await Rc(t, g), T = [];
    let D = ((n = r.flip) == null ? void 0 : n.overflows) || [];
    if (u && T.push(C[v]), d) {
      const { main: N, cross: A } = iy(a, l, b);
      T.push(C[N], C[A]);
    }
    if (D = [...D, { placement: a, overflows: T }], !T.every((N) => N <= 0)) {
      var k, z;
      const N = (((k = r.flip) == null ? void 0 : k.index) || 0) + 1, A = w[N];
      if (A)
        return { data: { index: N, overflows: D }, reset: { placement: A } };
      let P = (z = D.find((L) => L.overflows[0] <= 0)) == null ? void 0 : z.placement;
      if (!P)
        switch (h) {
          case "bestFit": {
            var $;
            const L = ($ = D.map((S) => [S.placement, S.overflows.filter((M) => M > 0).reduce((M, R) => M + R, 0)]).sort((S, M) => S[1] - M[1])[0]) == null ? void 0 : $[0];
            L && (P = L);
            break;
          }
          case "initialPlacement":
            P = c;
        }
      if (a !== P)
        return { reset: { placement: P } };
    }
    return {};
  } };
}, oy = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, r = await async function(l, c) {
      const { placement: o, platform: s, elements: u } = l, d = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), m = Tn(o), h = ka(o), y = wa(o) === "x", p = ["left", "top"].includes(m) ? -1 : 1, g = d && y ? -1 : 1, v = typeof c == "function" ? c(l) : c;
      let { mainAxis: f, crossAxis: b, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return h && typeof x == "number" && (b = h === "end" ? -1 * x : x), y ? { x: b * g, y: f * p } : { x: f * p, y: b * g };
    }(t, e);
    return { x: n + r.x, y: a + r.y, data: r };
  } };
}, sy = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: r } = t, { mainAxis: l = !0, crossAxis: c = !1, limiter: o = { fn: (v) => {
      let { x: f, y: b } = v;
      return { x: f, y: b };
    } }, ...s } = e, u = { x: n, y: a }, d = await Rc(t, s), m = wa(Tn(r)), h = m === "x" ? "y" : "x";
    let y = u[m], p = u[h];
    if (l) {
      const v = m === "y" ? "bottom" : "right";
      y = Pr(y + d[m === "y" ? "top" : "left"], y, y - d[v]);
    }
    if (c) {
      const v = h === "y" ? "bottom" : "right";
      p = Pr(p + d[h === "y" ? "top" : "left"], p, p - d[v]);
    }
    const g = o.fn({ ...t, [m]: y, [h]: p });
    return { ...g, data: { x: g.x - n, y: g.y - a } };
  } };
};
function Mt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qt(e) {
  return Mt(e).getComputedStyle(e);
}
const Io = Math.min, pa = Math.max, bi = Math.round;
function Fc(e) {
  const t = qt(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const r = e.offsetWidth, l = e.offsetHeight, c = bi(n) !== r || bi(a) !== l;
  return c && (n = r, a = l), { width: n, height: a, fallback: c };
}
function cn(e) {
  return Wc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Va;
function Bc() {
  if (Va)
    return Va;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Va = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Va) : navigator.userAgent;
}
function Ut(e) {
  return e instanceof Mt(e).HTMLElement;
}
function rn(e) {
  return e instanceof Mt(e).Element;
}
function Wc(e) {
  return e instanceof Mt(e).Node;
}
function jo(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Mt(e).ShadowRoot || e instanceof ShadowRoot;
}
function _i(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: r } = qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(r);
}
function cy(e) {
  return ["table", "td", "th"].includes(cn(e));
}
function Lr(e) {
  const t = /firefox/i.test(Bc()), n = qt(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((r) => n.willChange.includes(r)) || ["paint", "layout", "strict", "content"].some((r) => {
    const l = n.contain;
    return l != null && l.includes(r);
  });
}
function Vc() {
  return !/^((?!chrome|android).)*safari/i.test(Bc());
}
function cl(e) {
  return ["html", "body", "#document"].includes(cn(e));
}
function Hc(e) {
  return rn(e) ? e : e.contextElement;
}
const Kc = { x: 1, y: 1 };
function Wn(e) {
  const t = Hc(e);
  if (!Ut(t))
    return Kc;
  const n = t.getBoundingClientRect(), { width: a, height: r, fallback: l } = Fc(t);
  let c = (l ? bi(n.width) : n.width) / a, o = (l ? bi(n.height) : n.height) / r;
  return c && Number.isFinite(c) || (c = 1), o && Number.isFinite(o) || (o = 1), { x: c, y: o };
}
function Ea(e, t, n, a) {
  var r, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const c = e.getBoundingClientRect(), o = Hc(e);
  let s = Kc;
  t && (a ? rn(a) && (s = Wn(a)) : s = Wn(e));
  const u = o ? Mt(o) : window, d = !Vc() && n;
  let m = (c.left + (d && ((r = u.visualViewport) == null ? void 0 : r.offsetLeft) || 0)) / s.x, h = (c.top + (d && ((l = u.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / s.y, y = c.width / s.x, p = c.height / s.y;
  if (o) {
    const g = Mt(o), v = a && rn(a) ? Mt(a) : a;
    let f = g.frameElement;
    for (; f && a && v !== g; ) {
      const b = Wn(f), x = f.getBoundingClientRect(), w = getComputedStyle(f);
      x.x += (f.clientLeft + parseFloat(w.paddingLeft)) * b.x, x.y += (f.clientTop + parseFloat(w.paddingTop)) * b.y, m *= b.x, h *= b.y, y *= b.x, p *= b.y, m += x.x, h += x.y, f = Mt(f).frameElement;
    }
  }
  return { width: y, height: p, top: h, right: m + y, bottom: h + p, left: m, x: m, y: h };
}
function ln(e) {
  return ((Wc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Mi(e) {
  return rn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ic(e) {
  return Ea(ln(e)).left + Mi(e).scrollLeft;
}
function Aa(e) {
  if (cn(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || jo(e) && e.host || ln(e);
  return jo(t) ? t.host : t;
}
function jc(e) {
  const t = Aa(e);
  return cl(t) ? t.ownerDocument.body : Ut(t) && _i(t) ? t : jc(t);
}
function qc(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = jc(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Mt(a);
  return r ? t.concat(l, l.visualViewport || [], _i(a) ? a : []) : t.concat(a, qc(a));
}
function qo(e, t, n) {
  return t === "viewport" ? ha(function(a, r) {
    const l = Mt(a), c = ln(a), o = l.visualViewport;
    let s = c.clientWidth, u = c.clientHeight, d = 0, m = 0;
    if (o) {
      s = o.width, u = o.height;
      const h = Vc();
      (h || !h && r === "fixed") && (d = o.offsetLeft, m = o.offsetTop);
    }
    return { width: s, height: u, x: d, y: m };
  }(e, n)) : rn(t) ? ha(function(a, r) {
    const l = Ea(a, !0, r === "fixed"), c = l.top + a.clientTop, o = l.left + a.clientLeft, s = Ut(a) ? Wn(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * s.x, height: a.clientHeight * s.y, x: o * s.x, y: c * s.y };
  }(t, n)) : ha(function(a) {
    const r = ln(a), l = Mi(a), c = a.ownerDocument.body, o = pa(r.scrollWidth, r.clientWidth, c.scrollWidth, c.clientWidth), s = pa(r.scrollHeight, r.clientHeight, c.scrollHeight, c.clientHeight);
    let u = -l.scrollLeft + Ic(a);
    const d = -l.scrollTop;
    return qt(c).direction === "rtl" && (u += pa(r.clientWidth, c.clientWidth) - o), { width: o, height: s, x: u, y: d };
  }(ln(e)));
}
function Uo(e) {
  return Ut(e) && qt(e).position !== "fixed" ? e.offsetParent : null;
}
function Yo(e) {
  const t = Mt(e);
  let n = Uo(e);
  for (; n && cy(n) && qt(n).position === "static"; )
    n = Uo(n);
  return n && (cn(n) === "html" || cn(n) === "body" && qt(n).position === "static" && !Lr(n)) ? t : n || function(a) {
    let r = Aa(a);
    for (; Ut(r) && !cl(r); ) {
      if (Lr(r))
        return r;
      r = Aa(r);
    }
    return null;
  }(e) || t;
}
function uy(e, t, n) {
  const a = Ut(t), r = ln(t), l = Ea(e, !0, n === "fixed", t);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (a || !a && n !== "fixed")
    if ((cn(t) !== "body" || _i(r)) && (c = Mi(t)), Ut(t)) {
      const s = Ea(t, !0);
      o.x = s.x + t.clientLeft, o.y = s.y + t.clientTop;
    } else
      r && (o.x = Ic(r));
  return { x: l.left + c.scrollLeft - o.x, y: l.top + c.scrollTop - o.y, width: l.width, height: l.height };
}
const dy = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: r } = e;
  const l = n === "clippingAncestors" ? function(u, d) {
    const m = d.get(u);
    if (m)
      return m;
    let h = qc(u).filter((v) => rn(v) && cn(v) !== "body"), y = null;
    const p = qt(u).position === "fixed";
    let g = p ? Aa(u) : u;
    for (; rn(g) && !cl(g); ) {
      const v = qt(g), f = Lr(g);
      (p ? f || y : f || v.position !== "static" || !y || !["absolute", "fixed"].includes(y.position)) ? y = v : h = h.filter((b) => b !== g), g = Aa(g);
    }
    return d.set(u, h), h;
  }(t, this._c) : [].concat(n), c = [...l, a], o = c[0], s = c.reduce((u, d) => {
    const m = qo(t, d, r);
    return u.top = pa(m.top, u.top), u.right = Io(m.right, u.right), u.bottom = Io(m.bottom, u.bottom), u.left = pa(m.left, u.left), u;
  }, qo(t, o, r));
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const r = Ut(n), l = ln(n);
  if (n === l)
    return t;
  let c = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const s = { x: 0, y: 0 };
  if ((r || !r && a !== "fixed") && ((cn(n) !== "body" || _i(l)) && (c = Mi(n)), Ut(n))) {
    const u = Ea(n);
    o = Wn(n), s.x = u.x + n.clientLeft, s.y = u.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - c.scrollLeft * o.x + s.x, y: t.y * o.y - c.scrollTop * o.y + s.y };
}, isElement: rn, getDimensions: function(e) {
  return Ut(e) ? Fc(e) : e.getBoundingClientRect();
}, getOffsetParent: Yo, getDocumentElement: ln, getScale: Wn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const r = this.getOffsetParent || Yo, l = this.getDimensions;
  return { reference: uy(t, await r(n), a), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => qt(e).direction === "rtl" }, Xo = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), r = { platform: dy, ...n }, l = { ...r.platform, _c: a };
  return (async (c, o, s) => {
    const { placement: u = "bottom", strategy: d = "absolute", middleware: m = [], platform: h } = s, y = m.filter(Boolean), p = await (h.isRTL == null ? void 0 : h.isRTL(o));
    if (h == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), y.filter((C) => {
      let { name: T } = C;
      return T === "autoPlacement" || T === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    c && o || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let g = await h.getElementRects({ reference: c, floating: o, strategy: d }), { x: v, y: f } = Ko(g, u, p), b = u, x = {}, w = 0;
    for (let C = 0; C < y.length; C++) {
      const { name: T, fn: D } = y[C], { x: k, y: z, data: $, reset: N } = await D({ x: v, y: f, initialPlacement: u, placement: b, strategy: d, middlewareData: x, rects: g, platform: h, elements: { reference: c, floating: o } });
      v = k ?? v, f = z ?? f, x = { ...x, [T]: { ...x[T], ...$ } }, w > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), N && w <= 50 && (w++, typeof N == "object" && (N.placement && (b = N.placement), N.rects && (g = N.rects === !0 ? await h.getElementRects({ reference: c, floating: o, strategy: d }) : N.rects), { x: v, y: f } = Ko(g, b, p)), C = -1);
    }
    return { x: v, y: f, placement: b, strategy: d, middlewareData: x };
  })(e, t, { ...r, platform: l });
};
var en, Sn = { exports: {} }, Qo = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
en = Qo, function() {
  var e = i, t = 60103, n = 60106;
  en.Fragment = 60107;
  var a = 60108, r = 60114, l = 60109, c = 60110, o = 60112, s = 60113, u = 60120, d = 60115, m = 60116, h = 60121, y = 60122, p = 60117, g = 60129, v = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var f = Symbol.for;
    t = f("react.element"), n = f("react.portal"), en.Fragment = f("react.fragment"), a = f("react.strict_mode"), r = f("react.profiler"), l = f("react.provider"), c = f("react.context"), o = f("react.forward_ref"), s = f("react.suspense"), u = f("react.suspense_list"), d = f("react.memo"), m = f("react.lazy"), h = f("react.block"), y = f("react.server.block"), p = f("react.fundamental"), f("react.scope"), f("react.opaque.id"), g = f("react.debug_trace_mode"), f("react.offscreen"), v = f("react.legacy_hidden");
  }
  var b = typeof Symbol == "function" && Symbol.iterator, x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function w(K) {
    for (var ee = arguments.length, B = new Array(ee > 1 ? ee - 1 : 0), de = 1; de < ee; de++)
      B[de - 1] = arguments[de];
    C("error", K, B);
  }
  function C(K, ee, B) {
    var de = x.ReactDebugCurrentFrame, le = "";
    if (z) {
      var fe = D(z.type), ae = z._owner;
      le += function(Oe, Ke, Ce) {
        var xe = "";
        if (Ke) {
          var oe = Ke.fileName, te = oe.replace(T, "");
          if (/^index\./.test(te)) {
            var We = oe.match(T);
            if (We) {
              var se = We[1];
              se && (te = se.replace(T, "") + "/" + te);
            }
          }
          xe = " (at " + te + ":" + Ke.lineNumber + ")";
        } else
          Ce && (xe = " (created by " + Ce + ")");
        return `
    in ` + (Oe || "Unknown") + xe;
      }(fe, z._source, ae && D(ae.type));
    }
    (le += de.getStackAddendum()) !== "" && (ee += "%s", B = B.concat([le]));
    var he = B.map(function(Oe) {
      return "" + Oe;
    });
    he.unshift("Warning: " + ee), Function.prototype.apply.call(console[K], console, he);
  }
  var T = /^(.*)[\\\/]/;
  function D(K) {
    if (K == null)
      return null;
    if (typeof K.tag == "number" && w("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof K == "function")
      return K.displayName || K.name || null;
    if (typeof K == "string")
      return K;
    switch (K) {
      case en.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case r:
        return "Profiler";
      case a:
        return "StrictMode";
      case s:
        return "Suspense";
      case u:
        return "SuspenseList";
    }
    if (typeof K == "object")
      switch (K.$$typeof) {
        case c:
          return "Context.Consumer";
        case l:
          return "Context.Provider";
        case o:
          return de = K, le = K.render, fe = "ForwardRef", ae = le.displayName || le.name || "", de.displayName || (ae !== "" ? fe + "(" + ae + ")" : fe);
        case d:
          return D(K.type);
        case h:
          return D(K.render);
        case m:
          var ee = (B = K)._status === 1 ? B._result : null;
          if (ee)
            return D(ee);
      }
    var B, de, le, fe, ae;
    return null;
  }
  var k = {};
  x.ReactDebugCurrentFrame;
  var z = null;
  function $(K) {
    z = K;
  }
  var N, A, P, L = x.ReactCurrentOwner, S = Object.prototype.hasOwnProperty, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(K, ee, B, de, le) {
    var fe, ae = {}, he = null, Oe = null;
    for (fe in B !== void 0 && (he = "" + B), function(xe) {
      if (S.call(xe, "key")) {
        var oe = Object.getOwnPropertyDescriptor(xe, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return xe.key !== void 0;
    }(ee) && (he = "" + ee.key), function(xe) {
      if (S.call(xe, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(xe, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return xe.ref !== void 0;
    }(ee) && (Oe = ee.ref, function(xe, oe) {
      if (typeof xe.ref == "string" && L.current && oe && L.current.stateNode !== oe) {
        var te = D(L.current.type);
        P[te] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(L.current.type), xe.ref), P[te] = !0);
      }
    }(ee, le)), ee)
      S.call(ee, fe) && !M.hasOwnProperty(fe) && (ae[fe] = ee[fe]);
    if (K && K.defaultProps) {
      var Ke = K.defaultProps;
      for (fe in Ke)
        ae[fe] === void 0 && (ae[fe] = Ke[fe]);
    }
    if (he || Oe) {
      var Ce = typeof K == "function" ? K.displayName || K.name || "Unknown" : K;
      he && function(xe, oe) {
        var te = function() {
          N || (N = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        te.isReactWarning = !0, Object.defineProperty(xe, "key", { get: te, configurable: !0 });
      }(ae, Ce), Oe && function(xe, oe) {
        var te = function() {
          A || (A = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        te.isReactWarning = !0, Object.defineProperty(xe, "ref", { get: te, configurable: !0 });
      }(ae, Ce);
    }
    return function(xe, oe, te, We, se, we, Le) {
      var W = { $$typeof: t, type: xe, key: oe, ref: te, props: Le, _owner: we, _store: {} };
      return Object.defineProperty(W._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(W, "_self", { configurable: !1, enumerable: !1, writable: !1, value: We }), Object.defineProperty(W, "_source", { configurable: !1, enumerable: !1, writable: !1, value: se }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    }(K, he, Oe, le, de, L.current, ae);
  }
  P = {};
  var q, j = x.ReactCurrentOwner;
  function I(K) {
    z = K;
  }
  function G(K) {
    return typeof K == "object" && K !== null && K.$$typeof === t;
  }
  function Y() {
    if (j.current) {
      var K = D(j.current.type);
      if (K)
        return `

Check the render method of \`` + K + "`.";
    }
    return "";
  }
  x.ReactDebugCurrentFrame, q = !1;
  var ce = {};
  function ue(K, ee) {
    if (K._store && !K._store.validated && K.key == null) {
      K._store.validated = !0;
      var B = function(le) {
        var fe = Y();
        if (!fe) {
          var ae = typeof le == "string" ? le : le.displayName || le.name;
          ae && (fe = `

Check the top-level render call using <` + ae + ">.");
        }
        return fe;
      }(ee);
      if (!ce[B]) {
        ce[B] = !0;
        var de = "";
        K && K._owner && K._owner !== j.current && (de = " It was passed a child from " + D(K._owner.type) + "."), I(K), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, de), I(null);
      }
    }
  }
  function ge(K, ee) {
    if (typeof K == "object") {
      if (Array.isArray(K))
        for (var B = 0; B < K.length; B++) {
          var de = K[B];
          G(de) && ue(de, ee);
        }
      else if (G(K))
        K._store && (K._store.validated = !0);
      else if (K) {
        var le = function(he) {
          if (he === null || typeof he != "object")
            return null;
          var Oe = b && he[b] || he["@@iterator"];
          return typeof Oe == "function" ? Oe : null;
        }(K);
        if (typeof le == "function" && le !== K.entries)
          for (var fe, ae = le.call(K); !(fe = ae.next()).done; )
            G(fe.value) && ue(fe.value, ee);
      }
    }
  }
  function ke(K) {
    var ee, B = K.type;
    if (B != null && typeof B != "string") {
      if (typeof B == "function")
        ee = B.propTypes;
      else {
        if (typeof B != "object" || B.$$typeof !== o && B.$$typeof !== d)
          return;
        ee = B.propTypes;
      }
      if (ee) {
        var de = D(B);
        (function(le, fe, ae, he, Oe) {
          var Ke = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var Ce in le)
            if (Ke(le, Ce)) {
              var xe = void 0;
              try {
                if (typeof le[Ce] != "function") {
                  var oe = Error((he || "React class") + ": " + ae + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof le[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw oe.name = "Invariant Violation", oe;
                }
                xe = le[Ce](fe, Ce, he, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (te) {
                xe = te;
              }
              !xe || xe instanceof Error || ($(Oe), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", ae, Ce, typeof xe), $(null)), xe instanceof Error && !(xe.message in k) && (k[xe.message] = !0, $(Oe), w("Failed %s type: %s", ae, xe.message), $(null));
            }
        })(ee, K.props, "prop", de, K);
      } else
        B.PropTypes === void 0 || q || (q = !0, w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D(B) || "Unknown"));
      typeof B.getDefaultProps != "function" || B.getDefaultProps.isReactClassApproved || w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Te(K, ee, B, de, le, fe) {
    var ae = function(te) {
      return typeof te == "string" || typeof te == "function" || te === en.Fragment || te === r || te === g || te === a || te === s || te === u || te === v || typeof te == "object" && te !== null && (te.$$typeof === m || te.$$typeof === d || te.$$typeof === l || te.$$typeof === c || te.$$typeof === o || te.$$typeof === p || te.$$typeof === h || te[0] === y);
    }(K);
    if (!ae) {
      var he = "";
      (K === void 0 || typeof K == "object" && K !== null && Object.keys(K).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Oe, Ke = function(te) {
        return te !== void 0 ? `

Check your code at ` + te.fileName.replace(/^.*[\\\/]/, "") + ":" + te.lineNumber + "." : "";
      }(le);
      he += Ke || Y(), K === null ? Oe = "null" : Array.isArray(K) ? Oe = "array" : K !== void 0 && K.$$typeof === t ? (Oe = "<" + (D(K.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof K, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, he);
    }
    var Ce = R(K, ee, B, le, fe);
    if (Ce == null)
      return Ce;
    if (ae) {
      var xe = ee.children;
      if (xe !== void 0)
        if (de)
          if (Array.isArray(xe)) {
            for (var oe = 0; oe < xe.length; oe++)
              ge(xe[oe], K);
            Object.freeze && Object.freeze(xe);
          } else
            w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ge(xe, K);
    }
    return K === en.Fragment ? function(te) {
      for (var We = Object.keys(te.props), se = 0; se < We.length; se++) {
        var we = We[se];
        if (we !== "children" && we !== "key") {
          I(te), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", we), I(null);
          break;
        }
      }
      te.ref !== null && (I(te), w("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
    }(Ce) : ke(Ce), Ce;
  }
  var Se = function(K, ee, B) {
    return Te(K, ee, B, !1);
  }, U = function(K, ee, B) {
    return Te(K, ee, B, !0);
  };
  en.jsx = Se, en.jsxs = U;
}(), Sn.exports = Qo;
var er, Uc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
er = Uc, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var n = [], a = 0; a < arguments.length; a++) {
      var r = arguments[a];
      if (r) {
        var l = typeof r;
        if (l === "string" || l === "number")
          n.push(r);
        else if (Array.isArray(r)) {
          if (r.length) {
            var c = t.apply(null, r);
            c && n.push(c);
          }
        } else if (l === "object") {
          if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
            n.push(r.toString());
            continue;
          }
          for (var o in r)
            e.call(r, o) && r[o] && n.push(o);
        }
      }
    }
    return n.join(" ");
  }
  er.exports ? (t.default = t, er.exports = t) : window.classNames = t;
}();
var Zo = Uc.exports;
const Jo = (e, t, n) => {
  let a = null;
  return function(...r) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, r);
    }, t);
  };
}, fy = ({ content: e }) => Sn.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), my = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, hy = F.createContext({ getTooltipData: () => my });
function Yc(e = "DEFAULT_TOOLTIP_ID") {
  return F.useContext(hy).getTooltipData(e);
}
const Go = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: r = 10, strategy: l = "absolute", middlewares: c = [oy(Number(r)), ly(), sy({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const o = c;
  return n ? (o.push({ name: "arrow", options: s = { element: n, padding: 5 }, async fn(u) {
    const { element: d, padding: m = 0 } = s || {}, { x: h, y, placement: p, rects: g, platform: v } = u;
    if (d == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const f = zc(m), b = { x: h, y }, x = wa(p), w = sl(x), C = await v.getDimensions(d), T = x === "y" ? "top" : "left", D = x === "y" ? "bottom" : "right", k = g.reference[w] + g.reference[x] - b[x] - g.floating[w], z = b[x] - g.reference[x], $ = await (v.getOffsetParent == null ? void 0 : v.getOffsetParent(d));
    let N = $ ? x === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0;
    N === 0 && (N = g.floating[w]);
    const A = k / 2 - z / 2, P = f[T], L = N - C[w] - f[D], S = N / 2 - C[w] / 2 + A, M = Pr(P, S, L), R = ka(p) != null && S != M && g.reference[w] / 2 - (S < P ? f[T] : f[D]) - C[w] / 2 < 0;
    return { [x]: b[x] - (R ? S < P ? P - S : L - S : 0), data: { [x]: M, centerOffset: S - M } };
  } }), Xo(e, t, { placement: a, strategy: l, middleware: o }).then(({ x: u, y: d, placement: m, middlewareData: h }) => {
    var y, p;
    const g = { left: `${u}px`, top: `${d}px` }, { x: v, y: f } = (y = h.arrow) !== null && y !== void 0 ? y : { x: 0, y: 0 };
    return { tooltipStyles: g, tooltipArrowStyles: { left: v != null ? `${v}px` : "", top: f != null ? `${f}px` : "", right: "", bottom: "", [(p = { top: "bottom", right: "left", bottom: "top", left: "right" }[m.split("-")[0]]) !== null && p !== void 0 ? p : "bottom"]: "-4px" } };
  })) : Xo(e, t, { placement: "bottom", strategy: l, middleware: o }).then(({ x: u, y: d }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {} }));
  var s;
};
var hn = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const es = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: r, anchorSelect: l, place: c = "top", offset: o = 10, events: s = ["hover"], positionStrategy: u = "absolute", middlewares: d, wrapper: m, children: h = null, delayShow: y = 0, delayHide: p = 0, float: g = !1, noArrow: v = !1, clickable: f = !1, closeOnEsc: b = !1, style: x, position: w, afterShow: C, afterHide: T, content: D, html: k, isOpen: z, setIsOpen: $, activeAnchor: N, setActiveAnchor: A }) => {
  const P = F.useRef(null), L = F.useRef(null), S = F.useRef(null), M = F.useRef(null), [R, q] = F.useState({}), [j, I] = F.useState({}), [G, Y] = F.useState(!1), [ce, ue] = F.useState(!1), ge = F.useRef(!1), ke = F.useRef(null), { anchorRefs: Te, setActiveAnchor: Se } = Yc(e), U = F.useRef(!1), [K, ee] = F.useState([]), B = F.useRef(!1);
  F.useLayoutEffect(() => (B.current = !0, () => {
    B.current = !1;
  }), []), F.useEffect(() => {
    if (!G) {
      const se = setTimeout(() => {
        ue(!1);
      }, 150);
      return () => {
        clearTimeout(se);
      };
    }
    return () => null;
  }, [G]);
  const de = (se) => {
    B.current && (se && ue(!0), setTimeout(() => {
      B.current && ($ == null || $(se), z === void 0 && Y(se));
    }, 10));
  };
  F.useEffect(() => {
    if (z === void 0)
      return () => null;
    z && ue(!0);
    const se = setTimeout(() => {
      Y(z);
    }, 10);
    return () => {
      clearTimeout(se);
    };
  }, [z]), F.useEffect(() => {
    G !== ge.current && (ge.current = G, G ? C == null || C() : T == null || T());
  }, [G]);
  const le = (se = p) => {
    M.current && clearTimeout(M.current), M.current = setTimeout(() => {
      U.current || de(!1);
    }, se);
  }, fe = (se) => {
    var we;
    if (!se)
      return;
    y ? (S.current && clearTimeout(S.current), S.current = setTimeout(() => {
      de(!0);
    }, y)) : de(!0);
    const Le = (we = se.currentTarget) !== null && we !== void 0 ? we : se.target;
    A(Le), Se({ current: Le }), M.current && clearTimeout(M.current);
  }, ae = () => {
    f ? le(p || 100) : p ? le() : de(!1), S.current && clearTimeout(S.current);
  }, he = ({ x: se, y: we }) => {
    Go({ place: c, offset: o, elementReference: { getBoundingClientRect: () => ({ x: se, y: we, width: 0, height: 0, top: we, left: se, right: se, bottom: we }) }, tooltipReference: P.current, tooltipArrowReference: L.current, strategy: u, middlewares: d }).then((Le) => {
      Object.keys(Le.tooltipStyles).length && q(Le.tooltipStyles), Object.keys(Le.tooltipArrowStyles).length && I(Le.tooltipArrowStyles);
    });
  }, Oe = (se) => {
    if (!se)
      return;
    const we = se, Le = { x: we.clientX, y: we.clientY };
    he(Le), ke.current = Le;
  }, Ke = (se) => {
    fe(se), p && le();
  }, Ce = (se) => {
    const we = document.querySelector(`[id='${r}']`);
    we != null && we.contains(se.target) || K.some((Le) => Le.contains(se.target)) || de(!1);
  }, xe = (se) => {
    se.key === "Escape" && de(!1);
  }, oe = Jo(fe, 50), te = Jo(ae, 50);
  F.useEffect(() => {
    var se, we;
    const Le = new Set(Te);
    K.forEach((et) => {
      Le.add({ current: et });
    });
    const W = document.querySelector(`[id='${r}']`);
    W && Le.add({ current: W }), b && window.addEventListener("keydown", xe);
    const _e = [];
    s.find((et) => et === "click") && (window.addEventListener("click", Ce), _e.push({ event: "click", listener: Ke })), s.find((et) => et === "hover") && (_e.push({ event: "mouseenter", listener: oe }, { event: "mouseleave", listener: te }, { event: "focus", listener: oe }, { event: "blur", listener: te }), g && _e.push({ event: "mousemove", listener: Oe }));
    const Ge = () => {
      U.current = !0;
    }, nt = () => {
      U.current = !1, ae();
    };
    return f && ((se = P.current) === null || se === void 0 || se.addEventListener("mouseenter", Ge), (we = P.current) === null || we === void 0 || we.addEventListener("mouseleave", nt)), _e.forEach(({ event: et, listener: ft }) => {
      Le.forEach((at) => {
        var Je;
        (Je = at.current) === null || Je === void 0 || Je.addEventListener(et, ft);
      });
    }), () => {
      var et, ft;
      s.find((at) => at === "click") && window.removeEventListener("click", Ce), b && window.removeEventListener("keydown", xe), f && ((et = P.current) === null || et === void 0 || et.removeEventListener("mouseenter", Ge), (ft = P.current) === null || ft === void 0 || ft.removeEventListener("mouseleave", nt)), _e.forEach(({ event: at, listener: Je }) => {
        Le.forEach((Et) => {
          var Yt;
          (Yt = Et.current) === null || Yt === void 0 || Yt.removeEventListener(at, Je);
        });
      });
    };
  }, [ce, Te, K, b, s]), F.useEffect(() => {
    let se = l ?? "";
    !se && e && (se = `[data-tooltip-id='${e}']`);
    const we = new MutationObserver((Le) => {
      const W = [];
      Le.forEach((_e) => {
        if (_e.type === "attributes" && _e.attributeName === "data-tooltip-id" && _e.target.getAttribute("data-tooltip-id") === e && W.push(_e.target), _e.type === "childList" && (N && [..._e.removedNodes].some((Ge) => !!Ge.contains(N) && (ue(!1), de(!1), A(null), !0)), se))
          try {
            const Ge = [..._e.addedNodes].filter((nt) => nt.nodeType === 1);
            W.push(...Ge.filter((nt) => nt.matches(se))), W.push(...Ge.flatMap((nt) => [...nt.querySelectorAll(se)]));
          } catch {
          }
      }), W.length && ee((_e) => [..._e, ...W]);
    });
    return we.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      we.disconnect();
    };
  }, [e, l, N]), F.useEffect(() => {
    w ? he(w) : g ? ke.current && he(ke.current) : Go({ place: c, offset: o, elementReference: N, tooltipReference: P.current, tooltipArrowReference: L.current, strategy: u, middlewares: d }).then((se) => {
      B.current && (Object.keys(se.tooltipStyles).length && q(se.tooltipStyles), Object.keys(se.tooltipArrowStyles).length && I(se.tooltipArrowStyles));
    });
  }, [G, N, D, k, c, o, u, w]), F.useEffect(() => {
    var se;
    const we = document.querySelector(`[id='${r}']`), Le = [...K, we];
    N && Le.includes(N) || A((se = K[0]) !== null && se !== void 0 ? se : we);
  }, [r, K, N]), F.useEffect(() => () => {
    S.current && clearTimeout(S.current), M.current && clearTimeout(M.current);
  }, []), F.useEffect(() => {
    let se = l;
    if (!se && e && (se = `[data-tooltip-id='${e}']`), se)
      try {
        const we = Array.from(document.querySelectorAll(se));
        ee(we);
      } catch {
        ee([]);
      }
  }, [e, l]);
  const We = !!(k || D || h) && G && Object.keys(R).length > 0;
  return ce ? Sn.exports.jsxs(m, { id: e, role: "tooltip", className: Zo("react-tooltip", hn.tooltip, hn[a], t, { [hn.show]: We, [hn.fixed]: u === "fixed", [hn.clickable]: f }), style: { ...x, ...R }, ref: P, children: [k && Sn.exports.jsx(fy, { content: k }) || D || h, Sn.exports.jsx(m, { className: Zo("react-tooltip-arrow", hn.arrow, n, { [hn["no-arrow"]]: v }), style: j, ref: L })] }) : null;
}, py = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: r, className: l, classNameArrow: c, variant: o = "dark", place: s = "top", offset: u = 10, wrapper: d = "div", children: m = null, events: h = ["hover"], positionStrategy: y = "absolute", middlewares: p, delayShow: g = 0, delayHide: v = 0, float: f = !1, noArrow: b = !1, clickable: x = !1, closeOnEsc: w = !1, style: C, position: T, isOpen: D, setIsOpen: k, afterShow: z, afterHide: $ }) => {
  const [N, A] = F.useState(a), [P, L] = F.useState(r), [S, M] = F.useState(s), [R, q] = F.useState(o), [j, I] = F.useState(u), [G, Y] = F.useState(g), [ce, ue] = F.useState(v), [ge, ke] = F.useState(f), [Te, Se] = F.useState(d), [U, K] = F.useState(h), [ee, B] = F.useState(y), [de, le] = F.useState(null), { anchorRefs: fe, activeAnchor: ae } = Yc(e), he = (Ce) => Ce == null ? void 0 : Ce.getAttributeNames().reduce((xe, oe) => {
    var te;
    return oe.startsWith("data-tooltip-") && (xe[oe.replace(/^data-tooltip-/, "")] = (te = Ce == null ? void 0 : Ce.getAttribute(oe)) !== null && te !== void 0 ? te : null), xe;
  }, {}), Oe = (Ce) => {
    const xe = { place: (oe) => {
      var te;
      M((te = oe) !== null && te !== void 0 ? te : s);
    }, content: (oe) => {
      A(oe ?? a);
    }, html: (oe) => {
      L(oe ?? r);
    }, variant: (oe) => {
      var te;
      q((te = oe) !== null && te !== void 0 ? te : o);
    }, offset: (oe) => {
      I(oe === null ? u : Number(oe));
    }, wrapper: (oe) => {
      var te;
      Se((te = oe) !== null && te !== void 0 ? te : d);
    }, events: (oe) => {
      const te = oe == null ? void 0 : oe.split(" ");
      K(te ?? h);
    }, "position-strategy": (oe) => {
      var te;
      B((te = oe) !== null && te !== void 0 ? te : y);
    }, "delay-show": (oe) => {
      Y(oe === null ? g : Number(oe));
    }, "delay-hide": (oe) => {
      ue(oe === null ? v : Number(oe));
    }, float: (oe) => {
      ke(oe === null ? f : !!oe);
    } };
    Object.values(xe).forEach((oe) => oe(null)), Object.entries(Ce).forEach(([oe, te]) => {
      var We;
      (We = xe[oe]) === null || We === void 0 || We.call(xe, te);
    });
  };
  F.useEffect(() => {
    A(a);
  }, [a]), F.useEffect(() => {
    L(r);
  }, [r]), F.useEffect(() => {
    M(s);
  }, [s]), F.useEffect(() => {
    var Ce;
    const xe = new Set(fe);
    let oe = n;
    if (!oe && e && (oe = `[data-tooltip-id='${e}']`), oe)
      try {
        document.querySelectorAll(oe).forEach((Le) => {
          xe.add({ current: Le });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const te = document.querySelector(`[id='${t}']`);
    if (te && xe.add({ current: te }), !xe.size)
      return () => null;
    const We = (Ce = de ?? te) !== null && Ce !== void 0 ? Ce : ae.current, se = new MutationObserver((Le) => {
      Le.forEach((W) => {
        var _e;
        if (!We || W.type !== "attributes" || !(!((_e = W.attributeName) === null || _e === void 0) && _e.startsWith("data-tooltip-")))
          return;
        const Ge = he(We);
        Oe(Ge);
      });
    }), we = { attributes: !0, childList: !1, subtree: !1 };
    if (We) {
      const Le = he(We);
      Oe(Le), se.observe(We, we);
    }
    return () => {
      se.disconnect();
    };
  }, [fe, ae, de, t, n]);
  const Ke = { id: e, anchorId: t, anchorSelect: n, className: l, classNameArrow: c, content: N, html: P, place: S, variant: R, offset: j, wrapper: Te, events: U, positionStrategy: ee, middlewares: p, delayShow: G, delayHide: ce, float: ge, noArrow: b, clickable: x, closeOnEsc: w, style: C, position: T, isOpen: D, setIsOpen: k, afterShow: z, afterHide: $, activeAnchor: de, setActiveAnchor: (Ce) => le(Ce) };
  return m ? Sn.exports.jsx(es, { ...Ke, children: m }) : Sn.exports.jsx(es, { ...Ke });
}, ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: Ju,
  curveBasisClosed: Gu,
  curveBasisOpen: ed,
  curveBundle: td,
  curveCardinal: nd,
  curveCardinalClosed: ad,
  curveCardinalOpen: id,
  curveCatmullRom: rd,
  curveCatmullRomClosed: ld,
  curveCatmullRomOpen: od,
  curveLinear: Ci,
  curveLinearClosed: zs,
  curveMonotoneX: ja,
  curveMonotoneY: sd,
  curveNatural: cd,
  curveStep: ud,
  curveStepAfter: fd,
  curveStepBefore: dd
}, Symbol.toStringTag, { value: "Module" })), yy = (e) => {
  var C;
  const { xScale: t, yScale: n, yMax: a, xMax: r, handleTooltipMouseOver: l, handleTooltipMouseOff: c, isDebug: o, children: s } = e;
  let { transformedData: u, config: d, handleLineType: m, parseDate: h, formatDate: y, formatNumber: p, seriesHighlight: g, colorScale: v, rawData: f } = F.useContext(ze);
  const b = d.brush.active && ((C = d.brush.data) != null && C.length) ? d.brush.data : u;
  if (!b)
    return;
  const x = (T) => d.xAxis.type === "date" ? t(h(T[d.xAxis.dataKey], !1)) : t(T[d.xAxis.dataKey]), w = (T, D, k = void 0) => n(T[k.dataKey]);
  return b && /* @__PURE__ */ i.createElement("svg", null, /* @__PURE__ */ i.createElement(Rt, { component: "AreaChart" }, /* @__PURE__ */ i.createElement(be, { className: "area-chart", key: "area-wrapper", left: Number(d.yAxis.size) }, (d.runtime.areaSeriesKeys || d.series).map((T, D) => {
    let k = b.map((A) => ({
      [d.xAxis.dataKey]: A[d.xAxis.dataKey],
      [T.dataKey]: A[T.dataKey]
    })), z = ul[T.lineType], $ = d.legend.behavior === "highlight" && g.length > 0 && g.indexOf(T.dataKey) === -1, N = d.legend.behavior === "highlight" || g.length === 0 || g.indexOf(T.dataKey) !== -1;
    return d.xAxis.type === "date" ? b.map((A) => t(h(A[d.xAxis.dataKey]))) : b.map((A) => t(A[d.xAxis.dataKey])), /* @__PURE__ */ i.createElement(i.Fragment, { key: D }, /* @__PURE__ */ i.createElement(
      kn,
      {
        data: k,
        x: (A) => x(A),
        y: (A) => w(A, D, T),
        stroke: N ? v ? v(d.runtime.seriesLabels ? d.runtime.seriesLabels[T.dataKey] : T.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: z,
        strokeDasharray: T.type ? m(T.type) : 0
      }
    ), /* @__PURE__ */ i.createElement(
      Bd,
      {
        key: "area-chart",
        fill: N ? v ? v(d.runtime.seriesLabels ? d.runtime.seriesLabels[T.dataKey] : T.dataKey) : "#000" : "transparent",
        fillOpacity: $ ? 0.25 : 0.5,
        data: k,
        x: (A) => x(A),
        y: (A) => w(A, D, T),
        yScale: n,
        curve: z,
        strokeDasharray: T.type ? m(T.type) : 0
      }
    ));
  }), /* @__PURE__ */ i.createElement(Pt, { width: Number(r), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (T) => l(T, f), onMouseLeave: c }))));
}, gy = F.memo(yy), Ei = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, xy = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: r, handleTooltipMouseOff: l, isDebug: c }) => {
  var g;
  let { transformedData: o, config: s, seriesHighlight: u, colorScale: d, rawData: m } = F.useContext(ze);
  const h = s.brush.active && ((g = s.brush.data) != null && g.length) ? s.brush.data : o;
  if (!h)
    return;
  const y = (v) => {
    if (s.xAxis.type === "categorical")
      return e(v);
    if (s.xAxis.type === "date") {
      let f = new Date(v);
      return e(f);
    }
  }, p = 2;
  return h && /* @__PURE__ */ i.createElement("svg", { height: Number(n) }, /* @__PURE__ */ i.createElement(Rt, { component: "AreaChartStacked" }, /* @__PURE__ */ i.createElement(be, { className: "area-chart", key: "area-wrapper", left: Number(s.yAxis.size) + p / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ i.createElement(
    jd,
    {
      data: h,
      keys: s.runtime.areaSeriesKeys.map((v) => v.dataKey) || s.series.map((v) => v.dataKey),
      x0: (v) => y(v.data[s.xAxis.dataKey]),
      y0: (v) => Number(t(v[0])),
      y1: (v) => Number(t(v[1])),
      curve: ul[Ei[s.stackedAreaChartLineType]]
    },
    ({ stacks: v, path: f }) => v.map((b, x) => {
      let w = s.legend.behavior === "highlight" && u.length > 0 && u.indexOf(b.key) === -1, C = s.legend.behavior === "highlight" || u.length === 0 || u.indexOf(b.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          "path",
          {
            key: b.key,
            d: f(b) || "",
            strokeWidth: 2,
            stroke: C ? d ? d(s.runtime.seriesLabels ? s.runtime.seriesLabels[b.key] : b.key) : "#000" : "transparent",
            fillOpacity: w ? 0.25 : 0.5,
            fill: C ? d ? d(s.runtime.seriesLabels ? s.runtime.seriesLabels[b.key] : b.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ i.createElement(Pt, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (v) => r(v, m), onMouseLeave: l }))));
}, vy = F.memo(xy), Ca = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: r, formatDate: l } = F.useContext(ze), { orientation: c } = e, o = c === "horizontal", s = 1, u = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, d = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, m = e.yAxis.labelPlacement === "Below Bar", h = e.yAxis.displayNumbersOnBar, y = e.orientation === "horizontal" ? "yAxis" : "xAxis", p = e.barStyle === "rounded", g = e.visualizationSubType === "stacked", v = e.tipRounding, f = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", b = e.runtime.seriesKeys.length, x = { small: 16, medium: 18, large: 20 }, w = Object.keys(e.runtime.seriesLabels).length > 1;
  return F.useEffect(() => {
    c === "horizontal" && !e.yAxis.labelPlacement && a({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, a]), F.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && a({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), F.useEffect(() => {
    e.visualizationSubType === "horizontal" && a({
      ...e,
      orientation: "horizontal"
    });
  }, []), F.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && a({ ...e, isLollipopChart: !0 }), (p || e.barStyle === "flat") && a({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    isHorizontal: o,
    barBorderWidth: s,
    lollipopBarWidth: u,
    lollipopShapeSize: d,
    isLabelBelowBar: m,
    displayNumbersOnBar: h,
    section: y,
    isRounded: p,
    isStacked: g,
    tipRounding: v,
    radius: f,
    stackCount: b,
    fontSize: x,
    hasMultipleSeries: w,
    applyRadius: ($) => {
      if ($ == null || !p)
        return {};
      let N = {};
      return (g && $ + 1 === b || !g) && (N = o ? { borderRadius: `0 ${f}  ${f}  0` } : { borderRadius: `${f} ${f} 0 0` }), !g && $ === -1 && (N = o ? { borderRadius: `${f} 0  0 ${f} ` } : { borderRadius: ` 0  0 ${f} ${f}` }), v === "full" && g && $ === 0 && b > 1 && (N = o ? { borderRadius: `${f} 0 0 ${f}` } : { borderRadius: `0 0 ${f} ${f}` }), v === "full" && (g && $ === 0 && b === 1 || !g) && (N = { borderRadius: f }), N;
    },
    updateBars: ($) => {
      if (e.visualizationType !== "Bar" && !o)
        return $;
      const N = [...$];
      let A;
      const P = {
        stacked: e.barHeight,
        lollipop: u
      };
      g ? A = P.stacked : A = P[e.isLollipopChart ? "lollipop" : "stacked"] * b;
      const L = m ? x[e.fontSize] * 1.2 : 0;
      let S = Number(e.barSpace), M = N.length * (A + L + S);
      return o && (e.heights.horizontal = M), N.map((R, q) => {
        let j = 0;
        return R.index !== 0 && (j = (A + S + L) * q), { ...R, y: j, height: A };
      });
    },
    assignColorsToValues: ($, N, A) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return A;
      const P = e.customColors ?? t[e.palette], L = n.map((q) => q[e.legend.colorCode]);
      let S = /* @__PURE__ */ new Map(), M = [];
      for (let q = 0; q < L.length; q++)
        S.has(L[q]) || S.set(L[q], P[S.size % P.length]), M.push(S.get(L[q]));
      for (; M.length < $; )
        M = M.concat(M);
      return M[N];
    },
    getHighlightedBarColorByValue: ($) => {
      const N = e == null ? void 0 : e.highlightedBarValues.filter((A) => {
        if (A.value)
          return e.xAxis.type === "date" ? l(r(A.value)) === $ : A.value === $;
      })[0];
      return N != null && N.color ? N.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: ($) => {
      const N = e == null ? void 0 : e.highlightedBarValues.filter((A) => {
        if (A.value)
          return e.xAxis.type === "date" ? l(r(A.value)) === $ : A.value === $;
      })[0];
      return N != null && N.color ? N : !1;
    }
  };
}, by = (e) => {
  var x;
  const { xScale: t, yScale: n, xMax: a, yMax: r } = e, { transformedData: l, colorScale: c, seriesHighlight: o, config: s, formatNumber: u, formatDate: d, parseDate: m, setSharedFilter: h } = F.useContext(ze), { isHorizontal: y, barBorderWidth: p, hasMultipleSeries: g, applyRadius: v } = Ca(), { orientation: f } = s, b = s.brush.active && ((x = s.brush.data) != null && x.length) ? s.brush.data : l;
  return s.visualizationSubType === "stacked" && !y && /* @__PURE__ */ i.createElement(Qd, { data: b, keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys, x: (w) => w[s.runtime.xAxis.dataKey], xScale: t, yScale: n, color: c }, (w) => w.reverse().map(
    (C) => C.bars.map((T) => {
      let D = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(T.key) === -1, k = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(T.key) !== -1, z = a / C.bars.length, $ = z * (s.barThickness || 0.8), N = z * (1 - (s.barThickness || 0.8)) / 2;
      const A = s.runtime.xAxis.type === "date" ? d(m(b[T.index][s.runtime.xAxis.dataKey])) : b[T.index][s.runtime.xAxis.dataKey], P = u(T.bar ? T.bar.data[T.key] : 0, "left");
      if (!P)
        return /* @__PURE__ */ i.createElement(i.Fragment, null);
      const L = v(C.index);
      let S = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${P}` : P;
      const M = s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${A}` : A;
      g || (S = s.isLegendValue ? `${T.key}: ${P}` : s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${P}` : P);
      const {
        legend: { showLegendValuesTooltip: R },
        runtime: { seriesLabels: q }
      } = s, j = `<div>
                    <p class="tooltip-heading"><strong>${M}</strong></p>
                    ${R && q && g ? `${q[T.key] || ""}<br/>` : ""}
                    ${S}<br />
                      </div>`;
      return /* @__PURE__ */ i.createElement(be, { key: `${C.index}--${T.index}--${f}` }, /* @__PURE__ */ i.createElement("style", null, `
                           #barStack${C.index}-${T.index} rect,
                           #barStack${C.index}-${T.index} foreignObject div{
                            animation-delay: ${C.index * 0.5}s;
                            transform-origin: ${$ / 2}px ${T.y + T.height}px
                          }
                        `), /* @__PURE__ */ i.createElement(be, { key: `bar-stack-${C.index}-${T.index}`, id: `barStack${C.index}-${T.index}`, className: "stack vertical" }, /* @__PURE__ */ i.createElement($e, { display: s.labels && k ? "block" : "none", opacity: D ? 0.5 : 1, x: z * T.index + N, y: T.y - 5, fill: "#000", textAnchor: "middle" }, P), /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          key: `bar-stack-${C.index}-${T.index}`,
          x: z * T.index + N,
          y: T.y,
          width: $,
          height: T.height,
          display: k ? "block" : "none",
          "data-tooltip-html": j,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (I) => {
            I.preventDefault(), h && (T[s.xAxis.dataKey] = A, h(s.uid, T));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { opacity: D ? 0.5 : 1, width: $, height: T.height, background: T.color, border: `${s.barHasBorder === "true" ? p : 0}px solid #333`, ...L } })
      )));
    })
  ));
}, Ey = (e) => {
  const { xScale: t, yScale: n, xMax: a, yMax: r } = e, { transformedData: l, colorScale: c, seriesHighlight: o, config: s, formatNumber: u, formatDate: d, parseDate: m, setSharedFilter: h, animatedChart: y, getTextWidth: p } = F.useContext(ze), { isHorizontal: g, barBorderWidth: v, hasMultipleSeries: f, applyRadius: b, updateBars: x, isLabelBelowBar: w, displayNumbersOnBar: C, fontSize: T } = Ca(), { orientation: D, visualizationSubType: k } = s;
  return s.visualizationSubType === "stacked" && g && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Gd, { data: l, keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys, height: r, y: (z) => z[s.runtime.yAxis.dataKey], xScale: t, yScale: n, color: c, offset: "none" }, (z) => z.map(
    ($) => x($.bars).map((N, A) => {
      let P = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(N.key) === -1, L = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(N.key) !== -1;
      s.barHeight = Number(s.barHeight);
      let S = "#000000";
      const M = u(l[N.index][N.key], "left"), R = s.runtime.yAxis.type === "date" ? d(m(l[N.index][s.runtime.originalXAxis.dataKey])) : l[N.index][s.runtime.originalXAxis.dataKey], q = b($.index);
      let j = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${R}` : R, I = s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${M}` : M, G = p(M, `normal ${T[s.fontSize]}px sans-serif`);
      f || (I = s.isLegendValue ? `${N.key}: ${M}` : s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${M}` : I);
      const Y = `<div>
                    ${s.legend.showLegendValuesTooltip && s.runtime.seriesLabels && f ? `${s.runtime.seriesLabels[N.key] || ""}<br/>` : ""}
                    ${j}<br />
                    ${I}
                      </div>`;
      return Qt.contrast(S, N.color) < 4.9 && (S = "#FFFFFF"), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                         #barStack${$.index}-${N.index} rect,
                         #barStack${$.index}-${N.index} foreignObject div{
                          animation-delay: ${$.index * 0.5}s;
                          transform-origin: ${N.x}px
                        }
                      `), /* @__PURE__ */ i.createElement(be, { key: A, id: `barStack${$.index}-${N.index}`, className: "stack horizontal" }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          key: `barstack-horizontal-${$.index}-${N.index}-${A}`,
          className: `animated-chart group ${y ? "animated" : ""}`,
          x: N.x,
          y: N.y,
          width: N.width,
          height: N.height,
          opacity: P ? 0.5 : 1,
          display: L ? "block" : "none",
          "data-tooltip-html": Y,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (ce) => {
            ce.preventDefault(), h && (N[s.xAxis.dataKey] = M, h(s.uid, N));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { width: N.width, height: N.height, background: N.color, border: `${s.barHasBorder === "true" ? v : 0}px solid #333`, ...q } })
      ), D === "horizontal" && k === "stacked" && w && $.index === 0 && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        $e,
        {
          x: `${N.x + (s.isLollipopChart ? 15 : 5)}`,
          y: N.y + N.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        R
      ), C && G < N.width && /* @__PURE__ */ i.createElement(
        $e,
        {
          display: L ? "block" : "none",
          x: N.x + $.bars[N.index].width / 2,
          y: N.y + N.height / 2,
          fill: S,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        M
      )));
    })
  )));
}, Di = (e, t) => {
  var g;
  const { formatDate: n, parseDate: a } = F.useContext(ze);
  let r = [], l = "", c = [], o = [];
  ((g = e.series) == null ? void 0 : g.length) > 0 && e.data ? (r = e.series[0], l = e.series[0].dataKey, c = e.highlightedBarValues, o = e.data.map((v) => v[e.xAxis.dataKey])) : (r = [], l = "", c = [], o = []);
  const s = (v, f) => {
    const b = [...e.highlightedBarValues];
    b[f].borderWidth = v.target.value, t({
      ...e,
      highlightedBarValues: b
    });
  }, u = (v, f) => {
    v.preventDefault();
    const b = [...e.highlightedBarValues];
    b[f].value = v.target.value, b[f].dataKey = l, t({
      ...e,
      highlightedBarValues: b
    });
  }, d = (v, f) => {
    v.preventDefault();
    const b = [...e.highlightedBarValues];
    b.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: b
    });
  }, m = (v, f) => {
    v.preventDefault();
    const b = [...e.highlightedBarValues];
    b.splice(f, 1), t({
      ...e,
      highlightedBarValues: b
    });
  }, h = (v, f) => {
    const b = [...e.highlightedBarValues];
    b[f].color = v.target.value, t({
      ...e
    });
  }, y = (v, f) => {
    const b = [...e.highlightedBarValues];
    b[f].legendLabel = v.target.value, t({
      ...e,
      copyOfHighlightedBarValues: b
    });
  }, p = () => {
  };
  return p.checkFontColor = (v, f, b) => {
    if (e.xAxis.type === "date") {
      if (p.formatDates(f).includes(v))
        return "#000";
    } else if (f.includes(v))
      return "#000";
    return b;
  }, p.formatDates = (v) => v.map((f) => f ? n(a(f)) : !1), p.findDuplicates = (v) => {
    const f = {};
    return v.filter((x) => {
      const { legendLabel: w } = x;
      return f[w] ? !1 : (f[w] = !0, !0);
    });
  }, {
    HighLightedBarUtils: p,
    highlightedSeries: r,
    highlightedSeriesKey: l,
    highlightedBarValues: c,
    highlightedSeriesValues: o,
    handleUpdateHighlightedBar: u,
    handleAddNewHighlightedBar: d,
    handleRemoveHighlightedBar: m,
    handleUpdateHighlightedBarColor: h,
    handleHighlightedBarLegendLabel: y,
    handleUpdateHighlightedBorderWidth: s
  };
}, Ay = (e) => {
  var P;
  const { xScale: t, yScale: n, xMax: a, yMax: r, seriesScale: l } = e, { transformedData: c, colorScale: o, seriesHighlight: s, config: u, formatNumber: d, formatDate: m, parseDate: h, setSharedFilter: y, isNumber: p, getXAxisData: g, getYAxisData: v } = F.useContext(ze), { barBorderWidth: f, hasMultipleSeries: b, applyRadius: x, updateBars: w, assignColorsToValues: C, section: T, lollipopBarWidth: D, lollipopShapeSize: k, getHighlightedBarColorByValue: z, getHighlightedBarByValue: $ } = Ca(), { HighLightedBarUtils: N } = Di(u), A = u.brush.active && ((P = u.brush.data) != null && P.length) ? u.brush.data : c;
  return u.visualizationSubType !== "stacked" && (u.visualizationType === "Bar" || u.visualizationType === "Combo") && u.orientation === "vertical" && /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement(
    Hs,
    {
      data: A,
      keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys,
      height: r,
      x0: (L) => L[u.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: l,
      yScale: n,
      color: () => ""
    },
    (L) => w(L).map((S, M) => /* @__PURE__ */ i.createElement(be, { className: `bar-group-${S.index}-${S.x0}--${M} ${u.orientation}`, key: `bar-group-${S.index}-${S.x0}--${M}`, id: `bar-group-${S.index}-${S.x0}--${M}`, left: a / L.length * S.index }, S.bars.map((R, q) => {
      const j = u.useLogScale ? 0.1 : 0;
      let I = u.highlightedBarValues.map((we) => we.value).filter((we) => we !== void 0);
      I = u.xAxis.type === "date" ? N.formatDates(I) : I;
      let G = u.legend.behavior === "highlight" && s.length > 0 && s.indexOf(R.key) === -1, Y = u.legend.behavior === "highlight" || s.length === 0 || s.indexOf(R.key) !== -1, ce = Math.abs(n(R.value) - n(j)), ue = R.value >= 0 && p(R.value) ? R.y : n(0), ge = a / L.length * (u.barThickness || 0.8), ke = a / L.length * (1 - (u.barThickness || 0.8)) / 2;
      u.isLollipopChart && (ke = a / L.length / 2 - D / 2);
      let Te = u.isLollipopChart ? D : ge / S.bars.length, Se = d(R.value, "left"), U = u.runtime[T].type === "date" ? m(h(A[S.index][u.runtime.originalXAxis.dataKey])) : A[S.index][u.runtime.originalXAxis.dataKey];
      const K = R.value < 0 ? -1 : q, ee = x(K);
      let B = u.runtime.yAxis.label ? `${u.runtime.yAxis.label}: ${Se}` : Se, de = u.runtime.xAxis.label ? `${u.runtime.xAxis.label}: ${U}` : U;
      b || (B = u.isLegendValue ? `${R.key}: ${Se}` : u.runtime.yAxis.label ? `${u.runtime.yAxis.label}: ${Se}` : Se);
      const le = `<ul>
                  ${u.legend.showLegendValuesTooltip && u.runtime.seriesLabels && b ? `${u.runtime.seriesLabels[R.key] || ""}<br/>` : ""}
                  <li class="tooltip-heading">${B}</li>
                  <li class="tooltip-body">${de}</li>
                    </li></ul>`;
      let fe = "#000000";
      fe = N.checkFontColor(Se, I, fe);
      let ae = u.runtime.seriesLabels && u.runtime.seriesLabels[R.key] ? o(u.runtime.seriesLabels[R.key]) : o(R.key);
      ae = C(L.length, S.index, ae);
      const he = u.isLollipopChart && u.lollipopColorStyle === "regular", Oe = u.isLollipopChart && u.lollipopColorStyle === "two-tone", Ke = I == null ? void 0 : I.includes(U), Ce = z(U), xe = $(U), oe = Ke ? Ce : u.barHasBorder === "true" ? "#000" : "transparent", te = Ke ? xe.borderWidth : u.isLollipopChart ? 0 : u.barHasBorder === "true" ? f : 0, se = {
        background: (() => he ? ae : Oe ? Qt(ae).brighten(1) : Ke ? "transparent" : ae)(),
        borderColor: oe,
        borderStyle: "solid",
        borderWidth: te,
        width: Te,
        height: ce,
        ...ee
      };
      return /* @__PURE__ */ i.createElement(be, { key: `${S.index}--${q}` }, /* @__PURE__ */ i.createElement("style", null, `
                        .linear #barGroup${S.index} div,
                        .Combo #barGroup${S.index} div {
                          transform-origin: 0 ${ue + ce}px;
                        }
                      `), /* @__PURE__ */ i.createElement(be, { key: `bar-sub-group-${S.index}-${S.x0}-${ue}--${q}` }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          id: `barGroup${S.index}`,
          key: `bar-group-bar-${S.index}-${R.index}-${R.value}-${R.key}`,
          x: Te * R.index + ke,
          y: ue,
          width: Te,
          height: ce,
          opacity: G ? 0.5 : 1,
          display: Y ? "block" : "none",
          "data-tooltip-html": le,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          onClick: (we) => {
            we.preventDefault(), y && (R[u.xAxis.dataKey] = U, y(u.uid, R));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: se })
      ), /* @__PURE__ */ i.createElement($e, { display: u.labels && Y ? "block" : "none", opacity: G ? 0.5 : 1, x: Te * (R.index + 0.5) + ke, y: ue - 5, fill: fe, textAnchor: "middle" }, Se), u.isLollipopChart && u.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: Te * (S.bars.length - R.index - 1) + ke + k / 3.5,
          cy: R.y,
          r: k / 2,
          fill: ae,
          key: `circle--${R.index}`,
          "data-tooltip-html": le,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), u.isLollipopChart && u.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          x: ke - D / 2,
          y: ue,
          width: k,
          height: k,
          fill: ae,
          key: `circle--${R.index}`,
          "data-tooltip-html": le,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${k}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(u.confidenceKeys).length > 0 ? A.map((L) => {
    let S, M, R, q, j = 5;
    return S = t(g(L)), R = n(v(L, u.confidenceKeys.lower)), q = n(v(L, u.confidenceKeys.upper)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-v-${M}-${L[u.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${S - j} ${R}
                    L${S + j} ${R}
                    M${S} ${R}
                    L${S} ${q}
                    M${S - j} ${q}
                    L${S + j} ${q}`
      }
    );
  }) : "");
}, Ty = (e) => {
  const { xScale: t, yScale: n, yMax: a, seriesScale: r } = e, { transformedData: l, colorScale: c, seriesHighlight: o, config: s, formatNumber: u, formatDate: d, parseDate: m, setSharedFilter: h, isNumber: y, getTextWidth: p, getYAxisData: g, getXAxisData: v } = F.useContext(ze), { isHorizontal: f, barBorderWidth: b, hasMultipleSeries: x, applyRadius: w, updateBars: C, assignColorsToValues: T, section: D, fontSize: k, isLabelBelowBar: z, displayNumbersOnBar: $, lollipopBarWidth: N, lollipopShapeSize: A, getHighlightedBarColorByValue: P, getHighlightedBarByValue: L } = Ca(), { HighLightedBarUtils: S } = Di(s);
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement(
    Hs,
    {
      data: l,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: a,
      x0: (M) => M[s.runtime.originalXAxis.dataKey],
      x0Scale: n,
      x1Scale: r,
      yScale: t,
      color: () => ""
    },
    (M) => C(M).map((R, q) => /* @__PURE__ */ i.createElement(be, { className: `bar-group-${R.index}-${R.x0}--${q} ${s.orientation}`, key: `bar-group-${R.index}-${R.x0}--${q}`, id: `bar-group-${R.index}-${R.x0}--${q}`, top: R.y }, R.bars.map((j, I) => {
      const G = s.useLogScale ? 0.1 : 0;
      let Y = s.highlightedBarValues.map((Je) => Je.value).filter((Je) => Je !== void 0);
      Y = s.xAxis.type === "date" ? S.formatDates(Y) : Y;
      let ce = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(j.key) === -1, ue = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(j.key) !== -1, ge = s.barHeight, ke = j.value >= 0 && y(j.value) ? j.y : n(0);
      const Te = j.value < 0 ? Math.abs(t(j.value)) : t(0), Se = Math.abs(t(j.value) - t(G)), U = s.barHeight, K = u(j.value, "left"), ee = s.runtime[D].type === "date" ? d(m(l[R.index][s.runtime.originalXAxis.dataKey])) : l[R.index][s.runtime.originalXAxis.dataKey], B = j.value < 0 ? "below" : "above";
      let le = p(ee, `normal ${k[s.fontSize]}px sans-serif`) < Se - 5, fe = le ? "end" : "start", ae = "start", he = le ? -5 : 5, Oe = 10;
      B === "below" && (fe = le ? "start" : "end", he = le ? 5 : -5, s.isLollipopChart && (ae = "end", Oe = -10));
      const Ke = j.value < 0 ? -1 : I, Ce = w(Ke);
      let xe = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${K}` : K, oe = s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${ee}` : ee;
      x || (oe = s.isLegendValue ? `<p className="tooltip-heading">${j.key}: ${ee}</p>` : s.runtime.xAxis.label ? `<p className="tooltip-heading">${s.runtime.xAxis.label}: ${ee}</p>` : ee);
      const te = `<ul>
                  ${s.legend.showLegendValuesTooltip && s.runtime.seriesLabels && x ? `${s.runtime.seriesLabels[j.key] || ""}<br/>` : ""}
                  <li class="tooltip-heading">${xe}</li>
                  <li class="tooltip-body">${oe}</li>
                    </li></ul>`;
      let We = "#000000";
      We = S.checkFontColor(K, Y, We);
      let se = s.runtime.seriesLabels && s.runtime.seriesLabels[j.key] ? c(s.runtime.seriesLabels[j.key]) : c(j.key);
      se = T(M.length, R.index, se);
      const we = s.isLollipopChart && s.lollipopColorStyle === "regular", Le = s.isLollipopChart && s.lollipopColorStyle === "two-tone", W = Y == null ? void 0 : Y.includes(K), _e = P(K), Ge = L(K), nt = W ? _e : s.barHasBorder === "true" ? "#000" : "transparent", et = W ? Ge.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? b : 0;
      se && We && Qt.contrast(We, se) < 4.9 && (We = le ? "#FFFFFF" : "#000000");
      const at = {
        background: (() => we ? se : Le ? Qt(se).brighten(1) : W ? "transparent" : se)(),
        borderColor: nt,
        borderStyle: "solid",
        borderWidth: et,
        width: Se,
        height: s.isLollipopChart ? N : U,
        ...Ce
      };
      return /* @__PURE__ */ i.createElement(be, { key: `${R.index}--${I}` }, /* @__PURE__ */ i.createElement("style", null, `
                        .linear #barGroup${R.index} div,
                        .Combo #barGroup${R.index} div {
                          transform-origin: 0 ${ke + ge}px;
                        }
                      `), /* @__PURE__ */ i.createElement(be, { key: `bar-sub-group-${R.index}-${R.x0}-${ke}--${I}` }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          id: `barGroup${R.index}`,
          key: `bar-group-bar-${R.index}-${j.index}-${j.value}-${j.key}`,
          x: Te,
          y: U * j.index,
          width: Se,
          height: s.isLollipopChart ? N : U,
          opacity: ce ? 0.5 : 1,
          display: ue ? "block" : "none",
          "data-tooltip-html": te,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (Je) => {
            Je.preventDefault(), h && (j[s.xAxis.dataKey] = K, h(s.uid, j));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: at })
      ), !s.isLollipopChart && $ && /* @__PURE__ */ i.createElement(
        $e,
        {
          display: ue ? "block" : "none",
          x: j.y,
          y: s.barHeight / 2 + s.barHeight * j.index,
          fill: We,
          dx: he,
          verticalAnchor: "middle",
          textAnchor: fe
        },
        K
      ), s.isLollipopChart && $ && /* @__PURE__ */ i.createElement(
        $e,
        {
          display: ue ? "block" : "none",
          x: j.y,
          y: 0,
          fill: "#000000",
          dx: Oe,
          textAnchor: ae,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        K
      ), z && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { x: s.yAxis.hideAxis ? 0 : 5, y: R.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? d(m(l[R.index][s.runtime.originalXAxis.dataKey])) : f ? l[R.index][s.runtime.originalXAxis.dataKey] : u(l[R.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: j.y, cy: 0 + N / 2, r: A / 2, fill: se, key: `circle--${j.index}`, "data-tooltip-html": te, "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`, style: { filter: "unset", opacity: 1 } }), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          x: j.y > 10 ? j.y - A / 2 : 0,
          y: 0 - N / 2,
          width: A,
          height: A,
          fill: se,
          key: `circle--${j.index}`,
          "data-tooltip-html": te,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${A}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? l.map((M) => {
    let R, q, j, I = 5;
    return R = n(v(M)) - 0.75 * s.barHeight, q = t(g(M, s.confidenceKeys.upper)), j = t(g(M, s.confidenceKeys.lower)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-h-${R}-${M[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${j} ${R - I}
                    L${j} ${R + I}
                    M${j} ${R}
                    L${q} ${R}
                    M${q} ${R - I}
                    L${q} ${R + I} `
      }
    );
  }) : "");
}, Ha = {
  Vertical: Ay,
  Horizontal: Ty,
  StackedVertical: by,
  StackedHorizontal: Ey
}, Sy = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: r, handleTooltipMouseOver: l, handleTooltipMouseOff: c, handleTooltipClick: o }) => {
  const { transformedData: s, config: u } = F.useContext(ze);
  return /* @__PURE__ */ i.createElement(Rt, { component: "BarChart" }, /* @__PURE__ */ i.createElement(be, { left: parseFloat(u.runtime.yAxis.size) }, /* @__PURE__ */ i.createElement(Ha.StackedVertical, { xScale: e, yScale: t, xMax: a, yMax: r }), /* @__PURE__ */ i.createElement(Ha.StackedHorizontal, { xScale: e, yScale: t, xMax: a, yMax: r }), /* @__PURE__ */ i.createElement(Ha.Vertical, { xScale: e, yScale: t, xMax: a, yMax: r, seriesScale: n }), /* @__PURE__ */ i.createElement(Ha.Horizontal, { xScale: e, yScale: t, xMax: a, yMax: r, seriesScale: n }), /* @__PURE__ */ i.createElement(Pt, { key: "bars", width: Number(a), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (d) => l(d, s), onMouseOut: c, onClick: (d) => o(d, s) })));
};
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, tn.apply(this, arguments);
}
function pn(e) {
  var t = e.x1, n = e.x2, a = e.y1, r = e.y2;
  return {
    x1: a,
    x2: r,
    y1: t,
    y2: n
  };
}
function Xc(e) {
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, r = a === void 0 ? 0 : a, l = e.className, c = e.max, o = e.min, s = e.firstQuartile, u = e.thirdQuartile, d = e.median, m = e.boxWidth, h = m === void 0 ? 10 : m, y = e.fill, p = e.fillOpacity, g = e.stroke, v = e.strokeWidth, f = e.rx, b = f === void 0 ? 2 : f, x = e.ry, w = x === void 0 ? 2 : x, C = e.valueScale, T = e.outliers, D = T === void 0 ? [] : T, k = e.horizontal, z = e.medianProps, $ = z === void 0 ? {} : z, N = e.maxProps, A = N === void 0 ? {} : N, P = e.minProps, L = P === void 0 ? {} : P, S = e.boxProps, M = S === void 0 ? {} : S, R = e.outlierProps, q = R === void 0 ? {} : R, j = e.container, I = j === void 0 ? !1 : j, G = e.containerProps, Y = G === void 0 ? {} : G, ce = e.children, ue = k ? r : n, ge = ue + (h || 0) / 2, ke = C.range(), Te = C(o ?? 0), Se = C(s ?? 0), U = C(d ?? 0), K = C(u ?? 0), ee = C(c ?? 0), B = {
    valueRange: ke,
    center: ge,
    offset: ue,
    boxWidth: h,
    max: {
      x1: ge - (h || 0) / 4,
      x2: ge + (h || 0) / 4,
      y1: ee,
      y2: ee
    },
    maxToThird: {
      x1: ge,
      x2: ge,
      y1: ee,
      y2: K
    },
    median: {
      x1: ue,
      x2: ue + (h || 0),
      y1: U,
      y2: U
    },
    minToFirst: {
      x1: ge,
      x2: ge,
      y1: Se,
      y2: Te
    },
    min: {
      x1: ge - (h || 0) / 4,
      x2: ge + (h || 0) / 4,
      y1: Te,
      y2: Te
    },
    box: {
      x1: ue,
      x2: h || 0,
      y1: K,
      y2: Math.abs(K - Se)
    },
    container: {
      x1: ue,
      x2: h || 0,
      y1: Math.min.apply(Math, ke),
      y2: Math.abs(ke[0] - ke[1])
    }
  };
  return k && (B.max = pn(B.max), B.maxToThird = pn(B.maxToThird), B.box.y1 = Se, B.box = pn(B.box), B.median = pn(B.median), B.minToFirst = pn(B.minToFirst), B.min = pn(B.min), B.container = pn(B.container), B.container.y1 = Math.min.apply(Math, ke)), ce ? /* @__PURE__ */ i.createElement(i.Fragment, null, ce(B)) : /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-boxplot", l)
  }, D.map(function(de, le) {
    var fe = k ? C(de) : ge, ae = k ? ge : C(de);
    return /* @__PURE__ */ i.createElement("circle", tn({
      key: "visx-boxplot-outlier-" + le,
      className: "visx-boxplot-outlier",
      cx: fe,
      cy: ae,
      r: 4,
      stroke: g,
      strokeWidth: v,
      fill: y,
      fillOpacity: p
    }, q));
  }), /* @__PURE__ */ i.createElement("line", tn({
    className: "visx-boxplot-max",
    x1: B.max.x1,
    y1: B.max.y1,
    x2: B.max.x2,
    y2: B.max.y2,
    stroke: g,
    strokeWidth: v
  }, A)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: B.maxToThird.x1,
    y1: B.maxToThird.y1,
    x2: B.maxToThird.x2,
    y2: B.maxToThird.y2,
    stroke: g,
    strokeWidth: v
  }), /* @__PURE__ */ i.createElement("rect", tn({
    className: "visx-boxplot-box",
    x: B.box.x1,
    y: B.box.y1,
    width: B.box.x2,
    height: B.box.y2,
    stroke: g,
    strokeWidth: v,
    fill: y,
    fillOpacity: p,
    rx: b,
    ry: w
  }, M)), /* @__PURE__ */ i.createElement("line", tn({
    className: "visx-boxplot-median",
    x1: B.median.x1,
    y1: B.median.y1,
    x2: B.median.x2,
    y2: B.median.y2,
    stroke: g,
    strokeWidth: v
  }, $)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: B.minToFirst.x1,
    y1: B.minToFirst.y1,
    x2: B.minToFirst.x2,
    y2: B.minToFirst.y2,
    stroke: g,
    strokeWidth: v
  }), /* @__PURE__ */ i.createElement("line", tn({
    className: "visx-boxplot-min",
    x1: B.min.x1,
    y1: B.min.y1,
    x2: B.min.x2,
    y2: B.min.y2,
    stroke: g,
    strokeWidth: v
  }, L)), I && /* @__PURE__ */ i.createElement("rect", tn({
    x: B.container.x1,
    y: B.container.y1,
    width: B.container.x2,
    height: B.container.y2,
    fillOpacity: "0"
  }, Y)));
}
Xc.propTypes = {
  max: V.number,
  min: V.number,
  firstQuartile: V.number,
  thirdQuartile: V.number,
  median: V.number,
  boxWidth: V.number,
  fill: V.string,
  fillOpacity: V.oneOfType([V.number, V.string]),
  stroke: V.string,
  strokeWidth: V.oneOfType([V.number, V.string]),
  rx: V.number,
  ry: V.number,
  outliers: V.arrayOf(V.number),
  container: V.bool,
  children: V.func
};
const ky = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: a } = F.useContext(ze);
  F.useEffect(() => {
    n.legend.hide === !1 && a({
      ...n,
      legend: {
        ...n.legend,
        hide: !0
      }
    });
  }, []);
  const r = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, l = (g) => `
      <strong>${g.columnCategory}</strong></br>
      ${n.boxplot.labels.q1}: ${g.columnFirstQuartile}<br/>
      ${n.boxplot.labels.q3}: ${g.columnThirdQuartile}<br/>
      ${n.boxplot.labels.iqr}: ${g.columnIqr}<br/>
      ${n.boxplot.labels.median}: ${g.columnMedian}
    `, c = (g) => Number(g.columnMax), o = (g) => Number(g.columnMin), s = (g) => Number(g.columnMedian), u = (g) => Number(g.columnThirdQuartile), d = (g) => Number(g.columnFirstQuartile), m = 0.5, h = e.bandwidth(), y = Math.min(40, h), p = an[n == null ? void 0 : n.palette][0] ? an[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ i.createElement(Rt, { component: "BoxPlot" }, /* @__PURE__ */ i.createElement(be, { className: "boxplot", key: "boxplot-group" }, n.boxplot.plots.map((g, v) => {
    const f = h - y, b = 4;
    return /* @__PURE__ */ i.createElement(be, { key: `boxplotplot-${v}` }, n.boxplot.plotNonOutlierValues && g.nonOutlierValues.map((x, w) => /* @__PURE__ */ i.createElement("circle", { cx: e(g.columnCategory) + Number(n.yAxis.size) + h / 2, cy: t(x), r: b, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${v}--circle-${w}` })), /* @__PURE__ */ i.createElement(
      Xc,
      {
        "data-left": e(g.columnCategory) + n.yAxis.size + f / 2 + 0.5,
        key: `box-plot-${v}`,
        min: o(g),
        max: c(g),
        left: Number(e(g.columnCategory)) + Number(n.yAxis.size) + f / 2 + 0.5,
        firstQuartile: d(g),
        thirdQuartile: u(g),
        median: s(g),
        boxWidth: y,
        fill: p,
        fillOpacity: m,
        stroke: "black",
        valueScale: t,
        outliers: n.boxplot.plotOutlierValues ? g.columnOutliers : [],
        outlierProps: {
          style: {
            fill: `${p}`,
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
          "data-tooltip-html": l(g),
          "data-tooltip-id": r
        }
      }
    ));
  })));
}, wy = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: a }) => {
  const { colorScale: r, transformedData: l, config: c, formatNumber: o, seriesHighlight: s, colorPalettes: u } = F.useContext(ze);
  let d = 4.5;
  const m = Object.keys(c.runtime.seriesLabels).length > 1, h = (y, p) => `<div>
    ${c.legend.showLegendValuesTooltip && c.runtime.seriesLabels && m ? `${c.runtime.seriesLabels[p] || ""}<br/>` : ""}
    ${c.xAxis.label}: ${o(y[c.xAxis.dataKey], "bottom")} <br/>
    ${c.yAxis.label}: ${o(y[p], "left")}
</div>`;
  return /* @__PURE__ */ i.createElement(be, { className: "scatter-plot", left: c.yAxis.size }, l.map((y, p) => c.runtime.seriesKeys.map((g, v) => {
    const f = c.legend.behavior === "highlight" && s.length > 0 && s.indexOf(g) === -1, b = c.legend.behavior === "highlight" || s.length === 0 || s.indexOf(g) !== -1, x = c.palette ? u[c.palette][v] : "#000";
    let w = {
      filter: "unset",
      opacity: 1,
      stroke: b ? "black" : ""
    };
    return /* @__PURE__ */ i.createElement(
      "circle",
      {
        key: `${p}-${v}`,
        r: d,
        cx: e(y[c.xAxis.dataKey]),
        cy: t(y[g]),
        fill: b ? x : "transparent",
        fillOpacity: f ? 0.25 : 1,
        style: w,
        "data-tooltip-html": h(y, g),
        "data-tooltip-id": `cdc-open-viz-tooltip-${c.runtime.uniqueId}`
      }
    );
  })));
};
function Cy({ height: e, xScale: t }) {
  var j;
  const { transformedData: n, config: a, formatNumber: r, twoColorPalette: l, getTextWidth: c, updateConfig: o, parseDate: s, formatDate: u, currentViewport: d } = F.useContext(ze), { barStyle: m, tipRounding: h, roundingStyle: y, twoColor: p } = a, g = F.useRef([]), [v, f] = F.useState(window.innerWidth), b = y === "standard" ? "8px" : y === "shallow" ? "5px" : y === "finger" ? "15px" : "0px", x = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const w = Number(a.xAxis.target), C = a.series[0].dataKey, T = Number(t.domain()[1]), k = n.some((I) => I[C] < 0) || w > 0 || t.domain()[0] < 0, z = a.barHasBorder === "true" ? 1 : 0, $ = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, N = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, A = Math.max(t(0), Math.min(t(w), t(T))), P = (I) => {
    if (I == null || m !== "rounded")
      return;
    let G = {};
    return I === "left" && (G = { borderRadius: `${b} 0 0 ${b}` }), I === "right" && (G = { borderRadius: `0 ${b} ${b} 0` }), h === "full" && (G = { borderRadius: b }), G;
  }, L = {
    calculate: function() {
      const G = n[0][C] < w ? "left" : "right", Y = `${a.xAxis.targetLabel} ${r(a.xAxis.target || 0, "left")}`, ce = c(Y, `bold ${x[a.fontSize]}px sans-serif`);
      let ue = a.isLollipopChart ? $ / 2 : Number(a.barHeight) / 2, ge = 0, ke = 0, Te = !1;
      G === "right" && (ge = -10, Te = ce - ge < A, ke = A - ce), G === "left" && (ge = 10, Te = t(T) - A > ce + ge, ke = A), this.text = Y, this.y = ue, this.x = ke, this.padding = ge, this.showLabel = a.xAxis.showTargetLabel ? Te : !1;
    }
  };
  L.calculate();
  const S = F.useRef(null), M = ol(S, {});
  F.useEffect(() => {
    const I = () => {
      f(window.innerWidth), g.current.forEach((G) => {
        G.style.transition = "none", G.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", I), () => {
      window.removeEventListener("resize", I);
    };
  }, []);
  const [R, q] = F.useState(!1);
  return F.useEffect(() => {
    M != null && M.isIntersecting && setTimeout(() => {
      q(!0);
    }, 100);
  }, [M == null ? void 0 : M.isIntersecting, a.animate]), F.useEffect(() => {
    g.current.forEach((I, G) => {
      if (a.animate) {
        const Y = w / T * 100;
        I.style.opacity = "0", I.style.transform = `translate(${Y / 1.07}%) scale(0, 1)`, setTimeout(() => {
          I.style.opacity = "1", I.style.transform = "translate(0) scale(1)", I.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        I.style.transition = "none", I.style.opacity = "0";
      a.animate || (I.style.transition = "none", I.style.opacity = "1");
    });
  }, [a.animate, a, R]), !a || ((j = a == null ? void 0 : a.series) == null ? void 0 : j.length) !== 1 ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(Rt, { component: "Deviation Bar" }, /* @__PURE__ */ i.createElement(be, { left: Number(a.xAxis.size) }, n.map((I, G) => {
    const Y = Number(I[C]), ce = a.isLollipopChart ? $ : Number(a.barHeight), ue = Number(a.barSpace), ge = Math.abs(t(Y) - A), ke = t(Y), Te = Y > w ? A : ke, Se = Y < w ? "left" : "right";
    let U = 0;
    U = G !== 0 ? (ue + ce + z) * G : U;
    const K = (ue + ce + z) * n.length;
    a.heights.horizontal = K;
    const B = c(r(Y, "left"), `normal ${x[a.fontSize]}px sans-serif`) < ge - 6, de = ke, le = U + ce / 2, fe = ke, ae = U + ce / 2, he = ke, Oe = U - ce / 2, Ke = P(Se), [Ce, xe] = l[p.palette], oe = { left: Ce, right: xe }, We = Qt.contrast("#000000", oe[Se]) < 4.9 ? "#FFFFFF" : "#000000";
    let se = Ny(a.isLollipopChart, B, N, We);
    const we = r(Y, "left"), Le = a.runtime.yAxis.type === "date" ? u(s(n[G][a.runtime.originalXAxis.dataKey])) : n[G][a.runtime.originalXAxis.dataKey];
    let W = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${Le}` : Le, _e = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${we}` : we;
    const Ge = `<div>
          ${W}<br />
          ${_e}
            </div>`;
    return /* @__PURE__ */ i.createElement(be, { key: `deviation-bar-${a.orientation}-${C}-${G}` }, /* @__PURE__ */ i.createElement(
      "foreignObject",
      {
        ref: (nt) => {
          g.current[G] = nt;
        },
        x: Te,
        y: U,
        width: ge,
        height: ce,
        "data-tooltip-html": Ge,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`
      },
      /* @__PURE__ */ i.createElement("div", { style: { width: ge, height: ce, border: `${z}px solid #333`, backgroundColor: oe[Se], ...Ke } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ i.createElement($e, { verticalAnchor: "middle", x: de, y: le, ...se[Se] }, r(I[C], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: fe, cy: ae, r: N / 2, fill: oe[Se], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ i.createElement("rect", { x: he, y: Oe, width: N, height: N, fill: oe[Se], style: { opacity: 1, filter: "unset" } }));
  }), L.showLabel && /* @__PURE__ */ i.createElement($e, { fontWeight: "bold", dx: L.padding, verticalAnchor: "middle", x: L.x, y: L.y }, L.text), k && /* @__PURE__ */ i.createElement(qe, { from: { x: A, y: 0 }, to: { x: A, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ i.createElement("foreignObject", { y: e / 2, ref: S }));
}
function Ny(e, t, n, a) {
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
const Py = ({ xScale: e, yScale: t, height: n, width: a, handleTooltipMouseOver: r, handleTooltipMouseOff: l }) => {
  var p;
  const { transformedData: c, rawData: o, config: s, seriesHighlight: u } = F.useContext(ze), { xAxis: d, yAxis: m, legend: h, runtime: y } = s;
  return c && /* @__PURE__ */ i.createElement(Rt, { component: "ForecastingChart" }, /* @__PURE__ */ i.createElement(be, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(m.size) }, (p = y.forecastingSeriesKeys) == null ? void 0 : p.map((g, v) => !g || !g.stages ? !1 : g.stages.map((f, b) => {
    var D;
    const { behavior: x } = h, w = o.filter((k) => k[g.stageColumn] === f.key);
    let C = x === "highlight" && u.length > 0 && u.indexOf(f.key) === -1, T = x === "highlight" || u.length === 0 || u.indexOf(f.key) !== -1;
    return /* @__PURE__ */ i.createElement(be, { className: `forecasting-areas-combo-${v}`, key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}-${v}` }, (D = g.confidenceIntervals) == null ? void 0 : D.map((k, z) => {
      const $ = Za[f.color] || an[f.color] || !1, N = () => T && $[2] ? $[2] : "transparent", A = () => T && $[1] ? $[1] : "transparent";
      if (!(k.high === "" || k.low === ""))
        return /* @__PURE__ */ i.createElement(be, { key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}--group-${b}-${z}` }, /* @__PURE__ */ i.createElement(
          zd,
          {
            curve: ja,
            data: w,
            fill: N(),
            opacity: C ? 0.1 : 0.5,
            x: (P) => e(Date.parse(P[d.dataKey])),
            y0: (P) => t(P[k.low]),
            y1: (P) => t(P[k.high])
          }
        ), z === 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(kn, { data: w, x: (P) => Number(e(Date.parse(P[d.dataKey]))), y: (P) => Number(t(P[k.high])), curve: ja, stroke: A(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ i.createElement(kn, { data: w, x: (P) => Number(e(Date.parse(P[d.dataKey]))), y: (P) => Number(t(P[k.low])), curve: ja, stroke: A(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ i.createElement(be, { key: "tooltip-hover-section" }, /* @__PURE__ */ i.createElement(Pt, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (g) => r(g, c), onMouseOut: l }))));
};
function Xa(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function $i(e, t) {
  const n = e.series.every(({ type: h }) => h === "Bar"), a = e.series.every(({ type: h }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(h)), r = (h) => (y) => h.reduce((p, g) => isNaN(Number(y[g])) ? p : p + Number(y[g]), 0), l = () => {
    let h = Math.max(...t.map((y) => Math.max(...e.runtime.seriesKeys.map((p) => Xa(y[p]) ? Number(s(y[p])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const y = t.map(r(e.runtime.seriesKeys)).filter((p) => !isNaN(p));
      h = Math.max(...y);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const y = t.map(r(e.runtime.seriesKeys));
      h = Math.max(...y);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (h = Math.max(...t.map((y) => Xa(y[e.series.dataKey]) ? Number(s(y[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const y = t.map(r(e.runtime.barSeriesKeys)), p = Math.max(...t.map((v) => Math.max(...e.runtime.lineSeriesKeys.map((f) => Number(s(v[f])))))), g = Math.max(...y);
      h = Math.max(g, p);
    }
    return h;
  }, c = () => {
    const h = Math.min(...t.map((y) => Math.min(...e.runtime.seriesKeys.map((p) => Xa(y[p]) ? Number(s(y[p])) : 1 / 0))));
    return String(h);
  }, o = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((h) => t.some((y) => y[h] >= 0)) : !1, s = (h) => h === null || h === "" ? "" : typeof h == "string" ? h.replace(/[,$]/g, "") : h, u = Number(l()), d = Number(c()), m = o();
  return { minValue: d, maxValue: u, existPositiveValue: m, isAllLine: a };
}
function dl({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var h, y, p, g;
  const r = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((v) => v.axis === "Right").map((v) => v.dataKey);
  let { minValue: c } = $i(e, n);
  const o = (v) => {
    if (!v)
      return [0];
    let f = [];
    return v.map((b, x) => f = [...f, ...n.map((w) => Number(w[b]))]), f;
  }, s = Math.max.apply(null, o(l)), u = ((y = (h = e.runtime) == null ? void 0 : h.barSeriesKeys) == null ? void 0 : y.length) > 0, d = ((g = (p = e.runtime) == null ? void 0 : p.lineSeriesKeys) == null ? void 0 : g.length) > 0;
  return (u || d) && c > 0 && (c = 0), { yScaleRight: ht({
    domain: [c, s],
    range: [t, 0]
  }), hasRightAxis: r };
}
const ts = (e) => {
  var p, g, v, f, b, x;
  const { config: t, d: n, displayArea: a, seriesKey: r, tooltipData: l, xScale: c, yScale: o, colorScale: s, parseDate: u, yScaleRight: d } = e, { lineDatapointStyle: m } = t, h = (p = t == null ? void 0 : t.series.filter((w) => w.dataKey === r)) == null ? void 0 : p[0];
  if (m === "hidden")
    return null;
  const y = (w, C, T, D, k, z) => {
    const $ = T.customColors || [], N = T.runtime.seriesLabels || [];
    let A;
    const P = (L) => T.runtime.seriesLabelsAll.indexOf(L);
    if (w)
      if (C) {
        if (P(k) === !1)
          return;
        A = C(N[k] || z);
      } else
        $ && (A = $.length > 0 ? C(P(k)) : "transparent");
    else
      A = "transparent";
    return A;
  };
  if (m === "always show")
    return /* @__PURE__ */ i.createElement(
      "circle",
      {
        cx: t.xAxis.type === "categorical" ? c(n[t.xAxis.dataKey]) : c(u(n[t.xAxis.dataKey])),
        cy: h.axis === "Right" ? d(n[h.dataKey]) : o(n[h.dataKey]),
        r: 4.5,
        opacity: n[r] ? 1 : 0,
        fillOpacity: 1,
        fill: a ? s ? s(r) : "#000" : "transparent",
        style: { filter: "unset", opacity: 1 }
      }
    );
  if (m === "hover") {
    if (!l || !l.data)
      return;
    let w = (v = (g = l == null ? void 0 : l.data) == null ? void 0 : g[0]) == null ? void 0 : v[1];
    if (!w)
      return;
    let C, T = l.data.filter((z) => z[0] === r), D = (f = T == null ? void 0 : T[0]) == null ? void 0 : f[0], k = (b = T == null ? void 0 : T[0]) == null ? void 0 : b[2];
    return l.data.indexOf(D), C = (x = T == null ? void 0 : T[0]) == null ? void 0 : x[1], l.data.map((z, $) => {
      let N = t.runtime.seriesLabelsAll.indexOf(w);
      return isNaN(C) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: t.xAxis.type === "categorical" ? c(w) : c(u(w)),
          cy: k === "right" ? d(C) : o(C),
          r: 4.5,
          opacity: 1,
          fillOpacity: 1,
          fill: y(a, s, t, N, D, r),
          style: { filter: "unset", opacity: 1 }
        }
      );
    });
  }
  return null;
}, ns = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: a, xMax: r, yMax: l, handleTooltipMouseOver: c, handleTooltipMouseOff: o, showTooltip: s, seriesStyle: u = "Line", svgRef: d, handleTooltipClick: m, tooltipData: h }) => {
  const { transformedData: y, colorScale: p, seriesHighlight: g, config: v, formatNumber: f, formatDate: b, parseDate: x, isNumber: w, updateConfig: C, handleLineType: T, tableData: D } = F.useContext(ze), { yScaleRight: k } = dl({ config: v, yMax: l, data: y, updateConfig: C });
  if (c)
    return /* @__PURE__ */ i.createElement(Rt, { component: "LineChart" }, /* @__PURE__ */ i.createElement(be, { left: v.runtime.yAxis.size ? parseInt(v.runtime.yAxis.size) : 66 }, " ", (v.runtime.lineSeriesKeys || v.runtime.seriesKeys).map((z, $) => {
      let N = v.series.filter((S) => S.dataKey === z)[0].type;
      const A = v.series.filter((S) => S.dataKey === z), P = A[0].axis ? A[0].axis : "left";
      let L = v.legend.behavior === "highlight" || g.length === 0 || g.indexOf(z) !== -1;
      return /* @__PURE__ */ i.createElement(
        be,
        {
          key: `series-${z}`,
          opacity: v.legend.behavior === "highlight" && g.length > 0 && g.indexOf(z) === -1 ? 0.5 : 1,
          display: v.legend.behavior === "highlight" || g.length === 0 && !v.legend.dynamicLegend || g.indexOf(z) !== -1 ? "block" : "none"
        },
        y.map((S, M) => {
          const R = v.series.find(({ dataKey: Y }) => Y === z), { axis: q } = R;
          v.runtime.xAxis.type === "date" ? b(x(S[v.runtime.xAxis.dataKey])) : S[v.runtime.xAxis.dataKey], a(S, z);
          const j = Object.keys(v.runtime.seriesLabels).length > 1, I = q === "Right" ? "rightLabel" : "label";
          let G = v.runtime.yAxis[I];
          return j || (G = v.isLegendValue ? v.runtime.seriesLabels[z] : G), S[z] !== void 0 && S[z] !== "" && S[z] !== null && w(S[z]) && /* @__PURE__ */ i.createElement(be, { key: `series-${z}-point-${M}`, className: "checkwidth" }, /* @__PURE__ */ i.createElement(Pt, { key: "bars", width: Number(r), height: Number(l), fill: "transparent", fillOpacity: 0.05, onMouseMove: (Y) => c(Y, D), onMouseOut: o, onClick: (Y) => m(Y, y) }), /* @__PURE__ */ i.createElement($e, { display: v.labels ? "block" : "none", x: e(n(S)), y: P === "Right" ? k(a(S, z)) : t(a(S, z)), fill: "#000", textAnchor: "middle" }, f(S[z], "left")), v.lineDatapointStyle === "hidden" || v.lineDatapointStyle === "always show" && /* @__PURE__ */ i.createElement(ts, { d: S, config: v, seriesKey: z, displayArea: L, tooltipData: h, xScale: e, yScale: t, colorScale: p, parseDate: x, yScaleRight: k }));
        }),
        /* @__PURE__ */ i.createElement(i.Fragment, null, v.lineDatapointStyle === "hover" && /* @__PURE__ */ i.createElement(ts, { config: v, seriesKey: z, displayArea: L, tooltipData: h, xScale: e, yScale: t, colorScale: p, parseDate: x, yScaleRight: k, seriesAxis: P })),
        /* @__PURE__ */ i.createElement(
          kn,
          {
            curve: ul[A[0].lineType],
            data: y,
            x: (S) => e(n(S)),
            y: (S) => P === "Right" ? k(a(S, z)) : t(a(S, z)),
            stroke: p ? p(v.runtime.seriesLabels[z]) : "#000",
            strokeWidth: 2,
            strokeOpacity: 1,
            strokeDasharray: N ? T(N) : 0,
            defined: (S, M) => S[z] !== "" && S[z] !== null && S[z] !== void 0
          }
        ),
        v.animate && /* @__PURE__ */ i.createElement(
          kn,
          {
            className: "animation",
            curve: A.lineType,
            data: y,
            x: (S) => e(n(S)),
            y: (S) => P === "Right" ? k(a(S, z)) : t(a(S, z)),
            stroke: "#fff",
            strokeWidth: 3,
            strokeOpacity: 1,
            shapeRendering: "geometricPrecision",
            strokeDasharray: N ? T(N) : 0,
            defined: (S, M) => w(S[v.runtime.seriesLabels[z]])
          }
        ),
        v.showLineSeriesLabels && (v.runtime.lineSeriesKeys || v.runtime.seriesKeys).map((S) => {
          let M;
          for (let R = y.length - 1; R >= 0; R--)
            if (y[R][S]) {
              M = y[R];
              break;
            }
          return M ? /* @__PURE__ */ i.createElement("text", { x: e(n(M)) + 5, y: t(a(M, S)), alignmentBaseline: "middle", fill: v.colorMatchLineSeriesLabels && p ? p(v.runtime.seriesLabels[S] || S) : "black" }, v.runtime.seriesLabels[S] || S) : /* @__PURE__ */ i.createElement(i.Fragment, null);
        })
      );
    }), v.legend.dynamicLegend && g.length === 0 && /* @__PURE__ */ i.createElement($e, { x: r / 2, y: l / 2, fill: "black", textAnchor: "middle", color: "black" }, v.legend.dynamicLegendChartMessage)));
};
function Qc(e) {
  var t = e.top, n = t === void 0 ? 0 : t, a = e.left, r = a === void 0 ? 0 : a, l = e.className, c = e.children;
  return /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-glyph", l),
    top: n,
    left: r
  }, c);
}
Qc.propTypes = {
  top: V.number,
  left: V.number,
  className: V.string,
  children: V.node
};
var Ly = ["children", "className", "top", "left", "size"];
function Or() {
  return Or = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Or.apply(this, arguments);
}
function Oy(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Zc(e) {
  var t = e.children, n = e.className, a = e.top, r = e.left, l = e.size, c = Oy(e, Ly), o = Zu();
  return o.type(Qu), (typeof l == "number" || l) && o.size(l), t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: o
  })) : /* @__PURE__ */ i.createElement(Qc, {
    top: a,
    left: r
  }, /* @__PURE__ */ i.createElement("path", Or({
    className: Ze("visx-glyph-diamond", n),
    d: o() || ""
  }, c)));
}
Zc.propTypes = {
  children: V.func,
  className: V.string,
  top: V.number,
  left: V.number,
  size: V.oneOfType([V.number, V.func])
};
const _y = (e) => {
  const { transformedData: t, updateConfig: n, dimensions: a, rawData: r } = F.useContext(ze), { xScale: l, yScale: c, config: o, height: s, width: u, handleTooltipMouseOff: d, handleTooltipMouseOver: m, maxWidth: h, maxHeight: y } = e, { forestPlot: p, runtime: g, dataFormat: v } = o;
  F.useEffect(() => {
    o.legend.hide || n({
      ...o,
      legend: {
        ...o.legend,
        hide: !0
      },
      xAxis: {
        ...o.xAxis,
        size: 0
      }
    });
  }, []);
  const f = 5, b = [
    { x: l(p.regression.lower), y: s - Number(o.forestPlot.rowHeight) },
    { x: l(p.regression.estimateField), y: s - f - Number(o.forestPlot.rowHeight) },
    { x: l(p.regression.upper), y: s - Number(o.forestPlot.rowHeight) },
    { x: l(p.regression.estimateField), y: s + f - Number(o.forestPlot.rowHeight) },
    { x: l(p.regression.lower), y: s - Number(o.forestPlot.rowHeight) }
  ], x = o.forestPlot.rowHeight, w = [
    { x: 0, y: x },
    { x: u, y: x }
  ], C = [
    { x: 0, y: s },
    { x: u, y: s }
  ], T = Object.entries(o.columns).map((D) => D[1]).filter((D) => D.forestPlot === !0);
  return p.rightWidthOffset !== 0 && Number(p.rightWidthOffset) / 100 * u, p.leftWidthOffset !== 0 && Number(p.leftWidthOffset) / 100 * u, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, null, p.title !== "" && /* @__PURE__ */ i.createElement($e, { className: "forest-plot--title", x: l(0), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: On(o.fontSize), fill: "black" }, p.title), p.regression.showBaseLine && /* @__PURE__ */ i.createElement(qe, { from: { x: l(p.regression.estimateField), y: 0 + x }, to: { x: l(p.regression.estimateField), y: s }, className: "forestplot__baseline", stroke: p.regression.baseLineColor || "black" }), p.showZeroLine && /* @__PURE__ */ i.createElement(qe, { from: { x: l(0), y: 0 + x }, to: { x: l(0), y: s }, className: "forestplot__zero-line", stroke: "gray", strokeDasharray: "5 5" }), t.map((D, k) => {
    const z = ht({
      domain: l.domain(),
      range: [p.radius.min, p.radius.max]
    }), $ = p.radius.scalingColumn !== "" ? z(t[k][p.estimateField]) * 5 : 4, N = p.radius.scalingColumn !== "" ? z(t[k][p.estimateField]) : 4, A = p.colors.shape ? p.colors.shape : "black", P = p.colors.line ? p.colors.line : "black", L = 4;
    return /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: P,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${l(D[p.lower])} ${c(k) - Number(L)}
                    L${l(D[p.lower])} ${c(k) + Number(L)}
                `
      }
    ), /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: P,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${l(D[p.upper])} ${c(k) - Number(L)}
                    L${l(D[p.upper])} ${c(k) + Number(L)}
                `
      }
    ), /* @__PURE__ */ i.createElement("line", { stroke: P, className: `line-${D[o.yAxis.dataKey]}`, key: k, x1: l(D[p.lower]), x2: l(D[p.upper]), y1: c(k), y2: c(k) }), p.shape === "circle" && /* @__PURE__ */ i.createElement(wu, { className: "forest-plot--circle", cx: l(Number(D[p.estimateField])), cy: c(k), r: p.radius.scalingColumn !== "" ? z(t[k][p.estimateField]) : 4, fill: A, style: { opacity: 1, filter: "unset" } }), p.shape === "square" && /* @__PURE__ */ i.createElement("rect", { className: "forest-plot--square", x: l(Number(D[p.estimateField])), y: c(k) - N / 2, width: N, height: N, fill: A, style: { opacity: 1, filter: "unset" } }), p.shape === "diamond" && /* @__PURE__ */ i.createElement(Zc, { className: "forest-plot--diamond", size: $, top: c(k), left: l(Number(D[p.estimateField])), fill: A }), p.shape === "text" && /* @__PURE__ */ i.createElement($e, { className: "forest-plot--text", x: l(Number(D[p.estimateField])), y: c(k), textAnchor: "middle", verticalAnchor: "middle", fontSize: On(o.fontSize), fill: A }, D[p.estimateField]));
  }), b && p.regression.showDiamond && /* @__PURE__ */ i.createElement(kn, { data: b, x: (D) => D.x, y: (D) => D.y, stroke: "black", strokeWidth: 2, fill: p.regression.baseLineColor, curve: zs }), p.regression.description && /* @__PURE__ */ i.createElement($e, { x: 0 - Number(o.xAxis.size), width: u, y: s - o.forestPlot.rowHeight - Number(p.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, p.regression.description), /* @__PURE__ */ i.createElement(Pt, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: u, height: s, fill: "transparent", fillOpacity: 0.5, onMouseMove: (D) => m(D, t), onMouseOut: d })), /* @__PURE__ */ i.createElement(qe, { from: w[0], to: w[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ i.createElement(qe, { from: C[0], to: C[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), T.map((D) => r.map((k, z) => /* @__PURE__ */ i.createElement($e, { className: `${k[D.name]}`, x: D.forestPlotAlignRight ? u : D.forestPlotStartingPoint, y: c(z), textAnchor: D.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: On(o.fontSize), fill: "black" }, k[D.name]))), !p.hideDateCategoryCol && t.map((D, k) => /* @__PURE__ */ i.createElement($e, { className: `${D[o.xAxis.dataKey]}`, x: 0, y: c(k), textAnchor: "start", verticalAnchor: "middle", fontSize: On(o.fontSize), fill: "black" }, D[o.xAxis.dataKey])), !p.hideDateCategoryCol && o.xAxis.dataKey && /* @__PURE__ */ i.createElement($e, { className: o.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: On(o.fontSize), fill: "black" }, o.xAxis.dataKey), T.map((D) => /* @__PURE__ */ i.createElement($e, { className: `${D.label}`, x: D.forestPlotAlignRight ? u : D.forestPlotStartingPoint, y: 0, textAnchor: D.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: On(o.fontSize), fill: "black" }, D.label)));
}, My = ({ width: e, height: t, originalWidth: n }) => {
  var w;
  const { config: a, colorScale: r, transformedData: l, formatNumber: c, seriesHighlight: o, getTextWidth: s } = F.useContext(ze);
  if (!a || ((w = a == null ? void 0 : a.series) == null ? void 0 : w.length) < 2)
    return;
  const u = a.barHasBorder === "true" ? 1 : 0, d = e / 2, m = { small: 16, medium: 18, large: 20 }, h = 1.02, y = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[0].dataKey,
    color: r(a.runtime.seriesLabels[a.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((C) => C[a.series[0].dataKey])
    ),
    labelColor: ""
  }, p = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[1].dataKey,
    color: r(a.runtime.seriesLabels[a.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((C) => C[a.series[1].dataKey])
    ),
    labelColor: ""
  }, g = ht({
    domain: [0, Math.max(y.max * h, p.max * 1.1)],
    range: [0, d]
  });
  let v = "#000000";
  Qt.contrast(v, y.color) < 4.9 && (y.labelColor = "#FFFFFF"), Qt.contrast(v, p.color) < 4.9 && (p.labelColor = "#FFFFFF");
  const f = a.yAxis.label ? `${a.yAxis.label}: ` : "", b = (C) => `<p>
				${a.dataDescription.seriesKey}: ${y.dataKey}<br/>
				${a.xAxis.dataKey}: ${C[a.xAxis.dataKey]}<br/>
				${f}${c(C[y.dataKey], "left")}
			</p>`, x = (C) => `<p>
				${a.dataDescription.seriesKey}: ${p.dataKey}<br/>
				${a.xAxis.dataKey}: ${C[a.xAxis.dataKey]}<br/>
				${f}${c(C[p.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ i.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ i.createElement(be, { top: 0, left: Number(a.xAxis.size) }, l.filter((C) => a.series[0].dataKey === y.dataKey).map((C, T) => {
    let D = a.legend.behavior === "highlight" && o.length > 0 && o.indexOf(a.series[0].dataKey) === -1, k = a.legend.behavior === "highlight" || o.length === 0 || o.indexOf(a.series[0].dataKey) !== -1, z = g(C[a.series[0].dataKey]), $ = Number(a.barHeight) ? Number(a.barHeight) : 25, N = 0;
    N = T !== 0 ? (Number(a.barSpace) + $ + u) * T : N;
    const A = (Number(a.barSpace) + $ + u) * l.length;
    a.heights.horizontal = A;
    const L = s(c(C[y.dataKey], "left"), `normal ${m[a.fontSize]}px sans-serif`) < z - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, { key: `group-${y.dataKey}-${C[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      Pt,
      {
        id: `bar-${y.dataKey}-${C[a.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${y.dataKey}-${C[a.dataDescription.xKey]}`,
        x: d - z,
        y: N,
        width: g(C[a.series[0].dataKey]),
        height: $,
        fill: y.color,
        "data-tooltip-html": b(C),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: u,
        opacity: D ? 0.5 : 1,
        display: k ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && k && /* @__PURE__ */ i.createElement($e, { textAnchor: L ? "start" : "end", dx: L ? 5 : -5, verticalAnchor: "middle", x: d - z, y: N + a.barHeight / 2, fill: L ? y.labelColor : "#000" }, c(C[y.dataKey], "left"))));
  }), l.filter((C) => a.series[1].dataKey === p.dataKey).map((C, T) => {
    let D = g(C[a.series[1].dataKey]), k = a.legend.behavior === "highlight" && o.length > 0 && o.indexOf(a.series[1].dataKey) === -1, z = a.legend.behavior === "highlight" || o.length === 0 || o.indexOf(a.series[1].dataKey) !== -1, $ = a.barHeight ? Number(a.barHeight) : 25, N = 0;
    N = T !== 0 ? (Number(a.barSpace) + $ + u) * T : N;
    const A = (Number(a.barSpace) + $ + u) * l.length;
    a.heights.horizontal = A;
    const L = s(c(C[p.dataKey], "left"), `normal ${m[a.fontSize]}px sans-serif`) < D - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                      .bar-${p.dataKey}-${C[a.xAxis.dataKey]} {
                          transform-origin: ${d}px ${N}px
                      }
							      `), /* @__PURE__ */ i.createElement(be, { key: `group-${p.dataKey}-${C[a.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      Pt,
      {
        id: `bar-${p.dataKey}-${C[a.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${p.dataKey}-${C[a.dataDescription.xKey]}`,
        x: d,
        y: N,
        width: g(C[a.series[1].dataKey]),
        height: $,
        fill: p.color,
        "data-tooltip-html": x(C),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        strokeWidth: u,
        stroke: "#333",
        opacity: k ? 0.5 : 1,
        display: z ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && z && /* @__PURE__ */ i.createElement($e, { textAnchor: L ? "end" : "start", dx: L ? -5 : 5, verticalAnchor: "middle", x: d + D, y: N + a.barHeight / 2, fill: L ? p.labelColor : "#000" }, c(C[p.dataKey], "left"))));
  }))));
}, Dy = ({ config: e, minValue: t, maxValue: n, existPositiveValue: a, data: r, isAllLine: l }) => {
  let c = 0, o = 0;
  if (!r)
    return { min: c, max: o };
  const { max: s, min: u } = e.runtime.yAxis, d = 1.15, m = a ? s >= n : s >= 0, h = e.useLogScale ? u >= 0 : u <= 0 && t >= 0 || u <= t && t < 0;
  c = u && h ? u : t, o = s && m ? s : Number.MIN_VALUE;
  let y = 0;
  if (e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Deviation Bar") {
    let p = 0;
    if (e.hasOwnProperty("confidenceKeys")) {
      let g = r.map(function(f) {
        return f[e.confidenceKeys.upper];
      });
      p = Math.max.apply(Math, g), p > o && (o = p * d);
      let v = r.map(function(f) {
        return f[e.confidenceKeys.lower] !== void 0 ? f[e.confidenceKeys.lower] : "";
      });
      y = Math.min.apply(Math, v), y < c && (c = y * d);
    }
  }
  if (e.visualizationType === "Forecasting") {
    const {
      runtime: { forecastingSeriesKeys: p }
    } = e;
    if (p.length > 0) {
      let g = [];
      p.forEach((x) => {
        var w;
        (w = x.confidenceIntervals) == null || w.map((C) => {
          g.push(C.high), g.push(C.low);
        });
      });
      const v = r.map((x) => g.map((w) => x[w])), f = Math.max.apply(
        null,
        v.map((x) => x[0])
      ), b = Math.min.apply(
        null,
        v.map((x) => x[1])
      );
      f > o && (o = f), b < c && (c = b);
    }
  }
  if ((e.visualizationType === "Bar" && y >= 0 || e.visualizationType === "Combo" && !l) && c > 0 && (c = 0), e.visualizationType === "Combo" && l && ((u == null || u === "") && c > 0 && (c = 0), u)) {
    const p = e.useLogScale ? u >= 0 && u < t : u < t;
    c = u && p ? u : t;
  }
  if (e.visualizationType === "Deviation Bar" && c > 0) {
    const p = Number(u) < Math.min(t, Number(e.xAxis.target));
    c = u && p ? u : 0;
  }
  if (e.visualizationType === "Line") {
    const p = e.useLogScale ? u >= 0 && u < t : u < t;
    c = u && p ? u : t;
  }
  if (o === Number.MIN_VALUE && (o = a ? n : 0), e.runtime.yAxis.paddingPercent) {
    let p = (o - c) * e.runtime.yAxis.paddingPercent;
    c -= p, o += p;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const p = r.map((v) => v[e.series[0].dataKey]), g = Math.max(...p).toString().length;
    switch (!0) {
      case (g > 8 && g <= 12):
        o = o * 1.3;
        break;
      case (g > 4 && g <= 7):
        o = o * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (c < 0 ? (o *= 1.2, c *= 1.2) : o *= 1.1), { min: c, max: o };
}, $y = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: a, min: r, max: l, config: c, data: o } = e;
  const { rawData: s, dimensions: u } = F.useContext(ze), [d, m] = u, h = c.runtime.barSeriesKeys || c.runtime.seriesKeys, y = c.runtime.xAxis.type, p = c.orientation === "horizontal", g = ($) => $[c.runtime.originalXAxis.dataKey], v = o.map(($) => g($)), { visualizationType: f } = c;
  let b = null, x = null, w = null, C = null, T = null, D = null, k = null;
  const z = {
    TIME: "time",
    LOG: "log",
    POINT: "point",
    LINEAR: "linear",
    BAND: "band"
  };
  if (p && (b = zy({ min: r * 1.03, ...e }), b.type = c.useLogScale ? z.LOG : z.LINEAR, x = Fy(y, t), x.rangeRound([0, a]), T = Ka(h, [0, a])), p || (k = Ka(v, [0, n], 0.5), b = Ka(t, [0, n], 0.5), b.type = z.POINT, x = Ry(e), T = Ka(h, [0, n])), c.xAxis.type === "date" && c.xAxis.sortDates && (b = Ef({
    domain: [Math.min(...t), Math.max(...t)],
    range: [0, n]
  }), k = b, b.type = z.LINEAR), c.visualizationType === "Deviation Bar") {
    const $ = c.isLollipopChart ? 1.05 : 1.03;
    x = mo({
      domain: t,
      range: [0, a]
    }), b = ht({
      domain: [r * $, Math.max(Number(c.xAxis.target), l)],
      range: [0, n],
      round: !0,
      nice: !0
    }), b.type = z.LINEAR;
  }
  if (c.visualizationType === "Scatter Plot" && c.xAxis.type === "continuous" && (b = ht({
    domain: [0, Math.max.apply(null, b.domain())],
    range: [0, n]
  }), b.type = z.LINEAR), f === "Box Plot") {
    const $ = [];
    if (c.boxplot.plots.map((L) => L.columnOutliers.map((S) => $.push(S))) && !c.boxplot.hideOutliers) {
      let L = Math.min(...$), S = Math.max(...$);
      L < r && (r = L), S > l && (l = S);
    }
    let A = Math.min(...c.boxplot.plots.map((L) => L.columnLowerBounds)), P = Math.max(...c.boxplot.plots.map((L) => L.columnUpperBounds));
    A < r && (r = A), P > l && (l = P), x = ht({
      range: [a, 0],
      round: !0,
      domain: [r, l]
    }), b = mo({
      range: [0, n],
      round: !0,
      domain: c.boxplot.categories,
      padding: 0.4
    }), b.type = z.BAND;
  }
  if (f === "Paired Bar") {
    let N = Math.max.apply(
      Math,
      o.map((P) => {
        var L;
        return P[(L = c.series[0]) == null ? void 0 : L.dataKey];
      })
    ), A = Math.max.apply(
      Math,
      o.map((P) => {
        var L;
        return P[(L = c.series[1]) == null ? void 0 : L.dataKey];
      })
    );
    C = ht({
      domain: [0, Math.max(N, A) * 1.02],
      range: [n / 2, 0]
    }), w = ht({
      domain: C.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (f === "Forest Plot") {
    const $ = () => c.forestPlot.regression.showDiamond || c.forestPlot.regression.description ? [0 + c.forestPlot.rowHeight * 2, a - c.forestPlot.rowHeight] : [0 + c.forestPlot.rowHeight * 2, a];
    x = ht({
      domain: [0, s.length],
      range: $()
    });
    const N = 5, A = Number(c.forestPlot.leftWidthOffset) / 100 * n, P = Number(c.forestPlot.rightWidthOffset) / 100 * n, L = Number(c.forestPlot.rightWidthOffsetMobile) / 100 * n, S = Number(c.forestPlot.leftWidthOffsetMobile) / 100 * n;
    d > 480 ? b = ht({
      domain: [Math.min(...o.map((M) => parseFloat(M[c.forestPlot.lower]))) - N, Math.max(...o.map((M) => parseFloat(M[c.forestPlot.upper]))) + N],
      range: [A, n - P],
      type: "linear"
    }) : b = ht({
      domain: [Math.min(...o.map((M) => parseFloat(M[c.forestPlot.lower]))) - N, Math.max(...o.map((M) => parseFloat(M[c.forestPlot.upper]))) + N],
      range: [S, n - L],
      type: "linear"
    });
  }
  return { xScale: b, yScale: x, seriesScale: T, g1xScale: C, g2xScale: w, xScaleNoPadding: D, xScaleBrush: k };
}, zy = ({ min: e, max: t, xMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? Xs : ht)({
  domain: [e, t],
  range: [0, n],
  nice: a.useLogScale,
  zero: a.useLogScale,
  type: a.useLogScale ? "log" : "linear"
})), Ry = ({ min: e, max: t, yMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? Xs : ht)({
  domain: [e, t],
  range: [n, 0],
  nice: a.useLogScale,
  zero: a.useLogScale
})), Fy = (e, t) => e === "date" ? ht({
  domain: [Math.min(...t), Math.max(...t)]
}) : Rn({ domain: t, padding: 0.5 }), Ka = (e, t, n = 0) => Rn({
  domain: e,
  range: t,
  padding: n,
  type: "point"
});
function By(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
var fl = {};
const Wy = /* @__PURE__ */ Hr(bp), Vy = /* @__PURE__ */ Hr(Pp);
var ml = {};
ml.__esModule = !0;
ml.default = Hy;
var Ia = F;
function Hy(e) {
  var t = (0, Ia.useState)(e), n = t[0], a = t[1], r = (0, Ia.useRef)(null), l = (0, Ia.useCallback)(function(c, o) {
    r.current = o || null, a(c);
  }, [a]);
  return (0, Ia.useLayoutEffect)(function() {
    r.current && (r.current(n), r.current = null);
  }, [n]), [n, l];
}
var hl = {}, pl = {};
pl.__esModule = !0;
pl.default = Ky;
function Ky(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var yl = {};
yl.__esModule = !0;
yl.default = qy;
function Iy(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = jy(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jy(e, t) {
  if (e) {
    if (typeof e == "string")
      return as(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return as(e, t);
  }
}
function as(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function qy(e, t) {
  for (var n = e, a = 1 / 0, r = Iy(t), l; !(l = r()).done; ) {
    var c = l.value, o = Math.sqrt(Math.pow(c.x - e.x, 2) + Math.pow(c.y - e.y, 2));
    o < a && (a = o, n = {
      x: c.x,
      y: c.y
    });
  }
  return n;
}
hl.__esModule = !0;
hl.default = Yy;
var is = Jc(pl), Uy = Jc(yl);
function Jc(e) {
  return e && e.__esModule ? e : { default: e };
}
function Yy(e, t, n) {
  var a, r, l, c;
  return n === void 0 && (n = {}), t.length > 0 ? (0, Uy.default)(e, t) : {
    x: (0, is.default)(e.x, (a = n.xMin) != null ? a : -1 / 0, (r = n.xMax) != null ? r : 1 / 0),
    y: (0, is.default)(e.y, (l = n.yMin) != null ? l : -1 / 0, (c = n.yMax) != null ? c : 1 / 0)
  };
}
var gl = {};
gl.__esModule = !0;
gl.default = Zy;
var Xy = F;
function Qy(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var a = [], r = e.getTotalLength(), l = 0; l <= r; l += n) {
    var c = e.getPointAtLength(l), o = c.matrixTransform(t);
    a.push(o);
  }
  return a;
}
function Zy(e) {
  var t = (0, Xy.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return Qy(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
fl.__esModule = !0;
fl.default = eg;
var yn = F, $n = Wy, rs = Vy, Jy = xl(ml), ls = xl(hl), Gy = xl(gl);
function xl(e) {
  return e && e.__esModule ? e : { default: e };
}
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Kt.apply(this, arguments);
}
function eg(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, a = n === void 0 ? !1 : n, r = t.snapToPointer, l = r === void 0 ? !0 : r, c = t.onDragEnd, o = t.onDragMove, s = t.onDragStart, u = t.x, d = t.y, m = t.dx, h = t.dy, y = t.isDragging, p = t.restrict, g = p === void 0 ? {} : p, v = t.restrictToPath, f = (0, yn.useRef)({
    x: u,
    y: d,
    dx: m,
    dy: h
  }), b = (0, Jy.default)({
    x: u,
    y: d,
    dx: m ?? 0,
    dy: h ?? 0,
    isDragging: !1
  }), x = b[0], w = b[1], C = (0, yn.useState)(new $n.Point({
    x: 0,
    y: 0
  })), T = C[0], D = C[1];
  (0, yn.useEffect)(function() {
    (f.current.x !== u || f.current.y !== d || f.current.dx !== m || f.current.dy !== h) && (f.current = {
      x: u,
      y: d,
      dx: m,
      dy: h
    }, w(function(A) {
      return Kt({}, A, {
        x: u,
        y: d,
        dx: m ?? 0,
        dy: h ?? 0
      });
    }));
  }), (0, yn.useEffect)(function() {
    y !== void 0 && x.isDragging !== y && w(function(A) {
      return Kt({}, A, {
        isDragging: y
      });
    });
  }, [x.isDragging, y, w]);
  var k = (0, Gy.default)(v), z = (0, yn.useCallback)(function(A) {
    A.persist(), w(function(P) {
      var L = P.x, S = L === void 0 ? 0 : L, M = P.y, R = M === void 0 ? 0 : M, q = P.dx, j = P.dy, I = new $n.Point({
        x: (S || 0) + q,
        y: (R || 0) + j
      }), G = (0, rs.localPoint)(A) || new $n.Point({
        x: 0,
        y: 0
      }), Y = l ? G : I, ce = (0, ls.default)(Y, k, g);
      return D((0, $n.subtractPoints)(I, G)), {
        isDragging: !0,
        dx: a ? 0 : P.dx,
        dy: a ? 0 : P.dy,
        x: a ? ce.x : ce.x - P.dx,
        y: a ? ce.y : ce.y - P.dy
      };
    }, s && function(P) {
      s(Kt({}, P, {
        event: A
      }));
    });
  }, [s, a, g, k, w, l]), $ = (0, yn.useCallback)(function(A) {
    A.persist(), w(function(P) {
      if (!P.isDragging)
        return P;
      var L = P.x, S = L === void 0 ? 0 : L, M = P.y, R = M === void 0 ? 0 : M, q = (0, rs.localPoint)(A) || new $n.Point({
        x: 0,
        y: 0
      }), j = l ? q : (0, $n.sumPoints)(q, T), I = (0, ls.default)(j, k, g);
      return Kt({}, P, {
        dx: I.x - S,
        dy: I.y - R
      });
    }, o && function(P) {
      P.isDragging && o(Kt({}, P, {
        event: A
      }));
    });
  }, [w, o, l, T, k, g]), N = (0, yn.useCallback)(function(A) {
    A.persist(), w(function(P) {
      return Kt({}, P, {
        isDragging: !1
      });
    }, c && function(P) {
      c(Kt({}, P, {
        event: A
      }));
    });
  }, [c, w]);
  return Kt({}, x, {
    dragEnd: N,
    dragMove: $,
    dragStart: z
  });
}
var zi = Gc, na = vl(ms), tr = vl(F), tg = vl(fl);
function vl(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gc(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, a = e.snapToPointer, r = a === void 0 ? !0 : a, l = e.children, c = e.dx, o = e.dy, s = e.height, u = e.onDragEnd, d = e.onDragMove, m = e.onDragStart, h = e.resetOnStart, y = e.width, p = e.x, g = e.y, v = e.isDragging, f = e.restrict, b = e.restrictToPath, x = (0, tg.default)({
    resetOnStart: h,
    snapToPointer: r,
    onDragEnd: u,
    onDragMove: d,
    onDragStart: m,
    x: p,
    y: g,
    dx: c,
    dy: o,
    isDragging: v,
    restrict: f,
    restrictToPath: b
  });
  return /* @__PURE__ */ tr.default.createElement(tr.default.Fragment, null, x.isDragging && n && /* @__PURE__ */ tr.default.createElement("rect", {
    width: y,
    height: s,
    onPointerDown: x.dragStart,
    onPointerMove: x.dragMove,
    onPointerUp: x.dragEnd,
    fill: "transparent"
  }), l(x));
}
Gc.propTypes = {
  children: na.default.func.isRequired,
  width: na.default.number.isRequired,
  height: na.default.number.isRequired,
  captureDragArea: na.default.bool,
  isDragging: na.default.bool
};
function Ai(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var n = e.range(), a = n[0], r = n[1], l = 0, c = "step" in e && typeof e.step < "u" ? e.step() : 1, o = c * (r - a) / Math.abs(r - a);
  if (o > 0)
    for (; t > a + o * (l + 1); )
      l += 1;
  else
    for (; t < a + o * (l + 1); )
      l += 1;
  return l;
}
function os(e, t, n, a) {
  var r, l = Ai(e, t + (t < n ? -a : a)), c = Ai(e, n + (n < t ? -a : a)), o = Math.min(l, c), s = Math.max(l, c);
  if ("invert" in e && typeof e.invert < "u")
    r = {
      start: o,
      end: s
    };
  else {
    for (var u = [], d = e.domain(), m = o; m <= s; m += 1)
      u.push(d[m]);
    r = {
      values: u
    };
  }
  return r;
}
function bl(e) {
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
function ng(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _r(e, t);
}
function _r(e, t) {
  return _r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, _r(e, t);
}
var eu = /* @__PURE__ */ function(e) {
  ng(t, e);
  function t() {
    for (var a, r = arguments.length, l = new Array(r), c = 0; c < r; c++)
      l[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(l)) || this, a.handleDragStart = function(o) {
      var s = a.props, u = s.onBrushHandleChange, d = s.type, m = s.onBrushStart;
      u && u(d, bl(o.event)), m && m(o);
    }, a.handleDragMove = function(o) {
      var s = a.props, u = s.updateBrush, d = s.type, m = s.isControlled;
      !o.isDragging || m || u(function(h) {
        var y = h.start, p = h.end, g = 0, v = Math.max(y.x, p.x), f = Math.min(y.x, p.x), b = Math.max(y.y, p.y), x = Math.min(y.y, p.y);
        switch (d) {
          case "right":
            return g = v + o.dx, _t({}, h, {
              activeHandle: d,
              extent: _t({}, h.extent, {
                x0: Math.max(Math.min(g, y.x), h.bounds.x0),
                x1: Math.min(Math.max(g, y.x), h.bounds.x1)
              })
            });
          case "left":
            return g = f + o.dx, _t({}, h, {
              activeHandle: d,
              extent: _t({}, h.extent, {
                x0: Math.min(g, p.x),
                x1: Math.max(g, p.x)
              })
            });
          case "bottom":
            return g = b + o.dy, _t({}, h, {
              activeHandle: d,
              extent: _t({}, h.extent, {
                y0: Math.min(g, y.y),
                y1: Math.max(g, y.y)
              })
            });
          case "top":
            return g = x + o.dy, _t({}, h, {
              activeHandle: d,
              extent: _t({}, h.extent, {
                y0: Math.min(g, p.y),
                y1: Math.max(g, p.y)
              })
            });
          default:
            return h;
        }
      });
    }, a.handleDragEnd = function() {
      var o = a.props, s = o.updateBrush, u = o.onBrushEnd, d = o.onBrushHandleChange, m = o.isControlled;
      m || s(function(h) {
        var y = h.start, p = h.end, g = h.extent;
        y.x = Math.min(g.x0, g.x1), y.y = Math.min(g.y0, g.y0), p.x = Math.max(g.x0, g.x1), p.y = Math.max(g.y0, g.y1);
        var v = _t({}, h, {
          start: y,
          end: p,
          activeHandle: null,
          isBrushing: !1,
          extent: {
            x0: Math.min(y.x, p.x),
            x1: Math.max(y.x, p.x),
            y0: Math.min(y.y, p.y),
            y1: Math.max(y.y, p.y)
          }
        });
        return u && u(v), v;
      }), d && d();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this, l = this.props, c = l.stageWidth, o = l.stageHeight, s = l.brush, u = l.type, d = l.handle, m = l.isControlled, h = l.isDragInProgress, y = l.renderBrushHandle, p = d.x, g = d.y, v = d.width, f = d.height, b = u === "right" || u === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ i.createElement(zi, {
      width: c,
      height: o,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: m ? h : void 0
    }, function(x) {
      var w = x.dragStart, C = x.dragEnd, T = x.dragMove, D = x.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, D && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: c,
        height: o,
        style: {
          cursor: b
        },
        onPointerMove: T,
        onPointerUp: m ? void 0 : C,
        onPointerLeave: m ? void 0 : C
      }), !y && /* @__PURE__ */ i.createElement("rect", {
        x: p,
        y: g,
        width: v,
        height: f,
        fill: "transparent",
        className: "visx-brush-handle-" + u,
        onPointerDown: w,
        onPointerMove: T,
        onPointerUp: m ? void 0 : C,
        style: {
          cursor: b,
          pointerEvents: s.activeHandle || s.isBrushing ? "none" : "all"
        }
      }), y && /* @__PURE__ */ i.createElement("g", {
        onPointerDown: w,
        onPointerMove: T,
        onPointerUp: m ? void 0 : C
      }, y(_t({}, r.props.handle, {
        height: o,
        className: "visx-brush-handle-" + u,
        isBrushActive: s.extent.x0 !== -1 && s.extent.x1 !== -1
      }))));
    });
  }, t;
}(i.Component);
eu.propTypes = {
  stageWidth: V.number.isRequired,
  stageHeight: V.number.isRequired,
  updateBrush: V.func.isRequired,
  onBrushStart: V.func,
  onBrushEnd: V.func,
  handle: V.shape({
    x: V.number.isRequired,
    y: V.number.isRequired,
    width: V.number.isRequired,
    height: V.number.isRequired
  }).isRequired,
  isControlled: V.bool,
  isDragInProgress: V.bool,
  onBrushHandleChange: V.func,
  renderBrushHandle: V.func
};
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ct.apply(this, arguments);
}
function ag(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Mr(e, t);
}
function Mr(e, t) {
  return Mr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Mr(e, t);
}
var El = /* @__PURE__ */ function(e) {
  ag(t, e);
  function t() {
    for (var a, r = arguments.length, l = new Array(r), c = 0; c < r; c++)
      l[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(l)) || this, a.cornerDragMove = function(o) {
      var s = a.props, u = s.updateBrush, d = s.type;
      o.isDragging && u(function(m) {
        var h = m.start, y = m.end, p = Math.max(h.x, y.x), g = Math.min(h.x, y.x), v = Math.max(h.y, y.y), f = Math.min(h.y, y.y), b = 0, x = 0;
        switch (d) {
          case "topRight":
            return b = p + o.dx, x = f + o.dy, Ct({}, m, {
              activeHandle: d,
              extent: Ct({}, m.extent, {
                x0: Math.max(Math.min(b, h.x), m.bounds.x0),
                x1: Math.min(Math.max(b, h.x), m.bounds.x1),
                y0: Math.max(Math.min(x, y.y), m.bounds.y0),
                y1: Math.min(Math.max(x, y.y), m.bounds.y1)
              })
            });
          case "topLeft":
            return b = g + o.dx, x = f + o.dy, Ct({}, m, {
              activeHandle: d,
              extent: Ct({}, m.extent, {
                x0: Math.max(Math.min(b, y.x), m.bounds.x0),
                x1: Math.min(Math.max(b, y.x), m.bounds.x1),
                y0: Math.max(Math.min(x, y.y), m.bounds.y0),
                y1: Math.min(Math.max(x, y.y), m.bounds.y1)
              })
            });
          case "bottomLeft":
            return b = g + o.dx, x = v + o.dy, Ct({}, m, {
              activeHandle: d,
              extent: Ct({}, m.extent, {
                x0: Math.max(Math.min(b, y.x), m.bounds.x0),
                x1: Math.min(Math.max(b, y.x), m.bounds.x1),
                y0: Math.max(Math.min(x, h.y), m.bounds.y0),
                y1: Math.min(Math.max(x, h.y), m.bounds.y1)
              })
            });
          case "bottomRight":
            return b = p + o.dx, x = v + o.dy, Ct({}, m, {
              activeHandle: d,
              extent: Ct({}, m.extent, {
                x0: Math.max(Math.min(b, h.x), m.bounds.x0),
                x1: Math.min(Math.max(b, h.x), m.bounds.x1),
                y0: Math.max(Math.min(x, h.y), m.bounds.y0),
                y1: Math.min(Math.max(x, h.y), m.bounds.y1)
              })
            });
          default:
            return m;
        }
      });
    }, a.cornerDragEnd = function() {
      var o = a.props, s = o.updateBrush, u = o.onBrushEnd;
      s(function(d) {
        var m = d.start, h = d.end, y = d.extent;
        m.x = Math.min(y.x0, y.x1), m.y = Math.min(y.y0, y.y0), h.x = Math.max(y.x0, y.x1), h.y = Math.max(y.y0, y.y1);
        var p = Ct({}, d, {
          start: m,
          end: h,
          activeHandle: null,
          domain: {
            x0: Math.min(m.x, h.x),
            x1: Math.max(m.x, h.x),
            y0: Math.min(m.y, h.y),
            y1: Math.max(m.y, h.y)
          }
        });
        return u && u(p), p;
      });
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this.props, l = r.type, c = r.brush, o = r.stageWidth, s = r.stageHeight, u = r.style, d = r.corner, m = (u == null ? void 0 : u.cursor) || (l === "topLeft" || l === "bottomRight" ? "nwse-resize" : "nesw-resize"), h = c.activeHandle || c.isBrushing ? "none" : "all";
    return /* @__PURE__ */ i.createElement(zi, {
      width: o,
      height: s,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(y) {
      var p = y.dragMove, g = y.dragEnd, v = y.dragStart, f = y.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, f && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: o,
        height: s,
        style: {
          cursor: m
        },
        onPointerMove: p,
        onPointerUp: g
      }), /* @__PURE__ */ i.createElement("rect", Ct({
        fill: "transparent",
        onPointerDown: v,
        onPointerMove: p,
        onPointerUp: g,
        className: "visx-brush-corner-" + l,
        style: Ct({
          cursor: m,
          pointerEvents: h
        }, u)
      }, d)));
    });
  }, t;
}(i.Component);
El.propTypes = {
  stageWidth: V.number.isRequired,
  stageHeight: V.number.isRequired,
  updateBrush: V.func.isRequired,
  onBrushEnd: V.func,
  corner: V.shape({
    x: V.number.isRequired,
    y: V.number.isRequired,
    width: V.number.isRequired,
    height: V.number.isRequired
  }).isRequired
};
El.defaultProps = {
  style: {}
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
function ig(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Dr(e, t);
}
function Dr(e, t) {
  return Dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Dr(e, t);
}
var rg = {
  cursor: "move"
}, Al = /* @__PURE__ */ function(e) {
  ig(t, e);
  function t() {
    for (var a, r = arguments.length, l = new Array(r), c = 0; c < r; c++)
      l[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(l)) || this, a.selectionDragStart = function(o) {
      var s = a.props, u = s.onMoveSelectionChange, d = s.onBrushStart;
      u && u("move", bl(o.event)), d && d(o);
    }, a.selectionDragMove = function(o) {
      var s = a.props, u = s.updateBrush, d = s.isControlled;
      d || u(function(m) {
        var h = m.start, y = h.x, p = h.y, g = m.end, v = g.x, f = g.y, b = o.dx > 0 ? Math.min(o.dx, m.bounds.x1 - v) : Math.max(o.dx, m.bounds.x0 - y), x = o.dy > 0 ? Math.min(o.dy, m.bounds.y1 - f) : Math.max(o.dy, m.bounds.y0 - p);
        return nn({}, m, {
          isBrushing: !0,
          extent: nn({}, m.extent, {
            x0: y + b,
            x1: v + b,
            y0: p + x,
            y1: f + x
          })
        });
      });
    }, a.selectionDragEnd = function() {
      var o = a.props, s = o.updateBrush, u = o.onBrushEnd, d = o.onMoveSelectionChange, m = o.isControlled;
      m || s(function(h) {
        var y = nn({}, h, {
          isBrushing: !1,
          start: nn({}, h.start, {
            x: Math.min(h.extent.x0, h.extent.x1),
            y: Math.min(h.extent.y0, h.extent.y1)
          }),
          end: nn({}, h.end, {
            x: Math.max(h.extent.x0, h.extent.x1),
            y: Math.max(h.extent.y0, h.extent.y1)
          })
        });
        return u && u(y), y;
      }), d && d();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this.props, l = r.width, c = r.height, o = r.stageWidth, s = r.stageHeight, u = r.brush, d = r.disableDraggingSelection, m = r.onMouseLeave, h = r.onMouseMove, y = r.onMouseUp, p = r.onClick, g = r.selectedBoxStyle, v = r.isControlled, f = r.isDragInProgress;
    return /* @__PURE__ */ i.createElement(zi, {
      width: l,
      height: c,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: v ? f : void 0
    }, function(b) {
      var x = b.isDragging, w = b.dragStart, C = b.dragEnd, T = b.dragMove;
      return /* @__PURE__ */ i.createElement("g", null, x && /* @__PURE__ */ i.createElement("rect", {
        width: o,
        height: s,
        fill: "transparent",
        onPointerUp: v ? void 0 : C,
        onPointerMove: T,
        onPointerLeave: v ? void 0 : C,
        style: rg
      }), /* @__PURE__ */ i.createElement("rect", nn({
        x: Math.min(u.extent.x0, u.extent.x1),
        y: Math.min(u.extent.y0, u.extent.y1),
        width: l,
        height: c,
        className: "visx-brush-selection",
        onPointerDown: d ? void 0 : w,
        onPointerLeave: function(k) {
          m && m(k);
        },
        onPointerMove: function(k) {
          T(k), h && h(k);
        },
        onPointerUp: function(k) {
          v || C(k), y && y(k);
        },
        onClick: function(k) {
          p && p(k);
        },
        style: {
          pointerEvents: u.isBrushing || u.activeHandle ? "none" : "all",
          cursor: d ? void 0 : "move"
        }
      }, g)));
    });
  }, t;
}(i.Component);
Al.propTypes = {
  width: V.number.isRequired,
  height: V.number.isRequired,
  stageWidth: V.number.isRequired,
  stageHeight: V.number.isRequired,
  updateBrush: V.func.isRequired,
  onMoveSelectionChange: V.func,
  onBrushStart: V.func,
  onBrushEnd: V.func,
  disableDraggingSelection: V.bool.isRequired,
  onMouseLeave: V.func,
  onMouseMove: V.func,
  onMouseUp: V.func,
  onClick: V.func,
  isControlled: V.bool,
  isDragInProgress: V.bool
};
Al.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Nt.apply(this, arguments);
}
function lg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $r(e, t);
}
function $r(e, t) {
  return $r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, $r(e, t);
}
var og = {
  cursor: "crosshair"
}, Tl = /* @__PURE__ */ function(e) {
  lg(t, e);
  function t(a) {
    var r;
    r = e.call(this, a) || this, r.mouseUpTime = 0, r.mouseDownTime = 0, r.handleWindowPointerUp = function() {
      var o = r.props, s = o.useWindowMoveEvents, u = o.onBrushEnd, d = o.resetOnEnd, m = r.state.brushingType;
      s && m && r.updateBrush(function(h) {
        var y = h.start, p = h.end, g = h.extent;
        y.x = Math.min(g.x0, g.x1), y.y = Math.min(g.y0, g.y0), p.x = Math.max(g.x0, g.x1), p.y = Math.max(g.y0, g.y1);
        var v = Nt({}, h, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return u && u(v), d && r.reset(), v;
      });
    }, r.handleWindowPointerMove = function(o) {
      var s = r.props.useWindowMoveEvents, u = r.state, d = u.brushingType, m = u.isBrushing, h = u.brushPageOffset, y = u.start;
      if (!(!s || !m)) {
        var p = o.pageX - ((h == null ? void 0 : h.pageX) || 0), g = o.pageY - ((h == null ? void 0 : h.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(d ?? "") && r.updateBrush(function(v) {
          var f = v.start, b = f.x, x = f.y, w = v.end, C = w.x, T = w.y;
          return Nt({}, v, {
            isBrushing: !0,
            extent: Nt({}, v.extent, r.getExtent({
              x: d === "left" ? Math.min(Math.max(b + p, v.bounds.x0), v.bounds.x1) : b,
              y: d === "top" ? Math.min(Math.max(x + g, v.bounds.y0), v.bounds.y1) : x
            }, {
              x: d === "right" ? Math.min(Math.max(C + p, v.bounds.x0), v.bounds.x1) : C,
              y: d === "bottom" ? Math.min(Math.max(T + g, v.bounds.y0), v.bounds.y1) : T
            }))
          });
        }), d === "move" && r.updateBrush(function(v) {
          var f = v.start, b = f.x, x = f.y, w = v.end, C = w.x, T = w.y, D = p > 0 ? Math.min(p, v.bounds.x1 - C) : Math.max(p, v.bounds.x0 - b), k = g > 0 ? Math.min(g, v.bounds.y1 - T) : Math.max(g, v.bounds.y0 - x);
          return Nt({}, v, {
            isBrushing: !0,
            extent: Nt({}, v.extent, {
              x0: b + D,
              y0: x + k,
              x1: C + D,
              y1: T + k
            })
          });
        }), d === "select" && r.updateBrush(function(v) {
          var f = v.start, b = f.x, x = f.y, w = {
            x: Math.min(Math.max(b + p, v.bounds.x0), v.bounds.x1),
            y: Math.min(Math.max(x + g, v.bounds.y0), v.bounds.y1)
          }, C = r.getExtent(y, w), T = Nt({}, v, {
            end: w,
            extent: C
          });
          return T;
        });
      }
    }, r.getExtent = function(o, s) {
      var u = r.props, d = u.brushDirection, m = u.width, h = u.height, y = d === "vertical" ? 0 : Math.min(o.x || 0, s.x || 0), p = d === "vertical" ? m : Math.max(o.x || 0, s.x || 0), g = d === "horizontal" ? 0 : Math.min(o.y || 0, s.y || 0), v = d === "horizontal" ? h : Math.max(o.y || 0, s.y || 0);
      return {
        x0: y,
        x1: p,
        y0: g,
        y1: v
      };
    }, r.handleDragStart = function(o) {
      var s = r.props, u = s.onBrushStart, d = s.left, m = s.top, h = s.inheritedMargin, y = s.useWindowMoveEvents, p = h != null && h.left ? h.left : 0, g = h != null && h.top ? h.top : 0, v = {
        x: (o.x || 0) + o.dx - d - p,
        y: (o.y || 0) + o.dy - m - g
      }, f = Nt({}, v);
      u && u(v), r.updateBrush(function(b) {
        return Nt({}, b, {
          start: v,
          end: f,
          extent: {
            x0: -1,
            x1: -1,
            y0: -1,
            y1: -1
          },
          isBrushing: !0,
          brushingType: "select",
          brushPageOffset: y ? bl(o.event) : void 0
        });
      });
    }, r.handleBrushStart = function(o) {
      var s = r.props, u = s.onBrushStart, d = s.left, m = s.top, h = s.inheritedMargin;
      if (u) {
        var y = h != null && h.left ? h.left : 0, p = h != null && h.top ? h.top : 0, g = {
          x: (o.x || 0) + o.dx - d - y,
          y: (o.y || 0) + o.dy - m - p
        };
        u(g);
      }
    }, r.handleDragMove = function(o) {
      var s = r.props, u = s.left, d = s.top, m = s.inheritedMargin, h = s.useWindowMoveEvents;
      if (!(!o.isDragging || h)) {
        var y = (m == null ? void 0 : m.left) || 0, p = (m == null ? void 0 : m.top) || 0, g = {
          x: (o.x || 0) + o.dx - u - y,
          y: (o.y || 0) + o.dy - d - p
        };
        r.updateBrush(function(v) {
          var f = v.start, b = r.getExtent(f, g);
          return Nt({}, v, {
            end: g,
            extent: b
          });
        });
      }
    }, r.handleDragEnd = function() {
      var o = r.props, s = o.onBrushEnd, u = o.resetOnEnd, d = o.useWindowMoveEvents;
      d || r.updateBrush(function(m) {
        var h = m.extent, y = Nt({}, m, {
          start: {
            x: h.x0,
            y: h.y0
          },
          end: {
            x: h.x1,
            y: h.y1
          },
          isBrushing: !1,
          brushingType: void 0,
          activeHandle: null
        });
        return s && s(y), u && r.reset(), y;
      });
    }, r.getBrushWidth = function() {
      var o = r.state.extent, s = o.x0, u = o.x1;
      return Math.max(Math.max(s, u) - Math.min(s, u), 0);
    }, r.getBrushHeight = function() {
      var o = r.state.extent, s = o.y1, u = o.y0;
      return Math.max(Math.max(u, s) - Math.min(u, s), 0);
    }, r.handles = function() {
      var o = r.props.handleSize, s = r.state.extent, u = s.x0, d = s.x1, m = s.y0, h = s.y1, y = o / 2, p = r.getBrushWidth(), g = r.getBrushHeight();
      return {
        top: {
          x: u - y,
          y: m - y,
          height: o,
          width: p + o
        },
        bottom: {
          x: u - y,
          y: h - y,
          height: o,
          width: p + o
        },
        right: {
          x: d - y,
          y: m - y,
          height: g + o,
          width: o
        },
        left: {
          x: u - y,
          y: m - y,
          height: g + o,
          width: o
        }
      };
    }, r.corners = function() {
      var o = r.props.handleSize, s = r.state.extent, u = s.x0, d = s.x1, m = s.y0, h = s.y1, y = o / 2, p = o, g = o;
      return {
        topLeft: {
          x: Math.min(u, d) - y,
          y: Math.min(m, h) - y,
          width: p,
          height: g
        },
        topRight: {
          x: Math.max(u, d) - y,
          y: Math.min(m, h) - y,
          width: p,
          height: g
        },
        bottomLeft: {
          x: Math.min(u, d) - y,
          y: Math.max(m, h) - y,
          width: p,
          height: g
        },
        bottomRight: {
          x: Math.max(u, d) - y,
          y: Math.max(m, h) - y,
          width: p,
          height: g
        }
      };
    }, r.updateBrush = function(o) {
      var s = r.props.onChange;
      r.setState(o, function() {
        s && s(r.state);
      });
    }, r.reset = function() {
      var o = r.props, s = o.width, u = o.height;
      r.updateBrush(function() {
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
            x1: s,
            y0: 0,
            y1: u
          },
          isBrushing: !1,
          brushPageOffset: void 0,
          activeHandle: null,
          brushingType: void 0
        };
      });
    }, r.handleBrushingTypeChange = function(o, s) {
      r.updateBrush(function(u) {
        var d = Nt({}, u, {
          brushingType: o,
          isBrushing: o !== void 0
        });
        return (s || o === void 0) && (d.brushPageOffset = s), d;
      });
    };
    var l = a.initialBrushPosition, c = l ? r.getExtent(l.start, l.end) : {
      x0: -1,
      x1: -1,
      y0: -1,
      y1: -1
    };
    return r.state = {
      start: {
        x: Math.max(0, c.x0),
        y: Math.max(0, c.y0)
      },
      end: {
        x: Math.max(0, c.x1),
        y: Math.max(0, c.y1)
      },
      extent: c,
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
    var l = this;
    (this.props.width !== r.width || this.props.height !== r.height) && this.setState(function(c) {
      var o = c.start, s = c.end, u = c.extent;
      if (!(u.x0 === -1 && u.x1 === -1 && u.y0 === -1 && u.y1 === -1)) {
        var d = l.props.width / r.width, m = l.props.height / r.height;
        o = {
          x: d * u.x0,
          y: m * u.y0
        }, s = {
          x: d * u.x1,
          y: m * u.y1
        }, u = l.getExtent(o, s);
      }
      return {
        start: o,
        end: s,
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
    var r = this, l = this.state, c = l.start, o = l.end, s = this.props, u = s.top, d = s.left, m = s.width, h = s.height, y = s.onMouseLeave, p = s.onMouseUp, g = s.onMouseMove, v = s.onBrushEnd, f = s.onClick, b = s.resizeTriggerAreas, x = s.selectedBoxStyle, w = s.disableDraggingSelection, C = s.clickSensitivity, T = s.useWindowMoveEvents, D = s.renderBrushHandle, k = this.state.brushingType, z = this.handles(), $ = this.corners(), N = this.getBrushWidth(), A = this.getBrushHeight(), P = new Set(b);
    return /* @__PURE__ */ i.createElement(be, {
      className: "visx-brush",
      top: u,
      left: d
    }, /* @__PURE__ */ i.createElement(zi, {
      width: m,
      height: h,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: T ? k === "select" : void 0
    }, function(L) {
      var S = L.dragStart, M = L.isDragging, R = L.dragMove, q = L.dragEnd;
      return /* @__PURE__ */ i.createElement(Pt, {
        className: "visx-brush-overlay",
        fill: "transparent",
        x: 0,
        y: 0,
        width: m,
        height: h,
        onDoubleClick: function() {
          return r.reset();
        },
        onClick: function(I) {
          var G = r.mouseUpTime - r.mouseDownTime;
          f && G < C && f(I);
        },
        onPointerDown: function(I) {
          r.mouseDownTime = Date.now(), S(I);
        },
        onPointerLeave: function(I) {
          y && y(I);
        },
        onPointerMove: function(I) {
          !M && g && g(I), M && R(I);
        },
        onPointerUp: function(I) {
          r.mouseUpTime = Date.now(), p && p(I), q(I);
        },
        style: og
      });
    }), c && o && /* @__PURE__ */ i.createElement(Al, {
      updateBrush: this.updateBrush,
      width: N,
      height: A,
      stageWidth: m,
      stageHeight: h,
      brush: this.state,
      disableDraggingSelection: w,
      onBrushEnd: v,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: y,
      onMouseMove: g,
      onMouseUp: p,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: f,
      selectedBoxStyle: x,
      isControlled: T,
      isDragInProgress: T ? k === "move" : void 0
    }), c && o && Object.keys(z).filter(function(L) {
      return P.has(L);
    }).map(function(L) {
      var S = z[L];
      return S && /* @__PURE__ */ i.createElement(eu, {
        key: "handle-" + L,
        type: L,
        handle: S,
        stageWidth: m,
        stageHeight: h,
        updateBrush: r.updateBrush,
        brush: r.state,
        onBrushStart: r.handleBrushStart,
        onBrushEnd: v,
        isControlled: T,
        isDragInProgress: T ? k === L : void 0,
        onBrushHandleChange: r.handleBrushingTypeChange,
        renderBrushHandle: D
      });
    }), c && o && Object.keys($).filter(function(L) {
      return P.has(L);
    }).map(function(L) {
      var S = $[L];
      return S && /* @__PURE__ */ i.createElement(El, {
        key: "corner-" + L,
        type: L,
        brush: r.state,
        updateBrush: r.updateBrush,
        stageWidth: m,
        stageHeight: h,
        corner: S,
        onBrushEnd: v
      });
    }));
  }, t;
}(i.Component);
Tl.propTypes = {
  brushDirection: V.oneOf(["horizontal", "vertical", "both"]),
  width: V.number.isRequired,
  height: V.number.isRequired,
  left: V.number.isRequired,
  top: V.number.isRequired,
  onChange: V.func,
  handleSize: V.number,
  resizeTriggerAreas: V.array,
  onBrushStart: V.func,
  onBrushEnd: V.func,
  onMouseLeave: V.func,
  onMouseUp: V.func,
  onMouseMove: V.func,
  onClick: V.func,
  clickSensitivity: V.number,
  disableDraggingSelection: V.bool,
  resetOnEnd: V.bool,
  useWindowMoveEvents: V.bool,
  renderBrushHandle: V.func
};
Tl.defaultProps = {
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
function sg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zr(e, t);
}
function zr(e, t) {
  return zr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, zr(e, t);
}
var ss = 2, cs = "steelblue", Sl = /* @__PURE__ */ function(e) {
  sg(t, e);
  function t() {
    for (var a, r = arguments.length, l = new Array(r), c = 0; c < r; c++)
      l[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(l)) || this, a.handleChange = function(o) {
      var s = a.props.onChange;
      if (s) {
        var u = o.extent.x0;
        if (typeof u > "u" || u < 0) {
          s(null);
          return;
        }
        var d = a.convertRangeToDomain(o);
        s(d);
      }
    }, a.handleBrushStart = function(o) {
      var s = a.props.onBrushStart;
      if (s) {
        var u = o.x, d = o.y, m = a.props, h = m.xScale, y = m.yScale, p = Ai(h, u), g = Ai(y, d);
        s({
          x: "invert" in h && typeof h.invert < "u" ? p : h.domain()[p],
          y: "invert" in y && typeof y.invert < "u" ? g : y.domain()[g]
        });
      }
    }, a.handleBrushEnd = function(o) {
      var s = a.props.onBrushEnd;
      if (s) {
        var u = o.extent.x0;
        if (typeof u > "u" || u < 0) {
          s(null);
          return;
        }
        var d = a.convertRangeToDomain(o);
        s(d);
      }
    }, a;
  }
  var n = t.prototype;
  return n.convertRangeToDomain = function(r) {
    var l = this.props, c = l.xScale, o = l.yScale, s = r.extent, u = s.x0, d = s.x1, m = s.y0, h = s.y1, y = os(c, u || 0, d || 0, ss), p = os(o, m || 0, h || 0, ss), g = {
      x0: y.start || 0,
      x1: y.end || 0,
      xValues: y.values,
      y0: p.start || 0,
      y1: p.end || 0,
      yValues: p.values
    };
    return g;
  }, n.render = function() {
    var r = this.props, l = r.xScale, c = r.yScale, o = r.height, s = r.width, u = r.margin, d = r.brushDirection, m = r.initialBrushPosition, h = r.innerRef, y = r.resizeTriggerAreas, p = r.brushRegion, g = r.yAxisOrientation, v = r.xAxisOrientation, f = r.selectedBoxStyle, b = r.disableDraggingSelection, x = r.resetOnEnd, w = r.onMouseLeave, C = r.onMouseMove, T = r.onClick, D = r.handleSize, k = r.useWindowMoveEvents, z = r.renderBrushHandle;
    if (!l || !c)
      return null;
    var $, N, A, P, L = u != null && u.left ? u.left : 0, S = u != null && u.top ? u.top : 0, M = u != null && u.right ? u.right : 0, R = u != null && u.bottom ? u.bottom : 0;
    return p === "chart" ? (A = 0, P = 0, $ = s, N = o) : p === "yAxis" ? (P = 0, N = o, g === "right" ? (A = s, $ = M) : (A = -L, $ = L)) : (A = 0, $ = s, v === "bottom" ? (P = o, N = R) : (P = -S, N = S)), /* @__PURE__ */ i.createElement(Tl, {
      width: $,
      height: N,
      left: A,
      top: P,
      brushDirection: d,
      disableDraggingSelection: b,
      handleSize: D,
      inheritedMargin: u,
      initialBrushPosition: m,
      ref: h,
      resetOnEnd: x,
      resizeTriggerAreas: y,
      selectedBoxStyle: f,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: T,
      onMouseLeave: w,
      onMouseMove: C,
      useWindowMoveEvents: k,
      renderBrushHandle: z
    });
  }, t;
}(F.Component);
Sl.propTypes = {
  height: V.number,
  width: V.number,
  onChange: V.func,
  onBrushEnd: V.func,
  brushDirection: V.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: V.array,
  brushRegion: V.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: V.oneOf(["left", "right"]),
  xAxisOrientation: V.oneOf(["top", "bottom"]),
  disableDraggingSelection: V.bool,
  resetOnEnd: V.bool,
  handleSize: V.number,
  useWindowMoveEvents: V.bool,
  renderBrushHandle: V.func
};
Sl.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: cs,
    fillOpacity: 0.2,
    stroke: cs,
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
const cg = Sl, ug = (e) => {
  const { transformedData: t, config: n, parseDate: a, formatDate: r, updateConfig: l } = F.useContext(ze), { fontSize: c } = Ca(), [o, s] = F.useState([...t]), u = F.useRef(null), d = 15, [m, h] = F.useState({
    startPosition: 0,
    endPosition: 0,
    startValue: "",
    endValue: ""
  }), y = {
    start: { x: 0 },
    end: { x: e.xMax }
  }, p = {
    fill: "#ddd",
    stroke: "blue",
    fillOpacity: 0.8,
    strokeOpacity: 0,
    rx: d
  }, g = (f) => {
    var k;
    if (!f)
      return;
    const { xValues: b } = f, x = (k = n.xAxis) == null ? void 0 : k.dataKey, w = t.filter((z) => b.includes(z[x])), C = b.slice().reverse().find((z) => z !== void 0), T = b.find((z) => z !== void 0), D = (z) => n.runtime.xAxis.type === "date" ? r(a(z)) : z;
    h((z) => {
      var $, N;
      return {
        ...z,
        startPosition: ($ = u.current) == null ? void 0 : $.state.start.x,
        endPosition: (N = u.current) == null ? void 0 : N.state.end.x,
        endValue: D(C),
        startValue: D(T)
      };
    }), s(w);
  };
  F.useEffect(() => {
    l({
      ...n,
      brush: {
        ...n.brush,
        data: o
      }
    });
  }, [o]), F.useEffect(() => {
    n.brush.active || s(t);
  }, [n.brush.active]);
  const v = () => {
    const f = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
    let b = 0;
    const x = 20;
    return n.xAxis.label || (!n.isResponsiveTicks && f && (b = Number(f + n.xAxis.tickWidthMax) / 1.6), !n.isResponsiveTicks && !f && (b = Number(n.xAxis.labelOffset) - x), n.isResponsiveTicks && n.dynamicMarginTop && (b = Number(n.xAxis.labelOffset + n.xAxis.tickWidthMax / 1.6)), n.isResponsiveTicks && !n.dynamicMarginTop && (b = Number(n.xAxis.labelOffset - x))), n.xAxis.label && (!n.isResponsiveTicks && f && (b = Number(n.xAxis.tickWidthMax + f)), !n.isResponsiveTicks && !f && (b = n.xAxis.labelOffset + x), n.isResponsiveTicks && !f && (b = Number(n.dynamicMarginTop ? n.dynamicMarginTop : n.xAxis.labelOffset) + x)), b;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(n.visualizationType))
    return /* @__PURE__ */ i.createElement(be, { display: n.brush.active ? "block" : "none", top: Number(e.yMax) + v(), left: Number(n.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ i.createElement("rect", { fill: "#eee", width: e.xMax, height: n.brush.height, rx: d }), /* @__PURE__ */ i.createElement(
      cg,
      {
        renderBrushHandle: (f) => {
          var b;
          return /* @__PURE__ */ i.createElement(dg, { textProps: m, fontSize: c[n.fontSize], ...f, isBrushing: (b = u.current) == null ? void 0 : b.state.isBrushing });
        },
        innerRef: u,
        useWindowMoveEvents: !0,
        selectedBoxStyle: p,
        xScale: e.xScaleBrush,
        yScale: e.yScale,
        width: e.xMax,
        resizeTriggerAreas: ["left", "right"],
        height: n.brush.height,
        handleSize: 8,
        brushDirection: "horizontal",
        initialBrushPosition: y,
        onChange: g
      }
    ));
}, dg = (e) => {
  const { x: t, isBrushActive: n, isBrushing: a, className: r, textProps: l } = e, c = 8;
  if (!n)
    return null;
  const o = r.includes("left"), s = o ? "scale(-1, 1)" : "translate(0,0)", u = o ? "end" : "start";
  return /* @__PURE__ */ i.createElement(be, { left: t + c / 2, top: -2 }, /* @__PURE__ */ i.createElement($e, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: u, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, o ? l.startValue : l.endValue), /* @__PURE__ */ i.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: a ? "#297EF1" : "#666", strokeWidth: "1", transform: s }));
}, Ht = (e) => {
  var un;
  const { isEditor: t, isDashboard: n, transformedData: a, dimensions: r, config: l, parseDate: c, formatDate: o, currentViewport: s, formatNumber: u, handleChartAriaLabels: d, updateConfig: m, handleLineType: h, rawData: y, capitalize: p, setSharedFilter: g, setSharedFilterValue: v, getTextWidth: f, isDebug: b } = F.useContext(ze), { visualizationType: x, visualizationSubType: w, orientation: C, xAxis: T, yAxis: D, runtime: k, debugSvg: z } = l;
  let [$] = r;
  l && l.legend && !l.legend.hide && l.legend.position !== "bottom" && ["lg", "md"].includes(s) && ($ = $ * 0.73);
  const { horizontal: N } = l.heights, A = C === "horizontal", P = !0;
  let L = l.aspectRatio ? $ * l.aspectRatio : l.visualizationType === "Forest Plot" ? l.heights.vertical : l.heights[C];
  const S = $ - k.yAxis.size - (x === "Combo" ? l.yAxis.rightAxisSize : 0);
  let M = L - (C === "horizontal" ? 0 : k.xAxis.size);
  l.visualizationType === "Forest Plot" && (L = L + l.data.length * l.forestPlot.rowHeight, M = M + l.data.length * l.forestPlot.rowHeight), l.brush.active && (L = L + l.brush.height);
  const { minValue: R, maxValue: q, existPositiveValue: j, isAllLine: I } = $i(l, a), { yScaleRight: G, hasRightAxis: Y } = dl({ config: l, yMax: M, data: a, updateConfig: m }), { hasTopAxis: ce } = By(l), [ue, ge] = F.useState(!1), ke = F.useRef(), Te = F.useRef(), Se = ol(ke, {
    freezeOnceVisible: !1
  }), U = (X) => l.runtime.xAxis.type === "date" ? c(X[l.runtime.originalXAxis.dataKey]).getTime() : X[l.runtime.originalXAxis.dataKey], K = (X, ve) => X[ve], ee = l.brush.active && ((un = l.brush.data) != null && un.length) ? l.brush.data.map((X) => U(X)) : a.map((X) => U(X)), B = l.orientation === "horizontal" ? "yAxis" : "xAxis", de = { data: a, config: l, minValue: R, maxValue: q, isAllLine: I, existPositiveValue: j, xAxisDataMapped: ee, xMax: S, yMax: M }, { min: le, max: fe } = Dy(de), { xScale: ae, yScale: he, seriesScale: Oe, g1xScale: Ke, g2xScale: Ce, xScaleNoPadding: xe, xScaleBrush: oe } = $y({ ...de, min: le, max: fe }), [te, We] = F.useState(null);
  F.useEffect(() => {
    var X;
    We((X = Te == null ? void 0 : Te.current) == null ? void 0 : X.getBoundingClientRect());
  }, [Te, l.legend]);
  const se = (X, ve) => {
    if (l.useLogScale && X === 0.1 && (X = 0), !(l.data && !l.data[ve] && x === "Forest Plot"))
      return l.visualizationType === "Forest Plot" ? l.data[ve][l.xAxis.dataKey] : k.yAxis.type === "date" ? o(c(X)) : C === "vertical" ? u(X, "left", P) : X;
  }, we = (X) => (l.useLogScale && X === 0.1 && (X = 0), k.xAxis.type === "date" ? o(X) : C === "horizontal" ? u(X, "left", P) : l.xAxis.type === "continuous" ? u(X, "bottom", P) : X), Le = (X) => {
    const { numTicks: ve } = k[X];
    let Me;
    return X === "yAxis" && (Me = A && !ve ? a.length : A && ve ? ve : !A && !ve ? void 0 : !A && ve && ve, Me === void 0 && !l.dataFormat.roundTo && (Number(fe) <= 3 ? Me = 2 : Me = 4), Number(Me) > Number(fe) && (Me = Number(le) < 0 ? Math.round(fe) * 2 : Math.round(fe))), X === "xAxis" && (Me = A && !ve ? void 0 : A && ve ? ve : !A && !ve ? void 0 : !A && ve && ve, A && Me === void 0 && !l.dataFormat.roundTo && (fe <= 3 ? Me = 2 : Me = 4)), Me;
  }, { tooltipData: W, showTooltip: _e, hideTooltip: Ge, tooltipOpen: nt, tooltipLeft: et, tooltipTop: ft } = Lc(), {
    handleTooltipMouseOver: at,
    handleTooltipClick: Je,
    handleTooltipMouseOff: Et,
    tooltipStyles: Yt,
    TooltipListItem: Nn,
    getXValueFromCoordinateDate: Na,
    getXValueFromCoordinate: At
  } = $c({
    xScale: ae,
    yScale: he,
    showTooltip: _e,
    hideTooltip: Ge
  });
  F.useEffect(() => {
    document.querySelector(".isEditor") && ge((ve) => !0);
  }), F.useEffect(() => {
    (Se == null ? void 0 : Se.isIntersecting) === !0 && l.animate && setTimeout(() => {
      ge((X) => !0);
    }, 500);
  }, [Se == null ? void 0 : Se.isIntersecting, l.animate]);
  const Pn = () => {
    const { visualizationType: X } = l;
    return X === "Combo" && k.forecastingSeriesKeys > 0 || X === "Area Chart" || X === "Line" || X === "Bar";
  }, Jt = Number(C === "horizontal" ? l.xAxis.size : l.yAxis.size), Xn = () => l.visualizationType === "Forest Plot" ? l.data.length : Le("yAxis");
  return isNaN($) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(Rt, { component: "LinearChart" }, /* @__PURE__ */ i.createElement("div", { style: { width: `${$}px`, height: `${L}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ i.createElement("svg", { width: "100%", height: "100%", className: `linear ${l.animate ? "animated" : ""} ${ue && l.animate ? "animate" : ""} ${z && "debug"}`, role: "img", "aria-label": d(l), ref: Te, style: { overflow: "visible" } }, /* @__PURE__ */ i.createElement(Pt, { width: $, height: L, fill: "transparent" }), " ", l.regions ? l.regions.map((X) => {
    if (!Object.keys(X).includes("from") || !Object.keys(X).includes("to"))
      return null;
    let ve, Me, Ee;
    return l.xAxis.type === "date" && (ve = ae(c(X.from).getTime()), Me = ae(c(X.to).getTime()), Ee = Me - ve), l.xAxis.type === "categorical" && (ve = ae(X.from), Me = ae(X.to), Ee = Me - ve), !ve || !Me ? null : /* @__PURE__ */ i.createElement(be, { className: "regions", left: Number(k.yAxis.size), key: X.label }, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: "#333",
        d: `M${ve} -5
                          L${ve} 5
                          M${ve} 0
                          L${Me} 0
                          M${Me} -5
                          L${Me} 5`
      }
    ), /* @__PURE__ */ i.createElement("rect", { x: ve, y: 0, width: Ee, height: M, fill: X.background, opacity: 0.3 }), /* @__PURE__ */ i.createElement($e, { x: ve + Ee / 2, y: 5, fill: X.color, verticalAnchor: "start", textAnchor: "middle" }, X.label));
  }) : "", !["Spark Line", "Forest Plot"].includes(x) && /* @__PURE__ */ i.createElement(Kp, { scale: he, tickLength: l.useLogScale ? 6 : 8, left: Number(k.yAxis.size) - l.yAxis.axisPadding, label: k.yAxis.label, stroke: "#333", tickFormat: (X, ve) => se(X, ve), numTicks: Xn() }, (X) => {
    const ve = k.horizontal ? (X.axisToPoint.y - X.axisFromPoint.y) / 2 : (X.axisFromPoint.y - X.axisToPoint.y) / 2, Me = M / X.ticks.length / 2 - M / X.ticks.length * (1 - l.barThickness) + 5;
    return /* @__PURE__ */ i.createElement(be, { className: "left-axis" }, X.ticks.map((Ee, ut) => {
      const vt = X.ticks[0].to.y, Tt = 15, E = String(Ee.value).startsWith("1") || Ee.value === 0.1 ? "block" : "none", J = E === "block" ? 7 : 0, ne = { x: Ee.to.x - J, y: Ee.to.y };
      return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${Ee.value}-${ut}`, className: "vx-axis-tick" }, !k.yAxis.hideTicks && /* @__PURE__ */ i.createElement(qe, { key: `${Ee.value}--hide-hideTicks`, from: Ee.from, to: l.useLogScale ? ne : Ee.to, stroke: l.yAxis.tickColor, display: k.horizontal ? "none" : "block" }), k.yAxis.gridLines ? /* @__PURE__ */ i.createElement(qe, { key: `${Ee.value}--hide-hideGridLines`, display: (l.useLogScale && E).toString(), from: { x: Ee.from.x + S, y: Ee.from.y }, to: Ee.from, stroke: "rgba(0,0,0,0.3)" }) : "", C === "horizontal" && w !== "stacked" && l.yAxis.labelPlacement === "On Date/Category Axis" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        $e,
        {
          transform: `translate(${Ee.to.x - 5}, ${l.isLollipopChart ? Ee.to.y - vt : Ee.to.y - vt + (Number(l.barHeight * l.series.length) - Tt) / 2}) rotate(-${l.runtime.horizontal && l.runtime.yAxis.tickRotation || 0})`,
          verticalAnchor: "start",
          textAnchor: "end"
        },
        Ee.formattedValue
      ), C === "horizontal" && w === "stacked" && l.yAxis.labelPlacement === "On Date/Category Axis" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { transform: `translate(${Ee.to.x - 5}, ${Ee.to.y - vt + (Number(l.barHeight) - Tt) / 2}) rotate(-${k.horizontal ? k.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, Ee.formattedValue), C === "horizontal" && x === "Paired Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { transform: `translate(${Ee.to.x - 5}, ${Ee.to.y - vt + Number(l.barHeight) / 2}) rotate(-${k.horizontal ? k.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Ee.formattedValue), C === "horizontal" && x === "Deviation Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { transform: `translate(${Ee.to.x - 5}, ${l.isLollipopChart ? Ee.to.y - vt + 2 : Ee.to.y - vt + Number(l.barHeight) / 2}) rotate(-${k.horizontal ? k.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Ee.formattedValue), C === "vertical" && x !== "Paired Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        $e,
        {
          display: l.useLogScale ? E : "block",
          dx: l.useLogScale ? -6 : 0,
          x: l.runtime.horizontal ? Ee.from.x + 2 : Ee.to.x,
          y: Ee.to.y + (l.runtime.horizontal ? Me : 0),
          angle: -Number(l.yAxis.tickRotation) || 0,
          verticalAnchor: l.runtime.horizontal ? "start" : "middle",
          textAnchor: l.runtime.horizontal ? "start" : "end",
          fill: l.yAxis.tickLabelColor
        },
        Ee.formattedValue
      ));
    }), !l.yAxis.hideAxis && /* @__PURE__ */ i.createElement(qe, { from: X.axisFromPoint, to: k.horizontal ? { x: 0, y: l.visualizationType === "Forest Plot" ? L : Number(N) } : X.axisToPoint, stroke: "#000" }), he.domain()[0] < 0 && /* @__PURE__ */ i.createElement(qe, { from: { x: X.axisFromPoint.x, y: he(0) }, to: { x: S, y: he(0) }, stroke: "#333" }), x === "Bar" && C === "horizontal" && ae.domain()[0] < 0 && /* @__PURE__ */ i.createElement(qe, { from: { x: ae(0), y: 0 }, to: { x: ae(0), y: M }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ i.createElement($e, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * k.yAxis.size}, ${ve}) rotate(-90)`, fontWeight: "bold", fill: l.yAxis.labelColor }, X.label));
  }), Y && /* @__PURE__ */ i.createElement(Up, { scale: G, left: Number($ - l.yAxis.rightAxisSize), label: l.yAxis.rightLabel, tickFormat: (X) => u(X, "right"), numTicks: k.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (X) => {
    const ve = k.horizontal ? (X.axisToPoint.y - X.axisFromPoint.y) / 2 : (X.axisFromPoint.y - X.axisToPoint.y) / 2, Me = M / X.ticks.length / 2 - M / X.ticks.length * (1 - l.barThickness) + 5;
    return /* @__PURE__ */ i.createElement(be, { className: "right-axis" }, X.ticks.map((Ee, ut) => /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${Ee.value}-${ut}`, className: "vx-axis-tick" }, !k.yAxis.rightHideTicks && /* @__PURE__ */ i.createElement(qe, { from: Ee.from, to: Ee.to, display: k.horizontal ? "none" : "block", stroke: l.yAxis.rightAxisTickColor }), k.yAxis.rightGridLines ? /* @__PURE__ */ i.createElement(qe, { from: { x: Ee.from.x + S, y: Ee.from.y }, to: Ee.from, stroke: "rgba(0,0,0,0.3)" }) : "", !l.yAxis.rightHideLabel && /* @__PURE__ */ i.createElement($e, { x: Ee.to.x, y: Ee.to.y + (k.horizontal ? Me : 0), verticalAnchor: k.horizontal ? "start" : "middle", textAnchor: "start", fill: l.yAxis.rightAxisTickLabelColor }, Ee.formattedValue))), !l.yAxis.rightHideAxis && /* @__PURE__ */ i.createElement(qe, { from: X.axisFromPoint, to: X.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement($e, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${l.yAxis.rightLabelOffsetSize ? l.yAxis.rightLabelOffsetSize : 0}, ${ve}) rotate(-90)`, fontWeight: "bold", fill: l.yAxis.rightAxisLabelColor }, X.label));
  }), ce && l.topAxis.hasLine && /* @__PURE__ */ i.createElement(
    Zp,
    {
      stroke: "#333",
      left: Number(k.yAxis.size),
      scale: ae,
      hideTicks: !0,
      hideZero: !0,
      tickLabelProps: () => ({
        fill: "transparent"
      })
    }
  ), x !== "Paired Bar" && x !== "Spark Line" && /* @__PURE__ */ i.createElement(
    Ya,
    {
      top: k.horizontal && l.visualizationType !== "Forest Plot" ? Number(N) + Number(l.xAxis.axisPadding) : (l.visualizationType === "Forest Plot", M + Number(l.xAxis.axisPadding)),
      left: Number(k.yAxis.size),
      label: k.xAxis.label,
      tickFormat: we,
      scale: ae,
      stroke: "#333",
      numTicks: Le("xAxis"),
      tickStroke: "#333"
    },
    (X) => {
      const ve = l.visualizationType !== "Forest Plot" ? (X.axisToPoint.x - X.axisFromPoint.x) / 2 : $ / 2, Me = (Ne) => /\s/.test(Ne), Ee = X.ticks.some((Ne) => Me(Ne.value)), ut = { small: 16, medium: 18, large: 20 }, vt = 8, Tt = Math.max(...X.ticks.map((Ne) => f(Ne.formattedValue, `normal ${ut[l.fontSize]}px sans-serif`))), E = Ee ? 180 : 100, J = X.ticks.map((Ne) => f(Ne.formattedValue, `normal ${ut[l.fontSize]}px sans-serif`)), ne = J.reduce((Ne, it) => Ne + it, E), ie = (S - ne) / (X.ticks.length - 1);
      let pe = [0];
      for (let Ne = 1; Ne < J.length; Ne++)
        pe[Ne] = pe[Ne - 1] + J[Ne - 1] + ie;
      let ye = !1;
      J.forEach((Ne, it) => {
        if (pe[it] + J[it] > pe[it + 1]) {
          ye = !0;
          return;
        }
      });
      const re = ye && l.isResponsiveTicks ? Tt + vt + 20 : 0, Pe = Number(l.xAxis.tickRotation) > 0 ? Number(l.xAxis.tickRotation) : 0;
      return l.dynamicMarginTop = re, l.xAxis.tickWidthMax = Tt, /* @__PURE__ */ i.createElement(be, { className: "bottom-axis" }, X.ticks.map((Ne, it, wt) => {
        const Ie = String(Ne.value).startsWith("1") || Ne.value === 0.1 ? "block" : "none", Ft = Ie === "block" ? 16 : vt, Re = { x: Ne.to.x, y: Ft };
        let Ye = f(Ne.formattedValue, `normal ${ut[l.fontSize]}px sans-serif`), Qe = 100 / wt.length;
        l.yAxis.tickRotation = l.isResponsiveTicks && l.orientation === "horizontal" ? 0 : l.yAxis.tickRotation, l.xAxis.tickRotation = l.isResponsiveTicks && l.orientation === "vertical" ? 0 : l.xAxis.tickRotation;
        const rt = l.isResponsiveTicks && ye ? -Number(l.xAxis.maxTickRotation) || -90 : -Number(l.runtime.xAxis.tickRotation);
        return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${Ne.value}-${it}`, className: "vx-axis-tick" }, !l.xAxis.hideTicks && /* @__PURE__ */ i.createElement(qe, { from: Ne.from, to: C === "horizontal" && l.useLogScale ? Re : Ne.to, stroke: l.xAxis.tickColor, strokeWidth: Ie === "block" ? 1.3 : 1 }), !l.xAxis.hideLabel && /* @__PURE__ */ i.createElement(
          $e,
          {
            dy: l.orientation === "horizontal" && l.useLogScale ? 8 : 0,
            display: l.orientation === "horizontal" && l.useLogScale ? Ie : "block",
            x: Ne.to.x,
            y: Ne.to.y,
            angle: rt,
            verticalAnchor: rt < -50 ? "middle" : "start",
            textAnchor: rt ? "end" : "middle",
            width: ye && !l.isResponsiveTicks && !Number(l[B].tickRotation) ? Qe : Ye,
            fill: l.xAxis.tickLabelColor
          },
          Ne.formattedValue
        ));
      }), !l.xAxis.hideAxis && /* @__PURE__ */ i.createElement(qe, { from: X.axisFromPoint, to: X.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(
        $e,
        {
          x: ve,
          y: l.orientation === "horizontal" ? re || l.xAxis.labelOffset : l.isResponsiveTicks && re && !A ? re : Number(Pe) && !l.isResponsiveTicks && !A ? Number(Pe + Tt / 1.3) : Number(l.xAxis.labelOffset),
          textAnchor: "middle",
          fontWeight: "bold",
          fill: l.xAxis.labelColor
        },
        X.label
      ));
    }
  ), x === "Paired Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ya, { top: M, left: Number(k.yAxis.size), label: k.xAxis.label, tickFormat: k.xAxis.type === "date" ? o : u, scale: Ke, stroke: "#333", tickStroke: "#333", numTicks: k.xAxis.numTicks || void 0 }, (X) => /* @__PURE__ */ i.createElement(be, { className: "bottom-axis" }, X.ticks.map((ve, Me) => {
    const Ee = ve.index !== 0 ? l.yAxis.tickRotation : 0, ut = ve.index !== 0 && l.yAxis.tickRotation && l.yAxis.tickRotation > 0 ? "end" : "middle";
    return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${ve.value}-${Me}`, className: "vx-axis-tick" }, !k.yAxis.hideTicks && /* @__PURE__ */ i.createElement(qe, { from: ve.from, to: ve.to, stroke: "#333" }), !k.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { x: ve.to.x, y: ve.to.y, angle: -Ee, verticalAnchor: "start", textAnchor: ut }, u(ve.value, "left")));
  }), !k.yAxis.hideAxis && /* @__PURE__ */ i.createElement(qe, { from: X.axisFromPoint, to: X.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ i.createElement(
    Ya,
    {
      top: M,
      left: Number(k.yAxis.size),
      label: k.xAxis.label,
      tickFormat: k.xAxis.type === "date" ? o : k.xAxis.dataKey !== "Year" ? u : (X) => X,
      scale: Ce,
      stroke: "#333",
      tickStroke: "#333",
      numTicks: k.xAxis.numTicks || void 0
    },
    (X) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, { className: "bottom-axis" }, X.ticks.map((ve, Me) => {
      const Ee = ve.index !== 0 ? l.yAxis.tickRotation : 0, ut = ve.index !== 0 && l.yAxis.tickRotation && l.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${ve.value}-${Me}`, className: "vx-axis-tick" }, !k.yAxis.hideTicks && /* @__PURE__ */ i.createElement(qe, { from: ve.from, to: ve.to, stroke: "#333" }), !k.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { x: ve.to.x, y: ve.to.y, angle: -Ee, verticalAnchor: "start", textAnchor: ut }, u(ve.value, "left")));
    }), !k.yAxis.hideAxis && /* @__PURE__ */ i.createElement(qe, { from: X.axisFromPoint, to: X.axisToPoint, stroke: "#333" })), /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement($e, { x: S / 2, y: l.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, k.xAxis.label)))
  )), x === "Deviation Bar" && /* @__PURE__ */ i.createElement(Cy, { animatedChart: ue, xScale: ae, yScale: he, width: S, height: M }), x === "Paired Bar" && /* @__PURE__ */ i.createElement(My, { originalWidth: $, width: S, height: M }), x === "Scatter Plot" && /* @__PURE__ */ i.createElement(
    wy,
    {
      xScale: ae,
      yScale: he,
      getXAxisData: U,
      getYAxisData: K,
      xMax: S,
      yMax: M,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: Je,
      tooltipData: W,
      showTooltip: _e
    }
  ), x === "Box Plot" && /* @__PURE__ */ i.createElement(ky, { xScale: ae, yScale: he }), (x === "Area Chart" && l.visualizationSubType === "regular" || x === "Combo") && /* @__PURE__ */ i.createElement(gy, { xScale: ae, yScale: he, yMax: M, xMax: S, chartRef: Te, width: S, height: M, handleTooltipMouseOver: at, handleTooltipMouseOff: Et, tooltipData: W, showTooltip: _e }), (x === "Area Chart" && l.visualizationSubType === "stacked" || x === "Combo") && /* @__PURE__ */ i.createElement(vy, { xScale: ae, yScale: he, yMax: M, xMax: S, chartRef: Te, width: S, height: M, handleTooltipMouseOver: at, handleTooltipMouseOff: Et, tooltipData: W, showTooltip: _e }), (x === "Bar" || x === "Combo") && /* @__PURE__ */ i.createElement(
    Sy,
    {
      xScale: ae,
      yScale: he,
      seriesScale: Oe,
      xMax: S,
      yMax: M,
      getXAxisData: U,
      getYAxisData: K,
      animatedChart: ue,
      visible: ue,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: Je,
      tooltipData: W,
      showTooltip: _e,
      chartRef: Te
    }
  ), (x === "Line" || x === "Combo") && /* @__PURE__ */ i.createElement(
    ns,
    {
      xScale: ae,
      yScale: he,
      getXAxisData: U,
      getYAxisData: K,
      xMax: S,
      yMax: M,
      seriesStyle: l.series,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: Je,
      tooltipData: W,
      showTooltip: _e,
      chartRef: Te
    }
  ), (x === "Forecasting" || x === "Combo") && /* @__PURE__ */ i.createElement(
    Py,
    {
      showTooltip: _e,
      tooltipData: W,
      xScale: ae,
      yScale: he,
      width: S,
      le: !0,
      height: M,
      xScaleNoPadding: xe,
      chartRef: Te,
      getXValueFromCoordinate: At,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      isBrush: !1
    }
  ), l.yAxis.anchors && l.yAxis.anchors.map((X) => /* @__PURE__ */ i.createElement(qe, { strokeDasharray: h(X.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + l.yAxis.size, y: he(X.value) }, to: { x: S, y: he(X.value) }, display: k.horizontal ? "none" : "block" })), x === "Forest Plot" && /* @__PURE__ */ i.createElement(
    _y,
    {
      xScale: ae,
      yScale: he,
      seriesScale: Oe,
      width: S,
      height: M,
      maxWidth: $,
      maxHeight: L,
      getXAxisData: U,
      getYAxisData: K,
      animatedChart: ue,
      visible: ue,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: Je,
      tooltipData: W,
      showTooltip: _e,
      chartRef: Te,
      config: l
    }
  ), ["Line", "Bar", "Combo", "Area Chart"].includes(l.visualizationType) && !A && /* @__PURE__ */ i.createElement(ug, { xScaleBrush: oe, yScale: he, xMax: S, yMax: M }), x !== "Bar" && x !== "Paired Bar" && x !== "Box Plot" && x !== "Area Chart" && x !== "Scatter Plot" && x !== "Deviation Bar" && x !== "Forecasting" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ns, { xScale: ae, yScale: he, getXAxisData: U, getYAxisData: K, xMax: S, yMax: M, seriesStyle: l.series })), l.yAxis.anchors && l.yAxis.anchors.map((X, ve) => {
    let Me = he(X.value);
    if (!X.value)
      return;
    const Ee = C === "horizontal" && x === "Bar" ? l.barHeight / 4 : 0;
    if (Me)
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          qe,
          {
            key: `yAxis-${X.value}--${ve}`,
            strokeDasharray: h(X.lineStyle),
            stroke: X.color ? X.color : "rgba(0,0,0,1)",
            className: "anchor-y",
            from: { x: 0 + Jt, y: Me - Ee },
            to: { x: $ - l.yAxis.rightAxisSize, y: Me - Ee }
          }
        )
      );
  }), l.xAxis.anchors && l.xAxis.anchors.map((X, ve) => {
    let Me = T;
    C === "horizontal" && (Me = D);
    let Ee = Me.type === "date" ? ae(c(X.value, !1)) : ae(X.value);
    if (Ee)
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          qe,
          {
            key: `xAxis-${X.value}--${ve}`,
            strokeDasharray: h(X.lineStyle),
            stroke: X.color ? X.color : "rgba(0,0,0,1)",
            fill: X.color ? X.color : "rgba(0,0,0,1)",
            className: "anchor-x",
            from: { x: Number(Ee) + Number(Jt), y: 0 },
            to: { x: Number(Ee) + Number(Jt), y: M }
          }
        )
      );
  }), Pn && _e && W && l.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(be, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(qe, { from: { x: W.dataXPosition - 10, y: 0 }, to: { x: W.dataXPosition - 10, y: M }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })), Pn && _e && W && l.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(be, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: l.yAxis.size ? l.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(qe, { from: { x: 0, y: W.dataYPosition }, to: { x: S, y: W.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })), l.filters && l.filters.values.length === 0 && a.length === 0 && /* @__PURE__ */ i.createElement($e, { x: Number(l.yAxis.size) + Number(S / 2), y: L / 2 - l.xAxis.size / 2, textAnchor: "middle" }, l.chartMessage.noData)), W && Object.entries(W.data).length > 0 && nt && _e && W.dataYPosition && W.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${l.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Dc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: et, top: ft }, /* @__PURE__ */ i.createElement("ul", null, typeof W == "object" && Object.entries(W.data).map((X, ve) => /* @__PURE__ */ i.createElement(Nn, { item: X, key: ve }))))), (l.orientation === "horizontal" || l.visualizationType === "Scatter Plot" || l.visualizationType === "Box Plot") && /* @__PURE__ */ i.createElement(py, { id: `cdc-open-viz-tooltip-${k.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${l.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ i.createElement("div", { className: "animation-trigger", ref: ke })));
};
var fg = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function Rr() {
  return Rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Rr.apply(this, arguments);
}
function mg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function tu(e) {
  var t = e.id, n = e.markerWidth, a = n === void 0 ? 3 : n, r = e.markerHeight, l = r === void 0 ? 3 : r, c = e.markerUnits, o = c === void 0 ? "userSpaceOnUse" : c, s = e.children, u = mg(e, fg);
  return /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("marker", Rr({
    id: t,
    markerWidth: a,
    markerHeight: l,
    markerUnits: o
  }, u), s));
}
tu.propTypes = {
  id: V.string.isRequired,
  size: V.number,
  markerWidth: V.oneOfType([V.string, V.number]),
  markerHeight: V.oneOfType([V.string, V.number]),
  markerUnits: V.string,
  refX: V.oneOfType([V.string, V.number]),
  refY: V.oneOfType([V.string, V.number]),
  strokeWidth: V.number,
  children: V.node.isRequired
};
var hg = ["id", "size", "strokeWidth"];
function Fr() {
  return Fr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Fr.apply(this, arguments);
}
function pg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function yg(e) {
  var t = e.id, n = e.size, a = n === void 0 ? 9 : n, r = e.strokeWidth, l = r === void 0 ? 1 : r, c = pg(e, hg), o = a + l * 2, s = a, u = o / 2, d = "0 0, " + a + " " + a / 2 + ", 0 " + a;
  return /* @__PURE__ */ i.createElement(tu, Fr({
    id: t,
    markerWidth: o,
    markerHeight: o,
    refX: s,
    refY: u,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: l
  }, c), /* @__PURE__ */ i.createElement("g", {
    transform: "translate(" + l + ", " + l + ")"
  }, /* @__PURE__ */ i.createElement("polyline", {
    points: d
  })));
}
const gg = (e) => {
  var N;
  const { width: t, height: n } = e, { transformedData: a, config: r, parseDate: l, formatDate: c, seriesHighlight: o, formatNumber: s, colorScale: u, handleChartAriaLabels: d } = F.useContext(ze);
  let m = t;
  const { minValue: h, maxValue: y } = $i(r, a), p = { top: 5, right: 10, bottom: 10, left: 10 }, g = n, v = m - r.runtime.yAxis.size, f = g - p.top - 20, b = (A) => r.runtime.xAxis.type === "date" ? l(A[r.runtime.originalXAxis.dataKey]).getTime() : A[r.runtime.originalXAxis.dataKey], x = (A, P) => A[P];
  let w, C;
  const { max: T, min: D } = r.runtime.yAxis, k = Number(T) >= Number(y), z = Number(D) <= Number(h);
  if (a) {
    let A = D && z ? D : h, P = T && k ? T : Number.MIN_VALUE;
    if (P === Number.MIN_VALUE && (P = y), r.runtime.yAxis.paddingPercent) {
      let S = (P - A) * r.runtime.yAxis.paddingPercent;
      A -= S, P += S;
    }
    let L = a.map((S) => b(S));
    r.runtime.horizontal ? (w = ht({
      domain: [A, P],
      range: [0, v]
    }), C = r.runtime.xAxis.type === "date" ? ht({ domain: [Math.min(...L), Math.max(...L)] }) : Rn({ domain: L, padding: 0.5 }), Rn({
      domain: r.runtime.barSeriesKeys || r.runtime.seriesKeys,
      range: [0, f]
    }), C.rangeRound([0, f])) : (A = A < 0 ? A * 1.11 : A, C = ht({
      domain: [A, P],
      range: [f - p.bottom, p.top]
    }), w = Rn({
      domain: L,
      range: [p.left, m - p.right]
    }), Rn({
      domain: r.runtime.barSeriesKeys || r.runtime.seriesKeys,
      range: [0, v]
    }));
  }
  const $ = [w.domain()[0], w.domain()[w.domain().length - 1]];
  return /* @__PURE__ */ i.createElement(Rt, { component: "SparkLine" }, /* @__PURE__ */ i.createElement("svg", { role: "img", "aria-label": d(r), width: t, height: 100, className: "sparkline", tabIndex: 0 }, ((N = r.runtime.lineSeriesKeys) == null ? void 0 : N.length) > 0 ? r.runtime.lineSeriesKeys : r.runtime.seriesKeys.map((A, P) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    be,
    {
      style: { width: m },
      className: "sparkline-group",
      key: `series-${A}`,
      opacity: r.legend.behavior === "highlight" && o.length > 0 && o.indexOf(A) === -1 ? 0.5 : 1,
      display: r.legend.behavior === "highlight" || o.length === 0 || o.indexOf(A) !== -1 ? "block" : "none"
    },
    a.map((L, S) => {
      let M = r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ${s(x(L, A))}` : s(x(L, A)), R = r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ${L[r.runtime.xAxis.dataKey]}` : L[r.runtime.xAxis.dataKey];
      return `${M}${R}`, r.seriesLabel && `${r.seriesLabel}${A}`, /* @__PURE__ */ i.createElement(be, { key: `series-${A}-point-${S}` }, /* @__PURE__ */ i.createElement($e, { display: r.labels ? "block" : "none", x: w(b(L)), y: C(x(L, A)), fill: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[A] : A) : "#000", textAnchor: "middle" }, s(L[A])));
    }),
    /* @__PURE__ */ i.createElement(
      kn,
      {
        curve: Ci,
        data: a,
        x: (L) => w(b(L)),
        y: (L) => C(x(L, A)),
        stroke: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[A] : A) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${P})`
      }
    ),
    /* @__PURE__ */ i.createElement(
      yg,
      {
        id: `arrow--${P}`,
        refX: 2,
        size: 6,
        markerEnd: `url(#arrow--${P})`,
        strokeOpacity: 1,
        fillOpacity: 1,
        fill: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[A] : A) : "#000"
      }
    )
  ), /* @__PURE__ */ i.createElement(
    Ya,
    {
      top: f + p.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: w,
      tickValues: $,
      tickFormat: (L) => r.xAxis.type === "date" ? c(L) : null,
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
var xg = ["flexDirection", "alignItems", "margin", "display", "children"];
function Br() {
  return Br = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Br.apply(this, arguments);
}
function vg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Ti(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, a = e.alignItems, r = a === void 0 ? "center" : a, l = e.margin, c = l === void 0 ? "0" : l, o = e.display, s = o === void 0 ? "flex" : o, u = e.children, d = vg(e, xg);
  return /* @__PURE__ */ i.createElement("div", Br({
    className: "visx-legend-item",
    style: {
      display: s,
      alignItems: r,
      flexDirection: n,
      margin: c
    }
  }, d), u);
}
Ti.propTypes = {
  alignItems: V.string,
  margin: V.oneOfType([V.string, V.number]),
  children: V.node,
  display: V.string
};
var bg = ["flex", "label", "margin", "align", "children"];
function Wr() {
  return Wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Wr.apply(this, arguments);
}
function Eg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Si(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, a = e.label, r = e.margin, l = r === void 0 ? "5px 0" : r, c = e.align, o = c === void 0 ? "left" : c, s = e.children, u = Eg(e, bg);
  return /* @__PURE__ */ i.createElement("div", Wr({
    className: "visx-legend-label",
    style: {
      justifyContent: o,
      display: "flex",
      flex: n,
      margin: l
    }
  }, u), s || a);
}
Si.propTypes = {
  align: V.string,
  label: V.node,
  flex: V.oneOfType([V.string, V.number]),
  margin: V.oneOfType([V.string, V.number]),
  children: V.node
};
function Vr() {
  return Vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Vr.apply(this, arguments);
}
function kl(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    style: Vr({
      width: n,
      height: a,
      background: t
    }, r)
  });
}
kl.propTypes = {
  fill: V.string,
  width: V.oneOfType([V.string, V.number]),
  height: V.oneOfType([V.string, V.number])
};
function nu(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, c = typeof a == "string" || typeof a > "u" ? 0 : a, o = Math.max(l, c), s = o / 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: o,
    height: o
  }, /* @__PURE__ */ i.createElement(be, {
    top: s,
    left: s
  }, /* @__PURE__ */ i.createElement("circle", {
    r: s,
    fill: t,
    style: r
  })));
}
nu.propTypes = {
  fill: V.string,
  width: V.oneOfType([V.string, V.number]),
  height: V.oneOfType([V.string, V.number])
};
function au(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style, l = typeof a == "string" || typeof a > "u" ? 0 : a, c = typeof (r == null ? void 0 : r.strokeWidth) == "number" ? r == null ? void 0 : r.strokeWidth : 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: n,
    height: a
  }, /* @__PURE__ */ i.createElement(be, {
    top: l / 2 - c / 2
  }, /* @__PURE__ */ i.createElement("line", {
    x1: 0,
    x2: n,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: c,
    style: r
  })));
}
au.propTypes = {
  fill: V.string,
  width: V.oneOfType([V.string, V.number]),
  height: V.oneOfType([V.string, V.number])
};
function ya() {
  return ya = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ya.apply(this, arguments);
}
var nr = function() {
};
function Ag(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, r = a === void 0 ? nr : a, l = e.size, c = l === void 0 ? nr : l, o = e.width, s = e.height, u = e.label, d = e.item, m = e.itemIndex, h = e.shapeStyle, y = h === void 0 ? nr : h, p = {
    width: o,
    height: s,
    item: d,
    itemIndex: m,
    label: u,
    fill: r(ya({}, u)),
    size: c(ya({}, u)),
    style: y(ya({}, u))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ i.createElement(nu, p) : n === "line" ? /* @__PURE__ */ i.createElement(au, p) : /* @__PURE__ */ i.createElement(kl, p) : /* @__PURE__ */ i.isValidElement(n) ? /* @__PURE__ */ i.cloneElement(n, p) : n ? /* @__PURE__ */ i.createElement(n, p) : null;
}
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
function iu(e) {
  var t = e.shape, n = t === void 0 ? kl : t, a = e.width, r = e.height, l = e.margin, c = e.label, o = e.item, s = e.itemIndex, u = e.fill, d = e.size, m = e.shapeStyle;
  return /* @__PURE__ */ i.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: d ? d(ki({}, c)) : a,
      height: d ? d(ki({}, c)) : r,
      margin: l
    }
  }, Ag({
    shape: n,
    item: o,
    itemIndex: s,
    label: c,
    width: a,
    height: r,
    fill: u,
    shapeStyle: m
  }));
}
iu.propTypes = {
  itemIndex: V.number.isRequired,
  margin: V.oneOfType([V.string, V.number]),
  width: V.oneOfType([V.string, V.number]),
  height: V.oneOfType([V.string, V.number])
};
function ru(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function us(e) {
  return String(ru(e));
}
function Tg(e) {
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
var Sg = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function ga() {
  return ga = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ga.apply(this, arguments);
}
function kg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var wg = {
  display: "flex"
};
function lu(e) {
  var t = e.className, n = e.style, a = n === void 0 ? wg : n, r = e.scale, l = e.shape, c = e.domain, o = e.fill, s = o === void 0 ? us : o, u = e.size, d = u === void 0 ? us : u, m = e.labelFormat, h = m === void 0 ? ru : m, y = e.labelTransform, p = y === void 0 ? Tg : y, g = e.shapeWidth, v = g === void 0 ? 15 : g, f = e.shapeHeight, b = f === void 0 ? 15 : f, x = e.shapeMargin, w = x === void 0 ? "2px 4px 2px 0" : x, C = e.shapeStyle, T = e.labelAlign, D = T === void 0 ? "left" : T, k = e.labelFlex, z = k === void 0 ? "1" : k, $ = e.labelMargin, N = $ === void 0 ? "0 4px" : $, A = e.itemMargin, P = A === void 0 ? "0" : A, L = e.direction, S = L === void 0 ? "column" : L, M = e.itemDirection, R = M === void 0 ? "row" : M, q = e.legendLabelProps, j = e.children, I = kg(e, Sg), G = c || ("domain" in r ? r.domain() : []), Y = p({
    scale: r,
    labelFormat: h
  }), ce = G.map(Y);
  return j ? /* @__PURE__ */ i.createElement(i.Fragment, null, j(ce)) : /* @__PURE__ */ i.createElement("div", {
    className: Ze("visx-legend", t),
    style: ga({}, a, {
      flexDirection: S
    })
  }, ce.map(function(ue, ge) {
    return /* @__PURE__ */ i.createElement(Ti, ga({
      key: "legend-" + ue.text + "-" + ge,
      margin: P,
      flexDirection: R
    }, I), /* @__PURE__ */ i.createElement(iu, {
      shape: l,
      height: b,
      width: v,
      margin: w,
      item: G[ge],
      itemIndex: ge,
      label: ue,
      fill: s,
      size: d,
      shapeStyle: C
    }), /* @__PURE__ */ i.createElement(Si, ga({
      label: ue.text,
      flex: z,
      margin: N,
      align: D
    }, q)));
  }));
}
lu.propTypes = {
  children: V.func,
  className: V.string,
  domain: V.array,
  shapeWidth: V.oneOfType([V.string, V.number]),
  shapeHeight: V.oneOfType([V.string, V.number]),
  shapeMargin: V.oneOfType([V.string, V.number]),
  labelAlign: V.string,
  labelFlex: V.oneOfType([V.string, V.number]),
  labelMargin: V.oneOfType([V.string, V.number]),
  itemMargin: V.oneOfType([V.string, V.number]),
  fill: V.func,
  size: V.func,
  shapeStyle: V.func
};
function Cg(e) {
  return /* @__PURE__ */ i.createElement(lu, e);
}
function Ng(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const Pg = () => {
  const {
    config: e,
    legend: t,
    colorScale: n,
    seriesHighlight: a,
    highlight: r,
    twoColorPalette: l,
    tableData: c,
    highlightReset: o,
    transformedData: s,
    colorPalettes: u,
    currentViewport: d,
    handleLineType: m
  } = F.useContext(ze), { innerClasses: h, containerClasses: y } = Ng(e), { visualizationType: p, visualizationSubType: g, series: v, runtime: f, orientation: b } = e, x = ($) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? $.reverse() : $, w = ($) => {
    var P, L, S, M;
    const N = (P = e.legend) == null ? void 0 : P.colorCode;
    if (p === "Deviation Bar") {
      const [R, q] = l[e.twoColor.palette], j = {
        datum: "X",
        index: 0,
        text: `Below ${e.xAxis.targetLabel}`,
        value: R
      }, I = {
        datum: "X",
        index: 1,
        text: `Above ${e.xAxis.targetLabel}`,
        value: q
      };
      return x([j, I]);
    }
    if (p === "Bar" && g === "regular" && N && (v == null ? void 0 : v.length) === 1) {
      let R = u[e.palette];
      for (; c.length > R.length; )
        R = R.concat(R);
      R = R.slice(0, s.length);
      const q = /* @__PURE__ */ new Set();
      c.forEach((I) => q.add(I[N]));
      const j = Array.from(q).map((I, G) => ({
        datum: I,
        index: G,
        text: I,
        value: R[G]
      }));
      return x(j);
    }
    if (((L = f == null ? void 0 : f.forecastingSeriesKeys) == null ? void 0 : L.length) > 0) {
      let R = [];
      return (M = (S = e.runtime) == null ? void 0 : S.forecastingSeriesKeys) == null || M.map((q, j) => {
        var I;
        return (I = q == null ? void 0 : q.stages) == null ? void 0 : I.map((G, Y) => {
          var ge, ke, Te, Se;
          let ce = (ge = Za[G.color]) != null && ge[2] ? (ke = Za[G.color]) == null ? void 0 : ke[2] : (Te = u[G.color]) != null && Te[2] ? (Se = u[G.color]) == null ? void 0 : Se[2] : "#ccc";
          const ue = {
            datum: G.key,
            index: Y,
            text: G.key,
            value: ce
          };
          R.push(ue);
        });
      }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((q, j) => {
        let I = u[e.palette][j] ? u[e.palette][j] : "#ccc";
        const G = {
          datum: q,
          index: j,
          text: q,
          value: I
        };
        R.push(G);
      }), x(R);
    }
    if (e.series.map((R) => R.name).filter((R) => R).length > 0) {
      let R = u[e.palette];
      for (; c.length > R.length; )
        R = R.concat(R);
      R = R.slice(0, s.length);
      const q = /* @__PURE__ */ new Set();
      e.series.forEach((I) => {
        q.add(I.name ? I.name : I.dataKey);
      });
      const j = Array.from(q).map((I, G) => ({
        datum: I,
        index: G,
        text: I,
        value: n(I)
      }));
      return x(j);
    }
    return x($);
  }, C = () => {
    let $ = 0;
    const N = t.position === "bottom" || ["sm", "xs", "xxs"].includes(d), A = e.orientation === "horizontal", P = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, L = e.brush.active, S = 25, M = e.brush.height;
    return !A && N && e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && !P && ($ = L ? -e.xAxis.size + e.xAxis.labelOffset + S + M : -e.xAxis.size + e.xAxis.labelOffset + S), !A && N && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && !P && ($ = L ? -e.xAxis.size + e.xAxis.labelOffset + S + M : -e.xAxis.size + e.xAxis.labelOffset + S), !A && N && e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && P && ($ = L ? e.xAxis.tickWidthMax + M + -e.xAxis.size + e.xAxis.labelOffset + S : e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + S), !A && N && !e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && P && ($ = L ? e.xAxis.tickWidthMax + M + -e.xAxis.size + S * 1.4 : e.xAxis.tickWidthMax + -e.xAxis.size + S * 1.3), !A && N && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && !P && ($ = L ? e.dynamicMarginTop + -e.xAxis.size + S + M : e.dynamicMarginTop + -e.xAxis.size + S), !A && N && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && !P && ($ = L ? e.dynamicMarginTop - S : e.dynamicMarginTop - M - S), `${$}px`;
  }, T = t.position === "bottom" || ["sm", "xs", "xxs"].includes(d);
  T && e.brush.active && e.brush.height * 2 + e.dynamicMarginTop / 2, T && e.isResponsiveTicks && e.dynamicMarginTop && !e.brush.active && e.dynamicMarginTop;
  const D = {
    marginBottom: T ? "15px" : "0px",
    marginTop: C()
    // marginTop: isBottomOrSmallViewport && orientation === 'horizontal' ? `${config.yAxis.label && config.isResponsiveTicks ? config.dynamicMarginTop : config.runtime.xAxis.size}px` : `${brushHeight + top}px`
  }, { HighLightedBarUtils: k } = Di(e);
  let z = k.findDuplicates(e.highlightedBarValues);
  return t ? e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement("aside", { style: D, id: "legend", className: y.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, t.label && /* @__PURE__ */ i.createElement("h2", null, xn(t.label)), t.description && /* @__PURE__ */ i.createElement("p", null, xn(t.description)), /* @__PURE__ */ i.createElement(Cg, { scale: n, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, ($) => /* @__PURE__ */ i.createElement("div", { className: h.join(" ") }, w($).map((N, A) => {
    var S, M, R, q;
    let P = ["legend-item", `legend-text--${N.text.replace(" ", "").toLowerCase()}`], L = N.datum;
    if (e.exclusions.active && ((S = e.exclusions.keys) != null && S.includes(L)))
      return null;
    if (f.seriesLabels) {
      let j = e.runtime.seriesLabelsAll.indexOf(L);
      L = e.runtime.seriesKeys[j], ((M = f == null ? void 0 : f.forecastingSeriesKeys) == null ? void 0 : M.length) > 0 && (L = N.text);
    }
    return a.length > 0 && a.includes(L) === !1 && P.push("inactive"), /* @__PURE__ */ i.createElement(
      Ti,
      {
        className: P.join(" "),
        tabIndex: 0,
        key: `legend-quantile-${A}`,
        onKeyPress: (j) => {
          j.key === "Enter" && r(N);
        },
        onClick: () => {
          r(N);
        }
      },
      e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ i.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ i.createElement(qe, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: N.value, strokeWidth: 2, strokeDasharray: m((R = e.series[A]) != null && R.type ? (q = e.series[A]) == null ? void 0 : q.type : "") })) : /* @__PURE__ */ i.createElement(Vl, { fill: N.value }),
      /* @__PURE__ */ i.createElement(Si, { align: "left", margin: "0 0 0 4px" }, N.text)
    );
  }), z.map((N, A) => {
    let P = "legend-item", L = N.legendLabel;
    return L ? (a.length > 0 && a.includes(L) === !1 && (P += " inactive"), /* @__PURE__ */ i.createElement(
      Ti,
      {
        className: P,
        tabIndex: 0,
        key: `legend-quantile-${A}`,
        onKeyPress: (S) => {
          S.key === "Enter" && r(N.legendLabel);
        },
        onClick: () => {
          r(N.legendLabel);
        }
      },
      /* @__PURE__ */ i.createElement(Vl, { fill: "transparent", borderColor: N.color ? N.color : "rgba(255, 102, 1)" }),
      " ",
      /* @__PURE__ */ i.createElement(Si, { align: "left", margin: "0 0 0 4px" }, N.legendLabel ? N.legendLabel : N.value)
    )) : !1;
  }), a.length > 0 && /* @__PURE__ */ i.createElement("button", { className: `legend-reset ${e.theme}`, onClick: (N) => o(N), tabIndex: 0 }, "Reset")))) : null;
}, ar = {
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
function Lg(e, t, n) {
  var a = this, r = F.useRef(null), l = F.useRef(0), c = F.useRef(null), o = F.useRef([]), s = F.useRef(), u = F.useRef(), d = F.useRef(e), m = F.useRef(!0);
  d.current = e;
  var h = !t && t !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  t = +t || 0, n = n || {};
  var y = !!n.leading, p = "trailing" in n ? !!n.trailing : !0, g = "maxWait" in n, v = g ? Math.max(+n.maxWait || 0, t) : null;
  F.useEffect(function() {
    return m.current = !0, function() {
      m.current = !1;
    };
  }, []);
  var f = F.useMemo(function() {
    var b = function(k) {
      var z = o.current, $ = s.current;
      return o.current = s.current = null, l.current = k, u.current = d.current.apply($, z);
    }, x = function(k, z) {
      h && cancelAnimationFrame(c.current), c.current = h ? requestAnimationFrame(k) : setTimeout(k, z);
    }, w = function(k) {
      if (!m.current)
        return !1;
      var z = k - r.current, $ = k - l.current;
      return !r.current || z >= t || z < 0 || g && $ >= v;
    }, C = function(k) {
      return c.current = null, p && o.current ? b(k) : (o.current = s.current = null, u.current);
    }, T = function() {
      var k = Date.now();
      if (w(k))
        return C(k);
      if (m.current) {
        var z = k - r.current, $ = k - l.current, N = t - z, A = g ? Math.min(N, v - $) : N;
        x(T, A);
      }
    }, D = function() {
      for (var k = [], z = 0; z < arguments.length; z++)
        k[z] = arguments[z];
      var $ = Date.now(), N = w($);
      if (o.current = k, s.current = a, r.current = $, N) {
        if (!c.current && m.current)
          return l.current = r.current, x(T, t), y ? b(r.current) : u.current;
        if (g)
          return x(T, t), b(r.current);
      }
      return c.current || x(T, t), u.current;
    };
    return D.cancel = function() {
      c.current && (h ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), l.current = 0, o.current = r.current = s.current = c.current = null;
    }, D.isPending = function() {
      return !!c.current;
    }, D.flush = function() {
      return c.current ? C(Date.now()) : u.current;
    }, D;
  }, [y, g, t, v, p, h]);
  return f;
}
function Og(e, t) {
  return e === t;
}
function ds(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function _g(e) {
  var t = F.useState(ds(e)), n = t[0], a = t[1], r = F.useCallback(function(l) {
    return a(ds(l));
  }, []);
  return [n, r];
}
function ou(e, t, n) {
  var a = n && n.equalityFn || Og, r = _g(e), l = r[0], c = r[1], o = Lg(F.useCallback(function(u) {
    return c(u);
  }, [c]), t, n), s = F.useRef(e);
  return F.useEffect(function() {
    a(s.current, e) || (o(e), s.current = e);
  }, [e, o, a]), [l, { cancel: o.cancel, isPending: o.isPending, flush: o.flush }];
}
const Qa = (e) => /* @__PURE__ */ F.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ F.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), aa = F.memo(({ label: e, value: t, options: n, fieldName: a, section: r = null, subsection: l = null, required: c = !1, tooltip: o, updateField: s, initial: u, ...d }) => {
  let m = n.map((h, y) => /* @__PURE__ */ i.createElement("option", { value: h, key: y }, h));
  return u && m.unshift(
    /* @__PURE__ */ i.createElement("option", { value: "", key: "initial" }, u)
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, e, o), /* @__PURE__ */ i.createElement(
    "select",
    {
      className: c && !t ? "warning" : "",
      name: a,
      value: t,
      onChange: (h) => {
        s(r, l, a, h.target.value);
      },
      ...d
    },
    m
  ));
}), ir = F.memo(({ label: e, value: t, fieldName: n, section: a = null, subsection: r = null, tooltip: l, updateField: c, ...o }) => /* @__PURE__ */ i.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ i.createElement(
  "input",
  {
    type: "checkbox",
    name: n,
    checked: t,
    onChange: (s) => {
      c(a, r, n, !t);
    },
    ...o
  }
), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, e, l))), ia = F.memo(({ label: e, tooltip: t, section: n = null, subsection: a = null, fieldName: r, updateField: l, value: c, type: o = "input", i: s = null, min: u = null, ...d }) => {
  const [m, h] = F.useState(c), [y] = ou(m, 500);
  F.useEffect(() => {
    typeof y == "string" && c !== y && l(n, a, r, y, s);
  }, [y]);
  let p = a ? `${n}-${a}-${r}` : `${n}-${a}-${r}`;
  const g = (f) => {
    o !== "number" || u === null || !f.target.value || u <= parseFloat(f.target.value) ? h(f.target.value) : h(u.toString());
  };
  let v = /* @__PURE__ */ i.createElement("input", { type: "text", name: p, onChange: g, ...d, value: m });
  return o === "textarea" && (v = /* @__PURE__ */ i.createElement("textarea", { name: p, onChange: g, ...d, value: m })), o === "number" && (v = /* @__PURE__ */ i.createElement("input", { type: "number", name: p, onChange: g, ...d, value: m })), o === "date" && (v = /* @__PURE__ */ i.createElement("input", { type: "date", name: p, onChange: g, ...d, value: m })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, e, t), v);
}), Mg = () => {
  var o, s, u, d, m, h, y, p, g, v, f, b;
  const { config: e, rawData: t, updateConfig: n, isDebug: a } = F.useContext(ze), r = (x) => {
    x.orientation === "horizontal" && (x.labels = !1), x.table.show === void 0 && (x.table.show = !isDashboard), x.visualizationType === "Combo" && (x.orientation = "vertical");
  }, l = (x = !0) => {
    let w = {};
    return t.forEach((C) => {
      Object.keys(C).forEach((T) => w[T] = !0);
    }), x && Object.keys(w).forEach((C) => {
      (e.series && e.series.filter((T) => T.dataKey === C).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(C)) && delete w[C];
    }), Object.keys(w);
  }, c = (x, w, C, T) => {
    if (x === "boxplot" && w === "legend") {
      n({
        ...e,
        [x]: {
          ...e[x],
          [w]: {
            ...e.boxplot[w],
            [C]: T
          }
        }
      });
      return;
    }
    if (x === "boxplot" && w === "labels") {
      n({
        ...e,
        [x]: {
          ...e[x],
          [w]: {
            ...e.boxplot[w],
            [C]: T
          }
        }
      });
      return;
    }
    if (x === "forestPlot" && w) {
      n({
        ...e,
        [x]: {
          ...e[x],
          [w]: {
            ...e.forestPlot[w],
            [C]: T
          }
        }
      });
      return;
    }
    if (x === "columns" && w !== "" && C !== "") {
      n({
        ...e,
        [x]: {
          ...e[x],
          [w]: {
            ...e[x][w],
            [C]: T
          }
        }
      });
      return;
    }
    if (x === null && w === null) {
      let $ = { ...e, [C]: T };
      r($), n($);
      return;
    }
    const D = Array.isArray(e[x]);
    let k = D ? [...e[x], T] : { ...e[x], [C]: T };
    w !== null && (D ? (k = [...e[x]], k[w] = { ...k[w], [C]: T }) : typeof T == "string" ? k[w] = T : k = { ...e[x], [w]: { ...e[x][w], [C]: T } });
    let z = { ...e, [x]: k };
    r(z), n(z);
  };
  return /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Forest Plot Settings", (!e.forestPlot.estimateField || !e.forestPlot.upper || !e.forestPlot.lower) && /* @__PURE__ */ i.createElement(Qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(ia, { type: "text", value: ((o = e.forestPlot) == null ? void 0 : o.title) || "", updateField: c, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: e.forestPlot.leftWidthOffset || 0,
      onChange: (x) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            leftWidthOffset: x.target.value
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
      value: e.forestPlot.leftWidthOffsetMobile || 0,
      onChange: (x) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            leftWidthOffsetMobile: x.target.value
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
      value: e.forestPlot.rightWidthOffset || 0,
      onChange: (x) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            rightWidthOffset: x.target.value
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
      value: e.forestPlot.rightWidthOffsetMobile || 0,
      onChange: (x) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            rightWidthOffsetMobile: x.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement(
    aa,
    {
      value: e.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: "Select",
      required: !0,
      onChange: (x) => {
        x.target.value !== "" && x.target.value !== "Select" && n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            estimateField: x.target.value
          }
        }), x.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    aa,
    {
      value: e.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: "Select",
      onChange: (x) => {
        x.target.value !== "" && x.target.value !== "Select" && n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            lower: x.target.value
          }
        }), x.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    aa,
    {
      value: e.forestPlot.upper,
      label: "Upper CI Column",
      initial: "Select",
      required: !0,
      onChange: (x) => {
        x.target.value !== "" && x.target.value !== "Select" && n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            upper: x.target.value
          }
        }), x.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    aa,
    {
      value: e.forestPlot.shape,
      label: "Point Estimate Shape",
      initial: "Select",
      onChange: (x) => {
        x.target.value !== "" && x.target.value !== "Select" && n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            shape: x.target.value
          }
        }), x.target.value = "";
      },
      options: ["text", "circle", "square", "diamond"]
    }
  ), /* @__PURE__ */ i.createElement(
    aa,
    {
      value: e.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (x) => {
        x.target.value !== "" && x.target.value !== "Select" && n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            radius: {
              ...e.forestPlot.radius,
              scalingColumn: x.target.value
            }
          }
        }), x.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ i.createElement(
    "input",
    {
      min: 1,
      max: 5,
      value: e.forestPlot.radius.min,
      onChange: (x) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            radius: {
              ...e.forestPlot.radius,
              min: Number(x.target.value)
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
      min: 5,
      max: 10,
      value: e.forestPlot.radius.max,
      onChange: (x) => {
        n({
          ...e,
          forestPlot: {
            ...e.forestPlot,
            radius: {
              ...e.forestPlot.radius,
              max: Number(x.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  )), /* @__PURE__ */ i.createElement(ia, { type: "number", min: 20, max: 45, value: e.forestPlot.rowHeight ? e.forestPlot.rowHeight : 10, updateField: c, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(ia, { type: "number", value: ((u = (s = e.forestPlot) == null ? void 0 : s.regression) == null ? void 0 : u.estimateField) || "", updateField: c, section: "forestPlot", subsection: "regression", fieldName: "estimateField", label: "Line of No Effect" }), /* @__PURE__ */ i.createElement(ia, { type: "text", value: ((m = (d = e.forestPlot) == null ? void 0 : d.regression) == null ? void 0 : m.baseLineColor) || "black", updateField: c, section: "forestPlot", subsection: "regression", fieldName: "baseLineColor", label: "Base Color" }), /* @__PURE__ */ i.createElement(ir, { value: ((y = (h = e.forestPlot) == null ? void 0 : h.regression) == null ? void 0 : y.showBaseLine) || !1, section: "forestPlot", subsection: "regression", fieldName: "showBaseLine", label: "Show base line", updateField: c }), /* @__PURE__ */ i.createElement(ir, { value: ((g = (p = e.forestPlot) == null ? void 0 : p.regression) == null ? void 0 : g.showDiamond) || !1, section: "forestPlot", subsection: "regression", fieldName: "showDiamond", label: "Show Diamond", updateField: c }), /* @__PURE__ */ i.createElement(ir, { value: ((v = e.forestPlot) == null ? void 0 : v.hideDateCategoryCol) || !1, section: "forestPlot", fieldName: "hideDateCategoryCol", label: "Hide Date Category Column", updateField: c }), /* @__PURE__ */ i.createElement(ia, { type: "text", value: ((b = (f = e.forestPlot) == null ? void 0 : f.regression) == null ? void 0 : b.description) || "", updateField: c, section: "forestPlot", subsection: "regression", fieldName: "description", label: "Description" })));
}, Yn = i.createContext(), Dg = (e) => {
  const { updateConfig: t, config: n } = F.useContext(ze), { getColumns: a, selectComponent: r } = e, l = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], c = (o, s, u) => {
    let d = [...n.series];
    d[o][u] = s, t({ ...n, series: d });
  };
  return /* @__PURE__ */ i.createElement(Yn.Provider, { value: { updateSeries: c, supportedRightAxisTypes: l, getColumns: a, selectComponent: r } }, e.children);
}, $g = (e) => {
  const { config: t, updateConfig: n } = F.useContext(ze), { series: a, index: r } = e;
  if (!(() => {
    let s = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((d) => d.includes(a.type)) && (s = !0), s;
  })())
    return;
  const c = (s, u) => {
    let d = [...t.series];
    d[s].lineType = u, n({ ...t, series: d });
  };
  let o = [];
  return Object.keys(Ei).map((s) => o.push(Ei[s])), /* @__PURE__ */ i.createElement(
    on,
    {
      initial: "Select an option",
      value: a.lineType ? a.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (s) => {
        c(r, s.target.value);
      },
      options: o
    }
  );
}, zg = (e) => {
  const { config: t } = F.useContext(ze), { updateSeries: n } = F.useContext(Yn), { index: a, series: r } = e, l = () => {
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
      on,
      {
        initial: "Select an option",
        value: r.type,
        label: "Series Type",
        onChange: (c) => {
          n(a, c.target.value, "type");
        },
        options: l()
      }
    );
}, Rg = (e) => {
  const { config: t, updateConfig: n, rawData: a } = F.useContext(ze), { updateSeries: r, getColumns: l } = F.useContext(Yn), { index: c, series: o } = e;
  if (o.type === "Forecasting")
    return /* @__PURE__ */ i.createElement(
      on,
      {
        initial: "Select an option",
        value: o.stageColumn,
        label: "Add Forecasting Stages",
        onChange: (s) => {
          let u = [], d = new Set(a == null ? void 0 : a.map((h) => h[s.target.value]));
          d = Array.from(d), d = d.filter((h) => h !== void 0), d.forEach((h) => u.push({ key: h }));
          const m = [...t.series];
          m[c] = { ...m[c], stages: u, stageColumn: s.target.value }, n({
            ...t,
            series: m
          });
        },
        options: l(!1)
      }
    );
}, Fg = (e) => {
  const { config: t, rawData: n } = F.useContext(ze), { updateSeries: a } = F.useContext(Yn), { index: r, series: l } = e;
  if (l.type !== "Forecasting" || !n || !l.stageColumn)
    return;
  let c = new Set(n.map((o) => o[l.stageColumn]));
  return c = Array.from(c), c = c.filter((o) => o !== void 0), /* @__PURE__ */ i.createElement(
    on,
    {
      initial: "Select an option",
      value: l.stageItem,
      label: "Forecasting Item Column",
      onChange: (o) => {
        a(r, o.target.value, "stageItem");
      },
      options: c
    }
  );
}, Bg = (e) => {
  const { config: t } = F.useContext(ze), { updateSeries: n, supportedRightAxisTypes: a } = F.useContext(Yn), { index: r, series: l } = e;
  if (!(t.visualizationType !== "Combo" || !l) && a.includes(l.type))
    return /* @__PURE__ */ i.createElement(
      on,
      {
        initial: "Select an option",
        value: l.axis ? l.axis : "Left",
        label: "Series Axis",
        onChange: (c) => {
          n(r, c.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, Wg = (e) => {
  var l;
  const { config: t, updateConfig: n } = F.useContext(ze), { index: a, series: r } = e;
  if (r.type === "Forecasting" && r)
    return (l = r == null ? void 0 : r.stages) == null ? void 0 : l.map((c, o) => {
      var s, u, d, m;
      return /* @__PURE__ */ i.createElement(
        on,
        {
          key: `${c}--${o}`,
          initial: "Select an option",
          value: (u = (s = t.series) == null ? void 0 : s[a].stages) != null && u[o].color ? (m = (d = t.series) == null ? void 0 : d[a].stages) == null ? void 0 : m[o].color : "Select",
          label: `${c.key} Series Color`,
          onChange: (h) => {
            const y = [...t.series], p = y[a].stages;
            p[o].color = h.target.value, y[a] = { ...y[a], stages: p }, n({
              ...t,
              series: y
            });
          },
          options: Object.keys(Za)
        }
      );
    });
}, Vg = (e) => {
  var c;
  const { config: t, updateConfig: n } = F.useContext(ze), { series: a, index: r } = e, { getColumns: l } = F.useContext(Yn);
  if (a.type === "Forecasting")
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, (c = a == null ? void 0 : a.confidenceIntervals) == null ? void 0 : c.map((o, s) => {
      const u = o.showInTooltip ? o.showInTooltip : !1, d = (m, h, y) => {
        m.preventDefault();
        let p = [...t.series];
        p[h].confidenceIntervals[y].showInTooltip = !u, n({
          ...t,
          series: p
        });
      };
      return /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart", key: `${s}` }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Group ", s + 1, /* @__PURE__ */ i.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (m) => {
            m.preventDefault();
            const h = [...t.series[r].confidenceIntervals];
            h.splice(s, 1);
            const y = [...t.series];
            y[r] = { ...y[r], confidenceIntervals: [...h] }, n({
              ...t,
              series: y
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (m) => d(m, r, s) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, u && /* @__PURE__ */ i.createElement(vs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: u || !1, readOnly: !0 }))), /* @__PURE__ */ i.createElement(
        on,
        {
          initial: "Select an option",
          value: t.series[r].confidenceIntervals[s].low ? t.series[r].confidenceIntervals[s].low : "Select",
          label: "Low Confidence Interval",
          onChange: (m) => {
            const h = [...t.series[r].confidenceIntervals];
            h[s].low = m.target.value;
            const y = [...t.series];
            y[r] = { ...y[r], confidenceIntervals: h }, n({
              ...t,
              series: y
            });
          },
          options: l()
        }
      ), /* @__PURE__ */ i.createElement(
        on,
        {
          initial: "Select an option",
          value: t.series[r].confidenceIntervals[s].high ? t.series[r].confidenceIntervals[s].high : "Select",
          label: "High Confidence Interval",
          onChange: (m) => {
            const h = [...t.series[r].confidenceIntervals];
            h[s].high = m.target.value;
            const y = [...t.series];
            y[r] = { ...y[r], confidenceIntervals: h }, n({
              ...t,
              series: y
            });
          },
          options: l()
        }
      )));
    })), /* @__PURE__ */ i.createElement(
      "button",
      {
        className: "btn full-width",
        onClick: (o) => {
          o.preventDefault();
          let s = null;
          t.series[r].confidenceIntervals ? s = [...t.series[r].confidenceIntervals] : s = [];
          const u = [...t.series];
          u[r] = { ...u[r], confidenceIntervals: [...s, { high: "", low: "" }] }, n({
            ...t,
            series: u
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, Hg = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: r } = F.useContext(ze), l = ["Bar", "Line", "Area Chart"];
  if (a.visualizationType === "Combo" || !l.includes(t.type))
    return;
  let c = (o, s) => {
    let u = [...a.series], d = { ...a.runtime.seriesLabels };
    u[o].name = s, d[u[o].dataKey] = u[o].name ? u[o].name : u[o].dataKey;
    let m = {
      ...a,
      series: u,
      runtime: {
        ...a.runtime,
        seriesLabels: d
      }
    };
    r(m);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${n}`,
      value: t.name ? t.name : "",
      onChange: (o) => {
        c(n, o.target.value);
      }
    }
  ));
}, Kg = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: r } = F.useContext(ze), l = (c) => {
    let o = [...a.series];
    o[c].tooltip && o[c].tooltip, o[c].tooltip = !o[c].tooltip, r({
      ...a,
      series: o
    });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (c) => l(n) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ i.createElement(vs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, Ig = (e) => {
  const { config: t, updateConfig: n } = F.useContext(ze), { series: a, index: r } = e, l = (o) => {
    let s = [...t.series], u = -1;
    for (let d = 0; d < s.length; d++)
      if (s[d].dataKey === o) {
        u = d;
        break;
      }
    if (u !== -1) {
      s.splice(u, 1);
      let d = { ...t, series: s };
      s.length === 0 && delete d.series, n(d);
    }
    t.visualizationType === "Paired Bar" && n({
      ...t,
      series: []
    });
  }, c = (o, s, u) => {
    o.preventDefault(), l(s.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: (o) => c(o, a) }, "Remove");
}, su = (e) => {
  const { config: t } = F.useContext(ze), { series: n, getItemStyle: a, sortableItemStyles: r, chartsWithOptions: l, index: c } = e;
  return /* @__PURE__ */ i.createElement(hs, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: c }, (o, s) => /* @__PURE__ */ i.createElement("div", { key: c, className: s.isDragging ? "currently-dragging" : "", style: a(s.isDragging, o.draggableProps.style, r), ref: o.innerRef, ...o.draggableProps, ...o.dragHandleProps }, /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart" }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(st, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ i.createElement(De, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ i.createElement(It.Button.Remove, { series: n, index: c }))), l.includes(t.visualizationType) && /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(It.Input.Name, { series: n, index: c }), /* @__PURE__ */ i.createElement(It.Dropdown.SeriesType, { series: n, index: c }), /* @__PURE__ */ i.createElement(It.Dropdown.AxisPosition, { series: n, index: c }), /* @__PURE__ */ i.createElement(It.Dropdown.LineType, { series: n, index: c }), /* @__PURE__ */ i.createElement(It.Dropdown.ForecastingColor, { series: n, index: c }), /* @__PURE__ */ i.createElement(It.Dropdown.ConfidenceInterval, { series: n, index: c }), /* @__PURE__ */ i.createElement(It.Checkbox.DisplayInTooltip, { series: n, index: c }))))));
}, jg = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: r } = e;
  return t.map((l, c) => /* @__PURE__ */ i.createElement(su, { getItemStyle: n, sortableItemStyles: a, chartsWithOptions: r, series: l, index: c, key: `series-list-${c}` }));
}, It = {
  Wrapper: Dg,
  Dropdown: {
    SeriesType: zg,
    AxisPosition: Bg,
    ConfidenceInterval: Vg,
    LineType: $g,
    ForecastingStage: Rg,
    ForecastingColumn: Fg,
    ForecastingColor: Wg
  },
  Input: {
    Name: Hg
  },
  Checkbox: {
    DisplayInTooltip: Kg
  },
  Button: {
    Remove: Ig
  },
  Item: su,
  List: jg
}, qg = (e, t) => {
  let n = [], a = [], r = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    n = Object.keys(lr).filter((c) => l ? c.endsWith("reverse") : !c.endsWith("reverse"));
  } else {
    const l = [], c = [];
    for (const o in an) {
      const s = o.startsWith("sequential"), u = o.startsWith("qualitative"), d = o.endsWith("reverse");
      s && (!e.isPaletteReversed && !d || e.isPaletteReversed && d) && l.push(o), u && (!e.isPaletteReversed && !d || e.isPaletteReversed && d) && c.push(o);
    }
    a = l, r = c;
  }
  return F.useEffect(() => {
    let l = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: l } });
  }, [e.twoColor.isPaletteReversed]), F.useEffect(() => {
    let l = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (l = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (l = e.palette.slice(0, -7)), t({ ...e, palette: l });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: a, nonSequential: r };
}, Ug = () => {
  const { config: e } = F.useContext(ze), { visualizationType: t, series: n, orientation: a } = e;
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
    visHasBarBorders: () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : n == null ? void 0 : n.some((ce) => ce.type === "Bar" || ce.type === "Paired Bar" || ce.type === "Deviation Bar"),
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
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : a === "horizontal" || t === "Paired Bar",
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
      const Y = ["Forest Plot"];
      return !(a === "horizontal" || Y.includes(t));
    },
    visSupportsValueAxisLabels: () => !0,
    visSupportsValueAxisLine: () => !0,
    visSupportsValueAxisTicks: () => !0
  };
}, me = F.memo(({ label: e, tooltip: t, section: n = null, subsection: a = null, fieldName: r, updateField: l, value: c, type: o = "input", i: s = null, min: u = null, ...d }) => {
  const [m, h] = F.useState(c), [y] = ou(m, 500);
  F.useEffect(() => {
    typeof y == "string" && c !== y && l(n, a, r, y, s);
  }, [y]);
  let p = a ? `${n}-${a}-${r}` : `${n}-${a}-${r}`;
  const g = (f) => {
    o !== "number" || u === null || !f.target.value || u <= parseFloat(f.target.value) ? h(f.target.value) : h(u.toString());
  };
  let v = /* @__PURE__ */ i.createElement("input", { type: "text", name: p, onChange: g, ...d, value: m });
  return o === "textarea" && (v = /* @__PURE__ */ i.createElement("textarea", { name: p, onChange: g, ...d, value: m })), o === "number" && (v = /* @__PURE__ */ i.createElement("input", { type: "number", name: p, onChange: g, ...d, value: m })), o === "date" && (v = /* @__PURE__ */ i.createElement("input", { type: "date", name: p, onChange: g, ...d, value: m })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, e, t), v);
}), Ae = F.memo(({ label: e, value: t, fieldName: n, section: a = null, subsection: r = null, tooltip: l, updateField: c, ...o }) => /* @__PURE__ */ i.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ i.createElement(
  "input",
  {
    type: "checkbox",
    name: n,
    checked: t,
    onChange: (s) => {
      c(a, r, n, !t);
    },
    ...o
  }
), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, e, l))), He = F.memo(({ label: e, value: t, options: n, fieldName: a, section: r = null, subsection: l = null, required: c = !1, tooltip: o, updateField: s, initial: u, ...d }) => {
  let m = n.map((h, y) => /* @__PURE__ */ i.createElement("option", { value: h, key: y }, h));
  return u && m.unshift(
    /* @__PURE__ */ i.createElement("option", { value: "", key: "initial" }, u)
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, e, o), /* @__PURE__ */ i.createElement(
    "select",
    {
      className: c && !t ? "warning" : "",
      name: a,
      value: t,
      onChange: (h) => {
        s(r, l, a, h.target.value);
      },
      ...d
    },
    m
  ));
}), Yg = F.memo(({ config: e, updateConfig: t }) => {
  let n = (c, o, s) => {
    let u = [];
    e.regions && (u = [...e.regions]), u[s][c] = o, t({ ...e, regions: u });
  }, a = (c, o, s, u, d) => n(s, u, d), r = (c) => {
    let o = [];
    e.regions && (o = [...e.regions]), o.splice(c, 1), t({ ...e, regions: o });
  }, l = () => {
    let c = [];
    e.regions && (c = [...e.regions]), c.push({}), t({ ...e, regions: c });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.regions && e.regions.map(({ label: c, color: o, from: s, to: u, background: d }, m) => /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `region-${m}` }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (h) => {
        h.preventDefault(), r(m);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(me, { value: c, label: "Region Label", fieldName: "label", i: m, updateField: a }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(me, { value: o, label: "Text Color", fieldName: "color", updateField: (h, y, p, g) => n(p, g, m) }), /* @__PURE__ */ i.createElement(me, { value: d, label: "Background", fieldName: "background", updateField: (h, y, p, g) => n(p, g, m) })), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(me, { value: s, label: "From Value", fieldName: "from", updateField: (h, y, p, g) => n(p, g, m) }), /* @__PURE__ */ i.createElement(me, { value: u, label: "To Value", fieldName: "to", updateField: (h, y, p, g) => n(p, g, m) })))), !e.regions && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ i.createElement(
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
}), Xg = () => {
  var tt, St, dn, Ln, Pa, Qn, mt, Xt, wl, Cl, Nl, Pl, Ll, Ol, _l, Ml, Dl, $l, zl, Rl, Fl, Bl;
  const { config: e, updateConfig: t, transformedData: n, loading: a, colorPalettes: r, twoColorPalette: l, unfilteredData: c, excludedData: o, isDashboard: s, setParentConfig: u, missingRequiredSections: d, isDebug: m, setFilteredData: h, lineOptions: y, rawData: p } = F.useContext(ze), { minValue: g, maxValue: v, existPositiveValue: f, isAllLine: b } = $i(e, c), { twoColorPalettes: x, sequential: w, nonSequential: C } = qg(e, t), {
    enabledChartTypes: T,
    headerColors: D,
    visSupportsTooltipLines: k,
    visSupportsNonSequentialPallete: z,
    visSupportsSequentialPallete: $,
    visSupportsReverseColorPalette: N,
    visHasLabelOnData: A,
    visHasNumbersOnBars: P,
    visHasAnchors: L,
    visHasBarBorders: S,
    visHasDataCutoff: M,
    visCanAnimate: R,
    visHasLegend: q,
    visSupportsDateCategoryAxisLabel: j,
    visSupportsDateCategoryAxisLine: I,
    visSupportsDateCategoryAxisTicks: G,
    visSupportsDateCategoryTickRotation: Y,
    visSupportsDateCategoryNumTicks: ce,
    visSupportsRegions: ue,
    visSupportsFilters: ge,
    visSupportsValueAxisGridLines: ke,
    visSupportsValueAxisLine: Te,
    visSupportsValueAxisTicks: Se,
    visSupportsValueAxisLabels: U,
    visSupportsBarSpace: K,
    visSupportsBarThickness: ee,
    visSupportsFootnotes: B,
    visSupportsSuperTitle: de,
    visSupportsDataCutoff: le,
    visSupportsChartHeight: fe,
    visSupportsLeftValueAxis: ae,
    visSupportsTooltipOpacity: he,
    visSupportsRankByValue: Oe,
    visSupportsResponsiveTicks: Ke,
    visSupportsDateCategoryHeight: Ce
  } = Ug(), { handleFilterOrder: xe, filterOrderOptions: oe, filterStyleOptions: te } = gu({ config: e, setConfig: t, filteredData: n, setFilteredData: h });
  F.useEffect(() => {
    let O = [];
    e.series && (O = e.series.map((_) => ({
      ..._,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: O
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
  const { hasRightAxis: We } = dl({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), se = (O, _) => ({
    ..._
  }), we = {
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
  }, Le = (O) => {
    O.orientation === "horizontal" && (O.labels = !1), O.table.show === void 0 && (O.table.show = !s), O.visualizationType === "Combo" && (O.orientation = "vertical");
  }, W = (O, _, H, Z) => {
    if (m && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", O, _, H, Z), O === "boxplot" && _ === "legend") {
      t({
        ...e,
        [O]: {
          ...e[O],
          [_]: {
            ...e.boxplot[_],
            [H]: Z
          }
        }
      });
      return;
    }
    if (O === "boxplot" && _ === "labels") {
      t({
        ...e,
        [O]: {
          ...e[O],
          [_]: {
            ...e.boxplot[_],
            [H]: Z
          }
        }
      });
      return;
    }
    if (O === "columns" && _ !== "" && H !== "") {
      t({
        ...e,
        [O]: {
          ...e[O],
          [_]: {
            ...e[O][_],
            [H]: Z
          }
        }
      });
      return;
    }
    if (O === null && _ === null) {
      let Zn = { ...e, [H]: Z };
      Le(Zn), t(Zn);
      return;
    }
    const je = Array.isArray(e[O]);
    let kt = je ? [...e[O], Z] : { ...e[O], [H]: Z };
    _ !== null && (je ? (kt = [...e[O]], kt[_] = { ...kt[_], [H]: Z }) : typeof Z == "string" ? kt[_] = Z : kt = { ...e[O], [_]: { ...e[O][_], [H]: Z } });
    let Bt = { ...e, [O]: kt };
    Le(Bt), t(Bt);
  }, [_e, Ge] = F.useState(!0);
  if (a)
    return null;
  F.useEffect(() => {
    var O;
    (O = e.general) != null && O.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const nt = (O) => {
    t({
      ...e,
      lollipopShape: O
    });
  }, et = (O) => {
    let _ = [...e.filters];
    _.splice(O, 1), t({ ...e, filters: _ });
  }, ft = (O, _, H) => {
    let Z = [...e.filters];
    Z[_][O] = H, t({ ...e, filters: Z });
  }, at = () => {
    let O = e.filters ? [...e.filters] : [];
    O.push({ values: [] }), t({ ...e, filters: O });
  }, Je = (O) => {
    let _ = e.series ? [...e.series] : [], H = Array.from(new Set(n.map((je) => je[O]))), Z = [];
    H.forEach((je) => {
      Z.push({ key: je });
    }), e.visualizationType === "Forecasting" ? _.push({ dataKey: O, type: e.visualizationType, stages: Z, stageColumn: O, axis: "Left", tooltip: !0 }) : _.push({ dataKey: O, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: _ });
  }, Et = (O) => {
    const _ = e.series[0].dataKey, H = n.sort((je, kt) => je[_] - kt[_]), Z = O === "asc" ? H : H.reverse();
    t({ ...e }, Z);
  }, Yt = (O) => {
    let _ = [...e.exclusions.keys];
    _.push(O);
    let H = { ...e.exclusions, keys: _ };
    t({ ...e, exclusions: H });
  }, Nn = (O) => {
    let _ = -1, H = [...e.exclusions.keys];
    for (let Z = 0; Z < H.length; Z++)
      if (H[Z] === O) {
        _ = Z;
        break;
      }
    if (_ !== -1) {
      H.splice(_, 1);
      let Z = { ...e.exclusions, keys: H }, je = { ...e, exclusions: Z };
      H.length === 0 && delete je.exclusions.keys, t(je);
    }
  }, Na = () => {
    let O = {};
    return c.forEach((_) => {
      Object.keys(_).forEach((H) => O[H] = !0);
    }), Object.keys(O);
  }, At = (O = !0) => {
    let _ = {};
    if (c.forEach((H) => {
      Object.keys(H).forEach((Z) => _[Z] = !0);
    }), O) {
      const { lower: H, upper: Z } = e.confidenceKeys || {};
      Object.keys(_).forEach((je) => {
        (e.series && e.series.filter((kt) => kt.dataKey === je).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(je) && (H && Z || H || Z) && je !== H && je !== Z) && delete _[je];
      });
    }
    return Object.keys(_);
  }, Pn = (O) => {
    if (!O)
      return [];
    const _ = /* @__PURE__ */ new Set();
    for (let H = 0; H < O.length; H++)
      for (const [Z] of Object.entries(O[H]))
        _.add(Z);
    return Array.from(_);
  }, Jt = (O, _ = !1) => {
    let H = [];
    return o.forEach((Z) => {
      H.push(Z[O]);
    }), _ ? [...new Set(H)] : H;
  }, Xn = () => (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.visualizationSubType !== "stacked" && (e.orientation === "horizontal" || e.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"], un = () => {
    Ge(!_e);
  }, X = () => /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ i.createElement("p", null, e.runtime.editorErrorMessage))), ve = () => {
    const O = (_) => {
      _.preventDefault();
      let H = { ...e };
      delete H.newViz, t(H);
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement("button", { className: "btn", style: { margin: "1em auto" }, disabled: d(), onClick: O }, "I'm Done")));
  }, Me = () => {
    let O = JSON.parse(JSON.stringify(e));
    return d() === !1 && delete O.newViz, delete O.runtime, O;
  };
  F.useEffect(() => {
    if (u) {
      const O = Me();
      u(O);
    }
  }, [e]), F.useEffect(() => {
    const O = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], _ = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: _
      },
      yAxis: {
        ...e.yAxis,
        anchors: O
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
  const Ee = F.useCallback(() => {
    const O = [...e.exclusions.keys];
    return /* @__PURE__ */ i.createElement("ul", { className: "series-list" }, O.map((_, H) => /* @__PURE__ */ i.createElement("li", { key: _ }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name", "data-title": _ }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name--text" }, _)), /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: () => Nn(_) }, "×"))));
  }, [e]), ut = (O, _) => {
    let H = e.series, [Z] = H.splice(O, 1);
    H.splice(_, 0, Z), t({ ...e, series: H });
  };
  e.isLollipopChart && ((tt = e == null ? void 0 : e.series) == null ? void 0 : tt.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((St = e == null ? void 0 : e.series) == null ? void 0 : St.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((dn = e == null ? void 0 : e.series) == null ? void 0 : dn.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((Ln = e == null ? void 0 : e.series) == null ? void 0 : Ln.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const vt = e.orientation === "horizontal" ? "xAxis" : "yAxis", [Tt, E] = F.useState({ maxMsg: "", minMsg: "" }), J = () => {
    const O = e[vt].max;
    let _ = "";
    switch (!0) {
      case (O && parseFloat(O) < parseFloat(v) && f):
        _ = "Max value must be more than " + v;
        break;
      case (O && parseFloat(O) < 0 && !f):
        _ = "Value must be more than or equal to 0";
        break;
      default:
        _ = "";
    }
    E((H) => ({ ...H, maxMsg: _ }));
  }, ne = () => {
    const O = e[vt].min;
    let _ = Number(g), H = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && O < 0):
        H = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && O && parseFloat(O) > _):
        H = "Value should not exceed " + g;
        break;
      case (e.visualizationType === "Combo" && b && O && parseFloat(O) > _):
        H = "Value should not exceed " + g;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !b) && O && _ > 0 && parseFloat(O) > 0):
        H = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && parseFloat(O) >= Math.min(_, e.xAxis.target)):
        H = "Value must be less than " + Math.min(_, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && O && _ < 0 && parseFloat(O) > _):
        H = "Value should not exceed " + g;
        break;
      default:
        H = "";
    }
    E((Z) => ({ ...Z, minMsg: H }));
  };
  F.useEffect(() => {
    ne(), J();
  }, [g, v, e]);
  const ie = ((Pa = e == null ? void 0 : e.dataKey) == null ? void 0 : Pa.includes("http://")) || ((Qn = e == null ? void 0 : e.dataKey) == null ? void 0 : Qn.includes("https://")), pe = () => {
    var O, _;
    if (m !== void 0 && m && !((O = e == null ? void 0 : e.xAxis) != null && O.dataKey)) {
      let H = At(!1);
      if (H.includes("Date"))
        return "Date";
      if (H.includes("Race"))
        return "Race";
      if (H.includes("Month"))
        return "Month";
    }
    return ((_ = e == null ? void 0 : e.xAxis) == null ? void 0 : _.dataKey) || "";
  }, ye = () => {
    if (m !== void 0 && m && At(!1).length > 0) {
      let O = At(!1).filter((_) => _ !== pe());
      if (O.length > 0)
        return O[0];
    }
    return "";
  };
  if (m && !e.xAxis.dataKey && (e.xAxis.dataKey = pe()), m && ((mt = e == null ? void 0 : e.series) == null ? void 0 : mt.length) === 0) {
    let O = ye();
    O !== "" && Je(O), m && console.log("### COVE DEBUG: Chart: Setting default datacol=", O);
  }
  const re = ["Area Chart", "Combo", "Line", "Bar", "Forecasting"], Pe = [
    /* @__PURE__ */ i.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(e.data[0]).map((_) => {
      const H = e == null ? void 0 : e.series.some((Z) => Z.dataKey === _);
      if (_ !== e.xAxis.dataKey && !H)
        return Pe.push(
          /* @__PURE__ */ i.createElement("option", { value: _, key: _ }, _)
        );
    });
    let O = {};
    e.data.forEach((_) => {
      Object.keys(_).forEach((H) => {
        O[H] = O[H] || [];
        const Z = typeof _[H] == "number" ? _[H].toString() : _[H];
        O[H].indexOf(Z) === -1 && O[H].push(Z);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((_) => {
      const H = n.some((Z) => Z.dataKey === _);
      if (_ !== e.xAxis.dataKey && !H)
        return Pe.push(
          /* @__PURE__ */ i.createElement("option", { value: _, key: _ }, _)
        );
    });
    let O = {};
    n.forEach((_) => {
      Object.keys(_).forEach((H) => {
        O[H] = O[H] || [];
        const Z = typeof _[H] == "number" ? _[H].toString() : _[H];
        O[H].indexOf(Z) === -1 && O[H].push(Z);
      });
    });
  }
  const Ne = Object.keys(e.columns).filter((O) => [e.xAxis.dataKey].includes(O) !== !0), it = (O) => {
    const _ = `additionalColumn${O}`;
    t({
      ...e,
      columns: {
        ...e.columns,
        [_]: {
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
  }, wt = (O) => {
    const _ = e.columns;
    delete _[O], t({
      ...e,
      columns: _
    });
  }, Ie = async (O, _, H) => {
    switch (_) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [O]: {
              ...e.columns[O],
              [_]: H
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [O]: {
              ...e.columns[O],
              [_]: H
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: Ft,
    highlightedSeriesValues: Re,
    handleUpdateHighlightedBar: Ye,
    handleAddNewHighlightedBar: Qe,
    handleRemoveHighlightedBar: rt,
    handleUpdateHighlightedBarColor: Lt,
    handleHighlightedBarLegendLabel: pt,
    handleUpdateHighlightedBorderWidth: Ot
  } = Di(e, t), yt = (O, _) => {
    let H = e.columns;
    H[O].tooltips = _, t({
      ...e,
      columns: H
    });
  };
  return /* @__PURE__ */ i.createElement(Rt, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ i.createElement(ve, null), e.newViz === void 0 && e.runtime && e.runtime.editorErrorMessage && /* @__PURE__ */ i.createElement(X, null), /* @__PURE__ */ i.createElement("button", { className: _e ? "editor-toggle" : "editor-toggle collapsed", title: _e ? "Collapse Editor" : "Expand Editor", onClick: un }), /* @__PURE__ */ i.createElement("section", { className: `${_e ? "editor-panel cove" : "hidden editor-panel cove"}${s ? " dashboard" : ""}` }, /* @__PURE__ */ i.createElement("div", { "aria-level": "2", role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ i.createElement("section", { className: "form-container" }, /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(lt, null, " ", /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "General")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(He, { value: e.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: W, options: T }), (e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Area Chart") && /* @__PURE__ */ i.createElement(He, { value: e.visualizationSubType || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: W, options: ["regular", "stacked"] }), e.visualizationType === "Area Chart" && e.visualizationSubType === "stacked" && /* @__PURE__ */ i.createElement(He, { value: e.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: W, options: Object.keys(Ei) }), e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(He, { value: e.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: W, options: ["vertical", "horizontal"] }), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(He, { label: "Orientation", options: ["horizontal"] }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(He, { value: e.isLollipopChart ? "lollipop" : e.barStyle || "flat", fieldName: "barStyle", label: "bar style", updateField: W, options: Xn() }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.barStyle === "rounded" && /* @__PURE__ */ i.createElement(He, { value: e.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: W, options: ["top", "full"] }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.barStyle === "rounded" && /* @__PURE__ */ i.createElement(He, { value: e.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: W, options: ["standard", "shallow", "finger"] }), e.visualizationType === "Bar" && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(He, { value: e.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: W, options: ["Below Bar", "On Date/Category Axis"] }), P() ? /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: e.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: W }) : A() && /* @__PURE__ */ i.createElement(Ae, { value: e.labels, fieldName: "labels", label: "Display label on data", updateField: W }), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(He, { fieldName: "pieType", label: "Pie Chart Type", updateField: W, options: ["Regular", "Donut"] }), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ i.createElement(Ae, { value: e.showTitle, fieldName: "showTitle", label: "Show Title", updateField: W }), de() && /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.superTitle,
      updateField: W,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "textarea",
      value: e.introText,
      updateField: W,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "textarea",
      value: e.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), B() && /* @__PURE__ */ i.createElement(
    me,
    {
      type: "textarea",
      value: e.footnotes,
      updateField: W,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Footnotes")))
    }
  ), fe() && e.orientation === "vertical" && /* @__PURE__ */ i.createElement(me, { type: "number", value: e.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: W }))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(Mg, null), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ i.createElement(Qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    He,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (O) => {
        O.target.value !== "" && O.target.value !== "Select" && Je(O.target.value), O.target.value = "";
      },
      options: At()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ i.createElement(It.Wrapper, { getColumns: At }, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ i.createElement(Hl, { onDragEnd: ({ source: O, destination: _ }) => ut(O.index, _.index) }, /* @__PURE__ */ i.createElement(Kl, { droppableId: "filter_order" }, (O) => /* @__PURE__ */ i.createElement("ul", { ...O.droppableProps, className: "series-list", ref: O.innerRef }, /* @__PURE__ */ i.createElement(It.List, { series: e.series, getItemStyle: se, sortableItemStyles: we, chartsWithOptions: re }), O.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ i.createElement(He, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: W, initial: "Select", options: At() }), /* @__PURE__ */ i.createElement(He, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: W, initial: "Select", options: At() })), Oe() && e.series && e.series.length === 1 && /* @__PURE__ */ i.createElement(He, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (O) => Et(O.target.value), options: ["asc", "desc"] }))), e.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Measures")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "text",
      value: e.boxplot.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "text",
      value: e.boxplot.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "text",
      value: e.boxplot.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "text",
      value: e.boxplot.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "text",
      value: e.boxplot.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: W }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: W }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: W }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: W }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: W }))), ae() && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ i.createElement(Qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    He,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: W,
      options: At(!1),
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label", updateField: W }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(Ae, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: W }), e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement(me, { value: e.yAxis.tickRotation || 0, type: "number", min: "0", section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: W }), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(Ae, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: W }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ i.createElement(me, { value: e.yAxis.tickRotation, type: "number", min: "0", section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: W }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: "0",
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: W }), ke() && /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: W }), e.visualizationSubType === "regular" && /* @__PURE__ */ i.createElement(Ae, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: W })), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(Ae, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: W }), /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ i.createElement(me, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: W, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ i.createElement(i.Fragment, null, Te() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: W }), U() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: W }), Se() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: W }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Tt.maxMsg), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: W }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Tt.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: W })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "max value", placeholder: "Auto", updateField: W }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Tt.maxMsg), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: W }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Tt.minMsg)), L() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, (wl = (Xt = e.yAxis) == null ? void 0 : Xt.anchors) == null ? void 0 : wl.map((O, _) => /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${_}` }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", _ + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z.splice(_, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Z
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[_].value ? e.yAxis.anchors[_].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z[_].value = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Z
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[_].color ? e.yAxis.anchors[_].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z[_].color = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Z
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[_].lineStyle || "",
      onChange: (H) => {
        const Z = [...e.yAxis.anchors];
        Z[_].lineStyle = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Z
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    y.map((H) => /* @__PURE__ */ i.createElement("option", { key: H.key }, H.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (O) => {
        O.preventDefault();
        const _ = [...e.yAxis.anchors];
        _.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: _
          }
        });
      }
    },
    "Add Anchor"
  )), L() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, (Nl = (Cl = e.xAxis) == null ? void 0 : Cl.anchors) == null ? void 0 : Nl.map((O, _) => /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart", key: `xaxis-anchors-${_}` }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", _ + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z.splice(_, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Z
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[_].value ? e.xAxis.anchors[_].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z[_].value = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Z
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[_].color ? e.xAxis.anchors[_].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z[_].color = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Z
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[_].lineStyle || "",
      onChange: (H) => {
        const Z = [...e.xAxis.anchors];
        Z[_].lineStyle = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Z
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    y.map((H) => /* @__PURE__ */ i.createElement("option", { key: H.key }, H.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (O) => {
        O.preventDefault();
        const _ = [...e.xAxis.anchors];
        _.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: _
          }
        });
      }
    },
    "Add Anchor"
  )))), We && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Right Value Axis")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: W }), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(Ae, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: W, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: W }))), /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ i.createElement(Qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(He, { value: e.xAxis.type, section: "xAxis", fieldName: "type", label: "Data Type", updateField: W, options: e.visualizationType !== "Scatter Plot" ? ["categorical", "date"] : ["categorical", "continuous", "date"] }), /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.sortDates, section: "xAxis", fieldName: "sortDates", label: "Force Date Scale (Sort Dates)", updateField: W }), " ", /* @__PURE__ */ i.createElement(
    He,
    {
      value: e.xAxis.dataKey || pe() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: W,
      options: At(!1),
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    He,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: W,
      options: At(!1),
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: W }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ i.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.dateParseFormat, section: "xAxis", fieldName: "dateParseFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Parse Format", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.dateDisplayFormat, section: "xAxis", fieldName: "dateDisplayFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Display Format", updateField: W })), /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: W
    }
  ), ["Line", "Bar", "Area Chart", "Combo"].includes(e.visualizationType) && e.orientation === "vertical" && /* @__PURE__ */ i.createElement(Ae, { value: e.brush.active, section: "brush", fieldName: "active", label: "Brush Slider ", updateField: W }), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(Ee, null)), /* @__PURE__ */ i.createElement(
    He,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (O) => {
        O.target.value !== "" && O.target.value !== "Select" && Yt(O.target.value), O.target.value = "";
      },
      options: Jt(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: W, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ i.createElement(me, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: W, value: e.exclusions.dateEnd || "" }))), ce() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: "1", section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: W }), Ce() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.size, type: "number", min: "0", section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: W }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ae, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: W, min: 0 })), Ke() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(Ae, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: W }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && Y() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.tickRotation, type: "number", min: "0", section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: W }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: "0",
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ i.createElement(i.Fragment, null, I() && /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: W }), j() && /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: W })) : /* @__PURE__ */ i.createElement(i.Fragment, null, I() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: W }), j() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: W }), G() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: W })), ((Pl = e.series) == null ? void 0 : Pl.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Ft.map((O, _) => /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `highlighted-bar-${_}` }, /* @__PURE__ */ i.createElement("button", { className: "remove-column", onClick: (H) => rt(H, _) }, "Remove"), /* @__PURE__ */ i.createElement("p", null, "Highlighted Bar ", _ + 1), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ i.createElement("select", { value: e.highlightedBarValues[_].value, onChange: (H) => Ye(H, _) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Value -"), Re && [...new Set(Re)].sort().map((H) => /* @__PURE__ */ i.createElement("option", { key: `special-class-value-option-${_}-${H}` }, H)))), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[_].color ? e.highlightedBarValues[_].color : "", onChange: (H) => Lt(H, _) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ i.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[_].borderWidth ? e.highlightedBarValues[_].borderWidth : "", onChange: (H) => Ot(H, _) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[_].legendLabel ? e.highlightedBarValues[_].legendLabel : "", onChange: (H) => pt(H, _) }))))), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: (O) => Qe(O) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(Ee, null)), /* @__PURE__ */ i.createElement(
    He,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (O) => {
        O.target.value !== "" && O.target.value !== "Select" && Yt(O.target.value), O.target.value = "";
      },
      options: Jt(e.xAxis.dataKey, !0)
    }
  ))), L() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, (Ol = (Ll = e.xAxis) == null ? void 0 : Ll.anchors) == null ? void 0 : Ol.map((O, _) => /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${_}` }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", _ + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z.splice(_, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Z
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[_].value ? e.xAxis.anchors[_].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z[_].value = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Z
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[_].color ? e.xAxis.anchors[_].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z[_].color = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Z
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[_].lineStyle || "",
      onChange: (H) => {
        const Z = [...e.xAxis.anchors];
        Z[_].lineStyle = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Z
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    y.map((H) => /* @__PURE__ */ i.createElement("option", { key: H.key }, H.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (O) => {
        O.preventDefault();
        const _ = [...e.xAxis.anchors];
        _.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: _
          }
        });
      }
    },
    "Add Anchor"
  )), L() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, (Ml = (_l = e.yAxis) == null ? void 0 : _l.anchors) == null ? void 0 : Ml.map((O, _) => /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${_}` }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", _ + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z.splice(_, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Z
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[_].value ? e.yAxis.anchors[_].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z[_].value = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Z
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[_].color ? e.yAxis.anchors[_].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z[_].color = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Z
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[_].lineStyle || "",
      onChange: (H) => {
        const Z = [...e.yAxis.anchors];
        Z[_].lineStyle = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Z
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    y.map((H) => /* @__PURE__ */ i.createElement("option", { key: H.key }, H.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (O) => {
        O.preventDefault();
        const _ = [...e.yAxis.anchors];
        _.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: _
          }
        });
      }
    },
    "Add Anchor"
  )))), ue() && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Regions")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(Yg, { config: e, updateConfig: t }))), " ", e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Columns")), /* @__PURE__ */ i.createElement(ct, null, e.type !== "navigation" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), Ne.map((O) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: O }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (_) => {
        _.preventDefault(), wt(O);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[O] ? e.columns[O].name : Pe[0],
      onChange: (_) => {
        Ie(O, "name", _.target.value);
      }
    },
    Pe
  )), /* @__PURE__ */ i.createElement(me, { value: e.columns[O].label, section: "columns", subsection: O, fieldName: "label", label: "Label", updateField: W }), /* @__PURE__ */ i.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ i.createElement("li", { className: "three-col" }, /* @__PURE__ */ i.createElement(me, { value: e.columns[O].prefix, section: "columns", subsection: O, fieldName: "prefix", label: "Prefix", updateField: W }), /* @__PURE__ */ i.createElement(me, { value: e.columns[O].suffix, section: "columns", subsection: O, fieldName: "suffix", label: "Suffix", updateField: W }), /* @__PURE__ */ i.createElement(me, { type: "number", value: e.columns[O].roundToPlace, section: "columns", subsection: O, fieldName: "roundToPlace", label: "Round", updateField: W })), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[O].commas,
      onChange: (_) => {
        Ie(O, "commas", _.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ i.createElement("li", null, e.table.showVertical && /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[O].dataTable,
      onChange: (_) => {
        Ie(O, "dataTable", _.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Data Table"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[O].tooltips || !1,
      onChange: (_) => {
        yt(O, _.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[O].forestPlot || !1,
      onChange: (_) => {
        Ie(O, "forestPlot", _.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[O].tooltips || !1,
      onChange: (_) => {
        yt(O, _.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[O].forestPlotAlignRight || !1,
      onChange: (_) => {
        Ie(O, "forestPlotAlignRight", _.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[O].forestPlotAlignRight && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "text" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.columns[O].forestPlotStartingPoint || 0,
      onChange: (_) => {
        Ie(O, "forestPlotStartingPoint", _.target.value);
      }
    }
  ))))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (O) => {
        O.preventDefault(), it(Ne.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((O, _) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: O }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (H) => {
        H.preventDefault();
        const Z = [...e.legend.additionalCategories];
        Z.splice(_, 1), W("legend", null, "additionalCategories", Z);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Category"), /* @__PURE__ */ i.createElement(
    me,
    {
      value: O,
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (H, Z, je, kt) => {
        const Bt = [...e.legend.additionalCategories];
        Bt[_] = kt, W(H, Z, je, Bt);
      }
    }
  )))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (O) => {
        O.preventDefault();
        const _ = [...e.legend.additionalCategories || []];
        _.push(""), W("legend", null, "additionalCategories", _);
      }
    },
    "Add Category"
  )))), q() && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Legend")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(Ae, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: W }), /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(Ae, { value: !!e.legend.showLegendValuesTooltip, section: "legend", fieldName: "showLegendValuesTooltip", label: "Show Legend Values in Tooltip", updateField: W }), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(Ae, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: W }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ i.createElement(He, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: W, options: Pn(n) }), /* @__PURE__ */ i.createElement(He, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: W, options: ["highlight", "isolate"] }), /* @__PURE__ */ i.createElement(me, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: W }), /* @__PURE__ */ i.createElement(He, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: W, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ae, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: W })), /* @__PURE__ */ i.createElement(me, { type: "textarea", value: e.legend.description, updateField: W, section: "legend", fieldName: "description", label: "Legend Description" }))), ge() && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Filters")), /* @__PURE__ */ i.createElement(ct, null, e.filters && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    He,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: W,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ i.createElement("br", null)), e.filters && /* @__PURE__ */ i.createElement("ul", { className: "filters-list" }, e.filters.map((O, _) => O.type === "url" ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: _ }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        et(_);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: O.columnName,
      onChange: (H) => {
        ft("columnName", _, H.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Option -"),
    Na().map((H, Z) => /* @__PURE__ */ i.createElement("option", { value: H, key: Z }, H))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: O.showDropdown === void 0 ? !0 : O.showDropdown,
      onChange: (H) => {
        ft("showDropdown", _, H.target.checked);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: O.filterStyle,
      onChange: (H) => {
        ft("filterStyle", _, H.target.value);
      }
    },
    te.map((H) => /* @__PURE__ */ i.createElement("option", { value: H }, H))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: O.label,
      onChange: (H) => {
        ft("label", _, H.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ i.createElement("select", { value: O.order ? O.order : "asc", onChange: (H) => ft("order", _, H.target.value) }, oe.map((H, Z) => /* @__PURE__ */ i.createElement("option", { value: H.value, key: `filter-${Z}` }, H.label))), O.order === "cust" && /* @__PURE__ */ i.createElement(Hl, { onDragEnd: ({ source: H, destination: Z }) => xe(H.index, Z.index, _, e.filters[_]) }, /* @__PURE__ */ i.createElement(Kl, { droppableId: "filter_order" }, (H) => {
    var Z;
    return /* @__PURE__ */ i.createElement("ul", { ...H.droppableProps, className: "sort-list", ref: H.innerRef, style: { marginTop: "1em" } }, (Z = e.filters[_]) == null ? void 0 : Z.values.map((je, kt) => /* @__PURE__ */ i.createElement(hs, { key: je, draggableId: `draggableFilter-${je}`, index: kt }, (Bt, Zn) => /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("div", { className: Zn.isDragging ? "currently-dragging" : "", style: se(Zn.isDragging, Bt.draggableProps.style), ref: Bt.innerRef, ...Bt.draggableProps, ...Bt.dragHandleProps }, je)))), H.placeholder);
  })))))), !e.filters && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: at, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Visual")), /* @__PURE__ */ i.createElement(ct, null, e.isLollipopChart && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", { className: "header" }, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ i.createElement(
    "div",
    {
      onChange: (O) => {
        nt(O.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: e.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: e.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ i.createElement(He, { value: e.lollipopColorStyle ? e.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: W, options: ["regular", "two-tone"] }), /* @__PURE__ */ i.createElement(He, { value: e.lollipopSize ? e.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: W, options: ["small", "medium", "large"] })), e.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ i.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ i.createElement(He, { value: e.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: W, options: ["true", "false"] }), /* @__PURE__ */ i.createElement(Ae, { value: e.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: W })), /* @__PURE__ */ i.createElement(He, { value: e.fontSize, fieldName: "fontSize", label: "Font Size", updateField: W, options: ["small", "medium", "large"] }), S() && /* @__PURE__ */ i.createElement(He, { value: e.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: W, options: ["true", "false"] }), R() && /* @__PURE__ */ i.createElement(Ae, { value: e.animate, fieldName: "animate", label: "Animate Visualization", updateField: W }), (((Dl = e.series) == null ? void 0 : Dl.some((O) => O.type === "Line" || O.type === "dashed-lg" || O.type === "dashed-sm" || O.type === "dashed-md")) && e.visualizationType === "Combo" || e.visualizationType === "Line") && /* @__PURE__ */ i.createElement(He, { value: e.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: W, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ i.createElement("label", { className: "header" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, D.map((O) => /* @__PURE__ */ i.createElement(
    "button",
    {
      title: O,
      key: O,
      onClick: (_) => {
        _.preventDefault(), t({ ...e, theme: O });
      },
      className: e.theme === O ? "selected " + O : O
    }
  )))), (z() || z()) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Chart Color Palette")), N() && /* @__PURE__ */ i.createElement(Il, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: W, value: e.isPaletteReversed }), $() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, w.map((O) => {
    const _ = {
      backgroundColor: r[O][2]
    }, H = {
      backgroundColor: r[O][3]
    }, Z = {
      backgroundColor: r[O][5]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: O,
        key: O,
        onClick: (je) => {
          je.preventDefault(), t({ ...e, palette: O });
        },
        className: e.palette === O ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: _ }),
      /* @__PURE__ */ i.createElement("span", { style: H }),
      /* @__PURE__ */ i.createElement("span", { style: Z })
    );
  }))), z() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, C.map((O) => {
    const _ = {
      backgroundColor: r[O][2]
    }, H = {
      backgroundColor: r[O][4]
    }, Z = {
      backgroundColor: r[O][6]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: O,
        key: O,
        onClick: (je) => {
          je.preventDefault(), t({ ...e, palette: O });
        },
        className: e.palette === O ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: _ }),
      /* @__PURE__ */ i.createElement("span", { style: H }),
      /* @__PURE__ */ i.createElement("span", { style: Z })
    );
  })))), (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Il, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: W, value: e.twoColor.isPaletteReversed }), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, x.map((O) => {
    const _ = {
      backgroundColor: l[O][0]
    }, H = {
      backgroundColor: l[O][1]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: O,
        key: O,
        onClick: (Z) => {
          Z.preventDefault(), t({ ...e, twoColor: { ...e.twoColor, palette: O } });
        },
        className: e.twoColor.palette === O ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: _ }),
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: H })
    );
  }))), M() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: W,
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), ee() && e.orientation === "horizontal" && !e.isLollipopChart && e.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ i.createElement(me, { type: "number", value: e.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: W, min: "15" }), (e.visualizationType === "Bar" && e.orientation !== "horizontal" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(me, { value: e.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: W }), K() && /* @__PURE__ */ i.createElement(me, { type: "number", value: e.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: W, min: "0" }), (e.visualizationType === "Bar" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Ae, { value: e.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: W }), e.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(Ae, { value: ($l = e.visual) == null ? void 0 : $l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: (zl = e.visual) == null ? void 0 : zl.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: (Rl = e.visual) == null ? void 0 : Rl.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: (Fl = e.visual) == null ? void 0 : Fl.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: (Bl = e.visual) == null ? void 0 : Bl.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: W })), (e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Ae, { value: e.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: W }), (e.visualizationType === "Line" || e.visualizationType === "Combo") && e.showLineSeriesLabels && /* @__PURE__ */ i.createElement(Ae, { value: e.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: W }), k() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ae, { value: e.visual.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.visual.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: W })), he() && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.tooltips.opacity ? e.tooltips.opacity : 100,
      onChange: (O) => t({
        ...e,
        tooltips: {
          ...e.tooltips,
          opacity: O.target.value
        }
      })
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.chartMessage.noData ? e.chartMessage.noData : "",
      onChange: (O) => t({
        ...e,
        chartMessage: {
          ...e.chartMessage,
          noData: O.target.value
        }
      })
    }
  )))), e.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Data Table")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.table.label,
      updateField: W,
      section: "table",
      fieldName: "label",
      id: "tableLabel",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.table.show,
      section: "table",
      fieldName: "show",
      label: "Show Data Table",
      updateField: W,
      className: "column-heading",
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
    }
  ), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.table.showVertical,
      section: "table",
      fieldName: "showVertical",
      label: "Show Vertical Data",
      updateField: W,
      className: "column-heading",
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), /* @__PURE__ */ i.createElement(me, { value: e.table.indexLabel, section: "table", fieldName: "indexLabel", label: "Index Column Header", updateField: W }), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.table.caption,
      updateField: W,
      section: "table",
      type: "textarea",
      fieldName: "caption",
      label: "Data Table Caption",
      placeholder: " Data table",
      tooltip: /* @__PURE__ */ i.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Q.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Q.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ i.createElement(Ae, { value: e.table.limitHeight, section: "table", fieldName: "limitHeight", label: "Limit Table Height", updateField: W }), e.table.limitHeight && /* @__PURE__ */ i.createElement(me, { value: e.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: "0", max: "500", placeholder: "Height(px)", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.table.expanded, section: "table", fieldName: "expanded", label: "Expanded by Default", updateField: W }), s && /* @__PURE__ */ i.createElement(Ae, { value: e.table.showDataTableLink, section: "table", fieldName: "showDataTableLink", label: "Show Data Table Name & Link", updateField: W }), ie && /* @__PURE__ */ i.createElement(Ae, { value: e.table.showDownloadUrl, section: "table", fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.table.download, section: "table", fieldName: "download", label: "Show Download CSV Link", updateField: W }), /* @__PURE__ */ i.createElement(Ae, { value: e.table.showDownloadImgButton, section: "table", fieldName: "showDownloadImgButton", label: "Display Image Button", updateField: W })))), e.type !== "Spark Line" && /* @__PURE__ */ i.createElement(mu, { loadConfig: t, state: e, convertStateToConfig: Me }))));
};
const fs = (e) => {
  const n = /(?:\.([^.]+))?$/.exec(e);
  return n ? n[1] : "";
}, rr = (e = "#000000", t = !1) => {
  let n = Qt(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
}, Qg = (e) => {
  try {
    if (!e)
      throw new Error("No row supplied to hashObj");
    let t = JSON.stringify(e), n = 0;
    if (t.length === 0)
      return n;
    for (let a = 0; a < t.length; a++) {
      let r = t.charCodeAt(a);
      n = (n << 5) - n + r, n = n & n;
    }
    return n;
  } catch (t) {
    console.error("COVE: ", t);
  }
};
function gx({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: r = !1, setConfig: l, setEditing: c, hostname: o, link: s, setSharedFilter: u, setSharedFilterValue: d, dashboardConfig: m }) {
  var vt, Tt;
  const h = new Mu(), [y, p] = F.useState(!0), [g, v] = F.useState(null), [f, b] = F.useState({}), [x, w] = F.useState(f.data || []), [C, T] = F.useState(void 0), [D, k] = F.useState(void 0), [z, $] = F.useState([]), [N, A] = F.useState("lg"), [P, L] = F.useState([]), [S, M] = F.useState(), [R, q] = F.useState(), [j, I] = F.useState(!1), [G, Y] = F.useState([]), [ce] = F.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  let ue = F.useRef(/* @__PURE__ */ new Map()), ge = F.useRef();
  a && console.log("Chart config, isEditor", f, n);
  let { legend: ke, title: Te, description: Se, visualizationType: U } = f;
  n && (!Te || Te === "") && (Te = "Chart Title"), f.table && (!((vt = f.table) != null && vt.label) || ((Tt = f.table) == null ? void 0 : Tt.label) === "") && (f.table.label = "Data Table");
  const { barBorderClass: K, lineDatapointClass: ee, contentClasses: B, sparkLineStyles: de } = Nu(f), le = f.showSidebar ? "#legend" : f != null && f.title ? `#dataTableSection__${f.title.replace(/\s/g, "")}` : "#dataTableSection", fe = (E, J) => E.toString().localeCompare(J.toString(), "en", { numeric: !0 }), ae = (E, J) => J.toString().localeCompare(E.toString(), "en", { numeric: !0 }), he = (E, J = !1) => {
    J && console.log("handleChartAriaLabels Testing On:", E);
    try {
      if (!E.visualizationType)
        throw Error("handleChartAriaLabels: no visualization type found in state");
      let ne = "";
      return E.visualizationType && (ne += `${E.visualizationType} chart`), E.title && E.visualizationType && (ne += ` with the title: ${E.title}`), ne;
    } catch (ne) {
      console.error("COVE: ", ne.message);
    }
  }, Oe = async () => {
    if (f.dataUrl) {
      const E = new URL(f.runtimeDataUrl || f.dataUrl, window.location.origin);
      let J = Object.fromEntries(new URLSearchParams(E.search)), ne = !1;
      if (f.filters.forEach((ye) => {
        ye.type === "url" && J[ye.queryParameter] !== decodeURIComponent(ye.active) && (J[ye.queryParameter] = ye.active, ne = !0);
      }), (!f.formattedData || f.formattedData.urlFiltered) && !ne)
        return;
      let ie = `${E.origin}${E.pathname}${Object.keys(J).map((ye, re) => {
        let Pe = re === 0 ? "?" : "&";
        return Pe += ye + "=", Pe += J[ye], Pe;
      }).join("")}`, pe = [];
      try {
        const ye = fs(E.pathname);
        ye === "csv" ? pe = await fetch(ie).then((re) => re.text()).then((re) => Wl.parse(re, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : ye === "json" ? pe = await fetch(ie).then((re) => re.json()) : pe = [];
      } catch {
        console.error(`Cannot parse URL: ${ie}`), pe = [];
      }
      f.dataDescription && (pe = h.autoStandardize(pe), pe = h.developerStandardize(pe, f.dataDescription)), Object.assign(pe, { urlFiltered: !0 }), oe({ ...f, runtimeDataUrl: ie, data: pe, formattedData: pe }), pe && (w(pe), T(pe), k(te(f.filters, pe)));
    }
  }, Ke = (E) => {
    switch (E) {
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
  }, Ce = [
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
  ], xe = async () => {
    let E = t || await (await fetch(e)).json(), J = E.data || [];
    const ne = E.filters ? E.filters.filter((ye) => ye.type === "url").length > 0 : !1;
    if (E.dataUrl && !ne)
      try {
        const ye = fs(E.dataUrl);
        ye === "csv" && (J = await fetch(E.dataUrl + `?v=${Ql()}`).then((re) => re.text()).then((re) => (re = re.replace(/(".*?")|,/g, (...Ne) => Ne[1] || "|"), re = re.replace(/["]+/g, ""), Wl.parse(re, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), ye === "json" && (J = await fetch(E.dataUrl + `?v=${Ql()}`).then((re) => re.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${E.dataUrl}`), J = [];
      }
    E.dataDescription && (J = h.autoStandardize(J), J = h.developerStandardize(J, E.dataDescription)), J && (w(J), T(J)), E !== void 0 && E.table !== void 0 && (!E.table || !E.table.showVertical) && (E.table = E.table || {}, E.table.showVertical = !1);
    let ie = { ...ar, ...E };
    ie.visualizationType === "Box Plot" && (ie.legend.hide = !0), ie.table.show === void 0 && (ie.table.show = !r), ie.series.map((ye) => {
      ye.tooltip || (ye.tooltip = !0);
    });
    const pe = { ...await _u(ie) };
    oe(pe, J);
  }, oe = (E, J) => {
    var ye;
    let ne = J || x;
    Object.keys(ar).forEach((re) => {
      E[re] && typeof E[re] == "object" && !Array.isArray(E[re]) && (E[re] = { ...ar[re], ...E[re] });
    });
    let ie = [];
    if (E.exclusions && E.exclusions.active)
      if (E.xAxis.type === "categorical" && ((ye = E.exclusions.keys) == null ? void 0 : ye.length) > 0)
        ie = ne.filter((re) => !E.exclusions.keys.includes(re[E.xAxis.dataKey]));
      else if (E.xAxis.type === "date" && (E.exclusions.dateStart || E.exclusions.dateEnd) && E.xAxis.dateParseFormat) {
        const re = (Ie) => new Date(Ie).getTime();
        let Pe = re(E.exclusions.dateStart), Ne = re(E.exclusions.dateEnd) + 86399999, it = typeof Pe !== void 0 && isNaN(Pe) === !1, wt = typeof Ne !== void 0 && isNaN(Ne) === !1;
        it && wt ? ie = ne.filter((Ie) => re(Ie[E.xAxis.dataKey]) >= Pe && re(Ie[E.xAxis.dataKey]) <= Ne) : it ? ie = ne.filter((Ie) => re(Ie[E.xAxis.dataKey]) >= Pe) : wt && (ie = ne.filter((Ie) => re(Ie[E.xAxis.dataKey]) <= Ne));
      } else
        ie = J || x;
    else
      ie = J || x;
    T(ie);
    let pe = [];
    if (E.filters && (E.filters.forEach((re, Pe) => {
      let Ne = [];
      Ne = re.orderedValues || We(re.columnName, ie).sort(re.order === "desc" ? ae : fe), E.filters[Pe].values = Ne, E.filters[Pe].active = E.filters[Pe].active || Ne[0], E.filters[Pe].filterStyle = E.filters[Pe].filterStyle ? E.filters[Pe].filterStyle : "dropdown";
    }), pe = te(E.filters, ie), k(pe)), E.runtime = {}, E.runtime.seriesLabels = {}, E.runtime.seriesLabelsAll = [], E.runtime.originalXAxis = E.xAxis, E.visualizationType === "Pie" ? (E.runtime.seriesKeys = (J || ne).map((re) => re[E.xAxis.dataKey]), E.runtime.seriesLabelsAll = E.runtime.seriesKeys) : E.runtime.seriesKeys = E.series ? E.series.map((re) => (E.runtime.seriesLabels[re.dataKey] = re.name || re.label || re.dataKey, E.runtime.seriesLabelsAll.push(re.name || re.dataKey), re.dataKey)) : [], E.visualizationType === "Box Plot" && E.series) {
      let re = ie ? ie.map((Re) => Re[E.xAxis.dataKey]) : ne.map((Re) => Re[E.xAxis.dataKey]), Pe = ie ? ie.map((Re) => {
        var Ye;
        return Number(Re[(Ye = E == null ? void 0 : E.series[0]) == null ? void 0 : Ye.dataKey]);
      }) : ne.map((Re) => {
        var Ye;
        return Number(Re[(Ye = E == null ? void 0 : E.series[0]) == null ? void 0 : Ye.dataKey]);
      });
      const it = function(Re) {
        return Re.filter(function(Ye, Qe, rt) {
          return rt.indexOf(Ye) === Qe;
        });
      }(re);
      let wt = [];
      const Ie = [], Ft = (Re) => {
        Re.sort((St, dn) => St - dn);
        const Ye = Math.floor(Re.length / 2), Qe = Re.length % 2 === 0, rt = Qe ? Re.slice(0, Ye) : Re.slice(0, Ye + 1), Lt = Qe ? Re.slice(Ye) : Re.slice(Ye + 1), pt = Math.floor(rt.length / 2), Ot = Qe ? (rt[pt - 1] + rt[pt]) / 2 : rt[pt], yt = Math.floor(Lt.length / 2), tt = Qe ? (Lt[yt - 1] + Lt[yt]) / 2 : Lt[yt];
        return { q1: Ot, q3: tt };
      };
      if (!it)
        return;
      it.forEach((Re) => {
        try {
          if (!Re)
            throw new Error("No groups resolved in box plots");
          let Ye = ie ? ie.filter((mt) => mt[E.xAxis.dataKey] === Re) : ne.filter((mt) => mt[E.xAxis.dataKey] === Re), Qe = Ye.map((mt) => {
            var Xt;
            return Number(mt[(Xt = E == null ? void 0 : E.series[0]) == null ? void 0 : Xt.dataKey]);
          }), rt = Qe.sort((mt, Xt) => mt - Xt);
          const Lt = Ft(rt);
          if (!Ye)
            throw new Error("boxplots dont have data yet");
          if (!Ie)
            throw new Error("boxplots dont have plots yet");
          E.boxplot.firstQuartilePercentage === "" && (E.boxplot.firstQuartilePercentage = 0), E.boxplot.thirdQuartilePercentage === "" && (E.boxplot.thirdQuartilePercentage = 0);
          const pt = Lt.q1, Ot = Lt.q3, yt = Ot - pt, tt = pt - (Ot - pt) * 1.5, St = Ot + (Ot - pt) * 1.5, dn = rt.filter((mt) => mt < tt || mt > St);
          let Ln = Qe;
          Ln = Ln.filter((mt) => !dn.includes(mt));
          const Pa = sa(Qe) || 0, Qn = oa([Pa, pt - 1.5 * yt]);
          Ie.push({
            columnCategory: Re,
            columnMax: sa([oa(Qe), pt + 1.5 * yt]),
            columnThirdQuartile: Number(Ot).toFixed(E.dataFormat.roundTo),
            columnMedian: Number(Df(Qe)).toFixed(E.dataFormat.roundTo),
            columnFirstQuartile: pt.toFixed(E.dataFormat.roundTo),
            columnMin: Qn,
            columnTotal: Qe.reduce((mt, Xt) => mt + Xt, 0),
            columnSd: Number(Of(Qe)).toFixed(E.dataFormat.roundTo),
            columnMean: Number(Mf(Qe)).toFixed(E.dataFormat.roundTo),
            columnIqr: Number(yt).toFixed(E.dataFormat.roundTo),
            columnLowerBounds: Qn,
            columnUpperBounds: sa([oa(rt), pt + 1.5 * yt]),
            columnOutliers: dn,
            values: Qe,
            nonOutlierValues: Ln
          });
        } catch (Ye) {
          console.error("COVE: ", Ye.message);
        }
      }), wt = JSON.parse(JSON.stringify(Ie)), wt.map((Re) => (Re.columnIqr = void 0, Re.nonOutlierValues = void 0, Re.columnLowerBounds = void 0, Re.columnUpperBounds = void 0, null)), E.boxplot.allValues = Pe, E.boxplot.categories = it, E.boxplot.plots = Ie, E.boxplot.tableData = wt;
    }
    E.visualizationType === "Combo" && E.series && (E.runtime.barSeriesKeys = [], E.runtime.lineSeriesKeys = [], E.runtime.areaSeriesKeys = [], E.runtime.forecastingSeriesKeys = [], E.series.forEach((re) => {
      re.type === "Area Chart" && E.runtime.areaSeriesKeys.push(re), re.type === "Forecasting" && E.runtime.forecastingSeriesKeys.push(re), re.type === "Bar" && E.runtime.barSeriesKeys.push(re.dataKey), (re.type === "Line" || re.type === "dashed-sm" || re.type === "dashed-md" || re.type === "dashed-lg") && E.runtime.lineSeriesKeys.push(re.dataKey);
    })), E.visualizationType === "Forecasting" && E.series && (E.runtime.forecastingSeriesKeys = [], E.series.forEach((re) => {
      re.type === "Forecasting" && E.runtime.forecastingSeriesKeys.push(re);
    })), E.visualizationType === "Area Chart" && E.series && (E.runtime.areaSeriesKeys = [], E.series.forEach((re) => {
      E.runtime.areaSeriesKeys.push({ ...re, type: "Area Chart" });
    })), E.visualizationType === "Bar" && E.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(E.visualizationType) ? (E.runtime.xAxis = E.yAxis, E.runtime.yAxis = E.xAxis, E.runtime.horizontal = !0, E.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(E.visualizationType) ? (E.runtime.xAxis = E.xAxis, E.runtime.yAxis = E.yAxis, E.runtime.horizontal = !1, E.orientation = "vertical") : (E.runtime.xAxis = E.xAxis, E.runtime.yAxis = E.yAxis, E.runtime.horizontal = !1), E.runtime.uniqueId = Date.now(), E.runtime.editorErrorMessage = E.visualizationType === "Pie" && !E.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", b(E);
  }, te = (E, J) => {
    let ne = [];
    return J.forEach((ie) => {
      let pe = !0;
      E.filter((ye) => ye.type !== "url").forEach((ye) => {
        ie[ye.columnName] != ye.active && (pe = !1);
      }), pe && ne.push(ie);
    }), ne;
  }, We = (E, J = this.state.data) => {
    const ne = [];
    return J.forEach((ie) => {
      const pe = ie[E];
      pe && ne.includes(pe) === !1 && ne.push(pe);
    }), ne;
  }, se = (E, J) => {
    let ne = f.visualizationType === "Bar" && f.visualizationSubType === "horizontal" ? f.xAxis.dataKey : f.yAxis.sortKey, ie = parseFloat(E[ne]), pe = parseFloat(J[ne]);
    return ie < pe ? f.sortData === "ascending" ? 1 : -1 : ie > pe ? f.sortData === "ascending" ? -1 : 1 : 0;
  }, we = new cu((E) => {
    for (let J of E) {
      let { width: ne, height: ie } = J.contentRect, pe = uu(ne), ye = 32, re = 350;
      A(pe), n && (ne = ne - re), J.target.dataset.lollipop === "true" && (ne = ne - 2.5), ne = ne - ye, L([ne, ie]);
    }
  }), Le = F.useCallback((E) => {
    E !== null && we.observe(E), q(E);
  }, []);
  function W(E) {
    return Object.keys(E).length === 0;
  }
  F.useEffect(() => {
    xe();
  }, []), F.useEffect(() => {
    Oe();
  }, [JSON.stringify(f.filters)]), F.useEffect(() => {
    R && !W(f) && !j && (Pu("cove_loaded", { config: f }), I(!0));
  }, [R, f]), F.useEffect(() => {
    const E = (J) => {
      let ne = [];
      ne.push(J.detail), M(ne);
    };
    return Lu("cove_filterData", (J) => E(J)), () => {
      Ou("cove_filterData", E);
    };
  }, [f]), F.useEffect(() => {
    if (S && S[0] && !S[0].hasOwnProperty("active")) {
      let J = { ...f };
      delete J.filters, b(J), k(te(S, C));
    }
    if (S && S.length > 0 && S.length > 0 && S[0].hasOwnProperty("active")) {
      let E = { ...f, filters: S };
      b(E), k(te(S, C));
    }
  }, [S]), t && F.useEffect(() => {
    xe();
  }, [t.data]), F.useEffect(() => {
    if (x && f.xAxis && f.runtime.seriesKeys) {
      const E = f.customColors ? f.customColors : f.visualizationType === "Paired Bar" || f.visualizationType === "Deviation Bar" ? f.twoColor.palette : f.palette, J = { ...an, ...lr };
      let ne = f.customColors || J[E], ie = f.runtime.seriesKeys.length, pe;
      for (; ie > ne.length; )
        ne = ne.concat(ne);
      ne = ne.slice(0, ie), pe = () => Sf({
        domain: f.runtime.seriesLabelsAll,
        range: ne,
        unknown: null
      }), v(pe), p(!1);
    }
    f && x && f.sortData && x.sort(se);
  }, [f, x]);
  const _e = (E) => {
    const J = [];
    if (z.length + 1 === f.runtime.seriesKeys.length && f.visualizationType !== "Forecasting") {
      Ge();
      return;
    }
    z.forEach((ie) => {
      J.push(ie);
    });
    let ne = E.datum;
    if (f.runtime.seriesLabels) {
      for (let ie = 0; ie < f.runtime.seriesKeys.length; ie++)
        if (f.runtime.seriesLabels[f.runtime.seriesKeys[ie]] === E.datum) {
          ne = f.runtime.seriesKeys[ie];
          break;
        }
    }
    J.indexOf(ne) !== -1 ? J.splice(J.indexOf(ne), 1) : J.push(ne), $(J);
  }, Ge = () => {
    try {
      const E = document.getElementById("legend");
      if (!E)
        throw new Error("No legend available to set previous focus on.");
      E.focus();
    } catch (E) {
      console.error("COVE:", E.message);
    }
    $([]);
  }, nt = f.orientation === "horizontal" ? "yAxis" : "xAxis", et = (E, J = !0) => {
    let ne = Ec(f.runtime[nt].dateParseFormat)(E);
    return ne || (J && (f.runtime.editorErrorMessage = `Error parsing date "${E}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, ft = (E) => bc(f.runtime[nt].dateDisplayFormat)(E);
  function at(E, J) {
    const ie = document.createElement("canvas").getContext("2d");
    if (!ie) {
      console.error("2d context not found");
      return;
    }
    return ie.font = J || getComputedStyle(document.body).font, Math.ceil(ie.measureText(E).width);
  }
  const Je = (E) => {
    let J = "", ne = Math.abs(E);
    return ne >= 1e9 ? (J = "B", E = E / 1e9) : ne >= 1e6 ? (J = "M", E = E / 1e6) : ne >= 1e3 && (J = "K", E = E / 1e3), E + J;
  }, Et = (E, J, ne = !1, ie, pe, ye) => {
    if (isNaN(E) || !E)
      return E;
    const re = E < 0;
    (J === void 0 || !J) && (J = "left"), re && (E = Math.abs(E));
    let {
      dataFormat: { commas: Pe, abbreviated: Ne, roundTo: it, prefix: wt, suffix: Ie, rightRoundTo: Ft, bottomRoundTo: Re, rightPrefix: Ye, rightSuffix: Qe, bottomPrefix: rt, bottomSuffix: Lt, bottomAbbreviated: pt }
    } = f;
    String(E).indexOf(",") !== -1 && (E = E.replaceAll(",", ""));
    let Ot = E, yt = {
      useGrouping: !!Pe
      // for old chart data table to work right cant just leave this to undefined
    };
    if (J === "left" || J === void 0) {
      let St;
      ye !== void 0 ? St = ye ? Number(ye) : 0 : St = it ? Number(it) : 0, yt = {
        useGrouping: ye ? !0 : !!f.dataFormat.commas,
        minimumFractionDigits: St,
        maximumFractionDigits: St
      };
    }
    if (J === "right" && (yt = {
      useGrouping: !!f.dataFormat.rightCommas,
      minimumFractionDigits: Ft ? Number(Ft) : 0,
      maximumFractionDigits: Ft ? Number(Ft) : 0
    }), J === "bottom" && (yt = {
      useGrouping: !!f.dataFormat.bottomCommas,
      minimumFractionDigits: Re ? Number(Re) : 0,
      maximumFractionDigits: Re ? Number(Re) : 0
    }), E = Xl(E), isNaN(E))
      return f.runtime.editorErrorMessage = `Unable to parse number from data ${Ot}. Try reviewing your data and selections in the Data Series section.`, Ot;
    if (!f.dataFormat)
      return E;
    if (f.dataCutoff) {
      let St = Xl(f.dataCutoff);
      E < St && (E = St);
    }
    J === "left" && Pe && Ne && ne || J === "bottom" && Pe && Ne && ne ? E = E : E = E.toLocaleString("en-US", yt);
    let tt = "";
    return Ne && J === "left" && ne && (E = Je(parseFloat(E))), pt && J === "bottom" && ne && (E = Je(parseFloat(E))), ie && J === "left" ? tt = ie + tt : wt && J === "left" && (tt += wt), Ye && J === "right" && (tt += Ye), rt && J === "bottom" && (tt += rt), tt += E, pe && J === "left" ? tt += pe : Ie && J === "left" && (tt += Ie), Qe && J === "right" && (tt += Qe), Lt && J === "bottom" && (tt += Lt), re && (tt = "-" + tt), String(tt);
  }, Yt = {
    "Paired Bar": /* @__PURE__ */ i.createElement(Ht, null),
    Forecasting: /* @__PURE__ */ i.createElement(Ht, null),
    Bar: /* @__PURE__ */ i.createElement(Ht, null),
    Line: /* @__PURE__ */ i.createElement(Ht, null),
    Combo: /* @__PURE__ */ i.createElement(Ht, null),
    Pie: /* @__PURE__ */ i.createElement(Lp, null),
    "Box Plot": /* @__PURE__ */ i.createElement(Ht, null),
    "Area Chart": /* @__PURE__ */ i.createElement(Ht, null),
    "Scatter Plot": /* @__PURE__ */ i.createElement(Ht, null),
    "Deviation Bar": /* @__PURE__ */ i.createElement(Ht, null),
    "Forest Plot": /* @__PURE__ */ i.createElement(Ht, null)
  }, Nn = () => {
    if (f.visualizationType === "Forecasting" || f.visualizationType === "Forest Plot")
      return !1;
    if (f.visualizationType === "Pie") {
      if ((f == null ? void 0 : f.yAxis.dataKey) === void 0)
        return !0;
    } else if ((f == null ? void 0 : f.series) === void 0 || !((f == null ? void 0 : f.series.length) > 0))
      return !0;
    return !f.xAxis.dataKey;
  }, Na = (E, J) => {
    if (E === null || E === "" || E === void 0)
      return "";
    if (typeof E == "string" && E.length > 0 && f.legend.type === "equalnumber")
      return E;
    let ne = E, ie;
    if (Object.keys(f.columns).length > 0 && Object.keys(f.columns).forEach(function(pe) {
      var ye = f.columns[pe];
      ye.name === J && (ie = ye);
    }), ie === void 0 && (ie = f.type === "chart" ? f.dataFormat : f.primary, ie.useCommas = ie.commas, ie.roundToPlace = ie.roundTo ? ie.roundTo : ""), ie) {
      let pe = !1, ye = 0;
      Number(E) && (ie.roundToPlace >= 0 && (pe = ie.roundToPlace ? ie.roundToPlace !== "" || ie.roundToPlace !== null : !1, ye = ie.roundToPlace ? Number(ie.roundToPlace) : 0, ie.hasOwnProperty("roundToPlace") && pe && (ne = Number(E).toFixed(ye))), ie.hasOwnProperty("useCommas") && ie.useCommas === !0 && (ne = Number(E).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: pe ? ye : 0,
        maximumFractionDigits: pe ? ye : 5
      }))), ne = (ie.prefix || "") + ne + (ie.suffix || "");
    }
    return ne;
  }, At = (E) => {
    var J, ne, ie;
    try {
      if (!E)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (f.type === "navigation") {
        let ye = an[f.color] || an.bluegreenreverse;
        return rr(ye[3]);
      }
      let pe = Qg(E);
      if (ue.current.has(pe)) {
        let ye = ue.current.get(pe);
        if ((J = runtimeLegend[ye]) != null && J.disabled)
          return !1;
        let re = (ne = runtimeLegend.find((Pe) => Pe.bin === ye)) == null ? void 0 : ne.color;
        return rr(re, (ie = runtimeLegend[ye]) == null ? void 0 : ie.special);
      }
      return rr();
    } catch (pe) {
      console.error("COVE: ", pe);
    }
  }, Pn = (E) => {
    var J;
    return Array.isArray(E) ? f.visualizationType === "Forecasting" ? E : (J = f == null ? void 0 : f.xAxis) != null && J.dataKey ? h.cleanData(E, f.xAxis.dataKey) : E : [];
  }, Jt = (E) => E, Xn = (E) => {
    const J = ke.position === "bottom" || ["sm", "xs", "xxs"].includes(N), ne = E.orientation === "horizontal", ie = Number(E.xAxis.tickRotation) > 0 ? Number(E.xAxis.tickRotation) : 0, pe = E.brush.active, ye = 20, re = E.brush.height;
    let Pe = 0;
    return !J && ne && E.xAxis.label && (Pe = E.runtime.xAxis.size + E.xAxis.labelOffset), !J && ne && !E.xAxis.label && (Pe = 0), !ne && !J && E.xAxis.label && ie && !E.isResponsiveTicks && (Pe = pe ? re + E.xAxis.tickWidthMax + -E.xAxis.size + E.xAxis.labelOffset + ye : E.xAxis.tickWidthMax + ye + -E.xAxis.size + E.xAxis.labelOffset), !ne && !J && !E.xAxis.label && ie && E.isResponsiveTicks, !ne && !J && !E.xAxis.label && ie && !E.dynamicMarginTop && !E.isResponsiveTicks && (Pe = pe ? E.xAxis.tickWidthMax + re + ye + -E.xAxis.size : 0), !ne && !J && E.xAxis.label && !ie && !E.isResponsiveTicks && (Pe = pe ? re + -E.xAxis.size + E.xAxis.labelOffset + ye : -E.xAxis.size + E.xAxis.labelOffset + ye), !ne && !J && E.xAxis.label && E.dynamicMarginTop && E.isResponsiveTicks && (Pe = pe ? re + E.xAxis.labelOffset + -E.xAxis.size + E.xAxis.tickWidthMax : E.dynamicMarginTop + -E.xAxis.size + ye), !ne && !J && !E.xAxis.label && E.dynamicMarginTop && E.isResponsiveTicks && (Pe = pe ? re + E.xAxis.labelOffset + -E.xAxis.size + E.xAxis.tickWidthMax : E.dynamicMarginTop + -E.xAxis.size - ye), !ne && !J && E.xAxis.label && !E.dynamicMarginTop && E.isResponsiveTicks && (Pe = pe ? re + E.xAxis.labelOffset + -E.xAxis.size + 25 : E.xAxis.labelOffset + -E.xAxis.size + ye), !ne && !J && !E.xAxis.label && !E.dynamicMarginTop && E.isResponsiveTicks && (Pe = -E.xAxis.size + ye + E.xAxis.labelOffset), !ne && !J && !E.xAxis.label && !ie && !E.dynamicMarginTop && !E.isResponsiveTicks && (Pe = pe ? re + -E.xAxis.size + E.xAxis.labelOffset : 0), `${Pe}px`;
  };
  let un = /* @__PURE__ */ i.createElement(vu, null);
  if (!y) {
    const E = /* @__PURE__ */ i.createElement("a", { href: `#data-table-${f.dataKey}`, className: "margin-left-href" }, f.dataKey, " (Go to Table)");
    un = /* @__PURE__ */ i.createElement(i.Fragment, null, n && /* @__PURE__ */ i.createElement(Xg, null), !Nn() && !f.newViz && /* @__PURE__ */ i.createElement("div", { className: "cdc-chart-inner-container" }, /* @__PURE__ */ i.createElement(yu, { showTitle: f.showTitle, isDashboard: r, title: Te, superTitle: f.superTitle, classes: ["chart-title", `${f.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ i.createElement("a", { id: "skip-chart-container", className: "cdcdataviz-sr-only-focusable", href: le }, "Skip Over Chart Container"), f.filters && !S && /* @__PURE__ */ i.createElement(xu, { config: f, setConfig: b, setFilteredData: k, filteredData: D, excludedData: C, filterData: te, dimensions: P }), (f == null ? void 0 : f.introText) && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("section", { className: "introText" }, xn(f.introText)), /* @__PURE__ */ i.createElement("div", { style: { marginBottom: Xn(f) }, className: `chart-container  p-relative ${f.legend.position === "bottom" ? "bottom" : ""}${f.legend.hide ? " legend-hidden" : ""}${ee}${K} ${B.join(" ")}` }, f.visualizationType !== "Spark Line" && Yt[f.visualizationType], f.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, (f == null ? void 0 : f.introText) && /* @__PURE__ */ i.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, xn(f.introText)), /* @__PURE__ */ i.createElement("div", { style: { height: "100px", width: "100%", ...de } }, /* @__PURE__ */ i.createElement(nm, null, (J) => /* @__PURE__ */ i.createElement(gg, { width: J.width, height: J.height }))), Se && /* @__PURE__ */ i.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, xn(Se))), !f.legend.hide && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(Pg, null)), r && f.table && f.table.show && f.table.showDataTableLink ? E : s && s, Se && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "column " + f.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, xn(Se)), /* @__PURE__ */ i.createElement(Ri.Section, { classes: ["download-buttons"] }, f.table.showDownloadImgButton && /* @__PURE__ */ i.createElement(Ri.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: f, elementToCapture: ce }), f.table.showDownloadPdfButton && /* @__PURE__ */ i.createElement(Ri.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: f, elementToCapture: ce })), f.xAxis.dataKey && f.table.show && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(
      hu,
      {
        config: f,
        rawData: f.data,
        runtimeData: D || C,
        expandDataTable: f.table.expanded,
        columns: f.columns,
        showDownloadButton: f.general.showDownloadButton,
        runtimeLegend: G,
        displayDataAsText: Na,
        displayGeoName: Jt,
        applyLegendToRow: At,
        tableTitle: f.table.label,
        indexTitle: f.table.indexLabel,
        vizTitle: Te,
        viewport: N,
        parseDate: et,
        formatDate: ft,
        formatNumber: Et,
        tabbingId: le,
        showDownloadImgButton: f.showDownloadImgButton,
        showDownloadPdfButton: f.showDownloadPdfButton,
        innerContainerRef: ge,
        outerContainerRef: Le,
        imageRef: ce,
        colorScale: g,
        isDebug: a,
        isEditor: n
      }
    ), (f == null ? void 0 : f.footnotes) && /* @__PURE__ */ i.createElement("section", { className: "footnotes" }, xn(f.footnotes))));
  }
  const Ee = {
    capitalize: (E) => E.charAt(0).toUpperCase() + E.slice(1),
    getXAxisData: (E) => f.runtime.xAxis.type === "date" ? et(E[f.runtime.originalXAxis.dataKey]).getTime() : E[f.runtime.originalXAxis.dataKey],
    getYAxisData: (E, J) => E[J],
    config: f,
    setConfig: b,
    rawData: x ?? {},
    excludedData: C,
    transformedData: Pn(D || C),
    // do this right before passing to components
    tableData: D || C,
    // do not clean table data
    unfilteredData: x,
    seriesHighlight: z,
    colorScale: g,
    dimensions: P,
    currentViewport: N,
    parseDate: et,
    formatDate: ft,
    formatNumber: Et,
    loading: y,
    updateConfig: oe,
    colorPalettes: an,
    isDashboard: r,
    setParentConfig: l,
    missingRequiredSections: Nn,
    setEditing: c,
    setFilteredData: k,
    handleChartAriaLabels: he,
    highlight: _e,
    highlightReset: Ge,
    legend: ke,
    setSeriesHighlight: $,
    dynamicLegendItems: G,
    setDynamicLegendItems: Y,
    filterData: te,
    imageId: ce,
    handleLineType: Ke,
    lineOptions: Ce,
    isNumber: Xa,
    getTextWidth: at,
    twoColorPalette: lr,
    isEditor: n,
    isDebug: a,
    setSharedFilter: u,
    setSharedFilterValue: d,
    dashboardConfig: m
  }, ut = ["cdc-open-viz-module", "type-chart", `${N}`, `font-${f.fontSize}`, `${f.theme}`];
  return f.visualizationType === "Spark Line" && ut.push("type-sparkline"), n && ut.push("spacing-wrapper"), n && ut.push("isEditor"), /* @__PURE__ */ i.createElement(ze.Provider, { value: Ee }, /* @__PURE__ */ i.createElement("div", { className: `${ut.join(" ")}`, ref: Le, "data-lollipop": f.isLollipopChart, "data-download-id": ce }, un));
}
export {
  gx as C
};
