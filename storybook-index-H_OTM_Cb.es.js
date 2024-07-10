import { g as De } from "./storybook-_commonjsHelpers-BkfeUUK-.es.js";
import { c as bu, d as ie, e as se, a as X, f as Ae, g as Ue, _ as Su, h as Ge, j as Ke, k as su, l as je, i as We, n as qe } from "./storybook-memoize-Bp6OJy_t.es.js";
import { a as pu, i as wu } from "./storybook-isSymbol-BDcz1AI0.es.js";
function He(u, e) {
  for (var r = -1, a = u == null ? 0 : u.length, t = Array(a); ++r < a; )
    t[r] = e(u[r], r, u);
  return t;
}
var Ve = He, Je = bu;
function ze() {
  this.__data__ = new Je(), this.size = 0;
}
var Qe = ze;
function Ye(u) {
  var e = this.__data__, r = e.delete(u);
  return this.size = e.size, r;
}
var Xe = Ye;
function Ze(u) {
  return this.__data__.get(u);
}
var ur = Ze;
function er(u) {
  return this.__data__.has(u);
}
var rr = er, tr = bu, ar = ie, nr = se, Dr = 200;
function ir(u, e) {
  var r = this.__data__;
  if (r instanceof tr) {
    var a = r.__data__;
    if (!ar || a.length < Dr - 1)
      return a.push([u, e]), this.size = ++r.size, this;
    r = this.__data__ = new nr(a);
  }
  return r.set(u, e), this.size = r.size, this;
}
var sr = ir, Ar = bu, Fr = Qe, or = Xe, Cr = ur, Er = rr, lr = sr;
function Z(u) {
  var e = this.__data__ = new Ar(u);
  this.size = e.size;
}
Z.prototype.clear = Fr;
Z.prototype.delete = or;
Z.prototype.get = Cr;
Z.prototype.has = Er;
Z.prototype.set = lr;
var Fe = Z, cr = "__lodash_hash_undefined__";
function pr(u) {
  return this.__data__.set(u, cr), this;
}
var fr = pr;
function Br(u) {
  return this.__data__.has(u);
}
var yr = Br, hr = se, dr = fr, gr = yr;
function Eu(u) {
  var e = -1, r = u == null ? 0 : u.length;
  for (this.__data__ = new hr(); ++e < r; )
    this.add(u[e]);
}
Eu.prototype.add = Eu.prototype.push = dr;
Eu.prototype.has = gr;
var mr = Eu;
function vr(u, e) {
  for (var r = -1, a = u == null ? 0 : u.length; ++r < a; )
    if (e(u[r], r, u))
      return !0;
  return !1;
}
var xr = vr;
function Tr(u, e) {
  return u.has(e);
}
var _r = Tr, br = mr, Sr = xr, wr = _r, Nr = 1, Pr = 2;
function Or(u, e, r, a, t, i) {
  var n = r & Nr, E = u.length, p = e.length;
  if (E != p && !(n && p > E))
    return !1;
  var B = i.get(u), _ = i.get(e);
  if (B && _)
    return B == e && _ == u;
  var T = -1, o = !0, v = r & Pr ? new br() : void 0;
  for (i.set(u, e), i.set(e, u); ++T < E; ) {
    var d = u[T], l = e[T];
    if (a)
      var c = n ? a(l, d, T, e, u, i) : a(d, l, T, u, e, i);
    if (c !== void 0) {
      if (c)
        continue;
      o = !1;
      break;
    }
    if (v) {
      if (!Sr(e, function(I, L) {
        if (!wr(v, L) && (d === I || t(d, I, r, a, i)))
          return v.push(L);
      })) {
        o = !1;
        break;
      }
    } else if (!(d === l || t(d, l, r, a, i))) {
      o = !1;
      break;
    }
  }
  return i.delete(u), i.delete(e), o;
}
var oe = Or, $r = X, Ir = $r.Uint8Array, Rr = Ir;
function Lr(u) {
  var e = -1, r = Array(u.size);
  return u.forEach(function(a, t) {
    r[++e] = [t, a];
  }), r;
}
var Mr = Lr;
function kr(u) {
  var e = -1, r = Array(u.size);
  return u.forEach(function(a) {
    r[++e] = a;
  }), r;
}
var Ur = kr, Ru = Ae, Lu = Rr, Gr = Ue, Kr = oe, jr = Mr, Wr = Ur, qr = 1, Hr = 2, Vr = "[object Boolean]", Jr = "[object Date]", zr = "[object Error]", Qr = "[object Map]", Yr = "[object Number]", Xr = "[object RegExp]", Zr = "[object Set]", u0 = "[object String]", e0 = "[object Symbol]", r0 = "[object ArrayBuffer]", t0 = "[object DataView]", Mu = Ru ? Ru.prototype : void 0, du = Mu ? Mu.valueOf : void 0;
function a0(u, e, r, a, t, i, n) {
  switch (r) {
    case t0:
      if (u.byteLength != e.byteLength || u.byteOffset != e.byteOffset)
        return !1;
      u = u.buffer, e = e.buffer;
    case r0:
      return !(u.byteLength != e.byteLength || !i(new Lu(u), new Lu(e)));
    case Vr:
    case Jr:
    case Yr:
      return Gr(+u, +e);
    case zr:
      return u.name == e.name && u.message == e.message;
    case Xr:
    case u0:
      return u == e + "";
    case Qr:
      var E = jr;
    case Zr:
      var p = a & qr;
      if (E || (E = Wr), u.size != e.size && !p)
        return !1;
      var B = n.get(u);
      if (B)
        return B == e;
      a |= Hr, n.set(u, e);
      var _ = Kr(E(u), E(e), a, t, i, n);
      return n.delete(u), _;
    case e0:
      if (du)
        return du.call(u) == du.call(e);
  }
  return !1;
}
var n0 = a0;
function D0(u, e) {
  for (var r = -1, a = e.length, t = u.length; ++r < a; )
    u[t + r] = e[r];
  return u;
}
var i0 = D0, s0 = Array.isArray, q = s0, A0 = i0, F0 = q;
function o0(u, e, r) {
  var a = e(u);
  return F0(u) ? a : A0(a, r(u));
}
var C0 = o0;
function E0(u, e) {
  for (var r = -1, a = u == null ? 0 : u.length, t = 0, i = []; ++r < a; ) {
    var n = u[r];
    e(n, r, u) && (i[t++] = n);
  }
  return i;
}
var l0 = E0;
function c0() {
  return [];
}
var p0 = c0, f0 = l0, B0 = p0, y0 = Object.prototype, h0 = y0.propertyIsEnumerable, ku = Object.getOwnPropertySymbols, d0 = ku ? function(u) {
  return u == null ? [] : (u = Object(u), f0(ku(u), function(e) {
    return h0.call(u, e);
  }));
} : B0, g0 = d0;
function m0(u, e) {
  for (var r = -1, a = Array(u); ++r < u; )
    a[r] = e(r);
  return a;
}
var v0 = m0, x0 = Su, T0 = pu, _0 = "[object Arguments]";
function b0(u) {
  return T0(u) && x0(u) == _0;
}
var S0 = b0, Uu = S0, w0 = pu, Ce = Object.prototype, N0 = Ce.hasOwnProperty, P0 = Ce.propertyIsEnumerable, O0 = Uu(/* @__PURE__ */ function() {
  return arguments;
}()) ? Uu : function(u) {
  return w0(u) && N0.call(u, "callee") && !P0.call(u, "callee");
}, Ee = O0, lu = { exports: {} };
function $0() {
  return !1;
}
var I0 = $0;
lu.exports;
(function(u, e) {
  var r = X, a = I0, t = e && !e.nodeType && e, i = t && !0 && u && !u.nodeType && u, n = i && i.exports === t, E = n ? r.Buffer : void 0, p = E ? E.isBuffer : void 0, B = p || a;
  u.exports = B;
})(lu, lu.exports);
var le = lu.exports, R0 = 9007199254740991, L0 = /^(?:0|[1-9]\d*)$/;
function M0(u, e) {
  var r = typeof u;
  return e = e ?? R0, !!e && (r == "number" || r != "symbol" && L0.test(u)) && u > -1 && u % 1 == 0 && u < e;
}
var ce = M0, k0 = 9007199254740991;
function U0(u) {
  return typeof u == "number" && u > -1 && u % 1 == 0 && u <= k0;
}
var Nu = U0, G0 = Su, K0 = Nu, j0 = pu, W0 = "[object Arguments]", q0 = "[object Array]", H0 = "[object Boolean]", V0 = "[object Date]", J0 = "[object Error]", z0 = "[object Function]", Q0 = "[object Map]", Y0 = "[object Number]", X0 = "[object Object]", Z0 = "[object RegExp]", ut = "[object Set]", et = "[object String]", rt = "[object WeakMap]", tt = "[object ArrayBuffer]", at = "[object DataView]", nt = "[object Float32Array]", Dt = "[object Float64Array]", it = "[object Int8Array]", st = "[object Int16Array]", At = "[object Int32Array]", Ft = "[object Uint8Array]", ot = "[object Uint8ClampedArray]", Ct = "[object Uint16Array]", Et = "[object Uint32Array]", S = {};
S[nt] = S[Dt] = S[it] = S[st] = S[At] = S[Ft] = S[ot] = S[Ct] = S[Et] = !0;
S[W0] = S[q0] = S[tt] = S[H0] = S[at] = S[V0] = S[J0] = S[z0] = S[Q0] = S[Y0] = S[X0] = S[Z0] = S[ut] = S[et] = S[rt] = !1;
function lt(u) {
  return j0(u) && K0(u.length) && !!S[G0(u)];
}
var ct = lt;
function pt(u) {
  return function(e) {
    return u(e);
  };
}
var ft = pt, cu = { exports: {} };
cu.exports;
(function(u, e) {
  var r = Ge, a = e && !e.nodeType && e, t = a && !0 && u && !u.nodeType && u, i = t && t.exports === a, n = i && r.process, E = function() {
    try {
      var p = t && t.require && t.require("util").types;
      return p || n && n.binding && n.binding("util");
    } catch {
    }
  }();
  u.exports = E;
})(cu, cu.exports);
var Bt = cu.exports, yt = ct, ht = ft, Gu = Bt, Ku = Gu && Gu.isTypedArray, dt = Ku ? ht(Ku) : yt, pe = dt, gt = v0, mt = Ee, vt = q, xt = le, Tt = ce, _t = pe, bt = Object.prototype, St = bt.hasOwnProperty;
function wt(u, e) {
  var r = vt(u), a = !r && mt(u), t = !r && !a && xt(u), i = !r && !a && !t && _t(u), n = r || a || t || i, E = n ? gt(u.length, String) : [], p = E.length;
  for (var B in u)
    (e || St.call(u, B)) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    t && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
    Tt(B, p))) && E.push(B);
  return E;
}
var Nt = wt, Pt = Object.prototype;
function Ot(u) {
  var e = u && u.constructor, r = typeof e == "function" && e.prototype || Pt;
  return u === r;
}
var $t = Ot;
function It(u, e) {
  return function(r) {
    return u(e(r));
  };
}
var fe = It, Rt = fe, Lt = Rt(Object.keys, Object), Mt = Lt, kt = $t, Ut = Mt, Gt = Object.prototype, Kt = Gt.hasOwnProperty;
function jt(u) {
  if (!kt(u))
    return Ut(u);
  var e = [];
  for (var r in Object(u))
    Kt.call(u, r) && r != "constructor" && e.push(r);
  return e;
}
var Wt = jt, qt = Ke, Ht = Nu;
function Vt(u) {
  return u != null && Ht(u.length) && !qt(u);
}
var Jt = Vt, zt = Nt, Qt = Wt, Yt = Jt;
function Xt(u) {
  return Yt(u) ? zt(u) : Qt(u);
}
var Pu = Xt, Zt = C0, ua = g0, ea = Pu;
function ra(u) {
  return Zt(u, ea, ua);
}
var ta = ra, ju = ta, aa = 1, na = Object.prototype, Da = na.hasOwnProperty;
function ia(u, e, r, a, t, i) {
  var n = r & aa, E = ju(u), p = E.length, B = ju(e), _ = B.length;
  if (p != _ && !n)
    return !1;
  for (var T = p; T--; ) {
    var o = E[T];
    if (!(n ? o in e : Da.call(e, o)))
      return !1;
  }
  var v = i.get(u), d = i.get(e);
  if (v && d)
    return v == e && d == u;
  var l = !0;
  i.set(u, e), i.set(e, u);
  for (var c = n; ++T < p; ) {
    o = E[T];
    var I = u[o], L = e[o];
    if (a)
      var H = n ? a(L, I, o, e, u, i) : a(I, L, o, u, e, i);
    if (!(H === void 0 ? I === L || t(I, L, r, a, i) : H)) {
      l = !1;
      break;
    }
    c || (c = o == "constructor");
  }
  if (l && !c) {
    var M = u.constructor, x = e.constructor;
    M != x && "constructor" in u && "constructor" in e && !(typeof M == "function" && M instanceof M && typeof x == "function" && x instanceof x) && (l = !1);
  }
  return i.delete(u), i.delete(e), l;
}
var sa = ia, Aa = su, Fa = X, oa = Aa(Fa, "DataView"), Ca = oa, Ea = su, la = X, ca = Ea(la, "Promise"), pa = ca, fa = su, Ba = X, ya = fa(Ba, "Set"), ha = ya, da = su, ga = X, ma = da(ga, "WeakMap"), va = ma, mu = Ca, vu = ie, xu = pa, Tu = ha, _u = va, Be = Su, uu = je, Wu = "[object Map]", xa = "[object Object]", qu = "[object Promise]", Hu = "[object Set]", Vu = "[object WeakMap]", Ju = "[object DataView]", Ta = uu(mu), _a = uu(vu), ba = uu(xu), Sa = uu(Tu), wa = uu(_u), z = Be;
(mu && z(new mu(new ArrayBuffer(1))) != Ju || vu && z(new vu()) != Wu || xu && z(xu.resolve()) != qu || Tu && z(new Tu()) != Hu || _u && z(new _u()) != Vu) && (z = function(u) {
  var e = Be(u), r = e == xa ? u.constructor : void 0, a = r ? uu(r) : "";
  if (a)
    switch (a) {
      case Ta:
        return Ju;
      case _a:
        return Wu;
      case ba:
        return qu;
      case Sa:
        return Hu;
      case wa:
        return Vu;
    }
  return e;
});
var Na = z, gu = Fe, Pa = oe, Oa = n0, $a = sa, zu = Na, Qu = q, Yu = le, Ia = pe, Ra = 1, Xu = "[object Arguments]", Zu = "[object Array]", Cu = "[object Object]", La = Object.prototype, ue = La.hasOwnProperty;
function Ma(u, e, r, a, t, i) {
  var n = Qu(u), E = Qu(e), p = n ? Zu : zu(u), B = E ? Zu : zu(e);
  p = p == Xu ? Cu : p, B = B == Xu ? Cu : B;
  var _ = p == Cu, T = B == Cu, o = p == B;
  if (o && Yu(u)) {
    if (!Yu(e))
      return !1;
    n = !0, _ = !1;
  }
  if (o && !_)
    return i || (i = new gu()), n || Ia(u) ? Pa(u, e, r, a, t, i) : Oa(u, e, p, r, a, t, i);
  if (!(r & Ra)) {
    var v = _ && ue.call(u, "__wrapped__"), d = T && ue.call(e, "__wrapped__");
    if (v || d) {
      var l = v ? u.value() : u, c = d ? e.value() : e;
      return i || (i = new gu()), t(l, c, r, a, i);
    }
  }
  return o ? (i || (i = new gu()), $a(u, e, r, a, t, i)) : !1;
}
var ka = Ma, Ua = ka, ee = pu;
function ye(u, e, r, a, t) {
  return u === e ? !0 : u == null || e == null || !ee(u) && !ee(e) ? u !== u && e !== e : Ua(u, e, r, a, ye, t);
}
var he = ye, Ga = Fe, Ka = he, ja = 1, Wa = 2;
function qa(u, e, r, a) {
  var t = r.length, i = t, n = !a;
  if (u == null)
    return !i;
  for (u = Object(u); t--; ) {
    var E = r[t];
    if (n && E[2] ? E[1] !== u[E[0]] : !(E[0] in u))
      return !1;
  }
  for (; ++t < i; ) {
    E = r[t];
    var p = E[0], B = u[p], _ = E[1];
    if (n && E[2]) {
      if (B === void 0 && !(p in u))
        return !1;
    } else {
      var T = new Ga();
      if (a)
        var o = a(B, _, p, u, e, T);
      if (!(o === void 0 ? Ka(_, B, ja | Wa, a, T) : o))
        return !1;
    }
  }
  return !0;
}
var Ha = qa, Va = We;
function Ja(u) {
  return u === u && !Va(u);
}
var de = Ja, za = de, Qa = Pu;
function Ya(u) {
  for (var e = Qa(u), r = e.length; r--; ) {
    var a = e[r], t = u[a];
    e[r] = [a, t, za(t)];
  }
  return e;
}
var Xa = Ya;
function Za(u, e) {
  return function(r) {
    return r == null ? !1 : r[u] === e && (e !== void 0 || u in Object(r));
  };
}
var ge = Za, un = Ha, en = Xa, rn = ge;
function tn(u) {
  var e = en(u);
  return e.length == 1 && e[0][2] ? rn(e[0][0], e[0][1]) : function(r) {
    return r === u || un(r, u, e);
  };
}
var an = tn, nn = q, Dn = wu, sn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, An = /^\w*$/;
function Fn(u, e) {
  if (nn(u))
    return !1;
  var r = typeof u;
  return r == "number" || r == "symbol" || r == "boolean" || u == null || Dn(u) ? !0 : An.test(u) || !sn.test(u) || e != null && u in Object(e);
}
var Ou = Fn, on = qe, Cn = 500;
function En(u) {
  var e = on(u, function(a) {
    return r.size === Cn && r.clear(), a;
  }), r = e.cache;
  return e;
}
var ln = En, cn = ln, pn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fn = /\\(\\)?/g, Bn = cn(function(u) {
  var e = [];
  return u.charCodeAt(0) === 46 && e.push(""), u.replace(pn, function(r, a, t, i) {
    e.push(t ? i.replace(fn, "$1") : a || r);
  }), e;
}), yn = Bn, re = Ae, hn = Ve, dn = q, gn = wu, mn = 1 / 0, te = re ? re.prototype : void 0, ae = te ? te.toString : void 0;
function me(u) {
  if (typeof u == "string")
    return u;
  if (dn(u))
    return hn(u, me) + "";
  if (gn(u))
    return ae ? ae.call(u) : "";
  var e = u + "";
  return e == "0" && 1 / u == -mn ? "-0" : e;
}
var vn = me, xn = vn;
function Tn(u) {
  return u == null ? "" : xn(u);
}
var _n = Tn, bn = q, Sn = Ou, wn = yn, Nn = _n;
function Pn(u, e) {
  return bn(u) ? u : Sn(u, e) ? [u] : wn(Nn(u));
}
var ve = Pn, On = wu, $n = 1 / 0;
function In(u) {
  if (typeof u == "string" || On(u))
    return u;
  var e = u + "";
  return e == "0" && 1 / u == -$n ? "-0" : e;
}
var fu = In, Rn = ve, Ln = fu;
function Mn(u, e) {
  e = Rn(e, u);
  for (var r = 0, a = e.length; u != null && r < a; )
    u = u[Ln(e[r++])];
  return r && r == a ? u : void 0;
}
var xe = Mn, kn = xe;
function Un(u, e, r) {
  var a = u == null ? void 0 : kn(u, e);
  return a === void 0 ? r : a;
}
var Gn = Un;
function Kn(u, e) {
  return u != null && e in Object(u);
}
var jn = Kn, Wn = ve, qn = Ee, Hn = q, Vn = ce, Jn = Nu, zn = fu;
function Qn(u, e, r) {
  e = Wn(e, u);
  for (var a = -1, t = e.length, i = !1; ++a < t; ) {
    var n = zn(e[a]);
    if (!(i = u != null && r(u, n)))
      break;
    u = u[n];
  }
  return i || ++a != t ? i : (t = u == null ? 0 : u.length, !!t && Jn(t) && Vn(n, t) && (Hn(u) || qn(u)));
}
var Yn = Qn, Xn = jn, Zn = Yn;
function uD(u, e) {
  return u != null && Zn(u, e, Xn);
}
var eD = uD, rD = he, tD = Gn, aD = eD, nD = Ou, DD = de, iD = ge, sD = fu, AD = 1, FD = 2;
function oD(u, e) {
  return nD(u) && DD(e) ? iD(sD(u), e) : function(r) {
    var a = tD(r, u);
    return a === void 0 && a === e ? aD(r, u) : rD(e, a, AD | FD);
  };
}
var CD = oD;
function ED(u) {
  return u;
}
var lD = ED;
function cD(u) {
  return function(e) {
    return e == null ? void 0 : e[u];
  };
}
var pD = cD, fD = xe;
function BD(u) {
  return function(e) {
    return fD(e, u);
  };
}
var yD = BD, hD = pD, dD = yD, gD = Ou, mD = fu;
function vD(u) {
  return gD(u) ? hD(mD(u)) : dD(u);
}
var xD = vD, TD = an, _D = CD, bD = lD, SD = q, wD = xD;
function ND(u) {
  return typeof u == "function" ? u : u == null ? bD : typeof u == "object" ? SD(u) ? _D(u[0], u[1]) : TD(u) : wD(u);
}
var PD = ND, OD = su, $D = function() {
  try {
    var u = OD(Object, "defineProperty");
    return u({}, "", {}), u;
  } catch {
  }
}(), ID = $D, ne = ID;
function RD(u, e, r) {
  e == "__proto__" && ne ? ne(u, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : u[e] = r;
}
var LD = RD, MD = fe, kD = MD(Object.getPrototypeOf, Object), ps = kD;
function UD(u) {
  return function(e, r, a) {
    for (var t = -1, i = Object(e), n = a(e), E = n.length; E--; ) {
      var p = n[u ? E : ++t];
      if (r(i[p], p, i) === !1)
        break;
    }
    return e;
  };
}
var GD = UD, KD = GD, jD = KD(), WD = jD, qD = WD, HD = Pu;
function VD(u, e) {
  return u && qD(u, e, HD);
}
var JD = VD, zD = LD, QD = JD, YD = PD;
function XD(u, e) {
  var r = {};
  return e = YD(e), QD(u, function(a, t, i) {
    zD(r, t, e(a, t, i));
  }), r;
}
var ZD = XD;
const ui = /* @__PURE__ */ De(ZD);
var Te = {}, nu = {}, _e = { exports: {} };
(function() {
  function u(n) {
    if (n == null)
      return !1;
    switch (n.type) {
      case "ArrayExpression":
      case "AssignmentExpression":
      case "BinaryExpression":
      case "CallExpression":
      case "ConditionalExpression":
      case "FunctionExpression":
      case "Identifier":
      case "Literal":
      case "LogicalExpression":
      case "MemberExpression":
      case "NewExpression":
      case "ObjectExpression":
      case "SequenceExpression":
      case "ThisExpression":
      case "UnaryExpression":
      case "UpdateExpression":
        return !0;
    }
    return !1;
  }
  function e(n) {
    if (n == null)
      return !1;
    switch (n.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return !0;
    }
    return !1;
  }
  function r(n) {
    if (n == null)
      return !1;
    switch (n.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return !0;
    }
    return !1;
  }
  function a(n) {
    return r(n) || n != null && n.type === "FunctionDeclaration";
  }
  function t(n) {
    switch (n.type) {
      case "IfStatement":
        return n.alternate != null ? n.alternate : n.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return n.body;
    }
    return null;
  }
  function i(n) {
    var E;
    if (n.type !== "IfStatement" || n.alternate == null)
      return !1;
    E = n.consequent;
    do {
      if (E.type === "IfStatement" && E.alternate == null)
        return !0;
      E = t(E);
    } while (E);
    return !1;
  }
  _e.exports = {
    isExpression: u,
    isStatement: r,
    isIterationStatement: e,
    isSourceElement: a,
    isProblematicIfStatement: i,
    trailingStatement: t
  };
})();
var ei = _e.exports, be = { exports: {} };
(function() {
  var u, e, r, a, t, i;
  e = {
    // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
  }, u = {
    // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
  };
  function n(c) {
    return 48 <= c && c <= 57;
  }
  function E(c) {
    return 48 <= c && c <= 57 || // 0..9
    97 <= c && c <= 102 || // a..f
    65 <= c && c <= 70;
  }
  function p(c) {
    return c >= 48 && c <= 55;
  }
  r = [
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8239,
    8287,
    12288,
    65279
  ];
  function B(c) {
    return c === 32 || c === 9 || c === 11 || c === 12 || c === 160 || c >= 5760 && r.indexOf(c) >= 0;
  }
  function _(c) {
    return c === 10 || c === 13 || c === 8232 || c === 8233;
  }
  function T(c) {
    if (c <= 65535)
      return String.fromCharCode(c);
    var I = String.fromCharCode(Math.floor((c - 65536) / 1024) + 55296), L = String.fromCharCode((c - 65536) % 1024 + 56320);
    return I + L;
  }
  for (a = new Array(128), i = 0; i < 128; ++i)
    a[i] = i >= 97 && i <= 122 || // a..z
    i >= 65 && i <= 90 || // A..Z
    i === 36 || i === 95;
  for (t = new Array(128), i = 0; i < 128; ++i)
    t[i] = i >= 97 && i <= 122 || // a..z
    i >= 65 && i <= 90 || // A..Z
    i >= 48 && i <= 57 || // 0..9
    i === 36 || i === 95;
  function o(c) {
    return c < 128 ? a[c] : e.NonAsciiIdentifierStart.test(T(c));
  }
  function v(c) {
    return c < 128 ? t[c] : e.NonAsciiIdentifierPart.test(T(c));
  }
  function d(c) {
    return c < 128 ? a[c] : u.NonAsciiIdentifierStart.test(T(c));
  }
  function l(c) {
    return c < 128 ? t[c] : u.NonAsciiIdentifierPart.test(T(c));
  }
  be.exports = {
    isDecimalDigit: n,
    isHexDigit: E,
    isOctalDigit: p,
    isWhiteSpace: B,
    isLineTerminator: _,
    isIdentifierStartES5: o,
    isIdentifierPartES5: v,
    isIdentifierStartES6: d,
    isIdentifierPartES6: l
  };
})();
var Se = be.exports, we = { exports: {} };
(function() {
  var u = Se;
  function e(o) {
    switch (o) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "let":
        return !0;
      default:
        return !1;
    }
  }
  function r(o, v) {
    return !v && o === "yield" ? !1 : a(o, v);
  }
  function a(o, v) {
    if (v && e(o))
      return !0;
    switch (o.length) {
      case 2:
        return o === "if" || o === "in" || o === "do";
      case 3:
        return o === "var" || o === "for" || o === "new" || o === "try";
      case 4:
        return o === "this" || o === "else" || o === "case" || o === "void" || o === "with" || o === "enum";
      case 5:
        return o === "while" || o === "break" || o === "catch" || o === "throw" || o === "const" || o === "yield" || o === "class" || o === "super";
      case 6:
        return o === "return" || o === "typeof" || o === "delete" || o === "switch" || o === "export" || o === "import";
      case 7:
        return o === "default" || o === "finally" || o === "extends";
      case 8:
        return o === "function" || o === "continue" || o === "debugger";
      case 10:
        return o === "instanceof";
      default:
        return !1;
    }
  }
  function t(o, v) {
    return o === "null" || o === "true" || o === "false" || r(o, v);
  }
  function i(o, v) {
    return o === "null" || o === "true" || o === "false" || a(o, v);
  }
  function n(o) {
    return o === "eval" || o === "arguments";
  }
  function E(o) {
    var v, d, l;
    if (o.length === 0 || (l = o.charCodeAt(0), !u.isIdentifierStartES5(l)))
      return !1;
    for (v = 1, d = o.length; v < d; ++v)
      if (l = o.charCodeAt(v), !u.isIdentifierPartES5(l))
        return !1;
    return !0;
  }
  function p(o, v) {
    return (o - 55296) * 1024 + (v - 56320) + 65536;
  }
  function B(o) {
    var v, d, l, c, I;
    if (o.length === 0)
      return !1;
    for (I = u.isIdentifierStartES6, v = 0, d = o.length; v < d; ++v) {
      if (l = o.charCodeAt(v), 55296 <= l && l <= 56319) {
        if (++v, v >= d || (c = o.charCodeAt(v), !(56320 <= c && c <= 57343)))
          return !1;
        l = p(l, c);
      }
      if (!I(l))
        return !1;
      I = u.isIdentifierPartES6;
    }
    return !0;
  }
  function _(o, v) {
    return E(o) && !t(o, v);
  }
  function T(o, v) {
    return B(o) && !i(o, v);
  }
  we.exports = {
    isKeywordES5: r,
    isKeywordES6: a,
    isReservedWordES5: t,
    isReservedWordES6: i,
    isRestrictedWord: n,
    isIdentifierNameES5: E,
    isIdentifierNameES6: B,
    isIdentifierES5: _,
    isIdentifierES6: T
  };
})();
var ri = we.exports;
(function() {
  nu.ast = ei, nu.code = Se, nu.keyword = ri;
})();
var tu = {}, Q = {};
const ti = "doctrine", ai = "JSDoc parser", ni = "https://github.com/eslint/doctrine", Di = "lib/doctrine.js", ii = "3.0.0", si = {
  node: ">=6.0.0"
}, Ai = {
  lib: "./lib"
}, Fi = [
  "lib"
], oi = [
  {
    name: "Nicholas C. Zakas",
    email: "nicholas+npm@nczconsulting.com",
    web: "https://www.nczonline.net"
  },
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "https://github.com/Constellation"
  }
], Ci = "eslint/doctrine", Ei = {
  coveralls: "^3.0.1",
  dateformat: "^1.0.11",
  eslint: "^1.10.3",
  "eslint-release": "^1.0.0",
  linefix: "^0.1.1",
  mocha: "^3.4.2",
  "npm-license": "^0.3.1",
  nyc: "^10.3.2",
  semver: "^5.0.3",
  shelljs: "^0.5.3",
  "shelljs-nodecli": "^0.1.1",
  should: "^5.0.1"
}, li = "Apache-2.0", ci = {
  pretest: "npm run lint",
  test: "nyc mocha",
  coveralls: "nyc report --reporter=text-lcov | coveralls",
  lint: "eslint lib/",
  "generate-release": "eslint-generate-release",
  "generate-alpharelease": "eslint-generate-prerelease alpha",
  "generate-betarelease": "eslint-generate-prerelease beta",
  "generate-rcrelease": "eslint-generate-prerelease rc",
  "publish-release": "eslint-publish-release"
}, pi = {
  esutils: "^2.0.2"
}, fi = {
  name: ti,
  description: ai,
  homepage: ni,
  main: Di,
  version: ii,
  engines: si,
  directories: Ai,
  files: Fi,
  maintainers: oi,
  repository: Ci,
  devDependencies: Ei,
  license: li,
  scripts: ci,
  dependencies: pi
};
function Bi(u, e) {
  if (!u)
    throw new Error(e || "unknown assertion error");
}
var yi = Bi;
(function() {
  var u;
  u = fi.version, Q.VERSION = u;
  function e(a) {
    this.name = "DoctrineError", this.message = a;
  }
  e.prototype = function() {
    var a = function() {
    };
    return a.prototype = Error.prototype, new a();
  }(), e.prototype.constructor = e, Q.DoctrineError = e;
  function r(a) {
    throw new e(a);
  }
  Q.throwError = r, Q.assert = yi;
})();
(function() {
  var u, e, r, a, t, i, n, E, p, B, _, T;
  p = nu, B = Q, u = {
    NullableLiteral: "NullableLiteral",
    AllLiteral: "AllLiteral",
    NullLiteral: "NullLiteral",
    UndefinedLiteral: "UndefinedLiteral",
    VoidLiteral: "VoidLiteral",
    UnionType: "UnionType",
    ArrayType: "ArrayType",
    RecordType: "RecordType",
    FieldType: "FieldType",
    FunctionType: "FunctionType",
    ParameterType: "ParameterType",
    RestType: "RestType",
    NonNullableType: "NonNullableType",
    OptionalType: "OptionalType",
    NullableType: "NullableType",
    NameExpression: "NameExpression",
    TypeApplication: "TypeApplication",
    StringLiteralType: "StringLiteralType",
    NumericLiteralType: "NumericLiteralType",
    BooleanLiteralType: "BooleanLiteralType"
  }, e = {
    ILLEGAL: 0,
    // ILLEGAL
    DOT_LT: 1,
    // .<
    REST: 2,
    // ...
    LT: 3,
    // <
    GT: 4,
    // >
    LPAREN: 5,
    // (
    RPAREN: 6,
    // )
    LBRACE: 7,
    // {
    RBRACE: 8,
    // }
    LBRACK: 9,
    // [
    RBRACK: 10,
    // ]
    COMMA: 11,
    // ,
    COLON: 12,
    // :
    STAR: 13,
    // *
    PIPE: 14,
    // |
    QUESTION: 15,
    // ?
    BANG: 16,
    // !
    EQUAL: 17,
    // =
    NAME: 18,
    // name token
    STRING: 19,
    // string
    NUMBER: 20,
    // number
    EOF: 21
  };
  function o(D) {
    return "><(){}[],:*|?!=".indexOf(String.fromCharCode(D)) === -1 && !p.code.isWhiteSpace(D) && !p.code.isLineTerminator(D);
  }
  function v(D, s, h, F) {
    this._previous = D, this._index = s, this._token = h, this._value = F;
  }
  v.prototype.restore = function() {
    i = this._previous, t = this._index, n = this._token, E = this._value;
  }, v.save = function() {
    return new v(i, t, n, E);
  };
  function d(D, s) {
    return T && (D.range = [s[0] + _, s[1] + _]), D;
  }
  function l() {
    var D = r.charAt(t);
    return t += 1, D;
  }
  function c(D) {
    var s, h, F, A = 0;
    for (h = D === "u" ? 4 : 2, s = 0; s < h; ++s)
      if (t < a && p.code.isHexDigit(r.charCodeAt(t)))
        F = l(), A = A * 16 + "0123456789abcdef".indexOf(F.toLowerCase());
      else
        return "";
    return String.fromCharCode(A);
  }
  function I() {
    var D = "", s, h, F, A, y;
    for (s = r.charAt(t), ++t; t < a; )
      if (h = l(), h === s) {
        s = "";
        break;
      } else if (h === "\\")
        if (h = l(), p.code.isLineTerminator(h.charCodeAt(0)))
          h === "\r" && r.charCodeAt(t) === 10 && ++t;
        else
          switch (h) {
            case "n":
              D += `
`;
              break;
            case "r":
              D += "\r";
              break;
            case "t":
              D += "	";
              break;
            case "u":
            case "x":
              y = t, A = c(h), A ? D += A : (t = y, D += h);
              break;
            case "b":
              D += "\b";
              break;
            case "f":
              D += "\f";
              break;
            case "v":
              D += "\v";
              break;
            default:
              p.code.isOctalDigit(h.charCodeAt(0)) ? (F = "01234567".indexOf(h), t < a && p.code.isOctalDigit(r.charCodeAt(t)) && (F = F * 8 + "01234567".indexOf(l()), "0123".indexOf(h) >= 0 && t < a && p.code.isOctalDigit(r.charCodeAt(t)) && (F = F * 8 + "01234567".indexOf(l()))), D += String.fromCharCode(F)) : D += h;
              break;
          }
      else {
        if (p.code.isLineTerminator(h.charCodeAt(0)))
          break;
        D += h;
      }
    return s !== "" && B.throwError("unexpected quote"), E = D, e.STRING;
  }
  function L() {
    var D, s;
    if (D = "", s = r.charCodeAt(t), s !== 46) {
      if (D = l(), s = r.charCodeAt(t), D === "0") {
        if (s === 120 || s === 88) {
          for (D += l(); t < a && (s = r.charCodeAt(t), !!p.code.isHexDigit(s)); )
            D += l();
          return D.length <= 2 && B.throwError("unexpected token"), t < a && (s = r.charCodeAt(t), p.code.isIdentifierStartES5(s) && B.throwError("unexpected token")), E = parseInt(D, 16), e.NUMBER;
        }
        if (p.code.isOctalDigit(s)) {
          for (D += l(); t < a && (s = r.charCodeAt(t), !!p.code.isOctalDigit(s)); )
            D += l();
          return t < a && (s = r.charCodeAt(t), (p.code.isIdentifierStartES5(s) || p.code.isDecimalDigit(s)) && B.throwError("unexpected token")), E = parseInt(D, 8), e.NUMBER;
        }
        p.code.isDecimalDigit(s) && B.throwError("unexpected token");
      }
      for (; t < a && (s = r.charCodeAt(t), !!p.code.isDecimalDigit(s)); )
        D += l();
    }
    if (s === 46)
      for (D += l(); t < a && (s = r.charCodeAt(t), !!p.code.isDecimalDigit(s)); )
        D += l();
    if (s === 101 || s === 69)
      if (D += l(), s = r.charCodeAt(t), (s === 43 || s === 45) && (D += l()), s = r.charCodeAt(t), p.code.isDecimalDigit(s))
        for (D += l(); t < a && (s = r.charCodeAt(t), !!p.code.isDecimalDigit(s)); )
          D += l();
      else
        B.throwError("unexpected token");
    return t < a && (s = r.charCodeAt(t), p.code.isIdentifierStartES5(s) && B.throwError("unexpected token")), E = parseFloat(D), e.NUMBER;
  }
  function H() {
    var D, s;
    for (E = l(); t < a && o(r.charCodeAt(t)); ) {
      if (D = r.charCodeAt(t), D === 46) {
        if (t + 1 >= a)
          return e.ILLEGAL;
        if (s = r.charCodeAt(t + 1), s === 60)
          break;
      }
      E += l();
    }
    return e.NAME;
  }
  function M() {
    var D;
    for (i = t; t < a && p.code.isWhiteSpace(r.charCodeAt(t)); )
      l();
    if (t >= a)
      return n = e.EOF, n;
    switch (D = r.charCodeAt(t), D) {
      case 39:
      case 34:
        return n = I(), n;
      case 58:
        return l(), n = e.COLON, n;
      case 44:
        return l(), n = e.COMMA, n;
      case 40:
        return l(), n = e.LPAREN, n;
      case 41:
        return l(), n = e.RPAREN, n;
      case 91:
        return l(), n = e.LBRACK, n;
      case 93:
        return l(), n = e.RBRACK, n;
      case 123:
        return l(), n = e.LBRACE, n;
      case 125:
        return l(), n = e.RBRACE, n;
      case 46:
        if (t + 1 < a) {
          if (D = r.charCodeAt(t + 1), D === 60)
            return l(), l(), n = e.DOT_LT, n;
          if (D === 46 && t + 2 < a && r.charCodeAt(t + 2) === 46)
            return l(), l(), l(), n = e.REST, n;
          if (p.code.isDecimalDigit(D))
            return n = L(), n;
        }
        return n = e.ILLEGAL, n;
      case 60:
        return l(), n = e.LT, n;
      case 62:
        return l(), n = e.GT, n;
      case 42:
        return l(), n = e.STAR, n;
      case 124:
        return l(), n = e.PIPE, n;
      case 63:
        return l(), n = e.QUESTION, n;
      case 33:
        return l(), n = e.BANG, n;
      case 61:
        return l(), n = e.EQUAL, n;
      case 45:
        return n = L(), n;
      default:
        return p.code.isDecimalDigit(D) ? (n = L(), n) : (B.assert(o(D)), n = H(), n);
    }
  }
  function x(D, s) {
    B.assert(n === D, s || "consumed token not matched"), M();
  }
  function C(D, s) {
    n !== D && B.throwError(s || "unexpected token"), M();
  }
  function k() {
    var D, s = t - 1;
    if (x(e.LPAREN, "UnionType should start with ("), D = [], n !== e.RPAREN)
      for (; D.push(U()), n !== e.RPAREN; )
        C(e.PIPE);
    return x(e.RPAREN, "UnionType should end with )"), d({
      type: u.UnionType,
      elements: D
    }, [s, i]);
  }
  function f() {
    var D, s = t - 1, h;
    for (x(e.LBRACK, "ArrayType should start with ["), D = []; n !== e.RBRACK; ) {
      if (n === e.REST) {
        h = t - 3, x(e.REST), D.push(d({
          type: u.RestType,
          expression: U()
        }, [h, i]));
        break;
      } else
        D.push(U());
      n !== e.RBRACK && C(e.COMMA);
    }
    return C(e.RBRACK), d({
      type: u.ArrayType,
      elements: D
    }, [s, i]);
  }
  function G() {
    var D = E;
    if (n === e.NAME || n === e.STRING)
      return M(), D;
    if (n === e.NUMBER)
      return x(e.NUMBER), String(D);
    B.throwError("unexpected token");
  }
  function K() {
    var D, s = i;
    return D = G(), n === e.COLON ? (x(e.COLON), d({
      type: u.FieldType,
      key: D,
      value: U()
    }, [s, i])) : d({
      type: u.FieldType,
      key: D,
      value: null
    }, [s, i]);
  }
  function m() {
    var D, s = t - 1, h;
    if (x(e.LBRACE, "RecordType should start with {"), D = [], n === e.COMMA)
      x(e.COMMA);
    else
      for (; n !== e.RBRACE; )
        D.push(K()), n !== e.RBRACE && C(e.COMMA);
    return h = t, C(e.RBRACE), d({
      type: u.RecordType,
      fields: D
    }, [s, h]);
  }
  function eu() {
    var D = E, s = t - D.length;
    return C(e.NAME), n === e.COLON && (D === "module" || D === "external" || D === "event") && (x(e.COLON), D += ":" + E, C(e.NAME)), d({
      type: u.NameExpression,
      name: D
    }, [s, i]);
  }
  function Au() {
    var D = [];
    for (D.push(j()); n === e.COMMA; )
      x(e.COMMA), D.push(j());
    return D;
  }
  function V() {
    var D, s, h = t - E.length;
    return D = eu(), n === e.DOT_LT || n === e.LT ? (M(), s = Au(), C(e.GT), d({
      type: u.TypeApplication,
      expression: D,
      applications: s
    }, [h, i])) : D;
  }
  function Fu() {
    return x(e.COLON, "ResultType should start with :"), n === e.NAME && E === "void" ? (x(e.NAME), {
      type: u.VoidLiteral
    }) : U();
  }
  function w() {
    for (var D = [], s = !1, h, F = !1, A, y = t - 3, g; n !== e.RPAREN; )
      n === e.REST && (x(e.REST), F = !0), A = i, h = U(), h.type === u.NameExpression && n === e.COLON && (g = i - h.name.length, x(e.COLON), h = d({
        type: u.ParameterType,
        name: h.name,
        expression: U()
      }, [g, i])), n === e.EQUAL ? (x(e.EQUAL), h = d({
        type: u.OptionalType,
        expression: h
      }, [A, i]), s = !0) : s && B.throwError("unexpected token"), F && (h = d({
        type: u.RestType,
        expression: h
      }, [y, i])), D.push(h), n !== e.RPAREN && C(e.COMMA);
    return D;
  }
  function yu() {
    var D, s, h, F, A, y = t - E.length;
    return B.assert(n === e.NAME && E === "function", "FunctionType should start with 'function'"), x(e.NAME), C(e.LPAREN), D = !1, h = [], s = null, n !== e.RPAREN && (n === e.NAME && (E === "this" || E === "new") ? (D = E === "new", x(e.NAME), C(e.COLON), s = V(), n === e.COMMA && (x(e.COMMA), h = w())) : h = w()), C(e.RPAREN), F = null, n === e.COLON && (F = Fu()), A = d({
      type: u.FunctionType,
      params: h,
      result: F
    }, [y, i]), s && (A.this = s, D && (A.new = !0)), A;
  }
  function ru() {
    var D, s;
    switch (n) {
      case e.STAR:
        return x(e.STAR), d({
          type: u.AllLiteral
        }, [i - 1, i]);
      case e.LPAREN:
        return k();
      case e.LBRACK:
        return f();
      case e.LBRACE:
        return m();
      case e.NAME:
        if (s = t - E.length, E === "null")
          return x(e.NAME), d({
            type: u.NullLiteral
          }, [s, i]);
        if (E === "undefined")
          return x(e.NAME), d({
            type: u.UndefinedLiteral
          }, [s, i]);
        if (E === "true" || E === "false")
          return x(e.NAME), d({
            type: u.BooleanLiteralType,
            value: E === "true"
          }, [s, i]);
        if (D = v.save(), E === "function")
          try {
            return yu();
          } catch {
            D.restore();
          }
        return V();
      case e.STRING:
        return M(), d({
          type: u.StringLiteralType,
          value: E
        }, [i - E.length - 2, i]);
      case e.NUMBER:
        return M(), d({
          type: u.NumericLiteralType,
          value: E
        }, [i - String(E).length, i]);
      default:
        B.throwError("unexpected token");
    }
  }
  function U() {
    var D, s;
    return n === e.QUESTION ? (s = t - 1, x(e.QUESTION), n === e.COMMA || n === e.EQUAL || n === e.RBRACE || n === e.RPAREN || n === e.PIPE || n === e.EOF || n === e.RBRACK || n === e.GT ? d({
      type: u.NullableLiteral
    }, [s, i]) : d({
      type: u.NullableType,
      expression: ru(),
      prefix: !0
    }, [s, i])) : n === e.BANG ? (s = t - 1, x(e.BANG), d({
      type: u.NonNullableType,
      expression: ru(),
      prefix: !0
    }, [s, i])) : (s = i, D = ru(), n === e.BANG ? (x(e.BANG), d({
      type: u.NonNullableType,
      expression: D,
      prefix: !1
    }, [s, i])) : n === e.QUESTION ? (x(e.QUESTION), d({
      type: u.NullableType,
      expression: D,
      prefix: !1
    }, [s, i])) : n === e.LBRACK ? (x(e.LBRACK), C(e.RBRACK, "expected an array-style type declaration (" + E + "[])"), d({
      type: u.TypeApplication,
      expression: d({
        type: u.NameExpression,
        name: "Array"
      }, [s, i]),
      applications: [D]
    }, [s, i])) : D);
  }
  function j() {
    var D, s;
    if (D = U(), n !== e.PIPE)
      return D;
    for (s = [D], x(e.PIPE); s.push(U()), n === e.PIPE; )
      x(e.PIPE);
    return d({
      type: u.UnionType,
      elements: s
    }, [0, t]);
  }
  function J() {
    var D;
    return n === e.REST ? (x(e.REST), d({
      type: u.RestType,
      expression: j()
    }, [0, t])) : (D = j(), n === e.EQUAL ? (x(e.EQUAL), d({
      type: u.OptionalType,
      expression: D
    }, [0, t])) : D);
  }
  function ou(D, s) {
    var h;
    return r = D, a = r.length, t = 0, i = 0, T = s && s.range, _ = s && s.startIndex || 0, M(), h = j(), s && s.midstream ? {
      expression: h,
      index: i
    } : (n !== e.EOF && B.throwError("not reach to EOF"), h);
  }
  function hu(D, s) {
    var h;
    return r = D, a = r.length, t = 0, i = 0, T = s && s.range, _ = s && s.startIndex || 0, M(), h = J(), s && s.midstream ? {
      expression: h,
      index: i
    } : (n !== e.EOF && B.throwError("not reach to EOF"), h);
  }
  function N(D, s, h) {
    var F, A, y;
    switch (D.type) {
      case u.NullableLiteral:
        F = "?";
        break;
      case u.AllLiteral:
        F = "*";
        break;
      case u.NullLiteral:
        F = "null";
        break;
      case u.UndefinedLiteral:
        F = "undefined";
        break;
      case u.VoidLiteral:
        F = "void";
        break;
      case u.UnionType:
        for (h ? F = "" : F = "(", A = 0, y = D.elements.length; A < y; ++A)
          F += N(D.elements[A], s), A + 1 !== y && (F += s ? "|" : " | ");
        h || (F += ")");
        break;
      case u.ArrayType:
        for (F = "[", A = 0, y = D.elements.length; A < y; ++A)
          F += N(D.elements[A], s), A + 1 !== y && (F += s ? "," : ", ");
        F += "]";
        break;
      case u.RecordType:
        for (F = "{", A = 0, y = D.fields.length; A < y; ++A)
          F += N(D.fields[A], s), A + 1 !== y && (F += s ? "," : ", ");
        F += "}";
        break;
      case u.FieldType:
        D.value ? F = D.key + (s ? ":" : ": ") + N(D.value, s) : F = D.key;
        break;
      case u.FunctionType:
        for (F = s ? "function(" : "function (", D.this && (D.new ? F += s ? "new:" : "new: " : F += s ? "this:" : "this: ", F += N(D.this, s), D.params.length !== 0 && (F += s ? "," : ", ")), A = 0, y = D.params.length; A < y; ++A)
          F += N(D.params[A], s), A + 1 !== y && (F += s ? "," : ", ");
        F += ")", D.result && (F += (s ? ":" : ": ") + N(D.result, s));
        break;
      case u.ParameterType:
        F = D.name + (s ? ":" : ": ") + N(D.expression, s);
        break;
      case u.RestType:
        F = "...", D.expression && (F += N(D.expression, s));
        break;
      case u.NonNullableType:
        D.prefix ? F = "!" + N(D.expression, s) : F = N(D.expression, s) + "!";
        break;
      case u.OptionalType:
        F = N(D.expression, s) + "=";
        break;
      case u.NullableType:
        D.prefix ? F = "?" + N(D.expression, s) : F = N(D.expression, s) + "?";
        break;
      case u.NameExpression:
        F = D.name;
        break;
      case u.TypeApplication:
        for (F = N(D.expression, s) + ".<", A = 0, y = D.applications.length; A < y; ++A)
          F += N(D.applications[A], s), A + 1 !== y && (F += s ? "," : ", ");
        F += ">";
        break;
      case u.StringLiteralType:
        F = '"' + D.value + '"';
        break;
      case u.NumericLiteralType:
        F = String(D.value);
        break;
      case u.BooleanLiteralType:
        F = String(D.value);
        break;
      default:
        B.throwError("Unknown type " + D.type);
    }
    return F;
  }
  function P(D, s) {
    return s == null && (s = {}), N(D, s.compact, s.topLevel);
  }
  tu.parseType = ou, tu.parseParamType = hu, tu.stringify = P, tu.Syntax = u;
})();
(function(u) {
  (function() {
    var e, r, a, t, i;
    t = nu, e = tu, r = Q;
    function n(C, k, f) {
      return C.slice(k, f);
    }
    i = /* @__PURE__ */ function() {
      var C = Object.prototype.hasOwnProperty;
      return function(f, G) {
        return C.call(f, G);
      };
    }();
    function E(C) {
      var k = {}, f;
      for (f in C)
        C.hasOwnProperty(f) && (k[f] = C[f]);
      return k;
    }
    function p(C) {
      return C >= 97 && C <= 122 || C >= 65 && C <= 90 || C >= 48 && C <= 57;
    }
    function B(C) {
      return C === "param" || C === "argument" || C === "arg";
    }
    function _(C) {
      return C === "return" || C === "returns";
    }
    function T(C) {
      return C === "property" || C === "prop";
    }
    function o(C) {
      return B(C) || T(C) || C === "alias" || C === "this" || C === "mixes" || C === "requires";
    }
    function v(C) {
      return o(C) || C === "const" || C === "constant";
    }
    function d(C) {
      return T(C) || B(C);
    }
    function l(C) {
      return T(C) || B(C);
    }
    function c(C) {
      return B(C) || _(C) || C === "define" || C === "enum" || C === "implements" || C === "this" || C === "type" || C === "typedef" || T(C);
    }
    function I(C) {
      return c(C) || C === "throws" || C === "const" || C === "constant" || C === "namespace" || C === "member" || C === "var" || C === "module" || C === "constructor" || C === "class" || C === "extends" || C === "augments" || C === "public" || C === "private" || C === "protected";
    }
    var L = "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]", H = "(" + L + "*(?:\\*" + L + `?)?)(.+|[\r
\u2028\u2029])`;
    function M(C) {
      return C.replace(/^\/\*\*?/, "").replace(/\*\/$/, "").replace(new RegExp(H, "g"), "$2").replace(/\s*$/, "");
    }
    function x(C, k) {
      for (var f = C.replace(/^\/\*\*?/, ""), G = 0, K = new RegExp(H, "g"), m; m = K.exec(f); )
        if (G += m[1].length, m.index + m[0].length > k + G)
          return k + G + C.length - f.length;
      return C.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function(C) {
      var k, f, G, K, m, eu, Au, V, Fu;
      function w() {
        var F = m.charCodeAt(f);
        return f += 1, t.code.isLineTerminator(F) && !(F === 13 && m.charCodeAt(f) === 10) && (G += 1), String.fromCharCode(F);
      }
      function yu() {
        var F = "";
        for (w(); f < K && p(m.charCodeAt(f)); )
          F += w();
        return F;
      }
      function ru() {
        var F, A, y = f;
        for (A = !1; y < K; ) {
          if (F = m.charCodeAt(y), t.code.isLineTerminator(F) && !(F === 13 && m.charCodeAt(y + 1) === 10))
            A = !0;
          else if (A) {
            if (F === 64)
              break;
            t.code.isWhiteSpace(F) || (A = !1);
          }
          y += 1;
        }
        return y;
      }
      function U(F, A, y) {
        for (var g, O, b, R, W = !1; f < A; )
          if (g = m.charCodeAt(f), t.code.isWhiteSpace(g))
            w();
          else if (g === 123) {
            w();
            break;
          } else {
            W = !0;
            break;
          }
        if (W)
          return null;
        for (O = 1, b = ""; f < A; )
          if (g = m.charCodeAt(f), t.code.isLineTerminator(g))
            w();
          else {
            if (g === 125) {
              if (O -= 1, O === 0) {
                w();
                break;
              }
            } else g === 123 && (O += 1);
            b === "" && (R = f), b += w();
          }
        return O !== 0 ? r.throwError("Braces are not balanced") : l(F) ? e.parseParamType(b, { startIndex: N(R), range: y }) : e.parseType(b, { startIndex: N(R), range: y });
      }
      function j(F) {
        var A;
        if (!t.code.isIdentifierStartES5(m.charCodeAt(f)) && !m[f].match(/[0-9]/))
          return null;
        for (A = w(); f < F && t.code.isIdentifierPartES5(m.charCodeAt(f)); )
          A += w();
        return A;
      }
      function J(F) {
        for (; f < F && (t.code.isWhiteSpace(m.charCodeAt(f)) || t.code.isLineTerminator(m.charCodeAt(f))); )
          w();
      }
      function ou(F, A, y) {
        var g = "", O, b;
        if (J(F), f >= F)
          return null;
        if (m.charCodeAt(f) === 91)
          if (A)
            O = !0, g = w();
          else
            return null;
        if (g += j(F), y)
          for (m.charCodeAt(f) === 58 && (g === "module" || g === "external" || g === "event") && (g += w(), g += j(F)), m.charCodeAt(f) === 91 && m.charCodeAt(f + 1) === 93 && (g += w(), g += w()); m.charCodeAt(f) === 46 || m.charCodeAt(f) === 47 || m.charCodeAt(f) === 35 || m.charCodeAt(f) === 45 || m.charCodeAt(f) === 126; )
            g += w(), g += j(F);
        if (O) {
          if (J(F), m.charCodeAt(f) === 61) {
            g += w(), J(F);
            for (var R, W = 1; f < F; ) {
              if (R = m.charCodeAt(f), t.code.isWhiteSpace(R) && (b || (J(F), R = m.charCodeAt(f))), R === 39 && (b ? b === "'" && (b = "") : b = "'"), R === 34 && (b ? b === '"' && (b = "") : b = '"'), R === 91)
                W++;
              else if (R === 93 && --W === 0)
                break;
              g += w();
            }
          }
          if (J(F), f >= F || m.charCodeAt(f) !== 93)
            return null;
          g += w();
        }
        return g;
      }
      function hu() {
        for (; f < K && m.charCodeAt(f) !== 64; )
          w();
        return f >= K ? !1 : (r.assert(
          m.charCodeAt(f) === 64
          /* '@' */
        ), !0);
      }
      function N(F) {
        return m === eu ? F : x(eu, F);
      }
      function P(F, A) {
        this._options = F, this._title = A.toLowerCase(), this._tag = {
          title: A,
          description: null
        }, this._options.lineNumbers && (this._tag.lineNumber = G), this._first = f - A.length - 1, this._last = 0, this._extra = {};
      }
      P.prototype.addError = function(A) {
        var y = Array.prototype.slice.call(arguments, 1), g = A.replace(
          /%(\d)/g,
          function(O, b) {
            return r.assert(b < y.length, "Message reference must be in range"), y[b];
          }
        );
        return this._tag.errors || (this._tag.errors = []), Fu && r.throwError(g), this._tag.errors.push(g), Au;
      }, P.prototype.parseType = function() {
        if (c(this._title))
          try {
            if (this._tag.type = U(this._title, this._last, this._options.range), !this._tag.type && !B(this._title) && !_(this._title) && !this.addError("Missing or invalid tag type"))
              return !1;
          } catch (F) {
            if (this._tag.type = null, !this.addError(F.message))
              return !1;
          }
        else if (I(this._title))
          try {
            this._tag.type = U(this._title, this._last, this._options.range);
          } catch {
          }
        return !0;
      }, P.prototype._parseNamePath = function(F) {
        var A;
        return A = ou(this._last, V && l(this._title), !0), !A && !F && !this.addError("Missing or invalid tag name") ? !1 : (this._tag.name = A, !0);
      }, P.prototype.parseNamePath = function() {
        return this._parseNamePath(!1);
      }, P.prototype.parseNamePathOptional = function() {
        return this._parseNamePath(!0);
      }, P.prototype.parseName = function() {
        var F, A;
        if (v(this._title))
          if (this._tag.name = ou(this._last, V && l(this._title), d(this._title)), this._tag.name)
            A = this._tag.name, A.charAt(0) === "[" && A.charAt(A.length - 1) === "]" && (F = A.substring(1, A.length - 1).split("="), F.length > 1 && (this._tag.default = F.slice(1).join("=")), this._tag.name = F[0], this._tag.type && this._tag.type.type !== "OptionalType" && (this._tag.type = {
              type: "OptionalType",
              expression: this._tag.type
            }));
          else {
            if (!o(this._title))
              return !0;
            if (B(this._title) && this._tag.type && this._tag.type.name)
              this._extra.name = this._tag.type, this._tag.name = this._tag.type.name, this._tag.type = null;
            else if (!this.addError("Missing or invalid tag name"))
              return !1;
          }
        return !0;
      }, P.prototype.parseDescription = function() {
        var A = n(m, f, this._last).trim();
        return A && (/^-\s+/.test(A) && (A = A.substring(2)), this._tag.description = A), !0;
      }, P.prototype.parseCaption = function() {
        var A = n(m, f, this._last).trim(), y = "<caption>", g = "</caption>", O = A.indexOf(y), b = A.indexOf(g);
        return O >= 0 && b >= 0 ? (this._tag.caption = A.substring(
          O + y.length,
          b
        ).trim(), this._tag.description = A.substring(b + g.length).trim()) : this._tag.description = A, !0;
      }, P.prototype.parseKind = function() {
        var A, y;
        return y = {
          class: !0,
          constant: !0,
          event: !0,
          external: !0,
          file: !0,
          function: !0,
          member: !0,
          mixin: !0,
          module: !0,
          namespace: !0,
          typedef: !0
        }, A = n(m, f, this._last).trim(), this._tag.kind = A, !(!i(y, A) && !this.addError("Invalid kind name '%0'", A));
      }, P.prototype.parseAccess = function() {
        var A;
        return A = n(m, f, this._last).trim(), this._tag.access = A, !(A !== "private" && A !== "protected" && A !== "public" && !this.addError("Invalid access name '%0'", A));
      }, P.prototype.parseThis = function() {
        var A = n(m, f, this._last).trim();
        if (A && A.charAt(0) === "{") {
          var y = this.parseType();
          return y && this._tag.type.type === "NameExpression" || this._tag.type.type === "UnionType" ? (this._tag.name = this._tag.type.name, !0) : this.addError("Invalid name for this");
        } else
          return this.parseNamePath();
      }, P.prototype.parseVariation = function() {
        var A, y;
        return y = n(m, f, this._last).trim(), A = parseFloat(y, 10), this._tag.variation = A, !(isNaN(A) && !this.addError("Invalid variation '%0'", y));
      }, P.prototype.ensureEnd = function() {
        var F = n(m, f, this._last).trim();
        return !(F && !this.addError("Unknown content '%0'", F));
      }, P.prototype.epilogue = function() {
        var A;
        return A = this._tag.description, !(l(this._title) && !this._tag.type && A && A.charAt(0) === "[" && (this._tag.type = this._extra.name, this._tag.name || (this._tag.name = void 0), !V && !this.addError("Missing or invalid tag name")));
      }, k = {
        // http://usejsdoc.org/tags-access.html
        access: ["parseAccess"],
        // http://usejsdoc.org/tags-alias.html
        alias: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-augments.html
        augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-constructor.html
        constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-constructor.html
        class: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-extends.html
        extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-example.html
        example: ["parseCaption"],
        // http://usejsdoc.org/tags-deprecated.html
        deprecated: ["parseDescription"],
        // http://usejsdoc.org/tags-global.html
        global: ["ensureEnd"],
        // http://usejsdoc.org/tags-inner.html
        inner: ["ensureEnd"],
        // http://usejsdoc.org/tags-instance.html
        instance: ["ensureEnd"],
        // http://usejsdoc.org/tags-kind.html
        kind: ["parseKind"],
        // http://usejsdoc.org/tags-mixes.html
        mixes: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-mixin.html
        mixin: ["parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-member.html
        member: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-method.html
        method: ["parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-module.html
        module: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-method.html
        func: ["parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-method.html
        function: ["parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-member.html
        var: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-name.html
        name: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-namespace.html
        namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-private.html
        private: ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-protected.html
        protected: ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-public.html
        public: ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-readonly.html
        readonly: ["ensureEnd"],
        // http://usejsdoc.org/tags-requires.html
        requires: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-since.html
        since: ["parseDescription"],
        // http://usejsdoc.org/tags-static.html
        static: ["ensureEnd"],
        // http://usejsdoc.org/tags-summary.html
        summary: ["parseDescription"],
        // http://usejsdoc.org/tags-this.html
        this: ["parseThis", "ensureEnd"],
        // http://usejsdoc.org/tags-todo.html
        todo: ["parseDescription"],
        // http://usejsdoc.org/tags-typedef.html
        typedef: ["parseType", "parseNamePathOptional"],
        // http://usejsdoc.org/tags-variation.html
        variation: ["parseVariation"],
        // http://usejsdoc.org/tags-version.html
        version: ["parseDescription"]
      }, P.prototype.parse = function() {
        var A, y, g, O;
        if (!this._title && !this.addError("Missing or invalid title"))
          return null;
        for (this._last = ru(this._title), this._options.range && (this._tag.range = [this._first, m.slice(0, this._last).replace(/\s*$/, "").length].map(N)), i(k, this._title) ? g = k[this._title] : g = ["parseType", "parseName", "parseDescription", "epilogue"], A = 0, y = g.length; A < y; ++A)
          if (O = g[A], !this[O]())
            return null;
        return this._tag;
      };
      function D(F) {
        var A, y, g;
        if (!hu())
          return null;
        for (A = yu(), y = new P(F, A), g = y.parse(); f < y._last; )
          w();
        return g;
      }
      function s(F) {
        var A = "", y, g;
        for (g = !0; f < K && (y = m.charCodeAt(f), !(g && y === 64)); )
          t.code.isLineTerminator(y) ? g = !0 : g && !t.code.isWhiteSpace(y) && (g = !1), A += w();
        return F ? A : A.trim();
      }
      function h(F, A) {
        var y = [], g, O, b, R, W;
        if (A === void 0 && (A = {}), typeof A.unwrap == "boolean" && A.unwrap ? m = M(F) : m = F, eu = F, A.tags)
          if (Array.isArray(A.tags))
            for (b = {}, R = 0, W = A.tags.length; R < W; R++)
              typeof A.tags[R] == "string" ? b[A.tags[R]] = !0 : r.throwError('Invalid "tags" parameter: ' + A.tags);
          else
            r.throwError('Invalid "tags" parameter: ' + A.tags);
        for (K = m.length, f = 0, G = 0, Au = A.recoverable, V = A.sloppy, Fu = A.strict, O = s(A.preserveWhitespace); g = D(A), !!g; )
          (!b || b.hasOwnProperty(g.title)) && y.push(g);
        return {
          description: O,
          tags: y
        };
      }
      C.parse = h;
    })(a = {}), u.version = r.VERSION, u.parse = a.parse, u.parseType = e.parseType, u.parseParamType = e.parseParamType, u.unwrapComment = M, u.Syntax = E(e.Syntax), u.Error = r.DoctrineError, u.type = {
      Syntax: u.Syntax,
      parseType: e.parseType,
      parseParamType: e.parseParamType,
      stringify: e.stringify
    };
  })();
})(Te);
const hi = /* @__PURE__ */ De(Te), { combineParameters: di } = __STORYBOOK_MODULE_PREVIEW_API__;
var Ne = /^['"]|['"]$/g, gi = (u) => u.replace(Ne, ""), mi = (u) => Ne.test(u), Pe = (u) => {
  let e = gi(u);
  return mi(u) || Number.isNaN(Number(e)) ? e : Number(e);
}, vi = (u) => {
  switch (u.type) {
    case "function":
      return { name: "function" };
    case "object":
      let e = {};
      return u.signature.properties.forEach((r) => {
        e[r.key] = Du(r.value);
      }), { name: "object", value: e };
    default:
      throw new Error(`Unknown: ${u}`);
  }
}, Du = (u) => {
  let { name: e, raw: r } = u, a = {};
  switch (typeof r < "u" && (a.raw = r), u.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...a, name: e };
    case "Array":
      return { ...a, name: "array", value: u.elements.map(Du) };
    case "signature":
      return { ...a, ...vi(u) };
    case "union":
      let t;
      return u.elements.every((i) => i.name === "literal") ? t = { ...a, name: "enum", value: u.elements.map((i) => Pe(i.value)) } : t = { ...a, name: e, value: u.elements.map(Du) }, t;
    case "intersection":
      return { ...a, name: e, value: u.elements.map(Du) };
    default:
      return { ...a, name: "other", value: e };
  }
}, xi = (u) => u.name === "literal", Ti = (u) => u.value.replace(/['|"]/g, ""), _i = (u) => {
  switch (u.type) {
    case "function":
      return { name: "function" };
    case "object":
      let e = {};
      return u.signature.properties.forEach((r) => {
        e[r.key] = iu(r.value);
      }), { name: "object", value: e };
    default:
      throw new Error(`Unknown: ${u}`);
  }
}, iu = (u) => {
  let { name: e, raw: r } = u, a = {};
  switch (typeof r < "u" && (a.raw = r), u.name) {
    case "literal":
      return { ...a, name: "other", value: u.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...a, name: e };
    case "Array":
      return { ...a, name: "array", value: u.elements.map(iu) };
    case "signature":
      return { ...a, ..._i(u) };
    case "union":
      return u.elements.every(xi) ? { ...a, name: "enum", value: u.elements.map(Ti) } : { ...a, name: e, value: u.elements.map(iu) };
    case "intersection":
      return { ...a, name: e, value: u.elements.map(iu) };
    default:
      return { ...a, name: "other", value: e };
  }
}, bi = /^\(.*\) => /, au = (u) => {
  let { name: e, raw: r, computed: a, value: t } = u, i = {};
  switch (typeof r < "u" && (i.raw = r), e) {
    case "enum": {
      let E = a ? t : t.map((p) => Pe(p.value));
      return { ...i, name: e, value: E };
    }
    case "string":
    case "number":
    case "symbol":
      return { ...i, name: e };
    case "func":
      return { ...i, name: "function" };
    case "bool":
    case "boolean":
      return { ...i, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ...i, name: "array", value: t && au(t) };
    case "object":
      return { ...i, name: e };
    case "objectOf":
      return { ...i, name: e, value: au(t) };
    case "shape":
    case "exact":
      let n = ui(t, (E) => au(E));
      return { ...i, name: "object", value: n };
    case "union":
      return { ...i, name: "union", value: t.map((E) => au(E)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if ((e == null ? void 0 : e.indexOf("|")) > 0) try {
        let B = e.split("|").map((_) => JSON.parse(_));
        return { ...i, name: "enum", value: B };
      } catch {
      }
      let E = t ? `${e}(${t})` : e, p = bi.test(e) ? "function" : "other";
      return { ...i, name: p, value: E };
    }
  }
}, $u = (u) => {
  let { type: e, tsType: r, flowType: a } = u;
  return e != null ? au(e) : r != null ? Du(r) : a != null ? iu(a) : null;
}, Si = ((u) => (u.JAVASCRIPT = "JavaScript", u.FLOW = "Flow", u.TYPESCRIPT = "TypeScript", u.UNKNOWN = "Unknown", u))(Si || {}), wi = ["null", "undefined"];
function Iu(u) {
  return wi.some((e) => e === u);
}
var Ni = (u) => {
  if (!u) return "";
  if (typeof u == "string") return u;
  throw new Error(`Description: expected string, got: ${JSON.stringify(u)}`);
};
function Oe(u) {
  return !!u.__docgenInfo;
}
function Pi(u) {
  return u != null && Object.keys(u).length > 0;
}
function Oi(u, e) {
  return Oe(u) ? u.__docgenInfo[e] : null;
}
function $i(u) {
  return Oe(u) && Ni(u.__docgenInfo.description);
}
function Ii(u) {
  return u != null && u.includes("@");
}
function Ri(u, e) {
  let r;
  try {
    r = hi.parse(u, { tags: e, sloppy: !0 });
  } catch (a) {
    throw console.error(a), new Error("Cannot parse JSDoc tags.");
  }
  return r;
}
var Li = { tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"] }, Mi = (u, e = Li) => {
  if (!Ii(u)) return { includesJsDoc: !1, ignore: !1 };
  let r = Ri(u, e.tags), a = ki(r);
  return a.ignore ? { includesJsDoc: !0, ignore: !0 } : { includesJsDoc: !0, ignore: !1, description: r.description, extractedTags: a };
};
function ki(u) {
  let e = { params: null, deprecated: null, returns: null, ignore: !1 };
  for (let r = 0; r < u.tags.length; r += 1) {
    let a = u.tags[r];
    if (a.title === "ignore") {
      e.ignore = !0;
      break;
    } else switch (a.title) {
      case "param":
      case "arg":
      case "argument": {
        let t = Ui(a);
        t != null && (e.params == null && (e.params = []), e.params.push(t));
        break;
      }
      case "deprecated": {
        let t = Gi(a);
        t != null && (e.deprecated = t);
        break;
      }
      case "returns": {
        let t = Ki(a);
        t != null && (e.returns = t);
        break;
      }
    }
  }
  return e;
}
function Ui(u) {
  let e = u.name;
  return e != null && e !== "null-null" ? { name: u.name, type: u.type, description: u.description, getPrettyName: () => e.includes("null") ? e.replace("-null", "").replace(".null", "") : u.name, getTypeName: () => u.type != null ? Y(u.type) : null } : null;
}
function Gi(u) {
  return u.title != null ? u.description : null;
}
function Ki(u) {
  return u.type != null ? { type: u.type, description: u.description, getTypeName: () => Y(u.type) } : null;
}
function Y(u) {
  return u.type === "NameExpression" ? u.name : u.type === "RecordType" ? `({${u.fields.map((e) => {
    if (e.value != null) {
      let r = Y(e.value);
      return `${e.key}: ${r}`;
    }
    return e.key;
  }).join(", ")}})` : u.type === "UnionType" ? `(${u.elements.map(Y).join("|")})` : u.type === "ArrayType" ? "[]" : u.type === "TypeApplication" && u.expression != null && u.expression.name === "Array" ? `${Y(u.applications[0])}[]` : u.type === "NullableType" || u.type === "NonNullableType" || u.type === "OptionalType" ? Y(u.expression) : u.type === "AllLiteral" ? "any" : null;
}
function $e(u) {
  return u.length > 90;
}
function ji(u) {
  return u.length > 50;
}
function $(u, e) {
  return u === e ? { summary: u } : { summary: u, detail: e };
}
function Ie({ name: u, value: e, elements: r, raw: a }) {
  return e ?? (r != null ? r.map(Ie).join(" | ") : a ?? u);
}
function Wi({ name: u, raw: e, elements: r }) {
  return r != null ? $(r.map(Ie).join(" | ")) : e != null ? $(e.replace(/^\|\s*/, "")) : $(u);
}
function qi({ type: u, raw: e }) {
  return e != null ? $(e) : $(u);
}
function Hi({ type: u, raw: e }) {
  return e != null ? $e(e) ? $(u, e) : $(e) : $(u);
}
function Vi(u) {
  let { type: e } = u;
  return e === "object" ? Hi(u) : qi(u);
}
function Ji({ name: u, raw: e }) {
  return e != null ? $e(e) ? $(u, e) : $(e) : $(u);
}
function zi(u) {
  if (u == null) return null;
  switch (u.name) {
    case "union":
      return Wi(u);
    case "signature":
      return Vi(u);
    default:
      return Ji(u);
  }
}
function Qi(u, e) {
  if (u != null) {
    let { value: r } = u;
    if (!Iu(r)) return ji(r) ? $(e.name, r) : $(r);
  }
  return null;
}
var Yi = (u, e) => {
  let { flowType: r, description: a, required: t, defaultValue: i } = e;
  return { name: u, type: zi(r), required: t, description: a, defaultValue: Qi(i, r) };
};
function Xi({ tsType: u, required: e }) {
  if (u == null) return null;
  let r = u.name;
  return e || (r = r.replace(" | undefined", "")), $(["Array", "Record", "signature"].includes(u.name) ? u.raw : r);
}
function Zi({ defaultValue: u }) {
  if (u != null) {
    let { value: e } = u;
    if (!Iu(e)) return $(e);
  }
  return null;
}
var us = (u, e) => {
  let { description: r, required: a } = e;
  return { name: u, type: Xi(e), required: a, description: r, defaultValue: Zi(e) };
};
function es(u) {
  return u != null ? $(u.name) : null;
}
function rs(u) {
  let { computed: e, func: r } = u;
  return typeof e > "u" && typeof r > "u";
}
function ts(u) {
  return u ? u.name === "string" ? !0 : u.name === "enum" ? Array.isArray(u.value) && u.value.every(({ value: e }) => typeof e == "string" && e[0] === '"' && e[e.length - 1] === '"') : !1 : !1;
}
function as(u, e) {
  if (u != null) {
    let { value: r } = u;
    if (!Iu(r)) return rs(u) && ts(e) ? $(JSON.stringify(r)) : $(r);
  }
  return null;
}
function Re(u, e, r) {
  let { description: a, required: t, defaultValue: i } = r;
  return { name: u, type: es(e), required: t, description: a, defaultValue: as(i, e) };
}
function Bu(u, e) {
  var r;
  if (e.includesJsDoc) {
    let { description: a, extractedTags: t } = e;
    a != null && (u.description = e.description);
    let i = { ...t, params: (r = t == null ? void 0 : t.params) == null ? void 0 : r.map((n) => ({ name: n.getPrettyName(), description: n.description })) };
    Object.values(i).filter(Boolean).length > 0 && (u.jsDocTags = i);
  }
  return u;
}
var ns = (u, e, r) => {
  let a = Re(u, e.type, e);
  return a.sbType = $u(e), Bu(a, r);
}, Ds = (u, e, r) => {
  let a = us(u, e);
  return a.sbType = $u(e), Bu(a, r);
}, is = (u, e, r) => {
  let a = Yi(u, e);
  return a.sbType = $u(e), Bu(a, r);
}, ss = (u, e, r) => {
  let a = Re(u, { name: "unknown" }, e);
  return Bu(a, r);
}, Le = (u) => {
  switch (u) {
    case "JavaScript":
      return ns;
    case "TypeScript":
      return Ds;
    case "Flow":
      return is;
    default:
      return ss;
  }
}, Me = (u) => u.type != null ? "JavaScript" : u.flowType != null ? "Flow" : u.tsType != null ? "TypeScript" : "Unknown", As = (u) => {
  let e = Me(u[0]), r = Le(e);
  return u.map((a) => {
    var i;
    let t = a;
    return (i = a.type) != null && i.elements && (t = { ...a, type: { ...a.type, value: a.type.elements } }), ke(t.name, t, e, r);
  });
}, Fs = (u) => {
  let e = Object.keys(u), r = Me(u[e[0]]), a = Le(r);
  return e.map((t) => {
    let i = u[t];
    return i != null ? ke(t, i, r, a) : null;
  }).filter(Boolean);
}, fs = (u, e) => {
  let r = Oi(u, e);
  return Pi(r) ? Array.isArray(r) ? As(r) : Fs(r) : [];
};
function ke(u, e, r, a) {
  let t = Mi(e.description);
  return t.includesJsDoc && t.ignore ? null : { propDef: a(u, e, t), jsDocTags: t.extractedTags, docgenInfo: e, typeSystem: r };
}
function Bs(u) {
  return u != null && $i(u);
}
var ys = (u) => {
  let { component: e, argTypes: r, parameters: { docs: a = {} } } = u, { extractArgTypes: t } = a, i = t && e ? t(e) : {};
  return i ? di(i, r) : r;
}, os = "storybook/docs", hs = `${os}/snippet-rendered`, Cs = ((u) => (u.AUTO = "auto", u.CODE = "code", u.DYNAMIC = "dynamic", u))(Cs || {});
export {
  Ur as A,
  mr as B,
  _r as C,
  Pu as D,
  Rr as E,
  Na as F,
  Bt as G,
  ft as H,
  Fe as I,
  le as J,
  ta as K,
  Ni as L,
  hs as S,
  Si as T,
  ps as _,
  ys as a,
  Cs as b,
  $ as c,
  fs as d,
  Bs as e,
  ji as f,
  Oi as g,
  Oe as h,
  q as i,
  $e as j,
  LD as k,
  ve as l,
  ce as m,
  fu as n,
  xe as o,
  i0 as p,
  g0 as q,
  $t as r,
  p0 as s,
  Nt as t,
  nu as u,
  Jt as v,
  C0 as w,
  Ve as x,
  PD as y,
  ha as z
};
