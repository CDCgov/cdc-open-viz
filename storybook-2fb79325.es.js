import { j as Ln, k as Hc, i as qc, m as R0 } from "./storybook-9ba010e8.es.js";
import { c as Rr, g as rd } from "./storybook-c5d32002.es.js";
import { r as W, R as z } from "./storybook-e61d95ab.es.js";
import { B as P0 } from "./storybook-8d78bf52.es.js";
import { P as Xe } from "./storybook-b8c9afe4.es.js";
import { r as Ta, R as T0, n as B0 } from "./storybook-504ac493.es.js";
import { c as L0, b as zc, a as M0, d as F0 } from "./storybook-89eea9d9.es.js";
import { _ as or } from "./storybook-70f3d2a3.es.js";
import { i as Yc } from "./storybook-9f3340e2.es.js";
import "./storybook-4ed993c7.es.js";
var Kc = 180 / Math.PI, ha = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function od(e, n, r, i, s, l) {
  var u, c, d;
  return (u = Math.sqrt(e * e + n * n)) && (e /= u, n /= u), (d = e * r + n * i) && (r -= e * d, i -= n * d), (c = Math.sqrt(r * r + i * i)) && (r /= c, i /= c, d /= c), e * i < n * r && (e = -e, n = -n, d = -d, u = -u), {
    translateX: s,
    translateY: l,
    rotate: Math.atan2(n, e) * Kc,
    skewX: Math.atan(d) * Kc,
    scaleX: u,
    scaleY: c
  };
}
var Jo;
function $0(e) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return n.isIdentity ? ha : od(n.a, n.b, n.c, n.d, n.e, n.f);
}
function V0(e) {
  return e == null || (Jo || (Jo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Jo.setAttribute("transform", e), !(e = Jo.transform.baseVal.consolidate())) ? ha : (e = e.matrix, od(e.a, e.b, e.c, e.d, e.e, e.f));
}
function id(e, n, r, i) {
  function s(p) {
    return p.length ? p.pop() + " " : "";
  }
  function l(p, g, h, m, _, w) {
    if (p !== h || g !== m) {
      var A = _.push("translate(", null, n, null, r);
      w.push({ i: A - 4, x: Ln(p, h) }, { i: A - 2, x: Ln(g, m) });
    } else
      (h || m) && _.push("translate(" + h + n + m + r);
  }
  function u(p, g, h, m) {
    p !== g ? (p - g > 180 ? g += 360 : g - p > 180 && (p += 360), m.push({ i: h.push(s(h) + "rotate(", null, i) - 2, x: Ln(p, g) })) : g && h.push(s(h) + "rotate(" + g + i);
  }
  function c(p, g, h, m) {
    p !== g ? m.push({ i: h.push(s(h) + "skewX(", null, i) - 2, x: Ln(p, g) }) : g && h.push(s(h) + "skewX(" + g + i);
  }
  function d(p, g, h, m, _, w) {
    if (p !== h || g !== m) {
      var A = _.push(s(_) + "scale(", null, ",", null, ")");
      w.push({ i: A - 4, x: Ln(p, h) }, { i: A - 2, x: Ln(g, m) });
    } else
      (h !== 1 || m !== 1) && _.push(s(_) + "scale(" + h + "," + m + ")");
  }
  return function(p, g) {
    var h = [], m = [];
    return p = e(p), g = e(g), l(p.translateX, p.translateY, g.translateX, g.translateY, h, m), u(p.rotate, g.rotate, h, m), c(p.skewX, g.skewX, h, m), d(p.scaleX, p.scaleY, g.scaleX, g.scaleY, h, m), p = g = null, function(_) {
      for (var w = -1, A = m.length, x; ++w < A; )
        h[(x = m[w]).i] = x.x(_);
      return h.join("");
    };
  };
}
var W0 = id($0, "px, ", "px)", "deg)"), G0 = id(V0, ", ", ")", ")"), U0 = { value: () => {
} };
function sd() {
  for (var e = 0, n = arguments.length, r = {}, i; e < n; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new ni(r);
}
function ni(e) {
  this._ = e;
}
function k0(e, n) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", s = r.indexOf(".");
    if (s >= 0 && (i = r.slice(s + 1), r = r.slice(0, s)), r && !n.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
ni.prototype = sd.prototype = {
  constructor: ni,
  on: function(e, n) {
    var r = this._, i = k0(e + "", r), s, l = -1, u = i.length;
    if (arguments.length < 2) {
      for (; ++l < u; )
        if ((s = (e = i[l]).type) && (s = H0(r[s], e.name)))
          return s;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++l < u; )
      if (s = (e = i[l]).type)
        r[s] = Xc(r[s], e.name, n);
      else if (n == null)
        for (s in r)
          r[s] = Xc(r[s], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, n = this._;
    for (var r in n)
      e[r] = n[r].slice();
    return new ni(e);
  },
  call: function(e, n) {
    if ((s = arguments.length - 2) > 0)
      for (var r = new Array(s), i = 0, s, l; i < s; ++i)
        r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (l = this._[e], i = 0, s = l.length; i < s; ++i)
      l[i].value.apply(n, r);
  },
  apply: function(e, n, r) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var i = this._[e], s = 0, l = i.length; s < l; ++s)
      i[s].value.apply(n, r);
  }
};
function H0(e, n) {
  for (var r = 0, i = e.length, s; r < i; ++r)
    if ((s = e[r]).name === n)
      return s.value;
}
function Xc(e, n, r) {
  for (var i = 0, s = e.length; i < s; ++i)
    if (e[i].name === n) {
      e[i] = U0, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: n, value: r }), e;
}
var ga = "http://www.w3.org/1999/xhtml";
const Jc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ga,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function mi(e) {
  var n = e += "", r = n.indexOf(":");
  return r >= 0 && (n = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), Jc.hasOwnProperty(n) ? { space: Jc[n], local: e } : e;
}
function q0(e) {
  return function() {
    var n = this.ownerDocument, r = this.namespaceURI;
    return r === ga && n.documentElement.namespaceURI === ga ? n.createElement(e) : n.createElementNS(r, e);
  };
}
function z0(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ad(e) {
  var n = mi(e);
  return (n.local ? z0 : q0)(n);
}
function Y0() {
}
function Ba(e) {
  return e == null ? Y0 : function() {
    return this.querySelector(e);
  };
}
function K0(e) {
  typeof e != "function" && (e = Ba(e));
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s)
    for (var l = n[s], u = l.length, c = i[s] = new Array(u), d, p, g = 0; g < u; ++g)
      (d = l[g]) && (p = e.call(d, d.__data__, g, l)) && ("__data__" in d && (p.__data__ = d.__data__), c[g] = p);
  return new Ut(i, this._parents);
}
function X0(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function J0() {
  return [];
}
function ld(e) {
  return e == null ? J0 : function() {
    return this.querySelectorAll(e);
  };
}
function Z0(e) {
  return function() {
    return X0(e.apply(this, arguments));
  };
}
function Q0(e) {
  typeof e == "function" ? e = Z0(e) : e = ld(e);
  for (var n = this._groups, r = n.length, i = [], s = [], l = 0; l < r; ++l)
    for (var u = n[l], c = u.length, d, p = 0; p < c; ++p)
      (d = u[p]) && (i.push(e.call(d, d.__data__, p, u)), s.push(d));
  return new Ut(i, s);
}
function ud(e) {
  return function() {
    return this.matches(e);
  };
}
function cd(e) {
  return function(n) {
    return n.matches(e);
  };
}
var j0 = Array.prototype.find;
function eE(e) {
  return function() {
    return j0.call(this.children, e);
  };
}
function tE() {
  return this.firstElementChild;
}
function nE(e) {
  return this.select(e == null ? tE : eE(typeof e == "function" ? e : cd(e)));
}
var rE = Array.prototype.filter;
function oE() {
  return Array.from(this.children);
}
function iE(e) {
  return function() {
    return rE.call(this.children, e);
  };
}
function sE(e) {
  return this.selectAll(e == null ? oE : iE(typeof e == "function" ? e : cd(e)));
}
function aE(e) {
  typeof e != "function" && (e = ud(e));
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s)
    for (var l = n[s], u = l.length, c = i[s] = [], d, p = 0; p < u; ++p)
      (d = l[p]) && e.call(d, d.__data__, p, l) && c.push(d);
  return new Ut(i, this._parents);
}
function fd(e) {
  return new Array(e.length);
}
function lE() {
  return new Ut(this._enter || this._groups.map(fd), this._parents);
}
function si(e, n) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = n;
}
si.prototype = {
  constructor: si,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, n) {
    return this._parent.insertBefore(e, n);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function uE(e) {
  return function() {
    return e;
  };
}
function cE(e, n, r, i, s, l) {
  for (var u = 0, c, d = n.length, p = l.length; u < p; ++u)
    (c = n[u]) ? (c.__data__ = l[u], i[u] = c) : r[u] = new si(e, l[u]);
  for (; u < d; ++u)
    (c = n[u]) && (s[u] = c);
}
function fE(e, n, r, i, s, l, u) {
  var c, d, p = /* @__PURE__ */ new Map(), g = n.length, h = l.length, m = new Array(g), _;
  for (c = 0; c < g; ++c)
    (d = n[c]) && (m[c] = _ = u.call(d, d.__data__, c, n) + "", p.has(_) ? s[c] = d : p.set(_, d));
  for (c = 0; c < h; ++c)
    _ = u.call(e, l[c], c, l) + "", (d = p.get(_)) ? (i[c] = d, d.__data__ = l[c], p.delete(_)) : r[c] = new si(e, l[c]);
  for (c = 0; c < g; ++c)
    (d = n[c]) && p.get(m[c]) === d && (s[c] = d);
}
function dE(e) {
  return e.__data__;
}
function pE(e, n) {
  if (!arguments.length)
    return Array.from(this, dE);
  var r = n ? fE : cE, i = this._parents, s = this._groups;
  typeof e != "function" && (e = uE(e));
  for (var l = s.length, u = new Array(l), c = new Array(l), d = new Array(l), p = 0; p < l; ++p) {
    var g = i[p], h = s[p], m = h.length, _ = hE(e.call(g, g && g.__data__, p, i)), w = _.length, A = c[p] = new Array(w), x = u[p] = new Array(w), M = d[p] = new Array(m);
    r(g, h, A, x, M, _, n);
    for (var B = 0, R = 0, P, I; B < w; ++B)
      if (P = A[B]) {
        for (B >= R && (R = B + 1); !(I = x[R]) && ++R < w; )
          ;
        P._next = I || null;
      }
  }
  return u = new Ut(u, i), u._enter = c, u._exit = d, u;
}
function hE(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function gE() {
  return new Ut(this._exit || this._groups.map(fd), this._parents);
}
function vE(e, n, r) {
  var i = this.enter(), s = this, l = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), n != null && (s = n(s), s && (s = s.selection())), r == null ? l.remove() : r(l), i && s ? i.merge(s).order() : s;
}
function mE(e) {
  for (var n = e.selection ? e.selection() : e, r = this._groups, i = n._groups, s = r.length, l = i.length, u = Math.min(s, l), c = new Array(s), d = 0; d < u; ++d)
    for (var p = r[d], g = i[d], h = p.length, m = c[d] = new Array(h), _, w = 0; w < h; ++w)
      (_ = p[w] || g[w]) && (m[w] = _);
  for (; d < s; ++d)
    c[d] = r[d];
  return new Ut(c, this._parents);
}
function yE() {
  for (var e = this._groups, n = -1, r = e.length; ++n < r; )
    for (var i = e[n], s = i.length - 1, l = i[s], u; --s >= 0; )
      (u = i[s]) && (l && u.compareDocumentPosition(l) ^ 4 && l.parentNode.insertBefore(u, l), l = u);
  return this;
}
function bE(e) {
  e || (e = _E);
  function n(h, m) {
    return h && m ? e(h.__data__, m.__data__) : !h - !m;
  }
  for (var r = this._groups, i = r.length, s = new Array(i), l = 0; l < i; ++l) {
    for (var u = r[l], c = u.length, d = s[l] = new Array(c), p, g = 0; g < c; ++g)
      (p = u[g]) && (d[g] = p);
    d.sort(n);
  }
  return new Ut(s, this._parents).order();
}
function _E(e, n) {
  return e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function EE() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function wE() {
  return Array.from(this);
}
function xE() {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, l = i.length; s < l; ++s) {
      var u = i[s];
      if (u)
        return u;
    }
  return null;
}
function SE() {
  let e = 0;
  for (const n of this)
    ++e;
  return e;
}
function DE() {
  return !this.node();
}
function CE(e) {
  for (var n = this._groups, r = 0, i = n.length; r < i; ++r)
    for (var s = n[r], l = 0, u = s.length, c; l < u; ++l)
      (c = s[l]) && e.call(c, c.__data__, l, s);
  return this;
}
function AE(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function IE(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function NE(e, n) {
  return function() {
    this.setAttribute(e, n);
  };
}
function OE(e, n) {
  return function() {
    this.setAttributeNS(e.space, e.local, n);
  };
}
function RE(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function PE(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function TE(e, n) {
  var r = mi(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((n == null ? r.local ? IE : AE : typeof n == "function" ? r.local ? PE : RE : r.local ? OE : NE)(r, n));
}
function dd(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function BE(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function LE(e, n, r) {
  return function() {
    this.style.setProperty(e, n, r);
  };
}
function ME(e, n, r) {
  return function() {
    var i = n.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function FE(e, n, r) {
  return arguments.length > 1 ? this.each((n == null ? BE : typeof n == "function" ? ME : LE)(e, n, r ?? "")) : ir(this.node(), e);
}
function ir(e, n) {
  return e.style.getPropertyValue(n) || dd(e).getComputedStyle(e, null).getPropertyValue(n);
}
function $E(e) {
  return function() {
    delete this[e];
  };
}
function VE(e, n) {
  return function() {
    this[e] = n;
  };
}
function WE(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function GE(e, n) {
  return arguments.length > 1 ? this.each((n == null ? $E : typeof n == "function" ? WE : VE)(e, n)) : this.node()[e];
}
function pd(e) {
  return e.trim().split(/^|\s+/);
}
function La(e) {
  return e.classList || new hd(e);
}
function hd(e) {
  this._node = e, this._names = pd(e.getAttribute("class") || "");
}
hd.prototype = {
  add: function(e) {
    var n = this._names.indexOf(e);
    n < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var n = this._names.indexOf(e);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function gd(e, n) {
  for (var r = La(e), i = -1, s = n.length; ++i < s; )
    r.add(n[i]);
}
function vd(e, n) {
  for (var r = La(e), i = -1, s = n.length; ++i < s; )
    r.remove(n[i]);
}
function UE(e) {
  return function() {
    gd(this, e);
  };
}
function kE(e) {
  return function() {
    vd(this, e);
  };
}
function HE(e, n) {
  return function() {
    (n.apply(this, arguments) ? gd : vd)(this, e);
  };
}
function qE(e, n) {
  var r = pd(e + "");
  if (arguments.length < 2) {
    for (var i = La(this.node()), s = -1, l = r.length; ++s < l; )
      if (!i.contains(r[s]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? HE : n ? UE : kE)(r, n));
}
function zE() {
  this.textContent = "";
}
function YE(e) {
  return function() {
    this.textContent = e;
  };
}
function KE(e) {
  return function() {
    var n = e.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function XE(e) {
  return arguments.length ? this.each(e == null ? zE : (typeof e == "function" ? KE : YE)(e)) : this.node().textContent;
}
function JE() {
  this.innerHTML = "";
}
function ZE(e) {
  return function() {
    this.innerHTML = e;
  };
}
function QE(e) {
  return function() {
    var n = e.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function jE(e) {
  return arguments.length ? this.each(e == null ? JE : (typeof e == "function" ? QE : ZE)(e)) : this.node().innerHTML;
}
function ew() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function tw() {
  return this.each(ew);
}
function nw() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function rw() {
  return this.each(nw);
}
function ow(e) {
  var n = typeof e == "function" ? e : ad(e);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function iw() {
  return null;
}
function sw(e, n) {
  var r = typeof e == "function" ? e : ad(e), i = n == null ? iw : typeof n == "function" ? n : Ba(n);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function aw() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function lw() {
  return this.each(aw);
}
function uw() {
  var e = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function cw() {
  var e = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function fw(e) {
  return this.select(e ? cw : uw);
}
function dw(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function pw(e) {
  return function(n) {
    e.call(this, n, this.__data__);
  };
}
function hw(e) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    return i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), { type: n, name: r };
  });
}
function gw(e) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var r = 0, i = -1, s = n.length, l; r < s; ++r)
        l = n[r], (!e.type || l.type === e.type) && l.name === e.name ? this.removeEventListener(l.type, l.listener, l.options) : n[++i] = l;
      ++i ? n.length = i : delete this.__on;
    }
  };
}
function vw(e, n, r) {
  return function() {
    var i = this.__on, s, l = pw(n);
    if (i) {
      for (var u = 0, c = i.length; u < c; ++u)
        if ((s = i[u]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = l, s.options = r), s.value = n;
          return;
        }
    }
    this.addEventListener(e.type, l, r), s = { type: e.type, name: e.name, value: n, listener: l, options: r }, i ? i.push(s) : this.__on = [s];
  };
}
function mw(e, n, r) {
  var i = hw(e + ""), s, l = i.length, u;
  if (arguments.length < 2) {
    var c = this.node().__on;
    if (c) {
      for (var d = 0, p = c.length, g; d < p; ++d)
        for (s = 0, g = c[d]; s < l; ++s)
          if ((u = i[s]).type === g.type && u.name === g.name)
            return g.value;
    }
    return;
  }
  for (c = n ? vw : gw, s = 0; s < l; ++s)
    this.each(c(i[s], n, r));
  return this;
}
function md(e, n, r) {
  var i = dd(e), s = i.CustomEvent;
  typeof s == "function" ? s = new s(n, r) : (s = i.document.createEvent("Event"), r ? (s.initEvent(n, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(n, !1, !1)), e.dispatchEvent(s);
}
function yw(e, n) {
  return function() {
    return md(this, e, n);
  };
}
function bw(e, n) {
  return function() {
    return md(this, e, n.apply(this, arguments));
  };
}
function _w(e, n) {
  return this.each((typeof n == "function" ? bw : yw)(e, n));
}
function* Ew() {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, l = i.length, u; s < l; ++s)
      (u = i[s]) && (yield u);
}
var ww = [null];
function Ut(e, n) {
  this._groups = e, this._parents = n;
}
function jr() {
  return new Ut([[document.documentElement]], ww);
}
function xw() {
  return this;
}
Ut.prototype = jr.prototype = {
  constructor: Ut,
  select: K0,
  selectAll: Q0,
  selectChild: nE,
  selectChildren: sE,
  filter: aE,
  data: pE,
  enter: lE,
  exit: gE,
  join: vE,
  merge: mE,
  selection: xw,
  order: yE,
  sort: bE,
  call: EE,
  nodes: wE,
  node: xE,
  size: SE,
  empty: DE,
  each: CE,
  attr: TE,
  style: FE,
  property: GE,
  classed: qE,
  text: XE,
  html: jE,
  raise: tw,
  lower: rw,
  append: ow,
  insert: sw,
  remove: lw,
  clone: fw,
  datum: dw,
  on: mw,
  dispatch: _w,
  [Symbol.iterator]: Ew
};
var sr = 0, $r = 0, Pr = 0, yd = 1e3, ai, Vr, li = 0, Fn = 0, yi = 0, kr = typeof performance == "object" && performance.now ? performance : Date, bd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ma() {
  return Fn || (bd(Sw), Fn = kr.now() + yi);
}
function Sw() {
  Fn = 0;
}
function ui() {
  this._call = this._time = this._next = null;
}
ui.prototype = _d.prototype = {
  constructor: ui,
  restart: function(e, n, r) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    r = (r == null ? Ma() : +r) + (n == null ? 0 : +n), !this._next && Vr !== this && (Vr ? Vr._next = this : ai = this, Vr = this), this._call = e, this._time = r, va();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, va());
  }
};
function _d(e, n, r) {
  var i = new ui();
  return i.restart(e, n, r), i;
}
function Dw() {
  Ma(), ++sr;
  for (var e = ai, n; e; )
    (n = Fn - e._time) >= 0 && e._call.call(void 0, n), e = e._next;
  --sr;
}
function Zc() {
  Fn = (li = kr.now()) + yi, sr = $r = 0;
  try {
    Dw();
  } finally {
    sr = 0, Aw(), Fn = 0;
  }
}
function Cw() {
  var e = kr.now(), n = e - li;
  n > yd && (yi -= n, li = e);
}
function Aw() {
  for (var e, n = ai, r, i = 1 / 0; n; )
    n._call ? (i > n._time && (i = n._time), e = n, n = n._next) : (r = n._next, n._next = null, n = e ? e._next = r : ai = r);
  Vr = e, va(i);
}
function va(e) {
  if (!sr) {
    $r && ($r = clearTimeout($r));
    var n = e - Fn;
    n > 24 ? (e < 1 / 0 && ($r = setTimeout(Zc, e - kr.now() - yi)), Pr && (Pr = clearInterval(Pr))) : (Pr || (li = kr.now(), Pr = setInterval(Cw, yd)), sr = 1, bd(Zc));
  }
}
function Qc(e, n, r) {
  var i = new ui();
  return n = n == null ? 0 : +n, i.restart((s) => {
    i.stop(), e(s + n);
  }, n, r), i;
}
var Iw = sd("start", "end", "cancel", "interrupt"), Nw = [], Ed = 0, jc = 1, ma = 2, ri = 3, ef = 4, ya = 5, oi = 6;
function bi(e, n, r, i, s, l) {
  var u = e.__transition;
  if (!u)
    e.__transition = {};
  else if (r in u)
    return;
  Ow(e, r, {
    name: n,
    index: i,
    // For context during callback.
    group: s,
    // For context during callback.
    on: Iw,
    tween: Nw,
    time: l.time,
    delay: l.delay,
    duration: l.duration,
    ease: l.ease,
    timer: null,
    state: Ed
  });
}
function Fa(e, n) {
  var r = kt(e, n);
  if (r.state > Ed)
    throw new Error("too late; already scheduled");
  return r;
}
function Kt(e, n) {
  var r = kt(e, n);
  if (r.state > ri)
    throw new Error("too late; already running");
  return r;
}
function kt(e, n) {
  var r = e.__transition;
  if (!r || !(r = r[n]))
    throw new Error("transition not found");
  return r;
}
function Ow(e, n, r) {
  var i = e.__transition, s;
  i[n] = r, r.timer = _d(l, 0, r.time);
  function l(p) {
    r.state = jc, r.timer.restart(u, r.delay, r.time), r.delay <= p && u(p - r.delay);
  }
  function u(p) {
    var g, h, m, _;
    if (r.state !== jc)
      return d();
    for (g in i)
      if (_ = i[g], _.name === r.name) {
        if (_.state === ri)
          return Qc(u);
        _.state === ef ? (_.state = oi, _.timer.stop(), _.on.call("interrupt", e, e.__data__, _.index, _.group), delete i[g]) : +g < n && (_.state = oi, _.timer.stop(), _.on.call("cancel", e, e.__data__, _.index, _.group), delete i[g]);
      }
    if (Qc(function() {
      r.state === ri && (r.state = ef, r.timer.restart(c, r.delay, r.time), c(p));
    }), r.state = ma, r.on.call("start", e, e.__data__, r.index, r.group), r.state === ma) {
      for (r.state = ri, s = new Array(m = r.tween.length), g = 0, h = -1; g < m; ++g)
        (_ = r.tween[g].value.call(e, e.__data__, r.index, r.group)) && (s[++h] = _);
      s.length = h + 1;
    }
  }
  function c(p) {
    for (var g = p < r.duration ? r.ease.call(null, p / r.duration) : (r.timer.restart(d), r.state = ya, 1), h = -1, m = s.length; ++h < m; )
      s[h].call(e, g);
    r.state === ya && (r.on.call("end", e, e.__data__, r.index, r.group), d());
  }
  function d() {
    r.state = oi, r.timer.stop(), delete i[n];
    for (var p in i)
      return;
    delete e.__transition;
  }
}
function Rw(e, n) {
  var r = e.__transition, i, s, l = !0, u;
  if (r) {
    n = n == null ? null : n + "";
    for (u in r) {
      if ((i = r[u]).name !== n) {
        l = !1;
        continue;
      }
      s = i.state > ma && i.state < ya, i.state = oi, i.timer.stop(), i.on.call(s ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[u];
    }
    l && delete e.__transition;
  }
}
function Pw(e) {
  return this.each(function() {
    Rw(this, e);
  });
}
function Tw(e, n) {
  var r, i;
  return function() {
    var s = Kt(this, e), l = s.tween;
    if (l !== r) {
      i = r = l;
      for (var u = 0, c = i.length; u < c; ++u)
        if (i[u].name === n) {
          i = i.slice(), i.splice(u, 1);
          break;
        }
    }
    s.tween = i;
  };
}
function Bw(e, n, r) {
  var i, s;
  if (typeof r != "function")
    throw new Error();
  return function() {
    var l = Kt(this, e), u = l.tween;
    if (u !== i) {
      s = (i = u).slice();
      for (var c = { name: n, value: r }, d = 0, p = s.length; d < p; ++d)
        if (s[d].name === n) {
          s[d] = c;
          break;
        }
      d === p && s.push(c);
    }
    l.tween = s;
  };
}
function Lw(e, n) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = kt(this.node(), r).tween, s = 0, l = i.length, u; s < l; ++s)
      if ((u = i[s]).name === e)
        return u.value;
    return null;
  }
  return this.each((n == null ? Tw : Bw)(r, e, n));
}
function $a(e, n, r) {
  var i = e._id;
  return e.each(function() {
    var s = Kt(this, i);
    (s.value || (s.value = {}))[n] = r.apply(this, arguments);
  }), function(s) {
    return kt(s, i).value[n];
  };
}
function wd(e, n) {
  var r;
  return (typeof n == "number" ? Ln : n instanceof Hc ? qc : (r = Hc(n)) ? (n = r, qc) : R0)(e, n);
}
function Mw(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Fw(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function $w(e, n, r) {
  var i, s = r + "", l;
  return function() {
    var u = this.getAttribute(e);
    return u === s ? null : u === i ? l : l = n(i = u, r);
  };
}
function Vw(e, n, r) {
  var i, s = r + "", l;
  return function() {
    var u = this.getAttributeNS(e.space, e.local);
    return u === s ? null : u === i ? l : l = n(i = u, r);
  };
}
function Ww(e, n, r) {
  var i, s, l;
  return function() {
    var u, c = r(this), d;
    return c == null ? void this.removeAttribute(e) : (u = this.getAttribute(e), d = c + "", u === d ? null : u === i && d === s ? l : (s = d, l = n(i = u, c)));
  };
}
function Gw(e, n, r) {
  var i, s, l;
  return function() {
    var u, c = r(this), d;
    return c == null ? void this.removeAttributeNS(e.space, e.local) : (u = this.getAttributeNS(e.space, e.local), d = c + "", u === d ? null : u === i && d === s ? l : (s = d, l = n(i = u, c)));
  };
}
function Uw(e, n) {
  var r = mi(e), i = r === "transform" ? G0 : wd;
  return this.attrTween(e, typeof n == "function" ? (r.local ? Gw : Ww)(r, i, $a(this, "attr." + e, n)) : n == null ? (r.local ? Fw : Mw)(r) : (r.local ? Vw : $w)(r, i, n));
}
function kw(e, n) {
  return function(r) {
    this.setAttribute(e, n.call(this, r));
  };
}
function Hw(e, n) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, n.call(this, r));
  };
}
function qw(e, n) {
  var r, i;
  function s() {
    var l = n.apply(this, arguments);
    return l !== i && (r = (i = l) && Hw(e, l)), r;
  }
  return s._value = n, s;
}
function zw(e, n) {
  var r, i;
  function s() {
    var l = n.apply(this, arguments);
    return l !== i && (r = (i = l) && kw(e, l)), r;
  }
  return s._value = n, s;
}
function Yw(e, n) {
  var r = "attr." + e;
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  var i = mi(e);
  return this.tween(r, (i.local ? qw : zw)(i, n));
}
function Kw(e, n) {
  return function() {
    Fa(this, e).delay = +n.apply(this, arguments);
  };
}
function Xw(e, n) {
  return n = +n, function() {
    Fa(this, e).delay = n;
  };
}
function Jw(e) {
  var n = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Kw : Xw)(n, e)) : kt(this.node(), n).delay;
}
function Zw(e, n) {
  return function() {
    Kt(this, e).duration = +n.apply(this, arguments);
  };
}
function Qw(e, n) {
  return n = +n, function() {
    Kt(this, e).duration = n;
  };
}
function jw(e) {
  var n = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Zw : Qw)(n, e)) : kt(this.node(), n).duration;
}
function e1(e, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    Kt(this, e).ease = n;
  };
}
function t1(e) {
  var n = this._id;
  return arguments.length ? this.each(e1(n, e)) : kt(this.node(), n).ease;
}
function n1(e, n) {
  return function() {
    var r = n.apply(this, arguments);
    if (typeof r != "function")
      throw new Error();
    Kt(this, e).ease = r;
  };
}
function r1(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(n1(this._id, e));
}
function o1(e) {
  typeof e != "function" && (e = ud(e));
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s)
    for (var l = n[s], u = l.length, c = i[s] = [], d, p = 0; p < u; ++p)
      (d = l[p]) && e.call(d, d.__data__, p, l) && c.push(d);
  return new ln(i, this._parents, this._name, this._id);
}
function i1(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var n = this._groups, r = e._groups, i = n.length, s = r.length, l = Math.min(i, s), u = new Array(i), c = 0; c < l; ++c)
    for (var d = n[c], p = r[c], g = d.length, h = u[c] = new Array(g), m, _ = 0; _ < g; ++_)
      (m = d[_] || p[_]) && (h[_] = m);
  for (; c < i; ++c)
    u[c] = n[c];
  return new ln(u, this._parents, this._name, this._id);
}
function s1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(n) {
    var r = n.indexOf(".");
    return r >= 0 && (n = n.slice(0, r)), !n || n === "start";
  });
}
function a1(e, n, r) {
  var i, s, l = s1(n) ? Fa : Kt;
  return function() {
    var u = l(this, e), c = u.on;
    c !== i && (s = (i = c).copy()).on(n, r), u.on = s;
  };
}
function l1(e, n) {
  var r = this._id;
  return arguments.length < 2 ? kt(this.node(), r).on.on(e) : this.each(a1(r, e, n));
}
function u1(e) {
  return function() {
    var n = this.parentNode;
    for (var r in this.__transition)
      if (+r !== e)
        return;
    n && n.removeChild(this);
  };
}
function c1() {
  return this.on("end.remove", u1(this._id));
}
function f1(e) {
  var n = this._name, r = this._id;
  typeof e != "function" && (e = Ba(e));
  for (var i = this._groups, s = i.length, l = new Array(s), u = 0; u < s; ++u)
    for (var c = i[u], d = c.length, p = l[u] = new Array(d), g, h, m = 0; m < d; ++m)
      (g = c[m]) && (h = e.call(g, g.__data__, m, c)) && ("__data__" in g && (h.__data__ = g.__data__), p[m] = h, bi(p[m], n, r, m, p, kt(g, r)));
  return new ln(l, this._parents, n, r);
}
function d1(e) {
  var n = this._name, r = this._id;
  typeof e != "function" && (e = ld(e));
  for (var i = this._groups, s = i.length, l = [], u = [], c = 0; c < s; ++c)
    for (var d = i[c], p = d.length, g, h = 0; h < p; ++h)
      if (g = d[h]) {
        for (var m = e.call(g, g.__data__, h, d), _, w = kt(g, r), A = 0, x = m.length; A < x; ++A)
          (_ = m[A]) && bi(_, n, r, A, m, w);
        l.push(m), u.push(g);
      }
  return new ln(l, u, n, r);
}
var p1 = jr.prototype.constructor;
function h1() {
  return new p1(this._groups, this._parents);
}
function g1(e, n) {
  var r, i, s;
  return function() {
    var l = ir(this, e), u = (this.style.removeProperty(e), ir(this, e));
    return l === u ? null : l === r && u === i ? s : s = n(r = l, i = u);
  };
}
function xd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function v1(e, n, r) {
  var i, s = r + "", l;
  return function() {
    var u = ir(this, e);
    return u === s ? null : u === i ? l : l = n(i = u, r);
  };
}
function m1(e, n, r) {
  var i, s, l;
  return function() {
    var u = ir(this, e), c = r(this), d = c + "";
    return c == null && (d = c = (this.style.removeProperty(e), ir(this, e))), u === d ? null : u === i && d === s ? l : (s = d, l = n(i = u, c));
  };
}
function y1(e, n) {
  var r, i, s, l = "style." + n, u = "end." + l, c;
  return function() {
    var d = Kt(this, e), p = d.on, g = d.value[l] == null ? c || (c = xd(n)) : void 0;
    (p !== r || s !== g) && (i = (r = p).copy()).on(u, s = g), d.on = i;
  };
}
function b1(e, n, r) {
  var i = (e += "") == "transform" ? W0 : wd;
  return n == null ? this.styleTween(e, g1(e, i)).on("end.style." + e, xd(e)) : typeof n == "function" ? this.styleTween(e, m1(e, i, $a(this, "style." + e, n))).each(y1(this._id, e)) : this.styleTween(e, v1(e, i, n), r).on("end.style." + e, null);
}
function _1(e, n, r) {
  return function(i) {
    this.style.setProperty(e, n.call(this, i), r);
  };
}
function E1(e, n, r) {
  var i, s;
  function l() {
    var u = n.apply(this, arguments);
    return u !== s && (i = (s = u) && _1(e, u, r)), i;
  }
  return l._value = n, l;
}
function w1(e, n, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (n == null)
    return this.tween(i, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(i, E1(e, n, r ?? ""));
}
function x1(e) {
  return function() {
    this.textContent = e;
  };
}
function S1(e) {
  return function() {
    var n = e(this);
    this.textContent = n ?? "";
  };
}
function D1(e) {
  return this.tween("text", typeof e == "function" ? S1($a(this, "text", e)) : x1(e == null ? "" : e + ""));
}
function C1(e) {
  return function(n) {
    this.textContent = e.call(this, n);
  };
}
function A1(e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && C1(s)), n;
  }
  return i._value = e, i;
}
function I1(e) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(n, A1(e));
}
function N1() {
  for (var e = this._name, n = this._id, r = Sd(), i = this._groups, s = i.length, l = 0; l < s; ++l)
    for (var u = i[l], c = u.length, d, p = 0; p < c; ++p)
      if (d = u[p]) {
        var g = kt(d, n);
        bi(d, e, r, p, u, {
          time: g.time + g.delay + g.duration,
          delay: 0,
          duration: g.duration,
          ease: g.ease
        });
      }
  return new ln(i, this._parents, e, r);
}
function O1() {
  var e, n, r = this, i = r._id, s = r.size();
  return new Promise(function(l, u) {
    var c = { value: u }, d = { value: function() {
      --s === 0 && l();
    } };
    r.each(function() {
      var p = Kt(this, i), g = p.on;
      g !== e && (n = (e = g).copy(), n._.cancel.push(c), n._.interrupt.push(c), n._.end.push(d)), p.on = n;
    }), s === 0 && l();
  });
}
var R1 = 0;
function ln(e, n, r, i) {
  this._groups = e, this._parents = n, this._name = r, this._id = i;
}
function Sd() {
  return ++R1;
}
var an = jr.prototype;
ln.prototype = {
  constructor: ln,
  select: f1,
  selectAll: d1,
  selectChild: an.selectChild,
  selectChildren: an.selectChildren,
  filter: o1,
  merge: i1,
  selection: h1,
  transition: N1,
  call: an.call,
  nodes: an.nodes,
  node: an.node,
  size: an.size,
  empty: an.empty,
  each: an.each,
  on: l1,
  attr: Uw,
  attrTween: Yw,
  style: b1,
  styleTween: w1,
  text: D1,
  textTween: I1,
  remove: c1,
  tween: Lw,
  delay: Jw,
  duration: jw,
  ease: t1,
  easeVarying: r1,
  end: O1,
  [Symbol.iterator]: an[Symbol.iterator]
};
function P1(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var T1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: P1
};
function B1(e, n) {
  for (var r; !(r = e.__transition) || !(r = r[n]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${n} not found`);
  return r;
}
function L1(e) {
  var n, r;
  e instanceof ln ? (n = e._id, e = e._name) : (n = Sd(), (r = T1).time = Ma(), e = e == null ? null : e + "");
  for (var i = this._groups, s = i.length, l = 0; l < s; ++l)
    for (var u = i[l], c = u.length, d, p = 0; p < c; ++p)
      (d = u[p]) && bi(d, e, n, p, u, r || B1(d, n));
  return new ln(i, this._parents, e, n);
}
jr.prototype.interrupt = Pw;
jr.prototype.transition = L1;
function rr(e, n, r) {
  this.k = e, this.x = n, this.y = r;
}
rr.prototype = {
  constructor: rr,
  scale: function(e) {
    return e === 1 ? this : new rr(this.k * e, this.x, this.y);
  },
  translate: function(e, n) {
    return e === 0 & n === 0 ? this : new rr(this.k, this.x + this.k * e, this.y + this.k * n);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var DN = new rr(1, 0, 0);
rr.prototype;
var ci = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ci.exports;
(function(e, n) {
  (function() {
    var r, i = "4.17.21", s = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", c = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", p = 500, g = "__lodash_placeholder__", h = 1, m = 2, _ = 4, w = 1, A = 2, x = 1, M = 2, B = 4, R = 8, P = 16, I = 32, $ = 64, G = 128, Y = 256, U = 512, H = 30, ne = "...", Q = 800, ue = 16, ge = 1, Oe = 2, Fe = 3, De = 1 / 0, Re = 9007199254740991, Ae = 17976931348623157e292, ke = 0 / 0, Me = 4294967295, Tt = Me - 1, Te = Me >>> 1, un = [
      ["ary", G],
      ["bind", x],
      ["bindKey", M],
      ["curry", R],
      ["curryRight", P],
      ["flip", U],
      ["partial", I],
      ["partialRight", $],
      ["rearg", Y]
    ], rt = "[object Arguments]", bt = "[object Array]", cn = "[object AsyncFunction]", Bt = "[object Boolean]", ot = "[object Date]", Xt = "[object DOMException]", Jt = "[object Error]", q = "[object Function]", it = "[object GeneratorFunction]", K = "[object Map]", _t = "[object Number]", Wn = "[object Null]", Et = "[object Object]", hl = "[object Promise]", Xp = "[object Proxy]", dr = "[object RegExp]", Lt = "[object Set]", pr = "[object String]", so = "[object Symbol]", Jp = "[object Undefined]", hr = "[object WeakMap]", Zp = "[object WeakSet]", gr = "[object ArrayBuffer]", Gn = "[object DataView]", Ci = "[object Float32Array]", Ai = "[object Float64Array]", Ii = "[object Int8Array]", Ni = "[object Int16Array]", Oi = "[object Int32Array]", Ri = "[object Uint8Array]", Pi = "[object Uint8ClampedArray]", Ti = "[object Uint16Array]", Bi = "[object Uint32Array]", Qp = /\b__p \+= '';/g, jp = /\b(__p \+=) '' \+/g, eh = /(__e\(.*?\)|\b__t\)) \+\n'';/g, gl = /&(?:amp|lt|gt|quot|#39);/g, vl = /[&<>"']/g, th = RegExp(gl.source), nh = RegExp(vl.source), rh = /<%-([\s\S]+?)%>/g, oh = /<%([\s\S]+?)%>/g, ml = /<%=([\s\S]+?)%>/g, ih = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sh = /^\w*$/, ah = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Li = /[\\^$.*+?()[\]{}|]/g, lh = RegExp(Li.source), Mi = /^\s+/, uh = /\s/, ch = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, fh = /\{\n\/\* \[wrapped with (.+)\] \*/, dh = /,? & /, ph = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, hh = /[()=,{}\[\]\/\s]/, gh = /\\(\\)?/g, vh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, yl = /\w*$/, mh = /^[-+]0x[0-9a-f]+$/i, yh = /^0b[01]+$/i, bh = /^\[object .+?Constructor\]$/, _h = /^0o[0-7]+$/i, Eh = /^(?:0|[1-9]\d*)$/, wh = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ao = /($^)/, xh = /['\n\r\u2028\u2029\\]/g, lo = "\\ud800-\\udfff", Sh = "\\u0300-\\u036f", Dh = "\\ufe20-\\ufe2f", Ch = "\\u20d0-\\u20ff", bl = Sh + Dh + Ch, _l = "\\u2700-\\u27bf", El = "a-z\\xdf-\\xf6\\xf8-\\xff", Ah = "\\xac\\xb1\\xd7\\xf7", Ih = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Nh = "\\u2000-\\u206f", Oh = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", wl = "A-Z\\xc0-\\xd6\\xd8-\\xde", xl = "\\ufe0e\\ufe0f", Sl = Ah + Ih + Nh + Oh, Fi = "['’]", Rh = "[" + lo + "]", Dl = "[" + Sl + "]", uo = "[" + bl + "]", Cl = "\\d+", Ph = "[" + _l + "]", Al = "[" + El + "]", Il = "[^" + lo + Sl + Cl + _l + El + wl + "]", $i = "\\ud83c[\\udffb-\\udfff]", Th = "(?:" + uo + "|" + $i + ")", Nl = "[^" + lo + "]", Vi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Wi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Un = "[" + wl + "]", Ol = "\\u200d", Rl = "(?:" + Al + "|" + Il + ")", Bh = "(?:" + Un + "|" + Il + ")", Pl = "(?:" + Fi + "(?:d|ll|m|re|s|t|ve))?", Tl = "(?:" + Fi + "(?:D|LL|M|RE|S|T|VE))?", Bl = Th + "?", Ll = "[" + xl + "]?", Lh = "(?:" + Ol + "(?:" + [Nl, Vi, Wi].join("|") + ")" + Ll + Bl + ")*", Mh = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Fh = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ml = Ll + Bl + Lh, $h = "(?:" + [Ph, Vi, Wi].join("|") + ")" + Ml, Vh = "(?:" + [Nl + uo + "?", uo, Vi, Wi, Rh].join("|") + ")", Wh = RegExp(Fi, "g"), Gh = RegExp(uo, "g"), Gi = RegExp($i + "(?=" + $i + ")|" + Vh + Ml, "g"), Uh = RegExp([
      Un + "?" + Al + "+" + Pl + "(?=" + [Dl, Un, "$"].join("|") + ")",
      Bh + "+" + Tl + "(?=" + [Dl, Un + Rl, "$"].join("|") + ")",
      Un + "?" + Rl + "+" + Pl,
      Un + "+" + Tl,
      Fh,
      Mh,
      Cl,
      $h
    ].join("|"), "g"), kh = RegExp("[" + Ol + lo + bl + xl + "]"), Hh = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, qh = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], zh = -1, Ce = {};
    Ce[Ci] = Ce[Ai] = Ce[Ii] = Ce[Ni] = Ce[Oi] = Ce[Ri] = Ce[Pi] = Ce[Ti] = Ce[Bi] = !0, Ce[rt] = Ce[bt] = Ce[gr] = Ce[Bt] = Ce[Gn] = Ce[ot] = Ce[Jt] = Ce[q] = Ce[K] = Ce[_t] = Ce[Et] = Ce[dr] = Ce[Lt] = Ce[pr] = Ce[hr] = !1;
    var xe = {};
    xe[rt] = xe[bt] = xe[gr] = xe[Gn] = xe[Bt] = xe[ot] = xe[Ci] = xe[Ai] = xe[Ii] = xe[Ni] = xe[Oi] = xe[K] = xe[_t] = xe[Et] = xe[dr] = xe[Lt] = xe[pr] = xe[so] = xe[Ri] = xe[Pi] = xe[Ti] = xe[Bi] = !0, xe[Jt] = xe[q] = xe[hr] = !1;
    var Yh = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Kh = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Xh = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Jh = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Zh = parseFloat, Qh = parseInt, Fl = typeof Rr == "object" && Rr && Rr.Object === Object && Rr, jh = typeof self == "object" && self && self.Object === Object && self, He = Fl || jh || Function("return this")(), Ui = n && !n.nodeType && n, Dn = Ui && !0 && e && !e.nodeType && e, $l = Dn && Dn.exports === Ui, ki = $l && Fl.process, wt = function() {
      try {
        var C = Dn && Dn.require && Dn.require("util").types;
        return C || ki && ki.binding && ki.binding("util");
      } catch {
      }
    }(), Vl = wt && wt.isArrayBuffer, Wl = wt && wt.isDate, Gl = wt && wt.isMap, Ul = wt && wt.isRegExp, kl = wt && wt.isSet, Hl = wt && wt.isTypedArray;
    function ct(C, T, O) {
      switch (O.length) {
        case 0:
          return C.call(T);
        case 1:
          return C.call(T, O[0]);
        case 2:
          return C.call(T, O[0], O[1]);
        case 3:
          return C.call(T, O[0], O[1], O[2]);
      }
      return C.apply(T, O);
    }
    function eg(C, T, O, X) {
      for (var re = -1, he = C == null ? 0 : C.length; ++re < he; ) {
        var $e = C[re];
        T(X, $e, O($e), C);
      }
      return X;
    }
    function xt(C, T) {
      for (var O = -1, X = C == null ? 0 : C.length; ++O < X && T(C[O], O, C) !== !1; )
        ;
      return C;
    }
    function tg(C, T) {
      for (var O = C == null ? 0 : C.length; O-- && T(C[O], O, C) !== !1; )
        ;
      return C;
    }
    function ql(C, T) {
      for (var O = -1, X = C == null ? 0 : C.length; ++O < X; )
        if (!T(C[O], O, C))
          return !1;
      return !0;
    }
    function fn(C, T) {
      for (var O = -1, X = C == null ? 0 : C.length, re = 0, he = []; ++O < X; ) {
        var $e = C[O];
        T($e, O, C) && (he[re++] = $e);
      }
      return he;
    }
    function co(C, T) {
      var O = C == null ? 0 : C.length;
      return !!O && kn(C, T, 0) > -1;
    }
    function Hi(C, T, O) {
      for (var X = -1, re = C == null ? 0 : C.length; ++X < re; )
        if (O(T, C[X]))
          return !0;
      return !1;
    }
    function Ie(C, T) {
      for (var O = -1, X = C == null ? 0 : C.length, re = Array(X); ++O < X; )
        re[O] = T(C[O], O, C);
      return re;
    }
    function dn(C, T) {
      for (var O = -1, X = T.length, re = C.length; ++O < X; )
        C[re + O] = T[O];
      return C;
    }
    function qi(C, T, O, X) {
      var re = -1, he = C == null ? 0 : C.length;
      for (X && he && (O = C[++re]); ++re < he; )
        O = T(O, C[re], re, C);
      return O;
    }
    function ng(C, T, O, X) {
      var re = C == null ? 0 : C.length;
      for (X && re && (O = C[--re]); re--; )
        O = T(O, C[re], re, C);
      return O;
    }
    function zi(C, T) {
      for (var O = -1, X = C == null ? 0 : C.length; ++O < X; )
        if (T(C[O], O, C))
          return !0;
      return !1;
    }
    var rg = Yi("length");
    function og(C) {
      return C.split("");
    }
    function ig(C) {
      return C.match(ph) || [];
    }
    function zl(C, T, O) {
      var X;
      return O(C, function(re, he, $e) {
        if (T(re, he, $e))
          return X = he, !1;
      }), X;
    }
    function fo(C, T, O, X) {
      for (var re = C.length, he = O + (X ? 1 : -1); X ? he-- : ++he < re; )
        if (T(C[he], he, C))
          return he;
      return -1;
    }
    function kn(C, T, O) {
      return T === T ? mg(C, T, O) : fo(C, Yl, O);
    }
    function sg(C, T, O, X) {
      for (var re = O - 1, he = C.length; ++re < he; )
        if (X(C[re], T))
          return re;
      return -1;
    }
    function Yl(C) {
      return C !== C;
    }
    function Kl(C, T) {
      var O = C == null ? 0 : C.length;
      return O ? Xi(C, T) / O : ke;
    }
    function Yi(C) {
      return function(T) {
        return T == null ? r : T[C];
      };
    }
    function Ki(C) {
      return function(T) {
        return C == null ? r : C[T];
      };
    }
    function Xl(C, T, O, X, re) {
      return re(C, function(he, $e, we) {
        O = X ? (X = !1, he) : T(O, he, $e, we);
      }), O;
    }
    function ag(C, T) {
      var O = C.length;
      for (C.sort(T); O--; )
        C[O] = C[O].value;
      return C;
    }
    function Xi(C, T) {
      for (var O, X = -1, re = C.length; ++X < re; ) {
        var he = T(C[X]);
        he !== r && (O = O === r ? he : O + he);
      }
      return O;
    }
    function Ji(C, T) {
      for (var O = -1, X = Array(C); ++O < C; )
        X[O] = T(O);
      return X;
    }
    function lg(C, T) {
      return Ie(T, function(O) {
        return [O, C[O]];
      });
    }
    function Jl(C) {
      return C && C.slice(0, eu(C) + 1).replace(Mi, "");
    }
    function ft(C) {
      return function(T) {
        return C(T);
      };
    }
    function Zi(C, T) {
      return Ie(T, function(O) {
        return C[O];
      });
    }
    function vr(C, T) {
      return C.has(T);
    }
    function Zl(C, T) {
      for (var O = -1, X = C.length; ++O < X && kn(T, C[O], 0) > -1; )
        ;
      return O;
    }
    function Ql(C, T) {
      for (var O = C.length; O-- && kn(T, C[O], 0) > -1; )
        ;
      return O;
    }
    function ug(C, T) {
      for (var O = C.length, X = 0; O--; )
        C[O] === T && ++X;
      return X;
    }
    var cg = Ki(Yh), fg = Ki(Kh);
    function dg(C) {
      return "\\" + Jh[C];
    }
    function pg(C, T) {
      return C == null ? r : C[T];
    }
    function Hn(C) {
      return kh.test(C);
    }
    function hg(C) {
      return Hh.test(C);
    }
    function gg(C) {
      for (var T, O = []; !(T = C.next()).done; )
        O.push(T.value);
      return O;
    }
    function Qi(C) {
      var T = -1, O = Array(C.size);
      return C.forEach(function(X, re) {
        O[++T] = [re, X];
      }), O;
    }
    function jl(C, T) {
      return function(O) {
        return C(T(O));
      };
    }
    function pn(C, T) {
      for (var O = -1, X = C.length, re = 0, he = []; ++O < X; ) {
        var $e = C[O];
        ($e === T || $e === g) && (C[O] = g, he[re++] = O);
      }
      return he;
    }
    function po(C) {
      var T = -1, O = Array(C.size);
      return C.forEach(function(X) {
        O[++T] = X;
      }), O;
    }
    function vg(C) {
      var T = -1, O = Array(C.size);
      return C.forEach(function(X) {
        O[++T] = [X, X];
      }), O;
    }
    function mg(C, T, O) {
      for (var X = O - 1, re = C.length; ++X < re; )
        if (C[X] === T)
          return X;
      return -1;
    }
    function yg(C, T, O) {
      for (var X = O + 1; X--; )
        if (C[X] === T)
          return X;
      return X;
    }
    function qn(C) {
      return Hn(C) ? _g(C) : rg(C);
    }
    function Mt(C) {
      return Hn(C) ? Eg(C) : og(C);
    }
    function eu(C) {
      for (var T = C.length; T-- && uh.test(C.charAt(T)); )
        ;
      return T;
    }
    var bg = Ki(Xh);
    function _g(C) {
      for (var T = Gi.lastIndex = 0; Gi.test(C); )
        ++T;
      return T;
    }
    function Eg(C) {
      return C.match(Gi) || [];
    }
    function wg(C) {
      return C.match(Uh) || [];
    }
    var xg = function C(T) {
      T = T == null ? He : zn.defaults(He.Object(), T, zn.pick(He, qh));
      var O = T.Array, X = T.Date, re = T.Error, he = T.Function, $e = T.Math, we = T.Object, ji = T.RegExp, Sg = T.String, St = T.TypeError, ho = O.prototype, Dg = he.prototype, Yn = we.prototype, go = T["__core-js_shared__"], vo = Dg.toString, Ee = Yn.hasOwnProperty, Cg = 0, tu = function() {
        var t = /[^.]+$/.exec(go && go.keys && go.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), mo = Yn.toString, Ag = vo.call(we), Ig = He._, Ng = ji(
        "^" + vo.call(Ee).replace(Li, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), yo = $l ? T.Buffer : r, hn = T.Symbol, bo = T.Uint8Array, nu = yo ? yo.allocUnsafe : r, _o = jl(we.getPrototypeOf, we), ru = we.create, ou = Yn.propertyIsEnumerable, Eo = ho.splice, iu = hn ? hn.isConcatSpreadable : r, mr = hn ? hn.iterator : r, Cn = hn ? hn.toStringTag : r, wo = function() {
        try {
          var t = Rn(we, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Og = T.clearTimeout !== He.clearTimeout && T.clearTimeout, Rg = X && X.now !== He.Date.now && X.now, Pg = T.setTimeout !== He.setTimeout && T.setTimeout, xo = $e.ceil, So = $e.floor, es = we.getOwnPropertySymbols, Tg = yo ? yo.isBuffer : r, su = T.isFinite, Bg = ho.join, Lg = jl(we.keys, we), Ve = $e.max, Ye = $e.min, Mg = X.now, Fg = T.parseInt, au = $e.random, $g = ho.reverse, ts = Rn(T, "DataView"), yr = Rn(T, "Map"), ns = Rn(T, "Promise"), Kn = Rn(T, "Set"), br = Rn(T, "WeakMap"), _r = Rn(we, "create"), Do = br && new br(), Xn = {}, Vg = Pn(ts), Wg = Pn(yr), Gg = Pn(ns), Ug = Pn(Kn), kg = Pn(br), Co = hn ? hn.prototype : r, Er = Co ? Co.valueOf : r, lu = Co ? Co.toString : r;
      function y(t) {
        if (Pe(t) && !oe(t) && !(t instanceof fe)) {
          if (t instanceof Dt)
            return t;
          if (Ee.call(t, "__wrapped__"))
            return uc(t);
        }
        return new Dt(t);
      }
      var Jn = function() {
        function t() {
        }
        return function(o) {
          if (!Ne(o))
            return {};
          if (ru)
            return ru(o);
          t.prototype = o;
          var a = new t();
          return t.prototype = r, a;
        };
      }();
      function Ao() {
      }
      function Dt(t, o) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
      }
      y.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: rh,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: oh,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ml,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: y
        }
      }, y.prototype = Ao.prototype, y.prototype.constructor = y, Dt.prototype = Jn(Ao.prototype), Dt.prototype.constructor = Dt;
      function fe(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Me, this.__views__ = [];
      }
      function Hg() {
        var t = new fe(this.__wrapped__);
        return t.__actions__ = st(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = st(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = st(this.__views__), t;
      }
      function qg() {
        if (this.__filtered__) {
          var t = new fe(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function zg() {
        var t = this.__wrapped__.value(), o = this.__dir__, a = oe(t), f = o < 0, v = a ? t.length : 0, b = om(0, v, this.__views__), E = b.start, S = b.end, N = S - E, L = f ? S : E - 1, F = this.__iteratees__, V = F.length, k = 0, J = Ye(N, this.__takeCount__);
        if (!a || !f && v == N && J == N)
          return Pu(t, this.__actions__);
        var ee = [];
        e:
          for (; N-- && k < J; ) {
            L += o;
            for (var ae = -1, te = t[L]; ++ae < V; ) {
              var ce = F[ae], de = ce.iteratee, ht = ce.type, Qe = de(te);
              if (ht == Oe)
                te = Qe;
              else if (!Qe) {
                if (ht == ge)
                  continue e;
                break e;
              }
            }
            ee[k++] = te;
          }
        return ee;
      }
      fe.prototype = Jn(Ao.prototype), fe.prototype.constructor = fe;
      function An(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var f = t[o];
          this.set(f[0], f[1]);
        }
      }
      function Yg() {
        this.__data__ = _r ? _r(null) : {}, this.size = 0;
      }
      function Kg(t) {
        var o = this.has(t) && delete this.__data__[t];
        return this.size -= o ? 1 : 0, o;
      }
      function Xg(t) {
        var o = this.__data__;
        if (_r) {
          var a = o[t];
          return a === d ? r : a;
        }
        return Ee.call(o, t) ? o[t] : r;
      }
      function Jg(t) {
        var o = this.__data__;
        return _r ? o[t] !== r : Ee.call(o, t);
      }
      function Zg(t, o) {
        var a = this.__data__;
        return this.size += this.has(t) ? 0 : 1, a[t] = _r && o === r ? d : o, this;
      }
      An.prototype.clear = Yg, An.prototype.delete = Kg, An.prototype.get = Xg, An.prototype.has = Jg, An.prototype.set = Zg;
      function Zt(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var f = t[o];
          this.set(f[0], f[1]);
        }
      }
      function Qg() {
        this.__data__ = [], this.size = 0;
      }
      function jg(t) {
        var o = this.__data__, a = Io(o, t);
        if (a < 0)
          return !1;
        var f = o.length - 1;
        return a == f ? o.pop() : Eo.call(o, a, 1), --this.size, !0;
      }
      function ev(t) {
        var o = this.__data__, a = Io(o, t);
        return a < 0 ? r : o[a][1];
      }
      function tv(t) {
        return Io(this.__data__, t) > -1;
      }
      function nv(t, o) {
        var a = this.__data__, f = Io(a, t);
        return f < 0 ? (++this.size, a.push([t, o])) : a[f][1] = o, this;
      }
      Zt.prototype.clear = Qg, Zt.prototype.delete = jg, Zt.prototype.get = ev, Zt.prototype.has = tv, Zt.prototype.set = nv;
      function Qt(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var f = t[o];
          this.set(f[0], f[1]);
        }
      }
      function rv() {
        this.size = 0, this.__data__ = {
          hash: new An(),
          map: new (yr || Zt)(),
          string: new An()
        };
      }
      function ov(t) {
        var o = Wo(this, t).delete(t);
        return this.size -= o ? 1 : 0, o;
      }
      function iv(t) {
        return Wo(this, t).get(t);
      }
      function sv(t) {
        return Wo(this, t).has(t);
      }
      function av(t, o) {
        var a = Wo(this, t), f = a.size;
        return a.set(t, o), this.size += a.size == f ? 0 : 1, this;
      }
      Qt.prototype.clear = rv, Qt.prototype.delete = ov, Qt.prototype.get = iv, Qt.prototype.has = sv, Qt.prototype.set = av;
      function In(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.__data__ = new Qt(); ++o < a; )
          this.add(t[o]);
      }
      function lv(t) {
        return this.__data__.set(t, d), this;
      }
      function uv(t) {
        return this.__data__.has(t);
      }
      In.prototype.add = In.prototype.push = lv, In.prototype.has = uv;
      function Ft(t) {
        var o = this.__data__ = new Zt(t);
        this.size = o.size;
      }
      function cv() {
        this.__data__ = new Zt(), this.size = 0;
      }
      function fv(t) {
        var o = this.__data__, a = o.delete(t);
        return this.size = o.size, a;
      }
      function dv(t) {
        return this.__data__.get(t);
      }
      function pv(t) {
        return this.__data__.has(t);
      }
      function hv(t, o) {
        var a = this.__data__;
        if (a instanceof Zt) {
          var f = a.__data__;
          if (!yr || f.length < s - 1)
            return f.push([t, o]), this.size = ++a.size, this;
          a = this.__data__ = new Qt(f);
        }
        return a.set(t, o), this.size = a.size, this;
      }
      Ft.prototype.clear = cv, Ft.prototype.delete = fv, Ft.prototype.get = dv, Ft.prototype.has = pv, Ft.prototype.set = hv;
      function uu(t, o) {
        var a = oe(t), f = !a && Tn(t), v = !a && !f && bn(t), b = !a && !f && !v && er(t), E = a || f || v || b, S = E ? Ji(t.length, Sg) : [], N = S.length;
        for (var L in t)
          (o || Ee.call(t, L)) && !(E && // Safari 9 has enumerable `arguments.length` in strict mode.
          (L == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          v && (L == "offset" || L == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (L == "buffer" || L == "byteLength" || L == "byteOffset") || // Skip index properties.
          nn(L, N))) && S.push(L);
        return S;
      }
      function cu(t) {
        var o = t.length;
        return o ? t[ps(0, o - 1)] : r;
      }
      function gv(t, o) {
        return Go(st(t), Nn(o, 0, t.length));
      }
      function vv(t) {
        return Go(st(t));
      }
      function rs(t, o, a) {
        (a !== r && !$t(t[o], a) || a === r && !(o in t)) && jt(t, o, a);
      }
      function wr(t, o, a) {
        var f = t[o];
        (!(Ee.call(t, o) && $t(f, a)) || a === r && !(o in t)) && jt(t, o, a);
      }
      function Io(t, o) {
        for (var a = t.length; a--; )
          if ($t(t[a][0], o))
            return a;
        return -1;
      }
      function mv(t, o, a, f) {
        return gn(t, function(v, b, E) {
          o(f, v, a(v), E);
        }), f;
      }
      function fu(t, o) {
        return t && qt(o, We(o), t);
      }
      function yv(t, o) {
        return t && qt(o, lt(o), t);
      }
      function jt(t, o, a) {
        o == "__proto__" && wo ? wo(t, o, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : t[o] = a;
      }
      function os(t, o) {
        for (var a = -1, f = o.length, v = O(f), b = t == null; ++a < f; )
          v[a] = b ? r : $s(t, o[a]);
        return v;
      }
      function Nn(t, o, a) {
        return t === t && (a !== r && (t = t <= a ? t : a), o !== r && (t = t >= o ? t : o)), t;
      }
      function Ct(t, o, a, f, v, b) {
        var E, S = o & h, N = o & m, L = o & _;
        if (a && (E = v ? a(t, f, v, b) : a(t)), E !== r)
          return E;
        if (!Ne(t))
          return t;
        var F = oe(t);
        if (F) {
          if (E = sm(t), !S)
            return st(t, E);
        } else {
          var V = Ke(t), k = V == q || V == it;
          if (bn(t))
            return Lu(t, S);
          if (V == Et || V == rt || k && !v) {
            if (E = N || k ? {} : ec(t), !S)
              return N ? Xv(t, yv(E, t)) : Kv(t, fu(E, t));
          } else {
            if (!xe[V])
              return v ? t : {};
            E = am(t, V, S);
          }
        }
        b || (b = new Ft());
        var J = b.get(t);
        if (J)
          return J;
        b.set(t, E), Nc(t) ? t.forEach(function(te) {
          E.add(Ct(te, o, a, te, t, b));
        }) : Ac(t) && t.forEach(function(te, ce) {
          E.set(ce, Ct(te, o, a, ce, t, b));
        });
        var ee = L ? N ? Ss : xs : N ? lt : We, ae = F ? r : ee(t);
        return xt(ae || t, function(te, ce) {
          ae && (ce = te, te = t[ce]), wr(E, ce, Ct(te, o, a, ce, t, b));
        }), E;
      }
      function bv(t) {
        var o = We(t);
        return function(a) {
          return du(a, t, o);
        };
      }
      function du(t, o, a) {
        var f = a.length;
        if (t == null)
          return !f;
        for (t = we(t); f--; ) {
          var v = a[f], b = o[v], E = t[v];
          if (E === r && !(v in t) || !b(E))
            return !1;
        }
        return !0;
      }
      function pu(t, o, a) {
        if (typeof t != "function")
          throw new St(u);
        return Nr(function() {
          t.apply(r, a);
        }, o);
      }
      function xr(t, o, a, f) {
        var v = -1, b = co, E = !0, S = t.length, N = [], L = o.length;
        if (!S)
          return N;
        a && (o = Ie(o, ft(a))), f ? (b = Hi, E = !1) : o.length >= s && (b = vr, E = !1, o = new In(o));
        e:
          for (; ++v < S; ) {
            var F = t[v], V = a == null ? F : a(F);
            if (F = f || F !== 0 ? F : 0, E && V === V) {
              for (var k = L; k--; )
                if (o[k] === V)
                  continue e;
              N.push(F);
            } else
              b(o, V, f) || N.push(F);
          }
        return N;
      }
      var gn = Wu(Ht), hu = Wu(ss, !0);
      function _v(t, o) {
        var a = !0;
        return gn(t, function(f, v, b) {
          return a = !!o(f, v, b), a;
        }), a;
      }
      function No(t, o, a) {
        for (var f = -1, v = t.length; ++f < v; ) {
          var b = t[f], E = o(b);
          if (E != null && (S === r ? E === E && !pt(E) : a(E, S)))
            var S = E, N = b;
        }
        return N;
      }
      function Ev(t, o, a, f) {
        var v = t.length;
        for (a = se(a), a < 0 && (a = -a > v ? 0 : v + a), f = f === r || f > v ? v : se(f), f < 0 && (f += v), f = a > f ? 0 : Rc(f); a < f; )
          t[a++] = o;
        return t;
      }
      function gu(t, o) {
        var a = [];
        return gn(t, function(f, v, b) {
          o(f, v, b) && a.push(f);
        }), a;
      }
      function qe(t, o, a, f, v) {
        var b = -1, E = t.length;
        for (a || (a = um), v || (v = []); ++b < E; ) {
          var S = t[b];
          o > 0 && a(S) ? o > 1 ? qe(S, o - 1, a, f, v) : dn(v, S) : f || (v[v.length] = S);
        }
        return v;
      }
      var is = Gu(), vu = Gu(!0);
      function Ht(t, o) {
        return t && is(t, o, We);
      }
      function ss(t, o) {
        return t && vu(t, o, We);
      }
      function Oo(t, o) {
        return fn(o, function(a) {
          return rn(t[a]);
        });
      }
      function On(t, o) {
        o = mn(o, t);
        for (var a = 0, f = o.length; t != null && a < f; )
          t = t[zt(o[a++])];
        return a && a == f ? t : r;
      }
      function mu(t, o, a) {
        var f = o(t);
        return oe(t) ? f : dn(f, a(t));
      }
      function Je(t) {
        return t == null ? t === r ? Jp : Wn : Cn && Cn in we(t) ? rm(t) : vm(t);
      }
      function as(t, o) {
        return t > o;
      }
      function wv(t, o) {
        return t != null && Ee.call(t, o);
      }
      function xv(t, o) {
        return t != null && o in we(t);
      }
      function Sv(t, o, a) {
        return t >= Ye(o, a) && t < Ve(o, a);
      }
      function ls(t, o, a) {
        for (var f = a ? Hi : co, v = t[0].length, b = t.length, E = b, S = O(b), N = 1 / 0, L = []; E--; ) {
          var F = t[E];
          E && o && (F = Ie(F, ft(o))), N = Ye(F.length, N), S[E] = !a && (o || v >= 120 && F.length >= 120) ? new In(E && F) : r;
        }
        F = t[0];
        var V = -1, k = S[0];
        e:
          for (; ++V < v && L.length < N; ) {
            var J = F[V], ee = o ? o(J) : J;
            if (J = a || J !== 0 ? J : 0, !(k ? vr(k, ee) : f(L, ee, a))) {
              for (E = b; --E; ) {
                var ae = S[E];
                if (!(ae ? vr(ae, ee) : f(t[E], ee, a)))
                  continue e;
              }
              k && k.push(ee), L.push(J);
            }
          }
        return L;
      }
      function Dv(t, o, a, f) {
        return Ht(t, function(v, b, E) {
          o(f, a(v), b, E);
        }), f;
      }
      function Sr(t, o, a) {
        o = mn(o, t), t = oc(t, o);
        var f = t == null ? t : t[zt(It(o))];
        return f == null ? r : ct(f, t, a);
      }
      function yu(t) {
        return Pe(t) && Je(t) == rt;
      }
      function Cv(t) {
        return Pe(t) && Je(t) == gr;
      }
      function Av(t) {
        return Pe(t) && Je(t) == ot;
      }
      function Dr(t, o, a, f, v) {
        return t === o ? !0 : t == null || o == null || !Pe(t) && !Pe(o) ? t !== t && o !== o : Iv(t, o, a, f, Dr, v);
      }
      function Iv(t, o, a, f, v, b) {
        var E = oe(t), S = oe(o), N = E ? bt : Ke(t), L = S ? bt : Ke(o);
        N = N == rt ? Et : N, L = L == rt ? Et : L;
        var F = N == Et, V = L == Et, k = N == L;
        if (k && bn(t)) {
          if (!bn(o))
            return !1;
          E = !0, F = !1;
        }
        if (k && !F)
          return b || (b = new Ft()), E || er(t) ? Zu(t, o, a, f, v, b) : tm(t, o, N, a, f, v, b);
        if (!(a & w)) {
          var J = F && Ee.call(t, "__wrapped__"), ee = V && Ee.call(o, "__wrapped__");
          if (J || ee) {
            var ae = J ? t.value() : t, te = ee ? o.value() : o;
            return b || (b = new Ft()), v(ae, te, a, f, b);
          }
        }
        return k ? (b || (b = new Ft()), nm(t, o, a, f, v, b)) : !1;
      }
      function Nv(t) {
        return Pe(t) && Ke(t) == K;
      }
      function us(t, o, a, f) {
        var v = a.length, b = v, E = !f;
        if (t == null)
          return !b;
        for (t = we(t); v--; ) {
          var S = a[v];
          if (E && S[2] ? S[1] !== t[S[0]] : !(S[0] in t))
            return !1;
        }
        for (; ++v < b; ) {
          S = a[v];
          var N = S[0], L = t[N], F = S[1];
          if (E && S[2]) {
            if (L === r && !(N in t))
              return !1;
          } else {
            var V = new Ft();
            if (f)
              var k = f(L, F, N, t, o, V);
            if (!(k === r ? Dr(F, L, w | A, f, V) : k))
              return !1;
          }
        }
        return !0;
      }
      function bu(t) {
        if (!Ne(t) || fm(t))
          return !1;
        var o = rn(t) ? Ng : bh;
        return o.test(Pn(t));
      }
      function Ov(t) {
        return Pe(t) && Je(t) == dr;
      }
      function Rv(t) {
        return Pe(t) && Ke(t) == Lt;
      }
      function Pv(t) {
        return Pe(t) && Yo(t.length) && !!Ce[Je(t)];
      }
      function _u(t) {
        return typeof t == "function" ? t : t == null ? ut : typeof t == "object" ? oe(t) ? xu(t[0], t[1]) : wu(t) : Uc(t);
      }
      function cs(t) {
        if (!Ir(t))
          return Lg(t);
        var o = [];
        for (var a in we(t))
          Ee.call(t, a) && a != "constructor" && o.push(a);
        return o;
      }
      function Tv(t) {
        if (!Ne(t))
          return gm(t);
        var o = Ir(t), a = [];
        for (var f in t)
          f == "constructor" && (o || !Ee.call(t, f)) || a.push(f);
        return a;
      }
      function fs(t, o) {
        return t < o;
      }
      function Eu(t, o) {
        var a = -1, f = at(t) ? O(t.length) : [];
        return gn(t, function(v, b, E) {
          f[++a] = o(v, b, E);
        }), f;
      }
      function wu(t) {
        var o = Cs(t);
        return o.length == 1 && o[0][2] ? nc(o[0][0], o[0][1]) : function(a) {
          return a === t || us(a, t, o);
        };
      }
      function xu(t, o) {
        return Is(t) && tc(o) ? nc(zt(t), o) : function(a) {
          var f = $s(a, t);
          return f === r && f === o ? Vs(a, t) : Dr(o, f, w | A);
        };
      }
      function Ro(t, o, a, f, v) {
        t !== o && is(o, function(b, E) {
          if (v || (v = new Ft()), Ne(b))
            Bv(t, o, E, a, Ro, f, v);
          else {
            var S = f ? f(Os(t, E), b, E + "", t, o, v) : r;
            S === r && (S = b), rs(t, E, S);
          }
        }, lt);
      }
      function Bv(t, o, a, f, v, b, E) {
        var S = Os(t, a), N = Os(o, a), L = E.get(N);
        if (L) {
          rs(t, a, L);
          return;
        }
        var F = b ? b(S, N, a + "", t, o, E) : r, V = F === r;
        if (V) {
          var k = oe(N), J = !k && bn(N), ee = !k && !J && er(N);
          F = N, k || J || ee ? oe(S) ? F = S : Be(S) ? F = st(S) : J ? (V = !1, F = Lu(N, !0)) : ee ? (V = !1, F = Mu(N, !0)) : F = [] : Or(N) || Tn(N) ? (F = S, Tn(S) ? F = Pc(S) : (!Ne(S) || rn(S)) && (F = ec(N))) : V = !1;
        }
        V && (E.set(N, F), v(F, N, f, b, E), E.delete(N)), rs(t, a, F);
      }
      function Su(t, o) {
        var a = t.length;
        if (a)
          return o += o < 0 ? a : 0, nn(o, a) ? t[o] : r;
      }
      function Du(t, o, a) {
        o.length ? o = Ie(o, function(b) {
          return oe(b) ? function(E) {
            return On(E, b.length === 1 ? b[0] : b);
          } : b;
        }) : o = [ut];
        var f = -1;
        o = Ie(o, ft(j()));
        var v = Eu(t, function(b, E, S) {
          var N = Ie(o, function(L) {
            return L(b);
          });
          return { criteria: N, index: ++f, value: b };
        });
        return ag(v, function(b, E) {
          return Yv(b, E, a);
        });
      }
      function Lv(t, o) {
        return Cu(t, o, function(a, f) {
          return Vs(t, f);
        });
      }
      function Cu(t, o, a) {
        for (var f = -1, v = o.length, b = {}; ++f < v; ) {
          var E = o[f], S = On(t, E);
          a(S, E) && Cr(b, mn(E, t), S);
        }
        return b;
      }
      function Mv(t) {
        return function(o) {
          return On(o, t);
        };
      }
      function ds(t, o, a, f) {
        var v = f ? sg : kn, b = -1, E = o.length, S = t;
        for (t === o && (o = st(o)), a && (S = Ie(t, ft(a))); ++b < E; )
          for (var N = 0, L = o[b], F = a ? a(L) : L; (N = v(S, F, N, f)) > -1; )
            S !== t && Eo.call(S, N, 1), Eo.call(t, N, 1);
        return t;
      }
      function Au(t, o) {
        for (var a = t ? o.length : 0, f = a - 1; a--; ) {
          var v = o[a];
          if (a == f || v !== b) {
            var b = v;
            nn(v) ? Eo.call(t, v, 1) : vs(t, v);
          }
        }
        return t;
      }
      function ps(t, o) {
        return t + So(au() * (o - t + 1));
      }
      function Fv(t, o, a, f) {
        for (var v = -1, b = Ve(xo((o - t) / (a || 1)), 0), E = O(b); b--; )
          E[f ? b : ++v] = t, t += a;
        return E;
      }
      function hs(t, o) {
        var a = "";
        if (!t || o < 1 || o > Re)
          return a;
        do
          o % 2 && (a += t), o = So(o / 2), o && (t += t);
        while (o);
        return a;
      }
      function le(t, o) {
        return Rs(rc(t, o, ut), t + "");
      }
      function $v(t) {
        return cu(tr(t));
      }
      function Vv(t, o) {
        var a = tr(t);
        return Go(a, Nn(o, 0, a.length));
      }
      function Cr(t, o, a, f) {
        if (!Ne(t))
          return t;
        o = mn(o, t);
        for (var v = -1, b = o.length, E = b - 1, S = t; S != null && ++v < b; ) {
          var N = zt(o[v]), L = a;
          if (N === "__proto__" || N === "constructor" || N === "prototype")
            return t;
          if (v != E) {
            var F = S[N];
            L = f ? f(F, N, S) : r, L === r && (L = Ne(F) ? F : nn(o[v + 1]) ? [] : {});
          }
          wr(S, N, L), S = S[N];
        }
        return t;
      }
      var Iu = Do ? function(t, o) {
        return Do.set(t, o), t;
      } : ut, Wv = wo ? function(t, o) {
        return wo(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Gs(o),
          writable: !0
        });
      } : ut;
      function Gv(t) {
        return Go(tr(t));
      }
      function At(t, o, a) {
        var f = -1, v = t.length;
        o < 0 && (o = -o > v ? 0 : v + o), a = a > v ? v : a, a < 0 && (a += v), v = o > a ? 0 : a - o >>> 0, o >>>= 0;
        for (var b = O(v); ++f < v; )
          b[f] = t[f + o];
        return b;
      }
      function Uv(t, o) {
        var a;
        return gn(t, function(f, v, b) {
          return a = o(f, v, b), !a;
        }), !!a;
      }
      function Po(t, o, a) {
        var f = 0, v = t == null ? f : t.length;
        if (typeof o == "number" && o === o && v <= Te) {
          for (; f < v; ) {
            var b = f + v >>> 1, E = t[b];
            E !== null && !pt(E) && (a ? E <= o : E < o) ? f = b + 1 : v = b;
          }
          return v;
        }
        return gs(t, o, ut, a);
      }
      function gs(t, o, a, f) {
        var v = 0, b = t == null ? 0 : t.length;
        if (b === 0)
          return 0;
        o = a(o);
        for (var E = o !== o, S = o === null, N = pt(o), L = o === r; v < b; ) {
          var F = So((v + b) / 2), V = a(t[F]), k = V !== r, J = V === null, ee = V === V, ae = pt(V);
          if (E)
            var te = f || ee;
          else
            L ? te = ee && (f || k) : S ? te = ee && k && (f || !J) : N ? te = ee && k && !J && (f || !ae) : J || ae ? te = !1 : te = f ? V <= o : V < o;
          te ? v = F + 1 : b = F;
        }
        return Ye(b, Tt);
      }
      function Nu(t, o) {
        for (var a = -1, f = t.length, v = 0, b = []; ++a < f; ) {
          var E = t[a], S = o ? o(E) : E;
          if (!a || !$t(S, N)) {
            var N = S;
            b[v++] = E === 0 ? 0 : E;
          }
        }
        return b;
      }
      function Ou(t) {
        return typeof t == "number" ? t : pt(t) ? ke : +t;
      }
      function dt(t) {
        if (typeof t == "string")
          return t;
        if (oe(t))
          return Ie(t, dt) + "";
        if (pt(t))
          return lu ? lu.call(t) : "";
        var o = t + "";
        return o == "0" && 1 / t == -De ? "-0" : o;
      }
      function vn(t, o, a) {
        var f = -1, v = co, b = t.length, E = !0, S = [], N = S;
        if (a)
          E = !1, v = Hi;
        else if (b >= s) {
          var L = o ? null : jv(t);
          if (L)
            return po(L);
          E = !1, v = vr, N = new In();
        } else
          N = o ? [] : S;
        e:
          for (; ++f < b; ) {
            var F = t[f], V = o ? o(F) : F;
            if (F = a || F !== 0 ? F : 0, E && V === V) {
              for (var k = N.length; k--; )
                if (N[k] === V)
                  continue e;
              o && N.push(V), S.push(F);
            } else
              v(N, V, a) || (N !== S && N.push(V), S.push(F));
          }
        return S;
      }
      function vs(t, o) {
        return o = mn(o, t), t = oc(t, o), t == null || delete t[zt(It(o))];
      }
      function Ru(t, o, a, f) {
        return Cr(t, o, a(On(t, o)), f);
      }
      function To(t, o, a, f) {
        for (var v = t.length, b = f ? v : -1; (f ? b-- : ++b < v) && o(t[b], b, t); )
          ;
        return a ? At(t, f ? 0 : b, f ? b + 1 : v) : At(t, f ? b + 1 : 0, f ? v : b);
      }
      function Pu(t, o) {
        var a = t;
        return a instanceof fe && (a = a.value()), qi(o, function(f, v) {
          return v.func.apply(v.thisArg, dn([f], v.args));
        }, a);
      }
      function ms(t, o, a) {
        var f = t.length;
        if (f < 2)
          return f ? vn(t[0]) : [];
        for (var v = -1, b = O(f); ++v < f; )
          for (var E = t[v], S = -1; ++S < f; )
            S != v && (b[v] = xr(b[v] || E, t[S], o, a));
        return vn(qe(b, 1), o, a);
      }
      function Tu(t, o, a) {
        for (var f = -1, v = t.length, b = o.length, E = {}; ++f < v; ) {
          var S = f < b ? o[f] : r;
          a(E, t[f], S);
        }
        return E;
      }
      function ys(t) {
        return Be(t) ? t : [];
      }
      function bs(t) {
        return typeof t == "function" ? t : ut;
      }
      function mn(t, o) {
        return oe(t) ? t : Is(t, o) ? [t] : lc(ve(t));
      }
      var kv = le;
      function yn(t, o, a) {
        var f = t.length;
        return a = a === r ? f : a, !o && a >= f ? t : At(t, o, a);
      }
      var Bu = Og || function(t) {
        return He.clearTimeout(t);
      };
      function Lu(t, o) {
        if (o)
          return t.slice();
        var a = t.length, f = nu ? nu(a) : new t.constructor(a);
        return t.copy(f), f;
      }
      function _s(t) {
        var o = new t.constructor(t.byteLength);
        return new bo(o).set(new bo(t)), o;
      }
      function Hv(t, o) {
        var a = o ? _s(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.byteLength);
      }
      function qv(t) {
        var o = new t.constructor(t.source, yl.exec(t));
        return o.lastIndex = t.lastIndex, o;
      }
      function zv(t) {
        return Er ? we(Er.call(t)) : {};
      }
      function Mu(t, o) {
        var a = o ? _s(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.length);
      }
      function Fu(t, o) {
        if (t !== o) {
          var a = t !== r, f = t === null, v = t === t, b = pt(t), E = o !== r, S = o === null, N = o === o, L = pt(o);
          if (!S && !L && !b && t > o || b && E && N && !S && !L || f && E && N || !a && N || !v)
            return 1;
          if (!f && !b && !L && t < o || L && a && v && !f && !b || S && a && v || !E && v || !N)
            return -1;
        }
        return 0;
      }
      function Yv(t, o, a) {
        for (var f = -1, v = t.criteria, b = o.criteria, E = v.length, S = a.length; ++f < E; ) {
          var N = Fu(v[f], b[f]);
          if (N) {
            if (f >= S)
              return N;
            var L = a[f];
            return N * (L == "desc" ? -1 : 1);
          }
        }
        return t.index - o.index;
      }
      function $u(t, o, a, f) {
        for (var v = -1, b = t.length, E = a.length, S = -1, N = o.length, L = Ve(b - E, 0), F = O(N + L), V = !f; ++S < N; )
          F[S] = o[S];
        for (; ++v < E; )
          (V || v < b) && (F[a[v]] = t[v]);
        for (; L--; )
          F[S++] = t[v++];
        return F;
      }
      function Vu(t, o, a, f) {
        for (var v = -1, b = t.length, E = -1, S = a.length, N = -1, L = o.length, F = Ve(b - S, 0), V = O(F + L), k = !f; ++v < F; )
          V[v] = t[v];
        for (var J = v; ++N < L; )
          V[J + N] = o[N];
        for (; ++E < S; )
          (k || v < b) && (V[J + a[E]] = t[v++]);
        return V;
      }
      function st(t, o) {
        var a = -1, f = t.length;
        for (o || (o = O(f)); ++a < f; )
          o[a] = t[a];
        return o;
      }
      function qt(t, o, a, f) {
        var v = !a;
        a || (a = {});
        for (var b = -1, E = o.length; ++b < E; ) {
          var S = o[b], N = f ? f(a[S], t[S], S, a, t) : r;
          N === r && (N = t[S]), v ? jt(a, S, N) : wr(a, S, N);
        }
        return a;
      }
      function Kv(t, o) {
        return qt(t, As(t), o);
      }
      function Xv(t, o) {
        return qt(t, Qu(t), o);
      }
      function Bo(t, o) {
        return function(a, f) {
          var v = oe(a) ? eg : mv, b = o ? o() : {};
          return v(a, t, j(f, 2), b);
        };
      }
      function Zn(t) {
        return le(function(o, a) {
          var f = -1, v = a.length, b = v > 1 ? a[v - 1] : r, E = v > 2 ? a[2] : r;
          for (b = t.length > 3 && typeof b == "function" ? (v--, b) : r, E && Ze(a[0], a[1], E) && (b = v < 3 ? r : b, v = 1), o = we(o); ++f < v; ) {
            var S = a[f];
            S && t(o, S, f, b);
          }
          return o;
        });
      }
      function Wu(t, o) {
        return function(a, f) {
          if (a == null)
            return a;
          if (!at(a))
            return t(a, f);
          for (var v = a.length, b = o ? v : -1, E = we(a); (o ? b-- : ++b < v) && f(E[b], b, E) !== !1; )
            ;
          return a;
        };
      }
      function Gu(t) {
        return function(o, a, f) {
          for (var v = -1, b = we(o), E = f(o), S = E.length; S--; ) {
            var N = E[t ? S : ++v];
            if (a(b[N], N, b) === !1)
              break;
          }
          return o;
        };
      }
      function Jv(t, o, a) {
        var f = o & x, v = Ar(t);
        function b() {
          var E = this && this !== He && this instanceof b ? v : t;
          return E.apply(f ? a : this, arguments);
        }
        return b;
      }
      function Uu(t) {
        return function(o) {
          o = ve(o);
          var a = Hn(o) ? Mt(o) : r, f = a ? a[0] : o.charAt(0), v = a ? yn(a, 1).join("") : o.slice(1);
          return f[t]() + v;
        };
      }
      function Qn(t) {
        return function(o) {
          return qi(Wc(Vc(o).replace(Wh, "")), t, "");
        };
      }
      function Ar(t) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new t();
            case 1:
              return new t(o[0]);
            case 2:
              return new t(o[0], o[1]);
            case 3:
              return new t(o[0], o[1], o[2]);
            case 4:
              return new t(o[0], o[1], o[2], o[3]);
            case 5:
              return new t(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new t(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new t(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var a = Jn(t.prototype), f = t.apply(a, o);
          return Ne(f) ? f : a;
        };
      }
      function Zv(t, o, a) {
        var f = Ar(t);
        function v() {
          for (var b = arguments.length, E = O(b), S = b, N = jn(v); S--; )
            E[S] = arguments[S];
          var L = b < 3 && E[0] !== N && E[b - 1] !== N ? [] : pn(E, N);
          if (b -= L.length, b < a)
            return Yu(
              t,
              o,
              Lo,
              v.placeholder,
              r,
              E,
              L,
              r,
              r,
              a - b
            );
          var F = this && this !== He && this instanceof v ? f : t;
          return ct(F, this, E);
        }
        return v;
      }
      function ku(t) {
        return function(o, a, f) {
          var v = we(o);
          if (!at(o)) {
            var b = j(a, 3);
            o = We(o), a = function(S) {
              return b(v[S], S, v);
            };
          }
          var E = t(o, a, f);
          return E > -1 ? v[b ? o[E] : E] : r;
        };
      }
      function Hu(t) {
        return tn(function(o) {
          var a = o.length, f = a, v = Dt.prototype.thru;
          for (t && o.reverse(); f--; ) {
            var b = o[f];
            if (typeof b != "function")
              throw new St(u);
            if (v && !E && Vo(b) == "wrapper")
              var E = new Dt([], !0);
          }
          for (f = E ? f : a; ++f < a; ) {
            b = o[f];
            var S = Vo(b), N = S == "wrapper" ? Ds(b) : r;
            N && Ns(N[0]) && N[1] == (G | R | I | Y) && !N[4].length && N[9] == 1 ? E = E[Vo(N[0])].apply(E, N[3]) : E = b.length == 1 && Ns(b) ? E[S]() : E.thru(b);
          }
          return function() {
            var L = arguments, F = L[0];
            if (E && L.length == 1 && oe(F))
              return E.plant(F).value();
            for (var V = 0, k = a ? o[V].apply(this, L) : F; ++V < a; )
              k = o[V].call(this, k);
            return k;
          };
        });
      }
      function Lo(t, o, a, f, v, b, E, S, N, L) {
        var F = o & G, V = o & x, k = o & M, J = o & (R | P), ee = o & U, ae = k ? r : Ar(t);
        function te() {
          for (var ce = arguments.length, de = O(ce), ht = ce; ht--; )
            de[ht] = arguments[ht];
          if (J)
            var Qe = jn(te), gt = ug(de, Qe);
          if (f && (de = $u(de, f, v, J)), b && (de = Vu(de, b, E, J)), ce -= gt, J && ce < L) {
            var Le = pn(de, Qe);
            return Yu(
              t,
              o,
              Lo,
              te.placeholder,
              a,
              de,
              Le,
              S,
              N,
              L - ce
            );
          }
          var Vt = V ? a : this, sn = k ? Vt[t] : t;
          return ce = de.length, S ? de = mm(de, S) : ee && ce > 1 && de.reverse(), F && N < ce && (de.length = N), this && this !== He && this instanceof te && (sn = ae || Ar(sn)), sn.apply(Vt, de);
        }
        return te;
      }
      function qu(t, o) {
        return function(a, f) {
          return Dv(a, t, o(f), {});
        };
      }
      function Mo(t, o) {
        return function(a, f) {
          var v;
          if (a === r && f === r)
            return o;
          if (a !== r && (v = a), f !== r) {
            if (v === r)
              return f;
            typeof a == "string" || typeof f == "string" ? (a = dt(a), f = dt(f)) : (a = Ou(a), f = Ou(f)), v = t(a, f);
          }
          return v;
        };
      }
      function Es(t) {
        return tn(function(o) {
          return o = Ie(o, ft(j())), le(function(a) {
            var f = this;
            return t(o, function(v) {
              return ct(v, f, a);
            });
          });
        });
      }
      function Fo(t, o) {
        o = o === r ? " " : dt(o);
        var a = o.length;
        if (a < 2)
          return a ? hs(o, t) : o;
        var f = hs(o, xo(t / qn(o)));
        return Hn(o) ? yn(Mt(f), 0, t).join("") : f.slice(0, t);
      }
      function Qv(t, o, a, f) {
        var v = o & x, b = Ar(t);
        function E() {
          for (var S = -1, N = arguments.length, L = -1, F = f.length, V = O(F + N), k = this && this !== He && this instanceof E ? b : t; ++L < F; )
            V[L] = f[L];
          for (; N--; )
            V[L++] = arguments[++S];
          return ct(k, v ? a : this, V);
        }
        return E;
      }
      function zu(t) {
        return function(o, a, f) {
          return f && typeof f != "number" && Ze(o, a, f) && (a = f = r), o = on(o), a === r ? (a = o, o = 0) : a = on(a), f = f === r ? o < a ? 1 : -1 : on(f), Fv(o, a, f, t);
        };
      }
      function $o(t) {
        return function(o, a) {
          return typeof o == "string" && typeof a == "string" || (o = Nt(o), a = Nt(a)), t(o, a);
        };
      }
      function Yu(t, o, a, f, v, b, E, S, N, L) {
        var F = o & R, V = F ? E : r, k = F ? r : E, J = F ? b : r, ee = F ? r : b;
        o |= F ? I : $, o &= ~(F ? $ : I), o & B || (o &= ~(x | M));
        var ae = [
          t,
          o,
          v,
          J,
          V,
          ee,
          k,
          S,
          N,
          L
        ], te = a.apply(r, ae);
        return Ns(t) && ic(te, ae), te.placeholder = f, sc(te, t, o);
      }
      function ws(t) {
        var o = $e[t];
        return function(a, f) {
          if (a = Nt(a), f = f == null ? 0 : Ye(se(f), 292), f && su(a)) {
            var v = (ve(a) + "e").split("e"), b = o(v[0] + "e" + (+v[1] + f));
            return v = (ve(b) + "e").split("e"), +(v[0] + "e" + (+v[1] - f));
          }
          return o(a);
        };
      }
      var jv = Kn && 1 / po(new Kn([, -0]))[1] == De ? function(t) {
        return new Kn(t);
      } : Hs;
      function Ku(t) {
        return function(o) {
          var a = Ke(o);
          return a == K ? Qi(o) : a == Lt ? vg(o) : lg(o, t(o));
        };
      }
      function en(t, o, a, f, v, b, E, S) {
        var N = o & M;
        if (!N && typeof t != "function")
          throw new St(u);
        var L = f ? f.length : 0;
        if (L || (o &= ~(I | $), f = v = r), E = E === r ? E : Ve(se(E), 0), S = S === r ? S : se(S), L -= v ? v.length : 0, o & $) {
          var F = f, V = v;
          f = v = r;
        }
        var k = N ? r : Ds(t), J = [
          t,
          o,
          a,
          f,
          v,
          F,
          V,
          b,
          E,
          S
        ];
        if (k && hm(J, k), t = J[0], o = J[1], a = J[2], f = J[3], v = J[4], S = J[9] = J[9] === r ? N ? 0 : t.length : Ve(J[9] - L, 0), !S && o & (R | P) && (o &= ~(R | P)), !o || o == x)
          var ee = Jv(t, o, a);
        else
          o == R || o == P ? ee = Zv(t, o, S) : (o == I || o == (x | I)) && !v.length ? ee = Qv(t, o, a, f) : ee = Lo.apply(r, J);
        var ae = k ? Iu : ic;
        return sc(ae(ee, J), t, o);
      }
      function Xu(t, o, a, f) {
        return t === r || $t(t, Yn[a]) && !Ee.call(f, a) ? o : t;
      }
      function Ju(t, o, a, f, v, b) {
        return Ne(t) && Ne(o) && (b.set(o, t), Ro(t, o, r, Ju, b), b.delete(o)), t;
      }
      function em(t) {
        return Or(t) ? r : t;
      }
      function Zu(t, o, a, f, v, b) {
        var E = a & w, S = t.length, N = o.length;
        if (S != N && !(E && N > S))
          return !1;
        var L = b.get(t), F = b.get(o);
        if (L && F)
          return L == o && F == t;
        var V = -1, k = !0, J = a & A ? new In() : r;
        for (b.set(t, o), b.set(o, t); ++V < S; ) {
          var ee = t[V], ae = o[V];
          if (f)
            var te = E ? f(ae, ee, V, o, t, b) : f(ee, ae, V, t, o, b);
          if (te !== r) {
            if (te)
              continue;
            k = !1;
            break;
          }
          if (J) {
            if (!zi(o, function(ce, de) {
              if (!vr(J, de) && (ee === ce || v(ee, ce, a, f, b)))
                return J.push(de);
            })) {
              k = !1;
              break;
            }
          } else if (!(ee === ae || v(ee, ae, a, f, b))) {
            k = !1;
            break;
          }
        }
        return b.delete(t), b.delete(o), k;
      }
      function tm(t, o, a, f, v, b, E) {
        switch (a) {
          case Gn:
            if (t.byteLength != o.byteLength || t.byteOffset != o.byteOffset)
              return !1;
            t = t.buffer, o = o.buffer;
          case gr:
            return !(t.byteLength != o.byteLength || !b(new bo(t), new bo(o)));
          case Bt:
          case ot:
          case _t:
            return $t(+t, +o);
          case Jt:
            return t.name == o.name && t.message == o.message;
          case dr:
          case pr:
            return t == o + "";
          case K:
            var S = Qi;
          case Lt:
            var N = f & w;
            if (S || (S = po), t.size != o.size && !N)
              return !1;
            var L = E.get(t);
            if (L)
              return L == o;
            f |= A, E.set(t, o);
            var F = Zu(S(t), S(o), f, v, b, E);
            return E.delete(t), F;
          case so:
            if (Er)
              return Er.call(t) == Er.call(o);
        }
        return !1;
      }
      function nm(t, o, a, f, v, b) {
        var E = a & w, S = xs(t), N = S.length, L = xs(o), F = L.length;
        if (N != F && !E)
          return !1;
        for (var V = N; V--; ) {
          var k = S[V];
          if (!(E ? k in o : Ee.call(o, k)))
            return !1;
        }
        var J = b.get(t), ee = b.get(o);
        if (J && ee)
          return J == o && ee == t;
        var ae = !0;
        b.set(t, o), b.set(o, t);
        for (var te = E; ++V < N; ) {
          k = S[V];
          var ce = t[k], de = o[k];
          if (f)
            var ht = E ? f(de, ce, k, o, t, b) : f(ce, de, k, t, o, b);
          if (!(ht === r ? ce === de || v(ce, de, a, f, b) : ht)) {
            ae = !1;
            break;
          }
          te || (te = k == "constructor");
        }
        if (ae && !te) {
          var Qe = t.constructor, gt = o.constructor;
          Qe != gt && "constructor" in t && "constructor" in o && !(typeof Qe == "function" && Qe instanceof Qe && typeof gt == "function" && gt instanceof gt) && (ae = !1);
        }
        return b.delete(t), b.delete(o), ae;
      }
      function tn(t) {
        return Rs(rc(t, r, dc), t + "");
      }
      function xs(t) {
        return mu(t, We, As);
      }
      function Ss(t) {
        return mu(t, lt, Qu);
      }
      var Ds = Do ? function(t) {
        return Do.get(t);
      } : Hs;
      function Vo(t) {
        for (var o = t.name + "", a = Xn[o], f = Ee.call(Xn, o) ? a.length : 0; f--; ) {
          var v = a[f], b = v.func;
          if (b == null || b == t)
            return v.name;
        }
        return o;
      }
      function jn(t) {
        var o = Ee.call(y, "placeholder") ? y : t;
        return o.placeholder;
      }
      function j() {
        var t = y.iteratee || Us;
        return t = t === Us ? _u : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Wo(t, o) {
        var a = t.__data__;
        return cm(o) ? a[typeof o == "string" ? "string" : "hash"] : a.map;
      }
      function Cs(t) {
        for (var o = We(t), a = o.length; a--; ) {
          var f = o[a], v = t[f];
          o[a] = [f, v, tc(v)];
        }
        return o;
      }
      function Rn(t, o) {
        var a = pg(t, o);
        return bu(a) ? a : r;
      }
      function rm(t) {
        var o = Ee.call(t, Cn), a = t[Cn];
        try {
          t[Cn] = r;
          var f = !0;
        } catch {
        }
        var v = mo.call(t);
        return f && (o ? t[Cn] = a : delete t[Cn]), v;
      }
      var As = es ? function(t) {
        return t == null ? [] : (t = we(t), fn(es(t), function(o) {
          return ou.call(t, o);
        }));
      } : qs, Qu = es ? function(t) {
        for (var o = []; t; )
          dn(o, As(t)), t = _o(t);
        return o;
      } : qs, Ke = Je;
      (ts && Ke(new ts(new ArrayBuffer(1))) != Gn || yr && Ke(new yr()) != K || ns && Ke(ns.resolve()) != hl || Kn && Ke(new Kn()) != Lt || br && Ke(new br()) != hr) && (Ke = function(t) {
        var o = Je(t), a = o == Et ? t.constructor : r, f = a ? Pn(a) : "";
        if (f)
          switch (f) {
            case Vg:
              return Gn;
            case Wg:
              return K;
            case Gg:
              return hl;
            case Ug:
              return Lt;
            case kg:
              return hr;
          }
        return o;
      });
      function om(t, o, a) {
        for (var f = -1, v = a.length; ++f < v; ) {
          var b = a[f], E = b.size;
          switch (b.type) {
            case "drop":
              t += E;
              break;
            case "dropRight":
              o -= E;
              break;
            case "take":
              o = Ye(o, t + E);
              break;
            case "takeRight":
              t = Ve(t, o - E);
              break;
          }
        }
        return { start: t, end: o };
      }
      function im(t) {
        var o = t.match(fh);
        return o ? o[1].split(dh) : [];
      }
      function ju(t, o, a) {
        o = mn(o, t);
        for (var f = -1, v = o.length, b = !1; ++f < v; ) {
          var E = zt(o[f]);
          if (!(b = t != null && a(t, E)))
            break;
          t = t[E];
        }
        return b || ++f != v ? b : (v = t == null ? 0 : t.length, !!v && Yo(v) && nn(E, v) && (oe(t) || Tn(t)));
      }
      function sm(t) {
        var o = t.length, a = new t.constructor(o);
        return o && typeof t[0] == "string" && Ee.call(t, "index") && (a.index = t.index, a.input = t.input), a;
      }
      function ec(t) {
        return typeof t.constructor == "function" && !Ir(t) ? Jn(_o(t)) : {};
      }
      function am(t, o, a) {
        var f = t.constructor;
        switch (o) {
          case gr:
            return _s(t);
          case Bt:
          case ot:
            return new f(+t);
          case Gn:
            return Hv(t, a);
          case Ci:
          case Ai:
          case Ii:
          case Ni:
          case Oi:
          case Ri:
          case Pi:
          case Ti:
          case Bi:
            return Mu(t, a);
          case K:
            return new f();
          case _t:
          case pr:
            return new f(t);
          case dr:
            return qv(t);
          case Lt:
            return new f();
          case so:
            return zv(t);
        }
      }
      function lm(t, o) {
        var a = o.length;
        if (!a)
          return t;
        var f = a - 1;
        return o[f] = (a > 1 ? "& " : "") + o[f], o = o.join(a > 2 ? ", " : " "), t.replace(ch, `{
/* [wrapped with ` + o + `] */
`);
      }
      function um(t) {
        return oe(t) || Tn(t) || !!(iu && t && t[iu]);
      }
      function nn(t, o) {
        var a = typeof t;
        return o = o ?? Re, !!o && (a == "number" || a != "symbol" && Eh.test(t)) && t > -1 && t % 1 == 0 && t < o;
      }
      function Ze(t, o, a) {
        if (!Ne(a))
          return !1;
        var f = typeof o;
        return (f == "number" ? at(a) && nn(o, a.length) : f == "string" && o in a) ? $t(a[o], t) : !1;
      }
      function Is(t, o) {
        if (oe(t))
          return !1;
        var a = typeof t;
        return a == "number" || a == "symbol" || a == "boolean" || t == null || pt(t) ? !0 : sh.test(t) || !ih.test(t) || o != null && t in we(o);
      }
      function cm(t) {
        var o = typeof t;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? t !== "__proto__" : t === null;
      }
      function Ns(t) {
        var o = Vo(t), a = y[o];
        if (typeof a != "function" || !(o in fe.prototype))
          return !1;
        if (t === a)
          return !0;
        var f = Ds(a);
        return !!f && t === f[0];
      }
      function fm(t) {
        return !!tu && tu in t;
      }
      var dm = go ? rn : zs;
      function Ir(t) {
        var o = t && t.constructor, a = typeof o == "function" && o.prototype || Yn;
        return t === a;
      }
      function tc(t) {
        return t === t && !Ne(t);
      }
      function nc(t, o) {
        return function(a) {
          return a == null ? !1 : a[t] === o && (o !== r || t in we(a));
        };
      }
      function pm(t) {
        var o = qo(t, function(f) {
          return a.size === p && a.clear(), f;
        }), a = o.cache;
        return o;
      }
      function hm(t, o) {
        var a = t[1], f = o[1], v = a | f, b = v < (x | M | G), E = f == G && a == R || f == G && a == Y && t[7].length <= o[8] || f == (G | Y) && o[7].length <= o[8] && a == R;
        if (!(b || E))
          return t;
        f & x && (t[2] = o[2], v |= a & x ? 0 : B);
        var S = o[3];
        if (S) {
          var N = t[3];
          t[3] = N ? $u(N, S, o[4]) : S, t[4] = N ? pn(t[3], g) : o[4];
        }
        return S = o[5], S && (N = t[5], t[5] = N ? Vu(N, S, o[6]) : S, t[6] = N ? pn(t[5], g) : o[6]), S = o[7], S && (t[7] = S), f & G && (t[8] = t[8] == null ? o[8] : Ye(t[8], o[8])), t[9] == null && (t[9] = o[9]), t[0] = o[0], t[1] = v, t;
      }
      function gm(t) {
        var o = [];
        if (t != null)
          for (var a in we(t))
            o.push(a);
        return o;
      }
      function vm(t) {
        return mo.call(t);
      }
      function rc(t, o, a) {
        return o = Ve(o === r ? t.length - 1 : o, 0), function() {
          for (var f = arguments, v = -1, b = Ve(f.length - o, 0), E = O(b); ++v < b; )
            E[v] = f[o + v];
          v = -1;
          for (var S = O(o + 1); ++v < o; )
            S[v] = f[v];
          return S[o] = a(E), ct(t, this, S);
        };
      }
      function oc(t, o) {
        return o.length < 2 ? t : On(t, At(o, 0, -1));
      }
      function mm(t, o) {
        for (var a = t.length, f = Ye(o.length, a), v = st(t); f--; ) {
          var b = o[f];
          t[f] = nn(b, a) ? v[b] : r;
        }
        return t;
      }
      function Os(t, o) {
        if (!(o === "constructor" && typeof t[o] == "function") && o != "__proto__")
          return t[o];
      }
      var ic = ac(Iu), Nr = Pg || function(t, o) {
        return He.setTimeout(t, o);
      }, Rs = ac(Wv);
      function sc(t, o, a) {
        var f = o + "";
        return Rs(t, lm(f, ym(im(f), a)));
      }
      function ac(t) {
        var o = 0, a = 0;
        return function() {
          var f = Mg(), v = ue - (f - a);
          if (a = f, v > 0) {
            if (++o >= Q)
              return arguments[0];
          } else
            o = 0;
          return t.apply(r, arguments);
        };
      }
      function Go(t, o) {
        var a = -1, f = t.length, v = f - 1;
        for (o = o === r ? f : o; ++a < o; ) {
          var b = ps(a, v), E = t[b];
          t[b] = t[a], t[a] = E;
        }
        return t.length = o, t;
      }
      var lc = pm(function(t) {
        var o = [];
        return t.charCodeAt(0) === 46 && o.push(""), t.replace(ah, function(a, f, v, b) {
          o.push(v ? b.replace(gh, "$1") : f || a);
        }), o;
      });
      function zt(t) {
        if (typeof t == "string" || pt(t))
          return t;
        var o = t + "";
        return o == "0" && 1 / t == -De ? "-0" : o;
      }
      function Pn(t) {
        if (t != null) {
          try {
            return vo.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function ym(t, o) {
        return xt(un, function(a) {
          var f = "_." + a[0];
          o & a[1] && !co(t, f) && t.push(f);
        }), t.sort();
      }
      function uc(t) {
        if (t instanceof fe)
          return t.clone();
        var o = new Dt(t.__wrapped__, t.__chain__);
        return o.__actions__ = st(t.__actions__), o.__index__ = t.__index__, o.__values__ = t.__values__, o;
      }
      function bm(t, o, a) {
        (a ? Ze(t, o, a) : o === r) ? o = 1 : o = Ve(se(o), 0);
        var f = t == null ? 0 : t.length;
        if (!f || o < 1)
          return [];
        for (var v = 0, b = 0, E = O(xo(f / o)); v < f; )
          E[b++] = At(t, v, v += o);
        return E;
      }
      function _m(t) {
        for (var o = -1, a = t == null ? 0 : t.length, f = 0, v = []; ++o < a; ) {
          var b = t[o];
          b && (v[f++] = b);
        }
        return v;
      }
      function Em() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var o = O(t - 1), a = arguments[0], f = t; f--; )
          o[f - 1] = arguments[f];
        return dn(oe(a) ? st(a) : [a], qe(o, 1));
      }
      var wm = le(function(t, o) {
        return Be(t) ? xr(t, qe(o, 1, Be, !0)) : [];
      }), xm = le(function(t, o) {
        var a = It(o);
        return Be(a) && (a = r), Be(t) ? xr(t, qe(o, 1, Be, !0), j(a, 2)) : [];
      }), Sm = le(function(t, o) {
        var a = It(o);
        return Be(a) && (a = r), Be(t) ? xr(t, qe(o, 1, Be, !0), r, a) : [];
      });
      function Dm(t, o, a) {
        var f = t == null ? 0 : t.length;
        return f ? (o = a || o === r ? 1 : se(o), At(t, o < 0 ? 0 : o, f)) : [];
      }
      function Cm(t, o, a) {
        var f = t == null ? 0 : t.length;
        return f ? (o = a || o === r ? 1 : se(o), o = f - o, At(t, 0, o < 0 ? 0 : o)) : [];
      }
      function Am(t, o) {
        return t && t.length ? To(t, j(o, 3), !0, !0) : [];
      }
      function Im(t, o) {
        return t && t.length ? To(t, j(o, 3), !0) : [];
      }
      function Nm(t, o, a, f) {
        var v = t == null ? 0 : t.length;
        return v ? (a && typeof a != "number" && Ze(t, o, a) && (a = 0, f = v), Ev(t, o, a, f)) : [];
      }
      function cc(t, o, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var v = a == null ? 0 : se(a);
        return v < 0 && (v = Ve(f + v, 0)), fo(t, j(o, 3), v);
      }
      function fc(t, o, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var v = f - 1;
        return a !== r && (v = se(a), v = a < 0 ? Ve(f + v, 0) : Ye(v, f - 1)), fo(t, j(o, 3), v, !0);
      }
      function dc(t) {
        var o = t == null ? 0 : t.length;
        return o ? qe(t, 1) : [];
      }
      function Om(t) {
        var o = t == null ? 0 : t.length;
        return o ? qe(t, De) : [];
      }
      function Rm(t, o) {
        var a = t == null ? 0 : t.length;
        return a ? (o = o === r ? 1 : se(o), qe(t, o)) : [];
      }
      function Pm(t) {
        for (var o = -1, a = t == null ? 0 : t.length, f = {}; ++o < a; ) {
          var v = t[o];
          f[v[0]] = v[1];
        }
        return f;
      }
      function pc(t) {
        return t && t.length ? t[0] : r;
      }
      function Tm(t, o, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var v = a == null ? 0 : se(a);
        return v < 0 && (v = Ve(f + v, 0)), kn(t, o, v);
      }
      function Bm(t) {
        var o = t == null ? 0 : t.length;
        return o ? At(t, 0, -1) : [];
      }
      var Lm = le(function(t) {
        var o = Ie(t, ys);
        return o.length && o[0] === t[0] ? ls(o) : [];
      }), Mm = le(function(t) {
        var o = It(t), a = Ie(t, ys);
        return o === It(a) ? o = r : a.pop(), a.length && a[0] === t[0] ? ls(a, j(o, 2)) : [];
      }), Fm = le(function(t) {
        var o = It(t), a = Ie(t, ys);
        return o = typeof o == "function" ? o : r, o && a.pop(), a.length && a[0] === t[0] ? ls(a, r, o) : [];
      });
      function $m(t, o) {
        return t == null ? "" : Bg.call(t, o);
      }
      function It(t) {
        var o = t == null ? 0 : t.length;
        return o ? t[o - 1] : r;
      }
      function Vm(t, o, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var v = f;
        return a !== r && (v = se(a), v = v < 0 ? Ve(f + v, 0) : Ye(v, f - 1)), o === o ? yg(t, o, v) : fo(t, Yl, v, !0);
      }
      function Wm(t, o) {
        return t && t.length ? Su(t, se(o)) : r;
      }
      var Gm = le(hc);
      function hc(t, o) {
        return t && t.length && o && o.length ? ds(t, o) : t;
      }
      function Um(t, o, a) {
        return t && t.length && o && o.length ? ds(t, o, j(a, 2)) : t;
      }
      function km(t, o, a) {
        return t && t.length && o && o.length ? ds(t, o, r, a) : t;
      }
      var Hm = tn(function(t, o) {
        var a = t == null ? 0 : t.length, f = os(t, o);
        return Au(t, Ie(o, function(v) {
          return nn(v, a) ? +v : v;
        }).sort(Fu)), f;
      });
      function qm(t, o) {
        var a = [];
        if (!(t && t.length))
          return a;
        var f = -1, v = [], b = t.length;
        for (o = j(o, 3); ++f < b; ) {
          var E = t[f];
          o(E, f, t) && (a.push(E), v.push(f));
        }
        return Au(t, v), a;
      }
      function Ps(t) {
        return t == null ? t : $g.call(t);
      }
      function zm(t, o, a) {
        var f = t == null ? 0 : t.length;
        return f ? (a && typeof a != "number" && Ze(t, o, a) ? (o = 0, a = f) : (o = o == null ? 0 : se(o), a = a === r ? f : se(a)), At(t, o, a)) : [];
      }
      function Ym(t, o) {
        return Po(t, o);
      }
      function Km(t, o, a) {
        return gs(t, o, j(a, 2));
      }
      function Xm(t, o) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var f = Po(t, o);
          if (f < a && $t(t[f], o))
            return f;
        }
        return -1;
      }
      function Jm(t, o) {
        return Po(t, o, !0);
      }
      function Zm(t, o, a) {
        return gs(t, o, j(a, 2), !0);
      }
      function Qm(t, o) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var f = Po(t, o, !0) - 1;
          if ($t(t[f], o))
            return f;
        }
        return -1;
      }
      function jm(t) {
        return t && t.length ? Nu(t) : [];
      }
      function ey(t, o) {
        return t && t.length ? Nu(t, j(o, 2)) : [];
      }
      function ty(t) {
        var o = t == null ? 0 : t.length;
        return o ? At(t, 1, o) : [];
      }
      function ny(t, o, a) {
        return t && t.length ? (o = a || o === r ? 1 : se(o), At(t, 0, o < 0 ? 0 : o)) : [];
      }
      function ry(t, o, a) {
        var f = t == null ? 0 : t.length;
        return f ? (o = a || o === r ? 1 : se(o), o = f - o, At(t, o < 0 ? 0 : o, f)) : [];
      }
      function oy(t, o) {
        return t && t.length ? To(t, j(o, 3), !1, !0) : [];
      }
      function iy(t, o) {
        return t && t.length ? To(t, j(o, 3)) : [];
      }
      var sy = le(function(t) {
        return vn(qe(t, 1, Be, !0));
      }), ay = le(function(t) {
        var o = It(t);
        return Be(o) && (o = r), vn(qe(t, 1, Be, !0), j(o, 2));
      }), ly = le(function(t) {
        var o = It(t);
        return o = typeof o == "function" ? o : r, vn(qe(t, 1, Be, !0), r, o);
      });
      function uy(t) {
        return t && t.length ? vn(t) : [];
      }
      function cy(t, o) {
        return t && t.length ? vn(t, j(o, 2)) : [];
      }
      function fy(t, o) {
        return o = typeof o == "function" ? o : r, t && t.length ? vn(t, r, o) : [];
      }
      function Ts(t) {
        if (!(t && t.length))
          return [];
        var o = 0;
        return t = fn(t, function(a) {
          if (Be(a))
            return o = Ve(a.length, o), !0;
        }), Ji(o, function(a) {
          return Ie(t, Yi(a));
        });
      }
      function gc(t, o) {
        if (!(t && t.length))
          return [];
        var a = Ts(t);
        return o == null ? a : Ie(a, function(f) {
          return ct(o, r, f);
        });
      }
      var dy = le(function(t, o) {
        return Be(t) ? xr(t, o) : [];
      }), py = le(function(t) {
        return ms(fn(t, Be));
      }), hy = le(function(t) {
        var o = It(t);
        return Be(o) && (o = r), ms(fn(t, Be), j(o, 2));
      }), gy = le(function(t) {
        var o = It(t);
        return o = typeof o == "function" ? o : r, ms(fn(t, Be), r, o);
      }), vy = le(Ts);
      function my(t, o) {
        return Tu(t || [], o || [], wr);
      }
      function yy(t, o) {
        return Tu(t || [], o || [], Cr);
      }
      var by = le(function(t) {
        var o = t.length, a = o > 1 ? t[o - 1] : r;
        return a = typeof a == "function" ? (t.pop(), a) : r, gc(t, a);
      });
      function vc(t) {
        var o = y(t);
        return o.__chain__ = !0, o;
      }
      function _y(t, o) {
        return o(t), t;
      }
      function Uo(t, o) {
        return o(t);
      }
      var Ey = tn(function(t) {
        var o = t.length, a = o ? t[0] : 0, f = this.__wrapped__, v = function(b) {
          return os(b, t);
        };
        return o > 1 || this.__actions__.length || !(f instanceof fe) || !nn(a) ? this.thru(v) : (f = f.slice(a, +a + (o ? 1 : 0)), f.__actions__.push({
          func: Uo,
          args: [v],
          thisArg: r
        }), new Dt(f, this.__chain__).thru(function(b) {
          return o && !b.length && b.push(r), b;
        }));
      });
      function wy() {
        return vc(this);
      }
      function xy() {
        return new Dt(this.value(), this.__chain__);
      }
      function Sy() {
        this.__values__ === r && (this.__values__ = Oc(this.value()));
        var t = this.__index__ >= this.__values__.length, o = t ? r : this.__values__[this.__index__++];
        return { done: t, value: o };
      }
      function Dy() {
        return this;
      }
      function Cy(t) {
        for (var o, a = this; a instanceof Ao; ) {
          var f = uc(a);
          f.__index__ = 0, f.__values__ = r, o ? v.__wrapped__ = f : o = f;
          var v = f;
          a = a.__wrapped__;
        }
        return v.__wrapped__ = t, o;
      }
      function Ay() {
        var t = this.__wrapped__;
        if (t instanceof fe) {
          var o = t;
          return this.__actions__.length && (o = new fe(this)), o = o.reverse(), o.__actions__.push({
            func: Uo,
            args: [Ps],
            thisArg: r
          }), new Dt(o, this.__chain__);
        }
        return this.thru(Ps);
      }
      function Iy() {
        return Pu(this.__wrapped__, this.__actions__);
      }
      var Ny = Bo(function(t, o, a) {
        Ee.call(t, a) ? ++t[a] : jt(t, a, 1);
      });
      function Oy(t, o, a) {
        var f = oe(t) ? ql : _v;
        return a && Ze(t, o, a) && (o = r), f(t, j(o, 3));
      }
      function Ry(t, o) {
        var a = oe(t) ? fn : gu;
        return a(t, j(o, 3));
      }
      var Py = ku(cc), Ty = ku(fc);
      function By(t, o) {
        return qe(ko(t, o), 1);
      }
      function Ly(t, o) {
        return qe(ko(t, o), De);
      }
      function My(t, o, a) {
        return a = a === r ? 1 : se(a), qe(ko(t, o), a);
      }
      function mc(t, o) {
        var a = oe(t) ? xt : gn;
        return a(t, j(o, 3));
      }
      function yc(t, o) {
        var a = oe(t) ? tg : hu;
        return a(t, j(o, 3));
      }
      var Fy = Bo(function(t, o, a) {
        Ee.call(t, a) ? t[a].push(o) : jt(t, a, [o]);
      });
      function $y(t, o, a, f) {
        t = at(t) ? t : tr(t), a = a && !f ? se(a) : 0;
        var v = t.length;
        return a < 0 && (a = Ve(v + a, 0)), Ko(t) ? a <= v && t.indexOf(o, a) > -1 : !!v && kn(t, o, a) > -1;
      }
      var Vy = le(function(t, o, a) {
        var f = -1, v = typeof o == "function", b = at(t) ? O(t.length) : [];
        return gn(t, function(E) {
          b[++f] = v ? ct(o, E, a) : Sr(E, o, a);
        }), b;
      }), Wy = Bo(function(t, o, a) {
        jt(t, a, o);
      });
      function ko(t, o) {
        var a = oe(t) ? Ie : Eu;
        return a(t, j(o, 3));
      }
      function Gy(t, o, a, f) {
        return t == null ? [] : (oe(o) || (o = o == null ? [] : [o]), a = f ? r : a, oe(a) || (a = a == null ? [] : [a]), Du(t, o, a));
      }
      var Uy = Bo(function(t, o, a) {
        t[a ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function ky(t, o, a) {
        var f = oe(t) ? qi : Xl, v = arguments.length < 3;
        return f(t, j(o, 4), a, v, gn);
      }
      function Hy(t, o, a) {
        var f = oe(t) ? ng : Xl, v = arguments.length < 3;
        return f(t, j(o, 4), a, v, hu);
      }
      function qy(t, o) {
        var a = oe(t) ? fn : gu;
        return a(t, zo(j(o, 3)));
      }
      function zy(t) {
        var o = oe(t) ? cu : $v;
        return o(t);
      }
      function Yy(t, o, a) {
        (a ? Ze(t, o, a) : o === r) ? o = 1 : o = se(o);
        var f = oe(t) ? gv : Vv;
        return f(t, o);
      }
      function Ky(t) {
        var o = oe(t) ? vv : Gv;
        return o(t);
      }
      function Xy(t) {
        if (t == null)
          return 0;
        if (at(t))
          return Ko(t) ? qn(t) : t.length;
        var o = Ke(t);
        return o == K || o == Lt ? t.size : cs(t).length;
      }
      function Jy(t, o, a) {
        var f = oe(t) ? zi : Uv;
        return a && Ze(t, o, a) && (o = r), f(t, j(o, 3));
      }
      var Zy = le(function(t, o) {
        if (t == null)
          return [];
        var a = o.length;
        return a > 1 && Ze(t, o[0], o[1]) ? o = [] : a > 2 && Ze(o[0], o[1], o[2]) && (o = [o[0]]), Du(t, qe(o, 1), []);
      }), Ho = Rg || function() {
        return He.Date.now();
      };
      function Qy(t, o) {
        if (typeof o != "function")
          throw new St(u);
        return t = se(t), function() {
          if (--t < 1)
            return o.apply(this, arguments);
        };
      }
      function bc(t, o, a) {
        return o = a ? r : o, o = t && o == null ? t.length : o, en(t, G, r, r, r, r, o);
      }
      function _c(t, o) {
        var a;
        if (typeof o != "function")
          throw new St(u);
        return t = se(t), function() {
          return --t > 0 && (a = o.apply(this, arguments)), t <= 1 && (o = r), a;
        };
      }
      var Bs = le(function(t, o, a) {
        var f = x;
        if (a.length) {
          var v = pn(a, jn(Bs));
          f |= I;
        }
        return en(t, f, o, a, v);
      }), Ec = le(function(t, o, a) {
        var f = x | M;
        if (a.length) {
          var v = pn(a, jn(Ec));
          f |= I;
        }
        return en(o, f, t, a, v);
      });
      function wc(t, o, a) {
        o = a ? r : o;
        var f = en(t, R, r, r, r, r, r, o);
        return f.placeholder = wc.placeholder, f;
      }
      function xc(t, o, a) {
        o = a ? r : o;
        var f = en(t, P, r, r, r, r, r, o);
        return f.placeholder = xc.placeholder, f;
      }
      function Sc(t, o, a) {
        var f, v, b, E, S, N, L = 0, F = !1, V = !1, k = !0;
        if (typeof t != "function")
          throw new St(u);
        o = Nt(o) || 0, Ne(a) && (F = !!a.leading, V = "maxWait" in a, b = V ? Ve(Nt(a.maxWait) || 0, o) : b, k = "trailing" in a ? !!a.trailing : k);
        function J(Le) {
          var Vt = f, sn = v;
          return f = v = r, L = Le, E = t.apply(sn, Vt), E;
        }
        function ee(Le) {
          return L = Le, S = Nr(ce, o), F ? J(Le) : E;
        }
        function ae(Le) {
          var Vt = Le - N, sn = Le - L, kc = o - Vt;
          return V ? Ye(kc, b - sn) : kc;
        }
        function te(Le) {
          var Vt = Le - N, sn = Le - L;
          return N === r || Vt >= o || Vt < 0 || V && sn >= b;
        }
        function ce() {
          var Le = Ho();
          if (te(Le))
            return de(Le);
          S = Nr(ce, ae(Le));
        }
        function de(Le) {
          return S = r, k && f ? J(Le) : (f = v = r, E);
        }
        function ht() {
          S !== r && Bu(S), L = 0, f = N = v = S = r;
        }
        function Qe() {
          return S === r ? E : de(Ho());
        }
        function gt() {
          var Le = Ho(), Vt = te(Le);
          if (f = arguments, v = this, N = Le, Vt) {
            if (S === r)
              return ee(N);
            if (V)
              return Bu(S), S = Nr(ce, o), J(N);
          }
          return S === r && (S = Nr(ce, o)), E;
        }
        return gt.cancel = ht, gt.flush = Qe, gt;
      }
      var jy = le(function(t, o) {
        return pu(t, 1, o);
      }), eb = le(function(t, o, a) {
        return pu(t, Nt(o) || 0, a);
      });
      function tb(t) {
        return en(t, U);
      }
      function qo(t, o) {
        if (typeof t != "function" || o != null && typeof o != "function")
          throw new St(u);
        var a = function() {
          var f = arguments, v = o ? o.apply(this, f) : f[0], b = a.cache;
          if (b.has(v))
            return b.get(v);
          var E = t.apply(this, f);
          return a.cache = b.set(v, E) || b, E;
        };
        return a.cache = new (qo.Cache || Qt)(), a;
      }
      qo.Cache = Qt;
      function zo(t) {
        if (typeof t != "function")
          throw new St(u);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, o[0]);
            case 2:
              return !t.call(this, o[0], o[1]);
            case 3:
              return !t.call(this, o[0], o[1], o[2]);
          }
          return !t.apply(this, o);
        };
      }
      function nb(t) {
        return _c(2, t);
      }
      var rb = kv(function(t, o) {
        o = o.length == 1 && oe(o[0]) ? Ie(o[0], ft(j())) : Ie(qe(o, 1), ft(j()));
        var a = o.length;
        return le(function(f) {
          for (var v = -1, b = Ye(f.length, a); ++v < b; )
            f[v] = o[v].call(this, f[v]);
          return ct(t, this, f);
        });
      }), Ls = le(function(t, o) {
        var a = pn(o, jn(Ls));
        return en(t, I, r, o, a);
      }), Dc = le(function(t, o) {
        var a = pn(o, jn(Dc));
        return en(t, $, r, o, a);
      }), ob = tn(function(t, o) {
        return en(t, Y, r, r, r, o);
      });
      function ib(t, o) {
        if (typeof t != "function")
          throw new St(u);
        return o = o === r ? o : se(o), le(t, o);
      }
      function sb(t, o) {
        if (typeof t != "function")
          throw new St(u);
        return o = o == null ? 0 : Ve(se(o), 0), le(function(a) {
          var f = a[o], v = yn(a, 0, o);
          return f && dn(v, f), ct(t, this, v);
        });
      }
      function ab(t, o, a) {
        var f = !0, v = !0;
        if (typeof t != "function")
          throw new St(u);
        return Ne(a) && (f = "leading" in a ? !!a.leading : f, v = "trailing" in a ? !!a.trailing : v), Sc(t, o, {
          leading: f,
          maxWait: o,
          trailing: v
        });
      }
      function lb(t) {
        return bc(t, 1);
      }
      function ub(t, o) {
        return Ls(bs(o), t);
      }
      function cb() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return oe(t) ? t : [t];
      }
      function fb(t) {
        return Ct(t, _);
      }
      function db(t, o) {
        return o = typeof o == "function" ? o : r, Ct(t, _, o);
      }
      function pb(t) {
        return Ct(t, h | _);
      }
      function hb(t, o) {
        return o = typeof o == "function" ? o : r, Ct(t, h | _, o);
      }
      function gb(t, o) {
        return o == null || du(t, o, We(o));
      }
      function $t(t, o) {
        return t === o || t !== t && o !== o;
      }
      var vb = $o(as), mb = $o(function(t, o) {
        return t >= o;
      }), Tn = yu(function() {
        return arguments;
      }()) ? yu : function(t) {
        return Pe(t) && Ee.call(t, "callee") && !ou.call(t, "callee");
      }, oe = O.isArray, yb = Vl ? ft(Vl) : Cv;
      function at(t) {
        return t != null && Yo(t.length) && !rn(t);
      }
      function Be(t) {
        return Pe(t) && at(t);
      }
      function bb(t) {
        return t === !0 || t === !1 || Pe(t) && Je(t) == Bt;
      }
      var bn = Tg || zs, _b = Wl ? ft(Wl) : Av;
      function Eb(t) {
        return Pe(t) && t.nodeType === 1 && !Or(t);
      }
      function wb(t) {
        if (t == null)
          return !0;
        if (at(t) && (oe(t) || typeof t == "string" || typeof t.splice == "function" || bn(t) || er(t) || Tn(t)))
          return !t.length;
        var o = Ke(t);
        if (o == K || o == Lt)
          return !t.size;
        if (Ir(t))
          return !cs(t).length;
        for (var a in t)
          if (Ee.call(t, a))
            return !1;
        return !0;
      }
      function xb(t, o) {
        return Dr(t, o);
      }
      function Sb(t, o, a) {
        a = typeof a == "function" ? a : r;
        var f = a ? a(t, o) : r;
        return f === r ? Dr(t, o, r, a) : !!f;
      }
      function Ms(t) {
        if (!Pe(t))
          return !1;
        var o = Je(t);
        return o == Jt || o == Xt || typeof t.message == "string" && typeof t.name == "string" && !Or(t);
      }
      function Db(t) {
        return typeof t == "number" && su(t);
      }
      function rn(t) {
        if (!Ne(t))
          return !1;
        var o = Je(t);
        return o == q || o == it || o == cn || o == Xp;
      }
      function Cc(t) {
        return typeof t == "number" && t == se(t);
      }
      function Yo(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Re;
      }
      function Ne(t) {
        var o = typeof t;
        return t != null && (o == "object" || o == "function");
      }
      function Pe(t) {
        return t != null && typeof t == "object";
      }
      var Ac = Gl ? ft(Gl) : Nv;
      function Cb(t, o) {
        return t === o || us(t, o, Cs(o));
      }
      function Ab(t, o, a) {
        return a = typeof a == "function" ? a : r, us(t, o, Cs(o), a);
      }
      function Ib(t) {
        return Ic(t) && t != +t;
      }
      function Nb(t) {
        if (dm(t))
          throw new re(l);
        return bu(t);
      }
      function Ob(t) {
        return t === null;
      }
      function Rb(t) {
        return t == null;
      }
      function Ic(t) {
        return typeof t == "number" || Pe(t) && Je(t) == _t;
      }
      function Or(t) {
        if (!Pe(t) || Je(t) != Et)
          return !1;
        var o = _o(t);
        if (o === null)
          return !0;
        var a = Ee.call(o, "constructor") && o.constructor;
        return typeof a == "function" && a instanceof a && vo.call(a) == Ag;
      }
      var Fs = Ul ? ft(Ul) : Ov;
      function Pb(t) {
        return Cc(t) && t >= -Re && t <= Re;
      }
      var Nc = kl ? ft(kl) : Rv;
      function Ko(t) {
        return typeof t == "string" || !oe(t) && Pe(t) && Je(t) == pr;
      }
      function pt(t) {
        return typeof t == "symbol" || Pe(t) && Je(t) == so;
      }
      var er = Hl ? ft(Hl) : Pv;
      function Tb(t) {
        return t === r;
      }
      function Bb(t) {
        return Pe(t) && Ke(t) == hr;
      }
      function Lb(t) {
        return Pe(t) && Je(t) == Zp;
      }
      var Mb = $o(fs), Fb = $o(function(t, o) {
        return t <= o;
      });
      function Oc(t) {
        if (!t)
          return [];
        if (at(t))
          return Ko(t) ? Mt(t) : st(t);
        if (mr && t[mr])
          return gg(t[mr]());
        var o = Ke(t), a = o == K ? Qi : o == Lt ? po : tr;
        return a(t);
      }
      function on(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Nt(t), t === De || t === -De) {
          var o = t < 0 ? -1 : 1;
          return o * Ae;
        }
        return t === t ? t : 0;
      }
      function se(t) {
        var o = on(t), a = o % 1;
        return o === o ? a ? o - a : o : 0;
      }
      function Rc(t) {
        return t ? Nn(se(t), 0, Me) : 0;
      }
      function Nt(t) {
        if (typeof t == "number")
          return t;
        if (pt(t))
          return ke;
        if (Ne(t)) {
          var o = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ne(o) ? o + "" : o;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Jl(t);
        var a = yh.test(t);
        return a || _h.test(t) ? Qh(t.slice(2), a ? 2 : 8) : mh.test(t) ? ke : +t;
      }
      function Pc(t) {
        return qt(t, lt(t));
      }
      function $b(t) {
        return t ? Nn(se(t), -Re, Re) : t === 0 ? t : 0;
      }
      function ve(t) {
        return t == null ? "" : dt(t);
      }
      var Vb = Zn(function(t, o) {
        if (Ir(o) || at(o)) {
          qt(o, We(o), t);
          return;
        }
        for (var a in o)
          Ee.call(o, a) && wr(t, a, o[a]);
      }), Tc = Zn(function(t, o) {
        qt(o, lt(o), t);
      }), Xo = Zn(function(t, o, a, f) {
        qt(o, lt(o), t, f);
      }), Wb = Zn(function(t, o, a, f) {
        qt(o, We(o), t, f);
      }), Gb = tn(os);
      function Ub(t, o) {
        var a = Jn(t);
        return o == null ? a : fu(a, o);
      }
      var kb = le(function(t, o) {
        t = we(t);
        var a = -1, f = o.length, v = f > 2 ? o[2] : r;
        for (v && Ze(o[0], o[1], v) && (f = 1); ++a < f; )
          for (var b = o[a], E = lt(b), S = -1, N = E.length; ++S < N; ) {
            var L = E[S], F = t[L];
            (F === r || $t(F, Yn[L]) && !Ee.call(t, L)) && (t[L] = b[L]);
          }
        return t;
      }), Hb = le(function(t) {
        return t.push(r, Ju), ct(Bc, r, t);
      });
      function qb(t, o) {
        return zl(t, j(o, 3), Ht);
      }
      function zb(t, o) {
        return zl(t, j(o, 3), ss);
      }
      function Yb(t, o) {
        return t == null ? t : is(t, j(o, 3), lt);
      }
      function Kb(t, o) {
        return t == null ? t : vu(t, j(o, 3), lt);
      }
      function Xb(t, o) {
        return t && Ht(t, j(o, 3));
      }
      function Jb(t, o) {
        return t && ss(t, j(o, 3));
      }
      function Zb(t) {
        return t == null ? [] : Oo(t, We(t));
      }
      function Qb(t) {
        return t == null ? [] : Oo(t, lt(t));
      }
      function $s(t, o, a) {
        var f = t == null ? r : On(t, o);
        return f === r ? a : f;
      }
      function jb(t, o) {
        return t != null && ju(t, o, wv);
      }
      function Vs(t, o) {
        return t != null && ju(t, o, xv);
      }
      var e_ = qu(function(t, o, a) {
        o != null && typeof o.toString != "function" && (o = mo.call(o)), t[o] = a;
      }, Gs(ut)), t_ = qu(function(t, o, a) {
        o != null && typeof o.toString != "function" && (o = mo.call(o)), Ee.call(t, o) ? t[o].push(a) : t[o] = [a];
      }, j), n_ = le(Sr);
      function We(t) {
        return at(t) ? uu(t) : cs(t);
      }
      function lt(t) {
        return at(t) ? uu(t, !0) : Tv(t);
      }
      function r_(t, o) {
        var a = {};
        return o = j(o, 3), Ht(t, function(f, v, b) {
          jt(a, o(f, v, b), f);
        }), a;
      }
      function o_(t, o) {
        var a = {};
        return o = j(o, 3), Ht(t, function(f, v, b) {
          jt(a, v, o(f, v, b));
        }), a;
      }
      var i_ = Zn(function(t, o, a) {
        Ro(t, o, a);
      }), Bc = Zn(function(t, o, a, f) {
        Ro(t, o, a, f);
      }), s_ = tn(function(t, o) {
        var a = {};
        if (t == null)
          return a;
        var f = !1;
        o = Ie(o, function(b) {
          return b = mn(b, t), f || (f = b.length > 1), b;
        }), qt(t, Ss(t), a), f && (a = Ct(a, h | m | _, em));
        for (var v = o.length; v--; )
          vs(a, o[v]);
        return a;
      });
      function a_(t, o) {
        return Lc(t, zo(j(o)));
      }
      var l_ = tn(function(t, o) {
        return t == null ? {} : Lv(t, o);
      });
      function Lc(t, o) {
        if (t == null)
          return {};
        var a = Ie(Ss(t), function(f) {
          return [f];
        });
        return o = j(o), Cu(t, a, function(f, v) {
          return o(f, v[0]);
        });
      }
      function u_(t, o, a) {
        o = mn(o, t);
        var f = -1, v = o.length;
        for (v || (v = 1, t = r); ++f < v; ) {
          var b = t == null ? r : t[zt(o[f])];
          b === r && (f = v, b = a), t = rn(b) ? b.call(t) : b;
        }
        return t;
      }
      function c_(t, o, a) {
        return t == null ? t : Cr(t, o, a);
      }
      function f_(t, o, a, f) {
        return f = typeof f == "function" ? f : r, t == null ? t : Cr(t, o, a, f);
      }
      var Mc = Ku(We), Fc = Ku(lt);
      function d_(t, o, a) {
        var f = oe(t), v = f || bn(t) || er(t);
        if (o = j(o, 4), a == null) {
          var b = t && t.constructor;
          v ? a = f ? new b() : [] : Ne(t) ? a = rn(b) ? Jn(_o(t)) : {} : a = {};
        }
        return (v ? xt : Ht)(t, function(E, S, N) {
          return o(a, E, S, N);
        }), a;
      }
      function p_(t, o) {
        return t == null ? !0 : vs(t, o);
      }
      function h_(t, o, a) {
        return t == null ? t : Ru(t, o, bs(a));
      }
      function g_(t, o, a, f) {
        return f = typeof f == "function" ? f : r, t == null ? t : Ru(t, o, bs(a), f);
      }
      function tr(t) {
        return t == null ? [] : Zi(t, We(t));
      }
      function v_(t) {
        return t == null ? [] : Zi(t, lt(t));
      }
      function m_(t, o, a) {
        return a === r && (a = o, o = r), a !== r && (a = Nt(a), a = a === a ? a : 0), o !== r && (o = Nt(o), o = o === o ? o : 0), Nn(Nt(t), o, a);
      }
      function y_(t, o, a) {
        return o = on(o), a === r ? (a = o, o = 0) : a = on(a), t = Nt(t), Sv(t, o, a);
      }
      function b_(t, o, a) {
        if (a && typeof a != "boolean" && Ze(t, o, a) && (o = a = r), a === r && (typeof o == "boolean" ? (a = o, o = r) : typeof t == "boolean" && (a = t, t = r)), t === r && o === r ? (t = 0, o = 1) : (t = on(t), o === r ? (o = t, t = 0) : o = on(o)), t > o) {
          var f = t;
          t = o, o = f;
        }
        if (a || t % 1 || o % 1) {
          var v = au();
          return Ye(t + v * (o - t + Zh("1e-" + ((v + "").length - 1))), o);
        }
        return ps(t, o);
      }
      var __ = Qn(function(t, o, a) {
        return o = o.toLowerCase(), t + (a ? $c(o) : o);
      });
      function $c(t) {
        return Ws(ve(t).toLowerCase());
      }
      function Vc(t) {
        return t = ve(t), t && t.replace(wh, cg).replace(Gh, "");
      }
      function E_(t, o, a) {
        t = ve(t), o = dt(o);
        var f = t.length;
        a = a === r ? f : Nn(se(a), 0, f);
        var v = a;
        return a -= o.length, a >= 0 && t.slice(a, v) == o;
      }
      function w_(t) {
        return t = ve(t), t && nh.test(t) ? t.replace(vl, fg) : t;
      }
      function x_(t) {
        return t = ve(t), t && lh.test(t) ? t.replace(Li, "\\$&") : t;
      }
      var S_ = Qn(function(t, o, a) {
        return t + (a ? "-" : "") + o.toLowerCase();
      }), D_ = Qn(function(t, o, a) {
        return t + (a ? " " : "") + o.toLowerCase();
      }), C_ = Uu("toLowerCase");
      function A_(t, o, a) {
        t = ve(t), o = se(o);
        var f = o ? qn(t) : 0;
        if (!o || f >= o)
          return t;
        var v = (o - f) / 2;
        return Fo(So(v), a) + t + Fo(xo(v), a);
      }
      function I_(t, o, a) {
        t = ve(t), o = se(o);
        var f = o ? qn(t) : 0;
        return o && f < o ? t + Fo(o - f, a) : t;
      }
      function N_(t, o, a) {
        t = ve(t), o = se(o);
        var f = o ? qn(t) : 0;
        return o && f < o ? Fo(o - f, a) + t : t;
      }
      function O_(t, o, a) {
        return a || o == null ? o = 0 : o && (o = +o), Fg(ve(t).replace(Mi, ""), o || 0);
      }
      function R_(t, o, a) {
        return (a ? Ze(t, o, a) : o === r) ? o = 1 : o = se(o), hs(ve(t), o);
      }
      function P_() {
        var t = arguments, o = ve(t[0]);
        return t.length < 3 ? o : o.replace(t[1], t[2]);
      }
      var T_ = Qn(function(t, o, a) {
        return t + (a ? "_" : "") + o.toLowerCase();
      });
      function B_(t, o, a) {
        return a && typeof a != "number" && Ze(t, o, a) && (o = a = r), a = a === r ? Me : a >>> 0, a ? (t = ve(t), t && (typeof o == "string" || o != null && !Fs(o)) && (o = dt(o), !o && Hn(t)) ? yn(Mt(t), 0, a) : t.split(o, a)) : [];
      }
      var L_ = Qn(function(t, o, a) {
        return t + (a ? " " : "") + Ws(o);
      });
      function M_(t, o, a) {
        return t = ve(t), a = a == null ? 0 : Nn(se(a), 0, t.length), o = dt(o), t.slice(a, a + o.length) == o;
      }
      function F_(t, o, a) {
        var f = y.templateSettings;
        a && Ze(t, o, a) && (o = r), t = ve(t), o = Xo({}, o, f, Xu);
        var v = Xo({}, o.imports, f.imports, Xu), b = We(v), E = Zi(v, b), S, N, L = 0, F = o.interpolate || ao, V = "__p += '", k = ji(
          (o.escape || ao).source + "|" + F.source + "|" + (F === ml ? vh : ao).source + "|" + (o.evaluate || ao).source + "|$",
          "g"
        ), J = "//# sourceURL=" + (Ee.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++zh + "]") + `
`;
        t.replace(k, function(te, ce, de, ht, Qe, gt) {
          return de || (de = ht), V += t.slice(L, gt).replace(xh, dg), ce && (S = !0, V += `' +
__e(` + ce + `) +
'`), Qe && (N = !0, V += `';
` + Qe + `;
__p += '`), de && (V += `' +
((__t = (` + de + `)) == null ? '' : __t) +
'`), L = gt + te.length, te;
        }), V += `';
`;
        var ee = Ee.call(o, "variable") && o.variable;
        if (!ee)
          V = `with (obj) {
` + V + `
}
`;
        else if (hh.test(ee))
          throw new re(c);
        V = (N ? V.replace(Qp, "") : V).replace(jp, "$1").replace(eh, "$1;"), V = "function(" + (ee || "obj") + `) {
` + (ee ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (S ? ", __e = _.escape" : "") + (N ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var ae = Gc(function() {
          return he(b, J + "return " + V).apply(r, E);
        });
        if (ae.source = V, Ms(ae))
          throw ae;
        return ae;
      }
      function $_(t) {
        return ve(t).toLowerCase();
      }
      function V_(t) {
        return ve(t).toUpperCase();
      }
      function W_(t, o, a) {
        if (t = ve(t), t && (a || o === r))
          return Jl(t);
        if (!t || !(o = dt(o)))
          return t;
        var f = Mt(t), v = Mt(o), b = Zl(f, v), E = Ql(f, v) + 1;
        return yn(f, b, E).join("");
      }
      function G_(t, o, a) {
        if (t = ve(t), t && (a || o === r))
          return t.slice(0, eu(t) + 1);
        if (!t || !(o = dt(o)))
          return t;
        var f = Mt(t), v = Ql(f, Mt(o)) + 1;
        return yn(f, 0, v).join("");
      }
      function U_(t, o, a) {
        if (t = ve(t), t && (a || o === r))
          return t.replace(Mi, "");
        if (!t || !(o = dt(o)))
          return t;
        var f = Mt(t), v = Zl(f, Mt(o));
        return yn(f, v).join("");
      }
      function k_(t, o) {
        var a = H, f = ne;
        if (Ne(o)) {
          var v = "separator" in o ? o.separator : v;
          a = "length" in o ? se(o.length) : a, f = "omission" in o ? dt(o.omission) : f;
        }
        t = ve(t);
        var b = t.length;
        if (Hn(t)) {
          var E = Mt(t);
          b = E.length;
        }
        if (a >= b)
          return t;
        var S = a - qn(f);
        if (S < 1)
          return f;
        var N = E ? yn(E, 0, S).join("") : t.slice(0, S);
        if (v === r)
          return N + f;
        if (E && (S += N.length - S), Fs(v)) {
          if (t.slice(S).search(v)) {
            var L, F = N;
            for (v.global || (v = ji(v.source, ve(yl.exec(v)) + "g")), v.lastIndex = 0; L = v.exec(F); )
              var V = L.index;
            N = N.slice(0, V === r ? S : V);
          }
        } else if (t.indexOf(dt(v), S) != S) {
          var k = N.lastIndexOf(v);
          k > -1 && (N = N.slice(0, k));
        }
        return N + f;
      }
      function H_(t) {
        return t = ve(t), t && th.test(t) ? t.replace(gl, bg) : t;
      }
      var q_ = Qn(function(t, o, a) {
        return t + (a ? " " : "") + o.toUpperCase();
      }), Ws = Uu("toUpperCase");
      function Wc(t, o, a) {
        return t = ve(t), o = a ? r : o, o === r ? hg(t) ? wg(t) : ig(t) : t.match(o) || [];
      }
      var Gc = le(function(t, o) {
        try {
          return ct(t, r, o);
        } catch (a) {
          return Ms(a) ? a : new re(a);
        }
      }), z_ = tn(function(t, o) {
        return xt(o, function(a) {
          a = zt(a), jt(t, a, Bs(t[a], t));
        }), t;
      });
      function Y_(t) {
        var o = t == null ? 0 : t.length, a = j();
        return t = o ? Ie(t, function(f) {
          if (typeof f[1] != "function")
            throw new St(u);
          return [a(f[0]), f[1]];
        }) : [], le(function(f) {
          for (var v = -1; ++v < o; ) {
            var b = t[v];
            if (ct(b[0], this, f))
              return ct(b[1], this, f);
          }
        });
      }
      function K_(t) {
        return bv(Ct(t, h));
      }
      function Gs(t) {
        return function() {
          return t;
        };
      }
      function X_(t, o) {
        return t == null || t !== t ? o : t;
      }
      var J_ = Hu(), Z_ = Hu(!0);
      function ut(t) {
        return t;
      }
      function Us(t) {
        return _u(typeof t == "function" ? t : Ct(t, h));
      }
      function Q_(t) {
        return wu(Ct(t, h));
      }
      function j_(t, o) {
        return xu(t, Ct(o, h));
      }
      var e0 = le(function(t, o) {
        return function(a) {
          return Sr(a, t, o);
        };
      }), t0 = le(function(t, o) {
        return function(a) {
          return Sr(t, a, o);
        };
      });
      function ks(t, o, a) {
        var f = We(o), v = Oo(o, f);
        a == null && !(Ne(o) && (v.length || !f.length)) && (a = o, o = t, t = this, v = Oo(o, We(o)));
        var b = !(Ne(a) && "chain" in a) || !!a.chain, E = rn(t);
        return xt(v, function(S) {
          var N = o[S];
          t[S] = N, E && (t.prototype[S] = function() {
            var L = this.__chain__;
            if (b || L) {
              var F = t(this.__wrapped__), V = F.__actions__ = st(this.__actions__);
              return V.push({ func: N, args: arguments, thisArg: t }), F.__chain__ = L, F;
            }
            return N.apply(t, dn([this.value()], arguments));
          });
        }), t;
      }
      function n0() {
        return He._ === this && (He._ = Ig), this;
      }
      function Hs() {
      }
      function r0(t) {
        return t = se(t), le(function(o) {
          return Su(o, t);
        });
      }
      var o0 = Es(Ie), i0 = Es(ql), s0 = Es(zi);
      function Uc(t) {
        return Is(t) ? Yi(zt(t)) : Mv(t);
      }
      function a0(t) {
        return function(o) {
          return t == null ? r : On(t, o);
        };
      }
      var l0 = zu(), u0 = zu(!0);
      function qs() {
        return [];
      }
      function zs() {
        return !1;
      }
      function c0() {
        return {};
      }
      function f0() {
        return "";
      }
      function d0() {
        return !0;
      }
      function p0(t, o) {
        if (t = se(t), t < 1 || t > Re)
          return [];
        var a = Me, f = Ye(t, Me);
        o = j(o), t -= Me;
        for (var v = Ji(f, o); ++a < t; )
          o(a);
        return v;
      }
      function h0(t) {
        return oe(t) ? Ie(t, zt) : pt(t) ? [t] : st(lc(ve(t)));
      }
      function g0(t) {
        var o = ++Cg;
        return ve(t) + o;
      }
      var v0 = Mo(function(t, o) {
        return t + o;
      }, 0), m0 = ws("ceil"), y0 = Mo(function(t, o) {
        return t / o;
      }, 1), b0 = ws("floor");
      function _0(t) {
        return t && t.length ? No(t, ut, as) : r;
      }
      function E0(t, o) {
        return t && t.length ? No(t, j(o, 2), as) : r;
      }
      function w0(t) {
        return Kl(t, ut);
      }
      function x0(t, o) {
        return Kl(t, j(o, 2));
      }
      function S0(t) {
        return t && t.length ? No(t, ut, fs) : r;
      }
      function D0(t, o) {
        return t && t.length ? No(t, j(o, 2), fs) : r;
      }
      var C0 = Mo(function(t, o) {
        return t * o;
      }, 1), A0 = ws("round"), I0 = Mo(function(t, o) {
        return t - o;
      }, 0);
      function N0(t) {
        return t && t.length ? Xi(t, ut) : 0;
      }
      function O0(t, o) {
        return t && t.length ? Xi(t, j(o, 2)) : 0;
      }
      return y.after = Qy, y.ary = bc, y.assign = Vb, y.assignIn = Tc, y.assignInWith = Xo, y.assignWith = Wb, y.at = Gb, y.before = _c, y.bind = Bs, y.bindAll = z_, y.bindKey = Ec, y.castArray = cb, y.chain = vc, y.chunk = bm, y.compact = _m, y.concat = Em, y.cond = Y_, y.conforms = K_, y.constant = Gs, y.countBy = Ny, y.create = Ub, y.curry = wc, y.curryRight = xc, y.debounce = Sc, y.defaults = kb, y.defaultsDeep = Hb, y.defer = jy, y.delay = eb, y.difference = wm, y.differenceBy = xm, y.differenceWith = Sm, y.drop = Dm, y.dropRight = Cm, y.dropRightWhile = Am, y.dropWhile = Im, y.fill = Nm, y.filter = Ry, y.flatMap = By, y.flatMapDeep = Ly, y.flatMapDepth = My, y.flatten = dc, y.flattenDeep = Om, y.flattenDepth = Rm, y.flip = tb, y.flow = J_, y.flowRight = Z_, y.fromPairs = Pm, y.functions = Zb, y.functionsIn = Qb, y.groupBy = Fy, y.initial = Bm, y.intersection = Lm, y.intersectionBy = Mm, y.intersectionWith = Fm, y.invert = e_, y.invertBy = t_, y.invokeMap = Vy, y.iteratee = Us, y.keyBy = Wy, y.keys = We, y.keysIn = lt, y.map = ko, y.mapKeys = r_, y.mapValues = o_, y.matches = Q_, y.matchesProperty = j_, y.memoize = qo, y.merge = i_, y.mergeWith = Bc, y.method = e0, y.methodOf = t0, y.mixin = ks, y.negate = zo, y.nthArg = r0, y.omit = s_, y.omitBy = a_, y.once = nb, y.orderBy = Gy, y.over = o0, y.overArgs = rb, y.overEvery = i0, y.overSome = s0, y.partial = Ls, y.partialRight = Dc, y.partition = Uy, y.pick = l_, y.pickBy = Lc, y.property = Uc, y.propertyOf = a0, y.pull = Gm, y.pullAll = hc, y.pullAllBy = Um, y.pullAllWith = km, y.pullAt = Hm, y.range = l0, y.rangeRight = u0, y.rearg = ob, y.reject = qy, y.remove = qm, y.rest = ib, y.reverse = Ps, y.sampleSize = Yy, y.set = c_, y.setWith = f_, y.shuffle = Ky, y.slice = zm, y.sortBy = Zy, y.sortedUniq = jm, y.sortedUniqBy = ey, y.split = B_, y.spread = sb, y.tail = ty, y.take = ny, y.takeRight = ry, y.takeRightWhile = oy, y.takeWhile = iy, y.tap = _y, y.throttle = ab, y.thru = Uo, y.toArray = Oc, y.toPairs = Mc, y.toPairsIn = Fc, y.toPath = h0, y.toPlainObject = Pc, y.transform = d_, y.unary = lb, y.union = sy, y.unionBy = ay, y.unionWith = ly, y.uniq = uy, y.uniqBy = cy, y.uniqWith = fy, y.unset = p_, y.unzip = Ts, y.unzipWith = gc, y.update = h_, y.updateWith = g_, y.values = tr, y.valuesIn = v_, y.without = dy, y.words = Wc, y.wrap = ub, y.xor = py, y.xorBy = hy, y.xorWith = gy, y.zip = vy, y.zipObject = my, y.zipObjectDeep = yy, y.zipWith = by, y.entries = Mc, y.entriesIn = Fc, y.extend = Tc, y.extendWith = Xo, ks(y, y), y.add = v0, y.attempt = Gc, y.camelCase = __, y.capitalize = $c, y.ceil = m0, y.clamp = m_, y.clone = fb, y.cloneDeep = pb, y.cloneDeepWith = hb, y.cloneWith = db, y.conformsTo = gb, y.deburr = Vc, y.defaultTo = X_, y.divide = y0, y.endsWith = E_, y.eq = $t, y.escape = w_, y.escapeRegExp = x_, y.every = Oy, y.find = Py, y.findIndex = cc, y.findKey = qb, y.findLast = Ty, y.findLastIndex = fc, y.findLastKey = zb, y.floor = b0, y.forEach = mc, y.forEachRight = yc, y.forIn = Yb, y.forInRight = Kb, y.forOwn = Xb, y.forOwnRight = Jb, y.get = $s, y.gt = vb, y.gte = mb, y.has = jb, y.hasIn = Vs, y.head = pc, y.identity = ut, y.includes = $y, y.indexOf = Tm, y.inRange = y_, y.invoke = n_, y.isArguments = Tn, y.isArray = oe, y.isArrayBuffer = yb, y.isArrayLike = at, y.isArrayLikeObject = Be, y.isBoolean = bb, y.isBuffer = bn, y.isDate = _b, y.isElement = Eb, y.isEmpty = wb, y.isEqual = xb, y.isEqualWith = Sb, y.isError = Ms, y.isFinite = Db, y.isFunction = rn, y.isInteger = Cc, y.isLength = Yo, y.isMap = Ac, y.isMatch = Cb, y.isMatchWith = Ab, y.isNaN = Ib, y.isNative = Nb, y.isNil = Rb, y.isNull = Ob, y.isNumber = Ic, y.isObject = Ne, y.isObjectLike = Pe, y.isPlainObject = Or, y.isRegExp = Fs, y.isSafeInteger = Pb, y.isSet = Nc, y.isString = Ko, y.isSymbol = pt, y.isTypedArray = er, y.isUndefined = Tb, y.isWeakMap = Bb, y.isWeakSet = Lb, y.join = $m, y.kebabCase = S_, y.last = It, y.lastIndexOf = Vm, y.lowerCase = D_, y.lowerFirst = C_, y.lt = Mb, y.lte = Fb, y.max = _0, y.maxBy = E0, y.mean = w0, y.meanBy = x0, y.min = S0, y.minBy = D0, y.stubArray = qs, y.stubFalse = zs, y.stubObject = c0, y.stubString = f0, y.stubTrue = d0, y.multiply = C0, y.nth = Wm, y.noConflict = n0, y.noop = Hs, y.now = Ho, y.pad = A_, y.padEnd = I_, y.padStart = N_, y.parseInt = O_, y.random = b_, y.reduce = ky, y.reduceRight = Hy, y.repeat = R_, y.replace = P_, y.result = u_, y.round = A0, y.runInContext = C, y.sample = zy, y.size = Xy, y.snakeCase = T_, y.some = Jy, y.sortedIndex = Ym, y.sortedIndexBy = Km, y.sortedIndexOf = Xm, y.sortedLastIndex = Jm, y.sortedLastIndexBy = Zm, y.sortedLastIndexOf = Qm, y.startCase = L_, y.startsWith = M_, y.subtract = I0, y.sum = N0, y.sumBy = O0, y.template = F_, y.times = p0, y.toFinite = on, y.toInteger = se, y.toLength = Rc, y.toLower = $_, y.toNumber = Nt, y.toSafeInteger = $b, y.toString = ve, y.toUpper = V_, y.trim = W_, y.trimEnd = G_, y.trimStart = U_, y.truncate = k_, y.unescape = H_, y.uniqueId = g0, y.upperCase = q_, y.upperFirst = Ws, y.each = mc, y.eachRight = yc, y.first = pc, ks(y, function() {
        var t = {};
        return Ht(y, function(o, a) {
          Ee.call(y.prototype, a) || (t[a] = o);
        }), t;
      }(), { chain: !1 }), y.VERSION = i, xt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        y[t].placeholder = y;
      }), xt(["drop", "take"], function(t, o) {
        fe.prototype[t] = function(a) {
          a = a === r ? 1 : Ve(se(a), 0);
          var f = this.__filtered__ && !o ? new fe(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = Ye(a, f.__takeCount__) : f.__views__.push({
            size: Ye(a, Me),
            type: t + (f.__dir__ < 0 ? "Right" : "")
          }), f;
        }, fe.prototype[t + "Right"] = function(a) {
          return this.reverse()[t](a).reverse();
        };
      }), xt(["filter", "map", "takeWhile"], function(t, o) {
        var a = o + 1, f = a == ge || a == Fe;
        fe.prototype[t] = function(v) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: j(v, 3),
            type: a
          }), b.__filtered__ = b.__filtered__ || f, b;
        };
      }), xt(["head", "last"], function(t, o) {
        var a = "take" + (o ? "Right" : "");
        fe.prototype[t] = function() {
          return this[a](1).value()[0];
        };
      }), xt(["initial", "tail"], function(t, o) {
        var a = "drop" + (o ? "" : "Right");
        fe.prototype[t] = function() {
          return this.__filtered__ ? new fe(this) : this[a](1);
        };
      }), fe.prototype.compact = function() {
        return this.filter(ut);
      }, fe.prototype.find = function(t) {
        return this.filter(t).head();
      }, fe.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, fe.prototype.invokeMap = le(function(t, o) {
        return typeof t == "function" ? new fe(this) : this.map(function(a) {
          return Sr(a, t, o);
        });
      }), fe.prototype.reject = function(t) {
        return this.filter(zo(j(t)));
      }, fe.prototype.slice = function(t, o) {
        t = se(t);
        var a = this;
        return a.__filtered__ && (t > 0 || o < 0) ? new fe(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), o !== r && (o = se(o), a = o < 0 ? a.dropRight(-o) : a.take(o - t)), a);
      }, fe.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, fe.prototype.toArray = function() {
        return this.take(Me);
      }, Ht(fe.prototype, function(t, o) {
        var a = /^(?:filter|find|map|reject)|While$/.test(o), f = /^(?:head|last)$/.test(o), v = y[f ? "take" + (o == "last" ? "Right" : "") : o], b = f || /^find/.test(o);
        v && (y.prototype[o] = function() {
          var E = this.__wrapped__, S = f ? [1] : arguments, N = E instanceof fe, L = S[0], F = N || oe(E), V = function(ce) {
            var de = v.apply(y, dn([ce], S));
            return f && k ? de[0] : de;
          };
          F && a && typeof L == "function" && L.length != 1 && (N = F = !1);
          var k = this.__chain__, J = !!this.__actions__.length, ee = b && !k, ae = N && !J;
          if (!b && F) {
            E = ae ? E : new fe(this);
            var te = t.apply(E, S);
            return te.__actions__.push({ func: Uo, args: [V], thisArg: r }), new Dt(te, k);
          }
          return ee && ae ? t.apply(this, S) : (te = this.thru(V), ee ? f ? te.value()[0] : te.value() : te);
        });
      }), xt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var o = ho[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(t);
        y.prototype[t] = function() {
          var v = arguments;
          if (f && !this.__chain__) {
            var b = this.value();
            return o.apply(oe(b) ? b : [], v);
          }
          return this[a](function(E) {
            return o.apply(oe(E) ? E : [], v);
          });
        };
      }), Ht(fe.prototype, function(t, o) {
        var a = y[o];
        if (a) {
          var f = a.name + "";
          Ee.call(Xn, f) || (Xn[f] = []), Xn[f].push({ name: o, func: a });
        }
      }), Xn[Lo(r, M).name] = [{
        name: "wrapper",
        func: r
      }], fe.prototype.clone = Hg, fe.prototype.reverse = qg, fe.prototype.value = zg, y.prototype.at = Ey, y.prototype.chain = wy, y.prototype.commit = xy, y.prototype.next = Sy, y.prototype.plant = Cy, y.prototype.reverse = Ay, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = Iy, y.prototype.first = y.prototype.head, mr && (y.prototype[mr] = Dy), y;
    }, zn = xg();
    Dn ? ((Dn.exports = zn)._ = zn, Ui._ = zn) : He._ = zn;
  }).call(Rr);
})(ci, ci.exports);
ci.exports;
function Va(e) {
  delete e.qualitative9;
  let n = {};
  for (const [r, i] of Object.entries(e)) {
    const s = String(r);
    if (s.endsWith("reverse"))
      n = { ...e };
    else {
      let l = s.concat("reverse");
      n[l] = [...i].reverse();
    }
  }
  return { ...n, ...e };
}
const M1 = {
  yelloworangered: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  yelloworangebrown: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  pinkpurple: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  bluegreen: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  orangered: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  red: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  greenblue: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#267BA6", "#0868ac", "#084081"],
  yellowpurple: ["#FFF0B0", "#F5CC76", "#EDAE4B", "#E3683C", "#BF2A48", "#6D2059", "#8F0C4B", "#310958", "#0E0943"],
  qualitative1: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#6a3d9a", "#cab2d6", "#E31A90", "#15017A", "#C2C0FC"],
  qualitative2: ["#7fc97f", "#beaed4", "#ff9", "#386cb0", "#f0027f", "#bf5b17", "#666", "#fedab8"],
  qualitative3: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666"],
  qualitative4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ff3", "#a65628", "#f781bf"],
  qualitative9: ["#497d0c", "#84BC49", "#88c3ea", "#fcad90", "#f26b4f", "#c31b1f", "#c31b1f"],
  "sequential-blue-2(MPX)": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "sequential-orange(MPX)": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"]
}, F1 = {
  "qualitative-bold": ["#377eb8", "#ff7f00", "#4daf4a", "#984ea3", "#e41a1c", "#ffff33", "#a65628", "#f781bf", "#3399CC"],
  "qualitative-soft": ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#ACA9EB"],
  qualitative1: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#6a3d9a", "#cab2d6", "#E31A90", "#15017A", "#C2C0FC"],
  qualitative2: ["#7fc97f", "#beaed4", "#ff9", "#386cb0", "#f0027f", "#bf5b17", "#666", "#fedab8"],
  qualitative3: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666"],
  qualitative4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ff3", "#a65628", "#f781bf"],
  "sequential-blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "sequential-blue-2-(MPX)": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "sequential-orange-(MPX)": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "sequential-green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, $1 = {
  "monochrome-1": ["#A6CEE3", "#15017A"],
  "monochrome-2": ["#C2C0FC", "#15017A"],
  "monochrome-3": ["#cab2d6", "#6a3d9a"],
  "monochrome-4": ["#C2C0FC", "#6a3d9a"],
  "monochrome-5": ["#fedab8", "#bf5b17"],
  "cool-1": ["#b2df8a", "#1f78b4"],
  "cool-2": ["#a6cee3", "#72D66B"],
  "cool-3": ["#C2C0FC", "#386cb0"],
  "cool-4": ["#72D66B", "#6a3d9a"],
  "cool-5": ["#a6cee3", "#6a3d9a"],
  "warm-1": ["#e31a1c", "#fedab8"],
  "complementary-1": ["#1f78b4", "#e6ab02"],
  "complementary-2": ["#1f78b4", "#ff7f00"],
  "complementary-3": ["#6a3d9a", "#ff7f00"],
  "complementary-4": ["#6a3d9a", "#e6ab02"],
  "complementary-5": ["#df168c", "#1EB386"]
}, V1 = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, CN = V1, AN = Va(F1), IN = Va(M1), NN = Va($1), W1 = (e) => {
  const [n, r] = W.useState(!1), { config: i, setConfig: s, filteredData: l, setFilteredData: u, excludedData: c, filterData: d } = e, { type: p, filterBehavior: g, filters: h } = i, m = ["dropdown", "pill", "tab", "tab bar"], _ = [
    {
      label: "Ascending Alphanumeric",
      value: "asc"
    },
    {
      label: "Descending Alphanumeric",
      value: "desc"
    },
    {
      label: "Custom",
      value: "cust"
    }
  ], w = (I, $, G, Y) => {
    const U = [...Y.values], [H] = U.splice(I, 1);
    U.splice($, 0, H);
    const ne = i.type === "chart" ? [...i.filters] : [...l], Q = { ...ne[G] };
    Q.values = U, Q.orderedValues = U, Q.active = U[0], Q.order = "cust", ne[G] = Q, i.type === "map" && u(ne), s({ ...i, filters: ne });
  }, A = (I) => {
  }, x = (I, $) => {
    let G = i.type === "map" ? [...l] : [...i.filters];
    G[I].active = $, s({ ...i }), i.filterBehavior === "Apply Button" && r(!0), i.filterBehavior !== "Apply Button" && s({
      ...i,
      filters: G
    }), i.type === "map" && i.filterBehavior === "Filter Change" && u(G), i.type === "chart" && i.filterBehavior === "Filter Change" && u(d(G, c));
  }, M = (I) => {
    s({ ...i, filters: I }), p === "map" && u(I, c), p === "chart" && u(d(I, c)), r(!1);
  }, B = (I) => {
    let $ = [...i.filters];
    I.preventDefault(), $.map((G) => (G = P(G), G.active = G.values[0], G)), p === "map" ? u($, c) : u(d($, c)), s({ ...i, filters: $ });
  }, R = {
    buttonText: "Apply Filters",
    resetText: "Reset All",
    introText: "Make a selection from the filters to change the visualization information.",
    applyText: "Select the apply button to update the visualization information."
  }, P = (I) => {
    const { order: $ } = I, G = (U, H) => U.toString().localeCompare(H.toString(), "en", { numeric: !0 }), Y = (U, H) => H.toString().localeCompare(U.toString(), "en", { numeric: !0 });
    return (!$ || $ === "") && (I.order = "asc"), $ === "desc" && (I.values = I.values.sort(Y)), $ === "asc" && (I.values = I.values.sort(G)), I;
  };
  return {
    handleApplyButton: M,
    changeFilterActive: x,
    announceChange: A,
    showApplyButton: n,
    handleReset: B,
    filterConstants: R,
    filterStyleOptions: m,
    filterOrderOptions: _,
    handleFilterOrder: w,
    handleSorting: P
  };
}, G1 = (e) => {
  var G;
  const { config: n, filteredData: r, dimensions: i } = e, { filters: s, type: l, general: u, theme: c, filterBehavior: d } = n, [p, g] = W.useState(!1), [h, m] = W.useState(""), _ = W.useId(), {
    handleApplyButton: w,
    changeFilterActive: A,
    announceChange: x,
    showApplyButton: M,
    handleReset: B,
    filterConstants: R,
    handleSorting: P
  } = W1(e);
  W.useEffect(() => {
    i && (i[0] < 768 && (s == null ? void 0 : s.length) > 0 ? g(!0) : g(!1));
  }, [i]), W.useEffect(() => {
    if (h) {
      let Y = document.getElementById(h.id);
      Y && Y.focus();
    }
  }, [A, h]);
  const I = (Y) => Y.children, $ = ["filters-section", l === "map" ? u.headerColor : c];
  if (I.Section = (Y) => /* @__PURE__ */ z.createElement("section", { className: $.join(" ") }, /* @__PURE__ */ z.createElement("p", { className: "filters-section__intro-text" }, R.introText, " ", n.filterBehavior === "Apply Button" && R.applyText), /* @__PURE__ */ z.createElement("div", { className: "filters-section__wrapper" }, Y.children)), I.ApplyBehavior = (Y) => {
    if (d !== "Apply Button")
      return;
    const U = [u != null && u.headerColor ? u.headerColor : c, "apply"];
    return /* @__PURE__ */ z.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ z.createElement(P0, { onClick: () => w(s), disabled: !M, className: U.join(" ") }, R.buttonText), /* @__PURE__ */ z.createElement("a", { href: "#!", role: "button", onClick: B }, R.resetText));
  }, I.TabBar = (Y) => {
    const { filter: U, index: H } = Y;
    return /* @__PURE__ */ z.createElement("section", { className: "single-filters__tab-bar" }, U.values.map((ne, Q) => {
      const ue = ["button__tab-bar", U.active === ne ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ z.createElement(
        "button",
        {
          id: `${ne}-${H}-${Q}-${_}`,
          className: ue.join(" "),
          key: ne,
          onClick: (ge) => {
            A(H, ne), m(ge.target);
          },
          onKeyDown: (ge) => {
            ge.keyCode === 13 && (A(H, ne), m(ge.target));
          }
        },
        ne
      );
    }));
  }, I.Pills = (Y) => Y.pills, I.Tabs = (Y) => Y.tabs, I.Dropdown = (Y) => {
    const { index: U, label: H, active: ne, filters: Q } = Y;
    return /* @__PURE__ */ z.createElement(
      "select",
      {
        id: `filter-${U}`,
        name: H,
        "aria-label": H,
        className: "filter-select",
        "data-index": "0",
        value: ne,
        onChange: (ue) => {
          A(U, ue.target.value), x(`Filter ${H} value has been changed to ${ue.target.value}, please reference the data table to see updated values.`);
        }
      },
      Q
    );
  }, I.Style = () => {
    if (s || r) {
      let Y = l === "map" ? r : s;
      return delete Y.fromHash, Y.map((U, H) => {
        if (U.showDropdown === !1)
          return;
        const ne = [], Q = [], ue = [], { active: ge, queuedActive: Oe, label: Fe, filterStyle: De } = U;
        P(U), U.values.forEach((Ae, ke) => {
          const Me = ["pill", ge === Ae ? "pill--active" : null, c && c], Tt = ["tab", ge === Ae && "tab--active", c && c];
          Q.push(
            /* @__PURE__ */ z.createElement("div", { className: "pill__wrapper", key: `pill-${ke}` }, /* @__PURE__ */ z.createElement(
              "button",
              {
                id: `${Ae}-${H}-${ke}-${_}`,
                className: Me.join(" "),
                onKeyDown: (Te) => {
                  Te.keyCode === 13 && (A(H, Ae), m(Te.target));
                },
                onClick: (Te) => {
                  A(H, Ae), m(Te.target);
                },
                name: Fe
              },
              Ae
            ))
          ), ne.push(
            /* @__PURE__ */ z.createElement("option", { key: ke, value: Ae }, U.labels && U.labels[Ae] ? U.labels[Ae] : Ae)
          ), ue.push(
            /* @__PURE__ */ z.createElement(
              "button",
              {
                id: `${Ae}-${H}-${ke}-${_}`,
                className: Tt.join(" "),
                onClick: (Te) => {
                  A(H, Ae), m(Te.target);
                },
                onKeyDown: (Te) => {
                  Te.keyCode === 13 && (A(H, Ae), m(Te.target));
                }
              },
              Ae
            )
          );
        });
        const Re = ["single-filters", p ? "single-filters--dropdown" : `single-filters--${De}`];
        return /* @__PURE__ */ z.createElement("div", { className: Re.join(" "), key: H }, /* @__PURE__ */ z.createElement(z.Fragment, null, Fe && /* @__PURE__ */ z.createElement("label", { htmlFor: `filter-${H}` }, Fe), De === "tab" && !p && /* @__PURE__ */ z.createElement(I.Tabs, { tabs: ue }), De === "pill" && !p && /* @__PURE__ */ z.createElement(I.Pills, { pills: Q }), De === "tab bar" && !p && /* @__PURE__ */ z.createElement(I.TabBar, { filter: U, index: H }), (De === "dropdown" || p) && /* @__PURE__ */ z.createElement(I.Dropdown, { filter: U, index: H, label: Fe, active: Oe || ge, filters: ne })));
      });
    }
  }, ((G = n == null ? void 0 : n.filters) == null ? void 0 : G.length) !== 0)
    return /* @__PURE__ */ z.createElement(I, null, /* @__PURE__ */ z.createElement(I.Section, null, /* @__PURE__ */ z.createElement(I.Style, null), /* @__PURE__ */ z.createElement(I.ApplyBehavior, null)));
};
G1.propTypes = {
  // runtimeFilters in place
  filteredData: Xe.array,
  // function for updating the runtime filters
  setFilteredData: Xe.func,
  // the full apps config
  config: Xe.object,
  // updating function for setting fitlerBehavior
  setConfig: Xe.func,
  // exclusions
  excludedData: Xe.array,
  // function for filtering the data
  filterData: Xe.func,
  dimensions: Xe.array
};
var Dd = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, tf = z.createContext && z.createContext(Dd), _n = globalThis && globalThis.__assign || function() {
  return _n = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, _n.apply(this, arguments);
}, U1 = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
      n.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (r[i[s]] = e[i[s]]);
  return r;
};
function Cd(e) {
  return e && e.map(function(n, r) {
    return z.createElement(n.tag, _n({
      key: r
    }, n.attr), Cd(n.child));
  });
}
function ON(e) {
  return function(n) {
    return z.createElement(k1, _n({
      attr: _n({}, e.attr)
    }, n), Cd(e.child));
  };
}
function k1(e) {
  var n = function(r) {
    var i = e.attr, s = e.size, l = e.title, u = U1(e, ["attr", "size", "title"]), c = s || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), z.createElement("svg", _n({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, i, u, {
      className: d,
      style: _n(_n({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && z.createElement("title", null, l), e.children);
  };
  return tf !== void 0 ? z.createElement(tf.Consumer, null, function(r) {
    return n(r);
  }) : n(Dd);
}
var ba = { exports: {} }, Ys = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf;
function H1() {
  if (nf)
    return Ys;
  nf = 1;
  var e = W;
  function n(h, m) {
    return h === m && (h !== 0 || 1 / h === 1 / m) || h !== h && m !== m;
  }
  var r = typeof Object.is == "function" ? Object.is : n, i = e.useState, s = e.useEffect, l = e.useLayoutEffect, u = e.useDebugValue;
  function c(h, m) {
    var _ = m(), w = i({ inst: { value: _, getSnapshot: m } }), A = w[0].inst, x = w[1];
    return l(function() {
      A.value = _, A.getSnapshot = m, d(A) && x({ inst: A });
    }, [h, _, m]), s(function() {
      return d(A) && x({ inst: A }), h(function() {
        d(A) && x({ inst: A });
      });
    }, [h]), u(_), _;
  }
  function d(h) {
    var m = h.getSnapshot;
    h = h.value;
    try {
      var _ = m();
      return !r(h, _);
    } catch {
      return !0;
    }
  }
  function p(h, m) {
    return m();
  }
  var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : c;
  return Ys.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g, Ys;
}
var Ks = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rf;
function q1() {
  return rf || (rf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = W, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(R) {
      {
        for (var P = arguments.length, I = new Array(P > 1 ? P - 1 : 0), $ = 1; $ < P; $++)
          I[$ - 1] = arguments[$];
        i("error", R, I);
      }
    }
    function i(R, P, I) {
      {
        var $ = n.ReactDebugCurrentFrame, G = $.getStackAddendum();
        G !== "" && (P += "%s", I = I.concat([G]));
        var Y = I.map(function(U) {
          return String(U);
        });
        Y.unshift("Warning: " + P), Function.prototype.apply.call(console[R], console, Y);
      }
    }
    function s(R, P) {
      return R === P && (R !== 0 || 1 / R === 1 / P) || R !== R && P !== P;
    }
    var l = typeof Object.is == "function" ? Object.is : s, u = e.useState, c = e.useEffect, d = e.useLayoutEffect, p = e.useDebugValue, g = !1, h = !1;
    function m(R, P, I) {
      g || e.startTransition !== void 0 && (g = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var $ = P();
      if (!h) {
        var G = P();
        l($, G) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), h = !0);
      }
      var Y = u({
        inst: {
          value: $,
          getSnapshot: P
        }
      }), U = Y[0].inst, H = Y[1];
      return d(function() {
        U.value = $, U.getSnapshot = P, _(U) && H({
          inst: U
        });
      }, [R, $, P]), c(function() {
        _(U) && H({
          inst: U
        });
        var ne = function() {
          _(U) && H({
            inst: U
          });
        };
        return R(ne);
      }, [R]), p($), $;
    }
    function _(R) {
      var P = R.getSnapshot, I = R.value;
      try {
        var $ = P();
        return !l(I, $);
      } catch {
        return !0;
      }
    }
    function w(R, P, I) {
      return P();
    }
    var A = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", x = !A, M = x ? w : m, B = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : M;
    Ks.useSyncExternalStore = B, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ks;
}
process.env.NODE_ENV === "production" ? ba.exports = H1() : ba.exports = q1();
var Wa = ba.exports, Xs = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var of;
function z1() {
  if (of)
    return Xs;
  of = 1;
  var e = W, n = Wa;
  function r(p, g) {
    return p === g && (p !== 0 || 1 / p === 1 / g) || p !== p && g !== g;
  }
  var i = typeof Object.is == "function" ? Object.is : r, s = n.useSyncExternalStore, l = e.useRef, u = e.useEffect, c = e.useMemo, d = e.useDebugValue;
  return Xs.useSyncExternalStoreWithSelector = function(p, g, h, m, _) {
    var w = l(null);
    if (w.current === null) {
      var A = { hasValue: !1, value: null };
      w.current = A;
    } else
      A = w.current;
    w = c(function() {
      function M($) {
        if (!B) {
          if (B = !0, R = $, $ = m($), _ !== void 0 && A.hasValue) {
            var G = A.value;
            if (_(G, $))
              return P = G;
          }
          return P = $;
        }
        if (G = P, i(R, $))
          return G;
        var Y = m($);
        return _ !== void 0 && _(G, Y) ? G : (R = $, P = Y);
      }
      var B = !1, R, P, I = h === void 0 ? null : h;
      return [function() {
        return M(g());
      }, I === null ? void 0 : function() {
        return M(I());
      }];
    }, [g, h, m, _]);
    var x = s(p, w[0], w[1]);
    return u(function() {
      A.hasValue = !0, A.value = x;
    }, [x]), d(x), x;
  }, Xs;
}
var Js = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf;
function Y1() {
  return sf || (sf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = W, n = Wa;
    function r(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    var i = typeof Object.is == "function" ? Object.is : r, s = n.useSyncExternalStore, l = e.useRef, u = e.useEffect, c = e.useMemo, d = e.useDebugValue;
    function p(g, h, m, _, w) {
      var A = l(null), x;
      A.current === null ? (x = {
        hasValue: !1,
        value: null
      }, A.current = x) : x = A.current;
      var M = c(function() {
        var I = !1, $, G, Y = function(Q) {
          if (!I) {
            I = !0, $ = Q;
            var ue = _(Q);
            if (w !== void 0 && x.hasValue) {
              var ge = x.value;
              if (w(ge, ue))
                return G = ge, ge;
            }
            return G = ue, ue;
          }
          var Oe = $, Fe = G;
          if (i(Oe, Q))
            return Fe;
          var De = _(Q);
          return w !== void 0 && w(Fe, De) ? Fe : ($ = Q, G = De, De);
        }, U = m === void 0 ? null : m, H = function() {
          return Y(h());
        }, ne = U === null ? void 0 : function() {
          return Y(U());
        };
        return [H, ne];
      }, [h, m, _, w]), B = M[0], R = M[1], P = s(g, B, R);
      return u(function() {
        x.hasValue = !0, x.value = P;
      }, [P]), d(P), P;
    }
    Js.useSyncExternalStoreWithSelector = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Js;
}
process.env.NODE_ENV === "production" ? z1() : Y1();
function K1(e) {
  e();
}
let Ad = K1;
const X1 = (e) => Ad = e, J1 = () => Ad, af = Symbol.for("react-redux-context"), lf = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Z1() {
  var e;
  if (!W.createContext)
    return {};
  const n = (e = lf[af]) != null ? e : lf[af] = /* @__PURE__ */ new Map();
  let r = n.get(W.createContext);
  return r || (r = W.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), n.set(W.createContext, r)), r;
}
const Id = /* @__PURE__ */ Z1(), Q1 = () => {
  throw new Error("uSES not initialized!");
};
function Nd(e, n) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), s, l;
  for (l = 0; l < i.length; l++)
    s = i[l], !(n.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var _a = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uf;
function j1() {
  if (uf)
    return me;
  uf = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function R(I) {
    if (typeof I == "object" && I !== null) {
      var $ = I.$$typeof;
      switch ($) {
        case n:
          switch (I = I.type, I) {
            case d:
            case p:
            case i:
            case l:
            case s:
            case h:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case c:
                case g:
                case w:
                case _:
                case u:
                  return I;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  function P(I) {
    return R(I) === p;
  }
  return me.AsyncMode = d, me.ConcurrentMode = p, me.ContextConsumer = c, me.ContextProvider = u, me.Element = n, me.ForwardRef = g, me.Fragment = i, me.Lazy = w, me.Memo = _, me.Portal = r, me.Profiler = l, me.StrictMode = s, me.Suspense = h, me.isAsyncMode = function(I) {
    return P(I) || R(I) === d;
  }, me.isConcurrentMode = P, me.isContextConsumer = function(I) {
    return R(I) === c;
  }, me.isContextProvider = function(I) {
    return R(I) === u;
  }, me.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === n;
  }, me.isForwardRef = function(I) {
    return R(I) === g;
  }, me.isFragment = function(I) {
    return R(I) === i;
  }, me.isLazy = function(I) {
    return R(I) === w;
  }, me.isMemo = function(I) {
    return R(I) === _;
  }, me.isPortal = function(I) {
    return R(I) === r;
  }, me.isProfiler = function(I) {
    return R(I) === l;
  }, me.isStrictMode = function(I) {
    return R(I) === s;
  }, me.isSuspense = function(I) {
    return R(I) === h;
  }, me.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === i || I === p || I === l || I === s || I === h || I === m || typeof I == "object" && I !== null && (I.$$typeof === w || I.$$typeof === _ || I.$$typeof === u || I.$$typeof === c || I.$$typeof === g || I.$$typeof === x || I.$$typeof === M || I.$$typeof === B || I.$$typeof === A);
  }, me.typeOf = R, me;
}
var ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cf;
function ex() {
  return cf || (cf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
    function R(q) {
      return typeof q == "string" || typeof q == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      q === i || q === p || q === l || q === s || q === h || q === m || typeof q == "object" && q !== null && (q.$$typeof === w || q.$$typeof === _ || q.$$typeof === u || q.$$typeof === c || q.$$typeof === g || q.$$typeof === x || q.$$typeof === M || q.$$typeof === B || q.$$typeof === A);
    }
    function P(q) {
      if (typeof q == "object" && q !== null) {
        var it = q.$$typeof;
        switch (it) {
          case n:
            var K = q.type;
            switch (K) {
              case d:
              case p:
              case i:
              case l:
              case s:
              case h:
                return K;
              default:
                var _t = K && K.$$typeof;
                switch (_t) {
                  case c:
                  case g:
                  case w:
                  case _:
                  case u:
                    return _t;
                  default:
                    return it;
                }
            }
          case r:
            return it;
        }
      }
    }
    var I = d, $ = p, G = c, Y = u, U = n, H = g, ne = i, Q = w, ue = _, ge = r, Oe = l, Fe = s, De = h, Re = !1;
    function Ae(q) {
      return Re || (Re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ke(q) || P(q) === d;
    }
    function ke(q) {
      return P(q) === p;
    }
    function Me(q) {
      return P(q) === c;
    }
    function Tt(q) {
      return P(q) === u;
    }
    function Te(q) {
      return typeof q == "object" && q !== null && q.$$typeof === n;
    }
    function un(q) {
      return P(q) === g;
    }
    function rt(q) {
      return P(q) === i;
    }
    function bt(q) {
      return P(q) === w;
    }
    function cn(q) {
      return P(q) === _;
    }
    function Bt(q) {
      return P(q) === r;
    }
    function ot(q) {
      return P(q) === l;
    }
    function Xt(q) {
      return P(q) === s;
    }
    function Jt(q) {
      return P(q) === h;
    }
    ye.AsyncMode = I, ye.ConcurrentMode = $, ye.ContextConsumer = G, ye.ContextProvider = Y, ye.Element = U, ye.ForwardRef = H, ye.Fragment = ne, ye.Lazy = Q, ye.Memo = ue, ye.Portal = ge, ye.Profiler = Oe, ye.StrictMode = Fe, ye.Suspense = De, ye.isAsyncMode = Ae, ye.isConcurrentMode = ke, ye.isContextConsumer = Me, ye.isContextProvider = Tt, ye.isElement = Te, ye.isForwardRef = un, ye.isFragment = rt, ye.isLazy = bt, ye.isMemo = cn, ye.isPortal = Bt, ye.isProfiler = ot, ye.isStrictMode = Xt, ye.isSuspense = Jt, ye.isValidElementType = R, ye.typeOf = P;
  }()), ye;
}
process.env.NODE_ENV === "production" ? _a.exports = j1() : _a.exports = ex();
var tx = _a.exports, Ga = tx, nx = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, rx = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ox = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Od = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ua = {};
Ua[Ga.ForwardRef] = ox;
Ua[Ga.Memo] = Od;
function ff(e) {
  return Ga.isMemo(e) ? Od : Ua[e.$$typeof] || nx;
}
var ix = Object.defineProperty, sx = Object.getOwnPropertyNames, df = Object.getOwnPropertySymbols, ax = Object.getOwnPropertyDescriptor, lx = Object.getPrototypeOf, pf = Object.prototype;
function Rd(e, n, r) {
  if (typeof n != "string") {
    if (pf) {
      var i = lx(n);
      i && i !== pf && Rd(e, i, r);
    }
    var s = sx(n);
    df && (s = s.concat(df(n)));
    for (var l = ff(e), u = ff(n), c = 0; c < s.length; ++c) {
      var d = s[c];
      if (!rx[d] && !(r && r[d]) && !(u && u[d]) && !(l && l[d])) {
        var p = ax(n, d);
        try {
          ix(e, d, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var ux = Rd;
const hf = /* @__PURE__ */ rd(ux);
var Ea = { exports: {} }, be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf;
function cx() {
  if (gf)
    return be;
  gf = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), w;
  w = Symbol.for("react.module.reference");
  function A(x) {
    if (typeof x == "object" && x !== null) {
      var M = x.$$typeof;
      switch (M) {
        case e:
          switch (x = x.type, x) {
            case r:
            case s:
            case i:
            case p:
            case g:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case c:
                case u:
                case d:
                case m:
                case h:
                case l:
                  return x;
                default:
                  return M;
              }
          }
        case n:
          return M;
      }
    }
  }
  return be.ContextConsumer = u, be.ContextProvider = l, be.Element = e, be.ForwardRef = d, be.Fragment = r, be.Lazy = m, be.Memo = h, be.Portal = n, be.Profiler = s, be.StrictMode = i, be.Suspense = p, be.SuspenseList = g, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(x) {
    return A(x) === u;
  }, be.isContextProvider = function(x) {
    return A(x) === l;
  }, be.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, be.isForwardRef = function(x) {
    return A(x) === d;
  }, be.isFragment = function(x) {
    return A(x) === r;
  }, be.isLazy = function(x) {
    return A(x) === m;
  }, be.isMemo = function(x) {
    return A(x) === h;
  }, be.isPortal = function(x) {
    return A(x) === n;
  }, be.isProfiler = function(x) {
    return A(x) === s;
  }, be.isStrictMode = function(x) {
    return A(x) === i;
  }, be.isSuspense = function(x) {
    return A(x) === p;
  }, be.isSuspenseList = function(x) {
    return A(x) === g;
  }, be.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === s || x === i || x === p || x === g || x === _ || typeof x == "object" && x !== null && (x.$$typeof === m || x.$$typeof === h || x.$$typeof === l || x.$$typeof === u || x.$$typeof === d || x.$$typeof === w || x.getModuleId !== void 0);
  }, be.typeOf = A, be;
}
var _e = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vf;
function fx() {
  return vf || (vf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), w = !1, A = !1, x = !1, M = !1, B = !1, R;
    R = Symbol.for("react.module.reference");
    function P(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === r || K === s || B || K === i || K === p || K === g || M || K === _ || w || A || x || typeof K == "object" && K !== null && (K.$$typeof === m || K.$$typeof === h || K.$$typeof === l || K.$$typeof === u || K.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      K.$$typeof === R || K.getModuleId !== void 0));
    }
    function I(K) {
      if (typeof K == "object" && K !== null) {
        var _t = K.$$typeof;
        switch (_t) {
          case e:
            var Wn = K.type;
            switch (Wn) {
              case r:
              case s:
              case i:
              case p:
              case g:
                return Wn;
              default:
                var Et = Wn && Wn.$$typeof;
                switch (Et) {
                  case c:
                  case u:
                  case d:
                  case m:
                  case h:
                  case l:
                    return Et;
                  default:
                    return _t;
                }
            }
          case n:
            return _t;
        }
      }
    }
    var $ = u, G = l, Y = e, U = d, H = r, ne = m, Q = h, ue = n, ge = s, Oe = i, Fe = p, De = g, Re = !1, Ae = !1;
    function ke(K) {
      return Re || (Re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Me(K) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Tt(K) {
      return I(K) === u;
    }
    function Te(K) {
      return I(K) === l;
    }
    function un(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function rt(K) {
      return I(K) === d;
    }
    function bt(K) {
      return I(K) === r;
    }
    function cn(K) {
      return I(K) === m;
    }
    function Bt(K) {
      return I(K) === h;
    }
    function ot(K) {
      return I(K) === n;
    }
    function Xt(K) {
      return I(K) === s;
    }
    function Jt(K) {
      return I(K) === i;
    }
    function q(K) {
      return I(K) === p;
    }
    function it(K) {
      return I(K) === g;
    }
    _e.ContextConsumer = $, _e.ContextProvider = G, _e.Element = Y, _e.ForwardRef = U, _e.Fragment = H, _e.Lazy = ne, _e.Memo = Q, _e.Portal = ue, _e.Profiler = ge, _e.StrictMode = Oe, _e.Suspense = Fe, _e.SuspenseList = De, _e.isAsyncMode = ke, _e.isConcurrentMode = Me, _e.isContextConsumer = Tt, _e.isContextProvider = Te, _e.isElement = un, _e.isForwardRef = rt, _e.isFragment = bt, _e.isLazy = cn, _e.isMemo = Bt, _e.isPortal = ot, _e.isProfiler = Xt, _e.isStrictMode = Jt, _e.isSuspense = q, _e.isSuspenseList = it, _e.isValidElementType = P, _e.typeOf = I;
  }()), _e;
}
process.env.NODE_ENV === "production" ? Ea.exports = cx() : Ea.exports = fx();
var mf = Ea.exports;
function ka(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Zs(e, n) {
  if (e)
    (n === "mapStateToProps" || n === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ka(`The selector for ${n} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${n} in connect.`);
}
function dx(e, n, r) {
  Zs(e, "mapStateToProps"), Zs(n, "mapDispatchToProps"), Zs(r, "mergeProps");
}
const px = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function hx(e, n, r, i, {
  areStatesEqual: s,
  areOwnPropsEqual: l,
  areStatePropsEqual: u
}) {
  let c = !1, d, p, g, h, m;
  function _(B, R) {
    return d = B, p = R, g = e(d, p), h = n(i, p), m = r(g, h, p), c = !0, m;
  }
  function w() {
    return g = e(d, p), n.dependsOnOwnProps && (h = n(i, p)), m = r(g, h, p), m;
  }
  function A() {
    return e.dependsOnOwnProps && (g = e(d, p)), n.dependsOnOwnProps && (h = n(i, p)), m = r(g, h, p), m;
  }
  function x() {
    const B = e(d, p), R = !u(B, g);
    return g = B, R && (m = r(g, h, p)), m;
  }
  function M(B, R) {
    const P = !l(R, p), I = !s(B, d, R, p);
    return d = B, p = R, P && I ? w() : P ? A() : I ? x() : m;
  }
  return function(R, P) {
    return c ? M(R, P) : _(R, P);
  };
}
function gx(e, n) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: i,
    initMergeProps: s
  } = n, l = Nd(n, px);
  const u = r(e, l), c = i(e, l), d = s(e, l);
  return process.env.NODE_ENV !== "production" && dx(u, c, d), hx(u, c, d, e, l);
}
function vx(e, n) {
  const r = {};
  for (const i in e) {
    const s = e[i];
    typeof s == "function" && (r[i] = (...l) => n(s(...l)));
  }
  return r;
}
function mx(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let n = Object.getPrototypeOf(e);
  if (n === null)
    return !0;
  let r = n;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return n === r;
}
function Pd(e, n, r) {
  mx(e) || ka(`${r}() in ${n} must return a plain object. Instead received ${e}.`);
}
function wa(e) {
  return function(r) {
    const i = e(r);
    function s() {
      return i;
    }
    return s.dependsOnOwnProps = !1, s;
  };
}
function yf(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Td(e, n) {
  return function(i, {
    displayName: s
  }) {
    const l = function(c, d) {
      return l.dependsOnOwnProps ? l.mapToProps(c, d) : l.mapToProps(c, void 0);
    };
    return l.dependsOnOwnProps = !0, l.mapToProps = function(c, d) {
      l.mapToProps = e, l.dependsOnOwnProps = yf(e);
      let p = l(c, d);
      return typeof p == "function" && (l.mapToProps = p, l.dependsOnOwnProps = yf(p), p = l(c, d)), process.env.NODE_ENV !== "production" && Pd(p, s, n), p;
    }, l;
  };
}
function Ha(e, n) {
  return (r, i) => {
    throw new Error(`Invalid value of type ${typeof e} for ${n} argument when connecting component ${i.wrappedComponentName}.`);
  };
}
function yx(e) {
  return e && typeof e == "object" ? wa((n) => (
    // @ts-ignore
    vx(e, n)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Td(e, "mapDispatchToProps")
  ) : Ha(e, "mapDispatchToProps") : wa((n) => ({
    dispatch: n
  }));
}
function bx(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Td(e, "mapStateToProps")
  ) : Ha(e, "mapStateToProps") : wa(() => ({}));
}
function _x(e, n, r) {
  return or({}, r, e, n);
}
function Ex(e) {
  return function(r, {
    displayName: i,
    areMergedPropsEqual: s
  }) {
    let l = !1, u;
    return function(d, p, g) {
      const h = e(d, p, g);
      return l ? s(h, u) || (u = h) : (l = !0, u = h, process.env.NODE_ENV !== "production" && Pd(u, i, "mergeProps")), u;
    };
  };
}
function wx(e) {
  return e ? typeof e == "function" ? Ex(e) : Ha(e, "mergeProps") : () => _x;
}
function xx() {
  const e = J1();
  let n = null, r = null;
  return {
    clear() {
      n = null, r = null;
    },
    notify() {
      e(() => {
        let i = n;
        for (; i; )
          i.callback(), i = i.next;
      });
    },
    get() {
      let i = [], s = n;
      for (; s; )
        i.push(s), s = s.next;
      return i;
    },
    subscribe(i) {
      let s = !0, l = r = {
        callback: i,
        next: null,
        prev: r
      };
      return l.prev ? l.prev.next = l : n = l, function() {
        !s || n === null || (s = !1, l.next ? l.next.prev = l.prev : r = l.prev, l.prev ? l.prev.next = l.next : n = l.next);
      };
    }
  };
}
const bf = {
  notify() {
  },
  get: () => []
};
function Bd(e, n) {
  let r, i = bf, s = 0, l = !1;
  function u(A) {
    g();
    const x = i.subscribe(A);
    let M = !1;
    return () => {
      M || (M = !0, x(), h());
    };
  }
  function c() {
    i.notify();
  }
  function d() {
    w.onStateChange && w.onStateChange();
  }
  function p() {
    return l;
  }
  function g() {
    s++, r || (r = n ? n.addNestedSub(d) : e.subscribe(d), i = xx());
  }
  function h() {
    s--, r && s === 0 && (r(), r = void 0, i.clear(), i = bf);
  }
  function m() {
    l || (l = !0, g());
  }
  function _() {
    l && (l = !1, h());
  }
  const w = {
    addNestedSub: u,
    notifyNestedSubs: c,
    handleChangeWrapper: d,
    isSubscribed: p,
    trySubscribe: m,
    tryUnsubscribe: _,
    getListeners: () => i
  };
  return w;
}
const Sx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", fi = Sx ? W.useLayoutEffect : W.useEffect;
function _f(e, n) {
  return e === n ? e !== 0 || n !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
function Qs(e, n) {
  if (_f(e, n))
    return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  const r = Object.keys(e), i = Object.keys(n);
  if (r.length !== i.length)
    return !1;
  for (let s = 0; s < r.length; s++)
    if (!Object.prototype.hasOwnProperty.call(n, r[s]) || !_f(e[r[s]], n[r[s]]))
      return !1;
  return !0;
}
const Dx = ["reactReduxForwardedRef"];
let Ld = Q1;
const Cx = (e) => {
  Ld = e;
}, Ax = [null, null], Ix = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Nx(e, n, r) {
  fi(() => e(...n), r);
}
function Ox(e, n, r, i, s, l) {
  e.current = i, r.current = !1, s.current && (s.current = null, l());
}
function Rx(e, n, r, i, s, l, u, c, d, p, g) {
  if (!e)
    return () => {
    };
  let h = !1, m = null;
  const _ = () => {
    if (h || !c.current)
      return;
    const A = n.getState();
    let x, M;
    try {
      x = i(A, s.current);
    } catch (B) {
      M = B, m = B;
    }
    M || (m = null), x === l.current ? u.current || p() : (l.current = x, d.current = x, u.current = !0, g());
  };
  return r.onStateChange = _, r.trySubscribe(), _(), () => {
    if (h = !0, r.tryUnsubscribe(), r.onStateChange = null, m)
      throw m;
  };
}
function Px(e, n) {
  return e === n;
}
let Ef = !1;
function Md(e, n, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: i,
  areStatesEqual: s = Px,
  areOwnPropsEqual: l = Qs,
  areStatePropsEqual: u = Qs,
  areMergedPropsEqual: c = Qs,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: d = !1,
  // the context consumer to use
  context: p = Id
} = {}) {
  process.env.NODE_ENV !== "production" && i !== void 0 && !Ef && (Ef = !0, ka('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const g = p, h = bx(e), m = yx(n), _ = wx(r), w = !!e;
  return (x) => {
    if (process.env.NODE_ENV !== "production" && !mf.isValidElementType(x))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Ix(x)}`);
    const M = x.displayName || x.name || "Component", B = `Connect(${M})`, R = {
      shouldHandleStateChanges: w,
      displayName: B,
      wrappedComponentName: M,
      WrappedComponent: x,
      // @ts-ignore
      initMapStateToProps: h,
      // @ts-ignore
      initMapDispatchToProps: m,
      initMergeProps: _,
      areStatesEqual: s,
      areStatePropsEqual: u,
      areOwnPropsEqual: l,
      areMergedPropsEqual: c
    };
    function P(G) {
      const [Y, U, H] = W.useMemo(() => {
        const {
          reactReduxForwardedRef: q
        } = G, it = Nd(G, Dx);
        return [G.context, q, it];
      }, [G]), ne = W.useMemo(() => Y && Y.Consumer && // @ts-ignore
      mf.isContextConsumer(/* @__PURE__ */ W.createElement(Y.Consumer, null)) ? Y : g, [Y, g]), Q = W.useContext(ne), ue = !!G.store && !!G.store.getState && !!G.store.dispatch, ge = !!Q && !!Q.store;
      if (process.env.NODE_ENV !== "production" && !ue && !ge)
        throw new Error(`Could not find "store" in the context of "${B}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${B} in connect options.`);
      const Oe = ue ? G.store : Q.store, Fe = ge ? Q.getServerState : Oe.getState, De = W.useMemo(() => gx(Oe.dispatch, R), [Oe]), [Re, Ae] = W.useMemo(() => {
        if (!w)
          return Ax;
        const q = Bd(Oe, ue ? void 0 : Q.subscription), it = q.notifyNestedSubs.bind(q);
        return [q, it];
      }, [Oe, ue, Q]), ke = W.useMemo(() => ue ? Q : or({}, Q, {
        subscription: Re
      }), [ue, Q, Re]), Me = W.useRef(), Tt = W.useRef(H), Te = W.useRef(), un = W.useRef(!1);
      W.useRef(!1);
      const rt = W.useRef(!1), bt = W.useRef();
      fi(() => (rt.current = !0, () => {
        rt.current = !1;
      }), []);
      const cn = W.useMemo(() => () => Te.current && H === Tt.current ? Te.current : De(Oe.getState(), H), [Oe, H]), Bt = W.useMemo(() => (it) => Re ? Rx(
        w,
        Oe,
        Re,
        // @ts-ignore
        De,
        Tt,
        Me,
        un,
        rt,
        Te,
        Ae,
        it
      ) : () => {
      }, [Re]);
      Nx(Ox, [Tt, Me, un, H, Te, Ae]);
      let ot;
      try {
        ot = Ld(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Bt,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          cn,
          Fe ? () => De(Fe(), H) : cn
        );
      } catch (q) {
        throw bt.current && (q.message += `
The error may be correlated with this previous error:
${bt.current.stack}

`), q;
      }
      fi(() => {
        bt.current = void 0, Te.current = void 0, Me.current = ot;
      });
      const Xt = W.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ W.createElement(x, or({}, ot, {
          ref: U
        }))
      ), [U, x, ot]);
      return W.useMemo(() => w ? /* @__PURE__ */ W.createElement(ne.Provider, {
        value: ke
      }, Xt) : Xt, [ne, Xt, ke]);
    }
    const $ = W.memo(P);
    if ($.WrappedComponent = x, $.displayName = P.displayName = B, d) {
      const Y = W.forwardRef(function(H, ne) {
        return /* @__PURE__ */ W.createElement($, or({}, H, {
          reactReduxForwardedRef: ne
        }));
      });
      return Y.displayName = B, Y.WrappedComponent = x, hf(Y, x);
    }
    return hf($, x);
  };
}
function Tx({
  store: e,
  context: n,
  children: r,
  serverState: i,
  stabilityCheck: s = "once",
  noopCheck: l = "once"
}) {
  const u = W.useMemo(() => {
    const p = Bd(e);
    return {
      store: e,
      subscription: p,
      getServerState: i ? () => i : void 0,
      stabilityCheck: s,
      noopCheck: l
    };
  }, [e, i, s, l]), c = W.useMemo(() => e.getState(), [e]);
  fi(() => {
    const {
      subscription: p
    } = u;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), c !== e.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [u, c]);
  const d = n || Id;
  return /* @__PURE__ */ W.createElement(d.Provider, {
    value: u
  }, r);
}
Cx(Wa.useSyncExternalStore);
X1(Ta.unstable_batchedUpdates);
function Bx(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== n[r])
      return !1;
  return !0;
}
function Fd(e, n) {
  var r = W.useState(function() {
    return {
      inputs: n,
      result: e()
    };
  })[0], i = W.useRef(!0), s = W.useRef(r), l = i.current || !!(n && s.current.inputs && Bx(n, s.current.inputs)), u = l ? s.current : {
    inputs: n,
    result: e()
  };
  return W.useEffect(function() {
    i.current = !1, s.current = u;
  }, [u]), u.result;
}
function Lx(e, n) {
  return Fd(function() {
    return e;
  }, n);
}
var pe = Fd, Z = Lx, Gt = function(n) {
  var r = n.top, i = n.right, s = n.bottom, l = n.left, u = i - l, c = s - r, d = {
    top: r,
    right: i,
    bottom: s,
    left: l,
    width: u,
    height: c,
    x: l,
    y: r,
    center: {
      x: (i + l) / 2,
      y: (s + r) / 2
    }
  };
  return d;
}, qa = function(n, r) {
  return {
    top: n.top - r.top,
    left: n.left - r.left,
    bottom: n.bottom + r.bottom,
    right: n.right + r.right
  };
}, wf = function(n, r) {
  return {
    top: n.top + r.top,
    left: n.left + r.left,
    bottom: n.bottom - r.bottom,
    right: n.right - r.right
  };
}, Mx = function(n, r) {
  return {
    top: n.top + r.y,
    left: n.left + r.x,
    bottom: n.bottom + r.y,
    right: n.right + r.x
  };
}, js = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, za = function(n) {
  var r = n.borderBox, i = n.margin, s = i === void 0 ? js : i, l = n.border, u = l === void 0 ? js : l, c = n.padding, d = c === void 0 ? js : c, p = Gt(qa(r, s)), g = Gt(wf(r, u)), h = Gt(wf(g, d));
  return {
    marginBox: p,
    borderBox: Gt(r),
    paddingBox: g,
    contentBox: h,
    margin: s,
    border: u,
    padding: d
  };
}, Ot = function(n) {
  var r = n.slice(0, -2), i = n.slice(-2);
  if (i !== "px")
    return 0;
  var s = Number(r);
  return isNaN(s) && (process.env.NODE_ENV !== "production" ? Yc(!1, "Could not parse value [raw: " + n + ", without suffix: " + r + "]") : Yc(!1)), s;
}, Fx = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, di = function(n, r) {
  var i = n.borderBox, s = n.border, l = n.margin, u = n.padding, c = Mx(i, r);
  return za({
    borderBox: c,
    border: s,
    margin: l,
    padding: u
  });
}, pi = function(n, r) {
  return r === void 0 && (r = Fx()), di(n, r);
}, $d = function(n, r) {
  var i = {
    top: Ot(r.marginTop),
    right: Ot(r.marginRight),
    bottom: Ot(r.marginBottom),
    left: Ot(r.marginLeft)
  }, s = {
    top: Ot(r.paddingTop),
    right: Ot(r.paddingRight),
    bottom: Ot(r.paddingBottom),
    left: Ot(r.paddingLeft)
  }, l = {
    top: Ot(r.borderTopWidth),
    right: Ot(r.borderRightWidth),
    bottom: Ot(r.borderBottomWidth),
    left: Ot(r.borderLeftWidth)
  };
  return za({
    borderBox: n,
    margin: i,
    padding: s,
    border: l
  });
}, Vd = function(n) {
  var r = n.getBoundingClientRect(), i = window.getComputedStyle(n);
  return $d(r, i);
}, xf = Number.isNaN || function(n) {
  return typeof n == "number" && n !== n;
};
function $x(e, n) {
  return !!(e === n || xf(e) && xf(n));
}
function Vx(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!$x(e[r], n[r]))
      return !1;
  return !0;
}
function Ge(e, n) {
  n === void 0 && (n = Vx);
  var r = null;
  function i() {
    for (var s = [], l = 0; l < arguments.length; l++)
      s[l] = arguments[l];
    if (r && r.lastThis === this && n(s, r.lastArgs))
      return r.lastResult;
    var u = e.apply(this, s);
    return r = {
      lastResult: u,
      lastArgs: s,
      lastThis: this
    }, u;
  }
  return i.clear = function() {
    r = null;
  }, i;
}
var Wx = function(n) {
  var r = [], i = null, s = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    r = c, !i && (i = requestAnimationFrame(function() {
      i = null, n.apply(void 0, r);
    }));
  };
  return s.cancel = function() {
    i && (cancelAnimationFrame(i), i = null);
  }, s;
};
const Hr = Wx, Gx = process.env.NODE_ENV === "production", Ux = /[ \t]{2,}/g, kx = /^[ \t]*/gm, Sf = (e) => e.replace(Ux, " ").replace(kx, "").trim(), Hx = (e) => Sf(`
  %c@hello-pangea/dnd

  %c${Sf(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), qx = (e) => [Hx(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], zx = "__@hello-pangea/dnd-disable-dev-warnings";
function Wd(e, n) {
  Gx || typeof window < "u" && window[zx] || console[e](...qx(n));
}
const Se = Wd.bind(null, "warn"), xa = Wd.bind(null, "error");
function En() {
}
function Yx(e, n) {
  return {
    ...e,
    ...n
  };
}
function Rt(e, n, r) {
  const i = n.map((s) => {
    const l = Yx(r, s.options);
    return e.addEventListener(s.eventName, s.fn, l), function() {
      e.removeEventListener(s.eventName, s.fn, l);
    };
  });
  return function() {
    i.forEach((l) => {
      l();
    });
  };
}
const Kx = process.env.NODE_ENV === "production", Df = "Invariant failed";
class qr extends Error {
}
qr.prototype.toString = function() {
  return this.message;
};
function D(e, n) {
  if (!e)
    throw Kx ? new qr(Df) : new qr(`${Df}: ${n || ""}`);
}
class Xx extends z.Component {
  constructor() {
    super(...arguments), this.callbacks = null, this.unbind = En, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && Se(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const i = n.error;
      i instanceof qr && (n.preventDefault(), process.env.NODE_ENV !== "production" && xa(i.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = Rt(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(n) {
    if (n instanceof qr) {
      process.env.NODE_ENV !== "production" && xa(n.message), this.setState({});
      return;
    }
    throw n;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const Jx = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, hi = (e) => e + 1, Zx = (e) => `
  You have lifted an item in position ${hi(e.source.index)}
`, Gd = (e, n) => {
  const r = e.droppableId === n.droppableId, i = hi(e.index), s = hi(n.index);
  return r ? `
      You have moved the item from position ${i}
      to position ${s}
    ` : `
    You have moved the item from position ${i}
    in list ${e.droppableId}
    to list ${n.droppableId}
    in position ${s}
  `;
}, Ud = (e, n, r) => n.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${n.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Qx = (e) => {
  const n = e.destination;
  if (n)
    return Gd(e.source, n);
  const r = e.combine;
  return r ? Ud(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Cf = (e) => `
  The item has returned to its starting position
  of ${hi(e.index)}
`, jx = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Cf(e.source)}
    `;
  const n = e.destination, r = e.combine;
  return n ? `
      You have dropped the item.
      ${Gd(e.source, n)}
    ` : r ? `
      You have dropped the item.
      ${Ud(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Cf(e.source)}
  `;
}, eS = {
  dragHandleUsageInstructions: Jx,
  onDragStart: Zx,
  onDragUpdate: Qx,
  onDragEnd: jx
};
var ii = eS;
const Ue = {
  x: 0,
  y: 0
}, ze = (e, n) => ({
  x: e.x + n.x,
  y: e.y + n.y
}), vt = (e, n) => ({
  x: e.x - n.x,
  y: e.y - n.y
}), wn = (e, n) => e.x === n.x && e.y === n.y, cr = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), $n = function(e, n, r) {
  return r === void 0 && (r = 0), e === "x" ? {
    x: n,
    y: r
  } : {
    x: r,
    y: n
  };
}, zr = (e, n) => Math.sqrt((n.x - e.x) ** 2 + (n.y - e.y) ** 2), Af = (e, n) => Math.min(...n.map((r) => zr(e, r))), kd = (e) => (n) => ({
  x: e(n.x),
  y: e(n.y)
});
var tS = (e, n) => {
  const r = Gt({
    top: Math.max(n.top, e.top),
    right: Math.min(n.right, e.right),
    bottom: Math.min(n.bottom, e.bottom),
    left: Math.max(n.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const eo = (e, n) => ({
  top: e.top + n.y,
  left: e.left + n.x,
  bottom: e.bottom + n.y,
  right: e.right + n.x
}), If = (e) => [{
  x: e.left,
  y: e.top
}, {
  x: e.right,
  y: e.top
}, {
  x: e.left,
  y: e.bottom
}, {
  x: e.right,
  y: e.bottom
}], nS = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, rS = (e, n) => n ? eo(e, n.scroll.diff.displacement) : e, oS = (e, n, r) => r && r.increasedBy ? {
  ...e,
  [n.end]: e[n.end] + r.increasedBy[n.line]
} : e, iS = (e, n) => n && n.shouldClipSubject ? tS(n.pageMarginBox, e) : Gt(e);
var ar = (e) => {
  let {
    page: n,
    withPlaceholder: r,
    axis: i,
    frame: s
  } = e;
  const l = rS(n.marginBox, s), u = oS(l, i, r), c = iS(u, s);
  return {
    page: n,
    withPlaceholder: r,
    active: c
  };
}, Ya = (e, n) => {
  e.frame || (process.env.NODE_ENV, D(!1));
  const r = e.frame, i = vt(n, r.scroll.initial), s = cr(i), l = {
    ...r,
    scroll: {
      initial: r.scroll.initial,
      current: n,
      diff: {
        value: i,
        displacement: s
      },
      max: r.scroll.max
    }
  }, u = ar({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: l
  });
  return {
    ...e,
    frame: l,
    subject: u
  };
};
const Hd = Ge((e) => e.reduce((n, r) => (n[r.descriptor.id] = r, n), {})), qd = Ge((e) => e.reduce((n, r) => (n[r.descriptor.id] = r, n), {})), _i = Ge((e) => Object.values(e)), sS = Ge((e) => Object.values(e));
var Vn = Ge((e, n) => sS(n).filter((i) => e === i.descriptor.droppableId).sort((i, s) => i.descriptor.index - s.descriptor.index));
function Ka(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Ei(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var wi = Ge((e, n) => n.filter((r) => r.descriptor.id !== e.descriptor.id)), aS = (e) => {
  let {
    isMovingForward: n,
    draggable: r,
    destination: i,
    insideDestination: s,
    previousImpact: l
  } = e;
  if (!i.isCombineEnabled || !Ka(l))
    return null;
  function c(w) {
    const A = {
      type: "COMBINE",
      combine: {
        draggableId: w,
        droppableId: i.descriptor.id
      }
    };
    return {
      ...l,
      at: A
    };
  }
  const d = l.displaced.all, p = d.length ? d[0] : null;
  if (n)
    return p ? c(p) : null;
  const g = wi(r, s);
  if (!p) {
    if (!g.length)
      return null;
    const w = g[g.length - 1];
    return c(w.descriptor.id);
  }
  const h = g.findIndex((w) => w.descriptor.id === p);
  h === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Could not find displaced item in set") : D(!1));
  const m = h - 1;
  if (m < 0)
    return null;
  const _ = g[m];
  return c(_.descriptor.id);
}, fr = (e, n) => e.descriptor.droppableId === n.descriptor.id;
const zd = {
  point: Ue,
  value: 0
}, Yr = {
  invisible: {},
  visible: {},
  all: []
}, lS = {
  displaced: Yr,
  displacedBy: zd,
  at: null
};
var uS = lS, Pt = (e, n) => (r) => e <= r && r <= n, Yd = (e) => {
  const n = Pt(e.top, e.bottom), r = Pt(e.left, e.right);
  return (i) => {
    if (n(i.top) && n(i.bottom) && r(i.left) && r(i.right))
      return !0;
    const l = n(i.top) || n(i.bottom), u = r(i.left) || r(i.right);
    if (l && u)
      return !0;
    const d = i.top < e.top && i.bottom > e.bottom, p = i.left < e.left && i.right > e.right;
    return d && p ? !0 : d && u || p && l;
  };
}, cS = (e) => {
  const n = Pt(e.top, e.bottom), r = Pt(e.left, e.right);
  return (i) => n(i.top) && n(i.bottom) && r(i.left) && r(i.right);
};
const Xa = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Kd = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var fS = (e) => (n) => {
  const r = Pt(n.top, n.bottom), i = Pt(n.left, n.right);
  return (s) => e === Xa ? r(s.top) && r(s.bottom) : i(s.left) && i(s.right);
};
const dS = (e, n) => {
  const r = n.frame ? n.frame.scroll.diff.displacement : Ue;
  return eo(e, r);
}, pS = (e, n, r) => n.subject.active ? r(n.subject.active)(e) : !1, hS = (e, n, r) => r(n)(e), Ja = (e) => {
  let {
    target: n,
    destination: r,
    viewport: i,
    withDroppableDisplacement: s,
    isVisibleThroughFrameFn: l
  } = e;
  const u = s ? dS(n, r) : n;
  return pS(u, r, l) && hS(u, i, l);
}, gS = (e) => Ja({
  ...e,
  isVisibleThroughFrameFn: Yd
}), Xd = (e) => Ja({
  ...e,
  isVisibleThroughFrameFn: cS
}), vS = (e) => Ja({
  ...e,
  isVisibleThroughFrameFn: fS(e.destination.axis)
}), mS = (e, n, r) => {
  if (typeof r == "boolean")
    return r;
  if (!n)
    return !0;
  const {
    invisible: i,
    visible: s
  } = n;
  if (i[e])
    return !1;
  const l = s[e];
  return l ? l.shouldAnimate : !0;
};
function yS(e, n) {
  const r = e.page.marginBox, i = {
    top: n.point.y,
    right: 0,
    bottom: 0,
    left: n.point.x
  };
  return Gt(qa(r, i));
}
function Kr(e) {
  let {
    afterDragging: n,
    destination: r,
    displacedBy: i,
    viewport: s,
    forceShouldAnimate: l,
    last: u
  } = e;
  return n.reduce(function(d, p) {
    const g = yS(p, i), h = p.descriptor.id;
    if (d.all.push(h), !gS({
      target: g,
      destination: r,
      viewport: s,
      withDroppableDisplacement: !0
    }))
      return d.invisible[p.descriptor.id] = !0, d;
    const _ = mS(h, u, l), w = {
      draggableId: h,
      shouldAnimate: _
    };
    return d.visible[h] = w, d;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function bS(e, n) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return n.inHomeList ? r : r + 1;
}
function Nf(e) {
  let {
    insideDestination: n,
    inHomeList: r,
    displacedBy: i,
    destination: s
  } = e;
  const l = bS(n, {
    inHomeList: r
  });
  return {
    displaced: Yr,
    displacedBy: i,
    at: {
      type: "REORDER",
      destination: {
        droppableId: s.descriptor.id,
        index: l
      }
    }
  };
}
function gi(e) {
  let {
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: s,
    displacedBy: l,
    last: u,
    index: c,
    forceShouldAnimate: d
  } = e;
  const p = fr(n, i);
  if (c == null)
    return Nf({
      insideDestination: r,
      inHomeList: p,
      displacedBy: l,
      destination: i
    });
  const g = r.find((A) => A.descriptor.index === c);
  if (!g)
    return Nf({
      insideDestination: r,
      inHomeList: p,
      displacedBy: l,
      destination: i
    });
  const h = wi(n, r), m = r.indexOf(g), _ = h.slice(m);
  return {
    displaced: Kr({
      afterDragging: _,
      destination: i,
      displacedBy: l,
      last: u,
      viewport: s.frame,
      forceShouldAnimate: d
    }),
    displacedBy: l,
    at: {
      type: "REORDER",
      destination: {
        droppableId: i.descriptor.id,
        index: c
      }
    }
  };
}
function Sn(e, n) {
  return !!n.effected[e];
}
var _S = (e) => {
  let {
    isMovingForward: n,
    destination: r,
    draggables: i,
    combine: s,
    afterCritical: l
  } = e;
  if (!r.isCombineEnabled)
    return null;
  const u = s.draggableId, d = i[u].descriptor.index;
  return Sn(u, l) ? n ? d : d - 1 : n ? d + 1 : d;
}, ES = (e) => {
  let {
    isMovingForward: n,
    isInHomeList: r,
    insideDestination: i,
    location: s
  } = e;
  if (!i.length)
    return null;
  const l = s.index, u = n ? l + 1 : l - 1, c = i[0].descriptor.index, d = i[i.length - 1].descriptor.index, p = r ? d : d + 1;
  return u < c || u > p ? null : u;
}, wS = (e) => {
  let {
    isMovingForward: n,
    isInHomeList: r,
    draggable: i,
    draggables: s,
    destination: l,
    insideDestination: u,
    previousImpact: c,
    viewport: d,
    afterCritical: p
  } = e;
  const g = c.at;
  if (g || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot move in direction without previous impact location") : D(!1)), g.type === "REORDER") {
    const m = ES({
      isMovingForward: n,
      isInHomeList: r,
      location: g.destination,
      insideDestination: u
    });
    return m == null ? null : gi({
      draggable: i,
      insideDestination: u,
      destination: l,
      viewport: d,
      last: c.displaced,
      displacedBy: c.displacedBy,
      index: m
    });
  }
  const h = _S({
    isMovingForward: n,
    destination: l,
    displaced: c.displaced,
    draggables: s,
    combine: g.combine,
    afterCritical: p
  });
  return h == null ? null : gi({
    draggable: i,
    insideDestination: u,
    destination: l,
    viewport: d,
    last: c.displaced,
    displacedBy: c.displacedBy,
    index: h
  });
}, xS = (e) => {
  let {
    displaced: n,
    afterCritical: r,
    combineWith: i,
    displacedBy: s
  } = e;
  const l = !!(n.visible[i] || n.invisible[i]);
  return Sn(i, r) ? l ? Ue : cr(s.point) : l ? s.point : Ue;
}, SS = (e) => {
  let {
    afterCritical: n,
    impact: r,
    draggables: i
  } = e;
  const s = Ei(r);
  s || (process.env.NODE_ENV, D(!1));
  const l = s.draggableId, u = i[l].page.borderBox.center, c = xS({
    displaced: r.displaced,
    afterCritical: n,
    combineWith: l,
    displacedBy: r.displacedBy
  });
  return ze(u, c);
};
const Jd = (e, n) => n.margin[e.start] + n.borderBox[e.size] / 2, DS = (e, n) => n.margin[e.end] + n.borderBox[e.size] / 2, Za = (e, n, r) => n[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Of = (e) => {
  let {
    axis: n,
    moveRelativeTo: r,
    isMoving: i
  } = e;
  return $n(n.line, r.marginBox[n.end] + Jd(n, i), Za(n, r.marginBox, i));
}, Rf = (e) => {
  let {
    axis: n,
    moveRelativeTo: r,
    isMoving: i
  } = e;
  return $n(n.line, r.marginBox[n.start] - DS(n, i), Za(n, r.marginBox, i));
}, CS = (e) => {
  let {
    axis: n,
    moveInto: r,
    isMoving: i
  } = e;
  return $n(n.line, r.contentBox[n.start] + Jd(n, i), Za(n, r.contentBox, i));
};
var AS = (e) => {
  let {
    impact: n,
    draggable: r,
    draggables: i,
    droppable: s,
    afterCritical: l
  } = e;
  const u = Vn(s.descriptor.id, i), c = r.page, d = s.axis;
  if (!u.length)
    return CS({
      axis: d,
      moveInto: s.page,
      isMoving: c
    });
  const {
    displaced: p,
    displacedBy: g
  } = n, h = p.all[0];
  if (h) {
    const _ = i[h];
    if (Sn(h, l))
      return Rf({
        axis: d,
        moveRelativeTo: _.page,
        isMoving: c
      });
    const w = di(_.page, g.point);
    return Rf({
      axis: d,
      moveRelativeTo: w,
      isMoving: c
    });
  }
  const m = u[u.length - 1];
  if (m.descriptor.id === r.descriptor.id)
    return c.borderBox.center;
  if (Sn(m.descriptor.id, l)) {
    const _ = di(m.page, cr(l.displacedBy.point));
    return Of({
      axis: d,
      moveRelativeTo: _,
      isMoving: c
    });
  }
  return Of({
    axis: d,
    moveRelativeTo: m.page,
    isMoving: c
  });
}, Sa = (e, n) => {
  const r = e.frame;
  return r ? ze(n, r.scroll.diff.displacement) : n;
};
const IS = (e) => {
  let {
    impact: n,
    draggable: r,
    droppable: i,
    draggables: s,
    afterCritical: l
  } = e;
  const u = r.page.borderBox.center, c = n.at;
  return !i || !c ? u : c.type === "REORDER" ? AS({
    impact: n,
    draggable: r,
    draggables: s,
    droppable: i,
    afterCritical: l
  }) : SS({
    impact: n,
    draggables: s,
    afterCritical: l
  });
};
var xi = (e) => {
  const n = IS(e), r = e.droppable;
  return r ? Sa(r, n) : n;
}, Zd = (e, n) => {
  const r = vt(n, e.scroll.initial), i = cr(r);
  return {
    frame: Gt({
      top: n.y,
      bottom: n.y + e.frame.height,
      left: n.x,
      right: n.x + e.frame.width
    }),
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: n,
      diff: {
        value: r,
        displacement: i
      }
    }
  };
};
function Pf(e, n) {
  return e.map((r) => n[r]);
}
function NS(e, n) {
  for (let r = 0; r < n.length; r++) {
    const i = n[r].visible[e];
    if (i)
      return i;
  }
  return null;
}
var OS = (e) => {
  let {
    impact: n,
    viewport: r,
    destination: i,
    draggables: s,
    maxScrollChange: l
  } = e;
  const u = Zd(r, ze(r.scroll.current, l)), c = i.frame ? Ya(i, ze(i.frame.scroll.current, l)) : i, d = n.displaced, p = Kr({
    afterDragging: Pf(d.all, s),
    destination: i,
    displacedBy: n.displacedBy,
    viewport: u.frame,
    last: d,
    forceShouldAnimate: !1
  }), g = Kr({
    afterDragging: Pf(d.all, s),
    destination: c,
    displacedBy: n.displacedBy,
    viewport: r.frame,
    last: d,
    forceShouldAnimate: !1
  }), h = {}, m = {}, _ = [d, p, g];
  return d.all.forEach((A) => {
    const x = NS(A, _);
    if (x) {
      m[A] = x;
      return;
    }
    h[A] = !0;
  }), {
    ...n,
    displaced: {
      all: d.all,
      invisible: h,
      visible: m
    }
  };
}, RS = (e, n) => ze(e.scroll.diff.displacement, n), Qa = (e) => {
  let {
    pageBorderBoxCenter: n,
    draggable: r,
    viewport: i
  } = e;
  const s = RS(i, n), l = vt(s, r.page.borderBox.center);
  return ze(r.client.borderBox.center, l);
}, Qd = (e) => {
  let {
    draggable: n,
    destination: r,
    newPageBorderBoxCenter: i,
    viewport: s,
    withDroppableDisplacement: l,
    onlyOnMainAxis: u = !1
  } = e;
  const c = vt(i, n.page.borderBox.center), p = {
    target: eo(n.page.borderBox, c),
    destination: r,
    withDroppableDisplacement: l,
    viewport: s
  };
  return u ? vS(p) : Xd(p);
}, PS = (e) => {
  let {
    isMovingForward: n,
    draggable: r,
    destination: i,
    draggables: s,
    previousImpact: l,
    viewport: u,
    previousPageBorderBoxCenter: c,
    previousClientSelection: d,
    afterCritical: p
  } = e;
  if (!i.isEnabled)
    return null;
  const g = Vn(i.descriptor.id, s), h = fr(r, i), m = aS({
    isMovingForward: n,
    draggable: r,
    destination: i,
    insideDestination: g,
    previousImpact: l
  }) || wS({
    isMovingForward: n,
    isInHomeList: h,
    draggable: r,
    draggables: s,
    destination: i,
    insideDestination: g,
    previousImpact: l,
    viewport: u,
    afterCritical: p
  });
  if (!m)
    return null;
  const _ = xi({
    impact: m,
    draggable: r,
    droppable: i,
    draggables: s,
    afterCritical: p
  });
  if (Qd({
    draggable: r,
    destination: i,
    newPageBorderBoxCenter: _,
    viewport: u.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Qa({
        pageBorderBoxCenter: _,
        draggable: r,
        viewport: u
      }),
      impact: m,
      scrollJumpRequest: null
    };
  const A = vt(_, c), x = OS({
    impact: m,
    viewport: u,
    destination: i,
    draggables: s,
    maxScrollChange: A
  });
  return {
    clientSelection: d,
    impact: x,
    scrollJumpRequest: A
  };
};
const je = (e) => {
  const n = e.subject.active;
  return n || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot get clipped area from droppable") : D(!1)), n;
};
var TS = (e) => {
  let {
    isMovingForward: n,
    pageBorderBoxCenter: r,
    source: i,
    droppables: s,
    viewport: l
  } = e;
  const u = i.subject.active;
  if (!u)
    return null;
  const c = i.axis, d = Pt(u[c.start], u[c.end]), p = _i(s).filter((h) => h !== i).filter((h) => h.isEnabled).filter((h) => !!h.subject.active).filter((h) => Yd(l.frame)(je(h))).filter((h) => {
    const m = je(h);
    return n ? u[c.crossAxisEnd] < m[c.crossAxisEnd] : m[c.crossAxisStart] < u[c.crossAxisStart];
  }).filter((h) => {
    const m = je(h), _ = Pt(m[c.start], m[c.end]);
    return d(m[c.start]) || d(m[c.end]) || _(u[c.start]) || _(u[c.end]);
  }).sort((h, m) => {
    const _ = je(h)[c.crossAxisStart], w = je(m)[c.crossAxisStart];
    return n ? _ - w : w - _;
  }).filter((h, m, _) => je(h)[c.crossAxisStart] === je(_[0])[c.crossAxisStart]);
  if (!p.length)
    return null;
  if (p.length === 1)
    return p[0];
  const g = p.filter((h) => Pt(je(h)[c.start], je(h)[c.end])(r[c.line]));
  return g.length === 1 ? g[0] : g.length > 1 ? g.sort((h, m) => je(h)[c.start] - je(m)[c.start])[0] : p.sort((h, m) => {
    const _ = Af(r, If(je(h))), w = Af(r, If(je(m)));
    return _ !== w ? _ - w : je(h)[c.start] - je(m)[c.start];
  })[0];
};
const Tf = (e, n) => {
  const r = e.page.borderBox.center;
  return Sn(e.descriptor.id, n) ? vt(r, n.displacedBy.point) : r;
}, BS = (e, n) => {
  const r = e.page.borderBox;
  return Sn(e.descriptor.id, n) ? eo(r, cr(n.displacedBy.point)) : r;
};
var LS = (e) => {
  let {
    pageBorderBoxCenter: n,
    viewport: r,
    destination: i,
    insideDestination: s,
    afterCritical: l
  } = e;
  return s.filter((c) => Xd({
    target: BS(c, l),
    destination: i,
    viewport: r.frame,
    withDroppableDisplacement: !0
  })).sort((c, d) => {
    const p = zr(n, Sa(i, Tf(c, l))), g = zr(n, Sa(i, Tf(d, l)));
    return p < g ? -1 : g < p ? 1 : c.descriptor.index - d.descriptor.index;
  })[0] || null;
}, to = Ge(function(n, r) {
  const i = r[n.line];
  return {
    value: i,
    point: $n(n.line, i)
  };
});
const MS = (e, n, r) => {
  const i = e.axis;
  if (e.descriptor.mode === "virtual")
    return $n(i.line, n[i.line]);
  const s = e.subject.page.contentBox[i.size], d = Vn(e.descriptor.id, r).reduce((p, g) => p + g.client.marginBox[i.size], 0) + n[i.line] - s;
  return d <= 0 ? null : $n(i.line, d);
}, jd = (e, n) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: n
  }
}), ep = (e, n, r) => {
  const i = e.frame;
  fr(n, e) && (process.env.NODE_ENV !== "production" ? D(!1, "Should not add placeholder space to home list") : D(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot add placeholder size to a subject when it already has one") : D(!1));
  const s = to(e.axis, n.displaceBy).point, l = MS(e, s, r), u = {
    placeholderSize: s,
    increasedBy: l,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!i) {
    const g = ar({
      page: e.subject.page,
      withPlaceholder: u,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: g
    };
  }
  const c = l ? ze(i.scroll.max, l) : i.scroll.max, d = jd(i, c), p = ar({
    page: e.subject.page,
    withPlaceholder: u,
    axis: e.axis,
    frame: d
  });
  return {
    ...e,
    subject: p,
    frame: d
  };
}, FS = (e) => {
  const n = e.subject.withPlaceholder;
  n || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot remove placeholder form subject when there was none") : D(!1));
  const r = e.frame;
  if (!r) {
    const u = ar({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: u
    };
  }
  const i = n.oldFrameMaxScroll;
  i || (process.env.NODE_ENV !== "production" ? D(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : D(!1));
  const s = jd(r, i), l = ar({
    page: e.subject.page,
    axis: e.axis,
    frame: s,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: l,
    frame: s
  };
};
var $S = (e) => {
  let {
    previousPageBorderBoxCenter: n,
    moveRelativeTo: r,
    insideDestination: i,
    draggable: s,
    draggables: l,
    destination: u,
    viewport: c,
    afterCritical: d
  } = e;
  if (!r) {
    if (i.length)
      return null;
    const m = {
      displaced: Yr,
      displacedBy: zd,
      at: {
        type: "REORDER",
        destination: {
          droppableId: u.descriptor.id,
          index: 0
        }
      }
    }, _ = xi({
      impact: m,
      draggable: s,
      droppable: u,
      draggables: l,
      afterCritical: d
    }), w = fr(s, u) ? u : ep(u, s, l);
    return Qd({
      draggable: s,
      destination: w,
      newPageBorderBoxCenter: _,
      viewport: c.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? m : null;
  }
  const p = n[u.axis.line] <= r.page.borderBox.center[u.axis.line], g = (() => {
    const m = r.descriptor.index;
    return r.descriptor.id === s.descriptor.id || p ? m : m + 1;
  })(), h = to(u.axis, s.displaceBy);
  return gi({
    draggable: s,
    insideDestination: i,
    destination: u,
    viewport: c,
    displacedBy: h,
    last: Yr,
    index: g
  });
}, VS = (e) => {
  let {
    isMovingForward: n,
    previousPageBorderBoxCenter: r,
    draggable: i,
    isOver: s,
    draggables: l,
    droppables: u,
    viewport: c,
    afterCritical: d
  } = e;
  const p = TS({
    isMovingForward: n,
    pageBorderBoxCenter: r,
    source: s,
    droppables: u,
    viewport: c
  });
  if (!p)
    return null;
  const g = Vn(p.descriptor.id, l), h = LS({
    pageBorderBoxCenter: r,
    viewport: c,
    destination: p,
    insideDestination: g,
    afterCritical: d
  }), m = $S({
    previousPageBorderBoxCenter: r,
    destination: p,
    draggable: i,
    draggables: l,
    moveRelativeTo: h,
    insideDestination: g,
    viewport: c,
    afterCritical: d
  });
  if (!m)
    return null;
  const _ = xi({
    impact: m,
    draggable: i,
    droppable: p,
    draggables: l,
    afterCritical: d
  });
  return {
    clientSelection: Qa({
      pageBorderBoxCenter: _,
      draggable: i,
      viewport: c
    }),
    impact: m,
    scrollJumpRequest: null
  };
}, mt = (e) => {
  const n = e.at;
  return n ? n.type === "REORDER" ? n.destination.droppableId : n.combine.droppableId : null;
};
const WS = (e, n) => {
  const r = mt(e);
  return r ? n[r] : null;
};
var GS = (e) => {
  let {
    state: n,
    type: r
  } = e;
  const i = WS(n.impact, n.dimensions.droppables), s = !!i, l = n.dimensions.droppables[n.critical.droppable.id], u = i || l, c = u.axis.direction, d = c === "vertical" && (r === "MOVE_UP" || r === "MOVE_DOWN") || c === "horizontal" && (r === "MOVE_LEFT" || r === "MOVE_RIGHT");
  if (d && !s)
    return null;
  const p = r === "MOVE_DOWN" || r === "MOVE_RIGHT", g = n.dimensions.draggables[n.critical.draggable.id], h = n.current.page.borderBoxCenter, {
    draggables: m,
    droppables: _
  } = n.dimensions;
  return d ? PS({
    isMovingForward: p,
    previousPageBorderBoxCenter: h,
    draggable: g,
    destination: u,
    draggables: m,
    viewport: n.viewport,
    previousClientSelection: n.current.client.selection,
    previousImpact: n.impact,
    afterCritical: n.afterCritical
  }) : VS({
    isMovingForward: p,
    previousPageBorderBoxCenter: h,
    draggable: g,
    isOver: u,
    draggables: m,
    droppables: _,
    viewport: n.viewport,
    afterCritical: n.afterCritical
  });
};
function Mn(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function tp(e) {
  const n = Pt(e.top, e.bottom), r = Pt(e.left, e.right);
  return function(s) {
    return n(s.y) && r(s.x);
  };
}
function US(e, n) {
  return e.left < n.right && e.right > n.left && e.top < n.bottom && e.bottom > n.top;
}
function kS(e) {
  let {
    pageBorderBox: n,
    draggable: r,
    candidates: i
  } = e;
  const s = r.page.borderBox.center, l = i.map((u) => {
    const c = u.axis, d = $n(u.axis.line, n.center[c.line], u.page.borderBox.center[c.crossAxisLine]);
    return {
      id: u.descriptor.id,
      distance: zr(s, d)
    };
  }).sort((u, c) => c.distance - u.distance);
  return l[0] ? l[0].id : null;
}
function HS(e) {
  let {
    pageBorderBox: n,
    draggable: r,
    droppables: i
  } = e;
  const s = _i(i).filter((l) => {
    if (!l.isEnabled)
      return !1;
    const u = l.subject.active;
    if (!u || !US(n, u))
      return !1;
    if (tp(u)(n.center))
      return !0;
    const c = l.axis, d = u.center[c.crossAxisLine], p = n[c.crossAxisStart], g = n[c.crossAxisEnd], h = Pt(u[c.crossAxisStart], u[c.crossAxisEnd]), m = h(p), _ = h(g);
    return !m && !_ ? !0 : m ? p < d : g > d;
  });
  return s.length ? s.length === 1 ? s[0].descriptor.id : kS({
    pageBorderBox: n,
    draggable: r,
    candidates: s
  }) : null;
}
const np = (e, n) => Gt(eo(e, n));
var qS = (e, n) => {
  const r = e.frame;
  return r ? np(n, r.scroll.diff.value) : n;
};
function rp(e) {
  let {
    displaced: n,
    id: r
  } = e;
  return !!(n.visible[r] || n.invisible[r]);
}
function zS(e) {
  let {
    draggable: n,
    closest: r,
    inHomeList: i
  } = e;
  return r ? i && r.descriptor.index > n.descriptor.index ? r.descriptor.index - 1 : r.descriptor.index : null;
}
var YS = (e) => {
  let {
    pageBorderBoxWithDroppableScroll: n,
    draggable: r,
    destination: i,
    insideDestination: s,
    last: l,
    viewport: u,
    afterCritical: c
  } = e;
  const d = i.axis, p = to(i.axis, r.displaceBy), g = p.value, h = n[d.start], m = n[d.end], w = wi(r, s).find((x) => {
    const M = x.descriptor.id, B = x.page.borderBox.center[d.line], R = Sn(M, c), P = rp({
      displaced: l,
      id: M
    });
    return R ? P ? m <= B : h < B - g : P ? m <= B + g : h < B;
  }) || null, A = zS({
    draggable: r,
    closest: w,
    inHomeList: fr(r, i)
  });
  return gi({
    draggable: r,
    insideDestination: s,
    destination: i,
    viewport: u,
    last: l,
    displacedBy: p,
    index: A
  });
};
const KS = 4;
var XS = (e) => {
  let {
    draggable: n,
    pageBorderBoxWithDroppableScroll: r,
    previousImpact: i,
    destination: s,
    insideDestination: l,
    afterCritical: u
  } = e;
  if (!s.isCombineEnabled)
    return null;
  const c = s.axis, d = to(s.axis, n.displaceBy), p = d.value, g = r[c.start], h = r[c.end], _ = wi(n, l).find((A) => {
    const x = A.descriptor.id, M = A.page.borderBox, R = M[c.size] / KS, P = Sn(x, u), I = rp({
      displaced: i.displaced,
      id: x
    });
    return P ? I ? h > M[c.start] + R && h < M[c.end] - R : g > M[c.start] - p + R && g < M[c.end] - p - R : I ? h > M[c.start] + p + R && h < M[c.end] + p - R : g > M[c.start] + R && g < M[c.end] - R;
  });
  return _ ? {
    displacedBy: d,
    displaced: i.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: _.descriptor.id,
        droppableId: s.descriptor.id
      }
    }
  } : null;
}, op = (e) => {
  let {
    pageOffset: n,
    draggable: r,
    draggables: i,
    droppables: s,
    previousImpact: l,
    viewport: u,
    afterCritical: c
  } = e;
  const d = np(r.page.borderBox, n), p = HS({
    pageBorderBox: d,
    draggable: r,
    droppables: s
  });
  if (!p)
    return uS;
  const g = s[p], h = Vn(g.descriptor.id, i), m = qS(g, d);
  return XS({
    pageBorderBoxWithDroppableScroll: m,
    draggable: r,
    previousImpact: l,
    destination: g,
    insideDestination: h,
    afterCritical: c
  }) || YS({
    pageBorderBoxWithDroppableScroll: m,
    draggable: r,
    destination: g,
    insideDestination: h,
    last: l.displaced,
    viewport: u,
    afterCritical: c
  });
}, ja = (e, n) => ({
  ...e,
  [n.descriptor.id]: n
});
const JS = (e) => {
  let {
    previousImpact: n,
    impact: r,
    droppables: i
  } = e;
  const s = mt(n), l = mt(r);
  if (!s || s === l)
    return i;
  const u = i[s];
  if (!u.subject.withPlaceholder)
    return i;
  const c = FS(u);
  return ja(i, c);
};
var ZS = (e) => {
  let {
    draggable: n,
    draggables: r,
    droppables: i,
    previousImpact: s,
    impact: l
  } = e;
  const u = JS({
    previousImpact: s,
    impact: l,
    droppables: i
  }), c = mt(l);
  if (!c)
    return u;
  const d = i[c];
  if (fr(n, d) || d.subject.withPlaceholder)
    return u;
  const p = ep(d, n, r);
  return ja(u, p);
}, Wr = (e) => {
  let {
    state: n,
    clientSelection: r,
    dimensions: i,
    viewport: s,
    impact: l,
    scrollJumpRequest: u
  } = e;
  const c = s || n.viewport, d = i || n.dimensions, p = r || n.current.client.selection, g = vt(p, n.initial.client.selection), h = {
    offset: g,
    selection: p,
    borderBoxCenter: ze(n.initial.client.borderBoxCenter, g)
  }, m = {
    selection: ze(h.selection, c.scroll.current),
    borderBoxCenter: ze(h.borderBoxCenter, c.scroll.current),
    offset: ze(h.offset, c.scroll.diff.value)
  }, _ = {
    client: h,
    page: m
  };
  if (n.phase === "COLLECTING")
    return {
      ...n,
      dimensions: d,
      viewport: c,
      current: _
    };
  const w = d.draggables[n.critical.draggable.id], A = l || op({
    pageOffset: m.offset,
    draggable: w,
    draggables: d.draggables,
    droppables: d.droppables,
    previousImpact: n.impact,
    viewport: c,
    afterCritical: n.afterCritical
  }), x = ZS({
    draggable: w,
    impact: A,
    previousImpact: n.impact,
    draggables: d.draggables,
    droppables: d.droppables
  });
  return {
    ...n,
    current: _,
    dimensions: {
      draggables: d.draggables,
      droppables: x
    },
    impact: A,
    viewport: c,
    scrollJumpRequest: u || null,
    forceShouldAnimate: u ? !1 : null
  };
};
function QS(e, n) {
  return e.map((r) => n[r]);
}
var ip = (e) => {
  let {
    impact: n,
    viewport: r,
    draggables: i,
    destination: s,
    forceShouldAnimate: l
  } = e;
  const u = n.displaced, c = QS(u.all, i), d = Kr({
    afterDragging: c,
    destination: s,
    displacedBy: n.displacedBy,
    viewport: r.frame,
    forceShouldAnimate: l,
    last: u
  });
  return {
    ...n,
    displaced: d
  };
}, sp = (e) => {
  let {
    impact: n,
    draggable: r,
    droppable: i,
    draggables: s,
    viewport: l,
    afterCritical: u
  } = e;
  const c = xi({
    impact: n,
    draggable: r,
    draggables: s,
    droppable: i,
    afterCritical: u
  });
  return Qa({
    pageBorderBoxCenter: c,
    draggable: r,
    viewport: l
  });
}, ap = (e) => {
  let {
    state: n,
    dimensions: r,
    viewport: i
  } = e;
  n.movementMode !== "SNAP" && (process.env.NODE_ENV, D(!1));
  const s = n.impact, l = i || n.viewport, u = r || n.dimensions, {
    draggables: c,
    droppables: d
  } = u, p = c[n.critical.draggable.id], g = mt(s);
  g || (process.env.NODE_ENV !== "production" ? D(!1, "Must be over a destination in SNAP movement mode") : D(!1));
  const h = d[g], m = ip({
    impact: s,
    viewport: l,
    destination: h,
    draggables: c
  }), _ = sp({
    impact: m,
    draggable: p,
    droppable: h,
    draggables: c,
    viewport: l,
    afterCritical: n.afterCritical
  });
  return Wr({
    impact: m,
    clientSelection: _,
    state: n,
    dimensions: u,
    viewport: l
  });
}, jS = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), lp = (e) => {
  let {
    draggable: n,
    home: r,
    draggables: i,
    viewport: s
  } = e;
  const l = to(r.axis, n.displaceBy), u = Vn(r.descriptor.id, i), c = u.indexOf(n);
  c === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Expected draggable to be inside home list") : D(!1));
  const d = u.slice(c + 1), p = d.reduce((_, w) => (_[w.descriptor.id] = !0, _), {}), g = {
    inVirtualList: r.descriptor.mode === "virtual",
    displacedBy: l,
    effected: p
  };
  return {
    impact: {
      displaced: Kr({
        afterDragging: d,
        destination: r,
        displacedBy: l,
        last: null,
        viewport: s.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: l,
      at: {
        type: "REORDER",
        destination: jS(n.descriptor)
      }
    },
    afterCritical: g
  };
}, eD = (e, n) => ({
  draggables: e.draggables,
  droppables: ja(e.droppables, n)
});
const no = (e) => {
  process.env.NODE_ENV;
}, ro = (e) => {
  process.env.NODE_ENV;
};
var tD = (e) => {
  let {
    draggable: n,
    offset: r,
    initialWindowScroll: i
  } = e;
  const s = di(n.client, r), l = pi(s, i);
  return {
    ...n,
    placeholder: {
      ...n.placeholder,
      client: s
    },
    client: s,
    page: l
  };
}, nD = (e) => {
  const n = e.frame;
  return n || (process.env.NODE_ENV !== "production" ? D(!1, "Expected Droppable to have a frame") : D(!1)), n;
}, rD = (e) => {
  let {
    additions: n,
    updatedDroppables: r,
    viewport: i
  } = e;
  const s = i.scroll.diff.value;
  return n.map((l) => {
    const u = l.descriptor.droppableId, c = r[u], p = nD(c).scroll.diff.value, g = ze(s, p);
    return tD({
      draggable: l,
      offset: g,
      initialWindowScroll: i.scroll.initial
    });
  });
}, oD = (e) => {
  let {
    state: n,
    published: r
  } = e;
  no();
  const i = r.modified.map((B) => {
    const R = n.dimensions.droppables[B.droppableId];
    return Ya(R, B.scroll);
  }), s = {
    ...n.dimensions.droppables,
    ...Hd(i)
  }, l = qd(rD({
    additions: r.additions,
    updatedDroppables: s,
    viewport: n.viewport
  })), u = {
    ...n.dimensions.draggables,
    ...l
  };
  r.removals.forEach((B) => {
    delete u[B];
  });
  const c = {
    droppables: s,
    draggables: u
  }, d = mt(n.impact), p = d ? c.droppables[d] : null, g = c.draggables[n.critical.draggable.id], h = c.droppables[n.critical.droppable.id], {
    impact: m,
    afterCritical: _
  } = lp({
    draggable: g,
    home: h,
    draggables: u,
    viewport: n.viewport
  }), w = p && p.isCombineEnabled ? n.impact : m, A = op({
    pageOffset: n.current.page.offset,
    draggable: c.draggables[n.critical.draggable.id],
    draggables: c.draggables,
    droppables: c.droppables,
    previousImpact: w,
    viewport: n.viewport,
    afterCritical: _
  });
  ro();
  const x = {
    ...n,
    phase: "DRAGGING",
    impact: A,
    onLiftImpact: m,
    dimensions: c,
    afterCritical: _,
    forceShouldAnimate: !1
  };
  return n.phase === "COLLECTING" ? x : {
    ...x,
    phase: "DROP_PENDING",
    reason: n.reason,
    isWaiting: !1
  };
};
const Da = (e) => e.movementMode === "SNAP", ea = (e, n, r) => {
  const i = eD(e.dimensions, n);
  return !Da(e) || r ? Wr({
    state: e,
    dimensions: i
  }) : ap({
    state: e,
    dimensions: i
  });
};
function ta(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Bf = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var iD = function(e, n) {
  if (e === void 0 && (e = Bf), n.type === "FLUSH")
    return {
      ...Bf,
      shouldFlush: !0
    };
  if (n.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "INITIAL_PUBLISH must come after a IDLE phase") : D(!1));
    const {
      critical: r,
      clientSelection: i,
      viewport: s,
      dimensions: l,
      movementMode: u
    } = n.payload, c = l.draggables[r.draggable.id], d = l.droppables[r.droppable.id], p = {
      selection: i,
      borderBoxCenter: c.client.borderBox.center,
      offset: Ue
    }, g = {
      client: p,
      page: {
        selection: ze(p.selection, s.scroll.initial),
        borderBoxCenter: ze(p.selection, s.scroll.initial),
        offset: ze(p.selection, s.scroll.diff.value)
      }
    }, h = _i(l.droppables).every((A) => !A.isFixedOnPage), {
      impact: m,
      afterCritical: _
    } = lp({
      draggable: c,
      home: d,
      draggables: l.draggables,
      viewport: s
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: r,
      movementMode: u,
      dimensions: l,
      initial: g,
      current: g,
      isWindowScrollAllowed: h,
      impact: m,
      afterCritical: _,
      onLiftImpact: m,
      viewport: s,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (n.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? D(!1, `Collection cannot start from phase ${e.phase}`) : D(!1)), {
      ...e,
      phase: "COLLECTING"
    });
  if (n.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? D(!1, `Unexpected ${n.type} received in phase ${e.phase}`) : D(!1)), oD({
      state: e,
      published: n.payload
    });
  if (n.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Mn(e) || (process.env.NODE_ENV !== "production" ? D(!1, `${n.type} not permitted in phase ${e.phase}`) : D(!1));
    const {
      client: r
    } = n.payload;
    return wn(r, e.current.client.selection) ? e : Wr({
      state: e,
      clientSelection: r,
      impact: Da(e) ? e.impact : null
    });
  }
  if (n.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return ta(e);
    Mn(e) || (process.env.NODE_ENV !== "production" ? D(!1, `${n.type} not permitted in phase ${e.phase}`) : D(!1));
    const {
      id: r,
      newScroll: i
    } = n.payload, s = e.dimensions.droppables[r];
    if (!s)
      return e;
    const l = Ya(s, i);
    return ea(e, l, !1);
  }
  if (n.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Mn(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Attempting to move in an unsupported phase ${e.phase}`) : D(!1));
    const {
      id: r,
      isEnabled: i
    } = n.payload, s = e.dimensions.droppables[r];
    s || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : D(!1)), s.isEnabled === i && (process.env.NODE_ENV !== "production" ? D(!1, `Trying to set droppable isEnabled to ${String(i)}
      but it is already ${String(s.isEnabled)}`) : D(!1));
    const l = {
      ...s,
      isEnabled: i
    };
    return ea(e, l, !0);
  }
  if (n.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Mn(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Attempting to move in an unsupported phase ${e.phase}`) : D(!1));
    const {
      id: r,
      isCombineEnabled: i
    } = n.payload, s = e.dimensions.droppables[r];
    s || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : D(!1)), s.isCombineEnabled === i && (process.env.NODE_ENV !== "production" ? D(!1, `Trying to set droppable isCombineEnabled to ${String(i)}
      but it is already ${String(s.isCombineEnabled)}`) : D(!1));
    const l = {
      ...s,
      isCombineEnabled: i
    };
    return ea(e, l, !0);
  }
  if (n.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Mn(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot move by window in phase ${e.phase}`) : D(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? D(!1, "Window scrolling is currently not supported for fixed lists") : D(!1));
    const r = n.payload.newScroll;
    if (wn(e.viewport.scroll.current, r))
      return ta(e);
    const i = Zd(e.viewport, r);
    return Da(e) ? ap({
      state: e,
      viewport: i
    }) : Wr({
      state: e,
      viewport: i
    });
  }
  if (n.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Mn(e))
      return e;
    const r = n.payload.maxScroll;
    if (wn(r, e.viewport.scroll.max))
      return e;
    const i = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: r
      }
    };
    return {
      ...e,
      viewport: i
    };
  }
  if (n.type === "MOVE_UP" || n.type === "MOVE_DOWN" || n.type === "MOVE_LEFT" || n.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? D(!1, `${n.type} received while not in DRAGGING phase`) : D(!1));
    const r = GS({
      state: e,
      type: n.type
    });
    return r ? Wr({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (n.type === "DROP_PENDING") {
    const r = n.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? D(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : D(!1)), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: r
    };
  }
  if (n.type === "DROP_ANIMATE") {
    const {
      completed: r,
      dropDuration: i,
      newHomeClientOffset: s
    } = n.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot animate drop from phase ${e.phase}`) : D(!1)), {
      phase: "DROP_ANIMATING",
      completed: r,
      dropDuration: i,
      newHomeClientOffset: s,
      dimensions: e.dimensions
    };
  }
  if (n.type === "DROP_COMPLETE") {
    const {
      completed: r
    } = n.payload;
    return {
      phase: "IDLE",
      completed: r,
      shouldFlush: !1
    };
  }
  return e;
};
const sD = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), aD = (e) => ({
  type: "LIFT",
  payload: e
}), lD = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), uD = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), cD = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), fD = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), dD = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), pD = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), up = (e) => ({
  type: "MOVE",
  payload: e
}), hD = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), gD = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), vD = () => ({
  type: "MOVE_UP",
  payload: null
}), mD = () => ({
  type: "MOVE_DOWN",
  payload: null
}), yD = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), bD = () => ({
  type: "MOVE_LEFT",
  payload: null
}), el = () => ({
  type: "FLUSH",
  payload: null
}), _D = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), tl = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), cp = (e) => ({
  type: "DROP",
  payload: e
}), ED = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), fp = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function wD(e) {
  if (e.length <= 1)
    return;
  const n = e.map((s) => s.descriptor.index), r = {};
  for (let s = 1; s < n.length; s++) {
    const l = n[s], u = n[s - 1];
    l !== u + 1 && (r[l] = !0);
  }
  if (!Object.keys(r).length)
    return;
  const i = n.map((s) => !!r[s] ? `[🔥${s}]` : `${s}`).join(", ");
  process.env.NODE_ENV !== "production" && Se(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${i}
  `);
}
function xD(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const r = Vn(e.droppable.id, n.draggables);
    wD(r);
  }
}
var SD = (e) => (n) => {
  let {
    getState: r,
    dispatch: i
  } = n;
  return (s) => (l) => {
    if (l.type !== "LIFT") {
      s(l);
      return;
    }
    const {
      id: u,
      clientSelection: c,
      movementMode: d
    } = l.payload, p = r();
    p.phase === "DROP_ANIMATING" && i(tl({
      completed: p.completed
    })), r().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Unexpected phase to start a drag") : D(!1)), i(el()), i(sD({
      draggableId: u,
      movementMode: d
    }));
    const h = {
      draggableId: u,
      scrollOptions: {
        shouldPublishImmediately: d === "SNAP"
      }
    }, {
      critical: m,
      dimensions: _,
      viewport: w
    } = e.startPublishing(h);
    xD(m, _), i(lD({
      critical: m,
      dimensions: _,
      clientSelection: c,
      movementMode: d,
      viewport: w
    }));
  };
}, DD = (e) => () => (n) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), n(r);
};
const nl = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Xr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, dp = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Bn = `${dp.outOfTheWay}s ${nl.outOfTheWay}`, Gr = {
  fluid: `opacity ${Bn}`,
  snap: `transform ${Bn}, opacity ${Bn}`,
  drop: (e) => {
    const n = `${e}s ${nl.drop}`;
    return `transform ${n}, opacity ${n}`;
  },
  outOfTheWay: `transform ${Bn}`,
  placeholder: `height ${Bn}, width ${Bn}, margin ${Bn}`
}, Lf = (e) => wn(e, Ue) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ca = {
  moveTo: Lf,
  drop: (e, n) => {
    const r = Lf(e);
    if (r)
      return n ? `${r} scale(${Xr.scale.drop})` : r;
  }
}, {
  minDropTime: Aa,
  maxDropTime: pp
} = dp, CD = pp - Aa, Mf = 1500, AD = 0.6;
var ID = (e) => {
  let {
    current: n,
    destination: r,
    reason: i
  } = e;
  const s = zr(n, r);
  if (s <= 0)
    return Aa;
  if (s >= Mf)
    return pp;
  const l = s / Mf, u = Aa + CD * l, c = i === "CANCEL" ? u * AD : u;
  return Number(c.toFixed(2));
}, ND = (e) => {
  let {
    impact: n,
    draggable: r,
    dimensions: i,
    viewport: s,
    afterCritical: l
  } = e;
  const {
    draggables: u,
    droppables: c
  } = i, d = mt(n), p = d ? c[d] : null, g = c[r.descriptor.droppableId], h = sp({
    impact: n,
    draggable: r,
    draggables: u,
    afterCritical: l,
    droppable: p || g,
    viewport: s
  });
  return vt(h, r.client.borderBox.center);
}, OD = (e) => {
  let {
    draggables: n,
    reason: r,
    lastImpact: i,
    home: s,
    viewport: l,
    onLiftImpact: u
  } = e;
  return !i.at || r !== "DROP" ? {
    impact: ip({
      draggables: n,
      impact: u,
      destination: s,
      viewport: l,
      forceShouldAnimate: !0
    }),
    didDropInsideDroppable: !1
  } : i.at.type === "REORDER" ? {
    impact: i,
    didDropInsideDroppable: !0
  } : {
    impact: {
      ...i,
      displaced: Yr
    },
    didDropInsideDroppable: !0
  };
};
const RD = (e) => {
  let {
    getState: n,
    dispatch: r
  } = e;
  return (i) => (s) => {
    if (s.type !== "DROP") {
      i(s);
      return;
    }
    const l = n(), u = s.payload.reason;
    if (l.phase === "COLLECTING") {
      r(ED({
        reason: u
      }));
      return;
    }
    if (l.phase === "IDLE")
      return;
    l.phase === "DROP_PENDING" && l.isWaiting && (process.env.NODE_ENV !== "production" ? D(!1, "A DROP action occurred while DROP_PENDING and still waiting") : D(!1)), l.phase === "DRAGGING" || l.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot drop in phase: ${l.phase}`) : D(!1));
    const d = l.critical, p = l.dimensions, g = p.draggables[l.critical.draggable.id], {
      impact: h,
      didDropInsideDroppable: m
    } = OD({
      reason: u,
      lastImpact: l.impact,
      afterCritical: l.afterCritical,
      onLiftImpact: l.onLiftImpact,
      home: l.dimensions.droppables[l.critical.droppable.id],
      viewport: l.viewport,
      draggables: l.dimensions.draggables
    }), _ = m ? Ka(h) : null, w = m ? Ei(h) : null, A = {
      index: d.draggable.index,
      droppableId: d.droppable.id
    }, x = {
      draggableId: g.descriptor.id,
      type: g.descriptor.type,
      source: A,
      reason: u,
      mode: l.movementMode,
      destination: _,
      combine: w
    }, M = ND({
      impact: h,
      draggable: g,
      dimensions: p,
      viewport: l.viewport,
      afterCritical: l.afterCritical
    }), B = {
      critical: l.critical,
      afterCritical: l.afterCritical,
      result: x,
      impact: h
    };
    if (!(!wn(l.current.client.offset, M) || !!x.combine)) {
      r(tl({
        completed: B
      }));
      return;
    }
    const P = ID({
      current: l.current.client.offset,
      destination: M,
      reason: u
    });
    r(_D({
      newHomeClientOffset: M,
      dropDuration: P,
      completed: B
    }));
  };
};
var PD = RD, hp = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function TD(e) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: (n) => {
      n.target !== window && n.target !== window.document || e();
    }
  };
}
function BD(e) {
  let {
    onWindowScroll: n
  } = e;
  function r() {
    n(hp());
  }
  const i = Hr(r), s = TD(i);
  let l = En;
  function u() {
    return l !== En;
  }
  function c() {
    u() && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start scroll listener when already active") : D(!1)), l = Rt(window, [s]);
  }
  function d() {
    u() || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop scroll listener when not active") : D(!1)), i.cancel(), l(), l = En;
  }
  return {
    start: c,
    stop: d,
    isActive: u
  };
}
const LD = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", MD = (e) => {
  const n = BD({
    onWindowScroll: (r) => {
      e.dispatch(hD({
        newScroll: r
      }));
    }
  });
  return (r) => (i) => {
    !n.isActive() && i.type === "INITIAL_PUBLISH" && n.start(), n.isActive() && LD(i) && n.stop(), r(i);
  };
};
var FD = MD, $D = (e) => {
  let n = !1, r = !1;
  const i = setTimeout(() => {
    r = !0;
  }), s = (l) => {
    if (n) {
      process.env.NODE_ENV !== "production" && Se("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && Se(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    n = !0, e(l), clearTimeout(i);
  };
  return s.wasCalled = () => n, s;
}, VD = () => {
  const e = [], n = (s) => {
    const l = e.findIndex((c) => c.timerId === s);
    l === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Could not find timer") : D(!1));
    const [u] = e.splice(l, 1);
    u.callback();
  };
  return {
    add: (s) => {
      const l = setTimeout(() => n(l)), u = {
        timerId: l,
        callback: s
      };
      e.push(u);
    },
    flush: () => {
      if (!e.length)
        return;
      const s = [...e];
      e.length = 0, s.forEach((l) => {
        clearTimeout(l.timerId), l.callback();
      });
    }
  };
};
const WD = (e, n) => e == null && n == null ? !0 : e == null || n == null ? !1 : e.droppableId === n.droppableId && e.index === n.index, GD = (e, n) => e == null && n == null ? !0 : e == null || n == null ? !1 : e.draggableId === n.draggableId && e.droppableId === n.droppableId, UD = (e, n) => {
  if (e === n)
    return !0;
  const r = e.draggable.id === n.draggable.id && e.draggable.droppableId === n.draggable.droppableId && e.draggable.type === n.draggable.type && e.draggable.index === n.draggable.index, i = e.droppable.id === n.droppable.id && e.droppable.type === n.droppable.type;
  return r && i;
}, Tr = (e, n) => {
  no(), n(), ro();
}, Zo = (e, n) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: n
});
function na(e, n, r, i) {
  if (!e) {
    r(i(n));
    return;
  }
  const s = $D(r);
  e(n, {
    announce: s
  }), s.wasCalled() || r(i(n));
}
var kD = (e, n) => {
  const r = VD();
  let i = null;
  const s = (h, m) => {
    i && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : D(!1)), Tr("onBeforeCapture", () => {
      const _ = e().onBeforeCapture;
      _ && _({
        draggableId: h,
        mode: m
      });
    });
  }, l = (h, m) => {
    i && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : D(!1)), Tr("onBeforeDragStart", () => {
      const _ = e().onBeforeDragStart;
      _ && _(Zo(h, m));
    });
  }, u = (h, m) => {
    i && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : D(!1));
    const _ = Zo(h, m);
    i = {
      mode: m,
      lastCritical: h,
      lastLocation: _.source,
      lastCombine: null
    }, r.add(() => {
      Tr("onDragStart", () => na(e().onDragStart, _, n, ii.onDragStart));
    });
  }, c = (h, m) => {
    const _ = Ka(m), w = Ei(m);
    i || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onDragMove when onDragStart has not been called") : D(!1));
    const A = !UD(h, i.lastCritical);
    A && (i.lastCritical = h);
    const x = !WD(i.lastLocation, _);
    x && (i.lastLocation = _);
    const M = !GD(i.lastCombine, w);
    if (M && (i.lastCombine = w), !A && !x && !M)
      return;
    const B = {
      ...Zo(h, i.mode),
      combine: w,
      destination: _
    };
    r.add(() => {
      Tr("onDragUpdate", () => na(e().onDragUpdate, B, n, ii.onDragUpdate));
    });
  }, d = () => {
    i || (process.env.NODE_ENV !== "production" ? D(!1, "Can only flush responders while dragging") : D(!1)), r.flush();
  }, p = (h) => {
    i || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : D(!1)), i = null, Tr("onDragEnd", () => na(e().onDragEnd, h, n, ii.onDragEnd));
  };
  return {
    beforeCapture: s,
    beforeStart: l,
    start: u,
    update: c,
    flush: d,
    drop: p,
    abort: () => {
      if (!i)
        return;
      const h = {
        ...Zo(i.lastCritical, i.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      p(h);
    }
  };
}, HD = (e, n) => {
  const r = kD(e, n);
  return (i) => (s) => (l) => {
    if (l.type === "BEFORE_INITIAL_CAPTURE") {
      r.beforeCapture(l.payload.draggableId, l.payload.movementMode);
      return;
    }
    if (l.type === "INITIAL_PUBLISH") {
      const c = l.payload.critical;
      r.beforeStart(c, l.payload.movementMode), s(l), r.start(c, l.payload.movementMode);
      return;
    }
    if (l.type === "DROP_COMPLETE") {
      const c = l.payload.completed.result;
      r.flush(), s(l), r.drop(c);
      return;
    }
    if (s(l), l.type === "FLUSH") {
      r.abort();
      return;
    }
    const u = i.getState();
    u.phase === "DRAGGING" && r.update(u.critical, u.impact);
  };
};
const qD = (e) => (n) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    n(r);
    return;
  }
  const i = e.getState();
  i.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot finish a drop animating when no drop is occurring") : D(!1)), e.dispatch(tl({
    completed: i.completed
  }));
};
var zD = qD;
const YD = (e) => {
  let n = null, r = null;
  function i() {
    r && (cancelAnimationFrame(r), r = null), n && (n(), n = null);
  }
  return (s) => (l) => {
    if ((l.type === "FLUSH" || l.type === "DROP_COMPLETE" || l.type === "DROP_ANIMATION_FINISHED") && i(), s(l), l.type !== "DROP_ANIMATE")
      return;
    const u = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(fp());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, n = Rt(window, [u]);
    });
  };
};
var KD = YD, XD = (e) => () => (n) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), n(r);
}, JD = (e) => {
  let n = !1;
  return () => (r) => (i) => {
    if (i.type === "INITIAL_PUBLISH") {
      n = !0, e.tryRecordFocus(i.payload.critical.draggable.id), r(i), e.tryRestoreFocusRecorded();
      return;
    }
    if (r(i), !!n) {
      if (i.type === "FLUSH") {
        n = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (i.type === "DROP_COMPLETE") {
        n = !1;
        const s = i.payload.completed.result;
        s.combine && e.tryShiftRecord(s.draggableId, s.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const ZD = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var QD = (e) => (n) => (r) => (i) => {
  if (ZD(i)) {
    e.stop(), r(i);
    return;
  }
  if (i.type === "INITIAL_PUBLISH") {
    r(i);
    const s = n.getState();
    s.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : D(!1)), e.start(s);
    return;
  }
  r(i), e.scroll(n.getState());
};
const jD = (e) => (n) => (r) => {
  if (n(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const i = e.getState();
  i.phase === "DROP_PENDING" && (i.isWaiting || e.dispatch(cp({
    reason: i.reason
  })));
};
var eC = jD;
const tC = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : L0;
var nC = (e) => {
  let {
    dimensionMarshal: n,
    focusMarshal: r,
    styleMarshal: i,
    getResponders: s,
    announce: l,
    autoScroller: u
  } = e;
  return M0(iD, tC(F0(DD(i), XD(n), SD(n), PD, zD, KD, eC, QD(u), FD, JD(r), HD(s, l))));
};
const ra = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function rC(e) {
  let {
    registry: n,
    callbacks: r
  } = e, i = ra(), s = null;
  const l = () => {
    s || (r.collectionStarting(), s = requestAnimationFrame(() => {
      s = null, no();
      const {
        additions: p,
        removals: g,
        modified: h
      } = i, m = Object.keys(p).map((A) => n.draggable.getById(A).getDimension(Ue)).sort((A, x) => A.descriptor.index - x.descriptor.index), _ = Object.keys(h).map((A) => {
        const M = n.droppable.getById(A).callbacks.getScrollWhileDragging();
        return {
          droppableId: A,
          scroll: M
        };
      }), w = {
        additions: m,
        removals: Object.keys(g),
        modified: _
      };
      i = ra(), ro(), r.publish(w);
    }));
  };
  return {
    add: (p) => {
      const g = p.descriptor.id;
      i.additions[g] = p, i.modified[p.descriptor.droppableId] = !0, i.removals[g] && delete i.removals[g], l();
    },
    remove: (p) => {
      const g = p.descriptor;
      i.removals[g.id] = !0, i.modified[g.droppableId] = !0, i.additions[g.id] && delete i.additions[g.id], l();
    },
    stop: () => {
      s && (cancelAnimationFrame(s), s = null, i = ra());
    }
  };
}
var gp = (e) => {
  let {
    scrollHeight: n,
    scrollWidth: r,
    height: i,
    width: s
  } = e;
  const l = vt({
    x: r,
    y: n
  }, {
    x: s,
    y: i
  });
  return {
    x: Math.max(0, l.x),
    y: Math.max(0, l.y)
  };
}, vp = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find document.documentElement") : D(!1)), e;
}, mp = () => {
  const e = vp();
  return gp({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, oC = () => {
  const e = hp(), n = mp(), r = e.y, i = e.x, s = vp(), l = s.clientWidth, u = s.clientHeight, c = i + l, d = r + u;
  return {
    frame: Gt({
      top: r,
      left: i,
      right: c,
      bottom: d
    }),
    scroll: {
      initial: e,
      current: e,
      max: n,
      diff: {
        value: Ue,
        displacement: Ue
      }
    }
  };
}, iC = (e) => {
  let {
    critical: n,
    scrollOptions: r,
    registry: i
  } = e;
  no();
  const s = oC(), l = s.scroll.current, u = n.droppable, c = i.droppable.getAllByType(u.type).map((h) => h.callbacks.getDimensionAndWatchScroll(l, r)), d = i.draggable.getAllByType(n.draggable.type).map((h) => h.getDimension(l)), p = {
    draggables: qd(d),
    droppables: Hd(c)
  };
  return ro(), {
    dimensions: p,
    critical: n,
    viewport: s
  };
};
function Ff(e, n, r) {
  return r.descriptor.id === n.id || r.descriptor.type !== n.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Se(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var sC = (e, n) => {
  let r = null;
  const i = rC({
    callbacks: {
      publish: n.publishWhileDragging,
      collectionStarting: n.collectionStarting
    },
    registry: e
  }), s = (m, _) => {
    e.droppable.exists(m) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update is enabled flag of Droppable ${m} as it is not registered`) : D(!1)), r && n.updateDroppableIsEnabled({
      id: m,
      isEnabled: _
    });
  }, l = (m, _) => {
    r && (e.droppable.exists(m) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update isCombineEnabled flag of Droppable ${m} as it is not registered`) : D(!1)), n.updateDroppableIsCombineEnabled({
      id: m,
      isCombineEnabled: _
    }));
  }, u = (m, _) => {
    r && (e.droppable.exists(m) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update the scroll on Droppable ${m} as it is not registered`) : D(!1)), n.updateDroppableScroll({
      id: m,
      newScroll: _
    }));
  }, c = (m, _) => {
    r && e.droppable.getById(m).callbacks.scroll(_);
  }, d = () => {
    if (!r)
      return;
    i.stop();
    const m = r.critical.droppable;
    e.droppable.getAllByType(m.type).forEach((_) => _.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, p = (m) => {
    r || (process.env.NODE_ENV !== "production" ? D(!1, "Should only be subscribed when a collection is occurring") : D(!1));
    const _ = r.critical.draggable;
    m.type === "ADDITION" && Ff(e, _, m.value) && i.add(m.value), m.type === "REMOVAL" && Ff(e, _, m.value) && i.remove(m.value);
  };
  return {
    updateDroppableIsEnabled: s,
    updateDroppableIsCombineEnabled: l,
    scrollDroppable: c,
    updateDroppableScroll: u,
    startPublishing: (m) => {
      r && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start capturing critical dimensions as there is already a collection") : D(!1));
      const _ = e.draggable.getById(m.draggableId), w = e.droppable.getById(_.descriptor.droppableId), A = {
        draggable: _.descriptor,
        droppable: w.descriptor
      }, x = e.subscribe(p);
      return r = {
        critical: A,
        unsubscribe: x
      }, iC({
        critical: A,
        registry: e,
        scrollOptions: m.scrollOptions
      });
    },
    stopPublishing: d
  };
}, yp = (e, n) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === n ? !1 : e.completed.result.reason === "DROP", aC = (e) => {
  window.scrollBy(e.x, e.y);
};
const lC = Ge((e) => _i(e).filter((n) => !(!n.isEnabled || !n.frame))), uC = (e, n) => lC(n).find((i) => (i.frame || (process.env.NODE_ENV !== "production" ? D(!1, "Invalid result") : D(!1)), tp(i.frame.pageMarginBox)(e))) || null;
var cC = (e) => {
  let {
    center: n,
    destination: r,
    droppables: i
  } = e;
  if (r) {
    const l = i[r];
    return l.frame ? l : null;
  }
  return uC(n, i);
};
const Jr = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (e) => e ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: !1
};
var fC = function(e, n, r) {
  r === void 0 && (r = () => Jr);
  const i = r(), s = e[n.size] * i.startFromPercentage, l = e[n.size] * i.maxScrollAtPercentage;
  return {
    startScrollingFrom: s,
    maxScrollValueAt: l
  };
}, bp = (e) => {
  let {
    startOfRange: n,
    endOfRange: r,
    current: i
  } = e;
  const s = r - n;
  return s === 0 ? (process.env.NODE_ENV !== "production" && Se(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (i - n) / s;
}, rl = 1, dC = function(e, n, r) {
  r === void 0 && (r = () => Jr);
  const i = r();
  if (e > n.startScrollingFrom)
    return 0;
  if (e <= n.maxScrollValueAt)
    return i.maxPixelScroll;
  if (e === n.startScrollingFrom)
    return rl;
  const l = 1 - bp({
    startOfRange: n.maxScrollValueAt,
    endOfRange: n.startScrollingFrom,
    current: e
  }), u = i.maxPixelScroll * i.ease(l);
  return Math.ceil(u);
}, pC = (e, n, r) => {
  const i = r(), s = i.durationDampening.accelerateAt, l = i.durationDampening.stopDampeningAt, u = n, c = l, p = Date.now() - u;
  if (p >= l)
    return e;
  if (p < s)
    return rl;
  const g = bp({
    startOfRange: s,
    endOfRange: c,
    current: p
  }), h = e * i.ease(g);
  return Math.ceil(h);
}, $f = (e) => {
  let {
    distanceToEdge: n,
    thresholds: r,
    dragStartTime: i,
    shouldUseTimeDampening: s,
    getAutoScrollerOptions: l
  } = e;
  const u = dC(n, r, l);
  return u === 0 ? 0 : s ? Math.max(pC(u, i, l), rl) : u;
}, Vf = (e) => {
  let {
    container: n,
    distanceToEdges: r,
    dragStartTime: i,
    axis: s,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: u
  } = e;
  const c = fC(n, s, u);
  return r[s.end] < r[s.start] ? $f({
    distanceToEdge: r[s.end],
    thresholds: c,
    dragStartTime: i,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: u
  }) : -1 * $f({
    distanceToEdge: r[s.start],
    thresholds: c,
    dragStartTime: i,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: u
  });
}, hC = (e) => {
  let {
    container: n,
    subject: r,
    proposedScroll: i
  } = e;
  const s = r.height > n.height, l = r.width > n.width;
  return !l && !s ? i : l && s ? null : {
    x: l ? 0 : i.x,
    y: s ? 0 : i.y
  };
};
const gC = kd((e) => e === 0 ? 0 : e);
var _p = (e) => {
  let {
    dragStartTime: n,
    container: r,
    subject: i,
    center: s,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: u
  } = e;
  const c = {
    top: s.y - r.top,
    right: r.right - s.x,
    bottom: r.bottom - s.y,
    left: s.x - r.left
  }, d = Vf({
    container: r,
    distanceToEdges: c,
    dragStartTime: n,
    axis: Xa,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: u
  }), p = Vf({
    container: r,
    distanceToEdges: c,
    dragStartTime: n,
    axis: Kd,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: u
  }), g = gC({
    x: p,
    y: d
  });
  if (wn(g, Ue))
    return null;
  const h = hC({
    container: r,
    subject: i,
    proposedScroll: g
  });
  return h ? wn(h, Ue) ? null : h : null;
};
const vC = kd((e) => e === 0 ? 0 : e > 0 ? 1 : -1), ol = (() => {
  const e = (n, r) => n < 0 ? n : n > r ? n - r : 0;
  return (n) => {
    let {
      current: r,
      max: i,
      change: s
    } = n;
    const l = ze(r, s), u = {
      x: e(l.x, i.x),
      y: e(l.y, i.y)
    };
    return wn(u, Ue) ? null : u;
  };
})(), Ep = (e) => {
  let {
    max: n,
    current: r,
    change: i
  } = e;
  const s = {
    x: Math.max(r.x, n.x),
    y: Math.max(r.y, n.y)
  }, l = vC(i), u = ol({
    max: s,
    current: r,
    change: l
  });
  return !u || l.x !== 0 && u.x === 0 || l.y !== 0 && u.y === 0;
}, il = (e, n) => Ep({
  current: e.scroll.current,
  max: e.scroll.max,
  change: n
}), mC = (e, n) => {
  if (!il(e, n))
    return null;
  const r = e.scroll.max, i = e.scroll.current;
  return ol({
    current: i,
    max: r,
    change: n
  });
}, sl = (e, n) => {
  const r = e.frame;
  return r ? Ep({
    current: r.scroll.current,
    max: r.scroll.max,
    change: n
  }) : !1;
}, yC = (e, n) => {
  const r = e.frame;
  return !r || !sl(e, n) ? null : ol({
    current: r.scroll.current,
    max: r.scroll.max,
    change: n
  });
};
var bC = (e) => {
  let {
    viewport: n,
    subject: r,
    center: i,
    dragStartTime: s,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: u
  } = e;
  const c = _p({
    dragStartTime: s,
    container: n.frame,
    subject: r,
    center: i,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: u
  });
  return c && il(n, c) ? c : null;
}, _C = (e) => {
  let {
    droppable: n,
    subject: r,
    center: i,
    dragStartTime: s,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: u
  } = e;
  const c = n.frame;
  if (!c)
    return null;
  const d = _p({
    dragStartTime: s,
    container: c.pageMarginBox,
    subject: r,
    center: i,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: u
  });
  return d && sl(n, d) ? d : null;
}, Wf = (e) => {
  let {
    state: n,
    dragStartTime: r,
    shouldUseTimeDampening: i,
    scrollWindow: s,
    scrollDroppable: l,
    getAutoScrollerOptions: u
  } = e;
  const c = n.current.page.borderBoxCenter, p = n.dimensions.draggables[n.critical.draggable.id].page.marginBox;
  if (n.isWindowScrollAllowed) {
    const m = n.viewport, _ = bC({
      dragStartTime: r,
      viewport: m,
      subject: p,
      center: c,
      shouldUseTimeDampening: i,
      getAutoScrollerOptions: u
    });
    if (_) {
      s(_);
      return;
    }
  }
  const g = cC({
    center: c,
    destination: mt(n.impact),
    droppables: n.dimensions.droppables
  });
  if (!g)
    return;
  const h = _C({
    dragStartTime: r,
    droppable: g,
    subject: p,
    center: c,
    shouldUseTimeDampening: i,
    getAutoScrollerOptions: u
  });
  h && l(g.descriptor.id, h);
}, EC = (e) => {
  let {
    scrollWindow: n,
    scrollDroppable: r,
    getAutoScrollerOptions: i = () => Jr
  } = e;
  const s = Hr(n), l = Hr(r);
  let u = null;
  const c = (g) => {
    u || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fluid scroll if not dragging") : D(!1));
    const {
      shouldUseTimeDampening: h,
      dragStartTime: m
    } = u;
    Wf({
      state: g,
      scrollWindow: s,
      scrollDroppable: l,
      dragStartTime: m,
      shouldUseTimeDampening: h,
      getAutoScrollerOptions: i
    });
  };
  return {
    start: (g) => {
      no(), u && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start auto scrolling when already started") : D(!1));
      const h = Date.now();
      let m = !1;
      const _ = () => {
        m = !0;
      };
      Wf({
        state: g,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: _,
        scrollDroppable: _,
        getAutoScrollerOptions: i
      }), u = {
        dragStartTime: h,
        shouldUseTimeDampening: m
      }, ro(), m && c(g);
    },
    stop: () => {
      u && (s.cancel(), l.cancel(), u = null);
    },
    scroll: c
  };
}, wC = (e) => {
  let {
    move: n,
    scrollDroppable: r,
    scrollWindow: i
  } = e;
  const s = (d, p) => {
    const g = ze(d.current.client.selection, p);
    n({
      client: g
    });
  }, l = (d, p) => {
    if (!sl(d, p))
      return p;
    const g = yC(d, p);
    if (!g)
      return r(d.descriptor.id, p), null;
    const h = vt(p, g);
    return r(d.descriptor.id, h), vt(p, h);
  }, u = (d, p, g) => {
    if (!d || !il(p, g))
      return g;
    const h = mC(p, g);
    if (!h)
      return i(g), null;
    const m = vt(g, h);
    return i(m), vt(g, m);
  };
  return (d) => {
    const p = d.scrollJumpRequest;
    if (!p)
      return;
    const g = mt(d.impact);
    g || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot perform a jump scroll when there is no destination") : D(!1));
    const h = l(d.dimensions.droppables[g], p);
    if (!h)
      return;
    const m = d.viewport, _ = u(d.isWindowScrollAllowed, m, h);
    _ && s(d, _);
  };
}, xC = (e) => {
  let {
    scrollDroppable: n,
    scrollWindow: r,
    move: i,
    getAutoScrollerOptions: s
  } = e;
  const l = EC({
    scrollWindow: r,
    scrollDroppable: n,
    getAutoScrollerOptions: s
  }), u = wC({
    move: i,
    scrollWindow: r,
    scrollDroppable: n
  });
  return {
    scroll: (p) => {
      if (!(s().disabled || p.phase !== "DRAGGING")) {
        if (p.movementMode === "FLUID") {
          l.scroll(p);
          return;
        }
        p.scrollJumpRequest && u(p);
      }
    },
    start: l.start,
    stop: l.stop
  };
};
const lr = "data-rfd", ur = (() => {
  const e = `${lr}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ia = (() => {
  const e = `${lr}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), SC = (() => {
  const e = `${lr}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Gf = {
  contextId: `${lr}-scroll-container-context-id`
}, DC = (e) => (n) => `[${n}="${e}"]`, Br = (e, n) => e.map((r) => {
  const i = r.styles[n];
  return i ? `${r.selector} { ${i} }` : "";
}).join(" "), CC = "pointer-events: none;";
var AC = (e) => {
  const n = DC(e), r = (() => {
    const c = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: n(ur.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: c,
        dragging: CC,
        dropAnimating: c
      }
    };
  })(), i = (() => {
    const c = `
      transition: ${Gr.outOfTheWay};
    `;
    return {
      selector: n(Ia.contextId),
      styles: {
        dragging: c,
        dropAnimating: c,
        userCancel: c
      }
    };
  })(), s = {
    selector: n(SC.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, u = [i, r, s, {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  }];
  return {
    always: Br(u, "always"),
    resting: Br(u, "resting"),
    dragging: Br(u, "dragging"),
    dropAnimating: Br(u, "dropAnimating"),
    userCancel: Br(u, "userCancel")
  };
};
const IC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? W.useLayoutEffect : W.useEffect;
var yt = IC;
const oa = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find the head to append a style to") : D(!1)), e;
}, Uf = (e) => {
  const n = document.createElement("style");
  return e && n.setAttribute("nonce", e), n.type = "text/css", n;
};
function NC(e, n) {
  const r = pe(() => AC(e), [e]), i = W.useRef(null), s = W.useRef(null), l = Z(Ge((h) => {
    const m = s.current;
    m || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot set dynamic style element if it is not set") : D(!1)), m.textContent = h;
  }), []), u = Z((h) => {
    const m = i.current;
    m || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot set dynamic style element if it is not set") : D(!1)), m.textContent = h;
  }, []);
  yt(() => {
    !i.current && !s.current || (process.env.NODE_ENV !== "production" ? D(!1, "style elements already mounted") : D(!1));
    const h = Uf(n), m = Uf(n);
    return i.current = h, s.current = m, h.setAttribute(`${lr}-always`, e), m.setAttribute(`${lr}-dynamic`, e), oa().appendChild(h), oa().appendChild(m), u(r.always), l(r.resting), () => {
      const _ = (w) => {
        const A = w.current;
        A || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot unmount ref as it is not set") : D(!1)), oa().removeChild(A), w.current = null;
      };
      _(i), _(s);
    };
  }, [n, u, l, r.always, r.resting, e]);
  const c = Z(() => l(r.dragging), [l, r.dragging]), d = Z((h) => {
    if (h === "DROP") {
      l(r.dropAnimating);
      return;
    }
    l(r.userCancel);
  }, [l, r.dropAnimating, r.userCancel]), p = Z(() => {
    s.current && l(r.resting);
  }, [l, r.resting]);
  return pe(() => ({
    dragging: c,
    dropping: d,
    resting: p
  }), [c, d, p]);
}
function wp(e, n) {
  return Array.from(e.querySelectorAll(n));
}
var xp = (e) => {
  var n;
  return ((n = e == null ? void 0 : e.ownerDocument) == null ? void 0 : n.defaultView) || window;
};
function oo(e) {
  return e instanceof xp(e).HTMLElement;
}
function Sp(e, n) {
  const r = `[${ur.contextId}="${e}"]`, i = wp(document, r);
  if (!i.length)
    return process.env.NODE_ENV !== "production" && Se(`Unable to find any drag handles in the context "${e}"`), null;
  const s = i.find((l) => l.getAttribute(ur.draggableId) === n);
  return s ? oo(s) ? s : (process.env.NODE_ENV !== "production" && Se("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Se(`Unable to find drag handle with id "${n}" as no handle with a matching id was found`), null);
}
function OC(e) {
  const n = W.useRef({}), r = W.useRef(null), i = W.useRef(null), s = W.useRef(!1), l = Z(function(m, _) {
    const w = {
      id: m,
      focus: _
    };
    return n.current[m] = w, function() {
      const x = n.current;
      x[m] !== w && delete x[m];
    };
  }, []), u = Z(function(m) {
    const _ = Sp(e, m);
    _ && _ !== document.activeElement && _.focus();
  }, [e]), c = Z(function(m, _) {
    r.current === m && (r.current = _);
  }, []), d = Z(function() {
    i.current || s.current && (i.current = requestAnimationFrame(() => {
      i.current = null;
      const m = r.current;
      m && u(m);
    }));
  }, [u]), p = Z(function(m) {
    r.current = null;
    const _ = document.activeElement;
    _ && _.getAttribute(ur.draggableId) === m && (r.current = m);
  }, []);
  return yt(() => (s.current = !0, function() {
    s.current = !1;
    const m = i.current;
    m && cancelAnimationFrame(m);
  }), []), pe(() => ({
    register: l,
    tryRecordFocus: p,
    tryRestoreFocusRecorded: d,
    tryShiftRecord: c
  }), [l, p, d, c]);
}
function RC() {
  const e = {
    draggables: {},
    droppables: {}
  }, n = [];
  function r(h) {
    return n.push(h), function() {
      const _ = n.indexOf(h);
      _ !== -1 && n.splice(_, 1);
    };
  }
  function i(h) {
    n.length && n.forEach((m) => m(h));
  }
  function s(h) {
    return e.draggables[h] || null;
  }
  function l(h) {
    const m = s(h);
    return m || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find draggable entry with id [${h}]`) : D(!1)), m;
  }
  const u = {
    register: (h) => {
      e.draggables[h.descriptor.id] = h, i({
        type: "ADDITION",
        value: h
      });
    },
    update: (h, m) => {
      const _ = e.draggables[m.descriptor.id];
      _ && _.uniqueId === h.uniqueId && (delete e.draggables[m.descriptor.id], e.draggables[h.descriptor.id] = h);
    },
    unregister: (h) => {
      const m = h.descriptor.id, _ = s(m);
      _ && h.uniqueId === _.uniqueId && (delete e.draggables[m], e.droppables[h.descriptor.droppableId] && i({
        type: "REMOVAL",
        value: h
      }));
    },
    getById: l,
    findById: s,
    exists: (h) => !!s(h),
    getAllByType: (h) => Object.values(e.draggables).filter((m) => m.descriptor.type === h)
  };
  function c(h) {
    return e.droppables[h] || null;
  }
  function d(h) {
    const m = c(h);
    return m || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find droppable entry with id [${h}]`) : D(!1)), m;
  }
  const p = {
    register: (h) => {
      e.droppables[h.descriptor.id] = h;
    },
    unregister: (h) => {
      const m = c(h.descriptor.id);
      m && h.uniqueId === m.uniqueId && delete e.droppables[h.descriptor.id];
    },
    getById: d,
    findById: c,
    exists: (h) => !!c(h),
    getAllByType: (h) => Object.values(e.droppables).filter((m) => m.descriptor.type === h)
  };
  function g() {
    e.draggables = {}, e.droppables = {}, n.length = 0;
  }
  return {
    draggable: u,
    droppable: p,
    subscribe: r,
    clean: g
  };
}
function PC() {
  const e = pe(RC, []);
  return W.useEffect(() => function() {
    z.version.startsWith("16") || z.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var al = z.createContext(null), Zr = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find document.body") : D(!1)), e;
};
const TC = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var BC = TC;
const LC = (e) => `rfd-announcement-${e}`;
function MC(e) {
  const n = pe(() => LC(e), [e]), r = W.useRef(null);
  return W.useEffect(function() {
    const l = document.createElement("div");
    return r.current = l, l.id = n, l.setAttribute("aria-live", "assertive"), l.setAttribute("aria-atomic", "true"), or(l.style, BC), Zr().appendChild(l), function() {
      setTimeout(function() {
        const d = Zr();
        d.contains(l) && d.removeChild(l), l === r.current && (r.current = null);
      });
    };
  }, [n]), Z((s) => {
    const l = r.current;
    if (l) {
      l.textContent = s;
      return;
    }
    process.env.NODE_ENV !== "production" && Se(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${s}"
    `);
  }, []);
}
let FC = 0;
const Dp = {
  separator: "::"
};
function $C(e, n) {
  return n === void 0 && (n = Dp), pe(() => `${e}${n.separator}${FC++}`, [n.separator, e]);
}
function VC(e, n) {
  n === void 0 && (n = Dp);
  const r = z.useId();
  return pe(() => `${e}${n.separator}${r}`, [n.separator, e, r]);
}
var ll = "useId" in z ? VC : $C;
function WC(e) {
  let {
    contextId: n,
    uniqueId: r
  } = e;
  return `rfd-hidden-text-${n}-${r}`;
}
function GC(e) {
  let {
    contextId: n,
    text: r
  } = e;
  const i = ll("hidden-text", {
    separator: "-"
  }), s = pe(() => WC({
    contextId: n,
    uniqueId: i
  }), [i, n]);
  return W.useEffect(function() {
    const u = document.createElement("div");
    return u.id = s, u.textContent = r, u.style.display = "none", Zr().appendChild(u), function() {
      const d = Zr();
      d.contains(u) && d.removeChild(u);
    };
  }, [s, r]), s;
}
var Si = z.createContext(null), UC = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const kC = /(\d+)\.(\d+)\.(\d+)/, kf = (e) => {
  const n = kC.exec(e);
  n == null && (process.env.NODE_ENV !== "production" ? D(!1, `Unable to parse React version ${e}`) : D(!1));
  const r = Number(n[1]), i = Number(n[2]), s = Number(n[3]);
  return {
    major: r,
    minor: i,
    patch: s,
    raw: e
  };
}, HC = (e, n) => n.major > e.major ? !0 : n.major < e.major ? !1 : n.minor > e.minor ? !0 : n.minor < e.minor ? !1 : n.patch >= e.patch;
var qC = (e, n) => {
  const r = kf(e), i = kf(n);
  HC(r, i) || process.env.NODE_ENV !== "production" && Se(`
    React version: [${i.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const ia = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var zC = (e) => {
  const n = e.doctype;
  if (!n) {
    process.env.NODE_ENV !== "production" && Se(`
      No <!doctype html> found.

      ${ia}
    `);
    return;
  }
  n.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Se(`
      Unexpected <!doctype> found: (${n.name})

      ${ia}
    `), n.publicId !== "" && process.env.NODE_ENV !== "production" && Se(`
      Unexpected <!doctype> publicId found: (${n.publicId})
      A html5 doctype does not have a publicId

      ${ia}
    `);
};
function ul(e) {
  process.env.NODE_ENV !== "production" && e();
}
function io(e, n) {
  ul(() => {
    W.useEffect(() => {
      try {
        e();
      } catch (r) {
        xa(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, n);
  });
}
function YC() {
  io(() => {
    qC(UC.react, z.version), zC(document);
  }, []);
}
function cl(e) {
  const n = W.useRef(e);
  return W.useEffect(() => {
    n.current = e;
  }), n;
}
function KC() {
  let e = null;
  function n() {
    return !!e;
  }
  function r(u) {
    return u === e;
  }
  function i(u) {
    e && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot claim lock as it is already claimed") : D(!1));
    const c = {
      abandon: u
    };
    return e = c, c;
  }
  function s() {
    e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot release lock when there is no lock") : D(!1)), e = null;
  }
  function l() {
    e && (e.abandon(), s());
  }
  return {
    isClaimed: n,
    isActive: r,
    claim: i,
    release: s,
    tryAbandon: l
  };
}
function Qr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const XC = 9, JC = 13, fl = 27, Cp = 32, ZC = 33, QC = 34, jC = 35, eA = 36, tA = 37, nA = 38, rA = 39, oA = 40, iA = {
  [JC]: !0,
  [XC]: !0
};
var Ap = (e) => {
  iA[e.keyCode] && e.preventDefault();
};
const sA = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((i) => `on${i}` in document) || e;
})();
var Di = sA;
const Ip = 0, Hf = 5;
function aA(e, n) {
  return Math.abs(n.x - e.x) >= Hf || Math.abs(n.y - e.y) >= Hf;
}
const qf = {
  type: "IDLE"
};
function lA(e) {
  let {
    cancel: n,
    completed: r,
    getPhase: i,
    setPhase: s
  } = e;
  return [{
    eventName: "mousemove",
    fn: (l) => {
      const {
        button: u,
        clientX: c,
        clientY: d
      } = l;
      if (u !== Ip)
        return;
      const p = {
        x: c,
        y: d
      }, g = i();
      if (g.type === "DRAGGING") {
        l.preventDefault(), g.actions.move(p);
        return;
      }
      g.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot be IDLE") : D(!1));
      const h = g.point;
      if (!aA(h, p))
        return;
      l.preventDefault();
      const m = g.actions.fluidLift(p);
      s({
        type: "DRAGGING",
        actions: m
      });
    }
  }, {
    eventName: "mouseup",
    fn: (l) => {
      const u = i();
      if (u.type !== "DRAGGING") {
        n();
        return;
      }
      l.preventDefault(), u.actions.drop({
        shouldBlockNextClick: !0
      }), r();
    }
  }, {
    eventName: "mousedown",
    fn: (l) => {
      i().type === "DRAGGING" && l.preventDefault(), n();
    }
  }, {
    eventName: "keydown",
    fn: (l) => {
      if (i().type === "PENDING") {
        n();
        return;
      }
      if (l.keyCode === fl) {
        l.preventDefault(), n();
        return;
      }
      Ap(l);
    }
  }, {
    eventName: "resize",
    fn: n
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: () => {
      i().type === "PENDING" && n();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (l) => {
      const u = i();
      if (u.type === "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Unexpected phase") : D(!1)), u.actions.shouldRespectForcePress()) {
        n();
        return;
      }
      l.preventDefault();
    }
  }, {
    eventName: Di,
    fn: n
  }];
}
function uA(e) {
  const n = W.useRef(qf), r = W.useRef(En), i = pe(() => ({
    eventName: "mousedown",
    fn: function(h) {
      if (h.defaultPrevented || h.button !== Ip || h.ctrlKey || h.metaKey || h.shiftKey || h.altKey)
        return;
      const m = e.findClosestDraggableId(h);
      if (!m)
        return;
      const _ = e.tryGetLock(m, u, {
        sourceEvent: h
      });
      if (!_)
        return;
      h.preventDefault();
      const w = {
        x: h.clientX,
        y: h.clientY
      };
      r.current(), p(_, w);
    }
  }), [e]), s = pe(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (g) => {
      if (g.defaultPrevented)
        return;
      const h = e.findClosestDraggableId(g);
      if (!h)
        return;
      const m = e.findOptionsForDraggable(h);
      m && (m.shouldRespectForcePress || e.canGetLock(h) && g.preventDefault());
    }
  }), [e]), l = Z(function() {
    const h = {
      passive: !1,
      capture: !0
    };
    r.current = Rt(window, [s, i], h);
  }, [s, i]), u = Z(() => {
    n.current.type !== "IDLE" && (n.current = qf, r.current(), l());
  }, [l]), c = Z(() => {
    const g = n.current;
    u(), g.type === "DRAGGING" && g.actions.cancel({
      shouldBlockNextClick: !0
    }), g.type === "PENDING" && g.actions.abort();
  }, [u]), d = Z(function() {
    const h = {
      capture: !0,
      passive: !1
    }, m = lA({
      cancel: c,
      completed: u,
      getPhase: () => n.current,
      setPhase: (_) => {
        n.current = _;
      }
    });
    r.current = Rt(window, m, h);
  }, [c, u]), p = Z(function(h, m) {
    n.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected to move from IDLE to PENDING drag") : D(!1)), n.current = {
      type: "PENDING",
      point: m,
      actions: h
    }, d();
  }, [d]);
  yt(function() {
    return l(), function() {
      r.current();
    };
  }, [l]);
}
function cA() {
}
const fA = {
  [QC]: !0,
  [ZC]: !0,
  [eA]: !0,
  [jC]: !0
};
function dA(e, n) {
  function r() {
    n(), e.cancel();
  }
  function i() {
    n(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (s) => {
      if (s.keyCode === fl) {
        s.preventDefault(), r();
        return;
      }
      if (s.keyCode === Cp) {
        s.preventDefault(), i();
        return;
      }
      if (s.keyCode === oA) {
        s.preventDefault(), e.moveDown();
        return;
      }
      if (s.keyCode === nA) {
        s.preventDefault(), e.moveUp();
        return;
      }
      if (s.keyCode === rA) {
        s.preventDefault(), e.moveRight();
        return;
      }
      if (s.keyCode === tA) {
        s.preventDefault(), e.moveLeft();
        return;
      }
      if (fA[s.keyCode]) {
        s.preventDefault();
        return;
      }
      Ap(s);
    }
  }, {
    eventName: "mousedown",
    fn: r
  }, {
    eventName: "mouseup",
    fn: r
  }, {
    eventName: "click",
    fn: r
  }, {
    eventName: "touchstart",
    fn: r
  }, {
    eventName: "resize",
    fn: r
  }, {
    eventName: "wheel",
    fn: r,
    options: {
      passive: !0
    }
  }, {
    eventName: Di,
    fn: r
  }];
}
function pA(e) {
  const n = W.useRef(cA), r = pe(() => ({
    eventName: "keydown",
    fn: function(l) {
      if (l.defaultPrevented || l.keyCode !== Cp)
        return;
      const u = e.findClosestDraggableId(l);
      if (!u)
        return;
      const c = e.tryGetLock(u, g, {
        sourceEvent: l
      });
      if (!c)
        return;
      l.preventDefault();
      let d = !0;
      const p = c.snapLift();
      n.current();
      function g() {
        d || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop capturing a keyboard drag when not capturing") : D(!1)), d = !1, n.current(), i();
      }
      n.current = Rt(window, dA(p, g), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), i = Z(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    n.current = Rt(window, [r], l);
  }, [r]);
  yt(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
const sa = {
  type: "IDLE"
}, hA = 120, gA = 0.15;
function vA(e) {
  let {
    cancel: n,
    getPhase: r
  } = e;
  return [{
    eventName: "orientationchange",
    fn: n
  }, {
    eventName: "resize",
    fn: n
  }, {
    eventName: "contextmenu",
    fn: (i) => {
      i.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (i) => {
      if (r().type !== "DRAGGING") {
        n();
        return;
      }
      i.keyCode === fl && i.preventDefault(), n();
    }
  }, {
    eventName: Di,
    fn: n
  }];
}
function mA(e) {
  let {
    cancel: n,
    completed: r,
    getPhase: i
  } = e;
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (s) => {
      const l = i();
      if (l.type !== "DRAGGING") {
        n();
        return;
      }
      l.hasMoved = !0;
      const {
        clientX: u,
        clientY: c
      } = s.touches[0], d = {
        x: u,
        y: c
      };
      s.preventDefault(), l.actions.move(d);
    }
  }, {
    eventName: "touchend",
    fn: (s) => {
      const l = i();
      if (l.type !== "DRAGGING") {
        n();
        return;
      }
      s.preventDefault(), l.actions.drop({
        shouldBlockNextClick: !0
      }), r();
    }
  }, {
    eventName: "touchcancel",
    fn: (s) => {
      if (i().type !== "DRAGGING") {
        n();
        return;
      }
      s.preventDefault(), n();
    }
  }, {
    eventName: "touchforcechange",
    fn: (s) => {
      const l = i();
      l.type === "IDLE" && (process.env.NODE_ENV, D(!1));
      const u = s.touches[0];
      if (!u || !(u.force >= gA))
        return;
      const d = l.actions.shouldRespectForcePress();
      if (l.type === "PENDING") {
        d && n();
        return;
      }
      if (d) {
        if (l.hasMoved) {
          s.preventDefault();
          return;
        }
        n();
        return;
      }
      s.preventDefault();
    }
  }, {
    eventName: Di,
    fn: n
  }];
}
function yA(e) {
  const n = W.useRef(sa), r = W.useRef(En), i = Z(function() {
    return n.current;
  }, []), s = Z(function(_) {
    n.current = _;
  }, []), l = pe(() => ({
    eventName: "touchstart",
    fn: function(_) {
      if (_.defaultPrevented)
        return;
      const w = e.findClosestDraggableId(_);
      if (!w)
        return;
      const A = e.tryGetLock(w, c, {
        sourceEvent: _
      });
      if (!A)
        return;
      const x = _.touches[0], {
        clientX: M,
        clientY: B
      } = x, R = {
        x: M,
        y: B
      };
      r.current(), h(A, R);
    }
  }), [e]), u = Z(function() {
    const _ = {
      capture: !0,
      passive: !1
    };
    r.current = Rt(window, [l], _);
  }, [l]), c = Z(() => {
    const m = n.current;
    m.type !== "IDLE" && (m.type === "PENDING" && clearTimeout(m.longPressTimerId), s(sa), r.current(), u());
  }, [u, s]), d = Z(() => {
    const m = n.current;
    c(), m.type === "DRAGGING" && m.actions.cancel({
      shouldBlockNextClick: !0
    }), m.type === "PENDING" && m.actions.abort();
  }, [c]), p = Z(function() {
    const _ = {
      capture: !0,
      passive: !1
    }, w = {
      cancel: d,
      completed: c,
      getPhase: i
    }, A = Rt(window, mA(w), _), x = Rt(window, vA(w), _);
    r.current = function() {
      A(), x();
    };
  }, [d, i, c]), g = Z(function() {
    const _ = i();
    _.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? D(!1, `Cannot start dragging from phase ${_.type}`) : D(!1));
    const w = _.actions.fluidLift(_.point);
    s({
      type: "DRAGGING",
      actions: w,
      hasMoved: !1
    });
  }, [i, s]), h = Z(function(_, w) {
    i().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected to move from IDLE to PENDING drag") : D(!1));
    const A = setTimeout(g, hA);
    s({
      type: "PENDING",
      point: w,
      actions: _,
      longPressTimerId: A
    }), p();
  }, [p, i, s, g]);
  yt(function() {
    return u(), function() {
      r.current();
      const w = i();
      w.type === "PENDING" && (clearTimeout(w.longPressTimerId), s(sa));
    };
  }, [i, u, s]), yt(function() {
    return Rt(window, [{
      eventName: "touchmove",
      fn: () => {
      },
      options: {
        capture: !1,
        passive: !1
      }
    }]);
  }, []);
}
function bA(e) {
  ul(() => {
    const n = cl(e);
    io(() => {
      n.current.length !== e.length && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot change the amount of sensor hooks after mounting") : D(!1));
    });
  });
}
const _A = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Np(e, n) {
  if (n == null)
    return !1;
  if (_A.includes(n.tagName.toLowerCase()))
    return !0;
  const i = n.getAttribute("contenteditable");
  return i === "true" || i === "" ? !0 : n === e ? !1 : Np(e, n.parentElement);
}
function EA(e, n) {
  const r = n.target;
  return oo(r) ? Np(e, r) : !1;
}
var wA = (e) => Gt(e.getBoundingClientRect()).center;
function xA(e) {
  return e instanceof xp(e).Element;
}
const SA = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((i) => i in Element.prototype) || e;
})();
function Op(e, n) {
  return e == null ? null : e[SA](n) ? e : Op(e.parentElement, n);
}
function DA(e, n) {
  return e.closest ? e.closest(n) : Op(e, n);
}
function CA(e) {
  return `[${ur.contextId}="${e}"]`;
}
function AA(e, n) {
  const r = n.target;
  if (!xA(r))
    return process.env.NODE_ENV !== "production" && Se("event.target must be a Element"), null;
  const i = CA(e), s = DA(r, i);
  return s ? oo(s) ? s : (process.env.NODE_ENV !== "production" && Se("drag handle must be a HTMLElement"), null) : null;
}
function IA(e, n) {
  const r = AA(e, n);
  return r ? r.getAttribute(ur.draggableId) : null;
}
function NA(e, n) {
  const r = `[${Ia.contextId}="${e}"]`, s = wp(document, r).find((l) => l.getAttribute(Ia.id) === n);
  return s ? oo(s) ? s : (process.env.NODE_ENV !== "production" && Se("Draggable element is not a HTMLElement"), null) : null;
}
function OA(e) {
  e.preventDefault();
}
function Qo(e) {
  let {
    expected: n,
    phase: r,
    isLockActive: i,
    shouldWarn: s
  } = e;
  return i() ? n !== r ? (s && process.env.NODE_ENV !== "production" && Se(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${n}
        You called an action from outdated phase: ${r}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (s && process.env.NODE_ENV !== "production" && Se(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Rp(e) {
  let {
    lockAPI: n,
    store: r,
    registry: i,
    draggableId: s
  } = e;
  if (n.isClaimed())
    return !1;
  const l = i.draggable.findById(s);
  return l ? !(!l.options.isEnabled || !yp(r.getState(), s)) : (process.env.NODE_ENV !== "production" && Se(`Unable to find draggable with id: ${s}`), !1);
}
function RA(e) {
  let {
    lockAPI: n,
    contextId: r,
    store: i,
    registry: s,
    draggableId: l,
    forceSensorStop: u,
    sourceEvent: c
  } = e;
  if (!Rp({
    lockAPI: n,
    store: i,
    registry: s,
    draggableId: l
  }))
    return null;
  const p = s.draggable.getById(l), g = NA(r, p.descriptor.id);
  if (!g)
    return process.env.NODE_ENV !== "production" && Se(`Unable to find draggable element with id: ${l}`), null;
  if (c && !p.options.canDragInteractiveElements && EA(g, c))
    return null;
  const h = n.claim(u || En);
  let m = "PRE_DRAG";
  function _() {
    return p.options.shouldRespectForcePress;
  }
  function w() {
    return n.isActive(h);
  }
  function A($, G) {
    Qo({
      expected: $,
      phase: m,
      isLockActive: w,
      shouldWarn: !0
    }) && i.dispatch(G());
  }
  const x = A.bind(null, "DRAGGING");
  function M($) {
    function G() {
      n.release(), m = "COMPLETED";
    }
    m !== "PRE_DRAG" && (G(), process.env.NODE_ENV !== "production" ? D(!1, `Cannot lift in phase ${m}`) : D(!1)), i.dispatch(aD($.liftActionArgs)), m = "DRAGGING";
    function Y(U, H) {
      if (H === void 0 && (H = {
        shouldBlockNextClick: !1
      }), $.cleanup(), H.shouldBlockNextClick) {
        const ne = Rt(window, [{
          eventName: "click",
          fn: OA,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(ne);
      }
      G(), i.dispatch(cp({
        reason: U
      }));
    }
    return {
      isActive: () => Qo({
        expected: "DRAGGING",
        phase: m,
        isLockActive: w,
        shouldWarn: !1
      }),
      shouldRespectForcePress: _,
      drop: (U) => Y("DROP", U),
      cancel: (U) => Y("CANCEL", U),
      ...$.actions
    };
  }
  function B($) {
    const G = Hr((U) => {
      x(() => up({
        client: U
      }));
    });
    return {
      ...M({
        liftActionArgs: {
          id: l,
          clientSelection: $,
          movementMode: "FLUID"
        },
        cleanup: () => G.cancel(),
        actions: {
          move: G
        }
      }),
      move: G
    };
  }
  function R() {
    const $ = {
      moveUp: () => x(vD),
      moveRight: () => x(yD),
      moveDown: () => x(mD),
      moveLeft: () => x(bD)
    };
    return M({
      liftActionArgs: {
        id: l,
        clientSelection: wA(g),
        movementMode: "SNAP"
      },
      cleanup: En,
      actions: $
    });
  }
  function P() {
    Qo({
      expected: "PRE_DRAG",
      phase: m,
      isLockActive: w,
      shouldWarn: !0
    }) && n.release();
  }
  return {
    isActive: () => Qo({
      expected: "PRE_DRAG",
      phase: m,
      isLockActive: w,
      shouldWarn: !1
    }),
    shouldRespectForcePress: _,
    fluidLift: B,
    snapLift: R,
    abort: P
  };
}
const PA = [uA, pA, yA];
function TA(e) {
  let {
    contextId: n,
    store: r,
    registry: i,
    customSensors: s,
    enableDefaultSensors: l
  } = e;
  const u = [...l ? PA : [], ...s || []], c = W.useState(() => KC())[0], d = Z(function(M, B) {
    Qr(M) && !Qr(B) && c.tryAbandon();
  }, [c]);
  yt(function() {
    let M = r.getState();
    return r.subscribe(() => {
      const R = r.getState();
      d(M, R), M = R;
    });
  }, [c, r, d]), yt(() => c.tryAbandon, [c.tryAbandon]);
  const p = Z((x) => Rp({
    lockAPI: c,
    registry: i,
    store: r,
    draggableId: x
  }), [c, i, r]), g = Z((x, M, B) => RA({
    lockAPI: c,
    registry: i,
    contextId: n,
    store: r,
    draggableId: x,
    forceSensorStop: M || null,
    sourceEvent: B && B.sourceEvent ? B.sourceEvent : null
  }), [n, c, i, r]), h = Z((x) => IA(n, x), [n]), m = Z((x) => {
    const M = i.draggable.findById(x);
    return M ? M.options : null;
  }, [i.draggable]), _ = Z(function() {
    c.isClaimed() && (c.tryAbandon(), r.getState().phase !== "IDLE" && r.dispatch(el()));
  }, [c, r]), w = Z(() => c.isClaimed(), [c]), A = pe(() => ({
    canGetLock: p,
    tryGetLock: g,
    findClosestDraggableId: h,
    findOptionsForDraggable: m,
    tryReleaseLock: _,
    isLockClaimed: w
  }), [p, g, h, m, _, w]);
  bA(u);
  for (let x = 0; x < u.length; x++)
    u[x](A);
}
const BA = (e) => ({
  onBeforeCapture: (n) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(n);
    };
    z.version.startsWith("16") || z.version.startsWith("17") ? r() : Ta.flushSync(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), LA = (e) => ({
  ...Jr,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Jr.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Lr(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find store from lazy ref") : D(!1)), e.current;
}
function MA(e) {
  const {
    contextId: n,
    setCallbacks: r,
    sensors: i,
    nonce: s,
    dragHandleUsageInstructions: l
  } = e, u = W.useRef(null);
  YC();
  const c = cl(e), d = Z(() => BA(c.current), [c]), p = Z(() => LA(c.current), [c]), g = MC(n), h = GC({
    contextId: n,
    text: l
  }), m = NC(n, s), _ = Z((H) => {
    Lr(u).dispatch(H);
  }, []), w = pe(() => zc({
    publishWhileDragging: uD,
    updateDroppableScroll: fD,
    updateDroppableIsEnabled: dD,
    updateDroppableIsCombineEnabled: pD,
    collectionStarting: cD
  }, _), [_]), A = PC(), x = pe(() => sC(A, w), [A, w]), M = pe(() => xC({
    scrollWindow: aC,
    scrollDroppable: x.scrollDroppable,
    getAutoScrollerOptions: p,
    ...zc({
      move: up
    }, _)
  }), [x.scrollDroppable, _, p]), B = OC(n), R = pe(() => nC({
    announce: g,
    autoScroller: M,
    dimensionMarshal: x,
    focusMarshal: B,
    getResponders: d,
    styleMarshal: m
  }), [g, M, x, B, d, m]);
  process.env.NODE_ENV !== "production" && u.current && u.current !== R && process.env.NODE_ENV !== "production" && Se("unexpected store change"), u.current = R;
  const P = Z(() => {
    const H = Lr(u);
    H.getState().phase !== "IDLE" && H.dispatch(el());
  }, []), I = Z(() => {
    const H = Lr(u).getState();
    return H.phase === "DROP_ANIMATING" ? !0 : H.phase === "IDLE" ? !1 : H.isDragging;
  }, []), $ = pe(() => ({
    isDragging: I,
    tryAbort: P
  }), [I, P]);
  r($);
  const G = Z((H) => yp(Lr(u).getState(), H), []), Y = Z(() => Mn(Lr(u).getState()), []), U = pe(() => ({
    marshal: x,
    focus: B,
    contextId: n,
    canLift: G,
    isMovementAllowed: Y,
    dragHandleUsageInstructionsId: h,
    registry: A
  }), [n, x, h, B, G, Y, A]);
  return TA({
    contextId: n,
    store: R,
    registry: A,
    customSensors: i || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), W.useEffect(() => P, [P]), z.createElement(Si.Provider, {
    value: U
  }, z.createElement(Tx, {
    context: al,
    store: R
  }, e.children));
}
let FA = 0;
function $A() {
  return pe(() => `${FA++}`, []);
}
function VA() {
  return z.useId();
}
var WA = "useId" in z ? VA : $A;
function RN(e) {
  const n = WA(), r = e.dragHandleUsageInstructions || ii.dragHandleUsageInstructions;
  return z.createElement(Xx, null, (i) => z.createElement(MA, {
    nonce: e.nonce,
    contextId: n,
    setCallbacks: i,
    dragHandleUsageInstructions: r,
    enableDefaultSensors: e.enableDefaultSensors,
    sensors: e.sensors,
    onBeforeCapture: e.onBeforeCapture,
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragUpdate: e.onDragUpdate,
    onDragEnd: e.onDragEnd,
    autoScrollerOptions: e.autoScrollerOptions
  }, e.children));
}
const zf = {
  dragging: 5e3,
  dropAnimating: 4500
}, GA = (e, n) => n ? Gr.drop(n.duration) : e ? Gr.snap : Gr.fluid, UA = (e, n) => {
  if (e)
    return n ? Xr.opacity.drop : Xr.opacity.combining;
}, kA = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function HA(e) {
  const r = e.dimension.client, {
    offset: i,
    combineWith: s,
    dropping: l
  } = e, u = !!s, c = kA(e), d = !!l, p = d ? Ca.drop(i, u) : Ca.moveTo(i);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: GA(c, l),
    transform: p,
    opacity: UA(u, d),
    zIndex: d ? zf.dropAnimating : zf.dragging,
    pointerEvents: "none"
  };
}
function qA(e) {
  return {
    transform: Ca.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function zA(e) {
  return e.type === "DRAGGING" ? HA(e) : qA(e);
}
function YA(e, n, r) {
  r === void 0 && (r = Ue);
  const i = window.getComputedStyle(n), s = n.getBoundingClientRect(), l = $d(s, i), u = pi(l, r), c = {
    client: l,
    tagName: n.tagName.toLowerCase(),
    display: i.display
  }, d = {
    x: l.marginBox.width,
    y: l.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: c,
    displaceBy: d,
    client: l,
    page: u
  };
}
function KA(e) {
  const n = ll("draggable"), {
    descriptor: r,
    registry: i,
    getDraggableRef: s,
    canDragInteractiveElements: l,
    shouldRespectForcePress: u,
    isEnabled: c
  } = e, d = pe(() => ({
    canDragInteractiveElements: l,
    shouldRespectForcePress: u,
    isEnabled: c
  }), [l, c, u]), p = Z((_) => {
    const w = s();
    return w || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot get dimension when no ref is set") : D(!1)), YA(r, w, _);
  }, [r, s]), g = pe(() => ({
    uniqueId: n,
    descriptor: r,
    options: d,
    getDimension: p
  }), [r, p, d, n]), h = W.useRef(g), m = W.useRef(!0);
  yt(() => (i.draggable.register(h.current), () => i.draggable.unregister(h.current)), [i.draggable]), yt(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    const _ = h.current;
    h.current = g, i.draggable.update(g, _);
  }, [g, i.draggable]);
}
var dl = z.createContext(null);
function Pp(e) {
  e && oo(e) || (process.env.NODE_ENV !== "production" ? D(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : D(!1));
}
function XA(e, n, r) {
  io(() => {
    function i(l) {
      return `Draggable[id: ${l}]: `;
    }
    const s = e.draggableId;
    s || (process.env.NODE_ENV !== "production" ? D(!1, "Draggable requires a draggableId") : D(!1)), typeof s != "string" && (process.env.NODE_ENV !== "production" ? D(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof s}] (value: ${s})`) : D(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? D(!1, `${i(s)} requires an integer index prop`) : D(!1)), e.mapped.type !== "DRAGGING" && (Pp(r()), e.isEnabled && (Sp(n, s) || (process.env.NODE_ENV !== "production" ? D(!1, `${i(s)} Unable to find drag handle`) : D(!1))));
  });
}
function JA(e) {
  ul(() => {
    const n = W.useRef(e);
    io(() => {
      e !== n.current && (process.env.NODE_ENV !== "production" ? D(!1, "Draggable isClone prop value changed during component life") : D(!1));
    }, [e]);
  });
}
function vi(e) {
  const n = W.useContext(e);
  return n || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find required context") : D(!1)), n;
}
function ZA(e) {
  e.preventDefault();
}
const QA = (e) => {
  const n = W.useRef(null), r = Z(function($) {
    $ === void 0 && ($ = null), n.current = $;
  }, []), i = Z(() => n.current, []), {
    contextId: s,
    dragHandleUsageInstructionsId: l,
    registry: u
  } = vi(Si), {
    type: c,
    droppableId: d
  } = vi(dl), p = pe(() => ({
    id: e.draggableId,
    index: e.index,
    type: c,
    droppableId: d
  }), [e.draggableId, e.index, c, d]), {
    children: g,
    draggableId: h,
    isEnabled: m,
    shouldRespectForcePress: _,
    canDragInteractiveElements: w,
    isClone: A,
    mapped: x,
    dropAnimationFinished: M
  } = e;
  if (XA(e, s, i), JA(A), !A) {
    const $ = pe(() => ({
      descriptor: p,
      registry: u,
      getDraggableRef: i,
      canDragInteractiveElements: w,
      shouldRespectForcePress: _,
      isEnabled: m
    }), [p, u, i, w, _, m]);
    KA($);
  }
  const B = pe(() => m ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": l,
    "data-rfd-drag-handle-draggable-id": h,
    "data-rfd-drag-handle-context-id": s,
    draggable: !1,
    onDragStart: ZA
  } : null, [s, l, h, m]), R = Z(($) => {
    x.type === "DRAGGING" && x.dropping && $.propertyName === "transform" && (z.version.startsWith("16") || z.version.startsWith("17") ? M() : Ta.flushSync(M));
  }, [M, x]), P = pe(() => {
    const $ = zA(x), G = x.type === "DRAGGING" && x.dropping ? R : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": s,
        "data-rfd-draggable-id": h,
        style: $,
        onTransitionEnd: G
      },
      dragHandleProps: B
    };
  }, [s, B, h, x, R, r]), I = pe(() => ({
    draggableId: p.id,
    type: p.type,
    source: {
      index: p.index,
      droppableId: p.droppableId
    }
  }), [p.droppableId, p.id, p.index, p.type]);
  return z.createElement(z.Fragment, null, g(P, x.snapshot, I));
};
var jA = QA, Tp = (e, n) => e === n, Bp = (e) => {
  const {
    combine: n,
    destination: r
  } = e;
  return r ? r.droppableId : n ? n.droppableId : null;
};
const eI = (e) => e.combine ? e.combine.draggableId : null, tI = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function nI() {
  const e = Ge((s, l) => ({
    x: s,
    y: l
  })), n = Ge(function(s, l, u, c, d) {
    return u === void 0 && (u = null), c === void 0 && (c = null), d === void 0 && (d = null), {
      isDragging: !0,
      isClone: l,
      isDropAnimating: !!d,
      dropAnimation: d,
      mode: s,
      draggingOver: u,
      combineWith: c,
      combineTargetFor: null
    };
  }), r = Ge(function(s, l, u, c, d, p, g) {
    return d === void 0 && (d = null), p === void 0 && (p = null), g === void 0 && (g = null), {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: d,
        combineWith: p,
        mode: l,
        offset: s,
        dimension: u,
        forceShouldAnimate: g,
        snapshot: n(l, c, d, p, null)
      }
    };
  });
  return (s, l) => {
    if (Qr(s)) {
      if (s.critical.draggable.id !== l.draggableId)
        return null;
      const u = s.current.client.offset, c = s.dimensions.draggables[l.draggableId], d = mt(s.impact), p = tI(s.impact), g = s.forceShouldAnimate;
      return r(e(u.x, u.y), s.movementMode, c, l.isClone, d, p, g);
    }
    if (s.phase === "DROP_ANIMATING") {
      const u = s.completed;
      if (u.result.draggableId !== l.draggableId)
        return null;
      const c = l.isClone, d = s.dimensions.draggables[l.draggableId], p = u.result, g = p.mode, h = Bp(p), m = eI(p), w = {
        duration: s.dropDuration,
        curve: nl.drop,
        moveTo: s.newHomeClientOffset,
        opacity: m ? Xr.opacity.drop : null,
        scale: m ? Xr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: s.newHomeClientOffset,
          dimension: d,
          dropping: w,
          draggingOver: h,
          combineWith: m,
          mode: g,
          forceShouldAnimate: null,
          snapshot: n(g, c, h, m, w)
        }
      };
    }
    return null;
  };
}
function Lp(e) {
  return e === void 0 && (e = null), {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  };
}
const rI = {
  mapped: {
    type: "SECONDARY",
    offset: Ue,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Lp(null)
  }
};
function oI() {
  const e = Ge((u, c) => ({
    x: u,
    y: c
  })), n = Ge(Lp), r = Ge(function(u, c, d) {
    return c === void 0 && (c = null), {
      mapped: {
        type: "SECONDARY",
        offset: u,
        combineTargetFor: c,
        shouldAnimateDisplacement: d,
        snapshot: n(c)
      }
    };
  }), i = (u) => u ? r(Ue, u, !0) : null, s = (u, c, d, p) => {
    const g = d.displaced.visible[u], h = !!(p.inVirtualList && p.effected[u]), m = Ei(d), _ = m && m.draggableId === u ? c : null;
    if (!g) {
      if (!h)
        return i(_);
      if (d.displaced.invisible[u])
        return null;
      const x = cr(p.displacedBy.point), M = e(x.x, x.y);
      return r(M, _, !0);
    }
    if (h)
      return i(_);
    const w = d.displacedBy.point, A = e(w.x, w.y);
    return r(A, _, g.shouldAnimate);
  };
  return (u, c) => {
    if (Qr(u))
      return u.critical.draggable.id === c.draggableId ? null : s(c.draggableId, u.critical.draggable.id, u.impact, u.afterCritical);
    if (u.phase === "DROP_ANIMATING") {
      const d = u.completed;
      return d.result.draggableId === c.draggableId ? null : s(c.draggableId, d.result.draggableId, d.impact, d.afterCritical);
    }
    return null;
  };
}
const iI = () => {
  const e = nI(), n = oI();
  return (i, s) => e(i, s) || n(i, s) || rI;
}, sI = {
  dropAnimationFinished: fp
}, aI = Md(iI, sI, null, {
  context: al,
  areStatePropsEqual: Tp
})(jA);
var lI = aI;
function Mp(e) {
  return vi(dl).isUsingCloneFor === e.draggableId && !e.isClone ? null : z.createElement(lI, e);
}
function PN(e) {
  const n = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, i = !!e.shouldRespectForcePress;
  return z.createElement(Mp, or({}, e, {
    isClone: !1,
    isEnabled: n,
    canDragInteractiveElements: r,
    shouldRespectForcePress: i
  }));
}
const pl = (e) => (n) => e === n, uI = pl("scroll"), cI = pl("auto"), fI = pl("visible"), Yf = (e, n) => n(e.overflowX) || n(e.overflowY), dI = (e, n) => n(e.overflowX) && n(e.overflowY), Fp = (e) => {
  const n = window.getComputedStyle(e), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return Yf(r, uI) || Yf(r, cI);
}, pI = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Zr(), n = document.documentElement;
  if (n || (process.env.NODE_ENV, D(!1)), !Fp(e))
    return !1;
  const r = window.getComputedStyle(n), i = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return dI(i, fI) || process.env.NODE_ENV !== "production" && Se(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, $p = (e) => e == null ? null : e === document.body ? pI() ? e : null : e === document.documentElement ? null : Fp(e) ? e : $p(e.parentElement);
var Vp = $p, hI = (e) => {
  !e || !Vp(e.parentElement) || process.env.NODE_ENV !== "production" && Se(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Na = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Wp = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Wp(e.parentElement) : !1;
var gI = (e) => {
  const n = Vp(e), r = Wp(e);
  return {
    closestScrollable: n,
    isFixedOnPage: r
  };
}, vI = (e) => {
  let {
    descriptor: n,
    isEnabled: r,
    isCombineEnabled: i,
    isFixedOnPage: s,
    direction: l,
    client: u,
    page: c,
    closest: d
  } = e;
  const p = (() => {
    if (!d)
      return null;
    const {
      scrollSize: _,
      client: w
    } = d, A = gp({
      scrollHeight: _.scrollHeight,
      scrollWidth: _.scrollWidth,
      height: w.paddingBox.height,
      width: w.paddingBox.width
    });
    return {
      pageMarginBox: d.page.marginBox,
      frameClient: w,
      scrollSize: _,
      shouldClipSubject: d.shouldClipSubject,
      scroll: {
        initial: d.scroll,
        current: d.scroll,
        max: A,
        diff: {
          value: Ue,
          displacement: Ue
        }
      }
    };
  })(), g = l === "vertical" ? Xa : Kd, h = ar({
    page: c,
    withPlaceholder: null,
    axis: g,
    frame: p
  });
  return {
    descriptor: n,
    isCombineEnabled: i,
    isFixedOnPage: s,
    axis: g,
    isEnabled: r,
    client: u,
    page: c,
    frame: p,
    subject: h
  };
};
const mI = (e, n) => {
  const r = Vd(e);
  if (!n || e !== n)
    return r;
  const i = r.paddingBox.top - n.scrollTop, s = r.paddingBox.left - n.scrollLeft, l = i + n.scrollHeight, u = s + n.scrollWidth, d = qa({
    top: i,
    right: u,
    bottom: l,
    left: s
  }, r.border);
  return za({
    borderBox: d,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var yI = (e) => {
  let {
    ref: n,
    descriptor: r,
    env: i,
    windowScroll: s,
    direction: l,
    isDropDisabled: u,
    isCombineEnabled: c,
    shouldClipSubject: d
  } = e;
  const p = i.closestScrollable, g = mI(n, p), h = pi(g, s), m = (() => {
    if (!p)
      return null;
    const w = Vd(p), A = {
      scrollHeight: p.scrollHeight,
      scrollWidth: p.scrollWidth
    };
    return {
      client: w,
      page: pi(w, s),
      scroll: Na(p),
      scrollSize: A,
      shouldClipSubject: d
    };
  })();
  return vI({
    descriptor: r,
    isEnabled: !u,
    isCombineEnabled: c,
    isFixedOnPage: i.isFixedOnPage,
    direction: l,
    client: g,
    page: h,
    closest: m
  });
};
const bI = {
  passive: !1
}, _I = {
  passive: !0
};
var Kf = (e) => e.shouldPublishImmediately ? bI : _I;
const jo = (e) => e && e.env.closestScrollable || null;
function EI(e) {
  const n = W.useRef(null), r = vi(Si), i = ll("droppable"), {
    registry: s,
    marshal: l
  } = r, u = cl(e), c = pe(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), d = W.useRef(c), p = pe(() => Ge((P, I) => {
    n.current || (process.env.NODE_ENV !== "production" ? D(!1, "Can only update scroll when dragging") : D(!1));
    const $ = {
      x: P,
      y: I
    };
    l.updateDroppableScroll(c.id, $);
  }), [c.id, l]), g = Z(() => {
    const P = n.current;
    return !P || !P.env.closestScrollable ? Ue : Na(P.env.closestScrollable);
  }, []), h = Z(() => {
    const P = g();
    p(P.x, P.y);
  }, [g, p]), m = pe(() => Hr(h), [h]), _ = Z(() => {
    const P = n.current, I = jo(P);
    if (P && I || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find scroll options while scrolling") : D(!1)), P.scrollOptions.shouldPublishImmediately) {
      h();
      return;
    }
    m();
  }, [m, h]), w = Z((P, I) => {
    n.current && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot collect a droppable while a drag is occurring") : D(!1));
    const $ = u.current, G = $.getDroppableRef();
    G || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot collect without a droppable ref") : D(!1));
    const Y = gI(G), U = {
      ref: G,
      descriptor: c,
      env: Y,
      scrollOptions: I
    };
    n.current = U;
    const H = yI({
      ref: G,
      descriptor: c,
      env: Y,
      windowScroll: P,
      direction: $.direction,
      isDropDisabled: $.isDropDisabled,
      isCombineEnabled: $.isCombineEnabled,
      shouldClipSubject: !$.ignoreContainerClipping
    }), ne = Y.closestScrollable;
    return ne && (ne.setAttribute(Gf.contextId, r.contextId), ne.addEventListener("scroll", _, Kf(U.scrollOptions)), process.env.NODE_ENV !== "production" && hI(ne)), H;
  }, [r.contextId, c, _, u]), A = Z(() => {
    const P = n.current, I = jo(P);
    return P && I || (process.env.NODE_ENV !== "production" ? D(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : D(!1)), Na(I);
  }, []), x = Z(() => {
    const P = n.current;
    P || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop drag when no active drag") : D(!1));
    const I = jo(P);
    n.current = null, I && (m.cancel(), I.removeAttribute(Gf.contextId), I.removeEventListener("scroll", _, Kf(P.scrollOptions)));
  }, [_, m]), M = Z((P) => {
    const I = n.current;
    I || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot scroll when there is no drag") : D(!1));
    const $ = jo(I);
    $ || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot scroll a droppable with no closest scrollable") : D(!1)), $.scrollTop += P.y, $.scrollLeft += P.x;
  }, []), B = pe(() => ({
    getDimensionAndWatchScroll: w,
    getScrollWhileDragging: A,
    dragStopped: x,
    scroll: M
  }), [x, w, A, M]), R = pe(() => ({
    uniqueId: i,
    descriptor: c,
    callbacks: B
  }), [B, c, i]);
  yt(() => (d.current = R.descriptor, s.droppable.register(R), () => {
    n.current && (process.env.NODE_ENV !== "production" && Se("Unsupported: changing the droppableId or type of a Droppable during a drag"), x()), s.droppable.unregister(R);
  }), [B, c, x, R, l, s.droppable]), yt(() => {
    n.current && l.updateDroppableIsEnabled(d.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, l]), yt(() => {
    n.current && l.updateDroppableIsCombineEnabled(d.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, l]);
}
function aa() {
}
const Xf = {
  width: 0,
  height: 0,
  margin: nS
}, wI = (e) => {
  let {
    isAnimatingOpenOnMount: n,
    placeholder: r,
    animate: i
  } = e;
  return n || i === "close" ? Xf : {
    height: r.client.borderBox.height,
    width: r.client.borderBox.width,
    margin: r.client.margin
  };
}, xI = (e) => {
  let {
    isAnimatingOpenOnMount: n,
    placeholder: r,
    animate: i
  } = e;
  const s = wI({
    isAnimatingOpenOnMount: n,
    placeholder: r,
    animate: i
  });
  return {
    display: r.display,
    boxSizing: "border-box",
    width: s.width,
    height: s.height,
    marginTop: s.margin.top,
    marginRight: s.margin.right,
    marginBottom: s.margin.bottom,
    marginLeft: s.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: i !== "none" ? Gr.placeholder : null
  };
}, SI = (e) => {
  const n = W.useRef(null), r = Z(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), {
    animate: i,
    onTransitionEnd: s,
    onClose: l,
    contextId: u
  } = e, [c, d] = W.useState(e.animate === "open");
  W.useEffect(() => c ? i !== "open" ? (r(), d(!1), aa) : n.current ? aa : (n.current = setTimeout(() => {
    n.current = null, d(!1);
  }), r) : aa, [i, c, r]);
  const p = Z((h) => {
    h.propertyName === "height" && (s(), i === "close" && l());
  }, [i, l, s]), g = xI({
    isAnimatingOpenOnMount: c,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return z.createElement(e.placeholder.tagName, {
    style: g,
    "data-rfd-placeholder-context-id": u,
    onTransitionEnd: p,
    ref: e.innerRef
  });
};
var DI = z.memo(SI);
function la(e) {
  return typeof e == "boolean";
}
function ua(e, n) {
  n.forEach((r) => r(e));
}
const CI = [function(n) {
  let {
    props: r
  } = n;
  r.droppableId || (process.env.NODE_ENV !== "production" ? D(!1, "A Droppable requires a droppableId prop") : D(!1)), typeof r.droppableId != "string" && (process.env.NODE_ENV !== "production" ? D(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof r.droppableId}]`) : D(!1));
}, function(n) {
  let {
    props: r
  } = n;
  la(r.isDropDisabled) || (process.env.NODE_ENV !== "production" ? D(!1, "isDropDisabled must be a boolean") : D(!1)), la(r.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? D(!1, "isCombineEnabled must be a boolean") : D(!1)), la(r.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? D(!1, "ignoreContainerClipping must be a boolean") : D(!1));
}, function(n) {
  let {
    getDroppableRef: r
  } = n;
  Pp(r());
}], AI = [function(n) {
  let {
    props: r,
    getPlaceholderRef: i
  } = n;
  !r.placeholder || i() || process.env.NODE_ENV !== "production" && Se(`
      Droppable setup issue [droppableId: "${r.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], II = [function(n) {
  let {
    props: r
  } = n;
  r.renderClone || (process.env.NODE_ENV !== "production" ? D(!1, "Must provide a clone render function (renderClone) for virtual lists") : D(!1));
}, function(n) {
  let {
    getPlaceholderRef: r
  } = n;
  r() && (process.env.NODE_ENV !== "production" ? D(!1, "Expected virtual list to not have a placeholder") : D(!1));
}];
function NI(e) {
  io(() => {
    ua(e, CI), e.props.mode === "standard" && ua(e, AI), e.props.mode === "virtual" && ua(e, II);
  });
}
class OI extends z.PureComponent {
  constructor() {
    super(...arguments), this.state = {
      isVisible: !!this.props.on,
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    }, this.onClose = () => {
      this.state.animate === "close" && this.setState({
        isVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(n, r) {
    return n.shouldAnimate ? n.on ? {
      isVisible: !0,
      data: n.on,
      animate: "open"
    } : r.isVisible ? {
      isVisible: !0,
      data: r.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: !!n.on,
      data: n.on,
      animate: "none"
    };
  }
  render() {
    if (!this.state.isVisible)
      return null;
    const n = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(n);
  }
}
const RI = (e) => {
  const n = W.useContext(Si);
  n || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find app context") : D(!1));
  const {
    contextId: r,
    isMovementAllowed: i
  } = n, s = W.useRef(null), l = W.useRef(null), {
    children: u,
    droppableId: c,
    type: d,
    mode: p,
    direction: g,
    ignoreContainerClipping: h,
    isDropDisabled: m,
    isCombineEnabled: _,
    snapshot: w,
    useClone: A,
    updateViewportMaxScroll: x,
    getContainerForClone: M
  } = e, B = Z(() => s.current, []), R = Z(function(Q) {
    Q === void 0 && (Q = null), s.current = Q;
  }, []), P = Z(() => l.current, []), I = Z(function(Q) {
    Q === void 0 && (Q = null), l.current = Q;
  }, []);
  NI({
    props: e,
    getDroppableRef: B,
    getPlaceholderRef: P
  });
  const $ = Z(() => {
    i() && x({
      maxScroll: mp()
    });
  }, [i, x]);
  EI({
    droppableId: c,
    type: d,
    mode: p,
    direction: g,
    isDropDisabled: m,
    isCombineEnabled: _,
    ignoreContainerClipping: h,
    getDroppableRef: B
  });
  const G = pe(() => z.createElement(OI, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, (Q) => {
    let {
      onClose: ue,
      data: ge,
      animate: Oe
    } = Q;
    return z.createElement(DI, {
      placeholder: ge,
      onClose: ue,
      innerRef: I,
      animate: Oe,
      contextId: r,
      onTransitionEnd: $
    });
  }), [r, $, e.placeholder, e.shouldAnimatePlaceholder, I]), Y = pe(() => ({
    innerRef: R,
    placeholder: G,
    droppableProps: {
      "data-rfd-droppable-id": c,
      "data-rfd-droppable-context-id": r
    }
  }), [r, c, G, R]), U = A ? A.dragging.draggableId : null, H = pe(() => ({
    droppableId: c,
    type: d,
    isUsingCloneFor: U
  }), [c, U, d]);
  function ne() {
    if (!A)
      return null;
    const {
      dragging: Q,
      render: ue
    } = A, ge = z.createElement(Mp, {
      draggableId: Q.draggableId,
      index: Q.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (Oe, Fe) => ue(Oe, Fe, Q));
    return T0.createPortal(ge, M());
  }
  return z.createElement(dl.Provider, {
    value: H
  }, u(Y, w), ne());
};
var PI = RI;
function TI() {
  return document.body || (process.env.NODE_ENV !== "production" ? D(!1, "document.body is not ready") : D(!1)), document.body;
}
const Jf = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: TI
}, Gp = (e) => {
  let n = {
    ...e
  }, r;
  for (r in Jf)
    e[r] === void 0 && (n = {
      ...n,
      [r]: Jf[r]
    });
  return n;
}, ca = (e, n) => e === n.droppable.type, Zf = (e, n) => n.draggables[e.draggable.id], BI = () => {
  const e = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, n = {
    ...e,
    shouldAnimatePlaceholder: !1
  }, r = Ge((l) => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  })), i = Ge((l, u, c, d, p, g) => {
    const h = p.descriptor.id;
    if (p.descriptor.droppableId === l) {
      const w = g ? {
        render: g,
        dragging: r(p.descriptor)
      } : null, A = {
        isDraggingOver: c,
        draggingOverWith: c ? h : null,
        draggingFromThisWith: h,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: p.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: A,
        useClone: w
      };
    }
    if (!u)
      return n;
    if (!d)
      return e;
    const _ = {
      isDraggingOver: c,
      draggingOverWith: h,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: p.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: _,
      useClone: null
    };
  });
  return (l, u) => {
    const c = Gp(u), d = c.droppableId, p = c.type, g = !c.isDropDisabled, h = c.renderClone;
    if (Qr(l)) {
      const m = l.critical;
      if (!ca(p, m))
        return n;
      const _ = Zf(m, l.dimensions), w = mt(l.impact) === d;
      return i(d, g, w, w, _, h);
    }
    if (l.phase === "DROP_ANIMATING") {
      const m = l.completed;
      if (!ca(p, m.critical))
        return n;
      const _ = Zf(m.critical, l.dimensions);
      return i(d, g, Bp(m.result) === d, mt(m.impact) === d, _, h);
    }
    if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
      const m = l.completed;
      if (!ca(p, m.critical))
        return n;
      const _ = mt(m.impact) === d, w = !!(m.impact.at && m.impact.at.type === "COMBINE"), A = m.critical.droppable.id === d;
      return _ ? w ? e : n : A ? e : n;
    }
    return n;
  };
}, LI = {
  updateViewportMaxScroll: gD
}, MI = Md(BI, LI, (e, n, r) => ({
  ...Gp(r),
  ...e,
  ...n
}), {
  context: al,
  areStatePropsEqual: Tp
})(PI);
var TN = MI;
const FI = ({
  label: e,
  sliderType: n = "flat",
  size: r = "medium",
  activeColor: i = null,
  section: s = null,
  subsection: l = null,
  fieldName: u,
  updateField: c,
  value: d,
  i: p = null,
  min: g = null,
  max: h = null,
  onClick: m,
  ..._
}) => {
  const [w, A] = W.useState(d);
  let x = () => {
    let R = "";
    return s && (R += s + "-"), l && (R += l + "-"), u && (R += u), R;
  };
  const M = () => ({
    flat: " slider--flat",
    block: " slider--block",
    pill: " slider--pill",
    "3d": " slider--3d"
  })[n] || "";
  W.useEffect(() => {
    d !== void 0 && d !== w && A(d);
  }, [d]), W.useEffect(() => {
    d !== void 0 && d !== w && c && c(s, l, u, w, p);
  }, [w]);
  const B = (R) => {
    A(!w), m && m(R);
  };
  return /* @__PURE__ */ z.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ z.createElement("label", null, e), /* @__PURE__ */ z.createElement("div", { className: "cove-input__slider" + (r === "small" ? "--small" : r === "large" ? "--large" : "") + M() + (w ? " active" : ""), onClick: B }, /* @__PURE__ */ z.createElement("div", { className: "cove-input__slider-button" }), /* @__PURE__ */ z.createElement("div", { className: "cove-input__slider-track", style: w && i ? { backgroundColor: i } : null }), /* @__PURE__ */ z.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: x(), checked: w || !1, readOnly: !0 })));
};
FI.propTypes = {
  /** Add label to the input field */
  label: Xe.string,
  /** Select the preferred display style of the slider */
  sliderType: Xe.oneOf(["flat", "block", "pill", "3d"]),
  /** Select the preferred size of the slider */
  size: Xe.oneOf(["small", "medium", "large"]),
  /** Select the preferred color for the slider when active */
  activeColor: Xe.string,
  /** Parent key value of nested target config option
   *
   * (optional)*/
  section: Xe.string,
  /** Child key value of nested target config option
   *
   * (optional, requires `section` value)*/
  subsection: Xe.string,
  /** Key value of targeted config option */
  fieldName: Xe.string,
  /** Prop drill down of the updateField function */
  updateField: Xe.func,
  /** Current value of the input, usually the current config option value */
  stateValue: Xe.object
};
var $I = Up;
function Up(e, n, r) {
  e instanceof RegExp && (e = Qf(e, r)), n instanceof RegExp && (n = Qf(n, r));
  var i = kp(e, n, r);
  return i && {
    start: i[0],
    end: i[1],
    pre: r.slice(0, i[0]),
    body: r.slice(i[0] + e.length, i[1]),
    post: r.slice(i[1] + n.length)
  };
}
function Qf(e, n) {
  var r = n.match(e);
  return r ? r[0] : null;
}
Up.range = kp;
function kp(e, n, r) {
  var i, s, l, u, c, d = r.indexOf(e), p = r.indexOf(n, d + 1), g = d;
  if (d >= 0 && p > 0) {
    for (i = [], l = r.length; g >= 0 && !c; )
      g == d ? (i.push(g), d = r.indexOf(e, g + 1)) : i.length == 1 ? c = [i.pop(), p] : (s = i.pop(), s < l && (l = s, u = p), p = r.indexOf(n, g + 1)), g = d < p && d >= 0 ? d : p;
    i.length && (c = [l, u]);
  }
  return c;
}
var VI = Hp;
function Hp(e, n, r) {
  e instanceof RegExp && (e = jf(e, r)), n instanceof RegExp && (n = jf(n, r));
  var i = qp(e, n, r);
  return i && {
    start: i[0],
    end: i[1],
    pre: r.slice(0, i[0]),
    body: r.slice(i[0] + e.length, i[1]),
    post: r.slice(i[1] + n.length)
  };
}
function jf(e, n) {
  var r = n.match(e);
  return r ? r[0] : null;
}
Hp.range = qp;
function qp(e, n, r) {
  var i, s, l, u, c, d = r.indexOf(e), p = r.indexOf(n, d + 1), g = d;
  if (d >= 0 && p > 0) {
    if (e === n)
      return [d, p];
    for (i = [], l = r.length; g >= 0 && !c; )
      g == d ? (i.push(g), d = r.indexOf(e, g + 1)) : i.length == 1 ? c = [i.pop(), p] : (s = i.pop(), s < l && (l = s, u = p), p = r.indexOf(n, g + 1)), g = d < p && d >= 0 ? d : p;
    i.length && (c = [l, u]);
  }
  return c;
}
var WI = VI, GI = zp;
function zp(e, n, r) {
  var i = e;
  return UI(e, n).reduce(function(s, l) {
    return s.replace(l.functionIdentifier + "(" + l.matches.body + ")", kI(l.matches.body, l.functionIdentifier, r, i, n));
  }, e);
}
function UI(e, n) {
  var r = [], i = typeof n == "string" ? new RegExp("\\b(" + n + ")\\(") : n;
  do {
    var s = i.exec(e);
    if (!s)
      return r;
    if (s[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + n);
    var l = s[1], u = s.index, c = WI("(", ")", e.substring(u));
    if (!c || c.start !== s[0].length - 1)
      throw new SyntaxError(l + "(): missing closing ')' in the value '" + e + "'");
    r.push({ matches: c, functionIdentifier: l }), e = c.post;
  } while (i.test(e));
  return r;
}
function kI(e, n, r, i, s) {
  return r(zp(e, s, r), n, i);
}
var tt = function(e) {
  this.value = e;
};
tt.math = {
  isDegree: !0,
  // mode of calculator
  acos: function(e) {
    return tt.math.isDegree ? 180 / Math.PI * Math.acos(e) : Math.acos(e);
  },
  add: function(e, n) {
    return e + n;
  },
  asin: function(e) {
    return tt.math.isDegree ? 180 / Math.PI * Math.asin(e) : Math.asin(e);
  },
  atan: function(e) {
    return tt.math.isDegree ? 180 / Math.PI * Math.atan(e) : Math.atan(e);
  },
  acosh: function(e) {
    return Math.log(e + Math.sqrt(e * e - 1));
  },
  asinh: function(e) {
    return Math.log(e + Math.sqrt(e * e + 1));
  },
  atanh: function(e) {
    return Math.log((1 + e) / (1 - e));
  },
  C: function(e, n) {
    var r = 1, i = e - n, s = n;
    s < i && (s = i, i = n);
    for (var l = s + 1; l <= e; l++)
      r *= l;
    return r / tt.math.fact(i);
  },
  changeSign: function(e) {
    return -e;
  },
  cos: function(e) {
    return tt.math.isDegree && (e = tt.math.toRadian(e)), Math.cos(e);
  },
  cosh: function(e) {
    return (Math.pow(Math.E, e) + Math.pow(Math.E, -1 * e)) / 2;
  },
  div: function(e, n) {
    return e / n;
  },
  fact: function(e) {
    if (e % 1 !== 0)
      return "NaN";
    for (var n = 1, r = 2; r <= e; r++)
      n *= r;
    return n;
  },
  inverse: function(e) {
    return 1 / e;
  },
  log: function(e) {
    return Math.log(e) / Math.log(10);
  },
  mod: function(e, n) {
    return e % n;
  },
  mul: function(e, n) {
    return e * n;
  },
  P: function(e, n) {
    for (var r = 1, i = Math.floor(e) - Math.floor(n) + 1; i <= Math.floor(e); i++)
      r *= i;
    return r;
  },
  Pi: function(e, n, r) {
    for (var i = 1, s = e; s <= n; s++)
      i *= Number(r.postfixEval({
        n: s
      }));
    return i;
  },
  pow10x: function(e) {
    for (var n = 1; e--; )
      n *= 10;
    return n;
  },
  sigma: function(e, n, r) {
    for (var i = 0, s = e; s <= n; s++)
      i += Number(r.postfixEval({
        n: s
      }));
    return i;
  },
  sin: function(e) {
    return tt.math.isDegree && (e = tt.math.toRadian(e)), Math.sin(e);
  },
  sinh: function(e) {
    return (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e)) / 2;
  },
  sub: function(e, n) {
    return e - n;
  },
  tan: function(e) {
    return tt.math.isDegree && (e = tt.math.toRadian(e)), Math.tan(e);
  },
  tanh: function(e) {
    return tt.sinha(e) / tt.cosha(e);
  },
  toRadian: function(e) {
    return e * Math.PI / 180;
  },
  and: function(e, n) {
    return e & n;
  }
};
tt.Exception = function(e) {
  this.message = e;
};
var HI = tt, ie = HI;
function et(e, n) {
  for (var r = 0; r < e.length; r++)
    e[r] += n;
  return e;
}
var xn = [
  { token: "sin", show: "sin", type: 0, value: ie.math.sin },
  { token: "cos", show: "cos", type: 0, value: ie.math.cos },
  { token: "tan", show: "tan", type: 0, value: ie.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: ie.math.P },
  { token: "C", show: "C", type: 10, value: ie.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: ie.math.asin },
  { token: "acos", show: "acos", type: 0, value: ie.math.acos },
  { token: "atan", show: "atan", type: 0, value: ie.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: ie.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: ie.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: ie.math.div },
  { token: "!", show: "!", type: 7, value: ie.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: ie.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: ie.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: ie.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: ie.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: ie.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: ie.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: ie.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: ie.math.add },
  { token: "-", show: "-", type: 9, value: ie.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: ie.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: ie.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: ie.math.and }
], Oa = {
  0: 11,
  1: 0,
  2: 3,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 11,
  8: 11,
  9: 1,
  10: 10,
  11: 0,
  12: 11,
  13: 0,
  14: -1,
  15: 11
  // will be filtered after lexer
};
for (var ei = 0; ei < xn.length; ei++)
  xn[ei].precedence = Oa[xn[ei].type];
var Yt = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  9: !0,
  12: !0,
  13: !0,
  14: !0,
  15: !0
}, nr = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0,
  10: !0,
  11: !0,
  12: !0,
  13: !0,
  15: !0
}, qI = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, Wt = {}, Mr = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, zI = {
  1: !0
}, nt = [
  [],
  [
    "1",
    "2",
    "3",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "+",
    "-",
    "*",
    "/",
    "(",
    ")",
    "^",
    "!",
    "P",
    "C",
    "e",
    "0",
    ".",
    ",",
    "n",
    " ",
    "&"
  ],
  ["pi", "ln", "Pi"],
  ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"],
  ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"],
  ["acosh", "atanh", "asinh", "Sigma"]
];
function YI(e, n, r, i) {
  for (var s = 0; s < i; s++)
    if (e[r + s] !== n[s])
      return !1;
  return !0;
}
ie.tokenTypes = {
  FUNCTION_WITH_ONE_ARG: 0,
  NUMBER: 1,
  BINARY_OPERATOR_HIGH_PRECENDENCE: 2,
  CONSTANT: 3,
  OPENING_PARENTHESIS: 4,
  CLOSING_PARENTHESIS: 5,
  DECIMAL: 6,
  POSTFIX_FUNCTION_WITH_ONE_ARG: 7,
  FUNCTION_WITH_N_ARGS: 8,
  BINARY_OPERATOR_LOW_PRECENDENCE: 9,
  BINARY_OPERATOR_PERMUTATION: 10,
  COMMA: 11,
  EVALUATED_FUNCTION: 12,
  EVALUATED_FUNCTION_PARAMETER: 13,
  SPACE: 14
};
ie.addToken = function(e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n].token.length, i = -1;
    e[n].type === ie.tokenTypes.FUNCTION_WITH_N_ARGS && e[n].numberOfArguments === void 0 && (e[n].numberOfArguments = 2), nt[r] = nt[r] || [];
    for (var s = 0; s < nt[r].length; s++)
      if (e[n].token === nt[r][s]) {
        i = Yp(nt[r][s], xn);
        break;
      }
    i === -1 ? (xn.push(e[n]), e[n].precedence = Oa[e[n].type], nt.length <= e[n].token.length && (nt[e[n].token.length] = []), nt[e[n].token.length].push(e[n].token)) : (xn[i] = e[n], e[n].precedence = Oa[e[n].type]);
  }
};
function Yp(e, n) {
  for (var r = 0; r < n.length; r++)
    if (n[r].token === e)
      return r;
  return -1;
}
function KI(e) {
  for (var n = [], r = e.length, i, s, l, u = 0; u < r; u++)
    if (!(u < r - 1 && e[u] === " " && e[u + 1] === " ")) {
      for (i = "", s = e.length - u > nt.length - 2 ? nt.length - 1 : e.length - u; s > 0; s--)
        if (nt[s] !== void 0)
          for (l = 0; l < nt[s].length; l++)
            YI(e, nt[s][l], u, s) && (i = nt[s][l], l = nt[s].length, s = 0);
      if (u += i.length - 1, i === "")
        throw new ie.Exception("Can't understand after " + e.slice(u));
      n.push(xn[Yp(i, xn)]);
    }
  return n;
}
var XI = {
  value: ie.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, ti = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, Fr = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
ie.lex = function(e, n) {
  var r = [Fr], i = [], s = e, l = Yt, u = 0, c = Wt, d = "", p;
  typeof n < "u" && ie.addToken(n);
  var g = {}, h = KI(s);
  for (p = 0; p < h.length; p++) {
    var m = h[p];
    if (m.type === 14) {
      if (p > 0 && p < h.length - 1 && h[p + 1].type === 1 && (h[p - 1].type === 1 || h[p - 1].type === 6))
        throw new ie.Exception("Unexpected Space");
      continue;
    }
    var _ = m.token, w = m.type, A = m.value, x = m.precedence, M = m.show, B = r[r.length - 1], R;
    for (R = i.length; R-- && i[R] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(w) !== -1) {
        if (l[w] !== !0)
          throw new ie.Exception(_ + " is not allowed after " + d);
        r.push(ti), l = nr, c = Mr, i.pop();
      }
    if (l[w] !== !0)
      throw new ie.Exception(_ + " is not allowed after " + d);
    if (c[w] === !0 && (w = 2, A = ie.math.mul, M = "&times;", x = 3, p = p - 1), g = {
      value: A,
      type: w,
      pre: x,
      show: M,
      numberOfArguments: m.numberOfArguments
    }, w === 0)
      l = Yt, c = Wt, et(i, 2), r.push(g), h[p + 1].type !== 4 && (r.push(Fr), i.push(2));
    else if (w === 1)
      B.type === 1 ? (B.value += A, et(i, 1)) : r.push(g), l = nr, c = qI;
    else if (w === 2)
      l = Yt, c = Wt, et(i, 2), r.push(g);
    else if (w === 3)
      r.push(g), l = nr, c = Mr;
    else if (w === 4)
      et(i, 1), u++, l = Yt, c = Wt, r.push(g);
    else if (w === 5) {
      if (!u)
        throw new ie.Exception("Closing parenthesis are more than opening one, wait What!!!");
      u--, l = nr, c = Mr, r.push(g), et(i, 1);
    } else if (w === 6) {
      if (B.hasDec)
        throw new ie.Exception("Two decimals are not allowed in one number");
      B.type !== 1 && (B = {
        value: 0,
        type: 1,
        pre: 0
      }, r.push(B)), l = zI, et(i, 1), c = Wt, B.value += A, B.hasDec = !0;
    } else
      w === 7 && (l = nr, c = Mr, et(i, 1), r.push(g));
    w === 8 ? (l = Yt, c = Wt, et(i, m.numberOfArguments + 2), r.push(g), h[p + 1].type !== 4 && (r.push(Fr), i.push(m.numberOfArguments + 2))) : w === 9 ? (B.type === 9 ? B.value === ie.math.add ? (B.value = A, B.show = M, et(i, 1)) : B.value === ie.math.sub && M === "-" && (B.value = ie.math.add, B.show = "+", et(i, 1)) : B.type !== 5 && B.type !== 7 && B.type !== 1 && B.type !== 3 && B.type !== 13 ? _ === "-" && (l = Yt, c = Wt, et(i, 2).push(2), r.push(XI), r.push(Fr)) : (r.push(g), et(i, 2)), l = Yt, c = Wt) : w === 10 ? (l = Yt, c = Wt, et(i, 2), r.push(g)) : w === 11 ? (l = Yt, c = Wt, r.push(g)) : w === 12 ? (l = Yt, c = Wt, et(i, 6), r.push(g), h[p + 1].type !== 4 && (r.push(Fr), i.push(6))) : w === 13 && (l = nr, c = Mr, r.push(g)), et(i, -1), d = _;
  }
  for (R = i.length; R--; )
    r.push(ti);
  if (l[5] !== !0)
    throw new ie.Exception("complete the expression");
  for (; u--; )
    r.push(ti);
  return r.push(ti), new ie(r);
};
var JI = ie, Ra = JI;
Ra.prototype.toPostfix = function() {
  for (var e = [], n, r, i, s, l, u = [{ value: "(", type: 4, pre: 0 }], c = this.value, d = 1; d < c.length; d++)
    if (c[d].type === 1 || c[d].type === 3 || c[d].type === 13)
      c[d].type === 1 && (c[d].value = Number(c[d].value)), e.push(c[d]);
    else if (c[d].type === 4)
      u.push(c[d]);
    else if (c[d].type === 5)
      for (; (r = u.pop()).type !== 4; )
        e.push(r);
    else if (c[d].type === 11) {
      for (; (r = u.pop()).type !== 4; )
        e.push(r);
      u.push(r);
    } else {
      n = c[d], s = n.pre, l = u[u.length - 1], i = l.pre;
      var p = l.value == "Math.pow" && n.value == "Math.pow";
      if (s > i)
        u.push(n);
      else {
        for (; i >= s && !p || p && s < i; )
          r = u.pop(), l = u[u.length - 1], e.push(r), i = l.pre, p = n.value == "Math.pow" && l.value == "Math.pow";
        u.push(n);
      }
    }
  return new Ra(e);
};
var ZI = Ra, Ur = ZI;
Ur.prototype.postfixEval = function(e) {
  e = e || {}, e.PI = Math.PI, e.E = Math.E;
  for (var n = [], r, i, s, l = this.value, u = typeof e.n < "u", c = 0; c < l.length; c++)
    if (l[c].type === 1)
      n.push({ value: l[c].value, type: 1 });
    else if (l[c].type === 3)
      n.push({ value: e[l[c].value], type: 1 });
    else if (l[c].type === 0)
      typeof n[n.length - 1].type > "u" ? n[n.length - 1].value.push(l[c]) : n[n.length - 1].value = l[c].value(n[n.length - 1].value);
    else if (l[c].type === 7)
      typeof n[n.length - 1].type > "u" ? n[n.length - 1].value.push(l[c]) : n[n.length - 1].value = l[c].value(n[n.length - 1].value);
    else if (l[c].type === 8) {
      for (var d = [], p = 0; p < l[c].numberOfArguments; p++)
        d.push(n.pop().value);
      n.push({ type: 1, value: l[c].value.apply(l[c], d.reverse()) });
    } else
      l[c].type === 10 ? (r = n.pop(), i = n.pop(), typeof i.type > "u" ? (i.value = i.concat(r), i.value.push(l[c]), n.push(i)) : typeof r.type > "u" ? (r.unshift(i), r.push(l[c]), n.push(r)) : n.push({ type: 1, value: l[c].value(i.value, r.value) })) : l[c].type === 2 || l[c].type === 9 ? (r = n.pop(), i = n.pop(), typeof i.type > "u" ? (i = i.concat(r), i.push(l[c]), n.push(i)) : typeof r.type > "u" ? (r.unshift(i), r.push(l[c]), n.push(r)) : n.push({ type: 1, value: l[c].value(i.value, r.value) })) : l[c].type === 12 ? (r = n.pop(), typeof r.type < "u" && (r = [r]), i = n.pop(), s = n.pop(), n.push({ type: 1, value: l[c].value(s.value, i.value, new Ur(r)) })) : l[c].type === 13 && (u ? n.push({ value: e[l[c].value], type: 3 }) : n.push([l[c]]));
  if (n.length > 1)
    throw new Ur.Exception("Uncaught Syntax error");
  return n[0].value > 1e15 ? "Infinity" : parseFloat(n[0].value.toFixed(15));
};
Ur.eval = function(e, n, r) {
  return typeof n > "u" ? this.lex(e).toPostfix().postfixEval() : typeof r > "u" ? typeof n.length < "u" ? this.lex(e, n).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(n) : this.lex(e, n).toPostfix().postfixEval(r);
};
var QI = Ur, Kp = QI;
Kp.prototype.formulaEval = function() {
  for (var e, n, r, i = [], s = this.value, l = 0; l < s.length; l++)
    s[l].type === 1 || s[l].type === 3 ? i.push({ value: s[l].type === 3 ? s[l].show : s[l].value, type: 1 }) : s[l].type === 13 ? i.push({ value: s[l].show, type: 1 }) : s[l].type === 0 ? i[i.length - 1] = { value: s[l].show + (s[l].show != "-" ? "(" : "") + i[i.length - 1].value + (s[l].show != "-" ? ")" : ""), type: 0 } : s[l].type === 7 ? i[i.length - 1] = { value: (i[i.length - 1].type != 1 ? "(" : "") + i[i.length - 1].value + (i[i.length - 1].type != 1 ? ")" : "") + s[l].show, type: 7 } : s[l].type === 10 ? (e = i.pop(), n = i.pop(), s[l].show === "P" || s[l].show === "C" ? i.push({ value: "<sup>" + n.value + "</sup>" + s[l].show + "<sub>" + e.value + "</sub>", type: 10 }) : i.push({ value: (n.type != 1 ? "(" : "") + n.value + (n.type != 1 ? ")" : "") + "<sup>" + e.value + "</sup>", type: 1 })) : s[l].type === 2 || s[l].type === 9 ? (e = i.pop(), n = i.pop(), i.push({ value: (n.type != 1 ? "(" : "") + n.value + (n.type != 1 ? ")" : "") + s[l].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""), type: s[l].type })) : s[l].type === 12 && (e = i.pop(), n = i.pop(), r = i.pop(), i.push({ value: s[l].show + "(" + r.value + "," + n.value + "," + e.value + ")", type: 12 }));
  return i[0].value;
};
var jI = Kp, eN = $I, tN = GI, nN = jI, rN = 100, oN = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, fa, iN = sN;
function sN(e, n) {
  fa = 0, n = Math.pow(10, n === void 0 ? 5 : n), e = e.replace(/\n+/g, " ");
  function r(s, l, u) {
    if (fa++ > rN)
      throw fa = 0, new Error("Call stack overflow for " + u);
    if (s === "")
      throw new Error(l + "(): '" + u + "' must contain a non-whitespace string");
    s = i(s, u);
    var c = aN(s);
    if (c.length > 1 || s.indexOf("var(") > -1)
      return l + "(" + s + ")";
    var d = c[0] || "";
    d === "%" && (s = s.replace(/\b[0-9\.]+%/g, function(h) {
      return parseFloat(h.slice(0, -1)) * 0.01;
    }));
    var p = s.replace(new RegExp(d, "gi"), ""), g;
    try {
      g = nN.eval(p);
    } catch {
      return l + "(" + s + ")";
    }
    return d === "%" && (g *= 100), (l.length || d === "%") && (g = Math.round(g * n) / n), g += d, g;
  }
  function i(s, l) {
    s = s.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var u = "", c = s, d; d = oN.exec(c); ) {
      d[0].index > 0 && (u += c.substring(0, d[0].index));
      var p = eN("(", ")", c.substring([0].index));
      if (p.body === "")
        throw new Error("'" + s + "' must contain a non-whitespace string");
      var g = r(p.body, "", l);
      u += p.pre + g, c = p.post;
    }
    return u + c;
  }
  return tN(e, /((?:\-[a-z]+\-)?calc)\(/, r);
}
function aN(e) {
  for (var n = [], r = [], i = /[\.0-9]([%a-z]+)/gi, s = i.exec(e); s; )
    !s || !s[1] || (r.indexOf(s[1].toLowerCase()) === -1 && (n.push(s[1]), r.push(s[1].toLowerCase())), s = i.exec(e));
  return n;
}
const da = /* @__PURE__ */ rd(iN);
var ed = "__react_svg_text_measurement_id";
function lN(e, n) {
  try {
    var r = document.getElementById(ed);
    if (!r) {
      var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      i.setAttribute("aria-hidden", "true"), i.style.width = "0", i.style.height = "0", i.style.position = "absolute", i.style.top = "-100%", i.style.left = "-100%", r = document.createElementNS("http://www.w3.org/2000/svg", "text"), r.setAttribute("id", ed), i.appendChild(r), document.body.appendChild(i);
    }
    return Object.assign(r.style, n), r.textContent = e, r.getComputedTextLength();
  } catch {
    return null;
  }
}
const td = B0(lN, function(e, n) {
  return e + "_" + JSON.stringify(n);
});
var uN = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function cN(e, n) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), s, l;
  for (l = 0; l < i.length; l++)
    s = i[l], !(n.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
function pa(e) {
  return typeof e == "number";
}
function nd(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function fN(e) {
  var n = e.verticalAnchor, r = n === void 0 ? "end" : n, i = e.scaleToFit, s = i === void 0 ? !1 : i, l = e.angle, u = e.width, c = e.lineHeight, d = c === void 0 ? "1em" : c, p = e.capHeight, g = p === void 0 ? "0.71em" : p, h = e.children, m = e.style, _ = cN(e, uN), w = _.x, A = w === void 0 ? 0 : w, x = _.y, M = x === void 0 ? 0 : x, B = !nd(A) || !nd(M), R = W.useMemo(function() {
    var U = h == null ? [] : h.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: U.map(function(H) {
        return {
          word: H,
          wordWidth: td(H, m) || 0
        };
      }),
      spaceWidth: td(" ", m) || 0
    };
  }, [h, m]), P = R.wordsWithWidth, I = R.spaceWidth, $ = W.useMemo(function() {
    return B ? [] : u || s ? P.reduce(function(U, H) {
      var ne = H.word, Q = H.wordWidth, ue = U[U.length - 1];
      if (ue && (u == null || s || (ue.width || 0) + Q + I < u))
        ue.words.push(ne), ue.width = ue.width || 0, ue.width += Q + I;
      else {
        var ge = {
          words: [ne],
          width: Q
        };
        U.push(ge);
      }
      return U;
    }, []) : [{
      words: h == null ? [] : h.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [B, u, s, h, P, I]), G = W.useMemo(function() {
    var U = B ? "" : da(r === "start" ? "calc(" + g + ")" : r === "middle" ? "calc(" + ($.length - 1) / 2 + " * -" + d + " + (" + g + " / 2))" : "calc(" + ($.length - 1) + " * -" + d + ")");
    return U;
  }, [B, r, g, $.length, d]), Y = W.useMemo(function() {
    var U = [];
    if (B)
      return "";
    if (pa(A) && pa(M) && pa(u) && s && $.length > 0) {
      var H = $[0].width || 1, ne = s === "shrink-only" ? Math.min(u / H, 1) : u / H, Q = ne, ue = A - ne * A, ge = M - Q * M;
      U.push("matrix(" + ne + ", 0, 0, " + Q + ", " + ue + ", " + ge + ")");
    }
    return l && U.push("rotate(" + l + ", " + A + ", " + M + ")"), U.length > 0 ? U.join(" ") : "";
  }, [B, A, M, u, s, $, l]);
  return {
    wordsByLines: $,
    startDy: G,
    transform: Y
  };
}
var dN = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function Pa() {
  return Pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Pa.apply(this, arguments);
}
function pN(e, n) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), s, l;
  for (l = 0; l < i.length; l++)
    s = i[l], !(n.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var hN = {
  overflow: "visible"
};
function BN(e) {
  var n = e.dx, r = n === void 0 ? 0 : n, i = e.dy, s = i === void 0 ? 0 : i, l = e.textAnchor, u = l === void 0 ? "start" : l, c = e.innerRef, d = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var p = e.lineHeight, g = p === void 0 ? "1em" : p;
  e.scaleToFit, e.capHeight, e.width;
  var h = pN(e, dN), m = h.x, _ = m === void 0 ? 0 : m, w = h.fontSize, A = fN(e), x = A.wordsByLines, M = A.startDy, B = A.transform;
  return /* @__PURE__ */ z.createElement("svg", {
    ref: c,
    x: r,
    y: s,
    fontSize: w,
    style: hN
  }, x.length > 0 ? /* @__PURE__ */ z.createElement("text", Pa({
    ref: d,
    transform: B
  }, h, {
    textAnchor: u
  }), x.map(function(R, P) {
    return /* @__PURE__ */ z.createElement("tspan", {
      key: P,
      x: _,
      dy: P === 0 ? M : g
    }, R.words.join(" "));
  })) : null);
}
export {
  TN as C,
  RN as D,
  G1 as F,
  ON as G,
  FI as I,
  PN as P,
  Ut as S,
  rr as T,
  Nd as _,
  Rw as a,
  BN as b,
  IN as c,
  sd as d,
  AN as e,
  DN as i,
  ww as r,
  CN as s,
  NN as t,
  W1 as u
};
