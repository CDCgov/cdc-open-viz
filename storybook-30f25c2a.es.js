import { R as r, r as $ } from "./storybook-e61d95ab.es.js";
import { i as vu, g as bu } from "./storybook-a2b11335.es.js";
import { A as Eu } from "./storybook-c757ed74.es.js";
import { p as bs, P as R } from "./storybook-b8c9afe4.es.js";
import { d as Au } from "./storybook-006055ee.es.js";
import { a as Vi } from "./storybook-c5d32002.es.js";
import { P as qo } from "./storybook-76833471.es.js";
import { H as xn, T as Su } from "./storybook-826feda6.es.js";
import { _ as Ue } from "./storybook-70f3d2a3.es.js";
import { _ as jt, G as Tu, t as Ua, a as kt, s as Ya, T as $e, P as Es, I as Uo, u as ku, D as Yo, C as Xo, F as wu } from "./storybook-d6b474a7.es.js";
import { e as Ft, a as it, b as ot, c as lt, d as st, A as vn } from "./storybook-7cc24c1b.es.js";
import { D as As } from "./storybook-b554456e.es.js";
import { t as Cu, f as Ss, L as Qo, g as cn, M as Fr, D as Pu } from "./storybook-9dde4f4f.es.js";
import { E as Bt, L as Nu } from "./storybook-a0c99f4a.es.js";
import { B as Ot, s as Zn, t as Ts, a as ks, b as ws, d as pa, c as pt, C as Lu, S as Cs } from "./storybook-e28248b2.es.js";
import { G as be, c as tt, b as Tr, t as Ou, e as Ps, f as Zo, g as _u, h as Mu, j as Ns, k as Jo, m as Du } from "./storybook-43478234.es.js";
import { R as $u } from "./storybook-ac19c974.es.js";
import "./storybook-9c2b8003.es.js";
import { i as Ls, m as Br, c as Os, j as ka, k as wa, l as Ca, n as Go, o as zu, p as el, b as _s, d as Ms } from "./storybook-bedc547d.es.js";
import { a as Re } from "./storybook-60d140a8.es.js";
import { T as ee } from "./storybook-46a89ba7.es.js";
import { S as Me, T as fe, C as Te, D as Ru } from "./storybook-55cfb81c.es.js";
import { I as rn } from "./storybook-deb084b6.es.js";
import { u as Fu, p as Bu, s as Vu, a as Hu, c as Wu } from "./storybook-25f566e3.es.js";
import { n as tl } from "./storybook-24623c03.es.js";
import { c as nl } from "./storybook-7a3dd9ba.es.js";
var ii = Math.PI, oi = 2 * ii, gn = 1e-6, Ku = oi - gn;
function li() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function kr() {
  return new li();
}
li.prototype = kr.prototype = {
  constructor: li,
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
    else if (h > gn)
      if (!(Math.abs(d * s - c * u) > gn) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var m = n - o, p = a - l, g = s * s + c * c, E = m * m + p * p, y = Math.sqrt(g), f = Math.sqrt(h), x = i * Math.tan((ii - Math.acos((g + h - E) / (2 * y * f))) / 2), b = x / f, v = x / y;
        Math.abs(b - 1) > gn && (this._ += "L" + (e + b * u) + "," + (t + b * d)), this._ += "A" + i + "," + i + ",0,0," + +(d * m > u * p) + "," + (this._x1 = e + v * s) + "," + (this._y1 = t + v * c);
      }
  },
  arc: function(e, t, n, a, i, o) {
    e = +e, t = +t, n = +n, o = !!o;
    var l = n * Math.cos(a), s = n * Math.sin(a), c = e + l, u = t + s, d = 1 ^ o, h = o ? a - i : i - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > gn || Math.abs(this._y1 - u) > gn) && (this._ += "L" + c + "," + u), n && (h < 0 && (h = h % oi + oi), h > Ku ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (e - l) + "," + (t - s) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = c) + "," + (this._y1 = u) : h > gn && (this._ += "A" + n + "," + n + ",0," + +(h >= ii) + "," + d + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
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
var al = Math.abs, xt = Math.atan2, un = Math.cos, Iu = Math.max, Vr = Math.min, Ht = Math.sin, _n = Math.sqrt, vt = 1e-12, ca = Math.PI, Xa = ca / 2, Va = 2 * ca;
function ju(e) {
  return e > 1 ? 0 : e < -1 ? ca : Math.acos(e);
}
function rl(e) {
  return e >= 1 ? Xa : e <= -1 ? -Xa : Math.asin(e);
}
function qu(e) {
  return e.innerRadius;
}
function Uu(e) {
  return e.outerRadius;
}
function Yu(e) {
  return e.startAngle;
}
function Xu(e) {
  return e.endAngle;
}
function Qu(e) {
  return e && e.padAngle;
}
function Zu(e, t, n, a, i, o, l, s) {
  var c = n - e, u = a - t, d = l - i, h = s - o, m = h * c - d * u;
  if (!(m * m < vt))
    return m = (d * (t - o) - h * (e - i)) / m, [e + m * c, t + m * u];
}
function Pa(e, t, n, a, i, o, l) {
  var s = e - n, c = t - a, u = (l ? o : -o) / _n(s * s + c * c), d = u * c, h = -u * s, m = e + d, p = t + h, g = n + d, E = a + h, y = (m + g) / 2, f = (p + E) / 2, x = g - m, b = E - p, v = x * x + b * b, S = i - o, A = m * E - g * p, k = (b < 0 ? -1 : 1) * _n(Iu(0, S * S * v - A * A)), N = (A * b - x * k) / v, C = (-A * x - b * k) / v, P = (A * b + x * k) / v, D = (-A * x + b * k) / v, T = N - y, z = C - f, V = P - y, W = D - f;
  return T * T + z * z > V * V + W * W && (N = P, C = D), {
    cx: N,
    cy: C,
    x01: -d,
    y01: -h,
    x11: N * (i / S - 1),
    y11: C * (i / S - 1)
  };
}
function Ju() {
  var e = qu, t = Uu, n = We(0), a = null, i = Yu, o = Xu, l = Qu, s = null;
  function c() {
    var u, d, h = +e.apply(this, arguments), m = +t.apply(this, arguments), p = i.apply(this, arguments) - Xa, g = o.apply(this, arguments) - Xa, E = al(g - p), y = g > p;
    if (s || (s = u = kr()), m < h && (d = m, m = h, h = d), !(m > vt))
      s.moveTo(0, 0);
    else if (E > Va - vt)
      s.moveTo(m * un(p), m * Ht(p)), s.arc(0, 0, m, p, g, !y), h > vt && (s.moveTo(h * un(g), h * Ht(g)), s.arc(0, 0, h, g, p, y));
    else {
      var f = p, x = g, b = p, v = g, S = E, A = E, k = l.apply(this, arguments) / 2, N = k > vt && (a ? +a.apply(this, arguments) : _n(h * h + m * m)), C = Vr(al(m - h) / 2, +n.apply(this, arguments)), P = C, D = C, T, z;
      if (N > vt) {
        var V = rl(N / h * Ht(k)), W = rl(N / m * Ht(k));
        (S -= V * 2) > vt ? (V *= y ? 1 : -1, b += V, v -= V) : (S = 0, b = v = (p + g) / 2), (A -= W * 2) > vt ? (W *= y ? 1 : -1, f += W, x -= W) : (A = 0, f = x = (p + g) / 2);
      }
      var F = m * un(f), L = m * Ht(f), q = h * un(v), j = h * Ht(v);
      if (C > vt) {
        var Y = m * un(x), H = m * Ht(x), U = h * un(b), I = h * Ht(b), Q;
        if (E < ca && (Q = Zu(F, L, U, I, Y, H, q, j))) {
          var ne = F - Q[0], he = L - Q[1], Pe = Y - Q[0], ke = H - Q[1], X = 1 / Ht(ju((ne * Pe + he * ke) / (_n(ne * ne + he * he) * _n(Pe * Pe + ke * ke))) / 2), K = _n(Q[0] * Q[0] + Q[1] * Q[1]);
          P = Vr(C, (h - K) / (X - 1)), D = Vr(C, (m - K) / (X + 1));
        }
      }
      A > vt ? D > vt ? (T = Pa(U, I, F, L, m, D, y), z = Pa(Y, H, q, j, m, D, y), s.moveTo(T.cx + T.x01, T.cy + T.y01), D < C ? s.arc(T.cx, T.cy, D, xt(T.y01, T.x01), xt(z.y01, z.x01), !y) : (s.arc(T.cx, T.cy, D, xt(T.y01, T.x01), xt(T.y11, T.x11), !y), s.arc(0, 0, m, xt(T.cy + T.y11, T.cx + T.x11), xt(z.cy + z.y11, z.cx + z.x11), !y), s.arc(z.cx, z.cy, D, xt(z.y11, z.x11), xt(z.y01, z.x01), !y))) : (s.moveTo(F, L), s.arc(0, 0, m, f, x, !y)) : s.moveTo(F, L), !(h > vt) || !(S > vt) ? s.lineTo(q, j) : P > vt ? (T = Pa(q, j, Y, H, h, -P, y), z = Pa(F, L, U, I, h, -P, y), s.lineTo(T.cx + T.x01, T.cy + T.y01), P < C ? s.arc(T.cx, T.cy, P, xt(T.y01, T.x01), xt(z.y01, z.x01), !y) : (s.arc(T.cx, T.cy, P, xt(T.y01, T.x01), xt(T.y11, T.x11), !y), s.arc(0, 0, h, xt(T.cy + T.y11, T.cx + T.x11), xt(z.cy + z.y11, z.cx + z.x11), y), s.arc(z.cx, z.cy, P, xt(z.y11, z.x11), xt(z.y01, z.x01), !y))) : s.arc(0, 0, h, v, b, y);
    }
    if (s.closePath(), u)
      return s = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, d = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - ca / 2;
    return [un(d) * u, Ht(d) * u];
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
function Ds(e) {
  this._context = e;
}
Ds.prototype = {
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
function wr(e) {
  return new Ds(e);
}
function $s(e) {
  return e[0];
}
function zs(e) {
  return e[1];
}
function Rs() {
  var e = $s, t = zs, n = We(!0), a = null, i = wr, o = null;
  function l(s) {
    var c, u = s.length, d, h = !1, m;
    for (a == null && (o = i(m = kr())), c = 0; c <= u; ++c)
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
function Gu() {
  var e = $s, t = null, n = We(0), a = zs, i = We(!0), o = null, l = wr, s = null;
  function c(d) {
    var h, m, p, g = d.length, E, y = !1, f, x = new Array(g), b = new Array(g);
    for (o == null && (s = l(f = kr())), h = 0; h <= g; ++h) {
      if (!(h < g && i(E = d[h], h, d)) === y)
        if (y = !y)
          m = h, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), p = h - 1; p >= m; --p)
            s.point(x[p], b[p]);
          s.lineEnd(), s.areaEnd();
        }
      y && (x[h] = +e(E, h, d), b[h] = +n(E, h, d), s.point(t ? +t(E, h, d) : x[h], a ? +a(E, h, d) : b[h]));
    }
    if (f)
      return s = null, f + "" || null;
  }
  function u() {
    return Rs().defined(i).curve(l).context(o);
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
function ed(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function td(e) {
  return e;
}
function nd() {
  var e = td, t = ed, n = null, a = We(0), i = We(Va), o = We(0);
  function l(s) {
    var c, u = s.length, d, h, m = 0, p = new Array(u), g = new Array(u), E = +a.apply(this, arguments), y = Math.min(Va, Math.max(-Va, i.apply(this, arguments) - E)), f, x = Math.min(Math.abs(y) / u, o.apply(this, arguments)), b = x * (y < 0 ? -1 : 1), v;
    for (c = 0; c < u; ++c)
      (v = g[p[c] = c] = +e(s[c], c, s)) > 0 && (m += v);
    for (t != null ? p.sort(function(S, A) {
      return t(g[S], g[A]);
    }) : n != null && p.sort(function(S, A) {
      return n(s[S], s[A]);
    }), c = 0, h = m ? (y - u * b) / m : 0; c < u; ++c, E = f)
      d = p[c], v = g[d], f = E + (v > 0 ? v * h : 0) + b, g[d] = {
        data: s[d],
        index: c,
        value: v,
        startAngle: E,
        endAngle: f,
        padAngle: x
      };
    return g;
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
var il = Array.prototype.slice;
function on() {
}
function Qa(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function Cr(e) {
  this._context = e;
}
Cr.prototype = {
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
        Qa(this, this._x1, this._y1);
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
        Qa(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function ad(e) {
  return new Cr(e);
}
function Fs(e) {
  this._context = e;
}
Fs.prototype = {
  areaStart: on,
  areaEnd: on,
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
        Qa(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function rd(e) {
  return new Fs(e);
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
        Qa(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function id(e) {
  return new Bs(e);
}
function Vs(e, t) {
  this._basis = new Cr(e), this._beta = t;
}
Vs.prototype = {
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
const od = function e(t) {
  function n(a) {
    return t === 1 ? new Cr(a) : new Vs(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function Za(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function Hi(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Hi.prototype = {
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
        Za(this, this._x1, this._y1);
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
        Za(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const ld = function e(t) {
  function n(a) {
    return new Hi(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Wi(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Wi.prototype = {
  areaStart: on,
  areaEnd: on,
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
        Za(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const sd = function e(t) {
  function n(a) {
    return new Wi(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Ki(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Ki.prototype = {
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
        Za(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const cd = function e(t) {
  function n(a) {
    return new Ki(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Ii(e, t, n) {
  var a = e._x1, i = e._y1, o = e._x2, l = e._y2;
  if (e._l01_a > vt) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, i = (i * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > vt) {
    var u = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, d = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * u + e._x1 * e._l23_2a - t * e._l12_2a) / d, l = (l * u + e._y1 * e._l23_2a - n * e._l12_2a) / d;
  }
  e._context.bezierCurveTo(a, i, o, l, e._x2, e._y2);
}
function Hs(e, t) {
  this._context = e, this._alpha = t;
}
Hs.prototype = {
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
        Ii(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const ud = function e(t) {
  function n(a) {
    return t ? new Hs(a, t) : new Hi(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Ws(e, t) {
  this._context = e, this._alpha = t;
}
Ws.prototype = {
  areaStart: on,
  areaEnd: on,
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
        Ii(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const dd = function e(t) {
  function n(a) {
    return t ? new Ws(a, t) : new Wi(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Ks(e, t) {
  this._context = e, this._alpha = t;
}
Ks.prototype = {
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
        Ii(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const md = function e(t) {
  function n(a) {
    return t ? new Ks(a, t) : new Ki(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Is(e) {
  this._context = e;
}
Is.prototype = {
  areaStart: on,
  areaEnd: on,
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
function si(e) {
  return new Is(e);
}
function ol(e) {
  return e < 0 ? -1 : 1;
}
function ll(e, t, n) {
  var a = e._x1 - e._x0, i = t - e._x1, o = (e._y1 - e._y0) / (a || i < 0 && -0), l = (n - e._y1) / (i || a < 0 && -0), s = (o * i + l * a) / (a + i);
  return (ol(o) + ol(l)) * Math.min(Math.abs(o), Math.abs(l), 0.5 * Math.abs(s)) || 0;
}
function sl(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Hr(e, t, n) {
  var a = e._x0, i = e._y0, o = e._x1, l = e._y1, s = (o - a) / 3;
  e._context.bezierCurveTo(a + s, i + s * t, o - s, l - s * n, o, l);
}
function Ja(e) {
  this._context = e;
}
Ja.prototype = {
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
        Hr(this, this._t0, sl(this, this._t0));
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
          this._point = 3, Hr(this, sl(this, n = ll(this, e, t)), n);
          break;
        default:
          Hr(this, this._t0, n = ll(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function js(e) {
  this._context = new qs(e);
}
(js.prototype = Object.create(Ja.prototype)).point = function(e, t) {
  Ja.prototype.point.call(this, t, e);
};
function qs(e) {
  this._context = e;
}
qs.prototype = {
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
function Ha(e) {
  return new Ja(e);
}
function fd(e) {
  return new js(e);
}
function Us(e) {
  this._context = e;
}
Us.prototype = {
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
        for (var a = cl(e), i = cl(t), o = 0, l = 1; l < n; ++o, ++l)
          this._context.bezierCurveTo(a[0][o], i[0][o], a[1][o], i[1][o], e[l], t[l]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function cl(e) {
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
function hd(e) {
  return new Us(e);
}
function Pr(e, t) {
  this._context = e, this._t = t;
}
Pr.prototype = {
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
function pd(e) {
  return new Pr(e, 0.5);
}
function yd(e) {
  return new Pr(e, 0);
}
function gd(e) {
  return new Pr(e, 1);
}
function Rn(e, t) {
  if ((l = e.length) > 1)
    for (var n = 1, a, i, o = e[t[0]], l, s = o.length; n < l; ++n)
      for (i = o, o = e[t[n]], a = 0; a < s; ++a)
        o[a][1] += o[a][0] = isNaN(i[a][1]) ? i[a][0] : i[a][1];
}
function Fn(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function xd(e, t) {
  return e[t];
}
function ji() {
  var e = We([]), t = Fn, n = Rn, a = xd;
  function i(o) {
    var l = e.apply(this, arguments), s, c = o.length, u = l.length, d = new Array(u), h;
    for (s = 0; s < u; ++s) {
      for (var m = l[s], p = d[s] = new Array(c), g = 0, E; g < c; ++g)
        p[g] = E = [0, +a(o[g], m, g, o)], E.data = o[g];
      p.key = m;
    }
    for (s = 0, h = t(d); s < u; ++s)
      d[h[s]].index = s;
    return n(d, h), d;
  }
  return i.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : We(il.call(o)), i) : e;
  }, i.value = function(o) {
    return arguments.length ? (a = typeof o == "function" ? o : We(+o), i) : a;
  }, i.order = function(o) {
    return arguments.length ? (t = o == null ? Fn : typeof o == "function" ? o : We(il.call(o)), i) : t;
  }, i.offset = function(o) {
    return arguments.length ? (n = o ?? Rn, i) : n;
  }, i;
}
function vd(e, t) {
  if ((a = e.length) > 0) {
    for (var n, a, i = 0, o = e[0].length, l; i < o; ++i) {
      for (l = n = 0; n < a; ++n)
        l += e[n][i][1] || 0;
      if (l)
        for (n = 0; n < a; ++n)
          e[n][i][1] /= l;
    }
    Rn(e, t);
  }
}
function bd(e, t) {
  if ((c = e.length) > 0)
    for (var n, a = 0, i, o, l, s, c, u = e[t[0]].length; a < u; ++a)
      for (l = s = 0, n = 0; n < c; ++n)
        (o = (i = e[t[n]][a])[1] - i[0]) > 0 ? (i[0] = l, i[1] = l += o) : o < 0 ? (i[1] = s, i[0] = s += o) : (i[0] = 0, i[1] = o);
}
function Ed(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, a = e[t[0]], i, o = a.length; n < o; ++n) {
      for (var l = 0, s = 0; l < i; ++l)
        s += e[l][n][1] || 0;
      a[n][1] += a[n][0] = -s / 2;
    }
    Rn(e, t);
  }
}
function Ad(e, t) {
  if (!(!((l = e.length) > 0) || !((o = (i = e[t[0]]).length) > 0))) {
    for (var n = 0, a = 1, i, o, l; a < o; ++a) {
      for (var s = 0, c = 0, u = 0; s < l; ++s) {
        for (var d = e[t[s]], h = d[a][1] || 0, m = d[a - 1][1] || 0, p = (h - m) / 2, g = 0; g < s; ++g) {
          var E = e[t[g]], y = E[a][1] || 0, f = E[a - 1][1] || 0;
          p += y - f;
        }
        c += h, u += p * h;
      }
      i[a - 1][1] += i[a - 1][0] = n, c && (n -= u / c);
    }
    i[a - 1][1] += i[a - 1][0] = n, Rn(e, t);
  }
}
function Sd(e) {
  var t = e.map(Td);
  return Fn(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function Td(e) {
  for (var t = -1, n = 0, a = e.length, i, o = -1 / 0; ++t < a; )
    (i = +e[t][1]) > o && (o = i, n = t);
  return n;
}
function Ys(e) {
  var t = e.map(Xs);
  return Fn(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function Xs(e) {
  for (var t = 0, n = -1, a = e.length, i; ++n < a; )
    (i = +e[n][1]) && (t += i);
  return t;
}
function kd(e) {
  return Ys(e).reverse();
}
function wd(e) {
  var t = e.length, n, a, i = e.map(Xs), o = Sd(e), l = 0, s = 0, c = [], u = [];
  for (n = 0; n < t; ++n)
    a = o[n], l < s ? (l += i[a], c.push(a)) : (s += i[a], u.push(a));
  return u.reverse().concat(c);
}
function Cd(e) {
  return Fn(e).reverse();
}
function Qe(e, t) {
  e(t);
}
var ul = {
  ascending: Ys,
  descending: kd,
  insideout: wd,
  none: Fn,
  reverse: Cd
};
function qi(e) {
  return e && ul[e] || ul.none;
}
var dl = {
  expand: vd,
  diverging: bd,
  none: Rn,
  silhouette: Ed,
  wiggle: Ad
};
function Ui(e) {
  return e && dl[e] || dl.none;
}
function Pd(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, a = t.outerRadius, i = t.cornerRadius, o = t.startAngle, l = t.endAngle, s = t.padAngle, c = t.padRadius, u = Ju();
  return n != null && Qe(u.innerRadius, n), a != null && Qe(u.outerRadius, a), i != null && Qe(u.cornerRadius, i), o != null && Qe(u.startAngle, o), l != null && Qe(u.endAngle, l), s != null && Qe(u.padAngle, s), c != null && Qe(u.padRadius, c), u;
}
function Yi(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.x0, i = t.x1, o = t.y, l = t.y0, s = t.y1, c = t.defined, u = t.curve, d = Gu();
  return n && Qe(d.x, n), a && Qe(d.x0, a), i && Qe(d.x1, i), o && Qe(d.y, o), l && Qe(d.y0, l), s && Qe(d.y1, s), c && d.defined(c), u && d.curve(u), d;
}
function Nd(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.y, i = t.defined, o = t.curve, l = Rs();
  return n && Qe(l.x, n), a && Qe(l.y, a), i && l.defined(i), o && l.curve(o), l;
}
function Ld(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, a = t.endAngle, i = t.padAngle, o = t.value, l = t.sort, s = t.sortValues, c = nd();
  return (l === null || l != null) && c.sort(l), (s === null || s != null) && c.sortValues(s), o != null && c.value(o), i != null && Qe(c.padAngle, i), n != null && Qe(c.startAngle, n), a != null && Qe(c.endAngle, a), c;
}
function Od(e) {
  var t = e.keys, n = e.value, a = e.order, i = e.offset, o = ji();
  return t && o.keys(t), n && Qe(o.value, n), a && o.order(qi(a)), i && o.offset(Ui(i)), o;
}
var _d = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
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
function Md(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Dd(e) {
  var t = e.className, n = e.top, a = e.left, i = e.data, o = i === void 0 ? [] : i, l = e.centroid, s = e.innerRadius, c = s === void 0 ? 0 : s, u = e.outerRadius, d = e.cornerRadius, h = e.startAngle, m = e.endAngle, p = e.padAngle, g = e.padRadius, E = e.pieSort, y = e.pieSortValues, f = e.pieValue, x = e.children, b = e.fill, v = b === void 0 ? "" : b, S = Md(e, _d), A = Pd({
    innerRadius: c,
    outerRadius: u,
    cornerRadius: d,
    padRadius: g
  }), k = Ld({
    startAngle: h,
    endAngle: m,
    padAngle: p,
    value: f,
    sort: E,
    sortValues: y
  }), N = k(o);
  return x ? /* @__PURE__ */ r.createElement(r.Fragment, null, x({
    arcs: N,
    path: A,
    pie: k
  })) : /* @__PURE__ */ r.createElement(be, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, N.map(function(C, P) {
    return /* @__PURE__ */ r.createElement("g", {
      key: "pie-arc-" + P
    }, /* @__PURE__ */ r.createElement("path", ci({
      className: tt("visx-pie-arc", t),
      d: A(C) || "",
      fill: v == null || typeof v == "string" ? v : v(C)
    }, S)), l == null ? void 0 : l(A.centroid(C), C));
  }));
}
var $d = ["from", "to", "fill", "className", "innerRef"];
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
function zd(e, t) {
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
  } : a, o = e.fill, l = o === void 0 ? "transparent" : o, s = e.className, c = e.innerRef, u = zd(e, $d), d = n.x === i.x || n.y === i.y;
  return /* @__PURE__ */ r.createElement("line", ui({
    ref: c,
    className: tt("visx-line", s),
    x1: n.x,
    y1: n.y,
    x2: i.x,
    y2: i.y,
    fill: l,
    shapeRendering: d ? "crispEdges" : "auto"
  }, u));
}
var Rd = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
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
function Fd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ln(e) {
  var t = e.children, n = e.data, a = n === void 0 ? [] : n, i = e.x, o = e.y, l = e.fill, s = l === void 0 ? "transparent" : l, c = e.className, u = e.curve, d = e.innerRef, h = e.defined, m = h === void 0 ? function() {
    return !0;
  } : h, p = Fd(e, Rd), g = Nd({
    x: i,
    y: o,
    defined: m,
    curve: u
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: g
  })) : /* @__PURE__ */ r.createElement("path", di({
    ref: d,
    className: tt("visx-linepath", c),
    d: g(a) || "",
    fill: s,
    strokeLinecap: "round"
  }, p));
}
var Bd = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
function Vd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Hd(e) {
  var t = e.children, n = e.x, a = e.x0, i = e.x1, o = e.y, l = e.y0, s = e.y1, c = e.data, u = c === void 0 ? [] : c, d = e.defined, h = d === void 0 ? function() {
    return !0;
  } : d, m = e.className, p = e.curve, g = e.innerRef, E = Vd(e, Bd), y = Yi({
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
    path: y
  })) : /* @__PURE__ */ r.createElement("path", mi({
    ref: g,
    className: tt("visx-area", m),
    d: y(u) || ""
  }, E));
}
var Wd = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
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
function Kd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Id(e) {
  var t = e.x, n = e.x0, a = e.x1, i = e.y, o = e.y1, l = e.y0, s = e.yScale, c = e.data, u = c === void 0 ? [] : c, d = e.defined, h = d === void 0 ? function() {
    return !0;
  } : d, m = e.className, p = e.curve, g = e.innerRef, E = e.children, y = Kd(e, Wd), f = Yi({
    x: t,
    x0: n,
    x1: a,
    defined: h,
    curve: p
  });
  return l == null ? f.y0(s.range()[0]) : Qe(f.y0, l), i && !o && Qe(f.y1, i), o && !i && Qe(f.y1, o), E ? /* @__PURE__ */ r.createElement(r.Fragment, null, E({
    path: f
  })) : /* @__PURE__ */ r.createElement("path", fi({
    ref: g,
    className: tt("visx-area-closed", m),
    d: f(u) || ""
  }, y));
}
var jd = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function qd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ud(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, o = e.data, l = e.curve, s = e.defined, c = e.x, u = e.x0, d = e.x1, h = e.y0, m = e.y1, p = e.value, g = e.order, E = e.offset, y = e.color, f = e.children, x = qd(e, jd), b = Od({
    keys: i,
    value: p,
    order: g,
    offset: E
  }), v = Yi({
    x: c,
    x0: u,
    x1: d,
    y0: h,
    y1: m,
    curve: l,
    defined: s
  }), S = b(o);
  return f ? /* @__PURE__ */ r.createElement(r.Fragment, null, f({
    stacks: S,
    path: v,
    stack: b
  })) : /* @__PURE__ */ r.createElement(be, {
    top: n,
    left: a
  }, S.map(function(A, k) {
    return /* @__PURE__ */ r.createElement("path", hi({
      className: tt("visx-stack", t),
      key: "stack-" + k + "-" + (A.key || ""),
      d: v(A) || "",
      fill: y == null ? void 0 : y(A.key, k)
    }, x));
  }));
}
var Yd = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function Xd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Qd(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, o = e.data, l = e.curve, s = e.defined, c = e.x, u = e.x0, d = e.x1, h = e.y0, m = e.y1, p = e.value, g = e.order, E = e.offset, y = e.color, f = e.children, x = Xd(e, Yd);
  return /* @__PURE__ */ r.createElement(Ud, Ga({
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
    order: g,
    offset: E,
    color: y
  }, x), f || function(b) {
    var v = b.stacks, S = b.path;
    return v.map(function(A, k) {
      return /* @__PURE__ */ r.createElement("path", Ga({
        className: tt("visx-area-stack", t),
        key: "area-stack-" + k + "-" + (A.key || ""),
        d: S(A) || "",
        fill: y == null ? void 0 : y(A.key, k)
      }, x));
    });
  });
}
function Xi(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var Zd = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
function Jd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Qs(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, o = e.x0, l = e.x0Scale, s = e.x1Scale, c = e.yScale, u = e.color, d = e.keys, h = e.height, m = e.children, p = Jd(e, Zd), g = Xi(s), E = t.map(function(y, f) {
    return {
      index: f,
      x0: l(o(y)),
      bars: d.map(function(x, b) {
        var v = y[x];
        return {
          index: b,
          key: x,
          value: v,
          width: g,
          x: s(x) || 0,
          y: c(v) || 0,
          color: u(x, b),
          height: h - (c(v) || 0)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ r.createElement(r.Fragment, null, m(E)) : /* @__PURE__ */ r.createElement(be, {
    className: tt("visx-bar-group", n),
    top: a,
    left: i
  }, E.map(function(y) {
    return /* @__PURE__ */ r.createElement(be, {
      key: "bar-group-" + y.index + "-" + y.x0,
      left: y.x0
    }, y.bars.map(function(f) {
      return /* @__PURE__ */ r.createElement(Ot, pi({
        key: "bar-group-bar-" + y.index + "-" + f.index + "-" + f.value + "-" + f.key,
        x: f.x,
        y: f.y,
        width: f.width,
        height: f.height,
        fill: f.color
      }, p));
    }));
  }));
}
function Zs(e) {
  return e == null ? void 0 : e[0];
}
function Js(e) {
  return e == null ? void 0 : e[1];
}
var Gd = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function em(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function tm(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, o = e.x, l = e.y0, s = l === void 0 ? Zs : l, c = e.y1, u = c === void 0 ? Js : c, d = e.xScale, h = e.yScale, m = e.color, p = e.keys, g = e.value, E = e.order, y = e.offset, f = e.children, x = em(e, Gd), b = ji();
  p && b.keys(p), g && Qe(b.value, g), E && b.order(qi(E)), y && b.offset(Ui(y));
  var v = b(t), S = Xi(d), A = v.map(function(k, N) {
    var C = k.key;
    return {
      index: N,
      key: C,
      bars: k.map(function(P, D) {
        var T = (h(s(P)) || 0) - (h(u(P)) || 0), z = h(u(P)), V = "bandwidth" in d ? d(o(P.data)) : Math.max((d(o(P.data)) || 0) - S / 2);
        return {
          bar: P,
          key: C,
          index: D,
          height: T,
          width: S,
          x: V || 0,
          y: z || 0,
          color: m(k.key, D)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ r.createElement(r.Fragment, null, f(A)) : /* @__PURE__ */ r.createElement(be, {
    className: tt("visx-bar-stack", n),
    top: a,
    left: i
  }, A.map(function(k) {
    return k.bars.map(function(N) {
      return /* @__PURE__ */ r.createElement(Ot, yi({
        key: "bar-stack-" + k.index + "-" + N.index,
        x: N.x,
        y: N.y,
        height: N.height,
        width: N.width,
        fill: N.color
      }, x));
    });
  }));
}
var nm = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function am(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function rm(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, o = e.y, l = e.x0, s = l === void 0 ? Zs : l, c = e.x1, u = c === void 0 ? Js : c, d = e.xScale, h = e.yScale, m = e.color, p = e.keys, g = e.value, E = e.order, y = e.offset, f = e.children, x = am(e, nm), b = ji();
  p && b.keys(p), g && Qe(b.value, g), E && b.order(qi(E)), y && b.offset(Ui(y));
  var v = b(t), S = Xi(h), A = v.map(function(k, N) {
    var C = k.key;
    return {
      index: N,
      key: C,
      bars: k.map(function(P, D) {
        var T = (d(u(P)) || 0) - (d(s(P)) || 0), z = d(s(P)), V = "bandwidth" in h ? h(o(P.data)) : Math.max((h(o(P.data)) || 0) - T / 2);
        return {
          bar: P,
          key: C,
          index: D,
          height: S,
          width: T,
          x: z || 0,
          y: V || 0,
          color: m(k.key, D)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ r.createElement(r.Fragment, null, f(A)) : /* @__PURE__ */ r.createElement(be, {
    className: tt("visx-bar-stack-horizontal", n),
    top: a,
    left: i
  }, A.map(function(k) {
    return k.bars.map(function(N) {
      return /* @__PURE__ */ r.createElement(Ot, gi({
        key: "bar-stack-" + k.index + "-" + N.index,
        x: N.x,
        y: N.y,
        height: N.height,
        width: N.width,
        fill: N.color
      }, x));
    });
  }));
}
class ml extends Map {
  constructor(t, n = lm) {
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
    return super.set(im(this, t), n);
  }
  delete(t) {
    return super.delete(om(this, t));
  }
}
function fl({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function im({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function om({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function lm(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function sm(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var a = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(i); ++a < i; )
    o[a] = e + a * n;
  return o;
}
const hl = Symbol("implicit");
function Qi() {
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
    return Qi(t, n).unknown(a);
  }, Tr.apply(i, arguments), i;
}
function Zi() {
  var e = Qi().unknown(void 0), t = e.domain, n = e.range, a = 0, i = 1, o, l, s = !1, c = 0, u = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var m = t().length, p = i < a, g = p ? i : a, E = p ? a : i;
    o = (E - g) / Math.max(1, m - c + u * 2), s && (o = Math.floor(o)), g += (E - g - o * (m - c)) * d, l = o * (1 - c), s && (g = Math.round(g), l = Math.round(l));
    var y = sm(m).map(function(f) {
      return g + o * f;
    });
    return n(p ? y.reverse() : y);
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
    return Zi(t(), [a, i]).round(s).paddingInner(c).paddingOuter(u).align(d);
  }, Tr.apply(h(), arguments);
}
function Gs(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Gs(t());
  }, e;
}
function cm() {
  return Gs(Zi.apply(null, arguments).paddingInner(1));
}
function ec(e, t) {
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
function um(e) {
  return -Math.log(-e);
}
function dm(e) {
  return -Math.exp(-e);
}
function mm(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function fm(e) {
  return e === 10 ? mm : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function hm(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function gl(e) {
  return (t, n) => -e(-t, n);
}
function pm(e) {
  const t = e(pl, yl), n = t.domain;
  let a = 10, i, o;
  function l() {
    return i = hm(a), o = fm(a), n()[0] < 0 ? (i = gl(i), o = gl(o), e(um, dm)) : e(pl, yl), t;
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
    let m = i(u), p = i(d), g, E;
    const y = s == null ? 10 : +s;
    let f = [];
    if (!(a % 1) && p - m < y) {
      if (m = Math.floor(m), p = Math.ceil(p), u > 0) {
        for (; m <= p; ++m)
          for (g = 1; g < a; ++g)
            if (E = m < 0 ? g / o(-m) : g * o(m), !(E < u)) {
              if (E > d)
                break;
              f.push(E);
            }
      } else
        for (; m <= p; ++m)
          for (g = a - 1; g >= 1; --g)
            if (E = m > 0 ? g / o(-m) : g * o(m), !(E < u)) {
              if (E > d)
                break;
              f.push(E);
            }
      f.length * 2 < y && (f = Zo(u, d, y));
    } else
      f = Zo(m, p, Math.min(p - m, y)).map(o);
    return h ? f.reverse() : f;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = a === 10 ? "s" : ","), typeof c != "function" && (!(a % 1) && (c = _u(c)).precision == null && (c.trim = !0), c = Mu(c)), s === 1 / 0)
      return c;
    const u = Math.max(1, a * s / t.ticks().length);
    return (d) => {
      let h = d / o(Math.round(i(d)));
      return h * a < a - 0.5 && (h *= a), h <= u ? c(d) : "";
    };
  }, t.nice = () => n(ec(n(), {
    floor: (s) => o(Math.floor(i(s))),
    ceil: (s) => o(Math.ceil(i(s)))
  })), t;
}
function tc() {
  const e = pm(Ou()).domain([1, 10]);
  return e.copy = () => Ps(e, tc()).base(e.base()), Tr.apply(e, arguments), e;
}
const er = Ls(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
er.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ls((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : er);
er.range;
function ym(e, t, n, a, i, o) {
  const l = [
    [Zn, 1, ka],
    [Zn, 5, 5 * ka],
    [Zn, 15, 15 * ka],
    [Zn, 30, 30 * ka],
    [o, 1, wa],
    [o, 5, 5 * wa],
    [o, 15, 15 * wa],
    [o, 30, 30 * wa],
    [i, 1, Ca],
    [i, 3, 3 * Ca],
    [i, 6, 6 * Ca],
    [i, 12, 12 * Ca],
    [a, 1, Go],
    [a, 2, 2 * Go],
    [n, 1, zu],
    [t, 1, el],
    [t, 3, 3 * el],
    [e, 1, Br]
  ];
  function s(u, d, h) {
    const m = d < u;
    m && ([u, d] = [d, u]);
    const p = h && typeof h.range == "function" ? h : c(u, d, h), g = p ? p.range(u, +d + 1) : [];
    return m ? g.reverse() : g;
  }
  function c(u, d, h) {
    const m = Math.abs(d - u) / h, p = Ns(([, , y]) => y).right(l, m);
    if (p === l.length)
      return e.every(Jo(u / Br, d / Br, h));
    if (p === 0)
      return er.every(Math.max(Jo(u, d, h), 1));
    const [g, E] = l[m / l[p - 1][2] < l[p][2] / m ? p - 1 : p];
    return g.every(E);
  }
  return [s, c];
}
const [gm, xm] = ym(Os, ws, Ms, _s, ks, Ts);
function vm(e) {
  return new Date(e);
}
function bm(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function nc(e, t, n, a, i, o, l, s, c, u) {
  var d = Du(), h = d.invert, m = d.domain, p = u(".%L"), g = u(":%S"), E = u("%I:%M"), y = u("%I %p"), f = u("%a %d"), x = u("%b %d"), b = u("%B"), v = u("%Y");
  function S(A) {
    return (c(A) < A ? p : s(A) < A ? g : l(A) < A ? E : o(A) < A ? y : a(A) < A ? i(A) < A ? f : x : n(A) < A ? b : v)(A);
  }
  return d.invert = function(A) {
    return new Date(h(A));
  }, d.domain = function(A) {
    return arguments.length ? m(Array.from(A, bm)) : m().map(vm);
  }, d.ticks = function(A) {
    var k = m();
    return e(k[0], k[k.length - 1], A ?? 10);
  }, d.tickFormat = function(A, k) {
    return k == null ? S : u(k);
  }, d.nice = function(A) {
    var k = m();
    return (!A || typeof A.range != "function") && (A = t(k[0], k[k.length - 1], A ?? 10)), A ? m(ec(k, A)) : d;
  }, d.copy = function() {
    return Ps(d, nc(e, t, n, a, i, o, l, s, c, u));
  }, d;
}
function Em() {
  return Tr.apply(nc(gm, xm, Os, ws, Ms, _s, ks, Ts, Zn, Cu).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Am = pa("domain", "range", "reverse", "align", "padding", "round");
function xl(e) {
  return Am(Zi(), e);
}
var Sm = pa("domain", "range", "reverse", "align", "padding", "round");
function Mn(e) {
  return Sm(cm(), e);
}
var Tm = pa("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function km(e) {
  return Tm(Em(), e);
}
var wm = pa("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function tr(e) {
  return wm(tc(), e);
}
var Cm = pa("domain", "range", "reverse", "unknown");
function Ji(e) {
  return Cm(Qi(), e);
}
function Pm(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Nm(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(a, i, o) {
    return t == null || o.length <= t || i % Math.round((o.length - 1) / t) === 0;
  });
}
function Lm(e) {
  return e == null ? void 0 : e.toString();
}
function ac(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function vl(e) {
  let t = e, n = e;
  e.length === 1 && (t = (l, s) => e(l) - s, n = Om(e));
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
function Om(e) {
  return (t, n) => ac(e(t), n);
}
function* _m(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (a = +a) >= a && (yield a);
  }
}
function Mm(e, t) {
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
function Dm(e, t) {
  const n = Mm(e, t);
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
function Gn(e, t) {
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
function rc(e, t, n = 0, a = e.length - 1, i = ac) {
  for (; a > n; ) {
    if (a - n > 600) {
      const c = a - n + 1, u = t - n + 1, d = Math.log(c), h = 0.5 * Math.exp(2 * d / 3), m = 0.5 * Math.sqrt(d * h * (c - h) / c) * (u - c / 2 < 0 ? -1 : 1), p = Math.max(n, Math.floor(t - u * h / c + m)), g = Math.min(a, Math.floor(t + (c - u) * h / c + m));
      rc(e, t, p, g, i);
    }
    const o = e[t];
    let l = n, s = a;
    for (qn(e, n, t), i(e[a], o) > 0 && qn(e, n, a); l < s; ) {
      for (qn(e, l, s), ++l, --s; i(e[l], o) < 0; )
        ++l;
      for (; i(e[s], o) > 0; )
        --s;
    }
    i(e[n], o) === 0 ? qn(e, n, s) : (++s, qn(e, s, a)), s <= t && (n = s + 1), t <= s && (a = s - 1);
  }
  return e;
}
function qn(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function $m(e, t, n) {
  if (e = Float64Array.from(_m(e, n)), !!(a = e.length)) {
    if ((t = +t) <= 0 || a < 2)
      return Gn(e);
    if (t >= 1)
      return Jn(e);
    var a, i = (a - 1) * t, o = Math.floor(i), l = Jn(rc(e, o).subarray(0, o + 1)), s = Gn(e.subarray(o + 1));
    return l + (s - l) * (i - o);
  }
}
function zm(e, t) {
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
function Rm(e, t) {
  return $m(e, 0.5, t);
}
var bn = [], Fm = function() {
  return bn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Bm = function() {
  return bn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, bl = "ResizeObserver loop completed with undelivered notifications.", Vm = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: bl
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = bl), window.dispatchEvent(e);
}, ua;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ua || (ua = {}));
var En = function(e) {
  return Object.freeze(e);
}, ic = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, En(this);
  }
  return e;
}(), oc = function() {
  function e(t, n, a, i) {
    return this.x = t, this.y = n, this.width = a, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, En(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, i = t.top, o = t.right, l = t.bottom, s = t.left, c = t.width, u = t.height;
    return { x: n, y: a, top: i, right: o, bottom: l, left: s, width: c, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Gi = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, lc = function(e) {
  if (Gi(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var i = e, o = i.offsetWidth, l = i.offsetHeight;
  return !(o || l || e.getClientRects().length);
}, El = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, Hm = function(e) {
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
}, ea = typeof window < "u" ? window : {}, Na = /* @__PURE__ */ new WeakMap(), Al = /auto|scroll/, Wm = /^tb|vertical/, Km = /msie|trident/i.test(ea.navigator && ea.navigator.userAgent), Wt = function(e) {
  return parseFloat(e || "0");
}, $n = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new ic((n ? t : e) || 0, (n ? e : t) || 0);
}, Sl = En({
  devicePixelContentBoxSize: $n(),
  borderBoxSize: $n(),
  contentBoxSize: $n(),
  contentRect: new oc(0, 0, 0, 0)
}), sc = function(e, t) {
  if (t === void 0 && (t = !1), Na.has(e) && !t)
    return Na.get(e);
  if (lc(e))
    return Na.set(e, Sl), Sl;
  var n = getComputedStyle(e), a = Gi(e) && e.ownerSVGElement && e.getBBox(), i = !Km && n.boxSizing === "border-box", o = Wm.test(n.writingMode || ""), l = !a && Al.test(n.overflowY || ""), s = !a && Al.test(n.overflowX || ""), c = a ? 0 : Wt(n.paddingTop), u = a ? 0 : Wt(n.paddingRight), d = a ? 0 : Wt(n.paddingBottom), h = a ? 0 : Wt(n.paddingLeft), m = a ? 0 : Wt(n.borderTopWidth), p = a ? 0 : Wt(n.borderRightWidth), g = a ? 0 : Wt(n.borderBottomWidth), E = a ? 0 : Wt(n.borderLeftWidth), y = h + u, f = c + d, x = E + p, b = m + g, v = s ? e.offsetHeight - b - e.clientHeight : 0, S = l ? e.offsetWidth - x - e.clientWidth : 0, A = i ? y + x : 0, k = i ? f + b : 0, N = a ? a.width : Wt(n.width) - A - S, C = a ? a.height : Wt(n.height) - k - v, P = N + y + S + x, D = C + f + v + b, T = En({
    devicePixelContentBoxSize: $n(Math.round(N * devicePixelRatio), Math.round(C * devicePixelRatio), o),
    borderBoxSize: $n(P, D, o),
    contentBoxSize: $n(N, C, o),
    contentRect: new oc(h, c, N, C)
  });
  return Na.set(e, T), T;
}, cc = function(e, t, n) {
  var a = sc(e, n), i = a.borderBoxSize, o = a.contentBoxSize, l = a.devicePixelContentBoxSize;
  switch (t) {
    case ua.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case ua.BORDER_BOX:
      return i;
    default:
      return o;
  }
}, uc = function() {
  function e(t) {
    var n = sc(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = En([n.borderBoxSize]), this.contentBoxSize = En([n.contentBoxSize]), this.devicePixelContentBoxSize = En([n.devicePixelContentBoxSize]);
  }
  return e;
}(), dc = function(e) {
  if (lc(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Im = function() {
  var e = 1 / 0, t = [];
  bn.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(u) {
        var d = new uc(u.target), h = dc(u.target);
        s.push(d), u.lastReportedSize = cc(u.target, u.observedBox), h < e && (e = h);
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
}, Tl = function(e) {
  bn.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
      i.isActive() && (dc(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i));
    });
  });
}, jm = function() {
  var e = 0;
  for (Tl(e); Fm(); )
    e = Im(), Tl(e);
  return Bm() && Vm(), e > 0;
}, Wr, mc = [], qm = function() {
  return mc.splice(0).forEach(function(e) {
    return e();
  });
}, Um = function(e) {
  if (!Wr) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return qm();
    }).observe(n, a), Wr = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  mc.push(e), Wr();
}, Ym = function(e) {
  Um(function() {
    requestAnimationFrame(e);
  });
}, Wa = 0, Xm = function() {
  return !!Wa;
}, Qm = 250, Zm = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, kl = [
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
], wl = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Kr = !1, Jm = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = Qm), !Kr) {
      Kr = !0;
      var a = wl(t);
      Ym(function() {
        var i = !1;
        try {
          i = jm();
        } finally {
          if (Kr = !1, t = a - wl(), !Xm())
            return;
          i ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, Zm);
    };
    document.body ? n() : ea.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), kl.forEach(function(n) {
      return ea.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), kl.forEach(function(n) {
      return ea.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), xi = new Jm(), Cl = function(e) {
  !Wa && e > 0 && xi.start(), Wa += e, !Wa && xi.stop();
}, Gm = function(e) {
  return !Gi(e) && !Hm(e) && getComputedStyle(e).display === "inline";
}, ef = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ua.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = cc(this.target, this.observedBox, !0);
    return Gm(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), tf = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), La = /* @__PURE__ */ new WeakMap(), Pl = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, Oa = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new tf(t, n);
    La.set(t, a);
  }, e.observe = function(t, n, a) {
    var i = La.get(t), o = i.observationTargets.length === 0;
    Pl(i.observationTargets, n) < 0 && (o && bn.push(i), i.observationTargets.push(new ef(n, a && a.box)), Cl(1), xi.schedule());
  }, e.unobserve = function(t, n) {
    var a = La.get(t), i = Pl(a.observationTargets, n), o = a.observationTargets.length === 1;
    i >= 0 && (o && bn.splice(bn.indexOf(a), 1), a.observationTargets.splice(i, 1), Cl(-1));
  }, e.disconnect = function(t) {
    var n = this, a = La.get(t);
    a.observationTargets.slice().forEach(function(i) {
      return n.unobserve(t, i.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), nf = function() {
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
    if (!El(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Oa.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!El(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Oa.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Oa.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: nf,
  ResizeObserverEntry: uc,
  ResizeObserverSize: ic
}, Symbol.toStringTag, { value: "Module" })), rf = /* @__PURE__ */ Vi(af);
var of = pc, Jt = hc(bs), lf = hc(Au), Pn = uf($), sf = rf, cf = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function fc(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (fc = function(i) {
    return i ? n : t;
  })(e);
}
function uf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = fc(t);
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
function hc(e) {
  return e && e.__esModule ? e : { default: e };
}
function nr() {
  return nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, nr.apply(this, arguments);
}
function df(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var mf = [];
function pc(e) {
  var t = e.className, n = e.children, a = e.debounceTime, i = a === void 0 ? 300 : a, o = e.ignoreDimensions, l = o === void 0 ? mf : o, s = e.parentSizeStyles, c = s === void 0 ? {
    width: "100%",
    height: "100%"
  } : s, u = e.enableDebounceLeadingCall, d = u === void 0 ? !0 : u, h = df(e, cf), m = (0, Pn.useRef)(null), p = (0, Pn.useRef)(0), g = (0, Pn.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), E = g[0], y = g[1], f = (0, Pn.useMemo)(function() {
    var x = Array.isArray(l) ? l : [l];
    return (0, lf.default)(function(b) {
      y(function(v) {
        var S = Object.keys(v), A = S.filter(function(N) {
          return v[N] !== b[N];
        }), k = A.every(function(N) {
          return x.includes(N);
        });
        return k ? v : b;
      });
    }, i, {
      leading: d
    });
  }, [i, d, l]);
  return (0, Pn.useEffect)(function() {
    var x = new sf.ResizeObserver(function(b) {
      b === void 0 && (b = []), b.forEach(function(v) {
        var S = v.contentRect, A = S.left, k = S.top, N = S.width, C = S.height;
        p.current = window.requestAnimationFrame(function() {
          f({
            width: N,
            height: C,
            top: k,
            left: A
          });
        });
      });
    });
    return m.current && x.observe(m.current), function() {
      window.cancelAnimationFrame(p.current), x.disconnect(), f != null && f.cancel && f.cancel();
    };
  }, [f]), /* @__PURE__ */ Pn.default.createElement("div", nr({
    style: c,
    ref: m,
    className: t
  }, h), n(nr({}, E, {
    ref: m.current,
    resize: f
  })));
}
pc.propTypes = {
  className: Jt.default.string,
  debounceTime: Jt.default.number,
  enableDebounceLeadingCall: Jt.default.bool,
  ignoreDimensions: Jt.default.oneOfType([Jt.default.any, Jt.default.arrayOf(Jt.default.any)]),
  children: Jt.default.func.isRequired
};
var Ir = /* @__PURE__ */ new Date(), jr = /* @__PURE__ */ new Date();
function Qt(e, t, n, a) {
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
    return Qt(function(l) {
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
    return Ir.setTime(+o), jr.setTime(+l), e(Ir), e(jr), Math.floor(n(Ir, jr));
  }, i.every = function(o) {
    return o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(a ? function(l) {
      return a(l) % o === 0;
    } : function(l) {
      return i.count(0, l) % o === 0;
    }) : i;
  }), i;
}
const ff = 1e3, eo = ff * 60, hf = eo * 60, to = hf * 24, yc = to * 7;
var gc = Qt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * eo) / to,
  (e) => e.getDate() - 1
);
const xc = gc;
gc.range;
function kn(e) {
  return Qt(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * eo) / yc;
  });
}
var vc = kn(0), ar = kn(1), pf = kn(2), yf = kn(3), Bn = kn(4), gf = kn(5), xf = kn(6);
vc.range;
ar.range;
pf.range;
yf.range;
Bn.range;
gf.range;
xf.range;
var no = Qt(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
no.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Qt(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const da = no;
no.range;
var bc = Qt(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / to;
}, function(e) {
  return e.getUTCDate() - 1;
});
const Ec = bc;
bc.range;
function wn(e) {
  return Qt(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / yc;
  });
}
var Ac = wn(0), rr = wn(1), vf = wn(2), bf = wn(3), Vn = wn(4), Ef = wn(5), Af = wn(6);
Ac.range;
rr.range;
vf.range;
bf.range;
Vn.range;
Ef.range;
Af.range;
var ao = Qt(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
ao.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Qt(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const ma = ao;
ao.range;
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
function Un(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Sf(e) {
  var t = e.dateTime, n = e.date, a = e.time, i = e.periods, o = e.days, l = e.shortDays, s = e.months, c = e.shortMonths, u = Yn(i), d = Xn(i), h = Yn(o), m = Xn(o), p = Yn(l), g = Xn(l), E = Yn(s), y = Xn(s), f = Yn(c), x = Xn(c), b = {
    a: L,
    A: q,
    b: j,
    B: Y,
    c: null,
    d: Dl,
    e: Dl,
    f: qf,
    g: nh,
    G: rh,
    H: Kf,
    I: If,
    j: jf,
    L: Sc,
    m: Uf,
    M: Yf,
    p: H,
    q: U,
    Q: Rl,
    s: Fl,
    S: Xf,
    u: Qf,
    U: Zf,
    V: Jf,
    w: Gf,
    W: eh,
    x: null,
    X: null,
    y: th,
    Y: ah,
    Z: ih,
    "%": zl
  }, v = {
    a: I,
    A: Q,
    b: ne,
    B: he,
    c: null,
    d: $l,
    e: $l,
    f: ch,
    g: vh,
    G: Eh,
    H: oh,
    I: lh,
    j: sh,
    L: kc,
    m: uh,
    M: dh,
    p: Pe,
    q: ke,
    Q: Rl,
    s: Fl,
    S: mh,
    u: fh,
    U: hh,
    V: ph,
    w: yh,
    W: gh,
    x: null,
    X: null,
    y: xh,
    Y: bh,
    Z: Ah,
    "%": zl
  }, S = {
    a: P,
    A: D,
    b: T,
    B: z,
    c: V,
    d: _l,
    e: _l,
    f: Bf,
    g: Ol,
    G: Ll,
    H: Ml,
    I: Ml,
    j: $f,
    L: Ff,
    m: Df,
    M: zf,
    p: C,
    q: Mf,
    Q: Hf,
    s: Wf,
    S: Rf,
    u: Pf,
    U: Nf,
    V: Lf,
    w: Cf,
    W: Of,
    x: W,
    X: F,
    y: Ol,
    Y: Ll,
    Z: _f,
    "%": Vf
  };
  b.x = A(n, b), b.X = A(a, b), b.c = A(t, b), v.x = A(n, v), v.X = A(a, v), v.c = A(t, v);
  function A(X, K) {
    return function(re) {
      var _ = [], ue = -1, le = 0, ge = X.length, ve, xe, Ne;
      for (re instanceof Date || (re = /* @__PURE__ */ new Date(+re)); ++ue < ge; )
        X.charCodeAt(ue) === 37 && (_.push(X.slice(le, ue)), (xe = Nl[ve = X.charAt(++ue)]) != null ? ve = X.charAt(++ue) : xe = ve === "e" ? " " : "0", (Ne = K[ve]) && (ve = Ne(re, xe)), _.push(ve), le = ue + 1);
      return _.push(X.slice(le, ue)), _.join("");
    };
  }
  function k(X, K) {
    return function(re) {
      var _ = Un(1900, void 0, 1), ue = N(_, X, re += "", 0), le, ge;
      if (ue != re.length)
        return null;
      if ("Q" in _)
        return new Date(_.Q);
      if ("s" in _)
        return new Date(_.s * 1e3 + ("L" in _ ? _.L : 0));
      if (K && !("Z" in _) && (_.Z = 0), "p" in _ && (_.H = _.H % 12 + _.p * 12), _.m === void 0 && (_.m = "q" in _ ? _.q : 0), "V" in _) {
        if (_.V < 1 || _.V > 53)
          return null;
        "w" in _ || (_.w = 1), "Z" in _ ? (le = Ur(Un(_.y, 0, 1)), ge = le.getUTCDay(), le = ge > 4 || ge === 0 ? rr.ceil(le) : rr(le), le = Ec.offset(le, (_.V - 1) * 7), _.y = le.getUTCFullYear(), _.m = le.getUTCMonth(), _.d = le.getUTCDate() + (_.w + 6) % 7) : (le = qr(Un(_.y, 0, 1)), ge = le.getDay(), le = ge > 4 || ge === 0 ? ar.ceil(le) : ar(le), le = xc.offset(le, (_.V - 1) * 7), _.y = le.getFullYear(), _.m = le.getMonth(), _.d = le.getDate() + (_.w + 6) % 7);
      } else
        ("W" in _ || "U" in _) && ("w" in _ || (_.w = "u" in _ ? _.u % 7 : "W" in _ ? 1 : 0), ge = "Z" in _ ? Ur(Un(_.y, 0, 1)).getUTCDay() : qr(Un(_.y, 0, 1)).getDay(), _.m = 0, _.d = "W" in _ ? (_.w + 6) % 7 + _.W * 7 - (ge + 5) % 7 : _.w + _.U * 7 - (ge + 6) % 7);
      return "Z" in _ ? (_.H += _.Z / 100 | 0, _.M += _.Z % 100, Ur(_)) : qr(_);
    };
  }
  function N(X, K, re, _) {
    for (var ue = 0, le = K.length, ge = re.length, ve, xe; ue < le; ) {
      if (_ >= ge)
        return -1;
      if (ve = K.charCodeAt(ue++), ve === 37) {
        if (ve = K.charAt(ue++), xe = S[ve in Nl ? K.charAt(ue++) : ve], !xe || (_ = xe(X, re, _)) < 0)
          return -1;
      } else if (ve != re.charCodeAt(_++))
        return -1;
    }
    return _;
  }
  function C(X, K, re) {
    var _ = u.exec(K.slice(re));
    return _ ? (X.p = d.get(_[0].toLowerCase()), re + _[0].length) : -1;
  }
  function P(X, K, re) {
    var _ = p.exec(K.slice(re));
    return _ ? (X.w = g.get(_[0].toLowerCase()), re + _[0].length) : -1;
  }
  function D(X, K, re) {
    var _ = h.exec(K.slice(re));
    return _ ? (X.w = m.get(_[0].toLowerCase()), re + _[0].length) : -1;
  }
  function T(X, K, re) {
    var _ = f.exec(K.slice(re));
    return _ ? (X.m = x.get(_[0].toLowerCase()), re + _[0].length) : -1;
  }
  function z(X, K, re) {
    var _ = E.exec(K.slice(re));
    return _ ? (X.m = y.get(_[0].toLowerCase()), re + _[0].length) : -1;
  }
  function V(X, K, re) {
    return N(X, t, K, re);
  }
  function W(X, K, re) {
    return N(X, n, K, re);
  }
  function F(X, K, re) {
    return N(X, a, K, re);
  }
  function L(X) {
    return l[X.getDay()];
  }
  function q(X) {
    return o[X.getDay()];
  }
  function j(X) {
    return c[X.getMonth()];
  }
  function Y(X) {
    return s[X.getMonth()];
  }
  function H(X) {
    return i[+(X.getHours() >= 12)];
  }
  function U(X) {
    return 1 + ~~(X.getMonth() / 3);
  }
  function I(X) {
    return l[X.getUTCDay()];
  }
  function Q(X) {
    return o[X.getUTCDay()];
  }
  function ne(X) {
    return c[X.getUTCMonth()];
  }
  function he(X) {
    return s[X.getUTCMonth()];
  }
  function Pe(X) {
    return i[+(X.getUTCHours() >= 12)];
  }
  function ke(X) {
    return 1 + ~~(X.getUTCMonth() / 3);
  }
  return {
    format: function(X) {
      var K = A(X += "", b);
      return K.toString = function() {
        return X;
      }, K;
    },
    parse: function(X) {
      var K = k(X += "", !1);
      return K.toString = function() {
        return X;
      }, K;
    },
    utcFormat: function(X) {
      var K = A(X += "", v);
      return K.toString = function() {
        return X;
      }, K;
    },
    utcParse: function(X) {
      var K = k(X += "", !0);
      return K.toString = function() {
        return X;
      }, K;
    }
  };
}
var Nl = { "-": "", _: " ", 0: "0" }, ut = /^\s*\d+/, Tf = /^%/, kf = /[\\^$*+?|[\]().{}]/g;
function Ke(e, t, n) {
  var a = e < 0 ? "-" : "", i = (a ? -e : e) + "", o = i.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + i : i);
}
function wf(e) {
  return e.replace(kf, "\\$&");
}
function Yn(e) {
  return new RegExp("^(?:" + e.map(wf).join("|") + ")", "i");
}
function Xn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Cf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Pf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Nf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Lf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Of(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Ll(e, t, n) {
  var a = ut.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Ol(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function _f(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Mf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Df(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function _l(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function $f(e, t, n) {
  var a = ut.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Ml(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function zf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Rf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Ff(e, t, n) {
  var a = ut.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Bf(e, t, n) {
  var a = ut.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Vf(e, t, n) {
  var a = Tf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Hf(e, t, n) {
  var a = ut.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Wf(e, t, n) {
  var a = ut.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Dl(e, t) {
  return Ke(e.getDate(), t, 2);
}
function Kf(e, t) {
  return Ke(e.getHours(), t, 2);
}
function If(e, t) {
  return Ke(e.getHours() % 12 || 12, t, 2);
}
function jf(e, t) {
  return Ke(1 + xc.count(da(e), e), t, 3);
}
function Sc(e, t) {
  return Ke(e.getMilliseconds(), t, 3);
}
function qf(e, t) {
  return Sc(e, t) + "000";
}
function Uf(e, t) {
  return Ke(e.getMonth() + 1, t, 2);
}
function Yf(e, t) {
  return Ke(e.getMinutes(), t, 2);
}
function Xf(e, t) {
  return Ke(e.getSeconds(), t, 2);
}
function Qf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Zf(e, t) {
  return Ke(vc.count(da(e) - 1, e), t, 2);
}
function Tc(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Bn(e) : Bn.ceil(e);
}
function Jf(e, t) {
  return e = Tc(e), Ke(Bn.count(da(e), e) + (da(e).getDay() === 4), t, 2);
}
function Gf(e) {
  return e.getDay();
}
function eh(e, t) {
  return Ke(ar.count(da(e) - 1, e), t, 2);
}
function th(e, t) {
  return Ke(e.getFullYear() % 100, t, 2);
}
function nh(e, t) {
  return e = Tc(e), Ke(e.getFullYear() % 100, t, 2);
}
function ah(e, t) {
  return Ke(e.getFullYear() % 1e4, t, 4);
}
function rh(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Bn(e) : Bn.ceil(e), Ke(e.getFullYear() % 1e4, t, 4);
}
function ih(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ke(t / 60 | 0, "0", 2) + Ke(t % 60, "0", 2);
}
function $l(e, t) {
  return Ke(e.getUTCDate(), t, 2);
}
function oh(e, t) {
  return Ke(e.getUTCHours(), t, 2);
}
function lh(e, t) {
  return Ke(e.getUTCHours() % 12 || 12, t, 2);
}
function sh(e, t) {
  return Ke(1 + Ec.count(ma(e), e), t, 3);
}
function kc(e, t) {
  return Ke(e.getUTCMilliseconds(), t, 3);
}
function ch(e, t) {
  return kc(e, t) + "000";
}
function uh(e, t) {
  return Ke(e.getUTCMonth() + 1, t, 2);
}
function dh(e, t) {
  return Ke(e.getUTCMinutes(), t, 2);
}
function mh(e, t) {
  return Ke(e.getUTCSeconds(), t, 2);
}
function fh(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function hh(e, t) {
  return Ke(Ac.count(ma(e) - 1, e), t, 2);
}
function wc(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Vn(e) : Vn.ceil(e);
}
function ph(e, t) {
  return e = wc(e), Ke(Vn.count(ma(e), e) + (ma(e).getUTCDay() === 4), t, 2);
}
function yh(e) {
  return e.getUTCDay();
}
function gh(e, t) {
  return Ke(rr.count(ma(e) - 1, e), t, 2);
}
function xh(e, t) {
  return Ke(e.getUTCFullYear() % 100, t, 2);
}
function vh(e, t) {
  return e = wc(e), Ke(e.getUTCFullYear() % 100, t, 2);
}
function bh(e, t) {
  return Ke(e.getUTCFullYear() % 1e4, t, 4);
}
function Eh(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Vn(e) : Vn.ceil(e), Ke(e.getUTCFullYear() % 1e4, t, 4);
}
function Ah() {
  return "+0000";
}
function zl() {
  return "%";
}
function Rl(e) {
  return +e;
}
function Fl(e) {
  return Math.floor(+e / 1e3);
}
var Nn, Cc, Pc;
Sh({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Sh(e) {
  return Nn = Sf(e), Cc = Nn.format, Pc = Nn.parse, Nn.utcFormat, Nn.utcParse, Nn;
}
const De = $.createContext({}), Fe = {
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
function Th(e, t) {
  return t === void 0 && (t = !0), (n) => (Fe.arr(n) ? n : Object.keys(n)).reduce((a, i) => {
    const o = t ? i[0].toLowerCase() + i.substring(1) : i;
    return a[o] = e(o), a;
  }, e);
}
function Nc() {
  const e = $.useState(!1), t = e[1];
  return $.useCallback(() => t((a) => !a), []);
}
function dn(e, t) {
  return Fe.und(e) || Fe.nul(e) ? t : e;
}
function Dn(e) {
  return Fe.und(e) ? [] : Fe.arr(e) ? e : [e];
}
function $t(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return Fe.fun(e) ? e(...n) : e;
}
function kh(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, jt(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Yr(e) {
  const t = kh(e);
  if (Fe.und(t))
    return Ue({
      to: t
    }, e);
  const n = Object.keys(e).reduce((a, i) => Fe.und(t[i]) ? Ue({}, a, {
    [i]: e[i]
  }) : a, {});
  return Ue({
    to: t
  }, n);
}
function wh(e, t) {
  return t && (Fe.fun(t) ? t(e) : Fe.obj(t) && (t.current = e)), e;
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
class vi extends zt {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof zt && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof zt && t.removeChild(this));
  }
}
class Lc extends zt {
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
let ro;
function Ch(e, t) {
  ro = {
    fn: e,
    transform: t
  };
}
let Oc;
function Ph(e) {
  Oc = e;
}
let _c = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, ir;
function Nh(e) {
  ir = e;
}
let Mc = () => Date.now(), Lh = (e) => e.current, Dc;
function Oh(e) {
  Dc = e;
}
class _h extends Lc {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? Ue({}, t, {
      style: Dc(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const Mh = (e) => Fe.fun(e) && !(e.prototype instanceof r.Component), Dh = (e) => $.forwardRef((n, a) => {
  const i = Nc(), o = $.useRef(!0), l = $.useRef(null), s = $.useRef(null), c = $.useCallback((m) => {
    const p = l.current, g = () => {
      let E = !1;
      s.current && (E = ro.fn(s.current, l.current.getAnimatedValue())), (!s.current || E === !1) && i();
    };
    l.current = new _h(m, g), p && p.detach();
  }, []);
  $.useEffect(() => () => {
    o.current = !1, l.current && l.current.detach();
  }, []), $.useImperativeHandle(a, () => Lh(s)), c(n);
  const u = l.current.getValue();
  u.scrollTop, u.scrollLeft;
  const d = jt(u, ["scrollTop", "scrollLeft"]), h = Mh(e) ? void 0 : (m) => s.current = wh(m, a);
  return r.createElement(e, Ue({}, d, {
    ref: h
  }));
});
let ta = !1;
const An = /* @__PURE__ */ new Set(), $c = () => {
  if (!ta)
    return !1;
  let e = Mc();
  for (let t of An) {
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
          let g = Math.floor(e - l);
          for (let x = 0; x < g; ++x) {
            let b = -i.tension * (h - d), v = -i.friction * p, S = (b + v) / i.mass;
            p = p + S * 1 / 1e3, h = h + p * 1 / 1e3;
          }
          let E = i.clamp && i.tension !== 0 ? u < d ? h > d : h < d : !1, y = Math.abs(p) <= i.precision, f = i.tension !== 0 ? Math.abs(d - h) <= i.precision : !0;
          o = E || y && f, c.lastVelocity = p, c.lastTime = e;
        }
        m && !i.toValues[s].done && (o = !1), o ? (c.value !== d && (h = d), c.done = !0) : n = !0, c.setValue(h), c.lastPosition = h;
      }
      t.props.onFrame && (t.values[i.name] = i.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (An.delete(t), t.stop(!0));
  }
  return An.size ? _c($c) : ta = !1, ta;
}, $h = (e) => {
  An.has(e) || An.add(e), ta || (ta = !0, _c($c));
}, zh = (e) => {
  An.has(e) && An.delete(e);
};
function or(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return or({
      range: e,
      output: t,
      extrapolate: n
    });
  if (ir && typeof e.output[0] == "string")
    return ir(e);
  const a = e, i = a.output, o = a.range || [0, 1], l = a.extrapolateLeft || a.extrapolate || "extend", s = a.extrapolateRight || a.extrapolate || "extend", c = a.easing || ((u) => u);
  return (u) => {
    const d = Fh(u, o);
    return Rh(u, o[d], o[d + 1], i[d], i[d + 1], c, l, s, a.map);
  };
}
function Rh(e, t, n, a, i, o, l, s, c) {
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
function Fh(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class Hn extends vi {
  constructor(t, n, a, i) {
    super(), this.calc = void 0, this.payload = t instanceof vi && !(t instanceof Hn) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = or(n, a, i);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, a) {
    this.calc = or(t, n, a);
  }
  interpolate(t, n, a) {
    return new Hn(this, t, n, a);
  }
}
const Bh = (e, t, n) => e && new Hn(e, t, n);
function zc(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => zc(n, t));
}
class bi extends zt {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(a, i) {
      i === void 0 && (i = !0), n.value = a, i && n.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && zc(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
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
class Vh extends vi {
  constructor(t) {
    super(), this.payload = t.map((n) => new bi(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((a, i) => this.payload[i].setValue(a, n)) : this.payload.forEach((a) => a.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new Hn(this, t, n);
  }
}
let Hh = 0;
class Wh {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Hh++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = Yr(t), a = n.delay, i = a === void 0 ? 0 : a, o = n.to, l = jt(n, ["delay", "to"]);
    if (Fe.arr(o) || Fe.fun(o))
      this.queue.push(Ue({}, l, {
        delay: i,
        to: o
      }));
    else if (o) {
      let s = {};
      Object.entries(o).forEach((c) => {
        let u = c[0], d = c[1];
        const h = Ue({
          to: {
            [u]: d
          },
          delay: $t(i, u)
        }, l), m = s[h.delay] && s[h.delay].to;
        s[h.delay] = Ue({}, s[h.delay], h, {
          to: Ue({}, m, h.to)
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
        Fe.obj(l) && (this.merged = Ue({}, l, this.merged)), Fe.obj(c) && (this.merged = Ue({}, this.merged, c));
      });
      const n = this.local = ++this.guid, a = this.localQueue = this.queue;
      this.queue = [], a.forEach((i, o) => {
        let l = i.delay, s = jt(i, ["delay"]);
        const c = (d) => {
          o === a.length - 1 && n === this.guid && d && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let u = Fe.arr(s.to) || Fe.fun(s.to);
        l ? setTimeout(() => {
          n === this.guid && (u ? this.runAsync(s, c) : this.diff(s).start(c));
        }, l) : u ? this.runAsync(s, c) : this.diff(s).start(c);
      });
    } else
      Fe.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), $h(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && zh(this), this;
  }
  runAsync(t, n) {
    var a = this;
    t.delay;
    let i = jt(t, ["delay"]);
    const o = this.local;
    let l = Promise.resolve(void 0);
    if (Fe.arr(i.to))
      for (let s = 0; s < i.to.length; s++) {
        const c = s, u = Ue({}, i, Yr(i.to[c]));
        Fe.arr(u.config) && (u.config = u.config[c]), l = l.then(() => {
          if (o === this.guid)
            return new Promise((d) => this.diff(u).start(d));
        });
      }
    else if (Fe.fun(i.to)) {
      let s = 0, c;
      l = l.then(() => i.to(
        // next(props)
        (u) => {
          const d = Ue({}, i, Yr(u));
          if (Fe.arr(d.config) && (d.config = d.config[s]), s++, o === this.guid)
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
    this.props = Ue({}, this.props, t);
    let n = this.props, a = n.from, i = a === void 0 ? {} : a, o = n.to, l = o === void 0 ? {} : o, s = n.config, c = s === void 0 ? {} : s, u = n.reverse, d = n.attach, h = n.reset, m = n.immediate;
    if (u) {
      var p = [l, i];
      i = p[0], l = p[1];
    }
    this.merged = Ue({}, i, this.merged, l), this.hasChanged = !1;
    let g = d && d(this);
    if (this.animations = Object.entries(this.merged).reduce((E, y) => {
      let f = y[0], x = y[1], b = E[f] || {};
      const v = Fe.num(x), S = Fe.str(x) && !x.startsWith("#") && !/\d/.test(x) && !Oc[x], A = Fe.arr(x), k = !v && !A && !S;
      let N = Fe.und(i[f]) ? x : i[f], C = v || A || S ? x : 1, P = $t(c, f);
      g && (C = g.animations[f].parent);
      let D = b.parent, T = b.interpolation, z = Dn(g ? C.getPayload() : C), V, W = x;
      k && (W = ir({
        range: [0, 1],
        output: [x, x]
      })(1));
      let F = T && T.getValue();
      const q = !Fe.und(D) && b.animatedValues.some((U) => !U.done), j = !Fe.equ(W, F), Y = !Fe.equ(W, b.previous), H = !Fe.equ(P, b.config);
      if (h || Y && j || H) {
        if (v || S)
          D = T = b.parent || new bi(N);
        else if (A)
          D = T = b.parent || new Vh(N);
        else if (k) {
          let U = b.interpolation && b.interpolation.calc(b.parent.value);
          U = U !== void 0 && !h ? U : N, b.parent ? (D = b.parent, D.setValue(0, !1)) : D = new bi(0);
          const I = {
            output: [U, x]
          };
          b.interpolation ? (T = b.interpolation, b.interpolation.updateConfig(I)) : T = D.interpolate(I);
        }
        return z = Dn(g ? C.getPayload() : C), V = Dn(D.getPayload()), h && !k && D.setValue(N, !1), this.hasChanged = !0, V.forEach((U) => {
          U.startPosition = U.value, U.lastPosition = U.value, U.lastVelocity = q ? U.lastVelocity : void 0, U.lastTime = q ? U.lastTime : void 0, U.startTime = Mc(), U.done = !1, U.animatedStyles.clear();
        }), $t(m, f) && D.setValue(k ? C : x, !1), Ue({}, E, {
          [f]: Ue({}, b, {
            name: f,
            parent: D,
            interpolation: T,
            animatedValues: V,
            toValues: z,
            previous: W,
            config: P,
            fromValues: Dn(D.getValue()),
            immediate: $t(m, f),
            initialVelocity: dn(P.velocity, 0),
            clamp: dn(P.clamp, !1),
            precision: dn(P.precision, 0.01),
            tension: dn(P.tension, 170),
            friction: dn(P.friction, 26),
            mass: dn(P.mass, 1),
            duration: P.duration,
            easing: dn(P.easing, (U) => U),
            decay: P.decay
          })
        });
      } else
        return j ? E : (k && (D.setValue(1, !1), T.updateConfig({
          output: [W, W]
        })), D.done = !0, this.hasChanged = !0, Ue({}, E, {
          [f]: Ue({}, E[f], {
            previous: W
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
let Kh = 0;
const Ka = "enter", Xr = "leave", Qr = "update", Ih = (e, t) => (typeof t == "function" ? e.map(t) : Dn(t)).map(String), Ei = (e) => {
  let t = e.items, n = e.keys, a = n === void 0 ? (o) => o : n, i = jt(e, ["items", "keys"]);
  return t = Dn(t !== void 0 ? t : null), Ue({
    items: t,
    keys: Ih(t, a)
  }, i);
};
function jh(e, t, n) {
  const a = Ue({
    items: e,
    keys: t || ((x) => x)
  }, n), i = Ei(a), o = i.lazy, l = o === void 0 ? !1 : o;
  i.unique;
  const s = i.reset, c = s === void 0 ? !1 : s;
  i.enter, i.leave, i.update;
  const u = i.onDestroyed;
  i.keys, i.items;
  const d = i.onFrame, h = i.onRest, m = i.onStart, p = i.ref, g = jt(i, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), E = Nc(), y = $.useRef(!1), f = $.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!a.ref,
    instances: !y.current && /* @__PURE__ */ new Map(),
    forceUpdate: E
  });
  return $.useImperativeHandle(a.ref, () => ({
    start: () => Promise.all(Array.from(f.current.instances).map((x) => {
      let b = x[1];
      return new Promise((v) => b.start(v));
    })),
    stop: (x) => Array.from(f.current.instances).forEach((b) => b[1].stop(x)),
    get controllers() {
      return Array.from(f.current.instances).map((x) => x[1]);
    }
  })), f.current = qh(f.current, a), f.current.changed && f.current.transitions.forEach((x) => {
    const b = x.slot, v = x.from, S = x.to, A = x.config, k = x.trail, N = x.key, C = x.item;
    f.current.instances.has(N) || f.current.instances.set(N, new Wh());
    const P = f.current.instances.get(N), D = Ue({}, g, {
      to: S,
      from: v,
      config: A,
      ref: p,
      onRest: (T) => {
        f.current.mounted && (x.destroyed && (!p && !l && Bl(f, N), u && u(C)), !Array.from(f.current.instances).some((W) => !W[1].idle) && (p || l) && f.current.deleted.length > 0 && Bl(f), h && h(C, b, T));
      },
      onStart: m && (() => m(C, b)),
      onFrame: d && ((T) => d(C, b, T)),
      delay: k,
      reset: c && b === Ka
      // Update controller
    });
    P.update(D), f.current.paused || P.start();
  }), $.useEffect(() => (f.current.mounted = y.current = !0, () => {
    f.current.mounted = y.current = !1, Array.from(f.current.instances).map((x) => x[1].destroy()), f.current.instances.clear();
  }), []), f.current.transitions.map((x) => {
    let b = x.item, v = x.slot, S = x.key;
    return {
      item: b,
      key: S,
      state: v,
      props: f.current.instances.get(S).getValues()
    };
  });
}
function Bl(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let i = a.key;
    const o = (l) => l.key !== i;
    (Fe.und(t) || t === i) && (e.current.instances.delete(i), e.current.transitions = e.current.transitions.filter(o), e.current.deleted = e.current.deleted.filter(o));
  }
  e.current.forceUpdate();
}
function qh(e, t) {
  let n = e.first, a = e.prevProps, i = jt(e, ["first", "prevProps"]), o = Ei(t), l = o.items, s = o.keys, c = o.initial, u = o.from, d = o.enter, h = o.leave, m = o.update, p = o.trail, g = p === void 0 ? 0 : p, E = o.unique, y = o.config, f = o.order, x = f === void 0 ? [Ka, Xr, Qr] : f, b = Ei(a), v = b.keys, S = b.items, A = Ue({}, i.current), k = [...i.deleted], N = Object.keys(A), C = new Set(N), P = new Set(s), D = s.filter((F) => !C.has(F)), T = i.transitions.filter((F) => !F.destroyed && !P.has(F.originalKey)).map((F) => F.originalKey), z = s.filter((F) => C.has(F)), V = -g;
  for (; x.length; )
    switch (x.shift()) {
      case Ka: {
        D.forEach((L, q) => {
          E && k.find((U) => U.originalKey === L) && (k = k.filter((U) => U.originalKey !== L));
          const j = s.indexOf(L), Y = l[j], H = n && c !== void 0 ? "initial" : Ka;
          A[L] = {
            slot: H,
            originalKey: L,
            key: E ? String(L) : Kh++,
            item: Y,
            trail: V = V + g,
            config: $t(y, Y, H),
            from: $t(n && c !== void 0 ? c || {} : u, Y),
            to: $t(d, Y)
          };
        });
        break;
      }
      case Xr: {
        T.forEach((L) => {
          const q = v.indexOf(L), j = S[q], Y = Xr;
          k.unshift(Ue({}, A[L], {
            slot: Y,
            destroyed: !0,
            left: v[Math.max(0, q - 1)],
            right: v[Math.min(v.length, q + 1)],
            trail: V = V + g,
            config: $t(y, j, Y),
            to: $t(h, j)
          })), delete A[L];
        });
        break;
      }
      case Qr: {
        z.forEach((L) => {
          const q = s.indexOf(L), j = l[q], Y = Qr;
          A[L] = Ue({}, A[L], {
            item: j,
            slot: Y,
            trail: V = V + g,
            config: $t(y, j, Y),
            to: $t(m, j)
          });
        });
        break;
      }
    }
  let W = s.map((F) => A[F]);
  return k.forEach((F) => {
    let L = F.left;
    F.right;
    let q = jt(F, ["left", "right"]), j;
    (j = W.findIndex((Y) => Y.originalKey === L)) !== -1 && (j += 1), j = Math.max(0, j), W = [...W.slice(0, j), q, ...W.slice(j)];
  }), Ue({}, i, {
    changed: D.length || T.length || z.length,
    first: n && D.length === 0,
    transitions: W,
    current: A,
    deleted: k,
    prevProps: t
  });
}
class Uh extends Lc {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof zt) && (t = ro.transform(t)), this.payload = t;
  }
}
const lr = {
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
}, Rt = "[-+]?\\d*\\.?\\d+", sr = Rt + "%";
function Nr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Yh = new RegExp("rgb" + Nr(Rt, Rt, Rt)), Xh = new RegExp("rgba" + Nr(Rt, Rt, Rt, Rt)), Qh = new RegExp("hsl" + Nr(Rt, sr, sr)), Zh = new RegExp("hsla" + Nr(Rt, sr, sr, Rt)), Jh = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Gh = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, ep = /^#([0-9a-fA-F]{6})$/, tp = /^#([0-9a-fA-F]{8})$/;
function np(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ep.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : lr.hasOwnProperty(e) ? lr[e] : (t = Yh.exec(e)) ? (Ln(t[1]) << 24 | // r
  Ln(t[2]) << 16 | // g
  Ln(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Xh.exec(e)) ? (Ln(t[1]) << 24 | // r
  Ln(t[2]) << 16 | // g
  Ln(t[3]) << 8 | // b
  Wl(t[4])) >>> // a
  0 : (t = Jh.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = tp.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Gh.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Qh.exec(e)) ? (Vl(
    Hl(t[1]),
    // h
    _a(t[2]),
    // s
    _a(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Zh.exec(e)) ? (Vl(
    Hl(t[1]),
    // h
    _a(t[2]),
    // s
    _a(t[3])
    // l
  ) | Wl(t[4])) >>> // a
  0 : null;
}
function Zr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Vl(e, t, n) {
  const a = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a, o = Zr(i, a, e + 1 / 3), l = Zr(i, a, e), s = Zr(i, a, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function Ln(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Hl(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Wl(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function _a(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Kl(e) {
  let t = np(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${n}, ${a}, ${i}, ${o})`;
}
const Ma = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ap = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, rp = new RegExp(`(${Object.keys(lr).join("|")})`, "g"), ip = (e) => {
  const t = e.output.map((i) => i.replace(ap, Kl)).map((i) => i.replace(rp, Kl)), n = t[0].match(Ma).map(() => []);
  t.forEach((i) => {
    i.match(Ma).forEach((o, l) => n[l].push(+o));
  });
  const a = t[0].match(Ma).map((i, o) => or(Ue({}, e, {
    output: n[o]
  })));
  return (i) => {
    let o = 0;
    return t[0].replace(Ma, () => a[o++](i)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (l, s, c, u, d) => `rgba(${Math.round(s)}, ${Math.round(c)}, ${Math.round(u)}, ${d})`);
  };
};
let na = {
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
const op = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), lp = ["Webkit", "Ms", "Moz", "O"];
na = Object.keys(na).reduce((e, t) => (lp.forEach((n) => e[op(n, t)] = e[t]), e), na);
function sp(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(na.hasOwnProperty(e) && na[e]) ? t + "px" : ("" + t).trim();
}
const Il = {};
Oh((e) => new Uh(e));
Nh(ip);
Ph(lr);
Ch((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const i = t.style, o = t.children, l = t.scrollTop, s = t.scrollLeft, c = jt(t, ["style", "children", "scrollTop", "scrollLeft"]), u = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    l !== void 0 && (e.scrollTop = l), s !== void 0 && (e.scrollLeft = s), o !== void 0 && (e.textContent = o);
    for (let d in i)
      if (i.hasOwnProperty(d)) {
        var n = d.indexOf("--") === 0, a = sp(d, i[d], n);
        d === "float" && (d = "cssFloat"), n ? e.style.setProperty(d, a) : e.style[d] = a;
      }
    for (let d in c) {
      const h = u ? d : Il[d] || (Il[d] = d.replace(/([A-Z])/g, (m) => "-" + m.toLowerCase()));
      typeof e.getAttribute(h) < "u" && e.setAttribute(h, c[d]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const cp = [
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
], up = Th(Dh, !1), jl = up(cp);
var dp = ["tooltipOpen"];
function mp(e, t) {
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
function Rc(e) {
  var t = $.useState(cr({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], i = $.useCallback(function(l) {
    return a(typeof l == "function" ? function(s) {
      s.tooltipOpen;
      var c = mp(s, dp);
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
var fp = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
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
function hp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Fc = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, io = /* @__PURE__ */ r.forwardRef(function(e, t) {
  var n = e.className, a = e.top, i = e.left, o = e.offsetLeft, l = o === void 0 ? 10 : o, s = e.offsetTop, c = s === void 0 ? 10 : s, u = e.style, d = u === void 0 ? Fc : u, h = e.children, m = e.unstyled, p = m === void 0 ? !1 : m, g = e.applyPositionStyle, E = g === void 0 ? !1 : g, y = hp(e, fp);
  return /* @__PURE__ */ r.createElement("div", ur({
    ref: t,
    className: tt("visx-tooltip", n),
    style: ur({
      top: a == null || c == null ? a : a + c,
      left: i == null || l == null ? i : i + l
    }, E && {
      position: "absolute"
    }, !p && d)
  }, y), h);
});
io.propTypes = {
  children: R.node,
  className: R.string,
  left: R.number,
  offsetLeft: R.number,
  offsetTop: R.number,
  top: R.number,
  applyPositionStyle: R.bool,
  unstyled: R.bool
};
io.displayName = "Tooltip";
const pp = io;
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
function yp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Si(e, t);
}
function Si(e, t) {
  return Si = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Si(e, t);
}
var ql = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function xp(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    gp(a, n);
    function a(o) {
      var l;
      return l = n.call(this, o) || this, l.state = {
        rect: void 0,
        parentRect: void 0
      }, l.nodeRef = /* @__PURE__ */ r.createRef(), l.getRects = l.getRects.bind(yp(l)), l;
    }
    var i = a.prototype;
    return i.componentDidMount = function() {
      var l, s = this;
      this.node = (l = this.nodeRef) != null && l.current ? this.nodeRef.current : $u.findDOMNode(this), this.setState(function() {
        return s.getRects();
      });
    }, i.getRects = function() {
      if (!this.node)
        return this.state;
      var l = this.node, s = l.parentNode, c = l.getBoundingClientRect ? l.getBoundingClientRect() : ql, u = s != null && s.getBoundingClientRect ? s.getBoundingClientRect() : ql;
      return {
        rect: c,
        parentRect: u
      };
    }, i.render = function() {
      return /* @__PURE__ */ r.createElement(e, Ai({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, a;
  }(r.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var Bc = /* @__PURE__ */ $.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), vp = Bc.Provider;
Bc.Consumer;
var bp = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
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
function Ep(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Vc(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, a = n === void 0 ? 0 : n, i = e.offsetLeft, o = i === void 0 ? 10 : i, l = e.offsetTop, s = l === void 0 ? 10 : l, c = e.parentRect, u = e.rect, d = e.style, h = d === void 0 ? Fc : d, m = e.top, p = m === void 0 ? 0 : m, g = e.unstyled, E = g === void 0 ? !1 : g, y = e.nodeRef, f = Ep(e, bp), x, b = !1, v = !1;
  if (u && c) {
    var S = a, A = p;
    if (c.width) {
      var k = S + o + u.width - c.width, N = u.width - S - o;
      b = k > 0 && k > N;
    } else {
      var C = S + o + u.width - window.innerWidth, P = u.width - S - o;
      b = C > 0 && C > P;
    }
    if (c.height) {
      var D = A + s + u.height - c.height, T = u.height - A - s;
      v = D > 0 && D > T;
    } else
      v = A + s + u.height > window.innerHeight;
    S = b ? S - u.width - o : S + o, A = v ? A - u.height - s : A + s, S = Math.round(S), A = Math.round(A), x = "translate(" + S + "px, " + A + "px)";
  }
  return /* @__PURE__ */ r.createElement(pp, dr({
    ref: y,
    style: dr({
      left: 0,
      top: 0,
      transform: x
    }, !E && h)
  }, f), /* @__PURE__ */ r.createElement(vp, {
    value: {
      isFlippedVertically: !v,
      isFlippedHorizontally: !b
    }
  }, t));
}
Vc.propTypes = {
  nodeRef: R.oneOfType([R.string, R.func, R.object])
};
const Hc = xp(Vc);
var Wn = /* @__PURE__ */ function() {
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
function Ap(e, t) {
  return new Wn({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function Sp(e, t) {
  return new Wn({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const Tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: Wn,
  subtractPoints: Sp,
  sumPoints: Ap
}, Symbol.toStringTag, { value: "Module" }));
function kp(e) {
  return !!e && e instanceof Element;
}
function wp(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function Cp(e) {
  return !!e && "createSVGPoint" in e;
}
function Pp(e) {
  return !!e && "getScreenCTM" in e;
}
function Np(e) {
  return !!e && "changedTouches" in e;
}
function Lp(e) {
  return !!e && "clientX" in e;
}
function Op(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function aa() {
  return aa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, aa.apply(this, arguments);
}
var Jr = {
  x: 0,
  y: 0
};
function _p(e) {
  if (!e)
    return aa({}, Jr);
  if (Np(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : aa({}, Jr);
  if (Lp(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : aa({}, Jr);
}
function Ti(e, t) {
  if (!e || !t)
    return null;
  var n = _p(t), a = wp(e) ? e.ownerSVGElement : e, i = Pp(a) ? a.getScreenCTM() : null;
  if (Cp(a) && i) {
    var o = a.createSVGPoint();
    return o.x = n.x, o.y = n.y, o = o.matrixTransform(i.inverse()), new Wn({
      x: o.x,
      y: o.y
    });
  }
  var l = e.getBoundingClientRect();
  return new Wn({
    x: n.x - l.left - e.clientLeft,
    y: n.y - l.top - e.clientTop
  });
}
function ki(e, t) {
  if (kp(e) && t)
    return Ti(e, t);
  if (Op(e)) {
    var n = e, a = n.target;
    if (a)
      return Ti(a, n);
  }
  return null;
}
const Mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: ki,
  touchPoint: Ti
}, Symbol.toStringTag, { value: "Module" })), Dp = new As(), Wc = (e) => {
  const { tableData: t, config: n, formatNumber: a, capitalize: i, formatDate: o, parseDate: l, setSharedFilter: s } = $.useContext(De), { xScale: c, yScale: u, showTooltip: d, hideTooltip: h } = e, { xAxis: m, visualizationType: p, orientation: g, yAxis: E, runtime: y, barWidth: f } = n, x = Dp.applySuppression(t, n.suppressedData), b = (W, F) => {
    const { x: L, y: q } = F, Y = {
      data: W || {},
      dataXPosition: L + 10,
      dataYPosition: q
    };
    return {
      tooltipLeft: Y.dataXPosition,
      tooltipTop: Y.dataYPosition,
      tooltipData: Y
    };
  }, v = (W, F) => {
    W.stopPropagation();
    const L = ki(W), { x: q, y: j } = L, { data: Y, arc: H } = F ?? {}, U = k(q - Number(n.yAxis.size || 0)), I = p !== "Pie" ? n.series.filter((_) => _.tooltip === !0).map((_) => _.dataKey) : n.series.map((_) => _.dataKey);
    I.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((_) => {
      _.confidenceIntervals.map((ue) => {
        ue.showInTooltip && (I.push(ue.high), I.push(ue.low));
      });
    });
    function Q(_) {
      let ue = [];
      for (let le in _)
        _.hasOwnProperty(le) && ue.push(_[le].name);
      return ue;
    }
    I.push(...Q(n.columns)), I.push(...Q(n.columns));
    const ne = P(U, I), he = x.filter((_) => _[m.dataKey] === N(j)), Pe = g === "vertical" ? ne : he, ke = (_) => {
      const ue = n.series.filter((ge) => ge.dataKey === _)[0];
      return ue != null && ue.axis ? String(ue.axis).toLowerCase() : "left";
    }, K = (() => {
      var ve, xe, Ne;
      const _ = n.columns, ue = [], le = [];
      for (const [Ae, Se] of Object.entries(_)) {
        const pe = {
          addColPrefix: n.columns[Ae].prefix,
          addColSuffix: n.columns[Ae].suffix,
          addColRoundTo: n.columns[Ae].roundToPlace ? n.columns[Ae].roundToPlace : "",
          addColCommas: n.columns[Ae].commas
        };
        let ae = null;
        n.visualizationType === "Pie" ? ae = H == null ? void 0 : H.data[Se.name] : ae = (ve = Pe[0]) == null ? void 0 : ve[Se.name];
        const J = Ss(ae, "left", !0, n, pe);
        Se.tooltips && ue.push([Se.label, J]);
      }
      const ge = [];
      return ue.forEach((Ae) => {
        ge.push([Ae[0], Ae[1]]);
      }), p === "Pie" && le.push(
        // ignore
        [n.xAxis.dataKey, Y],
        [n.runtime.yAxis.dataKey, a(H == null ? void 0 : H.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((H == null ? void 0 : H.endAngle) - (H == null ? void 0 : H.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), p === "Forest Plot" && le.push([n.xAxis.dataKey, N(j)]), p !== "Pie" && p !== "Forest Plot" && le.push(
        ...(Ne = (xe = D()) == null ? void 0 : xe.filter(Boolean)) == null ? void 0 : Ne.flatMap((Ae) => {
          var pe, ae, J;
          const Se = Ae === n.xAxis.dataKey ? (pe = Pe[0]) == null ? void 0 : pe[Ae] : a((ae = Pe[0]) == null ? void 0 : ae[Ae], ke(Ae));
          return (J = Pe == null ? void 0 : Pe[0]) != null && J[Ae] ? [[Ae, Se, ke(Ae)]] : [];
        })
      ), [...le, ...ge];
    })();
    if (!K)
      return;
    const re = b(K, L);
    d(re);
  }, S = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      h();
    }, 3e3) : h();
  }, A = (W) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let F = c.step();
      const q = Math.floor(Number(W) / F);
      return c.domain()[q - 1];
    }
    if (n.xAxis.type === "date" && n.visualizationType !== "Combo") {
      const F = vl((Y) => l(Y[n.xAxis.dataKey])).left, L = c.invert(c(W)), q = F(n.data, L, 1);
      return l(n.data[q - 1][n.xAxis.dataKey]);
    }
  }, k = (W, F = !1) => {
    if (p !== "Pie" && g !== "horizontal") {
      if (c.type === "point" || m.type === "continuous" || m.type === "date") {
        let L = null, q = Number.MAX_VALUE, j = W;
        return x.forEach((Y) => {
          const H = m.type === "date" ? c(l(Y[m.dataKey])) : c(Y[m.dataKey]);
          let U = n.barHeight;
          const I = Math.abs(Number(H - j + (F ? U * 2 : 0)));
          I <= q && (q = I, L = (m.type === "date", Y[m.dataKey]));
        }), L;
      }
      if (n.xAxis.type === "categorical" || p === "Combo" && g !== "horizontal" && p !== "Forest Plot") {
        let L = c.step();
        const j = Math.floor(Number(W) / L);
        return c.domain()[j - 1];
      }
      if (n.xAxis.type === "date" && p !== "Combo" && g !== "horizontal") {
        const L = vl((H) => l(H[n.xAxis.dataKey])).left, q = c.invert(W), j = L(n.data, q, 1);
        return l(n.data[j - 1][n.xAxis.dataKey]);
      }
    }
  }, N = (W, F) => {
    if (p === "Pie")
      return;
    let L = Number.MAX_VALUE, q = null;
    return x.forEach((j, Y) => {
      const H = u(p !== "Forest Plot" ? j[n.xAxis.dataKey] : Y), U = Math.abs(H - W);
      U < L && (L = U, q = F ? j[F] : j[n.xAxis.dataKey]);
    }), q;
  }, C = (W) => {
    var F, L;
    try {
      const q = ki(W), { x: j } = q;
      if (!j)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let Y = k(j, !0), H = (F = n.data) == null ? void 0 : F.filter((U) => U[n.xAxis.dataKey] === Y);
      if (!Y)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (m.type === "date" && Y && (Y = new Date(Y), Y = o(Y), H = (L = n.data) == null ? void 0 : L.filter((U) => o(new Date(U[n.xAxis.dataKey])) === Y)), !H[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${Y}`);
      s && (n != null && n.uid) && (H != null && H[0]) && s(n.uid, H[0]);
    } catch (q) {
      console.error(q.message);
    }
  }, P = (W, F) => {
    try {
      let L;
      return m.type === "categorical" ? L = x.filter((j) => j[m.dataKey] === W) : L = x.filter((j) => j[m.dataKey] === W), !L || L.length === 0 ? [] : L.map((j) => Object.fromEntries(Object.entries(j).filter(([Y, H]) => F.includes(Y))));
    } catch (L) {
      console.error("COVE", L);
    }
  }, D = () => {
    var W;
    try {
      let F, L = [], q = [];
      if ((W = n.series) == null || W.forEach((j) => {
        j.type === "Forecasting" && (L.push(j.stageColumn), j == null || j.confidenceIntervals.forEach((Y) => {
          Y.showInTooltip === !0 && (q.push(Y.low), q.push(Y.high));
        }));
      }), !n.dashboard)
        switch (p) {
          case "Combo":
            F = [y.xAxis.dataKey, ...y == null ? void 0 : y.seriesKeys, ...q];
            break;
          case "Forecasting":
            F = [y.xAxis.dataKey, ...L, ...q];
            break;
          case "Line":
            F = [y.xAxis.dataKey, ...y == null ? void 0 : y.seriesKeys];
            break;
          case "Area Chart":
            F = [y.xAxis.dataKey, ...y == null ? void 0 : y.seriesKeys];
            break;
          case "Bar":
            F = g === "vertical" ? [y.xAxis.dataKey, ...y == null ? void 0 : y.seriesKeys] : [y.yAxis.dataKey, ...y == null ? void 0 : y.seriesKeys];
            break;
          case "Pie":
            F = [y.xAxis.dataKey, ...y == null ? void 0 : y.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (F = [y.xAxis.dataKey, ...y == null ? void 0 : y.barSeriesKeys, ...y == null ? void 0 : y.lineSeriesKeys, ...L, ...q]), F;
    } catch (F) {
      console.error("COVE", F);
    }
  }, T = (W) => {
    const { dataXPosition: F, dataYPosition: L } = W;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${F}px, ${Number(L)}px)`
    };
  }, z = (W) => {
    var L, q;
    let F = n.series.filter((j) => j.dataKey === W);
    return (L = F[0]) != null && L.name ? (q = F[0]) == null ? void 0 : q.name : W;
  };
  return {
    getIncludedTooltipSeries: D,
    getXValueFromCoordinate: k,
    getXValueFromCoordinateDate: A,
    getYScaleValues: P,
    handleTooltipClick: C,
    handleTooltipMouseOff: S,
    handleTooltipMouseOver: v,
    TooltipListItem: ({ item: W }) => {
      const [F, L] = W, [q, j, Y] = L;
      return p === "Forest Plot" ? q === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${n.yAxis.type === "date" ? o(l(q, !1)) : j}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${z(q)}: ${a(j, "left")}`) : p === "Bar" && g === "horizontal" && q === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${j}`) : q === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${n.xAxis.type === "date", j}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${z(q)}: ${j}`);
    },
    tooltipStyles: T
  };
};
function oo(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: i = !1 }) {
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
const Kc = (e, t = !1) => {
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
var $p = ["flexDirection", "alignItems", "margin", "display", "children"];
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
function zp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function mr(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, a = e.alignItems, i = a === void 0 ? "center" : a, o = e.margin, l = o === void 0 ? "0" : o, s = e.display, c = s === void 0 ? "flex" : s, u = e.children, d = zp(e, $p);
  return /* @__PURE__ */ r.createElement("div", wi({
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
var Rp = ["flex", "label", "margin", "align", "children"];
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
function Fp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function fr(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, a = e.label, i = e.margin, o = i === void 0 ? "5px 0" : i, l = e.align, s = l === void 0 ? "left" : l, c = e.children, u = Fp(e, Rp);
  return /* @__PURE__ */ r.createElement("div", Ci({
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
function lo(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style;
  return /* @__PURE__ */ r.createElement("div", {
    style: Pi({
      width: n,
      height: a,
      background: t
    }, i)
  });
}
lo.propTypes = {
  fill: R.string,
  width: R.oneOfType([R.string, R.number]),
  height: R.oneOfType([R.string, R.number])
};
function Ic(e) {
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
Ic.propTypes = {
  fill: R.string,
  width: R.oneOfType([R.string, R.number]),
  height: R.oneOfType([R.string, R.number])
};
function jc(e) {
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
jc.propTypes = {
  fill: R.string,
  width: R.oneOfType([R.string, R.number]),
  height: R.oneOfType([R.string, R.number])
};
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
var Gr = function() {
};
function Bp(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, i = a === void 0 ? Gr : a, o = e.size, l = o === void 0 ? Gr : o, s = e.width, c = e.height, u = e.label, d = e.item, h = e.itemIndex, m = e.shapeStyle, p = m === void 0 ? Gr : m, g = {
    width: s,
    height: c,
    item: d,
    itemIndex: h,
    label: u,
    fill: i(ra({}, u)),
    size: l(ra({}, u)),
    style: p(ra({}, u))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ r.createElement(Ic, g) : n === "line" ? /* @__PURE__ */ r.createElement(jc, g) : /* @__PURE__ */ r.createElement(lo, g) : /* @__PURE__ */ r.isValidElement(n) ? /* @__PURE__ */ r.cloneElement(n, g) : n ? /* @__PURE__ */ r.createElement(n, g) : null;
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
function qc(e) {
  var t = e.shape, n = t === void 0 ? lo : t, a = e.width, i = e.height, o = e.margin, l = e.label, s = e.item, c = e.itemIndex, u = e.fill, d = e.size, h = e.shapeStyle;
  return /* @__PURE__ */ r.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: d ? d(hr({}, l)) : a,
      height: d ? d(hr({}, l)) : i,
      margin: o
    }
  }, Bp({
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
qc.propTypes = {
  itemIndex: R.number.isRequired,
  margin: R.oneOfType([R.string, R.number]),
  width: R.oneOfType([R.string, R.number]),
  height: R.oneOfType([R.string, R.number])
};
function Uc(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function Ul(e) {
  return String(Uc(e));
}
function Vp(e) {
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
var Hp = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
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
function Wp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Kp = {
  display: "flex"
};
function Yc(e) {
  var t = e.className, n = e.style, a = n === void 0 ? Kp : n, i = e.scale, o = e.shape, l = e.domain, s = e.fill, c = s === void 0 ? Ul : s, u = e.size, d = u === void 0 ? Ul : u, h = e.labelFormat, m = h === void 0 ? Uc : h, p = e.labelTransform, g = p === void 0 ? Vp : p, E = e.shapeWidth, y = E === void 0 ? 15 : E, f = e.shapeHeight, x = f === void 0 ? 15 : f, b = e.shapeMargin, v = b === void 0 ? "2px 4px 2px 0" : b, S = e.shapeStyle, A = e.labelAlign, k = A === void 0 ? "left" : A, N = e.labelFlex, C = N === void 0 ? "1" : N, P = e.labelMargin, D = P === void 0 ? "0 4px" : P, T = e.itemMargin, z = T === void 0 ? "0" : T, V = e.direction, W = V === void 0 ? "column" : V, F = e.itemDirection, L = F === void 0 ? "row" : F, q = e.legendLabelProps, j = e.children, Y = Wp(e, Hp), H = l || ("domain" in i ? i.domain() : []), U = g({
    scale: i,
    labelFormat: m
  }), I = H.map(U);
  return j ? /* @__PURE__ */ r.createElement(r.Fragment, null, j(I)) : /* @__PURE__ */ r.createElement("div", {
    className: tt("visx-legend", t),
    style: ia({}, a, {
      flexDirection: W
    })
  }, I.map(function(Q, ne) {
    return /* @__PURE__ */ r.createElement(mr, ia({
      key: "legend-" + Q.text + "-" + ne,
      margin: z,
      flexDirection: L
    }, Y), /* @__PURE__ */ r.createElement(qc, {
      shape: o,
      height: x,
      width: y,
      margin: v,
      item: H[ne],
      itemIndex: ne,
      label: Q,
      fill: c,
      size: d,
      shapeStyle: S
    }), /* @__PURE__ */ r.createElement(fr, ia({
      label: Q.text,
      flex: C,
      margin: D,
      align: k
    }, q)));
  }));
}
Yc.propTypes = {
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
function Ip(e) {
  return /* @__PURE__ */ r.createElement(Yc, e);
}
function jp(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const Lr = (e, t) => {
  var E;
  const { formatDate: n, parseDate: a } = $.useContext(De);
  let i = [], o = "", l = [], s = [];
  ((E = e.series) == null ? void 0 : E.length) > 0 && e.data ? (i = e.series[0], o = e.series[0].dataKey, l = e.highlightedBarValues, s = e.data.map((y) => y[e.xAxis.dataKey])) : (i = [], o = "", l = [], s = []);
  const c = (y, f) => {
    const x = [...e.highlightedBarValues];
    x[f].borderWidth = y.target.value, t({
      ...e,
      highlightedBarValues: x
    });
  }, u = (y, f) => {
    y.preventDefault();
    const x = [...e.highlightedBarValues];
    x[f].value = y.target.value, x[f].dataKey = o, t({
      ...e,
      highlightedBarValues: x
    });
  }, d = (y, f) => {
    y.preventDefault();
    const x = [...e.highlightedBarValues];
    x.push({ dataKey: o }), t({
      ...e,
      highlightedBarValues: x
    });
  }, h = (y, f) => {
    y.preventDefault();
    const x = [...e.highlightedBarValues];
    x.splice(f, 1), t({
      ...e,
      highlightedBarValues: x
    });
  }, m = (y, f) => {
    const x = [...e.highlightedBarValues];
    x[f].color = y.target.value, t({
      ...e
    });
  }, p = (y, f) => {
    const x = [...e.highlightedBarValues];
    x[f].legendLabel = y.target.value, t({
      ...e,
      copyOfHighlightedBarValues: x
    });
  }, g = () => {
  };
  return g.checkFontColor = (y, f, x) => {
    if (e.xAxis.type === "date") {
      if (g.formatDates(f).includes(y))
        return "#000";
    } else if (f.includes(y))
      return "#000";
    return x;
  }, g.formatDates = (y) => y.map((f) => f ? n(a(f)) : !1), g.findDuplicates = (y) => {
    const f = {};
    return y.filter((b) => {
      const { legendLabel: v } = b;
      return f[v] ? !1 : (f[v] = !0, !0);
    });
  }, {
    HighLightedBarUtils: g,
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
}, Xc = (e) => {
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
}, Qc = ({ config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: i, currentViewport: o, formatLabels: l }) => {
  var b;
  const { innerClasses: s, containerClasses: c } = jp(e), { runtime: u, orientation: d, legend: h } = e;
  if (!h)
    return null;
  const m = Ji({
    domain: (b = e.suppressedData) == null ? void 0 : b.map((v) => v.label),
    range: ["none"],
    unknown: "block"
  }), p = (v) => {
    const S = v === "Dashed Small" ? 3 : 2, A = `dashes ${v.toLowerCase().replace(" ", "-")}`;
    return /* @__PURE__ */ r.createElement("div", { className: A }, Array.from({ length: S }, (k, N) => /* @__PURE__ */ r.createElement("span", { key: N }, "-")));
  }, g = (v) => {
    if (["Dashed Small", "Dashed Medium", "Dashed Large"].includes(v))
      return p(v);
    if (v === "Open Circles")
      return /* @__PURE__ */ r.createElement("div", { className: "dashes open-circles" });
  }, E = h.position === "bottom" || ["sm", "xs", "xxs"].includes(o), y = {
    marginBottom: E ? "15px" : "0px",
    marginTop: E && d === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : `${E ? e.dynamicMarginTop + 15 : 0}px`
  }, { HighLightedBarUtils: f } = Lr(e);
  let x = f.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ r.createElement("aside", { style: y, id: "legend", className: c.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, h.label && /* @__PURE__ */ r.createElement("h2", null, xn(h.label)), h.description && /* @__PURE__ */ r.createElement("p", null, xn(h.description)), /* @__PURE__ */ r.createElement(Ip, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (v) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: s.join(" ") }, l(v).map((S, A) => {
    var C, P, D, T;
    let k = ["legend-item", `legend-text--${S.text.replace(" ", "").toLowerCase()}`], N = S.datum;
    if (e.exclusions.active && ((C = e.exclusions.keys) != null && C.includes(N)))
      return null;
    if (u.seriesLabels) {
      let z = e.runtime.seriesLabelsAll.indexOf(N);
      N = e.runtime.seriesKeys[z], ((P = u == null ? void 0 : u.forecastingSeriesKeys) == null ? void 0 : P.length) > 0 && (N = S.text);
    }
    return n.length > 0 && n.includes(N) === !1 && k.push("inactive"), /* @__PURE__ */ r.createElement(
      mr,
      {
        className: k.join(" "),
        tabIndex: 0,
        key: `legend-quantile-${A}`,
        onKeyPress: (z) => {
          z.key === "Enter" && a(S);
        },
        onClick: () => {
          a(S);
        }
      },
      e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ r.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ r.createElement(qe, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: S.value, strokeWidth: 2, strokeDasharray: Xc((D = e.series[A]) != null && D.type ? (T = e.series[A]) == null ? void 0 : T.type : "") })) : /* @__PURE__ */ r.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ r.createElement(Qo, { margin: "0", fill: S.value, display: m(S.datum) }), /* @__PURE__ */ r.createElement("div", { style: { marginTop: "2px", marginRight: "6px" } }, S.icon)),
      /* @__PURE__ */ r.createElement(fr, { align: "left", margin: "0 0 0 4px" }, S.text)
    );
  }), x.map((S, A) => {
    let k = "legend-item", N = S.legendLabel;
    return N ? (n.length > 0 && n.includes(N) === !1 && (k += " inactive"), /* @__PURE__ */ r.createElement(
      mr,
      {
        className: k,
        tabIndex: 0,
        key: `legend-quantile-${A}`,
        onKeyPress: (C) => {
          C.key === "Enter" && a(S.legendLabel);
        },
        onClick: () => {
          a(S.legendLabel);
        }
      },
      /* @__PURE__ */ r.createElement(Qo, { fill: "transparent", borderColor: S.color ? S.color : "rgba(255, 102, 1)" }),
      " ",
      /* @__PURE__ */ r.createElement(fr, { align: "left", margin: "0 0 0 4px" }, S.legendLabel ? S.legendLabel : S.value)
    )) : !1;
  }), n.length > 0 && /* @__PURE__ */ r.createElement("button", { className: `legend-reset ${e.theme}`, onClick: (S) => i(S), tabIndex: 0 }, "Reset")), /* @__PURE__ */ r.createElement(r.Fragment, null, e.preliminaryData.some((S) => S.label) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && E ? "legend-container__inner bottom single-row" : "dash-left" }, e.preliminaryData.map((S, A) => /* @__PURE__ */ r.createElement("div", { className: "dash-container", key: A }, S.label && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "dash-inner" }, g(S.style)), /* @__PURE__ */ r.createElement("div", { style: { marginLeft: "7px" } }, S.label))))))))));
};
function so(e) {
  return Tu({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const Zc = (e, t, n, a) => (i) => {
  var m, p, g, E, y;
  const { visualizationType: o, visualizationSubType: l, series: s, runtime: c } = e, u = (f) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? f.reverse() : f, d = (m = e.legend) == null ? void 0 : m.colorCode;
  if (o === "Deviation Bar") {
    const [f, x] = Ua[e.twoColor.palette], b = {
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
    return u([b, v]);
  }
  if (o === "Bar" && l === "regular" && d && (s == null ? void 0 : s.length) === 1) {
    let f = kt[e.palette];
    for (; t.length > f.length; )
      f = f.concat(f);
    f = f.slice(0, n.length);
    const x = /* @__PURE__ */ new Set();
    t.forEach((v) => x.add(v[d]));
    const b = Array.from(x).map((v, S) => ({
      datum: v,
      index: S,
      text: v,
      value: f[S]
    }));
    return u(b);
  }
  if (((p = c == null ? void 0 : c.forecastingSeriesKeys) == null ? void 0 : p.length) > 0) {
    let f = [];
    return (E = (g = e.runtime) == null ? void 0 : g.forecastingSeriesKeys) == null || E.map((x, b) => {
      var v;
      return (v = x == null ? void 0 : x.stages) == null ? void 0 : v.map((S, A) => {
        var C, P, D, T;
        let k = (C = Ya[S.color]) != null && C[2] ? (P = Ya[S.color]) == null ? void 0 : P[2] : (D = kt[S.color]) != null && D[2] ? (T = kt[S.color]) == null ? void 0 : T[2] : "#ccc";
        const N = {
          datum: S.key,
          index: A,
          text: S.key,
          value: k
        };
        f.push(N);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((x, b) => {
      let v = kt[e.palette][b] ? kt[e.palette][b] : "#ccc";
      const S = {
        datum: x,
        index: b,
        text: x,
        value: v
      };
      f.push(S);
    }), u(f);
  }
  if (e.series.filter((f) => !!f.name).length > 0) {
    const f = /* @__PURE__ */ new Set();
    e.series.forEach((b) => {
      f.add(b.name || b.dataKey);
    });
    const x = Array.from(f).map((b, v) => ({
      datum: b,
      index: v,
      text: b,
      value: a(b)
    }));
    return u(x);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const f = i.length - 1;
    let x = [];
    return (y = e.suppressedData) == null || y.forEach(({ label: b, icon: v }, S) => {
      if (b && v) {
        const A = {
          datum: b,
          index: f + S,
          text: b,
          icon: /* @__PURE__ */ r.createElement(so, { color: "#000", size: 15 })
        };
        x.push(A);
      }
    }), [...i, ...x];
  }
  return u(i);
}, Da = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), qp = (e) => {
  const { transformedData: t, config: n, colorScale: a, currentViewport: i, dimensions: o, highlight: l, highlightReset: s, seriesHighlight: c } = $.useContext(De), { tooltipData: u, showTooltip: d, hideTooltip: h, tooltipOpen: m, tooltipLeft: p, tooltipTop: g } = Rc(), { handleTooltipMouseOver: E, handleTooltipMouseOff: y, TooltipListItem: f } = Wc({
    xScale: !1,
    yScale: !1,
    showTooltip: d,
    hideTooltip: h
  }), [x, b] = $.useState(void 0), [v, S] = $.useState(!1), A = Object.values(n.columns).filter((H) => H.showInViz), k = A.length > 0, N = k ? "pivotColumn" : void 0, C = $.useMemo(() => {
    if (k) {
      let H = [];
      const U = n.yAxis.dataKey, I = A.map((he) => he.name), Q = [U, ...I], ne = n.xAxis.dataKey;
      return t.forEach((he) => {
        Q.forEach((Pe) => {
          const ke = he[Pe];
          ke && H.push({
            [N]: ke,
            [ne]: `${he[ne]} - ${Pe}`
          });
        });
      }), H;
    }
    return t;
  }, [t, k]), P = $.useMemo(() => {
    if (k) {
      const H = {};
      C.forEach((Q) => {
        H[Q[n.xAxis.dataKey]] || (H[Q[n.xAxis.dataKey]] = !0);
      });
      const U = Object.entries(H).length;
      let I = n.customColors || kt[n.palette];
      return I = I.slice(0, U), Ji({
        domain: Object.keys(H),
        range: I,
        unknown: null
      });
    }
    return a;
  }, [a, k]), D = $.useRef(), T = oo(D, {
    freezeOnceVisible: !1
  });
  $.useEffect(() => {
    document.querySelector(".isEditor") && S((U) => !0);
  }), $.useEffect(() => {
    T != null && T.isIntersecting && n.animate && !v && setTimeout(() => {
      S(!0);
    }, 500);
  }, [T == null ? void 0 : T.isIntersecting, n.animate]);
  const z = ({ arcs: H, path: U, getKey: I }) => {
    const Q = jh(H, I, {
      from: Da,
      enter: Da,
      update: Da,
      leave: Da
    });
    return $.useEffect(() => {
      const ne = setTimeout(() => {
        h();
      }, 500);
      return () => {
        clearTimeout(ne);
      };
    }, [u]), /* @__PURE__ */ r.createElement(r.Fragment, null, Q.map(({ item: ne, props: he, key: Pe }, ke) => /* @__PURE__ */ r.createElement(be, { className: ne.data[n.xAxis.dataKey], key: `${Pe}-${ke}`, style: { opacity: n.legend.behavior === "highlight" && c.length > 0 && c.indexOf(ne.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ r.createElement(
      jl.path,
      {
        d: Bh(
          [he.startAngle, he.endAngle],
          (X, K) => U({
            ...ne,
            startAngle: X,
            endAngle: K
          })
        ),
        fill: P(ne.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (X) => E(X, { data: ne.data[n.runtime.xAxis.dataKey], arc: ne }),
        onMouseLeave: (X) => y()
      }
    ))), Q.map(({ item: ne, key: he }, Pe) => {
      const [ke, X] = U.centroid(ne), K = ne.endAngle - ne.startAngle >= 0.1;
      let re = "#FFF";
      return P(ne.data[n.runtime.xAxis.dataKey]) && Ft.contrast(re, P(ne.data[n.runtime.xAxis.dataKey])) < 3.5 && (re = "000"), /* @__PURE__ */ r.createElement(jl.g, { key: `${he}${Pe}` }, K && /* @__PURE__ */ r.createElement($e, { style: { fill: re }, x: ke, y: X, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((ne.endAngle - ne.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [V] = o;
  n && n.legend && !n.legend.hide && i === "lg" && (V = V * 0.73);
  const W = n.heights.vertical, F = Math.min(V, W) / 2, L = W / 2, q = V / 2, j = n.pieType === "Donut" ? 75 : F;
  $.useEffect(() => {
    if (c.length > 0 && n.legend.behavior !== "highlight") {
      let H = [];
      C.forEach((U) => {
        c.indexOf(U[n.runtime.xAxis.dataKey]) !== -1 && H.push(U);
      }), b(H);
    } else
      b(void 0);
  }, [c]);
  const Y = Zc(n, [], C, P);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Bt, { component: "PieChart" }, /* @__PURE__ */ r.createElement("svg", { width: V, height: W, className: `animated-pie group ${n.animate === !1 || v ? "animated" : ""}`, role: "img", "aria-label": Kc(n) }, /* @__PURE__ */ r.createElement(be, { top: L, left: q }, /* @__PURE__ */ r.createElement(
    Dd,
    {
      data: x || C,
      pieValue: (H) => H[N || n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: F - j,
      outerRadius: F
    },
    (H) => /* @__PURE__ */ r.createElement(z, { ...H, getKey: (U) => U.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ r.createElement("div", { ref: D }), u && Object.entries(u.data).length > 0 && m && d && u.dataYPosition && u.dataXPosition && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(Hc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: p, top: g }, /* @__PURE__ */ r.createElement("ul", null, typeof u == "object" && Object.entries(u.data).map((H, U) => /* @__PURE__ */ r.createElement(f, { item: H, key: U })))))), /* @__PURE__ */ r.createElement(Qc, { config: n, colorScale: P, seriesHighlight: c, highlight: l, highlightReset: s, currentViewport: i, formatLabels: Y }));
};
var Up = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const St = Up;
function Yp(e) {
  var t = e.labelOffset, n = e.labelProps, a = e.orientation, i = e.range, o = e.tickLabelFontSize, l = e.tickLength, s = a === St.left || a === St.top ? -1 : 1, c, u, d;
  if (a === St.top || a === St.bottom) {
    var h = a === St.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    c = (Number(i[0]) + Number(i[i.length - 1])) / 2, u = s * (l + t + o + h);
  } else
    c = s * ((Number(i[0]) + Number(i[i.length - 1])) / 2), u = -(l + t), d = "rotate(" + s * 90 + ")";
  return {
    x: c,
    y: u,
    transform: d
  };
}
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
function Xp(e) {
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, i = e.tickClassName, o = e.tickComponent, l = e.tickLabelProps, s = e.tickStroke, c = s === void 0 ? "#222" : s, u = e.tickTransform, d = e.ticks, h = e.strokeWidth, m = e.tickLineProps;
  return d.map(function(p) {
    var g, E = p.value, y = p.index, f = p.from, x = p.to, b = p.formattedValue, v = (g = l[y]) != null ? g : {}, S = Math.max(10, typeof v.fontSize == "number" && v.fontSize || 0), A = x.y + (n && a !== St.top ? S : 0);
    return /* @__PURE__ */ r.createElement(be, {
      key: "visx-tick-" + E + "-" + y,
      className: tt("visx-axis-tick", i),
      transform: u
    }, !t && /* @__PURE__ */ r.createElement(qe, oa({
      from: f,
      to: x,
      stroke: c,
      strokeWidth: h,
      strokeLinecap: "square"
    }, m)), o ? o(oa({}, v, {
      x: x.x,
      y: A,
      formattedValue: b
    })) : /* @__PURE__ */ r.createElement($e, oa({
      x: x.x,
      y: A
    }, v), b));
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
var Yl = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function Qp(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, i = e.hideAxisLine, o = e.hideTicks, l = e.horizontal, s = e.label, c = s === void 0 ? "" : s, u = e.labelClassName, d = e.labelOffset, h = d === void 0 ? 14 : d, m = e.labelProps, p = m === void 0 ? Yl : m, g = e.orientation, E = g === void 0 ? St.bottom : g, y = e.scale, f = e.stroke, x = f === void 0 ? "#222" : f, b = e.strokeDasharray, v = e.strokeWidth, S = v === void 0 ? 1 : v, A = e.tickClassName, k = e.tickComponent, N = e.tickLineProps, C = e.tickLabelProps, P = e.tickLength, D = P === void 0 ? 8 : P, T = e.tickStroke, z = T === void 0 ? "#222" : T, V = e.tickTransform, W = e.ticks, F = e.ticksComponent, L = F === void 0 ? Xp : F, q = pr({}, Yl, typeof C == "object" ? C : null), j = W.map(function(H) {
    var U = H.value, I = H.index;
    return typeof C == "function" ? C(U, I, W) : q;
  }), Y = Math.max.apply(Math, [10].concat(j.map(function(H) {
    return typeof H.fontSize == "number" ? H.fontSize : 0;
  })));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, L({
    hideTicks: o,
    horizontal: l,
    orientation: E,
    scale: y,
    tickClassName: A,
    tickComponent: k,
    tickLabelProps: j,
    tickStroke: z,
    tickTransform: V,
    ticks: W,
    strokeWidth: S,
    tickLineProps: N
  }), !i && /* @__PURE__ */ r.createElement(qe, {
    className: tt("visx-axis-line", n),
    from: t,
    to: a,
    stroke: x,
    strokeWidth: S,
    strokeDasharray: b
  }), c && /* @__PURE__ */ r.createElement($e, pr({
    className: tt("visx-axis-label", u)
  }, Yp({
    labelOffset: h,
    labelProps: p,
    orientation: E,
    range: y.range(),
    tickLabelFontSize: Y,
    tickLength: D
  }), p), c));
}
function Zp(e, t) {
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
function Jp(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Lm;
}
function $a(e, t) {
  var n = e.x, a = e.y;
  return new Wn(t ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  });
}
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
var ei = 0;
function Gp(e) {
  return e === void 0 && (e = ei), typeof e == "number" ? {
    start: e,
    end: e
  } : Ni({
    start: ei,
    end: ei
  }, e);
}
var ey = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function Li() {
  return Li = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Li.apply(this, arguments);
}
function ty(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Or(e) {
  var t = e.children, n = t === void 0 ? Qp : t, a = e.axisClassName, i = e.hideAxisLine, o = i === void 0 ? !1 : i, l = e.hideTicks, s = l === void 0 ? !1 : l, c = e.hideZero, u = c === void 0 ? !1 : c, d = e.innerRef, h = e.left, m = h === void 0 ? 0 : h, p = e.numTicks, g = p === void 0 ? 10 : p, E = e.orientation, y = E === void 0 ? St.bottom : E, f = e.rangePadding, x = f === void 0 ? 0 : f, b = e.scale, v = e.tickFormat, S = e.tickLength, A = S === void 0 ? 8 : S, k = e.tickValues, N = e.top, C = N === void 0 ? 0 : N, P = ty(e, ey), D = v ?? Jp(b), T = y === St.left, z = y === St.top, V = z || y === St.bottom, W = Zp(b), F = T || z ? -1 : 1, L = b.range(), q = Gp(x), j = $a({
    x: Number(L[0]) + 0.5 - q.start,
    y: 0
  }, V), Y = $a({
    x: Number(L[L.length - 1]) + 0.5 + q.end,
    y: 0
  }, V), H = (k ?? Nm(b, g)).filter(function(I) {
    return !u || I !== 0 && I !== "0";
  }).map(function(I, Q) {
    return {
      value: I,
      index: Q
    };
  }), U = H.map(function(I) {
    var Q = I.value, ne = I.index, he = Pm(W(Q));
    return {
      value: Q,
      index: ne,
      from: $a({
        x: he,
        y: 0
      }, V),
      to: $a({
        x: he,
        y: A * F
      }, V),
      formattedValue: D(Q, ne, H)
    };
  });
  return /* @__PURE__ */ r.createElement(be, {
    className: tt("visx-axis", a),
    innerRef: d,
    top: C,
    left: m
  }, n(Li({}, P, {
    axisFromPoint: j,
    axisToPoint: Y,
    hideAxisLine: o,
    hideTicks: s,
    hideZero: u,
    horizontal: V,
    numTicks: g,
    orientation: y,
    rangePadding: x,
    scale: b,
    tickFormat: D,
    tickLength: A,
    tickPosition: W,
    tickSign: F,
    ticks: U
  })));
}
var ny = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function ay(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var ry = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function iy(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, o = i === void 0 ? 8 : i, l = e.tickLabelProps, s = ay(e, ny), c = typeof l == "function" ? l : yr({}, ry, l);
  return /* @__PURE__ */ r.createElement(Or, yr({
    axisClassName: tt("visx-axis-left", t),
    labelOffset: a,
    orientation: St.left,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var oy = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function ly(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var sy = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function cy(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, o = i === void 0 ? 8 : i, l = e.tickLabelProps, s = ly(e, oy), c = typeof l == "function" ? l : gr({}, sy, l);
  return /* @__PURE__ */ r.createElement(Or, gr({
    axisClassName: tt("visx-axis-right", t),
    labelOffset: a,
    orientation: St.right,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var uy = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function dy(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var my = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function fy(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, o = i === void 0 ? 8 : i, l = e.tickLabelProps, s = dy(e, uy), c = typeof l == "function" ? l : xr({}, my, l);
  return /* @__PURE__ */ r.createElement(Or, xr({
    axisClassName: tt("visx-axis-top", t),
    labelOffset: a,
    orientation: St.top,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var hy = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function py(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var yy = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Ia(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, o = i === void 0 ? 8 : i, l = e.tickLabelProps, s = py(e, hy), c = typeof l == "function" ? l : vr({}, yy, l);
  return /* @__PURE__ */ r.createElement(Or, vr({
    axisClassName: tt("visx-axis-bottom", t),
    labelOffset: a,
    orientation: St.bottom,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
function ya(e) {
  return e.split("-")[1];
}
function co(e) {
  return e === "y" ? "height" : "width";
}
function Sn(e) {
  return e.split("-")[0];
}
function ga(e) {
  return ["top", "bottom"].includes(Sn(e)) ? "x" : "y";
}
function Xl(e, t, n) {
  let { reference: a, floating: i } = e;
  const o = a.x + a.width / 2 - i.width / 2, l = a.y + a.height / 2 - i.height / 2, s = ga(t), c = co(s), u = a[c] / 2 - i[c] / 2, d = s === "x";
  let h;
  switch (Sn(t)) {
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
  switch (ya(t)) {
    case "start":
      h[s] -= u * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += u * (n && d ? -1 : 1);
  }
  return h;
}
function Jc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function la(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Gc(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: i, platform: o, rects: l, elements: s, strategy: c } = e, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: h = "floating", altBoundary: m = !1, padding: p = 0 } = t, g = Jc(p), E = s[m ? h === "floating" ? "reference" : "floating" : h], y = la(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(E))) == null || n ? E : E.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)), boundary: u, rootBoundary: d, strategy: c })), f = h === "floating" ? { ...l.floating, x: a, y: i } : l.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), b = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, v = la(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: f, offsetParent: x, strategy: c }) : f);
  return { top: (y.top - v.top + g.top) / b.y, bottom: (v.bottom - y.bottom + g.bottom) / b.y, left: (y.left - v.left + g.left) / b.x, right: (v.right - y.right + g.right) / b.x };
}
const gy = Math.min, xy = Math.max;
function Oi(e, t, n) {
  return xy(e, gy(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const vy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function br(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vy[t]);
}
function by(e, t, n) {
  n === void 0 && (n = !1);
  const a = ya(e), i = ga(e), o = co(i);
  let l = i === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (l = br(l)), { main: l, cross: br(l) };
}
const Ey = { start: "end", end: "start" };
function ti(e) {
  return e.replace(/start|end/g, (t) => Ey[t]);
}
const Ay = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: i, rects: o, initialPlacement: l, platform: s, elements: c } = t, { mainAxis: u = !0, crossAxis: d = !0, fallbackPlacements: h, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...E } = e, y = Sn(a), f = Sn(l) === l, x = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = h || (f || !g ? [br(l)] : function(D) {
      const T = br(D);
      return [ti(D), T, ti(T)];
    }(l));
    h || p === "none" || b.push(...function(D, T, z, V) {
      const W = ya(D);
      let F = function(L, q, j) {
        const Y = ["left", "right"], H = ["right", "left"], U = ["top", "bottom"], I = ["bottom", "top"];
        switch (L) {
          case "top":
          case "bottom":
            return j ? q ? H : Y : q ? Y : H;
          case "left":
          case "right":
            return q ? U : I;
          default:
            return [];
        }
      }(Sn(D), z === "start", V);
      return W && (F = F.map((L) => L + "-" + W), T && (F = F.concat(F.map(ti)))), F;
    }(l, g, p, x));
    const v = [l, ...b], S = await Gc(t, E), A = [];
    let k = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (u && A.push(S[y]), d) {
      const { main: D, cross: T } = by(a, o, x);
      A.push(S[D], S[T]);
    }
    if (k = [...k, { placement: a, overflows: A }], !A.every((D) => D <= 0)) {
      var N, C;
      const D = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, T = v[D];
      if (T)
        return { data: { index: D, overflows: k }, reset: { placement: T } };
      let z = (C = k.find((V) => V.overflows[0] <= 0)) == null ? void 0 : C.placement;
      if (!z)
        switch (m) {
          case "bestFit": {
            var P;
            const V = (P = k.map((W) => [W.placement, W.overflows.filter((F) => F > 0).reduce((F, L) => F + L, 0)]).sort((W, F) => W[1] - F[1])[0]) == null ? void 0 : P[0];
            V && (z = V);
            break;
          }
          case "initialPlacement":
            z = l;
        }
      if (a !== z)
        return { reset: { placement: z } };
    }
    return {};
  } };
}, Sy = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, i = await async function(o, l) {
      const { placement: s, platform: c, elements: u } = o, d = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), h = Sn(s), m = ya(s), p = ga(s) === "x", g = ["left", "top"].includes(h) ? -1 : 1, E = d && p ? -1 : 1, y = typeof l == "function" ? l(o) : l;
      let { mainAxis: f, crossAxis: x, alignmentAxis: b } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return m && typeof b == "number" && (x = m === "end" ? -1 * b : b), p ? { x: x * E, y: f * g } : { x: f * g, y: x * E };
    }(t, e);
    return { x: n + i.x, y: a + i.y, data: i };
  } };
}, Ty = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: i } = t, { mainAxis: o = !0, crossAxis: l = !1, limiter: s = { fn: (y) => {
      let { x: f, y: x } = y;
      return { x: f, y: x };
    } }, ...c } = e, u = { x: n, y: a }, d = await Gc(t, c), h = ga(Sn(i)), m = h === "x" ? "y" : "x";
    let p = u[h], g = u[m];
    if (o) {
      const y = h === "y" ? "bottom" : "right";
      p = Oi(p + d[h === "y" ? "top" : "left"], p, p - d[y]);
    }
    if (l) {
      const y = m === "y" ? "bottom" : "right";
      g = Oi(g + d[m === "y" ? "top" : "left"], g, g - d[y]);
    }
    const E = s.fn({ ...t, [h]: p, [m]: g });
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
const Ql = Math.min, sa = Math.max, Er = Math.round;
function eu(e) {
  const t = qt(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const i = e.offsetWidth, o = e.offsetHeight, l = Er(n) !== i || Er(a) !== o;
  return l && (n = i, a = o), { width: n, height: a, fallback: l };
}
function sn(e) {
  return nu(e) ? (e.nodeName || "").toLowerCase() : "";
}
let za;
function tu() {
  if (za)
    return za;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (za = e.brands.map((t) => t.brand + "/" + t.version).join(" "), za) : navigator.userAgent;
}
function Ut(e) {
  return e instanceof Mt(e).HTMLElement;
}
function nn(e) {
  return e instanceof Mt(e).Element;
}
function nu(e) {
  return e instanceof Mt(e).Node;
}
function Zl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Mt(e).ShadowRoot || e instanceof ShadowRoot;
}
function _r(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: i } = qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(i);
}
function ky(e) {
  return ["table", "td", "th"].includes(sn(e));
}
function _i(e) {
  const t = /firefox/i.test(tu()), n = qt(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = n.contain;
    return o != null && o.includes(i);
  });
}
function au() {
  return !/^((?!chrome|android).)*safari/i.test(tu());
}
function uo(e) {
  return ["html", "body", "#document"].includes(sn(e));
}
function ru(e) {
  return nn(e) ? e : e.contextElement;
}
const iu = { x: 1, y: 1 };
function zn(e) {
  const t = ru(e);
  if (!Ut(t))
    return iu;
  const n = t.getBoundingClientRect(), { width: a, height: i, fallback: o } = eu(t);
  let l = (o ? Er(n.width) : n.width) / a, s = (o ? Er(n.height) : n.height) / i;
  return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), { x: l, y: s };
}
function fa(e, t, n, a) {
  var i, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), s = ru(e);
  let c = iu;
  t && (a ? nn(a) && (c = zn(a)) : c = zn(e));
  const u = s ? Mt(s) : window, d = !au() && n;
  let h = (l.left + (d && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, m = (l.top + (d && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / c.y, p = l.width / c.x, g = l.height / c.y;
  if (s) {
    const E = Mt(s), y = a && nn(a) ? Mt(a) : a;
    let f = E.frameElement;
    for (; f && a && y !== E; ) {
      const x = zn(f), b = f.getBoundingClientRect(), v = getComputedStyle(f);
      b.x += (f.clientLeft + parseFloat(v.paddingLeft)) * x.x, b.y += (f.clientTop + parseFloat(v.paddingTop)) * x.y, h *= x.x, m *= x.y, p *= x.x, g *= x.y, h += b.x, m += b.y, f = Mt(f).frameElement;
    }
  }
  return { width: p, height: g, top: m, right: h + p, bottom: m + g, left: h, x: h, y: m };
}
function an(e) {
  return ((nu(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Mr(e) {
  return nn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ou(e) {
  return fa(an(e)).left + Mr(e).scrollLeft;
}
function ha(e) {
  if (sn(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Zl(e) && e.host || an(e);
  return Zl(t) ? t.host : t;
}
function lu(e) {
  const t = ha(e);
  return uo(t) ? t.ownerDocument.body : Ut(t) && _r(t) ? t : lu(t);
}
function su(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = lu(e), i = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mt(a);
  return i ? t.concat(o, o.visualViewport || [], _r(a) ? a : []) : t.concat(a, su(a));
}
function Jl(e, t, n) {
  return t === "viewport" ? la(function(a, i) {
    const o = Mt(a), l = an(a), s = o.visualViewport;
    let c = l.clientWidth, u = l.clientHeight, d = 0, h = 0;
    if (s) {
      c = s.width, u = s.height;
      const m = au();
      (m || !m && i === "fixed") && (d = s.offsetLeft, h = s.offsetTop);
    }
    return { width: c, height: u, x: d, y: h };
  }(e, n)) : nn(t) ? la(function(a, i) {
    const o = fa(a, !0, i === "fixed"), l = o.top + a.clientTop, s = o.left + a.clientLeft, c = Ut(a) ? zn(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * c.x, height: a.clientHeight * c.y, x: s * c.x, y: l * c.y };
  }(t, n)) : la(function(a) {
    const i = an(a), o = Mr(a), l = a.ownerDocument.body, s = sa(i.scrollWidth, i.clientWidth, l.scrollWidth, l.clientWidth), c = sa(i.scrollHeight, i.clientHeight, l.scrollHeight, l.clientHeight);
    let u = -o.scrollLeft + ou(a);
    const d = -o.scrollTop;
    return qt(l).direction === "rtl" && (u += sa(i.clientWidth, l.clientWidth) - s), { width: s, height: c, x: u, y: d };
  }(an(e)));
}
function Gl(e) {
  return Ut(e) && qt(e).position !== "fixed" ? e.offsetParent : null;
}
function es(e) {
  const t = Mt(e);
  let n = Gl(e);
  for (; n && ky(n) && qt(n).position === "static"; )
    n = Gl(n);
  return n && (sn(n) === "html" || sn(n) === "body" && qt(n).position === "static" && !_i(n)) ? t : n || function(a) {
    let i = ha(a);
    for (; Ut(i) && !uo(i); ) {
      if (_i(i))
        return i;
      i = ha(i);
    }
    return null;
  }(e) || t;
}
function wy(e, t, n) {
  const a = Ut(t), i = an(t), o = fa(e, !0, n === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (a || !a && n !== "fixed")
    if ((sn(t) !== "body" || _r(i)) && (l = Mr(t)), Ut(t)) {
      const c = fa(t, !0);
      s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop;
    } else
      i && (s.x = ou(i));
  return { x: o.left + l.scrollLeft - s.x, y: o.top + l.scrollTop - s.y, width: o.width, height: o.height };
}
const Cy = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(u, d) {
    const h = d.get(u);
    if (h)
      return h;
    let m = su(u).filter((y) => nn(y) && sn(y) !== "body"), p = null;
    const g = qt(u).position === "fixed";
    let E = g ? ha(u) : u;
    for (; nn(E) && !uo(E); ) {
      const y = qt(E), f = _i(E);
      (g ? f || p : f || y.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = y : m = m.filter((x) => x !== E), E = ha(E);
    }
    return d.set(u, m), m;
  }(t, this._c) : [].concat(n), l = [...o, a], s = l[0], c = l.reduce((u, d) => {
    const h = Jl(t, d, i);
    return u.top = sa(h.top, u.top), u.right = Ql(h.right, u.right), u.bottom = Ql(h.bottom, u.bottom), u.left = sa(h.left, u.left), u;
  }, Jl(t, s, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const i = Ut(n), o = an(n);
  if (n === o)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((i || !i && a !== "fixed") && ((sn(n) !== "body" || _r(o)) && (l = Mr(n)), Ut(n))) {
    const u = fa(n);
    s = zn(n), c.x = u.x + n.clientLeft, c.y = u.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - l.scrollLeft * s.x + c.x, y: t.y * s.y - l.scrollTop * s.y + c.y };
}, isElement: nn, getDimensions: function(e) {
  return Ut(e) ? eu(e) : e.getBoundingClientRect();
}, getOffsetParent: es, getDocumentElement: an, getScale: zn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const i = this.getOffsetParent || es, o = this.getDimensions;
  return { reference: wy(t, await i(n), a), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => qt(e).direction === "rtl" }, ts = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), i = { platform: Cy, ...n }, o = { ...i.platform, _c: a };
  return (async (l, s, c) => {
    const { placement: u = "bottom", strategy: d = "absolute", middleware: h = [], platform: m } = c, p = h.filter(Boolean), g = await (m.isRTL == null ? void 0 : m.isRTL(s));
    if (m == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), p.filter((S) => {
      let { name: A } = S;
      return A === "autoPlacement" || A === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    l && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let E = await m.getElementRects({ reference: l, floating: s, strategy: d }), { x: y, y: f } = Xl(E, u, g), x = u, b = {}, v = 0;
    for (let S = 0; S < p.length; S++) {
      const { name: A, fn: k } = p[S], { x: N, y: C, data: P, reset: D } = await k({ x: y, y: f, initialPlacement: u, placement: x, strategy: d, middlewareData: b, rects: E, platform: m, elements: { reference: l, floating: s } });
      y = N ?? y, f = C ?? f, b = { ...b, [A]: { ...b[A], ...P } }, v > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), D && v <= 50 && (v++, typeof D == "object" && (D.placement && (x = D.placement), D.rects && (E = D.rects === !0 ? await m.getElementRects({ reference: l, floating: s, strategy: d }) : D.rects), { x: y, y: f } = Xl(E, x, g)), S = -1);
    }
    return { x: y, y: f, placement: x, strategy: d, middlewareData: b };
  })(e, t, { ...i, platform: o });
};
var Gt, Tn = { exports: {} }, ns = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Gt = ns, function() {
  var e = r, t = 60103, n = 60106;
  Gt.Fragment = 60107;
  var a = 60108, i = 60114, o = 60109, l = 60110, s = 60112, c = 60113, u = 60120, d = 60115, h = 60116, m = 60121, p = 60122, g = 60117, E = 60129, y = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var f = Symbol.for;
    t = f("react.element"), n = f("react.portal"), Gt.Fragment = f("react.fragment"), a = f("react.strict_mode"), i = f("react.profiler"), o = f("react.provider"), l = f("react.context"), s = f("react.forward_ref"), c = f("react.suspense"), u = f("react.suspense_list"), d = f("react.memo"), h = f("react.lazy"), m = f("react.block"), p = f("react.server.block"), g = f("react.fundamental"), f("react.scope"), f("react.opaque.id"), E = f("react.debug_trace_mode"), f("react.offscreen"), y = f("react.legacy_hidden");
  }
  var x = typeof Symbol == "function" && Symbol.iterator, b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function v(K) {
    for (var re = arguments.length, _ = new Array(re > 1 ? re - 1 : 0), ue = 1; ue < re; ue++)
      _[ue - 1] = arguments[ue];
    S("error", K, _);
  }
  function S(K, re, _) {
    var ue = b.ReactDebugCurrentFrame, le = "";
    if (C) {
      var ge = k(C.type), ve = C._owner;
      le += function(Ne, Ae, Se) {
        var pe = "";
        if (Ae) {
          var ae = Ae.fileName, J = ae.replace(A, "");
          if (/^index\./.test(J)) {
            var Ve = ae.match(A);
            if (Ve) {
              var me = Ve[1];
              me && (J = me.replace(A, "") + "/" + J);
            }
          }
          pe = " (at " + J + ":" + Ae.lineNumber + ")";
        } else
          Se && (pe = " (created by " + Se + ")");
        return `
    in ` + (Ne || "Unknown") + pe;
      }(ge, C._source, ve && k(ve.type));
    }
    (le += ue.getStackAddendum()) !== "" && (re += "%s", _ = _.concat([le]));
    var xe = _.map(function(Ne) {
      return "" + Ne;
    });
    xe.unshift("Warning: " + re), Function.prototype.apply.call(console[K], console, xe);
  }
  var A = /^(.*)[\\\/]/;
  function k(K) {
    if (K == null)
      return null;
    if (typeof K.tag == "number" && v("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof K == "function")
      return K.displayName || K.name || null;
    if (typeof K == "string")
      return K;
    switch (K) {
      case Gt.Fragment:
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
        case l:
          return "Context.Consumer";
        case o:
          return "Context.Provider";
        case s:
          return ue = K, le = K.render, ge = "ForwardRef", ve = le.displayName || le.name || "", ue.displayName || (ve !== "" ? ge + "(" + ve + ")" : ge);
        case d:
          return k(K.type);
        case m:
          return k(K.render);
        case h:
          var re = (_ = K)._status === 1 ? _._result : null;
          if (re)
            return k(re);
      }
    var _, ue, le, ge, ve;
    return null;
  }
  var N = {};
  b.ReactDebugCurrentFrame;
  var C = null;
  function P(K) {
    C = K;
  }
  var D, T, z, V = b.ReactCurrentOwner, W = Object.prototype.hasOwnProperty, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(K, re, _, ue, le) {
    var ge, ve = {}, xe = null, Ne = null;
    for (ge in _ !== void 0 && (xe = "" + _), function(pe) {
      if (W.call(pe, "key")) {
        var ae = Object.getOwnPropertyDescriptor(pe, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return pe.key !== void 0;
    }(re) && (xe = "" + re.key), function(pe) {
      if (W.call(pe, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(pe, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return pe.ref !== void 0;
    }(re) && (Ne = re.ref, function(pe, ae) {
      if (typeof pe.ref == "string" && V.current && ae && V.current.stateNode !== ae) {
        var J = k(V.current.type);
        z[J] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(V.current.type), pe.ref), z[J] = !0);
      }
    }(re, le)), re)
      W.call(re, ge) && !F.hasOwnProperty(ge) && (ve[ge] = re[ge]);
    if (K && K.defaultProps) {
      var Ae = K.defaultProps;
      for (ge in Ae)
        ve[ge] === void 0 && (ve[ge] = Ae[ge]);
    }
    if (xe || Ne) {
      var Se = typeof K == "function" ? K.displayName || K.name || "Unknown" : K;
      xe && function(pe, ae) {
        var J = function() {
          D || (D = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        J.isReactWarning = !0, Object.defineProperty(pe, "key", { get: J, configurable: !0 });
      }(ve, Se), Ne && function(pe, ae) {
        var J = function() {
          T || (T = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        J.isReactWarning = !0, Object.defineProperty(pe, "ref", { get: J, configurable: !0 });
      }(ve, Se);
    }
    return function(pe, ae, J, Ve, me, Le, Oe) {
      var Ie = { $$typeof: t, type: pe, key: ae, ref: J, props: Oe, _owner: Le, _store: {} };
      return Object.defineProperty(Ie._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(Ie, "_self", { configurable: !1, enumerable: !1, writable: !1, value: Ve }), Object.defineProperty(Ie, "_source", { configurable: !1, enumerable: !1, writable: !1, value: me }), Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)), Ie;
    }(K, xe, Ne, le, ue, V.current, ve);
  }
  z = {};
  var q, j = b.ReactCurrentOwner;
  function Y(K) {
    C = K;
  }
  function H(K) {
    return typeof K == "object" && K !== null && K.$$typeof === t;
  }
  function U() {
    if (j.current) {
      var K = k(j.current.type);
      if (K)
        return `

Check the render method of \`` + K + "`.";
    }
    return "";
  }
  b.ReactDebugCurrentFrame, q = !1;
  var I = {};
  function Q(K, re) {
    if (K._store && !K._store.validated && K.key == null) {
      K._store.validated = !0;
      var _ = function(le) {
        var ge = U();
        if (!ge) {
          var ve = typeof le == "string" ? le : le.displayName || le.name;
          ve && (ge = `

Check the top-level render call using <` + ve + ">.");
        }
        return ge;
      }(re);
      if (!I[_]) {
        I[_] = !0;
        var ue = "";
        K && K._owner && K._owner !== j.current && (ue = " It was passed a child from " + k(K._owner.type) + "."), Y(K), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, ue), Y(null);
      }
    }
  }
  function ne(K, re) {
    if (typeof K == "object") {
      if (Array.isArray(K))
        for (var _ = 0; _ < K.length; _++) {
          var ue = K[_];
          H(ue) && Q(ue, re);
        }
      else if (H(K))
        K._store && (K._store.validated = !0);
      else if (K) {
        var le = function(xe) {
          if (xe === null || typeof xe != "object")
            return null;
          var Ne = x && xe[x] || xe["@@iterator"];
          return typeof Ne == "function" ? Ne : null;
        }(K);
        if (typeof le == "function" && le !== K.entries)
          for (var ge, ve = le.call(K); !(ge = ve.next()).done; )
            H(ge.value) && Q(ge.value, re);
      }
    }
  }
  function he(K) {
    var re, _ = K.type;
    if (_ != null && typeof _ != "string") {
      if (typeof _ == "function")
        re = _.propTypes;
      else {
        if (typeof _ != "object" || _.$$typeof !== s && _.$$typeof !== d)
          return;
        re = _.propTypes;
      }
      if (re) {
        var ue = k(_);
        (function(le, ge, ve, xe, Ne) {
          var Ae = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var Se in le)
            if (Ae(le, Se)) {
              var pe = void 0;
              try {
                if (typeof le[Se] != "function") {
                  var ae = Error((xe || "React class") + ": " + ve + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof le[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ae.name = "Invariant Violation", ae;
                }
                pe = le[Se](ge, Se, xe, ve, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (J) {
                pe = J;
              }
              !pe || pe instanceof Error || (P(Ne), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", xe || "React class", ve, Se, typeof pe), P(null)), pe instanceof Error && !(pe.message in N) && (N[pe.message] = !0, P(Ne), v("Failed %s type: %s", ve, pe.message), P(null));
            }
        })(re, K.props, "prop", ue, K);
      } else
        _.PropTypes === void 0 || q || (q = !0, v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k(_) || "Unknown"));
      typeof _.getDefaultProps != "function" || _.getDefaultProps.isReactClassApproved || v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Pe(K, re, _, ue, le, ge) {
    var ve = function(J) {
      return typeof J == "string" || typeof J == "function" || J === Gt.Fragment || J === i || J === E || J === a || J === c || J === u || J === y || typeof J == "object" && J !== null && (J.$$typeof === h || J.$$typeof === d || J.$$typeof === o || J.$$typeof === l || J.$$typeof === s || J.$$typeof === g || J.$$typeof === m || J[0] === p);
    }(K);
    if (!ve) {
      var xe = "";
      (K === void 0 || typeof K == "object" && K !== null && Object.keys(K).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Ne, Ae = function(J) {
        return J !== void 0 ? `

Check your code at ` + J.fileName.replace(/^.*[\\\/]/, "") + ":" + J.lineNumber + "." : "";
      }(le);
      xe += Ae || U(), K === null ? Ne = "null" : Array.isArray(K) ? Ne = "array" : K !== void 0 && K.$$typeof === t ? (Ne = "<" + (k(K.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : Ne = typeof K, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ne, xe);
    }
    var Se = L(K, re, _, le, ge);
    if (Se == null)
      return Se;
    if (ve) {
      var pe = re.children;
      if (pe !== void 0)
        if (ue)
          if (Array.isArray(pe)) {
            for (var ae = 0; ae < pe.length; ae++)
              ne(pe[ae], K);
            Object.freeze && Object.freeze(pe);
          } else
            v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ne(pe, K);
    }
    return K === Gt.Fragment ? function(J) {
      for (var Ve = Object.keys(J.props), me = 0; me < Ve.length; me++) {
        var Le = Ve[me];
        if (Le !== "children" && Le !== "key") {
          Y(J), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), Y(null);
          break;
        }
      }
      J.ref !== null && (Y(J), v("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
    }(Se) : he(Se), Se;
  }
  var ke = function(K, re, _) {
    return Pe(K, re, _, !1);
  }, X = function(K, re, _) {
    return Pe(K, re, _, !0);
  };
  Gt.jsx = ke, Gt.jsxs = X;
}(), Tn.exports = ns;
var ni, cu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
ni = cu, function() {
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
var as = cu.exports;
const rs = (e, t, n) => {
  let a = null;
  return function(...i) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, i);
    }, t);
  };
}, Py = ({ content: e }) => Tn.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), Ny = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Ly = $.createContext({ getTooltipData: () => Ny });
function uu(e = "DEFAULT_TOOLTIP_ID") {
  return $.useContext(Ly).getTooltipData(e);
}
const is = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: i = 10, strategy: o = "absolute", middlewares: l = [Sy(Number(i)), Ay(), Ty({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = l;
  return n ? (s.push({ name: "arrow", options: c = { element: n, padding: 5 }, async fn(u) {
    const { element: d, padding: h = 0 } = c || {}, { x: m, y: p, placement: g, rects: E, platform: y } = u;
    if (d == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const f = Jc(h), x = { x: m, y: p }, b = ga(g), v = co(b), S = await y.getDimensions(d), A = b === "y" ? "top" : "left", k = b === "y" ? "bottom" : "right", N = E.reference[v] + E.reference[b] - x[b] - E.floating[v], C = x[b] - E.reference[b], P = await (y.getOffsetParent == null ? void 0 : y.getOffsetParent(d));
    let D = P ? b === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0;
    D === 0 && (D = E.floating[v]);
    const T = N / 2 - C / 2, z = f[A], V = D - S[v] - f[k], W = D / 2 - S[v] / 2 + T, F = Oi(z, W, V), L = ya(g) != null && W != F && E.reference[v] / 2 - (W < z ? f[A] : f[k]) - S[v] / 2 < 0;
    return { [b]: x[b] - (L ? W < z ? z - W : V - W : 0), data: { [b]: F, centerOffset: W - F } };
  } }), ts(e, t, { placement: a, strategy: o, middleware: s }).then(({ x: u, y: d, placement: h, middlewareData: m }) => {
    var p, g;
    const E = { left: `${u}px`, top: `${d}px` }, { x: y, y: f } = (p = m.arrow) !== null && p !== void 0 ? p : { x: 0, y: 0 };
    return { tooltipStyles: E, tooltipArrowStyles: { left: y != null ? `${y}px` : "", top: f != null ? `${f}px` : "", right: "", bottom: "", [(g = { top: "bottom", right: "left", bottom: "top", left: "right" }[h.split("-")[0]]) !== null && g !== void 0 ? g : "bottom"]: "-4px" } };
  })) : ts(e, t, { placement: "bottom", strategy: o, middleware: s }).then(({ x: u, y: d }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {} }));
  var c;
};
var mn = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const os = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: i, anchorSelect: o, place: l = "top", offset: s = 10, events: c = ["hover"], positionStrategy: u = "absolute", middlewares: d, wrapper: h, children: m = null, delayShow: p = 0, delayHide: g = 0, float: E = !1, noArrow: y = !1, clickable: f = !1, closeOnEsc: x = !1, style: b, position: v, afterShow: S, afterHide: A, content: k, html: N, isOpen: C, setIsOpen: P, activeAnchor: D, setActiveAnchor: T }) => {
  const z = $.useRef(null), V = $.useRef(null), W = $.useRef(null), F = $.useRef(null), [L, q] = $.useState({}), [j, Y] = $.useState({}), [H, U] = $.useState(!1), [I, Q] = $.useState(!1), ne = $.useRef(!1), he = $.useRef(null), { anchorRefs: Pe, setActiveAnchor: ke } = uu(e), X = $.useRef(!1), [K, re] = $.useState([]), _ = $.useRef(!1);
  $.useLayoutEffect(() => (_.current = !0, () => {
    _.current = !1;
  }), []), $.useEffect(() => {
    if (!H) {
      const me = setTimeout(() => {
        Q(!1);
      }, 150);
      return () => {
        clearTimeout(me);
      };
    }
    return () => null;
  }, [H]);
  const ue = (me) => {
    _.current && (me && Q(!0), setTimeout(() => {
      _.current && (P == null || P(me), C === void 0 && U(me));
    }, 10));
  };
  $.useEffect(() => {
    if (C === void 0)
      return () => null;
    C && Q(!0);
    const me = setTimeout(() => {
      U(C);
    }, 10);
    return () => {
      clearTimeout(me);
    };
  }, [C]), $.useEffect(() => {
    H !== ne.current && (ne.current = H, H ? S == null || S() : A == null || A());
  }, [H]);
  const le = (me = g) => {
    F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      X.current || ue(!1);
    }, me);
  }, ge = (me) => {
    var Le;
    if (!me)
      return;
    p ? (W.current && clearTimeout(W.current), W.current = setTimeout(() => {
      ue(!0);
    }, p)) : ue(!0);
    const Oe = (Le = me.currentTarget) !== null && Le !== void 0 ? Le : me.target;
    T(Oe), ke({ current: Oe }), F.current && clearTimeout(F.current);
  }, ve = () => {
    f ? le(g || 100) : g ? le() : ue(!1), W.current && clearTimeout(W.current);
  }, xe = ({ x: me, y: Le }) => {
    is({ place: l, offset: s, elementReference: { getBoundingClientRect: () => ({ x: me, y: Le, width: 0, height: 0, top: Le, left: me, right: me, bottom: Le }) }, tooltipReference: z.current, tooltipArrowReference: V.current, strategy: u, middlewares: d }).then((Oe) => {
      Object.keys(Oe.tooltipStyles).length && q(Oe.tooltipStyles), Object.keys(Oe.tooltipArrowStyles).length && Y(Oe.tooltipArrowStyles);
    });
  }, Ne = (me) => {
    if (!me)
      return;
    const Le = me, Oe = { x: Le.clientX, y: Le.clientY };
    xe(Oe), he.current = Oe;
  }, Ae = (me) => {
    ge(me), g && le();
  }, Se = (me) => {
    const Le = document.querySelector(`[id='${i}']`);
    Le != null && Le.contains(me.target) || K.some((Oe) => Oe.contains(me.target)) || ue(!1);
  }, pe = (me) => {
    me.key === "Escape" && ue(!1);
  }, ae = rs(ge, 50), J = rs(ve, 50);
  $.useEffect(() => {
    var me, Le;
    const Oe = new Set(Pe);
    K.forEach((te) => {
      Oe.add({ current: te });
    });
    const Ie = document.querySelector(`[id='${i}']`);
    Ie && Oe.add({ current: Ie }), x && window.addEventListener("keydown", pe);
    const Be = [];
    c.find((te) => te === "click") && (window.addEventListener("click", Se), Be.push({ event: "click", listener: Ae })), c.find((te) => te === "hover") && (Be.push({ event: "mouseenter", listener: ae }, { event: "mouseleave", listener: J }, { event: "focus", listener: ae }, { event: "blur", listener: J }), E && Be.push({ event: "mousemove", listener: Ne }));
    const Ye = () => {
      X.current = !0;
    }, rt = () => {
      X.current = !1, ve();
    };
    return f && ((me = z.current) === null || me === void 0 || me.addEventListener("mouseenter", Ye), (Le = z.current) === null || Le === void 0 || Le.addEventListener("mouseleave", rt)), Be.forEach(({ event: te, listener: et }) => {
      Oe.forEach((ze) => {
        var He;
        (He = ze.current) === null || He === void 0 || He.addEventListener(te, et);
      });
    }), () => {
      var te, et;
      c.find((ze) => ze === "click") && window.removeEventListener("click", Se), x && window.removeEventListener("keydown", pe), f && ((te = z.current) === null || te === void 0 || te.removeEventListener("mouseenter", Ye), (et = z.current) === null || et === void 0 || et.removeEventListener("mouseleave", rt)), Be.forEach(({ event: ze, listener: He }) => {
        Oe.forEach((wt) => {
          var dt;
          (dt = wt.current) === null || dt === void 0 || dt.removeEventListener(ze, He);
        });
      });
    };
  }, [I, Pe, K, x, c]), $.useEffect(() => {
    let me = o ?? "";
    !me && e && (me = `[data-tooltip-id='${e}']`);
    const Le = new MutationObserver((Oe) => {
      const Ie = [];
      Oe.forEach((Be) => {
        if (Be.type === "attributes" && Be.attributeName === "data-tooltip-id" && Be.target.getAttribute("data-tooltip-id") === e && Ie.push(Be.target), Be.type === "childList" && (D && [...Be.removedNodes].some((Ye) => !!Ye.contains(D) && (Q(!1), ue(!1), T(null), !0)), me))
          try {
            const Ye = [...Be.addedNodes].filter((rt) => rt.nodeType === 1);
            Ie.push(...Ye.filter((rt) => rt.matches(me))), Ie.push(...Ye.flatMap((rt) => [...rt.querySelectorAll(me)]));
          } catch {
          }
      }), Ie.length && re((Be) => [...Be, ...Ie]);
    });
    return Le.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Le.disconnect();
    };
  }, [e, o, D]), $.useEffect(() => {
    v ? xe(v) : E ? he.current && xe(he.current) : is({ place: l, offset: s, elementReference: D, tooltipReference: z.current, tooltipArrowReference: V.current, strategy: u, middlewares: d }).then((me) => {
      _.current && (Object.keys(me.tooltipStyles).length && q(me.tooltipStyles), Object.keys(me.tooltipArrowStyles).length && Y(me.tooltipArrowStyles));
    });
  }, [H, D, k, N, l, s, u, v]), $.useEffect(() => {
    var me;
    const Le = document.querySelector(`[id='${i}']`), Oe = [...K, Le];
    D && Oe.includes(D) || T((me = K[0]) !== null && me !== void 0 ? me : Le);
  }, [i, K, D]), $.useEffect(() => () => {
    W.current && clearTimeout(W.current), F.current && clearTimeout(F.current);
  }, []), $.useEffect(() => {
    let me = o;
    if (!me && e && (me = `[data-tooltip-id='${e}']`), me)
      try {
        const Le = Array.from(document.querySelectorAll(me));
        re(Le);
      } catch {
        re([]);
      }
  }, [e, o]);
  const Ve = !!(N || k || m) && H && Object.keys(L).length > 0;
  return I ? Tn.exports.jsxs(h, { id: e, role: "tooltip", className: as("react-tooltip", mn.tooltip, mn[a], t, { [mn.show]: Ve, [mn.fixed]: u === "fixed", [mn.clickable]: f }), style: { ...b, ...L }, ref: z, children: [N && Tn.exports.jsx(Py, { content: N }) || k || m, Tn.exports.jsx(h, { className: as("react-tooltip-arrow", mn.arrow, n, { [mn["no-arrow"]]: y }), style: j, ref: V })] }) : null;
}, Oy = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: i, className: o, classNameArrow: l, variant: s = "dark", place: c = "top", offset: u = 10, wrapper: d = "div", children: h = null, events: m = ["hover"], positionStrategy: p = "absolute", middlewares: g, delayShow: E = 0, delayHide: y = 0, float: f = !1, noArrow: x = !1, clickable: b = !1, closeOnEsc: v = !1, style: S, position: A, isOpen: k, setIsOpen: N, afterShow: C, afterHide: P }) => {
  const [D, T] = $.useState(a), [z, V] = $.useState(i), [W, F] = $.useState(c), [L, q] = $.useState(s), [j, Y] = $.useState(u), [H, U] = $.useState(E), [I, Q] = $.useState(y), [ne, he] = $.useState(f), [Pe, ke] = $.useState(d), [X, K] = $.useState(m), [re, _] = $.useState(p), [ue, le] = $.useState(null), { anchorRefs: ge, activeAnchor: ve } = uu(e), xe = (Se) => Se == null ? void 0 : Se.getAttributeNames().reduce((pe, ae) => {
    var J;
    return ae.startsWith("data-tooltip-") && (pe[ae.replace(/^data-tooltip-/, "")] = (J = Se == null ? void 0 : Se.getAttribute(ae)) !== null && J !== void 0 ? J : null), pe;
  }, {}), Ne = (Se) => {
    const pe = { place: (ae) => {
      var J;
      F((J = ae) !== null && J !== void 0 ? J : c);
    }, content: (ae) => {
      T(ae ?? a);
    }, html: (ae) => {
      V(ae ?? i);
    }, variant: (ae) => {
      var J;
      q((J = ae) !== null && J !== void 0 ? J : s);
    }, offset: (ae) => {
      Y(ae === null ? u : Number(ae));
    }, wrapper: (ae) => {
      var J;
      ke((J = ae) !== null && J !== void 0 ? J : d);
    }, events: (ae) => {
      const J = ae == null ? void 0 : ae.split(" ");
      K(J ?? m);
    }, "position-strategy": (ae) => {
      var J;
      _((J = ae) !== null && J !== void 0 ? J : p);
    }, "delay-show": (ae) => {
      U(ae === null ? E : Number(ae));
    }, "delay-hide": (ae) => {
      Q(ae === null ? y : Number(ae));
    }, float: (ae) => {
      he(ae === null ? f : !!ae);
    } };
    Object.values(pe).forEach((ae) => ae(null)), Object.entries(Se).forEach(([ae, J]) => {
      var Ve;
      (Ve = pe[ae]) === null || Ve === void 0 || Ve.call(pe, J);
    });
  };
  $.useEffect(() => {
    T(a);
  }, [a]), $.useEffect(() => {
    V(i);
  }, [i]), $.useEffect(() => {
    F(c);
  }, [c]), $.useEffect(() => {
    var Se;
    const pe = new Set(ge);
    let ae = n;
    if (!ae && e && (ae = `[data-tooltip-id='${e}']`), ae)
      try {
        document.querySelectorAll(ae).forEach((Oe) => {
          pe.add({ current: Oe });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const J = document.querySelector(`[id='${t}']`);
    if (J && pe.add({ current: J }), !pe.size)
      return () => null;
    const Ve = (Se = ue ?? J) !== null && Se !== void 0 ? Se : ve.current, me = new MutationObserver((Oe) => {
      Oe.forEach((Ie) => {
        var Be;
        if (!Ve || Ie.type !== "attributes" || !(!((Be = Ie.attributeName) === null || Be === void 0) && Be.startsWith("data-tooltip-")))
          return;
        const Ye = xe(Ve);
        Ne(Ye);
      });
    }), Le = { attributes: !0, childList: !1, subtree: !1 };
    if (Ve) {
      const Oe = xe(Ve);
      Ne(Oe), me.observe(Ve, Le);
    }
    return () => {
      me.disconnect();
    };
  }, [ge, ve, ue, t, n]);
  const Ae = { id: e, anchorId: t, anchorSelect: n, className: o, classNameArrow: l, content: D, html: z, place: W, variant: L, offset: j, wrapper: Pe, events: X, positionStrategy: re, middlewares: g, delayShow: H, delayHide: I, float: ne, noArrow: x, clickable: b, closeOnEsc: v, style: S, position: A, isOpen: k, setIsOpen: N, afterShow: C, afterHide: P, activeAnchor: ue, setActiveAnchor: (Se) => le(Se) };
  return h ? Tn.exports.jsx(os, { ...Ae, children: h }) : Tn.exports.jsx(os, { ...Ae });
}, mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: ad,
  curveBasisClosed: rd,
  curveBasisOpen: id,
  curveBundle: od,
  curveCardinal: ld,
  curveCardinalClosed: sd,
  curveCardinalOpen: cd,
  curveCatmullRom: ud,
  curveCatmullRomClosed: dd,
  curveCatmullRomOpen: md,
  curveLinear: wr,
  curveLinearClosed: si,
  curveMonotoneX: Ha,
  curveMonotoneY: fd,
  curveNatural: hd,
  curveStep: pd,
  curveStepAfter: gd,
  curveStepBefore: yd
}, Symbol.toStringTag, { value: "Module" })), _y = (e) => {
  var S;
  const { xScale: t, yScale: n, yMax: a, xMax: i, handleTooltipMouseOver: o, handleTooltipMouseOff: l, isDebug: s, children: c } = e;
  let { transformedData: u, config: d, handleLineType: h, parseDate: m, formatDate: p, formatNumber: g, seriesHighlight: E, colorScale: y, rawData: f } = $.useContext(De);
  const x = d.brush.active && ((S = d.brush.data) != null && S.length) ? d.brush.data : u;
  if (!x)
    return;
  const b = (A) => d.xAxis.type === "date" ? t(m(A[d.xAxis.dataKey], !1)) : t(A[d.xAxis.dataKey]), v = (A, k, N = void 0) => n(A[N.dataKey]);
  return x && /* @__PURE__ */ r.createElement("svg", null, /* @__PURE__ */ r.createElement(Bt, { component: "AreaChart" }, /* @__PURE__ */ r.createElement(be, { className: "area-chart", key: "area-wrapper", left: Number(d.yAxis.size) }, (d.runtime.areaSeriesKeys || d.series).map((A, k) => {
    let N = x.map((T) => ({
      [d.xAxis.dataKey]: T[d.xAxis.dataKey],
      [A.dataKey]: T[A.dataKey]
    })), C = mo[A.lineType], P = d.legend.behavior === "highlight" && E.length > 0 && E.indexOf(A.dataKey) === -1, D = d.legend.behavior === "highlight" || E.length === 0 || E.indexOf(A.dataKey) !== -1;
    return d.xAxis.type === "date" ? x.map((T) => t(m(T[d.xAxis.dataKey]))) : x.map((T) => t(T[d.xAxis.dataKey])), /* @__PURE__ */ r.createElement(r.Fragment, { key: k }, /* @__PURE__ */ r.createElement(
      ln,
      {
        data: N,
        x: (T) => b(T),
        y: (T) => v(T, k, A),
        stroke: D ? y ? y(d.runtime.seriesLabels ? d.runtime.seriesLabels[A.dataKey] : A.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: C,
        strokeDasharray: A.type ? h(A.type) : 0
      }
    ), /* @__PURE__ */ r.createElement(
      Id,
      {
        key: "area-chart",
        fill: D ? y ? y(d.runtime.seriesLabels ? d.runtime.seriesLabels[A.dataKey] : A.dataKey) : "#000" : "transparent",
        fillOpacity: P ? 0.25 : 0.5,
        data: N,
        x: (T) => b(T),
        y: (T) => v(T, k, A),
        yScale: n,
        curve: C,
        strokeDasharray: A.type ? h(A.type) : 0
      }
    ));
  }), /* @__PURE__ */ r.createElement(Ot, { width: Number(i), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (A) => o(A, f), onMouseLeave: l }))));
}, My = $.memo(_y), Ar = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, Dy = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: i, handleTooltipMouseOff: o, isDebug: l }) => {
  var E;
  let { transformedData: s, config: c, seriesHighlight: u, colorScale: d, rawData: h } = $.useContext(De);
  const m = c.brush.active && ((E = c.brush.data) != null && E.length) ? c.brush.data : s;
  if (!m)
    return;
  const p = (y) => {
    if (c.xAxis.type === "categorical")
      return e(y);
    if (c.xAxis.type === "date") {
      let f = new Date(y);
      return e(f);
    }
  }, g = 2;
  return m && /* @__PURE__ */ r.createElement("svg", { height: Number(n) }, /* @__PURE__ */ r.createElement(Bt, { component: "AreaChartStacked" }, /* @__PURE__ */ r.createElement(be, { className: "area-chart", key: "area-wrapper", left: Number(c.yAxis.size) + g / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ r.createElement(
    Qd,
    {
      data: m,
      keys: c.runtime.areaSeriesKeys.map((y) => y.dataKey) || c.series.map((y) => y.dataKey),
      x0: (y) => p(y.data[c.xAxis.dataKey]),
      y0: (y) => Number(t(y[0])),
      y1: (y) => Number(t(y[1])),
      curve: mo[Ar[c.stackedAreaChartLineType]]
    },
    ({ stacks: y, path: f }) => y.map((x, b) => {
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
  ), /* @__PURE__ */ r.createElement(Ot, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (y) => i(y, h), onMouseLeave: o }))));
}, $y = $.memo(Dy), xa = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: i, formatDate: o, setSeriesHighlight: l } = $.useContext(De), { orientation: s } = e, [c, u] = $.useState(null), d = s === "horizontal", h = 1, m = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, p = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, g = e.yAxis.labelPlacement === "Below Bar", E = e.yAxis.displayNumbersOnBar, y = e.orientation === "horizontal" ? "yAxis" : "xAxis", f = e.barStyle === "rounded", x = e.visualizationSubType === "stacked", b = e.tipRounding, v = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", S = e.runtime.seriesKeys.length, A = { small: 16, medium: 18, large: 20 }, k = Object.keys(e.runtime.seriesLabels).length > 1;
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
    generateIconSize: (L) => L < 4 ? 1 : L < 5 ? 4 : L < 10 ? 6 : L < 15 ? 7 : L < 20 || L < 90 ? 8 : 0,
    isHorizontal: d,
    barBorderWidth: h,
    lollipopBarWidth: m,
    lollipopShapeSize: p,
    isLabelBelowBar: g,
    displayNumbersOnBar: E,
    section: y,
    isRounded: f,
    isStacked: x,
    tipRounding: b,
    radius: v,
    stackCount: S,
    fontSize: A,
    hasMultipleSeries: k,
    applyRadius: (L) => {
      if (L == null || !f)
        return {};
      let q = {};
      return (x && L + 1 === S || !x) && (q = d ? { borderRadius: `0 ${v}  ${v}  0` } : { borderRadius: `${v} ${v} 0 0` }), !x && L === -1 && (q = d ? { borderRadius: `${v} 0  0 ${v} ` } : { borderRadius: ` 0  0 ${v} ${v}` }), b === "full" && x && L === 0 && S > 1 && (q = d ? { borderRadius: `${v} 0 0 ${v}` } : { borderRadius: `0 0 ${v} ${v}` }), b === "full" && (x && L === 0 && S === 1 || !x) && (q = { borderRadius: v }), q;
    },
    updateBars: (L) => {
      if (e.visualizationType !== "Bar" && !d)
        return L;
      const q = [...L];
      let j;
      const Y = {
        stacked: e.barHeight,
        lollipop: m
      };
      x ? j = Y.stacked : j = Y[e.isLollipopChart ? "lollipop" : "stacked"] * S;
      const H = g ? A[e.fontSize] * 1.2 : 0;
      let U = Number(e.barSpace), I = q.length * (j + H + U);
      return d && (e.heights.horizontal = I), q.map((Q, ne) => {
        let he = 0;
        return Q.index !== 0 && (he = (j + U + H) * ne), { ...Q, y: he, height: j };
      });
    },
    assignColorsToValues: (L, q, j) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return j;
      const Y = e.customColors ?? t[e.palette], H = n.map((ne) => ne[e.legend.colorCode]);
      let U = /* @__PURE__ */ new Map(), I = [];
      for (let ne = 0; ne < H.length; ne++)
        U.has(H[ne]) || U.set(H[ne], Y[U.size % Y.length]), I.push(U.get(H[ne]));
      for (; I.length < L; )
        I = I.concat(I);
      return I[q];
    },
    getHighlightedBarColorByValue: (L) => {
      const q = e == null ? void 0 : e.highlightedBarValues.find((j) => {
        if (j.value)
          return e.xAxis.type === "date" ? o(i(j.value)) === L : j.value === L;
      });
      return q != null && q.color ? q.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (L) => {
      const q = e == null ? void 0 : e.highlightedBarValues.filter((j) => {
        if (j.value)
          return e.xAxis.type === "date" ? o(i(j.value)) === L : j.value === L;
      })[0];
      return q != null && q.color ? q : !1;
    },
    getAdditionalColumn: (L, q) => {
      if (!q)
        return "";
      const j = e.columns, Y = [];
      let H = "";
      const U = n.find((I) => I[e.xAxis.dataKey] === q) || {};
      return Object.keys(j).forEach((I) => {
        if (L && e.columns[I].series && e.columns[I].series !== L)
          return;
        const Q = {
          addColPrefix: e.columns[I].prefix,
          addColSuffix: e.columns[I].suffix,
          addColRoundTo: e.columns[I].roundToPlace ? e.columns[I].roundToPlace : "",
          addColCommas: e.columns[I].commas
        }, ne = Ss(U[e.columns[I].name], "left", !0, e, Q);
        e.columns[I].tooltips && Y.push([e.columns[I].label, ne]);
      }), Y.forEach((I) => {
        H += `${I[0]} : ${I[1]} <br/>`;
      }), H;
    },
    hoveredBar: c,
    setHoveredBar: u,
    onMouseOverBar: (L, q) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && q && l([q]), u(L);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && l([]);
    }
  };
}, va = $.createContext(null), fo = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: n = 1, yMax: a, handleTooltipMouseOff: i, handleTooltipMouseOver: o, handleTooltipClick: l, tooltipData: s, showTooltip: c, hideTooltip: u }) => {
  const { parseDate: d, config: h } = $.useContext(De), { runtime: m, regions: p, visualizationType: g, orientation: E, xAxis: y } = h;
  let f, x, b;
  if (p && E === "vertical")
    return p.map((v) => {
      if (y.type === "date" && v.fromType !== "Previous Days" && (f = e(d(v.from).getTime()), x = e(d(v.to).getTime()), b = x - f), y.type === "categorical" && (f = e(v.from), x = e(v.to), b = x - f), (g === "Bar" || h.visualizationType === "Combo") && y.type === "date" && (f = v.fromType !== "Previous Days" ? e(d(v.from).getTime()) - t * n / 2 : null, x = v.toType !== "Last Date" ? e(d(v.to).getTime()) + t * n / 2 : null, b = x - f), (g === "Bar" || h.visualizationType === "Combo") && h.xAxis.type === "categorical" && (f = e(v.from), x = e(v.to), b = x - f), v.fromType === "Previous Days") {
        x = v.toType !== "Last Date" ? e(d(v.to).getTime()) + t * n / 2 : null;
        let k = e.domain(), N = Ns((W) => W).left, C, P = Number(v.from), D = v.toType === "Last Date" ? k[k.length - 1] : v.to, T = new Date(D);
        f = new Date(T.setDate(T.getDate() - P)).getTime();
        let z = f, V = N(k, z);
        if (V === 0)
          C = k[0];
        else if (V === k.length)
          C = k[k.length - 1];
        else {
          let W = k[V - 1], F = k[V];
          C = z - W > F - z ? F : W;
        }
        f = Number(e(C) - (g === "Bar" || g === "Combo" ? t * n / 2 : 0)), b = x - f;
      }
      if (v.toType === "Last Date") {
        let k = e.domain(), N = k[k.length - 1];
        x = Number(e(N) + (g === "Bar" || g === "Combo" ? t * n / 2 : 0)), b = x - f;
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
      ), A = () => /* @__PURE__ */ r.createElement("rect", { x: f, y: 0, width: b, height: a, fill: v.background, opacity: 0.3 });
      return /* @__PURE__ */ r.createElement(
        be,
        {
          className: "regions regions-group--line",
          left: h.visualizationType === "Bar" || h.visualizationType === "Combo" ? 0 : (h == null ? void 0 : h.visualizationType) === "Line" ? Number(m.yAxis.size) : 0,
          key: v.label,
          onMouseMove: o,
          onMouseLeave: i,
          handleTooltipClick: l,
          tooltipData: JSON.stringify(s),
          showTooltip: c
        },
        /* @__PURE__ */ r.createElement(S, null),
        /* @__PURE__ */ r.createElement(A, null),
        /* @__PURE__ */ r.createElement($e, { x: f + b / 2, y: 5, fill: v.color, verticalAnchor: "start", textAnchor: "middle" }, v.label)
      );
    });
}, zy = () => {
  var k;
  const [e, t] = $.useState(0), { xScale: n, yScale: a, xMax: i, yMax: o } = $.useContext(va), { transformedData: l, colorScale: s, seriesHighlight: c, config: u, formatNumber: d, formatDate: h, parseDate: m, setSharedFilter: p } = $.useContext(De), { isHorizontal: g, barBorderWidth: E, applyRadius: y, hoveredBar: f, getAdditionalColumn: x, onMouseLeaveBar: b, onMouseOverBar: v } = xa(), { orientation: S } = u, A = u.brush.active && ((k = u.brush.data) != null && k.length) ? u.brush.data : l;
  return u.visualizationSubType === "stacked" && !g && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(tm, { data: A, keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys, x: (N) => N[u.runtime.xAxis.dataKey], xScale: n, yScale: a, color: s }, (N) => N.reverse().map(
    (C) => C.bars.map((P) => {
      let D = u.legend.behavior === "highlight" && c.length > 0 && c.indexOf(P.key) === -1, T = u.legend.behavior === "highlight" || c.length === 0 || c.indexOf(P.key) !== -1, z = i / C.bars.length, V = z * (u.barThickness || 0.8), W = z * (1 - (u.barThickness || 0.8)) / 2;
      const F = u.runtime.xAxis.type === "date" ? h(m(A[P.index][u.runtime.xAxis.dataKey])) : A[P.index][u.runtime.xAxis.dataKey], L = d(P.bar ? P.bar.data[P.key] : 0, "left");
      if (!L)
        return;
      const q = y(C.index), j = u.runtime.xAxis.label ? `${u.runtime.xAxis.label}: ${F}` : F, Y = x(f), H = `${u.runtime.seriesLabels[P.key]}: ${L}`, U = `<ul>
                  <li class="tooltip-heading"">${j}</li>
                  <li class="tooltip-body ">${H}</li>
                  <li class="tooltip-body ">${Y}</li>
                    </li></ul>`;
      return t(V), /* @__PURE__ */ r.createElement(be, { key: `${C.index}--${P.index}--${S}` }, /* @__PURE__ */ r.createElement("style", null, `
                           #barStack${C.index}-${P.index} rect,
                           #barStack${C.index}-${P.index} foreignObject div{
                            animation-delay: ${C.index * 0.5}s;
                            transform-origin: ${V / 2}px ${P.y + P.height}px
                          }
                        `), /* @__PURE__ */ r.createElement(be, { key: `bar-stack-${C.index}-${P.index}`, id: `barStack${C.index}-${P.index}`, className: "stack vertical" }, /* @__PURE__ */ r.createElement($e, { display: u.labels && T ? "block" : "none", opacity: D ? 0.5 : 1, x: z * P.index + W, y: P.y - 5, fill: "#000", textAnchor: "middle" }, L), /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => v(F, P.key),
          onMouseLeave: b,
          key: `bar-stack-${C.index}-${P.index}`,
          x: z * P.index + W,
          y: P.y,
          width: V,
          height: P.height,
          display: T ? "block" : "none",
          "data-tooltip-html": U,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          onClick: (I) => {
            I.preventDefault(), p && (P[u.xAxis.dataKey] = F, p(u.uid, P));
          }
        },
        /* @__PURE__ */ r.createElement(
          "div",
          {
            style: {
              transition: "all 0.2s linear",
              opacity: D ? 0.2 : 1,
              width: V,
              height: P.height,
              background: s(u.runtime.seriesLabels[P.key]),
              border: `${u.barHasBorder === "true" ? E : 0}px solid #333`,
              ...q
            }
          }
        )
      )));
    })
  )), /* @__PURE__ */ r.createElement(fo, { xScale: n, yMax: o, barWidth: e, totalBarsInGroup: 1 }));
}, Ry = () => {
  const { yMax: e, yScale: t, xScale: n } = $.useContext(va), {
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
  } = $.useContext(De), {
    applyRadius: p,
    barBorderWidth: g,
    displayNumbersOnBar: E,
    fontSize: y,
    getAdditionalColumn: f,
    hoveredBar: x,
    isHorizontal: b,
    isLabelBelowBar: v,
    onMouseLeaveBar: S,
    onMouseOverBar: A,
    updateBars: k
  } = xa(), { orientation: N, visualizationSubType: C } = o;
  return o.visualizationSubType === "stacked" && b && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(rm, { data: m, keys: o.runtime.barSeriesKeys || o.runtime.seriesKeys, height: e, y: (P) => P[o.runtime.yAxis.dataKey], xScale: n, yScale: t, color: i, offset: "none" }, (P) => P.map(
    (D) => k(D.bars).map((T, z) => {
      let V = o.legend.behavior === "highlight" && d.length > 0 && d.indexOf(T.key) === -1, W = o.legend.behavior === "highlight" || d.length === 0 || d.indexOf(T.key) !== -1;
      o.barHeight = Number(o.barHeight);
      let F = "#000000";
      const L = s(m[T.index][T.key], "left"), q = o.runtime.yAxis.type === "date" ? l(u(m[T.index][o.runtime.originalXAxis.dataKey])) : m[T.index][o.runtime.originalXAxis.dataKey], j = p(D.index);
      let Y = o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${q}` : q, H = c(L, `normal ${y[o.fontSize]}px sans-serif`);
      const U = f(x), I = `${o.runtime.seriesLabels[T.key]}: ${L}`, Q = `<ul>
                  <li class="tooltip-heading"">${Y}</li>
                  <li class="tooltip-body ">${I}</li>
                  <li class="tooltip-body ">${U}</li>
                    </li></ul>`;
      return Ft.contrast(F, i(o.runtime.seriesLabels[T.key])) < 4.9 && (F = "#FFFFFF"), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                         #barStack${D.index}-${T.index} rect,
                         #barStack${D.index}-${T.index} foreignObject div{
                          animation-delay: ${D.index * 0.5}s;
                          transform-origin: ${T.x}px
                        }
                      `), /* @__PURE__ */ r.createElement(be, { key: z, id: `barStack${D.index}-${T.index}`, className: "stack horizontal" }, /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => A(q, T.key),
          onMouseLeave: S,
          key: `barstack-horizontal-${D.index}-${T.index}-${z}`,
          className: `animated-chart group ${a ? "animated" : ""}`,
          x: T.x,
          y: T.y,
          style: { transition: "all 0.2s linear" },
          width: T.width,
          height: T.height,
          opacity: V ? 0.2 : 1,
          display: W ? "block" : "none",
          "data-tooltip-html": Q,
          "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
          onClick: (ne) => {
            ne.preventDefault(), h && (T[o.xAxis.dataKey] = L, h(o.uid, T));
          }
        },
        /* @__PURE__ */ r.createElement("div", { style: { width: T.width, height: T.height, background: i(o.runtime.seriesLabels[T.key]), border: `${o.barHasBorder === "true" ? g : 0}px solid #333`, ...j } })
      ), N === "horizontal" && C === "stacked" && v && D.index === 0 && !o.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
        $e,
        {
          x: `${T.x + (o.isLollipopChart ? 15 : 5)}`,
          y: T.y + T.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        q
      ), E && H < T.width && /* @__PURE__ */ r.createElement(
        $e,
        {
          display: W ? "block" : "none",
          x: T.x + D.bars[T.index].width / 2,
          y: T.y + T.height / 2,
          fill: F,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        L
      )));
    })
  )));
}, Fy = () => {
  var Y;
  const { xScale: e, yScale: t, xMax: n, yMax: a, seriesScale: i } = $.useContext(va), [o, l] = $.useState(0), [s, c] = $.useState(0), {
    applyRadius: u,
    assignColorsToValues: d,
    barBorderWidth: h,
    generateIconSize: m,
    getAdditionalColumn: p,
    getHighlightedBarByValue: g,
    getHighlightedBarColorByValue: E,
    lollipopBarWidth: y,
    lollipopShapeSize: f,
    onMouseLeaveBar: x,
    onMouseOverBar: b,
    section: v
  } = xa(), {
    colorScale: S,
    config: A,
    dashboardConfig: k,
    formatDate: N,
    formatNumber: C,
    getXAxisData: P,
    getYAxisData: D,
    isNumber: T,
    parseDate: z,
    seriesHighlight: V,
    setSharedFilter: W,
    transformedData: F
  } = $.useContext(De), { HighLightedBarUtils: L } = Lr(A), q = A.brush.active && ((Y = A.brush.data) != null && Y.length) ? A.brush.data : F, j = (H, U) => {
    var ne;
    let I = null;
    const Q = m(U);
    return (ne = A.suppressedData) == null || ne.forEach((he) => {
      H.key === he.column && String(H.value) === String(he.value) && he.icon && (I = /* @__PURE__ */ r.createElement(so, { color: "#000", size: Q }));
    }), I;
  };
  return A.visualizationSubType !== "stacked" && (A.visualizationType === "Bar" || A.visualizationType === "Combo") && A.orientation === "vertical" && /* @__PURE__ */ r.createElement(be, null, /* @__PURE__ */ r.createElement(
    Qs,
    {
      data: q,
      keys: A.runtime.barSeriesKeys || A.runtime.seriesKeys,
      height: a,
      x0: (H) => H[A.runtime.originalXAxis.dataKey],
      x0Scale: e,
      x1Scale: i,
      yScale: t,
      color: () => ""
    },
    (H) => H.map((U, I) => /* @__PURE__ */ r.createElement(be, { className: `bar-group-${U.index}-${U.x0}--${I} ${A.orientation}`, key: `bar-group-${U.index}-${U.x0}--${I}`, id: `bar-group-${U.index}-${U.x0}--${I}`, left: n / H.length * U.index }, U.bars.map((Q, ne) => {
      const he = A.useLogScale ? 0.1 : 0, Pe = 20;
      let ke = A.highlightedBarValues.map((w) => w.value).filter((w) => w !== void 0);
      ke = A.xAxis.type === "date" ? L.formatDates(ke) : ke;
      let X = A.legend.behavior === "highlight" && V.length > 0 && V.indexOf(Q.key) === -1, K = A.legend.behavior === "highlight" || V.length === 0 || V.indexOf(Q.key) !== -1, re = Math.abs(t(Q.value) - t(he)), _ = Q.value >= 0 && T(Q.value) ? Q.y : t(0);
      const ue = Q.value >= 0 && T(Q.value) ? t(he) - Pe : t(0), le = A.suppressedData.some((w) => Q.key === w.column && String(Q.value) === String(w.value)) ? ue : _;
      let ge = n / H.length * (A.barThickness || 0.8), ve = n / H.length * (1 - (A.barThickness || 0.8)) / 2;
      A.isLollipopChart && (ve = n / H.length / 2 - y / 2);
      let xe = A.isLollipopChart ? y : ge / U.bars.length;
      l(xe), c(U.bars.length);
      let Ne = C(Q.value, "left"), Ae = A.runtime[v].type === "date" ? N(z(q[U.index][A.runtime.originalXAxis.dataKey])) : q[U.index][A.runtime.originalXAxis.dataKey];
      const Se = Q.value < 0 ? -1 : ne, pe = u(Se), ae = p(Q.key, q[U.index][A.runtime.originalXAxis.dataKey]);
      let J = A.runtime.xAxis.label ? `${A.runtime.xAxis.label}: ${Ae}` : Ae;
      const Ve = `${A.runtime.seriesLabels[Q.key]}: ${Ne}`, me = `<ul>
                  <li class="tooltip-heading">${J}</li>
                  <li class="tooltip-body ">${Ve}</li>
                  ${ae ? '<li class="tooltip-body ">' + ae + "</li>" : ""}
                    </li></ul>`;
      let Le = "#000000";
      Le = L.checkFontColor(Ne, ke, Le);
      let Oe = A.runtime.seriesLabels && A.runtime.seriesLabels[Q.key] ? S(A.runtime.seriesLabels[Q.key]) : S(Q.key);
      Oe = d(H.length, U.index, Oe);
      const Ie = A.isLollipopChart && A.lollipopColorStyle === "regular", Be = A.isLollipopChart && A.lollipopColorStyle === "two-tone", Ye = ke == null ? void 0 : ke.includes(Ae), rt = E(Ae), te = g(Ae), et = Ye ? rt : A.barHasBorder === "true" ? "#000" : "transparent", ze = Ye ? te.borderWidth : A.isLollipopChart ? 0 : A.barHasBorder === "true" ? h : 0, He = A.suppressedData.some((w) => Q.key === w.column && Q.value === w.value) ? "" : Ne;
      let wt = A.suppressedData.some((w) => Q.key === w.column && String(Q.value) === String(w.value)) ? Pe : re;
      const dt = A.suppressedData.some((w) => Q.key === w.column && Q.value === w.value) ? "none" : "block", Dt = (w, oe) => {
        let de = w, ce = oe || "#f2f2f2";
        if (k && k.dashboard.sharedFilters) {
          const { sharedFilters: we } = k.dashboard;
          return de = we.map((Ee) => Ee.setBy === A.uid ? Ee.resetLabel === Ee.active || Ee.active === F[U.index][A.xAxis.dataKey] ? w : ce : w)[0], Ie && (de = w), Be && (de = Ft(w).brighten(1)), Ye && (de = "transparent"), de;
        }
        return Be && (de = Ft(w).brighten(1)), Ye && (de = "transparent"), de;
      }, Ct = () => xe < 50 && xe > 15 ? xe / 2.5 : xe < 15 && xe > 5 ? xe / 6 : xe < 5 ? 0 : xe / 2, nt = {
        position: "absolute",
        top: Q.value >= 0 && T(Q.value) ? -Pe : void 0,
        bottom: Q.value >= 0 && T(Q.value) ? void 0 : `-${Pe}px`,
        left: Ct()
      };
      A.isLollipopChart && (nt.left = 0, nt.transform = "translateX(0)");
      const yt = {
        background: Dt(Oe),
        borderColor: et,
        borderStyle: "solid",
        borderWidth: `${ze}px`,
        width: xe,
        height: wt,
        ...pe,
        cursor: k ? "pointer" : "default"
      };
      return /* @__PURE__ */ r.createElement(be, { key: `${U.index}--${ne}` }, /* @__PURE__ */ r.createElement("style", null, `
                        .linear #barGroup${U.index} div,
                        .Combo #barGroup${U.index} div {
                          transform-origin: 0 ${le + wt}px;
                        }
                      `), /* @__PURE__ */ r.createElement(be, { key: `bar-sub-group-${U.index}-${U.x0}-${le}--${ne}` }, /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => b(Ae, Q.key),
          onMouseLeave: x,
          style: { overflow: "visible", transition: "all 0.2s linear" },
          id: `barGroup${U.index}`,
          key: `bar-group-bar-${U.index}-${Q.index}-${Q.value}-${Q.key}`,
          x: xe * Q.index + ve,
          y: le,
          width: xe,
          height: wt,
          opacity: X ? 0.2 : 1,
          display: K ? "block" : "none",
          "data-tooltip-html": me,
          "data-tooltip-id": `cdc-open-viz-tooltip-${A.runtime.uniqueId}`,
          onClick: (w) => {
            w.preventDefault(), W && (Q[A.xAxis.dataKey] = Ae, W(A.uid, Q));
          }
        },
        /* @__PURE__ */ r.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ r.createElement("div", { style: nt }, j(Q, xe)), /* @__PURE__ */ r.createElement("div", { style: { ...yt } }))
      ), /* @__PURE__ */ r.createElement(
        $e,
        {
          display: A.labels && K ? "block" : "none",
          opacity: X ? 0.5 : 1,
          x: xe * (Q.index + 0.5) + ve,
          y: le - 5,
          fill: Le,
          textAnchor: "middle"
        },
        He
      ), A.isLollipopChart && A.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: dt,
          cx: xe * (U.bars.length - Q.index - 1) + ve + f / 3.5,
          cy: Q.y,
          r: f / 2,
          fill: Oe,
          key: `circle--${Q.index}`,
          "data-tooltip-html": me,
          "data-tooltip-id": `cdc-open-viz-tooltip-${A.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), A.isLollipopChart && A.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: dt,
          x: ve - y / 2,
          y: le,
          width: f,
          height: f,
          fill: Oe,
          key: `circle--${Q.index}`,
          "data-tooltip-html": me,
          "data-tooltip-id": `cdc-open-viz-tooltip-${A.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${f}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(A.confidenceKeys).length > 0 ? q.map((H) => {
    let U, I, Q, ne, he = 5;
    return U = e(P(H)), Q = t(D(H, A.confidenceKeys.lower)), ne = t(D(H, A.confidenceKeys.upper)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-v-${I}-${H[A.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${U - he} ${Q}
                    L${U + he} ${Q}
                    M${U} ${Q}
                    L${U} ${ne}
                    M${U - he} ${ne}
                    L${U + he} ${ne}`
      }
    );
  }) : "", /* @__PURE__ */ r.createElement(fo, { xScale: e, yMax: a, barWidth: o, totalBarsInGroup: s }));
}, By = () => {
  const { xScale: e, yScale: t, yMax: n, seriesScale: a } = $.useContext(va), { transformedData: i, colorScale: o, seriesHighlight: l, config: s, formatNumber: c, formatDate: u, parseDate: d, setSharedFilter: h, isNumber: m, getTextWidth: p, getYAxisData: g, getXAxisData: E } = $.useContext(De), {
    isHorizontal: y,
    barBorderWidth: f,
    applyRadius: x,
    updateBars: b,
    assignColorsToValues: v,
    section: S,
    fontSize: A,
    isLabelBelowBar: k,
    displayNumbersOnBar: N,
    lollipopBarWidth: C,
    lollipopShapeSize: P,
    getHighlightedBarColorByValue: D,
    getHighlightedBarByValue: T,
    generateIconSize: z,
    getAdditionalColumn: V,
    hoveredBar: W,
    onMouseLeaveBar: F,
    onMouseOverBar: L
  } = xa(), { HighLightedBarUtils: q } = Lr(s), j = (Y, H) => {
    var Q;
    let U = null;
    const I = z(H);
    return (Q = s.suppressedData) == null || Q.forEach((ne) => {
      Y.key === ne.column && String(Y.value) === String(ne.value) && ne.icon && (U = /* @__PURE__ */ r.createElement(so, { color: "#000", size: I }));
    }), U;
  };
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ r.createElement(be, null, /* @__PURE__ */ r.createElement(
    Qs,
    {
      data: i,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: n,
      x0: (Y) => Y[s.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: a,
      yScale: e,
      color: () => ""
    },
    (Y) => b(Y).map((H, U) => /* @__PURE__ */ r.createElement(be, { className: `bar-group-${H.index}-${H.x0}--${U} ${s.orientation}`, key: `bar-group-${H.index}-${H.x0}--${U}`, id: `bar-group-${H.index}-${H.x0}--${U}`, top: H.y }, H.bars.map((I, Q) => {
      const ne = s.useLogScale ? 0.1 : 0;
      let he = s.highlightedBarValues.map((ie) => ie.value).filter((ie) => ie !== void 0);
      he = s.xAxis.type === "date" ? q.formatDates(he) : he;
      let Pe = s.legend.behavior === "highlight" && l.length > 0 && l.indexOf(I.key) === -1, ke = s.legend.behavior === "highlight" || l.length === 0 || l.indexOf(I.key) !== -1, X = s.barHeight, K = I.value >= 0 && m(I.value) ? I.y : t(ne);
      const re = I.value < 0 ? Math.abs(e(I.value)) : e(ne), _ = Math.abs(e(I.value) - e(ne)), ue = 25, le = I.value >= 0 && m(I.value);
      let ge = I.value && s.suppressedData.some(({ column: ie, value: je }) => I.key === ie && I.value === je) ? ue : _;
      const ve = le ? e(0) : e(ne) - ue, xe = s.suppressedData.some((ie) => I.key === ie.column && String(I.value) === String(ie.value)) ? ve : re, Ne = c(I.value, "left"), Ae = s.runtime[S].type === "date" ? u(d(i[H.index][s.runtime.originalXAxis.dataKey])) : i[H.index][s.runtime.originalXAxis.dataKey], Se = le ? "above" : "below", pe = s.suppressedData.some((ie) => I.key === ie.column && I.value === ie.value) ? "" : Ne;
      let J = p(Ae, `normal ${A[s.fontSize]}px sans-serif`) < _ - 5, Ve = J ? "end" : "start", me = "start", Le = J ? -5 : 5, Oe = 10;
      Se === "below" && (Ve = J ? "start" : "end", Le = J ? 5 : -5, s.isLollipopChart && (me = "end", Oe = -10));
      const Ie = I.value < 0 ? -1 : Q, Be = x(Ie);
      let Ye = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${Ae}` : Ae;
      const rt = V(W), te = `${s.runtime.seriesLabels[I.key]}: ${Ne}`, et = `<ul>
                  <li class="tooltip-heading"">${Ye}</li>
                  <li class="tooltip-body ">${te}</li>
                  <li class="tooltip-body ">${rt}</li>
                    </li></ul>`;
      let ze = "#000000";
      ze = q.checkFontColor(Ne, he, ze);
      let He = s.runtime.seriesLabels && s.runtime.seriesLabels[I.key] ? o(s.runtime.seriesLabels[I.key]) : o(I.key);
      He = v(Y.length, H.index, He);
      const wt = s.isLollipopChart && s.lollipopColorStyle === "regular", dt = s.isLollipopChart && s.lollipopColorStyle === "two-tone", Dt = he == null ? void 0 : he.includes(Ne), Ct = D(Ne), nt = T(Ne), yt = Dt ? Ct : s.barHasBorder === "true" ? "#000" : "transparent", w = Dt ? nt.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? f : 0, oe = s.suppressedData.some((ie) => I.key === ie.column && I.value === ie.value) ? "none" : "block";
      He && ze && Ft.contrast(ze, He) < 4.9 && (ze = J ? "#FFFFFF" : "#000000");
      const ce = {
        position: "absolute",
        top: (() => Number(X) < 20 ? -4 : Number(X) < 25 ? -1 : Number(X) < 30 ? 2 : Number(X) < 35 ? 4 : Number(X) < 40 ? 5 : Number(X) < 50 ? 9 : Number(X) < 60 ? 10 : 12)(),
        left: ue * 1.2
      };
      s.isLollipopChart && (ce.top = -9);
      const Ee = {
        background: (() => wt ? He : dt ? Ft(He).brighten(1) : Dt ? "transparent" : He)(),
        borderColor: yt,
        borderStyle: "solid",
        borderWidth: w,
        width: ge,
        transition: "all 0.2s linear",
        height: s.isLollipopChart ? C : X,
        ...Be
      };
      return /* @__PURE__ */ r.createElement(be, { key: `${H.index}--${Q}` }, /* @__PURE__ */ r.createElement("style", null, `
                        .linear #barGroup${H.index} div,
                        .Combo #barGroup${H.index} div {
                          transform-origin: 0 ${K + X}px;
                        }
                      `), /* @__PURE__ */ r.createElement(be, { key: `bar-sub-group-${H.index}-${H.x0}-${K}--${Q}` }, /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => L(Ae, I.key),
          onMouseLeave: F,
          id: `barGroup${H.index}`,
          key: `bar-group-bar-${H.index}-${I.index}-${I.value}-${I.key}`,
          x: xe,
          style: { overflow: "visible", ...Ee },
          y: X * I.index,
          height: s.isLollipopChart ? C : X,
          width: ge,
          opacity: Pe ? 0.2 : 1,
          display: ke ? "block" : "none",
          "data-tooltip-html": et,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (ie) => {
            ie.preventDefault(), h && (I[s.xAxis.dataKey] = Ne, h(s.uid, I));
          }
        },
        /* @__PURE__ */ r.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ r.createElement("div", { style: ce }, j(I, ge)), /* @__PURE__ */ r.createElement("div", { style: { ...Ee } }))
      ), !s.isLollipopChart && N && /* @__PURE__ */ r.createElement(
        $e,
        {
          display: ke ? "block" : "none",
          x: I.y,
          y: s.barHeight / 2 + s.barHeight * I.index,
          fill: ze,
          dx: Le,
          verticalAnchor: "middle",
          textAnchor: Ve
        },
        pe
      ), s.isLollipopChart && N && /* @__PURE__ */ r.createElement(
        $e,
        {
          display: ke ? "block" : "none",
          x: I.y,
          y: 0,
          fill: "#000000",
          dx: Oe,
          textAnchor: me,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        pe
      ), k && !s.yAxis.hideLabel && /* @__PURE__ */ r.createElement($e, { x: s.yAxis.hideAxis ? 0 : 5, y: H.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? u(d(i[H.index][s.runtime.originalXAxis.dataKey])) : y ? i[H.index][s.runtime.originalXAxis.dataKey] : c(i[H.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: oe,
          cx: I.y,
          cy: 0 + C / 2,
          r: P / 2,
          fill: He,
          key: `circle--${I.index}`,
          "data-tooltip-html": et,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: oe,
          x: I.y > 10 ? I.y - P / 2 : 0,
          y: 0 - C / 2,
          width: P,
          height: P,
          fill: He,
          key: `circle--${I.index}`,
          "data-tooltip-html": et,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${P}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? i.map((Y) => {
    let H, U, I, Q = 5;
    return H = t(E(Y)) - 0.75 * s.barHeight, U = e(g(Y, s.confidenceKeys.upper)), I = e(g(Y, s.confidenceKeys.lower)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-h-${H}-${Y[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${I} ${H - Q}
                    L${I} ${H + Q}
                    M${I} ${H}
                    L${U} ${H}
                    M${U} ${H - Q}
                    L${U} ${H + Q} `
      }
    );
  }) : "");
}, Ra = {
  Vertical: Fy,
  Horizontal: By,
  StackedVertical: zy,
  StackedHorizontal: Ry
}, Vy = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: i, handleTooltipMouseOver: o, handleTooltipMouseOff: l, handleTooltipClick: s }) => {
  const { transformedData: c, config: u } = $.useContext(De), d = {
    xScale: e,
    yScale: t,
    xMax: a,
    yMax: i,
    seriesScale: n
  };
  return /* @__PURE__ */ r.createElement(Bt, { component: "BarChart" }, /* @__PURE__ */ r.createElement(va.Provider, { value: d }, /* @__PURE__ */ r.createElement(be, { left: parseFloat(u.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(Ra.StackedVertical, null), /* @__PURE__ */ r.createElement(Ra.StackedHorizontal, null), /* @__PURE__ */ r.createElement(Ra.Vertical, null), /* @__PURE__ */ r.createElement(Ra.Horizontal, null), /* @__PURE__ */ r.createElement(Ot, { key: "bars", display: u.tooltips.singleSeries ? "none" : "block", width: Number(a), height: Number(i), fill: "transparent", fillOpacity: 0.05, onMouseMove: (h) => o(h, c), onMouseOut: l, onClick: (h) => s(h, c) }))));
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
function fn(e) {
  var t = e.x1, n = e.x2, a = e.y1, i = e.y2;
  return {
    x1: a,
    x2: i,
    y1: t,
    y2: n
  };
}
function du(e) {
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, i = a === void 0 ? 0 : a, o = e.className, l = e.max, s = e.min, c = e.firstQuartile, u = e.thirdQuartile, d = e.median, h = e.boxWidth, m = h === void 0 ? 10 : h, p = e.fill, g = e.fillOpacity, E = e.stroke, y = e.strokeWidth, f = e.rx, x = f === void 0 ? 2 : f, b = e.ry, v = b === void 0 ? 2 : b, S = e.valueScale, A = e.outliers, k = A === void 0 ? [] : A, N = e.horizontal, C = e.medianProps, P = C === void 0 ? {} : C, D = e.maxProps, T = D === void 0 ? {} : D, z = e.minProps, V = z === void 0 ? {} : z, W = e.boxProps, F = W === void 0 ? {} : W, L = e.outlierProps, q = L === void 0 ? {} : L, j = e.container, Y = j === void 0 ? !1 : j, H = e.containerProps, U = H === void 0 ? {} : H, I = e.children, Q = N ? i : n, ne = Q + (m || 0) / 2, he = S.range(), Pe = S(s ?? 0), ke = S(c ?? 0), X = S(d ?? 0), K = S(u ?? 0), re = S(l ?? 0), _ = {
    valueRange: he,
    center: ne,
    offset: Q,
    boxWidth: m,
    max: {
      x1: ne - (m || 0) / 4,
      x2: ne + (m || 0) / 4,
      y1: re,
      y2: re
    },
    maxToThird: {
      x1: ne,
      x2: ne,
      y1: re,
      y2: K
    },
    median: {
      x1: Q,
      x2: Q + (m || 0),
      y1: X,
      y2: X
    },
    minToFirst: {
      x1: ne,
      x2: ne,
      y1: ke,
      y2: Pe
    },
    min: {
      x1: ne - (m || 0) / 4,
      x2: ne + (m || 0) / 4,
      y1: Pe,
      y2: Pe
    },
    box: {
      x1: Q,
      x2: m || 0,
      y1: K,
      y2: Math.abs(K - ke)
    },
    container: {
      x1: Q,
      x2: m || 0,
      y1: Math.min.apply(Math, he),
      y2: Math.abs(he[0] - he[1])
    }
  };
  return N && (_.max = fn(_.max), _.maxToThird = fn(_.maxToThird), _.box.y1 = ke, _.box = fn(_.box), _.median = fn(_.median), _.minToFirst = fn(_.minToFirst), _.min = fn(_.min), _.container = fn(_.container), _.container.y1 = Math.min.apply(Math, he)), I ? /* @__PURE__ */ r.createElement(r.Fragment, null, I(_)) : /* @__PURE__ */ r.createElement(be, {
    className: tt("visx-boxplot", o)
  }, k.map(function(ue, le) {
    var ge = N ? S(ue) : ne, ve = N ? ne : S(ue);
    return /* @__PURE__ */ r.createElement("circle", en({
      key: "visx-boxplot-outlier-" + le,
      className: "visx-boxplot-outlier",
      cx: ge,
      cy: ve,
      r: 4,
      stroke: E,
      strokeWidth: y,
      fill: p,
      fillOpacity: g
    }, q));
  }), /* @__PURE__ */ r.createElement("line", en({
    className: "visx-boxplot-max",
    x1: _.max.x1,
    y1: _.max.y1,
    x2: _.max.x2,
    y2: _.max.y2,
    stroke: E,
    strokeWidth: y
  }, T)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: _.maxToThird.x1,
    y1: _.maxToThird.y1,
    x2: _.maxToThird.x2,
    y2: _.maxToThird.y2,
    stroke: E,
    strokeWidth: y
  }), /* @__PURE__ */ r.createElement("rect", en({
    className: "visx-boxplot-box",
    x: _.box.x1,
    y: _.box.y1,
    width: _.box.x2,
    height: _.box.y2,
    stroke: E,
    strokeWidth: y,
    fill: p,
    fillOpacity: g,
    rx: x,
    ry: v
  }, F)), /* @__PURE__ */ r.createElement("line", en({
    className: "visx-boxplot-median",
    x1: _.median.x1,
    y1: _.median.y1,
    x2: _.median.x2,
    y2: _.median.y2,
    stroke: E,
    strokeWidth: y
  }, P)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: _.minToFirst.x1,
    y1: _.minToFirst.y1,
    x2: _.minToFirst.x2,
    y2: _.minToFirst.y2,
    stroke: E,
    strokeWidth: y
  }), /* @__PURE__ */ r.createElement("line", en({
    className: "visx-boxplot-min",
    x1: _.min.x1,
    y1: _.min.y1,
    x2: _.min.x2,
    y2: _.min.y2,
    stroke: E,
    strokeWidth: y
  }, V)), Y && /* @__PURE__ */ r.createElement("rect", en({
    x: _.container.x1,
    y: _.container.y1,
    width: _.container.x2,
    height: _.container.y2,
    fillOpacity: "0"
  }, U)));
}
du.propTypes = {
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
const Hy = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: a } = $.useContext(De), { boxplot: i } = n;
  $.useEffect(() => {
    n.legend.hide === !1 && a({
      ...n,
      legend: {
        ...n.legend,
        hide: !0
      }
    });
  }, []);
  const o = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, l = (y) => `
      <strong>${y.columnCategory}</strong></br>
      ${i.labels.q1}: ${y.columnFirstQuartile}<br/>
      ${i.labels.q3}: ${y.columnThirdQuartile}<br/>
      ${i.labels.iqr}: ${y.columnIqr}<br/>
      ${i.labels.median}: ${y.columnMedian}
    `, s = (y) => Number(y.columnMax), c = (y) => Number(y.columnMin), u = (y) => Number(y.columnMedian), d = (y) => Number(y.columnThirdQuartile), h = (y) => Number(y.columnFirstQuartile), m = 0.5, p = e.bandwidth(), g = Math.min(40, p), E = kt[n == null ? void 0 : n.palette][0] ? kt[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ r.createElement(Bt, { component: "BoxPlot" }, /* @__PURE__ */ r.createElement(be, { className: "boxplot", key: "boxplot-group" }, i.plots.map((y, f) => {
    const x = p - g, b = 4;
    return /* @__PURE__ */ r.createElement(be, { key: `boxplotplot-${f}` }, i.plotNonOutlierValues && y.nonOutlierValues.map((v, S) => /* @__PURE__ */ r.createElement("circle", { cx: e(y.columnCategory) + Number(n.yAxis.size) + p / 2, cy: t(v), r: b, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${f}--circle-${S}` })), /* @__PURE__ */ r.createElement(
      du,
      {
        "data-left": e(y.columnCategory) + n.yAxis.size + x / 2 + 0.5,
        key: `box-plot-${f}`,
        min: c(y),
        max: s(y),
        left: Number(e(y.columnCategory)) + Number(n.yAxis.size) + x / 2 + 0.5,
        firstQuartile: h(y),
        thirdQuartile: d(y),
        median: u(y),
        boxWidth: g,
        fill: E,
        fillOpacity: m,
        stroke: "black",
        valueScale: t,
        outliers: i.plotOutlierValues ? y.columnOutliers : [],
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
          "data-tooltip-html": l(y),
          "data-tooltip-id": o
        }
      }
    ));
  })));
}, Wy = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: a }) => {
  const { colorScale: i, transformedData: o, config: l, formatNumber: s, seriesHighlight: c, colorPalettes: u } = $.useContext(De);
  let d = 4.5;
  const h = Object.keys(l.runtime.seriesLabels).length > 1, m = (p, g) => `<div>
    ${l.legend.showLegendValuesTooltip && l.runtime.seriesLabels && h ? `${l.runtime.seriesLabels[g] || ""}<br/>` : ""}
    ${l.xAxis.label}: ${s(p[l.xAxis.dataKey], "bottom")} <br/>
    ${l.yAxis.label}: ${s(p[g], "left")}
</div>`;
  return /* @__PURE__ */ r.createElement(be, { className: "scatter-plot", left: l.yAxis.size }, o.map((p, g) => l.runtime.seriesKeys.map((E, y) => {
    const f = l.legend.behavior === "highlight" && c.length > 0 && c.indexOf(E) === -1, x = l.legend.behavior === "highlight" || c.length === 0 || c.indexOf(E) !== -1, b = l.palette ? u[l.palette][y] : "#000";
    let v = {
      filter: "unset",
      opacity: 1,
      stroke: x ? "black" : ""
    };
    return /* @__PURE__ */ r.createElement(
      "circle",
      {
        key: `${g}-${y}`,
        r: d,
        cx: e(p[l.xAxis.dataKey]),
        cy: t(p[E]),
        fill: x ? b : "transparent",
        fillOpacity: f ? 0.25 : 1,
        style: v,
        "data-tooltip-html": m(p, E),
        "data-tooltip-id": `cdc-open-viz-tooltip-${l.runtime.uniqueId}`
      }
    );
  })));
};
function Ky({ height: e, xScale: t }) {
  const { transformedData: n, config: a, formatNumber: i, twoColorPalette: o, getTextWidth: l, updateConfig: s, parseDate: c, formatDate: u, currentViewport: d } = $.useContext(De), { barStyle: h, tipRounding: m, roundingStyle: p, twoColor: g } = a, E = $.useRef([]), [y, f] = $.useState(window.innerWidth), x = p === "standard" ? "8px" : p === "shallow" ? "5px" : p === "finger" ? "15px" : "0px", b = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const v = Number(a.xAxis.target), S = a.series[0].dataKey, A = Number(t.domain()[1]), N = n.some((j) => j[S] < 0) || v > 0 || t.domain()[0] < 0, C = a.barHasBorder === "true" ? 1 : 0, P = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, D = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, T = Math.max(t(0), Math.min(t(v), t(A))), z = (j) => {
    if (j == null || h !== "rounded")
      return;
    let Y = {};
    return j === "left" && (Y = { borderRadius: `${x} 0 0 ${x}` }), j === "right" && (Y = { borderRadius: `0 ${x} ${x} 0` }), m === "full" && (Y = { borderRadius: x }), Y;
  }, V = {
    calculate: function() {
      const Y = n[0][S] < v ? "left" : "right", H = `${a.xAxis.targetLabel} ${i(a.xAxis.target || 0, "left")}`, U = l(H, `bold ${b[a.fontSize]}px sans-serif`);
      let I = a.isLollipopChart ? P / 2 : Number(a.barHeight) / 2, Q = 0, ne = 0, he = !1;
      Y === "right" && (Q = -10, he = U - Q < T, ne = T - U), Y === "left" && (Q = 10, he = t(A) - T > U + Q, ne = T), this.text = H, this.y = I, this.x = ne, this.padding = Q, this.showLabel = a.xAxis.showTargetLabel ? he : !1;
    }
  };
  V.calculate();
  const W = $.useRef(null), F = oo(W, {});
  $.useEffect(() => {
    const j = () => {
      f(window.innerWidth), E.current.forEach((Y) => {
        Y.style.transition = "none", Y.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", j), () => {
      window.removeEventListener("resize", j);
    };
  }, []);
  const [L, q] = $.useState(!1);
  return $.useEffect(() => {
    F != null && F.isIntersecting && setTimeout(() => {
      q(!0);
    }, 100);
  }, [F == null ? void 0 : F.isIntersecting, a.animate]), $.useEffect(() => {
    E.current.forEach((j, Y) => {
      if (a.animate) {
        const H = v / A * 100;
        j.style.opacity = "0", j.style.transform = `translate(${H / 1.07}%) scale(0, 1)`, setTimeout(() => {
          j.style.opacity = "1", j.style.transform = "translate(0) scale(1)", j.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        j.style.transition = "none", j.style.opacity = "0";
      a.animate || (j.style.transition = "none", j.style.opacity = "1");
    });
  }, [a.animate, a, L]), /* @__PURE__ */ r.createElement(Bt, { component: "Deviation Bar" }, /* @__PURE__ */ r.createElement(be, { left: Number(a.xAxis.size) }, n.map((j, Y) => {
    const H = Number(j[S]), U = a.isLollipopChart ? P : Number(a.barHeight), I = Number(a.barSpace), Q = Math.abs(t(H) - T), ne = t(H), he = H > v ? T : ne, Pe = H < v ? "left" : "right";
    let ke = 0;
    ke = Y !== 0 ? (I + U + C) * Y : ke;
    const X = (I + U + C) * n.length;
    a.heights.horizontal = X;
    const re = l(i(H, "left"), `normal ${b[a.fontSize]}px sans-serif`) < Q - 6, _ = ne, ue = ke + U / 2, le = ne, ge = ke + U / 2, ve = ne, xe = ke - U / 2, Ne = z(Pe), [Ae, Se] = o[g.palette], pe = { left: Ae, right: Se }, J = Ft.contrast("#000000", pe[Pe]) < 4.9 ? "#FFFFFF" : "#000000";
    let Ve = Iy(a.isLollipopChart, re, D, J);
    const me = i(H, "left"), Le = a.runtime.yAxis.type === "date" ? u(c(n[Y][a.runtime.originalXAxis.dataKey])) : n[Y][a.runtime.originalXAxis.dataKey];
    let Oe = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${Le}` : Le, Ie = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${me}` : me;
    const Be = `<div>
          ${Oe}<br />
          ${Ie}
            </div>`;
    return /* @__PURE__ */ r.createElement(be, { key: `deviation-bar-${a.orientation}-${S}-${Y}` }, /* @__PURE__ */ r.createElement(
      "foreignObject",
      {
        ref: (Ye) => {
          E.current[Y] = Ye;
        },
        x: he,
        y: ke,
        width: Q,
        height: U,
        "data-tooltip-html": Be,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`
      },
      /* @__PURE__ */ r.createElement("div", { style: { width: Q, height: U, border: `${C}px solid #333`, backgroundColor: pe[Pe], ...Ne } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ r.createElement($e, { verticalAnchor: "middle", x: _, y: ue, ...Ve[Pe] }, i(j[S], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ r.createElement("circle", { cx: le, cy: ge, r: D / 2, fill: pe[Pe], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ r.createElement("rect", { x: ve, y: xe, width: D, height: D, fill: pe[Pe], style: { opacity: 1, filter: "unset" } }));
  }), V.showLabel && /* @__PURE__ */ r.createElement($e, { fontWeight: "bold", dx: V.padding, verticalAnchor: "middle", x: V.x, y: V.y }, V.text), N && /* @__PURE__ */ r.createElement(qe, { from: { x: T, y: 0 }, to: { x: T, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ r.createElement("foreignObject", { y: e / 2, ref: W }));
}
function Iy(e, t, n, a) {
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
const jy = ({ xScale: e, yScale: t, height: n, width: a, handleTooltipMouseOver: i, handleTooltipMouseOff: o }) => {
  var g;
  const { transformedData: l, rawData: s, config: c, seriesHighlight: u } = $.useContext(De), { xAxis: d, yAxis: h, legend: m, runtime: p } = c;
  return l && /* @__PURE__ */ r.createElement(Bt, { component: "ForecastingChart" }, /* @__PURE__ */ r.createElement(be, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(h.size) }, (g = p.forecastingSeriesKeys) == null ? void 0 : g.map((E, y) => !E || !E.stages ? !1 : E.stages.map((f, x) => {
    var k;
    const { behavior: b } = m, v = s.filter((N) => N[E.stageColumn] === f.key);
    let S = b === "highlight" && u.length > 0 && u.indexOf(f.key) === -1, A = b === "highlight" || u.length === 0 || u.indexOf(f.key) !== -1;
    return /* @__PURE__ */ r.createElement(be, { className: `forecasting-areas-combo-${y}`, key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}-${y}` }, (k = E.confidenceIntervals) == null ? void 0 : k.map((N, C) => {
      const P = Ya[f.color] || kt[f.color] || !1, D = () => A && P[2] ? P[2] : "transparent", T = () => A && P[1] ? P[1] : "transparent";
      if (!(N.high === "" || N.low === ""))
        return /* @__PURE__ */ r.createElement(be, { key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}--group-${x}-${C}` }, /* @__PURE__ */ r.createElement(
          Hd,
          {
            curve: Ha,
            data: v,
            fill: D(),
            opacity: S ? 0.1 : 0.5,
            x: (z) => e(Date.parse(z[d.dataKey])),
            y0: (z) => t(z[N.low]),
            y1: (z) => t(z[N.high])
          }
        ), C === 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ln, { data: v, x: (z) => Number(e(Date.parse(z[d.dataKey]))), y: (z) => Number(t(z[N.high])), curve: Ha, stroke: T(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ r.createElement(ln, { data: v, x: (z) => Number(e(Date.parse(z[d.dataKey]))), y: (z) => Number(t(z[N.low])), curve: Ha, stroke: T(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ r.createElement(be, { key: "tooltip-hover-section" }, /* @__PURE__ */ r.createElement(Ot, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (E) => i(E, l), onMouseOut: o }))));
};
function ja(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Dr(e, t) {
  const n = e.series.every(({ type: m }) => m === "Bar"), a = e.series.every(({ type: m }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(m)), i = (m) => (p) => m.reduce((g, E) => isNaN(Number(p[E])) ? g : g + Number(p[E]), 0), o = () => {
    let m = Math.max(...t.map((p) => Math.max(...e.runtime.seriesKeys.map((g) => ja(p[g]) ? Number(c(p[g])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const p = t.map(i(e.runtime.seriesKeys)).filter((g) => !isNaN(g));
      m = Math.max(...p);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const p = t.map(i(e.runtime.seriesKeys));
      m = Math.max(...p);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (m = Math.max(...t.map((p) => ja(p[e.series.dataKey]) ? Number(c(p[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const p = t.map(i(e.runtime.barSeriesKeys)), g = Math.max(...t.map((y) => Math.max(...e.runtime.lineSeriesKeys.map((f) => Number(c(y[f])))))), E = Math.max(...p);
      m = Math.max(E, g);
    }
    return m;
  }, l = () => {
    const m = Math.min(...t.map((p) => Math.min(...e.runtime.seriesKeys.map((g) => ja(p[g]) ? Number(c(p[g])) : 1 / 0))));
    return String(m);
  }, s = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((m) => t.some((p) => p[m] >= 0)) : !1, c = (m) => m === null || m === "" ? "" : typeof m == "string" ? m.replace(/[,$]/g, "") : m, u = Number(o()), d = Number(l()), h = s();
  return { minValue: d, maxValue: u, existPositiveValue: h, isAllLine: a };
}
function ho({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var m, p, g, E;
  const i = e.visualizationType === "Combo" && e.orientation === "vertical", o = e.series && e.series.filter((y) => y.axis === "Right").map((y) => y.dataKey);
  let { minValue: l } = Dr(e, n);
  const s = (y) => {
    if (!y)
      return [0];
    let f = [];
    return y.map((x, b) => f = [...f, ...n.map((v) => Number(v[x]))]), f;
  };
  let c = Math.max.apply(null, s(o));
  e.yAxis.rightMax > c && (c = e.yAxis.rightMax), e.yAxis.rightMin < l && (l = e.yAxis.rightMin);
  const u = ((p = (m = e.runtime) == null ? void 0 : m.barSeriesKeys) == null ? void 0 : p.length) > 0, d = ((E = (g = e.runtime) == null ? void 0 : g.lineSeriesKeys) == null ? void 0 : E.length) > 0;
  return (u || d) && l > 0 && (l = 0), { yScaleRight: pt({
    domain: [l, c],
    range: [t, 0]
  }), hasRightAxis: i };
}
const qy = (e) => {
  const { preliminaryData: t, rawData: n, stroke: a, handleLineType: i, lineType: o, seriesKey: l } = e, s = t.filter((h) => h.seriesKey && h.column && h.value && h.type && h.style), c = (h) => s.find((m) => m.seriesKey === l && h[m.column] === m.value && m.type === "effect" && m.style !== "Open Circles");
  let u = [];
  const d = (h) => ({
    stroke: a,
    strokeWidth: 2,
    strokeDasharray: h
  });
  return n.forEach((h, m) => {
    let p = c(h), g = d(i(p ? p.style : o));
    u.push(g), p && m > 0 && (u[m - 1] = d(i(p.style)));
  }), u;
}, Uy = (e, t, n) => {
  const a = e.filter((o) => o.style === "Open Circles" && o.type === "effect").map((o) => ({ column: o.column, value: o.value, seriesKey: o.seriesKey }));
  let i = [];
  return t.forEach((o) => {
    a.some((l) => o[l.column] === l.value && l.seriesKey === n) && i.push(o);
  }), i;
}, ls = (e) => {
  var y, f, x, b, v, S;
  const { config: t, d: n, displayArea: a, seriesKey: i, tooltipData: o, xScale: l, yScale: s, colorScale: c, parseDate: u, yScaleRight: d, data: h, circleData: m } = e, { lineDatapointStyle: p } = t, g = (y = t == null ? void 0 : t.series.filter((A) => A.dataKey === i)) == null ? void 0 : y[0];
  if (p === "hidden")
    return /* @__PURE__ */ r.createElement(r.Fragment, null);
  const E = (A, k, N, C, P) => {
    const D = N.runtime.seriesLabels || [];
    let T;
    return A ? T = k(D[C] || P) : T = "transparent", N.lineDatapointColor === "Lighter than Line" && T !== "transparent" && T && (T = Ft(T).brighten(1)), T;
  };
  if (p === "always show")
    return (m == null ? void 0 : m.some((k) => k[t.xAxis.dataKey] === n[t.xAxis.dataKey] && k[i] === n[i])) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
      "circle",
      {
        cx: t.xAxis.type === "categorical" ? l(n[t.xAxis.dataKey]) : l(u(n[t.xAxis.dataKey])),
        cy: g.axis === "Right" ? d(n[g.dataKey]) : s(n[g.dataKey]),
        r: 4.5,
        opacity: n[i] ? 1 : 0,
        fillOpacity: 1,
        fill: E(a, c, t, i, i),
        style: { filter: "unset", opacity: 1 }
      }
    );
  if (p === "hover") {
    if (!o || !i || !o.data)
      return;
    let A = (x = (f = o == null ? void 0 : o.data) == null ? void 0 : f[0]) == null ? void 0 : x[1];
    if (!A)
      return;
    let k, N = o.data.filter((D) => D[0] === i), C = (b = N == null ? void 0 : N[0]) == null ? void 0 : b[0], P = (v = N == null ? void 0 : N[0]) == null ? void 0 : v[2];
    return C ? (o == null || o.data.indexOf(C), k = (S = h == null ? void 0 : h.find((D) => D[t == null ? void 0 : t.xAxis.dataKey] === A)) == null ? void 0 : S[i], o == null ? void 0 : o.data.map((D, T) => (t.runtime.seriesLabelsAll.indexOf(A), isNaN(k) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : (m == null ? void 0 : m.some((V) => V[t.xAxis.dataKey] === A)) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
      "circle",
      {
        cx: t.xAxis.type === "categorical" ? l(A) : l(u(A)),
        cy: P === "right" ? d(k) : s(k),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: E(a, c, t, C, i),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(D)}--${T}`
      }
    )))) : void 0;
  }
  return null;
}, ss = (e) => {
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
    handleLineType: g,
    isNumber: E,
    parseDate: y,
    seriesHighlight: f,
    tableData: x,
    transformedData: b,
    updateConfig: v,
    rawData: S
  } = $.useContext(De), { yScaleRight: A } = ho({ config: m, yMax: u, data: b, updateConfig: v });
  if (!o)
    return;
  const { lineDatapointStyle: k, showLineSeriesLabels: N, legend: C } = m;
  return /* @__PURE__ */ r.createElement(Bt, { component: "LineChart" }, /* @__PURE__ */ r.createElement(be, { left: m.runtime.yAxis.size ? parseInt(m.runtime.yAxis.size) : 66 }, " ", (m.runtime.lineSeriesKeys || m.runtime.seriesKeys).map((P, D) => {
    let T = m.series.filter((L) => L.dataKey === P)[0].type;
    const z = m.series.filter((L) => L.dataKey === P), V = z[0].axis ? z[0].axis : "left";
    let W = C.behavior === "highlight" || f.length === 0 || f.indexOf(P) !== -1;
    const F = Uy(m.preliminaryData, S, P);
    return qy({ preliminaryData: m.preliminaryData, rawData: S, stroke: h(m.runtime.seriesLabels[P]), handleLineType: g, lineType: T, seriesKey: P }), /* @__PURE__ */ r.createElement(
      be,
      {
        key: `series-${P}`,
        opacity: C.behavior === "highlight" && f.length > 0 && f.indexOf(P) === -1 ? 0.5 : 1,
        display: C.behavior === "highlight" || f.length === 0 && !C.dynamicLegend || f.indexOf(P) !== -1 ? "block" : "none"
      },
      b.map((L, q) => {
        const j = m.series.find(({ dataKey: Q }) => Q === P), { axis: Y } = j, H = Object.keys(m.runtime.seriesLabels).length > 1, U = Y === "Right" ? "rightLabel" : "label";
        let I = m.runtime.yAxis[U];
        return H || (I = m.isLegendValue ? m.runtime.seriesLabels[P] : I), L[P] !== void 0 && L[P] !== "" && L[P] !== null && E(L[P]) && /* @__PURE__ */ r.createElement(be, { key: `series-${P}-point-${q}`, className: "checkwidth" }, /* @__PURE__ */ r.createElement(Ot, { key: "bars", width: Number(s), height: Number(u), fill: "transparent", fillOpacity: 0.05, onMouseMove: (Q) => o(Q, x), onMouseOut: i, onClick: (Q) => a(Q, b) }), /* @__PURE__ */ r.createElement($e, { display: m.labels ? "block" : "none", x: c(t(L)), y: V === "Right" ? A(n(L, P)) : d(n(L, P)), fill: "#000", textAnchor: "middle" }, p(L[P], "left")), (k === "hidden" || k === "always show") && /* @__PURE__ */ r.createElement(
          ls,
          {
            circleData: F,
            data: b,
            d: L,
            config: m,
            seriesKey: P,
            displayArea: W,
            tooltipData: l,
            xScale: c,
            yScale: d,
            colorScale: h,
            parseDate: y,
            yScaleRight: A,
            seriesAxis: V,
            key: `line-circle--${q}`
          }
        ));
      }),
      /* @__PURE__ */ r.createElement(r.Fragment, null, k === "hover" && /* @__PURE__ */ r.createElement(ls, { circleData: F, data: b, config: m, seriesKey: P, displayArea: W, tooltipData: l, xScale: c, yScale: d, colorScale: h, parseDate: y, yScaleRight: A, seriesAxis: V })),
      /* @__PURE__ */ r.createElement(
        ln,
        {
          curve: mo[z[0].lineType],
          data: b,
          x: (L) => c(t(L)),
          y: (L) => V === "Right" ? A(n(L, P)) : d(Number(n(L, P))),
          stroke: h(m.runtime.seriesLabels[P]),
          strokeWidth: 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: T ? g(T) : 0,
          defined: (L, q) => L[P] !== "" && L[P] !== null && L[P] !== void 0
        }
      ),
      F.map((L, q) => /* @__PURE__ */ r.createElement("circle", { key: q, cx: c(t(L)), cy: d(Number(n(L, P))), r: 6, strokeWidth: 2, stroke: h ? h(m.runtime.seriesLabels[P]) : "#000", fill: "#fff" })),
      m.animate && /* @__PURE__ */ r.createElement(
        ln,
        {
          className: "animation",
          curve: z.lineType,
          data: b,
          x: (L) => c(t(L)),
          y: (L) => V === "Right" ? A(n(L, P)) : d(Number(n(L, P))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: T ? g(T) : 0,
          defined: (L, q) => L[P] !== "" && L[P] !== null && L[P] !== void 0
        }
      ),
      N && (m.runtime.lineSeriesKeys || m.runtime.seriesKeys).map((L) => {
        let q;
        for (let j = b.length - 1; j >= 0; j--)
          if (b[j][L]) {
            q = b[j];
            break;
          }
        return q ? /* @__PURE__ */ r.createElement("text", { x: c(t(q)) + 5, y: d(n(q, L)), alignmentBaseline: "middle", fill: m.colorMatchLineSeriesLabels && h ? h(m.runtime.seriesLabels[L] || L) : "black" }, m.runtime.seriesLabels[L] || L) : /* @__PURE__ */ r.createElement(r.Fragment, null);
      })
    );
  }), m.legend.dynamicLegend && f.length === 0 && /* @__PURE__ */ r.createElement($e, { x: s / 2, y: u / 2, fill: "black", textAnchor: "middle", color: "black" }, m.legend.dynamicLegendChartMessage)));
}, Yy = (e) => {
  const { rawData: t, updateConfig: n } = $.useContext(De), { xScale: a, yScale: i, config: o, height: l, width: s, handleTooltipMouseOff: c, handleTooltipMouseOver: u } = e, { forestPlot: d } = o, h = o.xAxis.tickWidthMax + 10, [m, p] = $.useState(!1);
  $.useEffect(() => {
    try {
      const v = ["estimateField", "lower", "upper", "estimateRadius"], S = o, A = 10;
      for (let k = 0; k < A; k++)
        v.forEach((N) => {
          var C;
          o.forestPlot[N] && o.forestPlot[N] !== ((C = S.columns[o.forestPlot[`additionalColumn${k}`]]) == null ? void 0 : C.name) && (delete S.columns[`additionalColumn${k}`], S.columns[o.forestPlot[N]] = {}, S.columns[o.forestPlot[N]].dataKey = S.forestPlot[N], S.columns[o.forestPlot[N]].name = S.forestPlot[N], S.columns[o.forestPlot[N]].dataTable = !0, S.columns[o.forestPlot[N]].tooltips = !0, S.columns[o.forestPlot[N]].label = S.forestPlot[N]);
        });
      o.forestPlot.radius.scalingColumn && (S.columns[o.forestPlot.radius.scalingColumn] = {}, S.columns[o.forestPlot.radius.scalingColumn].dataKey = S.forestPlot.radius.scalingColumn, S.columns[o.forestPlot.radius.scalingColumn].name = S.forestPlot.radius.scalingColumn, S.columns[o.forestPlot.radius.scalingColumn].label = S.forestPlot.radius.scalingColumn, S.columns[o.forestPlot.radius.scalingColumn].dataTable = !0, S.columns[o.forestPlot.radius.scalingColumn].tooltips = !0), S.table.showVertical && (S.table.indexLabel = o.xAxis.dataKey), n(S);
    } catch (v) {
      console.log(v.message);
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
  const g = o.data.find((v) => v[o.xAxis.dataKey] === o.forestPlot.pooledResult.column), E = g ? [
    { x: a(g[o.forestPlot.lower]), y: l - Number(o.forestPlot.rowHeight) },
    { x: a(g[o.forestPlot.estimateField]), y: l - d.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: a(g[o.forestPlot.upper]), y: l - Number(o.forestPlot.rowHeight) },
    { x: a(g[o.forestPlot.estimateField]), y: l + d.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: a(g[o.forestPlot.lower]), y: l - Number(o.forestPlot.rowHeight) }
  ] : [], y = o.forestPlot.rowHeight, f = [
    { x: 0, y },
    { x: s, y }
  ], x = [
    { x: 0, y: l },
    { x: s, y: l }
  ], b = Object.entries(o.columns).map((v) => v[1]).filter((v) => v.forestPlot === !0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(be, { width: s }, d.title && /* @__PURE__ */ r.createElement($e, { className: "forest-plot--title", x: d.type === "Linear" ? a(0) : a(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: cn(o.fontSize), fill: "black" }, d.title), d.lineOfNoEffect.show && d.type === "Linear" && /* @__PURE__ */ r.createElement(qe, { from: { x: a(0), y: 0 + y }, to: { x: a(0), y: l }, className: "forestplot__line-of-no-effect", stroke: d.regression.baseLineColor || "black" }), d.lineOfNoEffect.show && d.type === "Logarithmic" && /* @__PURE__ */ r.createElement(qe, { from: { x: a(1), y: 0 + y }, to: { x: a(1), y: l }, className: "forestplot__line-of-no-effect", stroke: d.regression.baseLineColor || "black" }), t.map((v, S) => {
    const A = pt({
      domain: t.map((T) => T[d.radius.scalingColumn]),
      range: [d.radius.min, d.radius.max]
    }), k = d.radius.scalingColumn !== "" ? A(t[S][d.radius.scalingColumn]) : 4, N = d.colors.shape ? d.colors.shape : "black", C = d.colors.line ? d.colors.line : "black", P = 4;
    return v[o.xAxis.dataKey] === d.pooledResult.column ? /* @__PURE__ */ r.createElement(ln, { data: E, x: (T) => T.x, y: (T) => T.y - cn(o.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: si }) : /* @__PURE__ */ r.createElement(be, null, /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: C,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${a(v[d.lower])} ${i(S) - Number(P)}
                    L${a(v[d.lower])} ${i(S) + Number(P)}
                `
      }
    ), /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: C,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${a(v[d.upper])} ${i(S) - Number(P)}
                    L${a(v[d.upper])} ${i(S) + Number(P)}
                `
      }
    ), /* @__PURE__ */ r.createElement("line", { stroke: C, className: `line-${v[o.yAxis.dataKey]}`, key: S, x1: a(v[d.lower]), x2: a(v[d.upper]), y1: i(S), y2: i(S) }), d.shape === "circle" && /* @__PURE__ */ r.createElement(Lu, { className: "forest-plot--circle", cx: a(Number(v[d.estimateField])), cy: i(S), r: d.radius.scalingColumn !== "" ? A(t[S][d.radius.scalingColumn]) : 4, fill: N, style: { opacity: 1, filter: "unset" } }), d.shape === "square" && /* @__PURE__ */ r.createElement("rect", { className: "forest-plot--square", x: a(Number(v[d.estimateField])), y: i(S) - k / 2, width: k, height: k, fill: N, style: { opacity: 1, filter: "unset" } }), d.shape === "text" && /* @__PURE__ */ r.createElement($e, { className: "forest-plot--text", x: a(Number(v[d.estimateField])), y: i(S), textAnchor: "middle", verticalAnchor: "middle", fontSize: cn(o.fontSize), fill: N }, v[d.estimateField]));
  }), E && d.regression.showDiamond && /* @__PURE__ */ r.createElement(ln, { data: E, x: (v) => v.x, y: (v) => v.y, stroke: "black", strokeWidth: 2, fill: d.regression.baseLineColor, curve: si }), d.regression.description && /* @__PURE__ */ r.createElement($e, { x: 0 - Number(o.xAxis.size), width: s, y: l - o.forestPlot.rowHeight - Number(d.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, d.regression.description), /* @__PURE__ */ r.createElement(Ot, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: s, height: l, fill: "transparent", fillOpacity: 0.5, onMouseMove: (v) => u(v, t), onMouseOut: c })), /* @__PURE__ */ r.createElement(qe, { from: f[0], to: f[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ r.createElement(qe, { from: x[0], to: x[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), b.map((v) => t.map((S, A) => /* @__PURE__ */ r.createElement($e, { className: `${S[v.name]}`, x: v.forestPlotAlignRight ? s : v.forestPlotStartingPoint, y: i(A), textAnchor: v.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: cn(o.fontSize), fill: "black" }, S[v.name]))), !d.hideDateCategoryCol && t.map((v, S) => /* @__PURE__ */ r.createElement($e, { className: `${v[o.xAxis.dataKey]}`, x: 0, y: i(S), textAnchor: "start", verticalAnchor: "middle", fontSize: cn(o.fontSize), fill: "black" }, v[o.xAxis.dataKey])), !d.hideDateCategoryCol && o.xAxis.dataKey && /* @__PURE__ */ r.createElement($e, { className: o.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: cn(o.fontSize), fill: "black" }, o.xAxis.dataKey), b.map((v) => /* @__PURE__ */ r.createElement($e, { className: `${v.label}`, x: v.forestPlotAlignRight ? s : v.forestPlotStartingPoint, y: 0, textAnchor: v.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: cn(o.fontSize), fill: "black" }, v.label)), d.leftLabel && /* @__PURE__ */ r.createElement($e, { className: "forest-plot__left-label", x: d.type === "Linear" ? a(0) - 25 : a(1) - 25, y: l + h, textAnchor: "end", verticalAnchor: "start" }, d.leftLabel), d.rightLabel && /* @__PURE__ */ r.createElement($e, { className: "forest-plot__right-label", x: d.type === "Linear" ? a(0) + 25 : a(1) + 25, y: l + h, textAnchor: "start", verticalAnchor: "start" }, d.rightLabel));
}, Xy = ({ width: e, height: t, originalWidth: n }) => {
  var v;
  const { config: a, colorScale: i, transformedData: o, formatNumber: l, seriesHighlight: s, getTextWidth: c } = $.useContext(De);
  if (!a || ((v = a == null ? void 0 : a.series) == null ? void 0 : v.length) < 2)
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
  }, g = {
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
    domain: [0, Math.max(p.max * m, g.max * 1.1)],
    range: [0, d]
  });
  let y = "#000000";
  p.color && Ft.contrast(y, p.color) < 4.9 && (p.labelColor = "#FFFFFF"), g.color && Ft.contrast(y, g.color) < 4.9 && (g.labelColor = "#FFFFFF");
  const f = a.yAxis.label ? `${a.yAxis.label}: ` : "", x = (S) => `<p>
				${a.dataDescription.seriesKey}: ${p.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${S[a.xAxis.dataKey]}<br/>
				${f}${l(S[p.dataKey], "left")}
			</p>`, b = (S) => `<p>
				${a.dataDescription.seriesKey}: ${g.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${S[a.xAxis.dataKey]}<br/>
				${f}${l(S[g.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ r.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ r.createElement(be, { top: 0, left: Number(a.xAxis.size) }, o.filter((S) => a.series[0].dataKey === p.dataKey).map((S, A) => {
    let k = a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(a.series[0].dataKey) === -1, N = a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(a.series[0].dataKey) !== -1, C = E(S[a.series[0].dataKey]), P = Number(a.barHeight) ? Number(a.barHeight) : 25, D = 0;
    D = A !== 0 ? (Number(a.barSpace) + P + u) * A : D;
    const T = (Number(a.barSpace) + P + u) * o.length;
    a.heights.horizontal = T;
    const V = c(l(S[p.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < C - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(be, { key: `group-${p.dataKey}-${S[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      Ot,
      {
        id: `bar-${p.dataKey}-${S[a.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${p.dataKey}-${S[a.dataDescription.xKey]}`,
        x: d - C,
        y: D,
        width: E(S[a.series[0].dataKey]),
        height: P,
        fill: p.color,
        "data-tooltip-html": x(S),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: u,
        opacity: k ? 0.5 : 1,
        display: N ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && N && /* @__PURE__ */ r.createElement($e, { textAnchor: V ? "start" : "end", dx: V ? 5 : -5, verticalAnchor: "middle", x: d - C, y: D + a.barHeight / 2, fill: V ? p.labelColor : "#000" }, l(S[p.dataKey], "left"))));
  }), o.filter((S) => a.series[1].dataKey === g.dataKey).map((S, A) => {
    let k = E(S[a.series[1].dataKey]), N = a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(a.series[1].dataKey) === -1, C = a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(a.series[1].dataKey) !== -1, P = a.barHeight ? Number(a.barHeight) : 25, D = 0;
    D = A !== 0 ? (Number(a.barSpace) + P + u) * A : D;
    const T = (Number(a.barSpace) + P + u) * o.length;
    a.heights.horizontal = T;
    const V = c(l(S[g.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < k - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                      .bar-${g.dataKey}-${S[a.xAxis.dataKey]} {
                          transform-origin: ${d}px ${D}px
                      }
							      `), /* @__PURE__ */ r.createElement(be, { key: `group-${g.dataKey}-${S[a.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      Ot,
      {
        id: `bar-${g.dataKey}-${S[a.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${g.dataKey}-${S[a.dataDescription.xKey]}`,
        x: d,
        y: D,
        width: E(S[a.series[1].dataKey]),
        height: P,
        fill: g.color,
        "data-tooltip-html": b(S),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        strokeWidth: u,
        stroke: "#333",
        opacity: N ? 0.5 : 1,
        display: C ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && C && /* @__PURE__ */ r.createElement($e, { textAnchor: V ? "end" : "start", dx: V ? -5 : 5, verticalAnchor: "middle", x: d + k, y: D + a.barHeight / 2, fill: V ? g.labelColor : "#000" }, l(S[g.dataKey], "left"))));
  }))));
}, mu = ({ config: e, minValue: t, maxValue: n, existPositiveValue: a, data: i, isAllLine: o }) => {
  let l = 0, s = 0, c = 0, u = 0;
  if (!i)
    return { min: l, max: s };
  const { visualizationType: d, series: h } = e, { max: m, min: p } = e.runtime.yAxis, g = a ? m >= n : m >= 0, E = e.useLogScale ? p >= 0 : p <= 0 && t >= 0 || p <= t && t < 0;
  l = p && E ? p : t, s = m && g ? m : Number.MIN_VALUE;
  const { lower: y, upper: f } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (y && f && e.visualizationType === "Bar") {
    const x = l < 0 ? 1.1 : 0;
    s = Math.max(n, Math.max(...i.flatMap((b) => [b[f], b[y]])) * 1.15), l = Math.min(t, Math.min(...i.flatMap((b) => [b[f], b[y]])) * 1.15) * x;
  }
  if (e.series.filter((x) => (x == null ? void 0 : x.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: x }
    } = e;
    if ((x == null ? void 0 : x.length) > 0) {
      let b = [];
      x.forEach((k) => {
        var N;
        (N = k.confidenceIntervals) == null || N.map((C) => {
          b.push(C.high), b.push(C.low);
        });
      });
      const v = i.map((k) => b.map((N) => k[N])), S = Math.max.apply(
        null,
        v.map((k) => k[0])
      ), A = Math.min.apply(
        null,
        v.map((k) => k[1])
      );
      S > s && (s = S), A < l && (l = A);
    }
  }
  if (d === "Combo")
    try {
      if (!i)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let x = h.filter((S) => S.axis === "Left"), b = h.filter((S) => S.axis === "Right");
      const v = (S, A, k, N = "left") => {
        let C = 0;
        return (A.map((D) => D.dataKey) || []).forEach((D) => {
          let T = A.find((W) => W.dataKey === D), z = S.map((W) => W[D]), V = Math.max.apply(null, z);
          e.visualizationSubType === "stacked" && N === "left" && T.type === "Bar" && (C += V), V > k && (k = V), k < C && (k = C);
        }), k;
      };
      c = v(i, x, c, "left"), u = v(i, b, u, "right"), c < m && (c = m);
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
    const x = i.map((v) => v[e.series[0].dataKey]), b = Math.max(...x).toString().length;
    switch (!0) {
      case (b > 8 && b <= 12):
        s = s * 1.3;
        break;
      case (b > 4 && b <= 7):
        s = s * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (l < 0 ? (s *= 1.2, l *= 1.2) : s *= 1.1), { min: l, max: s, leftMax: c, rightMax: u };
}, Qy = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: a, min: i, max: o, config: l, data: s } = e;
  const { rawData: c, dimensions: u } = $.useContext(De), [d, h] = u, m = l.runtime.barSeriesKeys || l.runtime.seriesKeys, p = l.runtime.xAxis.type, g = l.orientation === "horizontal", E = (P) => P[l.runtime.originalXAxis.dataKey], y = s.map((P) => E(P)), { visualizationType: f } = l;
  let x = null, b = null, v = null, S = null, A = null, k = null, N = null;
  const C = {
    TIME: "time",
    LOG: "log",
    POINT: "point",
    LINEAR: "linear",
    BAND: "band"
  };
  if (g && (x = Zy({ min: i * 1.03, ...e }), x.type = l.useLogScale ? C.LOG : C.LINEAR, b = Gy(p, t), b.rangeRound([0, a]), A = Fa(m, [0, a])), g || (N = Fa(y, [0, n], 0.5), x = Fa(t, [0, n], 0.5), x.type = C.POINT, b = Jy(e), A = Fa(m, [0, n])), l.xAxis.type === "date" && l.xAxis.sortDates && (x = km({
    domain: [Math.min(...t), Math.max(...t)],
    range: [0, n]
  }), N = x, x.type = C.LINEAR), l.visualizationType === "Deviation Bar") {
    const P = l.isLollipopChart ? 1.05 : 1.03;
    b = xl({
      domain: t,
      range: [0, a]
    }), x = pt({
      domain: [i * P, Math.max(Number(l.xAxis.target), o)],
      range: [0, n],
      round: !0,
      nice: !0
    }), x.type = C.LINEAR;
  }
  if (l.visualizationType === "Scatter Plot" && l.xAxis.type === "continuous" && (x = pt({
    domain: [0, Math.max.apply(null, x.domain())],
    range: [0, n]
  }), x.type = C.LINEAR), f === "Box Plot") {
    const P = [];
    if (l.boxplot.plots.map((V) => V.columnOutliers.map((W) => P.push(W))) && !l.boxplot.hideOutliers) {
      let V = Math.min(...P), W = Math.max(...P);
      V < i && (i = V), W > o && (o = W);
    }
    let T = Math.min(...l.boxplot.plots.map((V) => V.columnLowerBounds)), z = Math.max(...l.boxplot.plots.map((V) => V.columnUpperBounds));
    T < i && (i = T), z > o && (o = z), b = pt({
      range: [a, 0],
      round: !0,
      domain: [i, o]
    }), x = xl({
      range: [0, n],
      round: !0,
      domain: l.boxplot.categories,
      padding: 0.4
    }), x.type = C.BAND;
  }
  if (f === "Paired Bar") {
    let D = Math.max.apply(
      Math,
      s.map((z) => {
        var V;
        return z[(V = l.series[0]) == null ? void 0 : V.dataKey];
      })
    ), T = Math.max.apply(
      Math,
      s.map((z) => {
        var V;
        return z[(V = l.series[1]) == null ? void 0 : V.dataKey];
      })
    );
    S = pt({
      domain: [0, Math.max(D, T) * 1.02],
      range: [n / 2, 0]
    }), v = pt({
      domain: S.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (f === "Forest Plot") {
    const P = () => l.forestPlot.regression.showDiamond || l.forestPlot.regression.description ? [0 + l.forestPlot.rowHeight * 2, a - l.forestPlot.rowHeight] : [0 + l.forestPlot.rowHeight * 2, a];
    b = pt({
      domain: [0, c.length],
      range: P()
    });
    const D = 5, T = Number(l.forestPlot.leftWidthOffset) / 100 * n, z = Number(l.forestPlot.rightWidthOffset) / 100 * n, V = Number(l.forestPlot.rightWidthOffsetMobile) / 100 * n, W = Number(l.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (d > 480) {
      if (l.forestPlot.type === "Linear" && (x = pt({
        domain: [Math.min(...s.map((F) => parseFloat(F[l.forestPlot.lower]))) - D, Math.max(...s.map((F) => parseFloat(F[l.forestPlot.upper]))) + D],
        range: [T, u[0] - z]
      }), x.type = C.LINEAR), l.forestPlot.type === "Logarithmic") {
        let F = Math.max(...s.map((q) => parseFloat(q[l.forestPlot.upper]))), L = Math.min(...s.map((q) => parseFloat(q[l.forestPlot.lower])));
        x = tr({
          domain: [L, F],
          range: [T, n - z],
          nice: !0
        }), x.type = C.LOG;
      }
    } else if (l.forestPlot.type === "Linear" && (x = pt({
      domain: [Math.min(...s.map((F) => parseFloat(F[l.forestPlot.lower]))) - D, Math.max(...s.map((F) => parseFloat(F[l.forestPlot.upper]))) + D],
      range: [W, n - V],
      type: C.LINEAR
    })), l.forestPlot.type === "Logarithmic") {
      let F = Math.max(...s.map((q) => parseFloat(q[l.forestPlot.upper]))), L = Math.min(...s.map((q) => parseFloat(q[l.forestPlot.lower])));
      x = tr({
        domain: [L, F],
        range: [T, n - z],
        nice: !0,
        base: F > 1 ? 10 : 2,
        round: !1,
        type: C.LOG
      });
    }
  }
  return { xScale: x, yScale: b, seriesScale: A, g1xScale: S, g2xScale: v, xScaleNoPadding: k, xScaleBrush: N };
}, Zy = ({ min: e, max: t, xMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? tr : pt)({
  domain: [e, t],
  range: [0, n],
  nice: a.useLogScale,
  zero: a.useLogScale,
  type: a.useLogScale ? "log" : "linear"
})), Jy = ({ min: e, max: t, yMax: n, config: a, leftMax: i }) => {
  e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const o = a.useLogScale ? tr : pt;
  return a.visualizationType === "Combo" && (t = i), o({
    domain: [e, t],
    range: [n, 0],
    nice: a.useLogScale,
    zero: a.useLogScale
  });
}, Gy = (e, t) => e === "date" ? pt({
  domain: [Math.min(...t), Math.max(...t)]
}) : Mn({ domain: t, padding: 0.5 }), Fa = (e, t, n = 0) => Mn({
  domain: e,
  range: t,
  padding: n,
  type: "point"
});
function eg(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const ba = () => {
  const { config: e } = $.useContext(De), { visualizationType: t, series: n, orientation: a, visualizationSubType: i } = e;
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
    visHasBarBorders: () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : n == null ? void 0 : n.some((K) => K.type === "Bar" || K.type === "Paired Bar" || K.type === "Deviation Bar"),
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
      const X = ["Forest Plot"];
      return !(a === "horizontal" || X.includes(t));
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
var po = {};
const tg = /* @__PURE__ */ Vi(Tp), ng = /* @__PURE__ */ Vi(Mp);
var yo = {};
yo.__esModule = !0;
yo.default = ag;
var Ba = $;
function ag(e) {
  var t = (0, Ba.useState)(e), n = t[0], a = t[1], i = (0, Ba.useRef)(null), o = (0, Ba.useCallback)(function(l, s) {
    i.current = s || null, a(l);
  }, [a]);
  return (0, Ba.useLayoutEffect)(function() {
    i.current && (i.current(n), i.current = null);
  }, [n]), [n, o];
}
var go = {}, xo = {};
xo.__esModule = !0;
xo.default = rg;
function rg(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var vo = {};
vo.__esModule = !0;
vo.default = lg;
function ig(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = og(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function og(e, t) {
  if (e) {
    if (typeof e == "string")
      return cs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return cs(e, t);
  }
}
function cs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function lg(e, t) {
  for (var n = e, a = 1 / 0, i = ig(t), o; !(o = i()).done; ) {
    var l = o.value, s = Math.sqrt(Math.pow(l.x - e.x, 2) + Math.pow(l.y - e.y, 2));
    s < a && (a = s, n = {
      x: l.x,
      y: l.y
    });
  }
  return n;
}
go.__esModule = !0;
go.default = cg;
var us = fu(xo), sg = fu(vo);
function fu(e) {
  return e && e.__esModule ? e : { default: e };
}
function cg(e, t, n) {
  var a, i, o, l;
  return n === void 0 && (n = {}), t.length > 0 ? (0, sg.default)(e, t) : {
    x: (0, us.default)(e.x, (a = n.xMin) != null ? a : -1 / 0, (i = n.xMax) != null ? i : 1 / 0),
    y: (0, us.default)(e.y, (o = n.yMin) != null ? o : -1 / 0, (l = n.yMax) != null ? l : 1 / 0)
  };
}
var bo = {};
bo.__esModule = !0;
bo.default = mg;
var ug = $;
function dg(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var a = [], i = e.getTotalLength(), o = 0; o <= i; o += n) {
    var l = e.getPointAtLength(o), s = l.matrixTransform(t);
    a.push(s);
  }
  return a;
}
function mg(e) {
  var t = (0, ug.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return dg(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
po.__esModule = !0;
po.default = pg;
var hn = $, On = tg, ds = ng, fg = Eo(yo), ms = Eo(go), hg = Eo(bo);
function Eo(e) {
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
function pg(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, a = n === void 0 ? !1 : n, i = t.snapToPointer, o = i === void 0 ? !0 : i, l = t.onDragEnd, s = t.onDragMove, c = t.onDragStart, u = t.x, d = t.y, h = t.dx, m = t.dy, p = t.isDragging, g = t.restrict, E = g === void 0 ? {} : g, y = t.restrictToPath, f = (0, hn.useRef)({
    x: u,
    y: d,
    dx: h,
    dy: m
  }), x = (0, fg.default)({
    x: u,
    y: d,
    dx: h ?? 0,
    dy: m ?? 0,
    isDragging: !1
  }), b = x[0], v = x[1], S = (0, hn.useState)(new On.Point({
    x: 0,
    y: 0
  })), A = S[0], k = S[1];
  (0, hn.useEffect)(function() {
    (f.current.x !== u || f.current.y !== d || f.current.dx !== h || f.current.dy !== m) && (f.current = {
      x: u,
      y: d,
      dx: h,
      dy: m
    }, v(function(T) {
      return It({}, T, {
        x: u,
        y: d,
        dx: h ?? 0,
        dy: m ?? 0
      });
    }));
  }), (0, hn.useEffect)(function() {
    p !== void 0 && b.isDragging !== p && v(function(T) {
      return It({}, T, {
        isDragging: p
      });
    });
  }, [b.isDragging, p, v]);
  var N = (0, hg.default)(y), C = (0, hn.useCallback)(function(T) {
    T.persist(), v(function(z) {
      var V = z.x, W = V === void 0 ? 0 : V, F = z.y, L = F === void 0 ? 0 : F, q = z.dx, j = z.dy, Y = new On.Point({
        x: (W || 0) + q,
        y: (L || 0) + j
      }), H = (0, ds.localPoint)(T) || new On.Point({
        x: 0,
        y: 0
      }), U = o ? H : Y, I = (0, ms.default)(U, N, E);
      return k((0, On.subtractPoints)(Y, H)), {
        isDragging: !0,
        dx: a ? 0 : z.dx,
        dy: a ? 0 : z.dy,
        x: a ? I.x : I.x - z.dx,
        y: a ? I.y : I.y - z.dy
      };
    }, c && function(z) {
      c(It({}, z, {
        event: T
      }));
    });
  }, [c, a, E, N, v, o]), P = (0, hn.useCallback)(function(T) {
    T.persist(), v(function(z) {
      if (!z.isDragging)
        return z;
      var V = z.x, W = V === void 0 ? 0 : V, F = z.y, L = F === void 0 ? 0 : F, q = (0, ds.localPoint)(T) || new On.Point({
        x: 0,
        y: 0
      }), j = o ? q : (0, On.sumPoints)(q, A), Y = (0, ms.default)(j, N, E);
      return It({}, z, {
        dx: Y.x - W,
        dy: Y.y - L
      });
    }, s && function(z) {
      z.isDragging && s(It({}, z, {
        event: T
      }));
    });
  }, [v, s, o, A, N, E]), D = (0, hn.useCallback)(function(T) {
    T.persist(), v(function(z) {
      return It({}, z, {
        isDragging: !1
      });
    }, l && function(z) {
      l(It({}, z, {
        event: T
      }));
    });
  }, [l, v]);
  return It({}, b, {
    dragEnd: D,
    dragMove: P,
    dragStart: C
  });
}
var $r = hu, Qn = Ao(bs), ai = Ao($), yg = Ao(po);
function Ao(e) {
  return e && e.__esModule ? e : { default: e };
}
function hu(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, a = e.snapToPointer, i = a === void 0 ? !0 : a, o = e.children, l = e.dx, s = e.dy, c = e.height, u = e.onDragEnd, d = e.onDragMove, h = e.onDragStart, m = e.resetOnStart, p = e.width, g = e.x, E = e.y, y = e.isDragging, f = e.restrict, x = e.restrictToPath, b = (0, yg.default)({
    resetOnStart: m,
    snapToPointer: i,
    onDragEnd: u,
    onDragMove: d,
    onDragStart: h,
    x: g,
    y: E,
    dx: l,
    dy: s,
    isDragging: y,
    restrict: f,
    restrictToPath: x
  });
  return /* @__PURE__ */ ai.default.createElement(ai.default.Fragment, null, b.isDragging && n && /* @__PURE__ */ ai.default.createElement("rect", {
    width: p,
    height: c,
    onPointerDown: b.dragStart,
    onPointerMove: b.dragMove,
    onPointerUp: b.dragEnd,
    fill: "transparent"
  }), o(b));
}
hu.propTypes = {
  children: Qn.default.func.isRequired,
  width: Qn.default.number.isRequired,
  height: Qn.default.number.isRequired,
  captureDragArea: Qn.default.bool,
  isDragging: Qn.default.bool
};
function Sr(e, t) {
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
function fs(e, t, n, a) {
  var i, o = Sr(e, t + (t < n ? -a : a)), l = Sr(e, n + (n < t ? -a : a)), s = Math.min(o, l), c = Math.max(o, l);
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
function So(e) {
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
function gg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Mi(e, t);
}
function Mi(e, t) {
  return Mi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Mi(e, t);
}
var pu = /* @__PURE__ */ function(e) {
  gg(t, e);
  function t() {
    for (var a, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return a = e.call.apply(e, [this].concat(o)) || this, a.handleDragStart = function(s) {
      var c = a.props, u = c.onBrushHandleChange, d = c.type, h = c.onBrushStart;
      u && u(d, So(s.event)), h && h(s);
    }, a.handleDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.type, h = c.isControlled;
      !s.isDragging || h || u(function(m) {
        var p = m.start, g = m.end, E = 0, y = Math.max(p.x, g.x), f = Math.min(p.x, g.x), x = Math.max(p.y, g.y), b = Math.min(p.y, g.y);
        switch (d) {
          case "right":
            return E = y + s.dx, _t({}, m, {
              activeHandle: d,
              extent: _t({}, m.extent, {
                x0: Math.max(Math.min(E, p.x), m.bounds.x0),
                x1: Math.min(Math.max(E, p.x), m.bounds.x1)
              })
            });
          case "left":
            return E = f + s.dx, _t({}, m, {
              activeHandle: d,
              extent: _t({}, m.extent, {
                x0: Math.min(E, g.x),
                x1: Math.max(E, g.x)
              })
            });
          case "bottom":
            return E = x + s.dy, _t({}, m, {
              activeHandle: d,
              extent: _t({}, m.extent, {
                y0: Math.min(E, p.y),
                y1: Math.max(E, p.y)
              })
            });
          case "top":
            return E = b + s.dy, _t({}, m, {
              activeHandle: d,
              extent: _t({}, m.extent, {
                y0: Math.min(E, g.y),
                y1: Math.max(E, g.y)
              })
            });
          default:
            return m;
        }
      });
    }, a.handleDragEnd = function() {
      var s = a.props, c = s.updateBrush, u = s.onBrushEnd, d = s.onBrushHandleChange, h = s.isControlled;
      h || c(function(m) {
        var p = m.start, g = m.end, E = m.extent;
        p.x = Math.min(E.x0, E.x1), p.y = Math.min(E.y0, E.y0), g.x = Math.max(E.x0, E.x1), g.y = Math.max(E.y0, E.y1);
        var y = _t({}, m, {
          start: p,
          end: g,
          activeHandle: null,
          isBrushing: !1,
          extent: {
            x0: Math.min(p.x, g.x),
            x1: Math.max(p.x, g.x),
            y0: Math.min(p.y, g.y),
            y1: Math.max(p.y, g.y)
          }
        });
        return u && u(y), y;
      }), d && d();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this, o = this.props, l = o.stageWidth, s = o.stageHeight, c = o.brush, u = o.type, d = o.handle, h = o.isControlled, m = o.isDragInProgress, p = o.renderBrushHandle, g = d.x, E = d.y, y = d.width, f = d.height, x = u === "right" || u === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ r.createElement($r, {
      width: l,
      height: s,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: h ? m : void 0
    }, function(b) {
      var v = b.dragStart, S = b.dragEnd, A = b.dragMove, k = b.isDragging;
      return /* @__PURE__ */ r.createElement("g", null, k && /* @__PURE__ */ r.createElement("rect", {
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
        x: g,
        y: E,
        width: y,
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
      }, p(_t({}, i.props.handle, {
        height: s,
        className: "visx-brush-handle-" + u,
        isBrushActive: c.extent.x0 !== -1 && c.extent.x1 !== -1
      }))));
    });
  }, t;
}(r.Component);
pu.propTypes = {
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
function xg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Di(e, t);
}
function Di(e, t) {
  return Di = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Di(e, t);
}
var To = /* @__PURE__ */ function(e) {
  xg(t, e);
  function t() {
    for (var a, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return a = e.call.apply(e, [this].concat(o)) || this, a.cornerDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.type;
      s.isDragging && u(function(h) {
        var m = h.start, p = h.end, g = Math.max(m.x, p.x), E = Math.min(m.x, p.x), y = Math.max(m.y, p.y), f = Math.min(m.y, p.y), x = 0, b = 0;
        switch (d) {
          case "topRight":
            return x = g + s.dx, b = f + s.dy, Nt({}, h, {
              activeHandle: d,
              extent: Nt({}, h.extent, {
                x0: Math.max(Math.min(x, m.x), h.bounds.x0),
                x1: Math.min(Math.max(x, m.x), h.bounds.x1),
                y0: Math.max(Math.min(b, p.y), h.bounds.y0),
                y1: Math.min(Math.max(b, p.y), h.bounds.y1)
              })
            });
          case "topLeft":
            return x = E + s.dx, b = f + s.dy, Nt({}, h, {
              activeHandle: d,
              extent: Nt({}, h.extent, {
                x0: Math.max(Math.min(x, p.x), h.bounds.x0),
                x1: Math.min(Math.max(x, p.x), h.bounds.x1),
                y0: Math.max(Math.min(b, p.y), h.bounds.y0),
                y1: Math.min(Math.max(b, p.y), h.bounds.y1)
              })
            });
          case "bottomLeft":
            return x = E + s.dx, b = y + s.dy, Nt({}, h, {
              activeHandle: d,
              extent: Nt({}, h.extent, {
                x0: Math.max(Math.min(x, p.x), h.bounds.x0),
                x1: Math.min(Math.max(x, p.x), h.bounds.x1),
                y0: Math.max(Math.min(b, m.y), h.bounds.y0),
                y1: Math.min(Math.max(b, m.y), h.bounds.y1)
              })
            });
          case "bottomRight":
            return x = g + s.dx, b = y + s.dy, Nt({}, h, {
              activeHandle: d,
              extent: Nt({}, h.extent, {
                x0: Math.max(Math.min(x, m.x), h.bounds.x0),
                x1: Math.min(Math.max(x, m.x), h.bounds.x1),
                y0: Math.max(Math.min(b, m.y), h.bounds.y0),
                y1: Math.min(Math.max(b, m.y), h.bounds.y1)
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
        var g = Nt({}, d, {
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
        return u && u(g), g;
      });
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, o = i.type, l = i.brush, s = i.stageWidth, c = i.stageHeight, u = i.style, d = i.corner, h = (u == null ? void 0 : u.cursor) || (o === "topLeft" || o === "bottomRight" ? "nwse-resize" : "nesw-resize"), m = l.activeHandle || l.isBrushing ? "none" : "all";
    return /* @__PURE__ */ r.createElement($r, {
      width: s,
      height: c,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(p) {
      var g = p.dragMove, E = p.dragEnd, y = p.dragStart, f = p.isDragging;
      return /* @__PURE__ */ r.createElement("g", null, f && /* @__PURE__ */ r.createElement("rect", {
        fill: "transparent",
        width: s,
        height: c,
        style: {
          cursor: h
        },
        onPointerMove: g,
        onPointerUp: E
      }), /* @__PURE__ */ r.createElement("rect", Nt({
        fill: "transparent",
        onPointerDown: y,
        onPointerMove: g,
        onPointerUp: E,
        className: "visx-brush-corner-" + o,
        style: Nt({
          cursor: h,
          pointerEvents: m
        }, u)
      }, d)));
    });
  }, t;
}(r.Component);
To.propTypes = {
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
To.defaultProps = {
  style: {}
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
function vg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $i(e, t);
}
function $i(e, t) {
  return $i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, $i(e, t);
}
var bg = {
  cursor: "move"
}, ko = /* @__PURE__ */ function(e) {
  vg(t, e);
  function t() {
    for (var a, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return a = e.call.apply(e, [this].concat(o)) || this, a.selectionDragStart = function(s) {
      var c = a.props, u = c.onMoveSelectionChange, d = c.onBrushStart;
      u && u("move", So(s.event)), d && d(s);
    }, a.selectionDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.isControlled;
      d || u(function(h) {
        var m = h.start, p = m.x, g = m.y, E = h.end, y = E.x, f = E.y, x = s.dx > 0 ? Math.min(s.dx, h.bounds.x1 - y) : Math.max(s.dx, h.bounds.x0 - p), b = s.dy > 0 ? Math.min(s.dy, h.bounds.y1 - f) : Math.max(s.dy, h.bounds.y0 - g);
        return tn({}, h, {
          isBrushing: !0,
          extent: tn({}, h.extent, {
            x0: p + x,
            x1: y + x,
            y0: g + b,
            y1: f + b
          })
        });
      });
    }, a.selectionDragEnd = function() {
      var s = a.props, c = s.updateBrush, u = s.onBrushEnd, d = s.onMoveSelectionChange, h = s.isControlled;
      h || c(function(m) {
        var p = tn({}, m, {
          isBrushing: !1,
          start: tn({}, m.start, {
            x: Math.min(m.extent.x0, m.extent.x1),
            y: Math.min(m.extent.y0, m.extent.y1)
          }),
          end: tn({}, m.end, {
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
    var i = this.props, o = i.width, l = i.height, s = i.stageWidth, c = i.stageHeight, u = i.brush, d = i.disableDraggingSelection, h = i.onMouseLeave, m = i.onMouseMove, p = i.onMouseUp, g = i.onClick, E = i.selectedBoxStyle, y = i.isControlled, f = i.isDragInProgress;
    return /* @__PURE__ */ r.createElement($r, {
      width: o,
      height: l,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: y ? f : void 0
    }, function(x) {
      var b = x.isDragging, v = x.dragStart, S = x.dragEnd, A = x.dragMove;
      return /* @__PURE__ */ r.createElement("g", null, b && /* @__PURE__ */ r.createElement("rect", {
        width: s,
        height: c,
        fill: "transparent",
        onPointerUp: y ? void 0 : S,
        onPointerMove: A,
        onPointerLeave: y ? void 0 : S,
        style: bg
      }), /* @__PURE__ */ r.createElement("rect", tn({
        x: Math.min(u.extent.x0, u.extent.x1),
        y: Math.min(u.extent.y0, u.extent.y1),
        width: o,
        height: l,
        className: "visx-brush-selection",
        onPointerDown: d ? void 0 : v,
        onPointerLeave: function(N) {
          h && h(N);
        },
        onPointerMove: function(N) {
          A(N), m && m(N);
        },
        onPointerUp: function(N) {
          y || S(N), p && p(N);
        },
        onClick: function(N) {
          g && g(N);
        },
        style: {
          pointerEvents: u.isBrushing || u.activeHandle ? "none" : "all",
          cursor: d ? void 0 : "move"
        }
      }, E)));
    });
  }, t;
}(r.Component);
ko.propTypes = {
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
ko.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
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
function Eg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zi(e, t);
}
function zi(e, t) {
  return zi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, zi(e, t);
}
var Ag = {
  cursor: "crosshair"
}, wo = /* @__PURE__ */ function(e) {
  Eg(t, e);
  function t(a) {
    var i;
    i = e.call(this, a) || this, i.mouseUpTime = 0, i.mouseDownTime = 0, i.handleWindowPointerUp = function() {
      var s = i.props, c = s.useWindowMoveEvents, u = s.onBrushEnd, d = s.resetOnEnd, h = i.state.brushingType;
      c && h && i.updateBrush(function(m) {
        var p = m.start, g = m.end, E = m.extent;
        p.x = Math.min(E.x0, E.x1), p.y = Math.min(E.y0, E.y0), g.x = Math.max(E.x0, E.x1), g.y = Math.max(E.y0, E.y1);
        var y = Lt({}, m, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return u && u(y), d && i.reset(), y;
      });
    }, i.handleWindowPointerMove = function(s) {
      var c = i.props.useWindowMoveEvents, u = i.state, d = u.brushingType, h = u.isBrushing, m = u.brushPageOffset, p = u.start;
      if (!(!c || !h)) {
        var g = s.pageX - ((m == null ? void 0 : m.pageX) || 0), E = s.pageY - ((m == null ? void 0 : m.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(d ?? "") && i.updateBrush(function(y) {
          var f = y.start, x = f.x, b = f.y, v = y.end, S = v.x, A = v.y;
          return Lt({}, y, {
            isBrushing: !0,
            extent: Lt({}, y.extent, i.getExtent({
              x: d === "left" ? Math.min(Math.max(x + g, y.bounds.x0), y.bounds.x1) : x,
              y: d === "top" ? Math.min(Math.max(b + E, y.bounds.y0), y.bounds.y1) : b
            }, {
              x: d === "right" ? Math.min(Math.max(S + g, y.bounds.x0), y.bounds.x1) : S,
              y: d === "bottom" ? Math.min(Math.max(A + E, y.bounds.y0), y.bounds.y1) : A
            }))
          });
        }), d === "move" && i.updateBrush(function(y) {
          var f = y.start, x = f.x, b = f.y, v = y.end, S = v.x, A = v.y, k = g > 0 ? Math.min(g, y.bounds.x1 - S) : Math.max(g, y.bounds.x0 - x), N = E > 0 ? Math.min(E, y.bounds.y1 - A) : Math.max(E, y.bounds.y0 - b);
          return Lt({}, y, {
            isBrushing: !0,
            extent: Lt({}, y.extent, {
              x0: x + k,
              y0: b + N,
              x1: S + k,
              y1: A + N
            })
          });
        }), d === "select" && i.updateBrush(function(y) {
          var f = y.start, x = f.x, b = f.y, v = {
            x: Math.min(Math.max(x + g, y.bounds.x0), y.bounds.x1),
            y: Math.min(Math.max(b + E, y.bounds.y0), y.bounds.y1)
          }, S = i.getExtent(p, v), A = Lt({}, y, {
            end: v,
            extent: S
          });
          return A;
        });
      }
    }, i.getExtent = function(s, c) {
      var u = i.props, d = u.brushDirection, h = u.width, m = u.height, p = d === "vertical" ? 0 : Math.min(s.x || 0, c.x || 0), g = d === "vertical" ? h : Math.max(s.x || 0, c.x || 0), E = d === "horizontal" ? 0 : Math.min(s.y || 0, c.y || 0), y = d === "horizontal" ? m : Math.max(s.y || 0, c.y || 0);
      return {
        x0: p,
        x1: g,
        y0: E,
        y1: y
      };
    }, i.handleDragStart = function(s) {
      var c = i.props, u = c.onBrushStart, d = c.left, h = c.top, m = c.inheritedMargin, p = c.useWindowMoveEvents, g = m != null && m.left ? m.left : 0, E = m != null && m.top ? m.top : 0, y = {
        x: (s.x || 0) + s.dx - d - g,
        y: (s.y || 0) + s.dy - h - E
      }, f = Lt({}, y);
      u && u(y), i.updateBrush(function(x) {
        return Lt({}, x, {
          start: y,
          end: f,
          extent: {
            x0: -1,
            x1: -1,
            y0: -1,
            y1: -1
          },
          isBrushing: !0,
          brushingType: "select",
          brushPageOffset: p ? So(s.event) : void 0
        });
      });
    }, i.handleBrushStart = function(s) {
      var c = i.props, u = c.onBrushStart, d = c.left, h = c.top, m = c.inheritedMargin;
      if (u) {
        var p = m != null && m.left ? m.left : 0, g = m != null && m.top ? m.top : 0, E = {
          x: (s.x || 0) + s.dx - d - p,
          y: (s.y || 0) + s.dy - h - g
        };
        u(E);
      }
    }, i.handleDragMove = function(s) {
      var c = i.props, u = c.left, d = c.top, h = c.inheritedMargin, m = c.useWindowMoveEvents;
      if (!(!s.isDragging || m)) {
        var p = (h == null ? void 0 : h.left) || 0, g = (h == null ? void 0 : h.top) || 0, E = {
          x: (s.x || 0) + s.dx - u - p,
          y: (s.y || 0) + s.dy - d - g
        };
        i.updateBrush(function(y) {
          var f = y.start, x = i.getExtent(f, E);
          return Lt({}, y, {
            end: E,
            extent: x
          });
        });
      }
    }, i.handleDragEnd = function() {
      var s = i.props, c = s.onBrushEnd, u = s.resetOnEnd, d = s.useWindowMoveEvents;
      d || i.updateBrush(function(h) {
        var m = h.extent, p = Lt({}, h, {
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
        return c && c(p), u && i.reset(), p;
      });
    }, i.getBrushWidth = function() {
      var s = i.state.extent, c = s.x0, u = s.x1;
      return Math.max(Math.max(c, u) - Math.min(c, u), 0);
    }, i.getBrushHeight = function() {
      var s = i.state.extent, c = s.y1, u = s.y0;
      return Math.max(Math.max(u, c) - Math.min(u, c), 0);
    }, i.handles = function() {
      var s = i.props.handleSize, c = i.state.extent, u = c.x0, d = c.x1, h = c.y0, m = c.y1, p = s / 2, g = i.getBrushWidth(), E = i.getBrushHeight();
      return {
        top: {
          x: u - p,
          y: h - p,
          height: s,
          width: g + s
        },
        bottom: {
          x: u - p,
          y: m - p,
          height: s,
          width: g + s
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
      var s = i.props.handleSize, c = i.state.extent, u = c.x0, d = c.x1, h = c.y0, m = c.y1, p = s / 2, g = s, E = s;
      return {
        topLeft: {
          x: Math.min(u, d) - p,
          y: Math.min(h, m) - p,
          width: g,
          height: E
        },
        topRight: {
          x: Math.max(u, d) - p,
          y: Math.min(h, m) - p,
          width: g,
          height: E
        },
        bottomLeft: {
          x: Math.min(u, d) - p,
          y: Math.max(h, m) - p,
          width: g,
          height: E
        },
        bottomRight: {
          x: Math.max(u, d) - p,
          y: Math.max(h, m) - p,
          width: g,
          height: E
        }
      };
    }, i.updateBrush = function(s) {
      var c = i.props.onChange;
      i.setState(s, function() {
        c && c(i.state);
      });
    }, i.reset = function() {
      var s = i.props, c = s.width, u = s.height;
      i.updateBrush(function() {
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
      });
    }, i.handleBrushingTypeChange = function(s, c) {
      i.updateBrush(function(u) {
        var d = Lt({}, u, {
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
    var i = this, o = this.state, l = o.start, s = o.end, c = this.props, u = c.top, d = c.left, h = c.width, m = c.height, p = c.onMouseLeave, g = c.onMouseUp, E = c.onMouseMove, y = c.onBrushEnd, f = c.onClick, x = c.resizeTriggerAreas, b = c.selectedBoxStyle, v = c.disableDraggingSelection, S = c.clickSensitivity, A = c.useWindowMoveEvents, k = c.renderBrushHandle, N = this.state.brushingType, C = this.handles(), P = this.corners(), D = this.getBrushWidth(), T = this.getBrushHeight(), z = new Set(x);
    return /* @__PURE__ */ r.createElement(be, {
      className: "visx-brush",
      top: u,
      left: d
    }, /* @__PURE__ */ r.createElement($r, {
      width: h,
      height: m,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: A ? N === "select" : void 0
    }, function(V) {
      var W = V.dragStart, F = V.isDragging, L = V.dragMove, q = V.dragEnd;
      return /* @__PURE__ */ r.createElement(Ot, {
        className: "visx-brush-overlay",
        fill: "transparent",
        x: 0,
        y: 0,
        width: h,
        height: m,
        onDoubleClick: function() {
          return i.reset();
        },
        onClick: function(Y) {
          var H = i.mouseUpTime - i.mouseDownTime;
          f && H < S && f(Y);
        },
        onPointerDown: function(Y) {
          i.mouseDownTime = Date.now(), W(Y);
        },
        onPointerLeave: function(Y) {
          p && p(Y);
        },
        onPointerMove: function(Y) {
          !F && E && E(Y), F && L(Y);
        },
        onPointerUp: function(Y) {
          i.mouseUpTime = Date.now(), g && g(Y), q(Y);
        },
        style: Ag
      });
    }), l && s && /* @__PURE__ */ r.createElement(ko, {
      updateBrush: this.updateBrush,
      width: D,
      height: T,
      stageWidth: h,
      stageHeight: m,
      brush: this.state,
      disableDraggingSelection: v,
      onBrushEnd: y,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: p,
      onMouseMove: E,
      onMouseUp: g,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: f,
      selectedBoxStyle: b,
      isControlled: A,
      isDragInProgress: A ? N === "move" : void 0
    }), l && s && Object.keys(C).filter(function(V) {
      return z.has(V);
    }).map(function(V) {
      var W = C[V];
      return W && /* @__PURE__ */ r.createElement(pu, {
        key: "handle-" + V,
        type: V,
        handle: W,
        stageWidth: h,
        stageHeight: m,
        updateBrush: i.updateBrush,
        brush: i.state,
        onBrushStart: i.handleBrushStart,
        onBrushEnd: y,
        isControlled: A,
        isDragInProgress: A ? N === V : void 0,
        onBrushHandleChange: i.handleBrushingTypeChange,
        renderBrushHandle: k
      });
    }), l && s && Object.keys(P).filter(function(V) {
      return z.has(V);
    }).map(function(V) {
      var W = P[V];
      return W && /* @__PURE__ */ r.createElement(To, {
        key: "corner-" + V,
        type: V,
        brush: i.state,
        updateBrush: i.updateBrush,
        stageWidth: h,
        stageHeight: m,
        corner: W,
        onBrushEnd: y
      });
    }));
  }, t;
}(r.Component);
wo.propTypes = {
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
  resetOnEnd: R.bool,
  useWindowMoveEvents: R.bool,
  renderBrushHandle: R.func
};
wo.defaultProps = {
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
function Sg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ri(e, t);
}
function Ri(e, t) {
  return Ri = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Ri(e, t);
}
var hs = 2, ps = "steelblue", Co = /* @__PURE__ */ function(e) {
  Sg(t, e);
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
        var u = s.x, d = s.y, h = a.props, m = h.xScale, p = h.yScale, g = Sr(m, u), E = Sr(p, d);
        c({
          x: "invert" in m && typeof m.invert < "u" ? g : m.domain()[g],
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
    var o = this.props, l = o.xScale, s = o.yScale, c = i.extent, u = c.x0, d = c.x1, h = c.y0, m = c.y1, p = fs(l, u || 0, d || 0, hs), g = fs(s, h || 0, m || 0, hs), E = {
      x0: p.start || 0,
      x1: p.end || 0,
      xValues: p.values,
      y0: g.start || 0,
      y1: g.end || 0,
      yValues: g.values
    };
    return E;
  }, n.render = function() {
    var i = this.props, o = i.xScale, l = i.yScale, s = i.height, c = i.width, u = i.margin, d = i.brushDirection, h = i.initialBrushPosition, m = i.innerRef, p = i.resizeTriggerAreas, g = i.brushRegion, E = i.yAxisOrientation, y = i.xAxisOrientation, f = i.selectedBoxStyle, x = i.disableDraggingSelection, b = i.resetOnEnd, v = i.onMouseLeave, S = i.onMouseMove, A = i.onClick, k = i.handleSize, N = i.useWindowMoveEvents, C = i.renderBrushHandle;
    if (!o || !l)
      return null;
    var P, D, T, z, V = u != null && u.left ? u.left : 0, W = u != null && u.top ? u.top : 0, F = u != null && u.right ? u.right : 0, L = u != null && u.bottom ? u.bottom : 0;
    return g === "chart" ? (T = 0, z = 0, P = c, D = s) : g === "yAxis" ? (z = 0, D = s, E === "right" ? (T = c, P = F) : (T = -V, P = V)) : (T = 0, P = c, y === "bottom" ? (z = s, D = L) : (z = -W, D = W)), /* @__PURE__ */ r.createElement(wo, {
      width: P,
      height: D,
      left: T,
      top: z,
      brushDirection: d,
      disableDraggingSelection: x,
      handleSize: k,
      inheritedMargin: u,
      initialBrushPosition: h,
      ref: m,
      resetOnEnd: b,
      resizeTriggerAreas: p,
      selectedBoxStyle: f,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: A,
      onMouseLeave: v,
      onMouseMove: S,
      useWindowMoveEvents: N,
      renderBrushHandle: C
    });
  }, t;
}($.Component);
Co.propTypes = {
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
  resetOnEnd: R.bool,
  handleSize: R.number,
  useWindowMoveEvents: R.bool,
  renderBrushHandle: R.func
};
Co.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: ps,
    fillOpacity: 0.2,
    stroke: ps,
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
const Tg = Co, kg = (e) => {
  const { transformedData: t, config: n, parseDate: a, formatDate: i, updateConfig: o } = $.useContext(De), { fontSize: l } = xa(), [s, c] = $.useState([...t]), u = $.useRef(null), d = 15, [h, m] = $.useState({
    startPosition: 0,
    endPosition: 0,
    startValue: "",
    endValue: ""
  }), p = {
    start: { x: 0 },
    end: { x: e.xMax }
  }, g = {
    fill: "#ddd",
    stroke: "blue",
    fillOpacity: 0.8,
    strokeOpacity: 0,
    rx: d
  }, E = (f) => {
    var N;
    if (!f)
      return;
    const { xValues: x } = f, b = (N = n.xAxis) == null ? void 0 : N.dataKey, v = t.filter((C) => x.includes(C[b])), S = x.slice().reverse().find((C) => C !== void 0), A = x.find((C) => C !== void 0), k = (C) => n.runtime.xAxis.type === "date" ? i(a(C)) : C;
    m((C) => {
      var P, D;
      return {
        ...C,
        startPosition: (P = u.current) == null ? void 0 : P.state.start.x,
        endPosition: (D = u.current) == null ? void 0 : D.state.end.x,
        endValue: k(S),
        startValue: k(A)
      };
    }), c(v);
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
  const y = () => {
    const f = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
    let x = 0;
    const b = 20;
    return n.xAxis.label || (!n.isResponsiveTicks && f && (x = Number(f + n.xAxis.tickWidthMax) / 1.6), !n.isResponsiveTicks && !f && (x = Number(n.xAxis.labelOffset) - b), n.isResponsiveTicks && n.dynamicMarginTop && (x = Number(n.xAxis.labelOffset + n.xAxis.tickWidthMax / 1.6)), n.isResponsiveTicks && !n.dynamicMarginTop && (x = Number(n.xAxis.labelOffset - b))), n.xAxis.label && (!n.isResponsiveTicks && f && (x = Number(n.xAxis.tickWidthMax + f)), !n.isResponsiveTicks && !f && (x = n.xAxis.labelOffset + b), n.isResponsiveTicks && !f && (x = Number(n.dynamicMarginTop ? n.dynamicMarginTop : n.xAxis.labelOffset) + b)), x;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(n.visualizationType))
    return /* @__PURE__ */ r.createElement(be, { display: n.brush.active ? "block" : "none", top: Number(e.yMax) + y(), left: Number(n.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ r.createElement("rect", { fill: "#eee", width: e.xMax, height: n.brush.height, rx: d }), /* @__PURE__ */ r.createElement(
      Tg,
      {
        renderBrushHandle: (f) => {
          var x;
          return /* @__PURE__ */ r.createElement(wg, { textProps: h, fontSize: l[n.fontSize], ...f, isBrushing: (x = u.current) == null ? void 0 : x.state.isBrushing });
        },
        innerRef: u,
        useWindowMoveEvents: !0,
        selectedBoxStyle: g,
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
}, wg = (e) => {
  const { x: t, isBrushActive: n, isBrushing: a, className: i, textProps: o } = e, l = 8;
  if (!n)
    return null;
  const s = i.includes("left"), c = s ? "scale(-1, 1)" : "translate(0,0)", u = s ? "end" : "start";
  return /* @__PURE__ */ r.createElement(be, { left: t + l / 2, top: -2 }, /* @__PURE__ */ r.createElement($e, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: u, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, s ? o.startValue : o.endValue), /* @__PURE__ */ r.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: a ? "#297EF1" : "#666", strokeWidth: "1", transform: c }));
}, Kt = (e) => {
  var bt, Et;
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
    rawData: g,
    capitalize: E,
    setSharedFilter: y,
    setSharedFilterValue: f,
    getTextWidth: x,
    isDebug: b
  } = $.useContext(De), { visualizationType: v, visualizationSubType: S, orientation: A, xAxis: k, yAxis: N, runtime: C, debugSvg: P } = l;
  let [D] = o;
  l && l.legend && !l.legend.hide && l.legend.position !== "bottom" && ["lg", "md"].includes(u) && (D = D * 0.73);
  const { horizontal: T } = l.heights, z = A === "horizontal" || l.visualizationType === "Forest Plot", V = !0;
  let W = l.aspectRatio ? D * l.aspectRatio : l.visualizationType === "Forest Plot" ? l.heights.vertical : l.heights[A];
  const F = D - C.yAxis.size - (v === "Combo" ? l.yAxis.rightAxisSize : 0);
  let L = W - (A === "horizontal" ? 0 : C.xAxis.size);
  l.visualizationType === "Forest Plot" && (W = W + l.data.length * l.forestPlot.rowHeight, L = L + l.data.length * l.forestPlot.rowHeight, D = o[0]), l.brush.active && (W = W + l.brush.height);
  const { minValue: q, maxValue: j, existPositiveValue: Y, isAllLine: H } = Dr(l, i), { visSupportsReactTooltip: U } = ba(), { hasTopAxis: I } = eg(l), [Q, ne] = $.useState(!1), [he, Pe] = $.useState({ x: 0, y: 0 }), ke = $.useRef(), X = $.useRef(), K = oo(ke, {
    freezeOnceVisible: !1
  }), re = (Z) => l.runtime.xAxis.type === "date" ? s(Z[l.runtime.originalXAxis.dataKey]).getTime() : Z[l.runtime.originalXAxis.dataKey], _ = (Z, se) => Z[se], ue = l.brush.active && ((bt = l.brush.data) != null && bt.length) ? l.brush.data.map((Z) => re(Z)) : i.map((Z) => re(Z)), le = l.orientation === "horizontal" || l.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", ge = { data: i, config: l, minValue: q, maxValue: j, isAllLine: H, existPositiveValue: Y, xAxisDataMapped: ue, xMax: F, yMax: L }, { min: ve, max: xe, leftMax: Ne, rightMax: Ae } = mu(ge), { yScaleRight: Se, hasRightAxis: pe } = ho({ config: l, yMax: L, data: i, updateConfig: m }), { xScale: ae, yScale: J, seriesScale: Ve, g1xScale: me, g2xScale: Le, xScaleNoPadding: Oe, xScaleBrush: Ie } = Qy({ ...ge, min: ve, max: xe, leftMax: Ne, rightMax: Ae, dimensions: o }), [Be, Ye] = $.useState(null);
  $.useEffect(() => {
    var Z;
    Ye((Z = X == null ? void 0 : X.current) == null ? void 0 : Z.getBoundingClientRect());
  }, [X, l.legend]);
  const rt = (Z, se) => {
    if (l.useLogScale && Z === 0.1 && (Z = 0), !(l.data && !l.data[se] && v === "Forest Plot"))
      return l.visualizationType === "Forest Plot" ? l.data[se][l.xAxis.dataKey] : C.yAxis.type === "date" ? c(s(Z)) : A === "vertical" ? d(Z, "left", V) : Z;
  }, te = (Z) => (l.useLogScale && Z === 0.1 && (Z = 0), C.xAxis.type === "date" && l.visualizationType !== "Forest Plot" ? c(Z) : A === "horizontal" && l.visualizationType !== "Forest Plot" ? d(Z, "left", V) : l.xAxis.type === "continuous" && l.visualizationType !== "Forest Plot" ? d(Z, "bottom", V) : l.visualizationType === "Forest Plot" ? d(Z, "left", l.dataFormat.abbreviated, l.runtime.xAxis.prefix, l.runtime.xAxis.suffix, Number(l.dataFormat.roundTo)) : Z), et = (Z) => {
    const { numTicks: se } = C[Z];
    let Ce;
    return Z === "yAxis" && (Ce = z && !se ? i.length : z && se ? se : !z && !se ? void 0 : !z && se && se, Ce === void 0 && !l.dataFormat.roundTo && (Number(xe) <= 3 ? Ce = 2 : Ce = 4), Number(Ce) > Number(xe) && (Ce = Number(ve) < 0 ? Math.round(xe) * 2 : Math.round(xe))), Z === "xAxis" && (Ce = z && !se ? void 0 : z && se ? se : !z && !se ? void 0 : !z && se && se, z && Ce === void 0 && !l.dataFormat.roundTo && (xe <= 3 ? Ce = 2 : Ce = 4), l.visualizationType === "Forest Plot" && (Ce = l.yAxis.numTicks !== "" ? l.yAxis.numTicks : 4)), Ce;
  }, { tooltipData: ze, showTooltip: He, hideTooltip: wt, tooltipOpen: dt, tooltipLeft: Dt, tooltipTop: Ct } = Rc(), {
    handleTooltipMouseOver: nt,
    handleTooltipClick: yt,
    handleTooltipMouseOff: w,
    tooltipStyles: oe,
    TooltipListItem: de,
    getXValueFromCoordinateDate: ce,
    getXValueFromCoordinate: we
  } = Wc({
    xScale: ae,
    yScale: J,
    showTooltip: He,
    hideTooltip: wt
  });
  $.useEffect(() => {
    document.querySelector(".isEditor") && ne((se) => !0);
  }), $.useEffect(() => {
    (K == null ? void 0 : K.isIntersecting) === !0 && l.animate && setTimeout(() => {
      ne((Z) => !0);
    }, 500);
  }, [K == null ? void 0 : K.isIntersecting, l.animate]);
  const Ee = () => {
    const { visualizationType: Z } = l;
    return Z === "Combo" && C.forecastingSeriesKeys > 0 || Z === "Area Chart" || Z === "Line" || Z === "Bar";
  }, ie = Number(A === "horizontal" ? l.xAxis.size : l.yAxis.size), je = () => l.visualizationType === "Forest Plot" ? l.data.length : et("yAxis"), at = (Z) => {
    const se = Z.currentTarget.getBoundingClientRect(), Ce = Z.clientX - se.left, ye = Z.clientY - se.top;
    Pe({
      x: Ce,
      y: ye
    });
  };
  return isNaN(D) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(Bt, { component: "LinearChart" }, /* @__PURE__ */ r.createElement("div", { style: { width: `${D}px`, height: `${W}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ r.createElement(
    "svg",
    {
      onMouseMove: at,
      width: "100%",
      height: "100%",
      className: `linear ${l.animate ? "animated" : ""} ${Q && l.animate ? "animate" : ""} ${P && "debug"}`,
      role: "img",
      "aria-label": h(l),
      ref: X,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ r.createElement(Ot, { width: D, height: W, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(v) && /* @__PURE__ */ r.createElement(iy, { scale: J, tickLength: l.useLogScale ? 6 : 8, left: Number(C.yAxis.size) - l.yAxis.axisPadding, label: C.yAxis.label, stroke: "#333", tickFormat: (Z, se) => rt(Z, se), numTicks: je() }, (Z) => {
      const se = l.orientation === "horizontal" ? (Z.axisToPoint.y - Z.axisFromPoint.y) / 2 : (Z.axisFromPoint.y - Z.axisToPoint.y) / 2, Ce = L / Z.ticks.length / 2 - L / Z.ticks.length * (1 - l.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(be, { className: "left-axis" }, Z.ticks.map((ye, Ge) => {
        const mt = Z.ticks[0].to.y, Ze = 15, At = String(ye.value).startsWith("1") || ye.value === 0.1 ? "block" : "none", ft = At === "block" ? 7 : 0, Pt = { x: ye.to.x - ft, y: ye.to.y };
        return /* @__PURE__ */ r.createElement(be, { key: `vx-tick-${ye.value}-${Ge}`, className: "vx-axis-tick" }, !C.yAxis.hideTicks && /* @__PURE__ */ r.createElement(qe, { key: `${ye.value}--hide-hideTicks`, from: ye.from, to: l.useLogScale ? Pt : ye.to, stroke: l.yAxis.tickColor, display: A === "horizontal" ? "none" : "block" }), C.yAxis.gridLines ? /* @__PURE__ */ r.createElement(qe, { key: `${ye.value}--hide-hideGridLines`, display: (l.useLogScale && At).toString(), from: { x: ye.from.x + F, y: ye.from.y }, to: ye.from, stroke: "rgba(0,0,0,0.3)" }) : "", A === "horizontal" && S !== "stacked" && l.yAxis.labelPlacement === "On Date/Category Axis" && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          $e,
          {
            transform: `translate(${ye.to.x - 5}, ${l.isLollipopChart ? ye.to.y - mt : ye.to.y - mt + (Number(l.barHeight * l.series.length) - Ze) / 2}) rotate(-${l.runtime.horizontal && l.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          ye.formattedValue
        ), A === "horizontal" && S === "stacked" && l.yAxis.labelPlacement === "On Date/Category Axis" && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement($e, { transform: `translate(${ye.to.x - 5}, ${ye.to.y - mt + (Number(l.barHeight) - Ze) / 2}) rotate(-${C.horizontal ? C.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, ye.formattedValue), A === "horizontal" && v === "Paired Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement($e, { transform: `translate(${ye.to.x - 5}, ${ye.to.y - mt + Number(l.barHeight) / 2}) rotate(-${C.horizontal ? C.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, ye.formattedValue), A === "horizontal" && v === "Deviation Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement($e, { transform: `translate(${ye.to.x - 5}, ${l.isLollipopChart ? ye.to.y - mt + 2 : ye.to.y - mt + Number(l.barHeight) / 2}) rotate(-${C.horizontal ? C.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, ye.formattedValue), A === "vertical" && v !== "Paired Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          $e,
          {
            display: l.useLogScale ? At : "block",
            dx: l.useLogScale ? -6 : 0,
            x: l.runtime.horizontal ? ye.from.x + 2 : ye.to.x,
            y: ye.to.y + (l.runtime.horizontal ? Ce : 0),
            angle: -Number(l.yAxis.tickRotation) || 0,
            verticalAnchor: l.runtime.horizontal ? "start" : "middle",
            textAnchor: l.runtime.horizontal ? "start" : "end",
            fill: l.yAxis.tickLabelColor
          },
          ye.formattedValue
        ));
      }), !l.yAxis.hideAxis && /* @__PURE__ */ r.createElement(qe, { from: Z.axisFromPoint, to: C.horizontal ? { x: 0, y: l.visualizationType === "Forest Plot" ? W : Number(T) } : Z.axisToPoint, stroke: "#000" }), J.domain()[0] < 0 && /* @__PURE__ */ r.createElement(qe, { from: { x: Z.axisFromPoint.x, y: J(0) }, to: { x: F, y: J(0) }, stroke: "#333" }), v === "Bar" && A === "horizontal" && ae.domain()[0] < 0 && /* @__PURE__ */ r.createElement(qe, { from: { x: ae(0), y: 0 }, to: { x: ae(0), y: L }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ r.createElement($e, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * C.yAxis.size}, ${se}) rotate(-90)`, fontWeight: "bold", fill: l.yAxis.labelColor }, Z.label));
    }),
    pe && /* @__PURE__ */ r.createElement(cy, { scale: Se, left: Number(D - l.yAxis.rightAxisSize), label: l.yAxis.rightLabel, tickFormat: (Z) => d(Z, "right"), numTicks: C.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Z) => {
      const se = l.orientation === "horizontal" ? (Z.axisToPoint.y - Z.axisFromPoint.y) / 2 : (Z.axisFromPoint.y - Z.axisToPoint.y) / 2, Ce = L / Z.ticks.length / 2 - L / Z.ticks.length * (1 - l.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(be, { className: "right-axis" }, Z.ticks.map((ye, Ge) => /* @__PURE__ */ r.createElement(be, { key: `vx-tick-${ye.value}-${Ge}`, className: "vx-axis-tick" }, !C.yAxis.rightHideTicks && /* @__PURE__ */ r.createElement(qe, { from: ye.from, to: ye.to, display: C.horizontal ? "none" : "block", stroke: l.yAxis.rightAxisTickColor }), C.yAxis.rightGridLines ? /* @__PURE__ */ r.createElement(qe, { from: { x: ye.from.x + F, y: ye.from.y }, to: ye.from, stroke: "rgba(0,0,0,0.3)" }) : "", !l.yAxis.rightHideLabel && /* @__PURE__ */ r.createElement($e, { x: ye.to.x, y: ye.to.y + (C.horizontal ? Ce : 0), verticalAnchor: C.horizontal ? "start" : "middle", textAnchor: "start", fill: l.yAxis.rightAxisTickLabelColor }, ye.formattedValue))), !l.yAxis.rightHideAxis && /* @__PURE__ */ r.createElement(qe, { from: Z.axisFromPoint, to: Z.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement($e, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${l.yAxis.rightLabelOffsetSize ? l.yAxis.rightLabelOffsetSize : 0}, ${se}) rotate(-90)`, fontWeight: "bold", fill: l.yAxis.rightAxisLabelColor }, Z.label));
    }),
    I && l.topAxis.hasLine && /* @__PURE__ */ r.createElement(
      fy,
      {
        stroke: "#333",
        left: Number(C.yAxis.size),
        scale: ae,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    v !== "Paired Bar" && v !== "Spark Line" && /* @__PURE__ */ r.createElement(
      Ia,
      {
        top: C.horizontal && l.visualizationType !== "Forest Plot" ? Number(T) + Number(l.xAxis.axisPadding) : (l.visualizationType === "Forest Plot", L + Number(l.xAxis.axisPadding)),
        left: l.visualizationType !== "Forest Plot" ? Number(C.yAxis.size) : 0,
        label: C.xAxis.label,
        tickFormat: te,
        scale: ae,
        stroke: "#333",
        numTicks: et("xAxis"),
        tickStroke: "#333"
      },
      (Z) => {
        const se = l.visualizationType !== "Forest Plot" ? (Z.axisToPoint.x - Z.axisFromPoint.x) / 2 : o[0] / 2, Ce = (_e) => /\s/.test(_e), ye = Z.ticks.some((_e) => Ce(_e.value)), Ge = { small: 16, medium: 18, large: 20 }, mt = 8, Ze = Math.max(...Z.ticks.map((_e) => x(_e.formattedValue, `normal ${Ge[l.fontSize]}px sans-serif`))), At = ye ? 180 : 100, ft = Z.ticks.map((_e) => x(_e.formattedValue, `normal ${Ge[l.fontSize]}px sans-serif`)), Pt = ft.reduce((_e, ht) => _e + ht, At), Yt = (F - Pt) / (Z.ticks.length - 1);
        let Je = [0];
        for (let _e = 1; _e < ft.length; _e++)
          Je[_e] = Je[_e - 1] + ft[_e - 1] + Yt;
        let ct = !1;
        ft.forEach((_e, ht) => {
          if (Je[ht] + ft[ht] > Je[ht + 1]) {
            ct = !0;
            return;
          }
        });
        const gt = ct && l.isResponsiveTicks ? Ze + mt + 20 : 0, Zt = Number(l.xAxis.tickRotation) > 0 ? Number(l.xAxis.tickRotation) : 0;
        return l.dynamicMarginTop = gt, l.xAxis.tickWidthMax = Ze, /* @__PURE__ */ r.createElement(be, { className: "bottom-axis", width: o[0] }, Z.ticks.map((_e, ht, Ea) => {
          const Cn = String(_e.value).startsWith("1") || _e.value === 0.1 ? "block" : "none", Aa = Cn === "block" ? 16 : mt, Sa = { x: _e.to.x, y: Aa };
          let Ta = x(_e.formattedValue, `normal ${Ge[l.fontSize]}px sans-serif`), Rr = 100 / Ea.length;
          l.yAxis.tickRotation = l.isResponsiveTicks && l.orientation === "horizontal" ? 0 : l.yAxis.tickRotation, l.xAxis.tickRotation = l.isResponsiveTicks && l.orientation === "vertical" ? 0 : l.xAxis.tickRotation;
          const In = l.isResponsiveTicks && ct ? -Number(l.xAxis.maxTickRotation) || -90 : -Number(l.runtime.xAxis.tickRotation);
          return /* @__PURE__ */ r.createElement(be, { key: `vx-tick-${_e.value}-${ht}`, className: "vx-axis-tick" }, !l.xAxis.hideTicks && /* @__PURE__ */ r.createElement(qe, { from: _e.from, to: A === "horizontal" && l.useLogScale ? Sa : _e.to, stroke: l.xAxis.tickColor, strokeWidth: Cn === "block" && l.useLogScale ? 1.3 : 1 }), !l.xAxis.hideLabel && /* @__PURE__ */ r.createElement(
            $e,
            {
              dy: l.orientation === "horizontal" && l.useLogScale ? 8 : 0,
              display: l.orientation === "horizontal" && l.useLogScale ? Cn : "block",
              x: _e.to.x,
              y: _e.to.y,
              angle: In,
              verticalAnchor: In < -50 ? "middle" : "start",
              textAnchor: In ? "end" : "middle",
              width: ct && !l.isResponsiveTicks && !Number(l[le].tickRotation) ? Rr : Ta,
              fill: l.xAxis.tickLabelColor
            },
            _e.formattedValue
          ));
        }), !l.xAxis.hideAxis && /* @__PURE__ */ r.createElement(qe, { from: Z.axisFromPoint, to: Z.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(
          $e,
          {
            x: se,
            y: l.visualizationType === "Forest Plot" ? l.xAxis.tickWidthMax + 40 : l.orientation === "horizontal" ? gt || l.xAxis.labelOffset : l.isResponsiveTicks && gt && !z ? gt : Number(Zt) && !l.isResponsiveTicks && !z ? Number(Zt + Ze / 1.3) : Number(l.xAxis.labelOffset),
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: l.xAxis.labelColor
          },
          Z.label
        ));
      }
    ),
    v === "Paired Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Ia, { top: L, left: Number(C.yAxis.size), label: C.xAxis.label, tickFormat: C.xAxis.type === "date" ? c : d, scale: me, stroke: "#333", tickStroke: "#333", numTicks: C.xAxis.numTicks || void 0 }, (Z) => /* @__PURE__ */ r.createElement(be, { className: "bottom-axis" }, Z.ticks.map((se, Ce) => {
      const ye = se.index !== 0 ? l.yAxis.tickRotation : 0, Ge = se.index !== 0 && l.yAxis.tickRotation && l.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ r.createElement(be, { key: `vx-tick-${se.value}-${Ce}`, className: "vx-axis-tick" }, !C.yAxis.hideTicks && /* @__PURE__ */ r.createElement(qe, { from: se.from, to: se.to, stroke: "#333" }), !C.yAxis.hideLabel && /* @__PURE__ */ r.createElement($e, { x: se.to.x, y: se.to.y, angle: -ye, verticalAnchor: "start", textAnchor: Ge }, d(se.value, "left")));
    }), !C.yAxis.hideAxis && /* @__PURE__ */ r.createElement(qe, { from: Z.axisFromPoint, to: Z.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ r.createElement(
      Ia,
      {
        top: L,
        left: Number(C.yAxis.size),
        label: C.xAxis.label,
        tickFormat: C.xAxis.type === "date" ? c : C.xAxis.dataKey !== "Year" ? d : (Z) => Z,
        scale: Le,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: C.xAxis.numTicks || void 0
      },
      (Z) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(be, { className: "bottom-axis" }, Z.ticks.map((se, Ce) => {
        const ye = se.index !== 0 ? l.yAxis.tickRotation : 0, Ge = se.index !== 0 && l.yAxis.tickRotation && l.yAxis.tickRotation > 0 ? "end" : "middle";
        return /* @__PURE__ */ r.createElement(be, { key: `vx-tick-${se.value}-${Ce}`, className: "vx-axis-tick" }, !C.yAxis.hideTicks && /* @__PURE__ */ r.createElement(qe, { from: se.from, to: se.to, stroke: "#333" }), !C.yAxis.hideLabel && /* @__PURE__ */ r.createElement($e, { x: se.to.x, y: se.to.y, angle: -ye, verticalAnchor: "start", textAnchor: Ge }, d(se.value, "left")));
      }), !C.yAxis.hideAxis && /* @__PURE__ */ r.createElement(qe, { from: Z.axisFromPoint, to: Z.axisToPoint, stroke: "#333" })), /* @__PURE__ */ r.createElement(be, null, /* @__PURE__ */ r.createElement($e, { x: F / 2, y: l.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, C.xAxis.label)))
    )),
    v === "Deviation Bar" && ((Et = l.series) == null ? void 0 : Et.length) === 1 && /* @__PURE__ */ r.createElement(Ky, { animatedChart: Q, xScale: ae, yScale: J, width: F, height: L }),
    v === "Paired Bar" && /* @__PURE__ */ r.createElement(Xy, { originalWidth: D, width: F, height: L }),
    v === "Scatter Plot" && /* @__PURE__ */ r.createElement(
      Wy,
      {
        xScale: ae,
        yScale: J,
        getXAxisData: re,
        getYAxisData: _,
        xMax: F,
        yMax: L,
        handleTooltipMouseOver: nt,
        handleTooltipMouseOff: w,
        handleTooltipClick: yt,
        tooltipData: ze,
        showTooltip: He
      }
    ),
    v === "Box Plot" && /* @__PURE__ */ r.createElement(Hy, { xScale: ae, yScale: J }),
    (v === "Area Chart" && l.visualizationSubType === "regular" || v === "Combo") && /* @__PURE__ */ r.createElement(My, { xScale: ae, yScale: J, yMax: L, xMax: F, chartRef: X, width: F, height: L, handleTooltipMouseOver: nt, handleTooltipMouseOff: w, tooltipData: ze, showTooltip: He }),
    (v === "Area Chart" && l.visualizationSubType === "stacked" || v === "Combo") && /* @__PURE__ */ r.createElement($y, { xScale: ae, yScale: J, yMax: L, xMax: F, chartRef: X, width: F, height: L, handleTooltipMouseOver: nt, handleTooltipMouseOff: w, tooltipData: ze, showTooltip: He }),
    (v === "Bar" || v === "Combo") && /* @__PURE__ */ r.createElement(
      Vy,
      {
        xScale: ae,
        yScale: J,
        seriesScale: Ve,
        xMax: F,
        yMax: L,
        getXAxisData: re,
        getYAxisData: _,
        animatedChart: Q,
        visible: Q,
        handleTooltipMouseOver: nt,
        handleTooltipMouseOff: w,
        handleTooltipClick: yt,
        tooltipData: ze,
        showTooltip: He,
        chartRef: X
      }
    ),
    (v === "Line" || v === "Combo") && /* @__PURE__ */ r.createElement(
      ss,
      {
        xScale: ae,
        yScale: J,
        getXAxisData: re,
        getYAxisData: _,
        xMax: F,
        yMax: L,
        seriesStyle: l.series,
        handleTooltipMouseOver: nt,
        handleTooltipMouseOff: w,
        handleTooltipClick: yt,
        tooltipData: ze,
        showTooltip: He,
        chartRef: X
      }
    ),
    (v === "Forecasting" || v === "Combo") && /* @__PURE__ */ r.createElement(
      jy,
      {
        showTooltip: He,
        tooltipData: ze,
        xScale: ae,
        yScale: J,
        width: F,
        le: !0,
        height: L,
        xScaleNoPadding: Oe,
        chartRef: X,
        getXValueFromCoordinate: we,
        handleTooltipMouseOver: nt,
        handleTooltipMouseOff: w,
        isBrush: !1
      }
    ),
    l.yAxis.anchors && l.yAxis.anchors.map((Z) => /* @__PURE__ */ r.createElement(qe, { strokeDasharray: p(Z.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + l.yAxis.size, y: J(Z.value) }, to: { x: F, y: J(Z.value) }, display: C.horizontal ? "none" : "block" })),
    v === "Forest Plot" && /* @__PURE__ */ r.createElement(
      Yy,
      {
        xScale: ae,
        yScale: J,
        seriesScale: Ve,
        width: D,
        height: W,
        getXAxisData: re,
        getYAxisData: _,
        animatedChart: Q,
        visible: Q,
        handleTooltipMouseOver: nt,
        handleTooltipMouseOff: w,
        handleTooltipClick: yt,
        tooltipData: ze,
        showTooltip: He,
        chartRef: X,
        config: l
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(l.visualizationType) && !z && /* @__PURE__ */ r.createElement(kg, { xScaleBrush: Ie, yScale: J, xMax: F, yMax: L }),
    v !== "Bar" && v !== "Paired Bar" && v !== "Box Plot" && v !== "Area Chart" && v !== "Scatter Plot" && v !== "Deviation Bar" && v !== "Forecasting" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ss, { xScale: ae, yScale: J, getXAxisData: re, getYAxisData: _, xMax: F, yMax: L, seriesStyle: l.series })),
    l.yAxis.anchors && l.yAxis.anchors.map((Z, se) => {
      let Ce = J(Z.value);
      if (!Z.value)
        return;
      const ye = A === "horizontal" && v === "Bar" ? l.barHeight / 4 : 0;
      if (Ce)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            qe,
            {
              key: `yAxis-${Z.value}--${se}`,
              strokeDasharray: p(Z.lineStyle),
              stroke: Z.color ? Z.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + ie, y: Ce - ye },
              to: { x: D - l.yAxis.rightAxisSize, y: Ce - ye }
            }
          )
        );
    }),
    l.xAxis.anchors && l.xAxis.anchors.map((Z, se) => {
      let Ce = k;
      A === "horizontal" && (Ce = N);
      let ye = Ce.type === "date" ? ae(s(Z.value, !1)) : ae(Z.value);
      if (ye)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            qe,
            {
              key: `xAxis-${Z.value}--${se}`,
              strokeDasharray: p(Z.lineStyle),
              stroke: Z.color ? Z.color : "rgba(0,0,0,1)",
              fill: Z.color ? Z.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(ye) + Number(ie), y: 0 },
              to: { x: Number(ye) + Number(ie), y: L }
            }
          )
        );
    }),
    l.visualizationType !== "Bar" && l.visualizationType !== "Combo" && /* @__PURE__ */ r.createElement(fo, { xScale: ae, handleTooltipClick: yt, handleTooltipMouseOff: w, handleTooltipMouseOver: nt, showTooltip: He, hideTooltip: wt, tooltipData: ze, yMax: L, width: D }),
    Ee && He && ze && l.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(be, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(qe, { from: { x: ze.dataXPosition - 10, y: 0 }, to: { x: ze.dataXPosition - 10, y: L }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    Ee && He && ze && l.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(be, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: l.yAxis.size ? l.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(qe, { from: { x: 0, y: ze.dataYPosition }, to: { x: F, y: ze.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    l.filters && l.filters.values.length === 0 && i.length === 0 && /* @__PURE__ */ r.createElement($e, { x: Number(l.yAxis.size) + Number(F / 2), y: W / 2 - l.xAxis.size / 2, textAnchor: "middle" }, l.chartMessage.noData),
    l.visualizationType === "Bar" && l.tooltips.singleSeries && l.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(be, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: l.yAxis.size ? l.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(qe, { from: { x: 0, y: he.y }, to: { x: F, y: he.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    l.visualizationType === "Bar" && l.tooltips.singleSeries && l.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(be, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(qe, { from: { x: he.x, y: 0 }, to: { x: he.x, y: L }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), ze && Object.entries(ze.data).length > 0 && dt && He && ze.dataYPosition && ze.dataXPosition && !l.tooltips.singleSeries && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${l.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(Hc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: Dt, top: Ct }, /* @__PURE__ */ r.createElement("ul", null, typeof ze == "object" && Object.entries(ze.data).map((Z, se) => /* @__PURE__ */ r.createElement(de, { item: Z, key: se }))))), U() && /* @__PURE__ */ r.createElement(Oy, { id: `cdc-open-viz-tooltip-${C.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${l.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ r.createElement("div", { className: "animation-trigger", ref: ke })));
};
var Cg = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
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
function Pg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function yu(e) {
  var t = e.id, n = e.markerWidth, a = n === void 0 ? 3 : n, i = e.markerHeight, o = i === void 0 ? 3 : i, l = e.markerUnits, s = l === void 0 ? "userSpaceOnUse" : l, c = e.children, u = Pg(e, Cg);
  return /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("marker", Fi({
    id: t,
    markerWidth: a,
    markerHeight: o,
    markerUnits: s
  }, u), c));
}
yu.propTypes = {
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
var Ng = ["id", "size", "strokeWidth"];
function Bi() {
  return Bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Bi.apply(this, arguments);
}
function Lg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Og(e) {
  var t = e.id, n = e.size, a = n === void 0 ? 9 : n, i = e.strokeWidth, o = i === void 0 ? 1 : i, l = Lg(e, Ng), s = a + o * 2, c = a, u = s / 2, d = "0 0, " + a + " " + a / 2 + ", 0 " + a;
  return /* @__PURE__ */ r.createElement(yu, Bi({
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
const _g = (e) => {
  var D;
  const { width: t, height: n } = e, { transformedData: a, config: i, parseDate: o, formatDate: l, seriesHighlight: s, formatNumber: c, colorScale: u, handleChartAriaLabels: d } = $.useContext(De);
  let h = t;
  const { minValue: m, maxValue: p } = Dr(i, a), g = { top: 5, right: 10, bottom: 10, left: 10 }, E = n, y = h - i.runtime.yAxis.size, f = E - g.top - 20, x = (T) => i.runtime.xAxis.type === "date" ? o(T[i.runtime.originalXAxis.dataKey]).getTime() : T[i.runtime.originalXAxis.dataKey], b = (T, z) => T[z];
  let v, S;
  const { max: A, min: k } = i.runtime.yAxis, N = Number(A) >= Number(p), C = Number(k) <= Number(m);
  if (a) {
    let T = k && C ? k : m, z = A && N ? A : Number.MIN_VALUE;
    if (z === Number.MIN_VALUE && (z = p), i.runtime.yAxis.paddingPercent) {
      let W = (z - T) * i.runtime.yAxis.paddingPercent;
      T -= W, z += W;
    }
    let V = a.map((W) => x(W));
    i.runtime.horizontal ? (v = pt({
      domain: [T, z],
      range: [0, y]
    }), S = i.runtime.xAxis.type === "date" ? pt({ domain: [Math.min(...V), Math.max(...V)] }) : Mn({ domain: V, padding: 0.5 }), Mn({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, f]
    }), S.rangeRound([0, f])) : (T = T < 0 ? T * 1.11 : T, S = pt({
      domain: [T, z],
      range: [f - g.bottom, g.top]
    }), v = Mn({
      domain: V,
      range: [g.left, h - g.right]
    }), Mn({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, y]
    }));
  }
  const P = [v.domain()[0], v.domain()[v.domain().length - 1]];
  return /* @__PURE__ */ r.createElement(Bt, { component: "SparkLine" }, /* @__PURE__ */ r.createElement("svg", { role: "img", "aria-label": d(i), width: t, height: 100, className: "sparkline", tabIndex: 0 }, ((D = i.runtime.lineSeriesKeys) == null ? void 0 : D.length) > 0 ? i.runtime.lineSeriesKeys : i.runtime.seriesKeys.map((T, z) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    be,
    {
      style: { width: h },
      className: "sparkline-group",
      key: `series-${T}`,
      opacity: i.legend.behavior === "highlight" && s.length > 0 && s.indexOf(T) === -1 ? 0.5 : 1,
      display: i.legend.behavior === "highlight" || s.length === 0 || s.indexOf(T) !== -1 ? "block" : "none"
    },
    a.map((V, W) => {
      let F = i.runtime.yAxis.label ? `${i.runtime.yAxis.label}: ${c(b(V, T))}` : c(b(V, T)), L = i.runtime.xAxis.label ? `${i.runtime.xAxis.label}: ${V[i.runtime.xAxis.dataKey]}` : V[i.runtime.xAxis.dataKey];
      return `${F}${L}`, i.seriesLabel && `${i.seriesLabel}${T}`, /* @__PURE__ */ r.createElement(be, { key: `series-${T}-point-${W}` }, /* @__PURE__ */ r.createElement($e, { display: i.labels ? "block" : "none", x: v(x(V)), y: S(b(V, T)), fill: u ? u(i.runtime.seriesLabels ? i.runtime.seriesLabels[T] : T) : "#000", textAnchor: "middle" }, c(V[T])));
    }),
    /* @__PURE__ */ r.createElement(
      ln,
      {
        curve: wr,
        data: a,
        x: (V) => v(x(V)),
        y: (V) => S(b(V, T)),
        stroke: u ? u(i.runtime.seriesLabels ? i.runtime.seriesLabels[T] : T) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${z})`
      }
    ),
    /* @__PURE__ */ r.createElement(
      Og,
      {
        id: `arrow--${z}`,
        refX: 2,
        size: 6,
        markerEnd: `url(#arrow--${z})`,
        strokeOpacity: 1,
        fillOpacity: 1,
        fill: u ? u(i.runtime.seriesLabels ? i.runtime.seriesLabels[T] : T) : "#000"
      }
    )
  ), /* @__PURE__ */ r.createElement(
    Ia,
    {
      top: f + g.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: v,
      tickValues: P,
      tickFormat: (V) => i.xAxis.type === "date" ? l(V) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, Mg = () => {
  const {
    config: e,
    colorScale: t,
    seriesHighlight: n,
    highlight: a,
    tableData: i,
    highlightReset: o,
    transformedData: l,
    currentViewport: s
  } = $.useContext(De);
  if (!e.legend)
    return null;
  const c = Zc(e, i, l, t);
  return !["Box Plot", "Pie"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(Qc, { config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: o, currentViewport: s, formatLabels: c });
}, ri = {
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
    singleSeries: !1
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
}, qa = (e) => /* @__PURE__ */ $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ $.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), Dg = ({ name: e }) => {
  var s, c, u, d, h;
  const { config: t, rawData: n, updateConfig: a } = $.useContext(De);
  if (t.visualizationType !== "Forest Plot")
    return;
  const i = (m) => {
    m.orientation === "horizontal" && (m.labels = !1), m.table.show === void 0 && (m.table.show = !isDashboard), m.visualizationType === "Combo" && (m.orientation = "vertical");
  }, o = (m = !0) => {
    let p = {};
    return n.forEach((g) => {
      Object.keys(g).forEach((E) => p[E] = !0);
    }), m && Object.keys(p).forEach((g) => {
      (t.series && t.series.filter((E) => E.dataKey === g).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(g)) && delete p[g];
    }), Object.keys(p);
  }, l = (m, p, g, E) => {
    if (m === "boxplot" && p === "legend") {
      a({
        ...t,
        [m]: {
          ...t[m],
          [p]: {
            ...t.boxplot[p],
            [g]: E
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
            [g]: E
          }
        }
      });
      return;
    }
    if (m === "forestPlot" && p) {
      let b = {
        ...t,
        [m]: {
          ...t[m],
          [p]: {
            ...t.forestPlot[p],
            [g]: E
          }
        }
      };
      a(b);
      return;
    }
    if (m === "columns" && p !== "" && g !== "") {
      a({
        ...t,
        [m]: {
          ...t[m],
          [p]: {
            ...t[m][p],
            [g]: E
          }
        }
      });
      return;
    }
    if (m === null && p === null) {
      let b = { ...t, [g]: E };
      i(b), a(b);
      return;
    }
    const y = Array.isArray(t[m]);
    let f = y ? [...t[m], E] : { ...t[m], [g]: E };
    p !== null && (y ? (f = [...t[m]], f[p] = { ...f[p], [g]: E }) : typeof E == "string" ? f[p] = E : f = { ...t[m], [p]: { ...t[m][p], [g]: E } });
    let x = { ...t, [m]: f };
    i(x), a(x);
  };
  return /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ r.createElement(qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(
    Me,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: l,
      options: o(!1),
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ r.createElement(
    Me,
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
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ r.createElement(fe, { type: "text", value: ((s = t.forestPlot) == null ? void 0 : s.title) || "", updateField: l, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Column Settings"), /* @__PURE__ */ r.createElement(
    Me,
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
    Me,
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
    Me,
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
    Me,
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
  )), /* @__PURE__ */ r.createElement(fe, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: l, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ r.createElement(fe, { type: "text", value: ((d = t.forestPlot) == null ? void 0 : d.leftLabel) || "", updateField: l, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ r.createElement(fe, { type: "text", value: ((h = t.forestPlot) == null ? void 0 : h.rightLabel) || "", updateField: l, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
    Me,
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
}, Kn = r.createContext(), $g = (e) => {
  const { updateConfig: t, config: n, rawData: a } = $.useContext(De), { getColumns: i, selectComponent: o } = e, l = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], s = (c, u, d) => {
    let h = [...n.series];
    if (h[c][d] = u, d === "type" && u === "Bar" && (h[c].axis = "Left"), h[c].type === "Forecasting") {
      let m = Array.from(new Set(a.map((g) => g[h[c].dataKey]))), p = [];
      m.forEach((g) => {
        p.push({ key: g });
      }), h[c].stages = p, h[c].stageColumn = h[c].dataKey;
    }
    t({ ...n, series: h });
  };
  return /* @__PURE__ */ r.createElement(Kn.Provider, { value: { updateSeries: s, supportedRightAxisTypes: l, getColumns: i, selectComponent: o } }, e.children);
}, zg = (e) => {
  const { config: t, updateConfig: n } = $.useContext(De), { series: a, index: i } = e;
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
  return Object.keys(Ar).map((c) => s.push(Ar[c])), /* @__PURE__ */ r.createElement(
    rn,
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
}, Rg = (e) => {
  const { config: t } = $.useContext(De), { updateSeries: n } = $.useContext(Kn), { index: a, series: i } = e, o = () => {
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
      rn,
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
}, Fg = (e) => {
  const { config: t, updateConfig: n, rawData: a } = $.useContext(De), { updateSeries: i, getColumns: o } = $.useContext(Kn), { index: l, series: s } = e;
  return /* @__PURE__ */ r.createElement(
    rn,
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
}, Bg = (e) => {
  const { config: t, rawData: n } = $.useContext(De), { updateSeries: a } = $.useContext(Kn), { index: i, series: o } = e;
  if (o.type !== "Forecasting" || !n || !o.stageColumn)
    return;
  let l = new Set(n.map((s) => s[o.stageColumn]));
  return l = Array.from(l), l = l.filter((s) => s !== void 0), /* @__PURE__ */ r.createElement(
    rn,
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
}, Vg = (e) => {
  const { config: t } = $.useContext(De), { updateSeries: n, supportedRightAxisTypes: a } = $.useContext(Kn), { index: i, series: o } = e;
  if (!(t.visualizationType !== "Combo" || !o) && a.includes(o.type))
    return /* @__PURE__ */ r.createElement(
      rn,
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
}, Hg = (e) => {
  var o;
  const { config: t, updateConfig: n } = $.useContext(De), { index: a, series: i } = e;
  if (i.type === "Forecasting" && i)
    return (o = i == null ? void 0 : i.stages) == null ? void 0 : o.map((l, s) => {
      var c, u, d, h;
      return /* @__PURE__ */ r.createElement(
        rn,
        {
          key: `${l}--${s}`,
          initial: "Select an option",
          value: (u = (c = t.series) == null ? void 0 : c[a].stages) != null && u[s].color ? (h = (d = t.series) == null ? void 0 : d[a].stages) == null ? void 0 : h[s].color : "Select",
          label: `${l.key} Series Color`,
          onChange: (m) => {
            const p = [...t.series], g = p[a].stages;
            g[s].color = m.target.value, p[a] = { ...p[a], stages: g }, n({
              ...t,
              series: p
            });
          },
          options: Object.keys(Ya)
        }
      );
    });
}, Wg = (e) => {
  var l;
  const { config: t, updateConfig: n } = $.useContext(De), { series: a, index: i } = e, { getColumns: o } = $.useContext(Kn);
  if (a.type === "Forecasting")
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement(vn, { allowZeroExpanded: !0 }, (l = a == null ? void 0 : a.confidenceIntervals) == null ? void 0 : l.map((s, c) => {
      const u = s.showInTooltip ? s.showInTooltip : !1, d = (h, m, p) => {
        h.preventDefault();
        let g = [...t.series];
        g[m].confidenceIntervals[p].showInTooltip = !u, n({
          ...t,
          series: g
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
      )))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (h) => d(h, i, c) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, u && /* @__PURE__ */ r.createElement(Cs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: u || !1, readOnly: !0 }))), /* @__PURE__ */ r.createElement(
        rn,
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
        rn,
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
}, Kg = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = $.useContext(De);
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
}, Ig = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = $.useContext(De);
  if (a.visualizationType === "Paired Bar" || a.visualizationType === "Scatter Plot")
    return;
  const o = (l) => {
    let s = [...a.series];
    s[l].tooltip && s[l].tooltip, s[l].tooltip = !s[l].tooltip, i({
      ...a,
      series: s
    });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (l) => o(n) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ r.createElement(Cs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, jg = (e) => {
  const { config: t, updateConfig: n } = $.useContext(De), { series: a, index: i } = e, o = (s) => {
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
}, gu = (e) => {
  const { config: t } = $.useContext(De), { series: n, getItemStyle: a, sortableItemStyles: i, chartsWithOptions: o, index: l } = e;
  return /* @__PURE__ */ r.createElement(Es, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: l }, (s, c) => /* @__PURE__ */ r.createElement("div", { key: l, className: c.isDragging ? "currently-dragging" : "", style: a(c.isDragging, s.draggableProps.style, i), ref: s.innerRef, ...s.draggableProps, ...s.dragHandleProps }, /* @__PURE__ */ r.createElement(vn, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart" }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(lt, { className: o.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ r.createElement(Re, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ r.createElement(Xt.Button.Remove, { series: n, index: l }))), o.includes(t.visualizationType) && /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(Xt.Input.Name, { series: n, index: l }), /* @__PURE__ */ r.createElement(Xt.Dropdown.SeriesType, { series: n, index: l }), /* @__PURE__ */ r.createElement(Xt.Dropdown.AxisPosition, { series: n, index: l }), /* @__PURE__ */ r.createElement(Xt.Dropdown.LineType, { series: n, index: l }), /* @__PURE__ */ r.createElement(Xt.Dropdown.ForecastingColor, { series: n, index: l }), /* @__PURE__ */ r.createElement(Xt.Dropdown.ConfidenceInterval, { series: n, index: l }), /* @__PURE__ */ r.createElement(Xt.Checkbox.DisplayInTooltip, { series: n, index: l }))))));
}, qg = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i } = e;
  return t.map((o, l) => /* @__PURE__ */ r.createElement(gu, { getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i, series: o, index: l, key: `series-list-${l}` }));
}, Xt = {
  Wrapper: $g,
  Dropdown: {
    SeriesType: Rg,
    AxisPosition: Vg,
    ConfidenceInterval: Wg,
    LineType: zg,
    ForecastingStage: Fg,
    ForecastingColumn: Bg,
    ForecastingColor: Hg
  },
  Input: {
    Name: Kg
  },
  Checkbox: {
    DisplayInTooltip: Ig
  },
  Button: {
    Remove: jg
  },
  Item: gu,
  List: qg
}, Ug = $.memo(({ config: e, updateConfig: t }) => {
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
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.regions && e.regions.map(({ label: c, color: u, from: d, to: h, background: m, range: p = "Custom" }, g) => {
    var E;
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `region-${g}` }, /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (y) => {
          y.preventDefault(), i(g);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(fe, { value: c, label: "Region Label", fieldName: "label", i: g, updateField: a }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(fe, { value: u, label: "Text Color", fieldName: "color", updateField: (y, f, x, b) => n(x, b, g) }), /* @__PURE__ */ r.createElement(fe, { value: m, label: "Background", fieldName: "background", updateField: (y, f, x, b) => n(x, b, g) })), /* @__PURE__ */ r.createElement(
      Me,
      {
        value: e.regions[g].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (y) => {
          if (y.target.value !== "" && y.target.value !== "Select") {
            const f = [...e.regions];
            f[g].fromType = y.target.value, t({
              ...e,
              regions: f
            });
          }
          y.target.value = "";
        },
        options: l
      }
    ), (e.regions[g].fromType === "Fixed" || e.regions[g].fromType === "Previous Days" || !e.regions[g].fromType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      fe,
      {
        value: d,
        label: e.regions[g].fromType === "Fixed" || !((E = e.regions[g]) != null && E.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (y, f, x, b) => n(x, b, g),
        tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "The date needs to be in the original format of the data. Not the displayed format of the data.")))
      }
    )), /* @__PURE__ */ r.createElement(
      Me,
      {
        value: e.regions[g].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (y) => {
          if (y.target.value !== "" && y.target.value !== "Select") {
            const f = [...e.regions];
            f[g].toType = y.target.value, t({
              ...e,
              regions: f
            });
          }
          y.target.value = "";
        },
        options: s
      }
    ), (e.regions[g].toType === "Fixed" || !e.regions[g].toType) && /* @__PURE__ */ r.createElement(fe, { value: h, label: "To Value", fieldName: "to", updateField: (y, f, x, b) => n(x, b, g) }));
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
}), Yg = ({ name: e }) => {
  const { visSupportsRegions: t } = ba(), { config: n, updateConfig: a } = $.useContext(De);
  return t() ? /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, e)), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(Ug, { config: n, updateConfig: a }))) : null;
}, zr = $.createContext({}), Xg = (e) => {
  const { config: t } = $.useContext(De), { updateField: n } = $.useContext(zr), { enabledChartTypes: a, visHasNumbersOnBars: i, visHasLabelOnData: o, visSupportsChartHeight: l, visSupportsSuperTitle: s, visSupportsFootnotes: c } = ba(), { visualizationType: u, visualizationSubType: d, barStyle: h } = t, m = () => (u === "Bar" || u === "Deviation Bar") && d !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ r.createElement(it, null, " ", /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "General")), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(Me, { value: u, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: a }), (u === "Bar" || u === "Combo" || u === "Area Chart") && /* @__PURE__ */ r.createElement(Me, { value: d || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["regular", "stacked"] }), u === "Area Chart" && d === "stacked" && /* @__PURE__ */ r.createElement(Me, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: n, options: Object.keys(Ar) }), u === "Bar" && /* @__PURE__ */ r.createElement(Me, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: n, options: ["vertical", "horizontal"] }), u === "Deviation Bar" && /* @__PURE__ */ r.createElement(Me, { label: "Orientation", options: ["horizontal"] }), (u === "Bar" || u === "Deviation Bar") && /* @__PURE__ */ r.createElement(Me, { value: t.isLollipopChart ? "lollipop" : h || "flat", fieldName: "barStyle", label: "bar style", updateField: n, options: m() }), (u === "Bar" || u === "Deviation Bar") && h === "rounded" && /* @__PURE__ */ r.createElement(Me, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: n, options: ["top", "full"] }), (u === "Bar" || u === "Deviation Bar") && h === "rounded" && /* @__PURE__ */ r.createElement(Me, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: n, options: ["standard", "shallow", "finger"] }), u === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ r.createElement(Me, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: n, options: ["Below Bar", "On Date/Category Axis"] }), i() ? /* @__PURE__ */ r.createElement(Te, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: n }) : o() && /* @__PURE__ */ r.createElement(Te, { value: t.labels, fieldName: "labels", label: "Display label on data", updateField: n }), u === "Pie" && /* @__PURE__ */ r.createElement(Me, { fieldName: "pieType", label: "Pie Chart Type", updateField: n, options: ["Regular", "Donut"] }), /* @__PURE__ */ r.createElement(
    fe,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ r.createElement(Te, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: n }), s() && /* @__PURE__ */ r.createElement(
    fe,
    {
      value: t.superTitle,
      updateField: n,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ r.createElement(
    fe,
    {
      type: "textarea",
      value: t.introText,
      updateField: n,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ r.createElement(
    fe,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), c() && /* @__PURE__ */ r.createElement(
    fe,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: n,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Footnotes")))
    }
  ), l() && t.orientation === "vertical" && /* @__PURE__ */ r.createElement(fe, { type: "number", value: t.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: n })));
}, Qg = (e) => {
  const { config: t } = $.useContext(De), { boxplot: n } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: a } = $.useContext(zr);
  return /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, e.name)), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ r.createElement(
    fe,
    {
      type: "text",
      value: n.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement(
    fe,
    {
      type: "text",
      value: n.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ r.createElement(
    fe,
    {
      type: "text",
      value: n.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ r.createElement(
    fe,
    {
      type: "text",
      value: n.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ r.createElement(
    fe,
    {
      type: "text",
      value: n.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ r.createElement(fe, { type: "text", value: n.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: a }), /* @__PURE__ */ r.createElement(fe, { type: "text", value: n.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: a }), /* @__PURE__ */ r.createElement(fe, { type: "text", value: n.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: a }), /* @__PURE__ */ r.createElement(fe, { type: "text", value: n.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: a }), /* @__PURE__ */ r.createElement(fe, { type: "text", value: n.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: a })));
}, xu = (e, t) => {
  let n = [], a = [], i = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const o = e.twoColor.isPaletteReversed;
    n = Object.keys(Ua).filter((l) => o ? l.endsWith("reverse") : !l.endsWith("reverse"));
  } else {
    const o = [], l = [];
    for (const s in kt) {
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
}, Zg = (e) => {
  var A;
  const { config: t, updateConfig: n, colorPalettes: a, twoColorPalette: i } = $.useContext(De), { visual: o } = t, { setLollipopShape: l, updateField: s } = $.useContext(zr), { visHasBarBorders: c, visCanAnimate: u, visSupportsNonSequentialPallete: d, headerColors: h, visSupportsTooltipOpacity: m, visSupportsTooltipLines: p, visSupportsBarSpace: g, visSupportsBarThickness: E, visHasDataCutoff: y, visSupportsSequentialPallete: f, visSupportsReverseColorPalette: x } = ba(), { twoColorPalettes: b, sequential: v, nonSequential: S } = xu(t, n);
  return /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Visual")), /* @__PURE__ */ r.createElement(st, null, t.isLollipopChart && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", { className: "header" }, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ r.createElement(
    "div",
    {
      onChange: (k) => {
        l(k.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ r.createElement(Me, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: s, options: ["regular", "two-tone"] }), /* @__PURE__ */ r.createElement(Me, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: s, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ r.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ r.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ r.createElement(Me, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: s, options: ["true", "false"] }), /* @__PURE__ */ r.createElement(Te, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: s })), /* @__PURE__ */ r.createElement(Me, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: s, options: ["small", "medium", "large"] }), c() && /* @__PURE__ */ r.createElement(Me, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: s, options: ["true", "false"] }), u() && /* @__PURE__ */ r.createElement(Te, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: s }), (((A = t.series) == null ? void 0 : A.some((k) => k.type === "Line" || k.type === "dashed-lg" || k.type === "dashed-sm" || k.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Me, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: s, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ r.createElement(Me, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: s, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ r.createElement("label", { className: "header" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, h.map((k) => /* @__PURE__ */ r.createElement(
    "button",
    {
      title: k,
      key: k,
      onClick: (N) => {
        N.preventDefault(), n({ ...t, theme: k });
      },
      className: t.theme === k ? "selected " + k : k
    }
  )))), (d() || d()) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Chart Color Palette")), x() && /* @__PURE__ */ r.createElement(Uo, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.isPaletteReversed }), f() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, v.map((k) => {
    const N = {
      backgroundColor: a[k][2]
    }, C = {
      backgroundColor: a[k][3]
    }, P = {
      backgroundColor: a[k][5]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: k,
        key: k,
        onClick: (D) => {
          D.preventDefault(), n({ ...t, palette: k });
        },
        className: t.palette === k ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: N }),
      /* @__PURE__ */ r.createElement("span", { style: C }),
      /* @__PURE__ */ r.createElement("span", { style: P })
    );
  }))), d() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, S.map((k) => {
    const N = {
      backgroundColor: a[k][2]
    }, C = {
      backgroundColor: a[k][4]
    }, P = {
      backgroundColor: a[k][6]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: k,
        key: k,
        onClick: (D) => {
          D.preventDefault(), n({ ...t, palette: k });
        },
        className: t.palette === k ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: N }),
      /* @__PURE__ */ r.createElement("span", { style: C }),
      /* @__PURE__ */ r.createElement("span", { style: P })
    );
  })))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Uo, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, b.map((k) => {
    const N = {
      backgroundColor: i[k][0]
    }, C = {
      backgroundColor: i[k][1]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: k,
        key: k,
        onClick: (P) => {
          P.preventDefault(), n({ ...t, twoColor: { ...t.twoColor, palette: k } });
        },
        className: t.twoColor.palette === k ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: N }),
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: C })
    );
  }))), y() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    fe,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: s,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), E() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ r.createElement(fe, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: s, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(fe, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: s }), g() && /* @__PURE__ */ r.createElement(fe, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: s, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(Te, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: s }), t.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(Te, { value: o == null ? void 0 : o.border, section: "visual", fieldName: "border", label: "Show Border", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: o == null ? void 0 : o.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: o == null ? void 0 : o.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: o == null ? void 0 : o.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: o == null ? void 0 : o.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: s })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(Te, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: s }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ r.createElement(Te, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: s }), p() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: o.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: o.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: s })), m() && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (k) => n({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: k.target.value
        }
      })
    }
  )), t.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(Te, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: s }), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (k) => n({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: k.target.value
        }
      })
    }
  ))));
}, pn = {
  ForestPlot: Dg,
  Series: Xt,
  Regions: Yg,
  General: Xg,
  BoxPlot: Qg,
  Visual: Zg
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
  ), /* @__PURE__ */ r.createElement(Me, { value: u, initial: "Select", fieldName: "column", label: "Column", updateField: (p, g, E, y) => s(E, y, m), options: a() }), /* @__PURE__ */ r.createElement(fe, { value: d, fieldName: "value", label: "Value", updateField: (p, g, E, y) => s(E, y, m) }), /* @__PURE__ */ r.createElement(Me, { value: h, initial: "Select", fieldName: "icon", label: "Icon", updateField: (p, g, E, y) => s(E, y, m), options: i() }), /* @__PURE__ */ r.createElement(fe, { value: c, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (p, g, E, y) => s(E, y, m) }))), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: l, className: "btn full-width" }, "Add Suppression Class"));
});
const Jg = $.memo(({ config: e, updateConfig: t, data: n }) => {
  const a = () => {
    const u = /* @__PURE__ */ new Set();
    return n.forEach((d) => {
      Object.keys(d).forEach((h) => {
        u.add(h);
      });
    }), [...u];
  }, i = () => e.visualizationType === "Line" || e.visualizationType === "Combo" ? ["effect"] : ["suppression"], o = () => {
    if (e.visualizationType === "Line" || e.visualizationType === "Combo")
      return ["Open Circles"];
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
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.preliminaryData && e.preliminaryData.map(({ seriesKey: u, type: d, label: h, column: m, value: p, style: g }, E) => {
    var y;
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
    ), /* @__PURE__ */ r.createElement(Me, { value: d, initial: "Select", fieldName: "type", label: "Type", updateField: (f, x, b, v) => c(b, v, E), options: i() }), /* @__PURE__ */ r.createElement(Me, { value: u, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (f, x, b, v) => c(b, v, E), options: (y = e.runtime) == null ? void 0 : y.seriesKeys }), /* @__PURE__ */ r.createElement(Me, { value: m, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (f, x, b, v) => c(b, v, E), options: a() }), /* @__PURE__ */ r.createElement(fe, { value: p, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (f, x, b, v) => c(b, v, E) }), /* @__PURE__ */ r.createElement(Me, { value: g, initial: "Select", fieldName: "style", label: "Style", updateField: (f, x, b, v) => c(b, v, E), options: o() }), /* @__PURE__ */ r.createElement(fe, { value: h, fieldName: "label", label: "Label", placeholder: "", updateField: (f, x, b, v) => c(b, v, E) }));
  }), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: s, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), Gg = () => {
  var Po, No, Lo, Oo, _o, Mo, Do, $o, zo, Ro, Fo, Bo, Vo, Ho, Wo, Ko, Io, jo;
  const { config: e, updateConfig: t, transformedData: n, loading: a, colorPalettes: i, twoColorPalette: o, unfilteredData: l, excludedData: s, isDashboard: c, setParentConfig: u, missingRequiredSections: d, isDebug: h, setFilteredData: m, lineOptions: p, rawData: g } = $.useContext(De), { minValue: E, maxValue: y, existPositiveValue: f, isAllLine: x } = Dr(e, l);
  xu(e, t);
  const b = { data: n, config: e }, { leftMax: v, rightMax: S } = mu(b), {
    headerColors: A,
    visSupportsTooltipLines: k,
    visSupportsNonSequentialPallete: N,
    visSupportsSequentialPallete: C,
    visSupportsReverseColorPalette: P,
    visHasLabelOnData: D,
    visHasNumbersOnBars: T,
    visHasAnchors: z,
    visHasBarBorders: V,
    visHasDataCutoff: W,
    visCanAnimate: F,
    visHasLegend: L,
    visHasBrushChart: q,
    visSupportsDateCategoryAxis: j,
    visSupportsValueAxisMin: Y,
    visSupportsValueAxisMax: H,
    visSupportsDateCategoryAxisLabel: U,
    visSupportsDateCategoryAxisLine: I,
    visSupportsDateCategoryAxisTicks: Q,
    visSupportsDateCategoryTickRotation: ne,
    visSupportsDateCategoryNumTicks: he,
    visSupportsRegions: Pe,
    visSupportsFilters: ke,
    visSupportsValueAxisGridLines: X,
    visSupportsValueAxisLine: K,
    visSupportsValueAxisTicks: re,
    visSupportsValueAxisLabels: _,
    visSupportsBarSpace: ue,
    visSupportsBarThickness: le,
    visSupportsFootnotes: ge,
    visSupportsSuperTitle: ve,
    visSupportsDataCutoff: xe,
    visSupportsChartHeight: Ne,
    visSupportsLeftValueAxis: Ae,
    visSupportsTooltipOpacity: Se,
    visSupportsRankByValue: pe,
    visSupportsResponsiveTicks: ae,
    visSupportsDateCategoryHeight: J,
    visHasDataSuppression: Ve
  } = ba(), { handleFilterOrder: me, filterOrderOptions: Le, filterStyleOptions: Oe } = ku({ config: e, setConfig: t, filteredData: n, setFilteredData: m });
  $.useEffect(() => {
    let M = [];
    e.series && (M = e.series.map((O) => ({
      ...O,
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
  const { hasRightAxis: Ie } = ho({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), Be = (M, O) => ({
    ...O
  }), Ye = {
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
  }, rt = (M) => {
    M.orientation === "horizontal" && (M.labels = !1), M.table.show === void 0 && (M.table.show = !c), M.visualizationType === "Combo" && (M.orientation = "vertical");
  }, te = (M, O, B, G) => {
    if (h && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", M, O, B, G), M === "boxplot" && O === "legend") {
      t({
        ...e,
        [M]: {
          ...e[M],
          [O]: {
            ...e.boxplot[O],
            [B]: G
          }
        }
      });
      return;
    }
    if (M === "boxplot" && O === "labels") {
      t({
        ...e,
        [M]: {
          ...e[M],
          [O]: {
            ...e.boxplot[O],
            [B]: G
          }
        }
      });
      return;
    }
    if (M === "columns" && O !== "" && B !== "") {
      t({
        ...e,
        [M]: {
          ...e[M],
          [O]: {
            ...e[M][O],
            [B]: G
          }
        }
      });
      return;
    }
    if (M === null && O === null) {
      let jn = { ...e, [B]: G };
      rt(jn), t(jn);
      return;
    }
    const Xe = Array.isArray(e[M]);
    let Tt = Xe ? [...e[M], G] : { ...e[M], [B]: G };
    O !== null && (Xe ? (Tt = [...e[M]], Tt[O] = { ...Tt[O], [B]: G }) : typeof G == "string" ? Tt[O] = G : Tt = { ...e[M], [O]: { ...e[M][O], [B]: G } });
    let Vt = { ...e, [M]: Tt };
    rt(Vt), t(Vt);
  }, [et, ze] = $.useState(!0);
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
  const He = (M) => {
    t({
      ...e,
      lollipopShape: M
    });
  }, wt = (M) => {
    let O = [...e.filters];
    O.splice(M, 1), t({ ...e, filters: O });
  }, dt = (M, O, B) => {
    let G = [...e.filters];
    G[O][M] = B, t({ ...e, filters: G });
  }, Dt = () => {
    let M = e.filters ? [...e.filters] : [];
    M.push({ values: [] }), t({ ...e, filters: M });
  }, Ct = (M) => {
    let O = e.series ? [...e.series] : [], B = Array.from(new Set(n.map((Xe) => Xe[M]))), G = [];
    B.forEach((Xe) => {
      G.push({ key: Xe });
    }), e.visualizationType === "Forecasting" ? O.push({ dataKey: M, type: e.visualizationType, stages: G, stageColumn: M, axis: "Left", tooltip: !0 }) : O.push({ dataKey: M, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: O });
  }, nt = (M) => {
    const O = e.series[0].dataKey, B = n.sort((Xe, Tt) => Xe[O] - Tt[O]), G = M === "asc" ? B : B.reverse();
    t({ ...e }, G);
  }, yt = (M) => {
    let O = [...e.exclusions.keys];
    O.push(M);
    let B = { ...e.exclusions, keys: O };
    t({ ...e, exclusions: B });
  }, w = (M) => {
    let O = -1, B = [...e.exclusions.keys];
    for (let G = 0; G < B.length; G++)
      if (B[G] === M) {
        O = G;
        break;
      }
    if (O !== -1) {
      B.splice(O, 1);
      let G = { ...e.exclusions, keys: B }, Xe = { ...e, exclusions: G };
      B.length === 0 && delete Xe.exclusions.keys, t(Xe);
    }
  }, oe = () => {
    let M = {};
    return l.forEach((O) => {
      Object.keys(O).forEach((B) => M[B] = !0);
    }), Object.keys(M);
  }, de = (M = !0) => {
    let O = {};
    if (l.forEach((B) => {
      Object.keys(B).forEach((G) => O[G] = !0);
    }), M) {
      const { lower: B, upper: G } = e.confidenceKeys || {};
      Object.keys(O).forEach((Xe) => {
        (e.series && e.series.filter((Tt) => Tt.dataKey === Xe).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Xe) && (B && G || B || G) && Xe !== B && Xe !== G) && delete O[Xe];
      });
    }
    return Object.keys(O);
  }, ce = (M) => {
    if (!M)
      return [];
    const O = /* @__PURE__ */ new Set();
    for (let B = 0; B < M.length; B++)
      for (const [G] of Object.entries(M[B]))
        O.add(G);
    return Array.from(O);
  }, we = (M, O = !1) => {
    let B = [];
    return s.forEach((G) => {
      B.push(G[M]);
    }), O ? [...new Set(B)] : B;
  }, Ee = () => {
    ze(!et);
  }, ie = () => /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, e.runtime.editorErrorMessage))), je = () => {
    const M = (O) => {
      O.preventDefault();
      let B = { ...e };
      delete B.newViz, t(B);
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
    const M = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], O = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: O
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
    return /* @__PURE__ */ r.createElement("ul", { className: "series-list" }, M.map((O, B) => /* @__PURE__ */ r.createElement("li", { key: O }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name", "data-title": O }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name--text" }, O)), /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: () => w(O) }, "×"))));
  }, [e]), Et = (M, O) => {
    let B = e.series, [G] = B.splice(M, 1);
    B.splice(O, 0, G), t({ ...e, series: B });
  };
  e.isLollipopChart && ((Po = e == null ? void 0 : e.series) == null ? void 0 : Po.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((No = e == null ? void 0 : e.series) == null ? void 0 : No.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((Lo = e == null ? void 0 : e.series) == null ? void 0 : Lo.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((Oo = e == null ? void 0 : e.series) == null ? void 0 : Oo.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Z = e.orientation === "horizontal" ? "xAxis" : "yAxis", [se, Ce] = $.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), ye = () => {
    const M = e[Z].max, O = e[Z].rightMax;
    let B = "", G = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (M && parseFloat(M) < parseFloat(y) && f):
          B = "Max value must be more than " + y;
          break;
        case (M && parseFloat(M) < 0 && !f):
          B = "Value must be more than or equal to 0";
          break;
        default:
          B = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (M && parseFloat(M) < v):
          B = "Max value must be more than " + v;
          break;
        case (O && parseFloat(O) < S):
          G = "Max value must be more than " + S;
          break;
        case (M && parseFloat(M) < 0 && !f):
          B = "Value must be more than or equal to 0";
          break;
        default:
          B = "";
      }
    Ce((Xe) => ({ ...Xe, maxMsg: B, rightMaxMessage: G }));
  }, Ge = () => {
    const M = parseFloat(e[Z].min);
    let O = Number(E), B = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && M < 0):
        B = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && M > O):
        B = "Value should not exceed " + E;
        break;
      case (e.visualizationType === "Combo" && x && M > O):
        B = "Value should not exceed " + E;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !x) && O > 0 && M > 0):
        B = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && M >= Math.min(O, e.xAxis.target)):
        B = "Value must be less than " + Math.min(O, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && M && O < 0 && M > O):
        B = "Value should not exceed " + E;
        break;
      default:
        B = "";
    }
    Ce((G) => ({ ...G, minMsg: B }));
  };
  $.useEffect(() => {
    Ge(), ye();
  }, [E, y, e]);
  const mt = ((_o = e == null ? void 0 : e.dataKey) == null ? void 0 : _o.includes("http://")) || ((Mo = e == null ? void 0 : e.dataKey) == null ? void 0 : Mo.includes("https://")), Ze = () => {
    var M, O;
    if (h !== void 0 && h && !((M = e == null ? void 0 : e.xAxis) != null && M.dataKey)) {
      let B = de(!1);
      if (B.includes("Date"))
        return "Date";
      if (B.includes("Race"))
        return "Race";
      if (B.includes("Month"))
        return "Month";
    }
    return ((O = e == null ? void 0 : e.xAxis) == null ? void 0 : O.dataKey) || "";
  }, At = () => {
    if (h !== void 0 && h && de(!1).length > 0) {
      let M = de(!1).filter((O) => O !== Ze());
      if (M.length > 0)
        return M[0];
    }
    return "";
  };
  if (h && !e.xAxis.dataKey && (e.xAxis.dataKey = Ze()), h && ((Do = e == null ? void 0 : e.series) == null ? void 0 : Do.length) === 0) {
    let M = At();
    M !== "" && Ct(M), h && console.log("### COVE DEBUG: Chart: Setting default datacol=", M);
  }
  const ft = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar"], Pt = [
    /* @__PURE__ */ r.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys((($o = e.data) == null ? void 0 : $o[0]) || []).map((O) => {
      const B = e == null ? void 0 : e.series.some((G) => G.dataKey === O);
      if (O !== e.xAxis.dataKey && !B)
        return Pt.push(
          /* @__PURE__ */ r.createElement("option", { value: O, key: O }, O)
        );
    });
    let M = {};
    e.data.forEach((O) => {
      Object.keys(O).forEach((B) => {
        M[B] = M[B] || [];
        const G = typeof O[B] == "number" ? O[B].toString() : O[B];
        M[B].indexOf(G) === -1 && M[B].push(G);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((O) => {
      const B = n.some((G) => G.dataKey === O);
      if (O !== e.xAxis.dataKey && !B)
        return Pt.push(
          /* @__PURE__ */ r.createElement("option", { value: O, key: O }, O)
        );
    });
    let M = {};
    n.forEach((O) => {
      Object.keys(O).forEach((B) => {
        M[B] = M[B] || [];
        const G = typeof O[B] == "number" ? O[B].toString() : O[B];
        M[B].indexOf(G) === -1 && M[B].push(G);
      });
    });
  }
  const Yt = Object.keys(e.columns).filter((M) => [e.xAxis.dataKey].includes(M) !== !0), Je = (M) => {
    const O = `additionalColumn${M}`;
    t({
      ...e,
      columns: {
        ...e.columns,
        [O]: {
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
  }, ct = (M) => {
    const O = e.columns;
    delete O[M], t({
      ...e,
      columns: O
    });
  }, gt = async (M, O, B) => {
    switch (O) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [M]: {
              ...e.columns[M],
              [O]: B
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
              [O]: B
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: Zt,
    highlightedSeriesValues: _e,
    handleUpdateHighlightedBar: ht,
    handleAddNewHighlightedBar: Ea,
    handleRemoveHighlightedBar: Cn,
    handleUpdateHighlightedBarColor: Aa,
    handleHighlightedBarLegendLabel: Sa,
    handleUpdateHighlightedBorderWidth: Ta
  } = Lr(e, t), Rr = (M, O) => {
    let B = e.columns;
    B[M].tooltips = O, t({
      ...e,
      columns: B
    });
  }, In = {
    addNewExclusion: yt,
    data: n,
    editColumn: gt,
    getColumns: de,
    getDataValueOptions: ce,
    getDataValues: we,
    getItemStyle: Be,
    handleSeriesChange: Et,
    handleAddNewHighlightedBar: Ea,
    setCategoryAxis: Ze,
    sortSeries: nt,
    updateField: te,
    warningMsg: se,
    highlightedBarValues: Zt,
    handleHighlightedBarLegendLabel: Sa,
    handleUpdateHighlightedBar: ht,
    handleRemoveHighlightedBar: Cn,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: _e,
    handleUpdateHighlightedBorderWidth: Ta,
    handleUpdateHighlightedBarColor: Aa,
    setLollipopShape: He
  };
  return /* @__PURE__ */ r.createElement(zr.Provider, { value: In }, /* @__PURE__ */ r.createElement(Bt, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ r.createElement(je, null), e.newViz === void 0 && e.runtime && ((zo = e.runtime) == null ? void 0 : zo.editorErrorMessage) && /* @__PURE__ */ r.createElement(ie, null), /* @__PURE__ */ r.createElement("button", { className: et ? "editor-toggle" : "editor-toggle collapsed", title: et ? "Collapse Editor" : "Expand Editor", onClick: Ee }), /* @__PURE__ */ r.createElement("section", { className: `${et ? "editor-panel cove" : "hidden editor-panel cove"}${c ? " dashboard" : ""}` }, /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ r.createElement("section", { className: "form-container" }, /* @__PURE__ */ r.createElement(vn, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(pn.General, { name: "General" }), /* @__PURE__ */ r.createElement(pn.ForestPlot, { name: "Forest Plot Settings" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ r.createElement(qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(st, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Me,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (M) => {
        M.target.value !== "" && M.target.value !== "Select" && Ct(M.target.value), M.target.value = "";
      },
      options: de()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ r.createElement(pn.Series.Wrapper, { getColumns: de }, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ r.createElement(Yo, { onDragEnd: ({ source: M, destination: O }) => Et(M.index, O.index) }, /* @__PURE__ */ r.createElement(Xo, { droppableId: "filter_order" }, (M) => /* @__PURE__ */ r.createElement("ul", { ...M.droppableProps, className: "series-list", ref: M.innerRef }, /* @__PURE__ */ r.createElement(pn.Series.List, { series: e.series, getItemStyle: Be, sortableItemStyles: Ye, chartsWithOptions: ft }), M.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ r.createElement(Me, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: te, initial: "Select", options: de() }), /* @__PURE__ */ r.createElement(Me, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: te, initial: "Select", options: de() })), pe() && e.series && e.series.length === 1 && /* @__PURE__ */ r.createElement(Me, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (M) => nt(M.target.value), options: ["asc", "desc"] }), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(Jg, { config: e, updateConfig: t, data: n }))), /* @__PURE__ */ r.createElement(pn.BoxPlot, { name: "Measures" }), Ae() && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ r.createElement(qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(st, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Me,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: te,
      options: de(!1),
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label", updateField: te }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(Te, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: te }), e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement(
    fe,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(Te, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: te }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.tickRotation, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: te }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    fe,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: te }), X() && /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: te }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(Te, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: te })), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(Te, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: te }), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ r.createElement(fe, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: te, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    fe,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    fe,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ r.createElement(r.Fragment, null, K() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), _() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te }), re() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: te }), H() && /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, se.maxMsg), Y() && /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, se.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: te })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, se.maxMsg), /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, se.minMsg)), z() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(vn, { allowZeroExpanded: !0 }, (Fo = (Ro = e.yAxis) == null ? void 0 : Ro.anchors) == null ? void 0 : Fo.map((M, O) => /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${O}` }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { className: "accordion__button accordion__button" }, "Anchor ", O + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (B) => {
        B.preventDefault();
        const G = [...e.yAxis.anchors];
        G.splice(O, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[O].value ? e.yAxis.anchors[O].value : "",
      onChange: (B) => {
        B.preventDefault();
        const G = [...e.yAxis.anchors];
        G[O].value = B.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[O].color ? e.yAxis.anchors[O].color : "",
      onChange: (B) => {
        B.preventDefault();
        const G = [...e.yAxis.anchors];
        G[O].color = B.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.anchors[O].lineStyle || "",
      onChange: (B) => {
        const G = [...e.yAxis.anchors];
        G[O].lineStyle = B.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    p.map((B) => /* @__PURE__ */ r.createElement("option", { key: B.key }, B.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault();
        const O = [...e.yAxis.anchors];
        O.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: O
          }
        });
      }
    },
    "Add Anchor"
  )), z() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(vn, { allowZeroExpanded: !0 }, (Vo = (Bo = e.xAxis) == null ? void 0 : Bo.anchors) == null ? void 0 : Vo.map((M, O) => /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart", key: `xaxis-anchors-${O}` }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { className: "accordion__button accordion__button" }, "Anchor ", O + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (B) => {
        B.preventDefault();
        const G = [...e.xAxis.anchors];
        G.splice(O, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[O].value ? e.xAxis.anchors[O].value : "",
      onChange: (B) => {
        B.preventDefault();
        const G = [...e.xAxis.anchors];
        G[O].value = B.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[O].color ? e.xAxis.anchors[O].color : "",
      onChange: (B) => {
        B.preventDefault();
        const G = [...e.xAxis.anchors];
        G[O].color = B.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.anchors[O].lineStyle || "",
      onChange: (B) => {
        const G = [...e.xAxis.anchors];
        G[O].lineStyle = B.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    p.map((B) => /* @__PURE__ */ r.createElement("option", { key: B.key }, B.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault();
        const O = [...e.xAxis.anchors];
        O.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: O
          }
        });
      }
    },
    "Add Anchor"
  )))), Ie && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Right Value Axis")), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(Te, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: te, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    fe,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    fe,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, se.rightMaxMessage), /* @__PURE__ */ r.createElement(fe, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, se.minMsg))), j() && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ r.createElement(qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(st, null, e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Me, { value: e.xAxis.type, section: "xAxis", fieldName: "type", label: "Data Type", updateField: te, options: e.visualizationType !== "Scatter Plot" ? ["categorical", "date"] : ["categorical", "continuous", "date"] }), /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.sortDates, section: "xAxis", fieldName: "sortDates", label: "Force Date Scale (Sort Dates)", updateField: te }), " "), /* @__PURE__ */ r.createElement(
    Me,
    {
      value: e.xAxis.dataKey || Ze() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: te,
      options: de(!1),
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Me,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: te,
      options: de(!1),
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: te }), e.xAxis.type === "continuous" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    fe,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    fe,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ r.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.dateParseFormat, section: "xAxis", fieldName: "dateParseFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Parse Format", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.dateDisplayFormat, section: "xAxis", fieldName: "dateDisplayFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Display Format", updateField: te })), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: te
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(bt, null)), /* @__PURE__ */ r.createElement(
    Me,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (M) => {
        M.target.value !== "" && M.target.value !== "Select" && yt(M.target.value), M.target.value = "";
      },
      options: we(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(fe, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: te, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ r.createElement(fe, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: te, value: e.exclusions.dateEnd || "" }))), he() && /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: te }), J() && /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: te }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: te, min: 0 })), ae() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(Te, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: te }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && ne() && /* @__PURE__ */ r.createElement(fe, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: te }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    fe,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ r.createElement(r.Fragment, null, I() && /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), U() && /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te })) : /* @__PURE__ */ r.createElement(r.Fragment, null, I() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), U() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te }), Q() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: te })), ((Ho = e.series) == null ? void 0 : Ho.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Zt.map((M, O) => /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `highlighted-bar-${O}` }, /* @__PURE__ */ r.createElement("button", { className: "remove-column", onClick: (B) => Cn(B, O) }, "Remove"), /* @__PURE__ */ r.createElement("p", null, "Highlighted Bar ", O + 1), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ r.createElement("select", { value: e.highlightedBarValues[O].value, onChange: (B) => ht(B, O) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Value -"), _e && [...new Set(_e)].sort().map((B) => /* @__PURE__ */ r.createElement("option", { key: `special-class-value-option-${O}-${B}` }, B)))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[O].color ? e.highlightedBarValues[O].color : "", onChange: (B) => Aa(B, O) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ r.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[O].borderWidth ? e.highlightedBarValues[O].borderWidth : "", onChange: (B) => Ta(B, O) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[O].legendLabel ? e.highlightedBarValues[O].legendLabel : "", onChange: (B) => Sa(B, O) }))))), /* @__PURE__ */ r.createElement("button", { className: "btn full-width", onClick: (M) => Ea(M) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(bt, null)), /* @__PURE__ */ r.createElement(
    Me,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (M) => {
        M.target.value !== "" && M.target.value !== "Select" && yt(M.target.value), M.target.value = "";
      },
      options: we(e.xAxis.dataKey, !0)
    }
  ))), z() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(vn, { allowZeroExpanded: !0 }, (Ko = (Wo = e.xAxis) == null ? void 0 : Wo.anchors) == null ? void 0 : Ko.map((M, O) => /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${O}` }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { className: "accordion__button accordion__button" }, "Anchor ", O + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (B) => {
        B.preventDefault();
        const G = [...e.xAxis.anchors];
        G.splice(O, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[O].value ? e.xAxis.anchors[O].value : "",
      onChange: (B) => {
        B.preventDefault();
        const G = [...e.xAxis.anchors];
        G[O].value = B.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[O].color ? e.xAxis.anchors[O].color : "",
      onChange: (B) => {
        B.preventDefault();
        const G = [...e.xAxis.anchors];
        G[O].color = B.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.anchors[O].lineStyle || "",
      onChange: (B) => {
        const G = [...e.xAxis.anchors];
        G[O].lineStyle = B.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    p.map((B) => /* @__PURE__ */ r.createElement("option", { key: B.key }, B.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault();
        const O = [...e.xAxis.anchors];
        O.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: O
          }
        });
      }
    },
    "Add Anchor"
  )), z() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(vn, { allowZeroExpanded: !0 }, (jo = (Io = e.yAxis) == null ? void 0 : Io.anchors) == null ? void 0 : jo.map((M, O) => /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${O}` }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { className: "accordion__button accordion__button" }, "Anchor ", O + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (B) => {
        B.preventDefault();
        const G = [...e.yAxis.anchors];
        G.splice(O, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[O].value ? e.yAxis.anchors[O].value : "",
      onChange: (B) => {
        B.preventDefault();
        const G = [...e.yAxis.anchors];
        G[O].value = B.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[O].color ? e.yAxis.anchors[O].color : "",
      onChange: (B) => {
        B.preventDefault();
        const G = [...e.yAxis.anchors];
        G[O].color = B.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.anchors[O].lineStyle || "",
      onChange: (B) => {
        const G = [...e.yAxis.anchors];
        G[O].lineStyle = B.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    p.map((B) => /* @__PURE__ */ r.createElement("option", { key: B.key }, B.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault();
        const O = [...e.yAxis.anchors];
        O.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: O
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ r.createElement(pn.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Columns")), /* @__PURE__ */ r.createElement(st, null, e.type !== "navigation" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), Yt.map((M) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: M }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (O) => {
        O.preventDefault(), ct(M);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.columns[M] ? e.columns[M].name : de()[0],
      onChange: (O) => {
        gt(M, "name", O.target.value);
      }
    },
    de().map((O) => /* @__PURE__ */ r.createElement("option", null, O))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.columns[M] ? e.columns[M].series : "",
      onChange: (O) => {
        gt(M, "series", O.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "Select series"),
    e.series.map((O) => /* @__PURE__ */ r.createElement("option", null, O.dataKey))
  )), /* @__PURE__ */ r.createElement(fe, { value: e.columns[M].label, section: "columns", subsection: M, fieldName: "label", label: "Label", updateField: te }), /* @__PURE__ */ r.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ r.createElement("li", { className: "three-col" }, /* @__PURE__ */ r.createElement(fe, { value: e.columns[M].prefix, section: "columns", subsection: M, fieldName: "prefix", label: "Prefix", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.columns[M].suffix, section: "columns", subsection: M, fieldName: "suffix", label: "Suffix", updateField: te }), /* @__PURE__ */ r.createElement(fe, { type: "number", value: e.columns[M].roundToPlace, section: "columns", subsection: M, fieldName: "roundToPlace", label: "Round", updateField: te })), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].commas,
      onChange: (O) => {
        gt(M, "commas", O.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ r.createElement("li", null, e.table.showVertical && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].dataTable,
      onChange: (O) => {
        gt(M, "dataTable", O.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in Data Table"))), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].showInViz,
      onChange: (O) => {
        gt(M, "showInViz", O.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in Visualization"))), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].tooltips || !1,
      onChange: (O) => {
        Rr(M, O.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in tooltip"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].forestPlot || !1,
      onChange: (O) => {
        gt(M, "forestPlot", O.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].forestPlotAlignRight || !1,
      onChange: (O) => {
        gt(M, "forestPlotAlignRight", O.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[M].forestPlotAlignRight && /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "text" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      value: e.columns[M].forestPlotStartingPoint || 0,
      onChange: (O) => {
        gt(M, "forestPlotStartingPoint", O.target.value);
      }
    }
  ))))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault(), Je(Yt.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((M, O) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: M }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (B) => {
        B.preventDefault();
        const G = [...e.legend.additionalCategories];
        G.splice(O, 1), te("legend", null, "additionalCategories", G);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(
    fe,
    {
      value: M,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (B, G, Xe, Tt) => {
        const Vt = [...e.legend.additionalCategories];
        Vt[O] = Tt, te(B, G, Xe, Vt);
      }
    }
  ))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault();
        const O = [...e.legend.additionalCategories || []];
        O.push(""), te("legend", null, "additionalCategories", O);
      }
    },
    "Add Category"
  )))), L() && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Legend")), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(Te, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: te }), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(Te, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: te }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ r.createElement(Me, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: te, options: ce(n) }), /* @__PURE__ */ r.createElement(Me, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: te, options: ["highlight", "isolate"] }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ r.createElement(Te, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: te }), /* @__PURE__ */ r.createElement(fe, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: te }), /* @__PURE__ */ r.createElement(Me, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: te, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: te })), /* @__PURE__ */ r.createElement(fe, { type: "textarea", value: e.legend.description, updateField: te, section: "legend", fieldName: "description", label: "Legend Description" }))), ke() && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Filters")), /* @__PURE__ */ r.createElement(st, null, e.filters && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Me,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: te,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ r.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ee.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ee.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ r.createElement("br", null)), e.filters && /* @__PURE__ */ r.createElement("ul", { className: "filters-list" }, e.filters.map((M, O) => M.type === "url" ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: O }, /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        wt(O);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: M.columnName,
      onChange: (B) => {
        dt("columnName", O, B.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    oe().map((B, G) => /* @__PURE__ */ r.createElement("option", { value: B, key: G }, B))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: M.showDropdown === void 0 ? !0 : M.showDropdown,
      onChange: (B) => {
        dt("showDropdown", O, B.target.checked);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: M.filterStyle,
      onChange: (B) => {
        dt("filterStyle", O, B.target.value);
      }
    },
    Oe.map((B, G) => /* @__PURE__ */ r.createElement("option", { key: `filter-style-${G}`, value: B }, B))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: M.label,
      onChange: (B) => {
        dt("label", O, B.target.value);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ r.createElement("select", { value: M.order ? M.order : "asc", onChange: (B) => dt("order", O, B.target.value) }, Le.map((B, G) => /* @__PURE__ */ r.createElement("option", { value: B.value, key: `filter-${G}` }, B.label))), M.order === "cust" && /* @__PURE__ */ r.createElement(Yo, { onDragEnd: ({ source: B, destination: G }) => me(B.index, G.index, O, e.filters[O]) }, /* @__PURE__ */ r.createElement(Xo, { droppableId: "filter_order" }, (B) => {
    var G;
    return /* @__PURE__ */ r.createElement("ul", { ...B.droppableProps, className: "sort-list", ref: B.innerRef, style: { marginTop: "1em" } }, (G = e.filters[O]) == null ? void 0 : G.values.map((Xe, Tt) => /* @__PURE__ */ r.createElement(Es, { key: Xe, draggableId: `draggableFilter-${Xe}`, index: Tt }, (Vt, jn) => /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("div", { className: jn.isDragging ? "currently-dragging" : "", style: Be(jn.isDragging, Vt.draggableProps.style), ref: Vt.innerRef, ...Vt.draggableProps, ...Vt.dragHandleProps }, Xe)))), B.placeholder);
  })))))), !e.filters && /* @__PURE__ */ r.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: Dt, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ r.createElement(pn.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Data Table")), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(Ru, { config: e, columns: Object.keys(n[0] || {}), updateField: te, isDashboard: c, isLoadedFromUrl: mt }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ r.createElement(Eu, { loadConfig: t, state: e, convertStateToConfig: at })))));
}, ys = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, ex = (e) => {
  e.sort((u, d) => u - d);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, a = n ? e.slice(0, t) : e.slice(0, t + 1), i = n ? e.slice(t) : e.slice(t + 1), o = Math.floor(a.length / 2), l = n ? (a[o - 1] + a[o]) / 2 : a[o], s = Math.floor(i.length / 2), c = n ? (i[s - 1] + i[s]) / 2 : i[s];
  return { q1: l, q3: c };
}, tx = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), nx = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), yn = (e, t) => {
  let n = [];
  return t.forEach((a) => {
    let i = !0;
    e.filter((o) => o.type !== "url").forEach((o) => {
      a[o.columnName] != o.active && (i = !1);
    }), i && n.push(a);
  }), n;
}, ax = [
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
], gs = (e = "#000000", t = !1) => {
  let n = Ft(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
}, xs = (e, t, n) => {
  const a = t.position === "bottom" || ["sm", "xs", "xxs"].includes(n), i = e.orientation === "horizontal", o = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, l = e.brush.active, s = 20, c = e.brush.height;
  let u = 0;
  return !a && i && !e.yAxis.label && (u = Number(e.xAxis.labelOffset)), !a && i && e.yAxis.label && !e.isResponsiveTicks && (u = Number(e.runtime.xAxis.size) + Number(e.xAxis.labelOffset)), !a && i && e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop + s), !a && i && !e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop ? e.dynamicMarginTop - s : Number(e.xAxis.labelOffset) - s), !a && i && e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop ? e.dynamicMarginTop + s : Number(e.xAxis.labelOffset)), !i && !a && e.xAxis.label && o && !e.isResponsiveTicks && (u = l ? c + e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + s : e.xAxis.tickWidthMax + s + -e.xAxis.size + e.xAxis.labelOffset), !i && !a && !e.xAxis.label && o && e.isResponsiveTicks, !i && !a && !e.xAxis.label && o && !e.dynamicMarginTop && !e.isResponsiveTicks && (u = l ? e.xAxis.tickWidthMax + c + s + -e.xAxis.size : 0), !i && !a && e.xAxis.label && !o && !e.isResponsiveTicks && (u = l ? c + -e.xAxis.size + e.xAxis.labelOffset + s : -e.xAxis.size + e.xAxis.labelOffset + s), !i && !a && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (u = l ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size + s), !i && !a && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (u = l ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size - s), !i && !a && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (u = l ? c + e.xAxis.labelOffset + -e.xAxis.size + 25 : e.xAxis.labelOffset + -e.xAxis.size + s), !i && !a && !e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (u = -e.xAxis.size + s + e.xAxis.labelOffset), !i && !a && !e.xAxis.label && !o && !e.dynamicMarginTop && !e.isResponsiveTicks && (u = l ? c + -e.xAxis.size + e.xAxis.labelOffset : 0), `${u}px`;
};
const vs = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, a = new URL(e, window.location.origin), i = a.pathname, o = a.search, l = t.exec(i);
  if (l && l[1])
    return l[1];
  const s = n.exec(o);
  return s && s[1] ? s[1] : "";
};
function Lx({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: i = !1, setConfig: o, setEditing: l, hostname: s, link: c, setSharedFilter: u, setSharedFilterValue: d, dashboardConfig: h }) {
  var nt, yt;
  const m = new As(), [p, g] = $.useState(!0), [E, y] = $.useState(null), [f, x] = $.useState(t || {}), [b, v] = $.useState(f.data || []), [S, A] = $.useState(void 0), [k, N] = $.useState(void 0), [C, P] = $.useState([]), [D, T] = $.useState("lg"), [z, V] = $.useState([]), [W, F] = $.useState(), [L, q] = $.useState(), [j, Y] = $.useState(!1), [H, U] = $.useState([]), [I] = $.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  $.useRef(/* @__PURE__ */ new Map()), $.useRef(), a && console.log("Chart config, isEditor", f, n);
  let { legend: Q, title: ne, description: he, visualizationType: Pe } = f;
  n && (!ne || ne === "") && (ne = "Chart Title"), f.table && (!((nt = f.table) != null && nt.label) || ((yt = f.table) == null ? void 0 : yt.label) === "") && (f.table.label = "Data Table");
  const { barBorderClass: ke, lineDatapointClass: X, contentClasses: K, sparkLineStyles: re } = Fu(f), _ = f.showSidebar ? "#legend" : f != null && f.title ? `#dataTableSection__${f.title.replace(/\s/g, "")}` : "#dataTableSection", ue = async () => {
    if (f.dataUrl) {
      const w = new URL(f.runtimeDataUrl || f.dataUrl, window.location.origin);
      let oe = Object.fromEntries(new URLSearchParams(w.search)), de = !1;
      if (f.filters.forEach((Ee) => {
        Ee.type === "url" && oe[Ee.queryParameter] !== decodeURIComponent(Ee.active) && (oe[Ee.queryParameter] = Ee.active, de = !0);
      }), (!f.formattedData || f.formattedData.urlFiltered) && !de)
        return;
      let ce = `${w.origin}${w.pathname}${Object.keys(oe).map((Ee, ie) => {
        let je = ie === 0 ? "?" : "&";
        return je += Ee + "=", je += oe[Ee], je;
      }).join("")}`, we = [];
      try {
        const Ee = vs(w.href);
        Ee === "csv" ? we = await fetch(ce).then((ie) => ie.text()).then((ie) => qo.parse(ie, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : Ee === "json" ? we = await fetch(ce).then((ie) => ie.json()) : we = [];
      } catch {
        console.error(`Cannot parse URL: ${ce}`), we = [];
      }
      f.dataDescription && (we = m.autoStandardize(we), we = m.developerStandardize(we, f.dataDescription)), Object.assign(we, { urlFiltered: !0 }), ge({ ...f, runtimeDataUrl: ce, data: we, formattedData: we }), we && (v(we), A(we), N(yn(f.filters, we)));
    }
  }, le = async () => {
    let w = t || await (await fetch(e)).json(), oe = w.data || [];
    const de = w.filters ? w.filters.filter((Ee) => Ee.type === "url").length > 0 : !1;
    if (w.dataUrl && !de)
      try {
        const Ee = vs(w.dataUrl);
        Ee === "csv" && (oe = await fetch(w.dataUrl + `?v=${nl()}`).then((ie) => ie.text()).then((ie) => (ie = ie.replace(/(".*?")|,/g, (...at) => at[1] || "|"), ie = ie.replace(/["]+/g, ""), qo.parse(ie, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), Ee === "json" && (oe = await fetch(w.dataUrl + `?v=${nl()}`).then((ie) => ie.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${w.dataUrl}`), oe = [];
      }
    w.dataDescription && (oe = m.autoStandardize(oe), oe = m.developerStandardize(oe, w.dataDescription)), oe && (v(oe), A(oe)), w !== void 0 && w.table !== void 0 && (!w.table || !w.table.showVertical) && (w.table = w.table || {}, w.table.showVertical = !1);
    let ce = { ...ri, ...w };
    ce.visualizationType === "Box Plot" && (ce.legend.hide = !0), ce.table.show === void 0 && (ce.table.show = !i), ce.series.map((Ee) => {
      Ee.tooltip || (Ee.tooltip = !0), Ee.axis || (Ee.axis = "Left");
    }), !ce.data && oe && (ce.data = oe);
    const we = { ...await Wu(ce) };
    ge(we, oe);
  }, ge = (w, oe) => {
    var Ee;
    let de = oe || b;
    Object.keys(ri).forEach((ie) => {
      w[ie] && typeof w[ie] == "object" && !Array.isArray(w[ie]) && (w[ie] = { ...ri[ie], ...w[ie] });
    });
    let ce = [];
    if (w.exclusions && w.exclusions.active)
      if (w.xAxis.type === "categorical" && ((Ee = w.exclusions.keys) == null ? void 0 : Ee.length) > 0)
        ce = de.filter((ie) => !w.exclusions.keys.includes(ie[w.xAxis.dataKey]));
      else if (w.xAxis.type === "date" && (w.exclusions.dateStart || w.exclusions.dateEnd) && w.xAxis.dateParseFormat) {
        const ie = (Z) => new Date(Z).getTime();
        let je = ie(w.exclusions.dateStart), at = ie(w.exclusions.dateEnd) + 86399999, bt = typeof je !== void 0 && isNaN(je) === !1, Et = typeof at !== void 0 && isNaN(at) === !1;
        bt && Et ? ce = de.filter((Z) => ie(Z[w.xAxis.dataKey]) >= je && ie(Z[w.xAxis.dataKey]) <= at) : bt ? ce = de.filter((Z) => ie(Z[w.xAxis.dataKey]) >= je) : Et && (ce = de.filter((Z) => ie(Z[w.xAxis.dataKey]) <= at));
      } else
        ce = oe || b;
    else
      ce = oe || b;
    A(ce);
    let we = [];
    if (w.filters && (w.filters.forEach((ie, je) => {
      let at = [];
      at = ie.orderedValues || ve(ie.columnName, ce).sort(ie.order === "desc" ? nx : tx), w.filters[je].values = at, w.filters[je].active = w.filters[je].active || at[0], w.filters[je].filterStyle = w.filters[je].filterStyle ? w.filters[je].filterStyle : "dropdown";
    }), we = yn(w.filters, ce), N(we)), w.runtime = {}, w.runtime.seriesLabels = {}, w.runtime.seriesLabelsAll = [], w.runtime.originalXAxis = w.xAxis, w.visualizationType === "Pie" ? (w.runtime.seriesKeys = (oe || de).map((ie) => ie[w.xAxis.dataKey]), w.runtime.seriesLabelsAll = w.runtime.seriesKeys) : w.runtime.seriesKeys = w.series ? w.series.map((ie) => (w.runtime.seriesLabels[ie.dataKey] = ie.name || ie.label || ie.dataKey, w.runtime.seriesLabelsAll.push(ie.name || ie.dataKey), ie.dataKey)) : [], w.visualizationType === "Box Plot" && w.series) {
      let ie = ce ? ce.map((se) => se[w.xAxis.dataKey]) : de.map((se) => se[w.xAxis.dataKey]), je = ce ? ce.map((se) => {
        var Ce;
        return Number(se[(Ce = w == null ? void 0 : w.series[0]) == null ? void 0 : Ce.dataKey]);
      }) : de.map((se) => {
        var Ce;
        return Number(se[(Ce = w == null ? void 0 : w.series[0]) == null ? void 0 : Ce.dataKey]);
      });
      const bt = function(se) {
        return se.filter(function(Ce, ye, Ge) {
          return Ge.indexOf(Ce) === ye;
        });
      }(ie);
      let Et = [];
      const Z = [];
      if (!bt)
        return;
      bt.forEach((se) => {
        try {
          if (!se)
            throw new Error("No groups resolved in box plots");
          let Ce = ce ? ce.filter((_e) => _e[w.xAxis.dataKey] === se) : de.filter((_e) => _e[w.xAxis.dataKey] === se), ye = Ce.map((_e) => {
            var ht;
            return Number(_e[(ht = w == null ? void 0 : w.series[0]) == null ? void 0 : ht.dataKey]);
          }), Ge = ye.sort((_e, ht) => _e - ht);
          const mt = ex(Ge);
          if (!Ce)
            throw new Error("boxplots dont have data yet");
          if (!Z)
            throw new Error("boxplots dont have plots yet");
          w.boxplot.firstQuartilePercentage === "" && (w.boxplot.firstQuartilePercentage = 0), w.boxplot.thirdQuartilePercentage === "" && (w.boxplot.thirdQuartilePercentage = 0);
          const Ze = mt.q1, At = mt.q3, ft = At - Ze, Pt = Ze - (At - Ze) * 1.5, Yt = At + (At - Ze) * 1.5, Je = Ge.filter((_e) => _e < Pt || _e > Yt);
          let ct = ye;
          ct = ct.filter((_e) => !Je.includes(_e));
          const gt = Gn(ye) || 0, Zt = Jn([gt, Ze - 1.5 * ft]);
          Z.push({
            columnCategory: se,
            columnMax: Gn([Jn(ye), Ze + 1.5 * ft]),
            columnThirdQuartile: Number(At).toFixed(w.dataFormat.roundTo),
            columnMedian: Number(Rm(ye)).toFixed(w.dataFormat.roundTo),
            columnFirstQuartile: Ze.toFixed(w.dataFormat.roundTo),
            columnMin: Zt,
            columnTotal: ye.reduce((_e, ht) => _e + ht, 0),
            columnSd: Number(Dm(ye)).toFixed(w.dataFormat.roundTo),
            columnMean: Number(zm(ye)).toFixed(w.dataFormat.roundTo),
            columnIqr: Number(ft).toFixed(w.dataFormat.roundTo),
            columnLowerBounds: Zt,
            columnUpperBounds: Gn([Jn(Ge), Ze + 1.5 * ft]),
            columnOutliers: Je,
            values: ye,
            nonOutlierValues: ct
          });
        } catch (Ce) {
          console.error("COVE: ", Ce.message);
        }
      }), Et = JSON.parse(JSON.stringify(Z)), Et.map((se) => (se.columnIqr = void 0, se.nonOutlierValues = void 0, se.columnLowerBounds = void 0, se.columnUpperBounds = void 0, null)), w.boxplot.allValues = je, w.boxplot.categories = bt, w.boxplot.plots = Z, w.boxplot.tableData = Et;
    }
    w.visualizationType === "Combo" && w.series && (w.runtime.barSeriesKeys = [], w.runtime.lineSeriesKeys = [], w.runtime.areaSeriesKeys = [], w.runtime.forecastingSeriesKeys = [], w.series.forEach((ie) => {
      ie.type === "Area Chart" && w.runtime.areaSeriesKeys.push(ie), ie.type === "Forecasting" && w.runtime.forecastingSeriesKeys.push(ie), ie.type === "Bar" && w.runtime.barSeriesKeys.push(ie.dataKey), (ie.type === "Line" || ie.type === "dashed-sm" || ie.type === "dashed-md" || ie.type === "dashed-lg") && w.runtime.lineSeriesKeys.push(ie.dataKey);
    })), w.visualizationType === "Forecasting" && w.series && (w.runtime.forecastingSeriesKeys = [], w.series.forEach((ie) => {
      ie.type === "Forecasting" && w.runtime.forecastingSeriesKeys.push(ie);
    })), w.visualizationType === "Area Chart" && w.series && (w.runtime.areaSeriesKeys = [], w.series.forEach((ie) => {
      w.runtime.areaSeriesKeys.push({ ...ie, type: "Area Chart" });
    })), w.visualizationType === "Bar" && w.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(w.visualizationType) ? (w.runtime.xAxis = w.yAxis, w.runtime.yAxis = w.xAxis, w.runtime.horizontal = !1, w.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(w.visualizationType) ? (w.runtime.xAxis = w.xAxis, w.runtime.yAxis = w.yAxis, w.runtime.horizontal = !1, w.orientation = "vertical") : (w.runtime.xAxis = w.xAxis, w.runtime.yAxis = w.yAxis, w.runtime.horizontal = !1), w.runtime.uniqueId = Date.now(), w.runtime.editorErrorMessage = w.visualizationType === "Pie" && !w.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", x(w);
  }, ve = (w, oe = this.state.data) => {
    const de = [];
    return oe.forEach((ce) => {
      const we = ce[w];
      we && de.includes(we) === !1 && de.push(we);
    }), de;
  }, xe = (w, oe) => {
    let de = f.visualizationType === "Bar" && f.visualizationSubType === "horizontal" ? f.xAxis.dataKey : f.yAxis.sortKey, ce = parseFloat(w[de]), we = parseFloat(oe[de]);
    return ce < we ? f.sortData === "ascending" ? 1 : -1 : ce > we ? f.sortData === "ascending" ? -1 : 1 : 0;
  }, Ne = new vu((w) => {
    for (let oe of w) {
      let { width: de, height: ce } = oe.contentRect, we = bu(de), Ee = 32, ie = 350;
      T(we), n && (de = de - ie), oe.target.dataset.lollipop === "true" && (de = de - 2.5), de = de - Ee, V([de, ce]);
    }
  }), Ae = $.useCallback((w) => {
    w !== null && Ne.observe(w), q(w);
  }, []);
  function Se(w) {
    return Object.keys(w).length === 0;
  }
  $.useEffect(() => {
    le();
  }, []), $.useEffect(() => {
    ue();
  }, [JSON.stringify(f.filters)]), $.useEffect(() => {
    L && !Se(f) && !j && (Bu("cove_loaded", { config: f }), Y(!0));
  }, [L, f]), $.useEffect(() => {
    const w = (oe) => {
      let de = [];
      de.push(oe.detail), F(de);
    };
    return Vu("cove_filterData", (oe) => w(oe)), () => {
      Hu("cove_filterData", w);
    };
  }, [f]), $.useEffect(() => {
    if (W && W[0] && !W[0].hasOwnProperty("active")) {
      let oe = { ...f };
      delete oe.filters, x(oe), N(yn(W, S));
    }
    if (W && W.length > 0 && W.length > 0 && W[0].hasOwnProperty("active")) {
      let w = { ...f, filters: W };
      x(w), N(yn(W, S));
    }
  }, [W]), t && $.useEffect(() => {
    le();
  }, [t.data]), $.useEffect(() => {
    var w;
    if (b && f.xAxis && ((w = f.runtime) != null && w.seriesKeys)) {
      const oe = ["Paired Bar", "Deviation Bar"].includes(f.visualizationType) ? f.twoColor.palette : f.palette, de = { ...kt, ...Ua };
      let ce = f.customColors || de[oe], we = f.runtime.seriesKeys.length, Ee;
      for (; we > ce.length; )
        ce = ce.concat(ce);
      ce = ce.slice(0, we), Ee = () => Ji({
        domain: f.runtime.seriesLabelsAll,
        range: ce,
        unknown: null
      }), y(Ee), g(!1);
    }
    f && b && f.sortData && b.sort(xe);
  }, [f, b]);
  const pe = (w) => {
    if (C.length + 1 === f.runtime.seriesKeys.length && f.visualizationType !== "Forecasting") {
      ae();
      return;
    }
    const oe = [...C];
    let de = w.datum;
    f.runtime.seriesLabels && f.runtime.seriesKeys.forEach((ce) => {
      f.runtime.seriesLabels[ce] === w.datum && (de = ce);
    }), oe.indexOf(de) !== -1 ? oe.splice(oe.indexOf(de), 1) : oe.push(de), P(oe);
  }, ae = () => {
    try {
      const w = document.getElementById("legend");
      if (!w)
        throw new Error("No legend available to set previous focus on.");
      w.focus();
    } catch (w) {
      console.error("COVE:", w.message);
    }
    P([]);
  }, J = f.orientation === "horizontal" ? "yAxis" : "xAxis", Ve = (w, oe = !0) => {
    let de = Pc(f.runtime[J].dateParseFormat)(w);
    return de || (oe && (f.runtime.editorErrorMessage = `Error parsing date "${w}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, me = (w) => Cc(f.runtime[J].dateDisplayFormat)(w);
  function Le(w, oe) {
    const ce = document.createElement("canvas").getContext("2d");
    if (!ce) {
      console.error("2d context not found");
      return;
    }
    return ce.font = oe || getComputedStyle(document.body).font, Math.ceil(ce.measureText(w).width);
  }
  const Oe = (w, oe, de = !1, ce, we, Ee) => {
    if (isNaN(w) || !w)
      return w;
    const ie = w < 0;
    (oe === void 0 || !oe) && (oe = "left"), ie && (w = Math.abs(w));
    let {
      dataFormat: { commas: je, abbreviated: at, roundTo: bt, prefix: Et, suffix: Z, rightRoundTo: se, bottomRoundTo: Ce, rightPrefix: ye, rightSuffix: Ge, bottomPrefix: mt, bottomSuffix: Ze, bottomAbbreviated: At }
    } = f;
    String(w).indexOf(",") !== -1 && (w = w.replaceAll(",", ""));
    let ft = w, Pt = {
      useGrouping: !!je
      // for old chart data table to work right cant just leave this to undefined
    };
    if (oe === "left" || oe === void 0) {
      let ct;
      Ee !== void 0 ? ct = Ee ? Number(Ee) : 0 : ct = bt ? Number(bt) : 0, Pt = {
        useGrouping: Ee ? !0 : !!f.dataFormat.commas,
        minimumFractionDigits: ct,
        maximumFractionDigits: ct
      };
    }
    oe === "right" && (Pt = {
      useGrouping: !!f.dataFormat.rightCommas,
      minimumFractionDigits: se ? Number(se) : 0,
      maximumFractionDigits: se ? Number(se) : 0
    });
    const Yt = () => f.forestPlot.type === "Logarithmic" && !Ce ? 2 : Number(Ce) ? Number(Ce) : 0;
    if (oe === "bottom" && (Pt = {
      useGrouping: !!f.dataFormat.bottomCommas,
      minimumFractionDigits: Yt(),
      maximumFractionDigits: Yt()
    }), w = tl(w), isNaN(w))
      return f.runtime.editorErrorMessage = `Unable to parse number from data ${ft}. Try reviewing your data and selections in the Data Series section.`, ft;
    if (!f.dataFormat)
      return w;
    if (f.dataCutoff) {
      let ct = tl(f.dataCutoff);
      w < ct && (w = ct);
    }
    oe === "left" && je && at && de || oe === "bottom" && je && at && de ? w = w : w = w.toLocaleString("en-US", Pt);
    let Je = "";
    return at && oe === "left" && de && (w = ys(parseFloat(w))), At && oe === "bottom" && de && (w = ys(parseFloat(w))), ce && oe === "left" ? Je = ce + Je : Et && oe === "left" && (Je += Et), ye && oe === "right" && (Je += ye), mt && oe === "bottom" && (Je += mt), Je += w, we && oe === "left" ? Je += we : Z && oe === "left" && (Je += Z), Ge && oe === "right" && (Je += Ge), Ze && oe === "bottom" && (Je += Ze), ie && (Je = "-" + Je), String(Je);
  }, Ie = {
    "Paired Bar": /* @__PURE__ */ r.createElement(Kt, null),
    Forecasting: /* @__PURE__ */ r.createElement(Kt, null),
    Bar: /* @__PURE__ */ r.createElement(Kt, null),
    Line: /* @__PURE__ */ r.createElement(Kt, null),
    Combo: /* @__PURE__ */ r.createElement(Kt, null),
    Pie: /* @__PURE__ */ r.createElement(qp, null),
    "Box Plot": /* @__PURE__ */ r.createElement(Kt, null),
    "Area Chart": /* @__PURE__ */ r.createElement(Kt, null),
    "Scatter Plot": /* @__PURE__ */ r.createElement(Kt, null),
    "Deviation Bar": /* @__PURE__ */ r.createElement(Kt, null),
    "Forest Plot": /* @__PURE__ */ r.createElement(Kt, null)
  }, Be = () => {
    if (f.visualizationType === "Forecasting" || f.visualizationType === "Forest Plot")
      return !1;
    if (f.visualizationType === "Pie") {
      if ((f == null ? void 0 : f.yAxis.dataKey) === void 0)
        return !0;
    } else if ((f == null ? void 0 : f.series) === void 0 || !((f == null ? void 0 : f.series.length) > 0))
      return !0;
    return !f.xAxis.dataKey;
  }, Ye = (w, oe) => {
    if (w === null || w === "" || w === void 0)
      return "";
    if (typeof w == "string" && w.length > 0 && f.legend.type === "equalnumber")
      return w;
    let de = w, ce;
    if (Object.keys(f.columns).length > 0 && Object.keys(f.columns).forEach(function(we) {
      var Ee = f.columns[we];
      Ee.name === oe && (ce = Ee);
    }), ce === void 0 && (ce = f.type === "chart" ? f.dataFormat : f.primary, ce.useCommas = ce.commas, ce.roundToPlace = ce.roundTo ? ce.roundTo : ""), ce) {
      let we = !1, Ee = 0;
      Number(w) && (ce.roundToPlace >= 0 && (we = ce.roundToPlace ? ce.roundToPlace !== "" || ce.roundToPlace !== null : !1, Ee = ce.roundToPlace ? Number(ce.roundToPlace) : 0, ce.hasOwnProperty("roundToPlace") && we && (de = Number(w).toFixed(Ee))), ce.hasOwnProperty("useCommas") && ce.useCommas === !0 && (de = Number(w).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: we ? Ee : 0,
        maximumFractionDigits: we ? Ee : 5
      }))), de = (ce.prefix || "") + de + (ce.suffix || "");
    }
    return de;
  }, rt = (w) => {
    try {
      if (!w)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (f.type === "navigation") {
        let oe = kt[f.color] || kt.bluegreenreverse;
        return gs(oe[3]);
      }
      return gs();
    } catch (oe) {
      console.error("COVE: ", oe);
    }
  }, te = (w) => {
    var oe;
    return Array.isArray(w) ? f.visualizationType === "Forecasting" ? w : (oe = f == null ? void 0 : f.xAxis) != null && oe.dataKey ? m.cleanData(w, f.xAxis.dataKey) : w : [];
  }, et = (w) => w;
  let ze = /* @__PURE__ */ r.createElement(Nu, null);
  if (!p) {
    const w = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${f.dataKey}`, className: "margin-left-href" }, f.dataKey, " (Go to Table)");
    ze = /* @__PURE__ */ r.createElement(r.Fragment, null, n && /* @__PURE__ */ r.createElement(Gg, null), !Be() && !f.newViz && /* @__PURE__ */ r.createElement("div", { className: "cdc-chart-inner-container" }, /* @__PURE__ */ r.createElement(Su, { showTitle: f.showTitle, isDashboard: i, title: ne, superTitle: f.superTitle, classes: ["chart-title", `${f.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ r.createElement("a", { id: "skip-chart-container", className: "cdcdataviz-sr-only-focusable", href: _ }, "Skip Over Chart Container"), f.filters && !W && /* @__PURE__ */ r.createElement(wu, { config: f, setConfig: x, setFilteredData: N, filteredData: k, excludedData: S, filterData: yn, dimensions: z }), (f == null ? void 0 : f.introText) && f.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("section", { className: "introText" }, xn(f.introText)), /* @__PURE__ */ r.createElement(
      "div",
      {
        style: { marginBottom: xs(f, Q, D) },
        className: `chart-container  p-relative ${f.legend.position === "bottom" ? "bottom" : ""}${f.legend.hide ? " legend-hidden" : ""}${X}${ke} ${K.join(" ")} ${a ? "debug" : ""}`
      },
      f.visualizationType !== "Spark Line" && Ie[f.visualizationType],
      f.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, (f == null ? void 0 : f.introText) && /* @__PURE__ */ r.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, xn(f.introText)), /* @__PURE__ */ r.createElement("div", { style: { height: "100px", width: "100%", ...re } }, /* @__PURE__ */ r.createElement(of, null, (oe) => /* @__PURE__ */ r.createElement(_g, { width: oe.width, height: oe.height }))), he && /* @__PURE__ */ r.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, xn(he))),
      !f.legend.hide && f.visualizationType !== "Spark Line" && f.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(Mg, null)
    ), i && f.table && f.table.show && f.table.showDataTableLink ? w : c && c, he && f.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "column " + f.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, xn(he)), /* @__PURE__ */ r.createElement(Fr.Section, { classes: ["download-buttons"] }, f.table.showDownloadImgButton && /* @__PURE__ */ r.createElement(Fr.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: f, elementToCapture: I }), f.table.showDownloadPdfButton && /* @__PURE__ */ r.createElement(Fr.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: f, elementToCapture: I })), f.xAxis.dataKey && f.table.show && f.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(
      Pu,
      {
        config: f,
        rawData: f.table.customTableConfig ? yn(f.filters, f.data) : f.data,
        runtimeData: m.applySuppression(k || S, f.suppressedData),
        expandDataTable: f.table.expanded,
        columns: f.columns,
        displayDataAsText: Ye,
        displayGeoName: et,
        applyLegendToRow: rt,
        tableTitle: f.table.label,
        indexTitle: f.table.indexLabel,
        vizTitle: ne,
        viewport: D,
        tabbingId: _,
        colorScale: E
      }
    ), (f == null ? void 0 : f.footnotes) && /* @__PURE__ */ r.createElement("section", { className: "footnotes" }, xn(f.footnotes))));
  }
  const Dt = {
    capitalize: (w) => w.charAt(0).toUpperCase() + w.slice(1),
    computeMarginBottom: xs,
    getXAxisData: (w) => f.runtime.xAxis.type === "date" ? Ve(w[f.runtime.originalXAxis.dataKey]).getTime() : w[f.runtime.originalXAxis.dataKey],
    getYAxisData: (w, oe) => w[oe],
    config: f,
    setConfig: x,
    rawData: b ?? {},
    excludedData: S,
    transformedData: te(k || S),
    // do this right before passing to components
    tableData: k || S,
    // do not clean table data
    unfilteredData: b,
    seriesHighlight: C,
    colorScale: E,
    dimensions: z,
    currentViewport: D,
    parseDate: Ve,
    formatDate: me,
    formatNumber: Oe,
    loading: p,
    updateConfig: ge,
    colorPalettes: kt,
    isDashboard: i,
    setParentConfig: o,
    missingRequiredSections: Be,
    setEditing: l,
    setFilteredData: N,
    handleChartAriaLabels: Kc,
    highlight: pe,
    highlightReset: ae,
    legend: Q,
    setSeriesHighlight: P,
    dynamicLegendItems: H,
    setDynamicLegendItems: U,
    filterData: yn,
    imageId: I,
    handleLineType: Xc,
    lineOptions: ax,
    isNumber: ja,
    getTextWidth: Le,
    twoColorPalette: Ua,
    isEditor: n,
    isDebug: a,
    setSharedFilter: u,
    setSharedFilterValue: d,
    dashboardConfig: h,
    debugSvg: a
  }, Ct = ["cdc-open-viz-module", "type-chart", `${D}`, `font-${f.fontSize}`, `${f.theme}`];
  return f.visualizationType === "Spark Line" && Ct.push("type-sparkline"), n && Ct.push("spacing-wrapper"), n && Ct.push("isEditor"), /* @__PURE__ */ r.createElement(De.Provider, { value: Dt }, /* @__PURE__ */ r.createElement("div", { className: `${Ct.join(" ")}`, ref: Ae, "data-lollipop": f.isLollipopChart, "data-download-id": I }, ze));
}
export {
  Lx as C
};
