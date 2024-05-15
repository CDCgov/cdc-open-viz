import { f as cn, g as L, j as W, i as Y, k as sn } from "./storybook-string-7df1b381.es.js";
import { P as M } from "./storybook-index-43433e35.es.js";
import { R as ln } from "./storybook-index-45401197.es.js";
import { c as hn } from "./storybook-Tooltip-5f8a49cd.es.js";
function O(n, t) {
  return n == null || t == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function mn(n, t) {
  return n == null || t == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function tn(n) {
  let t, e, r;
  n.length !== 2 ? (t = O, e = (f, c) => O(n(f), c), r = (f, c) => n(f) - c) : (t = n === O || n === mn ? n : dn, e = n, r = n);
  function i(f, c, a = 0, m = f.length) {
    if (a < m) {
      if (t(c, c) !== 0)
        return m;
      do {
        const s = a + m >>> 1;
        e(f[s], c) < 0 ? a = s + 1 : m = s;
      } while (a < m);
    }
    return a;
  }
  function u(f, c, a = 0, m = f.length) {
    if (a < m) {
      if (t(c, c) !== 0)
        return m;
      do {
        const s = a + m >>> 1;
        e(f[s], c) <= 0 ? a = s + 1 : m = s;
      } while (a < m);
    }
    return a;
  }
  function o(f, c, a = 0, m = f.length) {
    const s = i(f, c, a, m - 1);
    return s > a && r(f[s - 1], c) > -r(f[s], c) ? s - 1 : s;
  }
  return { left: i, center: o, right: u };
}
function dn() {
  return 0;
}
function gn(n) {
  return n === null ? NaN : +n;
}
function* ot(n, t) {
  if (t === void 0)
    for (let e of n)
      e != null && (e = +e) >= e && (yield e);
  else {
    let e = -1;
    for (let r of n)
      (r = t(r, ++e, n)) != null && (r = +r) >= r && (yield r);
  }
}
const yn = tn(O), pn = yn.right;
tn(gn).center;
const Mn = pn, wn = Math.sqrt(50), Nn = Math.sqrt(10), kn = Math.sqrt(2);
function T(n, t, e) {
  const r = (t - n) / Math.max(0, e), i = Math.floor(Math.log10(r)), u = r / Math.pow(10, i), o = u >= wn ? 10 : u >= Nn ? 5 : u >= kn ? 2 : 1;
  let f, c, a;
  return i < 0 ? (a = Math.pow(10, -i) / o, f = Math.round(n * a), c = Math.round(t * a), f / a < n && ++f, c / a > t && --c, a = -a) : (a = Math.pow(10, i) * o, f = Math.round(n / a), c = Math.round(t / a), f * a < n && ++f, c * a > t && --c), c < f && 0.5 <= e && e < 2 ? T(n, t, e * 2) : [f, c, a];
}
function vn(n, t, e) {
  if (t = +t, n = +n, e = +e, !(e > 0))
    return [];
  if (n === t)
    return [n];
  const r = t < n, [i, u, o] = r ? T(t, n, e) : T(n, t, e);
  if (!(u >= i))
    return [];
  const f = u - i + 1, c = new Array(f);
  if (r)
    if (o < 0)
      for (let a = 0; a < f; ++a)
        c[a] = (u - a) / -o;
    else
      for (let a = 0; a < f; ++a)
        c[a] = (u - a) * o;
  else if (o < 0)
    for (let a = 0; a < f; ++a)
      c[a] = (i + a) / -o;
  else
    for (let a = 0; a < f; ++a)
      c[a] = (i + a) * o;
  return c;
}
function G(n, t, e) {
  return t = +t, n = +n, e = +e, T(n, t, e)[2];
}
function xn(n, t, e) {
  t = +t, n = +n, e = +e;
  const r = t < n, i = r ? G(t, n, e) : G(n, t, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function bn(n, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(n);
      break;
    default:
      this.range(t).domain(n);
      break;
  }
  return this;
}
function An(n, t) {
  t || (t = []);
  var e = n ? Math.min(t.length, n.length) : 0, r = t.slice(), i;
  return function(u) {
    for (i = 0; i < e; ++i)
      r[i] = n[i] * (1 - u) + t[i] * u;
    return r;
  };
}
function jn(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function Sn(n, t) {
  var e = t ? t.length : 0, r = n ? Math.min(e, n.length) : 0, i = new Array(r), u = new Array(e), o;
  for (o = 0; o < r; ++o)
    i[o] = C(n[o], t[o]);
  for (; o < e; ++o)
    u[o] = t[o];
  return function(f) {
    for (o = 0; o < r; ++o)
      u[o] = i[o](f);
    return u;
  };
}
function Pn(n, t) {
  var e = /* @__PURE__ */ new Date();
  return n = +n, t = +t, function(r) {
    return e.setTime(n * (1 - r) + t * r), e;
  };
}
function Rn(n, t) {
  var e = {}, r = {}, i;
  (n === null || typeof n != "object") && (n = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in n ? e[i] = C(n[i], t[i]) : r[i] = t[i];
  return function(u) {
    for (i in e)
      r[i] = e[i](u);
    return r;
  };
}
function C(n, t) {
  var e = typeof t, r;
  return t == null || e === "boolean" ? cn(t) : (e === "number" ? L : e === "string" ? (r = W(t)) ? (t = r, Y) : sn : t instanceof W ? Y : t instanceof Date ? Pn : jn(t) ? An : Array.isArray(t) ? Sn : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Rn : L)(n, t);
}
function zn(n, t) {
  return n = +n, t = +t, function(e) {
    return Math.round(n * (1 - e) + t * e);
  };
}
function $n(n) {
  return function() {
    return n;
  };
}
function On(n) {
  return +n;
}
var Z = [0, 1];
function b(n) {
  return n;
}
function I(n, t) {
  return (t -= n = +n) ? function(e) {
    return (e - n) / t;
  } : $n(isNaN(t) ? NaN : 0.5);
}
function Tn(n, t) {
  var e;
  return n > t && (e = n, n = t, t = e), function(r) {
    return Math.max(n, Math.min(t, r));
  };
}
function En(n, t, e) {
  var r = n[0], i = n[1], u = t[0], o = t[1];
  return i < r ? (r = I(i, r), u = e(o, u)) : (r = I(r, i), u = e(u, o)), function(f) {
    return u(r(f));
  };
}
function Fn(n, t, e) {
  var r = Math.min(n.length, t.length) - 1, i = new Array(r), u = new Array(r), o = -1;
  for (n[r] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o < r; )
    i[o] = I(n[o], n[o + 1]), u[o] = e(t[o], t[o + 1]);
  return function(f) {
    var c = Mn(n, f, 1, r) - 1;
    return u[c](i[c](f));
  };
}
function Dn(n, t) {
  return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function Ln() {
  var n = Z, t = Z, e = C, r, i, u, o = b, f, c, a;
  function m() {
    var h = Math.min(n.length, t.length);
    return o !== b && (o = Tn(n[0], n[h - 1])), f = h > 2 ? Fn : En, c = a = null, s;
  }
  function s(h) {
    return h == null || isNaN(h = +h) ? u : (c || (c = f(n.map(r), t, e)))(r(o(h)));
  }
  return s.invert = function(h) {
    return o(i((a || (a = f(t, n.map(r), L)))(h)));
  }, s.domain = function(h) {
    return arguments.length ? (n = Array.from(h, On), m()) : n.slice();
  }, s.range = function(h) {
    return arguments.length ? (t = Array.from(h), m()) : t.slice();
  }, s.rangeRound = function(h) {
    return t = Array.from(h), e = zn, m();
  }, s.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : b, m()) : o !== b;
  }, s.interpolate = function(h) {
    return arguments.length ? (e = h, m()) : e;
  }, s.unknown = function(h) {
    return arguments.length ? (u = h, s) : u;
  }, function(h, w) {
    return r = h, i = w, m();
  };
}
function Gn() {
  return Ln()(b, b);
}
function In(n) {
  return Math.abs(n = Math.round(n)) >= 1e21 ? n.toLocaleString("en").replace(/,/g, "") : n.toString(10);
}
function E(n, t) {
  if ((e = (n = t ? n.toExponential(t - 1) : n.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = n.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +n.slice(e + 1)
  ];
}
function A(n) {
  return n = E(Math.abs(n)), n ? n[1] : NaN;
}
function qn(n, t) {
  return function(e, r) {
    for (var i = e.length, u = [], o = 0, f = n[0], c = 0; i > 0 && f > 0 && (c + f + 1 > r && (f = Math.max(1, r - c)), u.push(e.substring(i -= f, i + f)), !((c += f + 1) > r)); )
      f = n[o = (o + 1) % n.length];
    return u.reverse().join(t);
  };
}
function Cn(n) {
  return function(t) {
    return t.replace(/[0-9]/g, function(e) {
      return n[+e];
    });
  };
}
var Bn = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function F(n) {
  if (!(t = Bn.exec(n)))
    throw new Error("invalid format: " + n);
  var t;
  return new B({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
F.prototype = B.prototype;
function B(n) {
  this.fill = n.fill === void 0 ? " " : n.fill + "", this.align = n.align === void 0 ? ">" : n.align + "", this.sign = n.sign === void 0 ? "-" : n.sign + "", this.symbol = n.symbol === void 0 ? "" : n.symbol + "", this.zero = !!n.zero, this.width = n.width === void 0 ? void 0 : +n.width, this.comma = !!n.comma, this.precision = n.precision === void 0 ? void 0 : +n.precision, this.trim = !!n.trim, this.type = n.type === void 0 ? "" : n.type + "";
}
B.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vn(n) {
  n:
    for (var t = n.length, e = 1, r = -1, i; e < t; ++e)
      switch (n[e]) {
        case ".":
          r = i = e;
          break;
        case "0":
          r === 0 && (r = e), i = e;
          break;
        default:
          if (!+n[e])
            break n;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? n.slice(0, r) + n.slice(i + 1) : n;
}
var rn;
function Xn(n, t) {
  var e = E(n, t);
  if (!e)
    return n + "";
  var r = e[0], i = e[1], u = i - (rn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return u === o ? r : u > o ? r + new Array(u - o + 1).join("0") : u > 0 ? r.slice(0, u) + "." + r.slice(u) : "0." + new Array(1 - u).join("0") + E(n, Math.max(0, t + u - 1))[0];
}
function H(n, t) {
  var e = E(n, t);
  if (!e)
    return n + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const J = {
  "%": (n, t) => (n * 100).toFixed(t),
  b: (n) => Math.round(n).toString(2),
  c: (n) => n + "",
  d: In,
  e: (n, t) => n.toExponential(t),
  f: (n, t) => n.toFixed(t),
  g: (n, t) => n.toPrecision(t),
  o: (n) => Math.round(n).toString(8),
  p: (n, t) => H(n * 100, t),
  r: H,
  s: Xn,
  X: (n) => Math.round(n).toString(16).toUpperCase(),
  x: (n) => Math.round(n).toString(16)
};
function Q(n) {
  return n;
}
var _ = Array.prototype.map, nn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Kn(n) {
  var t = n.grouping === void 0 || n.thousands === void 0 ? Q : qn(_.call(n.grouping, Number), n.thousands + ""), e = n.currency === void 0 ? "" : n.currency[0] + "", r = n.currency === void 0 ? "" : n.currency[1] + "", i = n.decimal === void 0 ? "." : n.decimal + "", u = n.numerals === void 0 ? Q : Cn(_.call(n.numerals, String)), o = n.percent === void 0 ? "%" : n.percent + "", f = n.minus === void 0 ? "−" : n.minus + "", c = n.nan === void 0 ? "NaN" : n.nan + "";
  function a(s) {
    s = F(s);
    var h = s.fill, w = s.align, y = s.sign, j = s.symbol, v = s.zero, S = s.width, D = s.comma, N = s.precision, V = s.trim, d = s.type;
    d === "n" ? (D = !0, d = "g") : J[d] || (N === void 0 && (N = 12), V = !0, d = "g"), (v || h === "0" && w === "=") && (v = !0, h = "0", w = "=");
    var on = j === "$" ? e : j === "#" && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "", un = j === "$" ? r : /[%p]/.test(d) ? o : "", X = J[d], fn = /[defgprs%]/.test(d);
    N = N === void 0 ? 6 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, N)) : Math.max(0, Math.min(20, N));
    function K(l) {
      var k = on, g = un, x, U, P;
      if (d === "c")
        g = X(l) + g, l = "";
      else {
        l = +l;
        var R = l < 0 || 1 / l < 0;
        if (l = isNaN(l) ? c : X(Math.abs(l), N), V && (l = Vn(l)), R && +l == 0 && y !== "+" && (R = !1), k = (R ? y === "(" ? y : f : y === "-" || y === "(" ? "" : y) + k, g = (d === "s" ? nn[8 + rn / 3] : "") + g + (R && y === "(" ? ")" : ""), fn) {
          for (x = -1, U = l.length; ++x < U; )
            if (P = l.charCodeAt(x), 48 > P || P > 57) {
              g = (P === 46 ? i + l.slice(x + 1) : l.slice(x)) + g, l = l.slice(0, x);
              break;
            }
        }
      }
      D && !v && (l = t(l, 1 / 0));
      var z = k.length + l.length + g.length, p = z < S ? new Array(S - z + 1).join(h) : "";
      switch (D && v && (l = t(p + l, p.length ? S - g.length : 1 / 0), p = ""), w) {
        case "<":
          l = k + l + g + p;
          break;
        case "=":
          l = k + p + l + g;
          break;
        case "^":
          l = p.slice(0, z = p.length >> 1) + k + l + g + p.slice(z);
          break;
        default:
          l = p + k + l + g;
          break;
      }
      return u(l);
    }
    return K.toString = function() {
      return s + "";
    }, K;
  }
  function m(s, h) {
    var w = a((s = F(s), s.type = "f", s)), y = Math.max(-8, Math.min(8, Math.floor(A(h) / 3))) * 3, j = Math.pow(10, -y), v = nn[8 + y / 3];
    return function(S) {
      return w(j * S) + v;
    };
  }
  return {
    format: a,
    formatPrefix: m
  };
}
var $, en, an;
Un({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Un(n) {
  return $ = Kn(n), en = $.format, an = $.formatPrefix, $;
}
function Wn(n) {
  return Math.max(0, -A(Math.abs(n)));
}
function Yn(n, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(A(t) / 3))) * 3 - A(Math.abs(n)));
}
function Zn(n, t) {
  return n = Math.abs(n), t = Math.abs(t) - n, Math.max(0, A(t) - A(n)) + 1;
}
function Hn(n, t, e, r) {
  var i = xn(n, t, e), u;
  switch (r = F(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(n), Math.abs(t));
      return r.precision == null && !isNaN(u = Yn(i, o)) && (r.precision = u), an(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(u = Zn(i, Math.max(Math.abs(n), Math.abs(t)))) && (r.precision = u - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(u = Wn(i)) && (r.precision = u - (r.type === "%") * 2);
      break;
    }
  }
  return en(r);
}
function Jn(n) {
  var t = n.domain;
  return n.ticks = function(e) {
    var r = t();
    return vn(r[0], r[r.length - 1], e ?? 10);
  }, n.tickFormat = function(e, r) {
    var i = t();
    return Hn(i[0], i[i.length - 1], e ?? 10, r);
  }, n.nice = function(e) {
    e == null && (e = 10);
    var r = t(), i = 0, u = r.length - 1, o = r[i], f = r[u], c, a, m = 10;
    for (f < o && (a = o, o = f, f = a, a = i, i = u, u = a); m-- > 0; ) {
      if (a = G(o, f, e), a === c)
        return r[i] = o, r[u] = f, t(r);
      if (a > 0)
        o = Math.floor(o / a) * a, f = Math.ceil(f / a) * a;
      else if (a < 0)
        o = Math.ceil(o * a) / a, f = Math.floor(f * a) / a;
      else
        break;
      c = a;
    }
    return n;
  }, n;
}
function Qn() {
  var n = Gn();
  return n.copy = function() {
    return Dn(n, Qn());
  }, bn.apply(n, arguments), Jn(n);
}
var _n = ["top", "left", "transform", "className", "children", "innerRef"];
function q() {
  return q = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, q.apply(this, arguments);
}
function nt(n, t) {
  if (n == null)
    return {};
  var e = {}, r = Object.keys(n), i, u;
  for (u = 0; u < r.length; u++)
    i = r[u], !(t.indexOf(i) >= 0) && (e[i] = n[i]);
  return e;
}
function tt(n) {
  var t = n.top, e = t === void 0 ? 0 : t, r = n.left, i = r === void 0 ? 0 : r, u = n.transform, o = n.className, f = n.children, c = n.innerRef, a = nt(n, _n);
  return /* @__PURE__ */ ln.createElement("g", q({
    ref: c,
    className: hn("visx-group", o),
    transform: u || "translate(" + i + ", " + e + ")"
  }, a), f);
}
tt.propTypes = {
  top: M.number,
  left: M.number,
  transform: M.string,
  className: M.string,
  children: M.node,
  innerRef: M.oneOfType([M.string, M.func, M.object])
};
export {
  tt as G,
  O as a,
  gn as b,
  bn as c,
  Mn as d,
  Dn as e,
  vn as f,
  F as g,
  en as h,
  zn as i,
  tn as j,
  xn as k,
  Qn as l,
  Gn as m,
  ot as n,
  Ln as t
};
