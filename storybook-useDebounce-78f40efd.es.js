import { r as t } from "./storybook-index-45401197.es.js";
function p(r, e, a) {
  var m = this, c = t.useRef(null), l = t.useRef(0), u = t.useRef(null), f = t.useRef([]), s = t.useRef(), v = t.useRef(), E = t.useRef(r), g = t.useRef(!0);
  E.current = r;
  var h = !e && e !== 0 && typeof window < "u";
  if (typeof r != "function")
    throw new TypeError("Expected a function");
  e = +e || 0, a = a || {};
  var I = !!a.leading, y = "trailing" in a ? !!a.trailing : !0, d = "maxWait" in a, x = d ? Math.max(+a.maxWait || 0, e) : null;
  t.useEffect(function() {
    return g.current = !0, function() {
      g.current = !1;
    };
  }, []);
  var D = t.useMemo(function() {
    var C = function(n) {
      var i = f.current, o = s.current;
      return f.current = s.current = null, l.current = n, v.current = E.current.apply(o, i);
    }, k = function(n, i) {
      h && cancelAnimationFrame(u.current), u.current = h ? requestAnimationFrame(n) : setTimeout(n, i);
    }, T = function(n) {
      if (!g.current)
        return !1;
      var i = n - c.current, o = n - l.current;
      return !c.current || i >= e || i < 0 || d && o >= x;
    }, A = function(n) {
      return u.current = null, y && f.current ? C(n) : (f.current = s.current = null, v.current);
    }, R = function() {
      var n = Date.now();
      if (T(n))
        return A(n);
      if (g.current) {
        var i = n - c.current, o = n - l.current, b = e - i, W = d ? Math.min(b, x - o) : b;
        k(R, W);
      }
    }, S = function() {
      for (var n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      var o = Date.now(), b = T(o);
      if (f.current = n, s.current = m, c.current = o, b) {
        if (!u.current && g.current)
          return l.current = c.current, k(R, e), I ? C(c.current) : v.current;
        if (d)
          return k(R, e), C(c.current);
      }
      return u.current || k(R, e), v.current;
    };
    return S.cancel = function() {
      u.current && (h ? cancelAnimationFrame(u.current) : clearTimeout(u.current)), l.current = 0, f.current = c.current = s.current = u.current = null;
    }, S.isPending = function() {
      return !!u.current;
    }, S.flush = function() {
      return u.current ? A(Date.now()) : v.current;
    }, S;
  }, [I, d, e, x, y, h]);
  return D;
}
function q(r, e) {
  return r === e;
}
function F(r) {
  return typeof r == "function" ? function() {
    return r;
  } : r;
}
function L(r) {
  var e = t.useState(F(r)), a = e[0], m = e[1], c = t.useCallback(function(l) {
    return m(F(l));
  }, []);
  return [a, c];
}
function P(r, e, a) {
  var m = a && a.equalityFn || q, c = L(r), l = c[0], u = c[1], f = p(t.useCallback(function(v) {
    return u(v);
  }, [u]), e, a), s = t.useRef(r);
  return t.useEffect(function() {
    m(s.current, r) || (f(r), s.current = r);
  }, [r, f, m]), [l, { cancel: f.cancel, isPending: f.isPending, flush: f.flush }];
}
export {
  P as u
};
