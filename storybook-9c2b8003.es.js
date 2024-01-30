import { g as x, j as rt, i as it, k as Mt } from "./storybook-7df1b381.es.js";
var ot = 180 / Math.PI, U = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ht(t, n, e, r, i, o) {
  var s, u, a;
  return (s = Math.sqrt(t * t + n * n)) && (t /= s, n /= s), (a = t * e + n * r) && (e -= t * a, r -= n * a), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, a /= u), t * r < n * e && (t = -t, n = -n, a = -a, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * ot,
    skewX: Math.atan(a) * ot,
    scaleX: s,
    scaleY: u
  };
}
var M;
function $t(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? U : ht(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Lt(t) {
  return t == null || (M || (M = document.createElementNS("http://www.w3.org/2000/svg", "g")), M.setAttribute("transform", t), !(t = M.transform.baseVal.consolidate())) ? U : (t = t.matrix, ht(t.a, t.b, t.c, t.d, t.e, t.f));
}
function _t(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, _, p) {
    if (l !== f || c !== h) {
      var v = _.push("translate(", null, n, null, e);
      p.push({ i: v - 4, x: x(l, f) }, { i: v - 2, x: x(c, h) });
    } else
      (f || h) && _.push("translate(" + f + n + h + e);
  }
  function s(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: x(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function u(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: x(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function a(l, c, f, h, _, p) {
    if (l !== f || c !== h) {
      var v = _.push(i(_) + "scale(", null, ",", null, ")");
      p.push({ i: v - 4, x: x(l, f) }, { i: v - 2, x: x(c, h) });
    } else
      (f !== 1 || h !== 1) && _.push(i(_) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, h), s(l.rotate, c.rotate, f, h), u(l.skewX, c.skewX, f, h), a(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(_) {
      for (var p = -1, v = h.length, A; ++p < v; )
        f[(A = h[p]).i] = A.x(_);
      return f.join("");
    };
  };
}
var Ot = _t($t, "px, ", "px)", "deg)"), Vt = _t(Lt, ", ", ")", ")"), Pt = { value: () => {
} };
function pt() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new $(e);
}
function $(t) {
  this._ = t;
}
function Yt(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
$.prototype = pt.prototype = {
  constructor: $,
  on: function(t, n) {
    var e = this._, r = Yt(t + "", e), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((i = (t = r[o]).type) && (i = qt(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < s; )
      if (i = (t = r[o]).type)
        e[i] = st(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = st(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new $(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, o; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(n, e);
  }
};
function qt(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function st(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Pt, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var K = "http://www.w3.org/1999/xhtml";
const ut = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: K,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function B(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), ut.hasOwnProperty(n) ? { space: ut[n], local: t } : t;
}
function Bt(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === K && n.documentElement.namespaceURI === K ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function zt(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function vt(t) {
  var n = B(t);
  return (n.local ? zt : Bt)(n);
}
function Ht() {
}
function Q(t) {
  return t == null ? Ht : function() {
    return this.querySelector(t);
  };
}
function Ut(t) {
  typeof t != "function" && (t = Q(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], s = o.length, u = r[i] = new Array(s), a, l, c = 0; c < s; ++c)
      (a = o[c]) && (l = t.call(a, a.__data__, c, o)) && ("__data__" in a && (l.__data__ = a.__data__), u[c] = l);
  return new y(r, this._parents);
}
function Kt(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Gt() {
  return [];
}
function yt(t) {
  return t == null ? Gt : function() {
    return this.querySelectorAll(t);
  };
}
function Wt(t) {
  return function() {
    return Kt(t.apply(this, arguments));
  };
}
function Jt(t) {
  typeof t == "function" ? t = Wt(t) : t = yt(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var s = n[o], u = s.length, a, l = 0; l < u; ++l)
      (a = s[l]) && (r.push(t.call(a, a.__data__, l, s)), i.push(a));
  return new y(r, i);
}
function wt(t) {
  return function() {
    return this.matches(t);
  };
}
function dt(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Qt = Array.prototype.find;
function Zt(t) {
  return function() {
    return Qt.call(this.children, t);
  };
}
function bt() {
  return this.firstElementChild;
}
function jt(t) {
  return this.select(t == null ? bt : Zt(typeof t == "function" ? t : dt(t)));
}
var tn = Array.prototype.filter;
function nn() {
  return Array.from(this.children);
}
function en(t) {
  return function() {
    return tn.call(this.children, t);
  };
}
function rn(t) {
  return this.selectAll(t == null ? nn : en(typeof t == "function" ? t : dt(t)));
}
function on(t) {
  typeof t != "function" && (t = wt(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], s = o.length, u = r[i] = [], a, l = 0; l < s; ++l)
      (a = o[l]) && t.call(a, a.__data__, l, o) && u.push(a);
  return new y(r, this._parents);
}
function gt(t) {
  return new Array(t.length);
}
function sn() {
  return new y(this._enter || this._groups.map(gt), this._parents);
}
function V(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
V.prototype = {
  constructor: V,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function un(t) {
  return function() {
    return t;
  };
}
function an(t, n, e, r, i, o) {
  for (var s = 0, u, a = n.length, l = o.length; s < l; ++s)
    (u = n[s]) ? (u.__data__ = o[s], r[s] = u) : e[s] = new V(t, o[s]);
  for (; s < a; ++s)
    (u = n[s]) && (i[s] = u);
}
function ln(t, n, e, r, i, o, s) {
  var u, a, l = /* @__PURE__ */ new Map(), c = n.length, f = o.length, h = new Array(c), _;
  for (u = 0; u < c; ++u)
    (a = n[u]) && (h[u] = _ = s.call(a, a.__data__, u, n) + "", l.has(_) ? i[u] = a : l.set(_, a));
  for (u = 0; u < f; ++u)
    _ = s.call(t, o[u], u, o) + "", (a = l.get(_)) ? (r[u] = a, a.__data__ = o[u], l.delete(_)) : e[u] = new V(t, o[u]);
  for (u = 0; u < c; ++u)
    (a = n[u]) && l.get(h[u]) === a && (i[u] = a);
}
function cn(t) {
  return t.__data__;
}
function fn(t, n) {
  if (!arguments.length)
    return Array.from(this, cn);
  var e = n ? ln : an, r = this._parents, i = this._groups;
  typeof t != "function" && (t = un(t));
  for (var o = i.length, s = new Array(o), u = new Array(o), a = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, _ = hn(t.call(c, c && c.__data__, l, r)), p = _.length, v = u[l] = new Array(p), A = s[l] = new Array(p), Dt = a[l] = new Array(h);
    e(c, f, v, A, Dt, _, n);
    for (var T = 0, D = 0, nt, et; T < p; ++T)
      if (nt = v[T]) {
        for (T >= D && (D = T + 1); !(et = A[D]) && ++D < p; )
          ;
        nt._next = et || null;
      }
  }
  return s = new y(s, r), s._enter = u, s._exit = a, s;
}
function hn(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function _n() {
  return new y(this._exit || this._groups.map(gt), this._parents);
}
function pn(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function vn(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, s = Math.min(i, o), u = new Array(i), a = 0; a < s; ++a)
    for (var l = e[a], c = r[a], f = l.length, h = u[a] = new Array(f), _, p = 0; p < f; ++p)
      (_ = l[p] || c[p]) && (h[p] = _);
  for (; a < i; ++a)
    u[a] = e[a];
  return new y(u, this._parents);
}
function yn() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function wn(t) {
  t || (t = dn);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = e[o], u = s.length, a = i[o] = new Array(u), l, c = 0; c < u; ++c)
      (l = s[c]) && (a[c] = l);
    a.sort(n);
  }
  return new y(i, this._parents).order();
}
function dn(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function gn() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function mn() {
  return Array.from(this);
}
function An() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s)
        return s;
    }
  return null;
}
function xn() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function Nn() {
  return !this.node();
}
function Sn(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, s = i.length, u; o < s; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function En(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Cn(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Tn(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function kn(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Fn(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function In(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Rn(t, n) {
  var e = B(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Cn : En : typeof n == "function" ? e.local ? In : Fn : e.local ? kn : Tn)(e, n));
}
function mt(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Xn(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Dn(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Mn(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function $n(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Xn : typeof n == "function" ? Mn : Dn)(t, n, e ?? "")) : E(this.node(), t);
}
function E(t, n) {
  return t.style.getPropertyValue(n) || mt(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ln(t) {
  return function() {
    delete this[t];
  };
}
function On(t, n) {
  return function() {
    this[t] = n;
  };
}
function Vn(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Pn(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ln : typeof n == "function" ? Vn : On)(t, n)) : this.node()[t];
}
function At(t) {
  return t.trim().split(/^|\s+/);
}
function Z(t) {
  return t.classList || new xt(t);
}
function xt(t) {
  this._node = t, this._names = At(t.getAttribute("class") || "");
}
xt.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Nt(t, n) {
  for (var e = Z(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function St(t, n) {
  for (var e = Z(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Yn(t) {
  return function() {
    Nt(this, t);
  };
}
function qn(t) {
  return function() {
    St(this, t);
  };
}
function Bn(t, n) {
  return function() {
    (n.apply(this, arguments) ? Nt : St)(this, t);
  };
}
function zn(t, n) {
  var e = At(t + "");
  if (arguments.length < 2) {
    for (var r = Z(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Bn : n ? Yn : qn)(e, n));
}
function Hn() {
  this.textContent = "";
}
function Un(t) {
  return function() {
    this.textContent = t;
  };
}
function Kn(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Gn(t) {
  return arguments.length ? this.each(t == null ? Hn : (typeof t == "function" ? Kn : Un)(t)) : this.node().textContent;
}
function Wn() {
  this.innerHTML = "";
}
function Jn(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Qn(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Zn(t) {
  return arguments.length ? this.each(t == null ? Wn : (typeof t == "function" ? Qn : Jn)(t)) : this.node().innerHTML;
}
function bn() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function jn() {
  return this.each(bn);
}
function te() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ne() {
  return this.each(te);
}
function ee(t) {
  var n = typeof t == "function" ? t : vt(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function re() {
  return null;
}
function ie(t, n) {
  var e = typeof t == "function" ? t : vt(t), r = n == null ? re : typeof n == "function" ? n : Q(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function oe() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function se() {
  return this.each(oe);
}
function ue() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ae() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function le(t) {
  return this.select(t ? ae : ue);
}
function ce(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function fe(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function he(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function _e(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function pe(t, n, e) {
  return function() {
    var r = this.__on, i, o = fe(n);
    if (r) {
      for (var s = 0, u = r.length; s < u; ++s)
        if ((i = r[s]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function ve(t, n, e) {
  var r = he(t + ""), i, o = r.length, s;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var a = 0, l = u.length, c; a < l; ++a)
        for (i = 0, c = u[a]; i < o; ++i)
          if ((s = r[i]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (u = n ? pe : _e, i = 0; i < o; ++i)
    this.each(u(r[i], n, e));
  return this;
}
function Et(t, n, e) {
  var r = mt(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ye(t, n) {
  return function() {
    return Et(this, t, n);
  };
}
function we(t, n) {
  return function() {
    return Et(this, t, n.apply(this, arguments));
  };
}
function de(t, n) {
  return this.each((typeof n == "function" ? we : ye)(t, n));
}
function* ge() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var me = [null];
function y(t, n) {
  this._groups = t, this._parents = n;
}
function X() {
  return new y([[document.documentElement]], me);
}
function Ae() {
  return this;
}
y.prototype = X.prototype = {
  constructor: y,
  select: Ut,
  selectAll: Jt,
  selectChild: jt,
  selectChildren: rn,
  filter: on,
  data: fn,
  enter: sn,
  exit: _n,
  join: pn,
  merge: vn,
  selection: Ae,
  order: yn,
  sort: wn,
  call: gn,
  nodes: mn,
  node: An,
  size: xn,
  empty: Nn,
  each: Sn,
  attr: Rn,
  style: $n,
  property: Pn,
  classed: zn,
  text: Gn,
  html: Zn,
  raise: jn,
  lower: ne,
  append: ee,
  insert: ie,
  remove: se,
  clone: le,
  datum: ce,
  on: ve,
  dispatch: de,
  [Symbol.iterator]: ge
};
var C = 0, F = 0, k = 0, Ct = 1e3, P, I, Y = 0, N = 0, z = 0, R = typeof performance == "object" && performance.now ? performance : Date, Tt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function b() {
  return N || (Tt(xe), N = R.now() + z);
}
function xe() {
  N = 0;
}
function q() {
  this._call = this._time = this._next = null;
}
q.prototype = kt.prototype = {
  constructor: q,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? b() : +e) + (n == null ? 0 : +n), !this._next && I !== this && (I ? I._next = this : P = this, I = this), this._call = t, this._time = e, G();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, G());
  }
};
function kt(t, n, e) {
  var r = new q();
  return r.restart(t, n, e), r;
}
function Ne() {
  b(), ++C;
  for (var t = P, n; t; )
    (n = N - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --C;
}
function at() {
  N = (Y = R.now()) + z, C = F = 0;
  try {
    Ne();
  } finally {
    C = 0, Ee(), N = 0;
  }
}
function Se() {
  var t = R.now(), n = t - Y;
  n > Ct && (z -= n, Y = t);
}
function Ee() {
  for (var t, n = P, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : P = e);
  I = t, G(r);
}
function G(t) {
  if (!C) {
    F && (F = clearTimeout(F));
    var n = t - N;
    n > 24 ? (t < 1 / 0 && (F = setTimeout(at, t - R.now() - z)), k && (k = clearInterval(k))) : (k || (Y = R.now(), k = setInterval(Se, Ct)), C = 1, Tt(at));
  }
}
function lt(t, n, e) {
  var r = new q();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Ce = pt("start", "end", "cancel", "interrupt"), Te = [], Ft = 0, ct = 1, W = 2, L = 3, ft = 4, J = 5, O = 6;
function H(t, n, e, r, i, o) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (e in s)
    return;
  ke(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ce,
    tween: Te,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ft
  });
}
function j(t, n) {
  var e = w(t, n);
  if (e.state > Ft)
    throw new Error("too late; already scheduled");
  return e;
}
function d(t, n) {
  var e = w(t, n);
  if (e.state > L)
    throw new Error("too late; already running");
  return e;
}
function w(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function ke(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = kt(o, 0, e.time);
  function o(l) {
    e.state = ct, e.timer.restart(s, e.delay, e.time), e.delay <= l && s(l - e.delay);
  }
  function s(l) {
    var c, f, h, _;
    if (e.state !== ct)
      return a();
    for (c in r)
      if (_ = r[c], _.name === e.name) {
        if (_.state === L)
          return lt(s);
        _.state === ft ? (_.state = O, _.timer.stop(), _.on.call("interrupt", t, t.__data__, _.index, _.group), delete r[c]) : +c < n && (_.state = O, _.timer.stop(), _.on.call("cancel", t, t.__data__, _.index, _.group), delete r[c]);
      }
    if (lt(function() {
      e.state === L && (e.state = ft, e.timer.restart(u, e.delay, e.time), u(l));
    }), e.state = W, e.on.call("start", t, t.__data__, e.index, e.group), e.state === W) {
      for (e.state = L, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (_ = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = _);
      i.length = f + 1;
    }
  }
  function u(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(a), e.state = J, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === J && (e.on.call("end", t, t.__data__, e.index, e.group), a());
  }
  function a() {
    e.state = O, e.timer.stop(), delete r[n];
    for (var l in r)
      return;
    delete t.__transition;
  }
}
function Fe(t, n) {
  var e = t.__transition, r, i, o = !0, s;
  if (e) {
    n = n == null ? null : n + "";
    for (s in e) {
      if ((r = e[s]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > W && r.state < J, r.state = O, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[s];
    }
    o && delete t.__transition;
  }
}
function Ie(t) {
  return this.each(function() {
    Fe(this, t);
  });
}
function Re(t, n) {
  var e, r;
  return function() {
    var i = d(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var s = 0, u = r.length; s < u; ++s)
        if (r[s].name === n) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Xe(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = d(this, t), s = o.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var u = { name: n, value: e }, a = 0, l = i.length; a < l; ++a)
        if (i[a].name === n) {
          i[a] = u;
          break;
        }
      a === l && i.push(u);
    }
    o.tween = i;
  };
}
function De(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = w(this.node(), e).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === t)
        return s.value;
    return null;
  }
  return this.each((n == null ? Re : Xe)(e, t, n));
}
function tt(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = d(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return w(i, r).value[n];
  };
}
function It(t, n) {
  var e;
  return (typeof n == "number" ? x : n instanceof rt ? it : (e = rt(n)) ? (n = e, it) : Mt)(t, n);
}
function Me(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $e(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Le(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttribute(t);
    return s === i ? null : s === r ? o : o = n(r = s, e);
  };
}
function Oe(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === i ? null : s === r ? o : o = n(r = s, e);
  };
}
function Ve(t, n, e) {
  var r, i, o;
  return function() {
    var s, u = e(this), a;
    return u == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), a = u + "", s === a ? null : s === r && a === i ? o : (i = a, o = n(r = s, u)));
  };
}
function Pe(t, n, e) {
  var r, i, o;
  return function() {
    var s, u = e(this), a;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), a = u + "", s === a ? null : s === r && a === i ? o : (i = a, o = n(r = s, u)));
  };
}
function Ye(t, n) {
  var e = B(t), r = e === "transform" ? Vt : It;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Pe : Ve)(e, r, tt(this, "attr." + t, n)) : n == null ? (e.local ? $e : Me)(e) : (e.local ? Oe : Le)(e, r, n));
}
function qe(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Be(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function ze(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Be(t, o)), e;
  }
  return i._value = n, i;
}
function He(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && qe(t, o)), e;
  }
  return i._value = n, i;
}
function Ue(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = B(t);
  return this.tween(e, (r.local ? ze : He)(r, n));
}
function Ke(t, n) {
  return function() {
    j(this, t).delay = +n.apply(this, arguments);
  };
}
function Ge(t, n) {
  return n = +n, function() {
    j(this, t).delay = n;
  };
}
function We(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ke : Ge)(n, t)) : w(this.node(), n).delay;
}
function Je(t, n) {
  return function() {
    d(this, t).duration = +n.apply(this, arguments);
  };
}
function Qe(t, n) {
  return n = +n, function() {
    d(this, t).duration = n;
  };
}
function Ze(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Je : Qe)(n, t)) : w(this.node(), n).duration;
}
function be(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    d(this, t).ease = n;
  };
}
function je(t) {
  var n = this._id;
  return arguments.length ? this.each(be(n, t)) : w(this.node(), n).ease;
}
function tr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    d(this, t).ease = e;
  };
}
function nr(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(tr(this._id, t));
}
function er(t) {
  typeof t != "function" && (t = wt(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], s = o.length, u = r[i] = [], a, l = 0; l < s; ++l)
      (a = o[l]) && t.call(a, a.__data__, l, o) && u.push(a);
  return new m(r, this._parents, this._name, this._id);
}
function rr(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), s = new Array(r), u = 0; u < o; ++u)
    for (var a = n[u], l = e[u], c = a.length, f = s[u] = new Array(c), h, _ = 0; _ < c; ++_)
      (h = a[_] || l[_]) && (f[_] = h);
  for (; u < r; ++u)
    s[u] = n[u];
  return new m(s, this._parents, this._name, this._id);
}
function ir(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function or(t, n, e) {
  var r, i, o = ir(n) ? j : d;
  return function() {
    var s = o(this, t), u = s.on;
    u !== r && (i = (r = u).copy()).on(n, e), s.on = i;
  };
}
function sr(t, n) {
  var e = this._id;
  return arguments.length < 2 ? w(this.node(), e).on.on(t) : this.each(or(e, t, n));
}
function ur(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function ar() {
  return this.on("end.remove", ur(this._id));
}
function lr(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Q(t));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var u = r[s], a = u.length, l = o[s] = new Array(a), c, f, h = 0; h < a; ++h)
      (c = u[h]) && (f = t.call(c, c.__data__, h, u)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, H(l[h], n, e, h, l, w(c, e)));
  return new m(o, this._parents, n, e);
}
function cr(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = yt(t));
  for (var r = this._groups, i = r.length, o = [], s = [], u = 0; u < i; ++u)
    for (var a = r[u], l = a.length, c, f = 0; f < l; ++f)
      if (c = a[f]) {
        for (var h = t.call(c, c.__data__, f, a), _, p = w(c, e), v = 0, A = h.length; v < A; ++v)
          (_ = h[v]) && H(_, n, e, v, h, p);
        o.push(h), s.push(c);
      }
  return new m(o, s, n, e);
}
var fr = X.prototype.constructor;
function hr() {
  return new fr(this._groups, this._parents);
}
function _r(t, n) {
  var e, r, i;
  return function() {
    var o = E(this, t), s = (this.style.removeProperty(t), E(this, t));
    return o === s ? null : o === e && s === r ? i : i = n(e = o, r = s);
  };
}
function Rt(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function pr(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var s = E(this, t);
    return s === i ? null : s === r ? o : o = n(r = s, e);
  };
}
function vr(t, n, e) {
  var r, i, o;
  return function() {
    var s = E(this, t), u = e(this), a = u + "";
    return u == null && (a = u = (this.style.removeProperty(t), E(this, t))), s === a ? null : s === r && a === i ? o : (i = a, o = n(r = s, u));
  };
}
function yr(t, n) {
  var e, r, i, o = "style." + n, s = "end." + o, u;
  return function() {
    var a = d(this, t), l = a.on, c = a.value[o] == null ? u || (u = Rt(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(s, i = c), a.on = r;
  };
}
function wr(t, n, e) {
  var r = (t += "") == "transform" ? Ot : It;
  return n == null ? this.styleTween(t, _r(t, r)).on("end.style." + t, Rt(t)) : typeof n == "function" ? this.styleTween(t, vr(t, r, tt(this, "style." + t, n))).each(yr(this._id, t)) : this.styleTween(t, pr(t, r, n), e).on("end.style." + t, null);
}
function dr(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function gr(t, n, e) {
  var r, i;
  function o() {
    var s = n.apply(this, arguments);
    return s !== i && (r = (i = s) && dr(t, s, e)), r;
  }
  return o._value = n, o;
}
function mr(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, gr(t, n, e ?? ""));
}
function Ar(t) {
  return function() {
    this.textContent = t;
  };
}
function xr(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Nr(t) {
  return this.tween("text", typeof t == "function" ? xr(tt(this, "text", t)) : Ar(t == null ? "" : t + ""));
}
function Sr(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Er(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Sr(i)), n;
  }
  return r._value = t, r;
}
function Cr(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, Er(t));
}
function Tr() {
  for (var t = this._name, n = this._id, e = Xt(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], u = s.length, a, l = 0; l < u; ++l)
      if (a = s[l]) {
        var c = w(a, n);
        H(a, t, e, l, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new m(r, this._parents, t, e);
}
function kr() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, s) {
    var u = { value: s }, a = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = d(this, r), c = l.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(a)), l.on = n;
    }), i === 0 && o();
  });
}
var Fr = 0;
function m(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Xt() {
  return ++Fr;
}
var g = X.prototype;
m.prototype = {
  constructor: m,
  select: lr,
  selectAll: cr,
  selectChild: g.selectChild,
  selectChildren: g.selectChildren,
  filter: er,
  merge: rr,
  selection: hr,
  transition: Tr,
  call: g.call,
  nodes: g.nodes,
  node: g.node,
  size: g.size,
  empty: g.empty,
  each: g.each,
  on: sr,
  attr: Ye,
  attrTween: Ue,
  style: wr,
  styleTween: mr,
  text: Nr,
  textTween: Cr,
  remove: ar,
  tween: De,
  delay: We,
  duration: Ze,
  ease: je,
  easeVarying: nr,
  end: kr,
  [Symbol.iterator]: g[Symbol.iterator]
};
function Ir(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Rr = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ir
};
function Xr(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Dr(t) {
  var n, e;
  t instanceof m ? (n = t._id, t = t._name) : (n = Xt(), (e = Rr).time = b(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], u = s.length, a, l = 0; l < u; ++l)
      (a = s[l]) && H(a, t, n, l, s, e || Xr(a, n));
  return new m(r, this._parents, t, n);
}
X.prototype.interrupt = Ie;
X.prototype.transition = Dr;
function S(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
S.prototype = {
  constructor: S,
  scale: function(t) {
    return t === 1 ? this : new S(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new S(this.k, this.x + this.k * t, this.y + this.k * n);
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
var $r = new S(1, 0, 0);
S.prototype;
export {
  y as S,
  S as T,
  Fe as a,
  pt as d,
  $r as i,
  me as r
};
