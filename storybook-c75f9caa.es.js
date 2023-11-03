import { r as u, R as I } from "./storybook-e61d95ab.es.js";
import "./storybook-4ed993c7.es.js";
function W(e, r, t) {
  var s = this, a = u.useRef(null), i = u.useRef(0), n = u.useRef(null), l = u.useRef([]), o = u.useRef(), v = u.useRef(), x = u.useRef(e), E = u.useRef(!0);
  x.current = e;
  var R = !r && r !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  r = +r || 0, t = t || {};
  var C = !!t.leading, S = "trailing" in t ? !!t.trailing : !0, m = "maxWait" in t, g = m ? Math.max(+t.maxWait || 0, r) : null;
  u.useEffect(function() {
    return E.current = !0, function() {
      E.current = !1;
    };
  }, []);
  var $ = u.useMemo(function() {
    var k = function(c) {
      var f = l.current, h = o.current;
      return l.current = o.current = null, i.current = c, v.current = x.current.apply(h, f);
    }, p = function(c, f) {
      R && cancelAnimationFrame(n.current), n.current = R ? requestAnimationFrame(c) : setTimeout(c, f);
    }, F = function(c) {
      if (!E.current)
        return !1;
      var f = c - a.current, h = c - i.current;
      return !a.current || f >= r || f < 0 || m && h >= g;
    }, d = function(c) {
      return n.current = null, S && l.current ? k(c) : (l.current = o.current = null, v.current);
    }, b = function() {
      var c = Date.now();
      if (F(c))
        return d(c);
      if (E.current) {
        var f = c - a.current, h = c - i.current, A = r - f, D = m ? Math.min(A, g - h) : A;
        p(b, D);
      }
    }, T = function() {
      for (var c = [], f = 0; f < arguments.length; f++)
        c[f] = arguments[f];
      var h = Date.now(), A = F(h);
      if (l.current = c, o.current = s, a.current = h, A) {
        if (!n.current && E.current)
          return i.current = a.current, p(b, r), C ? k(a.current) : v.current;
        if (m)
          return p(b, r), k(a.current);
      }
      return n.current || p(b, r), v.current;
    };
    return T.cancel = function() {
      n.current && (R ? cancelAnimationFrame(n.current) : clearTimeout(n.current)), i.current = 0, l.current = a.current = o.current = n.current = null;
    }, T.isPending = function() {
      return !!n.current;
    }, T.flush = function() {
      return n.current ? d(Date.now()) : v.current;
    }, T;
  }, [C, m, r, g, S, R]);
  return $;
}
function q(e, r) {
  return e === r;
}
function y(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function L(e) {
  var r = u.useState(y(e)), t = r[0], s = r[1], a = u.useCallback(function(i) {
    return s(y(i));
  }, []);
  return [t, a];
}
function M(e, r, t) {
  var s = t && t.equalityFn || q, a = L(e), i = a[0], n = a[1], l = W(u.useCallback(function(v) {
    return n(v);
  }, [n]), r, t), o = u.useRef(e);
  return u.useEffect(function() {
    s(o.current, e) || (l(e), o.current = e);
  }, [e, l, s]), [i, { cancel: l.cancel, isPending: l.isPending, flush: l.flush }];
}
const _ = u.memo(({ label: e, section: r = null, subsection: t = null, fieldName: s, updateField: a, value: i, type: n = "input", tooltip: l, placeholder: o, i: v = null, min: x = null, max: E = null, className: R, ...C }) => {
  const [S, m] = u.useState(i), [g] = M(S, 500);
  u.useEffect(() => {
    typeof g == "string" && i !== g && a && a(r, t, s, g, v);
  }, [g, r, t, s, v, i, a]);
  let $ = t ? `${r}-${t}-${s}` : `${r}-${t}-${s}`;
  const k = (d) => {
    n !== "number" || x === null || !d.target.value || parseFloat(x) <= parseFloat(d.target.value) & parseFloat(E) >= parseFloat(d.target.value) ? m(d.target.value) : m(x.toString());
  };
  let p = {
    className: `cove-input${R ? " " + R : ""}`,
    type: n,
    name: $,
    placeholder: o,
    onChange: k,
    value: S,
    ...C
  }, F = n === "textarea" ? /* @__PURE__ */ I.createElement("textarea", { ...p }) : /* @__PURE__ */ I.createElement("input", { ...p });
  return /* @__PURE__ */ I.createElement(I.Fragment, null, e && /* @__PURE__ */ I.createElement("label", { className: "cove-input__label" }, e), l, F);
});
export {
  _ as I
};
