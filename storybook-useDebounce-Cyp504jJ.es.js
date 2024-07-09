import { r as t } from "./storybook-index-BmAYD2Ot.es.js";
function W(r, e, f) {
  var m = this, a = t.useRef(null), s = t.useRef(0), u = t.useRef(null), i = t.useRef([]), l = t.useRef(), v = t.useRef(), E = t.useRef(r), g = t.useRef(!0);
  E.current = r;
  var h = !e && e !== 0 && typeof window < "u";
  if (typeof r != "function")
    throw new TypeError("Expected a function");
  e = +e || 0, f = f || {};
  var I = !!f.leading, T = "trailing" in f ? !!f.trailing : !0, d = "maxWait" in f, x = d ? Math.max(+f.maxWait || 0, e) : null;
  t.useEffect(function() {
    return g.current = !0, function() {
      g.current = !1;
    };
  }, []);
  var D = t.useMemo(function() {
    var C = function(n) {
      var c = i.current, o = l.current;
      return i.current = l.current = null, s.current = n, v.current = E.current.apply(o, c);
    }, k = function(n, c) {
      h && cancelAnimationFrame(u.current), u.current = h ? requestAnimationFrame(n) : setTimeout(n, c);
    }, p = function(n) {
      if (!g.current)
        return !1;
      var c = n - a.current, o = n - s.current;
      return !a.current || c >= e || c < 0 || d && o >= x;
    }, y = function(n) {
      return u.current = null, T && i.current ? C(n) : (i.current = l.current = null, v.current);
    }, R = function() {
      var n = Date.now();
      if (p(n))
        return y(n);
      if (g.current) {
        var c = n - a.current, o = n - s.current, b = e - c, F = d ? Math.min(b, x - o) : b;
        k(R, F);
      }
    }, S = function() {
      for (var n = [], c = 0; c < arguments.length; c++)
        n[c] = arguments[c];
      var o = Date.now(), b = p(o);
      if (i.current = n, l.current = m, a.current = o, b) {
        if (!u.current && g.current)
          return s.current = a.current, k(R, e), I ? C(a.current) : v.current;
        if (d)
          return k(R, e), C(a.current);
      }
      return u.current || k(R, e), v.current;
    };
    return S.cancel = function() {
      u.current && (h ? cancelAnimationFrame(u.current) : clearTimeout(u.current)), s.current = 0, i.current = a.current = l.current = u.current = null;
    }, S.isPending = function() {
      return !!u.current;
    }, S.flush = function() {
      return u.current ? y(Date.now()) : v.current;
    }, S;
  }, [I, d, e, x, T, h]);
  return D;
}
function L(r, e) {
  return r === e;
}
function A(r) {
  return typeof r == "function" ? function() {
    return r;
  } : r;
}
function q(r) {
  var e = t.useState(A(r)), f = e[0], m = e[1], a = t.useCallback(function(s) {
    return m(A(s));
  }, []);
  return [f, a];
}
function P(r, e, f) {
  var m = L, a = q(r), s = a[0], u = a[1], i = W(t.useCallback(function(v) {
    return u(v);
  }, [u]), e, f), l = t.useRef(r);
  return t.useEffect(function() {
    m(l.current, r) || (i(r), l.current = r);
  }, [r, i, m]), [s, { cancel: i.cancel, isPending: i.isPending, flush: i.flush }];
}
export {
  P as u
};
