import { r as u, R as I } from "./storybook-e61d95ab.es.js";
function W(e, r, n) {
  var s = this, a = u.useRef(null), i = u.useRef(0), t = u.useRef(null), l = u.useRef([]), o = u.useRef(), v = u.useRef(), S = u.useRef(e), E = u.useRef(!0);
  S.current = e;
  var x = !r && r !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  r = +r || 0, n = n || {};
  var C = !!n.leading, k = "trailing" in n ? !!n.trailing : !0, m = "maxWait" in n, g = m ? Math.max(+n.maxWait || 0, r) : null;
  u.useEffect(function() {
    return E.current = !0, function() {
      E.current = !1;
    };
  }, []);
  var $ = u.useMemo(function() {
    var p = function(c) {
      var f = l.current, h = o.current;
      return l.current = o.current = null, i.current = c, v.current = S.current.apply(h, f);
    }, R = function(c, f) {
      x && cancelAnimationFrame(t.current), t.current = x ? requestAnimationFrame(c) : setTimeout(c, f);
    }, F = function(c) {
      if (!E.current)
        return !1;
      var f = c - a.current, h = c - i.current;
      return !a.current || f >= r || f < 0 || m && h >= g;
    }, d = function(c) {
      return t.current = null, k && l.current ? p(c) : (l.current = o.current = null, v.current);
    }, b = function() {
      var c = Date.now();
      if (F(c))
        return d(c);
      if (E.current) {
        var f = c - a.current, h = c - i.current, A = r - f, D = m ? Math.min(A, g - h) : A;
        R(b, D);
      }
    }, T = function() {
      for (var c = [], f = 0; f < arguments.length; f++)
        c[f] = arguments[f];
      var h = Date.now(), A = F(h);
      if (l.current = c, o.current = s, a.current = h, A) {
        if (!t.current && E.current)
          return i.current = a.current, R(b, r), C ? p(a.current) : v.current;
        if (m)
          return R(b, r), p(a.current);
      }
      return t.current || R(b, r), v.current;
    };
    return T.cancel = function() {
      t.current && (x ? cancelAnimationFrame(t.current) : clearTimeout(t.current)), i.current = 0, l.current = a.current = o.current = t.current = null;
    }, T.isPending = function() {
      return !!t.current;
    }, T.flush = function() {
      return t.current ? d(Date.now()) : v.current;
    }, T;
  }, [C, m, r, g, k, x]);
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
  var r = u.useState(y(e)), n = r[0], s = r[1], a = u.useCallback(function(i) {
    return s(y(i));
  }, []);
  return [n, a];
}
function M(e, r, n) {
  var s = n && n.equalityFn || q, a = L(e), i = a[0], t = a[1], l = W(u.useCallback(function(v) {
    return t(v);
  }, [t]), r, n), o = u.useRef(e);
  return u.useEffect(function() {
    s(o.current, e) || (l(e), o.current = e);
  }, [e, l, s]), [i, { cancel: l.cancel, isPending: l.isPending, flush: l.flush }];
}
const V = u.memo(({ label: e, section: r = null, subsection: n = null, fieldName: s, updateField: a, value: i, type: t = "input", tooltip: l, placeholder: o, i: v = null, min: S = null, max: E = null, className: x, ...C }) => {
  const [k, m] = u.useState(i), [g] = M(k, 500);
  u.useEffect(() => {
    typeof g == "string" && i !== g && a && a(r, n, s, g, v);
  }, [g, r, n, s, v, i, a]);
  let $ = n ? `${r}-${n}-${s}` : `${r}-${n}-${s}`;
  const p = (d) => {
    t !== "number" || S === null || !d.target.value || parseFloat(S) <= parseFloat(d.target.value) & parseFloat(E) >= parseFloat(d.target.value) ? m(d.target.value) : m(S.toString());
  };
  let R = {
    className: `cove-input${x ? " " + x : ""}`,
    type: t,
    name: $,
    placeholder: o,
    onChange: p,
    value: k,
    ...C
  }, F = t === "textarea" ? /* @__PURE__ */ I.createElement("textarea", { ...R }) : /* @__PURE__ */ I.createElement("input", { ...R });
  return /* @__PURE__ */ I.createElement(I.Fragment, null, e && /* @__PURE__ */ I.createElement("label", { className: "cove-input__label" }, e), l, F);
});
export {
  V as I
};
