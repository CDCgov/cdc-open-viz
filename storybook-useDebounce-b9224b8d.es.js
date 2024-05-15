import { r as u } from "./storybook-index-45401197.es.js";
function p(e, r, a) {
  var m = this, c = u.useRef(null), f = u.useRef(0), t = u.useRef(null), l = u.useRef([]), s = u.useRef(), v = u.useRef(), I = u.useRef(e), g = u.useRef(!0);
  I.current = e;
  var h = !r && r !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  r = +r || 0, a = a || {};
  var y = !!a.leading, E = "trailing" in a ? !!a.trailing : !0, d = "maxWait" in a, x = d ? Math.max(+a.maxWait || 0, r) : null;
  u.useEffect(function() {
    return g.current = !0, function() {
      g.current = !1;
    };
  }, []);
  var D = u.useMemo(function() {
    var C = function(n) {
      var i = l.current, o = s.current;
      return l.current = s.current = null, f.current = n, v.current = I.current.apply(o, i);
    }, k = function(n, i) {
      h && cancelAnimationFrame(t.current), t.current = h ? requestAnimationFrame(n) : setTimeout(n, i);
    }, T = function(n) {
      if (!g.current)
        return !1;
      var i = n - c.current, o = n - f.current;
      return !c.current || i >= r || i < 0 || d && o >= x;
    }, A = function(n) {
      return t.current = null, E && l.current ? C(n) : (l.current = s.current = null, v.current);
    }, R = function() {
      var n = Date.now();
      if (T(n))
        return A(n);
      if (g.current) {
        var i = n - c.current, o = n - f.current, b = r - i, W = d ? Math.min(b, x - o) : b;
        k(R, W);
      }
    }, S = function() {
      for (var n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      var o = Date.now(), b = T(o);
      if (l.current = n, s.current = m, c.current = o, b) {
        if (!t.current && g.current)
          return f.current = c.current, k(R, r), y ? C(c.current) : v.current;
        if (d)
          return k(R, r), C(c.current);
      }
      return t.current || k(R, r), v.current;
    };
    return S.cancel = function() {
      t.current && (h ? cancelAnimationFrame(t.current) : clearTimeout(t.current)), f.current = 0, l.current = c.current = s.current = t.current = null;
    }, S.isPending = function() {
      return !!t.current;
    }, S.flush = function() {
      return t.current ? A(Date.now()) : v.current;
    }, S;
  }, [y, d, r, x, E, h]);
  return D;
}
function q(e, r) {
  return e === r;
}
function F(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function L(e) {
  var r = u.useState(F(e)), a = r[0], m = r[1], c = u.useCallback(function(f) {
    return m(F(f));
  }, []);
  return [a, c];
}
function V(e, r, a) {
  var m = a && a.equalityFn || q, c = L(e), f = c[0], t = c[1], l = p(u.useCallback(function(v) {
    return t(v);
  }, [t]), r, a), s = u.useRef(e);
  return m(s.current, e) || (l(e), s.current = e), [f, l];
}
export {
  V as u
};
