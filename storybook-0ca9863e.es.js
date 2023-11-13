import { R as i, r as R } from "./storybook-e61d95ab.es.js";
import { i as cu, g as uu } from "./storybook-c15fd298.es.js";
import { A as du } from "./storybook-43b78725.es.js";
import { p as ms, P as W } from "./storybook-b8c9afe4.es.js";
import { d as fu } from "./storybook-006055ee.es.js";
import { a as Br } from "./storybook-c5d32002.es.js";
import { P as Bl } from "./storybook-76833471.es.js";
import { H as pn, T as mu } from "./storybook-826feda6.es.js";
import { e as Xt, a as rt, b as lt, c as ot, d as st, A as yn } from "./storybook-7cc24c1b.es.js";
import { _ as qe } from "./storybook-70f3d2a3.es.js";
import { _ as Kt, T as ze, c as tn, s as Xa, P as hs, t as ar, u as hu, D as Wl, C as Vl, I as Hl, F as pu } from "./storybook-21a0391b.es.js";
import { t as yu, f as gu, g as Cn, L as Kl, M as $i, D as xu } from "./storybook-2b211e5b.es.js";
import { E as $t, L as vu } from "./storybook-a0c99f4a.es.js";
import { G as ve, c as Ze, j as ki, t as bu, k as ps, m as jl, o as Eu, p as Au, q as Tu, s as Il, u as ku } from "./storybook-b0e07e40.es.js";
import { R as Su } from "./storybook-ac19c974.es.js";
import { B as Nt, s as na, t as ys, a as gs, b as xs, d as ba, c as pt, C as wu, I as rn, S as vs } from "./storybook-fde5cb17.es.js";
import { i as bs, m as zi, c as Es, j as Na, k as Pa, l as La, n as ql, o as Cu, p as Ul, b as As, d as Ts } from "./storybook-bedc547d.es.js";
import { I as De } from "./storybook-5db1e0e0.es.js";
import { T as X } from "./storybook-46a89ba7.es.js";
import { u as Nu, p as Pu, s as Lu, a as Ou, c as _u } from "./storybook-25f566e3.es.js";
import { n as Yl } from "./storybook-24623c03.es.js";
import { D as Mu } from "./storybook-9ef92e7c.es.js";
import { c as Xl } from "./storybook-7a3dd9ba.es.js";
var ir = Math.PI, rr = 2 * ir, hn = 1e-6, Du = rr - hn;
function lr() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Ea() {
  return new lr();
}
lr.prototype = Ea.prototype = {
  constructor: lr,
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
    else if (h > hn)
      if (!(Math.abs(d * o - s * u) > hn) || !r)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var m = n - l, y = a - c, p = o * o + s * s, v = m * m + y * y, g = Math.sqrt(p), f = Math.sqrt(h), b = r * Math.tan((ir - Math.acos((p + h - v) / (2 * g * f))) / 2), x = b / f, k = b / g;
        Math.abs(x - 1) > hn && (this._ += "L" + (e + x * u) + "," + (t + x * d)), this._ += "A" + r + "," + r + ",0,0," + +(d * m > u * y) + "," + (this._x1 = e + k * o) + "," + (this._y1 = t + k * s);
      }
  },
  arc: function(e, t, n, a, r, l) {
    e = +e, t = +t, n = +n, l = !!l;
    var c = n * Math.cos(a), o = n * Math.sin(a), s = e + c, u = t + o, d = 1 ^ l, h = l ? a - r : r - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + s + "," + u : (Math.abs(this._x1 - s) > hn || Math.abs(this._y1 - u) > hn) && (this._ += "L" + s + "," + u), n && (h < 0 && (h = h % rr + rr), h > Du ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (e - c) + "," + (t - o) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = s) + "," + (this._y1 = u) : h > hn && (this._ += "A" + n + "," + n + ",0," + +(h >= ir) + "," + d + "," + (this._x1 = e + n * Math.cos(r)) + "," + (this._y1 = t + n * Math.sin(r))));
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
var Ql = Math.abs, gt = Math.atan2, cn = Math.cos, $u = Math.max, Ri = Math.min, Ft = Math.sin, _n = Math.sqrt, xt = 1e-12, Rn = Math.PI, Qa = Rn / 2, aa = 2 * Rn;
function zu(e) {
  return e > 1 ? 0 : e < -1 ? Rn : Math.acos(e);
}
function Zl(e) {
  return e >= 1 ? Qa : e <= -1 ? -Qa : Math.asin(e);
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
function Oa(e, t, n, a, r, l, c) {
  var o = e - n, s = t - a, u = (c ? l : -l) / _n(o * o + s * s), d = u * s, h = -u * o, m = e + d, y = t + h, p = n + d, v = a + h, g = (m + p) / 2, f = (y + v) / 2, b = p - m, x = v - y, k = b * b + x * x, w = r - l, A = m * v - p * y, D = (x < 0 ? -1 : 1) * _n($u(0, w * w * k - A * A)), T = (A * x - b * D) / k, z = (-A * b - x * D) / k, $ = (A * x + b * D) / k, C = (-A * b + x * D) / k, S = T - g, _ = z - f, O = $ - g, N = C - f;
  return S * S + _ * _ > O * O + N * N && (T = $, z = C), {
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
    var u, d, h = +e.apply(this, arguments), m = +t.apply(this, arguments), y = r.apply(this, arguments) - Qa, p = l.apply(this, arguments) - Qa, v = Ql(p - y), g = p > y;
    if (o || (o = u = Ea()), m < h && (d = m, m = h, h = d), !(m > xt))
      o.moveTo(0, 0);
    else if (v > aa - xt)
      o.moveTo(m * cn(y), m * Ft(y)), o.arc(0, 0, m, y, p, !g), h > xt && (o.moveTo(h * cn(p), h * Ft(p)), o.arc(0, 0, h, p, y, g));
    else {
      var f = y, b = p, x = y, k = p, w = v, A = v, D = c.apply(this, arguments) / 2, T = D > xt && (a ? +a.apply(this, arguments) : _n(h * h + m * m)), z = Ri(Ql(m - h) / 2, +n.apply(this, arguments)), $ = z, C = z, S, _;
      if (T > xt) {
        var O = Zl(T / h * Ft(D)), N = Zl(T / m * Ft(D));
        (w -= O * 2) > xt ? (O *= g ? 1 : -1, x += O, k -= O) : (w = 0, x = k = (y + p) / 2), (A -= N * 2) > xt ? (N *= g ? 1 : -1, f += N, b -= N) : (A = 0, f = b = (y + p) / 2);
      }
      var P = m * cn(f), V = m * Ft(f), q = h * cn(k), I = h * Ft(k);
      if (z > xt) {
        var j = m * cn(b), J = m * Ft(b), U = h * cn(x), ce = h * Ft(x), de;
        if (v < Rn && (de = Hu(P, V, U, ce, j, J, q, I))) {
          var fe = P - de[0], ke = V - de[1], we = j - de[0], Ce = J - de[1], G = 1 / Ft(zu((fe * we + ke * Ce) / (_n(fe * fe + ke * ke) * _n(we * we + Ce * Ce))) / 2), K = _n(de[0] * de[0] + de[1] * de[1]);
          $ = Ri(z, (h - K) / (G - 1)), C = Ri(z, (m - K) / (G + 1));
        }
      }
      A > xt ? C > xt ? (S = Oa(U, ce, P, V, m, C, g), _ = Oa(j, J, q, I, m, C, g), o.moveTo(S.cx + S.x01, S.cy + S.y01), C < z ? o.arc(S.cx, S.cy, C, gt(S.y01, S.x01), gt(_.y01, _.x01), !g) : (o.arc(S.cx, S.cy, C, gt(S.y01, S.x01), gt(S.y11, S.x11), !g), o.arc(0, 0, m, gt(S.cy + S.y11, S.cx + S.x11), gt(_.cy + _.y11, _.cx + _.x11), !g), o.arc(_.cx, _.cy, C, gt(_.y11, _.x11), gt(_.y01, _.x01), !g))) : (o.moveTo(P, V), o.arc(0, 0, m, f, b, !g)) : o.moveTo(P, V), !(h > xt) || !(w > xt) ? o.lineTo(q, I) : $ > xt ? (S = Oa(q, I, j, J, h, -$, g), _ = Oa(P, V, U, ce, h, -$, g), o.lineTo(S.cx + S.x01, S.cy + S.y01), $ < z ? o.arc(S.cx, S.cy, $, gt(S.y01, S.x01), gt(_.y01, _.x01), !g) : (o.arc(S.cx, S.cy, $, gt(S.y01, S.x01), gt(S.y11, S.x11), !g), o.arc(0, 0, h, gt(S.cy + S.y11, S.cx + S.x11), gt(_.cy + _.y11, _.cx + _.x11), g), o.arc(_.cx, _.cy, $, gt(_.y11, _.x11), gt(_.y01, _.x01), !g))) : o.arc(0, 0, h, k, x, g);
    }
    if (o.closePath(), u)
      return o = null, u + "" || null;
  }
  return s.centroid = function() {
    var u = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, d = (+r.apply(this, arguments) + +l.apply(this, arguments)) / 2 - Rn / 2;
    return [cn(d) * u, Ft(d) * u];
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
function ks(e) {
  this._context = e;
}
ks.prototype = {
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
function Si(e) {
  return new ks(e);
}
function Ss(e) {
  return e[0];
}
function ws(e) {
  return e[1];
}
function Cs() {
  var e = Ss, t = ws, n = We(!0), a = null, r = Si, l = null;
  function c(o) {
    var s, u = o.length, d, h = !1, m;
    for (a == null && (l = r(m = Ea())), s = 0; s <= u; ++s)
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
function ju() {
  var e = Ss, t = null, n = We(0), a = ws, r = We(!0), l = null, c = Si, o = null;
  function s(d) {
    var h, m, y, p = d.length, v, g = !1, f, b = new Array(p), x = new Array(p);
    for (l == null && (o = c(f = Ea())), h = 0; h <= p; ++h) {
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
function Iu(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function qu(e) {
  return e;
}
function Uu() {
  var e = qu, t = Iu, n = null, a = We(0), r = We(aa), l = We(0);
  function c(o) {
    var s, u = o.length, d, h, m = 0, y = new Array(u), p = new Array(u), v = +a.apply(this, arguments), g = Math.min(aa, Math.max(-aa, r.apply(this, arguments) - v)), f, b = Math.min(Math.abs(g) / u, l.apply(this, arguments)), x = b * (g < 0 ? -1 : 1), k;
    for (s = 0; s < u; ++s)
      (k = p[y[s] = s] = +e(o[s], s, o)) > 0 && (m += k);
    for (t != null ? y.sort(function(w, A) {
      return t(p[w], p[A]);
    }) : n != null && y.sort(function(w, A) {
      return n(o[w], o[A]);
    }), s = 0, h = m ? (g - u * x) / m : 0; s < u; ++s, v = f)
      d = y[s], k = p[d], f = v + (k > 0 ? k * h : 0) + x, p[d] = {
        data: o[d],
        index: s,
        value: k,
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
var Jl = Array.prototype.slice;
const Yu = {
  draw: function(e, t) {
    var n = Math.sqrt(t / Rn);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, aa);
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
    if (n || (n = r = Ea()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r)
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
function ln() {
}
function Za(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function wi(e) {
  this._context = e;
}
wi.prototype = {
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
        Za(this, this._x1, this._y1);
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
        Za(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Ju(e) {
  return new wi(e);
}
function Ps(e) {
  this._context = e;
}
Ps.prototype = {
  areaStart: ln,
  areaEnd: ln,
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
        Za(this, e, t);
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
        Za(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function ed(e) {
  return new Ls(e);
}
function Os(e, t) {
  this._basis = new wi(e), this._beta = t;
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
    return t === 1 ? new wi(a) : new Os(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function Ja(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function Wr(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Wr.prototype = {
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
        Ja(this, this._x1, this._y1);
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
        Ja(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const nd = function e(t) {
  function n(a) {
    return new Wr(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Vr(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Vr.prototype = {
  areaStart: ln,
  areaEnd: ln,
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
        Ja(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const ad = function e(t) {
  function n(a) {
    return new Vr(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Hr(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Hr.prototype = {
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
        Ja(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const id = function e(t) {
  function n(a) {
    return new Hr(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Kr(e, t, n) {
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
        Kr(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const rd = function e(t) {
  function n(a) {
    return t ? new _s(a, t) : new Wr(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Ms(e, t) {
  this._context = e, this._alpha = t;
}
Ms.prototype = {
  areaStart: ln,
  areaEnd: ln,
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
        Kr(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const ld = function e(t) {
  function n(a) {
    return t ? new Ms(a, t) : new Vr(a, 0);
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
        Kr(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const od = function e(t) {
  function n(a) {
    return t ? new Ds(a, t) : new Hr(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function $s(e) {
  this._context = e;
}
$s.prototype = {
  areaStart: ln,
  areaEnd: ln,
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
function Gl(e) {
  return e < 0 ? -1 : 1;
}
function eo(e, t, n) {
  var a = e._x1 - e._x0, r = t - e._x1, l = (e._y1 - e._y0) / (a || r < 0 && -0), c = (n - e._y1) / (r || a < 0 && -0), o = (l * r + c * a) / (a + r);
  return (Gl(l) + Gl(c)) * Math.min(Math.abs(l), Math.abs(c), 0.5 * Math.abs(o)) || 0;
}
function to(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Fi(e, t, n) {
  var a = e._x0, r = e._y0, l = e._x1, c = e._y1, o = (l - a) / 3;
  e._context.bezierCurveTo(a + o, r + o * t, l - o, c - o * n, l, c);
}
function Ga(e) {
  this._context = e;
}
Ga.prototype = {
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
        Fi(this, this._t0, to(this, this._t0));
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
          this._point = 3, Fi(this, to(this, n = eo(this, e, t)), n);
          break;
        default:
          Fi(this, this._t0, n = eo(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Rs(e) {
  this._context = new Fs(e);
}
(Rs.prototype = Object.create(Ga.prototype)).point = function(e, t) {
  Ga.prototype.point.call(this, t, e);
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
function Ka(e) {
  return new Ga(e);
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
        for (var a = no(e), r = no(t), l = 0, c = 1; c < n; ++l, ++c)
          this._context.bezierCurveTo(a[0][l], r[0][l], a[1][l], r[1][l], e[c], t[c]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function no(e) {
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
function Ci(e, t) {
  this._context = e, this._t = t;
}
Ci.prototype = {
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
  return new Ci(e, 0.5);
}
function dd(e) {
  return new Ci(e, 0);
}
function fd(e) {
  return new Ci(e, 1);
}
function Fn(e, t) {
  if ((c = e.length) > 1)
    for (var n = 1, a, r, l = e[t[0]], c, o = l.length; n < c; ++n)
      for (r = l, l = e[t[n]], a = 0; a < o; ++a)
        l[a][1] += l[a][0] = isNaN(r[a][1]) ? r[a][0] : r[a][1];
}
function Bn(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function md(e, t) {
  return e[t];
}
function jr() {
  var e = We([]), t = Bn, n = Fn, a = md;
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
    return arguments.length ? (e = typeof l == "function" ? l : We(Jl.call(l)), r) : e;
  }, r.value = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : We(+l), r) : a;
  }, r.order = function(l) {
    return arguments.length ? (t = l == null ? Bn : typeof l == "function" ? l : We(Jl.call(l)), r) : t;
  }, r.offset = function(l) {
    return arguments.length ? (n = l ?? Fn, r) : n;
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
    Fn(e, t);
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
    Fn(e, t);
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
    r[a - 1][1] += r[a - 1][0] = n, Fn(e, t);
  }
}
function xd(e) {
  var t = e.map(vd);
  return Bn(e).sort(function(n, a) {
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
  return Bn(e).sort(function(n, a) {
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
  return Bn(e).reverse();
}
function Qe(e, t) {
  e(t);
}
var ao = {
  ascending: Ws,
  descending: bd,
  insideout: Ed,
  none: Bn,
  reverse: Ad
};
function Ir(e) {
  return e && ao[e] || ao.none;
}
var io = {
  expand: hd,
  diverging: pd,
  none: Fn,
  silhouette: yd,
  wiggle: gd
};
function qr(e) {
  return e && io[e] || io.none;
}
function Td(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, a = t.outerRadius, r = t.cornerRadius, l = t.startAngle, c = t.endAngle, o = t.padAngle, s = t.padRadius, u = Ku();
  return n != null && Qe(u.innerRadius, n), a != null && Qe(u.outerRadius, a), r != null && Qe(u.cornerRadius, r), l != null && Qe(u.startAngle, l), c != null && Qe(u.endAngle, c), o != null && Qe(u.padAngle, o), s != null && Qe(u.padRadius, s), u;
}
function Ur(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.x0, r = t.x1, l = t.y, c = t.y0, o = t.y1, s = t.defined, u = t.curve, d = ju();
  return n && Qe(d.x, n), a && Qe(d.x0, a), r && Qe(d.x1, r), l && Qe(d.y, l), c && Qe(d.y0, c), o && Qe(d.y1, o), s && d.defined(s), u && d.curve(u), d;
}
function kd(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.y, r = t.defined, l = t.curve, c = Cs();
  return n && Qe(c.x, n), a && Qe(c.y, a), r && c.defined(r), l && c.curve(l), c;
}
function Sd(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, a = t.endAngle, r = t.padAngle, l = t.value, c = t.sort, o = t.sortValues, s = Uu();
  return (c === null || c != null) && s.sort(c), (o === null || o != null) && s.sortValues(o), l != null && s.value(l), r != null && Qe(s.padAngle, r), n != null && Qe(s.startAngle, n), a != null && Qe(s.endAngle, a), s;
}
function wd(e) {
  var t = e.keys, n = e.value, a = e.order, r = e.offset, l = jr();
  return t && l.keys(t), n && Qe(l.value, n), a && l.order(Ir(a)), r && l.offset(qr(r)), l;
}
var Cd = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function or() {
  return or = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, or.apply(this, arguments);
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
  var t = e.className, n = e.top, a = e.left, r = e.data, l = r === void 0 ? [] : r, c = e.centroid, o = e.innerRadius, s = o === void 0 ? 0 : o, u = e.outerRadius, d = e.cornerRadius, h = e.startAngle, m = e.endAngle, y = e.padAngle, p = e.padRadius, v = e.pieSort, g = e.pieSortValues, f = e.pieValue, b = e.children, x = e.fill, k = x === void 0 ? "" : x, w = Nd(e, Cd), A = Td({
    innerRadius: s,
    outerRadius: u,
    cornerRadius: d,
    padRadius: p
  }), D = Sd({
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
  })) : /* @__PURE__ */ i.createElement(ve, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, T.map(function(z, $) {
    return /* @__PURE__ */ i.createElement("g", {
      key: "pie-arc-" + $
    }, /* @__PURE__ */ i.createElement("path", or({
      className: Ze("visx-pie-arc", t),
      d: A(z) || "",
      fill: k == null || typeof k == "string" ? k : k(z)
    }, w)), c == null ? void 0 : c(A.centroid(z), z));
  }));
}
var Ld = ["from", "to", "fill", "className", "innerRef"];
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
function Od(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Ie(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, a = e.to, r = a === void 0 ? {
    x: 1,
    y: 1
  } : a, l = e.fill, c = l === void 0 ? "transparent" : l, o = e.className, s = e.innerRef, u = Od(e, Ld), d = n.x === r.x || n.y === r.y;
  return /* @__PURE__ */ i.createElement("line", sr({
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
function Md(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function An(e) {
  var t = e.children, n = e.data, a = n === void 0 ? [] : n, r = e.x, l = e.y, c = e.fill, o = c === void 0 ? "transparent" : c, s = e.className, u = e.curve, d = e.innerRef, h = e.defined, m = h === void 0 ? function() {
    return !0;
  } : h, y = Md(e, _d), p = kd({
    x: r,
    y: l,
    defined: m,
    curve: u
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: p
  })) : /* @__PURE__ */ i.createElement("path", cr({
    ref: d,
    className: Ze("visx-linepath", s),
    d: p(a) || "",
    fill: o,
    strokeLinecap: "round"
  }, y));
}
var Dd = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
  } : d, m = e.className, y = e.curve, p = e.innerRef, v = $d(e, Dd), g = Ur({
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
  })) : /* @__PURE__ */ i.createElement("path", ur({
    ref: p,
    className: Ze("visx-area", m),
    d: g(u) || ""
  }, v));
}
var Rd = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
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
  } : d, m = e.className, y = e.curve, p = e.innerRef, v = e.children, g = Fd(e, Rd), f = Ur({
    x: t,
    x0: n,
    x1: a,
    defined: h,
    curve: y
  });
  return c == null ? f.y0(o.range()[0]) : Qe(f.y0, c), r && !l && Qe(f.y1, r), l && !r && Qe(f.y1, l), v ? /* @__PURE__ */ i.createElement(i.Fragment, null, v({
    path: f
  })) : /* @__PURE__ */ i.createElement("path", dr({
    ref: p,
    className: Ze("visx-area-closed", m),
    d: f(u) || ""
  }, g));
}
var Wd = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
  }), k = Ur({
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
    path: k,
    stack: x
  })) : /* @__PURE__ */ i.createElement(ve, {
    top: n,
    left: a
  }, w.map(function(A, D) {
    return /* @__PURE__ */ i.createElement("path", fr({
      className: Ze("visx-stack", t),
      key: "stack-" + D + "-" + (A.key || ""),
      d: k(A) || "",
      fill: g == null ? void 0 : g(A.key, D)
    }, b));
  }));
}
var Kd = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ei.apply(this, arguments);
}
function jd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Id(e) {
  var t = e.className, n = e.top, a = e.left, r = e.keys, l = e.data, c = e.curve, o = e.defined, s = e.x, u = e.x0, d = e.x1, h = e.y0, m = e.y1, y = e.value, p = e.order, v = e.offset, g = e.color, f = e.children, b = jd(e, Kd);
  return /* @__PURE__ */ i.createElement(Hd, ei({
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
    var k = x.stacks, w = x.path;
    return k.map(function(A, D) {
      return /* @__PURE__ */ i.createElement("path", ei({
        className: Ze("visx-area-stack", t),
        key: "area-stack-" + D + "-" + (A.key || ""),
        d: w(A) || "",
        fill: g == null ? void 0 : g(A.key, D)
      }, b));
    });
  });
}
function Yr(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var qd = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
function Ud(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Hs(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.x0, c = e.x0Scale, o = e.x1Scale, s = e.yScale, u = e.color, d = e.keys, h = e.height, m = e.children, y = Ud(e, qd), p = Yr(o), v = t.map(function(g, f) {
    return {
      index: f,
      x0: c(l(g)),
      bars: d.map(function(b, x) {
        var k = g[b];
        return {
          index: x,
          key: b,
          value: k,
          width: p,
          x: o(b) || 0,
          y: s(k) || 0,
          color: u(b, x),
          height: h - (s(k) || 0)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(v)) : /* @__PURE__ */ i.createElement(ve, {
    className: Ze("visx-bar-group", n),
    top: a,
    left: r
  }, v.map(function(g) {
    return /* @__PURE__ */ i.createElement(ve, {
      key: "bar-group-" + g.index + "-" + g.x0,
      left: g.x0
    }, g.bars.map(function(f) {
      return /* @__PURE__ */ i.createElement(Nt, mr({
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
function js(e) {
  return e == null ? void 0 : e[1];
}
var Yd = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function Xd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Qd(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.x, c = e.y0, o = c === void 0 ? Ks : c, s = e.y1, u = s === void 0 ? js : s, d = e.xScale, h = e.yScale, m = e.color, y = e.keys, p = e.value, v = e.order, g = e.offset, f = e.children, b = Xd(e, Yd), x = jr();
  y && x.keys(y), p && Qe(x.value, p), v && x.order(Ir(v)), g && x.offset(qr(g));
  var k = x(t), w = Yr(d), A = k.map(function(D, T) {
    var z = D.key;
    return {
      index: T,
      key: z,
      bars: D.map(function($, C) {
        var S = (h(o($)) || 0) - (h(u($)) || 0), _ = h(u($)), O = "bandwidth" in d ? d(l($.data)) : Math.max((d(l($.data)) || 0) - w / 2);
        return {
          bar: $,
          key: z,
          index: C,
          height: S,
          width: w,
          x: O || 0,
          y: _ || 0,
          color: m(D.key, C)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ i.createElement(i.Fragment, null, f(A)) : /* @__PURE__ */ i.createElement(ve, {
    className: Ze("visx-bar-stack", n),
    top: a,
    left: r
  }, A.map(function(D) {
    return D.bars.map(function(T) {
      return /* @__PURE__ */ i.createElement(Nt, hr({
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
function Jd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Gd(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.y, c = e.x0, o = c === void 0 ? Ks : c, s = e.x1, u = s === void 0 ? js : s, d = e.xScale, h = e.yScale, m = e.color, y = e.keys, p = e.value, v = e.order, g = e.offset, f = e.children, b = Jd(e, Zd), x = jr();
  y && x.keys(y), p && Qe(x.value, p), v && x.order(Ir(v)), g && x.offset(qr(g));
  var k = x(t), w = Yr(h), A = k.map(function(D, T) {
    var z = D.key;
    return {
      index: T,
      key: z,
      bars: D.map(function($, C) {
        var S = (d(u($)) || 0) - (d(o($)) || 0), _ = d(o($)), O = "bandwidth" in h ? h(l($.data)) : Math.max((h(l($.data)) || 0) - S / 2);
        return {
          bar: $,
          key: z,
          index: C,
          height: w,
          width: S,
          x: _ || 0,
          y: O || 0,
          color: m(D.key, C)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ i.createElement(i.Fragment, null, f(A)) : /* @__PURE__ */ i.createElement(ve, {
    className: Ze("visx-bar-stack-horizontal", n),
    top: a,
    left: r
  }, A.map(function(D) {
    return D.bars.map(function(T) {
      return /* @__PURE__ */ i.createElement(Nt, pr({
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
class ro extends Map {
  constructor(t, n = nf) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [a, r] of t)
        this.set(a, r);
  }
  get(t) {
    return super.get(lo(this, t));
  }
  has(t) {
    return super.has(lo(this, t));
  }
  set(t, n) {
    return super.set(ef(this, t), n);
  }
  delete(t) {
    return super.delete(tf(this, t));
  }
}
function lo({ _intern: e, _key: t }, n) {
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
const oo = Symbol("implicit");
function Xr() {
  var e = new ro(), t = [], n = [], a = oo;
  function r(l) {
    let c = e.get(l);
    if (c === void 0) {
      if (a !== oo)
        return a;
      e.set(l, c = t.push(l) - 1);
    }
    return n[c % n.length];
  }
  return r.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new ro();
    for (const c of l)
      e.has(c) || e.set(c, t.push(c) - 1);
    return r;
  }, r.range = function(l) {
    return arguments.length ? (n = Array.from(l), r) : n.slice();
  }, r.unknown = function(l) {
    return arguments.length ? (a = l, r) : a;
  }, r.copy = function() {
    return Xr(t, n).unknown(a);
  }, ki.apply(r, arguments), r;
}
function Qr() {
  var e = Xr().unknown(void 0), t = e.domain, n = e.range, a = 0, r = 1, l, c, o = !1, s = 0, u = 0, d = 0.5;
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
    return Qr(t(), [a, r]).round(o).paddingInner(s).paddingOuter(u).align(d);
  }, ki.apply(h(), arguments);
}
function Is(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Is(t());
  }, e;
}
function rf() {
  return Is(Qr.apply(null, arguments).paddingInner(1));
}
function qs(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, r = e[n], l = e[a], c;
  return l < r && (c = n, n = a, a = c, c = r, r = l, l = c), e[n] = t.floor(r), e[a] = t.ceil(l), e;
}
function so(e) {
  return Math.log(e);
}
function co(e) {
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
function uo(e) {
  return (t, n) => -e(-t, n);
}
function df(e) {
  const t = e(so, co), n = t.domain;
  let a = 10, r, l;
  function c() {
    return r = uf(a), l = cf(a), n()[0] < 0 ? (r = uo(r), l = uo(l), e(lf, of)) : e(so, co), t;
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
  return e.copy = () => ps(e, Us()).base(e.base()), ki.apply(e, arguments), e;
}
const ti = bs(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ti.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? bs((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : ti);
ti.range;
function ff(e, t, n, a, r, l) {
  const c = [
    [na, 1, Na],
    [na, 5, 5 * Na],
    [na, 15, 15 * Na],
    [na, 30, 30 * Na],
    [l, 1, Pa],
    [l, 5, 5 * Pa],
    [l, 15, 15 * Pa],
    [l, 30, 30 * Pa],
    [r, 1, La],
    [r, 3, 3 * La],
    [r, 6, 6 * La],
    [r, 12, 12 * La],
    [a, 1, ql],
    [a, 2, 2 * ql],
    [n, 1, Cu],
    [t, 1, Ul],
    [t, 3, 3 * Ul],
    [e, 1, zi]
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
      return e.every(Il(u / zi, d / zi, h));
    if (y === 0)
      return ti.every(Math.max(Il(u, d, h), 1));
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
  var d = ku(), h = d.invert, m = d.domain, y = u(".%L"), p = u(":%S"), v = u("%I:%M"), g = u("%I %p"), f = u("%a %d"), b = u("%b %d"), x = u("%B"), k = u("%Y");
  function w(A) {
    return (s(A) < A ? y : o(A) < A ? p : c(A) < A ? v : l(A) < A ? g : a(A) < A ? r(A) < A ? f : b : n(A) < A ? x : k)(A);
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
  return ki.apply(Ys(mf, hf, Es, xs, Ts, As, gs, ys, na, yu).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var xf = ba("domain", "range", "reverse", "align", "padding", "round");
function fo(e) {
  return xf(Qr(), e);
}
var vf = ba("domain", "range", "reverse", "align", "padding", "round");
function Mn(e) {
  return vf(rf(), e);
}
var bf = ba("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function Ef(e) {
  return bf(gf(), e);
}
var Af = ba("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Xs(e) {
  return Af(Us(), e);
}
var Tf = ba("domain", "range", "reverse", "unknown");
function kf(e) {
  return Tf(Xr(), e);
}
function Sf(e) {
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
function mo(e) {
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
function ia(e, t) {
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
function ra(e, t) {
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
    for (Xn(e, n, t), r(e[a], l) > 0 && Xn(e, n, a); c < o; ) {
      for (Xn(e, c, o), ++c, --o; r(e[c], l) < 0; )
        ++c;
      for (; r(e[o], l) > 0; )
        --o;
    }
    r(e[n], l) === 0 ? Xn(e, n, o) : (++o, Xn(e, o, a)), o <= t && (n = o + 1), t <= o && (a = o - 1);
  }
  return e;
}
function Xn(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function _f(e, t, n) {
  if (e = Float64Array.from(Pf(e, n)), !!(a = e.length)) {
    if ((t = +t) <= 0 || a < 2)
      return ra(e);
    if (t >= 1)
      return ia(e);
    var a, r = (a - 1) * t, l = Math.floor(r), c = ia(Zs(e, l).subarray(0, l + 1)), o = ra(e.subarray(l + 1));
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
var gn = [], $f = function() {
  return gn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, zf = function() {
  return gn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, ho = "ResizeObserver loop completed with undelivered notifications.", Rf = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: ho
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = ho), window.dispatchEvent(e);
}, pa;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(pa || (pa = {}));
var xn = function(e) {
  return Object.freeze(e);
}, Js = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, xn(this);
  }
  return e;
}(), Gs = function() {
  function e(t, n, a, r) {
    return this.x = t, this.y = n, this.width = a, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, xn(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, r = t.top, l = t.right, c = t.bottom, o = t.left, s = t.width, u = t.height;
    return { x: n, y: a, top: r, right: l, bottom: c, left: o, width: s, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Zr = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, ec = function(e) {
  if (Zr(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var r = e, l = r.offsetWidth, c = r.offsetHeight;
  return !(l || c || e.getClientRects().length);
}, po = function(e) {
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
}, la = typeof window < "u" ? window : {}, _a = /* @__PURE__ */ new WeakMap(), yo = /auto|scroll/, Bf = /^tb|vertical/, Wf = /msie|trident/i.test(la.navigator && la.navigator.userAgent), Bt = function(e) {
  return parseFloat(e || "0");
}, $n = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Js((n ? t : e) || 0, (n ? e : t) || 0);
}, go = xn({
  devicePixelContentBoxSize: $n(),
  borderBoxSize: $n(),
  contentBoxSize: $n(),
  contentRect: new Gs(0, 0, 0, 0)
}), tc = function(e, t) {
  if (t === void 0 && (t = !1), _a.has(e) && !t)
    return _a.get(e);
  if (ec(e))
    return _a.set(e, go), go;
  var n = getComputedStyle(e), a = Zr(e) && e.ownerSVGElement && e.getBBox(), r = !Wf && n.boxSizing === "border-box", l = Bf.test(n.writingMode || ""), c = !a && yo.test(n.overflowY || ""), o = !a && yo.test(n.overflowX || ""), s = a ? 0 : Bt(n.paddingTop), u = a ? 0 : Bt(n.paddingRight), d = a ? 0 : Bt(n.paddingBottom), h = a ? 0 : Bt(n.paddingLeft), m = a ? 0 : Bt(n.borderTopWidth), y = a ? 0 : Bt(n.borderRightWidth), p = a ? 0 : Bt(n.borderBottomWidth), v = a ? 0 : Bt(n.borderLeftWidth), g = h + u, f = s + d, b = v + y, x = m + p, k = o ? e.offsetHeight - x - e.clientHeight : 0, w = c ? e.offsetWidth - b - e.clientWidth : 0, A = r ? g + b : 0, D = r ? f + x : 0, T = a ? a.width : Bt(n.width) - A - w, z = a ? a.height : Bt(n.height) - D - k, $ = T + g + w + b, C = z + f + k + x, S = xn({
    devicePixelContentBoxSize: $n(Math.round(T * devicePixelRatio), Math.round(z * devicePixelRatio), l),
    borderBoxSize: $n($, C, l),
    contentBoxSize: $n(T, z, l),
    contentRect: new Gs(h, s, T, z)
  });
  return _a.set(e, S), S;
}, nc = function(e, t, n) {
  var a = tc(e, n), r = a.borderBoxSize, l = a.contentBoxSize, c = a.devicePixelContentBoxSize;
  switch (t) {
    case pa.DEVICE_PIXEL_CONTENT_BOX:
      return c;
    case pa.BORDER_BOX:
      return r;
    default:
      return l;
  }
}, ac = function() {
  function e(t) {
    var n = tc(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = xn([n.borderBoxSize]), this.contentBoxSize = xn([n.contentBoxSize]), this.devicePixelContentBoxSize = xn([n.devicePixelContentBoxSize]);
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
  gn.forEach(function(c) {
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
}, xo = function(e) {
  gn.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(r) {
      r.isActive() && (ic(r.target) > e ? n.activeTargets.push(r) : n.skippedTargets.push(r));
    });
  });
}, Hf = function() {
  var e = 0;
  for (xo(e); $f(); )
    e = Vf(), xo(e);
  return zf() && Rf(), e > 0;
}, Bi, rc = [], Kf = function() {
  return rc.splice(0).forEach(function(e) {
    return e();
  });
}, jf = function(e) {
  if (!Bi) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return Kf();
    }).observe(n, a), Bi = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  rc.push(e), Bi();
}, If = function(e) {
  jf(function() {
    requestAnimationFrame(e);
  });
}, ja = 0, qf = function() {
  return !!ja;
}, Uf = 250, Yf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, vo = [
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
], bo = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Wi = !1, Xf = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = Uf), !Wi) {
      Wi = !0;
      var a = bo(t);
      If(function() {
        var r = !1;
        try {
          r = Hf();
        } finally {
          if (Wi = !1, t = a - bo(), !qf())
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
    document.body ? n() : la.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), vo.forEach(function(n) {
      return la.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), vo.forEach(function(n) {
      return la.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), yr = new Xf(), Eo = function(e) {
  !ja && e > 0 && yr.start(), ja += e, !ja && yr.stop();
}, Qf = function(e) {
  return !Zr(e) && !Ff(e) && getComputedStyle(e).display === "inline";
}, Zf = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || pa.CONTENT_BOX, this.lastReportedSize = {
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
}(), Ma = /* @__PURE__ */ new WeakMap(), Ao = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, Da = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new Jf(t, n);
    Ma.set(t, a);
  }, e.observe = function(t, n, a) {
    var r = Ma.get(t), l = r.observationTargets.length === 0;
    Ao(r.observationTargets, n) < 0 && (l && gn.push(r), r.observationTargets.push(new Zf(n, a && a.box)), Eo(1), yr.schedule());
  }, e.unobserve = function(t, n) {
    var a = Ma.get(t), r = Ao(a.observationTargets, n), l = a.observationTargets.length === 1;
    r >= 0 && (l && gn.splice(gn.indexOf(a), 1), a.observationTargets.splice(r, 1), Eo(-1));
  }, e.disconnect = function(t) {
    var n = this, a = Ma.get(t);
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
    Da.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!po(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Da.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!po(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Da.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Da.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const em = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: Gf,
  ResizeObserverEntry: ac,
  ResizeObserverSize: Js
}, Symbol.toStringTag, { value: "Module" })), tm = /* @__PURE__ */ Br(em);
var nm = sc, Zt = oc(ms), am = oc(fu), Nn = lm(R), im = tm, rm = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
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
  } : o, u = e.enableDebounceLeadingCall, d = u === void 0 ? !0 : u, h = om(e, rm), m = (0, Nn.useRef)(null), y = (0, Nn.useRef)(0), p = (0, Nn.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), v = p[0], g = p[1], f = (0, Nn.useMemo)(function() {
    var b = Array.isArray(c) ? c : [c];
    return (0, am.default)(function(x) {
      g(function(k) {
        var w = Object.keys(k), A = w.filter(function(T) {
          return k[T] !== x[T];
        }), D = A.every(function(T) {
          return b.includes(T);
        });
        return D ? k : x;
      });
    }, r, {
      leading: d
    });
  }, [r, d, c]);
  return (0, Nn.useEffect)(function() {
    var b = new im.ResizeObserver(function(x) {
      x === void 0 && (x = []), x.forEach(function(k) {
        var w = k.contentRect, A = w.left, D = w.top, T = w.width, z = w.height;
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
  }, [f]), /* @__PURE__ */ Nn.default.createElement("div", ni({
    style: s,
    ref: m,
    className: t
  }, h), n(ni({}, v, {
    ref: m.current,
    resize: f
  })));
}
sc.propTypes = {
  className: Zt.default.string,
  debounceTime: Zt.default.number,
  enableDebounceLeadingCall: Zt.default.bool,
  ignoreDimensions: Zt.default.oneOfType([Zt.default.any, Zt.default.arrayOf(Zt.default.any)]),
  children: Zt.default.func.isRequired
};
var Vi = /* @__PURE__ */ new Date(), Hi = /* @__PURE__ */ new Date();
function Qt(e, t, n, a) {
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
    return Qt(function(c) {
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
    return Vi.setTime(+l), Hi.setTime(+c), e(Vi), e(Hi), Math.floor(n(Vi, Hi));
  }, r.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? r.filter(a ? function(c) {
      return a(c) % l === 0;
    } : function(c) {
      return r.count(0, c) % l === 0;
    }) : r;
  }), r;
}
const cm = 1e3, Jr = cm * 60, um = Jr * 60, Gr = um * 24, cc = Gr * 7;
var uc = Qt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Jr) / Gr,
  (e) => e.getDate() - 1
);
const dc = uc;
uc.range;
function Tn(e) {
  return Qt(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Jr) / cc;
  });
}
var fc = Tn(0), ai = Tn(1), dm = Tn(2), fm = Tn(3), Wn = Tn(4), mm = Tn(5), hm = Tn(6);
fc.range;
ai.range;
dm.range;
fm.range;
Wn.range;
mm.range;
hm.range;
var el = Qt(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
el.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Qt(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const ya = el;
el.range;
var mc = Qt(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Gr;
}, function(e) {
  return e.getUTCDate() - 1;
});
const hc = mc;
mc.range;
function kn(e) {
  return Qt(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / cc;
  });
}
var pc = kn(0), ii = kn(1), pm = kn(2), ym = kn(3), Vn = kn(4), gm = kn(5), xm = kn(6);
pc.range;
ii.range;
pm.range;
ym.range;
Vn.range;
gm.range;
xm.range;
var tl = Qt(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
tl.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Qt(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const ga = tl;
tl.range;
function Ki(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ji(e) {
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
  var t = e.dateTime, n = e.date, a = e.time, r = e.periods, l = e.days, c = e.shortDays, o = e.months, s = e.shortMonths, u = Zn(r), d = Jn(r), h = Zn(l), m = Jn(l), y = Zn(c), p = Jn(c), v = Zn(o), g = Jn(o), f = Zn(s), b = Jn(s), x = {
    a: V,
    A: q,
    b: I,
    B: j,
    c: null,
    d: No,
    e: No,
    f: Hm,
    g: Jm,
    G: eh,
    H: Bm,
    I: Wm,
    j: Vm,
    L: yc,
    m: Km,
    M: jm,
    p: J,
    q: U,
    Q: Oo,
    s: _o,
    S: Im,
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
    "%": Lo
  }, k = {
    a: ce,
    A: de,
    b: fe,
    B: ke,
    c: null,
    d: Po,
    e: Po,
    f: rh,
    g: ph,
    G: gh,
    H: nh,
    I: ah,
    j: ih,
    L: xc,
    m: lh,
    M: oh,
    p: we,
    q: Ce,
    Q: Oo,
    s: _o,
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
    "%": Lo
  }, w = {
    a: $,
    A: C,
    b: S,
    B: _,
    c: O,
    d: wo,
    e: wo,
    f: $m,
    g: So,
    G: ko,
    H: Co,
    I: Co,
    j: Om,
    L: Dm,
    m: Lm,
    M: _m,
    p: z,
    q: Pm,
    Q: Rm,
    s: Fm,
    S: Mm,
    u: km,
    U: Sm,
    V: wm,
    w: Tm,
    W: Cm,
    x: N,
    X: P,
    y: So,
    Y: ko,
    Z: Nm,
    "%": zm
  };
  x.x = A(n, x), x.X = A(a, x), x.c = A(t, x), k.x = A(n, k), k.X = A(a, k), k.c = A(t, k);
  function A(G, K) {
    return function(ee) {
      var F = [], pe = -1, ne = 0, me = G.length, le, ue, Le;
      for (ee instanceof Date || (ee = /* @__PURE__ */ new Date(+ee)); ++pe < me; )
        G.charCodeAt(pe) === 37 && (F.push(G.slice(ne, pe)), (ue = To[le = G.charAt(++pe)]) != null ? le = G.charAt(++pe) : ue = le === "e" ? " " : "0", (Le = K[le]) && (le = Le(ee, ue)), F.push(le), ne = pe + 1);
      return F.push(G.slice(ne, pe)), F.join("");
    };
  }
  function D(G, K) {
    return function(ee) {
      var F = Qn(1900, void 0, 1), pe = T(F, G, ee += "", 0), ne, me;
      if (pe != ee.length)
        return null;
      if ("Q" in F)
        return new Date(F.Q);
      if ("s" in F)
        return new Date(F.s * 1e3 + ("L" in F ? F.L : 0));
      if (K && !("Z" in F) && (F.Z = 0), "p" in F && (F.H = F.H % 12 + F.p * 12), F.m === void 0 && (F.m = "q" in F ? F.q : 0), "V" in F) {
        if (F.V < 1 || F.V > 53)
          return null;
        "w" in F || (F.w = 1), "Z" in F ? (ne = ji(Qn(F.y, 0, 1)), me = ne.getUTCDay(), ne = me > 4 || me === 0 ? ii.ceil(ne) : ii(ne), ne = hc.offset(ne, (F.V - 1) * 7), F.y = ne.getUTCFullYear(), F.m = ne.getUTCMonth(), F.d = ne.getUTCDate() + (F.w + 6) % 7) : (ne = Ki(Qn(F.y, 0, 1)), me = ne.getDay(), ne = me > 4 || me === 0 ? ai.ceil(ne) : ai(ne), ne = dc.offset(ne, (F.V - 1) * 7), F.y = ne.getFullYear(), F.m = ne.getMonth(), F.d = ne.getDate() + (F.w + 6) % 7);
      } else
        ("W" in F || "U" in F) && ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0), me = "Z" in F ? ji(Qn(F.y, 0, 1)).getUTCDay() : Ki(Qn(F.y, 0, 1)).getDay(), F.m = 0, F.d = "W" in F ? (F.w + 6) % 7 + F.W * 7 - (me + 5) % 7 : F.w + F.U * 7 - (me + 6) % 7);
      return "Z" in F ? (F.H += F.Z / 100 | 0, F.M += F.Z % 100, ji(F)) : Ki(F);
    };
  }
  function T(G, K, ee, F) {
    for (var pe = 0, ne = K.length, me = ee.length, le, ue; pe < ne; ) {
      if (F >= me)
        return -1;
      if (le = K.charCodeAt(pe++), le === 37) {
        if (le = K.charAt(pe++), ue = w[le in To ? K.charAt(pe++) : le], !ue || (F = ue(G, ee, F)) < 0)
          return -1;
      } else if (le != ee.charCodeAt(F++))
        return -1;
    }
    return F;
  }
  function z(G, K, ee) {
    var F = u.exec(K.slice(ee));
    return F ? (G.p = d.get(F[0].toLowerCase()), ee + F[0].length) : -1;
  }
  function $(G, K, ee) {
    var F = y.exec(K.slice(ee));
    return F ? (G.w = p.get(F[0].toLowerCase()), ee + F[0].length) : -1;
  }
  function C(G, K, ee) {
    var F = h.exec(K.slice(ee));
    return F ? (G.w = m.get(F[0].toLowerCase()), ee + F[0].length) : -1;
  }
  function S(G, K, ee) {
    var F = f.exec(K.slice(ee));
    return F ? (G.m = b.get(F[0].toLowerCase()), ee + F[0].length) : -1;
  }
  function _(G, K, ee) {
    var F = v.exec(K.slice(ee));
    return F ? (G.m = g.get(F[0].toLowerCase()), ee + F[0].length) : -1;
  }
  function O(G, K, ee) {
    return T(G, t, K, ee);
  }
  function N(G, K, ee) {
    return T(G, n, K, ee);
  }
  function P(G, K, ee) {
    return T(G, a, K, ee);
  }
  function V(G) {
    return c[G.getDay()];
  }
  function q(G) {
    return l[G.getDay()];
  }
  function I(G) {
    return s[G.getMonth()];
  }
  function j(G) {
    return o[G.getMonth()];
  }
  function J(G) {
    return r[+(G.getHours() >= 12)];
  }
  function U(G) {
    return 1 + ~~(G.getMonth() / 3);
  }
  function ce(G) {
    return c[G.getUTCDay()];
  }
  function de(G) {
    return l[G.getUTCDay()];
  }
  function fe(G) {
    return s[G.getUTCMonth()];
  }
  function ke(G) {
    return o[G.getUTCMonth()];
  }
  function we(G) {
    return r[+(G.getUTCHours() >= 12)];
  }
  function Ce(G) {
    return 1 + ~~(G.getUTCMonth() / 3);
  }
  return {
    format: function(G) {
      var K = A(G += "", x);
      return K.toString = function() {
        return G;
      }, K;
    },
    parse: function(G) {
      var K = D(G += "", !1);
      return K.toString = function() {
        return G;
      }, K;
    },
    utcFormat: function(G) {
      var K = A(G += "", k);
      return K.toString = function() {
        return G;
      }, K;
    },
    utcParse: function(G) {
      var K = D(G += "", !0);
      return K.toString = function() {
        return G;
      }, K;
    }
  };
}
var To = { "-": "", _: " ", 0: "0" }, ut = /^\s*\d+/, bm = /^%/, Em = /[\\^$*+?|[\]().{}]/g;
function Ve(e, t, n) {
  var a = e < 0 ? "-" : "", r = (a ? -e : e) + "", l = r.length;
  return a + (l < n ? new Array(n - l + 1).join(t) + r : r);
}
function Am(e) {
  return e.replace(Em, "\\$&");
}
function Zn(e) {
  return new RegExp("^(?:" + e.map(Am).join("|") + ")", "i");
}
function Jn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Tm(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function km(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Sm(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function wm(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Cm(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function ko(e, t, n) {
  var a = ut.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function So(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Nm(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Pm(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Lm(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function wo(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Om(e, t, n) {
  var a = ut.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Co(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function _m(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Mm(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Dm(e, t, n) {
  var a = ut.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function $m(e, t, n) {
  var a = ut.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function zm(e, t, n) {
  var a = bm.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Rm(e, t, n) {
  var a = ut.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Fm(e, t, n) {
  var a = ut.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function No(e, t) {
  return Ve(e.getDate(), t, 2);
}
function Bm(e, t) {
  return Ve(e.getHours(), t, 2);
}
function Wm(e, t) {
  return Ve(e.getHours() % 12 || 12, t, 2);
}
function Vm(e, t) {
  return Ve(1 + dc.count(ya(e), e), t, 3);
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
function jm(e, t) {
  return Ve(e.getMinutes(), t, 2);
}
function Im(e, t) {
  return Ve(e.getSeconds(), t, 2);
}
function qm(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Um(e, t) {
  return Ve(fc.count(ya(e) - 1, e), t, 2);
}
function gc(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Wn(e) : Wn.ceil(e);
}
function Ym(e, t) {
  return e = gc(e), Ve(Wn.count(ya(e), e) + (ya(e).getDay() === 4), t, 2);
}
function Xm(e) {
  return e.getDay();
}
function Qm(e, t) {
  return Ve(ai.count(ya(e) - 1, e), t, 2);
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
  return e = n >= 4 || n === 0 ? Wn(e) : Wn.ceil(e), Ve(e.getFullYear() % 1e4, t, 4);
}
function th(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ve(t / 60 | 0, "0", 2) + Ve(t % 60, "0", 2);
}
function Po(e, t) {
  return Ve(e.getUTCDate(), t, 2);
}
function nh(e, t) {
  return Ve(e.getUTCHours(), t, 2);
}
function ah(e, t) {
  return Ve(e.getUTCHours() % 12 || 12, t, 2);
}
function ih(e, t) {
  return Ve(1 + hc.count(ga(e), e), t, 3);
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
  return Ve(pc.count(ga(e) - 1, e), t, 2);
}
function vc(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Vn(e) : Vn.ceil(e);
}
function dh(e, t) {
  return e = vc(e), Ve(Vn.count(ga(e), e) + (ga(e).getUTCDay() === 4), t, 2);
}
function fh(e) {
  return e.getUTCDay();
}
function mh(e, t) {
  return Ve(ii.count(ga(e) - 1, e), t, 2);
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
  return e = n >= 4 || n === 0 ? Vn(e) : Vn.ceil(e), Ve(e.getUTCFullYear() % 1e4, t, 4);
}
function xh() {
  return "+0000";
}
function Lo() {
  return "%";
}
function Oo(e) {
  return +e;
}
function _o(e) {
  return Math.floor(+e / 1e3);
}
var Pn, bc, Ec;
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
  return Pn = vm(e), bc = Pn.format, Ec = Pn.parse, Pn.utcFormat, Pn.utcParse, Pn;
}
const Re = R.createContext({}), Be = {
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
function un(e, t) {
  return Be.und(e) || Be.nul(e) ? t : e;
}
function Dn(e) {
  return Be.und(e) ? [] : Be.arr(e) ? e : [e];
}
function _t(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return Be.fun(e) ? e(...n) : e;
}
function Eh(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Kt(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Ii(e) {
  const t = Eh(e);
  if (Be.und(t))
    return qe({
      to: t
    }, e);
  const n = Object.keys(e).reduce((a, r) => Be.und(t[r]) ? qe({}, a, {
    [r]: e[r]
  }) : a, {});
  return qe({
    to: t
  }, n);
}
function Ah(e, t) {
  return t && (Be.fun(t) ? t(e) : Be.obj(t) && (t.current = e)), e;
}
class Mt {
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
class gr extends Mt {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Mt && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Mt && t.removeChild(this));
  }
}
class Tc extends Mt {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Mt && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Mt && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const n = {};
    for (const a in this.payload) {
      const r = this.payload[a];
      t && !(r instanceof Mt) || (n[a] = r instanceof Mt ? r[t ? "getAnimatedValue" : "getValue"]() : r);
    }
    return n;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let nl;
function Th(e, t) {
  nl = {
    fn: e,
    transform: t
  };
}
let kc;
function kh(e) {
  kc = e;
}
let Sc = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, ri;
function Sh(e) {
  ri = e;
}
let wc = () => Date.now(), wh = (e) => e.current, Cc;
function Ch(e) {
  Cc = e;
}
class Nh extends Tc {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? qe({}, t, {
      style: Cc(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const Ph = (e) => Be.fun(e) && !(e.prototype instanceof i.Component), Lh = (e) => R.forwardRef((n, a) => {
  const r = Ac(), l = R.useRef(!0), c = R.useRef(null), o = R.useRef(null), s = R.useCallback((m) => {
    const y = c.current, p = () => {
      let v = !1;
      o.current && (v = nl.fn(o.current, c.current.getAnimatedValue())), (!o.current || v === !1) && r();
    };
    c.current = new Nh(m, p), y && y.detach();
  }, []);
  R.useEffect(() => () => {
    l.current = !1, c.current && c.current.detach();
  }, []), R.useImperativeHandle(a, () => wh(o)), s(n);
  const u = c.current.getValue();
  u.scrollTop, u.scrollLeft;
  const d = Kt(u, ["scrollTop", "scrollLeft"]), h = Ph(e) ? void 0 : (m) => o.current = Ah(m, a);
  return i.createElement(e, qe({}, d, {
    ref: h
  }));
});
let oa = !1;
const vn = /* @__PURE__ */ new Set(), Nc = () => {
  if (!oa)
    return !1;
  let e = wc();
  for (let t of vn) {
    let n = !1;
    for (let a = 0; a < t.configs.length; a++) {
      let r = t.configs[a], l, c;
      for (let o = 0; o < r.animatedValues.length; o++) {
        let s = r.animatedValues[o];
        if (s.done)
          continue;
        let u = r.fromValues[o], d = r.toValues[o], h = s.lastPosition, m = d instanceof Mt, y = Array.isArray(r.initialVelocity) ? r.initialVelocity[o] : r.initialVelocity;
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
            let x = -r.tension * (h - d), k = -r.friction * y, w = (x + k) / r.mass;
            y = y + w * 1 / 1e3, h = h + y * 1 / 1e3;
          }
          let v = r.clamp && r.tension !== 0 ? u < d ? h > d : h < d : !1, g = Math.abs(y) <= r.precision, f = r.tension !== 0 ? Math.abs(d - h) <= r.precision : !0;
          l = v || g && f, s.lastVelocity = y, s.lastTime = e;
        }
        m && !r.toValues[o].done && (l = !1), l ? (s.value !== d && (h = d), s.done = !0) : n = !0, s.setValue(h), s.lastPosition = h;
      }
      t.props.onFrame && (t.values[r.name] = r.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (vn.delete(t), t.stop(!0));
  }
  return vn.size ? Sc(Nc) : oa = !1, oa;
}, Oh = (e) => {
  vn.has(e) || vn.add(e), oa || (oa = !0, Sc(Nc));
}, _h = (e) => {
  vn.has(e) && vn.delete(e);
};
function li(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return li({
      range: e,
      output: t,
      extrapolate: n
    });
  if (ri && typeof e.output[0] == "string")
    return ri(e);
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
class Hn extends gr {
  constructor(t, n, a, r) {
    super(), this.calc = void 0, this.payload = t instanceof gr && !(t instanceof Hn) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = li(n, a, r);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, a) {
    this.calc = li(t, n, a);
  }
  interpolate(t, n, a) {
    return new Hn(this, t, n, a);
  }
}
const $h = (e, t, n) => e && new Hn(e, t, n);
function Pc(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => Pc(n, t));
}
class xr extends Mt {
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
    return new Hn(this, t, n, a);
  }
}
class zh extends gr {
  constructor(t) {
    super(), this.payload = t.map((n) => new xr(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((a, r) => this.payload[r].setValue(a, n)) : this.payload.forEach((a) => a.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new Hn(this, t, n);
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
    const n = Ii(t), a = n.delay, r = a === void 0 ? 0 : a, l = n.to, c = Kt(n, ["delay", "to"]);
    if (Be.arr(l) || Be.fun(l))
      this.queue.push(qe({}, c, {
        delay: r,
        to: l
      }));
    else if (l) {
      let o = {};
      Object.entries(l).forEach((s) => {
        let u = s[0], d = s[1];
        const h = qe({
          to: {
            [u]: d
          },
          delay: _t(r, u)
        }, c), m = o[h.delay] && o[h.delay].to;
        o[h.delay] = qe({}, o[h.delay], h, {
          to: qe({}, m, h.to)
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
        Be.obj(c) && (this.merged = qe({}, c, this.merged)), Be.obj(s) && (this.merged = qe({}, this.merged, s));
      });
      const n = this.local = ++this.guid, a = this.localQueue = this.queue;
      this.queue = [], a.forEach((r, l) => {
        let c = r.delay, o = Kt(r, ["delay"]);
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
    let r = Kt(t, ["delay"]);
    const l = this.local;
    let c = Promise.resolve(void 0);
    if (Be.arr(r.to))
      for (let o = 0; o < r.to.length; o++) {
        const s = o, u = qe({}, r, Ii(r.to[s]));
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
          const d = qe({}, r, Ii(u));
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
    this.props = qe({}, this.props, t);
    let n = this.props, a = n.from, r = a === void 0 ? {} : a, l = n.to, c = l === void 0 ? {} : l, o = n.config, s = o === void 0 ? {} : o, u = n.reverse, d = n.attach, h = n.reset, m = n.immediate;
    if (u) {
      var y = [c, r];
      r = y[0], c = y[1];
    }
    this.merged = qe({}, r, this.merged, c), this.hasChanged = !1;
    let p = d && d(this);
    if (this.animations = Object.entries(this.merged).reduce((v, g) => {
      let f = g[0], b = g[1], x = v[f] || {};
      const k = Be.num(b), w = Be.str(b) && !b.startsWith("#") && !/\d/.test(b) && !kc[b], A = Be.arr(b), D = !k && !A && !w;
      let T = Be.und(r[f]) ? b : r[f], z = k || A || w ? b : 1, $ = _t(s, f);
      p && (z = p.animations[f].parent);
      let C = x.parent, S = x.interpolation, _ = Dn(p ? z.getPayload() : z), O, N = b;
      D && (N = ri({
        range: [0, 1],
        output: [b, b]
      })(1));
      let P = S && S.getValue();
      const q = !Be.und(C) && x.animatedValues.some((U) => !U.done), I = !Be.equ(N, P), j = !Be.equ(N, x.previous), J = !Be.equ($, x.config);
      if (h || j && I || J) {
        if (k || w)
          C = S = x.parent || new xr(T);
        else if (A)
          C = S = x.parent || new zh(T);
        else if (D) {
          let U = x.interpolation && x.interpolation.calc(x.parent.value);
          U = U !== void 0 && !h ? U : T, x.parent ? (C = x.parent, C.setValue(0, !1)) : C = new xr(0);
          const ce = {
            output: [U, b]
          };
          x.interpolation ? (S = x.interpolation, x.interpolation.updateConfig(ce)) : S = C.interpolate(ce);
        }
        return _ = Dn(p ? z.getPayload() : z), O = Dn(C.getPayload()), h && !D && C.setValue(T, !1), this.hasChanged = !0, O.forEach((U) => {
          U.startPosition = U.value, U.lastPosition = U.value, U.lastVelocity = q ? U.lastVelocity : void 0, U.lastTime = q ? U.lastTime : void 0, U.startTime = wc(), U.done = !1, U.animatedStyles.clear();
        }), _t(m, f) && C.setValue(D ? z : b, !1), qe({}, v, {
          [f]: qe({}, x, {
            name: f,
            parent: C,
            interpolation: S,
            animatedValues: O,
            toValues: _,
            previous: N,
            config: $,
            fromValues: Dn(C.getValue()),
            immediate: _t(m, f),
            initialVelocity: un($.velocity, 0),
            clamp: un($.clamp, !1),
            precision: un($.precision, 0.01),
            tension: un($.tension, 170),
            friction: un($.friction, 26),
            mass: un($.mass, 1),
            duration: $.duration,
            easing: un($.easing, (U) => U),
            decay: $.decay
          })
        });
      } else
        return I ? v : (D && (C.setValue(1, !1), S.updateConfig({
          output: [N, N]
        })), C.done = !0, this.hasChanged = !0, qe({}, v, {
          [f]: qe({}, v[f], {
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
const Ia = "enter", qi = "leave", Ui = "update", Wh = (e, t) => (typeof t == "function" ? e.map(t) : Dn(t)).map(String), vr = (e) => {
  let t = e.items, n = e.keys, a = n === void 0 ? (l) => l : n, r = Kt(e, ["items", "keys"]);
  return t = Dn(t !== void 0 ? t : null), qe({
    items: t,
    keys: Wh(t, a)
  }, r);
};
function Vh(e, t, n) {
  const a = qe({
    items: e,
    keys: t || ((b) => b)
  }, n), r = vr(a), l = r.lazy, c = l === void 0 ? !1 : l;
  r.unique;
  const o = r.reset, s = o === void 0 ? !1 : o;
  r.enter, r.leave, r.update;
  const u = r.onDestroyed;
  r.keys, r.items;
  const d = r.onFrame, h = r.onRest, m = r.onStart, y = r.ref, p = Kt(r, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), v = Ac(), g = R.useRef(!1), f = R.useRef({
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
      return new Promise((k) => x.start(k));
    })),
    stop: (b) => Array.from(f.current.instances).forEach((x) => x[1].stop(b)),
    get controllers() {
      return Array.from(f.current.instances).map((b) => b[1]);
    }
  })), f.current = Hh(f.current, a), f.current.changed && f.current.transitions.forEach((b) => {
    const x = b.slot, k = b.from, w = b.to, A = b.config, D = b.trail, T = b.key, z = b.item;
    f.current.instances.has(T) || f.current.instances.set(T, new Fh());
    const $ = f.current.instances.get(T), C = qe({}, p, {
      to: w,
      from: k,
      config: A,
      ref: y,
      onRest: (S) => {
        f.current.mounted && (b.destroyed && (!y && !c && Mo(f, T), u && u(z)), !Array.from(f.current.instances).some((N) => !N[1].idle) && (y || c) && f.current.deleted.length > 0 && Mo(f), h && h(z, x, S));
      },
      onStart: m && (() => m(z, x)),
      onFrame: d && ((S) => d(z, x, S)),
      delay: D,
      reset: s && x === Ia
      // Update controller
    });
    $.update(C), f.current.paused || $.start();
  }), R.useEffect(() => (f.current.mounted = g.current = !0, () => {
    f.current.mounted = g.current = !1, Array.from(f.current.instances).map((b) => b[1].destroy()), f.current.instances.clear();
  }), []), f.current.transitions.map((b) => {
    let x = b.item, k = b.slot, w = b.key;
    return {
      item: x,
      key: w,
      state: k,
      props: f.current.instances.get(w).getValues()
    };
  });
}
function Mo(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let r = a.key;
    const l = (c) => c.key !== r;
    (Be.und(t) || t === r) && (e.current.instances.delete(r), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function Hh(e, t) {
  let n = e.first, a = e.prevProps, r = Kt(e, ["first", "prevProps"]), l = vr(t), c = l.items, o = l.keys, s = l.initial, u = l.from, d = l.enter, h = l.leave, m = l.update, y = l.trail, p = y === void 0 ? 0 : y, v = l.unique, g = l.config, f = l.order, b = f === void 0 ? [Ia, qi, Ui] : f, x = vr(a), k = x.keys, w = x.items, A = qe({}, r.current), D = [...r.deleted], T = Object.keys(A), z = new Set(T), $ = new Set(o), C = o.filter((P) => !z.has(P)), S = r.transitions.filter((P) => !P.destroyed && !$.has(P.originalKey)).map((P) => P.originalKey), _ = o.filter((P) => z.has(P)), O = -p;
  for (; b.length; )
    switch (b.shift()) {
      case Ia: {
        C.forEach((V, q) => {
          v && D.find((U) => U.originalKey === V) && (D = D.filter((U) => U.originalKey !== V));
          const I = o.indexOf(V), j = c[I], J = n && s !== void 0 ? "initial" : Ia;
          A[V] = {
            slot: J,
            originalKey: V,
            key: v ? String(V) : Bh++,
            item: j,
            trail: O = O + p,
            config: _t(g, j, J),
            from: _t(n && s !== void 0 ? s || {} : u, j),
            to: _t(d, j)
          };
        });
        break;
      }
      case qi: {
        S.forEach((V) => {
          const q = k.indexOf(V), I = w[q], j = qi;
          D.unshift(qe({}, A[V], {
            slot: j,
            destroyed: !0,
            left: k[Math.max(0, q - 1)],
            right: k[Math.min(k.length, q + 1)],
            trail: O = O + p,
            config: _t(g, I, j),
            to: _t(h, I)
          })), delete A[V];
        });
        break;
      }
      case Ui: {
        _.forEach((V) => {
          const q = o.indexOf(V), I = c[q], j = Ui;
          A[V] = qe({}, A[V], {
            item: I,
            slot: j,
            trail: O = O + p,
            config: _t(g, I, j),
            to: _t(m, I)
          });
        });
        break;
      }
    }
  let N = o.map((P) => A[P]);
  return D.forEach((P) => {
    let V = P.left;
    P.right;
    let q = Kt(P, ["left", "right"]), I;
    (I = N.findIndex((j) => j.originalKey === V)) !== -1 && (I += 1), I = Math.max(0, I), N = [...N.slice(0, I), q, ...N.slice(I)];
  }), qe({}, r, {
    changed: C.length || S.length || _.length,
    first: n && C.length === 0,
    transitions: N,
    current: A,
    deleted: D,
    prevProps: t
  });
}
class Kh extends Tc {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Mt) && (t = nl.transform(t)), this.payload = t;
  }
}
const oi = {
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
}, Dt = "[-+]?\\d*\\.?\\d+", si = Dt + "%";
function Ni() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const jh = new RegExp("rgb" + Ni(Dt, Dt, Dt)), Ih = new RegExp("rgba" + Ni(Dt, Dt, Dt, Dt)), qh = new RegExp("hsl" + Ni(Dt, si, si)), Uh = new RegExp("hsla" + Ni(Dt, si, si, Dt)), Yh = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Xh = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Qh = /^#([0-9a-fA-F]{6})$/, Zh = /^#([0-9a-fA-F]{8})$/;
function Jh(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Qh.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : oi.hasOwnProperty(e) ? oi[e] : (t = jh.exec(e)) ? (Ln(t[1]) << 24 | // r
  Ln(t[2]) << 16 | // g
  Ln(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Ih.exec(e)) ? (Ln(t[1]) << 24 | // r
  Ln(t[2]) << 16 | // g
  Ln(t[3]) << 8 | // b
  zo(t[4])) >>> // a
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
  ) >>> 0 : (t = qh.exec(e)) ? (Do(
    $o(t[1]),
    // h
    $a(t[2]),
    // s
    $a(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Uh.exec(e)) ? (Do(
    $o(t[1]),
    // h
    $a(t[2]),
    // s
    $a(t[3])
    // l
  ) | zo(t[4])) >>> // a
  0 : null;
}
function Yi(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Do(e, t, n) {
  const a = n < 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - a, l = Yi(r, a, e + 1 / 3), c = Yi(r, a, e), o = Yi(r, a, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(c * 255) << 16 | Math.round(o * 255) << 8;
}
function Ln(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function $o(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function zo(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function $a(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Ro(e) {
  let t = Jh(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, r = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${n}, ${a}, ${r}, ${l})`;
}
const za = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Gh = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, ep = new RegExp(`(${Object.keys(oi).join("|")})`, "g"), tp = (e) => {
  const t = e.output.map((r) => r.replace(Gh, Ro)).map((r) => r.replace(ep, Ro)), n = t[0].match(za).map(() => []);
  t.forEach((r) => {
    r.match(za).forEach((l, c) => n[c].push(+l));
  });
  const a = t[0].match(za).map((r, l) => li(qe({}, e, {
    output: n[l]
  })));
  return (r) => {
    let l = 0;
    return t[0].replace(za, () => a[l++](r)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (c, o, s, u, d) => `rgba(${Math.round(o)}, ${Math.round(s)}, ${Math.round(u)}, ${d})`);
  };
};
let sa = {
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
sa = Object.keys(sa).reduce((e, t) => (ap.forEach((n) => e[np(n, t)] = e[t]), e), sa);
function ip(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(sa.hasOwnProperty(e) && sa[e]) ? t + "px" : ("" + t).trim();
}
const Fo = {};
Ch((e) => new Kh(e));
Sh(tp);
kh(oi);
Th((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const r = t.style, l = t.children, c = t.scrollTop, o = t.scrollLeft, s = Kt(t, ["style", "children", "scrollTop", "scrollLeft"]), u = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    c !== void 0 && (e.scrollTop = c), o !== void 0 && (e.scrollLeft = o), l !== void 0 && (e.textContent = l);
    for (let d in r)
      if (r.hasOwnProperty(d)) {
        var n = d.indexOf("--") === 0, a = ip(d, r[d], n);
        d === "float" && (d = "cssFloat"), n ? e.style.setProperty(d, a) : e.style[d] = a;
      }
    for (let d in s) {
      const h = u ? d : Fo[d] || (Fo[d] = d.replace(/([A-Z])/g, (m) => "-" + m.toLowerCase()));
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
], lp = bh(Lh, !1), Bo = lp(rp);
var op = ["tooltipOpen"];
function sp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function ci() {
  return ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ci.apply(this, arguments);
}
function Lc(e) {
  var t = R.useState(ci({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], r = R.useCallback(function(c) {
    return a(typeof c == "function" ? function(o) {
      o.tooltipOpen;
      var s = sp(o, op);
      return ci({}, c(s), {
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
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ui.apply(this, arguments);
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
}, al = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.className, a = e.top, r = e.left, l = e.offsetLeft, c = l === void 0 ? 10 : l, o = e.offsetTop, s = o === void 0 ? 10 : o, u = e.style, d = u === void 0 ? Oc : u, h = e.children, m = e.unstyled, y = m === void 0 ? !1 : m, p = e.applyPositionStyle, v = p === void 0 ? !1 : p, g = up(e, cp);
  return /* @__PURE__ */ i.createElement("div", ui({
    ref: t,
    className: Ze("visx-tooltip", n),
    style: ui({
      top: a == null || s == null ? a : a + s,
      left: r == null || c == null ? r : r + c
    }, v && {
      position: "absolute"
    }, !y && d)
  }, g), h);
});
al.propTypes = {
  children: W.node,
  className: W.string,
  left: W.number,
  offsetLeft: W.number,
  offsetTop: W.number,
  top: W.number,
  applyPositionStyle: W.bool,
  unstyled: W.bool
};
al.displayName = "Tooltip";
const dp = al;
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
function fp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Er(e, t);
}
function Er(e, t) {
  return Er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Er(e, t);
}
var Wo = {
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
      this.node = (c = this.nodeRef) != null && c.current ? this.nodeRef.current : Su.findDOMNode(this), this.setState(function() {
        return o.getRects();
      });
    }, r.getRects = function() {
      if (!this.node)
        return this.state;
      var c = this.node, o = c.parentNode, s = c.getBoundingClientRect ? c.getBoundingClientRect() : Wo, u = o != null && o.getBoundingClientRect ? o.getBoundingClientRect() : Wo;
      return {
        rect: s,
        parentRect: u
      };
    }, r.render = function() {
      return /* @__PURE__ */ i.createElement(e, br({
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
  var n = e.left, a = n === void 0 ? 0 : n, r = e.offsetLeft, l = r === void 0 ? 10 : r, c = e.offsetTop, o = c === void 0 ? 10 : c, s = e.parentRect, u = e.rect, d = e.style, h = d === void 0 ? Oc : d, m = e.top, y = m === void 0 ? 0 : m, p = e.unstyled, v = p === void 0 ? !1 : p, g = e.nodeRef, f = gp(e, yp), b, x = !1, k = !1;
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
      var C = A + o + u.height - s.height, S = u.height - A - o;
      k = C > 0 && C > S;
    } else
      k = A + o + u.height > window.innerHeight;
    w = x ? w - u.width - l : w + l, A = k ? A - u.height - o : A + o, w = Math.round(w), A = Math.round(A), b = "translate(" + w + "px, " + A + "px)";
  }
  return /* @__PURE__ */ i.createElement(dp, di({
    ref: g,
    style: di({
      left: 0,
      top: 0,
      transform: b
    }, !v && h)
  }, f), /* @__PURE__ */ i.createElement(pp, {
    value: {
      isFlippedVertically: !k,
      isFlippedHorizontally: !x
    }
  }, t));
}
Mc.propTypes = {
  nodeRef: W.oneOfType([W.string, W.func, W.object])
};
const Dc = hp(Mc);
var Kn = /* @__PURE__ */ function() {
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
  return new Kn({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function vp(e, t) {
  return new Kn({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: Kn,
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
function kp(e) {
  return !!e && "getScreenCTM" in e;
}
function Sp(e) {
  return !!e && "changedTouches" in e;
}
function wp(e) {
  return !!e && "clientX" in e;
}
function Cp(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
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
var Xi = {
  x: 0,
  y: 0
};
function Np(e) {
  if (!e)
    return ca({}, Xi);
  if (Sp(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : ca({}, Xi);
  if (wp(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : ca({}, Xi);
}
function Ar(e, t) {
  if (!e || !t)
    return null;
  var n = Np(t), a = Ap(e) ? e.ownerSVGElement : e, r = kp(a) ? a.getScreenCTM() : null;
  if (Tp(a) && r) {
    var l = a.createSVGPoint();
    return l.x = n.x, l.y = n.y, l = l.matrixTransform(r.inverse()), new Kn({
      x: l.x,
      y: l.y
    });
  }
  var c = e.getBoundingClientRect();
  return new Kn({
    x: n.x - c.left - e.clientLeft,
    y: n.y - c.top - e.clientTop
  });
}
function Tr(e, t) {
  if (Ep(e) && t)
    return Ar(e, t);
  if (Cp(e)) {
    var n = e, a = n.target;
    if (a)
      return Ar(a, n);
  }
  return null;
}
const Pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Tr,
  touchPoint: Ar
}, Symbol.toStringTag, { value: "Module" })), $c = (e) => {
  const { tableData: t, config: n, formatNumber: a, capitalize: r, formatDate: l, parseDate: c, setSharedFilter: o } = R.useContext(Re), { xScale: s, yScale: u, showTooltip: d, hideTooltip: h } = e, { xAxis: m, visualizationType: y, orientation: p, yAxis: v, runtime: g } = n, f = (_, O) => {
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
    const N = Tr(_), { x: P, y: V } = N, { data: q, arc: I } = O, j = w(P - Number(n.yAxis.size || 0)), J = y !== "Pie" ? n.series.filter((K) => K.tooltip === !0).map((K) => K.dataKey) : n.series.map((K) => K.dataKey);
    J.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((K) => {
      K.confidenceIntervals.map((ee) => {
        ee.showInTooltip && (J.push(ee.high), J.push(ee.low));
      });
    });
    function U(K) {
      let ee = [];
      for (let F in K)
        K.hasOwnProperty(F) && ee.push(K[F].name);
      return ee;
    }
    J.push(...U(n.columns));
    const ce = T(j, J), de = t.filter((K) => K[m.dataKey] === A(V)), fe = p === "vertical" ? ce : de;
    y === "Forest Plot" && (t == null || t.filter((K) => K[m.dataKey] === A(V))[0][n.forestPlot.estimateField]);
    const ke = (K) => {
      const ee = n.series.filter((pe) => pe.dataKey === K)[0];
      return ee != null && ee.axis ? String(ee.axis).toLowerCase() : "left";
    }, Ce = (() => {
      const K = n.columns, ee = [], F = [];
      for (const [ne, me] of Object.entries(K)) {
        const le = {
          addColPrefix: n.columns[ne].prefix,
          addColSuffix: n.columns[ne].suffix,
          addColRoundTo: n.columns[ne].roundToPlace ? n.columns[ne].roundToPlace : "",
          addColCommas: n.columns[ne].commas
        };
        let ue = null;
        n.visualizationType === "Pie" ? ue = I == null ? void 0 : I.data[me.name] : ue = fe[0][me.name];
        const Le = gu(ue, "left", !0, n, le);
        me.tooltips && ee.push([me.label, Le]);
      }
      const pe = [];
      return ee.forEach((ne) => {
        pe.push([ne[0], ne[1]]);
      }), y === "Pie" && F.push(
        // ignore
        [n.xAxis.dataKey, q],
        [n.runtime.yAxis.dataKey, a(I == null ? void 0 : I.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((I == null ? void 0 : I.endAngle) - (I == null ? void 0 : I.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), y === "Forest Plot" && F.push([n.xAxis.dataKey, A(V)]), y !== "Pie" && y !== "Forest Plot" && F.push(
        ...z().filter(Boolean).flatMap((ne) => fe[0][ne] ? [[ne, a(fe[0][ne], ke(ne))]] : [])
      ), [...F, ...pe];
    })();
    if (!Ce)
      return;
    const G = f(Ce, N);
    d(G);
  }, x = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      h();
    }, 3e3) : h();
  }, k = (_) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let O = s.step();
      const P = Math.floor(Number(_) / O);
      return s.domain()[P - 1];
    }
    if (n.xAxis.type === "date" && n.visualizationType !== "Combo") {
      const O = mo((q) => c(q[n.xAxis.dataKey])).left, N = s.invert(s(_)), P = O(n.data, N, 1);
      return c(n.data[P - 1][n.xAxis.dataKey]);
    }
  }, w = (_) => {
    if (y !== "Pie" && p !== "horizontal") {
      if (s.type === "point" || m.type === "continuous" || m.type === "date") {
        let O = null, N = Number.MAX_VALUE, P = _;
        return t.forEach((V) => {
          const q = m.type === "date" ? s(c(V[m.dataKey])) : s(V[m.dataKey]), I = Math.abs(Number(q - P));
          I < N && (N = I, O = m.type === "date" ? c(V[m.dataKey]) : V[m.dataKey]);
        }), O;
      }
      if (n.xAxis.type === "categorical" || y === "Combo" && p !== "horizontal" && y !== "Forest Plot") {
        let O = s.step();
        const P = Math.floor(Number(_) / O);
        return s.domain()[P - 1];
      }
      if (n.xAxis.type === "date" && y !== "Combo" && p !== "horizontal") {
        const O = mo((q) => c(q[n.xAxis.dataKey])).left, N = s.invert(_), P = O(n.data, N, 1);
        return c(n.data[P - 1][n.xAxis.dataKey]);
      }
    }
  }, A = (_, O) => {
    if (y === "Pie")
      return;
    let N = Number.MAX_VALUE, P = null;
    return t.forEach((V, q) => {
      const I = u(y !== "Forest Plot" ? V[n.xAxis.dataKey] : q), j = Math.abs(I - _);
      j < N && (N = j, P = O ? V[O] : V[n.xAxis.dataKey]);
    }), P;
  }, D = (_) => {
    try {
      const O = Tr(_), { x: N } = O;
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
      return m.type === "categorical" ? P = t.filter((q) => q[m.dataKey] === _) : P = t.filter((q) => l(c(q[m.dataKey])) === N), !P || P.length === 0 ? [] : P.map((q) => Object.fromEntries(Object.entries(q).filter(([I, j]) => O.includes(I))));
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
    getXValueFromCoordinateDate: k,
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
function il(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: r = !1 }) {
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
const Ra = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), Lp = (e) => {
  const { transformedData: t, config: n, dimensions: a, seriesHighlight: r, colorScale: l, formatNumber: c, currentViewport: o, handleChartAriaLabels: s, isEditor: u } = R.useContext(Re), { tooltipData: d, showTooltip: h, hideTooltip: m, tooltipOpen: y, tooltipLeft: p, tooltipTop: v } = Lc(), { handleTooltipMouseOver: g, handleTooltipMouseOff: f, TooltipListItem: b } = $c({
    xScale: !1,
    yScale: !1,
    showTooltip: h,
    hideTooltip: m
  }), [x, k] = R.useState(void 0), [w, A] = R.useState(!1), D = R.useRef(), T = il(D, {
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
    const I = Vh(P, q, {
      from: Ra,
      enter: Ra,
      update: Ra,
      leave: Ra
    });
    return R.useEffect(() => {
      const j = setTimeout(() => {
        m();
      }, 500);
      return () => {
        clearTimeout(j);
      };
    }, [d]), /* @__PURE__ */ i.createElement(i.Fragment, null, I.map(({ item: j, props: J, key: U }, ce) => /* @__PURE__ */ i.createElement(ve, { className: j.data[n.xAxis.dataKey], key: `${U}-${ce}`, style: { opacity: n.legend.behavior === "highlight" && r.length > 0 && r.indexOf(j.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ i.createElement(
      Bo.path,
      {
        d: $h(
          [J.startAngle, J.endAngle],
          (de, fe) => V({
            ...j,
            startAngle: de,
            endAngle: fe
          })
        ),
        fill: l(j.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (de) => g(de, { data: j.data[n.runtime.xAxis.dataKey], arc: j }),
        onMouseLeave: (de) => f()
      }
    ))), I.map(({ item: j, key: J }) => {
      const [U, ce] = V.centroid(j), de = j.endAngle - j.startAngle >= 0.1;
      let fe = "#FFF";
      return l(j.data[n.runtime.xAxis.dataKey]) && Xt.contrast(fe, l(j.data[n.runtime.xAxis.dataKey])) < 3.5 && (fe = "000"), /* @__PURE__ */ i.createElement(Bo.g, { key: J }, de && /* @__PURE__ */ i.createElement(ze, { style: { fill: fe }, x: U, y: ce, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((j.endAngle - j.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [$] = a;
  n && n.legend && !n.legend.hide && o === "lg" && ($ = $ * 0.73);
  const C = n.heights.vertical, S = Math.min($, C) / 2, _ = C / 2, O = $ / 2, N = n.pieType === "Donut" ? 75 : S;
  return R.useEffect(() => {
    if (r.length > 0 && n.legend.behavior !== "highlight") {
      let P = [];
      t.forEach((V) => {
        r.indexOf(V[n.runtime.xAxis.dataKey]) !== -1 && P.push(V);
      }), k(P);
    } else
      k(void 0);
  }, [r]), /* @__PURE__ */ i.createElement($t, { component: "PieChart" }, /* @__PURE__ */ i.createElement("svg", { width: $, height: C, className: `animated-pie group ${n.animate === !1 || w ? "animated" : ""}`, role: "img", "aria-label": s(n) }, /* @__PURE__ */ i.createElement(ve, { top: _, left: O }, /* @__PURE__ */ i.createElement(
    Pd,
    {
      data: x || t,
      pieValue: (P) => P[n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: S - N,
      outerRadius: S
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
function ua() {
  return ua = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ua.apply(this, arguments);
}
function Mp(e) {
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, r = e.tickClassName, l = e.tickComponent, c = e.tickLabelProps, o = e.tickStroke, s = o === void 0 ? "#222" : o, u = e.tickTransform, d = e.ticks, h = e.strokeWidth, m = e.tickLineProps;
  return d.map(function(y) {
    var p, v = y.value, g = y.index, f = y.from, b = y.to, x = y.formattedValue, k = (p = c[g]) != null ? p : {}, w = Math.max(10, typeof k.fontSize == "number" && k.fontSize || 0), A = b.y + (n && a !== bt.top ? w : 0);
    return /* @__PURE__ */ i.createElement(ve, {
      key: "visx-tick-" + v + "-" + g,
      className: Ze("visx-axis-tick", r),
      transform: u
    }, !t && /* @__PURE__ */ i.createElement(Ie, ua({
      from: f,
      to: b,
      stroke: s,
      strokeWidth: h,
      strokeLinecap: "square"
    }, m)), l ? l(ua({}, k, {
      x: b.x,
      y: A,
      formattedValue: x
    })) : /* @__PURE__ */ i.createElement(ze, ua({
      x: b.x,
      y: A
    }, k), x));
  });
}
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
var Vo = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function Dp(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, r = e.hideAxisLine, l = e.hideTicks, c = e.horizontal, o = e.label, s = o === void 0 ? "" : o, u = e.labelClassName, d = e.labelOffset, h = d === void 0 ? 14 : d, m = e.labelProps, y = m === void 0 ? Vo : m, p = e.orientation, v = p === void 0 ? bt.bottom : p, g = e.scale, f = e.stroke, b = f === void 0 ? "#222" : f, x = e.strokeDasharray, k = e.strokeWidth, w = k === void 0 ? 1 : k, A = e.tickClassName, D = e.tickComponent, T = e.tickLineProps, z = e.tickLabelProps, $ = e.tickLength, C = $ === void 0 ? 8 : $, S = e.tickStroke, _ = S === void 0 ? "#222" : S, O = e.tickTransform, N = e.ticks, P = e.ticksComponent, V = P === void 0 ? Mp : P, q = fi({}, Vo, typeof z == "object" ? z : null), I = N.map(function(J) {
    var U = J.value, ce = J.index;
    return typeof z == "function" ? z(U, ce, N) : q;
  }), j = Math.max.apply(Math, [10].concat(I.map(function(J) {
    return typeof J.fontSize == "number" ? J.fontSize : 0;
  })));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, V({
    hideTicks: l,
    horizontal: c,
    orientation: v,
    scale: g,
    tickClassName: A,
    tickComponent: D,
    tickLabelProps: I,
    tickStroke: _,
    tickTransform: O,
    ticks: N,
    strokeWidth: w,
    tickLineProps: T
  }), !r && /* @__PURE__ */ i.createElement(Ie, {
    className: Ze("visx-axis-line", n),
    from: t,
    to: a,
    stroke: b,
    strokeWidth: w,
    strokeDasharray: x
  }), s && /* @__PURE__ */ i.createElement(ze, fi({
    className: Ze("visx-axis-label", u)
  }, _p({
    labelOffset: h,
    labelProps: y,
    orientation: v,
    range: g.range(),
    tickLabelFontSize: j,
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
function Fa(e, t) {
  var n = e.x, a = e.y;
  return new Kn(t ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  });
}
function kr() {
  return kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, kr.apply(this, arguments);
}
var Qi = 0;
function Rp(e) {
  return e === void 0 && (e = Qi), typeof e == "number" ? {
    start: e,
    end: e
  } : kr({
    start: Qi,
    end: Qi
  }, e);
}
var Fp = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function Sr() {
  return Sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Sr.apply(this, arguments);
}
function Bp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Pi(e) {
  var t = e.children, n = t === void 0 ? Dp : t, a = e.axisClassName, r = e.hideAxisLine, l = r === void 0 ? !1 : r, c = e.hideTicks, o = c === void 0 ? !1 : c, s = e.hideZero, u = s === void 0 ? !1 : s, d = e.innerRef, h = e.left, m = h === void 0 ? 0 : h, y = e.numTicks, p = y === void 0 ? 10 : y, v = e.orientation, g = v === void 0 ? bt.bottom : v, f = e.rangePadding, b = f === void 0 ? 0 : f, x = e.scale, k = e.tickFormat, w = e.tickLength, A = w === void 0 ? 8 : w, D = e.tickValues, T = e.top, z = T === void 0 ? 0 : T, $ = Bp(e, Fp), C = k ?? zp(x), S = g === bt.left, _ = g === bt.top, O = _ || g === bt.bottom, N = $p(x), P = S || _ ? -1 : 1, V = x.range(), q = Rp(b), I = Fa({
    x: Number(V[0]) + 0.5 - q.start,
    y: 0
  }, O), j = Fa({
    x: Number(V[V.length - 1]) + 0.5 + q.end,
    y: 0
  }, O), J = (D ?? wf(x, p)).filter(function(ce) {
    return !u || ce !== 0 && ce !== "0";
  }).map(function(ce, de) {
    return {
      value: ce,
      index: de
    };
  }), U = J.map(function(ce) {
    var de = ce.value, fe = ce.index, ke = Sf(N(de));
    return {
      value: de,
      index: fe,
      from: Fa({
        x: ke,
        y: 0
      }, O),
      to: Fa({
        x: ke,
        y: A * P
      }, O),
      formattedValue: C(de, fe, J)
    };
  });
  return /* @__PURE__ */ i.createElement(ve, {
    className: Ze("visx-axis", a),
    innerRef: d,
    top: z,
    left: m
  }, n(Sr({}, $, {
    axisFromPoint: I,
    axisToPoint: j,
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
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, r = e.tickLength, l = r === void 0 ? 8 : r, c = e.tickLabelProps, o = Vp(e, Wp), s = typeof c == "function" ? c : mi({}, Hp, c);
  return /* @__PURE__ */ i.createElement(Pi, mi({
    axisClassName: Ze("visx-axis-left", t),
    labelOffset: a,
    orientation: bt.left,
    tickLabelProps: s,
    tickLength: l
  }, o));
}
var jp = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function Ip(e, t) {
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
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, r = e.tickLength, l = r === void 0 ? 8 : r, c = e.tickLabelProps, o = Ip(e, jp), s = typeof c == "function" ? c : hi({}, qp, c);
  return /* @__PURE__ */ i.createElement(Pi, hi({
    axisClassName: Ze("visx-axis-right", t),
    labelOffset: a,
    orientation: bt.right,
    tickLabelProps: s,
    tickLength: l
  }, o));
}
var Yp = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, r = e.tickLength, l = r === void 0 ? 8 : r, c = e.tickLabelProps, o = Xp(e, Yp), s = typeof c == "function" ? c : pi({}, Qp, c);
  return /* @__PURE__ */ i.createElement(Pi, pi({
    axisClassName: Ze("visx-axis-top", t),
    labelOffset: a,
    orientation: bt.top,
    tickLabelProps: s,
    tickLength: l
  }, o));
}
var Jp = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function qa(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, r = e.tickLength, l = r === void 0 ? 8 : r, c = e.tickLabelProps, o = Gp(e, Jp), s = typeof c == "function" ? c : yi({}, ey, c);
  return /* @__PURE__ */ i.createElement(Pi, yi({
    axisClassName: Ze("visx-axis-bottom", t),
    labelOffset: a,
    orientation: bt.bottom,
    tickLabelProps: s,
    tickLength: l
  }, o));
}
function Aa(e) {
  return e.split("-")[1];
}
function rl(e) {
  return e === "y" ? "height" : "width";
}
function bn(e) {
  return e.split("-")[0];
}
function Ta(e) {
  return ["top", "bottom"].includes(bn(e)) ? "x" : "y";
}
function Ho(e, t, n) {
  let { reference: a, floating: r } = e;
  const l = a.x + a.width / 2 - r.width / 2, c = a.y + a.height / 2 - r.height / 2, o = Ta(t), s = rl(o), u = a[s] / 2 - r[s] / 2, d = o === "x";
  let h;
  switch (bn(t)) {
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
  switch (Aa(t)) {
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
function da(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Rc(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: r, platform: l, rects: c, elements: o, strategy: s } = e, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: h = "floating", altBoundary: m = !1, padding: y = 0 } = t, p = zc(y), v = o[m ? h === "floating" ? "reference" : "floating" : h], g = da(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(v))) == null || n ? v : v.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(o.floating)), boundary: u, rootBoundary: d, strategy: s })), f = h === "floating" ? { ...c.floating, x: a, y: r } : c.reference, b = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(o.floating)), x = await (l.isElement == null ? void 0 : l.isElement(b)) && await (l.getScale == null ? void 0 : l.getScale(b)) || { x: 1, y: 1 }, k = da(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: f, offsetParent: b, strategy: s }) : f);
  return { top: (g.top - k.top + p.top) / x.y, bottom: (k.bottom - g.bottom + p.bottom) / x.y, left: (g.left - k.left + p.left) / x.x, right: (k.right - g.right + p.right) / x.x };
}
const ty = Math.min, ny = Math.max;
function wr(e, t, n) {
  return ny(e, ty(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const ay = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ay[t]);
}
function iy(e, t, n) {
  n === void 0 && (n = !1);
  const a = Aa(e), r = Ta(e), l = rl(r);
  let c = r === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (c = gi(c)), { main: c, cross: gi(c) };
}
const ry = { start: "end", end: "start" };
function Zi(e) {
  return e.replace(/start|end/g, (t) => ry[t]);
}
const ly = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: r, rects: l, initialPlacement: c, platform: o, elements: s } = t, { mainAxis: u = !0, crossAxis: d = !0, fallbackPlacements: h, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: p = !0, ...v } = e, g = bn(a), f = bn(c) === c, b = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), x = h || (f || !p ? [gi(c)] : function(C) {
      const S = gi(C);
      return [Zi(C), S, Zi(S)];
    }(c));
    h || y === "none" || x.push(...function(C, S, _, O) {
      const N = Aa(C);
      let P = function(V, q, I) {
        const j = ["left", "right"], J = ["right", "left"], U = ["top", "bottom"], ce = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return I ? q ? J : j : q ? j : J;
          case "left":
          case "right":
            return q ? U : ce;
          default:
            return [];
        }
      }(bn(C), _ === "start", O);
      return N && (P = P.map((V) => V + "-" + N), S && (P = P.concat(P.map(Zi)))), P;
    }(c, p, y, b));
    const k = [c, ...x], w = await Rc(t, v), A = [];
    let D = ((n = r.flip) == null ? void 0 : n.overflows) || [];
    if (u && A.push(w[g]), d) {
      const { main: C, cross: S } = iy(a, l, b);
      A.push(w[C], w[S]);
    }
    if (D = [...D, { placement: a, overflows: A }], !A.every((C) => C <= 0)) {
      var T, z;
      const C = (((T = r.flip) == null ? void 0 : T.index) || 0) + 1, S = k[C];
      if (S)
        return { data: { index: C, overflows: D }, reset: { placement: S } };
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
      const { placement: o, platform: s, elements: u } = l, d = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), h = bn(o), m = Aa(o), y = Ta(o) === "x", p = ["left", "top"].includes(h) ? -1 : 1, v = d && y ? -1 : 1, g = typeof c == "function" ? c(l) : c;
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
    } }, ...s } = e, u = { x: n, y: a }, d = await Rc(t, s), h = Ta(bn(r)), m = h === "x" ? "y" : "x";
    let y = u[h], p = u[m];
    if (l) {
      const g = h === "y" ? "bottom" : "right";
      y = wr(y + d[h === "y" ? "top" : "left"], y, y - d[g]);
    }
    if (c) {
      const g = m === "y" ? "bottom" : "right";
      p = wr(p + d[m === "y" ? "top" : "left"], p, p - d[g]);
    }
    const v = o.fn({ ...t, [h]: y, [m]: p });
    return { ...v, data: { x: v.x - n, y: v.y - a } };
  } };
};
function Ot(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jt(e) {
  return Ot(e).getComputedStyle(e);
}
const Ko = Math.min, fa = Math.max, xi = Math.round;
function Fc(e) {
  const t = jt(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const r = e.offsetWidth, l = e.offsetHeight, c = xi(n) !== r || xi(a) !== l;
  return c && (n = r, a = l), { width: n, height: a, fallback: c };
}
function on(e) {
  return Wc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ba;
function Bc() {
  if (Ba)
    return Ba;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ba = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Ba) : navigator.userAgent;
}
function It(e) {
  return e instanceof Ot(e).HTMLElement;
}
function nn(e) {
  return e instanceof Ot(e).Element;
}
function Wc(e) {
  return e instanceof Ot(e).Node;
}
function jo(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Ot(e).ShadowRoot || e instanceof ShadowRoot;
}
function Li(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: r } = jt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(r);
}
function cy(e) {
  return ["table", "td", "th"].includes(on(e));
}
function Cr(e) {
  const t = /firefox/i.test(Bc()), n = jt(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((r) => n.willChange.includes(r)) || ["paint", "layout", "strict", "content"].some((r) => {
    const l = n.contain;
    return l != null && l.includes(r);
  });
}
function Vc() {
  return !/^((?!chrome|android).)*safari/i.test(Bc());
}
function ll(e) {
  return ["html", "body", "#document"].includes(on(e));
}
function Hc(e) {
  return nn(e) ? e : e.contextElement;
}
const Kc = { x: 1, y: 1 };
function zn(e) {
  const t = Hc(e);
  if (!It(t))
    return Kc;
  const n = t.getBoundingClientRect(), { width: a, height: r, fallback: l } = Fc(t);
  let c = (l ? xi(n.width) : n.width) / a, o = (l ? xi(n.height) : n.height) / r;
  return c && Number.isFinite(c) || (c = 1), o && Number.isFinite(o) || (o = 1), { x: c, y: o };
}
function xa(e, t, n, a) {
  var r, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const c = e.getBoundingClientRect(), o = Hc(e);
  let s = Kc;
  t && (a ? nn(a) && (s = zn(a)) : s = zn(e));
  const u = o ? Ot(o) : window, d = !Vc() && n;
  let h = (c.left + (d && ((r = u.visualViewport) == null ? void 0 : r.offsetLeft) || 0)) / s.x, m = (c.top + (d && ((l = u.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / s.y, y = c.width / s.x, p = c.height / s.y;
  if (o) {
    const v = Ot(o), g = a && nn(a) ? Ot(a) : a;
    let f = v.frameElement;
    for (; f && a && g !== v; ) {
      const b = zn(f), x = f.getBoundingClientRect(), k = getComputedStyle(f);
      x.x += (f.clientLeft + parseFloat(k.paddingLeft)) * b.x, x.y += (f.clientTop + parseFloat(k.paddingTop)) * b.y, h *= b.x, m *= b.y, y *= b.x, p *= b.y, h += x.x, m += x.y, f = Ot(f).frameElement;
    }
  }
  return { width: y, height: p, top: m, right: h + y, bottom: m + p, left: h, x: h, y: m };
}
function an(e) {
  return ((Wc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Oi(e) {
  return nn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function jc(e) {
  return xa(an(e)).left + Oi(e).scrollLeft;
}
function va(e) {
  if (on(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || jo(e) && e.host || an(e);
  return jo(t) ? t.host : t;
}
function Ic(e) {
  const t = va(e);
  return ll(t) ? t.ownerDocument.body : It(t) && Li(t) ? t : Ic(t);
}
function qc(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = Ic(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Ot(a);
  return r ? t.concat(l, l.visualViewport || [], Li(a) ? a : []) : t.concat(a, qc(a));
}
function Io(e, t, n) {
  return t === "viewport" ? da(function(a, r) {
    const l = Ot(a), c = an(a), o = l.visualViewport;
    let s = c.clientWidth, u = c.clientHeight, d = 0, h = 0;
    if (o) {
      s = o.width, u = o.height;
      const m = Vc();
      (m || !m && r === "fixed") && (d = o.offsetLeft, h = o.offsetTop);
    }
    return { width: s, height: u, x: d, y: h };
  }(e, n)) : nn(t) ? da(function(a, r) {
    const l = xa(a, !0, r === "fixed"), c = l.top + a.clientTop, o = l.left + a.clientLeft, s = It(a) ? zn(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * s.x, height: a.clientHeight * s.y, x: o * s.x, y: c * s.y };
  }(t, n)) : da(function(a) {
    const r = an(a), l = Oi(a), c = a.ownerDocument.body, o = fa(r.scrollWidth, r.clientWidth, c.scrollWidth, c.clientWidth), s = fa(r.scrollHeight, r.clientHeight, c.scrollHeight, c.clientHeight);
    let u = -l.scrollLeft + jc(a);
    const d = -l.scrollTop;
    return jt(c).direction === "rtl" && (u += fa(r.clientWidth, c.clientWidth) - o), { width: o, height: s, x: u, y: d };
  }(an(e)));
}
function qo(e) {
  return It(e) && jt(e).position !== "fixed" ? e.offsetParent : null;
}
function Uo(e) {
  const t = Ot(e);
  let n = qo(e);
  for (; n && cy(n) && jt(n).position === "static"; )
    n = qo(n);
  return n && (on(n) === "html" || on(n) === "body" && jt(n).position === "static" && !Cr(n)) ? t : n || function(a) {
    let r = va(a);
    for (; It(r) && !ll(r); ) {
      if (Cr(r))
        return r;
      r = va(r);
    }
    return null;
  }(e) || t;
}
function uy(e, t, n) {
  const a = It(t), r = an(t), l = xa(e, !0, n === "fixed", t);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (a || !a && n !== "fixed")
    if ((on(t) !== "body" || Li(r)) && (c = Oi(t)), It(t)) {
      const s = xa(t, !0);
      o.x = s.x + t.clientLeft, o.y = s.y + t.clientTop;
    } else
      r && (o.x = jc(r));
  return { x: l.left + c.scrollLeft - o.x, y: l.top + c.scrollTop - o.y, width: l.width, height: l.height };
}
const dy = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: r } = e;
  const l = n === "clippingAncestors" ? function(u, d) {
    const h = d.get(u);
    if (h)
      return h;
    let m = qc(u).filter((g) => nn(g) && on(g) !== "body"), y = null;
    const p = jt(u).position === "fixed";
    let v = p ? va(u) : u;
    for (; nn(v) && !ll(v); ) {
      const g = jt(v), f = Cr(v);
      (p ? f || y : f || g.position !== "static" || !y || !["absolute", "fixed"].includes(y.position)) ? y = g : m = m.filter((b) => b !== v), v = va(v);
    }
    return d.set(u, m), m;
  }(t, this._c) : [].concat(n), c = [...l, a], o = c[0], s = c.reduce((u, d) => {
    const h = Io(t, d, r);
    return u.top = fa(h.top, u.top), u.right = Ko(h.right, u.right), u.bottom = Ko(h.bottom, u.bottom), u.left = fa(h.left, u.left), u;
  }, Io(t, o, r));
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const r = It(n), l = an(n);
  if (n === l)
    return t;
  let c = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const s = { x: 0, y: 0 };
  if ((r || !r && a !== "fixed") && ((on(n) !== "body" || Li(l)) && (c = Oi(n)), It(n))) {
    const u = xa(n);
    o = zn(n), s.x = u.x + n.clientLeft, s.y = u.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - c.scrollLeft * o.x + s.x, y: t.y * o.y - c.scrollTop * o.y + s.y };
}, isElement: nn, getDimensions: function(e) {
  return It(e) ? Fc(e) : e.getBoundingClientRect();
}, getOffsetParent: Uo, getDocumentElement: an, getScale: zn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const r = this.getOffsetParent || Uo, l = this.getDimensions;
  return { reference: uy(t, await r(n), a), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => jt(e).direction === "rtl" }, Yo = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), r = { platform: dy, ...n }, l = { ...r.platform, _c: a };
  return (async (c, o, s) => {
    const { placement: u = "bottom", strategy: d = "absolute", middleware: h = [], platform: m } = s, y = h.filter(Boolean), p = await (m.isRTL == null ? void 0 : m.isRTL(o));
    if (m == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), y.filter((w) => {
      let { name: A } = w;
      return A === "autoPlacement" || A === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    c && o || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let v = await m.getElementRects({ reference: c, floating: o, strategy: d }), { x: g, y: f } = Ho(v, u, p), b = u, x = {}, k = 0;
    for (let w = 0; w < y.length; w++) {
      const { name: A, fn: D } = y[w], { x: T, y: z, data: $, reset: C } = await D({ x: g, y: f, initialPlacement: u, placement: b, strategy: d, middlewareData: x, rects: v, platform: m, elements: { reference: c, floating: o } });
      g = T ?? g, f = z ?? f, x = { ...x, [A]: { ...x[A], ...$ } }, k > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), C && k <= 50 && (k++, typeof C == "object" && (C.placement && (b = C.placement), C.rects && (v = C.rects === !0 ? await m.getElementRects({ reference: c, floating: o, strategy: d }) : C.rects), { x: g, y: f } = Ho(v, b, p)), w = -1);
    }
    return { x: g, y: f, placement: b, strategy: d, middlewareData: x };
  })(e, t, { ...r, platform: l });
};
var Jt, En = { exports: {} }, Xo = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Jt = Xo, function() {
  var e = i, t = 60103, n = 60106;
  Jt.Fragment = 60107;
  var a = 60108, r = 60114, l = 60109, c = 60110, o = 60112, s = 60113, u = 60120, d = 60115, h = 60116, m = 60121, y = 60122, p = 60117, v = 60129, g = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var f = Symbol.for;
    t = f("react.element"), n = f("react.portal"), Jt.Fragment = f("react.fragment"), a = f("react.strict_mode"), r = f("react.profiler"), l = f("react.provider"), c = f("react.context"), o = f("react.forward_ref"), s = f("react.suspense"), u = f("react.suspense_list"), d = f("react.memo"), h = f("react.lazy"), m = f("react.block"), y = f("react.server.block"), p = f("react.fundamental"), f("react.scope"), f("react.opaque.id"), v = f("react.debug_trace_mode"), f("react.offscreen"), g = f("react.legacy_hidden");
  }
  var b = typeof Symbol == "function" && Symbol.iterator, x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function k(K) {
    for (var ee = arguments.length, F = new Array(ee > 1 ? ee - 1 : 0), pe = 1; pe < ee; pe++)
      F[pe - 1] = arguments[pe];
    w("error", K, F);
  }
  function w(K, ee, F) {
    var pe = x.ReactDebugCurrentFrame, ne = "";
    if (z) {
      var me = D(z.type), le = z._owner;
      ne += function(Le, Ke, Se) {
        var ye = "";
        if (Ke) {
          var oe = Ke.fileName, ie = oe.replace(A, "");
          if (/^index\./.test(ie)) {
            var Fe = oe.match(A);
            if (Fe) {
              var se = Fe[1];
              se && (ie = se.replace(A, "") + "/" + ie);
            }
          }
          ye = " (at " + ie + ":" + Ke.lineNumber + ")";
        } else
          Se && (ye = " (created by " + Se + ")");
        return `
    in ` + (Le || "Unknown") + ye;
      }(me, z._source, le && D(le.type));
    }
    (ne += pe.getStackAddendum()) !== "" && (ee += "%s", F = F.concat([ne]));
    var ue = F.map(function(Le) {
      return "" + Le;
    });
    ue.unshift("Warning: " + ee), Function.prototype.apply.call(console[K], console, ue);
  }
  var A = /^(.*)[\\\/]/;
  function D(K) {
    if (K == null)
      return null;
    if (typeof K.tag == "number" && k("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof K == "function")
      return K.displayName || K.name || null;
    if (typeof K == "string")
      return K;
    switch (K) {
      case Jt.Fragment:
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
          return pe = K, ne = K.render, me = "ForwardRef", le = ne.displayName || ne.name || "", pe.displayName || (le !== "" ? me + "(" + le + ")" : me);
        case d:
          return D(K.type);
        case m:
          return D(K.render);
        case h:
          var ee = (F = K)._status === 1 ? F._result : null;
          if (ee)
            return D(ee);
      }
    var F, pe, ne, me, le;
    return null;
  }
  var T = {};
  x.ReactDebugCurrentFrame;
  var z = null;
  function $(K) {
    z = K;
  }
  var C, S, _, O = x.ReactCurrentOwner, N = Object.prototype.hasOwnProperty, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(K, ee, F, pe, ne) {
    var me, le = {}, ue = null, Le = null;
    for (me in F !== void 0 && (ue = "" + F), function(ye) {
      if (N.call(ye, "key")) {
        var oe = Object.getOwnPropertyDescriptor(ye, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return ye.key !== void 0;
    }(ee) && (ue = "" + ee.key), function(ye) {
      if (N.call(ye, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(ye, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return ye.ref !== void 0;
    }(ee) && (Le = ee.ref, function(ye, oe) {
      if (typeof ye.ref == "string" && O.current && oe && O.current.stateNode !== oe) {
        var ie = D(O.current.type);
        _[ie] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(O.current.type), ye.ref), _[ie] = !0);
      }
    }(ee, ne)), ee)
      N.call(ee, me) && !P.hasOwnProperty(me) && (le[me] = ee[me]);
    if (K && K.defaultProps) {
      var Ke = K.defaultProps;
      for (me in Ke)
        le[me] === void 0 && (le[me] = Ke[me]);
    }
    if (ue || Le) {
      var Se = typeof K == "function" ? K.displayName || K.name || "Unknown" : K;
      ue && function(ye, oe) {
        var ie = function() {
          C || (C = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ie.isReactWarning = !0, Object.defineProperty(ye, "key", { get: ie, configurable: !0 });
      }(le, Se), Le && function(ye, oe) {
        var ie = function() {
          S || (S = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        ie.isReactWarning = !0, Object.defineProperty(ye, "ref", { get: ie, configurable: !0 });
      }(le, Se);
    }
    return function(ye, oe, ie, Fe, se, Ne, Te) {
      var B = { $$typeof: t, type: ye, key: oe, ref: ie, props: Te, _owner: Ne, _store: {} };
      return Object.defineProperty(B._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(B, "_self", { configurable: !1, enumerable: !1, writable: !1, value: Fe }), Object.defineProperty(B, "_source", { configurable: !1, enumerable: !1, writable: !1, value: se }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }(K, ue, Le, ne, pe, O.current, le);
  }
  _ = {};
  var q, I = x.ReactCurrentOwner;
  function j(K) {
    z = K;
  }
  function J(K) {
    return typeof K == "object" && K !== null && K.$$typeof === t;
  }
  function U() {
    if (I.current) {
      var K = D(I.current.type);
      if (K)
        return `

Check the render method of \`` + K + "`.";
    }
    return "";
  }
  x.ReactDebugCurrentFrame, q = !1;
  var ce = {};
  function de(K, ee) {
    if (K._store && !K._store.validated && K.key == null) {
      K._store.validated = !0;
      var F = function(ne) {
        var me = U();
        if (!me) {
          var le = typeof ne == "string" ? ne : ne.displayName || ne.name;
          le && (me = `

Check the top-level render call using <` + le + ">.");
        }
        return me;
      }(ee);
      if (!ce[F]) {
        ce[F] = !0;
        var pe = "";
        K && K._owner && K._owner !== I.current && (pe = " It was passed a child from " + D(K._owner.type) + "."), j(K), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, pe), j(null);
      }
    }
  }
  function fe(K, ee) {
    if (typeof K == "object") {
      if (Array.isArray(K))
        for (var F = 0; F < K.length; F++) {
          var pe = K[F];
          J(pe) && de(pe, ee);
        }
      else if (J(K))
        K._store && (K._store.validated = !0);
      else if (K) {
        var ne = function(ue) {
          if (ue === null || typeof ue != "object")
            return null;
          var Le = b && ue[b] || ue["@@iterator"];
          return typeof Le == "function" ? Le : null;
        }(K);
        if (typeof ne == "function" && ne !== K.entries)
          for (var me, le = ne.call(K); !(me = le.next()).done; )
            J(me.value) && de(me.value, ee);
      }
    }
  }
  function ke(K) {
    var ee, F = K.type;
    if (F != null && typeof F != "string") {
      if (typeof F == "function")
        ee = F.propTypes;
      else {
        if (typeof F != "object" || F.$$typeof !== o && F.$$typeof !== d)
          return;
        ee = F.propTypes;
      }
      if (ee) {
        var pe = D(F);
        (function(ne, me, le, ue, Le) {
          var Ke = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var Se in ne)
            if (Ke(ne, Se)) {
              var ye = void 0;
              try {
                if (typeof ne[Se] != "function") {
                  var oe = Error((ue || "React class") + ": " + le + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof ne[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw oe.name = "Invariant Violation", oe;
                }
                ye = ne[Se](me, Se, ue, le, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ie) {
                ye = ie;
              }
              !ye || ye instanceof Error || ($(Le), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", le, Se, typeof ye), $(null)), ye instanceof Error && !(ye.message in T) && (T[ye.message] = !0, $(Le), k("Failed %s type: %s", le, ye.message), $(null));
            }
        })(ee, K.props, "prop", pe, K);
      } else
        F.PropTypes === void 0 || q || (q = !0, k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D(F) || "Unknown"));
      typeof F.getDefaultProps != "function" || F.getDefaultProps.isReactClassApproved || k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function we(K, ee, F, pe, ne, me) {
    var le = function(ie) {
      return typeof ie == "string" || typeof ie == "function" || ie === Jt.Fragment || ie === r || ie === v || ie === a || ie === s || ie === u || ie === g || typeof ie == "object" && ie !== null && (ie.$$typeof === h || ie.$$typeof === d || ie.$$typeof === l || ie.$$typeof === c || ie.$$typeof === o || ie.$$typeof === p || ie.$$typeof === m || ie[0] === y);
    }(K);
    if (!le) {
      var ue = "";
      (K === void 0 || typeof K == "object" && K !== null && Object.keys(K).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Le, Ke = function(ie) {
        return ie !== void 0 ? `

Check your code at ` + ie.fileName.replace(/^.*[\\\/]/, "") + ":" + ie.lineNumber + "." : "";
      }(ne);
      ue += Ke || U(), K === null ? Le = "null" : Array.isArray(K) ? Le = "array" : K !== void 0 && K.$$typeof === t ? (Le = "<" + (D(K.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof K, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, ue);
    }
    var Se = V(K, ee, F, ne, me);
    if (Se == null)
      return Se;
    if (le) {
      var ye = ee.children;
      if (ye !== void 0)
        if (pe)
          if (Array.isArray(ye)) {
            for (var oe = 0; oe < ye.length; oe++)
              fe(ye[oe], K);
            Object.freeze && Object.freeze(ye);
          } else
            k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          fe(ye, K);
    }
    return K === Jt.Fragment ? function(ie) {
      for (var Fe = Object.keys(ie.props), se = 0; se < Fe.length; se++) {
        var Ne = Fe[se];
        if (Ne !== "children" && Ne !== "key") {
          j(ie), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), j(null);
          break;
        }
      }
      ie.ref !== null && (j(ie), k("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
    }(Se) : ke(Se), Se;
  }
  var Ce = function(K, ee, F) {
    return we(K, ee, F, !1);
  }, G = function(K, ee, F) {
    return we(K, ee, F, !0);
  };
  Jt.jsx = Ce, Jt.jsxs = G;
}(), En.exports = Xo;
var Ji, Uc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Ji = Uc, function() {
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
  Ji.exports ? (t.default = t, Ji.exports = t) : window.classNames = t;
}();
var Qo = Uc.exports;
const Zo = (e, t, n) => {
  let a = null;
  return function(...r) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, r);
    }, t);
  };
}, fy = ({ content: e }) => En.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), my = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, hy = R.createContext({ getTooltipData: () => my });
function Yc(e = "DEFAULT_TOOLTIP_ID") {
  return R.useContext(hy).getTooltipData(e);
}
const Jo = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: r = 10, strategy: l = "absolute", middlewares: c = [oy(Number(r)), ly(), sy({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const o = c;
  return n ? (o.push({ name: "arrow", options: s = { element: n, padding: 5 }, async fn(u) {
    const { element: d, padding: h = 0 } = s || {}, { x: m, y, placement: p, rects: v, platform: g } = u;
    if (d == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const f = zc(h), b = { x: m, y }, x = Ta(p), k = rl(x), w = await g.getDimensions(d), A = x === "y" ? "top" : "left", D = x === "y" ? "bottom" : "right", T = v.reference[k] + v.reference[x] - b[x] - v.floating[k], z = b[x] - v.reference[x], $ = await (g.getOffsetParent == null ? void 0 : g.getOffsetParent(d));
    let C = $ ? x === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0;
    C === 0 && (C = v.floating[k]);
    const S = T / 2 - z / 2, _ = f[A], O = C - w[k] - f[D], N = C / 2 - w[k] / 2 + S, P = wr(_, N, O), V = Aa(p) != null && N != P && v.reference[k] / 2 - (N < _ ? f[A] : f[D]) - w[k] / 2 < 0;
    return { [x]: b[x] - (V ? N < _ ? _ - N : O - N : 0), data: { [x]: P, centerOffset: N - P } };
  } }), Yo(e, t, { placement: a, strategy: l, middleware: o }).then(({ x: u, y: d, placement: h, middlewareData: m }) => {
    var y, p;
    const v = { left: `${u}px`, top: `${d}px` }, { x: g, y: f } = (y = m.arrow) !== null && y !== void 0 ? y : { x: 0, y: 0 };
    return { tooltipStyles: v, tooltipArrowStyles: { left: g != null ? `${g}px` : "", top: f != null ? `${f}px` : "", right: "", bottom: "", [(p = { top: "bottom", right: "left", bottom: "top", left: "right" }[h.split("-")[0]]) !== null && p !== void 0 ? p : "bottom"]: "-4px" } };
  })) : Yo(e, t, { placement: "bottom", strategy: l, middleware: o }).then(({ x: u, y: d }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {} }));
  var s;
};
var dn = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Go = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: r, anchorSelect: l, place: c = "top", offset: o = 10, events: s = ["hover"], positionStrategy: u = "absolute", middlewares: d, wrapper: h, children: m = null, delayShow: y = 0, delayHide: p = 0, float: v = !1, noArrow: g = !1, clickable: f = !1, closeOnEsc: b = !1, style: x, position: k, afterShow: w, afterHide: A, content: D, html: T, isOpen: z, setIsOpen: $, activeAnchor: C, setActiveAnchor: S }) => {
  const _ = R.useRef(null), O = R.useRef(null), N = R.useRef(null), P = R.useRef(null), [V, q] = R.useState({}), [I, j] = R.useState({}), [J, U] = R.useState(!1), [ce, de] = R.useState(!1), fe = R.useRef(!1), ke = R.useRef(null), { anchorRefs: we, setActiveAnchor: Ce } = Yc(e), G = R.useRef(!1), [K, ee] = R.useState([]), F = R.useRef(!1);
  R.useLayoutEffect(() => (F.current = !0, () => {
    F.current = !1;
  }), []), R.useEffect(() => {
    if (!J) {
      const se = setTimeout(() => {
        de(!1);
      }, 150);
      return () => {
        clearTimeout(se);
      };
    }
    return () => null;
  }, [J]);
  const pe = (se) => {
    F.current && (se && de(!0), setTimeout(() => {
      F.current && ($ == null || $(se), z === void 0 && U(se));
    }, 10));
  };
  R.useEffect(() => {
    if (z === void 0)
      return () => null;
    z && de(!0);
    const se = setTimeout(() => {
      U(z);
    }, 10);
    return () => {
      clearTimeout(se);
    };
  }, [z]), R.useEffect(() => {
    J !== fe.current && (fe.current = J, J ? w == null || w() : A == null || A());
  }, [J]);
  const ne = (se = p) => {
    P.current && clearTimeout(P.current), P.current = setTimeout(() => {
      G.current || pe(!1);
    }, se);
  }, me = (se) => {
    var Ne;
    if (!se)
      return;
    y ? (N.current && clearTimeout(N.current), N.current = setTimeout(() => {
      pe(!0);
    }, y)) : pe(!0);
    const Te = (Ne = se.currentTarget) !== null && Ne !== void 0 ? Ne : se.target;
    S(Te), Ce({ current: Te }), P.current && clearTimeout(P.current);
  }, le = () => {
    f ? ne(p || 100) : p ? ne() : pe(!1), N.current && clearTimeout(N.current);
  }, ue = ({ x: se, y: Ne }) => {
    Jo({ place: c, offset: o, elementReference: { getBoundingClientRect: () => ({ x: se, y: Ne, width: 0, height: 0, top: Ne, left: se, right: se, bottom: Ne }) }, tooltipReference: _.current, tooltipArrowReference: O.current, strategy: u, middlewares: d }).then((Te) => {
      Object.keys(Te.tooltipStyles).length && q(Te.tooltipStyles), Object.keys(Te.tooltipArrowStyles).length && j(Te.tooltipArrowStyles);
    });
  }, Le = (se) => {
    if (!se)
      return;
    const Ne = se, Te = { x: Ne.clientX, y: Ne.clientY };
    ue(Te), ke.current = Te;
  }, Ke = (se) => {
    me(se), p && ne();
  }, Se = (se) => {
    const Ne = document.querySelector(`[id='${r}']`);
    Ne != null && Ne.contains(se.target) || K.some((Te) => Te.contains(se.target)) || pe(!1);
  }, ye = (se) => {
    se.key === "Escape" && pe(!1);
  }, oe = Zo(me, 50), ie = Zo(le, 50);
  R.useEffect(() => {
    var se, Ne;
    const Te = new Set(we);
    K.forEach((nt) => {
      Te.add({ current: nt });
    });
    const B = document.querySelector(`[id='${r}']`);
    B && Te.add({ current: B }), b && window.addEventListener("keydown", ye);
    const Oe = [];
    s.find((nt) => nt === "click") && (window.addEventListener("click", Se), Oe.push({ event: "click", listener: Ke })), s.find((nt) => nt === "hover") && (Oe.push({ event: "mouseenter", listener: oe }, { event: "mouseleave", listener: ie }, { event: "focus", listener: oe }, { event: "blur", listener: ie }), v && Oe.push({ event: "mousemove", listener: Le }));
    const Ge = () => {
      G.current = !0;
    }, ct = () => {
      G.current = !1, le();
    };
    return f && ((se = _.current) === null || se === void 0 || se.addEventListener("mouseenter", Ge), (Ne = _.current) === null || Ne === void 0 || Ne.addEventListener("mouseleave", ct)), Oe.forEach(({ event: nt, listener: dt }) => {
      Te.forEach((at) => {
        var et;
        (et = at.current) === null || et === void 0 || et.addEventListener(nt, dt);
      });
    }), () => {
      var nt, dt;
      s.find((at) => at === "click") && window.removeEventListener("click", Se), b && window.removeEventListener("keydown", ye), f && ((nt = _.current) === null || nt === void 0 || nt.removeEventListener("mouseenter", Ge), (dt = _.current) === null || dt === void 0 || dt.removeEventListener("mouseleave", ct)), Oe.forEach(({ event: at, listener: et }) => {
        Te.forEach((Et) => {
          var qt;
          (qt = Et.current) === null || qt === void 0 || qt.removeEventListener(at, et);
        });
      });
    };
  }, [ce, we, K, b, s]), R.useEffect(() => {
    let se = l ?? "";
    !se && e && (se = `[data-tooltip-id='${e}']`);
    const Ne = new MutationObserver((Te) => {
      const B = [];
      Te.forEach((Oe) => {
        if (Oe.type === "attributes" && Oe.attributeName === "data-tooltip-id" && Oe.target.getAttribute("data-tooltip-id") === e && B.push(Oe.target), Oe.type === "childList" && (C && [...Oe.removedNodes].some((Ge) => !!Ge.contains(C) && (de(!1), pe(!1), S(null), !0)), se))
          try {
            const Ge = [...Oe.addedNodes].filter((ct) => ct.nodeType === 1);
            B.push(...Ge.filter((ct) => ct.matches(se))), B.push(...Ge.flatMap((ct) => [...ct.querySelectorAll(se)]));
          } catch {
          }
      }), B.length && ee((Oe) => [...Oe, ...B]);
    });
    return Ne.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Ne.disconnect();
    };
  }, [e, l, C]), R.useEffect(() => {
    k ? ue(k) : v ? ke.current && ue(ke.current) : Jo({ place: c, offset: o, elementReference: C, tooltipReference: _.current, tooltipArrowReference: O.current, strategy: u, middlewares: d }).then((se) => {
      F.current && (Object.keys(se.tooltipStyles).length && q(se.tooltipStyles), Object.keys(se.tooltipArrowStyles).length && j(se.tooltipArrowStyles));
    });
  }, [J, C, D, T, c, o, u, k]), R.useEffect(() => {
    var se;
    const Ne = document.querySelector(`[id='${r}']`), Te = [...K, Ne];
    C && Te.includes(C) || S((se = K[0]) !== null && se !== void 0 ? se : Ne);
  }, [r, K, C]), R.useEffect(() => () => {
    N.current && clearTimeout(N.current), P.current && clearTimeout(P.current);
  }, []), R.useEffect(() => {
    let se = l;
    if (!se && e && (se = `[data-tooltip-id='${e}']`), se)
      try {
        const Ne = Array.from(document.querySelectorAll(se));
        ee(Ne);
      } catch {
        ee([]);
      }
  }, [e, l]);
  const Fe = !!(T || D || m) && J && Object.keys(V).length > 0;
  return ce ? En.exports.jsxs(h, { id: e, role: "tooltip", className: Qo("react-tooltip", dn.tooltip, dn[a], t, { [dn.show]: Fe, [dn.fixed]: u === "fixed", [dn.clickable]: f }), style: { ...x, ...V }, ref: _, children: [T && En.exports.jsx(fy, { content: T }) || D || m, En.exports.jsx(h, { className: Qo("react-tooltip-arrow", dn.arrow, n, { [dn["no-arrow"]]: g }), style: I, ref: O })] }) : null;
}, py = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: r, className: l, classNameArrow: c, variant: o = "dark", place: s = "top", offset: u = 10, wrapper: d = "div", children: h = null, events: m = ["hover"], positionStrategy: y = "absolute", middlewares: p, delayShow: v = 0, delayHide: g = 0, float: f = !1, noArrow: b = !1, clickable: x = !1, closeOnEsc: k = !1, style: w, position: A, isOpen: D, setIsOpen: T, afterShow: z, afterHide: $ }) => {
  const [C, S] = R.useState(a), [_, O] = R.useState(r), [N, P] = R.useState(s), [V, q] = R.useState(o), [I, j] = R.useState(u), [J, U] = R.useState(v), [ce, de] = R.useState(g), [fe, ke] = R.useState(f), [we, Ce] = R.useState(d), [G, K] = R.useState(m), [ee, F] = R.useState(y), [pe, ne] = R.useState(null), { anchorRefs: me, activeAnchor: le } = Yc(e), ue = (Se) => Se == null ? void 0 : Se.getAttributeNames().reduce((ye, oe) => {
    var ie;
    return oe.startsWith("data-tooltip-") && (ye[oe.replace(/^data-tooltip-/, "")] = (ie = Se == null ? void 0 : Se.getAttribute(oe)) !== null && ie !== void 0 ? ie : null), ye;
  }, {}), Le = (Se) => {
    const ye = { place: (oe) => {
      var ie;
      P((ie = oe) !== null && ie !== void 0 ? ie : s);
    }, content: (oe) => {
      S(oe ?? a);
    }, html: (oe) => {
      O(oe ?? r);
    }, variant: (oe) => {
      var ie;
      q((ie = oe) !== null && ie !== void 0 ? ie : o);
    }, offset: (oe) => {
      j(oe === null ? u : Number(oe));
    }, wrapper: (oe) => {
      var ie;
      Ce((ie = oe) !== null && ie !== void 0 ? ie : d);
    }, events: (oe) => {
      const ie = oe == null ? void 0 : oe.split(" ");
      K(ie ?? m);
    }, "position-strategy": (oe) => {
      var ie;
      F((ie = oe) !== null && ie !== void 0 ? ie : y);
    }, "delay-show": (oe) => {
      U(oe === null ? v : Number(oe));
    }, "delay-hide": (oe) => {
      de(oe === null ? g : Number(oe));
    }, float: (oe) => {
      ke(oe === null ? f : !!oe);
    } };
    Object.values(ye).forEach((oe) => oe(null)), Object.entries(Se).forEach(([oe, ie]) => {
      var Fe;
      (Fe = ye[oe]) === null || Fe === void 0 || Fe.call(ye, ie);
    });
  };
  R.useEffect(() => {
    S(a);
  }, [a]), R.useEffect(() => {
    O(r);
  }, [r]), R.useEffect(() => {
    P(s);
  }, [s]), R.useEffect(() => {
    var Se;
    const ye = new Set(me);
    let oe = n;
    if (!oe && e && (oe = `[data-tooltip-id='${e}']`), oe)
      try {
        document.querySelectorAll(oe).forEach((Te) => {
          ye.add({ current: Te });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const ie = document.querySelector(`[id='${t}']`);
    if (ie && ye.add({ current: ie }), !ye.size)
      return () => null;
    const Fe = (Se = pe ?? ie) !== null && Se !== void 0 ? Se : le.current, se = new MutationObserver((Te) => {
      Te.forEach((B) => {
        var Oe;
        if (!Fe || B.type !== "attributes" || !(!((Oe = B.attributeName) === null || Oe === void 0) && Oe.startsWith("data-tooltip-")))
          return;
        const Ge = ue(Fe);
        Le(Ge);
      });
    }), Ne = { attributes: !0, childList: !1, subtree: !1 };
    if (Fe) {
      const Te = ue(Fe);
      Le(Te), se.observe(Fe, Ne);
    }
    return () => {
      se.disconnect();
    };
  }, [me, le, pe, t, n]);
  const Ke = { id: e, anchorId: t, anchorSelect: n, className: l, classNameArrow: c, content: C, html: _, place: N, variant: V, offset: I, wrapper: we, events: G, positionStrategy: ee, middlewares: p, delayShow: J, delayHide: ce, float: fe, noArrow: b, clickable: x, closeOnEsc: k, style: w, position: A, isOpen: D, setIsOpen: T, afterShow: z, afterHide: $, activeAnchor: pe, setActiveAnchor: (Se) => ne(Se) };
  return h ? En.exports.jsx(Go, { ...Ke, children: h }) : En.exports.jsx(Go, { ...Ke });
}, ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  curveLinear: Si,
  curveLinearClosed: zs,
  curveMonotoneX: Ka,
  curveMonotoneY: sd,
  curveNatural: cd,
  curveStep: ud,
  curveStepAfter: fd,
  curveStepBefore: dd
}, Symbol.toStringTag, { value: "Module" })), yy = (e) => {
  var w;
  const { xScale: t, yScale: n, yMax: a, xMax: r, handleTooltipMouseOver: l, handleTooltipMouseOff: c, isDebug: o, children: s } = e;
  let { transformedData: u, config: d, handleLineType: h, parseDate: m, formatDate: y, formatNumber: p, seriesHighlight: v, colorScale: g, rawData: f } = R.useContext(Re);
  const b = d.brush.active && ((w = d.brush.data) != null && w.length) ? d.brush.data : u;
  if (!b)
    return;
  const x = (A) => d.xAxis.type === "date" ? t(m(A[d.xAxis.dataKey], !1)) : t(A[d.xAxis.dataKey]), k = (A, D, T = void 0) => n(A[T.dataKey]);
  return b && /* @__PURE__ */ i.createElement("svg", null, /* @__PURE__ */ i.createElement($t, { component: "AreaChart" }, /* @__PURE__ */ i.createElement(ve, { className: "area-chart", key: "area-wrapper", left: Number(d.yAxis.size) }, (d.runtime.areaSeriesKeys || d.series).map((A, D) => {
    let T = b.map((S) => ({
      [d.xAxis.dataKey]: S[d.xAxis.dataKey],
      [A.dataKey]: S[A.dataKey]
    })), z = ol[A.lineType], $ = d.legend.behavior === "highlight" && v.length > 0 && v.indexOf(A.dataKey) === -1, C = d.legend.behavior === "highlight" || v.length === 0 || v.indexOf(A.dataKey) !== -1;
    return d.xAxis.type === "date" ? b.map((S) => t(m(S[d.xAxis.dataKey]))) : b.map((S) => t(S[d.xAxis.dataKey])), /* @__PURE__ */ i.createElement(i.Fragment, { key: D }, /* @__PURE__ */ i.createElement(
      An,
      {
        data: T,
        x: (S) => x(S),
        y: (S) => k(S, D, A),
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
        x: (S) => x(S),
        y: (S) => k(S, D, A),
        yScale: n,
        curve: z,
        strokeDasharray: A.type ? h(A.type) : 0
      }
    ));
  }), /* @__PURE__ */ i.createElement(Nt, { width: Number(r), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (A) => l(A, f), onMouseLeave: c }))));
}, gy = R.memo(yy), vi = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, xy = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: r, handleTooltipMouseOff: l, isDebug: c }) => {
  var v;
  let { transformedData: o, config: s, seriesHighlight: u, colorScale: d, rawData: h } = R.useContext(Re);
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
  return m && /* @__PURE__ */ i.createElement("svg", { height: Number(n) }, /* @__PURE__ */ i.createElement($t, { component: "AreaChartStacked" }, /* @__PURE__ */ i.createElement(ve, { className: "area-chart", key: "area-wrapper", left: Number(s.yAxis.size) + p / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ i.createElement(
    Id,
    {
      data: m,
      keys: s.runtime.areaSeriesKeys.map((g) => g.dataKey) || s.series.map((g) => g.dataKey),
      x0: (g) => y(g.data[s.xAxis.dataKey]),
      y0: (g) => Number(t(g[0])),
      y1: (g) => Number(t(g[1])),
      curve: ol[vi[s.stackedAreaChartLineType]]
    },
    ({ stacks: g, path: f }) => g.map((b, x) => {
      let k = s.legend.behavior === "highlight" && u.length > 0 && u.indexOf(b.key) === -1, w = s.legend.behavior === "highlight" || u.length === 0 || u.indexOf(b.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          "path",
          {
            key: b.key,
            d: f(b) || "",
            strokeWidth: 2,
            stroke: w ? d ? d(s.runtime.seriesLabels ? s.runtime.seriesLabels[b.key] : b.key) : "#000" : "transparent",
            fillOpacity: k ? 0.25 : 0.5,
            fill: w ? d ? d(s.runtime.seriesLabels ? s.runtime.seriesLabels[b.key] : b.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ i.createElement(Nt, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (g) => r(g, h), onMouseLeave: l }))));
}, vy = R.memo(xy), ka = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: r, formatDate: l } = R.useContext(Re), { orientation: c } = e, o = c === "horizontal", s = 1, u = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, d = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, h = e.yAxis.labelPlacement === "Below Bar", m = e.yAxis.displayNumbersOnBar, y = e.orientation === "horizontal" ? "yAxis" : "xAxis", p = e.barStyle === "rounded", v = e.visualizationSubType === "stacked", g = e.tipRounding, f = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", b = e.runtime.seriesKeys.length, x = { small: 16, medium: 18, large: 20 }, k = Object.keys(e.runtime.seriesLabels).length > 1;
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
    hasMultipleSeries: k,
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
      let S;
      const _ = {
        stacked: e.barHeight,
        lollipop: u
      };
      v ? S = _.stacked : S = _[e.isLollipopChart ? "lollipop" : "stacked"] * b;
      const O = h ? x[e.fontSize] * 1.2 : 0;
      let N = Number(e.barSpace), P = C.length * (S + O + N);
      return o && (e.heights.horizontal = P), C.map((V, q) => {
        let I = 0;
        return V.index !== 0 && (I = (S + N + O) * q), { ...V, y: I, height: S };
      });
    },
    assignColorsToValues: ($, C, S) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return S;
      const _ = e.customColors ?? t[e.palette], O = n.map((q) => q[e.legend.colorCode]);
      let N = /* @__PURE__ */ new Map(), P = [];
      for (let q = 0; q < O.length; q++)
        N.has(O[q]) || N.set(O[q], _[N.size % _.length]), P.push(N.get(O[q]));
      for (; P.length < $; )
        P = P.concat(P);
      return P[C];
    },
    getHighlightedBarColorByValue: ($) => {
      const C = e == null ? void 0 : e.highlightedBarValues.filter((S) => {
        if (S.value)
          return e.xAxis.type === "date" ? l(r(S.value)) === $ : S.value === $;
      })[0];
      return C != null && C.color ? C.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: ($) => {
      const C = e == null ? void 0 : e.highlightedBarValues.filter((S) => {
        if (S.value)
          return e.xAxis.type === "date" ? l(r(S.value)) === $ : S.value === $;
      })[0];
      return C != null && C.color ? C : !1;
    }
  };
}, by = (e) => {
  var x;
  const { xScale: t, yScale: n, xMax: a, yMax: r } = e, { transformedData: l, colorScale: c, seriesHighlight: o, config: s, formatNumber: u, formatDate: d, parseDate: h, setSharedFilter: m } = R.useContext(Re), { isHorizontal: y, barBorderWidth: p, hasMultipleSeries: v, applyRadius: g } = ka(), { orientation: f } = s, b = s.brush.active && ((x = s.brush.data) != null && x.length) ? s.brush.data : l;
  return s.visualizationSubType === "stacked" && !y && /* @__PURE__ */ i.createElement(Qd, { data: b, keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys, x: (k) => k[s.runtime.xAxis.dataKey], xScale: t, yScale: n, color: c }, (k) => k.reverse().map(
    (w) => w.bars.map((A) => {
      let D = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(A.key) === -1, T = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(A.key) !== -1, z = a / w.bars.length, $ = z * (s.barThickness || 0.8), C = z * (1 - (s.barThickness || 0.8)) / 2;
      const S = s.runtime.xAxis.type === "date" ? d(h(b[A.index][s.runtime.xAxis.dataKey])) : b[A.index][s.runtime.xAxis.dataKey], _ = u(A.bar ? A.bar.data[A.key] : 0, "left");
      if (!_)
        return /* @__PURE__ */ i.createElement(i.Fragment, null);
      const O = g(w.index);
      let N = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${_}` : _;
      const P = s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${S}` : S;
      v || (N = s.isLegendValue ? `${A.key}: ${_}` : s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${_}` : _);
      const {
        legend: { showLegendValuesTooltip: V },
        runtime: { seriesLabels: q }
      } = s, I = `<div>
                    <p class="tooltip-heading"><strong>${P}</strong></p>
                    ${V && q && v ? `${q[A.key] || ""}<br/>` : ""}
                    ${N}<br />
                      </div>`;
      return /* @__PURE__ */ i.createElement(ve, { key: `${w.index}--${A.index}--${f}` }, /* @__PURE__ */ i.createElement("style", null, `
                           #barStack${w.index}-${A.index} rect,
                           #barStack${w.index}-${A.index} foreignObject div{
                            animation-delay: ${w.index * 0.5}s;
                            transform-origin: ${$ / 2}px ${A.y + A.height}px
                          }
                        `), /* @__PURE__ */ i.createElement(ve, { key: `bar-stack-${w.index}-${A.index}`, id: `barStack${w.index}-${A.index}`, className: "stack vertical" }, /* @__PURE__ */ i.createElement(ze, { display: s.labels && T ? "block" : "none", opacity: D ? 0.5 : 1, x: z * A.index + C, y: A.y - 5, fill: "#000", textAnchor: "middle" }, _), /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          key: `bar-stack-${w.index}-${A.index}`,
          x: z * A.index + C,
          y: A.y,
          width: $,
          height: A.height,
          display: T ? "block" : "none",
          "data-tooltip-html": I,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (j) => {
            j.preventDefault(), m && (A[s.xAxis.dataKey] = S, m(s.uid, A));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { opacity: D ? 0.5 : 1, width: $, height: A.height, background: A.color, border: `${s.barHasBorder === "true" ? p : 0}px solid #333`, ...O } })
      )));
    })
  ));
}, Ey = (e) => {
  const { xScale: t, yScale: n, xMax: a, yMax: r } = e, { transformedData: l, colorScale: c, seriesHighlight: o, config: s, formatNumber: u, formatDate: d, parseDate: h, setSharedFilter: m, animatedChart: y, getTextWidth: p } = R.useContext(Re), { isHorizontal: v, barBorderWidth: g, hasMultipleSeries: f, applyRadius: b, updateBars: x, isLabelBelowBar: k, displayNumbersOnBar: w, fontSize: A } = ka(), { orientation: D, visualizationSubType: T } = s;
  return s.visualizationSubType === "stacked" && v && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Gd, { data: l, keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys, height: r, y: (z) => z[s.runtime.yAxis.dataKey], xScale: t, yScale: n, color: c, offset: "none" }, (z) => z.map(
    ($) => x($.bars).map((C, S) => {
      let _ = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(C.key) === -1, O = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(C.key) !== -1;
      s.barHeight = Number(s.barHeight);
      let N = "#000000";
      const P = u(l[C.index][C.key], "left"), V = s.runtime.yAxis.type === "date" ? d(h(l[C.index][s.runtime.originalXAxis.dataKey])) : l[C.index][s.runtime.originalXAxis.dataKey], q = b($.index);
      let I = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${V}` : V, j = s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${P}` : P, J = p(P, `normal ${A[s.fontSize]}px sans-serif`);
      f || (j = s.isLegendValue ? `${C.key}: ${P}` : s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${P}` : j);
      const U = `<div>
                    ${s.legend.showLegendValuesTooltip && s.runtime.seriesLabels && f ? `${s.runtime.seriesLabels[C.key] || ""}<br/>` : ""}
                    ${I}<br />
                    ${j}
                      </div>`;
      return Xt.contrast(N, C.color) < 4.9 && (N = "#FFFFFF"), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                         #barStack${$.index}-${C.index} rect,
                         #barStack${$.index}-${C.index} foreignObject div{
                          animation-delay: ${$.index * 0.5}s;
                          transform-origin: ${C.x}px
                        }
                      `), /* @__PURE__ */ i.createElement(ve, { key: S, id: `barStack${$.index}-${C.index}`, className: "stack horizontal" }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          key: `barstack-horizontal-${$.index}-${C.index}-${S}`,
          className: `animated-chart group ${y ? "animated" : ""}`,
          x: C.x,
          y: C.y,
          width: C.width,
          height: C.height,
          opacity: _ ? 0.5 : 1,
          display: O ? "block" : "none",
          "data-tooltip-html": U,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (ce) => {
            ce.preventDefault(), m && (C[s.xAxis.dataKey] = P, m(s.uid, C));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { width: C.width, height: C.height, background: C.color, border: `${s.barHasBorder === "true" ? g : 0}px solid #333`, ...q } })
      ), D === "horizontal" && T === "stacked" && k && $.index === 0 && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        ze,
        {
          x: `${C.x + (s.isLollipopChart ? 15 : 5)}`,
          y: C.y + C.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        V
      ), w && J < C.width && /* @__PURE__ */ i.createElement(
        ze,
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
}, _i = (e, t) => {
  var v;
  const { formatDate: n, parseDate: a } = R.useContext(Re);
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
      const { legendLabel: k } = x;
      return f[k] ? !1 : (f[k] = !0, !0);
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
  } = R.useContext(Re), { barBorderWidth: b, hasMultipleSeries: x, applyRadius: k, updateBars: w, assignColorsToValues: A, section: D, lollipopBarWidth: T, lollipopShapeSize: z, getHighlightedBarColorByValue: $, getHighlightedBarByValue: C } = ka(), { HighLightedBarUtils: S } = _i(o), _ = o.brush.active && ((O = o.brush.data) != null && O.length) ? o.brush.data : g;
  return o.visualizationSubType !== "stacked" && (o.visualizationType === "Bar" || o.visualizationType === "Combo") && o.orientation === "vertical" && /* @__PURE__ */ i.createElement(ve, null, /* @__PURE__ */ i.createElement(
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
    (N) => w(N).map((P, V) => /* @__PURE__ */ i.createElement(ve, { className: `bar-group-${P.index}-${P.x0}--${V} ${o.orientation}`, key: `bar-group-${P.index}-${P.x0}--${V}`, id: `bar-group-${P.index}-${P.x0}--${V}`, left: a / N.length * P.index }, P.bars.map((q, I) => {
      const j = o.useLogScale ? 0.1 : 0;
      let J = o.highlightedBarValues.map((Te) => Te.value).filter((Te) => Te !== void 0);
      J = o.xAxis.type === "date" ? S.formatDates(J) : J;
      let U = o.legend.behavior === "highlight" && p.length > 0 && p.indexOf(q.key) === -1, ce = o.legend.behavior === "highlight" || p.length === 0 || p.indexOf(q.key) !== -1, de = Math.abs(n(q.value) - n(j)), fe = q.value >= 0 && m(q.value) ? q.y : n(0), ke = a / N.length * (o.barThickness || 0.8), we = a / N.length * (1 - (o.barThickness || 0.8)) / 2;
      o.isLollipopChart && (we = a / N.length / 2 - T / 2);
      let Ce = o.isLollipopChart ? T : ke / P.bars.length, G = u(q.value, "left"), K = o.runtime[D].type === "date" ? s(y(_[P.index][o.runtime.originalXAxis.dataKey])) : _[P.index][o.runtime.originalXAxis.dataKey];
      const ee = q.value < 0 ? -1 : I, F = k(ee);
      let pe = o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${G}` : G, ne = o.runtime.xAxis.label ? `${o.runtime.xAxis.label}: ${K}` : K;
      x || (pe = o.isLegendValue ? `${q.key}: ${G}` : o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${G}` : G);
      const me = `<ul>
                  ${o.legend.showLegendValuesTooltip && o.runtime.seriesLabels && x ? `${o.runtime.seriesLabels[q.key] || ""}<br/>` : ""}
                  <li class="tooltip-heading">${pe}</li>
                  <li class="tooltip-body">${ne}</li>
                    </li></ul>`;
      let le = "#000000";
      le = S.checkFontColor(G, J, le);
      let ue = o.runtime.seriesLabels && o.runtime.seriesLabels[q.key] ? c(o.runtime.seriesLabels[q.key]) : c(q.key);
      ue = A(N.length, P.index, ue);
      const Le = o.isLollipopChart && o.lollipopColorStyle === "regular", Ke = o.isLollipopChart && o.lollipopColorStyle === "two-tone", Se = J == null ? void 0 : J.includes(K), ye = $(K), oe = C(K), ie = Se ? ye : o.barHasBorder === "true" ? "#000" : "transparent", Fe = Se ? oe.borderWidth : o.isLollipopChart ? 0 : o.barHasBorder === "true" ? b : 0, Ne = {
        background: ((Te) => Le ? Te : Ke ? Xt(Te).brighten(1) : Se ? "transparent" : Te)(ue),
        borderColor: ie,
        borderStyle: "solid",
        borderWidth: Fe,
        width: Ce,
        height: de,
        ...F,
        cursor: f ? "pointer" : "default"
      };
      return /* @__PURE__ */ i.createElement(ve, { key: `${P.index}--${I}` }, /* @__PURE__ */ i.createElement("style", null, `
                        .linear #barGroup${P.index} div,
                        .Combo #barGroup${P.index} div {
                          transform-origin: 0 ${fe + de}px;
                        }
                      `), /* @__PURE__ */ i.createElement(ve, { key: `bar-sub-group-${P.index}-${P.x0}-${fe}--${I}` }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          id: `barGroup${P.index}`,
          key: `bar-group-bar-${P.index}-${q.index}-${q.value}-${q.key}`,
          x: Ce * q.index + we,
          y: fe,
          width: Ce,
          height: de,
          opacity: U ? 0.5 : 1,
          display: ce ? "block" : "none",
          "data-tooltip-html": me,
          "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
          onClick: (Te) => {
            Te.preventDefault(), v && (q[o.xAxis.dataKey] = K, v(o.uid, q));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: Ne })
      ), /* @__PURE__ */ i.createElement(ze, { display: o.labels && ce ? "block" : "none", opacity: U ? 0.5 : 1, x: Ce * (q.index + 0.5) + we, y: fe - 5, fill: le, textAnchor: "middle" }, G), o.isLollipopChart && o.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: Ce * (P.bars.length - q.index - 1) + we + z / 3.5,
          cy: q.y,
          r: z / 2,
          fill: ue,
          key: `circle--${q.index}`,
          "data-tooltip-html": me,
          "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), o.isLollipopChart && o.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          x: we - T / 2,
          y: fe,
          width: z,
          height: z,
          fill: ue,
          key: `circle--${q.index}`,
          "data-tooltip-html": me,
          "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${z}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(o.confidenceKeys).length > 0 ? _.map((N) => {
    let P, V, q, I, j = 5;
    return P = t(d(N)), q = n(h(N, o.confidenceKeys.lower)), I = n(h(N, o.confidenceKeys.upper)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-v-${V}-${N[o.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${P - j} ${q}
                    L${P + j} ${q}
                    M${P} ${q}
                    L${P} ${I}
                    M${P - j} ${I}
                    L${P + j} ${I}`
      }
    );
  }) : "");
}, Ty = (e) => {
  const { xScale: t, yScale: n, yMax: a, seriesScale: r } = e, { transformedData: l, colorScale: c, seriesHighlight: o, config: s, formatNumber: u, formatDate: d, parseDate: h, setSharedFilter: m, isNumber: y, getTextWidth: p, getYAxisData: v, getXAxisData: g } = R.useContext(Re), { isHorizontal: f, barBorderWidth: b, hasMultipleSeries: x, applyRadius: k, updateBars: w, assignColorsToValues: A, section: D, fontSize: T, isLabelBelowBar: z, displayNumbersOnBar: $, lollipopBarWidth: C, lollipopShapeSize: S, getHighlightedBarColorByValue: _, getHighlightedBarByValue: O } = ka(), { HighLightedBarUtils: N } = _i(s);
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ i.createElement(ve, null, /* @__PURE__ */ i.createElement(
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
    (P) => w(P).map((V, q) => /* @__PURE__ */ i.createElement(ve, { className: `bar-group-${V.index}-${V.x0}--${q} ${s.orientation}`, key: `bar-group-${V.index}-${V.x0}--${q}`, id: `bar-group-${V.index}-${V.x0}--${q}`, top: V.y }, V.bars.map((I, j) => {
      const J = s.useLogScale ? 0.1 : 0;
      let U = s.highlightedBarValues.map((et) => et.value).filter((et) => et !== void 0);
      U = s.xAxis.type === "date" ? N.formatDates(U) : U;
      let ce = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(I.key) === -1, de = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(I.key) !== -1, fe = s.barHeight, ke = I.value >= 0 && y(I.value) ? I.y : n(0);
      const we = I.value < 0 ? Math.abs(t(I.value)) : t(0), Ce = Math.abs(t(I.value) - t(J)), G = s.barHeight, K = u(I.value, "left"), ee = s.runtime[D].type === "date" ? d(h(l[V.index][s.runtime.originalXAxis.dataKey])) : l[V.index][s.runtime.originalXAxis.dataKey], F = I.value < 0 ? "below" : "above";
      let ne = p(ee, `normal ${T[s.fontSize]}px sans-serif`) < Ce - 5, me = ne ? "end" : "start", le = "start", ue = ne ? -5 : 5, Le = 10;
      F === "below" && (me = ne ? "start" : "end", ue = ne ? 5 : -5, s.isLollipopChart && (le = "end", Le = -10));
      const Ke = I.value < 0 ? -1 : j, Se = k(Ke);
      let ye = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${K}` : K, oe = s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${ee}` : ee;
      x || (oe = s.isLegendValue ? `<p className="tooltip-heading">${I.key}: ${ee}</p>` : s.runtime.xAxis.label ? `<p className="tooltip-heading">${s.runtime.xAxis.label}: ${ee}</p>` : ee);
      const ie = `<ul>
                  ${s.legend.showLegendValuesTooltip && s.runtime.seriesLabels && x ? `${s.runtime.seriesLabels[I.key] || ""}<br/>` : ""}
                  <li class="tooltip-heading">${ye}</li>
                  <li class="tooltip-body">${oe}</li>
                    </li></ul>`;
      let Fe = "#000000";
      Fe = N.checkFontColor(K, U, Fe);
      let se = s.runtime.seriesLabels && s.runtime.seriesLabels[I.key] ? c(s.runtime.seriesLabels[I.key]) : c(I.key);
      se = A(P.length, V.index, se);
      const Ne = s.isLollipopChart && s.lollipopColorStyle === "regular", Te = s.isLollipopChart && s.lollipopColorStyle === "two-tone", B = U == null ? void 0 : U.includes(K), Oe = _(K), Ge = O(K), ct = B ? Oe : s.barHasBorder === "true" ? "#000" : "transparent", nt = B ? Ge.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? b : 0;
      se && Fe && Xt.contrast(Fe, se) < 4.9 && (Fe = ne ? "#FFFFFF" : "#000000");
      const at = {
        background: (() => Ne ? se : Te ? Xt(se).brighten(1) : B ? "transparent" : se)(),
        borderColor: ct,
        borderStyle: "solid",
        borderWidth: nt,
        width: Ce,
        height: s.isLollipopChart ? C : G,
        ...Se
      };
      return /* @__PURE__ */ i.createElement(ve, { key: `${V.index}--${j}` }, /* @__PURE__ */ i.createElement("style", null, `
                        .linear #barGroup${V.index} div,
                        .Combo #barGroup${V.index} div {
                          transform-origin: 0 ${ke + fe}px;
                        }
                      `), /* @__PURE__ */ i.createElement(ve, { key: `bar-sub-group-${V.index}-${V.x0}-${ke}--${j}` }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          id: `barGroup${V.index}`,
          key: `bar-group-bar-${V.index}-${I.index}-${I.value}-${I.key}`,
          x: we,
          y: G * I.index,
          width: Ce,
          height: s.isLollipopChart ? C : G,
          opacity: ce ? 0.5 : 1,
          display: de ? "block" : "none",
          "data-tooltip-html": ie,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (et) => {
            et.preventDefault(), m && (I[s.xAxis.dataKey] = K, m(s.uid, I));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: at })
      ), !s.isLollipopChart && $ && /* @__PURE__ */ i.createElement(
        ze,
        {
          display: de ? "block" : "none",
          x: I.y,
          y: s.barHeight / 2 + s.barHeight * I.index,
          fill: Fe,
          dx: ue,
          verticalAnchor: "middle",
          textAnchor: me
        },
        K
      ), s.isLollipopChart && $ && /* @__PURE__ */ i.createElement(
        ze,
        {
          display: de ? "block" : "none",
          x: I.y,
          y: 0,
          fill: "#000000",
          dx: Le,
          textAnchor: le,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        K
      ), z && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(ze, { x: s.yAxis.hideAxis ? 0 : 5, y: V.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? d(h(l[V.index][s.runtime.originalXAxis.dataKey])) : f ? l[V.index][s.runtime.originalXAxis.dataKey] : u(l[V.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: I.y, cy: 0 + C / 2, r: S / 2, fill: se, key: `circle--${I.index}`, "data-tooltip-html": ie, "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`, style: { filter: "unset", opacity: 1 } }), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          x: I.y > 10 ? I.y - S / 2 : 0,
          y: 0 - C / 2,
          width: S,
          height: S,
          fill: se,
          key: `circle--${I.index}`,
          "data-tooltip-html": ie,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${S}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? l.map((P) => {
    let V, q, I, j = 5;
    return V = n(g(P)) - 0.75 * s.barHeight, q = t(v(P, s.confidenceKeys.upper)), I = t(v(P, s.confidenceKeys.lower)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-h-${V}-${P[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${I} ${V - j}
                    L${I} ${V + j}
                    M${I} ${V}
                    L${q} ${V}
                    M${q} ${V - j}
                    L${q} ${V + j} `
      }
    );
  }) : "");
}, Wa = {
  Vertical: Ay,
  Horizontal: Ty,
  StackedVertical: by,
  StackedHorizontal: Ey
}, ky = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: r, handleTooltipMouseOver: l, handleTooltipMouseOff: c, handleTooltipClick: o }) => {
  const { transformedData: s, config: u } = R.useContext(Re);
  return /* @__PURE__ */ i.createElement($t, { component: "BarChart" }, /* @__PURE__ */ i.createElement(ve, { left: parseFloat(u.runtime.yAxis.size) }, /* @__PURE__ */ i.createElement(Wa.StackedVertical, { xScale: e, yScale: t, xMax: a, yMax: r }), /* @__PURE__ */ i.createElement(Wa.StackedHorizontal, { xScale: e, yScale: t, xMax: a, yMax: r }), /* @__PURE__ */ i.createElement(Wa.Vertical, { xScale: e, yScale: t, xMax: a, yMax: r, seriesScale: n }), /* @__PURE__ */ i.createElement(Wa.Horizontal, { xScale: e, yScale: t, xMax: a, yMax: r, seriesScale: n }), /* @__PURE__ */ i.createElement(Nt, { key: "bars", width: Number(a), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (d) => l(d, s), onMouseOut: c, onClick: (d) => o(d, s) })));
};
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Gt.apply(this, arguments);
}
function fn(e) {
  var t = e.x1, n = e.x2, a = e.y1, r = e.y2;
  return {
    x1: a,
    x2: r,
    y1: t,
    y2: n
  };
}
function Xc(e) {
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, r = a === void 0 ? 0 : a, l = e.className, c = e.max, o = e.min, s = e.firstQuartile, u = e.thirdQuartile, d = e.median, h = e.boxWidth, m = h === void 0 ? 10 : h, y = e.fill, p = e.fillOpacity, v = e.stroke, g = e.strokeWidth, f = e.rx, b = f === void 0 ? 2 : f, x = e.ry, k = x === void 0 ? 2 : x, w = e.valueScale, A = e.outliers, D = A === void 0 ? [] : A, T = e.horizontal, z = e.medianProps, $ = z === void 0 ? {} : z, C = e.maxProps, S = C === void 0 ? {} : C, _ = e.minProps, O = _ === void 0 ? {} : _, N = e.boxProps, P = N === void 0 ? {} : N, V = e.outlierProps, q = V === void 0 ? {} : V, I = e.container, j = I === void 0 ? !1 : I, J = e.containerProps, U = J === void 0 ? {} : J, ce = e.children, de = T ? r : n, fe = de + (m || 0) / 2, ke = w.range(), we = w(o ?? 0), Ce = w(s ?? 0), G = w(d ?? 0), K = w(u ?? 0), ee = w(c ?? 0), F = {
    valueRange: ke,
    center: fe,
    offset: de,
    boxWidth: m,
    max: {
      x1: fe - (m || 0) / 4,
      x2: fe + (m || 0) / 4,
      y1: ee,
      y2: ee
    },
    maxToThird: {
      x1: fe,
      x2: fe,
      y1: ee,
      y2: K
    },
    median: {
      x1: de,
      x2: de + (m || 0),
      y1: G,
      y2: G
    },
    minToFirst: {
      x1: fe,
      x2: fe,
      y1: Ce,
      y2: we
    },
    min: {
      x1: fe - (m || 0) / 4,
      x2: fe + (m || 0) / 4,
      y1: we,
      y2: we
    },
    box: {
      x1: de,
      x2: m || 0,
      y1: K,
      y2: Math.abs(K - Ce)
    },
    container: {
      x1: de,
      x2: m || 0,
      y1: Math.min.apply(Math, ke),
      y2: Math.abs(ke[0] - ke[1])
    }
  };
  return T && (F.max = fn(F.max), F.maxToThird = fn(F.maxToThird), F.box.y1 = Ce, F.box = fn(F.box), F.median = fn(F.median), F.minToFirst = fn(F.minToFirst), F.min = fn(F.min), F.container = fn(F.container), F.container.y1 = Math.min.apply(Math, ke)), ce ? /* @__PURE__ */ i.createElement(i.Fragment, null, ce(F)) : /* @__PURE__ */ i.createElement(ve, {
    className: Ze("visx-boxplot", l)
  }, D.map(function(pe, ne) {
    var me = T ? w(pe) : fe, le = T ? fe : w(pe);
    return /* @__PURE__ */ i.createElement("circle", Gt({
      key: "visx-boxplot-outlier-" + ne,
      className: "visx-boxplot-outlier",
      cx: me,
      cy: le,
      r: 4,
      stroke: v,
      strokeWidth: g,
      fill: y,
      fillOpacity: p
    }, q));
  }), /* @__PURE__ */ i.createElement("line", Gt({
    className: "visx-boxplot-max",
    x1: F.max.x1,
    y1: F.max.y1,
    x2: F.max.x2,
    y2: F.max.y2,
    stroke: v,
    strokeWidth: g
  }, S)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: F.maxToThird.x1,
    y1: F.maxToThird.y1,
    x2: F.maxToThird.x2,
    y2: F.maxToThird.y2,
    stroke: v,
    strokeWidth: g
  }), /* @__PURE__ */ i.createElement("rect", Gt({
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
    ry: k
  }, P)), /* @__PURE__ */ i.createElement("line", Gt({
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
  }), /* @__PURE__ */ i.createElement("line", Gt({
    className: "visx-boxplot-min",
    x1: F.min.x1,
    y1: F.min.y1,
    x2: F.min.x2,
    y2: F.min.y2,
    stroke: v,
    strokeWidth: g
  }, O)), j && /* @__PURE__ */ i.createElement("rect", Gt({
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
const Sy = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: a } = R.useContext(Re);
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
    `, c = (v) => Number(v.columnMax), o = (v) => Number(v.columnMin), s = (v) => Number(v.columnMedian), u = (v) => Number(v.columnThirdQuartile), d = (v) => Number(v.columnFirstQuartile), h = 0.5, m = e.bandwidth(), y = Math.min(40, m), p = tn[n == null ? void 0 : n.palette][0] ? tn[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ i.createElement($t, { component: "BoxPlot" }, /* @__PURE__ */ i.createElement(ve, { className: "boxplot", key: "boxplot-group" }, n.boxplot.plots.map((v, g) => {
    const f = m - y, b = 4;
    return /* @__PURE__ */ i.createElement(ve, { key: `boxplotplot-${g}` }, n.boxplot.plotNonOutlierValues && v.nonOutlierValues.map((x, k) => /* @__PURE__ */ i.createElement("circle", { cx: e(v.columnCategory) + Number(n.yAxis.size) + m / 2, cy: t(x), r: b, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${g}--circle-${k}` })), /* @__PURE__ */ i.createElement(
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
  const { colorScale: r, transformedData: l, config: c, formatNumber: o, seriesHighlight: s, colorPalettes: u } = R.useContext(Re);
  let d = 4.5;
  const h = Object.keys(c.runtime.seriesLabels).length > 1, m = (y, p) => `<div>
    ${c.legend.showLegendValuesTooltip && c.runtime.seriesLabels && h ? `${c.runtime.seriesLabels[p] || ""}<br/>` : ""}
    ${c.xAxis.label}: ${o(y[c.xAxis.dataKey], "bottom")} <br/>
    ${c.yAxis.label}: ${o(y[p], "left")}
</div>`;
  return /* @__PURE__ */ i.createElement(ve, { className: "scatter-plot", left: c.yAxis.size }, l.map((y, p) => c.runtime.seriesKeys.map((v, g) => {
    const f = c.legend.behavior === "highlight" && s.length > 0 && s.indexOf(v) === -1, b = c.legend.behavior === "highlight" || s.length === 0 || s.indexOf(v) !== -1, x = c.palette ? u[c.palette][g] : "#000";
    let k = {
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
        style: k,
        "data-tooltip-html": m(y, v),
        "data-tooltip-id": `cdc-open-viz-tooltip-${c.runtime.uniqueId}`
      }
    );
  })));
};
function Cy({ height: e, xScale: t }) {
  var I;
  const { transformedData: n, config: a, formatNumber: r, twoColorPalette: l, getTextWidth: c, updateConfig: o, parseDate: s, formatDate: u, currentViewport: d } = R.useContext(Re), { barStyle: h, tipRounding: m, roundingStyle: y, twoColor: p } = a, v = R.useRef([]), [g, f] = R.useState(window.innerWidth), b = y === "standard" ? "8px" : y === "shallow" ? "5px" : y === "finger" ? "15px" : "0px", x = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const k = Number(a.xAxis.target), w = a.series[0].dataKey, A = Number(t.domain()[1]), T = n.some((j) => j[w] < 0) || k > 0 || t.domain()[0] < 0, z = a.barHasBorder === "true" ? 1 : 0, $ = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, C = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, S = Math.max(t(0), Math.min(t(k), t(A))), _ = (j) => {
    if (j == null || h !== "rounded")
      return;
    let J = {};
    return j === "left" && (J = { borderRadius: `${b} 0 0 ${b}` }), j === "right" && (J = { borderRadius: `0 ${b} ${b} 0` }), m === "full" && (J = { borderRadius: b }), J;
  }, O = {
    calculate: function() {
      const J = n[0][w] < k ? "left" : "right", U = `${a.xAxis.targetLabel} ${r(a.xAxis.target || 0, "left")}`, ce = c(U, `bold ${x[a.fontSize]}px sans-serif`);
      let de = a.isLollipopChart ? $ / 2 : Number(a.barHeight) / 2, fe = 0, ke = 0, we = !1;
      J === "right" && (fe = -10, we = ce - fe < S, ke = S - ce), J === "left" && (fe = 10, we = t(A) - S > ce + fe, ke = S), this.text = U, this.y = de, this.x = ke, this.padding = fe, this.showLabel = a.xAxis.showTargetLabel ? we : !1;
    }
  };
  O.calculate();
  const N = R.useRef(null), P = il(N, {});
  R.useEffect(() => {
    const j = () => {
      f(window.innerWidth), v.current.forEach((J) => {
        J.style.transition = "none", J.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", j), () => {
      window.removeEventListener("resize", j);
    };
  }, []);
  const [V, q] = R.useState(!1);
  return R.useEffect(() => {
    P != null && P.isIntersecting && setTimeout(() => {
      q(!0);
    }, 100);
  }, [P == null ? void 0 : P.isIntersecting, a.animate]), R.useEffect(() => {
    v.current.forEach((j, J) => {
      if (a.animate) {
        const U = k / A * 100;
        j.style.opacity = "0", j.style.transform = `translate(${U / 1.07}%) scale(0, 1)`, setTimeout(() => {
          j.style.opacity = "1", j.style.transform = "translate(0) scale(1)", j.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        j.style.transition = "none", j.style.opacity = "0";
      a.animate || (j.style.transition = "none", j.style.opacity = "1");
    });
  }, [a.animate, a, V]), !a || ((I = a == null ? void 0 : a.series) == null ? void 0 : I.length) !== 1 ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement($t, { component: "Deviation Bar" }, /* @__PURE__ */ i.createElement(ve, { left: Number(a.xAxis.size) }, n.map((j, J) => {
    const U = Number(j[w]), ce = a.isLollipopChart ? $ : Number(a.barHeight), de = Number(a.barSpace), fe = Math.abs(t(U) - S), ke = t(U), we = U > k ? S : ke, Ce = U < k ? "left" : "right";
    let G = 0;
    G = J !== 0 ? (de + ce + z) * J : G;
    const K = (de + ce + z) * n.length;
    a.heights.horizontal = K;
    const F = c(r(U, "left"), `normal ${x[a.fontSize]}px sans-serif`) < fe - 6, pe = ke, ne = G + ce / 2, me = ke, le = G + ce / 2, ue = ke, Le = G - ce / 2, Ke = _(Ce), [Se, ye] = l[p.palette], oe = { left: Se, right: ye }, Fe = Xt.contrast("#000000", oe[Ce]) < 4.9 ? "#FFFFFF" : "#000000";
    let se = Ny(a.isLollipopChart, F, C, Fe);
    const Ne = r(U, "left"), Te = a.runtime.yAxis.type === "date" ? u(s(n[J][a.runtime.originalXAxis.dataKey])) : n[J][a.runtime.originalXAxis.dataKey];
    let B = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${Te}` : Te, Oe = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${Ne}` : Ne;
    const Ge = `<div>
          ${B}<br />
          ${Oe}
            </div>`;
    return /* @__PURE__ */ i.createElement(ve, { key: `deviation-bar-${a.orientation}-${w}-${J}` }, /* @__PURE__ */ i.createElement(
      "foreignObject",
      {
        ref: (ct) => {
          v.current[J] = ct;
        },
        x: we,
        y: G,
        width: fe,
        height: ce,
        "data-tooltip-html": Ge,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`
      },
      /* @__PURE__ */ i.createElement("div", { style: { width: fe, height: ce, border: `${z}px solid #333`, backgroundColor: oe[Ce], ...Ke } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ i.createElement(ze, { verticalAnchor: "middle", x: pe, y: ne, ...se[Ce] }, r(j[w], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: me, cy: le, r: C / 2, fill: oe[Ce], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ i.createElement("rect", { x: ue, y: Le, width: C, height: C, fill: oe[Ce], style: { opacity: 1, filter: "unset" } }));
  }), O.showLabel && /* @__PURE__ */ i.createElement(ze, { fontWeight: "bold", dx: O.padding, verticalAnchor: "middle", x: O.x, y: O.y }, O.text), T && /* @__PURE__ */ i.createElement(Ie, { from: { x: S, y: 0 }, to: { x: S, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ i.createElement("foreignObject", { y: e / 2, ref: N }));
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
  const { transformedData: c, rawData: o, config: s, seriesHighlight: u } = R.useContext(Re), { xAxis: d, yAxis: h, legend: m, runtime: y } = s;
  return c && /* @__PURE__ */ i.createElement($t, { component: "ForecastingChart" }, /* @__PURE__ */ i.createElement(ve, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(h.size) }, (p = y.forecastingSeriesKeys) == null ? void 0 : p.map((v, g) => !v || !v.stages ? !1 : v.stages.map((f, b) => {
    var D;
    const { behavior: x } = m, k = o.filter((T) => T[v.stageColumn] === f.key);
    let w = x === "highlight" && u.length > 0 && u.indexOf(f.key) === -1, A = x === "highlight" || u.length === 0 || u.indexOf(f.key) !== -1;
    return /* @__PURE__ */ i.createElement(ve, { className: `forecasting-areas-combo-${g}`, key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}-${g}` }, (D = v.confidenceIntervals) == null ? void 0 : D.map((T, z) => {
      const $ = Xa[f.color] || tn[f.color] || !1, C = () => A && $[2] ? $[2] : "transparent", S = () => A && $[1] ? $[1] : "transparent";
      if (!(T.high === "" || T.low === ""))
        return /* @__PURE__ */ i.createElement(ve, { key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}--group-${b}-${z}` }, /* @__PURE__ */ i.createElement(
          zd,
          {
            curve: Ka,
            data: k,
            fill: C(),
            opacity: w ? 0.1 : 0.5,
            x: (_) => e(Date.parse(_[d.dataKey])),
            y0: (_) => t(_[T.low]),
            y1: (_) => t(_[T.high])
          }
        ), z === 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(An, { data: k, x: (_) => Number(e(Date.parse(_[d.dataKey]))), y: (_) => Number(t(_[T.high])), curve: Ka, stroke: S(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ i.createElement(An, { data: k, x: (_) => Number(e(Date.parse(_[d.dataKey]))), y: (_) => Number(t(_[T.low])), curve: Ka, stroke: S(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ i.createElement(ve, { key: "tooltip-hover-section" }, /* @__PURE__ */ i.createElement(Nt, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (v) => r(v, c), onMouseOut: l }))));
};
function Ua(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Mi(e, t) {
  const n = e.series.every(({ type: m }) => m === "Bar"), a = e.series.every(({ type: m }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(m)), r = (m) => (y) => m.reduce((p, v) => isNaN(Number(y[v])) ? p : p + Number(y[v]), 0), l = () => {
    let m = Math.max(...t.map((y) => Math.max(...e.runtime.seriesKeys.map((p) => Ua(y[p]) ? Number(s(y[p])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const y = t.map(r(e.runtime.seriesKeys)).filter((p) => !isNaN(p));
      m = Math.max(...y);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const y = t.map(r(e.runtime.seriesKeys));
      m = Math.max(...y);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (m = Math.max(...t.map((y) => Ua(y[e.series.dataKey]) ? Number(s(y[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const y = t.map(r(e.runtime.barSeriesKeys)), p = Math.max(...t.map((g) => Math.max(...e.runtime.lineSeriesKeys.map((f) => Number(s(g[f])))))), v = Math.max(...y);
      m = Math.max(v, p);
    }
    return m;
  }, c = () => {
    const m = Math.min(...t.map((y) => Math.min(...e.runtime.seriesKeys.map((p) => Ua(y[p]) ? Number(s(y[p])) : 1 / 0))));
    return String(m);
  }, o = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((m) => t.some((y) => y[m] >= 0)) : !1, s = (m) => m === null || m === "" ? "" : typeof m == "string" ? m.replace(/[,$]/g, "") : m, u = Number(l()), d = Number(c()), h = o();
  return { minValue: d, maxValue: u, existPositiveValue: h, isAllLine: a };
}
function sl({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var m, y, p, v;
  const r = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((g) => g.axis === "Right").map((g) => g.dataKey);
  let { minValue: c } = Mi(e, n);
  const o = (g) => {
    if (!g)
      return [0];
    let f = [];
    return g.map((b, x) => f = [...f, ...n.map((k) => Number(k[b]))]), f;
  }, s = Math.max.apply(null, o(l)), u = ((y = (m = e.runtime) == null ? void 0 : m.barSeriesKeys) == null ? void 0 : y.length) > 0, d = ((v = (p = e.runtime) == null ? void 0 : p.lineSeriesKeys) == null ? void 0 : v.length) > 0;
  return (u || d) && c > 0 && (c = 0), { yScaleRight: pt({
    domain: [c, s],
    range: [t, 0]
  }), hasRightAxis: r };
}
const es = (e) => {
  var p, v, g, f, b, x;
  const { config: t, d: n, displayArea: a, seriesKey: r, tooltipData: l, xScale: c, yScale: o, colorScale: s, parseDate: u, yScaleRight: d } = e, { lineDatapointStyle: h } = t, m = (p = t == null ? void 0 : t.series.filter((k) => k.dataKey === r)) == null ? void 0 : p[0];
  if (h === "hidden")
    return null;
  const y = (k, w, A, D, T, z) => {
    const $ = A.customColors || [], C = A.runtime.seriesLabels || [];
    let S;
    const _ = (O) => A.runtime.seriesLabelsAll.indexOf(O);
    if (k)
      if (w) {
        if (_(T) === !1)
          return;
        S = w(C[T] || z);
      } else
        $ && (S = $.length > 0 ? w(_(T)) : "transparent");
    else
      S = "transparent";
    return S;
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
    let k = (g = (v = l == null ? void 0 : l.data) == null ? void 0 : v[0]) == null ? void 0 : g[1];
    if (!k)
      return;
    let w, A = l.data.filter((z) => z[0] === r), D = (f = A == null ? void 0 : A[0]) == null ? void 0 : f[0], T = (b = A == null ? void 0 : A[0]) == null ? void 0 : b[2];
    return l.data.indexOf(D), w = (x = A == null ? void 0 : A[0]) == null ? void 0 : x[1], l.data.map((z, $) => {
      let C = t.runtime.seriesLabelsAll.indexOf(k);
      return isNaN(w) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: t.xAxis.type === "categorical" ? c(k) : c(u(k)),
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
}, ts = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: a, xMax: r, yMax: l, handleTooltipMouseOver: c, handleTooltipMouseOff: o, showTooltip: s, seriesStyle: u = "Line", svgRef: d, handleTooltipClick: h, tooltipData: m }) => {
  const { transformedData: y, colorScale: p, seriesHighlight: v, config: g, formatNumber: f, formatDate: b, parseDate: x, isNumber: k, updateConfig: w, handleLineType: A, tableData: D } = R.useContext(Re), { yScaleRight: T } = sl({ config: g, yMax: l, data: y, updateConfig: w });
  if (c)
    return /* @__PURE__ */ i.createElement($t, { component: "LineChart" }, /* @__PURE__ */ i.createElement(ve, { left: g.runtime.yAxis.size ? parseInt(g.runtime.yAxis.size) : 66 }, " ", (g.runtime.lineSeriesKeys || g.runtime.seriesKeys).map((z, $) => {
      let C = g.series.filter((N) => N.dataKey === z)[0].type;
      const S = g.series.filter((N) => N.dataKey === z), _ = S[0].axis ? S[0].axis : "left";
      let O = g.legend.behavior === "highlight" || v.length === 0 || v.indexOf(z) !== -1;
      return /* @__PURE__ */ i.createElement(
        ve,
        {
          key: `series-${z}`,
          opacity: g.legend.behavior === "highlight" && v.length > 0 && v.indexOf(z) === -1 ? 0.5 : 1,
          display: g.legend.behavior === "highlight" || v.length === 0 && !g.legend.dynamicLegend || v.indexOf(z) !== -1 ? "block" : "none"
        },
        y.map((N, P) => {
          const V = g.series.find(({ dataKey: U }) => U === z), { axis: q } = V;
          g.runtime.xAxis.type === "date" ? b(x(N[g.runtime.xAxis.dataKey])) : N[g.runtime.xAxis.dataKey], a(N, z);
          const I = Object.keys(g.runtime.seriesLabels).length > 1, j = q === "Right" ? "rightLabel" : "label";
          let J = g.runtime.yAxis[j];
          return I || (J = g.isLegendValue ? g.runtime.seriesLabels[z] : J), N[z] !== void 0 && N[z] !== "" && N[z] !== null && k(N[z]) && /* @__PURE__ */ i.createElement(ve, { key: `series-${z}-point-${P}`, className: "checkwidth" }, /* @__PURE__ */ i.createElement(Nt, { key: "bars", width: Number(r), height: Number(l), fill: "transparent", fillOpacity: 0.05, onMouseMove: (U) => c(U, D), onMouseOut: o, onClick: (U) => h(U, y) }), /* @__PURE__ */ i.createElement(ze, { display: g.labels ? "block" : "none", x: e(n(N)), y: _ === "Right" ? T(a(N, z)) : t(a(N, z)), fill: "#000", textAnchor: "middle" }, f(N[z], "left")), g.lineDatapointStyle === "hidden" || g.lineDatapointStyle === "always show" && /* @__PURE__ */ i.createElement(es, { d: N, config: g, seriesKey: z, displayArea: O, tooltipData: m, xScale: e, yScale: t, colorScale: p, parseDate: x, yScaleRight: T }));
        }),
        /* @__PURE__ */ i.createElement(i.Fragment, null, g.lineDatapointStyle === "hover" && /* @__PURE__ */ i.createElement(es, { config: g, seriesKey: z, displayArea: O, tooltipData: m, xScale: e, yScale: t, colorScale: p, parseDate: x, yScaleRight: T, seriesAxis: _ })),
        /* @__PURE__ */ i.createElement(
          An,
          {
            curve: ol[S[0].lineType],
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
          An,
          {
            className: "animation",
            curve: S.lineType,
            data: y,
            x: (N) => e(n(N)),
            y: (N) => _ === "Right" ? T(a(N, z)) : t(a(N, z)),
            stroke: "#fff",
            strokeWidth: 3,
            strokeOpacity: 1,
            shapeRendering: "geometricPrecision",
            strokeDasharray: C ? A(C) : 0,
            defined: (N, P) => k(N[g.runtime.seriesLabels[z]])
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
    }), g.legend.dynamicLegend && v.length === 0 && /* @__PURE__ */ i.createElement(ze, { x: r / 2, y: l / 2, fill: "black", textAnchor: "middle", color: "black" }, g.legend.dynamicLegendChartMessage)));
};
function Qc(e) {
  var t = e.top, n = t === void 0 ? 0 : t, a = e.left, r = a === void 0 ? 0 : a, l = e.className, c = e.children;
  return /* @__PURE__ */ i.createElement(ve, {
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
  }, /* @__PURE__ */ i.createElement("path", Nr({
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
  const { transformedData: t, updateConfig: n, dimensions: a, rawData: r } = R.useContext(Re), { xScale: l, yScale: c, config: o, height: s, width: u, handleTooltipMouseOff: d, handleTooltipMouseOver: h, maxWidth: m, maxHeight: y } = e, { forestPlot: p, runtime: v, dataFormat: g } = o;
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
  ], x = o.forestPlot.rowHeight, k = [
    { x: 0, y: x },
    { x: u, y: x }
  ], w = [
    { x: 0, y: s },
    { x: u, y: s }
  ], A = Object.entries(o.columns).map((D) => D[1]).filter((D) => D.forestPlot === !0);
  return p.rightWidthOffset !== 0 && Number(p.rightWidthOffset) / 100 * u, p.leftWidthOffset !== 0 && Number(p.leftWidthOffset) / 100 * u, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ve, null, p.title !== "" && /* @__PURE__ */ i.createElement(ze, { className: "forest-plot--title", x: l(0), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Cn(o.fontSize), fill: "black" }, p.title), p.regression.showBaseLine && /* @__PURE__ */ i.createElement(Ie, { from: { x: l(p.regression.estimateField), y: 0 + x }, to: { x: l(p.regression.estimateField), y: s }, className: "forestplot__baseline", stroke: p.regression.baseLineColor || "black" }), p.showZeroLine && /* @__PURE__ */ i.createElement(Ie, { from: { x: l(0), y: 0 + x }, to: { x: l(0), y: s }, className: "forestplot__zero-line", stroke: "gray", strokeDasharray: "5 5" }), t.map((D, T) => {
    const z = pt({
      domain: l.domain(),
      range: [p.radius.min, p.radius.max]
    }), $ = p.radius.scalingColumn !== "" ? z(t[T][p.estimateField]) * 5 : 4, C = p.radius.scalingColumn !== "" ? z(t[T][p.estimateField]) : 4, S = p.colors.shape ? p.colors.shape : "black", _ = p.colors.line ? p.colors.line : "black", O = 4;
    return /* @__PURE__ */ i.createElement(ve, null, /* @__PURE__ */ i.createElement(
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
    ), /* @__PURE__ */ i.createElement("line", { stroke: _, className: `line-${D[o.yAxis.dataKey]}`, key: T, x1: l(D[p.lower]), x2: l(D[p.upper]), y1: c(T), y2: c(T) }), p.shape === "circle" && /* @__PURE__ */ i.createElement(wu, { className: "forest-plot--circle", cx: l(Number(D[p.estimateField])), cy: c(T), r: p.radius.scalingColumn !== "" ? z(t[T][p.estimateField]) : 4, fill: S, style: { opacity: 1, filter: "unset" } }), p.shape === "square" && /* @__PURE__ */ i.createElement("rect", { className: "forest-plot--square", x: l(Number(D[p.estimateField])), y: c(T) - C / 2, width: C, height: C, fill: S, style: { opacity: 1, filter: "unset" } }), p.shape === "diamond" && /* @__PURE__ */ i.createElement(Zc, { className: "forest-plot--diamond", size: $, top: c(T), left: l(Number(D[p.estimateField])), fill: S }), p.shape === "text" && /* @__PURE__ */ i.createElement(ze, { className: "forest-plot--text", x: l(Number(D[p.estimateField])), y: c(T), textAnchor: "middle", verticalAnchor: "middle", fontSize: Cn(o.fontSize), fill: S }, D[p.estimateField]));
  }), b && p.regression.showDiamond && /* @__PURE__ */ i.createElement(An, { data: b, x: (D) => D.x, y: (D) => D.y, stroke: "black", strokeWidth: 2, fill: p.regression.baseLineColor, curve: zs }), p.regression.description && /* @__PURE__ */ i.createElement(ze, { x: 0 - Number(o.xAxis.size), width: u, y: s - o.forestPlot.rowHeight - Number(p.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, p.regression.description), /* @__PURE__ */ i.createElement(Nt, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: u, height: s, fill: "transparent", fillOpacity: 0.5, onMouseMove: (D) => h(D, t), onMouseOut: d })), /* @__PURE__ */ i.createElement(Ie, { from: k[0], to: k[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ i.createElement(Ie, { from: w[0], to: w[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), A.map((D) => r.map((T, z) => /* @__PURE__ */ i.createElement(ze, { className: `${T[D.name]}`, x: D.forestPlotAlignRight ? u : D.forestPlotStartingPoint, y: c(z), textAnchor: D.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Cn(o.fontSize), fill: "black" }, T[D.name]))), !p.hideDateCategoryCol && t.map((D, T) => /* @__PURE__ */ i.createElement(ze, { className: `${D[o.xAxis.dataKey]}`, x: 0, y: c(T), textAnchor: "start", verticalAnchor: "middle", fontSize: Cn(o.fontSize), fill: "black" }, D[o.xAxis.dataKey])), !p.hideDateCategoryCol && o.xAxis.dataKey && /* @__PURE__ */ i.createElement(ze, { className: o.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Cn(o.fontSize), fill: "black" }, o.xAxis.dataKey), A.map((D) => /* @__PURE__ */ i.createElement(ze, { className: `${D.label}`, x: D.forestPlotAlignRight ? u : D.forestPlotStartingPoint, y: 0, textAnchor: D.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Cn(o.fontSize), fill: "black" }, D.label)));
}, My = ({ width: e, height: t, originalWidth: n }) => {
  var k;
  const { config: a, colorScale: r, transformedData: l, formatNumber: c, seriesHighlight: o, getTextWidth: s } = R.useContext(Re);
  if (!a || ((k = a == null ? void 0 : a.series) == null ? void 0 : k.length) < 2)
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
  }, v = pt({
    domain: [0, Math.max(y.max * m, p.max * 1.1)],
    range: [0, d]
  });
  let g = "#000000";
  Xt.contrast(g, y.color) < 4.9 && (y.labelColor = "#FFFFFF"), Xt.contrast(g, p.color) < 4.9 && (p.labelColor = "#FFFFFF");
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
				`), /* @__PURE__ */ i.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ i.createElement(ve, { top: 0, left: Number(a.xAxis.size) }, l.filter((w) => a.series[0].dataKey === y.dataKey).map((w, A) => {
    let D = a.legend.behavior === "highlight" && o.length > 0 && o.indexOf(a.series[0].dataKey) === -1, T = a.legend.behavior === "highlight" || o.length === 0 || o.indexOf(a.series[0].dataKey) !== -1, z = v(w[a.series[0].dataKey]), $ = Number(a.barHeight) ? Number(a.barHeight) : 25, C = 0;
    C = A !== 0 ? (Number(a.barSpace) + $ + u) * A : C;
    const S = (Number(a.barSpace) + $ + u) * l.length;
    a.heights.horizontal = S;
    const O = s(c(w[y.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < z - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ve, { key: `group-${y.dataKey}-${w[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      Nt,
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
    ), a.yAxis.displayNumbersOnBar && T && /* @__PURE__ */ i.createElement(ze, { textAnchor: O ? "start" : "end", dx: O ? 5 : -5, verticalAnchor: "middle", x: d - z, y: C + a.barHeight / 2, fill: O ? y.labelColor : "#000" }, c(w[y.dataKey], "left"))));
  }), l.filter((w) => a.series[1].dataKey === p.dataKey).map((w, A) => {
    let D = v(w[a.series[1].dataKey]), T = a.legend.behavior === "highlight" && o.length > 0 && o.indexOf(a.series[1].dataKey) === -1, z = a.legend.behavior === "highlight" || o.length === 0 || o.indexOf(a.series[1].dataKey) !== -1, $ = a.barHeight ? Number(a.barHeight) : 25, C = 0;
    C = A !== 0 ? (Number(a.barSpace) + $ + u) * A : C;
    const S = (Number(a.barSpace) + $ + u) * l.length;
    a.heights.horizontal = S;
    const O = s(c(w[p.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < D - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                      .bar-${p.dataKey}-${w[a.xAxis.dataKey]} {
                          transform-origin: ${d}px ${C}px
                      }
							      `), /* @__PURE__ */ i.createElement(ve, { key: `group-${p.dataKey}-${w[a.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      Nt,
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
    ), a.yAxis.displayNumbersOnBar && z && /* @__PURE__ */ i.createElement(ze, { textAnchor: O ? "end" : "start", dx: O ? -5 : 5, verticalAnchor: "middle", x: d + D, y: C + a.barHeight / 2, fill: O ? p.labelColor : "#000" }, c(w[p.dataKey], "left"))));
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
        var k;
        (k = x.confidenceIntervals) == null || k.map((w) => {
          v.push(w.high), v.push(w.low);
        });
      });
      const g = r.map((x) => v.map((k) => x[k])), f = Math.max.apply(
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
  const { rawData: s, dimensions: u } = R.useContext(Re), [d, h] = u, m = c.runtime.barSeriesKeys || c.runtime.seriesKeys, y = c.runtime.xAxis.type, p = c.orientation === "horizontal", v = ($) => $[c.runtime.originalXAxis.dataKey], g = o.map(($) => v($)), { visualizationType: f } = c;
  let b = null, x = null, k = null, w = null, A = null, D = null, T = null;
  const z = {
    TIME: "time",
    LOG: "log",
    POINT: "point",
    LINEAR: "linear",
    BAND: "band"
  };
  if (p && (b = zy({ min: r * 1.03, ...e }), b.type = c.useLogScale ? z.LOG : z.LINEAR, x = Fy(y, t), x.rangeRound([0, a]), A = Va(m, [0, a])), p || (T = Va(g, [0, n], 0.5), b = Va(t, [0, n], 0.5), b.type = z.POINT, x = Ry(e), A = Va(m, [0, n])), c.xAxis.type === "date" && c.xAxis.sortDates && (b = Ef({
    domain: [Math.min(...t), Math.max(...t)],
    range: [0, n]
  }), T = b, b.type = z.LINEAR), c.visualizationType === "Deviation Bar") {
    const $ = c.isLollipopChart ? 1.05 : 1.03;
    x = fo({
      domain: t,
      range: [0, a]
    }), b = pt({
      domain: [r * $, Math.max(Number(c.xAxis.target), l)],
      range: [0, n],
      round: !0,
      nice: !0
    }), b.type = z.LINEAR;
  }
  if (c.visualizationType === "Scatter Plot" && c.xAxis.type === "continuous" && (b = pt({
    domain: [0, Math.max.apply(null, b.domain())],
    range: [0, n]
  }), b.type = z.LINEAR), f === "Box Plot") {
    const $ = [];
    if (c.boxplot.plots.map((O) => O.columnOutliers.map((N) => $.push(N))) && !c.boxplot.hideOutliers) {
      let O = Math.min(...$), N = Math.max(...$);
      O < r && (r = O), N > l && (l = N);
    }
    let S = Math.min(...c.boxplot.plots.map((O) => O.columnLowerBounds)), _ = Math.max(...c.boxplot.plots.map((O) => O.columnUpperBounds));
    S < r && (r = S), _ > l && (l = _), x = pt({
      range: [a, 0],
      round: !0,
      domain: [r, l]
    }), b = fo({
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
    ), S = Math.max.apply(
      Math,
      o.map((_) => {
        var O;
        return _[(O = c.series[1]) == null ? void 0 : O.dataKey];
      })
    );
    w = pt({
      domain: [0, Math.max(C, S) * 1.02],
      range: [n / 2, 0]
    }), k = pt({
      domain: w.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (f === "Forest Plot") {
    const $ = () => c.forestPlot.regression.showDiamond || c.forestPlot.regression.description ? [0 + c.forestPlot.rowHeight * 2, a - c.forestPlot.rowHeight] : [0 + c.forestPlot.rowHeight * 2, a];
    x = pt({
      domain: [0, s.length],
      range: $()
    });
    const C = 5, S = Number(c.forestPlot.leftWidthOffset) / 100 * n, _ = Number(c.forestPlot.rightWidthOffset) / 100 * n, O = Number(c.forestPlot.rightWidthOffsetMobile) / 100 * n, N = Number(c.forestPlot.leftWidthOffsetMobile) / 100 * n;
    d > 480 ? b = pt({
      domain: [Math.min(...o.map((P) => parseFloat(P[c.forestPlot.lower]))) - C, Math.max(...o.map((P) => parseFloat(P[c.forestPlot.upper]))) + C],
      range: [S, n - _],
      type: "linear"
    }) : b = pt({
      domain: [Math.min(...o.map((P) => parseFloat(P[c.forestPlot.lower]))) - C, Math.max(...o.map((P) => parseFloat(P[c.forestPlot.upper]))) + C],
      range: [N, n - O],
      type: "linear"
    });
  }
  return { xScale: b, yScale: x, seriesScale: A, g1xScale: w, g2xScale: k, xScaleNoPadding: D, xScaleBrush: T };
}, zy = ({ min: e, max: t, xMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? Xs : pt)({
  domain: [e, t],
  range: [0, n],
  nice: a.useLogScale,
  zero: a.useLogScale,
  type: a.useLogScale ? "log" : "linear"
})), Ry = ({ min: e, max: t, yMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? Xs : pt)({
  domain: [e, t],
  range: [n, 0],
  nice: a.useLogScale,
  zero: a.useLogScale
})), Fy = (e, t) => e === "date" ? pt({
  domain: [Math.min(...t), Math.max(...t)]
}) : Mn({ domain: t, padding: 0.5 }), Va = (e, t, n = 0) => Mn({
  domain: e,
  range: t,
  padding: n,
  type: "point"
});
function By(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
var cl = {};
const Wy = /* @__PURE__ */ Br(bp), Vy = /* @__PURE__ */ Br(Pp);
var ul = {};
ul.__esModule = !0;
ul.default = Hy;
var Ha = R;
function Hy(e) {
  var t = (0, Ha.useState)(e), n = t[0], a = t[1], r = (0, Ha.useRef)(null), l = (0, Ha.useCallback)(function(c, o) {
    r.current = o || null, a(c);
  }, [a]);
  return (0, Ha.useLayoutEffect)(function() {
    r.current && (r.current(n), r.current = null);
  }, [n]), [n, l];
}
var dl = {}, fl = {};
fl.__esModule = !0;
fl.default = Ky;
function Ky(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var ml = {};
ml.__esModule = !0;
ml.default = qy;
function jy(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Iy(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Iy(e, t) {
  if (e) {
    if (typeof e == "string")
      return ns(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ns(e, t);
  }
}
function ns(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function qy(e, t) {
  for (var n = e, a = 1 / 0, r = jy(t), l; !(l = r()).done; ) {
    var c = l.value, o = Math.sqrt(Math.pow(c.x - e.x, 2) + Math.pow(c.y - e.y, 2));
    o < a && (a = o, n = {
      x: c.x,
      y: c.y
    });
  }
  return n;
}
dl.__esModule = !0;
dl.default = Yy;
var as = Jc(fl), Uy = Jc(ml);
function Jc(e) {
  return e && e.__esModule ? e : { default: e };
}
function Yy(e, t, n) {
  var a, r, l, c;
  return n === void 0 && (n = {}), t.length > 0 ? (0, Uy.default)(e, t) : {
    x: (0, as.default)(e.x, (a = n.xMin) != null ? a : -1 / 0, (r = n.xMax) != null ? r : 1 / 0),
    y: (0, as.default)(e.y, (l = n.yMin) != null ? l : -1 / 0, (c = n.yMax) != null ? c : 1 / 0)
  };
}
var hl = {};
hl.__esModule = !0;
hl.default = Zy;
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
cl.__esModule = !0;
cl.default = eg;
var mn = R, On = Wy, is = Vy, Jy = pl(ul), rs = pl(dl), Gy = pl(hl);
function pl(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Vt.apply(this, arguments);
}
function eg(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, a = n === void 0 ? !1 : n, r = t.snapToPointer, l = r === void 0 ? !0 : r, c = t.onDragEnd, o = t.onDragMove, s = t.onDragStart, u = t.x, d = t.y, h = t.dx, m = t.dy, y = t.isDragging, p = t.restrict, v = p === void 0 ? {} : p, g = t.restrictToPath, f = (0, mn.useRef)({
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
  }), x = b[0], k = b[1], w = (0, mn.useState)(new On.Point({
    x: 0,
    y: 0
  })), A = w[0], D = w[1];
  (0, mn.useEffect)(function() {
    (f.current.x !== u || f.current.y !== d || f.current.dx !== h || f.current.dy !== m) && (f.current = {
      x: u,
      y: d,
      dx: h,
      dy: m
    }, k(function(S) {
      return Vt({}, S, {
        x: u,
        y: d,
        dx: h ?? 0,
        dy: m ?? 0
      });
    }));
  }), (0, mn.useEffect)(function() {
    y !== void 0 && x.isDragging !== y && k(function(S) {
      return Vt({}, S, {
        isDragging: y
      });
    });
  }, [x.isDragging, y, k]);
  var T = (0, Gy.default)(g), z = (0, mn.useCallback)(function(S) {
    S.persist(), k(function(_) {
      var O = _.x, N = O === void 0 ? 0 : O, P = _.y, V = P === void 0 ? 0 : P, q = _.dx, I = _.dy, j = new On.Point({
        x: (N || 0) + q,
        y: (V || 0) + I
      }), J = (0, is.localPoint)(S) || new On.Point({
        x: 0,
        y: 0
      }), U = l ? J : j, ce = (0, rs.default)(U, T, v);
      return D((0, On.subtractPoints)(j, J)), {
        isDragging: !0,
        dx: a ? 0 : _.dx,
        dy: a ? 0 : _.dy,
        x: a ? ce.x : ce.x - _.dx,
        y: a ? ce.y : ce.y - _.dy
      };
    }, s && function(_) {
      s(Vt({}, _, {
        event: S
      }));
    });
  }, [s, a, v, T, k, l]), $ = (0, mn.useCallback)(function(S) {
    S.persist(), k(function(_) {
      if (!_.isDragging)
        return _;
      var O = _.x, N = O === void 0 ? 0 : O, P = _.y, V = P === void 0 ? 0 : P, q = (0, is.localPoint)(S) || new On.Point({
        x: 0,
        y: 0
      }), I = l ? q : (0, On.sumPoints)(q, A), j = (0, rs.default)(I, T, v);
      return Vt({}, _, {
        dx: j.x - N,
        dy: j.y - V
      });
    }, o && function(_) {
      _.isDragging && o(Vt({}, _, {
        event: S
      }));
    });
  }, [k, o, l, A, T, v]), C = (0, mn.useCallback)(function(S) {
    S.persist(), k(function(_) {
      return Vt({}, _, {
        isDragging: !1
      });
    }, c && function(_) {
      c(Vt({}, _, {
        event: S
      }));
    });
  }, [c, k]);
  return Vt({}, x, {
    dragEnd: C,
    dragMove: $,
    dragStart: z
  });
}
var Di = Gc, Gn = yl(ms), Gi = yl(R), tg = yl(cl);
function yl(e) {
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
  return /* @__PURE__ */ Gi.default.createElement(Gi.default.Fragment, null, x.isDragging && n && /* @__PURE__ */ Gi.default.createElement("rect", {
    width: y,
    height: s,
    onPointerDown: x.dragStart,
    onPointerMove: x.dragMove,
    onPointerUp: x.dragEnd,
    fill: "transparent"
  }), l(x));
}
Gc.propTypes = {
  children: Gn.default.func.isRequired,
  width: Gn.default.number.isRequired,
  height: Gn.default.number.isRequired,
  captureDragArea: Gn.default.bool,
  isDragging: Gn.default.bool
};
function bi(e, t) {
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
function ls(e, t, n, a) {
  var r, l = bi(e, t + (t < n ? -a : a)), c = bi(e, n + (n < t ? -a : a)), o = Math.min(l, c), s = Math.max(l, c);
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
function gl(e) {
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
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Lt.apply(this, arguments);
}
function ng(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Pr(e, t);
}
function Pr(e, t) {
  return Pr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Pr(e, t);
}
var eu = /* @__PURE__ */ function(e) {
  ng(t, e);
  function t() {
    for (var a, r = arguments.length, l = new Array(r), c = 0; c < r; c++)
      l[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(l)) || this, a.handleDragStart = function(o) {
      var s = a.props, u = s.onBrushHandleChange, d = s.type, h = s.onBrushStart;
      u && u(d, gl(o.event)), h && h(o);
    }, a.handleDragMove = function(o) {
      var s = a.props, u = s.updateBrush, d = s.type, h = s.isControlled;
      !o.isDragging || h || u(function(m) {
        var y = m.start, p = m.end, v = 0, g = Math.max(y.x, p.x), f = Math.min(y.x, p.x), b = Math.max(y.y, p.y), x = Math.min(y.y, p.y);
        switch (d) {
          case "right":
            return v = g + o.dx, Lt({}, m, {
              activeHandle: d,
              extent: Lt({}, m.extent, {
                x0: Math.max(Math.min(v, y.x), m.bounds.x0),
                x1: Math.min(Math.max(v, y.x), m.bounds.x1)
              })
            });
          case "left":
            return v = f + o.dx, Lt({}, m, {
              activeHandle: d,
              extent: Lt({}, m.extent, {
                x0: Math.min(v, p.x),
                x1: Math.max(v, p.x)
              })
            });
          case "bottom":
            return v = b + o.dy, Lt({}, m, {
              activeHandle: d,
              extent: Lt({}, m.extent, {
                y0: Math.min(v, y.y),
                y1: Math.max(v, y.y)
              })
            });
          case "top":
            return v = x + o.dy, Lt({}, m, {
              activeHandle: d,
              extent: Lt({}, m.extent, {
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
        var g = Lt({}, m, {
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
    return /* @__PURE__ */ i.createElement(Di, {
      width: c,
      height: o,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: h ? m : void 0
    }, function(x) {
      var k = x.dragStart, w = x.dragEnd, A = x.dragMove, D = x.isDragging;
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
        onPointerDown: k,
        onPointerMove: A,
        onPointerUp: h ? void 0 : w,
        style: {
          cursor: b,
          pointerEvents: s.activeHandle || s.isBrushing ? "none" : "all"
        }
      }), y && /* @__PURE__ */ i.createElement("g", {
        onPointerDown: k,
        onPointerMove: A,
        onPointerUp: h ? void 0 : w
      }, y(Lt({}, r.props.handle, {
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
function wt() {
  return wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, wt.apply(this, arguments);
}
function ag(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Lr(e, t);
}
function Lr(e, t) {
  return Lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Lr(e, t);
}
var xl = /* @__PURE__ */ function(e) {
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
            return b = p + o.dx, x = f + o.dy, wt({}, h, {
              activeHandle: d,
              extent: wt({}, h.extent, {
                x0: Math.max(Math.min(b, m.x), h.bounds.x0),
                x1: Math.min(Math.max(b, m.x), h.bounds.x1),
                y0: Math.max(Math.min(x, y.y), h.bounds.y0),
                y1: Math.min(Math.max(x, y.y), h.bounds.y1)
              })
            });
          case "topLeft":
            return b = v + o.dx, x = f + o.dy, wt({}, h, {
              activeHandle: d,
              extent: wt({}, h.extent, {
                x0: Math.max(Math.min(b, y.x), h.bounds.x0),
                x1: Math.min(Math.max(b, y.x), h.bounds.x1),
                y0: Math.max(Math.min(x, y.y), h.bounds.y0),
                y1: Math.min(Math.max(x, y.y), h.bounds.y1)
              })
            });
          case "bottomLeft":
            return b = v + o.dx, x = g + o.dy, wt({}, h, {
              activeHandle: d,
              extent: wt({}, h.extent, {
                x0: Math.max(Math.min(b, y.x), h.bounds.x0),
                x1: Math.min(Math.max(b, y.x), h.bounds.x1),
                y0: Math.max(Math.min(x, m.y), h.bounds.y0),
                y1: Math.min(Math.max(x, m.y), h.bounds.y1)
              })
            });
          case "bottomRight":
            return b = p + o.dx, x = g + o.dy, wt({}, h, {
              activeHandle: d,
              extent: wt({}, h.extent, {
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
        var p = wt({}, d, {
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
    return /* @__PURE__ */ i.createElement(Di, {
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
      }), /* @__PURE__ */ i.createElement("rect", wt({
        fill: "transparent",
        onPointerDown: g,
        onPointerMove: p,
        onPointerUp: v,
        className: "visx-brush-corner-" + l,
        style: wt({
          cursor: h,
          pointerEvents: m
        }, u)
      }, d)));
    });
  }, t;
}(i.Component);
xl.propTypes = {
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
xl.defaultProps = {
  style: {}
};
function en() {
  return en = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, en.apply(this, arguments);
}
function ig(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Or(e, t);
}
function Or(e, t) {
  return Or = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Or(e, t);
}
var rg = {
  cursor: "move"
}, vl = /* @__PURE__ */ function(e) {
  ig(t, e);
  function t() {
    for (var a, r = arguments.length, l = new Array(r), c = 0; c < r; c++)
      l[c] = arguments[c];
    return a = e.call.apply(e, [this].concat(l)) || this, a.selectionDragStart = function(o) {
      var s = a.props, u = s.onMoveSelectionChange, d = s.onBrushStart;
      u && u("move", gl(o.event)), d && d(o);
    }, a.selectionDragMove = function(o) {
      var s = a.props, u = s.updateBrush, d = s.isControlled;
      d || u(function(h) {
        var m = h.start, y = m.x, p = m.y, v = h.end, g = v.x, f = v.y, b = o.dx > 0 ? Math.min(o.dx, h.bounds.x1 - g) : Math.max(o.dx, h.bounds.x0 - y), x = o.dy > 0 ? Math.min(o.dy, h.bounds.y1 - f) : Math.max(o.dy, h.bounds.y0 - p);
        return en({}, h, {
          isBrushing: !0,
          extent: en({}, h.extent, {
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
        var y = en({}, m, {
          isBrushing: !1,
          start: en({}, m.start, {
            x: Math.min(m.extent.x0, m.extent.x1),
            y: Math.min(m.extent.y0, m.extent.y1)
          }),
          end: en({}, m.end, {
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
    return /* @__PURE__ */ i.createElement(Di, {
      width: l,
      height: c,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: g ? f : void 0
    }, function(b) {
      var x = b.isDragging, k = b.dragStart, w = b.dragEnd, A = b.dragMove;
      return /* @__PURE__ */ i.createElement("g", null, x && /* @__PURE__ */ i.createElement("rect", {
        width: o,
        height: s,
        fill: "transparent",
        onPointerUp: g ? void 0 : w,
        onPointerMove: A,
        onPointerLeave: g ? void 0 : w,
        style: rg
      }), /* @__PURE__ */ i.createElement("rect", en({
        x: Math.min(u.extent.x0, u.extent.x1),
        y: Math.min(u.extent.y0, u.extent.y1),
        width: l,
        height: c,
        className: "visx-brush-selection",
        onPointerDown: d ? void 0 : k,
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
vl.propTypes = {
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
vl.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
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
function lg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _r(e, t);
}
function _r(e, t) {
  return _r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, _r(e, t);
}
var og = {
  cursor: "crosshair"
}, bl = /* @__PURE__ */ function(e) {
  lg(t, e);
  function t(a) {
    var r;
    r = e.call(this, a) || this, r.mouseUpTime = 0, r.mouseDownTime = 0, r.handleWindowPointerUp = function() {
      var o = r.props, s = o.useWindowMoveEvents, u = o.onBrushEnd, d = o.resetOnEnd, h = r.state.brushingType;
      s && h && r.updateBrush(function(m) {
        var y = m.start, p = m.end, v = m.extent;
        y.x = Math.min(v.x0, v.x1), y.y = Math.min(v.y0, v.y0), p.x = Math.max(v.x0, v.x1), p.y = Math.max(v.y0, v.y1);
        var g = Ct({}, m, {
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
          var f = g.start, b = f.x, x = f.y, k = g.end, w = k.x, A = k.y;
          return Ct({}, g, {
            isBrushing: !0,
            extent: Ct({}, g.extent, r.getExtent({
              x: d === "left" ? Math.min(Math.max(b + p, g.bounds.x0), g.bounds.x1) : b,
              y: d === "top" ? Math.min(Math.max(x + v, g.bounds.y0), g.bounds.y1) : x
            }, {
              x: d === "right" ? Math.min(Math.max(w + p, g.bounds.x0), g.bounds.x1) : w,
              y: d === "bottom" ? Math.min(Math.max(A + v, g.bounds.y0), g.bounds.y1) : A
            }))
          });
        }), d === "move" && r.updateBrush(function(g) {
          var f = g.start, b = f.x, x = f.y, k = g.end, w = k.x, A = k.y, D = p > 0 ? Math.min(p, g.bounds.x1 - w) : Math.max(p, g.bounds.x0 - b), T = v > 0 ? Math.min(v, g.bounds.y1 - A) : Math.max(v, g.bounds.y0 - x);
          return Ct({}, g, {
            isBrushing: !0,
            extent: Ct({}, g.extent, {
              x0: b + D,
              y0: x + T,
              x1: w + D,
              y1: A + T
            })
          });
        }), d === "select" && r.updateBrush(function(g) {
          var f = g.start, b = f.x, x = f.y, k = {
            x: Math.min(Math.max(b + p, g.bounds.x0), g.bounds.x1),
            y: Math.min(Math.max(x + v, g.bounds.y0), g.bounds.y1)
          }, w = r.getExtent(y, k), A = Ct({}, g, {
            end: k,
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
      }, f = Ct({}, g);
      u && u(g), r.updateBrush(function(b) {
        return Ct({}, b, {
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
          brushPageOffset: y ? gl(o.event) : void 0
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
          return Ct({}, g, {
            end: v,
            extent: b
          });
        });
      }
    }, r.handleDragEnd = function() {
      var o = r.props, s = o.onBrushEnd, u = o.resetOnEnd, d = o.useWindowMoveEvents;
      d || r.updateBrush(function(h) {
        var m = h.extent, y = Ct({}, h, {
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
        var d = Ct({}, u, {
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
    var r = this, l = this.state, c = l.start, o = l.end, s = this.props, u = s.top, d = s.left, h = s.width, m = s.height, y = s.onMouseLeave, p = s.onMouseUp, v = s.onMouseMove, g = s.onBrushEnd, f = s.onClick, b = s.resizeTriggerAreas, x = s.selectedBoxStyle, k = s.disableDraggingSelection, w = s.clickSensitivity, A = s.useWindowMoveEvents, D = s.renderBrushHandle, T = this.state.brushingType, z = this.handles(), $ = this.corners(), C = this.getBrushWidth(), S = this.getBrushHeight(), _ = new Set(b);
    return /* @__PURE__ */ i.createElement(ve, {
      className: "visx-brush",
      top: u,
      left: d
    }, /* @__PURE__ */ i.createElement(Di, {
      width: h,
      height: m,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: A ? T === "select" : void 0
    }, function(O) {
      var N = O.dragStart, P = O.isDragging, V = O.dragMove, q = O.dragEnd;
      return /* @__PURE__ */ i.createElement(Nt, {
        className: "visx-brush-overlay",
        fill: "transparent",
        x: 0,
        y: 0,
        width: h,
        height: m,
        onDoubleClick: function() {
          return r.reset();
        },
        onClick: function(j) {
          var J = r.mouseUpTime - r.mouseDownTime;
          f && J < w && f(j);
        },
        onPointerDown: function(j) {
          r.mouseDownTime = Date.now(), N(j);
        },
        onPointerLeave: function(j) {
          y && y(j);
        },
        onPointerMove: function(j) {
          !P && v && v(j), P && V(j);
        },
        onPointerUp: function(j) {
          r.mouseUpTime = Date.now(), p && p(j), q(j);
        },
        style: og
      });
    }), c && o && /* @__PURE__ */ i.createElement(vl, {
      updateBrush: this.updateBrush,
      width: C,
      height: S,
      stageWidth: h,
      stageHeight: m,
      brush: this.state,
      disableDraggingSelection: k,
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
      return N && /* @__PURE__ */ i.createElement(xl, {
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
bl.propTypes = {
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
bl.defaultProps = {
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
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Mr(e, t);
}
function Mr(e, t) {
  return Mr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Mr(e, t);
}
var os = 2, ss = "steelblue", El = /* @__PURE__ */ function(e) {
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
        var u = o.x, d = o.y, h = a.props, m = h.xScale, y = h.yScale, p = bi(m, u), v = bi(y, d);
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
    var l = this.props, c = l.xScale, o = l.yScale, s = r.extent, u = s.x0, d = s.x1, h = s.y0, m = s.y1, y = ls(c, u || 0, d || 0, os), p = ls(o, h || 0, m || 0, os), v = {
      x0: y.start || 0,
      x1: y.end || 0,
      xValues: y.values,
      y0: p.start || 0,
      y1: p.end || 0,
      yValues: p.values
    };
    return v;
  }, n.render = function() {
    var r = this.props, l = r.xScale, c = r.yScale, o = r.height, s = r.width, u = r.margin, d = r.brushDirection, h = r.initialBrushPosition, m = r.innerRef, y = r.resizeTriggerAreas, p = r.brushRegion, v = r.yAxisOrientation, g = r.xAxisOrientation, f = r.selectedBoxStyle, b = r.disableDraggingSelection, x = r.resetOnEnd, k = r.onMouseLeave, w = r.onMouseMove, A = r.onClick, D = r.handleSize, T = r.useWindowMoveEvents, z = r.renderBrushHandle;
    if (!l || !c)
      return null;
    var $, C, S, _, O = u != null && u.left ? u.left : 0, N = u != null && u.top ? u.top : 0, P = u != null && u.right ? u.right : 0, V = u != null && u.bottom ? u.bottom : 0;
    return p === "chart" ? (S = 0, _ = 0, $ = s, C = o) : p === "yAxis" ? (_ = 0, C = o, v === "right" ? (S = s, $ = P) : (S = -O, $ = O)) : (S = 0, $ = s, g === "bottom" ? (_ = o, C = V) : (_ = -N, C = N)), /* @__PURE__ */ i.createElement(bl, {
      width: $,
      height: C,
      left: S,
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
      onMouseLeave: k,
      onMouseMove: w,
      useWindowMoveEvents: T,
      renderBrushHandle: z
    });
  }, t;
}(R.Component);
El.propTypes = {
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
El.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: ss,
    fillOpacity: 0.2,
    stroke: ss,
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
const cg = El, ug = (e) => {
  const { transformedData: t, config: n, parseDate: a, formatDate: r, updateConfig: l } = R.useContext(Re), { fontSize: c } = ka(), [o, s] = R.useState([...t]), u = R.useRef(null), d = 15, [h, m] = R.useState({
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
    const { xValues: b } = f, x = (T = n.xAxis) == null ? void 0 : T.dataKey, k = t.filter((z) => b.includes(z[x])), w = b.slice().reverse().find((z) => z !== void 0), A = b.find((z) => z !== void 0), D = (z) => n.runtime.xAxis.type === "date" ? r(a(z)) : z;
    m((z) => {
      var $, C;
      return {
        ...z,
        startPosition: ($ = u.current) == null ? void 0 : $.state.start.x,
        endPosition: (C = u.current) == null ? void 0 : C.state.end.x,
        endValue: D(w),
        startValue: D(A)
      };
    }), s(k);
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
    return /* @__PURE__ */ i.createElement(ve, { display: n.brush.active ? "block" : "none", top: Number(e.yMax) + g(), left: Number(n.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ i.createElement("rect", { fill: "#eee", width: e.xMax, height: n.brush.height, rx: d }), /* @__PURE__ */ i.createElement(
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
  return /* @__PURE__ */ i.createElement(ve, { left: t + c / 2, top: -2 }, /* @__PURE__ */ i.createElement(ze, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: u, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, o ? l.startValue : l.endValue), /* @__PURE__ */ i.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: a ? "#297EF1" : "#666", strokeWidth: "1", transform: s }));
}, Wt = (e) => {
  var qn;
  const { isEditor: t, isDashboard: n, transformedData: a, dimensions: r, config: l, parseDate: c, formatDate: o, currentViewport: s, formatNumber: u, handleChartAriaLabels: d, updateConfig: h, handleLineType: m, rawData: y, capitalize: p, setSharedFilter: v, setSharedFilterValue: g, getTextWidth: f, isDebug: b } = R.useContext(Re), { visualizationType: x, visualizationSubType: k, orientation: w, xAxis: A, yAxis: D, runtime: T, debugSvg: z } = l;
  let [$] = r;
  l && l.legend && !l.legend.hide && l.legend.position !== "bottom" && ["lg", "md"].includes(s) && ($ = $ * 0.73);
  const { horizontal: C } = l.heights, S = w === "horizontal", _ = !0;
  let O = l.aspectRatio ? $ * l.aspectRatio : l.visualizationType === "Forest Plot" ? l.heights.vertical : l.heights[w];
  const N = $ - T.yAxis.size - (x === "Combo" ? l.yAxis.rightAxisSize : 0);
  let P = O - (w === "horizontal" ? 0 : T.xAxis.size);
  l.visualizationType === "Forest Plot" && (O = O + l.data.length * l.forestPlot.rowHeight, P = P + l.data.length * l.forestPlot.rowHeight), l.brush.active && (O = O + l.brush.height);
  const { minValue: V, maxValue: q, existPositiveValue: I, isAllLine: j } = Mi(l, a), { yScaleRight: J, hasRightAxis: U } = sl({ config: l, yMax: P, data: a, updateConfig: h }), { hasTopAxis: ce } = By(l), [de, fe] = R.useState(!1), ke = R.useRef(), we = R.useRef(), Ce = il(ke, {
    freezeOnceVisible: !1
  }), G = (Y) => l.runtime.xAxis.type === "date" ? c(Y[l.runtime.originalXAxis.dataKey]).getTime() : Y[l.runtime.originalXAxis.dataKey], K = (Y, ge) => Y[ge], ee = l.brush.active && ((qn = l.brush.data) != null && qn.length) ? l.brush.data.map((Y) => G(Y)) : a.map((Y) => G(Y)), F = l.orientation === "horizontal" ? "yAxis" : "xAxis", pe = { data: a, config: l, minValue: V, maxValue: q, isAllLine: j, existPositiveValue: I, xAxisDataMapped: ee, xMax: N, yMax: P }, { min: ne, max: me } = Dy(pe), { xScale: le, yScale: ue, seriesScale: Le, g1xScale: Ke, g2xScale: Se, xScaleNoPadding: ye, xScaleBrush: oe } = $y({ ...pe, min: ne, max: me }), [ie, Fe] = R.useState(null);
  R.useEffect(() => {
    var Y;
    Fe((Y = we == null ? void 0 : we.current) == null ? void 0 : Y.getBoundingClientRect());
  }, [we, l.legend]);
  const se = (Y, ge) => {
    if (l.useLogScale && Y === 0.1 && (Y = 0), !(l.data && !l.data[ge] && x === "Forest Plot"))
      return l.visualizationType === "Forest Plot" ? l.data[ge][l.xAxis.dataKey] : T.yAxis.type === "date" ? o(c(Y)) : w === "vertical" ? u(Y, "left", _) : Y;
  }, Ne = (Y) => (l.useLogScale && Y === 0.1 && (Y = 0), T.xAxis.type === "date" ? o(Y) : w === "horizontal" ? u(Y, "left", _) : l.xAxis.type === "continuous" ? u(Y, "bottom", _) : Y), Te = (Y) => {
    const { numTicks: ge } = T[Y];
    let Pe;
    return Y === "yAxis" && (Pe = S && !ge ? a.length : S && ge ? ge : !S && !ge ? void 0 : !S && ge && ge, Pe === void 0 && !l.dataFormat.roundTo && (Number(me) <= 3 ? Pe = 2 : Pe = 4), Number(Pe) > Number(me) && (Pe = Number(ne) < 0 ? Math.round(me) * 2 : Math.round(me))), Y === "xAxis" && (Pe = S && !ge ? void 0 : S && ge ? ge : !S && !ge ? void 0 : !S && ge && ge, S && Pe === void 0 && !l.dataFormat.roundTo && (me <= 3 ? Pe = 2 : Pe = 4)), Pe;
  }, { tooltipData: B, showTooltip: Oe, hideTooltip: Ge, tooltipOpen: ct, tooltipLeft: nt, tooltipTop: dt } = Lc(), {
    handleTooltipMouseOver: at,
    handleTooltipClick: et,
    handleTooltipMouseOff: Et,
    tooltipStyles: qt,
    TooltipListItem: In,
    getXValueFromCoordinateDate: Sa,
    getXValueFromCoordinate: At
  } = $c({
    xScale: le,
    yScale: ue,
    showTooltip: Oe,
    hideTooltip: Ge
  });
  R.useEffect(() => {
    document.querySelector(".isEditor") && fe((ge) => !0);
  }), R.useEffect(() => {
    (Ce == null ? void 0 : Ce.isIntersecting) === !0 && l.animate && setTimeout(() => {
      fe((Y) => !0);
    }, 500);
  }, [Ce == null ? void 0 : Ce.isIntersecting, l.animate]);
  const Sn = () => {
    const { visualizationType: Y } = l;
    return Y === "Combo" && T.forecastingSeriesKeys > 0 || Y === "Area Chart" || Y === "Line" || Y === "Bar";
  }, Ut = Number(w === "horizontal" ? l.xAxis.size : l.yAxis.size), wa = () => l.visualizationType === "Forest Plot" ? l.data.length : Te("yAxis");
  return isNaN($) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement($t, { component: "LinearChart" }, /* @__PURE__ */ i.createElement("div", { style: { width: `${$}px`, height: `${O}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ i.createElement("svg", { width: "100%", height: "100%", className: `linear ${l.animate ? "animated" : ""} ${de && l.animate ? "animate" : ""} ${z && "debug"}`, role: "img", "aria-label": d(l), ref: we, style: { overflow: "visible" } }, /* @__PURE__ */ i.createElement(Nt, { width: $, height: O, fill: "transparent" }), " ", l.regions ? l.regions.map((Y) => {
    if (!Object.keys(Y).includes("from") || !Object.keys(Y).includes("to"))
      return null;
    let ge, Pe, xe;
    return l.xAxis.type === "date" && (ge = le(c(Y.from).getTime()), Pe = le(c(Y.to).getTime()), xe = Pe - ge), l.xAxis.type === "categorical" && (ge = le(Y.from), Pe = le(Y.to), xe = Pe - ge), !ge || !Pe ? null : /* @__PURE__ */ i.createElement(ve, { className: "regions", left: Number(T.yAxis.size), key: Y.label }, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: "#333",
        d: `M${ge} -5
                          L${ge} 5
                          M${ge} 0
                          L${Pe} 0
                          M${Pe} -5
                          L${Pe} 5`
      }
    ), /* @__PURE__ */ i.createElement("rect", { x: ge, y: 0, width: xe, height: P, fill: Y.background, opacity: 0.3 }), /* @__PURE__ */ i.createElement(ze, { x: ge + xe / 2, y: 5, fill: Y.color, verticalAnchor: "start", textAnchor: "middle" }, Y.label));
  }) : "", !["Spark Line", "Forest Plot"].includes(x) && /* @__PURE__ */ i.createElement(Kp, { scale: ue, tickLength: l.useLogScale ? 6 : 8, left: Number(T.yAxis.size) - l.yAxis.axisPadding, label: T.yAxis.label, stroke: "#333", tickFormat: (Y, ge) => se(Y, ge), numTicks: wa() }, (Y) => {
    const ge = T.horizontal ? (Y.axisToPoint.y - Y.axisFromPoint.y) / 2 : (Y.axisFromPoint.y - Y.axisToPoint.y) / 2, Pe = P / Y.ticks.length / 2 - P / Y.ticks.length * (1 - l.barThickness) + 5;
    return /* @__PURE__ */ i.createElement(ve, { className: "left-axis" }, Y.ticks.map((xe, yt) => {
      const E = Y.ticks[0].to.y, Q = 15, te = String(xe.value).startsWith("1") || xe.value === 0.1 ? "block" : "none", ae = te === "block" ? 7 : 0, Ee = { x: xe.to.x - ae, y: xe.to.y };
      return /* @__PURE__ */ i.createElement(ve, { key: `vx-tick-${xe.value}-${yt}`, className: "vx-axis-tick" }, !T.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Ie, { key: `${xe.value}--hide-hideTicks`, from: xe.from, to: l.useLogScale ? Ee : xe.to, stroke: l.yAxis.tickColor, display: T.horizontal ? "none" : "block" }), T.yAxis.gridLines ? /* @__PURE__ */ i.createElement(Ie, { key: `${xe.value}--hide-hideGridLines`, display: (l.useLogScale && te).toString(), from: { x: xe.from.x + N, y: xe.from.y }, to: xe.from, stroke: "rgba(0,0,0,0.3)" }) : "", w === "horizontal" && k !== "stacked" && l.yAxis.labelPlacement === "On Date/Category Axis" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        ze,
        {
          transform: `translate(${xe.to.x - 5}, ${l.isLollipopChart ? xe.to.y - E : xe.to.y - E + (Number(l.barHeight * l.series.length) - Q) / 2}) rotate(-${l.runtime.horizontal && l.runtime.yAxis.tickRotation || 0})`,
          verticalAnchor: "start",
          textAnchor: "end"
        },
        xe.formattedValue
      ), w === "horizontal" && k === "stacked" && l.yAxis.labelPlacement === "On Date/Category Axis" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(ze, { transform: `translate(${xe.to.x - 5}, ${xe.to.y - E + (Number(l.barHeight) - Q) / 2}) rotate(-${T.horizontal ? T.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, xe.formattedValue), w === "horizontal" && x === "Paired Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(ze, { transform: `translate(${xe.to.x - 5}, ${xe.to.y - E + Number(l.barHeight) / 2}) rotate(-${T.horizontal ? T.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, xe.formattedValue), w === "horizontal" && x === "Deviation Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(ze, { transform: `translate(${xe.to.x - 5}, ${l.isLollipopChart ? xe.to.y - E + 2 : xe.to.y - E + Number(l.barHeight) / 2}) rotate(-${T.horizontal ? T.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, xe.formattedValue), w === "vertical" && x !== "Paired Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        ze,
        {
          display: l.useLogScale ? te : "block",
          dx: l.useLogScale ? -6 : 0,
          x: l.runtime.horizontal ? xe.from.x + 2 : xe.to.x,
          y: xe.to.y + (l.runtime.horizontal ? Pe : 0),
          angle: -Number(l.yAxis.tickRotation) || 0,
          verticalAnchor: l.runtime.horizontal ? "start" : "middle",
          textAnchor: l.runtime.horizontal ? "start" : "end",
          fill: l.yAxis.tickLabelColor
        },
        xe.formattedValue
      ));
    }), !l.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Ie, { from: Y.axisFromPoint, to: T.horizontal ? { x: 0, y: l.visualizationType === "Forest Plot" ? O : Number(C) } : Y.axisToPoint, stroke: "#000" }), ue.domain()[0] < 0 && /* @__PURE__ */ i.createElement(Ie, { from: { x: Y.axisFromPoint.x, y: ue(0) }, to: { x: N, y: ue(0) }, stroke: "#333" }), x === "Bar" && w === "horizontal" && le.domain()[0] < 0 && /* @__PURE__ */ i.createElement(Ie, { from: { x: le(0), y: 0 }, to: { x: le(0), y: P }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ i.createElement(ze, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * T.yAxis.size}, ${ge}) rotate(-90)`, fontWeight: "bold", fill: l.yAxis.labelColor }, Y.label));
  }), U && /* @__PURE__ */ i.createElement(Up, { scale: J, left: Number($ - l.yAxis.rightAxisSize), label: l.yAxis.rightLabel, tickFormat: (Y) => u(Y, "right"), numTicks: T.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Y) => {
    const ge = T.horizontal ? (Y.axisToPoint.y - Y.axisFromPoint.y) / 2 : (Y.axisFromPoint.y - Y.axisToPoint.y) / 2, Pe = P / Y.ticks.length / 2 - P / Y.ticks.length * (1 - l.barThickness) + 5;
    return /* @__PURE__ */ i.createElement(ve, { className: "right-axis" }, Y.ticks.map((xe, yt) => /* @__PURE__ */ i.createElement(ve, { key: `vx-tick-${xe.value}-${yt}`, className: "vx-axis-tick" }, !T.yAxis.rightHideTicks && /* @__PURE__ */ i.createElement(Ie, { from: xe.from, to: xe.to, display: T.horizontal ? "none" : "block", stroke: l.yAxis.rightAxisTickColor }), T.yAxis.rightGridLines ? /* @__PURE__ */ i.createElement(Ie, { from: { x: xe.from.x + N, y: xe.from.y }, to: xe.from, stroke: "rgba(0,0,0,0.3)" }) : "", !l.yAxis.rightHideLabel && /* @__PURE__ */ i.createElement(ze, { x: xe.to.x, y: xe.to.y + (T.horizontal ? Pe : 0), verticalAnchor: T.horizontal ? "start" : "middle", textAnchor: "start", fill: l.yAxis.rightAxisTickLabelColor }, xe.formattedValue))), !l.yAxis.rightHideAxis && /* @__PURE__ */ i.createElement(Ie, { from: Y.axisFromPoint, to: Y.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(ze, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${l.yAxis.rightLabelOffsetSize ? l.yAxis.rightLabelOffsetSize : 0}, ${ge}) rotate(-90)`, fontWeight: "bold", fill: l.yAxis.rightAxisLabelColor }, Y.label));
  }), ce && l.topAxis.hasLine && /* @__PURE__ */ i.createElement(
    Zp,
    {
      stroke: "#333",
      left: Number(T.yAxis.size),
      scale: le,
      hideTicks: !0,
      hideZero: !0,
      tickLabelProps: () => ({
        fill: "transparent"
      })
    }
  ), x !== "Paired Bar" && x !== "Spark Line" && /* @__PURE__ */ i.createElement(
    qa,
    {
      top: T.horizontal && l.visualizationType !== "Forest Plot" ? Number(C) + Number(l.xAxis.axisPadding) : (l.visualizationType === "Forest Plot", P + Number(l.xAxis.axisPadding)),
      left: Number(T.yAxis.size),
      label: T.xAxis.label,
      tickFormat: Ne,
      scale: le,
      stroke: "#333",
      numTicks: Te("xAxis"),
      tickStroke: "#333"
    },
    (Y) => {
      const ge = l.visualizationType !== "Forest Plot" ? (Y.axisToPoint.x - Y.axisFromPoint.x) / 2 : $ / 2, Pe = ($e) => /\s/.test($e), xe = Y.ticks.some(($e) => Pe($e.value)), yt = { small: 16, medium: 18, large: 20 }, E = 8, Q = Math.max(...Y.ticks.map(($e) => f($e.formattedValue, `normal ${yt[l.fontSize]}px sans-serif`))), te = xe ? 180 : 100, ae = Y.ticks.map(($e) => f($e.formattedValue, `normal ${yt[l.fontSize]}px sans-serif`)), Ee = ae.reduce(($e, Ue) => $e + Ue, te), Ae = (N - Ee) / (Y.ticks.length - 1);
      let re = [0];
      for (let $e = 1; $e < ae.length; $e++)
        re[$e] = re[$e - 1] + ae[$e - 1] + Ae;
      let Me = !1;
      ae.forEach(($e, Ue) => {
        if (re[Ue] + ae[Ue] > re[Ue + 1]) {
          Me = !0;
          return;
        }
      });
      const Je = Me && l.isResponsiveTicks ? Q + E + 20 : 0, ft = Number(l.xAxis.tickRotation) > 0 ? Number(l.xAxis.tickRotation) : 0;
      return l.dynamicMarginTop = Je, l.xAxis.tickWidthMax = Q, /* @__PURE__ */ i.createElement(ve, { className: "bottom-axis" }, Y.ticks.map(($e, Ue, zt) => {
        const _e = String($e.value).startsWith("1") || $e.value === 0.1 ? "block" : "none", Ye = _e === "block" ? 16 : E, Xe = { x: $e.to.x, y: Ye };
        let mt = f($e.formattedValue, `normal ${yt[l.fontSize]}px sans-serif`), Tt = 100 / zt.length;
        l.yAxis.tickRotation = l.isResponsiveTicks && l.orientation === "horizontal" ? 0 : l.yAxis.tickRotation, l.xAxis.tickRotation = l.isResponsiveTicks && l.orientation === "vertical" ? 0 : l.xAxis.tickRotation;
        const tt = l.isResponsiveTicks && Me ? -Number(l.xAxis.maxTickRotation) || -90 : -Number(l.runtime.xAxis.tickRotation);
        return /* @__PURE__ */ i.createElement(ve, { key: `vx-tick-${$e.value}-${Ue}`, className: "vx-axis-tick" }, !l.xAxis.hideTicks && /* @__PURE__ */ i.createElement(Ie, { from: $e.from, to: w === "horizontal" && l.useLogScale ? Xe : $e.to, stroke: l.xAxis.tickColor, strokeWidth: _e === "block" ? 1.3 : 1 }), !l.xAxis.hideLabel && /* @__PURE__ */ i.createElement(
          ze,
          {
            dy: l.orientation === "horizontal" && l.useLogScale ? 8 : 0,
            display: l.orientation === "horizontal" && l.useLogScale ? _e : "block",
            x: $e.to.x,
            y: $e.to.y,
            angle: tt,
            verticalAnchor: tt < -50 ? "middle" : "start",
            textAnchor: tt ? "end" : "middle",
            width: Me && !l.isResponsiveTicks && !Number(l[F].tickRotation) ? Tt : mt,
            fill: l.xAxis.tickLabelColor
          },
          $e.formattedValue
        ));
      }), !l.xAxis.hideAxis && /* @__PURE__ */ i.createElement(Ie, { from: Y.axisFromPoint, to: Y.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(
        ze,
        {
          x: ge,
          y: l.orientation === "horizontal" ? Je || l.xAxis.labelOffset : l.isResponsiveTicks && Je && !S ? Je : Number(ft) && !l.isResponsiveTicks && !S ? Number(ft + Q / 1.3) : Number(l.xAxis.labelOffset),
          textAnchor: "middle",
          fontWeight: "bold",
          fill: l.xAxis.labelColor
        },
        Y.label
      ));
    }
  ), x === "Paired Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(qa, { top: P, left: Number(T.yAxis.size), label: T.xAxis.label, tickFormat: T.xAxis.type === "date" ? o : u, scale: Ke, stroke: "#333", tickStroke: "#333", numTicks: T.xAxis.numTicks || void 0 }, (Y) => /* @__PURE__ */ i.createElement(ve, { className: "bottom-axis" }, Y.ticks.map((ge, Pe) => {
    const xe = ge.index !== 0 ? l.yAxis.tickRotation : 0, yt = ge.index !== 0 && l.yAxis.tickRotation && l.yAxis.tickRotation > 0 ? "end" : "middle";
    return /* @__PURE__ */ i.createElement(ve, { key: `vx-tick-${ge.value}-${Pe}`, className: "vx-axis-tick" }, !T.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Ie, { from: ge.from, to: ge.to, stroke: "#333" }), !T.yAxis.hideLabel && /* @__PURE__ */ i.createElement(ze, { x: ge.to.x, y: ge.to.y, angle: -xe, verticalAnchor: "start", textAnchor: yt }, u(ge.value, "left")));
  }), !T.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Ie, { from: Y.axisFromPoint, to: Y.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ i.createElement(
    qa,
    {
      top: P,
      left: Number(T.yAxis.size),
      label: T.xAxis.label,
      tickFormat: T.xAxis.type === "date" ? o : T.xAxis.dataKey !== "Year" ? u : (Y) => Y,
      scale: Se,
      stroke: "#333",
      tickStroke: "#333",
      numTicks: T.xAxis.numTicks || void 0
    },
    (Y) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ve, { className: "bottom-axis" }, Y.ticks.map((ge, Pe) => {
      const xe = ge.index !== 0 ? l.yAxis.tickRotation : 0, yt = ge.index !== 0 && l.yAxis.tickRotation && l.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ i.createElement(ve, { key: `vx-tick-${ge.value}-${Pe}`, className: "vx-axis-tick" }, !T.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Ie, { from: ge.from, to: ge.to, stroke: "#333" }), !T.yAxis.hideLabel && /* @__PURE__ */ i.createElement(ze, { x: ge.to.x, y: ge.to.y, angle: -xe, verticalAnchor: "start", textAnchor: yt }, u(ge.value, "left")));
    }), !T.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Ie, { from: Y.axisFromPoint, to: Y.axisToPoint, stroke: "#333" })), /* @__PURE__ */ i.createElement(ve, null, /* @__PURE__ */ i.createElement(ze, { x: N / 2, y: l.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, T.xAxis.label)))
  )), x === "Deviation Bar" && /* @__PURE__ */ i.createElement(Cy, { animatedChart: de, xScale: le, yScale: ue, width: N, height: P }), x === "Paired Bar" && /* @__PURE__ */ i.createElement(My, { originalWidth: $, width: N, height: P }), x === "Scatter Plot" && /* @__PURE__ */ i.createElement(
    wy,
    {
      xScale: le,
      yScale: ue,
      getXAxisData: G,
      getYAxisData: K,
      xMax: N,
      yMax: P,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: et,
      tooltipData: B,
      showTooltip: Oe
    }
  ), x === "Box Plot" && /* @__PURE__ */ i.createElement(Sy, { xScale: le, yScale: ue }), (x === "Area Chart" && l.visualizationSubType === "regular" || x === "Combo") && /* @__PURE__ */ i.createElement(gy, { xScale: le, yScale: ue, yMax: P, xMax: N, chartRef: we, width: N, height: P, handleTooltipMouseOver: at, handleTooltipMouseOff: Et, tooltipData: B, showTooltip: Oe }), (x === "Area Chart" && l.visualizationSubType === "stacked" || x === "Combo") && /* @__PURE__ */ i.createElement(vy, { xScale: le, yScale: ue, yMax: P, xMax: N, chartRef: we, width: N, height: P, handleTooltipMouseOver: at, handleTooltipMouseOff: Et, tooltipData: B, showTooltip: Oe }), (x === "Bar" || x === "Combo") && /* @__PURE__ */ i.createElement(
    ky,
    {
      xScale: le,
      yScale: ue,
      seriesScale: Le,
      xMax: N,
      yMax: P,
      getXAxisData: G,
      getYAxisData: K,
      animatedChart: de,
      visible: de,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: et,
      tooltipData: B,
      showTooltip: Oe,
      chartRef: we
    }
  ), (x === "Line" || x === "Combo") && /* @__PURE__ */ i.createElement(
    ts,
    {
      xScale: le,
      yScale: ue,
      getXAxisData: G,
      getYAxisData: K,
      xMax: N,
      yMax: P,
      seriesStyle: l.series,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: et,
      tooltipData: B,
      showTooltip: Oe,
      chartRef: we
    }
  ), (x === "Forecasting" || x === "Combo") && /* @__PURE__ */ i.createElement(
    Py,
    {
      showTooltip: Oe,
      tooltipData: B,
      xScale: le,
      yScale: ue,
      width: N,
      le: !0,
      height: P,
      xScaleNoPadding: ye,
      chartRef: we,
      getXValueFromCoordinate: At,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      isBrush: !1
    }
  ), l.yAxis.anchors && l.yAxis.anchors.map((Y) => /* @__PURE__ */ i.createElement(Ie, { strokeDasharray: m(Y.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + l.yAxis.size, y: ue(Y.value) }, to: { x: N, y: ue(Y.value) }, display: T.horizontal ? "none" : "block" })), x === "Forest Plot" && /* @__PURE__ */ i.createElement(
    _y,
    {
      xScale: le,
      yScale: ue,
      seriesScale: Le,
      width: N,
      height: P,
      maxWidth: $,
      maxHeight: O,
      getXAxisData: G,
      getYAxisData: K,
      animatedChart: de,
      visible: de,
      handleTooltipMouseOver: at,
      handleTooltipMouseOff: Et,
      handleTooltipClick: et,
      tooltipData: B,
      showTooltip: Oe,
      chartRef: we,
      config: l
    }
  ), ["Line", "Bar", "Combo", "Area Chart"].includes(l.visualizationType) && !S && /* @__PURE__ */ i.createElement(ug, { xScaleBrush: oe, yScale: ue, xMax: N, yMax: P }), x !== "Bar" && x !== "Paired Bar" && x !== "Box Plot" && x !== "Area Chart" && x !== "Scatter Plot" && x !== "Deviation Bar" && x !== "Forecasting" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ts, { xScale: le, yScale: ue, getXAxisData: G, getYAxisData: K, xMax: N, yMax: P, seriesStyle: l.series })), l.yAxis.anchors && l.yAxis.anchors.map((Y, ge) => {
    let Pe = ue(Y.value);
    if (!Y.value)
      return;
    const xe = w === "horizontal" && x === "Bar" ? l.barHeight / 4 : 0;
    if (Pe)
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          Ie,
          {
            key: `yAxis-${Y.value}--${ge}`,
            strokeDasharray: m(Y.lineStyle),
            stroke: Y.color ? Y.color : "rgba(0,0,0,1)",
            className: "anchor-y",
            from: { x: 0 + Ut, y: Pe - xe },
            to: { x: $ - l.yAxis.rightAxisSize, y: Pe - xe }
          }
        )
      );
  }), l.xAxis.anchors && l.xAxis.anchors.map((Y, ge) => {
    let Pe = A;
    w === "horizontal" && (Pe = D);
    let xe = Pe.type === "date" ? le(c(Y.value, !1)) : le(Y.value);
    if (xe)
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          Ie,
          {
            key: `xAxis-${Y.value}--${ge}`,
            strokeDasharray: m(Y.lineStyle),
            stroke: Y.color ? Y.color : "rgba(0,0,0,1)",
            fill: Y.color ? Y.color : "rgba(0,0,0,1)",
            className: "anchor-x",
            from: { x: Number(xe) + Number(Ut), y: 0 },
            to: { x: Number(xe) + Number(Ut), y: P }
          }
        )
      );
  }), Sn && Oe && B && l.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(ve, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(Ie, { from: { x: B.dataXPosition - 10, y: 0 }, to: { x: B.dataXPosition - 10, y: P }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })), Sn && Oe && B && l.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(ve, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: l.yAxis.size ? l.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(Ie, { from: { x: 0, y: B.dataYPosition }, to: { x: N, y: B.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })), l.filters && l.filters.values.length === 0 && a.length === 0 && /* @__PURE__ */ i.createElement(ze, { x: Number(l.yAxis.size) + Number(N / 2), y: O / 2 - l.xAxis.size / 2, textAnchor: "middle" }, l.chartMessage.noData)), B && Object.entries(B.data).length > 0 && ct && Oe && B.dataYPosition && B.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${l.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Dc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: nt, top: dt }, /* @__PURE__ */ i.createElement("ul", null, typeof B == "object" && Object.entries(B.data).map((Y, ge) => /* @__PURE__ */ i.createElement(In, { item: Y, key: ge }))))), (l.orientation === "horizontal" || l.visualizationType === "Scatter Plot" || l.visualizationType === "Box Plot") && /* @__PURE__ */ i.createElement(py, { id: `cdc-open-viz-tooltip-${T.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${l.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ i.createElement("div", { className: "animation-trigger", ref: ke })));
};
var fg = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function Dr() {
  return Dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Dr.apply(this, arguments);
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
  return /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("marker", Dr({
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
function $r() {
  return $r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, $r.apply(this, arguments);
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
  return /* @__PURE__ */ i.createElement(tu, $r({
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
  const { width: t, height: n } = e, { transformedData: a, config: r, parseDate: l, formatDate: c, seriesHighlight: o, formatNumber: s, colorScale: u, handleChartAriaLabels: d } = R.useContext(Re);
  let h = t;
  const { minValue: m, maxValue: y } = Mi(r, a), p = { top: 5, right: 10, bottom: 10, left: 10 }, v = n, g = h - r.runtime.yAxis.size, f = v - p.top - 20, b = (S) => r.runtime.xAxis.type === "date" ? l(S[r.runtime.originalXAxis.dataKey]).getTime() : S[r.runtime.originalXAxis.dataKey], x = (S, _) => S[_];
  let k, w;
  const { max: A, min: D } = r.runtime.yAxis, T = Number(A) >= Number(y), z = Number(D) <= Number(m);
  if (a) {
    let S = D && z ? D : m, _ = A && T ? A : Number.MIN_VALUE;
    if (_ === Number.MIN_VALUE && (_ = y), r.runtime.yAxis.paddingPercent) {
      let N = (_ - S) * r.runtime.yAxis.paddingPercent;
      S -= N, _ += N;
    }
    let O = a.map((N) => b(N));
    r.runtime.horizontal ? (k = pt({
      domain: [S, _],
      range: [0, g]
    }), w = r.runtime.xAxis.type === "date" ? pt({ domain: [Math.min(...O), Math.max(...O)] }) : Mn({ domain: O, padding: 0.5 }), Mn({
      domain: r.runtime.barSeriesKeys || r.runtime.seriesKeys,
      range: [0, f]
    }), w.rangeRound([0, f])) : (S = S < 0 ? S * 1.11 : S, w = pt({
      domain: [S, _],
      range: [f - p.bottom, p.top]
    }), k = Mn({
      domain: O,
      range: [p.left, h - p.right]
    }), Mn({
      domain: r.runtime.barSeriesKeys || r.runtime.seriesKeys,
      range: [0, g]
    }));
  }
  const $ = [k.domain()[0], k.domain()[k.domain().length - 1]];
  return /* @__PURE__ */ i.createElement($t, { component: "SparkLine" }, /* @__PURE__ */ i.createElement("svg", { role: "img", "aria-label": d(r), width: t, height: 100, className: "sparkline", tabIndex: 0 }, ((C = r.runtime.lineSeriesKeys) == null ? void 0 : C.length) > 0 ? r.runtime.lineSeriesKeys : r.runtime.seriesKeys.map((S, _) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    ve,
    {
      style: { width: h },
      className: "sparkline-group",
      key: `series-${S}`,
      opacity: r.legend.behavior === "highlight" && o.length > 0 && o.indexOf(S) === -1 ? 0.5 : 1,
      display: r.legend.behavior === "highlight" || o.length === 0 || o.indexOf(S) !== -1 ? "block" : "none"
    },
    a.map((O, N) => {
      let P = r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ${s(x(O, S))}` : s(x(O, S)), V = r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ${O[r.runtime.xAxis.dataKey]}` : O[r.runtime.xAxis.dataKey];
      return `${P}${V}`, r.seriesLabel && `${r.seriesLabel}${S}`, /* @__PURE__ */ i.createElement(ve, { key: `series-${S}-point-${N}` }, /* @__PURE__ */ i.createElement(ze, { display: r.labels ? "block" : "none", x: k(b(O)), y: w(x(O, S)), fill: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[S] : S) : "#000", textAnchor: "middle" }, s(O[S])));
    }),
    /* @__PURE__ */ i.createElement(
      An,
      {
        curve: Si,
        data: a,
        x: (O) => k(b(O)),
        y: (O) => w(x(O, S)),
        stroke: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[S] : S) : "#000",
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
        fill: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[S] : S) : "#000"
      }
    )
  ), /* @__PURE__ */ i.createElement(
    qa,
    {
      top: f + p.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: k,
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
function zr() {
  return zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, zr.apply(this, arguments);
}
function vg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Ei(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, a = e.alignItems, r = a === void 0 ? "center" : a, l = e.margin, c = l === void 0 ? "0" : l, o = e.display, s = o === void 0 ? "flex" : o, u = e.children, d = vg(e, xg);
  return /* @__PURE__ */ i.createElement("div", zr({
    className: "visx-legend-item",
    style: {
      display: s,
      alignItems: r,
      flexDirection: n,
      margin: c
    }
  }, d), u);
}
Ei.propTypes = {
  alignItems: W.string,
  margin: W.oneOfType([W.string, W.number]),
  children: W.node,
  display: W.string
};
var bg = ["flex", "label", "margin", "align", "children"];
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
function Eg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Ai(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, a = e.label, r = e.margin, l = r === void 0 ? "5px 0" : r, c = e.align, o = c === void 0 ? "left" : c, s = e.children, u = Eg(e, bg);
  return /* @__PURE__ */ i.createElement("div", Rr({
    className: "visx-legend-label",
    style: {
      justifyContent: o,
      display: "flex",
      flex: n,
      margin: l
    }
  }, u), s || a);
}
Ai.propTypes = {
  align: W.string,
  label: W.node,
  flex: W.oneOfType([W.string, W.number]),
  margin: W.oneOfType([W.string, W.number]),
  children: W.node
};
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
function Al(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    style: Fr({
      width: n,
      height: a,
      background: t
    }, r)
  });
}
Al.propTypes = {
  fill: W.string,
  width: W.oneOfType([W.string, W.number]),
  height: W.oneOfType([W.string, W.number])
};
function nu(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, c = typeof a == "string" || typeof a > "u" ? 0 : a, o = Math.max(l, c), s = o / 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: o,
    height: o
  }, /* @__PURE__ */ i.createElement(ve, {
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
  }, /* @__PURE__ */ i.createElement(ve, {
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
var er = function() {
};
function Ag(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, r = a === void 0 ? er : a, l = e.size, c = l === void 0 ? er : l, o = e.width, s = e.height, u = e.label, d = e.item, h = e.itemIndex, m = e.shapeStyle, y = m === void 0 ? er : m, p = {
    width: o,
    height: s,
    item: d,
    itemIndex: h,
    label: u,
    fill: r(ma({}, u)),
    size: c(ma({}, u)),
    style: y(ma({}, u))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ i.createElement(nu, p) : n === "line" ? /* @__PURE__ */ i.createElement(au, p) : /* @__PURE__ */ i.createElement(Al, p) : /* @__PURE__ */ i.isValidElement(n) ? /* @__PURE__ */ i.cloneElement(n, p) : n ? /* @__PURE__ */ i.createElement(n, p) : null;
}
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
function iu(e) {
  var t = e.shape, n = t === void 0 ? Al : t, a = e.width, r = e.height, l = e.margin, c = e.label, o = e.item, s = e.itemIndex, u = e.fill, d = e.size, h = e.shapeStyle;
  return /* @__PURE__ */ i.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: d ? d(Ti({}, c)) : a,
      height: d ? d(Ti({}, c)) : r,
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
function cs(e) {
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
var kg = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function ha() {
  return ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ha.apply(this, arguments);
}
function Sg(e, t) {
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
  var t = e.className, n = e.style, a = n === void 0 ? wg : n, r = e.scale, l = e.shape, c = e.domain, o = e.fill, s = o === void 0 ? cs : o, u = e.size, d = u === void 0 ? cs : u, h = e.labelFormat, m = h === void 0 ? ru : h, y = e.labelTransform, p = y === void 0 ? Tg : y, v = e.shapeWidth, g = v === void 0 ? 15 : v, f = e.shapeHeight, b = f === void 0 ? 15 : f, x = e.shapeMargin, k = x === void 0 ? "2px 4px 2px 0" : x, w = e.shapeStyle, A = e.labelAlign, D = A === void 0 ? "left" : A, T = e.labelFlex, z = T === void 0 ? "1" : T, $ = e.labelMargin, C = $ === void 0 ? "0 4px" : $, S = e.itemMargin, _ = S === void 0 ? "0" : S, O = e.direction, N = O === void 0 ? "column" : O, P = e.itemDirection, V = P === void 0 ? "row" : P, q = e.legendLabelProps, I = e.children, j = Sg(e, kg), J = c || ("domain" in r ? r.domain() : []), U = p({
    scale: r,
    labelFormat: m
  }), ce = J.map(U);
  return I ? /* @__PURE__ */ i.createElement(i.Fragment, null, I(ce)) : /* @__PURE__ */ i.createElement("div", {
    className: Ze("visx-legend", t),
    style: ha({}, a, {
      flexDirection: N
    })
  }, ce.map(function(de, fe) {
    return /* @__PURE__ */ i.createElement(Ei, ha({
      key: "legend-" + de.text + "-" + fe,
      margin: _,
      flexDirection: V
    }, j), /* @__PURE__ */ i.createElement(iu, {
      shape: l,
      height: b,
      width: g,
      margin: k,
      item: J[fe],
      itemIndex: fe,
      label: de,
      fill: s,
      size: d,
      shapeStyle: w
    }), /* @__PURE__ */ i.createElement(Ai, ha({
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
  } = R.useContext(Re), { innerClasses: m, containerClasses: y } = Ng(e), { visualizationType: p, visualizationSubType: v, series: g, runtime: f, orientation: b } = e, x = ($) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? $.reverse() : $, k = ($) => {
    var _, O, N, P;
    const C = (_ = e.legend) == null ? void 0 : _.colorCode;
    if (p === "Deviation Bar") {
      const [V, q] = l[e.twoColor.palette], I = {
        datum: "X",
        index: 0,
        text: `Below ${e.xAxis.targetLabel}`,
        value: V
      }, j = {
        datum: "X",
        index: 1,
        text: `Above ${e.xAxis.targetLabel}`,
        value: q
      };
      return x([I, j]);
    }
    if (p === "Bar" && v === "regular" && C && (g == null ? void 0 : g.length) === 1) {
      let V = u[e.palette];
      for (; c.length > V.length; )
        V = V.concat(V);
      V = V.slice(0, s.length);
      const q = /* @__PURE__ */ new Set();
      c.forEach((j) => q.add(j[C]));
      const I = Array.from(q).map((j, J) => ({
        datum: j,
        index: J,
        text: j,
        value: V[J]
      }));
      return x(I);
    }
    if (((O = f == null ? void 0 : f.forecastingSeriesKeys) == null ? void 0 : O.length) > 0) {
      let V = [];
      return (P = (N = e.runtime) == null ? void 0 : N.forecastingSeriesKeys) == null || P.map((q, I) => {
        var j;
        return (j = q == null ? void 0 : q.stages) == null ? void 0 : j.map((J, U) => {
          var fe, ke, we, Ce;
          let ce = (fe = Xa[J.color]) != null && fe[2] ? (ke = Xa[J.color]) == null ? void 0 : ke[2] : (we = u[J.color]) != null && we[2] ? (Ce = u[J.color]) == null ? void 0 : Ce[2] : "#ccc";
          const de = {
            datum: J.key,
            index: U,
            text: J.key,
            value: ce
          };
          V.push(de);
        });
      }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((q, I) => {
        let j = u[e.palette][I] ? u[e.palette][I] : "#ccc";
        const J = {
          datum: q,
          index: I,
          text: q,
          value: j
        };
        V.push(J);
      }), x(V);
    }
    if (e.series.map((V) => V.name).filter((V) => V).length > 0) {
      let V = u[e.palette];
      for (; c.length > V.length; )
        V = V.concat(V);
      V = V.slice(0, s.length);
      const q = /* @__PURE__ */ new Set();
      e.series.forEach((j) => {
        q.add(j.name ? j.name : j.dataKey);
      });
      const I = Array.from(q).map((j, J) => ({
        datum: j,
        index: J,
        text: j,
        value: n(j)
      }));
      return x(I);
    }
    return x($);
  }, w = () => {
    let $ = 0;
    const C = t.position === "bottom" || ["sm", "xs", "xxs"].includes(d), S = e.orientation === "horizontal", _ = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, O = e.brush.active, N = 25, P = e.brush.height;
    return !S && C && e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && !_ && ($ = O ? -e.xAxis.size + e.xAxis.labelOffset + N + P : -e.xAxis.size + e.xAxis.labelOffset + N), !S && C && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && !_ && ($ = O ? -e.xAxis.size + e.xAxis.labelOffset + N + P : -e.xAxis.size + e.xAxis.labelOffset + N), !S && C && e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && _ && ($ = O ? e.xAxis.tickWidthMax + P + -e.xAxis.size + e.xAxis.labelOffset + N : e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + N), !S && C && !e.xAxis.label && !e.dynamicMarginTop && !e.isResponsiveTicks && _ && ($ = O ? e.xAxis.tickWidthMax + P + -e.xAxis.size + N * 1.4 : e.xAxis.tickWidthMax + -e.xAxis.size + N * 1.3), !S && C && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && !_ && ($ = O ? e.dynamicMarginTop + -e.xAxis.size + N + P : e.dynamicMarginTop + -e.xAxis.size + N), !S && C && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && !_ && ($ = O ? e.dynamicMarginTop - N : e.dynamicMarginTop - P - N), `${$}px`;
  }, A = t.position === "bottom" || ["sm", "xs", "xxs"].includes(d);
  A && e.brush.active && e.brush.height * 2 + e.dynamicMarginTop / 2, A && e.isResponsiveTicks && e.dynamicMarginTop && !e.brush.active && e.dynamicMarginTop;
  const D = {
    marginBottom: A ? "15px" : "0px",
    marginTop: w()
    // marginTop: isBottomOrSmallViewport && orientation === 'horizontal' ? `${config.yAxis.label && config.isResponsiveTicks ? config.dynamicMarginTop : config.runtime.xAxis.size}px` : `${brushHeight + top}px`
  }, { HighLightedBarUtils: T } = _i(e);
  let z = T.findDuplicates(e.highlightedBarValues);
  return t ? e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement("aside", { style: D, id: "legend", className: y.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, t.label && /* @__PURE__ */ i.createElement("h2", null, pn(t.label)), t.description && /* @__PURE__ */ i.createElement("p", null, pn(t.description)), /* @__PURE__ */ i.createElement(Cg, { scale: n, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, ($) => /* @__PURE__ */ i.createElement("div", { className: m.join(" ") }, k($).map((C, S) => {
    var N, P, V, q;
    let _ = ["legend-item", `legend-text--${C.text.replace(" ", "").toLowerCase()}`], O = C.datum;
    if (e.exclusions.active && ((N = e.exclusions.keys) != null && N.includes(O)))
      return null;
    if (f.seriesLabels) {
      let I = e.runtime.seriesLabelsAll.indexOf(O);
      O = e.runtime.seriesKeys[I], ((P = f == null ? void 0 : f.forecastingSeriesKeys) == null ? void 0 : P.length) > 0 && (O = C.text);
    }
    return a.length > 0 && a.includes(O) === !1 && _.push("inactive"), /* @__PURE__ */ i.createElement(
      Ei,
      {
        className: _.join(" "),
        tabIndex: 0,
        key: `legend-quantile-${S}`,
        onKeyPress: (I) => {
          I.key === "Enter" && r(C);
        },
        onClick: () => {
          r(C);
        }
      },
      e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ i.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ i.createElement(Ie, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: C.value, strokeWidth: 2, strokeDasharray: h((V = e.series[S]) != null && V.type ? (q = e.series[S]) == null ? void 0 : q.type : "") })) : /* @__PURE__ */ i.createElement(Kl, { fill: C.value }),
      /* @__PURE__ */ i.createElement(Ai, { align: "left", margin: "0 0 0 4px" }, C.text)
    );
  }), z.map((C, S) => {
    let _ = "legend-item", O = C.legendLabel;
    return O ? (a.length > 0 && a.includes(O) === !1 && (_ += " inactive"), /* @__PURE__ */ i.createElement(
      Ei,
      {
        className: _,
        tabIndex: 0,
        key: `legend-quantile-${S}`,
        onKeyPress: (N) => {
          N.key === "Enter" && r(C.legendLabel);
        },
        onClick: () => {
          r(C.legendLabel);
        }
      },
      /* @__PURE__ */ i.createElement(Kl, { fill: "transparent", borderColor: C.color ? C.color : "rgba(255, 102, 1)" }),
      " ",
      /* @__PURE__ */ i.createElement(Ai, { align: "left", margin: "0 0 0 4px" }, C.legendLabel ? C.legendLabel : C.value)
    )) : !1;
  }), a.length > 0 && /* @__PURE__ */ i.createElement("button", { className: `legend-reset ${e.theme}`, onClick: (C) => o(C), tabIndex: 0 }, "Reset")))) : null;
}, tr = {
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
    }, k = function(T) {
      if (!h.current)
        return !1;
      var z = T - r.current, $ = T - l.current;
      return !r.current || z >= t || z < 0 || v && $ >= g;
    }, w = function(T) {
      return c.current = null, p && o.current ? b(T) : (o.current = s.current = null, u.current);
    }, A = function() {
      var T = Date.now();
      if (k(T))
        return w(T);
      if (h.current) {
        var z = T - r.current, $ = T - l.current, C = t - z, S = v ? Math.min(C, g - $) : C;
        x(A, S);
      }
    }, D = function() {
      for (var T = [], z = 0; z < arguments.length; z++)
        T[z] = arguments[z];
      var $ = Date.now(), C = k($);
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
function us(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function _g(e) {
  var t = R.useState(us(e)), n = t[0], a = t[1], r = R.useCallback(function(l) {
    return a(us(l));
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
const Ya = (e) => /* @__PURE__ */ R.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ R.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), ea = R.memo(({ label: e, value: t, options: n, fieldName: a, section: r = null, subsection: l = null, required: c = !1, tooltip: o, updateField: s, initial: u, ...d }) => {
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
}), nr = R.memo(({ label: e, value: t, fieldName: n, section: a = null, subsection: r = null, tooltip: l, updateField: c, ...o }) => /* @__PURE__ */ i.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ i.createElement(
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
), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, e, l))), ta = R.memo(({ label: e, tooltip: t, section: n = null, subsection: a = null, fieldName: r, updateField: l, value: c, type: o = "input", i: s = null, min: u = null, ...d }) => {
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
  const { config: e, rawData: t, updateConfig: n, isDebug: a } = R.useContext(Re), r = (x) => {
    x.orientation === "horizontal" && (x.labels = !1), x.table.show === void 0 && (x.table.show = !isDashboard), x.visualizationType === "Combo" && (x.orientation = "vertical");
  }, l = (x = !0) => {
    let k = {};
    return t.forEach((w) => {
      Object.keys(w).forEach((A) => k[A] = !0);
    }), x && Object.keys(k).forEach((w) => {
      (e.series && e.series.filter((A) => A.dataKey === w).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(w)) && delete k[w];
    }), Object.keys(k);
  }, c = (x, k, w, A) => {
    if (x === "boxplot" && k === "legend") {
      n({
        ...e,
        [x]: {
          ...e[x],
          [k]: {
            ...e.boxplot[k],
            [w]: A
          }
        }
      });
      return;
    }
    if (x === "boxplot" && k === "labels") {
      n({
        ...e,
        [x]: {
          ...e[x],
          [k]: {
            ...e.boxplot[k],
            [w]: A
          }
        }
      });
      return;
    }
    if (x === "forestPlot" && k) {
      n({
        ...e,
        [x]: {
          ...e[x],
          [k]: {
            ...e.forestPlot[k],
            [w]: A
          }
        }
      });
      return;
    }
    if (x === "columns" && k !== "" && w !== "") {
      n({
        ...e,
        [x]: {
          ...e[x],
          [k]: {
            ...e[x][k],
            [w]: A
          }
        }
      });
      return;
    }
    if (x === null && k === null) {
      let $ = { ...e, [w]: A };
      r($), n($);
      return;
    }
    const D = Array.isArray(e[x]);
    let T = D ? [...e[x], A] : { ...e[x], [w]: A };
    k !== null && (D ? (T = [...e[x]], T[k] = { ...T[k], [w]: A }) : typeof A == "string" ? T[k] = A : T = { ...e[x], [k]: { ...e[x][k], [w]: A } });
    let z = { ...e, [x]: T };
    r(z), n(z);
  };
  return /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "Forest Plot Settings", (!e.forestPlot.estimateField || !e.forestPlot.upper || !e.forestPlot.lower) && /* @__PURE__ */ i.createElement(Ya, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement(ta, { type: "text", value: ((o = e.forestPlot) == null ? void 0 : o.title) || "", updateField: c, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ i.createElement(
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
    ea,
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
    ea,
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
    ea,
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
    ea,
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
    ea,
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
  )), /* @__PURE__ */ i.createElement(ta, { type: "number", min: 20, max: 45, value: e.forestPlot.rowHeight ? e.forestPlot.rowHeight : 10, updateField: c, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(ta, { type: "number", value: ((u = (s = e.forestPlot) == null ? void 0 : s.regression) == null ? void 0 : u.estimateField) || "", updateField: c, section: "forestPlot", subsection: "regression", fieldName: "estimateField", label: "Line of No Effect" }), /* @__PURE__ */ i.createElement(ta, { type: "text", value: ((h = (d = e.forestPlot) == null ? void 0 : d.regression) == null ? void 0 : h.baseLineColor) || "black", updateField: c, section: "forestPlot", subsection: "regression", fieldName: "baseLineColor", label: "Base Color" }), /* @__PURE__ */ i.createElement(nr, { value: ((y = (m = e.forestPlot) == null ? void 0 : m.regression) == null ? void 0 : y.showBaseLine) || !1, section: "forestPlot", subsection: "regression", fieldName: "showBaseLine", label: "Show base line", updateField: c }), /* @__PURE__ */ i.createElement(nr, { value: ((v = (p = e.forestPlot) == null ? void 0 : p.regression) == null ? void 0 : v.showDiamond) || !1, section: "forestPlot", subsection: "regression", fieldName: "showDiamond", label: "Show Diamond", updateField: c }), /* @__PURE__ */ i.createElement(nr, { value: ((g = e.forestPlot) == null ? void 0 : g.hideDateCategoryCol) || !1, section: "forestPlot", fieldName: "hideDateCategoryCol", label: "Hide Date Category Column", updateField: c }), /* @__PURE__ */ i.createElement(ta, { type: "text", value: ((b = (f = e.forestPlot) == null ? void 0 : f.regression) == null ? void 0 : b.description) || "", updateField: c, section: "forestPlot", subsection: "regression", fieldName: "description", label: "Description" })));
}, jn = i.createContext(), Dg = (e) => {
  const { updateConfig: t, config: n } = R.useContext(Re), { getColumns: a, selectComponent: r } = e, l = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], c = (o, s, u) => {
    let d = [...n.series];
    d[o][u] = s, t({ ...n, series: d });
  };
  return /* @__PURE__ */ i.createElement(jn.Provider, { value: { updateSeries: c, supportedRightAxisTypes: l, getColumns: a, selectComponent: r } }, e.children);
}, $g = (e) => {
  const { config: t, updateConfig: n } = R.useContext(Re), { series: a, index: r } = e;
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
  return Object.keys(vi).map((s) => o.push(vi[s])), /* @__PURE__ */ i.createElement(
    rn,
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
  const { config: t } = R.useContext(Re), { updateSeries: n } = R.useContext(jn), { index: a, series: r } = e, l = () => {
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
      rn,
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
  const { config: t, updateConfig: n, rawData: a } = R.useContext(Re), { updateSeries: r, getColumns: l } = R.useContext(jn), { index: c, series: o } = e;
  if (o.type === "Forecasting")
    return /* @__PURE__ */ i.createElement(
      rn,
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
  const { config: t, rawData: n } = R.useContext(Re), { updateSeries: a } = R.useContext(jn), { index: r, series: l } = e;
  if (l.type !== "Forecasting" || !n || !l.stageColumn)
    return;
  let c = new Set(n.map((o) => o[l.stageColumn]));
  return c = Array.from(c), c = c.filter((o) => o !== void 0), /* @__PURE__ */ i.createElement(
    rn,
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
  const { config: t } = R.useContext(Re), { updateSeries: n, supportedRightAxisTypes: a } = R.useContext(jn), { index: r, series: l } = e;
  if (!(t.visualizationType !== "Combo" || !l) && a.includes(l.type))
    return /* @__PURE__ */ i.createElement(
      rn,
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
  const { config: t, updateConfig: n } = R.useContext(Re), { index: a, series: r } = e;
  if (r.type === "Forecasting" && r)
    return (l = r == null ? void 0 : r.stages) == null ? void 0 : l.map((c, o) => {
      var s, u, d, h;
      return /* @__PURE__ */ i.createElement(
        rn,
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
          options: Object.keys(Xa)
        }
      );
    });
}, Vg = (e) => {
  var c;
  const { config: t, updateConfig: n } = R.useContext(Re), { series: a, index: r } = e, { getColumns: l } = R.useContext(jn);
  if (a.type === "Forecasting")
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement(yn, { allowZeroExpanded: !0 }, (c = a == null ? void 0 : a.confidenceIntervals) == null ? void 0 : c.map((o, s) => {
      const u = o.showInTooltip ? o.showInTooltip : !1, d = (h, m, y) => {
        h.preventDefault();
        let p = [...t.series];
        p[m].confidenceIntervals[y].showInTooltip = !u, n({
          ...t,
          series: p
        });
      };
      return /* @__PURE__ */ i.createElement(rt, { className: "series-item series-item--chart", key: `${s}` }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ot, { className: "accordion__button accordion__button" }, "Group ", s + 1, /* @__PURE__ */ i.createElement(
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
      )))), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (h) => d(h, r, s) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, u && /* @__PURE__ */ i.createElement(vs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: u || !1, readOnly: !0 }))), /* @__PURE__ */ i.createElement(
        rn,
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
        rn,
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
  const { series: t, index: n } = e, { config: a, updateConfig: r } = R.useContext(Re), l = ["Bar", "Line", "Area Chart"];
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
  const { series: t, index: n } = e, { config: a, updateConfig: r } = R.useContext(Re), l = (c) => {
    let o = [...a.series];
    o[c].tooltip && o[c].tooltip, o[c].tooltip = !o[c].tooltip, r({
      ...a,
      series: o
    });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (c) => l(n) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ i.createElement(vs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, jg = (e) => {
  const { config: t, updateConfig: n } = R.useContext(Re), { series: a, index: r } = e, l = (o) => {
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
  const { config: t } = R.useContext(Re), { series: n, getItemStyle: a, sortableItemStyles: r, chartsWithOptions: l, index: c } = e;
  return /* @__PURE__ */ i.createElement(hs, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: c }, (o, s) => /* @__PURE__ */ i.createElement("div", { key: c, className: s.isDragging ? "currently-dragging" : "", style: a(s.isDragging, o.draggableProps.style, r), ref: o.innerRef, ...o.draggableProps, ...o.dragHandleProps }, /* @__PURE__ */ i.createElement(yn, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(rt, { className: "series-item series-item--chart" }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(ot, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ i.createElement(De, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ i.createElement(Ht.Button.Remove, { series: n, index: c }))), l.includes(t.visualizationType) && /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement(Ht.Input.Name, { series: n, index: c }), /* @__PURE__ */ i.createElement(Ht.Dropdown.SeriesType, { series: n, index: c }), /* @__PURE__ */ i.createElement(Ht.Dropdown.AxisPosition, { series: n, index: c }), /* @__PURE__ */ i.createElement(Ht.Dropdown.LineType, { series: n, index: c }), /* @__PURE__ */ i.createElement(Ht.Dropdown.ForecastingColor, { series: n, index: c }), /* @__PURE__ */ i.createElement(Ht.Dropdown.ConfidenceInterval, { series: n, index: c }), /* @__PURE__ */ i.createElement(Ht.Checkbox.DisplayInTooltip, { series: n, index: c }))))));
}, Ig = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: r } = e;
  return t.map((l, c) => /* @__PURE__ */ i.createElement(su, { getItemStyle: n, sortableItemStyles: a, chartsWithOptions: r, series: l, index: c, key: `series-list-${c}` }));
}, Ht = {
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
    Remove: jg
  },
  Item: su,
  List: Ig
}, qg = (e, t) => {
  let n = [], a = [], r = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    n = Object.keys(ar).filter((c) => l ? c.endsWith("reverse") : !c.endsWith("reverse"));
  } else {
    const l = [], c = [];
    for (const o in tn) {
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
  const { config: e } = R.useContext(Re), { visualizationType: t, series: n, orientation: a } = e;
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
      const U = ["Forest Plot"];
      return !(a === "horizontal" || U.includes(t));
    },
    visSupportsValueAxisLabels: () => !0,
    visSupportsValueAxisLine: () => !0,
    visSupportsValueAxisTicks: () => !0
  };
}, he = R.memo(({ label: e, tooltip: t, section: n = null, subsection: a = null, fieldName: r, updateField: l, value: c, type: o = "input", i: s = null, min: u = null, ...d }) => {
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
}), be = R.memo(({ label: e, value: t, fieldName: n, section: a = null, subsection: r = null, tooltip: l, updateField: c, ...o }) => /* @__PURE__ */ i.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ i.createElement(
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
  ), /* @__PURE__ */ i.createElement(he, { value: c, label: "Region Label", fieldName: "label", i: h, updateField: a }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(he, { value: o, label: "Text Color", fieldName: "color", updateField: (m, y, p, v) => n(p, v, h) }), /* @__PURE__ */ i.createElement(he, { value: d, label: "Background", fieldName: "background", updateField: (m, y, p, v) => n(p, v, h) })), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(he, { value: s, label: "From Value", fieldName: "from", updateField: (m, y, p, v) => n(p, v, h) }), /* @__PURE__ */ i.createElement(he, { value: u, label: "To Value", fieldName: "to", updateField: (m, y, p, v) => n(p, v, h) })))), !e.regions && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ i.createElement(
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
  var sn, wn, Ca, Un, ht, Yt, Tl, kl, Sl, wl, Cl, Nl, Pl, Ll, Ol, _l, Ml, Dl, $l, zl, Rl, Fl;
  const { config: e, updateConfig: t, transformedData: n, loading: a, colorPalettes: r, twoColorPalette: l, unfilteredData: c, excludedData: o, isDashboard: s, setParentConfig: u, missingRequiredSections: d, isDebug: h, setFilteredData: m, lineOptions: y, rawData: p } = R.useContext(Re), { minValue: v, maxValue: g, existPositiveValue: f, isAllLine: b } = Mi(e, c), { twoColorPalettes: x, sequential: k, nonSequential: w } = qg(e, t), {
    enabledChartTypes: A,
    headerColors: D,
    visSupportsTooltipLines: T,
    visSupportsNonSequentialPallete: z,
    visSupportsSequentialPallete: $,
    visSupportsReverseColorPalette: C,
    visHasLabelOnData: S,
    visHasNumbersOnBars: _,
    visHasAnchors: O,
    visHasBarBorders: N,
    visHasDataCutoff: P,
    visCanAnimate: V,
    visHasLegend: q,
    visSupportsDateCategoryAxisLabel: I,
    visSupportsDateCategoryAxisLine: j,
    visSupportsDateCategoryAxisTicks: J,
    visSupportsDateCategoryTickRotation: U,
    visSupportsDateCategoryNumTicks: ce,
    visSupportsRegions: de,
    visSupportsFilters: fe,
    visSupportsValueAxisGridLines: ke,
    visSupportsValueAxisLine: we,
    visSupportsValueAxisTicks: Ce,
    visSupportsValueAxisLabels: G,
    visSupportsBarSpace: K,
    visSupportsBarThickness: ee,
    visSupportsFootnotes: F,
    visSupportsSuperTitle: pe,
    visSupportsDataCutoff: ne,
    visSupportsChartHeight: me,
    visSupportsLeftValueAxis: le,
    visSupportsTooltipOpacity: ue,
    visSupportsRankByValue: Le,
    visSupportsResponsiveTicks: Ke,
    visSupportsDateCategoryHeight: Se
  } = Ug(), { handleFilterOrder: ye, filterOrderOptions: oe, filterStyleOptions: ie } = hu({ config: e, setConfig: t, filteredData: n, setFilteredData: m });
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
  const { hasRightAxis: Fe } = sl({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), se = (L, M) => ({
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
  }, Te = (L) => {
    L.orientation === "horizontal" && (L.labels = !1), L.table.show === void 0 && (L.table.show = !s), L.visualizationType === "Combo" && (L.orientation = "vertical");
  }, B = (L, M, H, Z) => {
    if (h && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", L, M, H, Z), L === "boxplot" && M === "legend") {
      t({
        ...e,
        [L]: {
          ...e[L],
          [M]: {
            ...e.boxplot[M],
            [H]: Z
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
            [H]: Z
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
            [H]: Z
          }
        }
      });
      return;
    }
    if (L === null && M === null) {
      let Yn = { ...e, [H]: Z };
      Te(Yn), t(Yn);
      return;
    }
    const je = Array.isArray(e[L]);
    let St = je ? [...e[L], Z] : { ...e[L], [H]: Z };
    M !== null && (je ? (St = [...e[L]], St[M] = { ...St[M], [H]: Z }) : typeof Z == "string" ? St[M] = Z : St = { ...e[L], [M]: { ...e[L][M], [H]: Z } });
    let Rt = { ...e, [L]: St };
    Te(Rt), t(Rt);
  }, [Oe, Ge] = R.useState(!0);
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
  const ct = (L) => {
    t({
      ...e,
      lollipopShape: L
    });
  }, nt = (L) => {
    let M = [...e.filters];
    M.splice(L, 1), t({ ...e, filters: M });
  }, dt = (L, M, H) => {
    let Z = [...e.filters];
    Z[M][L] = H, t({ ...e, filters: Z });
  }, at = () => {
    let L = e.filters ? [...e.filters] : [];
    L.push({ values: [] }), t({ ...e, filters: L });
  }, et = (L) => {
    let M = e.series ? [...e.series] : [], H = Array.from(new Set(n.map((je) => je[L]))), Z = [];
    H.forEach((je) => {
      Z.push({ key: je });
    }), e.visualizationType === "Forecasting" ? M.push({ dataKey: L, type: e.visualizationType, stages: Z, stageColumn: L, axis: "Left", tooltip: !0 }) : M.push({ dataKey: L, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: M });
  }, Et = (L) => {
    const M = e.series[0].dataKey, H = n.sort((je, St) => je[M] - St[M]), Z = L === "asc" ? H : H.reverse();
    t({ ...e }, Z);
  }, qt = (L) => {
    let M = [...e.exclusions.keys];
    M.push(L);
    let H = { ...e.exclusions, keys: M };
    t({ ...e, exclusions: H });
  }, In = (L) => {
    let M = -1, H = [...e.exclusions.keys];
    for (let Z = 0; Z < H.length; Z++)
      if (H[Z] === L) {
        M = Z;
        break;
      }
    if (M !== -1) {
      H.splice(M, 1);
      let Z = { ...e.exclusions, keys: H }, je = { ...e, exclusions: Z };
      H.length === 0 && delete je.exclusions.keys, t(je);
    }
  }, Sa = () => {
    let L = {};
    return c.forEach((M) => {
      Object.keys(M).forEach((H) => L[H] = !0);
    }), Object.keys(L);
  }, At = (L = !0) => {
    let M = {};
    if (c.forEach((H) => {
      Object.keys(H).forEach((Z) => M[Z] = !0);
    }), L) {
      const { lower: H, upper: Z } = e.confidenceKeys || {};
      Object.keys(M).forEach((je) => {
        (e.series && e.series.filter((St) => St.dataKey === je).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(je) && (H && Z || H || Z) && je !== H && je !== Z) && delete M[je];
      });
    }
    return Object.keys(M);
  }, Sn = (L) => {
    if (!L)
      return [];
    const M = /* @__PURE__ */ new Set();
    for (let H = 0; H < L.length; H++)
      for (const [Z] of Object.entries(L[H]))
        M.add(Z);
    return Array.from(M);
  }, Ut = (L, M = !1) => {
    let H = [];
    return o.forEach((Z) => {
      H.push(Z[L]);
    }), M ? [...new Set(H)] : H;
  }, wa = () => (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.visualizationSubType !== "stacked" && (e.orientation === "horizontal" || e.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"], qn = () => {
    Ge(!Oe);
  }, Y = () => /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ i.createElement("p", null, e.runtime.editorErrorMessage))), ge = () => {
    const L = (M) => {
      M.preventDefault();
      let H = { ...e };
      delete H.newViz, t(H);
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement("button", { className: "btn", style: { margin: "1em auto" }, disabled: d(), onClick: L }, "I'm Done")));
  }, Pe = () => {
    let L = JSON.parse(JSON.stringify(e));
    return d() === !1 && delete L.newViz, delete L.runtime, L;
  };
  R.useEffect(() => {
    if (u) {
      const L = Pe();
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
  const xe = R.useCallback(() => {
    const L = [...e.exclusions.keys];
    return /* @__PURE__ */ i.createElement("ul", { className: "series-list" }, L.map((M, H) => /* @__PURE__ */ i.createElement("li", { key: M }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name", "data-title": M }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name--text" }, M)), /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: () => In(M) }, "×"))));
  }, [e]), yt = (L, M) => {
    let H = e.series, [Z] = H.splice(L, 1);
    H.splice(M, 0, Z), t({ ...e, series: H });
  };
  e.isLollipopChart && ((sn = e == null ? void 0 : e.series) == null ? void 0 : sn.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((wn = e == null ? void 0 : e.series) == null ? void 0 : wn.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((Ca = e == null ? void 0 : e.series) == null ? void 0 : Ca.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((Un = e == null ? void 0 : e.series) == null ? void 0 : Un.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const E = e.orientation === "horizontal" ? "xAxis" : "yAxis", [Q, te] = R.useState({ maxMsg: "", minMsg: "" }), ae = () => {
    const L = e[E].max;
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
    te((H) => ({ ...H, maxMsg: M }));
  }, Ee = () => {
    const L = e[E].min;
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
    te((Z) => ({ ...Z, minMsg: H }));
  };
  R.useEffect(() => {
    Ee(), ae();
  }, [v, g, e]);
  const Ae = ((ht = e == null ? void 0 : e.dataKey) == null ? void 0 : ht.includes("http://")) || ((Yt = e == null ? void 0 : e.dataKey) == null ? void 0 : Yt.includes("https://")), re = () => {
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
  }, Me = () => {
    if (h !== void 0 && h && At(!1).length > 0) {
      let L = At(!1).filter((M) => M !== re());
      if (L.length > 0)
        return L[0];
    }
    return "";
  };
  if (h && !e.xAxis.dataKey && (e.xAxis.dataKey = re()), h && ((Tl = e == null ? void 0 : e.series) == null ? void 0 : Tl.length) === 0) {
    let L = Me();
    L !== "" && et(L), h && console.log("### COVE DEBUG: Chart: Setting default datacol=", L);
  }
  const Je = ["Area Chart", "Combo", "Line", "Bar", "Forecasting"], ft = [
    /* @__PURE__ */ i.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(e.data[0]).map((M) => {
      const H = e == null ? void 0 : e.series.some((Z) => Z.dataKey === M);
      if (M !== e.xAxis.dataKey && !H)
        return ft.push(
          /* @__PURE__ */ i.createElement("option", { value: M, key: M }, M)
        );
    });
    let L = {};
    e.data.forEach((M) => {
      Object.keys(M).forEach((H) => {
        L[H] = L[H] || [];
        const Z = typeof M[H] == "number" ? M[H].toString() : M[H];
        L[H].indexOf(Z) === -1 && L[H].push(Z);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((M) => {
      const H = n.some((Z) => Z.dataKey === M);
      if (M !== e.xAxis.dataKey && !H)
        return ft.push(
          /* @__PURE__ */ i.createElement("option", { value: M, key: M }, M)
        );
    });
    let L = {};
    n.forEach((M) => {
      Object.keys(M).forEach((H) => {
        L[H] = L[H] || [];
        const Z = typeof M[H] == "number" ? M[H].toString() : M[H];
        L[H].indexOf(Z) === -1 && L[H].push(Z);
      });
    });
  }
  const $e = Object.keys(e.columns).filter((L) => [e.xAxis.dataKey].includes(L) !== !0), Ue = (L) => {
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
  }, zt = (L) => {
    const M = e.columns;
    delete M[L], t({
      ...e,
      columns: M
    });
  }, _e = async (L, M, H) => {
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
    highlightedBarValues: Ye,
    highlightedSeriesValues: Xe,
    handleUpdateHighlightedBar: mt,
    handleAddNewHighlightedBar: Tt,
    handleRemoveHighlightedBar: tt,
    handleUpdateHighlightedBarColor: Pt,
    handleHighlightedBarLegendLabel: vt,
    handleUpdateHighlightedBorderWidth: it
  } = _i(e, t), kt = (L, M) => {
    let H = e.columns;
    H[L].tooltips = M, t({
      ...e,
      columns: H
    });
  };
  return /* @__PURE__ */ i.createElement($t, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ i.createElement(ge, null), e.newViz === void 0 && e.runtime && e.runtime.editorErrorMessage && /* @__PURE__ */ i.createElement(Y, null), /* @__PURE__ */ i.createElement("button", { className: Oe ? "editor-toggle" : "editor-toggle collapsed", title: Oe ? "Collapse Editor" : "Expand Editor", onClick: qn }), /* @__PURE__ */ i.createElement("section", { className: `${Oe ? "editor-panel cove" : "hidden editor-panel cove"}${s ? " dashboard" : ""}` }, /* @__PURE__ */ i.createElement("div", { "aria-level": "2", role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ i.createElement("section", { className: "form-container" }, /* @__PURE__ */ i.createElement(yn, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(rt, null, " ", /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "General")), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement(He, { value: e.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: B, options: A }), (e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Area Chart") && /* @__PURE__ */ i.createElement(He, { value: e.visualizationSubType || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: B, options: ["regular", "stacked"] }), e.visualizationType === "Area Chart" && e.visualizationSubType === "stacked" && /* @__PURE__ */ i.createElement(He, { value: e.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: B, options: Object.keys(vi) }), e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(He, { value: e.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: B, options: ["vertical", "horizontal"] }), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(He, { label: "Orientation", options: ["horizontal"] }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(He, { value: e.isLollipopChart ? "lollipop" : e.barStyle || "flat", fieldName: "barStyle", label: "bar style", updateField: B, options: wa() }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.barStyle === "rounded" && /* @__PURE__ */ i.createElement(He, { value: e.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: B, options: ["top", "full"] }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.barStyle === "rounded" && /* @__PURE__ */ i.createElement(He, { value: e.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: B, options: ["standard", "shallow", "finger"] }), e.visualizationType === "Bar" && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(He, { value: e.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: B, options: ["Below Bar", "On Date/Category Axis"] }), _() ? /* @__PURE__ */ i.createElement(be, { value: e.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: e.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: B }) : S() && /* @__PURE__ */ i.createElement(be, { value: e.labels, fieldName: "labels", label: "Display label on data", updateField: B }), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(He, { fieldName: "pieType", label: "Pie Chart Type", updateField: B, options: ["Regular", "Donut"] }), /* @__PURE__ */ i.createElement(
    he,
    {
      value: e.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ i.createElement(be, { value: e.showTitle, fieldName: "showTitle", label: "Show Title", updateField: B }), pe() && /* @__PURE__ */ i.createElement(
    he,
    {
      value: e.superTitle,
      updateField: B,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ i.createElement(
    he,
    {
      type: "textarea",
      value: e.introText,
      updateField: B,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ i.createElement(
    he,
    {
      type: "textarea",
      value: e.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), F() && /* @__PURE__ */ i.createElement(
    he,
    {
      type: "textarea",
      value: e.footnotes,
      updateField: B,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Footnotes")))
    }
  ), me() && e.orientation === "vertical" && /* @__PURE__ */ i.createElement(he, { type: "number", value: e.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: B }))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(Mg, null), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ i.createElement(Ya, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(st, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    He,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (L) => {
        L.target.value !== "" && L.target.value !== "Select" && et(L.target.value), L.target.value = "";
      },
      options: At()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ i.createElement(Ht.Wrapper, { getColumns: At }, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ i.createElement(Wl, { onDragEnd: ({ source: L, destination: M }) => yt(L.index, M.index) }, /* @__PURE__ */ i.createElement(Vl, { droppableId: "filter_order" }, (L) => /* @__PURE__ */ i.createElement("ul", { ...L.droppableProps, className: "series-list", ref: L.innerRef }, /* @__PURE__ */ i.createElement(Ht.List, { series: e.series, getItemStyle: se, sortableItemStyles: Ne, chartsWithOptions: Je }), L.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ i.createElement(He, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: B, initial: "Select", options: At() }), /* @__PURE__ */ i.createElement(He, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: B, initial: "Select", options: At() })), Le() && e.series && e.series.length === 1 && /* @__PURE__ */ i.createElement(He, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (L) => Et(L.target.value), options: ["asc", "desc"] }))), e.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "Measures")), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ i.createElement(
    he,
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
    he,
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
    he,
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
    he,
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
    he,
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
  ), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ i.createElement(he, { type: "text", value: e.boxplot.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: B }), /* @__PURE__ */ i.createElement(he, { type: "text", value: e.boxplot.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: B }), /* @__PURE__ */ i.createElement(he, { type: "text", value: e.boxplot.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: B }), /* @__PURE__ */ i.createElement(he, { type: "text", value: e.boxplot.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: B }), /* @__PURE__ */ i.createElement(he, { type: "text", value: e.boxplot.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: B }))), le() && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ i.createElement(Ya, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(st, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
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
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(he, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label", updateField: B }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(be, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: B }), e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement(he, { value: e.yAxis.tickRotation || 0, type: "number", min: "0", section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: B }), /* @__PURE__ */ i.createElement(
    he,
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
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(be, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: B }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ i.createElement(he, { value: e.yAxis.tickRotation, type: "number", min: "0", section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: B }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    he,
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
  ), e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(he, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: B }), ke() && /* @__PURE__ */ i.createElement(be, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: B }), e.visualizationSubType === "regular" && /* @__PURE__ */ i.createElement(be, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: B })), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(be, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: B }), /* @__PURE__ */ i.createElement(
    be,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ i.createElement(he, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: B, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    he,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    he,
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
    /* @__PURE__ */ i.createElement(i.Fragment, null, we() && /* @__PURE__ */ i.createElement(be, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: B }), G() && /* @__PURE__ */ i.createElement(be, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: B }), Ce() && /* @__PURE__ */ i.createElement(be, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: B }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Q.maxMsg), /* @__PURE__ */ i.createElement(he, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: B }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Q.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(he, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: B })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "max value", placeholder: "Auto", updateField: B }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Q.maxMsg), /* @__PURE__ */ i.createElement(he, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: B }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Q.minMsg)), O() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(yn, { allowZeroExpanded: !0 }, (Sl = (kl = e.yAxis) == null ? void 0 : kl.anchors) == null ? void 0 : Sl.map((L, M) => /* @__PURE__ */ i.createElement(rt, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${M}` }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ot, { className: "accordion__button accordion__button" }, "Anchor ", M + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z.splice(M, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Z
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[M].value ? e.yAxis.anchors[M].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z[M].value = H.target.value, t({
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
      value: e.yAxis.anchors[M].color ? e.yAxis.anchors[M].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z[M].color = H.target.value, t({
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
      value: e.yAxis.anchors[M].lineStyle || "",
      onChange: (H) => {
        const Z = [...e.yAxis.anchors];
        Z[M].lineStyle = H.target.value, t({
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
  )), O() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(yn, { allowZeroExpanded: !0 }, (Cl = (wl = e.xAxis) == null ? void 0 : wl.anchors) == null ? void 0 : Cl.map((L, M) => /* @__PURE__ */ i.createElement(rt, { className: "series-item series-item--chart", key: `xaxis-anchors-${M}` }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ot, { className: "accordion__button accordion__button" }, "Anchor ", M + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z.splice(M, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Z
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[M].value ? e.xAxis.anchors[M].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z[M].value = H.target.value, t({
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
      value: e.xAxis.anchors[M].color ? e.xAxis.anchors[M].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z[M].color = H.target.value, t({
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
      value: e.xAxis.anchors[M].lineStyle || "",
      onChange: (H) => {
        const Z = [...e.xAxis.anchors];
        Z[M].lineStyle = H.target.value, t({
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
  )))), Fe && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "Right Value Axis")), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement(he, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: B }), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(be, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: B, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    he,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    he,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ i.createElement(be, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: B }))), /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ i.createElement(Ya, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(st, null, e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(He, { value: e.xAxis.type, section: "xAxis", fieldName: "type", label: "Data Type", updateField: B, options: e.visualizationType !== "Scatter Plot" ? ["categorical", "date"] : ["categorical", "continuous", "date"] }), /* @__PURE__ */ i.createElement(be, { value: e.xAxis.sortDates, section: "xAxis", fieldName: "sortDates", label: "Force Date Scale (Sort Dates)", updateField: B }), " ", /* @__PURE__ */ i.createElement(
    He,
    {
      value: e.xAxis.dataKey || re() || "",
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
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(he, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: B }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    he,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    he,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    be,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ i.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ i.createElement(he, { value: e.xAxis.dateParseFormat, section: "xAxis", fieldName: "dateParseFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Parse Format", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.xAxis.dateDisplayFormat, section: "xAxis", fieldName: "dateDisplayFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Display Format", updateField: B })), /* @__PURE__ */ i.createElement(
    be,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: B
    }
  ), ["Line", "Bar", "Area Chart", "Combo"].includes(e.visualizationType) && e.orientation === "vertical" && /* @__PURE__ */ i.createElement(be, { value: e.brush.active, section: "brush", fieldName: "active", label: "Brush Slider ", updateField: B }), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(xe, null)), /* @__PURE__ */ i.createElement(
    He,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (L) => {
        L.target.value !== "" && L.target.value !== "Select" && qt(L.target.value), L.target.value = "";
      },
      options: Ut(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(he, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: B, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ i.createElement(he, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: B, value: e.exclusions.dateEnd || "" }))), ce() && /* @__PURE__ */ i.createElement(he, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: "1", section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: B }), Se() && /* @__PURE__ */ i.createElement(he, { value: e.xAxis.size, type: "number", min: "0", section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: B }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: B, min: 0 })), Ke() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(be, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: B }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && U() && /* @__PURE__ */ i.createElement(he, { value: e.xAxis.tickRotation, type: "number", min: "0", section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: B }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    he,
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
  ), e.orientation === "horizontal" ? /* @__PURE__ */ i.createElement(i.Fragment, null, j() && /* @__PURE__ */ i.createElement(be, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: B }), I() && /* @__PURE__ */ i.createElement(be, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: B })) : /* @__PURE__ */ i.createElement(i.Fragment, null, j() && /* @__PURE__ */ i.createElement(be, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: B }), I() && /* @__PURE__ */ i.createElement(be, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: B }), J() && /* @__PURE__ */ i.createElement(be, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: B })), ((Nl = e.series) == null ? void 0 : Nl.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Ye.map((L, M) => /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `highlighted-bar-${M}` }, /* @__PURE__ */ i.createElement("button", { className: "remove-column", onClick: (H) => tt(H, M) }, "Remove"), /* @__PURE__ */ i.createElement("p", null, "Highlighted Bar ", M + 1), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ i.createElement("select", { value: e.highlightedBarValues[M].value, onChange: (H) => mt(H, M) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Value -"), Xe && [...new Set(Xe)].sort().map((H) => /* @__PURE__ */ i.createElement("option", { key: `special-class-value-option-${M}-${H}` }, H)))), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[M].color ? e.highlightedBarValues[M].color : "", onChange: (H) => Pt(H, M) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ i.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[M].borderWidth ? e.highlightedBarValues[M].borderWidth : "", onChange: (H) => it(H, M) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[M].legendLabel ? e.highlightedBarValues[M].legendLabel : "", onChange: (H) => vt(H, M) }))))), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: (L) => Tt(L) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    be,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(xe, null)), /* @__PURE__ */ i.createElement(
    He,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (L) => {
        L.target.value !== "" && L.target.value !== "Select" && qt(L.target.value), L.target.value = "";
      },
      options: Ut(e.xAxis.dataKey, !0)
    }
  ))), O() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(yn, { allowZeroExpanded: !0 }, (Ll = (Pl = e.xAxis) == null ? void 0 : Pl.anchors) == null ? void 0 : Ll.map((L, M) => /* @__PURE__ */ i.createElement(rt, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${M}` }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ot, { className: "accordion__button accordion__button" }, "Anchor ", M + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z.splice(M, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Z
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[M].value ? e.xAxis.anchors[M].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z[M].value = H.target.value, t({
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
      value: e.xAxis.anchors[M].color ? e.xAxis.anchors[M].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.xAxis.anchors];
        Z[M].color = H.target.value, t({
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
      value: e.xAxis.anchors[M].lineStyle || "",
      onChange: (H) => {
        const Z = [...e.xAxis.anchors];
        Z[M].lineStyle = H.target.value, t({
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
  )), O() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(yn, { allowZeroExpanded: !0 }, (_l = (Ol = e.yAxis) == null ? void 0 : Ol.anchors) == null ? void 0 : _l.map((L, M) => /* @__PURE__ */ i.createElement(rt, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${M}` }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ot, { className: "accordion__button accordion__button" }, "Anchor ", M + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z.splice(M, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Z
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[M].value ? e.yAxis.anchors[M].value : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z[M].value = H.target.value, t({
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
      value: e.yAxis.anchors[M].color ? e.yAxis.anchors[M].color : "",
      onChange: (H) => {
        H.preventDefault();
        const Z = [...e.yAxis.anchors];
        Z[M].color = H.target.value, t({
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
      value: e.yAxis.anchors[M].lineStyle || "",
      onChange: (H) => {
        const Z = [...e.yAxis.anchors];
        Z[M].lineStyle = H.target.value, t({
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
  )))), de() && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "Regions")), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement(Yg, { config: e, updateConfig: t }))), " ", e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "Columns")), /* @__PURE__ */ i.createElement(st, null, e.type !== "navigation" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), $e.map((L) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: L }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (M) => {
        M.preventDefault(), zt(L);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[L] ? e.columns[L].name : ft[0],
      onChange: (M) => {
        _e(L, "name", M.target.value);
      }
    },
    ft
  )), /* @__PURE__ */ i.createElement(he, { value: e.columns[L].label, section: "columns", subsection: L, fieldName: "label", label: "Label", updateField: B }), /* @__PURE__ */ i.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ i.createElement("li", { className: "three-col" }, /* @__PURE__ */ i.createElement(he, { value: e.columns[L].prefix, section: "columns", subsection: L, fieldName: "prefix", label: "Prefix", updateField: B }), /* @__PURE__ */ i.createElement(he, { value: e.columns[L].suffix, section: "columns", subsection: L, fieldName: "suffix", label: "Suffix", updateField: B }), /* @__PURE__ */ i.createElement(he, { type: "number", value: e.columns[L].roundToPlace, section: "columns", subsection: L, fieldName: "roundToPlace", label: "Round", updateField: B })), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].commas,
      onChange: (M) => {
        _e(L, "commas", M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ i.createElement("li", null, e.table.showVertical && /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].dataTable,
      onChange: (M) => {
        _e(L, "dataTable", M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Data Table"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].tooltips || !1,
      onChange: (M) => {
        kt(L, M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].forestPlot || !1,
      onChange: (M) => {
        _e(L, "forestPlot", M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].tooltips || !1,
      onChange: (M) => {
        kt(L, M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[L].forestPlotAlignRight || !1,
      onChange: (M) => {
        _e(L, "forestPlotAlignRight", M.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[L].forestPlotAlignRight && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "text" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.columns[L].forestPlotStartingPoint || 0,
      onChange: (M) => {
        _e(L, "forestPlotStartingPoint", M.target.value);
      }
    }
  ))))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (L) => {
        L.preventDefault(), Ue($e.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((L, M) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: L }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (H) => {
        H.preventDefault();
        const Z = [...e.legend.additionalCategories];
        Z.splice(M, 1), B("legend", null, "additionalCategories", Z);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Category"), /* @__PURE__ */ i.createElement(
    he,
    {
      value: L,
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (H, Z, je, St) => {
        const Rt = [...e.legend.additionalCategories];
        Rt[M] = St, B(H, Z, je, Rt);
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
  )))), q() && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "Legend")), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement(be, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: B }), /* @__PURE__ */ i.createElement(
    be,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(be, { value: !!e.legend.showLegendValuesTooltip, section: "legend", fieldName: "showLegendValuesTooltip", label: "Show Legend Values in Tooltip", updateField: B }), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(be, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: B }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ i.createElement(He, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: B, options: Sn(n) }), /* @__PURE__ */ i.createElement(He, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: B, options: ["highlight", "isolate"] }), /* @__PURE__ */ i.createElement(he, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: B }), /* @__PURE__ */ i.createElement(He, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: B, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: B })), /* @__PURE__ */ i.createElement(he, { type: "textarea", value: e.legend.description, updateField: B, section: "legend", fieldName: "description", label: "Legend Description" }))), fe() && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "Filters")), /* @__PURE__ */ i.createElement(st, null, e.filters && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
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
        nt(M);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: L.columnName,
      onChange: (H) => {
        dt("columnName", M, H.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Option -"),
    Sa().map((H, Z) => /* @__PURE__ */ i.createElement("option", { value: H, key: Z }, H))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: L.showDropdown === void 0 ? !0 : L.showDropdown,
      onChange: (H) => {
        dt("showDropdown", M, H.target.checked);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: L.filterStyle,
      onChange: (H) => {
        dt("filterStyle", M, H.target.value);
      }
    },
    ie.map((H) => /* @__PURE__ */ i.createElement("option", { value: H }, H))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: L.label,
      onChange: (H) => {
        dt("label", M, H.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ i.createElement("select", { value: L.order ? L.order : "asc", onChange: (H) => dt("order", M, H.target.value) }, oe.map((H, Z) => /* @__PURE__ */ i.createElement("option", { value: H.value, key: `filter-${Z}` }, H.label))), L.order === "cust" && /* @__PURE__ */ i.createElement(Wl, { onDragEnd: ({ source: H, destination: Z }) => ye(H.index, Z.index, M, e.filters[M]) }, /* @__PURE__ */ i.createElement(Vl, { droppableId: "filter_order" }, (H) => {
    var Z;
    return /* @__PURE__ */ i.createElement("ul", { ...H.droppableProps, className: "sort-list", ref: H.innerRef, style: { marginTop: "1em" } }, (Z = e.filters[M]) == null ? void 0 : Z.values.map((je, St) => /* @__PURE__ */ i.createElement(hs, { key: je, draggableId: `draggableFilter-${je}`, index: St }, (Rt, Yn) => /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("div", { className: Yn.isDragging ? "currently-dragging" : "", style: se(Yn.isDragging, Rt.draggableProps.style), ref: Rt.innerRef, ...Rt.draggableProps, ...Rt.dragHandleProps }, je)))), H.placeholder);
  })))))), !e.filters && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: at, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "Visual")), /* @__PURE__ */ i.createElement(st, null, e.isLollipopChart && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", { className: "header" }, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ i.createElement(
    "div",
    {
      onChange: (L) => {
        ct(L.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: e.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: e.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ i.createElement(He, { value: e.lollipopColorStyle ? e.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: B, options: ["regular", "two-tone"] }), /* @__PURE__ */ i.createElement(He, { value: e.lollipopSize ? e.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: B, options: ["small", "medium", "large"] })), e.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ i.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ i.createElement(He, { value: e.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: B, options: ["true", "false"] }), /* @__PURE__ */ i.createElement(be, { value: e.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: B })), /* @__PURE__ */ i.createElement(He, { value: e.fontSize, fieldName: "fontSize", label: "Font Size", updateField: B, options: ["small", "medium", "large"] }), N() && /* @__PURE__ */ i.createElement(He, { value: e.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: B, options: ["true", "false"] }), V() && /* @__PURE__ */ i.createElement(be, { value: e.animate, fieldName: "animate", label: "Animate Visualization", updateField: B }), (((Ml = e.series) == null ? void 0 : Ml.some((L) => L.type === "Line" || L.type === "dashed-lg" || L.type === "dashed-sm" || L.type === "dashed-md")) && e.visualizationType === "Combo" || e.visualizationType === "Line") && /* @__PURE__ */ i.createElement(He, { value: e.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: B, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ i.createElement("label", { className: "header" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, D.map((L) => /* @__PURE__ */ i.createElement(
    "button",
    {
      title: L,
      key: L,
      onClick: (M) => {
        M.preventDefault(), t({ ...e, theme: L });
      },
      className: e.theme === L ? "selected " + L : L
    }
  )))), (z() || z()) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Chart Color Palette")), C() && /* @__PURE__ */ i.createElement(Hl, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: B, value: e.isPaletteReversed }), $() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, k.map((L) => {
    const M = {
      backgroundColor: r[L][2]
    }, H = {
      backgroundColor: r[L][3]
    }, Z = {
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
      /* @__PURE__ */ i.createElement("span", { style: Z })
    );
  }))), z() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, w.map((L) => {
    const M = {
      backgroundColor: r[L][2]
    }, H = {
      backgroundColor: r[L][4]
    }, Z = {
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
      /* @__PURE__ */ i.createElement("span", { style: Z })
    );
  })))), (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Hl, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: B, value: e.twoColor.isPaletteReversed }), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, x.map((L) => {
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
        onClick: (Z) => {
          Z.preventDefault(), t({ ...e, twoColor: { ...e.twoColor, palette: L } });
        },
        className: e.twoColor.palette === L ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: M }),
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: H })
    );
  }))), P() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    he,
    {
      value: e.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: B,
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), ee() && e.orientation === "horizontal" && !e.isLollipopChart && e.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ i.createElement(he, { type: "number", value: e.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: B, min: "15" }), (e.visualizationType === "Bar" && e.orientation !== "horizontal" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(he, { value: e.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: B }), K() && /* @__PURE__ */ i.createElement(he, { type: "number", value: e.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: B, min: "0" }), (e.visualizationType === "Bar" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(be, { value: e.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: B }), e.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(be, { value: (Dl = e.visual) == null ? void 0 : Dl.border, section: "visual", fieldName: "border", label: "Show Border", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: ($l = e.visual) == null ? void 0 : $l.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: (zl = e.visual) == null ? void 0 : zl.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: (Rl = e.visual) == null ? void 0 : Rl.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: (Fl = e.visual) == null ? void 0 : Fl.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: B })), (e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(be, { value: e.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: B }), (e.visualizationType === "Line" || e.visualizationType === "Combo") && e.showLineSeriesLabels && /* @__PURE__ */ i.createElement(be, { value: e.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: B }), T() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, { value: e.visual.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.visual.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: B })), ue() && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ i.createElement(
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
  )))), e.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(ot, null, "Data Table")), /* @__PURE__ */ i.createElement(st, null, /* @__PURE__ */ i.createElement(
    he,
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
    be,
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
    be,
    {
      value: e.table.showVertical,
      section: "table",
      fieldName: "showVertical",
      label: "Show Vertical Data",
      updateField: B,
      className: "column-heading",
      tooltip: /* @__PURE__ */ i.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(X.Target, null, /* @__PURE__ */ i.createElement(De, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(X.Content, null, /* @__PURE__ */ i.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), /* @__PURE__ */ i.createElement(he, { value: e.table.indexLabel, section: "table", fieldName: "indexLabel", label: "Index Column Header", updateField: B }), /* @__PURE__ */ i.createElement(
    he,
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
  ), /* @__PURE__ */ i.createElement(be, { value: e.table.limitHeight, section: "table", fieldName: "limitHeight", label: "Limit Table Height", updateField: B }), e.table.limitHeight && /* @__PURE__ */ i.createElement(he, { value: e.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: "0", max: "500", placeholder: "Height(px)", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.table.expanded, section: "table", fieldName: "expanded", label: "Expanded by Default", updateField: B }), s && /* @__PURE__ */ i.createElement(be, { value: e.table.showDataTableLink, section: "table", fieldName: "showDataTableLink", label: "Show Data Table Name & Link", updateField: B }), Ae && /* @__PURE__ */ i.createElement(be, { value: e.table.showDownloadUrl, section: "table", fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.table.download, section: "table", fieldName: "download", label: "Show Download CSV Link", updateField: B }), /* @__PURE__ */ i.createElement(be, { value: e.table.showDownloadImgButton, section: "table", fieldName: "showDownloadImgButton", label: "Display Image Button", updateField: B })))), e.type !== "Spark Line" && /* @__PURE__ */ i.createElement(du, { loadConfig: t, state: e, convertStateToConfig: Pe }))));
};
const ds = (e) => {
  const n = /(?:\.([^.]+))?$/.exec(e);
  return n ? n[1] : "";
}, fs = (e = "#000000", t = !1) => {
  let n = Xt(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
};
function vx({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: r = !1, setConfig: l, setEditing: c, hostname: o, link: s, setSharedFilter: u, setSharedFilterValue: d, dashboardConfig: h }) {
  var xe, yt;
  const m = new Mu(), [y, p] = R.useState(!0), [v, g] = R.useState(null), [f, b] = R.useState({}), [x, k] = R.useState(f.data || []), [w, A] = R.useState(void 0), [D, T] = R.useState(void 0), [z, $] = R.useState([]), [C, S] = R.useState("lg"), [_, O] = R.useState([]), [N, P] = R.useState(), [V, q] = R.useState(), [I, j] = R.useState(!1), [J, U] = R.useState([]), [ce] = R.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  R.useRef(/* @__PURE__ */ new Map()), R.useRef(), a && console.log("Chart config, isEditor", f, n);
  let { legend: de, title: fe, description: ke, visualizationType: we } = f;
  n && (!fe || fe === "") && (fe = "Chart Title"), f.table && (!((xe = f.table) != null && xe.label) || ((yt = f.table) == null ? void 0 : yt.label) === "") && (f.table.label = "Data Table");
  const { barBorderClass: Ce, lineDatapointClass: G, contentClasses: K, sparkLineStyles: ee } = Nu(f), F = f.showSidebar ? "#legend" : f != null && f.title ? `#dataTableSection__${f.title.replace(/\s/g, "")}` : "#dataTableSection", pe = (E, Q) => E.toString().localeCompare(Q.toString(), "en", { numeric: !0 }), ne = (E, Q) => Q.toString().localeCompare(E.toString(), "en", { numeric: !0 }), me = (E, Q = !1) => {
    Q && console.log("handleChartAriaLabels Testing On:", E);
    try {
      if (!E.visualizationType)
        throw Error("handleChartAriaLabels: no visualization type found in state");
      let te = "";
      return E.visualizationType && (te += `${E.visualizationType} chart`), E.title && E.visualizationType && (te += ` with the title: ${E.title}`), te;
    } catch (te) {
      console.error("COVE: ", te.message);
    }
  }, le = async () => {
    if (f.dataUrl) {
      const E = new URL(f.runtimeDataUrl || f.dataUrl, window.location.origin);
      let Q = Object.fromEntries(new URLSearchParams(E.search)), te = !1;
      if (f.filters.forEach((Ae) => {
        Ae.type === "url" && Q[Ae.queryParameter] !== decodeURIComponent(Ae.active) && (Q[Ae.queryParameter] = Ae.active, te = !0);
      }), (!f.formattedData || f.formattedData.urlFiltered) && !te)
        return;
      let ae = `${E.origin}${E.pathname}${Object.keys(Q).map((Ae, re) => {
        let Me = re === 0 ? "?" : "&";
        return Me += Ae + "=", Me += Q[Ae], Me;
      }).join("")}`, Ee = [];
      try {
        const Ae = ds(E.pathname);
        Ae === "csv" ? Ee = await fetch(ae).then((re) => re.text()).then((re) => Bl.parse(re, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : Ae === "json" ? Ee = await fetch(ae).then((re) => re.json()) : Ee = [];
      } catch {
        console.error(`Cannot parse URL: ${ae}`), Ee = [];
      }
      f.dataDescription && (Ee = m.autoStandardize(Ee), Ee = m.developerStandardize(Ee, f.dataDescription)), Object.assign(Ee, { urlFiltered: !0 }), Se({ ...f, runtimeDataUrl: ae, data: Ee, formattedData: Ee }), Ee && (k(Ee), A(Ee), T(ye(f.filters, Ee)));
    }
  }, ue = (E) => {
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
  }, Le = [
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
  ], Ke = async () => {
    let E = t || await (await fetch(e)).json(), Q = E.data || [];
    const te = E.filters ? E.filters.filter((Ae) => Ae.type === "url").length > 0 : !1;
    if (E.dataUrl && !te)
      try {
        const Ae = ds(E.dataUrl);
        Ae === "csv" && (Q = await fetch(E.dataUrl + `?v=${Xl()}`).then((re) => re.text()).then((re) => (re = re.replace(/(".*?")|,/g, (...Je) => Je[1] || "|"), re = re.replace(/["]+/g, ""), Bl.parse(re, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), Ae === "json" && (Q = await fetch(E.dataUrl + `?v=${Xl()}`).then((re) => re.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${E.dataUrl}`), Q = [];
      }
    E.dataDescription && (Q = m.autoStandardize(Q), Q = m.developerStandardize(Q, E.dataDescription)), Q && (k(Q), A(Q)), E !== void 0 && E.table !== void 0 && (!E.table || !E.table.showVertical) && (E.table = E.table || {}, E.table.showVertical = !1);
    let ae = { ...tr, ...E };
    ae.visualizationType === "Box Plot" && (ae.legend.hide = !0), ae.table.show === void 0 && (ae.table.show = !r), ae.series.map((Ae) => {
      Ae.tooltip || (Ae.tooltip = !0);
    });
    const Ee = { ...await _u(ae) };
    Se(Ee, Q);
  }, Se = (E, Q) => {
    var Ae;
    let te = Q || x;
    Object.keys(tr).forEach((re) => {
      E[re] && typeof E[re] == "object" && !Array.isArray(E[re]) && (E[re] = { ...tr[re], ...E[re] });
    });
    let ae = [];
    if (E.exclusions && E.exclusions.active)
      if (E.xAxis.type === "categorical" && ((Ae = E.exclusions.keys) == null ? void 0 : Ae.length) > 0)
        ae = te.filter((re) => !E.exclusions.keys.includes(re[E.xAxis.dataKey]));
      else if (E.xAxis.type === "date" && (E.exclusions.dateStart || E.exclusions.dateEnd) && E.xAxis.dateParseFormat) {
        const re = (Ue) => new Date(Ue).getTime();
        let Me = re(E.exclusions.dateStart), Je = re(E.exclusions.dateEnd) + 86399999, ft = typeof Me !== void 0 && isNaN(Me) === !1, $e = typeof Je !== void 0 && isNaN(Je) === !1;
        ft && $e ? ae = te.filter((Ue) => re(Ue[E.xAxis.dataKey]) >= Me && re(Ue[E.xAxis.dataKey]) <= Je) : ft ? ae = te.filter((Ue) => re(Ue[E.xAxis.dataKey]) >= Me) : $e && (ae = te.filter((Ue) => re(Ue[E.xAxis.dataKey]) <= Je));
      } else
        ae = Q || x;
    else
      ae = Q || x;
    A(ae);
    let Ee = [];
    if (E.filters && (E.filters.forEach((re, Me) => {
      let Je = [];
      Je = re.orderedValues || oe(re.columnName, ae).sort(re.order === "desc" ? ne : pe), E.filters[Me].values = Je, E.filters[Me].active = E.filters[Me].active || Je[0], E.filters[Me].filterStyle = E.filters[Me].filterStyle ? E.filters[Me].filterStyle : "dropdown";
    }), Ee = ye(E.filters, ae), T(Ee)), E.runtime = {}, E.runtime.seriesLabels = {}, E.runtime.seriesLabelsAll = [], E.runtime.originalXAxis = E.xAxis, E.visualizationType === "Pie" ? (E.runtime.seriesKeys = (Q || te).map((re) => re[E.xAxis.dataKey]), E.runtime.seriesLabelsAll = E.runtime.seriesKeys) : E.runtime.seriesKeys = E.series ? E.series.map((re) => (E.runtime.seriesLabels[re.dataKey] = re.name || re.label || re.dataKey, E.runtime.seriesLabelsAll.push(re.name || re.dataKey), re.dataKey)) : [], E.visualizationType === "Box Plot" && E.series) {
      let re = ae ? ae.map((_e) => _e[E.xAxis.dataKey]) : te.map((_e) => _e[E.xAxis.dataKey]), Me = ae ? ae.map((_e) => {
        var Ye;
        return Number(_e[(Ye = E == null ? void 0 : E.series[0]) == null ? void 0 : Ye.dataKey]);
      }) : te.map((_e) => {
        var Ye;
        return Number(_e[(Ye = E == null ? void 0 : E.series[0]) == null ? void 0 : Ye.dataKey]);
      });
      const ft = function(_e) {
        return _e.filter(function(Ye, Xe, mt) {
          return mt.indexOf(Ye) === Xe;
        });
      }(re);
      let $e = [];
      const Ue = [], zt = (_e) => {
        _e.sort((kt, sn) => kt - sn);
        const Ye = Math.floor(_e.length / 2), Xe = _e.length % 2 === 0, mt = Xe ? _e.slice(0, Ye) : _e.slice(0, Ye + 1), Tt = Xe ? _e.slice(Ye) : _e.slice(Ye + 1), tt = Math.floor(mt.length / 2), Pt = Xe ? (mt[tt - 1] + mt[tt]) / 2 : mt[tt], vt = Math.floor(Tt.length / 2), it = Xe ? (Tt[vt - 1] + Tt[vt]) / 2 : Tt[vt];
        return { q1: Pt, q3: it };
      };
      if (!ft)
        return;
      ft.forEach((_e) => {
        try {
          if (!_e)
            throw new Error("No groups resolved in box plots");
          let Ye = ae ? ae.filter((ht) => ht[E.xAxis.dataKey] === _e) : te.filter((ht) => ht[E.xAxis.dataKey] === _e), Xe = Ye.map((ht) => {
            var Yt;
            return Number(ht[(Yt = E == null ? void 0 : E.series[0]) == null ? void 0 : Yt.dataKey]);
          }), mt = Xe.sort((ht, Yt) => ht - Yt);
          const Tt = zt(mt);
          if (!Ye)
            throw new Error("boxplots dont have data yet");
          if (!Ue)
            throw new Error("boxplots dont have plots yet");
          E.boxplot.firstQuartilePercentage === "" && (E.boxplot.firstQuartilePercentage = 0), E.boxplot.thirdQuartilePercentage === "" && (E.boxplot.thirdQuartilePercentage = 0);
          const tt = Tt.q1, Pt = Tt.q3, vt = Pt - tt, it = tt - (Pt - tt) * 1.5, kt = Pt + (Pt - tt) * 1.5, sn = mt.filter((ht) => ht < it || ht > kt);
          let wn = Xe;
          wn = wn.filter((ht) => !sn.includes(ht));
          const Ca = ra(Xe) || 0, Un = ia([Ca, tt - 1.5 * vt]);
          Ue.push({
            columnCategory: _e,
            columnMax: ra([ia(Xe), tt + 1.5 * vt]),
            columnThirdQuartile: Number(Pt).toFixed(E.dataFormat.roundTo),
            columnMedian: Number(Df(Xe)).toFixed(E.dataFormat.roundTo),
            columnFirstQuartile: tt.toFixed(E.dataFormat.roundTo),
            columnMin: Un,
            columnTotal: Xe.reduce((ht, Yt) => ht + Yt, 0),
            columnSd: Number(Of(Xe)).toFixed(E.dataFormat.roundTo),
            columnMean: Number(Mf(Xe)).toFixed(E.dataFormat.roundTo),
            columnIqr: Number(vt).toFixed(E.dataFormat.roundTo),
            columnLowerBounds: Un,
            columnUpperBounds: ra([ia(mt), tt + 1.5 * vt]),
            columnOutliers: sn,
            values: Xe,
            nonOutlierValues: wn
          });
        } catch (Ye) {
          console.error("COVE: ", Ye.message);
        }
      }), $e = JSON.parse(JSON.stringify(Ue)), $e.map((_e) => (_e.columnIqr = void 0, _e.nonOutlierValues = void 0, _e.columnLowerBounds = void 0, _e.columnUpperBounds = void 0, null)), E.boxplot.allValues = Me, E.boxplot.categories = ft, E.boxplot.plots = Ue, E.boxplot.tableData = $e;
    }
    E.visualizationType === "Combo" && E.series && (E.runtime.barSeriesKeys = [], E.runtime.lineSeriesKeys = [], E.runtime.areaSeriesKeys = [], E.runtime.forecastingSeriesKeys = [], E.series.forEach((re) => {
      re.type === "Area Chart" && E.runtime.areaSeriesKeys.push(re), re.type === "Forecasting" && E.runtime.forecastingSeriesKeys.push(re), re.type === "Bar" && E.runtime.barSeriesKeys.push(re.dataKey), (re.type === "Line" || re.type === "dashed-sm" || re.type === "dashed-md" || re.type === "dashed-lg") && E.runtime.lineSeriesKeys.push(re.dataKey);
    })), E.visualizationType === "Forecasting" && E.series && (E.runtime.forecastingSeriesKeys = [], E.series.forEach((re) => {
      re.type === "Forecasting" && E.runtime.forecastingSeriesKeys.push(re);
    })), E.visualizationType === "Area Chart" && E.series && (E.runtime.areaSeriesKeys = [], E.series.forEach((re) => {
      E.runtime.areaSeriesKeys.push({ ...re, type: "Area Chart" });
    })), E.visualizationType === "Bar" && E.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(E.visualizationType) ? (E.runtime.xAxis = E.yAxis, E.runtime.yAxis = E.xAxis, E.runtime.horizontal = !0, E.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(E.visualizationType) ? (E.runtime.xAxis = E.xAxis, E.runtime.yAxis = E.yAxis, E.runtime.horizontal = !1, E.orientation = "vertical") : (E.runtime.xAxis = E.xAxis, E.runtime.yAxis = E.yAxis, E.runtime.horizontal = !1), E.runtime.uniqueId = Date.now(), E.runtime.editorErrorMessage = E.visualizationType === "Pie" && !E.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", b(E);
  }, ye = (E, Q) => {
    let te = [];
    return Q.forEach((ae) => {
      let Ee = !0;
      E.filter((Ae) => Ae.type !== "url").forEach((Ae) => {
        ae[Ae.columnName] != Ae.active && (Ee = !1);
      }), Ee && te.push(ae);
    }), te;
  }, oe = (E, Q = this.state.data) => {
    const te = [];
    return Q.forEach((ae) => {
      const Ee = ae[E];
      Ee && te.includes(Ee) === !1 && te.push(Ee);
    }), te;
  }, ie = (E, Q) => {
    let te = f.visualizationType === "Bar" && f.visualizationSubType === "horizontal" ? f.xAxis.dataKey : f.yAxis.sortKey, ae = parseFloat(E[te]), Ee = parseFloat(Q[te]);
    return ae < Ee ? f.sortData === "ascending" ? 1 : -1 : ae > Ee ? f.sortData === "ascending" ? -1 : 1 : 0;
  }, Fe = new cu((E) => {
    for (let Q of E) {
      let { width: te, height: ae } = Q.contentRect, Ee = uu(te), Ae = 32, re = 350;
      S(Ee), n && (te = te - re), Q.target.dataset.lollipop === "true" && (te = te - 2.5), te = te - Ae, O([te, ae]);
    }
  }), se = R.useCallback((E) => {
    E !== null && Fe.observe(E), q(E);
  }, []);
  function Ne(E) {
    return Object.keys(E).length === 0;
  }
  R.useEffect(() => {
    Ke();
  }, []), R.useEffect(() => {
    le();
  }, [JSON.stringify(f.filters)]), R.useEffect(() => {
    V && !Ne(f) && !I && (Pu("cove_loaded", { config: f }), j(!0));
  }, [V, f]), R.useEffect(() => {
    const E = (Q) => {
      let te = [];
      te.push(Q.detail), P(te);
    };
    return Lu("cove_filterData", (Q) => E(Q)), () => {
      Ou("cove_filterData", E);
    };
  }, [f]), R.useEffect(() => {
    if (N && N[0] && !N[0].hasOwnProperty("active")) {
      let Q = { ...f };
      delete Q.filters, b(Q), T(ye(N, w));
    }
    if (N && N.length > 0 && N.length > 0 && N[0].hasOwnProperty("active")) {
      let E = { ...f, filters: N };
      b(E), T(ye(N, w));
    }
  }, [N]), t && R.useEffect(() => {
    Ke();
  }, [t.data]), R.useEffect(() => {
    if (x && f.xAxis && f.runtime.seriesKeys) {
      const E = f.customColors ? f.customColors : f.visualizationType === "Paired Bar" || f.visualizationType === "Deviation Bar" ? f.twoColor.palette : f.palette, Q = { ...tn, ...ar };
      let te = f.customColors || Q[E], ae = f.runtime.seriesKeys.length, Ee;
      for (; ae > te.length; )
        te = te.concat(te);
      te = te.slice(0, ae), Ee = () => kf({
        domain: f.runtime.seriesLabelsAll,
        range: te,
        unknown: null
      }), g(Ee), p(!1);
    }
    f && x && f.sortData && x.sort(ie);
  }, [f, x]);
  const Te = (E) => {
    const Q = [];
    if (z.length + 1 === f.runtime.seriesKeys.length && f.visualizationType !== "Forecasting") {
      B();
      return;
    }
    z.forEach((ae) => {
      Q.push(ae);
    });
    let te = E.datum;
    if (f.runtime.seriesLabels) {
      for (let ae = 0; ae < f.runtime.seriesKeys.length; ae++)
        if (f.runtime.seriesLabels[f.runtime.seriesKeys[ae]] === E.datum) {
          te = f.runtime.seriesKeys[ae];
          break;
        }
    }
    Q.indexOf(te) !== -1 ? Q.splice(Q.indexOf(te), 1) : Q.push(te), $(Q);
  }, B = () => {
    try {
      const E = document.getElementById("legend");
      if (!E)
        throw new Error("No legend available to set previous focus on.");
      E.focus();
    } catch (E) {
      console.error("COVE:", E.message);
    }
    $([]);
  }, Oe = f.orientation === "horizontal" ? "yAxis" : "xAxis", Ge = (E, Q = !0) => {
    let te = Ec(f.runtime[Oe].dateParseFormat)(E);
    return te || (Q && (f.runtime.editorErrorMessage = `Error parsing date "${E}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, ct = (E) => bc(f.runtime[Oe].dateDisplayFormat)(E);
  function nt(E, Q) {
    const ae = document.createElement("canvas").getContext("2d");
    if (!ae) {
      console.error("2d context not found");
      return;
    }
    return ae.font = Q || getComputedStyle(document.body).font, Math.ceil(ae.measureText(E).width);
  }
  const dt = (E) => {
    let Q = "", te = Math.abs(E);
    return te >= 1e9 ? (Q = "B", E = E / 1e9) : te >= 1e6 ? (Q = "M", E = E / 1e6) : te >= 1e3 && (Q = "K", E = E / 1e3), E + Q;
  }, at = (E, Q, te = !1, ae, Ee, Ae) => {
    if (isNaN(E) || !E)
      return E;
    const re = E < 0;
    (Q === void 0 || !Q) && (Q = "left"), re && (E = Math.abs(E));
    let {
      dataFormat: { commas: Me, abbreviated: Je, roundTo: ft, prefix: $e, suffix: Ue, rightRoundTo: zt, bottomRoundTo: _e, rightPrefix: Ye, rightSuffix: Xe, bottomPrefix: mt, bottomSuffix: Tt, bottomAbbreviated: tt }
    } = f;
    String(E).indexOf(",") !== -1 && (E = E.replaceAll(",", ""));
    let Pt = E, vt = {
      useGrouping: !!Me
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Q === "left" || Q === void 0) {
      let kt;
      Ae !== void 0 ? kt = Ae ? Number(Ae) : 0 : kt = ft ? Number(ft) : 0, vt = {
        useGrouping: Ae ? !0 : !!f.dataFormat.commas,
        minimumFractionDigits: kt,
        maximumFractionDigits: kt
      };
    }
    if (Q === "right" && (vt = {
      useGrouping: !!f.dataFormat.rightCommas,
      minimumFractionDigits: zt ? Number(zt) : 0,
      maximumFractionDigits: zt ? Number(zt) : 0
    }), Q === "bottom" && (vt = {
      useGrouping: !!f.dataFormat.bottomCommas,
      minimumFractionDigits: _e ? Number(_e) : 0,
      maximumFractionDigits: _e ? Number(_e) : 0
    }), E = Yl(E), isNaN(E))
      return f.runtime.editorErrorMessage = `Unable to parse number from data ${Pt}. Try reviewing your data and selections in the Data Series section.`, Pt;
    if (!f.dataFormat)
      return E;
    if (f.dataCutoff) {
      let kt = Yl(f.dataCutoff);
      E < kt && (E = kt);
    }
    Q === "left" && Me && Je && te || Q === "bottom" && Me && Je && te ? E = E : E = E.toLocaleString("en-US", vt);
    let it = "";
    return Je && Q === "left" && te && (E = dt(parseFloat(E))), tt && Q === "bottom" && te && (E = dt(parseFloat(E))), ae && Q === "left" ? it = ae + it : $e && Q === "left" && (it += $e), Ye && Q === "right" && (it += Ye), mt && Q === "bottom" && (it += mt), it += E, Ee && Q === "left" ? it += Ee : Ue && Q === "left" && (it += Ue), Xe && Q === "right" && (it += Xe), Tt && Q === "bottom" && (it += Tt), re && (it = "-" + it), String(it);
  }, et = {
    "Paired Bar": /* @__PURE__ */ i.createElement(Wt, null),
    Forecasting: /* @__PURE__ */ i.createElement(Wt, null),
    Bar: /* @__PURE__ */ i.createElement(Wt, null),
    Line: /* @__PURE__ */ i.createElement(Wt, null),
    Combo: /* @__PURE__ */ i.createElement(Wt, null),
    Pie: /* @__PURE__ */ i.createElement(Lp, null),
    "Box Plot": /* @__PURE__ */ i.createElement(Wt, null),
    "Area Chart": /* @__PURE__ */ i.createElement(Wt, null),
    "Scatter Plot": /* @__PURE__ */ i.createElement(Wt, null),
    "Deviation Bar": /* @__PURE__ */ i.createElement(Wt, null),
    "Forest Plot": /* @__PURE__ */ i.createElement(Wt, null)
  }, Et = () => {
    if (f.visualizationType === "Forecasting" || f.visualizationType === "Forest Plot")
      return !1;
    if (f.visualizationType === "Pie") {
      if ((f == null ? void 0 : f.yAxis.dataKey) === void 0)
        return !0;
    } else if ((f == null ? void 0 : f.series) === void 0 || !((f == null ? void 0 : f.series.length) > 0))
      return !0;
    return !f.xAxis.dataKey;
  }, qt = (E, Q) => {
    if (E === null || E === "" || E === void 0)
      return "";
    if (typeof E == "string" && E.length > 0 && f.legend.type === "equalnumber")
      return E;
    let te = E, ae;
    if (Object.keys(f.columns).length > 0 && Object.keys(f.columns).forEach(function(Ee) {
      var Ae = f.columns[Ee];
      Ae.name === Q && (ae = Ae);
    }), ae === void 0 && (ae = f.type === "chart" ? f.dataFormat : f.primary, ae.useCommas = ae.commas, ae.roundToPlace = ae.roundTo ? ae.roundTo : ""), ae) {
      let Ee = !1, Ae = 0;
      Number(E) && (ae.roundToPlace >= 0 && (Ee = ae.roundToPlace ? ae.roundToPlace !== "" || ae.roundToPlace !== null : !1, Ae = ae.roundToPlace ? Number(ae.roundToPlace) : 0, ae.hasOwnProperty("roundToPlace") && Ee && (te = Number(E).toFixed(Ae))), ae.hasOwnProperty("useCommas") && ae.useCommas === !0 && (te = Number(E).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: Ee ? Ae : 0,
        maximumFractionDigits: Ee ? Ae : 5
      }))), te = (ae.prefix || "") + te + (ae.suffix || "");
    }
    return te;
  }, In = (E) => {
    try {
      if (!E)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (f.type === "navigation") {
        let Q = tn[f.color] || tn.bluegreenreverse;
        return fs(Q[3]);
      }
      return fs();
    } catch (Q) {
      console.error("COVE: ", Q);
    }
  }, Sa = (E) => {
    var Q;
    return Array.isArray(E) ? f.visualizationType === "Forecasting" ? E : (Q = f == null ? void 0 : f.xAxis) != null && Q.dataKey ? m.cleanData(E, f.xAxis.dataKey) : E : [];
  }, At = (E) => E, Sn = (E) => {
    const Q = de.position === "bottom" || ["sm", "xs", "xxs"].includes(C), te = E.orientation === "horizontal", ae = Number(E.xAxis.tickRotation) > 0 ? Number(E.xAxis.tickRotation) : 0, Ee = E.brush.active, Ae = 20, re = E.brush.height;
    let Me = 0;
    return !Q && te && E.xAxis.label && (Me = E.runtime.xAxis.size + E.xAxis.labelOffset), !Q && te && !E.xAxis.label && (Me = 0), !te && !Q && E.xAxis.label && ae && !E.isResponsiveTicks && (Me = Ee ? re + E.xAxis.tickWidthMax + -E.xAxis.size + E.xAxis.labelOffset + Ae : E.xAxis.tickWidthMax + Ae + -E.xAxis.size + E.xAxis.labelOffset), !te && !Q && !E.xAxis.label && ae && E.isResponsiveTicks, !te && !Q && !E.xAxis.label && ae && !E.dynamicMarginTop && !E.isResponsiveTicks && (Me = Ee ? E.xAxis.tickWidthMax + re + Ae + -E.xAxis.size : 0), !te && !Q && E.xAxis.label && !ae && !E.isResponsiveTicks && (Me = Ee ? re + -E.xAxis.size + E.xAxis.labelOffset + Ae : -E.xAxis.size + E.xAxis.labelOffset + Ae), !te && !Q && E.xAxis.label && E.dynamicMarginTop && E.isResponsiveTicks && (Me = Ee ? re + E.xAxis.labelOffset + -E.xAxis.size + E.xAxis.tickWidthMax : E.dynamicMarginTop + -E.xAxis.size + Ae), !te && !Q && !E.xAxis.label && E.dynamicMarginTop && E.isResponsiveTicks && (Me = Ee ? re + E.xAxis.labelOffset + -E.xAxis.size + E.xAxis.tickWidthMax : E.dynamicMarginTop + -E.xAxis.size - Ae), !te && !Q && E.xAxis.label && !E.dynamicMarginTop && E.isResponsiveTicks && (Me = Ee ? re + E.xAxis.labelOffset + -E.xAxis.size + 25 : E.xAxis.labelOffset + -E.xAxis.size + Ae), !te && !Q && !E.xAxis.label && !E.dynamicMarginTop && E.isResponsiveTicks && (Me = -E.xAxis.size + Ae + E.xAxis.labelOffset), !te && !Q && !E.xAxis.label && !ae && !E.dynamicMarginTop && !E.isResponsiveTicks && (Me = Ee ? re + -E.xAxis.size + E.xAxis.labelOffset : 0), `${Me}px`;
  };
  let Ut = /* @__PURE__ */ i.createElement(vu, null);
  if (!y) {
    const E = /* @__PURE__ */ i.createElement("a", { href: `#data-table-${f.dataKey}`, className: "margin-left-href" }, f.dataKey, " (Go to Table)");
    Ut = /* @__PURE__ */ i.createElement(i.Fragment, null, n && /* @__PURE__ */ i.createElement(Xg, null), !Et() && !f.newViz && /* @__PURE__ */ i.createElement("div", { className: "cdc-chart-inner-container" }, /* @__PURE__ */ i.createElement(mu, { showTitle: f.showTitle, isDashboard: r, title: fe, superTitle: f.superTitle, classes: ["chart-title", `${f.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ i.createElement("a", { id: "skip-chart-container", className: "cdcdataviz-sr-only-focusable", href: F }, "Skip Over Chart Container"), f.filters && !N && /* @__PURE__ */ i.createElement(pu, { config: f, setConfig: b, setFilteredData: T, filteredData: D, excludedData: w, filterData: ye, dimensions: _ }), (f == null ? void 0 : f.introText) && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("section", { className: "introText" }, pn(f.introText)), /* @__PURE__ */ i.createElement("div", { style: { marginBottom: Sn(f) }, className: `chart-container  p-relative ${f.legend.position === "bottom" ? "bottom" : ""}${f.legend.hide ? " legend-hidden" : ""}${G}${Ce} ${K.join(" ")}` }, f.visualizationType !== "Spark Line" && et[f.visualizationType], f.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, (f == null ? void 0 : f.introText) && /* @__PURE__ */ i.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, pn(f.introText)), /* @__PURE__ */ i.createElement("div", { style: { height: "100px", width: "100%", ...ee } }, /* @__PURE__ */ i.createElement(nm, null, (Q) => /* @__PURE__ */ i.createElement(gg, { width: Q.width, height: Q.height }))), ke && /* @__PURE__ */ i.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, pn(ke))), !f.legend.hide && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(Pg, null)), r && f.table && f.table.show && f.table.showDataTableLink ? E : s && s, ke && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "column " + f.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, pn(ke)), /* @__PURE__ */ i.createElement($i.Section, { classes: ["download-buttons"] }, f.table.showDownloadImgButton && /* @__PURE__ */ i.createElement($i.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: f, elementToCapture: ce }), f.table.showDownloadPdfButton && /* @__PURE__ */ i.createElement($i.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: f, elementToCapture: ce })), f.xAxis.dataKey && f.table.show && f.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(
      xu,
      {
        config: f,
        rawData: f.data,
        runtimeData: D || w,
        expandDataTable: f.table.expanded,
        columns: f.columns,
        displayDataAsText: qt,
        displayGeoName: At,
        applyLegendToRow: In,
        tableTitle: f.table.label,
        indexTitle: f.table.indexLabel,
        vizTitle: fe,
        viewport: C,
        tabbingId: F,
        colorScale: v
      }
    ), (f == null ? void 0 : f.footnotes) && /* @__PURE__ */ i.createElement("section", { className: "footnotes" }, pn(f.footnotes))));
  }
  const ge = {
    capitalize: (E) => E.charAt(0).toUpperCase() + E.slice(1),
    getXAxisData: (E) => f.runtime.xAxis.type === "date" ? Ge(E[f.runtime.originalXAxis.dataKey]).getTime() : E[f.runtime.originalXAxis.dataKey],
    getYAxisData: (E, Q) => E[Q],
    config: f,
    setConfig: b,
    rawData: x ?? {},
    excludedData: w,
    transformedData: Sa(D || w),
    // do this right before passing to components
    tableData: D || w,
    // do not clean table data
    unfilteredData: x,
    seriesHighlight: z,
    colorScale: v,
    dimensions: _,
    currentViewport: C,
    parseDate: Ge,
    formatDate: ct,
    formatNumber: at,
    loading: y,
    updateConfig: Se,
    colorPalettes: tn,
    isDashboard: r,
    setParentConfig: l,
    missingRequiredSections: Et,
    setEditing: c,
    setFilteredData: T,
    handleChartAriaLabels: me,
    highlight: Te,
    highlightReset: B,
    legend: de,
    setSeriesHighlight: $,
    dynamicLegendItems: J,
    setDynamicLegendItems: U,
    filterData: ye,
    imageId: ce,
    handleLineType: ue,
    lineOptions: Le,
    isNumber: Ua,
    getTextWidth: nt,
    twoColorPalette: ar,
    isEditor: n,
    isDebug: a,
    setSharedFilter: u,
    setSharedFilterValue: d,
    dashboardConfig: h
  }, Pe = ["cdc-open-viz-module", "type-chart", `${C}`, `font-${f.fontSize}`, `${f.theme}`];
  return f.visualizationType === "Spark Line" && Pe.push("type-sparkline"), n && Pe.push("spacing-wrapper"), n && Pe.push("isEditor"), /* @__PURE__ */ i.createElement(Re.Provider, { value: ge }, /* @__PURE__ */ i.createElement("div", { className: `${Pe.join(" ")}`, ref: se, "data-lollipop": f.isLollipopChart, "data-download-id": ce }, Ut));
}
export {
  vx as C
};
