import { g as M, j as r1, i as l1, k as I1 } from "./storybook-string-CipJGmzE.es.js";
import { r as u } from "./storybook-index-9_ikpx_Z.es.js";
var i1 = 180 / Math.PI, K = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function p1(t, c, e, n, r, l) {
  var i, a, s;
  return (i = Math.sqrt(t * t + c * c)) && (t /= i, c /= i), (s = t * e + c * n) && (e -= t * s, n -= c * s), (a = Math.sqrt(e * e + n * n)) && (e /= a, n /= a, s /= a), t * n < c * e && (t = -t, c = -c, s = -s, i = -i), {
    translateX: r,
    translateY: l,
    rotate: Math.atan2(c, t) * i1,
    skewX: Math.atan(s) * i1,
    scaleX: i,
    scaleY: a
  };
}
var I;
function D1(t) {
  const c = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return c.isIdentity ? K : p1(c.a, c.b, c.c, c.d, c.e, c.f);
}
function $1(t) {
  return t == null || (I || (I = document.createElementNS("http://www.w3.org/2000/svg", "g")), I.setAttribute("transform", t), !(t = I.transform.baseVal.consolidate())) ? K : (t = t.matrix, p1(t.a, t.b, t.c, t.d, t.e, t.f));
}
function _1(t, c, e, n) {
  function r(o) {
    return o.length ? o.pop() + " " : "";
  }
  function l(o, h, f, p, _, d) {
    if (o !== f || h !== p) {
      var m = _.push("translate(", null, c, null, e);
      d.push({ i: m - 4, x: M(o, f) }, { i: m - 2, x: M(h, p) });
    } else (f || p) && _.push("translate(" + f + c + p + e);
  }
  function i(o, h, f, p) {
    o !== h ? (o - h > 180 ? h += 360 : h - o > 180 && (o += 360), p.push({ i: f.push(r(f) + "rotate(", null, n) - 2, x: M(o, h) })) : h && f.push(r(f) + "rotate(" + h + n);
  }
  function a(o, h, f, p) {
    o !== h ? p.push({ i: f.push(r(f) + "skewX(", null, n) - 2, x: M(o, h) }) : h && f.push(r(f) + "skewX(" + h + n);
  }
  function s(o, h, f, p, _, d) {
    if (o !== f || h !== p) {
      var m = _.push(r(_) + "scale(", null, ",", null, ")");
      d.push({ i: m - 4, x: M(o, f) }, { i: m - 2, x: M(h, p) });
    } else (f !== 1 || p !== 1) && _.push(r(_) + "scale(" + f + "," + p + ")");
  }
  return function(o, h) {
    var f = [], p = [];
    return o = t(o), h = t(h), l(o.translateX, o.translateY, h.translateX, h.translateY, f, p), i(o.rotate, h.rotate, f, p), a(o.skewX, h.skewX, f, p), s(o.scaleX, o.scaleY, h.scaleX, h.scaleY, f, p), o = h = null, function(_) {
      for (var d = -1, m = p.length, E; ++d < m; ) f[(E = p[d]).i] = E.x(_);
      return f.join("");
    };
  };
}
var O1 = _1(D1, "px, ", "px)", "deg)"), V1 = _1($1, ", ", ")", ")"), P1 = { value: () => {
} };
function d1() {
  for (var t = 0, c = arguments.length, e = {}, n; t < c; ++t) {
    if (!(n = arguments[t] + "") || n in e || /[\s.]/.test(n)) throw new Error("illegal type: " + n);
    e[n] = [];
  }
  return new D(e);
}
function D(t) {
  this._ = t;
}
function Y1(t, c) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !c.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: n };
  });
}
D.prototype = d1.prototype = {
  constructor: D,
  on: function(t, c) {
    var e = this._, n = Y1(t + "", e), r, l = -1, i = n.length;
    if (arguments.length < 2) {
      for (; ++l < i; ) if ((r = (t = n[l]).type) && (r = B1(e[r], t.name))) return r;
      return;
    }
    if (c != null && typeof c != "function") throw new Error("invalid callback: " + c);
    for (; ++l < i; )
      if (r = (t = n[l]).type) e[r] = a1(e[r], t.name, c);
      else if (c == null) for (r in e) e[r] = a1(e[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, c = this._;
    for (var e in c) t[e] = c[e].slice();
    return new D(t);
  },
  call: function(t, c) {
    if ((r = arguments.length - 2) > 0) for (var e = new Array(r), n = 0, r, l; n < r; ++n) e[n] = arguments[n + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (l = this._[t], n = 0, r = l.length; n < r; ++n) l[n].value.apply(c, e);
  },
  apply: function(t, c, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var n = this._[t], r = 0, l = n.length; r < l; ++r) n[r].value.apply(c, e);
  }
};
function B1(t, c) {
  for (var e = 0, n = t.length, r; e < n; ++e)
    if ((r = t[e]).name === c)
      return r.value;
}
function a1(t, c, e) {
  for (var n = 0, r = t.length; n < r; ++n)
    if (t[n].name === c) {
      t[n] = P1, t = t.slice(0, n).concat(t.slice(n + 1));
      break;
    }
  return e != null && t.push({ name: c, value: e }), t;
}
var G = "http://www.w3.org/1999/xhtml";
const s1 = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: G,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function q(t) {
  var c = t += "", e = c.indexOf(":");
  return e >= 0 && (c = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), s1.hasOwnProperty(c) ? { space: s1[c], local: t } : t;
}
function q1(t) {
  return function() {
    var c = this.ownerDocument, e = this.namespaceURI;
    return e === G && c.documentElement.namespaceURI === G ? c.createElement(t) : c.createElementNS(e, t);
  };
}
function H1(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function m1(t) {
  var c = q(t);
  return (c.local ? H1 : q1)(c);
}
function U1() {
}
function Z(t) {
  return t == null ? U1 : function() {
    return this.querySelector(t);
  };
}
function K1(t) {
  typeof t != "function" && (t = Z(t));
  for (var c = this._groups, e = c.length, n = new Array(e), r = 0; r < e; ++r)
    for (var l = c[r], i = l.length, a = n[r] = new Array(i), s, o, h = 0; h < i; ++h)
      (s = l[h]) && (o = t.call(s, s.__data__, h, l)) && ("__data__" in s && (o.__data__ = s.__data__), a[h] = o);
  return new v(n, this._parents);
}
function G1(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function W1() {
  return [];
}
function v1(t) {
  return t == null ? W1 : function() {
    return this.querySelectorAll(t);
  };
}
function J1(t) {
  return function() {
    return G1(t.apply(this, arguments));
  };
}
function Q1(t) {
  typeof t == "function" ? t = J1(t) : t = v1(t);
  for (var c = this._groups, e = c.length, n = [], r = [], l = 0; l < e; ++l)
    for (var i = c[l], a = i.length, s, o = 0; o < a; ++o)
      (s = i[o]) && (n.push(t.call(s, s.__data__, o, i)), r.push(s));
  return new v(n, r);
}
function y1(t) {
  return function() {
    return this.matches(t);
  };
}
function w1(t) {
  return function(c) {
    return c.matches(t);
  };
}
var Z1 = Array.prototype.find;
function b1(t) {
  return function() {
    return Z1.call(this.children, t);
  };
}
function j1() {
  return this.firstElementChild;
}
function t0(t) {
  return this.select(t == null ? j1 : b1(typeof t == "function" ? t : w1(t)));
}
var c0 = Array.prototype.filter;
function e0() {
  return Array.from(this.children);
}
function n0(t) {
  return function() {
    return c0.call(this.children, t);
  };
}
function r0(t) {
  return this.selectAll(t == null ? e0 : n0(typeof t == "function" ? t : w1(t)));
}
function l0(t) {
  typeof t != "function" && (t = y1(t));
  for (var c = this._groups, e = c.length, n = new Array(e), r = 0; r < e; ++r)
    for (var l = c[r], i = l.length, a = n[r] = [], s, o = 0; o < i; ++o)
      (s = l[o]) && t.call(s, s.__data__, o, l) && a.push(s);
  return new v(n, this._parents);
}
function g1(t) {
  return new Array(t.length);
}
function i0() {
  return new v(this._enter || this._groups.map(g1), this._parents);
}
function V(t, c) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = c;
}
V.prototype = {
  constructor: V,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, c) {
    return this._parent.insertBefore(t, c);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function a0(t) {
  return function() {
    return t;
  };
}
function s0(t, c, e, n, r, l) {
  for (var i = 0, a, s = c.length, o = l.length; i < o; ++i)
    (a = c[i]) ? (a.__data__ = l[i], n[i] = a) : e[i] = new V(t, l[i]);
  for (; i < s; ++i)
    (a = c[i]) && (r[i] = a);
}
function o0(t, c, e, n, r, l, i) {
  var a, s, o = /* @__PURE__ */ new Map(), h = c.length, f = l.length, p = new Array(h), _;
  for (a = 0; a < h; ++a)
    (s = c[a]) && (p[a] = _ = i.call(s, s.__data__, a, c) + "", o.has(_) ? r[a] = s : o.set(_, s));
  for (a = 0; a < f; ++a)
    _ = i.call(t, l[a], a, l) + "", (s = o.get(_)) ? (n[a] = s, s.__data__ = l[a], o.delete(_)) : e[a] = new V(t, l[a]);
  for (a = 0; a < h; ++a)
    (s = c[a]) && o.get(p[a]) === s && (r[a] = s);
}
function u0(t) {
  return t.__data__;
}
function h0(t, c) {
  if (!arguments.length) return Array.from(this, u0);
  var e = c ? o0 : s0, n = this._parents, r = this._groups;
  typeof t != "function" && (t = a0(t));
  for (var l = r.length, i = new Array(l), a = new Array(l), s = new Array(l), o = 0; o < l; ++o) {
    var h = n[o], f = r[o], p = f.length, _ = f0(t.call(h, h && h.__data__, o, n)), d = _.length, m = a[o] = new Array(d), E = i[o] = new Array(d), X1 = s[o] = new Array(p);
    e(h, f, m, E, X1, _, c);
    for (var S = 0, X = 0, e1, n1; S < d; ++S)
      if (e1 = m[S]) {
        for (S >= X && (X = S + 1); !(n1 = E[X]) && ++X < d; ) ;
        e1._next = n1 || null;
      }
  }
  return i = new v(i, n), i._enter = a, i._exit = s, i;
}
function f0(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function p0() {
  return new v(this._exit || this._groups.map(g1), this._parents);
}
function _0(t, c, e) {
  var n = this.enter(), r = this, l = this.exit();
  return typeof t == "function" ? (n = t(n), n && (n = n.selection())) : n = n.append(t + ""), c != null && (r = c(r), r && (r = r.selection())), e == null ? l.remove() : e(l), n && r ? n.merge(r).order() : r;
}
function d0(t) {
  for (var c = t.selection ? t.selection() : t, e = this._groups, n = c._groups, r = e.length, l = n.length, i = Math.min(r, l), a = new Array(r), s = 0; s < i; ++s)
    for (var o = e[s], h = n[s], f = o.length, p = a[s] = new Array(f), _, d = 0; d < f; ++d)
      (_ = o[d] || h[d]) && (p[d] = _);
  for (; s < r; ++s)
    a[s] = e[s];
  return new v(a, this._parents);
}
function m0() {
  for (var t = this._groups, c = -1, e = t.length; ++c < e; )
    for (var n = t[c], r = n.length - 1, l = n[r], i; --r >= 0; )
      (i = n[r]) && (l && i.compareDocumentPosition(l) ^ 4 && l.parentNode.insertBefore(i, l), l = i);
  return this;
}
function v0(t) {
  t || (t = y0);
  function c(f, p) {
    return f && p ? t(f.__data__, p.__data__) : !f - !p;
  }
  for (var e = this._groups, n = e.length, r = new Array(n), l = 0; l < n; ++l) {
    for (var i = e[l], a = i.length, s = r[l] = new Array(a), o, h = 0; h < a; ++h)
      (o = i[h]) && (s[h] = o);
    s.sort(c);
  }
  return new v(r, this._parents).order();
}
function y0(t, c) {
  return t < c ? -1 : t > c ? 1 : t >= c ? 0 : NaN;
}
function w0() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function g0() {
  return Array.from(this);
}
function C0() {
  for (var t = this._groups, c = 0, e = t.length; c < e; ++c)
    for (var n = t[c], r = 0, l = n.length; r < l; ++r) {
      var i = n[r];
      if (i) return i;
    }
  return null;
}
function E0() {
  let t = 0;
  for (const c of this) ++t;
  return t;
}
function M0() {
  return !this.node();
}
function z0(t) {
  for (var c = this._groups, e = 0, n = c.length; e < n; ++e)
    for (var r = c[e], l = 0, i = r.length, a; l < i; ++l)
      (a = r[l]) && t.call(a, a.__data__, l, r);
  return this;
}
function x0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function A0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function N0(t, c) {
  return function() {
    this.setAttribute(t, c);
  };
}
function S0(t, c) {
  return function() {
    this.setAttributeNS(t.space, t.local, c);
  };
}
function k0(t, c) {
  return function() {
    var e = c.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function L0(t, c) {
  return function() {
    var e = c.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function T0(t, c) {
  var e = q(t);
  if (arguments.length < 2) {
    var n = this.node();
    return e.local ? n.getAttributeNS(e.space, e.local) : n.getAttribute(e);
  }
  return this.each((c == null ? e.local ? A0 : x0 : typeof c == "function" ? e.local ? L0 : k0 : e.local ? S0 : N0)(e, c));
}
function C1(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function F0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function R0(t, c, e) {
  return function() {
    this.style.setProperty(t, c, e);
  };
}
function X0(t, c, e) {
  return function() {
    var n = c.apply(this, arguments);
    n == null ? this.style.removeProperty(t) : this.style.setProperty(t, n, e);
  };
}
function I0(t, c, e) {
  return arguments.length > 1 ? this.each((c == null ? F0 : typeof c == "function" ? X0 : R0)(t, c, e ?? "")) : A(this.node(), t);
}
function A(t, c) {
  return t.style.getPropertyValue(c) || C1(t).getComputedStyle(t, null).getPropertyValue(c);
}
function D0(t) {
  return function() {
    delete this[t];
  };
}
function $0(t, c) {
  return function() {
    this[t] = c;
  };
}
function O0(t, c) {
  return function() {
    var e = c.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function V0(t, c) {
  return arguments.length > 1 ? this.each((c == null ? D0 : typeof c == "function" ? O0 : $0)(t, c)) : this.node()[t];
}
function E1(t) {
  return t.trim().split(/^|\s+/);
}
function b(t) {
  return t.classList || new M1(t);
}
function M1(t) {
  this._node = t, this._names = E1(t.getAttribute("class") || "");
}
M1.prototype = {
  add: function(t) {
    var c = this._names.indexOf(t);
    c < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var c = this._names.indexOf(t);
    c >= 0 && (this._names.splice(c, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function z1(t, c) {
  for (var e = b(t), n = -1, r = c.length; ++n < r; ) e.add(c[n]);
}
function x1(t, c) {
  for (var e = b(t), n = -1, r = c.length; ++n < r; ) e.remove(c[n]);
}
function P0(t) {
  return function() {
    z1(this, t);
  };
}
function Y0(t) {
  return function() {
    x1(this, t);
  };
}
function B0(t, c) {
  return function() {
    (c.apply(this, arguments) ? z1 : x1)(this, t);
  };
}
function q0(t, c) {
  var e = E1(t + "");
  if (arguments.length < 2) {
    for (var n = b(this.node()), r = -1, l = e.length; ++r < l; ) if (!n.contains(e[r])) return !1;
    return !0;
  }
  return this.each((typeof c == "function" ? B0 : c ? P0 : Y0)(e, c));
}
function H0() {
  this.textContent = "";
}
function U0(t) {
  return function() {
    this.textContent = t;
  };
}
function K0(t) {
  return function() {
    var c = t.apply(this, arguments);
    this.textContent = c ?? "";
  };
}
function G0(t) {
  return arguments.length ? this.each(t == null ? H0 : (typeof t == "function" ? K0 : U0)(t)) : this.node().textContent;
}
function W0() {
  this.innerHTML = "";
}
function J0(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Q0(t) {
  return function() {
    var c = t.apply(this, arguments);
    this.innerHTML = c ?? "";
  };
}
function Z0(t) {
  return arguments.length ? this.each(t == null ? W0 : (typeof t == "function" ? Q0 : J0)(t)) : this.node().innerHTML;
}
function b0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function j0() {
  return this.each(b0);
}
function t2() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function c2() {
  return this.each(t2);
}
function e2(t) {
  var c = typeof t == "function" ? t : m1(t);
  return this.select(function() {
    return this.appendChild(c.apply(this, arguments));
  });
}
function n2() {
  return null;
}
function r2(t, c) {
  var e = typeof t == "function" ? t : m1(t), n = c == null ? n2 : typeof c == "function" ? c : Z(c);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), n.apply(this, arguments) || null);
  });
}
function l2() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function i2() {
  return this.each(l2);
}
function a2() {
  var t = this.cloneNode(!1), c = this.parentNode;
  return c ? c.insertBefore(t, this.nextSibling) : t;
}
function s2() {
  var t = this.cloneNode(!0), c = this.parentNode;
  return c ? c.insertBefore(t, this.nextSibling) : t;
}
function o2(t) {
  return this.select(t ? s2 : a2);
}
function u2(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function h2(t) {
  return function(c) {
    t.call(this, c, this.__data__);
  };
}
function f2(t) {
  return t.trim().split(/^|\s+/).map(function(c) {
    var e = "", n = c.indexOf(".");
    return n >= 0 && (e = c.slice(n + 1), c = c.slice(0, n)), { type: c, name: e };
  });
}
function p2(t) {
  return function() {
    var c = this.__on;
    if (c) {
      for (var e = 0, n = -1, r = c.length, l; e < r; ++e)
        l = c[e], (!t.type || l.type === t.type) && l.name === t.name ? this.removeEventListener(l.type, l.listener, l.options) : c[++n] = l;
      ++n ? c.length = n : delete this.__on;
    }
  };
}
function _2(t, c, e) {
  return function() {
    var n = this.__on, r, l = h2(c);
    if (n) {
      for (var i = 0, a = n.length; i < a; ++i)
        if ((r = n[i]).type === t.type && r.name === t.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = l, r.options = e), r.value = c;
          return;
        }
    }
    this.addEventListener(t.type, l, e), r = { type: t.type, name: t.name, value: c, listener: l, options: e }, n ? n.push(r) : this.__on = [r];
  };
}
function d2(t, c, e) {
  var n = f2(t + ""), r, l = n.length, i;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var s = 0, o = a.length, h; s < o; ++s)
        for (r = 0, h = a[s]; r < l; ++r)
          if ((i = n[r]).type === h.type && i.name === h.name)
            return h.value;
    }
    return;
  }
  for (a = c ? _2 : p2, r = 0; r < l; ++r) this.each(a(n[r], c, e));
  return this;
}
function A1(t, c, e) {
  var n = C1(t), r = n.CustomEvent;
  typeof r == "function" ? r = new r(c, e) : (r = n.document.createEvent("Event"), e ? (r.initEvent(c, e.bubbles, e.cancelable), r.detail = e.detail) : r.initEvent(c, !1, !1)), t.dispatchEvent(r);
}
function m2(t, c) {
  return function() {
    return A1(this, t, c);
  };
}
function v2(t, c) {
  return function() {
    return A1(this, t, c.apply(this, arguments));
  };
}
function y2(t, c) {
  return this.each((typeof c == "function" ? v2 : m2)(t, c));
}
function* w2() {
  for (var t = this._groups, c = 0, e = t.length; c < e; ++c)
    for (var n = t[c], r = 0, l = n.length, i; r < l; ++r)
      (i = n[r]) && (yield i);
}
var g2 = [null];
function v(t, c) {
  this._groups = t, this._parents = c;
}
function R() {
  return new v([[document.documentElement]], g2);
}
function C2() {
  return this;
}
v.prototype = R.prototype = {
  constructor: v,
  select: K1,
  selectAll: Q1,
  selectChild: t0,
  selectChildren: r0,
  filter: l0,
  data: h0,
  enter: i0,
  exit: p0,
  join: _0,
  merge: d0,
  selection: C2,
  order: m0,
  sort: v0,
  call: w0,
  nodes: g0,
  node: C0,
  size: E0,
  empty: M0,
  each: z0,
  attr: T0,
  style: I0,
  property: V0,
  classed: q0,
  text: G0,
  html: Z0,
  raise: j0,
  lower: c2,
  append: e2,
  insert: r2,
  remove: i2,
  clone: o2,
  datum: u2,
  on: d2,
  dispatch: y2,
  [Symbol.iterator]: w2
};
var N = 0, L = 0, k = 0, N1 = 1e3, P, T, Y = 0, z = 0, H = 0, F = typeof performance == "object" && performance.now ? performance : Date, S1 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function j() {
  return z || (S1(E2), z = F.now() + H);
}
function E2() {
  z = 0;
}
function B() {
  this._call = this._time = this._next = null;
}
B.prototype = k1.prototype = {
  constructor: B,
  restart: function(t, c, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? j() : +e) + (c == null ? 0 : +c), !this._next && T !== this && (T ? T._next = this : P = this, T = this), this._call = t, this._time = e, W();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, W());
  }
};
function k1(t, c, e) {
  var n = new B();
  return n.restart(t, c, e), n;
}
function M2() {
  j(), ++N;
  for (var t = P, c; t; )
    (c = z - t._time) >= 0 && t._call.call(void 0, c), t = t._next;
  --N;
}
function o1() {
  z = (Y = F.now()) + H, N = L = 0;
  try {
    M2();
  } finally {
    N = 0, x2(), z = 0;
  }
}
function z2() {
  var t = F.now(), c = t - Y;
  c > N1 && (H -= c, Y = t);
}
function x2() {
  for (var t, c = P, e, n = 1 / 0; c; )
    c._call ? (n > c._time && (n = c._time), t = c, c = c._next) : (e = c._next, c._next = null, c = t ? t._next = e : P = e);
  T = t, W(n);
}
function W(t) {
  if (!N) {
    L && (L = clearTimeout(L));
    var c = t - z;
    c > 24 ? (t < 1 / 0 && (L = setTimeout(o1, t - F.now() - H)), k && (k = clearInterval(k))) : (k || (Y = F.now(), k = setInterval(z2, N1)), N = 1, S1(o1));
  }
}
function u1(t, c, e) {
  var n = new B();
  return c = c == null ? 0 : +c, n.restart((r) => {
    n.stop(), t(r + c);
  }, c, e), n;
}
var A2 = d1("start", "end", "cancel", "interrupt"), N2 = [], L1 = 0, h1 = 1, J = 2, $ = 3, f1 = 4, Q = 5, O = 6;
function U(t, c, e, n, r, l) {
  var i = t.__transition;
  if (!i) t.__transition = {};
  else if (e in i) return;
  S2(t, e, {
    name: c,
    index: n,
    // For context during callback.
    group: r,
    // For context during callback.
    on: A2,
    tween: N2,
    time: l.time,
    delay: l.delay,
    duration: l.duration,
    ease: l.ease,
    timer: null,
    state: L1
  });
}
function t1(t, c) {
  var e = y(t, c);
  if (e.state > L1) throw new Error("too late; already scheduled");
  return e;
}
function w(t, c) {
  var e = y(t, c);
  if (e.state > $) throw new Error("too late; already running");
  return e;
}
function y(t, c) {
  var e = t.__transition;
  if (!e || !(e = e[c])) throw new Error("transition not found");
  return e;
}
function S2(t, c, e) {
  var n = t.__transition, r;
  n[c] = e, e.timer = k1(l, 0, e.time);
  function l(o) {
    e.state = h1, e.timer.restart(i, e.delay, e.time), e.delay <= o && i(o - e.delay);
  }
  function i(o) {
    var h, f, p, _;
    if (e.state !== h1) return s();
    for (h in n)
      if (_ = n[h], _.name === e.name) {
        if (_.state === $) return u1(i);
        _.state === f1 ? (_.state = O, _.timer.stop(), _.on.call("interrupt", t, t.__data__, _.index, _.group), delete n[h]) : +h < c && (_.state = O, _.timer.stop(), _.on.call("cancel", t, t.__data__, _.index, _.group), delete n[h]);
      }
    if (u1(function() {
      e.state === $ && (e.state = f1, e.timer.restart(a, e.delay, e.time), a(o));
    }), e.state = J, e.on.call("start", t, t.__data__, e.index, e.group), e.state === J) {
      for (e.state = $, r = new Array(p = e.tween.length), h = 0, f = -1; h < p; ++h)
        (_ = e.tween[h].value.call(t, t.__data__, e.index, e.group)) && (r[++f] = _);
      r.length = f + 1;
    }
  }
  function a(o) {
    for (var h = o < e.duration ? e.ease.call(null, o / e.duration) : (e.timer.restart(s), e.state = Q, 1), f = -1, p = r.length; ++f < p; )
      r[f].call(t, h);
    e.state === Q && (e.on.call("end", t, t.__data__, e.index, e.group), s());
  }
  function s() {
    e.state = O, e.timer.stop(), delete n[c];
    for (var o in n) return;
    delete t.__transition;
  }
}
function k2(t, c) {
  var e = t.__transition, n, r, l = !0, i;
  if (e) {
    c = c == null ? null : c + "";
    for (i in e) {
      if ((n = e[i]).name !== c) {
        l = !1;
        continue;
      }
      r = n.state > J && n.state < Q, n.state = O, n.timer.stop(), n.on.call(r ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete e[i];
    }
    l && delete t.__transition;
  }
}
function L2(t) {
  return this.each(function() {
    k2(this, t);
  });
}
function T2(t, c) {
  var e, n;
  return function() {
    var r = w(this, t), l = r.tween;
    if (l !== e) {
      n = e = l;
      for (var i = 0, a = n.length; i < a; ++i)
        if (n[i].name === c) {
          n = n.slice(), n.splice(i, 1);
          break;
        }
    }
    r.tween = n;
  };
}
function F2(t, c, e) {
  var n, r;
  if (typeof e != "function") throw new Error();
  return function() {
    var l = w(this, t), i = l.tween;
    if (i !== n) {
      r = (n = i).slice();
      for (var a = { name: c, value: e }, s = 0, o = r.length; s < o; ++s)
        if (r[s].name === c) {
          r[s] = a;
          break;
        }
      s === o && r.push(a);
    }
    l.tween = r;
  };
}
function R2(t, c) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var n = y(this.node(), e).tween, r = 0, l = n.length, i; r < l; ++r)
      if ((i = n[r]).name === t)
        return i.value;
    return null;
  }
  return this.each((c == null ? T2 : F2)(e, t, c));
}
function c1(t, c, e) {
  var n = t._id;
  return t.each(function() {
    var r = w(this, n);
    (r.value || (r.value = {}))[c] = e.apply(this, arguments);
  }), function(r) {
    return y(r, n).value[c];
  };
}
function T1(t, c) {
  var e;
  return (typeof c == "number" ? M : c instanceof r1 ? l1 : (e = r1(c)) ? (c = e, l1) : I1)(t, c);
}
function X2(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function I2(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function D2(t, c, e) {
  var n, r = e + "", l;
  return function() {
    var i = this.getAttribute(t);
    return i === r ? null : i === n ? l : l = c(n = i, e);
  };
}
function $2(t, c, e) {
  var n, r = e + "", l;
  return function() {
    var i = this.getAttributeNS(t.space, t.local);
    return i === r ? null : i === n ? l : l = c(n = i, e);
  };
}
function O2(t, c, e) {
  var n, r, l;
  return function() {
    var i, a = e(this), s;
    return a == null ? void this.removeAttribute(t) : (i = this.getAttribute(t), s = a + "", i === s ? null : i === n && s === r ? l : (r = s, l = c(n = i, a)));
  };
}
function V2(t, c, e) {
  var n, r, l;
  return function() {
    var i, a = e(this), s;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (i = this.getAttributeNS(t.space, t.local), s = a + "", i === s ? null : i === n && s === r ? l : (r = s, l = c(n = i, a)));
  };
}
function P2(t, c) {
  var e = q(t), n = e === "transform" ? V1 : T1;
  return this.attrTween(t, typeof c == "function" ? (e.local ? V2 : O2)(e, n, c1(this, "attr." + t, c)) : c == null ? (e.local ? I2 : X2)(e) : (e.local ? $2 : D2)(e, n, c));
}
function Y2(t, c) {
  return function(e) {
    this.setAttribute(t, c.call(this, e));
  };
}
function B2(t, c) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, c.call(this, e));
  };
}
function q2(t, c) {
  var e, n;
  function r() {
    var l = c.apply(this, arguments);
    return l !== n && (e = (n = l) && B2(t, l)), e;
  }
  return r._value = c, r;
}
function H2(t, c) {
  var e, n;
  function r() {
    var l = c.apply(this, arguments);
    return l !== n && (e = (n = l) && Y2(t, l)), e;
  }
  return r._value = c, r;
}
function U2(t, c) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (c == null) return this.tween(e, null);
  if (typeof c != "function") throw new Error();
  var n = q(t);
  return this.tween(e, (n.local ? q2 : H2)(n, c));
}
function K2(t, c) {
  return function() {
    t1(this, t).delay = +c.apply(this, arguments);
  };
}
function G2(t, c) {
  return c = +c, function() {
    t1(this, t).delay = c;
  };
}
function W2(t) {
  var c = this._id;
  return arguments.length ? this.each((typeof t == "function" ? K2 : G2)(c, t)) : y(this.node(), c).delay;
}
function J2(t, c) {
  return function() {
    w(this, t).duration = +c.apply(this, arguments);
  };
}
function Q2(t, c) {
  return c = +c, function() {
    w(this, t).duration = c;
  };
}
function Z2(t) {
  var c = this._id;
  return arguments.length ? this.each((typeof t == "function" ? J2 : Q2)(c, t)) : y(this.node(), c).duration;
}
function b2(t, c) {
  if (typeof c != "function") throw new Error();
  return function() {
    w(this, t).ease = c;
  };
}
function j2(t) {
  var c = this._id;
  return arguments.length ? this.each(b2(c, t)) : y(this.node(), c).ease;
}
function tt(t, c) {
  return function() {
    var e = c.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    w(this, t).ease = e;
  };
}
function ct(t) {
  if (typeof t != "function") throw new Error();
  return this.each(tt(this._id, t));
}
function et(t) {
  typeof t != "function" && (t = y1(t));
  for (var c = this._groups, e = c.length, n = new Array(e), r = 0; r < e; ++r)
    for (var l = c[r], i = l.length, a = n[r] = [], s, o = 0; o < i; ++o)
      (s = l[o]) && t.call(s, s.__data__, o, l) && a.push(s);
  return new C(n, this._parents, this._name, this._id);
}
function nt(t) {
  if (t._id !== this._id) throw new Error();
  for (var c = this._groups, e = t._groups, n = c.length, r = e.length, l = Math.min(n, r), i = new Array(n), a = 0; a < l; ++a)
    for (var s = c[a], o = e[a], h = s.length, f = i[a] = new Array(h), p, _ = 0; _ < h; ++_)
      (p = s[_] || o[_]) && (f[_] = p);
  for (; a < n; ++a)
    i[a] = c[a];
  return new C(i, this._parents, this._name, this._id);
}
function rt(t) {
  return (t + "").trim().split(/^|\s+/).every(function(c) {
    var e = c.indexOf(".");
    return e >= 0 && (c = c.slice(0, e)), !c || c === "start";
  });
}
function lt(t, c, e) {
  var n, r, l = rt(c) ? t1 : w;
  return function() {
    var i = l(this, t), a = i.on;
    a !== n && (r = (n = a).copy()).on(c, e), i.on = r;
  };
}
function it(t, c) {
  var e = this._id;
  return arguments.length < 2 ? y(this.node(), e).on.on(t) : this.each(lt(e, t, c));
}
function at(t) {
  return function() {
    var c = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    c && c.removeChild(this);
  };
}
function st() {
  return this.on("end.remove", at(this._id));
}
function ot(t) {
  var c = this._name, e = this._id;
  typeof t != "function" && (t = Z(t));
  for (var n = this._groups, r = n.length, l = new Array(r), i = 0; i < r; ++i)
    for (var a = n[i], s = a.length, o = l[i] = new Array(s), h, f, p = 0; p < s; ++p)
      (h = a[p]) && (f = t.call(h, h.__data__, p, a)) && ("__data__" in h && (f.__data__ = h.__data__), o[p] = f, U(o[p], c, e, p, o, y(h, e)));
  return new C(l, this._parents, c, e);
}
function ut(t) {
  var c = this._name, e = this._id;
  typeof t != "function" && (t = v1(t));
  for (var n = this._groups, r = n.length, l = [], i = [], a = 0; a < r; ++a)
    for (var s = n[a], o = s.length, h, f = 0; f < o; ++f)
      if (h = s[f]) {
        for (var p = t.call(h, h.__data__, f, s), _, d = y(h, e), m = 0, E = p.length; m < E; ++m)
          (_ = p[m]) && U(_, c, e, m, p, d);
        l.push(p), i.push(h);
      }
  return new C(l, i, c, e);
}
var ht = R.prototype.constructor;
function ft() {
  return new ht(this._groups, this._parents);
}
function pt(t, c) {
  var e, n, r;
  return function() {
    var l = A(this, t), i = (this.style.removeProperty(t), A(this, t));
    return l === i ? null : l === e && i === n ? r : r = c(e = l, n = i);
  };
}
function F1(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function _t(t, c, e) {
  var n, r = e + "", l;
  return function() {
    var i = A(this, t);
    return i === r ? null : i === n ? l : l = c(n = i, e);
  };
}
function dt(t, c, e) {
  var n, r, l;
  return function() {
    var i = A(this, t), a = e(this), s = a + "";
    return a == null && (s = a = (this.style.removeProperty(t), A(this, t))), i === s ? null : i === n && s === r ? l : (r = s, l = c(n = i, a));
  };
}
function mt(t, c) {
  var e, n, r, l = "style." + c, i = "end." + l, a;
  return function() {
    var s = w(this, t), o = s.on, h = s.value[l] == null ? a || (a = F1(c)) : void 0;
    (o !== e || r !== h) && (n = (e = o).copy()).on(i, r = h), s.on = n;
  };
}
function vt(t, c, e) {
  var n = (t += "") == "transform" ? O1 : T1;
  return c == null ? this.styleTween(t, pt(t, n)).on("end.style." + t, F1(t)) : typeof c == "function" ? this.styleTween(t, dt(t, n, c1(this, "style." + t, c))).each(mt(this._id, t)) : this.styleTween(t, _t(t, n, c), e).on("end.style." + t, null);
}
function yt(t, c, e) {
  return function(n) {
    this.style.setProperty(t, c.call(this, n), e);
  };
}
function wt(t, c, e) {
  var n, r;
  function l() {
    var i = c.apply(this, arguments);
    return i !== r && (n = (r = i) && yt(t, i, e)), n;
  }
  return l._value = c, l;
}
function gt(t, c, e) {
  var n = "style." + (t += "");
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (c == null) return this.tween(n, null);
  if (typeof c != "function") throw new Error();
  return this.tween(n, wt(t, c, e ?? ""));
}
function Ct(t) {
  return function() {
    this.textContent = t;
  };
}
function Et(t) {
  return function() {
    var c = t(this);
    this.textContent = c ?? "";
  };
}
function Mt(t) {
  return this.tween("text", typeof t == "function" ? Et(c1(this, "text", t)) : Ct(t == null ? "" : t + ""));
}
function zt(t) {
  return function(c) {
    this.textContent = t.call(this, c);
  };
}
function xt(t) {
  var c, e;
  function n() {
    var r = t.apply(this, arguments);
    return r !== e && (c = (e = r) && zt(r)), c;
  }
  return n._value = t, n;
}
function At(t) {
  var c = "text";
  if (arguments.length < 1) return (c = this.tween(c)) && c._value;
  if (t == null) return this.tween(c, null);
  if (typeof t != "function") throw new Error();
  return this.tween(c, xt(t));
}
function Nt() {
  for (var t = this._name, c = this._id, e = R1(), n = this._groups, r = n.length, l = 0; l < r; ++l)
    for (var i = n[l], a = i.length, s, o = 0; o < a; ++o)
      if (s = i[o]) {
        var h = y(s, c);
        U(s, t, e, o, i, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new C(n, this._parents, t, e);
}
function St() {
  var t, c, e = this, n = e._id, r = e.size();
  return new Promise(function(l, i) {
    var a = { value: i }, s = { value: function() {
      --r === 0 && l();
    } };
    e.each(function() {
      var o = w(this, n), h = o.on;
      h !== t && (c = (t = h).copy(), c._.cancel.push(a), c._.interrupt.push(a), c._.end.push(s)), o.on = c;
    }), r === 0 && l();
  });
}
var kt = 0;
function C(t, c, e, n) {
  this._groups = t, this._parents = c, this._name = e, this._id = n;
}
function R1() {
  return ++kt;
}
var g = R.prototype;
C.prototype = {
  constructor: C,
  select: ot,
  selectAll: ut,
  selectChild: g.selectChild,
  selectChildren: g.selectChildren,
  filter: et,
  merge: nt,
  selection: ft,
  transition: Nt,
  call: g.call,
  nodes: g.nodes,
  node: g.node,
  size: g.size,
  empty: g.empty,
  each: g.each,
  on: it,
  attr: P2,
  attrTween: U2,
  style: vt,
  styleTween: gt,
  text: Mt,
  textTween: At,
  remove: st,
  tween: R2,
  delay: W2,
  duration: Z2,
  ease: j2,
  easeVarying: ct,
  end: St,
  [Symbol.iterator]: g[Symbol.iterator]
};
function Lt(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Tt = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Lt
};
function Ft(t, c) {
  for (var e; !(e = t.__transition) || !(e = e[c]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${c} not found`);
  return e;
}
function Rt(t) {
  var c, e;
  t instanceof C ? (c = t._id, t = t._name) : (c = R1(), (e = Tt).time = j(), t = t == null ? null : t + "");
  for (var n = this._groups, r = n.length, l = 0; l < r; ++l)
    for (var i = n[l], a = i.length, s, o = 0; o < a; ++o)
      (s = i[o]) && U(s, t, c, o, i, e || Ft(s, c));
  return new C(n, this._parents, t, c);
}
R.prototype.interrupt = L2;
R.prototype.transition = Rt;
function x(t, c, e) {
  this.k = t, this.x = c, this.y = e;
}
x.prototype = {
  constructor: x,
  scale: function(t) {
    return t === 1 ? this : new x(this.k * t, this.x, this.y);
  },
  translate: function(t, c) {
    return t === 0 & c === 0 ? this : new x(this.k, this.x + this.k * t, this.y + this.k * c);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Dt = new x(1, 0, 0);
x.prototype;
const $t = (t) => /* @__PURE__ */ u.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 290.5 157.9", style: {
  enableBackground: "new 0 0 290.5 157.9"
}, xmlSpace: "preserve", ...t }, /* @__PURE__ */ u.createElement("style", { type: "text/css" }, `\r
	.st0{fill:none;stroke:#0071BC;stroke-miterlimit:10;}\r
`), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M119.5-347c-5.6-2.6-9.8-5.4-14.3-6.4C98-355,90.4-356,83-356.2c-20.1-0.4-40.3-0.2-60.4-0.1 c-8.7,0-9.5,0.9-9.7,9.3c-0.1,5.5,0.2,11-0.1,16.5c-0.4,6.9,2.8,9.3,9.4,8.9c4.3-0.3,8.5,0,12.8,0c5,0,7.1,2.5,7.1,7.4 c0,20.4-0.1,40.9,0,61.3c0,6.5-3.8,8.3-9.5,8.2c-18-0.1-36,0-54,0c-32,0-64.1,0-96.1,0c-12.3,0-12.5-0.2-12.6-12.1 c0-24.7-0.1-49.4,0-74.2c0-10.2,0.6-10.8,11-10.9c7.9-0.1,15.9,0,23.8-0.1c3.7,0,7.1-1,7-5.4c-0.1-13.3,2-26.8-2.9-41 c-5.4,0.8-10.8,1.3-16,2.6c-4.2,1-6.9,0.5-9.2-3.4c-2.5-4.5-5.2-8.9-8.4-12.9c-1.7-2.1-4.3-4-6.8-4.6c-4-1-6.7-3.3-5.5-6.9 c4.6-13.6-4.5-21.6-11.8-30.3c-8.1-9.6-11.5-20.5-10.6-33c0.4-5.2,2.7-7.9,8-7.9c1.8,0,3.7-0.1,5.5-0.1c81.2,0,162.4,0,243.5,0 c12.6,0,13.2,0.8,12.7,13.7c-0.1,1.5-0.1,3.1,0.2,4.5c2.6,13.4,5.3,26.8,8,40.1c0.2,0.9,0.6,1.9,0.4,2.7c-3.1,11.5,3,22.3,2.1,33.7 c-0.8,11.2-1,22.5-1.4,33.7C119.5-353.6,119.5-351.2,119.5-347z M-34.4-376.5c9.5-0.1,17.4-7.5,17.2-16.1c-0.2-8.7-9-18-17.3-18.2 c-9.1-0.3-16.8,7.9-16.8,17.8C-51.3-381.9-45.6-376.4-34.4-376.5z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M315.1-337.9c14.4,14.2,25.1-1.2,38.4-2.3c0.5,3.5,1.6,6.7,1.2,9.7c-1.5,10.8-1.4,22.6-6.1,31.9 c-5.1,10.1-14.8,17.8-22.6,26.4c-0.5,0.6-2,1-2.5,0.7c-8.8-5-21.4,0.1-27.7-12c-6.8,6.4-12.1,13-18.7,17.3 c-5.3,3.4-12.4,5.7-18.6,5.5c-6.9-0.2-11,1-13.5,7.5c-1.4,3.6-13.4,8.9-16.5,7.3c-1.7-0.9-2.6-3.7-3.7-5.6c-1.8-3.1-2.8-6.8-5.3-9.2 c-7.3-7.2-7.5-7-6.4-16.4c-5.7-7.4-11.5-13.9-16.2-21.2c-3.4-5.4-0.6-11.2,2.1-16.5c1.3-2.6,2.9-5.4,3.1-8.2 c0.3-4.2,1.9-6.4,5.7-8.4c6.5-3.4,7.3-8.5,2.5-14.3c-4.4-5.4-9.7-9.9-10.5-17.7c-0.2-1.6-5.8-3.8-9-3.8c-17.7-0.4-35.4-0.2-53.1-0.2 c-11.5,0-11.8-0.3-11.9-11.9c0-7,1.3-14.4-0.3-21c-4-16.7-1.8-33.9-5.3-50.5c-1.7-8.3-3.8-16.6-4.6-25.1c-0.9-9.5,0.4-10.4,10-10.6 c3.4-0.1,6.8,0.5,10-0.2c3-0.6,6.2-1.9,8.5-3.8c4.8-4,6.9-3.7,9,2.2c3,8.3,7.2,12.6,14.8,11.5c10.2-1.5,17.6,3.7,25.3,8.2 c3.3,1.9,5.9,3.5,10,1.7c2.2-1,5.3-0.1,8,0.2c9.9,1,19.8,7.3,29.8-1.4c-0.8,6.8-4.3,10.8-9.8,10.2c-14.6-1.5-24.2,5.7-33,17.9 c5.3-1.5,9.4-2.7,15-4.3c-0.4,4.2-0.7,6.7-0.9,9.5c0.8-0.1,1.8,0.1,2.5-0.3c7.9-4.5,15.8-9,23.6-13.6c5.8-3.4,6.5-3.6,15.2-0.1 c-3.4,1.8-6.1,3.1-8.9,4.6c4.5,4.2,7.3,7.5,10.8,9.8c2,1.3,5,1.8,7.5,1.6c3.9-0.3,7.8-1.2,11.7-2.3c11.3-3.1,20.2,0.8,28.1,8.8 c2.3,2.3,5.7,3.5,8.7,5.2c-0.1,0.7-0.2,1.4-0.2,2.1c-3.2,1.2-6.4,2.3-10.5,3.8c4.9,4.4,11.3,7.7,13.3,12.7 c2.1,5.4-0.1,12.4-0.4,18.9c13.1,6.6,16.5,25.1,6.7,36.9C318.1-343.8,316.6-340.5,315.1-337.9z M275.2-415.1 c-0.6-0.2-1.2-0.5-1.9-0.7c-1.4,1-3,1.8-4,3.1c-11.4,14.8-17.6,31.7-18.7,50.3c-0.4,7.4,0.7,15.1,2.6,22.3c1.5,5.6,6.2,6.6,9.6,2.5 c5-6.1,10.2-13.4,6.5-21.6c-7-15.4,1-28.9,3.5-43.2C273.6-406.6,274.4-410.9,275.2-415.1z M250.5-294.1c10.2,0,18.2-7.9,18-17.7 c-0.2-7.9-9.4-16.9-17.3-17c-9.7-0.1-17.3,7.3-17.3,17.1C233.8-301.5,240.8-294.1,250.5-294.1z M280.8-408.1 c0.5,0.5,1.1,0.9,1.6,1.4c0.7-1.2,1.5-2.3,2.2-3.5c-0.4-0.3-0.7-0.5-1.1-0.8C282.6-410,281.7-409.1,280.8-408.1z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M-197.4-181.5c-4-7.9-11-6-17.5-5.4c-4.3,0.4-8.9,2.5-13-3c3.9-1.1,7.2-2,10.5-2.9c0.1-0.3,0.1-0.6,0.2-0.9 c-2.1-0.2-4.4-0.1-6.3-0.8c-2.1-0.7-5.7-2.1-5.7-3.4c-0.7-10.4-10.2-15.4-14.1-23.8c-4.1-8.8-8.6-17.3-13.2-25.9 c-1.3-2.5-3.3-4.8-4.9-7.1l0,0c-2.9-4.9-5.8-9.9-8.7-14.8c-1.5-2.6-3.4-5.1-4.2-8c-2-6.9-2.3-14.2-7.6-20.2c-1.8-2-0.5-6.9-0.2-10.4 c0.4-5.7,2.1-11.4,1.5-16.9c-0.7-6.3,1.1-8.5,7-8.5c10.4,0.1,20.7,0,31.1,0c32,0,64.1,0,96.1,0c10.9,0,11.5,0.6,11.5,11.3 c0.1,22.9,0,45.8,0,68.6c0,11.3,0.3,11.6,12,11.7c16.2,0,32.3-0.1,48.5,0.1c9.4,0.1,10.8,1.3,10.9,10.5c0.1,26.5,0.1,53.1,0,79.6 c0,9.2-1.5,10.2-10.7,10.7c-12.4,0.7-24.1-1-35.5-6.3c-13.2-6.1-27-11.2-40.6-16.3c-2.7-1-6-0.6-9-0.5c-4.6,0.2-9.1,0.8-13.6,1.1 c-6.3,0.5-10.5-1.3-11.6-8.4C-185.8-178.3-191.3-180.5-197.4-181.5L-197.4-181.5z M-169.9-242.5c-0.2-10.1-7.8-17.8-17-17.5 c-8.4,0.3-17.1,9.1-17.1,17.2c0,9,8.6,17.3,17.9,17.2C-176.6-225.7-169.8-232.8-169.9-242.5z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M801.1-451.8c9.8,0,19.7,0,29.5,0c19.2,0,38.5,0,57.7,0c9.5,0,20.6,15.3,15.6,23.1 c-3.8,5.9-10.7,11.3-17.4,13.5c-11.4,3.9-11.8,2.8-17.6,13.1c-8.1-0.7-13.4,2.8-17.3,10.8c-2.4,4.7-8.1,8.3-13.2,11 c-14.2,7.5-20.9,29.2-13.7,46.7c5.4,13.2,10.8,26.4,14.9,40c2.9,9.4,2.3,19.5-2.7,28.4c-1.2,2.2-4.5,4.3-7,4.4 c-3.3,0.2-6.6-0.5-8.5-5.1c-2.1-5.1-6.8-9-9.8-13.8c-4.4-6.9-8.7-13.8-12.1-21.2c-1.5-3.3-1.2-7.9-0.3-11.5c1.3-5.4,0.5-9.4-3.8-13 c-2.1-1.7-3.6-4.2-5.2-6.3c-6-7.8-6-7.8-14.5-2.9c-6.8,3.9-9.8,3.5-14.6-2.8c-5.8-7.7-13.9-6.2-21.8-5.9c-10,0.4-20.1,0.5-30.1,1 c-4.3,0.2-7.5-1.1-8.4-5.2c-1.5-6.8-6.2-7.1-11.8-7.1c-16.8-0.1-17.3-1.3-10.1-17c1.7-3.6,2.3-8.3,1.7-12.3 c-1.5-10.3-0.5-19.3,5.5-28.6c6.7-10.3,10.5-22.5,16.4-33.4c3.8-7.1,5.9-16.2,15.7-18.5c0.3-0.1,0.6-0.2,0.8-0.5 c6.7-13.4,21-9.6,31.6-14c1.6-0.7,3.6-0.9,4.9-2c5.2-4.7,10.2-9.7,15.3-14.5c3.1-2.9,6.3-2.4,8.8,0.6c4.1,5.1,9,6.9,15.3,5.5 c5.2-1.2,7,2.6,8.7,6.2c2.7,5.7,5.3,11.5,8.3,18.1c-3.5,3.3-7.5,7.1-11.6,10.8C800.6-453.4,800.9-452.6,801.1-451.8z M804.3-385.9 c10.1,0.2,17.7-6.6,18.1-16.4c0.3-8.3-9-18.1-17.2-18.1c-8.2,0-17.4,9.4-17.4,18C787.7-392.2,793.8-386.1,804.3-385.9z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M-139.2-408.7c5.6-2,8.6,0.5,10.5,5.4c1,2.5,2.6,4.8,4,7.2c7,12.1,12.4,13.5,24.5,6c0.7-0.5,1.7-0.6,4.2-1.5 c1.8,4.3,4.8,8.4,5,12.8c0.7,12.5,0.2,25,0.3,37.5c0.1,6.1-3.2,7.8-8.6,7.8c-15.8-0.1-31.7,0-47.5,0c-40,0-80,0-119.9,0 c-14.6,0-19.8-6.5-16.8-21.2c0.9-4.5,3.1-8.7,3.9-13.1c4.3-24.8,6.2-49.6-0.8-74.3c-1.1-3.8-3-7.3-4-11.1c-1-4-1.4-8.3-2.1-12.9 c9.3,1.2,16.7,2.1,24.7,3.2c-0.8-4.3-2.5-7.8-1.7-10.3c1.7-5.1,4-9.2,11.7-9c25.9,0.8,51.9,0.3,77.8,0.3c11.7,0,12,0.3,12,11.7 c0,11.8,3.9,21.8,12.8,29.8c3.6,3.2,6.8,6.8,9.7,10.6c1.1,1.5,1.5,3.9,1.4,5.8C-138.3-419.2-138.8-414.4-139.2-408.7z M-222.1-394.3 c9.4,0.3,17.2-7.5,17.4-17.4c0.2-8.6-8.1-16.9-17-17c-9.4-0.1-16.9,7.1-17.2,16.6C-239.4-402.2-232.1-394.6-222.1-394.3z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M439.7-324.3c-5.8,6.5-8.3,14.1,0,21.3c-10.9,10.9-10.2,10.7-5.7,26.5c1.4,4.8-1,11.2-2.9,16.3 c-2.9,7.7-6.9,15-11.5,24.6c-33.9,0-70.4,0-106.9,0c-0.1-0.8-0.3-1.6-0.4-2.4c6-4.9,12.1-9.8,18.1-14.7c0.1-0.5,0.4-1.2,0.2-1.7 c-1.6-4.8-6-11.2-4.3-14.2c4.5-8,10.9-15.2,17.8-21.4c3.6-3.2,6.9-5.8,7.5-10.7c1.1-9.7,2.4-19.3,3-29c0.7-11.1,6.7-15.2,17.2-11.3 c2.5,0.9,5.4,0.9,8.1,0.9c11.3,0.1,22.7,0.8,33.9-0.2C426.2-341.3,435-337.5,439.7-324.3z M367.5-294.5c-0.2,10,6.9,17.8,16.7,18.2 c8.4,0.4,18-8.8,18-17.2c0-9.5-7.2-16.8-16.7-17.1C374.7-311,367.7-304.7,367.5-294.5z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M526.7-353.3c3.4-5.5,5.8-2.1,6.4,1.3c0.8,4.3,0.2,9,0.2,14.2c-9.4,0.3-17.9-3-26.9,0.2c-8.5,3-18.1,2.7-28.1,4 c1.5-10.1,3.2-20.5,4.4-30.9c0.7-6.9,0.7-13.9,0.7-20.8c0-8.8-0.5-17.7-0.5-26.5c0-5.4,3.3-7.1,8.3-7.5c6-0.5,12-1.4,17.9-2.6 c10.4-2.1,14.4-10,17.2-19.2c3.4-11.1,7.9-21.7,14.8-29.2c5.8,0.3,10.8-0.6,14.5,1.1c3.7,1.6,6.5,5.7,9,9.2c1.1,1.5,0.7,4.2,0.5,6.3 c-1.3,12.2,1.8,23.2,8.2,33.6c3.7,6.1,2.8,10.7-3.4,14c-11.3,6-19.8,17.7-34.3,17.6c-1.1,0-2.2,1-3.2,1.7 C524.2-380.9,520.9-361.8,526.7-353.3L526.7-353.3z M515.9-384.5c10.2,0,17.9-7.3,17.7-16.8c-0.2-9.6-8-17.3-17.4-17.5 c-8.4-0.1-18.2,9.3-18.1,17.4C498.1-392,506-384.5,515.9-384.5z M529.4-343.7c-0.4-0.1-0.7-0.2-1-0.3c0.1,0.2,0.1,0.4,0.2,0.6 C528.8-343.4,529-343.5,529.4-343.7z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M472.5-324.5c8.1-2.6,14.9-4.8,22.1-7.2c2.4,3.6,1.6,6.3-2.1,8.1c-4.9,2.4-9.8,5.3-15,6.5 c-6.9,1.5-10.4,4.6-11.7,11.8c-1.6,9.2-5,13.5-13.5,20.5c-13.1-10.1-13.2-12.1-1.5-25.3c-3.7-5.8-4.1-11.8-1.5-18.7 c2.8-7.2-2.1-13-10.4-13.2c-14-0.3-28-0.1-42.1-0.2c-2.4,0-5,0.3-7.3-0.2c-2.2-0.5-5.6-1.5-5.9-2.9c-0.6-2.2,0.1-5.8,1.7-7.4 c4.4-4.2,9.1-7.8,7.7-15.2c-0.2-1.2,4.1-4.5,6.6-4.9c4.4-0.7,9.2-0.6,13.6,0.3c6.5,1.3,12.1,0.7,16.7-4.3 c-0.9-12.8,11.9-27.9,25-29.5c0.6-0.1,1.2-0.1,1.8-0.1c19.3-1.2,17.6-1,19.8,18C479-367.3,474-347.3,472.5-324.5z M470.6-368.3 c0.1-9.6-6.8-17.1-16-17.4c-9.7-0.3-18.3,7.7-18.6,17.4c-0.2,8.8,7.6,16.6,17,16.8C462.8-351.2,470.5-358.6,470.6-368.3z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M-240-169.4c0.4,1.6,0.9,3.3,1.3,4.9c-0.4,0.3-0.8,0.7-1.3,1c-1.4-1.1-2.7-2.2-4.1-3.3 C-242.8-167.7-241.4-168.6-240-169.4L-240-169.4z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M-248.7-167.4c-0.2,0.1-0.6,0.3-0.7,0.2c-0.2-0.1-0.2-0.5-0.3-0.7c0.2-0.1,0.6-0.3,0.7-0.2 C-248.8-168-248.8-167.6-248.7-167.4z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M-304.2-242.7c-0.2,0.4-0.4,0.8,0.1-0.1C-304.6-241.9-304.4-242.3-304.2-242.7L-304.2-242.7z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M157.8-220.7l-4.1-0.4C154.9-220.7,156.2-220.6,157.8-220.7z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M159.2-312.3c-10.5,0.1-16.3,5.9-16.3,16.5c0,10,7.6,18,16.8,17.8c8.4-0.1,17.5-8.8,17.6-16.8 C177.5-304.6,169.5-312.3,159.2-312.3z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M227.6-245.3c-2.5-6.5-4.7-13.1-11-17.5c-2.2-1.5-3.9-5.7-3.5-8.3c0.9-5.4-1.1-7.9-4.9-11.5 c-5-4.7-11.1-10.8-11.6-16.8c-0.6-7.4,4-15.3,6.5-22.9c0.3-0.9,2-1.3,3-2c9.3-6.1,9.8-11,2.8-20.1c-3.2-4.2-6.8-8.7-8-13.6 c-1.4-5.8-4-7.7-9.3-7.7c-21.1,0-42.1,0-63.2,0c-4.5,0-7.8,1.2-8,6.5c-0.1,3.4-1.2,6-5.4,5.7c-5.1-0.4-10.3-0.9-15.4-1 c-26.2-0.7-52.3-1.4-78.5-2c-4.5-0.1-6.8,2.2-6.8,6.7c0,4.9-0.1,9.8-0.1,14.7c0,21.7-1.7,20.9,19.9,20.8c8.4-0.1,9.3,1,9.3,9.7 c0.1,14.7,0.1,29.3,0,44c-0.1,12.5,0.7,17.1-2.9,18.7l75.2,0.2c0-0.4,0-0.7,0-1.1c7.5,0,14.7,0,22,0c4.7,0,8.9,0,11,5.8 c0.7,1.8,5,3.1,7.6,3.2c11,0.4,22,0.2,33,0.2c6.3,0,12.6,0,18.5,0c2.2,8.5,4.2,10.1,8.9,8.6C222.1-226.6,229.6-240.1,227.6-245.3z  M128.2-289c-9.3,0.1-16.8-7.9-16.8-17.8c0-10.6,5.7-16.4,16.3-16.5c10.3-0.1,18.4,7.7,18.2,17.5C145.7-297.9,136.6-289.2,128.2-289 z" }), /* @__PURE__ */ u.createElement("polygon", { className: "st0", points: "212.5,-213.4 212.5,-213.4 212.5,-213.4 " }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M707.6-335.9c1.5-6.9-4.3-7.6-7.2-10.7c-2.8-3.1-4.3-7.5-6.8-12.1c-6.6-0.3-14.3-0.7-22.8-1.2 c0.9-2.8,1-4.4,1.8-5.6c5.2-7.3,7.2-14.7,5.6-24c-1.3-7.8-0.3-15.9,5.1-23.4c5.3-7.3,8.3-16.1,12.4-24.2c2.3-4.4,0.9-6.9-3.7-8.1 c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.3-6.4-3.7-7.4-8.9-7.4c-15.3,0.1-30.5-0.2-45.8,0.1c-1.5,0-2.9-0.1-4.1-0.4 c-4.2-0.9-6.2-3.9-6.4-9.5l-75.2-0.2c-2.6,1.2-7.5,0.8-16.8,0.8c-1.2,0-2.5,0-3.7,0c-32.3,0.1-64.7,0-97,0c-9.9,0-11.4,1.2-11.4,9.9 c-0.1,27.5-0.1,54.9,0.1,82.4c0,2.6,1.7,7.1,3.3,7.4c3.1,0.7,7.9,0.1,9.8-1.9c3.4-3.6,6.9-4.4,11.3-4.4 c11.7-0.1,31.6,13.3,34.9,25.2c2.4,8.8,7.8,13.2,15.6,16.3c9.1,3.6,9,3.8,14.4-4c4.2-6,9.7-8,15.7-4.1c4.7,3.1,8.6,7.5,12,12 c4,5.3,7,11.3,10.6,17c1.8,2.8,4.9,5.3,5.5,8.2c2.7,13.4,11.9,18.7,23.9,21.6c10.2,2.5,13.3,0.5,10.6-9.8 c-3.1-12.1-0.1-19.8,15.1-30c6-4.1,12.5-7.5,18.2-12c6.3-4.9,13.5-8.4,21-7.6c8.8,1,17.9,3.4,25.8,7.3c6.2,3.1,11.6,4.6,18.2,2.6 c2.2-0.7,5.3-1.8,6.8-0.9c3,1.8,6,4.6,8.4,0.8c1.1-1.8-1.1-5.7-1.7-8.6c-0.1-0.6,0-1.2,0-2.4C704.1-336.4,705.8-336.1,707.6-335.9z  M559.8-348.1c-10.1,0-17.9-7.3-17.9-16.7c0.1-10.6,7.5-18.2,17.6-18c9.5,0.2,17.1,8.2,16.9,17.8 C576.3-355.5,568.9-348.1,559.8-348.1z" }), /* @__PURE__ */ u.createElement("path", { d: "M552.5-184c-0.1-0.1-0.2-0.2-0.4-0.4c0.3,0.7,0.8,1.4,1.2,2.1c0.7,1.2,1.3,2,2,2.5c-0.1-0.1-0.2-0.2-0.2-0.4 C554.3-181.6,553.5-182.9,552.5-184z" }), /* @__PURE__ */ u.createElement("path", { d: "M562.5-180c0.2,0.4,0.4,0.8,0.6,1.3c-0.1-0.4-0.2-0.9-0.4-1.3C562.6-180,562.6-180,562.5-180z" }), /* @__PURE__ */ u.createElement("path", { d: "M548.9-186.2c0,0,0,0.1,0,0.1C549-186.1,549-186.1,548.9-186.2C549-186.2,549-186.2,548.9-186.2z" }), /* @__PURE__ */ u.createElement("path", { d: "M580-176.6c2.9,0,5.3-2.2,5.2-4.8c-0.1-2.6-2.8-5.3-5.3-5.4c-2.8-0.1-5.1,2.3-5.1,5.3C574.9-178.2,576.6-176.5,580-176.6z" }), /* @__PURE__ */ u.createElement("path", { d: "M563.5-176.7c0.1,3,0.1,6.1,0.1,9.1c0-0.1,0-0.1,0-0.2C563.6-170.8,563.9-173.7,563.5-176.7z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M563.1-178.7c0.2,0.7,0.3,1.3,0.4,2c0-0.2,0-0.4,0-0.5C563.5-177.7,563.3-178.2,563.1-178.7z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M549-186.1c0.3,0.3,0.8,0.6,1.4,0.7c0.6,0.2,1.2,0.5,1.7,1c0,0,0,0,0-0.1C551.5-185.9,550.6-186.7,549-186.1z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M560.7-180.6c-2.5,1.5-4,1.8-5.4,0.7c0.6,0.8,1.4,0.9,2.5,0.6c1.5-0.4,3.1-0.5,4.6-0.7 c-0.2-0.4-0.4-0.7-0.5-1.1C561.2-180.8,560.9-180.7,560.7-180.6z" }), /* @__PURE__ */ u.createElement("path", { d: "M542.5-136.6c0,3.5,0.1,3.6,3.8,3.6c9.8,0,19.5,0,29.3,0c5.5,0,11,0,16.5,0c1.7,0,2.9-0.5,2.9-2.4c0-6.1,0-12.1,0-18.2 c0-1.4-0.6-2.2-2.2-2.2c-1.3,0-2.6-0.1-3.9,0c-2,0.1-3-0.6-2.9-2.6c0.1-1.6,0-3.3,0-4.9c0.1-2.5,0.3-2.8,3-2.8 c6.1,0,12.3-0.1,18.4,0c2.3,0,4.6,0.3,6.8,0.8c1.4,0.3,2.7,1.1,4.4,1.9c0-1.2,0-2,0-2.7c0.1-3.3,0.2-6.7,0.4-10 c0.3-3.4-1.6-6.6-0.7-10c0.1-0.2-0.1-0.5-0.1-0.8c-0.8-4-1.6-7.9-2.4-11.9c-0.1-0.4-0.1-0.9-0.1-1.3c0-1.1,0.1-1.9,0-2.5l-82.1,0.1 c0,0.2-0.1,0.3-0.1,0.5c0.1,0.5,0.1,1.2,0.1,2.1c0,0.9,0.1,1.7,0.2,2.5c0.5,1.9,1.4,3.7,2.9,5.4c0.4,0.5,0.9,1,1.3,1.4 c0.9,0.8,1.7,1.7,2.4,2.6c0.3,0.4,0.4,1.1,0.4,1.7c0,1.4-0.2,2.8-0.3,4.4c0,0,0,0.1,0.1,0.1c1.6-0.5,2.5,0.2,3.1,1.6c0,0,0,0,0,0.1 c0.1,0.1,0.2,0.2,0.4,0.4c1,1.2,1.8,2.5,2.6,3.8c0.1,0.1,0.2,0.3,0.2,0.4c1.4,1.1,2.9,0.8,5.4-0.7c0.2-0.1,0.5-0.2,1.3-0.4 c0.2,0.4,0.3,0.7,0.5,1.1c0.1,0,0.2,0,0.2,0c0.2,0.4,0.3,0.9,0.4,1.3c0.2,0.5,0.4,1,0.4,1.4c0,0.2,0,0.4,0,0.5c0.4,3,0.1,6,0.1,8.9 c0,0.1,0,0.2,0,0.2c0,0.5,0,1,0,1.5c0,1.8-1,2.3-2.6,2.3c-3.4,0-6.8,0-10.1,0c0,0.2,0,0.5,0,0.8 C542.5-151.2,542.5-143.9,542.5-136.6z" }), /* @__PURE__ */ u.createElement("path", { d: "M667.1-134.3c1,0.5,4.6-1.1,5-2.2c0.8-1.9,2-2.3,4.1-2.2c1.9,0,4-0.6,5.6-1.6c2-1.3,3.6-3.2,5.7-5.1 c1.9,3.6,5.7,2.1,8.4,3.6c0.2,0.1,0.6-0.1,0.8-0.2c2.3-2.6,5.3-4.8,6.8-7.8c1.4-2.8,1.4-6.3,1.8-9.4c0-0.2,0-0.4,0-0.5l-3.4,1.7 l-3.5,1.2l-3.3,0.2l-2-1.5l1-1.8l0.5-0.5l0.7-1.8l1.2-0.8l1.6-2.8l-1.7-2.2l-0.3-3.5l-2.2-0.7l-2.8,2l1-2.3l1.7-2.3l-0.7-2.2 l-0.5-2.5l-2.7-1l-2.3-2l-2.8,1.2l0.2,2.2l-1.7,2l-1.3-0.7l-2.5,2.8v3.3l0.3,3.3l1.5,2.3l-0.2,5l-3.2,3l-2.3,0.2l-1.2-3.5l-1.2-2.5 l0.5-3.3l-0.5-3.3l1.2-2.2l0.7-2.2l1.2-3.7l-2.7,3l1.5-5.2l2.3-2l2.8-0.2l2.2-1h3.5h2.8l1.8-0.5l2.2,0.3l-1.3-1l-1.7-1l-1.9-1.4 l-1.9,0.6l-1.8-1.3l-4.3,0.2l-2.3,1.5l-1.8-1.2l-2.2-1.3l-3.2-0.2l3.2-4.5l-3.7,1.7l-3,2.3l-3,1.7l-2.7,0.3l-0.3-1.7l-5.5,1.2l4.6-4 l3.2-2.4l4-3.2l-1.7-0.2L660-198l-2.5-0.5l-2.2-0.4l-2.2-1.6l-2.5,0.2l-4.8-1.2l-1.2-1.5l-0.7-2.3l-1.2-1.1l0.1,1.2l-1.2,1.8l-8.5,0 c0,0.3,0,0.6,0.1,1c0.2,2.5,0.9,5,1.4,7.4c1.1,4.9,0.4,10,1.6,15c0.5,2,0.1,4.1,0.1,6.2c0,3.4,0.1,3.5,3.6,3.5 c5.3,0,10.7-0.1,16,0.1c1,0,2.7,0.6,2.7,1.1c0.2,2.3,1.8,3.6,3.2,5.2c0.7,0.9,1,1.7,0.9,2.5c0.5,1.5-0.1,2.6-2.1,3.9 c-0.3,0.2-0.8,0.3-0.9,0.6c-0.8,2.3-2.1,4.6-2,6.8c0,0.1,0,0.2,0.1,0.4c1.1,1.8,2.5,3.4,3.9,5.1c0.3,0.3,0.5,0.5,0.6,0.8 c0.1,0.1,0.2,0.3,0.3,0.4c0,0.1,0,0.1,0,0.2c0.1,0.4,0.2,0.9,0.1,1.5c-0.1,0.4,0,0.9,0.2,1.3c0.3,0.5,0.8,0.9,1.7,1.8 c0.1,0.1,0.2,0.2,0.3,0.4c0.9,1.1,1.5,2.3,2,3.6C666.8-134.5,667-134.4,667.1-134.3z" }), /* @__PURE__ */ u.createElement("path", { d: "M516.3-163.8c-1.9,0-3.9,0-5.8,0c-0.8,0-1.4-0.1-2-0.2l0,0.2C511.1-163.8,513.7-163.8,516.3-163.8z" }), /* @__PURE__ */ u.createElement("path", { d: "M534.5-140.7c-2.5,0.1-5.2,2.9-5.2,5.4c0,2.8,2.6,5.5,5.4,5.4c2.9,0,5-2.3,4.9-5.3C539.6-138.4,537.3-140.8,534.5-140.7z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M517.8-163.8c-0.5,0-1,0-1.4,0c7.5,0,15.1,0,22.6,0C531.9-163.8,524.8-163.8,517.8-163.8z" }), /* @__PURE__ */ u.createElement("path", { d: "M561-120.6c0-2.9-0.4-5.3-3.3-5.3c-4.9,0-9.8,0-14.6,0c-3.5,0-3.6-1.1-3.6-4.7c0-7.2,0-11.4,0-18.6c0-3.4-0.2-3.5-3.5-3.5 c-2.6,0-5.2,0-7.8,0c-7.5,0-15.1,0-22.6,0c-2.6,0-5.2,0-7.8,0l0.4,2.2l0.5,2.8l-0.7,3.8l0.5,2.7l1.2,2.7l1,3.3l0.8,2.2l3.5,2.8 l1.7-0.2l2.3,0.3l-2.5,0.7l0.7,1.2l-2.2,0.3l2,2.2l2,2.2l-0.7,1.8l2.7,3.8l2.8,2.3l0.3,2.8l2.3,1.2l3.2,1l2.5,2.2l2.2,1.3l2.3,1.8 l1.3,1l1.5,3.3l8.5-0.2l16.7,5.8h6.3c0-0.1,0-0.2,0-0.3C561-103.9,561-112.3,561-120.6z" }), /* @__PURE__ */ u.createElement("path", { d: "M686.7-125c-0.1-0.2,2.7-1.3,2.6-1.5c1.3-1.2,2.6-2.4,3.8-3.5c-1-2.1-0.4-0.8-1.3-2.7c-0.6-1.2-1.2-2.4-2.9-2 c-2.1,0.5-3.7-0.1-5-1.8c-0.8-1-1.9-1.1-2.9-0.2c-1.7,1.5-3.3,3.2-5,4.7c-0.4,0.4-1.1,0.4-1.6,0.6c-3.5,1.4-8.2,0.2-10.3,4.5 c0,0.1-0.2,0.1-0.2,0.2c-3.2,0.7-3.9,3.6-5.1,5.9c-1.9,3.5-3.2,7.4-5.4,10.7c-2,3-2.3,5.9-1.8,9.2c0.2,1.3,0,2.8-0.6,3.9 c-0.3,0.6-0.5,1.1-0.7,1.6c2.2,0.1,4.2,0.2,6,0.3c0.3,0.5,1.7,2.2,3.4,4.3l0.4,0.4l4.8-0.7l0.7,0.8h3.3l1.8-0.5l2.7-0.2l2.5,1 l1.5-0.2l1.5,2.2l3,0.2l1.7-1.3h1.7l3.3,2.8l1.8,2l0.5,2.7l-0.3,3.3l1.2,3.5l3.2,4l1.8,3.8l0.7,1.5l3.3-0.7l0.8-3.7v-5.5l-1.7-4.5 l-0.5-1.2l-0.3-3.3l-2.8-3.3l-0.5-4l0.2-3.3l1.3-3.7l2.5-2l-0.2-1.5l3-0.5l4.3-4.8l2-1.7l2.2,0.3l2-3.8l2.8-1.5c0,0,2.2,0.3,2.3-0.5 c0.2-0.8,2.3-4.8,2.3-4.8l-2.3-1.3l1.3-1.2l0.3-0.8l-0.8-2.1c-7.5-0.1-17.8-0.2-22.6-0.2C693.2-125,689.9-125,686.7-125z" }), /* @__PURE__ */ u.createElement("path", { d: "M523.9-181.8c2.8,0.1,5.2-2.2,5.3-5.2c0.1-2.6-2.4-5-5.1-5c-2.8,0-5.1,2.1-5.2,4.9C518.7-184.2,520.9-181.9,523.9-181.8z" }), /* @__PURE__ */ u.createElement("polygon", { points: "690.5,-184.6 691.4,-187 688.5,-186.6 686.7,-186.8 685.4,-187.8 686.4,-186.1 " }), /* @__PURE__ */ u.createElement("path", { d: "M527.3-160.8c4.8,0,9.6,0,14.3,0c1.7,0,2.6-0.5,2.6-2.3c0-3.7,0.1-7.4-0.1-11.1c-0.1-1.3-1-2.5-1.5-3.8 c-0.8,0.3-1,0.3-1.3,0.4c-3.7,2.2-5.3,1.8-7.4-1.8c-0.4-0.7-0.9-1.4-1.2-2.1c-0.6-1.5-1.5-2.2-3.2-1.6c0.1-1.7,0.3-3.1,0.3-4.5 c0-0.6-0.1-1.3-0.4-1.7c-0.9-1.1-1.9-2.2-2.9-3.1c-2.7-2.4-3.9-5.3-3.9-8.8c0-1.3,0-2.1-0.2-2.6l-24.6,0l-0.7,0.9l0.3,2.2l1.7,3.5 l-0.8,3.7l-1.8-2.3l-1.2-2.7l-2.7-0.5l-4.2-0.5h-1.2l0.7,2.3l2.3,3.3v3.3l0.7,3.7l3,0.3l1.2,1.7l-3.7-0.5l-1.2,0.8l0.5,3.5l-0.7,3.8 l0.2,4.5l-1.2,3l-1.3,4.3l1,3l0.3,1.4c0.6,0.1,1.3,0.2,2,0.2C503.2-160.8,515.2-160.8,527.3-160.8z" }), /* @__PURE__ */ u.createElement("path", { d: "M748.3-155.2l-2.7,0.2l-2.5,0.7l-1.2,0.7l-0.2-1.2l0.8-1l0.5-0.1l-0.5-22.1l-5.5,0l-3.5,3.2l-2.2,1.3l-1,2.8l-0.5,1.5 l-2.5,1.7H725l-1.8-0.8l-2.3,0.3l-3,1l0.2,1.5l-0.2,2.7l-1.5,1.3l-0.8,0.2c2.9,0.1,5.8,0.2,8.7-0.1c3.7-0.3,6.3,0.9,7.7,4.9 c-1.7,2-2.5,4.3,0,6.5c-1.2,2.4-1.9,3.9-2,5.6l0.6-0.5l0.7,4.2l0.5,2l1.2,1.8l-0.3,3l1.8-3.7l1.2-2.8l0.2-1.7l-1.7-2l-0.2-0.8 l0.5-0.5l2.7,1.7l0.8-2l1.8-1.8l0.3-2l-0.3-2.3l0.2-1.2l0.3-1.7l1.3,1.8h0.7l2-0.3l2-0.2l2.7-0.8L748.3-155.2z" }), /* @__PURE__ */ u.createElement("path", { d: "M728.8-151.9c-1.4-4-4-5.2-7.7-4.9c-2.9,0.3-5.8,0.1-8.7,0.1l-2.2,0.5l-1.3,0.7c0,0.2,0,0.4,0,0.5c-0.5,3.2-0.4,6.7-1.8,9.4 c-1.5,3-4.5,5.3-6.8,7.8c-0.2,0.2-0.6,0.3-0.8,0.2c-0.6-0.3-1.3-0.5-2-0.6c-0.4,0.5-0.7,0.9-1.1,1.4c0.6,0.1,1.2,0,1.9-0.1 c1.7-0.4,2.3,0.8,2.9,2c0.9,1.8,0.3,0.6,1.3,2.7c-1.1,1.1-2.5,2.3-3.8,3.5c0.1,0.2-2.7,1.3-2.6,1.5c3.2,0,6.5,0,9.7,0 c4.7,0,15.1,0.1,22.6,0.2l-0.5-1.2l-1.3-1.5l1.7-1.8l-1.3-1.7l-0.3-3.3l-0.2-2.8l0.4-0.3c0.1-1.7,0.7-3.2,2-5.6 C726.4-147.5,727.1-149.9,728.8-151.9z" }), /* @__PURE__ */ u.createElement("path", { className: "st0", d: "M515.9-114.7c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0-0.1-0.1-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1 C515.9-114.8,515.9-114.7,515.9-114.7z" }), /* @__PURE__ */ u.createElement("path", { d: "M601-94.1l0.6-0.7c-0.5,0-0.9,0.2-1.3,0.4L601-94.1z" }), /* @__PURE__ */ u.createElement("path", { d: "M660.2-98.3l-0.2-0.8h-0.6C659.7-98.8,659.9-98.6,660.2-98.3L660.2-98.3z" }), /* @__PURE__ */ u.createElement("polygon", { points: "653.2,-131.9 653.2,-131.9 653.2,-131.9 " }), /* @__PURE__ */ u.createElement("path", { d: "M605.2-133.9c0,3.5,0.2,4.9-0.7,5.4c0.4,0,0.9,0,1.3,0c0.4,0,0.7,0,1.1,0c2.8,0,4.3,0.1,5.1-0.2l22.7,0.1c0,0,0,0,0,0.1 c1,0.1,1.8,0.4,2.3,1.7c0.2,0.5,1.5,0.9,2.3,1c3.3,0.1,6.6,0,9.9,0.1c1.9,0,3.8,0,5.6,0c0.7,2.5,1.3,3,2.7,2.6 c1.6-0.5,3.8-4.5,3.2-6c-0.8-1.9-1.4-3.9-3.3-5.2c-0.7-0.4-1.2-1.7-1.1-2.5c0.3-1.6-0.3-2.4-1.5-3.4c-1.5-1.4-3.3-3.2-3.5-5 c-0.2-2.2,1.2-4.5,2-6.8c0.1-0.3,0.6-0.4,0.9-0.6c2.8-1.8,2.9-3.2,0.8-5.9c-1-1.2-2.1-2.6-2.4-4c-0.4-1.7-1.2-2.3-2.8-2.3 c-6.4,0-12.7,0-19.1,0c-1.4,0-2.3,0.4-2.4,1.9c0,0.4-0.1,0.8-0.3,1.1c0,0.4,0,0.3,0,1.4c-1.7-0.8-3-0.6-4.4-0.9 c-0.4-0.1-0.9-0.2-1.3-0.2c-0.1,0-0.2,0-0.4,0c-7.7-0.2-15.3-0.4-23-0.6c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.7,0 c-1,0.1-1.5,0.8-1.5,1.9c0,1.4,0,0.9,0,2.3c0,4.3-0.2,5.6,1.5,6c0.2,0,0.3,0,0.5,0c1.3-0.1,2.6,0,3.9,0c1,0,1.6,0.3,1.9,0.9 c0.8,0.9,0.9,2.4,1,4.1C605.2-142.5,605.2-138.2,605.2-133.9z" }), /* @__PURE__ */ u.createElement("path", { d: "M643.9-93c0.3-0.8,0.3-1.3,0.5-1.6c1.6-2.2,1.2-5.6,0.7-8.3c-0.4-2.3-0.1-4.7,1.5-6.9c1.6-2.1,2.5-4.8,3.8-7.2 c0.7-1.3,0.3-2-1.1-2.4c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.1-1.9-1.1-2.2-2.7-2.2c-4.6,0-9.2-0.1-13.8,0c-0.5,0-0.9,0-1.2-0.1 c-1.2-0.3-1.9-1.1-1.9-2.8c-0.3,0-0.7,0-1.1,0c-2.2,0-4.4,0-6.6,0c0,0.1,0,0.2,0,0.3l-22.7-0.1c0.1,0,0.1-0.1,0.2-0.1 c-9.3,0-18.6,0-27.9,0c-3,0-3.4,0.4-3.4,2.9c0,8.1,0,16.3,0,24.4c0,0.3,0.1,1.7,0.3,3.2h7l-0.3-1.3h6.7l2.7,1.5l1.5,1.5l3.8,2.7 l1.3,4.8l3.8,2l1.6,0.7c0.4-0.2,0.8-0.4,1.3-0.4l2.6-3.1l4.2,0.5l1.7,1.3l4.5,7.3l1.5,1.8l1.2,4.2l8.8,3.5l-0.3-3l-0.3-4.2l2.8-3.3 l-0.5-1l2.8-2.3l1.5,0.8l2.5-2.8l1.5-2h2.2l4.8-1l3.5,1.5h2.7l1-1.2l1.2,0.8l0.2,1.5l3.5,1.2l3.3-0.5l2.8,0.2l-2.3-1.8l-0.2-1 l1.5-0.8c-0.2-0.3-0.5-0.6-0.7-0.9h-1.7l-2.7,0.3l1.7-1.5l0.8-1l0.4,0.4c-1.7-2-3.1-3.8-3.4-4.3C648.8-92.8,646.5-92.9,643.9-93z" }), /* @__PURE__ */ u.createElement("path", { d: "M751-164l1.8-0.5l1.5-1l3.5,0.8c0,0,1.5,0.8,1.7,0.3s0.7-1.8,0.7-1.8l-1.2-1.3l-0.5-2l0.3-3.3l0.3-2.7l1.5-2l0.3-0.8l1,0.5 l3.2-3.5h1.2l2.7-0.3l0.8-1.7h2.3l2-1.7l-0.8-0.9l-0.9-2.2l-1-0.8l0.4-5.6l-0.5-5.1l-3-0.9l-2.6,0.9l-1.4-0.2l-5.8,13.4l-2.7,0.2 l-1.2,1l-8.7-0.1l0.5,22.1l1.7-0.4L751-164z" }), /* @__PURE__ */ u.createElement("path", { d: "M1036.5-111.8c1.7,0.5,2.2,1.4,1.4,3c-1.5,3-2.7,6.3-4.6,9c-2,2.8-2.4,5.8-1.9,8.7c0.6,3.5-0.2,6.3-2.1,9 c-0.3,0.4-0.3,1-0.7,2.1c3.2,0.2,6,0.3,8.5,0.4c0.9,1.7,1.5,3.3,2.5,4.5c1.1,1.2,3.2,1.4,2.7,4c-0.7-0.1-1.3-0.2-2-0.3 c0,0.4,0,0.7,0,0.9c0.2,1.1,1.1,2.5,0.6,3.2c-0.9,1.4-2,0.4-3.1-0.3c-0.6-0.3-1.7,0.1-2.5,0.3c-2.4,0.7-4.4,0.2-6.8-1 c-3-1.5-6.3-2.4-9.6-2.7c-2.8-0.3-5.5,1-7.8,2.8c-2.1,1.7-4.5,3-6.8,4.5c-5.7,3.8-6.8,6.7-5.6,11.2c1,3.8-0.2,4.6-4,3.7 c-4.5-1.1-7.9-3.1-8.9-8.1c-0.2-1.1-1.4-2-2-3.1c-1.3-2.1-2.4-4.4-3.9-6.3c-1.3-1.7-2.8-3.3-4.5-4.5c-2.2-1.5-4.3-0.7-5.9,1.5 c-2,2.9-2,2.8-5.4,1.5c-2.9-1.2-4.9-2.8-5.8-6.1c-1.2-4.4-8.7-9.4-13-9.4c-1.6,0-3,0.3-4.2,1.6c-0.7,0.8-2.5,1-3.7,0.7 c-0.6-0.1-1.2-1.8-1.2-2.8c-0.1-10.2-0.1-20.5,0-30.7c0-3.2,0.6-3.7,4.3-3.7c12.5,0,25,0,37.6,0c8.2,0,7.3,0.8,7.4-7.3 c0-5.5,0-10.9,0-16.4c0-3.2-0.4-3.6-3.5-3.6c-8.1,0.1-7.4,0.3-7.4-7.8c0-1.8,0-3.6,0-5.5c0-1.7,0.9-2.5,2.5-2.5 c9.8,0.2,19.5,0.5,29.3,0.7c1.9,0.1,3.8,0.2,5.8,0.4c1.6,0.1,2-0.9,2-2.1c0.1-2,1.3-2.4,3-2.4c7.9,0,15.7,0,23.6,0 c2,0,3,0.7,3.5,2.9c0.4,1.8,1.8,3.5,3,5.1c2.6,3.4,2.4,5.2-1,7.5c-0.4,0.2-1,0.4-1.1,0.7c-0.9,2.8-2.7,5.8-2.4,8.5 c0.2,2.2,2.5,4.5,4.3,6.3c1.4,1.3,2.2,2.3,1.8,4.3c-0.2,1,0.5,2.5,1.3,3.1c2.4,1.6,3.2,4.1,4.1,6.5c0.7,1.9-2,7-4,7.6 c-1.8,0.5-2.5-0.1-3.3-3.2c-2.2,0-4.6,0-6.9,0c-4.1,0-8.2,0.1-12.3-0.1c-1,0-2.6-0.5-2.8-1.2c-0.8-2.2-2.4-2.2-4.1-2.2 c-2.7,0-5.4,0-8.2,0c0,3,1.2,4.2,3.9,4.1c5.7-0.1,11.4,0,17.1,0C1035.1-114.6,1036.6-114.2,1036.5-111.8L1036.5-111.8z  M1010.6-142.5c0,3.7,2.8,6.7,6.3,6.6c3.1,0,6.5-3.3,6.6-6.3c0.1-3.7-3-6.6-6.8-6.5C1012.7-148.7,1010.6-146.5,1010.6-142.5z  M987.2-75.6c3.4,0,6.1-2.8,6.2-6.3c0.1-3.6-2.7-6.6-6.3-6.7c-3.8-0.1-6.5,2.7-6.6,6.7C980.6-78.4,983.5-75.6,987.2-75.6z" }), /* @__PURE__ */ u.createElement("path", { d: "M1001.9-161.7c-2.1-1-3.6-2-5.3-2.4c-2.7-0.6-5.5-1-8.3-1c-7.5-0.1-15-0.1-22.5,0c-3.2,0-3.5,0.3-3.6,3.5c0,2,0.1,4.1,0,6.1 c-0.1,2.6,1.1,3.5,3.5,3.3c1.6-0.1,3.2,0,4.8,0c1.9,0,2.7,0.9,2.7,2.7c0,7.6,0,15.2,0,22.9c0,2.4-1.4,3.1-3.5,3.1 c-6.7,0-13.4,0-20.1,0c-11.9,0-23.9,0-35.8,0c-4.6,0-4.7-0.1-4.7-4.5c0-9.2,0-18.4,0-27.7c0-3.8,0.2-4,4.1-4c3,0,5.9,0,8.9,0 c1.4,0,2.6-0.4,2.6-2c0-5,0.8-10-1.1-15.3c-2,0.3-4,0.5-6,1c-1.6,0.4-2.6,0.2-3.4-1.3c-0.9-1.7-1.9-3.3-3.1-4.8 c-0.6-0.8-1.6-1.5-2.5-1.7c-1.5-0.4-2.5-1.2-2.1-2.6c1.7-5.1-1.7-8.1-4.4-11.3c-3-3.6-4.3-7.6-3.9-12.3c0.2-1.9,1-2.9,3-2.9 c0.7,0,1.4,0,2,0c30.3,0,60.5,0,90.8,0c4.7,0,4.9,0.3,4.7,5.1c0,0.6,0,1.1,0.1,1.7c1,5,2,10,3,15c0.1,0.3,0.2,0.7,0.2,1 c-1.2,4.3,1.1,8.3,0.8,12.6c-0.3,4.2-0.4,8.4-0.5,12.6C1001.8-164.1,1001.9-163.2,1001.9-161.7z M944.5-172.6c3.5,0,6.5-2.8,6.4-6 c-0.1-3.2-3.4-6.7-6.5-6.8c-3.4-0.1-6.2,3-6.3,6.7C938.2-174.7,940.3-172.6,944.5-172.6z" }), /* @__PURE__ */ u.createElement("path", { d: "M1096.2-159.6c5.4,5.3,9.4-0.5,14.3-0.8c0.2,1.3,0.6,2.5,0.4,3.6c-0.6,4-0.5,8.4-2.3,11.9c-1.9,3.8-5.5,6.6-8.4,9.9 c-0.2,0.2-0.7,0.4-0.9,0.3c-3.3-1.9-8,0-10.3-4.5c-2.5,2.4-4.5,4.8-7,6.4c-2,1.3-4.6,2.1-6.9,2.1c-2.6-0.1-4.1,0.4-5,2.8 c-0.5,1.3-5,3.3-6.2,2.7c-0.7-0.3-1-1.4-1.4-2.1c-0.7-1.2-1.1-2.5-2-3.4c-2.7-2.7-2.8-2.6-2.4-6.1c-2.1-2.7-4.3-5.2-6-7.9 c-1.3-2-0.2-4.2,0.8-6.1c0.5-1,1.1-2,1.1-3.1c0.1-1.5,0.7-2.4,2.1-3.1c2.4-1.3,2.7-3.2,0.9-5.3c-1.6-2-3.6-3.7-3.9-6.6 c-0.1-0.6-2.2-1.4-3.4-1.4c-6.6-0.1-13.2-0.1-19.8-0.1c-4.3,0-4.4-0.1-4.4-4.4c0-2.6,0.5-5.4-0.1-7.8c-1.5-6.2-0.7-12.6-2-18.8 c-0.7-3.1-1.4-6.2-1.7-9.4c-0.3-3.5,0.1-3.9,3.7-4c1.3,0,2.5,0.2,3.7-0.1c1.1-0.2,2.3-0.7,3.2-1.4c1.8-1.5,2.6-1.4,3.4,0.8 c1.1,3.1,2.7,4.7,5.5,4.3c3.8-0.6,6.5,1.4,9.4,3.1c1.2,0.7,2.2,1.3,3.7,0.6c0.8-0.4,2,0,3,0.1c3.7,0.4,7.4,2.7,11.1-0.5 c-0.3,2.5-1.6,4-3.6,3.8c-5.5-0.5-9,2.1-12.3,6.7c2-0.6,3.5-1,5.6-1.6c-0.2,1.6-0.2,2.5-0.3,3.5c0.3,0,0.7,0,0.9-0.1 c2.9-1.7,5.9-3.3,8.8-5.1c2.2-1.3,2.4-1.3,5.7,0c-1.3,0.7-2.3,1.2-3.3,1.7c1.7,1.6,2.7,2.8,4,3.6c0.7,0.5,1.9,0.7,2.8,0.6 c1.5-0.1,2.9-0.5,4.3-0.9c4.2-1.2,7.5,0.3,10.5,3.3c0.9,0.9,2.1,1.3,3.2,2c0,0.3-0.1,0.5-0.1,0.8c-1.2,0.4-2.4,0.9-3.9,1.4 c1.8,1.6,4.2,2.9,5,4.7c0.8,2,0,4.6-0.1,7c4.9,2.5,6.2,9.4,2.5,13.8C1097.3-161.8,1096.8-160.6,1096.2-159.6z M1081.3-188.4 c-0.2-0.1-0.5-0.2-0.7-0.3c-0.5,0.4-1.1,0.7-1.5,1.2c-4.2,5.5-6.6,11.8-7,18.7c-0.2,2.8,0.3,5.6,1,8.3c0.6,2.1,2.3,2.5,3.6,0.9 c1.9-2.3,3.8-5,2.4-8c-2.6-5.7,0.4-10.8,1.3-16.1C1080.7-185.2,1081-186.8,1081.3-188.4z M1072.1-143.3c3.8,0,6.8-2.9,6.7-6.6 c-0.1-2.9-3.5-6.3-6.5-6.3c-3.6,0-6.4,2.7-6.5,6.4C1065.9-146,1068.5-143.3,1072.1-143.3z M1083.4-185.8c0.2,0.2,0.4,0.4,0.6,0.5 c0.3-0.4,0.5-0.9,0.8-1.3c-0.1-0.1-0.3-0.2-0.4-0.3C1084.1-186.5,1083.7-186.2,1083.4-185.8z" }), /* @__PURE__ */ u.createElement("path", { d: "M867.8-95.4c-1.5-2.9-4.1-2.2-6.5-2c-1.6,0.1-3.3,0.9-4.8-1.1c1.4-0.4,2.7-0.7,3.9-1.1c0-0.1,0-0.2,0.1-0.3 c-0.8-0.1-1.6,0-2.4-0.3c-0.8-0.3-2.1-0.8-2.1-1.3c-0.3-3.9-3.8-5.8-5.3-8.9c-1.5-3.3-3.2-6.5-4.9-9.7c-0.5-0.9-1.2-1.8-1.8-2.7l0,0 c-1.1-1.8-2.2-3.7-3.2-5.5c-0.6-1-1.3-1.9-1.6-3c-0.7-2.6-0.9-5.3-2.8-7.5c-0.7-0.7-0.2-2.6-0.1-3.9c0.2-2.1,0.8-4.3,0.5-6.3 c-0.3-2.3,0.4-3.2,2.6-3.2c3.9,0,7.7,0,11.6,0c11.9,0,23.9,0,35.8,0c4.1,0,4.3,0.2,4.3,4.2c0,8.5,0,17.1,0,25.6 c0,4.2,0.1,4.3,4.5,4.4c6,0,12.1,0,18.1,0c3.5,0,4,0.5,4,3.9c0,9.9,0,19.8,0,29.7c0,3.4-0.5,3.8-4,4c-4.6,0.2-9-0.4-13.2-2.4 c-4.9-2.3-10.1-4.2-15.1-6.1c-1-0.4-2.2-0.2-3.3-0.2c-1.7,0.1-3.4,0.3-5.1,0.4c-2.3,0.2-3.9-0.5-4.3-3.1 C872.1-94.3,870.1-95.1,867.8-95.4L867.8-95.4z M878-118.2c-0.1-3.7-2.9-6.7-6.3-6.5c-3.1,0.1-6.4,3.4-6.4,6.4 c0,3.4,3.2,6.5,6.7,6.4C875.5-111.9,878.1-114.6,878-118.2z" }), /* @__PURE__ */ u.createElement("path", { d: "M1092.1-112.5c3.7,0,7.3,0,11,0c7.2,0,14.3,0,21.5,0c3.6,0,7.7,5.7,5.8,8.6c-1.4,2.2-4,4.2-6.5,5c-4.3,1.4-4.4,1-6.6,4.9 c-3-0.3-5,1.1-6.5,4c-0.9,1.8-3,3.1-4.9,4.1c-5.3,2.8-7.8,10.9-5.1,17.4c2,4.9,4,9.9,5.6,14.9c1.1,3.5,0.9,7.3-1,10.6 c-0.5,0.8-1.7,1.6-2.6,1.6c-1.2,0.1-2.5-0.2-3.2-1.9c-0.8-1.9-2.5-3.4-3.7-5.1c-1.6-2.6-3.3-5.1-4.5-7.9c-0.6-1.2-0.5-2.9-0.1-4.3 c0.5-2,0.2-3.5-1.4-4.9c-0.8-0.6-1.3-1.6-2-2.4c-2.2-2.9-2.2-2.9-5.4-1.1c-2.5,1.4-3.7,1.3-5.4-1.1c-2.2-2.9-5.2-2.3-8.1-2.2 c-3.7,0.1-7.5,0.2-11.2,0.4c-1.6,0.1-2.8-0.4-3.1-1.9c-0.6-2.5-2.3-2.7-4.4-2.7c-6.3,0-6.4-0.5-3.8-6.3c0.6-1.4,0.8-3.1,0.6-4.6 c-0.5-3.8-0.2-7.2,2.1-10.7c2.5-3.8,3.9-8.4,6.1-12.5c1.4-2.7,2.2-6.1,5.9-6.9c0.1,0,0.2-0.1,0.3-0.2c2.5-5,7.8-3.6,11.8-5.2 c0.6-0.3,1.4-0.3,1.8-0.7c1.9-1.8,3.8-3.6,5.7-5.4c1.1-1.1,2.4-0.9,3.3,0.2c1.5,1.9,3.4,2.6,5.7,2c1.9-0.4,2.6,1,3.3,2.3 c1,2.1,2,4.3,3.1,6.7c-1.3,1.2-2.8,2.6-4.3,4C1091.9-113.1,1092-112.8,1092.1-112.5z M1093.3-87.9c3.8,0.1,6.6-2.5,6.8-6.1 c0.1-3.1-3.3-6.7-6.4-6.8c-3.1,0-6.5,3.5-6.5,6.7C1087.1-90.3,1089.4-88,1093.3-87.9z" }), /* @__PURE__ */ u.createElement("path", { d: "M890-189.7c2.1-0.7,3.2,0.2,3.9,2c0.4,0.9,1,1.8,1.5,2.7c2.6,4.5,4.6,5,9.2,2.2c0.3-0.2,0.6-0.2,1.6-0.6 c0.7,1.6,1.8,3.1,1.9,4.8c0.3,4.7,0.1,9.3,0.1,14c0,2.3-1.2,2.9-3.2,2.9c-5.9,0-11.8,0-17.7,0c-14.9,0-29.8,0-44.7,0 c-5.4,0-7.4-2.4-6.3-7.9c0.3-1.7,1.2-3.2,1.4-4.9c1.6-9.2,2.3-18.5-0.3-27.7c-0.4-1.4-1.1-2.7-1.5-4.1c-0.4-1.5-0.5-3.1-0.8-4.8 c3.5,0.4,6.2,0.8,9.2,1.2c-0.3-1.6-0.9-2.9-0.6-3.8c0.7-1.9,1.5-3.4,4.3-3.3c9.7,0.3,19.3,0.1,29,0.1c4.4,0,4.5,0.1,4.5,4.4 c0,4.4,1.4,8.1,4.8,11.1c1.3,1.2,2.5,2.6,3.6,4c0.4,0.5,0.5,1.4,0.5,2.2C890.3-193.6,890.1-191.8,890-189.7z M859.1-184.3 c3.5,0.1,6.4-2.8,6.5-6.5c0.1-3.2-3-6.3-6.4-6.3c-3.5,0-6.3,2.7-6.4,6.2C852.7-187.3,855.4-184.4,859.1-184.3z" }), /* @__PURE__ */ u.createElement("path", { d: "M1148.2-153.8c-2.2,2.4-3.1,5.3,0,7.9c-4.1,4.1-3.8,4-2.1,9.9c0.5,1.8-0.4,4.2-1.1,6.1c-1.1,2.9-2.6,5.6-4.3,9.2 c-12.6,0-26.3,0-39.9,0c-0.1-0.3-0.1-0.6-0.2-0.9c2.2-1.8,4.5-3.7,6.8-5.5c0-0.2,0.1-0.4,0.1-0.6c-0.6-1.8-2.2-4.2-1.6-5.3 c1.7-3,4.1-5.7,6.6-8c1.3-1.2,2.6-2.2,2.8-4c0.4-3.6,0.9-7.2,1.1-10.8c0.3-4.1,2.5-5.7,6.4-4.2c0.9,0.3,2,0.3,3,0.3 c4.2,0,8.4,0.3,12.6-0.1C1143.1-160.1,1146.4-158.7,1148.2-153.8z M1121.3-142.6c-0.1,3.7,2.6,6.6,6.2,6.8c3.1,0.1,6.7-3.3,6.7-6.4 c0-3.5-2.7-6.3-6.2-6.4C1123.9-148.8,1121.3-146.5,1121.3-142.6z" }), /* @__PURE__ */ u.createElement("path", { d: "M697.2,39.4c1.3-2,2.2-0.8,2.4,0.5c0.3,1.6,0.1,3.3,0.1,5.3c-3.5,0.1-6.7-1.1-10,0.1c-3.2,1.1-6.7,1-10.5,1.5 c0.5-3.8,1.2-7.6,1.6-11.5c0.3-2.6,0.3-5.2,0.3-7.8c0-3.3-0.2-6.6-0.2-9.9c0-2,1.2-2.7,3.1-2.8c2.2-0.2,4.5-0.5,6.7-1 c3.9-0.8,5.4-3.7,6.4-7.1c1.3-4.1,2.9-8.1,5.5-10.9c2.2,0.1,4-0.2,5.4,0.4c1.4,0.6,2.4,2.1,3.4,3.4c0.4,0.5,0.3,1.6,0.2,2.3 c-0.5,4.6,0.7,8.6,3.1,12.5c1.4,2.3,1,4-1.3,5.2c-4.2,2.2-7.4,6.6-12.8,6.6c-0.4,0-0.8,0.4-1.2,0.6C696.3,29.1,695,36.2,697.2,39.4 L697.2,39.4z M693.2,27.7c3.8,0,6.7-2.7,6.6-6.3c-0.1-3.6-3-6.5-6.5-6.5c-3.1-0.1-6.8,3.5-6.8,6.5C686.5,24.9,689.5,27.7,693.2,27.7 z M698.2,42.9c-0.1-0.1-0.3-0.1-0.4-0.1c0,0.1,0,0.2,0.1,0.2C698,43,698.1,43,698.2,42.9z" }), /* @__PURE__ */ u.createElement("path", { d: "M817.2-217c-1.4,0.1-2.8,0.3-4.6,0.5c1.2-3.7,2.2-7,3.3-10.4c0.4,0.3,0.2,0.1,0,0c-1.4-0.4-2.9-0.7-4.3-1 c0.8-1.1,1.6-2.3,2.5-3.4c0.5-0.6,1-1.2,1.6-2c-2.3-2.2-1.3-3.9,0.8-5.6c1.1-0.9,1.5-2.6,2.5-3.6c2.6-2.4,5-5.3,9.2-5 c1.8,0.1,3.8-0.8,5.6-1.2c2.9-0.7,3.7-0.2,3.9,2.8c0.4,4.3,0.6,8.6,1.2,12.9c0.4,2.9,2.1,3.8,4.9,2.9c0.2-0.1,0.4-0.2,0.6-0.3 c1.4-0.2,8,4.8,8,6.2c0,0.8-0.7,2-1.4,2.3c-0.8,0.4-2.3,0.5-3,0.1c-1.3-0.8-2.4-2.1-3.6-3.1c-2-1.9-4.3-3.1-7.1-2 c-3.5,1.4-7.2,2.4-8.1,7.2c-0.4,2.4-2.8,4.4-4.4,6.6c-0.7,1-1.6,1.9-2.5,2.8c-0.4,0.4-0.7,1-1.1,1.1c-2.8,0.9-4.5,3.3-6.6,5.1 c-3.5,3.2-7.4,6-11.1,8.9c-0.4,0.3-0.9,0.4-1.7,0.2c1.4-3.1,4.9-3.7,7.1-5.9c2.4-2.3,4.6-5,6.8-7.6c2.1-2.4,4.1-5,6.2-7.5 C820-216.3,818.6-216.7,817.2-217L817.2-217z" }), /* @__PURE__ */ u.createElement("path", { d: "M1160.2-159.9c3-1,5.6-1.8,8.2-2.7c0.9,1.3,0.6,2.4-0.8,3c-1.8,0.9-3.6,2-5.6,2.4c-2.6,0.6-3.9,1.7-4.3,4.4 c-0.6,3.4-1.9,5-5,7.6c-4.9-3.8-4.9-4.5-0.5-9.4c-1.4-2.2-1.5-4.4-0.5-7c1-2.7-0.8-4.9-3.9-4.9c-5.2-0.1-10.5,0-15.7-0.1 c-0.9,0-1.8,0.1-2.7-0.1c-0.8-0.2-2.1-0.5-2.2-1.1c-0.2-0.8,0-2.2,0.6-2.7c1.7-1.6,3.4-2.9,2.9-5.7c-0.1-0.5,1.5-1.7,2.5-1.8 c1.6-0.3,3.4-0.2,5.1,0.1c2.4,0.5,4.5,0.2,6.2-1.6c-0.4-4.8,4.4-10.4,9.3-11c0.2,0,0.5,0,0.7,0c7.2-0.4,6.6-0.4,7.4,6.7 C1162.6-175.9,1160.7-168.4,1160.2-159.9z M1159.5-176.2c0-3.6-2.5-6.4-6-6.5c-3.6-0.1-6.8,2.9-6.9,6.5c-0.1,3.3,2.8,6.2,6.3,6.3 C1156.6-169.8,1159.4-172.6,1159.5-176.2z" }), /* @__PURE__ */ u.createElement("path", { d: "M680.1,64.9c4.5-1.6,8-0.9,11.5,0c0.4,0.1,1.1,0.8,1,1.1c-0.1,0.6-0.5,1.3-1,1.6c-2.8,1.7-6,2.2-9.1,1.5 C681.5,68.8,681,66.6,680.1,64.9z" }), /* @__PURE__ */ u.createElement("path", { d: "M839.7-93.2c-2.3-3.7-2.9-6.7-0.6-10.1c0.6,0.3,1.2,0.5,1.5,0.8c1.4,1.5,4,3.4,3.8,4.6C844.1-96.1,841.5-94.8,839.7-93.2z" }), /* @__PURE__ */ u.createElement("path", { d: "M834.3-105c-1.1-0.9-2.3-1.7-3.6-2.8c2.6-1.4,6.7-0.5,7.5,1.4c0.2,0.5-0.2,1.5-0.7,1.9C836.4-103.5,835.2-103.8,834.3-105 L834.3-105z" }), /* @__PURE__ */ u.createElement("path", { d: "M830.3-109.8c-1.1,0.6-1.9,1.3-2.2,1.1c-0.7-0.4-1.4-1.2-1.7-1.9c-0.1-0.3,0.8-1,1.3-1.6 C828.4-111.5,829.2-110.8,830.3-109.8z" }), /* @__PURE__ */ u.createElement("path", { d: "M821.8-114.3c-1,0.7-1.6,1.4-2.2,1.4c-0.5-0.1-0.9-0.9-1.4-1.4c0.5-0.5,1-1.2,1.6-1.3C820.3-115.7,820.8-114.9,821.8-114.3z " }), /* @__PURE__ */ u.createElement("path", { d: "M808.8-223.3c1-0.1,1.9-0.2,2.9-0.3c0,0.4,0.1,0.8,0.1,1.2c-1,0.1-1.9,0.2-2.9,0.3C808.9-222.6,808.8-223,808.8-223.3z" }), /* @__PURE__ */ u.createElement("path", { d: "M817.2-113.4c-0.7,0.7-1.5,1.4-2.2,2c-0.2-0.2-0.5-0.4-0.7-0.7c0.7-0.8,1.3-1.5,2-2.3C816.6-114,816.9-113.7,817.2-113.4z" }), /* @__PURE__ */ u.createElement("path", { d: "M867.8-95.4c0.2,0.6,0.3,1.2,0.5,1.8c-0.2,0.1-0.3,0.3-0.5,0.4c-0.5-0.4-1-0.8-1.5-1.2C866.8-94.8,867.3-95.1,867.8-95.4 L867.8-95.4z" }), /* @__PURE__ */ u.createElement("path", { d: "M867.4-90.1c-0.4-0.5-0.8-1-1.3-1.5c0.2-0.2,0.4-0.4,0.6-0.6c0.5,0.4,1,0.9,1.4,1.3C867.9-90.6,867.7-90.4,867.4-90.1z" }), /* @__PURE__ */ u.createElement("path", { d: "M808.7-215.6c-0.4,0.1-0.7,0.3-0.9,0.3c-0.1,0-0.4-0.4-0.4-0.4c0.1-0.2,0.4-0.5,0.5-0.5C808.1-216.3,808.3-216,808.7-215.6z " }), /* @__PURE__ */ u.createElement("path", { d: "M810.7-210.2c0.2,0.1,0.3,0.2,0.5,0.4c-0.2,0.2-0.3,0.4-0.5,0.5c-0.1-0.2-0.3-0.3-0.3-0.5 C810.3-209.9,810.5-210.1,810.7-210.2z" }), /* @__PURE__ */ u.createElement("path", { d: "M678.1,67.1c0.2,0.1,0.4,0.2,0.5,0.3c-0.1,0.1-0.2,0.3-0.4,0.4c0,0-0.3-0.1-0.3-0.1C678,67.5,678.1,67.3,678.1,67.1z" }), /* @__PURE__ */ u.createElement("path", { d: "M861.6-93.6c0.1,0,0.2,0.1,0.3,0.1c0,0.1-0.1,0.2-0.1,0.3c-0.1,0-0.2-0.1-0.3-0.1C861.4-93.4,861.5-93.5,861.6-93.6z" }), /* @__PURE__ */ u.createElement("path", { d: "M864.6-94.7c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.1-0.2-0.1-0.3c0.1,0,0.2-0.1,0.3-0.1C864.5-94.9,864.5-94.8,864.6-94.7z" }), /* @__PURE__ */ u.createElement("path", { d: "M843.9-122.8C843.8-122.6,843.7-122.4,843.9-122.8C843.7-122.4,843.8-122.6,843.9-122.8L843.9-122.8z" }), /* @__PURE__ */ u.createElement("path", { d: "M1016.1-140.4c-0.2-1.6-0.5-3.2-0.8-5.2c1.2,0,2.3,0,4,0c-1,2-1.8,3.7-2.5,5.3C1016.5-140.3,1016.3-140.4,1016.1-140.4z" }), /* @__PURE__ */ u.createElement("path", { d: "M990.2-82.3c-1.3,1.2-2.1,2.6-3.1,2.7c-1.7,0.2-2.6-1.2-2.4-2.9c0.2-1.6,0.8-3.2,2.6-2.9C988.3-85.2,989-83.7,990.2-82.3z" }), /* @__PURE__ */ u.createElement("path", { d: "M946.5-178.3c0,1.6-0.7,2.7-2.3,2.6c-1.8-0.1-2-1.6-1.9-3c0-1.4,0.1-2.9,1.9-3C946.5-181.8,946.3-179.9,946.5-178.3z" }), /* @__PURE__ */ u.createElement("path", { d: "M1069.2-149.9c1.5-1.5,2.4-2.4,3.3-3.3c0.7,1.3,1.6,2.7,1.8,4.1c0.1,0.6-1.6,2.1-2.1,1.9 C1071.3-147.5,1070.5-148.6,1069.2-149.9z" }), /* @__PURE__ */ u.createElement("path", { d: "M875-118.5c-1.5,1.5-2.3,3.1-3.3,3.2c-2.3,0.2-1.8-2.1-2.1-3.5c-0.3-1.4,0.4-2.7,1.9-2.5C872.6-121,873.4-119.7,875-118.5z" }), /* @__PURE__ */ u.createElement("path", { d: "M1091.3-93.9c0.9-1.1,1.9-2.2,3.1-3.7c1,2.2,1.9,3.9,0.5,5.4c-0.4,0.5-2.2-0.4-3.4-0.6C1091.5-93.1,1091.4-93.5,1091.3-93.9 z" }), /* @__PURE__ */ u.createElement("path", { d: "M857.9-191c1.5-1.3,2.3-2.5,3.4-2.8c0.4-0.1,1.9,1.4,2.1,2.3c0.3,1.6-0.4,3.4-2.3,3.3C860.2-188.2,859.4-189.7,857.9-191z  M861.6-191.1c-0.3-0.3-0.5-0.4-0.7-0.6c-0.1,0.2-0.4,0.3-0.3,0.5c0,0.3,0.2,0.5,0.4,0.8C861.1-190.6,861.3-190.8,861.6-191.1z" }), /* @__PURE__ */ u.createElement("path", { d: "M857.1-188.2c-0.5-0.9-0.9-1.3-0.9-1.6c0-1.2,0-2.5,0.1-3.8c0,0,1.1-0.1,1.1,0c0.3,1.3,0.5,2.5,0.5,3.8 C858.1-189.5,857.7-189.1,857.1-188.2z" }), /* @__PURE__ */ u.createElement("path", { d: "M1126.7-142.6c-0.2-0.9-0.4-1.8-0.4-2.7c0-0.2,1.5-0.7,1.7-0.4c0.6,0.6,1.1,1.5,1.3,2.4c0.2,0.7,0.2,1.9-0.2,2.2 c-0.7,0.5-2.1,1-2.8,0.7C1125.2-141,1125.4-142,1126.7-142.6c0.2,0.2,0.5,0.3,0.8,0.5C1127.2-142.3,1127-142.4,1126.7-142.6z" }), /* @__PURE__ */ u.createElement("path", { d: "M693,24c-0.4-1.3-1-2.6-1.2-4c-0.1-0.4,0.7-1.2,1.1-1.4c0.4-0.1,1.3,0.6,1.4,0.9c0.1,1.4-0.1,2.9-0.2,4.3 C693.7,23.9,693.3,23.9,693,24z" }), /* @__PURE__ */ u.createElement("path", { d: "M669.4,46.3c-1.3-0.4-3.2-0.7-3.2-1.1c-0.1-1.7-0.1-3.6,0.6-5c0.6-1.1,2.6-0.1,2.8,1.5C669.7,42.9,669.5,44.3,669.4,46.3z" }), /* @__PURE__ */ u.createElement("g", null, /* @__PURE__ */ u.createElement("g", null, /* @__PURE__ */ u.createElement("path", { d: "M61.7,77.2c0,3.3,0.1,3.4,3.6,3.4c9.3,0,18.6,0,27.9,0c5.2,0,10.5,0,15.7,0c1.7,0,2.8-0.5,2.8-2.3c0-5.8,0-11.5,0-17.3 c0-1.4-0.6-2.1-2.1-2.1c-1.2,0-2.5-0.1-3.7,0c-1.9,0.1-2.8-0.6-2.7-2.5c0.1-1.5,0-3.1,0-4.6c0.1-2.4,0.3-2.6,2.8-2.6 c5.8,0,11.7-0.1,17.5,0c2.2,0,4.3,0.3,6.5,0.8c1.3,0.3,2.5,1.1,4.2,1.8c0-1.2,0-1.9,0-2.5c0.1-3.2,0.2-6.3,0.4-9.5 c0.2-3.2-1.5-6.3-0.6-9.5c0.1-0.2-0.1-0.5-0.1-0.8c-0.8-3.8-1.6-7.5-2.3-11.3c-0.1-0.4-0.1-0.9-0.1-1.3c0-1,0.1-1.8,0-2.4 l-78.2,0.1c0,0.1-0.1,0.3-0.1,0.5c0.1,0.5,0.1,1.1,0.1,2c0,0.8,0.1,1.6,0.2,2.4c0.5,1.8,1.4,3.5,2.7,5.1c0.4,0.5,0.8,0.9,1.2,1.4 c0.8,0.8,1.6,1.6,2.3,2.5c0.3,0.4,0.4,1.1,0.4,1.6c0,1.3-0.2,2.7-0.3,4.2c0,0,0,0.1,0.1,0.1c1.6-0.5,2.4,0.2,2.9,1.6 c0,0,0,0,0,0.1c0.1,0.1,0.2,0.2,0.3,0.4c0.9,1.1,1.7,2.4,2.4,3.6c0.1,0.1,0.2,0.2,0.2,0.4c1.3,1,2.8,0.7,5.2-0.7 c0.2-0.1,0.5-0.2,1.2-0.4c0.1,0.3,0.3,0.7,0.5,1c0.1,0,0.1,0,0.2,0c0.1,0.4,0.3,0.8,0.4,1.2c0.2,0.5,0.3,0.9,0.4,1.4 c0,0.2,0,0.3,0,0.5c0.4,2.9,0.1,5.7,0.1,8.4c0,0.1,0,0.1,0,0.2c0,0.5,0,0.9,0,1.4c0,1.7-0.9,2.2-2.5,2.2c-3.2,0-6.4,0-9.6,0 c0,0.2,0,0.5,0,0.8C61.6,63.3,61.7,70.3,61.7,77.2z" }), /* @__PURE__ */ u.createElement("path", { d: "M180.3,79.4c0.9,0.5,4.3-1,4.7-2.1c0.7-1.8,1.9-2.2,3.9-2.1c1.8,0,3.8-0.6,5.3-1.6c1.9-1.2,3.4-3.1,5.4-4.9 c1.8,3.4,5.4,2,8,3.4c0.2,0.1,0.6,0,0.7-0.2c2.2-2.4,5-4.6,6.5-7.5c1.3-2.6,1.3-6,1.7-9c0-0.2,0-0.3,0-0.5l-3.2,1.6l-3.3,1.1 l-3.2,0.2l-1.9-1.4l1-1.7l0.5-0.5l0.6-1.7l1.2-0.7l1.5-2.6l-1.6-2.1l-0.3-3.3l-2.1-0.6l-2.7,1.9l1-2.2l1.6-2.2l-0.6-2.1l-0.5-2.4 l-2.5-1l-2.2-1.9l-2.7,1.1l0.2,2.1l-1.6,1.9l-1.3-0.6l-2.4,2.7v3.2l0.3,3.2l1.4,2.2l-0.2,4.8l-3,2.9l-2.2,0.2l-1.1-3.3l-1.1-2.4 l0.5-3.2l-0.5-3.2l1.1-2.1l0.6-2.1l1.1-3.5l-2.5,2.9l1.4-4.9l2.2-1.9l2.7-0.2l2.1-1h3.3h2.7l1.7-0.5l2.1,0.3l-1.3-1l-1.6-1 l-1.8-1.3l-1.8,0.6l-1.7-1.3l-4.1,0.2l-2.2,1.4l-1.7-1.1l-2.1-1.3l-3-0.2l3-4.3l-3.5,1.6l-2.9,2.2l-2.9,1.6l-2.5,0.3l-0.3-1.6 l-5.2,1.1l4.4-3.8l3.1-2.3l3.8-3l-1.6-0.2l-5.2,0.2l-2.4-0.5l-2.1-0.4l-2.1-1.5l-2.4,0.2l-4.5-1.1l-1.2-1.4l-0.6-2.2l-1.1-1 l0.1,1.2l-1.1,1.7l-8.1,0c0,0.3,0,0.6,0.1,1c0.2,2.4,0.8,4.7,1.3,7.1c1,4.7,0.4,9.5,1.5,14.2c0.5,1.9,0.1,3.9,0.1,5.9 c0,3.2,0.1,3.3,3.4,3.3c5.1,0,10.2,0,15.3,0.1c0.9,0,2.5,0.6,2.6,1.1c0.2,2.2,1.8,3.5,3,5c0.7,0.9,1,1.6,0.8,2.3 c0.5,1.4-0.1,2.5-2,3.7c-0.3,0.2-0.8,0.3-0.9,0.6c-0.7,2.1-2,4.4-1.9,6.5c0,0.1,0,0.2,0.1,0.3c1.1,1.7,2.4,3.2,3.7,4.8 c0.2,0.2,0.4,0.5,0.6,0.7c0.1,0.1,0.2,0.3,0.3,0.4c0,0.1,0,0.1,0,0.2c0.1,0.4,0.1,0.9,0,1.4c-0.1,0.4,0,0.8,0.2,1.3 c0.3,0.4,0.8,0.9,1.6,1.7c0.1,0.1,0.2,0.2,0.3,0.3c0.9,1,1.4,2.2,1.9,3.4C180,79.2,180.2,79.4,180.3,79.4z" }), /* @__PURE__ */ u.createElement("path", { d: "M36.7,51.3c-1.9,0-3.7,0-5.6,0c-0.7,0-1.4-0.1-1.9-0.2l0,0.2C31.7,51.3,34.2,51.3,36.7,51.3z" }), /* @__PURE__ */ u.createElement("path", { d: "M71.6,92.4c0-2.7-0.4-5-3.1-5c-4.6,0-9.3,0-13.9,0c-3.3,0-3.4-1.1-3.4-4.5c0-6.9,0-10.9,0-17.7c0-3.2-0.2-3.4-3.3-3.4 c-2.5,0-4.9,0-7.4,0c-7.2,0-14.4,0-21.6,0c-2.5,0-5,0-7.5,0l0.4,2.1l0.5,2.7l-0.6,3.7l0.5,2.5l1.1,2.5l1,3.2l0.8,2.1l3.3,2.7 l1.6-0.2l2.2,0.3l-2.4,0.6l0.6,1.1l-2.1,0.3l1.9,2.1l1.9,2.1l-0.6,1.7L24,95l2.7,2.2L27,100l2.2,1.1l3,1l2.4,2.1l2.1,1.3l2.2,1.7 l1.3,1l1.4,3.2l8.1-0.2l15.9,5.6h6c0-0.1,0-0.2,0-0.3C71.7,108.4,71.7,100.4,71.6,92.4z" }), /* @__PURE__ */ u.createElement("path", { d: "M199,90.2c-0.1-0.2,2.6-1.2,2.5-1.5c1.3-1.2,2.5-2.3,3.6-3.3c-0.9-2-0.4-0.8-1.2-2.5c-0.5-1.1-1.1-2.3-2.7-1.9 c-2,0.4-3.5-0.1-4.8-1.7c-0.8-0.9-1.8-1.1-2.7-0.2c-1.6,1.5-3.2,3-4.8,4.4c-0.4,0.3-1,0.4-1.5,0.6c-3.3,1.4-7.8,0.2-9.9,4.3 c0,0.1-0.1,0.1-0.2,0.1c-3.1,0.7-3.7,3.5-4.9,5.7c-1.8,3.3-3,7.1-5.1,10.2c-1.9,2.8-2.2,5.6-1.7,8.8c0.2,1.2,0,2.6-0.5,3.8 c-0.3,0.6-0.5,1.1-0.7,1.5c2.1,0.1,4,0.2,5.7,0.3c0.3,0.5,1.6,2.1,3.2,4.1l0.4,0.4l4.6-0.6l0.6,0.8h3.2l1.7-0.5l2.5-0.2l2.4,1 l1.4-0.2l1.4,2.1l2.9,0.2l1.6-1.3h1.6l3.2,2.7l1.7,1.9l0.5,2.5l-0.3,3.2l1.1,3.3l3,3.8l1.7,3.7l0.6,1.4l3.2-0.6l0.8-3.5v-5.2 l-1.6-4.3l-0.5-1.1l-0.3-3.2l-2.7-3.2l-0.5-3.8l0.2-3.2l1.3-3.5l2.4-1.9l-0.2-1.4l2.9-0.5l4.1-4.6l1.9-1.6l2.1,0.3l1.9-3.7 l2.7-1.4c0,0,2.1,0.3,2.2-0.5c0.2-0.8,2.2-4.6,2.2-4.6l-2.2-1.3l1.3-1.1l0.3-0.8l-0.8-2c-7.1-0.1-17-0.1-21.5-0.1 C205.1,90.2,202,90.2,199,90.2z" }), /* @__PURE__ */ u.createElement("polygon", { points: "202.6,31.5 203.4,29.3 200.7,29.6 199,29.4 197.7,28.5 198.7,30.1  " }), /* @__PURE__ */ u.createElement("path", { d: "M43.3,51.3c4.5,0,9.1,0,13.6,0c1.6,0,2.5-0.5,2.5-2.2c0-3.5,0.1-7.1-0.1-10.6c-0.1-1.2-0.9-2.4-1.4-3.6 c-0.7,0.2-1,0.3-1.2,0.4c-3.5,2.1-5,1.7-7.1-1.7c-0.4-0.7-0.9-1.3-1.1-2c-0.5-1.4-1.4-2.1-3-1.5c0.1-1.6,0.3-2.9,0.3-4.3 c0-0.6-0.1-1.2-0.4-1.6c-0.8-1.1-1.8-2.1-2.8-3c-2.6-2.3-3.7-5.1-3.7-8.4c0-1.2,0-2-0.2-2.5l-23.4,0l-0.6,0.9l0.3,2.1l1.6,3.3 l-0.8,3.5L14,17.9l-1.1-2.5l-2.5-0.5l-4-0.5H5.3l0.6,2.2l2.2,3.2V23l0.6,3.5l2.9,0.3l1.1,1.6l-3.5-0.5l-1.1,0.8L8.6,32L8,35.7 l0.2,4.3L7,42.8l-1.3,4.1l1,2.9L7,51.2c0.6,0.1,1.2,0.2,1.9,0.2C20.4,51.3,31.8,51.3,43.3,51.3z" }), /* @__PURE__ */ u.createElement("path", { d: "M260.5,59.5l-2.5,0.2l-2.4,0.6l-1.1,0.6l-0.2-1.1l0.8-1l0.4-0.1l-0.4-21.1l-5.2,0l-3.3,3.1l-2.1,1.3l-1,2.7l-0.5,1.4 l-2.4,1.6h-2.4l-1.7-0.8l-2.2,0.3l-2.9,1l0.2,1.4l-0.2,2.5l-1.4,1.3l-0.8,0.2c2.8,0.1,5.5,0.2,8.3-0.1c3.5-0.3,6,0.8,7.3,4.7 c-1.6,1.9-2.3,4.1,0,6.2c-1.2,2.3-1.8,3.7-1.9,5.3l0.6-0.5l0.6,4l0.5,1.9l1.1,1.7l-0.3,2.9l1.7-3.5l1.1-2.7l0.2-1.6l-1.6-1.9 l-0.2-0.8l0.5-0.5l2.5,1.6l0.8-1.9l1.7-1.7l0.3-1.9l-0.3-2.2l0.2-1.1l0.3-1.6l1.3,1.7h0.6l1.9-0.3l1.9-0.2l2.5-0.8L260.5,59.5z" }), /* @__PURE__ */ u.createElement("path", { d: "M239.1,62.7c-1.3-3.8-3.8-5-7.3-4.7c-2.7,0.2-5.5,0.1-8.3,0.1l-2,0.5l-1.2,0.6c0,0.2,0,0.3,0,0.5c-0.4,3-0.4,6.4-1.7,9 c-1.5,2.8-4.3,5-6.5,7.5c-0.1,0.2-0.6,0.3-0.7,0.2c-0.6-0.3-1.2-0.5-1.9-0.6c-0.4,0.4-0.7,0.9-1,1.4c0.6,0.1,1.2,0,1.8-0.1 c1.6-0.4,2.2,0.8,2.7,1.9c0.8,1.7,0.3,0.5,1.2,2.5c-1.1,1-2.4,2.2-3.6,3.3c0.1,0.2-2.6,1.2-2.5,1.5c3.1,0,6.1,0,9.2,0 c4.5,0,14.4,0.1,21.5,0.1l-0.5-1.2l-1.3-1.4l1.6-1.7l-1.3-1.6l-0.3-3.2l-0.2-2.7l0.4-0.3c0.1-1.6,0.7-3.1,1.9-5.3 C236.8,66.8,237.5,64.6,239.1,62.7z" }), /* @__PURE__ */ u.createElement("path", { d: "M36.3,98.1c-0.1,0-0.2,0.1-0.2,0.1c0,0-0.1-0.1-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1C36.3,97.9,36.3,98,36.3,98.1z" }), /* @__PURE__ */ u.createElement("polygon", { points: "167.1,81.7 167.1,81.7 167.1,81.7  " }), /* @__PURE__ */ u.createElement("path", { d: "M121.4,79.8c0,3.3,0.2,4.6-0.7,5.2c0.4,0,0.8,0,1.3,0c0.4,0,0.7,0,1.1,0c2.7,0,4.1,0.1,4.8-0.2l21.6,0c0,0,0,0,0,0.1 c0.9,0.1,1.7,0.4,2.1,1.6c0.2,0.5,1.4,0.9,2.2,0.9c3.2,0.1,6.3,0,9.5,0c1.8,0,3.6,0,5.3,0c0.6,2.4,1.2,2.8,2.6,2.4 c1.5-0.5,3.7-4.3,3.1-5.7c-0.7-1.8-1.3-3.7-3.2-4.9c-0.6-0.4-1.1-1.6-1-2.3c0.3-1.5-0.3-2.2-1.4-3.2c-1.4-1.3-3.2-3.1-3.3-4.7 c-0.2-2.1,1.1-4.3,1.9-6.5c0.1-0.2,0.6-0.4,0.9-0.6c2.7-1.7,2.8-3.1,0.8-5.7c-0.9-1.2-2-2.5-2.3-3.8c-0.4-1.6-1.2-2.2-2.7-2.2 c-6,0-12.1,0-18.1,0c-1.3,0-2.2,0.3-2.3,1.8c0,0.4-0.1,0.8-0.3,1.1c0,0.4,0,0.3,0,1.4c-1.6-0.7-2.8-0.6-4.2-0.9 c-0.4-0.1-0.8-0.2-1.2-0.2c-0.1,0-0.2,0-0.4,0c-7.3-0.2-14.6-0.4-21.9-0.5c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0 c-0.9,0.1-1.4,0.8-1.4,1.9c0,1.4,0,0.8,0,2.2c0,4.1-0.2,5.3,1.5,5.7c0.2,0,0.3,0,0.5,0c1.2-0.1,2.5,0,3.7,0c0.9,0,1.5,0.3,1.8,0.8 c0.8,0.8,0.9,2.3,0.9,3.9C121.4,71.6,121.4,75.7,121.4,79.8z" }), /* @__PURE__ */ u.createElement("path", { d: "M156.3,120.6c0.2-0.8,0.3-1.3,0.5-1.6c1.5-2.1,1.2-5.3,0.7-7.9c-0.4-2.2-0.1-4.5,1.5-6.6c1.5-2,2.4-4.5,3.6-6.8 c0.7-1.3,0.2-2-1.1-2.3c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.1-1.8-1.1-2.1-2.6-2.1c-4.4,0-8.8-0.1-13.2,0c-0.4,0-0.8,0-1.2-0.1 c-1.2-0.3-1.8-1.1-1.8-2.6c-0.3,0-0.7,0-1,0c-2.1,0-4.2,0-6.3,0c0,0.1,0,0.2,0,0.3l-21.6,0c0.1,0,0.1-0.1,0.2-0.1 c-8.9,0-17.7,0-26.6,0c-2.8,0-3.3,0.3-3.3,2.8c0,7.7,0,15.5,0,23.2c0,0.3,0.1,1.6,0.2,3h6.6l-0.3-1.3h6.3l2.5,1.4l1.4,1.4l3.7,2.5 l1.3,4.6l3.7,1.9l1.6,0.7c0.4-0.2,0.8-0.4,1.2-0.4l2.4-3l4,0.5l1.6,1.3l4.3,7l1.4,1.7l1.1,4l8.4,3.3l-0.3-2.9l-0.3-4l2.7-3.2 l-0.5-1l2.7-2.2l1.4,0.8l2.4-2.7l1.4-1.9h2.1l4.6-1l3.3,1.4h2.5l1-1.1l1.1,0.8l0.2,1.4l3.3,1.1l3.2-0.5l2.7,0.2l-2.2-1.7l-0.2-1 l1.4-0.8c-0.2-0.3-0.5-0.5-0.7-0.8h-1.6l-2.5,0.3l1.6-1.4l0.8-1c0,0-2.5-3.2-2.8-3.6C161,120.8,158.8,120.7,156.3,120.6z" }), /* @__PURE__ */ u.createElement("path", { d: "M263.1,51.1l1.7-0.5l1.4-1l3.3,0.8c0,0,1.4,0.8,1.6,0.3c0.2-0.5,0.6-1.7,0.6-1.7l-1.1-1.3l-0.5-1.9l0.3-3.2l0.3-2.5 l1.4-1.9l0.3-0.8l1,0.5l3-3.3h1.1l2.5-0.3l0.8-1.6h2.2l1.9-1.6l-0.7-0.9l-0.9-2.1l-1-0.7l0.4-5.3l-0.5-4.8l-2.9-0.9l-2.5,0.9 l-1.3-0.2l-5.5,12.8l-2.5,0.2l-1.1,1l-8.2,0l0.4,21.1l1.6-0.4L263.1,51.1z" }))));
export {
  $t as S,
  x as T,
  v as a,
  k2 as b,
  d1 as d,
  Dt as i,
  g2 as r
};
