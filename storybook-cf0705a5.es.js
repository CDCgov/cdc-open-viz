import { R as i, r as R } from "./storybook-e61d95ab.es.js";
import { i as cu, g as uu, P as Wl } from "./storybook-7366772a.es.js";
import { t as du, f as fu, g as On, L as Vl, A as mu, M as Ri, D as hu } from "./storybook-34eb3b54.es.js";
import { p as ms, P as W } from "./storybook-b8c9afe4.es.js";
import { d as pu } from "./storybook-006055ee.es.js";
import { a as Hr } from "./storybook-c5d32002.es.js";
import { H as xn, T as yu } from "./storybook-826feda6.es.js";
import { e as Yt, a as lt, b as ot, c as st, d as ct, A as vn } from "./storybook-7cc24c1b.es.js";
import { _ as Ue } from "./storybook-70f3d2a3.es.js";
import { _ as jt, T as $e, c as an, s as Za, P as hs, t as lr, u as gu, D as Hl, C as Kl, I as Il, F as xu } from "./storybook-281c3b01.es.js";
import { E as Rt, L as vu } from "./storybook-a0c99f4a.es.js";
import { G as be, c as Ze, j as wi, t as bu, k as ps, m as jl, o as Eu, p as Au, q as Tu, s as ql, u as Su } from "./storybook-b0e07e40.es.js";
import { R as ku } from "./storybook-ac19c974.es.js";
import { B as Pt, s as ra, t as ys, a as gs, b as xs, d as Ta, c as ht, C as wu, I as on, S as vs } from "./storybook-fde5cb17.es.js";
import { i as bs, m as Fi, c as Es, j as La, k as Oa, l as _a, n as Ul, o as Cu, p as Yl, b as As, d as Ts } from "./storybook-bedc547d.es.js";
import { I as De } from "./storybook-d6b8e24c.es.js";
import { T as X } from "./storybook-46a89ba7.es.js";
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
    var l = this._x1, c = this._y1, o = n - e, s = a - t, u = l - e, d = c - t, h = u * u + d * d;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (h > gn)
      if (!(Math.abs(d * o - s * u) > gn) || !r)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var m = n - l, y = a - c, p = o * o + s * s, v = m * m + y * y, g = Math.sqrt(p), f = Math.sqrt(h), b = r * Math.tan((or - Math.acos((p + h - v) / (2 * g * f))) / 2), x = b / f, S = b / g;
        Math.abs(x - 1) > gn && (this._ += "L" + (e + x * u) + "," + (t + x * d)), this._ += "A" + r + "," + r + ",0,0," + +(d * m > u * y) + "," + (this._x1 = e + S * o) + "," + (this._y1 = t + S * s);
      }
  },
  arc: function(e, t, n, a, r, l) {
    e = +e, t = +t, n = +n, l = !!l;
    var c = n * Math.cos(a), o = n * Math.sin(a), s = e + c, u = t + o, d = 1 ^ l, h = l ? a - r : r - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + s + "," + u : (Math.abs(this._x1 - s) > gn || Math.abs(this._y1 - u) > gn) && (this._ += "L" + s + "," + u), n && (h < 0 && (h = h % sr + sr), h > Du ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (e - c) + "," + (t - o) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = s) + "," + (this._y1 = u) : h > gn && (this._ += "A" + n + "," + n + ",0," + +(h >= or) + "," + d + "," + (this._x1 = e + n * Math.cos(r)) + "," + (this._y1 = t + n * Math.sin(r))));
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
  var s = n - e, u = a - t, d = c - r, h = o - l, m = h * s - d * u;
  if (!(m * m < xt))
    return m = (d * (t - l) - h * (e - r)) / m, [e + m * s, t + m * u];
}
function Ma(e, t, n, a, r, l, c) {
  var o = e - n, s = t - a, u = (c ? l : -l) / zn(o * o + s * s), d = u * s, h = -u * o, m = e + d, y = t + h, p = n + d, v = a + h, g = (m + p) / 2, f = (y + v) / 2, b = p - m, x = v - y, S = b * b + x * x, w = r - l, A = m * v - p * y, D = (x < 0 ? -1 : 1) * zn($u(0, w * w * S - A * A)), T = (A * x - b * D) / S, z = (-A * b - x * D) / S, $ = (A * x + b * D) / S, C = (-A * b + x * D) / S, k = T - g, _ = z - f, O = $ - g, N = C - f;
  return k * k + _ * _ > O * O + N * N && (T = $, z = C), {
    cx: T,
    cy: z,
    x01: -d,
    y01: -h,
    x11: T * (r / w - 1),
    y11: z * (r / w - 1)
  };
}
function Ku() {
  var e = Ru, t = Fu, n = We(0), a = null, r = Bu, l = Wu, c = Vu, o = null;
  function s() {
    var u, d, h = +e.apply(this, arguments), m = +t.apply(this, arguments), y = r.apply(this, arguments) - Ja, p = l.apply(this, arguments) - Ja, v = Zl(p - y), g = p > y;
    if (o || (o = u = Sa()), m < h && (d = m, m = h, h = d), !(m > xt))
      o.moveTo(0, 0);
    else if (v > la - xt)
      o.moveTo(m * fn(y), m * Wt(y)), o.arc(0, 0, m, y, p, !g), h > xt && (o.moveTo(h * fn(p), h * Wt(p)), o.arc(0, 0, h, p, y, g));
    else {
      var f = y, b = p, x = y, S = p, w = v, A = v, D = c.apply(this, arguments) / 2, T = D > xt && (a ? +a.apply(this, arguments) : zn(h * h + m * m)), z = Bi(Zl(m - h) / 2, +n.apply(this, arguments)), $ = z, C = z, k, _;
      if (T > xt) {
        var O = Jl(T / h * Wt(D)), N = Jl(T / m * Wt(D));
        (w -= O * 2) > xt ? (O *= g ? 1 : -1, x += O, S -= O) : (w = 0, x = S = (y + p) / 2), (A -= N * 2) > xt ? (N *= g ? 1 : -1, f += N, b -= N) : (A = 0, f = b = (y + p) / 2);
      }
      var P = m * fn(f), V = m * Wt(f), q = h * fn(S), j = h * Wt(S);
      if (z > xt) {
        var I = m * fn(b), Z = m * Wt(b), U = h * fn(x), ue = h * Wt(x), de;
        if (v < Vn && (de = Hu(P, V, U, ue, I, Z, q, j))) {
          var he = P - de[0], Ce = V - de[1], Te = I - de[0], ke = Z - de[1], ee = 1 / Wt(zu((he * Te + Ce * ke) / (zn(he * he + Ce * Ce) * zn(Te * Te + ke * ke))) / 2), K = zn(de[0] * de[0] + de[1] * de[1]);
          $ = Bi(z, (h - K) / (ee - 1)), C = Bi(z, (m - K) / (ee + 1));
        }
      }
      A > xt ? C > xt ? (k = Ma(U, ue, P, V, m, C, g), _ = Ma(I, Z, q, j, m, C, g), o.moveTo(k.cx + k.x01, k.cy + k.y01), C < z ? o.arc(k.cx, k.cy, C, gt(k.y01, k.x01), gt(_.y01, _.x01), !g) : (o.arc(k.cx, k.cy, C, gt(k.y01, k.x01), gt(k.y11, k.x11), !g), o.arc(0, 0, m, gt(k.cy + k.y11, k.cx + k.x11), gt(_.cy + _.y11, _.cx + _.x11), !g), o.arc(_.cx, _.cy, C, gt(_.y11, _.x11), gt(_.y01, _.x01), !g))) : (o.moveTo(P, V), o.arc(0, 0, m, f, b, !g)) : o.moveTo(P, V), !(h > xt) || !(w > xt) ? o.lineTo(q, j) : $ > xt ? (k = Ma(q, j, I, Z, h, -$, g), _ = Ma(P, V, U, ue, h, -$, g), o.lineTo(k.cx + k.x01, k.cy + k.y01), $ < z ? o.arc(k.cx, k.cy, $, gt(k.y01, k.x01), gt(_.y01, _.x01), !g) : (o.arc(k.cx, k.cy, $, gt(k.y01, k.x01), gt(k.y11, k.x11), !g), o.arc(0, 0, h, gt(k.cy + k.y11, k.cx + k.x11), gt(_.cy + _.y11, _.cx + _.x11), g), o.arc(_.cx, _.cy, $, gt(_.y11, _.x11), gt(_.y01, _.x01), !g))) : o.arc(0, 0, h, S, x, g);
    }
    if (o.closePath(), u)
      return o = null, u + "" || null;
  }
  return s.centroid = function() {
    var u = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, d = (+r.apply(this, arguments) + +l.apply(this, arguments)) / 2 - Vn / 2;
    return [fn(d) * u, Wt(d) * u];
  }, s.innerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : We(+u), s) : e;
  }, s.outerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : We(+u), s) : t;
  }, s.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : We(+u), s) : n;
  }, s.padRadius = function(u) {
    return arguments.length ? (a = u == null ? null : typeof u == "function" ? u : We(+u), s) : a;
  }, s.startAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : We(+u), s) : r;
  }, s.endAngle = function(u) {
    return arguments.length ? (l = typeof u == "function" ? u : We(+u), s) : l;
  }, s.padAngle = function(u) {
    return arguments.length ? (c = typeof u == "function" ? u : We(+u), s) : c;
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
  var e = ks, t = ws, n = We(!0), a = null, r = Ci, l = null;
  function c(o) {
    var s, u = o.length, d, h = !1, m;
    for (a == null && (l = r(m = Sa())), s = 0; s <= u; ++s)
      !(s < u && n(d = o[s], s, o)) === h && ((h = !h) ? l.lineStart() : l.lineEnd()), h && l.point(+e(d, s, o), +t(d, s, o));
    if (m)
      return l = null, m + "" || null;
  }
  return c.x = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : We(+o), c) : e;
  }, c.y = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : We(+o), c) : t;
  }, c.defined = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : We(!!o), c) : n;
  }, c.curve = function(o) {
    return arguments.length ? (r = o, a != null && (l = r(a)), c) : r;
  }, c.context = function(o) {
    return arguments.length ? (o == null ? a = l = null : l = r(a = o), c) : a;
  }, c;
}
function Iu() {
  var e = ks, t = null, n = We(0), a = ws, r = We(!0), l = null, c = Ci, o = null;
  function s(d) {
    var h, m, y, p = d.length, v, g = !1, f, b = new Array(p), x = new Array(p);
    for (l == null && (o = c(f = Sa())), h = 0; h <= p; ++h) {
      if (!(h < p && r(v = d[h], h, d)) === g)
        if (g = !g)
          m = h, o.areaStart(), o.lineStart();
        else {
          for (o.lineEnd(), o.lineStart(), y = h - 1; y >= m; --y)
            o.point(b[y], x[y]);
          o.lineEnd(), o.areaEnd();
        }
      g && (b[h] = +e(v, h, d), x[h] = +n(v, h, d), o.point(t ? +t(v, h, d) : b[h], a ? +a(v, h, d) : x[h]));
    }
    if (f)
      return o = null, f + "" || null;
  }
  function u() {
    return Cs().defined(r).curve(c).context(l);
  }
  return s.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : We(+d), t = null, s) : e;
  }, s.x0 = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : We(+d), s) : e;
  }, s.x1 = function(d) {
    return arguments.length ? (t = d == null ? null : typeof d == "function" ? d : We(+d), s) : t;
  }, s.y = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : We(+d), a = null, s) : n;
  }, s.y0 = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : We(+d), s) : n;
  }, s.y1 = function(d) {
    return arguments.length ? (a = d == null ? null : typeof d == "function" ? d : We(+d), s) : a;
  }, s.lineX0 = s.lineY0 = function() {
    return u().x(e).y(n);
  }, s.lineY1 = function() {
    return u().x(e).y(a);
  }, s.lineX1 = function() {
    return u().x(t).y(n);
  }, s.defined = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : We(!!d), s) : r;
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
  var e = qu, t = ju, n = null, a = We(0), r = We(la), l = We(0);
  function c(o) {
    var s, u = o.length, d, h, m = 0, y = new Array(u), p = new Array(u), v = +a.apply(this, arguments), g = Math.min(la, Math.max(-la, r.apply(this, arguments) - v)), f, b = Math.min(Math.abs(g) / u, l.apply(this, arguments)), x = b * (g < 0 ? -1 : 1), S;
    for (s = 0; s < u; ++s)
      (S = p[y[s] = s] = +e(o[s], s, o)) > 0 && (m += S);
    for (t != null ? y.sort(function(w, A) {
      return t(p[w], p[A]);
    }) : n != null && y.sort(function(w, A) {
      return n(o[w], o[A]);
    }), s = 0, h = m ? (g - u * x) / m : 0; s < u; ++s, v = f)
      d = y[s], S = p[d], f = v + (S > 0 ? S * h : 0) + x, p[d] = {
        data: o[d],
        index: s,
        value: S,
        startAngle: v,
        endAngle: f,
        padAngle: b
      };
    return p;
  }
  return c.value = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : We(+o), c) : e;
  }, c.sortValues = function(o) {
    return arguments.length ? (t = o, n = null, c) : t;
  }, c.sort = function(o) {
    return arguments.length ? (n = o, t = null, c) : n;
  }, c.startAngle = function(o) {
    return arguments.length ? (a = typeof o == "function" ? o : We(+o), c) : a;
  }, c.endAngle = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : We(+o), c) : r;
  }, c.padAngle = function(o) {
    return arguments.length ? (l = typeof o == "function" ? o : We(+o), c) : l;
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
  var e = We(Yu), t = We(64), n = null;
  function a() {
    var r;
    if (n || (n = r = Sa()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r)
      return n = null, r + "" || null;
  }
  return a.type = function(r) {
    return arguments.length ? (e = typeof r == "function" ? r : We(r), a) : e;
  }, a.size = function(r) {
    return arguments.length ? (t = typeof r == "function" ? r : We(+r), a) : t;
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
  var e = We([]), t = Kn, n = Hn, a = md;
  function r(l) {
    var c = e.apply(this, arguments), o, s = l.length, u = c.length, d = new Array(u), h;
    for (o = 0; o < u; ++o) {
      for (var m = c[o], y = d[o] = new Array(s), p = 0, v; p < s; ++p)
        y[p] = v = [0, +a(l[p], m, p, l)], v.data = l[p];
      y.key = m;
    }
    for (o = 0, h = t(d); o < u; ++o)
      d[h[o]].index = o;
    return n(d, h), d;
  }
  return r.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : We(Gl.call(l)), r) : e;
  }, r.value = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : We(+l), r) : a;
  }, r.order = function(l) {
    return arguments.length ? (t = l == null ? Kn : typeof l == "function" ? l : We(Gl.call(l)), r) : t;
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
        for (var d = e[t[o]], h = d[a][1] || 0, m = d[a - 1][1] || 0, y = (h - m) / 2, p = 0; p < o; ++p) {
          var v = e[t[p]], g = v[a][1] || 0, f = v[a - 1][1] || 0;
          y += g - f;
        }
        s += h, u += y * h;
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
  var t = e.className, n = e.top, a = e.left, r = e.data, l = r === void 0 ? [] : r, c = e.centroid, o = e.innerRadius, s = o === void 0 ? 0 : o, u = e.outerRadius, d = e.cornerRadius, h = e.startAngle, m = e.endAngle, y = e.padAngle, p = e.padRadius, v = e.pieSort, g = e.pieSortValues, f = e.pieValue, b = e.children, x = e.fill, S = x === void 0 ? "" : x, w = Nd(e, Cd), A = Td({
    innerRadius: s,
    outerRadius: u,
    cornerRadius: d,
    padRadius: p
  }), D = kd({
    startAngle: h,
    endAngle: m,
    padAngle: y,
    value: f,
    sort: v,
    sortValues: g
  }), T = D(l);
  return b ? /* @__PURE__ */ i.createElement(i.Fragment, null, b({
    arcs: T,
    path: A,
    pie: D
  })) : /* @__PURE__ */ i.createElement(be, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, T.map(function(z, $) {
    return /* @__PURE__ */ i.createElement("g", {
      key: "pie-arc-" + $
    }, /* @__PURE__ */ i.createElement("path", ur({
      className: Ze("visx-pie-arc", t),
      d: A(z) || "",
      fill: S == null || typeof S == "string" ? S : S(z)
    }, w)), c == null ? void 0 : c(A.centroid(z), z));
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
  var t = e.children, n = e.data, a = n === void 0 ? [] : n, r = e.x, l = e.y, c = e.fill, o = c === void 0 ? "transparent" : c, s = e.className, u = e.curve, d = e.innerRef, h = e.defined, m = h === void 0 ? function() {
    return !0;
  } : h, y = Md(e, _d), p = Sd({
    x: r,
    y: l,
    defined: m,
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
  var t = e.children, n = e.x, a = e.x0, r = e.x1, l = e.y, c = e.y0, o = e.y1, s = e.data, u = s === void 0 ? [] : s, d = e.defined, h = d === void 0 ? function() {
    return !0;
  } : d, m = e.className, y = e.curve, p = e.innerRef, v = $d(e, Dd), g = Qr({
    x: n,
    x0: a,
    x1: r,
    y: l,
    y0: c,
    y1: o,
    defined: h,
    curve: y
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: g
  })) : /* @__PURE__ */ i.createElement("path", mr({
    ref: p,
    className: Ze("visx-area", m),
    d: g(u) || ""
  }, v));
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
  var t = e.x, n = e.x0, a = e.x1, r = e.y, l = e.y1, c = e.y0, o = e.yScale, s = e.data, u = s === void 0 ? [] : s, d = e.defined, h = d === void 0 ? function() {
    return !0;
  } : d, m = e.className, y = e.curve, p = e.innerRef, v = e.children, g = Fd(e, Rd), f = Qr({
    x: t,
    x0: n,
    x1: a,
    defined: h,
    curve: y
  });
  return c == null ? f.y0(o.range()[0]) : Xe(f.y0, c), r && !l && Xe(f.y1, r), l && !r && Xe(f.y1, l), v ? /* @__PURE__ */ i.createElement(i.Fragment, null, v({
    path: f
  })) : /* @__PURE__ */ i.createElement("path", hr({
    ref: p,
    className: Ze("visx-area-closed", m),
    d: f(u) || ""
  }, g));
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
  var t = e.className, n = e.top, a = e.left, r = e.keys, l = e.data, c = e.curve, o = e.defined, s = e.x, u = e.x0, d = e.x1, h = e.y0, m = e.y1, y = e.value, p = e.order, v = e.offset, g = e.color, f = e.children, b = Vd(e, Wd), x = wd({
    keys: r,
    value: y,
    order: p,
    offset: v
  }), S = Qr({
    x: s,
    x0: u,
    x1: d,
    y0: h,
    y1: m,
    curve: c,
    defined: o
  }), w = x(l);
  return f ? /* @__PURE__ */ i.createElement(i.Fragment, null, f({
    stacks: w,
    path: S,
    stack: x
  })) : /* @__PURE__ */ i.createElement(be, {
    top: n,
    left: a
  }, w.map(function(A, D) {
    return /* @__PURE__ */ i.createElement("path", pr({
      className: Ze("visx-stack", t),
      key: "stack-" + D + "-" + (A.key || ""),
      d: S(A) || "",
      fill: g == null ? void 0 : g(A.key, D)
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
  var t = e.className, n = e.top, a = e.left, r = e.keys, l = e.data, c = e.curve, o = e.defined, s = e.x, u = e.x0, d = e.x1, h = e.y0, m = e.y1, y = e.value, p = e.order, v = e.offset, g = e.color, f = e.children, b = Id(e, Kd);
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
    y0: h,
    y1: m,
    value: y,
    order: p,
    offset: v,
    color: g
  }, b), f || function(x) {
    var S = x.stacks, w = x.path;
    return S.map(function(A, D) {
      return /* @__PURE__ */ i.createElement("path", ni({
        className: Ze("visx-area-stack", t),
        key: "area-stack-" + D + "-" + (A.key || ""),
        d: w(A) || "",
        fill: g == null ? void 0 : g(A.key, D)
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
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.x0, c = e.x0Scale, o = e.x1Scale, s = e.yScale, u = e.color, d = e.keys, h = e.height, m = e.children, y = Ud(e, qd), p = Zr(o), v = t.map(function(g, f) {
    return {
      index: f,
      x0: c(l(g)),
      bars: d.map(function(b, x) {
        var S = g[b];
        return {
          index: x,
          key: b,
          value: S,
          width: p,
          x: o(b) || 0,
          y: s(S) || 0,
          color: u(b, x),
          height: h - (s(S) || 0)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(v)) : /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-bar-group", n),
    top: a,
    left: r
  }, v.map(function(g) {
    return /* @__PURE__ */ i.createElement(be, {
      key: "bar-group-" + g.index + "-" + g.x0,
      left: g.x0
    }, g.bars.map(function(f) {
      return /* @__PURE__ */ i.createElement(Pt, yr({
        key: "bar-group-bar-" + g.index + "-" + f.index + "-" + f.value + "-" + f.key,
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
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.x, c = e.y0, o = c === void 0 ? Ks : c, s = e.y1, u = s === void 0 ? Is : s, d = e.xScale, h = e.yScale, m = e.color, y = e.keys, p = e.value, v = e.order, g = e.offset, f = e.children, b = Xd(e, Yd), x = Ur();
  y && x.keys(y), p && Xe(x.value, p), v && x.order(Yr(v)), g && x.offset(Xr(g));
  var S = x(t), w = Zr(d), A = S.map(function(D, T) {
    var z = D.key;
    return {
      index: T,
      key: z,
      bars: D.map(function($, C) {
        var k = (h(o($)) || 0) - (h(u($)) || 0), _ = h(u($)), O = "bandwidth" in d ? d(l($.data)) : Math.max((d(l($.data)) || 0) - w / 2);
        return {
          bar: $,
          key: z,
          index: C,
          height: k,
          width: w,
          x: O || 0,
          y: _ || 0,
          color: m(D.key, C)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ i.createElement(i.Fragment, null, f(A)) : /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-bar-stack", n),
    top: a,
    left: r
  }, A.map(function(D) {
    return D.bars.map(function(T) {
      return /* @__PURE__ */ i.createElement(Pt, gr({
        key: "bar-stack-" + D.index + "-" + T.index,
        x: T.x,
        y: T.y,
        height: T.height,
        width: T.width,
        fill: T.color
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
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.y, c = e.x0, o = c === void 0 ? Ks : c, s = e.x1, u = s === void 0 ? Is : s, d = e.xScale, h = e.yScale, m = e.color, y = e.keys, p = e.value, v = e.order, g = e.offset, f = e.children, b = Jd(e, Zd), x = Ur();
  y && x.keys(y), p && Xe(x.value, p), v && x.order(Yr(v)), g && x.offset(Xr(g));
  var S = x(t), w = Zr(h), A = S.map(function(D, T) {
    var z = D.key;
    return {
      index: T,
      key: z,
      bars: D.map(function($, C) {
        var k = (d(u($)) || 0) - (d(o($)) || 0), _ = d(o($)), O = "bandwidth" in h ? h(l($.data)) : Math.max((h(l($.data)) || 0) - k / 2);
        return {
          bar: $,
          key: z,
          index: C,
          height: w,
          width: k,
          x: _ || 0,
          y: O || 0,
          color: m(D.key, C)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ i.createElement(i.Fragment, null, f(A)) : /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-bar-stack-horizontal", n),
    top: a,
    left: r
  }, A.map(function(D) {
    return D.bars.map(function(T) {
      return /* @__PURE__ */ i.createElement(Pt, xr({
        key: "bar-stack-" + D.index + "-" + T.index,
        x: T.x,
        y: T.y,
        height: T.height,
        width: T.width,
        fill: T.color
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
  function h() {
    var m = t().length, y = r < a, p = y ? r : a, v = y ? a : r;
    l = (v - p) / Math.max(1, m - s + u * 2), o && (l = Math.floor(l)), p += (v - p - l * (m - s)) * d, c = l * (1 - s), o && (p = Math.round(p), c = Math.round(c));
    var g = af(m).map(function(f) {
      return p + l * f;
    });
    return n(y ? g.reverse() : g);
  }
  return e.domain = function(m) {
    return arguments.length ? (t(m), h()) : t();
  }, e.range = function(m) {
    return arguments.length ? ([a, r] = m, a = +a, r = +r, h()) : [a, r];
  }, e.rangeRound = function(m) {
    return [a, r] = m, a = +a, r = +r, o = !0, h();
  }, e.bandwidth = function() {
    return c;
  }, e.step = function() {
    return l;
  }, e.round = function(m) {
    return arguments.length ? (o = !!m, h()) : o;
  }, e.padding = function(m) {
    return arguments.length ? (s = Math.min(1, u = +m), h()) : s;
  }, e.paddingInner = function(m) {
    return arguments.length ? (s = Math.min(1, m), h()) : s;
  }, e.paddingOuter = function(m) {
    return arguments.length ? (u = +m, h()) : u;
  }, e.align = function(m) {
    return arguments.length ? (d = Math.max(0, Math.min(1, m)), h()) : d;
  }, e.copy = function() {
    return Gr(t(), [a, r]).round(o).paddingInner(s).paddingOuter(u).align(d);
  }, wi.apply(h(), arguments);
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
    const h = d < u;
    h && ([u, d] = [d, u]);
    let m = r(u), y = r(d), p, v;
    const g = o == null ? 10 : +o;
    let f = [];
    if (!(a % 1) && y - m < g) {
      if (m = Math.floor(m), y = Math.ceil(y), u > 0) {
        for (; m <= y; ++m)
          for (p = 1; p < a; ++p)
            if (v = m < 0 ? p / l(-m) : p * l(m), !(v < u)) {
              if (v > d)
                break;
              f.push(v);
            }
      } else
        for (; m <= y; ++m)
          for (p = a - 1; p >= 1; --p)
            if (v = m > 0 ? p / l(-m) : p * l(m), !(v < u)) {
              if (v > d)
                break;
              f.push(v);
            }
      f.length * 2 < g && (f = jl(u, d, g));
    } else
      f = jl(m, y, Math.min(y - m, g)).map(l);
    return h ? f.reverse() : f;
  }, t.tickFormat = (o, s) => {
    if (o == null && (o = 10), s == null && (s = a === 10 ? "s" : ","), typeof s != "function" && (!(a % 1) && (s = Eu(s)).precision == null && (s.trim = !0), s = Au(s)), o === 1 / 0)
      return s;
    const u = Math.max(1, a * o / t.ticks().length);
    return (d) => {
      let h = d / l(Math.round(r(d)));
      return h * a < a - 0.5 && (h *= a), h <= u ? s(d) : "";
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
  function o(u, d, h) {
    const m = d < u;
    m && ([u, d] = [d, u]);
    const y = h && typeof h.range == "function" ? h : s(u, d, h), p = y ? y.range(u, +d + 1) : [];
    return m ? p.reverse() : p;
  }
  function s(u, d, h) {
    const m = Math.abs(d - u) / h, y = Tu(([, , g]) => g).right(c, m);
    if (y === c.length)
      return e.every(ql(u / Fi, d / Fi, h));
    if (y === 0)
      return ai.every(Math.max(ql(u, d, h), 1));
    const [p, v] = c[m / c[y - 1][2] < c[y][2] / m ? y - 1 : y];
    return p.every(v);
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
  var d = Su(), h = d.invert, m = d.domain, y = u(".%L"), p = u(":%S"), v = u("%I:%M"), g = u("%I %p"), f = u("%a %d"), b = u("%b %d"), x = u("%B"), S = u("%Y");
  function w(A) {
    return (s(A) < A ? y : o(A) < A ? p : c(A) < A ? v : l(A) < A ? g : a(A) < A ? r(A) < A ? f : b : n(A) < A ? x : S)(A);
  }
  return d.invert = function(A) {
    return new Date(h(A));
  }, d.domain = function(A) {
    return arguments.length ? m(Array.from(A, yf)) : m().map(pf);
  }, d.ticks = function(A) {
    var D = m();
    return e(D[0], D[D.length - 1], A ?? 10);
  }, d.tickFormat = function(A, D) {
    return D == null ? w : u(D);
  }, d.nice = function(A) {
    var D = m();
    return (!A || typeof A.range != "function") && (A = t(D[0], D[D.length - 1], A ?? 10)), A ? m(qs(D, A)) : d;
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
      const s = a - n + 1, u = t - n + 1, d = Math.log(s), h = 0.5 * Math.exp(2 * d / 3), m = 0.5 * Math.sqrt(d * h * (s - h) / s) * (u - s / 2 < 0 ? -1 : 1), y = Math.max(n, Math.floor(t - u * h / s + m)), p = Math.min(a, Math.floor(t + (s - u) * h / s + m));
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
  var n = getComputedStyle(e), a = el(e) && e.ownerSVGElement && e.getBBox(), r = !Wf && n.boxSizing === "border-box", l = Bf.test(n.writingMode || ""), c = !a && go.test(n.overflowY || ""), o = !a && go.test(n.overflowX || ""), s = a ? 0 : Vt(n.paddingTop), u = a ? 0 : Vt(n.paddingRight), d = a ? 0 : Vt(n.paddingBottom), h = a ? 0 : Vt(n.paddingLeft), m = a ? 0 : Vt(n.borderTopWidth), y = a ? 0 : Vt(n.borderRightWidth), p = a ? 0 : Vt(n.borderBottomWidth), v = a ? 0 : Vt(n.borderLeftWidth), g = h + u, f = s + d, b = v + y, x = m + p, S = o ? e.offsetHeight - x - e.clientHeight : 0, w = c ? e.offsetWidth - b - e.clientWidth : 0, A = r ? g + b : 0, D = r ? f + x : 0, T = a ? a.width : Vt(n.width) - A - w, z = a ? a.height : Vt(n.height) - D - S, $ = T + g + w + b, C = z + f + S + x, k = En({
    devicePixelContentBoxSize: Bn(Math.round(T * devicePixelRatio), Math.round(z * devicePixelRatio), l),
    borderBoxSize: Bn($, C, l),
    contentBoxSize: Bn(T, z, l),
    contentRect: new Gs(h, s, T, z)
  });
  return Da.set(e, k), k;
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
        var d = new ac(u.target), h = ic(u.target);
        o.push(d), u.lastReportedSize = nc(u.target, u.observedBox), h < e && (e = h);
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
var nm = sc, Gt = oc(ms), am = oc(pu), _n = lm(R), im = tm, rm = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
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
  } : o, u = e.enableDebounceLeadingCall, d = u === void 0 ? !0 : u, h = om(e, rm), m = (0, _n.useRef)(null), y = (0, _n.useRef)(0), p = (0, _n.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), v = p[0], g = p[1], f = (0, _n.useMemo)(function() {
    var b = Array.isArray(c) ? c : [c];
    return (0, am.default)(function(x) {
      g(function(S) {
        var w = Object.keys(S), A = w.filter(function(T) {
          return S[T] !== x[T];
        }), D = A.every(function(T) {
          return b.includes(T);
        });
        return D ? S : x;
      });
    }, r, {
      leading: d
    });
  }, [r, d, c]);
  return (0, _n.useEffect)(function() {
    var b = new im.ResizeObserver(function(x) {
      x === void 0 && (x = []), x.forEach(function(S) {
        var w = S.contentRect, A = w.left, D = w.top, T = w.width, z = w.height;
        y.current = window.requestAnimationFrame(function() {
          f({
            width: T,
            height: z,
            top: D,
            left: A
          });
        });
      });
    });
    return m.current && b.observe(m.current), function() {
      window.cancelAnimationFrame(y.current), b.disconnect(), f != null && f.cancel && f.cancel();
    };
  }, [f]), /* @__PURE__ */ _n.default.createElement("div", ii({
    style: s,
    ref: m,
    className: t
  }, h), n(ii({}, v, {
    ref: m.current,
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
  var t = e.dateTime, n = e.date, a = e.time, r = e.periods, l = e.days, c = e.shortDays, o = e.months, s = e.shortMonths, u = ea(r), d = ta(r), h = ea(l), m = ta(l), y = ea(c), p = ta(c), v = ea(o), g = ta(o), f = ea(s), b = ta(s), x = {
    a: V,
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
    p: Z,
    q: U,
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
  }, S = {
    a: ue,
    A: de,
    b: he,
    B: Ce,
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
    q: ke,
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
  }, w = {
    a: $,
    A: C,
    b: k,
    B: _,
    c: O,
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
    x: N,
    X: P,
    y: wo,
    Y: ko,
    Z: Nm,
    "%": zm
  };
  x.x = A(n, x), x.X = A(a, x), x.c = A(t, x), S.x = A(n, S), S.X = A(a, S), S.c = A(t, S);
  function A(ee, K) {
    return function(G) {
      var F = [], pe = -1, ne = 0, fe = ee.length, oe, se, Le;
      for (G instanceof Date || (G = /* @__PURE__ */ new Date(+G)); ++pe < fe; )
        ee.charCodeAt(pe) === 37 && (F.push(ee.slice(ne, pe)), (se = So[oe = ee.charAt(++pe)]) != null ? oe = ee.charAt(++pe) : se = oe === "e" ? " " : "0", (Le = K[oe]) && (oe = Le(G, se)), F.push(oe), ne = pe + 1);
      return F.push(ee.slice(ne, pe)), F.join("");
    };
  }
  function D(ee, K) {
    return function(G) {
      var F = Gn(1900, void 0, 1), pe = T(F, ee, G += "", 0), ne, fe;
      if (pe != G.length)
        return null;
      if ("Q" in F)
        return new Date(F.Q);
      if ("s" in F)
        return new Date(F.s * 1e3 + ("L" in F ? F.L : 0));
      if (K && !("Z" in F) && (F.Z = 0), "p" in F && (F.H = F.H % 12 + F.p * 12), F.m === void 0 && (F.m = "q" in F ? F.q : 0), "V" in F) {
        if (F.V < 1 || F.V > 53)
          return null;
        "w" in F || (F.w = 1), "Z" in F ? (ne = qi(Gn(F.y, 0, 1)), fe = ne.getUTCDay(), ne = fe > 4 || fe === 0 ? li.ceil(ne) : li(ne), ne = hc.offset(ne, (F.V - 1) * 7), F.y = ne.getUTCFullYear(), F.m = ne.getUTCMonth(), F.d = ne.getUTCDate() + (F.w + 6) % 7) : (ne = ji(Gn(F.y, 0, 1)), fe = ne.getDay(), ne = fe > 4 || fe === 0 ? ri.ceil(ne) : ri(ne), ne = dc.offset(ne, (F.V - 1) * 7), F.y = ne.getFullYear(), F.m = ne.getMonth(), F.d = ne.getDate() + (F.w + 6) % 7);
      } else
        ("W" in F || "U" in F) && ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0), fe = "Z" in F ? qi(Gn(F.y, 0, 1)).getUTCDay() : ji(Gn(F.y, 0, 1)).getDay(), F.m = 0, F.d = "W" in F ? (F.w + 6) % 7 + F.W * 7 - (fe + 5) % 7 : F.w + F.U * 7 - (fe + 6) % 7);
      return "Z" in F ? (F.H += F.Z / 100 | 0, F.M += F.Z % 100, qi(F)) : ji(F);
    };
  }
  function T(ee, K, G, F) {
    for (var pe = 0, ne = K.length, fe = G.length, oe, se; pe < ne; ) {
      if (F >= fe)
        return -1;
      if (oe = K.charCodeAt(pe++), oe === 37) {
        if (oe = K.charAt(pe++), se = w[oe in So ? K.charAt(pe++) : oe], !se || (F = se(ee, G, F)) < 0)
          return -1;
      } else if (oe != G.charCodeAt(F++))
        return -1;
    }
    return F;
  }
  function z(ee, K, G) {
    var F = u.exec(K.slice(G));
    return F ? (ee.p = d.get(F[0].toLowerCase()), G + F[0].length) : -1;
  }
  function $(ee, K, G) {
    var F = y.exec(K.slice(G));
    return F ? (ee.w = p.get(F[0].toLowerCase()), G + F[0].length) : -1;
  }
  function C(ee, K, G) {
    var F = h.exec(K.slice(G));
    return F ? (ee.w = m.get(F[0].toLowerCase()), G + F[0].length) : -1;
  }
  function k(ee, K, G) {
    var F = f.exec(K.slice(G));
    return F ? (ee.m = b.get(F[0].toLowerCase()), G + F[0].length) : -1;
  }
  function _(ee, K, G) {
    var F = v.exec(K.slice(G));
    return F ? (ee.m = g.get(F[0].toLowerCase()), G + F[0].length) : -1;
  }
  function O(ee, K, G) {
    return T(ee, t, K, G);
  }
  function N(ee, K, G) {
    return T(ee, n, K, G);
  }
  function P(ee, K, G) {
    return T(ee, a, K, G);
  }
  function V(ee) {
    return c[ee.getDay()];
  }
  function q(ee) {
    return l[ee.getDay()];
  }
  function j(ee) {
    return s[ee.getMonth()];
  }
  function I(ee) {
    return o[ee.getMonth()];
  }
  function Z(ee) {
    return r[+(ee.getHours() >= 12)];
  }
  function U(ee) {
    return 1 + ~~(ee.getMonth() / 3);
  }
  function ue(ee) {
    return c[ee.getUTCDay()];
  }
  function de(ee) {
    return l[ee.getUTCDay()];
  }
  function he(ee) {
    return s[ee.getUTCMonth()];
  }
  function Ce(ee) {
    return o[ee.getUTCMonth()];
  }
  function Te(ee) {
    return r[+(ee.getUTCHours() >= 12)];
  }
  function ke(ee) {
    return 1 + ~~(ee.getUTCMonth() / 3);
  }
  return {
    format: function(ee) {
      var K = A(ee += "", x);
      return K.toString = function() {
        return ee;
      }, K;
    },
    parse: function(ee) {
      var K = D(ee += "", !1);
      return K.toString = function() {
        return ee;
      }, K;
    },
    utcFormat: function(ee) {
      var K = A(ee += "", S);
      return K.toString = function() {
        return ee;
      }, K;
    },
    utcParse: function(ee) {
      var K = D(ee += "", !0);
      return K.toString = function() {
        return ee;
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
const ze = R.createContext({}), Be = {
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
function bh(e, t) {
  return t === void 0 && (t = !0), (n) => (Be.arr(n) ? n : Object.keys(n)).reduce((a, r) => {
    const l = t ? r[0].toLowerCase() + r.substring(1) : r;
    return a[l] = e(l), a;
  }, e);
}
function Ac() {
  const e = R.useState(!1), t = e[1];
  return R.useCallback(() => t((a) => !a), []);
}
function mn(e, t) {
  return Be.und(e) || Be.nul(e) ? t : e;
}
function Fn(e) {
  return Be.und(e) ? [] : Be.arr(e) ? e : [e];
}
function Dt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return Be.fun(e) ? e(...n) : e;
}
function Eh(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, jt(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Ui(e) {
  const t = Eh(e);
  if (Be.und(t))
    return Ue({
      to: t
    }, e);
  const n = Object.keys(e).reduce((a, r) => Be.und(t[r]) ? Ue({}, a, {
    [r]: e[r]
  }) : a, {});
  return Ue({
    to: t
  }, n);
}
function Ah(e, t) {
  return t && (Be.fun(t) ? t(e) : Be.obj(t) && (t.current = e)), e;
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
const Ph = (e) => Be.fun(e) && !(e.prototype instanceof i.Component), Lh = (e) => R.forwardRef((n, a) => {
  const r = Ac(), l = R.useRef(!0), c = R.useRef(null), o = R.useRef(null), s = R.useCallback((m) => {
    const y = c.current, p = () => {
      let v = !1;
      o.current && (v = rl.fn(o.current, c.current.getAnimatedValue())), (!o.current || v === !1) && r();
    };
    c.current = new Nh(m, p), y && y.detach();
  }, []);
  R.useEffect(() => () => {
    l.current = !1, c.current && c.current.detach();
  }, []), R.useImperativeHandle(a, () => wh(o)), s(n);
  const u = c.current.getValue();
  u.scrollTop, u.scrollLeft;
  const d = jt(u, ["scrollTop", "scrollLeft"]), h = Ph(e) ? void 0 : (m) => o.current = Ah(m, a);
  return i.createElement(e, Ue({}, d, {
    ref: h
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
        let u = r.fromValues[o], d = r.toValues[o], h = s.lastPosition, m = d instanceof $t, y = Array.isArray(r.initialVelocity) ? r.initialVelocity[o] : r.initialVelocity;
        if (m && (d = d.getValue()), r.immediate) {
          s.setValue(d), s.done = !0;
          continue;
        }
        if (typeof u == "string" || typeof d == "string") {
          s.setValue(d), s.done = !0;
          continue;
        }
        if (r.duration !== void 0)
          h = u + r.easing((e - s.startTime) / r.duration) * (d - u), l = e >= s.startTime + r.duration;
        else if (r.decay)
          h = u + y / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - s.startTime))), l = Math.abs(s.lastPosition - h) < 0.1, l && (d = h);
        else {
          c = s.lastTime !== void 0 ? s.lastTime : e, y = s.lastVelocity !== void 0 ? s.lastVelocity : r.initialVelocity, e > c + 64 && (c = e);
          let p = Math.floor(e - c);
          for (let b = 0; b < p; ++b) {
            let x = -r.tension * (h - d), S = -r.friction * y, w = (x + S) / r.mass;
            y = y + w * 1 / 1e3, h = h + y * 1 / 1e3;
          }
          let v = r.clamp && r.tension !== 0 ? u < d ? h > d : h < d : !1, g = Math.abs(y) <= r.precision, f = r.tension !== 0 ? Math.abs(d - h) <= r.precision : !0;
          l = v || g && f, s.lastVelocity = y, s.lastTime = e;
        }
        m && !r.toValues[o].done && (l = !1), l ? (s.value !== d && (h = d), s.done = !0) : n = !0, s.setValue(h), s.lastPosition = h;
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
    if (Be.arr(l) || Be.fun(l))
      this.queue.push(Ue({}, c, {
        delay: r,
        to: l
      }));
    else if (l) {
      let o = {};
      Object.entries(l).forEach((s) => {
        let u = s[0], d = s[1];
        const h = Ue({
          to: {
            [u]: d
          },
          delay: Dt(r, u)
        }, c), m = o[h.delay] && o[h.delay].to;
        o[h.delay] = Ue({}, o[h.delay], h, {
          to: Ue({}, m, h.to)
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
        Be.obj(c) && (this.merged = Ue({}, c, this.merged)), Be.obj(s) && (this.merged = Ue({}, this.merged, s));
      });
      const n = this.local = ++this.guid, a = this.localQueue = this.queue;
      this.queue = [], a.forEach((r, l) => {
        let c = r.delay, o = jt(r, ["delay"]);
        const s = (d) => {
          l === a.length - 1 && n === this.guid && d && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let u = Be.arr(o.to) || Be.fun(o.to);
        c ? setTimeout(() => {
          n === this.guid && (u ? this.runAsync(o, s) : this.diff(o).start(s));
        }, c) : u ? this.runAsync(o, s) : this.diff(o).start(s);
      });
    } else
      Be.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Oh(this);
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
    if (Be.arr(r.to))
      for (let o = 0; o < r.to.length; o++) {
        const s = o, u = Ue({}, r, Ui(r.to[s]));
        Be.arr(u.config) && (u.config = u.config[s]), c = c.then(() => {
          if (l === this.guid)
            return new Promise((d) => this.diff(u).start(d));
        });
      }
    else if (Be.fun(r.to)) {
      let o = 0, s;
      c = c.then(() => r.to(
        // next(props)
        (u) => {
          const d = Ue({}, r, Ui(u));
          if (Be.arr(d.config) && (d.config = d.config[o]), o++, l === this.guid)
            return s = new Promise((h) => this.diff(d).start(h));
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
    let n = this.props, a = n.from, r = a === void 0 ? {} : a, l = n.to, c = l === void 0 ? {} : l, o = n.config, s = o === void 0 ? {} : o, u = n.reverse, d = n.attach, h = n.reset, m = n.immediate;
    if (u) {
      var y = [c, r];
      r = y[0], c = y[1];
    }
    this.merged = Ue({}, r, this.merged, c), this.hasChanged = !1;
    let p = d && d(this);
    if (this.animations = Object.entries(this.merged).reduce((v, g) => {
      let f = g[0], b = g[1], x = v[f] || {};
      const S = Be.num(b), w = Be.str(b) && !b.startsWith("#") && !/\d/.test(b) && !Sc[b], A = Be.arr(b), D = !S && !A && !w;
      let T = Be.und(r[f]) ? b : r[f], z = S || A || w ? b : 1, $ = Dt(s, f);
      p && (z = p.animations[f].parent);
      let C = x.parent, k = x.interpolation, _ = Fn(p ? z.getPayload() : z), O, N = b;
      D && (N = oi({
        range: [0, 1],
        output: [b, b]
      })(1));
      let P = k && k.getValue();
      const q = !Be.und(C) && x.animatedValues.some((U) => !U.done), j = !Be.equ(N, P), I = !Be.equ(N, x.previous), Z = !Be.equ($, x.config);
      if (h || I && j || Z) {
        if (S || w)
          C = k = x.parent || new Er(T);
        else if (A)
          C = k = x.parent || new zh(T);
        else if (D) {
          let U = x.interpolation && x.interpolation.calc(x.parent.value);
          U = U !== void 0 && !h ? U : T, x.parent ? (C = x.parent, C.setValue(0, !1)) : C = new Er(0);
          const ue = {
            output: [U, b]
          };
          x.interpolation ? (k = x.interpolation, x.interpolation.updateConfig(ue)) : k = C.interpolate(ue);
        }
        return _ = Fn(p ? z.getPayload() : z), O = Fn(C.getPayload()), h && !D && C.setValue(T, !1), this.hasChanged = !0, O.forEach((U) => {
          U.startPosition = U.value, U.lastPosition = U.value, U.lastVelocity = q ? U.lastVelocity : void 0, U.lastTime = q ? U.lastTime : void 0, U.startTime = wc(), U.done = !1, U.animatedStyles.clear();
        }), Dt(m, f) && C.setValue(D ? z : b, !1), Ue({}, v, {
          [f]: Ue({}, x, {
            name: f,
            parent: C,
            interpolation: k,
            animatedValues: O,
            toValues: _,
            previous: N,
            config: $,
            fromValues: Fn(C.getValue()),
            immediate: Dt(m, f),
            initialVelocity: mn($.velocity, 0),
            clamp: mn($.clamp, !1),
            precision: mn($.precision, 0.01),
            tension: mn($.tension, 170),
            friction: mn($.friction, 26),
            mass: mn($.mass, 1),
            duration: $.duration,
            easing: mn($.easing, (U) => U),
            decay: $.decay
          })
        });
      } else
        return j ? v : (D && (C.setValue(1, !1), k.updateConfig({
          output: [N, N]
        })), C.done = !0, this.hasChanged = !0, Ue({}, v, {
          [f]: Ue({}, v[f], {
            previous: N
          })
        }));
    }, this.animations), this.hasChanged) {
      this.configs = Object.values(this.animations), this.values = {}, this.interpolations = {};
      for (let v in this.animations)
        this.interpolations[v] = this.animations[v].interpolation, this.values[v] = this.animations[v].interpolation.getValue();
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
  const d = r.onFrame, h = r.onRest, m = r.onStart, y = r.ref, p = jt(r, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), v = Ac(), g = R.useRef(!1), f = R.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!a.ref,
    instances: !g.current && /* @__PURE__ */ new Map(),
    forceUpdate: v
  });
  return R.useImperativeHandle(a.ref, () => ({
    start: () => Promise.all(Array.from(f.current.instances).map((b) => {
      let x = b[1];
      return new Promise((S) => x.start(S));
    })),
    stop: (b) => Array.from(f.current.instances).forEach((x) => x[1].stop(b)),
    get controllers() {
      return Array.from(f.current.instances).map((b) => b[1]);
    }
  })), f.current = Hh(f.current, a), f.current.changed && f.current.transitions.forEach((b) => {
    const x = b.slot, S = b.from, w = b.to, A = b.config, D = b.trail, T = b.key, z = b.item;
    f.current.instances.has(T) || f.current.instances.set(T, new Fh());
    const $ = f.current.instances.get(T), C = Ue({}, p, {
      to: w,
      from: S,
      config: A,
      ref: y,
      onRest: (k) => {
        f.current.mounted && (b.destroyed && (!y && !c && Do(f, T), u && u(z)), !Array.from(f.current.instances).some((N) => !N[1].idle) && (y || c) && f.current.deleted.length > 0 && Do(f), h && h(z, x, k));
      },
      onStart: m && (() => m(z, x)),
      onFrame: d && ((k) => d(z, x, k)),
      delay: D,
      reset: s && x === Ua
      // Update controller
    });
    $.update(C), f.current.paused || $.start();
  }), R.useEffect(() => (f.current.mounted = g.current = !0, () => {
    f.current.mounted = g.current = !1, Array.from(f.current.instances).map((b) => b[1].destroy()), f.current.instances.clear();
  }), []), f.current.transitions.map((b) => {
    let x = b.item, S = b.slot, w = b.key;
    return {
      item: x,
      key: w,
      state: S,
      props: f.current.instances.get(w).getValues()
    };
  });
}
function Do(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let r = a.key;
    const l = (c) => c.key !== r;
    (Be.und(t) || t === r) && (e.current.instances.delete(r), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function Hh(e, t) {
  let n = e.first, a = e.prevProps, r = jt(e, ["first", "prevProps"]), l = Ar(t), c = l.items, o = l.keys, s = l.initial, u = l.from, d = l.enter, h = l.leave, m = l.update, y = l.trail, p = y === void 0 ? 0 : y, v = l.unique, g = l.config, f = l.order, b = f === void 0 ? [Ua, Yi, Xi] : f, x = Ar(a), S = x.keys, w = x.items, A = Ue({}, r.current), D = [...r.deleted], T = Object.keys(A), z = new Set(T), $ = new Set(o), C = o.filter((P) => !z.has(P)), k = r.transitions.filter((P) => !P.destroyed && !$.has(P.originalKey)).map((P) => P.originalKey), _ = o.filter((P) => z.has(P)), O = -p;
  for (; b.length; )
    switch (b.shift()) {
      case Ua: {
        C.forEach((V, q) => {
          v && D.find((U) => U.originalKey === V) && (D = D.filter((U) => U.originalKey !== V));
          const j = o.indexOf(V), I = c[j], Z = n && s !== void 0 ? "initial" : Ua;
          A[V] = {
            slot: Z,
            originalKey: V,
            key: v ? String(V) : Bh++,
            item: I,
            trail: O = O + p,
            config: Dt(g, I, Z),
            from: Dt(n && s !== void 0 ? s || {} : u, I),
            to: Dt(d, I)
          };
        });
        break;
      }
      case Yi: {
        k.forEach((V) => {
          const q = S.indexOf(V), j = w[q], I = Yi;
          D.unshift(Ue({}, A[V], {
            slot: I,
            destroyed: !0,
            left: S[Math.max(0, q - 1)],
            right: S[Math.min(S.length, q + 1)],
            trail: O = O + p,
            config: Dt(g, j, I),
            to: Dt(h, j)
          })), delete A[V];
        });
        break;
      }
      case Xi: {
        _.forEach((V) => {
          const q = o.indexOf(V), j = c[q], I = Xi;
          A[V] = Ue({}, A[V], {
            item: j,
            slot: I,
            trail: O = O + p,
            config: Dt(g, j, I),
            to: Dt(m, j)
          });
        });
        break;
      }
    }
  let N = o.map((P) => A[P]);
  return D.forEach((P) => {
    let V = P.left;
    P.right;
    let q = jt(P, ["left", "right"]), j;
    (j = N.findIndex((I) => I.originalKey === V)) !== -1 && (j += 1), j = Math.max(0, j), N = [...N.slice(0, j), q, ...N.slice(j)];
  }), Ue({}, r, {
    changed: C.length || k.length || _.length,
    first: n && C.length === 0,
    transitions: N,
    current: A,
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
      const h = u ? d : Bo[d] || (Bo[d] = d.replace(/([A-Z])/g, (m) => "-" + m.toLowerCase()));
      typeof e.getAttribute(h) < "u" && e.setAttribute(h, s[d]);
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
  var t = R.useState(di({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], r = R.useCallback(function(c) {
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
  }, [a]), l = R.useCallback(function() {
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
  var n = e.className, a = e.top, r = e.left, l = e.offsetLeft, c = l === void 0 ? 10 : l, o = e.offsetTop, s = o === void 0 ? 10 : o, u = e.style, d = u === void 0 ? Oc : u, h = e.children, m = e.unstyled, y = m === void 0 ? !1 : m, p = e.applyPositionStyle, v = p === void 0 ? !1 : p, g = up(e, cp);
  return /* @__PURE__ */ i.createElement("div", fi({
    ref: t,
    className: Ze("visx-tooltip", n),
    style: fi({
      top: a == null || s == null ? a : a + s,
      left: r == null || c == null ? r : r + c
    }, v && {
      position: "absolute"
    }, !y && d)
  }, g), h);
});
ll.propTypes = {
  children: W.node,
  className: W.string,
  left: W.number,
  offsetLeft: W.number,
  offsetTop: W.number,
  top: W.number,
  applyPositionStyle: W.bool,
  unstyled: W.bool
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
var _c = /* @__PURE__ */ R.createContext({
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
  var n = e.left, a = n === void 0 ? 0 : n, r = e.offsetLeft, l = r === void 0 ? 10 : r, c = e.offsetTop, o = c === void 0 ? 10 : c, s = e.parentRect, u = e.rect, d = e.style, h = d === void 0 ? Oc : d, m = e.top, y = m === void 0 ? 0 : m, p = e.unstyled, v = p === void 0 ? !1 : p, g = e.nodeRef, f = gp(e, yp), b, x = !1, S = !1;
  if (u && s) {
    var w = a, A = y;
    if (s.width) {
      var D = w + l + u.width - s.width, T = u.width - w - l;
      x = D > 0 && D > T;
    } else {
      var z = w + l + u.width - window.innerWidth, $ = u.width - w - l;
      x = z > 0 && z > $;
    }
    if (s.height) {
      var C = A + o + u.height - s.height, k = u.height - A - o;
      S = C > 0 && C > k;
    } else
      S = A + o + u.height > window.innerHeight;
    w = x ? w - u.width - l : w + l, A = S ? A - u.height - o : A + o, w = Math.round(w), A = Math.round(A), b = "translate(" + w + "px, " + A + "px)";
  }
  return /* @__PURE__ */ i.createElement(dp, mi({
    ref: g,
    style: mi({
      left: 0,
      top: 0,
      transform: b
    }, !v && h)
  }, f), /* @__PURE__ */ i.createElement(pp, {
    value: {
      isFlippedVertically: !S,
      isFlippedHorizontally: !x
    }
  }, t));
}
Mc.propTypes = {
  nodeRef: W.oneOfType([W.string, W.func, W.object])
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
  const { tableData: t, config: n, formatNumber: a, capitalize: r, formatDate: l, parseDate: c, setSharedFilter: o } = R.useContext(ze), { xScale: s, yScale: u, showTooltip: d, hideTooltip: h } = e, { xAxis: m, visualizationType: y, orientation: p, yAxis: v, runtime: g } = n, f = (_, O) => {
    const { x: N, y: P } = O, q = {
      data: _ || {},
      dataXPosition: N + 10,
      dataYPosition: P
    };
    return {
      tooltipLeft: q.dataXPosition,
      tooltipTop: q.dataYPosition,
      tooltipData: q
    };
  }, b = (_, O) => {
    _.stopPropagation();
    const N = wr(_), { x: P, y: V } = N, { data: q, arc: j } = O, I = w(P - Number(n.yAxis.size || 0)), Z = y !== "Pie" ? n.series.filter((K) => K.tooltip === !0).map((K) => K.dataKey) : n.series.map((K) => K.dataKey);
    Z.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((K) => {
      K.confidenceIntervals.map((G) => {
        G.showInTooltip && (Z.push(G.high), Z.push(G.low));
      });
    });
    function U(K) {
      let G = [];
      for (let F in K)
        K.hasOwnProperty(F) && G.push(K[F].name);
      return G;
    }
    Z.push(...U(n.columns));
    const ue = T(I, Z), de = t.filter((K) => K[m.dataKey] === A(V)), he = p === "vertical" ? ue : de;
    y === "Forest Plot" && (t == null || t.filter((K) => K[m.dataKey] === A(V))[0][n.forestPlot.estimateField]);
    const Ce = (K) => {
      const G = n.series.filter((pe) => pe.dataKey === K)[0];
      return G != null && G.axis ? String(G.axis).toLowerCase() : "left";
    }, ke = (() => {
      const K = n.columns, G = [], F = [];
      for (const [ne, fe] of Object.entries(K)) {
        const oe = {
          addColPrefix: n.columns[ne].prefix,
          addColSuffix: n.columns[ne].suffix,
          addColRoundTo: n.columns[ne].roundToPlace ? n.columns[ne].roundToPlace : "",
          addColCommas: n.columns[ne].commas
        };
        let se = null;
        n.visualizationType === "Pie" ? se = j == null ? void 0 : j.data[fe.name] : se = he[0][fe.name];
        const Le = fu(se, "left", !0, n, oe);
        fe.tooltips && G.push([fe.label, Le]);
      }
      const pe = [];
      return G.forEach((ne) => {
        pe.push([ne[0], ne[1]]);
      }), y === "Pie" && F.push(
        // ignore
        [n.xAxis.dataKey, q],
        [n.runtime.yAxis.dataKey, a(j == null ? void 0 : j.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((j == null ? void 0 : j.endAngle) - (j == null ? void 0 : j.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), y === "Forest Plot" && F.push([n.xAxis.dataKey, A(V)]), y !== "Pie" && y !== "Forest Plot" && F.push(
        ...z().filter(Boolean).flatMap((ne) => he[0][ne] ? [[ne, a(he[0][ne], Ce(ne))]] : [])
      ), [...F, ...pe];
    })();
    if (!ke)
      return;
    const ee = f(ke, N);
    d(ee);
  }, x = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      h();
    }, 3e3) : h();
  }, S = (_) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let O = s.step();
      const P = Math.floor(Number(_) / O);
      return s.domain()[P - 1];
    }
    if (n.xAxis.type === "date" && n.visualizationType !== "Combo") {
      const O = ho((q) => c(q[n.xAxis.dataKey])).left, N = s.invert(s(_)), P = O(n.data, N, 1);
      return c(n.data[P - 1][n.xAxis.dataKey]);
    }
  }, w = (_) => {
    if (y !== "Pie" && p !== "horizontal") {
      if (s.type === "point" || m.type === "continuous" || m.type === "date") {
        let O = null, N = Number.MAX_VALUE, P = _;
        return t.forEach((V) => {
          const q = m.type === "date" ? s(c(V[m.dataKey])) : s(V[m.dataKey]), j = Math.abs(Number(q - P));
          j < N && (N = j, O = m.type === "date" ? c(V[m.dataKey]) : V[m.dataKey]);
        }), O;
      }
      if (n.xAxis.type === "categorical" || y === "Combo" && p !== "horizontal" && y !== "Forest Plot") {
        let O = s.step();
        const P = Math.floor(Number(_) / O);
        return s.domain()[P - 1];
      }
      if (n.xAxis.type === "date" && y !== "Combo" && p !== "horizontal") {
        const O = ho((q) => c(q[n.xAxis.dataKey])).left, N = s.invert(_), P = O(n.data, N, 1);
        return c(n.data[P - 1][n.xAxis.dataKey]);
      }
    }
  }, A = (_, O) => {
    if (y === "Pie")
      return;
    let N = Number.MAX_VALUE, P = null;
    return t.forEach((V, q) => {
      const j = u(y !== "Forest Plot" ? V[n.xAxis.dataKey] : q), I = Math.abs(j - _);
      I < N && (N = I, P = O ? V[O] : V[n.xAxis.dataKey]);
    }), P;
  }, D = (_) => {
    try {
      const O = wr(_), { x: N } = O;
      if (!N)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let P = w(N);
      if (!P)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      let V = n.data.filter((q) => q[n.xAxis.dataKey] === P);
      o && o(n.uid, V[0]);
    } catch (O) {
      console.error(O.message);
    }
  }, T = (_, O) => {
    try {
      const N = l(_);
      let P;
      return m.type === "categorical" ? P = t.filter((q) => q[m.dataKey] === _) : P = t.filter((q) => l(c(q[m.dataKey])) === N), !P || P.length === 0 ? [] : P.map((q) => Object.fromEntries(Object.entries(q).filter(([j, I]) => O.includes(j))));
    } catch (N) {
      console.error("COVE", N);
    }
  }, z = () => {
    var _;
    try {
      let O, N = [], P = [];
      if ((_ = n.series) == null || _.forEach((V) => {
        V.type === "Forecasting" && (N.push(V.stageColumn), V == null || V.confidenceIntervals.forEach((q) => {
          q.showInTooltip === !0 && (P.push(q.low), P.push(q.high));
        }));
      }), !n.dashboard)
        switch (y) {
          case "Combo":
            O = [g.xAxis.dataKey, ...g == null ? void 0 : g.seriesKeys, ...N, ...P];
            break;
          case "Forecasting":
            O = [g.xAxis.dataKey, ...N, ...P];
            break;
          case "Line":
            O = [g.xAxis.dataKey, ...g == null ? void 0 : g.seriesKeys];
            break;
          case "Area Chart":
            O = [g.xAxis.dataKey, ...g == null ? void 0 : g.seriesKeys];
            break;
          case "Bar":
            O = p === "vertical" ? [g.xAxis.dataKey, ...g == null ? void 0 : g.seriesKeys] : [g.yAxis.dataKey, ...g == null ? void 0 : g.seriesKeys];
            break;
          case "Pie":
            O = [g.xAxis.dataKey, ...g == null ? void 0 : g.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (O = [g.xAxis.dataKey, ...g == null ? void 0 : g.barSeriesKeys, ...g == null ? void 0 : g.lineSeriesKeys, ...N, ...P]), O;
    } catch (O) {
      console.error("COVE", O);
    }
  }, $ = (_) => {
    const { dataXPosition: O, dataYPosition: N } = _;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${O}px, ${Number(N)}px)`
    };
  }, C = (_) => {
    var N, P;
    let O = n.series.filter((V) => V.dataKey === _);
    return (N = O[0]) != null && N.name ? (P = O[0]) == null ? void 0 : P.name : _;
  };
  return {
    getIncludedTooltipSeries: z,
    getXValueFromCoordinate: w,
    getXValueFromCoordinateDate: S,
    getYScaleValues: T,
    handleTooltipClick: D,
    handleTooltipMouseOff: x,
    handleTooltipMouseOver: b,
    TooltipListItem: ({ item: _ }) => {
      const [O, N] = _, [P, V, q] = N;
      return y === "Forest Plot" ? P === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${n.yAxis.type === "date" ? l(c(P, !1)) : V}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${C(P)}: ${a(V, "left")}`) : y === "Bar" && p === "horizontal" && P === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${V}`) : P === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${n.xAxis.type === "date", V}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${C(P)}: ${V}`);
    },
    tooltipStyles: $
  };
};
function ol(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: r = !1 }) {
  const [l, c] = R.useState(), o = (l == null ? void 0 : l.isIntersecting) && r, s = ([u]) => {
    c(u);
  };
  return R.useEffect(() => {
    setTimeout(() => {
      const u = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || o || !u)
        return;
      const h = { threshold: t, root: n, rootMargin: a }, m = new IntersectionObserver(s, h);
      return m.observe(u), () => m.disconnect();
    }, 500);
  }, [e, t, n, a, o]), l;
}
const Ba = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), Lp = (e) => {
  const { transformedData: t, config: n, dimensions: a, seriesHighlight: r, colorScale: l, formatNumber: c, currentViewport: o, handleChartAriaLabels: s, isEditor: u } = R.useContext(ze), { tooltipData: d, showTooltip: h, hideTooltip: m, tooltipOpen: y, tooltipLeft: p, tooltipTop: v } = Lc(), { handleTooltipMouseOver: g, handleTooltipMouseOff: f, TooltipListItem: b } = $c({
    xScale: !1,
    yScale: !1,
    showTooltip: h,
    hideTooltip: m
  }), [x, S] = R.useState(void 0), [w, A] = R.useState(!1), D = R.useRef(), T = ol(D, {
    freezeOnceVisible: !1
  });
  R.useEffect(() => {
    document.querySelector(".isEditor") && A((V) => !0);
  }), R.useEffect(() => {
    T != null && T.isIntersecting && n.animate && !w && setTimeout(() => {
      A(!0);
    }, 500);
  }, [T == null ? void 0 : T.isIntersecting, n.animate]);
  const z = ({ arcs: P, path: V, getKey: q }) => {
    const j = Vh(P, q, {
      from: Ba,
      enter: Ba,
      update: Ba,
      leave: Ba
    });
    return R.useEffect(() => {
      const I = setTimeout(() => {
        m();
      }, 500);
      return () => {
        clearTimeout(I);
      };
    }, [d]), /* @__PURE__ */ i.createElement(i.Fragment, null, j.map(({ item: I, props: Z, key: U }, ue) => /* @__PURE__ */ i.createElement(be, { className: I.data[n.xAxis.dataKey], key: `${U}-${ue}`, style: { opacity: n.legend.behavior === "highlight" && r.length > 0 && r.indexOf(I.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ i.createElement(
      Wo.path,
      {
        d: $h(
          [Z.startAngle, Z.endAngle],
          (de, he) => V({
            ...I,
            startAngle: de,
            endAngle: he
          })
        ),
        fill: l(I.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (de) => g(de, { data: I.data[n.runtime.xAxis.dataKey], arc: I }),
        onMouseLeave: (de) => f()
      }
    ))), j.map(({ item: I, key: Z }) => {
      const [U, ue] = V.centroid(I), de = I.endAngle - I.startAngle >= 0.1;
      let he = "#FFF";
      return l(I.data[n.runtime.xAxis.dataKey]) && Yt.contrast(he, l(I.data[n.runtime.xAxis.dataKey])) < 3.5 && (he = "000"), /* @__PURE__ */ i.createElement(Wo.g, { key: Z }, de && /* @__PURE__ */ i.createElement($e, { style: { fill: he }, x: U, y: ue, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((I.endAngle - I.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [$] = a;
  n && n.legend && !n.legend.hide && o === "lg" && ($ = $ * 0.73);
  const C = n.heights.vertical, k = Math.min($, C) / 2, _ = C / 2, O = $ / 2, N = n.pieType === "Donut" ? 75 : k;
  return R.useEffect(() => {
    if (r.length > 0 && n.legend.behavior !== "highlight") {
      let P = [];
      t.forEach((V) => {
        r.indexOf(V[n.runtime.xAxis.dataKey]) !== -1 && P.push(V);
      }), S(P);
    } else
      S(void 0);
  }, [r]), /* @__PURE__ */ i.createElement(Rt, { component: "PieChart" }, /* @__PURE__ */ i.createElement("svg", { width: $, height: C, className: `animated-pie group ${n.animate === !1 || w ? "animated" : ""}`, role: "img", "aria-label": s(n) }, /* @__PURE__ */ i.createElement(be, { top: _, left: O }, /* @__PURE__ */ i.createElement(
    Pd,
    {
      data: x || t,
      pieValue: (P) => P[n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: k - N,
      outerRadius: k
    },
    (P) => /* @__PURE__ */ i.createElement(z, { ...P, getKey: (V) => V.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ i.createElement("div", { ref: D }), d && Object.entries(d.data).length > 0 && y && h && d.dataYPosition && d.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Dc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: p, top: v }, /* @__PURE__ */ i.createElement("ul", null, typeof d == "object" && Object.entries(d.data).map((P, V) => /* @__PURE__ */ i.createElement(b, { item: P, key: V }))))));
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
    var h = a === bt.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    s = (Number(r[0]) + Number(r[r.length - 1])) / 2, u = o * (c + t + l + h);
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
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, r = e.tickClassName, l = e.tickComponent, c = e.tickLabelProps, o = e.tickStroke, s = o === void 0 ? "#222" : o, u = e.tickTransform, d = e.ticks, h = e.strokeWidth, m = e.tickLineProps;
  return d.map(function(y) {
    var p, v = y.value, g = y.index, f = y.from, b = y.to, x = y.formattedValue, S = (p = c[g]) != null ? p : {}, w = Math.max(10, typeof S.fontSize == "number" && S.fontSize || 0), A = b.y + (n && a !== bt.top ? w : 0);
    return /* @__PURE__ */ i.createElement(be, {
      key: "visx-tick-" + v + "-" + g,
      className: Ze("visx-axis-tick", r),
      transform: u
    }, !t && /* @__PURE__ */ i.createElement(qe, ma({
      from: f,
      to: b,
      stroke: s,
      strokeWidth: h,
      strokeLinecap: "square"
    }, m)), l ? l(ma({}, S, {
      x: b.x,
      y: A,
      formattedValue: x
    })) : /* @__PURE__ */ i.createElement($e, ma({
      x: b.x,
      y: A
    }, S), x));
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
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, r = e.hideAxisLine, l = e.hideTicks, c = e.horizontal, o = e.label, s = o === void 0 ? "" : o, u = e.labelClassName, d = e.labelOffset, h = d === void 0 ? 14 : d, m = e.labelProps, y = m === void 0 ? Ho : m, p = e.orientation, v = p === void 0 ? bt.bottom : p, g = e.scale, f = e.stroke, b = f === void 0 ? "#222" : f, x = e.strokeDasharray, S = e.strokeWidth, w = S === void 0 ? 1 : S, A = e.tickClassName, D = e.tickComponent, T = e.tickLineProps, z = e.tickLabelProps, $ = e.tickLength, C = $ === void 0 ? 8 : $, k = e.tickStroke, _ = k === void 0 ? "#222" : k, O = e.tickTransform, N = e.ticks, P = e.ticksComponent, V = P === void 0 ? Mp : P, q = hi({}, Ho, typeof z == "object" ? z : null), j = N.map(function(Z) {
    var U = Z.value, ue = Z.index;
    return typeof z == "function" ? z(U, ue, N) : q;
  }), I = Math.max.apply(Math, [10].concat(j.map(function(Z) {
    return typeof Z.fontSize == "number" ? Z.fontSize : 0;
  })));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, V({
    hideTicks: l,
    horizontal: c,
    orientation: v,
    scale: g,
    tickClassName: A,
    tickComponent: D,
    tickLabelProps: j,
    tickStroke: _,
    tickTransform: O,
    ticks: N,
    strokeWidth: w,
    tickLineProps: T
  }), !r && /* @__PURE__ */ i.createElement(qe, {
    className: Ze("visx-axis-line", n),
    from: t,
    to: a,
    stroke: b,
    strokeWidth: w,
    strokeDasharray: x
  }), s && /* @__PURE__ */ i.createElement($e, hi({
    className: Ze("visx-axis-label", u)
  }, _p({
    labelOffset: h,
    labelProps: y,
    orientation: v,
    range: g.range(),
    tickLabelFontSize: I,
    tickLength: C
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
  var t = e.children, n = t === void 0 ? Dp : t, a = e.axisClassName, r = e.hideAxisLine, l = r === void 0 ? !1 : r, c = e.hideTicks, o = c === void 0 ? !1 : c, s = e.hideZero, u = s === void 0 ? !1 : s, d = e.innerRef, h = e.left, m = h === void 0 ? 0 : h, y = e.numTicks, p = y === void 0 ? 10 : y, v = e.orientation, g = v === void 0 ? bt.bottom : v, f = e.rangePadding, b = f === void 0 ? 0 : f, x = e.scale, S = e.tickFormat, w = e.tickLength, A = w === void 0 ? 8 : w, D = e.tickValues, T = e.top, z = T === void 0 ? 0 : T, $ = Bp(e, Fp), C = S ?? zp(x), k = g === bt.left, _ = g === bt.top, O = _ || g === bt.bottom, N = $p(x), P = k || _ ? -1 : 1, V = x.range(), q = Rp(b), j = Wa({
    x: Number(V[0]) + 0.5 - q.start,
    y: 0
  }, O), I = Wa({
    x: Number(V[V.length - 1]) + 0.5 + q.end,
    y: 0
  }, O), Z = (D ?? wf(x, p)).filter(function(ue) {
    return !u || ue !== 0 && ue !== "0";
  }).map(function(ue, de) {
    return {
      value: ue,
      index: de
    };
  }), U = Z.map(function(ue) {
    var de = ue.value, he = ue.index, Ce = kf(N(de));
    return {
      value: de,
      index: he,
      from: Wa({
        x: Ce,
        y: 0
      }, O),
      to: Wa({
        x: Ce,
        y: A * P
      }, O),
      formattedValue: C(de, he, Z)
    };
  });
  return /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-axis", a),
    innerRef: d,
    top: z,
    left: m
  }, n(Nr({}, $, {
    axisFromPoint: j,
    axisToPoint: I,
    hideAxisLine: l,
    hideTicks: o,
    hideZero: u,
    horizontal: O,
    numTicks: p,
    orientation: g,
    rangePadding: b,
    scale: x,
    tickFormat: C,
    tickLength: A,
    tickPosition: N,
    tickSign: P,
    ticks: U
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
  let h;
  switch (Tn(t)) {
    case "top":
      h = { x: l, y: a.y - r.height };
      break;
    case "bottom":
      h = { x: l, y: a.y + a.height };
      break;
    case "right":
      h = { x: a.x + a.width, y: c };
      break;
    case "left":
      h = { x: a.x - r.width, y: c };
      break;
    default:
      h = { x: a.x, y: a.y };
  }
  switch (ka(t)) {
    case "start":
      h[o] -= u * (n && d ? -1 : 1);
      break;
    case "end":
      h[o] += u * (n && d ? -1 : 1);
  }
  return h;
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
  const { x: a, y: r, platform: l, rects: c, elements: o, strategy: s } = e, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: h = "floating", altBoundary: m = !1, padding: y = 0 } = t, p = zc(y), v = o[m ? h === "floating" ? "reference" : "floating" : h], g = ha(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(v))) == null || n ? v : v.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(o.floating)), boundary: u, rootBoundary: d, strategy: s })), f = h === "floating" ? { ...c.floating, x: a, y: r } : c.reference, b = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(o.floating)), x = await (l.isElement == null ? void 0 : l.isElement(b)) && await (l.getScale == null ? void 0 : l.getScale(b)) || { x: 1, y: 1 }, S = ha(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: f, offsetParent: b, strategy: s }) : f);
  return { top: (g.top - S.top + p.top) / x.y, bottom: (S.bottom - g.bottom + p.bottom) / x.y, left: (g.left - S.left + p.left) / x.x, right: (S.right - g.right + p.right) / x.x };
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
    const { placement: a, middlewareData: r, rects: l, initialPlacement: c, platform: o, elements: s } = t, { mainAxis: u = !0, crossAxis: d = !0, fallbackPlacements: h, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: p = !0, ...v } = e, g = Tn(a), f = Tn(c) === c, b = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), x = h || (f || !p ? [vi(c)] : function(C) {
      const k = vi(C);
      return [Gi(C), k, Gi(k)];
    }(c));
    h || y === "none" || x.push(...function(C, k, _, O) {
      const N = ka(C);
      let P = function(V, q, j) {
        const I = ["left", "right"], Z = ["right", "left"], U = ["top", "bottom"], ue = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return j ? q ? Z : I : q ? I : Z;
          case "left":
          case "right":
            return q ? U : ue;
          default:
            return [];
        }
      }(Tn(C), _ === "start", O);
      return N && (P = P.map((V) => V + "-" + N), k && (P = P.concat(P.map(Gi)))), P;
    }(c, p, y, b));
    const S = [c, ...x], w = await Rc(t, v), A = [];
    let D = ((n = r.flip) == null ? void 0 : n.overflows) || [];
    if (u && A.push(w[g]), d) {
      const { main: C, cross: k } = iy(a, l, b);
      A.push(w[C], w[k]);
    }
    if (D = [...D, { placement: a, overflows: A }], !A.every((C) => C <= 0)) {
      var T, z;
      const C = (((T = r.flip) == null ? void 0 : T.index) || 0) + 1, k = S[C];
      if (k)
        return { data: { index: C, overflows: D }, reset: { placement: k } };
      let _ = (z = D.find((O) => O.overflows[0] <= 0)) == null ? void 0 : z.placement;
      if (!_)
        switch (m) {
          case "bestFit": {
            var $;
            const O = ($ = D.map((N) => [N.placement, N.overflows.filter((P) => P > 0).reduce((P, V) => P + V, 0)]).sort((N, P) => N[1] - P[1])[0]) == null ? void 0 : $[0];
            O && (_ = O);
            break;
          }
          case "initialPlacement":
            _ = c;
        }
      if (a !== _)
        return { reset: { placement: _ } };
    }
    return {};
  } };
}, oy = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, r = await async function(l, c) {
      const { placement: o, platform: s, elements: u } = l, d = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), h = Tn(o), m = ka(o), y = wa(o) === "x", p = ["left", "top"].includes(h) ? -1 : 1, v = d && y ? -1 : 1, g = typeof c == "function" ? c(l) : c;
      let { mainAxis: f, crossAxis: b, alignmentAxis: x } = typeof g == "number" ? { mainAxis: g, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...g };
      return m && typeof x == "number" && (b = m === "end" ? -1 * x : x), y ? { x: b * v, y: f * p } : { x: f * p, y: b * v };
    }(t, e);
    return { x: n + r.x, y: a + r.y, data: r };
  } };
}, sy = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: r } = t, { mainAxis: l = !0, crossAxis: c = !1, limiter: o = { fn: (g) => {
      let { x: f, y: b } = g;
      return { x: f, y: b };
    } }, ...s } = e, u = { x: n, y: a }, d = await Rc(t, s), h = wa(Tn(r)), m = h === "x" ? "y" : "x";
    let y = u[h], p = u[m];
    if (l) {
      const g = h === "y" ? "bottom" : "right";
      y = Pr(y + d[h === "y" ? "top" : "left"], y, y - d[g]);
    }
    if (c) {
      const g = m === "y" ? "bottom" : "right";
      p = Pr(p + d[m === "y" ? "top" : "left"], p, p - d[g]);
    }
    const v = o.fn({ ...t, [h]: y, [m]: p });
    return { ...v, data: { x: v.x - n, y: v.y - a } };
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
  let h = (c.left + (d && ((r = u.visualViewport) == null ? void 0 : r.offsetLeft) || 0)) / s.x, m = (c.top + (d && ((l = u.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / s.y, y = c.width / s.x, p = c.height / s.y;
  if (o) {
    const v = Mt(o), g = a && rn(a) ? Mt(a) : a;
    let f = v.frameElement;
    for (; f && a && g !== v; ) {
      const b = Wn(f), x = f.getBoundingClientRect(), S = getComputedStyle(f);
      x.x += (f.clientLeft + parseFloat(S.paddingLeft)) * b.x, x.y += (f.clientTop + parseFloat(S.paddingTop)) * b.y, h *= b.x, m *= b.y, y *= b.x, p *= b.y, h += x.x, m += x.y, f = Mt(f).frameElement;
    }
  }
  return { width: y, height: p, top: m, right: h + y, bottom: m + p, left: h, x: h, y: m };
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
    let s = c.clientWidth, u = c.clientHeight, d = 0, h = 0;
    if (o) {
      s = o.width, u = o.height;
      const m = Vc();
      (m || !m && r === "fixed") && (d = o.offsetLeft, h = o.offsetTop);
    }
    return { width: s, height: u, x: d, y: h };
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
    const h = d.get(u);
    if (h)
      return h;
    let m = qc(u).filter((g) => rn(g) && cn(g) !== "body"), y = null;
    const p = qt(u).position === "fixed";
    let v = p ? Aa(u) : u;
    for (; rn(v) && !cl(v); ) {
      const g = qt(v), f = Lr(v);
      (p ? f || y : f || g.position !== "static" || !y || !["absolute", "fixed"].includes(y.position)) ? y = g : m = m.filter((b) => b !== v), v = Aa(v);
    }
    return d.set(u, m), m;
  }(t, this._c) : [].concat(n), c = [...l, a], o = c[0], s = c.reduce((u, d) => {
    const h = qo(t, d, r);
    return u.top = pa(h.top, u.top), u.right = Io(h.right, u.right), u.bottom = Io(h.bottom, u.bottom), u.left = pa(h.left, u.left), u;
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
    const { placement: u = "bottom", strategy: d = "absolute", middleware: h = [], platform: m } = s, y = h.filter(Boolean), p = await (m.isRTL == null ? void 0 : m.isRTL(o));
    if (m == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), y.filter((w) => {
      let { name: A } = w;
      return A === "autoPlacement" || A === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    c && o || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let v = await m.getElementRects({ reference: c, floating: o, strategy: d }), { x: g, y: f } = Ko(v, u, p), b = u, x = {}, S = 0;
    for (let w = 0; w < y.length; w++) {
      const { name: A, fn: D } = y[w], { x: T, y: z, data: $, reset: C } = await D({ x: g, y: f, initialPlacement: u, placement: b, strategy: d, middlewareData: x, rects: v, platform: m, elements: { reference: c, floating: o } });
      g = T ?? g, f = z ?? f, x = { ...x, [A]: { ...x[A], ...$ } }, S > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), C && S <= 50 && (S++, typeof C == "object" && (C.placement && (b = C.placement), C.rects && (v = C.rects === !0 ? await m.getElementRects({ reference: c, floating: o, strategy: d }) : C.rects), { x: g, y: f } = Ko(v, b, p)), w = -1);
    }
    return { x: g, y: f, placement: b, strategy: d, middlewareData: x };
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
  var a = 60108, r = 60114, l = 60109, c = 60110, o = 60112, s = 60113, u = 60120, d = 60115, h = 60116, m = 60121, y = 60122, p = 60117, v = 60129, g = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var f = Symbol.for;
    t = f("react.element"), n = f("react.portal"), en.Fragment = f("react.fragment"), a = f("react.strict_mode"), r = f("react.profiler"), l = f("react.provider"), c = f("react.context"), o = f("react.forward_ref"), s = f("react.suspense"), u = f("react.suspense_list"), d = f("react.memo"), h = f("react.lazy"), m = f("react.block"), y = f("react.server.block"), p = f("react.fundamental"), f("react.scope"), f("react.opaque.id"), v = f("react.debug_trace_mode"), f("react.offscreen"), g = f("react.legacy_hidden");
  }
  var b = typeof Symbol == "function" && Symbol.iterator, x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function S(K) {
    for (var G = arguments.length, F = new Array(G > 1 ? G - 1 : 0), pe = 1; pe < G; pe++)
      F[pe - 1] = arguments[pe];
    w("error", K, F);
  }
  function w(K, G, F) {
    var pe = x.ReactDebugCurrentFrame, ne = "";
    if (z) {
      var fe = D(z.type), oe = z._owner;
      ne += function(Le, Ke, we) {
        var xe = "";
        if (Ke) {
          var le = Ke.fileName, te = le.replace(A, "");
          if (/^index\./.test(te)) {
            var Fe = le.match(A);
            if (Fe) {
              var ce = Fe[1];
              ce && (te = ce.replace(A, "") + "/" + te);
            }
          }
          xe = " (at " + te + ":" + Ke.lineNumber + ")";
        } else
          we && (xe = " (created by " + we + ")");
        return `
    in ` + (Le || "Unknown") + xe;
      }(fe, z._source, oe && D(oe.type));
    }
    (ne += pe.getStackAddendum()) !== "" && (G += "%s", F = F.concat([ne]));
    var se = F.map(function(Le) {
      return "" + Le;
    });
    se.unshift("Warning: " + G), Function.prototype.apply.call(console[K], console, se);
  }
  var A = /^(.*)[\\\/]/;
  function D(K) {
    if (K == null)
      return null;
    if (typeof K.tag == "number" && S("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof K == "function")
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
          return pe = K, ne = K.render, fe = "ForwardRef", oe = ne.displayName || ne.name || "", pe.displayName || (oe !== "" ? fe + "(" + oe + ")" : fe);
        case d:
          return D(K.type);
        case m:
          return D(K.render);
        case h:
          var G = (F = K)._status === 1 ? F._result : null;
          if (G)
            return D(G);
      }
    var F, pe, ne, fe, oe;
    return null;
  }
  var T = {};
  x.ReactDebugCurrentFrame;
  var z = null;
  function $(K) {
    z = K;
  }
  var C, k, _, O = x.ReactCurrentOwner, N = Object.prototype.hasOwnProperty, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(K, G, F, pe, ne) {
    var fe, oe = {}, se = null, Le = null;
    for (fe in F !== void 0 && (se = "" + F), function(xe) {
      if (N.call(xe, "key")) {
        var le = Object.getOwnPropertyDescriptor(xe, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return xe.key !== void 0;
    }(G) && (se = "" + G.key), function(xe) {
      if (N.call(xe, "ref")) {
        var le = Object.getOwnPropertyDescriptor(xe, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return xe.ref !== void 0;
    }(G) && (Le = G.ref, function(xe, le) {
      if (typeof xe.ref == "string" && O.current && le && O.current.stateNode !== le) {
        var te = D(O.current.type);
        _[te] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(O.current.type), xe.ref), _[te] = !0);
      }
    }(G, ne)), G)
      N.call(G, fe) && !P.hasOwnProperty(fe) && (oe[fe] = G[fe]);
    if (K && K.defaultProps) {
      var Ke = K.defaultProps;
      for (fe in Ke)
        oe[fe] === void 0 && (oe[fe] = Ke[fe]);
    }
    if (se || Le) {
      var we = typeof K == "function" ? K.displayName || K.name || "Unknown" : K;
      se && function(xe, le) {
        var te = function() {
          C || (C = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        te.isReactWarning = !0, Object.defineProperty(xe, "key", { get: te, configurable: !0 });
      }(oe, we), Le && function(xe, le) {
        var te = function() {
          k || (k = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        te.isReactWarning = !0, Object.defineProperty(xe, "ref", { get: te, configurable: !0 });
      }(oe, we);
    }
    return function(xe, le, te, Fe, ce, Ne, Se) {
      var B = { $$typeof: t, type: xe, key: le, ref: te, props: Se, _owner: Ne, _store: {} };
      return Object.defineProperty(B._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(B, "_self", { configurable: !1, enumerable: !1, writable: !1, value: Fe }), Object.defineProperty(B, "_source", { configurable: !1, enumerable: !1, writable: !1, value: ce }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }(K, se, Le, ne, pe, O.current, oe);
  }
  _ = {};
  var q, j = x.ReactCurrentOwner;
  function I(K) {
    z = K;
  }
  function Z(K) {
    return typeof K == "object" && K !== null && K.$$typeof === t;
  }
  function U() {
    if (j.current) {
      var K = D(j.current.type);
      if (K)
        return `

Check the render method of \`` + K + "`.";
    }
    return "";
  }
  x.ReactDebugCurrentFrame, q = !1;
  var ue = {};
  function de(K, G) {
    if (K._store && !K._store.validated && K.key == null) {
      K._store.validated = !0;
      var F = function(ne) {
        var fe = U();
        if (!fe) {
          var oe = typeof ne == "string" ? ne : ne.displayName || ne.name;
          oe && (fe = `

Check the top-level render call using <` + oe + ">.");
        }
        return fe;
      }(G);
      if (!ue[F]) {
        ue[F] = !0;
        var pe = "";
        K && K._owner && K._owner !== j.current && (pe = " It was passed a child from " + D(K._owner.type) + "."), I(K), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, pe), I(null);
      }
    }
  }
  function he(K, G) {
    if (typeof K == "object") {
      if (Array.isArray(K))
        for (var F = 0; F < K.length; F++) {
          var pe = K[F];
          Z(pe) && de(pe, G);
        }
      else if (Z(K))
        K._store && (K._store.validated = !0);
      else if (K) {
        var ne = function(se) {
          if (se === null || typeof se != "object")
            return null;
          var Le = b && se[b] || se["@@iterator"];
          return typeof Le == "function" ? Le : null;
        }(K);
        if (typeof ne == "function" && ne !== K.entries)
          for (var fe, oe = ne.call(K); !(fe = oe.next()).done; )
            Z(fe.value) && de(fe.value, G);
      }
    }
  }
  function Ce(K) {
    var G, F = K.type;
    if (F != null && typeof F != "string") {
      if (typeof F == "function")
        G = F.propTypes;
      else {
        if (typeof F != "object" || F.$$typeof !== o && F.$$typeof !== d)
          return;
        G = F.propTypes;
      }
      if (G) {
        var pe = D(F);
        (function(ne, fe, oe, se, Le) {
          var Ke = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var we in ne)
            if (Ke(ne, we)) {
              var xe = void 0;
              try {
                if (typeof ne[we] != "function") {
                  var le = Error((se || "React class") + ": " + oe + " type `" + we + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof ne[we] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw le.name = "Invariant Violation", le;
                }
                xe = ne[we](fe, we, se, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (te) {
                xe = te;
              }
              !xe || xe instanceof Error || ($(Le), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", oe, we, typeof xe), $(null)), xe instanceof Error && !(xe.message in T) && (T[xe.message] = !0, $(Le), S("Failed %s type: %s", oe, xe.message), $(null));
            }
        })(G, K.props, "prop", pe, K);
      } else
        F.PropTypes === void 0 || q || (q = !0, S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D(F) || "Unknown"));
      typeof F.getDefaultProps != "function" || F.getDefaultProps.isReactClassApproved || S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Te(K, G, F, pe, ne, fe) {
    var oe = function(te) {
      return typeof te == "string" || typeof te == "function" || te === en.Fragment || te === r || te === v || te === a || te === s || te === u || te === g || typeof te == "object" && te !== null && (te.$$typeof === h || te.$$typeof === d || te.$$typeof === l || te.$$typeof === c || te.$$typeof === o || te.$$typeof === p || te.$$typeof === m || te[0] === y);
    }(K);
    if (!oe) {
      var se = "";
      (K === void 0 || typeof K == "object" && K !== null && Object.keys(K).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Le, Ke = function(te) {
        return te !== void 0 ? `

Check your code at ` + te.fileName.replace(/^.*[\\\/]/, "") + ":" + te.lineNumber + "." : "";
      }(ne);
      se += Ke || U(), K === null ? Le = "null" : Array.isArray(K) ? Le = "array" : K !== void 0 && K.$$typeof === t ? (Le = "<" + (D(K.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof K, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, se);
    }
    var we = V(K, G, F, ne, fe);
    if (we == null)
      return we;
    if (oe) {
      var xe = G.children;
      if (xe !== void 0)
        if (pe)
          if (Array.isArray(xe)) {
            for (var le = 0; le < xe.length; le++)
              he(xe[le], K);
            Object.freeze && Object.freeze(xe);
          } else
            S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          he(xe, K);
    }
    return K === en.Fragment ? function(te) {
      for (var Fe = Object.keys(te.props), ce = 0; ce < Fe.length; ce++) {
        var Ne = Fe[ce];
        if (Ne !== "children" && Ne !== "key") {
          I(te), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), I(null);
          break;
        }
      }
      te.ref !== null && (I(te), S("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
    }(we) : Ce(we), we;
  }
  var ke = function(K, G, F) {
    return Te(K, G, F, !1);
  }, ee = function(K, G, F) {
    return Te(K, G, F, !0);
  };
  en.jsx = ke, en.jsxs = ee;
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
} }, hy = R.createContext({ getTooltipData: () => my });
function Yc(e = "DEFAULT_TOOLTIP_ID") {
  return R.useContext(hy).getTooltipData(e);
}
const Go = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: r = 10, strategy: l = "absolute", middlewares: c = [oy(Number(r)), ly(), sy({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const o = c;
  return n ? (o.push({ name: "arrow", options: s = { element: n, padding: 5 }, async fn(u) {
    const { element: d, padding: h = 0 } = s || {}, { x: m, y, placement: p, rects: v, platform: g } = u;
    if (d == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const f = zc(h), b = { x: m, y }, x = wa(p), S = sl(x), w = await g.getDimensions(d), A = x === "y" ? "top" : "left", D = x === "y" ? "bottom" : "right", T = v.reference[S] + v.reference[x] - b[x] - v.floating[S], z = b[x] - v.reference[x], $ = await (g.getOffsetParent == null ? void 0 : g.getOffsetParent(d));
    let C = $ ? x === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0;
    C === 0 && (C = v.floating[S]);
    const k = T / 2 - z / 2, _ = f[A], O = C - w[S] - f[D], N = C / 2 - w[S] / 2 + k, P = Pr(_, N, O), V = ka(p) != null && N != P && v.reference[S] / 2 - (N < _ ? f[A] : f[D]) - w[S] / 2 < 0;
    return { [x]: b[x] - (V ? N < _ ? _ - N : O - N : 0), data: { [x]: P, centerOffset: N - P } };
  } }), Xo(e, t, { placement: a, strategy: l, middleware: o }).then(({ x: u, y: d, placement: h, middlewareData: m }) => {
    var y, p;
    const v = { left: `${u}px`, top: `${d}px` }, { x: g, y: f } = (y = m.arrow) !== null && y !== void 0 ? y : { x: 0, y: 0 };
    return { tooltipStyles: v, tooltipArrowStyles: { left: g != null ? `${g}px` : "", top: f != null ? `${f}px` : "", right: "", bottom: "", [(p = { top: "bottom", right: "left", bottom: "top", left: "right" }[h.split("-")[0]]) !== null && p !== void 0 ? p : "bottom"]: "-4px" } };
  })) : Xo(e, t, { placement: "bottom", strategy: l, middleware: o }).then(({ x: u, y: d }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {} }));
  var s;
};
var hn = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const es = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: r, anchorSelect: l, place: c = "top", offset: o = 10, events: s = ["hover"], positionStrategy: u = "absolute", middlewares: d, wrapper: h, children: m = null, delayShow: y = 0, delayHide: p = 0, float: v = !1, noArrow: g = !1, clickable: f = !1, closeOnEsc: b = !1, style: x, position: S, afterShow: w, afterHide: A, content: D, html: T, isOpen: z, setIsOpen: $, activeAnchor: C, setActiveAnchor: k }) => {
  const _ = R.useRef(null), O = R.useRef(null), N = R.useRef(null), P = R.useRef(null), [V, q] = R.useState({}), [j, I] = R.useState({}), [Z, U] = R.useState(!1), [ue, de] = R.useState(!1), he = R.useRef(!1), Ce = R.useRef(null), { anchorRefs: Te, setActiveAnchor: ke } = Yc(e), ee = R.useRef(!1), [K, G] = R.useState([]), F = R.useRef(!1);
  R.useLayoutEffect(() => (F.current = !0, () => {
    F.current = !1;
  }), []), R.useEffect(() => {
    if (!Z) {
      const ce = setTimeout(() => {
        de(!1);
      }, 150);
      return () => {
        clearTimeout(ce);
      };
    }
    return () => null;
  }, [Z]);
  const pe = (ce) => {
    F.current && (ce && de(!0), setTimeout(() => {
      F.current && ($ == null || $(ce), z === void 0 && U(ce));
    }, 10));
  };
  R.useEffect(() => {
    if (z === void 0)
      return () => null;
    z && de(!0);
    const ce = setTimeout(() => {
      U(z);
    }, 10);
    return () => {
      clearTimeout(ce);
    };
  }, [z]), R.useEffect(() => {
    Z !== he.current && (he.current = Z, Z ? w == null || w() : A == null || A());
  }, [Z]);
  const ne = (ce = p) => {
    P.current && clearTimeout(P.current), P.current = setTimeout(() => {
      ee.current || pe(!1);
    }, ce);
  }, fe = (ce) => {
    var Ne;
    if (!ce)
      return;
    y ? (N.current && clearTimeout(N.current), N.current = setTimeout(() => {
      pe(!0);
    }, y)) : pe(!0);
    const Se = (Ne = ce.currentTarget) !== null && Ne !== void 0 ? Ne : ce.target;
    k(Se), ke({ current: Se }), P.current && clearTimeout(P.current);
  }, oe = () => {
    f ? ne(p || 100) : p ? ne() : pe(!1), N.current && clearTimeout(N.current);
  }, se = ({ x: ce, y: Ne }) => {
    Go({ place: c, offset: o, elementReference: { getBoundingClientRect: () => ({ x: ce, y: Ne, width: 0, height: 0, top: Ne, left: ce, right: ce, bottom: Ne }) }, tooltipReference: _.current, tooltipArrowReference: O.current, strategy: u, middlewares: d }).then((Se) => {
      Object.keys(Se.tooltipStyles).length && q(Se.tooltipStyles), Object.keys(Se.tooltipArrowStyles).length && I(Se.tooltipArrowStyles);
    });
  }, Le = (ce) => {
    if (!ce)
      return;
    const Ne = ce, Se = { x: Ne.clientX, y: Ne.clientY };
    se(Se), Ce.current = Se;
  }, Ke = (ce) => {
    fe(ce), p && ne();
  }, we = (ce) => {
    const Ne = document.querySelector(`[id='${r}']`);
    Ne != null && Ne.contains(ce.target) || K.some((Se) => Se.contains(ce.target)) || pe(!1);
  }, xe = (ce) => {
    ce.key === "Escape" && pe(!1);
  }, le = Jo(fe, 50), te = Jo(oe, 50);
  R.useEffect(() => {
    var ce, Ne;
    const Se = new Set(Te);
    K.forEach((et) => {
      Se.add({ current: et });
    });
    const B = document.querySelector(`[id='${r}']`);
    B && Se.add({ current: B }), b && window.addEventListener("keydown", xe);
    const _e = [];
    s.find((et) => et === "click") && (window.addEventListener("click", we), _e.push({ event: "click", listener: Ke })), s.find((et) => et === "hover") && (_e.push({ event: "mouseenter", listener: le }, { event: "mouseleave", listener: te }, { event: "focus", listener: le }, { event: "blur", listener: te }), v && _e.push({ event: "mousemove", listener: Le }));
    const Ge = () => {
      ee.current = !0;
    }, nt = () => {
      ee.current = !1, oe();
    };
    return f && ((ce = _.current) === null || ce === void 0 || ce.addEventListener("mouseenter", Ge), (Ne = _.current) === null || Ne === void 0 || Ne.addEventListener("mouseleave", nt)), _e.forEach(({ event: et, listener: ft }) => {
      Se.forEach((at) => {
        var Je;
        (Je = at.current) === null || Je === void 0 || Je.addEventListener(et, ft);
      });
    }), () => {
      var et, ft;
      s.find((at) => at === "click") && window.removeEventListener("click", we), b && window.removeEventListener("keydown", xe), f && ((et = _.current) === null || et === void 0 || et.removeEventListener("mouseenter", Ge), (ft = _.current) === null || ft === void 0 || ft.removeEventListener("mouseleave", nt)), _e.forEach(({ event: at, listener: Je }) => {
        Se.forEach((Et) => {
          var Xt;
          (Xt = Et.current) === null || Xt === void 0 || Xt.removeEventListener(at, Je);
        });
      });
    };
  }, [ue, Te, K, b, s]), R.useEffect(() => {
    let ce = l ?? "";
    !ce && e && (ce = `[data-tooltip-id='${e}']`);
    const Ne = new MutationObserver((Se) => {
      const B = [];
      Se.forEach((_e) => {
        if (_e.type === "attributes" && _e.attributeName === "data-tooltip-id" && _e.target.getAttribute("data-tooltip-id") === e && B.push(_e.target), _e.type === "childList" && (C && [..._e.removedNodes].some((Ge) => !!Ge.contains(C) && (de(!1), pe(!1), k(null), !0)), ce))
          try {
            const Ge = [..._e.addedNodes].filter((nt) => nt.nodeType === 1);
            B.push(...Ge.filter((nt) => nt.matches(ce))), B.push(...Ge.flatMap((nt) => [...nt.querySelectorAll(ce)]));
          } catch {
          }
      }), B.length && G((_e) => [..._e, ...B]);
    });
    return Ne.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Ne.disconnect();
    };
  }, [e, l, C]), R.useEffect(() => {
    S ? se(S) : v ? Ce.current && se(Ce.current) : Go({ place: c, offset: o, elementReference: C, tooltipReference: _.current, tooltipArrowReference: O.current, strategy: u, middlewares: d }).then((ce) => {
      F.current && (Object.keys(ce.tooltipStyles).length && q(ce.tooltipStyles), Object.keys(ce.tooltipArrowStyles).length && I(ce.tooltipArrowStyles));
    });
  }, [Z, C, D, T, c, o, u, S]), R.useEffect(() => {
    var ce;
    const Ne = document.querySelector(`[id='${r}']`), Se = [...K, Ne];
    C && Se.includes(C) || k((ce = K[0]) !== null && ce !== void 0 ? ce : Ne);
  }, [r, K, C]), R.useEffect(() => () => {
    N.current && clearTimeout(N.current), P.current && clearTimeout(P.current);
  }, []), R.useEffect(() => {
    let ce = l;
    if (!ce && e && (ce = `[data-tooltip-id='${e}']`), ce)
      try {
        const Ne = Array.from(document.querySelectorAll(ce));
        G(Ne);
      } catch {
        G([]);
      }
  }, [e, l]);
  const Fe = !!(T || D || m) && Z && Object.keys(V).length > 0;
  return ue ? Sn.exports.jsxs(h, { id: e, role: "tooltip", className: Zo("react-tooltip", hn.tooltip, hn[a], t, { [hn.show]: Fe, [hn.fixed]: u === "fixed", [hn.clickable]: f }), style: { ...x, ...V }, ref: _, children: [T && Sn.exports.jsx(fy, { content: T }) || D || m, Sn.exports.jsx(h, { className: Zo("react-tooltip-arrow", hn.arrow, n, { [hn["no-arrow"]]: g }), style: j, ref: O })] }) : null;
}, py = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: r, className: l, classNameArrow: c, variant: o = "dark", place: s = "top", offset: u = 10, wrapper: d = "div", children: h = null, events: m = ["hover"], positionStrategy: y = "absolute", middlewares: p, delayShow: v = 0, delayHide: g = 0, float: f = !1, noArrow: b = !1, clickable: x = !1, closeOnEsc: S = !1, style: w, position: A, isOpen: D, setIsOpen: T, afterShow: z, afterHide: $ }) => {
  const [C, k] = R.useState(a), [_, O] = R.useState(r), [N, P] = R.useState(s), [V, q] = R.useState(o), [j, I] = R.useState(u), [Z, U] = R.useState(v), [ue, de] = R.useState(g), [he, Ce] = R.useState(f), [Te, ke] = R.useState(d), [ee, K] = R.useState(m), [G, F] = R.useState(y), [pe, ne] = R.useState(null), { anchorRefs: fe, activeAnchor: oe } = Yc(e), se = (we) => we == null ? void 0 : we.getAttributeNames().reduce((xe, le) => {
    var te;
    return le.startsWith("data-tooltip-") && (xe[le.replace(/^data-tooltip-/, "")] = (te = we == null ? void 0 : we.getAttribute(le)) !== null && te !== void 0 ? te : null), xe;
  }, {}), Le = (we) => {
    const xe = { place: (le) => {
      var te;
      P((te = le) !== null && te !== void 0 ? te : s);
    }, content: (le) => {
      k(le ?? a);
    }, html: (le) => {
      O(le ?? r);
    }, variant: (le) => {
      var te;
      q((te = le) !== null && te !== void 0 ? te : o);
    }, offset: (le) => {
      I(le === null ? u : Number(le));
    }, wrapper: (le) => {
      var te;
      ke((te = le) !== null && te !== void 0 ? te : d);
    }, events: (le) => {
      const te = le == null ? void 0 : le.split(" ");
      K(te ?? m);
    }, "position-strategy": (le) => {
      var te;
      F((te = le) !== null && te !== void 0 ? te : y);
    }, "delay-show": (le) => {
      U(le === null ? v : Number(le));
    }, "delay-hide": (le) => {
      de(le === null ? g : Number(le));
    }, float: (le) => {
      Ce(le === null ? f : !!le);
    } };
    Object.values(xe).forEach((le) => le(null)), Object.entries(we).forEach(([le, te]) => {
      var Fe;
      (Fe = xe[le]) === null || Fe === void 0 || Fe.call(xe, te);
    });
  };
  R.useEffect(() => {
    k(a);
  }, [a]), R.useEffect(() => {
    O(r);
  }, [r]), R.useEffect(() => {
    P(s);
  }, [s]), R.useEffect(() => {
    var we;
    const xe = new Set(fe);
    let le = n;
    if (!le && e && (le = `[data-tooltip-id='${e}']`), le)
      try {
        document.querySelectorAll(le).forEach((Se) => {
          xe.add({ current: Se });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const te = document.querySelector(`[id='${t}']`);
    if (te && xe.add({ current: te }), !xe.size)
      return () => null;
    const Fe = (we = pe ?? te) !== null && we !== void 0 ? we : oe.current, ce = new MutationObserver((Se) => {
      Se.forEach((B) => {
        var _e;
        if (!Fe || B.type !== "attributes" || !(!((_e = B.attributeName) === null || _e === void 0) && _e.startsWith("data-tooltip-")))
          return;
        const Ge = se(Fe);
        Le(Ge);
      });
    }), Ne = { attributes: !0, childList: !1, subtree: !1 };
    if (Fe) {
      const Se = se(Fe);
      Le(Se), ce.observe(Fe, Ne);
    }
    return () => {
      ce.disconnect();
    };
  }, [fe, oe, pe, t, n]);
  const Ke = { id: e, anchorId: t, anchorSelect: n, className: l, classNameArrow: c, content: C, html: _, place: N, variant: V, offset: j, wrapper: Te, events: ee, positionStrategy: G, middlewares: p, delayShow: Z, delayHide: ue, float: he, noArrow: b, clickable: x, closeOnEsc: S, style: w, position: A, isOpen: D, setIsOpen: T, afterShow: z, afterHide: $, activeAnchor: pe, setActiveAnchor: (we) => ne(we) };
  return h ? Sn.exports.jsx(es, { ...Ke, children: h }) : Sn.exports.jsx(es, { ...Ke });
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
  var w;
  const { xScale: t, yScale: n, yMax: a, xMax: r, handleTooltipMouseOver: l, handleTooltipMouseOff: c, isDebug: o, children: s } = e;
  let { transformedData: u, config: d, handleLineType: h, parseDate: m, formatDate: y, formatNumber: p, seriesHighlight: v, colorScale: g, rawData: f } = R.useContext(ze);
  const b = d.brush.active && ((w = d.brush.data) != null && w.length) ? d.brush.data : u;
  if (!b)
    return;
  const x = (A) => d.xAxis.type === "date" ? t(m(A[d.xAxis.dataKey], !1)) : t(A[d.xAxis.dataKey]), S = (A, D, T = void 0) => n(A[T.dataKey]);
  return b && /* @__PURE__ */ i.createElement("svg", null, /* @__PURE__ */ i.createElement(Rt, { component: "AreaChart" }, /* @__PURE__ */ i.createElement(be, { className: "area-chart", key: "area-wrapper", left: Number(d.yAxis.size) }, (d.runtime.areaSeriesKeys || d.series).map((A, D) => {
    let T = b.map((k) => ({
      [d.xAxis.dataKey]: k[d.xAxis.dataKey],
      [A.dataKey]: k[A.dataKey]
    })), z = ul[A.lineType], $ = d.legend.behavior === "highlight" && v.length > 0 && v.indexOf(A.dataKey) === -1, C = d.legend.behavior === "highlight" || v.length === 0 || v.indexOf(A.dataKey) !== -1;
    return d.xAxis.type === "date" ? b.map((k) => t(m(k[d.xAxis.dataKey]))) : b.map((k) => t(k[d.xAxis.dataKey])), /* @__PURE__ */ i.createElement(i.Fragment, { key: D }, /* @__PURE__ */ i.createElement(
      kn,
      {
        data: T,
        x: (k) => x(k),
        y: (k) => S(k, D, A),
        stroke: C ? g ? g(d.runtime.seriesLabels ? d.runtime.seriesLabels[A.dataKey] : A.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: z,
        strokeDasharray: A.type ? h(A.type) : 0
      }
    ), /* @__PURE__ */ i.createElement(
      Bd,
      {
        key: "area-chart",
        fill: C ? g ? g(d.runtime.seriesLabels ? d.runtime.seriesLabels[A.dataKey] : A.dataKey) : "#000" : "transparent",
        fillOpacity: $ ? 0.25 : 0.5,
        data: T,
        x: (k) => x(k),
        y: (k) => S(k, D, A),
        yScale: n,
        curve: z,
        strokeDasharray: A.type ? h(A.type) : 0
      }
    ));
  }), /* @__PURE__ */ i.createElement(Pt, { width: Number(r), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (A) => l(A, f), onMouseLeave: c }))));
}, gy = R.memo(yy), Ei = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, xy = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: r, handleTooltipMouseOff: l, isDebug: c }) => {
  var v;
  let { transformedData: o, config: s, seriesHighlight: u, colorScale: d, rawData: h } = R.useContext(ze);
  const m = s.brush.active && ((v = s.brush.data) != null && v.length) ? s.brush.data : o;
  if (!m)
    return;
  const y = (g) => {
    if (s.xAxis.type === "categorical")
      return e(g);
    if (s.xAxis.type === "date") {
      let f = new Date(g);
      return e(f);
    }
  }, p = 2;
  return m && /* @__PURE__ */ i.createElement("svg", { height: Number(n) }, /* @__PURE__ */ i.createElement(Rt, { component: "AreaChartStacked" }, /* @__PURE__ */ i.createElement(be, { className: "area-chart", key: "area-wrapper", left: Number(s.yAxis.size) + p / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ i.createElement(
    jd,
    {
      data: m,
      keys: s.runtime.areaSeriesKeys.map((g) => g.dataKey) || s.series.map((g) => g.dataKey),
      x0: (g) => y(g.data[s.xAxis.dataKey]),
      y0: (g) => Number(t(g[0])),
      y1: (g) => Number(t(g[1])),
      curve: ul[Ei[s.stackedAreaChartLineType]]
    },
    ({ stacks: g, path: f }) => g.map((b, x) => {
      let S = s.legend.behavior === "highlight" && u.length > 0 && u.indexOf(b.key) === -1, w = s.legend.behavior === "highlight" || u.length === 0 || u.indexOf(b.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          "path",
          {
            key: b.key,
            d: f(b) || "",
            strokeWidth: 2,
            stroke: w ? d ? d(s.runtime.seriesLabels ? s.runtime.seriesLabels[b.key] : b.key) : "#000" : "transparent",
            fillOpacity: S ? 0.25 : 0.5,
            fill: w ? d ? d(s.runtime.seriesLabels ? s.runtime.seriesLabels[b.key] : b.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ i.createElement(Pt, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (g) => r(g, h), onMouseLeave: l }))));
}, vy = R.memo(xy), Ca = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: r, formatDate: l } = R.useContext(ze), { orientation: c } = e, o = c === "horizontal", s = 1, u = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, d = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, h = e.yAxis.labelPlacement === "Below Bar", m = e.yAxis.displayNumbersOnBar, y = e.orientation === "horizontal" ? "yAxis" : "xAxis", p = e.barStyle === "rounded", v = e.visualizationSubType === "stacked", g = e.tipRounding, f = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", b = e.runtime.seriesKeys.length, x = { small: 16, medium: 18, large: 20 }, S = Object.keys(e.runtime.seriesLabels).length > 1;
  return R.useEffect(() => {
    c === "horizontal" && !e.yAxis.labelPlacement && a({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, a]), R.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && a({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), R.useEffect(() => {
    e.visualizationSubType === "horizontal" && a({
      ...e,
      orientation: "horizontal"
    });
  }, []), R.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && a({ ...e, isLollipopChart: !0 }), (p || e.barStyle === "flat") && a({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    isHorizontal: o,
    barBorderWidth: s,
    lollipopBarWidth: u,
    lollipopShapeSize: d,
    isLabelBelowBar: h,
    displayNumbersOnBar: m,
    section: y,
    isRounded: p,
    isStacked: v,
    tipRounding: g,
    radius: f,
    stackCount: b,
    fontSize: x,
    hasMultipleSeries: S,
    applyRadius: ($) => {
      if ($ == null || !p)
        return {};
      let C = {};
      return (v && $ + 1 === b || !v) && (C = o ? { borderRadius: `0 ${f}  ${f}  0` } : { borderRadius: `${f} ${f} 0 0` }), !v && $ === -1 && (C = o ? { borderRadius: `${f} 0  0 ${f} ` } : { borderRadius: ` 0  0 ${f} ${f}` }), g === "full" && v && $ === 0 && b > 1 && (C = o ? { borderRadius: `${f} 0 0 ${f}` } : { borderRadius: `0 0 ${f} ${f}` }), g === "full" && (v && $ === 0 && b === 1 || !v) && (C = { borderRadius: f }), C;
    },
    updateBars: ($) => {
      if (e.visualizationType !== "Bar" && !o)
        return $;
      const C = [...$];
      let k;
      const _ = {
        stacked: e.barHeight,
        lollipop: u
      };
      v ? k = _.stacked : k = _[e.isLollipopChart ? "lollipop" : "stacked"] * b;
      const O = h ? x[e.fontSize] * 1.2 : 0;
      let N = Number(e.barSpace), P = C.length * (k + O + N);
      return o && (e.heights.horizontal = P), C.map((V, q) => {
        let j = 0;
        return V.index !== 0 && (j = (k + N + O) * q), { ...V, y: j, height: k };
      });
    },
    assignColorsToValues: ($, C, k) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return k;
      const _ = e.customColors ?? t[e.palette], O = n.map((q) => q[e.legend.colorCode]);
      let N = /* @__PURE__ */ new Map(), P = [];
      for (let q = 0; q < O.length; q++)
        N.has(O[q]) || N.set(O[q], _[N.size % _.length]), P.push(N.get(O[q]));
      for (; P.length < $; )
        P = P.concat(P);
      return P[C];
    },
    getHighlightedBarColorByValue: ($) => {
      const C = e == null ? void 0 : e.highlightedBarValues.filter((k) => {
        if (k.value)
          return e.xAxis.type === "date" ? l(r(k.value)) === $ : k.value === $;
      })[0];
      return C != null && C.color ? C.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: ($) => {
      const C = e == null ? void 0 : e.highlightedBarValues.filter((k) => {
        if (k.value)
          return e.xAxis.type === "date" ? l(r(k.value)) === $ : k.value === $;
      })[0];
      return C != null && C.color ? C : !1;
    }
  };
}, by = (e) => {
  var x;
  const { xScale: t, yScale: n, xMax: a, yMax: r } = e, { transformedData: l, colorScale: c, seriesHighlight: o, config: s, formatNumber: u, formatDate: d, parseDate: h, setSharedFilter: m } = R.useContext(ze), { isHorizontal: y, barBorderWidth: p, hasMultipleSeries: v, applyRadius: g } = Ca(), { orientation: f } = s, b = s.brush.active && ((x = s.brush.data) != null && x.length) ? s.brush.data : l;
  return s.visualizationSubType === "stacked" && !y && /* @__PURE__ */ i.createElement(Qd, { data: b, keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys, x: (S) => S[s.runtime.xAxis.dataKey], xScale: t, yScale: n, color: c }, (S) => S.reverse().map(
    (w) => w.bars.map((A) => {
      let D = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(A.key) === -1, T = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(A.key) !== -1, z = a / w.bars.length, $ = z * (s.barThickness || 0.8), C = z * (1 - (s.barThickness || 0.8)) / 2;
      const k = s.runtime.xAxis.type === "date" ? d(h(b[A.index][s.runtime.xAxis.dataKey])) : b[A.index][s.runtime.xAxis.dataKey], _ = u(A.bar ? A.bar.data[A.key] : 0, "left");
      if (!_)
        return /* @__PURE__ */ i.createElement(i.Fragment, null);
      const O = g(w.index);
      let N = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${_}` : _;
      const P = s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${k}` : k;
      v || (N = s.isLegendValue ? `${A.key}: ${_}` : s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${_}` : _);
      const {
        legend: { showLegendValuesTooltip: V },
        runtime: { seriesLabels: q }
      } = s, j = `<div>
                    <p class="tooltip-heading"><strong>${P}</strong></p>
                    ${V && q && v ? `${q[A.key] || ""}<br/>` : ""}
                    ${N}<br />
                      </div>`;
      return /* @__PURE__ */ i.createElement(be, { key: `${w.index}--${A.index}--${f}` }, /* @__PURE__ */ i.createElement("style", null, `
                           #barStack${w.index}-${A.index} rect,
                           #barStack${w.index}-${A.index} foreignObject div{
                            animation-delay: ${w.index * 0.5}s;
                            transform-origin: ${$ / 2}px ${A.y + A.height}px
                          }
                        `), /* @__PURE__ */ i.createElement(be, { key: `bar-stack-${w.index}-${A.index}`, id: `barStack${w.index}-${A.index}`, className: "stack vertical" }, /* @__PURE__ */ i.createElement($e, { display: s.labels && T ? "block" : "none", opacity: D ? 0.5 : 1, x: z * A.index + C, y: A.y - 5, fill: "#000", textAnchor: "middle" }, _), /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          key: `bar-stack-${w.index}-${A.index}`,
          x: z * A.index + C,
          y: A.y,
          width: $,
          height: A.height,
          display: T ? "block" : "none",
          "data-tooltip-html": j,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (I) => {
            I.preventDefault(), m && (A[s.xAxis.dataKey] = k, m(s.uid, A));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { opacity: D ? 0.5 : 1, width: $, height: A.height, background: A.color, border: `${s.barHasBorder === "true" ? p : 0}px solid #333`, ...O } })
      )));
    })
  ));
}, Ey = (e) => {
  const { xScale: t, yScale: n, xMax: a, yMax: r } = e, { transformedData: l, colorScale: c, seriesHighlight: o, config: s, formatNumber: u, formatDate: d, parseDate: h, setSharedFilter: m, animatedChart: y, getTextWidth: p } = R.useContext(ze), { isHorizontal: v, barBorderWidth: g, hasMultipleSeries: f, applyRadius: b, updateBars: x, isLabelBelowBar: S, displayNumbersOnBar: w, fontSize: A } = Ca(), { orientation: D, visualizationSubType: T } = s;
  return s.visualizationSubType === "stacked" && v && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Gd, { data: l, keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys, height: r, y: (z) => z[s.runtime.yAxis.dataKey], xScale: t, yScale: n, color: c, offset: "none" }, (z) => z.map(
    ($) => x($.bars).map((C, k) => {
      let _ = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(C.key) === -1, O = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(C.key) !== -1;
      s.barHeight = Number(s.barHeight);
      let N = "#000000";
      const P = u(l[C.index][C.key], "left"), V = s.runtime.yAxis.type === "date" ? d(h(l[C.index][s.runtime.originalXAxis.dataKey])) : l[C.index][s.runtime.originalXAxis.dataKey], q = b($.index);
      let j = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${V}` : V, I = s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${P}` : P, Z = p(P, `normal ${A[s.fontSize]}px sans-serif`);
      f || (I = s.isLegendValue ? `${C.key}: ${P}` : s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${P}` : I);
      const U = `<div>
                    ${s.legend.showLegendValuesTooltip && s.runtime.seriesLabels && f ? `${s.runtime.seriesLabels[C.key] || ""}<br/>` : ""}
                    ${j}<br />
                    ${I}
                      </div>`;
      return Yt.contrast(N, C.color) < 4.9 && (N = "#FFFFFF"), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                         #barStack${$.index}-${C.index} rect,
                         #barStack${$.index}-${C.index} foreignObject div{
                          animation-delay: ${$.index * 0.5}s;
                          transform-origin: ${C.x}px
                        }
                      `), /* @__PURE__ */ i.createElement(be, { key: k, id: `barStack${$.index}-${C.index}`, className: "stack horizontal" }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          key: `barstack-horizontal-${$.index}-${C.index}-${k}`,
          className: `animated-chart group ${y ? "animated" : ""}`,
          x: C.x,
          y: C.y,
          width: C.width,
          height: C.height,
          opacity: _ ? 0.5 : 1,
          display: O ? "block" : "none",
          "data-tooltip-html": U,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (ue) => {
            ue.preventDefault(), m && (C[s.xAxis.dataKey] = P, m(s.uid, C));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { width: C.width, height: C.height, background: C.color, border: `${s.barHasBorder === "true" ? g : 0}px solid #333`, ...q } })
      ), D === "horizontal" && T === "stacked" && S && $.index === 0 && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        $e,
        {
          x: `${C.x + (s.isLollipopChart ? 15 : 5)}`,
          y: C.y + C.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        V
      ), w && Z < C.width && /* @__PURE__ */ i.createElement(
        $e,
        {
          display: O ? "block" : "none",
          x: C.x + $.bars[C.index].width / 2,
          y: C.y + C.height / 2,
          fill: N,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        P
      )));
    })
  )));
}, Di = (e, t) => {
  var v;
  const { formatDate: n, parseDate: a } = R.useContext(ze);
  let r = [], l = "", c = [], o = [];
  ((v = e.series) == null ? void 0 : v.length) > 0 && e.data ? (r = e.series[0], l = e.series[0].dataKey, c = e.highlightedBarValues, o = e.data.map((g) => g[e.xAxis.dataKey])) : (r = [], l = "", c = [], o = []);
  const s = (g, f) => {
    const b = [...e.highlightedBarValues];
    b[f].borderWidth = g.target.value, t({
      ...e,
      highlightedBarValues: b
    });
  }, u = (g, f) => {
    g.preventDefault();
    const b = [...e.highlightedBarValues];
    b[f].value = g.target.value, b[f].dataKey = l, t({
      ...e,
      highlightedBarValues: b
    });
  }, d = (g, f) => {
    g.preventDefault();
    const b = [...e.highlightedBarValues];
    b.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: b
    });
  }, h = (g, f) => {
    g.preventDefault();
    const b = [...e.highlightedBarValues];
    b.splice(f, 1), t({
      ...e,
      highlightedBarValues: b
    });
  }, m = (g, f) => {
    const b = [...e.highlightedBarValues];
    b[f].color = g.target.value, t({
      ...e
    });
  }, y = (g, f) => {
    const b = [...e.highlightedBarValues];
    b[f].legendLabel = g.target.value, t({
      ...e,
      copyOfHighlightedBarValues: b
    });
  }, p = () => {
  };
  return p.checkFontColor = (g, f, b) => {
    if (e.xAxis.type === "date") {
      if (p.formatDates(f).includes(g))
        return "#000";
    } else if (f.includes(g))
      return "#000";
    return b;
  }, p.formatDates = (g) => g.map((f) => f ? n(a(f)) : !1), p.findDuplicates = (g) => {
    const f = {};
    return g.filter((x) => {
      const { legendLabel: S } = x;
      return f[S] ? !1 : (f[S] = !0, !0);
    });
  }, {
    HighLightedBarUtils: p,
    highlightedSeries: r,
    highlightedSeriesKey: l,
    highlightedBarValues: c,
    highlightedSeriesValues: o,
    handleUpdateHighlightedBar: u,
    handleAddNewHighlightedBar: d,
    handleRemoveHighlightedBar: h,
    handleUpdateHighlightedBarColor: m,
    handleHighlightedBarLegendLabel: y,
    handleUpdateHighlightedBorderWidth: s
  };
}, Ay = (e) => {
  var O;
  const { xScale: t, yScale: n, xMax: a, yMax: r, seriesScale: l } = e, {
    colorScale: c,
    config: o,
    formatDate: s,
    formatNumber: u,
    getXAxisData: d,
    getYAxisData: h,
    isNumber: m,
    parseDate: y,
    seriesHighlight: p,
    setSharedFilter: v,
    transformedData: g,
    dashboardConfig: f
  } = R.useContext(ze), { barBorderWidth: b, hasMultipleSeries: x, applyRadius: S, updateBars: w, assignColorsToValues: A, section: D, lollipopBarWidth: T, lollipopShapeSize: z, getHighlightedBarColorByValue: $, getHighlightedBarByValue: C } = Ca(), { HighLightedBarUtils: k } = Di(o), _ = o.brush.active && ((O = o.brush.data) != null && O.length) ? o.brush.data : g;
  return o.visualizationSubType !== "stacked" && (o.visualizationType === "Bar" || o.visualizationType === "Combo") && o.orientation === "vertical" && /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement(
    Hs,
    {
      data: _,
      keys: o.runtime.barSeriesKeys || o.runtime.seriesKeys,
      height: r,
      x0: (N) => N[o.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: l,
      yScale: n,
      color: () => ""
    },
    (N) => w(N).map((P, V) => /* @__PURE__ */ i.createElement(be, { className: `bar-group-${P.index}-${P.x0}--${V} ${o.orientation}`, key: `bar-group-${P.index}-${P.x0}--${V}`, id: `bar-group-${P.index}-${P.x0}--${V}`, left: a / N.length * P.index }, P.bars.map((q, j) => {
      const I = o.useLogScale ? 0.1 : 0;
      let Z = o.highlightedBarValues.map((Se) => Se.value).filter((Se) => Se !== void 0);
      Z = o.xAxis.type === "date" ? k.formatDates(Z) : Z;
      let U = o.legend.behavior === "highlight" && p.length > 0 && p.indexOf(q.key) === -1, ue = o.legend.behavior === "highlight" || p.length === 0 || p.indexOf(q.key) !== -1, de = Math.abs(n(q.value) - n(I)), he = q.value >= 0 && m(q.value) ? q.y : n(0), Ce = a / N.length * (o.barThickness || 0.8), Te = a / N.length * (1 - (o.barThickness || 0.8)) / 2;
      o.isLollipopChart && (Te = a / N.length / 2 - T / 2);
      let ke = o.isLollipopChart ? T : Ce / P.bars.length, ee = u(q.value, "left"), K = o.runtime[D].type === "date" ? s(y(_[P.index][o.runtime.originalXAxis.dataKey])) : _[P.index][o.runtime.originalXAxis.dataKey];
      const G = q.value < 0 ? -1 : j, F = S(G);
      let pe = o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${ee}` : ee, ne = o.runtime.xAxis.label ? `${o.runtime.xAxis.label}: ${K}` : K;
      x || (pe = o.isLegendValue ? `${q.key}: ${ee}` : o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${ee}` : ee);
      const fe = `<ul>
                  ${o.legend.showLegendValuesTooltip && o.runtime.seriesLabels && x ? `${o.runtime.seriesLabels[q.key] || ""}<br/>` : ""}
                  <li class="tooltip-heading">${pe}</li>
                  <li class="tooltip-body">${ne}</li>
                    </li></ul>`;
      let oe = "#000000";
      oe = k.checkFontColor(ee, Z, oe);
      let se = o.runtime.seriesLabels && o.runtime.seriesLabels[q.key] ? c(o.runtime.seriesLabels[q.key]) : c(q.key);
      se = A(N.length, P.index, se);
      const Le = o.isLollipopChart && o.lollipopColorStyle === "regular", Ke = o.isLollipopChart && o.lollipopColorStyle === "two-tone", we = Z == null ? void 0 : Z.includes(K), xe = $(K), le = C(K), te = we ? xe : o.barHasBorder === "true" ? "#000" : "transparent", Fe = we ? le.borderWidth : o.isLollipopChart ? 0 : o.barHasBorder === "true" ? b : 0, Ne = {
        background: (() => f && f.dashboard.sharedFilters ? f.dashboard.sharedFilters.map((Se) => Se.setBy === o.uid ? Se.resetLabel === Se.active || Se.active === g[P.index][o.xAxis.dataKey] ? se : "#f2f2f2" : Le ? se : Ke ? Yt(se).brighten(1) : we ? "transparent" : se) : Le ? se : Ke ? Yt(se).brighten(1) : we ? "transparent" : se)(),
        borderColor: te,
        borderStyle: "solid",
        borderWidth: Fe,
        width: ke,
        height: de,
        ...F,
        cursor: f ? "pointer" : "default"
      };
      return /* @__PURE__ */ i.createElement(be, { key: `${P.index}--${j}` }, /* @__PURE__ */ i.createElement("style", null, `
                        .linear #barGroup${P.index} div,
                        .Combo #barGroup${P.index} div {
                          transform-origin: 0 ${he + de}px;
                        }
                      `), /* @__PURE__ */ i.createElement(be, { key: `bar-sub-group-${P.index}-${P.x0}-${he}--${j}` }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          id: `barGroup${P.index}`,
          key: `bar-group-bar-${P.index}-${q.index}-${q.value}-${q.key}`,
          x: ke * q.index + Te,
          y: he,
          width: ke,
          height: de,
          opacity: U ? 0.5 : 1,
          display: ue ? "block" : "none",
          "data-tooltip-html": fe,
          "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
          onClick: (Se) => {
            Se.preventDefault(), v && (q[o.xAxis.dataKey] = K, v(o.uid, q));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: Ne })
      ), /* @__PURE__ */ i.createElement($e, { display: o.labels && ue ? "block" : "none", opacity: U ? 0.5 : 1, x: ke * (q.index + 0.5) + Te, y: he - 5, fill: oe, textAnchor: "middle" }, ee), o.isLollipopChart && o.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: ke * (P.bars.length - q.index - 1) + Te + z / 3.5,
          cy: q.y,
          r: z / 2,
          fill: se,
          key: `circle--${q.index}`,
          "data-tooltip-html": fe,
          "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), o.isLollipopChart && o.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          x: Te - T / 2,
          y: he,
          width: z,
          height: z,
          fill: se,
          key: `circle--${q.index}`,
          "data-tooltip-html": fe,
          "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${z}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(o.confidenceKeys).length > 0 ? _.map((N) => {
    let P, V, q, j, I = 5;
    return P = t(d(N)), q = n(h(N, o.confidenceKeys.lower)), j = n(h(N, o.confidenceKeys.upper)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-v-${V}-${N[o.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${P - I} ${q}
                    L${P + I} ${q}
                    M${P} ${q}
                    L${P} ${j}
                    M${P - I} ${j}
                    L${P + I} ${j}`
      }
    );
  }) : "");
}, Ty = (e) => {
  const { xScale: t, yScale: n, yMax: a, seriesScale: r } = e, { transformedData: l, colorScale: c, seriesHighlight: o, config: s, formatNumber: u, formatDate: d, parseDate: h, setSharedFilter: m, isNumber: y, getTextWidth: p, getYAxisData: v, getXAxisData: g } = R.useContext(ze), { isHorizontal: f, barBorderWidth: b, hasMultipleSeries: x, applyRadius: S, updateBars: w, assignColorsToValues: A, section: D, fontSize: T, isLabelBelowBar: z, displayNumbersOnBar: $, lollipopBarWidth: C, lollipopShapeSize: k, getHighlightedBarColorByValue: _, getHighlightedBarByValue: O } = Ca(), { HighLightedBarUtils: N } = Di(s);
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement(
    Hs,
    {
      data: l,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: a,
      x0: (P) => P[s.runtime.originalXAxis.dataKey],
      x0Scale: n,
      x1Scale: r,
      yScale: t,
      color: () => ""
    },
    (P) => w(P).map((V, q) => /* @__PURE__ */ i.createElement(be, { className: `bar-group-${V.index}-${V.x0}--${q} ${s.orientation}`, key: `bar-group-${V.index}-${V.x0}--${q}`, id: `bar-group-${V.index}-${V.x0}--${q}`, top: V.y }, V.bars.map((j, I) => {
      const Z = s.useLogScale ? 0.1 : 0;
      let U = s.highlightedBarValues.map((Je) => Je.value).filter((Je) => Je !== void 0);
      U = s.xAxis.type === "date" ? N.formatDates(U) : U;
      let ue = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(j.key) === -1, de = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(j.key) !== -1, he = s.barHeight, Ce = j.value >= 0 && y(j.value) ? j.y : n(0);
      const Te = j.value < 0 ? Math.abs(t(j.value)) : t(0), ke = Math.abs(t(j.value) - t(Z)), ee = s.barHeight, K = u(j.value, "left"), G = s.runtime[D].type === "date" ? d(h(l[V.index][s.runtime.originalXAxis.dataKey])) : l[V.index][s.runtime.originalXAxis.dataKey], F = j.value < 0 ? "below" : "above";
      let ne = p(G, `normal ${T[s.fontSize]}px sans-serif`) < ke - 5, fe = ne ? "end" : "start", oe = "start", se = ne ? -5 : 5, Le = 10;
      F === "below" && (fe = ne ? "start" : "end", se = ne ? 5 : -5, s.isLollipopChart && (oe = "end", Le = -10));
      const Ke = j.value < 0 ? -1 : I, we = S(Ke);
      let xe = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${K}` : K, le = s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${G}` : G;
      x || (le = s.isLegendValue ? `<p className="tooltip-heading">${j.key}: ${G}</p>` : s.runtime.xAxis.label ? `<p className="tooltip-heading">${s.runtime.xAxis.label}: ${G}</p>` : G);
      const te = `<ul>
                  ${s.legend.showLegendValuesTooltip && s.runtime.seriesLabels && x ? `${s.runtime.seriesLabels[j.key] || ""}<br/>` : ""}
                  <li class="tooltip-heading">${xe}</li>
                  <li class="tooltip-body">${le}</li>
                    </li></ul>`;
      let Fe = "#000000";
      Fe = N.checkFontColor(K, U, Fe);
      let ce = s.runtime.seriesLabels && s.runtime.seriesLabels[j.key] ? c(s.runtime.seriesLabels[j.key]) : c(j.key);
      ce = A(P.length, V.index, ce);
      const Ne = s.isLollipopChart && s.lollipopColorStyle === "regular", Se = s.isLollipopChart && s.lollipopColorStyle === "two-tone", B = U == null ? void 0 : U.includes(K), _e = _(K), Ge = O(K), nt = B ? _e : s.barHasBorder === "true" ? "#000" : "transparent", et = B ? Ge.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? b : 0;
      ce && Fe && Yt.contrast(Fe, ce) < 4.9 && (Fe = ne ? "#FFFFFF" : "#000000");
      const at = {
        background: (() => Ne ? ce : Se ? Yt(ce).brighten(1) : B ? "transparent" : ce)(),
        borderColor: nt,
        borderStyle: "solid",
        borderWidth: et,
        width: ke,
        height: s.isLollipopChart ? C : ee,
        ...we
      };
      return /* @__PURE__ */ i.createElement(be, { key: `${V.index}--${I}` }, /* @__PURE__ */ i.createElement("style", null, `
                        .linear #barGroup${V.index} div,
                        .Combo #barGroup${V.index} div {
                          transform-origin: 0 ${Ce + he}px;
                        }
                      `), /* @__PURE__ */ i.createElement(be, { key: `bar-sub-group-${V.index}-${V.x0}-${Ce}--${I}` }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          id: `barGroup${V.index}`,
          key: `bar-group-bar-${V.index}-${j.index}-${j.value}-${j.key}`,
          x: Te,
          y: ee * j.index,
          width: ke,
          height: s.isLollipopChart ? C : ee,
          opacity: ue ? 0.5 : 1,
          display: de ? "block" : "none",
          "data-tooltip-html": te,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (Je) => {
            Je.preventDefault(), m && (j[s.xAxis.dataKey] = K, m(s.uid, j));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: at })
      ), !s.isLollipopChart && $ && /* @__PURE__ */ i.createElement(
        $e,
        {
          display: de ? "block" : "none",
          x: j.y,
          y: s.barHeight / 2 + s.barHeight * j.index,
          fill: Fe,
          dx: se,
          verticalAnchor: "middle",
          textAnchor: fe
        },
        K
      ), s.isLollipopChart && $ && /* @__PURE__ */ i.createElement(
        $e,
        {
          display: de ? "block" : "none",
          x: j.y,
          y: 0,
          fill: "#000000",
          dx: Le,
          textAnchor: oe,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        K
      ), z && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { x: s.yAxis.hideAxis ? 0 : 5, y: V.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? d(h(l[V.index][s.runtime.originalXAxis.dataKey])) : f ? l[V.index][s.runtime.originalXAxis.dataKey] : u(l[V.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: j.y, cy: 0 + C / 2, r: k / 2, fill: ce, key: `circle--${j.index}`, "data-tooltip-html": te, "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`, style: { filter: "unset", opacity: 1 } }), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          x: j.y > 10 ? j.y - k / 2 : 0,
          y: 0 - C / 2,
          width: k,
          height: k,
          fill: ce,
          key: `circle--${j.index}`,
          "data-tooltip-html": te,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${k}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? l.map((P) => {
    let V, q, j, I = 5;
    return V = n(g(P)) - 0.75 * s.barHeight, q = t(v(P, s.confidenceKeys.upper)), j = t(v(P, s.confidenceKeys.lower)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-h-${V}-${P[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${j} ${V - I}
                    L${j} ${V + I}
                    M${j} ${V}
                    L${q} ${V}
                    M${q} ${V - I}
                    L${q} ${V + I} `
      }
    );
  }) : "");
}, Ha = {
  Vertical: Ay,
  Horizontal: Ty,
  StackedVertical: by,
  StackedHorizontal: Ey
}, Sy = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: r, handleTooltipMouseOver: l, handleTooltipMouseOff: c, handleTooltipClick: o }) => {
  const { transformedData: s, config: u } = R.useContext(ze);
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
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, r = a === void 0 ? 0 : a, l = e.className, c = e.max, o = e.min, s = e.firstQuartile, u = e.thirdQuartile, d = e.median, h = e.boxWidth, m = h === void 0 ? 10 : h, y = e.fill, p = e.fillOpacity, v = e.stroke, g = e.strokeWidth, f = e.rx, b = f === void 0 ? 2 : f, x = e.ry, S = x === void 0 ? 2 : x, w = e.valueScale, A = e.outliers, D = A === void 0 ? [] : A, T = e.horizontal, z = e.medianProps, $ = z === void 0 ? {} : z, C = e.maxProps, k = C === void 0 ? {} : C, _ = e.minProps, O = _ === void 0 ? {} : _, N = e.boxProps, P = N === void 0 ? {} : N, V = e.outlierProps, q = V === void 0 ? {} : V, j = e.container, I = j === void 0 ? !1 : j, Z = e.containerProps, U = Z === void 0 ? {} : Z, ue = e.children, de = T ? r : n, he = de + (m || 0) / 2, Ce = w.range(), Te = w(o ?? 0), ke = w(s ?? 0), ee = w(d ?? 0), K = w(u ?? 0), G = w(c ?? 0), F = {
    valueRange: Ce,
    center: he,
    offset: de,
    boxWidth: m,
    max: {
      x1: he - (m || 0) / 4,
      x2: he + (m || 0) / 4,
      y1: G,
      y2: G
    },
    maxToThird: {
      x1: he,
      x2: he,
      y1: G,
      y2: K
    },
    median: {
      x1: de,
      x2: de + (m || 0),
      y1: ee,
      y2: ee
    },
    minToFirst: {
      x1: he,
      x2: he,
      y1: ke,
      y2: Te
    },
    min: {
      x1: he - (m || 0) / 4,
      x2: he + (m || 0) / 4,
      y1: Te,
      y2: Te
    },
    box: {
      x1: de,
      x2: m || 0,
      y1: K,
      y2: Math.abs(K - ke)
    },
    container: {
      x1: de,
      x2: m || 0,
      y1: Math.min.apply(Math, Ce),
      y2: Math.abs(Ce[0] - Ce[1])
    }
  };
  return T && (F.max = pn(F.max), F.maxToThird = pn(F.maxToThird), F.box.y1 = ke, F.box = pn(F.box), F.median = pn(F.median), F.minToFirst = pn(F.minToFirst), F.min = pn(F.min), F.container = pn(F.container), F.container.y1 = Math.min.apply(Math, Ce)), ue ? /* @__PURE__ */ i.createElement(i.Fragment, null, ue(F)) : /* @__PURE__ */ i.createElement(be, {
    className: Ze("visx-boxplot", l)
  }, D.map(function(pe, ne) {
    var fe = T ? w(pe) : he, oe = T ? he : w(pe);
    return /* @__PURE__ */ i.createElement("circle", tn({
      key: "visx-boxplot-outlier-" + ne,
      className: "visx-boxplot-outlier",
      cx: fe,
      cy: oe,
      r: 4,
      stroke: v,
      strokeWidth: g,
      fill: y,
      fillOpacity: p
    }, q));
  }), /* @__PURE__ */ i.createElement("line", tn({
    className: "visx-boxplot-max",
    x1: F.max.x1,
    y1: F.max.y1,
    x2: F.max.x2,
    y2: F.max.y2,
    stroke: v,
    strokeWidth: g
  }, k)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: F.maxToThird.x1,
    y1: F.maxToThird.y1,
    x2: F.maxToThird.x2,
    y2: F.maxToThird.y2,
    stroke: v,
    strokeWidth: g
  }), /* @__PURE__ */ i.createElement("rect", tn({
    className: "visx-boxplot-box",
    x: F.box.x1,
    y: F.box.y1,
    width: F.box.x2,
    height: F.box.y2,
    stroke: v,
    strokeWidth: g,
    fill: y,
    fillOpacity: p,
    rx: b,
    ry: S
  }, P)), /* @__PURE__ */ i.createElement("line", tn({
    className: "visx-boxplot-median",
    x1: F.median.x1,
    y1: F.median.y1,
    x2: F.median.x2,
    y2: F.median.y2,
    stroke: v,
    strokeWidth: g
  }, $)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: F.minToFirst.x1,
    y1: F.minToFirst.y1,
    x2: F.minToFirst.x2,
    y2: F.minToFirst.y2,
    stroke: v,
    strokeWidth: g
  }), /* @__PURE__ */ i.createElement("line", tn({
    className: "visx-boxplot-min",
    x1: F.min.x1,
    y1: F.min.y1,
    x2: F.min.x2,
    y2: F.min.y2,
    stroke: v,
    strokeWidth: g
  }, O)), I && /* @__PURE__ */ i.createElement("rect", tn({
    x: F.container.x1,
    y: F.container.y1,
    width: F.container.x2,
    height: F.container.y2,
    fillOpacity: "0"
  }, U)));
}
Xc.propTypes = {
  max: W.number,
  min: W.number,
  firstQuartile: W.number,
  thirdQuartile: W.number,
  median: W.number,
  boxWidth: W.number,
  fill: W.string,
  fillOpacity: W.oneOfType([W.number, W.string]),
  stroke: W.string,
  strokeWidth: W.oneOfType([W.number, W.string]),
  rx: W.number,
  ry: W.number,
  outliers: W.arrayOf(W.number),
  container: W.bool,
  children: W.func
};
const ky = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: a } = R.useContext(ze);
  R.useEffect(() => {
    n.legend.hide === !1 && a({
      ...n,
      legend: {
        ...n.legend,
        hide: !0
      }
    });
  }, []);
  const r = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, l = (v) => `
      <strong>${v.columnCategory}</strong></br>
      ${n.boxplot.labels.q1}: ${v.columnFirstQuartile}<br/>
      ${n.boxplot.labels.q3}: ${v.columnThirdQuartile}<br/>
      ${n.boxplot.labels.iqr}: ${v.columnIqr}<br/>
      ${n.boxplot.labels.median}: ${v.columnMedian}
    `, c = (v) => Number(v.columnMax), o = (v) => Number(v.columnMin), s = (v) => Number(v.columnMedian), u = (v) => Number(v.columnThirdQuartile), d = (v) => Number(v.columnFirstQuartile), h = 0.5, m = e.bandwidth(), y = Math.min(40, m), p = an[n == null ? void 0 : n.palette][0] ? an[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ i.createElement(Rt, { component: "BoxPlot" }, /* @__PURE__ */ i.createElement(be, { className: "boxplot", key: "boxplot-group" }, n.boxplot.plots.map((v, g) => {
    const f = m - y, b = 4;
    return /* @__PURE__ */ i.createElement(be, { key: `boxplotplot-${g}` }, n.boxplot.plotNonOutlierValues && v.nonOutlierValues.map((x, S) => /* @__PURE__ */ i.createElement("circle", { cx: e(v.columnCategory) + Number(n.yAxis.size) + m / 2, cy: t(x), r: b, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${g}--circle-${S}` })), /* @__PURE__ */ i.createElement(
      Xc,
      {
        "data-left": e(v.columnCategory) + n.yAxis.size + f / 2 + 0.5,
        key: `box-plot-${g}`,
        min: o(v),
        max: c(v),
        left: Number(e(v.columnCategory)) + Number(n.yAxis.size) + f / 2 + 0.5,
        firstQuartile: d(v),
        thirdQuartile: u(v),
        median: s(v),
        boxWidth: y,
        fill: p,
        fillOpacity: h,
        stroke: "black",
        valueScale: t,
        outliers: n.boxplot.plotOutlierValues ? v.columnOutliers : [],
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
          "data-tooltip-html": l(v),
          "data-tooltip-id": r
        }
      }
    ));
  })));
}, wy = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: a }) => {
  const { colorScale: r, transformedData: l, config: c, formatNumber: o, seriesHighlight: s, colorPalettes: u } = R.useContext(ze);
  let d = 4.5;
  const h = Object.keys(c.runtime.seriesLabels).length > 1, m = (y, p) => `<div>
    ${c.legend.showLegendValuesTooltip && c.runtime.seriesLabels && h ? `${c.runtime.seriesLabels[p] || ""}<br/>` : ""}
    ${c.xAxis.label}: ${o(y[c.xAxis.dataKey], "bottom")} <br/>
    ${c.yAxis.label}: ${o(y[p], "left")}
</div>`;
  return /* @__PURE__ */ i.createElement(be, { className: "scatter-plot", left: c.yAxis.size }, l.map((y, p) => c.runtime.seriesKeys.map((v, g) => {
    const f = c.legend.behavior === "highlight" && s.length > 0 && s.indexOf(v) === -1, b = c.legend.behavior === "highlight" || s.length === 0 || s.indexOf(v) !== -1, x = c.palette ? u[c.palette][g] : "#000";
    let S = {
      filter: "unset",
      opacity: 1,
      stroke: b ? "black" : ""
    };
    return /* @__PURE__ */ i.createElement(
      "circle",
      {
        key: `${p}-${g}`,
        r: d,
        cx: e(y[c.xAxis.dataKey]),
        cy: t(y[v]),
        fill: b ? x : "transparent",
        fillOpacity: f ? 0.25 : 1,
        style: S,
        "data-tooltip-html": m(y, v),
        "data-tooltip-id": `cdc-open-viz-tooltip-${c.runtime.uniqueId}`
      }
    );
  })));
};
function Cy({ height: e, xScale: t }) {
  var j;
  const { transformedData: n, config: a, formatNumber: r, twoColorPalette: l, getTextWidth: c, updateConfig: o, parseDate: s, formatDate: u, currentViewport: d } = R.useContext(ze), { barStyle: h, tipRounding: m, roundingStyle: y, twoColor: p } = a, v = R.useRef([]), [g, f] = R.useState(window.innerWidth), b = y === "standard" ? "8px" : y === "shallow" ? "5px" : y === "finger" ? "15px" : "0px", x = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const S = Number(a.xAxis.target), w = a.series[0].dataKey, A = Number(t.domain()[1]), T = n.some((I) => I[w] < 0) || S > 0 || t.domain()[0] < 0, z = a.barHasBorder === "true" ? 1 : 0, $ = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, C = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, k = Math.max(t(0), Math.min(t(S), t(A))), _ = (I) => {
    if (I == null || h !== "rounded")
      return;
    let Z = {};
    return I === "left" && (Z = { borderRadius: `${b} 0 0 ${b}` }), I === "right" && (Z = { borderRadius: `0 ${b} ${b} 0` }), m === "full" && (Z = { borderRadius: b }), Z;
  }, O = {
    calculate: function() {
      const Z = n[0][w] < S ? "left" : "right", U = `${a.xAxis.targetLabel} ${r(a.xAxis.target || 0, "left")}`, ue = c(U, `bold ${x[a.fontSize]}px sans-serif`);
      let de = a.isLollipopChart ? $ / 2 : Number(a.barHeight) / 2, he = 0, Ce = 0, Te = !1;
      Z === "right" && (he = -10, Te = ue - he < k, Ce = k - ue), Z === "left" && (he = 10, Te = t(A) - k > ue + he, Ce = k), this.text = U, this.y = de, this.x = Ce, this.padding = he, this.showLabel = a.xAxis.showTargetLabel ? Te : !1;
    }
  };
  O.calculate();
  const N = R.useRef(null), P = ol(N, {});
  R.useEffect(() => {
    const I = () => {
      f(window.innerWidth), v.current.forEach((Z) => {
        Z.style.transition = "none", Z.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", I), () => {
      window.removeEventListener("resize", I);
    };
  }, []);
  const [V, q] = R.useState(!1);
  return R.useEffect(() => {
    P != null && P.isIntersecting && setTimeout(() => {
      q(!0);
    }, 100);
  }, [P == null ? void 0 : P.isIntersecting, a.animate]), R.useEffect(() => {
    v.current.forEach((I, Z) => {
      if (a.animate) {
        const U = S / A * 100;
        I.style.opacity = "0", I.style.transform = `translate(${U / 1.07}%) scale(0, 1)`, setTimeout(() => {
          I.style.opacity = "1", I.style.transform = "translate(0) scale(1)", I.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        I.style.transition = "none", I.style.opacity = "0";
      a.animate || (I.style.transition = "none", I.style.opacity = "1");
    });
  }, [a.animate, a, V]), !a || ((j = a == null ? void 0 : a.series) == null ? void 0 : j.length) !== 1 ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(Rt, { component: "Deviation Bar" }, /* @__PURE__ */ i.createElement(be, { left: Number(a.xAxis.size) }, n.map((I, Z) => {
    const U = Number(I[w]), ue = a.isLollipopChart ? $ : Number(a.barHeight), de = Number(a.barSpace), he = Math.abs(t(U) - k), Ce = t(U), Te = U > S ? k : Ce, ke = U < S ? "left" : "right";
    let ee = 0;
    ee = Z !== 0 ? (de + ue + z) * Z : ee;
    const K = (de + ue + z) * n.length;
    a.heights.horizontal = K;
    const F = c(r(U, "left"), `normal ${x[a.fontSize]}px sans-serif`) < he - 6, pe = Ce, ne = ee + ue / 2, fe = Ce, oe = ee + ue / 2, se = Ce, Le = ee - ue / 2, Ke = _(ke), [we, xe] = l[p.palette], le = { left: we, right: xe }, Fe = Yt.contrast("#000000", le[ke]) < 4.9 ? "#FFFFFF" : "#000000";
    let ce = Ny(a.isLollipopChart, F, C, Fe);
    const Ne = r(U, "left"), Se = a.runtime.yAxis.type === "date" ? u(s(n[Z][a.runtime.originalXAxis.dataKey])) : n[Z][a.runtime.originalXAxis.dataKey];
    let B = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${Se}` : Se, _e = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${Ne}` : Ne;
    const Ge = `<div>
          ${B}<br />
          ${_e}
            </div>`;
    return /* @__PURE__ */ i.createElement(be, { key: `deviation-bar-${a.orientation}-${w}-${Z}` }, /* @__PURE__ */ i.createElement(
      "foreignObject",
      {
        ref: (nt) => {
          v.current[Z] = nt;
        },
        x: Te,
        y: ee,
        width: he,
        height: ue,
        "data-tooltip-html": Ge,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`
      },
      /* @__PURE__ */ i.createElement("div", { style: { width: he, height: ue, border: `${z}px solid #333`, backgroundColor: le[ke], ...Ke } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ i.createElement($e, { verticalAnchor: "middle", x: pe, y: ne, ...ce[ke] }, r(I[w], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: fe, cy: oe, r: C / 2, fill: le[ke], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ i.createElement("rect", { x: se, y: Le, width: C, height: C, fill: le[ke], style: { opacity: 1, filter: "unset" } }));
  }), O.showLabel && /* @__PURE__ */ i.createElement($e, { fontWeight: "bold", dx: O.padding, verticalAnchor: "middle", x: O.x, y: O.y }, O.text), T && /* @__PURE__ */ i.createElement(qe, { from: { x: k, y: 0 }, to: { x: k, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ i.createElement("foreignObject", { y: e / 2, ref: N }));
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
  const { transformedData: c, rawData: o, config: s, seriesHighlight: u } = R.useContext(ze), { xAxis: d, yAxis: h, legend: m, runtime: y } = s;
  return c && /* @__PURE__ */ i.createElement(Rt, { component: "ForecastingChart" }, /* @__PURE__ */ i.createElement(be, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(h.size) }, (p = y.forecastingSeriesKeys) == null ? void 0 : p.map((v, g) => !v || !v.stages ? !1 : v.stages.map((f, b) => {
    var D;
    const { behavior: x } = m, S = o.filter((T) => T[v.stageColumn] === f.key);
    let w = x === "highlight" && u.length > 0 && u.indexOf(f.key) === -1, A = x === "highlight" || u.length === 0 || u.indexOf(f.key) !== -1;
    return /* @__PURE__ */ i.createElement(be, { className: `forecasting-areas-combo-${g}`, key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}-${g}` }, (D = v.confidenceIntervals) == null ? void 0 : D.map((T, z) => {
      const $ = Za[f.color] || an[f.color] || !1, C = () => A && $[2] ? $[2] : "transparent", k = () => A && $[1] ? $[1] : "transparent";
      if (!(T.high === "" || T.low === ""))
        return /* @__PURE__ */ i.createElement(be, { key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}--group-${b}-${z}` }, /* @__PURE__ */ i.createElement(
          zd,
          {
            curve: ja,
            data: S,
            fill: C(),
            opacity: w ? 0.1 : 0.5,
            x: (_) => e(Date.parse(_[d.dataKey])),
            y0: (_) => t(_[T.low]),
            y1: (_) => t(_[T.high])
          }
        ), z === 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(kn, { data: S, x: (_) => Number(e(Date.parse(_[d.dataKey]))), y: (_) => Number(t(_[T.high])), curve: ja, stroke: k(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ i.createElement(kn, { data: S, x: (_) => Number(e(Date.parse(_[d.dataKey]))), y: (_) => Number(t(_[T.low])), curve: ja, stroke: k(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ i.createElement(be, { key: "tooltip-hover-section" }, /* @__PURE__ */ i.createElement(Pt, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (v) => r(v, c), onMouseOut: l }))));
};
function Xa(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function $i(e, t) {
  const n = e.series.every(({ type: m }) => m === "Bar"), a = e.series.every(({ type: m }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(m)), r = (m) => (y) => m.reduce((p, v) => isNaN(Number(y[v])) ? p : p + Number(y[v]), 0), l = () => {
    let m = Math.max(...t.map((y) => Math.max(...e.runtime.seriesKeys.map((p) => Xa(y[p]) ? Number(s(y[p])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const y = t.map(r(e.runtime.seriesKeys)).filter((p) => !isNaN(p));
      m = Math.max(...y);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const y = t.map(r(e.runtime.seriesKeys));
      m = Math.max(...y);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (m = Math.max(...t.map((y) => Xa(y[e.series.dataKey]) ? Number(s(y[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const y = t.map(r(e.runtime.barSeriesKeys)), p = Math.max(...t.map((g) => Math.max(...e.runtime.lineSeriesKeys.map((f) => Number(s(g[f])))))), v = Math.max(...y);
      m = Math.max(v, p);
    }
    return m;
  }, c = () => {
    const m = Math.min(...t.map((y) => Math.min(...e.runtime.seriesKeys.map((p) => Xa(y[p]) ? Number(s(y[p])) : 1 / 0))));
    return String(m);
  }, o = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((m) => t.some((y) => y[m] >= 0)) : !1, s = (m) => m === null || m === "" ? "" : typeof m == "string" ? m.replace(/[,$]/g, "") : m, u = Number(l()), d = Number(c()), h = o();
  return { minValue: d, maxValue: u, existPositiveValue: h, isAllLine: a };
}
function dl({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var m, y, p, v;
  const r = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((g) => g.axis === "Right").map((g) => g.dataKey);
  let { minValue: c } = $i(e, n);
  const o = (g) => {
    if (!g)
      return [0];
    let f = [];
    return g.map((b, x) => f = [...f, ...n.map((S) => Number(S[b]))]), f;
  }, s = Math.max.apply(null, o(l)), u = ((y = (m = e.runtime) == null ? void 0 : m.barSeriesKeys) == null ? void 0 : y.length) > 0, d = ((v = (p = e.runtime) == null ? void 0 : p.lineSeriesKeys) == null ? void 0 : v.length) > 0;
  return (u || d) && c > 0 && (c = 0), { yScaleRight: ht({
    domain: [c, s],
    range: [t, 0]
  }), hasRightAxis: r };
}
const ts = (e) => {
  var p, v, g, f, b, x;
  const { config: t, d: n, displayArea: a, seriesKey: r, tooltipData: l, xScale: c, yScale: o, colorScale: s, parseDate: u, yScaleRight: d } = e, { lineDatapointStyle: h } = t, m = (p = t == null ? void 0 : t.series.filter((S) => S.dataKey === r)) == null ? void 0 : p[0];
  if (h === "hidden")
    return null;
  const y = (S, w, A, D, T, z) => {
    const $ = A.customColors || [], C = A.runtime.seriesLabels || [];
    let k;
    const _ = (O) => A.runtime.seriesLabelsAll.indexOf(O);
    if (S)
      if (w) {
        if (_(T) === !1)
          return;
        k = w(C[T] || z);
      } else
        $ && (k = $.length > 0 ? w(_(T)) : "transparent");
    else
      k = "transparent";
    return k;
  };
  if (h === "always show")
    return /* @__PURE__ */ i.createElement(
      "circle",
      {
        cx: t.xAxis.type === "categorical" ? c(n[t.xAxis.dataKey]) : c(u(n[t.xAxis.dataKey])),
        cy: m.axis === "Right" ? d(n[m.dataKey]) : o(n[m.dataKey]),
        r: 4.5,
        opacity: n[r] ? 1 : 0,
        fillOpacity: 1,
        fill: a ? s ? s(r) : "#000" : "transparent",
        style: { filter: "unset", opacity: 1 }
      }
    );
  if (h === "hover") {
    if (!l || !l.data)
      return;
    let S = (g = (v = l == null ? void 0 : l.data) == null ? void 0 : v[0]) == null ? void 0 : g[1];
    if (!S)
      return;
    let w, A = l.data.filter((z) => z[0] === r), D = (f = A == null ? void 0 : A[0]) == null ? void 0 : f[0], T = (b = A == null ? void 0 : A[0]) == null ? void 0 : b[2];
    return l.data.indexOf(D), w = (x = A == null ? void 0 : A[0]) == null ? void 0 : x[1], l.data.map((z, $) => {
      let C = t.runtime.seriesLabelsAll.indexOf(S);
      return isNaN(w) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: t.xAxis.type === "categorical" ? c(S) : c(u(S)),
          cy: T === "right" ? d(w) : o(w),
          r: 4.5,
          opacity: 1,
          fillOpacity: 1,
          fill: y(a, s, t, C, D, r),
          style: { filter: "unset", opacity: 1 }
        }
      );
    });
  }
  return null;
}, ns = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: a, xMax: r, yMax: l, handleTooltipMouseOver: c, handleTooltipMouseOff: o, showTooltip: s, seriesStyle: u = "Line", svgRef: d, handleTooltipClick: h, tooltipData: m }) => {
  const { transformedData: y, colorScale: p, seriesHighlight: v, config: g, formatNumber: f, formatDate: b, parseDate: x, isNumber: S, updateConfig: w, handleLineType: A, tableData: D } = R.useContext(ze), { yScaleRight: T } = dl({ config: g, yMax: l, data: y, updateConfig: w });
  if (c)
    return /* @__PURE__ */ i.createElement(Rt, { component: "LineChart" }, /* @__PURE__ */ i.createElement(be, { left: g.runtime.yAxis.size ? parseInt(g.runtime.yAxis.size) : 66 }, " ", (g.runtime.lineSeriesKeys || g.runtime.seriesKeys).map((z, $) => {
      let C = g.series.filter((N) => N.dataKey === z)[0].type;
      const k = g.series.filter((N) => N.dataKey === z), _ = k[0].axis ? k[0].axis : "left";
      let O = g.legend.behavior === "highlight" || v.length === 0 || v.indexOf(z) !== -1;
      return /* @__PURE__ */ i.createElement(
        be,
        {
          key: `series-${z}`,
          opacity: g.legend.behavior === "highlight" && v.length > 0 && v.indexOf(z) === -1 ? 0.5 : 1,
          display: g.legend.behavior === "highlight" || v.length === 0 && !g.legend.dynamicLegend || v.indexOf(z) !== -1 ? "block" : "none"
        },
        y.map((N, P) => {
          const V = g.series.find(({ dataKey: U }) => U === z), { axis: q } = V;
          g.runtime.xAxis.type === "date" ? b(x(N[g.runtime.xAxis.dataKey])) : N[g.runtime.xAxis.dataKey], a(N, z);
          const j = Object.keys(g.runtime.seriesLabels).length > 1, I = q === "Right" ? "rightLabel" : "label";
          let Z = g.runtime.yAxis[I];
          return j || (Z = g.isLegendValue ? g.runtime.seriesLabels[z] : Z), N[z] !== void 0 && N[z] !== "" && N[z] !== null && S(N[z]) && /* @__PURE__ */ i.createElement(be, { key: `series-${z}-point-${P}`, className: "checkwidth" }, /* @__PURE__ */ i.createElement(Pt, { key: "bars", width: Number(r), height: Number(l), fill: "transparent", fillOpacity: 0.05, onMouseMove: (U) => c(U, D), onMouseOut: o, onClick: (U) => h(U, y) }), /* @__PURE__ */ i.createElement($e, { display: g.labels ? "block" : "none", x: e(n(N)), y: _ === "Right" ? T(a(N, z)) : t(a(N, z)), fill: "#000", textAnchor: "middle" }, f(N[z], "left")), g.lineDatapointStyle === "hidden" || g.lineDatapointStyle === "always show" && /* @__PURE__ */ i.createElement(ts, { d: N, config: g, seriesKey: z, displayArea: O, tooltipData: m, xScale: e, yScale: t, colorScale: p, parseDate: x, yScaleRight: T }));
        }),
        /* @__PURE__ */ i.createElement(i.Fragment, null, g.lineDatapointStyle === "hover" && /* @__PURE__ */ i.createElement(ts, { config: g, seriesKey: z, displayArea: O, tooltipData: m, xScale: e, yScale: t, colorScale: p, parseDate: x, yScaleRight: T, seriesAxis: _ })),
        /* @__PURE__ */ i.createElement(
          kn,
          {
            curve: ul[k[0].lineType],
            data: y,
            x: (N) => e(n(N)),
            y: (N) => _ === "Right" ? T(a(N, z)) : t(a(N, z)),
            stroke: p ? p(g.runtime.seriesLabels[z]) : "#000",
            strokeWidth: 2,
            strokeOpacity: 1,
            strokeDasharray: C ? A(C) : 0,
            defined: (N, P) => N[z] !== "" && N[z] !== null && N[z] !== void 0
          }
        ),
        g.animate && /* @__PURE__ */ i.createElement(
          kn,
          {
            className: "animation",
            curve: k.lineType,
            data: y,
            x: (N) => e(n(N)),
            y: (N) => _ === "Right" ? T(a(N, z)) : t(a(N, z)),
            stroke: "#fff",
            strokeWidth: 3,
            strokeOpacity: 1,
            shapeRendering: "geometricPrecision",
            strokeDasharray: C ? A(C) : 0,
            defined: (N, P) => S(N[g.runtime.seriesLabels[z]])
          }
        ),
        g.showLineSeriesLabels && (g.runtime.lineSeriesKeys || g.runtime.seriesKeys).map((N) => {
          let P;
          for (let V = y.length - 1; V >= 0; V--)
            if (y[V][N]) {
              P = y[V];
              break;
            }
          return P ? /* @__PURE__ */ i.createElement("text", { x: e(n(P)) + 5, y: t(a(P, N)), alignmentBaseline: "middle", fill: g.colorMatchLineSeriesLabels && p ? p(g.runtime.seriesLabels[N] || N) : "black" }, g.runtime.seriesLabels[N] || N) : /* @__PURE__ */ i.createElement(i.Fragment, null);
        })
      );
    }), g.legend.dynamicLegend && v.length === 0 && /* @__PURE__ */ i.createElement($e, { x: r / 2, y: l / 2, fill: "black", textAnchor: "middle", color: "black" }, g.legend.dynamicLegendChartMessage)));
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
  top: W.number,
  left: W.number,
  className: W.string,
  children: W.node
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
  children: W.func,
  className: W.string,
  top: W.number,
  left: W.number,
  size: W.oneOfType([W.number, W.func])
};
const _y = (e) => {
  const { transformedData: t, updateConfig: n, dimensions: a, rawData: r } = R.useContext(ze), { xScale: l, yScale: c, config: o, height: s, width: u, handleTooltipMouseOff: d, handleTooltipMouseOver: h, maxWidth: m, maxHeight: y } = e, { forestPlot: p, runtime: v, dataFormat: g } = o;
  R.useEffect(() => {
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
  ], x = o.forestPlot.rowHeight, S = [
    { x: 0, y: x },
    { x: u, y: x }
  ], w = [
    { x: 0, y: s },
    { x: u, y: s }
  ], A = Object.entries(o.columns).map((D) => D[1]).filter((D) => D.forestPlot === !0);
  return p.rightWidthOffset !== 0 && Number(p.rightWidthOffset) / 100 * u, p.leftWidthOffset !== 0 && Number(p.leftWidthOffset) / 100 * u, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, null, p.title !== "" && /* @__PURE__ */ i.createElement($e, { className: "forest-plot--title", x: l(0), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: On(o.fontSize), fill: "black" }, p.title), p.regression.showBaseLine && /* @__PURE__ */ i.createElement(qe, { from: { x: l(p.regression.estimateField), y: 0 + x }, to: { x: l(p.regression.estimateField), y: s }, className: "forestplot__baseline", stroke: p.regression.baseLineColor || "black" }), p.showZeroLine && /* @__PURE__ */ i.createElement(qe, { from: { x: l(0), y: 0 + x }, to: { x: l(0), y: s }, className: "forestplot__zero-line", stroke: "gray", strokeDasharray: "5 5" }), t.map((D, T) => {
    const z = ht({
      domain: l.domain(),
      range: [p.radius.min, p.radius.max]
    }), $ = p.radius.scalingColumn !== "" ? z(t[T][p.estimateField]) * 5 : 4, C = p.radius.scalingColumn !== "" ? z(t[T][p.estimateField]) : 4, k = p.colors.shape ? p.colors.shape : "black", _ = p.colors.line ? p.colors.line : "black", O = 4;
    return /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: _,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${l(D[p.lower])} ${c(T) - Number(O)}
                    L${l(D[p.lower])} ${c(T) + Number(O)}
                `
      }
    ), /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: _,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${l(D[p.upper])} ${c(T) - Number(O)}
                    L${l(D[p.upper])} ${c(T) + Number(O)}
                `
      }
    ), /* @__PURE__ */ i.createElement("line", { stroke: _, className: `line-${D[o.yAxis.dataKey]}`, key: T, x1: l(D[p.lower]), x2: l(D[p.upper]), y1: c(T), y2: c(T) }), p.shape === "circle" && /* @__PURE__ */ i.createElement(wu, { className: "forest-plot--circle", cx: l(Number(D[p.estimateField])), cy: c(T), r: p.radius.scalingColumn !== "" ? z(t[T][p.estimateField]) : 4, fill: k, style: { opacity: 1, filter: "unset" } }), p.shape === "square" && /* @__PURE__ */ i.createElement("rect", { className: "forest-plot--square", x: l(Number(D[p.estimateField])), y: c(T) - C / 2, width: C, height: C, fill: k, style: { opacity: 1, filter: "unset" } }), p.shape === "diamond" && /* @__PURE__ */ i.createElement(Zc, { className: "forest-plot--diamond", size: $, top: c(T), left: l(Number(D[p.estimateField])), fill: k }), p.shape === "text" && /* @__PURE__ */ i.createElement($e, { className: "forest-plot--text", x: l(Number(D[p.estimateField])), y: c(T), textAnchor: "middle", verticalAnchor: "middle", fontSize: On(o.fontSize), fill: k }, D[p.estimateField]));
  }), b && p.regression.showDiamond && /* @__PURE__ */ i.createElement(kn, { data: b, x: (D) => D.x, y: (D) => D.y, stroke: "black", strokeWidth: 2, fill: p.regression.baseLineColor, curve: zs }), p.regression.description && /* @__PURE__ */ i.createElement($e, { x: 0 - Number(o.xAxis.size), width: u, y: s - o.forestPlot.rowHeight - Number(p.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, p.regression.description), /* @__PURE__ */ i.createElement(Pt, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: u, height: s, fill: "transparent", fillOpacity: 0.5, onMouseMove: (D) => h(D, t), onMouseOut: d })), /* @__PURE__ */ i.createElement(qe, { from: S[0], to: S[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ i.createElement(qe, { from: w[0], to: w[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), A.map((D) => r.map((T, z) => /* @__PURE__ */ i.createElement($e, { className: `${T[D.name]}`, x: D.forestPlotAlignRight ? u : D.forestPlotStartingPoint, y: c(z), textAnchor: D.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: On(o.fontSize), fill: "black" }, T[D.name]))), !p.hideDateCategoryCol && t.map((D, T) => /* @__PURE__ */ i.createElement($e, { className: `${D[o.xAxis.dataKey]}`, x: 0, y: c(T), textAnchor: "start", verticalAnchor: "middle", fontSize: On(o.fontSize), fill: "black" }, D[o.xAxis.dataKey])), !p.hideDateCategoryCol && o.xAxis.dataKey && /* @__PURE__ */ i.createElement($e, { className: o.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: On(o.fontSize), fill: "black" }, o.xAxis.dataKey), A.map((D) => /* @__PURE__ */ i.createElement($e, { className: `${D.label}`, x: D.forestPlotAlignRight ? u : D.forestPlotStartingPoint, y: 0, textAnchor: D.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: On(o.fontSize), fill: "black" }, D.label)));
}, My = ({ width: e, height: t, originalWidth: n }) => {
  var S;
  const { config: a, colorScale: r, transformedData: l, formatNumber: c, seriesHighlight: o, getTextWidth: s } = R.useContext(ze);
  if (!a || ((S = a == null ? void 0 : a.series) == null ? void 0 : S.length) < 2)
    return;
  const u = a.barHasBorder === "true" ? 1 : 0, d = e / 2, h = { small: 16, medium: 18, large: 20 }, m = 1.02, y = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[0].dataKey,
    color: r(a.runtime.seriesLabels[a.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((w) => w[a.series[0].dataKey])
    ),
    labelColor: ""
  }, p = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[1].dataKey,
    color: r(a.runtime.seriesLabels[a.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((w) => w[a.series[1].dataKey])
    ),
    labelColor: ""
  }, v = ht({
    domain: [0, Math.max(y.max * m, p.max * 1.1)],
    range: [0, d]
  });
  let g = "#000000";
  Yt.contrast(g, y.color) < 4.9 && (y.labelColor = "#FFFFFF"), Yt.contrast(g, p.color) < 4.9 && (p.labelColor = "#FFFFFF");
  const f = a.yAxis.label ? `${a.yAxis.label}: ` : "", b = (w) => `<p>
				${a.dataDescription.seriesKey}: ${y.dataKey}<br/>
				${a.xAxis.dataKey}: ${w[a.xAxis.dataKey]}<br/>
				${f}${c(w[y.dataKey], "left")}
			</p>`, x = (w) => `<p>
				${a.dataDescription.seriesKey}: ${p.dataKey}<br/>
				${a.xAxis.dataKey}: ${w[a.xAxis.dataKey]}<br/>
				${f}${c(w[p.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ i.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ i.createElement(be, { top: 0, left: Number(a.xAxis.size) }, l.filter((w) => a.series[0].dataKey === y.dataKey).map((w, A) => {
    let D = a.legend.behavior === "highlight" && o.length > 0 && o.indexOf(a.series[0].dataKey) === -1, T = a.legend.behavior === "highlight" || o.length === 0 || o.indexOf(a.series[0].dataKey) !== -1, z = v(w[a.series[0].dataKey]), $ = Number(a.barHeight) ? Number(a.barHeight) : 25, C = 0;
    C = A !== 0 ? (Number(a.barSpace) + $ + u) * A : C;
    const k = (Number(a.barSpace) + $ + u) * l.length;
    a.heights.horizontal = k;
    const O = s(c(w[y.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < z - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, { key: `group-${y.dataKey}-${w[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      Pt,
      {
        id: `bar-${y.dataKey}-${w[a.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${y.dataKey}-${w[a.dataDescription.xKey]}`,
        x: d - z,
        y: C,
        width: v(w[a.series[0].dataKey]),
        height: $,
        fill: y.color,
        "data-tooltip-html": b(w),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: u,
        opacity: D ? 0.5 : 1,
        display: T ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && T && /* @__PURE__ */ i.createElement($e, { textAnchor: O ? "start" : "end", dx: O ? 5 : -5, verticalAnchor: "middle", x: d - z, y: C + a.barHeight / 2, fill: O ? y.labelColor : "#000" }, c(w[y.dataKey], "left"))));
  }), l.filter((w) => a.series[1].dataKey === p.dataKey).map((w, A) => {
    let D = v(w[a.series[1].dataKey]), T = a.legend.behavior === "highlight" && o.length > 0 && o.indexOf(a.series[1].dataKey) === -1, z = a.legend.behavior === "highlight" || o.length === 0 || o.indexOf(a.series[1].dataKey) !== -1, $ = a.barHeight ? Number(a.barHeight) : 25, C = 0;
    C = A !== 0 ? (Number(a.barSpace) + $ + u) * A : C;
    const k = (Number(a.barSpace) + $ + u) * l.length;
    a.heights.horizontal = k;
    const O = s(c(w[p.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < D - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                      .bar-${p.dataKey}-${w[a.xAxis.dataKey]} {
                          transform-origin: ${d}px ${C}px
                      }
							      `), /* @__PURE__ */ i.createElement(be, { key: `group-${p.dataKey}-${w[a.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      Pt,
      {
        id: `bar-${p.dataKey}-${w[a.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${p.dataKey}-${w[a.dataDescription.xKey]}`,
        x: d,
        y: C,
        width: v(w[a.series[1].dataKey]),
        height: $,
        fill: p.color,
        "data-tooltip-html": x(w),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        strokeWidth: u,
        stroke: "#333",
        opacity: T ? 0.5 : 1,
        display: z ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && z && /* @__PURE__ */ i.createElement($e, { textAnchor: O ? "end" : "start", dx: O ? -5 : 5, verticalAnchor: "middle", x: d + D, y: C + a.barHeight / 2, fill: O ? p.labelColor : "#000" }, c(w[p.dataKey], "left"))));
  }))));
}, Dy = ({ config: e, minValue: t, maxValue: n, existPositiveValue: a, data: r, isAllLine: l }) => {
  let c = 0, o = 0;
  if (!r)
    return { min: c, max: o };
  const { max: s, min: u } = e.runtime.yAxis, d = 1.15, h = a ? s >= n : s >= 0, m = e.useLogScale ? u >= 0 : u <= 0 && t >= 0 || u <= t && t < 0;
  c = u && m ? u : t, o = s && h ? s : Number.MIN_VALUE;
  let y = 0;
  if (e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Deviation Bar") {
    let p = 0;
    if (e.hasOwnProperty("confidenceKeys")) {
      let v = r.map(function(f) {
        return f[e.confidenceKeys.upper];
      });
      p = Math.max.apply(Math, v), p > o && (o = p * d);
      let g = r.map(function(f) {
        return f[e.confidenceKeys.lower] !== void 0 ? f[e.confidenceKeys.lower] : "";
      });
      y = Math.min.apply(Math, g), y < c && (c = y * d);
    }
  }
  if (e.visualizationType === "Forecasting") {
    const {
      runtime: { forecastingSeriesKeys: p }
    } = e;
    if (p.length > 0) {
      let v = [];
      p.forEach((x) => {
        var S;
        (S = x.confidenceIntervals) == null || S.map((w) => {
          v.push(w.high), v.push(w.low);
        });
      });
      const g = r.map((x) => v.map((S) => x[S])), f = Math.max.apply(
        null,
        g.map((x) => x[0])
      ), b = Math.min.apply(
        null,
        g.map((x) => x[1])
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
    const p = r.map((g) => g[e.series[0].dataKey]), v = Math.max(...p).toString().length;
    switch (!0) {
      case (v > 8 && v <= 12):
        o = o * 1.3;
        break;
      case (v > 4 && v <= 7):
        o = o * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (c < 0 ? (o *= 1.2, c *= 1.2) : o *= 1.1), { min: c, max: o };
}, $y = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: a, min: r, max: l, config: c, data: o } = e;
  const { rawData: s, dimensions: u } = R.useContext(ze), [d, h] = u, m = c.runtime.barSeriesKeys || c.runtime.seriesKeys, y = c.runtime.xAxis.type, p = c.orientation === "horizontal", v = ($) => $[c.runtime.originalXAxis.dataKey], g = o.map(($) => v($)), { visualizationType: f } = c;
  let b = null, x = null, S = null, w = null, A = null, D = null, T = null;
  const z = {
    TIME: "time",
    LOG: "log",
    POINT: "point",
    LINEAR: "linear",
    BAND: "band"
  };
  if (p && (b = zy({ min: r * 1.03, ...e }), b.type = c.useLogScale ? z.LOG : z.LINEAR, x = Fy(y, t), x.rangeRound([0, a]), A = Ka(m, [0, a])), p || (T = Ka(g, [0, n], 0.5), b = Ka(t, [0, n], 0.5), b.type = z.POINT, x = Ry(e), A = Ka(m, [0, n])), c.xAxis.type === "date" && c.xAxis.sortDates && (b = Ef({
    domain: [Math.min(...t), Math.max(...t)],
    range: [0, n]
  }), T = b, b.type = z.LINEAR), c.visualizationType === "Deviation Bar") {
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
    if (c.boxplot.plots.map((O) => O.columnOutliers.map((N) => $.push(N))) && !c.boxplot.hideOutliers) {
      let O = Math.min(...$), N = Math.max(...$);
      O < r && (r = O), N > l && (l = N);
    }
    let k = Math.min(...c.boxplot.plots.map((O) => O.columnLowerBounds)), _ = Math.max(...c.boxplot.plots.map((O) => O.columnUpperBounds));
    k < r && (r = k), _ > l && (l = _), x = ht({
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
    let C = Math.max.apply(
      Math,
      o.map((_) => {
        var O;
        return _[(O = c.series[0]) == null ? void 0 : O.dataKey];
      })
    ), k = Math.max.apply(
      Math,
      o.map((_) => {
        var O;
        return _[(O = c.series[1]) == null ? void 0 : O.dataKey];
      })
    );
    w = ht({
      domain: [0, Math.max(C, k) * 1.02],
      range: [n / 2, 0]
    }), S = ht({
      domain: w.domain(),
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
    const C = 5, k = Number(c.forestPlot.leftWidthOffset) / 100 * n, _ = Number(c.forestPlot.rightWidthOffset) / 100 * n, O = Number(c.forestPlot.rightWidthOffsetMobile) / 100 * n, N = Number(c.forestPlot.leftWidthOffsetMobile) / 100 * n;
    d > 480 ? b = ht({
      domain: [Math.min(...o.map((P) => parseFloat(P[c.forestPlot.lower]))) - C, Math.max(...o.map((P) => parseFloat(P[c.forestPlot.upper]))) + C],
      range: [k, n - _],
      type: "linear"
    }) : b = ht({
      domain: [Math.min(...o.map((P) => parseFloat(P[c.forestPlot.lower]))) - C, Math.max(...o.map((P) => parseFloat(P[c.forestPlot.upper]))) + C],
      range: [N, n - O],
      type: "linear"
    });
  }
  return { xScale: b, yScale: x, seriesScale: A, g1xScale: w, g2xScale: S, xScaleNoPadding: D, xScaleBrush: T };
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
var Ia = R;
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
var Xy = R;
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
var yn = R, $n = Wy, rs = Vy, Jy = xl(ml), ls = xl(hl), Gy = xl(gl);
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
  var t = e === void 0 ? {} : e, n = t.resetOnStart, a = n === void 0 ? !1 : n, r = t.snapToPointer, l = r === void 0 ? !0 : r, c = t.onDragEnd, o = t.onDragMove, s = t.onDragStart, u = t.x, d = t.y, h = t.dx, m = t.dy, y = t.isDragging, p = t.restrict, v = p === void 0 ? {} : p, g = t.restrictToPath, f = (0, yn.useRef)({
    x: u,
    y: d,
    dx: h,
    dy: m
  }), b = (0, Jy.default)({
    x: u,
    y: d,
    dx: h ?? 0,
    dy: m ?? 0,
    isDragging: !1
  }), x = b[0], S = b[1], w = (0, yn.useState)(new $n.Point({
    x: 0,
    y: 0
  })), A = w[0], D = w[1];
  (0, yn.useEffect)(function() {
    (f.current.x !== u || f.current.y !== d || f.current.dx !== h || f.current.dy !== m) && (f.current = {
      x: u,
      y: d,
      dx: h,
      dy: m
    }, S(function(k) {
      return Kt({}, k, {
        x: u,
        y: d,
        dx: h ?? 0,
        dy: m ?? 0
      });
    }));
  }), (0, yn.useEffect)(function() {
    y !== void 0 && x.isDragging !== y && S(function(k) {
      return Kt({}, k, {
        isDragging: y
      });
    });
  }, [x.isDragging, y, S]);
  var T = (0, Gy.default)(g), z = (0, yn.useCallback)(function(k) {
    k.persist(), S(function(_) {
      var O = _.x, N = O === void 0 ? 0 : O, P = _.y, V = P === void 0 ? 0 : P, q = _.dx, j = _.dy, I = new $n.Point({
        x: (N || 0) + q,
        y: (V || 0) + j
      }), Z = (0, rs.localPoint)(k) || new $n.Point({
        x: 0,
        y: 0
      }), U = l ? Z : I, ue = (0, ls.default)(U, T, v);
      return D((0, $n.subtractPoints)(I, Z)), {
        isDragging: !0,
        dx: a ? 0 : _.dx,
        dy: a ? 0 : _.dy,
        x: a ? ue.x : ue.x - _.dx,
        y: a ? ue.y : ue.y - _.dy
      };
    }, s && function(_) {
      s(Kt({}, _, {
        event: k
      }));
    });
  }, [s, a, v, T, S, l]), $ = (0, yn.useCallback)(function(k) {
    k.persist(), S(function(_) {
      if (!_.isDragging)
        return _;
      var O = _.x, N = O === void 0 ? 0 : O, P = _.y, V = P === void 0 ? 0 : P, q = (0, rs.localPoint)(k) || new $n.Point({
        x: 0,
        y: 0
      }), j = l ? q : (0, $n.sumPoints)(q, A), I = (0, ls.default)(j, T, v);
      return Kt({}, _, {
        dx: I.x - N,
        dy: I.y - V
      });
    }, o && function(_) {
      _.isDragging && o(Kt({}, _, {
        event: k
      }));
    });
  }, [S, o, l, A, T, v]), C = (0, yn.useCallback)(function(k) {
    k.persist(), S(function(_) {
      return Kt({}, _, {
        isDragging: !1
      });
    }, c && function(_) {
      c(Kt({}, _, {
        event: k
      }));
    });
  }, [c, S]);
  return Kt({}, x, {
    dragEnd: C,
    dragMove: $,
    dragStart: z
  });
}
var zi = Gc, na = vl(ms), tr = vl(R), tg = vl(fl);
function vl(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gc(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, a = e.snapToPointer, r = a === void 0 ? !0 : a, l = e.children, c = e.dx, o = e.dy, s = e.height, u = e.onDragEnd, d = e.onDragMove, h = e.onDragStart, m = e.resetOnStart, y = e.width, p = e.x, v = e.y, g = e.isDragging, f = e.restrict, b = e.restrictToPath, x = (0, tg.default)({
    resetOnStart: m,
    snapToPointer: r,
    onDragEnd: u,
    onDragMove: d,
    onDragStart: h,
    x: p,
    y: v,
    dx: c,
    dy: o,
    isDragging: g,
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
    for (var u = [], d = e.domain(), h = o; h <= s; h += 1)
      u.push(d[h]);
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
      var s = a.props, u = s.onBrushHandleChange, d = s.type, h = s.onBrushStart;
      u && u(d, bl(o.event)), h && h(o);
    }, a.handleDragMove = function(o) {
      var s = a.props, u = s.updateBrush, d = s.type, h = s.isControlled;
      !o.isDragging || h || u(function(m) {
        var y = m.start, p = m.end, v = 0, g = Math.max(y.x, p.x), f = Math.min(y.x, p.x), b = Math.max(y.y, p.y), x = Math.min(y.y, p.y);
        switch (d) {
          case "right":
            return v = g + o.dx, _t({}, m, {
              activeHandle: d,
              extent: _t({}, m.extent, {
                x0: Math.max(Math.min(v, y.x), m.bounds.x0),
                x1: Math.min(Math.max(v, y.x), m.bounds.x1)
              })
            });
          case "left":
            return v = f + o.dx, _t({}, m, {
              activeHandle: d,
              extent: _t({}, m.extent, {
                x0: Math.min(v, p.x),
                x1: Math.max(v, p.x)
              })
            });
          case "bottom":
            return v = b + o.dy, _t({}, m, {
              activeHandle: d,
              extent: _t({}, m.extent, {
                y0: Math.min(v, y.y),
                y1: Math.max(v, y.y)
              })
            });
          case "top":
            return v = x + o.dy, _t({}, m, {
              activeHandle: d,
              extent: _t({}, m.extent, {
                y0: Math.min(v, p.y),
                y1: Math.max(v, p.y)
              })
            });
          default:
            return m;
        }
      });
    }, a.handleDragEnd = function() {
      var o = a.props, s = o.updateBrush, u = o.onBrushEnd, d = o.onBrushHandleChange, h = o.isControlled;
      h || s(function(m) {
        var y = m.start, p = m.end, v = m.extent;
        y.x = Math.min(v.x0, v.x1), y.y = Math.min(v.y0, v.y0), p.x = Math.max(v.x0, v.x1), p.y = Math.max(v.y0, v.y1);
        var g = _t({}, m, {
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
        return u && u(g), g;
      }), d && d();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this, l = this.props, c = l.stageWidth, o = l.stageHeight, s = l.brush, u = l.type, d = l.handle, h = l.isControlled, m = l.isDragInProgress, y = l.renderBrushHandle, p = d.x, v = d.y, g = d.width, f = d.height, b = u === "right" || u === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ i.createElement(zi, {
      width: c,
      height: o,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: h ? m : void 0
    }, function(x) {
      var S = x.dragStart, w = x.dragEnd, A = x.dragMove, D = x.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, D && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: c,
        height: o,
        style: {
          cursor: b
        },
        onPointerMove: A,
        onPointerUp: h ? void 0 : w,
        onPointerLeave: h ? void 0 : w
      }), !y && /* @__PURE__ */ i.createElement("rect", {
        x: p,
        y: v,
        width: g,
        height: f,
        fill: "transparent",
        className: "visx-brush-handle-" + u,
        onPointerDown: S,
        onPointerMove: A,
        onPointerUp: h ? void 0 : w,
        style: {
          cursor: b,
          pointerEvents: s.activeHandle || s.isBrushing ? "none" : "all"
        }
      }), y && /* @__PURE__ */ i.createElement("g", {
        onPointerDown: S,
        onPointerMove: A,
        onPointerUp: h ? void 0 : w
      }, y(_t({}, r.props.handle, {
        height: o,
        className: "visx-brush-handle-" + u,
        isBrushActive: s.extent.x0 !== -1 && s.extent.x1 !== -1
      }))));
    });
  }, t;
}(i.Component);
eu.propTypes = {
  stageWidth: W.number.isRequired,
  stageHeight: W.number.isRequired,
  updateBrush: W.func.isRequired,
  onBrushStart: W.func,
  onBrushEnd: W.func,
  handle: W.shape({
    x: W.number.isRequired,
    y: W.number.isRequired,
    width: W.number.isRequired,
    height: W.number.isRequired
  }).isRequired,
  isControlled: W.bool,
  isDragInProgress: W.bool,
  onBrushHandleChange: W.func,
  renderBrushHandle: W.func
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
      o.isDragging && u(function(h) {
        var m = h.start, y = h.end, p = Math.max(m.x, y.x), v = Math.min(m.x, y.x), g = Math.max(m.y, y.y), f = Math.min(m.y, y.y), b = 0, x = 0;
        switch (d) {
          case "topRight":
            return b = p + o.dx, x = f + o.dy, Ct({}, h, {
              activeHandle: d,
              extent: Ct({}, h.extent, {
                x0: Math.max(Math.min(b, m.x), h.bounds.x0),
                x1: Math.min(Math.max(b, m.x), h.bounds.x1),
                y0: Math.max(Math.min(x, y.y), h.bounds.y0),
                y1: Math.min(Math.max(x, y.y), h.bounds.y1)
              })
            });
          case "topLeft":
            return b = v + o.dx, x = f + o.dy, Ct({}, h, {
              activeHandle: d,
              extent: Ct({}, h.extent, {
                x0: Math.max(Math.min(b, y.x), h.bounds.x0),
                x1: Math.min(Math.max(b, y.x), h.bounds.x1),
                y0: Math.max(Math.min(x, y.y), h.bounds.y0),
                y1: Math.min(Math.max(x, y.y), h.bounds.y1)
              })
            });
          case "bottomLeft":
            return b = v + o.dx, x = g + o.dy, Ct({}, h, {
              activeHandle: d,
              extent: Ct({}, h.extent, {
                x0: Math.max(Math.min(b, y.x), h.bounds.x0),
                x1: Math.min(Math.max(b, y.x), h.bounds.x1),
                y0: Math.max(Math.min(x, m.y), h.bounds.y0),
                y1: Math.min(Math.max(x, m.y), h.bounds.y1)
              })
            });
          case "bottomRight":
            return b = p + o.dx, x = g + o.dy, Ct({}, h, {
              activeHandle: d,
              extent: Ct({}, h.extent, {
                x0: Math.max(Math.min(b, m.x), h.bounds.x0),
                x1: Math.min(Math.max(b, m.x), h.bounds.x1),
                y0: Math.max(Math.min(x, m.y), h.bounds.y0),
                y1: Math.min(Math.max(x, m.y), h.bounds.y1)
              })
            });
          default:
            return h;
        }
      });
    }, a.cornerDragEnd = function() {
      var o = a.props, s = o.updateBrush, u = o.onBrushEnd;
      s(function(d) {
        var h = d.start, m = d.end, y = d.extent;
        h.x = Math.min(y.x0, y.x1), h.y = Math.min(y.y0, y.y0), m.x = Math.max(y.x0, y.x1), m.y = Math.max(y.y0, y.y1);
        var p = Ct({}, d, {
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
        return u && u(p), p;
      });
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this.props, l = r.type, c = r.brush, o = r.stageWidth, s = r.stageHeight, u = r.style, d = r.corner, h = (u == null ? void 0 : u.cursor) || (l === "topLeft" || l === "bottomRight" ? "nwse-resize" : "nesw-resize"), m = c.activeHandle || c.isBrushing ? "none" : "all";
    return /* @__PURE__ */ i.createElement(zi, {
      width: o,
      height: s,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(y) {
      var p = y.dragMove, v = y.dragEnd, g = y.dragStart, f = y.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, f && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: o,
        height: s,
        style: {
          cursor: h
        },
        onPointerMove: p,
        onPointerUp: v
      }), /* @__PURE__ */ i.createElement("rect", Ct({
        fill: "transparent",
        onPointerDown: g,
        onPointerMove: p,
        onPointerUp: v,
        className: "visx-brush-corner-" + l,
        style: Ct({
          cursor: h,
          pointerEvents: m
        }, u)
      }, d)));
    });
  }, t;
}(i.Component);
El.propTypes = {
  stageWidth: W.number.isRequired,
  stageHeight: W.number.isRequired,
  updateBrush: W.func.isRequired,
  onBrushEnd: W.func,
  corner: W.shape({
    x: W.number.isRequired,
    y: W.number.isRequired,
    width: W.number.isRequired,
    height: W.number.isRequired
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
      d || u(function(h) {
        var m = h.start, y = m.x, p = m.y, v = h.end, g = v.x, f = v.y, b = o.dx > 0 ? Math.min(o.dx, h.bounds.x1 - g) : Math.max(o.dx, h.bounds.x0 - y), x = o.dy > 0 ? Math.min(o.dy, h.bounds.y1 - f) : Math.max(o.dy, h.bounds.y0 - p);
        return nn({}, h, {
          isBrushing: !0,
          extent: nn({}, h.extent, {
            x0: y + b,
            x1: g + b,
            y0: p + x,
            y1: f + x
          })
        });
      });
    }, a.selectionDragEnd = function() {
      var o = a.props, s = o.updateBrush, u = o.onBrushEnd, d = o.onMoveSelectionChange, h = o.isControlled;
      h || s(function(m) {
        var y = nn({}, m, {
          isBrushing: !1,
          start: nn({}, m.start, {
            x: Math.min(m.extent.x0, m.extent.x1),
            y: Math.min(m.extent.y0, m.extent.y1)
          }),
          end: nn({}, m.end, {
            x: Math.max(m.extent.x0, m.extent.x1),
            y: Math.max(m.extent.y0, m.extent.y1)
          })
        });
        return u && u(y), y;
      }), d && d();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this.props, l = r.width, c = r.height, o = r.stageWidth, s = r.stageHeight, u = r.brush, d = r.disableDraggingSelection, h = r.onMouseLeave, m = r.onMouseMove, y = r.onMouseUp, p = r.onClick, v = r.selectedBoxStyle, g = r.isControlled, f = r.isDragInProgress;
    return /* @__PURE__ */ i.createElement(zi, {
      width: l,
      height: c,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: g ? f : void 0
    }, function(b) {
      var x = b.isDragging, S = b.dragStart, w = b.dragEnd, A = b.dragMove;
      return /* @__PURE__ */ i.createElement("g", null, x && /* @__PURE__ */ i.createElement("rect", {
        width: o,
        height: s,
        fill: "transparent",
        onPointerUp: g ? void 0 : w,
        onPointerMove: A,
        onPointerLeave: g ? void 0 : w,
        style: rg
      }), /* @__PURE__ */ i.createElement("rect", nn({
        x: Math.min(u.extent.x0, u.extent.x1),
        y: Math.min(u.extent.y0, u.extent.y1),
        width: l,
        height: c,
        className: "visx-brush-selection",
        onPointerDown: d ? void 0 : S,
        onPointerLeave: function(T) {
          h && h(T);
        },
        onPointerMove: function(T) {
          A(T), m && m(T);
        },
        onPointerUp: function(T) {
          g || w(T), y && y(T);
        },
        onClick: function(T) {
          p && p(T);
        },
        style: {
          pointerEvents: u.isBrushing || u.activeHandle ? "none" : "all",
          cursor: d ? void 0 : "move"
        }
      }, v)));
    });
  }, t;
}(i.Component);
Al.propTypes = {
  width: W.number.isRequired,
  height: W.number.isRequired,
  stageWidth: W.number.isRequired,
  stageHeight: W.number.isRequired,
  updateBrush: W.func.isRequired,
  onMoveSelectionChange: W.func,
  onBrushStart: W.func,
  onBrushEnd: W.func,
  disableDraggingSelection: W.bool.isRequired,
  onMouseLeave: W.func,
  onMouseMove: W.func,
  onMouseUp: W.func,
  onClick: W.func,
  isControlled: W.bool,
  isDragInProgress: W.bool
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
      var o = r.props, s = o.useWindowMoveEvents, u = o.onBrushEnd, d = o.resetOnEnd, h = r.state.brushingType;
      s && h && r.updateBrush(function(m) {
        var y = m.start, p = m.end, v = m.extent;
        y.x = Math.min(v.x0, v.x1), y.y = Math.min(v.y0, v.y0), p.x = Math.max(v.x0, v.x1), p.y = Math.max(v.y0, v.y1);
        var g = Nt({}, m, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return u && u(g), d && r.reset(), g;
      });
    }, r.handleWindowPointerMove = function(o) {
      var s = r.props.useWindowMoveEvents, u = r.state, d = u.brushingType, h = u.isBrushing, m = u.brushPageOffset, y = u.start;
      if (!(!s || !h)) {
        var p = o.pageX - ((m == null ? void 0 : m.pageX) || 0), v = o.pageY - ((m == null ? void 0 : m.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(d ?? "") && r.updateBrush(function(g) {
          var f = g.start, b = f.x, x = f.y, S = g.end, w = S.x, A = S.y;
          return Nt({}, g, {
            isBrushing: !0,
            extent: Nt({}, g.extent, r.getExtent({
              x: d === "left" ? Math.min(Math.max(b + p, g.bounds.x0), g.bounds.x1) : b,
              y: d === "top" ? Math.min(Math.max(x + v, g.bounds.y0), g.bounds.y1) : x
            }, {
              x: d === "right" ? Math.min(Math.max(w + p, g.bounds.x0), g.bounds.x1) : w,
              y: d === "bottom" ? Math.min(Math.max(A + v, g.bounds.y0), g.bounds.y1) : A
            }))
          });
        }), d === "move" && r.updateBrush(function(g) {
          var f = g.start, b = f.x, x = f.y, S = g.end, w = S.x, A = S.y, D = p > 0 ? Math.min(p, g.bounds.x1 - w) : Math.max(p, g.bounds.x0 - b), T = v > 0 ? Math.min(v, g.bounds.y1 - A) : Math.max(v, g.bounds.y0 - x);
          return Nt({}, g, {
            isBrushing: !0,
            extent: Nt({}, g.extent, {
              x0: b + D,
              y0: x + T,
              x1: w + D,
              y1: A + T
            })
          });
        }), d === "select" && r.updateBrush(function(g) {
          var f = g.start, b = f.x, x = f.y, S = {
            x: Math.min(Math.max(b + p, g.bounds.x0), g.bounds.x1),
            y: Math.min(Math.max(x + v, g.bounds.y0), g.bounds.y1)
          }, w = r.getExtent(y, S), A = Nt({}, g, {
            end: S,
            extent: w
          });
          return A;
        });
      }
    }, r.getExtent = function(o, s) {
      var u = r.props, d = u.brushDirection, h = u.width, m = u.height, y = d === "vertical" ? 0 : Math.min(o.x || 0, s.x || 0), p = d === "vertical" ? h : Math.max(o.x || 0, s.x || 0), v = d === "horizontal" ? 0 : Math.min(o.y || 0, s.y || 0), g = d === "horizontal" ? m : Math.max(o.y || 0, s.y || 0);
      return {
        x0: y,
        x1: p,
        y0: v,
        y1: g
      };
    }, r.handleDragStart = function(o) {
      var s = r.props, u = s.onBrushStart, d = s.left, h = s.top, m = s.inheritedMargin, y = s.useWindowMoveEvents, p = m != null && m.left ? m.left : 0, v = m != null && m.top ? m.top : 0, g = {
        x: (o.x || 0) + o.dx - d - p,
        y: (o.y || 0) + o.dy - h - v
      }, f = Nt({}, g);
      u && u(g), r.updateBrush(function(b) {
        return Nt({}, b, {
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
          brushPageOffset: y ? bl(o.event) : void 0
        });
      });
    }, r.handleBrushStart = function(o) {
      var s = r.props, u = s.onBrushStart, d = s.left, h = s.top, m = s.inheritedMargin;
      if (u) {
        var y = m != null && m.left ? m.left : 0, p = m != null && m.top ? m.top : 0, v = {
          x: (o.x || 0) + o.dx - d - y,
          y: (o.y || 0) + o.dy - h - p
        };
        u(v);
      }
    }, r.handleDragMove = function(o) {
      var s = r.props, u = s.left, d = s.top, h = s.inheritedMargin, m = s.useWindowMoveEvents;
      if (!(!o.isDragging || m)) {
        var y = (h == null ? void 0 : h.left) || 0, p = (h == null ? void 0 : h.top) || 0, v = {
          x: (o.x || 0) + o.dx - u - y,
          y: (o.y || 0) + o.dy - d - p
        };
        r.updateBrush(function(g) {
          var f = g.start, b = r.getExtent(f, v);
          return Nt({}, g, {
            end: v,
            extent: b
          });
        });
      }
    }, r.handleDragEnd = function() {
      var o = r.props, s = o.onBrushEnd, u = o.resetOnEnd, d = o.useWindowMoveEvents;
      d || r.updateBrush(function(h) {
        var m = h.extent, y = Nt({}, h, {
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
        return s && s(y), u && r.reset(), y;
      });
    }, r.getBrushWidth = function() {
      var o = r.state.extent, s = o.x0, u = o.x1;
      return Math.max(Math.max(s, u) - Math.min(s, u), 0);
    }, r.getBrushHeight = function() {
      var o = r.state.extent, s = o.y1, u = o.y0;
      return Math.max(Math.max(u, s) - Math.min(u, s), 0);
    }, r.handles = function() {
      var o = r.props.handleSize, s = r.state.extent, u = s.x0, d = s.x1, h = s.y0, m = s.y1, y = o / 2, p = r.getBrushWidth(), v = r.getBrushHeight();
      return {
        top: {
          x: u - y,
          y: h - y,
          height: o,
          width: p + o
        },
        bottom: {
          x: u - y,
          y: m - y,
          height: o,
          width: p + o
        },
        right: {
          x: d - y,
          y: h - y,
          height: v + o,
          width: o
        },
        left: {
          x: u - y,
          y: h - y,
          height: v + o,
          width: o
        }
      };
    }, r.corners = function() {
      var o = r.props.handleSize, s = r.state.extent, u = s.x0, d = s.x1, h = s.y0, m = s.y1, y = o / 2, p = o, v = o;
      return {
        topLeft: {
          x: Math.min(u, d) - y,
          y: Math.min(h, m) - y,
          width: p,
          height: v
        },
        topRight: {
          x: Math.max(u, d) - y,
          y: Math.min(h, m) - y,
          width: p,
          height: v
        },
        bottomLeft: {
          x: Math.min(u, d) - y,
          y: Math.max(h, m) - y,
          width: p,
          height: v
        },
        bottomRight: {
          x: Math.max(u, d) - y,
          y: Math.max(h, m) - y,
          width: p,
          height: v
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
        var d = l.props.width / r.width, h = l.props.height / r.height;
        o = {
          x: d * u.x0,
          y: h * u.y0
        }, s = {
          x: d * u.x1,
          y: h * u.y1
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
    var r = this, l = this.state, c = l.start, o = l.end, s = this.props, u = s.top, d = s.left, h = s.width, m = s.height, y = s.onMouseLeave, p = s.onMouseUp, v = s.onMouseMove, g = s.onBrushEnd, f = s.onClick, b = s.resizeTriggerAreas, x = s.selectedBoxStyle, S = s.disableDraggingSelection, w = s.clickSensitivity, A = s.useWindowMoveEvents, D = s.renderBrushHandle, T = this.state.brushingType, z = this.handles(), $ = this.corners(), C = this.getBrushWidth(), k = this.getBrushHeight(), _ = new Set(b);
    return /* @__PURE__ */ i.createElement(be, {
      className: "visx-brush",
      top: u,
      left: d
    }, /* @__PURE__ */ i.createElement(zi, {
      width: h,
      height: m,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: A ? T === "select" : void 0
    }, function(O) {
      var N = O.dragStart, P = O.isDragging, V = O.dragMove, q = O.dragEnd;
      return /* @__PURE__ */ i.createElement(Pt, {
        className: "visx-brush-overlay",
        fill: "transparent",
        x: 0,
        y: 0,
        width: h,
        height: m,
        onDoubleClick: function() {
          return r.reset();
        },
        onClick: function(I) {
          var Z = r.mouseUpTime - r.mouseDownTime;
          f && Z < w && f(I);
        },
        onPointerDown: function(I) {
          r.mouseDownTime = Date.now(), N(I);
        },
        onPointerLeave: function(I) {
          y && y(I);
        },
        onPointerMove: function(I) {
          !P && v && v(I), P && V(I);
        },
        onPointerUp: function(I) {
          r.mouseUpTime = Date.now(), p && p(I), q(I);
        },
        style: og
      });
    }), c && o && /* @__PURE__ */ i.createElement(Al, {
      updateBrush: this.updateBrush,
      width: C,
      height: k,
      stageWidth: h,
      stageHeight: m,
      brush: this.state,
      disableDraggingSelection: S,
      onBrushEnd: g,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: y,
      onMouseMove: v,
      onMouseUp: p,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: f,
      selectedBoxStyle: x,
      isControlled: A,
      isDragInProgress: A ? T === "move" : void 0
    }), c && o && Object.keys(z).filter(function(O) {
      return _.has(O);
    }).map(function(O) {
      var N = z[O];
      return N && /* @__PURE__ */ i.createElement(eu, {
        key: "handle-" + O,
        type: O,
        handle: N,
        stageWidth: h,
        stageHeight: m,
        updateBrush: r.updateBrush,
        brush: r.state,
        onBrushStart: r.handleBrushStart,
        onBrushEnd: g,
        isControlled: A,
        isDragInProgress: A ? T === O : void 0,
        onBrushHandleChange: r.handleBrushingTypeChange,
        renderBrushHandle: D
      });
    }), c && o && Object.keys($).filter(function(O) {
      return _.has(O);
    }).map(function(O) {
      var N = $[O];
      return N && /* @__PURE__ */ i.createElement(El, {
        key: "corner-" + O,
        type: O,
        brush: r.state,
        updateBrush: r.updateBrush,
        stageWidth: h,
        stageHeight: m,
        corner: N,
        onBrushEnd: g
      });
    }));
  }, t;
}(i.Component);
Tl.propTypes = {
  brushDirection: W.oneOf(["horizontal", "vertical", "both"]),
  width: W.number.isRequired,
  height: W.number.isRequired,
  left: W.number.isRequired,
  top: W.number.isRequired,
  onChange: W.func,
  handleSize: W.number,
  resizeTriggerAreas: W.array,
  onBrushStart: W.func,
  onBrushEnd: W.func,
  onMouseLeave: W.func,
  onMouseUp: W.func,
  onMouseMove: W.func,
  onClick: W.func,
  clickSensitivity: W.number,
  disableDraggingSelection: W.bool,
  resetOnEnd: W.bool,
  useWindowMoveEvents: W.bool,
  renderBrushHandle: W.func
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
        var u = o.x, d = o.y, h = a.props, m = h.xScale, y = h.yScale, p = Ai(m, u), v = Ai(y, d);
        s({
          x: "invert" in m && typeof m.invert < "u" ? p : m.domain()[p],
          y: "invert" in y && typeof y.invert < "u" ? v : y.domain()[v]
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
    var l = this.props, c = l.xScale, o = l.yScale, s = r.extent, u = s.x0, d = s.x1, h = s.y0, m = s.y1, y = os(c, u || 0, d || 0, ss), p = os(o, h || 0, m || 0, ss), v = {
      x0: y.start || 0,
      x1: y.end || 0,
      xValues: y.values,
      y0: p.start || 0,
      y1: p.end || 0,
      yValues: p.values
    };
    return v;
  }, n.render = function() {
    var r = this.props, l = r.xScale, c = r.yScale, o = r.height, s = r.width, u = r.margin, d = r.brushDirection, h = r.initialBrushPosition, m = r.innerRef, y = r.resizeTriggerAreas, p = r.brushRegion, v = r.yAxisOrientation, g = r.xAxisOrientation, f = r.selectedBoxStyle, b = r.disableDraggingSelection, x = r.resetOnEnd, S = r.onMouseLeave, w = r.onMouseMove, A = r.onClick, D = r.handleSize, T = r.useWindowMoveEvents, z = r.renderBrushHandle;
    if (!l || !c)
      return null;
    var $, C, k, _, O = u != null && u.left ? u.left : 0, N = u != null && u.top ? u.top : 0, P = u != null && u.right ? u.right : 0, V = u != null && u.bottom ? u.bottom : 0;
    return p === "chart" ? (k = 0, _ = 0, $ = s, C = o) : p === "yAxis" ? (_ = 0, C = o, v === "right" ? (k = s, $ = P) : (k = -O, $ = O)) : (k = 0, $ = s, g === "bottom" ? (_ = o, C = V) : (_ = -N, C = N)), /* @__PURE__ */ i.createElement(Tl, {
      width: $,
      height: C,
      left: k,
      top: _,
      brushDirection: d,
      disableDraggingSelection: b,
      handleSize: D,
      inheritedMargin: u,
      initialBrushPosition: h,
      ref: m,
      resetOnEnd: x,
      resizeTriggerAreas: y,
      selectedBoxStyle: f,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: A,
      onMouseLeave: S,
      onMouseMove: w,
      useWindowMoveEvents: T,
      renderBrushHandle: z
    });
  }, t;
}(R.Component);
Sl.propTypes = {
  height: W.number,
  width: W.number,
  onChange: W.func,
  onBrushEnd: W.func,
  brushDirection: W.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: W.array,
  brushRegion: W.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: W.oneOf(["left", "right"]),
  xAxisOrientation: W.oneOf(["top", "bottom"]),
  disableDraggingSelection: W.bool,
  resetOnEnd: W.bool,
  handleSize: W.number,
  useWindowMoveEvents: W.bool,
  renderBrushHandle: W.func
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
  const { transformedData: t, config: n, parseDate: a, formatDate: r, updateConfig: l } = R.useContext(ze), { fontSize: c } = Ca(), [o, s] = R.useState([...t]), u = R.useRef(null), d = 15, [h, m] = R.useState({
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
  }, v = (f) => {
    var T;
    if (!f)
      return;
    const { xValues: b } = f, x = (T = n.xAxis) == null ? void 0 : T.dataKey, S = t.filter((z) => b.includes(z[x])), w = b.slice().reverse().find((z) => z !== void 0), A = b.find((z) => z !== void 0), D = (z) => n.runtime.xAxis.type === "date" ? r(a(z)) : z;
    m((z) => {
      var $, C;
      return {
        ...z,
        startPosition: ($ = u.current) == null ? void 0 : $.state.start.x,
        endPosition: (C = u.current) == null ? void 0 : C.state.end.x,
        endValue: D(w),
        startValue: D(A)
      };
    }), s(S);
  };
  R.useEffect(() => {
    l({
      ...n,
      brush: {
        ...n.brush,
        data: o
      }
    });
  }, [o]), R.useEffect(() => {
    n.brush.active || s(t);
  }, [n.brush.active]);
  const g = () => {
    const f = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
    let b = 0;
    const x = 20;
    return n.xAxis.label || (!n.isResponsiveTicks && f && (b = Number(f + n.xAxis.tickWidthMax) / 1.6), !n.isResponsiveTicks && !f && (b = Number(n.xAxis.labelOffset) - x), n.isResponsiveTicks && n.dynamicMarginTop && (b = Number(n.xAxis.labelOffset + n.xAxis.tickWidthMax / 1.6)), n.isResponsiveTicks && !n.dynamicMarginTop && (b = Number(n.xAxis.labelOffset - x))), n.xAxis.label && (!n.isResponsiveTicks && f && (b = Number(n.xAxis.tickWidthMax + f)), !n.isResponsiveTicks && !f && (b = n.xAxis.labelOffset + x), n.isResponsiveTicks && !f && (b = Number(n.dynamicMarginTop ? n.dynamicMarginTop : n.xAxis.labelOffset) + x)), b;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(n.visualizationType))
    return /* @__PURE__ */ i.createElement(be, { display: n.brush.active ? "block" : "none", top: Number(e.yMax) + g(), left: Number(n.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ i.createElement("rect", { fill: "#eee", width: e.xMax, height: n.brush.height, rx: d }), /* @__PURE__ */ i.createElement(
      cg,
      {
        renderBrushHandle: (f) => {
          var b;
          return /* @__PURE__ */ i.createElement(dg, { textProps: h, fontSize: c[n.fontSize], ...f, isBrushing: (b = u.current) == null ? void 0 : b.state.isBrushing });
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
        onChange: v
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
  const { isEditor: t, isDashboard: n, transformedData: a, dimensions: r, config: l, parseDate: c, formatDate: o, currentViewport: s, formatNumber: u, handleChartAriaLabels: d, updateConfig: h, handleLineType: m, rawData: y, capitalize: p, setSharedFilter: v, setSharedFilterValue: g, getTextWidth: f, isDebug: b } = R.useContext(ze), { visualizationType: x, visualizationSubType: S, orientation: w, xAxis: A, yAxis: D, runtime: T, debugSvg: z } = l;
  let [$] = r;
  l && l.legend && !l.legend.hide && l.legend.position !== "bottom" && ["lg", "md"].includes(s) && ($ = $ * 0.73);
  const { horizontal: C } = l.heights, k = w === "horizontal", _ = !0;
  let O = l.aspectRatio ? $ * l.aspectRatio : l.visualizationType === "Forest Plot" ? l.heights.vertical : l.heights[w];
  const N = $ - T.yAxis.size - (x === "Combo" ? l.yAxis.rightAxisSize : 0);
  let P = O - (w === "horizontal" ? 0 : T.xAxis.size);
  l.visualizationType === "Forest Plot" && (O = O + l.data.length * l.forestPlot.rowHeight, P = P + l.data.length * l.forestPlot.rowHeight), l.brush.active && (O = O + l.brush.height);
  const { minValue: V, maxValue: q, existPositiveValue: j, isAllLine: I } = $i(l, a), { yScaleRight: Z, hasRightAxis: U } = dl({ config: l, yMax: P, data: a, updateConfig: h }), { hasTopAxis: ue } = By(l), [de, he] = R.useState(!1), Ce = R.useRef(), Te = R.useRef(), ke = ol(Ce, {
    freezeOnceVisible: !1
  }), ee = (Y) => l.runtime.xAxis.type === "date" ? c(Y[l.runtime.originalXAxis.dataKey]).getTime() : Y[l.runtime.originalXAxis.dataKey], K = (Y, ve) => Y[ve], G = l.brush.active && ((un = l.brush.data) != null && un.length) ? l.brush.data.map((Y) => ee(Y)) : a.map((Y) => ee(Y)), F = l.orientation === "horizontal" ? "yAxis" : "xAxis", pe = { data: a, config: l, minValue: V, maxValue: q, isAllLine: I, existPositiveValue: j, xAxisDataMapped: G, xMax: N, yMax: P }, { min: ne, max: fe } = Dy(pe), { xScale: oe, yScale: se, seriesScale: Le, g1xScale: Ke, g2xScale: we, xScaleNoPadding: xe, xScaleBrush: le } = $y({ ...pe, min: ne, max: fe }), [te, Fe] = R.useState(null);
  R.useEffect(() => {
    var Y;
    Fe((Y = Te == null ? void 0 : Te.current) == null ? void 0 : Y.getBoundingClientRect());
  }, [Te, l.legend]);
  const ce = (Y, ve) => {
    if (l.useLogScale && Y === 0.1 && (Y = 0), !(l.data && !l.data[ve] && x === "Forest Plot"))
      return l.visualizationType === "Forest Plot" ? l.data[ve][l.xAxis.dataKey] : T.yAxis.type === "date" ? o(c(Y)) : w === "vertical" ? u(Y, "left", _) : Y;
  }, Ne = (Y) => (l.useLogScale && Y === 0.1 && (Y = 0), T.xAxis.type === "date" ? o(Y) : w === "horizontal" ? u(Y, "left", _) : l.xAxis.type === "continuous" ? u(Y, "bottom", _) : Y), Se = (Y) => {
    const { numTicks: ve } = T[Y];
    let Me;
    return Y === "yAxis" && (Me = k && !ve ? a.length : k && ve ? ve : !k && !ve ? void 0 : !k && ve && ve, Me === void 0 && !l.dataFormat.roundTo && (Number(fe) <= 3 ? Me = 2 : Me = 4), Number(Me) > Number(fe) && (Me = Number(ne) < 0 ? Math.round(fe) * 2 : Math.round(fe))), Y === "xAxis" && (Me = k && !ve ? void 0 : k && ve ? ve : !k && !ve ? void 0 : !k && ve && ve, k && Me === void 0 && !l.dataFormat.roundTo && (fe <= 3 ? Me = 2 : Me = 4)), Me;
  }, { tooltipData: B, showTooltip: _e, hideTooltip: Ge, tooltipOpen: nt, tooltipLeft: et, tooltipTop: ft } = Lc(), {
    handleTooltipMouseOver: at,
    handleTooltipClick: Je,
    handleTooltipMouseOff: Et,
    tooltipStyles: Xt,
    TooltipListItem: Nn,
    getXValueFromCoordinateDate: Na,
    getXValueFromCoordinate: At
  } = $c({
    xScale: oe,
    yScale: se,
    showTooltip: _e,
    hideTooltip: Ge
  });
  R.useEffect(() => {
    document.querySelector(".isEditor") && he((ve) => !0);
  }), R.useEffect(() => {
    (ke == null ? void 0 : ke.isIntersecting) === !0 && l.animate && setTimeout(() => {
      he((Y) => !0);
    }, 500);
  }, [ke == null ? void 0 : ke.isIntersecting, l.animate]);
  const Pn = () => {
    const { visualizationType: Y } = l;
    return Y === "Combo" && T.forecastingSeriesKeys > 0 || Y === "Area Chart" || Y === "Line" || Y === "Bar";
  }, Jt = Number(w === "horizontal" ? l.xAxis.size : l.yAxis.size), Xn = () => l.visualizationType === "Forest Plot" ? l.data.length : Se("yAxis");
  return isNaN($) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(Rt, { component: "LinearChart" }, /* @__PURE__ */ i.createElement("div", { style: { width: `${$}px`, height: `${O}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ i.createElement("svg", { width: "100%", height: "100%", className: `linear ${l.animate ? "animated" : ""} ${de && l.animate ? "animate" : ""} ${z && "debug"}`, role: "img", "aria-label": d(l), ref: Te, style: { overflow: "visible" } }, /* @__PURE__ */ i.createElement(Pt, { width: $, height: O, fill: "transparent" }), " ", l.regions ? l.regions.map((Y) => {
    if (!Object.keys(Y).includes("from") || !Object.keys(Y).includes("to"))
      return null;
    let ve, Me, Ee;
    return l.xAxis.type === "date" && (ve = oe(c(Y.from).getTime()), Me = oe(c(Y.to).getTime()), Ee = Me - ve), l.xAxis.type === "categorical" && (ve = oe(Y.from), Me = oe(Y.to), Ee = Me - ve), !ve || !Me ? null : /* @__PURE__ */ i.createElement(be, { className: "regions", left: Number(T.yAxis.size), key: Y.label }, /* @__PURE__ */ i.createElement(
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
    ), /* @__PURE__ */ i.createElement("rect", { x: ve, y: 0, width: Ee, height: P, fill: Y.background, opacity: 0.3 }), /* @__PURE__ */ i.createElement($e, { x: ve + Ee / 2, y: 5, fill: Y.color, verticalAnchor: "start", textAnchor: "middle" }, Y.label));
  }) : "", !["Spark Line", "Forest Plot"].includes(x) && /* @__PURE__ */ i.createElement(Kp, { scale: se, tickLength: l.useLogScale ? 6 : 8, left: Number(T.yAxis.size) - l.yAxis.axisPadding, label: T.yAxis.label, stroke: "#333", tickFormat: (Y, ve) => ce(Y, ve), numTicks: Xn() }, (Y) => {
    const ve = T.horizontal ? (Y.axisToPoint.y - Y.axisFromPoint.y) / 2 : (Y.axisFromPoint.y - Y.axisToPoint.y) / 2, Me = P / Y.ticks.length / 2 - P / Y.ticks.length * (1 - l.barThickness) + 5;
    return /* @__PURE__ */ i.createElement(be, { className: "left-axis" }, Y.ticks.map((Ee, ut) => {
      const vt = Y.ticks[0].to.y, Tt = 15, E = String(Ee.value).startsWith("1") || Ee.value === 0.1 ? "block" : "none", J = E === "block" ? 7 : 0, ae = { x: Ee.to.x - J, y: Ee.to.y };
      return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${Ee.value}-${ut}`, className: "vx-axis-tick" }, !T.yAxis.hideTicks && /* @__PURE__ */ i.createElement(qe, { key: `${Ee.value}--hide-hideTicks`, from: Ee.from, to: l.useLogScale ? ae : Ee.to, stroke: l.yAxis.tickColor, display: T.horizontal ? "none" : "block" }), T.yAxis.gridLines ? /* @__PURE__ */ i.createElement(qe, { key: `${Ee.value}--hide-hideGridLines`, display: (l.useLogScale && E).toString(), from: { x: Ee.from.x + N, y: Ee.from.y }, to: Ee.from, stroke: "rgba(0,0,0,0.3)" }) : "", w === "horizontal" && S !== "stacked" && l.yAxis.labelPlacement === "On Date/Category Axis" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        $e,
        {
          transform: `translate(${Ee.to.x - 5}, ${l.isLollipopChart ? Ee.to.y - vt : Ee.to.y - vt + (Number(l.barHeight * l.series.length) - Tt) / 2}) rotate(-${l.runtime.horizontal && l.runtime.yAxis.tickRotation || 0})`,
          verticalAnchor: "start",
          textAnchor: "end"
        },
        Ee.formattedValue
      ), w === "horizontal" && S === "stacked" && l.yAxis.labelPlacement === "On Date/Category Axis" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { transform: `translate(${Ee.to.x - 5}, ${Ee.to.y - vt + (Number(l.barHeight) - Tt) / 2}) rotate(-${T.horizontal ? T.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, Ee.formattedValue), w === "horizontal" && x === "Paired Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { transform: `translate(${Ee.to.x - 5}, ${Ee.to.y - vt + Number(l.barHeight) / 2}) rotate(-${T.horizontal ? T.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Ee.formattedValue), w === "horizontal" && x === "Deviation Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { transform: `translate(${Ee.to.x - 5}, ${l.isLollipopChart ? Ee.to.y - vt + 2 : Ee.to.y - vt + Number(l.barHeight) / 2}) rotate(-${T.horizontal ? T.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Ee.formattedValue), w === "vertical" && x !== "Paired Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
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
    }), !l.yAxis.hideAxis && /* @__PURE__ */ i.createElement(qe, { from: Y.axisFromPoint, to: T.horizontal ? { x: 0, y: l.visualizationType === "Forest Plot" ? O : Number(C) } : Y.axisToPoint, stroke: "#000" }), se.domain()[0] < 0 && /* @__PURE__ */ i.createElement(qe, { from: { x: Y.axisFromPoint.x, y: se(0) }, to: { x: N, y: se(0) }, stroke: "#333" }), x === "Bar" && w === "horizontal" && oe.domain()[0] < 0 && /* @__PURE__ */ i.createElement(qe, { from: { x: oe(0), y: 0 }, to: { x: oe(0), y: P }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ i.createElement($e, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * T.yAxis.size}, ${ve}) rotate(-90)`, fontWeight: "bold", fill: l.yAxis.labelColor }, Y.label));
  }), U && /* @__PURE__ */ i.createElement(Up, { scale: Z, left: Number($ - l.yAxis.rightAxisSize), label: l.yAxis.rightLabel, tickFormat: (Y) => u(Y, "right"), numTicks: T.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Y) => {
    const ve = T.horizontal ? (Y.axisToPoint.y - Y.axisFromPoint.y) / 2 : (Y.axisFromPoint.y - Y.axisToPoint.y) / 2, Me = P / Y.ticks.length / 2 - P / Y.ticks.length * (1 - l.barThickness) + 5;
    return /* @__PURE__ */ i.createElement(be, { className: "right-axis" }, Y.ticks.map((Ee, ut) => /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${Ee.value}-${ut}`, className: "vx-axis-tick" }, !T.yAxis.rightHideTicks && /* @__PURE__ */ i.createElement(qe, { from: Ee.from, to: Ee.to, display: T.horizontal ? "none" : "block", stroke: l.yAxis.rightAxisTickColor }), T.yAxis.rightGridLines ? /* @__PURE__ */ i.createElement(qe, { from: { x: Ee.from.x + N, y: Ee.from.y }, to: Ee.from, stroke: "rgba(0,0,0,0.3)" }) : "", !l.yAxis.rightHideLabel && /* @__PURE__ */ i.createElement($e, { x: Ee.to.x, y: Ee.to.y + (T.horizontal ? Me : 0), verticalAnchor: T.horizontal ? "start" : "middle", textAnchor: "start", fill: l.yAxis.rightAxisTickLabelColor }, Ee.formattedValue))), !l.yAxis.rightHideAxis && /* @__PURE__ */ i.createElement(qe, { from: Y.axisFromPoint, to: Y.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement($e, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${l.yAxis.rightLabelOffsetSize ? l.yAxis.rightLabelOffsetSize : 0}, ${ve}) rotate(-90)`, fontWeight: "bold", fill: l.yAxis.rightAxisLabelColor }, Y.label));
  }), ue && l.topAxis.hasLine && /* @__PURE__ */ i.createElement(
    Zp,
    {
      stroke: "#333",
      left: Number(T.yAxis.size),
      scale: oe,
      hideTicks: !0,
      hideZero: !0,
      tickLabelProps: () => ({
        fill: "transparent"
      })
    }
  ), x !== "Paired Bar" && x !== "Spark Line" && /* @__PURE__ */ i.createElement(
    Ya,
    {
      top: T.horizontal && l.visualizationType !== "Forest Plot" ? Number(C) + Number(l.xAxis.axisPadding) : (l.visualizationType === "Forest Plot", P + Number(l.xAxis.axisPadding)),
      left: Number(T.yAxis.size),
      label: T.xAxis.label,
      tickFormat: Ne,
      scale: oe,
      stroke: "#333",
      numTicks: Se("xAxis"),
      tickStroke: "#333"
    },
    (Y) => {
      const ve = l.visualizationType !== "Forest Plot" ? (Y.axisToPoint.x - Y.axisFromPoint.x) / 2 : $ / 2, Me = (Pe) => /\s/.test(Pe), Ee = Y.ticks.some((Pe) => Me(Pe.value)), ut = { small: 16, medium: 18, large: 20 }, vt = 8, Tt = Math.max(...Y.ticks.map((Pe) => f(Pe.formattedValue, `normal ${ut[l.fontSize]}px sans-serif`))), E = Ee ? 180 : 100, J = Y.ticks.map((Pe) => f(Pe.formattedValue, `normal ${ut[l.fontSize]}px sans-serif`)), ae = J.reduce((Pe, it) => Pe + it, E), ie = (N - ae) / (Y.ticks.length - 1);
      let ye = [0];
      for (let Pe = 1; Pe < J.length; Pe++)
        ye[Pe] = ye[Pe - 1] + J[Pe - 1] + ie;
      let ge = !1;
      J.forEach((Pe, it) => {
        if (ye[it] + J[it] > ye[it + 1]) {
          ge = !0;
          return;
        }
      });
      const re = ge && l.isResponsiveTicks ? Tt + vt + 20 : 0, Oe = Number(l.xAxis.tickRotation) > 0 ? Number(l.xAxis.tickRotation) : 0;
      return l.dynamicMarginTop = re, l.xAxis.tickWidthMax = Tt, /* @__PURE__ */ i.createElement(be, { className: "bottom-axis" }, Y.ticks.map((Pe, it, wt) => {
        const Ie = String(Pe.value).startsWith("1") || Pe.value === 0.1 ? "block" : "none", Ft = Ie === "block" ? 16 : vt, Re = { x: Pe.to.x, y: Ft };
        let Ye = f(Pe.formattedValue, `normal ${ut[l.fontSize]}px sans-serif`), Qe = 100 / wt.length;
        l.yAxis.tickRotation = l.isResponsiveTicks && l.orientation === "horizontal" ? 0 : l.yAxis.tickRotation, l.xAxis.tickRotation = l.isResponsiveTicks && l.orientation === "vertical" ? 0 : l.xAxis.tickRotation;
        const rt = l.isResponsiveTicks && ge ? -Number(l.xAxis.maxTickRotation) || -90 : -Number(l.runtime.xAxis.tickRotation);
        return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${Pe.value}-${it}`, className: "vx-axis-tick" }, !l.xAxis.hideTicks && /* @__PURE__ */ i.createElement(qe, { from: Pe.from, to: w === "horizontal" && l.useLogScale ? Re : Pe.to, stroke: l.xAxis.tickColor, strokeWidth: Ie === "block" ? 1.3 : 1 }), !l.xAxis.hideLabel && /* @__PURE__ */ i.createElement(
          $e,
          {
            dy: l.orientation === "horizontal" && l.useLogScale ? 8 : 0,
            display: l.orientation === "horizontal" && l.useLogScale ? Ie : "block",
            x: Pe.to.x,
            y: Pe.to.y,
            angle: rt,
            verticalAnchor: rt < -50 ? "middle" : "start",
            textAnchor: rt ? "end" : "middle",
            width: ge && !l.isResponsiveTicks && !Number(l[F].tickRotation) ? Qe : Ye,
            fill: l.xAxis.tickLabelColor
          },
          Pe.formattedValue
        ));
      }), !l.xAxis.hideAxis && /* @__PURE__ */ i.createElement(qe, { from: Y.axisFromPoint, to: Y.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(
        $e,
        {
          x: ve,
          y: l.orientation === "horizontal" ? re || l.xAxis.labelOffset : l.isResponsiveTicks && re && !k ? re : Number(Oe) && !l.isResponsiveTicks && !k ? Number(Oe + Tt / 1.3) : Number(l.xAxis.labelOffset),
          textAnchor: "middle",
          fontWeight: "bold",
          fill: l.xAxis.labelColor
        },
        Y.label
      ));
    }
  ), x === "Paired Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ya, { top: P, left: Number(T.yAxis.size), label: T.xAxis.label, tickFormat: T.xAxis.type === "date" ? o : u, scale: Ke, stroke: "#333", tickStroke: "#333", numTicks: T.xAxis.numTicks || void 0 }, (Y) => /* @__PURE__ */ i.createElement(be, { className: "bottom-axis" }, Y.ticks.map((ve, Me) => {
    const Ee = ve.index !== 0 ? l.yAxis.tickRotation : 0, ut = ve.index !== 0 && l.yAxis.tickRotation && l.yAxis.tickRotation > 0 ? "end" : "middle";
    return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${ve.value}-${Me}`, className: "vx-axis-tick" }, !T.yAxis.hideTicks && /* @__PURE__ */ i.createElement(qe, { from: ve.from, to: ve.to, stroke: "#333" }), !T.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { x: ve.to.x, y: ve.to.y, angle: -Ee, verticalAnchor: "start", textAnchor: ut }, u(ve.value, "left")));
  }), !T.yAxis.hideAxis && /* @__PURE__ */ i.createElement(qe, { from: Y.axisFromPoint, to: Y.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ i.createElement(
    Ya,
    {
      top: P,
      left: Number(T.yAxis.size),
      label: T.xAxis.label,
      tickFormat: T.xAxis.type === "date" ? o : T.xAxis.dataKey !== "Year" ? u : (Y) => Y,
      scale: we,
      stroke: "#333",
      tickStroke: "#333",
      numTicks: T.xAxis.numTicks || void 0
    },
    (Y) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, { className: "bottom-axis" }, Y.ticks.map((ve, Me) => {
      const Ee = ve.index !== 0 ? l.yAxis.tickRotation : 0, ut = ve.index !== 0 && l.yAxis.tickRotation && l.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${ve.value}-${Me}`, className: "vx-axis-tick" }, !T.yAxis.hideTicks && /* @__PURE__ */ i.createElement(qe, { from: ve.from, to: ve.to, stroke: "#333" }), !T.yAxis.hideLabel && /* @__PURE__ */ i.createElement($e, { x: ve.to.x, y: ve.to.y, angle: -Ee, verticalAnchor: "start", textAnchor: ut }, u(ve.value, "left")));
    }), !T.yAxis.hideAxis && /* @__PURE__ */ i.createElement(qe, { from: Y.axisFromPoint, to: Y.axisToPoint, stroke: "#333" })), /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement($e, { x: N / 2, y: l.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, T.xAxis.label)))
  )), x === "Deviation Bar" && /* @__PURE__ */ i.createElement(Cy, { animatedChart: de, xScale: oe, yScale: se, width: N, height: P }), x === "Paired Bar" && /* @__PURE__ */ i.createElement(My, { originalWidth: $, width: N, height: P }), x === "Scatter Plot" && /* @__PURE__ */ i.createElement(
    wy,
    {
      xScale: oe,
      yScale: se,
      getXAxisData: ee,
      getYAxisData: K,
      xMax: N,
      yMax: P,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: Je,
      tooltipData: B,
      showTooltip: _e
    }
  ), x === "Box Plot" && /* @__PURE__ */ i.createElement(ky, { xScale: oe, yScale: se }), (x === "Area Chart" && l.visualizationSubType === "regular" || x === "Combo") && /* @__PURE__ */ i.createElement(gy, { xScale: oe, yScale: se, yMax: P, xMax: N, chartRef: Te, width: N, height: P, handleTooltipMouseOver: at, handleTooltipMouseOff: Et, tooltipData: B, showTooltip: _e }), (x === "Area Chart" && l.visualizationSubType === "stacked" || x === "Combo") && /* @__PURE__ */ i.createElement(vy, { xScale: oe, yScale: se, yMax: P, xMax: N, chartRef: Te, width: N, height: P, handleTooltipMouseOver: at, handleTooltipMouseOff: Et, tooltipData: B, showTooltip: _e }), (x === "Bar" || x === "Combo") && /* @__PURE__ */ i.createElement(
    Sy,
    {
      xScale: oe,
      yScale: se,
      seriesScale: Le,
      xMax: N,
      yMax: P,
      getXAxisData: ee,
      getYAxisData: K,
      animatedChart: de,
      visible: de,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: Je,
      tooltipData: B,
      showTooltip: _e,
      chartRef: Te
    }
  ), (x === "Line" || x === "Combo") && /* @__PURE__ */ i.createElement(
    ns,
    {
      xScale: oe,
      yScale: se,
      getXAxisData: ee,
      getYAxisData: K,
      xMax: N,
      yMax: P,
      seriesStyle: l.series,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: Je,
      tooltipData: B,
      showTooltip: _e,
      chartRef: Te
    }
  ), (x === "Forecasting" || x === "Combo") && /* @__PURE__ */ i.createElement(
    Py,
    {
      showTooltip: _e,
      tooltipData: B,
      xScale: oe,
      yScale: se,
      width: N,
      le: !0,
      height: P,
      xScaleNoPadding: xe,
      chartRef: Te,
      getXValueFromCoordinate: At,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      isBrush: !1
    }
  ), l.yAxis.anchors && l.yAxis.anchors.map((Y) => /* @__PURE__ */ i.createElement(qe, { strokeDasharray: m(Y.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + l.yAxis.size, y: se(Y.value) }, to: { x: N, y: se(Y.value) }, display: T.horizontal ? "none" : "block" })), x === "Forest Plot" && /* @__PURE__ */ i.createElement(
    _y,
    {
      xScale: oe,
      yScale: se,
      seriesScale: Le,
      width: N,
      height: P,
      maxWidth: $,
      maxHeight: O,
      getXAxisData: ee,
      getYAxisData: K,
      animatedChart: de,
      visible: de,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: Je,
      tooltipData: B,
      showTooltip: _e,
      chartRef: Te,
      config: l
    }
  ), ["Line", "Bar", "Combo", "Area Chart"].includes(l.visualizationType) && !k && /* @__PURE__ */ i.createElement(ug, { xScaleBrush: le, yScale: se, xMax: N, yMax: P }), x !== "Bar" && x !== "Paired Bar" && x !== "Box Plot" && x !== "Area Chart" && x !== "Scatter Plot" && x !== "Deviation Bar" && x !== "Forecasting" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ns, { xScale: oe, yScale: se, getXAxisData: ee, getYAxisData: K, xMax: N, yMax: P, seriesStyle: l.series })), l.yAxis.anchors && l.yAxis.anchors.map((Y, ve) => {
    let Me = se(Y.value);
    if (!Y.value)
      return;
    const Ee = w === "horizontal" && x === "Bar" ? l.barHeight / 4 : 0;
    if (Me)
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          qe,
          {
            key: `yAxis-${Y.value}--${ve}`,
            strokeDasharray: m(Y.lineStyle),
            stroke: Y.color ? Y.color : "rgba(0,0,0,1)",
            className: "anchor-y",
            from: { x: 0 + Jt, y: Me - Ee },
            to: { x: $ - l.yAxis.rightAxisSize, y: Me - Ee }
          }
        )
      );
  }), l.xAxis.anchors && l.xAxis.anchors.map((Y, ve) => {
    let Me = A;
    w === "horizontal" && (Me = D);
    let Ee = Me.type === "date" ? oe(c(Y.value, !1)) : oe(Y.value);
    if (Ee)
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          qe,
          {
            key: `xAxis-${Y.value}--${ve}`,
            strokeDasharray: m(Y.lineStyle),
            stroke: Y.color ? Y.color : "rgba(0,0,0,1)",
            fill: Y.color ? Y.color : "rgba(0,0,0,1)",
            className: "anchor-x",
            from: { x: Number(Ee) + Number(Jt), y: 0 },
            to: { x: Number(Ee) + Number(Jt), y: P }
          }
        )
      );
  }), Pn && _e && B && l.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(be, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(qe, { from: { x: B.dataXPosition - 10, y: 0 }, to: { x: B.dataXPosition - 10, y: P }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })), Pn && _e && B && l.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(be, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: l.yAxis.size ? l.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(qe, { from: { x: 0, y: B.dataYPosition }, to: { x: N, y: B.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })), l.filters && l.filters.values.length === 0 && a.length === 0 && /* @__PURE__ */ i.createElement($e, { x: Number(l.yAxis.size) + Number(N / 2), y: O / 2 - l.xAxis.size / 2, textAnchor: "middle" }, l.chartMessage.noData)), B && Object.entries(B.data).length > 0 && nt && _e && B.dataYPosition && B.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${l.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Dc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: et, top: ft }, /* @__PURE__ */ i.createElement("ul", null, typeof B == "object" && Object.entries(B.data).map((Y, ve) => /* @__PURE__ */ i.createElement(Nn, { item: Y, key: ve }))))), (l.orientation === "horizontal" || l.visualizationType === "Scatter Plot" || l.visualizationType === "Box Plot") && /* @__PURE__ */ i.createElement(py, { id: `cdc-open-viz-tooltip-${T.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${l.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ i.createElement("div", { className: "animation-trigger", ref: Ce })));
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
  id: W.string.isRequired,
  size: W.number,
  markerWidth: W.oneOfType([W.string, W.number]),
  markerHeight: W.oneOfType([W.string, W.number]),
  markerUnits: W.string,
  refX: W.oneOfType([W.string, W.number]),
  refY: W.oneOfType([W.string, W.number]),
  strokeWidth: W.number,
  children: W.node.isRequired
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
  var C;
  const { width: t, height: n } = e, { transformedData: a, config: r, parseDate: l, formatDate: c, seriesHighlight: o, formatNumber: s, colorScale: u, handleChartAriaLabels: d } = R.useContext(ze);
  let h = t;
  const { minValue: m, maxValue: y } = $i(r, a), p = { top: 5, right: 10, bottom: 10, left: 10 }, v = n, g = h - r.runtime.yAxis.size, f = v - p.top - 20, b = (k) => r.runtime.xAxis.type === "date" ? l(k[r.runtime.originalXAxis.dataKey]).getTime() : k[r.runtime.originalXAxis.dataKey], x = (k, _) => k[_];
  let S, w;
  const { max: A, min: D } = r.runtime.yAxis, T = Number(A) >= Number(y), z = Number(D) <= Number(m);
  if (a) {
    let k = D && z ? D : m, _ = A && T ? A : Number.MIN_VALUE;
    if (_ === Number.MIN_VALUE && (_ = y), r.runtime.yAxis.paddingPercent) {
      let N = (_ - k) * r.runtime.yAxis.paddingPercent;
      k -= N, _ += N;
    }
    let O = a.map((N) => b(N));
    r.runtime.horizontal ? (S = ht({
      domain: [k, _],
      range: [0, g]
    }), w = r.runtime.xAxis.type === "date" ? ht({ domain: [Math.min(...O), Math.max(...O)] }) : Rn({ domain: O, padding: 0.5 }), Rn({
      domain: r.runtime.barSeriesKeys || r.runtime.seriesKeys,
      range: [0, f]
    }), w.rangeRound([0, f])) : (k = k < 0 ? k * 1.11 : k, w = ht({
      domain: [k, _],
      range: [f - p.bottom, p.top]
    }), S = Rn({
      domain: O,
      range: [p.left, h - p.right]
    }), Rn({
      domain: r.runtime.barSeriesKeys || r.runtime.seriesKeys,
      range: [0, g]
    }));
  }
  const $ = [S.domain()[0], S.domain()[S.domain().length - 1]];
  return /* @__PURE__ */ i.createElement(Rt, { component: "SparkLine" }, /* @__PURE__ */ i.createElement("svg", { role: "img", "aria-label": d(r), width: t, height: 100, className: "sparkline", tabIndex: 0 }, ((C = r.runtime.lineSeriesKeys) == null ? void 0 : C.length) > 0 ? r.runtime.lineSeriesKeys : r.runtime.seriesKeys.map((k, _) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    be,
    {
      style: { width: h },
      className: "sparkline-group",
      key: `series-${k}`,
      opacity: r.legend.behavior === "highlight" && o.length > 0 && o.indexOf(k) === -1 ? 0.5 : 1,
      display: r.legend.behavior === "highlight" || o.length === 0 || o.indexOf(k) !== -1 ? "block" : "none"
    },
    a.map((O, N) => {
      let P = r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ${s(x(O, k))}` : s(x(O, k)), V = r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ${O[r.runtime.xAxis.dataKey]}` : O[r.runtime.xAxis.dataKey];
      return `${P}${V}`, r.seriesLabel && `${r.seriesLabel}${k}`, /* @__PURE__ */ i.createElement(be, { key: `series-${k}-point-${N}` }, /* @__PURE__ */ i.createElement($e, { display: r.labels ? "block" : "none", x: S(b(O)), y: w(x(O, k)), fill: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[k] : k) : "#000", textAnchor: "middle" }, s(O[k])));
    }),
    /* @__PURE__ */ i.createElement(
      kn,
      {
        curve: Ci,
        data: a,
        x: (O) => S(b(O)),
        y: (O) => w(x(O, k)),
        stroke: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[k] : k) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${_})`
      }
    ),
    /* @__PURE__ */ i.createElement(
      yg,
      {
        id: `arrow--${_}`,
        refX: 2,
        size: 6,
        markerEnd: `url(#arrow--${_})`,
        strokeOpacity: 1,
        fillOpacity: 1,
        fill: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[k] : k) : "#000"
      }
    )
  ), /* @__PURE__ */ i.createElement(
    Ya,
    {
      top: f + p.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: S,
      tickValues: $,
      tickFormat: (O) => r.xAxis.type === "date" ? c(O) : null,
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
  alignItems: W.string,
  margin: W.oneOfType([W.string, W.number]),
  children: W.node,
  display: W.string
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
  align: W.string,
  label: W.node,
  flex: W.oneOfType([W.string, W.number]),
  margin: W.oneOfType([W.string, W.number]),
  children: W.node
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
  fill: W.string,
  width: W.oneOfType([W.string, W.number]),
  height: W.oneOfType([W.string, W.number])
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
  fill: W.string,
  width: W.oneOfType([W.string, W.number]),
  height: W.oneOfType([W.string, W.number])
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
  fill: W.string,
  width: W.oneOfType([W.string, W.number]),
  height: W.oneOfType([W.string, W.number])
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
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, r = a === void 0 ? nr : a, l = e.size, c = l === void 0 ? nr : l, o = e.width, s = e.height, u = e.label, d = e.item, h = e.itemIndex, m = e.shapeStyle, y = m === void 0 ? nr : m, p = {
    width: o,
    height: s,
    item: d,
    itemIndex: h,
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
  var t = e.shape, n = t === void 0 ? kl : t, a = e.width, r = e.height, l = e.margin, c = e.label, o = e.item, s = e.itemIndex, u = e.fill, d = e.size, h = e.shapeStyle;
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
    shapeStyle: h
  }));
}
iu.propTypes = {
  itemIndex: W.number.isRequired,
  margin: W.oneOfType([W.string, W.number]),
  width: W.oneOfType([W.string, W.number]),
  height: W.oneOfType([W.string, W.number])
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
  var t = e.className, n = e.style, a = n === void 0 ? wg : n, r = e.scale, l = e.shape, c = e.domain, o = e.fill, s = o === void 0 ? us : o, u = e.size, d = u === void 0 ? us : u, h = e.labelFormat, m = h === void 0 ? ru : h, y = e.labelTransform, p = y === void 0 ? Tg : y, v = e.shapeWidth, g = v === void 0 ? 15 : v, f = e.shapeHeight, b = f === void 0 ? 15 : f, x = e.shapeMargin, S = x === void 0 ? "2px 4px 2px 0" : x, w = e.shapeStyle, A = e.labelAlign, D = A === void 0 ? "left" : A, T = e.labelFlex, z = T === void 0 ? "1" : T, $ = e.labelMargin, C = $ === void 0 ? "0 4px" : $, k = e.itemMargin, _ = k === void 0 ? "0" : k, O = e.direction, N = O === void 0 ? "column" : O, P = e.itemDirection, V = P === void 0 ? "row" : P, q = e.legendLabelProps, j = e.children, I = kg(e, Sg), Z = c || ("domain" in r ? r.domain() : []), U = p({
    scale: r,
    labelFormat: m
  }), ue = Z.map(U);
  return j ? /* @__PURE__ */ i.createElement(i.Fragment, null, j(ue)) : /* @__PURE__ */ i.createElement("div", {
    className: Ze("visx-legend", t),
    style: ga({}, a, {
      flexDirection: N
    })
  }, ue.map(function(de, he) {
    return /* @__PURE__ */ i.createElement(Ti, ga({
      key: "legend-" + de.text + "-" + he,
      margin: _,
      flexDirection: V
    }, I), /* @__PURE__ */ i.createElement(iu, {
      shape: l,
      height: b,
      width: g,
      margin: S,
      item: Z[he],
      itemIndex: he,
      label: de,
      fill: s,
      size: d,
      shapeStyle: w
    }), /* @__PURE__ */ i.createElement(Si, ga({
      label: de.text,
      flex: z,
      margin: C,
      align: D
    }, q)));
  }));
}
lu.propTypes = {
  children: W.func,
  className: W.string,
  domain: W.array,
  shapeWidth: W.oneOfType([W.string, W.number]),
  shapeHeight: W.oneOfType([W.string, W.number]),
  shapeMargin: W.oneOfType([W.string, W.number]),
  labelAlign: W.string,
  labelFlex: W.oneOfType([W.string, W.number]),
  labelMargin: W.oneOfType([W.string, W.number]),
  itemMargin: W.oneOfType([W.string, W.number]),
  fill: W.func,
  size: W.func,
  shapeStyle: W.func
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
    handleLineType: h
  } = R.useContext(ze), { innerClasses: m, containerClasses: y } = Ng(e), { visualizationType: p, visualizationSubType: v, series: g, runtime: f, orientation: b } = e, x = ($) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? $.reverse() : $, S = ($) => {
    var _, O, N, P;
    const C = (_ = e.legend) == null ? void 0 : _.colorCode;
    if (p === "Deviation Bar") {
      const [V, q] = l[e.twoColor.palette], j = {
        datum: "X",
        index: 0,
        text: `Below ${e.xAxis.targetLabel}`,
        value: V
      }, I = {
        datum: "X",
        index: 1,
        text: `Above ${e.xAxis.targetLabel}`,
        value: q
      };
      return x([j, I]);
    }
    if (p === "Bar" && v === "regular" && C && (g == null ? void 0 : g.length) === 1) {
      let V = u[e.palette];
      for (; c.length > V.length; )
        V = V.concat(V);
      V = V.slice(0, s.length);
      const q = /* @__PURE__ */ new Set();
      c.forEach((I) => q.add(I[C]));
      const j = Array.from(q).map((I, Z) => ({
        datum: I,
        index: Z,
        text: I,
        value: V[Z]
      }));
      return x(j);
    }
    if (((O = f == null ? void 0 : f.forecastingSeriesKeys) == null ? void 0 : O.length) > 0) {
      let V = [];
      return (P = (N = e.runtime) == null ? void 0 : N.forecastingSeriesKeys) == null || P.map((q, j) => {
        var I;
        return (I = q == null ? void 0 : q.stages) == null ? void 0 : I.map((Z, U) => {
          var he, Ce, Te, ke;
          let ue = (he = Za[Z.color]) != null && he[2] ? (Ce = Za[Z.color]) == null ? void 0 : Ce[2] : (Te = u[Z.color]) != null && Te[2] ? (ke = u[Z.color]) == null ? void 0 : ke[2] : "#ccc";
          const de = {
            datum: Z.key,
            index: U,
            text: Z.key,
            value: ue
          };
          V.push(de);
        });
      }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((q, j) => {
        let I = u[e.palette][j] ? u[e.palette][j] : "#ccc";
        const Z = {
          datum: q,
          index: j,
          text: q,
          value: I
        };
        V.push(Z);
      }), x(V);
    }
    if (e.series.map((V) => V.name).filter((V) => V).length > 0) {
      let V = u[e.palette];
      for (; c.length > V.length; )
        V = V.concat(V);
      V = V.slice(0, s.length);
      const q = /* @__PURE__ */ new Set();
      e.series.forEach((I) => {
        q.add(I.name ? I.name : I.dataKey);
      });
      const j = Array.from(q).map((I, Z) => ({
        datum: I,
        index: Z,
        text: I,
        value: n(I)
      }));
      return x(j);
    }
    return x($);
  }, w = () => {
    let $ = 0;
    const C = t.position === "bottom" || ["sm", "xs", "xxs"].includes(d), k = e.orientation === "horizontal", _ = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, O = e.brush.active, N = 25, P = e.brush.height;
    return !k && C && e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && !_ && ($ = O ? -e.xAxis.size + e.xAxis.labelOffset + N + P : -e.xAxis.size + e.xAxis.labelOffset + N), !k && C && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && !_ && ($ = O ? -e.xAxis.size + e.xAxis.labelOffset + N + P : -e.xAxis.size + e.xAxis.labelOffset + N), !k && C && e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && _ && ($ = O ? e.xAxis.tickWidthMax + P + -e.xAxis.size + e.xAxis.labelOffset + N : e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + N), !k && C && !e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && _ && ($ = O ? e.xAxis.tickWidthMax + P + -e.xAxis.size + N * 1.4 : e.xAxis.tickWidthMax + -e.xAxis.size + N * 1.3), !k && C && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && !_ && ($ = O ? e.dynamicMarginTop + -e.xAxis.size + N + P : e.dynamicMarginTop + -e.xAxis.size + N), !k && C && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && !_ && ($ = O ? e.dynamicMarginTop - N : e.dynamicMarginTop - P - N), `${$}px`;
  }, A = t.position === "bottom" || ["sm", "xs", "xxs"].includes(d);
  A && e.brush.active && e.brush.height * 2 + e.dynamicMarginTop / 2, A && e.isResponsiveTicks && e.dynamicMarginTop && !e.brush.active && e.dynamicMarginTop;
  const D = {
    marginBottom: A ? "15px" : "0px",
    marginTop: w()
    // marginTop: isBottomOrSmallViewport && orientation === 'horizontal' ? `${config.yAxis.label && config.isResponsiveTicks ? config.dynamicMarginTop : config.runtime.xAxis.size}px` : `${brushHeight + top}px`
  }, { HighLightedBarUtils: T } = Di(e);
  let z = T.findDuplicates(e.highlightedBarValues);
  return t ? e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement("aside", { style: D, id: "legend", className: y.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, t.label && /* @__PURE__ */ i.createElement("h2", null, xn(t.label)), t.description && /* @__PURE__ */ i.createElement("p", null, xn(t.description)), /* @__PURE__ */ i.createElement(Cg, { scale: n, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, ($) => /* @__PURE__ */ i.createElement("div", { className: m.join(" ") }, S($).map((C, k) => {
    var N, P, V, q;
    let _ = ["legend-item", `legend-text--${C.text.replace(" ", "").toLowerCase()}`], O = C.datum;
    if (e.exclusions.active && ((N = e.exclusions.keys) != null && N.includes(O)))
      return null;
    if (f.seriesLabels) {
      let j = e.runtime.seriesLabelsAll.indexOf(O);
      O = e.runtime.seriesKeys[j], ((P = f == null ? void 0 : f.forecastingSeriesKeys) == null ? void 0 : P.length) > 0 && (O = C.text);
    }
    return a.length > 0 && a.includes(O) === !1 && _.push("inactive"), /* @__PURE__ */ i.createElement(
      Ti,
      {
        className: _.join(" "),
        tabIndex: 0,
        key: `legend-quantile-${k}`,
        onKeyPress: (j) => {
          j.key === "Enter" && r(C);
        },
        onClick: () => {
          r(C);
        }
      },
      e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ i.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ i.createElement(qe, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: C.value, strokeWidth: 2, strokeDasharray: h((V = e.series[k]) != null && V.type ? (q = e.series[k]) == null ? void 0 : q.type : "") })) : /* @__PURE__ */ i.createElement(Vl, { fill: C.value }),
      /* @__PURE__ */ i.createElement(Si, { align: "left", margin: "0 0 0 4px" }, C.text)
    );
  }), z.map((C, k) => {
    let _ = "legend-item", O = C.legendLabel;
    return O ? (a.length > 0 && a.includes(O) === !1 && (_ += " inactive"), /* @__PURE__ */ i.createElement(
      Ti,
      {
        className: _,
        tabIndex: 0,
        key: `legend-quantile-${k}`,
        onKeyPress: (N) => {
          N.key === "Enter" && r(C.legendLabel);
        },
        onClick: () => {
          r(C.legendLabel);
        }
      },
      /* @__PURE__ */ i.createElement(Vl, { fill: "transparent", borderColor: C.color ? C.color : "rgba(255, 102, 1)" }),
      " ",
      /* @__PURE__ */ i.createElement(Si, { align: "left", margin: "0 0 0 4px" }, C.legendLabel ? C.legendLabel : C.value)
    )) : !1;
  }), a.length > 0 && /* @__PURE__ */ i.createElement("button", { className: `legend-reset ${e.theme}`, onClick: (C) => o(C), tabIndex: 0 }, "Reset")))) : null;
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
  var a = this, r = R.useRef(null), l = R.useRef(0), c = R.useRef(null), o = R.useRef([]), s = R.useRef(), u = R.useRef(), d = R.useRef(e), h = R.useRef(!0);
  d.current = e;
  var m = !t && t !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  t = +t || 0, n = n || {};
  var y = !!n.leading, p = "trailing" in n ? !!n.trailing : !0, v = "maxWait" in n, g = v ? Math.max(+n.maxWait || 0, t) : null;
  R.useEffect(function() {
    return h.current = !0, function() {
      h.current = !1;
    };
  }, []);
  var f = R.useMemo(function() {
    var b = function(T) {
      var z = o.current, $ = s.current;
      return o.current = s.current = null, l.current = T, u.current = d.current.apply($, z);
    }, x = function(T, z) {
      m && cancelAnimationFrame(c.current), c.current = m ? requestAnimationFrame(T) : setTimeout(T, z);
    }, S = function(T) {
      if (!h.current)
        return !1;
      var z = T - r.current, $ = T - l.current;
      return !r.current || z >= t || z < 0 || v && $ >= g;
    }, w = function(T) {
      return c.current = null, p && o.current ? b(T) : (o.current = s.current = null, u.current);
    }, A = function() {
      var T = Date.now();
      if (S(T))
        return w(T);
      if (h.current) {
        var z = T - r.current, $ = T - l.current, C = t - z, k = v ? Math.min(C, g - $) : C;
        x(A, k);
      }
    }, D = function() {
      for (var T = [], z = 0; z < arguments.length; z++)
        T[z] = arguments[z];
      var $ = Date.now(), C = S($);
      if (o.current = T, s.current = a, r.current = $, C) {
        if (!c.current && h.current)
          return l.current = r.current, x(A, t), y ? b(r.current) : u.current;
        if (v)
          return x(A, t), b(r.current);
      }
      return c.current || x(A, t), u.current;
    };
    return D.cancel = function() {
      c.current && (m ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), l.current = 0, o.current = r.current = s.current = c.current = null;
    }, D.isPending = function() {
      return !!c.current;
    }, D.flush = function() {
      return c.current ? w(Date.now()) : u.current;
    }, D;
  }, [y, v, t, g, p, m]);
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
  var t = R.useState(ds(e)), n = t[0], a = t[1], r = R.useCallback(function(l) {
    return a(ds(l));
  }, []);
  return [n, r];
}
function ou(e, t, n) {
  var a = n && n.equalityFn || Og, r = _g(e), l = r[0], c = r[1], o = Lg(R.useCallback(function(u) {
    return c(u);
  }, [c]), t, n), s = R.useRef(e);
  return R.useEffect(function() {
    a(s.current, e) || (o(e), s.current = e);
  }, [e, o, a]), [l, { cancel: o.cancel, isPending: o.isPending, flush: o.flush }];
}
const Qa = (e) => /* @__PURE__ */ R.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ R.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), aa = R.memo(({ label: e, value: t, options: n, fieldName: a, section: r = null, subsection: l = null, required: c = !1, tooltip: o, updateField: s, initial: u, ...d }) => {
  let h = n.map((m, y) => /* @__PURE__ */ i.createElement("option", { value: m, key: y }, m));
  return u && h.unshift(
    /* @__PURE__ */ i.createElement("option", { value: "", key: "initial" }, u)
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, e, o), /* @__PURE__ */ i.createElement(
    "select",
    {
      className: c && !t ? "warning" : "",
      name: a,
      value: t,
      onChange: (m) => {
        s(r, l, a, m.target.value);
      },
      ...d
    },
    h
  ));
}), ir = R.memo(({ label: e, value: t, fieldName: n, section: a = null, subsection: r = null, tooltip: l, updateField: c, ...o }) => /* @__PURE__ */ i.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ i.createElement(
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
), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, e, l))), ia = R.memo(({ label: e, tooltip: t, section: n = null, subsection: a = null, fieldName: r, updateField: l, value: c, type: o = "input", i: s = null, min: u = null, ...d }) => {
  const [h, m] = R.useState(c), [y] = ou(h, 500);
  R.useEffect(() => {
    typeof y == "string" && c !== y && l(n, a, r, y, s);
  }, [y]);
  let p = a ? `${n}-${a}-${r}` : `${n}-${a}-${r}`;
  const v = (f) => {
    o !== "number" || u === null || !f.target.value || u <= parseFloat(f.target.value) ? m(f.target.value) : m(u.toString());
  };
  let g = /* @__PURE__ */ i.createElement("input", { type: "text", name: p, onChange: v, ...d, value: h });
  return o === "textarea" && (g = /* @__PURE__ */ i.createElement("textarea", { name: p, onChange: v, ...d, value: h })), o === "number" && (g = /* @__PURE__ */ i.createElement("input", { type: "number", name: p, onChange: v, ...d, value: h })), o === "date" && (g = /* @__PURE__ */ i.createElement("input", { type: "date", name: p, onChange: v, ...d, value: h })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, e, t), g);
}), Mg = () => {
  var o, s, u, d, h, m, y, p, v, g, f, b;
  const { config: e, rawData: t, updateConfig: n, isDebug: a } = R.useContext(ze), r = (x) => {
    x.orientation === "horizontal" && (x.labels = !1), x.table.show === void 0 && (x.table.show = !isDashboard), x.visualizationType === "Combo" && (x.orientation = "vertical");
  }, l = (x = !0) => {
    let S = {};
    return t.forEach((w) => {
      Object.keys(w).forEach((A) => S[A] = !0);
    }), x && Object.keys(S).forEach((w) => {
      (e.series && e.series.filter((A) => A.dataKey === w).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(w)) && delete S[w];
    }), Object.keys(S);
  }, c = (x, S, w, A) => {
    if (x === "boxplot" && S === "legend") {
      n({
        ...e,
        [x]: {
          ...e[x],
          [S]: {
            ...e.boxplot[S],
            [w]: A
          }
        }
      });
      return;
    }
    if (x === "boxplot" && S === "labels") {
      n({
        ...e,
        [x]: {
          ...e[x],
          [S]: {
            ...e.boxplot[S],
            [w]: A
          }
        }
      });
      return;
    }
    if (x === "forestPlot" && S) {
      n({
        ...e,
        [x]: {
          ...e[x],
          [S]: {
            ...e.forestPlot[S],
            [w]: A
          }
        }
      });
      return;
    }
    if (x === "columns" && S !== "" && w !== "") {
      n({
        ...e,
        [x]: {
          ...e[x],
          [S]: {
            ...e[x][S],
            [w]: A
          }
        }
      });
      return;
    }
    if (x === null && S === null) {
      let $ = { ...e, [w]: A };
      r($), n($);
      return;
    }
    const D = Array.isArray(e[x]);
    let T = D ? [...e[x], A] : { ...e[x], [w]: A };
    S !== null && (D ? (T = [...e[x]], T[S] = { ...T[S], [w]: A }) : typeof A == "string" ? T[S] = A : T = { ...e[x], [S]: { ...e[x][S], [w]: A } });
    let z = { ...e, [x]: T };
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
  )), /* @__PURE__ */ i.createElement(ia, { type: "number", min: 20, max: 45, value: e.forestPlot.rowHeight ? e.forestPlot.rowHeight : 10, updateField: c, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(ia, { type: "number", value: ((u = (s = e.forestPlot) == null ? void 0 : s.regression) == null ? void 0 : u.estimateField) || "", updateField: c, section: "forestPlot", subsection: "regression", fieldName: "estimateField", label: "Line of No Effect" }), /* @__PURE__ */ i.createElement(ia, { type: "text", value: ((h = (d = e.forestPlot) == null ? void 0 : d.regression) == null ? void 0 : h.baseLineColor) || "black", updateField: c, section: "forestPlot", subsection: "regression", fieldName: "baseLineColor", label: "Base Color" }), /* @__PURE__ */ i.createElement(ir, { value: ((y = (m = e.forestPlot) == null ? void 0 : m.regression) == null ? void 0 : y.showBaseLine) || !1, section: "forestPlot", subsection: "regression", fieldName: "showBaseLine", label: "Show base line", updateField: c }), /* @__PURE__ */ i.createElement(ir, { value: ((v = (p = e.forestPlot) == null ? void 0 : p.regression) == null ? void 0 : v.showDiamond) || !1, section: "forestPlot", subsection: "regression", fieldName: "showDiamond", label: "Show Diamond", updateField: c }), /* @__PURE__ */ i.createElement(ir, { value: ((g = e.forestPlot) == null ? void 0 : g.hideDateCategoryCol) || !1, section: "forestPlot", fieldName: "hideDateCategoryCol", label: "Hide Date Category Column", updateField: c }), /* @__PURE__ */ i.createElement(ia, { type: "text", value: ((b = (f = e.forestPlot) == null ? void 0 : f.regression) == null ? void 0 : b.description) || "", updateField: c, section: "forestPlot", subsection: "regression", fieldName: "description", label: "Description" })));
}, Yn = i.createContext(), Dg = (e) => {
  const { updateConfig: t, config: n } = R.useContext(ze), { getColumns: a, selectComponent: r } = e, l = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], c = (o, s, u) => {
    let d = [...n.series];
    d[o][u] = s, t({ ...n, series: d });
  };
  return /* @__PURE__ */ i.createElement(Yn.Provider, { value: { updateSeries: c, supportedRightAxisTypes: l, getColumns: a, selectComponent: r } }, e.children);
}, $g = (e) => {
  const { config: t, updateConfig: n } = R.useContext(ze), { series: a, index: r } = e;
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
  const { config: t } = R.useContext(ze), { updateSeries: n } = R.useContext(Yn), { index: a, series: r } = e, l = () => {
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
  const { config: t, updateConfig: n, rawData: a } = R.useContext(ze), { updateSeries: r, getColumns: l } = R.useContext(Yn), { index: c, series: o } = e;
  if (o.type === "Forecasting")
    return /* @__PURE__ */ i.createElement(
      on,
      {
        initial: "Select an option",
        value: o.stageColumn,
        label: "Add Forecasting Stages",
        onChange: (s) => {
          let u = [], d = new Set(a == null ? void 0 : a.map((m) => m[s.target.value]));
          d = Array.from(d), d = d.filter((m) => m !== void 0), d.forEach((m) => u.push({ key: m }));
          const h = [...t.series];
          h[c] = { ...h[c], stages: u, stageColumn: s.target.value }, n({
            ...t,
            series: h
          });
        },
        options: l(!1)
      }
    );
}, Fg = (e) => {
  const { config: t, rawData: n } = R.useContext(ze), { updateSeries: a } = R.useContext(Yn), { index: r, series: l } = e;
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
  const { config: t } = R.useContext(ze), { updateSeries: n, supportedRightAxisTypes: a } = R.useContext(Yn), { index: r, series: l } = e;
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
  const { config: t, updateConfig: n } = R.useContext(ze), { index: a, series: r } = e;
  if (r.type === "Forecasting" && r)
    return (l = r == null ? void 0 : r.stages) == null ? void 0 : l.map((c, o) => {
      var s, u, d, h;
      return /* @__PURE__ */ i.createElement(
        on,
        {
          key: `${c}--${o}`,
          initial: "Select an option",
          value: (u = (s = t.series) == null ? void 0 : s[a].stages) != null && u[o].color ? (h = (d = t.series) == null ? void 0 : d[a].stages) == null ? void 0 : h[o].color : "Select",
          label: `${c.key} Series Color`,
          onChange: (m) => {
            const y = [...t.series], p = y[a].stages;
            p[o].color = m.target.value, y[a] = { ...y[a], stages: p }, n({
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
  const { config: t, updateConfig: n } = R.useContext(ze), { series: a, index: r } = e, { getColumns: l } = R.useContext(Yn);
  if (a.type === "Forecasting")
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, (c = a == null ? void 0 : a.confidenceIntervals) == null ? void 0 : c.map((o, s) => {
      const u = o.showInTooltip ? o.showInTooltip : !1, d = (h, m, y) => {
        h.preventDefault();
        let p = [...t.series];
        p[m].confidenceIntervals[y].showInTooltip = !u, n({
          ...t,
          series: p
        });
      };
      return /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart", key: `${s}` }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Group ", s + 1, /* @__PURE__ */ i.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (h) => {
            h.preventDefault();
            const m = [...t.series[r].confidenceIntervals];
            m.splice(s, 1);
            const y = [...t.series];
            y[r] = { ...y[r], confidenceIntervals: [...m] }, n({
              ...t,
              series: y
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (h) => d(h, r, s) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, u && /* @__PURE__ */ i.createElement(vs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: u || !1, readOnly: !0 }))), /* @__PURE__ */ i.createElement(
        on,
        {
          initial: "Select an option",
          value: t.series[r].confidenceIntervals[s].low ? t.series[r].confidenceIntervals[s].low : "Select",
          label: "Low Confidence Interval",
          onChange: (h) => {
            const m = [...t.series[r].confidenceIntervals];
            m[s].low = h.target.value;
            const y = [...t.series];
            y[r] = { ...y[r], confidenceIntervals: m }, n({
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
          onChange: (h) => {
            const m = [...t.series[r].confidenceIntervals];
            m[s].high = h.target.value;
            const y = [...t.series];
            y[r] = { ...y[r], confidenceIntervals: m }, n({
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
  const { series: t, index: n } = e, { config: a, updateConfig: r } = R.useContext(ze), l = ["Bar", "Line", "Area Chart"];
  if (a.visualizationType === "Combo" || !l.includes(t.type))
    return;
  let c = (o, s) => {
    let u = [...a.series], d = { ...a.runtime.seriesLabels };
    u[o].name = s, d[u[o].dataKey] = u[o].name ? u[o].name : u[o].dataKey;
    let h = {
      ...a,
      series: u,
      runtime: {
        ...a.runtime,
        seriesLabels: d
      }
    };
    r(h);
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
  const { series: t, index: n } = e, { config: a, updateConfig: r } = R.useContext(ze), l = (c) => {
    let o = [...a.series];
    o[c].tooltip && o[c].tooltip, o[c].tooltip = !o[c].tooltip, r({
      ...a,
      series: o
    });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (c) => l(n) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ i.createElement(vs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, Ig = (e) => {
  const { config: t, updateConfig: n } = R.useContext(ze), { series: a, index: r } = e, l = (o) => {
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
  const { config: t } = R.useContext(ze), { series: n, getItemStyle: a, sortableItemStyles: r, chartsWithOptions: l, index: c } = e;
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
  return R.useEffect(() => {
    let l = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: l } });
  }, [e.twoColor.isPaletteReversed]), R.useEffect(() => {
    let l = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (l = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (l = e.palette.slice(0, -7)), t({ ...e, palette: l });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: a, nonSequential: r };
}, Ug = () => {
  const { config: e } = R.useContext(ze), { visualizationType: t, series: n, orientation: a } = e;
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
    visHasBarBorders: () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : n == null ? void 0 : n.some((ue) => ue.type === "Bar" || ue.type === "Paired Bar" || ue.type === "Deviation Bar"),
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
      const U = ["Forest Plot"];
      return !(a === "horizontal" || U.includes(t));
    },
    visSupportsValueAxisLabels: () => !0,
    visSupportsValueAxisLine: () => !0,
    visSupportsValueAxisTicks: () => !0
  };
}, me = R.memo(({ label: e, tooltip: t, section: n = null, subsection: a = null, fieldName: r, updateField: l, value: c, type: o = "input", i: s = null, min: u = null, ...d }) => {
  const [h, m] = R.useState(c), [y] = ou(h, 500);
  R.useEffect(() => {
    typeof y == "string" && c !== y && l(n, a, r, y, s);
  }, [y]);
  let p = a ? `${n}-${a}-${r}` : `${n}-${a}-${r}`;
  const v = (f) => {
    o !== "number" || u === null || !f.target.value || u <= parseFloat(f.target.value) ? m(f.target.value) : m(u.toString());
  };
  let g = /* @__PURE__ */ i.createElement("input", { type: "text", name: p, onChange: v, ...d, value: h });
  return o === "textarea" && (g = /* @__PURE__ */ i.createElement("textarea", { name: p, onChange: v, ...d, value: h })), o === "number" && (g = /* @__PURE__ */ i.createElement("input", { type: "number", name: p, onChange: v, ...d, value: h })), o === "date" && (g = /* @__PURE__ */ i.createElement("input", { type: "date", name: p, onChange: v, ...d, value: h })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, e, t), g);
}), Ae = R.memo(({ label: e, value: t, fieldName: n, section: a = null, subsection: r = null, tooltip: l, updateField: c, ...o }) => /* @__PURE__ */ i.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ i.createElement(
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
), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, e, l))), He = R.memo(({ label: e, value: t, options: n, fieldName: a, section: r = null, subsection: l = null, required: c = !1, tooltip: o, updateField: s, initial: u, ...d }) => {
  let h = n.map((m, y) => /* @__PURE__ */ i.createElement("option", { value: m, key: y }, m));
  return u && h.unshift(
    /* @__PURE__ */ i.createElement("option", { value: "", key: "initial" }, u)
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, e, o), /* @__PURE__ */ i.createElement(
    "select",
    {
      className: c && !t ? "warning" : "",
      name: a,
      value: t,
      onChange: (m) => {
        s(r, l, a, m.target.value);
      },
      ...d
    },
    h
  ));
}), Yg = R.memo(({ config: e, updateConfig: t }) => {
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
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.regions && e.regions.map(({ label: c, color: o, from: s, to: u, background: d }, h) => /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `region-${h}` }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (m) => {
        m.preventDefault(), r(h);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(me, { value: c, label: "Region Label", fieldName: "label", i: h, updateField: a }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(me, { value: o, label: "Text Color", fieldName: "color", updateField: (m, y, p, v) => n(p, v, h) }), /* @__PURE__ */ i.createElement(me, { value: d, label: "Background", fieldName: "background", updateField: (m, y, p, v) => n(p, v, h) })), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(me, { value: s, label: "From Value", fieldName: "from", updateField: (m, y, p, v) => n(p, v, h) }), /* @__PURE__ */ i.createElement(me, { value: u, label: "To Value", fieldName: "to", updateField: (m, y, p, v) => n(p, v, h) })))), !e.regions && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ i.createElement(
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
  var tt, St, dn, Ln, Pa, Qn, mt, Qt, wl, Cl, Nl, Pl, Ll, Ol, _l, Ml, Dl, $l, zl, Rl, Fl, Bl;
  const { config: e, updateConfig: t, transformedData: n, loading: a, colorPalettes: r, twoColorPalette: l, unfilteredData: c, excludedData: o, isDashboard: s, setParentConfig: u, missingRequiredSections: d, isDebug: h, setFilteredData: m, lineOptions: y, rawData: p } = R.useContext(ze), { minValue: v, maxValue: g, existPositiveValue: f, isAllLine: b } = $i(e, c), { twoColorPalettes: x, sequential: S, nonSequential: w } = qg(e, t), {
    enabledChartTypes: A,
    headerColors: D,
    visSupportsTooltipLines: T,
    visSupportsNonSequentialPallete: z,
    visSupportsSequentialPallete: $,
    visSupportsReverseColorPalette: C,
    visHasLabelOnData: k,
    visHasNumbersOnBars: _,
    visHasAnchors: O,
    visHasBarBorders: N,
    visHasDataCutoff: P,
    visCanAnimate: V,
    visHasLegend: q,
    visSupportsDateCategoryAxisLabel: j,
    visSupportsDateCategoryAxisLine: I,
    visSupportsDateCategoryAxisTicks: Z,
    visSupportsDateCategoryTickRotation: U,
    visSupportsDateCategoryNumTicks: ue,
    visSupportsRegions: de,
    visSupportsFilters: he,
    visSupportsValueAxisGridLines: Ce,
    visSupportsValueAxisLine: Te,
    visSupportsValueAxisTicks: ke,
    visSupportsValueAxisLabels: ee,
    visSupportsBarSpace: K,
    visSupportsBarThickness: G,
    visSupportsFootnotes: F,
    visSupportsSuperTitle: pe,
    visSupportsDataCutoff: ne,
    visSupportsChartHeight: fe,
    visSupportsLeftValueAxis: oe,
    visSupportsTooltipOpacity: se,
    visSupportsRankByValue: Le,
    visSupportsResponsiveTicks: Ke,
    visSupportsDateCategoryHeight: we
  } = Ug(), { handleFilterOrder: xe, filterOrderOptions: le, filterStyleOptions: te } = gu({ config: e, setConfig: t, filteredData: n, setFilteredData: m });
  R.useEffect(() => {
    let L = [];
    e.series && (L = e.series.map((M) => ({
      ...M,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: L
    });
  }, [e.visualizationType]), R.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []);
  const { hasRightAxis: Fe } = dl({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), ce = (L, M) => ({
    ...M
  }), Ne = {
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
  }, Se = (L) => {
    L.orientation === "horizontal" && (L.labels = !1), L.table.show === void 0 && (L.table.show = !s), L.visualizationType === "Combo" && (L.orientation = "vertical");
  }, B = (L, M, H, Q) => {
    if (h && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", L, M, H, Q), L === "boxplot" && M === "legend") {
      t({
        ...e,
        [L]: {
          ...e[L],
          [M]: {
            ...e.boxplot[M],
            [H]: Q
          }
        }
      });
      return;
    }
    if (L === "boxplot" && M === "labels") {
      t({
        ...e,
        [L]: {
          ...e[L],
          [M]: {
            ...e.boxplot[M],
            [H]: Q
          }
        }
      });
      return;
    }
    if (L === "columns" && M !== "" && H !== "") {
      t({
        ...e,
        [L]: {
          ...e[L],
          [M]: {
            ...e[L][M],
            [H]: Q
          }
        }
      });
      return;
    }
    if (L === null && M === null) {
      let Zn = { ...e, [H]: Q };
      Se(Zn), t(Zn);
      return;
    }
    const je = Array.isArray(e[L]);
    let kt = je ? [...e[L], Q] : { ...e[L], [H]: Q };
    M !== null && (je ? (kt = [...e[L]], kt[M] = { ...kt[M], [H]: Q }) : typeof Q == "string" ? kt[M] = Q : kt = { ...e[L], [M]: { ...e[L][M], [H]: Q } });
    let Bt = { ...e, [L]: kt };
    Se(Bt), t(Bt);
  }, [_e, Ge] = R.useState(!0);
  if (a)
    return null;
  R.useEffect(() => {
    var L;
    (L = e.general) != null && L.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const nt = (L) => {
    t({
      ...e,
      lollipopShape: L
    });
  }, et = (L) => {
    let M = [...e.filters];
    M.splice(L, 1), t({ ...e, filters: M });
  }, ft = (L, M, H) => {
    let Q = [...e.filters];
    Q[M][L] = H, t({ ...e, filters: Q });
  }, at = () => {
    let L = e.filters ? [...e.filters] : [];
    L.push({ values: [] }), t({ ...e, filters: L });
  }, Je = (L) => {
    let M = e.series ? [...e.series] : [], H = Array.from(new Set(n.map((je) => je[L]))), Q = [];
    H.forEach((je) => {
      Q.push({ key: je });
    }), e.visualizationType === "Forecasting" ? M.push({ dataKey: L, type: e.visualizationType, stages: Q, stageColumn: L, axis: "Left", tooltip: !0 }) : M.push({ dataKey: L, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: M });
  }, Et = (L) => {
    const M = e.series[0].dataKey, H = n.sort((je, kt) => je[M] - kt[M]), Q = L === "asc" ? H : H.reverse();
    t({ ...e }, Q);
  }, Xt = (L) => {
    let M = [...e.exclusions.keys];
    M.push(L);
    let H = { ...e.exclusions, keys: M };
    t({ ...e, exclusions: H });
  }, Nn = (L) => {
    let M = -1, H = [...e.exclusions.keys];
    for (let Q = 0; Q < H.length; Q++)
      if (H[Q] === L) {
        M = Q;
        break;
      }
    if (M !== -1) {
      H.splice(M, 1);
      let Q = { ...e.exclusions, keys: H }, je = { ...e, exclusions: Q };
      H.length === 0 && delete je.exclusions.keys, t(je);
    }
  }, Na = () => {
    let L = {};
    return c.forEach((M) => {
      Object.keys(M).forEach((H) => L[H] = !0);
    }), Object.keys(L);
  }, At = (L = !0) => {
    let M = {};
    if (c.forEach((H) => {
      Object.keys(H).forEach((Q) => M[Q] = !0);
    }), L) {
      const { lower: H, upper: Q } = e.confidenceKeys || {};
      Object.keys(M).forEach((je) => {
        (e.series && e.series.filter((kt) => kt.dataKey === je).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(je) && (H && Q || H || Q) && je !== H && je !== Q) && delete M[je];
      });
    }
    return Object.keys(M);
  }, Pn = (L) => {
    if (!L)
      return [];
    const M = /* @__PURE__ */ new Set();
    for (let H = 0; H < L.length; H++)
      for (const [Q] of Object.entries(L[H]))
        M.add(Q);
    return Array.from(M);
  }, Jt = (L, M = !1) => {
    let H = [];
    return o.forEach((Q) => {
      H.push(Q[L]);
    }), M ? [...new Set(H)] : H;
  }, Xn = () => (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.visualizationSubType !== "stacked" && (e.orientation === "horizontal" || e.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"], un = () => {
    Ge(!_e);
  }, Y = () => /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ i.createElement("p", null, e.runtime.editorErrorMessage))), ve = () => {
    const L = (M) => {
      M.preventDefault();
      let H = { ...e };
      delete H.newViz, t(H);
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement("button", { className: "btn", style: { margin: "1em auto" }, disabled: d(), onClick: L }, "I'm Done")));
  }, Me = () => {
    let L = JSON.parse(JSON.stringify(e));
    return d() === !1 && delete L.newViz, delete L.runtime, L;
  };
  R.useEffect(() => {
    if (u) {
      const L = Me();
      u(L);
    }
  }, [e]), R.useEffect(() => {
    const L = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], M = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: M
      },
      yAxis: {
        ...e.yAxis,
        anchors: L
      }
    });
  }, [e.orientation]), R.useEffect(() => {
    e.visualizationType === "Paired Bar" && t({
      ...e,
      orientation: "horizontal"
    });
  }, []), R.useEffect(() => {
    e.orientation === "horizontal" && t({
      ...e,
      lollipopShape: e.lollipopShape
    });
  }, [e.isLollipopChart, e.lollipopShape]), R.useEffect(() => {
    e.visualizationType === "Deviation Bar" && t({ ...e, orientation: "horizontal" });
  }, [e.visualizationType]);
  const Ee = R.useCallback(() => {
    const L = [...e.exclusions.keys];
    return /* @__PURE__ */ i.createElement("ul", { className: "series-list" }, L.map((M, H) => /* @__PURE__ */ i.createElement("li", { key: M }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name", "data-title": M }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name--text" }, M)), /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: () => Nn(M) }, "×"))));
  }, [e]), ut = (L, M) => {
    let H = e.series, [Q] = H.splice(L, 1);
    H.splice(M, 0, Q), t({ ...e, series: H });
  };
  e.isLollipopChart && ((tt = e == null ? void 0 : e.series) == null ? void 0 : tt.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((St = e == null ? void 0 : e.series) == null ? void 0 : St.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((dn = e == null ? void 0 : e.series) == null ? void 0 : dn.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((Ln = e == null ? void 0 : e.series) == null ? void 0 : Ln.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const vt = e.orientation === "horizontal" ? "xAxis" : "yAxis", [Tt, E] = R.useState({ maxMsg: "", minMsg: "" }), J = () => {
    const L = e[vt].max;
    let M = "";
    switch (!0) {
      case (L && parseFloat(L) < parseFloat(g) && f):
        M = "Max value must be more than " + g;
        break;
      case (L && parseFloat(L) < 0 && !f):
        M = "Value must be more than or equal to 0";
        break;
      default:
        M = "";
    }
    E((H) => ({ ...H, maxMsg: M }));
  }, ae = () => {
    const L = e[vt].min;
    let M = Number(v), H = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && L < 0):
        H = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && L && parseFloat(L) > M):
        H = "Value should not exceed " + v;
        break;
      case (e.visualizationType === "Combo" && b && L && parseFloat(L) > M):
        H = "Value should not exceed " + v;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !b) && L && M > 0 && parseFloat(L) > 0):
        H = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && parseFloat(L) >= Math.min(M, e.xAxis.target)):
        H = "Value must be less than " + Math.min(M, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && L && M < 0 && parseFloat(L) > M):
        H = "Value should not exceed " + v;
        break;
      default:
        H = "";
    }
    E((Q) => ({ ...Q, minMsg: H }));
  };
  R.useEffect(() => {
    ae(), J();
  }, [v, g, e]);
  const ie = ((Pa = e == null ? void 0 : e.dataKey) == null ? void 0 : Pa.includes("http://")) || ((Qn = e == null ? void 0 : e.dataKey) == null ? void 0 : Qn.includes("https://")), ye = () => {
    var L, M;
    if (h !== void 0 && h && !((L = e == null ? void 0 : e.xAxis) != null && L.dataKey)) {
      let H = At(!1);
      if (H.includes("Date"))
        return "Date";
      if (H.includes("Race"))
        return "Race";
      if (H.includes("Month"))
        return "Month";
    }
    return ((M = e == null ? void 0 : e.xAxis) == null ? void 0 : M.dataKey) || "";
  }, ge = () => {
    if (h !== void 0 && h && At(!1).length > 0) {
      let L = At(!1).filter((M) => M !== ye());
      if (L.length > 0)
        return L[0];
    }
    return "";
  };
  if (h && !e.xAxis.dataKey && (e.xAxis.dataKey = ye()), h && ((mt = e == null ? void 0 : e.series) == null ? void 0 : mt.length) === 0) {
    let L = ge();
    L !== "" && Je(L), h && console.log("### COVE DEBUG: Chart: Setting default datacol=", L);
  }
  const re = ["Area Chart", "Combo", "Line", "Bar", "Forecasting"], Oe = [
    /* @__PURE__ */ i.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(e.data[0]).map((M) => {
      const H = e == null ? void 0 : e.series.some((Q) => Q.dataKey === M);
      if (M !== e.xAxis.dataKey && !H)
        return Oe.push(
          /* @__PURE__ */ i.createElement("option", { value: M, key: M }, M)
        );
    });
    let L = {};
    e.data.forEach((M) => {
      Object.keys(M).forEach((H) => {
        L[H] = L[H] || [];
        const Q = typeof M[H] == "number" ? M[H].toString() : M[H];
        L[H].indexOf(Q) === -1 && L[H].push(Q);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((M) => {
      const H = n.some((Q) => Q.dataKey === M);
      if (M !== e.xAxis.dataKey && !H)
        return Oe.push(
          /* @__PURE__ */ i.createElement("option", { value: M, key: M }, M)
        );
    });
    let L = {};
    n.forEach((M) => {
      Object.keys(M).forEach((H) => {
        L[H] = L[H] || [];
        const Q = typeof M[H] == "number" ? M[H].toString() : M[H];
        L[H].indexOf(Q) === -1 && L[H].push(Q);
      });
    });
  }
  const Pe = Object.keys(e.columns).filter((L) => [e.xAxis.dataKey].includes(L) !== !0), it = (L) => {
    const M = `additionalColumn${L}`;
    t({
      ...e,
      columns: {
        ...e.columns,
        [M]: {
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
  }, wt = (L) => {
    const M = e.columns;
    delete M[L], t({
      ...e,
      columns: M
    });
  }, Ie = async (L, M, H) => {
    switch (M) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [L]: {
              ...e.columns[L],
              [M]: H
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [L]: {
              ...e.columns[L],
              [M]: H
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
  } = Di(e, t), yt = (L, M) => {
    let H = e.columns;
    H[L].tooltips = M, t({
      ...e,
      columns: H
    });
  };
  return /* @__PURE__ */ i.createElement(Rt, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ i.createElement(ve, null), e.newViz === void 0 && e.runtime && e.runtime.editorErrorMessage && /* @__PURE__ */ i.createElement(Y, null), /* @__PURE__ */ i.createElement("button", { className: _e ? "editor-toggle" : "editor-toggle collapsed", title: _e ? "Collapse Editor" : "Expand Editor", onClick: un }), /* @__PURE__ */ i.createElement("section", { className: `${_e ? "editor-panel cove" : "hidden editor-panel cove"}${s ? " dashboard" : ""}` }, /* @__PURE__ */ i.createElement("div", { "aria-level": "2", role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ i.createElement("section", { className: "form-container" }, /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(lt, null, " ", /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "General")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(He, { value: e.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: B, options: A }), (e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Area Chart") && /* @__PURE__ */ i.createElement(He, { value: e.visualizationSubType || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: B, options: ["regular", "stacked"] }), e.visualizationType === "Area Chart" && e.visualizationSubType === "stacked" && /* @__PURE__ */ i.createElement(He, { value: e.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: B, options: Object.keys(Ei) }), e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(He, { value: e.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: B, options: ["vertical", "horizontal"] }), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(He, { label: "Orientation", options: ["horizontal"] }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(He, { value: e.isLollipopChart ? "lollipop" : e.barStyle || "flat", fieldName: "barStyle", label: "bar style", updateField: B, options: Xn() }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.barStyle === "rounded" && /* @__PURE__ */ i.createElement(He, { value: e.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: B, options: ["top", "full"] }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.barStyle === "rounded" && /* @__PURE__ */ i.createElement(He, { value: e.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: B, options: ["standard", "shallow", "finger"] }), e.visualizationType === "Bar" && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(He, { value: e.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: B, options: ["Below Bar", "On Date/Category Axis"] }), _() ? /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: e.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: B }) : k() && /* @__PURE__ */ i.createElement(Ae, { value: e.labels, fieldName: "labels", label: "Display label on data", updateField: B }), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(He, { fieldName: "pieType", label: "Pie Chart Type", updateField: B, options: ["Regular", "Donut"] }), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ i.createElement(Ae, { value: e.showTitle, fieldName: "showTitle", label: "Show Title", updateField: B }), pe() && /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.superTitle,
      updateField: B,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "textarea",
      value: e.introText,
      updateField: B,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "textarea",
      value: e.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), F() && /* @__PURE__ */ i.createElement(
    me,
    {
      type: "textarea",
      value: e.footnotes,
      updateField: B,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Footnotes")))
    }
  ), fe() && e.orientation === "vertical" && /* @__PURE__ */ i.createElement(me, { type: "number", value: e.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: B }))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(Mg, null), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ i.createElement(Qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    He,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (L) => {
        L.target.value !== "" && L.target.value !== "Select" && Je(L.target.value), L.target.value = "";
      },
      options: At()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ i.createElement(It.Wrapper, { getColumns: At }, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ i.createElement(Hl, { onDragEnd: ({ source: L, destination: M }) => ut(L.index, M.index) }, /* @__PURE__ */ i.createElement(Kl, { droppableId: "filter_order" }, (L) => /* @__PURE__ */ i.createElement("ul", { ...L.droppableProps, className: "series-list", ref: L.innerRef }, /* @__PURE__ */ i.createElement(It.List, { series: e.series, getItemStyle: ce, sortableItemStyles: Ne, chartsWithOptions: re }), L.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ i.createElement(He, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: B, initial: "Select", options: At() }), /* @__PURE__ */ i.createElement(He, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: B, initial: "Select", options: At() })), Le() && e.series && e.series.length === 1 && /* @__PURE__ */ i.createElement(He, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (L) => Et(L.target.value), options: ["asc", "desc"] }))), e.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Measures")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "text",
      value: e.boxplot.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Highest value, excluding outliers")))
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
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
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
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Middle data point. Half of data are higher value.")))
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
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
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
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: B }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: B }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: B }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: B }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: B }))), oe() && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ i.createElement(Qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    He,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: B,
      options: At(!1),
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label", updateField: B }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(Ae, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: B }), e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement(me, { value: e.yAxis.tickRotation || 0, type: "number", min: "0", section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: B }), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(Ae, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: B }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ i.createElement(me, { value: e.yAxis.tickRotation, type: "number", min: "0", section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: B }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: "0",
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: B }), Ce() && /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: B }), e.visualizationSubType === "regular" && /* @__PURE__ */ i.createElement(Ae, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: B })), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(Ae, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: B }), /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ i.createElement(me, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: B, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ i.createElement(i.Fragment, null, Te() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: B }), ee() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: B }), ke() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: B }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Tt.maxMsg), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: B }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Tt.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: B })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "max value", placeholder: "Auto", updateField: B }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Tt.maxMsg), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: B }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Tt.minMsg)), O() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, (wl = (Qt = e.yAxis) == null ? void 0 : Qt.anchors) == null ? void 0 : wl.map((L, M) => /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${M}` }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", M + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Q = [...e.yAxis.anchors];
        Q.splice(M, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Q
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[M].value ? e.yAxis.anchors[M].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Q = [...e.yAxis.anchors];
        Q[M].value = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Q
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[M].color ? e.yAxis.anchors[M].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Q = [...e.yAxis.anchors];
        Q[M].color = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Q
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[M].lineStyle || "",
      onChange: (H) => {
        const Q = [...e.yAxis.anchors];
        Q[M].lineStyle = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Q
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
      onClick: (L) => {
        L.preventDefault();
        const M = [...e.yAxis.anchors];
        M.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: M
          }
        });
      }
    },
    "Add Anchor"
  )), O() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, (Nl = (Cl = e.xAxis) == null ? void 0 : Cl.anchors) == null ? void 0 : Nl.map((L, M) => /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart", key: `xaxis-anchors-${M}` }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", M + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Q = [...e.xAxis.anchors];
        Q.splice(M, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Q
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[M].value ? e.xAxis.anchors[M].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Q = [...e.xAxis.anchors];
        Q[M].value = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Q
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[M].color ? e.xAxis.anchors[M].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Q = [...e.xAxis.anchors];
        Q[M].color = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Q
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[M].lineStyle || "",
      onChange: (H) => {
        const Q = [...e.xAxis.anchors];
        Q[M].lineStyle = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Q
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
      onClick: (L) => {
        L.preventDefault();
        const M = [...e.xAxis.anchors];
        M.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: M
          }
        });
      }
    },
    "Add Anchor"
  )))), Fe && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Right Value Axis")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: B }), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(Ae, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: B, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: B }))), /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ i.createElement(Qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(He, { value: e.xAxis.type, section: "xAxis", fieldName: "type", label: "Data Type", updateField: B, options: e.visualizationType !== "Scatter Plot" ? ["categorical", "date"] : ["categorical", "continuous", "date"] }), /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.sortDates, section: "xAxis", fieldName: "sortDates", label: "Force Date Scale (Sort Dates)", updateField: B }), " ", /* @__PURE__ */ i.createElement(
    He,
    {
      value: e.xAxis.dataKey || ye() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: B,
      options: At(!1),
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
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
      updateField: B,
      options: At(!1),
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: B }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ i.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.dateParseFormat, section: "xAxis", fieldName: "dateParseFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Parse Format", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.dateDisplayFormat, section: "xAxis", fieldName: "dateDisplayFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Display Format", updateField: B })), /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: B
    }
  ), ["Line", "Bar", "Area Chart", "Combo"].includes(e.visualizationType) && e.orientation === "vertical" && /* @__PURE__ */ i.createElement(Ae, { value: e.brush.active, section: "brush", fieldName: "active", label: "Brush Slider ", updateField: B }), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(Ee, null)), /* @__PURE__ */ i.createElement(
    He,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (L) => {
        L.target.value !== "" && L.target.value !== "Select" && Xt(L.target.value), L.target.value = "";
      },
      options: Jt(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: B, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ i.createElement(me, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: B, value: e.exclusions.dateEnd || "" }))), ue() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: "1", section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: B }), we() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.size, type: "number", min: "0", section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: B }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ae, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: B, min: 0 })), Ke() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(Ae, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: B }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && U() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.tickRotation, type: "number", min: "0", section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: B }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: "0",
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ i.createElement(i.Fragment, null, I() && /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: B }), j() && /* @__PURE__ */ i.createElement(Ae, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: B })) : /* @__PURE__ */ i.createElement(i.Fragment, null, I() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: B }), j() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: B }), Z() && /* @__PURE__ */ i.createElement(Ae, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: B })), ((Pl = e.series) == null ? void 0 : Pl.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Ft.map((L, M) => /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `highlighted-bar-${M}` }, /* @__PURE__ */ i.createElement("button", { className: "remove-column", onClick: (H) => rt(H, M) }, "Remove"), /* @__PURE__ */ i.createElement("p", null, "Highlighted Bar ", M + 1), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ i.createElement("select", { value: e.highlightedBarValues[M].value, onChange: (H) => Ye(H, M) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Value -"), Re && [...new Set(Re)].sort().map((H) => /* @__PURE__ */ i.createElement("option", { key: `special-class-value-option-${M}-${H}` }, H)))), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[M].color ? e.highlightedBarValues[M].color : "", onChange: (H) => Lt(H, M) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ i.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[M].borderWidth ? e.highlightedBarValues[M].borderWidth : "", onChange: (H) => Ot(H, M) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[M].legendLabel ? e.highlightedBarValues[M].legendLabel : "", onChange: (H) => pt(H, M) }))))), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: (L) => Qe(L) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(Ee, null)), /* @__PURE__ */ i.createElement(
    He,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (L) => {
        L.target.value !== "" && L.target.value !== "Select" && Xt(L.target.value), L.target.value = "";
      },
      options: Jt(e.xAxis.dataKey, !0)
    }
  ))), O() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, (Ol = (Ll = e.xAxis) == null ? void 0 : Ll.anchors) == null ? void 0 : Ol.map((L, M) => /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${M}` }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", M + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Q = [...e.xAxis.anchors];
        Q.splice(M, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Q
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[M].value ? e.xAxis.anchors[M].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Q = [...e.xAxis.anchors];
        Q[M].value = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Q
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[M].color ? e.xAxis.anchors[M].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Q = [...e.xAxis.anchors];
        Q[M].color = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Q
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[M].lineStyle || "",
      onChange: (H) => {
        const Q = [...e.xAxis.anchors];
        Q[M].lineStyle = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Q
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
      onClick: (L) => {
        L.preventDefault();
        const M = [...e.xAxis.anchors];
        M.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: M
          }
        });
      }
    },
    "Add Anchor"
  )), O() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(vn, { allowZeroExpanded: !0 }, (Ml = (_l = e.yAxis) == null ? void 0 : _l.anchors) == null ? void 0 : Ml.map((L, M) => /* @__PURE__ */ i.createElement(lt, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${M}` }, /* @__PURE__ */ i.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", M + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Q = [...e.yAxis.anchors];
        Q.splice(M, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Q
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[M].value ? e.yAxis.anchors[M].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Q = [...e.yAxis.anchors];
        Q[M].value = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Q
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[M].color ? e.yAxis.anchors[M].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Q = [...e.yAxis.anchors];
        Q[M].color = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Q
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[M].lineStyle || "",
      onChange: (H) => {
        const Q = [...e.yAxis.anchors];
        Q[M].lineStyle = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Q
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
      onClick: (L) => {
        L.preventDefault();
        const M = [...e.yAxis.anchors];
        M.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: M
          }
        });
      }
    },
    "Add Anchor"
  )))), de() && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Regions")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(Yg, { config: e, updateConfig: t }))), " ", e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Columns")), /* @__PURE__ */ i.createElement(ct, null, e.type !== "navigation" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), Pe.map((L) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: L }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (M) => {
        M.preventDefault(), wt(L);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[L] ? e.columns[L].name : Oe[0],
      onChange: (M) => {
        Ie(L, "name", M.target.value);
      }
    },
    Oe
  )), /* @__PURE__ */ i.createElement(me, { value: e.columns[L].label, section: "columns", subsection: L, fieldName: "label", label: "Label", updateField: B }), /* @__PURE__ */ i.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ i.createElement("li", { className: "three-col" }, /* @__PURE__ */ i.createElement(me, { value: e.columns[L].prefix, section: "columns", subsection: L, fieldName: "prefix", label: "Prefix", updateField: B }), /* @__PURE__ */ i.createElement(me, { value: e.columns[L].suffix, section: "columns", subsection: L, fieldName: "suffix", label: "Suffix", updateField: B }), /* @__PURE__ */ i.createElement(me, { type: "number", value: e.columns[L].roundToPlace, section: "columns", subsection: L, fieldName: "roundToPlace", label: "Round", updateField: B })), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].commas,
      onChange: (M) => {
        Ie(L, "commas", M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ i.createElement("li", null, e.table.showVertical && /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].dataTable,
      onChange: (M) => {
        Ie(L, "dataTable", M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Data Table"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].tooltips || !1,
      onChange: (M) => {
        yt(L, M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].forestPlot || !1,
      onChange: (M) => {
        Ie(L, "forestPlot", M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].tooltips || !1,
      onChange: (M) => {
        yt(L, M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].forestPlotAlignRight || !1,
      onChange: (M) => {
        Ie(L, "forestPlotAlignRight", M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[L].forestPlotAlignRight && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "text" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.columns[L].forestPlotStartingPoint || 0,
      onChange: (M) => {
        Ie(L, "forestPlotStartingPoint", M.target.value);
      }
    }
  ))))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (L) => {
        L.preventDefault(), it(Pe.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((L, M) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: L }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (H) => {
        H.preventDefault();
        const Q = [...e.legend.additionalCategories];
        Q.splice(M, 1), B("legend", null, "additionalCategories", Q);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Category"), /* @__PURE__ */ i.createElement(
    me,
    {
      value: L,
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (H, Q, je, kt) => {
        const Bt = [...e.legend.additionalCategories];
        Bt[M] = kt, B(H, Q, je, Bt);
      }
    }
  )))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (L) => {
        L.preventDefault();
        const M = [...e.legend.additionalCategories || []];
        M.push(""), B("legend", null, "additionalCategories", M);
      }
    },
    "Add Category"
  )))), q() && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Legend")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(Ae, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: B }), /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(Ae, { value: !!e.legend.showLegendValuesTooltip, section: "legend", fieldName: "showLegendValuesTooltip", label: "Show Legend Values in Tooltip", updateField: B }), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(Ae, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: B }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ i.createElement(He, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: B, options: Pn(n) }), /* @__PURE__ */ i.createElement(He, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: B, options: ["highlight", "isolate"] }), /* @__PURE__ */ i.createElement(me, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: B }), /* @__PURE__ */ i.createElement(He, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: B, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ae, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: B })), /* @__PURE__ */ i.createElement(me, { type: "textarea", value: e.legend.description, updateField: B, section: "legend", fieldName: "description", label: "Legend Description" }))), he() && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Filters")), /* @__PURE__ */ i.createElement(ct, null, e.filters && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    He,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: B,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ i.createElement("br", null)), e.filters && /* @__PURE__ */ i.createElement("ul", { className: "filters-list" }, e.filters.map((L, M) => L.type === "url" ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: M }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        et(M);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: L.columnName,
      onChange: (H) => {
        ft("columnName", M, H.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Option -"),
    Na().map((H, Q) => /* @__PURE__ */ i.createElement("option", { value: H, key: Q }, H))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: L.showDropdown === void 0 ? !0 : L.showDropdown,
      onChange: (H) => {
        ft("showDropdown", M, H.target.checked);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: L.filterStyle,
      onChange: (H) => {
        ft("filterStyle", M, H.target.value);
      }
    },
    te.map((H) => /* @__PURE__ */ i.createElement("option", { value: H }, H))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: L.label,
      onChange: (H) => {
        ft("label", M, H.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ i.createElement("select", { value: L.order ? L.order : "asc", onChange: (H) => ft("order", M, H.target.value) }, le.map((H, Q) => /* @__PURE__ */ i.createElement("option", { value: H.value, key: `filter-${Q}` }, H.label))), L.order === "cust" && /* @__PURE__ */ i.createElement(Hl, { onDragEnd: ({ source: H, destination: Q }) => xe(H.index, Q.index, M, e.filters[M]) }, /* @__PURE__ */ i.createElement(Kl, { droppableId: "filter_order" }, (H) => {
    var Q;
    return /* @__PURE__ */ i.createElement("ul", { ...H.droppableProps, className: "sort-list", ref: H.innerRef, style: { marginTop: "1em" } }, (Q = e.filters[M]) == null ? void 0 : Q.values.map((je, kt) => /* @__PURE__ */ i.createElement(hs, { key: je, draggableId: `draggableFilter-${je}`, index: kt }, (Bt, Zn) => /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("div", { className: Zn.isDragging ? "currently-dragging" : "", style: ce(Zn.isDragging, Bt.draggableProps.style), ref: Bt.innerRef, ...Bt.draggableProps, ...Bt.dragHandleProps }, je)))), H.placeholder);
  })))))), !e.filters && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: at, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Visual")), /* @__PURE__ */ i.createElement(ct, null, e.isLollipopChart && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", { className: "header" }, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ i.createElement(
    "div",
    {
      onChange: (L) => {
        nt(L.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: e.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: e.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ i.createElement(He, { value: e.lollipopColorStyle ? e.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: B, options: ["regular", "two-tone"] }), /* @__PURE__ */ i.createElement(He, { value: e.lollipopSize ? e.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: B, options: ["small", "medium", "large"] })), e.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ i.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ i.createElement(He, { value: e.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: B, options: ["true", "false"] }), /* @__PURE__ */ i.createElement(Ae, { value: e.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: B })), /* @__PURE__ */ i.createElement(He, { value: e.fontSize, fieldName: "fontSize", label: "Font Size", updateField: B, options: ["small", "medium", "large"] }), N() && /* @__PURE__ */ i.createElement(He, { value: e.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: B, options: ["true", "false"] }), V() && /* @__PURE__ */ i.createElement(Ae, { value: e.animate, fieldName: "animate", label: "Animate Visualization", updateField: B }), (((Dl = e.series) == null ? void 0 : Dl.some((L) => L.type === "Line" || L.type === "dashed-lg" || L.type === "dashed-sm" || L.type === "dashed-md")) && e.visualizationType === "Combo" || e.visualizationType === "Line") && /* @__PURE__ */ i.createElement(He, { value: e.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: B, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ i.createElement("label", { className: "header" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, D.map((L) => /* @__PURE__ */ i.createElement(
    "button",
    {
      title: L,
      key: L,
      onClick: (M) => {
        M.preventDefault(), t({ ...e, theme: L });
      },
      className: e.theme === L ? "selected " + L : L
    }
  )))), (z() || z()) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Chart Color Palette")), C() && /* @__PURE__ */ i.createElement(Il, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: B, value: e.isPaletteReversed }), $() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, S.map((L) => {
    const M = {
      backgroundColor: r[L][2]
    }, H = {
      backgroundColor: r[L][3]
    }, Q = {
      backgroundColor: r[L][5]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: L,
        key: L,
        onClick: (je) => {
          je.preventDefault(), t({ ...e, palette: L });
        },
        className: e.palette === L ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: M }),
      /* @__PURE__ */ i.createElement("span", { style: H }),
      /* @__PURE__ */ i.createElement("span", { style: Q })
    );
  }))), z() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, w.map((L) => {
    const M = {
      backgroundColor: r[L][2]
    }, H = {
      backgroundColor: r[L][4]
    }, Q = {
      backgroundColor: r[L][6]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: L,
        key: L,
        onClick: (je) => {
          je.preventDefault(), t({ ...e, palette: L });
        },
        className: e.palette === L ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: M }),
      /* @__PURE__ */ i.createElement("span", { style: H }),
      /* @__PURE__ */ i.createElement("span", { style: Q })
    );
  })))), (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Il, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: B, value: e.twoColor.isPaletteReversed }), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, x.map((L) => {
    const M = {
      backgroundColor: l[L][0]
    }, H = {
      backgroundColor: l[L][1]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: L,
        key: L,
        onClick: (Q) => {
          Q.preventDefault(), t({ ...e, twoColor: { ...e.twoColor, palette: L } });
        },
        className: e.twoColor.palette === L ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: M }),
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: H })
    );
  }))), P() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), G() && e.orientation === "horizontal" && !e.isLollipopChart && e.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ i.createElement(me, { type: "number", value: e.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: B, min: "15" }), (e.visualizationType === "Bar" && e.orientation !== "horizontal" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(me, { value: e.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: B }), K() && /* @__PURE__ */ i.createElement(me, { type: "number", value: e.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: B, min: "0" }), (e.visualizationType === "Bar" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Ae, { value: e.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: B }), e.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(Ae, { value: ($l = e.visual) == null ? void 0 : $l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: (zl = e.visual) == null ? void 0 : zl.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: (Rl = e.visual) == null ? void 0 : Rl.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: (Fl = e.visual) == null ? void 0 : Fl.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: (Bl = e.visual) == null ? void 0 : Bl.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: B })), (e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Ae, { value: e.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: B }), (e.visualizationType === "Line" || e.visualizationType === "Combo") && e.showLineSeriesLabels && /* @__PURE__ */ i.createElement(Ae, { value: e.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: B }), T() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ae, { value: e.visual.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.visual.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: B })), se() && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.tooltips.opacity ? e.tooltips.opacity : 100,
      onChange: (L) => t({
        ...e,
        tooltips: {
          ...e.tooltips,
          opacity: L.target.value
        }
      })
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.chartMessage.noData ? e.chartMessage.noData : "",
      onChange: (L) => t({
        ...e,
        chartMessage: {
          ...e.chartMessage,
          noData: L.target.value
        }
      })
    }
  )))), e.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(st, null, "Data Table")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.table.label,
      updateField: B,
      section: "table",
      fieldName: "label",
      id: "tableLabel",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.table.show,
      section: "table",
      fieldName: "show",
      label: "Show Data Table",
      updateField: B,
      className: "column-heading",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
    }
  ), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(
    Ae,
    {
      value: e.table.showVertical,
      section: "table",
      fieldName: "showVertical",
      label: "Show Vertical Data",
      updateField: B,
      className: "column-heading",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), /* @__PURE__ */ i.createElement(me, { value: e.table.indexLabel, section: "table", fieldName: "indexLabel", label: "Index Column Header", updateField: B }), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.table.caption,
      updateField: B,
      section: "table",
      type: "textarea",
      fieldName: "caption",
      label: "Data Table Caption",
      placeholder: " Data table",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ i.createElement(Ae, { value: e.table.limitHeight, section: "table", fieldName: "limitHeight", label: "Limit Table Height", updateField: B }), e.table.limitHeight && /* @__PURE__ */ i.createElement(me, { value: e.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: "0", max: "500", placeholder: "Height(px)", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.table.expanded, section: "table", fieldName: "expanded", label: "Expanded by Default", updateField: B }), s && /* @__PURE__ */ i.createElement(Ae, { value: e.table.showDataTableLink, section: "table", fieldName: "showDataTableLink", label: "Show Data Table Name & Link", updateField: B }), ie && /* @__PURE__ */ i.createElement(Ae, { value: e.table.showDownloadUrl, section: "table", fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.table.download, section: "table", fieldName: "download", label: "Show Download CSV Link", updateField: B }), /* @__PURE__ */ i.createElement(Ae, { value: e.table.showDownloadImgButton, section: "table", fieldName: "showDownloadImgButton", label: "Display Image Button", updateField: B })))), e.type !== "Spark Line" && /* @__PURE__ */ i.createElement(mu, { loadConfig: t, state: e, convertStateToConfig: Me }))));
};
const fs = (e) => {
  const n = /(?:\.([^.]+))?$/.exec(e);
  return n ? n[1] : "";
}, rr = (e = "#000000", t = !1) => {
  let n = Yt(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
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
function gx({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: r = !1, setConfig: l, setEditing: c, hostname: o, link: s, setSharedFilter: u, setSharedFilterValue: d, dashboardConfig: h }) {
  var vt, Tt;
  const m = new Mu(), [y, p] = R.useState(!0), [v, g] = R.useState(null), [f, b] = R.useState({}), [x, S] = R.useState(f.data || []), [w, A] = R.useState(void 0), [D, T] = R.useState(void 0), [z, $] = R.useState([]), [C, k] = R.useState("lg"), [_, O] = R.useState([]), [N, P] = R.useState(), [V, q] = R.useState(), [j, I] = R.useState(!1), [Z, U] = R.useState([]), [ue] = R.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  let de = R.useRef(/* @__PURE__ */ new Map()), he = R.useRef();
  a && console.log("Chart config, isEditor", f, n);
  let { legend: Ce, title: Te, description: ke, visualizationType: ee } = f;
  n && (!Te || Te === "") && (Te = "Chart Title"), f.table && (!((vt = f.table) != null && vt.label) || ((Tt = f.table) == null ? void 0 : Tt.label) === "") && (f.table.label = "Data Table");
  const { barBorderClass: K, lineDatapointClass: G, contentClasses: F, sparkLineStyles: pe } = Nu(f), ne = f.showSidebar ? "#legend" : f != null && f.title ? `#dataTableSection__${f.title.replace(/\s/g, "")}` : "#dataTableSection", fe = (E, J) => E.toString().localeCompare(J.toString(), "en", { numeric: !0 }), oe = (E, J) => J.toString().localeCompare(E.toString(), "en", { numeric: !0 }), se = (E, J = !1) => {
    J && console.log("handleChartAriaLabels Testing On:", E);
    try {
      if (!E.visualizationType)
        throw Error("handleChartAriaLabels: no visualization type found in state");
      let ae = "";
      return E.visualizationType && (ae += `${E.visualizationType} chart`), E.title && E.visualizationType && (ae += ` with the title: ${E.title}`), ae;
    } catch (ae) {
      console.error("COVE: ", ae.message);
    }
  }, Le = async () => {
    if (f.dataUrl) {
      const E = new URL(f.runtimeDataUrl || f.dataUrl, window.location.origin);
      let J = Object.fromEntries(new URLSearchParams(E.search)), ae = !1;
      if (f.filters.forEach((ge) => {
        ge.type === "url" && J[ge.queryParameter] !== decodeURIComponent(ge.active) && (J[ge.queryParameter] = ge.active, ae = !0);
      }), (!f.formattedData || f.formattedData.urlFiltered) && !ae)
        return;
      let ie = `${E.origin}${E.pathname}${Object.keys(J).map((ge, re) => {
        let Oe = re === 0 ? "?" : "&";
        return Oe += ge + "=", Oe += J[ge], Oe;
      }).join("")}`, ye = [];
      try {
        const ge = fs(E.pathname);
        ge === "csv" ? ye = await fetch(ie).then((re) => re.text()).then((re) => Wl.parse(re, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : ge === "json" ? ye = await fetch(ie).then((re) => re.json()) : ye = [];
      } catch {
        console.error(`Cannot parse URL: ${ie}`), ye = [];
      }
      f.dataDescription && (ye = m.autoStandardize(ye), ye = m.developerStandardize(ye, f.dataDescription)), Object.assign(ye, { urlFiltered: !0 }), le({ ...f, runtimeDataUrl: ie, data: ye, formattedData: ye }), ye && (S(ye), A(ye), T(te(f.filters, ye)));
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
  }, we = [
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
    const ae = E.filters ? E.filters.filter((ge) => ge.type === "url").length > 0 : !1;
    if (E.dataUrl && !ae)
      try {
        const ge = fs(E.dataUrl);
        ge === "csv" && (J = await fetch(E.dataUrl + `?v=${Ql()}`).then((re) => re.text()).then((re) => (re = re.replace(/(".*?")|,/g, (...Pe) => Pe[1] || "|"), re = re.replace(/["]+/g, ""), Wl.parse(re, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), ge === "json" && (J = await fetch(E.dataUrl + `?v=${Ql()}`).then((re) => re.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${E.dataUrl}`), J = [];
      }
    E.dataDescription && (J = m.autoStandardize(J), J = m.developerStandardize(J, E.dataDescription)), J && (S(J), A(J)), E !== void 0 && E.table !== void 0 && (!E.table || !E.table.showVertical) && (E.table = E.table || {}, E.table.showVertical = !1);
    let ie = { ...ar, ...E };
    ie.visualizationType === "Box Plot" && (ie.legend.hide = !0), ie.table.show === void 0 && (ie.table.show = !r), ie.series.map((ge) => {
      ge.tooltip || (ge.tooltip = !0);
    });
    const ye = { ...await _u(ie) };
    le(ye, J);
  }, le = (E, J) => {
    var ge;
    let ae = J || x;
    Object.keys(ar).forEach((re) => {
      E[re] && typeof E[re] == "object" && !Array.isArray(E[re]) && (E[re] = { ...ar[re], ...E[re] });
    });
    let ie = [];
    if (E.exclusions && E.exclusions.active)
      if (E.xAxis.type === "categorical" && ((ge = E.exclusions.keys) == null ? void 0 : ge.length) > 0)
        ie = ae.filter((re) => !E.exclusions.keys.includes(re[E.xAxis.dataKey]));
      else if (E.xAxis.type === "date" && (E.exclusions.dateStart || E.exclusions.dateEnd) && E.xAxis.dateParseFormat) {
        const re = (Ie) => new Date(Ie).getTime();
        let Oe = re(E.exclusions.dateStart), Pe = re(E.exclusions.dateEnd) + 86399999, it = typeof Oe !== void 0 && isNaN(Oe) === !1, wt = typeof Pe !== void 0 && isNaN(Pe) === !1;
        it && wt ? ie = ae.filter((Ie) => re(Ie[E.xAxis.dataKey]) >= Oe && re(Ie[E.xAxis.dataKey]) <= Pe) : it ? ie = ae.filter((Ie) => re(Ie[E.xAxis.dataKey]) >= Oe) : wt && (ie = ae.filter((Ie) => re(Ie[E.xAxis.dataKey]) <= Pe));
      } else
        ie = J || x;
    else
      ie = J || x;
    A(ie);
    let ye = [];
    if (E.filters && (E.filters.forEach((re, Oe) => {
      let Pe = [];
      Pe = re.orderedValues || Fe(re.columnName, ie).sort(re.order === "desc" ? oe : fe), E.filters[Oe].values = Pe, E.filters[Oe].active = E.filters[Oe].active || Pe[0], E.filters[Oe].filterStyle = E.filters[Oe].filterStyle ? E.filters[Oe].filterStyle : "dropdown";
    }), ye = te(E.filters, ie), T(ye)), E.runtime = {}, E.runtime.seriesLabels = {}, E.runtime.seriesLabelsAll = [], E.runtime.originalXAxis = E.xAxis, E.visualizationType === "Pie" ? (E.runtime.seriesKeys = (J || ae).map((re) => re[E.xAxis.dataKey]), E.runtime.seriesLabelsAll = E.runtime.seriesKeys) : E.runtime.seriesKeys = E.series ? E.series.map((re) => (E.runtime.seriesLabels[re.dataKey] = re.name || re.label || re.dataKey, E.runtime.seriesLabelsAll.push(re.name || re.dataKey), re.dataKey)) : [], E.visualizationType === "Box Plot" && E.series) {
      let re = ie ? ie.map((Re) => Re[E.xAxis.dataKey]) : ae.map((Re) => Re[E.xAxis.dataKey]), Oe = ie ? ie.map((Re) => {
        var Ye;
        return Number(Re[(Ye = E == null ? void 0 : E.series[0]) == null ? void 0 : Ye.dataKey]);
      }) : ae.map((Re) => {
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
          let Ye = ie ? ie.filter((mt) => mt[E.xAxis.dataKey] === Re) : ae.filter((mt) => mt[E.xAxis.dataKey] === Re), Qe = Ye.map((mt) => {
            var Qt;
            return Number(mt[(Qt = E == null ? void 0 : E.series[0]) == null ? void 0 : Qt.dataKey]);
          }), rt = Qe.sort((mt, Qt) => mt - Qt);
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
            columnTotal: Qe.reduce((mt, Qt) => mt + Qt, 0),
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
      }), wt = JSON.parse(JSON.stringify(Ie)), wt.map((Re) => (Re.columnIqr = void 0, Re.nonOutlierValues = void 0, Re.columnLowerBounds = void 0, Re.columnUpperBounds = void 0, null)), E.boxplot.allValues = Oe, E.boxplot.categories = it, E.boxplot.plots = Ie, E.boxplot.tableData = wt;
    }
    E.visualizationType === "Combo" && E.series && (E.runtime.barSeriesKeys = [], E.runtime.lineSeriesKeys = [], E.runtime.areaSeriesKeys = [], E.runtime.forecastingSeriesKeys = [], E.series.forEach((re) => {
      re.type === "Area Chart" && E.runtime.areaSeriesKeys.push(re), re.type === "Forecasting" && E.runtime.forecastingSeriesKeys.push(re), re.type === "Bar" && E.runtime.barSeriesKeys.push(re.dataKey), (re.type === "Line" || re.type === "dashed-sm" || re.type === "dashed-md" || re.type === "dashed-lg") && E.runtime.lineSeriesKeys.push(re.dataKey);
    })), E.visualizationType === "Forecasting" && E.series && (E.runtime.forecastingSeriesKeys = [], E.series.forEach((re) => {
      re.type === "Forecasting" && E.runtime.forecastingSeriesKeys.push(re);
    })), E.visualizationType === "Area Chart" && E.series && (E.runtime.areaSeriesKeys = [], E.series.forEach((re) => {
      E.runtime.areaSeriesKeys.push({ ...re, type: "Area Chart" });
    })), E.visualizationType === "Bar" && E.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(E.visualizationType) ? (E.runtime.xAxis = E.yAxis, E.runtime.yAxis = E.xAxis, E.runtime.horizontal = !0, E.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(E.visualizationType) ? (E.runtime.xAxis = E.xAxis, E.runtime.yAxis = E.yAxis, E.runtime.horizontal = !1, E.orientation = "vertical") : (E.runtime.xAxis = E.xAxis, E.runtime.yAxis = E.yAxis, E.runtime.horizontal = !1), E.runtime.uniqueId = Date.now(), E.runtime.editorErrorMessage = E.visualizationType === "Pie" && !E.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", b(E);
  }, te = (E, J) => {
    let ae = [];
    return J.forEach((ie) => {
      let ye = !0;
      E.filter((ge) => ge.type !== "url").forEach((ge) => {
        ie[ge.columnName] != ge.active && (ye = !1);
      }), ye && ae.push(ie);
    }), ae;
  }, Fe = (E, J = this.state.data) => {
    const ae = [];
    return J.forEach((ie) => {
      const ye = ie[E];
      ye && ae.includes(ye) === !1 && ae.push(ye);
    }), ae;
  }, ce = (E, J) => {
    let ae = f.visualizationType === "Bar" && f.visualizationSubType === "horizontal" ? f.xAxis.dataKey : f.yAxis.sortKey, ie = parseFloat(E[ae]), ye = parseFloat(J[ae]);
    return ie < ye ? f.sortData === "ascending" ? 1 : -1 : ie > ye ? f.sortData === "ascending" ? -1 : 1 : 0;
  }, Ne = new cu((E) => {
    for (let J of E) {
      let { width: ae, height: ie } = J.contentRect, ye = uu(ae), ge = 32, re = 350;
      k(ye), n && (ae = ae - re), J.target.dataset.lollipop === "true" && (ae = ae - 2.5), ae = ae - ge, O([ae, ie]);
    }
  }), Se = R.useCallback((E) => {
    E !== null && Ne.observe(E), q(E);
  }, []);
  function B(E) {
    return Object.keys(E).length === 0;
  }
  R.useEffect(() => {
    xe();
  }, []), R.useEffect(() => {
    Le();
  }, [JSON.stringify(f.filters)]), R.useEffect(() => {
    V && !B(f) && !j && (Pu("cove_loaded", { config: f }), I(!0));
  }, [V, f]), R.useEffect(() => {
    const E = (J) => {
      let ae = [];
      ae.push(J.detail), P(ae);
    };
    return Lu("cove_filterData", (J) => E(J)), () => {
      Ou("cove_filterData", E);
    };
  }, [f]), R.useEffect(() => {
    if (N && N[0] && !N[0].hasOwnProperty("active")) {
      let J = { ...f };
      delete J.filters, b(J), T(te(N, w));
    }
    if (N && N.length > 0 && N.length > 0 && N[0].hasOwnProperty("active")) {
      let E = { ...f, filters: N };
      b(E), T(te(N, w));
    }
  }, [N]), t && R.useEffect(() => {
    xe();
  }, [t.data]), R.useEffect(() => {
    if (x && f.xAxis && f.runtime.seriesKeys) {
      const E = f.customColors ? f.customColors : f.visualizationType === "Paired Bar" || f.visualizationType === "Deviation Bar" ? f.twoColor.palette : f.palette, J = { ...an, ...lr };
      let ae = f.customColors || J[E], ie = f.runtime.seriesKeys.length, ye;
      for (; ie > ae.length; )
        ae = ae.concat(ae);
      ae = ae.slice(0, ie), ye = () => Sf({
        domain: f.runtime.seriesLabelsAll,
        range: ae,
        unknown: null
      }), g(ye), p(!1);
    }
    f && x && f.sortData && x.sort(ce);
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
    let ae = E.datum;
    if (f.runtime.seriesLabels) {
      for (let ie = 0; ie < f.runtime.seriesKeys.length; ie++)
        if (f.runtime.seriesLabels[f.runtime.seriesKeys[ie]] === E.datum) {
          ae = f.runtime.seriesKeys[ie];
          break;
        }
    }
    J.indexOf(ae) !== -1 ? J.splice(J.indexOf(ae), 1) : J.push(ae), $(J);
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
    let ae = Ec(f.runtime[nt].dateParseFormat)(E);
    return ae || (J && (f.runtime.editorErrorMessage = `Error parsing date "${E}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
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
    let J = "", ae = Math.abs(E);
    return ae >= 1e9 ? (J = "B", E = E / 1e9) : ae >= 1e6 ? (J = "M", E = E / 1e6) : ae >= 1e3 && (J = "K", E = E / 1e3), E + J;
  }, Et = (E, J, ae = !1, ie, ye, ge) => {
    if (isNaN(E) || !E)
      return E;
    const re = E < 0;
    (J === void 0 || !J) && (J = "left"), re && (E = Math.abs(E));
    let {
      dataFormat: { commas: Oe, abbreviated: Pe, roundTo: it, prefix: wt, suffix: Ie, rightRoundTo: Ft, bottomRoundTo: Re, rightPrefix: Ye, rightSuffix: Qe, bottomPrefix: rt, bottomSuffix: Lt, bottomAbbreviated: pt }
    } = f;
    String(E).indexOf(",") !== -1 && (E = E.replaceAll(",", ""));
    let Ot = E, yt = {
      useGrouping: !!Oe
      // for old chart data table to work right cant just leave this to undefined
    };
    if (J === "left" || J === void 0) {
      let St;
      ge !== void 0 ? St = ge ? Number(ge) : 0 : St = it ? Number(it) : 0, yt = {
        useGrouping: ge ? !0 : !!f.dataFormat.commas,
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
    J === "left" && Oe && Pe && ae || J === "bottom" && Oe && Pe && ae ? E = E : E = E.toLocaleString("en-US", yt);
    let tt = "";
    return Pe && J === "left" && ae && (E = Je(parseFloat(E))), pt && J === "bottom" && ae && (E = Je(parseFloat(E))), ie && J === "left" ? tt = ie + tt : wt && J === "left" && (tt += wt), Ye && J === "right" && (tt += Ye), rt && J === "bottom" && (tt += rt), tt += E, ye && J === "left" ? tt += ye : Ie && J === "left" && (tt += Ie), Qe && J === "right" && (tt += Qe), Lt && J === "bottom" && (tt += Lt), re && (tt = "-" + tt), String(tt);
  }, Xt = {
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
    let ae = E, ie;
    if (Object.keys(f.columns).length > 0 && Object.keys(f.columns).forEach(function(ye) {
      var ge = f.columns[ye];
      ge.name === J && (ie = ge);
    }), ie === void 0 && (ie = f.type === "chart" ? f.dataFormat : f.primary, ie.useCommas = ie.commas, ie.roundToPlace = ie.roundTo ? ie.roundTo : ""), ie) {
      let ye = !1, ge = 0;
      Number(E) && (ie.roundToPlace >= 0 && (ye = ie.roundToPlace ? ie.roundToPlace !== "" || ie.roundToPlace !== null : !1, ge = ie.roundToPlace ? Number(ie.roundToPlace) : 0, ie.hasOwnProperty("roundToPlace") && ye && (ae = Number(E).toFixed(ge))), ie.hasOwnProperty("useCommas") && ie.useCommas === !0 && (ae = Number(E).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: ye ? ge : 0,
        maximumFractionDigits: ye ? ge : 5
      }))), ae = (ie.prefix || "") + ae + (ie.suffix || "");
    }
    return ae;
  }, At = (E) => {
    var J, ae, ie;
    try {
      if (!E)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (f.type === "navigation") {
        let ge = an[f.color] || an.bluegreenreverse;
        return rr(ge[3]);
      }
      let ye = Qg(E);
      if (de.current.has(ye)) {
        let ge = de.current.get(ye);
        if ((J = runtimeLegend[ge]) != null && J.disabled)
          return !1;
        let re = (ae = runtimeLegend.find((Oe) => Oe.bin === ge)) == null ? void 0 : ae.color;
        return rr(re, (ie = runtimeLegend[ge]) == null ? void 0 : ie.special);
      }
      return rr();
    } catch (ye) {
      console.error("COVE: ", ye);
    }
  }, Pn = (E) => {
    var J;
    return Array.isArray(E) ? f.visualizationType === "Forecasting" ? E : (J = f == null ? void 0 : f.xAxis) != null && J.dataKey ? m.cleanData(E, f.xAxis.dataKey) : E : [];
  }, Jt = (E) => E, Xn = (E) => {
    const J = Ce.position === "bottom" || ["sm", "xs", "xxs"].includes(C), ae = E.orientation === "horizontal", ie = Number(E.xAxis.tickRotation) > 0 ? Number(E.xAxis.tickRotation) : 0, ye = E.brush.active, ge = 20, re = E.brush.height;
    let Oe = 0;
    return !J && ae && E.xAxis.label && (Oe = E.runtime.xAxis.size + E.xAxis.labelOffset), !J && ae && !E.xAxis.label && (Oe = 0), !ae && !J && E.xAxis.label && ie && !E.isResponsiveTicks && (Oe = ye ? re + E.xAxis.tickWidthMax + -E.xAxis.size + E.xAxis.labelOffset + ge : E.xAxis.tickWidthMax + ge + -E.xAxis.size + E.xAxis.labelOffset), !ae && !J && !E.xAxis.label && ie && E.isResponsiveTicks, !ae && !J && !E.xAxis.label && ie && !E.dynamicMarginTop && !E.isResponsiveTicks && (Oe = ye ? E.xAxis.tickWidthMax + re + ge + -E.xAxis.size : 0), !ae && !J && E.xAxis.label && !ie && !E.isResponsiveTicks && (Oe = ye ? re + -E.xAxis.size + E.xAxis.labelOffset + ge : -E.xAxis.size + E.xAxis.labelOffset + ge), !ae && !J && E.xAxis.label && E.dynamicMarginTop && E.isResponsiveTicks && (Oe = ye ? re + E.xAxis.labelOffset + -E.xAxis.size + E.xAxis.tickWidthMax : E.dynamicMarginTop + -E.xAxis.size + ge), !ae && !J && !E.xAxis.label && E.dynamicMarginTop && E.isResponsiveTicks && (Oe = ye ? re + E.xAxis.labelOffset + -E.xAxis.size + E.xAxis.tickWidthMax : E.dynamicMarginTop + -E.xAxis.size - ge), !ae && !J && E.xAxis.label && !E.dynamicMarginTop && E.isResponsiveTicks && (Oe = ye ? re + E.xAxis.labelOffset + -E.xAxis.size + 25 : E.xAxis.labelOffset + -E.xAxis.size + ge), !ae && !J && !E.xAxis.label && !E.dynamicMarginTop && E.isResponsiveTicks && (Oe = -E.xAxis.size + ge + E.xAxis.labelOffset), !ae && !J && !E.xAxis.label && !ie && !E.dynamicMarginTop && !E.isResponsiveTicks && (Oe = ye ? re + -E.xAxis.size + E.xAxis.labelOffset : 0), `${Oe}px`;
  };
  let un = /* @__PURE__ */ i.createElement(vu, null);
  if (!y) {
    const E = /* @__PURE__ */ i.createElement("a", { href: `#data-table-${f.dataKey}`, className: "margin-left-href" }, f.dataKey, " (Go to Table)");
    un = /* @__PURE__ */ i.createElement(i.Fragment, null, n && /* @__PURE__ */ i.createElement(Xg, null), !Nn() && !f.newViz && /* @__PURE__ */ i.createElement("div", { className: "cdc-chart-inner-container" }, /* @__PURE__ */ i.createElement(yu, { showTitle: f.showTitle, isDashboard: r, title: Te, superTitle: f.superTitle, classes: ["chart-title", `${f.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ i.createElement("a", { id: "skip-chart-container", className: "cdcdataviz-sr-only-focusable", href: ne }, "Skip Over Chart Container"), f.filters && !N && /* @__PURE__ */ i.createElement(xu, { config: f, setConfig: b, setFilteredData: T, filteredData: D, excludedData: w, filterData: te, dimensions: _ }), (f == null ? void 0 : f.introText) && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("section", { className: "introText" }, xn(f.introText)), /* @__PURE__ */ i.createElement("div", { style: { marginBottom: Xn(f) }, className: `chart-container  p-relative ${f.legend.position === "bottom" ? "bottom" : ""}${f.legend.hide ? " legend-hidden" : ""}${G}${K} ${F.join(" ")}` }, f.visualizationType !== "Spark Line" && Xt[f.visualizationType], f.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, (f == null ? void 0 : f.introText) && /* @__PURE__ */ i.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, xn(f.introText)), /* @__PURE__ */ i.createElement("div", { style: { height: "100px", width: "100%", ...pe } }, /* @__PURE__ */ i.createElement(nm, null, (J) => /* @__PURE__ */ i.createElement(gg, { width: J.width, height: J.height }))), ke && /* @__PURE__ */ i.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, xn(ke))), !f.legend.hide && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(Pg, null)), r && f.table && f.table.show && f.table.showDataTableLink ? E : s && s, ke && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "column " + f.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, xn(ke)), /* @__PURE__ */ i.createElement(Ri.Section, { classes: ["download-buttons"] }, f.table.showDownloadImgButton && /* @__PURE__ */ i.createElement(Ri.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: f, elementToCapture: ue }), f.table.showDownloadPdfButton && /* @__PURE__ */ i.createElement(Ri.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: f, elementToCapture: ue })), f.xAxis.dataKey && f.table.show && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(
      hu,
      {
        config: f,
        rawData: f.data,
        runtimeData: D || w,
        expandDataTable: f.table.expanded,
        columns: f.columns,
        showDownloadButton: f.general.showDownloadButton,
        runtimeLegend: Z,
        displayDataAsText: Na,
        displayGeoName: Jt,
        applyLegendToRow: At,
        tableTitle: f.table.label,
        indexTitle: f.table.indexLabel,
        vizTitle: Te,
        viewport: C,
        parseDate: et,
        formatDate: ft,
        formatNumber: Et,
        tabbingId: ne,
        showDownloadImgButton: f.showDownloadImgButton,
        showDownloadPdfButton: f.showDownloadPdfButton,
        innerContainerRef: he,
        outerContainerRef: Se,
        imageRef: ue,
        colorScale: v,
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
    excludedData: w,
    transformedData: Pn(D || w),
    // do this right before passing to components
    tableData: D || w,
    // do not clean table data
    unfilteredData: x,
    seriesHighlight: z,
    colorScale: v,
    dimensions: _,
    currentViewport: C,
    parseDate: et,
    formatDate: ft,
    formatNumber: Et,
    loading: y,
    updateConfig: le,
    colorPalettes: an,
    isDashboard: r,
    setParentConfig: l,
    missingRequiredSections: Nn,
    setEditing: c,
    setFilteredData: T,
    handleChartAriaLabels: se,
    highlight: _e,
    highlightReset: Ge,
    legend: Ce,
    setSeriesHighlight: $,
    dynamicLegendItems: Z,
    setDynamicLegendItems: U,
    filterData: te,
    imageId: ue,
    handleLineType: Ke,
    lineOptions: we,
    isNumber: Xa,
    getTextWidth: at,
    twoColorPalette: lr,
    isEditor: n,
    isDebug: a,
    setSharedFilter: u,
    setSharedFilterValue: d,
    dashboardConfig: h
  }, ut = ["cdc-open-viz-module", "type-chart", `${C}`, `font-${f.fontSize}`, `${f.theme}`];
  return f.visualizationType === "Spark Line" && ut.push("type-sparkline"), n && ut.push("spacing-wrapper"), n && ut.push("isEditor"), /* @__PURE__ */ i.createElement(ze.Provider, { value: Ee }, /* @__PURE__ */ i.createElement("div", { className: `${ut.join(" ")}`, ref: Se, "data-lollipop": f.isLollipopChart, "data-download-id": ue }, un));
}
export {
  gx as C
};
