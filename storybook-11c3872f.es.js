import { c as Cr } from "./storybook-92157f1b.es.js";
var rr = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var r = {}, t = Symbol("test"), e = Object(t);
  if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(e) !== "[object Symbol]")
    return !1;
  var n = 42;
  r[t] = n;
  for (t in r)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(r);
  if (i.length !== 1 || i[0] !== t || !Object.prototype.propertyIsEnumerable.call(r, t))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var f = Object.getOwnPropertyDescriptor(r, t);
    if (f.value !== n || f.enumerable !== !0)
      return !1;
  }
  return !0;
}, Nr = rr, kr = function() {
  return Nr() && !!Symbol.toStringTag;
}, nr = typeof Symbol < "u" && Symbol, Gr = rr, Mr = function() {
  return typeof nr != "function" || typeof Symbol != "function" || typeof nr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Gr();
}, _r = "Function.prototype.bind called on incompatible ", G = Array.prototype.slice, Wr = Object.prototype.toString, Lr = "[object Function]", qr = function(r) {
  var t = this;
  if (typeof t != "function" || Wr.call(t) !== Lr)
    throw new TypeError(_r + t);
  for (var e = G.call(arguments, 1), n, i = function() {
    if (this instanceof n) {
      var c = t.apply(
        this,
        e.concat(G.call(arguments))
      );
      return Object(c) === c ? c : this;
    } else
      return t.apply(
        r,
        e.concat(G.call(arguments))
      );
  }, f = Math.max(0, t.length - e.length), y = [], u = 0; u < f; u++)
    y.push("$" + u);
  if (n = Function("binder", "return function (" + y.join(",") + "){ return binder.apply(this,arguments); }")(i), t.prototype) {
    var v = function() {
    };
    v.prototype = t.prototype, n.prototype = new v(), v.prototype = null;
  }
  return n;
}, Hr = qr, tr = Function.prototype.bind || Hr, Jr = tr, Vr = Jr.call(Function.call, Object.prototype.hasOwnProperty), p, j = SyntaxError, hr = Function, O = TypeError, M = function(o) {
  try {
    return hr('"use strict"; return (' + o + ").constructor;")();
  } catch {
  }
}, d = Object.getOwnPropertyDescriptor;
if (d)
  try {
    d({}, "");
  } catch {
    d = null;
  }
var _ = function() {
  throw new O();
}, zr = d ? function() {
  try {
    return arguments.callee, _;
  } catch {
    try {
      return d(arguments, "callee").get;
    } catch {
      return _;
    }
  }
}() : _, A = Mr(), b = Object.getPrototypeOf || function(o) {
  return o.__proto__;
}, S = {}, Kr = typeof Uint8Array > "u" ? p : b(Uint8Array), m = {
  "%AggregateError%": typeof AggregateError > "u" ? p : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? p : ArrayBuffer,
  "%ArrayIteratorPrototype%": A ? b([][Symbol.iterator]()) : p,
  "%AsyncFromSyncIteratorPrototype%": p,
  "%AsyncFunction%": S,
  "%AsyncGenerator%": S,
  "%AsyncGeneratorFunction%": S,
  "%AsyncIteratorPrototype%": S,
  "%Atomics%": typeof Atomics > "u" ? p : Atomics,
  "%BigInt%": typeof BigInt > "u" ? p : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? p : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? p : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? p : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? p : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? p : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? p : FinalizationRegistry,
  "%Function%": hr,
  "%GeneratorFunction%": S,
  "%Int8Array%": typeof Int8Array > "u" ? p : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? p : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? p : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": A ? b(b([][Symbol.iterator]())) : p,
  "%JSON%": typeof JSON == "object" ? JSON : p,
  "%Map%": typeof Map > "u" ? p : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !A ? p : b((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? p : Promise,
  "%Proxy%": typeof Proxy > "u" ? p : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? p : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? p : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !A ? p : b((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? p : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": A ? b(""[Symbol.iterator]()) : p,
  "%Symbol%": A ? Symbol : p,
  "%SyntaxError%": j,
  "%ThrowTypeError%": zr,
  "%TypedArray%": Kr,
  "%TypeError%": O,
  "%Uint8Array%": typeof Uint8Array > "u" ? p : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? p : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? p : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? p : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? p : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? p : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? p : WeakSet
};
try {
  null.error;
} catch (o) {
  var Yr = b(b(o));
  m["%Error.prototype%"] = Yr;
}
var Xr = function o(r) {
  var t;
  if (r === "%AsyncFunction%")
    t = M("async function () {}");
  else if (r === "%GeneratorFunction%")
    t = M("function* () {}");
  else if (r === "%AsyncGeneratorFunction%")
    t = M("async function* () {}");
  else if (r === "%AsyncGenerator%") {
    var e = o("%AsyncGeneratorFunction%");
    e && (t = e.prototype);
  } else if (r === "%AsyncIteratorPrototype%") {
    var n = o("%AsyncGenerator%");
    n && (t = b(n.prototype));
  }
  return m[r] = t, t;
}, or = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, I = tr, T = Vr, Qr = I.call(Function.call, Array.prototype.concat), Zr = I.call(Function.apply, Array.prototype.splice), ar = I.call(Function.call, String.prototype.replace), U = I.call(Function.call, String.prototype.slice), rt = I.call(Function.call, RegExp.prototype.exec), tt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, et = /\\(\\)?/g, nt = function(r) {
  var t = U(r, 0, 1), e = U(r, -1);
  if (t === "%" && e !== "%")
    throw new j("invalid intrinsic syntax, expected closing `%`");
  if (e === "%" && t !== "%")
    throw new j("invalid intrinsic syntax, expected opening `%`");
  var n = [];
  return ar(r, tt, function(i, f, y, u) {
    n[n.length] = y ? ar(u, et, "$1") : f || i;
  }), n;
}, ot = function(r, t) {
  var e = r, n;
  if (T(or, e) && (n = or[e], e = "%" + n[0] + "%"), T(m, e)) {
    var i = m[e];
    if (i === S && (i = Xr(e)), typeof i > "u" && !t)
      throw new O("intrinsic " + r + " exists, but is not available. Please file an issue!");
    return {
      alias: n,
      name: e,
      value: i
    };
  }
  throw new j("intrinsic " + r + " does not exist!");
}, x = function(r, t) {
  if (typeof r != "string" || r.length === 0)
    throw new O("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new O('"allowMissing" argument must be a boolean');
  if (rt(/^%?[^%]*%?$/, r) === null)
    throw new j("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var e = nt(r), n = e.length > 0 ? e[0] : "", i = ot("%" + n + "%", t), f = i.name, y = i.value, u = !1, v = i.alias;
  v && (n = v[0], Zr(e, Qr([0, 1], v)));
  for (var c = 1, s = !0; c < e.length; c += 1) {
    var l = e[c], a = U(l, 0, 1), g = U(l, -1);
    if ((a === '"' || a === "'" || a === "`" || g === '"' || g === "'" || g === "`") && a !== g)
      throw new j("property names with quotes must have matching quotes");
    if ((l === "constructor" || !s) && (u = !0), n += "." + l, f = "%" + n + "%", T(m, f))
      y = m[f];
    else if (y != null) {
      if (!(l in y)) {
        if (!t)
          throw new O("base intrinsic for " + r + " exists, but the property is not available.");
        return;
      }
      if (d && c + 1 >= e.length) {
        var h = d(y, l);
        s = !!h, s && "get" in h && !("originalValue" in h.get) ? y = h.get : y = y[l];
      } else
        s = T(y, l), y = y[l];
      s && !u && (m[f] = y);
    }
  }
  return y;
}, dr = { exports: {} };
(function(o) {
  var r = tr, t = x, e = t("%Function.prototype.apply%"), n = t("%Function.prototype.call%"), i = t("%Reflect.apply%", !0) || r.call(n, e), f = t("%Object.getOwnPropertyDescriptor%", !0), y = t("%Object.defineProperty%", !0), u = t("%Math.max%");
  if (y)
    try {
      y({}, "a", { value: 1 });
    } catch {
      y = null;
    }
  o.exports = function(s) {
    var l = i(r, n, arguments);
    if (f && y) {
      var a = f(l, "length");
      a.configurable && y(
        l,
        "length",
        { value: 1 + u(0, s.length - (arguments.length - 1)) }
      );
    }
    return l;
  };
  var v = function() {
    return i(r, e, arguments);
  };
  y ? y(o.exports, "apply", { value: v }) : o.exports.apply = v;
})(dr);
var mr = dr.exports, Ar = x, Sr = mr, at = Sr(Ar("String.prototype.indexOf")), Pr = function(r, t) {
  var e = Ar(r, !!t);
  return typeof e == "function" && at(r, ".prototype.") > -1 ? Sr(e) : e;
}, it = kr(), yt = Pr, Y = yt("Object.prototype.toString"), D = function(r) {
  return it && r && typeof r == "object" && Symbol.toStringTag in r ? !1 : Y(r) === "[object Arguments]";
}, Or = function(r) {
  return D(r) ? !0 : r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && Y(r) !== "[object Array]" && Y(r.callee) === "[object Function]";
}, lt = function() {
  return D(arguments);
}();
D.isLegacyArguments = Or;
var _t = lt ? D : Or, jr = Function.prototype.toString, P = typeof Reflect == "object" && Reflect !== null && Reflect.apply, X, $;
if (typeof P == "function" && typeof Object.defineProperty == "function")
  try {
    X = Object.defineProperty({}, "length", {
      get: function() {
        throw $;
      }
    }), $ = {}, P(function() {
      throw 42;
    }, null, X);
  } catch (o) {
    o !== $ && (P = null);
  }
else
  P = null;
var pt = /^\s*class\b/, Q = function(r) {
  try {
    var t = jr.call(r);
    return pt.test(t);
  } catch {
    return !1;
  }
}, W = function(r) {
  try {
    return Q(r) ? !1 : (jr.call(r), !0);
  } catch {
    return !1;
  }
}, F = Object.prototype.toString, ct = "[object Object]", ft = "[object Function]", st = "[object GeneratorFunction]", ut = "[object HTMLAllCollection]", vt = "[object HTML document.all class]", gt = "[object HTMLCollection]", bt = typeof Symbol == "function" && !!Symbol.toStringTag, ht = !(0 in [,]), Z = function() {
  return !1;
};
if (typeof document == "object") {
  var dt = document.all;
  F.call(dt) === F.call(document.all) && (Z = function(r) {
    if ((ht || !r) && (typeof r > "u" || typeof r == "object"))
      try {
        var t = F.call(r);
        return (t === ut || t === vt || t === gt || t === ct) && r("") == null;
      } catch {
      }
    return !1;
  });
}
var mt = P ? function(r) {
  if (Z(r))
    return !0;
  if (!r || typeof r != "function" && typeof r != "object")
    return !1;
  try {
    P(r, null, X);
  } catch (t) {
    if (t !== $)
      return !1;
  }
  return !Q(r) && W(r);
} : function(r) {
  if (Z(r))
    return !0;
  if (!r || typeof r != "function" && typeof r != "object")
    return !1;
  if (bt)
    return W(r);
  if (Q(r))
    return !1;
  var t = F.call(r);
  return t !== ft && t !== st && !/^\[object HTML/.test(t) ? !1 : W(r);
}, At = mt, St = Object.prototype.toString, Er = Object.prototype.hasOwnProperty, Pt = function(r, t, e) {
  for (var n = 0, i = r.length; n < i; n++)
    Er.call(r, n) && (e == null ? t(r[n], n, r) : t.call(e, r[n], n, r));
}, Ot = function(r, t, e) {
  for (var n = 0, i = r.length; n < i; n++)
    e == null ? t(r.charAt(n), n, r) : t.call(e, r.charAt(n), n, r);
}, jt = function(r, t, e) {
  for (var n in r)
    Er.call(r, n) && (e == null ? t(r[n], n, r) : t.call(e, r[n], n, r));
}, Et = function(r, t, e) {
  if (!At(t))
    throw new TypeError("iterator must be a function");
  var n;
  arguments.length >= 3 && (n = e), St.call(r) === "[object Array]" ? Pt(r, t, n) : typeof r == "string" ? Ot(r, t, n) : jt(r, t, n);
}, Wt = Et, L = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
], wt = typeof globalThis > "u" ? Cr : globalThis, Lt = function() {
  for (var r = [], t = 0; t < L.length; t++)
    typeof wt[L[t]] == "function" && (r[r.length] = L[t]);
  return r;
}, It = x, R = It("%Object.getOwnPropertyDescriptor%", !0);
if (R)
  try {
    R([], "length");
  } catch {
    R = null;
  }
var qt = R, ir = Object.prototype.toString, wr = function(r) {
  var t = ir.call(r), e = t === "[object Arguments]";
  return e || (e = t !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && ir.call(r.callee) === "[object Function]"), e;
}, q, yr;
function $t() {
  if (yr)
    return q;
  yr = 1;
  var o;
  if (!Object.keys) {
    var r = Object.prototype.hasOwnProperty, t = Object.prototype.toString, e = wr, n = Object.prototype.propertyIsEnumerable, i = !n.call({ toString: null }, "toString"), f = n.call(function() {
    }, "prototype"), y = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], u = function(l) {
      var a = l.constructor;
      return a && a.prototype === l;
    }, v = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, c = function() {
      if (typeof window > "u")
        return !1;
      for (var l in window)
        try {
          if (!v["$" + l] && r.call(window, l) && window[l] !== null && typeof window[l] == "object")
            try {
              u(window[l]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), s = function(l) {
      if (typeof window > "u" || !c)
        return u(l);
      try {
        return u(l);
      } catch {
        return !1;
      }
    };
    o = function(a) {
      var g = a !== null && typeof a == "object", h = t.call(a) === "[object Function]", er = e(a), Ur = g && t.call(a) === "[object String]", E = [];
      if (!g && !h && !er)
        throw new TypeError("Object.keys called on a non-object");
      var xr = f && h;
      if (Ur && a.length > 0 && !r.call(a, 0))
        for (var C = 0; C < a.length; ++C)
          E.push(String(C));
      if (er && a.length > 0)
        for (var N = 0; N < a.length; ++N)
          E.push(String(N));
      else
        for (var k in a)
          !(xr && k === "prototype") && r.call(a, k) && E.push(String(k));
      if (i)
        for (var Dr = s(a), w = 0; w < y.length; ++w)
          !(Dr && y[w] === "constructor") && r.call(a, y[w]) && E.push(y[w]);
      return E;
    };
  }
  return q = o, q;
}
var Ft = Array.prototype.slice, Rt = wr, lr = Object.keys, B = lr ? function(r) {
  return lr(r);
} : $t(), pr = Object.keys;
B.shim = function() {
  if (Object.keys) {
    var r = function() {
      var t = Object.keys(arguments);
      return t && t.length === arguments.length;
    }(1, 2);
    r || (Object.keys = function(e) {
      return Rt(e) ? pr(Ft.call(e)) : pr(e);
    });
  } else
    Object.keys = B;
  return Object.keys || B;
};
var Ir = B, Bt = Ir, $r = rr(), Fr = Pr, cr = Object, Tt = Fr("Array.prototype.push"), fr = Fr("Object.prototype.propertyIsEnumerable"), Ut = $r ? Object.getOwnPropertySymbols : null, xt = function(r, t) {
  if (r == null)
    throw new TypeError("target must be an object");
  var e = cr(r);
  if (arguments.length === 1)
    return e;
  for (var n = 1; n < arguments.length; ++n) {
    var i = cr(arguments[n]), f = Bt(i), y = $r && (Object.getOwnPropertySymbols || Ut);
    if (y)
      for (var u = y(i), v = 0; v < u.length; ++v) {
        var c = u[v];
        fr(i, c) && Tt(f, c);
      }
    for (var s = 0; s < f.length; ++s) {
      var l = f[s];
      if (fr(i, l)) {
        var a = i[l];
        e[l] = a;
      }
    }
  }
  return e;
}, H = xt, Dt = function() {
  if (!Object.assign)
    return !1;
  for (var o = "abcdefghijklmnopqrst", r = o.split(""), t = {}, e = 0; e < r.length; ++e)
    t[r[e]] = r[e];
  var n = Object.assign({}, t), i = "";
  for (var f in n)
    i += f;
  return o !== i;
}, Ct = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var o = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(o, "xy");
  } catch {
    return o[1] === "y";
  }
  return !1;
}, Ht = function() {
  return !Object.assign || Dt() || Ct() ? H : Object.assign;
}, sr = function(o) {
  return o !== o;
}, Rr = function(r, t) {
  return r === 0 && t === 0 ? 1 / r === 1 / t : !!(r === t || sr(r) && sr(t));
}, Nt = Rr, Br = function() {
  return typeof Object.is == "function" ? Object.is : Nt;
}, J, ur;
function kt() {
  if (ur)
    return J;
  ur = 1;
  var o = x, r = o("%Object.defineProperty%", !0), t = function() {
    if (r)
      try {
        return r({}, "a", { value: 1 }), !0;
      } catch {
        return !1;
      }
    return !1;
  };
  return t.hasArrayLengthDefineBug = function() {
    if (!t())
      return null;
    try {
      return r([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, J = t, J;
}
var V, vr;
function Tr() {
  if (vr)
    return V;
  vr = 1;
  var o = Ir, r = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", t = Object.prototype.toString, e = Array.prototype.concat, n = Object.defineProperty, i = function(c) {
    return typeof c == "function" && t.call(c) === "[object Function]";
  }, f = kt()(), y = n && f, u = function(c, s, l, a) {
    if (s in c) {
      if (a === !0) {
        if (c[s] === l)
          return;
      } else if (!i(a) || !a())
        return;
    }
    y ? n(c, s, {
      configurable: !0,
      enumerable: !1,
      value: l,
      writable: !0
    }) : c[s] = l;
  }, v = function(c, s) {
    var l = arguments.length > 2 ? arguments[2] : {}, a = o(s);
    r && (a = e.call(a, Object.getOwnPropertySymbols(s)));
    for (var g = 0; g < a.length; g += 1)
      u(c, a[g], s[a[g]], l[a[g]]);
  };
  return v.supportsDescriptors = !!y, V = v, V;
}
var z, gr;
function Gt() {
  if (gr)
    return z;
  gr = 1;
  var o = Br, r = Tr();
  return z = function() {
    var e = o();
    return r(Object, { is: e }, {
      is: function() {
        return Object.is !== e;
      }
    }), e;
  }, z;
}
var K, br;
function Jt() {
  if (br)
    return K;
  br = 1;
  var o = Tr(), r = mr, t = Rr, e = Br, n = Gt(), i = r(e(), Object);
  return o(i, {
    getPolyfill: e,
    implementation: t,
    shim: n
  }), K = i, K;
}
export {
  Lt as a,
  mr as b,
  Pr as c,
  Jt as d,
  Br as e,
  Wt as f,
  qt as g,
  xt as h,
  _t as i,
  x as j,
  Vr as k,
  Mr as l,
  rr as m,
  Ir as o,
  Ht as p,
  Tr as r,
  kr as s
};
