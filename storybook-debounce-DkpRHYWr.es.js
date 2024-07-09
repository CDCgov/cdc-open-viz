import { a as A, i as O } from "./storybook-memoize-_GlkRUnG.es.js";
import { i as C } from "./storybook-isSymbol-BjuxIs1p.es.js";
var L = A, M = function() {
  return L.Date.now();
}, j = M, B = /\s/;
function R(e) {
  for (var r = e.length; r-- && B.test(e.charAt(r)); )
    ;
  return r;
}
var F = R, D = F, H = /^\s+/;
function P(e) {
  return e && e.slice(0, D(e) + 1).replace(H, "");
}
var U = P, X = U, E = O, q = C, _ = NaN, w = /^[-+]0x[0-9a-f]+$/i, z = /^0b[01]+$/i, G = /^0o[0-7]+$/i, J = parseInt;
function K(e) {
  if (typeof e == "number")
    return e;
  if (q(e))
    return _;
  if (E(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = E(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = X(e);
  var t = z.test(e);
  return t || G.test(e) ? J(e.slice(2), t ? 2 : 8) : w.test(e) ? _ : +e;
}
var Q = K, V = O, x = j, $ = Q, Y = "Expected a function", Z = Math.max, ee = Math.min;
function ne(e, r, t) {
  var u, s, l, o, i, f, d = 0, I = !1, m = !1, b = !0;
  if (typeof e != "function")
    throw new TypeError(Y);
  r = $(r) || 0, V(t) && (I = !!t.leading, m = "maxWait" in t, l = m ? Z($(t.maxWait) || 0, r) : l, b = "trailing" in t ? !!t.trailing : b);
  function T(n) {
    var a = u, c = s;
    return u = s = void 0, d = n, o = e.apply(c, a), o;
  }
  function S(n) {
    return d = n, i = setTimeout(v, r), I ? T(n) : o;
  }
  function k(n) {
    var a = n - f, c = n - d, y = r - a;
    return m ? ee(y, l - c) : y;
  }
  function h(n) {
    var a = n - f, c = n - d;
    return f === void 0 || a >= r || a < 0 || m && c >= l;
  }
  function v() {
    var n = x();
    if (h(n))
      return p(n);
    i = setTimeout(v, k(n));
  }
  function p(n) {
    return i = void 0, b && u ? T(n) : (u = s = void 0, o);
  }
  function N() {
    i !== void 0 && clearTimeout(i), d = 0, u = f = s = i = void 0;
  }
  function W() {
    return i === void 0 ? o : p(x());
  }
  function g() {
    var n = x(), a = h(n);
    if (u = arguments, s = this, f = n, a) {
      if (i === void 0)
        return S(f);
      if (m)
        return clearTimeout(i), i = setTimeout(v, r), T(f);
    }
    return i === void 0 && (i = setTimeout(v, r)), o;
  }
  return g.cancel = N, g.flush = W, g;
}
var te = ne;
export {
  te as d
};
