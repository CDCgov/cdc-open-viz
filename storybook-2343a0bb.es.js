import { R as i, r as F } from "./storybook-e61d95ab.es.js";
import { i as bu, g as Eu } from "./storybook-c15fd298.es.js";
import { A as Au } from "./storybook-47176659.es.js";
import { p as Es, P as K } from "./storybook-b8c9afe4.es.js";
import { d as Su } from "./storybook-006055ee.es.js";
import { a as Fr } from "./storybook-c5d32002.es.js";
import { P as Uo } from "./storybook-76833471.es.js";
import { H as yn, T as Tu } from "./storybook-826feda6.es.js";
import { _ as Ye } from "./storybook-70f3d2a3.es.js";
import { _ as Kt, T as De, G as ku, s as Wa, c as Ln, P as As, t as nr, u as wu, D as Yo, C as Xo, I as Qo, F as Cu } from "./storybook-bfd5c703.es.js";
import { e as Rt, a as ot, b as lt, c as st, d as ct, A as gn } from "./storybook-7cc24c1b.es.js";
import { D as Ss } from "./storybook-3bf2d2e0.es.js";
import { t as Pu, f as Ts, g as cn, L as Zo, M as Di, D as Nu } from "./storybook-e2b81d3b.es.js";
import { E as qt, L as Lu } from "./storybook-a0c99f4a.es.js";
import { G as be, c as tt, j as xi, t as Ou, k as ks, m as Jo, o as _u, p as Mu, q as Du, s as Go, u as $u } from "./storybook-b0e07e40.es.js";
import { R as zu } from "./storybook-ac19c974.es.js";
import { B as Ct, s as Qn, t as ws, a as Cs, b as Ps, d as ha, c as pt, C as Ru, S as Ns } from "./storybook-3a1d6c58.es.js";
import { i as Ls, m as $i, c as Os, j as ba, k as Ea, l as Aa, n as el, o as Fu, p as tl, b as _s, d as Ms } from "./storybook-bedc547d.es.js";
import { I as ze } from "./storybook-387fe259.es.js";
import { T as te } from "./storybook-46a89ba7.es.js";
import { S as Me, T as me, C as Se, D as Bu } from "./storybook-ae4d3908.es.js";
import { I as rn } from "./storybook-deb084b6.es.js";
import { u as Hu, p as Vu, s as Wu, a as Ku, c as ju } from "./storybook-25f566e3.es.js";
import { n as nl } from "./storybook-24623c03.es.js";
import { c as al } from "./storybook-7a3dd9ba.es.js";
var ar = Math.PI, ir = 2 * ar, pn = 1e-6, Iu = ir - pn;
function rr() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function vi() {
  return new rr();
}
rr.prototype = vi.prototype = {
  constructor: rr,
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
    var l = this._x1, o = this._y1, s = n - e, c = a - t, u = l - e, d = o - t, h = u * u + d * d;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (h > pn)
      if (!(Math.abs(d * s - c * u) > pn) || !r)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var f = n - l, p = a - o, g = s * s + c * c, v = f * f + p * p, x = Math.sqrt(g), m = Math.sqrt(h), y = r * Math.tan((ar - Math.acos((g + h - v) / (2 * x * m))) / 2), b = y / m, A = y / x;
        Math.abs(b - 1) > pn && (this._ += "L" + (e + b * u) + "," + (t + b * d)), this._ += "A" + r + "," + r + ",0,0," + +(d * f > u * p) + "," + (this._x1 = e + A * s) + "," + (this._y1 = t + A * c);
      }
  },
  arc: function(e, t, n, a, r, l) {
    e = +e, t = +t, n = +n, l = !!l;
    var o = n * Math.cos(a), s = n * Math.sin(a), c = e + o, u = t + s, d = 1 ^ l, h = l ? a - r : r - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > pn || Math.abs(this._y1 - u) > pn) && (this._ += "L" + c + "," + u), n && (h < 0 && (h = h % ir + ir), h > Iu ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (e - o) + "," + (t - s) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = c) + "," + (this._y1 = u) : h > pn && (this._ += "A" + n + "," + n + ",0," + +(h >= ar) + "," + d + "," + (this._x1 = e + n * Math.cos(r)) + "," + (this._y1 = t + n * Math.sin(r))));
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
var il = Math.abs, vt = Math.atan2, un = Math.cos, qu = Math.max, zi = Math.min, Bt = Math.sin, On = Math.sqrt, bt = 1e-12, sa = Math.PI, Ka = sa / 2, $a = 2 * sa;
function Uu(e) {
  return e > 1 ? 0 : e < -1 ? sa : Math.acos(e);
}
function rl(e) {
  return e >= 1 ? Ka : e <= -1 ? -Ka : Math.asin(e);
}
function Yu(e) {
  return e.innerRadius;
}
function Xu(e) {
  return e.outerRadius;
}
function Qu(e) {
  return e.startAngle;
}
function Zu(e) {
  return e.endAngle;
}
function Ju(e) {
  return e && e.padAngle;
}
function Gu(e, t, n, a, r, l, o, s) {
  var c = n - e, u = a - t, d = o - r, h = s - l, f = h * c - d * u;
  if (!(f * f < bt))
    return f = (d * (t - l) - h * (e - r)) / f, [e + f * c, t + f * u];
}
function Sa(e, t, n, a, r, l, o) {
  var s = e - n, c = t - a, u = (o ? l : -l) / On(s * s + c * c), d = u * c, h = -u * s, f = e + d, p = t + h, g = n + d, v = a + h, x = (f + g) / 2, m = (p + v) / 2, y = g - f, b = v - p, A = y * y + b * b, w = r - l, E = f * v - g * p, L = (b < 0 ? -1 : 1) * On(qu(0, w * w * A - E * E)), P = (E * b - y * L) / A, N = (-E * y - b * L) / A, D = (E * b + y * L) / A, _ = (-E * y + b * L) / A, S = P - x, $ = N - m, I = D - x, j = _ - m;
  return S * S + $ * $ > I * I + j * j && (P = D, N = _), {
    cx: P,
    cy: N,
    x01: -d,
    y01: -h,
    x11: P * (r / w - 1),
    y11: N * (r / w - 1)
  };
}
function ed() {
  var e = Yu, t = Xu, n = We(0), a = null, r = Qu, l = Zu, o = Ju, s = null;
  function c() {
    var u, d, h = +e.apply(this, arguments), f = +t.apply(this, arguments), p = r.apply(this, arguments) - Ka, g = l.apply(this, arguments) - Ka, v = il(g - p), x = g > p;
    if (s || (s = u = vi()), f < h && (d = f, f = h, h = d), !(f > bt))
      s.moveTo(0, 0);
    else if (v > $a - bt)
      s.moveTo(f * un(p), f * Bt(p)), s.arc(0, 0, f, p, g, !x), h > bt && (s.moveTo(h * un(g), h * Bt(g)), s.arc(0, 0, h, g, p, x));
    else {
      var m = p, y = g, b = p, A = g, w = v, E = v, L = o.apply(this, arguments) / 2, P = L > bt && (a ? +a.apply(this, arguments) : On(h * h + f * f)), N = zi(il(f - h) / 2, +n.apply(this, arguments)), D = N, _ = N, S, $;
      if (P > bt) {
        var I = rl(P / h * Bt(L)), j = rl(P / f * Bt(L));
        (w -= I * 2) > bt ? (I *= x ? 1 : -1, b += I, A -= I) : (w = 0, b = A = (p + g) / 2), (E -= j * 2) > bt ? (j *= x ? 1 : -1, m += j, y -= j) : (E = 0, m = y = (p + g) / 2);
      }
      var R = f * un(m), z = f * Bt(m), V = h * un(A), W = h * Bt(A);
      if (N > bt) {
        var M = f * un(y), B = f * Bt(y), q = h * un(b), U = h * Bt(b), Q;
        if (v < sa && (Q = Gu(R, z, q, U, M, B, V, W))) {
          var ae = R - Q[0], he = z - Q[1], Ne = M - Q[0], Le = B - Q[1], Z = 1 / Bt(Uu((ae * Ne + he * Le) / (On(ae * ae + he * he) * On(Ne * Ne + Le * Le))) / 2), Y = On(Q[0] * Q[0] + Q[1] * Q[1]);
          D = zi(N, (h - Y) / (Z - 1)), _ = zi(N, (f - Y) / (Z + 1));
        }
      }
      E > bt ? _ > bt ? (S = Sa(q, U, R, z, f, _, x), $ = Sa(M, B, V, W, f, _, x), s.moveTo(S.cx + S.x01, S.cy + S.y01), _ < N ? s.arc(S.cx, S.cy, _, vt(S.y01, S.x01), vt($.y01, $.x01), !x) : (s.arc(S.cx, S.cy, _, vt(S.y01, S.x01), vt(S.y11, S.x11), !x), s.arc(0, 0, f, vt(S.cy + S.y11, S.cx + S.x11), vt($.cy + $.y11, $.cx + $.x11), !x), s.arc($.cx, $.cy, _, vt($.y11, $.x11), vt($.y01, $.x01), !x))) : (s.moveTo(R, z), s.arc(0, 0, f, m, y, !x)) : s.moveTo(R, z), !(h > bt) || !(w > bt) ? s.lineTo(V, W) : D > bt ? (S = Sa(V, W, M, B, h, -D, x), $ = Sa(R, z, q, U, h, -D, x), s.lineTo(S.cx + S.x01, S.cy + S.y01), D < N ? s.arc(S.cx, S.cy, D, vt(S.y01, S.x01), vt($.y01, $.x01), !x) : (s.arc(S.cx, S.cy, D, vt(S.y01, S.x01), vt(S.y11, S.x11), !x), s.arc(0, 0, h, vt(S.cy + S.y11, S.cx + S.x11), vt($.cy + $.y11, $.cx + $.x11), x), s.arc($.cx, $.cy, D, vt($.y11, $.x11), vt($.y01, $.x01), !x))) : s.arc(0, 0, h, A, b, x);
    }
    if (s.closePath(), u)
      return s = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, d = (+r.apply(this, arguments) + +l.apply(this, arguments)) / 2 - sa / 2;
    return [un(d) * u, Bt(d) * u];
  }, c.innerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : We(+u), c) : e;
  }, c.outerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : We(+u), c) : t;
  }, c.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : We(+u), c) : n;
  }, c.padRadius = function(u) {
    return arguments.length ? (a = u == null ? null : typeof u == "function" ? u : We(+u), c) : a;
  }, c.startAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : We(+u), c) : r;
  }, c.endAngle = function(u) {
    return arguments.length ? (l = typeof u == "function" ? u : We(+u), c) : l;
  }, c.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : We(+u), c) : o;
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
function bi(e) {
  return new Ds(e);
}
function $s(e) {
  return e[0];
}
function zs(e) {
  return e[1];
}
function Rs() {
  var e = $s, t = zs, n = We(!0), a = null, r = bi, l = null;
  function o(s) {
    var c, u = s.length, d, h = !1, f;
    for (a == null && (l = r(f = vi())), c = 0; c <= u; ++c)
      !(c < u && n(d = s[c], c, s)) === h && ((h = !h) ? l.lineStart() : l.lineEnd()), h && l.point(+e(d, c, s), +t(d, c, s));
    if (f)
      return l = null, f + "" || null;
  }
  return o.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : We(+s), o) : e;
  }, o.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : We(+s), o) : t;
  }, o.defined = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : We(!!s), o) : n;
  }, o.curve = function(s) {
    return arguments.length ? (r = s, a != null && (l = r(a)), o) : r;
  }, o.context = function(s) {
    return arguments.length ? (s == null ? a = l = null : l = r(a = s), o) : a;
  }, o;
}
function td() {
  var e = $s, t = null, n = We(0), a = zs, r = We(!0), l = null, o = bi, s = null;
  function c(d) {
    var h, f, p, g = d.length, v, x = !1, m, y = new Array(g), b = new Array(g);
    for (l == null && (s = o(m = vi())), h = 0; h <= g; ++h) {
      if (!(h < g && r(v = d[h], h, d)) === x)
        if (x = !x)
          f = h, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), p = h - 1; p >= f; --p)
            s.point(y[p], b[p]);
          s.lineEnd(), s.areaEnd();
        }
      x && (y[h] = +e(v, h, d), b[h] = +n(v, h, d), s.point(t ? +t(v, h, d) : y[h], a ? +a(v, h, d) : b[h]));
    }
    if (m)
      return s = null, m + "" || null;
  }
  function u() {
    return Rs().defined(r).curve(o).context(l);
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
    return arguments.length ? (r = typeof d == "function" ? d : We(!!d), c) : r;
  }, c.curve = function(d) {
    return arguments.length ? (o = d, l != null && (s = o(l)), c) : o;
  }, c.context = function(d) {
    return arguments.length ? (d == null ? l = s = null : s = o(l = d), c) : l;
  }, c;
}
function nd(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ad(e) {
  return e;
}
function id() {
  var e = ad, t = nd, n = null, a = We(0), r = We($a), l = We(0);
  function o(s) {
    var c, u = s.length, d, h, f = 0, p = new Array(u), g = new Array(u), v = +a.apply(this, arguments), x = Math.min($a, Math.max(-$a, r.apply(this, arguments) - v)), m, y = Math.min(Math.abs(x) / u, l.apply(this, arguments)), b = y * (x < 0 ? -1 : 1), A;
    for (c = 0; c < u; ++c)
      (A = g[p[c] = c] = +e(s[c], c, s)) > 0 && (f += A);
    for (t != null ? p.sort(function(w, E) {
      return t(g[w], g[E]);
    }) : n != null && p.sort(function(w, E) {
      return n(s[w], s[E]);
    }), c = 0, h = f ? (x - u * b) / f : 0; c < u; ++c, v = m)
      d = p[c], A = g[d], m = v + (A > 0 ? A * h : 0) + b, g[d] = {
        data: s[d],
        index: c,
        value: A,
        startAngle: v,
        endAngle: m,
        padAngle: y
      };
    return g;
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
    return arguments.length ? (r = typeof s == "function" ? s : We(+s), o) : r;
  }, o.padAngle = function(s) {
    return arguments.length ? (l = typeof s == "function" ? s : We(+s), o) : l;
  }, o;
}
var ol = Array.prototype.slice;
function on() {
}
function ja(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function Ei(e) {
  this._context = e;
}
Ei.prototype = {
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
        ja(this, this._x1, this._y1);
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
        ja(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function rd(e) {
  return new Ei(e);
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
        ja(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function od(e) {
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
        ja(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function ld(e) {
  return new Bs(e);
}
function Hs(e, t) {
  this._basis = new Ei(e), this._beta = t;
}
Hs.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var a = e[0], r = t[0], l = e[n] - a, o = t[n] - r, s = -1, c; ++s <= n; )
        c = s / n, this._basis.point(
          this._beta * e[s] + (1 - this._beta) * (a + c * l),
          this._beta * t[s] + (1 - this._beta) * (r + c * o)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const sd = function e(t) {
  function n(a) {
    return t === 1 ? new Ei(a) : new Hs(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function Ia(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function Br(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Br.prototype = {
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
        Ia(this, this._x1, this._y1);
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
        Ia(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const cd = function e(t) {
  function n(a) {
    return new Br(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Hr(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Hr.prototype = {
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
        Ia(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const ud = function e(t) {
  function n(a) {
    return new Hr(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Vr(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Vr.prototype = {
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
        Ia(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const dd = function e(t) {
  function n(a) {
    return new Vr(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Wr(e, t, n) {
  var a = e._x1, r = e._y1, l = e._x2, o = e._y2;
  if (e._l01_a > bt) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, r = (r * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > bt) {
    var u = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, d = 3 * e._l23_a * (e._l23_a + e._l12_a);
    l = (l * u + e._x1 * e._l23_2a - t * e._l12_2a) / d, o = (o * u + e._y1 * e._l23_2a - n * e._l12_2a) / d;
  }
  e._context.bezierCurveTo(a, r, l, o, e._x2, e._y2);
}
function Vs(e, t) {
  this._context = e, this._alpha = t;
}
Vs.prototype = {
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
        Wr(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const fd = function e(t) {
  function n(a) {
    return t ? new Vs(a, t) : new Br(a, 0);
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
        Wr(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const md = function e(t) {
  function n(a) {
    return t ? new Ws(a, t) : new Hr(a, 0);
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
        Wr(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const hd = function e(t) {
  function n(a) {
    return t ? new Ks(a, t) : new Vr(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function js(e) {
  this._context = e;
}
js.prototype = {
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
function or(e) {
  return new js(e);
}
function ll(e) {
  return e < 0 ? -1 : 1;
}
function sl(e, t, n) {
  var a = e._x1 - e._x0, r = t - e._x1, l = (e._y1 - e._y0) / (a || r < 0 && -0), o = (n - e._y1) / (r || a < 0 && -0), s = (l * r + o * a) / (a + r);
  return (ll(l) + ll(o)) * Math.min(Math.abs(l), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function cl(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Ri(e, t, n) {
  var a = e._x0, r = e._y0, l = e._x1, o = e._y1, s = (l - a) / 3;
  e._context.bezierCurveTo(a + s, r + s * t, l - s, o - s * n, l, o);
}
function qa(e) {
  this._context = e;
}
qa.prototype = {
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
        Ri(this, this._t0, cl(this, this._t0));
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
          this._point = 3, Ri(this, cl(this, n = sl(this, e, t)), n);
          break;
        default:
          Ri(this, this._t0, n = sl(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Is(e) {
  this._context = new qs(e);
}
(Is.prototype = Object.create(qa.prototype)).point = function(e, t) {
  qa.prototype.point.call(this, t, e);
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
  bezierCurveTo: function(e, t, n, a, r, l) {
    this._context.bezierCurveTo(t, e, a, n, l, r);
  }
};
function za(e) {
  return new qa(e);
}
function pd(e) {
  return new Is(e);
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
        for (var a = ul(e), r = ul(t), l = 0, o = 1; o < n; ++l, ++o)
          this._context.bezierCurveTo(a[0][l], r[0][l], a[1][l], r[1][l], e[o], t[o]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function ul(e) {
  var t, n = e.length - 1, a, r = new Array(n), l = new Array(n), o = new Array(n);
  for (r[0] = 0, l[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    r[t] = 1, l[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (r[n - 1] = 2, l[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
    a = r[t] / l[t - 1], l[t] -= a, o[t] -= a * o[t - 1];
  for (r[n - 1] = o[n - 1] / l[n - 1], t = n - 2; t >= 0; --t)
    r[t] = (o[t] - r[t + 1]) / l[t];
  for (l[n - 1] = (e[n] + r[n - 1]) / 2, t = 0; t < n - 1; ++t)
    l[t] = 2 * e[t + 1] - r[t + 1];
  return [r, l];
}
function yd(e) {
  return new Us(e);
}
function Ai(e, t) {
  this._context = e, this._t = t;
}
Ai.prototype = {
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
function gd(e) {
  return new Ai(e, 0.5);
}
function xd(e) {
  return new Ai(e, 0);
}
function vd(e) {
  return new Ai(e, 1);
}
function zn(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, a, r, l = e[t[0]], o, s = l.length; n < o; ++n)
      for (r = l, l = e[t[n]], a = 0; a < s; ++a)
        l[a][1] += l[a][0] = isNaN(r[a][1]) ? r[a][0] : r[a][1];
}
function Rn(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function bd(e, t) {
  return e[t];
}
function Kr() {
  var e = We([]), t = Rn, n = zn, a = bd;
  function r(l) {
    var o = e.apply(this, arguments), s, c = l.length, u = o.length, d = new Array(u), h;
    for (s = 0; s < u; ++s) {
      for (var f = o[s], p = d[s] = new Array(c), g = 0, v; g < c; ++g)
        p[g] = v = [0, +a(l[g], f, g, l)], v.data = l[g];
      p.key = f;
    }
    for (s = 0, h = t(d); s < u; ++s)
      d[h[s]].index = s;
    return n(d, h), d;
  }
  return r.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : We(ol.call(l)), r) : e;
  }, r.value = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : We(+l), r) : a;
  }, r.order = function(l) {
    return arguments.length ? (t = l == null ? Rn : typeof l == "function" ? l : We(ol.call(l)), r) : t;
  }, r.offset = function(l) {
    return arguments.length ? (n = l ?? zn, r) : n;
  }, r;
}
function Ed(e, t) {
  if ((a = e.length) > 0) {
    for (var n, a, r = 0, l = e[0].length, o; r < l; ++r) {
      for (o = n = 0; n < a; ++n)
        o += e[n][r][1] || 0;
      if (o)
        for (n = 0; n < a; ++n)
          e[n][r][1] /= o;
    }
    zn(e, t);
  }
}
function Ad(e, t) {
  if ((c = e.length) > 0)
    for (var n, a = 0, r, l, o, s, c, u = e[t[0]].length; a < u; ++a)
      for (o = s = 0, n = 0; n < c; ++n)
        (l = (r = e[t[n]][a])[1] - r[0]) > 0 ? (r[0] = o, r[1] = o += l) : l < 0 ? (r[1] = s, r[0] = s += l) : (r[0] = 0, r[1] = l);
}
function Sd(e, t) {
  if ((r = e.length) > 0) {
    for (var n = 0, a = e[t[0]], r, l = a.length; n < l; ++n) {
      for (var o = 0, s = 0; o < r; ++o)
        s += e[o][n][1] || 0;
      a[n][1] += a[n][0] = -s / 2;
    }
    zn(e, t);
  }
}
function Td(e, t) {
  if (!(!((o = e.length) > 0) || !((l = (r = e[t[0]]).length) > 0))) {
    for (var n = 0, a = 1, r, l, o; a < l; ++a) {
      for (var s = 0, c = 0, u = 0; s < o; ++s) {
        for (var d = e[t[s]], h = d[a][1] || 0, f = d[a - 1][1] || 0, p = (h - f) / 2, g = 0; g < s; ++g) {
          var v = e[t[g]], x = v[a][1] || 0, m = v[a - 1][1] || 0;
          p += x - m;
        }
        c += h, u += p * h;
      }
      r[a - 1][1] += r[a - 1][0] = n, c && (n -= u / c);
    }
    r[a - 1][1] += r[a - 1][0] = n, zn(e, t);
  }
}
function kd(e) {
  var t = e.map(wd);
  return Rn(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function wd(e) {
  for (var t = -1, n = 0, a = e.length, r, l = -1 / 0; ++t < a; )
    (r = +e[t][1]) > l && (l = r, n = t);
  return n;
}
function Ys(e) {
  var t = e.map(Xs);
  return Rn(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function Xs(e) {
  for (var t = 0, n = -1, a = e.length, r; ++n < a; )
    (r = +e[n][1]) && (t += r);
  return t;
}
function Cd(e) {
  return Ys(e).reverse();
}
function Pd(e) {
  var t = e.length, n, a, r = e.map(Xs), l = kd(e), o = 0, s = 0, c = [], u = [];
  for (n = 0; n < t; ++n)
    a = l[n], o < s ? (o += r[a], c.push(a)) : (s += r[a], u.push(a));
  return u.reverse().concat(c);
}
function Nd(e) {
  return Rn(e).reverse();
}
function Je(e, t) {
  e(t);
}
var dl = {
  ascending: Ys,
  descending: Cd,
  insideout: Pd,
  none: Rn,
  reverse: Nd
};
function jr(e) {
  return e && dl[e] || dl.none;
}
var fl = {
  expand: Ed,
  diverging: Ad,
  none: zn,
  silhouette: Sd,
  wiggle: Td
};
function Ir(e) {
  return e && fl[e] || fl.none;
}
function Ld(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, a = t.outerRadius, r = t.cornerRadius, l = t.startAngle, o = t.endAngle, s = t.padAngle, c = t.padRadius, u = ed();
  return n != null && Je(u.innerRadius, n), a != null && Je(u.outerRadius, a), r != null && Je(u.cornerRadius, r), l != null && Je(u.startAngle, l), o != null && Je(u.endAngle, o), s != null && Je(u.padAngle, s), c != null && Je(u.padRadius, c), u;
}
function qr(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.x0, r = t.x1, l = t.y, o = t.y0, s = t.y1, c = t.defined, u = t.curve, d = td();
  return n && Je(d.x, n), a && Je(d.x0, a), r && Je(d.x1, r), l && Je(d.y, l), o && Je(d.y0, o), s && Je(d.y1, s), c && d.defined(c), u && d.curve(u), d;
}
function Od(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.y, r = t.defined, l = t.curve, o = Rs();
  return n && Je(o.x, n), a && Je(o.y, a), r && o.defined(r), l && o.curve(l), o;
}
function _d(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, a = t.endAngle, r = t.padAngle, l = t.value, o = t.sort, s = t.sortValues, c = id();
  return (o === null || o != null) && c.sort(o), (s === null || s != null) && c.sortValues(s), l != null && c.value(l), r != null && Je(c.padAngle, r), n != null && Je(c.startAngle, n), a != null && Je(c.endAngle, a), c;
}
function Md(e) {
  var t = e.keys, n = e.value, a = e.order, r = e.offset, l = Kr();
  return t && l.keys(t), n && Je(l.value, n), a && l.order(jr(a)), r && l.offset(Ir(r)), l;
}
var Dd = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function lr() {
  return lr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, lr.apply(this, arguments);
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
  var t = e.className, n = e.top, a = e.left, r = e.data, l = r === void 0 ? [] : r, o = e.centroid, s = e.innerRadius, c = s === void 0 ? 0 : s, u = e.outerRadius, d = e.cornerRadius, h = e.startAngle, f = e.endAngle, p = e.padAngle, g = e.padRadius, v = e.pieSort, x = e.pieSortValues, m = e.pieValue, y = e.children, b = e.fill, A = b === void 0 ? "" : b, w = $d(e, Dd), E = Ld({
    innerRadius: c,
    outerRadius: u,
    cornerRadius: d,
    padRadius: g
  }), L = _d({
    startAngle: h,
    endAngle: f,
    padAngle: p,
    value: m,
    sort: v,
    sortValues: x
  }), P = L(l);
  return y ? /* @__PURE__ */ i.createElement(i.Fragment, null, y({
    arcs: P,
    path: E,
    pie: L
  })) : /* @__PURE__ */ i.createElement(be, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, P.map(function(N, D) {
    return /* @__PURE__ */ i.createElement("g", {
      key: "pie-arc-" + D
    }, /* @__PURE__ */ i.createElement("path", lr({
      className: tt("visx-pie-arc", t),
      d: E(N) || "",
      fill: A == null || typeof A == "string" ? A : A(N)
    }, w)), o == null ? void 0 : o(E.centroid(N), N));
  }));
}
var Rd = ["from", "to", "fill", "className", "innerRef"];
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
function Fd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Ue(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, a = e.to, r = a === void 0 ? {
    x: 1,
    y: 1
  } : a, l = e.fill, o = l === void 0 ? "transparent" : l, s = e.className, c = e.innerRef, u = Fd(e, Rd), d = n.x === r.x || n.y === r.y;
  return /* @__PURE__ */ i.createElement("line", sr({
    ref: c,
    className: tt("visx-line", s),
    x1: n.x,
    y1: n.y,
    x2: r.x,
    y2: r.y,
    fill: o,
    shapeRendering: d ? "crispEdges" : "auto"
  }, u));
}
var Bd = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
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
function Hd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function ln(e) {
  var t = e.children, n = e.data, a = n === void 0 ? [] : n, r = e.x, l = e.y, o = e.fill, s = o === void 0 ? "transparent" : o, c = e.className, u = e.curve, d = e.innerRef, h = e.defined, f = h === void 0 ? function() {
    return !0;
  } : h, p = Hd(e, Bd), g = Od({
    x: r,
    y: l,
    defined: f,
    curve: u
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: g
  })) : /* @__PURE__ */ i.createElement("path", cr({
    ref: d,
    className: tt("visx-linepath", c),
    d: g(a) || "",
    fill: s,
    strokeLinecap: "round"
  }, p));
}
var Vd = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
function Wd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Kd(e) {
  var t = e.children, n = e.x, a = e.x0, r = e.x1, l = e.y, o = e.y0, s = e.y1, c = e.data, u = c === void 0 ? [] : c, d = e.defined, h = d === void 0 ? function() {
    return !0;
  } : d, f = e.className, p = e.curve, g = e.innerRef, v = Wd(e, Vd), x = qr({
    x: n,
    x0: a,
    x1: r,
    y: l,
    y0: o,
    y1: s,
    defined: h,
    curve: p
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: x
  })) : /* @__PURE__ */ i.createElement("path", ur({
    ref: g,
    className: tt("visx-area", f),
    d: x(u) || ""
  }, v));
}
var jd = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
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
function Id(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function qd(e) {
  var t = e.x, n = e.x0, a = e.x1, r = e.y, l = e.y1, o = e.y0, s = e.yScale, c = e.data, u = c === void 0 ? [] : c, d = e.defined, h = d === void 0 ? function() {
    return !0;
  } : d, f = e.className, p = e.curve, g = e.innerRef, v = e.children, x = Id(e, jd), m = qr({
    x: t,
    x0: n,
    x1: a,
    defined: h,
    curve: p
  });
  return o == null ? m.y0(s.range()[0]) : Je(m.y0, o), r && !l && Je(m.y1, r), l && !r && Je(m.y1, l), v ? /* @__PURE__ */ i.createElement(i.Fragment, null, v({
    path: m
  })) : /* @__PURE__ */ i.createElement("path", dr({
    ref: g,
    className: tt("visx-area-closed", f),
    d: m(u) || ""
  }, x));
}
var Ud = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function Yd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Xd(e) {
  var t = e.className, n = e.top, a = e.left, r = e.keys, l = e.data, o = e.curve, s = e.defined, c = e.x, u = e.x0, d = e.x1, h = e.y0, f = e.y1, p = e.value, g = e.order, v = e.offset, x = e.color, m = e.children, y = Yd(e, Ud), b = Md({
    keys: r,
    value: p,
    order: g,
    offset: v
  }), A = qr({
    x: c,
    x0: u,
    x1: d,
    y0: h,
    y1: f,
    curve: o,
    defined: s
  }), w = b(l);
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m({
    stacks: w,
    path: A,
    stack: b
  })) : /* @__PURE__ */ i.createElement(be, {
    top: n,
    left: a
  }, w.map(function(E, L) {
    return /* @__PURE__ */ i.createElement("path", fr({
      className: tt("visx-stack", t),
      key: "stack-" + L + "-" + (E.key || ""),
      d: A(E) || "",
      fill: x == null ? void 0 : x(E.key, L)
    }, y));
  }));
}
var Qd = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function Ua() {
  return Ua = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ua.apply(this, arguments);
}
function Zd(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Jd(e) {
  var t = e.className, n = e.top, a = e.left, r = e.keys, l = e.data, o = e.curve, s = e.defined, c = e.x, u = e.x0, d = e.x1, h = e.y0, f = e.y1, p = e.value, g = e.order, v = e.offset, x = e.color, m = e.children, y = Zd(e, Qd);
  return /* @__PURE__ */ i.createElement(Xd, Ua({
    className: t,
    top: n,
    left: a,
    keys: r,
    data: l,
    curve: o,
    defined: s,
    x: c,
    x0: u,
    x1: d,
    y0: h,
    y1: f,
    value: p,
    order: g,
    offset: v,
    color: x
  }, y), m || function(b) {
    var A = b.stacks, w = b.path;
    return A.map(function(E, L) {
      return /* @__PURE__ */ i.createElement("path", Ua({
        className: tt("visx-area-stack", t),
        key: "area-stack-" + L + "-" + (E.key || ""),
        d: w(E) || "",
        fill: x == null ? void 0 : x(E.key, L)
      }, y));
    });
  });
}
function Ur(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var Gd = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
function ef(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Qs(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.x0, o = e.x0Scale, s = e.x1Scale, c = e.yScale, u = e.color, d = e.keys, h = e.height, f = e.children, p = ef(e, Gd), g = Ur(s), v = t.map(function(x, m) {
    return {
      index: m,
      x0: o(l(x)),
      bars: d.map(function(y, b) {
        var A = x[y];
        return {
          index: b,
          key: y,
          value: A,
          width: g,
          x: s(y) || 0,
          y: c(A) || 0,
          color: u(y, b),
          height: h - (c(A) || 0)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ i.createElement(i.Fragment, null, f(v)) : /* @__PURE__ */ i.createElement(be, {
    className: tt("visx-bar-group", n),
    top: a,
    left: r
  }, v.map(function(x) {
    return /* @__PURE__ */ i.createElement(be, {
      key: "bar-group-" + x.index + "-" + x.x0,
      left: x.x0
    }, x.bars.map(function(m) {
      return /* @__PURE__ */ i.createElement(Ct, mr({
        key: "bar-group-bar-" + x.index + "-" + m.index + "-" + m.value + "-" + m.key,
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height,
        fill: m.color
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
var tf = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function nf(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function af(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.x, o = e.y0, s = o === void 0 ? Zs : o, c = e.y1, u = c === void 0 ? Js : c, d = e.xScale, h = e.yScale, f = e.color, p = e.keys, g = e.value, v = e.order, x = e.offset, m = e.children, y = nf(e, tf), b = Kr();
  p && b.keys(p), g && Je(b.value, g), v && b.order(jr(v)), x && b.offset(Ir(x));
  var A = b(t), w = Ur(d), E = A.map(function(L, P) {
    var N = L.key;
    return {
      index: P,
      key: N,
      bars: L.map(function(D, _) {
        var S = (h(s(D)) || 0) - (h(u(D)) || 0), $ = h(u(D)), I = "bandwidth" in d ? d(l(D.data)) : Math.max((d(l(D.data)) || 0) - w / 2);
        return {
          bar: D,
          key: N,
          index: _,
          height: S,
          width: w,
          x: I || 0,
          y: $ || 0,
          color: f(L.key, _)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(E)) : /* @__PURE__ */ i.createElement(be, {
    className: tt("visx-bar-stack", n),
    top: a,
    left: r
  }, E.map(function(L) {
    return L.bars.map(function(P) {
      return /* @__PURE__ */ i.createElement(Ct, hr({
        key: "bar-stack-" + L.index + "-" + P.index,
        x: P.x,
        y: P.y,
        height: P.height,
        width: P.width,
        fill: P.color
      }, y));
    });
  }));
}
var rf = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function of(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function lf(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, l = e.y, o = e.x0, s = o === void 0 ? Zs : o, c = e.x1, u = c === void 0 ? Js : c, d = e.xScale, h = e.yScale, f = e.color, p = e.keys, g = e.value, v = e.order, x = e.offset, m = e.children, y = of(e, rf), b = Kr();
  p && b.keys(p), g && Je(b.value, g), v && b.order(jr(v)), x && b.offset(Ir(x));
  var A = b(t), w = Ur(h), E = A.map(function(L, P) {
    var N = L.key;
    return {
      index: P,
      key: N,
      bars: L.map(function(D, _) {
        var S = (d(u(D)) || 0) - (d(s(D)) || 0), $ = d(s(D)), I = "bandwidth" in h ? h(l(D.data)) : Math.max((h(l(D.data)) || 0) - S / 2);
        return {
          bar: D,
          key: N,
          index: _,
          height: w,
          width: S,
          x: $ || 0,
          y: I || 0,
          color: f(L.key, _)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(E)) : /* @__PURE__ */ i.createElement(be, {
    className: tt("visx-bar-stack-horizontal", n),
    top: a,
    left: r
  }, E.map(function(L) {
    return L.bars.map(function(P) {
      return /* @__PURE__ */ i.createElement(Ct, pr({
        key: "bar-stack-" + L.index + "-" + P.index,
        x: P.x,
        y: P.y,
        height: P.height,
        width: P.width,
        fill: P.color
      }, y));
    });
  }));
}
class ml extends Map {
  constructor(t, n = uf) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [a, r] of t)
        this.set(a, r);
  }
  get(t) {
    return super.get(hl(this, t));
  }
  has(t) {
    return super.has(hl(this, t));
  }
  set(t, n) {
    return super.set(sf(this, t), n);
  }
  delete(t) {
    return super.delete(cf(this, t));
  }
}
function hl({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function sf({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function cf({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function uf(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function df(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var a = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, l = new Array(r); ++a < r; )
    l[a] = e + a * n;
  return l;
}
const pl = Symbol("implicit");
function Yr() {
  var e = new ml(), t = [], n = [], a = pl;
  function r(l) {
    let o = e.get(l);
    if (o === void 0) {
      if (a !== pl)
        return a;
      e.set(l, o = t.push(l) - 1);
    }
    return n[o % n.length];
  }
  return r.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new ml();
    for (const o of l)
      e.has(o) || e.set(o, t.push(o) - 1);
    return r;
  }, r.range = function(l) {
    return arguments.length ? (n = Array.from(l), r) : n.slice();
  }, r.unknown = function(l) {
    return arguments.length ? (a = l, r) : a;
  }, r.copy = function() {
    return Yr(t, n).unknown(a);
  }, xi.apply(r, arguments), r;
}
function Xr() {
  var e = Yr().unknown(void 0), t = e.domain, n = e.range, a = 0, r = 1, l, o, s = !1, c = 0, u = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var f = t().length, p = r < a, g = p ? r : a, v = p ? a : r;
    l = (v - g) / Math.max(1, f - c + u * 2), s && (l = Math.floor(l)), g += (v - g - l * (f - c)) * d, o = l * (1 - c), s && (g = Math.round(g), o = Math.round(o));
    var x = df(f).map(function(m) {
      return g + l * m;
    });
    return n(p ? x.reverse() : x);
  }
  return e.domain = function(f) {
    return arguments.length ? (t(f), h()) : t();
  }, e.range = function(f) {
    return arguments.length ? ([a, r] = f, a = +a, r = +r, h()) : [a, r];
  }, e.rangeRound = function(f) {
    return [a, r] = f, a = +a, r = +r, s = !0, h();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return l;
  }, e.round = function(f) {
    return arguments.length ? (s = !!f, h()) : s;
  }, e.padding = function(f) {
    return arguments.length ? (c = Math.min(1, u = +f), h()) : c;
  }, e.paddingInner = function(f) {
    return arguments.length ? (c = Math.min(1, f), h()) : c;
  }, e.paddingOuter = function(f) {
    return arguments.length ? (u = +f, h()) : u;
  }, e.align = function(f) {
    return arguments.length ? (d = Math.max(0, Math.min(1, f)), h()) : d;
  }, e.copy = function() {
    return Xr(t(), [a, r]).round(s).paddingInner(c).paddingOuter(u).align(d);
  }, xi.apply(h(), arguments);
}
function Gs(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Gs(t());
  }, e;
}
function ff() {
  return Gs(Xr.apply(null, arguments).paddingInner(1));
}
function ec(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, r = e[n], l = e[a], o;
  return l < r && (o = n, n = a, a = o, o = r, r = l, l = o), e[n] = t.floor(r), e[a] = t.ceil(l), e;
}
function yl(e) {
  return Math.log(e);
}
function gl(e) {
  return Math.exp(e);
}
function mf(e) {
  return -Math.log(-e);
}
function hf(e) {
  return -Math.exp(-e);
}
function pf(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function yf(e) {
  return e === 10 ? pf : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function gf(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function xl(e) {
  return (t, n) => -e(-t, n);
}
function xf(e) {
  const t = e(yl, gl), n = t.domain;
  let a = 10, r, l;
  function o() {
    return r = gf(a), l = yf(a), n()[0] < 0 ? (r = xl(r), l = xl(l), e(mf, hf)) : e(yl, gl), t;
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
    let f = r(u), p = r(d), g, v;
    const x = s == null ? 10 : +s;
    let m = [];
    if (!(a % 1) && p - f < x) {
      if (f = Math.floor(f), p = Math.ceil(p), u > 0) {
        for (; f <= p; ++f)
          for (g = 1; g < a; ++g)
            if (v = f < 0 ? g / l(-f) : g * l(f), !(v < u)) {
              if (v > d)
                break;
              m.push(v);
            }
      } else
        for (; f <= p; ++f)
          for (g = a - 1; g >= 1; --g)
            if (v = f > 0 ? g / l(-f) : g * l(f), !(v < u)) {
              if (v > d)
                break;
              m.push(v);
            }
      m.length * 2 < x && (m = Jo(u, d, x));
    } else
      m = Jo(f, p, Math.min(p - f, x)).map(l);
    return h ? m.reverse() : m;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = a === 10 ? "s" : ","), typeof c != "function" && (!(a % 1) && (c = _u(c)).precision == null && (c.trim = !0), c = Mu(c)), s === 1 / 0)
      return c;
    const u = Math.max(1, a * s / t.ticks().length);
    return (d) => {
      let h = d / l(Math.round(r(d)));
      return h * a < a - 0.5 && (h *= a), h <= u ? c(d) : "";
    };
  }, t.nice = () => n(ec(n(), {
    floor: (s) => l(Math.floor(r(s))),
    ceil: (s) => l(Math.ceil(r(s)))
  })), t;
}
function tc() {
  const e = xf(Ou()).domain([1, 10]);
  return e.copy = () => ks(e, tc()).base(e.base()), xi.apply(e, arguments), e;
}
const Ya = Ls(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ya.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ls((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Ya);
Ya.range;
function vf(e, t, n, a, r, l) {
  const o = [
    [Qn, 1, ba],
    [Qn, 5, 5 * ba],
    [Qn, 15, 15 * ba],
    [Qn, 30, 30 * ba],
    [l, 1, Ea],
    [l, 5, 5 * Ea],
    [l, 15, 15 * Ea],
    [l, 30, 30 * Ea],
    [r, 1, Aa],
    [r, 3, 3 * Aa],
    [r, 6, 6 * Aa],
    [r, 12, 12 * Aa],
    [a, 1, el],
    [a, 2, 2 * el],
    [n, 1, Fu],
    [t, 1, tl],
    [t, 3, 3 * tl],
    [e, 1, $i]
  ];
  function s(u, d, h) {
    const f = d < u;
    f && ([u, d] = [d, u]);
    const p = h && typeof h.range == "function" ? h : c(u, d, h), g = p ? p.range(u, +d + 1) : [];
    return f ? g.reverse() : g;
  }
  function c(u, d, h) {
    const f = Math.abs(d - u) / h, p = Du(([, , x]) => x).right(o, f);
    if (p === o.length)
      return e.every(Go(u / $i, d / $i, h));
    if (p === 0)
      return Ya.every(Math.max(Go(u, d, h), 1));
    const [g, v] = o[f / o[p - 1][2] < o[p][2] / f ? p - 1 : p];
    return g.every(v);
  }
  return [s, c];
}
const [bf, Ef] = vf(Os, Ps, Ms, _s, Cs, ws);
function Af(e) {
  return new Date(e);
}
function Sf(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function nc(e, t, n, a, r, l, o, s, c, u) {
  var d = $u(), h = d.invert, f = d.domain, p = u(".%L"), g = u(":%S"), v = u("%I:%M"), x = u("%I %p"), m = u("%a %d"), y = u("%b %d"), b = u("%B"), A = u("%Y");
  function w(E) {
    return (c(E) < E ? p : s(E) < E ? g : o(E) < E ? v : l(E) < E ? x : a(E) < E ? r(E) < E ? m : y : n(E) < E ? b : A)(E);
  }
  return d.invert = function(E) {
    return new Date(h(E));
  }, d.domain = function(E) {
    return arguments.length ? f(Array.from(E, Sf)) : f().map(Af);
  }, d.ticks = function(E) {
    var L = f();
    return e(L[0], L[L.length - 1], E ?? 10);
  }, d.tickFormat = function(E, L) {
    return L == null ? w : u(L);
  }, d.nice = function(E) {
    var L = f();
    return (!E || typeof E.range != "function") && (E = t(L[0], L[L.length - 1], E ?? 10)), E ? f(ec(L, E)) : d;
  }, d.copy = function() {
    return ks(d, nc(e, t, n, a, r, l, o, s, c, u));
  }, d;
}
function Tf() {
  return xi.apply(nc(bf, Ef, Os, Ps, Ms, _s, Cs, ws, Qn, Pu).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var kf = ha("domain", "range", "reverse", "align", "padding", "round");
function vl(e) {
  return kf(Xr(), e);
}
var wf = ha("domain", "range", "reverse", "align", "padding", "round");
function _n(e) {
  return wf(ff(), e);
}
var Cf = ha("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function Pf(e) {
  return Cf(Tf(), e);
}
var Nf = ha("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Xa(e) {
  return Nf(tc(), e);
}
var Lf = ha("domain", "range", "reverse", "unknown");
function ac(e) {
  return Lf(Yr(), e);
}
function Of(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function _f(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(a, r, l) {
    return t == null || l.length <= t || r % Math.round((l.length - 1) / t) === 0;
  });
}
function Mf(e) {
  return e == null ? void 0 : e.toString();
}
function ic(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function bl(e) {
  let t = e, n = e;
  e.length === 1 && (t = (o, s) => e(o) - s, n = Df(e));
  function a(o, s, c, u) {
    for (c == null && (c = 0), u == null && (u = o.length); c < u; ) {
      const d = c + u >>> 1;
      n(o[d], s) < 0 ? c = d + 1 : u = d;
    }
    return c;
  }
  function r(o, s, c, u) {
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
  return { left: a, center: l, right: r };
}
function Df(e) {
  return (t, n) => ic(e(t), n);
}
function* $f(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (a = +a) >= a && (yield a);
  }
}
function zf(e, t) {
  let n = 0, a, r = 0, l = 0;
  if (t === void 0)
    for (let o of e)
      o != null && (o = +o) >= o && (a = o - r, r += a / ++n, l += a * (o - r));
  else {
    let o = -1;
    for (let s of e)
      (s = t(s, ++o, e)) != null && (s = +s) >= s && (a = s - r, r += a / ++n, l += a * (s - r));
  }
  if (n > 1)
    return l / (n - 1);
}
function Rf(e, t) {
  const n = zf(e, t);
  return n && Math.sqrt(n);
}
function Zn(e, t) {
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
function Jn(e, t) {
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
function rc(e, t, n = 0, a = e.length - 1, r = ic) {
  for (; a > n; ) {
    if (a - n > 600) {
      const c = a - n + 1, u = t - n + 1, d = Math.log(c), h = 0.5 * Math.exp(2 * d / 3), f = 0.5 * Math.sqrt(d * h * (c - h) / c) * (u - c / 2 < 0 ? -1 : 1), p = Math.max(n, Math.floor(t - u * h / c + f)), g = Math.min(a, Math.floor(t + (c - u) * h / c + f));
      rc(e, t, p, g, r);
    }
    const l = e[t];
    let o = n, s = a;
    for (In(e, n, t), r(e[a], l) > 0 && In(e, n, a); o < s; ) {
      for (In(e, o, s), ++o, --s; r(e[o], l) < 0; )
        ++o;
      for (; r(e[s], l) > 0; )
        --s;
    }
    r(e[n], l) === 0 ? In(e, n, s) : (++s, In(e, s, a)), s <= t && (n = s + 1), t <= s && (a = s - 1);
  }
  return e;
}
function In(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function Ff(e, t, n) {
  if (e = Float64Array.from($f(e, n)), !!(a = e.length)) {
    if ((t = +t) <= 0 || a < 2)
      return Jn(e);
    if (t >= 1)
      return Zn(e);
    var a, r = (a - 1) * t, l = Math.floor(r), o = Zn(rc(e, l).subarray(0, l + 1)), s = Jn(e.subarray(l + 1));
    return o + (s - o) * (r - l);
  }
}
function Bf(e, t) {
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
function Hf(e, t) {
  return Ff(e, 0.5, t);
}
var xn = [], Vf = function() {
  return xn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Wf = function() {
  return xn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, El = "ResizeObserver loop completed with undelivered notifications.", Kf = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: El
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = El), window.dispatchEvent(e);
}, ca;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ca || (ca = {}));
var vn = function(e) {
  return Object.freeze(e);
}, oc = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, vn(this);
  }
  return e;
}(), lc = function() {
  function e(t, n, a, r) {
    return this.x = t, this.y = n, this.width = a, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, vn(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, r = t.top, l = t.right, o = t.bottom, s = t.left, c = t.width, u = t.height;
    return { x: n, y: a, top: r, right: l, bottom: o, left: s, width: c, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Qr = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, sc = function(e) {
  if (Qr(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var r = e, l = r.offsetWidth, o = r.offsetHeight;
  return !(l || o || e.getClientRects().length);
}, Al = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, jf = function(e) {
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
}, Gn = typeof window < "u" ? window : {}, Ta = /* @__PURE__ */ new WeakMap(), Sl = /auto|scroll/, If = /^tb|vertical/, qf = /msie|trident/i.test(Gn.navigator && Gn.navigator.userAgent), Ht = function(e) {
  return parseFloat(e || "0");
}, Dn = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new oc((n ? t : e) || 0, (n ? e : t) || 0);
}, Tl = vn({
  devicePixelContentBoxSize: Dn(),
  borderBoxSize: Dn(),
  contentBoxSize: Dn(),
  contentRect: new lc(0, 0, 0, 0)
}), cc = function(e, t) {
  if (t === void 0 && (t = !1), Ta.has(e) && !t)
    return Ta.get(e);
  if (sc(e))
    return Ta.set(e, Tl), Tl;
  var n = getComputedStyle(e), a = Qr(e) && e.ownerSVGElement && e.getBBox(), r = !qf && n.boxSizing === "border-box", l = If.test(n.writingMode || ""), o = !a && Sl.test(n.overflowY || ""), s = !a && Sl.test(n.overflowX || ""), c = a ? 0 : Ht(n.paddingTop), u = a ? 0 : Ht(n.paddingRight), d = a ? 0 : Ht(n.paddingBottom), h = a ? 0 : Ht(n.paddingLeft), f = a ? 0 : Ht(n.borderTopWidth), p = a ? 0 : Ht(n.borderRightWidth), g = a ? 0 : Ht(n.borderBottomWidth), v = a ? 0 : Ht(n.borderLeftWidth), x = h + u, m = c + d, y = v + p, b = f + g, A = s ? e.offsetHeight - b - e.clientHeight : 0, w = o ? e.offsetWidth - y - e.clientWidth : 0, E = r ? x + y : 0, L = r ? m + b : 0, P = a ? a.width : Ht(n.width) - E - w, N = a ? a.height : Ht(n.height) - L - A, D = P + x + w + y, _ = N + m + A + b, S = vn({
    devicePixelContentBoxSize: Dn(Math.round(P * devicePixelRatio), Math.round(N * devicePixelRatio), l),
    borderBoxSize: Dn(D, _, l),
    contentBoxSize: Dn(P, N, l),
    contentRect: new lc(h, c, P, N)
  });
  return Ta.set(e, S), S;
}, uc = function(e, t, n) {
  var a = cc(e, n), r = a.borderBoxSize, l = a.contentBoxSize, o = a.devicePixelContentBoxSize;
  switch (t) {
    case ca.DEVICE_PIXEL_CONTENT_BOX:
      return o;
    case ca.BORDER_BOX:
      return r;
    default:
      return l;
  }
}, dc = function() {
  function e(t) {
    var n = cc(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = vn([n.borderBoxSize]), this.contentBoxSize = vn([n.contentBoxSize]), this.devicePixelContentBoxSize = vn([n.devicePixelContentBoxSize]);
  }
  return e;
}(), fc = function(e) {
  if (sc(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Uf = function() {
  var e = 1 / 0, t = [];
  xn.forEach(function(o) {
    if (o.activeTargets.length !== 0) {
      var s = [];
      o.activeTargets.forEach(function(u) {
        var d = new dc(u.target), h = fc(u.target);
        s.push(d), u.lastReportedSize = uc(u.target, u.observedBox), h < e && (e = h);
      }), t.push(function() {
        o.callback.call(o.observer, s, o.observer);
      }), o.activeTargets.splice(0, o.activeTargets.length);
    }
  });
  for (var n = 0, a = t; n < a.length; n++) {
    var r = a[n];
    r();
  }
  return e;
}, kl = function(e) {
  xn.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(r) {
      r.isActive() && (fc(r.target) > e ? n.activeTargets.push(r) : n.skippedTargets.push(r));
    });
  });
}, Yf = function() {
  var e = 0;
  for (kl(e); Vf(); )
    e = Uf(), kl(e);
  return Wf() && Kf(), e > 0;
}, Fi, mc = [], Xf = function() {
  return mc.splice(0).forEach(function(e) {
    return e();
  });
}, Qf = function(e) {
  if (!Fi) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return Xf();
    }).observe(n, a), Fi = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  mc.push(e), Fi();
}, Zf = function(e) {
  Qf(function() {
    requestAnimationFrame(e);
  });
}, Ra = 0, Jf = function() {
  return !!Ra;
}, Gf = 250, em = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, wl = [
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
], Cl = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Bi = !1, tm = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = Gf), !Bi) {
      Bi = !0;
      var a = Cl(t);
      Zf(function() {
        var r = !1;
        try {
          r = Yf();
        } finally {
          if (Bi = !1, t = a - Cl(), !Jf())
            return;
          r ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, em);
    };
    document.body ? n() : Gn.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), wl.forEach(function(n) {
      return Gn.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), wl.forEach(function(n) {
      return Gn.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), yr = new tm(), Pl = function(e) {
  !Ra && e > 0 && yr.start(), Ra += e, !Ra && yr.stop();
}, nm = function(e) {
  return !Qr(e) && !jf(e) && getComputedStyle(e).display === "inline";
}, am = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ca.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = uc(this.target, this.observedBox, !0);
    return nm(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), im = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), ka = /* @__PURE__ */ new WeakMap(), Nl = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, wa = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new im(t, n);
    ka.set(t, a);
  }, e.observe = function(t, n, a) {
    var r = ka.get(t), l = r.observationTargets.length === 0;
    Nl(r.observationTargets, n) < 0 && (l && xn.push(r), r.observationTargets.push(new am(n, a && a.box)), Pl(1), yr.schedule());
  }, e.unobserve = function(t, n) {
    var a = ka.get(t), r = Nl(a.observationTargets, n), l = a.observationTargets.length === 1;
    r >= 0 && (l && xn.splice(xn.indexOf(a), 1), a.observationTargets.splice(r, 1), Pl(-1));
  }, e.disconnect = function(t) {
    var n = this, a = ka.get(t);
    a.observationTargets.slice().forEach(function(r) {
      return n.unobserve(t, r.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), rm = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    wa.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Al(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    wa.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Al(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    wa.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    wa.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: rm,
  ResizeObserverEntry: dc,
  ResizeObserverSize: oc
}, Symbol.toStringTag, { value: "Module" })), lm = /* @__PURE__ */ Fr(om);
var sm = yc, Jt = pc(Es), cm = pc(Su), kn = fm(F), um = lm, dm = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function hc(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (hc = function(r) {
    return r ? n : t;
  })(e);
}
function fm(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = hc(t);
  if (n && n.has(e))
    return n.get(e);
  var a = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var o = r ? Object.getOwnPropertyDescriptor(e, l) : null;
      o && (o.get || o.set) ? Object.defineProperty(a, l, o) : a[l] = e[l];
    }
  return a.default = e, n && n.set(e, a), a;
}
function pc(e) {
  return e && e.__esModule ? e : { default: e };
}
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Qa.apply(this, arguments);
}
function mm(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var hm = [];
function yc(e) {
  var t = e.className, n = e.children, a = e.debounceTime, r = a === void 0 ? 300 : a, l = e.ignoreDimensions, o = l === void 0 ? hm : l, s = e.parentSizeStyles, c = s === void 0 ? {
    width: "100%",
    height: "100%"
  } : s, u = e.enableDebounceLeadingCall, d = u === void 0 ? !0 : u, h = mm(e, dm), f = (0, kn.useRef)(null), p = (0, kn.useRef)(0), g = (0, kn.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), v = g[0], x = g[1], m = (0, kn.useMemo)(function() {
    var y = Array.isArray(o) ? o : [o];
    return (0, cm.default)(function(b) {
      x(function(A) {
        var w = Object.keys(A), E = w.filter(function(P) {
          return A[P] !== b[P];
        }), L = E.every(function(P) {
          return y.includes(P);
        });
        return L ? A : b;
      });
    }, r, {
      leading: d
    });
  }, [r, d, o]);
  return (0, kn.useEffect)(function() {
    var y = new um.ResizeObserver(function(b) {
      b === void 0 && (b = []), b.forEach(function(A) {
        var w = A.contentRect, E = w.left, L = w.top, P = w.width, N = w.height;
        p.current = window.requestAnimationFrame(function() {
          m({
            width: P,
            height: N,
            top: L,
            left: E
          });
        });
      });
    });
    return f.current && y.observe(f.current), function() {
      window.cancelAnimationFrame(p.current), y.disconnect(), m != null && m.cancel && m.cancel();
    };
  }, [m]), /* @__PURE__ */ kn.default.createElement("div", Qa({
    style: c,
    ref: f,
    className: t
  }, h), n(Qa({}, v, {
    ref: f.current,
    resize: m
  })));
}
yc.propTypes = {
  className: Jt.default.string,
  debounceTime: Jt.default.number,
  enableDebounceLeadingCall: Jt.default.bool,
  ignoreDimensions: Jt.default.oneOfType([Jt.default.any, Jt.default.arrayOf(Jt.default.any)]),
  children: Jt.default.func.isRequired
};
var Hi = /* @__PURE__ */ new Date(), Vi = /* @__PURE__ */ new Date();
function Yt(e, t, n, a) {
  function r(l) {
    return e(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
  }
  return r.floor = function(l) {
    return e(l = /* @__PURE__ */ new Date(+l)), l;
  }, r.ceil = function(l) {
    return e(l = new Date(l - 1)), t(l, 1), e(l), l;
  }, r.round = function(l) {
    var o = r(l), s = r.ceil(l);
    return l - o < s - l ? o : s;
  }, r.offset = function(l, o) {
    return t(l = /* @__PURE__ */ new Date(+l), o == null ? 1 : Math.floor(o)), l;
  }, r.range = function(l, o, s) {
    var c = [], u;
    if (l = r.ceil(l), s = s == null ? 1 : Math.floor(s), !(l < o) || !(s > 0))
      return c;
    do
      c.push(u = /* @__PURE__ */ new Date(+l)), t(l, s), e(l);
    while (u < l && l < o);
    return c;
  }, r.filter = function(l) {
    return Yt(function(o) {
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
  }, n && (r.count = function(l, o) {
    return Hi.setTime(+l), Vi.setTime(+o), e(Hi), e(Vi), Math.floor(n(Hi, Vi));
  }, r.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? r.filter(a ? function(o) {
      return a(o) % l === 0;
    } : function(o) {
      return r.count(0, o) % l === 0;
    }) : r;
  }), r;
}
const pm = 1e3, Zr = pm * 60, ym = Zr * 60, Jr = ym * 24, gc = Jr * 7;
var xc = Yt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Zr) / Jr,
  (e) => e.getDate() - 1
);
const vc = xc;
xc.range;
function Sn(e) {
  return Yt(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Zr) / gc;
  });
}
var bc = Sn(0), Za = Sn(1), gm = Sn(2), xm = Sn(3), Fn = Sn(4), vm = Sn(5), bm = Sn(6);
bc.range;
Za.range;
gm.range;
xm.range;
Fn.range;
vm.range;
bm.range;
var Gr = Yt(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Gr.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Yt(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const ua = Gr;
Gr.range;
var Ec = Yt(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Jr;
}, function(e) {
  return e.getUTCDate() - 1;
});
const Ac = Ec;
Ec.range;
function Tn(e) {
  return Yt(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / gc;
  });
}
var Sc = Tn(0), Ja = Tn(1), Em = Tn(2), Am = Tn(3), Bn = Tn(4), Sm = Tn(5), Tm = Tn(6);
Sc.range;
Ja.range;
Em.range;
Am.range;
Bn.range;
Sm.range;
Tm.range;
var eo = Yt(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
eo.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Yt(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const da = eo;
eo.range;
function Wi(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ki(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function qn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function km(e) {
  var t = e.dateTime, n = e.date, a = e.time, r = e.periods, l = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, u = Un(r), d = Yn(r), h = Un(l), f = Yn(l), p = Un(o), g = Yn(o), v = Un(s), x = Yn(s), m = Un(c), y = Yn(c), b = {
    a: z,
    A: V,
    b: W,
    B: M,
    c: null,
    d: $l,
    e: $l,
    f: Ym,
    g: ih,
    G: oh,
    H: Im,
    I: qm,
    j: Um,
    L: Tc,
    m: Xm,
    M: Qm,
    p: B,
    q,
    Q: Fl,
    s: Bl,
    S: Zm,
    u: Jm,
    U: Gm,
    V: eh,
    w: th,
    W: nh,
    x: null,
    X: null,
    y: ah,
    Y: rh,
    Z: lh,
    "%": Rl
  }, A = {
    a: U,
    A: Q,
    b: ae,
    B: he,
    c: null,
    d: zl,
    e: zl,
    f: dh,
    g: Eh,
    G: Sh,
    H: sh,
    I: ch,
    j: uh,
    L: wc,
    m: fh,
    M: mh,
    p: Ne,
    q: Le,
    Q: Fl,
    s: Bl,
    S: hh,
    u: ph,
    U: yh,
    V: gh,
    w: xh,
    W: vh,
    x: null,
    X: null,
    y: bh,
    Y: Ah,
    Z: Th,
    "%": Rl
  }, w = {
    a: D,
    A: _,
    b: S,
    B: $,
    c: I,
    d: Ml,
    e: Ml,
    f: Vm,
    g: _l,
    G: Ol,
    H: Dl,
    I: Dl,
    j: Rm,
    L: Hm,
    m: zm,
    M: Fm,
    p: N,
    q: $m,
    Q: Km,
    s: jm,
    S: Bm,
    u: Lm,
    U: Om,
    V: _m,
    w: Nm,
    W: Mm,
    x: j,
    X: R,
    y: _l,
    Y: Ol,
    Z: Dm,
    "%": Wm
  };
  b.x = E(n, b), b.X = E(a, b), b.c = E(t, b), A.x = E(n, A), A.X = E(a, A), A.c = E(t, A);
  function E(Z, Y) {
    return function(re) {
      var O = [], ue = -1, se = 0, ye = Z.length, ve, ge, we;
      for (re instanceof Date || (re = /* @__PURE__ */ new Date(+re)); ++ue < ye; )
        Z.charCodeAt(ue) === 37 && (O.push(Z.slice(se, ue)), (ge = Ll[ve = Z.charAt(++ue)]) != null ? ve = Z.charAt(++ue) : ge = ve === "e" ? " " : "0", (we = Y[ve]) && (ve = we(re, ge)), O.push(ve), se = ue + 1);
      return O.push(Z.slice(se, ue)), O.join("");
    };
  }
  function L(Z, Y) {
    return function(re) {
      var O = qn(1900, void 0, 1), ue = P(O, Z, re += "", 0), se, ye;
      if (ue != re.length)
        return null;
      if ("Q" in O)
        return new Date(O.Q);
      if ("s" in O)
        return new Date(O.s * 1e3 + ("L" in O ? O.L : 0));
      if (Y && !("Z" in O) && (O.Z = 0), "p" in O && (O.H = O.H % 12 + O.p * 12), O.m === void 0 && (O.m = "q" in O ? O.q : 0), "V" in O) {
        if (O.V < 1 || O.V > 53)
          return null;
        "w" in O || (O.w = 1), "Z" in O ? (se = Ki(qn(O.y, 0, 1)), ye = se.getUTCDay(), se = ye > 4 || ye === 0 ? Ja.ceil(se) : Ja(se), se = Ac.offset(se, (O.V - 1) * 7), O.y = se.getUTCFullYear(), O.m = se.getUTCMonth(), O.d = se.getUTCDate() + (O.w + 6) % 7) : (se = Wi(qn(O.y, 0, 1)), ye = se.getDay(), se = ye > 4 || ye === 0 ? Za.ceil(se) : Za(se), se = vc.offset(se, (O.V - 1) * 7), O.y = se.getFullYear(), O.m = se.getMonth(), O.d = se.getDate() + (O.w + 6) % 7);
      } else
        ("W" in O || "U" in O) && ("w" in O || (O.w = "u" in O ? O.u % 7 : "W" in O ? 1 : 0), ye = "Z" in O ? Ki(qn(O.y, 0, 1)).getUTCDay() : Wi(qn(O.y, 0, 1)).getDay(), O.m = 0, O.d = "W" in O ? (O.w + 6) % 7 + O.W * 7 - (ye + 5) % 7 : O.w + O.U * 7 - (ye + 6) % 7);
      return "Z" in O ? (O.H += O.Z / 100 | 0, O.M += O.Z % 100, Ki(O)) : Wi(O);
    };
  }
  function P(Z, Y, re, O) {
    for (var ue = 0, se = Y.length, ye = re.length, ve, ge; ue < se; ) {
      if (O >= ye)
        return -1;
      if (ve = Y.charCodeAt(ue++), ve === 37) {
        if (ve = Y.charAt(ue++), ge = w[ve in Ll ? Y.charAt(ue++) : ve], !ge || (O = ge(Z, re, O)) < 0)
          return -1;
      } else if (ve != re.charCodeAt(O++))
        return -1;
    }
    return O;
  }
  function N(Z, Y, re) {
    var O = u.exec(Y.slice(re));
    return O ? (Z.p = d.get(O[0].toLowerCase()), re + O[0].length) : -1;
  }
  function D(Z, Y, re) {
    var O = p.exec(Y.slice(re));
    return O ? (Z.w = g.get(O[0].toLowerCase()), re + O[0].length) : -1;
  }
  function _(Z, Y, re) {
    var O = h.exec(Y.slice(re));
    return O ? (Z.w = f.get(O[0].toLowerCase()), re + O[0].length) : -1;
  }
  function S(Z, Y, re) {
    var O = m.exec(Y.slice(re));
    return O ? (Z.m = y.get(O[0].toLowerCase()), re + O[0].length) : -1;
  }
  function $(Z, Y, re) {
    var O = v.exec(Y.slice(re));
    return O ? (Z.m = x.get(O[0].toLowerCase()), re + O[0].length) : -1;
  }
  function I(Z, Y, re) {
    return P(Z, t, Y, re);
  }
  function j(Z, Y, re) {
    return P(Z, n, Y, re);
  }
  function R(Z, Y, re) {
    return P(Z, a, Y, re);
  }
  function z(Z) {
    return o[Z.getDay()];
  }
  function V(Z) {
    return l[Z.getDay()];
  }
  function W(Z) {
    return c[Z.getMonth()];
  }
  function M(Z) {
    return s[Z.getMonth()];
  }
  function B(Z) {
    return r[+(Z.getHours() >= 12)];
  }
  function q(Z) {
    return 1 + ~~(Z.getMonth() / 3);
  }
  function U(Z) {
    return o[Z.getUTCDay()];
  }
  function Q(Z) {
    return l[Z.getUTCDay()];
  }
  function ae(Z) {
    return c[Z.getUTCMonth()];
  }
  function he(Z) {
    return s[Z.getUTCMonth()];
  }
  function Ne(Z) {
    return r[+(Z.getUTCHours() >= 12)];
  }
  function Le(Z) {
    return 1 + ~~(Z.getUTCMonth() / 3);
  }
  return {
    format: function(Z) {
      var Y = E(Z += "", b);
      return Y.toString = function() {
        return Z;
      }, Y;
    },
    parse: function(Z) {
      var Y = L(Z += "", !1);
      return Y.toString = function() {
        return Z;
      }, Y;
    },
    utcFormat: function(Z) {
      var Y = E(Z += "", A);
      return Y.toString = function() {
        return Z;
      }, Y;
    },
    utcParse: function(Z) {
      var Y = L(Z += "", !0);
      return Y.toString = function() {
        return Z;
      }, Y;
    }
  };
}
var Ll = { "-": "", _: " ", 0: "0" }, mt = /^\s*\d+/, wm = /^%/, Cm = /[\\^$*+?|[\]().{}]/g;
function Ke(e, t, n) {
  var a = e < 0 ? "-" : "", r = (a ? -e : e) + "", l = r.length;
  return a + (l < n ? new Array(n - l + 1).join(t) + r : r);
}
function Pm(e) {
  return e.replace(Cm, "\\$&");
}
function Un(e) {
  return new RegExp("^(?:" + e.map(Pm).join("|") + ")", "i");
}
function Yn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Nm(e, t, n) {
  var a = mt.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Lm(e, t, n) {
  var a = mt.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Om(e, t, n) {
  var a = mt.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function _m(e, t, n) {
  var a = mt.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Mm(e, t, n) {
  var a = mt.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Ol(e, t, n) {
  var a = mt.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function _l(e, t, n) {
  var a = mt.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Dm(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function $m(e, t, n) {
  var a = mt.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function zm(e, t, n) {
  var a = mt.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Ml(e, t, n) {
  var a = mt.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Rm(e, t, n) {
  var a = mt.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Dl(e, t, n) {
  var a = mt.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Fm(e, t, n) {
  var a = mt.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Bm(e, t, n) {
  var a = mt.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Hm(e, t, n) {
  var a = mt.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Vm(e, t, n) {
  var a = mt.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Wm(e, t, n) {
  var a = wm.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Km(e, t, n) {
  var a = mt.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function jm(e, t, n) {
  var a = mt.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function $l(e, t) {
  return Ke(e.getDate(), t, 2);
}
function Im(e, t) {
  return Ke(e.getHours(), t, 2);
}
function qm(e, t) {
  return Ke(e.getHours() % 12 || 12, t, 2);
}
function Um(e, t) {
  return Ke(1 + vc.count(ua(e), e), t, 3);
}
function Tc(e, t) {
  return Ke(e.getMilliseconds(), t, 3);
}
function Ym(e, t) {
  return Tc(e, t) + "000";
}
function Xm(e, t) {
  return Ke(e.getMonth() + 1, t, 2);
}
function Qm(e, t) {
  return Ke(e.getMinutes(), t, 2);
}
function Zm(e, t) {
  return Ke(e.getSeconds(), t, 2);
}
function Jm(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Gm(e, t) {
  return Ke(bc.count(ua(e) - 1, e), t, 2);
}
function kc(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Fn(e) : Fn.ceil(e);
}
function eh(e, t) {
  return e = kc(e), Ke(Fn.count(ua(e), e) + (ua(e).getDay() === 4), t, 2);
}
function th(e) {
  return e.getDay();
}
function nh(e, t) {
  return Ke(Za.count(ua(e) - 1, e), t, 2);
}
function ah(e, t) {
  return Ke(e.getFullYear() % 100, t, 2);
}
function ih(e, t) {
  return e = kc(e), Ke(e.getFullYear() % 100, t, 2);
}
function rh(e, t) {
  return Ke(e.getFullYear() % 1e4, t, 4);
}
function oh(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Fn(e) : Fn.ceil(e), Ke(e.getFullYear() % 1e4, t, 4);
}
function lh(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ke(t / 60 | 0, "0", 2) + Ke(t % 60, "0", 2);
}
function zl(e, t) {
  return Ke(e.getUTCDate(), t, 2);
}
function sh(e, t) {
  return Ke(e.getUTCHours(), t, 2);
}
function ch(e, t) {
  return Ke(e.getUTCHours() % 12 || 12, t, 2);
}
function uh(e, t) {
  return Ke(1 + Ac.count(da(e), e), t, 3);
}
function wc(e, t) {
  return Ke(e.getUTCMilliseconds(), t, 3);
}
function dh(e, t) {
  return wc(e, t) + "000";
}
function fh(e, t) {
  return Ke(e.getUTCMonth() + 1, t, 2);
}
function mh(e, t) {
  return Ke(e.getUTCMinutes(), t, 2);
}
function hh(e, t) {
  return Ke(e.getUTCSeconds(), t, 2);
}
function ph(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function yh(e, t) {
  return Ke(Sc.count(da(e) - 1, e), t, 2);
}
function Cc(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Bn(e) : Bn.ceil(e);
}
function gh(e, t) {
  return e = Cc(e), Ke(Bn.count(da(e), e) + (da(e).getUTCDay() === 4), t, 2);
}
function xh(e) {
  return e.getUTCDay();
}
function vh(e, t) {
  return Ke(Ja.count(da(e) - 1, e), t, 2);
}
function bh(e, t) {
  return Ke(e.getUTCFullYear() % 100, t, 2);
}
function Eh(e, t) {
  return e = Cc(e), Ke(e.getUTCFullYear() % 100, t, 2);
}
function Ah(e, t) {
  return Ke(e.getUTCFullYear() % 1e4, t, 4);
}
function Sh(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Bn(e) : Bn.ceil(e), Ke(e.getUTCFullYear() % 1e4, t, 4);
}
function Th() {
  return "+0000";
}
function Rl() {
  return "%";
}
function Fl(e) {
  return +e;
}
function Bl(e) {
  return Math.floor(+e / 1e3);
}
var wn, Pc, Nc;
kh({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function kh(e) {
  return wn = km(e), Pc = wn.format, Nc = wn.parse, wn.utcFormat, wn.utcParse, wn;
}
const Re = F.createContext({}), Fe = {
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
function wh(e, t) {
  return t === void 0 && (t = !0), (n) => (Fe.arr(n) ? n : Object.keys(n)).reduce((a, r) => {
    const l = t ? r[0].toLowerCase() + r.substring(1) : r;
    return a[l] = e(l), a;
  }, e);
}
function Lc() {
  const e = F.useState(!1), t = e[1];
  return F.useCallback(() => t((a) => !a), []);
}
function dn(e, t) {
  return Fe.und(e) || Fe.nul(e) ? t : e;
}
function Mn(e) {
  return Fe.und(e) ? [] : Fe.arr(e) ? e : [e];
}
function Dt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return Fe.fun(e) ? e(...n) : e;
}
function Ch(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Kt(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function ji(e) {
  const t = Ch(e);
  if (Fe.und(t))
    return Ye({
      to: t
    }, e);
  const n = Object.keys(e).reduce((a, r) => Fe.und(t[r]) ? Ye({}, a, {
    [r]: e[r]
  }) : a, {});
  return Ye({
    to: t
  }, n);
}
function Ph(e, t) {
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
class gr extends $t {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof $t && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof $t && t.removeChild(this));
  }
}
class Oc extends $t {
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
let to;
function Nh(e, t) {
  to = {
    fn: e,
    transform: t
  };
}
let _c;
function Lh(e) {
  _c = e;
}
let Mc = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Ga;
function Oh(e) {
  Ga = e;
}
let Dc = () => Date.now(), _h = (e) => e.current, $c;
function Mh(e) {
  $c = e;
}
class Dh extends Oc {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? Ye({}, t, {
      style: $c(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const $h = (e) => Fe.fun(e) && !(e.prototype instanceof i.Component), zh = (e) => F.forwardRef((n, a) => {
  const r = Lc(), l = F.useRef(!0), o = F.useRef(null), s = F.useRef(null), c = F.useCallback((f) => {
    const p = o.current, g = () => {
      let v = !1;
      s.current && (v = to.fn(s.current, o.current.getAnimatedValue())), (!s.current || v === !1) && r();
    };
    o.current = new Dh(f, g), p && p.detach();
  }, []);
  F.useEffect(() => () => {
    l.current = !1, o.current && o.current.detach();
  }, []), F.useImperativeHandle(a, () => _h(s)), c(n);
  const u = o.current.getValue();
  u.scrollTop, u.scrollLeft;
  const d = Kt(u, ["scrollTop", "scrollLeft"]), h = $h(e) ? void 0 : (f) => s.current = Ph(f, a);
  return i.createElement(e, Ye({}, d, {
    ref: h
  }));
});
let ea = !1;
const bn = /* @__PURE__ */ new Set(), zc = () => {
  if (!ea)
    return !1;
  let e = Dc();
  for (let t of bn) {
    let n = !1;
    for (let a = 0; a < t.configs.length; a++) {
      let r = t.configs[a], l, o;
      for (let s = 0; s < r.animatedValues.length; s++) {
        let c = r.animatedValues[s];
        if (c.done)
          continue;
        let u = r.fromValues[s], d = r.toValues[s], h = c.lastPosition, f = d instanceof $t, p = Array.isArray(r.initialVelocity) ? r.initialVelocity[s] : r.initialVelocity;
        if (f && (d = d.getValue()), r.immediate) {
          c.setValue(d), c.done = !0;
          continue;
        }
        if (typeof u == "string" || typeof d == "string") {
          c.setValue(d), c.done = !0;
          continue;
        }
        if (r.duration !== void 0)
          h = u + r.easing((e - c.startTime) / r.duration) * (d - u), l = e >= c.startTime + r.duration;
        else if (r.decay)
          h = u + p / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - c.startTime))), l = Math.abs(c.lastPosition - h) < 0.1, l && (d = h);
        else {
          o = c.lastTime !== void 0 ? c.lastTime : e, p = c.lastVelocity !== void 0 ? c.lastVelocity : r.initialVelocity, e > o + 64 && (o = e);
          let g = Math.floor(e - o);
          for (let y = 0; y < g; ++y) {
            let b = -r.tension * (h - d), A = -r.friction * p, w = (b + A) / r.mass;
            p = p + w * 1 / 1e3, h = h + p * 1 / 1e3;
          }
          let v = r.clamp && r.tension !== 0 ? u < d ? h > d : h < d : !1, x = Math.abs(p) <= r.precision, m = r.tension !== 0 ? Math.abs(d - h) <= r.precision : !0;
          l = v || x && m, c.lastVelocity = p, c.lastTime = e;
        }
        f && !r.toValues[s].done && (l = !1), l ? (c.value !== d && (h = d), c.done = !0) : n = !0, c.setValue(h), c.lastPosition = h;
      }
      t.props.onFrame && (t.values[r.name] = r.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (bn.delete(t), t.stop(!0));
  }
  return bn.size ? Mc(zc) : ea = !1, ea;
}, Rh = (e) => {
  bn.has(e) || bn.add(e), ea || (ea = !0, Mc(zc));
}, Fh = (e) => {
  bn.has(e) && bn.delete(e);
};
function ei(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return ei({
      range: e,
      output: t,
      extrapolate: n
    });
  if (Ga && typeof e.output[0] == "string")
    return Ga(e);
  const a = e, r = a.output, l = a.range || [0, 1], o = a.extrapolateLeft || a.extrapolate || "extend", s = a.extrapolateRight || a.extrapolate || "extend", c = a.easing || ((u) => u);
  return (u) => {
    const d = Hh(u, l);
    return Bh(u, l[d], l[d + 1], r[d], r[d + 1], c, o, s, a.map);
  };
}
function Bh(e, t, n, a, r, l, o, s, c) {
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
  return a === r ? a : t === n ? e <= t ? a : r : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = l(u), a === -1 / 0 ? u = -u : r === 1 / 0 ? u = u + a : u = u * (r - a) + a, u);
}
function Hh(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class Hn extends gr {
  constructor(t, n, a, r) {
    super(), this.calc = void 0, this.payload = t instanceof gr && !(t instanceof Hn) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = ei(n, a, r);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, a) {
    this.calc = ei(t, n, a);
  }
  interpolate(t, n, a) {
    return new Hn(this, t, n, a);
  }
}
const Vh = (e, t, n) => e && new Hn(e, t, n);
function Rc(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => Rc(n, t));
}
class xr extends $t {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(a, r) {
      r === void 0 && (r = !0), n.value = a, r && n.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && Rc(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
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
class Wh extends gr {
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
let Kh = 0;
class jh {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Kh++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = ji(t), a = n.delay, r = a === void 0 ? 0 : a, l = n.to, o = Kt(n, ["delay", "to"]);
    if (Fe.arr(l) || Fe.fun(l))
      this.queue.push(Ye({}, o, {
        delay: r,
        to: l
      }));
    else if (l) {
      let s = {};
      Object.entries(l).forEach((c) => {
        let u = c[0], d = c[1];
        const h = Ye({
          to: {
            [u]: d
          },
          delay: Dt(r, u)
        }, o), f = s[h.delay] && s[h.delay].to;
        s[h.delay] = Ye({}, s[h.delay], h, {
          to: Ye({}, f, h.to)
        });
      }), this.queue = Object.values(s);
    }
    return this.queue = this.queue.sort((s, c) => s.delay - c.delay), this.diff(o), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((r) => {
        let l = r.from, o = l === void 0 ? {} : l, s = r.to, c = s === void 0 ? {} : s;
        Fe.obj(o) && (this.merged = Ye({}, o, this.merged)), Fe.obj(c) && (this.merged = Ye({}, this.merged, c));
      });
      const n = this.local = ++this.guid, a = this.localQueue = this.queue;
      this.queue = [], a.forEach((r, l) => {
        let o = r.delay, s = Kt(r, ["delay"]);
        const c = (d) => {
          l === a.length - 1 && n === this.guid && d && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let u = Fe.arr(s.to) || Fe.fun(s.to);
        o ? setTimeout(() => {
          n === this.guid && (u ? this.runAsync(s, c) : this.diff(s).start(c));
        }, o) : u ? this.runAsync(s, c) : this.diff(s).start(c);
      });
    } else
      Fe.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Rh(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && Fh(this), this;
  }
  runAsync(t, n) {
    var a = this;
    t.delay;
    let r = Kt(t, ["delay"]);
    const l = this.local;
    let o = Promise.resolve(void 0);
    if (Fe.arr(r.to))
      for (let s = 0; s < r.to.length; s++) {
        const c = s, u = Ye({}, r, ji(r.to[c]));
        Fe.arr(u.config) && (u.config = u.config[c]), o = o.then(() => {
          if (l === this.guid)
            return new Promise((d) => this.diff(u).start(d));
        });
      }
    else if (Fe.fun(r.to)) {
      let s = 0, c;
      o = o.then(() => r.to(
        // next(props)
        (u) => {
          const d = Ye({}, r, ji(u));
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
    this.props = Ye({}, this.props, t);
    let n = this.props, a = n.from, r = a === void 0 ? {} : a, l = n.to, o = l === void 0 ? {} : l, s = n.config, c = s === void 0 ? {} : s, u = n.reverse, d = n.attach, h = n.reset, f = n.immediate;
    if (u) {
      var p = [o, r];
      r = p[0], o = p[1];
    }
    this.merged = Ye({}, r, this.merged, o), this.hasChanged = !1;
    let g = d && d(this);
    if (this.animations = Object.entries(this.merged).reduce((v, x) => {
      let m = x[0], y = x[1], b = v[m] || {};
      const A = Fe.num(y), w = Fe.str(y) && !y.startsWith("#") && !/\d/.test(y) && !_c[y], E = Fe.arr(y), L = !A && !E && !w;
      let P = Fe.und(r[m]) ? y : r[m], N = A || E || w ? y : 1, D = Dt(c, m);
      g && (N = g.animations[m].parent);
      let _ = b.parent, S = b.interpolation, $ = Mn(g ? N.getPayload() : N), I, j = y;
      L && (j = Ga({
        range: [0, 1],
        output: [y, y]
      })(1));
      let R = S && S.getValue();
      const V = !Fe.und(_) && b.animatedValues.some((q) => !q.done), W = !Fe.equ(j, R), M = !Fe.equ(j, b.previous), B = !Fe.equ(D, b.config);
      if (h || M && W || B) {
        if (A || w)
          _ = S = b.parent || new xr(P);
        else if (E)
          _ = S = b.parent || new Wh(P);
        else if (L) {
          let q = b.interpolation && b.interpolation.calc(b.parent.value);
          q = q !== void 0 && !h ? q : P, b.parent ? (_ = b.parent, _.setValue(0, !1)) : _ = new xr(0);
          const U = {
            output: [q, y]
          };
          b.interpolation ? (S = b.interpolation, b.interpolation.updateConfig(U)) : S = _.interpolate(U);
        }
        return $ = Mn(g ? N.getPayload() : N), I = Mn(_.getPayload()), h && !L && _.setValue(P, !1), this.hasChanged = !0, I.forEach((q) => {
          q.startPosition = q.value, q.lastPosition = q.value, q.lastVelocity = V ? q.lastVelocity : void 0, q.lastTime = V ? q.lastTime : void 0, q.startTime = Dc(), q.done = !1, q.animatedStyles.clear();
        }), Dt(f, m) && _.setValue(L ? N : y, !1), Ye({}, v, {
          [m]: Ye({}, b, {
            name: m,
            parent: _,
            interpolation: S,
            animatedValues: I,
            toValues: $,
            previous: j,
            config: D,
            fromValues: Mn(_.getValue()),
            immediate: Dt(f, m),
            initialVelocity: dn(D.velocity, 0),
            clamp: dn(D.clamp, !1),
            precision: dn(D.precision, 0.01),
            tension: dn(D.tension, 170),
            friction: dn(D.friction, 26),
            mass: dn(D.mass, 1),
            duration: D.duration,
            easing: dn(D.easing, (q) => q),
            decay: D.decay
          })
        });
      } else
        return W ? v : (L && (_.setValue(1, !1), S.updateConfig({
          output: [j, j]
        })), _.done = !0, this.hasChanged = !0, Ye({}, v, {
          [m]: Ye({}, v[m], {
            previous: j
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
let Ih = 0;
const Fa = "enter", Ii = "leave", qi = "update", qh = (e, t) => (typeof t == "function" ? e.map(t) : Mn(t)).map(String), vr = (e) => {
  let t = e.items, n = e.keys, a = n === void 0 ? (l) => l : n, r = Kt(e, ["items", "keys"]);
  return t = Mn(t !== void 0 ? t : null), Ye({
    items: t,
    keys: qh(t, a)
  }, r);
};
function Uh(e, t, n) {
  const a = Ye({
    items: e,
    keys: t || ((y) => y)
  }, n), r = vr(a), l = r.lazy, o = l === void 0 ? !1 : l;
  r.unique;
  const s = r.reset, c = s === void 0 ? !1 : s;
  r.enter, r.leave, r.update;
  const u = r.onDestroyed;
  r.keys, r.items;
  const d = r.onFrame, h = r.onRest, f = r.onStart, p = r.ref, g = Kt(r, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), v = Lc(), x = F.useRef(!1), m = F.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!a.ref,
    instances: !x.current && /* @__PURE__ */ new Map(),
    forceUpdate: v
  });
  return F.useImperativeHandle(a.ref, () => ({
    start: () => Promise.all(Array.from(m.current.instances).map((y) => {
      let b = y[1];
      return new Promise((A) => b.start(A));
    })),
    stop: (y) => Array.from(m.current.instances).forEach((b) => b[1].stop(y)),
    get controllers() {
      return Array.from(m.current.instances).map((y) => y[1]);
    }
  })), m.current = Yh(m.current, a), m.current.changed && m.current.transitions.forEach((y) => {
    const b = y.slot, A = y.from, w = y.to, E = y.config, L = y.trail, P = y.key, N = y.item;
    m.current.instances.has(P) || m.current.instances.set(P, new jh());
    const D = m.current.instances.get(P), _ = Ye({}, g, {
      to: w,
      from: A,
      config: E,
      ref: p,
      onRest: (S) => {
        m.current.mounted && (y.destroyed && (!p && !o && Hl(m, P), u && u(N)), !Array.from(m.current.instances).some((j) => !j[1].idle) && (p || o) && m.current.deleted.length > 0 && Hl(m), h && h(N, b, S));
      },
      onStart: f && (() => f(N, b)),
      onFrame: d && ((S) => d(N, b, S)),
      delay: L,
      reset: c && b === Fa
      // Update controller
    });
    D.update(_), m.current.paused || D.start();
  }), F.useEffect(() => (m.current.mounted = x.current = !0, () => {
    m.current.mounted = x.current = !1, Array.from(m.current.instances).map((y) => y[1].destroy()), m.current.instances.clear();
  }), []), m.current.transitions.map((y) => {
    let b = y.item, A = y.slot, w = y.key;
    return {
      item: b,
      key: w,
      state: A,
      props: m.current.instances.get(w).getValues()
    };
  });
}
function Hl(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let r = a.key;
    const l = (o) => o.key !== r;
    (Fe.und(t) || t === r) && (e.current.instances.delete(r), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function Yh(e, t) {
  let n = e.first, a = e.prevProps, r = Kt(e, ["first", "prevProps"]), l = vr(t), o = l.items, s = l.keys, c = l.initial, u = l.from, d = l.enter, h = l.leave, f = l.update, p = l.trail, g = p === void 0 ? 0 : p, v = l.unique, x = l.config, m = l.order, y = m === void 0 ? [Fa, Ii, qi] : m, b = vr(a), A = b.keys, w = b.items, E = Ye({}, r.current), L = [...r.deleted], P = Object.keys(E), N = new Set(P), D = new Set(s), _ = s.filter((R) => !N.has(R)), S = r.transitions.filter((R) => !R.destroyed && !D.has(R.originalKey)).map((R) => R.originalKey), $ = s.filter((R) => N.has(R)), I = -g;
  for (; y.length; )
    switch (y.shift()) {
      case Fa: {
        _.forEach((z, V) => {
          v && L.find((q) => q.originalKey === z) && (L = L.filter((q) => q.originalKey !== z));
          const W = s.indexOf(z), M = o[W], B = n && c !== void 0 ? "initial" : Fa;
          E[z] = {
            slot: B,
            originalKey: z,
            key: v ? String(z) : Ih++,
            item: M,
            trail: I = I + g,
            config: Dt(x, M, B),
            from: Dt(n && c !== void 0 ? c || {} : u, M),
            to: Dt(d, M)
          };
        });
        break;
      }
      case Ii: {
        S.forEach((z) => {
          const V = A.indexOf(z), W = w[V], M = Ii;
          L.unshift(Ye({}, E[z], {
            slot: M,
            destroyed: !0,
            left: A[Math.max(0, V - 1)],
            right: A[Math.min(A.length, V + 1)],
            trail: I = I + g,
            config: Dt(x, W, M),
            to: Dt(h, W)
          })), delete E[z];
        });
        break;
      }
      case qi: {
        $.forEach((z) => {
          const V = s.indexOf(z), W = o[V], M = qi;
          E[z] = Ye({}, E[z], {
            item: W,
            slot: M,
            trail: I = I + g,
            config: Dt(x, W, M),
            to: Dt(f, W)
          });
        });
        break;
      }
    }
  let j = s.map((R) => E[R]);
  return L.forEach((R) => {
    let z = R.left;
    R.right;
    let V = Kt(R, ["left", "right"]), W;
    (W = j.findIndex((M) => M.originalKey === z)) !== -1 && (W += 1), W = Math.max(0, W), j = [...j.slice(0, W), V, ...j.slice(W)];
  }), Ye({}, r, {
    changed: _.length || S.length || $.length,
    first: n && _.length === 0,
    transitions: j,
    current: E,
    deleted: L,
    prevProps: t
  });
}
class Xh extends Oc {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof $t) && (t = to.transform(t)), this.payload = t;
  }
}
const ti = {
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
}, zt = "[-+]?\\d*\\.?\\d+", ni = zt + "%";
function Si() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Qh = new RegExp("rgb" + Si(zt, zt, zt)), Zh = new RegExp("rgba" + Si(zt, zt, zt, zt)), Jh = new RegExp("hsl" + Si(zt, ni, ni)), Gh = new RegExp("hsla" + Si(zt, ni, ni, zt)), ep = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, tp = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, np = /^#([0-9a-fA-F]{6})$/, ap = /^#([0-9a-fA-F]{8})$/;
function ip(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = np.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : ti.hasOwnProperty(e) ? ti[e] : (t = Qh.exec(e)) ? (Cn(t[1]) << 24 | // r
  Cn(t[2]) << 16 | // g
  Cn(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Zh.exec(e)) ? (Cn(t[1]) << 24 | // r
  Cn(t[2]) << 16 | // g
  Cn(t[3]) << 8 | // b
  Kl(t[4])) >>> // a
  0 : (t = ep.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = ap.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = tp.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Jh.exec(e)) ? (Vl(
    Wl(t[1]),
    // h
    Ca(t[2]),
    // s
    Ca(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Gh.exec(e)) ? (Vl(
    Wl(t[1]),
    // h
    Ca(t[2]),
    // s
    Ca(t[3])
    // l
  ) | Kl(t[4])) >>> // a
  0 : null;
}
function Ui(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Vl(e, t, n) {
  const a = n < 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - a, l = Ui(r, a, e + 1 / 3), o = Ui(r, a, e), s = Ui(r, a, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(o * 255) << 16 | Math.round(s * 255) << 8;
}
function Cn(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Wl(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Kl(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Ca(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function jl(e) {
  let t = ip(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, r = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${n}, ${a}, ${r}, ${l})`;
}
const Pa = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rp = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, op = new RegExp(`(${Object.keys(ti).join("|")})`, "g"), lp = (e) => {
  const t = e.output.map((r) => r.replace(rp, jl)).map((r) => r.replace(op, jl)), n = t[0].match(Pa).map(() => []);
  t.forEach((r) => {
    r.match(Pa).forEach((l, o) => n[o].push(+l));
  });
  const a = t[0].match(Pa).map((r, l) => ei(Ye({}, e, {
    output: n[l]
  })));
  return (r) => {
    let l = 0;
    return t[0].replace(Pa, () => a[l++](r)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (o, s, c, u, d) => `rgba(${Math.round(s)}, ${Math.round(c)}, ${Math.round(u)}, ${d})`);
  };
};
let ta = {
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
const sp = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), cp = ["Webkit", "Ms", "Moz", "O"];
ta = Object.keys(ta).reduce((e, t) => (cp.forEach((n) => e[sp(n, t)] = e[t]), e), ta);
function up(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(ta.hasOwnProperty(e) && ta[e]) ? t + "px" : ("" + t).trim();
}
const Il = {};
Mh((e) => new Xh(e));
Oh(lp);
Lh(ti);
Nh((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const r = t.style, l = t.children, o = t.scrollTop, s = t.scrollLeft, c = Kt(t, ["style", "children", "scrollTop", "scrollLeft"]), u = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    o !== void 0 && (e.scrollTop = o), s !== void 0 && (e.scrollLeft = s), l !== void 0 && (e.textContent = l);
    for (let d in r)
      if (r.hasOwnProperty(d)) {
        var n = d.indexOf("--") === 0, a = up(d, r[d], n);
        d === "float" && (d = "cssFloat"), n ? e.style.setProperty(d, a) : e.style[d] = a;
      }
    for (let d in c) {
      const h = u ? d : Il[d] || (Il[d] = d.replace(/([A-Z])/g, (f) => "-" + f.toLowerCase()));
      typeof e.getAttribute(h) < "u" && e.setAttribute(h, c[d]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const dp = [
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
], fp = wh(zh, !1), ql = fp(dp);
var mp = ["tooltipOpen"];
function hp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ai.apply(this, arguments);
}
function Fc(e) {
  var t = F.useState(ai({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], r = F.useCallback(function(o) {
    return a(typeof o == "function" ? function(s) {
      s.tooltipOpen;
      var c = hp(s, mp);
      return ai({}, o(c), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: o.tooltipLeft,
      tooltipTop: o.tooltipTop,
      tooltipData: o.tooltipData
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
var pp = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
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
function yp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Bc = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, no = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.className, a = e.top, r = e.left, l = e.offsetLeft, o = l === void 0 ? 10 : l, s = e.offsetTop, c = s === void 0 ? 10 : s, u = e.style, d = u === void 0 ? Bc : u, h = e.children, f = e.unstyled, p = f === void 0 ? !1 : f, g = e.applyPositionStyle, v = g === void 0 ? !1 : g, x = yp(e, pp);
  return /* @__PURE__ */ i.createElement("div", ii({
    ref: t,
    className: tt("visx-tooltip", n),
    style: ii({
      top: a == null || c == null ? a : a + c,
      left: r == null || o == null ? r : r + o
    }, v && {
      position: "absolute"
    }, !p && d)
  }, x), h);
});
no.propTypes = {
  children: K.node,
  className: K.string,
  left: K.number,
  offsetLeft: K.number,
  offsetTop: K.number,
  top: K.number,
  applyPositionStyle: K.bool,
  unstyled: K.bool
};
no.displayName = "Tooltip";
const gp = no;
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
function xp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Er(e, t);
}
function Er(e, t) {
  return Er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Er(e, t);
}
var Ul = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function bp(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    vp(a, n);
    function a(l) {
      var o;
      return o = n.call(this, l) || this, o.state = {
        rect: void 0,
        parentRect: void 0
      }, o.nodeRef = /* @__PURE__ */ i.createRef(), o.getRects = o.getRects.bind(xp(o)), o;
    }
    var r = a.prototype;
    return r.componentDidMount = function() {
      var o, s = this;
      this.node = (o = this.nodeRef) != null && o.current ? this.nodeRef.current : zu.findDOMNode(this), this.setState(function() {
        return s.getRects();
      });
    }, r.getRects = function() {
      if (!this.node)
        return this.state;
      var o = this.node, s = o.parentNode, c = o.getBoundingClientRect ? o.getBoundingClientRect() : Ul, u = s != null && s.getBoundingClientRect ? s.getBoundingClientRect() : Ul;
      return {
        rect: c,
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
var Hc = /* @__PURE__ */ F.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), Ep = Hc.Provider;
Hc.Consumer;
var Ap = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ri.apply(this, arguments);
}
function Sp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Vc(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, a = n === void 0 ? 0 : n, r = e.offsetLeft, l = r === void 0 ? 10 : r, o = e.offsetTop, s = o === void 0 ? 10 : o, c = e.parentRect, u = e.rect, d = e.style, h = d === void 0 ? Bc : d, f = e.top, p = f === void 0 ? 0 : f, g = e.unstyled, v = g === void 0 ? !1 : g, x = e.nodeRef, m = Sp(e, Ap), y, b = !1, A = !1;
  if (u && c) {
    var w = a, E = p;
    if (c.width) {
      var L = w + l + u.width - c.width, P = u.width - w - l;
      b = L > 0 && L > P;
    } else {
      var N = w + l + u.width - window.innerWidth, D = u.width - w - l;
      b = N > 0 && N > D;
    }
    if (c.height) {
      var _ = E + s + u.height - c.height, S = u.height - E - s;
      A = _ > 0 && _ > S;
    } else
      A = E + s + u.height > window.innerHeight;
    w = b ? w - u.width - l : w + l, E = A ? E - u.height - s : E + s, w = Math.round(w), E = Math.round(E), y = "translate(" + w + "px, " + E + "px)";
  }
  return /* @__PURE__ */ i.createElement(gp, ri({
    ref: x,
    style: ri({
      left: 0,
      top: 0,
      transform: y
    }, !v && h)
  }, m), /* @__PURE__ */ i.createElement(Ep, {
    value: {
      isFlippedVertically: !A,
      isFlippedHorizontally: !b
    }
  }, t));
}
Vc.propTypes = {
  nodeRef: K.oneOfType([K.string, K.func, K.object])
};
const Wc = bp(Vc);
var Vn = /* @__PURE__ */ function() {
  function e(n) {
    var a = n.x, r = a === void 0 ? 0 : a, l = n.y, o = l === void 0 ? 0 : l;
    this.x = 0, this.y = 0, this.x = r, this.y = o;
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
function Tp(e, t) {
  return new Vn({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function kp(e, t) {
  return new Vn({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const wp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: Vn,
  subtractPoints: kp,
  sumPoints: Tp
}, Symbol.toStringTag, { value: "Module" }));
function Cp(e) {
  return !!e && e instanceof Element;
}
function Pp(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function Np(e) {
  return !!e && "createSVGPoint" in e;
}
function Lp(e) {
  return !!e && "getScreenCTM" in e;
}
function Op(e) {
  return !!e && "changedTouches" in e;
}
function _p(e) {
  return !!e && "clientX" in e;
}
function Mp(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function na() {
  return na = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, na.apply(this, arguments);
}
var Yi = {
  x: 0,
  y: 0
};
function Dp(e) {
  if (!e)
    return na({}, Yi);
  if (Op(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : na({}, Yi);
  if (_p(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : na({}, Yi);
}
function Ar(e, t) {
  if (!e || !t)
    return null;
  var n = Dp(t), a = Pp(e) ? e.ownerSVGElement : e, r = Lp(a) ? a.getScreenCTM() : null;
  if (Np(a) && r) {
    var l = a.createSVGPoint();
    return l.x = n.x, l.y = n.y, l = l.matrixTransform(r.inverse()), new Vn({
      x: l.x,
      y: l.y
    });
  }
  var o = e.getBoundingClientRect();
  return new Vn({
    x: n.x - o.left - e.clientLeft,
    y: n.y - o.top - e.clientTop
  });
}
function Sr(e, t) {
  if (Cp(e) && t)
    return Ar(e, t);
  if (Mp(e)) {
    var n = e, a = n.target;
    if (a)
      return Ar(a, n);
  }
  return null;
}
const $p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Sr,
  touchPoint: Ar
}, Symbol.toStringTag, { value: "Module" })), zp = new Ss(), Kc = (e) => {
  const { tableData: t, config: n, formatNumber: a, capitalize: r, formatDate: l, parseDate: o, setSharedFilter: s } = F.useContext(Re), { xScale: c, yScale: u, showTooltip: d, hideTooltip: h } = e, { xAxis: f, visualizationType: p, orientation: g, yAxis: v, runtime: x, barWidth: m } = n, y = zp.applySuppression(t, n.suppressedData), b = (j, R) => {
    const { x: z, y: V } = R, M = {
      data: j || {},
      dataXPosition: z + 10,
      dataYPosition: V
    };
    return {
      tooltipLeft: M.dataXPosition,
      tooltipTop: M.dataYPosition,
      tooltipData: M
    };
  }, A = (j, R) => {
    j.stopPropagation();
    const z = Sr(j), { x: V, y: W } = z, { data: M, arc: B } = R ?? {}, q = L(V - Number(n.yAxis.size || 0)), U = p !== "Pie" ? n.series.filter((O) => O.tooltip === !0).map((O) => O.dataKey) : n.series.map((O) => O.dataKey);
    U.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((O) => {
      O.confidenceIntervals.map((ue) => {
        ue.showInTooltip && (U.push(ue.high), U.push(ue.low));
      });
    });
    function Q(O) {
      let ue = [];
      for (let se in O)
        O.hasOwnProperty(se) && ue.push(O[se].name);
      return ue;
    }
    U.push(...Q(n.columns)), U.push(...Q(n.columns));
    const ae = D(q, U), he = y.filter((O) => O[f.dataKey] === P(W)), Ne = g === "vertical" ? ae : he, Le = (O) => {
      const ue = n.series.filter((ye) => ye.dataKey === O)[0];
      return ue != null && ue.axis ? String(ue.axis).toLowerCase() : "left";
    }, Y = (() => {
      var ve, ge, we;
      const O = n.columns, ue = [], se = [];
      for (const [Te, Ae] of Object.entries(O)) {
        const xe = {
          addColPrefix: n.columns[Te].prefix,
          addColSuffix: n.columns[Te].suffix,
          addColRoundTo: n.columns[Te].roundToPlace ? n.columns[Te].roundToPlace : "",
          addColCommas: n.columns[Te].commas
        };
        let ne = null;
        n.visualizationType === "Pie" ? ne = B == null ? void 0 : B.data[Ae.name] : ne = (ve = Ne[0]) == null ? void 0 : ve[Ae.name];
        const ee = Ts(ne, "left", !0, n, xe);
        Ae.tooltips && ue.push([Ae.label, ee]);
      }
      const ye = [];
      return ue.forEach((Te) => {
        ye.push([Te[0], Te[1]]);
      }), p === "Pie" && se.push(
        // ignore
        [n.xAxis.dataKey, M],
        [n.runtime.yAxis.dataKey, a(B == null ? void 0 : B.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((B == null ? void 0 : B.endAngle) - (B == null ? void 0 : B.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), p === "Forest Plot" && se.push([n.xAxis.dataKey, P(W)]), p !== "Pie" && p !== "Forest Plot" && se.push(
        ...(we = (ge = _()) == null ? void 0 : ge.filter(Boolean)) == null ? void 0 : we.flatMap((Te) => {
          var xe, ne, ee;
          const Ae = Te === n.xAxis.dataKey ? (xe = Ne[0]) == null ? void 0 : xe[Te] : a((ne = Ne[0]) == null ? void 0 : ne[Te], Le(Te));
          return (ee = Ne == null ? void 0 : Ne[0]) != null && ee[Te] ? [[Te, Ae]] : [];
        })
      ), [...se, ...ye];
    })();
    if (!Y)
      return;
    const re = b(Y, z);
    d(re);
  }, w = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      h();
    }, 3e3) : h();
  }, E = (j) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let R = c.step();
      const V = Math.floor(Number(j) / R);
      return c.domain()[V - 1];
    }
    if (n.xAxis.type === "date" && n.visualizationType !== "Combo") {
      const R = bl((M) => o(M[n.xAxis.dataKey])).left, z = c.invert(c(j)), V = R(n.data, z, 1);
      return o(n.data[V - 1][n.xAxis.dataKey]);
    }
  }, L = (j) => {
    if (p !== "Pie" && g !== "horizontal") {
      if (c.type === "point" || f.type === "continuous" || f.type === "date") {
        let R = null, z = Number.MAX_VALUE, V = j;
        return y.forEach((W) => {
          const M = f.type === "date" ? c(o(W[f.dataKey])) : c(W[f.dataKey]);
          let B = n.barHeight;
          const q = Math.abs(Number(M - V + B));
          q <= z && (z = q, R = (f.type === "date", W[f.dataKey]));
        }), R;
      }
      if (n.xAxis.type === "categorical" || p === "Combo" && g !== "horizontal" && p !== "Forest Plot") {
        let R = c.step();
        const V = Math.floor(Number(j) / R);
        return c.domain()[V - 1];
      }
      if (n.xAxis.type === "date" && p !== "Combo" && g !== "horizontal") {
        const R = bl((M) => o(M[n.xAxis.dataKey])).left, z = c.invert(j), V = R(n.data, z, 1);
        return o(n.data[V - 1][n.xAxis.dataKey]);
      }
    }
  }, P = (j, R) => {
    if (p === "Pie")
      return;
    let z = Number.MAX_VALUE, V = null;
    return y.forEach((W, M) => {
      const B = u(p !== "Forest Plot" ? W[n.xAxis.dataKey] : M), q = Math.abs(B - j);
      q < z && (z = q, V = R ? W[R] : W[n.xAxis.dataKey]);
    }), V;
  }, N = (j) => {
    var R, z;
    try {
      const V = Sr(j), { x: W } = V;
      if (!W)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let M = L(W), B = (R = n.data) == null ? void 0 : R.filter((q) => q[n.xAxis.dataKey] === M);
      if (!M)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (f.type === "date" && M && (M = new Date(M), M = l(M), B = (z = n.data) == null ? void 0 : z.filter((q) => l(new Date(q[n.xAxis.dataKey])) === M)), !B[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${M}`);
      s && (n != null && n.uid) && (B != null && B[0]) && s(n.uid, B[0]);
    } catch (V) {
      console.error(V.message);
    }
  }, D = (j, R) => {
    try {
      const z = l(new Date(j));
      let V;
      return f.type === "categorical" ? V = y.filter((M) => M[f.dataKey] === j) : V = y.filter((M) => l(o(M[f.dataKey])) === z), !V || V.length === 0 ? [] : V.map((M) => Object.fromEntries(Object.entries(M).filter(([B, q]) => R.includes(B))));
    } catch (z) {
      console.error("COVE", z);
    }
  }, _ = () => {
    var j;
    try {
      let R, z = [], V = [];
      if ((j = n.series) == null || j.forEach((W) => {
        W.type === "Forecasting" && (z.push(W.stageColumn), W == null || W.confidenceIntervals.forEach((M) => {
          M.showInTooltip === !0 && (V.push(M.low), V.push(M.high));
        }));
      }), !n.dashboard)
        switch (p) {
          case "Combo":
            R = [x.xAxis.dataKey, ...x == null ? void 0 : x.seriesKeys, ...V];
            break;
          case "Forecasting":
            R = [x.xAxis.dataKey, ...z, ...V];
            break;
          case "Line":
            R = [x.xAxis.dataKey, ...x == null ? void 0 : x.seriesKeys];
            break;
          case "Area Chart":
            R = [x.xAxis.dataKey, ...x == null ? void 0 : x.seriesKeys];
            break;
          case "Bar":
            R = g === "vertical" ? [x.xAxis.dataKey, ...x == null ? void 0 : x.seriesKeys] : [x.yAxis.dataKey, ...x == null ? void 0 : x.seriesKeys];
            break;
          case "Pie":
            R = [x.xAxis.dataKey, ...x == null ? void 0 : x.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (R = [x.xAxis.dataKey, ...x == null ? void 0 : x.barSeriesKeys, ...x == null ? void 0 : x.lineSeriesKeys, ...z, ...V]), R;
    } catch (R) {
      console.error("COVE", R);
    }
  }, S = (j) => {
    const { dataXPosition: R, dataYPosition: z } = j;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${R}px, ${Number(z)}px)`
    };
  }, $ = (j) => {
    var z, V;
    let R = n.series.filter((W) => W.dataKey === j);
    return (z = R[0]) != null && z.name ? (V = R[0]) == null ? void 0 : V.name : j;
  };
  return {
    getIncludedTooltipSeries: _,
    getXValueFromCoordinate: L,
    getXValueFromCoordinateDate: E,
    getYScaleValues: D,
    handleTooltipClick: N,
    handleTooltipMouseOff: w,
    handleTooltipMouseOver: A,
    TooltipListItem: ({ item: j }) => {
      const [R, z] = j, [V, W, M] = z;
      return p === "Forest Plot" ? V === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${n.yAxis.type === "date" ? l(o(V, !1)) : W}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${$(V)}: ${a(W, "left")}`) : p === "Bar" && g === "horizontal" && V === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${W}`) : V === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${n.xAxis.type === "date", W}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${$(V)}: ${W}`);
    },
    tooltipStyles: S
  };
};
function ao(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: r = !1 }) {
  const [l, o] = F.useState(), s = (l == null ? void 0 : l.isIntersecting) && r, c = ([u]) => {
    o(u);
  };
  return F.useEffect(() => {
    setTimeout(() => {
      const u = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || s || !u)
        return;
      const h = { threshold: t, root: n, rootMargin: a }, f = new IntersectionObserver(c, h);
      return f.observe(u), () => f.disconnect();
    }, 500);
  }, [e, t, n, a, s]), l;
}
const Na = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), Rp = (e) => {
  const { transformedData: t, config: n, dimensions: a, seriesHighlight: r, colorScale: l, formatNumber: o, currentViewport: s, handleChartAriaLabels: c, isEditor: u } = F.useContext(Re), { tooltipData: d, showTooltip: h, hideTooltip: f, tooltipOpen: p, tooltipLeft: g, tooltipTop: v } = Fc(), { handleTooltipMouseOver: x, handleTooltipMouseOff: m, TooltipListItem: y } = Kc({
    xScale: !1,
    yScale: !1,
    showTooltip: h,
    hideTooltip: f
  }), [b, A] = F.useState(void 0), [w, E] = F.useState(!1), L = F.useRef(), P = ao(L, {
    freezeOnceVisible: !1
  });
  F.useEffect(() => {
    document.querySelector(".isEditor") && E((z) => !0);
  }), F.useEffect(() => {
    P != null && P.isIntersecting && n.animate && !w && setTimeout(() => {
      E(!0);
    }, 500);
  }, [P == null ? void 0 : P.isIntersecting, n.animate]);
  const N = ({ arcs: R, path: z, getKey: V }) => {
    const W = Uh(R, V, {
      from: Na,
      enter: Na,
      update: Na,
      leave: Na
    });
    return F.useEffect(() => {
      const M = setTimeout(() => {
        f();
      }, 500);
      return () => {
        clearTimeout(M);
      };
    }, [d]), /* @__PURE__ */ i.createElement(i.Fragment, null, W.map(({ item: M, props: B, key: q }, U) => /* @__PURE__ */ i.createElement(be, { className: M.data[n.xAxis.dataKey], key: `${q}-${U}`, style: { opacity: n.legend.behavior === "highlight" && r.length > 0 && r.indexOf(M.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ i.createElement(
      ql.path,
      {
        d: Vh(
          [B.startAngle, B.endAngle],
          (Q, ae) => z({
            ...M,
            startAngle: Q,
            endAngle: ae
          })
        ),
        fill: l(M.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (Q) => x(Q, { data: M.data[n.runtime.xAxis.dataKey], arc: M }),
        onMouseLeave: (Q) => m()
      }
    ))), W.map(({ item: M, key: B }, q) => {
      const [U, Q] = z.centroid(M), ae = M.endAngle - M.startAngle >= 0.1;
      let he = "#FFF";
      return l(M.data[n.runtime.xAxis.dataKey]) && Rt.contrast(he, l(M.data[n.runtime.xAxis.dataKey])) < 3.5 && (he = "000"), /* @__PURE__ */ i.createElement(ql.g, { key: `${B}${q}` }, ae && /* @__PURE__ */ i.createElement(De, { style: { fill: he }, x: U, y: Q, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((M.endAngle - M.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [D] = a;
  n && n.legend && !n.legend.hide && s === "lg" && (D = D * 0.73);
  const _ = n.heights.vertical, S = Math.min(D, _) / 2, $ = _ / 2, I = D / 2, j = n.pieType === "Donut" ? 75 : S;
  return F.useEffect(() => {
    if (r.length > 0 && n.legend.behavior !== "highlight") {
      let R = [];
      t.forEach((z) => {
        r.indexOf(z[n.runtime.xAxis.dataKey]) !== -1 && R.push(z);
      }), A(R);
    } else
      A(void 0);
  }, [r]), /* @__PURE__ */ i.createElement(qt, { component: "PieChart" }, /* @__PURE__ */ i.createElement("svg", { width: D, height: _, className: `animated-pie group ${n.animate === !1 || w ? "animated" : ""}`, role: "img", "aria-label": c(n) }, /* @__PURE__ */ i.createElement(be, { top: $, left: I }, /* @__PURE__ */ i.createElement(
    zd,
    {
      data: b || t,
      pieValue: (R) => R[n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: S - j,
      outerRadius: S
    },
    (R) => /* @__PURE__ */ i.createElement(N, { ...R, getKey: (z) => z.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ i.createElement("div", { ref: L }), d && Object.entries(d.data).length > 0 && p && h && d.dataYPosition && d.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Wc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: g, top: v }, /* @__PURE__ */ i.createElement("ul", null, typeof d == "object" && Object.entries(d.data).map((R, z) => /* @__PURE__ */ i.createElement(y, { item: R, key: z }))))));
};
var Fp = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const Et = Fp;
function Bp(e) {
  var t = e.labelOffset, n = e.labelProps, a = e.orientation, r = e.range, l = e.tickLabelFontSize, o = e.tickLength, s = a === Et.left || a === Et.top ? -1 : 1, c, u, d;
  if (a === Et.top || a === Et.bottom) {
    var h = a === Et.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    c = (Number(r[0]) + Number(r[r.length - 1])) / 2, u = s * (o + t + l + h);
  } else
    c = s * ((Number(r[0]) + Number(r[r.length - 1])) / 2), u = -(o + t), d = "rotate(" + s * 90 + ")";
  return {
    x: c,
    y: u,
    transform: d
  };
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
function Hp(e) {
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, r = e.tickClassName, l = e.tickComponent, o = e.tickLabelProps, s = e.tickStroke, c = s === void 0 ? "#222" : s, u = e.tickTransform, d = e.ticks, h = e.strokeWidth, f = e.tickLineProps;
  return d.map(function(p) {
    var g, v = p.value, x = p.index, m = p.from, y = p.to, b = p.formattedValue, A = (g = o[x]) != null ? g : {}, w = Math.max(10, typeof A.fontSize == "number" && A.fontSize || 0), E = y.y + (n && a !== Et.top ? w : 0);
    return /* @__PURE__ */ i.createElement(be, {
      key: "visx-tick-" + v + "-" + x,
      className: tt("visx-axis-tick", r),
      transform: u
    }, !t && /* @__PURE__ */ i.createElement(Ue, aa({
      from: m,
      to: y,
      stroke: c,
      strokeWidth: h,
      strokeLinecap: "square"
    }, f)), l ? l(aa({}, A, {
      x: y.x,
      y: E,
      formattedValue: b
    })) : /* @__PURE__ */ i.createElement(De, aa({
      x: y.x,
      y: E
    }, A), b));
  });
}
function oi() {
  return oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, oi.apply(this, arguments);
}
var Yl = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function Vp(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, r = e.hideAxisLine, l = e.hideTicks, o = e.horizontal, s = e.label, c = s === void 0 ? "" : s, u = e.labelClassName, d = e.labelOffset, h = d === void 0 ? 14 : d, f = e.labelProps, p = f === void 0 ? Yl : f, g = e.orientation, v = g === void 0 ? Et.bottom : g, x = e.scale, m = e.stroke, y = m === void 0 ? "#222" : m, b = e.strokeDasharray, A = e.strokeWidth, w = A === void 0 ? 1 : A, E = e.tickClassName, L = e.tickComponent, P = e.tickLineProps, N = e.tickLabelProps, D = e.tickLength, _ = D === void 0 ? 8 : D, S = e.tickStroke, $ = S === void 0 ? "#222" : S, I = e.tickTransform, j = e.ticks, R = e.ticksComponent, z = R === void 0 ? Hp : R, V = oi({}, Yl, typeof N == "object" ? N : null), W = j.map(function(B) {
    var q = B.value, U = B.index;
    return typeof N == "function" ? N(q, U, j) : V;
  }), M = Math.max.apply(Math, [10].concat(W.map(function(B) {
    return typeof B.fontSize == "number" ? B.fontSize : 0;
  })));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, z({
    hideTicks: l,
    horizontal: o,
    orientation: v,
    scale: x,
    tickClassName: E,
    tickComponent: L,
    tickLabelProps: W,
    tickStroke: $,
    tickTransform: I,
    ticks: j,
    strokeWidth: w,
    tickLineProps: P
  }), !r && /* @__PURE__ */ i.createElement(Ue, {
    className: tt("visx-axis-line", n),
    from: t,
    to: a,
    stroke: y,
    strokeWidth: w,
    strokeDasharray: b
  }), c && /* @__PURE__ */ i.createElement(De, oi({
    className: tt("visx-axis-label", u)
  }, Bp({
    labelOffset: h,
    labelProps: p,
    orientation: v,
    range: x.range(),
    tickLabelFontSize: M,
    tickLength: _
  }), p), c));
}
function Wp(e, t) {
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
function Kp(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Mf;
}
function La(e, t) {
  var n = e.x, a = e.y;
  return new Vn(t ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  });
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
var Xi = 0;
function jp(e) {
  return e === void 0 && (e = Xi), typeof e == "number" ? {
    start: e,
    end: e
  } : Tr({
    start: Xi,
    end: Xi
  }, e);
}
var Ip = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
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
function qp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Ti(e) {
  var t = e.children, n = t === void 0 ? Vp : t, a = e.axisClassName, r = e.hideAxisLine, l = r === void 0 ? !1 : r, o = e.hideTicks, s = o === void 0 ? !1 : o, c = e.hideZero, u = c === void 0 ? !1 : c, d = e.innerRef, h = e.left, f = h === void 0 ? 0 : h, p = e.numTicks, g = p === void 0 ? 10 : p, v = e.orientation, x = v === void 0 ? Et.bottom : v, m = e.rangePadding, y = m === void 0 ? 0 : m, b = e.scale, A = e.tickFormat, w = e.tickLength, E = w === void 0 ? 8 : w, L = e.tickValues, P = e.top, N = P === void 0 ? 0 : P, D = qp(e, Ip), _ = A ?? Kp(b), S = x === Et.left, $ = x === Et.top, I = $ || x === Et.bottom, j = Wp(b), R = S || $ ? -1 : 1, z = b.range(), V = jp(y), W = La({
    x: Number(z[0]) + 0.5 - V.start,
    y: 0
  }, I), M = La({
    x: Number(z[z.length - 1]) + 0.5 + V.end,
    y: 0
  }, I), B = (L ?? _f(b, g)).filter(function(U) {
    return !u || U !== 0 && U !== "0";
  }).map(function(U, Q) {
    return {
      value: U,
      index: Q
    };
  }), q = B.map(function(U) {
    var Q = U.value, ae = U.index, he = Of(j(Q));
    return {
      value: Q,
      index: ae,
      from: La({
        x: he,
        y: 0
      }, I),
      to: La({
        x: he,
        y: E * R
      }, I),
      formattedValue: _(Q, ae, B)
    };
  });
  return /* @__PURE__ */ i.createElement(be, {
    className: tt("visx-axis", a),
    innerRef: d,
    top: N,
    left: f
  }, n(kr({}, D, {
    axisFromPoint: W,
    axisToPoint: M,
    hideAxisLine: l,
    hideTicks: s,
    hideZero: u,
    horizontal: I,
    numTicks: g,
    orientation: x,
    rangePadding: y,
    scale: b,
    tickFormat: _,
    tickLength: E,
    tickPosition: j,
    tickSign: R,
    ticks: q
  })));
}
var Up = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, li.apply(this, arguments);
}
function Yp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Xp = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function Qp(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, r = e.tickLength, l = r === void 0 ? 8 : r, o = e.tickLabelProps, s = Yp(e, Up), c = typeof o == "function" ? o : li({}, Xp, o);
  return /* @__PURE__ */ i.createElement(Ti, li({
    axisClassName: tt("visx-axis-left", t),
    labelOffset: a,
    orientation: Et.left,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
var Zp = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function si() {
  return si = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, si.apply(this, arguments);
}
function Jp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Gp = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function ey(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, r = e.tickLength, l = r === void 0 ? 8 : r, o = e.tickLabelProps, s = Jp(e, Zp), c = typeof o == "function" ? o : si({}, Gp, o);
  return /* @__PURE__ */ i.createElement(Ti, si({
    axisClassName: tt("visx-axis-right", t),
    labelOffset: a,
    orientation: Et.right,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
var ty = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function ny(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var ay = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function iy(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, r = e.tickLength, l = r === void 0 ? 8 : r, o = e.tickLabelProps, s = ny(e, ty), c = typeof o == "function" ? o : ci({}, ay, o);
  return /* @__PURE__ */ i.createElement(Ti, ci({
    axisClassName: tt("visx-axis-top", t),
    labelOffset: a,
    orientation: Et.top,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
var ry = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function oy(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var ly = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Ba(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, r = e.tickLength, l = r === void 0 ? 8 : r, o = e.tickLabelProps, s = oy(e, ry), c = typeof o == "function" ? o : ui({}, ly, o);
  return /* @__PURE__ */ i.createElement(Ti, ui({
    axisClassName: tt("visx-axis-bottom", t),
    labelOffset: a,
    orientation: Et.bottom,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
function pa(e) {
  return e.split("-")[1];
}
function io(e) {
  return e === "y" ? "height" : "width";
}
function En(e) {
  return e.split("-")[0];
}
function ya(e) {
  return ["top", "bottom"].includes(En(e)) ? "x" : "y";
}
function Xl(e, t, n) {
  let { reference: a, floating: r } = e;
  const l = a.x + a.width / 2 - r.width / 2, o = a.y + a.height / 2 - r.height / 2, s = ya(t), c = io(s), u = a[c] / 2 - r[c] / 2, d = s === "x";
  let h;
  switch (En(t)) {
    case "top":
      h = { x: l, y: a.y - r.height };
      break;
    case "bottom":
      h = { x: l, y: a.y + a.height };
      break;
    case "right":
      h = { x: a.x + a.width, y: o };
      break;
    case "left":
      h = { x: a.x - r.width, y: o };
      break;
    default:
      h = { x: a.x, y: a.y };
  }
  switch (pa(t)) {
    case "start":
      h[s] -= u * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += u * (n && d ? -1 : 1);
  }
  return h;
}
function jc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ia(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Ic(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: r, platform: l, rects: o, elements: s, strategy: c } = e, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: h = "floating", altBoundary: f = !1, padding: p = 0 } = t, g = jc(p), v = s[f ? h === "floating" ? "reference" : "floating" : h], x = ia(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(v))) == null || n ? v : v.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)), boundary: u, rootBoundary: d, strategy: c })), m = h === "floating" ? { ...o.floating, x: a, y: r } : o.reference, y = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), b = await (l.isElement == null ? void 0 : l.isElement(y)) && await (l.getScale == null ? void 0 : l.getScale(y)) || { x: 1, y: 1 }, A = ia(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: y, strategy: c }) : m);
  return { top: (x.top - A.top + g.top) / b.y, bottom: (A.bottom - x.bottom + g.bottom) / b.y, left: (x.left - A.left + g.left) / b.x, right: (A.right - x.right + g.right) / b.x };
}
const sy = Math.min, cy = Math.max;
function wr(e, t, n) {
  return cy(e, sy(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const uy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function di(e) {
  return e.replace(/left|right|bottom|top/g, (t) => uy[t]);
}
function dy(e, t, n) {
  n === void 0 && (n = !1);
  const a = pa(e), r = ya(e), l = io(r);
  let o = r === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (o = di(o)), { main: o, cross: di(o) };
}
const fy = { start: "end", end: "start" };
function Qi(e) {
  return e.replace(/start|end/g, (t) => fy[t]);
}
const my = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: r, rects: l, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: u = !0, crossAxis: d = !0, fallbackPlacements: h, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...v } = e, x = En(a), m = En(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = h || (m || !g ? [di(o)] : function(_) {
      const S = di(_);
      return [Qi(_), S, Qi(S)];
    }(o));
    h || p === "none" || b.push(...function(_, S, $, I) {
      const j = pa(_);
      let R = function(z, V, W) {
        const M = ["left", "right"], B = ["right", "left"], q = ["top", "bottom"], U = ["bottom", "top"];
        switch (z) {
          case "top":
          case "bottom":
            return W ? V ? B : M : V ? M : B;
          case "left":
          case "right":
            return V ? q : U;
          default:
            return [];
        }
      }(En(_), $ === "start", I);
      return j && (R = R.map((z) => z + "-" + j), S && (R = R.concat(R.map(Qi)))), R;
    }(o, g, p, y));
    const A = [o, ...b], w = await Ic(t, v), E = [];
    let L = ((n = r.flip) == null ? void 0 : n.overflows) || [];
    if (u && E.push(w[x]), d) {
      const { main: _, cross: S } = dy(a, l, y);
      E.push(w[_], w[S]);
    }
    if (L = [...L, { placement: a, overflows: E }], !E.every((_) => _ <= 0)) {
      var P, N;
      const _ = (((P = r.flip) == null ? void 0 : P.index) || 0) + 1, S = A[_];
      if (S)
        return { data: { index: _, overflows: L }, reset: { placement: S } };
      let $ = (N = L.find((I) => I.overflows[0] <= 0)) == null ? void 0 : N.placement;
      if (!$)
        switch (f) {
          case "bestFit": {
            var D;
            const I = (D = L.map((j) => [j.placement, j.overflows.filter((R) => R > 0).reduce((R, z) => R + z, 0)]).sort((j, R) => j[1] - R[1])[0]) == null ? void 0 : D[0];
            I && ($ = I);
            break;
          }
          case "initialPlacement":
            $ = o;
        }
      if (a !== $)
        return { reset: { placement: $ } };
    }
    return {};
  } };
}, hy = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, r = await async function(l, o) {
      const { placement: s, platform: c, elements: u } = l, d = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), h = En(s), f = pa(s), p = ya(s) === "x", g = ["left", "top"].includes(h) ? -1 : 1, v = d && p ? -1 : 1, x = typeof o == "function" ? o(l) : o;
      let { mainAxis: m, crossAxis: y, alignmentAxis: b } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return f && typeof b == "number" && (y = f === "end" ? -1 * b : b), p ? { x: y * v, y: m * g } : { x: m * g, y: y * v };
    }(t, e);
    return { x: n + r.x, y: a + r.y, data: r };
  } };
}, py = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: r } = t, { mainAxis: l = !0, crossAxis: o = !1, limiter: s = { fn: (x) => {
      let { x: m, y } = x;
      return { x: m, y };
    } }, ...c } = e, u = { x: n, y: a }, d = await Ic(t, c), h = ya(En(r)), f = h === "x" ? "y" : "x";
    let p = u[h], g = u[f];
    if (l) {
      const x = h === "y" ? "bottom" : "right";
      p = wr(p + d[h === "y" ? "top" : "left"], p, p - d[x]);
    }
    if (o) {
      const x = f === "y" ? "bottom" : "right";
      g = wr(g + d[f === "y" ? "top" : "left"], g, g - d[x]);
    }
    const v = s.fn({ ...t, [h]: p, [f]: g });
    return { ...v, data: { x: v.x - n, y: v.y - a } };
  } };
};
function _t(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jt(e) {
  return _t(e).getComputedStyle(e);
}
const Ql = Math.min, ra = Math.max, fi = Math.round;
function qc(e) {
  const t = jt(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const r = e.offsetWidth, l = e.offsetHeight, o = fi(n) !== r || fi(a) !== l;
  return o && (n = r, a = l), { width: n, height: a, fallback: o };
}
function sn(e) {
  return Yc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Oa;
function Uc() {
  if (Oa)
    return Oa;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Oa = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Oa) : navigator.userAgent;
}
function It(e) {
  return e instanceof _t(e).HTMLElement;
}
function nn(e) {
  return e instanceof _t(e).Element;
}
function Yc(e) {
  return e instanceof _t(e).Node;
}
function Zl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof _t(e).ShadowRoot || e instanceof ShadowRoot;
}
function ki(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: r } = jt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(r);
}
function yy(e) {
  return ["table", "td", "th"].includes(sn(e));
}
function Cr(e) {
  const t = /firefox/i.test(Uc()), n = jt(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((r) => n.willChange.includes(r)) || ["paint", "layout", "strict", "content"].some((r) => {
    const l = n.contain;
    return l != null && l.includes(r);
  });
}
function Xc() {
  return !/^((?!chrome|android).)*safari/i.test(Uc());
}
function ro(e) {
  return ["html", "body", "#document"].includes(sn(e));
}
function Qc(e) {
  return nn(e) ? e : e.contextElement;
}
const Zc = { x: 1, y: 1 };
function $n(e) {
  const t = Qc(e);
  if (!It(t))
    return Zc;
  const n = t.getBoundingClientRect(), { width: a, height: r, fallback: l } = qc(t);
  let o = (l ? fi(n.width) : n.width) / a, s = (l ? fi(n.height) : n.height) / r;
  return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), { x: o, y: s };
}
function fa(e, t, n, a) {
  var r, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Qc(e);
  let c = Zc;
  t && (a ? nn(a) && (c = $n(a)) : c = $n(e));
  const u = s ? _t(s) : window, d = !Xc() && n;
  let h = (o.left + (d && ((r = u.visualViewport) == null ? void 0 : r.offsetLeft) || 0)) / c.x, f = (o.top + (d && ((l = u.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / c.y, p = o.width / c.x, g = o.height / c.y;
  if (s) {
    const v = _t(s), x = a && nn(a) ? _t(a) : a;
    let m = v.frameElement;
    for (; m && a && x !== v; ) {
      const y = $n(m), b = m.getBoundingClientRect(), A = getComputedStyle(m);
      b.x += (m.clientLeft + parseFloat(A.paddingLeft)) * y.x, b.y += (m.clientTop + parseFloat(A.paddingTop)) * y.y, h *= y.x, f *= y.y, p *= y.x, g *= y.y, h += b.x, f += b.y, m = _t(m).frameElement;
    }
  }
  return { width: p, height: g, top: f, right: h + p, bottom: f + g, left: h, x: h, y: f };
}
function an(e) {
  return ((Yc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function wi(e) {
  return nn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Jc(e) {
  return fa(an(e)).left + wi(e).scrollLeft;
}
function ma(e) {
  if (sn(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Zl(e) && e.host || an(e);
  return Zl(t) ? t.host : t;
}
function Gc(e) {
  const t = ma(e);
  return ro(t) ? t.ownerDocument.body : It(t) && ki(t) ? t : Gc(t);
}
function eu(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = Gc(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = _t(a);
  return r ? t.concat(l, l.visualViewport || [], ki(a) ? a : []) : t.concat(a, eu(a));
}
function Jl(e, t, n) {
  return t === "viewport" ? ia(function(a, r) {
    const l = _t(a), o = an(a), s = l.visualViewport;
    let c = o.clientWidth, u = o.clientHeight, d = 0, h = 0;
    if (s) {
      c = s.width, u = s.height;
      const f = Xc();
      (f || !f && r === "fixed") && (d = s.offsetLeft, h = s.offsetTop);
    }
    return { width: c, height: u, x: d, y: h };
  }(e, n)) : nn(t) ? ia(function(a, r) {
    const l = fa(a, !0, r === "fixed"), o = l.top + a.clientTop, s = l.left + a.clientLeft, c = It(a) ? $n(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * c.x, height: a.clientHeight * c.y, x: s * c.x, y: o * c.y };
  }(t, n)) : ia(function(a) {
    const r = an(a), l = wi(a), o = a.ownerDocument.body, s = ra(r.scrollWidth, r.clientWidth, o.scrollWidth, o.clientWidth), c = ra(r.scrollHeight, r.clientHeight, o.scrollHeight, o.clientHeight);
    let u = -l.scrollLeft + Jc(a);
    const d = -l.scrollTop;
    return jt(o).direction === "rtl" && (u += ra(r.clientWidth, o.clientWidth) - s), { width: s, height: c, x: u, y: d };
  }(an(e)));
}
function Gl(e) {
  return It(e) && jt(e).position !== "fixed" ? e.offsetParent : null;
}
function es(e) {
  const t = _t(e);
  let n = Gl(e);
  for (; n && yy(n) && jt(n).position === "static"; )
    n = Gl(n);
  return n && (sn(n) === "html" || sn(n) === "body" && jt(n).position === "static" && !Cr(n)) ? t : n || function(a) {
    let r = ma(a);
    for (; It(r) && !ro(r); ) {
      if (Cr(r))
        return r;
      r = ma(r);
    }
    return null;
  }(e) || t;
}
function gy(e, t, n) {
  const a = It(t), r = an(t), l = fa(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (a || !a && n !== "fixed")
    if ((sn(t) !== "body" || ki(r)) && (o = wi(t)), It(t)) {
      const c = fa(t, !0);
      s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop;
    } else
      r && (s.x = Jc(r));
  return { x: l.left + o.scrollLeft - s.x, y: l.top + o.scrollTop - s.y, width: l.width, height: l.height };
}
const xy = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: r } = e;
  const l = n === "clippingAncestors" ? function(u, d) {
    const h = d.get(u);
    if (h)
      return h;
    let f = eu(u).filter((x) => nn(x) && sn(x) !== "body"), p = null;
    const g = jt(u).position === "fixed";
    let v = g ? ma(u) : u;
    for (; nn(v) && !ro(v); ) {
      const x = jt(v), m = Cr(v);
      (g ? m || p : m || x.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = x : f = f.filter((y) => y !== v), v = ma(v);
    }
    return d.set(u, f), f;
  }(t, this._c) : [].concat(n), o = [...l, a], s = o[0], c = o.reduce((u, d) => {
    const h = Jl(t, d, r);
    return u.top = ra(h.top, u.top), u.right = Ql(h.right, u.right), u.bottom = Ql(h.bottom, u.bottom), u.left = ra(h.left, u.left), u;
  }, Jl(t, s, r));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const r = It(n), l = an(n);
  if (n === l)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((r || !r && a !== "fixed") && ((sn(n) !== "body" || ki(l)) && (o = wi(n)), It(n))) {
    const u = fa(n);
    s = $n(n), c.x = u.x + n.clientLeft, c.y = u.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - o.scrollLeft * s.x + c.x, y: t.y * s.y - o.scrollTop * s.y + c.y };
}, isElement: nn, getDimensions: function(e) {
  return It(e) ? qc(e) : e.getBoundingClientRect();
}, getOffsetParent: es, getDocumentElement: an, getScale: $n, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const r = this.getOffsetParent || es, l = this.getDimensions;
  return { reference: gy(t, await r(n), a), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => jt(e).direction === "rtl" }, ts = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), r = { platform: xy, ...n }, l = { ...r.platform, _c: a };
  return (async (o, s, c) => {
    const { placement: u = "bottom", strategy: d = "absolute", middleware: h = [], platform: f } = c, p = h.filter(Boolean), g = await (f.isRTL == null ? void 0 : f.isRTL(s));
    if (f == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), p.filter((w) => {
      let { name: E } = w;
      return E === "autoPlacement" || E === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    o && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let v = await f.getElementRects({ reference: o, floating: s, strategy: d }), { x, y: m } = Xl(v, u, g), y = u, b = {}, A = 0;
    for (let w = 0; w < p.length; w++) {
      const { name: E, fn: L } = p[w], { x: P, y: N, data: D, reset: _ } = await L({ x, y: m, initialPlacement: u, placement: y, strategy: d, middlewareData: b, rects: v, platform: f, elements: { reference: o, floating: s } });
      x = P ?? x, m = N ?? m, b = { ...b, [E]: { ...b[E], ...D } }, A > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), _ && A <= 50 && (A++, typeof _ == "object" && (_.placement && (y = _.placement), _.rects && (v = _.rects === !0 ? await f.getElementRects({ reference: o, floating: s, strategy: d }) : _.rects), { x, y: m } = Xl(v, y, g)), w = -1);
    }
    return { x, y: m, placement: y, strategy: d, middlewareData: b };
  })(e, t, { ...r, platform: l });
};
var Gt, An = { exports: {} }, ns = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Gt = ns, function() {
  var e = i, t = 60103, n = 60106;
  Gt.Fragment = 60107;
  var a = 60108, r = 60114, l = 60109, o = 60110, s = 60112, c = 60113, u = 60120, d = 60115, h = 60116, f = 60121, p = 60122, g = 60117, v = 60129, x = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    t = m("react.element"), n = m("react.portal"), Gt.Fragment = m("react.fragment"), a = m("react.strict_mode"), r = m("react.profiler"), l = m("react.provider"), o = m("react.context"), s = m("react.forward_ref"), c = m("react.suspense"), u = m("react.suspense_list"), d = m("react.memo"), h = m("react.lazy"), f = m("react.block"), p = m("react.server.block"), g = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), v = m("react.debug_trace_mode"), m("react.offscreen"), x = m("react.legacy_hidden");
  }
  var y = typeof Symbol == "function" && Symbol.iterator, b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function A(Y) {
    for (var re = arguments.length, O = new Array(re > 1 ? re - 1 : 0), ue = 1; ue < re; ue++)
      O[ue - 1] = arguments[ue];
    w("error", Y, O);
  }
  function w(Y, re, O) {
    var ue = b.ReactDebugCurrentFrame, se = "";
    if (N) {
      var ye = L(N.type), ve = N._owner;
      se += function(we, Te, Ae) {
        var xe = "";
        if (Te) {
          var ne = Te.fileName, ee = ne.replace(E, "");
          if (/^index\./.test(ee)) {
            var Be = ne.match(E);
            if (Be) {
              var de = Be[1];
              de && (ee = de.replace(E, "") + "/" + ee);
            }
          }
          xe = " (at " + ee + ":" + Te.lineNumber + ")";
        } else
          Ae && (xe = " (created by " + Ae + ")");
        return `
    in ` + (we || "Unknown") + xe;
      }(ye, N._source, ve && L(ve.type));
    }
    (se += ue.getStackAddendum()) !== "" && (re += "%s", O = O.concat([se]));
    var ge = O.map(function(we) {
      return "" + we;
    });
    ge.unshift("Warning: " + re), Function.prototype.apply.call(console[Y], console, ge);
  }
  var E = /^(.*)[\\\/]/;
  function L(Y) {
    if (Y == null)
      return null;
    if (typeof Y.tag == "number" && A("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof Y == "function")
      return Y.displayName || Y.name || null;
    if (typeof Y == "string")
      return Y;
    switch (Y) {
      case Gt.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case r:
        return "Profiler";
      case a:
        return "StrictMode";
      case c:
        return "Suspense";
      case u:
        return "SuspenseList";
    }
    if (typeof Y == "object")
      switch (Y.$$typeof) {
        case o:
          return "Context.Consumer";
        case l:
          return "Context.Provider";
        case s:
          return ue = Y, se = Y.render, ye = "ForwardRef", ve = se.displayName || se.name || "", ue.displayName || (ve !== "" ? ye + "(" + ve + ")" : ye);
        case d:
          return L(Y.type);
        case f:
          return L(Y.render);
        case h:
          var re = (O = Y)._status === 1 ? O._result : null;
          if (re)
            return L(re);
      }
    var O, ue, se, ye, ve;
    return null;
  }
  var P = {};
  b.ReactDebugCurrentFrame;
  var N = null;
  function D(Y) {
    N = Y;
  }
  var _, S, $, I = b.ReactCurrentOwner, j = Object.prototype.hasOwnProperty, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(Y, re, O, ue, se) {
    var ye, ve = {}, ge = null, we = null;
    for (ye in O !== void 0 && (ge = "" + O), function(xe) {
      if (j.call(xe, "key")) {
        var ne = Object.getOwnPropertyDescriptor(xe, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return xe.key !== void 0;
    }(re) && (ge = "" + re.key), function(xe) {
      if (j.call(xe, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(xe, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return xe.ref !== void 0;
    }(re) && (we = re.ref, function(xe, ne) {
      if (typeof xe.ref == "string" && I.current && ne && I.current.stateNode !== ne) {
        var ee = L(I.current.type);
        $[ee] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(I.current.type), xe.ref), $[ee] = !0);
      }
    }(re, se)), re)
      j.call(re, ye) && !R.hasOwnProperty(ye) && (ve[ye] = re[ye]);
    if (Y && Y.defaultProps) {
      var Te = Y.defaultProps;
      for (ye in Te)
        ve[ye] === void 0 && (ve[ye] = Te[ye]);
    }
    if (ge || we) {
      var Ae = typeof Y == "function" ? Y.displayName || Y.name || "Unknown" : Y;
      ge && function(xe, ne) {
        var ee = function() {
          _ || (_ = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        ee.isReactWarning = !0, Object.defineProperty(xe, "key", { get: ee, configurable: !0 });
      }(ve, Ae), we && function(xe, ne) {
        var ee = function() {
          S || (S = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        ee.isReactWarning = !0, Object.defineProperty(xe, "ref", { get: ee, configurable: !0 });
      }(ve, Ae);
    }
    return function(xe, ne, ee, Be, de, Ce, Oe) {
      var je = { $$typeof: t, type: xe, key: ne, ref: ee, props: Oe, _owner: Ce, _store: {} };
      return Object.defineProperty(je._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(je, "_self", { configurable: !1, enumerable: !1, writable: !1, value: Be }), Object.defineProperty(je, "_source", { configurable: !1, enumerable: !1, writable: !1, value: de }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
    }(Y, ge, we, se, ue, I.current, ve);
  }
  $ = {};
  var V, W = b.ReactCurrentOwner;
  function M(Y) {
    N = Y;
  }
  function B(Y) {
    return typeof Y == "object" && Y !== null && Y.$$typeof === t;
  }
  function q() {
    if (W.current) {
      var Y = L(W.current.type);
      if (Y)
        return `

Check the render method of \`` + Y + "`.";
    }
    return "";
  }
  b.ReactDebugCurrentFrame, V = !1;
  var U = {};
  function Q(Y, re) {
    if (Y._store && !Y._store.validated && Y.key == null) {
      Y._store.validated = !0;
      var O = function(se) {
        var ye = q();
        if (!ye) {
          var ve = typeof se == "string" ? se : se.displayName || se.name;
          ve && (ye = `

Check the top-level render call using <` + ve + ">.");
        }
        return ye;
      }(re);
      if (!U[O]) {
        U[O] = !0;
        var ue = "";
        Y && Y._owner && Y._owner !== W.current && (ue = " It was passed a child from " + L(Y._owner.type) + "."), M(Y), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, ue), M(null);
      }
    }
  }
  function ae(Y, re) {
    if (typeof Y == "object") {
      if (Array.isArray(Y))
        for (var O = 0; O < Y.length; O++) {
          var ue = Y[O];
          B(ue) && Q(ue, re);
        }
      else if (B(Y))
        Y._store && (Y._store.validated = !0);
      else if (Y) {
        var se = function(ge) {
          if (ge === null || typeof ge != "object")
            return null;
          var we = y && ge[y] || ge["@@iterator"];
          return typeof we == "function" ? we : null;
        }(Y);
        if (typeof se == "function" && se !== Y.entries)
          for (var ye, ve = se.call(Y); !(ye = ve.next()).done; )
            B(ye.value) && Q(ye.value, re);
      }
    }
  }
  function he(Y) {
    var re, O = Y.type;
    if (O != null && typeof O != "string") {
      if (typeof O == "function")
        re = O.propTypes;
      else {
        if (typeof O != "object" || O.$$typeof !== s && O.$$typeof !== d)
          return;
        re = O.propTypes;
      }
      if (re) {
        var ue = L(O);
        (function(se, ye, ve, ge, we) {
          var Te = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var Ae in se)
            if (Te(se, Ae)) {
              var xe = void 0;
              try {
                if (typeof se[Ae] != "function") {
                  var ne = Error((ge || "React class") + ": " + ve + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof se[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ne.name = "Invariant Violation", ne;
                }
                xe = se[Ae](ye, Ae, ge, ve, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ee) {
                xe = ee;
              }
              !xe || xe instanceof Error || (D(we), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", ve, Ae, typeof xe), D(null)), xe instanceof Error && !(xe.message in P) && (P[xe.message] = !0, D(we), A("Failed %s type: %s", ve, xe.message), D(null));
            }
        })(re, Y.props, "prop", ue, Y);
      } else
        O.PropTypes === void 0 || V || (V = !0, A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L(O) || "Unknown"));
      typeof O.getDefaultProps != "function" || O.getDefaultProps.isReactClassApproved || A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Ne(Y, re, O, ue, se, ye) {
    var ve = function(ee) {
      return typeof ee == "string" || typeof ee == "function" || ee === Gt.Fragment || ee === r || ee === v || ee === a || ee === c || ee === u || ee === x || typeof ee == "object" && ee !== null && (ee.$$typeof === h || ee.$$typeof === d || ee.$$typeof === l || ee.$$typeof === o || ee.$$typeof === s || ee.$$typeof === g || ee.$$typeof === f || ee[0] === p);
    }(Y);
    if (!ve) {
      var ge = "";
      (Y === void 0 || typeof Y == "object" && Y !== null && Object.keys(Y).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var we, Te = function(ee) {
        return ee !== void 0 ? `

Check your code at ` + ee.fileName.replace(/^.*[\\\/]/, "") + ":" + ee.lineNumber + "." : "";
      }(se);
      ge += Te || q(), Y === null ? we = "null" : Array.isArray(Y) ? we = "array" : Y !== void 0 && Y.$$typeof === t ? (we = "<" + (L(Y.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : we = typeof Y, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, ge);
    }
    var Ae = z(Y, re, O, se, ye);
    if (Ae == null)
      return Ae;
    if (ve) {
      var xe = re.children;
      if (xe !== void 0)
        if (ue)
          if (Array.isArray(xe)) {
            for (var ne = 0; ne < xe.length; ne++)
              ae(xe[ne], Y);
            Object.freeze && Object.freeze(xe);
          } else
            A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ae(xe, Y);
    }
    return Y === Gt.Fragment ? function(ee) {
      for (var Be = Object.keys(ee.props), de = 0; de < Be.length; de++) {
        var Ce = Be[de];
        if (Ce !== "children" && Ce !== "key") {
          M(ee), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ce), M(null);
          break;
        }
      }
      ee.ref !== null && (M(ee), A("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
    }(Ae) : he(Ae), Ae;
  }
  var Le = function(Y, re, O) {
    return Ne(Y, re, O, !1);
  }, Z = function(Y, re, O) {
    return Ne(Y, re, O, !0);
  };
  Gt.jsx = Le, Gt.jsxs = Z;
}(), An.exports = ns;
var Zi, tu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Zi = tu, function() {
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
            var o = t.apply(null, r);
            o && n.push(o);
          }
        } else if (l === "object") {
          if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
            n.push(r.toString());
            continue;
          }
          for (var s in r)
            e.call(r, s) && r[s] && n.push(s);
        }
      }
    }
    return n.join(" ");
  }
  Zi.exports ? (t.default = t, Zi.exports = t) : window.classNames = t;
}();
var as = tu.exports;
const is = (e, t, n) => {
  let a = null;
  return function(...r) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, r);
    }, t);
  };
}, vy = ({ content: e }) => An.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), by = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Ey = F.createContext({ getTooltipData: () => by });
function nu(e = "DEFAULT_TOOLTIP_ID") {
  return F.useContext(Ey).getTooltipData(e);
}
const rs = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: r = 10, strategy: l = "absolute", middlewares: o = [hy(Number(r)), my(), py({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = o;
  return n ? (s.push({ name: "arrow", options: c = { element: n, padding: 5 }, async fn(u) {
    const { element: d, padding: h = 0 } = c || {}, { x: f, y: p, placement: g, rects: v, platform: x } = u;
    if (d == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const m = jc(h), y = { x: f, y: p }, b = ya(g), A = io(b), w = await x.getDimensions(d), E = b === "y" ? "top" : "left", L = b === "y" ? "bottom" : "right", P = v.reference[A] + v.reference[b] - y[b] - v.floating[A], N = y[b] - v.reference[b], D = await (x.getOffsetParent == null ? void 0 : x.getOffsetParent(d));
    let _ = D ? b === "y" ? D.clientHeight || 0 : D.clientWidth || 0 : 0;
    _ === 0 && (_ = v.floating[A]);
    const S = P / 2 - N / 2, $ = m[E], I = _ - w[A] - m[L], j = _ / 2 - w[A] / 2 + S, R = wr($, j, I), z = pa(g) != null && j != R && v.reference[A] / 2 - (j < $ ? m[E] : m[L]) - w[A] / 2 < 0;
    return { [b]: y[b] - (z ? j < $ ? $ - j : I - j : 0), data: { [b]: R, centerOffset: j - R } };
  } }), ts(e, t, { placement: a, strategy: l, middleware: s }).then(({ x: u, y: d, placement: h, middlewareData: f }) => {
    var p, g;
    const v = { left: `${u}px`, top: `${d}px` }, { x, y: m } = (p = f.arrow) !== null && p !== void 0 ? p : { x: 0, y: 0 };
    return { tooltipStyles: v, tooltipArrowStyles: { left: x != null ? `${x}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", [(g = { top: "bottom", right: "left", bottom: "top", left: "right" }[h.split("-")[0]]) !== null && g !== void 0 ? g : "bottom"]: "-4px" } };
  })) : ts(e, t, { placement: "bottom", strategy: l, middleware: s }).then(({ x: u, y: d }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {} }));
  var c;
};
var fn = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const os = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: r, anchorSelect: l, place: o = "top", offset: s = 10, events: c = ["hover"], positionStrategy: u = "absolute", middlewares: d, wrapper: h, children: f = null, delayShow: p = 0, delayHide: g = 0, float: v = !1, noArrow: x = !1, clickable: m = !1, closeOnEsc: y = !1, style: b, position: A, afterShow: w, afterHide: E, content: L, html: P, isOpen: N, setIsOpen: D, activeAnchor: _, setActiveAnchor: S }) => {
  const $ = F.useRef(null), I = F.useRef(null), j = F.useRef(null), R = F.useRef(null), [z, V] = F.useState({}), [W, M] = F.useState({}), [B, q] = F.useState(!1), [U, Q] = F.useState(!1), ae = F.useRef(!1), he = F.useRef(null), { anchorRefs: Ne, setActiveAnchor: Le } = nu(e), Z = F.useRef(!1), [Y, re] = F.useState([]), O = F.useRef(!1);
  F.useLayoutEffect(() => (O.current = !0, () => {
    O.current = !1;
  }), []), F.useEffect(() => {
    if (!B) {
      const de = setTimeout(() => {
        Q(!1);
      }, 150);
      return () => {
        clearTimeout(de);
      };
    }
    return () => null;
  }, [B]);
  const ue = (de) => {
    O.current && (de && Q(!0), setTimeout(() => {
      O.current && (D == null || D(de), N === void 0 && q(de));
    }, 10));
  };
  F.useEffect(() => {
    if (N === void 0)
      return () => null;
    N && Q(!0);
    const de = setTimeout(() => {
      q(N);
    }, 10);
    return () => {
      clearTimeout(de);
    };
  }, [N]), F.useEffect(() => {
    B !== ae.current && (ae.current = B, B ? w == null || w() : E == null || E());
  }, [B]);
  const se = (de = g) => {
    R.current && clearTimeout(R.current), R.current = setTimeout(() => {
      Z.current || ue(!1);
    }, de);
  }, ye = (de) => {
    var Ce;
    if (!de)
      return;
    p ? (j.current && clearTimeout(j.current), j.current = setTimeout(() => {
      ue(!0);
    }, p)) : ue(!0);
    const Oe = (Ce = de.currentTarget) !== null && Ce !== void 0 ? Ce : de.target;
    S(Oe), Le({ current: Oe }), R.current && clearTimeout(R.current);
  }, ve = () => {
    m ? se(g || 100) : g ? se() : ue(!1), j.current && clearTimeout(j.current);
  }, ge = ({ x: de, y: Ce }) => {
    rs({ place: o, offset: s, elementReference: { getBoundingClientRect: () => ({ x: de, y: Ce, width: 0, height: 0, top: Ce, left: de, right: de, bottom: Ce }) }, tooltipReference: $.current, tooltipArrowReference: I.current, strategy: u, middlewares: d }).then((Oe) => {
      Object.keys(Oe.tooltipStyles).length && V(Oe.tooltipStyles), Object.keys(Oe.tooltipArrowStyles).length && M(Oe.tooltipArrowStyles);
    });
  }, we = (de) => {
    if (!de)
      return;
    const Ce = de, Oe = { x: Ce.clientX, y: Ce.clientY };
    ge(Oe), he.current = Oe;
  }, Te = (de) => {
    ye(de), g && se();
  }, Ae = (de) => {
    const Ce = document.querySelector(`[id='${r}']`);
    Ce != null && Ce.contains(de.target) || Y.some((Oe) => Oe.contains(de.target)) || ue(!1);
  }, xe = (de) => {
    de.key === "Escape" && ue(!1);
  }, ne = is(ye, 50), ee = is(ve, 50);
  F.useEffect(() => {
    var de, Ce;
    const Oe = new Set(Ne);
    Y.forEach((et) => {
      Oe.add({ current: et });
    });
    const je = document.querySelector(`[id='${r}']`);
    je && Oe.add({ current: je }), y && window.addEventListener("keydown", xe);
    const Ve = [];
    c.find((et) => et === "click") && (window.addEventListener("click", Ae), Ve.push({ event: "click", listener: Te })), c.find((et) => et === "hover") && (Ve.push({ event: "mouseenter", listener: ne }, { event: "mouseleave", listener: ee }, { event: "focus", listener: ne }, { event: "blur", listener: ee }), v && Ve.push({ event: "mousemove", listener: we }));
    const Qe = () => {
      Z.current = !0;
    }, ut = () => {
      Z.current = !1, ve();
    };
    return m && ((de = $.current) === null || de === void 0 || de.addEventListener("mouseenter", Qe), (Ce = $.current) === null || Ce === void 0 || Ce.addEventListener("mouseleave", ut)), Ve.forEach(({ event: et, listener: at }) => {
      Oe.forEach(($e) => {
        var He;
        (He = $e.current) === null || He === void 0 || He.addEventListener(et, at);
      });
    }), () => {
      var et, at;
      c.find(($e) => $e === "click") && window.removeEventListener("click", Ae), y && window.removeEventListener("keydown", xe), m && ((et = $.current) === null || et === void 0 || et.removeEventListener("mouseenter", Qe), (at = $.current) === null || at === void 0 || at.removeEventListener("mouseleave", ut)), Ve.forEach(({ event: $e, listener: He }) => {
        Oe.forEach((X) => {
          var yt;
          (yt = X.current) === null || yt === void 0 || yt.removeEventListener($e, He);
        });
      });
    };
  }, [U, Ne, Y, y, c]), F.useEffect(() => {
    let de = l ?? "";
    !de && e && (de = `[data-tooltip-id='${e}']`);
    const Ce = new MutationObserver((Oe) => {
      const je = [];
      Oe.forEach((Ve) => {
        if (Ve.type === "attributes" && Ve.attributeName === "data-tooltip-id" && Ve.target.getAttribute("data-tooltip-id") === e && je.push(Ve.target), Ve.type === "childList" && (_ && [...Ve.removedNodes].some((Qe) => !!Qe.contains(_) && (Q(!1), ue(!1), S(null), !0)), de))
          try {
            const Qe = [...Ve.addedNodes].filter((ut) => ut.nodeType === 1);
            je.push(...Qe.filter((ut) => ut.matches(de))), je.push(...Qe.flatMap((ut) => [...ut.querySelectorAll(de)]));
          } catch {
          }
      }), je.length && re((Ve) => [...Ve, ...je]);
    });
    return Ce.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Ce.disconnect();
    };
  }, [e, l, _]), F.useEffect(() => {
    A ? ge(A) : v ? he.current && ge(he.current) : rs({ place: o, offset: s, elementReference: _, tooltipReference: $.current, tooltipArrowReference: I.current, strategy: u, middlewares: d }).then((de) => {
      O.current && (Object.keys(de.tooltipStyles).length && V(de.tooltipStyles), Object.keys(de.tooltipArrowStyles).length && M(de.tooltipArrowStyles));
    });
  }, [B, _, L, P, o, s, u, A]), F.useEffect(() => {
    var de;
    const Ce = document.querySelector(`[id='${r}']`), Oe = [...Y, Ce];
    _ && Oe.includes(_) || S((de = Y[0]) !== null && de !== void 0 ? de : Ce);
  }, [r, Y, _]), F.useEffect(() => () => {
    j.current && clearTimeout(j.current), R.current && clearTimeout(R.current);
  }, []), F.useEffect(() => {
    let de = l;
    if (!de && e && (de = `[data-tooltip-id='${e}']`), de)
      try {
        const Ce = Array.from(document.querySelectorAll(de));
        re(Ce);
      } catch {
        re([]);
      }
  }, [e, l]);
  const Be = !!(P || L || f) && B && Object.keys(z).length > 0;
  return U ? An.exports.jsxs(h, { id: e, role: "tooltip", className: as("react-tooltip", fn.tooltip, fn[a], t, { [fn.show]: Be, [fn.fixed]: u === "fixed", [fn.clickable]: m }), style: { ...b, ...z }, ref: $, children: [P && An.exports.jsx(vy, { content: P }) || L || f, An.exports.jsx(h, { className: as("react-tooltip-arrow", fn.arrow, n, { [fn["no-arrow"]]: x }), style: W, ref: I })] }) : null;
}, Ay = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: r, className: l, classNameArrow: o, variant: s = "dark", place: c = "top", offset: u = 10, wrapper: d = "div", children: h = null, events: f = ["hover"], positionStrategy: p = "absolute", middlewares: g, delayShow: v = 0, delayHide: x = 0, float: m = !1, noArrow: y = !1, clickable: b = !1, closeOnEsc: A = !1, style: w, position: E, isOpen: L, setIsOpen: P, afterShow: N, afterHide: D }) => {
  const [_, S] = F.useState(a), [$, I] = F.useState(r), [j, R] = F.useState(c), [z, V] = F.useState(s), [W, M] = F.useState(u), [B, q] = F.useState(v), [U, Q] = F.useState(x), [ae, he] = F.useState(m), [Ne, Le] = F.useState(d), [Z, Y] = F.useState(f), [re, O] = F.useState(p), [ue, se] = F.useState(null), { anchorRefs: ye, activeAnchor: ve } = nu(e), ge = (Ae) => Ae == null ? void 0 : Ae.getAttributeNames().reduce((xe, ne) => {
    var ee;
    return ne.startsWith("data-tooltip-") && (xe[ne.replace(/^data-tooltip-/, "")] = (ee = Ae == null ? void 0 : Ae.getAttribute(ne)) !== null && ee !== void 0 ? ee : null), xe;
  }, {}), we = (Ae) => {
    const xe = { place: (ne) => {
      var ee;
      R((ee = ne) !== null && ee !== void 0 ? ee : c);
    }, content: (ne) => {
      S(ne ?? a);
    }, html: (ne) => {
      I(ne ?? r);
    }, variant: (ne) => {
      var ee;
      V((ee = ne) !== null && ee !== void 0 ? ee : s);
    }, offset: (ne) => {
      M(ne === null ? u : Number(ne));
    }, wrapper: (ne) => {
      var ee;
      Le((ee = ne) !== null && ee !== void 0 ? ee : d);
    }, events: (ne) => {
      const ee = ne == null ? void 0 : ne.split(" ");
      Y(ee ?? f);
    }, "position-strategy": (ne) => {
      var ee;
      O((ee = ne) !== null && ee !== void 0 ? ee : p);
    }, "delay-show": (ne) => {
      q(ne === null ? v : Number(ne));
    }, "delay-hide": (ne) => {
      Q(ne === null ? x : Number(ne));
    }, float: (ne) => {
      he(ne === null ? m : !!ne);
    } };
    Object.values(xe).forEach((ne) => ne(null)), Object.entries(Ae).forEach(([ne, ee]) => {
      var Be;
      (Be = xe[ne]) === null || Be === void 0 || Be.call(xe, ee);
    });
  };
  F.useEffect(() => {
    S(a);
  }, [a]), F.useEffect(() => {
    I(r);
  }, [r]), F.useEffect(() => {
    R(c);
  }, [c]), F.useEffect(() => {
    var Ae;
    const xe = new Set(ye);
    let ne = n;
    if (!ne && e && (ne = `[data-tooltip-id='${e}']`), ne)
      try {
        document.querySelectorAll(ne).forEach((Oe) => {
          xe.add({ current: Oe });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const ee = document.querySelector(`[id='${t}']`);
    if (ee && xe.add({ current: ee }), !xe.size)
      return () => null;
    const Be = (Ae = ue ?? ee) !== null && Ae !== void 0 ? Ae : ve.current, de = new MutationObserver((Oe) => {
      Oe.forEach((je) => {
        var Ve;
        if (!Be || je.type !== "attributes" || !(!((Ve = je.attributeName) === null || Ve === void 0) && Ve.startsWith("data-tooltip-")))
          return;
        const Qe = ge(Be);
        we(Qe);
      });
    }), Ce = { attributes: !0, childList: !1, subtree: !1 };
    if (Be) {
      const Oe = ge(Be);
      we(Oe), de.observe(Be, Ce);
    }
    return () => {
      de.disconnect();
    };
  }, [ye, ve, ue, t, n]);
  const Te = { id: e, anchorId: t, anchorSelect: n, className: l, classNameArrow: o, content: _, html: $, place: j, variant: z, offset: W, wrapper: Ne, events: Z, positionStrategy: re, middlewares: g, delayShow: B, delayHide: U, float: ae, noArrow: y, clickable: b, closeOnEsc: A, style: w, position: E, isOpen: L, setIsOpen: P, afterShow: N, afterHide: D, activeAnchor: ue, setActiveAnchor: (Ae) => se(Ae) };
  return h ? An.exports.jsx(os, { ...Te, children: h }) : An.exports.jsx(os, { ...Te });
}, oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: rd,
  curveBasisClosed: od,
  curveBasisOpen: ld,
  curveBundle: sd,
  curveCardinal: cd,
  curveCardinalClosed: ud,
  curveCardinalOpen: dd,
  curveCatmullRom: fd,
  curveCatmullRomClosed: md,
  curveCatmullRomOpen: hd,
  curveLinear: bi,
  curveLinearClosed: or,
  curveMonotoneX: za,
  curveMonotoneY: pd,
  curveNatural: yd,
  curveStep: gd,
  curveStepAfter: vd,
  curveStepBefore: xd
}, Symbol.toStringTag, { value: "Module" })), Sy = (e) => {
  var w;
  const { xScale: t, yScale: n, yMax: a, xMax: r, handleTooltipMouseOver: l, handleTooltipMouseOff: o, isDebug: s, children: c } = e;
  let { transformedData: u, config: d, handleLineType: h, parseDate: f, formatDate: p, formatNumber: g, seriesHighlight: v, colorScale: x, rawData: m } = F.useContext(Re);
  const y = d.brush.active && ((w = d.brush.data) != null && w.length) ? d.brush.data : u;
  if (!y)
    return;
  const b = (E) => d.xAxis.type === "date" ? t(f(E[d.xAxis.dataKey], !1)) : t(E[d.xAxis.dataKey]), A = (E, L, P = void 0) => n(E[P.dataKey]);
  return y && /* @__PURE__ */ i.createElement("svg", null, /* @__PURE__ */ i.createElement(qt, { component: "AreaChart" }, /* @__PURE__ */ i.createElement(be, { className: "area-chart", key: "area-wrapper", left: Number(d.yAxis.size) }, (d.runtime.areaSeriesKeys || d.series).map((E, L) => {
    let P = y.map((S) => ({
      [d.xAxis.dataKey]: S[d.xAxis.dataKey],
      [E.dataKey]: S[E.dataKey]
    })), N = oo[E.lineType], D = d.legend.behavior === "highlight" && v.length > 0 && v.indexOf(E.dataKey) === -1, _ = d.legend.behavior === "highlight" || v.length === 0 || v.indexOf(E.dataKey) !== -1;
    return d.xAxis.type === "date" ? y.map((S) => t(f(S[d.xAxis.dataKey]))) : y.map((S) => t(S[d.xAxis.dataKey])), /* @__PURE__ */ i.createElement(i.Fragment, { key: L }, /* @__PURE__ */ i.createElement(
      ln,
      {
        data: P,
        x: (S) => b(S),
        y: (S) => A(S, L, E),
        stroke: _ ? x ? x(d.runtime.seriesLabels ? d.runtime.seriesLabels[E.dataKey] : E.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: N,
        strokeDasharray: E.type ? h(E.type) : 0
      }
    ), /* @__PURE__ */ i.createElement(
      qd,
      {
        key: "area-chart",
        fill: _ ? x ? x(d.runtime.seriesLabels ? d.runtime.seriesLabels[E.dataKey] : E.dataKey) : "#000" : "transparent",
        fillOpacity: D ? 0.25 : 0.5,
        data: P,
        x: (S) => b(S),
        y: (S) => A(S, L, E),
        yScale: n,
        curve: N,
        strokeDasharray: E.type ? h(E.type) : 0
      }
    ));
  }), /* @__PURE__ */ i.createElement(Ct, { width: Number(r), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (E) => l(E, m), onMouseLeave: o }))));
}, Ty = F.memo(Sy), mi = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, ky = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: r, handleTooltipMouseOff: l, isDebug: o }) => {
  var v;
  let { transformedData: s, config: c, seriesHighlight: u, colorScale: d, rawData: h } = F.useContext(Re);
  const f = c.brush.active && ((v = c.brush.data) != null && v.length) ? c.brush.data : s;
  if (!f)
    return;
  const p = (x) => {
    if (c.xAxis.type === "categorical")
      return e(x);
    if (c.xAxis.type === "date") {
      let m = new Date(x);
      return e(m);
    }
  }, g = 2;
  return f && /* @__PURE__ */ i.createElement("svg", { height: Number(n) }, /* @__PURE__ */ i.createElement(qt, { component: "AreaChartStacked" }, /* @__PURE__ */ i.createElement(be, { className: "area-chart", key: "area-wrapper", left: Number(c.yAxis.size) + g / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ i.createElement(
    Jd,
    {
      data: f,
      keys: c.runtime.areaSeriesKeys.map((x) => x.dataKey) || c.series.map((x) => x.dataKey),
      x0: (x) => p(x.data[c.xAxis.dataKey]),
      y0: (x) => Number(t(x[0])),
      y1: (x) => Number(t(x[1])),
      curve: oo[mi[c.stackedAreaChartLineType]]
    },
    ({ stacks: x, path: m }) => x.map((y, b) => {
      let A = c.legend.behavior === "highlight" && u.length > 0 && u.indexOf(y.key) === -1, w = c.legend.behavior === "highlight" || u.length === 0 || u.indexOf(y.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          "path",
          {
            key: y.key,
            d: m(y) || "",
            strokeWidth: 2,
            stroke: w ? d ? d(c.runtime.seriesLabels ? c.runtime.seriesLabels[y.key] : y.key) : "#000" : "transparent",
            fillOpacity: A ? 0.25 : 0.5,
            fill: w ? d ? d(c.runtime.seriesLabels ? c.runtime.seriesLabels[y.key] : y.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ i.createElement(Ct, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (x) => r(x, h), onMouseLeave: l }))));
}, wy = F.memo(ky), ga = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: r, formatDate: l, setSeriesHighlight: o } = F.useContext(Re), { orientation: s } = e, [c, u] = F.useState(null), d = s === "horizontal", h = 1, f = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, p = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, g = e.yAxis.labelPlacement === "Below Bar", v = e.yAxis.displayNumbersOnBar, x = e.orientation === "horizontal" ? "yAxis" : "xAxis", m = e.barStyle === "rounded", y = e.visualizationSubType === "stacked", b = e.tipRounding, A = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", w = e.runtime.seriesKeys.length, E = { small: 16, medium: 18, large: 20 }, L = Object.keys(e.runtime.seriesLabels).length > 1;
  return F.useEffect(() => {
    s === "horizontal" && !e.yAxis.labelPlacement && a({
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
    e.barStyle === "lollipop" && !e.isLollipopChart && a({ ...e, isLollipopChart: !0 }), (m || e.barStyle === "flat") && a({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    generateIconSize: (z) => z < 4 ? 1 : z < 5 ? 4 : z < 10 ? 6 : z < 15 ? 7 : z < 20 || z < 90 ? 8 : 0,
    isHorizontal: d,
    barBorderWidth: h,
    lollipopBarWidth: f,
    lollipopShapeSize: p,
    isLabelBelowBar: g,
    displayNumbersOnBar: v,
    section: x,
    isRounded: m,
    isStacked: y,
    tipRounding: b,
    radius: A,
    stackCount: w,
    fontSize: E,
    hasMultipleSeries: L,
    applyRadius: (z) => {
      if (z == null || !m)
        return {};
      let V = {};
      return (y && z + 1 === w || !y) && (V = d ? { borderRadius: `0 ${A}  ${A}  0` } : { borderRadius: `${A} ${A} 0 0` }), !y && z === -1 && (V = d ? { borderRadius: `${A} 0  0 ${A} ` } : { borderRadius: ` 0  0 ${A} ${A}` }), b === "full" && y && z === 0 && w > 1 && (V = d ? { borderRadius: `${A} 0 0 ${A}` } : { borderRadius: `0 0 ${A} ${A}` }), b === "full" && (y && z === 0 && w === 1 || !y) && (V = { borderRadius: A }), V;
    },
    updateBars: (z) => {
      if (e.visualizationType !== "Bar" && !d)
        return z;
      const V = [...z];
      let W;
      const M = {
        stacked: e.barHeight,
        lollipop: f
      };
      y ? W = M.stacked : W = M[e.isLollipopChart ? "lollipop" : "stacked"] * w;
      const B = g ? E[e.fontSize] * 1.2 : 0;
      let q = Number(e.barSpace), U = V.length * (W + B + q);
      return d && (e.heights.horizontal = U), V.map((Q, ae) => {
        let he = 0;
        return Q.index !== 0 && (he = (W + q + B) * ae), { ...Q, y: he, height: W };
      });
    },
    assignColorsToValues: (z, V, W) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return W;
      const M = e.customColors ?? t[e.palette], B = n.map((ae) => ae[e.legend.colorCode]);
      let q = /* @__PURE__ */ new Map(), U = [];
      for (let ae = 0; ae < B.length; ae++)
        q.has(B[ae]) || q.set(B[ae], M[q.size % M.length]), U.push(q.get(B[ae]));
      for (; U.length < z; )
        U = U.concat(U);
      return U[V];
    },
    getHighlightedBarColorByValue: (z) => {
      const V = e == null ? void 0 : e.highlightedBarValues.find((W) => {
        if (W.value)
          return e.xAxis.type === "date" ? l(r(W.value)) === z : W.value === z;
      });
      return V != null && V.color ? V.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (z) => {
      const V = e == null ? void 0 : e.highlightedBarValues.filter((W) => {
        if (W.value)
          return e.xAxis.type === "date" ? l(r(W.value)) === z : W.value === z;
      })[0];
      return V != null && V.color ? V : !1;
    },
    getAdditionalColumn: (z, V) => {
      if (!V)
        return "";
      const W = e.columns, M = [];
      let B = "";
      const q = n.find((U) => U[e.xAxis.dataKey] === V) || {};
      return Object.keys(W).forEach((U) => {
        if (z && e.columns[U].series && e.columns[U].series !== z)
          return;
        const Q = {
          addColPrefix: e.columns[U].prefix,
          addColSuffix: e.columns[U].suffix,
          addColRoundTo: e.columns[U].roundToPlace ? e.columns[U].roundToPlace : "",
          addColCommas: e.columns[U].commas
        }, ae = Ts(q[e.columns[U].name], "left", !0, e, Q);
        e.columns[U].tooltips && M.push([e.columns[U].label, ae]);
      }), M.forEach((U) => {
        B += `${U[0]} : ${U[1]} <br/>`;
      }), B;
    },
    hoveredBar: c,
    setHoveredBar: u,
    onMouseOverBar: (z, V) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && V && o([V]), u(z);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && o([]);
    }
  };
}, xa = F.createContext(null), Cy = () => {
  var w;
  const { xScale: e, yScale: t, xMax: n, yMax: a } = F.useContext(xa), { transformedData: r, colorScale: l, seriesHighlight: o, config: s, formatNumber: c, formatDate: u, parseDate: d, setSharedFilter: h } = F.useContext(Re), { isHorizontal: f, barBorderWidth: p, applyRadius: g, hoveredBar: v, getAdditionalColumn: x, onMouseLeaveBar: m, onMouseOverBar: y } = ga(), { orientation: b } = s, A = s.brush.active && ((w = s.brush.data) != null && w.length) ? s.brush.data : r;
  return s.visualizationSubType === "stacked" && !f && /* @__PURE__ */ i.createElement(af, { data: A, keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys, x: (E) => E[s.runtime.xAxis.dataKey], xScale: e, yScale: t, color: l }, (E) => E.reverse().map(
    (L) => L.bars.map((P) => {
      let N = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(P.key) === -1, D = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(P.key) !== -1, _ = n / L.bars.length, S = _ * (s.barThickness || 0.8), $ = _ * (1 - (s.barThickness || 0.8)) / 2;
      const I = s.runtime.xAxis.type === "date" ? u(d(A[P.index][s.runtime.xAxis.dataKey])) : A[P.index][s.runtime.xAxis.dataKey], j = c(P.bar ? P.bar.data[P.key] : 0, "left");
      if (!j)
        return;
      const R = g(L.index), z = s.runtime.xAxis.label ? `${s.runtime.xAxis.label}: ${I}` : I, V = x(v), W = `${s.runtime.seriesLabels[P.key]}: ${j}`, M = `<ul>
                  <li class="tooltip-heading"">${z}</li>
                  <li class="tooltip-body ">${W}</li>
                  <li class="tooltip-body ">${V}</li>
                    </li></ul>`;
      return /* @__PURE__ */ i.createElement(be, { key: `${L.index}--${P.index}--${b}` }, /* @__PURE__ */ i.createElement("style", null, `
                           #barStack${L.index}-${P.index} rect,
                           #barStack${L.index}-${P.index} foreignObject div{
                            animation-delay: ${L.index * 0.5}s;
                            transform-origin: ${S / 2}px ${P.y + P.height}px
                          }
                        `), /* @__PURE__ */ i.createElement(be, { key: `bar-stack-${L.index}-${P.index}`, id: `barStack${L.index}-${P.index}`, className: "stack vertical" }, /* @__PURE__ */ i.createElement(De, { display: s.labels && D ? "block" : "none", opacity: N ? 0.5 : 1, x: _ * P.index + $, y: P.y - 5, fill: "#000", textAnchor: "middle" }, j), /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          onMouseOver: () => y(I, P.key),
          onMouseLeave: m,
          key: `bar-stack-${L.index}-${P.index}`,
          x: _ * P.index + $,
          y: P.y,
          width: S,
          height: P.height,
          display: D ? "block" : "none",
          "data-tooltip-html": M,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (B) => {
            B.preventDefault(), h && (P[s.xAxis.dataKey] = I, h(s.uid, P));
          }
        },
        /* @__PURE__ */ i.createElement(
          "div",
          {
            style: { transition: "all 0.2s linear", opacity: N ? 0.2 : 1, width: S, height: P.height, background: l(s.runtime.seriesLabels[P.key]), border: `${s.barHasBorder === "true" ? p : 0}px solid #333`, ...R }
          }
        )
      )));
    })
  ));
}, Py = () => {
  const { yMax: e, yScale: t, xScale: n } = F.useContext(xa), {
    animatedChart: a,
    colorScale: r,
    config: l,
    formatDate: o,
    formatNumber: s,
    getTextWidth: c,
    parseDate: u,
    seriesHighlight: d,
    setSharedFilter: h,
    transformedData: f
  } = F.useContext(Re), {
    applyRadius: p,
    barBorderWidth: g,
    displayNumbersOnBar: v,
    fontSize: x,
    getAdditionalColumn: m,
    hoveredBar: y,
    isHorizontal: b,
    isLabelBelowBar: A,
    onMouseLeaveBar: w,
    onMouseOverBar: E,
    updateBars: L
  } = ga(), { orientation: P, visualizationSubType: N } = l;
  return l.visualizationSubType === "stacked" && b && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(lf, { data: f, keys: l.runtime.barSeriesKeys || l.runtime.seriesKeys, height: e, y: (D) => D[l.runtime.yAxis.dataKey], xScale: n, yScale: t, color: r, offset: "none" }, (D) => D.map(
    (_) => L(_.bars).map((S, $) => {
      let I = l.legend.behavior === "highlight" && d.length > 0 && d.indexOf(S.key) === -1, j = l.legend.behavior === "highlight" || d.length === 0 || d.indexOf(S.key) !== -1;
      l.barHeight = Number(l.barHeight);
      let R = "#000000";
      const z = s(f[S.index][S.key], "left"), V = l.runtime.yAxis.type === "date" ? o(u(f[S.index][l.runtime.originalXAxis.dataKey])) : f[S.index][l.runtime.originalXAxis.dataKey], W = p(_.index);
      let M = l.runtime.yAxis.label ? `${l.runtime.yAxis.label}: ${V}` : V, B = c(z, `normal ${x[l.fontSize]}px sans-serif`);
      const q = m(y), U = `${l.runtime.seriesLabels[S.key]}: ${z}`, Q = `<ul>
                  <li class="tooltip-heading"">${M}</li>
                  <li class="tooltip-body ">${U}</li>
                  <li class="tooltip-body ">${q}</li>
                    </li></ul>`;
      return Rt.contrast(R, r(l.runtime.seriesLabels[S.key])) < 4.9 && (R = "#FFFFFF"), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                         #barStack${_.index}-${S.index} rect,
                         #barStack${_.index}-${S.index} foreignObject div{
                          animation-delay: ${_.index * 0.5}s;
                          transform-origin: ${S.x}px
                        }
                      `), /* @__PURE__ */ i.createElement(be, { key: $, id: `barStack${_.index}-${S.index}`, className: "stack horizontal" }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          onMouseOver: () => E(V, S.key),
          onMouseLeave: w,
          key: `barstack-horizontal-${_.index}-${S.index}-${$}`,
          className: `animated-chart group ${a ? "animated" : ""}`,
          x: S.x,
          y: S.y,
          style: { transition: "all 0.2s linear" },
          width: S.width,
          height: S.height,
          opacity: I ? 0.2 : 1,
          display: j ? "block" : "none",
          "data-tooltip-html": Q,
          "data-tooltip-id": `cdc-open-viz-tooltip-${l.runtime.uniqueId}`,
          onClick: (ae) => {
            ae.preventDefault(), h && (S[l.xAxis.dataKey] = z, h(l.uid, S));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { width: S.width, height: S.height, background: r(l.runtime.seriesLabels[S.key]), border: `${l.barHasBorder === "true" ? g : 0}px solid #333`, ...W } })
      ), P === "horizontal" && N === "stacked" && A && _.index === 0 && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        De,
        {
          x: `${S.x + (l.isLollipopChart ? 15 : 5)}`,
          y: S.y + S.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        V
      ), v && B < S.width && /* @__PURE__ */ i.createElement(
        De,
        {
          display: j ? "block" : "none",
          x: S.x + _.bars[S.index].width / 2,
          y: S.y + S.height / 2,
          fill: R,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        z
      )));
    })
  )));
}, Ci = (e, t) => {
  var v;
  const { formatDate: n, parseDate: a } = F.useContext(Re);
  let r = [], l = "", o = [], s = [];
  ((v = e.series) == null ? void 0 : v.length) > 0 && e.data ? (r = e.series[0], l = e.series[0].dataKey, o = e.highlightedBarValues, s = e.data.map((x) => x[e.xAxis.dataKey])) : (r = [], l = "", o = [], s = []);
  const c = (x, m) => {
    const y = [...e.highlightedBarValues];
    y[m].borderWidth = x.target.value, t({
      ...e,
      highlightedBarValues: y
    });
  }, u = (x, m) => {
    x.preventDefault();
    const y = [...e.highlightedBarValues];
    y[m].value = x.target.value, y[m].dataKey = l, t({
      ...e,
      highlightedBarValues: y
    });
  }, d = (x, m) => {
    x.preventDefault();
    const y = [...e.highlightedBarValues];
    y.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: y
    });
  }, h = (x, m) => {
    x.preventDefault();
    const y = [...e.highlightedBarValues];
    y.splice(m, 1), t({
      ...e,
      highlightedBarValues: y
    });
  }, f = (x, m) => {
    const y = [...e.highlightedBarValues];
    y[m].color = x.target.value, t({
      ...e
    });
  }, p = (x, m) => {
    const y = [...e.highlightedBarValues];
    y[m].legendLabel = x.target.value, t({
      ...e,
      copyOfHighlightedBarValues: y
    });
  }, g = () => {
  };
  return g.checkFontColor = (x, m, y) => {
    if (e.xAxis.type === "date") {
      if (g.formatDates(m).includes(x))
        return "#000";
    } else if (m.includes(x))
      return "#000";
    return y;
  }, g.formatDates = (x) => x.map((m) => m ? n(a(m)) : !1), g.findDuplicates = (x) => {
    const m = {};
    return x.filter((b) => {
      const { legendLabel: A } = b;
      return m[A] ? !1 : (m[A] = !0, !0);
    });
  }, {
    HighLightedBarUtils: g,
    highlightedSeries: r,
    highlightedSeriesKey: l,
    highlightedBarValues: o,
    highlightedSeriesValues: s,
    handleUpdateHighlightedBar: u,
    handleAddNewHighlightedBar: d,
    handleRemoveHighlightedBar: h,
    handleUpdateHighlightedBarColor: f,
    handleHighlightedBarLegendLabel: p,
    handleUpdateHighlightedBorderWidth: c
  };
};
function lo(e) {
  return ku({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const Ny = () => {
  var M;
  const { xScale: e, yScale: t, xMax: n, yMax: a, seriesScale: r } = F.useContext(xa), [l, o] = F.useState(0), [s, c] = F.useState(0), {
    applyRadius: u,
    assignColorsToValues: d,
    barBorderWidth: h,
    generateIconSize: f,
    getAdditionalColumn: p,
    getHighlightedBarByValue: g,
    getHighlightedBarColorByValue: v,
    lollipopBarWidth: x,
    lollipopShapeSize: m,
    onMouseLeaveBar: y,
    onMouseOverBar: b,
    section: A
  } = ga(), {
    colorScale: w,
    config: E,
    dashboardConfig: L,
    formatDate: P,
    formatNumber: N,
    getXAxisData: D,
    getYAxisData: _,
    isNumber: S,
    parseDate: $,
    seriesHighlight: I,
    setSharedFilter: j,
    transformedData: R
  } = F.useContext(Re), { HighLightedBarUtils: z } = Ci(E), V = E.brush.active && ((M = E.brush.data) != null && M.length) ? E.brush.data : R, W = (B, q) => {
    var ae;
    let U = null;
    const Q = f(q);
    return (ae = E.suppressedData) == null || ae.forEach((he) => {
      B.key === he.column && String(B.value) === String(he.value) && he.icon && (U = /* @__PURE__ */ i.createElement(lo, { color: "#000", size: Q }));
    }), U;
  };
  return E.visualizationSubType !== "stacked" && (E.visualizationType === "Bar" || E.visualizationType === "Combo") && E.orientation === "vertical" && /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement(
    Qs,
    {
      data: V,
      keys: E.runtime.barSeriesKeys || E.runtime.seriesKeys,
      height: a,
      x0: (B) => B[E.runtime.originalXAxis.dataKey],
      x0Scale: e,
      x1Scale: r,
      yScale: t,
      color: () => ""
    },
    (B) => B.map((q, U) => /* @__PURE__ */ i.createElement(be, { className: `bar-group-${q.index}-${q.x0}--${U} ${E.orientation}`, key: `bar-group-${q.index}-${q.x0}--${U}`, id: `bar-group-${q.index}-${q.x0}--${U}`, left: n / B.length * q.index }, q.bars.map((Q, ae) => {
      const he = E.useLogScale ? 0.1 : 0, Ne = 20;
      let Le = E.highlightedBarValues.map((T) => T.value).filter((T) => T !== void 0);
      Le = E.xAxis.type === "date" ? z.formatDates(Le) : Le;
      let Z = E.legend.behavior === "highlight" && I.length > 0 && I.indexOf(Q.key) === -1, Y = E.legend.behavior === "highlight" || I.length === 0 || I.indexOf(Q.key) !== -1, re = Math.abs(t(Q.value) - t(he)), O = Q.value >= 0 && S(Q.value) ? Q.y : t(0);
      const ue = Q.value >= 0 && S(Q.value) ? t(he) - Ne : t(0), se = E.suppressedData.some((T) => Q.key === T.column && String(Q.value) === String(T.value)) ? ue : O;
      let ye = n / B.length * (E.barThickness || 0.8), ve = n / B.length * (1 - (E.barThickness || 0.8)) / 2;
      E.isLollipopChart && (ve = n / B.length / 2 - x / 2);
      let ge = E.isLollipopChart ? x : ye / q.bars.length;
      o(ge), c(q.bars.length);
      let we = N(Q.value, "left"), Te = E.runtime[A].type === "date" ? P($(V[q.index][E.runtime.originalXAxis.dataKey])) : V[q.index][E.runtime.originalXAxis.dataKey];
      const Ae = Q.value < 0 ? -1 : ae, xe = u(Ae), ne = p(Q.key, V[q.index][E.runtime.originalXAxis.dataKey]);
      let ee = E.runtime.xAxis.label ? `${E.runtime.xAxis.label}: ${Te}` : Te;
      const Be = `${E.runtime.seriesLabels[Q.key]}: ${we}`, de = `<ul>
                  <li class="tooltip-heading">${ee}</li>
                  <li class="tooltip-body ">${Be}</li>
                  ${ne ? '<li class="tooltip-body ">' + ne + "</li>" : ""}
                    </li></ul>`;
      let Ce = "#000000";
      Ce = z.checkFontColor(we, Le, Ce);
      let Oe = E.runtime.seriesLabels && E.runtime.seriesLabels[Q.key] ? w(E.runtime.seriesLabels[Q.key]) : w(Q.key);
      Oe = d(B.length, q.index, Oe);
      const je = E.isLollipopChart && E.lollipopColorStyle === "regular", Ve = E.isLollipopChart && E.lollipopColorStyle === "two-tone", Qe = Le == null ? void 0 : Le.includes(Te), ut = v(Te), et = g(Te), at = Qe ? ut : E.barHasBorder === "true" ? "#000" : "transparent", $e = Qe ? et.borderWidth : E.isLollipopChart ? 0 : E.barHasBorder === "true" ? h : 0, He = E.suppressedData.some((T) => Q.key === T.column && Q.value === T.value) ? "" : we;
      let X = E.suppressedData.some((T) => Q.key === T.column && String(Q.value) === String(T.value)) ? Ne : re;
      const yt = E.suppressedData.some((T) => Q.key === T.column && Q.value === T.value) ? "none" : "block", Mt = (T, oe) => {
        let pe = T, ce = oe || "#f2f2f2";
        if (L && L.dashboard.sharedFilters) {
          const { sharedFilters: Pe } = L.dashboard;
          return pe = Pe.map((ke) => ke.setBy === E.uid ? ke.resetLabel === ke.active || ke.active === R[q.index][E.xAxis.dataKey] ? T : ce : T)[0], je && (pe = T), Ve && (pe = Rt(T).brighten(1)), Qe && (pe = "transparent"), pe;
        }
        return Ve && (pe = Rt(T).brighten(1)), Qe && (pe = "transparent"), pe;
      }, Pt = () => ge < 50 && ge > 15 ? ge / 2.5 : ge < 15 && ge > 5 ? ge / 6 : ge < 5 ? 0 : ge / 2, it = {
        position: "absolute",
        top: Q.value >= 0 && S(Q.value) ? -Ne : void 0,
        bottom: Q.value >= 0 && S(Q.value) ? void 0 : `-${Ne}px`,
        left: Pt()
      };
      E.isLollipopChart && (it.left = 0, it.transform = "translateX(0)");
      const dt = {
        background: Mt(Oe),
        borderColor: at,
        borderStyle: "solid",
        borderWidth: `${$e}px`,
        width: ge,
        height: X,
        ...xe,
        cursor: L ? "pointer" : "default"
      };
      return /* @__PURE__ */ i.createElement(be, { key: `${q.index}--${ae}` }, /* @__PURE__ */ i.createElement("style", null, `
                        .linear #barGroup${q.index} div,
                        .Combo #barGroup${q.index} div {
                          transform-origin: 0 ${se + X}px;
                        }
                      `), /* @__PURE__ */ i.createElement(be, { key: `bar-sub-group-${q.index}-${q.x0}-${se}--${ae}` }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          onMouseOver: () => b(Te, Q.key),
          onMouseLeave: y,
          style: { overflow: "visible", transition: "all 0.2s linear" },
          id: `barGroup${q.index}`,
          key: `bar-group-bar-${q.index}-${Q.index}-${Q.value}-${Q.key}`,
          x: ge * Q.index + ve,
          y: se,
          width: ge,
          height: X,
          opacity: Z ? 0.2 : 1,
          display: Y ? "block" : "none",
          "data-tooltip-html": de,
          "data-tooltip-id": `cdc-open-viz-tooltip-${E.runtime.uniqueId}`,
          onClick: (T) => {
            T.preventDefault(), j && (Q[E.xAxis.dataKey] = Te, j(E.uid, Q));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ i.createElement("div", { style: it }, W(Q, ge)), /* @__PURE__ */ i.createElement("div", { style: { ...dt } }))
      ), /* @__PURE__ */ i.createElement(
        De,
        {
          display: E.labels && Y ? "block" : "none",
          opacity: Z ? 0.5 : 1,
          x: ge * (Q.index + 0.5) + ve,
          y: se - 5,
          fill: Ce,
          textAnchor: "middle"
        },
        He
      ), E.isLollipopChart && E.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: yt,
          cx: ge * (q.bars.length - Q.index - 1) + ve + m / 3.5,
          cy: Q.y,
          r: m / 2,
          fill: Oe,
          key: `circle--${Q.index}`,
          "data-tooltip-html": de,
          "data-tooltip-id": `cdc-open-viz-tooltip-${E.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), E.isLollipopChart && E.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: yt,
          x: ve - x / 2,
          y: se,
          width: m,
          height: m,
          fill: Oe,
          key: `circle--${Q.index}`,
          "data-tooltip-html": de,
          "data-tooltip-id": `cdc-open-viz-tooltip-${E.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${m}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(E.confidenceKeys).length > 0 ? V.map((B) => {
    let q, U, Q, ae, he = 5;
    return q = e(D(B)), Q = t(_(B, E.confidenceKeys.lower)), ae = t(_(B, E.confidenceKeys.upper)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-v-${U}-${B[E.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${q - he} ${Q}
                    L${q + he} ${Q}
                    M${q} ${Q}
                    L${q} ${ae}
                    M${q - he} ${ae}
                    L${q + he} ${ae}`
      }
    );
  }) : "", E.regions && E.visualizationType !== "Combo" ? E.regions.map((B) => {
    if (!Object.keys(B).includes("from") || !Object.keys(B).includes("to"))
      return null;
    let q, U, Q;
    return E.xAxis.type === "date" && (q = e($(B.from).getTime()) - l * s / 2, U = e($(B.to).getTime()) + l * s / 2, Q = U - q), E.xAxis.type === "categorical" && (q = e(B.from), U = e(B.to), Q = U - q), !q || !U ? null : /* @__PURE__ */ i.createElement(be, { className: "regions", left: 0, key: B.label }, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: "#333",
        d: `M${q} -5
                          L${q} 5
                          M${q} 0
                          L${U} 0
                          M${U} -5
                          L${U} 5`
      }
    ), /* @__PURE__ */ i.createElement("rect", { x: q, y: 0, width: Q, height: a, fill: B.background, opacity: 0.3 }), /* @__PURE__ */ i.createElement(De, { x: q + Q / 2, y: 5, fill: B.color, verticalAnchor: "start", textAnchor: "middle" }, B.label));
  }) : "");
}, Ly = () => {
  const { xScale: e, yScale: t, yMax: n, seriesScale: a } = F.useContext(xa), { transformedData: r, colorScale: l, seriesHighlight: o, config: s, formatNumber: c, formatDate: u, parseDate: d, setSharedFilter: h, isNumber: f, getTextWidth: p, getYAxisData: g, getXAxisData: v } = F.useContext(Re), {
    isHorizontal: x,
    barBorderWidth: m,
    applyRadius: y,
    updateBars: b,
    assignColorsToValues: A,
    section: w,
    fontSize: E,
    isLabelBelowBar: L,
    displayNumbersOnBar: P,
    lollipopBarWidth: N,
    lollipopShapeSize: D,
    getHighlightedBarColorByValue: _,
    getHighlightedBarByValue: S,
    generateIconSize: $,
    getAdditionalColumn: I,
    hoveredBar: j,
    onMouseLeaveBar: R,
    onMouseOverBar: z
  } = ga(), { HighLightedBarUtils: V } = Ci(s), W = (M, B) => {
    var Q;
    let q = null;
    const U = $(B);
    return (Q = s.suppressedData) == null || Q.forEach((ae) => {
      M.key === ae.column && String(M.value) === String(ae.value) && ae.icon && (q = /* @__PURE__ */ i.createElement(lo, { color: "#000", size: U }));
    }), q;
  };
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement(
    Qs,
    {
      data: r,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: n,
      x0: (M) => M[s.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: a,
      yScale: e,
      color: () => ""
    },
    (M) => b(M).map((B, q) => /* @__PURE__ */ i.createElement(be, { className: `bar-group-${B.index}-${B.x0}--${q} ${s.orientation}`, key: `bar-group-${B.index}-${B.x0}--${q}`, id: `bar-group-${B.index}-${B.x0}--${q}`, top: B.y }, B.bars.map((U, Q) => {
      const ae = s.useLogScale ? 0.1 : 0;
      let he = s.highlightedBarValues.map((ie) => ie.value).filter((ie) => ie !== void 0);
      he = s.xAxis.type === "date" ? V.formatDates(he) : he;
      let Ne = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(U.key) === -1, Le = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(U.key) !== -1, Z = s.barHeight, Y = U.value >= 0 && f(U.value) ? U.y : t(ae);
      const re = U.value < 0 ? Math.abs(e(U.value)) : e(ae), O = Math.abs(e(U.value) - e(ae)), ue = 25, se = U.value >= 0 && f(U.value);
      let ye = U.value && s.suppressedData.some(({ column: ie, value: Ie }) => U.key === ie && U.value === Ie) ? ue : O;
      const ve = se ? e(0) : e(ae) - ue, ge = s.suppressedData.some((ie) => U.key === ie.column && String(U.value) === String(ie.value)) ? ve : re, we = c(U.value, "left"), Te = s.runtime[w].type === "date" ? u(d(r[B.index][s.runtime.originalXAxis.dataKey])) : r[B.index][s.runtime.originalXAxis.dataKey], Ae = se ? "above" : "below", xe = s.suppressedData.some((ie) => U.key === ie.column && U.value === ie.value) ? "" : we;
      let ee = p(Te, `normal ${E[s.fontSize]}px sans-serif`) < O - 5, Be = ee ? "end" : "start", de = "start", Ce = ee ? -5 : 5, Oe = 10;
      Ae === "below" && (Be = ee ? "start" : "end", Ce = ee ? 5 : -5, s.isLollipopChart && (de = "end", Oe = -10));
      const je = U.value < 0 ? -1 : Q, Ve = y(je);
      let Qe = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${Te}` : Te;
      const ut = I(j), et = `${s.runtime.seriesLabels[U.key]}: ${we}`, at = `<ul>
                  <li class="tooltip-heading"">${Qe}</li>
                  <li class="tooltip-body ">${et}</li>
                  <li class="tooltip-body ">${ut}</li>
                    </li></ul>`;
      let $e = "#000000";
      $e = V.checkFontColor(we, he, $e);
      let He = s.runtime.seriesLabels && s.runtime.seriesLabels[U.key] ? l(s.runtime.seriesLabels[U.key]) : l(U.key);
      He = A(M.length, B.index, He);
      const X = s.isLollipopChart && s.lollipopColorStyle === "regular", yt = s.isLollipopChart && s.lollipopColorStyle === "two-tone", Mt = he == null ? void 0 : he.includes(we), Pt = _(we), it = S(we), dt = Mt ? Pt : s.barHasBorder === "true" ? "#000" : "transparent", T = Mt ? it.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? m : 0, oe = s.suppressedData.some((ie) => U.key === ie.column && U.value === ie.value) ? "none" : "block";
      He && $e && Rt.contrast($e, He) < 4.9 && ($e = ee ? "#FFFFFF" : "#000000");
      const ce = {
        position: "absolute",
        top: (() => Number(Z) < 20 ? -4 : Number(Z) < 25 ? -1 : Number(Z) < 30 ? 2 : Number(Z) < 35 ? 4 : Number(Z) < 40 ? 5 : Number(Z) < 50 ? 9 : Number(Z) < 60 ? 10 : 12)(),
        left: ue * 1.2
      };
      s.isLollipopChart && (ce.top = -9);
      const ke = {
        background: (() => X ? He : yt ? Rt(He).brighten(1) : Mt ? "transparent" : He)(),
        borderColor: dt,
        borderStyle: "solid",
        borderWidth: T,
        width: ye,
        transition: "all 0.2s linear",
        height: s.isLollipopChart ? N : Z,
        ...Ve
      };
      return /* @__PURE__ */ i.createElement(be, { key: `${B.index}--${Q}` }, /* @__PURE__ */ i.createElement("style", null, `
                        .linear #barGroup${B.index} div,
                        .Combo #barGroup${B.index} div {
                          transform-origin: 0 ${Y + Z}px;
                        }
                      `), /* @__PURE__ */ i.createElement(be, { key: `bar-sub-group-${B.index}-${B.x0}-${Y}--${Q}` }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          onMouseOver: () => z(Te, U.key),
          onMouseLeave: R,
          id: `barGroup${B.index}`,
          key: `bar-group-bar-${B.index}-${U.index}-${U.value}-${U.key}`,
          x: ge,
          style: { overflow: "visible", ...ke },
          y: Z * U.index,
          height: s.isLollipopChart ? N : Z,
          width: ye,
          opacity: Ne ? 0.2 : 1,
          display: Le ? "block" : "none",
          "data-tooltip-html": at,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (ie) => {
            ie.preventDefault(), h && (U[s.xAxis.dataKey] = we, h(s.uid, U));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ i.createElement("div", { style: ce }, W(U, ye)), /* @__PURE__ */ i.createElement("div", { style: { ...ke } }))
      ), !s.isLollipopChart && P && /* @__PURE__ */ i.createElement(
        De,
        {
          display: Le ? "block" : "none",
          x: U.y,
          y: s.barHeight / 2 + s.barHeight * U.index,
          fill: $e,
          dx: Ce,
          verticalAnchor: "middle",
          textAnchor: Be
        },
        xe
      ), s.isLollipopChart && P && /* @__PURE__ */ i.createElement(
        De,
        {
          display: Le ? "block" : "none",
          x: U.y,
          y: 0,
          fill: "#000000",
          dx: Oe,
          textAnchor: de,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        xe
      ), L && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(De, { x: s.yAxis.hideAxis ? 0 : 5, y: B.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? u(d(r[B.index][s.runtime.originalXAxis.dataKey])) : x ? r[B.index][s.runtime.originalXAxis.dataKey] : c(r[B.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: oe,
          cx: U.y,
          cy: 0 + N / 2,
          r: D / 2,
          fill: He,
          key: `circle--${U.index}`,
          "data-tooltip-html": at,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: oe,
          x: U.y > 10 ? U.y - D / 2 : 0,
          y: 0 - N / 2,
          width: D,
          height: D,
          fill: He,
          key: `circle--${U.index}`,
          "data-tooltip-html": at,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${D}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? r.map((M) => {
    let B, q, U, Q = 5;
    return B = t(v(M)) - 0.75 * s.barHeight, q = e(g(M, s.confidenceKeys.upper)), U = e(g(M, s.confidenceKeys.lower)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-h-${B}-${M[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${U} ${B - Q}
                    L${U} ${B + Q}
                    M${U} ${B}
                    L${q} ${B}
                    M${q} ${B - Q}
                    L${q} ${B + Q} `
      }
    );
  }) : "");
}, _a = {
  Vertical: Ny,
  Horizontal: Ly,
  StackedVertical: Cy,
  StackedHorizontal: Py
}, Oy = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: r, handleTooltipMouseOver: l, handleTooltipMouseOff: o, handleTooltipClick: s }) => {
  const { transformedData: c, config: u } = F.useContext(Re), d = {
    xScale: e,
    yScale: t,
    xMax: a,
    yMax: r,
    seriesScale: n
  };
  return /* @__PURE__ */ i.createElement(qt, { component: "BarChart" }, /* @__PURE__ */ i.createElement(xa.Provider, { value: d }, /* @__PURE__ */ i.createElement(be, { left: parseFloat(u.runtime.yAxis.size) }, /* @__PURE__ */ i.createElement(_a.StackedVertical, null), /* @__PURE__ */ i.createElement(_a.StackedHorizontal, null), /* @__PURE__ */ i.createElement(_a.Vertical, null), /* @__PURE__ */ i.createElement(_a.Horizontal, null), /* @__PURE__ */ i.createElement(Ct, { key: "bars", display: u.tooltips.singleSeries ? "none" : "block", width: Number(a), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (h) => l(h, c), onMouseOut: o, onClick: (h) => s(h, c) }))));
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
function mn(e) {
  var t = e.x1, n = e.x2, a = e.y1, r = e.y2;
  return {
    x1: a,
    x2: r,
    y1: t,
    y2: n
  };
}
function au(e) {
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, r = a === void 0 ? 0 : a, l = e.className, o = e.max, s = e.min, c = e.firstQuartile, u = e.thirdQuartile, d = e.median, h = e.boxWidth, f = h === void 0 ? 10 : h, p = e.fill, g = e.fillOpacity, v = e.stroke, x = e.strokeWidth, m = e.rx, y = m === void 0 ? 2 : m, b = e.ry, A = b === void 0 ? 2 : b, w = e.valueScale, E = e.outliers, L = E === void 0 ? [] : E, P = e.horizontal, N = e.medianProps, D = N === void 0 ? {} : N, _ = e.maxProps, S = _ === void 0 ? {} : _, $ = e.minProps, I = $ === void 0 ? {} : $, j = e.boxProps, R = j === void 0 ? {} : j, z = e.outlierProps, V = z === void 0 ? {} : z, W = e.container, M = W === void 0 ? !1 : W, B = e.containerProps, q = B === void 0 ? {} : B, U = e.children, Q = P ? r : n, ae = Q + (f || 0) / 2, he = w.range(), Ne = w(s ?? 0), Le = w(c ?? 0), Z = w(d ?? 0), Y = w(u ?? 0), re = w(o ?? 0), O = {
    valueRange: he,
    center: ae,
    offset: Q,
    boxWidth: f,
    max: {
      x1: ae - (f || 0) / 4,
      x2: ae + (f || 0) / 4,
      y1: re,
      y2: re
    },
    maxToThird: {
      x1: ae,
      x2: ae,
      y1: re,
      y2: Y
    },
    median: {
      x1: Q,
      x2: Q + (f || 0),
      y1: Z,
      y2: Z
    },
    minToFirst: {
      x1: ae,
      x2: ae,
      y1: Le,
      y2: Ne
    },
    min: {
      x1: ae - (f || 0) / 4,
      x2: ae + (f || 0) / 4,
      y1: Ne,
      y2: Ne
    },
    box: {
      x1: Q,
      x2: f || 0,
      y1: Y,
      y2: Math.abs(Y - Le)
    },
    container: {
      x1: Q,
      x2: f || 0,
      y1: Math.min.apply(Math, he),
      y2: Math.abs(he[0] - he[1])
    }
  };
  return P && (O.max = mn(O.max), O.maxToThird = mn(O.maxToThird), O.box.y1 = Le, O.box = mn(O.box), O.median = mn(O.median), O.minToFirst = mn(O.minToFirst), O.min = mn(O.min), O.container = mn(O.container), O.container.y1 = Math.min.apply(Math, he)), U ? /* @__PURE__ */ i.createElement(i.Fragment, null, U(O)) : /* @__PURE__ */ i.createElement(be, {
    className: tt("visx-boxplot", l)
  }, L.map(function(ue, se) {
    var ye = P ? w(ue) : ae, ve = P ? ae : w(ue);
    return /* @__PURE__ */ i.createElement("circle", en({
      key: "visx-boxplot-outlier-" + se,
      className: "visx-boxplot-outlier",
      cx: ye,
      cy: ve,
      r: 4,
      stroke: v,
      strokeWidth: x,
      fill: p,
      fillOpacity: g
    }, V));
  }), /* @__PURE__ */ i.createElement("line", en({
    className: "visx-boxplot-max",
    x1: O.max.x1,
    y1: O.max.y1,
    x2: O.max.x2,
    y2: O.max.y2,
    stroke: v,
    strokeWidth: x
  }, S)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: O.maxToThird.x1,
    y1: O.maxToThird.y1,
    x2: O.maxToThird.x2,
    y2: O.maxToThird.y2,
    stroke: v,
    strokeWidth: x
  }), /* @__PURE__ */ i.createElement("rect", en({
    className: "visx-boxplot-box",
    x: O.box.x1,
    y: O.box.y1,
    width: O.box.x2,
    height: O.box.y2,
    stroke: v,
    strokeWidth: x,
    fill: p,
    fillOpacity: g,
    rx: y,
    ry: A
  }, R)), /* @__PURE__ */ i.createElement("line", en({
    className: "visx-boxplot-median",
    x1: O.median.x1,
    y1: O.median.y1,
    x2: O.median.x2,
    y2: O.median.y2,
    stroke: v,
    strokeWidth: x
  }, D)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: O.minToFirst.x1,
    y1: O.minToFirst.y1,
    x2: O.minToFirst.x2,
    y2: O.minToFirst.y2,
    stroke: v,
    strokeWidth: x
  }), /* @__PURE__ */ i.createElement("line", en({
    className: "visx-boxplot-min",
    x1: O.min.x1,
    y1: O.min.y1,
    x2: O.min.x2,
    y2: O.min.y2,
    stroke: v,
    strokeWidth: x
  }, I)), M && /* @__PURE__ */ i.createElement("rect", en({
    x: O.container.x1,
    y: O.container.y1,
    width: O.container.x2,
    height: O.container.y2,
    fillOpacity: "0"
  }, q)));
}
au.propTypes = {
  max: K.number,
  min: K.number,
  firstQuartile: K.number,
  thirdQuartile: K.number,
  median: K.number,
  boxWidth: K.number,
  fill: K.string,
  fillOpacity: K.oneOfType([K.number, K.string]),
  stroke: K.string,
  strokeWidth: K.oneOfType([K.number, K.string]),
  rx: K.number,
  ry: K.number,
  outliers: K.arrayOf(K.number),
  container: K.bool,
  children: K.func
};
const _y = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: a }) => {
  const { colorScale: r, transformedData: l, config: o, formatNumber: s, seriesHighlight: c, colorPalettes: u } = F.useContext(Re);
  let d = 4.5;
  const h = Object.keys(o.runtime.seriesLabels).length > 1, f = (p, g) => `<div>
    ${o.legend.showLegendValuesTooltip && o.runtime.seriesLabels && h ? `${o.runtime.seriesLabels[g] || ""}<br/>` : ""}
    ${o.xAxis.label}: ${s(p[o.xAxis.dataKey], "bottom")} <br/>
    ${o.yAxis.label}: ${s(p[g], "left")}
</div>`;
  return /* @__PURE__ */ i.createElement(be, { className: "scatter-plot", left: o.yAxis.size }, l.map((p, g) => o.runtime.seriesKeys.map((v, x) => {
    const m = o.legend.behavior === "highlight" && c.length > 0 && c.indexOf(v) === -1, y = o.legend.behavior === "highlight" || c.length === 0 || c.indexOf(v) !== -1, b = o.palette ? u[o.palette][x] : "#000";
    let A = {
      filter: "unset",
      opacity: 1,
      stroke: y ? "black" : ""
    };
    return /* @__PURE__ */ i.createElement(
      "circle",
      {
        key: `${g}-${x}`,
        r: d,
        cx: e(p[o.xAxis.dataKey]),
        cy: t(p[v]),
        fill: y ? b : "transparent",
        fillOpacity: m ? 0.25 : 1,
        style: A,
        "data-tooltip-html": f(p, v),
        "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`
      }
    );
  })));
};
function My({ height: e, xScale: t }) {
  const { transformedData: n, config: a, formatNumber: r, twoColorPalette: l, getTextWidth: o, updateConfig: s, parseDate: c, formatDate: u, currentViewport: d } = F.useContext(Re), { barStyle: h, tipRounding: f, roundingStyle: p, twoColor: g } = a, v = F.useRef([]), [x, m] = F.useState(window.innerWidth), y = p === "standard" ? "8px" : p === "shallow" ? "5px" : p === "finger" ? "15px" : "0px", b = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const A = Number(a.xAxis.target), w = a.series[0].dataKey, E = Number(t.domain()[1]), P = n.some((W) => W[w] < 0) || A > 0 || t.domain()[0] < 0, N = a.barHasBorder === "true" ? 1 : 0, D = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, _ = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, S = Math.max(t(0), Math.min(t(A), t(E))), $ = (W) => {
    if (W == null || h !== "rounded")
      return;
    let M = {};
    return W === "left" && (M = { borderRadius: `${y} 0 0 ${y}` }), W === "right" && (M = { borderRadius: `0 ${y} ${y} 0` }), f === "full" && (M = { borderRadius: y }), M;
  }, I = {
    calculate: function() {
      const M = n[0][w] < A ? "left" : "right", B = `${a.xAxis.targetLabel} ${r(a.xAxis.target || 0, "left")}`, q = o(B, `bold ${b[a.fontSize]}px sans-serif`);
      let U = a.isLollipopChart ? D / 2 : Number(a.barHeight) / 2, Q = 0, ae = 0, he = !1;
      M === "right" && (Q = -10, he = q - Q < S, ae = S - q), M === "left" && (Q = 10, he = t(E) - S > q + Q, ae = S), this.text = B, this.y = U, this.x = ae, this.padding = Q, this.showLabel = a.xAxis.showTargetLabel ? he : !1;
    }
  };
  I.calculate();
  const j = F.useRef(null), R = ao(j, {});
  F.useEffect(() => {
    const W = () => {
      m(window.innerWidth), v.current.forEach((M) => {
        M.style.transition = "none", M.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", W), () => {
      window.removeEventListener("resize", W);
    };
  }, []);
  const [z, V] = F.useState(!1);
  return F.useEffect(() => {
    R != null && R.isIntersecting && setTimeout(() => {
      V(!0);
    }, 100);
  }, [R == null ? void 0 : R.isIntersecting, a.animate]), F.useEffect(() => {
    v.current.forEach((W, M) => {
      if (a.animate) {
        const B = A / E * 100;
        W.style.opacity = "0", W.style.transform = `translate(${B / 1.07}%) scale(0, 1)`, setTimeout(() => {
          W.style.opacity = "1", W.style.transform = "translate(0) scale(1)", W.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        W.style.transition = "none", W.style.opacity = "0";
      a.animate || (W.style.transition = "none", W.style.opacity = "1");
    });
  }, [a.animate, a, z]), /* @__PURE__ */ i.createElement(qt, { component: "Deviation Bar" }, /* @__PURE__ */ i.createElement(be, { left: Number(a.xAxis.size) }, n.map((W, M) => {
    const B = Number(W[w]), q = a.isLollipopChart ? D : Number(a.barHeight), U = Number(a.barSpace), Q = Math.abs(t(B) - S), ae = t(B), he = B > A ? S : ae, Ne = B < A ? "left" : "right";
    let Le = 0;
    Le = M !== 0 ? (U + q + N) * M : Le;
    const Z = (U + q + N) * n.length;
    a.heights.horizontal = Z;
    const re = o(r(B, "left"), `normal ${b[a.fontSize]}px sans-serif`) < Q - 6, O = ae, ue = Le + q / 2, se = ae, ye = Le + q / 2, ve = ae, ge = Le - q / 2, we = $(Ne), [Te, Ae] = l[g.palette], xe = { left: Te, right: Ae }, ee = Rt.contrast("#000000", xe[Ne]) < 4.9 ? "#FFFFFF" : "#000000";
    let Be = Dy(a.isLollipopChart, re, _, ee);
    const de = r(B, "left"), Ce = a.runtime.yAxis.type === "date" ? u(c(n[M][a.runtime.originalXAxis.dataKey])) : n[M][a.runtime.originalXAxis.dataKey];
    let Oe = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${Ce}` : Ce, je = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${de}` : de;
    const Ve = `<div>
          ${Oe}<br />
          ${je}
            </div>`;
    return /* @__PURE__ */ i.createElement(be, { key: `deviation-bar-${a.orientation}-${w}-${M}` }, /* @__PURE__ */ i.createElement(
      "foreignObject",
      {
        ref: (Qe) => {
          v.current[M] = Qe;
        },
        x: he,
        y: Le,
        width: Q,
        height: q,
        "data-tooltip-html": Ve,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`
      },
      /* @__PURE__ */ i.createElement("div", { style: { width: Q, height: q, border: `${N}px solid #333`, backgroundColor: xe[Ne], ...we } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ i.createElement(De, { verticalAnchor: "middle", x: O, y: ue, ...Be[Ne] }, r(W[w], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: se, cy: ye, r: _ / 2, fill: xe[Ne], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ i.createElement("rect", { x: ve, y: ge, width: _, height: _, fill: xe[Ne], style: { opacity: 1, filter: "unset" } }));
  }), I.showLabel && /* @__PURE__ */ i.createElement(De, { fontWeight: "bold", dx: I.padding, verticalAnchor: "middle", x: I.x, y: I.y }, I.text), P && /* @__PURE__ */ i.createElement(Ue, { from: { x: S, y: 0 }, to: { x: S, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ i.createElement("foreignObject", { y: e / 2, ref: j }));
}
function Dy(e, t, n, a) {
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
const $y = ({ xScale: e, yScale: t, height: n, width: a, handleTooltipMouseOver: r, handleTooltipMouseOff: l }) => {
  var g;
  const { transformedData: o, rawData: s, config: c, seriesHighlight: u } = F.useContext(Re), { xAxis: d, yAxis: h, legend: f, runtime: p } = c;
  return o && /* @__PURE__ */ i.createElement(qt, { component: "ForecastingChart" }, /* @__PURE__ */ i.createElement(be, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(h.size) }, (g = p.forecastingSeriesKeys) == null ? void 0 : g.map((v, x) => !v || !v.stages ? !1 : v.stages.map((m, y) => {
    var L;
    const { behavior: b } = f, A = s.filter((P) => P[v.stageColumn] === m.key);
    let w = b === "highlight" && u.length > 0 && u.indexOf(m.key) === -1, E = b === "highlight" || u.length === 0 || u.indexOf(m.key) !== -1;
    return /* @__PURE__ */ i.createElement(be, { className: `forecasting-areas-combo-${x}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${x}` }, (L = v.confidenceIntervals) == null ? void 0 : L.map((P, N) => {
      const D = Wa[m.color] || Ln[m.color] || !1, _ = () => E && D[2] ? D[2] : "transparent", S = () => E && D[1] ? D[1] : "transparent";
      if (!(P.high === "" || P.low === ""))
        return /* @__PURE__ */ i.createElement(be, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${y}-${N}` }, /* @__PURE__ */ i.createElement(
          Kd,
          {
            curve: za,
            data: A,
            fill: _(),
            opacity: w ? 0.1 : 0.5,
            x: ($) => e(Date.parse($[d.dataKey])),
            y0: ($) => t($[P.low]),
            y1: ($) => t($[P.high])
          }
        ), N === 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ln, { data: A, x: ($) => Number(e(Date.parse($[d.dataKey]))), y: ($) => Number(t($[P.high])), curve: za, stroke: S(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ i.createElement(ln, { data: A, x: ($) => Number(e(Date.parse($[d.dataKey]))), y: ($) => Number(t($[P.low])), curve: za, stroke: S(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ i.createElement(be, { key: "tooltip-hover-section" }, /* @__PURE__ */ i.createElement(Ct, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (v) => r(v, o), onMouseOut: l }))));
};
function Ha(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Pi(e, t) {
  const n = e.series.every(({ type: f }) => f === "Bar"), a = e.series.every(({ type: f }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(f)), r = (f) => (p) => f.reduce((g, v) => isNaN(Number(p[v])) ? g : g + Number(p[v]), 0), l = () => {
    let f = Math.max(...t.map((p) => Math.max(...e.runtime.seriesKeys.map((g) => Ha(p[g]) ? Number(c(p[g])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const p = t.map(r(e.runtime.seriesKeys)).filter((g) => !isNaN(g));
      f = Math.max(...p);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const p = t.map(r(e.runtime.seriesKeys));
      f = Math.max(...p);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (f = Math.max(...t.map((p) => Ha(p[e.series.dataKey]) ? Number(c(p[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const p = t.map(r(e.runtime.barSeriesKeys)), g = Math.max(...t.map((x) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(c(x[m])))))), v = Math.max(...p);
      f = Math.max(v, g);
    }
    return f;
  }, o = () => {
    const f = Math.min(...t.map((p) => Math.min(...e.runtime.seriesKeys.map((g) => Ha(p[g]) ? Number(c(p[g])) : 1 / 0))));
    return String(f);
  }, s = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((f) => t.some((p) => p[f] >= 0)) : !1, c = (f) => f === null || f === "" ? "" : typeof f == "string" ? f.replace(/[,$]/g, "") : f, u = Number(l()), d = Number(o()), h = s();
  return { minValue: d, maxValue: u, existPositiveValue: h, isAllLine: a };
}
function so({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var f, p, g, v;
  const r = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((x) => x.axis === "Right").map((x) => x.dataKey);
  let { minValue: o } = Pi(e, n);
  const s = (x) => {
    if (!x)
      return [0];
    let m = [];
    return x.map((y, b) => m = [...m, ...n.map((A) => Number(A[y]))]), m;
  };
  let c = Math.max.apply(null, s(l));
  e.yAxis.rightMax > c && (c = e.yAxis.rightMax), e.yAxis.rightMin < o && (o = e.yAxis.rightMin);
  const u = ((p = (f = e.runtime) == null ? void 0 : f.barSeriesKeys) == null ? void 0 : p.length) > 0, d = ((v = (g = e.runtime) == null ? void 0 : g.lineSeriesKeys) == null ? void 0 : v.length) > 0;
  return (u || d) && o > 0 && (o = 0), { yScaleRight: pt({
    domain: [o, c],
    range: [t, 0]
  }), hasRightAxis: r };
}
const zy = (e, t, n) => {
  const a = n.preliminaryData.filter((c) => c.seriesKey && c.column && c.value && c.type && c.style), r = (c) => a.find((u) => u.seriesKey === e && c[u.column] === u.value && u.type === "effect"), l = (c, u, d) => ({
    data: c.filter(Boolean),
    // Filter out any null/undefined points
    dashed: u,
    lineType: d
  });
  let o = [], s = [];
  return t.forEach((c, u) => {
    const d = r(c), h = t[u + 1], f = h && r(h);
    if (d) {
      s.length > 0 && (o.push(l(s, !1, "none")), s = []);
      const p = u > 0 ? [t[u - 1], c, h] : [c, h];
      o.push(l(p, !0, d.style)), f && u++;
    } else
      s.push(c);
  }), s.length > 0 && o.push(l(s, !1, "none")), o;
}, Ry = (e, t, n) => {
  const a = e.filter((l) => l.style === "Open Circles" && l.type === "effect").map((l) => ({ column: l.column, value: l.value, seriesKey: l.seriesKey }));
  let r = [];
  return t.forEach((l, o) => {
    a.some((s) => l[s.column] === s.value && s.seriesKey === n) && (o > 0 && r.push(t[o - 1]), r.push(l), o < t.length - 1 && r.push(t[o + 1]));
  }), r;
}, ls = (e) => {
  var x, m, y, b, A, w;
  const { config: t, d: n, displayArea: a, seriesKey: r, tooltipData: l, xScale: o, yScale: s, colorScale: c, parseDate: u, yScaleRight: d, data: h, circleData: f } = e, { lineDatapointStyle: p } = t, g = (x = t == null ? void 0 : t.series.filter((E) => E.dataKey === r)) == null ? void 0 : x[0];
  if (p === "hidden")
    return /* @__PURE__ */ i.createElement(i.Fragment, null);
  const v = (E, L, P, N, D) => {
    const _ = P.runtime.seriesLabels || [];
    let S;
    return E ? S = L(_[N] || D) : S = "transparent", P.lineDatapointColor === "Lighter than Line" && S !== "transparent" && S && (S = Rt(S).brighten(1)), S;
  };
  if (p === "always show")
    return (f == null ? void 0 : f.some((L) => L[t.xAxis.dataKey] === n[t.xAxis.dataKey] && L[r] === n[r])) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
      "circle",
      {
        cx: t.xAxis.type === "categorical" ? o(n[t.xAxis.dataKey]) : o(u(n[t.xAxis.dataKey])),
        cy: g.axis === "Right" ? d(n[g.dataKey]) : s(n[g.dataKey]),
        r: 4.5,
        opacity: n[r] ? 1 : 0,
        fillOpacity: 1,
        fill: v(a, c, t, r, r),
        style: { filter: "unset", opacity: 1 }
      }
    );
  if (p === "hover") {
    if (!l || !r || !l.data)
      return;
    let E = (y = (m = l == null ? void 0 : l.data) == null ? void 0 : m[0]) == null ? void 0 : y[1];
    if (!E)
      return;
    let L, P = l.data.filter((_) => _[0] === r), N = (b = P == null ? void 0 : P[0]) == null ? void 0 : b[0], D = (A = P == null ? void 0 : P[0]) == null ? void 0 : A[2];
    return N ? (l == null || l.data.indexOf(N), L = (w = h == null ? void 0 : h.find((_) => _[t == null ? void 0 : t.xAxis.dataKey] === E)) == null ? void 0 : w[r], l == null ? void 0 : l.data.map((_, S) => (t.runtime.seriesLabelsAll.indexOf(E), isNaN(L) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : (f == null ? void 0 : f.some((I) => I[t.xAxis.dataKey] === E)) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
      "circle",
      {
        cx: t.xAxis.type === "categorical" ? o(E) : o(u(E)),
        cy: D === "right" ? d(L) : s(L),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: v(a, c, t, N, r),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(_)}--${S}`
      }
    )))) : void 0;
  }
  return null;
}, ss = (e) => {
  const {
    getXAxisData: t,
    getYAxisData: n,
    handleTooltipClick: a,
    handleTooltipMouseOff: r,
    handleTooltipMouseOver: l,
    tooltipData: o,
    xMax: s,
    xScale: c,
    yMax: u,
    yScale: d
  } = e, {
    colorScale: h,
    config: f,
    formatNumber: p,
    handleLineType: g,
    isNumber: v,
    parseDate: x,
    seriesHighlight: m,
    tableData: y,
    transformedData: b,
    updateConfig: A,
    rawData: w
  } = F.useContext(Re), { yScaleRight: E } = so({ config: f, yMax: u, data: b, updateConfig: A });
  if (!l)
    return;
  const { lineDatapointStyle: L, showLineSeriesLabels: P, legend: N } = f;
  return /* @__PURE__ */ i.createElement(qt, { component: "LineChart" }, /* @__PURE__ */ i.createElement(be, { left: f.runtime.yAxis.size ? parseInt(f.runtime.yAxis.size) : 66 }, " ", (f.runtime.lineSeriesKeys || f.runtime.seriesKeys).map((D, _) => {
    let S = f.series.filter((V) => V.dataKey === D)[0].type;
    const $ = f.series.filter((V) => V.dataKey === D), I = $[0].axis ? $[0].axis : "left";
    let j = N.behavior === "highlight" || m.length === 0 || m.indexOf(D) !== -1;
    const R = zy(D, w, f), z = Ry(f.preliminaryData, w, D);
    return /* @__PURE__ */ i.createElement(
      be,
      {
        key: `series-${D}`,
        opacity: N.behavior === "highlight" && m.length > 0 && m.indexOf(D) === -1 ? 0.5 : 1,
        display: N.behavior === "highlight" || m.length === 0 && !N.dynamicLegend || m.indexOf(D) !== -1 ? "block" : "none"
      },
      b.map((V, W) => {
        const M = f.series.find(({ dataKey: ae }) => ae === D), { axis: B } = M, q = Object.keys(f.runtime.seriesLabels).length > 1, U = B === "Right" ? "rightLabel" : "label";
        let Q = f.runtime.yAxis[U];
        return q || (Q = f.isLegendValue ? f.runtime.seriesLabels[D] : Q), V[D] !== void 0 && V[D] !== "" && V[D] !== null && v(V[D]) && /* @__PURE__ */ i.createElement(be, { key: `series-${D}-point-${W}`, className: "checkwidth" }, /* @__PURE__ */ i.createElement(Ct, { key: "bars", width: Number(s), height: Number(u), fill: "transparent", fillOpacity: 0.05, onMouseMove: (ae) => l(ae, y), onMouseOut: r, onClick: (ae) => a(ae, b) }), /* @__PURE__ */ i.createElement(De, { display: f.labels ? "block" : "none", x: c(t(V)), y: I === "Right" ? E(n(V, D)) : d(n(V, D)), fill: "#000", textAnchor: "middle" }, p(V[D], "left")), (L === "hidden" || L === "always show") && /* @__PURE__ */ i.createElement(
          ls,
          {
            circleData: z,
            data: b,
            d: V,
            config: f,
            seriesKey: D,
            displayArea: j,
            tooltipData: o,
            xScale: c,
            yScale: d,
            colorScale: h,
            parseDate: x,
            yScaleRight: E,
            seriesAxis: I,
            key: `line-circle--${W}`
          }
        ));
      }),
      /* @__PURE__ */ i.createElement(i.Fragment, null, L === "hover" && /* @__PURE__ */ i.createElement(ls, { circleData: z, data: b, config: f, seriesKey: D, displayArea: j, tooltipData: o, xScale: c, yScale: d, colorScale: h, parseDate: x, yScaleRight: E, seriesAxis: I })),
      R.map((V, W) => /* @__PURE__ */ i.createElement(
        ln,
        {
          key: W,
          curve: oo[$[0].lineType],
          data: V.data,
          x: (M) => c(t(M)),
          y: (M) => I === "Right" ? E(n(M, D)) : d(n(M, D)),
          stroke: h ? h(f.runtime.seriesLabels[D]) : "#000",
          strokeWidth: 2,
          strokeOpacity: 1,
          strokeDasharray: V.dashed && V.lineType ? g(V.lineType) : S ? g(S) : 0,
          defined: (M, B) => M[D] !== "" && M[D] !== null && M[D] !== void 0
        }
      )),
      z.map((V, W) => /* @__PURE__ */ i.createElement(
        "circle",
        {
          key: W,
          cx: c(t(V)),
          cy: d(n(V, D)),
          r: 4.5,
          stroke: h ? h(f.runtime.seriesLabels[D]) : "#000",
          fill: "transparent"
        }
      )),
      f.animate && /* @__PURE__ */ i.createElement(
        ln,
        {
          className: "animation",
          curve: $.lineType,
          data: b,
          x: (V) => c(t(V)),
          y: (V) => I === "Right" ? E(n(V, D)) : d(n(V, D)),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: S ? g(S) : 0,
          defined: (V, W) => v(V[f.runtime.seriesLabels[D]])
        }
      ),
      P && (f.runtime.lineSeriesKeys || f.runtime.seriesKeys).map((V) => {
        let W;
        for (let M = b.length - 1; M >= 0; M--)
          if (b[M][V]) {
            W = b[M];
            break;
          }
        return W ? /* @__PURE__ */ i.createElement("text", { x: c(t(W)) + 5, y: d(n(W, V)), alignmentBaseline: "middle", fill: f.colorMatchLineSeriesLabels && h ? h(f.runtime.seriesLabels[V] || V) : "black" }, f.runtime.seriesLabels[V] || V) : /* @__PURE__ */ i.createElement(i.Fragment, null);
      })
    );
  }), f.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ i.createElement(De, { x: s / 2, y: u / 2, fill: "black", textAnchor: "middle", color: "black" }, f.legend.dynamicLegendChartMessage)));
}, Fy = (e) => {
  const { rawData: t, updateConfig: n } = F.useContext(Re), { xScale: a, yScale: r, config: l, height: o, width: s, handleTooltipMouseOff: c, handleTooltipMouseOver: u } = e, { forestPlot: d } = l, h = l.xAxis.tickWidthMax + 10;
  F.useEffect(() => {
    l.legend.hide || n({
      ...l,
      legend: {
        ...l.legend,
        hide: !0
      },
      xAxis: {
        ...l.xAxis,
        size: 0
      }
    });
  }, []), F.useEffect(() => {
    try {
      const y = ["estimateField", "lower", "upper", "estimateRadius"], b = l, A = 10;
      for (let w = 0; w < A; w++)
        y.forEach((E) => {
          var L;
          l.forestPlot[E] && l.forestPlot[E] !== ((L = b.columns[l.forestPlot[`additionalColumn${w}`]]) == null ? void 0 : L.name) && (delete b.columns[`additionalColumn${w}`], b.columns[l.forestPlot[E]] = {}, b.columns[l.forestPlot[E]].dataKey = b.forestPlot[E], b.columns[l.forestPlot[E]].name = b.forestPlot[E], b.columns[l.forestPlot[E]].dataTable = !0, b.columns[l.forestPlot[E]].tooltips = !0, b.columns[l.forestPlot[E]].label = b.forestPlot[E]);
        });
      b.table.showVertical && (b.table.indexLabel = l.xAxis.dataKey), n(b);
    } catch (y) {
      console.log(y.message);
    }
  }, []);
  const f = l.data.find((y) => y[l.xAxis.dataKey] === l.forestPlot.pooledResult.column), p = f ? [
    { x: a(f[l.forestPlot.lower]), y: o - Number(l.forestPlot.rowHeight) },
    { x: a(f[l.forestPlot.estimateField]), y: o - d.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: a(f[l.forestPlot.upper]), y: o - Number(l.forestPlot.rowHeight) },
    { x: a(f[l.forestPlot.estimateField]), y: o + d.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: a(f[l.forestPlot.lower]), y: o - Number(l.forestPlot.rowHeight) }
  ] : [], g = l.forestPlot.rowHeight, v = [
    { x: 0, y: g },
    { x: s, y: g }
  ], x = [
    { x: 0, y: o },
    { x: s, y: o }
  ], m = Object.entries(l.columns).map((y) => y[1]).filter((y) => y.forestPlot === !0);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, null, d.title && /* @__PURE__ */ i.createElement(De, { className: "forest-plot--title", x: d.type === "Linear" ? a(0) : a(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: cn(l.fontSize), fill: "black" }, d.title), d.lineOfNoEffect.show && d.type === "Linear" && /* @__PURE__ */ i.createElement(Ue, { from: { x: a(0), y: 0 + g }, to: { x: a(0), y: o }, className: "forestplot__line-of-no-effect", stroke: d.regression.baseLineColor || "black" }), d.lineOfNoEffect.show && d.type === "Logarithmic" && /* @__PURE__ */ i.createElement(Ue, { from: { x: a(1), y: 0 + g }, to: { x: a(1), y: o }, className: "forestplot__line-of-no-effect", stroke: d.regression.baseLineColor || "black" }), t.map((y, b) => {
    const A = pt({
      domain: t.map((D) => D[d.radius.scalingColumn]),
      range: [d.radius.min, d.radius.max]
    }), w = d.radius.scalingColumn !== "" ? A(t[b][d.radius.scalingColumn]) : 4, E = d.colors.shape ? d.colors.shape : "black", L = d.colors.line ? d.colors.line : "black", P = 4;
    return y[l.xAxis.dataKey] === d.pooledResult.column ? /* @__PURE__ */ i.createElement(ln, { data: p, x: (D) => D.x, y: (D) => D.y - cn(l.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: or }) : /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: L,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${a(y[d.lower])} ${r(b) - Number(P)}
                    L${a(y[d.lower])} ${r(b) + Number(P)}
                `
      }
    ), /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: L,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${a(y[d.upper])} ${r(b) - Number(P)}
                    L${a(y[d.upper])} ${r(b) + Number(P)}
                `
      }
    ), /* @__PURE__ */ i.createElement("line", { stroke: L, className: `line-${y[l.yAxis.dataKey]}`, key: b, x1: a(y[d.lower]), x2: a(y[d.upper]), y1: r(b), y2: r(b) }), d.shape === "circle" && /* @__PURE__ */ i.createElement(Ru, { className: "forest-plot--circle", cx: a(Number(y[d.estimateField])), cy: r(b), r: d.radius.scalingColumn !== "" ? A(t[b][d.radius.scalingColumn]) : 4, fill: E, style: { opacity: 1, filter: "unset" } }), d.shape === "square" && /* @__PURE__ */ i.createElement("rect", { className: "forest-plot--square", x: a(Number(y[d.estimateField])), y: r(b) - w / 2, width: w, height: w, fill: E, style: { opacity: 1, filter: "unset" } }), d.shape === "text" && /* @__PURE__ */ i.createElement(De, { className: "forest-plot--text", x: a(Number(y[d.estimateField])), y: r(b), textAnchor: "middle", verticalAnchor: "middle", fontSize: cn(l.fontSize), fill: E }, y[d.estimateField]));
  }), p && d.regression.showDiamond && /* @__PURE__ */ i.createElement(ln, { data: p, x: (y) => y.x, y: (y) => y.y, stroke: "black", strokeWidth: 2, fill: d.regression.baseLineColor, curve: or }), d.regression.description && /* @__PURE__ */ i.createElement(De, { x: 0 - Number(l.xAxis.size), width: s, y: o - l.forestPlot.rowHeight - Number(d.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, d.regression.description), /* @__PURE__ */ i.createElement(Ct, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: s, height: o, fill: "transparent", fillOpacity: 0.5, onMouseMove: (y) => u(y, t), onMouseOut: c })), /* @__PURE__ */ i.createElement(Ue, { from: v[0], to: v[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ i.createElement(Ue, { from: x[0], to: x[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), m.map((y) => t.map((b, A) => /* @__PURE__ */ i.createElement(De, { className: `${b[y.name]}`, x: y.forestPlotAlignRight ? s : y.forestPlotStartingPoint, y: r(A), textAnchor: y.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: cn(l.fontSize), fill: "black" }, b[y.name]))), !d.hideDateCategoryCol && t.map((y, b) => /* @__PURE__ */ i.createElement(De, { className: `${y[l.xAxis.dataKey]}`, x: 0, y: r(b), textAnchor: "start", verticalAnchor: "middle", fontSize: cn(l.fontSize), fill: "black" }, y[l.xAxis.dataKey])), !d.hideDateCategoryCol && l.xAxis.dataKey && /* @__PURE__ */ i.createElement(De, { className: l.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: cn(l.fontSize), fill: "black" }, l.xAxis.dataKey), m.map((y) => /* @__PURE__ */ i.createElement(De, { className: `${y.label}`, x: y.forestPlotAlignRight ? s : y.forestPlotStartingPoint, y: 0, textAnchor: y.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: cn(l.fontSize), fill: "black" }, y.label)), d.leftLabel && /* @__PURE__ */ i.createElement(De, { className: "forest-plot__left-label", x: d.type === "Linear" ? a(0) - 25 : a(1) - 25, y: o + h, textAnchor: "end", verticalAnchor: "start" }, d.leftLabel), d.rightLabel && /* @__PURE__ */ i.createElement(De, { className: "forest-plot__right-label", x: d.type === "Linear" ? a(0) + 25 : a(1) + 25, y: o + h, textAnchor: "start", verticalAnchor: "start" }, d.rightLabel));
}, By = ({ width: e, height: t, originalWidth: n }) => {
  var A;
  const { config: a, colorScale: r, transformedData: l, formatNumber: o, seriesHighlight: s, getTextWidth: c } = F.useContext(Re);
  if (!a || ((A = a == null ? void 0 : a.series) == null ? void 0 : A.length) < 2)
    return;
  const u = a.barHasBorder === "true" ? 1 : 0, d = e / 2, h = { small: 16, medium: 18, large: 20 }, f = 1.02, p = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[0].dataKey,
    color: r(a.runtime.seriesLabels[a.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((w) => w[a.series[0].dataKey])
    ),
    labelColor: ""
  }, g = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[1].dataKey,
    color: r(a.runtime.seriesLabels[a.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((w) => w[a.series[1].dataKey])
    ),
    labelColor: ""
  }, v = pt({
    domain: [0, Math.max(p.max * f, g.max * 1.1)],
    range: [0, d]
  });
  let x = "#000000";
  p.color && Rt.contrast(x, p.color) < 4.9 && (p.labelColor = "#FFFFFF"), g.color && Rt.contrast(x, g.color) < 4.9 && (g.labelColor = "#FFFFFF");
  const m = a.yAxis.label ? `${a.yAxis.label}: ` : "", y = (w) => `<p>
				${a.dataDescription.seriesKey}: ${p.dataKey}<br/>
				${a.xAxis.dataKey}: ${w[a.xAxis.dataKey]}<br/>
				${m}${o(w[p.dataKey], "left")}
			</p>`, b = (w) => `<p>
				${a.dataDescription.seriesKey}: ${g.dataKey}<br/>
				${a.xAxis.dataKey}: ${w[a.xAxis.dataKey]}<br/>
				${m}${o(w[g.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ i.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ i.createElement(be, { top: 0, left: Number(a.xAxis.size) }, l.filter((w) => a.series[0].dataKey === p.dataKey).map((w, E) => {
    let L = a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(a.series[0].dataKey) === -1, P = a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(a.series[0].dataKey) !== -1, N = v(w[a.series[0].dataKey]), D = Number(a.barHeight) ? Number(a.barHeight) : 25, _ = 0;
    _ = E !== 0 ? (Number(a.barSpace) + D + u) * E : _;
    const S = (Number(a.barSpace) + D + u) * l.length;
    a.heights.horizontal = S;
    const I = c(o(w[p.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < N - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, { key: `group-${p.dataKey}-${w[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      Ct,
      {
        id: `bar-${p.dataKey}-${w[a.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${p.dataKey}-${w[a.dataDescription.xKey]}`,
        x: d - N,
        y: _,
        width: v(w[a.series[0].dataKey]),
        height: D,
        fill: p.color,
        "data-tooltip-html": y(w),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: u,
        opacity: L ? 0.5 : 1,
        display: P ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && P && /* @__PURE__ */ i.createElement(De, { textAnchor: I ? "start" : "end", dx: I ? 5 : -5, verticalAnchor: "middle", x: d - N, y: _ + a.barHeight / 2, fill: I ? p.labelColor : "#000" }, o(w[p.dataKey], "left"))));
  }), l.filter((w) => a.series[1].dataKey === g.dataKey).map((w, E) => {
    let L = v(w[a.series[1].dataKey]), P = a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(a.series[1].dataKey) === -1, N = a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(a.series[1].dataKey) !== -1, D = a.barHeight ? Number(a.barHeight) : 25, _ = 0;
    _ = E !== 0 ? (Number(a.barSpace) + D + u) * E : _;
    const S = (Number(a.barSpace) + D + u) * l.length;
    a.heights.horizontal = S;
    const I = c(o(w[g.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < L - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                      .bar-${g.dataKey}-${w[a.xAxis.dataKey]} {
                          transform-origin: ${d}px ${_}px
                      }
							      `), /* @__PURE__ */ i.createElement(be, { key: `group-${g.dataKey}-${w[a.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      Ct,
      {
        id: `bar-${g.dataKey}-${w[a.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${g.dataKey}-${w[a.dataDescription.xKey]}`,
        x: d,
        y: _,
        width: v(w[a.series[1].dataKey]),
        height: D,
        fill: g.color,
        "data-tooltip-html": b(w),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        strokeWidth: u,
        stroke: "#333",
        opacity: P ? 0.5 : 1,
        display: N ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && N && /* @__PURE__ */ i.createElement(De, { textAnchor: I ? "end" : "start", dx: I ? -5 : 5, verticalAnchor: "middle", x: d + L, y: _ + a.barHeight / 2, fill: I ? g.labelColor : "#000" }, o(w[g.dataKey], "left"))));
  }))));
}, iu = ({ config: e, minValue: t, maxValue: n, existPositiveValue: a, data: r, isAllLine: l }) => {
  let o = 0, s = 0, c = 0, u = 0;
  if (!r)
    return { min: o, max: s };
  const { visualizationType: d, series: h } = e, { max: f, min: p } = e.runtime.yAxis, g = a ? f >= n : f >= 0, v = e.useLogScale ? p >= 0 : p <= 0 && t >= 0 || p <= t && t < 0;
  o = p && v ? p : t, s = f && g ? f : Number.MIN_VALUE;
  const { lower: x, upper: m } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (x && m && e.visualizationType === "Bar") {
    const y = o < 0 ? 1.1 : 0;
    s = Math.max(n, Math.max(...r.flatMap((b) => [b[m], b[x]])) * 1.15), o = Math.min(t, Math.min(...r.flatMap((b) => [b[m], b[x]])) * 1.15) * y;
  }
  if (e.series.filter((y) => (y == null ? void 0 : y.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: y }
    } = e;
    if ((y == null ? void 0 : y.length) > 0) {
      let b = [];
      y.forEach((L) => {
        var P;
        (P = L.confidenceIntervals) == null || P.map((N) => {
          b.push(N.high), b.push(N.low);
        });
      });
      const A = r.map((L) => b.map((P) => L[P])), w = Math.max.apply(
        null,
        A.map((L) => L[0])
      ), E = Math.min.apply(
        null,
        A.map((L) => L[1])
      );
      w > s && (s = w), E < o && (o = E);
    }
  }
  if (d === "Combo")
    try {
      if (!r)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let y = h.filter((w) => w.axis === "Left"), b = h.filter((w) => w.axis === "Right");
      const A = (w, E, L, P = "left") => {
        let N = 0;
        return (E.map((_) => _.dataKey) || []).forEach((_) => {
          let S = E.find((j) => j.dataKey === _), $ = w.map((j) => j[_]), I = Math.max.apply(null, $);
          e.visualizationSubType === "stacked" && P === "left" && S.type === "Bar" && (N += I), I > L && (L = I), L < N && (L = N);
        }), L;
      };
      c = A(r, y, c, "left"), u = A(r, b, u, "right"), c < f && (c = f);
    } catch (y) {
      console.error(y.message);
    }
  if ((d === "Bar" || d === "Combo" && !l) && o > 0 && (o = 0), (e.visualizationType === "Bar" || e.visualizationType === "Combo" && !l) && o < 0 && (o = o * 1.1), e.visualizationType === "Combo" && l && ((p == null || p === "") && o > 0 && (o = 0), p)) {
    const y = e.useLogScale ? p >= 0 && p < t : p < t;
    o = p && y ? p : t;
  }
  if (e.visualizationType === "Deviation Bar" && o > 0) {
    const y = Number(p) < Math.min(t, Number(e.xAxis.target));
    o = p && y ? p : 0;
  }
  if (e.visualizationType === "Line") {
    const y = e.useLogScale ? p >= 0 && p < t : p < t;
    o = p && y ? p : t;
  }
  if (s === Number.MIN_VALUE && (s = a ? n : 0), e.runtime.yAxis.paddingPercent) {
    let y = (s - o) * e.runtime.yAxis.paddingPercent;
    o -= y, s += y;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const y = r.map((A) => A[e.series[0].dataKey]), b = Math.max(...y).toString().length;
    switch (!0) {
      case (b > 8 && b <= 12):
        s = s * 1.3;
        break;
      case (b > 4 && b <= 7):
        s = s * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (o < 0 ? (s *= 1.2, o *= 1.2) : s *= 1.1), { min: o, max: s, leftMax: c, rightMax: u };
}, Hy = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: a, min: r, max: l, config: o, data: s } = e;
  const { rawData: c, dimensions: u } = F.useContext(Re), [d, h] = u, f = o.runtime.barSeriesKeys || o.runtime.seriesKeys, p = o.runtime.xAxis.type, g = o.orientation === "horizontal", v = (D) => D[o.runtime.originalXAxis.dataKey], x = s.map((D) => v(D)), { visualizationType: m } = o;
  let y = null, b = null, A = null, w = null, E = null, L = null, P = null;
  const N = {
    TIME: "time",
    LOG: "log",
    POINT: "point",
    LINEAR: "linear",
    BAND: "band"
  };
  if (g && (y = Vy({ min: r * 1.03, ...e }), y.type = o.useLogScale ? N.LOG : N.LINEAR, b = Ky(p, t), b.rangeRound([0, a]), E = Ma(f, [0, a])), g || (P = Ma(x, [0, n], 0.5), y = Ma(t, [0, n], 0.5), y.type = N.POINT, b = Wy(e), E = Ma(f, [0, n])), o.xAxis.type === "date" && o.xAxis.sortDates && (y = Pf({
    domain: [Math.min(...t), Math.max(...t)],
    range: [0, n]
  }), P = y, y.type = N.LINEAR), o.visualizationType === "Deviation Bar") {
    const D = o.isLollipopChart ? 1.05 : 1.03;
    b = vl({
      domain: t,
      range: [0, a]
    }), y = pt({
      domain: [r * D, Math.max(Number(o.xAxis.target), l)],
      range: [0, n],
      round: !0,
      nice: !0
    }), y.type = N.LINEAR;
  }
  if (o.visualizationType === "Scatter Plot" && o.xAxis.type === "continuous" && (y = pt({
    domain: [0, Math.max.apply(null, y.domain())],
    range: [0, n]
  }), y.type = N.LINEAR), m === "Box Plot") {
    const D = [];
    if (o.boxplot.plots.map((I) => I.columnOutliers.map((j) => D.push(j))) && !o.boxplot.hideOutliers) {
      let I = Math.min(...D), j = Math.max(...D);
      I < r && (r = I), j > l && (l = j);
    }
    let S = Math.min(...o.boxplot.plots.map((I) => I.columnLowerBounds)), $ = Math.max(...o.boxplot.plots.map((I) => I.columnUpperBounds));
    S < r && (r = S), $ > l && (l = $), b = pt({
      range: [a, 0],
      round: !0,
      domain: [r, l]
    }), y = vl({
      range: [0, n],
      round: !0,
      domain: o.boxplot.categories,
      padding: 0.4
    }), y.type = N.BAND;
  }
  if (m === "Paired Bar") {
    let _ = Math.max.apply(
      Math,
      s.map(($) => {
        var I;
        return $[(I = o.series[0]) == null ? void 0 : I.dataKey];
      })
    ), S = Math.max.apply(
      Math,
      s.map(($) => {
        var I;
        return $[(I = o.series[1]) == null ? void 0 : I.dataKey];
      })
    );
    w = pt({
      domain: [0, Math.max(_, S) * 1.02],
      range: [n / 2, 0]
    }), A = pt({
      domain: w.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const D = () => o.forestPlot.regression.showDiamond || o.forestPlot.regression.description ? [0 + o.forestPlot.rowHeight * 2, a - o.forestPlot.rowHeight] : [0 + o.forestPlot.rowHeight * 2, a];
    b = pt({
      domain: [0, c.length],
      range: D()
    });
    const _ = 5, S = Number(o.forestPlot.leftWidthOffset) / 100 * n, $ = Number(o.forestPlot.rightWidthOffset) / 100 * n, I = Number(o.forestPlot.rightWidthOffsetMobile) / 100 * n, j = Number(o.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (d > 480) {
      if (o.forestPlot.type === "Linear" && (y = pt({
        domain: [Math.min(...s.map((R) => parseFloat(R[o.forestPlot.lower]))) - _, Math.max(...s.map((R) => parseFloat(R[o.forestPlot.upper]))) + _],
        range: [S, n - $]
      }), y.type = N.LINEAR), o.forestPlot.type === "Logarithmic") {
        let R = Math.max(...s.map((V) => parseFloat(V[o.forestPlot.upper]))), z = Math.min(...s.map((V) => parseFloat(V[o.forestPlot.lower])));
        y = Xa({
          domain: [z, R],
          range: [S, n - $],
          nice: !0
        }), y.type = N.LOG;
      }
    } else if (o.forestPlot.type === "Linear" && (y = pt({
      domain: [Math.min(...s.map((R) => parseFloat(R[o.forestPlot.lower]))) - _, Math.max(...s.map((R) => parseFloat(R[o.forestPlot.upper]))) + _],
      range: [j, n - I],
      type: N.LINEAR
    })), o.forestPlot.type === "Logarithmic") {
      let R = Math.max(...s.map((V) => parseFloat(V[o.forestPlot.upper]))), z = Math.min(...s.map((V) => parseFloat(V[o.forestPlot.lower])));
      y = Xa({
        domain: [z, R],
        range: [S, n - $],
        nice: !0,
        base: R > 1 ? 10 : 2,
        round: !1,
        type: N.LOG
      });
    }
  }
  return { xScale: y, yScale: b, seriesScale: E, g1xScale: w, g2xScale: A, xScaleNoPadding: L, xScaleBrush: P };
}, Vy = ({ min: e, max: t, xMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? Xa : pt)({
  domain: [e, t],
  range: [0, n],
  nice: a.useLogScale,
  zero: a.useLogScale,
  type: a.useLogScale ? "log" : "linear"
})), Wy = ({ min: e, max: t, yMax: n, config: a, leftMax: r }) => {
  e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const l = a.useLogScale ? Xa : pt;
  return a.visualizationType === "Combo" && (t = r), l({
    domain: [e, t],
    range: [n, 0],
    nice: a.useLogScale,
    zero: a.useLogScale
  });
}, Ky = (e, t) => e === "date" ? pt({
  domain: [Math.min(...t), Math.max(...t)]
}) : _n({ domain: t, padding: 0.5 }), Ma = (e, t, n = 0) => _n({
  domain: e,
  range: t,
  padding: n,
  type: "point"
});
function jy(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const ru = () => {
  const { config: e } = F.useContext(Re), { visualizationType: t, series: n, orientation: a, visualizationSubType: r } = e;
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
    visHasBarBorders: () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : n == null ? void 0 : n.some((Y) => Y.type === "Bar" || Y.type === "Paired Bar" || Y.type === "Deviation Bar"),
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
      if ((t === "Bar" || "Combo") && r === "regular")
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
      const Z = ["Forest Plot"];
      return !(a === "horizontal" || Z.includes(t));
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
var co = {};
const Iy = /* @__PURE__ */ Fr(wp), qy = /* @__PURE__ */ Fr($p);
var uo = {};
uo.__esModule = !0;
uo.default = Uy;
var Da = F;
function Uy(e) {
  var t = (0, Da.useState)(e), n = t[0], a = t[1], r = (0, Da.useRef)(null), l = (0, Da.useCallback)(function(o, s) {
    r.current = s || null, a(o);
  }, [a]);
  return (0, Da.useLayoutEffect)(function() {
    r.current && (r.current(n), r.current = null);
  }, [n]), [n, l];
}
var fo = {}, mo = {};
mo.__esModule = !0;
mo.default = Yy;
function Yy(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var ho = {};
ho.__esModule = !0;
ho.default = Zy;
function Xy(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Qy(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qy(e, t) {
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
function Zy(e, t) {
  for (var n = e, a = 1 / 0, r = Xy(t), l; !(l = r()).done; ) {
    var o = l.value, s = Math.sqrt(Math.pow(o.x - e.x, 2) + Math.pow(o.y - e.y, 2));
    s < a && (a = s, n = {
      x: o.x,
      y: o.y
    });
  }
  return n;
}
fo.__esModule = !0;
fo.default = Gy;
var us = ou(mo), Jy = ou(ho);
function ou(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gy(e, t, n) {
  var a, r, l, o;
  return n === void 0 && (n = {}), t.length > 0 ? (0, Jy.default)(e, t) : {
    x: (0, us.default)(e.x, (a = n.xMin) != null ? a : -1 / 0, (r = n.xMax) != null ? r : 1 / 0),
    y: (0, us.default)(e.y, (l = n.yMin) != null ? l : -1 / 0, (o = n.yMax) != null ? o : 1 / 0)
  };
}
var po = {};
po.__esModule = !0;
po.default = ng;
var eg = F;
function tg(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var a = [], r = e.getTotalLength(), l = 0; l <= r; l += n) {
    var o = e.getPointAtLength(l), s = o.matrixTransform(t);
    a.push(s);
  }
  return a;
}
function ng(e) {
  var t = (0, eg.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return tg(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
co.__esModule = !0;
co.default = rg;
var hn = F, Pn = Iy, ds = qy, ag = yo(uo), fs = yo(fo), ig = yo(po);
function yo(e) {
  return e && e.__esModule ? e : { default: e };
}
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Wt.apply(this, arguments);
}
function rg(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, a = n === void 0 ? !1 : n, r = t.snapToPointer, l = r === void 0 ? !0 : r, o = t.onDragEnd, s = t.onDragMove, c = t.onDragStart, u = t.x, d = t.y, h = t.dx, f = t.dy, p = t.isDragging, g = t.restrict, v = g === void 0 ? {} : g, x = t.restrictToPath, m = (0, hn.useRef)({
    x: u,
    y: d,
    dx: h,
    dy: f
  }), y = (0, ag.default)({
    x: u,
    y: d,
    dx: h ?? 0,
    dy: f ?? 0,
    isDragging: !1
  }), b = y[0], A = y[1], w = (0, hn.useState)(new Pn.Point({
    x: 0,
    y: 0
  })), E = w[0], L = w[1];
  (0, hn.useEffect)(function() {
    (m.current.x !== u || m.current.y !== d || m.current.dx !== h || m.current.dy !== f) && (m.current = {
      x: u,
      y: d,
      dx: h,
      dy: f
    }, A(function(S) {
      return Wt({}, S, {
        x: u,
        y: d,
        dx: h ?? 0,
        dy: f ?? 0
      });
    }));
  }), (0, hn.useEffect)(function() {
    p !== void 0 && b.isDragging !== p && A(function(S) {
      return Wt({}, S, {
        isDragging: p
      });
    });
  }, [b.isDragging, p, A]);
  var P = (0, ig.default)(x), N = (0, hn.useCallback)(function(S) {
    S.persist(), A(function($) {
      var I = $.x, j = I === void 0 ? 0 : I, R = $.y, z = R === void 0 ? 0 : R, V = $.dx, W = $.dy, M = new Pn.Point({
        x: (j || 0) + V,
        y: (z || 0) + W
      }), B = (0, ds.localPoint)(S) || new Pn.Point({
        x: 0,
        y: 0
      }), q = l ? B : M, U = (0, fs.default)(q, P, v);
      return L((0, Pn.subtractPoints)(M, B)), {
        isDragging: !0,
        dx: a ? 0 : $.dx,
        dy: a ? 0 : $.dy,
        x: a ? U.x : U.x - $.dx,
        y: a ? U.y : U.y - $.dy
      };
    }, c && function($) {
      c(Wt({}, $, {
        event: S
      }));
    });
  }, [c, a, v, P, A, l]), D = (0, hn.useCallback)(function(S) {
    S.persist(), A(function($) {
      if (!$.isDragging)
        return $;
      var I = $.x, j = I === void 0 ? 0 : I, R = $.y, z = R === void 0 ? 0 : R, V = (0, ds.localPoint)(S) || new Pn.Point({
        x: 0,
        y: 0
      }), W = l ? V : (0, Pn.sumPoints)(V, E), M = (0, fs.default)(W, P, v);
      return Wt({}, $, {
        dx: M.x - j,
        dy: M.y - z
      });
    }, s && function($) {
      $.isDragging && s(Wt({}, $, {
        event: S
      }));
    });
  }, [A, s, l, E, P, v]), _ = (0, hn.useCallback)(function(S) {
    S.persist(), A(function($) {
      return Wt({}, $, {
        isDragging: !1
      });
    }, o && function($) {
      o(Wt({}, $, {
        event: S
      }));
    });
  }, [o, A]);
  return Wt({}, b, {
    dragEnd: _,
    dragMove: D,
    dragStart: N
  });
}
var Ni = lu, Xn = go(Es), Ji = go(F), og = go(co);
function go(e) {
  return e && e.__esModule ? e : { default: e };
}
function lu(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, a = e.snapToPointer, r = a === void 0 ? !0 : a, l = e.children, o = e.dx, s = e.dy, c = e.height, u = e.onDragEnd, d = e.onDragMove, h = e.onDragStart, f = e.resetOnStart, p = e.width, g = e.x, v = e.y, x = e.isDragging, m = e.restrict, y = e.restrictToPath, b = (0, og.default)({
    resetOnStart: f,
    snapToPointer: r,
    onDragEnd: u,
    onDragMove: d,
    onDragStart: h,
    x: g,
    y: v,
    dx: o,
    dy: s,
    isDragging: x,
    restrict: m,
    restrictToPath: y
  });
  return /* @__PURE__ */ Ji.default.createElement(Ji.default.Fragment, null, b.isDragging && n && /* @__PURE__ */ Ji.default.createElement("rect", {
    width: p,
    height: c,
    onPointerDown: b.dragStart,
    onPointerMove: b.dragMove,
    onPointerUp: b.dragEnd,
    fill: "transparent"
  }), l(b));
}
lu.propTypes = {
  children: Xn.default.func.isRequired,
  width: Xn.default.number.isRequired,
  height: Xn.default.number.isRequired,
  captureDragArea: Xn.default.bool,
  isDragging: Xn.default.bool
};
function hi(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var n = e.range(), a = n[0], r = n[1], l = 0, o = "step" in e && typeof e.step < "u" ? e.step() : 1, s = o * (r - a) / Math.abs(r - a);
  if (s > 0)
    for (; t > a + s * (l + 1); )
      l += 1;
  else
    for (; t < a + s * (l + 1); )
      l += 1;
  return l;
}
function ms(e, t, n, a) {
  var r, l = hi(e, t + (t < n ? -a : a)), o = hi(e, n + (n < t ? -a : a)), s = Math.min(l, o), c = Math.max(l, o);
  if ("invert" in e && typeof e.invert < "u")
    r = {
      start: s,
      end: c
    };
  else {
    for (var u = [], d = e.domain(), h = s; h <= c; h += 1)
      u.push(d[h]);
    r = {
      values: u
    };
  }
  return r;
}
function xo(e) {
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
function lg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Pr(e, t);
}
function Pr(e, t) {
  return Pr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Pr(e, t);
}
var su = /* @__PURE__ */ function(e) {
  lg(t, e);
  function t() {
    for (var a, r = arguments.length, l = new Array(r), o = 0; o < r; o++)
      l[o] = arguments[o];
    return a = e.call.apply(e, [this].concat(l)) || this, a.handleDragStart = function(s) {
      var c = a.props, u = c.onBrushHandleChange, d = c.type, h = c.onBrushStart;
      u && u(d, xo(s.event)), h && h(s);
    }, a.handleDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.type, h = c.isControlled;
      !s.isDragging || h || u(function(f) {
        var p = f.start, g = f.end, v = 0, x = Math.max(p.x, g.x), m = Math.min(p.x, g.x), y = Math.max(p.y, g.y), b = Math.min(p.y, g.y);
        switch (d) {
          case "right":
            return v = x + s.dx, Ot({}, f, {
              activeHandle: d,
              extent: Ot({}, f.extent, {
                x0: Math.max(Math.min(v, p.x), f.bounds.x0),
                x1: Math.min(Math.max(v, p.x), f.bounds.x1)
              })
            });
          case "left":
            return v = m + s.dx, Ot({}, f, {
              activeHandle: d,
              extent: Ot({}, f.extent, {
                x0: Math.min(v, g.x),
                x1: Math.max(v, g.x)
              })
            });
          case "bottom":
            return v = y + s.dy, Ot({}, f, {
              activeHandle: d,
              extent: Ot({}, f.extent, {
                y0: Math.min(v, p.y),
                y1: Math.max(v, p.y)
              })
            });
          case "top":
            return v = b + s.dy, Ot({}, f, {
              activeHandle: d,
              extent: Ot({}, f.extent, {
                y0: Math.min(v, g.y),
                y1: Math.max(v, g.y)
              })
            });
          default:
            return f;
        }
      });
    }, a.handleDragEnd = function() {
      var s = a.props, c = s.updateBrush, u = s.onBrushEnd, d = s.onBrushHandleChange, h = s.isControlled;
      h || c(function(f) {
        var p = f.start, g = f.end, v = f.extent;
        p.x = Math.min(v.x0, v.x1), p.y = Math.min(v.y0, v.y0), g.x = Math.max(v.x0, v.x1), g.y = Math.max(v.y0, v.y1);
        var x = Ot({}, f, {
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
        return u && u(x), x;
      }), d && d();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this, l = this.props, o = l.stageWidth, s = l.stageHeight, c = l.brush, u = l.type, d = l.handle, h = l.isControlled, f = l.isDragInProgress, p = l.renderBrushHandle, g = d.x, v = d.y, x = d.width, m = d.height, y = u === "right" || u === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ i.createElement(Ni, {
      width: o,
      height: s,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: h ? f : void 0
    }, function(b) {
      var A = b.dragStart, w = b.dragEnd, E = b.dragMove, L = b.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, L && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: o,
        height: s,
        style: {
          cursor: y
        },
        onPointerMove: E,
        onPointerUp: h ? void 0 : w,
        onPointerLeave: h ? void 0 : w
      }), !p && /* @__PURE__ */ i.createElement("rect", {
        x: g,
        y: v,
        width: x,
        height: m,
        fill: "transparent",
        className: "visx-brush-handle-" + u,
        onPointerDown: A,
        onPointerMove: E,
        onPointerUp: h ? void 0 : w,
        style: {
          cursor: y,
          pointerEvents: c.activeHandle || c.isBrushing ? "none" : "all"
        }
      }), p && /* @__PURE__ */ i.createElement("g", {
        onPointerDown: A,
        onPointerMove: E,
        onPointerUp: h ? void 0 : w
      }, p(Ot({}, r.props.handle, {
        height: s,
        className: "visx-brush-handle-" + u,
        isBrushActive: c.extent.x0 !== -1 && c.extent.x1 !== -1
      }))));
    });
  }, t;
}(i.Component);
su.propTypes = {
  stageWidth: K.number.isRequired,
  stageHeight: K.number.isRequired,
  updateBrush: K.func.isRequired,
  onBrushStart: K.func,
  onBrushEnd: K.func,
  handle: K.shape({
    x: K.number.isRequired,
    y: K.number.isRequired,
    width: K.number.isRequired,
    height: K.number.isRequired
  }).isRequired,
  isControlled: K.bool,
  isDragInProgress: K.bool,
  onBrushHandleChange: K.func,
  renderBrushHandle: K.func
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
function sg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Nr(e, t);
}
function Nr(e, t) {
  return Nr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Nr(e, t);
}
var vo = /* @__PURE__ */ function(e) {
  sg(t, e);
  function t() {
    for (var a, r = arguments.length, l = new Array(r), o = 0; o < r; o++)
      l[o] = arguments[o];
    return a = e.call.apply(e, [this].concat(l)) || this, a.cornerDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.type;
      s.isDragging && u(function(h) {
        var f = h.start, p = h.end, g = Math.max(f.x, p.x), v = Math.min(f.x, p.x), x = Math.max(f.y, p.y), m = Math.min(f.y, p.y), y = 0, b = 0;
        switch (d) {
          case "topRight":
            return y = g + s.dx, b = m + s.dy, kt({}, h, {
              activeHandle: d,
              extent: kt({}, h.extent, {
                x0: Math.max(Math.min(y, f.x), h.bounds.x0),
                x1: Math.min(Math.max(y, f.x), h.bounds.x1),
                y0: Math.max(Math.min(b, p.y), h.bounds.y0),
                y1: Math.min(Math.max(b, p.y), h.bounds.y1)
              })
            });
          case "topLeft":
            return y = v + s.dx, b = m + s.dy, kt({}, h, {
              activeHandle: d,
              extent: kt({}, h.extent, {
                x0: Math.max(Math.min(y, p.x), h.bounds.x0),
                x1: Math.min(Math.max(y, p.x), h.bounds.x1),
                y0: Math.max(Math.min(b, p.y), h.bounds.y0),
                y1: Math.min(Math.max(b, p.y), h.bounds.y1)
              })
            });
          case "bottomLeft":
            return y = v + s.dx, b = x + s.dy, kt({}, h, {
              activeHandle: d,
              extent: kt({}, h.extent, {
                x0: Math.max(Math.min(y, p.x), h.bounds.x0),
                x1: Math.min(Math.max(y, p.x), h.bounds.x1),
                y0: Math.max(Math.min(b, f.y), h.bounds.y0),
                y1: Math.min(Math.max(b, f.y), h.bounds.y1)
              })
            });
          case "bottomRight":
            return y = g + s.dx, b = x + s.dy, kt({}, h, {
              activeHandle: d,
              extent: kt({}, h.extent, {
                x0: Math.max(Math.min(y, f.x), h.bounds.x0),
                x1: Math.min(Math.max(y, f.x), h.bounds.x1),
                y0: Math.max(Math.min(b, f.y), h.bounds.y0),
                y1: Math.min(Math.max(b, f.y), h.bounds.y1)
              })
            });
          default:
            return h;
        }
      });
    }, a.cornerDragEnd = function() {
      var s = a.props, c = s.updateBrush, u = s.onBrushEnd;
      c(function(d) {
        var h = d.start, f = d.end, p = d.extent;
        h.x = Math.min(p.x0, p.x1), h.y = Math.min(p.y0, p.y0), f.x = Math.max(p.x0, p.x1), f.y = Math.max(p.y0, p.y1);
        var g = kt({}, d, {
          start: h,
          end: f,
          activeHandle: null,
          domain: {
            x0: Math.min(h.x, f.x),
            x1: Math.max(h.x, f.x),
            y0: Math.min(h.y, f.y),
            y1: Math.max(h.y, f.y)
          }
        });
        return u && u(g), g;
      });
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this.props, l = r.type, o = r.brush, s = r.stageWidth, c = r.stageHeight, u = r.style, d = r.corner, h = (u == null ? void 0 : u.cursor) || (l === "topLeft" || l === "bottomRight" ? "nwse-resize" : "nesw-resize"), f = o.activeHandle || o.isBrushing ? "none" : "all";
    return /* @__PURE__ */ i.createElement(Ni, {
      width: s,
      height: c,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(p) {
      var g = p.dragMove, v = p.dragEnd, x = p.dragStart, m = p.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, m && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: s,
        height: c,
        style: {
          cursor: h
        },
        onPointerMove: g,
        onPointerUp: v
      }), /* @__PURE__ */ i.createElement("rect", kt({
        fill: "transparent",
        onPointerDown: x,
        onPointerMove: g,
        onPointerUp: v,
        className: "visx-brush-corner-" + l,
        style: kt({
          cursor: h,
          pointerEvents: f
        }, u)
      }, d)));
    });
  }, t;
}(i.Component);
vo.propTypes = {
  stageWidth: K.number.isRequired,
  stageHeight: K.number.isRequired,
  updateBrush: K.func.isRequired,
  onBrushEnd: K.func,
  corner: K.shape({
    x: K.number.isRequired,
    y: K.number.isRequired,
    width: K.number.isRequired,
    height: K.number.isRequired
  }).isRequired
};
vo.defaultProps = {
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
function cg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Lr(e, t);
}
function Lr(e, t) {
  return Lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Lr(e, t);
}
var ug = {
  cursor: "move"
}, bo = /* @__PURE__ */ function(e) {
  cg(t, e);
  function t() {
    for (var a, r = arguments.length, l = new Array(r), o = 0; o < r; o++)
      l[o] = arguments[o];
    return a = e.call.apply(e, [this].concat(l)) || this, a.selectionDragStart = function(s) {
      var c = a.props, u = c.onMoveSelectionChange, d = c.onBrushStart;
      u && u("move", xo(s.event)), d && d(s);
    }, a.selectionDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.isControlled;
      d || u(function(h) {
        var f = h.start, p = f.x, g = f.y, v = h.end, x = v.x, m = v.y, y = s.dx > 0 ? Math.min(s.dx, h.bounds.x1 - x) : Math.max(s.dx, h.bounds.x0 - p), b = s.dy > 0 ? Math.min(s.dy, h.bounds.y1 - m) : Math.max(s.dy, h.bounds.y0 - g);
        return tn({}, h, {
          isBrushing: !0,
          extent: tn({}, h.extent, {
            x0: p + y,
            x1: x + y,
            y0: g + b,
            y1: m + b
          })
        });
      });
    }, a.selectionDragEnd = function() {
      var s = a.props, c = s.updateBrush, u = s.onBrushEnd, d = s.onMoveSelectionChange, h = s.isControlled;
      h || c(function(f) {
        var p = tn({}, f, {
          isBrushing: !1,
          start: tn({}, f.start, {
            x: Math.min(f.extent.x0, f.extent.x1),
            y: Math.min(f.extent.y0, f.extent.y1)
          }),
          end: tn({}, f.end, {
            x: Math.max(f.extent.x0, f.extent.x1),
            y: Math.max(f.extent.y0, f.extent.y1)
          })
        });
        return u && u(p), p;
      }), d && d();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this.props, l = r.width, o = r.height, s = r.stageWidth, c = r.stageHeight, u = r.brush, d = r.disableDraggingSelection, h = r.onMouseLeave, f = r.onMouseMove, p = r.onMouseUp, g = r.onClick, v = r.selectedBoxStyle, x = r.isControlled, m = r.isDragInProgress;
    return /* @__PURE__ */ i.createElement(Ni, {
      width: l,
      height: o,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: x ? m : void 0
    }, function(y) {
      var b = y.isDragging, A = y.dragStart, w = y.dragEnd, E = y.dragMove;
      return /* @__PURE__ */ i.createElement("g", null, b && /* @__PURE__ */ i.createElement("rect", {
        width: s,
        height: c,
        fill: "transparent",
        onPointerUp: x ? void 0 : w,
        onPointerMove: E,
        onPointerLeave: x ? void 0 : w,
        style: ug
      }), /* @__PURE__ */ i.createElement("rect", tn({
        x: Math.min(u.extent.x0, u.extent.x1),
        y: Math.min(u.extent.y0, u.extent.y1),
        width: l,
        height: o,
        className: "visx-brush-selection",
        onPointerDown: d ? void 0 : A,
        onPointerLeave: function(P) {
          h && h(P);
        },
        onPointerMove: function(P) {
          E(P), f && f(P);
        },
        onPointerUp: function(P) {
          x || w(P), p && p(P);
        },
        onClick: function(P) {
          g && g(P);
        },
        style: {
          pointerEvents: u.isBrushing || u.activeHandle ? "none" : "all",
          cursor: d ? void 0 : "move"
        }
      }, v)));
    });
  }, t;
}(i.Component);
bo.propTypes = {
  width: K.number.isRequired,
  height: K.number.isRequired,
  stageWidth: K.number.isRequired,
  stageHeight: K.number.isRequired,
  updateBrush: K.func.isRequired,
  onMoveSelectionChange: K.func,
  onBrushStart: K.func,
  onBrushEnd: K.func,
  disableDraggingSelection: K.bool.isRequired,
  onMouseLeave: K.func,
  onMouseMove: K.func,
  onMouseUp: K.func,
  onClick: K.func,
  isControlled: K.bool,
  isDragInProgress: K.bool
};
bo.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
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
function dg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Or(e, t);
}
function Or(e, t) {
  return Or = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Or(e, t);
}
var fg = {
  cursor: "crosshair"
}, Eo = /* @__PURE__ */ function(e) {
  dg(t, e);
  function t(a) {
    var r;
    r = e.call(this, a) || this, r.mouseUpTime = 0, r.mouseDownTime = 0, r.handleWindowPointerUp = function() {
      var s = r.props, c = s.useWindowMoveEvents, u = s.onBrushEnd, d = s.resetOnEnd, h = r.state.brushingType;
      c && h && r.updateBrush(function(f) {
        var p = f.start, g = f.end, v = f.extent;
        p.x = Math.min(v.x0, v.x1), p.y = Math.min(v.y0, v.y0), g.x = Math.max(v.x0, v.x1), g.y = Math.max(v.y0, v.y1);
        var x = wt({}, f, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return u && u(x), d && r.reset(), x;
      });
    }, r.handleWindowPointerMove = function(s) {
      var c = r.props.useWindowMoveEvents, u = r.state, d = u.brushingType, h = u.isBrushing, f = u.brushPageOffset, p = u.start;
      if (!(!c || !h)) {
        var g = s.pageX - ((f == null ? void 0 : f.pageX) || 0), v = s.pageY - ((f == null ? void 0 : f.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(d ?? "") && r.updateBrush(function(x) {
          var m = x.start, y = m.x, b = m.y, A = x.end, w = A.x, E = A.y;
          return wt({}, x, {
            isBrushing: !0,
            extent: wt({}, x.extent, r.getExtent({
              x: d === "left" ? Math.min(Math.max(y + g, x.bounds.x0), x.bounds.x1) : y,
              y: d === "top" ? Math.min(Math.max(b + v, x.bounds.y0), x.bounds.y1) : b
            }, {
              x: d === "right" ? Math.min(Math.max(w + g, x.bounds.x0), x.bounds.x1) : w,
              y: d === "bottom" ? Math.min(Math.max(E + v, x.bounds.y0), x.bounds.y1) : E
            }))
          });
        }), d === "move" && r.updateBrush(function(x) {
          var m = x.start, y = m.x, b = m.y, A = x.end, w = A.x, E = A.y, L = g > 0 ? Math.min(g, x.bounds.x1 - w) : Math.max(g, x.bounds.x0 - y), P = v > 0 ? Math.min(v, x.bounds.y1 - E) : Math.max(v, x.bounds.y0 - b);
          return wt({}, x, {
            isBrushing: !0,
            extent: wt({}, x.extent, {
              x0: y + L,
              y0: b + P,
              x1: w + L,
              y1: E + P
            })
          });
        }), d === "select" && r.updateBrush(function(x) {
          var m = x.start, y = m.x, b = m.y, A = {
            x: Math.min(Math.max(y + g, x.bounds.x0), x.bounds.x1),
            y: Math.min(Math.max(b + v, x.bounds.y0), x.bounds.y1)
          }, w = r.getExtent(p, A), E = wt({}, x, {
            end: A,
            extent: w
          });
          return E;
        });
      }
    }, r.getExtent = function(s, c) {
      var u = r.props, d = u.brushDirection, h = u.width, f = u.height, p = d === "vertical" ? 0 : Math.min(s.x || 0, c.x || 0), g = d === "vertical" ? h : Math.max(s.x || 0, c.x || 0), v = d === "horizontal" ? 0 : Math.min(s.y || 0, c.y || 0), x = d === "horizontal" ? f : Math.max(s.y || 0, c.y || 0);
      return {
        x0: p,
        x1: g,
        y0: v,
        y1: x
      };
    }, r.handleDragStart = function(s) {
      var c = r.props, u = c.onBrushStart, d = c.left, h = c.top, f = c.inheritedMargin, p = c.useWindowMoveEvents, g = f != null && f.left ? f.left : 0, v = f != null && f.top ? f.top : 0, x = {
        x: (s.x || 0) + s.dx - d - g,
        y: (s.y || 0) + s.dy - h - v
      }, m = wt({}, x);
      u && u(x), r.updateBrush(function(y) {
        return wt({}, y, {
          start: x,
          end: m,
          extent: {
            x0: -1,
            x1: -1,
            y0: -1,
            y1: -1
          },
          isBrushing: !0,
          brushingType: "select",
          brushPageOffset: p ? xo(s.event) : void 0
        });
      });
    }, r.handleBrushStart = function(s) {
      var c = r.props, u = c.onBrushStart, d = c.left, h = c.top, f = c.inheritedMargin;
      if (u) {
        var p = f != null && f.left ? f.left : 0, g = f != null && f.top ? f.top : 0, v = {
          x: (s.x || 0) + s.dx - d - p,
          y: (s.y || 0) + s.dy - h - g
        };
        u(v);
      }
    }, r.handleDragMove = function(s) {
      var c = r.props, u = c.left, d = c.top, h = c.inheritedMargin, f = c.useWindowMoveEvents;
      if (!(!s.isDragging || f)) {
        var p = (h == null ? void 0 : h.left) || 0, g = (h == null ? void 0 : h.top) || 0, v = {
          x: (s.x || 0) + s.dx - u - p,
          y: (s.y || 0) + s.dy - d - g
        };
        r.updateBrush(function(x) {
          var m = x.start, y = r.getExtent(m, v);
          return wt({}, x, {
            end: v,
            extent: y
          });
        });
      }
    }, r.handleDragEnd = function() {
      var s = r.props, c = s.onBrushEnd, u = s.resetOnEnd, d = s.useWindowMoveEvents;
      d || r.updateBrush(function(h) {
        var f = h.extent, p = wt({}, h, {
          start: {
            x: f.x0,
            y: f.y0
          },
          end: {
            x: f.x1,
            y: f.y1
          },
          isBrushing: !1,
          brushingType: void 0,
          activeHandle: null
        });
        return c && c(p), u && r.reset(), p;
      });
    }, r.getBrushWidth = function() {
      var s = r.state.extent, c = s.x0, u = s.x1;
      return Math.max(Math.max(c, u) - Math.min(c, u), 0);
    }, r.getBrushHeight = function() {
      var s = r.state.extent, c = s.y1, u = s.y0;
      return Math.max(Math.max(u, c) - Math.min(u, c), 0);
    }, r.handles = function() {
      var s = r.props.handleSize, c = r.state.extent, u = c.x0, d = c.x1, h = c.y0, f = c.y1, p = s / 2, g = r.getBrushWidth(), v = r.getBrushHeight();
      return {
        top: {
          x: u - p,
          y: h - p,
          height: s,
          width: g + s
        },
        bottom: {
          x: u - p,
          y: f - p,
          height: s,
          width: g + s
        },
        right: {
          x: d - p,
          y: h - p,
          height: v + s,
          width: s
        },
        left: {
          x: u - p,
          y: h - p,
          height: v + s,
          width: s
        }
      };
    }, r.corners = function() {
      var s = r.props.handleSize, c = r.state.extent, u = c.x0, d = c.x1, h = c.y0, f = c.y1, p = s / 2, g = s, v = s;
      return {
        topLeft: {
          x: Math.min(u, d) - p,
          y: Math.min(h, f) - p,
          width: g,
          height: v
        },
        topRight: {
          x: Math.max(u, d) - p,
          y: Math.min(h, f) - p,
          width: g,
          height: v
        },
        bottomLeft: {
          x: Math.min(u, d) - p,
          y: Math.max(h, f) - p,
          width: g,
          height: v
        },
        bottomRight: {
          x: Math.max(u, d) - p,
          y: Math.max(h, f) - p,
          width: g,
          height: v
        }
      };
    }, r.updateBrush = function(s) {
      var c = r.props.onChange;
      r.setState(s, function() {
        c && c(r.state);
      });
    }, r.reset = function() {
      var s = r.props, c = s.width, u = s.height;
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
    }, r.handleBrushingTypeChange = function(s, c) {
      r.updateBrush(function(u) {
        var d = wt({}, u, {
          brushingType: s,
          isBrushing: s !== void 0
        });
        return (c || s === void 0) && (d.brushPageOffset = c), d;
      });
    };
    var l = a.initialBrushPosition, o = l ? r.getExtent(l.start, l.end) : {
      x0: -1,
      x1: -1,
      y0: -1,
      y1: -1
    };
    return r.state = {
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
    (this.props.width !== r.width || this.props.height !== r.height) && this.setState(function(o) {
      var s = o.start, c = o.end, u = o.extent;
      if (!(u.x0 === -1 && u.x1 === -1 && u.y0 === -1 && u.y1 === -1)) {
        var d = l.props.width / r.width, h = l.props.height / r.height;
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
    var r = this, l = this.state, o = l.start, s = l.end, c = this.props, u = c.top, d = c.left, h = c.width, f = c.height, p = c.onMouseLeave, g = c.onMouseUp, v = c.onMouseMove, x = c.onBrushEnd, m = c.onClick, y = c.resizeTriggerAreas, b = c.selectedBoxStyle, A = c.disableDraggingSelection, w = c.clickSensitivity, E = c.useWindowMoveEvents, L = c.renderBrushHandle, P = this.state.brushingType, N = this.handles(), D = this.corners(), _ = this.getBrushWidth(), S = this.getBrushHeight(), $ = new Set(y);
    return /* @__PURE__ */ i.createElement(be, {
      className: "visx-brush",
      top: u,
      left: d
    }, /* @__PURE__ */ i.createElement(Ni, {
      width: h,
      height: f,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: E ? P === "select" : void 0
    }, function(I) {
      var j = I.dragStart, R = I.isDragging, z = I.dragMove, V = I.dragEnd;
      return /* @__PURE__ */ i.createElement(Ct, {
        className: "visx-brush-overlay",
        fill: "transparent",
        x: 0,
        y: 0,
        width: h,
        height: f,
        onDoubleClick: function() {
          return r.reset();
        },
        onClick: function(M) {
          var B = r.mouseUpTime - r.mouseDownTime;
          m && B < w && m(M);
        },
        onPointerDown: function(M) {
          r.mouseDownTime = Date.now(), j(M);
        },
        onPointerLeave: function(M) {
          p && p(M);
        },
        onPointerMove: function(M) {
          !R && v && v(M), R && z(M);
        },
        onPointerUp: function(M) {
          r.mouseUpTime = Date.now(), g && g(M), V(M);
        },
        style: fg
      });
    }), o && s && /* @__PURE__ */ i.createElement(bo, {
      updateBrush: this.updateBrush,
      width: _,
      height: S,
      stageWidth: h,
      stageHeight: f,
      brush: this.state,
      disableDraggingSelection: A,
      onBrushEnd: x,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: p,
      onMouseMove: v,
      onMouseUp: g,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: m,
      selectedBoxStyle: b,
      isControlled: E,
      isDragInProgress: E ? P === "move" : void 0
    }), o && s && Object.keys(N).filter(function(I) {
      return $.has(I);
    }).map(function(I) {
      var j = N[I];
      return j && /* @__PURE__ */ i.createElement(su, {
        key: "handle-" + I,
        type: I,
        handle: j,
        stageWidth: h,
        stageHeight: f,
        updateBrush: r.updateBrush,
        brush: r.state,
        onBrushStart: r.handleBrushStart,
        onBrushEnd: x,
        isControlled: E,
        isDragInProgress: E ? P === I : void 0,
        onBrushHandleChange: r.handleBrushingTypeChange,
        renderBrushHandle: L
      });
    }), o && s && Object.keys(D).filter(function(I) {
      return $.has(I);
    }).map(function(I) {
      var j = D[I];
      return j && /* @__PURE__ */ i.createElement(vo, {
        key: "corner-" + I,
        type: I,
        brush: r.state,
        updateBrush: r.updateBrush,
        stageWidth: h,
        stageHeight: f,
        corner: j,
        onBrushEnd: x
      });
    }));
  }, t;
}(i.Component);
Eo.propTypes = {
  brushDirection: K.oneOf(["horizontal", "vertical", "both"]),
  width: K.number.isRequired,
  height: K.number.isRequired,
  left: K.number.isRequired,
  top: K.number.isRequired,
  onChange: K.func,
  handleSize: K.number,
  resizeTriggerAreas: K.array,
  onBrushStart: K.func,
  onBrushEnd: K.func,
  onMouseLeave: K.func,
  onMouseUp: K.func,
  onMouseMove: K.func,
  onClick: K.func,
  clickSensitivity: K.number,
  disableDraggingSelection: K.bool,
  resetOnEnd: K.bool,
  useWindowMoveEvents: K.bool,
  renderBrushHandle: K.func
};
Eo.defaultProps = {
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
function mg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _r(e, t);
}
function _r(e, t) {
  return _r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, _r(e, t);
}
var hs = 2, ps = "steelblue", Ao = /* @__PURE__ */ function(e) {
  mg(t, e);
  function t() {
    for (var a, r = arguments.length, l = new Array(r), o = 0; o < r; o++)
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
        var u = s.x, d = s.y, h = a.props, f = h.xScale, p = h.yScale, g = hi(f, u), v = hi(p, d);
        c({
          x: "invert" in f && typeof f.invert < "u" ? g : f.domain()[g],
          y: "invert" in p && typeof p.invert < "u" ? v : p.domain()[v]
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
  return n.convertRangeToDomain = function(r) {
    var l = this.props, o = l.xScale, s = l.yScale, c = r.extent, u = c.x0, d = c.x1, h = c.y0, f = c.y1, p = ms(o, u || 0, d || 0, hs), g = ms(s, h || 0, f || 0, hs), v = {
      x0: p.start || 0,
      x1: p.end || 0,
      xValues: p.values,
      y0: g.start || 0,
      y1: g.end || 0,
      yValues: g.values
    };
    return v;
  }, n.render = function() {
    var r = this.props, l = r.xScale, o = r.yScale, s = r.height, c = r.width, u = r.margin, d = r.brushDirection, h = r.initialBrushPosition, f = r.innerRef, p = r.resizeTriggerAreas, g = r.brushRegion, v = r.yAxisOrientation, x = r.xAxisOrientation, m = r.selectedBoxStyle, y = r.disableDraggingSelection, b = r.resetOnEnd, A = r.onMouseLeave, w = r.onMouseMove, E = r.onClick, L = r.handleSize, P = r.useWindowMoveEvents, N = r.renderBrushHandle;
    if (!l || !o)
      return null;
    var D, _, S, $, I = u != null && u.left ? u.left : 0, j = u != null && u.top ? u.top : 0, R = u != null && u.right ? u.right : 0, z = u != null && u.bottom ? u.bottom : 0;
    return g === "chart" ? (S = 0, $ = 0, D = c, _ = s) : g === "yAxis" ? ($ = 0, _ = s, v === "right" ? (S = c, D = R) : (S = -I, D = I)) : (S = 0, D = c, x === "bottom" ? ($ = s, _ = z) : ($ = -j, _ = j)), /* @__PURE__ */ i.createElement(Eo, {
      width: D,
      height: _,
      left: S,
      top: $,
      brushDirection: d,
      disableDraggingSelection: y,
      handleSize: L,
      inheritedMargin: u,
      initialBrushPosition: h,
      ref: f,
      resetOnEnd: b,
      resizeTriggerAreas: p,
      selectedBoxStyle: m,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: E,
      onMouseLeave: A,
      onMouseMove: w,
      useWindowMoveEvents: P,
      renderBrushHandle: N
    });
  }, t;
}(F.Component);
Ao.propTypes = {
  height: K.number,
  width: K.number,
  onChange: K.func,
  onBrushEnd: K.func,
  brushDirection: K.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: K.array,
  brushRegion: K.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: K.oneOf(["left", "right"]),
  xAxisOrientation: K.oneOf(["top", "bottom"]),
  disableDraggingSelection: K.bool,
  resetOnEnd: K.bool,
  handleSize: K.number,
  useWindowMoveEvents: K.bool,
  renderBrushHandle: K.func
};
Ao.defaultProps = {
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
const hg = Ao, pg = (e) => {
  const { transformedData: t, config: n, parseDate: a, formatDate: r, updateConfig: l } = F.useContext(Re), { fontSize: o } = ga(), [s, c] = F.useState([...t]), u = F.useRef(null), d = 15, [h, f] = F.useState({
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
  }, v = (m) => {
    var P;
    if (!m)
      return;
    const { xValues: y } = m, b = (P = n.xAxis) == null ? void 0 : P.dataKey, A = t.filter((N) => y.includes(N[b])), w = y.slice().reverse().find((N) => N !== void 0), E = y.find((N) => N !== void 0), L = (N) => n.runtime.xAxis.type === "date" ? r(a(N)) : N;
    f((N) => {
      var D, _;
      return {
        ...N,
        startPosition: (D = u.current) == null ? void 0 : D.state.start.x,
        endPosition: (_ = u.current) == null ? void 0 : _.state.end.x,
        endValue: L(w),
        startValue: L(E)
      };
    }), c(A);
  };
  F.useEffect(() => {
    l({
      ...n,
      brush: {
        ...n.brush,
        data: s
      }
    });
  }, [s]), F.useEffect(() => {
    n.brush.active || c(t);
  }, [n.brush.active]);
  const x = () => {
    const m = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
    let y = 0;
    const b = 20;
    return n.xAxis.label || (!n.isResponsiveTicks && m && (y = Number(m + n.xAxis.tickWidthMax) / 1.6), !n.isResponsiveTicks && !m && (y = Number(n.xAxis.labelOffset) - b), n.isResponsiveTicks && n.dynamicMarginTop && (y = Number(n.xAxis.labelOffset + n.xAxis.tickWidthMax / 1.6)), n.isResponsiveTicks && !n.dynamicMarginTop && (y = Number(n.xAxis.labelOffset - b))), n.xAxis.label && (!n.isResponsiveTicks && m && (y = Number(n.xAxis.tickWidthMax + m)), !n.isResponsiveTicks && !m && (y = n.xAxis.labelOffset + b), n.isResponsiveTicks && !m && (y = Number(n.dynamicMarginTop ? n.dynamicMarginTop : n.xAxis.labelOffset) + b)), y;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(n.visualizationType))
    return /* @__PURE__ */ i.createElement(be, { display: n.brush.active ? "block" : "none", top: Number(e.yMax) + x(), left: Number(n.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ i.createElement("rect", { fill: "#eee", width: e.xMax, height: n.brush.height, rx: d }), /* @__PURE__ */ i.createElement(
      hg,
      {
        renderBrushHandle: (m) => {
          var y;
          return /* @__PURE__ */ i.createElement(yg, { textProps: h, fontSize: o[n.fontSize], ...m, isBrushing: (y = u.current) == null ? void 0 : y.state.isBrushing });
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
        onChange: v
      }
    ));
}, yg = (e) => {
  const { x: t, isBrushActive: n, isBrushing: a, className: r, textProps: l } = e, o = 8;
  if (!n)
    return null;
  const s = r.includes("left"), c = s ? "scale(-1, 1)" : "translate(0,0)", u = s ? "end" : "start";
  return /* @__PURE__ */ i.createElement(be, { left: t + o / 2, top: -2 }, /* @__PURE__ */ i.createElement(De, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: u, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, s ? l.startValue : l.endValue), /* @__PURE__ */ i.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: a ? "#297EF1" : "#666", strokeWidth: "1", transform: c }));
}, Vt = (e) => {
  var At, St;
  const {
    isEditor: t,
    isDashboard: n,
    computeMarginBottom: a,
    transformedData: r,
    dimensions: l,
    config: o,
    parseDate: s,
    formatDate: c,
    currentViewport: u,
    formatNumber: d,
    handleChartAriaLabels: h,
    updateConfig: f,
    handleLineType: p,
    rawData: g,
    capitalize: v,
    setSharedFilter: x,
    setSharedFilterValue: m,
    getTextWidth: y,
    isDebug: b
  } = F.useContext(Re), { visualizationType: A, visualizationSubType: w, orientation: E, xAxis: L, yAxis: P, runtime: N, debugSvg: D } = o;
  let [_] = l;
  o && o.legend && !o.legend.hide && o.legend.position !== "bottom" && ["lg", "md"].includes(u) && (_ = _ * 0.73);
  const { horizontal: S } = o.heights, $ = E === "horizontal" || o.visualizationType === "Forest Plot", I = !0;
  let j = o.aspectRatio ? _ * o.aspectRatio : o.visualizationType === "Forest Plot" ? o.heights.vertical : o.heights[E];
  const R = _ - N.yAxis.size - (A === "Combo" ? o.yAxis.rightAxisSize : 0);
  let z = j - (E === "horizontal" ? 0 : N.xAxis.size);
  o.visualizationType === "Forest Plot" && (j = j + o.data.length * o.forestPlot.rowHeight, z = z + o.data.length * o.forestPlot.rowHeight), o.brush.active && (j = j + o.brush.height);
  const { minValue: V, maxValue: W, existPositiveValue: M, isAllLine: B } = Pi(o, r), { visSupportsReactTooltip: q } = ru(), { hasTopAxis: U } = jy(o), [Q, ae] = F.useState(!1), [he, Ne] = F.useState({ x: 0, y: 0 }), Le = F.useRef(), Z = F.useRef(), Y = ao(Le, {
    freezeOnceVisible: !1
  }), re = (J) => o.runtime.xAxis.type === "date" ? s(J[o.runtime.originalXAxis.dataKey]).getTime() : J[o.runtime.originalXAxis.dataKey], O = (J, le) => J[le], ue = o.brush.active && ((At = o.brush.data) != null && At.length) ? o.brush.data.map((J) => re(J)) : r.map((J) => re(J)), se = o.orientation === "horizontal" || o.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", ye = { data: r, config: o, minValue: V, maxValue: W, isAllLine: B, existPositiveValue: M, xAxisDataMapped: ue, xMax: R, yMax: z }, { min: ve, max: ge, leftMax: we, rightMax: Te } = iu(ye), { yScaleRight: Ae, hasRightAxis: xe } = so({ config: o, yMax: z, data: r, updateConfig: f }), { xScale: ne, yScale: ee, seriesScale: Be, g1xScale: de, g2xScale: Ce, xScaleNoPadding: Oe, xScaleBrush: je } = Hy({ ...ye, min: ve, max: ge, leftMax: we, rightMax: Te }), [Ve, Qe] = F.useState(null);
  F.useEffect(() => {
    var J;
    Qe((J = Z == null ? void 0 : Z.current) == null ? void 0 : J.getBoundingClientRect());
  }, [Z, o.legend]);
  const ut = (J, le) => {
    if (o.useLogScale && J === 0.1 && (J = 0), !(o.data && !o.data[le] && A === "Forest Plot"))
      return o.visualizationType === "Forest Plot" ? o.data[le][o.xAxis.dataKey] : N.yAxis.type === "date" ? c(s(J)) : E === "vertical" ? d(J, "left", I) : J;
  }, et = (J) => (o.useLogScale && J === 0.1 && (J = 0), N.xAxis.type === "date" && o.visualizationType !== "Forest Plot" ? c(J) : E === "horizontal" && o.visualizationType !== "Forest Plot" ? d(J, "left", I) : o.xAxis.type === "continuous" && o.visualizationType !== "Forest Plot" ? d(J, "bottom", I) : o.visualizationType === "Forest Plot" ? d(J, "left", o.dataFormat.abbreviated, o.runtime.xAxis.prefix, o.runtime.xAxis.suffix, Number(o.dataFormat.roundTo)) : J), at = (J) => {
    const { numTicks: le } = N[J];
    let Ee;
    return J === "yAxis" && (Ee = $ && !le ? r.length : $ && le ? le : !$ && !le ? void 0 : !$ && le && le, Ee === void 0 && !o.dataFormat.roundTo && (Number(ge) <= 3 ? Ee = 2 : Ee = 4), Number(Ee) > Number(ge) && (Ee = Number(ve) < 0 ? Math.round(ge) * 2 : Math.round(ge))), J === "xAxis" && (Ee = $ && !le ? void 0 : $ && le ? le : !$ && !le ? void 0 : !$ && le && le, $ && Ee === void 0 && !o.dataFormat.roundTo && (ge <= 3 ? Ee = 2 : Ee = 4), o.visualizationType === "Forest Plot" && (Ee = o.yAxis.numTicks !== "" ? o.yAxis.numTicks : 4)), Ee;
  }, { tooltipData: $e, showTooltip: He, hideTooltip: X, tooltipOpen: yt, tooltipLeft: Mt, tooltipTop: Pt } = Fc(), {
    handleTooltipMouseOver: it,
    handleTooltipClick: dt,
    handleTooltipMouseOff: T,
    tooltipStyles: oe,
    TooltipListItem: pe,
    getXValueFromCoordinateDate: ce,
    getXValueFromCoordinate: Pe
  } = Kc({
    xScale: ne,
    yScale: ee,
    showTooltip: He,
    hideTooltip: X
  });
  F.useEffect(() => {
    document.querySelector(".isEditor") && ae((le) => !0);
  }), F.useEffect(() => {
    (Y == null ? void 0 : Y.isIntersecting) === !0 && o.animate && setTimeout(() => {
      ae((J) => !0);
    }, 500);
  }, [Y == null ? void 0 : Y.isIntersecting, o.animate]);
  const ke = () => {
    const { visualizationType: J } = o;
    return J === "Combo" && N.forecastingSeriesKeys > 0 || J === "Area Chart" || J === "Line" || J === "Bar";
  }, ie = Number(E === "horizontal" ? o.xAxis.size : o.yAxis.size), Ie = () => o.visualizationType === "Forest Plot" ? o.data.length : at("yAxis"), nt = (J) => {
    const le = J.currentTarget.getBoundingClientRect(), Ee = J.clientX - le.left, fe = J.clientY - le.top;
    Ne({
      x: Ee,
      y: fe
    });
  };
  return isNaN(_) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(qt, { component: "LinearChart" }, /* @__PURE__ */ i.createElement("div", { style: { width: `${_}px`, height: `${j}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ i.createElement(
    "svg",
    {
      onMouseMove: nt,
      width: "100%",
      height: "100%",
      className: `linear ${o.animate ? "animated" : ""} ${Q && o.animate ? "animate" : ""} ${D && "debug"}`,
      role: "img",
      "aria-label": h(o),
      ref: Z,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ i.createElement(Ct, { width: _, height: j, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(A) && /* @__PURE__ */ i.createElement(Qp, { scale: ee, tickLength: o.useLogScale ? 6 : 8, left: Number(N.yAxis.size) - o.yAxis.axisPadding, label: N.yAxis.label, stroke: "#333", tickFormat: (J, le) => ut(J, le), numTicks: Ie() }, (J) => {
      const le = N.horizontal ? (J.axisToPoint.y - J.axisFromPoint.y) / 2 : (J.axisFromPoint.y - J.axisToPoint.y) / 2, Ee = z / J.ticks.length / 2 - z / J.ticks.length * (1 - o.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(be, { className: "left-axis" }, J.ticks.map((fe, Ge) => {
        const rt = J.ticks[0].to.y, Ze = 15, gt = String(fe.value).startsWith("1") || fe.value === 0.1 ? "block" : "none", ht = gt === "block" ? 7 : 0, Nt = { x: fe.to.x - ht, y: fe.to.y };
        return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${fe.value}-${Ge}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Ue, { key: `${fe.value}--hide-hideTicks`, from: fe.from, to: o.useLogScale ? Nt : fe.to, stroke: o.yAxis.tickColor, display: E === "horizontal" ? "none" : "block" }), N.yAxis.gridLines ? /* @__PURE__ */ i.createElement(Ue, { key: `${fe.value}--hide-hideGridLines`, display: (o.useLogScale && gt).toString(), from: { x: fe.from.x + R, y: fe.from.y }, to: fe.from, stroke: "rgba(0,0,0,0.3)" }) : "", E === "horizontal" && w !== "stacked" && o.yAxis.labelPlacement === "On Date/Category Axis" && !o.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          De,
          {
            transform: `translate(${fe.to.x - 5}, ${o.isLollipopChart ? fe.to.y - rt : fe.to.y - rt + (Number(o.barHeight * o.series.length) - Ze) / 2}) rotate(-${o.runtime.horizontal && o.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          fe.formattedValue
        ), E === "horizontal" && w === "stacked" && o.yAxis.labelPlacement === "On Date/Category Axis" && !o.yAxis.hideLabel && /* @__PURE__ */ i.createElement(De, { transform: `translate(${fe.to.x - 5}, ${fe.to.y - rt + (Number(o.barHeight) - Ze) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, fe.formattedValue), E === "horizontal" && A === "Paired Bar" && !o.yAxis.hideLabel && /* @__PURE__ */ i.createElement(De, { transform: `translate(${fe.to.x - 5}, ${fe.to.y - rt + Number(o.barHeight) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, fe.formattedValue), E === "horizontal" && A === "Deviation Bar" && !o.yAxis.hideLabel && /* @__PURE__ */ i.createElement(De, { transform: `translate(${fe.to.x - 5}, ${o.isLollipopChart ? fe.to.y - rt + 2 : fe.to.y - rt + Number(o.barHeight) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, fe.formattedValue), E === "vertical" && A !== "Paired Bar" && !o.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          De,
          {
            display: o.useLogScale ? gt : "block",
            dx: o.useLogScale ? -6 : 0,
            x: o.runtime.horizontal ? fe.from.x + 2 : fe.to.x,
            y: fe.to.y + (o.runtime.horizontal ? Ee : 0),
            angle: -Number(o.yAxis.tickRotation) || 0,
            verticalAnchor: o.runtime.horizontal ? "start" : "middle",
            textAnchor: o.runtime.horizontal ? "start" : "end",
            fill: o.yAxis.tickLabelColor
          },
          fe.formattedValue
        ));
      }), !o.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Ue, { from: J.axisFromPoint, to: N.horizontal ? { x: 0, y: o.visualizationType === "Forest Plot" ? j : Number(S) } : J.axisToPoint, stroke: "#000" }), ee.domain()[0] < 0 && /* @__PURE__ */ i.createElement(Ue, { from: { x: J.axisFromPoint.x, y: ee(0) }, to: { x: R, y: ee(0) }, stroke: "#333" }), A === "Bar" && E === "horizontal" && ne.domain()[0] < 0 && /* @__PURE__ */ i.createElement(Ue, { from: { x: ne(0), y: 0 }, to: { x: ne(0), y: z }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ i.createElement(De, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * N.yAxis.size}, ${le}) rotate(-90)`, fontWeight: "bold", fill: o.yAxis.labelColor }, J.label));
    }),
    xe && /* @__PURE__ */ i.createElement(ey, { scale: Ae, left: Number(_ - o.yAxis.rightAxisSize), label: o.yAxis.rightLabel, tickFormat: (J) => d(J, "right"), numTicks: N.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (J) => {
      const le = N.horizontal ? (J.axisToPoint.y - J.axisFromPoint.y) / 2 : (J.axisFromPoint.y - J.axisToPoint.y) / 2, Ee = z / J.ticks.length / 2 - z / J.ticks.length * (1 - o.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(be, { className: "right-axis" }, J.ticks.map((fe, Ge) => /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${fe.value}-${Ge}`, className: "vx-axis-tick" }, !N.yAxis.rightHideTicks && /* @__PURE__ */ i.createElement(Ue, { from: fe.from, to: fe.to, display: N.horizontal ? "none" : "block", stroke: o.yAxis.rightAxisTickColor }), N.yAxis.rightGridLines ? /* @__PURE__ */ i.createElement(Ue, { from: { x: fe.from.x + R, y: fe.from.y }, to: fe.from, stroke: "rgba(0,0,0,0.3)" }) : "", !o.yAxis.rightHideLabel && /* @__PURE__ */ i.createElement(De, { x: fe.to.x, y: fe.to.y + (N.horizontal ? Ee : 0), verticalAnchor: N.horizontal ? "start" : "middle", textAnchor: "start", fill: o.yAxis.rightAxisTickLabelColor }, fe.formattedValue))), !o.yAxis.rightHideAxis && /* @__PURE__ */ i.createElement(Ue, { from: J.axisFromPoint, to: J.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(De, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${o.yAxis.rightLabelOffsetSize ? o.yAxis.rightLabelOffsetSize : 0}, ${le}) rotate(-90)`, fontWeight: "bold", fill: o.yAxis.rightAxisLabelColor }, J.label));
    }),
    U && o.topAxis.hasLine && /* @__PURE__ */ i.createElement(
      iy,
      {
        stroke: "#333",
        left: Number(N.yAxis.size),
        scale: ne,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    A !== "Paired Bar" && A !== "Spark Line" && /* @__PURE__ */ i.createElement(
      Ba,
      {
        top: N.horizontal && o.visualizationType !== "Forest Plot" ? Number(S) + Number(o.xAxis.axisPadding) : (o.visualizationType === "Forest Plot", z + Number(o.xAxis.axisPadding)),
        left: Number(N.yAxis.size),
        label: N.xAxis.label,
        tickFormat: et,
        scale: ne,
        stroke: "#333",
        numTicks: at("xAxis"),
        tickStroke: "#333"
      },
      (J) => {
        const le = o.visualizationType !== "Forest Plot" ? (J.axisToPoint.x - J.axisFromPoint.x) / 2 : _ / 2, Ee = (_e) => /\s/.test(_e), fe = J.ticks.some((_e) => Ee(_e.value)), Ge = { small: 16, medium: 18, large: 20 }, rt = 8, Ze = Math.max(...J.ticks.map((_e) => y(_e.formattedValue, `normal ${Ge[o.fontSize]}px sans-serif`))), gt = fe ? 180 : 100, ht = J.ticks.map((_e) => y(_e.formattedValue, `normal ${Ge[o.fontSize]}px sans-serif`)), Nt = ht.reduce((_e, xt) => _e + xt, gt), Xt = (R - Nt) / (J.ticks.length - 1);
        let Xe = [0];
        for (let _e = 1; _e < ht.length; _e++)
          Xe[_e] = Xe[_e - 1] + ht[_e - 1] + Xt;
        let ft = !1;
        ht.forEach((_e, xt) => {
          if (Xe[xt] + ht[xt] > Xe[xt + 1]) {
            ft = !0;
            return;
          }
        });
        const Qt = ft && o.isResponsiveTicks ? Ze + rt + 20 : 0, Zt = Number(o.xAxis.tickRotation) > 0 ? Number(o.xAxis.tickRotation) : 0;
        return o.dynamicMarginTop = Qt, o.xAxis.tickWidthMax = Ze, /* @__PURE__ */ i.createElement(be, { className: "bottom-axis" }, J.ticks.map((_e, xt, Li) => {
          const Lt = String(_e.value).startsWith("1") || _e.value === 0.1 ? "block" : "none", Oi = Lt === "block" ? 16 : rt, va = { x: _e.to.x, y: Oi };
          let _i = y(_e.formattedValue, `normal ${Ge[o.fontSize]}px sans-serif`), Mi = 100 / Li.length;
          o.yAxis.tickRotation = o.isResponsiveTicks && o.orientation === "horizontal" ? 0 : o.yAxis.tickRotation, o.xAxis.tickRotation = o.isResponsiveTicks && o.orientation === "vertical" ? 0 : o.xAxis.tickRotation;
          const Kn = o.isResponsiveTicks && ft ? -Number(o.xAxis.maxTickRotation) || -90 : -Number(o.runtime.xAxis.tickRotation);
          return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${_e.value}-${xt}`, className: "vx-axis-tick" }, !o.xAxis.hideTicks && /* @__PURE__ */ i.createElement(Ue, { from: _e.from, to: E === "horizontal" && o.useLogScale ? va : _e.to, stroke: o.xAxis.tickColor, strokeWidth: Lt === "block" ? 1.3 : 1 }), !o.xAxis.hideLabel && /* @__PURE__ */ i.createElement(
            De,
            {
              dy: o.orientation === "horizontal" && o.useLogScale ? 8 : 0,
              display: o.orientation === "horizontal" && o.useLogScale ? Lt : "block",
              x: _e.to.x,
              y: _e.to.y,
              angle: Kn,
              verticalAnchor: Kn < -50 ? "middle" : "start",
              textAnchor: Kn ? "end" : "middle",
              width: ft && !o.isResponsiveTicks && !Number(o[se].tickRotation) ? Mi : _i,
              fill: o.xAxis.tickLabelColor
            },
            _e.formattedValue
          ));
        }), !o.xAxis.hideAxis && /* @__PURE__ */ i.createElement(Ue, { from: J.axisFromPoint, to: J.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(
          De,
          {
            x: le,
            y: o.visualizationType === "Forest Plot" ? o.xAxis.tickWidthMax + 40 : o.orientation === "horizontal" ? Qt || o.xAxis.labelOffset : o.isResponsiveTicks && Qt && !$ ? Qt : Number(Zt) && !o.isResponsiveTicks && !$ ? Number(Zt + Ze / 1.3) : Number(o.xAxis.labelOffset),
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: o.xAxis.labelColor
          },
          J.label
        ));
      }
    ),
    A === "Paired Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ba, { top: z, left: Number(N.yAxis.size), label: N.xAxis.label, tickFormat: N.xAxis.type === "date" ? c : d, scale: de, stroke: "#333", tickStroke: "#333", numTicks: N.xAxis.numTicks || void 0 }, (J) => /* @__PURE__ */ i.createElement(be, { className: "bottom-axis" }, J.ticks.map((le, Ee) => {
      const fe = le.index !== 0 ? o.yAxis.tickRotation : 0, Ge = le.index !== 0 && o.yAxis.tickRotation && o.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${le.value}-${Ee}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Ue, { from: le.from, to: le.to, stroke: "#333" }), !N.yAxis.hideLabel && /* @__PURE__ */ i.createElement(De, { x: le.to.x, y: le.to.y, angle: -fe, verticalAnchor: "start", textAnchor: Ge }, d(le.value, "left")));
    }), !N.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Ue, { from: J.axisFromPoint, to: J.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ i.createElement(
      Ba,
      {
        top: z,
        left: Number(N.yAxis.size),
        label: N.xAxis.label,
        tickFormat: N.xAxis.type === "date" ? c : N.xAxis.dataKey !== "Year" ? d : (J) => J,
        scale: Ce,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: N.xAxis.numTicks || void 0
      },
      (J) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(be, { className: "bottom-axis" }, J.ticks.map((le, Ee) => {
        const fe = le.index !== 0 ? o.yAxis.tickRotation : 0, Ge = le.index !== 0 && o.yAxis.tickRotation && o.yAxis.tickRotation > 0 ? "end" : "middle";
        return /* @__PURE__ */ i.createElement(be, { key: `vx-tick-${le.value}-${Ee}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Ue, { from: le.from, to: le.to, stroke: "#333" }), !N.yAxis.hideLabel && /* @__PURE__ */ i.createElement(De, { x: le.to.x, y: le.to.y, angle: -fe, verticalAnchor: "start", textAnchor: Ge }, d(le.value, "left")));
      }), !N.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Ue, { from: J.axisFromPoint, to: J.axisToPoint, stroke: "#333" })), /* @__PURE__ */ i.createElement(be, null, /* @__PURE__ */ i.createElement(De, { x: R / 2, y: o.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, N.xAxis.label)))
    )),
    A === "Deviation Bar" && ((St = o.series) == null ? void 0 : St.length) === 1 && /* @__PURE__ */ i.createElement(My, { animatedChart: Q, xScale: ne, yScale: ee, width: R, height: z }),
    A === "Paired Bar" && /* @__PURE__ */ i.createElement(By, { originalWidth: _, width: R, height: z }),
    A === "Scatter Plot" && /* @__PURE__ */ i.createElement(
      _y,
      {
        xScale: ne,
        yScale: ee,
        getXAxisData: re,
        getYAxisData: O,
        xMax: R,
        yMax: z,
        handleTooltipMouseOver: it,
        handleTooltipMouseOff: T,
        handleTooltipClick: dt,
        tooltipData: $e,
        showTooltip: He
      }
    ),
    A === "Box Plot" && /* @__PURE__ */ i.createElement(au, { xScale: ne, yScale: ee }),
    (A === "Area Chart" && o.visualizationSubType === "regular" || A === "Combo") && /* @__PURE__ */ i.createElement(Ty, { xScale: ne, yScale: ee, yMax: z, xMax: R, chartRef: Z, width: R, height: z, handleTooltipMouseOver: it, handleTooltipMouseOff: T, tooltipData: $e, showTooltip: He }),
    (A === "Area Chart" && o.visualizationSubType === "stacked" || A === "Combo") && /* @__PURE__ */ i.createElement(wy, { xScale: ne, yScale: ee, yMax: z, xMax: R, chartRef: Z, width: R, height: z, handleTooltipMouseOver: it, handleTooltipMouseOff: T, tooltipData: $e, showTooltip: He }),
    (A === "Bar" || A === "Combo") && /* @__PURE__ */ i.createElement(
      Oy,
      {
        xScale: ne,
        yScale: ee,
        seriesScale: Be,
        xMax: R,
        yMax: z,
        getXAxisData: re,
        getYAxisData: O,
        animatedChart: Q,
        visible: Q,
        handleTooltipMouseOver: it,
        handleTooltipMouseOff: T,
        handleTooltipClick: dt,
        tooltipData: $e,
        showTooltip: He,
        chartRef: Z
      }
    ),
    (A === "Line" || A === "Combo") && /* @__PURE__ */ i.createElement(
      ss,
      {
        xScale: ne,
        yScale: ee,
        getXAxisData: re,
        getYAxisData: O,
        xMax: R,
        yMax: z,
        seriesStyle: o.series,
        handleTooltipMouseOver: it,
        handleTooltipMouseOff: T,
        handleTooltipClick: dt,
        tooltipData: $e,
        showTooltip: He,
        chartRef: Z
      }
    ),
    (A === "Forecasting" || A === "Combo") && /* @__PURE__ */ i.createElement(
      $y,
      {
        showTooltip: He,
        tooltipData: $e,
        xScale: ne,
        yScale: ee,
        width: R,
        le: !0,
        height: z,
        xScaleNoPadding: Oe,
        chartRef: Z,
        getXValueFromCoordinate: Pe,
        handleTooltipMouseOver: it,
        handleTooltipMouseOff: T,
        isBrush: !1
      }
    ),
    o.yAxis.anchors && o.yAxis.anchors.map((J) => /* @__PURE__ */ i.createElement(Ue, { strokeDasharray: p(J.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + o.yAxis.size, y: ee(J.value) }, to: { x: R, y: ee(J.value) }, display: N.horizontal ? "none" : "block" })),
    A === "Forest Plot" && /* @__PURE__ */ i.createElement(
      Fy,
      {
        xScale: ne,
        yScale: ee,
        seriesScale: Be,
        width: R,
        height: z,
        maxWidth: _,
        maxHeight: j,
        getXAxisData: re,
        getYAxisData: O,
        animatedChart: Q,
        visible: Q,
        handleTooltipMouseOver: it,
        handleTooltipMouseOff: T,
        handleTooltipClick: dt,
        tooltipData: $e,
        showTooltip: He,
        chartRef: Z,
        config: o
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(o.visualizationType) && !$ && /* @__PURE__ */ i.createElement(pg, { xScaleBrush: je, yScale: ee, xMax: R, yMax: z }),
    A !== "Bar" && A !== "Paired Bar" && A !== "Box Plot" && A !== "Area Chart" && A !== "Scatter Plot" && A !== "Deviation Bar" && A !== "Forecasting" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ss, { xScale: ne, yScale: ee, getXAxisData: re, getYAxisData: O, xMax: R, yMax: z, seriesStyle: o.series })),
    o.yAxis.anchors && o.yAxis.anchors.map((J, le) => {
      let Ee = ee(J.value);
      if (!J.value)
        return;
      const fe = E === "horizontal" && A === "Bar" ? o.barHeight / 4 : 0;
      if (Ee)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            Ue,
            {
              key: `yAxis-${J.value}--${le}`,
              strokeDasharray: p(J.lineStyle),
              stroke: J.color ? J.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + ie, y: Ee - fe },
              to: { x: _ - o.yAxis.rightAxisSize, y: Ee - fe }
            }
          )
        );
    }),
    o.xAxis.anchors && o.xAxis.anchors.map((J, le) => {
      let Ee = L;
      E === "horizontal" && (Ee = P);
      let fe = Ee.type === "date" ? ne(s(J.value, !1)) : ne(J.value);
      if (fe)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            Ue,
            {
              key: `xAxis-${J.value}--${le}`,
              strokeDasharray: p(J.lineStyle),
              stroke: J.color ? J.color : "rgba(0,0,0,1)",
              fill: J.color ? J.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(fe) + Number(ie), y: 0 },
              to: { x: Number(fe) + Number(ie), y: z }
            }
          )
        );
    }),
    o.regions && o.visualizationType !== "Bar" && o.orientation === "vertical" ? o.regions.map((J) => {
      if (!Object.keys(J).includes("from") || !Object.keys(J).includes("to"))
        return null;
      let le, Ee, fe;
      return o.xAxis.type === "date" && (le = ne(s(J.from).getTime()), Ee = ne(s(J.to).getTime()), fe = Ee - le), o.xAxis.type === "categorical" && (le = ne(J.from), Ee = ne(J.to), fe = Ee - le), !le || !Ee ? null : /* @__PURE__ */ i.createElement(be, { className: "regions", left: Number(N.yAxis.size), key: J.label, onMouseMove: it, onMouseLeave: T, handleTooltipClick: dt, tooltipData: JSON.stringify($e), showTooltip: He }, /* @__PURE__ */ i.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${le} -5
                          L${le} 5
                          M${le} 0
                          L${Ee} 0
                          M${Ee} -5
                          L${Ee} 5`
        }
      ), /* @__PURE__ */ i.createElement("rect", { x: le, y: 0, width: fe, height: z, fill: J.background, opacity: 0.3 }), /* @__PURE__ */ i.createElement(De, { x: le + fe / 2, y: 5, fill: J.color, verticalAnchor: "start", textAnchor: "middle" }, J.label));
    }) : "",
    ke && He && $e && o.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(be, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(Ue, { from: { x: $e.dataXPosition - 10, y: 0 }, to: { x: $e.dataXPosition - 10, y: z }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    ke && He && $e && o.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(be, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: o.yAxis.size ? o.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(Ue, { from: { x: 0, y: $e.dataYPosition }, to: { x: R, y: $e.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    o.filters && o.filters.values.length === 0 && r.length === 0 && /* @__PURE__ */ i.createElement(De, { x: Number(o.yAxis.size) + Number(R / 2), y: j / 2 - o.xAxis.size / 2, textAnchor: "middle" }, o.chartMessage.noData),
    o.visualizationType === "Bar" && o.tooltips.singleSeries && o.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(be, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: o.yAxis.size ? o.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(Ue, { from: { x: 0, y: he.y }, to: { x: R, y: he.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    o.visualizationType === "Bar" && o.tooltips.singleSeries && o.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(be, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(Ue, { from: { x: he.x, y: 0 }, to: { x: he.x, y: z }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), $e && Object.entries($e.data).length > 0 && yt && He && $e.dataYPosition && $e.dataXPosition && !o.tooltips.singleSeries && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${o.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Wc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: Mt, top: Pt }, /* @__PURE__ */ i.createElement("ul", null, typeof $e == "object" && Object.entries($e.data).map((J, le) => /* @__PURE__ */ i.createElement(pe, { item: J, key: le }))))), q() && /* @__PURE__ */ i.createElement(Ay, { id: `cdc-open-viz-tooltip-${N.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${o.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ i.createElement("div", { className: "animation-trigger", ref: Le })));
};
var gg = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function Mr() {
  return Mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Mr.apply(this, arguments);
}
function xg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function cu(e) {
  var t = e.id, n = e.markerWidth, a = n === void 0 ? 3 : n, r = e.markerHeight, l = r === void 0 ? 3 : r, o = e.markerUnits, s = o === void 0 ? "userSpaceOnUse" : o, c = e.children, u = xg(e, gg);
  return /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("marker", Mr({
    id: t,
    markerWidth: a,
    markerHeight: l,
    markerUnits: s
  }, u), c));
}
cu.propTypes = {
  id: K.string.isRequired,
  size: K.number,
  markerWidth: K.oneOfType([K.string, K.number]),
  markerHeight: K.oneOfType([K.string, K.number]),
  markerUnits: K.string,
  refX: K.oneOfType([K.string, K.number]),
  refY: K.oneOfType([K.string, K.number]),
  strokeWidth: K.number,
  children: K.node.isRequired
};
var vg = ["id", "size", "strokeWidth"];
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
function bg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Eg(e) {
  var t = e.id, n = e.size, a = n === void 0 ? 9 : n, r = e.strokeWidth, l = r === void 0 ? 1 : r, o = bg(e, vg), s = a + l * 2, c = a, u = s / 2, d = "0 0, " + a + " " + a / 2 + ", 0 " + a;
  return /* @__PURE__ */ i.createElement(cu, Dr({
    id: t,
    markerWidth: s,
    markerHeight: s,
    refX: c,
    refY: u,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: l
  }, o), /* @__PURE__ */ i.createElement("g", {
    transform: "translate(" + l + ", " + l + ")"
  }, /* @__PURE__ */ i.createElement("polyline", {
    points: d
  })));
}
const Ag = (e) => {
  var _;
  const { width: t, height: n } = e, { transformedData: a, config: r, parseDate: l, formatDate: o, seriesHighlight: s, formatNumber: c, colorScale: u, handleChartAriaLabels: d } = F.useContext(Re);
  let h = t;
  const { minValue: f, maxValue: p } = Pi(r, a), g = { top: 5, right: 10, bottom: 10, left: 10 }, v = n, x = h - r.runtime.yAxis.size, m = v - g.top - 20, y = (S) => r.runtime.xAxis.type === "date" ? l(S[r.runtime.originalXAxis.dataKey]).getTime() : S[r.runtime.originalXAxis.dataKey], b = (S, $) => S[$];
  let A, w;
  const { max: E, min: L } = r.runtime.yAxis, P = Number(E) >= Number(p), N = Number(L) <= Number(f);
  if (a) {
    let S = L && N ? L : f, $ = E && P ? E : Number.MIN_VALUE;
    if ($ === Number.MIN_VALUE && ($ = p), r.runtime.yAxis.paddingPercent) {
      let j = ($ - S) * r.runtime.yAxis.paddingPercent;
      S -= j, $ += j;
    }
    let I = a.map((j) => y(j));
    r.runtime.horizontal ? (A = pt({
      domain: [S, $],
      range: [0, x]
    }), w = r.runtime.xAxis.type === "date" ? pt({ domain: [Math.min(...I), Math.max(...I)] }) : _n({ domain: I, padding: 0.5 }), _n({
      domain: r.runtime.barSeriesKeys || r.runtime.seriesKeys,
      range: [0, m]
    }), w.rangeRound([0, m])) : (S = S < 0 ? S * 1.11 : S, w = pt({
      domain: [S, $],
      range: [m - g.bottom, g.top]
    }), A = _n({
      domain: I,
      range: [g.left, h - g.right]
    }), _n({
      domain: r.runtime.barSeriesKeys || r.runtime.seriesKeys,
      range: [0, x]
    }));
  }
  const D = [A.domain()[0], A.domain()[A.domain().length - 1]];
  return /* @__PURE__ */ i.createElement(qt, { component: "SparkLine" }, /* @__PURE__ */ i.createElement("svg", { role: "img", "aria-label": d(r), width: t, height: 100, className: "sparkline", tabIndex: 0 }, ((_ = r.runtime.lineSeriesKeys) == null ? void 0 : _.length) > 0 ? r.runtime.lineSeriesKeys : r.runtime.seriesKeys.map((S, $) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    be,
    {
      style: { width: h },
      className: "sparkline-group",
      key: `series-${S}`,
      opacity: r.legend.behavior === "highlight" && s.length > 0 && s.indexOf(S) === -1 ? 0.5 : 1,
      display: r.legend.behavior === "highlight" || s.length === 0 || s.indexOf(S) !== -1 ? "block" : "none"
    },
    a.map((I, j) => {
      let R = r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ${c(b(I, S))}` : c(b(I, S)), z = r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ${I[r.runtime.xAxis.dataKey]}` : I[r.runtime.xAxis.dataKey];
      return `${R}${z}`, r.seriesLabel && `${r.seriesLabel}${S}`, /* @__PURE__ */ i.createElement(be, { key: `series-${S}-point-${j}` }, /* @__PURE__ */ i.createElement(De, { display: r.labels ? "block" : "none", x: A(y(I)), y: w(b(I, S)), fill: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[S] : S) : "#000", textAnchor: "middle" }, c(I[S])));
    }),
    /* @__PURE__ */ i.createElement(
      ln,
      {
        curve: bi,
        data: a,
        x: (I) => A(y(I)),
        y: (I) => w(b(I, S)),
        stroke: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[S] : S) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${$})`
      }
    ),
    /* @__PURE__ */ i.createElement(
      Eg,
      {
        id: `arrow--${$}`,
        refX: 2,
        size: 6,
        markerEnd: `url(#arrow--${$})`,
        strokeOpacity: 1,
        fillOpacity: 1,
        fill: u ? u(r.runtime.seriesLabels ? r.runtime.seriesLabels[S] : S) : "#000"
      }
    )
  ), /* @__PURE__ */ i.createElement(
    Ba,
    {
      top: m + g.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: A,
      tickValues: D,
      tickFormat: (I) => r.xAxis.type === "date" ? o(I) : null,
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
var Sg = ["flexDirection", "alignItems", "margin", "display", "children"];
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
function Tg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function pi(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, a = e.alignItems, r = a === void 0 ? "center" : a, l = e.margin, o = l === void 0 ? "0" : l, s = e.display, c = s === void 0 ? "flex" : s, u = e.children, d = Tg(e, Sg);
  return /* @__PURE__ */ i.createElement("div", $r({
    className: "visx-legend-item",
    style: {
      display: c,
      alignItems: r,
      flexDirection: n,
      margin: o
    }
  }, d), u);
}
pi.propTypes = {
  alignItems: K.string,
  margin: K.oneOfType([K.string, K.number]),
  children: K.node,
  display: K.string
};
var kg = ["flex", "label", "margin", "align", "children"];
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
function wg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function yi(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, a = e.label, r = e.margin, l = r === void 0 ? "5px 0" : r, o = e.align, s = o === void 0 ? "left" : o, c = e.children, u = wg(e, kg);
  return /* @__PURE__ */ i.createElement("div", zr({
    className: "visx-legend-label",
    style: {
      justifyContent: s,
      display: "flex",
      flex: n,
      margin: l
    }
  }, u), c || a);
}
yi.propTypes = {
  align: K.string,
  label: K.node,
  flex: K.oneOfType([K.string, K.number]),
  margin: K.oneOfType([K.string, K.number]),
  children: K.node
};
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
function So(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    style: Rr({
      width: n,
      height: a,
      background: t
    }, r)
  });
}
So.propTypes = {
  fill: K.string,
  width: K.oneOfType([K.string, K.number]),
  height: K.oneOfType([K.string, K.number])
};
function uu(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, o = typeof a == "string" || typeof a > "u" ? 0 : a, s = Math.max(l, o), c = s / 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: s,
    height: s
  }, /* @__PURE__ */ i.createElement(be, {
    top: c,
    left: c
  }, /* @__PURE__ */ i.createElement("circle", {
    r: c,
    fill: t,
    style: r
  })));
}
uu.propTypes = {
  fill: K.string,
  width: K.oneOfType([K.string, K.number]),
  height: K.oneOfType([K.string, K.number])
};
function du(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style, l = typeof a == "string" || typeof a > "u" ? 0 : a, o = typeof (r == null ? void 0 : r.strokeWidth) == "number" ? r == null ? void 0 : r.strokeWidth : 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: n,
    height: a
  }, /* @__PURE__ */ i.createElement(be, {
    top: l / 2 - o / 2
  }, /* @__PURE__ */ i.createElement("line", {
    x1: 0,
    x2: n,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: o,
    style: r
  })));
}
du.propTypes = {
  fill: K.string,
  width: K.oneOfType([K.string, K.number]),
  height: K.oneOfType([K.string, K.number])
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
var Gi = function() {
};
function Cg(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, r = a === void 0 ? Gi : a, l = e.size, o = l === void 0 ? Gi : l, s = e.width, c = e.height, u = e.label, d = e.item, h = e.itemIndex, f = e.shapeStyle, p = f === void 0 ? Gi : f, g = {
    width: s,
    height: c,
    item: d,
    itemIndex: h,
    label: u,
    fill: r(oa({}, u)),
    size: o(oa({}, u)),
    style: p(oa({}, u))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ i.createElement(uu, g) : n === "line" ? /* @__PURE__ */ i.createElement(du, g) : /* @__PURE__ */ i.createElement(So, g) : /* @__PURE__ */ i.isValidElement(n) ? /* @__PURE__ */ i.cloneElement(n, g) : n ? /* @__PURE__ */ i.createElement(n, g) : null;
}
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
function fu(e) {
  var t = e.shape, n = t === void 0 ? So : t, a = e.width, r = e.height, l = e.margin, o = e.label, s = e.item, c = e.itemIndex, u = e.fill, d = e.size, h = e.shapeStyle;
  return /* @__PURE__ */ i.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: d ? d(gi({}, o)) : a,
      height: d ? d(gi({}, o)) : r,
      margin: l
    }
  }, Cg({
    shape: n,
    item: s,
    itemIndex: c,
    label: o,
    width: a,
    height: r,
    fill: u,
    shapeStyle: h
  }));
}
fu.propTypes = {
  itemIndex: K.number.isRequired,
  margin: K.oneOfType([K.string, K.number]),
  width: K.oneOfType([K.string, K.number]),
  height: K.oneOfType([K.string, K.number])
};
function mu(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function ys(e) {
  return String(mu(e));
}
function Pg(e) {
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
var Ng = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
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
function Lg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, l;
  for (l = 0; l < a.length; l++)
    r = a[l], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Og = {
  display: "flex"
};
function hu(e) {
  var t = e.className, n = e.style, a = n === void 0 ? Og : n, r = e.scale, l = e.shape, o = e.domain, s = e.fill, c = s === void 0 ? ys : s, u = e.size, d = u === void 0 ? ys : u, h = e.labelFormat, f = h === void 0 ? mu : h, p = e.labelTransform, g = p === void 0 ? Pg : p, v = e.shapeWidth, x = v === void 0 ? 15 : v, m = e.shapeHeight, y = m === void 0 ? 15 : m, b = e.shapeMargin, A = b === void 0 ? "2px 4px 2px 0" : b, w = e.shapeStyle, E = e.labelAlign, L = E === void 0 ? "left" : E, P = e.labelFlex, N = P === void 0 ? "1" : P, D = e.labelMargin, _ = D === void 0 ? "0 4px" : D, S = e.itemMargin, $ = S === void 0 ? "0" : S, I = e.direction, j = I === void 0 ? "column" : I, R = e.itemDirection, z = R === void 0 ? "row" : R, V = e.legendLabelProps, W = e.children, M = Lg(e, Ng), B = o || ("domain" in r ? r.domain() : []), q = g({
    scale: r,
    labelFormat: f
  }), U = B.map(q);
  return W ? /* @__PURE__ */ i.createElement(i.Fragment, null, W(U)) : /* @__PURE__ */ i.createElement("div", {
    className: tt("visx-legend", t),
    style: la({}, a, {
      flexDirection: j
    })
  }, U.map(function(Q, ae) {
    return /* @__PURE__ */ i.createElement(pi, la({
      key: "legend-" + Q.text + "-" + ae,
      margin: $,
      flexDirection: z
    }, M), /* @__PURE__ */ i.createElement(fu, {
      shape: l,
      height: y,
      width: x,
      margin: A,
      item: B[ae],
      itemIndex: ae,
      label: Q,
      fill: c,
      size: d,
      shapeStyle: w
    }), /* @__PURE__ */ i.createElement(yi, la({
      label: Q.text,
      flex: N,
      margin: _,
      align: L
    }, V)));
  }));
}
hu.propTypes = {
  children: K.func,
  className: K.string,
  domain: K.array,
  shapeWidth: K.oneOfType([K.string, K.number]),
  shapeHeight: K.oneOfType([K.string, K.number]),
  shapeMargin: K.oneOfType([K.string, K.number]),
  labelAlign: K.string,
  labelFlex: K.oneOfType([K.string, K.number]),
  labelMargin: K.oneOfType([K.string, K.number]),
  itemMargin: K.oneOfType([K.string, K.number]),
  fill: K.func,
  size: K.func,
  shapeStyle: K.func
};
function _g(e) {
  return /* @__PURE__ */ i.createElement(hu, e);
}
function Mg(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const Dg = () => {
  var D;
  const {
    config: e,
    legend: t,
    colorScale: n,
    seriesHighlight: a,
    highlight: r,
    twoColorPalette: l,
    tableData: o,
    highlightReset: s,
    transformedData: c,
    colorPalettes: u,
    currentViewport: d,
    handleLineType: h
  } = F.useContext(Re), { innerClasses: f, containerClasses: p } = Mg(e), { visualizationType: g, visualizationSubType: v, series: x, runtime: m, orientation: y } = e, b = (_) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? _.reverse() : _, A = ac({
    domain: (D = e.suppressedData) == null ? void 0 : D.map((_) => _.label),
    range: ["none"],
    unknown: "block"
  }), w = (_) => {
    var I, j, R, z, V;
    const S = (I = e.legend) == null ? void 0 : I.colorCode;
    if (g === "Deviation Bar") {
      const [W, M] = l[e.twoColor.palette], B = {
        datum: "X",
        index: 0,
        text: `Below ${e.xAxis.targetLabel}`,
        value: W
      }, q = {
        datum: "X",
        index: 1,
        text: `Above ${e.xAxis.targetLabel}`,
        value: M
      };
      return b([B, q]);
    }
    if (g === "Bar" && v === "regular" && S && (x == null ? void 0 : x.length) === 1) {
      let W = u[e.palette];
      for (; o.length > W.length; )
        W = W.concat(W);
      W = W.slice(0, c.length);
      const M = /* @__PURE__ */ new Set();
      o.forEach((q) => M.add(q[S]));
      const B = Array.from(M).map((q, U) => ({
        datum: q,
        index: U,
        text: q,
        value: W[U]
      }));
      return b(B);
    }
    if (((j = m == null ? void 0 : m.forecastingSeriesKeys) == null ? void 0 : j.length) > 0) {
      let W = [];
      return (z = (R = e.runtime) == null ? void 0 : R.forecastingSeriesKeys) == null || z.map((M, B) => {
        var q;
        return (q = M == null ? void 0 : M.stages) == null ? void 0 : q.map((U, Q) => {
          var Ne, Le, Z, Y;
          let ae = (Ne = Wa[U.color]) != null && Ne[2] ? (Le = Wa[U.color]) == null ? void 0 : Le[2] : (Z = u[U.color]) != null && Z[2] ? (Y = u[U.color]) == null ? void 0 : Y[2] : "#ccc";
          const he = {
            datum: U.key,
            index: Q,
            text: U.key,
            value: ae
          };
          W.push(he);
        });
      }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((M, B) => {
        let q = u[e.palette][B] ? u[e.palette][B] : "#ccc";
        const U = {
          datum: M,
          index: B,
          text: M,
          value: q
        };
        W.push(U);
      }), b(W);
    }
    if (e.series.map((W) => W.name).filter((W) => W).length > 0) {
      let W = u[e.palette];
      for (; o.length > W.length; )
        W = W.concat(W);
      W = W.slice(0, c.length);
      const M = /* @__PURE__ */ new Set();
      e.series.forEach((q) => {
        M.add(q.name ? q.name : q.dataKey);
      });
      const B = Array.from(M).map((q, U) => ({
        datum: q,
        index: U,
        text: q,
        value: n(q)
      }));
      return b(B);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
      const W = _.length - 1;
      let M = [];
      return (V = e.suppressedData) == null || V.forEach(({ label: B, icon: q, value: U }, Q) => {
        if (c.some((ae) => m.seriesKeys.some((he) => ae[he] === U)), B && q) {
          const ae = {
            datum: B,
            index: W + Q,
            text: B,
            icon: /* @__PURE__ */ i.createElement(lo, { color: "#000", size: 15 })
          };
          M.push(ae);
        }
      }), [..._, ...M];
    }
    return b(_);
  }, E = t.position === "bottom" || ["sm", "xs", "xxs"].includes(d), L = {
    marginBottom: E ? "15px" : "0px",
    marginTop: E && y === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : `${E ? e.dynamicMarginTop + 15 : 0}px`
  }, { HighLightedBarUtils: P } = Ci(e);
  let N = P.findDuplicates(e.highlightedBarValues);
  return t ? e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement("aside", { style: L, id: "legend", className: p.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, t.label && /* @__PURE__ */ i.createElement("h2", null, yn(t.label)), t.description && /* @__PURE__ */ i.createElement("p", null, yn(t.description)), /* @__PURE__ */ i.createElement(_g, { scale: n, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (_) => /* @__PURE__ */ i.createElement("div", { className: f.join(" ") }, w(_).map((S, $) => {
    var R, z, V, W;
    let I = ["legend-item", `legend-text--${S.text.replace(" ", "").toLowerCase()}`], j = S.datum;
    if (e.exclusions.active && ((R = e.exclusions.keys) != null && R.includes(j)))
      return null;
    if (m.seriesLabels) {
      let M = e.runtime.seriesLabelsAll.indexOf(j);
      j = e.runtime.seriesKeys[M], ((z = m == null ? void 0 : m.forecastingSeriesKeys) == null ? void 0 : z.length) > 0 && (j = S.text);
    }
    return a.length > 0 && a.includes(j) === !1 && I.push("inactive"), /* @__PURE__ */ i.createElement(
      pi,
      {
        className: I.join(" "),
        tabIndex: 0,
        key: `legend-quantile-${$}`,
        onKeyPress: (M) => {
          M.key === "Enter" && r(S);
        },
        onClick: () => {
          r(S);
        }
      },
      e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ i.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ i.createElement(Ue, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: S.value, strokeWidth: 2, strokeDasharray: h((V = e.series[$]) != null && V.type ? (W = e.series[$]) == null ? void 0 : W.type : "") })) : /* @__PURE__ */ i.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ i.createElement(Zo, { margin: "0", fill: S.value, display: A(S.datum) }), /* @__PURE__ */ i.createElement("div", { style: { marginTop: "2px", marginRight: "6px" } }, S.icon)),
      /* @__PURE__ */ i.createElement(yi, { align: "left", margin: "0 0 0 4px" }, S.text)
    );
  }), N.map((S, $) => {
    let I = "legend-item", j = S.legendLabel;
    return j ? (a.length > 0 && a.includes(j) === !1 && (I += " inactive"), /* @__PURE__ */ i.createElement(
      pi,
      {
        className: I,
        tabIndex: 0,
        key: `legend-quantile-${$}`,
        onKeyPress: (R) => {
          R.key === "Enter" && r(S.legendLabel);
        },
        onClick: () => {
          r(S.legendLabel);
        }
      },
      /* @__PURE__ */ i.createElement(Zo, { fill: "transparent", borderColor: S.color ? S.color : "rgba(255, 102, 1)" }),
      " ",
      /* @__PURE__ */ i.createElement(yi, { align: "left", margin: "0 0 0 4px" }, S.legendLabel ? S.legendLabel : S.value)
    )) : !1;
  }), a.length > 0 && /* @__PURE__ */ i.createElement("button", { className: `legend-reset ${e.theme}`, onClick: (S) => s(S), tabIndex: 0 }, "Reset")))) : null;
}, er = {
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
    shape: "circle",
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
}, Va = (e) => /* @__PURE__ */ F.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ F.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), $g = (e) => {
  var s, c, u, d, h;
  const { config: t, rawData: n, updateConfig: a } = F.useContext(Re), r = (f) => {
    f.orientation === "horizontal" && (f.labels = !1), f.table.show === void 0 && (f.table.show = !isDashboard), f.visualizationType === "Combo" && (f.orientation = "vertical");
  }, l = (f = !0) => {
    let p = {};
    return n.forEach((g) => {
      Object.keys(g).forEach((v) => p[v] = !0);
    }), f && Object.keys(p).forEach((g) => {
      (t.series && t.series.filter((v) => v.dataKey === g).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(g)) && delete p[g];
    }), Object.keys(p);
  }, o = (f, p, g, v) => {
    if (f === "boxplot" && p === "legend") {
      a({
        ...t,
        [f]: {
          ...t[f],
          [p]: {
            ...t.boxplot[p],
            [g]: v
          }
        }
      });
      return;
    }
    if (f === "boxplot" && p === "labels") {
      a({
        ...t,
        [f]: {
          ...t[f],
          [p]: {
            ...t.boxplot[p],
            [g]: v
          }
        }
      });
      return;
    }
    if (f === "forestPlot" && p) {
      let b = {
        ...t,
        [f]: {
          ...t[f],
          [p]: {
            ...t.forestPlot[p],
            [g]: v
          }
        }
      };
      a(b);
      return;
    }
    if (f === "columns" && p !== "" && g !== "") {
      a({
        ...t,
        [f]: {
          ...t[f],
          [p]: {
            ...t[f][p],
            [g]: v
          }
        }
      });
      return;
    }
    if (f === null && p === null) {
      let b = { ...t, [g]: v };
      r(b), a(b);
      return;
    }
    const x = Array.isArray(t[f]);
    let m = x ? [...t[f], v] : { ...t[f], [g]: v };
    p !== null && (x ? (m = [...t[f]], m[p] = { ...m[p], [g]: v }) : typeof v == "string" ? m[p] = v : m = { ...t[f], [p]: { ...t[f][p], [g]: v } });
    let y = { ...t, [f]: m };
    r(y), a(y);
  };
  return /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "Forest Plot Settings", (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ i.createElement(Va, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(
    Me,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: o,
      options: l(!1),
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ i.createElement(
    Me,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (f) => {
        f.target.value !== "" && f.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: f.target.value
          }
        }), f.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ i.createElement(me, { type: "text", value: ((s = t.forestPlot) == null ? void 0 : s.title) || "", updateField: o, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Column Settings"), /* @__PURE__ */ i.createElement(
    Me,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (f) => {
        f.target.value !== "" && f.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            estimateField: f.target.value
          }
        }), f.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    Me,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (f) => {
        f.target.value !== "" && f.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            shape: f.target.value
          }
        }), f.target.value = "";
      },
      options: ["text", "circle", "square"]
    }
  ), /* @__PURE__ */ i.createElement(
    Me,
    {
      value: t.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: t.forestPlot.lower || "Select",
      onChange: (f) => {
        f.target.value !== "" && f.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            lower: f.target.value
          }
        }), f.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    Me,
    {
      value: t.forestPlot.upper,
      label: "Upper CI Column",
      initial: t.forestPlot.upper || "Select",
      required: !0,
      onChange: (f) => {
        f.target.value !== "" && f.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            upper: f.target.value
          }
        }), f.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    Me,
    {
      value: t.forestPlot.pooledResult.column,
      label: "Pooled Result Row",
      initial: t.forestPlot.pooledResult.column || "Select",
      required: !1,
      onChange: (f) => {
        f.target.value !== "" && f.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            pooledResult: {
              ...t.forestPlot.pooledResult,
              column: f.target.value
            }
          }
        }), f.target.value = "";
      },
      options: ["None", ...t.data.map((f) => f[t.xAxis.dataKey])]
    }
  ), /* @__PURE__ */ i.createElement(Se, { value: ((u = (c = t.forestPlot) == null ? void 0 : c.lineOfNoEffect) == null ? void 0 : u.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: o }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Width Settings"), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffset || 0,
      onChange: (f) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffset: f.target.value
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
      onChange: (f) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffsetMobile: f.target.value
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
      onChange: (f) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffset: f.target.value
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
      onChange: (f) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: f.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement(me, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: o, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ i.createElement(me, { type: "text", value: ((d = t.forestPlot) == null ? void 0 : d.leftLabel) || "", updateField: o, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ i.createElement(me, { type: "text", value: ((h = t.forestPlot) == null ? void 0 : h.rightLabel) || "", updateField: o, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(
    Me,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (f) => {
        f.target.value !== "" && f.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              scalingColumn: f.target.value
            }
          }
        }), f.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ i.createElement(
    "input",
    {
      min: 3,
      max: 6,
      value: t.forestPlot.radius.min || 3,
      onChange: (f) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              min: Number(f.target.value)
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
      onChange: (f) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              max: Number(f.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  ))));
}, Wn = i.createContext(), zg = (e) => {
  const { updateConfig: t, config: n, rawData: a } = F.useContext(Re), { getColumns: r, selectComponent: l } = e, o = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], s = (c, u, d) => {
    let h = [...n.series];
    if (h[c][d] = u, d === "type" && u === "Bar" && (h[c].axis = "Left"), h[c].type === "Forecasting") {
      let f = Array.from(new Set(a.map((g) => g[h[c].dataKey]))), p = [];
      f.forEach((g) => {
        p.push({ key: g });
      }), h[c].stages = p, h[c].stageColumn = h[c].dataKey;
    }
    t({ ...n, series: h });
  };
  return /* @__PURE__ */ i.createElement(Wn.Provider, { value: { updateSeries: s, supportedRightAxisTypes: o, getColumns: r, selectComponent: l } }, e.children);
}, Rg = (e) => {
  const { config: t, updateConfig: n } = F.useContext(Re), { series: a, index: r } = e;
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
  return Object.keys(mi).map((c) => s.push(mi[c])), /* @__PURE__ */ i.createElement(
    rn,
    {
      initial: "Select an option",
      value: a.lineType ? a.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (c) => {
        o(r, c.target.value);
      },
      options: s
    }
  );
}, Fg = (e) => {
  const { config: t } = F.useContext(Re), { updateSeries: n } = F.useContext(Wn), { index: a, series: r } = e, l = () => {
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
        onChange: (o) => {
          n(a, o.target.value, "type");
        },
        options: l()
      }
    );
}, Bg = (e) => {
  const { config: t, updateConfig: n, rawData: a } = F.useContext(Re), { updateSeries: r, getColumns: l } = F.useContext(Wn), { index: o, series: s } = e;
  return /* @__PURE__ */ i.createElement(
    rn,
    {
      initial: "Select an option",
      value: s.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (c) => {
        let u = [], d = new Set(a == null ? void 0 : a.map((f) => f[c.target.value]));
        d = Array.from(d), d = d.filter((f) => f !== void 0), d.forEach((f) => u.push({ key: f }));
        const h = [...t.series];
        h[o] = { ...h[o], stages: u, stageColumn: c.target.value }, n({
          ...t,
          series: h
        });
      },
      options: l(!1)
    }
  );
}, Hg = (e) => {
  const { config: t, rawData: n } = F.useContext(Re), { updateSeries: a } = F.useContext(Wn), { index: r, series: l } = e;
  if (l.type !== "Forecasting" || !n || !l.stageColumn)
    return;
  let o = new Set(n.map((s) => s[l.stageColumn]));
  return o = Array.from(o), o = o.filter((s) => s !== void 0), /* @__PURE__ */ i.createElement(
    rn,
    {
      initial: "Select an option",
      value: l.stageItem,
      label: "Forecasting Item Column",
      onChange: (s) => {
        a(r, s.target.value, "stageItem");
      },
      options: o
    }
  );
}, Vg = (e) => {
  const { config: t } = F.useContext(Re), { updateSeries: n, supportedRightAxisTypes: a } = F.useContext(Wn), { index: r, series: l } = e;
  if (!(t.visualizationType !== "Combo" || !l) && a.includes(l.type))
    return /* @__PURE__ */ i.createElement(
      rn,
      {
        initial: "Select an option",
        value: l.axis ? l.axis : "Left",
        label: "Series Axis",
        onChange: (o) => {
          n(r, o.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, Wg = (e) => {
  var l;
  const { config: t, updateConfig: n } = F.useContext(Re), { index: a, series: r } = e;
  if (r.type === "Forecasting" && r)
    return (l = r == null ? void 0 : r.stages) == null ? void 0 : l.map((o, s) => {
      var c, u, d, h;
      return /* @__PURE__ */ i.createElement(
        rn,
        {
          key: `${o}--${s}`,
          initial: "Select an option",
          value: (u = (c = t.series) == null ? void 0 : c[a].stages) != null && u[s].color ? (h = (d = t.series) == null ? void 0 : d[a].stages) == null ? void 0 : h[s].color : "Select",
          label: `${o.key} Series Color`,
          onChange: (f) => {
            const p = [...t.series], g = p[a].stages;
            g[s].color = f.target.value, p[a] = { ...p[a], stages: g }, n({
              ...t,
              series: p
            });
          },
          options: Object.keys(Wa)
        }
      );
    });
}, Kg = (e) => {
  var o;
  const { config: t, updateConfig: n } = F.useContext(Re), { series: a, index: r } = e, { getColumns: l } = F.useContext(Wn);
  if (a.type === "Forecasting")
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement(gn, { allowZeroExpanded: !0 }, (o = a == null ? void 0 : a.confidenceIntervals) == null ? void 0 : o.map((s, c) => {
      const u = s.showInTooltip ? s.showInTooltip : !1, d = (h, f, p) => {
        h.preventDefault();
        let g = [...t.series];
        g[f].confidenceIntervals[p].showInTooltip = !u, n({
          ...t,
          series: g
        });
      };
      return /* @__PURE__ */ i.createElement(ot, { className: "series-item series-item--chart", key: `${c}` }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Group ", c + 1, /* @__PURE__ */ i.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (h) => {
            h.preventDefault();
            const f = [...t.series[r].confidenceIntervals];
            f.splice(c, 1);
            const p = [...t.series];
            p[r] = { ...p[r], confidenceIntervals: [...f] }, n({
              ...t,
              series: p
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (h) => d(h, r, c) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, u && /* @__PURE__ */ i.createElement(Ns, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: u || !1, readOnly: !0 }))), /* @__PURE__ */ i.createElement(
        rn,
        {
          initial: "Select an option",
          value: t.series[r].confidenceIntervals[c].low ? t.series[r].confidenceIntervals[c].low : "Select",
          label: "Low Confidence Interval",
          onChange: (h) => {
            const f = [...t.series[r].confidenceIntervals];
            f[c].low = h.target.value;
            const p = [...t.series];
            p[r] = { ...p[r], confidenceIntervals: f }, n({
              ...t,
              series: p
            });
          },
          options: l()
        }
      ), /* @__PURE__ */ i.createElement(
        rn,
        {
          initial: "Select an option",
          value: t.series[r].confidenceIntervals[c].high ? t.series[r].confidenceIntervals[c].high : "Select",
          label: "High Confidence Interval",
          onChange: (h) => {
            const f = [...t.series[r].confidenceIntervals];
            f[c].high = h.target.value;
            const p = [...t.series];
            p[r] = { ...p[r], confidenceIntervals: f }, n({
              ...t,
              series: p
            });
          },
          options: l()
        }
      )));
    })), /* @__PURE__ */ i.createElement(
      "button",
      {
        className: "btn full-width",
        onClick: (s) => {
          s.preventDefault();
          let c = null;
          t.series[r].confidenceIntervals ? c = [...t.series[r].confidenceIntervals] : c = [];
          const u = [...t.series];
          u[r] = { ...u[r], confidenceIntervals: [...c, { high: "", low: "" }] }, n({
            ...t,
            series: u
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, jg = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: r } = F.useContext(Re), l = ["Bar", "Line", "Area Chart", "dashed-sm", "dashed-md", "dashed-lg"];
  if (a.visualizationType === "Combo" || !l.includes(t.type))
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
    r(h);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ i.createElement(
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
}, Ig = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: r } = F.useContext(Re), l = (o) => {
    let s = [...a.series];
    s[o].tooltip && s[o].tooltip, s[o].tooltip = !s[o].tooltip, r({
      ...a,
      series: s
    });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (o) => l(n) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ i.createElement(Ns, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, qg = (e) => {
  const { config: t, updateConfig: n } = F.useContext(Re), { series: a, index: r } = e, l = (s) => {
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
  return t.series && t.series.length > 1 && /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: (s) => o(s, a) }, "Remove");
}, pu = (e) => {
  const { config: t } = F.useContext(Re), { series: n, getItemStyle: a, sortableItemStyles: r, chartsWithOptions: l, index: o } = e;
  return /* @__PURE__ */ i.createElement(As, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: o }, (s, c) => /* @__PURE__ */ i.createElement("div", { key: o, className: c.isDragging ? "currently-dragging" : "", style: a(c.isDragging, s.draggableProps.style, r), ref: s.innerRef, ...s.draggableProps, ...s.dragHandleProps }, /* @__PURE__ */ i.createElement(gn, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(ot, { className: "series-item series-item--chart" }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(st, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ i.createElement(ze, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ i.createElement(Ut.Button.Remove, { series: n, index: o }))), l.includes(t.visualizationType) && /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(Ut.Input.Name, { series: n, index: o }), /* @__PURE__ */ i.createElement(Ut.Dropdown.SeriesType, { series: n, index: o }), /* @__PURE__ */ i.createElement(Ut.Dropdown.AxisPosition, { series: n, index: o }), /* @__PURE__ */ i.createElement(Ut.Dropdown.LineType, { series: n, index: o }), /* @__PURE__ */ i.createElement(Ut.Dropdown.ForecastingColor, { series: n, index: o }), /* @__PURE__ */ i.createElement(Ut.Dropdown.ConfidenceInterval, { series: n, index: o }), /* @__PURE__ */ i.createElement(Ut.Checkbox.DisplayInTooltip, { series: n, index: o }))))));
}, Ug = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: r } = e;
  return t.map((l, o) => /* @__PURE__ */ i.createElement(pu, { getItemStyle: n, sortableItemStyles: a, chartsWithOptions: r, series: l, index: o, key: `series-list-${o}` }));
}, Ut = {
  Wrapper: zg,
  Dropdown: {
    SeriesType: Fg,
    AxisPosition: Vg,
    ConfidenceInterval: Kg,
    LineType: Rg,
    ForecastingStage: Bg,
    ForecastingColumn: Hg,
    ForecastingColor: Wg
  },
  Input: {
    Name: jg
  },
  Checkbox: {
    DisplayInTooltip: Ig
  },
  Button: {
    Remove: qg
  },
  Item: pu,
  List: Ug
}, tr = {
  ForestPlot: $g,
  Series: Ut
}, Yg = (e, t) => {
  let n = [], a = [], r = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    n = Object.keys(nr).filter((o) => l ? o.endsWith("reverse") : !o.endsWith("reverse"));
  } else {
    const l = [], o = [];
    for (const s in Ln) {
      const c = s.startsWith("sequential"), u = s.startsWith("qualitative"), d = s.endsWith("reverse");
      c && (!e.isPaletteReversed && !d || e.isPaletteReversed && d) && l.push(s), u && (!e.isPaletteReversed && !d || e.isPaletteReversed && d) && o.push(s);
    }
    a = l, r = o;
  }
  return F.useEffect(() => {
    let l = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: l } });
  }, [e.twoColor.isPaletteReversed]), F.useEffect(() => {
    let l = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (l = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (l = e.palette.slice(0, -7)), t({ ...e, palette: l });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: a, nonSequential: r };
};
F.memo(({ config: e, updateConfig: t, data: n }) => {
  const a = () => {
    const c = /* @__PURE__ */ new Set();
    return n.forEach((u) => {
      Object.keys(u).forEach((d) => {
        c.add(d);
      });
    }), [...c];
  }, r = () => ["star"];
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
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.suppressedData && e.suppressedData.map(({ label: c, column: u, value: d, icon: h }, f) => /* @__PURE__ */ i.createElement("div", { key: `suppressed-${f}`, className: "edit-block" }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (p) => {
        p.preventDefault(), l(f);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(Me, { value: u, initial: "Select", fieldName: "column", label: "Column", updateField: (p, g, v, x) => s(v, x, f), options: a() }), /* @__PURE__ */ i.createElement(me, { value: d, fieldName: "value", label: "Value", updateField: (p, g, v, x) => s(v, x, f) }), /* @__PURE__ */ i.createElement(Me, { value: h, initial: "Select", fieldName: "icon", label: "Icon", updateField: (p, g, v, x) => s(v, x, f), options: r() }), /* @__PURE__ */ i.createElement(me, { value: c, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (p, g, v, x) => s(v, x, f) }))), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: o, className: "btn full-width" }, "Add Suppression Class"));
});
const Xg = F.memo(({ config: e, updateConfig: t, data: n }) => {
  const a = () => {
    const u = /* @__PURE__ */ new Set();
    return n.forEach((d) => {
      Object.keys(d).forEach((h) => {
        u.add(h);
      });
    }), [...u];
  }, r = () => e.visualizationType === "Line" || e.visualizationType === "Combo" ? ["suppression", "effect"] : ["suppression"], l = () => {
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
    let f = [];
    e.preliminaryData && (f = [...e.preliminaryData]), f[h][u] = d, t({ ...e, preliminaryData: f });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.preliminaryData && e.preliminaryData.map(({ seriesKey: u, type: d, label: h, column: f, value: p, style: g }, v) => /* @__PURE__ */ i.createElement("div", { key: `preliminaryData-${v}`, className: "edit-block" }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (x) => {
        x.preventDefault(), o(v);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(Me, { value: d, initial: "Select", fieldName: "type", label: "Type", updateField: (x, m, y, b) => c(y, b, v), options: r() }), /* @__PURE__ */ i.createElement(Me, { value: u, initial: "Select", fieldName: "seriesKey", label: "Data Series", updateField: (x, m, y, b) => c(y, b, v), options: a() }), /* @__PURE__ */ i.createElement(Me, { value: f, initial: "Select", fieldName: "column", label: "Column", updateField: (x, m, y, b) => c(y, b, v), options: a() }), /* @__PURE__ */ i.createElement(me, { value: p, fieldName: "value", label: "Value", updateField: (x, m, y, b) => c(y, b, v) }), /* @__PURE__ */ i.createElement(Me, { value: g, initial: "Select", fieldName: "style", label: "Style", updateField: (x, m, y, b) => c(y, b, v), options: l() }), /* @__PURE__ */ i.createElement(me, { value: h, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (x, m, y, b) => c(y, b, v) }))), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: s, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), Qg = F.memo(({ config: e, updateConfig: t }) => {
  let n = (o, s, c) => {
    let u = [];
    e.regions && (u = [...e.regions]), u[c][o] = s, t({ ...e, regions: u });
  }, a = (o, s, c, u, d) => n(c, u, d), r = (o) => {
    let s = [];
    e.regions && (s = [...e.regions]), s.splice(o, 1), t({ ...e, regions: s });
  }, l = () => {
    let o = [];
    e.regions && (o = [...e.regions]), o.push({}), t({ ...e, regions: o });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.regions && e.regions.map(({ label: o, color: s, from: c, to: u, background: d }, h) => /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `region-${h}` }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (f) => {
        f.preventDefault(), r(h);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(me, { value: o, label: "Region Label", fieldName: "label", i: h, updateField: a }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(me, { value: s, label: "Text Color", fieldName: "color", updateField: (f, p, g, v) => n(g, v, h) }), /* @__PURE__ */ i.createElement(me, { value: d, label: "Background", fieldName: "background", updateField: (f, p, g, v) => n(g, v, h) })), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    me,
    {
      value: c,
      label: "From Value",
      fieldName: "from",
      updateField: (f, p, g, v) => n(g, v, h),
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "The date needs to be in the original format of the data. Not the displayed format of the data.")))
    }
  ), /* @__PURE__ */ i.createElement(me, { value: u, label: "To Value", fieldName: "to", updateField: (f, p, g, v) => n(g, v, h) })))), !e.regions && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (o) => {
        o.preventDefault(), l();
      }
    },
    "Add Region"
  ));
}), Zg = () => {
  var To, ko, wo, Co, Po, No, Lo, Oo, _o, Mo, Do, $o, zo, Ro, Fo, Bo, Ho, Vo, Wo, Ko, jo, Io, qo;
  const { config: e, updateConfig: t, transformedData: n, loading: a, colorPalettes: r, twoColorPalette: l, unfilteredData: o, excludedData: s, isDashboard: c, setParentConfig: u, missingRequiredSections: d, isDebug: h, setFilteredData: f, lineOptions: p, rawData: g } = F.useContext(Re), { minValue: v, maxValue: x, existPositiveValue: m, isAllLine: y } = Pi(e, o), { twoColorPalettes: b, sequential: A, nonSequential: w } = Yg(e, t), E = { data: n, config: e }, { leftMax: L, rightMax: P } = iu(E), {
    enabledChartTypes: N,
    headerColors: D,
    visSupportsTooltipLines: _,
    visSupportsNonSequentialPallete: S,
    visSupportsSequentialPallete: $,
    visSupportsReverseColorPalette: I,
    visHasLabelOnData: j,
    visHasNumbersOnBars: R,
    visHasAnchors: z,
    visHasBarBorders: V,
    visHasDataCutoff: W,
    visCanAnimate: M,
    visHasLegend: B,
    visHasBrushChart: q,
    visSupportsDateCategoryAxis: U,
    visSupportsValueAxisMin: Q,
    visSupportsValueAxisMax: ae,
    visSupportsDateCategoryAxisLabel: he,
    visSupportsDateCategoryAxisLine: Ne,
    visSupportsDateCategoryAxisTicks: Le,
    visSupportsDateCategoryTickRotation: Z,
    visSupportsDateCategoryNumTicks: Y,
    visSupportsRegions: re,
    visSupportsFilters: O,
    visSupportsValueAxisGridLines: ue,
    visSupportsValueAxisLine: se,
    visSupportsValueAxisTicks: ye,
    visSupportsValueAxisLabels: ve,
    visSupportsBarSpace: ge,
    visSupportsBarThickness: we,
    visSupportsFootnotes: Te,
    visSupportsSuperTitle: Ae,
    visSupportsDataCutoff: xe,
    visSupportsChartHeight: ne,
    visSupportsLeftValueAxis: ee,
    visSupportsTooltipOpacity: Be,
    visSupportsRankByValue: de,
    visSupportsResponsiveTicks: Ce,
    visSupportsDateCategoryHeight: Oe,
    visHasDataSuppression: je
  } = ru(), { handleFilterOrder: Ve, filterOrderOptions: Qe, filterStyleOptions: ut } = wu({ config: e, setConfig: t, filteredData: n, setFilteredData: f });
  F.useEffect(() => {
    let k = [];
    e.series && (k = e.series.map((C) => ({
      ...C,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: k
    });
  }, [e.visualizationType]), F.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []), F.useEffect(() => {
    e.visualizationType !== "Bar" && t({ ...e, tooltips: { ...e.tooltips, singleSeries: !1 } });
  }, [e.visualizationType]);
  const { hasRightAxis: et } = so({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), at = (k, C) => ({
    ...C
  }), $e = {
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
  }, He = (k) => {
    k.orientation === "horizontal" && (k.labels = !1), k.table.show === void 0 && (k.table.show = !c), k.visualizationType === "Combo" && (k.orientation = "vertical");
  }, X = (k, C, H, G) => {
    if (h && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", k, C, H, G), k === "boxplot" && C === "legend") {
      t({
        ...e,
        [k]: {
          ...e[k],
          [C]: {
            ...e.boxplot[C],
            [H]: G
          }
        }
      });
      return;
    }
    if (k === "boxplot" && C === "labels") {
      t({
        ...e,
        [k]: {
          ...e[k],
          [C]: {
            ...e.boxplot[C],
            [H]: G
          }
        }
      });
      return;
    }
    if (k === "columns" && C !== "" && H !== "") {
      t({
        ...e,
        [k]: {
          ...e[k],
          [C]: {
            ...e[k][C],
            [H]: G
          }
        }
      });
      return;
    }
    if (k === null && C === null) {
      let jn = { ...e, [H]: G };
      He(jn), t(jn);
      return;
    }
    const qe = Array.isArray(e[k]);
    let Tt = qe ? [...e[k], G] : { ...e[k], [H]: G };
    C !== null && (qe ? (Tt = [...e[k]], Tt[C] = { ...Tt[C], [H]: G }) : typeof G == "string" ? Tt[C] = G : Tt = { ...e[k], [C]: { ...e[k][C], [H]: G } });
    let Ft = { ...e, [k]: Tt };
    He(Ft), t(Ft);
  }, [yt, Mt] = F.useState(!0);
  if (a)
    return null;
  F.useEffect(() => {
    var k;
    (k = e.general) != null && k.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const Pt = (k) => {
    t({
      ...e,
      lollipopShape: k
    });
  }, it = (k) => {
    let C = [...e.filters];
    C.splice(k, 1), t({ ...e, filters: C });
  }, dt = (k, C, H) => {
    let G = [...e.filters];
    G[C][k] = H, t({ ...e, filters: G });
  }, T = () => {
    let k = e.filters ? [...e.filters] : [];
    k.push({ values: [] }), t({ ...e, filters: k });
  }, oe = (k) => {
    let C = e.series ? [...e.series] : [], H = Array.from(new Set(n.map((qe) => qe[k]))), G = [];
    H.forEach((qe) => {
      G.push({ key: qe });
    }), e.visualizationType === "Forecasting" ? C.push({ dataKey: k, type: e.visualizationType, stages: G, stageColumn: k, axis: "Left", tooltip: !0 }) : C.push({ dataKey: k, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: C });
  }, pe = (k) => {
    const C = e.series[0].dataKey, H = n.sort((qe, Tt) => qe[C] - Tt[C]), G = k === "asc" ? H : H.reverse();
    t({ ...e }, G);
  }, ce = (k) => {
    let C = [...e.exclusions.keys];
    C.push(k);
    let H = { ...e.exclusions, keys: C };
    t({ ...e, exclusions: H });
  }, Pe = (k) => {
    let C = -1, H = [...e.exclusions.keys];
    for (let G = 0; G < H.length; G++)
      if (H[G] === k) {
        C = G;
        break;
      }
    if (C !== -1) {
      H.splice(C, 1);
      let G = { ...e.exclusions, keys: H }, qe = { ...e, exclusions: G };
      H.length === 0 && delete qe.exclusions.keys, t(qe);
    }
  }, ke = () => {
    let k = {};
    return o.forEach((C) => {
      Object.keys(C).forEach((H) => k[H] = !0);
    }), Object.keys(k);
  }, ie = (k = !0) => {
    let C = {};
    if (o.forEach((H) => {
      Object.keys(H).forEach((G) => C[G] = !0);
    }), k) {
      const { lower: H, upper: G } = e.confidenceKeys || {};
      Object.keys(C).forEach((qe) => {
        (e.series && e.series.filter((Tt) => Tt.dataKey === qe).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(qe) && (H && G || H || G) && qe !== H && qe !== G) && delete C[qe];
      });
    }
    return Object.keys(C);
  }, Ie = (k) => {
    if (!k)
      return [];
    const C = /* @__PURE__ */ new Set();
    for (let H = 0; H < k.length; H++)
      for (const [G] of Object.entries(k[H]))
        C.add(G);
    return Array.from(C);
  }, nt = (k, C = !1) => {
    let H = [];
    return s.forEach((G) => {
      H.push(G[k]);
    }), C ? [...new Set(H)] : H;
  }, At = () => (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.visualizationSubType !== "stacked" && (e.orientation === "horizontal" || e.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"], St = () => {
    Mt(!yt);
  }, J = () => /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ i.createElement("p", null, e.runtime.editorErrorMessage))), le = () => {
    const k = (C) => {
      C.preventDefault();
      let H = { ...e };
      delete H.newViz, t(H);
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement("button", { className: "btn", style: { margin: "1em auto" }, disabled: d(), onClick: k }, "I'm Done")));
  }, Ee = () => {
    let k = JSON.parse(JSON.stringify(e));
    return d() === !1 && delete k.newViz, delete k.runtime, k;
  };
  F.useEffect(() => {
    if (u) {
      const k = Ee();
      u(k);
    }
  }, [e]), F.useEffect(() => {
    const k = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], C = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: C
      },
      yAxis: {
        ...e.yAxis,
        anchors: k
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
  const fe = F.useCallback(() => {
    const k = [...e.exclusions.keys];
    return /* @__PURE__ */ i.createElement("ul", { className: "series-list" }, k.map((C, H) => /* @__PURE__ */ i.createElement("li", { key: C }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name", "data-title": C }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name--text" }, C)), /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: () => Pe(C) }, "×"))));
  }, [e]), Ge = (k, C) => {
    let H = e.series, [G] = H.splice(k, 1);
    H.splice(C, 0, G), t({ ...e, series: H });
  };
  e.isLollipopChart && ((To = e == null ? void 0 : e.series) == null ? void 0 : To.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((ko = e == null ? void 0 : e.series) == null ? void 0 : ko.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((wo = e == null ? void 0 : e.series) == null ? void 0 : wo.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((Co = e == null ? void 0 : e.series) == null ? void 0 : Co.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const rt = e.orientation === "horizontal" ? "xAxis" : "yAxis", [Ze, gt] = F.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), ht = () => {
    const k = e[rt].max, C = e[rt].rightMax;
    let H = "", G = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (k && parseFloat(k) < parseFloat(x) && m):
          H = "Max value must be more than " + x;
          break;
        case (k && parseFloat(k) < 0 && !m):
          H = "Value must be more than or equal to 0";
          break;
        default:
          H = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (k && parseFloat(k) < L):
          H = "Max value must be more than " + L;
          break;
        case (C && parseFloat(C) < P):
          G = "Max value must be more than " + P;
          break;
        case (k && parseFloat(k) < 0 && !m):
          H = "Value must be more than or equal to 0";
          break;
        default:
          H = "";
      }
    gt((qe) => ({ ...qe, maxMsg: H, rightMaxMessage: G }));
  }, Nt = () => {
    const k = parseFloat(e[rt].min);
    let C = Number(v), H = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && k < 0):
        H = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && k > C):
        H = "Value should not exceed " + v;
        break;
      case (e.visualizationType === "Combo" && y && k > C):
        H = "Value should not exceed " + v;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !y) && C > 0 && k > 0):
        H = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && k >= Math.min(C, e.xAxis.target)):
        H = "Value must be less than " + Math.min(C, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && k && C < 0 && k > C):
        H = "Value should not exceed " + v;
        break;
      default:
        H = "";
    }
    gt((G) => ({ ...G, minMsg: H }));
  };
  F.useEffect(() => {
    Nt(), ht();
  }, [v, x, e]);
  const Xt = ((Po = e == null ? void 0 : e.dataKey) == null ? void 0 : Po.includes("http://")) || ((No = e == null ? void 0 : e.dataKey) == null ? void 0 : No.includes("https://")), Xe = () => {
    var k, C;
    if (h !== void 0 && h && !((k = e == null ? void 0 : e.xAxis) != null && k.dataKey)) {
      let H = ie(!1);
      if (H.includes("Date"))
        return "Date";
      if (H.includes("Race"))
        return "Race";
      if (H.includes("Month"))
        return "Month";
    }
    return ((C = e == null ? void 0 : e.xAxis) == null ? void 0 : C.dataKey) || "";
  }, ft = () => {
    if (h !== void 0 && h && ie(!1).length > 0) {
      let k = ie(!1).filter((C) => C !== Xe());
      if (k.length > 0)
        return k[0];
    }
    return "";
  };
  if (h && !e.xAxis.dataKey && (e.xAxis.dataKey = Xe()), h && ((Lo = e == null ? void 0 : e.series) == null ? void 0 : Lo.length) === 0) {
    let k = ft();
    k !== "" && oe(k), h && console.log("### COVE DEBUG: Chart: Setting default datacol=", k);
  }
  const Qt = ["Area Chart", "Combo", "Line", "Bar", "Forecasting"], Zt = [
    /* @__PURE__ */ i.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((Oo = e.data) == null ? void 0 : Oo[0]) || []).map((C) => {
      const H = e == null ? void 0 : e.series.some((G) => G.dataKey === C);
      if (C !== e.xAxis.dataKey && !H)
        return Zt.push(
          /* @__PURE__ */ i.createElement("option", { value: C, key: C }, C)
        );
    });
    let k = {};
    e.data.forEach((C) => {
      Object.keys(C).forEach((H) => {
        k[H] = k[H] || [];
        const G = typeof C[H] == "number" ? C[H].toString() : C[H];
        k[H].indexOf(G) === -1 && k[H].push(G);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((C) => {
      const H = n.some((G) => G.dataKey === C);
      if (C !== e.xAxis.dataKey && !H)
        return Zt.push(
          /* @__PURE__ */ i.createElement("option", { value: C, key: C }, C)
        );
    });
    let k = {};
    n.forEach((C) => {
      Object.keys(C).forEach((H) => {
        k[H] = k[H] || [];
        const G = typeof C[H] == "number" ? C[H].toString() : C[H];
        k[H].indexOf(G) === -1 && k[H].push(G);
      });
    });
  }
  const _e = Object.keys(e.columns).filter((k) => [e.xAxis.dataKey].includes(k) !== !0), xt = (k) => {
    const C = `additionalColumn${k}`;
    t({
      ...e,
      columns: {
        ...e.columns,
        [C]: {
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
  }, Li = (k) => {
    const C = e.columns;
    delete C[k], t({
      ...e,
      columns: C
    });
  }, Lt = async (k, C, H) => {
    switch (C) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [k]: {
              ...e.columns[k],
              [C]: H
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [k]: {
              ...e.columns[k],
              [C]: H
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: Oi,
    highlightedSeriesValues: va,
    handleUpdateHighlightedBar: _i,
    handleAddNewHighlightedBar: Mi,
    handleRemoveHighlightedBar: Kn,
    handleUpdateHighlightedBarColor: yu,
    handleHighlightedBarLegendLabel: gu,
    handleUpdateHighlightedBorderWidth: xu
  } = Ci(e, t), vu = (k, C) => {
    let H = e.columns;
    H[k].tooltips = C, t({
      ...e,
      columns: H
    });
  };
  return /* @__PURE__ */ i.createElement(qt, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ i.createElement(le, null), e.newViz === void 0 && e.runtime && e.runtime.editorErrorMessage && /* @__PURE__ */ i.createElement(J, null), /* @__PURE__ */ i.createElement("button", { className: yt ? "editor-toggle" : "editor-toggle collapsed", title: yt ? "Collapse Editor" : "Expand Editor", onClick: St }), /* @__PURE__ */ i.createElement("section", { className: `${yt ? "editor-panel cove" : "hidden editor-panel cove"}${c ? " dashboard" : ""}` }, /* @__PURE__ */ i.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ i.createElement("section", { className: "form-container" }, /* @__PURE__ */ i.createElement(gn, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(ot, null, " ", /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "General")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(Me, { value: e.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: X, options: N }), (e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Area Chart") && /* @__PURE__ */ i.createElement(Me, { value: e.visualizationSubType || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: X, options: ["regular", "stacked"] }), e.visualizationType === "Area Chart" && e.visualizationSubType === "stacked" && /* @__PURE__ */ i.createElement(Me, { value: e.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: X, options: Object.keys(mi) }), e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(Me, { value: e.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: X, options: ["vertical", "horizontal"] }), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(Me, { label: "Orientation", options: ["horizontal"] }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(Me, { value: e.isLollipopChart ? "lollipop" : e.barStyle || "flat", fieldName: "barStyle", label: "bar style", updateField: X, options: At() }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.barStyle === "rounded" && /* @__PURE__ */ i.createElement(Me, { value: e.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: X, options: ["top", "full"] }), (e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.barStyle === "rounded" && /* @__PURE__ */ i.createElement(Me, { value: e.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: X, options: ["standard", "shallow", "finger"] }), e.visualizationType === "Bar" && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(Me, { value: e.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: X, options: ["Below Bar", "On Date/Category Axis"] }), R() ? /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: e.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: X }) : j() && /* @__PURE__ */ i.createElement(Se, { value: e.labels, fieldName: "labels", label: "Display label on data", updateField: X }), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(Me, { fieldName: "pieType", label: "Pie Chart Type", updateField: X, options: ["Regular", "Donut"] }), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ i.createElement(Se, { value: e.showTitle, fieldName: "showTitle", label: "Show Title", updateField: X }), Ae() && /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.superTitle,
      updateField: X,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "textarea",
      value: e.introText,
      updateField: X,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "textarea",
      value: e.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), Te() && /* @__PURE__ */ i.createElement(
    me,
    {
      type: "textarea",
      value: e.footnotes,
      updateField: X,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Footnotes")))
    }
  ), ne() && e.orientation === "vertical" && /* @__PURE__ */ i.createElement(me, { type: "number", value: e.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: X }))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(tr.ForestPlot, { editColumn: Lt, setCategoryAxis: Xe }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ i.createElement(Va, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Me,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (k) => {
        k.target.value !== "" && k.target.value !== "Select" && oe(k.target.value), k.target.value = "";
      },
      options: ie()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ i.createElement(tr.Series.Wrapper, { getColumns: ie }, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ i.createElement(Yo, { onDragEnd: ({ source: k, destination: C }) => Ge(k.index, C.index) }, /* @__PURE__ */ i.createElement(Xo, { droppableId: "filter_order" }, (k) => /* @__PURE__ */ i.createElement("ul", { ...k.droppableProps, className: "series-list", ref: k.innerRef }, /* @__PURE__ */ i.createElement(tr.Series.List, { series: e.series, getItemStyle: at, sortableItemStyles: $e, chartsWithOptions: Qt }), k.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ i.createElement(Me, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: X, initial: "Select", options: ie() }), /* @__PURE__ */ i.createElement(Me, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: X, initial: "Select", options: ie() })), de() && e.series && e.series.length === 1 && /* @__PURE__ */ i.createElement(Me, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (k) => pe(k.target.value), options: ["asc", "desc"] }), /* @__PURE__ */ i.createElement(Xg, { config: e, updateConfig: t, data: n }))), e.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "Measures")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ i.createElement(
    me,
    {
      type: "text",
      value: e.boxplot.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Highest value, excluding outliers")))
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
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
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
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Middle data point. Half of data are higher value.")))
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
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
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
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: X }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: X }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: X }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: X }), /* @__PURE__ */ i.createElement(me, { type: "text", value: e.boxplot.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: X }))), ee() && /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ i.createElement(Va, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    Me,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: X,
      options: ie(!1),
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label", updateField: X }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(Se, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: X }), e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement(me, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: X }), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(Se, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: X }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ i.createElement(me, { value: e.yAxis.tickRotation, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: X }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: X }), ue() && /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: X }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(Se, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: X })), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(Se, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: X }), /* @__PURE__ */ i.createElement(
    Se,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ i.createElement(me, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: X, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ i.createElement(i.Fragment, null, se() && /* @__PURE__ */ i.createElement(Se, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: X }), ve() && /* @__PURE__ */ i.createElement(Se, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: X }), ye() && /* @__PURE__ */ i.createElement(Se, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: X }), ae() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: X }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Ze.maxMsg), Q() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: X }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Ze.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: X })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: X }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Ze.maxMsg), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: X }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Ze.minMsg)), z() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(gn, { allowZeroExpanded: !0 }, (Mo = (_o = e.yAxis) == null ? void 0 : _o.anchors) == null ? void 0 : Mo.map((k, C) => /* @__PURE__ */ i.createElement(ot, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${C}` }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", C + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const G = [...e.yAxis.anchors];
        G.splice(C, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[C].value ? e.yAxis.anchors[C].value : "",
      onChange: (H) => {
        H.preventDefault();
        const G = [...e.yAxis.anchors];
        G[C].value = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[C].color ? e.yAxis.anchors[C].color : "",
      onChange: (H) => {
        H.preventDefault();
        const G = [...e.yAxis.anchors];
        G[C].color = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[C].lineStyle || "",
      onChange: (H) => {
        const G = [...e.yAxis.anchors];
        G[C].lineStyle = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    p.map((H) => /* @__PURE__ */ i.createElement("option", { key: H.key }, H.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (k) => {
        k.preventDefault();
        const C = [...e.yAxis.anchors];
        C.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: C
          }
        });
      }
    },
    "Add Anchor"
  )), z() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(gn, { allowZeroExpanded: !0 }, ($o = (Do = e.xAxis) == null ? void 0 : Do.anchors) == null ? void 0 : $o.map((k, C) => /* @__PURE__ */ i.createElement(ot, { className: "series-item series-item--chart", key: `xaxis-anchors-${C}` }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", C + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const G = [...e.xAxis.anchors];
        G.splice(C, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[C].value ? e.xAxis.anchors[C].value : "",
      onChange: (H) => {
        H.preventDefault();
        const G = [...e.xAxis.anchors];
        G[C].value = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[C].color ? e.xAxis.anchors[C].color : "",
      onChange: (H) => {
        H.preventDefault();
        const G = [...e.xAxis.anchors];
        G[C].color = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[C].lineStyle || "",
      onChange: (H) => {
        const G = [...e.xAxis.anchors];
        G[C].lineStyle = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    p.map((H) => /* @__PURE__ */ i.createElement("option", { key: H.key }, H.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (k) => {
        k.preventDefault();
        const C = [...e.xAxis.anchors];
        C.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: C
          }
        });
      }
    },
    "Add Anchor"
  )))), et && /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "Right Value Axis")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: X }), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(Se, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: X, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: X }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Ze.rightMaxMessage), /* @__PURE__ */ i.createElement(me, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: X }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Ze.minMsg))), U() && /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ i.createElement(Va, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(ct, null, e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Me, { value: e.xAxis.type, section: "xAxis", fieldName: "type", label: "Data Type", updateField: X, options: e.visualizationType !== "Scatter Plot" ? ["categorical", "date"] : ["categorical", "continuous", "date"] }), /* @__PURE__ */ i.createElement(Se, { value: e.xAxis.sortDates, section: "xAxis", fieldName: "sortDates", label: "Force Date Scale (Sort Dates)", updateField: X }), " "), /* @__PURE__ */ i.createElement(
    Me,
    {
      value: e.xAxis.dataKey || Xe() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: X,
      options: ie(!1),
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    Me,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: X,
      options: ie(!1),
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: X }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Se,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ i.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.dateParseFormat, section: "xAxis", fieldName: "dateParseFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Parse Format", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.xAxis.dateDisplayFormat, section: "xAxis", fieldName: "dateDisplayFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Display Format", updateField: X })), /* @__PURE__ */ i.createElement(
    Se,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: X
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(fe, null)), /* @__PURE__ */ i.createElement(
    Me,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (k) => {
        k.target.value !== "" && k.target.value !== "Select" && ce(k.target.value), k.target.value = "";
      },
      options: nt(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(me, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: X, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ i.createElement(me, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: X, value: e.exclusions.dateEnd || "" }))), Y() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: X }), Oe() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: X }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Se, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: X, min: 0 })), Ce() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(Se, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: X }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && Z() && /* @__PURE__ */ i.createElement(me, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: X }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ i.createElement(i.Fragment, null, Ne() && /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: X }), he() && /* @__PURE__ */ i.createElement(Se, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: X })) : /* @__PURE__ */ i.createElement(i.Fragment, null, Ne() && /* @__PURE__ */ i.createElement(Se, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: X }), he() && /* @__PURE__ */ i.createElement(Se, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: X }), Le() && /* @__PURE__ */ i.createElement(Se, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: X })), ((zo = e.series) == null ? void 0 : zo.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Oi.map((k, C) => /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `highlighted-bar-${C}` }, /* @__PURE__ */ i.createElement("button", { className: "remove-column", onClick: (H) => Kn(H, C) }, "Remove"), /* @__PURE__ */ i.createElement("p", null, "Highlighted Bar ", C + 1), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ i.createElement("select", { value: e.highlightedBarValues[C].value, onChange: (H) => _i(H, C) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Value -"), va && [...new Set(va)].sort().map((H) => /* @__PURE__ */ i.createElement("option", { key: `special-class-value-option-${C}-${H}` }, H)))), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[C].color ? e.highlightedBarValues[C].color : "", onChange: (H) => yu(H, C) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ i.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[C].borderWidth ? e.highlightedBarValues[C].borderWidth : "", onChange: (H) => xu(H, C) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[C].legendLabel ? e.highlightedBarValues[C].legendLabel : "", onChange: (H) => gu(H, C) }))))), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: (k) => Mi(k) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Se,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(fe, null)), /* @__PURE__ */ i.createElement(
    Me,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (k) => {
        k.target.value !== "" && k.target.value !== "Select" && ce(k.target.value), k.target.value = "";
      },
      options: nt(e.xAxis.dataKey, !0)
    }
  ))), z() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(gn, { allowZeroExpanded: !0 }, (Fo = (Ro = e.xAxis) == null ? void 0 : Ro.anchors) == null ? void 0 : Fo.map((k, C) => /* @__PURE__ */ i.createElement(ot, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${C}` }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", C + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const G = [...e.xAxis.anchors];
        G.splice(C, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[C].value ? e.xAxis.anchors[C].value : "",
      onChange: (H) => {
        H.preventDefault();
        const G = [...e.xAxis.anchors];
        G[C].value = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[C].color ? e.xAxis.anchors[C].color : "",
      onChange: (H) => {
        H.preventDefault();
        const G = [...e.xAxis.anchors];
        G[C].color = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[C].lineStyle || "",
      onChange: (H) => {
        const G = [...e.xAxis.anchors];
        G[C].lineStyle = H.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: G
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    p.map((H) => /* @__PURE__ */ i.createElement("option", { key: H.key }, H.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (k) => {
        k.preventDefault();
        const C = [...e.xAxis.anchors];
        C.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: C
          }
        });
      }
    },
    "Add Anchor"
  )), z() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(gn, { allowZeroExpanded: !0 }, (Ho = (Bo = e.yAxis) == null ? void 0 : Bo.anchors) == null ? void 0 : Ho.map((k, C) => /* @__PURE__ */ i.createElement(ot, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${C}` }, /* @__PURE__ */ i.createElement(lt, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(st, { className: "accordion__button accordion__button" }, "Anchor ", C + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (H) => {
        H.preventDefault();
        const G = [...e.yAxis.anchors];
        G.splice(C, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[C].value ? e.yAxis.anchors[C].value : "",
      onChange: (H) => {
        H.preventDefault();
        const G = [...e.yAxis.anchors];
        G[C].value = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[C].color ? e.yAxis.anchors[C].color : "",
      onChange: (H) => {
        H.preventDefault();
        const G = [...e.yAxis.anchors];
        G[C].color = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[C].lineStyle || "",
      onChange: (H) => {
        const G = [...e.yAxis.anchors];
        G[C].lineStyle = H.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: G
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    p.map((H) => /* @__PURE__ */ i.createElement("option", { key: H.key }, H.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (k) => {
        k.preventDefault();
        const C = [...e.yAxis.anchors];
        C.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: C
          }
        });
      }
    },
    "Add Anchor"
  )))), re() && /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "Regions")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(Qg, { config: e, updateConfig: t }))), " ", e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "Columns")), /* @__PURE__ */ i.createElement(ct, null, e.type !== "navigation" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), _e.map((k) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: k }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (C) => {
        C.preventDefault(), Li(k);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[k] ? e.columns[k].name : ie()[0],
      onChange: (C) => {
        Lt(k, "name", C.target.value);
      }
    },
    ie().map((C) => /* @__PURE__ */ i.createElement("option", null, C))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[k] ? e.columns[k].series : "",
      onChange: (C) => {
        Lt(k, "series", C.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "Select series"),
    e.series.map((C) => /* @__PURE__ */ i.createElement("option", null, C.dataKey))
  )), /* @__PURE__ */ i.createElement(me, { value: e.columns[k].label, section: "columns", subsection: k, fieldName: "label", label: "Label", updateField: X }), /* @__PURE__ */ i.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ i.createElement("li", { className: "three-col" }, /* @__PURE__ */ i.createElement(me, { value: e.columns[k].prefix, section: "columns", subsection: k, fieldName: "prefix", label: "Prefix", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.columns[k].suffix, section: "columns", subsection: k, fieldName: "suffix", label: "Suffix", updateField: X }), /* @__PURE__ */ i.createElement(me, { type: "number", value: e.columns[k].roundToPlace, section: "columns", subsection: k, fieldName: "roundToPlace", label: "Round", updateField: X })), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[k].commas,
      onChange: (C) => {
        Lt(k, "commas", C.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ i.createElement("li", null, e.table.showVertical && /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[k].dataTable,
      onChange: (C) => {
        Lt(k, "dataTable", C.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Data Table"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[k].tooltips || !1,
      onChange: (C) => {
        vu(k, C.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[k].forestPlot || !1,
      onChange: (C) => {
        Lt(k, "forestPlot", C.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[k].forestPlotAlignRight || !1,
      onChange: (C) => {
        Lt(k, "forestPlotAlignRight", C.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[k].forestPlotAlignRight && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "text" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.columns[k].forestPlotStartingPoint || 0,
      onChange: (C) => {
        Lt(k, "forestPlotStartingPoint", C.target.value);
      }
    }
  ))))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (k) => {
        k.preventDefault(), xt(_e.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((k, C) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: k }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (H) => {
        H.preventDefault();
        const G = [...e.legend.additionalCategories];
        G.splice(C, 1), X("legend", null, "additionalCategories", G);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(
    me,
    {
      value: k,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (H, G, qe, Tt) => {
        const Ft = [...e.legend.additionalCategories];
        Ft[C] = Tt, X(H, G, qe, Ft);
      }
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (k) => {
        k.preventDefault();
        const C = [...e.legend.additionalCategories || []];
        C.push(""), X("legend", null, "additionalCategories", C);
      }
    },
    "Add Category"
  )))), B() && /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "Legend")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(Se, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: X }), /* @__PURE__ */ i.createElement(
    Se,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(Se, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: X }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ i.createElement(Me, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: X, options: Ie(n) }), /* @__PURE__ */ i.createElement(Me, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: X, options: ["highlight", "isolate"] }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ i.createElement(Se, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: X }), /* @__PURE__ */ i.createElement(me, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: X }), /* @__PURE__ */ i.createElement(Me, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: X, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Se, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: X })), /* @__PURE__ */ i.createElement(me, { type: "textarea", value: e.legend.description, updateField: X, section: "legend", fieldName: "description", label: "Legend Description" }))), O() && /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "Filters")), /* @__PURE__ */ i.createElement(ct, null, e.filters && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Me,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: X,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ i.createElement("br", null)), e.filters && /* @__PURE__ */ i.createElement("ul", { className: "filters-list" }, e.filters.map((k, C) => k.type === "url" ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: C }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        it(C);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: k.columnName,
      onChange: (H) => {
        dt("columnName", C, H.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Option -"),
    ke().map((H, G) => /* @__PURE__ */ i.createElement("option", { value: H, key: G }, H))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: k.showDropdown === void 0 ? !0 : k.showDropdown,
      onChange: (H) => {
        dt("showDropdown", C, H.target.checked);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: k.filterStyle,
      onChange: (H) => {
        dt("filterStyle", C, H.target.value);
      }
    },
    ut.map((H) => /* @__PURE__ */ i.createElement("option", { value: H }, H))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: k.label,
      onChange: (H) => {
        dt("label", C, H.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ i.createElement("select", { value: k.order ? k.order : "asc", onChange: (H) => dt("order", C, H.target.value) }, Qe.map((H, G) => /* @__PURE__ */ i.createElement("option", { value: H.value, key: `filter-${G}` }, H.label))), k.order === "cust" && /* @__PURE__ */ i.createElement(Yo, { onDragEnd: ({ source: H, destination: G }) => Ve(H.index, G.index, C, e.filters[C]) }, /* @__PURE__ */ i.createElement(Xo, { droppableId: "filter_order" }, (H) => {
    var G;
    return /* @__PURE__ */ i.createElement("ul", { ...H.droppableProps, className: "sort-list", ref: H.innerRef, style: { marginTop: "1em" } }, (G = e.filters[C]) == null ? void 0 : G.values.map((qe, Tt) => /* @__PURE__ */ i.createElement(As, { key: qe, draggableId: `draggableFilter-${qe}`, index: Tt }, (Ft, jn) => /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("div", { className: jn.isDragging ? "currently-dragging" : "", style: at(jn.isDragging, Ft.draggableProps.style), ref: Ft.innerRef, ...Ft.draggableProps, ...Ft.dragHandleProps }, qe)))), H.placeholder);
  })))))), !e.filters && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: T, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "Visual")), /* @__PURE__ */ i.createElement(ct, null, e.isLollipopChart && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", { className: "header" }, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ i.createElement(
    "div",
    {
      onChange: (k) => {
        Pt(k.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: e.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: e.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ i.createElement(Me, { value: e.lollipopColorStyle ? e.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: X, options: ["regular", "two-tone"] }), /* @__PURE__ */ i.createElement(Me, { value: e.lollipopSize ? e.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: X, options: ["small", "medium", "large"] })), e.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ i.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ i.createElement(Me, { value: e.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: X, options: ["true", "false"] }), /* @__PURE__ */ i.createElement(Se, { value: e.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: e.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: X })), /* @__PURE__ */ i.createElement(Me, { value: e.fontSize, fieldName: "fontSize", label: "Font Size", updateField: X, options: ["small", "medium", "large"] }), V() && /* @__PURE__ */ i.createElement(Me, { value: e.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: X, options: ["true", "false"] }), M() && /* @__PURE__ */ i.createElement(Se, { value: e.animate, fieldName: "animate", label: "Animate Visualization", updateField: X }), (((Vo = e.series) == null ? void 0 : Vo.some((k) => k.type === "Line" || k.type === "dashed-lg" || k.type === "dashed-sm" || k.type === "dashed-md")) && e.visualizationType === "Combo" || e.visualizationType === "Line") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Me, { value: e.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: X, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ i.createElement(Me, { value: e.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: X, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ i.createElement("label", { className: "header" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, D.map((k) => /* @__PURE__ */ i.createElement(
    "button",
    {
      title: k,
      key: k,
      onClick: (C) => {
        C.preventDefault(), t({ ...e, theme: k });
      },
      className: e.theme === k ? "selected " + k : k
    }
  )))), (S() || S()) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Chart Color Palette")), I() && /* @__PURE__ */ i.createElement(Qo, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: X, value: e.isPaletteReversed }), $() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, A.map((k) => {
    const C = {
      backgroundColor: r[k][2]
    }, H = {
      backgroundColor: r[k][3]
    }, G = {
      backgroundColor: r[k][5]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: k,
        key: k,
        onClick: (qe) => {
          qe.preventDefault(), t({ ...e, palette: k });
        },
        className: e.palette === k ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: C }),
      /* @__PURE__ */ i.createElement("span", { style: H }),
      /* @__PURE__ */ i.createElement("span", { style: G })
    );
  }))), S() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, w.map((k) => {
    const C = {
      backgroundColor: r[k][2]
    }, H = {
      backgroundColor: r[k][4]
    }, G = {
      backgroundColor: r[k][6]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: k,
        key: k,
        onClick: (qe) => {
          qe.preventDefault(), t({ ...e, palette: k });
        },
        className: e.palette === k ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: C }),
      /* @__PURE__ */ i.createElement("span", { style: H }),
      /* @__PURE__ */ i.createElement("span", { style: G })
    );
  })))), (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Qo, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: X, value: e.twoColor.isPaletteReversed }), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, b.map((k) => {
    const C = {
      backgroundColor: l[k][0]
    }, H = {
      backgroundColor: l[k][1]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: k,
        key: k,
        onClick: (G) => {
          G.preventDefault(), t({ ...e, twoColor: { ...e.twoColor, palette: k } });
        },
        className: e.twoColor.palette === k ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: C }),
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: H })
    );
  }))), W() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    me,
    {
      value: e.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: X,
      tooltip: /* @__PURE__ */ i.createElement(te, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(te.Target, null, /* @__PURE__ */ i.createElement(ze, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(te.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), we() && e.orientation === "horizontal" && !e.isLollipopChart && e.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ i.createElement(me, { type: "number", value: e.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: X, min: 15 }), (e.visualizationType === "Bar" && e.orientation !== "horizontal" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(me, { value: e.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: X }), ge() && /* @__PURE__ */ i.createElement(me, { type: "number", value: e.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: X, min: 0 }), (e.visualizationType === "Bar" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Se, { value: e.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: X }), e.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(Se, { value: (Wo = e.visual) == null ? void 0 : Wo.border, section: "visual", fieldName: "border", label: "Show Border", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: (Ko = e.visual) == null ? void 0 : Ko.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: (jo = e.visual) == null ? void 0 : jo.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: (Io = e.visual) == null ? void 0 : Io.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: (qo = e.visual) == null ? void 0 : qo.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: X })), (e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Se, { value: e.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: X }), (e.visualizationType === "Line" || e.visualizationType === "Combo") && e.showLineSeriesLabels && /* @__PURE__ */ i.createElement(Se, { value: e.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: X }), _() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Se, { value: e.visual.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: X }), /* @__PURE__ */ i.createElement(Se, { value: e.visual.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: X })), Be() && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.tooltips.opacity ? e.tooltips.opacity : 100,
      onChange: (k) => t({
        ...e,
        tooltips: {
          ...e.tooltips,
          opacity: k.target.value
        }
      })
    }
  )), e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(Se, { value: e.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: X }), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.chartMessage.noData ? e.chartMessage.noData : "",
      onChange: (k) => t({
        ...e,
        chartMessage: {
          ...e.chartMessage,
          noData: k.target.value
        }
      })
    }
  )))), e.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(ot, null, /* @__PURE__ */ i.createElement(lt, null, /* @__PURE__ */ i.createElement(st, null, "Data Table")), /* @__PURE__ */ i.createElement(ct, null, /* @__PURE__ */ i.createElement(Bu, { config: e, columns: Object.keys(n[0] || {}), updateField: X, isDashboard: c, isLoadedFromUrl: Xt }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ i.createElement(Au, { loadConfig: t, state: e, convertStateToConfig: Ee }))));
}, gs = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, Jg = (e) => {
  e.sort((u, d) => u - d);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, a = n ? e.slice(0, t) : e.slice(0, t + 1), r = n ? e.slice(t) : e.slice(t + 1), l = Math.floor(a.length / 2), o = n ? (a[l - 1] + a[l]) / 2 : a[l], s = Math.floor(r.length / 2), c = n ? (r[s - 1] + r[s]) / 2 : r[s];
  return { q1: o, q3: c };
}, Gg = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), ex = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), Nn = (e, t) => {
  let n = [];
  return t.forEach((a) => {
    let r = !0;
    e.filter((l) => l.type !== "url").forEach((l) => {
      a[l.columnName] != l.active && (r = !1);
    }), r && n.push(a);
  }), n;
}, tx = (e, t = !1) => {
  t && console.log("handleChartAriaLabels Testing On:", e);
  try {
    if (!e.visualizationType)
      throw Error("handleChartAriaLabels: no visualization type found in state");
    let n = "";
    return e.visualizationType && (n += `${e.visualizationType} chart`), e.title && e.visualizationType && (n += ` with the title: ${e.title}`), n;
  } catch (n) {
    console.error("COVE: ", n.message);
  }
}, nx = [
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
], ax = (e) => {
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
}, xs = (e = "#000000", t = !1) => {
  let n = Rt(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
}, vs = (e, t, n) => {
  const a = t.position === "bottom" || ["sm", "xs", "xxs"].includes(n), r = e.orientation === "horizontal", l = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, o = e.brush.active, s = 20, c = e.brush.height;
  let u = 0;
  return !a && r && !e.yAxis.label && (u = Number(e.xAxis.labelOffset)), !a && r && e.yAxis.label && !e.isResponsiveTicks && (u = Number(e.runtime.xAxis.size) + Number(e.xAxis.labelOffset)), !a && r && e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop + s), !a && r && !e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop ? e.dynamicMarginTop - s : Number(e.xAxis.labelOffset) - s), !a && r && e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop ? e.dynamicMarginTop + s : Number(e.xAxis.labelOffset)), !r && !a && e.xAxis.label && l && !e.isResponsiveTicks && (u = o ? c + e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + s : e.xAxis.tickWidthMax + s + -e.xAxis.size + e.xAxis.labelOffset), !r && !a && !e.xAxis.label && l && e.isResponsiveTicks, !r && !a && !e.xAxis.label && l && !e.dynamicMarginTop && !e.isResponsiveTicks && (u = o ? e.xAxis.tickWidthMax + c + s + -e.xAxis.size : 0), !r && !a && e.xAxis.label && !l && !e.isResponsiveTicks && (u = o ? c + -e.xAxis.size + e.xAxis.labelOffset + s : -e.xAxis.size + e.xAxis.labelOffset + s), !r && !a && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (u = o ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size + s), !r && !a && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (u = o ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size - s), !r && !a && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (u = o ? c + e.xAxis.labelOffset + -e.xAxis.size + 25 : e.xAxis.labelOffset + -e.xAxis.size + s), !r && !a && !e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (u = -e.xAxis.size + s + e.xAxis.labelOffset), !r && !a && !e.xAxis.label && !l && !e.dynamicMarginTop && !e.isResponsiveTicks && (u = o ? c + -e.xAxis.size + e.xAxis.labelOffset : 0), `${u}px`;
};
const bs = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, a = new URL(e), r = a.pathname, l = a.search, o = t.exec(r);
  if (o && o[1])
    return o[1];
  const s = n.exec(l);
  return s && s[1] ? s[1] : "";
};
function Nx({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: r = !1, setConfig: l, setEditing: o, hostname: s, link: c, setSharedFilter: u, setSharedFilterValue: d, dashboardConfig: h }) {
  var it, dt;
  const f = new Ss(), [p, g] = F.useState(!0), [v, x] = F.useState(null), [m, y] = F.useState({}), [b, A] = F.useState(m.data || []), [w, E] = F.useState(void 0), [L, P] = F.useState(void 0), [N, D] = F.useState([]), [_, S] = F.useState("lg"), [$, I] = F.useState([]), [j, R] = F.useState(), [z, V] = F.useState(), [W, M] = F.useState(!1), [B, q] = F.useState([]), [U] = F.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  F.useRef(/* @__PURE__ */ new Map()), F.useRef(), a && console.log("Chart config, isEditor", m, n);
  let { legend: Q, title: ae, description: he, visualizationType: Ne } = m;
  n && (!ae || ae === "") && (ae = "Chart Title"), m.table && (!((it = m.table) != null && it.label) || ((dt = m.table) == null ? void 0 : dt.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: Le, lineDatapointClass: Z, contentClasses: Y, sparkLineStyles: re } = Hu(m), O = m.showSidebar ? "#legend" : m != null && m.title ? `#dataTableSection__${m.title.replace(/\s/g, "")}` : "#dataTableSection", ue = async () => {
    if (m.dataUrl) {
      const T = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let oe = Object.fromEntries(new URLSearchParams(T.search)), pe = !1;
      if (m.filters.forEach((ke) => {
        ke.type === "url" && oe[ke.queryParameter] !== decodeURIComponent(ke.active) && (oe[ke.queryParameter] = ke.active, pe = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !pe)
        return;
      let ce = `${T.origin}${T.pathname}${Object.keys(oe).map((ke, ie) => {
        let Ie = ie === 0 ? "?" : "&";
        return Ie += ke + "=", Ie += oe[ke], Ie;
      }).join("")}`, Pe = [];
      try {
        const ke = bs(T.href);
        ke === "csv" ? Pe = await fetch(ce).then((ie) => ie.text()).then((ie) => Uo.parse(ie, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : ke === "json" ? Pe = await fetch(ce).then((ie) => ie.json()) : Pe = [];
      } catch {
        console.error(`Cannot parse URL: ${ce}`), Pe = [];
      }
      m.dataDescription && (Pe = f.autoStandardize(Pe), Pe = f.developerStandardize(Pe, m.dataDescription)), Object.assign(Pe, { urlFiltered: !0 }), ye({ ...m, runtimeDataUrl: ce, data: Pe, formattedData: Pe }), Pe && (A(Pe), E(Pe), P(Nn(m.filters, Pe)));
    }
  }, se = async () => {
    let T = t || await (await fetch(e)).json(), oe = T.data || [];
    const pe = T.filters ? T.filters.filter((ke) => ke.type === "url").length > 0 : !1;
    if (T.dataUrl && !pe)
      try {
        const ke = bs(T.dataUrl);
        ke === "csv" && (oe = await fetch(T.dataUrl + `?v=${al()}`).then((ie) => ie.text()).then((ie) => (ie = ie.replace(/(".*?")|,/g, (...nt) => nt[1] || "|"), ie = ie.replace(/["]+/g, ""), Uo.parse(ie, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), ke === "json" && (oe = await fetch(T.dataUrl + `?v=${al()}`).then((ie) => ie.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${T.dataUrl}`), oe = [];
      }
    T.dataDescription && (oe = f.autoStandardize(oe), oe = f.developerStandardize(oe, T.dataDescription)), oe && (A(oe), E(oe)), T !== void 0 && T.table !== void 0 && (!T.table || !T.table.showVertical) && (T.table = T.table || {}, T.table.showVertical = !1);
    let ce = { ...er, ...T };
    ce.visualizationType === "Box Plot" && (ce.legend.hide = !0), ce.table.show === void 0 && (ce.table.show = !r), ce.series.map((ke) => {
      ke.tooltip || (ke.tooltip = !0), ke.axis || (ke.axis = "Left");
    }), !ce.data && oe && (ce.data = oe);
    const Pe = { ...await ju(ce) };
    ye(Pe, oe);
  }, ye = (T, oe) => {
    var ke;
    let pe = oe || b;
    Object.keys(er).forEach((ie) => {
      T[ie] && typeof T[ie] == "object" && !Array.isArray(T[ie]) && (T[ie] = { ...er[ie], ...T[ie] });
    });
    let ce = [];
    if (T.exclusions && T.exclusions.active)
      if (T.xAxis.type === "categorical" && ((ke = T.exclusions.keys) == null ? void 0 : ke.length) > 0)
        ce = pe.filter((ie) => !T.exclusions.keys.includes(ie[T.xAxis.dataKey]));
      else if (T.xAxis.type === "date" && (T.exclusions.dateStart || T.exclusions.dateEnd) && T.xAxis.dateParseFormat) {
        const ie = (J) => new Date(J).getTime();
        let Ie = ie(T.exclusions.dateStart), nt = ie(T.exclusions.dateEnd) + 86399999, At = typeof Ie !== void 0 && isNaN(Ie) === !1, St = typeof nt !== void 0 && isNaN(nt) === !1;
        At && St ? ce = pe.filter((J) => ie(J[T.xAxis.dataKey]) >= Ie && ie(J[T.xAxis.dataKey]) <= nt) : At ? ce = pe.filter((J) => ie(J[T.xAxis.dataKey]) >= Ie) : St && (ce = pe.filter((J) => ie(J[T.xAxis.dataKey]) <= nt));
      } else
        ce = oe || b;
    else
      ce = oe || b;
    E(ce);
    let Pe = [];
    if (T.filters && (T.filters.forEach((ie, Ie) => {
      let nt = [];
      nt = ie.orderedValues || ve(ie.columnName, ce).sort(ie.order === "desc" ? ex : Gg), T.filters[Ie].values = nt, T.filters[Ie].active = T.filters[Ie].active || nt[0], T.filters[Ie].filterStyle = T.filters[Ie].filterStyle ? T.filters[Ie].filterStyle : "dropdown";
    }), Pe = Nn(T.filters, ce), P(Pe)), T.runtime = {}, T.runtime.seriesLabels = {}, T.runtime.seriesLabelsAll = [], T.runtime.originalXAxis = T.xAxis, T.visualizationType === "Pie" ? (T.runtime.seriesKeys = (oe || pe).map((ie) => ie[T.xAxis.dataKey]), T.runtime.seriesLabelsAll = T.runtime.seriesKeys) : T.runtime.seriesKeys = T.series ? T.series.map((ie) => (T.runtime.seriesLabels[ie.dataKey] = ie.name || ie.label || ie.dataKey, T.runtime.seriesLabelsAll.push(ie.name || ie.dataKey), ie.dataKey)) : [], T.visualizationType === "Box Plot" && T.series) {
      let ie = ce ? ce.map((le) => le[T.xAxis.dataKey]) : pe.map((le) => le[T.xAxis.dataKey]), Ie = ce ? ce.map((le) => {
        var Ee;
        return Number(le[(Ee = T == null ? void 0 : T.series[0]) == null ? void 0 : Ee.dataKey]);
      }) : pe.map((le) => {
        var Ee;
        return Number(le[(Ee = T == null ? void 0 : T.series[0]) == null ? void 0 : Ee.dataKey]);
      });
      const At = function(le) {
        return le.filter(function(Ee, fe, Ge) {
          return Ge.indexOf(Ee) === fe;
        });
      }(ie);
      let St = [];
      const J = [];
      if (!At)
        return;
      At.forEach((le) => {
        try {
          if (!le)
            throw new Error("No groups resolved in box plots");
          let Ee = ce ? ce.filter((_e) => _e[T.xAxis.dataKey] === le) : pe.filter((_e) => _e[T.xAxis.dataKey] === le), fe = Ee.map((_e) => {
            var xt;
            return Number(_e[(xt = T == null ? void 0 : T.series[0]) == null ? void 0 : xt.dataKey]);
          }), Ge = fe.sort((_e, xt) => _e - xt);
          const rt = Jg(Ge);
          if (!Ee)
            throw new Error("boxplots dont have data yet");
          if (!J)
            throw new Error("boxplots dont have plots yet");
          T.boxplot.firstQuartilePercentage === "" && (T.boxplot.firstQuartilePercentage = 0), T.boxplot.thirdQuartilePercentage === "" && (T.boxplot.thirdQuartilePercentage = 0);
          const Ze = rt.q1, gt = rt.q3, ht = gt - Ze, Nt = Ze - (gt - Ze) * 1.5, Xt = gt + (gt - Ze) * 1.5, Xe = Ge.filter((_e) => _e < Nt || _e > Xt);
          let ft = fe;
          ft = ft.filter((_e) => !Xe.includes(_e));
          const Qt = Jn(fe) || 0, Zt = Zn([Qt, Ze - 1.5 * ht]);
          J.push({
            columnCategory: le,
            columnMax: Jn([Zn(fe), Ze + 1.5 * ht]),
            columnThirdQuartile: Number(gt).toFixed(T.dataFormat.roundTo),
            columnMedian: Number(Hf(fe)).toFixed(T.dataFormat.roundTo),
            columnFirstQuartile: Ze.toFixed(T.dataFormat.roundTo),
            columnMin: Zt,
            columnTotal: fe.reduce((_e, xt) => _e + xt, 0),
            columnSd: Number(Rf(fe)).toFixed(T.dataFormat.roundTo),
            columnMean: Number(Bf(fe)).toFixed(T.dataFormat.roundTo),
            columnIqr: Number(ht).toFixed(T.dataFormat.roundTo),
            columnLowerBounds: Zt,
            columnUpperBounds: Jn([Zn(Ge), Ze + 1.5 * ht]),
            columnOutliers: Xe,
            values: fe,
            nonOutlierValues: ft
          });
        } catch (Ee) {
          console.error("COVE: ", Ee.message);
        }
      }), St = JSON.parse(JSON.stringify(J)), St.map((le) => (le.columnIqr = void 0, le.nonOutlierValues = void 0, le.columnLowerBounds = void 0, le.columnUpperBounds = void 0, null)), T.boxplot.allValues = Ie, T.boxplot.categories = At, T.boxplot.plots = J, T.boxplot.tableData = St;
    }
    T.visualizationType === "Combo" && T.series && (T.runtime.barSeriesKeys = [], T.runtime.lineSeriesKeys = [], T.runtime.areaSeriesKeys = [], T.runtime.forecastingSeriesKeys = [], T.series.forEach((ie) => {
      ie.type === "Area Chart" && T.runtime.areaSeriesKeys.push(ie), ie.type === "Forecasting" && T.runtime.forecastingSeriesKeys.push(ie), ie.type === "Bar" && T.runtime.barSeriesKeys.push(ie.dataKey), (ie.type === "Line" || ie.type === "dashed-sm" || ie.type === "dashed-md" || ie.type === "dashed-lg") && T.runtime.lineSeriesKeys.push(ie.dataKey);
    })), T.visualizationType === "Forecasting" && T.series && (T.runtime.forecastingSeriesKeys = [], T.series.forEach((ie) => {
      ie.type === "Forecasting" && T.runtime.forecastingSeriesKeys.push(ie);
    })), T.visualizationType === "Area Chart" && T.series && (T.runtime.areaSeriesKeys = [], T.series.forEach((ie) => {
      T.runtime.areaSeriesKeys.push({ ...ie, type: "Area Chart" });
    })), T.visualizationType === "Bar" && T.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(T.visualizationType) ? (T.runtime.xAxis = T.yAxis, T.runtime.yAxis = T.xAxis, T.runtime.horizontal = !1, T.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(T.visualizationType) ? (T.runtime.xAxis = T.xAxis, T.runtime.yAxis = T.yAxis, T.runtime.horizontal = !1, T.orientation = "vertical") : (T.runtime.xAxis = T.xAxis, T.runtime.yAxis = T.yAxis, T.runtime.horizontal = !1), T.runtime.uniqueId = Date.now(), T.runtime.editorErrorMessage = T.visualizationType === "Pie" && !T.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", y(T);
  }, ve = (T, oe = this.state.data) => {
    const pe = [];
    return oe.forEach((ce) => {
      const Pe = ce[T];
      Pe && pe.includes(Pe) === !1 && pe.push(Pe);
    }), pe;
  }, ge = (T, oe) => {
    let pe = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, ce = parseFloat(T[pe]), Pe = parseFloat(oe[pe]);
    return ce < Pe ? m.sortData === "ascending" ? 1 : -1 : ce > Pe ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, we = new bu((T) => {
    for (let oe of T) {
      let { width: pe, height: ce } = oe.contentRect, Pe = Eu(pe), ke = 32, ie = 350;
      S(Pe), n && (pe = pe - ie), oe.target.dataset.lollipop === "true" && (pe = pe - 2.5), pe = pe - ke, I([pe, ce]);
    }
  }), Te = F.useCallback((T) => {
    T !== null && we.observe(T), V(T);
  }, []);
  function Ae(T) {
    return Object.keys(T).length === 0;
  }
  F.useEffect(() => {
    se();
  }, []), F.useEffect(() => {
    ue();
  }, [JSON.stringify(m.filters)]), F.useEffect(() => {
    z && !Ae(m) && !W && (Vu("cove_loaded", { config: m }), M(!0));
  }, [z, m]), F.useEffect(() => {
    const T = (oe) => {
      let pe = [];
      pe.push(oe.detail), R(pe);
    };
    return Wu("cove_filterData", (oe) => T(oe)), () => {
      Ku("cove_filterData", T);
    };
  }, [m]), F.useEffect(() => {
    if (j && j[0] && !j[0].hasOwnProperty("active")) {
      let oe = { ...m };
      delete oe.filters, y(oe), P(Nn(j, w));
    }
    if (j && j.length > 0 && j.length > 0 && j[0].hasOwnProperty("active")) {
      let T = { ...m, filters: j };
      y(T), P(Nn(j, w));
    }
  }, [j]), t && F.useEffect(() => {
    se();
  }, [t.data]), F.useEffect(() => {
    if (b && m.xAxis && m.runtime.seriesKeys) {
      const T = m.customColors ? m.customColors : m.visualizationType === "Paired Bar" || m.visualizationType === "Deviation Bar" ? m.twoColor.palette : m.palette, oe = { ...Ln, ...nr };
      let pe = m.customColors || oe[T], ce = m.runtime.seriesKeys.length, Pe;
      for (; ce > pe.length; )
        pe = pe.concat(pe);
      pe = pe.slice(0, ce), Pe = () => ac({
        domain: m.runtime.seriesLabelsAll,
        range: pe,
        unknown: null
      }), x(Pe), g(!1);
    }
    m && b && m.sortData && b.sort(ge);
  }, [m, b]);
  const xe = (T) => {
    const oe = [];
    if (N.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      ne();
      return;
    }
    N.forEach((ce) => {
      oe.push(ce);
    });
    let pe = T.datum;
    if (m.runtime.seriesLabels) {
      for (let ce = 0; ce < m.runtime.seriesKeys.length; ce++)
        if (m.runtime.seriesLabels[m.runtime.seriesKeys[ce]] === T.datum) {
          pe = m.runtime.seriesKeys[ce];
          break;
        }
    }
    oe.indexOf(pe) !== -1 ? oe.splice(oe.indexOf(pe), 1) : oe.push(pe), D(oe);
  }, ne = () => {
    try {
      const T = document.getElementById("legend");
      if (!T)
        throw new Error("No legend available to set previous focus on.");
      T.focus();
    } catch (T) {
      console.error("COVE:", T.message);
    }
    D([]);
  }, ee = m.orientation === "horizontal" ? "yAxis" : "xAxis", Be = (T, oe = !0) => {
    let pe = Nc(m.runtime[ee].dateParseFormat)(T);
    return pe || (oe && (m.runtime.editorErrorMessage = `Error parsing date "${T}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, de = (T) => Pc(m.runtime[ee].dateDisplayFormat)(T);
  function Ce(T, oe) {
    const ce = document.createElement("canvas").getContext("2d");
    if (!ce) {
      console.error("2d context not found");
      return;
    }
    return ce.font = oe || getComputedStyle(document.body).font, Math.ceil(ce.measureText(T).width);
  }
  const Oe = (T, oe, pe = !1, ce, Pe, ke) => {
    if (isNaN(T) || !T)
      return T;
    const ie = T < 0;
    (oe === void 0 || !oe) && (oe = "left"), ie && (T = Math.abs(T));
    let {
      dataFormat: { commas: Ie, abbreviated: nt, roundTo: At, prefix: St, suffix: J, rightRoundTo: le, bottomRoundTo: Ee, rightPrefix: fe, rightSuffix: Ge, bottomPrefix: rt, bottomSuffix: Ze, bottomAbbreviated: gt }
    } = m;
    String(T).indexOf(",") !== -1 && (T = T.replaceAll(",", ""));
    let ht = T, Nt = {
      useGrouping: !!Ie
      // for old chart data table to work right cant just leave this to undefined
    };
    if (oe === "left" || oe === void 0) {
      let ft;
      ke !== void 0 ? ft = ke ? Number(ke) : 0 : ft = At ? Number(At) : 0, Nt = {
        useGrouping: ke ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: ft,
        maximumFractionDigits: ft
      };
    }
    oe === "right" && (Nt = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: le ? Number(le) : 0,
      maximumFractionDigits: le ? Number(le) : 0
    });
    const Xt = () => m.forestPlot.type === "Logarithmic" && !Ee ? 2 : Number(Ee) ? Number(Ee) : 0;
    if (oe === "bottom" && (Nt = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: Xt(),
      maximumFractionDigits: Xt()
    }), T = nl(T), isNaN(T))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${ht}. Try reviewing your data and selections in the Data Series section.`, ht;
    if (!m.dataFormat)
      return T;
    if (m.dataCutoff) {
      let ft = nl(m.dataCutoff);
      T < ft && (T = ft);
    }
    oe === "left" && Ie && nt && pe || oe === "bottom" && Ie && nt && pe ? T = T : T = T.toLocaleString("en-US", Nt);
    let Xe = "";
    return nt && oe === "left" && pe && (T = gs(parseFloat(T))), gt && oe === "bottom" && pe && (T = gs(parseFloat(T))), ce && oe === "left" ? Xe = ce + Xe : St && oe === "left" && (Xe += St), fe && oe === "right" && (Xe += fe), rt && oe === "bottom" && (Xe += rt), Xe += T, Pe && oe === "left" ? Xe += Pe : J && oe === "left" && (Xe += J), Ge && oe === "right" && (Xe += Ge), Ze && oe === "bottom" && (Xe += Ze), ie && (Xe = "-" + Xe), String(Xe);
  }, je = {
    "Paired Bar": /* @__PURE__ */ i.createElement(Vt, null),
    Forecasting: /* @__PURE__ */ i.createElement(Vt, null),
    Bar: /* @__PURE__ */ i.createElement(Vt, null),
    Line: /* @__PURE__ */ i.createElement(Vt, null),
    Combo: /* @__PURE__ */ i.createElement(Vt, null),
    Pie: /* @__PURE__ */ i.createElement(Rp, null),
    "Box Plot": /* @__PURE__ */ i.createElement(Vt, null),
    "Area Chart": /* @__PURE__ */ i.createElement(Vt, null),
    "Scatter Plot": /* @__PURE__ */ i.createElement(Vt, null),
    "Deviation Bar": /* @__PURE__ */ i.createElement(Vt, null),
    "Forest Plot": /* @__PURE__ */ i.createElement(Vt, null)
  }, Ve = () => {
    if (m.visualizationType === "Forecasting" || m.visualizationType === "Forest Plot")
      return !1;
    if (m.visualizationType === "Pie") {
      if ((m == null ? void 0 : m.yAxis.dataKey) === void 0)
        return !0;
    } else if ((m == null ? void 0 : m.series) === void 0 || !((m == null ? void 0 : m.series.length) > 0))
      return !0;
    return !m.xAxis.dataKey;
  }, Qe = (T, oe) => {
    if (T === null || T === "" || T === void 0)
      return "";
    if (typeof T == "string" && T.length > 0 && m.legend.type === "equalnumber")
      return T;
    let pe = T, ce;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(Pe) {
      var ke = m.columns[Pe];
      ke.name === oe && (ce = ke);
    }), ce === void 0 && (ce = m.type === "chart" ? m.dataFormat : m.primary, ce.useCommas = ce.commas, ce.roundToPlace = ce.roundTo ? ce.roundTo : ""), ce) {
      let Pe = !1, ke = 0;
      Number(T) && (ce.roundToPlace >= 0 && (Pe = ce.roundToPlace ? ce.roundToPlace !== "" || ce.roundToPlace !== null : !1, ke = ce.roundToPlace ? Number(ce.roundToPlace) : 0, ce.hasOwnProperty("roundToPlace") && Pe && (pe = Number(T).toFixed(ke))), ce.hasOwnProperty("useCommas") && ce.useCommas === !0 && (pe = Number(T).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: Pe ? ke : 0,
        maximumFractionDigits: Pe ? ke : 5
      }))), pe = (ce.prefix || "") + pe + (ce.suffix || "");
    }
    return pe;
  }, ut = (T) => {
    try {
      if (!T)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (m.type === "navigation") {
        let oe = Ln[m.color] || Ln.bluegreenreverse;
        return xs(oe[3]);
      }
      return xs();
    } catch (oe) {
      console.error("COVE: ", oe);
    }
  }, et = (T) => {
    var oe;
    return Array.isArray(T) ? m.visualizationType === "Forecasting" ? T : (oe = m == null ? void 0 : m.xAxis) != null && oe.dataKey ? f.cleanData(T, m.xAxis.dataKey) : T : [];
  }, at = (T) => T;
  let $e = /* @__PURE__ */ i.createElement(Lu, null);
  if (!p) {
    const T = /* @__PURE__ */ i.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    $e = /* @__PURE__ */ i.createElement(i.Fragment, null, n && /* @__PURE__ */ i.createElement(Zg, null), !Ve() && !m.newViz && /* @__PURE__ */ i.createElement("div", { className: "cdc-chart-inner-container" }, /* @__PURE__ */ i.createElement(Tu, { showTitle: m.showTitle, isDashboard: r, title: ae, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ i.createElement("a", { id: "skip-chart-container", className: "cdcdataviz-sr-only-focusable", href: O }, "Skip Over Chart Container"), m.filters && !j && /* @__PURE__ */ i.createElement(Cu, { config: m, setConfig: y, setFilteredData: P, filteredData: L, excludedData: w, filterData: Nn, dimensions: $ }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("section", { className: "introText" }, yn(m.introText)), /* @__PURE__ */ i.createElement(
      "div",
      {
        style: { marginBottom: vs(m, Q, _) },
        className: `chart-container  p-relative ${m.legend.position === "bottom" ? "bottom" : ""}${m.legend.hide ? " legend-hidden" : ""}${Z}${Le} ${Y.join(" ")} ${a ? "debug" : ""}`
      },
      m.visualizationType !== "Spark Line" && je[m.visualizationType],
      m.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, (m == null ? void 0 : m.introText) && /* @__PURE__ */ i.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, yn(m.introText)), /* @__PURE__ */ i.createElement("div", { style: { height: "100px", width: "100%", ...re } }, /* @__PURE__ */ i.createElement(sm, null, (oe) => /* @__PURE__ */ i.createElement(Ag, { width: oe.width, height: oe.height }))), he && /* @__PURE__ */ i.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, yn(he))),
      !m.legend.hide && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(Dg, null)
    ), r && m.table && m.table.show && m.table.showDataTableLink ? T : c && c, he && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "column " + m.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, yn(he)), /* @__PURE__ */ i.createElement(Di.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ i.createElement(Di.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: U }), m.table.showDownloadPdfButton && /* @__PURE__ */ i.createElement(Di.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: U })), m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(
      Nu,
      {
        config: m,
        rawData: m.data,
        runtimeData: f.applySuppression(L || w, m.suppressedData),
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: Qe,
        displayGeoName: at,
        applyLegendToRow: ut,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: ae,
        viewport: _,
        tabbingId: O,
        colorScale: v
      }
    ), (m == null ? void 0 : m.footnotes) && /* @__PURE__ */ i.createElement("section", { className: "footnotes" }, yn(m.footnotes))));
  }
  const Mt = {
    capitalize: (T) => T.charAt(0).toUpperCase() + T.slice(1),
    computeMarginBottom: vs,
    getXAxisData: (T) => m.runtime.xAxis.type === "date" ? Be(T[m.runtime.originalXAxis.dataKey]).getTime() : T[m.runtime.originalXAxis.dataKey],
    getYAxisData: (T, oe) => T[oe],
    config: m,
    setConfig: y,
    rawData: b ?? {},
    excludedData: w,
    transformedData: et(L || w),
    // do this right before passing to components
    tableData: L || w,
    // do not clean table data
    unfilteredData: b,
    seriesHighlight: N,
    colorScale: v,
    dimensions: $,
    currentViewport: _,
    parseDate: Be,
    formatDate: de,
    formatNumber: Oe,
    loading: p,
    updateConfig: ye,
    colorPalettes: Ln,
    isDashboard: r,
    setParentConfig: l,
    missingRequiredSections: Ve,
    setEditing: o,
    setFilteredData: P,
    handleChartAriaLabels: tx,
    highlight: xe,
    highlightReset: ne,
    legend: Q,
    setSeriesHighlight: D,
    dynamicLegendItems: B,
    setDynamicLegendItems: q,
    filterData: Nn,
    imageId: U,
    handleLineType: ax,
    lineOptions: nx,
    isNumber: Ha,
    getTextWidth: Ce,
    twoColorPalette: nr,
    isEditor: n,
    isDebug: a,
    setSharedFilter: u,
    setSharedFilterValue: d,
    dashboardConfig: h,
    debugSvg: a
  }, Pt = ["cdc-open-viz-module", "type-chart", `${_}`, `font-${m.fontSize}`, `${m.theme}`];
  return m.visualizationType === "Spark Line" && Pt.push("type-sparkline"), n && Pt.push("spacing-wrapper"), n && Pt.push("isEditor"), /* @__PURE__ */ i.createElement(Re.Provider, { value: Mt }, /* @__PURE__ */ i.createElement("div", { className: `${Pt.join(" ")}`, ref: Te, "data-lollipop": m.isLollipopChart, "data-download-id": U }, $e));
}
export {
  Nx as C
};
