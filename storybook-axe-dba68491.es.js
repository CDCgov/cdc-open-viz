import { g as AF, c as FF } from "./storybook-_commonjsHelpers-c5d32002.es.js";
var yu = { exports: {} };
/*! axe v4.8.4
 * Copyright (c) 2015 - 2024 Deque Systems, Inc.
 *
 * Your use of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This entire copyright notice must appear in every copy of this file you
 * distribute or in any file that contains substantial portions of this source
 * code.
 */
yu.exports;
(function(Yn) {
  (function wu(_) {
    var St = _, M = _.document, y = y || {};
    y.version = "4.8.4", k(Yn) === "object" && Yn.exports && typeof wu.toString == "function" && (y.source = "(" + wu.toString() + ')(typeof window === "object" ? window : this);', Yn.exports = y), typeof _.getComputedStyle == "function" && (_.axe = y);
    function jr(C) {
      this.name = "SupportError", this.cause = C.cause, this.message = "`".concat(C.cause, "` - feature unsupported in your environment."), C.ruleId && (this.ruleId = C.ruleId, this.message += " Skipping ".concat(this.ruleId, " rule.")), this.stack = new Error().stack;
    }
    jr.prototype = Object.create(Error.prototype), jr.prototype.constructor = jr;
    var zf = ["node"], Vf = ["relatedNodes"], Hf = ["node"], $f = ["variant"], Uf = ["matches"], Gf = ["chromium"], Wf = ["noImplicit"], Yf = ["noPresentational"], Xf = ["precision", "format", "inGamut"], Kf = ["space"], Zf = ["algorithm"], Jf = ["method"], Qf = ["maxDeltaE", "deltaEMethod", "steps", "maxSteps"], ep = ["node"], tp = ["environmentData"], rp = ["environmentData"], ap = ["environmentData"], np = ["environmentData"], ip = ["environmentData"];
    function op(C) {
      return ku(C) || Tu(C) || Aa(C) || Ru();
    }
    function up(C, T, N) {
      return T = Ou(T), T in C ? Object.defineProperty(C, T, {
        value: N,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : C[T] = N, C;
    }
    function xa(C, T, N) {
      return _u() ? xa = Reflect.construct.bind() : xa = function(pe, ge, Je) {
        var ct = [null];
        ct.push.apply(ct, ge);
        var Qe = Function.bind.apply(pe, ct), et = new Qe();
        return Je && Ea(et, Je.prototype), et;
      }, xa.apply(null, arguments);
    }
    function Xn(C, T) {
      if (typeof T != "function" && T !== null)
        throw new TypeError("Super expression must either be null or a function");
      C.prototype = Object.create(T && T.prototype, {
        constructor: {
          value: C,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(C, "prototype", {
        writable: !1
      }), T && Ea(C, T);
    }
    function Ea(C, T) {
      return Ea = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(K, pe) {
        return K.__proto__ = pe, K;
      }, Ea(C, T);
    }
    function Kn(C) {
      var T = _u();
      return function() {
        var K = Ca(C), pe;
        if (T) {
          var ge = Ca(this).constructor;
          pe = Reflect.construct(K, arguments, ge);
        } else
          pe = K.apply(this, arguments);
        return lp(this, pe);
      };
    }
    function lp(C, T) {
      if (T && (k(T) === "object" || typeof T == "function"))
        return T;
      if (T !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Du(C);
    }
    function Du(C) {
      if (C === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return C;
    }
    function _u() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function Ca(C) {
      return Ca = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(N) {
        return N.__proto__ || Object.getPrototypeOf(N);
      }, Ca(C);
    }
    function xu(C, T, N) {
      Cu(C, T), T.set(C, N);
    }
    function Eu(C, T) {
      Cu(C, T), T.add(C);
    }
    function Cu(C, T) {
      if (T.has(C))
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
    function zr(C, T) {
      var N = Fu(C, T, "get");
      return sp(C, N);
    }
    function sp(C, T) {
      return T.get ? T.get.call(C) : T.value;
    }
    function Zn(C, T, N) {
      if (!T.has(C))
        throw new TypeError("attempted to get private field on non-instance");
      return N;
    }
    function Au(C, T, N) {
      var K = Fu(C, T, "set");
      return cp(C, K, N), N;
    }
    function Fu(C, T, N) {
      if (!T.has(C))
        throw new TypeError("attempted to " + N + " private field on non-instance");
      return T.get(C);
    }
    function cp(C, T, N) {
      if (T.set)
        T.set.call(C, N);
      else {
        if (!T.writable)
          throw new TypeError("attempted to set read only private field");
        T.value = N;
      }
    }
    function Pe(C, T) {
      if (C == null)
        return {};
      var N = dp(C, T), K, pe;
      if (Object.getOwnPropertySymbols) {
        var ge = Object.getOwnPropertySymbols(C);
        for (pe = 0; pe < ge.length; pe++)
          K = ge[pe], !(T.indexOf(K) >= 0) && Object.prototype.propertyIsEnumerable.call(C, K) && (N[K] = C[K]);
      }
      return N;
    }
    function dp(C, T) {
      if (C == null)
        return {};
      var N = {}, K = Object.keys(C), pe, ge;
      for (ge = 0; ge < K.length; ge++)
        pe = K[ge], !(T.indexOf(pe) >= 0) && (N[pe] = C[pe]);
      return N;
    }
    function re(C) {
      return pp(C) || Tu(C) || Aa(C) || fp();
    }
    function fp() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function Tu(C) {
      if (typeof Symbol < "u" && C[Symbol.iterator] != null || C["@@iterator"] != null)
        return Array.from(C);
    }
    function pp(C) {
      if (Array.isArray(C))
        return Jn(C);
    }
    function fe() {
      return fe = Object.assign ? Object.assign.bind() : function(C) {
        for (var T = 1; T < arguments.length; T++) {
          var N = arguments[T];
          for (var K in N)
            Object.prototype.hasOwnProperty.call(N, K) && (C[K] = N[K]);
        }
        return C;
      }, fe.apply(this, arguments);
    }
    function V(C, T) {
      return ku(C) || mp(C, T) || Aa(C, T) || Ru();
    }
    function Ru() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function mp(C, T) {
      var N = C == null ? null : typeof Symbol < "u" && C[Symbol.iterator] || C["@@iterator"];
      if (N != null) {
        var K, pe, ge, Je, ct = [], Qe = !0, et = !1;
        try {
          if (ge = (N = N.call(C)).next, T === 0) {
            if (Object(N) !== N)
              return;
            Qe = !1;
          } else
            for (; !(Qe = (K = ge.call(N)).done) && (ct.push(K.value), ct.length !== T); Qe = !0)
              ;
        } catch (Qn) {
          et = !0, pe = Qn;
        } finally {
          try {
            if (!Qe && N.return != null && (Je = N.return(), Object(Je) !== Je))
              return;
          } finally {
            if (et)
              throw pe;
          }
        }
        return ct;
      }
    }
    function ku(C) {
      if (Array.isArray(C))
        return C;
    }
    function Dt(C, T) {
      if (!(C instanceof T))
        throw new TypeError("Cannot call a class as a function");
    }
    function Su(C, T) {
      for (var N = 0; N < T.length; N++) {
        var K = T[N];
        K.enumerable = K.enumerable || !1, K.configurable = !0, "value" in K && (K.writable = !0), Object.defineProperty(C, Ou(K.key), K);
      }
    }
    function _t(C, T, N) {
      return T && Su(C.prototype, T), N && Su(C, N), Object.defineProperty(C, "prototype", {
        writable: !1
      }), C;
    }
    function Ou(C) {
      var T = hp(C, "string");
      return k(T) === "symbol" ? T : String(T);
    }
    function hp(C, T) {
      if (k(C) !== "object" || C === null)
        return C;
      var N = C[Symbol.toPrimitive];
      if (N !== void 0) {
        var K = N.call(C, T || "default");
        if (k(K) !== "object")
          return K;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (T === "string" ? String : Number)(C);
    }
    function Ae(C, T) {
      var N = typeof Symbol < "u" && C[Symbol.iterator] || C["@@iterator"];
      if (!N) {
        if (Array.isArray(C) || (N = Aa(C)) || T && C && typeof C.length == "number") {
          N && (C = N);
          var K = 0, pe = function() {
          };
          return {
            s: pe,
            n: function() {
              return K >= C.length ? {
                done: !0
              } : {
                done: !1,
                value: C[K++]
              };
            },
            e: function(et) {
              throw et;
            },
            f: pe
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var ge = !0, Je = !1, ct;
      return {
        s: function() {
          N = N.call(C);
        },
        n: function() {
          var et = N.next();
          return ge = et.done, et;
        },
        e: function(et) {
          Je = !0, ct = et;
        },
        f: function() {
          try {
            !ge && N.return != null && N.return();
          } finally {
            if (Je)
              throw ct;
          }
        }
      };
    }
    function Aa(C, T) {
      if (C) {
        if (typeof C == "string")
          return Jn(C, T);
        var N = Object.prototype.toString.call(C).slice(8, -1);
        if (N === "Object" && C.constructor && (N = C.constructor.name), N === "Map" || N === "Set")
          return Array.from(C);
        if (N === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))
          return Jn(C, T);
      }
    }
    function Jn(C, T) {
      (T == null || T > C.length) && (T = C.length);
      for (var N = 0, K = new Array(T); N < T; N++)
        K[N] = C[N];
      return K;
    }
    function k(C) {
      "@babel/helpers - typeof";
      return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
        return typeof T;
      } : function(T) {
        return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
      }, k(C);
    }
    (function() {
      var C, T, N, K, pe = Object.create, ge = Object.defineProperty, Je = Object.getPrototypeOf, ct = Object.prototype.hasOwnProperty, Qe = Object.getOwnPropertyNames, et = Object.getOwnPropertyDescriptor, Qn = function(t, r, a) {
        return r in t ? ge(t, r, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a
        }) : t[r] = a;
      }, vp = function(t) {
        return ge(t, "__esModule", {
          value: !0
        });
      }, x = function(t, r) {
        return function() {
          return r || t((r = {
            exports: {}
          }).exports, r), r.exports;
        };
      }, ht = function(t, r) {
        for (var a in r)
          ge(t, a, {
            get: r[a],
            enumerable: !0
          });
      }, gp = function(t, r, a) {
        if (r && k(r) === "object" || typeof r == "function") {
          var n = Ae(Qe(r)), i;
          try {
            var o = function() {
              var l = i.value;
              !ct.call(t, l) && l !== "default" && ge(t, l, {
                get: function() {
                  return r[l];
                },
                enumerable: !(a = et(r, l)) || a.enumerable
              });
            };
            for (n.s(); !(i = n.n()).done; )
              o();
          } catch (u) {
            n.e(u);
          } finally {
            n.f();
          }
        }
        return t;
      }, vt = function(t) {
        return gp(vp(ge(t != null ? pe(Je(t)) : {}, "default", t && t.__esModule && "default" in t ? {
          get: function() {
            return t.default;
          },
          enumerable: !0
        } : {
          value: t,
          enumerable: !0
        })), t);
      }, Mu = function(t, r, a) {
        return Qn(t, k(r) !== "symbol" ? r + "" : r, a), a;
      }, bp = x(function(e, t) {
        t.exports = function() {
        };
      }), Zt = x(function(e, t) {
        var r = bp()();
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), Nu = x(function(e, t) {
        var r = Zt(), a = Array.prototype.forEach, n = Object.create, i = function(u, l) {
          var s;
          for (s in u)
            l[s] = u[s];
        };
        t.exports = function(o) {
          var u = n(null);
          return a.call(arguments, function(l) {
            r(l) && i(Object(l), u);
          }), u;
        };
      }), yp = x(function(e, t) {
        t.exports = function() {
          var r = Math.sign;
          return typeof r != "function" ? !1 : r(10) === 1 && r(-20) === -1;
        };
      }), wp = x(function(e, t) {
        t.exports = function(r) {
          return r = Number(r), isNaN(r) || r === 0 ? r : r > 0 ? 1 : -1;
        };
      }), Dp = x(function(e, t) {
        t.exports = yp()() ? Math.sign : wp();
      }), _p = x(function(e, t) {
        var r = Dp(), a = Math.abs, n = Math.floor;
        t.exports = function(i) {
          return isNaN(i) ? 0 : (i = Number(i), i === 0 || !isFinite(i) ? i : r(i) * n(a(i)));
        };
      }), Jt = x(function(e, t) {
        var r = _p(), a = Math.max;
        t.exports = function(n) {
          return a(0, r(n));
        };
      }), Iu = x(function(e, t) {
        var r = Jt();
        t.exports = function(a, n, i) {
          var o;
          return isNaN(a) ? (o = n, o >= 0 ? i && o ? o - 1 : o : 1) : a === !1 ? !1 : r(a);
        };
      }), Bt = x(function(e, t) {
        t.exports = function(r) {
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          return r;
        };
      }), br = x(function(e, t) {
        var r = Zt();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError("Cannot use null or undefined");
          return a;
        };
      }), xp = x(function(e, t) {
        var r = Bt(), a = br(), n = Function.prototype.bind, i = Function.prototype.call, o = Object.keys, u = Object.prototype.propertyIsEnumerable;
        t.exports = function(l, s) {
          return function(c, d) {
            var f, p = arguments[2], m = arguments[3];
            return c = Object(a(c)), r(d), f = o(c), m && f.sort(typeof m == "function" ? n.call(m, c) : void 0), typeof l != "function" && (l = f[l]), i.call(l, f, function(h, b) {
              return u.call(c, h) ? i.call(d, p, c[h], h, c, b) : s;
            });
          };
        };
      }), Fa = x(function(e, t) {
        t.exports = xp()("forEach");
      }), Qt = x(function() {
      }), Ep = x(function(e, t) {
        t.exports = function() {
          var r = Object.assign, a;
          return typeof r != "function" ? !1 : (a = {
            foo: "raz"
          }, r(a, {
            bar: "dwa"
          }, {
            trzy: "trzy"
          }), a.foo + a.bar + a.trzy === "razdwatrzy");
        };
      }), Cp = x(function(e, t) {
        t.exports = function() {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        };
      }), Ap = x(function(e, t) {
        var r = Zt(), a = Object.keys;
        t.exports = function(n) {
          return a(r(n) ? Object(n) : n);
        };
      }), Fp = x(function(e, t) {
        t.exports = Cp()() ? Object.keys : Ap();
      }), Tp = x(function(e, t) {
        var r = Fp(), a = br(), n = Math.max;
        t.exports = function(i, o) {
          var u, l, s = n(arguments.length, 2), c;
          for (i = Object(a(i)), c = function(f) {
            try {
              i[f] = o[f];
            } catch (p) {
              u || (u = p);
            }
          }, l = 1; l < s; ++l)
            o = arguments[l], r(o).forEach(c);
          if (u !== void 0)
            throw u;
          return i;
        };
      }), Pu = x(function(e, t) {
        t.exports = Ep()() ? Object.assign : Tp();
      }), Rp = x(function(e, t) {
        var r = Zt(), a = {
          function: !0,
          object: !0
        };
        t.exports = function(n) {
          return r(n) && a[k(n)] || !1;
        };
      }), kp = x(function(e, t) {
        var r = Pu(), a = Rp(), n = Zt(), i = Error.captureStackTrace;
        t.exports = function(o) {
          var u = new Error(o), l = arguments[1], s = arguments[2];
          return n(s) || a(l) && (s = l, l = null), n(s) && r(u, s), n(l) && (u.code = l), i && i(u, t.exports), u;
        };
      }), Lu = x(function(e, t) {
        var r = br(), a = Object.defineProperty, n = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, o = Object.getOwnPropertySymbols;
        t.exports = function(u, l) {
          var s, c = Object(r(l));
          if (u = Object(r(u)), i(c).forEach(function(d) {
            try {
              a(u, d, n(l, d));
            } catch (f) {
              s = f;
            }
          }), typeof o == "function" && o(c).forEach(function(d) {
            try {
              a(u, d, n(l, d));
            } catch (f) {
              s = f;
            }
          }), s !== void 0)
            throw s;
          return u;
        };
      }), Bu = x(function(e, t) {
        var r = Jt(), a = function(s, c) {
          return c;
        }, n, i, o, u;
        try {
          Object.defineProperty(a, "length", {
            configurable: !0,
            writable: !1,
            enumerable: !1,
            value: 1
          });
        } catch {
        }
        a.length === 1 ? (n = {
          configurable: !0,
          writable: !1,
          enumerable: !1
        }, i = Object.defineProperty, t.exports = function(l, s) {
          return s = r(s), l.length === s ? l : (n.value = s, i(l, "length", n));
        }) : (u = Lu(), o = function() {
          var l = [];
          return function(s) {
            var c, d = 0;
            if (l[s])
              return l[s];
            for (c = []; s--; )
              c.push("a" + (++d).toString(36));
            return new Function("fn", "return function (" + c.join(", ") + ") { return fn.apply(this, arguments); };");
          };
        }(), t.exports = function(l, s) {
          var c;
          if (s = r(s), l.length === s)
            return l;
          c = o(s)(l);
          try {
            u(c, l);
          } catch {
          }
          return c;
        });
      }), qu = x(function(e, t) {
        var r = void 0;
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), Sp = x(function(e, t) {
        var r = qu(), a = {
          object: !0,
          function: !0,
          undefined: !0
        };
        t.exports = function(n) {
          return r(n) ? hasOwnProperty.call(a, k(n)) : !1;
        };
      }), Op = x(function(e, t) {
        var r = Sp();
        t.exports = function(a) {
          if (!r(a))
            return !1;
          try {
            return a.constructor ? a.constructor.prototype === a : !1;
          } catch {
            return !1;
          }
        };
      }), Mp = x(function(e, t) {
        var r = Op();
        t.exports = function(a) {
          if (typeof a != "function" || !hasOwnProperty.call(a, "length"))
            return !1;
          try {
            if (typeof a.length != "number" || typeof a.call != "function" || typeof a.apply != "function")
              return !1;
          } catch {
            return !1;
          }
          return !r(a);
        };
      }), Np = x(function(e, t) {
        var r = Mp(), a = /^\s*class[\s{/}]/, n = Function.prototype.toString;
        t.exports = function(i) {
          return !(!r(i) || a.test(n.call(i)));
        };
      }), Ip = x(function(e, t) {
        var r = "razdwatrzy";
        t.exports = function() {
          return typeof r.contains != "function" ? !1 : r.contains("dwa") === !0 && r.contains("foo") === !1;
        };
      }), Pp = x(function(e, t) {
        var r = String.prototype.indexOf;
        t.exports = function(a) {
          return r.call(this, a, arguments[1]) > -1;
        };
      }), Lp = x(function(e, t) {
        t.exports = Ip()() ? String.prototype.contains : Pp();
      }), er = x(function(e, t) {
        var r = qu(), a = Np(), n = Pu(), i = Nu(), o = Lp(), u = t.exports = function(l, s) {
          var c, d, f, p, m;
          return arguments.length < 2 || typeof l != "string" ? (p = s, s = l, l = null) : p = arguments[2], r(l) ? (c = o.call(l, "c"), d = o.call(l, "e"), f = o.call(l, "w")) : (c = f = !0, d = !1), m = {
            value: s,
            configurable: c,
            enumerable: d,
            writable: f
          }, p ? n(i(p), m) : m;
        };
        u.gs = function(l, s, c) {
          var d, f, p, m;
          return typeof l != "string" ? (p = c, c = s, s = l, l = null) : p = arguments[3], r(s) ? a(s) ? r(c) ? a(c) || (p = c, c = void 0) : c = void 0 : (p = s, s = c = void 0) : s = void 0, r(l) ? (d = o.call(l, "c"), f = o.call(l, "e")) : (d = !0, f = !1), m = {
            get: s,
            set: c,
            configurable: d,
            enumerable: f
          }, p ? n(i(p), m) : m;
        };
      }), Bp = x(function(e, t) {
        var r = er(), a = Bt(), n = Function.prototype.apply, i = Function.prototype.call, o = Object.create, u = Object.defineProperty, l = Object.defineProperties, s = Object.prototype.hasOwnProperty, c = {
          configurable: !0,
          enumerable: !1,
          writable: !0
        }, d, f, p, m, h, b, v;
        d = function(w, D) {
          var F;
          return a(D), s.call(this, "__ee__") ? F = this.__ee__ : (F = c.value = o(null), u(this, "__ee__", c), c.value = null), F[w] ? k(F[w]) === "object" ? F[w].push(D) : F[w] = [F[w], D] : F[w] = D, this;
        }, f = function(w, D) {
          var F, R;
          return a(D), R = this, d.call(this, w, F = function() {
            p.call(R, w, F), n.call(D, this, arguments);
          }), F.__eeOnceListener__ = D, this;
        }, p = function(w, D) {
          var F, R, S, L;
          if (a(D), !s.call(this, "__ee__"))
            return this;
          if (F = this.__ee__, !F[w])
            return this;
          if (R = F[w], k(R) === "object")
            for (L = 0; S = R[L]; ++L)
              (S === D || S.__eeOnceListener__ === D) && (R.length === 2 ? F[w] = R[L ? 0 : 1] : R.splice(L, 1));
          else
            (R === D || R.__eeOnceListener__ === D) && delete F[w];
          return this;
        }, m = function(w) {
          var D, F, R, S, L;
          if (s.call(this, "__ee__") && (S = this.__ee__[w], !!S))
            if (k(S) === "object") {
              for (F = arguments.length, L = new Array(F - 1), D = 1; D < F; ++D)
                L[D - 1] = arguments[D];
              for (S = S.slice(), D = 0; R = S[D]; ++D)
                n.call(R, this, L);
            } else
              switch (arguments.length) {
                case 1:
                  i.call(S, this);
                  break;
                case 2:
                  i.call(S, this, arguments[1]);
                  break;
                case 3:
                  i.call(S, this, arguments[1], arguments[2]);
                  break;
                default:
                  for (F = arguments.length, L = new Array(F - 1), D = 1; D < F; ++D)
                    L[D - 1] = arguments[D];
                  n.call(S, this, L);
              }
        }, h = {
          on: d,
          once: f,
          off: p,
          emit: m
        }, b = {
          on: r(d),
          once: r(f),
          off: r(p),
          emit: r(m)
        }, v = l({}, b), t.exports = e = function(w) {
          return w == null ? o(v) : l(Object(w), b);
        }, e.methods = h;
      }), qp = x(function(e, t) {
        t.exports = function() {
          var r = Array.from, a, n;
          return typeof r != "function" ? !1 : (a = ["raz", "dwa"], n = r(a), !!(n && n !== a && n[1] === "dwa"));
        };
      }), jp = x(function(e, t) {
        t.exports = function() {
          return (typeof globalThis > "u" ? "undefined" : k(globalThis)) !== "object" || !globalThis ? !1 : globalThis.Array === Array;
        };
      }), zp = x(function(e, t) {
        var r = function() {
          if ((typeof self > "u" ? "undefined" : k(self)) === "object" && self)
            return self;
          if ((typeof _ > "u" ? "undefined" : k(_)) === "object" && _)
            return _;
          throw new Error("Unable to resolve global `this`");
        };
        t.exports = function() {
          if (this)
            return this;
          try {
            Object.defineProperty(Object.prototype, "__global__", {
              get: function() {
                return this;
              },
              configurable: !0
            });
          } catch {
            return r();
          }
          try {
            return __global__ || r();
          } finally {
            delete Object.prototype.__global__;
          }
        }();
      }), Ta = x(function(e, t) {
        t.exports = jp()() ? globalThis : zp();
      }), Vp = x(function(e, t) {
        var r = Ta(), a = {
          object: !0,
          symbol: !0
        };
        t.exports = function() {
          var n = r.Symbol, i;
          if (typeof n != "function")
            return !1;
          i = n("test symbol");
          try {
            String(i);
          } catch {
            return !1;
          }
          return !(!a[k(n.iterator)] || !a[k(n.toPrimitive)] || !a[k(n.toStringTag)]);
        };
      }), Hp = x(function(e, t) {
        t.exports = function(r) {
          return r ? k(r) === "symbol" ? !0 : !r.constructor || r.constructor.name !== "Symbol" ? !1 : r[r.constructor.toStringTag] === "Symbol" : !1;
        };
      }), ju = x(function(e, t) {
        var r = Hp();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError(a + " is not a symbol");
          return a;
        };
      }), $p = x(function(e, t) {
        var r = er(), a = Object.create, n = Object.defineProperty, i = Object.prototype, o = a(null);
        t.exports = function(u) {
          for (var l = 0, s, c; o[u + (l || "")]; )
            ++l;
          return u += l || "", o[u] = !0, s = "@@" + u, n(i, s, r.gs(null, function(d) {
            c || (c = !0, n(this, s, r(d)), c = !1);
          })), s;
        };
      }), Up = x(function(e, t) {
        var r = er(), a = Ta().Symbol;
        t.exports = function(n) {
          return Object.defineProperties(n, {
            hasInstance: r("", a && a.hasInstance || n("hasInstance")),
            isConcatSpreadable: r("", a && a.isConcatSpreadable || n("isConcatSpreadable")),
            iterator: r("", a && a.iterator || n("iterator")),
            match: r("", a && a.match || n("match")),
            replace: r("", a && a.replace || n("replace")),
            search: r("", a && a.search || n("search")),
            species: r("", a && a.species || n("species")),
            split: r("", a && a.split || n("split")),
            toPrimitive: r("", a && a.toPrimitive || n("toPrimitive")),
            toStringTag: r("", a && a.toStringTag || n("toStringTag")),
            unscopables: r("", a && a.unscopables || n("unscopables"))
          });
        };
      }), Gp = x(function(e, t) {
        var r = er(), a = ju(), n = /* @__PURE__ */ Object.create(null);
        t.exports = function(i) {
          return Object.defineProperties(i, {
            for: r(function(o) {
              return n[o] ? n[o] : n[o] = i(String(o));
            }),
            keyFor: r(function(o) {
              var u;
              a(o);
              for (u in n)
                if (n[u] === o)
                  return u;
            })
          });
        };
      }), Wp = x(function(e, t) {
        var r = er(), a = ju(), n = Ta().Symbol, i = $p(), o = Up(), u = Gp(), l = Object.create, s = Object.defineProperties, c = Object.defineProperty, d, f, p;
        if (typeof n == "function")
          try {
            String(n()), p = !0;
          } catch {
          }
        else
          n = null;
        f = function(h) {
          if (this instanceof f)
            throw new TypeError("Symbol is not a constructor");
          return d(h);
        }, t.exports = d = function m(h) {
          var b;
          if (this instanceof m)
            throw new TypeError("Symbol is not a constructor");
          return p ? n(h) : (b = l(f.prototype), h = h === void 0 ? "" : String(h), s(b, {
            __description__: r("", h),
            __name__: r("", i(h))
          }));
        }, o(d), u(d), s(f.prototype, {
          constructor: r(d),
          toString: r("", function() {
            return this.__name__;
          })
        }), s(d.prototype, {
          toString: r(function() {
            return "Symbol (" + a(this).__description__ + ")";
          }),
          valueOf: r(function() {
            return a(this);
          })
        }), c(d.prototype, d.toPrimitive, r("", function() {
          var m = a(this);
          return k(m) === "symbol" ? m : m.toString();
        })), c(d.prototype, d.toStringTag, r("c", "Symbol")), c(f.prototype, d.toStringTag, r("c", d.prototype[d.toStringTag])), c(f.prototype, d.toPrimitive, r("c", d.prototype[d.toPrimitive]));
      }), Yp = x(function(e, t) {
        t.exports = Vp()() ? Ta().Symbol : Wp();
      }), Xp = x(function(e, t) {
        var r = Object.prototype.toString, a = r.call(function() {
          return arguments;
        }());
        t.exports = function(n) {
          return r.call(n) === a;
        };
      }), Kp = x(function(e, t) {
        var r = Object.prototype.toString, a = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
        t.exports = function(n) {
          return typeof n == "function" && a(r.call(n));
        };
      }), Zp = x(function(e, t) {
        var r = Object.prototype.toString, a = r.call("");
        t.exports = function(n) {
          return typeof n == "string" || n && k(n) === "object" && (n instanceof String || r.call(n) === a) || !1;
        };
      }), Jp = x(function(e, t) {
        var r = Yp().iterator, a = Xp(), n = Kp(), i = Jt(), o = Bt(), u = br(), l = Zt(), s = Zp(), c = Array.isArray, d = Function.prototype.call, f = {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: null
        }, p = Object.defineProperty;
        t.exports = function(m) {
          var h = arguments[1], b = arguments[2], v, g, w, D, F, R, S, L, G, q;
          if (m = Object(u(m)), l(h) && o(h), !this || this === Array || !n(this)) {
            if (!h) {
              if (a(m))
                return F = m.length, F !== 1 ? Array.apply(null, m) : (D = new Array(1), D[0] = m[0], D);
              if (c(m)) {
                for (D = new Array(F = m.length), g = 0; g < F; ++g)
                  D[g] = m[g];
                return D;
              }
            }
            D = [];
          } else
            v = this;
          if (!c(m)) {
            if ((G = m[r]) !== void 0) {
              for (S = o(G).call(m), v && (D = new v()), L = S.next(), g = 0; !L.done; )
                q = h ? d.call(h, b, L.value, g) : L.value, v ? (f.value = q, p(D, g, f)) : D[g] = q, L = S.next(), ++g;
              F = g;
            } else if (s(m)) {
              for (F = m.length, v && (D = new v()), g = 0, w = 0; g < F; ++g)
                q = m[g], g + 1 < F && (R = q.charCodeAt(0), R >= 55296 && R <= 56319 && (q += m[++g])), q = h ? d.call(h, b, q, w) : q, v ? (f.value = q, p(D, w, f)) : D[w] = q, ++w;
              F = w;
            }
          }
          if (F === void 0)
            for (F = i(m.length), v && (D = new v(F)), g = 0; g < F; ++g)
              q = h ? d.call(h, b, m[g], g) : m[g], v ? (f.value = q, p(D, g, f)) : D[g] = q;
          return v && (f.value = null, D.length = F), D;
        };
      }), ei = x(function(e, t) {
        t.exports = qp()() ? Array.from : Jp();
      }), Qp = x(function(e, t) {
        var r = ei(), a = Array.isArray;
        t.exports = function(n) {
          return a(n) ? n : r(n);
        };
      }), em = x(function(e, t) {
        var r = Qp(), a = Zt(), n = Bt(), i = Array.prototype.slice, o;
        o = function(l) {
          return this.map(function(s, c) {
            return s ? s(l[c]) : l[c];
          }).concat(i.call(l, this.length));
        }, t.exports = function(u) {
          return u = r(u), u.forEach(function(l) {
            a(l) && n(l);
          }), o.bind(u);
        };
      }), tm = x(function(e, t) {
        var r = Bt();
        t.exports = function(a) {
          var n;
          return typeof a == "function" ? {
            set: a,
            get: a
          } : (n = {
            get: r(a.get)
          }, a.set !== void 0 ? (n.set = r(a.set), a.delete && (n.delete = r(a.delete)), a.clear && (n.clear = r(a.clear)), n) : (n.set = n.get, n));
        };
      }), rm = x(function(e, t) {
        var r = kp(), a = Bu(), n = er(), i = Bp().methods, o = em(), u = tm(), l = Function.prototype.apply, s = Function.prototype.call, c = Object.create, d = Object.defineProperties, f = i.on, p = i.emit;
        t.exports = function(m, h, b) {
          var v = c(null), g, w, D, F, R, S, L, G, q, j, H, z, Z, te, Q;
          return h !== !1 ? w = h : isNaN(m.length) ? w = 1 : w = m.length, b.normalizer && (j = u(b.normalizer), D = j.get, F = j.set, R = j.delete, S = j.clear), b.resolvers != null && (Q = o(b.resolvers)), D ? te = a(function(W) {
            var B, ne, E = arguments;
            if (Q && (E = Q(E)), B = D(E), B !== null && hasOwnProperty.call(v, B))
              return H && g.emit("get", B, E, this), v[B];
            if (E.length === 1 ? ne = s.call(m, this, E[0]) : ne = l.call(m, this, E), B === null) {
              if (B = D(E), B !== null)
                throw r("Circular invocation", "CIRCULAR_INVOCATION");
              B = F(E);
            } else if (hasOwnProperty.call(v, B))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v[B] = ne, z && g.emit("set", B, null, ne), ne;
          }, w) : h === 0 ? te = function() {
            var B;
            if (hasOwnProperty.call(v, "data"))
              return H && g.emit("get", "data", arguments, this), v.data;
            if (arguments.length ? B = l.call(m, this, arguments) : B = s.call(m, this), hasOwnProperty.call(v, "data"))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v.data = B, z && g.emit("set", "data", null, B), B;
          } : te = function(B) {
            var ne, E = arguments, U;
            if (Q && (E = Q(arguments)), U = String(E[0]), hasOwnProperty.call(v, U))
              return H && g.emit("get", U, E, this), v[U];
            if (E.length === 1 ? ne = s.call(m, this, E[0]) : ne = l.call(m, this, E), hasOwnProperty.call(v, U))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v[U] = ne, z && g.emit("set", U, null, ne), ne;
          }, g = {
            original: m,
            memoized: te,
            profileName: b.profileName,
            get: function(B) {
              return Q && (B = Q(B)), D ? D(B) : String(B[0]);
            },
            has: function(B) {
              return hasOwnProperty.call(v, B);
            },
            delete: function(B) {
              var ne;
              hasOwnProperty.call(v, B) && (R && R(B), ne = v[B], delete v[B], Z && g.emit("delete", B, ne));
            },
            clear: function() {
              var B = v;
              S && S(), v = c(null), g.emit("clear", B);
            },
            on: function(B, ne) {
              return B === "get" ? H = !0 : B === "set" ? z = !0 : B === "delete" && (Z = !0), f.call(this, B, ne);
            },
            emit: p,
            updateEnv: function() {
              m = g.original;
            }
          }, D ? L = a(function(W) {
            var B, ne = arguments;
            Q && (ne = Q(ne)), B = D(ne), B !== null && g.delete(B);
          }, w) : h === 0 ? L = function() {
            return g.delete("data");
          } : L = function(B) {
            return Q && (B = Q(arguments)[0]), g.delete(B);
          }, G = a(function() {
            var W, B = arguments;
            return h === 0 ? v.data : (Q && (B = Q(B)), D ? W = D(B) : W = String(B[0]), v[W]);
          }), q = a(function() {
            var W, B = arguments;
            return h === 0 ? g.has("data") : (Q && (B = Q(B)), D ? W = D(B) : W = String(B[0]), W === null ? !1 : g.has(W));
          }), d(te, {
            __memoized__: n(!0),
            delete: n(L),
            clear: n(g.clear),
            _get: n(G),
            _has: n(q)
          }), g;
        };
      }), am = x(function(e, t) {
        var r = Bt(), a = Fa(), n = Qt(), i = rm(), o = Iu();
        t.exports = function u(l) {
          var s, c, d;
          if (r(l), s = Object(arguments[1]), s.async && s.promise)
            throw new Error("Options 'async' and 'promise' cannot be used together");
          return hasOwnProperty.call(l, "__memoized__") && !s.force ? l : (c = o(s.length, l.length, s.async && n.async), d = i(l, c, s), a(n, function(f, p) {
            s[p] && f(s[p], d, s);
          }), u.__profiler__ && u.__profiler__(d), d.updateEnv(), d.memoized);
        };
      }), nm = x(function(e, t) {
        t.exports = function(r) {
          var a, n, i = r.length;
          if (!i)
            return "";
          for (a = String(r[n = 0]); --i; )
            a += "" + r[++n];
          return a;
        };
      }), im = x(function(e, t) {
        t.exports = function(r) {
          return r ? function(a) {
            for (var n = String(a[0]), i = 0, o = r; --o; )
              n += "" + a[++i];
            return n;
          } : function() {
            return "";
          };
        };
      }), om = x(function(e, t) {
        t.exports = function() {
          var r = Number.isNaN;
          return typeof r != "function" ? !1 : !r({}) && r(NaN) && !r(34);
        };
      }), um = x(function(e, t) {
        t.exports = function(r) {
          return r !== r;
        };
      }), lm = x(function(e, t) {
        t.exports = om()() ? Number.isNaN : um();
      }), ti = x(function(e, t) {
        var r = lm(), a = Jt(), n = br(), i = Array.prototype.indexOf, o = Object.prototype.hasOwnProperty, u = Math.abs, l = Math.floor;
        t.exports = function(s) {
          var c, d, f, p;
          if (!r(s))
            return i.apply(this, arguments);
          for (d = a(n(this).length), f = arguments[1], isNaN(f) ? f = 0 : f >= 0 ? f = l(f) : f = a(this.length) - l(u(f)), c = f; c < d; ++c)
            if (o.call(this, c) && (p = this[c], r(p)))
              return c;
          return -1;
        };
      }), sm = x(function(e, t) {
        var r = ti(), a = Object.create;
        t.exports = function() {
          var n = 0, i = [], o = a(null);
          return {
            get: function(l) {
              var s = 0, c = i, d, f = l.length;
              if (f === 0)
                return c[f] || null;
              if (c = c[f]) {
                for (; s < f - 1; ) {
                  if (d = r.call(c[0], l[s]), d === -1)
                    return null;
                  c = c[1][d], ++s;
                }
                return d = r.call(c[0], l[s]), d === -1 ? null : c[1][d] || null;
              }
              return null;
            },
            set: function(l) {
              var s = 0, c = i, d, f = l.length;
              if (f === 0)
                c[f] = ++n;
              else {
                for (c[f] || (c[f] = [[], []]), c = c[f]; s < f - 1; )
                  d = r.call(c[0], l[s]), d === -1 && (d = c[0].push(l[s]) - 1, c[1].push([[], []])), c = c[1][d], ++s;
                d = r.call(c[0], l[s]), d === -1 && (d = c[0].push(l[s]) - 1), c[1][d] = ++n;
              }
              return o[n] = l, n;
            },
            delete: function(l) {
              var s = 0, c = i, d, f = o[l], p = f.length, m = [];
              if (p === 0)
                delete c[p];
              else if (c = c[p]) {
                for (; s < p - 1; ) {
                  if (d = r.call(c[0], f[s]), d === -1)
                    return;
                  m.push(c, d), c = c[1][d], ++s;
                }
                if (d = r.call(c[0], f[s]), d === -1)
                  return;
                for (l = c[1][d], c[0].splice(d, 1), c[1].splice(d, 1); !c[0].length && m.length; )
                  d = m.pop(), c = m.pop(), c[0].splice(d, 1), c[1].splice(d, 1);
              }
              delete o[l];
            },
            clear: function() {
              i = [], o = a(null);
            }
          };
        };
      }), cm = x(function(e, t) {
        var r = ti();
        t.exports = function() {
          var a = 0, n = [], i = [];
          return {
            get: function(u) {
              var l = r.call(n, u[0]);
              return l === -1 ? null : i[l];
            },
            set: function(u) {
              return n.push(u[0]), i.push(++a), a;
            },
            delete: function(u) {
              var l = r.call(i, u);
              l !== -1 && (n.splice(l, 1), i.splice(l, 1));
            },
            clear: function() {
              n = [], i = [];
            }
          };
        };
      }), dm = x(function(e, t) {
        var r = ti(), a = Object.create;
        t.exports = function(n) {
          var i = 0, o = [[], []], u = a(null);
          return {
            get: function(s) {
              for (var c = 0, d = o, f; c < n - 1; ) {
                if (f = r.call(d[0], s[c]), f === -1)
                  return null;
                d = d[1][f], ++c;
              }
              return f = r.call(d[0], s[c]), f === -1 ? null : d[1][f] || null;
            },
            set: function(s) {
              for (var c = 0, d = o, f; c < n - 1; )
                f = r.call(d[0], s[c]), f === -1 && (f = d[0].push(s[c]) - 1, d[1].push([[], []])), d = d[1][f], ++c;
              return f = r.call(d[0], s[c]), f === -1 && (f = d[0].push(s[c]) - 1), d[1][f] = ++i, u[i] = s, i;
            },
            delete: function(s) {
              for (var c = 0, d = o, f, p = [], m = u[s]; c < n - 1; ) {
                if (f = r.call(d[0], m[c]), f === -1)
                  return;
                p.push(d, f), d = d[1][f], ++c;
              }
              if (f = r.call(d[0], m[c]), f !== -1) {
                for (s = d[1][f], d[0].splice(f, 1), d[1].splice(f, 1); !d[0].length && p.length; )
                  f = p.pop(), d = p.pop(), d[0].splice(f, 1), d[1].splice(f, 1);
                delete u[s];
              }
            },
            clear: function() {
              o = [[], []], u = a(null);
            }
          };
        };
      }), zu = x(function(e, t) {
        var r = Bt(), a = Fa(), n = Function.prototype.call;
        t.exports = function(i, o) {
          var u = {}, l = arguments[2];
          return r(o), a(i, function(s, c, d, f) {
            u[c] = n.call(o, l, s, c, d, f);
          }), u;
        };
      }), ri = x(function(e, t) {
        var r = function(i) {
          if (typeof i != "function")
            throw new TypeError(i + " is not a function");
          return i;
        }, a = function(i) {
          var o = M.createTextNode(""), u, l, s = 0;
          return new i(function() {
            var c;
            if (u)
              l && (u = l.concat(u));
            else {
              if (!l)
                return;
              u = l;
            }
            if (l = u, u = null, typeof l == "function") {
              c = l, l = null, c();
              return;
            }
            for (o.data = s = ++s % 2; l; )
              c = l.shift(), l.length || (l = null), c();
          }).observe(o, {
            characterData: !0
          }), function(c) {
            if (r(c), u) {
              typeof u == "function" ? u = [u, c] : u.push(c);
              return;
            }
            u = c, o.data = s = ++s % 2;
          };
        };
        t.exports = function() {
          if ((typeof process > "u" ? "undefined" : k(process)) === "object" && process && typeof process.nextTick == "function")
            return process.nextTick;
          if (typeof queueMicrotask == "function")
            return function(n) {
              queueMicrotask(r(n));
            };
          if ((typeof M > "u" ? "undefined" : k(M)) === "object" && M) {
            if (typeof MutationObserver == "function")
              return a(MutationObserver);
            if (typeof WebKitMutationObserver == "function")
              return a(WebKitMutationObserver);
          }
          return typeof setImmediate == "function" ? function(n) {
            setImmediate(r(n));
          } : typeof setTimeout == "function" || (typeof setTimeout > "u" ? "undefined" : k(setTimeout)) === "object" ? function(n) {
            setTimeout(r(n), 0);
          } : null;
        }();
      }), fm = x(function() {
        var e = ei(), t = zu(), r = Lu(), a = Bu(), n = ri(), i = Array.prototype.slice, o = Function.prototype.apply, u = Object.create;
        Qt().async = function(l, s) {
          var c = u(null), d = u(null), f = s.memoized, p = s.original, m, h, b;
          s.memoized = a(function(v) {
            var g = arguments, w = g[g.length - 1];
            return typeof w == "function" && (m = w, g = i.call(g, 0, -1)), f.apply(h = this, b = g);
          }, f);
          try {
            r(s.memoized, f);
          } catch {
          }
          s.on("get", function(v) {
            var g, w, D;
            if (m) {
              if (c[v]) {
                typeof c[v] == "function" ? c[v] = [c[v], m] : c[v].push(m), m = null;
                return;
              }
              g = m, w = h, D = b, m = h = b = null, n(function() {
                var F;
                hasOwnProperty.call(d, v) ? (F = d[v], s.emit("getasync", v, D, w), o.call(g, F.context, F.args)) : (m = g, h = w, b = D, f.apply(w, D));
              });
            }
          }), s.original = function() {
            var v, g, w, D;
            return m ? (v = e(arguments), g = function F(R) {
              var S, L, G = F.id;
              if (G == null) {
                n(o.bind(F, this, arguments));
                return;
              }
              if (delete F.id, S = c[G], delete c[G], !!S)
                return L = e(arguments), s.has(G) && (R ? s.delete(G) : (d[G] = {
                  context: this,
                  args: L
                }, s.emit("setasync", G, typeof S == "function" ? 1 : S.length))), typeof S == "function" ? D = o.call(S, this, L) : S.forEach(function(q) {
                  D = o.call(q, this, L);
                }, this), D;
            }, w = m, m = h = b = null, v.push(g), D = o.call(p, this, v), g.cb = w, m = g, D) : o.call(p, this, arguments);
          }, s.on("set", function(v) {
            if (!m) {
              s.delete(v);
              return;
            }
            c[v] ? typeof c[v] == "function" ? c[v] = [c[v], m.cb] : c[v].push(m.cb) : c[v] = m.cb, delete m.cb, m.id = v, m = null;
          }), s.on("delete", function(v) {
            var g;
            hasOwnProperty.call(c, v) || d[v] && (g = d[v], delete d[v], s.emit("deleteasync", v, i.call(g.args, 1)));
          }), s.on("clear", function() {
            var v = d;
            d = u(null), s.emit("clearasync", t(v, function(g) {
              return i.call(g.args, 1);
            }));
          });
        };
      }), pm = x(function(e, t) {
        var r = Array.prototype.forEach, a = Object.create;
        t.exports = function(n) {
          var i = a(null);
          return r.call(arguments, function(o) {
            i[o] = !0;
          }), i;
        };
      }), Vu = x(function(e, t) {
        t.exports = function(r) {
          return typeof r == "function";
        };
      }), mm = x(function(e, t) {
        var r = Vu();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            throw new TypeError("Passed argument cannot be stringifed");
          }
        };
      }), hm = x(function(e, t) {
        var r = br(), a = mm();
        t.exports = function(n) {
          return a(r(n));
        };
      }), vm = x(function(e, t) {
        var r = Vu();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            return "<Non-coercible to string value>";
          }
        };
      }), gm = x(function(e, t) {
        var r = vm(), a = /[\n\r\u2028\u2029]/g;
        t.exports = function(n) {
          var i = r(n);
          return i.length > 100 && (i = i.slice(0, 99) + "…"), i = i.replace(a, function(o) {
            return JSON.stringify(o).slice(1, -1);
          }), i;
        };
      }), Hu = x(function(e, t) {
        t.exports = r, t.exports.default = r;
        function r(a) {
          return !!a && (k(a) === "object" || typeof a == "function") && typeof a.then == "function";
        }
      }), bm = x(function() {
        var e = zu(), t = pm(), r = hm(), a = gm(), n = Hu(), i = ri(), o = Object.create, u = t("then", "then:finally", "done", "done:finally");
        Qt().promise = function(l, s) {
          var c = o(null), d = o(null), f = o(null);
          if (l === !0)
            l = null;
          else if (l = r(l), !u[l])
            throw new TypeError("'" + a(l) + "' is not valid promise mode");
          s.on("set", function(p, m, h) {
            var b = !1;
            if (!n(h)) {
              d[p] = h, s.emit("setasync", p, 1);
              return;
            }
            c[p] = 1, f[p] = h;
            var v = function(R) {
              var S = c[p];
              if (b)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              S && (delete c[p], d[p] = R, s.emit("setasync", p, S));
            }, g = function() {
              b = !0, c[p] && (delete c[p], delete f[p], s.delete(p));
            }, w = l;
            if (w || (w = "then"), w === "then") {
              var D = function() {
                i(g);
              };
              h = h.then(function(F) {
                i(v.bind(this, F));
              }, D), typeof h.finally == "function" && h.finally(D);
            } else if (w === "done") {
              if (typeof h.done != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
              h.done(v, g);
            } else if (w === "done:finally") {
              if (typeof h.done != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
              if (typeof h.finally != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
              h.done(v), h.finally(g);
            }
          }), s.on("get", function(p, m, h) {
            var b;
            if (c[p]) {
              ++c[p];
              return;
            }
            b = f[p];
            var v = function() {
              s.emit("getasync", p, m, h);
            };
            n(b) ? typeof b.done == "function" ? b.done(v) : b.then(function() {
              i(v);
            }) : v();
          }), s.on("delete", function(p) {
            if (delete f[p], c[p]) {
              delete c[p];
              return;
            }
            if (hasOwnProperty.call(d, p)) {
              var m = d[p];
              delete d[p], s.emit("deleteasync", p, [m]);
            }
          }), s.on("clear", function() {
            var p = d;
            d = o(null), c = o(null), f = o(null), s.emit("clearasync", e(p, function(m) {
              return [m];
            }));
          });
        };
      }), ym = x(function() {
        var e = Bt(), t = Fa(), r = Qt(), a = Function.prototype.apply;
        r.dispose = function(n, i, o) {
          var u;
          if (e(n), o.async && r.async || o.promise && r.promise) {
            i.on("deleteasync", u = function(s, c) {
              a.call(n, null, c);
            }), i.on("clearasync", function(l) {
              t(l, function(s, c) {
                u(c, s);
              });
            });
            return;
          }
          i.on("delete", u = function(s, c) {
            n(c);
          }), i.on("clear", function(l) {
            t(l, function(s, c) {
              u(c, s);
            });
          });
        };
      }), wm = x(function(e, t) {
        t.exports = 2147483647;
      }), Dm = x(function(e, t) {
        var r = Jt(), a = wm();
        t.exports = function(n) {
          if (n = r(n), n > a)
            throw new TypeError(n + " exceeds maximum possible timeout");
          return n;
        };
      }), _m = x(function() {
        var e = ei(), t = Fa(), r = ri(), a = Hu(), n = Dm(), i = Qt(), o = Function.prototype, u = Math.max, l = Math.min, s = Object.create;
        i.maxAge = function(c, d, f) {
          var p, m, h, b;
          c = n(c), c && (p = s(null), m = f.async && i.async || f.promise && i.promise ? "async" : "", d.on("set" + m, function(v) {
            p[v] = setTimeout(function() {
              d.delete(v);
            }, c), typeof p[v].unref == "function" && p[v].unref(), b && (b[v] && b[v] !== "nextTick" && clearTimeout(b[v]), b[v] = setTimeout(function() {
              delete b[v];
            }, h), typeof b[v].unref == "function" && b[v].unref());
          }), d.on("delete" + m, function(v) {
            clearTimeout(p[v]), delete p[v], b && (b[v] !== "nextTick" && clearTimeout(b[v]), delete b[v]);
          }), f.preFetch && (f.preFetch === !0 || isNaN(f.preFetch) ? h = 0.333 : h = u(l(Number(f.preFetch), 1), 0), h && (b = {}, h = (1 - h) * c, d.on("get" + m, function(v, g, w) {
            b[v] || (b[v] = "nextTick", r(function() {
              var D;
              b[v] === "nextTick" && (delete b[v], d.delete(v), f.async && (g = e(g), g.push(o)), D = d.memoized.apply(w, g), f.promise && a(D) && (typeof D.done == "function" ? D.done(o, o) : D.then(o, o)));
            }));
          }))), d.on("clear" + m, function() {
            t(p, function(v) {
              clearTimeout(v);
            }), p = {}, b && (t(b, function(v) {
              v !== "nextTick" && clearTimeout(v);
            }), b = {});
          }));
        };
      }), xm = x(function(e, t) {
        var r = Jt(), a = Object.create, n = Object.prototype.hasOwnProperty;
        t.exports = function(i) {
          var o = 0, u = 1, l = a(null), s = a(null), c = 0, d;
          return i = r(i), {
            hit: function(p) {
              var m = s[p], h = ++c;
              if (l[h] = p, s[p] = h, !m)
                return ++o, o <= i ? void 0 : (p = l[u], d(p), p);
              if (delete l[m], u === m)
                for (; !n.call(l, ++u); )
                  ;
            },
            delete: d = function(p) {
              var m = s[p];
              if (m && (delete l[m], delete s[p], --o, u === m)) {
                if (!o) {
                  c = 0, u = 1;
                  return;
                }
                for (; !n.call(l, ++u); )
                  ;
              }
            },
            clear: function() {
              o = 0, u = 1, l = a(null), s = a(null), c = 0;
            }
          };
        };
      }), Em = x(function() {
        var e = Jt(), t = xm(), r = Qt();
        r.max = function(a, n, i) {
          var o, u, l;
          a = e(a), a && (u = t(a), o = i.async && r.async || i.promise && r.promise ? "async" : "", n.on("set" + o, l = function(c) {
            c = u.hit(c), c !== void 0 && n.delete(c);
          }), n.on("get" + o, l), n.on("delete" + o, u.delete), n.on("clear" + o, u.clear));
        };
      }), Cm = x(function() {
        var e = er(), t = Qt(), r = Object.create, a = Object.defineProperties;
        t.refCounter = function(n, i, o) {
          var u, l;
          u = r(null), l = o.async && t.async || o.promise && t.promise ? "async" : "", i.on("set" + l, function(s, c) {
            u[s] = c || 1;
          }), i.on("get" + l, function(s) {
            ++u[s];
          }), i.on("delete" + l, function(s) {
            delete u[s];
          }), i.on("clear" + l, function() {
            u = {};
          }), a(i.memoized, {
            deleteRef: e(function() {
              var s = i.get(arguments);
              return s === null || !u[s] ? null : --u[s] ? !1 : (i.delete(s), !0);
            }),
            getRefCount: e(function() {
              var s = i.get(arguments);
              return s === null || !u[s] ? 0 : u[s];
            })
          });
        };
      }), $u = x(function(e, t) {
        var r = Nu(), a = Iu(), n = am();
        t.exports = function(i) {
          var o = r(arguments[1]), u;
          return o.normalizer || (u = o.length = a(o.length, i.length, o.async), u !== 0 && (o.primitive ? u === !1 ? o.normalizer = nm() : u > 1 && (o.normalizer = im()(u)) : u === !1 ? o.normalizer = sm()() : u === 1 ? o.normalizer = cm()() : o.normalizer = dm()(u))), o.async && fm(), o.promise && bm(), o.dispose && ym(), o.maxAge && _m(), o.max && Em(), o.refCounter && Cm(), n(i, o);
        };
      }), Uu = x(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        function t(o) {
          return o >= "a" && o <= "z" || o >= "A" && o <= "Z" || o === "-" || o === "_";
        }
        e.isIdentStart = t;
        function r(o) {
          return o >= "a" && o <= "z" || o >= "A" && o <= "Z" || o >= "0" && o <= "9" || o === "-" || o === "_";
        }
        e.isIdent = r;
        function a(o) {
          return o >= "a" && o <= "f" || o >= "A" && o <= "F" || o >= "0" && o <= "9";
        }
        e.isHex = a;
        function n(o) {
          for (var u = o.length, l = "", s = 0; s < u; ) {
            var c = o.charAt(s);
            if (e.identSpecialChars[c])
              l += "\\" + c;
            else if (c === "_" || c === "-" || c >= "A" && c <= "Z" || c >= "a" && c <= "z" || s !== 0 && c >= "0" && c <= "9")
              l += c;
            else {
              var d = c.charCodeAt(0);
              if ((d & 63488) === 55296) {
                var f = o.charCodeAt(s++);
                if ((d & 64512) !== 55296 || (f & 64512) !== 56320)
                  throw Error("UCS-2(decode): illegal sequence");
                d = ((d & 1023) << 10) + (f & 1023) + 65536;
              }
              l += "\\" + d.toString(16) + " ";
            }
            s++;
          }
          return l;
        }
        e.escapeIdentifier = n;
        function i(o) {
          for (var u = o.length, l = "", s = 0, c; s < u; ) {
            var d = o.charAt(s);
            d === '"' ? d = '\\"' : d === "\\" ? d = "\\\\" : (c = e.strReplacementsRev[d]) !== void 0 && (d = c), l += d, s++;
          }
          return '"' + l + '"';
        }
        e.escapeStr = i, e.identSpecialChars = {
          "!": !0,
          '"': !0,
          "#": !0,
          $: !0,
          "%": !0,
          "&": !0,
          "'": !0,
          "(": !0,
          ")": !0,
          "*": !0,
          "+": !0,
          ",": !0,
          ".": !0,
          "/": !0,
          ";": !0,
          "<": !0,
          "=": !0,
          ">": !0,
          "?": !0,
          "@": !0,
          "[": !0,
          "\\": !0,
          "]": !0,
          "^": !0,
          "`": !0,
          "{": !0,
          "|": !0,
          "}": !0,
          "~": !0
        }, e.strReplacementsRev = {
          "\n": "\\n",
          "\r": "\\r",
          "	": "\\t",
          "\f": "\\f",
          "\v": "\\v"
        }, e.singleQuoteEscapeChars = {
          n: `
`,
          r: "\r",
          t: "	",
          f: "\f",
          "\\": "\\",
          "'": "'"
        }, e.doubleQuotesEscapeChars = {
          n: `
`,
          r: "\r",
          t: "	",
          f: "\f",
          "\\": "\\",
          '"': '"'
        };
      }), Am = x(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Uu();
        function r(a, n, i, o, u, l) {
          var s = a.length, c = "";
          function d(g, w) {
            var D = "";
            for (n++, c = a.charAt(n); n < s; ) {
              if (c === g)
                return n++, D;
              if (c === "\\") {
                n++, c = a.charAt(n);
                var F = void 0;
                if (c === g)
                  D += g;
                else if ((F = w[c]) !== void 0)
                  D += F;
                else if (t.isHex(c)) {
                  var R = c;
                  for (n++, c = a.charAt(n); t.isHex(c); )
                    R += c, n++, c = a.charAt(n);
                  c === " " && (n++, c = a.charAt(n)), D += String.fromCharCode(parseInt(R, 16));
                  continue;
                } else
                  D += c;
              } else
                D += c;
              n++, c = a.charAt(n);
            }
            return D;
          }
          function f() {
            var g = "";
            for (c = a.charAt(n); n < s; ) {
              if (t.isIdent(c))
                g += c;
              else if (c === "\\") {
                if (n++, n >= s)
                  throw Error("Expected symbol but end of file reached.");
                if (c = a.charAt(n), t.identSpecialChars[c])
                  g += c;
                else if (t.isHex(c)) {
                  var w = c;
                  for (n++, c = a.charAt(n); t.isHex(c); )
                    w += c, n++, c = a.charAt(n);
                  c === " " && (n++, c = a.charAt(n)), g += String.fromCharCode(parseInt(w, 16));
                  continue;
                } else
                  g += c;
              } else
                return g;
              n++, c = a.charAt(n);
            }
            return g;
          }
          function p() {
            c = a.charAt(n);
            for (var g = !1; c === " " || c === "	" || c === `
` || c === "\r" || c === "\f"; )
              g = !0, n++, c = a.charAt(n);
            return g;
          }
          function m() {
            var g = h();
            if (n < s)
              throw Error('Rule expected but "' + a.charAt(n) + '" found.');
            return g;
          }
          function h() {
            var g = b();
            if (!g)
              return null;
            var w = g;
            for (c = a.charAt(n); c === ","; ) {
              if (n++, p(), w.type !== "selectors" && (w = {
                type: "selectors",
                selectors: [g]
              }), g = b(), !g)
                throw Error('Rule expected after ",".');
              w.selectors.push(g);
            }
            return w;
          }
          function b() {
            p();
            var g = {
              type: "ruleSet"
            }, w = v();
            if (!w)
              return null;
            for (var D = g; w && (w.type = "rule", D.rule = w, D = w, p(), c = a.charAt(n), !(n >= s || c === "," || c === ")")); )
              if (u[c]) {
                var F = c;
                if (n++, p(), w = v(), !w)
                  throw Error('Rule expected after "' + F + '".');
                w.nestingOperator = F;
              } else
                w = v(), w && (w.nestingOperator = null);
            return g;
          }
          function v() {
            for (var g = null; n < s; )
              if (c = a.charAt(n), c === "*")
                n++, (g = g || {}).tagName = "*";
              else if (t.isIdentStart(c) || c === "\\")
                (g = g || {}).tagName = f();
              else if (c === ".")
                n++, g = g || {}, (g.classNames = g.classNames || []).push(f());
              else if (c === "#")
                n++, (g = g || {}).id = f();
              else if (c === "[") {
                n++, p();
                var w = {
                  name: f()
                };
                if (p(), c === "]")
                  n++;
                else {
                  var D = "";
                  if (o[c] && (D = c, n++, c = a.charAt(n)), n >= s)
                    throw Error('Expected "=" but end of file reached.');
                  if (c !== "=")
                    throw Error('Expected "=" but "' + c + '" found.');
                  w.operator = D + "=", n++, p();
                  var F = "";
                  if (w.valueType = "string", c === '"')
                    F = d('"', t.doubleQuotesEscapeChars);
                  else if (c === "'")
                    F = d("'", t.singleQuoteEscapeChars);
                  else if (l && c === "$")
                    n++, F = f(), w.valueType = "substitute";
                  else {
                    for (; n < s && c !== "]"; )
                      F += c, n++, c = a.charAt(n);
                    F = F.trim();
                  }
                  if (p(), n >= s)
                    throw Error('Expected "]" but end of file reached.');
                  if (c !== "]")
                    throw Error('Expected "]" but "' + c + '" found.');
                  n++, w.value = F;
                }
                g = g || {}, (g.attrs = g.attrs || []).push(w);
              } else if (c === ":") {
                n++;
                var R = f(), S = {
                  name: R
                };
                if (c === "(") {
                  n++;
                  var L = "";
                  if (p(), i[R] === "selector")
                    S.valueType = "selector", L = h();
                  else {
                    if (S.valueType = i[R] || "string", c === '"')
                      L = d('"', t.doubleQuotesEscapeChars);
                    else if (c === "'")
                      L = d("'", t.singleQuoteEscapeChars);
                    else if (l && c === "$")
                      n++, L = f(), S.valueType = "substitute";
                    else {
                      for (; n < s && c !== ")"; )
                        L += c, n++, c = a.charAt(n);
                      L = L.trim();
                    }
                    p();
                  }
                  if (n >= s)
                    throw Error('Expected ")" but end of file reached.');
                  if (c !== ")")
                    throw Error('Expected ")" but "' + c + '" found.');
                  n++, S.value = L;
                }
                g = g || {}, (g.pseudos = g.pseudos || []).push(S);
              } else
                break;
            return g;
          }
          return m();
        }
        e.parseCssSelector = r;
      }), Fm = x(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Uu();
        function r(a) {
          var n = "";
          switch (a.type) {
            case "ruleSet":
              for (var i = a.rule, o = []; i; )
                i.nestingOperator && o.push(i.nestingOperator), o.push(r(i)), i = i.rule;
              n = o.join(" ");
              break;
            case "selectors":
              n = a.selectors.map(r).join(", ");
              break;
            case "rule":
              a.tagName && (a.tagName === "*" ? n = "*" : n = t.escapeIdentifier(a.tagName)), a.id && (n += "#" + t.escapeIdentifier(a.id)), a.classNames && (n += a.classNames.map(function(u) {
                return "." + t.escapeIdentifier(u);
              }).join("")), a.attrs && (n += a.attrs.map(function(u) {
                return "operator" in u ? u.valueType === "substitute" ? "[" + t.escapeIdentifier(u.name) + u.operator + "$" + u.value + "]" : "[" + t.escapeIdentifier(u.name) + u.operator + t.escapeStr(u.value) + "]" : "[" + t.escapeIdentifier(u.name) + "]";
              }).join("")), a.pseudos && (n += a.pseudos.map(function(u) {
                return u.valueType ? u.valueType === "selector" ? ":" + t.escapeIdentifier(u.name) + "(" + r(u.value) + ")" : u.valueType === "substitute" ? ":" + t.escapeIdentifier(u.name) + "($" + u.value + ")" : u.valueType === "numeric" ? ":" + t.escapeIdentifier(u.name) + "(" + u.value + ")" : ":" + t.escapeIdentifier(u.name) + "(" + t.escapeIdentifier(u.value) + ")" : ":" + t.escapeIdentifier(u.name);
              }).join(""));
              break;
            default:
              throw Error('Unknown entity type: "' + a.type + '".');
          }
          return n;
        }
        e.renderEntity = r;
      }), Gu = x(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Am(), r = Fm(), a = function() {
          function n() {
            this.pseudos = {}, this.attrEqualityMods = {}, this.ruleNestingOperators = {}, this.substitutesEnabled = !1;
          }
          return n.prototype.registerSelectorPseudos = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var u = 0, l = i; u < l.length; u++) {
              var s = l[u];
              this.pseudos[s] = "selector";
            }
            return this;
          }, n.prototype.unregisterSelectorPseudos = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var u = 0, l = i; u < l.length; u++) {
              var s = l[u];
              delete this.pseudos[s];
            }
            return this;
          }, n.prototype.registerNumericPseudos = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var u = 0, l = i; u < l.length; u++) {
              var s = l[u];
              this.pseudos[s] = "numeric";
            }
            return this;
          }, n.prototype.unregisterNumericPseudos = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var u = 0, l = i; u < l.length; u++) {
              var s = l[u];
              delete this.pseudos[s];
            }
            return this;
          }, n.prototype.registerNestingOperators = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var u = 0, l = i; u < l.length; u++) {
              var s = l[u];
              this.ruleNestingOperators[s] = !0;
            }
            return this;
          }, n.prototype.unregisterNestingOperators = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var u = 0, l = i; u < l.length; u++) {
              var s = l[u];
              delete this.ruleNestingOperators[s];
            }
            return this;
          }, n.prototype.registerAttrEqualityMods = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var u = 0, l = i; u < l.length; u++) {
              var s = l[u];
              this.attrEqualityMods[s] = !0;
            }
            return this;
          }, n.prototype.unregisterAttrEqualityMods = function() {
            for (var i = [], o = 0; o < arguments.length; o++)
              i[o] = arguments[o];
            for (var u = 0, l = i; u < l.length; u++) {
              var s = l[u];
              delete this.attrEqualityMods[s];
            }
            return this;
          }, n.prototype.enableSubstitutes = function() {
            return this.substitutesEnabled = !0, this;
          }, n.prototype.disableSubstitutes = function() {
            return this.substitutesEnabled = !1, this;
          }, n.prototype.parse = function(i) {
            return t.parseCssSelector(i, 0, this.pseudos, this.attrEqualityMods, this.ruleNestingOperators, this.substitutesEnabled);
          }, n.prototype.render = function(i) {
            return r.renderEntity(i).trim();
          }, n;
        }();
        e.CssSelectorParser = a;
      }), Tm = x(function(e, t) {
        (function(r, a) {
          k(e) === "object" && typeof t < "u" ? t.exports = a() : r.ES6Promise = a();
        })(e, function() {
          function r(A) {
            var O = k(A);
            return A !== null && (O === "object" || O === "function");
          }
          function a(A) {
            return typeof A == "function";
          }
          var n = void 0;
          Array.isArray ? n = Array.isArray : n = function(O) {
            return Object.prototype.toString.call(O) === "[object Array]";
          };
          var i = n, o = 0, u = void 0, l = void 0, s = function(O, P) {
            R[o] = O, R[o + 1] = P, o += 2, o === 2 && (l ? l(S) : G());
          };
          function c(A) {
            l = A;
          }
          function d(A) {
            s = A;
          }
          var f = typeof _ < "u" ? _ : void 0, p = f || {}, m = p.MutationObserver || p.WebKitMutationObserver, h = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", b = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
          function v() {
            return function() {
              return process.nextTick(S);
            };
          }
          function g() {
            return typeof u < "u" ? function() {
              u(S);
            } : F();
          }
          function w() {
            var A = 0, O = new m(S), P = M.createTextNode("");
            return O.observe(P, {
              characterData: !0
            }), function() {
              P.data = A = ++A % 2;
            };
          }
          function D() {
            var A = new MessageChannel();
            return A.port1.onmessage = S, function() {
              return A.port2.postMessage(0);
            };
          }
          function F() {
            var A = setTimeout;
            return function() {
              return A(S, 1);
            };
          }
          var R = new Array(1e3);
          function S() {
            for (var A = 0; A < o; A += 2) {
              var O = R[A], P = R[A + 1];
              O(P), R[A] = void 0, R[A + 1] = void 0;
            }
            o = 0;
          }
          function L() {
            try {
              var A = Function("return this")().require("vertx");
              return u = A.runOnLoop || A.runOnContext, g();
            } catch {
              return F();
            }
          }
          var G = void 0;
          h ? G = v() : m ? G = w() : b ? G = D() : f === void 0 ? G = L() : G = F();
          function q(A, O) {
            var P = this, Y = new this.constructor(z);
            Y[H] === void 0 && Ee(Y);
            var oe = P._state;
            if (oe) {
              var de = arguments[oe - 1];
              s(function() {
                return _e(oe, Y, de, P._result);
              });
            } else
              ve(P, Y, A, O);
            return Y;
          }
          function j(A) {
            var O = this;
            if (A && k(A) === "object" && A.constructor === O)
              return A;
            var P = new O(z);
            return J(P, A), P;
          }
          var H = Math.random().toString(36).substring(2);
          function z() {
          }
          var Z = void 0, te = 1, Q = 2;
          function W() {
            return new TypeError("You cannot resolve a promise with itself");
          }
          function B() {
            return new TypeError("A promises callback cannot return that same promise.");
          }
          function ne(A, O, P, Y) {
            try {
              A.call(O, P, Y);
            } catch (oe) {
              return oe;
            }
          }
          function E(A, O, P) {
            s(function(Y) {
              var oe = !1, de = ne(P, O, function(ze) {
                oe || (oe = !0, O !== ze ? J(Y, ze) : $(Y, ze));
              }, function(ze) {
                oe || (oe = !0, X(Y, ze));
              }, "Settle: " + (Y._label || " unknown promise"));
              !oe && de && (oe = !0, X(Y, de));
            }, A);
          }
          function U(A, O) {
            O._state === te ? $(A, O._result) : O._state === Q ? X(A, O._result) : ve(O, void 0, function(P) {
              return J(A, P);
            }, function(P) {
              return X(A, P);
            });
          }
          function I(A, O, P) {
            O.constructor === A.constructor && P === q && O.constructor.resolve === j ? U(A, O) : P === void 0 ? $(A, O) : a(P) ? E(A, O, P) : $(A, O);
          }
          function J(A, O) {
            if (A === O)
              X(A, W());
            else if (r(O)) {
              var P = void 0;
              try {
                P = O.then;
              } catch (Y) {
                X(A, Y);
                return;
              }
              I(A, O, P);
            } else
              $(A, O);
          }
          function ie(A) {
            A._onerror && A._onerror(A._result), ye(A);
          }
          function $(A, O) {
            A._state === Z && (A._result = O, A._state = te, A._subscribers.length !== 0 && s(ye, A));
          }
          function X(A, O) {
            A._state === Z && (A._state = Q, A._result = O, s(ie, A));
          }
          function ve(A, O, P, Y) {
            var oe = A._subscribers, de = oe.length;
            A._onerror = null, oe[de] = O, oe[de + te] = P, oe[de + Q] = Y, de === 0 && A._state && s(ye, A);
          }
          function ye(A) {
            var O = A._subscribers, P = A._state;
            if (O.length !== 0) {
              for (var Y = void 0, oe = void 0, de = A._result, ze = 0; ze < O.length; ze += 3)
                Y = O[ze], oe = O[ze + P], Y ? _e(P, Y, oe, de) : oe(de);
              A._subscribers.length = 0;
            }
          }
          function _e(A, O, P, Y) {
            var oe = a(P), de = void 0, ze = void 0, qr = !0;
            if (oe) {
              try {
                de = P(Y);
              } catch (Wn) {
                qr = !1, ze = Wn;
              }
              if (O === de) {
                X(O, B());
                return;
              }
            } else
              de = Y;
            O._state !== Z || (oe && qr ? J(O, de) : qr === !1 ? X(O, ze) : A === te ? $(O, de) : A === Q && X(O, de));
          }
          function Oe(A, O) {
            try {
              O(function(Y) {
                J(A, Y);
              }, function(Y) {
                X(A, Y);
              });
            } catch (P) {
              X(A, P);
            }
          }
          var qe = 0;
          function Ie() {
            return qe++;
          }
          function Ee(A) {
            A[H] = qe++, A._state = void 0, A._result = void 0, A._subscribers = [];
          }
          function Br() {
            return new Error("Array Methods must be provided an Array");
          }
          var Ge = function() {
            function A(O, P) {
              this._instanceConstructor = O, this.promise = new O(z), this.promise[H] || Ee(this.promise), i(P) ? (this.length = P.length, this._remaining = P.length, this._result = new Array(this.length), this.length === 0 ? $(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(P), this._remaining === 0 && $(this.promise, this._result))) : X(this.promise, Br());
            }
            return A.prototype._enumerate = function(P) {
              for (var Y = 0; this._state === Z && Y < P.length; Y++)
                this._eachEntry(P[Y], Y);
            }, A.prototype._eachEntry = function(P, Y) {
              var oe = this._instanceConstructor, de = oe.resolve;
              if (de === j) {
                var ze = void 0, qr = void 0, Wn = !1;
                try {
                  ze = P.then;
                } catch (bu) {
                  Wn = !0, qr = bu;
                }
                if (ze === q && P._state !== Z)
                  this._settledAt(P._state, Y, P._result);
                else if (typeof ze != "function")
                  this._remaining--, this._result[Y] = P;
                else if (oe === Te) {
                  var gu = new oe(z);
                  Wn ? X(gu, qr) : I(gu, P, ze), this._willSettleAt(gu, Y);
                } else
                  this._willSettleAt(new oe(function(bu) {
                    return bu(P);
                  }), Y);
              } else
                this._willSettleAt(de(P), Y);
            }, A.prototype._settledAt = function(P, Y, oe) {
              var de = this.promise;
              de._state === Z && (this._remaining--, P === Q ? X(de, oe) : this._result[Y] = oe), this._remaining === 0 && $(de, this._result);
            }, A.prototype._willSettleAt = function(P, Y) {
              var oe = this;
              ve(P, void 0, function(de) {
                return oe._settledAt(te, Y, de);
              }, function(de) {
                return oe._settledAt(Q, Y, de);
              });
            }, A;
          }();
          function Ce(A) {
            return new Ge(this, A).promise;
          }
          function je(A) {
            var O = this;
            return i(A) ? new O(function(P, Y) {
              for (var oe = A.length, de = 0; de < oe; de++)
                O.resolve(A[de]).then(P, Y);
            }) : new O(function(P, Y) {
              return Y(new TypeError("You must pass an array to race."));
            });
          }
          function Me(A) {
            var O = this, P = new O(z);
            return X(P, A), P;
          }
          function Ke() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }
          function Ze() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }
          var Te = function() {
            function A(O) {
              this[H] = Ie(), this._result = this._state = void 0, this._subscribers = [], z !== O && (typeof O != "function" && Ke(), this instanceof A ? Oe(this, O) : Ze());
            }
            return A.prototype.catch = function(P) {
              return this.then(null, P);
            }, A.prototype.finally = function(P) {
              var Y = this, oe = Y.constructor;
              return a(P) ? Y.then(function(de) {
                return oe.resolve(P()).then(function() {
                  return de;
                });
              }, function(de) {
                return oe.resolve(P()).then(function() {
                  throw de;
                });
              }) : Y.then(P, P);
            }, A;
          }();
          Te.prototype.then = q, Te.all = Ce, Te.race = je, Te.resolve = j, Te.reject = Me, Te._setScheduler = c, Te._setAsap = d, Te._asap = s;
          function we() {
            var A = void 0;
            if (typeof St < "u")
              A = St;
            else if (typeof self < "u")
              A = self;
            else
              try {
                A = Function("return this")();
              } catch {
                throw new Error("polyfill failed because global object is unavailable in this environment");
              }
            var O = A.Promise;
            if (O) {
              var P = null;
              try {
                P = Object.prototype.toString.call(O.resolve());
              } catch {
              }
              if (P === "[object Promise]" && !O.cast)
                return;
            }
            A.Promise = Te;
          }
          return Te.polyfill = we, Te.Promise = Te, Te;
        });
      }), Rm = x(function(e) {
        var t = 1e5, r = function() {
          var E = Object.prototype.toString, U = Object.prototype.hasOwnProperty;
          return {
            Class: function(J) {
              return E.call(J).replace(/^\[object *|\]$/g, "");
            },
            HasProperty: function(J, ie) {
              return ie in J;
            },
            HasOwnProperty: function(J, ie) {
              return U.call(J, ie);
            },
            IsCallable: function(J) {
              return typeof J == "function";
            },
            ToInt32: function(J) {
              return J >> 0;
            },
            ToUint32: function(J) {
              return J >>> 0;
            }
          };
        }(), a = Math.LN2, n = Math.abs, i = Math.floor, o = Math.log, u = Math.min, l = Math.pow, s = Math.round;
        function c(E, U, I) {
          return E < U ? U : E > I ? I : E;
        }
        var d = Object.getOwnPropertyNames || function(E) {
          if (E !== Object(E))
            throw new TypeError("Object.getOwnPropertyNames called on non-object");
          var U = [], I;
          for (I in E)
            r.HasOwnProperty(E, I) && U.push(I);
          return U;
        }, f;
        Object.defineProperty && function() {
          try {
            return Object.defineProperty({}, "x", {}), !0;
          } catch {
            return !1;
          }
        }() ? f = Object.defineProperty : f = function(U, I, J) {
          if (!U === Object(U))
            throw new TypeError("Object.defineProperty called on non-object");
          return r.HasProperty(J, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(U, I, J.get), r.HasProperty(J, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(U, I, J.set), r.HasProperty(J, "value") && (U[I] = J.value), U;
        };
        function p(E) {
          if (d && f) {
            var U = d(E), I;
            for (I = 0; I < U.length; I += 1)
              f(E, U[I], {
                value: E[U[I]],
                writable: !1,
                enumerable: !1,
                configurable: !1
              });
          }
        }
        function m(E) {
          if (!f)
            return;
          if (E.length > t)
            throw new RangeError("Array too large for polyfill");
          function U(J) {
            f(E, J, {
              get: function() {
                return E._getter(J);
              },
              set: function($) {
                E._setter(J, $);
              },
              enumerable: !0,
              configurable: !1
            });
          }
          var I;
          for (I = 0; I < E.length; I += 1)
            U(I);
        }
        function h(E, U) {
          var I = 32 - U;
          return E << I >> I;
        }
        function b(E, U) {
          var I = 32 - U;
          return E << I >>> I;
        }
        function v(E) {
          return [E & 255];
        }
        function g(E) {
          return h(E[0], 8);
        }
        function w(E) {
          return [E & 255];
        }
        function D(E) {
          return b(E[0], 8);
        }
        function F(E) {
          return E = s(Number(E)), [E < 0 ? 0 : E > 255 ? 255 : E & 255];
        }
        function R(E) {
          return [E >> 8 & 255, E & 255];
        }
        function S(E) {
          return h(E[0] << 8 | E[1], 16);
        }
        function L(E) {
          return [E >> 8 & 255, E & 255];
        }
        function G(E) {
          return b(E[0] << 8 | E[1], 16);
        }
        function q(E) {
          return [E >> 24 & 255, E >> 16 & 255, E >> 8 & 255, E & 255];
        }
        function j(E) {
          return h(E[0] << 24 | E[1] << 16 | E[2] << 8 | E[3], 32);
        }
        function H(E) {
          return [E >> 24 & 255, E >> 16 & 255, E >> 8 & 255, E & 255];
        }
        function z(E) {
          return b(E[0] << 24 | E[1] << 16 | E[2] << 8 | E[3], 32);
        }
        function Z(E, U, I) {
          var J = (1 << U - 1) - 1, ie, $, X, ve, ye, _e, Oe;
          function qe(Ie) {
            var Ee = i(Ie), Br = Ie - Ee;
            return Br < 0.5 ? Ee : Br > 0.5 || Ee % 2 ? Ee + 1 : Ee;
          }
          for (E !== E ? ($ = (1 << U) - 1, X = l(2, I - 1), ie = 0) : E === 1 / 0 || E === -1 / 0 ? ($ = (1 << U) - 1, X = 0, ie = E < 0 ? 1 : 0) : E === 0 ? ($ = 0, X = 0, ie = 1 / E === -1 / 0 ? 1 : 0) : (ie = E < 0, E = n(E), E >= l(2, 1 - J) ? ($ = u(i(o(E) / a), 1023), X = qe(E / l(2, $) * l(2, I)), X / l(2, I) >= 2 && ($ = $ + 1, X = 1), $ > J ? ($ = (1 << U) - 1, X = 0) : ($ = $ + J, X = X - l(2, I))) : ($ = 0, X = qe(E / l(2, 1 - J - I)))), ye = [], ve = I; ve; ve -= 1)
            ye.push(X % 2 ? 1 : 0), X = i(X / 2);
          for (ve = U; ve; ve -= 1)
            ye.push($ % 2 ? 1 : 0), $ = i($ / 2);
          for (ye.push(ie ? 1 : 0), ye.reverse(), _e = ye.join(""), Oe = []; _e.length; )
            Oe.push(parseInt(_e.substring(0, 8), 2)), _e = _e.substring(8);
          return Oe;
        }
        function te(E, U, I) {
          var J = [], ie, $, X, ve, ye, _e, Oe, qe;
          for (ie = E.length; ie; ie -= 1)
            for (X = E[ie - 1], $ = 8; $; $ -= 1)
              J.push(X % 2 ? 1 : 0), X = X >> 1;
          return J.reverse(), ve = J.join(""), ye = (1 << U - 1) - 1, _e = parseInt(ve.substring(0, 1), 2) ? -1 : 1, Oe = parseInt(ve.substring(1, 1 + U), 2), qe = parseInt(ve.substring(1 + U), 2), Oe === (1 << U) - 1 ? qe === 0 ? _e * (1 / 0) : NaN : Oe > 0 ? _e * l(2, Oe - ye) * (1 + qe / l(2, I)) : qe !== 0 ? _e * l(2, -(ye - 1)) * (qe / l(2, I)) : _e < 0 ? -0 : 0;
        }
        function Q(E) {
          return te(E, 11, 52);
        }
        function W(E) {
          return Z(E, 11, 52);
        }
        function B(E) {
          return te(E, 8, 23);
        }
        function ne(E) {
          return Z(E, 8, 23);
        }
        (function() {
          function E(Ie) {
            if (Ie = r.ToInt32(Ie), Ie < 0)
              throw new RangeError("ArrayBuffer size is not a small enough positive integer");
            this.byteLength = Ie, this._bytes = [], this._bytes.length = Ie;
            var Ee;
            for (Ee = 0; Ee < this.byteLength; Ee += 1)
              this._bytes[Ee] = 0;
            p(this);
          }
          e.ArrayBuffer = e.ArrayBuffer || E;
          function U() {
          }
          function I(Ie, Ee, Br) {
            var Ge;
            return Ge = function(je, Me, Ke) {
              var Ze, Te, we, A;
              if (!arguments.length || typeof arguments[0] == "number") {
                if (this.length = r.ToInt32(arguments[0]), Ke < 0)
                  throw new RangeError("ArrayBufferView size is not a small enough positive integer");
                this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new E(this.byteLength), this.byteOffset = 0;
              } else if (k(arguments[0]) === "object" && arguments[0].constructor === Ge)
                for (Ze = arguments[0], this.length = Ze.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new E(this.byteLength), this.byteOffset = 0, we = 0; we < this.length; we += 1)
                  this._setter(we, Ze._getter(we));
              else if (k(arguments[0]) === "object" && !(arguments[0] instanceof E || r.Class(arguments[0]) === "ArrayBuffer"))
                for (Te = arguments[0], this.length = r.ToUint32(Te.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new E(this.byteLength), this.byteOffset = 0, we = 0; we < this.length; we += 1)
                  A = Te[we], this._setter(we, Number(A));
              else if (k(arguments[0]) === "object" && (arguments[0] instanceof E || r.Class(arguments[0]) === "ArrayBuffer")) {
                if (this.buffer = je, this.byteOffset = r.ToUint32(Me), this.byteOffset > this.buffer.byteLength)
                  throw new RangeError("byteOffset out of range");
                if (this.byteOffset % this.BYTES_PER_ELEMENT)
                  throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
                if (arguments.length < 3) {
                  if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT)
                    throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
                  this.length = this.byteLength / this.BYTES_PER_ELEMENT;
                } else
                  this.length = r.ToUint32(Ke), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
                if (this.byteOffset + this.byteLength > this.buffer.byteLength)
                  throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
              } else
                throw new TypeError("Unexpected argument type(s)");
              this.constructor = Ge, p(this), m(this);
            }, Ge.prototype = new U(), Ge.prototype.BYTES_PER_ELEMENT = Ie, Ge.prototype._pack = Ee, Ge.prototype._unpack = Br, Ge.BYTES_PER_ELEMENT = Ie, Ge.prototype._getter = function(Ce) {
              if (arguments.length < 1)
                throw new SyntaxError("Not enough arguments");
              if (Ce = r.ToUint32(Ce), !(Ce >= this.length)) {
                for (var je = [], Me = 0, Ke = this.byteOffset + Ce * this.BYTES_PER_ELEMENT; Me < this.BYTES_PER_ELEMENT; Me += 1, Ke += 1)
                  je.push(this.buffer._bytes[Ke]);
                return this._unpack(je);
              }
            }, Ge.prototype.get = Ge.prototype._getter, Ge.prototype._setter = function(Ce, je) {
              if (arguments.length < 2)
                throw new SyntaxError("Not enough arguments");
              if (Ce = r.ToUint32(Ce), Ce < this.length) {
                var Me = this._pack(je), Ke, Ze;
                for (Ke = 0, Ze = this.byteOffset + Ce * this.BYTES_PER_ELEMENT; Ke < this.BYTES_PER_ELEMENT; Ke += 1, Ze += 1)
                  this.buffer._bytes[Ze] = Me[Ke];
              }
            }, Ge.prototype.set = function(Ce, je) {
              if (arguments.length < 1)
                throw new SyntaxError("Not enough arguments");
              var Me, Ke, Ze, Te, we, A, O, P, Y, oe;
              if (k(arguments[0]) === "object" && arguments[0].constructor === this.constructor) {
                if (Me = arguments[0], Ze = r.ToUint32(arguments[1]), Ze + Me.length > this.length)
                  throw new RangeError("Offset plus length of array is out of range");
                if (P = this.byteOffset + Ze * this.BYTES_PER_ELEMENT, Y = Me.length * this.BYTES_PER_ELEMENT, Me.buffer === this.buffer) {
                  for (oe = [], we = 0, A = Me.byteOffset; we < Y; we += 1, A += 1)
                    oe[we] = Me.buffer._bytes[A];
                  for (we = 0, O = P; we < Y; we += 1, O += 1)
                    this.buffer._bytes[O] = oe[we];
                } else
                  for (we = 0, A = Me.byteOffset, O = P; we < Y; we += 1, A += 1, O += 1)
                    this.buffer._bytes[O] = Me.buffer._bytes[A];
              } else if (k(arguments[0]) === "object" && typeof arguments[0].length < "u") {
                if (Ke = arguments[0], Te = r.ToUint32(Ke.length), Ze = r.ToUint32(arguments[1]), Ze + Te > this.length)
                  throw new RangeError("Offset plus length of array is out of range");
                for (we = 0; we < Te; we += 1)
                  A = Ke[we], this._setter(Ze + we, Number(A));
              } else
                throw new TypeError("Unexpected argument type(s)");
            }, Ge.prototype.subarray = function(Ce, je) {
              Ce = r.ToInt32(Ce), je = r.ToInt32(je), arguments.length < 1 && (Ce = 0), arguments.length < 2 && (je = this.length), Ce < 0 && (Ce = this.length + Ce), je < 0 && (je = this.length + je), Ce = c(Ce, 0, this.length), je = c(je, 0, this.length);
              var Me = je - Ce;
              return Me < 0 && (Me = 0), new this.constructor(this.buffer, this.byteOffset + Ce * this.BYTES_PER_ELEMENT, Me);
            }, Ge;
          }
          var J = I(1, v, g), ie = I(1, w, D), $ = I(1, F, D), X = I(2, R, S), ve = I(2, L, G), ye = I(4, q, j), _e = I(4, H, z), Oe = I(4, ne, B), qe = I(8, W, Q);
          e.Int8Array = e.Int8Array || J, e.Uint8Array = e.Uint8Array || ie, e.Uint8ClampedArray = e.Uint8ClampedArray || $, e.Int16Array = e.Int16Array || X, e.Uint16Array = e.Uint16Array || ve, e.Int32Array = e.Int32Array || ye, e.Uint32Array = e.Uint32Array || _e, e.Float32Array = e.Float32Array || Oe, e.Float64Array = e.Float64Array || qe;
        })(), function() {
          function E($, X) {
            return r.IsCallable($.get) ? $.get(X) : $[X];
          }
          var U = function() {
            var $ = new e.Uint16Array([4660]), X = new e.Uint8Array($.buffer);
            return E(X, 0) === 18;
          }();
          function I($, X, ve) {
            if (arguments.length === 0)
              $ = new e.ArrayBuffer(0);
            else if (!($ instanceof e.ArrayBuffer || r.Class($) === "ArrayBuffer"))
              throw new TypeError("TypeError");
            if (this.buffer = $ || new e.ArrayBuffer(0), this.byteOffset = r.ToUint32(X), this.byteOffset > this.buffer.byteLength)
              throw new RangeError("byteOffset out of range");
            if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = r.ToUint32(ve), this.byteOffset + this.byteLength > this.buffer.byteLength)
              throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
            p(this);
          }
          function J($) {
            return function(X, ve) {
              if (X = r.ToUint32(X), X + $.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              X += this.byteOffset;
              var ye = new e.Uint8Array(this.buffer, X, $.BYTES_PER_ELEMENT), _e = [], Oe;
              for (Oe = 0; Oe < $.BYTES_PER_ELEMENT; Oe += 1)
                _e.push(E(ye, Oe));
              return !!ve == !!U && _e.reverse(), E(new $(new e.Uint8Array(_e).buffer), 0);
            };
          }
          I.prototype.getUint8 = J(e.Uint8Array), I.prototype.getInt8 = J(e.Int8Array), I.prototype.getUint16 = J(e.Uint16Array), I.prototype.getInt16 = J(e.Int16Array), I.prototype.getUint32 = J(e.Uint32Array), I.prototype.getInt32 = J(e.Int32Array), I.prototype.getFloat32 = J(e.Float32Array), I.prototype.getFloat64 = J(e.Float64Array);
          function ie($) {
            return function(X, ve, ye) {
              if (X = r.ToUint32(X), X + $.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              var _e = new $([ve]), Oe = new e.Uint8Array(_e.buffer), qe = [], Ie, Ee;
              for (Ie = 0; Ie < $.BYTES_PER_ELEMENT; Ie += 1)
                qe.push(E(Oe, Ie));
              !!ye == !!U && qe.reverse(), Ee = new e.Uint8Array(this.buffer, X, $.BYTES_PER_ELEMENT), Ee.set(qe);
            };
          }
          I.prototype.setUint8 = ie(e.Uint8Array), I.prototype.setInt8 = ie(e.Int8Array), I.prototype.setUint16 = ie(e.Uint16Array), I.prototype.setInt16 = ie(e.Int16Array), I.prototype.setUint32 = ie(e.Uint32Array), I.prototype.setInt32 = ie(e.Int32Array), I.prototype.setFloat32 = ie(e.Float32Array), I.prototype.setFloat64 = ie(e.Float64Array), e.DataView = e.DataView || I;
        }();
      }), km = x(function(e) {
        (function(t) {
          if (t.WeakMap)
            return;
          var r = Object.prototype.hasOwnProperty, a = Object.defineProperty && function() {
            try {
              return Object.defineProperty({}, "x", {
                value: 1
              }).x === 1;
            } catch {
            }
          }(), n = function(u, l, s) {
            a ? Object.defineProperty(u, l, {
              configurable: !0,
              writable: !0,
              value: s
            }) : u[l] = s;
          };
          t.WeakMap = function() {
            function o() {
              if (this === void 0)
                throw new TypeError("Constructor WeakMap requires 'new'");
              if (n(this, "_id", l("_WeakMap")), arguments.length > 0)
                throw new TypeError("WeakMap iterable is not supported");
            }
            n(o.prototype, "delete", function(c) {
              if (u(this, "delete"), !i(c))
                return !1;
              var d = c[this._id];
              return d && d[0] === c ? (delete c[this._id], !0) : !1;
            }), n(o.prototype, "get", function(c) {
              if (u(this, "get"), !!i(c)) {
                var d = c[this._id];
                if (d && d[0] === c)
                  return d[1];
              }
            }), n(o.prototype, "has", function(c) {
              if (u(this, "has"), !i(c))
                return !1;
              var d = c[this._id];
              return !!(d && d[0] === c);
            }), n(o.prototype, "set", function(c, d) {
              if (u(this, "set"), !i(c))
                throw new TypeError("Invalid value used as weak map key");
              var f = c[this._id];
              return f && f[0] === c ? (f[1] = d, this) : (n(c, this._id, [c, d]), this);
            });
            function u(c, d) {
              if (!i(c) || !r.call(c, "_id"))
                throw new TypeError(d + " method called on incompatible receiver " + k(c));
            }
            function l(c) {
              return c + "_" + s() + "." + s();
            }
            function s() {
              return Math.random().toString().substring(2);
            }
            return n(o, "_polyfill", !0), o;
          }();
          function i(o) {
            return Object(o) === o;
          }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof _ < "u" ? _ : typeof St < "u" ? St : e);
      }), tr = x(function(e, t) {
        var r = function(n) {
          return n && n.Math == Math && n;
        };
        t.exports = r((typeof globalThis > "u" ? "undefined" : k(globalThis)) == "object" && globalThis) || r((typeof _ > "u" ? "undefined" : k(_)) == "object" && _) || r((typeof self > "u" ? "undefined" : k(self)) == "object" && self) || r((typeof St > "u" ? "undefined" : k(St)) == "object" && St) || function() {
          return this;
        }() || Function("return this")();
      }), rr = x(function(e, t) {
        t.exports = function(r) {
          try {
            return !!r();
          } catch {
            return !0;
          }
        };
      }), Ra = x(function(e, t) {
        var r = rr();
        t.exports = !r(function() {
          var a = (function() {
          }).bind();
          return typeof a != "function" || a.hasOwnProperty("prototype");
        });
      }), Sm = x(function(e, t) {
        var r = Ra(), a = Function.prototype, n = a.apply, i = a.call;
        t.exports = (typeof Reflect > "u" ? "undefined" : k(Reflect)) == "object" && Reflect.apply || (r ? i.bind(n) : function() {
          return i.apply(n, arguments);
        });
      }), qt = x(function(e, t) {
        var r = Ra(), a = Function.prototype, n = a.call, i = r && a.bind.bind(n, n);
        t.exports = r ? i : function(o) {
          return function() {
            return n.apply(o, arguments);
          };
        };
      }), Wu = x(function(e, t) {
        var r = qt(), a = r({}.toString), n = r("".slice);
        t.exports = function(i) {
          return n(a(i), 8, -1);
        };
      }), Yu = x(function(e, t) {
        var r = Wu(), a = qt();
        t.exports = function(n) {
          if (r(n) === "Function")
            return a(n);
        };
      }), Xu = x(function(e, t) {
        var r = (typeof M > "u" ? "undefined" : k(M)) == "object" && M.all, a = typeof r > "u" && r !== void 0;
        t.exports = {
          all: r,
          IS_HTMLDDA: a
        };
      }), ar = x(function(e, t) {
        var r = Xu(), a = r.all;
        t.exports = r.IS_HTMLDDA ? function(n) {
          return typeof n == "function" || n === a;
        } : function(n) {
          return typeof n == "function";
        };
      }), yr = x(function(e, t) {
        var r = rr();
        t.exports = !r(function() {
          return Object.defineProperty({}, 1, {
            get: function() {
              return 7;
            }
          })[1] != 7;
        });
      }), ai = x(function(e, t) {
        var r = Ra(), a = Function.prototype.call;
        t.exports = r ? a.bind(a) : function() {
          return a.apply(a, arguments);
        };
      }), Ku = x(function(e) {
        var t = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, a = r && !t.call({
          1: 2
        }, 1);
        e.f = a ? function(i) {
          var o = r(this, i);
          return !!o && o.enumerable;
        } : t;
      }), Zu = x(function(e, t) {
        t.exports = function(r, a) {
          return {
            enumerable: !(r & 1),
            configurable: !(r & 2),
            writable: !(r & 4),
            value: a
          };
        };
      }), Om = x(function(e, t) {
        var r = qt(), a = rr(), n = Wu(), i = Object, o = r("".split);
        t.exports = a(function() {
          return !i("z").propertyIsEnumerable(0);
        }) ? function(u) {
          return n(u) == "String" ? o(u, "") : i(u);
        } : i;
      }), Ju = x(function(e, t) {
        t.exports = function(r) {
          return r == null;
        };
      }), Qu = x(function(e, t) {
        var r = Ju(), a = TypeError;
        t.exports = function(n) {
          if (r(n))
            throw a("Can't call method on " + n);
          return n;
        };
      }), ka = x(function(e, t) {
        var r = Om(), a = Qu();
        t.exports = function(n) {
          return r(a(n));
        };
      }), Sa = x(function(e, t) {
        var r = ar(), a = Xu(), n = a.all;
        t.exports = a.IS_HTMLDDA ? function(i) {
          return k(i) == "object" ? i !== null : r(i) || i === n;
        } : function(i) {
          return k(i) == "object" ? i !== null : r(i);
        };
      }), Oa = x(function(e, t) {
        t.exports = {};
      }), el = x(function(e, t) {
        var r = Oa(), a = tr(), n = ar(), i = function(u) {
          return n(u) ? u : void 0;
        };
        t.exports = function(o, u) {
          return arguments.length < 2 ? i(r[o]) || i(a[o]) : r[o] && r[o][u] || a[o] && a[o][u];
        };
      }), Mm = x(function(e, t) {
        var r = qt();
        t.exports = r({}.isPrototypeOf);
      }), Nm = x(function(e, t) {
        var r = el();
        t.exports = r("navigator", "userAgent") || "";
      }), Im = x(function(e, t) {
        var r = tr(), a = Nm(), n = r.process, i = r.Deno, o = n && n.versions || i && i.version, u = o && o.v8, l, s;
        u && (l = u.split("."), s = l[0] > 0 && l[0] < 4 ? 1 : +(l[0] + l[1])), !s && a && (l = a.match(/Edge\/(\d+)/), (!l || l[1] >= 74) && (l = a.match(/Chrome\/(\d+)/), l && (s = +l[1]))), t.exports = s;
      }), tl = x(function(e, t) {
        var r = Im(), a = rr();
        t.exports = !!Object.getOwnPropertySymbols && !a(function() {
          var n = Symbol();
          return !String(n) || !(Object(n) instanceof Symbol) || !Symbol.sham && r && r < 41;
        });
      }), rl = x(function(e, t) {
        var r = tl();
        t.exports = r && !Symbol.sham && k(Symbol.iterator) == "symbol";
      }), al = x(function(e, t) {
        var r = el(), a = ar(), n = Mm(), i = rl(), o = Object;
        t.exports = i ? function(u) {
          return k(u) == "symbol";
        } : function(u) {
          var l = r("Symbol");
          return a(l) && n(l.prototype, o(u));
        };
      }), Pm = x(function(e, t) {
        var r = String;
        t.exports = function(a) {
          try {
            return r(a);
          } catch {
            return "Object";
          }
        };
      }), nl = x(function(e, t) {
        var r = ar(), a = Pm(), n = TypeError;
        t.exports = function(i) {
          if (r(i))
            return i;
          throw n(a(i) + " is not a function");
        };
      }), Lm = x(function(e, t) {
        var r = nl(), a = Ju();
        t.exports = function(n, i) {
          var o = n[i];
          return a(o) ? void 0 : r(o);
        };
      }), Bm = x(function(e, t) {
        var r = ai(), a = ar(), n = Sa(), i = TypeError;
        t.exports = function(o, u) {
          var l, s;
          if (u === "string" && a(l = o.toString) && !n(s = r(l, o)) || a(l = o.valueOf) && !n(s = r(l, o)) || u !== "string" && a(l = o.toString) && !n(s = r(l, o)))
            return s;
          throw i("Can't convert object to primitive value");
        };
      }), qm = x(function(e, t) {
        t.exports = !0;
      }), jm = x(function(e, t) {
        var r = tr(), a = Object.defineProperty;
        t.exports = function(n, i) {
          try {
            a(r, n, {
              value: i,
              configurable: !0,
              writable: !0
            });
          } catch {
            r[n] = i;
          }
          return i;
        };
      }), zm = x(function(e, t) {
        var r = tr(), a = jm(), n = "__core-js_shared__", i = r[n] || a(n, {});
        t.exports = i;
      }), Vm = x(function(e, t) {
        var r = qm(), a = zm();
        (t.exports = function(n, i) {
          return a[n] || (a[n] = i !== void 0 ? i : {});
        })("versions", []).push({
          version: "3.26.1",
          mode: r ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
      }), Hm = x(function(e, t) {
        var r = Qu(), a = Object;
        t.exports = function(n) {
          return a(r(n));
        };
      }), Vr = x(function(e, t) {
        var r = qt(), a = Hm(), n = r({}.hasOwnProperty);
        t.exports = Object.hasOwn || function(o, u) {
          return n(a(o), u);
        };
      }), $m = x(function(e, t) {
        var r = qt(), a = 0, n = Math.random(), i = r(1 .toString);
        t.exports = function(o) {
          return "Symbol(" + (o === void 0 ? "" : o) + ")_" + i(++a + n, 36);
        };
      }), Um = x(function(e, t) {
        var r = tr(), a = Vm(), n = Vr(), i = $m(), o = tl(), u = rl(), l = a("wks"), s = r.Symbol, c = s && s.for, d = u ? s : s && s.withoutSetter || i;
        t.exports = function(f) {
          if (!n(l, f) || !(o || typeof l[f] == "string")) {
            var p = "Symbol." + f;
            o && n(s, f) ? l[f] = s[f] : u && c ? l[f] = c(p) : l[f] = d(p);
          }
          return l[f];
        };
      }), Gm = x(function(e, t) {
        var r = ai(), a = Sa(), n = al(), i = Lm(), o = Bm(), u = Um(), l = TypeError, s = u("toPrimitive");
        t.exports = function(c, d) {
          if (!a(c) || n(c))
            return c;
          var f = i(c, s), p;
          if (f) {
            if (d === void 0 && (d = "default"), p = r(f, c, d), !a(p) || n(p))
              return p;
            throw l("Can't convert object to primitive value");
          }
          return d === void 0 && (d = "number"), o(c, d);
        };
      }), il = x(function(e, t) {
        var r = Gm(), a = al();
        t.exports = function(n) {
          var i = r(n, "string");
          return a(i) ? i : i + "";
        };
      }), Wm = x(function(e, t) {
        var r = tr(), a = Sa(), n = r.document, i = a(n) && a(n.createElement);
        t.exports = function(o) {
          return i ? n.createElement(o) : {};
        };
      }), ol = x(function(e, t) {
        var r = yr(), a = rr(), n = Wm();
        t.exports = !r && !a(function() {
          return Object.defineProperty(n("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      }), Ym = x(function(e) {
        var t = yr(), r = ai(), a = Ku(), n = Zu(), i = ka(), o = il(), u = Vr(), l = ol(), s = Object.getOwnPropertyDescriptor;
        e.f = t ? s : function(d, f) {
          if (d = i(d), f = o(f), l)
            try {
              return s(d, f);
            } catch {
            }
          if (u(d, f))
            return n(!r(a.f, d, f), d[f]);
        };
      }), Xm = x(function(e, t) {
        var r = rr(), a = ar(), n = /#|\.prototype\./, i = function(d, f) {
          var p = u[o(d)];
          return p == s ? !0 : p == l ? !1 : a(f) ? r(f) : !!f;
        }, o = i.normalize = function(c) {
          return String(c).replace(n, ".").toLowerCase();
        }, u = i.data = {}, l = i.NATIVE = "N", s = i.POLYFILL = "P";
        t.exports = i;
      }), Km = x(function(e, t) {
        var r = Yu(), a = nl(), n = Ra(), i = r(r.bind);
        t.exports = function(o, u) {
          return a(o), u === void 0 ? o : n ? i(o, u) : function() {
            return o.apply(u, arguments);
          };
        };
      }), Zm = x(function(e, t) {
        var r = yr(), a = rr();
        t.exports = r && a(function() {
          return Object.defineProperty(function() {
          }, "prototype", {
            value: 42,
            writable: !1
          }).prototype != 42;
        });
      }), Jm = x(function(e, t) {
        var r = Sa(), a = String, n = TypeError;
        t.exports = function(i) {
          if (r(i))
            return i;
          throw n(a(i) + " is not an object");
        };
      }), Qm = x(function(e) {
        var t = yr(), r = ol(), a = Zm(), n = Jm(), i = il(), o = TypeError, u = Object.defineProperty, l = Object.getOwnPropertyDescriptor, s = "enumerable", c = "configurable", d = "writable";
        e.f = t ? a ? function(p, m, h) {
          if (n(p), m = i(m), n(h), typeof p == "function" && m === "prototype" && "value" in h && d in h && !h[d]) {
            var b = l(p, m);
            b && b[d] && (p[m] = h.value, h = {
              configurable: c in h ? h[c] : b[c],
              enumerable: s in h ? h[s] : b[s],
              writable: !1
            });
          }
          return u(p, m, h);
        } : u : function(p, m, h) {
          if (n(p), m = i(m), n(h), r)
            try {
              return u(p, m, h);
            } catch {
            }
          if ("get" in h || "set" in h)
            throw o("Accessors not supported");
          return "value" in h && (p[m] = h.value), p;
        };
      }), eh = x(function(e, t) {
        var r = yr(), a = Qm(), n = Zu();
        t.exports = r ? function(i, o, u) {
          return a.f(i, o, n(1, u));
        } : function(i, o, u) {
          return i[o] = u, i;
        };
      }), ul = x(function(e, t) {
        var r = tr(), a = Sm(), n = Yu(), i = ar(), o = Ym().f, u = Xm(), l = Oa(), s = Km(), c = eh(), d = Vr(), f = function(m) {
          var h = function b(v, g, w) {
            if (this instanceof b) {
              switch (arguments.length) {
                case 0:
                  return new m();
                case 1:
                  return new m(v);
                case 2:
                  return new m(v, g);
              }
              return new m(v, g, w);
            }
            return a(m, this, arguments);
          };
          return h.prototype = m.prototype, h;
        };
        t.exports = function(p, m) {
          var h = p.target, b = p.global, v = p.stat, g = p.proto, w = b ? r : v ? r[h] : (r[h] || {}).prototype, D = b ? l : l[h] || c(l, h, {})[h], F = D.prototype, R, S, L, G, q, j, H, z, Z;
          for (G in m)
            R = u(b ? G : h + (v ? "." : "#") + G, p.forced), S = !R && w && d(w, G), j = D[G], S && (p.dontCallGetSet ? (Z = o(w, G), H = Z && Z.value) : H = w[G]), q = S && H ? H : m[G], !(S && k(j) == k(q)) && (p.bind && S ? z = s(q, r) : p.wrap && S ? z = f(q) : g && i(q) ? z = n(q) : z = q, (p.sham || q && q.sham || j && j.sham) && c(z, "sham", !0), c(D, G, z), g && (L = h + "Prototype", d(l, L) || c(l, L, {}), c(l[L], G, q), p.real && F && !F[G] && c(F, G, q)));
        };
      }), th = x(function() {
        var e = ul(), t = Vr();
        e({
          target: "Object",
          stat: !0
        }, {
          hasOwn: t
        });
      }), rh = x(function(e, t) {
        th();
        var r = Oa();
        t.exports = r.Object.hasOwn;
      }), ah = x(function(e, t) {
        var r = rh();
        t.exports = r;
      }), nh = x(function(e, t) {
        var r = ah();
        t.exports = r;
      }), ih = x(function(e, t) {
        var r = Math.ceil, a = Math.floor;
        t.exports = Math.trunc || function(i) {
          var o = +i;
          return (o > 0 ? a : r)(o);
        };
      }), ll = x(function(e, t) {
        var r = ih();
        t.exports = function(a) {
          var n = +a;
          return n !== n || n === 0 ? 0 : r(n);
        };
      }), oh = x(function(e, t) {
        var r = ll(), a = Math.max, n = Math.min;
        t.exports = function(i, o) {
          var u = r(i);
          return u < 0 ? a(u + o, 0) : n(u, o);
        };
      }), uh = x(function(e, t) {
        var r = ll(), a = Math.min;
        t.exports = function(n) {
          return n > 0 ? a(r(n), 9007199254740991) : 0;
        };
      }), lh = x(function(e, t) {
        var r = uh();
        t.exports = function(a) {
          return r(a.length);
        };
      }), sh = x(function(e, t) {
        var r = ka(), a = oh(), n = lh(), i = function(u) {
          return function(l, s, c) {
            var d = r(l), f = n(d), p = a(c, f), m;
            if (u && s != s) {
              for (; f > p; )
                if (m = d[p++], m != m)
                  return !0;
            } else
              for (; f > p; p++)
                if ((u || p in d) && d[p] === s)
                  return u || p || 0;
            return !u && -1;
          };
        };
        t.exports = {
          includes: i(!0),
          indexOf: i(!1)
        };
      }), ch = x(function(e, t) {
        t.exports = {};
      }), dh = x(function(e, t) {
        var r = qt(), a = Vr(), n = ka(), i = sh().indexOf, o = ch(), u = r([].push);
        t.exports = function(l, s) {
          var c = n(l), d = 0, f = [], p;
          for (p in c)
            !a(o, p) && a(c, p) && u(f, p);
          for (; s.length > d; )
            a(c, p = s[d++]) && (~i(f, p) || u(f, p));
          return f;
        };
      }), fh = x(function(e, t) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      }), ph = x(function(e, t) {
        var r = dh(), a = fh();
        t.exports = Object.keys || function(i) {
          return r(i, a);
        };
      }), mh = x(function(e, t) {
        var r = yr(), a = qt(), n = ph(), i = ka(), o = Ku().f, u = a(o), l = a([].push), s = function(d) {
          return function(f) {
            for (var p = i(f), m = n(p), h = m.length, b = 0, v = [], g; h > b; )
              g = m[b++], (!r || u(p, g)) && l(v, d ? [g, p[g]] : p[g]);
            return v;
          };
        };
        t.exports = {
          entries: s(!0),
          values: s(!1)
        };
      }), hh = x(function() {
        var e = ul(), t = mh().values;
        e({
          target: "Object",
          stat: !0
        }, {
          values: function(a) {
            return t(a);
          }
        });
      }), vh = x(function(e, t) {
        hh();
        var r = Oa();
        t.exports = r.Object.values;
      }), gh = x(function(e, t) {
        var r = vh();
        t.exports = r;
      }), bh = x(function(e, t) {
        var r = gh();
        t.exports = r;
      }), sl = x(function(e, t) {
        (function() {
          var r = {
            name: "doT",
            version: "1.1.1",
            templateSettings: {
              evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
              interpolate: /\{\{=([\s\S]+?)\}\}/g,
              encode: /\{\{!([\s\S]+?)\}\}/g,
              use: /\{\{#([\s\S]+?)\}\}/g,
              useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
              define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
              defineParams: /^\s*([\w$]+):([\s\S]+)/,
              conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
              iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
              varname: "it",
              strip: !0,
              append: !0,
              selfcontained: !1,
              doNotSkipEncoded: !1
            },
            template: void 0,
            compile: void 0,
            log: !0
          };
          (function() {
            if ((typeof globalThis > "u" ? "undefined" : k(globalThis)) !== "object")
              try {
                Object.defineProperty(Object.prototype, "__magic__", {
                  get: function() {
                    return this;
                  },
                  configurable: !0
                }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
              } catch {
                _.globalThis = function() {
                  if (typeof self < "u")
                    return self;
                  if (typeof _ < "u")
                    return _;
                  if (typeof St < "u")
                    return St;
                  if (typeof this < "u")
                    return this;
                  throw new Error("Unable to locate global `this`");
                }();
              }
          })(), r.encodeHTMLSource = function(u) {
            var l = {
              "&": "&#38;",
              "<": "&#60;",
              ">": "&#62;",
              '"': "&#34;",
              "'": "&#39;",
              "/": "&#47;"
            }, s = u ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
            return function(c) {
              return c ? c.toString().replace(s, function(d) {
                return l[d] || d;
              }) : "";
            };
          }, typeof t < "u" && t.exports ? t.exports = r : globalThis.doT = r;
          var a = {
            append: {
              start: "'+(",
              end: ")+'",
              startencode: "'+encodeHTML("
            },
            split: {
              start: "';out+=(",
              end: ");out+='",
              startencode: "';out+=encodeHTML("
            }
          }, n = /$^/;
          function i(u, l, s) {
            return (typeof l == "string" ? l : l.toString()).replace(u.define || n, function(c, d, f, p) {
              return d.indexOf("def.") === 0 && (d = d.substring(4)), d in s || (f === ":" ? (u.defineParams && p.replace(u.defineParams, function(m, h, b) {
                s[d] = {
                  arg: h,
                  text: b
                };
              }), d in s || (s[d] = p)) : new Function("def", "def['" + d + "']=" + p)(s)), "";
            }).replace(u.use || n, function(c, d) {
              u.useParams && (d = d.replace(u.useParams, function(p, m, h, b) {
                if (s[h] && s[h].arg && b) {
                  var v = (h + ":" + b).replace(/'|\\/g, "_");
                  return s.__exp = s.__exp || {}, s.__exp[v] = s[h].text.replace(new RegExp("(^|[^\\w$])" + s[h].arg + "([^\\w$])", "g"), "$1" + b + "$2"), m + "def.__exp['" + v + "']";
                }
              }));
              var f = new Function("def", "return " + d)(s);
              return f && i(u, f, s);
            });
          }
          function o(u) {
            return u.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
          }
          r.template = function(u, l, s) {
            l = l || r.templateSettings;
            var c = l.append ? a.append : a.split, d, f = 0, p, m = l.use || l.define ? i(l, u, s || {}) : u;
            m = ("var out='" + (l.strip ? m.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : m).replace(/'|\\/g, "\\$&").replace(l.interpolate || n, function(h, b) {
              return c.start + o(b) + c.end;
            }).replace(l.encode || n, function(h, b) {
              return d = !0, c.startencode + o(b) + c.end;
            }).replace(l.conditional || n, function(h, b, v) {
              return b ? v ? "';}else if(" + o(v) + "){out+='" : "';}else{out+='" : v ? "';if(" + o(v) + "){out+='" : "';}out+='";
            }).replace(l.iterate || n, function(h, b, v, g) {
              return b ? (f += 1, p = g || "i" + f, b = o(b), "';var arr" + f + "=" + b + ";if(arr" + f + "){var " + v + "," + p + "=-1,l" + f + "=arr" + f + ".length-1;while(" + p + "<l" + f + "){" + v + "=arr" + f + "[" + p + "+=1];out+='") : "';} } out+='";
            }).replace(l.evaluate || n, function(h, b) {
              return "';" + o(b) + "out+='";
            }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), d && (!l.selfcontained && globalThis && !globalThis._encodeHTML && (globalThis._encodeHTML = r.encodeHTMLSource(l.doNotSkipEncoded)), m = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + r.encodeHTMLSource.toString() + "(" + (l.doNotSkipEncoded || "") + "));" + m);
            try {
              return new Function(l.varname, m);
            } catch (h) {
              throw typeof console < "u" && console.log("Could not create a template function: " + m), h;
            }
          }, r.compile = function(u, l) {
            return r.template(u, null, l);
          };
        })();
      }), yh = [{
        name: "NA",
        value: "inapplicable",
        priority: 0,
        group: "inapplicable"
      }, {
        name: "PASS",
        value: "passed",
        priority: 1,
        group: "passes"
      }, {
        name: "CANTTELL",
        value: "cantTell",
        priority: 2,
        group: "incomplete"
      }, {
        name: "FAIL",
        value: "failed",
        priority: 3,
        group: "violations"
      }], gt = {
        helpUrlBase: "https://dequeuniversity.com/rules/",
        gridSize: 200,
        results: [],
        resultGroups: [],
        resultGroupMap: {},
        impact: Object.freeze(["minor", "moderate", "serious", "critical"]),
        preload: Object.freeze({
          assets: ["cssom", "media"],
          timeout: 1e4
        }),
        allOrigins: "<unsafe_all_origins>",
        sameOrigin: "<same_origin>"
      };
      yh.forEach(function(e) {
        var t = e.name, r = e.value, a = e.priority, n = e.group;
        gt[t] = r, gt[t + "_PRIO"] = a, gt[t + "_GROUP"] = n, gt.results[a] = r, gt.resultGroups[a] = n, gt.resultGroupMap[r] = n;
      }), Object.freeze(gt.results), Object.freeze(gt.resultGroups), Object.freeze(gt.resultGroupMap), Object.freeze(gt);
      var se = gt;
      function wh() {
        (typeof console > "u" ? "undefined" : k(console)) === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }
      var nr = wh, Dh = /[\t\r\n\f]/g, _h = function() {
        function e() {
          Dt(this, e), this.parent = void 0;
        }
        return _t(e, [{
          key: "props",
          get: function() {
            throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties');
          }
        }, {
          key: "attrNames",
          get: function() {
            throw new Error('VirtualNode class must have an "attrNames" property');
          }
        }, {
          key: "attr",
          value: function() {
            throw new Error('VirtualNode class must have an "attr" function');
          }
        }, {
          key: "hasAttr",
          value: function() {
            throw new Error('VirtualNode class must have a "hasAttr" function');
          }
        }, {
          key: "hasClass",
          value: function(r) {
            var a = this.attr("class");
            if (!a)
              return !1;
            var n = " " + r + " ";
            return (" " + a + " ").replace(Dh, " ").indexOf(n) >= 0;
          }
        }]), e;
      }(), Ve = _h, ni = {};
      ht(ni, {
        DqElement: function() {
          return Ot;
        },
        aggregate: function() {
          return Ma;
        },
        aggregateChecks: function() {
          return fl;
        },
        aggregateNodeResults: function() {
          return pl;
        },
        aggregateResult: function() {
          return ml;
        },
        areStylesSet: function() {
          return Rh;
        },
        assert: function() {
          return me;
        },
        checkHelper: function() {
          return ci;
        },
        clone: function() {
          return Mt;
        },
        closest: function() {
          return at;
        },
        collectResultsFromFrames: function() {
          return Hl;
        },
        contains: function() {
          return ur;
        },
        convertSelector: function() {
          return qa;
        },
        cssParser: function() {
          return Cl;
        },
        deepMerge: function() {
          return Ai;
        },
        escapeSelector: function() {
          return Re;
        },
        extendMetaData: function() {
          return Fi;
        },
        filterHtmlAttrs: function() {
          return h1;
        },
        finalizeRuleResult: function() {
          return Hr;
        },
        findBy: function() {
          return Zr;
        },
        getAllChecks: function() {
          return $a;
        },
        getAncestry: function() {
          return Ba;
        },
        getBaseLang: function() {
          return gr;
        },
        getCheckMessage: function() {
          return $2;
        },
        getCheckOption: function() {
          return On;
        },
        getEnvironmentData: function() {
          return Yt;
        },
        getFlattenedTree: function() {
          return Io;
        },
        getFrameContexts: function() {
          return lw;
        },
        getFriendlyUriEnd: function() {
          return gl;
        },
        getNodeAttributes: function() {
          return Ia;
        },
        getNodeFromTree: function() {
          return le;
        },
        getPreloadConfig: function() {
          return d1;
        },
        getRootNode: function() {
          return Jr;
        },
        getRule: function() {
          return Kd;
        },
        getScroll: function() {
          return Pt;
        },
        getScrollState: function() {
          return dw;
        },
        getSelector: function() {
          return si;
        },
        getSelectorData: function() {
          return La;
        },
        getShadowSelector: function() {
          return oi;
        },
        getStandards: function() {
          return fw;
        },
        getStyleSheetFactory: function() {
          return Qd;
        },
        getXpath: function() {
          return xl;
        },
        injectStyle: function() {
          return hw;
        },
        isHidden: function() {
          return vw;
        },
        isHtmlElement: function() {
          return Vo;
        },
        isNodeInContext: function() {
          return Ho;
        },
        isShadowRoot: function() {
          return Ga;
        },
        isValidLang: function() {
          return Pn;
        },
        isXHTML: function() {
          return Pa;
        },
        matchAncestry: function() {
          return $o;
        },
        matches: function() {
          return fi;
        },
        matchesExpression: function() {
          return Dr;
        },
        matchesSelector: function() {
          return wr;
        },
        memoize: function() {
          return Le;
        },
        mergeResults: function() {
          return Ua;
        },
        nodeLookup: function() {
          return De;
        },
        nodeSerializer: function() {
          return dt;
        },
        nodeSorter: function() {
          return Uo;
        },
        parseCrossOriginStylesheet: function() {
          return Wo;
        },
        parseSameOriginStylesheet: function() {
          return r1;
        },
        parseStylesheet: function() {
          return Go;
        },
        performanceTimer: function() {
          return Be;
        },
        pollyfillElementsFromPoint: function() {
          return a1;
        },
        preload: function() {
          return s1;
        },
        preloadCssom: function() {
          return i1;
        },
        preloadMedia: function() {
          return l1;
        },
        processMessage: function() {
          return qo;
        },
        publishMetaData: function() {
          return Nn;
        },
        querySelectorAll: function() {
          return st;
        },
        querySelectorAllFilter: function() {
          return Rt;
        },
        queue: function() {
          return xt;
        },
        respondable: function() {
          return bt;
        },
        ruleShouldRun: function() {
          return m1;
        },
        select: function() {
          return Yo;
        },
        sendCommandToFrame: function() {
          return ql;
        },
        setScrollState: function() {
          return Ww;
        },
        shadowSelect: function() {
          return Yw;
        },
        shadowSelectAll: function() {
          return Xo;
        },
        shouldPreload: function() {
          return c1;
        },
        toArray: function() {
          return vl;
        },
        tokenList: function() {
          return Ye;
        },
        uniqueArray: function() {
          return ga;
        },
        uuid: function() {
          return yv;
        },
        validInputTypes: function() {
          return In;
        },
        validLangs: function() {
          return w1;
        }
      });
      function xh(e, t, r) {
        t = t.slice(), r && t.push(r);
        var a = t.map(function(n) {
          return e.indexOf(n);
        }).sort();
        return e[a.pop()];
      }
      var Ma = xh, Eh = se.CANTTELL_PRIO, Ch = se.FAIL_PRIO, Na = [];
      Na[se.PASS_PRIO] = !0, Na[se.CANTTELL_PRIO] = null, Na[se.FAIL_PRIO] = !1;
      var cl = ["any", "all", "none"];
      function dl(e, t) {
        return cl.reduce(function(r, a) {
          return r[a] = (e[a] || []).map(function(n) {
            return t(n, a);
          }), r;
        }, {});
      }
      function Ah(e) {
        var t = Object.assign({}, e);
        dl(t, function(n, i) {
          var o = typeof n.result > "u" ? -1 : Na.indexOf(n.result);
          n.priority = o !== -1 ? o : se.CANTTELL_PRIO, i === "none" && (n.priority === se.PASS_PRIO ? n.priority = se.FAIL_PRIO : n.priority === se.FAIL_PRIO && (n.priority = se.PASS_PRIO));
        });
        var r = {
          all: t.all.reduce(function(n, i) {
            return Math.max(n, i.priority);
          }, 0),
          none: t.none.reduce(function(n, i) {
            return Math.max(n, i.priority);
          }, 0),
          any: t.any.reduce(function(n, i) {
            return Math.min(n, i.priority);
          }, 4) % 4
        };
        t.priority = Math.max(r.all, r.none, r.any);
        var a = [];
        return cl.forEach(function(n) {
          t[n] = t[n].filter(function(i) {
            return i.priority === t.priority && i.priority === r[n];
          }), t[n].forEach(function(i) {
            return a.push(i.impact);
          });
        }), [Eh, Ch].includes(t.priority) ? t.impact = Ma(se.impact, a) : t.impact = null, dl(t, function(n) {
          delete n.result, delete n.priority;
        }), t.result = se.results[t.priority], delete t.priority, t;
      }
      var fl = Ah;
      function Hr(e) {
        var t = y._audit.rules.find(function(r) {
          var a = r.id;
          return a === e.id;
        });
        return t && t.impact && e.nodes.forEach(function(r) {
          ["any", "all", "none"].forEach(function(a) {
            (r[a] || []).forEach(function(n) {
              n.impact = t.impact;
            });
          });
        }), Object.assign(e, pl(e.nodes)), delete e.nodes, e;
      }
      function Fh(e) {
        var t = {};
        if (e = e.map(function(i) {
          if (i.any && i.all && i.none)
            return fl(i);
          if (Array.isArray(i.node))
            return Hr(i);
          throw new TypeError("Invalid Result type");
        }), e && e.length) {
          var r = e.map(function(i) {
            return i.result;
          });
          t.result = Ma(se.results, r, t.result);
        } else
          t.result = "inapplicable";
        se.resultGroups.forEach(function(i) {
          return t[i] = [];
        }), e.forEach(function(i) {
          var o = se.resultGroupMap[i.result];
          t[o].push(i);
        });
        var a = se.FAIL_GROUP;
        if (t[a].length === 0 && (a = se.CANTTELL_GROUP), t[a].length > 0) {
          var n = t[a].map(function(i) {
            return i.impact;
          });
          t.impact = Ma(se.impact, n) || null;
        } else
          t.impact = null;
        return t;
      }
      var pl = Fh;
      function ii(e, t, r) {
        var a = Object.assign({}, t);
        a.nodes = (a[r] || []).concat(), se.resultGroups.forEach(function(n) {
          delete a[n];
        }), e[r].push(a);
      }
      function Th(e) {
        var t = {};
        return se.resultGroups.forEach(function(r) {
          return t[r] = [];
        }), e.forEach(function(r) {
          r.error ? ii(t, r, se.CANTTELL_GROUP) : r.result === se.NA ? ii(t, r, se.NA_GROUP) : se.resultGroups.forEach(function(a) {
            Array.isArray(r[a]) && r[a].length > 0 && ii(t, r, a);
          });
        }), t;
      }
      var ml = Th;
      function hl(e, t, r) {
        var a = _.getComputedStyle(e, null);
        if (!a)
          return !1;
        for (var n = 0; n < t.length; ++n) {
          var i = t[n];
          if (a.getPropertyValue(i.property) === i.value)
            return !0;
        }
        return !e.parentNode || e.nodeName.toUpperCase() === r.toUpperCase() ? !1 : hl(e.parentNode, t, r);
      }
      var Rh = hl;
      function kh(e, t) {
        if (!e)
          throw new Error(t);
      }
      var me = kh;
      function Sh(e) {
        return Array.prototype.slice.call(e);
      }
      var vl = Sh;
      function Oh(e) {
        for (var t = String(e), r = t.length, a = -1, n, i = "", o = t.charCodeAt(0); ++a < r; ) {
          if (n = t.charCodeAt(a), n == 0) {
            i += "�";
            continue;
          }
          if (n >= 1 && n <= 31 || n == 127 || a == 0 && n >= 48 && n <= 57 || a == 1 && n >= 48 && n <= 57 && o == 45) {
            i += "\\" + n.toString(16) + " ";
            continue;
          }
          if (a == 0 && r == 1 && n == 45) {
            i += "\\" + t.charAt(a);
            continue;
          }
          if (n >= 128 || n == 45 || n == 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
            i += t.charAt(a);
            continue;
          }
          i += "\\" + t.charAt(a);
        }
        return i;
      }
      var Re = Oh;
      function Mh() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return e.length !== 0 && (e.match(/[0-9]/g) || "").length >= e.length / 2;
      }
      function $r(e, t) {
        return [e.substring(0, t), e.substring(t)];
      }
      function Ur(e) {
        return e.replace(/\s+$/, "");
      }
      function Nh(e) {
        var t = e, r = "", a = "", n = "", i = "", o = "", u = "";
        if (e.includes("#")) {
          var l = $r(e, e.indexOf("#")), s = V(l, 2);
          e = s[0], u = s[1];
        }
        if (e.includes("?")) {
          var c = $r(e, e.indexOf("?")), d = V(c, 2);
          e = d[0], o = d[1];
        }
        if (e.includes("://")) {
          var f = e.split("://"), p = V(f, 2);
          r = p[0], e = p[1];
          var m = $r(e, e.indexOf("/")), h = V(m, 2);
          a = h[0], e = h[1];
        } else if (e.substr(0, 2) === "//") {
          e = e.substr(2);
          var b = $r(e, e.indexOf("/")), v = V(b, 2);
          a = v[0], e = v[1];
        }
        if (a.substr(0, 4) === "www." && (a = a.substr(4)), a && a.includes(":")) {
          var g = $r(a, a.indexOf(":")), w = V(g, 2);
          a = w[0], n = w[1];
        }
        return i = e, {
          original: t,
          protocol: r,
          domain: a,
          port: n,
          path: i,
          query: o,
          hash: u
        };
      }
      function Ih() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e.length <= 1 || e.substr(0, 5) === "data:" || e.substr(0, 11) === "javascript:" || e.includes("?"))) {
          var r = t.currentDomain, a = t.maxLength, n = a === void 0 ? 25 : a, i = Nh(e), o = i.path, u = i.domain, l = i.hash, s = o.substr(o.substr(0, o.length - 2).lastIndexOf("/") + 1);
          if (l)
            return s && (s + l).length <= n ? Ur(s + l) : s.length < 2 && l.length > 2 && l.length <= n ? Ur(l) : void 0;
          if (u && u.length < n && o.length <= 1 || o === "/" + s && u && r && u !== r && (u + o).length <= n)
            return Ur(u + o);
          var c = s.lastIndexOf(".");
          if ((c === -1 || c > 1) && (c !== -1 || s.length > 2) && s.length <= n && !s.match(/index(\.[a-zA-Z]{2-4})?/) && !Mh(s))
            return Ur(s);
        }
      }
      var gl = Ih;
      function Ph(e) {
        return e.attributes instanceof _.NamedNodeMap ? e.attributes : e.cloneNode(!1).attributes;
      }
      var Ia = Ph, Lh = function() {
        var e;
        function t(r) {
          var a, n, i = ["matches", "matchesSelector", "mozMatchesSelector", "webkitMatchesSelector", "msMatchesSelector"], o = i.length;
          for (a = 0; a < o; a++)
            if (n = i[a], r[n])
              return n;
        }
        return function(r, a) {
          return (!e || !r[e]) && (e = t(r)), r[e] ? r[e](a) : !1;
        };
      }(), wr = Lh, Bh = vt($u());
      y._memoizedFns = [];
      function qh(e) {
        var t = (0, Bh.default)(e);
        return y._memoizedFns.push(t), t;
      }
      var Le = qh, jh = Le(function(e) {
        return e != null && e.createElement ? e.createElement("A").localName === "A" : !1;
      }), Pa = jh;
      function oi(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!t)
          return "";
        var a = t.getRootNode && t.getRootNode() || M;
        if (a.nodeType !== 11)
          return e(t, r, a);
        for (var n = []; a.nodeType === 11; ) {
          if (!a.host)
            return "";
          n.unshift({
            elm: t,
            doc: a
          }), t = a.host, a = t.getRootNode();
        }
        return n.unshift({
          elm: t,
          doc: a
        }), n.map(function(i) {
          return e(i.elm, r, i.doc);
        });
      }
      var zh = ["class", "style", "id", "selected", "checked", "disabled", "tabindex", "aria-checked", "aria-selected", "aria-invalid", "aria-activedescendant", "aria-busy", "aria-disabled", "aria-expanded", "aria-grabbed", "aria-pressed", "aria-valuenow", "xmlns"], Vh = 31, Hh = /([\\"])/g, $h = /(\r\n|\r|\n)/g;
      function ui(e) {
        return e.replace(Hh, "\\$1").replace($h, "\\a ");
      }
      function bl(e, t) {
        var r = t.name, a;
        if (r.indexOf("href") !== -1 || r.indexOf("src") !== -1) {
          var n = gl(e.getAttribute(r));
          n ? a = Re(t.name) + '$="' + ui(n) + '"' : a = Re(t.name) + '="' + ui(e.getAttribute(r)) + '"';
        } else
          a = Re(r) + '="' + ui(t.value) + '"';
        return a;
      }
      function li(e, t) {
        return e.count < t.count ? -1 : e.count === t.count ? 0 : 1;
      }
      function yl(e) {
        return !zh.includes(e.name) && e.name.indexOf(":") === -1 && (!e.value || e.value.length < Vh);
      }
      function La(e) {
        var t = {
          classes: {},
          tags: {},
          attributes: {}
        };
        e = Array.isArray(e) ? e : [e];
        for (var r = e.slice(), a = [], n = function() {
          var o = r.pop(), u = o.actualNode;
          if (u.querySelectorAll) {
            var l = u.nodeName;
            t.tags[l] ? t.tags[l]++ : t.tags[l] = 1, u.classList && Array.from(u.classList).forEach(function(s) {
              var c = Re(s);
              t.classes[c] ? t.classes[c]++ : t.classes[c] = 1;
            }), u.hasAttributes() && Array.from(Ia(u)).filter(yl).forEach(function(s) {
              var c = bl(u, s);
              c && (t.attributes[c] ? t.attributes[c]++ : t.attributes[c] = 1);
            });
          }
          for (o.children.length && (a.push(r), r = o.children.slice()); !r.length && a.length; )
            r = a.pop();
        }; r.length; )
          n();
        return t;
      }
      function Uh(e, t) {
        var r = [], a = t.classes, n = t.tags;
        return e.classList && Array.from(e.classList).forEach(function(i) {
          var o = Re(i);
          a[o] < n[e.nodeName] && r.push({
            name: o,
            count: a[o],
            species: "class"
          });
        }), r.sort(li);
      }
      function Gh(e, t) {
        var r = e.parentNode && Array.from(e.parentNode.children || "") || [], a = r.find(function(i) {
          return i !== e && wr(i, t);
        });
        if (a) {
          var n = 1 + r.indexOf(e);
          return ":nth-child(" + n + ")";
        } else
          return "";
      }
      function Wh(e) {
        if (e.getAttribute("id")) {
          var t = e.getRootNode && e.getRootNode() || M, r = "#" + Re(e.getAttribute("id") || "");
          if (!r.match(/player_uid_/) && t.querySelectorAll(r).length === 1)
            return r;
        }
      }
      function wl(e) {
        var t = Pa(M);
        return Re(t ? e.localName : e.nodeName.toLowerCase());
      }
      function Yh(e, t) {
        var r = [], a = t.attributes, n = t.tags;
        return e.hasAttributes() && Array.from(Ia(e)).filter(yl).forEach(function(i) {
          var o = bl(e, i);
          o && a[o] < n[e.nodeName] && r.push({
            name: o,
            count: a[o],
            species: "attribute"
          });
        }), r.sort(li);
      }
      function Xh(e, t) {
        var r = "", a, n = Uh(e, t), i = Yh(e, t);
        return n.length && n[0].count === 1 ? a = [n[0]] : i.length && i[0].count === 1 ? (a = [i[0]], r = wl(e)) : (a = n.concat(i), a.sort(li), a = a.slice(0, 3), a.some(function(o) {
          return o.species === "class";
        }) ? a.sort(function(o, u) {
          return o.species !== u.species && o.species === "class" ? -1 : o.species === u.species ? 0 : 1;
        }) : r = wl(e)), r += a.reduce(function(o, u) {
          switch (u.species) {
            case "class":
              return o + "." + u.name;
            case "attribute":
              return o + "[" + u.name + "]";
          }
          return o;
        }, "");
      }
      function Kh(e, t, r) {
        if (!y._selectorData)
          throw new Error("Expect axe._selectorData to be set up");
        var a = t.toRoot, n = a === void 0 ? !1 : a, i, o;
        do {
          var u = Wh(e);
          u || (u = Xh(e, y._selectorData), u += Gh(e, u)), i ? i = u + " > " + i : i = u, o ? o = o.filter(function(l) {
            return wr(l, i);
          }) : o = Array.from(r.querySelectorAll(i)), e = e.parentElement;
        } while ((o.length > 1 || n) && e && e.nodeType !== 11);
        return o.length === 1 ? i : i.indexOf(" > ") !== -1 ? ":root" + i.substring(i.indexOf(" > ")) : ":root";
      }
      function si(e, t) {
        return oi(Kh, e, t);
      }
      function Dl(e) {
        var t = e.nodeName.toLowerCase(), r = e.parentElement;
        if (!r)
          return t;
        var a = "";
        if (t !== "head" && t !== "body" && r.children.length > 1) {
          var n = Array.prototype.indexOf.call(r.children, e) + 1;
          a = ":nth-child(".concat(n, ")");
        }
        return Dl(r) + " > " + t + a;
      }
      function Ba(e, t) {
        return oi(Dl, e, t);
      }
      function _l(e, t) {
        var r, a;
        if (!e)
          return [];
        if (!t && e.nodeType === 9)
          return t = [{
            str: "html"
          }], t;
        if (t = t || [], e.parentNode && e.parentNode !== e && (t = _l(e.parentNode, t)), e.previousSibling) {
          a = 1, r = e.previousSibling;
          do
            r.nodeType === 1 && r.nodeName === e.nodeName && a++, r = r.previousSibling;
          while (r);
          a === 1 && (a = null);
        } else if (e.nextSibling) {
          r = e.nextSibling;
          do
            r.nodeType === 1 && r.nodeName === e.nodeName ? (a = 1, r = null) : (a = null, r = r.previousSibling);
          while (r);
        }
        if (e.nodeType === 1) {
          var n = {};
          n.str = e.nodeName.toLowerCase();
          var i = e.getAttribute && Re(e.getAttribute("id"));
          i && e.ownerDocument.querySelectorAll("#" + i).length === 1 && (n.id = e.getAttribute("id")), a > 1 && (n.count = a), t.push(n);
        }
        return t;
      }
      function Zh(e) {
        return e.reduce(function(t, r) {
          return r.id ? "/".concat(r.str, "[@id='").concat(r.id, "']") : t + "/".concat(r.str) + (r.count > 0 ? "[".concat(r.count, "]") : "");
        }, "");
      }
      function Jh(e) {
        var t = _l(e);
        return Zh(t);
      }
      var xl = Jh, Gr = {}, Qh = {
        set: function(t, r) {
          ev(t), Gr[t] = r;
        },
        get: function(t, r) {
          if (tv(r), t in Gr)
            return Gr[t];
          if (typeof r == "function") {
            var a = r();
            return me(a !== void 0, "Cache creator function should not return undefined"), this.set(t, a), Gr[t];
          }
        },
        clear: function() {
          Gr = {};
        }
      };
      function ev(e) {
        me(typeof e == "string", "key must be a string, " + k(e) + " given"), me(e !== "", "key must not be empty");
      }
      function tv(e) {
        me(typeof e == "function" || typeof e > "u", "creator must be a function or undefined, " + k(e) + " given");
      }
      var ue = Qh;
      function rv(e, t) {
        var r = t || e;
        return ue.get("nodeMap") ? ue.get("nodeMap").get(r) : null;
      }
      var le = rv, El = "DqElm.RunOptions";
      function av(e, t) {
        if (t = t || 300, e.length > t) {
          var r = e.indexOf(">");
          e = e.substring(0, r + 1);
        }
        return e;
      }
      function nv(e) {
        if (!(e != null && e.outerHTML))
          return "";
        var t = e.outerHTML;
        return !t && typeof _.XMLSerializer == "function" && (t = new _.XMLSerializer().serializeToString(e)), av(t || "");
      }
      function ir(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!a) {
          var i;
          a = (i = ue.get(El)) !== null && i !== void 0 ? i : {};
        }
        if (this.spec = n, e instanceof Ve ? (this._virtualNode = e, this._element = e.actualNode) : (this._element = e, this._virtualNode = le(e)), this.fromFrame = ((t = this.spec.selector) === null || t === void 0 ? void 0 : t.length) > 1, this._includeElementInJson = a.elementRef, a.absolutePaths && (this._options = {
          toRoot: !0
        }), this.nodeIndexes = [], Array.isArray(this.spec.nodeIndexes) ? this.nodeIndexes = this.spec.nodeIndexes : typeof ((r = this._virtualNode) === null || r === void 0 ? void 0 : r.nodeIndex) == "number" && (this.nodeIndexes = [this._virtualNode.nodeIndex]), this.source = null, !y._audit.noHtml) {
          var o;
          this.source = (o = this.spec.source) !== null && o !== void 0 ? o : nv(this._element);
        }
      }
      ir.prototype = {
        get selector() {
          return this.spec.selector || [si(this.element, this._options)];
        },
        get ancestry() {
          return this.spec.ancestry || [Ba(this.element)];
        },
        get xpath() {
          return this.spec.xpath || [xl(this.element)];
        },
        get element() {
          return this._element;
        },
        toJSON: function() {
          var t = {
            selector: this.selector,
            source: this.source,
            xpath: this.xpath,
            ancestry: this.ancestry,
            nodeIndexes: this.nodeIndexes,
            fromFrame: this.fromFrame
          };
          return this._includeElementInJson && (t.element = this._element), t;
        }
      }, ir.fromFrame = function(t, r, a) {
        var n = ir.mergeSpecs(t, a);
        return new ir(a.element, r, n);
      }, ir.mergeSpecs = function(t, r) {
        return fe({}, t, {
          selector: [].concat(re(r.selector), re(t.selector)),
          ancestry: [].concat(re(r.ancestry), re(t.ancestry)),
          xpath: [].concat(re(r.xpath), re(t.xpath)),
          nodeIndexes: [].concat(re(r.nodeIndexes), re(t.nodeIndexes)),
          fromFrame: !0
        });
      }, ir.setRunOptions = function(t) {
        var r = t.elementRef, a = t.absolutePaths;
        ue.set(El, {
          elementRef: r,
          absolutePaths: a
        });
      };
      var Ot = ir;
      function iv(e, t, r, a) {
        return {
          isAsync: !1,
          async: function() {
            return this.isAsync = !0, function(i) {
              i instanceof Error ? a(i) : (e.result = i, r(e));
            };
          },
          data: function(i) {
            e.data = i;
          },
          relatedNodes: function(i) {
            _.Node && (i instanceof _.Node || i instanceof Ve ? i = [i] : i = vl(i), e.relatedNodes = [], i.forEach(function(o) {
              if (o instanceof Ve && (o = o.actualNode), o instanceof _.Node) {
                var u = new Ot(o);
                e.relatedNodes.push(u);
              }
            }));
          }
        };
      }
      var ci = iv;
      function Mt(e) {
        return di(e, /* @__PURE__ */ new Map());
      }
      function di(e, t) {
        var r, a;
        if (e === null || k(e) !== "object" || (r = _) !== null && r !== void 0 && r.Node && e instanceof _.Node || (a = _) !== null && a !== void 0 && a.HTMLCollection && e instanceof _.HTMLCollection || "nodeName" in e && "nodeType" in e && "ownerDocument" in e)
          return e;
        if (t.has(e))
          return t.get(e);
        if (Array.isArray(e)) {
          var n = [];
          return t.set(e, n), e.forEach(function(u) {
            n.push(di(u, t));
          }), n;
        }
        var i = {};
        t.set(e, i);
        for (var o in e)
          i[o] = di(e[o], t);
        return i;
      }
      var ov = vt(Gu()), Wr = new ov.CssSelectorParser();
      Wr.registerSelectorPseudos("not"), Wr.registerSelectorPseudos("is"), Wr.registerNestingOperators(">"), Wr.registerAttrEqualityMods("^", "$", "*", "~");
      var Cl = Wr;
      function fi(e, t) {
        var r = qa(t);
        return r.some(function(a) {
          return Dr(e, a);
        });
      }
      function uv(e, t) {
        return e.props.nodeType === 1 && (t.tag === "*" || e.props.nodeName === t.tag);
      }
      function lv(e, t) {
        return !t.classes || t.classes.every(function(r) {
          return e.hasClass(r.value);
        });
      }
      function sv(e, t) {
        return !t.attributes || t.attributes.every(function(r) {
          var a = e.attr(r.key);
          return a !== null && r.test(a);
        });
      }
      function cv(e, t) {
        return !t.id || e.props.id === t.id;
      }
      function dv(e, t) {
        return !!(!t.pseudos || t.pseudos.every(function(r) {
          if (r.name === "not")
            return !r.expressions.some(function(a) {
              return Dr(e, a);
            });
          if (r.name === "is")
            return r.expressions.some(function(a) {
              return Dr(e, a);
            });
          throw new Error("the pseudo selector " + r.name + " has not yet been implemented");
        }));
      }
      function Al(e, t) {
        return uv(e, t) && lv(e, t) && sv(e, t) && cv(e, t) && dv(e, t);
      }
      var Yr = function() {
        var e = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g, t = "\\";
        return function(r) {
          return r.replace(e, t);
        };
      }(), pi = /\\/g;
      function fv(e) {
        if (e)
          return e.map(function(t) {
            var r = t.name.replace(pi, ""), a = (t.value || "").replace(pi, ""), n, i;
            switch (t.operator) {
              case "^=":
                i = new RegExp("^" + Yr(a));
                break;
              case "$=":
                i = new RegExp(Yr(a) + "$");
                break;
              case "~=":
                i = new RegExp("(^|\\s)" + Yr(a) + "(\\s|$)");
                break;
              case "|=":
                i = new RegExp("^" + Yr(a) + "(-|$)");
                break;
              case "=":
                n = function(u) {
                  return a === u;
                };
                break;
              case "*=":
                n = function(u) {
                  return u && u.includes(a);
                };
                break;
              case "!=":
                n = function(u) {
                  return a !== u;
                };
                break;
              default:
                n = function(u) {
                  return u !== null;
                };
            }
            return a === "" && /^[*$^]=$/.test(t.operator) && (n = function() {
              return !1;
            }), n || (n = function(u) {
              return u && i.test(u);
            }), {
              key: r,
              value: a,
              type: typeof t.value > "u" ? "attrExist" : "attrValue",
              test: n
            };
          });
      }
      function pv(e) {
        if (e)
          return e.map(function(t) {
            return t = t.replace(pi, ""), {
              value: t,
              regexp: new RegExp("(^|\\s)" + Yr(t) + "(\\s|$)")
            };
          });
      }
      function mv(e) {
        if (e)
          return e.map(function(t) {
            var r;
            return ["is", "not"].includes(t.name) && (r = t.value, r = r.selectors ? r.selectors : [r], r = Fl(r)), {
              name: t.name,
              expressions: r,
              value: t.value
            };
          });
      }
      function Fl(e) {
        return e.map(function(t) {
          for (var r = [], a = t.rule; a; )
            r.push({
              tag: a.tagName ? a.tagName.toLowerCase() : "*",
              combinator: a.nestingOperator ? a.nestingOperator : " ",
              id: a.id,
              attributes: fv(a.attrs),
              classes: pv(a.classNames),
              pseudos: mv(a.pseudos)
            }), a = a.rule;
          return r;
        });
      }
      function qa(e) {
        var t = Cl.parse(e);
        return t = t.selectors ? t.selectors : [t], Fl(t);
      }
      function Tl(e, t, r, a) {
        if (!e)
          return !1;
        for (var n = Array.isArray(t), i = n ? t[r] : t, o = Al(e, i); !o && a && e.parent; )
          e = e.parent, o = Al(e, i);
        if (r > 0) {
          if ([" ", ">"].includes(i.combinator) === !1)
            throw new Error("axe.utils.matchesExpression does not support the combinator: " + i.combinator);
          o = o && Tl(e.parent, t, r - 1, i.combinator === " ");
        }
        return o;
      }
      function Dr(e, t, r) {
        return Tl(e, t, t.length - 1, r);
      }
      function hv(e, t) {
        for (; e; ) {
          if (fi(e, t))
            return e;
          if (typeof e.parent > "u")
            throw new TypeError("Cannot resolve parent for non-DOM nodes");
          e = e.parent;
        }
        return null;
      }
      var at = hv;
      function ja() {
      }
      function mi(e) {
        if (typeof e != "function")
          throw new TypeError("Queue methods require functions as arguments");
      }
      function vv() {
        var e = [], t = 0, r = 0, a = ja, n = !1, i, o = function(p) {
          i = p, setTimeout(function() {
            i != null && nr("Uncaught error (of queue)", i);
          }, 1);
        }, u = o;
        function l(f) {
          return function(p) {
            e[f] = p, r -= 1, !r && a !== ja && (n = !0, a(e));
          };
        }
        function s(f) {
          return a = ja, u(f), e;
        }
        function c() {
          for (var f = e.length; t < f; t++) {
            var p = e[t];
            try {
              p.call(null, l(t), s);
            } catch (m) {
              s(m);
            }
          }
        }
        var d = {
          defer: function(p) {
            if (k(p) === "object" && p.then && p.catch) {
              var m = p;
              p = function(b, v) {
                m.then(b).catch(v);
              };
            }
            if (mi(p), i === void 0) {
              if (n)
                throw new Error("Queue already completed");
              return e.push(p), ++r, c(), d;
            }
          },
          then: function(p) {
            if (mi(p), a !== ja)
              throw new Error("queue `then` already set");
            return i || (a = p, r || (n = !0, a(e))), d;
          },
          catch: function(p) {
            if (mi(p), u !== o)
              throw new Error("queue `catch` already set");
            return i ? (p(i), i = null) : u = p, d;
          },
          abort: s
        };
        return d;
      }
      var xt = vv, _r, xr, hi = _.crypto || _.msCrypto;
      !xr && hi && hi.getRandomValues && (vi = new Uint8Array(16), xr = function() {
        return hi.getRandomValues(vi), vi;
      });
      var vi;
      xr || (gi = new Array(16), xr = function() {
        for (var t = 0, r; t < 16; t++)
          t & 3 || (r = Math.random() * 4294967296), gi[t] = r >>> ((t & 3) << 3) & 255;
        return gi;
      });
      for (var gi, Rl = typeof _.Buffer == "function" ? _.Buffer : Array, bi = [], kl = {}, Er = 0; Er < 256; Er++)
        bi[Er] = (Er + 256).toString(16).substr(1), kl[bi[Er]] = Er;
      function gv(e, t, r) {
        var a = t && r || 0, n = 0;
        for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(i) {
          n < 16 && (t[a + n++] = kl[i]);
        }); n < 16; )
          t[a + n++] = 0;
        return t;
      }
      function yi(e, t) {
        var r = t || 0, a = bi;
        return a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]];
      }
      var jt = xr(), bv = [jt[0] | 1, jt[1], jt[2], jt[3], jt[4], jt[5]], Sl = (jt[6] << 8 | jt[7]) & 16383, wi = 0, Di = 0;
      function Ol(e, t, r) {
        var a = t && r || 0, n = t || [];
        e = e || {};
        var i = e.clockseq != null ? e.clockseq : Sl, o = e.msecs != null ? e.msecs : (/* @__PURE__ */ new Date()).getTime(), u = e.nsecs != null ? e.nsecs : Di + 1, l = o - wi + (u - Di) / 1e4;
        if (l < 0 && e.clockseq == null && (i = i + 1 & 16383), (l < 0 || o > wi) && e.nsecs == null && (u = 0), u >= 1e4)
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        wi = o, Di = u, Sl = i, o += 122192928e5;
        var s = ((o & 268435455) * 1e4 + u) % 4294967296;
        n[a++] = s >>> 24 & 255, n[a++] = s >>> 16 & 255, n[a++] = s >>> 8 & 255, n[a++] = s & 255;
        var c = o / 4294967296 * 1e4 & 268435455;
        n[a++] = c >>> 8 & 255, n[a++] = c & 255, n[a++] = c >>> 24 & 15 | 16, n[a++] = c >>> 16 & 255, n[a++] = i >>> 8 | 128, n[a++] = i & 255;
        for (var d = e.node || bv, f = 0; f < 6; f++)
          n[a + f] = d[f];
        return t || yi(n);
      }
      function or(e, t, r) {
        var a = t && r || 0;
        typeof e == "string" && (t = e == "binary" ? new Rl(16) : null, e = null), e = e || {};
        var n = e.random || (e.rng || xr)();
        if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t)
          for (var i = 0; i < 16; i++)
            t[a + i] = n[i];
        return t || yi(n);
      }
      _r = or, _r.v1 = Ol, _r.v4 = or, _r.parse = gv, _r.unparse = yi, _r.BufferClass = Rl, y._uuid = Ol();
      var yv = or, wv = Object.freeze(["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);
      function Dv(e) {
        var t = e.topic, r = e.channelId, a = e.message, n = e.messageId, i = e.keepalive, o = {
          channelId: r,
          topic: t,
          messageId: n,
          keepalive: !!i,
          source: Ml()
        };
        return a instanceof Error ? o.error = {
          name: a.name,
          message: a.message,
          stack: a.stack
        } : o.payload = a, JSON.stringify(o);
      }
      function _v(e) {
        var t;
        try {
          t = JSON.parse(e);
        } catch {
          return;
        }
        if (xv(t)) {
          var r = t, a = r.topic, n = r.channelId, i = r.messageId, o = r.keepalive, u = k(t.error) === "object" ? Ev(t.error) : t.payload;
          return {
            topic: a,
            message: u,
            messageId: i,
            channelId: n,
            keepalive: !!o
          };
        }
      }
      function xv(e) {
        return e !== null && k(e) === "object" && typeof e.channelId == "string" && e.source === Ml();
      }
      function Ev(e) {
        var t = e.message || "Unknown error occurred", r = wv.includes(e.name) ? e.name : "Error", a = _[r] || Error;
        return e.stack && (t += `
` + e.stack.replace(e.message, "")), new a(t);
      }
      function Ml() {
        var e = "axeAPI", t = "";
        return typeof y < "u" && y._audit && y._audit.application && (e = y._audit.application), typeof y < "u" && (t = y.version), e + "." + t;
      }
      function _i(e) {
        Il(e), me(_.parent === e, "Source of the response must be the parent window.");
      }
      function Nl(e) {
        Il(e), me(e.parent === _, "Respondable target must be a frame in the current window");
      }
      function Il(e) {
        me(_ !== e, "Messages can not be sent to the same window.");
      }
      var za = {};
      function Cv(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        me(!za[e], "A replyHandler already exists for this message channel."), za[e] = {
          replyHandler: t,
          sendToParent: r
        };
      }
      function Av(e) {
        return za[e];
      }
      function Fv(e) {
        delete za[e];
      }
      var Va = [];
      function xi() {
        var e = "".concat(or(), ":").concat(or());
        return Va.includes(e) ? xi() : (Va.push(e), e);
      }
      function Tv(e) {
        return Va.includes(e) ? !1 : (Va.push(e), !0);
      }
      function Ei(e, t, r, a) {
        if (r ? _i(e) : Nl(e), t.message instanceof Error && !r)
          return y.log(t.message), !1;
        var n = Dv(fe({
          messageId: xi()
        }, t)), i = y._audit.allowedOrigins;
        return !i || !i.length ? !1 : (typeof a == "function" && Cv(t.channelId, a, r), i.forEach(function(o) {
          try {
            e.postMessage(n, o);
          } catch (u) {
            throw u instanceof e.DOMException ? new Error('allowedOrigins value "'.concat(o, '" is not a valid origin')) : u;
          }
        }), !0);
      }
      function Rv(e, t, r) {
        if (!e.parent !== _)
          return y.log(t);
        try {
          Ei(e, {
            topic: null,
            channelId: r,
            message: t,
            messageId: xi(),
            keepalive: !0
          }, !0);
        } catch (a) {
          return y.log(a);
        }
      }
      function Pl(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        return function(n, i, o) {
          var u = {
            channelId: t,
            message: n,
            keepalive: i
          };
          Ei(e, u, r, o);
        };
      }
      function kv(e) {
        var t = y._audit.allowedOrigins;
        return t && t.includes("*") || t.includes(e);
      }
      function Sv(e, t) {
        var r = e.origin, a = e.data, n = e.source;
        try {
          var i = _v(a) || {}, o = i.channelId, u = i.message, l = i.messageId;
          if (!kv(r) || !Tv(l))
            return;
          if (u instanceof Error && n.parent !== _)
            return y.log(u), !1;
          try {
            if (i.topic) {
              var s = Pl(n, o);
              _i(n), t(i, s);
            } else
              Ov(n, i);
          } catch (c) {
            Rv(n, c, o);
          }
        } catch (c) {
          return y.log(c), !1;
        }
      }
      function Ov(e, t) {
        var r = t.channelId, a = t.message, n = t.keepalive, i = Av(r) || {}, o = i.replyHandler, u = i.sendToParent;
        if (o) {
          u ? _i(e) : Nl(e);
          var l = Pl(e, r, u);
          !n && r && Fv(r);
          try {
            o(a, n, l);
          } catch (s) {
            y.log(s), l(s, n);
          }
        }
      }
      var Mv = {
        open: function(t) {
          if (typeof _.addEventListener == "function") {
            var r = function(n) {
              Sv(n, t);
            };
            return _.addEventListener("message", r, !1), function() {
              _.removeEventListener("message", r, !1);
            };
          }
        },
        post: function(t, r, a) {
          return typeof _.addEventListener != "function" ? !1 : Ei(t, r, !1, a);
        }
      };
      function Ll(e) {
        e.updateMessenger(Mv);
      }
      var Ha, Bl, Ci = {};
      function bt(e, t, r, a, n) {
        var i = {
          topic: t,
          message: r,
          channelId: "".concat(or(), ":").concat(or()),
          keepalive: a
        };
        return Bl(e, i, n);
      }
      function Nv(e, t) {
        var r = e.topic, a = e.message, n = e.keepalive, i = Ci[r];
        if (i)
          try {
            i(a, n, t);
          } catch (o) {
            y.log(o), t(o, n);
          }
      }
      bt.updateMessenger = function(t) {
        var r = t.open, a = t.post;
        me(typeof r == "function", "open callback must be a function"), me(typeof a == "function", "post callback must be a function"), Ha && Ha();
        var n = r(Nv);
        n ? (me(typeof n == "function", "open callback must return a cleanup function"), Ha = n) : Ha = null, Bl = a;
      }, bt.subscribe = function(t, r) {
        me(typeof r == "function", "Subscriber callback must be a function"), me(!Ci[t], "Topic ".concat(t, " is already registered to.")), Ci[t] = r;
      }, bt.isInFrame = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _;
        return !!t.frameElement;
      }, Ll(bt);
      function ql(e, t, r, a) {
        var n, i, o = e.contentWindow, u = (n = (i = t.options) === null || i === void 0 ? void 0 : i.pingWaitTime) !== null && n !== void 0 ? n : 500;
        if (!o) {
          nr("Frame does not have a content window", e), r(null);
          return;
        }
        if (u === 0) {
          jl(e, t, r, a);
          return;
        }
        var l = setTimeout(function() {
          l = setTimeout(function() {
            t.debug ? a(zl("No response from frame", e)) : r(null);
          }, 0);
        }, u);
        bt(o, "axe.ping", null, void 0, function() {
          clearTimeout(l), jl(e, t, r, a);
        });
      }
      function jl(e, t, r, a) {
        var n, i, o = (n = (i = t.options) === null || i === void 0 ? void 0 : i.frameWaitTime) !== null && n !== void 0 ? n : 6e4, u = e.contentWindow, l = setTimeout(function() {
          a(zl("Axe in frame timed out", e));
        }, o);
        bt(u, "axe.start", t, void 0, function(s) {
          clearTimeout(l), s instanceof Error ? a(s) : r(s);
        });
      }
      function zl(e, t) {
        var r;
        return y._tree && (r = si(t)), new Error(e + ": " + (r || t));
      }
      var Xr = null, Kr = {
        update: function(t) {
          me(k(t) === "object", "serializer must be an object"), Xr = t;
        },
        toSpec: function(t) {
          return Kr.dqElmToSpec(new Ot(t));
        },
        dqElmToSpec: function(t, r) {
          var a;
          return t instanceof Ot ? (r && (t = Iv(t, r)), typeof ((a = Xr) === null || a === void 0 ? void 0 : a.toSpec) == "function" ? Xr.toSpec(t) : t.toJSON()) : t;
        },
        mergeSpecs: function(t, r) {
          var a;
          return typeof ((a = Xr) === null || a === void 0 ? void 0 : a.mergeSpecs) == "function" ? Xr.mergeSpecs(t, r) : Ot.mergeSpecs(t, r);
        },
        mapRawResults: function(t) {
          return t.map(function(r) {
            return fe({}, r, {
              nodes: Kr.mapRawNodeResults(r.nodes)
            });
          });
        },
        mapRawNodeResults: function(t) {
          return t == null ? void 0 : t.map(function(r) {
            var a = r.node, n = Pe(r, zf);
            n.node = Kr.dqElmToSpec(a);
            for (var i = 0, o = ["any", "all", "none"]; i < o.length; i++) {
              var u = o[i];
              n[u] = n[u].map(function(l) {
                var s = l.relatedNodes, c = Pe(l, Vf);
                return c.relatedNodes = s.map(Kr.dqElmToSpec), c;
              });
            }
            return n;
          });
        }
      }, dt = Kr;
      function Iv(e, t) {
        var r = e.fromFrame, a = t.ancestry, n = t.xpath, i = t.selectors !== !1 || r;
        return e = new Ot(e.element, t, {
          source: e.source,
          nodeIndexes: e.nodeIndexes,
          selector: i ? e.selector : [":root"],
          ancestry: a ? e.ancestry : [":root"],
          xpath: n ? e.xpath : "/"
        }), e.fromFrame = r, e;
      }
      function Pv(e) {
        var t = [];
        return t.concat(e.any || []).concat(e.all || []).concat(e.none || []);
      }
      var $a = Pv;
      function Lv(e, t, r) {
        if (Array.isArray(e))
          return e.find(function(a) {
            return a !== null && k(a) === "object" && Object.hasOwn(a, t) && a[t] === r;
          });
      }
      var Zr = Lv;
      function Bv(e, t, r) {
        e.forEach(function(a) {
          a.node = dt.mergeSpecs(a.node, r);
          var n = $a(a);
          n.forEach(function(i) {
            i.relatedNodes = i.relatedNodes.map(function(o) {
              return dt.mergeSpecs(o, r);
            });
          });
        });
      }
      function qv(e, t) {
        for (var r = t[0].node, a = 0; a < e.length; a++) {
          var n = e[a].node, i = Vl(n.nodeIndexes, r.nodeIndexes);
          if (i > 0 || i === 0 && r.selector.length < n.selector.length) {
            e.splice.apply(e, [a, 0].concat(re(t)));
            return;
          }
        }
        e.push.apply(e, re(t));
      }
      function jv(e) {
        return !e || !e.results ? null : Array.isArray(e.results) ? e.results.length ? e.results : null : [e.results];
      }
      function zv(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = jv(a);
          if (!(!n || !n.length)) {
            var i = Vv(a);
            n.forEach(function(o) {
              o.nodes && i && Bv(o.nodes, t, i);
              var u = Zr(r, "id", o.id);
              u ? o.nodes.length && qv(u.nodes, o.nodes) : r.push(o);
            });
          }
        }), r.forEach(function(a) {
          a.nodes && a.nodes.sort(function(n, i) {
            return Vl(n.node.nodeIndexes, i.node.nodeIndexes);
          });
        }), r;
      }
      function Vl() {
        for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = Math.max(e == null ? void 0 : e.length, t == null ? void 0 : t.length), a = 0; a < r; a++) {
          var n = e == null ? void 0 : e[a], i = t == null ? void 0 : t[a];
          if (typeof n != "number" || isNaN(n))
            return a === 0 ? 1 : -1;
          if (typeof i != "number" || isNaN(i))
            return a === 0 ? -1 : 1;
          if (n !== i)
            return n - i;
        }
        return 0;
      }
      var Ua = zv;
      function Vv(e) {
        return e.frameElement ? dt.toSpec(e.frameElement) : e.frameSpec ? e.frameSpec : null;
      }
      function Hl(e, t, r, a, n, i) {
        t = fe({}, t, {
          elementRef: !1
        });
        var o = xt(), u = e.frames;
        u.forEach(function(l) {
          var s = l.node, c = Pe(l, Hf);
          o.defer(function(d, f) {
            var p = {
              options: t,
              command: r,
              parameter: a,
              context: c
            };
            function m(h) {
              return d(h ? {
                results: h,
                frameElement: s
              } : null);
            }
            ql(s, p, m, f);
          });
        }), o.then(function(l) {
          n(Ua(l, t));
        }).catch(i);
      }
      function ur(e, t) {
        if (!e.shadowId && !t.shadowId && e.actualNode && typeof e.actualNode.contains == "function")
          return e.actualNode.contains(t.actualNode);
        do {
          if (e === t)
            return !0;
          if (t.nodeIndex < e.nodeIndex)
            return !1;
          t = t.parent;
        } while (t);
        return !1;
      }
      function $l() {
        for (var e = {}, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
          r[a] = arguments[a];
        return r.forEach(function(n) {
          if (!(!n || k(n) !== "object" || Array.isArray(n)))
            for (var i = 0, o = Object.keys(n); i < o.length; i++) {
              var u = o[i];
              !e.hasOwnProperty(u) || k(n[u]) !== "object" || Array.isArray(e[u]) ? e[u] = n[u] : e[u] = $l(e[u], n[u]);
            }
        }), e;
      }
      var Ai = $l;
      function Hv(e, t) {
        Object.assign(e, t), Object.keys(t).filter(function(r) {
          return typeof t[r] == "function";
        }).forEach(function(r) {
          e[r] = null;
          try {
            e[r] = t[r](e);
          } catch {
          }
        });
      }
      var Fi = Hv, $v = ["article", "aside", "blockquote", "body", "div", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "main", "nav", "p", "section", "span"];
      function Uv(e) {
        if (e.shadowRoot) {
          var t = e.nodeName.toLowerCase();
          if ($v.includes(t) || /^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))
            return !0;
        }
        return !1;
      }
      var Ga = Uv, Ti = {};
      ht(Ti, {
        createGrid: function() {
          return sr;
        },
        findElmsInContext: function() {
          return Ul;
        },
        findNearbyElms: function() {
          return en;
        },
        findUp: function() {
          return Ar;
        },
        findUpVirtual: function() {
          return Cr;
        },
        focusDisabled: function() {
          return Li;
        },
        getComposedParent: function() {
          return He;
        },
        getElementByReference: function() {
          return qi;
        },
        getElementCoordinates: function() {
          return ki;
        },
        getElementStack: function() {
          return Cs;
        },
        getModalDialog: function() {
          return ws;
        },
        getOverflowHiddenAncestors: function() {
          return Wa;
        },
        getRootNode: function() {
          return We;
        },
        getScrollOffset: function() {
          return us;
        },
        getTabbableElements: function() {
          return As;
        },
        getTargetRects: function() {
          return rn;
        },
        getTargetSize: function() {
          return Fs;
        },
        getTextElementStack: function() {
          return ao;
        },
        getViewportSize: function() {
          return Ya;
        },
        getVisibleChildTextRects: function() {
          return ro;
        },
        hasContent: function() {
          return sn;
        },
        hasContentVirtual: function() {
          return oa;
        },
        hasLangText: function() {
          return io;
        },
        idrefs: function() {
          return Et;
        },
        insertedIntoFocusOrder: function() {
          return vc;
        },
        isCurrentPageLink: function() {
          return Bi;
        },
        isFocusable: function() {
          return ke;
        },
        isHTML5: function() {
          return yc;
        },
        isHiddenForEveryone: function() {
          return zt;
        },
        isHiddenWithCSS: function() {
          return my;
        },
        isInTabOrder: function() {
          return yt;
        },
        isInTextBlock: function() {
          return oo;
        },
        isInert: function() {
          return tn;
        },
        isModalOpen: function() {
          return ua;
        },
        isMultiline: function() {
          return _c;
        },
        isNativelyFocusable: function() {
          return Vi;
        },
        isNode: function() {
          return _y;
        },
        isOffscreen: function() {
          return Xa;
        },
        isOpaque: function() {
          return b2;
        },
        isSkipLink: function() {
          return ko;
        },
        isVisible: function() {
          return E2;
        },
        isVisibleOnScreen: function() {
          return nt;
        },
        isVisibleToScreenReaders: function() {
          return Fe;
        },
        isVisualContent: function() {
          return no;
        },
        reduceToElementsBelowFloating: function() {
          return Od;
        },
        shadowElementsFromPoint: function() {
          return F2;
        },
        urlPropsFromAttribute: function() {
          return M2;
        },
        visuallyContains: function() {
          return Md;
        },
        visuallyOverlaps: function() {
          return So;
        },
        visuallySort: function() {
          return ji;
        }
      });
      function Gv(e) {
        var t = e.getRootNode && e.getRootNode() || M;
        return t === e && (t = M), t;
      }
      var Jr = Gv, We = Jr;
      function Wv(e) {
        var t = e.context, r = e.value, a = e.attr, n = e.elm, i = n === void 0 ? "" : n, o, u = Re(r);
        return t.nodeType === 9 || t.nodeType === 11 ? o = t : o = We(t), Array.from(o.querySelectorAll(i + "[" + a + "=" + u + "]"));
      }
      var Ul = Wv;
      function Yv(e, t) {
        var r;
        if (r = e.actualNode, !e.shadowId && typeof e.actualNode.closest == "function") {
          var a = e.actualNode.closest(t);
          return a || null;
        }
        do
          r = r.assignedSlot ? r.assignedSlot : r.parentNode, r && r.nodeType === 11 && (r = r.host);
        while (r && !wr(r, t) && r !== M.documentElement);
        return !r || !wr(r, t) ? null : r;
      }
      var Cr = Yv;
      function Xv(e, t) {
        return Cr(le(e), t);
      }
      var Ar = Xv;
      function Gl(e, t) {
        return (e.left | 0) < (t.right | 0) && (e.right | 0) > (t.left | 0) && (e.top | 0) < (t.bottom | 0) && (e.bottom | 0) > (t.top | 0);
      }
      var Wl = Le(function(t) {
        var r = [];
        if (!t)
          return r;
        var a = t.getComputedStylePropertyValue("overflow");
        return a === "hidden" && r.push(t), r.concat(Wl(t.parent));
      }), Wa = Wl, Kv = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, Zv = /(\w+)\((\d+)/;
      function Yl(e) {
        return ["style", "script", "noscript", "template"].includes(e.props.nodeName);
      }
      function Xl(e) {
        return e.props.nodeName === "area" ? !1 : e.getComputedStylePropertyValue("display") === "none";
      }
      function Kl(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        return !r && ["hidden", "collapse"].includes(e.getComputedStylePropertyValue("visibility"));
      }
      function Zl(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        return !!r && e.getComputedStylePropertyValue("content-visibility") === "hidden";
      }
      function Jl(e) {
        return e.attr("aria-hidden") === "true";
      }
      function Ql(e) {
        return e.getComputedStylePropertyValue("opacity") === "0";
      }
      function es(e) {
        var t = Pt(e.actualNode), r = parseInt(e.getComputedStylePropertyValue("height")), a = parseInt(e.getComputedStylePropertyValue("width"));
        return !!t && (r === 0 || a === 0);
      }
      function ts(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        if (r)
          return !1;
        var a = e.boundingClientRect, n = Wa(e);
        return n.length ? n.some(function(i) {
          var o = i.boundingClientRect;
          return o.width < 2 || o.height < 2 ? !0 : !Gl(a, o);
        }) : !1;
      }
      function rs(e) {
        var t = e.getComputedStylePropertyValue("clip").match(Kv), r = e.getComputedStylePropertyValue("clip-path").match(Zv);
        if (t && t.length === 5) {
          var a = e.getComputedStylePropertyValue("position");
          if (["fixed", "absolute"].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1], i = parseInt(r[2], 10);
          switch (n) {
            case "inset":
              return i >= 50;
            case "circle":
              return i === 0;
          }
        }
        return !1;
      }
      function Ri(e, t) {
        var r = at(e, "map");
        if (!r)
          return !0;
        var a = r.attr("name");
        if (!a)
          return !0;
        var n = Jr(e.actualNode);
        if (!n || n.nodeType !== 9)
          return !0;
        var i = st(y._tree, 'img[usemap="#'.concat(Re(a), '"]'));
        return !i || !i.length ? !0 : i.some(function(o) {
          return !t(o);
        });
      }
      function as(e) {
        var t;
        if (((t = e.parent) === null || t === void 0 ? void 0 : t.props.nodeName) !== "details")
          return !1;
        if (e.props.nodeName === "summary") {
          var r = e.parent.children.find(function(a) {
            return a.props.nodeName === "summary";
          });
          if (r === e)
            return !1;
        }
        return !e.parent.hasAttr("open");
      }
      var Jv = [Xl, Kl, Zl, as];
      function zt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipAncestors, a = t.isAncestor, n = a === void 0 ? !1 : a;
        return e = De(e).vNode, r ? ns(e, n) : is(e, n);
      }
      var ns = Le(function(t, r) {
        return Yl(t) ? !0 : t.actualNode ? !!(Jv.some(function(a) {
          return a(t, {
            isAncestor: r
          });
        }) || !t.actualNode.isConnected) : !1;
      }), is = Le(function(t, r) {
        return ns(t, r) ? !0 : t.parent ? is(t.parent, !0) : !1;
      });
      function os(e) {
        if (e.assignedSlot)
          return os(e.assignedSlot);
        if (e.parentNode) {
          var t = e.parentNode;
          if (t.nodeType === 1)
            return t;
          if (t.host)
            return t.host;
        }
        return null;
      }
      var He = os;
      function Qv(e) {
        if (!e.nodeType && e.document && (e = e.document), e.nodeType === 9) {
          var t = e.documentElement, r = e.body;
          return {
            left: t && t.scrollLeft || r && r.scrollLeft || 0,
            top: t && t.scrollTop || r && r.scrollTop || 0
          };
        }
        return {
          left: e.scrollLeft,
          top: e.scrollTop
        };
      }
      var us = Qv;
      function eg(e) {
        var t = us(M), r = t.left, a = t.top, n = e.getBoundingClientRect();
        return {
          top: n.top + a,
          right: n.right + r,
          bottom: n.bottom + a,
          left: n.left + r,
          width: n.right - n.left,
          height: n.bottom - n.top
        };
      }
      var ki = eg;
      function tg(e) {
        var t = e.document, r = t.documentElement;
        if (e.innerWidth)
          return {
            width: e.innerWidth,
            height: e.innerHeight
          };
        if (r)
          return {
            width: r.clientWidth,
            height: r.clientHeight
          };
        var a = t.body;
        return {
          width: a.clientWidth,
          height: a.clientHeight
        };
      }
      var Ya = tg;
      function rg(e, t) {
        for (e = He(e); e && e.nodeName.toLowerCase() !== "html"; ) {
          if (e.scrollTop && (t += e.scrollTop, t >= 0))
            return !1;
          e = He(e);
        }
        return !0;
      }
      function ag(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        if (r)
          return !1;
        var a = De(e), n = a.domNode;
        if (n) {
          var i, o = M.documentElement, u = _.getComputedStyle(n), l = _.getComputedStyle(M.body || o).getPropertyValue("direction"), s = ki(n);
          if (s.bottom < 0 && (rg(n, s.bottom) || u.position === "absolute"))
            return !0;
          if (s.left === 0 && s.right === 0)
            return !1;
          if (l === "ltr") {
            if (s.right <= 0)
              return !0;
          } else if (i = Math.max(o.scrollWidth, Ya(_).width), s.left >= i)
            return !0;
          return !1;
        }
      }
      var Xa = ag, ng = [Ql, es, ts, rs, Xa];
      function nt(e) {
        return e = De(e).vNode, Si(e);
      }
      var Si = Le(function(t, r) {
        return t.actualNode && t.props.nodeName === "area" ? !Ri(t, Si) : zt(t, {
          skipAncestors: !0,
          isAncestor: r
        }) || t.actualNode && ng.some(function(a) {
          return a(t, {
            isAncestor: r
          });
        }) ? !1 : t.parent ? Si(t.parent, !0) : !0;
      });
      function Ka(e, t) {
        var r = Math.min(e.top, t.top), a = Math.max(e.right, t.right), n = Math.max(e.bottom, t.bottom), i = Math.min(e.left, t.left);
        return new _.DOMRect(i, r, a - i, n - r);
      }
      function Za(e, t) {
        var r = e.x, a = e.y, n = t.top, i = t.right, o = t.bottom, u = t.left;
        return a >= n && r <= i && a <= o && r >= u;
      }
      var ls = {};
      ht(ls, {
        getBoundingRect: function() {
          return Ka;
        },
        getIntersectionRect: function() {
          return Ja;
        },
        getOffset: function() {
          return cs;
        },
        getRectCenter: function() {
          return Qr;
        },
        hasVisualOverlap: function() {
          return Oi;
        },
        isPointInRect: function() {
          return Za;
        },
        rectHasMinimumSize: function() {
          return lr;
        },
        rectsOverlap: function() {
          return Gl;
        },
        splitRects: function() {
          return Mi;
        }
      });
      function Ja(e, t) {
        var r = Math.max(e.left, t.left), a = Math.min(e.right, t.right), n = Math.max(e.top, t.top), i = Math.min(e.bottom, t.bottom);
        return r >= a || n >= i ? null : new _.DOMRect(r, n, a - r, i - n);
      }
      function Qr(e) {
        var t = e.left, r = e.top, a = e.width, n = e.height;
        return new _.DOMPoint(t + a / 2, r + n / 2);
      }
      var ss = 0.05;
      function lr(e, t) {
        var r = t.width, a = t.height;
        return r + ss >= e && a + ss >= e;
      }
      function cs(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 12, a = rn(e), n = rn(t);
        if (!a.length || !n.length)
          return 0;
        var i = a.reduce(Ka), o = Qr(i), u = 1 / 0, l = Ae(n), s;
        try {
          for (l.s(); !(s = l.n()).done; ) {
            var c = s.value;
            if (Za(o, c))
              return 0;
            var d = ig(o, c), f = ds(o, d);
            u = Math.min(u, f);
          }
        } catch (v) {
          l.e(v);
        } finally {
          l.f();
        }
        var p = Fs(t);
        if (lr(r * 2, p))
          return u;
        var m = n.reduce(Ka), h = Qr(m), b = ds(o, h) - r;
        return Math.max(0, Math.min(u, b));
      }
      function ig(e, t) {
        var r, a;
        return e.x < t.left ? r = t.left : e.x > t.right ? r = t.right : r = e.x, e.y < t.top ? a = t.top : e.y > t.bottom ? a = t.bottom : a = e.y, {
          x: r,
          y: a
        };
      }
      function ds(e, t) {
        return Math.hypot(e.x - t.x, e.y - t.y);
      }
      function Oi(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect;
        return r.left >= a.right || r.right <= a.left || r.top >= a.bottom || r.bottom <= a.top ? !1 : ji(e, t) > 0;
      }
      function Mi(e, t) {
        var r = [e], a = Ae(t), n;
        try {
          var i = function() {
            var u = n.value;
            r = r.reduce(function(l, s) {
              return l.concat(og(s, u));
            }, []);
          };
          for (a.s(); !(n = a.n()).done; )
            i();
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
        return r;
      }
      function og(e, t) {
        var r = e.top, a = e.left, n = e.bottom, i = e.right, o = r < t.bottom && n > t.top, u = a < t.right && i > t.left, l = [];
        if (Qa(t.top, r, n) && u && l.push({
          top: r,
          left: a,
          bottom: t.top,
          right: i
        }), Qa(t.right, a, i) && o && l.push({
          top: r,
          left: t.right,
          bottom: n,
          right: i
        }), Qa(t.bottom, r, n) && u && l.push({
          top: t.bottom,
          right: i,
          bottom: n,
          left: a
        }), Qa(t.left, a, i) && o && l.push({
          top: r,
          left: a,
          bottom: n,
          right: t.left
        }), l.length === 0) {
          if (lg(e, t))
            return [];
          l.push(e);
        }
        return l.map(ug);
      }
      var Qa = function(t, r, a) {
        return t > r && t < a;
      };
      function ug(e) {
        return new _.DOMRect(e.left, e.top, e.right - e.left, e.bottom - e.top);
      }
      function lg(e, t) {
        return e.top >= t.top && e.left >= t.left && e.bottom <= t.bottom && e.right <= t.right;
      }
      var fs = 0, sg = 0.1, ps = 0.2, ms = 0.3, Ni = 0;
      function sr() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M.body, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (ue.get("gridCreated") && !r)
          return se.gridSize;
        if (ue.set("gridCreated", !0), !r) {
          var a, n = le(M.documentElement);
          if (n || (n = new Oo(M.documentElement)), Ni = 0, n._stackingOrder = [gs(fs, Ni++, null)], (a = t) !== null && a !== void 0 || (t = new Ii()), bs(t, n), Pt(n.actualNode)) {
            var i = new Ii(n);
            n._subGrid = i;
          }
        }
        for (var o = M.createTreeWalker(e, _.NodeFilter.SHOW_ELEMENT, null, !1), u = r ? o.nextNode() : o.currentNode; u; ) {
          var l = le(u);
          l && l.parent ? r = l.parent : u.assignedSlot ? r = le(u.assignedSlot) : u.parentElement ? r = le(u.parentElement) : u.parentNode && le(u.parentNode) && (r = le(u.parentNode)), l || (l = new y.VirtualNode(u, r)), l._stackingOrder = cg(l, r, Ni++);
          var s = pg(l, r), c = s ? s._subGrid : t;
          if (Pt(l.actualNode)) {
            var d = new Ii(l);
            l._subGrid = d;
          }
          var f = l.boundingClientRect;
          f.width !== 0 && f.height !== 0 && nt(u) && bs(c, l), Ga(u) && sr(u.shadowRoot, c, l), u = o.nextNode();
        }
        return se.gridSize;
      }
      function hs(e, t) {
        var r = e.getComputedStylePropertyValue("position"), a = e.getComputedStylePropertyValue("z-index");
        if (r === "fixed" || r === "sticky" || a !== "auto" && r !== "static" || e.getComputedStylePropertyValue("opacity") !== "1")
          return !0;
        var n = e.getComputedStylePropertyValue("-webkit-transform") || e.getComputedStylePropertyValue("-ms-transform") || e.getComputedStylePropertyValue("transform") || "none";
        if (n !== "none")
          return !0;
        var i = e.getComputedStylePropertyValue("mix-blend-mode");
        if (i && i !== "normal")
          return !0;
        var o = e.getComputedStylePropertyValue("filter");
        if (o && o !== "none")
          return !0;
        var u = e.getComputedStylePropertyValue("perspective");
        if (u && u !== "none")
          return !0;
        var l = e.getComputedStylePropertyValue("clip-path");
        if (l && l !== "none")
          return !0;
        var s = e.getComputedStylePropertyValue("-webkit-mask") || e.getComputedStylePropertyValue("mask") || "none";
        if (s !== "none")
          return !0;
        var c = e.getComputedStylePropertyValue("-webkit-mask-image") || e.getComputedStylePropertyValue("mask-image") || "none";
        if (c !== "none")
          return !0;
        var d = e.getComputedStylePropertyValue("-webkit-mask-border") || e.getComputedStylePropertyValue("mask-border") || "none";
        if (d !== "none" || e.getComputedStylePropertyValue("isolation") === "isolate")
          return !0;
        var f = e.getComputedStylePropertyValue("will-change");
        if (f === "transform" || f === "opacity" || e.getComputedStylePropertyValue("-webkit-overflow-scrolling") === "touch")
          return !0;
        var p = e.getComputedStylePropertyValue("contain");
        return !!(["layout", "paint", "strict", "content"].includes(p) || a !== "auto" && vs(t));
      }
      function vs(e) {
        if (!e)
          return !1;
        var t = e.getComputedStylePropertyValue("display");
        return ["flex", "inline-flex", "grid", "inline-grid"].includes(t);
      }
      function cg(e, t, r) {
        var a = t._stackingOrder.slice();
        if (hs(e, t)) {
          var n = a.findIndex(function(o) {
            var u = o.stackLevel;
            return [fs, ps, ms].includes(u);
          });
          n !== -1 && a.splice(n, a.length - n);
        }
        var i = dg(e, t);
        return i !== null && a.push(gs(i, r, e)), a;
      }
      function gs(e, t, r) {
        return {
          stackLevel: e,
          treeOrder: t,
          vNode: r
        };
      }
      function dg(e, t) {
        var r = fg(e, t);
        return ["auto", "0"].includes(r) ? e.getComputedStylePropertyValue("position") !== "static" ? ms : e.getComputedStylePropertyValue("float") !== "none" ? ps : hs(e, t) ? sg : null : parseInt(r);
      }
      function fg(e, t) {
        var r = e.getComputedStylePropertyValue("position");
        return r === "static" && !vs(t) ? "auto" : e.getComputedStylePropertyValue("z-index");
      }
      function pg(e, t) {
        for (var r = null, a = [e]; t; ) {
          if (Pt(t.actualNode)) {
            r = t;
            break;
          }
          if (t._scrollRegionParent) {
            r = t._scrollRegionParent;
            break;
          }
          a.push(t), t = le(t.actualNode.parentElement || t.actualNode.parentNode);
        }
        return a.forEach(function(n) {
          return n._scrollRegionParent = r;
        }), r;
      }
      function bs(e, t) {
        var r = Wa(t);
        t.clientRects.forEach(function(a) {
          var n, i = r.reduce(function(u, l) {
            return u && Ja(u, l.boundingClientRect);
          }, a);
          if (i) {
            (n = t._grid) !== null && n !== void 0 || (t._grid = e);
            var o = e.getGridPositionOfRect(i);
            e.loopGridPosition(o, function(u) {
              u.includes(t) || u.push(t);
            });
          }
        });
      }
      var Ii = function() {
        function e() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
          Dt(this, e), this.container = t, this.cells = [];
        }
        return _t(e, [{
          key: "toGridIndex",
          value: function(r) {
            return Math.floor(r / se.gridSize);
          }
        }, {
          key: "getCellFromPoint",
          value: function(r) {
            var a, n, i = r.x, o = r.y;
            me(this.boundaries, "Grid does not have cells added");
            var u = this.toGridIndex(o), l = this.toGridIndex(i);
            me(Za({
              y: u,
              x: l
            }, this.boundaries), "Element midpoint exceeds the grid bounds");
            var s = (a = this.cells[u - this.cells._negativeIndex]) !== null && a !== void 0 ? a : [];
            return (n = s[l - s._negativeIndex]) !== null && n !== void 0 ? n : [];
          }
        }, {
          key: "loopGridPosition",
          value: function(r, a) {
            var n = r, i = n.left, o = n.right, u = n.top, l = n.bottom;
            this.boundaries && (r = Ka(this.boundaries, r)), this.boundaries = r, ys(this.cells, u, l, function(s, c) {
              ys(s, i, o, function(d, f) {
                a(d, {
                  row: c,
                  col: f
                });
              });
            });
          }
        }, {
          key: "getGridPositionOfRect",
          value: function(r) {
            var a = r.top, n = r.right, i = r.bottom, o = r.left, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return a = this.toGridIndex(a - u), n = this.toGridIndex(n + u - 1), i = this.toGridIndex(i + u - 1), o = this.toGridIndex(o - u), new _.DOMRect(o, a, n - o, i - a);
          }
        }]), e;
      }();
      function ys(e, t, r, a) {
        var n;
        if ((n = e._negativeIndex) !== null && n !== void 0 || (e._negativeIndex = 0), t < e._negativeIndex) {
          for (var i = 0; i < e._negativeIndex - t; i++)
            e.splice(0, 0, []);
          e._negativeIndex = t;
        }
        for (var o = t - e._negativeIndex, u = r - e._negativeIndex, l = o; l <= u; l++) {
          var s, c;
          (c = e[s = l]) !== null && c !== void 0 || (e[s] = []), a(e[l], l + e._negativeIndex);
        }
      }
      function en(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (sr(), !((t = e._grid) !== null && t !== void 0 && (r = t.cells) !== null && r !== void 0 && r.length))
          return [];
        var n = e.boundingClientRect, i = e._grid, o = Pi(e), u = i.getGridPositionOfRect(n, a), l = [];
        return i.loopGridPosition(u, function(s) {
          var c = Ae(s), d;
          try {
            for (c.s(); !(d = c.n()).done; ) {
              var f = d.value;
              f && f !== e && !l.includes(f) && o === Pi(f) && l.push(f);
            }
          } catch (p) {
            c.e(p);
          } finally {
            c.f();
          }
        }), l;
      }
      var Pi = Le(function(e) {
        return e ? e.getComputedStylePropertyValue("position") === "fixed" ? !0 : Pi(e.parent) : !1;
      }), mg = Le(function() {
        var t;
        if (!y._tree)
          return null;
        var r = Rt(y._tree[0], "dialog[open]", function(n) {
          var i = n.boundingClientRect, o = M.elementsFromPoint(i.left + 1, i.top + 1);
          return o.includes(n.actualNode) && nt(n);
        });
        if (!r.length)
          return null;
        var a = r.find(function(n) {
          var i = n.boundingClientRect, o = M.elementsFromPoint(i.left - 10, i.top - 10);
          return o.includes(n.actualNode);
        });
        return a || ((t = r.find(function(n) {
          var i, o = (i = hg(n)) !== null && i !== void 0 ? i : {}, u = o.vNode, l = o.rect;
          if (!u)
            return !1;
          var s = M.elementsFromPoint(l.left + 1, l.top + 1);
          return !s.includes(u.actualNode);
        })) !== null && t !== void 0 ? t : null);
      }), ws = mg;
      function hg(e) {
        sr();
        var t = y._tree[0]._grid, r = new _.DOMRect(0, 0, _.innerWidth, _.innerHeight);
        if (t)
          for (var a = 0; a < t.cells.length; a++) {
            var n = t.cells[a];
            if (n)
              for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if (o)
                  for (var u = 0; u < o.length; u++) {
                    var l = o[u], s = l.boundingClientRect, c = Ja(s, r);
                    if (l.props.nodeName !== "html" && l !== e && l.getComputedStylePropertyValue("pointer-events") !== "none" && c)
                      return {
                        vNode: l,
                        rect: c
                      };
                  }
              }
          }
      }
      function tn(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipAncestors, a = t.isAncestor;
        return r ? Ds(e, a) : _s(e, a);
      }
      var Ds = Le(function(t, r) {
        if (t.hasAttr("inert"))
          return !0;
        if (!r && t.actualNode) {
          var a = ws();
          if (a && !ur(a, t))
            return !0;
        }
        return !1;
      }), _s = Le(function(t, r) {
        return Ds(t, r) ? !0 : t.parent ? _s(t.parent, !0) : !1;
      }), vg = ["button", "command", "fieldset", "keygen", "optgroup", "option", "select", "textarea", "input"];
      function gg(e) {
        return vg.includes(e);
      }
      function bg(e) {
        var t = De(e), r = t.vNode;
        if (gg(r.props.nodeName) && r.hasAttr("disabled") || tn(r))
          return !0;
        for (var a = r.parent, n = [], i = !1; a && a.shadowId === r.shadowId && !i && (n.push(a), a.props.nodeName !== "legend"); ) {
          if (a._inDisabledFieldset !== void 0) {
            i = a._inDisabledFieldset;
            break;
          }
          a.props.nodeName === "fieldset" && a.hasAttr("disabled") && (i = !0), a = a.parent;
        }
        return n.forEach(function(o) {
          return o._inDisabledFieldset = i;
        }), i ? !0 : r.props.nodeName !== "area" && r.actualNode ? zt(r) : !1;
      }
      var Li = bg, yg = /^\/\#/, wg = /^#[!/]/;
      function Bi(e) {
        var t, r = e.getAttribute("href");
        if (!r || r === "#")
          return !1;
        if (yg.test(r))
          return !0;
        var a = e.hash, n = e.protocol, i = e.hostname, o = e.port, u = e.pathname;
        if (wg.test(a))
          return !1;
        if (r.charAt(0) === "#")
          return !0;
        if (typeof ((t = _.location) === null || t === void 0 ? void 0 : t.origin) != "string" || _.location.origin.indexOf("://") === -1)
          return null;
        var l = _.location.origin + _.location.pathname, s;
        return i ? s = "".concat(n, "//").concat(i).concat(o ? ":".concat(o) : "") : s = _.location.origin, u ? s += (u[0] !== "/" ? "/" : "") + u : s += _.location.pathname, s === l;
      }
      function Dg(e, t) {
        var r = e.getAttribute(t);
        if (!r || t === "href" && !Bi(e))
          return null;
        r.indexOf("#") !== -1 && (r = decodeURIComponent(r.substr(r.indexOf("#") + 1)));
        var a = M.getElementById(r);
        return a || (a = M.getElementsByName(r), a.length ? a[0] : null);
      }
      var qi = Dg;
      function ji(e, t) {
        sr();
        for (var r = Math.max(e._stackingOrder.length, t._stackingOrder.length), a = 0; a < r; a++) {
          if (typeof t._stackingOrder[a] > "u")
            return -1;
          if (typeof e._stackingOrder[a] > "u" || t._stackingOrder[a].stackLevel > e._stackingOrder[a].stackLevel)
            return 1;
          if (t._stackingOrder[a].stackLevel < e._stackingOrder[a].stackLevel)
            return -1;
          if (t._stackingOrder[a].treeOrder !== e._stackingOrder[a].treeOrder)
            return t._stackingOrder[a].treeOrder - e._stackingOrder[a].treeOrder;
        }
        var n = e.actualNode, i = t.actualNode;
        if (n.getRootNode && n.getRootNode() !== i.getRootNode()) {
          for (var o = []; n; )
            o.push({
              root: n.getRootNode(),
              node: n
            }), n = n.getRootNode().host;
          for (; i && !o.find(function(b) {
            return b.root === i.getRootNode();
          }); )
            i = i.getRootNode().host;
          if (n = o.find(function(b) {
            return b.root === i.getRootNode();
          }).node, n === i)
            return e.actualNode.getRootNode() !== n.getRootNode() ? -1 : 1;
        }
        var u = _.Node, l = u.DOCUMENT_POSITION_FOLLOWING, s = u.DOCUMENT_POSITION_CONTAINS, c = u.DOCUMENT_POSITION_CONTAINED_BY, d = n.compareDocumentPosition(i), f = d & l ? 1 : -1, p = d & s || d & c, m = xs(e), h = xs(t);
        return m === h || p ? f : h - m;
      }
      function xs(e) {
        return e.getComputedStylePropertyValue("display").indexOf("inline") !== -1 ? 2 : Es(e) ? 1 : 0;
      }
      function Es(e) {
        if (!e)
          return !1;
        if (e._isFloated !== void 0)
          return e._isFloated;
        var t = e.getComputedStylePropertyValue("float");
        if (t !== "none")
          return e._isFloated = !0, !0;
        var r = Es(e.parent);
        return e._isFloated = r, r;
      }
      function zi(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = Qr(t), n = e.getCellFromPoint(a) || [], i = Math.floor(a.x), o = Math.floor(a.y), u = n.filter(function(s) {
          return s.clientRects.some(function(c) {
            var d = c.left, f = c.top;
            return i < Math.floor(d + c.width) && i >= Math.floor(d) && o < Math.floor(f + c.height) && o >= Math.floor(f);
          });
        }), l = e.container;
        return l && (u = zi(l._grid, l.boundingClientRect, !0).concat(u)), r || (u = u.sort(ji).map(function(s) {
          return s.actualNode;
        }).concat(M.documentElement).filter(function(s, c, d) {
          return d.indexOf(s) === c;
        })), u;
      }
      function _g(e) {
        sr();
        var t = le(e), r = t._grid;
        return r ? zi(r, t.boundingClientRect) : [];
      }
      var Cs = _g;
      function xg(e) {
        var t = st(e, "*"), r = t.filter(function(a) {
          var n = a.isFocusable, i = a.actualNode.getAttribute("tabindex");
          return i = i && !isNaN(parseInt(i, 10)) ? parseInt(i) : null, i ? n && i >= 0 : n;
        });
        return r;
      }
      var As = xg;
      function Eg(e) {
        var t = De(e), r = t.vNode;
        if (!r || Li(r))
          return !1;
        switch (r.props.nodeName) {
          case "a":
          case "area":
            if (r.hasAttr("href"))
              return !0;
            break;
          case "input":
            return r.props.type !== "hidden";
          case "textarea":
          case "select":
          case "summary":
          case "button":
            return !0;
          case "details":
            return !st(r, "summary").length;
        }
        return !1;
      }
      var Vi = Eg;
      function ke(e) {
        var t = De(e), r = t.vNode;
        if (r.props.nodeType !== 1 || Li(r))
          return !1;
        if (Vi(r))
          return !0;
        var a = r.attr("tabindex");
        return !!(a && !isNaN(parseInt(a, 10)));
      }
      function yt(e) {
        var t = De(e), r = t.vNode;
        if (r.props.nodeType !== 1)
          return !1;
        var a = parseInt(r.attr("tabindex", 10));
        return a <= -1 ? !1 : ke(r);
      }
      var rn = Le(Cg);
      function Cg(e) {
        var t = e.boundingClientRect, r = en(e).filter(function(n) {
          return Oi(e, n) && n.getComputedStylePropertyValue("pointer-events") !== "none" && !Ag(e, n);
        });
        if (!r.length)
          return [t];
        var a = r.map(function(n) {
          var i = n.boundingClientRect;
          return i;
        });
        return Mi(t, a);
      }
      function Ag(e, t) {
        return e.actualNode.contains(t.actualNode) && !yt(t);
      }
      var Fs = Le(Fg);
      function Fg(e, t) {
        var r = rn(e);
        return Tg(r, t);
      }
      function Tg(e, t) {
        return e.reduce(function(r, a) {
          var n = lr(t, r), i = lr(t, a);
          if (n !== i)
            return n ? r : a;
          var o = r.width * r.height, u = a.width * a.height;
          return o > u ? r : a;
        });
      }
      var ea = {};
      ht(ea, {
        accessibleText: function() {
          return cr;
        },
        accessibleTextVirtual: function() {
          return $e;
        },
        autocomplete: function() {
          return mr;
        },
        formControlValue: function() {
          return nc;
        },
        formControlValueMethods: function() {
          return Xi;
        },
        hasUnicode: function() {
          return Qi;
        },
        isHumanInterpretable: function() {
          return to;
        },
        isIconLigature: function() {
          return eo;
        },
        isValidAutocomplete: function() {
          return dc;
        },
        label: function() {
          return ey;
        },
        labelText: function() {
          return Ki;
        },
        labelVirtual: function() {
          return ln;
        },
        nativeElementType: function() {
          return ry;
        },
        nativeTextAlternative: function() {
          return oc;
        },
        nativeTextMethods: function() {
          return ic;
        },
        removeUnicode: function() {
          return ia;
        },
        sanitize: function() {
          return ae;
        },
        subtreeText: function() {
          return Vt;
        },
        titleText: function() {
          return nn;
        },
        unsupported: function() {
          return Ys;
        },
        visible: function() {
          return fc;
        },
        visibleTextNodes: function() {
          return ay;
        },
        visibleVirtual: function() {
          return At;
        }
      });
      function Rg(e, t) {
        e = e.actualNode || e;
        try {
          var r = We(e), a = [], n = e.getAttribute(t);
          if (n) {
            n = Ye(n);
            for (var i = 0; i < n.length; i++)
              a.push(r.getElementById(n[i]));
          }
          return a;
        } catch {
          throw new TypeError("Cannot resolve id references for non-DOM nodes");
        }
      }
      var Et = Rg;
      function kg(e, t) {
        var r = le(e);
        return $e(r, t);
      }
      var cr = kg;
      function Sg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = De(e), a = r.vNode;
        if ((a == null ? void 0 : a.props.nodeType) !== 1 || a.props.nodeType !== 1 || t.inLabelledByContext || t.inControlContext || !a.attr("aria-labelledby"))
          return "";
        var n = Et(a, "aria-labelledby").filter(function(i) {
          return i;
        });
        return n.reduce(function(i, o) {
          var u = cr(o, fe({
            inLabelledByContext: !0,
            startNode: t.startNode || a
          }, t));
          return i ? "".concat(i, " ").concat(u) : u;
        }, "");
      }
      var ta = Sg;
      function ra(e) {
        var t = De(e), r = t.vNode;
        return (r == null ? void 0 : r.props.nodeType) !== 1 ? "" : r.attr("aria-label") || "";
      }
      var Og = {
        "aria-activedescendant": {
          type: "idref",
          allowEmpty: !0
        },
        "aria-atomic": {
          type: "boolean",
          global: !0
        },
        "aria-autocomplete": {
          type: "nmtoken",
          values: ["inline", "list", "both", "none"]
        },
        "aria-braillelabel": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-brailleroledescription": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-busy": {
          type: "boolean",
          global: !0
        },
        "aria-checked": {
          type: "nmtoken",
          values: ["false", "mixed", "true", "undefined"]
        },
        "aria-colcount": {
          type: "int",
          minValue: -1
        },
        "aria-colindex": {
          type: "int",
          minValue: 1
        },
        "aria-colspan": {
          type: "int",
          minValue: 1
        },
        "aria-controls": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-current": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["page", "step", "location", "date", "time", "true", "false"],
          global: !0
        },
        "aria-describedby": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-description": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-details": {
          type: "idref",
          allowEmpty: !0,
          global: !0
        },
        "aria-disabled": {
          type: "boolean",
          global: !0
        },
        "aria-dropeffect": {
          type: "nmtokens",
          values: ["copy", "execute", "link", "move", "none", "popup"],
          global: !0
        },
        "aria-errormessage": {
          type: "idref",
          allowEmpty: !0,
          global: !0
        },
        "aria-expanded": {
          type: "nmtoken",
          values: ["true", "false", "undefined"]
        },
        "aria-flowto": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-grabbed": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          global: !0
        },
        "aria-haspopup": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["true", "false", "menu", "listbox", "tree", "grid", "dialog"],
          global: !0
        },
        "aria-hidden": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          global: !0
        },
        "aria-invalid": {
          type: "nmtoken",
          values: ["grammar", "false", "spelling", "true"],
          global: !0
        },
        "aria-keyshortcuts": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-label": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-labelledby": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-level": {
          type: "int",
          minValue: 1
        },
        "aria-live": {
          type: "nmtoken",
          values: ["assertive", "off", "polite"],
          global: !0
        },
        "aria-modal": {
          type: "boolean"
        },
        "aria-multiline": {
          type: "boolean"
        },
        "aria-multiselectable": {
          type: "boolean"
        },
        "aria-orientation": {
          type: "nmtoken",
          values: ["horizontal", "undefined", "vertical"]
        },
        "aria-owns": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-placeholder": {
          type: "string",
          allowEmpty: !0
        },
        "aria-posinset": {
          type: "int",
          minValue: 1
        },
        "aria-pressed": {
          type: "nmtoken",
          values: ["false", "mixed", "true", "undefined"]
        },
        "aria-readonly": {
          type: "boolean"
        },
        "aria-relevant": {
          type: "nmtokens",
          values: ["additions", "all", "removals", "text"],
          global: !0
        },
        "aria-required": {
          type: "boolean"
        },
        "aria-roledescription": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-rowcount": {
          type: "int",
          minValue: -1
        },
        "aria-rowindex": {
          type: "int",
          minValue: 1
        },
        "aria-rowspan": {
          type: "int",
          minValue: 0
        },
        "aria-selected": {
          type: "nmtoken",
          values: ["false", "true", "undefined"]
        },
        "aria-setsize": {
          type: "int",
          minValue: -1
        },
        "aria-sort": {
          type: "nmtoken",
          values: ["ascending", "descending", "none", "other"]
        },
        "aria-valuemax": {
          type: "decimal"
        },
        "aria-valuemin": {
          type: "decimal"
        },
        "aria-valuenow": {
          type: "decimal"
        },
        "aria-valuetext": {
          type: "string",
          allowEmpty: !0
        }
      }, Ts = Og, Mg = {
        alert: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        alertdialog: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-modal"],
          superclassRole: ["alert", "dialog"],
          accessibleNameRequired: !0
        },
        application: {
          type: "landmark",
          allowedAttrs: ["aria-activedescendant", "aria-expanded"],
          superclassRole: ["structure"],
          accessibleNameRequired: !0
        },
        article: {
          type: "structure",
          allowedAttrs: ["aria-posinset", "aria-setsize", "aria-expanded"],
          superclassRole: ["document"]
        },
        banner: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        blockquote: {
          type: "structure",
          superclassRole: ["section"]
        },
        button: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-pressed"],
          superclassRole: ["command"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        caption: {
          type: "structure",
          requiredContext: ["figure", "table", "grid", "treegrid"],
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        cell: {
          type: "structure",
          requiredContext: ["row"],
          allowedAttrs: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan", "aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        checkbox: {
          type: "widget",
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-readonly", "aria-expanded", "aria-required"],
          superclassRole: ["input"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        code: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        columnheader: {
          type: "structure",
          requiredContext: ["row"],
          allowedAttrs: ["aria-sort", "aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"],
          superclassRole: ["cell", "gridcell", "sectionhead"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        combobox: {
          type: "widget",
          requiredAttrs: ["aria-expanded", "aria-controls"],
          allowedAttrs: ["aria-owns", "aria-autocomplete", "aria-readonly", "aria-required", "aria-activedescendant", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !0
        },
        command: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        complementary: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        composite: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        contentinfo: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        comment: {
          type: "structure",
          allowedAttrs: ["aria-level", "aria-posinset", "aria-setsize"],
          superclassRole: ["article"]
        },
        definition: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        deletion: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        dialog: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-modal"],
          superclassRole: ["window"],
          accessibleNameRequired: !0
        },
        directory: {
          type: "structure",
          deprecated: !0,
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["list"],
          nameFromContent: !0
        },
        document: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["structure"]
        },
        emphasis: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        feed: {
          type: "structure",
          requiredOwned: ["article"],
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["list"]
        },
        figure: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        form: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        grid: {
          type: "composite",
          requiredOwned: ["rowgroup", "row"],
          allowedAttrs: ["aria-level", "aria-multiselectable", "aria-readonly", "aria-activedescendant", "aria-colcount", "aria-expanded", "aria-rowcount"],
          superclassRole: ["composite", "table"],
          accessibleNameRequired: !1
        },
        gridcell: {
          type: "widget",
          requiredContext: ["row"],
          allowedAttrs: ["aria-readonly", "aria-required", "aria-selected", "aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan"],
          superclassRole: ["cell", "widget"],
          nameFromContent: !0
        },
        group: {
          type: "structure",
          allowedAttrs: ["aria-activedescendant", "aria-expanded"],
          superclassRole: ["section"]
        },
        heading: {
          type: "structure",
          requiredAttrs: ["aria-level"],
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["sectionhead"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        img: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        input: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        insertion: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        landmark: {
          type: "abstract",
          superclassRole: ["section"]
        },
        link: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["command"],
          accessibleNameRequired: !0,
          nameFromContent: !0
        },
        list: {
          type: "structure",
          requiredOwned: ["listitem"],
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        listbox: {
          type: "widget",
          requiredOwned: ["group", "option"],
          allowedAttrs: ["aria-multiselectable", "aria-readonly", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !0
        },
        listitem: {
          type: "structure",
          requiredContext: ["list"],
          allowedAttrs: ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        log: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        main: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        marquee: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        math: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          childrenPresentational: !0
        },
        menu: {
          type: "composite",
          requiredOwned: ["group", "menuitemradio", "menuitem", "menuitemcheckbox", "menu", "separator"],
          allowedAttrs: ["aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"]
        },
        menubar: {
          type: "composite",
          requiredOwned: ["group", "menuitemradio", "menuitem", "menuitemcheckbox", "menu", "separator"],
          allowedAttrs: ["aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["menu"]
        },
        menuitem: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          allowedAttrs: ["aria-posinset", "aria-setsize", "aria-expanded"],
          superclassRole: ["command"],
          accessibleNameRequired: !0,
          nameFromContent: !0
        },
        menuitemcheckbox: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-expanded", "aria-posinset", "aria-readonly", "aria-setsize"],
          superclassRole: ["checkbox", "menuitem"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        menuitemradio: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-expanded", "aria-posinset", "aria-readonly", "aria-setsize"],
          superclassRole: ["menuitemcheckbox", "radio"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        meter: {
          type: "structure",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuetext"],
          superclassRole: ["range"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        mark: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        navigation: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        none: {
          type: "structure",
          superclassRole: ["structure"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        note: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        option: {
          type: "widget",
          requiredContext: ["group", "listbox"],
          allowedAttrs: ["aria-selected", "aria-checked", "aria-posinset", "aria-setsize"],
          superclassRole: ["input"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        paragraph: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        presentation: {
          type: "structure",
          superclassRole: ["structure"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        progressbar: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"],
          superclassRole: ["range"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        radio: {
          type: "widget",
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-posinset", "aria-setsize", "aria-required"],
          superclassRole: ["input"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        radiogroup: {
          type: "composite",
          allowedAttrs: ["aria-readonly", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !1
        },
        range: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        region: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"],
          accessibleNameRequired: !1
        },
        roletype: {
          type: "abstract",
          superclassRole: []
        },
        row: {
          type: "structure",
          requiredContext: ["grid", "rowgroup", "table", "treegrid"],
          requiredOwned: ["cell", "columnheader", "gridcell", "rowheader"],
          allowedAttrs: ["aria-colindex", "aria-level", "aria-rowindex", "aria-selected", "aria-activedescendant", "aria-expanded", "aria-posinset", "aria-setsize"],
          superclassRole: ["group", "widget"],
          nameFromContent: !0
        },
        rowgroup: {
          type: "structure",
          requiredContext: ["grid", "table", "treegrid"],
          requiredOwned: ["row"],
          superclassRole: ["structure"],
          nameFromContent: !0
        },
        rowheader: {
          type: "structure",
          requiredContext: ["row"],
          allowedAttrs: ["aria-sort", "aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"],
          superclassRole: ["cell", "gridcell", "sectionhead"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        scrollbar: {
          type: "widget",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuetext"],
          superclassRole: ["range"],
          childrenPresentational: !0
        },
        search: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        searchbox: {
          type: "widget",
          allowedAttrs: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"],
          superclassRole: ["textbox"],
          accessibleNameRequired: !0
        },
        section: {
          type: "abstract",
          superclassRole: ["structure"],
          nameFromContent: !0
        },
        sectionhead: {
          type: "abstract",
          superclassRole: ["structure"],
          nameFromContent: !0
        },
        select: {
          type: "abstract",
          superclassRole: ["composite", "group"]
        },
        separator: {
          type: "structure",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-orientation", "aria-valuetext"],
          superclassRole: ["structure", "widget"],
          childrenPresentational: !0
        },
        slider: {
          type: "widget",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-orientation", "aria-readonly", "aria-required", "aria-valuetext"],
          superclassRole: ["input", "range"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        spinbutton: {
          type: "widget",
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-readonly", "aria-required", "aria-activedescendant", "aria-valuetext", "aria-valuenow"],
          superclassRole: ["composite", "input", "range"],
          accessibleNameRequired: !0
        },
        status: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        strong: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        structure: {
          type: "abstract",
          superclassRole: ["roletype"]
        },
        subscript: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        superscript: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        switch: {
          type: "widget",
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-expanded", "aria-readonly", "aria-required"],
          superclassRole: ["checkbox"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        suggestion: {
          type: "structure",
          requiredOwned: ["insertion", "deletion"],
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        tab: {
          type: "widget",
          requiredContext: ["tablist"],
          allowedAttrs: ["aria-posinset", "aria-selected", "aria-setsize", "aria-expanded"],
          superclassRole: ["sectionhead", "widget"],
          nameFromContent: !0,
          childrenPresentational: !0
        },
        table: {
          type: "structure",
          requiredOwned: ["rowgroup", "row"],
          allowedAttrs: ["aria-colcount", "aria-rowcount", "aria-expanded"],
          superclassRole: ["section"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        tablist: {
          type: "composite",
          requiredOwned: ["tab"],
          allowedAttrs: ["aria-level", "aria-multiselectable", "aria-orientation", "aria-activedescendant", "aria-expanded"],
          superclassRole: ["composite"]
        },
        tabpanel: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          accessibleNameRequired: !1
        },
        term: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        text: {
          type: "structure",
          superclassRole: ["section"],
          nameFromContent: !0
        },
        textbox: {
          type: "widget",
          allowedAttrs: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"],
          superclassRole: ["input"],
          accessibleNameRequired: !0
        },
        time: {
          type: "structure",
          superclassRole: ["section"]
        },
        timer: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["status"]
        },
        toolbar: {
          type: "structure",
          allowedAttrs: ["aria-orientation", "aria-activedescendant", "aria-expanded"],
          superclassRole: ["group"],
          accessibleNameRequired: !0
        },
        tooltip: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        tree: {
          type: "composite",
          requiredOwned: ["group", "treeitem"],
          allowedAttrs: ["aria-multiselectable", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !1
        },
        treegrid: {
          type: "composite",
          requiredOwned: ["rowgroup", "row"],
          allowedAttrs: ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required", "aria-rowcount"],
          superclassRole: ["grid", "tree"],
          accessibleNameRequired: !1
        },
        treeitem: {
          type: "widget",
          requiredContext: ["group", "tree"],
          allowedAttrs: ["aria-checked", "aria-expanded", "aria-level", "aria-posinset", "aria-selected", "aria-setsize"],
          superclassRole: ["listitem", "option"],
          accessibleNameRequired: !0,
          nameFromContent: !0
        },
        widget: {
          type: "abstract",
          superclassRole: ["roletype"]
        },
        window: {
          type: "abstract",
          superclassRole: ["roletype"]
        }
      }, Rs = Mg, Ng = {
        "doc-abstract": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-acknowledgments": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-afterword": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-appendix": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-backlink": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-biblioentry": {
          type: "listitem",
          allowedAttrs: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize"],
          superclassRole: ["listitem"],
          deprecated: !0
        },
        "doc-bibliography": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-biblioref": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-chapter": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-colophon": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-conclusion": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-cover": {
          type: "img",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["img"]
        },
        "doc-credit": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-credits": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-dedication": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-endnote": {
          type: "listitem",
          allowedAttrs: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize"],
          superclassRole: ["listitem"],
          deprecated: !0
        },
        "doc-endnotes": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-epigraph": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-epilogue": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-errata": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-example": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-footnote": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-foreword": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-glossary": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-glossref": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-index": {
          type: "navigation",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["navigation"]
        },
        "doc-introduction": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-noteref": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-notice": {
          type: "note",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["note"]
        },
        "doc-pagebreak": {
          type: "separator",
          allowedAttrs: ["aria-expanded", "aria-orientation"],
          superclassRole: ["separator"],
          childrenPresentational: !0
        },
        "doc-pagelist": {
          type: "navigation",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["navigation"]
        },
        "doc-part": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-preface": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-prologue": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-pullquote": {
          type: "none",
          superclassRole: ["none"]
        },
        "doc-qna": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-subtitle": {
          type: "sectionhead",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["sectionhead"]
        },
        "doc-tip": {
          type: "note",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["note"]
        },
        "doc-toc": {
          type: "navigation",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["navigation"]
        }
      }, Ig = Ng, Pg = {
        "graphics-document": {
          type: "structure",
          superclassRole: ["document"],
          accessibleNameRequired: !0
        },
        "graphics-object": {
          type: "structure",
          superclassRole: ["group"],
          nameFromContent: !0
        },
        "graphics-symbol": {
          type: "structure",
          superclassRole: ["img"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        }
      }, Lg = Pg, Bg = {
        a: {
          variant: {
            href: {
              matches: "[href]",
              contentTypes: ["interactive", "phrasing", "flow"],
              allowedRoles: ["button", "checkbox", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab", "treeitem", "doc-backlink", "doc-biblioref", "doc-glossref", "doc-noteref"],
              namingMethods: ["subtreeText"]
            },
            default: {
              contentTypes: ["phrasing", "flow"],
              allowedRoles: !0
            }
          }
        },
        abbr: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        address: {
          contentTypes: ["flow"],
          allowedRoles: !0
        },
        area: {
          variant: {
            href: {
              matches: "[href]",
              allowedRoles: !1
            },
            default: {
              allowedRoles: ["button", "link"]
            }
          },
          contentTypes: ["phrasing", "flow"],
          namingMethods: ["altText"]
        },
        article: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["feed", "presentation", "none", "document", "application", "main", "region"],
          shadowRoot: !0
        },
        aside: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["feed", "note", "presentation", "none", "region", "search", "doc-dedication", "doc-example", "doc-footnote", "doc-glossary", "doc-pullquote", "doc-tip"]
        },
        audio: {
          variant: {
            controls: {
              matches: "[controls]",
              contentTypes: ["interactive", "embedded", "phrasing", "flow"]
            },
            default: {
              contentTypes: ["embedded", "phrasing", "flow"]
            }
          },
          allowedRoles: ["application"],
          chromiumRole: "Audio"
        },
        b: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        base: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        bdi: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        bdo: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        blockquote: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        body: {
          allowedRoles: !1,
          shadowRoot: !0
        },
        br: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: ["presentation", "none"],
          namingMethods: ["titleText", "singleSpace"]
        },
        button: {
          contentTypes: ["interactive", "phrasing", "flow"],
          allowedRoles: ["checkbox", "combobox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"],
          namingMethods: ["subtreeText"]
        },
        canvas: {
          allowedRoles: !0,
          contentTypes: ["embedded", "phrasing", "flow"],
          chromiumRole: "Canvas"
        },
        caption: {
          allowedRoles: !1
        },
        cite: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        code: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        col: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        colgroup: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        data: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        datalist: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0,
          implicitAttrs: {
            "aria-multiselectable": "false"
          }
        },
        dd: {
          allowedRoles: !1
        },
        del: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        dfn: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        details: {
          contentTypes: ["interactive", "flow"],
          allowedRoles: !1
        },
        dialog: {
          contentTypes: ["flow"],
          allowedRoles: ["alertdialog"]
        },
        div: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        dl: {
          contentTypes: ["flow"],
          allowedRoles: ["group", "list", "presentation", "none"],
          chromiumRole: "DescriptionList"
        },
        dt: {
          allowedRoles: ["listitem"]
        },
        em: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        embed: {
          contentTypes: ["interactive", "embedded", "phrasing", "flow"],
          allowedRoles: ["application", "document", "img", "presentation", "none"],
          chromiumRole: "EmbeddedObject"
        },
        fieldset: {
          contentTypes: ["flow"],
          allowedRoles: ["none", "presentation", "radiogroup"],
          namingMethods: ["fieldsetLegendText"]
        },
        figcaption: {
          allowedRoles: ["group", "none", "presentation"]
        },
        figure: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          namingMethods: ["figureText", "titleText"]
        },
        footer: {
          contentTypes: ["flow"],
          allowedRoles: ["group", "none", "presentation", "doc-footnote"],
          shadowRoot: !0
        },
        form: {
          contentTypes: ["flow"],
          allowedRoles: ["search", "none", "presentation"]
        },
        h1: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "1"
          }
        },
        h2: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "2"
          }
        },
        h3: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "3"
          }
        },
        h4: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "4"
          }
        },
        h5: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "5"
          }
        },
        h6: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "6"
          }
        },
        head: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        header: {
          contentTypes: ["flow"],
          allowedRoles: ["group", "none", "presentation", "doc-footnote"],
          shadowRoot: !0
        },
        hgroup: {
          contentTypes: ["heading", "flow"],
          allowedRoles: !0
        },
        hr: {
          contentTypes: ["flow"],
          allowedRoles: ["none", "presentation", "doc-pagebreak"],
          namingMethods: ["titleText", "singleSpace"]
        },
        html: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        i: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        iframe: {
          contentTypes: ["interactive", "embedded", "phrasing", "flow"],
          allowedRoles: ["application", "document", "img", "none", "presentation"],
          chromiumRole: "Iframe"
        },
        img: {
          variant: {
            nonEmptyAlt: {
              matches: [{
                attributes: {
                  alt: "/.+/"
                }
              }, {
                hasAccessibleName: !0
              }],
              allowedRoles: ["button", "checkbox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "meter", "option", "progressbar", "radio", "scrollbar", "separator", "slider", "switch", "tab", "treeitem", "doc-cover"]
            },
            usemap: {
              matches: "[usemap]",
              contentTypes: ["interactive", "embedded", "flow"]
            },
            default: {
              allowedRoles: ["presentation", "none"],
              contentTypes: ["embedded", "flow"]
            }
          },
          namingMethods: ["altText"]
        },
        input: {
          variant: {
            button: {
              matches: {
                properties: {
                  type: "button"
                }
              },
              allowedRoles: ["checkbox", "combobox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"]
            },
            buttonType: {
              matches: {
                properties: {
                  type: ["button", "submit", "reset"]
                }
              },
              namingMethods: ["valueText", "titleText", "buttonDefaultText"]
            },
            checkboxPressed: {
              matches: {
                properties: {
                  type: "checkbox"
                },
                attributes: {
                  "aria-pressed": "/.*/"
                }
              },
              allowedRoles: ["button", "menuitemcheckbox", "option", "switch"],
              implicitAttrs: {
                "aria-checked": "false"
              }
            },
            checkbox: {
              matches: {
                properties: {
                  type: "checkbox"
                },
                attributes: {
                  "aria-pressed": null
                }
              },
              allowedRoles: ["menuitemcheckbox", "option", "switch"],
              implicitAttrs: {
                "aria-checked": "false"
              }
            },
            noRoles: {
              matches: {
                properties: {
                  type: ["color", "date", "datetime-local", "file", "month", "number", "password", "range", "reset", "submit", "time", "week"]
                }
              },
              allowedRoles: !1
            },
            hidden: {
              matches: {
                properties: {
                  type: "hidden"
                }
              },
              contentTypes: ["flow"],
              allowedRoles: !1,
              noAriaAttrs: !0
            },
            image: {
              matches: {
                properties: {
                  type: "image"
                }
              },
              allowedRoles: ["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio", "switch"],
              namingMethods: ["altText", "valueText", "labelText", "titleText", "buttonDefaultText"]
            },
            radio: {
              matches: {
                properties: {
                  type: "radio"
                }
              },
              allowedRoles: ["menuitemradio"],
              implicitAttrs: {
                "aria-checked": "false"
              }
            },
            textWithList: {
              matches: {
                properties: {
                  type: "text"
                },
                attributes: {
                  list: "/.*/"
                }
              },
              allowedRoles: !1
            },
            default: {
              contentTypes: ["interactive", "flow"],
              allowedRoles: ["combobox", "searchbox", "spinbutton"],
              implicitAttrs: {
                "aria-valuenow": ""
              },
              namingMethods: ["labelText", "placeholderText"]
            }
          }
        },
        ins: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        kbd: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        label: {
          contentTypes: ["interactive", "phrasing", "flow"],
          allowedRoles: !1,
          chromiumRole: "Label"
        },
        legend: {
          allowedRoles: !1
        },
        li: {
          allowedRoles: ["menuitem", "menuitemcheckbox", "menuitemradio", "option", "none", "presentation", "radio", "separator", "tab", "treeitem", "doc-biblioentry", "doc-endnote"],
          implicitAttrs: {
            "aria-setsize": "1",
            "aria-posinset": "1"
          }
        },
        link: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        main: {
          contentTypes: ["flow"],
          allowedRoles: !1,
          shadowRoot: !0
        },
        map: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        math: {
          contentTypes: ["embedded", "phrasing", "flow"],
          allowedRoles: !1
        },
        mark: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        menu: {
          contentTypes: ["flow"],
          allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]
        },
        meta: {
          variant: {
            itemprop: {
              matches: "[itemprop]",
              contentTypes: ["phrasing", "flow"]
            }
          },
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        meter: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          chromiumRole: "progressbar"
        },
        nav: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["doc-index", "doc-pagelist", "doc-toc", "menu", "menubar", "none", "presentation", "tablist"],
          shadowRoot: !0
        },
        noscript: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        object: {
          variant: {
            usemap: {
              matches: "[usemap]",
              contentTypes: ["interactive", "embedded", "phrasing", "flow"]
            },
            default: {
              contentTypes: ["embedded", "phrasing", "flow"]
            }
          },
          allowedRoles: ["application", "document", "img"],
          chromiumRole: "PluginObject"
        },
        ol: {
          contentTypes: ["flow"],
          allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]
        },
        optgroup: {
          allowedRoles: !1
        },
        option: {
          allowedRoles: !1,
          implicitAttrs: {
            "aria-selected": "false"
          }
        },
        output: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0,
          namingMethods: ["subtreeText"]
        },
        p: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        param: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        picture: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        pre: {
          contentTypes: ["flow"],
          allowedRoles: !0
        },
        progress: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          implicitAttrs: {
            "aria-valuemax": "100",
            "aria-valuemin": "0",
            "aria-valuenow": "0"
          }
        },
        q: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        rp: {
          allowedRoles: !0
        },
        rt: {
          allowedRoles: !0
        },
        ruby: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        s: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        samp: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        script: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        search: {
          contentTypes: ["flow"],
          allowedRoles: ["form", "group", "none", "presentation", "region", "search"]
        },
        section: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["alert", "alertdialog", "application", "banner", "complementary", "contentinfo", "dialog", "document", "feed", "group", "log", "main", "marquee", "navigation", "none", "note", "presentation", "search", "status", "tabpanel", "doc-abstract", "doc-acknowledgments", "doc-afterword", "doc-appendix", "doc-bibliography", "doc-chapter", "doc-colophon", "doc-conclusion", "doc-credit", "doc-credits", "doc-dedication", "doc-endnotes", "doc-epigraph", "doc-epilogue", "doc-errata", "doc-example", "doc-foreword", "doc-glossary", "doc-index", "doc-introduction", "doc-notice", "doc-pagelist", "doc-part", "doc-preface", "doc-prologue", "doc-pullquote", "doc-qna", "doc-toc"],
          shadowRoot: !0
        },
        select: {
          variant: {
            combobox: {
              matches: {
                attributes: {
                  multiple: null,
                  size: [null, "1"]
                }
              },
              allowedRoles: ["menu"]
            },
            default: {
              allowedRoles: !1
            }
          },
          contentTypes: ["interactive", "phrasing", "flow"],
          implicitAttrs: {
            "aria-valuenow": ""
          },
          namingMethods: ["labelText"]
        },
        slot: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        small: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        source: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        span: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        strong: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        style: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        svg: {
          contentTypes: ["embedded", "phrasing", "flow"],
          allowedRoles: !0,
          chromiumRole: "SVGRoot",
          namingMethods: ["svgTitleText"]
        },
        sub: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        summary: {
          allowedRoles: !1,
          namingMethods: ["subtreeText"]
        },
        sup: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        table: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          namingMethods: ["tableCaptionText", "tableSummaryText"]
        },
        tbody: {
          allowedRoles: !0
        },
        template: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        textarea: {
          contentTypes: ["interactive", "phrasing", "flow"],
          allowedRoles: !1,
          implicitAttrs: {
            "aria-valuenow": "",
            "aria-multiline": "true"
          },
          namingMethods: ["labelText", "placeholderText"]
        },
        tfoot: {
          allowedRoles: !0
        },
        thead: {
          allowedRoles: !0
        },
        time: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        title: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        td: {
          allowedRoles: !0
        },
        th: {
          allowedRoles: !0
        },
        tr: {
          allowedRoles: !0
        },
        track: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        u: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        ul: {
          contentTypes: ["flow"],
          allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]
        },
        var: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        video: {
          variant: {
            controls: {
              matches: "[controls]",
              contentTypes: ["interactive", "embedded", "phrasing", "flow"]
            },
            default: {
              contentTypes: ["embedded", "phrasing", "flow"]
            }
          },
          allowedRoles: ["application"],
          chromiumRole: "video"
        },
        wbr: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: ["presentation", "none"]
        }
      }, qg = Bg, jg = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      }, zg = jg, ks = {
        ariaAttrs: Ts,
        ariaRoles: fe({}, Rs, Ig, Lg),
        htmlElms: qg,
        cssColors: zg
      }, Fr = fe({}, ks);
      function Vg(e) {
        Object.keys(Fr).forEach(function(t) {
          e[t] && (Fr[t] = Ai(Fr[t], e[t]));
        });
      }
      function Hg() {
        Object.keys(Fr).forEach(function(e) {
          Fr[e] = ks[e];
        });
      }
      var he = Fr;
      function $g(e) {
        var t = he.ariaRoles[e];
        return t ? !!t.unsupported : !1;
      }
      var Hi = $g;
      function Ug(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.allowAbstract, a = t.flagUnsupported, n = a === void 0 ? !1 : a, i = he.ariaRoles[e], o = Hi(e);
        return !i || n && o ? !1 : r ? !0 : i.type !== "abstract";
      }
      var Tr = Ug;
      function Gg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.fallback, a = t.abstracts, n = t.dpub;
        if (e = e instanceof Ve ? e : le(e), e.props.nodeType !== 1)
          return null;
        var i = (e.attr("role") || "").trim().toLowerCase(), o = r ? Ye(i) : [i], u = o.find(function(l) {
          return !n && l.substr(0, 4) === "doc-" ? !1 : Tr(l, {
            allowAbstract: a
          });
        });
        return u || null;
      }
      var xe = Gg;
      function Wg(e) {
        return Object.keys(he.htmlElms).filter(function(t) {
          var r = he.htmlElms[t];
          return r.contentTypes ? r.contentTypes.includes(e) : r.variant && r.variant.default && r.variant.default.contentTypes ? r.variant.default.contentTypes.includes(e) : !1;
        });
      }
      var $i = Wg;
      function Yg() {
        return ue.get("globalAriaAttrs", function() {
          return Object.keys(he.ariaAttrs).filter(function(e) {
            return he.ariaAttrs[e].global;
          });
        });
      }
      var dr = Yg;
      function Xg(e) {
        for (var t = [], r = e.rows, a = 0, n = r.length; a < n; a++) {
          var i = r[a].cells;
          t[a] = t[a] || [];
          for (var o = 0, u = 0, l = i.length; u < l; u++)
            for (var s = 0; s < i[u].colSpan; s++) {
              for (var c = i[u].getAttribute("rowspan"), d = parseInt(c) === 0 || i[u].rowspan === 0 ? r.length : i[u].rowSpan, f = 0; f < d; f++) {
                for (t[a + f] = t[a + f] || []; t[a + f][o]; )
                  o++;
                t[a + f][o] = i[u];
              }
              o++;
            }
        }
        return t;
      }
      var Nt = Le(Xg);
      function Kg(e, t) {
        var r, a;
        for (t || (t = Nt(Ar(e, "table"))), r = 0; r < t.length; r++)
          if (t[r] && (a = t[r].indexOf(e), a !== -1))
            return {
              x: a,
              y: r
            };
      }
      var an = Le(Kg);
      function Ui(e) {
        var t = De(e), r = t.vNode, a = t.domNode, n = r.attr("scope"), i = r.attr("role");
        if (!["td", "th"].includes(r.props.nodeName))
          throw new TypeError("Expected TD or TH element");
        if (i === "columnheader")
          return "col";
        if (i === "rowheader")
          return "row";
        if (n === "col" || n === "row")
          return n;
        if (r.props.nodeName !== "th")
          return !1;
        if (!r.actualNode)
          return "auto";
        var o = Nt(Ar(a, "table")), u = an(a, o), l = o[u.y].every(function(c) {
          return c.nodeName.toUpperCase() === "TH";
        });
        if (l)
          return "col";
        var s = o.map(function(c) {
          return c[u.x];
        }).every(function(c) {
          return c && c.nodeName.toUpperCase() === "TH";
        });
        return s ? "row" : "auto";
      }
      function Zg(e) {
        return ["col", "auto"].indexOf(Ui(e)) !== -1;
      }
      var Rr = Zg;
      function Jg(e) {
        return ["row", "auto"].includes(Ui(e));
      }
      var kr = Jg;
      function Qg(e) {
        return e ? e.replace(/\r\n/g, `
`).replace(/\u00A0/g, " ").replace(/[\s]{2,}/g, " ").trim() : "";
      }
      var ae = Qg, Ss = function() {
        return ue.get("sectioningElementSelector", function() {
          return $i("sectioning").map(function(t) {
            return "".concat(t, ":not([role])");
          }).join(", ") + " , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]";
        });
      };
      function Os(e) {
        var t = ae(ta(e)), r = ae(ra(e));
        return !!(t || r);
      }
      var eb = {
        a: function(t) {
          return t.hasAttr("href") ? "link" : null;
        },
        area: function(t) {
          return t.hasAttr("href") ? "link" : null;
        },
        article: "article",
        aside: "complementary",
        body: "document",
        button: "button",
        datalist: "listbox",
        dd: "definition",
        dfn: "term",
        details: "group",
        dialog: "dialog",
        dt: "term",
        fieldset: "group",
        figure: "figure",
        footer: function(t) {
          var r = at(t, Ss());
          return r ? null : "contentinfo";
        },
        form: function(t) {
          return Os(t) ? "form" : null;
        },
        h1: "heading",
        h2: "heading",
        h3: "heading",
        h4: "heading",
        h5: "heading",
        h6: "heading",
        header: function(t) {
          var r = at(t, Ss());
          return r ? null : "banner";
        },
        hr: "separator",
        img: function(t) {
          var r = t.hasAttr("alt") && !t.attr("alt"), a = dr().find(function(n) {
            return t.hasAttr(n);
          });
          return r && !a && !ke(t) ? "presentation" : "img";
        },
        input: function(t) {
          var r;
          if (t.hasAttr("list")) {
            var a = Et(t.actualNode, "list").filter(function(n) {
              return !!n;
            })[0];
            r = a && a.nodeName.toLowerCase() === "datalist";
          }
          switch (t.props.type) {
            case "checkbox":
              return "checkbox";
            case "number":
              return "spinbutton";
            case "radio":
              return "radio";
            case "range":
              return "slider";
            case "search":
              return r ? "combobox" : "searchbox";
            case "button":
            case "image":
            case "reset":
            case "submit":
              return "button";
            case "text":
            case "tel":
            case "url":
            case "email":
            case "":
              return r ? "combobox" : "textbox";
            default:
              return "textbox";
          }
        },
        li: "listitem",
        main: "main",
        math: "math",
        menu: "list",
        nav: "navigation",
        ol: "list",
        optgroup: "group",
        option: "option",
        output: "status",
        progress: "progressbar",
        search: "search",
        section: function(t) {
          return Os(t) ? "region" : null;
        },
        select: function(t) {
          return t.hasAttr("multiple") || parseInt(t.attr("size")) > 1 ? "listbox" : "combobox";
        },
        summary: "button",
        table: "table",
        tbody: "rowgroup",
        td: function(t) {
          var r = at(t, "table"), a = xe(r);
          return ["grid", "treegrid"].includes(a) ? "gridcell" : "cell";
        },
        textarea: "textbox",
        tfoot: "rowgroup",
        th: function(t) {
          if (Rr(t))
            return "columnheader";
          if (kr(t))
            return "rowheader";
        },
        thead: "rowgroup",
        tr: "row",
        ul: "list"
      }, Gi = eb;
      function tb(e, t) {
        var r = k(t);
        if (Array.isArray(t) && typeof e < "u")
          return t.includes(e);
        if (r === "function")
          return !!t(e);
        if (e != null) {
          if (t instanceof RegExp)
            return t.test(e);
          if (/^\/.*\/$/.test(t)) {
            var a = t.substring(1, t.length - 1);
            return new RegExp(a).test(e);
          }
        }
        return t === e;
      }
      var fr = tb;
      function rb(e, t) {
        return fr(!!$e(e), t);
      }
      var Ms = rb;
      function ab(e, t) {
        var r = k(t);
        if (r !== "object" || Array.isArray(t) || t instanceof RegExp)
          throw new Error("Expect matcher to be an object");
        return Object.keys(t).every(function(a) {
          return fr(e(a), t[a]);
        });
      }
      var Wi = ab;
      function nb(e, t) {
        return e = De(e).vNode, Wi(function(r) {
          return e.attr(r);
        }, t);
      }
      var Ns = nb;
      function Is(e, t) {
        return !!t(e);
      }
      function ib(e, t) {
        return fr(xe(e), t);
      }
      var Ps = ib;
      function ob(e, t) {
        return fr(Ct(e), t);
      }
      var Ls = ob;
      function ub(e, t) {
        return e = De(e).vNode, fr(e.props.nodeName, t);
      }
      var Bs = ub;
      function lb(e, t) {
        return e = De(e).vNode, Wi(function(r) {
          return e.props[r];
        }, t);
      }
      var qs = lb;
      function sb(e, t) {
        return fr(ce(e), t);
      }
      var js = sb, zs = {
        hasAccessibleName: Ms,
        attributes: Ns,
        condition: Is,
        explicitRole: Ps,
        implicitRole: Ls,
        nodeName: Bs,
        properties: qs,
        semanticRole: js
      };
      function Vs(e, t) {
        return e = De(e).vNode, Array.isArray(t) ? t.some(function(r) {
          return Vs(e, r);
        }) : typeof t == "string" ? fi(e, t) : Object.keys(t).every(function(r) {
          if (!zs[r])
            throw new Error('Unknown matcher type "'.concat(r, '"'));
          var a = zs[r], n = t[r];
          return a(e, n);
        });
      }
      var Hs = Vs;
      function cb(e, t) {
        return Hs(e, t);
      }
      var it = cb;
      it.hasAccessibleName = Ms, it.attributes = Ns, it.condition = Is, it.explicitRole = Ps, it.fromDefinition = Hs, it.fromFunction = Wi, it.fromPrimative = fr, it.implicitRole = Ls, it.nodeName = Bs, it.properties = qs, it.semanticRole = js;
      var aa = it;
      function db(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noMatchAccessibleName, a = r === void 0 ? !1 : r, n = he.htmlElms[e.props.nodeName];
        if (!n)
          return {};
        if (!n.variant)
          return n;
        var i = n.variant, o = Pe(n, $f);
        for (var u in i)
          if (!(!i.hasOwnProperty(u) || u === "default")) {
            for (var l = i[u], s = l.matches, c = Pe(l, Uf), d = Array.isArray(s) ? s : [s], f = 0; f < d.length && a; f++)
              if (d[f].hasOwnProperty("hasAccessibleName"))
                return n;
            if (aa(e, s))
              for (var p in c)
                c.hasOwnProperty(p) && (o[p] = c[p]);
          }
        for (var m in i.default)
          i.default.hasOwnProperty(m) && typeof o[m] > "u" && (o[m] = i.default[m]);
        return o;
      }
      var pr = db;
      function fb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.chromium, a = e instanceof Ve ? e : le(e);
        if (e = a.actualNode, !a)
          throw new ReferenceError("Cannot get implicit role of a node outside the current scope.");
        var n = a.props.nodeName, i = Gi[n];
        if (!i && r) {
          var o = pr(a), u = o.chromiumRole;
          return u || null;
        }
        return typeof i == "function" ? i(a) : i || null;
      }
      var Ct = fb, pb = {
        td: ["tr"],
        th: ["tr"],
        tr: ["thead", "tbody", "tfoot", "table"],
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        li: ["ol", "ul"],
        dt: ["dl", "div"],
        dd: ["dl", "div"],
        div: ["dl"]
      };
      function $s(e, t) {
        var r = pb[e.props.nodeName];
        if (!r)
          return null;
        if (!e.parent) {
          if (!e.actualNode)
            return null;
          throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.");
        }
        if (!r.includes(e.parent.props.nodeName))
          return null;
        var a = xe(e.parent, t);
        return ["none", "presentation"].includes(a) && !Gs(e.parent) ? a : a ? null : $s(e.parent, t);
      }
      function Us(e, t) {
        var r = t.chromium, a = Pe(t, Gf), n = Ct(e, {
          chromium: r
        });
        if (!n)
          return null;
        var i = $s(e, a);
        return i || n;
      }
      function Gs(e) {
        var t = dr().some(function(r) {
          return e.hasAttr(r);
        });
        return t || ke(e);
      }
      function mb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noImplicit, a = Pe(t, Wf), n = De(e), i = n.vNode;
        if (i.props.nodeType !== 1)
          return null;
        var o = xe(i, a);
        return o ? ["presentation", "none"].includes(o) && Gs(i) ? r ? null : Us(i, a) : o : r ? null : Us(i, a);
      }
      function hb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noPresentational, a = Pe(t, Yf), n = mb(e, a);
        return r && ["presentation", "none"].includes(n) ? null : n;
      }
      var ce = hb, vb = ["iframe"];
      function gb(e) {
        var t = De(e), r = t.vNode;
        return r.props.nodeType !== 1 || !e.hasAttr("title") || !it(r, vb) && ["none", "presentation"].includes(ce(r)) ? "" : r.attr("title");
      }
      var nn = gb;
      function bb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.strict;
        if (e = e instanceof Ve ? e : le(e), e.props.nodeType !== 1)
          return !1;
        var a = ce(e), n = he.ariaRoles[a];
        return n && n.nameFromContent ? !0 : r ? !1 : !n || ["presentation", "none"].includes(a);
      }
      var Ws = bb;
      function yb(e) {
        var t = e.actualNode, r = e.children;
        if (!r)
          throw new Error("getOwnedVirtual requires a virtual node");
        if (e.hasAttr("aria-owns")) {
          var a = Et(t, "aria-owns").filter(function(n) {
            return !!n;
          }).map(function(n) {
            return y.utils.getNodeFromTree(n);
          });
          return [].concat(re(r), re(a));
        }
        return re(r);
      }
      var na = yb, Ys = {
        accessibleNameFromFieldValue: ["progressbar"]
      };
      function Fe(e) {
        return e = De(e).vNode, Yi(e);
      }
      var Yi = Le(function(t, r) {
        return Jl(t) || tn(t, {
          skipAncestors: !0,
          isAncestor: r
        }) ? !1 : t.actualNode && t.props.nodeName === "area" ? !Ri(t, Yi) : zt(t, {
          skipAncestors: !0,
          isAncestor: r
        }) ? !1 : t.parent ? Yi(t.parent, !0) : !0;
      });
      function Xs(e, t, r) {
        var a = De(e), n = a.vNode, i = t ? Fe : nt, o = !e.actualNode || e.actualNode && i(e), u = n.children.map(function(l) {
          var s = l.props, c = s.nodeType, d = s.nodeValue;
          if (c === 3) {
            if (d && o)
              return d;
          } else if (!r)
            return Xs(l, t);
        }).join("");
        return ae(u);
      }
      var At = Xs, wb = ["button", "checkbox", "color", "file", "hidden", "image", "password", "radio", "reset", "submit"];
      function Db(e) {
        e = e instanceof Ve ? e : le(e);
        var t = e.props.nodeName;
        return t === "textarea" || t === "input" && !wb.includes((e.attr("type") || "").toLowerCase());
      }
      var Ks = Db;
      function _b(e) {
        e = e instanceof Ve ? e : le(e);
        var t = e.props.nodeName;
        return t === "select";
      }
      var Zs = _b;
      function xb(e) {
        var t = xe(e);
        return t === "textbox";
      }
      var Js = xb;
      function Eb(e) {
        var t = xe(e);
        return t === "listbox";
      }
      var Qs = Eb;
      function Cb(e) {
        var t = xe(e);
        return t === "combobox";
      }
      var ec = Cb, Ab = ["progressbar", "scrollbar", "slider", "spinbutton"];
      function Fb(e) {
        var t = xe(e);
        return Ab.includes(t);
      }
      var tc = Fb, rc = ["textbox", "progressbar", "scrollbar", "slider", "spinbutton", "combobox", "listbox"], Xi = {
        nativeTextboxValue: Rb,
        nativeSelectValue: kb,
        ariaTextboxValue: Sb,
        ariaListboxValue: ac,
        ariaComboboxValue: Ob,
        ariaRangeValue: Mb
      };
      function Tb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode, a = Ys.accessibleNameFromFieldValue || [], n = ce(e);
        if (t.startNode === e || !rc.includes(n) || a.includes(n))
          return "";
        var i = Object.keys(Xi).map(function(u) {
          return Xi[u];
        }), o = i.reduce(function(u, l) {
          return u || l(e, t);
        }, "");
        return t.debug && nr(o || "{empty-value}", r, t), o;
      }
      function Rb(e) {
        var t = De(e), r = t.vNode;
        return Ks(r) && r.props.value || "";
      }
      function kb(e) {
        var t = De(e), r = t.vNode;
        if (!Zs(r))
          return "";
        var a = st(r, "option"), n = a.filter(function(i) {
          return i.props.selected;
        });
        return n.length || n.push(a[0]), n.map(function(i) {
          return At(i);
        }).join(" ") || "";
      }
      function Sb(e) {
        var t = De(e), r = t.vNode, a = t.domNode;
        return Js(r) ? !a || a && !zt(a) ? At(r, !0) : a.textContent : "";
      }
      function ac(e, t) {
        var r = De(e), a = r.vNode;
        if (!Qs(a))
          return "";
        var n = na(a).filter(function(i) {
          return ce(i) === "option" && i.attr("aria-selected") === "true";
        });
        return n.length === 0 ? "" : $e(n[0], t);
      }
      function Ob(e, t) {
        var r = De(e), a = r.vNode;
        if (!ec(a))
          return "";
        var n = na(a).filter(function(i) {
          return ce(i) === "listbox";
        })[0];
        return n ? ac(n, t) : "";
      }
      function Mb(e) {
        var t = De(e), r = t.vNode;
        if (!tc(r) || !r.hasAttr("aria-valuenow"))
          return "";
        var a = +r.attr("aria-valuenow");
        return isNaN(a) ? "0" : String(a);
      }
      var nc = Tb;
      function Nb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = $e.alreadyProcessed;
        t.startNode = t.startNode || e;
        var a = t, n = a.strict, i = a.inControlContext, o = a.inLabelledByContext, u = ce(e), l = pr(e, {
          noMatchAccessibleName: !0
        }), s = l.contentTypes;
        if (r(e, t) || e.props.nodeType !== 1 || s != null && s.includes("embedded") || rc.includes(u) || !t.subtreeDescendant && !t.inLabelledByContext && !Ws(e, {
          strict: n
        }))
          return "";
        if (!n) {
          var c = !i && !o;
          t = fe({
            subtreeDescendant: c
          }, t);
        }
        return na(e).reduce(function(d, f) {
          return Pb(d, f, t);
        }, "");
      }
      var Ib = $i("phrasing").concat(["#text"]);
      function Pb(e, t, r) {
        var a = t.props.nodeName, n = $e(t, r);
        return n ? (Ib.includes(a) || (n[0] !== " " && (n += " "), e && e[e.length - 1] !== " " && (n = " " + n)), e + n) : e;
      }
      var Vt = Nb;
      function Lb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = $e.alreadyProcessed;
        if (t.inControlContext || t.inLabelledByContext || r(e, t))
          return "";
        t.startNode || (t.startNode = e);
        var a = fe({
          inControlContext: !0
        }, t), n = Bb(e), i = at(e, "label"), o;
        return i ? (o = [].concat(re(n), [i.actualNode]), o.sort(Uo)) : o = n, o.map(function(u) {
          return cr(u, a);
        }).filter(function(u) {
          return u !== "";
        }).join(" ");
      }
      function Bb(e) {
        if (!e.attr("id"))
          return [];
        if (!e.actualNode)
          throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
        return Ul({
          elm: "label",
          attr: "for",
          value: e.attr("id"),
          context: e.actualNode
        });
      }
      var Ki = Lb, qb = {
        submit: "Submit",
        image: "Submit",
        reset: "Reset",
        button: ""
      }, jb = {
        valueText: function(t) {
          var r = t.actualNode;
          return r.value || "";
        },
        buttonDefaultText: function(t) {
          var r = t.actualNode;
          return qb[r.type] || "";
        },
        tableCaptionText: on.bind(null, "caption"),
        figureText: on.bind(null, "figcaption"),
        svgTitleText: on.bind(null, "title"),
        fieldsetLegendText: on.bind(null, "legend"),
        altText: Zi.bind(null, "alt"),
        tableSummaryText: Zi.bind(null, "summary"),
        titleText: nn,
        subtreeText: Vt,
        labelText: Ki,
        singleSpace: function() {
          return " ";
        },
        placeholderText: Zi.bind(null, "placeholder")
      };
      function Zi(e, t) {
        return t.attr(e) || "";
      }
      function on(e, t, r) {
        var a = t.actualNode;
        e = e.toLowerCase();
        var n = [e, a.nodeName.toLowerCase()].join(","), i = a.querySelector(n);
        return !i || i.nodeName.toLowerCase() !== e ? "" : cr(i, r);
      }
      var ic = jb;
      function oc(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode;
        if (e.props.nodeType !== 1 || ["presentation", "none"].includes(ce(e)))
          return "";
        var a = zb(e), n = a.reduce(function(i, o) {
          return i || o(e, t);
        }, "");
        return t.debug && y.log(n || "{empty-value}", r, t), n;
      }
      function zb(e) {
        var t = pr(e, {
          noMatchAccessibleName: !0
        }), r = t.namingMethods || [];
        return r.map(function(a) {
          return ic[a];
        });
      }
      function uc() {
        return /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g;
      }
      function lc() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g;
      }
      function sc() {
        return /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g;
      }
      function cc() {
        return /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;
      }
      var Ji = function() {
        return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
      };
      function Vb(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations, i = !1;
        return r && (i || (i = Ji().test(e))), a && (i || (i = uc().test(e) || sc().test(e) || cc().test(e))), n && (i || (i = lc().test(e))), i;
      }
      var Qi = Vb;
      function eo(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, a = e.actualNode.nodeValue.trim();
        if (!ae(a) || Qi(a, {
          emoji: !0,
          nonBmp: !0
        }))
          return !1;
        var n = ue.get("canvasContext", function() {
          return M.createElement("canvas").getContext("2d", {
            willReadFrequently: !0
          });
        }), i = n.canvas, o = ue.get("fonts", function() {
          return {};
        }), u = _.getComputedStyle(e.parent.actualNode), l = u.getPropertyValue("font-family");
        o[l] || (o[l] = {
          occurrences: 0,
          numLigatures: 0
        });
        var s = o[l];
        if (s.occurrences >= r) {
          if (s.numLigatures / s.occurrences === 1)
            return !0;
          if (s.numLigatures === 0)
            return !1;
        }
        s.occurrences++;
        var c = 30, d = "".concat(c, "px ").concat(l);
        n.font = d;
        var f = a.charAt(0), p = n.measureText(f).width;
        if (p === 0)
          return s.numLigatures++, !0;
        if (p < 30) {
          var m = 30 / p;
          p *= m, c *= m, d = "".concat(c, "px ").concat(l);
        }
        i.width = p, i.height = c, n.font = d, n.textAlign = "left", n.textBaseline = "top", n.fillText(f, 0, 0);
        var h = new Uint32Array(n.getImageData(0, 0, p, c).data.buffer);
        if (!h.some(function(R) {
          return R;
        }))
          return s.numLigatures++, !0;
        n.clearRect(0, 0, p, c), n.fillText(a, 0, 0);
        var b = new Uint32Array(n.getImageData(0, 0, p, c).data.buffer), v = h.reduce(function(R, S, L) {
          return S === 0 && b[L] === 0 || S !== 0 && b[L] !== 0 ? R : ++R;
        }, 0), g = a.split("").reduce(function(R, S) {
          return R + n.measureText(S).width;
        }, 0), w = n.measureText(a).width, D = v / h.length, F = 1 - w / g;
        return D >= t && F >= t ? (s.numLigatures++, !0) : !1;
      }
      function $e(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t = Gb(e, t), $b(e, t) || Ub(e, t))
          return "";
        var r = [ta, ra, oc, nc, Vt, Hb, nn], a = r.reduce(function(n, i) {
          return t.startNode === e && (n = ae(n)), n !== "" ? n : i(e, t);
        }, "");
        return t.debug && y.log(a || "{empty-value}", e.actualNode, t), a;
      }
      function Hb(e) {
        return e.props.nodeType !== 3 ? "" : e.props.nodeValue;
      }
      function $b(e, t) {
        return !e || e.props.nodeType !== 1 || t.includeHidden ? !1 : !Fe(e);
      }
      function Ub(e, t) {
        var r, a = t.ignoreIconLigature, n = t.pixelThreshold, i = (r = t.occurrenceThreshold) !== null && r !== void 0 ? r : t.occuranceThreshold;
        return e.props.nodeType !== 3 || !a ? !1 : eo(e, n, i);
      }
      function Gb(e, t) {
        return t.startNode || (t = fe({
          startNode: e
        }, t)), e.props.nodeType === 1 && t.inLabelledByContext && t.includeHidden === void 0 && (t = fe({
          includeHidden: !Fe(e)
        }, t)), t;
      }
      $e.alreadyProcessed = function(t, r) {
        return r.processed = r.processed || [], r.processed.includes(t) ? !0 : (r.processed.push(t), !1);
      };
      function Wb(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations;
        return r && (e = e.replace(Ji(), "")), a && (e = e.replace(uc(), "").replace(sc(), "").replace(cc(), "")), n && (e = e.replace(lc(), "")), e;
      }
      var ia = Wb;
      function Yb(e) {
        if (!e.length)
          return 0;
        var t = ["x", "i"];
        if (t.includes(e))
          return 0;
        var r = ia(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return ae(r) ? 1 : 0;
      }
      var to = Yb, mr = {
        stateTerms: ["on", "off"],
        standaloneTerms: ["name", "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "nickname", "username", "new-password", "current-password", "organization-title", "organization", "street-address", "address-line1", "address-line2", "address-line3", "address-level4", "address-level3", "address-level2", "address-level1", "country", "country-name", "postal-code", "cc-name", "cc-given-name", "cc-additional-name", "cc-family-name", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc", "cc-type", "transaction-currency", "transaction-amount", "language", "bday", "bday-day", "bday-month", "bday-year", "sex", "url", "photo", "one-time-code"],
        qualifiers: ["home", "work", "mobile", "fax", "pager"],
        qualifiedTerms: ["tel", "tel-country-code", "tel-national", "tel-area-code", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-extension", "email", "impp"],
        locations: ["billing", "shipping"]
      };
      function Xb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.looseTyped, a = r === void 0 ? !1 : r, n = t.stateTerms, i = n === void 0 ? [] : n, o = t.locations, u = o === void 0 ? [] : o, l = t.qualifiers, s = l === void 0 ? [] : l, c = t.standaloneTerms, d = c === void 0 ? [] : c, f = t.qualifiedTerms, p = f === void 0 ? [] : f;
        if (e = e.toLowerCase().trim(), i = i.concat(mr.stateTerms), i.includes(e) || e === "")
          return !0;
        s = s.concat(mr.qualifiers), u = u.concat(mr.locations), d = d.concat(mr.standaloneTerms), p = p.concat(mr.qualifiedTerms);
        var m = e.split(/\s+/g);
        if (m[m.length - 1] === "webauthn" && (m.pop(), m.length === 0) || !a && (m[0].length > 8 && m[0].substr(0, 8) === "section-" && m.shift(), u.includes(m[0]) && m.shift(), s.includes(m[0]) && (m.shift(), d = []), m.length !== 1))
          return !1;
        var h = m[m.length - 1];
        return d.includes(h) || p.includes(h);
      }
      var dc = Xb;
      function Kb(e) {
        var t, r;
        return e.attr("aria-labelledby") && (t = Et(e.actualNode, "aria-labelledby"), r = t.map(function(a) {
          var n = le(a);
          return n ? At(n) : "";
        }).join(" ").trim(), r) || (r = e.attr("aria-label"), r && (r = ae(r), r)) ? r : null;
      }
      var un = Kb;
      function Zb(e, t, r) {
        return e = le(e), At(e, t, r);
      }
      var fc = Zb;
      function Jb(e) {
        var t, r, a;
        if (r = un(e), r)
          return r;
        if (e.attr("id")) {
          if (!e.actualNode)
            throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
          var n = Re(e.attr("id"));
          if (a = We(e.actualNode), t = a.querySelector('label[for="' + n + '"]'), r = t && fc(t, !0), r)
            return r;
        }
        return t = at(e, "label"), r = t && At(t, !0), r || null;
      }
      var ln = Jb;
      function Qb(e) {
        return e = le(e), ln(e);
      }
      var ey = Qb, ty = [{
        matches: [{
          nodeName: "textarea"
        }, {
          nodeName: "input",
          properties: {
            type: ["text", "password", "search", "tel", "email", "url"]
          }
        }],
        namingMethods: "labelText"
      }, {
        matches: {
          nodeName: "input",
          properties: {
            type: ["button", "submit", "reset"]
          }
        },
        namingMethods: ["valueText", "titleText", "buttonDefaultText"]
      }, {
        matches: {
          nodeName: "input",
          properties: {
            type: "image"
          }
        },
        namingMethods: ["altText", "valueText", "labelText", "titleText", "buttonDefaultText"]
      }, {
        matches: "button",
        namingMethods: "subtreeText"
      }, {
        matches: "fieldset",
        namingMethods: "fieldsetLegendText"
      }, {
        matches: "OUTPUT",
        namingMethods: "subtreeText"
      }, {
        matches: [{
          nodeName: "select"
        }, {
          nodeName: "input",
          properties: {
            type: /^(?!text|password|search|tel|email|url|button|submit|reset)/
          }
        }],
        namingMethods: "labelText"
      }, {
        matches: "summary",
        namingMethods: "subtreeText"
      }, {
        matches: "figure",
        namingMethods: ["figureText", "titleText"]
      }, {
        matches: "img",
        namingMethods: "altText"
      }, {
        matches: "table",
        namingMethods: ["tableCaptionText", "tableSummaryText"]
      }, {
        matches: ["hr", "br"],
        namingMethods: ["titleText", "singleSpace"]
      }], ry = ty;
      function pc(e) {
        var t = nt(e), r = [];
        return e.children.forEach(function(a) {
          a.actualNode.nodeType === 3 ? t && r.push(a) : r = r.concat(pc(a));
        }), r;
      }
      var ay = pc, ny = Le(function(t) {
        var r = le(t), a = r.boundingClientRect, n = [], i = Wa(r);
        return t.childNodes.forEach(function(o) {
          if (!(o.nodeType !== 3 || ae(o.nodeValue) === "")) {
            var u = iy(o);
            oy(u, a) || n.push.apply(n, re(uy(u, i)));
          }
        }), n.length ? n : [a];
      }), ro = ny;
      function iy(e) {
        var t = M.createRange();
        return t.selectNodeContents(e), Array.from(t.getClientRects());
      }
      function oy(e, t) {
        return e.some(function(r) {
          var a = Qr(r);
          return !Za(a, t);
        });
      }
      function uy(e, t) {
        var r = [];
        return e.forEach(function(a) {
          if (!(a.width < 1 || a.height < 1)) {
            var n = t.reduce(function(i, o) {
              return i && Ja(i, o.boundingClientRect);
            }, a);
            n && r.push(n);
          }
        }), r;
      }
      function ly(e) {
        sr();
        var t = le(e), r = t._grid;
        if (!r)
          return [];
        var a = ro(e);
        return a.map(function(n) {
          return zi(r, n);
        });
      }
      var ao = ly, sy = ["checkbox", "img", "meter", "progressbar", "scrollbar", "radio", "slider", "spinbutton", "textbox"];
      function cy(e) {
        var t = De(e), r = t.vNode, a = y.commons.aria.getExplicitRole(r);
        if (a)
          return sy.indexOf(a) !== -1;
        switch (r.props.nodeName) {
          case "img":
          case "iframe":
          case "object":
          case "video":
          case "audio":
          case "canvas":
          case "svg":
          case "math":
          case "button":
          case "select":
          case "textarea":
          case "keygen":
          case "progress":
          case "meter":
            return !0;
          case "input":
            return r.props.type !== "hidden";
          default:
            return !1;
        }
      }
      var no = cy, dy = ["head", "title", "template", "script", "style", "iframe", "object", "video", "audio", "noscript"];
      function mc(e) {
        return dy.includes(e.props.nodeName) ? !1 : e.children.some(function(t) {
          var r = t.props;
          return r.nodeType === 3 && r.nodeValue.trim();
        });
      }
      function hc(e, t, r) {
        return mc(e) || no(e.actualNode) || !r && !!un(e) || !t && e.children.some(function(a) {
          return a.actualNode.nodeType === 1 && hc(a);
        });
      }
      var oa = hc;
      function fy(e, t, r) {
        return e = le(e), oa(e, t, r);
      }
      var sn = fy;
      function io(e) {
        return typeof e.children > "u" || mc(e) ? !0 : e.props.nodeType === 1 && no(e) ? !!y.commons.text.accessibleTextVirtual(e) : e.children.some(function(t) {
          return !t.attr("lang") && io(t) && !zt(t);
        });
      }
      function py(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return t > -1 && ke(e) && !Vi(e);
      }
      var vc = py;
      function gc(e, t) {
        var r = De(e), a = r.vNode, n = r.domNode;
        return a ? (a._isHiddenWithCSS === void 0 && (a._isHiddenWithCSS = bc(n, t)), a._isHiddenWithCSS) : bc(n, t);
      }
      function bc(e, t) {
        if (e.nodeType === 9 || (e.nodeType === 11 && (e = e.host), ["STYLE", "SCRIPT"].includes(e.nodeName.toUpperCase())))
          return !1;
        var r = _.getComputedStyle(e, null);
        if (!r)
          throw new Error("Style does not exist for the given element.");
        var a = r.getPropertyValue("display");
        if (a === "none")
          return !0;
        var n = ["hidden", "collapse"], i = r.getPropertyValue("visibility");
        if (n.includes(i) && !t || n.includes(i) && t && n.includes(t))
          return !0;
        var o = He(e);
        return o && !n.includes(i) ? gc(o, i) : !1;
      }
      var my = gc;
      function hy(e) {
        var t = e.doctype;
        return t === null ? !1 : t.name === "html" && !t.publicId && !t.systemId;
      }
      var yc = hy;
      function vy(e) {
        var t;
        (e instanceof Ve || (t = _) !== null && t !== void 0 && t.Node && e instanceof _.Node) && (e = y.commons.aria.getRole(e));
        var r = he.ariaRoles[e];
        return (r == null ? void 0 : r.type) || null;
      }
      var Ft = vy;
      function wc(e, t) {
        t(e.actualNode) !== !1 && e.children.forEach(function(r) {
          return wc(r, t);
        });
      }
      var gy = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function Dc(e) {
        var t = _.getComputedStyle(e).getPropertyValue("display");
        return gy.includes(t) || t.substr(0, 6) === "table-";
      }
      function by(e) {
        for (var t = He(e); t && !Dc(t); )
          t = He(t);
        return le(t);
      }
      function yy(e, t) {
        if (Dc(e))
          return !1;
        var r = by(e), a = "", n = "", i = 0;
        return wc(r, function(o) {
          if (i === 2)
            return !1;
          if (o.nodeType === 3 && (a += o.nodeValue), o.nodeType === 1) {
            var u = (o.nodeName || "").toUpperCase();
            if (o === e && (i = 1), ["BR", "HR"].includes(u))
              i === 0 ? (a = "", n = "") : i = 2;
            else {
              if (o.style.display === "none" || o.style.overflow === "hidden" || !["", null, "none"].includes(o.style.float) || !["", null, "relative"].includes(o.style.position))
                return !1;
              if (Ft(o) === "widget")
                return n += o.textContent, !1;
            }
          }
        }), a = ae(a), t != null && t.noLengthCompare ? a.length !== 0 : (n = ae(n), a.length > n.length);
      }
      var oo = yy;
      function wy(e) {
        e = e || {};
        var t = e.modalPercent || 0.75;
        if (ue.get("isModalOpen"))
          return ue.get("isModalOpen");
        var r = Rt(y._tree[0], "dialog, [role=dialog], [aria-modal=true]", nt);
        if (r.length)
          return ue.set("isModalOpen", !0), !0;
        for (var a = Ya(_), n = a.width * t, i = a.height * t, o = (a.width - n) / 2, u = (a.height - i) / 2, l = [{
          x: o,
          y: u
        }, {
          x: a.width - o,
          y: u
        }, {
          x: a.width / 2,
          y: a.height / 2
        }, {
          x: o,
          y: a.height - u
        }, {
          x: a.width - o,
          y: a.height - u
        }], s = l.map(function(p) {
          return Array.from(M.elementsFromPoint(p.x, p.y));
        }), c = function(m) {
          var h = s[m].find(function(b) {
            var v = _.getComputedStyle(b);
            return parseInt(v.width, 10) >= n && parseInt(v.height, 10) >= i && v.getPropertyValue("pointer-events") !== "none" && (v.position === "absolute" || v.position === "fixed");
          });
          if (h && s.every(function(b) {
            return b.includes(h);
          }))
            return ue.set("isModalOpen", !0), {
              v: !0
            };
        }, d = 0; d < s.length; d++) {
          var f = c(d);
          if (k(f) === "object")
            return f.v;
        }
        ue.set("isModalOpen", void 0);
      }
      var ua = wy;
      function _c(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, r = e.ownerDocument.createRange();
        r.setStart(e, 0), r.setEnd(e, e.childNodes.length);
        var a = 0, n = 0, i = Ae(r.getClientRects()), o;
        try {
          for (i.s(); !(o = i.n()).done; ) {
            var u = o.value;
            if (!(u.height <= t))
              if (a > u.top + t)
                a = Math.max(a, u.bottom);
              else if (n === 0)
                a = u.bottom, n++;
              else
                return !0;
          }
        } catch (l) {
          i.e(l);
        } finally {
          i.f();
        }
        return !1;
      }
      function Dy(e) {
        return e instanceof _.Node;
      }
      var _y = Dy, uo = "color.incompleteData", xy = {
        set: function(t, r) {
          if (typeof t != "string")
            throw new Error("Incomplete data: key must be a string");
          var a = ue.get(uo, function() {
            return {};
          });
          return r && (a[t] = r), a[t];
        },
        get: function(t) {
          var r = ue.get(uo);
          return r == null ? void 0 : r[t];
        },
        clear: function() {
          ue.set(uo, {});
        }
      }, Ue = xy;
      function Ey(e, t) {
        var r = ["IMG", "CANVAS", "OBJECT", "IFRAME", "VIDEO", "SVG"], a = e.nodeName.toUpperCase();
        if (r.includes(a))
          return Ue.set("bgColor", "imgNode"), !0;
        t = t || _.getComputedStyle(e);
        var n = t.getPropertyValue("background-image"), i = n !== "none";
        if (i) {
          var o = /gradient/.test(n);
          Ue.set("bgColor", o ? "bgGradient" : "bgImage");
        }
        return i;
      }
      var cn = Ey, xc = {};
      ht(xc, {
        Colorjs: function() {
          return ut;
        },
        CssSelectorParser: function() {
          return Ry.CssSelectorParser;
        },
        doT: function() {
          return Ec.default;
        },
        emojiRegexText: function() {
          return Ji;
        },
        memoize: function() {
          return ky.default;
        }
      });
      var Cy = vt(Tm()), Ay = vt(Rm());
      vt(km());
      var Fy = vt(nh()), Ty = vt(bh());
      "hasOwn" in Object || (Object.hasOwn = Fy.default), "values" in Object || (Object.values = Ty.default), "Promise" in _ || Cy.default.polyfill(), "Uint32Array" in _ || (_.Uint32Array = Ay.Uint32Array), _.Uint32Array && ("some" in _.Uint32Array.prototype || Object.defineProperty(_.Uint32Array.prototype, "some", {
        value: Array.prototype.some
      }), "reduce" in _.Uint32Array.prototype || Object.defineProperty(_.Uint32Array.prototype, "reduce", {
        value: Array.prototype.reduce
      })), typeof Object.assign != "function" && function() {
        Object.assign = function(e) {
          if (e == null)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var t = Object(e), r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            if (a != null)
              for (var n in a)
                a.hasOwnProperty(n) && (t[n] = a[n]);
          }
          return t;
        };
      }(), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(t) {
          if (this === null)
            throw new TypeError("Array.prototype.find called on null or undefined");
          if (typeof t != "function")
            throw new TypeError("predicate must be a function");
          for (var r = Object(this), a = r.length >>> 0, n = arguments[1], i, o = 0; o < a; o++)
            if (i = r[o], t.call(n, i, o, r))
              return i;
        }
      }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(t, r) {
          if (this === null)
            throw new TypeError("Array.prototype.find called on null or undefined");
          if (typeof t != "function")
            throw new TypeError("predicate must be a function");
          for (var a = Object(this), n = a.length >>> 0, i, o = 0; o < n; o++)
            if (i = a[o], t.call(r, i, o, a))
              return o;
          return -1;
        }
      }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(t) {
          var r = Object(this), a = parseInt(r.length, 10) || 0;
          if (a === 0)
            return !1;
          var n = parseInt(arguments[1], 10) || 0, i;
          n >= 0 ? i = n : (i = a + n, i < 0 && (i = 0));
          for (var o; i < a; ) {
            if (o = r[i], t === o || t !== t && o !== o)
              return !0;
            i++;
          }
          return !1;
        }
      }), Array.prototype.some || Object.defineProperty(Array.prototype, "some", {
        value: function(t) {
          if (this == null)
            throw new TypeError("Array.prototype.some called on null or undefined");
          if (typeof t != "function")
            throw new TypeError();
          for (var r = Object(this), a = r.length >>> 0, n = arguments.length >= 2 ? arguments[1] : void 0, i = 0; i < a; i++)
            if (i in r && t.call(n, r[i], i, r))
              return !0;
          return !1;
        }
      }), Array.from || Object.defineProperty(Array, "from", {
        value: function() {
          var e = Object.prototype.toString, t = function(o) {
            return typeof o == "function" || e.call(o) === "[object Function]";
          }, r = function(o) {
            var u = Number(o);
            return isNaN(u) ? 0 : u === 0 || !isFinite(u) ? u : (u > 0 ? 1 : -1) * Math.floor(Math.abs(u));
          }, a = Math.pow(2, 53) - 1, n = function(o) {
            var u = r(o);
            return Math.min(Math.max(u, 0), a);
          };
          return function(o) {
            var u = this, l = Object(o);
            if (o == null)
              throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var s = arguments.length > 1 ? arguments[1] : void 0, c;
            if (typeof s < "u") {
              if (!t(s))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
              arguments.length > 2 && (c = arguments[2]);
            }
            for (var d = n(l.length), f = t(u) ? Object(new u(d)) : new Array(d), p = 0, m; p < d; )
              m = l[p], s ? f[p] = typeof c > "u" ? s(m, p) : s.call(c, m, p) : f[p] = m, p += 1;
            return f.length = d, f;
          };
        }()
      }), String.prototype.includes || (String.prototype.includes = function(e, t) {
        return typeof t != "number" && (t = 0), t + e.length > this.length ? !1 : this.indexOf(e, t) !== -1;
      }), Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: function e() {
          var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
          return t ? Array.prototype.reduce.call(this, function(r, a) {
            return Array.isArray(a) ? r.push.apply(r, e.call(a, t - 1)) : r.push(a), r;
          }, []) : Array.prototype.slice.call(this);
        },
        writable: !0
      }), _.Node && !("isConnected" in _.Node.prototype) && Object.defineProperty(_.Node.prototype, "isConnected", {
        get: function() {
          return !this.ownerDocument || !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED);
        }
      });
      var Ry = vt(Gu()), Ec = vt(sl()), ky = vt($u());
      function Ne(e, t) {
        var r = e.length;
        Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map(function(o) {
          return [o];
        }));
        var a = t[0].length, n = t[0].map(function(o, u) {
          return t.map(function(l) {
            return l[u];
          });
        }), i = e.map(function(o) {
          return n.map(function(u) {
            var l = 0;
            if (!Array.isArray(o)) {
              var s = Ae(u), c;
              try {
                for (s.s(); !(c = s.n()).done; ) {
                  var d = c.value;
                  l += o * d;
                }
              } catch (p) {
                s.e(p);
              } finally {
                s.f();
              }
              return l;
            }
            for (var f = 0; f < o.length; f++)
              l += o[f] * (u[f] || 0);
            return l;
          });
        });
        return r === 1 && (i = i[0]), a === 1 ? i.map(function(o) {
          return o[0];
        }) : i;
      }
      function la(e) {
        return Ht(e) === "string";
      }
      function Ht(e) {
        var t = Object.prototype.toString.call(e);
        return (t.match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
      }
      function dn(e, t) {
        e = +e, t = +t;
        var r = (Math.floor(e) + "").length;
        if (t > r)
          return +e.toFixed(t - r);
        var a = Math.pow(10, r - t);
        return Math.round(e / a) * a;
      }
      function Cc(e) {
        if (e) {
          e = e.trim();
          var t = /^([a-z]+)\((.+?)\)$/i, r = /^-?[\d.]+$/, a = e.match(t);
          if (a) {
            var n = [];
            return a[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g, function(i, o) {
              /%$/.test(o) ? (o = new Number(o.slice(0, -1) / 100), o.type = "<percentage>") : /deg$/.test(o) ? (o = new Number(+o.slice(0, -3)), o.type = "<angle>", o.unit = "deg") : r.test(o) && (o = new Number(o), o.type = "<number>"), i.startsWith("/") && (o = o instanceof Number ? o : new Number(o), o.alpha = !0), n.push(o);
            }), {
              name: a[1].toLowerCase(),
              rawName: a[1],
              rawArgs: a[2],
              args: n
            };
          }
        }
      }
      function Ac(e) {
        return e[e.length - 1];
      }
      function fn(e, t, r) {
        return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
      }
      function Fc(e, t, r) {
        return (r - e) / (t - e);
      }
      function lo(e, t, r) {
        return fn(t[0], t[1], Fc(e[0], e[1], r));
      }
      function Tc(e) {
        return e.map(function(t) {
          return t.split("|").map(function(r) {
            r = r.trim();
            var a = r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
            if (a) {
              var n = new String(a[1]);
              return n.range = [+a[2], +a[3]], n;
            }
            return r;
          });
        });
      }
      var Sy = Object.freeze({
        __proto__: null,
        isString: la,
        type: Ht,
        toPrecision: dn,
        parseFunction: Cc,
        last: Ac,
        interpolate: fn,
        interpolateInv: Fc,
        mapRange: lo,
        parseCoordGrammar: Tc,
        multiplyMatrices: Ne
      }), Oy = function() {
        function e() {
          Dt(this, e);
        }
        return _t(e, [{
          key: "add",
          value: function(r, a, n) {
            if (typeof arguments[0] != "string") {
              for (var r in arguments[0])
                this.add(r, arguments[0][r], arguments[1]);
              return;
            }
            (Array.isArray(r) ? r : [r]).forEach(function(i) {
              this[i] = this[i] || [], a && this[i][n ? "unshift" : "push"](a);
            }, this);
          }
        }, {
          key: "run",
          value: function(r, a) {
            this[r] = this[r] || [], this[r].forEach(function(n) {
              n.call(a && a.context ? a.context : a, a);
            });
          }
        }]), e;
      }(), $t = new Oy(), Tt = {
        gamut_mapping: "lch.c",
        precision: 5,
        deltaE: "76"
      }, wt = {
        D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585],
        D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]
      };
      function so(e) {
        return Array.isArray(e) ? e : wt[e];
      }
      function pn(e, t, r) {
        var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        if (e = so(e), t = so(t), !e || !t)
          throw new TypeError("Missing white point to convert ".concat(e ? "" : "from").concat(!e && !t ? "/" : "").concat(t ? "" : "to"));
        if (e === t)
          return r;
        var n = {
          W1: e,
          W2: t,
          XYZ: r,
          options: a
        };
        if ($t.run("chromatic-adaptation-start", n), n.M || (n.W1 === wt.D65 && n.W2 === wt.D50 ? n.M = [[1.0479298208405488, 0.022946793341019088, -0.05019222954313557], [0.029627815688159344, 0.990434484573249, -0.01707382502938514], [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]] : n.W1 === wt.D50 && n.W2 === wt.D65 && (n.M = [[0.9554734527042182, -0.023098536874261423, 0.0632593086610217], [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008], [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]])), $t.run("chromatic-adaptation-end", n), n.M)
          return Ne(n.M, n.XYZ);
        throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
      }
      var My = 75e-6, Ny = (C = /* @__PURE__ */ new WeakSet(), T = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakSet(), function() {
        function e(t) {
          var r, a, n, i, o, u, l;
          Dt(this, e), Eu(this, N), Eu(this, C), xu(this, T, {
            writable: !0,
            value: void 0
          }), this.id = t.id, this.name = t.name, this.base = t.base ? e.get(t.base) : null, this.aliases = t.aliases, this.base && (this.fromBase = t.fromBase, this.toBase = t.toBase);
          var s = (r = t.coords) !== null && r !== void 0 ? r : this.base.coords;
          this.coords = s;
          var c = (a = (n = t.white) !== null && n !== void 0 ? n : this.base.white) !== null && a !== void 0 ? a : "D65";
          this.white = so(c), this.formats = (i = t.formats) !== null && i !== void 0 ? i : {};
          for (var d in this.formats) {
            var f = this.formats[d];
            f.type || (f.type = "function"), f.name || (f.name = d);
          }
          t.cssId && !((o = this.formats.functions) !== null && o !== void 0 && o.color) ? (this.formats.color = {
            id: t.cssId
          }, Object.defineProperty(this, "cssId", {
            value: t.cssId
          })) : (u = this.formats) !== null && u !== void 0 && u.color && !((l = this.formats) !== null && l !== void 0 && l.color.id) && (this.formats.color.id = this.id), this.referred = t.referred, Au(this, T, Zn(this, N, Iy).call(this).reverse()), $t.run("colorspace-init-end", this);
        }
        return _t(e, [{
          key: "inGamut",
          value: function(r) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.epsilon, i = n === void 0 ? My : n;
            if (this.isPolar)
              return r = this.toBase(r), this.base.inGamut(r, {
                epsilon: i
              });
            var o = Object.values(this.coords);
            return r.every(function(u, l) {
              var s = o[l];
              if (s.type !== "angle" && s.range) {
                if (Number.isNaN(u))
                  return !0;
                var c = V(s.range, 2), d = c[0], f = c[1];
                return (d === void 0 || u >= d - i) && (f === void 0 || u <= f + i);
              }
              return !0;
            });
          }
        }, {
          key: "cssId",
          get: function() {
            var r, a;
            return ((r = this.formats.functions) === null || r === void 0 || (a = r.color) === null || a === void 0 ? void 0 : a.id) || this.id;
          }
        }, {
          key: "isPolar",
          get: function() {
            for (var r in this.coords)
              if (this.coords[r].type === "angle")
                return !0;
            return !1;
          }
        }, {
          key: "getFormat",
          value: function(r) {
            if (k(r) === "object")
              return r = Zn(this, C, Rc).call(this, r), r;
            var a;
            return r === "default" ? a = Object.values(this.formats)[0] : a = this.formats[r], a ? (a = Zn(this, C, Rc).call(this, a), a) : null;
          }
        }, {
          key: "to",
          value: function(r, a) {
            if (arguments.length === 1) {
              var n = [r.space, r.coords];
              r = n[0], a = n[1];
            }
            if (r = e.get(r), this === r)
              return a;
            a = a.map(function(f) {
              return Number.isNaN(f) ? 0 : f;
            });
            for (var i = zr(this, T), o = zr(r, T), u, l, s = 0; s < i.length && i[s] === o[s]; s++)
              u = i[s], l = s;
            if (!u)
              throw new Error("Cannot convert between color spaces ".concat(this, " and ").concat(r, ": no connection space was found"));
            for (var c = i.length - 1; c > l; c--)
              a = i[c].toBase(a);
            for (var d = l + 1; d < o.length; d++)
              a = o[d].fromBase(a);
            return a;
          }
        }, {
          key: "from",
          value: function(r, a) {
            if (arguments.length === 1) {
              var n = [r.space, r.coords];
              r = n[0], a = n[1];
            }
            return r = e.get(r), r.to(this, a);
          }
        }, {
          key: "toString",
          value: function() {
            return "".concat(this.name, " (").concat(this.id, ")");
          }
        }, {
          key: "getMinCoords",
          value: function() {
            var r = [];
            for (var a in this.coords) {
              var n, i = this.coords[a], o = i.range || i.refRange;
              r.push((n = o == null ? void 0 : o.min) !== null && n !== void 0 ? n : 0);
            }
            return r;
          }
        }], [{
          key: "all",
          get: function() {
            return re(new Set(Object.values(e.registry)));
          }
        }, {
          key: "register",
          value: function(r, a) {
            if (arguments.length === 1 && (a = arguments[0], r = a.id), a = this.get(a), this.registry[r] && this.registry[r] !== a)
              throw new Error("Duplicate color space registration: '".concat(r, "'"));
            if (this.registry[r] = a, arguments.length === 1 && a.aliases) {
              var n = Ae(a.aliases), i;
              try {
                for (n.s(); !(i = n.n()).done; ) {
                  var o = i.value;
                  this.register(o, a);
                }
              } catch (u) {
                n.e(u);
              } finally {
                n.f();
              }
            }
            return a;
          }
        }, {
          key: "get",
          value: function(r) {
            if (!r || r instanceof e)
              return r;
            var a = Ht(r);
            if (a === "string") {
              var n = e.registry[r.toLowerCase()];
              if (!n)
                throw new TypeError('No color space found with id = "'.concat(r, '"'));
              return n;
            }
            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
              o[u - 1] = arguments[u];
            if (o.length)
              return e.get.apply(e, o);
            throw new TypeError("".concat(r, " is not a valid color space"));
          }
        }, {
          key: "resolveCoord",
          value: function(r, a) {
            var n = Ht(r), i, o;
            if (n === "string")
              if (r.includes(".")) {
                var u = r.split("."), l = V(u, 2);
                i = l[0], o = l[1];
              } else
                i = void 0, o = r;
            else if (Array.isArray(r)) {
              var s = V(r, 2);
              i = s[0], o = s[1];
            } else
              i = r.space, o = r.coordId;
            if (i = e.get(i), i || (i = a), !i)
              throw new TypeError("Cannot resolve coordinate reference ".concat(r, ": No color space specified and relative references are not allowed here"));
            if (n = Ht(o), n === "number" || n === "string" && o >= 0) {
              var c = Object.entries(i.coords)[o];
              if (c)
                return fe({
                  space: i,
                  id: c[0],
                  index: o
                }, c[1]);
            }
            i = e.get(i);
            var d = o.toLowerCase(), f = 0;
            for (var p in i.coords) {
              var m, h = i.coords[p];
              if (p.toLowerCase() === d || ((m = h.name) === null || m === void 0 ? void 0 : m.toLowerCase()) === d)
                return fe({
                  space: i,
                  id: p,
                  index: f
                }, h);
              f++;
            }
            throw new TypeError('No "'.concat(o, '" coordinate found in ').concat(i.name, ". Its coordinates are: ").concat(Object.keys(i.coords).join(", ")));
          }
        }]), e;
      }());
      function Rc(e) {
        if (e.coords && !e.coordGrammar) {
          e.type || (e.type = "function"), e.name || (e.name = "color"), e.coordGrammar = Tc(e.coords);
          var t = Object.entries(this.coords).map(function(r, a) {
            var n = V(r, 2);
            n[0];
            var i = n[1], o = e.coordGrammar[a][0], u = i.range || i.refRange, l = o.range, s = "";
            return o == "<percentage>" ? (l = [0, 100], s = "%") : o == "<angle>" && (s = "deg"), {
              fromRange: u,
              toRange: l,
              suffix: s
            };
          });
          e.serializeCoords = function(r, a) {
            return r.map(function(n, i) {
              var o = t[i], u = o.fromRange, l = o.toRange, s = o.suffix;
              return u && l && (n = lo(u, l, n)), n = dn(n, a), s && (n += s), n;
            });
          };
        }
        return e;
      }
      function Iy() {
        for (var e = [this], t = this; t = t.base; )
          e.push(t);
        return e;
      }
      var ee = Ny;
      Mu(ee, "registry", {}), Mu(ee, "DEFAULT_FORMAT", {
        type: "functions",
        name: "color"
      });
      var ft = new ee({
        id: "xyz-d65",
        name: "XYZ D65",
        coords: {
          x: {
            name: "X"
          },
          y: {
            name: "Y"
          },
          z: {
            name: "Z"
          }
        },
        white: "D65",
        formats: {
          color: {
            ids: ["xyz-d65", "xyz"]
          }
        },
        aliases: ["xyz"]
      }), tt = function(e) {
        Xn(r, e);
        var t = Kn(r);
        function r(a) {
          var n, i;
          if (Dt(this, r), a.coords || (a.coords = {
            r: {
              range: [0, 1],
              name: "Red"
            },
            g: {
              range: [0, 1],
              name: "Green"
            },
            b: {
              range: [0, 1],
              name: "Blue"
            }
          }), a.base || (a.base = ft), a.toXYZ_M && a.fromXYZ_M) {
            var o, u;
            (o = a.toBase) !== null && o !== void 0 || (a.toBase = function(l) {
              var s = Ne(a.toXYZ_M, l);
              return i.white !== i.base.white && (s = pn(i.white, i.base.white, s)), s;
            }), (u = a.fromBase) !== null && u !== void 0 || (a.fromBase = function(l) {
              return l = pn(i.base.white, i.white, l), Ne(a.fromXYZ_M, l);
            });
          }
          return (n = a.referred) !== null && n !== void 0 || (a.referred = "display"), i = t.call(this, a);
        }
        return _t(r);
      }(ee);
      function kc(e) {
        var t, r = {
          str: (t = String(e)) === null || t === void 0 ? void 0 : t.trim()
        };
        if ($t.run("parse-start", r), r.color)
          return r.color;
        if (r.parsed = Cc(r.str), r.parsed) {
          var a = function() {
            var d = r.parsed.name;
            if (d === "color") {
              var f = r.parsed.args.shift(), p = r.parsed.rawArgs.indexOf("/") > 0 ? r.parsed.args.pop() : 1, m = Ae(ee.all), h;
              try {
                for (m.s(); !(h = m.n()).done; ) {
                  var b = h.value, v = b.getFormat("color");
                  if (v) {
                    var g;
                    if (f === v.id || (g = v.ids) !== null && g !== void 0 && g.includes(f)) {
                      var w = function() {
                        var z = Object.keys(b.coords).length, Z = Array(z).fill(0);
                        return Z.forEach(function(te, Q) {
                          return Z[Q] = r.parsed.args[Q] || 0;
                        }), {
                          v: {
                            v: {
                              spaceId: b.id,
                              coords: Z,
                              alpha: p
                            }
                          }
                        };
                      }();
                      if (k(w) === "object")
                        return w.v;
                    }
                  }
                }
              } catch (z) {
                m.e(z);
              } finally {
                m.f();
              }
              var D = "";
              if (f in ee.registry) {
                var F, R, S, L = (F = ee.registry[f].formats) === null || F === void 0 || (R = F.functions) === null || R === void 0 || (S = R.color) === null || S === void 0 ? void 0 : S.id;
                L && (D = "Did you mean color(".concat(L, ")?"));
              }
              throw new TypeError("Cannot parse color(".concat(f, "). ") + (D || "Missing a plugin?"));
            } else {
              var G = Ae(ee.all), q;
              try {
                var j = function() {
                  var Z = q.value, te = Z.getFormat(d);
                  if (te && te.type === "function") {
                    var Q = 1;
                    (te.lastAlpha || Ac(r.parsed.args).alpha) && (Q = r.parsed.args.pop());
                    var W = r.parsed.args;
                    return te.coordGrammar && Object.entries(Z.coords).forEach(function(B, ne) {
                      var E, U = V(B, 2), I = U[0], J = U[1], ie = te.coordGrammar[ne], $ = (E = W[ne]) === null || E === void 0 ? void 0 : E.type;
                      if (ie = ie.find(function(_e) {
                        return _e == $;
                      }), !ie) {
                        var X = J.name || I;
                        throw new TypeError("".concat($, " not allowed for ").concat(X, " in ").concat(d, "()"));
                      }
                      var ve = ie.range;
                      $ === "<percentage>" && (ve || (ve = [0, 1]));
                      var ye = J.range || J.refRange;
                      ve && ye && (W[ne] = lo(ve, ye, W[ne]));
                    }), {
                      v: {
                        v: {
                          spaceId: Z.id,
                          coords: W,
                          alpha: Q
                        }
                      }
                    };
                  }
                };
                for (G.s(); !(q = G.n()).done; ) {
                  var H = j();
                  if (k(H) === "object")
                    return H.v;
                }
              } catch (z) {
                G.e(z);
              } finally {
                G.f();
              }
            }
          }();
          if (k(a) === "object")
            return a.v;
        } else {
          var n = Ae(ee.all), i;
          try {
            for (n.s(); !(i = n.n()).done; ) {
              var o = i.value;
              for (var u in o.formats) {
                var l = o.formats[u];
                if (l.type === "custom" && !(l.test && !l.test(r.str))) {
                  var s = l.parse(r.str);
                  if (s) {
                    var c;
                    return (c = s.alpha) !== null && c !== void 0 || (s.alpha = 1), s;
                  }
                }
              }
            }
          } catch (d) {
            n.e(d);
          } finally {
            n.f();
          }
        }
        throw new TypeError("Could not parse ".concat(e, " as a color. Missing a plugin?"));
      }
      function be(e) {
        if (!e)
          throw new TypeError("Empty color reference");
        la(e) && (e = kc(e));
        var t = e.space || e.spaceId;
        return t instanceof ee || (e.space = ee.get(t)), e.alpha === void 0 && (e.alpha = 1), e;
      }
      function sa(e, t) {
        return t = ee.get(t), t.from(e);
      }
      function pt(e, t) {
        var r = ee.resolveCoord(t, e.space), a = r.space, n = r.index, i = sa(e, a);
        return i[n];
      }
      function Sc(e, t, r) {
        return t = ee.get(t), e.coords = t.to(e.space, r), e;
      }
      function Ut(e, t, r) {
        if (e = be(e), arguments.length === 2 && Ht(arguments[1]) === "object") {
          var a = arguments[1];
          for (var n in a)
            Ut(e, n, a[n]);
        } else {
          typeof r == "function" && (r = r(pt(e, t)));
          var i = ee.resolveCoord(t, e.space), o = i.space, u = i.index, l = sa(e, o);
          l[u] = r, Sc(e, o, l);
        }
        return e;
      }
      var co = new ee({
        id: "xyz-d50",
        name: "XYZ D50",
        white: "D50",
        base: ft,
        fromBase: function(t) {
          return pn(ft.white, "D50", t);
        },
        toBase: function(t) {
          return pn("D50", ft.white, t);
        },
        formats: {
          color: {}
        }
      }), Py = 216 / 24389, Oc = 24 / 116, mn = 24389 / 27, fo = wt.D50, ot = new ee({
        id: "lab",
        name: "Lab",
        coords: {
          l: {
            refRange: [0, 100],
            name: "L"
          },
          a: {
            refRange: [-125, 125]
          },
          b: {
            refRange: [-125, 125]
          }
        },
        white: fo,
        base: co,
        fromBase: function(t) {
          var r = t.map(function(n, i) {
            return n / fo[i];
          }), a = r.map(function(n) {
            return n > Py ? Math.cbrt(n) : (mn * n + 16) / 116;
          });
          return [116 * a[1] - 16, 500 * (a[0] - a[1]), 200 * (a[1] - a[2])];
        },
        toBase: function(t) {
          var r = [];
          r[1] = (t[0] + 16) / 116, r[0] = t[1] / 500 + r[1], r[2] = r[1] - t[2] / 200;
          var a = [r[0] > Oc ? Math.pow(r[0], 3) : (116 * r[0] - 16) / mn, t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / mn, r[2] > Oc ? Math.pow(r[2], 3) : (116 * r[2] - 16) / mn];
          return a.map(function(n, i) {
            return n * fo[i];
          });
        },
        formats: {
          lab: {
            coords: ["<number> | <percentage>", "<number>", "<number>"]
          }
        }
      });
      function hn(e) {
        return (e % 360 + 360) % 360;
      }
      function Ly(e, t) {
        if (e === "raw")
          return t;
        var r = t.map(hn), a = V(r, 2), n = a[0], i = a[1], o = i - n;
        return e === "increasing" ? o < 0 && (i += 360) : e === "decreasing" ? o > 0 && (n += 360) : e === "longer" ? -180 < o && o < 180 && (o > 0 ? i += 360 : n += 360) : e === "shorter" && (o > 180 ? n += 360 : o < -180 && (i += 360)), [n, i];
      }
      var ca = new ee({
        id: "lch",
        name: "LCH",
        coords: {
          l: {
            refRange: [0, 100],
            name: "Lightness"
          },
          c: {
            refRange: [0, 150],
            name: "Chroma"
          },
          h: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          }
        },
        base: ot,
        fromBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2], o, u = 0.02;
          return Math.abs(n) < u && Math.abs(i) < u ? o = NaN : o = Math.atan2(i, n) * 180 / Math.PI, [a, Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)), hn(o)];
        },
        toBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2];
          return n < 0 && (n = 0), isNaN(i) && (i = 0), [a, n * Math.cos(i * Math.PI / 180), n * Math.sin(i * Math.PI / 180)];
        },
        formats: {
          lch: {
            coords: ["<number> | <percentage>", "<number>", "<number> | <angle>"]
          }
        }
      }), Mc = Math.pow(25, 7), vn = Math.PI, Nc = 180 / vn, Sr = vn / 180;
      function po(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.kL, n = a === void 0 ? 1 : a, i = r.kC, o = i === void 0 ? 1 : i, u = r.kH, l = u === void 0 ? 1 : u, s = ot.from(e), c = V(s, 3), d = c[0], f = c[1], p = c[2], m = ca.from(ot, [d, f, p])[1], h = ot.from(t), b = V(h, 3), v = b[0], g = b[1], w = b[2], D = ca.from(ot, [v, g, w])[1];
        m < 0 && (m = 0), D < 0 && (D = 0);
        var F = (m + D) / 2, R = Math.pow(F, 7), S = 0.5 * (1 - Math.sqrt(R / (R + Mc))), L = (1 + S) * f, G = (1 + S) * g, q = Math.sqrt(Math.pow(L, 2) + Math.pow(p, 2)), j = Math.sqrt(Math.pow(G, 2) + Math.pow(w, 2)), H = L === 0 && p === 0 ? 0 : Math.atan2(p, L), z = G === 0 && w === 0 ? 0 : Math.atan2(w, G);
        H < 0 && (H += 2 * vn), z < 0 && (z += 2 * vn), H *= Nc, z *= Nc;
        var Z = v - d, te = j - q, Q = z - H, W = H + z, B = Math.abs(Q), ne;
        q * j === 0 ? ne = 0 : B <= 180 ? ne = Q : Q > 180 ? ne = Q - 360 : Q < -180 ? ne = Q + 360 : console.log("the unthinkable has happened");
        var E = 2 * Math.sqrt(j * q) * Math.sin(ne * Sr / 2), U = (d + v) / 2, I = (q + j) / 2, J = Math.pow(I, 7), ie;
        q * j === 0 ? ie = W : B <= 180 ? ie = W / 2 : W < 360 ? ie = (W + 360) / 2 : ie = (W - 360) / 2;
        var $ = Math.pow(U - 50, 2), X = 1 + 0.015 * $ / Math.sqrt(20 + $), ve = 1 + 0.045 * I, ye = 1;
        ye -= 0.17 * Math.cos((ie - 30) * Sr), ye += 0.24 * Math.cos(2 * ie * Sr), ye += 0.32 * Math.cos((3 * ie + 6) * Sr), ye -= 0.2 * Math.cos((4 * ie - 63) * Sr);
        var _e = 1 + 0.015 * I * ye, Oe = 30 * Math.exp(-1 * Math.pow((ie - 275) / 25, 2)), qe = 2 * Math.sqrt(J / (J + Mc)), Ie = -1 * Math.sin(2 * Oe * Sr) * qe, Ee = Math.pow(Z / (n * X), 2);
        return Ee += Math.pow(te / (o * ve), 2), Ee += Math.pow(E / (l * _e), 2), Ee += Ie * (te / (o * ve)) * (E / (l * _e)), Math.sqrt(Ee);
      }
      var By = 75e-6;
      function da(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.space, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.epsilon, n = a === void 0 ? By : a;
        e = be(e), t = ee.get(t);
        var i = e.coords;
        return t !== e.space && (i = t.from(e)), t.inGamut(i, {
          epsilon: n
        });
      }
      function fa(e) {
        return {
          space: e.space,
          coords: e.coords.slice(),
          alpha: e.alpha
        };
      }
      function Gt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.method, a = r === void 0 ? Tt.gamut_mapping : r, n = t.space, i = n === void 0 ? e.space : n;
        if (la(arguments[1]) && (i = arguments[1]), i = ee.get(i), da(e, i, {
          epsilon: 0
        }))
          return e;
        var o = mt(e, i);
        if (a !== "clip" && !da(e, i)) {
          var u = Gt(fa(o), {
            method: "clip",
            space: i
          });
          if (po(e, u) > 2) {
            for (var l = ee.resolveCoord(a), s = l.space, c = l.id, d = mt(o, s), f = l.range || l.refRange, p = f[0], m = 0.01, h = p, b = pt(d, c); b - h > m; ) {
              var v = fa(d);
              v = Gt(v, {
                space: i,
                method: "clip"
              });
              var g = po(d, v);
              g - 2 < m ? h = pt(d, c) : b = pt(d, c), Ut(d, c, (h + b) / 2);
            }
            o = mt(d, i);
          } else
            o = u;
        }
        if (a === "clip" || !da(o, i, {
          epsilon: 0
        })) {
          var w = Object.values(i.coords).map(function(D) {
            return D.range || [];
          });
          o.coords = o.coords.map(function(D, F) {
            var R = V(w[F], 2), S = R[0], L = R[1];
            return S !== void 0 && (D = Math.max(S, D)), L !== void 0 && (D = Math.min(D, L)), D;
          });
        }
        return i !== e.space && (o = mt(o, e.space)), e.coords = o.coords, e;
      }
      Gt.returns = "color";
      function mt(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.inGamut;
        e = be(e), t = ee.get(t);
        var n = t.from(e), i = {
          space: t,
          coords: n,
          alpha: e.alpha
        };
        return a && (i = Gt(i)), i;
      }
      mt.returns = "color";
      function gn(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.precision, i = n === void 0 ? Tt.precision : n, o = a.format, u = o === void 0 ? "default" : o, l = a.inGamut, s = l === void 0 ? !0 : l, c = Pe(a, Xf), d;
        e = be(e);
        var f = u;
        u = (t = (r = e.space.getFormat(u)) !== null && r !== void 0 ? r : e.space.getFormat("default")) !== null && t !== void 0 ? t : ee.DEFAULT_FORMAT, s || (s = u.toGamut);
        var p = e.coords;
        if (p = p.map(function(D) {
          return D || 0;
        }), s && !da(e) && (p = Gt(fa(e), s === !0 ? void 0 : s).coords), u.type === "custom")
          if (c.precision = i, u.serialize)
            d = u.serialize(p, e.alpha, c);
          else
            throw new TypeError("format ".concat(f, " can only be used to parse colors, not for serialization"));
        else {
          var m = u.name || "color";
          u.serializeCoords ? p = u.serializeCoords(p, i) : i !== null && (p = p.map(function(D) {
            return dn(D, i);
          }));
          var h = re(p);
          if (m === "color") {
            var b, v = u.id || ((b = u.ids) === null || b === void 0 ? void 0 : b[0]) || e.space.id;
            h.unshift(v);
          }
          var g = e.alpha;
          i !== null && (g = dn(g, i));
          var w = e.alpha < 1 && !u.noAlpha ? "".concat(u.commas ? "," : " /", " ").concat(g) : "";
          d = "".concat(m, "(").concat(h.join(u.commas ? ", " : " ")).concat(w, ")");
        }
        return d;
      }
      var qy = [[0.6369580483012914, 0.14461690358620832, 0.1688809751641721], [0.2627002120112671, 0.6779980715188708, 0.05930171646986196], [0, 0.028072693049087428, 1.060985057710791]], jy = [[1.716651187971268, -0.355670783776392, -0.25336628137366], [-0.666684351832489, 1.616481236634939, 0.0157685458139111], [0.017639857445311, -0.042770613257809, 0.942103121235474]], bn = new tt({
        id: "rec2020-linear",
        name: "Linear REC.2020",
        white: "D65",
        toXYZ_M: qy,
        fromXYZ_M: jy,
        formats: {
          color: {}
        }
      }), yn = 1.09929682680944, Ic = 0.018053968510807, Pc = new tt({
        id: "rec2020",
        name: "REC.2020",
        base: bn,
        toBase: function(t) {
          return t.map(function(r) {
            return r < Ic * 4.5 ? r / 4.5 : Math.pow((r + yn - 1) / yn, 1 / 0.45);
          });
        },
        fromBase: function(t) {
          return t.map(function(r) {
            return r >= Ic ? yn * Math.pow(r, 0.45) - (yn - 1) : 4.5 * r;
          });
        },
        formats: {
          color: {}
        }
      }), zy = [[0.4865709486482162, 0.26566769316909306, 0.1982172852343625], [0.2289745640697488, 0.6917385218365064, 0.079286914093745], [0, 0.04511338185890264, 1.043944368900976]], Vy = [[2.493496911941425, -0.9313836179191239, -0.40271078445071684], [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577], [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]], Lc = new tt({
        id: "p3-linear",
        name: "Linear P3",
        white: "D65",
        toXYZ_M: zy,
        fromXYZ_M: Vy
      }), Hy = [[0.41239079926595934, 0.357584339383878, 0.1804807884018343], [0.21263900587151027, 0.715168678767756, 0.07219231536073371], [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]], $y = [[3.2409699419045226, -1.537383177570094, -0.4986107602930034], [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559], [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]], Bc = new tt({
        id: "srgb-linear",
        name: "Linear sRGB",
        white: "D65",
        toXYZ_M: Hy,
        fromXYZ_M: $y,
        formats: {
          color: {}
        }
      }), qc = {
        aliceblue: [240 / 255, 248 / 255, 1],
        antiquewhite: [250 / 255, 235 / 255, 215 / 255],
        aqua: [0, 1, 1],
        aquamarine: [127 / 255, 1, 212 / 255],
        azure: [240 / 255, 1, 1],
        beige: [245 / 255, 245 / 255, 220 / 255],
        bisque: [1, 228 / 255, 196 / 255],
        black: [0, 0, 0],
        blanchedalmond: [1, 235 / 255, 205 / 255],
        blue: [0, 0, 1],
        blueviolet: [138 / 255, 43 / 255, 226 / 255],
        brown: [165 / 255, 42 / 255, 42 / 255],
        burlywood: [222 / 255, 184 / 255, 135 / 255],
        cadetblue: [95 / 255, 158 / 255, 160 / 255],
        chartreuse: [127 / 255, 1, 0],
        chocolate: [210 / 255, 105 / 255, 30 / 255],
        coral: [1, 127 / 255, 80 / 255],
        cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
        cornsilk: [1, 248 / 255, 220 / 255],
        crimson: [220 / 255, 20 / 255, 60 / 255],
        cyan: [0, 1, 1],
        darkblue: [0, 0, 139 / 255],
        darkcyan: [0, 139 / 255, 139 / 255],
        darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
        darkgray: [169 / 255, 169 / 255, 169 / 255],
        darkgreen: [0, 100 / 255, 0],
        darkgrey: [169 / 255, 169 / 255, 169 / 255],
        darkkhaki: [189 / 255, 183 / 255, 107 / 255],
        darkmagenta: [139 / 255, 0, 139 / 255],
        darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
        darkorange: [1, 140 / 255, 0],
        darkorchid: [153 / 255, 50 / 255, 204 / 255],
        darkred: [139 / 255, 0, 0],
        darksalmon: [233 / 255, 150 / 255, 122 / 255],
        darkseagreen: [143 / 255, 188 / 255, 143 / 255],
        darkslateblue: [72 / 255, 61 / 255, 139 / 255],
        darkslategray: [47 / 255, 79 / 255, 79 / 255],
        darkslategrey: [47 / 255, 79 / 255, 79 / 255],
        darkturquoise: [0, 206 / 255, 209 / 255],
        darkviolet: [148 / 255, 0, 211 / 255],
        deeppink: [1, 20 / 255, 147 / 255],
        deepskyblue: [0, 191 / 255, 1],
        dimgray: [105 / 255, 105 / 255, 105 / 255],
        dimgrey: [105 / 255, 105 / 255, 105 / 255],
        dodgerblue: [30 / 255, 144 / 255, 1],
        firebrick: [178 / 255, 34 / 255, 34 / 255],
        floralwhite: [1, 250 / 255, 240 / 255],
        forestgreen: [34 / 255, 139 / 255, 34 / 255],
        fuchsia: [1, 0, 1],
        gainsboro: [220 / 255, 220 / 255, 220 / 255],
        ghostwhite: [248 / 255, 248 / 255, 1],
        gold: [1, 215 / 255, 0],
        goldenrod: [218 / 255, 165 / 255, 32 / 255],
        gray: [128 / 255, 128 / 255, 128 / 255],
        green: [0, 128 / 255, 0],
        greenyellow: [173 / 255, 1, 47 / 255],
        grey: [128 / 255, 128 / 255, 128 / 255],
        honeydew: [240 / 255, 1, 240 / 255],
        hotpink: [1, 105 / 255, 180 / 255],
        indianred: [205 / 255, 92 / 255, 92 / 255],
        indigo: [75 / 255, 0, 130 / 255],
        ivory: [1, 1, 240 / 255],
        khaki: [240 / 255, 230 / 255, 140 / 255],
        lavender: [230 / 255, 230 / 255, 250 / 255],
        lavenderblush: [1, 240 / 255, 245 / 255],
        lawngreen: [124 / 255, 252 / 255, 0],
        lemonchiffon: [1, 250 / 255, 205 / 255],
        lightblue: [173 / 255, 216 / 255, 230 / 255],
        lightcoral: [240 / 255, 128 / 255, 128 / 255],
        lightcyan: [224 / 255, 1, 1],
        lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
        lightgray: [211 / 255, 211 / 255, 211 / 255],
        lightgreen: [144 / 255, 238 / 255, 144 / 255],
        lightgrey: [211 / 255, 211 / 255, 211 / 255],
        lightpink: [1, 182 / 255, 193 / 255],
        lightsalmon: [1, 160 / 255, 122 / 255],
        lightseagreen: [32 / 255, 178 / 255, 170 / 255],
        lightskyblue: [135 / 255, 206 / 255, 250 / 255],
        lightslategray: [119 / 255, 136 / 255, 153 / 255],
        lightslategrey: [119 / 255, 136 / 255, 153 / 255],
        lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
        lightyellow: [1, 1, 224 / 255],
        lime: [0, 1, 0],
        limegreen: [50 / 255, 205 / 255, 50 / 255],
        linen: [250 / 255, 240 / 255, 230 / 255],
        magenta: [1, 0, 1],
        maroon: [128 / 255, 0, 0],
        mediumaquamarine: [102 / 255, 205 / 255, 170 / 255],
        mediumblue: [0, 0, 205 / 255],
        mediumorchid: [186 / 255, 85 / 255, 211 / 255],
        mediumpurple: [147 / 255, 112 / 255, 219 / 255],
        mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
        mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
        mediumspringgreen: [0, 250 / 255, 154 / 255],
        mediumturquoise: [72 / 255, 209 / 255, 204 / 255],
        mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
        midnightblue: [25 / 255, 25 / 255, 112 / 255],
        mintcream: [245 / 255, 1, 250 / 255],
        mistyrose: [1, 228 / 255, 225 / 255],
        moccasin: [1, 228 / 255, 181 / 255],
        navajowhite: [1, 222 / 255, 173 / 255],
        navy: [0, 0, 128 / 255],
        oldlace: [253 / 255, 245 / 255, 230 / 255],
        olive: [128 / 255, 128 / 255, 0],
        olivedrab: [107 / 255, 142 / 255, 35 / 255],
        orange: [1, 165 / 255, 0],
        orangered: [1, 69 / 255, 0],
        orchid: [218 / 255, 112 / 255, 214 / 255],
        palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
        palegreen: [152 / 255, 251 / 255, 152 / 255],
        paleturquoise: [175 / 255, 238 / 255, 238 / 255],
        palevioletred: [219 / 255, 112 / 255, 147 / 255],
        papayawhip: [1, 239 / 255, 213 / 255],
        peachpuff: [1, 218 / 255, 185 / 255],
        peru: [205 / 255, 133 / 255, 63 / 255],
        pink: [1, 192 / 255, 203 / 255],
        plum: [221 / 255, 160 / 255, 221 / 255],
        powderblue: [176 / 255, 224 / 255, 230 / 255],
        purple: [128 / 255, 0, 128 / 255],
        rebeccapurple: [102 / 255, 51 / 255, 153 / 255],
        red: [1, 0, 0],
        rosybrown: [188 / 255, 143 / 255, 143 / 255],
        royalblue: [65 / 255, 105 / 255, 225 / 255],
        saddlebrown: [139 / 255, 69 / 255, 19 / 255],
        salmon: [250 / 255, 128 / 255, 114 / 255],
        sandybrown: [244 / 255, 164 / 255, 96 / 255],
        seagreen: [46 / 255, 139 / 255, 87 / 255],
        seashell: [1, 245 / 255, 238 / 255],
        sienna: [160 / 255, 82 / 255, 45 / 255],
        silver: [192 / 255, 192 / 255, 192 / 255],
        skyblue: [135 / 255, 206 / 255, 235 / 255],
        slateblue: [106 / 255, 90 / 255, 205 / 255],
        slategray: [112 / 255, 128 / 255, 144 / 255],
        slategrey: [112 / 255, 128 / 255, 144 / 255],
        snow: [1, 250 / 255, 250 / 255],
        springgreen: [0, 1, 127 / 255],
        steelblue: [70 / 255, 130 / 255, 180 / 255],
        tan: [210 / 255, 180 / 255, 140 / 255],
        teal: [0, 128 / 255, 128 / 255],
        thistle: [216 / 255, 191 / 255, 216 / 255],
        tomato: [1, 99 / 255, 71 / 255],
        turquoise: [64 / 255, 224 / 255, 208 / 255],
        violet: [238 / 255, 130 / 255, 238 / 255],
        wheat: [245 / 255, 222 / 255, 179 / 255],
        white: [1, 1, 1],
        whitesmoke: [245 / 255, 245 / 255, 245 / 255],
        yellow: [1, 1, 0],
        yellowgreen: [154 / 255, 205 / 255, 50 / 255]
      }, jc = Array(3).fill("<percentage> | <number>[0, 255]"), zc = Array(3).fill("<number>[0, 255]"), pa = new tt({
        id: "srgb",
        name: "sRGB",
        base: Bc,
        fromBase: function(t) {
          return t.map(function(r) {
            var a = r < 0 ? -1 : 1, n = r * a;
            return n > 31308e-7 ? a * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : 12.92 * r;
          });
        },
        toBase: function(t) {
          return t.map(function(r) {
            var a = r < 0 ? -1 : 1, n = r * a;
            return n < 0.04045 ? r / 12.92 : a * Math.pow((n + 0.055) / 1.055, 2.4);
          });
        },
        formats: {
          rgb: {
            coords: jc
          },
          rgb_number: {
            name: "rgb",
            commas: !0,
            coords: zc,
            noAlpha: !0
          },
          color: {},
          rgba: {
            coords: jc,
            commas: !0,
            lastAlpha: !0
          },
          rgba_number: {
            name: "rgba",
            commas: !0,
            coords: zc
          },
          hex: {
            type: "custom",
            toGamut: !0,
            test: function(t) {
              return /^#([a-f0-9]{3,4}){1,2}$/i.test(t);
            },
            parse: function(t) {
              t.length <= 5 && (t = t.replace(/[a-f0-9]/gi, "$&$&"));
              var r = [];
              return t.replace(/[a-f0-9]{2}/gi, function(a) {
                r.push(parseInt(a, 16) / 255);
              }), {
                spaceId: "srgb",
                coords: r.slice(0, 3),
                alpha: r.slice(3)[0]
              };
            },
            serialize: function(t, r) {
              var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = a.collapse, i = n === void 0 ? !0 : n;
              r < 1 && t.push(r), t = t.map(function(l) {
                return Math.round(l * 255);
              });
              var o = i && t.every(function(l) {
                return l % 17 === 0;
              }), u = t.map(function(l) {
                return o ? (l / 17).toString(16) : l.toString(16).padStart(2, "0");
              }).join("");
              return "#" + u;
            }
          },
          keyword: {
            type: "custom",
            test: function(t) {
              return /^[a-z]+$/i.test(t);
            },
            parse: function(t) {
              t = t.toLowerCase();
              var r = {
                spaceId: "srgb",
                coords: null,
                alpha: 1
              };
              if (t === "transparent" ? (r.coords = qc.black, r.alpha = 0) : r.coords = qc[t], r.coords)
                return r;
            }
          }
        }
      }), Vc = new tt({
        id: "p3",
        name: "P3",
        base: Lc,
        fromBase: pa.fromBase,
        toBase: pa.toBase,
        formats: {
          color: {
            id: "display-p3"
          }
        }
      });
      if (Tt.display_space = pa, typeof CSS < "u" && CSS.supports)
        for (var mo = 0, Hc = [ot, Pc, Vc]; mo < Hc.length; mo++) {
          var ho = Hc[mo], Uy = ho.getMinCoords(), Gy = {
            space: ho,
            coords: Uy,
            alpha: 1
          }, Wy = gn(Gy);
          if (CSS.supports("color", Wy)) {
            Tt.display_space = ho;
            break;
          }
        }
      function Yy(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.space, a = r === void 0 ? Tt.display_space : r, n = Pe(t, Kf), i = gn(e, n);
        if (typeof CSS > "u" || CSS.supports("color", i) || !Tt.display_space)
          i = new String(i), i.color = e;
        else {
          var o = mt(e, a);
          i = new String(gn(o, n)), i.color = o;
        }
        return i;
      }
      function $c(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "lab";
        r = ee.get(r);
        var a = r.from(e), n = r.from(t);
        return Math.sqrt(a.reduce(function(i, o, u) {
          var l = n[u];
          return isNaN(o) || isNaN(l) ? i : i + Math.pow(l - o, 2);
        }, 0));
      }
      function Xy(e, t) {
        return e = be(e), t = be(t), e.space === t.space && e.alpha === t.alpha && e.coords.every(function(r, a) {
          return r === t.coords[a];
        });
      }
      function Wt(e) {
        return pt(e, [ft, "y"]);
      }
      function Uc(e, t) {
        Ut(e, [ft, "y"], t);
      }
      function Ky(e) {
        Object.defineProperty(e.prototype, "luminance", {
          get: function() {
            return Wt(this);
          },
          set: function(r) {
            Uc(this, r);
          }
        });
      }
      var Zy = Object.freeze({
        __proto__: null,
        getLuminance: Wt,
        setLuminance: Uc,
        register: Ky
      });
      function Jy(e, t) {
        e = be(e), t = be(t);
        var r = Math.max(Wt(e), 0), a = Math.max(Wt(t), 0);
        if (a > r) {
          var n = [a, r];
          r = n[0], a = n[1];
        }
        return (r + 0.05) / (a + 0.05);
      }
      var Qy = 0.56, e0 = 0.57, t0 = 0.62, r0 = 0.65, Gc = 0.022, a0 = 1.414, n0 = 0.1, i0 = 5e-4, o0 = 1.14, Wc = 0.027, u0 = 1.14;
      function Yc(e) {
        return e >= Gc ? e : e + Math.pow(Gc - e, a0);
      }
      function Or(e) {
        var t = e < 0 ? -1 : 1, r = Math.abs(e);
        return t * Math.pow(r, 2.4);
      }
      function l0(e, t) {
        t = be(t), e = be(e);
        var r, a, n, i, o, u;
        t = mt(t, "srgb");
        var l = V(t.coords, 3);
        i = l[0], o = l[1], u = l[2];
        var s = Or(i) * 0.2126729 + Or(o) * 0.7151522 + Or(u) * 0.072175;
        e = mt(e, "srgb");
        var c = V(e.coords, 3);
        i = c[0], o = c[1], u = c[2];
        var d = Or(i) * 0.2126729 + Or(o) * 0.7151522 + Or(u) * 0.072175, f = Yc(s), p = Yc(d), m = p > f;
        return Math.abs(p - f) < i0 ? a = 0 : m ? (r = Math.pow(p, Qy) - Math.pow(f, e0), a = r * o0) : (r = Math.pow(p, r0) - Math.pow(f, t0), a = r * u0), Math.abs(a) < n0 ? n = 0 : a > 0 ? n = a - Wc : n = a + Wc, n * 100;
      }
      function s0(e, t) {
        e = be(e), t = be(t);
        var r = Math.max(Wt(e), 0), a = Math.max(Wt(t), 0);
        if (a > r) {
          var n = [a, r];
          r = n[0], a = n[1];
        }
        var i = r + a;
        return i === 0 ? 0 : (r - a) / i;
      }
      var c0 = 5e4;
      function d0(e, t) {
        e = be(e), t = be(t);
        var r = Math.max(Wt(e), 0), a = Math.max(Wt(t), 0);
        if (a > r) {
          var n = [a, r];
          r = n[0], a = n[1];
        }
        return a === 0 ? c0 : (r - a) / a;
      }
      function f0(e, t) {
        e = be(e), t = be(t);
        var r = pt(e, [ot, "l"]), a = pt(t, [ot, "l"]);
        return Math.abs(r - a);
      }
      var p0 = 216 / 24389, Xc = 24 / 116, wn = 24389 / 27, vo = wt.D65, go = new ee({
        id: "lab-d65",
        name: "Lab D65",
        coords: {
          l: {
            refRange: [0, 100],
            name: "L"
          },
          a: {
            refRange: [-125, 125]
          },
          b: {
            refRange: [-125, 125]
          }
        },
        white: vo,
        base: ft,
        fromBase: function(t) {
          var r = t.map(function(n, i) {
            return n / vo[i];
          }), a = r.map(function(n) {
            return n > p0 ? Math.cbrt(n) : (wn * n + 16) / 116;
          });
          return [116 * a[1] - 16, 500 * (a[0] - a[1]), 200 * (a[1] - a[2])];
        },
        toBase: function(t) {
          var r = [];
          r[1] = (t[0] + 16) / 116, r[0] = t[1] / 500 + r[1], r[2] = r[1] - t[2] / 200;
          var a = [r[0] > Xc ? Math.pow(r[0], 3) : (116 * r[0] - 16) / wn, t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / wn, r[2] > Xc ? Math.pow(r[2], 3) : (116 * r[2] - 16) / wn];
          return a.map(function(n, i) {
            return n * vo[i];
          });
        },
        formats: {
          "lab-d65": {
            coords: ["<number> | <percentage>", "<number>", "<number>"]
          }
        }
      }), bo = Math.pow(5, 0.5) * 0.5 + 0.5;
      function m0(e, t) {
        e = be(e), t = be(t);
        var r = pt(e, [go, "l"]), a = pt(t, [go, "l"]), n = Math.abs(Math.pow(r, bo) - Math.pow(a, bo)), i = Math.pow(n, 1 / bo) * Math.SQRT2 - 40;
        return i < 7.5 ? 0 : i;
      }
      var Dn = Object.freeze({
        __proto__: null,
        contrastWCAG21: Jy,
        contrastAPCA: l0,
        contrastMichelson: s0,
        contrastWeber: d0,
        contrastLstar: f0,
        contrastDeltaPhi: m0
      });
      function h0(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        la(r) && (r = {
          algorithm: r
        });
        var a = r, n = a.algorithm, i = Pe(a, Zf);
        if (!n) {
          var o = Object.keys(Dn).map(function(l) {
            return l.replace(/^contrast/, "");
          }).join(", ");
          throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(o));
        }
        e = be(e), t = be(t);
        for (var u in Dn)
          if ("contrast" + n.toLowerCase() === u.toLowerCase())
            return Dn[u](e, t, i);
        throw new TypeError("Unknown contrast algorithm: ".concat(n));
      }
      function Kc(e) {
        var t = sa(e, ft), r = V(t, 3), a = r[0], n = r[1], i = r[2], o = a + 15 * n + 3 * i;
        return [4 * a / o, 9 * n / o];
      }
      function Zc(e) {
        var t = sa(e, ft), r = V(t, 3), a = r[0], n = r[1], i = r[2], o = a + n + i;
        return [a / o, n / o];
      }
      function v0(e) {
        Object.defineProperty(e.prototype, "uv", {
          get: function() {
            return Kc(this);
          }
        }), Object.defineProperty(e.prototype, "xy", {
          get: function() {
            return Zc(this);
          }
        });
      }
      var g0 = Object.freeze({
        __proto__: null,
        uv: Kc,
        xy: Zc,
        register: v0
      });
      function b0(e, t) {
        return $c(e, t, "lab");
      }
      var y0 = Math.PI, Jc = y0 / 180;
      function w0(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.l, n = a === void 0 ? 2 : a, i = r.c, o = i === void 0 ? 1 : i, u = ot.from(e), l = V(u, 3), s = l[0], c = l[1], d = l[2], f = ca.from(ot, [s, c, d]), p = V(f, 3), m = p[1], h = p[2], b = ot.from(t), v = V(b, 3), g = v[0], w = v[1], D = v[2], F = ca.from(ot, [g, w, D])[1];
        m < 0 && (m = 0), F < 0 && (F = 0);
        var R = s - g, S = m - F, L = c - w, G = d - D, q = Math.pow(L, 2) + Math.pow(G, 2) - Math.pow(S, 2), j = 0.511;
        s >= 16 && (j = 0.040975 * s / (1 + 0.01765 * s));
        var H = 0.0638 * m / (1 + 0.0131 * m) + 0.638, z;
        Number.isNaN(h) && (h = 0), h >= 164 && h <= 345 ? z = 0.56 + Math.abs(0.2 * Math.cos((h + 168) * Jc)) : z = 0.36 + Math.abs(0.4 * Math.cos((h + 35) * Jc));
        var Z = Math.pow(m, 4), te = Math.sqrt(Z / (Z + 1900)), Q = H * (te * z + 1 - te), W = Math.pow(R / (n * j), 2);
        return W += Math.pow(S / (o * H), 2), W += q / Math.pow(Q, 2), Math.sqrt(W);
      }
      var Qc = 203, yo = new ee({
        id: "xyz-abs-d65",
        name: "Absolute XYZ D65",
        coords: {
          x: {
            refRange: [0, 9504.7],
            name: "Xa"
          },
          y: {
            refRange: [0, 1e4],
            name: "Ya"
          },
          z: {
            refRange: [0, 10888.3],
            name: "Za"
          }
        },
        base: ft,
        fromBase: function(t) {
          return t.map(function(r) {
            return Math.max(r * Qc, 0);
          });
        },
        toBase: function(t) {
          return t.map(function(r) {
            return Math.max(r / Qc, 0);
          });
        }
      }), _n = 1.15, xn = 0.66, ed = 2610 / Math.pow(2, 14), D0 = Math.pow(2, 14) / 2610, td = 3424 / Math.pow(2, 12), rd = 2413 / Math.pow(2, 7), ad = 2392 / Math.pow(2, 7), _0 = 1.7 * 2523 / Math.pow(2, 5), nd = Math.pow(2, 5) / (1.7 * 2523), En = -0.56, wo = 16295499532821565e-27, x0 = [[0.41478972, 0.579999, 0.014648], [-0.20151, 1.120649, 0.0531008], [-0.0166008, 0.2648, 0.6684799]], E0 = [[1.9242264357876067, -1.0047923125953657, 0.037651404030618], [0.35031676209499907, 0.7264811939316552, -0.06538442294808501], [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]], C0 = [[0.5, 0.5, 0], [3.524, -4.066708, 0.542708], [0.199076, 1.096799, -1.295875]], A0 = [[1, 0.1386050432715393, 0.05804731615611886], [0.9999999999999999, -0.1386050432715393, -0.05804731615611886], [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]], id = new ee({
        id: "jzazbz",
        name: "Jzazbz",
        coords: {
          jz: {
            refRange: [0, 1],
            name: "Jz"
          },
          az: {
            refRange: [-0.5, 0.5]
          },
          bz: {
            refRange: [-0.5, 0.5]
          }
        },
        base: yo,
        fromBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2], o = _n * a - (_n - 1) * i, u = xn * n - (xn - 1) * a, l = Ne(x0, [o, u, i]), s = l.map(function(b) {
            var v = td + rd * Math.pow(b / 1e4, ed), g = 1 + ad * Math.pow(b / 1e4, ed);
            return Math.pow(v / g, _0);
          }), c = Ne(C0, s), d = V(c, 3), f = d[0], p = d[1], m = d[2], h = (1 + En) * f / (1 + En * f) - wo;
          return [h, p, m];
        },
        toBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2], o = (a + wo) / (1 + En - En * (a + wo)), u = Ne(A0, [o, n, i]), l = u.map(function(b) {
            var v = td - Math.pow(b, nd), g = ad * Math.pow(b, nd) - rd, w = 1e4 * Math.pow(v / g, D0);
            return w;
          }), s = Ne(E0, l), c = V(s, 3), d = c[0], f = c[1], p = c[2], m = (d + (_n - 1) * p) / _n, h = (f + (xn - 1) * m) / xn;
          return [m, h, p];
        },
        formats: {
          color: {}
        }
      }), Do = new ee({
        id: "jzczhz",
        name: "JzCzHz",
        coords: {
          jz: {
            refRange: [0, 1],
            name: "Jz"
          },
          cz: {
            refRange: [0, 1],
            name: "Chroma"
          },
          hz: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          }
        },
        base: id,
        fromBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2], o, u = 2e-4;
          return Math.abs(n) < u && Math.abs(i) < u ? o = NaN : o = Math.atan2(i, n) * 180 / Math.PI, [a, Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)), hn(o)];
        },
        toBase: function(t) {
          return [t[0], t[1] * Math.cos(t[2] * Math.PI / 180), t[1] * Math.sin(t[2] * Math.PI / 180)];
        },
        formats: {
          color: {}
        }
      });
      function F0(e, t) {
        var r = Do.from(e), a = V(r, 3), n = a[0], i = a[1], o = a[2], u = Do.from(t), l = V(u, 3), s = l[0], c = l[1], d = l[2], f = n - s, p = i - c;
        Number.isNaN(o) && Number.isNaN(d) ? (o = 0, d = 0) : Number.isNaN(o) ? o = d : Number.isNaN(d) && (d = o);
        var m = o - d, h = 2 * Math.sqrt(i * c) * Math.sin(m / 2 * (Math.PI / 180));
        return Math.sqrt(Math.pow(f, 2) + Math.pow(p, 2) + Math.pow(h, 2));
      }
      var od = 3424 / 4096, ud = 2413 / 128, ld = 2392 / 128, sd = 2610 / 16384, T0 = 2523 / 32, R0 = 16384 / 2610, cd = 32 / 2523, k0 = [[0.3592, 0.6976, -0.0358], [-0.1922, 1.1004, 0.0755], [7e-3, 0.0749, 0.8434]], S0 = [[2048 / 4096, 2048 / 4096, 0], [6610 / 4096, -13613 / 4096, 7003 / 4096], [17933 / 4096, -17390 / 4096, -543 / 4096]], O0 = [[0.9999888965628402, 0.008605050147287059, 0.11103437159861648], [1.00001110343716, -0.008605050147287059, -0.11103437159861648], [1.0000320633910054, 0.56004913547279, -0.3206339100541203]], M0 = [[2.0701800566956137, -1.326456876103021, 0.20661600684785517], [0.3649882500326575, 0.6804673628522352, -0.04542175307585323], [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]], _o = new ee({
        id: "ictcp",
        name: "ICTCP",
        coords: {
          i: {
            refRange: [0, 1],
            name: "I"
          },
          ct: {
            refRange: [-0.5, 0.5],
            name: "CT"
          },
          cp: {
            refRange: [-0.5, 0.5],
            name: "CP"
          }
        },
        base: yo,
        fromBase: function(t) {
          var r = Ne(k0, t);
          return N0(r);
        },
        toBase: function(t) {
          var r = I0(t);
          return Ne(M0, r);
        },
        formats: {
          color: {}
        }
      });
      function N0(e) {
        var t = e.map(function(r) {
          var a = od + ud * Math.pow(r / 1e4, sd), n = 1 + ld * Math.pow(r / 1e4, sd);
          return Math.pow(a / n, T0);
        });
        return Ne(S0, t);
      }
      function I0(e) {
        var t = Ne(O0, e), r = t.map(function(a) {
          var n = Math.max(Math.pow(a, cd) - od, 0), i = ud - ld * Math.pow(a, cd);
          return 1e4 * Math.pow(n / i, R0);
        });
        return r;
      }
      function P0(e, t) {
        var r = _o.from(e), a = V(r, 3), n = a[0], i = a[1], o = a[2], u = _o.from(t), l = V(u, 3), s = l[0], c = l[1], d = l[2];
        return 720 * Math.sqrt(Math.pow(n - s, 2) + 0.25 * Math.pow(i - c, 2) + Math.pow(o - d, 2));
      }
      var L0 = [[0.8190224432164319, 0.3619062562801221, -0.12887378261216414], [0.0329836671980271, 0.9292868468965546, 0.03614466816999844], [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]], B0 = [[1.2268798733741557, -0.5578149965554813, 0.28139105017721583], [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701], [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]], q0 = [[0.2104542553, 0.793617785, -0.0040720468], [1.9779984951, -2.428592205, 0.4505937099], [0.0259040371, 0.7827717662, -0.808675766]], j0 = [[0.9999999984505198, 0.39633779217376786, 0.2158037580607588], [1.0000000088817609, -0.10556134232365635, -0.06385417477170591], [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]], Cn = new ee({
        id: "oklab",
        name: "OKLab",
        coords: {
          l: {
            refRange: [0, 1],
            name: "L"
          },
          a: {
            refRange: [-0.4, 0.4]
          },
          b: {
            refRange: [-0.4, 0.4]
          }
        },
        white: "D65",
        base: ft,
        fromBase: function(t) {
          var r = Ne(L0, t), a = r.map(function(n) {
            return Math.cbrt(n);
          });
          return Ne(q0, a);
        },
        toBase: function(t) {
          var r = Ne(j0, t), a = r.map(function(n) {
            return Math.pow(n, 3);
          });
          return Ne(B0, a);
        },
        formats: {
          oklab: {
            coords: ["<number> | <percentage>", "<number>", "<number>"]
          }
        }
      });
      function z0(e, t) {
        var r = Cn.from(e), a = V(r, 3), n = a[0], i = a[1], o = a[2], u = Cn.from(t), l = V(u, 3), s = l[0], c = l[1], d = l[2], f = n - s, p = i - c, m = o - d;
        return Math.sqrt(Math.pow(f, 2) + Math.pow(p, 2) + Math.pow(m, 2));
      }
      var xo = Object.freeze({
        __proto__: null,
        deltaE76: b0,
        deltaECMC: w0,
        deltaE2000: po,
        deltaEJz: F0,
        deltaEITP: P0,
        deltaEOK: z0
      });
      function ma(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        la(r) && (r = {
          method: r
        });
        var a = r, n = a.method, i = n === void 0 ? Tt.deltaE : n, o = Pe(a, Jf);
        e = be(e), t = be(t);
        for (var u in xo)
          if ("deltae" + i.toLowerCase() === u.toLowerCase())
            return xo[u](e, t, o);
        throw new TypeError("Unknown deltaE method: ".concat(i));
      }
      function V0(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.25, r = ee.get("oklch", "lch"), a = [r, "l"];
        return Ut(e, a, function(n) {
          return n * (1 + t);
        });
      }
      function H0(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.25, r = ee.get("oklch", "lch"), a = [r, "l"];
        return Ut(e, a, function(n) {
          return n * (1 - t);
        });
      }
      var $0 = Object.freeze({
        __proto__: null,
        lighten: V0,
        darken: H0
      });
      function dd(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.5, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = [be(e), be(t)];
        if (e = n[0], t = n[1], Ht(r) === "object") {
          var i = [0.5, r];
          r = i[0], a = i[1];
        }
        var o = a, u = o.space, l = o.outputSpace, s = o.premultiplied, c = ha(e, t, {
          space: u,
          outputSpace: l,
          premultiplied: s
        });
        return c(r);
      }
      function fd(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a;
        if (Eo(e)) {
          a = e, r = t;
          var n = V(a.rangeArgs.colors, 2);
          e = n[0], t = n[1];
        }
        var i = r, o = i.maxDeltaE, u = i.deltaEMethod, l = i.steps, s = l === void 0 ? 2 : l, c = i.maxSteps, d = c === void 0 ? 1e3 : c, f = Pe(i, Qf);
        if (!a) {
          var p = [be(e), be(t)];
          e = p[0], t = p[1], a = ha(e, t, f);
        }
        var m = ma(e, t), h = o > 0 ? Math.max(s, Math.ceil(m / o) + 1) : s, b = [];
        if (d !== void 0 && (h = Math.min(h, d)), h === 1)
          b = [{
            p: 0.5,
            color: a(0.5)
          }];
        else {
          var v = 1 / (h - 1);
          b = Array.from({
            length: h
          }, function(L, G) {
            var q = G * v;
            return {
              p: q,
              color: a(q)
            };
          });
        }
        if (o > 0)
          for (var g = b.reduce(function(L, G, q) {
            if (q === 0)
              return 0;
            var j = ma(G.color, b[q - 1].color, u);
            return Math.max(L, j);
          }, 0); g > o; ) {
            g = 0;
            for (var w = 1; w < b.length && b.length < d; w++) {
              var D = b[w - 1], F = b[w], R = (F.p + D.p) / 2, S = a(R);
              g = Math.max(g, ma(S, D.color), ma(S, F.color)), b.splice(w, 0, {
                p: R,
                color: a(R)
              }), w++;
            }
          }
        return b = b.map(function(L) {
          return L.color;
        }), b;
      }
      function ha(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (Eo(e)) {
          var a = e, n = t;
          return ha.apply(void 0, re(a.rangeArgs.colors).concat([fe({}, a.rangeArgs.options, n)]));
        }
        var i = r.space, o = r.outputSpace, u = r.progression, l = r.premultiplied;
        e = be(e), t = be(t), e = fa(e), t = fa(t);
        var s = {
          colors: [e, t],
          options: r
        };
        if (i ? i = ee.get(i) : i = ee.registry[Tt.interpolationSpace] || e.space, o = o ? ee.get(o) : i, e = mt(e, i), t = mt(t, i), e = Gt(e), t = Gt(t), i.coords.h && i.coords.h.type === "angle") {
          var c = r.hue = r.hue || "shorter", d = [i, "h"], f = [pt(e, d), pt(t, d)], p = f[0], m = f[1], h = Ly(c, [p, m]), b = V(h, 2);
          p = b[0], m = b[1], Ut(e, d, p), Ut(t, d, m);
        }
        return l && (e.coords = e.coords.map(function(v) {
          return v * e.alpha;
        }), t.coords = t.coords.map(function(v) {
          return v * t.alpha;
        })), Object.assign(function(v) {
          v = u ? u(v) : v;
          var g = e.coords.map(function(F, R) {
            var S = t.coords[R];
            return fn(F, S, v);
          }), w = fn(e.alpha, t.alpha, v), D = {
            space: i,
            coords: g,
            alpha: w
          };
          return l && (D.coords = D.coords.map(function(F) {
            return F / w;
          })), o !== i && (D = mt(D, o)), D;
        }, {
          rangeArgs: s
        });
      }
      function Eo(e) {
        return Ht(e) === "function" && !!e.rangeArgs;
      }
      Tt.interpolationSpace = "lab";
      function U0(e) {
        e.defineFunction("mix", dd, {
          returns: "color"
        }), e.defineFunction("range", ha, {
          returns: "function<color>"
        }), e.defineFunction("steps", fd, {
          returns: "array<color>"
        });
      }
      var G0 = Object.freeze({
        __proto__: null,
        mix: dd,
        steps: fd,
        range: ha,
        isRange: Eo,
        register: U0
      }), pd = new ee({
        id: "hsl",
        name: "HSL",
        coords: {
          h: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          },
          s: {
            range: [0, 100],
            name: "Saturation"
          },
          l: {
            range: [0, 100],
            name: "Lightness"
          }
        },
        base: pa,
        fromBase: function(t) {
          var r = Math.max.apply(Math, re(t)), a = Math.min.apply(Math, re(t)), n = V(t, 3), i = n[0], o = n[1], u = n[2], l = NaN, s = 0, c = (a + r) / 2, d = r - a;
          if (d !== 0) {
            switch (s = c === 0 || c === 1 ? 0 : (r - c) / Math.min(c, 1 - c), r) {
              case i:
                l = (o - u) / d + (o < u ? 6 : 0);
                break;
              case o:
                l = (u - i) / d + 2;
                break;
              case u:
                l = (i - o) / d + 4;
            }
            l = l * 60;
          }
          return [l, s * 100, c * 100];
        },
        toBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2];
          a = a % 360, a < 0 && (a += 360), n /= 100, i /= 100;
          function o(u) {
            var l = (u + a / 30) % 12, s = n * Math.min(i, 1 - i);
            return i - s * Math.max(-1, Math.min(l - 3, 9 - l, 1));
          }
          return [o(0), o(8), o(4)];
        },
        formats: {
          hsl: {
            toGamut: !0,
            coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
          },
          hsla: {
            coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
            commas: !0,
            lastAlpha: !0
          }
        }
      }), md = new ee({
        id: "hsv",
        name: "HSV",
        coords: {
          h: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          },
          s: {
            range: [0, 100],
            name: "Saturation"
          },
          v: {
            range: [0, 100],
            name: "Value"
          }
        },
        base: pd,
        fromBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2];
          n /= 100, i /= 100;
          var o = i + n * Math.min(i, 1 - i);
          return [a, o === 0 ? 0 : 200 * (1 - i / o), 100 * o];
        },
        toBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2];
          n /= 100, i /= 100;
          var o = i * (1 - n / 2);
          return [a, o === 0 || o === 1 ? 0 : (i - o) / Math.min(o, 1 - o) * 100, o * 100];
        },
        formats: {
          color: {
            toGamut: !0
          }
        }
      }), W0 = new ee({
        id: "hwb",
        name: "HWB",
        coords: {
          h: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          },
          w: {
            range: [0, 100],
            name: "Whiteness"
          },
          b: {
            range: [0, 100],
            name: "Blackness"
          }
        },
        base: md,
        fromBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2];
          return [a, i * (100 - n) / 100, 100 - i];
        },
        toBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2];
          n /= 100, i /= 100;
          var o = n + i;
          if (o >= 1) {
            var u = n / o;
            return [a, 0, u * 100];
          }
          var l = 1 - i, s = l === 0 ? 0 : 1 - n / l;
          return [a, s * 100, l * 100];
        },
        formats: {
          hwb: {
            toGamut: !0,
            coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
          }
        }
      }), Y0 = [[0.5766690429101305, 0.1855582379065463, 0.1882286462349947], [0.29734497525053605, 0.6273635662554661, 0.07529145849399788], [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]], X0 = [[2.0415879038107465, -0.5650069742788596, -0.34473135077832956], [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557], [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]], hd = new tt({
        id: "a98rgb-linear",
        name: "Linear Adobe® 98 RGB compatible",
        white: "D65",
        toXYZ_M: Y0,
        fromXYZ_M: X0
      }), K0 = new tt({
        id: "a98rgb",
        name: "Adobe® 98 RGB compatible",
        base: hd,
        toBase: function(t) {
          return t.map(function(r) {
            return Math.pow(Math.abs(r), 563 / 256) * Math.sign(r);
          });
        },
        fromBase: function(t) {
          return t.map(function(r) {
            return Math.pow(Math.abs(r), 256 / 563) * Math.sign(r);
          });
        },
        formats: {
          color: {
            id: "a98-rgb"
          }
        }
      }), Z0 = [[0.7977604896723027, 0.13518583717574031, 0.0313493495815248], [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20], [0, 0, 0.8251046025104601]], J0 = [[1.3457989731028281, -0.25558010007997534, -0.05110628506753401], [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973], [0, 0, 1.2119675456389454]], vd = new tt({
        id: "prophoto-linear",
        name: "Linear ProPhoto",
        white: "D50",
        base: co,
        toXYZ_M: Z0,
        fromXYZ_M: J0
      }), Q0 = 1 / 512, e2 = 16 / 512, t2 = new tt({
        id: "prophoto",
        name: "ProPhoto",
        base: vd,
        toBase: function(t) {
          return t.map(function(r) {
            return r < e2 ? r / 16 : Math.pow(r, 1.8);
          });
        },
        fromBase: function(t) {
          return t.map(function(r) {
            return r >= Q0 ? Math.pow(r, 1 / 1.8) : 16 * r;
          });
        },
        formats: {
          color: {
            id: "prophoto-rgb"
          }
        }
      }), r2 = new ee({
        id: "oklch",
        name: "OKLCh",
        coords: {
          l: {
            refRange: [0, 1],
            name: "Lightness"
          },
          c: {
            refRange: [0, 0.4],
            name: "Chroma"
          },
          h: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          }
        },
        white: "D65",
        base: Cn,
        fromBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2], o, u = 2e-4;
          return Math.abs(n) < u && Math.abs(i) < u ? o = NaN : o = Math.atan2(i, n) * 180 / Math.PI, [a, Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)), hn(o)];
        },
        toBase: function(t) {
          var r = V(t, 3), a = r[0], n = r[1], i = r[2], o, u;
          return isNaN(i) ? (o = 0, u = 0) : (o = n * Math.cos(i * Math.PI / 180), u = n * Math.sin(i * Math.PI / 180)), [a, o, u];
        },
        formats: {
          oklch: {
            coords: ["<number> | <percentage>", "<number>", "<number> | <angle>"]
          }
        }
      }), gd = 203, bd = 2610 / Math.pow(2, 14), a2 = Math.pow(2, 14) / 2610, n2 = 2523 / Math.pow(2, 5), yd = Math.pow(2, 5) / 2523, wd = 3424 / Math.pow(2, 12), Dd = 2413 / Math.pow(2, 7), _d = 2392 / Math.pow(2, 7), i2 = new tt({
        id: "rec2100pq",
        name: "REC.2100-PQ",
        base: bn,
        toBase: function(t) {
          return t.map(function(r) {
            var a = Math.pow(Math.max(Math.pow(r, yd) - wd, 0) / (Dd - _d * Math.pow(r, yd)), a2);
            return a * 1e4 / gd;
          });
        },
        fromBase: function(t) {
          return t.map(function(r) {
            var a = Math.max(r * gd / 1e4, 0), n = wd + Dd * Math.pow(a, bd), i = 1 + _d * Math.pow(a, bd);
            return Math.pow(n / i, n2);
          });
        },
        formats: {
          color: {
            id: "rec2100-pq"
          }
        }
      }), xd = 0.17883277, Ed = 0.28466892, Cd = 0.55991073, Co = 3.7743, o2 = new tt({
        id: "rec2100hlg",
        cssid: "rec2100-hlg",
        name: "REC.2100-HLG",
        referred: "scene",
        base: bn,
        toBase: function(t) {
          return t.map(function(r) {
            return r <= 0.5 ? Math.pow(r, 2) / 3 * Co : Math.exp((r - Cd) / xd + Ed) / 12 * Co;
          });
        },
        fromBase: function(t) {
          return t.map(function(r) {
            return r /= Co, r <= 1 / 12 ? Math.sqrt(3 * r) : xd * Math.log(12 * r - Ed) + Cd;
          });
        },
        formats: {
          color: {
            id: "rec2100-hlg"
          }
        }
      }), Ad = {};
      $t.add("chromatic-adaptation-start", function(e) {
        e.options.method && (e.M = Fd(e.W1, e.W2, e.options.method));
      }), $t.add("chromatic-adaptation-end", function(e) {
        e.M || (e.M = Fd(e.W1, e.W2, e.options.method));
      });
      function An(e) {
        var t = e.id;
        e.toCone_M, e.fromCone_M, Ad[t] = arguments[0];
      }
      function Fd(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Bradford", a = Ad[r], n = Ne(a.toCone_M, e), i = V(n, 3), o = i[0], u = i[1], l = i[2], s = Ne(a.toCone_M, t), c = V(s, 3), d = c[0], f = c[1], p = c[2], m = [[d / o, 0, 0], [0, f / u, 0], [0, 0, p / l]], h = Ne(m, a.toCone_M), b = Ne(a.fromCone_M, h);
        return b;
      }
      An({
        id: "von Kries",
        toCone_M: [[0.40024, 0.7076, -0.08081], [-0.2263, 1.16532, 0.0457], [0, 0, 0.91822]],
        fromCone_M: [[1.8599364, -1.1293816, 0.2198974], [0.3611914, 0.6388125, -64e-7], [0, 0, 1.0890636]]
      }), An({
        id: "Bradford",
        toCone_M: [[0.8951, 0.2664, -0.1614], [-0.7502, 1.7135, 0.0367], [0.0389, -0.0685, 1.0296]],
        fromCone_M: [[0.9869929, -0.1470543, 0.1599627], [0.4323053, 0.5183603, 0.0492912], [-85287e-7, 0.0400428, 0.9684867]]
      }), An({
        id: "CAT02",
        toCone_M: [[0.7328, 0.4296, -0.1624], [-0.7036, 1.6975, 61e-4], [3e-3, 0.0136, 0.9834]],
        fromCone_M: [[1.0961238, -0.278869, 0.1827452], [0.454369, 0.4735332, 0.0720978], [-96276e-7, -5698e-6, 1.0153256]]
      }), An({
        id: "CAT16",
        toCone_M: [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-2079e-6, 0.048952, 0.953127]],
        fromCone_M: [[1.862067855087233, -1.011254630531685, 0.1491867754444518], [0.3875265432361372, 0.6214474419314753, -0.008973985167612518], [-0.01584149884933386, -0.03412293802851557, 1.04996443687785]]
      }), Object.assign(wt, {
        A: [1.0985, 1, 0.35585],
        C: [0.98074, 1, 1.18232],
        D55: [0.95682, 1, 0.92149],
        D75: [0.94972, 1, 1.22638],
        E: [1, 1, 1],
        F2: [0.99186, 1, 0.67393],
        F7: [0.95041, 1, 1.08747],
        F11: [1.00962, 1, 0.6435]
      }), wt.ACES = [0.32168 / 0.33767, 1, (1 - 0.32168 - 0.33767) / 0.33767];
      var u2 = [[0.6624541811085053, 0.13400420645643313, 0.1561876870049078], [0.27222871678091454, 0.6740817658111484, 0.05368951740793705], [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]], l2 = [[1.6410233796943257, -0.32480329418479, -0.23642469523761225], [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137], [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]], Td = new tt({
        id: "acescg",
        name: "ACEScg",
        coords: {
          r: {
            range: [0, 65504],
            name: "Red"
          },
          g: {
            range: [0, 65504],
            name: "Green"
          },
          b: {
            range: [0, 65504],
            name: "Blue"
          }
        },
        referred: "scene",
        white: wt.ACES,
        toXYZ_M: u2,
        fromXYZ_M: l2,
        formats: {
          color: {}
        }
      }), Fn = Math.pow(2, -16), Ao = -0.35828683, Tn = (Math.log2(65504) + 9.72) / 17.52, s2 = new tt({
        id: "acescc",
        name: "ACEScc",
        coords: {
          r: {
            range: [Ao, Tn],
            name: "Red"
          },
          g: {
            range: [Ao, Tn],
            name: "Green"
          },
          b: {
            range: [Ao, Tn],
            name: "Blue"
          }
        },
        referred: "scene",
        base: Td,
        toBase: function(t) {
          var r = -0.3013698630136986;
          return t.map(function(a) {
            return a <= r ? (Math.pow(2, a * 17.52 - 9.72) - Fn) * 2 : a < Tn ? Math.pow(2, a * 17.52 - 9.72) : 65504;
          });
        },
        fromBase: function(t) {
          return t.map(function(r) {
            return r <= 0 ? (Math.log2(Fn) + 9.72) / 17.52 : r < Fn ? (Math.log2(Fn + r * 0.5) + 9.72) / 17.52 : (Math.log2(r) + 9.72) / 17.52;
          });
        },
        formats: {
          color: {}
        }
      }), Rd = Object.freeze({
        __proto__: null,
        XYZ_D65: ft,
        XYZ_D50: co,
        XYZ_ABS_D65: yo,
        Lab_D65: go,
        Lab: ot,
        LCH: ca,
        sRGB_Linear: Bc,
        sRGB: pa,
        HSL: pd,
        HWB: W0,
        HSV: md,
        P3_Linear: Lc,
        P3: Vc,
        A98RGB_Linear: hd,
        A98RGB: K0,
        ProPhoto_Linear: vd,
        ProPhoto: t2,
        REC_2020_Linear: bn,
        REC_2020: Pc,
        OKLab: Cn,
        OKLCH: r2,
        Jzazbz: id,
        JzCzHz: Do,
        ICTCP: _o,
        REC_2100_PQ: i2,
        REC_2100_HLG: o2,
        ACEScg: Td,
        ACEScc: s2
      }), ut = (K = /* @__PURE__ */ new WeakMap(), function() {
        function e() {
          var t = this;
          Dt(this, e), xu(this, K, {
            writable: !0,
            value: void 0
          });
          for (var r, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
            n[i] = arguments[i];
          n.length === 1 && (r = be(n[0]));
          var o, u, l;
          r ? (o = r.space || r.spaceId, u = r.coords, l = r.alpha) : (o = n[0], u = n[1], l = n[2]), Au(this, K, ee.get(o)), this.coords = u ? u.slice() : [0, 0, 0], this.alpha = l < 1 ? l : 1;
          for (var s = 0; s < this.coords.length; s++)
            this.coords[s] === "NaN" && (this.coords[s] = NaN);
          var c = function(p) {
            Object.defineProperty(t, p, {
              get: function() {
                return t.get(p);
              },
              set: function(h) {
                return t.set(p, h);
              }
            });
          };
          for (var d in zr(this, K).coords)
            c(d);
        }
        return _t(e, [{
          key: "space",
          get: function() {
            return zr(this, K);
          }
        }, {
          key: "spaceId",
          get: function() {
            return zr(this, K).id;
          }
        }, {
          key: "clone",
          value: function() {
            return new e(this.space, this.coords, this.alpha);
          }
        }, {
          key: "toJSON",
          value: function() {
            return {
              spaceId: this.spaceId,
              coords: this.coords,
              alpha: this.alpha
            };
          }
        }, {
          key: "display",
          value: function() {
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++)
              a[n] = arguments[n];
            var i = Yy.apply(void 0, [this].concat(a));
            return i.color = new e(i.color), i;
          }
        }], [{
          key: "get",
          value: function(r) {
            if (r instanceof e)
              return r;
            for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
              n[i - 1] = arguments[i];
            return xa(e, [r].concat(n));
          }
        }, {
          key: "defineFunction",
          value: function(r, a) {
            var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a, i = n.instance, o = i === void 0 ? !0 : i, u = n.returns, l = function() {
              var c = a.apply(void 0, arguments);
              if (u === "color")
                c = e.get(c);
              else if (u === "function<color>") {
                var d = c;
                c = function() {
                  var p = d.apply(void 0, arguments);
                  return e.get(p);
                }, Object.assign(c, d);
              } else
                u === "array<color>" && (c = c.map(function(f) {
                  return e.get(f);
                }));
              return c;
            };
            r in e || (e[r] = l), o && (e.prototype[r] = function() {
              for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
                c[d] = arguments[d];
              return l.apply(void 0, [this].concat(c));
            });
          }
        }, {
          key: "defineFunctions",
          value: function(r) {
            for (var a in r)
              e.defineFunction(a, r[a], r[a]);
          }
        }, {
          key: "extend",
          value: function(r) {
            if (r.register)
              r.register(e);
            else
              for (var a in r)
                e.defineFunction(a, r[a]);
          }
        }]), e;
      }());
      ut.defineFunctions({
        get: pt,
        getAll: sa,
        set: Ut,
        setAll: Sc,
        to: mt,
        equals: Xy,
        inGamut: da,
        toGamut: Gt,
        distance: $c,
        toString: gn
      }), Object.assign(ut, {
        util: Sy,
        hooks: $t,
        WHITES: wt,
        Space: ee,
        spaces: ee.registry,
        parse: kc,
        defaults: Tt
      });
      for (var Fo = 0, kd = Object.keys(Rd); Fo < kd.length; Fo++) {
        var c2 = kd[Fo];
        ee.register(Rd[c2]);
      }
      for (var Sd in ee.registry)
        To(Sd, ee.registry[Sd]);
      $t.add("colorspace-init-end", function(e) {
        var t;
        To(e.id, e), (t = e.aliases) === null || t === void 0 || t.forEach(function(r) {
          To(r, e);
        });
      });
      function To(e, t) {
        Object.keys(t.coords), Object.values(t.coords).map(function(a) {
          return a.name;
        });
        var r = e.replace(/-/g, "_");
        Object.defineProperty(ut.prototype, r, {
          get: function() {
            var n = this, i = this.getAll(e);
            return typeof Proxy > "u" ? i : new Proxy(i, {
              has: function(u, l) {
                try {
                  return ee.resolveCoord([t, l]), !0;
                } catch {
                }
                return Reflect.has(u, l);
              },
              get: function(u, l, s) {
                if (l && k(l) !== "symbol" && !(l in u)) {
                  var c = ee.resolveCoord([t, l]), d = c.index;
                  if (d >= 0)
                    return u[d];
                }
                return Reflect.get(u, l, s);
              },
              set: function(u, l, s, c) {
                if (l && k(l) !== "symbol" && !(l in u) || l >= 0) {
                  var d = ee.resolveCoord([t, l]), f = d.index;
                  if (f >= 0)
                    return u[f] = s, n.setAll(e, u), !0;
                }
                return Reflect.set(u, l, s, c);
              }
            });
          },
          set: function(n) {
            this.setAll(e, n);
          },
          configurable: !0,
          enumerable: !0
        });
      }
      ut.extend(xo), ut.extend({
        deltaE: ma
      }), ut.extend($0), ut.extend({
        contrast: h0
      }), ut.extend(g0), ut.extend(Zy), ut.extend(G0), ut.extend(Dn), Ec.default.templateSettings.strip = !1;
      var d2 = /^#[0-9a-f]{3,8}$/i, f2 = /hsl\(\s*([\d.]+)(rad|turn)/, p2 = function() {
        function e(t, r, a) {
          var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
          Dt(this, e), this.red = t, this.green = r, this.blue = a, this.alpha = n;
        }
        return _t(e, [{
          key: "toHexString",
          value: function() {
            var r = Math.round(this.red).toString(16), a = Math.round(this.green).toString(16), n = Math.round(this.blue).toString(16);
            return "#" + (this.red > 15.5 ? r : "0" + r) + (this.green > 15.5 ? a : "0" + a) + (this.blue > 15.5 ? n : "0" + n);
          }
        }, {
          key: "toJSON",
          value: function() {
            var r = this.red, a = this.green, n = this.blue, i = this.alpha;
            return {
              red: r,
              green: a,
              blue: n,
              alpha: i
            };
          }
        }, {
          key: "parseString",
          value: function(r) {
            r = r.replace(f2, function(n, i, o) {
              var u = i + o;
              switch (o) {
                case "rad":
                  return n.replace(u, m2(i));
                case "turn":
                  return n.replace(u, h2(i));
              }
            });
            try {
              var a = new ut(r).to("srgb");
              this.red = Math.round(Ro(a.r, 0, 1) * 255), this.green = Math.round(Ro(a.g, 0, 1) * 255), this.blue = Math.round(Ro(a.b, 0, 1) * 255), this.alpha = +a.alpha;
            } catch {
              throw new Error('Unable to parse color "'.concat(r, '"'));
            }
            return this;
          }
        }, {
          key: "parseRgbString",
          value: function(r) {
            this.parseString(r);
          }
        }, {
          key: "parseHexString",
          value: function(r) {
            !r.match(d2) || [6, 8].includes(r.length) || this.parseString(r);
          }
        }, {
          key: "parseColorFnString",
          value: function(r) {
            this.parseString(r);
          }
        }, {
          key: "getRelativeLuminance",
          value: function() {
            var r = this.red / 255, a = this.green / 255, n = this.blue / 255, i = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), o = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4), u = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
            return 0.2126 * i + 0.7152 * o + 0.0722 * u;
          }
        }]), e;
      }(), Se = p2;
      function Ro(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      function m2(e) {
        return e * 180 / Math.PI;
      }
      function h2(e) {
        return e * 360;
      }
      function v2(e) {
        var t = new Se();
        if (t.parseString(e.getPropertyValue("background-color")), t.alpha !== 0) {
          var r = e.getPropertyValue("opacity");
          t.alpha = t.alpha * r;
        }
        return t;
      }
      var hr = v2;
      function g2(e) {
        var t = _.getComputedStyle(e);
        return cn(e, t) || hr(t).alpha === 1;
      }
      var b2 = g2;
      function ko(e) {
        if (!e.href)
          return !1;
        var t = ue.get("firstPageLink", y2);
        return t ? e.compareDocumentPosition(t.actualNode) === e.DOCUMENT_POSITION_FOLLOWING : !0;
      }
      function y2() {
        var e;
        return _.location.origin ? e = st(y._tree, 'a[href]:not([href^="javascript:"])').find(function(t) {
          return !Bi(t.actualNode);
        }) : e = st(y._tree, 'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0], e || null;
      }
      var w2 = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, D2 = /(\w+)\((\d+)/;
      function _2(e) {
        var t = e.getPropertyValue("clip").match(w2), r = e.getPropertyValue("clip-path").match(D2);
        if (t && t.length === 5) {
          var a = e.getPropertyValue("position");
          if (["fixed", "absolute"].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1], i = parseInt(r[2], 10);
          switch (n) {
            case "inset":
              return i >= 50;
            case "circle":
              return i === 0;
          }
        }
        return !1;
      }
      function x2(e, t, r) {
        var a = Ar(e, "map");
        if (!a)
          return !1;
        var n = a.getAttribute("name");
        if (!n)
          return !1;
        var i = We(e);
        if (!i || i.nodeType !== 9)
          return !1;
        var o = st(y._tree, 'img[usemap="#'.concat(Re(n), '"]'));
        return !o || !o.length ? !1 : o.some(function(u) {
          var l = u.actualNode;
          return Rn(l, t, r);
        });
      }
      function Rn(e, t, r) {
        var a;
        if (!e)
          throw new TypeError("Cannot determine if element is visible for non-DOM nodes");
        var n = e instanceof Ve ? e : le(e);
        e = n ? n.actualNode : e;
        var i = "_isVisible" + (t ? "ScreenReader" : ""), o = (a = _.Node) !== null && a !== void 0 ? a : {}, u = o.DOCUMENT_NODE, l = o.DOCUMENT_FRAGMENT_NODE, s = n ? n.props.nodeType : e.nodeType, c = n ? n.props.nodeName : e.nodeName.toLowerCase();
        if (n && typeof n[i] < "u")
          return n[i];
        if (s === u)
          return !0;
        if (["style", "script", "noscript", "template"].includes(c))
          return !1;
        if (e && s === l && (e = e.host), t) {
          var d = n ? n.attr("aria-hidden") : e.getAttribute("aria-hidden");
          if (d === "true")
            return !1;
        }
        if (!e) {
          var f = n.parent, p = !0;
          return f && (p = Rn(f, t, !0)), n && (n[i] = p), p;
        }
        var m = _.getComputedStyle(e, null);
        if (m === null)
          return !1;
        if (c === "area")
          return x2(e, t, r);
        if (m.getPropertyValue("display") === "none")
          return !1;
        var h = parseInt(m.getPropertyValue("height")), b = parseInt(m.getPropertyValue("width")), v = Pt(e), g = v && h === 0, w = v && b === 0, D = m.getPropertyValue("position") === "absolute" && (h < 2 || b < 2) && m.getPropertyValue("overflow") === "hidden";
        if (!t && (_2(m) || m.getPropertyValue("opacity") === "0" || g || w || D) || !r && (m.getPropertyValue("visibility") === "hidden" || !t && Xa(e)))
          return !1;
        var F = e.assignedSlot ? e.assignedSlot : e.parentNode, R = !1;
        return F && (R = Rn(F, t, !0)), n && (n[i] = R), R;
      }
      var E2 = Rn;
      function C2(e, t) {
        for (var r = ["fixed", "sticky"], a = [], n = !1, i = 0; i < e.length; ++i) {
          var o = e[i];
          o === t && (n = !0);
          var u = _.getComputedStyle(o);
          if (!n && r.indexOf(u.position) !== -1) {
            a = [];
            continue;
          }
          a.push(o);
        }
        return a;
      }
      var Od = C2;
      function Md(e, t) {
        var r = Nd(t);
        do {
          var a = Nd(e);
          if (a === r || a === t)
            return A2(e, t);
          e = a;
        } while (e);
        return !1;
      }
      function Nd(e) {
        for (var t = le(e), r = t.parent; r; ) {
          if (Pt(r.actualNode))
            return r.actualNode;
          r = r.parent;
        }
      }
      function A2(e, t) {
        var r = _.getComputedStyle(t), a = r.getPropertyValue("overflow");
        if (r.getPropertyValue("display") === "inline")
          return !0;
        var n = Array.from(e.getClientRects()), i = t.getBoundingClientRect(), o = {
          left: i.left,
          top: i.top,
          width: i.width,
          height: i.height
        };
        return (["scroll", "auto"].includes(a) || t instanceof _.HTMLHtmlElement) && (o.width = t.scrollWidth, o.height = t.scrollHeight), n.length === 1 && a === "hidden" && r.getPropertyValue("white-space") === "nowrap" && (n[0] = o), n.some(function(u) {
          return !(Math.ceil(u.left) < Math.floor(o.left) || Math.ceil(u.top) < Math.floor(o.top) || Math.floor(u.left + u.width) > Math.ceil(o.left + o.width) || Math.floor(u.top + u.height) > Math.ceil(o.top + o.height));
        });
      }
      function Id(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : M, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        if (a > 999)
          throw new Error("Infinite loop detected");
        return Array.from(r.elementsFromPoint(e, t) || []).filter(function(n) {
          return We(n) === r;
        }).reduce(function(n, i) {
          if (Ga(i)) {
            var o = Id(e, t, i.shadowRoot, a + 1);
            n = n.concat(o), n.length && Md(n[0], i) && n.push(i);
          } else
            n.push(i);
          return n;
        }, []);
      }
      var F2 = Id;
      function T2(e, t) {
        if (e.hasAttribute(t)) {
          var r = e.nodeName.toUpperCase(), a = e;
          (!["A", "AREA"].includes(r) || e.ownerSVGElement) && (a = M.createElement("a"), a.href = e.getAttribute(t));
          var n = ["https:", "ftps:"].includes(a.protocol) ? a.protocol.replace(/s:$/, ":") : a.protocol, i = /^\//.test(a.pathname) ? a.pathname : "/".concat(a.pathname), o = k2(i), u = o.pathname, l = o.filename;
          return {
            protocol: n,
            hostname: a.hostname,
            port: R2(a.port),
            pathname: /\/$/.test(u) ? u : "".concat(u, "/"),
            search: S2(a.search),
            hash: O2(a.hash),
            filename: l
          };
        }
      }
      function R2(e) {
        var t = ["443", "80"];
        return t.includes(e) ? "" : e;
      }
      function k2(e) {
        var t = e.split("/").pop();
        return !t || t.indexOf(".") === -1 ? {
          pathname: e,
          filename: ""
        } : {
          pathname: e.replace(t, ""),
          filename: /index./.test(t) ? "" : t
        };
      }
      function S2(e) {
        var t = {};
        if (!e || !e.length)
          return t;
        var r = e.substring(1).split("&");
        if (!r || !r.length)
          return t;
        for (var a = 0; a < r.length; a++) {
          var n = r[a], i = n.split("="), o = V(i, 2), u = o[0], l = o[1], s = l === void 0 ? "" : l;
          t[decodeURIComponent(u)] = decodeURIComponent(s);
        }
        return t;
      }
      function O2(e) {
        if (!e)
          return "";
        var t = /#!?\/?/g, r = e.match(t);
        if (!r)
          return "";
        var a = V(r, 1), n = a[0];
        return n === "#" ? "" : e;
      }
      var M2 = T2;
      function N2(e, t) {
        var r = t.getBoundingClientRect(), a = r.top, n = r.left, i = {
          top: a - t.scrollTop,
          bottom: a - t.scrollTop + t.scrollHeight,
          left: n - t.scrollLeft,
          right: n - t.scrollLeft + t.scrollWidth
        };
        if (e.left > i.right && e.left > r.right || e.top > i.bottom && e.top > r.bottom || e.right < i.left && e.right < r.left || e.bottom < i.top && e.bottom < r.top)
          return !1;
        var o = _.getComputedStyle(t);
        return e.left > r.right || e.top > r.bottom ? o.overflow === "scroll" || o.overflow === "auto" || t instanceof _.HTMLBodyElement || t instanceof _.HTMLHtmlElement : !0;
      }
      var So = N2, Pd = 0, I2 = function(e) {
        Xn(r, e);
        var t = Kn(r);
        function r(a, n, i) {
          var o;
          if (Dt(this, r), o = t.call(this), o.shadowId = i, o.children = [], o.actualNode = a, o.parent = n, n || (Pd = 0), o.nodeIndex = Pd++, o._isHidden = null, o._cache = {}, o._isXHTML = Pa(a.ownerDocument), a.nodeName.toLowerCase() === "input") {
            var u = a.getAttribute("type");
            u = o._isXHTML ? u : (u || "").toLowerCase(), In().includes(u) || (u = "text"), o._type = u;
          }
          return ue.get("nodeMap") && ue.get("nodeMap").set(a, Du(o)), o;
        }
        return _t(r, [{
          key: "props",
          get: function() {
            if (!this._cache.hasOwnProperty("props")) {
              var n = this.actualNode, i = n.nodeType, o = n.nodeName, u = n.id, l = n.nodeValue;
              this._cache.props = {
                nodeType: i,
                nodeName: this._isXHTML ? o : o.toLowerCase(),
                id: u,
                type: this._type,
                nodeValue: l
              }, i === 1 && (this._cache.props.multiple = this.actualNode.multiple, this._cache.props.value = this.actualNode.value, this._cache.props.selected = this.actualNode.selected, this._cache.props.checked = this.actualNode.checked, this._cache.props.indeterminate = this.actualNode.indeterminate);
            }
            return this._cache.props;
          }
        }, {
          key: "attr",
          value: function(n) {
            return typeof this.actualNode.getAttribute != "function" ? null : this.actualNode.getAttribute(n);
          }
        }, {
          key: "hasAttr",
          value: function(n) {
            return typeof this.actualNode.hasAttribute != "function" ? !1 : this.actualNode.hasAttribute(n);
          }
        }, {
          key: "attrNames",
          get: function() {
            if (!this._cache.hasOwnProperty("attrNames")) {
              var n;
              this.actualNode.attributes instanceof _.NamedNodeMap ? n = this.actualNode.attributes : n = this.actualNode.cloneNode(!1).attributes, this._cache.attrNames = Array.from(n).map(function(i) {
                return i.name;
              });
            }
            return this._cache.attrNames;
          }
        }, {
          key: "getComputedStylePropertyValue",
          value: function(n) {
            var i = "computedStyle_" + n;
            return this._cache.hasOwnProperty(i) || (this._cache.hasOwnProperty("computedStyle") || (this._cache.computedStyle = _.getComputedStyle(this.actualNode)), this._cache[i] = this._cache.computedStyle.getPropertyValue(n)), this._cache[i];
          }
        }, {
          key: "isFocusable",
          get: function() {
            return this._cache.hasOwnProperty("isFocusable") || (this._cache.isFocusable = ke(this.actualNode)), this._cache.isFocusable;
          }
        }, {
          key: "tabbableElements",
          get: function() {
            return this._cache.hasOwnProperty("tabbableElements") || (this._cache.tabbableElements = As(this)), this._cache.tabbableElements;
          }
        }, {
          key: "clientRects",
          get: function() {
            return this._cache.hasOwnProperty("clientRects") || (this._cache.clientRects = Array.from(this.actualNode.getClientRects()).filter(function(n) {
              return n.width > 0;
            })), this._cache.clientRects;
          }
        }, {
          key: "boundingClientRect",
          get: function() {
            return this._cache.hasOwnProperty("boundingClientRect") || (this._cache.boundingClientRect = this.actualNode.getBoundingClientRect()), this._cache.boundingClientRect;
          }
        }]), r;
      }(Ve), Oo = I2;
      function P2(e) {
        return (e || "").trim().replace(/\s{2,}/g, " ").split(" ");
      }
      var Ye = P2, vr = " [idsMap]";
      function Ld(e, t, r) {
        var a = e[0]._selectorMap;
        if (a) {
          for (var n = e[0].shadowId, i = 0; i < t.length; i++)
            if (t[i].length > 1 && t[i].some(function(l) {
              return Bd(l);
            }))
              return;
          var o = /* @__PURE__ */ new Set();
          t.forEach(function(l) {
            var s, c = L2(l, a, n);
            c == null || (s = c.nodes) === null || s === void 0 || s.forEach(function(d) {
              c.isComplexSelector && !Dr(d, l) || o.add(d);
            });
          });
          var u = [];
          return o.forEach(function(l) {
            return u.push(l);
          }), r && (u = u.filter(r)), u.sort(function(l, s) {
            return l.nodeIndex - s.nodeIndex;
          });
        }
      }
      function L2(e, t, r) {
        var a = e[e.length - 1], n = null, i = e.length > 1 || !!a.pseudos || !!a.classes;
        if (Bd(a))
          n = t["*"];
        else {
          if (a.id) {
            var o;
            if (!t[vr] || !Object.hasOwn(t[vr], a.id) || !((o = t[vr][a.id]) !== null && o !== void 0 && o.length))
              return;
            n = t[vr][a.id].filter(function(h) {
              return h.shadowId === r;
            });
          }
          if (a.tag && a.tag !== "*") {
            var u;
            if (!((u = t[a.tag]) !== null && u !== void 0 && u.length))
              return;
            var l = t[a.tag];
            n = n ? Mo(l, n) : l;
          }
          if (a.classes) {
            var s;
            if (!((s = t["[class]"]) !== null && s !== void 0 && s.length))
              return;
            var c = t["[class]"];
            n = n ? Mo(c, n) : c;
          }
          if (a.attributes)
            for (var d = 0; d < a.attributes.length; d++) {
              var f, p = a.attributes[d];
              if (p.type === "attrValue" && (i = !0), !((f = t["[".concat(p.key, "]")]) !== null && f !== void 0 && f.length))
                return;
              var m = t["[".concat(p.key, "]")];
              n = n ? Mo(m, n) : m;
            }
        }
        return {
          nodes: n,
          isComplexSelector: i
        };
      }
      function Bd(e) {
        return e.tag === "*" && !e.attributes && !e.id && !e.classes;
      }
      function Mo(e, t) {
        return e.filter(function(r) {
          return t.includes(r);
        });
      }
      function kn(e, t, r) {
        Object.hasOwn(r, e) || (r[e] = []), r[e].push(t);
      }
      function qd(e, t) {
        e.props.nodeType === 1 && (kn(e.props.nodeName, e, t), kn("*", e, t), e.attrNames.forEach(function(r) {
          r === "id" && (t[vr] = t[vr] || {}, Ye(e.attr(r)).forEach(function(a) {
            kn(a, e, t[vr]);
          })), kn("[".concat(r, "]"), e, t);
        }));
      }
      var No;
      function Io() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M.documentElement, t = arguments.length > 1 ? arguments[1] : void 0;
        No = !1;
        var r = {};
        ue.set("nodeMap", /* @__PURE__ */ new WeakMap()), ue.set("selectorMap", r);
        var a = jd(e, t, null);
        return a[0]._selectorMap = r, a[0]._hasShadowRoot = No, a;
      }
      function B2(e) {
        var t = [];
        for (e = e.firstChild; e; )
          t.push(e), e = e.nextSibling;
        return t;
      }
      function Po(e, t, r) {
        var a = new Oo(e, t, r);
        return qd(a, ue.get("selectorMap")), a;
      }
      function jd(e, t, r) {
        var a, n, i;
        function o(u, l, s) {
          var c = jd(l, t, s);
          return c && (u = u.concat(c)), u;
        }
        return e.documentElement && (e = e.documentElement), i = e.nodeName.toLowerCase(), Ga(e) ? (No = !0, a = Po(e, r, t), t = "a" + Math.random().toString().substring(2), n = Array.from(e.shadowRoot.childNodes), a.children = n.reduce(function(u, l) {
          return o(u, l, a);
        }, []), [a]) : i === "content" && typeof e.getDistributedNodes == "function" ? (n = Array.from(e.getDistributedNodes()), n.reduce(function(u, l) {
          return o(u, l, r);
        }, [])) : i === "slot" && typeof e.assignedNodes == "function" ? (n = Array.from(e.assignedNodes()), n.length || (n = B2(e)), _.getComputedStyle(e), n.reduce(function(u, l) {
          return o(u, l, r);
        }, [])) : e.nodeType === 1 ? (a = Po(e, r, t), n = Array.from(e.childNodes), a.children = n.reduce(function(u, l) {
          return o(u, l, a);
        }, []), [a]) : e.nodeType === 3 ? [Po(e, r)] : void 0;
      }
      function q2(e) {
        return e ? e.trim().split("-")[0].toLowerCase() : "";
      }
      var gr = q2;
      function j2(e) {
        var t = {};
        return t.none = e.none.concat(e.all), t.any = e.any, Object.keys(t).map(function(r) {
          if (t[r].length) {
            var a = y._audit.data.failureSummaries[r];
            if (a && typeof a.failureMessage == "function")
              return a.failureMessage(t[r].map(function(n) {
                return n.message || "";
              }));
          }
        }).filter(function(r) {
          return r !== void 0;
        }).join(`

`);
      }
      var Lo = j2;
      function Bo() {
        var e = y._audit.data.incompleteFallbackMessage;
        return typeof e == "function" && (e = e()), typeof e != "string" ? "" : e;
      }
      var zd = se.resultGroups;
      function va(e, t) {
        var r = y.utils.aggregateResult(e);
        return zd.forEach(function(a) {
          t.resultTypes && !t.resultTypes.includes(a) && (r[a] || []).forEach(function(n) {
            Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = [n.nodes[0]]);
          }), r[a] = (r[a] || []).map(function(n) {
            return n = Object.assign({}, n), Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = n.nodes.map(function(i) {
              if (k(i.node) === "object") {
                var o = Vd(i.node, t);
                Object.assign(i, o);
              }
              return delete i.result, delete i.node, z2(i, t), i;
            })), zd.forEach(function(i) {
              return delete n[i];
            }), delete n.pageLevel, delete n.result, n;
          });
        }), r;
      }
      function z2(e, t) {
        ["any", "all", "none"].forEach(function(r) {
          Array.isArray(e[r]) && e[r].filter(function(a) {
            return Array.isArray(a.relatedNodes);
          }).forEach(function(a) {
            a.relatedNodes = a.relatedNodes.map(function(n) {
              return Vd(n, t);
            });
          });
        });
      }
      function Vd() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
        e = dt.dqElmToSpec(e, t);
        var r = {};
        if (y._audit.noHtml)
          r.html = null;
        else {
          var a;
          r.html = (a = e.source) !== null && a !== void 0 ? a : "Undefined";
        }
        if (t.elementRef && !e.fromFrame) {
          var n;
          r.element = (n = e.element) !== null && n !== void 0 ? n : null;
        }
        if (t.selectors !== !1 || e.fromFrame) {
          var i;
          r.target = (i = e.selector) !== null && i !== void 0 ? i : [":root"];
        }
        if (t.ancestry) {
          var o;
          r.ancestry = (o = e.ancestry) !== null && o !== void 0 ? o : [":root"];
        }
        if (t.xpath) {
          var u;
          r.xpath = (u = e.xpath) !== null && u !== void 0 ? u : ["/"];
        }
        return r;
      }
      var V2 = /\$\{\s?data\s?\}/g;
      function Sn(e, t) {
        if (typeof t == "string")
          return e.replace(V2, t);
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var a = new RegExp("\\${\\s?data\\." + r + "\\s?}", "g"), n = typeof t[r] > "u" ? "" : String(t[r]);
            e = e.replace(a, n);
          }
        return e;
      }
      function Hd(e, t) {
        if (e) {
          if (Array.isArray(t)) {
            if (t.values = t.join(", "), typeof e.singular == "string" && typeof e.plural == "string") {
              var r = t.length === 1 ? e.singular : e.plural;
              return Sn(r, t);
            }
            return Sn(e, t);
          }
          if (typeof e == "string")
            return Sn(e, t);
          if (typeof t == "string") {
            var a = e[t];
            return Sn(a, t);
          }
          var n = e.default || Bo();
          return t && t.messageKey && e[t.messageKey] && (n = e[t.messageKey]), Hd(n, t);
        }
      }
      var qo = Hd;
      function H2(e, t, r) {
        var a = y._audit.data.checks[e];
        if (!a)
          throw new Error("Cannot get message for unknown check: ".concat(e, "."));
        if (!a.messages[t])
          throw new Error('Check "'.concat(e, '"" does not have a "').concat(t, '" message.'));
        return qo(a.messages[t], r);
      }
      var $2 = H2;
      function U2(e, t, r) {
        var a = ((r.rules && r.rules[t] || {}).checks || {})[e.id], n = (r.checks || {})[e.id], i = e.enabled, o = e.options;
        return n && (n.hasOwnProperty("enabled") && (i = n.enabled), n.hasOwnProperty("options") && (o = n.options)), a && (a.hasOwnProperty("enabled") && (i = a.enabled), a.hasOwnProperty("options") && (o = a.options)), {
          enabled: i,
          options: o,
          absolutePaths: r.absolutePaths
        };
      }
      var On = U2;
      function Yt() {
        var e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _;
        return t && k(t) === "object" ? t : k(r) !== "object" ? {} : {
          testEngine: {
            name: "axe-core",
            version: y.version
          },
          testRunner: {
            name: y._audit.brand
          },
          testEnvironment: G2(r),
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          url: (e = r.location) === null || e === void 0 ? void 0 : e.href
        };
      }
      function G2(e) {
        if (!e.navigator || k(e.navigator) !== "object")
          return {};
        var t = e.navigator, r = e.innerHeight, a = e.innerWidth, n = W2(e) || {}, i = n.angle, o = n.type;
        return {
          userAgent: t.userAgent,
          windowWidth: a,
          windowHeight: r,
          orientationAngle: i,
          orientationType: o
        };
      }
      function W2(e) {
        var t = e.screen;
        return t.orientation || t.msOrientation || t.mozOrientation;
      }
      function $d(e, t) {
        var r = t.focusable, a = t.page;
        return {
          node: e,
          include: [],
          exclude: [],
          initiator: !1,
          focusable: r && Y2(e),
          size: X2(e),
          page: a
        };
      }
      function Y2(e) {
        var t = e.getAttribute("tabindex");
        if (!t)
          return !0;
        var r = parseInt(t, 10);
        return isNaN(r) || r >= 0;
      }
      function X2(e) {
        var t = parseInt(e.getAttribute("width"), 10), r = parseInt(e.getAttribute("height"), 10);
        if (isNaN(t) || isNaN(r)) {
          var a = e.getBoundingClientRect();
          t = isNaN(t) ? a.width : t, r = isNaN(r) ? a.height : r;
        }
        return {
          width: t,
          height: r
        };
      }
      function K2(e) {
        if (Gd(e)) {
          var t = " must be used inside include or exclude. It should not be on the same object.";
          Xt(!It(e, "fromFrames"), "fromFrames" + t), Xt(!It(e, "fromShadowDom"), "fromShadowDom" + t);
        } else if (jo(e))
          e = {
            include: e,
            exclude: []
          };
        else
          return {
            include: [M],
            exclude: []
          };
        var r = Ud(e.include);
        r.length === 0 && r.push(M);
        var a = Ud(e.exclude);
        return {
          include: r,
          exclude: a
        };
      }
      function Z2(e) {
        return Gd(e) || jo(e);
      }
      function Ud() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [];
        Yd(e) || (e = [e]);
        for (var r = 0; r < e.length; r++) {
          var a = J2(e[r]);
          a && t.push(a);
        }
        return t;
      }
      function J2(e) {
        return e instanceof _.Node ? e : typeof e == "string" ? [e] : (Wd(e) ? (ew(e), e = e.fromFrames) : zo(e) && (e = [e]), Q2(e));
      }
      function Q2(e) {
        if (Array.isArray(e)) {
          var t = [], r = Ae(e), a;
          try {
            for (r.s(); !(a = r.n()).done; ) {
              var n = a.value;
              if (zo(n) && (tw(n), n = n.fromShadowDom), typeof n != "string" && !rw(n))
                return;
              t.push(n);
            }
          } catch (i) {
            r.e(i);
          } finally {
            r.f();
          }
          return t;
        }
      }
      function Gd(e) {
        return ["include", "exclude"].some(function(t) {
          return It(e, t) && jo(e[t]);
        });
      }
      function jo(e) {
        return typeof e == "string" || e instanceof _.Node || Wd(e) || zo(e) || Yd(e);
      }
      function Wd(e) {
        return It(e, "fromFrames");
      }
      function zo(e) {
        return It(e, "fromShadowDom");
      }
      function ew(e) {
        Xt(Array.isArray(e.fromFrames), "fromFrames property must be an array"), Xt(e.fromFrames.every(function(t) {
          return !It(t, "fromFrames");
        }), "Invalid context; fromFrames selector must be appended, rather than nested"), Xt(!It(e, "fromShadowDom"), "fromFrames and fromShadowDom cannot be used on the same object");
      }
      function tw(e) {
        Xt(Array.isArray(e.fromShadowDom), "fromShadowDom property must be an array"), Xt(e.fromShadowDom.every(function(t) {
          return !It(t, "fromFrames");
        }), "shadow selector must be inside fromFrame instead"), Xt(e.fromShadowDom.every(function(t) {
          return !It(t, "fromShadowDom");
        }), "fromShadowDom selector must be appended, rather than nested");
      }
      function rw(e) {
        return Array.isArray(e) && e.every(function(t) {
          return typeof t == "string";
        });
      }
      function Yd(e) {
        return e && k(e) === "object" && typeof e.length == "number" && !(e instanceof _.Node);
      }
      function Xt(e, t) {
        me(e, "Invalid context; ".concat(t, `
See: https://github.com/dequelabs/axe-core/blob/master/doc/context.md`));
      }
      function It(e, t) {
        return !e || k(e) !== "object" ? !1 : Object.prototype.hasOwnProperty.call(e, t);
      }
      function Xd(e, t) {
        for (var r = [], a = 0, n = e[t].length; a < n; a++) {
          var i = e[t][a];
          if (i instanceof _.Node)
            i.documentElement instanceof _.Node ? r.push(e.flatTree[0]) : r.push(le(i));
          else if (i && i.length)
            if (i.length > 1)
              aw(e, t, i);
            else {
              var o = Xo(i[0]);
              r.push.apply(r, re(o.map(function(u) {
                return le(u);
              })));
            }
        }
        return r.filter(function(u) {
          return u;
        });
      }
      function aw(e, t, r) {
        e.frames = e.frames || [];
        var a = r.shift(), n = Xo(a);
        n.forEach(function(i) {
          var o = e.frames.find(function(u) {
            return u.node === i;
          });
          o || (o = $d(i, e), e.frames.push(o)), o[t].push(r);
        });
      }
      function Mn(e, t) {
        var r, a, n, i, o = this;
        e = Mt(e), this.frames = [], this.page = typeof ((r = e) === null || r === void 0 ? void 0 : r.page) == "boolean" ? e.page : void 0, this.initiator = typeof ((a = e) === null || a === void 0 ? void 0 : a.initiator) == "boolean" ? e.initiator : !0, this.focusable = typeof ((n = e) === null || n === void 0 ? void 0 : n.focusable) == "boolean" ? e.focusable : !0, this.size = k((i = e) === null || i === void 0 ? void 0 : i.size) === "object" ? e.size : {}, e = K2(e), this.flatTree = t ?? Io(uw(e)), this.exclude = e.exclude, this.include = e.include, this.include = Xd(this, "include"), this.exclude = Xd(this, "exclude"), Yo("frame, iframe", this).forEach(function(u) {
          Ho(u, o) && nw(o, u.actualNode);
        }), typeof this.page > "u" && (this.page = iw(this), this.frames.forEach(function(u) {
          u.page = o.page;
        })), ow(this), Array.isArray(this.include) || (this.include = Array.from(this.include)), this.include.sort(Uo);
      }
      function nw(e, t) {
        !Fe(t) || Zr(e.frames, "node", t) || e.frames.push($d(t, e));
      }
      function iw(e) {
        var t = e.include;
        return t.length === 1 && t[0].actualNode === M.documentElement;
      }
      function ow(e) {
        if (e.include.length === 0 && e.frames.length === 0) {
          var t = bt.isInFrame() ? "frame" : "page";
          throw new Error("No elements found for include in " + t + " Context");
        }
      }
      function uw(e) {
        for (var t = e.include, r = e.exclude, a = Array.from(t).concat(Array.from(r)), n = 0; n < a.length; n++) {
          var i = a[n];
          if (i instanceof _.Element)
            return i.ownerDocument.documentElement;
          if (i instanceof _.Document)
            return i.documentElement;
        }
        return M.documentElement;
      }
      function lw(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t.iframes === !1)
          return [];
        var r = new Mn(e), a = r.frames;
        return a.map(function(n) {
          var i = n.node, o = Pe(n, ep);
          o.initiator = !1;
          var u = Ba(i);
          return {
            frameSelector: u,
            frameContext: o
          };
        });
      }
      function Kd(e) {
        var t = y._audit.rules.find(function(r) {
          var a = r.id;
          return a === e;
        });
        if (!t)
          throw new Error("Cannot find rule by id: ".concat(e));
        return t;
      }
      function sw(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = e.scrollWidth > e.clientWidth + t, a = e.scrollHeight > e.clientHeight + t;
        if (r || a) {
          var n = _.getComputedStyle(e), i = Zd(n, "overflow-x"), o = Zd(n, "overflow-y");
          if (r && i || a && o)
            return {
              elm: e,
              top: e.scrollTop,
              left: e.scrollLeft
            };
        }
      }
      function Zd(e, t) {
        var r = e.getPropertyValue(t);
        return ["scroll", "auto"].includes(r);
      }
      var Pt = Le(sw);
      function Jd(e) {
        return Array.from(e.children || e.childNodes || []).reduce(function(t, r) {
          var a = Pt(r);
          return a && t.push(a), t.concat(Jd(r));
        }, []);
      }
      function cw() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _, t = e.document.documentElement, r = [e.pageXOffset !== void 0 ? {
          elm: e,
          top: e.pageYOffset,
          left: e.pageXOffset
        } : {
          elm: t,
          top: t.scrollTop,
          left: t.scrollLeft
        }];
        return r.concat(Jd(M.body));
      }
      var dw = cw;
      function fw() {
        return Mt(he);
      }
      function pw(e) {
        if (!e)
          throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument");
        return function(t) {
          var r = t.data, a = t.isCrossOrigin, n = a === void 0 ? !1 : a, i = t.shadowId, o = t.root, u = t.priority, l = t.isLink, s = l === void 0 ? !1 : l, c = e.createElement("style");
          if (s) {
            var d = e.createTextNode('@import "'.concat(r.href, '"'));
            c.appendChild(d);
          } else
            c.appendChild(e.createTextNode(r));
          return e.head.appendChild(c), {
            sheet: c.sheet,
            isCrossOrigin: n,
            shadowId: i,
            root: o,
            priority: u
          };
        };
      }
      var Qd = pw, lt;
      function mw(e) {
        if (lt && lt.parentNode)
          return lt.styleSheet === void 0 ? lt.appendChild(M.createTextNode(e)) : lt.styleSheet.cssText += e, lt;
        if (e) {
          var t = M.head || M.getElementsByTagName("head")[0];
          return lt = M.createElement("style"), lt.type = "text/css", lt.styleSheet === void 0 ? lt.appendChild(M.createTextNode(e)) : lt.styleSheet.cssText = e, t.appendChild(lt), lt;
        }
      }
      var hw = mw;
      function e1(e, t) {
        var r = le(e);
        if (e.nodeType === 9)
          return !1;
        if (e.nodeType === 11 && (e = e.host), r && r._isHidden !== null)
          return r._isHidden;
        var a = _.getComputedStyle(e, null);
        if (!a || !e.parentNode || a.getPropertyValue("display") === "none" || !t && a.getPropertyValue("visibility") === "hidden" || e.getAttribute("aria-hidden") === "true")
          return !0;
        var n = e.assignedSlot ? e.assignedSlot : e.parentNode, i = e1(n, !0);
        return r && (r._isHidden = i), i;
      }
      var vw = e1;
      function gw(e) {
        var t, r, a = (t = (r = e.props) === null || r === void 0 ? void 0 : r.nodeName) !== null && t !== void 0 ? t : e.nodeName.toLowerCase();
        return e.namespaceURI === "http://www.w3.org/2000/svg" ? !1 : !!he.htmlElms[a];
      }
      var Vo = gw;
      function Ho(e, t) {
        var r = t.include, a = r === void 0 ? [] : r, n = t.exclude, i = n === void 0 ? [] : n, o = a.filter(function(c) {
          return ur(c, e);
        });
        if (o.length === 0)
          return !1;
        var u = i.filter(function(c) {
          return ur(c, e);
        });
        if (u.length === 0)
          return !0;
        var l = t1(o), s = t1(u);
        return ur(s, l);
      }
      function t1(e) {
        var t, r = Ae(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value;
            (!t || !ur(n, t)) && (t = n);
          }
        } catch (i) {
          r.e(i);
        } finally {
          r.f();
        }
        return t;
      }
      function $o(e, t) {
        return e.length !== t.length ? !1 : e.every(function(r, a) {
          var n = t[a];
          return Array.isArray(r) ? r.length !== n.length ? !1 : r.every(function(i, o) {
            return n[o] === i;
          }) : r === n;
        });
      }
      function bw(e, t) {
        return e = e.actualNode || e, t = t.actualNode || t, e === t ? 0 : e.compareDocumentPosition(t) & 4 ? -1 : 1;
      }
      var Uo = bw;
      function De(e) {
        return e instanceof Ve ? {
          vNode: e,
          domNode: e.actualNode
        } : {
          vNode: le(e),
          domNode: e
        };
      }
      function yw(e, t, r, a) {
        var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = Array.from(e.cssRules);
        if (!i)
          return Promise.resolve();
        var o = i.filter(function(c) {
          return c.type === 3;
        });
        if (!o.length)
          return Promise.resolve({
            isCrossOrigin: n,
            priority: r,
            root: t.rootNode,
            shadowId: t.shadowId,
            sheet: e
          });
        var u = o.filter(function(c) {
          return c.href;
        }).map(function(c) {
          return c.href;
        }).filter(function(c) {
          return !a.includes(c);
        }), l = u.map(function(c, d) {
          var f = [].concat(re(r), [d]), p = /^https?:\/\/|^\/\//i.test(c);
          return Wo(c, t, f, a, p);
        }), s = i.filter(function(c) {
          return c.type !== 3;
        });
        return s.length && l.push(Promise.resolve(t.convertDataToStylesheet({
          data: s.map(function(c) {
            return c.cssText;
          }).join(),
          isCrossOrigin: n,
          priority: r,
          root: t.rootNode,
          shadowId: t.shadowId
        }))), Promise.all(l);
      }
      var r1 = yw;
      function ww(e, t, r, a) {
        var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = Dw(e);
        return i ? r1(e, t, r, a, n) : Wo(e.href, t, r, a, !0);
      }
      function Dw(e) {
        try {
          var t = e.cssRules;
          return !(!t && e.href);
        } catch {
          return !1;
        }
      }
      var Go = ww;
      function _w(e, t, r, a, n) {
        return a.push(e), new Promise(function(i, o) {
          var u = new _.XMLHttpRequest();
          u.open("GET", e), u.timeout = se.preload.timeout, u.addEventListener("error", o), u.addEventListener("timeout", o), u.addEventListener("loadend", function(l) {
            if (l.loaded && u.responseText)
              return i(u.responseText);
            o(u.responseText);
          }), u.send();
        }).then(function(i) {
          var o = t.convertDataToStylesheet({
            data: i,
            isCrossOrigin: n,
            priority: r,
            root: t.rootNode,
            shadowId: t.shadowId
          });
          return Go(o.sheet, t, r, a, o.isCrossOrigin);
        });
      }
      var Wo = _w, xw = function() {
        function e() {
          if (_.performance && _.performance)
            return _.performance.now();
        }
        var t = null, r = e();
        return {
          start: function() {
            this.mark("mark_axe_start");
          },
          end: function() {
            this.mark("mark_axe_end"), this.measure("axe", "mark_axe_start", "mark_axe_end"), this.logMeasures("axe");
          },
          auditStart: function() {
            this.mark("mark_audit_start");
          },
          auditEnd: function() {
            this.mark("mark_audit_end"), this.measure("audit_start_to_end", "mark_audit_start", "mark_audit_end"), this.logMeasures();
          },
          mark: function(n) {
            _.performance && _.performance.mark !== void 0 && _.performance.mark(n);
          },
          measure: function(n, i, o) {
            _.performance && _.performance.measure !== void 0 && _.performance.measure(n, i, o);
          },
          logMeasures: function(n) {
            function i(c) {
              nr("Measure " + c.name + " took " + c.duration + "ms");
            }
            if (_.performance && _.performance.getEntriesByType !== void 0)
              for (var o = _.performance.getEntriesByName("mark_axe_start")[0], u = _.performance.getEntriesByType("measure").filter(function(c) {
                return c.startTime >= o.startTime;
              }), l = 0; l < u.length; ++l) {
                var s = u[l];
                if (s.name === n) {
                  i(s);
                  return;
                }
                i(s);
              }
          },
          timeElapsed: function() {
            return e() - r;
          },
          reset: function() {
            t || (t = e()), r = e();
          }
        };
      }(), Be = xw;
      function a1() {
        if (M.elementsFromPoint)
          return M.elementsFromPoint;
        if (M.msElementsFromPoint)
          return M.msElementsFromPoint;
        var e = function() {
          var n = M.createElement("x");
          return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
        }(), t = e ? "pointer-events" : "visibility", r = e ? "none" : "hidden", a = M.createElement("style");
        return a.innerHTML = e ? "* { pointer-events: all }" : "* { visibility: visible }", function(n, i) {
          var o, u, l, s = [], c = [];
          for (M.head.appendChild(a); (o = M.elementFromPoint(n, i)) && s.indexOf(o) === -1; )
            s.push(o), c.push({
              value: o.style.getPropertyValue(t),
              priority: o.style.getPropertyPriority(t)
            }), o.style.setProperty(t, r, "important");
          for (s.indexOf(M.documentElement) < s.length - 1 && (s.splice(s.indexOf(M.documentElement), 1), s.push(M.documentElement)), u = c.length; l = c[--u]; )
            s[u].style.setProperty(t, l.value ? l.value : "", l.priority);
          return M.head.removeChild(a), s;
        };
      }
      typeof _.addEventListener == "function" && (M.elementsFromPoint = a1());
      function Ew(e, t) {
        return e.concat(t).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
      }
      var ga = Ew;
      function n1(e, t, r, a, n) {
        var i = n || {};
        return i.vNodes = e, i.vNodesIndex = 0, i.anyLevel = t, i.thisLevel = r, i.parentShadowId = a, i;
      }
      function Cw(e, t, r) {
        for (var a = ue.get("qsa.recycledLocalVariables", function() {
          return [];
        }), n = [], i = Array.isArray(e) ? e : [e], o = n1(i, t, null, e[0].shadowId, a.pop()), u = []; o.vNodesIndex < o.vNodes.length; ) {
          for (var l, s, c = o.vNodes[o.vNodesIndex++], d = null, f = null, p = (((l = o.anyLevel) === null || l === void 0 ? void 0 : l.length) || 0) + (((s = o.thisLevel) === null || s === void 0 ? void 0 : s.length) || 0), m = !1, h = 0; h < p; h++) {
            var b, v, g, w = h < (((b = o.anyLevel) === null || b === void 0 ? void 0 : b.length) || 0) ? o.anyLevel[h] : o.thisLevel[h - (((v = o.anyLevel) === null || v === void 0 ? void 0 : v.length) || 0)];
            if ((!w[0].id || c.shadowId === o.parentShadowId) && Dr(c, w[0]))
              if (w.length === 1)
                !m && (!r || r(c)) && (u.push(c), m = !0);
              else {
                var D = w.slice(1);
                if ([" ", ">"].includes(D[0].combinator) === !1)
                  throw new Error("axe.utils.querySelectorAll does not support the combinator: " + w[1].combinator);
                D[0].combinator === ">" ? (d = d || []).push(D) : (f = f || []).push(D);
              }
            (!w[0].id || c.shadowId === o.parentShadowId) && (g = o.anyLevel) !== null && g !== void 0 && g.includes(w) && (f = f || []).push(w);
          }
          for (c.children && c.children.length && (n.push(o), o = n1(c.children, f, d, c.shadowId, a.pop())); o.vNodesIndex === o.vNodes.length && n.length; )
            a.push(o), o = n.pop();
        }
        return u;
      }
      function Aw(e, t, r) {
        e = Array.isArray(e) ? e : [e];
        var a = qa(t), n = Ld(e, a, r);
        return n || Cw(e, a, r);
      }
      var Rt = Aw;
      function Fw(e) {
        var t = e.treeRoot, r = t === void 0 ? y._tree[0] : t, a = Tw(r);
        if (!a.length)
          return Promise.resolve();
        var n = M.implementation.createHTMLDocument("Dynamic document for loading cssom"), i = Qd(n);
        return Rw(a, i).then(function(o) {
          return o1(o);
        });
      }
      var i1 = Fw;
      function Tw(e) {
        var t = [], r = Rt(e, "*", function(a) {
          return t.includes(a.shadowId) ? !1 : (t.push(a.shadowId), !0);
        }).map(function(a) {
          return {
            shadowId: a.shadowId,
            rootNode: Jr(a.actualNode)
          };
        });
        return ga(r, []);
      }
      function Rw(e, t) {
        var r = [];
        return e.forEach(function(a, n) {
          var i = a.rootNode, o = a.shadowId, u = kw(i, o, t);
          if (!u)
            return Promise.all(r);
          var l = n + 1, s = {
            rootNode: i,
            shadowId: o,
            convertDataToStylesheet: t,
            rootIndex: l
          }, c = [], d = Promise.all(u.map(function(f, p) {
            var m = [l, p];
            return Go(f, s, m, c);
          }));
          r.push(d);
        }), Promise.all(r);
      }
      function o1(e) {
        return e.reduce(function(t, r) {
          return Array.isArray(r) ? t.concat(o1(r)) : t.concat(r);
        }, []);
      }
      function kw(e, t, r) {
        var a;
        return e.nodeType === 11 && t ? a = Sw(e, r) : a = Ow(e), Nw(a);
      }
      function Sw(e, t) {
        return Array.from(e.children).filter(Mw).reduce(function(r, a) {
          var n = a.nodeName.toUpperCase(), i = n === "STYLE" ? a.textContent : a, o = n === "LINK", u = t({
            data: i,
            isLink: o,
            root: e
          });
          return u.sheet && r.push(u.sheet), r;
        }, []);
      }
      function Ow(e) {
        return Array.from(e.styleSheets).filter(function(t) {
          return t.media ? u1(t.media.mediaText) : !1;
        });
      }
      function Mw(e) {
        var t = e.nodeName.toUpperCase(), r = e.getAttribute("href"), a = e.getAttribute("rel"), n = t === "LINK" && r && a && e.rel.toUpperCase().includes("STYLESHEET"), i = t === "STYLE";
        return i || n && u1(e.media);
      }
      function u1(e) {
        return e ? !e.toUpperCase().includes("PRINT") : !0;
      }
      function Nw(e) {
        var t = [];
        return e.filter(function(r) {
          return r.href ? t.includes(r.href) ? !1 : (t.push(r.href), !0) : !0;
        });
      }
      function Iw(e) {
        var t = e.treeRoot, r = t === void 0 ? y._tree[0] : t, a = Rt(r, "video, audio", function(n) {
          var i = n.actualNode;
          if (i.hasAttribute("src"))
            return !!i.getAttribute("src");
          var o = Array.from(i.getElementsByTagName("source")).filter(function(u) {
            return !!u.getAttribute("src");
          });
          return !(o.length <= 0);
        });
        return Promise.all(a.map(function(n) {
          var i = n.actualNode;
          return Pw(i);
        }));
      }
      var l1 = Iw;
      function Pw(e) {
        return new Promise(function(t) {
          e.readyState > 0 && t(e);
          function r() {
            e.removeEventListener("loadedmetadata", r), t(e);
          }
          e.addEventListener("loadedmetadata", r);
        });
      }
      function s1(e) {
        var t = {
          cssom: i1,
          media: l1
        };
        return c1(e) ? new Promise(function(r, a) {
          var n = d1(e), i = n.assets, o = n.timeout, u = setTimeout(function() {
            return a(new Error("Preload assets timed out."));
          }, o);
          Promise.all(i.map(function(l) {
            return t[l](e).then(function(s) {
              return up({}, l, s);
            });
          })).then(function(l) {
            var s = l.reduce(function(c, d) {
              return fe({}, c, d);
            }, {});
            clearTimeout(u), r(s);
          }).catch(function(l) {
            clearTimeout(u), a(l);
          });
        }) : Promise.resolve();
      }
      function Lw(e) {
        return k(e) === "object" && Array.isArray(e.assets);
      }
      function c1(e) {
        return !e || e.preload === void 0 || e.preload === null ? !0 : typeof e.preload == "boolean" ? e.preload : Lw(e.preload);
      }
      function d1(e) {
        var t = se.preload, r = t.assets, a = t.timeout, n = {
          assets: r,
          timeout: a
        };
        if (!e.preload || typeof e.preload == "boolean")
          return n;
        var i = e.preload.assets.every(function(o) {
          return r.includes(o.toLowerCase());
        });
        if (!i)
          throw new Error("Requested assets, not supported. Supported assets are: ".concat(r.join(", "), "."));
        return n.assets = ga(e.preload.assets.map(function(o) {
          return o.toLowerCase();
        }), []), e.preload.timeout && typeof e.preload.timeout == "number" && !isNaN(e.preload.timeout) && (n.timeout = e.preload.timeout), n;
      }
      function Nn(e) {
        var t = y._audit.data.checks || {}, r = y._audit.data.rules || {}, a = Zr(y._audit.rules, "id", e.id) || {};
        e.tags = Mt(a.tags || []);
        var n = f1(t, !0, a), i = f1(t, !1, a);
        e.nodes.forEach(function(o) {
          o.any.forEach(n), o.all.forEach(n), o.none.forEach(i);
        }), Fi(e, Mt(r[e.id] || {}));
      }
      function Bw(e, t) {
        function r(n) {
          return n.incomplete && n.incomplete.default ? n.incomplete.default : Bo();
        }
        if (e && e.missingData)
          try {
            var a = t.incomplete[e.missingData[0].reason];
            if (!a)
              throw new Error();
            return a;
          } catch {
            return typeof e.missingData == "string" ? t.incomplete[e.missingData] : r(t);
          }
        else
          return e && e.messageKey ? t.incomplete[e.messageKey] : r(t);
      }
      function f1(e, t, r) {
        return function(a) {
          var n = e[a.id] || {}, i = n.messages || {}, o = Object.assign({}, n);
          delete o.messages, !r.reviewOnFail && a.result === void 0 ? (k(i.incomplete) === "object" && !Array.isArray(a.data) && (o.message = Bw(a.data, i)), o.message || (o.message = i.incomplete)) : o.message = a.result === t ? i.pass : i.fail, typeof o.message != "function" && (o.message = qo(o.message, a.data)), Fi(a, o);
        };
      }
      function qw(e, t) {
        return Rt(e, t);
      }
      var st = qw;
      function p1(e, t) {
        var r, a, n, i = y._audit && y._audit.tagExclude ? y._audit.tagExclude : [];
        return t.hasOwnProperty("include") || t.hasOwnProperty("exclude") ? (r = t.include || [], r = Array.isArray(r) ? r : [r], a = t.exclude || [], a = Array.isArray(a) ? a : [a], a = a.concat(i.filter(function(o) {
          return r.indexOf(o) === -1;
        }))) : (r = Array.isArray(t) ? t : [t], a = i.filter(function(o) {
          return r.indexOf(o) === -1;
        })), n = r.some(function(o) {
          return e.tags.indexOf(o) !== -1;
        }), n || r.length === 0 && e.enabled !== !1 ? a.every(function(o) {
          return e.tags.indexOf(o) === -1;
        }) : !1;
      }
      function jw(e, t, r) {
        var a = r.runOnly || {}, n = (r.rules || {})[e.id];
        return e.pageLevel && !t.page ? !1 : a.type === "rule" ? a.values.indexOf(e.id) !== -1 : n && typeof n.enabled == "boolean" ? n.enabled : a.type === "tag" && a.values ? p1(e, a.values) : p1(e, []);
      }
      var m1 = jw;
      function h1(e, t) {
        if (!t)
          return e;
        var r = e.cloneNode(!1), a = Ia(r);
        if (r.nodeType === 1) {
          var n = r.outerHTML;
          r = ue.get(n, function() {
            return v1(r, a, e, t);
          });
        } else
          r = v1(r, a, e, t);
        return Array.from(e.childNodes).forEach(function(i) {
          r.appendChild(h1(i, t));
        }), r;
      }
      function v1(e, t, r, a) {
        return t && (e = M.createElement(e.nodeName), Array.from(t).forEach(function(n) {
          zw(r, n.name, a) || e.setAttribute(n.name, n.value);
        })), e;
      }
      function zw(e, t, r) {
        return typeof r[t] > "u" ? !1 : r[t] === !0 ? !0 : wr(e, r[t]);
      }
      function Yo(e, t) {
        var r = [], a;
        if (y._selectCache)
          for (var n = 0, i = y._selectCache.length; n < i; n++) {
            var o = y._selectCache[n];
            if (o.selector === e)
              return o.result;
          }
        for (var u = Vw(t.include), l = Hw(t), s = 0; s < u.length; s++) {
          a = u[s];
          var c = Rt(a, e, l);
          r = $w(r, c);
        }
        return y._selectCache && y._selectCache.push({
          selector: e,
          result: r
        }), r;
      }
      function Vw(e) {
        return e.reduce(function(t, r) {
          return (!t.length || !ur(t[t.length - 1], r)) && t.push(r), t;
        }, []);
      }
      function Hw(e) {
        return !e.exclude || e.exclude.length === 0 ? null : function(t) {
          return Ho(t, e);
        };
      }
      function $w(e, t) {
        if (e.length === 0)
          return t;
        if (e.length < t.length) {
          var r = e;
          e = t, t = r;
        }
        for (var a = 0, n = t.length; a < n; a++)
          e.includes(t[a]) || e.push(t[a]);
        return e;
      }
      function Uw(e, t, r) {
        if (e === _)
          return e.scroll(r, t);
        e.scrollTop = t, e.scrollLeft = r;
      }
      function Gw(e) {
        e.forEach(function(t) {
          var r = t.elm, a = t.top, n = t.left;
          return Uw(r, a, n);
        });
      }
      var Ww = Gw;
      function Yw(e) {
        var t = Array.isArray(e) ? re(e) : [e];
        return g1(t, M);
      }
      function g1(e, t) {
        var r = e.shift(), a = r ? t.querySelector(r) : null;
        return e.length === 0 ? a : a != null && a.shadowRoot ? g1(e, a.shadowRoot) : null;
      }
      function Xo(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : M, r = Array.isArray(e) ? re(e) : [e];
        return e.length === 0 ? [] : b1(r, t);
      }
      function b1(e, t) {
        var r = op(e), a = r[0], n = r.slice(1), i = t.querySelectorAll(a);
        if (n.length === 0)
          return Array.from(i);
        var o = [], u = Ae(i), l;
        try {
          for (u.s(); !(l = u.n()).done; ) {
            var s = l.value;
            s != null && s.shadowRoot && o.push.apply(o, re(b1(n, s.shadowRoot)));
          }
        } catch (c) {
          u.e(c);
        } finally {
          u.f();
        }
        return o;
      }
      function Xw() {
        return ["hidden", "text", "search", "tel", "url", "email", "password", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"];
      }
      var In = Xw, y1 = [, [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , , , , , 1, 1, 1, 1, , , 1, 1, 1, , 1, , 1, , 1, 1], [1, 1, 1, , 1, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, 1, 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1], [1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , , 1, 1, , , , , , 1, 1], [1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1], [, 1, , , 1, , , 1, , , , , , 1], [, 1, , 1, , , , 1, , , , 1], [1, , 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [, 1, 1, , , , , , 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1], [, , , , 1, , , , , , , , , , , , , , , , , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, , 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, 1, , , , , 1], [1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , 1, , , , , , , 1], [, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1], , [1, 1, 1, , , , , , , , , , , , , 1], [, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1]], [, [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , 1, , , , , , , , , , , , , , , 1], [, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1], [1, , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1], [, , , , , , , 1, , , , 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , 1], [, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1], [, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1], , [, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1], [1, 1, , , 1, 1, , 1, , , , , 1, , 1]], [, [, 1], [, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1], [, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1], , [1, , , , , 1], [, 1, , , , 1, , , , 1], [, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1], [, , , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , 1, , 1], [, 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1], [1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1], [, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1], [1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1], [1, , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], , [, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1], [1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1], [1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1], [1, , , , , , , , , , , , , , , , , 1], [, , , , , 1, , , 1, , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1], [, 1, , , , 1]], [, [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, 1, 1], [, , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], , [, , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1], , [1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1], [1], [, , , , , , , , , , , 1, , , , , , , , , , , 1], [, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , , 1], [, , 1, , , , , 1, , 1], [1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1], [, , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1], [, , , , , 1, , , , , , , 1, , , , , , , 1], , [, , 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , , 1, 1, , 1, 1, 1, , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, , , , 1], , [1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, , , 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1], [, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1], [, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1], [1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, , , , 1, 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1], [, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1], [, 1, , , , , , , , 1, , , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1], [1, 1, , , 1, , , 1, 1, 1, , , , 1], , [, , , , , , , , , , , , , 1, , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1], [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1], [, , , , , , , , , 1], [, 1, , , , 1, , , , , , 1, , , 1, , , , , 1], [, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , 1, , , , 1], , [1, 1, , 1, , 1, , , , , , 1, , 1, , 1, 1, , 1, , 1, 1, , 1, 1, , 1], [, , 1, , , , , , 1, , , , 1, , 1, , , , , 1], [1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1], [, 1, , 1, , , , , , , , , , , , 1], , [1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1], [1]], [, [1, , , , , , , , , 1, , , , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1], [, 1, , , , , , , 1, , , , 1, , , , , , 1], [1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1], [1], [, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1], [1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1], [, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1], [1, , , , , , , , , , , , , , 1, , , , 1], [, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1], [1, , , , , 1, , , , 1, , 1, 1, , , 1, 1, , 1, 1, 1, , 1, 1, 1, , 1], [, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1], [1, , 1, 1, , 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , , , 1], [1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1], [, , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1], [1, , 1, 1, 1, 1, , , , 1, , 1, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1], [1, , , , , , , , , , , , , 1], [, , 1, , , , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , , , 1, , 1, , 1, , , , 1], [, , , 1, , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1], [, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1], [, , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , 1, , , , , , , , , , , , , 1], [, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1], , [, , 1, , , 1, , , , , , 1, , , , 1], [, , , , , , , , , 1, , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , 1, , 1, , , 1, 1, 1, , , 1], [, , , , , 1, , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1], [, , , , , 1, , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1], [, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1], [, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1], [, , , , , , , , , , , , 1], , [, 1, 1, 1, 1, , , , 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1], [1, , , , 1, , , , , , , , , , 1], [1, , , , , , , , , 1], , [, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , 1], [1, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, , 1, 1, , , , , 1], [, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1, , 1, , 1, , , 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1], , [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1, , , , 1], [, 1, , , 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1], [1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1], [1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1], [, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1], , [, 1, , , , , , 1, , , , , , , 1], [, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1]], [, [, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1], [, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1], [1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , 1, 1, , 1, , 1, 1, 1, , 1, , 1, 1, , 1, 1, , 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , , 1, , , , , 1, , 1], [, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1], [, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1]], [, [, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1], [, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1], [1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1], [, 1, , , , , , , , , , 1, , , , , , , , , 1, 1], , [, , , , , , , , , , , , , , , 1, , , , 1, , 1], [, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , , , , , , , , 1], [1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1], [, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1], [1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1], [, , , , 1, , , 1, , , , , , , 1, , , , 1, 1], [, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1], , [1, 1, , 1, , 1, , 1, 1, , , , , , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1], [, 1, 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, , , 1, , , , 1, , , , 1, 1], [, , , , 1], [, , , , , , , , , 1, , , 1], , [, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1], [, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , , , , 1], [, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1], [, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], , [, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1], [, , , , , , , , , , , , , 1], [, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1], [, , , , , , , , , , , , , , 1]], [, [, 1], , , , , , , , , , , , , , , , , , , , [1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, , , , 1, , 1, 1], [, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1], [, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , , , , , , , , , , , , , , 1]], [, [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , 1, 1, , , , 1], [, , , , , , 1], [, , 1], [, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1], , [, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1], [, , , , , , , 1, , , , , , , , , 1], [, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1], [, , , , , , , 1, , 1, , , , , , , , , , 1], [, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1], , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1], [, , , , , , , , , , , , , , 1, , , , , , 1], , [, , , , , , , , , 1, , , , , , 1, , , , , 1], [, , 1, , , , , , , 1, , , 1, 1], [, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1], [1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , , , 1, 1, 1, , , 1, 1, , , , 1, 1], , [1, 1, , , , , , , , , , 1, , 1, , 1, , , 1], [, , , , 1, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , 1], [, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1], [1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1], [, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1], [1, 1, 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1], [, 1, 1, 1, , 1, , 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [1, 1, , , , 1, , , 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, , 1], [, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1]], [, [, , , , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1], , [, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], [1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1], [, 1, , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1, , , 1], [, , , , , , , , , 1], [1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1], [, , , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , , , , , 1], , [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1], [, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1], [, , , , , , , , , , , , , 1, 1, , , , 1, , , 1], [, , , , , 1, , , 1, , , , 1], [, 1], , [, 1], [1, , , , , , , , , , , , , , 1, , , , , 1]], [, [, 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , , 1], [, , 1, , , , , , , , , 1], , , [1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1], , [, , , , , , , , , , , , , , , , , , 1, , 1], , [1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1], , [, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1], [, , , , , , , , , , , , , , , , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , 1, , , 1], [1, , , , , , , , , , , , , , , , , , 1, , 1], , , [, 1, , , , , , , , , , , , , , 1, , , , 1, 1], [, , , , , , , , , 1, , , 1, , , , , , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1, 1, , , , , , 1], , [, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1], [, 1, , , , , , , , 1], [, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1], [, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , , , , , 1], [, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1], [, 1, , , , , , 1, , , , 1, , , , , , , , , , 1], [, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, 1, 1, 1, , 1], [, 1, , , , , , , , 1], [, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1], [, 1, , 1, , 1, , 1, 1, 1, , 1, 1, 1, , 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, , , 1, 1, , , , 1, , 1], [, , , 1], , [, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1], [, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1], [, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1], , [, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1], [, 1, , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1]], [, [, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, , 1, , 1, 1, , , 1, 1, 1, 1, , 1, , , , , 1, 1, 1], [, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1], [, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1], [, 1], [, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1], [1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1], [, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1], [, , 1, , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, , , , 1, 1], [, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1], [, , , , , 1, , , , 1, , , , , 1, 1, , , , 1], [, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1], [, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1], [, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1], [, , , , , , , , 1, , , , , 1, , , 1]], [, [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1], [, , , , , , , , 1, , , , 1, , 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1], , [, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1], [, 1, , , 1, , , , , , , , 1, , , , , , , 1], [1, 1, , , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], , [, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1], [, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1], [, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1], [1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1], [, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1], , [, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1], [, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1], [, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1], [, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1], [, , , , , , , 1, , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , 1], [, 1, , , , , , 1, 1, , , , , , 1], , [, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1], [1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1], [, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1], , [, 1, 1, , 1, , , 1, 1, , , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , , 1], [, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1], [, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1], [, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1], [, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1], [1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1], , [, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, , 1, , , , , 1, , , 1, , , , 1, , 1], [, 1, , , , , , , , , 1]]];
      function Kw(e) {
        for (var t = y1; e.length < 3; )
          e += "`";
        for (var r = 0; r <= e.length - 1; r++) {
          var a = e.charCodeAt(r) - 96;
          if (t = t[a], !t)
            return !1;
        }
        return !0;
      }
      function w1(e) {
        e = Array.isArray(e) ? e : y1;
        var t = [];
        return e.forEach(function(r, a) {
          var n = String.fromCharCode(a + 96).replace("`", "");
          Array.isArray(r) ? t = t.concat(w1(r).map(function(i) {
            return n + i;
          })) : t.push(n);
        }), t;
      }
      var Pn = Kw, Zw = function(e) {
        Xn(r, e);
        var t = Kn(r);
        function r(a) {
          var n;
          return Dt(this, r), n = t.call(this), n._props = Qw(a), n._attrs = eD(a), n;
        }
        return _t(r, [{
          key: "props",
          get: function() {
            return this._props;
          }
        }, {
          key: "attr",
          value: function(n) {
            var i;
            return (i = this._attrs[n]) !== null && i !== void 0 ? i : null;
          }
        }, {
          key: "hasAttr",
          value: function(n) {
            return this._attrs[n] !== void 0;
          }
        }, {
          key: "attrNames",
          get: function() {
            return Object.keys(this._attrs);
          }
        }]), r;
      }(Ve), Ko = {
        "#cdata-section": 2,
        "#text": 3,
        "#comment": 8,
        "#document": 9,
        "#document-fragment": 11
      }, D1 = {}, Jw = Object.keys(Ko);
      Jw.forEach(function(e) {
        D1[Ko[e]] = e;
      });
      function Qw(e) {
        var t, r, a, n = (t = e.nodeName) !== null && t !== void 0 ? t : D1[e.nodeType], i = (r = (a = e.nodeType) !== null && a !== void 0 ? a : Ko[e.nodeName]) !== null && r !== void 0 ? r : 1;
        me(typeof i == "number", "nodeType has to be a number, got '".concat(i, "'")), me(typeof n == "string", "nodeName has to be a string, got '".concat(n, "'")), n = n.toLowerCase();
        var o = null;
        n === "input" && (o = (e.type || e.attributes && e.attributes.type || "").toLowerCase(), In().includes(o) || (o = "text"));
        var u = fe({}, e, {
          nodeType: i,
          nodeName: n
        });
        return o && (u.type = o), delete u.attributes, Object.freeze(u);
      }
      function eD(e) {
        var t = e.attributes, r = t === void 0 ? {} : t, a = {
          htmlFor: "for",
          className: "class"
        };
        return Object.keys(r).reduce(function(n, i) {
          var o = r[i];
          if (me(k(o) !== "object" || o === null, "expects attributes not to be an object, '".concat(i, "' was")), o !== void 0) {
            var u = a[i] || i;
            n[u] = o !== null ? String(o) : null;
          }
          return n;
        }, {});
      }
      var _1 = Zw;
      function tD(e, t) {
        if (e = e || function() {
        }, t = t || y.log, !y._audit)
          throw new Error("No audit configured");
        var r = y.utils.queue(), a = [];
        Object.keys(y.plugins).forEach(function(i) {
          r.defer(function(o) {
            var u = function(s) {
              a.push(s), o();
            };
            try {
              y.plugins[i].cleanup(o, u);
            } catch (l) {
              u(l);
            }
          });
        });
        var n = y.utils.getFlattenedTree(M.body);
        y.utils.querySelectorAll(n, "iframe, frame").forEach(function(i) {
          r.defer(function(o, u) {
            return y.utils.sendCommandToFrame(i.actualNode, {
              command: "cleanup-plugin"
            }, o, u);
          });
        }), r.then(function(i) {
          a.length === 0 ? e(i) : t(a);
        }).catch(t);
      }
      var x1 = tD, ba = {}, E1;
      function C1(e) {
        return ba.hasOwnProperty(e);
      }
      function Zo(e) {
        return typeof e == "string" && ba[e] ? ba[e] : typeof e == "function" ? e : E1;
      }
      function rD(e, t, r) {
        ba[e] = t, r && (E1 = t);
      }
      function aD(e) {
        var t;
        if (t = y._audit, !t)
          throw new Error("No audit configured");
        if (e.axeVersion || e.ver) {
          var r = e.axeVersion || e.ver;
          if (!/^\d+\.\d+\.\d+(-canary)?/.test(r))
            throw new Error("Invalid configured version ".concat(r));
          var a = r.split("-"), n = V(a, 2), i = n[0], o = n[1], u = i.split(".").map(Number), l = V(u, 3), s = l[0], c = l[1], d = l[2], f = y.version.split("-"), p = V(f, 2), m = p[0], h = p[1], b = m.split(".").map(Number), v = V(b, 3), g = v[0], w = v[1], D = v[2];
          if (s !== g || w < c || w === c && D < d || s === g && c === w && d === D && o && o !== h)
            throw new Error("Configured version ".concat(r, " is not compatible with current axe version ").concat(y.version));
        }
        if (e.reporter && (typeof e.reporter == "function" || C1(e.reporter)) && (t.reporter = e.reporter), e.checks) {
          if (!Array.isArray(e.checks))
            throw new TypeError("Checks property must be an array");
          e.checks.forEach(function(R) {
            if (!R.id)
              throw new TypeError("Configured check ".concat(JSON.stringify(R), " is invalid. Checks must be an object with at least an id property"));
            t.addCheck(R);
          });
        }
        var F = [];
        if (e.rules) {
          if (!Array.isArray(e.rules))
            throw new TypeError("Rules property must be an array");
          e.rules.forEach(function(R) {
            if (!R.id)
              throw new TypeError("Configured rule ".concat(JSON.stringify(R), " is invalid. Rules must be an object with at least an id property"));
            F.push(R.id), t.addRule(R);
          });
        }
        if (e.disableOtherRules && t.rules.forEach(function(R) {
          F.includes(R.id) === !1 && (R.enabled = !1);
        }), typeof e.branding < "u" ? t.setBranding(e.branding) : t._constructHelpUrls(), e.tagExclude && (t.tagExclude = e.tagExclude), e.locale && t.applyLocale(e.locale), e.standards && Vg(e.standards), e.noHtml && (t.noHtml = !0), e.allowedOrigins) {
          if (!Array.isArray(e.allowedOrigins))
            throw new TypeError("Allowed origins property must be an array");
          if (e.allowedOrigins.includes("*"))
            throw new Error('"*" is not allowed. Use "'.concat(se.allOrigins, '" instead'));
          t.setAllowedOrigins(e.allowedOrigins);
        }
      }
      var nD = aD;
      function iD(e) {
        bt.updateMessenger(e);
      }
      function oD(e) {
        e = e || [];
        var t = e.length ? y._audit.rules.filter(function(a) {
          return !!e.filter(function(n) {
            return a.tags.indexOf(n) !== -1;
          }).length;
        }) : y._audit.rules, r = y._audit.data.rules || {};
        return t.map(function(a) {
          var n = r[a.id] || {};
          return {
            ruleId: a.id,
            description: n.description,
            help: n.help,
            helpUrl: n.helpUrl,
            tags: a.tags,
            actIds: a.actIds
          };
        });
      }
      var uD = oD, A1 = {};
      ht(A1, {
        allowedAttr: function() {
          return F1;
        },
        arialabelText: function() {
          return ra;
        },
        arialabelledbyText: function() {
          return ta;
        },
        getAccessibleRefs: function() {
          return Jo;
        },
        getElementUnallowedRoles: function() {
          return k1;
        },
        getExplicitRole: function() {
          return xe;
        },
        getImplicitRole: function() {
          return Ct;
        },
        getOwnedVirtual: function() {
          return na;
        },
        getRole: function() {
          return ce;
        },
        getRoleType: function() {
          return Ft;
        },
        getRolesByType: function() {
          return yD;
        },
        getRolesWithNameFromContents: function() {
          return _D;
        },
        implicitNodes: function() {
          return ED;
        },
        implicitRole: function() {
          return Ct;
        },
        isAccessibleRef: function() {
          return Ln;
        },
        isAriaRoleAllowedOnElement: function() {
          return R1;
        },
        isComboboxPopup: function() {
          return eu;
        },
        isUnsupportedRole: function() {
          return Hi;
        },
        isValidRole: function() {
          return Tr;
        },
        label: function() {
          return N1;
        },
        labelVirtual: function() {
          return un;
        },
        lookupTable: function() {
          return O1;
        },
        namedFromContents: function() {
          return Ws;
        },
        requiredAttr: function() {
          return I1;
        },
        requiredContext: function() {
          return tu;
        },
        requiredOwned: function() {
          return ru;
        },
        validateAttr: function() {
          return Bn;
        },
        validateAttrValue: function() {
          return P1;
        }
      });
      function lD(e) {
        var t = he.ariaRoles[e], r = re(dr());
        return t && (t.allowedAttrs && r.push.apply(r, re(t.allowedAttrs)), t.requiredAttrs && r.push.apply(r, re(t.requiredAttrs))), r;
      }
      var F1 = lD, sD = /^idrefs?$/;
      function T1(e, t, r) {
        if (e.hasAttribute) {
          if (e.nodeName.toUpperCase() === "LABEL" && e.hasAttribute("for")) {
            var a = e.getAttribute("for");
            t.has(a) ? t.get(a).push(e) : t.set(a, [e]);
          }
          for (var n = 0; n < r.length; ++n) {
            var i = r[n], o = ae(e.getAttribute(i) || "");
            if (o) {
              var u = Ae(Ye(o)), l;
              try {
                for (u.s(); !(l = u.n()).done; ) {
                  var s = l.value;
                  t.has(s) ? t.get(s).push(e) : t.set(s, [e]);
                }
              } catch (d) {
                u.e(d);
              } finally {
                u.f();
              }
            }
          }
        }
        for (var c = 0; c < e.childNodes.length; c++)
          e.childNodes[c].nodeType === 1 && T1(e.childNodes[c], t, r);
      }
      function cD(e) {
        var t;
        e = e.actualNode || e;
        var r = We(e);
        r = r.documentElement || r;
        var a = ue.get("idRefsByRoot", function() {
          return /* @__PURE__ */ new Map();
        }), n = a.get(r);
        if (!n) {
          n = /* @__PURE__ */ new Map(), a.set(r, n);
          var i = Object.keys(he.ariaAttrs).filter(function(o) {
            var u = he.ariaAttrs[o].type;
            return sD.test(u);
          });
          T1(r, n, i);
        }
        return (t = n.get(e.id)) !== null && t !== void 0 ? t : [];
      }
      var Jo = cD;
      function dD(e, t) {
        var r = e instanceof Ve ? e : le(e), a = Ct(r), n = pr(r);
        return Array.isArray(n.allowedRoles) ? n.allowedRoles.includes(t) : t === a ? !1 : !!n.allowedRoles;
      }
      var R1 = dD, fD = ["doc-backlink", "doc-biblioentry", "doc-biblioref", "doc-cover", "doc-endnote", "doc-glossref", "doc-noteref"], pD = {
        header: "banner",
        footer: "contentinfo"
      };
      function mD(e) {
        var t = [];
        if (!e)
          return t;
        if (e.hasAttr("role")) {
          var r = Ye(e.attr("role").toLowerCase());
          t = t.concat(r);
        }
        return t.filter(function(a) {
          return Tr(a);
        });
      }
      function hD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = De(e), a = r.vNode;
        if (!Vo(a))
          return [];
        var n = a.props.nodeName, i = Ct(a) || pD[n], o = mD(a);
        return o.filter(function(u) {
          return !vD(u, a, t, i);
        });
      }
      function vD(e, t, r, a) {
        return r && e === a ? !0 : fD.includes(e) && Ft(e) !== a ? !1 : R1(t, e);
      }
      var k1 = hD;
      function gD(e) {
        return Object.keys(he.ariaRoles).filter(function(t) {
          return he.ariaRoles[t].type === e;
        });
      }
      var Mr = gD;
      function bD(e) {
        return Mr(e);
      }
      var yD = bD;
      function wD() {
        return ue.get("ariaRolesNameFromContent", function() {
          return Object.keys(he.ariaRoles).filter(function(e) {
            return he.ariaRoles[e].nameFromContent;
          });
        });
      }
      var Qo = wD;
      function DD() {
        return Qo();
      }
      var _D = DD, S1 = function(t) {
        return t === null;
      }, Xe = function(t) {
        return t !== null;
      }, Lt = {};
      Lt.attributes = {
        "aria-activedescendant": {
          type: "idref",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-atomic": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-autocomplete": {
          type: "nmtoken",
          values: ["inline", "list", "both", "none"],
          unsupported: !1
        },
        "aria-busy": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-checked": {
          type: "nmtoken",
          values: ["true", "false", "mixed", "undefined"],
          unsupported: !1
        },
        "aria-colcount": {
          type: "int",
          unsupported: !1
        },
        "aria-colindex": {
          type: "int",
          unsupported: !1
        },
        "aria-colspan": {
          type: "int",
          unsupported: !1
        },
        "aria-controls": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-current": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["page", "step", "location", "date", "time", "true", "false"],
          unsupported: !1
        },
        "aria-describedby": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-describedat": {
          unsupported: !0,
          unstandardized: !0
        },
        "aria-details": {
          type: "idref",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-disabled": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-dropeffect": {
          type: "nmtokens",
          values: ["copy", "move", "reference", "execute", "popup", "none"],
          unsupported: !1
        },
        "aria-errormessage": {
          type: "idref",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-expanded": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1
        },
        "aria-flowto": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-grabbed": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1
        },
        "aria-haspopup": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["true", "false", "menu", "listbox", "tree", "grid", "dialog"],
          unsupported: !1
        },
        "aria-hidden": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-invalid": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["true", "false", "spelling", "grammar"],
          unsupported: !1
        },
        "aria-keyshortcuts": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-label": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-labelledby": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-level": {
          type: "int",
          unsupported: !1
        },
        "aria-live": {
          type: "nmtoken",
          values: ["off", "polite", "assertive"],
          unsupported: !1
        },
        "aria-modal": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-multiline": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-multiselectable": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-orientation": {
          type: "nmtoken",
          values: ["horizontal", "vertical"],
          unsupported: !1
        },
        "aria-owns": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-placeholder": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-posinset": {
          type: "int",
          unsupported: !1
        },
        "aria-pressed": {
          type: "nmtoken",
          values: ["true", "false", "mixed", "undefined"],
          unsupported: !1
        },
        "aria-readonly": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-relevant": {
          type: "nmtokens",
          values: ["additions", "removals", "text", "all"],
          unsupported: !1
        },
        "aria-required": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-roledescription": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-rowcount": {
          type: "int",
          unsupported: !1
        },
        "aria-rowindex": {
          type: "int",
          unsupported: !1
        },
        "aria-rowspan": {
          type: "int",
          unsupported: !1
        },
        "aria-selected": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1
        },
        "aria-setsize": {
          type: "int",
          unsupported: !1
        },
        "aria-sort": {
          type: "nmtoken",
          values: ["ascending", "descending", "other", "none"],
          unsupported: !1
        },
        "aria-valuemax": {
          type: "decimal",
          unsupported: !1
        },
        "aria-valuemin": {
          type: "decimal",
          unsupported: !1
        },
        "aria-valuenow": {
          type: "decimal",
          unsupported: !1
        },
        "aria-valuetext": {
          type: "string",
          unsupported: !1
        }
      }, Lt.globalAttributes = ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"], Lt.role = {
        alert: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        alertdialog: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-modal", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["dialog", "section"]
        },
        application: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage", "aria-activedescendant"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["article", "audio", "embed", "iframe", "object", "section", "svg", "video"]
        },
        article: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["article"],
          unsupported: !1
        },
        banner: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["header"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        button: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-pressed", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["button", 'input[type="button"]', 'input[type="image"]', 'input[type="reset"]', 'input[type="submit"]', "summary"],
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        cell: {
          type: "structure",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["td", "th"],
          unsupported: !1
        },
        checkbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-required", "aria-readonly", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ['input[type="checkbox"]'],
          unsupported: !1,
          allowedElements: ["button"]
        },
        columnheader: {
          type: "structure",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-required", "aria-readonly", "aria-selected", "aria-sort", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["th"],
          unsupported: !1
        },
        combobox: {
          type: "composite",
          attributes: {
            allowed: ["aria-autocomplete", "aria-required", "aria-activedescendant", "aria-orientation", "aria-errormessage"],
            required: ["aria-expanded"]
          },
          owned: {
            all: ["listbox", "tree", "grid", "dialog", "textbox"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "input",
            properties: {
              type: ["text", "search", "tel", "url", "email"]
            }
          }]
        },
        command: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        complementary: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["aside"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        composite: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        contentinfo: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["footer"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        definition: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["dd", "dfn"],
          unsupported: !1
        },
        dialog: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-modal", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["dialog"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        directory: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        document: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["body"],
          unsupported: !1,
          allowedElements: ["article", "embed", "iframe", "object", "section", "svg"]
        },
        "doc-abstract": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-acknowledgments": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-afterword": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-appendix": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-backlink": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        "doc-biblioentry": {
          type: "listitem",
          attributes: {
            allowed: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: ["doc-bibliography"],
          unsupported: !1,
          allowedElements: ["li"]
        },
        "doc-bibliography": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            one: ["doc-biblioentry"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-biblioref": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        "doc-chapter": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-colophon": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-conclusion": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-cover": {
          type: "img",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1
        },
        "doc-credit": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-credits": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-dedication": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-endnote": {
          type: "listitem",
          attributes: {
            allowed: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: ["doc-endnotes"],
          unsupported: !1,
          allowedElements: ["li"]
        },
        "doc-endnotes": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            one: ["doc-endnote"]
          },
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-epigraph": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1
        },
        "doc-epilogue": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-errata": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-example": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside", "section"]
        },
        "doc-footnote": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside", "footer", "header"]
        },
        "doc-foreword": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-glossary": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: ["term", "definition"],
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["dl"]
        },
        "doc-glossref": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        "doc-index": {
          type: "navigation",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["nav", "section"]
        },
        "doc-introduction": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-noteref": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        "doc-notice": {
          type: "note",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-pagebreak": {
          type: "separator",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["hr"]
        },
        "doc-pagelist": {
          type: "navigation",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["nav", "section"]
        },
        "doc-part": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-preface": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-prologue": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-pullquote": {
          type: "none",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside", "section"]
        },
        "doc-qna": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-subtitle": {
          type: "sectionhead",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: {
            nodeName: ["h1", "h2", "h3", "h4", "h5", "h6"]
          }
        },
        "doc-tip": {
          type: "note",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside"]
        },
        "doc-toc": {
          type: "navigation",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["nav", "section"]
        },
        feed: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            one: ["article"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["article", "aside", "section"]
        },
        figure: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["figure"],
          unsupported: !1
        },
        form: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["form"],
          unsupported: !1
        },
        grid: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-colcount", "aria-level", "aria-multiselectable", "aria-readonly", "aria-rowcount", "aria-errormessage"]
          },
          owned: {
            one: ["rowgroup", "row"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ["table"],
          unsupported: !1
        },
        gridcell: {
          type: "widget",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-readonly", "aria-required", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["td", "th"],
          unsupported: !1
        },
        group: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["details", "optgroup"],
          unsupported: !1,
          allowedElements: ["dl", "figcaption", "fieldset", "figure", "footer", "header", "ol", "ul"]
        },
        heading: {
          type: "structure",
          attributes: {
            required: ["aria-level"],
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["h1", "h2", "h3", "h4", "h5", "h6"],
          unsupported: !1
        },
        img: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["img"],
          unsupported: !1,
          allowedElements: ["embed", "iframe", "object", "svg"]
        },
        input: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        landmark: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        link: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["a[href]", "area[href]"],
          unsupported: !1,
          allowedElements: ["button", {
            nodeName: "input",
            properties: {
              type: ["image", "button"]
            }
          }]
        },
        list: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            all: ["listitem"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ["ol", "ul", "dl"],
          unsupported: !1
        },
        listbox: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-multiselectable", "aria-readonly", "aria-required", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            all: ["option"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ["select"],
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        listitem: {
          type: "structure",
          attributes: {
            allowed: ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["list"],
          implicit: ["li", "dt"],
          unsupported: !1
        },
        log: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        main: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["main"],
          unsupported: !1,
          allowedElements: ["article", "section"]
        },
        marquee: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        math: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["math"],
          unsupported: !1
        },
        menu: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            one: ["menuitem", "menuitemradio", "menuitemcheckbox"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ['menu[type="context"]'],
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        menubar: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            one: ["menuitem", "menuitemradio", "menuitemcheckbox"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        menuitem: {
          type: "widget",
          attributes: {
            allowed: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["menu", "menubar"],
          implicit: ['menuitem[type="command"]'],
          unsupported: !1,
          allowedElements: ["button", "li", {
            nodeName: "iput",
            properties: {
              type: ["image", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        menuitemcheckbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["menu", "menubar"],
          implicit: ['menuitem[type="checkbox"]'],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["checkbox", "image", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        menuitemradio: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-selected", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["menu", "menubar"],
          implicit: ['menuitem[type="radio"]'],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["image", "button", "radio"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        navigation: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["nav"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        none: {
          type: "structure",
          attributes: null,
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: ["article", "aside", "dl", "embed", "figcaption", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "iframe", "li", "ol", "section", "ul"]
          }, {
            nodeName: "img",
            attributes: {
              alt: Xe
            }
          }]
        },
        note: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside"]
        },
        option: {
          type: "widget",
          attributes: {
            allowed: ["aria-selected", "aria-posinset", "aria-setsize", "aria-checked", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["listbox"],
          implicit: ["option"],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["checkbox", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        presentation: {
          type: "structure",
          attributes: null,
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: ["article", "aside", "dl", "embed", "figcaption", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "iframe", "li", "ol", "section", "ul"]
          }, {
            nodeName: "img",
            attributes: {
              alt: Xe
            }
          }]
        },
        progressbar: {
          type: "widget",
          attributes: {
            allowed: ["aria-valuetext", "aria-valuenow", "aria-valuemax", "aria-valuemin", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["progress"],
          unsupported: !1
        },
        radio: {
          type: "widget",
          attributes: {
            allowed: ["aria-selected", "aria-posinset", "aria-setsize", "aria-required", "aria-errormessage", "aria-checked"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ['input[type="radio"]'],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["image", "button"]
            }
          }]
        },
        radiogroup: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-required", "aria-expanded", "aria-readonly", "aria-errormessage", "aria-orientation"]
          },
          owned: {
            all: ["radio"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: {
            nodeName: ["ol", "ul", "fieldset"]
          }
        },
        range: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        region: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["section[aria-label]", "section[aria-labelledby]", "section[title]"],
          unsupported: !1,
          allowedElements: {
            nodeName: ["article", "aside"]
          }
        },
        roletype: {
          type: "abstract",
          unsupported: !1
        },
        row: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-colindex", "aria-expanded", "aria-level", "aria-selected", "aria-rowindex", "aria-errormessage"]
          },
          owned: {
            one: ["cell", "columnheader", "rowheader", "gridcell"]
          },
          nameFrom: ["author", "contents"],
          context: ["rowgroup", "grid", "treegrid", "table"],
          implicit: ["tr"],
          unsupported: !1
        },
        rowgroup: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-errormessage"]
          },
          owned: {
            all: ["row"]
          },
          nameFrom: ["author", "contents"],
          context: ["grid", "table", "treegrid"],
          implicit: ["tbody", "thead", "tfoot"],
          unsupported: !1
        },
        rowheader: {
          type: "structure",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-required", "aria-readonly", "aria-selected", "aria-sort", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["th"],
          unsupported: !1
        },
        scrollbar: {
          type: "widget",
          attributes: {
            required: ["aria-controls", "aria-valuenow"],
            allowed: ["aria-valuetext", "aria-orientation", "aria-errormessage", "aria-valuemax", "aria-valuemin"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1
        },
        search: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: {
            nodeName: ["aside", "form", "section"]
          }
        },
        searchbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required", "aria-placeholder", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="search"]'],
          unsupported: !1,
          allowedElements: {
            nodeName: "input",
            properties: {
              type: "text"
            }
          }
        },
        section: {
          nameFrom: ["author", "contents"],
          type: "abstract",
          unsupported: !1
        },
        sectionhead: {
          nameFrom: ["author", "contents"],
          type: "abstract",
          unsupported: !1
        },
        select: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        separator: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-orientation", "aria-valuenow", "aria-valuemax", "aria-valuemin", "aria-valuetext", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["hr"],
          unsupported: !1,
          allowedElements: ["li"]
        },
        slider: {
          type: "widget",
          attributes: {
            allowed: ["aria-valuetext", "aria-orientation", "aria-readonly", "aria-errormessage", "aria-valuemax", "aria-valuemin"],
            required: ["aria-valuenow"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="range"]'],
          unsupported: !1
        },
        spinbutton: {
          type: "widget",
          attributes: {
            allowed: ["aria-valuetext", "aria-required", "aria-readonly", "aria-errormessage", "aria-valuemax", "aria-valuemin"],
            required: ["aria-valuenow"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="number"]'],
          unsupported: !1,
          allowedElements: {
            nodeName: "input",
            properties: {
              type: ["text", "tel"]
            }
          }
        },
        status: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["output"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        structure: {
          type: "abstract",
          unsupported: !1
        },
        switch: {
          type: "widget",
          attributes: {
            allowed: ["aria-errormessage"],
            required: ["aria-checked"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: ["button", {
            nodeName: "input",
            properties: {
              type: ["checkbox", "image", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        tab: {
          type: "widget",
          attributes: {
            allowed: ["aria-selected", "aria-expanded", "aria-setsize", "aria-posinset", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["tablist"],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "h1", "h2", "h3", "h4", "h5", "h6", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: "button"
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        table: {
          type: "structure",
          attributes: {
            allowed: ["aria-colcount", "aria-rowcount", "aria-errormessage"]
          },
          owned: {
            one: ["rowgroup", "row"]
          },
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["table"],
          unsupported: !1
        },
        tablist: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-level", "aria-multiselectable", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            all: ["tab"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        tabpanel: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        term: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["dt"],
          unsupported: !1
        },
        textbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required", "aria-placeholder", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="tel"]', 'input[type="url"]', "input:not([type])", "textarea"],
          unsupported: !1
        },
        timer: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1
        },
        toolbar: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['menu[type="toolbar"]'],
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        tooltip: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1
        },
        tree: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-multiselectable", "aria-required", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            all: ["treeitem"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        treegrid: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-readonly", "aria-required", "aria-rowcount", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            one: ["rowgroup", "row"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1
        },
        treeitem: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-selected", "aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["group", "tree"],
          unsupported: !1,
          allowedElements: ["li", {
            nodeName: "a",
            attributes: {
              href: Xe
            }
          }]
        },
        widget: {
          type: "abstract",
          unsupported: !1
        },
        window: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        }
      }, Lt.implicitHtmlRole = Gi, Lt.elementsAllowedNoRole = [{
        nodeName: ["base", "body", "caption", "col", "colgroup", "datalist", "dd", "details", "dt", "head", "html", "keygen", "label", "legend", "main", "map", "math", "meta", "meter", "noscript", "optgroup", "param", "picture", "progress", "script", "source", "style", "template", "textarea", "title", "track"]
      }, {
        nodeName: "area",
        attributes: {
          href: Xe
        }
      }, {
        nodeName: "input",
        properties: {
          type: ["color", "data", "datatime", "file", "hidden", "month", "number", "password", "range", "reset", "submit", "time", "week"]
        }
      }, {
        nodeName: "link",
        attributes: {
          href: Xe
        }
      }, {
        nodeName: "menu",
        attributes: {
          type: "context"
        }
      }, {
        nodeName: "menuitem",
        attributes: {
          type: ["command", "checkbox", "radio"]
        }
      }, {
        nodeName: "select",
        condition: function(t) {
          return t instanceof y.AbstractVirtualNode || (t = y.utils.getNodeFromTree(t)), Number(t.attr("size")) > 1;
        },
        properties: {
          multiple: !0
        }
      }, {
        nodeName: ["clippath", "cursor", "defs", "desc", "feblend", "fecolormatrix", "fecomponenttransfer", "fecomposite", "feconvolvematrix", "fediffuselighting", "fedisplacementmap", "fedistantlight", "fedropshadow", "feflood", "fefunca", "fefuncb", "fefuncg", "fefuncr", "fegaussianblur", "feimage", "femerge", "femergenode", "femorphology", "feoffset", "fepointlight", "fespecularlighting", "fespotlight", "fetile", "feturbulence", "filter", "hatch", "hatchpath", "lineargradient", "marker", "mask", "meshgradient", "meshpatch", "meshrow", "metadata", "mpath", "pattern", "radialgradient", "solidcolor", "stop", "switch", "view"]
      }], Lt.elementsAllowedAnyRole = [{
        nodeName: "a",
        attributes: {
          href: S1
        }
      }, {
        nodeName: "img",
        attributes: {
          alt: S1
        }
      }, {
        nodeName: ["abbr", "address", "canvas", "div", "p", "pre", "blockquote", "ins", "del", "output", "span", "table", "tbody", "thead", "tfoot", "td", "em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "ruby", "rt", "rp", "bdi", "bdo", "br", "wbr", "th", "tr"]
      }], Lt.evaluateRoleForElement = {
        A: function(t) {
          var r = t.node, a = t.out;
          return r.namespaceURI === "http://www.w3.org/2000/svg" ? !0 : r.href.length ? a : !0;
        },
        AREA: function(t) {
          var r = t.node;
          return !r.href;
        },
        BUTTON: function(t) {
          var r = t.node, a = t.role, n = t.out;
          return r.getAttribute("type") === "menu" ? a === "menuitem" : n;
        },
        IMG: function(t) {
          var r = t.node, a = t.role, n = t.out;
          switch (r.alt) {
            case null:
              return n;
            case "":
              return a === "presentation" || a === "none";
            default:
              return a !== "presentation" && a !== "none";
          }
        },
        INPUT: function(t) {
          var r = t.node, a = t.role, n = t.out;
          switch (r.type) {
            case "button":
            case "image":
              return n;
            case "checkbox":
              return a === "button" && r.hasAttribute("aria-pressed") ? !0 : n;
            case "radio":
              return a === "menuitemradio";
            case "text":
              return a === "combobox" || a === "searchbox" || a === "spinbutton";
            case "tel":
              return a === "combobox" || a === "spinbutton";
            case "url":
            case "search":
            case "email":
              return a === "combobox";
            default:
              return !1;
          }
        },
        LI: function(t) {
          var r = t.node, a = t.out, n = y.utils.matchesSelector(r, "ol li, ul li");
          return n ? a : !0;
        },
        MENU: function(t) {
          var r = t.node;
          return r.getAttribute("type") !== "context";
        },
        OPTION: function(t) {
          var r = t.node, a = y.utils.matchesSelector(r, "select > option, datalist > option, optgroup > option");
          return !a;
        },
        SELECT: function(t) {
          var r = t.node, a = t.role;
          return !r.multiple && r.size <= 1 && a === "menu";
        },
        SVG: function(t) {
          var r = t.node, a = t.out;
          return r.parentNode && r.parentNode.namespaceURI === "http://www.w3.org/2000/svg" ? !0 : a;
        }
      }, Lt.rolesOfType = {
        widget: ["button", "checkbox", "dialog", "gridcell", "link", "log", "marquee", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "status", "switch", "tab", "tabpanel", "textbox", "timer", "tooltip", "tree", "treeitem"]
      };
      var O1 = Lt;
      function xD(e) {
        var t = null, r = O1.role[e];
        return r && r.implicit && (t = Mt(r.implicit)), t;
      }
      var ED = xD;
      function CD(e) {
        return !!Jo(e).length;
      }
      var Ln = CD;
      function eu(e) {
        var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.popupRoles, n = ce(e);
        if ((t = a) !== null && t !== void 0 || (a = Ts["aria-haspopup"].values), !a.includes(n))
          return !1;
        var i = AD(e);
        if (M1(i))
          return !0;
        var o = e.props.id;
        if (!o)
          return !1;
        if (!e.actualNode)
          throw new Error("Unable to determine combobox popup without an actualNode");
        var u = Jr(e.actualNode), l = u.querySelectorAll('[aria-owns~="'.concat(o, `"][role~="combobox"]:not(select),
     [aria-controls~="`).concat(o, '"][role~="combobox"]:not(select)'));
        return Array.from(l).some(M1);
      }
      var M1 = function(t) {
        return t && ce(t) === "combobox";
      };
      function AD(e) {
        for (; e = e.parent; )
          if (ce(e, {
            noPresentational: !0
          }) !== null)
            return e;
        return null;
      }
      function FD(e) {
        return e = le(e), un(e);
      }
      var N1 = FD;
      function TD(e) {
        var t = he.ariaRoles[e];
        return !t || !Array.isArray(t.requiredAttrs) ? [] : re(t.requiredAttrs);
      }
      var I1 = TD;
      function RD(e) {
        var t = he.ariaRoles[e];
        return !t || !Array.isArray(t.requiredContext) ? null : re(t.requiredContext);
      }
      var tu = RD;
      function kD(e) {
        var t = he.ariaRoles[e];
        return !t || !Array.isArray(t.requiredOwned) ? null : re(t.requiredOwned);
      }
      var ru = kD;
      function SD(e, t) {
        e = e instanceof Ve ? e : le(e);
        var r, a, n = e.attr(t), i = he.ariaAttrs[t];
        if (!i || i.allowEmpty && (!n || n.trim() === ""))
          return !0;
        switch (i.type) {
          case "boolean":
            return ["true", "false"].includes(n.toLowerCase());
          case "nmtoken":
            return typeof n == "string" && i.values.includes(n.toLowerCase());
          case "nmtokens":
            return a = Ye(n), a.reduce(function(l, s) {
              return l && i.values.includes(s);
            }, a.length !== 0);
          case "idref":
            try {
              var o = We(e.actualNode);
              return !!(n && o.getElementById(n));
            } catch {
              throw new TypeError("Cannot resolve id references for partial DOM");
            }
          case "idrefs":
            return Et(e, t).some(function(l) {
              return !!l;
            });
          case "string":
            return n.trim() !== "";
          case "decimal":
            return r = n.match(/^[-+]?([0-9]*)\.?([0-9]*)$/), !!(r && (r[1] || r[2]));
          case "int":
            var u = typeof i.minValue < "u" ? i.minValue : -1 / 0;
            return /^[-+]?[0-9]+$/.test(n) && parseInt(n) >= u;
        }
      }
      var P1 = SD;
      function OD(e) {
        var t = he.ariaAttrs[e];
        return !!t;
      }
      var Bn = OD;
      function MD(e, t, r) {
        var a = Ye(r.attr("role")).filter(function(n) {
          return Ft(n) === "abstract";
        });
        return a.length > 0 ? (this.data(a), !0) : !1;
      }
      var ND = MD;
      function ID(e, t, r) {
        var a = [], n = ce(r), i = F1(n);
        Array.isArray(t[n]) && (i = ga(t[n].concat(i)));
        var o = Ae(r.attrNames), u;
        try {
          for (o.s(); !(u = o.n()).done; ) {
            var l = u.value;
            Bn(l) && !i.includes(l) && a.push(l);
          }
        } catch (s) {
          o.e(s);
        } finally {
          o.f();
        }
        if (!a.length)
          return !0;
        if (this.data(a.map(function(s) {
          return s + '="' + r.attr(s) + '"';
        })), !(!n && !Vo(r) && !ke(r)))
          return !1;
      }
      function PD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = t.allowImplicit, n = a === void 0 ? !0 : a, i = t.ignoredTags, o = i === void 0 ? [] : i, u = r.props.nodeName;
        if (o.map(function(s) {
          return s.toLowerCase();
        }).includes(u))
          return !0;
        var l = k1(r, n);
        return l.length ? (this.data(l), Fe(r) ? !1 : void 0) : !0;
      }
      var LD = PD;
      function BD(e, t, r) {
        return r.attr("aria-busy") === "true";
      }
      function L1(e, t, r) {
        var a = r.props, n = a.nodeName, i = a.type, o = jD(r.attr("aria-checked"));
        if (n !== "input" || i !== "checkbox" || !o)
          return !0;
        var u = qD(r);
        return o === u ? !0 : (this.data({
          messageKey: "checkbox",
          checkState: u
        }), !1);
      }
      function qD(e) {
        return e.props.indeterminate ? "mixed" : e.props.checked ? "true" : "false";
      }
      function jD(e) {
        return e ? (e = e.toLowerCase(), ["mixed", "true"].includes(e) ? e : "false") : "";
      }
      function B1(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.invalidTableRowAttrs, i = arguments.length > 2 ? arguments[2] : void 0, o = (t = n == null || (r = n.filter) === null || r === void 0 ? void 0 : r.call(n, function(c) {
          return i.hasAttr(c);
        })) !== null && t !== void 0 ? t : [];
        if (o.length === 0)
          return !0;
        var u = zD(i), l = u && ce(u);
        if (!l || l === "treegrid")
          return !0;
        var s = "row".concat(o.length > 1 ? "Plural" : "Singular");
        return this.data({
          messageKey: s,
          invalidAttrs: o,
          ownerRole: l
        }), !1;
      }
      function zD(e) {
        if (e.parent) {
          var t = 'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]';
          return at(e, t);
        }
      }
      var q1 = {
        row: B1,
        checkbox: L1
      };
      function VD(e, t, r) {
        var a = ce(r);
        return q1[a] ? q1[a].call(this, e, t, r) : !0;
      }
      function HD(e, t, r) {
        t = Array.isArray(t) ? t : [];
        var a = r.attr("aria-errormessage"), n = r.hasAttr("aria-errormessage"), i = r.attr("aria-invalid"), o = r.hasAttr("aria-invalid");
        if (!o || i === "false")
          return !0;
        function u(l) {
          if (l.trim() === "")
            return he.ariaAttrs["aria-errormessage"].allowEmpty;
          var s;
          try {
            s = l && Et(r, "aria-errormessage")[0];
          } catch {
            this.data({
              messageKey: "idrefs",
              values: Ye(l)
            });
            return;
          }
          if (s)
            return Fe(s) ? s.getAttribute("role") === "alert" || s.getAttribute("aria-live") === "assertive" || s.getAttribute("aria-live") === "polite" || Ye(r.attr("aria-describedby")).indexOf(l) > -1 : (this.data({
              messageKey: "hidden",
              values: Ye(l)
            }), !1);
        }
        return t.indexOf(a) === -1 && n ? (this.data(Ye(a)), u.call(this, a)) : !0;
      }
      function $D(e, t, r) {
        return r.attr("aria-hidden") !== "true";
      }
      var UD = $D;
      function GD(e, t, r) {
        var a = r.attr("aria-level"), n = parseInt(a, 10);
        if (!(n > 6))
          return !0;
      }
      var WD = GD;
      function YD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = (t == null ? void 0 : t.elementsAllowedAriaLabel) || [], n = r.props.nodeName, i = ce(r, {
          chromium: !0
        }), o = XD(i, n, a), u = o.filter(function(c) {
          return r.attrNames.includes(c) ? ae(r.attr(c)) !== "" : !1;
        });
        if (u.length === 0)
          return !1;
        var l = r.hasAttr("role") ? "hasRole" : "noRole";
        l += u.length > 1 ? "Plural" : "Singular", this.data({
          role: i,
          nodeName: n,
          messageKey: l,
          prohibited: u
        });
        var s = Vt(r, {
          subtreeDescendant: !0
        });
        if (ae(s) === "")
          return !0;
      }
      function XD(e, t, r) {
        var a = he.ariaRoles[e];
        return a ? a.prohibitedAttrs || [] : e || r.includes(t) ? [] : ["aria-label", "aria-labelledby"];
      }
      var j1 = {};
      ht(j1, {
        getAriaRolesByType: function() {
          return Mr;
        },
        getAriaRolesSupportingNameFromContent: function() {
          return Qo;
        },
        getElementSpec: function() {
          return pr;
        },
        getElementsByContentType: function() {
          return $i;
        },
        getGlobalAriaAttrs: function() {
          return dr;
        },
        implicitHtmlRoles: function() {
          return Gi;
        }
      });
      function KD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = xe(r), n = r.attrNames, i = I1(a);
        if (Array.isArray(t[a]) && (i = ga(t[a], i)), !a || !n.length || !i.length || ZD(r, a) || QD(r, a))
          return !0;
        var o = pr(r), u = i.filter(function(l) {
          return !r.attr(l) && !JD(o, l);
        });
        return u.length ? (this.data(u), !1) : !0;
      }
      function ZD(e, t) {
        return t === "separator" && !ke(e);
      }
      function JD(e, t) {
        var r;
        return ((r = e.implicitAttrs) === null || r === void 0 ? void 0 : r[t]) !== void 0;
      }
      function QD(e, t) {
        return t === "combobox" && e.attr("aria-expanded") === "false";
      }
      function e_(e, t, r) {
        var a = t && Array.isArray(t.reviewEmpty) ? t.reviewEmpty : [], n = xe(r, {
          dpub: !0
        }), i = ru(n);
        if (i === null)
          return !0;
        var o = t_(r, i), u = o.filter(function(l) {
          var s = l.role, c = l.vNode;
          return c.props.nodeType === 1 && !i.includes(s);
        });
        if (u.length)
          return this.relatedNodes(u.map(function(l) {
            var s = l.vNode;
            return s;
          })), this.data({
            messageKey: "unallowed",
            values: u.map(function(l) {
              var s = l.vNode, c = l.attr;
              return n_(s, c);
            }).filter(function(l, s, c) {
              return c.indexOf(l) === s;
            }).join(", ")
          }), !1;
        if (r_(i, o))
          return !0;
        if (this.data(i), !(a.includes(n) && !o.some(i_)))
          return !1;
      }
      function t_(e, t) {
        for (var r, a = [], n = na(e), i = function() {
          if (r.props.nodeType === 3 && a.push({
            vNode: r,
            role: null
          }), r.props.nodeType !== 1 || !Fe(r))
            return "continue";
          var l = ce(r, {
            noPresentational: !0
          }), s = a_(r), c = !!s || ke(r);
          if (!l && !c || ["group", "rowgroup"].includes(l) && t.some(function(f) {
            return f === l;
          }))
            n.push.apply(n, re(r.children));
          else if (l || c) {
            var d = s || "tabindex";
            a.push({
              role: l,
              attr: d,
              vNode: r
            });
          }
        }; r = n.shift(); )
          var o = i();
        return a;
      }
      function r_(e, t) {
        return t.some(function(r) {
          var a = r.role;
          return a && e.includes(a);
        });
      }
      function a_(e) {
        return dr().find(function(t) {
          return e.hasAttr(t);
        });
      }
      function n_(e, t) {
        var r = e.props, a = r.nodeName, n = r.nodeType;
        if (n === 3)
          return "#text";
        var i = xe(e, {
          dpub: !0
        });
        return i ? "[role=".concat(i, "]") : t ? a + "[".concat(t, "]") : a;
      }
      function i_(e) {
        var t = e.vNode;
        return t.props.nodeType === 3 ? t.props.nodeValue.trim().length > 0 : oa(t, !1, !0);
      }
      function z1(e, t, r, a) {
        var n = xe(e);
        if (r || (r = tu(n)), !r)
          return null;
        for (var i = r.includes("group"), o = a ? e : e.parent; o; ) {
          var u = ce(o, {
            noPresentational: !0
          });
          if (!u)
            o = o.parent;
          else if (u === "group" && i)
            t.includes(n) && r.push(n), r = r.filter(function(l) {
              return l !== "group";
            }), o = o.parent;
          else
            return r.includes(u) ? null : r;
        }
        return r;
      }
      function o_(e) {
        for (var t = [], r = null; e; ) {
          if (e.getAttribute("id")) {
            var a = Re(e.getAttribute("id")), n = We(e);
            r = n.querySelector("[aria-owns~=".concat(a, "]")), r && t.push(r);
          }
          e = e.parentElement;
        }
        return t.length ? t : null;
      }
      function u_(e, t, r) {
        var a = t && Array.isArray(t.ownGroupRoles) ? t.ownGroupRoles : [], n = z1(r, a);
        if (!n)
          return !0;
        var i = o_(e);
        if (i) {
          for (var o = 0, u = i.length; o < u; o++)
            if (n = z1(le(i[o]), a, n, !0), !n)
              return !0;
        }
        return this.data(n), !1;
      }
      var l_ = u_;
      function s_(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = ce(r), n = t.supportedRoles || [];
        if (n.includes(a))
          return !0;
        if (!(a && a !== "presentation" && a !== "none"))
          return !1;
      }
      var c_ = s_;
      function d_(e, t, r) {
        var a = r.attrNames.filter(function(n) {
          var i = he.ariaAttrs[n];
          if (!Bn(n))
            return !1;
          var o = i.unsupported;
          return k(o) !== "object" ? !!o : !aa(e, o.exceptions);
        });
        return a.length ? (this.data(a), !0) : !1;
      }
      var f_ = d_;
      function p_(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = [], n = /^aria-/;
        return r.attrNames.forEach(function(i) {
          t.indexOf(i) === -1 && n.test(i) && !Bn(i) && a.push(i);
        }), a.length ? (this.data(a), !1) : !0;
      }
      var m_ = p_;
      function h_(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = "", n = "", i = [], o = /^aria-/, u = ["aria-errormessage"], l = {
          "aria-controls": function() {
            return r.attr("aria-expanded") !== "false" && r.attr("aria-selected") !== "false";
          },
          "aria-current": function(c) {
            c || (a = 'aria-current="'.concat(r.attr("aria-current"), '"'), n = "ariaCurrent");
          },
          "aria-owns": function() {
            return r.attr("aria-expanded") !== "false";
          },
          "aria-describedby": function(c) {
            c || (a = 'aria-describedby="'.concat(r.attr("aria-describedby"), '"'), n = y._tree && y._tree[0]._hasShadowRoot ? "noIdShadow" : "noId");
          },
          "aria-labelledby": function(c) {
            c || (a = 'aria-labelledby="'.concat(r.attr("aria-labelledby"), '"'), n = y._tree && y._tree[0]._hasShadowRoot ? "noIdShadow" : "noId");
          }
        };
        if (r.attrNames.forEach(function(s) {
          if (!(u.includes(s) || t.includes(s) || !o.test(s))) {
            var c, d = r.attr(s);
            try {
              c = P1(r, s);
            } catch {
              a = "".concat(s, '="').concat(d, '"'), n = "idrefs";
              return;
            }
            (!l[s] || l[s](c)) && !c && (d === "" && !v_(s) ? (a = s, n = "empty") : i.push("".concat(s, '="').concat(d, '"')));
          }
        }), i.length)
          return this.data(i), !1;
        if (a) {
          this.data({
            messageKey: n,
            needsReview: a
          });
          return;
        }
        return !0;
      }
      function v_(e) {
        var t;
        return ((t = he.ariaAttrs[e]) === null || t === void 0 ? void 0 : t.type) === "string";
      }
      function g_(e, t, r) {
        var a, n = (a = r.attr("aria-braillelabel")) !== null && a !== void 0 ? a : "";
        if (!n.trim())
          return !0;
        try {
          return ae($e(r)) !== "";
        } catch {
          return;
        }
      }
      function b_(e, t, r) {
        var a, n = (a = r.attr("aria-brailleroledescription")) !== null && a !== void 0 ? a : "";
        if (ae(n) === "")
          return !0;
        var i = r.attr("aria-roledescription");
        return typeof i != "string" ? (this.data({
          messageKey: "noRoleDescription"
        }), !1) : ae(i) === "" ? (this.data({
          messageKey: "emptyRoleDescription"
        }), !1) : !0;
      }
      function y_(e, t, r) {
        var a = ce(r, {
          dpub: !0,
          fallback: !0
        }), n = he.ariaRoles[a];
        return n != null && n.deprecated ? (this.data(a), !0) : !1;
      }
      function w_(e, t) {
        var r = Ct(e);
        return !r && t.length === 2 && t.includes("none") && t.includes("presentation");
      }
      function D_(e, t, r) {
        var a = Ye(r.attr("role"));
        return a.length <= 1 ? !1 : w_(r, a) ? void 0 : !0;
      }
      var __ = D_;
      function x_(e, t, r) {
        var a = dr().filter(function(n) {
          return r.hasAttr(n);
        });
        return this.data(a), a.length > 0;
      }
      var E_ = x_;
      function C_(e) {
        var t = e.getAttribute("role");
        if (t === null)
          return !1;
        var r = Ft(t);
        return r === "widget" || r === "composite";
      }
      var A_ = C_;
      function F_(e, t, r) {
        var a = Ye(r.attr("role")), n = a.every(function(i) {
          return !Tr(i, {
            allowAbstract: !0
          });
        });
        return n ? (this.data(a), !0) : !1;
      }
      var T_ = F_;
      function R_(e, t, r) {
        return ke(r);
      }
      var k_ = R_;
      function S_(e, t, r) {
        var a = ce(r, {
          noImplicit: !0
        });
        this.data(a);
        var n, i;
        try {
          n = ae(Ki(r)).toLowerCase(), i = ae($e(r)).toLowerCase();
        } catch {
          return;
        }
        if (!i && !n)
          return !1;
        if (!(!i && n) && i.includes(n))
          return !1;
      }
      var O_ = S_;
      function M_(e, t, r) {
        var a = ce(r, {
          dpub: !0,
          fallback: !0
        }), n = Hi(a);
        return n && this.data(a), n;
      }
      var N_ = M_, I_ = {
        ARTICLE: !0,
        ASIDE: !0,
        NAV: !0,
        SECTION: !0
      }, P_ = {
        application: !0,
        article: !0,
        banner: !1,
        complementary: !0,
        contentinfo: !0,
        form: !0,
        main: !0,
        navigation: !0,
        region: !0,
        search: !1
      };
      function L_(e) {
        var t = e.nodeName.toUpperCase();
        return I_[t] || !1;
      }
      function B_(e, t) {
        var r = xe(e);
        return r && (P_[r] || t.roles.includes(r)) || !1;
      }
      function q_(e, t) {
        return B_(e, t) || L_(e);
      }
      var j_ = q_, V1 = {};
      ht(V1, {
        Color: function() {
          return Se;
        },
        centerPointOfRect: function() {
          return V_;
        },
        elementHasImage: function() {
          return cn;
        },
        elementIsDistinct: function() {
          return $1;
        },
        filteredRectStack: function() {
          return G_;
        },
        flattenColors: function() {
          return kt;
        },
        flattenShadowColors: function() {
          return nu;
        },
        getBackgroundColor: function() {
          return wa;
        },
        getBackgroundStack: function() {
          return iu;
        },
        getContrast: function() {
          return Nr;
        },
        getForegroundColor: function() {
          return zn;
        },
        getOwnBackgroundColor: function() {
          return hr;
        },
        getRectStack: function() {
          return U1;
        },
        getStackingContext: function() {
          return uu;
        },
        getStrokeColorsFromShadows: function() {
          return ou;
        },
        getTextShadowColors: function() {
          return jn;
        },
        hasValidContrastRatio: function() {
          return mx;
        },
        incompleteData: function() {
          return Ue;
        },
        parseTextShadows: function() {
          return W1;
        },
        stackingContextToColor: function() {
          return ya;
        }
      });
      function z_(e) {
        if (!(e.left > _.innerWidth) && !(e.top > _.innerHeight)) {
          var t = Math.min(Math.ceil(e.left + e.width / 2), _.innerWidth - 1), r = Math.min(Math.ceil(e.top + e.height / 2), _.innerHeight - 1);
          return {
            x: t,
            y: r
          };
        }
      }
      var V_ = z_;
      function H1(e) {
        return e.getPropertyValue("font-family").split(/[,;]/g).map(function(t) {
          return t.trim().toLowerCase();
        });
      }
      function H_(e, t) {
        var r = _.getComputedStyle(e);
        if (r.getPropertyValue("background-image") !== "none")
          return !0;
        var a = ["border-bottom", "border-top", "outline"].reduce(function(u, l) {
          var s = new Se();
          return s.parseString(r.getPropertyValue(l + "-color")), u || r.getPropertyValue(l + "-style") !== "none" && parseFloat(r.getPropertyValue(l + "-width")) > 0 && s.alpha !== 0;
        }, !1);
        if (a)
          return !0;
        var n = _.getComputedStyle(t);
        if (H1(r)[0] !== H1(n)[0])
          return !0;
        var i = ["text-decoration-line", "text-decoration-style", "font-weight", "font-style", "font-size"].reduce(function(u, l) {
          return u || r.getPropertyValue(l) !== n.getPropertyValue(l);
        }, !1), o = r.getPropertyValue("text-decoration");
        return o.split(" ").length < 3 && (i = i || o !== n.getPropertyValue("text-decoration")), i;
      }
      var $1 = H_;
      function $_(e) {
        var t = Cs(e), r = ao(e);
        return !r || r.length <= 1 ? [t] : r.some(function(a) {
          return a === void 0;
        }) ? null : (r.splice(0, 0, t), r);
      }
      var U1 = $_;
      function U_(e) {
        var t = U1(e);
        if (t && t.length === 1)
          return t[0];
        if (t && t.length > 1) {
          var r = t.shift(), a;
          return t.forEach(function(n, i) {
            if (i !== 0) {
              var o = t[i - 1], u = t[i];
              a = o.every(function(l, s) {
                return l === u[s];
              }) || r.includes(e);
            }
          }), a ? t[0] : (Ue.set("bgColor", "elmPartiallyObscuring"), null);
        }
        return Ue.set("bgColor", "outsideViewport"), null;
      }
      var G_ = U_;
      function W_(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      var Y_ = {
        normal: function(t, r) {
          return r;
        },
        multiply: function(t, r) {
          return r * t;
        },
        screen: function(t, r) {
          return t + r - t * r;
        },
        overlay: function(t, r) {
          return this["hard-light"](r, t);
        },
        darken: function(t, r) {
          return Math.min(t, r);
        },
        lighten: function(t, r) {
          return Math.max(t, r);
        },
        "color-dodge": function(t, r) {
          return t === 0 ? 0 : r === 1 ? 1 : Math.min(1, t / (1 - r));
        },
        "color-burn": function(t, r) {
          return t === 1 ? 1 : r === 0 ? 0 : 1 - Math.min(1, (1 - t) / r);
        },
        "hard-light": function(t, r) {
          return r <= 0.5 ? this.multiply(t, 2 * r) : this.screen(t, 2 * r - 1);
        },
        "soft-light": function(t, r) {
          if (r <= 0.5)
            return t - (1 - 2 * r) * t * (1 - t);
          var a = t <= 0.25 ? ((16 * t - 12) * t + 4) * t : Math.sqrt(t);
          return t + (2 * r - 1) * (a - t);
        },
        difference: function(t, r) {
          return Math.abs(t - r);
        },
        exclusion: function(t, r) {
          return t + r - 2 * t * r;
        }
      };
      function au(e, t, r, a, n) {
        return t * (1 - a) * e + t * a * Y_[n](r / 255, e / 255) * 255 + (1 - t) * a * r;
      }
      function X_(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "normal", a = au(e.red, e.alpha, t.red, t.alpha, r), n = au(e.green, e.alpha, t.green, t.alpha, r), i = au(e.blue, e.alpha, t.blue, t.alpha, r), o = W_(e.alpha + t.alpha * (1 - e.alpha), 0, 1);
        if (o === 0)
          return new Se(a, n, i, o);
        var u = Math.round(a / o), l = Math.round(n / o), s = Math.round(i / o);
        return new Se(u, l, s, o);
      }
      var kt = X_;
      function nu(e, t) {
        var r = e.alpha, a = (1 - r) * t.red + r * e.red, n = (1 - r) * t.green + r * e.green, i = (1 - r) * t.blue + r * e.blue, o = e.alpha + t.alpha * (1 - e.alpha);
        return new Se(a, n, i, o);
      }
      function iu(e) {
        for (var t = ao(e).map(function(n) {
          return n = Od(n, e), n = K_(n), n;
        }), r = 0; r < t.length; r++) {
          var a = t[r];
          if (a[0] !== e)
            return Ue.set("bgColor", "bgOverlap"), null;
          if (r !== 0 && !Z_(a, t[0]))
            return Ue.set("bgColor", "elmPartiallyObscuring"), null;
        }
        return t[0] || null;
      }
      function K_(e) {
        var t = e.indexOf(M.body), r = e, a = hr(_.getComputedStyle(M.documentElement));
        if (t > 1 && a.alpha === 0 && !cn(M.documentElement)) {
          t > 1 && (r.splice(t, 1), r.push(M.body));
          var n = r.indexOf(M.documentElement);
          n > 0 && (r.splice(n, 1), r.push(M.documentElement));
        }
        return r;
      }
      function Z_(e, t) {
        if (e === t)
          return !0;
        if (e === null || t === null || e.length !== t.length)
          return !1;
        for (var r = 0; r < e.length; ++r)
          if (e[r] !== t[r])
            return !1;
        return !0;
      }
      var J_ = 0.54, qn = 0.5, Q_ = 1.5, G1 = ["top", "right", "bottom", "left"];
      function ou(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ignoreEdgeCount, a = r === void 0 ? !1 : r, n = ex(e), i = Object.entries(n).map(function(o) {
          var u = V(o, 2), l = u[0], s = u[1], c = G1.filter(function(d) {
            return s[d].length !== 0;
          }).length;
          return {
            colorStr: l,
            sides: s,
            edgeCount: c
          };
        });
        return !a && i.some(function(o) {
          var u = o.edgeCount;
          return u > 1 && u < 4;
        }) ? null : i.map(tx).filter(function(o) {
          return o !== null;
        });
      }
      function ex(e) {
        var t = {}, r = Ae(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n, i = a.value, o = i.colorStr, u = i.pixels;
            (n = t[o]) !== null && n !== void 0 || (t[o] = {
              top: [],
              right: [],
              bottom: [],
              left: []
            });
            var l = t[o], s = V(u, 2), c = s[0], d = s[1];
            c > qn ? l.right.push(c) : -c > qn && l.left.push(-c), d > qn ? l.bottom.push(d) : -d > qn && l.top.push(-d);
          }
        } catch (f) {
          r.e(f);
        } finally {
          r.f();
        }
        return t;
      }
      function tx(e) {
        var t = e.colorStr, r = e.sides, a = e.edgeCount;
        if (a !== 4)
          return null;
        var n = new Se();
        n.parseString(t);
        var i = 0, o = !0;
        return G1.forEach(function(u) {
          i += r[u].length / 4, o && (o = r[u].every(function(l) {
            return l > Q_;
          }));
        }), o || (n.alpha = 1 - Math.pow(J_, i)), n;
      }
      function W1(e) {
        var t = {
          pixels: []
        }, r = e.trim(), a = [t];
        if (!r)
          return [];
        for (; r; ) {
          var n = r.match(/^[a-z]+(\([^)]+\))?/i) || r.match(/^#[0-9a-f]+/i), i = r.match(/^([0-9.-]+)px/i) || r.match(/^(0)/);
          if (n)
            me(!t.colorStr, "Multiple colors identified in text-shadow: ".concat(e)), r = r.replace(n[0], "").trim(), t.colorStr = n[0];
          else if (i) {
            me(t.pixels.length < 3, "Too many pixel units in text-shadow: ".concat(e)), r = r.replace(i[0], "").trim();
            var o = parseFloat((i[1][0] === "." ? "0" : "") + i[1]);
            t.pixels.push(o);
          } else if (r[0] === ",")
            me(t.pixels.length >= 2, "Missing pixel value in text-shadow: ".concat(e)), t = {
              pixels: []
            }, a.push(t), r = r.substr(1).trim();
          else
            throw new Error("Unable to process text-shadows: ".concat(r));
        }
        return a.forEach(function(u) {
          var l = u.pixels;
          l.length === 2 && l.push(0);
        }), a;
      }
      function jn(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.minRatio, a = t.maxRatio, n = t.ignoreEdgeCount, i = [], o = _.getComputedStyle(e), u = o.getPropertyValue("text-shadow");
        if (u === "none")
          return i;
        var l = o.getPropertyValue("font-size"), s = parseInt(l);
        me(isNaN(s) === !1, "Unable to determine font-size value ".concat(l));
        var c = [], d = W1(u), f = Ae(d), p;
        try {
          for (f.s(); !(p = f.n()).done; ) {
            var m = p.value, h = m.colorStr || o.getPropertyValue("color"), b = V(m.pixels, 3), v = b[0], g = b[1], w = b[2], D = w === void 0 ? 0 : w;
            if (!(a && D >= s * a)) {
              if (r && D < s * r) {
                c.push({
                  colorStr: h,
                  pixels: m.pixels
                });
                continue;
              }
              if (c.length > 0) {
                var F = ou(c, {
                  ignoreEdgeCount: n
                });
                if (F === null)
                  return null;
                i.push.apply(i, re(F)), c.splice(0, c.length);
              }
              var R = rx({
                colorStr: h,
                offsetX: v,
                offsetY: g,
                blurRadius: D,
                fontSize: s
              });
              i.push(R);
            }
          }
        } catch (L) {
          f.e(L);
        } finally {
          f.f();
        }
        if (c.length > 0) {
          var S = ou(c, {
            ignoreEdgeCount: n
          });
          if (S === null)
            return null;
          i.push.apply(i, re(S));
        }
        return i;
      }
      function rx(e) {
        var t = e.colorStr, r = e.offsetX, a = e.offsetY, n = e.blurRadius, i = e.fontSize;
        if (r > n || a > n)
          return new Se(0, 0, 0, 0);
        var o = new Se();
        return o.parseString(t), o.alpha *= ax(n, i), o;
      }
      function ax(e, t) {
        if (e === 0)
          return 1;
        var r = e / t;
        return 0.185 / (r + 0.4);
      }
      function uu(e, t) {
        var r, a = le(e);
        if (a._stackingContext)
          return a._stackingContext;
        var n = [], i = /* @__PURE__ */ new Map();
        return t = (r = t) !== null && r !== void 0 ? r : iu(e), t.forEach(function(o) {
          var u, l = le(o), s = ox(l), c = l._stackingOrder.filter(function(p) {
            var m = p.vNode;
            return !!m;
          });
          c.forEach(function(p, m) {
            var h, b = p.vNode, v = (h = c[m - 1]) === null || h === void 0 ? void 0 : h.vNode, g = X1(i, b, v);
            m === 0 && !i.get(b) && n.unshift(g), i.set(b, g);
          });
          var d = (u = c[c.length - 1]) === null || u === void 0 ? void 0 : u.vNode, f = X1(i, l, d);
          c.length || n.unshift(f), f.bgColor = s;
        }), a._stackingContext = n, n;
      }
      function ya(e) {
        var t;
        if (!((t = e.descendants) !== null && t !== void 0 && t.length)) {
          var r = e.bgColor;
          return r.alpha *= e.opacity, {
            color: r,
            blendMode: e.blendMode
          };
        }
        var a = e.descendants.reduce(nx, Y1()), n = kt(a, e.bgColor, e.descendants[0].blendMode);
        return n.alpha *= e.opacity, {
          color: n,
          blendMode: e.blendMode
        };
      }
      function nx(e, t) {
        var r;
        e instanceof Se ? r = e : r = ya(e).color;
        var a = ya(t).color;
        return kt(a, r, t.blendMode);
      }
      function Y1(e, t) {
        var r;
        return {
          vNode: e,
          ancestor: t,
          opacity: parseFloat((r = e == null ? void 0 : e.getComputedStylePropertyValue("opacity")) !== null && r !== void 0 ? r : 1),
          bgColor: new Se(0, 0, 0, 0),
          blendMode: ix(e == null ? void 0 : e.getComputedStylePropertyValue("mix-blend-mode")),
          descendants: []
        };
      }
      function ix(e) {
        return e || void 0;
      }
      function X1(e, t, r) {
        var a, n = e.get(r), i = (a = e.get(t)) !== null && a !== void 0 ? a : Y1(t, n);
        return n && r !== t && !n.descendants.includes(i) && n.descendants.unshift(i), i;
      }
      function ox(e) {
        var t = new Se();
        return t.parseString(e.getComputedStylePropertyValue("background-color")), t;
      }
      function wa(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.1, a = le(e), n = a._cache.getBackgroundColor;
        if (n)
          return t.push.apply(t, re(n.bgElms)), Ue.set("bgColor", n.incompleteData), n.bgColor;
        var i = ux(e, t, r);
        return a._cache.getBackgroundColor = {
          bgColor: i,
          bgElms: t,
          incompleteData: Ue.get("bgColor")
        }, i;
      }
      function ux(e, t, r) {
        var a, n, i = iu(e);
        if (!i)
          return null;
        var o = ro(e), u = (a = jn(e, {
          minRatio: r,
          ignoreEdgeCount: !0
        })) !== null && a !== void 0 ? a : [];
        u.length && (u = [{
          color: u.reduce(nu)
        }]);
        for (var l = 0; l < i.length; l++) {
          var s = i[l], c = _.getComputedStyle(s);
          if (cn(s, c))
            return t.push(s), null;
          var d = hr(c);
          if (d.alpha !== 0) {
            if (c.getPropertyValue("display") !== "inline" && !K1(s, o))
              return t.push(s), Ue.set("bgColor", "elmPartiallyObscured"), null;
            if (t.push(s), d.alpha === 1)
              break;
          }
        }
        var f = uu(e, i);
        u = f.map(ya).concat(u);
        var p = lx(e, i.includes(M.body));
        if ((n = u).unshift.apply(n, re(p)), u.length === 0)
          return new Se(255, 255, 255, 1);
        var m = u.reduce(function(h, b) {
          return kt(b.color, h.color instanceof Se ? h.color : h, b.blendMode);
        });
        return kt(m.color instanceof Se ? m.color : m, new Se(255, 255, 255, 1));
      }
      function K1(e, t) {
        t = Array.isArray(t) ? t : [t];
        var r = e.getBoundingClientRect(), a = r.right, n = r.bottom, i = _.getComputedStyle(e), o = i.getPropertyValue("overflow");
        return (["scroll", "auto"].includes(o) || e instanceof _.HTMLHtmlElement) && (a = r.left + e.scrollWidth, n = r.top + e.scrollHeight), t.every(function(u) {
          return u.top >= r.top && u.bottom <= n && u.left >= r.left && u.right <= a;
        });
      }
      function Z1(e) {
        return e || void 0;
      }
      function lx(e, t) {
        var r = [];
        if (!t) {
          var a = M.documentElement, n = M.body, i = _.getComputedStyle(a), o = _.getComputedStyle(n), u = hr(i), l = hr(o), s = l.alpha !== 0 && K1(n, e.getBoundingClientRect());
          (l.alpha !== 0 && u.alpha === 0 || s && l.alpha !== 1) && r.unshift({
            color: l,
            blendMode: Z1(o.getPropertyValue("mix-blend-mode"))
          }), u.alpha !== 0 && (!s || s && l.alpha !== 1) && r.unshift({
            color: u,
            blendMode: Z1(i.getPropertyValue("mix-blend-mode"))
          });
        }
        return r;
      }
      function sx(e, t) {
        if (!t || !e)
          return null;
        t.alpha < 1 && (t = kt(t, e));
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
      }
      var Nr = sx;
      function zn(e, t, r) {
        for (var a, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = _.getComputedStyle(e), o = [function() {
          return dx(i, n);
        }, function() {
          return cx(i);
        }, function() {
          return jn(e, {
            minRatio: 0
          });
        }], u = [], l = 0, s = o; l < s.length; l++) {
          var c = s[l], d = c();
          if (d && (u = u.concat(d), d.alpha === 1))
            break;
        }
        var f = u.reduce(function(b, v) {
          return kt(b, v);
        });
        if ((a = r) !== null && a !== void 0 || (r = wa(e, [])), r === null) {
          var p = Ue.get("bgColor");
          return Ue.set("fgColor", p), null;
        }
        var m = uu(e), h = J1(m, e);
        return kt(fx(f, h, m), new Se(255, 255, 255, 1));
      }
      function cx(e) {
        return new Se().parseString(e.getPropertyValue("-webkit-text-fill-color") || e.getPropertyValue("color"));
      }
      function dx(e, t) {
        var r = t.textStrokeEmMin, a = r === void 0 ? 0 : r, n = parseFloat(e.getPropertyValue("-webkit-text-stroke-width"));
        if (n === 0)
          return null;
        var i = e.getPropertyValue("font-size"), o = n / parseFloat(i);
        if (isNaN(o) || o < a)
          return null;
        var u = e.getPropertyValue("-webkit-text-stroke-color");
        return new Se().parseString(u);
      }
      function fx(e, t, r) {
        for (; t; ) {
          var a;
          if (t.opacity === 1 && t.ancestor) {
            t = t.ancestor;
            continue;
          }
          e.alpha *= t.opacity;
          var n = ((a = t.ancestor) === null || a === void 0 ? void 0 : a.descendants) || r;
          t.opacity !== 1 && (n = n.slice(0, n.indexOf(t)));
          var i = n.map(ya);
          if (!i.length) {
            t = t.ancestor;
            continue;
          }
          var o = i.reduce(function(u, l) {
            return kt(l.color, u.color instanceof Se ? u.color : u);
          }, {
            color: new Se(0, 0, 0, 0),
            blendMode: "normal"
          });
          e = kt(e, o), t = t.ancestor;
        }
        return e;
      }
      function J1(e, t) {
        var r = Ae(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n, i = a.value;
            if (((n = i.vNode) === null || n === void 0 ? void 0 : n.actualNode) === t)
              return i;
            var o = J1(i.descendants, t);
            if (o)
              return o;
          }
        } catch (u) {
          r.e(u);
        } finally {
          r.f();
        }
      }
      function px(e, t, r, a) {
        var n = Nr(e, t), i = a && Math.ceil(r * 72) / 96 < 14 || !a && Math.ceil(r * 72) / 96 < 18, o = i ? 4.5 : 3;
        return {
          isValid: n > o,
          contrastRatio: n,
          expectedContrastRatio: o
        };
      }
      var mx = px;
      function hx(e, t, r) {
        var a = t.ignoreUnicode, n = t.ignoreLength, i = t.ignorePseudo, o = t.boldValue, u = t.boldTextPt, l = t.largeTextPt, s = t.contrastRatio, c = t.shadowOutlineEmMax, d = t.pseudoSizeThreshold;
        if (!nt(e))
          return this.data({
            messageKey: "hidden"
          }), !0;
        var f = At(r, !1, !0);
        if (a && gx(f)) {
          this.data({
            messageKey: "nonBmp"
          });
          return;
        }
        var p = _.getComputedStyle(e), m = parseFloat(p.getPropertyValue("font-size")), h = p.getPropertyValue("font-weight"), b = parseFloat(h) >= o || h === "bold", v = Math.ceil(m * 72) / 96, g = b && v < u || !b && v < l, w = g ? s.normal : s.large, D = w.expected, F = w.minThreshold, R = w.maxThreshold, S = vx(r, {
          ignorePseudo: i,
          pseudoSizeThreshold: d
        });
        if (S) {
          this.data({
            fontSize: "".concat((m * 72 / 96).toFixed(1), "pt (").concat(m, "px)"),
            fontWeight: b ? "bold" : "normal",
            messageKey: "pseudoContent",
            expectedContrastRatio: D + ":1"
          }), this.relatedNodes(S.actualNode);
          return;
        }
        var L = jn(e, {
          minRatio: 1e-3,
          maxRatio: c
        });
        if (L === null) {
          this.data({
            messageKey: "complexTextShadows"
          });
          return;
        }
        var G = [], q = wa(e, G, c), j = zn(e, !1, q, t), H = null, z = null, Z = null;
        if (L.length === 0)
          H = Nr(q, j);
        else if (j && q) {
          Z = [].concat(re(L), [q]).reduce(nu);
          var te = Nr(q, j), Q = Nr(q, Z), W = Nr(Z, j);
          H = Math.max(te, Q, W), H !== te && (z = Q > W ? "shadowOnBgColor" : "fgOnShadowColor");
        }
        var B = H > D;
        if (typeof F == "number" && (typeof H != "number" || H < F) || typeof R == "number" && (typeof H != "number" || H > R))
          return this.data({
            contrastRatio: H
          }), !0;
        var ne = Math.floor(H * 100) / 100, E;
        q === null ? E = Ue.get("bgColor") : B || (E = z);
        var U = ne === 1, I = f.length === 1;
        if (U ? E = Ue.set("bgColor", "equalRatio") : !B && I && !n && (E = "shortTextContent"), this.data({
          fgColor: j ? j.toHexString() : void 0,
          bgColor: q ? q.toHexString() : void 0,
          contrastRatio: ne,
          fontSize: "".concat((m * 72 / 96).toFixed(1), "pt (").concat(m, "px)"),
          fontWeight: b ? "bold" : "normal",
          messageKey: E,
          expectedContrastRatio: D + ":1",
          shadowColor: Z ? Z.toHexString() : void 0
        }), j === null || q === null || U || I && !n && !B) {
          E = null, Ue.clear(), this.relatedNodes(G);
          return;
        }
        return B || this.relatedNodes(G), B;
      }
      function vx(e, t) {
        var r = t.pseudoSizeThreshold, a = r === void 0 ? 0.25 : r, n = t.ignorePseudo, i = n === void 0 ? !1 : n;
        if (!i) {
          var o = e.boundingClientRect, u = o.width * o.height * a;
          do {
            var l = Q1(e.actualNode, ":before"), s = Q1(e.actualNode, ":after");
            if (l + s > u)
              return e;
          } while (e = e.parent);
        }
      }
      var Q1 = Le(function(t, r) {
        var a = _.getComputedStyle(t, r), n = function(l, s) {
          return a.getPropertyValue(l) === s;
        };
        if (n("content", "none") || n("display", "none") || n("visibility", "hidden") || n("position", "absolute") === !1 || hr(a).alpha === 0 && n("background-image", "none"))
          return 0;
        var i = ef(a.getPropertyValue("width")), o = ef(a.getPropertyValue("height"));
        return i.unit !== "px" || o.unit !== "px" ? i.value === 0 || o.value === 0 ? 0 : 1 / 0 : i.value * o.value;
      });
      function gx(e) {
        var t = {
          nonBmp: !0
        }, r = Qi(e, t), a = ae(ia(e, t)) === "";
        return r && a;
      }
      function ef(e) {
        var t = /^([0-9.]+)([a-z]+)$/i, r = e.match(t) || [], a = V(r, 3), n = a[1], i = n === void 0 ? "" : n, o = a[2], u = o === void 0 ? "" : o;
        return {
          value: parseFloat(i),
          unit: u.toLowerCase()
        };
      }
      function tf(e, t) {
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
      }
      var bx = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function rf(e) {
        var t = _.getComputedStyle(e).getPropertyValue("display");
        return bx.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      function yx(e, t) {
        var r = t.requiredContrastRatio, a = t.allowSameColor;
        if (rf(e))
          return !1;
        for (var n = He(e); n && n.nodeType === 1 && !rf(n); )
          n = He(n);
        if (n) {
          this.relatedNodes([n]);
          var i = zn(e), o = zn(n), u = wa(e), l = wa(n), s = i && o ? tf(i, o) : void 0;
          if (s && (s = Math.floor(s * 100) / 100), s && s >= r)
            return !0;
          var c = u && l ? tf(u, l) : void 0;
          if (c && (c = Math.floor(c * 100) / 100), c && c >= r)
            return !0;
          if (!c) {
            var d, f = (d = Ue.get("bgColor")) !== null && d !== void 0 ? d : "bgContrast";
            this.data({
              messageKey: f
            }), Ue.clear();
            return;
          }
          if (s)
            return a && s === 1 && c === 1 ? !0 : s === 1 && c > 1 ? (this.data({
              messageKey: "bgContrast",
              contrastRatio: c,
              requiredContrastRatio: r,
              nodeBackgroundColor: u ? u.toHexString() : void 0,
              parentBackgroundColor: l ? l.toHexString() : void 0
            }), !1) : (this.data({
              messageKey: "fgContrast",
              contrastRatio: s,
              requiredContrastRatio: r,
              nodeColor: i ? i.toHexString() : void 0,
              parentColor: o ? o.toHexString() : void 0
            }), !1);
        }
      }
      var wx = yx, Dx = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function _x(e) {
        if (af(e))
          return !1;
        for (var t = He(e); t && t.nodeType === 1 && !af(t); )
          t = He(t);
        if (t) {
          if (this.relatedNodes([t]), $1(e, t))
            return !0;
          if (xx(e)) {
            this.data({
              messageKey: "pseudoContent"
            });
            return;
          }
          return !1;
        }
      }
      function af(e) {
        var t = _.getComputedStyle(e).getPropertyValue("display");
        return Dx.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      function xx(e) {
        for (var t = 0, r = ["before", "after"]; t < r.length; t++) {
          var a = r[t], n = _.getComputedStyle(e, ":".concat(a)), i = n.getPropertyValue("content");
          if (i !== "none")
            return !0;
        }
        return !1;
      }
      function Ex(e, t, r) {
        if (r.props.nodeName !== "input")
          return !0;
        var a = ["text", "search", "number", "tel"], n = ["text", "search", "url"], i = {
          bday: ["text", "search", "date"],
          email: ["text", "search", "email"],
          username: ["text", "search", "email"],
          "street-address": ["text"],
          tel: ["text", "search", "tel"],
          "tel-country-code": ["text", "search", "tel"],
          "tel-national": ["text", "search", "tel"],
          "tel-area-code": ["text", "search", "tel"],
          "tel-local": ["text", "search", "tel"],
          "tel-local-prefix": ["text", "search", "tel"],
          "tel-local-suffix": ["text", "search", "tel"],
          "tel-extension": ["text", "search", "tel"],
          "cc-number": a,
          "cc-exp": ["text", "search", "month", "tel"],
          "cc-exp-month": a,
          "cc-exp-year": a,
          "cc-csc": a,
          "transaction-amount": a,
          "bday-day": a,
          "bday-month": a,
          "bday-year": a,
          "new-password": ["text", "search", "password"],
          "current-password": ["text", "search", "password"],
          url: n,
          photo: n,
          impp: n
        };
        k(t) === "object" && Object.keys(t).forEach(function(d) {
          i[d] || (i[d] = []), i[d] = i[d].concat(t[d]);
        });
        var o = r.attr("autocomplete"), u = o.split(/\s+/g).map(function(d) {
          return d.toLowerCase();
        }), l = u[u.length - 1];
        if (mr.stateTerms.includes(l))
          return !0;
        var s = i[l], c = r.hasAttr("type") ? ae(r.attr("type")).toLowerCase() : "text";
        return c = In().includes(c) ? c : "text", typeof s > "u" ? c === "text" : s.includes(c);
      }
      var Cx = Ex;
      function Ax(e, t, r) {
        var a = r.attr("autocomplete") || "";
        return dc(a, t);
      }
      var Fx = Ax;
      function Tx(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
        if (!t.attribute || typeof t.attribute != "string")
          throw new TypeError("attr-non-space-content requires options.attribute to be a string");
        if (!r.hasAttr(t.attribute))
          return this.data({
            messageKey: "noAttr"
          }), !1;
        var a = r.attr(t.attribute), n = !ae(a);
        return n ? (this.data({
          messageKey: "emptyAttr"
        }), !1) : !0;
      }
      var Rx = Tx;
      function kx(e) {
        var t = e.some(function(r) {
          return r.result === !0;
        });
        return t && e.forEach(function(r) {
          r.result = !0;
        }), e;
      }
      var Sx = kx;
      function Ox(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("has-descendant requires options.selector to be a string");
        if (t.passForModal && ua())
          return !0;
        var a = Rt(r, t.selector, function(n) {
          return Fe(n);
        });
        return this.relatedNodes(a.map(function(n) {
          return n.actualNode;
        })), a.length > 0;
      }
      var Mx = Ox;
      function Nx(e, t, r) {
        try {
          return ae(Vt(r)) !== "";
        } catch {
          return;
        }
      }
      function Ix(e, t, r) {
        return aa(r, t.matcher);
      }
      var Px = Ix;
      function Lx(e) {
        return e.filter(function(t) {
          return t.data !== "ignored";
        });
      }
      var Bx = Lx;
      function qx(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("page-no-duplicate requires options.selector to be a string");
        var a = "page-no-duplicate;" + t.selector;
        if (ue.get(a)) {
          this.data("ignored");
          return;
        }
        ue.set(a, !0);
        var n = Rt(y._tree[0], t.selector, function(i) {
          return Fe(i);
        });
        return typeof t.nativeScopeFilter == "string" && (n = n.filter(function(i) {
          return i.actualNode.hasAttribute("role") || !Cr(i, t.nativeScopeFilter);
        })), typeof t.role == "string" && (n = n.filter(function(i) {
          return ce(i) === t.role;
        })), this.relatedNodes(n.filter(function(i) {
          return i !== r;
        }).map(function(i) {
          return i.actualNode;
        })), n.length <= 1;
      }
      var jx = qx;
      function zx(e) {
        var t = {};
        return e.filter(function(r) {
          if (!r.data)
            return !1;
          var a = r.data.toUpperCase();
          return t[a] ? (t[a].relatedNodes.push(r.relatedNodes[0]), !1) : (t[a] = r, r.relatedNodes = [], !0);
        }).map(function(r) {
          return r.result = !!r.relatedNodes.length, r;
        });
      }
      var Vx = zx;
      function Hx(e, t, r) {
        return zt(r) || (this.data(r.attr("accesskey")), this.relatedNodes([e])), !0;
      }
      var $x = Hx;
      function Ux(e, t, r) {
        var a = r.tabbableElements;
        if (!a)
          return !1;
        var n = a.filter(function(i) {
          return i !== r;
        });
        return n.length > 0;
      }
      var Gx = Ux;
      function Wx(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var i = n.filter(function(o) {
          return a.includes(o.props.nodeName);
        });
        return this.relatedNodes(i.map(function(o) {
          return o.actualNode;
        })), i.length === 0 || ua() ? !0 : i.every(function(o) {
          var u = o.getComputedStylePropertyValue("pointer-events"), l = parseInt(o.getComputedStylePropertyValue("width")), s = parseInt(o.getComputedStylePropertyValue("height"));
          return o.actualNode.onfocus || (l === 0 || s === 0) && u === "none";
        }) ? void 0 : !1;
      }
      var Yx = Wx;
      function Xx(e, t, r) {
        if (r.hasAttr("contenteditable") && a(r))
          return !0;
        return yt(r);
        function a(n) {
          var i = n.attr("contenteditable");
          if (i === "true" || i === "")
            return !0;
          if (i === "false")
            return !1;
          var o = at(r.parent, "[contenteditable]");
          return o ? a(o) : !1;
        }
      }
      var Kx = Xx;
      function Zx(e, t, r) {
        var a = r.tabbableElements.map(function(n) {
          var i = n.actualNode;
          return i;
        });
        if (!a || !a.length)
          return !0;
        if (ua()) {
          this.relatedNodes(a);
          return;
        }
        return !0;
      }
      var Jx = Zx;
      function Qx(e, t, r) {
        var a = r.attr("tabindex"), n = ke(r) && a > -1;
        if (!n)
          return !1;
        try {
          return !$e(r);
        } catch {
          return;
        }
      }
      var e5 = Qx;
      function t5(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var i = n.filter(function(o) {
          return !a.includes(o.props.nodeName);
        });
        return this.relatedNodes(i.map(function(o) {
          return o.actualNode;
        })), i.length === 0 || ua() ? !0 : i.every(function(o) {
          var u = o.getComputedStylePropertyValue("pointer-events"), l = parseInt(o.getComputedStylePropertyValue("width")), s = parseInt(o.getComputedStylePropertyValue("height"));
          return o.actualNode.onfocus || (l === 0 || s === 0) && u === "none";
        }) ? void 0 : !1;
      }
      var r5 = t5;
      function a5(e, t, r) {
        if (r.children)
          try {
            return !r.children.some(function(a) {
              return nf(a);
            });
          } catch {
            return;
          }
      }
      function nf(e) {
        if (yt(e))
          return !0;
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return !1;
        }
        return e.children.some(function(t) {
          return nf(t);
        });
      }
      function n5(e) {
        var t = Mr("landmark"), r = He(e), a = ce(e);
        for (this.data({
          role: a
        }); r; ) {
          var n = r.getAttribute("role");
          if (!n && r.nodeName.toUpperCase() !== "FORM" && (n = Ct(r)), n && t.includes(n) && !(n === "main" && a === "complementary"))
            return !1;
          r = He(r);
        }
        return !0;
      }
      var i5 = n5;
      function o5(e, t, r) {
        if (r.children)
          try {
            var a = of(r);
            if (!a.length)
              return !0;
            var n = a.filter(u5);
            return n.length > 0 ? (this.data({
              messageKey: "notHidden"
            }), this.relatedNodes(n)) : this.relatedNodes(a), !1;
          } catch {
            return;
          }
      }
      function of(e) {
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return [];
        }
        var t = [];
        return e.children.forEach(function(r) {
          Ft(r) === "widget" && ke(r) ? t.push(r) : t.push.apply(t, re(of(r)));
        }), t;
      }
      function u5(e) {
        var t = parseInt(e.attr("tabindex"), 10);
        return !isNaN(t) && t < 0;
      }
      function l5(e, t, r) {
        var a = parseInt(r.attr("tabindex"), 10);
        return isNaN(a) ? !0 : a <= 0;
      }
      var s5 = l5;
      function c5(e, t, r) {
        var a = r.attr("alt"), n = /^\s+$/;
        return typeof a == "string" && n.test(a);
      }
      var d5 = c5;
      function f5(e, t, r) {
        if (["none", "presentation"].includes(ce(r)))
          return !1;
        var a = at(r, t.parentSelector);
        if (!a)
          return !1;
        var n = At(a, !0).toLowerCase();
        return n === "" ? !1 : n === $e(r).toLowerCase();
      }
      var p5 = f5;
      function m5(e, t, r) {
        var a = this;
        if (!r.attr("id"))
          return !1;
        if (r.actualNode) {
          var n = We(r.actualNode), i = Re(r.attr("id")), o = Array.from(n.querySelectorAll('label[for="'.concat(i, '"]')));
          if (this.relatedNodes(o), !o.length)
            return !1;
          try {
            return o.some(function(u) {
              if (nt(u)) {
                var l = ae(cr(u, {
                  inControlContext: !0,
                  startNode: r
                }));
                return a.data({
                  explicitLabel: l
                }), !!l;
              } else
                return !0;
            });
          } catch {
            return;
          }
        }
      }
      var h5 = m5;
      function v5(e, t, r) {
        var a = ln(r), n = e.getAttribute("title");
        if (!a)
          return !1;
        if (!n && (n = "", e.getAttribute("aria-describedby"))) {
          var i = Et(e, "aria-describedby");
          n = i.map(function(o) {
            return o ? cr(o) : "";
          }).join("");
        }
        return ae(n) === ae(a);
      }
      var g5 = v5;
      function b5(e, t, r) {
        if (r.hasAttr("id")) {
          if (!r.actualNode)
            return;
          var a = We(e), n = Re(e.getAttribute("id")), i = a.querySelector('label[for="'.concat(n, '"]'));
          if (i && !Fe(i)) {
            var o;
            try {
              o = $e(r).trim();
            } catch {
              return;
            }
            var u = o === "";
            return u;
          }
        }
        return !1;
      }
      var y5 = b5;
      function w5(e, t, r) {
        try {
          var a = at(r, "label");
          if (a) {
            var n = ae($e(a, {
              inControlContext: !0,
              startNode: r
            }));
            return a.actualNode && this.relatedNodes([a.actualNode]), this.data({
              implicitLabel: n
            }), !!n;
          }
          return !1;
        } catch {
          return;
        }
      }
      var D5 = w5;
      function uf(e, t) {
        var r = lf(t), a = lf(e);
        return !r || !a ? !1 : r.includes(a);
      }
      function lf(e) {
        var t = ia(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return ae(t);
      }
      function _5(e, t, r) {
        var a, n = t == null ? void 0 : t.pixelThreshold, i = (a = t == null ? void 0 : t.occurrenceThreshold) !== null && a !== void 0 ? a : t == null ? void 0 : t.occuranceThreshold, o = cr(e).toLowerCase();
        if (!(to(o) < 1)) {
          var u = ae(Vt(r, {
            subtreeDescendant: !0,
            ignoreIconLigature: !0,
            pixelThreshold: n,
            occurrenceThreshold: i
          })).toLowerCase();
          return u ? to(u) < 1 ? uf(u, o) ? !0 : void 0 : uf(u, o) : !0;
        }
      }
      var x5 = _5;
      function E5(e) {
        var t = Re(e.getAttribute("id")), r = e.parentNode, a = We(e);
        a = a.documentElement || a;
        var n = Array.from(a.querySelectorAll('label[for="'.concat(t, '"]')));
        for (n.length && (n = n.filter(function(u) {
          return !zt(u);
        })); r; )
          r.nodeName.toUpperCase() === "LABEL" && n.indexOf(r) === -1 && n.push(r), r = r.parentNode;
        if (this.relatedNodes(n), n.length > 1) {
          var i = n.filter(function(u) {
            return Fe(u);
          });
          if (i.length > 1)
            return;
          var o = Et(e, "aria-labelledby");
          return o.includes(i[0]) ? !1 : void 0;
        }
        return !1;
      }
      var C5 = E5;
      function A5(e, t, r) {
        var a = ln(r), n = nn(r), i = r.attr("aria-describedby");
        return !a && !!(n || i);
      }
      var F5 = A5;
      function T5(e) {
        var t = [];
        return e.filter(function(r) {
          var a = function(o) {
            return r.data.role === o.data.role && r.data.accessibleText === o.data.accessibleText;
          }, n = t.find(a);
          return n ? (n.result = !1, n.relatedNodes.push(r.relatedNodes[0]), !1) : (t.push(r), r.relatedNodes = [], !0);
        });
      }
      var R5 = T5;
      function k5(e, t, r) {
        var a = ce(e), n = $e(r);
        return n = n ? n.toLowerCase() : null, this.data({
          role: a,
          accessibleText: n
        }), this.relatedNodes([e]), !0;
      }
      var S5 = k5;
      function lu(e) {
        return (e || "").trim() !== "";
      }
      function O5(e, t, r) {
        var a = typeof M < "u" ? Pa(M) : !1;
        if (t.attributes.includes("xml:lang") && t.attributes.includes("lang") && lu(r.attr("xml:lang")) && !lu(r.attr("lang")) && !a)
          return this.data({
            messageKey: "noXHTML"
          }), !1;
        var n = t.attributes.some(function(i) {
          return lu(r.attr(i));
        });
        return n ? !0 : (this.data({
          messageKey: "noLang"
        }), !1);
      }
      var M5 = O5;
      function N5(e, t, r) {
        var a = [];
        return t.attributes.forEach(function(n) {
          var i = r.attr(n);
          if (typeof i == "string") {
            var o = gr(i), u = t.value ? !t.value.map(gr).includes(o) : !Pn(o);
            (o !== "" && u || i !== "" && !ae(i)) && a.push(n + '="' + r.attr(n) + '"');
          }
        }), !a.length || r.props.nodeName !== "html" && !io(r) ? !1 : (this.data(a), !0);
      }
      var I5 = N5;
      function P5(e, t, r) {
        var a = gr(r.attr("lang")), n = gr(r.attr("xml:lang"));
        return a === n;
      }
      var L5 = P5;
      function B5(e) {
        var t = He(e), r = t.nodeName.toUpperCase(), a = xe(t);
        return r === "DIV" && ["presentation", "none", null].includes(a) && (t = He(t), r = t.nodeName.toUpperCase(), a = xe(t)), r !== "DL" ? !1 : !!(!a || ["presentation", "none", "list"].includes(a));
      }
      var q5 = B5;
      function j5(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = [], n = [];
        if (r.children) {
          for (var i = sf(r.children); i.length; ) {
            var o, u = i.shift(), l = u.vChild, s = u.nested;
            if (t.divGroups && !s && V5(l)) {
              if (!l.children)
                return;
              var c = sf(l.children, !0);
              i.push.apply(i, re(c));
              continue;
            }
            var d = z5(l, s, t);
            d && (n.includes(d) || n.push(d), (l == null || (o = l.actualNode) === null || o === void 0 ? void 0 : o.nodeType) === 1 && a.push(l.actualNode));
          }
          return n.length === 0 ? !1 : (this.data({
            values: n.join(", ")
          }), this.relatedNodes(a), !0);
        }
      }
      function z5(e, t, r) {
        var a = r.validRoles, n = a === void 0 ? [] : a, i = r.validNodeNames, o = i === void 0 ? [] : i, u = e.props, l = u.nodeName, s = u.nodeType, c = u.nodeValue, d = t ? "div > " : "";
        if (s === 3 && c.trim() !== "")
          return d + "#text";
        if (s !== 1 || !Fe(e))
          return !1;
        var f = xe(e);
        return f ? n.includes(f) ? !1 : d + "[role=".concat(f, "]") : o.includes(l) ? !1 : d + l;
      }
      function V5(e) {
        return e.props.nodeName === "div" && xe(e) === null;
      }
      function sf(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return e.map(function(r) {
          return {
            vChild: r,
            nested: t
          };
        });
      }
      function H5(e, t, r) {
        var a = r.parent;
        if (a) {
          var n = a.props.nodeName, i = xe(a);
          return ["presentation", "none", "list"].includes(i) ? !0 : i && Tr(i) ? (this.data({
            messageKey: "roleNotValid"
          }), !1) : ["ul", "ol", "menu"].includes(n);
        }
      }
      function $5(e, t, r) {
        var a = ["definition", "term", "list"], n = {
          badNodes: [],
          hasNonEmptyTextNode: !1
        }, i = r.children.reduce(function(u, l) {
          var s = l.actualNode;
          return s.nodeName.toUpperCase() === "DIV" && ce(s) === null ? u.concat(l.children) : u.concat(l);
        }, []), o = i.reduce(function(u, l) {
          var s = l.actualNode, c = s.nodeName.toUpperCase();
          if (s.nodeType === 1 && Fe(s)) {
            var d = xe(s);
            (c !== "DT" && c !== "DD" || d) && (a.includes(d) || u.badNodes.push(s));
          } else
            s.nodeType === 3 && s.nodeValue.trim() !== "" && (u.hasNonEmptyTextNode = !0);
          return u;
        }, n);
        return o.badNodes.length && this.relatedNodes(o.badNodes), !!o.badNodes.length || o.hasNonEmptyTextNode;
      }
      function U5(e, t, r) {
        var a = !1, n = !1, i = !0, o = [], u = [], l = [];
        return r.children.forEach(function(s) {
          var c = s.actualNode;
          if (c.nodeType === 3 && c.nodeValue.trim() !== "") {
            a = !0;
            return;
          }
          if (!(c.nodeType !== 1 || !Fe(c))) {
            i = !1;
            var d = c.nodeName.toUpperCase() === "LI", f = ce(s), p = f === "listitem";
            !d && !p && o.push(c), d && !p && (u.push(c), l.includes(f) || l.push(f)), p && (n = !0);
          }
        }), a || o.length ? (this.relatedNodes(o), !0) : i || n ? !1 : (this.relatedNodes(u), this.data({
          messageKey: "roleNotValid",
          roles: l.join(", ")
        }), !0);
      }
      var G5 = U5;
      function W5(e, t, r) {
        var a = r.children;
        if (!a || !a.length)
          return !1;
        for (var n = !1, i = !1, o, u = 0; u < a.length; u++) {
          if (o = a[u].props.nodeName.toUpperCase(), o === "DT" && (n = !0), n && o === "DD")
            return !1;
          o === "DD" && (i = !0);
        }
        return n || i;
      }
      var Y5 = W5;
      function X5(e, t, r) {
        var a = st(r, "track"), n = a.some(function(i) {
          return (i.attr("kind") || "").toLowerCase() === "captions";
        });
        return n ? !1 : void 0;
      }
      var K5 = X5, cf = " > ";
      function Z5(e) {
        var t = {};
        return e.filter(function(r) {
          var a = r.node.ancestry[r.node.ancestry.length - 1] !== "html";
          if (a) {
            var n = r.node.ancestry.flat(1 / 0).join(cf);
            return t[n] = r, !0;
          }
          var i = r.node.ancestry.slice(0, r.node.ancestry.length - 1).flat(1 / 0).join(cf);
          return t[i] && (t[i].result = !0), !1;
        });
      }
      var J5 = Z5;
      function Q5(e, t) {
        return t.isViolation ? !1 : void 0;
      }
      var eE = Q5;
      function tE(e, t) {
        if (!e.duration) {
          console.warn("axe.utils.preloadMedia did not load metadata");
          return;
        }
        var r = t.allowedDuration, a = r === void 0 ? 3 : r, n = i(e);
        if (n <= a && !e.hasAttribute("loop"))
          return !0;
        if (!e.hasAttribute("controls"))
          return !1;
        return !0;
        function i(l) {
          if (!l.currentSrc)
            return 0;
          var s = o(l.currentSrc);
          return s ? s.length === 1 ? Math.abs(l.duration - s[0]) : Math.abs(s[1] - s[0]) : Math.abs(l.duration - (l.currentTime || 0));
        }
        function o(l) {
          var s = l.match(/#t=(.*)/);
          if (s) {
            var c = V(s, 2), d = c[1], f = d.split(",");
            return f.map(function(p) {
              return /:/.test(p) ? u(p) : parseFloat(p);
            });
          }
        }
        function u(l) {
          for (var s = l.split(":"), c = 0, d = 1; s.length > 0; )
            c += d * parseInt(s.pop(), 10), d *= 60;
          return parseFloat(c);
        }
      }
      var rE = tE;
      function aE(e, t, r, a) {
        var n = a || {}, i = n.cssom, o = i === void 0 ? void 0 : i, u = t || {}, l = u.degreeThreshold, s = l === void 0 ? 0 : l;
        if (!o || !o.length)
          return;
        for (var c = !1, d = [], f = v(o), p = function() {
          var H = h[m], z = f[H], Z = z.root, te = z.rules, Q = te.filter(g);
          if (!Q.length)
            return "continue";
          Q.forEach(function(W) {
            var B = W.cssRules;
            Array.from(B).forEach(function(ne) {
              var E = w(ne);
              if (E && ne.selectorText.toUpperCase() !== "HTML") {
                var U = Array.from(Z.querySelectorAll(ne.selectorText)) || [];
                d = d.concat(U);
              }
              c = c || E;
            });
          });
        }, m = 0, h = Object.keys(f); m < h.length; m++)
          var b = p();
        if (!c)
          return !0;
        return d.length && this.relatedNodes(d), !1;
        function v(j) {
          return j.reduce(function(H, z) {
            var Z = z.sheet, te = z.root, Q = z.shadowId, W = Q || "topDocument";
            if (H[W] || (H[W] = {
              root: te,
              rules: []
            }), !Z || !Z.cssRules)
              return H;
            var B = Array.from(Z.cssRules);
            return H[W].rules = H[W].rules.concat(B), H;
          }, {});
        }
        function g(j) {
          var H = j.type, z = j.cssText;
          return H !== 4 ? !1 : /orientation:\s*landscape/i.test(z) || /orientation:\s*portrait/i.test(z);
        }
        function w(j) {
          var H = j.selectorText, z = j.style;
          if (!H || z.length <= 0)
            return !1;
          var Z = z.transform || z.webkitTransform || z.msTransform || !1;
          if (!Z && !z.rotate)
            return !1;
          var te = D(Z), Q = F("rotate", z.rotate), W = te + Q;
          return !W || (W = Math.abs(W), Math.abs(W - 180) % 180 <= s) ? !1 : Math.abs(W - 90) % 90 <= s;
        }
        function D(j) {
          if (!j)
            return 0;
          var H = j.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/);
          if (!H)
            return 0;
          var z = V(H, 3), Z = z[1], te = z[2];
          return F(Z, te);
        }
        function F(j, H) {
          switch (j) {
            case "rotate":
            case "rotateZ":
              return R(H);
            case "rotate3d":
              var z = H.split(",").map(function(W) {
                return W.trim();
              }), Z = V(z, 4), te = Z[2], Q = Z[3];
              return parseInt(te) === 0 ? void 0 : R(Q);
            case "matrix":
            case "matrix3d":
              return S(H);
            default:
              return 0;
          }
        }
        function R(j) {
          var H = j.match(/(deg|grad|rad|turn)/) || [], z = V(H, 1), Z = z[0];
          if (!Z)
            return 0;
          var te = parseFloat(j.replace(Z, ""));
          switch (Z) {
            case "rad":
              return L(te);
            case "grad":
              return G(te);
            case "turn":
              return q(te);
            case "deg":
            default:
              return parseInt(te);
          }
        }
        function S(j) {
          var H = j.split(",");
          if (H.length <= 6) {
            var z = V(H, 2), Z = z[0], te = z[1], Q = Math.atan2(parseFloat(te), parseFloat(Z));
            return L(Q);
          }
          var W = parseFloat(H[8]), B = Math.asin(W), ne = Math.cos(B), E = Math.acos(parseFloat(H[0]) / ne);
          return L(E);
        }
        function L(j) {
          return Math.round(j * (180 / Math.PI));
        }
        function G(j) {
          return j = j % 400, j < 0 && (j += 400), Math.round(j / 400 * 360);
        }
        function q(j) {
          return Math.round(360 / (1 / j));
        }
      }
      var nE = aE;
      function iE(e, t, r) {
        var a = t || {}, n = a.scaleMinimum, i = n === void 0 ? 2 : n, o = a.lowerBound, u = o === void 0 ? !1 : o, l = r.attr("content") || "";
        if (!l)
          return !0;
        var s = l.split(/[;,]/).reduce(function(d, f) {
          var p = f.trim();
          if (!p)
            return d;
          var m = p.split("="), h = V(m, 2), b = h[0], v = h[1];
          if (!b || !v)
            return d;
          var g = b.toLowerCase().trim(), w = v.toLowerCase().trim();
          return g === "maximum-scale" && w === "yes" && (w = 1), g === "maximum-scale" && parseFloat(w) < 0 || (d[g] = w), d;
        }, {});
        if (u && s["maximum-scale"] && parseFloat(s["maximum-scale"]) < u)
          return !0;
        if (!u && s["user-scalable"] === "no")
          return this.data("user-scalable=no"), !1;
        var c = parseFloat(s["user-scalable"]);
        return !u && s["user-scalable"] && (c || c === 0) && c > -1 && c < 1 ? (this.data("user-scalable"), !1) : s["maximum-scale"] && parseFloat(s["maximum-scale"]) < i ? (this.data("maximum-scale"), !1) : !0;
      }
      var oE = iE, uE = 0.05;
      function lE(e, t, r) {
        var a = (t == null ? void 0 : t.minOffset) || 24, n = [], i = a, o = Ae(en(r, a)), u;
        try {
          for (o.s(); !(u = o.n()).done; ) {
            var l = u.value;
            if (!(Ft(l) !== "widget" || !ke(l))) {
              var s = sE(cs(r, l, a / 2)) * 2;
              s + uE >= a || (i = Math.min(i, s), n.push(l));
            }
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
        if (n.length === 0)
          return this.data({
            closestOffset: i,
            minOffset: a
          }), !0;
        if (this.relatedNodes(n.map(function(c) {
          var d = c.actualNode;
          return d;
        })), !n.some(yt)) {
          this.data({
            messageKey: "nonTabbableNeighbor",
            closestOffset: i,
            minOffset: a
          });
          return;
        }
        return this.data({
          closestOffset: i,
          minOffset: a
        }), yt(r) ? !1 : void 0;
      }
      function sE(e) {
        return Math.round(e * 10) / 10;
      }
      function cE(e, t, r) {
        var a = (t == null ? void 0 : t.minSize) || 24, n = r.boundingClientRect, i = lr.bind(null, a), o = en(r), u = dE(r, o), l = fE(r, o), s = l.fullyObscuringElms, c = l.partialObscuringElms;
        if (s.length && !u.length)
          return this.relatedNodes(Vn(s)), this.data({
            messageKey: "obscured"
          }), !0;
        var d = yt(r) ? !1 : void 0;
        if (!i(n) && !u.length)
          return this.data(fe({
            minSize: a
          }, su(n))), d;
        var f = hE(c), p = pE(r, f);
        if (u.length && (s.length || !i(p || n))) {
          this.data({
            minSize: a,
            messageKey: "contentOverflow"
          }), this.relatedNodes(Vn(u));
          return;
        }
        if (f.length !== 0 && !i(p)) {
          var m = f.every(yt), h = "partiallyObscured".concat(m ? "" : "NonTabbable");
          return this.data(fe({
            messageKey: h,
            minSize: a
          }, su(p))), this.relatedNodes(Vn(f)), m ? d : void 0;
        }
        return this.data(fe({
          minSize: a
        }, su(p || n))), this.relatedNodes(Vn(f)), !0;
      }
      function dE(e, t) {
        return t.filter(function(r) {
          return !df(r, e) && ff(e, r);
        });
      }
      function fE(e, t) {
        var r = [], a = [], n = Ae(t), i;
        try {
          for (n.s(); !(i = n.n()).done; ) {
            var o = i.value;
            !ff(e, o) && Oi(e, o) && vE(o) !== "none" && (df(e, o) ? r.push(o) : a.push(o));
          }
        } catch (u) {
          n.e(u);
        } finally {
          n.f();
        }
        return {
          fullyObscuringElms: r,
          partialObscuringElms: a
        };
      }
      function pE(e, t) {
        var r = e.boundingClientRect;
        if (t.length === 0)
          return null;
        var a = t.map(function(i) {
          var o = i.boundingClientRect;
          return o;
        }), n = Mi(r, a);
        return mE(n);
      }
      function mE(e, t) {
        return e.reduce(function(r, a) {
          var n = lr(t, r), i = lr(t, a);
          if (n !== i)
            return n ? r : a;
          var o = r.width * r.height, u = a.width * a.height;
          return o > u ? r : a;
        });
      }
      function hE(e) {
        return e.filter(function(t) {
          return Ft(t) === "widget" && ke(t);
        });
      }
      function df(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect;
        return r.top >= a.top && r.left >= a.left && r.bottom <= a.bottom && r.right <= a.right;
      }
      function vE(e) {
        return e.getComputedStylePropertyValue("pointer-events");
      }
      function su(e) {
        return {
          width: Math.round(e.width * 10) / 10,
          height: Math.round(e.height * 10) / 10
        };
      }
      function ff(e, t) {
        return e.actualNode.contains(t.actualNode) && !yt(t);
      }
      function Vn(e) {
        return e.map(function(t) {
          var r = t.actualNode;
          return r;
        });
      }
      function gE(e) {
        var t = yE(e);
        return e.forEach(function(r) {
          r.result = bE(r, t);
        }), e;
      }
      function bE(e, t) {
        var r, a, n, i, o = pf(t, e.node.ancestry), u = (r = (a = t[o]) === null || a === void 0 ? void 0 : a.level) !== null && r !== void 0 ? r : -1, l = (n = (i = t[o - 1]) === null || i === void 0 ? void 0 : i.level) !== null && n !== void 0 ? n : -1;
        if (o === 0)
          return !0;
        if (u !== -1)
          return u - l <= 1;
      }
      function yE(e) {
        e = re(e), e.sort(function(r, a) {
          var n = r.node, i = a.node;
          return n.ancestry.length - i.ancestry.length;
        });
        var t = e.reduce(wE, []);
        return t.filter(function(r) {
          var a = r.level;
          return a !== -1;
        });
      }
      function wE(e, t) {
        var r, a = (r = t.data) === null || r === void 0 ? void 0 : r.headingOrder, n = mf(t.node.ancestry, 1);
        if (!a)
          return e;
        var i = a.map(function(u) {
          return _E(u, n);
        }), o = DE(e, n);
        return o === -1 ? e.push.apply(e, re(i)) : e.splice.apply(e, [o, 0].concat(re(i))), e;
      }
      function DE(e, t) {
        for (; t.length; ) {
          var r = pf(e, t);
          if (r !== -1)
            return r;
          t = mf(t, 1);
        }
        return -1;
      }
      function pf(e, t) {
        return e.findIndex(function(r) {
          return $o(r.ancestry, t);
        });
      }
      function _E(e, t) {
        var r = t.concat(e.ancestry);
        return fe({}, e, {
          ancestry: r
        });
      }
      function mf(e, t) {
        return e.slice(0, e.length - t);
      }
      function xE(e) {
        var t = ce(e), r = t && t.includes("heading"), a = e.attr("aria-level"), n = parseInt(a, 10), i = e.props.nodeName.match(/h(\d)/) || [], o = V(i, 2), u = o[1];
        return r ? u && !a ? parseInt(u, 10) : isNaN(n) || n < 1 ? u ? parseInt(u, 10) : 2 : n || -1 : -1;
      }
      function EE() {
        var e = ue.get("headingOrder");
        if (e)
          return !0;
        var t = "h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame", r = Rt(y._tree[0], t, Fe);
        return e = r.map(function(a) {
          return {
            ancestry: [Ba(a.actualNode)],
            level: xE(a)
          };
        }), this.data({
          headingOrder: e
        }), ue.set("headingOrder", r), !0;
      }
      var CE = EE;
      function hf(e, t) {
        if (!e || !t)
          return !1;
        var r = Object.getOwnPropertyNames(e), a = Object.getOwnPropertyNames(t);
        if (r.length !== a.length)
          return !1;
        var n = r.every(function(i) {
          var o = e[i], u = t[i];
          return k(o) !== k(u) ? !1 : k(o) === "object" || k(u) === "object" ? hf(o, u) : o === u;
        });
        return n;
      }
      function AE(e) {
        if (e.length < 2)
          return e;
        for (var t = e.filter(function(u) {
          var l = u.result;
          return l !== void 0;
        }), r = [], a = {}, n = function(l) {
          var s, c = t[l], d = c.data, f = d.name, p = d.urlProps;
          if (a[f])
            return "continue";
          var m = t.filter(function(b, v) {
            var g = b.data;
            return g.name === f && v !== l;
          }), h = m.every(function(b) {
            var v = b.data;
            return hf(v.urlProps, p);
          });
          m.length && !h && (c.result = void 0), c.relatedNodes = [], (s = c.relatedNodes).push.apply(s, re(m.map(function(b) {
            return b.relatedNodes[0];
          }))), a[f] = m, r.push(c);
        }, i = 0; i < t.length; i++)
          var o = n(i);
        return r;
      }
      var FE = AE, vf = {};
      ht(vf, {
        aria: function() {
          return A1;
        },
        color: function() {
          return V1;
        },
        dom: function() {
          return Ti;
        },
        forms: function() {
          return gf;
        },
        matches: function() {
          return aa;
        },
        math: function() {
          return ls;
        },
        standards: function() {
          return j1;
        },
        table: function() {
          return yf;
        },
        text: function() {
          return ea;
        },
        utils: function() {
          return ni;
        }
      });
      var gf = {};
      ht(gf, {
        isAriaCombobox: function() {
          return ec;
        },
        isAriaListbox: function() {
          return Qs;
        },
        isAriaRange: function() {
          return tc;
        },
        isAriaTextbox: function() {
          return Js;
        },
        isDisabled: function() {
          return Da;
        },
        isNativeSelect: function() {
          return Zs;
        },
        isNativeTextbox: function() {
          return Ks;
        }
      });
      var TE = ["fieldset", "button", "select", "input", "textarea"];
      function bf(e) {
        var t = e._isDisabled;
        if (typeof t == "boolean")
          return t;
        var r = e.props.nodeName, a = e.attr("aria-disabled");
        return TE.includes(r) && e.hasAttr("disabled") ? t = !0 : a ? t = a.toLowerCase() === "true" : e.parent ? t = bf(e.parent) : t = !1, e._isDisabled = t, t;
      }
      var Da = bf, yf = {};
      ht(yf, {
        getAllCells: function() {
          return cu;
        },
        getCellPosition: function() {
          return an;
        },
        getHeaders: function() {
          return Hn;
        },
        getScope: function() {
          return Ui;
        },
        isColumnHeader: function() {
          return Rr;
        },
        isDataCell: function() {
          return Df;
        },
        isDataTable: function() {
          return $n;
        },
        isHeader: function() {
          return NE;
        },
        isRowHeader: function() {
          return kr;
        },
        toArray: function() {
          return Nt;
        },
        toGrid: function() {
          return Nt;
        },
        traverse: function() {
          return du;
        }
      });
      function RE(e) {
        var t, r, a, n, i = [];
        for (t = 0, a = e.rows.length; t < a; t++)
          for (r = 0, n = e.rows[t].cells.length; r < n; r++)
            i.push(e.rows[t].cells[r]);
        return i;
      }
      var cu = RE;
      function wf(e, t, r) {
        for (var a = e === "row" ? "_rowHeaders" : "_colHeaders", n = e === "row" ? kr : Rr, i = r[t.y][t.x], o = i.colSpan - 1, u = i.getAttribute("rowspan"), l = parseInt(u) === 0 || i.rowspan === 0 ? r.length : i.rowSpan, s = l - 1, c = t.y + s, d = t.x + o, f = e === "row" ? t.y : 0, p = e === "row" ? 0 : t.x, m, h = [], b = c; b >= f && !m; b--)
          for (var v = d; v >= p; v--) {
            var g = r[b] ? r[b][v] : void 0;
            if (g) {
              var w = y.utils.getNodeFromTree(g);
              if (w[a]) {
                m = w[a];
                break;
              }
              h.push(g);
            }
          }
        return m = (m || []).concat(h.filter(n)), h.forEach(function(D) {
          var F = y.utils.getNodeFromTree(D);
          F[a] = m;
        }), m;
      }
      function kE(e, t) {
        if (e.getAttribute("headers")) {
          var r = Et(e, "headers");
          if (r.filter(function(o) {
            return o;
          }).length)
            return r;
        }
        t || (t = Nt(Ar(e, "table")));
        var a = an(e, t), n = wf("row", a, t), i = wf("col", a, t);
        return [].concat(n, i).reverse();
      }
      var Hn = kE;
      function SE(e) {
        if (!e.children.length && !e.textContent.trim())
          return !1;
        var t = e.getAttribute("role");
        return Tr(t) ? ["cell", "gridcell"].includes(t) : e.nodeName.toUpperCase() === "TD";
      }
      var Df = SE;
      function OE(e) {
        var t = (e.getAttribute("role") || "").toLowerCase();
        if ((t === "presentation" || t === "none") && !ke(e))
          return !1;
        if (e.getAttribute("contenteditable") === "true" || Ar(e, '[contenteditable="true"]') || t === "grid" || t === "treegrid" || t === "table" || Ft(t) === "landmark")
          return !0;
        if (e.getAttribute("datatable") === "0")
          return !1;
        if (e.getAttribute("summary") || e.tHead || e.tFoot || e.caption)
          return !0;
        for (var r = 0, a = e.children.length; r < a; r++)
          if (e.children[r].nodeName.toUpperCase() === "COLGROUP")
            return !0;
        for (var n = 0, i = e.rows.length, o, u, l = !1, s = 0; s < i; s++) {
          o = e.rows[s];
          for (var c = 0, d = o.cells.length; c < d; c++) {
            if (u = o.cells[c], u.nodeName.toUpperCase() === "TH" || (!l && (u.offsetWidth !== u.clientWidth || u.offsetHeight !== u.clientHeight) && (l = !0), u.getAttribute("scope") || u.getAttribute("headers") || u.getAttribute("abbr")) || ["columnheader", "rowheader"].includes((u.getAttribute("role") || "").toLowerCase()) || u.children.length === 1 && u.children[0].nodeName.toUpperCase() === "ABBR")
              return !0;
            n++;
          }
        }
        if (e.getElementsByTagName("table").length || i < 2)
          return !1;
        var f = e.rows[Math.ceil(i / 2)];
        if (f.cells.length === 1 && f.cells[0].colSpan === 1)
          return !1;
        if (f.cells.length >= 5 || l)
          return !0;
        var p, m;
        for (s = 0; s < i; s++) {
          if (o = e.rows[s], p && p !== _.getComputedStyle(o).getPropertyValue("background-color") || (p = _.getComputedStyle(o).getPropertyValue("background-color"), m && m !== _.getComputedStyle(o).getPropertyValue("background-image")))
            return !0;
          m = _.getComputedStyle(o).getPropertyValue("background-image");
        }
        return i >= 20 ? !0 : !(ki(e).width > Ya(_).width * 0.95 || n < 10 || e.querySelector("object, embed, iframe, applet"));
      }
      var $n = OE;
      function ME(e) {
        if (Rr(e) || kr(e))
          return !0;
        if (e.getAttribute("id")) {
          var t = Re(e.getAttribute("id"));
          return !!M.querySelector('[headers~="'.concat(t, '"]'));
        }
        return !1;
      }
      var NE = ME;
      function _f(e, t, r, a) {
        var n, i = r[t.y] ? r[t.y][t.x] : void 0;
        return i ? typeof a == "function" && (n = a(i, t, r), n === !0) ? [i] : (n = _f(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a), n.unshift(i), n) : [];
      }
      function IE(e, t, r, a) {
        if (Array.isArray(t) && (a = r, r = t, t = {
          x: 0,
          y: 0
        }), typeof e == "string")
          switch (e) {
            case "left":
              e = {
                x: -1,
                y: 0
              };
              break;
            case "up":
              e = {
                x: 0,
                y: -1
              };
              break;
            case "right":
              e = {
                x: 1,
                y: 0
              };
              break;
            case "down":
              e = {
                x: 0,
                y: 1
              };
              break;
          }
        return _f(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a);
      }
      var du = IE;
      function PE(e, t, r) {
        var a = ea.accessibleTextVirtual(r), n = ea.sanitize(ea.removeUnicode(a, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        })).toLowerCase();
        if (n) {
          var i = {
            name: n,
            urlProps: Ti.urlPropsFromAttribute(e, "href")
          };
          return this.data(i), this.relatedNodes([e]), !0;
        }
      }
      var LE = PE;
      function BE(e, t, r) {
        var a = st(r, "a[href]");
        return a.some(function(n) {
          return /^#[^/!]/.test(n.attr("href"));
        });
      }
      var qE = BE, jE = /[;,\s]/, zE = /^[0-9.]+$/;
      function VE(e, t, r) {
        var a = t || {}, n = a.minDelay, i = a.maxDelay, o = (r.attr("content") || "").trim(), u = o.split(jE), l = V(u, 1), s = l[0];
        if (!s.match(zE))
          return !0;
        var c = parseFloat(s);
        return this.data({
          redirectDelay: c
        }), typeof n == "number" && c <= t.minDelay || typeof i == "number" && c > t.maxDelay;
      }
      function HE(e) {
        switch (e) {
          case "lighter":
            return 100;
          case "normal":
            return 400;
          case "bold":
            return 700;
          case "bolder":
            return 900;
        }
        return e = parseInt(e), isNaN(e) ? 400 : e;
      }
      function $E(e) {
        for (var t = e, r = e.textContent.trim(), a = r; a === r && t !== void 0; ) {
          var n = -1;
          if (e = t, e.children.length === 0)
            return e;
          do
            n++, a = e.children[n].textContent.trim();
          while (a === "" && n + 1 < e.children.length);
          t = e.children[n];
        }
        return e;
      }
      function fu(e) {
        var t = _.getComputedStyle($E(e));
        return {
          fontWeight: HE(t.getPropertyValue("font-weight")),
          fontSize: parseInt(t.getPropertyValue("font-size")),
          isItalic: t.getPropertyValue("font-style") === "italic"
        };
      }
      function xf(e, t, r) {
        return r.reduce(function(a, n) {
          return a || (!n.size || e.fontSize / n.size > t.fontSize) && (!n.weight || e.fontWeight - n.weight > t.fontWeight) && (!n.italic || e.isItalic && !t.isItalic);
        }, !1);
      }
      function UE(e, t, r) {
        var a = Array.from(e.parentNode.children), n = a.indexOf(e);
        t = t || {};
        var i = t.margins || [], o = a.slice(n + 1).find(function(b) {
          return b.nodeName.toUpperCase() === "P";
        }), u = a.slice(0, n).reverse().find(function(b) {
          return b.nodeName.toUpperCase() === "P";
        }), l = fu(e), s = o ? fu(o) : null, c = u ? fu(u) : null, d = t.passLength, f = t.failLength, p = e.textContent.trim().length, m = o == null ? void 0 : o.textContent.trim().length;
        if (p > m * d || !s || !xf(l, s, i))
          return !0;
        var h = Cr(r, "blockquote");
        if (!(h && h.nodeName.toUpperCase() === "BLOCKQUOTE") && !(c && !xf(l, c, i)) && !(p > m * f))
          return !1;
      }
      var GE = UE;
      function WE(e) {
        var t = e.filter(function(r) {
          return r.data.isIframe;
        });
        return e.forEach(function(r) {
          if (!(r.result || r.node.ancestry.length === 1)) {
            var a = r.node.ancestry.slice(0, -1), n = Ae(t), i;
            try {
              for (n.s(); !(i = n.n()).done; ) {
                var o = i.value;
                if ($o(a, o.node.ancestry)) {
                  r.result = o.result;
                  break;
                }
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
          }
        }), t.forEach(function(r) {
          r.result || (r.result = !0);
        }), e;
      }
      var YE = WE, XE = ["alert", "log", "status"];
      function KE(e, t, r) {
        this.data({
          isIframe: ["iframe", "frame"].includes(r.props.nodeName)
        });
        var a = ue.get("regionlessNodes", function() {
          return ZE(t);
        });
        return !a.includes(r);
      }
      function ZE(e) {
        var t = Ef(y._tree[0], e).map(function(r) {
          for (; r.parent && !r.parent._hasRegionDescendant && r.parent.actualNode !== M.body; )
            r = r.parent;
          return r;
        }).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
        return t;
      }
      function Ef(e, t) {
        var r = e.actualNode;
        if (ce(e) === "button" || JE(e, t) || ["iframe", "frame"].includes(e.props.nodeName) || ko(e.actualNode) && qi(e.actualNode, "href") || !Fe(r)) {
          for (var a = e; a; )
            a._hasRegionDescendant = !0, a = a.parent;
          return ["iframe", "frame"].includes(e.props.nodeName) ? [e] : [];
        } else
          return r !== M.body && sn(r, !0) ? [e] : e.children.filter(function(n) {
            var i = n.actualNode;
            return i.nodeType === 1;
          }).map(function(n) {
            return Ef(n, t);
          }).reduce(function(n, i) {
            return n.concat(i);
          }, []);
      }
      function JE(e, t) {
        var r = e.actualNode, a = ce(e), n = (r.getAttribute("aria-live") || "").toLowerCase().trim(), i = Mr("landmark");
        return !!(["assertive", "polite"].includes(n) || XE.includes(a) || i.includes(a) || t.regionMatcher && aa(e, t.regionMatcher));
      }
      function QE(e) {
        var t = qi(e, "href");
        return t ? Fe(t) || void 0 : !1;
      }
      var eC = QE;
      function tC(e) {
        var t = {};
        return e.forEach(function(r) {
          t[r.data] = t[r.data] !== void 0 ? ++t[r.data] : 0;
        }), e.forEach(function(r) {
          r.result = !!t[r.data];
        }), e;
      }
      var rC = tC;
      function aC(e, t, r) {
        var a = ae(r.attr("title")).toLowerCase();
        return this.data(a), !0;
      }
      var nC = aC;
      function iC(e) {
        var t = [];
        return e.filter(function(r) {
          return t.indexOf(r.data) === -1 ? (t.push(r.data), !0) : !1;
        });
      }
      var oC = iC;
      function uC(e) {
        var t = e.getAttribute("id").trim();
        if (!t)
          return !0;
        var r = We(e), a = Array.from(r.querySelectorAll('[id="'.concat(Re(t), '"]'))).filter(function(n) {
          return n !== e;
        });
        return a.length && this.relatedNodes(a), this.data(t), a.length === 0;
      }
      var lC = uC;
      function sC(e, t, r) {
        return !!ae(ra(r));
      }
      var cC = sC;
      function dC(e, t, r) {
        try {
          return !!ae(ta(r));
        } catch {
          return;
        }
      }
      var fC = dC;
      function pC(e, t) {
        var r = t.cssProperties.filter(function(a) {
          if (e.style.getPropertyPriority(a) === "important")
            return a;
        });
        return r.length > 0 ? (this.data(r), !1) : !0;
      }
      var mC = pC;
      function hC() {
        var e = M.title;
        return !!ae(e);
      }
      var vC = hC;
      function gC() {
      }
      var bC = gC;
      function yC(e, t, r) {
        var a = r.props.nodeName;
        return ["img", "input", "area"].includes(a) ? r.hasAttr("alt") : !1;
      }
      var wC = yC;
      function DC(e, t) {
        var r = t.cssProperty, a = t.absoluteValues, n = t.minValue, i = t.maxValue, o = t.normalValue, u = o === void 0 ? 0 : o, l = t.noImportant, s = t.multiLineOnly;
        if (!l && e.style.getPropertyPriority(r) !== "important" || s && !_c(e))
          return !0;
        var c = {};
        typeof n == "number" && (c.minValue = n), typeof i == "number" && (c.maxValue = i);
        var d = e.style.getPropertyValue(r);
        if (["inherit", "unset", "revert", "revert-layer"].includes(d))
          return this.data(fe({
            value: d
          }, c)), !0;
        var f = _C(e, {
          absoluteValues: a,
          cssProperty: r,
          normalValue: u
        });
        if (this.data(fe({
          value: f
        }, c)), typeof f == "number")
          return (typeof n != "number" || f >= n) && (typeof i != "number" || f <= i);
      }
      function _C(e, t) {
        var r = t.cssProperty, a = t.absoluteValues, n = t.normalValue, i = _.getComputedStyle(e), o = i.getPropertyValue(r);
        if (o === "normal")
          return n;
        var u = parseFloat(o);
        if (a)
          return u;
        var l = parseFloat(i.getPropertyValue("font-size")), s = Math.round(u / l * 100) / 100;
        return isNaN(s) ? o : s;
      }
      function xC(e) {
        return nt(e);
      }
      var EC = xC;
      function CC(e, t, r) {
        var a = r.props.nodeName, n = (r.attr("type") || "").toLowerCase(), i = r.attr("value");
        return i && this.data({
          messageKey: "has-label"
        }), a === "input" && ["submit", "reset"].includes(n) ? i === null : !1;
      }
      var AC = CC;
      function FC(e, t, r) {
        var a = xe(r);
        if (["presentation", "none"].includes(a) && ["iframe", "frame"].includes(r.props.nodeName) && r.hasAttr("title"))
          return this.data({
            messageKey: "iframe",
            nodeName: r.props.nodeName
          }), !1;
        var n = ce(r);
        if (["presentation", "none"].includes(n))
          return this.data({
            role: n
          }), !0;
        if (!["presentation", "none"].includes(a))
          return !1;
        var i = dr().some(function(l) {
          return r.hasAttr(l);
        }), o = ke(r), u;
        return i && !o ? u = "globalAria" : !i && o ? u = "focusable" : u = "both", this.data({
          messageKey: u,
          role: n
        }), !1;
      }
      function TC(e, t, r) {
        if (r.children) {
          var a = r.children.find(function(i) {
            var o = i.props;
            return o.nodeName === "title";
          });
          if (!a)
            return this.data({
              messageKey: "noTitle"
            }), !1;
          try {
            var n = Vt(a, {
              includeHidden: !0
            }).trim();
            if (n === "")
              return this.data({
                messageKey: "emptyTitle"
              }), !1;
          } catch {
            return;
          }
          return !0;
        }
      }
      var RC = TC;
      function kC(e) {
        var t = Nt(e), r = t[0];
        return t.length <= 1 || r.length <= 1 || e.rows.length <= 1 ? !0 : r.reduce(function(a, n, i) {
          return a || n !== r[i + 1] && r[i + 1] !== void 0;
        }, !1);
      }
      var SC = kC;
      function OC(e) {
        return yc(M) ? e.nodeName.toUpperCase() === "TH" : !0;
      }
      var MC = OC, NC = IC;
      function IC(e, t, r) {
        if (r.children !== void 0) {
          var a = r.attr("summary"), n = r.children.find(PC), i = n ? ae(Vt(n)) : !1;
          return !i || !a ? !1 : ae(a).toLowerCase() === ae(i).toLowerCase();
        }
      }
      function PC(e) {
        return e.props.nodeName === "caption";
      }
      function LC(e, t) {
        var r = e.getAttribute("scope").toLowerCase();
        return t.values.indexOf(r) !== -1;
      }
      var BC = LC;
      function qC(e) {
        var t = [], r = cu(e), a = Nt(e);
        return r.forEach(function(n) {
          if (sn(n) && Df(n) && !N1(n)) {
            var i = Hn(n, a).some(function(o) {
              return o !== null && !!sn(o);
            });
            i || t.push(n);
          }
        }), t.length ? (this.relatedNodes(t), !1) : !0;
      }
      var jC = qC;
      function zC(e) {
        for (var t = [], r = [], a = [], n = 0; n < e.rows.length; n++)
          for (var i = e.rows[n], o = 0; o < i.cells.length; o++)
            t.push(i.cells[o]);
        var u = t.filter(function(l) {
          return l.getAttribute("id");
        }).map(function(l) {
          return l.getAttribute("id");
        });
        if (t.forEach(function(l) {
          var s = !1, c = !1;
          if (!(!l.hasAttribute("headers") || !Fe(l))) {
            var d = l.getAttribute("headers").trim();
            if (!d)
              return r.push(l);
            var f = Ye(d);
            f.length !== 0 && (l.getAttribute("id") && (s = f.indexOf(l.getAttribute("id").trim()) !== -1), c = f.some(function(p) {
              return !u.includes(p);
            }), (s || c) && a.push(l));
          }
        }), a.length > 0)
          return this.relatedNodes(a), !1;
        if (r.length) {
          this.relatedNodes(r);
          return;
        }
        return !0;
      }
      function VC(e) {
        var t = cu(e), r = this, a = [];
        t.forEach(function(u) {
          var l = u.getAttribute("headers");
          l && (a = a.concat(l.split(/\s+/)));
          var s = u.getAttribute("aria-labelledby");
          s && (a = a.concat(s.split(/\s+/)));
        });
        var n = t.filter(function(u) {
          return ae(u.textContent) === "" ? !1 : u.nodeName.toUpperCase() === "TH" || ["rowheader", "columnheader"].indexOf(u.getAttribute("role")) !== -1;
        }), i = Nt(e), o = !0;
        return n.forEach(function(u) {
          if (!(u.getAttribute("id") && a.includes(u.getAttribute("id")))) {
            var l = an(u, i), s = !1;
            Rr(u) && (s = du("down", l, i).find(function(c) {
              return !Rr(c) && Hn(c, i).includes(u);
            })), !s && kr(u) && (s = du("right", l, i).find(function(c) {
              return !kr(c) && Hn(c, i).includes(u);
            })), s || r.relatedNodes(u), o = o && s;
          }
        }), o ? !0 : void 0;
      }
      var HC = VC;
      function $C(e, t, r) {
        var a = ["SCRIPT", "HEAD", "TITLE", "NOSCRIPT", "STYLE", "TEMPLATE"];
        if (!a.includes(e.nodeName.toUpperCase()) && oa(r)) {
          var n = _.getComputedStyle(e);
          if (n.getPropertyValue("display") === "none")
            return;
          if (n.getPropertyValue("visibility") === "hidden") {
            var i = He(e), o = i && _.getComputedStyle(i);
            if (!o || o.getPropertyValue("visibility") !== "hidden")
              return;
          }
        }
        return !0;
      }
      var UC = $C;
      function GC(e, t) {
        var r = /^aria-/, a = t.attrNames;
        if (a.length) {
          for (var n = 0, i = a.length; n < i; n++)
            if (r.test(a[n]))
              return !0;
        }
        return !1;
      }
      var WC = GC;
      function YC(e, t) {
        return xe(t, {
          dpub: !0,
          fallback: !0
        }) !== null;
      }
      var XC = YC;
      function KC(e, t) {
        var r = /^aria-/;
        return t.attrNames.some(function(a) {
          return r.test(a);
        });
      }
      var ZC = KC;
      function Cf(e) {
        return e ? e.getAttribute("aria-hidden") === "true" ? !1 : Cf(He(e)) : !0;
      }
      function JC(e) {
        return Cf(He(e));
      }
      var QC = JC;
      function eA(e, t) {
        var r = xe(t, {
          dpub: !0
        });
        return !!ru(r);
      }
      var tA = eA;
      function rA(e, t) {
        var r = xe(t);
        return !!tu(r);
      }
      var aA = rA;
      function nA(e, t) {
        var r = t.attr("autocomplete");
        if (!r || ae(r) === "")
          return !1;
        var a = t.props.nodeName;
        if (["textarea", "input", "select"].includes(a) === !1)
          return !1;
        var n = ["submit", "reset", "button", "hidden"];
        if (a === "input" && n.includes(t.props.type))
          return !1;
        var i = t.attr("aria-disabled") || "false";
        if (t.hasAttr("disabled") || i.toLowerCase() === "true")
          return !1;
        var o = t.attr("role"), u = t.attr("tabindex");
        if (u === "-1" && o) {
          var l = he.ariaRoles[o];
          if (l === void 0 || l.type !== "widget")
            return !1;
        }
        return !(u === "-1" && t.actualNode && !nt(t) && !Fe(t));
      }
      var iA = nA;
      function oA(e, t, r) {
        return r.initiator;
      }
      var Af = oA;
      function uA(e, t, r) {
        return Af(e, t, r) ? !!e.querySelector("a[href]") : !0;
      }
      var lA = uA;
      function sA(e, t) {
        var r = t.props, a = r.nodeName, n = r.type;
        if (a === "option" || a === "select" && !e.options.length)
          return !1;
        var i = ["hidden", "range", "color", "checkbox", "radio", "image"];
        if (a === "input" && i.includes(n) || Da(t) || tn(t))
          return !1;
        var o = ["input", "select", "textarea"];
        if (o.includes(a)) {
          var u = _.getComputedStyle(e), l = parseInt(u.getPropertyValue("text-indent"), 10);
          if (l) {
            var s = e.getBoundingClientRect();
            if (s = {
              top: s.top,
              bottom: s.bottom,
              left: s.left + l,
              right: s.right + l
            }, !So(s, e))
              return !1;
          }
          return !0;
        }
        var c = Cr(t, "label");
        if (a === "label" || c) {
          var d = c || e, f = c ? le(c) : t;
          if (d.htmlFor) {
            var p = We(d), m = p.getElementById(d.htmlFor), h = m && le(m);
            if (h && Da(h))
              return !1;
          }
          var b = 'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea', v = st(f, b)[0];
          if (v && Da(v))
            return !1;
        }
        for (var g = [], w = t; w; ) {
          if (w.props.id) {
            var D = Jo(w).filter(function(j) {
              return Ye(j.getAttribute("aria-labelledby") || "").includes(w.props.id);
            }).map(function(j) {
              return le(j);
            });
            g.push.apply(g, re(D));
          }
          w = w.parent;
        }
        if (g.length > 0 && g.every(Da) || !fA(t))
          return !1;
        for (var F = M.createRange(), R = t.children, S = 0; S < R.length; S++) {
          var L = R[S];
          L.actualNode.nodeType === 3 && ae(L.actualNode.nodeValue) !== "" && F.selectNodeContents(L.actualNode);
        }
        for (var G = F.getClientRects(), q = 0; q < G.length; q++)
          if (So(G[q], e))
            return !0;
        return !1;
      }
      var cA = sA, dA = {
        emoji: !0,
        nonBmp: !1,
        punctuations: !0
      };
      function fA(e) {
        var t = At(e, !1, !0);
        return t === "" || ia(t, dA) === "" ? !1 : e.children.some(function(r) {
          return r.props.nodeName === "#text" && !eo(r);
        });
      }
      function pA(e) {
        if ($n(e)) {
          var t = Nt(e);
          return t.length >= 3 && t[0].length >= 3 && t[1].length >= 3 && t[2].length >= 3;
        }
        return !1;
      }
      var mA = pA;
      function hA(e) {
        return $n(e);
      }
      var vA = hA;
      function gA(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(Re(t), '"]'), a = Array.from(We(e).querySelectorAll(r));
        return !Ln(e) && a.some(ke);
      }
      var bA = gA;
      function yA(e) {
        return Ln(e);
      }
      var wA = yA;
      function DA(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(Re(t), '"]'), a = Array.from(We(e).querySelectorAll(r));
        return !Ln(e) && a.every(function(n) {
          return !ke(n);
        });
      }
      var _A = DA;
      function xA(e, t, r) {
        var a, n;
        return !r.initiator && !r.focusable && ((a = r.size) === null || a === void 0 ? void 0 : a.width) * ((n = r.size) === null || n === void 0 ? void 0 : n.height) > 1;
      }
      var EA = xA;
      function CA(e) {
        var t = e.getAttribute("title");
        return !!ae(t);
      }
      var AA = CA;
      function FA(e, t) {
        return Ct(t, {
          chromium: !0
        }) !== null;
      }
      var TA = FA;
      function RA(e, t) {
        return ce(t) === "heading";
      }
      function kA(e, t) {
        try {
          var r = t.props.nodeName;
          return r === "svg" ? !0 : !!at(t, "svg");
        } catch {
          return !1;
        }
      }
      var pu = kA;
      function SA(e, t) {
        return !pu(e, t);
      }
      var OA = SA;
      function MA(e, t) {
        var r = !!$e(t);
        if (!r)
          return !1;
        var a = ce(e);
        return !(a && a !== "link");
      }
      var NA = MA;
      function IA(e) {
        return vc(e);
      }
      var PA = IA;
      function LA(e) {
        return nt(e);
      }
      function BA(e, t) {
        return nt(t);
      }
      function qA(e, t) {
        var r = ce(e);
        if (!r)
          return !1;
        var a = Mr("widget"), n = a.includes(r);
        if (!n)
          return !1;
        var i = Qo();
        return !(!i.includes(r) || !ae(ra(t)) && !ae(ta(e)) || !ae(At(t)));
      }
      var jA = qA;
      function zA(e, t) {
        if (t.props.nodeName !== "input" || t.hasAttr("type") === !1)
          return !0;
        var r = t.attr("type").toLowerCase();
        return ["hidden", "image", "button", "submit", "reset"].includes(r) === !1;
      }
      var VA = zA;
      function HA(e, t) {
        var r = "article, aside, main, nav, section";
        return e.hasAttribute("role") || !Cr(t, r);
      }
      var $A = HA, UA = ["article", "aside", "main", "nav", "section"].join(",");
      function GA(e, t) {
        return WA(t) && Fe(t);
      }
      function WA(e) {
        var t = Mr("landmark"), r = ce(e);
        if (!r)
          return !1;
        var a = e.props.nodeName;
        if (a === "header" || a === "footer")
          return YA(e);
        if (a === "section" || a === "form") {
          var n = $e(e);
          return !!n;
        }
        return t.indexOf(r) >= 0 || r === "region";
      }
      function YA(e) {
        return !at(e, UA);
      }
      function XA(e) {
        return !$n(e) && !ke(e);
      }
      var KA = XA;
      function ZA(e) {
        var t = ae(e.innerText), r = e.getAttribute("role");
        return r && r !== "link" || !t || !nt(e) ? !1 : oo(e);
      }
      var JA = ZA;
      function QA(e, t) {
        var r = ce(t);
        return r ? !!he.ariaRoles[r].childrenPresentational : !1;
      }
      var e3 = QA;
      function t3(e) {
        return !(!e.currentSrc || e.hasAttribute("paused") || e.hasAttribute("muted"));
      }
      var r3 = t3;
      function a3(e, t) {
        return !(!t.hasAttr("role") || !t.attr("role").trim());
      }
      var n3 = a3;
      function i3(e, t) {
        var r = xe(t);
        if (!r || ["none", "presentation"].includes(r))
          return !0;
        var a = Rs[r] || {}, n = a.accessibleNameRequired;
        return !!(n || ke(t));
      }
      var Ff = i3;
      function o3(e, t) {
        var r = pr(t), a = r.namingMethods;
        return !(a && a.length !== 0 || xe(t) === "combobox" && st(t, 'input:not([type="hidden"])').length || eu(t, {
          popupRoles: ["listbox"]
        }));
      }
      var u3 = o3;
      function l3(e, t) {
        var r = parseInt(t.attr("tabindex"), 10);
        return isNaN(r) || r >= 0;
      }
      var s3 = l3;
      function c3(e, t) {
        return !t.attr("role");
      }
      var d3 = c3;
      function f3(e, t) {
        return t.props.nodeName !== "html";
      }
      var p3 = f3, m3 = function(t, r) {
        return [Ff, h3].every(function(a) {
          return a(t, r);
        });
      };
      function h3(e) {
        var t;
        if (!(e != null && (t = e.ownerDocument) !== null && t !== void 0 && t.createRange))
          return !0;
        var r = e.ownerDocument.createRange();
        return r.setStart(e, 0), r.setEnd(e, e.childNodes.length), r.getClientRects().length === 0;
      }
      function v3(e) {
        var t = Array.from(e.parentNode.childNodes), r = e.textContent.trim(), a = /[.!?:;](?![.!?:;])/g;
        if (r.length === 0 || (r.match(a) || []).length >= 2)
          return !1;
        var n = t.slice(t.indexOf(e) + 1).filter(function(i) {
          return i.nodeName.toUpperCase() === "P" && i.textContent.trim() !== "";
        });
        return n.length !== 0;
      }
      var g3 = v3;
      function b3(e, t) {
        return Ct(t, {
          chromiumRoles: !0
        }) !== null;
      }
      var y3 = b3;
      function w3(e, t) {
        return Pt(e, 13) !== void 0 && eu(t) === !1 && D3(t);
      }
      function D3(e) {
        return st(e, "*").some(function(t) {
          return oa(t, !0, !0);
        });
      }
      function _3(e) {
        return ko(e) && Xa(e);
      }
      var x3 = _3;
      function E3(e, t) {
        var r = ce(t);
        return ["treegrid", "grid", "table"].includes(r);
      }
      function C3(e, t) {
        return A3.every(function(r) {
          return r(e, t);
        });
      }
      var A3 = [function(e, t) {
        return Tf(t);
      }, function(e, t) {
        return F3(t);
      }, function(e, t) {
        return !pu(e, t);
      }, function(e, t) {
        return ke(t);
      }, function(e, t) {
        return yt(t) || !T3(t);
      }, function(e) {
        return !oo(e, {
          noLengthCompare: !0
        });
      }];
      function Tf(e) {
        return Ft(e) === "widget";
      }
      function F3(e) {
        return e.props.nodeName !== "area";
      }
      var T3 = Le(function e(t) {
        return t != null && t.parent ? Tf(t.parent) && yt(t.parent) ? !0 : e(t.parent) : !1;
      });
      function R3(e) {
        return e.ownerDocument.defaultView.self === e.ownerDocument.defaultView.top;
      }
      var k3 = R3;
      function S3(e) {
        var t = gr(e.getAttribute("lang")), r = gr(e.getAttribute("xml:lang"));
        return Pn(t) && Pn(r);
      }
      var O3 = S3, M3 = {
        "abstractrole-evaluate": ND,
        "accesskeys-after": Vx,
        "accesskeys-evaluate": $x,
        "alt-space-value-evaluate": d5,
        "aria-allowed-attr-evaluate": ID,
        "aria-allowed-attr-matches": WC,
        "aria-allowed-role-evaluate": LD,
        "aria-allowed-role-matches": XC,
        "aria-busy-evaluate": BD,
        "aria-conditional-attr-evaluate": VD,
        "aria-conditional-checkbox-attr-evaluate": L1,
        "aria-conditional-row-attr-evaluate": B1,
        "aria-errormessage-evaluate": HD,
        "aria-has-attr-matches": ZC,
        "aria-hidden-body-evaluate": UD,
        "aria-hidden-focus-matches": QC,
        "aria-label-evaluate": cC,
        "aria-labelledby-evaluate": fC,
        "aria-level-evaluate": WD,
        "aria-prohibited-attr-evaluate": YD,
        "aria-required-attr-evaluate": KD,
        "aria-required-children-evaluate": e_,
        "aria-required-children-matches": tA,
        "aria-required-parent-evaluate": l_,
        "aria-required-parent-matches": aA,
        "aria-roledescription-evaluate": c_,
        "aria-unsupported-attr-evaluate": f_,
        "aria-valid-attr-evaluate": m_,
        "aria-valid-attr-value-evaluate": h_,
        "attr-non-space-content-evaluate": Rx,
        "autocomplete-appropriate-evaluate": Cx,
        "autocomplete-matches": iA,
        "autocomplete-valid-evaluate": Fx,
        "avoid-inline-spacing-evaluate": mC,
        "braille-label-equivalent-evaluate": g_,
        "braille-roledescription-equivalent-evaluate": b_,
        "bypass-matches": lA,
        "caption-evaluate": K5,
        "caption-faked-evaluate": SC,
        "color-contrast-evaluate": hx,
        "color-contrast-matches": cA,
        "css-orientation-lock-evaluate": nE,
        "data-table-large-matches": mA,
        "data-table-matches": vA,
        "deprecatedrole-evaluate": y_,
        "dlitem-evaluate": q5,
        "doc-has-title-evaluate": vC,
        "duplicate-id-active-matches": bA,
        "duplicate-id-after": oC,
        "duplicate-id-aria-matches": wA,
        "duplicate-id-evaluate": lC,
        "duplicate-id-misc-matches": _A,
        "duplicate-img-label-evaluate": p5,
        "exists-evaluate": bC,
        "explicit-evaluate": h5,
        "fallbackrole-evaluate": __,
        "focusable-content-evaluate": Gx,
        "focusable-disabled-evaluate": Yx,
        "focusable-element-evaluate": Kx,
        "focusable-modal-open-evaluate": Jx,
        "focusable-no-name-evaluate": e5,
        "focusable-not-tabbable-evaluate": r5,
        "frame-focusable-content-evaluate": a5,
        "frame-focusable-content-matches": EA,
        "frame-tested-after": J5,
        "frame-tested-evaluate": eE,
        "frame-title-has-text-matches": AA,
        "has-alt-evaluate": wC,
        "has-descendant-after": Sx,
        "has-descendant-evaluate": Mx,
        "has-global-aria-attribute-evaluate": E_,
        "has-implicit-chromium-role-matches": TA,
        "has-lang-evaluate": M5,
        "has-text-content-evaluate": Nx,
        "has-widget-role-evaluate": A_,
        "heading-matches": RA,
        "heading-order-after": gE,
        "heading-order-evaluate": CE,
        "help-same-as-label-evaluate": g5,
        "hidden-content-evaluate": UC,
        "hidden-explicit-label-evaluate": y5,
        "html-namespace-matches": OA,
        "html5-scope-evaluate": MC,
        "identical-links-same-purpose-after": FE,
        "identical-links-same-purpose-evaluate": LE,
        "identical-links-same-purpose-matches": NA,
        "implicit-evaluate": D5,
        "inline-style-property-evaluate": DC,
        "inserted-into-focus-order-matches": PA,
        "internal-link-present-evaluate": qE,
        "invalid-children-evaluate": j5,
        "invalidrole-evaluate": T_,
        "is-element-focusable-evaluate": k_,
        "is-initiator-matches": Af,
        "is-on-screen-evaluate": EC,
        "is-visible-matches": LA,
        "is-visible-on-screen-matches": BA,
        "label-content-name-mismatch-evaluate": x5,
        "label-content-name-mismatch-matches": jA,
        "label-matches": VA,
        "landmark-has-body-context-matches": $A,
        "landmark-is-top-level-evaluate": i5,
        "landmark-is-unique-after": R5,
        "landmark-is-unique-evaluate": S5,
        "landmark-unique-matches": GA,
        "layout-table-matches": KA,
        "link-in-text-block-evaluate": wx,
        "link-in-text-block-matches": JA,
        "link-in-text-block-style-evaluate": _x,
        "listitem-evaluate": H5,
        "matches-definition-evaluate": Px,
        "meta-refresh-evaluate": VE,
        "meta-viewport-scale-evaluate": oE,
        "multiple-label-evaluate": C5,
        "nested-interactive-matches": e3,
        "no-autoplay-audio-evaluate": rE,
        "no-autoplay-audio-matches": r3,
        "no-empty-role-matches": n3,
        "no-explicit-name-required-matches": Ff,
        "no-focusable-content-evaluate": o5,
        "no-implicit-explicit-label-evaluate": O_,
        "no-naming-method-matches": u3,
        "no-negative-tabindex-matches": s3,
        "no-role-matches": d3,
        "non-empty-if-present-evaluate": AC,
        "not-html-matches": p3,
        "object-is-loaded-matches": m3,
        "only-dlitems-evaluate": $5,
        "only-listitems-evaluate": G5,
        "p-as-heading-evaluate": GE,
        "p-as-heading-matches": g3,
        "page-no-duplicate-after": Bx,
        "page-no-duplicate-evaluate": jx,
        "presentation-role-conflict-matches": y3,
        "presentational-role-evaluate": FC,
        "region-after": YE,
        "region-evaluate": KE,
        "same-caption-summary-evaluate": NC,
        "scope-value-evaluate": BC,
        "scrollable-region-focusable-matches": w3,
        "skip-link-evaluate": eC,
        "skip-link-matches": x3,
        "structured-dlitems-evaluate": Y5,
        "svg-namespace-matches": pu,
        "svg-non-empty-title-evaluate": RC,
        "tabindex-evaluate": s5,
        "table-or-grid-role-matches": E3,
        "target-offset-evaluate": lE,
        "target-size-evaluate": cE,
        "td-has-header-evaluate": jC,
        "td-headers-attr-evaluate": zC,
        "th-has-data-cells-evaluate": HC,
        "title-only-evaluate": F5,
        "unique-frame-title-after": rC,
        "unique-frame-title-evaluate": nC,
        "unsupportedrole-evaluate": N_,
        "valid-lang-evaluate": I5,
        "valid-scrollable-semantics-evaluate": j_,
        "widget-not-inline-matches": C3,
        "window-is-top-matches": k3,
        "xml-lang-mismatch-evaluate": L5,
        "xml-lang-mismatch-matches": O3
      }, Un = M3;
      function N3(e) {
        this.id = e.id, this.data = null, this.relatedNodes = [], this.result = null;
      }
      var mu = N3;
      function hu(e) {
        if (typeof e == "string") {
          if (Un[e])
            return Un[e];
          if (/^\s*function[\s\w]*\(/.test(e))
            return new Function("return " + e + ";")();
          throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e));
        }
        return e;
      }
      function Rf() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return (Array.isArray(e) || k(e) !== "object") && (e = {
          value: e
        }), e;
      }
      function Ir(e) {
        e && (this.id = e.id, this.configure(e));
      }
      Ir.prototype.enabled = !0, Ir.prototype.run = function(t, r, a, n, i) {
        r = r || {};
        var o = r.hasOwnProperty("enabled") ? r.enabled : this.enabled, u = this.getOptions(r.options);
        if (o) {
          var l = new mu(this), s = ci(l, r, n, i), c;
          try {
            c = this.evaluate.call(s, t.actualNode, u, t, a);
          } catch (d) {
            t && t.actualNode && (d.errorNode = dt.toSpec(t)), i(d);
            return;
          }
          s.isAsync || (l.result = c, n(l));
        } else
          n(null);
      }, Ir.prototype.runSync = function(t, r, a) {
        r = r || {};
        var n = r, i = n.enabled, o = i === void 0 ? this.enabled : i;
        if (!o)
          return null;
        var u = this.getOptions(r.options), l = new mu(this), s = ci(l);
        s.async = function() {
          throw new Error("Cannot run async check while in a synchronous run");
        };
        var c;
        try {
          c = this.evaluate.call(s, t.actualNode, u, t, a);
        } catch (d) {
          throw t && t.actualNode && (d.errorNode = dt.toSpec(t)), d;
        }
        return l.result = c, l;
      }, Ir.prototype.configure = function(t) {
        var r = this;
        (!t.evaluate || Un[t.evaluate]) && (this._internalCheck = !0), t.hasOwnProperty("enabled") && (this.enabled = t.enabled), t.hasOwnProperty("options") && (this._internalCheck ? this.options = Rf(t.options) : this.options = t.options), ["evaluate", "after"].filter(function(a) {
          return t.hasOwnProperty(a);
        }).forEach(function(a) {
          return r[a] = hu(t[a]);
        });
      }, Ir.prototype.getOptions = function(t) {
        return this._internalCheck ? Ai(this.options, Rf(t || {})) : t || this.options;
      };
      var kf = Ir;
      function I3(e) {
        this.id = e.id, this.result = se.NA, this.pageLevel = e.pageLevel, this.impact = null, this.nodes = [];
      }
      var Gn = I3;
      function rt(e, t) {
        this._audit = t, this.id = e.id, this.selector = e.selector || "*", e.impact && (me(se.impact.includes(e.impact), "Impact ".concat(e.impact, " is not a valid impact")), this.impact = e.impact), this.excludeHidden = typeof e.excludeHidden == "boolean" ? e.excludeHidden : !0, this.enabled = typeof e.enabled == "boolean" ? e.enabled : !0, this.pageLevel = typeof e.pageLevel == "boolean" ? e.pageLevel : !1, this.reviewOnFail = typeof e.reviewOnFail == "boolean" ? e.reviewOnFail : !1, this.any = e.any || [], this.all = e.all || [], this.none = e.none || [], this.tags = e.tags || [], this.preload = !!e.preload, this.actIds = e.actIds, e.matches && (this.matches = hu(e.matches));
      }
      rt.prototype.matches = function() {
        return !0;
      }, rt.prototype.gather = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = "mark_gather_start_" + this.id, n = "mark_gather_end_" + this.id, i = "mark_isVisibleToScreenReaders_start_" + this.id, o = "mark_isVisibleToScreenReaders_end_" + this.id;
        r.performanceTimer && Be.mark(a);
        var u = Yo(this.selector, t);
        return this.excludeHidden && (r.performanceTimer && Be.mark(i), u = u.filter(function(l) {
          return Fe(l);
        }), r.performanceTimer && (Be.mark(o), Be.measure("rule_" + this.id + "#gather_axe.utils.isVisibleToScreenReaders", i, o))), r.performanceTimer && (Be.mark(n), Be.measure("rule_" + this.id + "#gather", a, n)), u;
      }, rt.prototype.runChecks = function(t, r, a, n, i, o) {
        var u = this, l = xt();
        this[t].forEach(function(s) {
          var c = u._audit.checks[s.id || s], d = On(c, u.id, a);
          l.defer(function(f, p) {
            c.run(r, d, n, f, p);
          });
        }), l.then(function(s) {
          s = s.filter(function(c) {
            return c;
          }), i({
            type: t,
            results: s
          });
        }).catch(o);
      }, rt.prototype.runChecksSync = function(t, r, a, n) {
        var i = this, o = [];
        return this[t].forEach(function(u) {
          var l = i._audit.checks[u.id || u], s = On(l, i.id, a);
          o.push(l.runSync(r, s, n));
        }), o = o.filter(function(u) {
          return u;
        }), {
          type: t,
          results: o
        };
      }, rt.prototype.run = function(t) {
        var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0;
        a.performanceTimer && this._trackPerformance();
        var o = xt(), u = new Gn(this), l;
        try {
          l = this.gatherAndMatchNodes(t, a);
        } catch (s) {
          i(new jr({
            cause: s,
            ruleId: this.id
          }));
          return;
        }
        a.performanceTimer && this._logGatherPerformance(l), l.forEach(function(s) {
          o.defer(function(c, d) {
            var f = xt();
            ["any", "all", "none"].forEach(function(p) {
              f.defer(function(m, h) {
                r.runChecks(p, s, a, t, m, h);
              });
            }), f.then(function(p) {
              var m = Sf(p);
              m && (m.node = new Ot(s), u.nodes.push(m), r.reviewOnFail && (["any", "all"].forEach(function(h) {
                m[h].forEach(function(b) {
                  b.result === !1 && (b.result = void 0);
                });
              }), m.none.forEach(function(h) {
                h.result === !0 && (h.result = void 0);
              }))), c();
            }).catch(function(p) {
              return d(p);
            });
          });
        }), o.defer(function(s) {
          return setTimeout(s, 0);
        }), a.performanceTimer && this._logRulePerformance(), o.then(function() {
          return n(u);
        }).catch(function(s) {
          return i(s);
        });
      }, rt.prototype.runSync = function(t) {
        var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        a.performanceTimer && this._trackPerformance();
        var n = new Gn(this), i;
        try {
          i = this.gatherAndMatchNodes(t, a);
        } catch (o) {
          throw new jr({
            cause: o,
            ruleId: this.id
          });
        }
        return a.performanceTimer && this._logGatherPerformance(i), i.forEach(function(o) {
          var u = [];
          ["any", "all", "none"].forEach(function(s) {
            u.push(r.runChecksSync(s, o, a, t));
          });
          var l = Sf(u);
          l && (l.node = o.actualNode ? new Ot(o) : null, n.nodes.push(l), r.reviewOnFail && (["any", "all"].forEach(function(s) {
            l[s].forEach(function(c) {
              c.result === !1 && (c.result = void 0);
            });
          }), l.none.forEach(function(s) {
            s.result === !0 && (s.result = void 0);
          })));
        }), a.performanceTimer && this._logRulePerformance(), n;
      }, rt.prototype._trackPerformance = function() {
        this._markStart = "mark_rule_start_" + this.id, this._markEnd = "mark_rule_end_" + this.id, this._markChecksStart = "mark_runchecks_start_" + this.id, this._markChecksEnd = "mark_runchecks_end_" + this.id;
      }, rt.prototype._logGatherPerformance = function(t) {
        nr("gather (", t.length, "):", Be.timeElapsed() + "ms"), Be.mark(this._markChecksStart);
      }, rt.prototype._logRulePerformance = function() {
        Be.mark(this._markChecksEnd), Be.mark(this._markEnd), Be.measure("runchecks_" + this.id, this._markChecksStart, this._markChecksEnd), Be.measure("rule_" + this.id, this._markStart, this._markEnd);
      };
      function Sf(e) {
        if (e.length) {
          var t = !1, r = {};
          return e.forEach(function(a) {
            var n = a.results.filter(function(i) {
              return i;
            });
            r[a.type] = n, n.length && (t = !0);
          }), t ? r : null;
        }
      }
      rt.prototype.gatherAndMatchNodes = function(t, r) {
        var a = this, n = "mark_matches_start_" + this.id, i = "mark_matches_end_" + this.id, o = this.gather(t, r);
        return r.performanceTimer && Be.mark(n), o = o.filter(function(u) {
          return a.matches(u.actualNode, u, t);
        }), r.performanceTimer && (Be.mark(i), Be.measure("rule_" + this.id + "#matches", n, i)), o;
      };
      function P3(e) {
        return $a(e).map(function(t) {
          var r = e._audit.checks[t.id || t];
          return r && typeof r.after == "function" ? r : null;
        }).filter(Boolean);
      }
      function L3(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = $a(a);
          n.forEach(function(i) {
            i.id === t && (i.node = a.node, r.push(i));
          });
        }), r;
      }
      function B3(e) {
        return e.filter(function(t) {
          return t.filtered !== !0;
        });
      }
      function q3(e) {
        var t = ["any", "all", "none"], r = e.nodes.filter(function(a) {
          var n = 0;
          return t.forEach(function(i) {
            a[i] = B3(a[i]), n += a[i].length;
          }), n > 0;
        });
        return e.pageLevel && r.length && (r = [r.reduce(function(a, n) {
          if (a)
            return t.forEach(function(i) {
              a[i].push.apply(a[i], n[i]);
            }), a;
        })]), r;
      }
      rt.prototype.after = function(t, r) {
        var a = this, n = P3(this), i = this.id;
        return n.forEach(function(o) {
          var u = L3(t.nodes, o.id), l = On(o, i, r), s = o.after(u, l.options);
          a.reviewOnFail && s.forEach(function(c) {
            var d = (a.any.includes(c.id) || a.all.includes(c.id)) && c.result === !1, f = a.none.includes(c.id) && c.result === !0;
            (d || f) && (c.result = void 0);
          }), u.forEach(function(c) {
            delete c.node, s.indexOf(c) === -1 && (c.filtered = !0);
          });
        }), t.nodes = q3(t), t;
      }, rt.prototype.configure = function(t) {
        t.hasOwnProperty("selector") && (this.selector = t.selector), t.hasOwnProperty("excludeHidden") && (this.excludeHidden = typeof t.excludeHidden == "boolean" ? t.excludeHidden : !0), t.hasOwnProperty("enabled") && (this.enabled = typeof t.enabled == "boolean" ? t.enabled : !0), t.hasOwnProperty("pageLevel") && (this.pageLevel = typeof t.pageLevel == "boolean" ? t.pageLevel : !1), t.hasOwnProperty("reviewOnFail") && (this.reviewOnFail = typeof t.reviewOnFail == "boolean" ? t.reviewOnFail : !1), t.hasOwnProperty("any") && (this.any = t.any), t.hasOwnProperty("all") && (this.all = t.all), t.hasOwnProperty("none") && (this.none = t.none), t.hasOwnProperty("tags") && (this.tags = t.tags), t.hasOwnProperty("actIds") && (this.actIds = t.actIds), t.hasOwnProperty("matches") && (this.matches = hu(t.matches)), t.impact && (me(se.impact.includes(t.impact), "Impact ".concat(t.impact, " is not a valid impact")), this.impact = t.impact);
      };
      var Pr = vt(sl()), Lr = /\{\{.+?\}\}/g, j3 = function() {
        function e(t) {
          Dt(this, e), this.lang = "en", this.defaultConfig = t, this.standards = he, this._init(), this._defaultLocale = null;
        }
        return _t(e, [{
          key: "_setDefaultLocale",
          value: function() {
            if (!this._defaultLocale) {
              for (var r = {
                checks: {},
                rules: {},
                failureSummaries: {},
                incompleteFallbackMessage: "",
                lang: this.lang
              }, a = Object.keys(this.data.checks), n = 0; n < a.length; n++) {
                var i = a[n], o = this.data.checks[i], u = o.messages, l = u.pass, s = u.fail, c = u.incomplete;
                r.checks[i] = {
                  pass: l,
                  fail: s,
                  incomplete: c
                };
              }
              for (var d = Object.keys(this.data.rules), f = 0; f < d.length; f++) {
                var p = d[f], m = this.data.rules[p], h = m.description, b = m.help;
                r.rules[p] = {
                  description: h,
                  help: b
                };
              }
              for (var v = Object.keys(this.data.failureSummaries), g = 0; g < v.length; g++) {
                var w = v[g], D = this.data.failureSummaries[w], F = D.failureMessage;
                r.failureSummaries[w] = {
                  failureMessage: F
                };
              }
              r.incompleteFallbackMessage = this.data.incompleteFallbackMessage, this._defaultLocale = r;
            }
          }
        }, {
          key: "_resetLocale",
          value: function() {
            var r = this._defaultLocale;
            r && this.applyLocale(r);
          }
        }, {
          key: "_applyCheckLocale",
          value: function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.checks[i])
                throw new Error('Locale provided for unknown check: "'.concat(i, '"'));
              this.data.checks[i] = V3(this.data.checks[i], r[i]);
            }
          }
        }, {
          key: "_applyRuleLocale",
          value: function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.rules[i])
                throw new Error('Locale provided for unknown rule: "'.concat(i, '"'));
              this.data.rules[i] = H3(this.data.rules[i], r[i]);
            }
          }
        }, {
          key: "_applyFailureSummaries",
          value: function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.failureSummaries[i])
                throw new Error('Locale provided for unknown failureMessage: "'.concat(i, '"'));
              this.data.failureSummaries[i] = $3(this.data.failureSummaries[i], r[i]);
            }
          }
        }, {
          key: "applyLocale",
          value: function(r) {
            this._setDefaultLocale(), r.checks && this._applyCheckLocale(r.checks), r.rules && this._applyRuleLocale(r.rules), r.failureSummaries && this._applyFailureSummaries(r.failureSummaries, "failureSummaries"), r.incompleteFallbackMessage && (this.data.incompleteFallbackMessage = U3(this.data.incompleteFallbackMessage, r.incompleteFallbackMessage)), r.lang && (this.lang = r.lang);
          }
        }, {
          key: "setAllowedOrigins",
          value: function(r) {
            var a = Mf();
            this.allowedOrigins = [];
            var n = Ae(r), i;
            try {
              for (n.s(); !(i = n.n()).done; ) {
                var o = i.value;
                if (o === se.allOrigins) {
                  this.allowedOrigins = ["*"];
                  return;
                } else
                  o !== se.sameOrigin ? this.allowedOrigins.push(o) : a && this.allowedOrigins.push(a);
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
          }
        }, {
          key: "_init",
          value: function() {
            var r = z3(this.defaultConfig);
            this.lang = r.lang || "en", this.reporter = r.reporter, this.commands = {}, this.rules = [], this.checks = {}, this.brand = "axe", this.application = "axeAPI", this.tagExclude = ["experimental"], this.noHtml = r.noHtml, this.allowedOrigins = r.allowedOrigins, Nf(r.rules, this, "addRule"), Nf(r.checks, this, "addCheck"), this.data = {}, this.data.checks = r.data && r.data.checks || {}, this.data.rules = r.data && r.data.rules || {}, this.data.failureSummaries = r.data && r.data.failureSummaries || {}, this.data.incompleteFallbackMessage = r.data && r.data.incompleteFallbackMessage || "", this._constructHelpUrls();
          }
        }, {
          key: "registerCommand",
          value: function(r) {
            this.commands[r.id] = r.callback;
          }
        }, {
          key: "addRule",
          value: function(r) {
            r.metadata && (this.data.rules[r.id] = r.metadata);
            var a = this.getRule(r.id);
            a ? a.configure(r) : this.rules.push(new rt(r, this));
          }
        }, {
          key: "addCheck",
          value: function(r) {
            var a = r.metadata;
            k(a) === "object" && (this.data.checks[r.id] = a, k(a.messages) === "object" && Object.keys(a.messages).filter(function(n) {
              return a.messages.hasOwnProperty(n) && typeof a.messages[n] == "string";
            }).forEach(function(n) {
              a.messages[n].indexOf("function") === 0 && (a.messages[n] = new Function("return " + a.messages[n] + ";")());
            })), this.checks[r.id] ? this.checks[r.id].configure(r) : this.checks[r.id] = new kf(r);
          }
        }, {
          key: "run",
          value: function(r, a, n, i) {
            this.normalizeOptions(a), Ot.setRunOptions(a), y._selectCache = [];
            var o = G3(this.rules, r, a), u = o.now, l = o.later, s = xt();
            u.forEach(function(f) {
              s.defer(If(f, r, a));
            });
            var c = xt();
            l.length && c.defer(function(f) {
              s1(a).then(function(p) {
                return f(p);
              }).catch(function(p) {
                console.warn("Couldn't load preload assets: ", p), f(void 0);
              });
            });
            var d = xt();
            d.defer(s), d.defer(c), d.then(function(f) {
              var p = f.pop();
              if (p && p.length) {
                var m = p[0];
                m && (r = fe({}, r, m));
              }
              var h = f[0];
              if (!l.length) {
                y._selectCache = void 0, n(h.filter(function(v) {
                  return !!v;
                }));
                return;
              }
              var b = xt();
              l.forEach(function(v) {
                var g = If(v, r, a);
                b.defer(g);
              }), b.then(function(v) {
                y._selectCache = void 0, n(h.concat(v).filter(function(g) {
                  return !!g;
                }));
              }).catch(i);
            }).catch(i);
          }
        }, {
          key: "after",
          value: function(r, a) {
            var n = this.rules;
            return r.map(function(i) {
              var o = Zr(n, "id", i.id);
              if (!o)
                throw new Error("Result for unknown rule. You may be running mismatch axe-core versions");
              return o.after(i, a);
            });
          }
        }, {
          key: "getRule",
          value: function(r) {
            return this.rules.find(function(a) {
              return a.id === r;
            });
          }
        }, {
          key: "normalizeOptions",
          value: function(r) {
            var a = this, n = [], i = [];
            if (a.rules.forEach(function(c) {
              i.push(c.id), c.tags.forEach(function(d) {
                n.includes(d) || n.push(d);
              });
            }), ["object", "string"].includes(k(r.runOnly))) {
              if (typeof r.runOnly == "string" && (r.runOnly = [r.runOnly]), Array.isArray(r.runOnly)) {
                var o = r.runOnly.find(function(c) {
                  return n.includes(c);
                }), u = r.runOnly.find(function(c) {
                  return i.includes(c);
                });
                if (o && u)
                  throw new Error("runOnly cannot be both rules and tags");
                u ? r.runOnly = {
                  type: "rule",
                  values: r.runOnly
                } : r.runOnly = {
                  type: "tag",
                  values: r.runOnly
                };
              }
              var l = r.runOnly;
              if (l.value && !l.values && (l.values = l.value, delete l.value), !Array.isArray(l.values) || l.values.length === 0)
                throw new Error("runOnly.values must be a non-empty array");
              if (["rule", "rules"].includes(l.type))
                l.type = "rule", l.values.forEach(function(c) {
                  if (!i.includes(c))
                    throw new Error("unknown rule `" + c + "` in options.runOnly");
                });
              else if (["tag", "tags", void 0].includes(l.type)) {
                l.type = "tag";
                var s = l.values.filter(function(c) {
                  return !n.includes(c) && !/wcag2[1-3]a{1,3}/.test(c);
                });
                s.length !== 0 && y.log("Could not find tags `" + s.join("`, `") + "`");
              } else
                throw new Error("Unknown runOnly type '".concat(l.type, "'"));
            }
            return k(r.rules) === "object" && Object.keys(r.rules).forEach(function(c) {
              if (!i.includes(c))
                throw new Error("unknown rule `" + c + "` in options.rules");
            }), r;
          }
        }, {
          key: "setBranding",
          value: function(r) {
            var a = {
              brand: this.brand,
              application: this.application
            };
            typeof r == "string" && (this.application = r), r && r.hasOwnProperty("brand") && r.brand && typeof r.brand == "string" && (this.brand = r.brand), r && r.hasOwnProperty("application") && r.application && typeof r.application == "string" && (this.application = r.application), this._constructHelpUrls(a);
          }
        }, {
          key: "_constructHelpUrls",
          value: function() {
            var r = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = (y.version.match(/^[1-9][0-9]*\.[0-9]+/) || ["x.y"])[0];
            this.rules.forEach(function(i) {
              r.data.rules[i.id] || (r.data.rules[i.id] = {});
              var o = r.data.rules[i.id];
              (typeof o.helpUrl != "string" || a && o.helpUrl === Pf(a, i.id, n)) && (o.helpUrl = Pf(r, i.id, n));
            });
          }
        }, {
          key: "resetRulesAndChecks",
          value: function() {
            this._init(), this._resetLocale();
          }
        }]), e;
      }(), Of = j3;
      function Mf() {
        if (_.origin && _.origin !== "null")
          return _.origin;
        if (_.location && _.location.origin && _.location.origin !== "null")
          return _.location.origin;
      }
      function z3(e) {
        var t;
        if (e ? (t = Mt(e), t.commons = e.commons) : t = {}, t.reporter = t.reporter || null, t.noHtml = t.noHtml || !1, !t.allowedOrigins) {
          var r = Mf();
          t.allowedOrigins = r ? [r] : [];
        }
        return t.rules = t.rules || [], t.checks = t.checks || [], t.data = fe({
          checks: {},
          rules: {}
        }, t.data), t;
      }
      function Nf(e, t, r) {
        var a, n;
        for (a = 0, n = e.length; a < n; a++)
          t[r](e[a]);
      }
      var V3 = function(t, r) {
        var a = r.pass, n = r.fail;
        return typeof a == "string" && Lr.test(a) && (a = Pr.default.compile(a)), typeof n == "string" && Lr.test(n) && (n = Pr.default.compile(n)), fe({}, t, {
          messages: {
            pass: a || t.messages.pass,
            fail: n || t.messages.fail,
            incomplete: k(t.messages.incomplete) === "object" ? fe({}, t.messages.incomplete, r.incomplete) : r.incomplete
          }
        });
      }, H3 = function(t, r) {
        var a = r.help, n = r.description;
        return typeof a == "string" && Lr.test(a) && (a = Pr.default.compile(a)), typeof n == "string" && Lr.test(n) && (n = Pr.default.compile(n)), fe({}, t, {
          help: a || t.help,
          description: n || t.description
        });
      }, $3 = function(t, r) {
        var a = r.failureMessage;
        return typeof a == "string" && Lr.test(a) && (a = Pr.default.compile(a)), fe({}, t, {
          failureMessage: a || t.failureMessage
        });
      }, U3 = function(t, r) {
        return typeof r == "string" && Lr.test(r) && (r = Pr.default.compile(r)), r || t;
      };
      function G3(e, t, r) {
        var a = {
          now: [],
          later: []
        }, n = e.reduce(function(i, o) {
          return m1(o, t, r) ? o.preload ? (i.later.push(o), i) : (i.now.push(o), i) : i;
        }, a);
        return n;
      }
      function If(e, t, r) {
        return r.performanceTimer && Be.mark("mark_rule_start_" + e.id), function(a, n) {
          e.run(t, r, function(i) {
            a(i);
          }, function(i) {
            if (r.debug)
              n(i);
            else {
              var o = Object.assign(new Gn(e), {
                result: se.CANTTELL,
                description: "An error occured while running this rule",
                message: i.message,
                stack: i.stack,
                error: i,
                errorNode: i.errorNode
              });
              a(o);
            }
          });
        };
      }
      function Pf(e, t, r) {
        var a = e.brand, n = e.application, i = e.lang;
        return se.helpUrlBase + a + "/" + (r || y.version.substring(0, y.version.lastIndexOf("."))) + "/" + t + "?application=" + encodeURIComponent(n) + (i && i !== "en" ? "&lang=" + encodeURIComponent(i) : "");
      }
      function Lf(e) {
        var t = _ && "Node" in _ && "NodeList" in _, r = !!M;
        if (!(t && r)) {
          if (!e || !e.ownerDocument)
            throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.');
          r || (ue.set("globalDocumentSet", !0), M = e.ownerDocument), t || (ue.set("globalWindowSet", !0), _ = M.defaultView);
        }
      }
      function W3() {
        ue.get("globalDocumentSet") && (ue.set("globalDocumentSet", !1), M = null), ue.get("globalWindowSet") && (ue.set("globalWindowSet", !1), _ = null);
      }
      function Y3() {
        W3(), y._memoizedFns.forEach(function(e) {
          return e.clear();
        }), ue.clear(), y._tree = void 0, y._selectorData = void 0, y._selectCache = void 0;
      }
      var Kt = Y3;
      function Bf(e, t, r, a) {
        try {
          e = new Mn(e), y._tree = e.flatTree, y._selectorData = La(e.flatTree);
        } catch (o) {
          return Kt(), a(o);
        }
        var n = xt(), i = y._audit;
        t.performanceTimer && Be.auditStart(), e.frames.length && t.iframes !== !1 && n.defer(function(o, u) {
          Hl(e, t, "rules", null, o, u);
        }), n.defer(function(o, u) {
          i.run(e, t, o, u);
        }), n.then(function(o) {
          try {
            t.performanceTimer && Be.auditEnd();
            var u = Ua(o.map(function(l) {
              return {
                results: l
              };
            }));
            e.initiator && (u = i.after(u, t), u.forEach(Nn), u = u.map(Hr));
            try {
              r(u, Kt);
            } catch (l) {
              Kt(), nr(l);
            }
          } catch (l) {
            Kt(), a(l);
          }
        }).catch(function(o) {
          Kt(), a(o);
        });
      }
      function X3(e) {
        y._audit = new Of(e);
      }
      function K3(e, t, r) {
        var a = r, n = function(l) {
          l instanceof Error || (l = new Error(l)), r(l);
        }, i = e && e.context || {};
        i.hasOwnProperty("include") && !i.include.length && (i.include = [M]);
        var o = e && e.options || {};
        switch (e.command) {
          case "rules":
            return Bf(i, o, function(u, l) {
              u = dt.mapRawResults(u), a(u), l();
            }, n);
          case "cleanup-plugin":
            return x1(a, n);
          default:
            if (y._audit && y._audit.commands && y._audit.commands[e.command])
              return y._audit.commands[e.command](e, r);
        }
      }
      _.top !== _ && (bt.subscribe("axe.start", K3), bt.subscribe("axe.ping", function(e, t, r) {
        r({
          axe: !0
        });
      }));
      function _a(e) {
        this._run = e.run, this._collect = e.collect, this._registry = {}, e.commands.forEach(function(t) {
          y._audit.registerCommand(t);
        });
      }
      _a.prototype.run = function() {
        return this._run.apply(this, arguments);
      }, _a.prototype.collect = function() {
        return this._collect.apply(this, arguments);
      }, _a.prototype.cleanup = function(t) {
        var r = y.utils.queue(), a = this;
        Object.keys(this._registry).forEach(function(n) {
          r.defer(function(i) {
            a._registry[n].cleanup(i);
          });
        }), r.then(t);
      }, _a.prototype.add = function(t) {
        this._registry[t.id] = t;
      };
      function Z3(e) {
        y.plugins[e.id] = new _a(e);
      }
      var J3 = Z3;
      function Q3() {
        var e = y._audit;
        if (!e)
          throw new Error("No audit configured");
        e.resetRulesAndChecks(), Hg();
      }
      var eF = Q3;
      function tF(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        r.reporter = r.reporter || y._audit.reporter || "v1", y._selectorData = {}, t instanceof Ve || (t = new _1(t));
        var a = Kd(e);
        if (!a)
          throw new Error("unknown rule `" + e + "`");
        a = Object.create(a, {
          excludeHidden: {
            value: !1
          }
        });
        var n = {
          initiator: !0,
          include: [t],
          exclude: [],
          frames: [],
          page: !1,
          focusable: !0,
          size: {},
          flatTree: []
        }, i = a.runSync(n, r);
        Nn(i), Hr(i);
        var o = ml([i]);
        return o.violations.forEach(function(u) {
          return u.nodes.forEach(function(l) {
            l.failureSummary = Lo(l);
          });
        }), fe({}, Yt(), o, {
          toolOptions: r
        });
      }
      function qf(e) {
        var t, r, a, n = V(e, 3), i = n[0], o = n[1], u = n[2], l = new TypeError("axe.run arguments are invalid");
        if (!Z2(i)) {
          if (u !== void 0)
            throw l;
          u = o, o = i, i = M;
        }
        if (k(o) !== "object") {
          if (u !== void 0)
            throw l;
          u = o, o = {};
        }
        if (typeof u != "function" && u !== void 0)
          throw l;
        return o = Mt(o), o.reporter = (t = (r = o.reporter) !== null && r !== void 0 ? r : (a = y._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", {
          context: i,
          options: o,
          callback: u
        };
      }
      var vu = function() {
      };
      function rF() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        Lf(t[0]);
        var a = qf(t), n = a.context, i = a.options, o = a.callback, u = o === void 0 ? vu : o, l = aF(u), s = l.thenable, c = l.resolve, d = l.reject;
        try {
          me(y._audit, "No audit configured"), me(!y._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        } catch (m) {
          return iF(m, u);
        }
        y._running = !0, i.performanceTimer && y.utils.performanceTimer.start();
        function f(m, h) {
          var b = function(w) {
            y._running = !1, h();
            try {
              c(w);
            } catch (D) {
              y.log(D);
            }
          }, v = function(w) {
            y._running = !1, h();
            try {
              d(w);
            } catch (D) {
              y.log(D);
            }
          };
          i.performanceTimer && y.utils.performanceTimer.end();
          try {
            nF(m, i, b, v);
          } catch (g) {
            v(g);
          }
        }
        function p(m) {
          i.performanceTimer && y.utils.performanceTimer.end(), y._running = !1, u(m), d(m);
        }
        return y._runRules(n, i, f, p), s;
      }
      function aF(e) {
        var t, r, a;
        return typeof Promise == "function" && e === vu ? t = new Promise(function(n, i) {
          r = i, a = n;
        }) : (a = function(i) {
          return e(null, i);
        }, r = function(i) {
          return e(i);
        }), {
          thenable: t,
          reject: r,
          resolve: a
        };
      }
      function nF(e, t, r, a) {
        var n = Zo(t.reporter), i = n(e, t, r, a);
        i !== void 0 && r(i);
      }
      function iF(e, t) {
        if (typeof t == "function" && t !== vu) {
          t(e.message);
          return;
        }
        throw e;
      }
      function oF() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var a = qf(t), n = a.options, i = a.context;
        me(y._audit, "Axe is not configured. Audit is missing."), me(!y._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        var o = new Mn(i, y._tree);
        return y._tree = o.flatTree, y._selectorData = La(o.flatTree), y._running = !0, n.elementRef = !1, new Promise(function(u, l) {
          y._audit.run(o, n, u, l);
        }).then(function(u) {
          u = dt.mapRawResults(u);
          var l = o.frames.map(function(c) {
            var d = c.node;
            return dt.toSpec(d);
          }), s;
          return o.initiator && (s = Yt()), y._running = !1, Kt(), {
            results: u,
            frames: l,
            environmentData: s
          };
        }).catch(function(u) {
          return y._running = !1, Kt(), Promise.reject(u);
        });
      }
      function uF(e) {
        var t, r, a, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n = Mt(n);
        var i = e.find(function(l) {
          return l.environmentData;
        }) || {}, o = i.environmentData;
        y._audit.normalizeOptions(n), n.reporter = (t = (r = n.reporter) !== null && r !== void 0 ? r : (a = y._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", lF(e);
        var u = Ua(e);
        return u = y._audit.after(u, n), u.forEach(Nn), u = u.map(Hr), cF(u, fe({
          environmentData: o
        }, n));
      }
      function lF(e) {
        var t = [], r = Ae(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value, i = t.shift();
            if (n) {
              n.frameSpec = i ?? null;
              var o = sF(n);
              t.unshift.apply(t, re(o));
            }
          }
        } catch (u) {
          r.e(u);
        } finally {
          r.f();
        }
      }
      function sF(e) {
        var t = e.frames, r = e.frameSpec;
        return r ? t.map(function(a) {
          return dt.mergeSpecs(a, r);
        }) : t;
      }
      function cF(e, t) {
        return new Promise(function(r, a) {
          var n = Zo(t.reporter);
          n(e, t, r, a);
        });
      }
      function dF(e) {
        if (y._tree)
          throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.");
        return e && k(e.documentElement) === "object" && k(e.defaultView) === "object" && (e = e.documentElement), Lf(e), y._tree = Io(e), y._selectorData = La(y._tree), y._tree[0];
      }
      var fF = dF, pF = function(t, r, a) {
        console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'), typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, o = Pe(n, tp);
        a(fe({}, Yt(i), {
          toolOptions: o
        }, va(t, r)));
      }, mF = pF, hF = function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, o = Pe(n, rp);
        r.resultTypes = ["violations"];
        var u = va(t, r), l = u.violations;
        a(fe({}, Yt(i), {
          toolOptions: o,
          violations: l
        }));
      }, vF = hF, gF = function(t, r, a) {
        if (typeof r == "function" && (a = r, r = {}), !t || !Array.isArray(t))
          return a(t);
        var n = t.map(function(i) {
          for (var o = fe({}, i), u = ["passes", "violations", "incomplete", "inapplicable"], l = 0, s = u; l < s.length; l++) {
            var c = s[l];
            o[c] = dt.mapRawNodeResults(o[c]);
          }
          return o;
        });
        a(n);
      }, jf = gF, bF = function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, o = Pe(n, ap);
        jf(t, o, function(u) {
          var l = Yt(i);
          a({
            raw: u,
            env: l
          });
        });
      }, yF = bF, wF = function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, o = Pe(n, np), u = va(t, r), l = function(c) {
          c.nodes.forEach(function(d) {
            d.failureSummary = Lo(d);
          });
        };
        u.incomplete.forEach(l), u.violations.forEach(l), a(fe({}, Yt(i), {
          toolOptions: o
        }, u));
      }, DF = wF, _F = function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, o = Pe(n, ip), u = va(t, r);
        a(fe({}, Yt(i), {
          toolOptions: o
        }, u));
      }, xF = _F, EF = {
        base: {
          Audit: Of,
          CheckResult: mu,
          Check: kf,
          Context: Mn,
          RuleResult: Gn,
          Rule: rt,
          metadataFunctionMap: Un
        },
        public: {
          reporters: ba
        },
        helpers: {
          failureSummary: Lo,
          incompleteFallbackMessage: Bo,
          processAggregate: va
        },
        utils: {
          setDefaultFrameMessenger: Ll,
          cacheNodeSelectors: qd,
          getNodesMatchingExpression: Ld,
          convertSelector: qa
        },
        commons: {
          dom: {
            nativelyHidden: Yl,
            displayHidden: Xl,
            visibilityHidden: Kl,
            contentVisibiltyHidden: Zl,
            ariaHidden: Jl,
            opacityHidden: Ql,
            scrollHidden: es,
            overflowHidden: ts,
            clipHidden: rs,
            areaHidden: Ri,
            detailsHidden: as
          }
        }
      }, CF = EF;
      y._thisWillBeDeletedDoNotUse = CF, y.constants = se, y.log = nr, y.AbstractVirtualNode = Ve, y.SerialVirtualNode = _1, y.VirtualNode = Oo, y._cache = ue, y.imports = xc, y.cleanup = x1, y.configure = nD, y.frameMessenger = iD, y.getRules = uD, y._load = X3, y.plugins = {}, y.registerPlugin = J3, y.hasReporter = C1, y.getReporter = Zo, y.addReporter = rD, y.reset = eF, y._runRules = Bf, y.runVirtualRule = tF, y.run = rF, y.setup = fF, y.teardown = Kt, y.runPartial = oF, y.finishRun = uF, y.commons = vf, y.utils = ni, y.addReporter("na", mF), y.addReporter("no-passes", vF), y.addReporter("rawEnv", yF), y.addReporter("raw", jf), y.addReporter("v1", DF), y.addReporter("v2", xF, !0);
    })(), y._load({
      lang: "en",
      data: {
        rules: {
          accesskeys: {
            description: "Ensures every accesskey attribute value is unique",
            help: "accesskey attribute value should be unique"
          },
          "area-alt": {
            description: "Ensures <area> elements of image maps have alternate text",
            help: "Active <area> elements must have alternate text"
          },
          "aria-allowed-attr": {
            description: "Ensures an element's role supports its ARIA attributes",
            help: "Elements must only use supported ARIA attributes"
          },
          "aria-allowed-role": {
            description: "Ensures role attribute has an appropriate value for the element",
            help: "ARIA role should be appropriate for the element"
          },
          "aria-braille-equivalent": {
            description: "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",
            help: "aria-braille attributes must have a non-braille equivalent"
          },
          "aria-command-name": {
            description: "Ensures every ARIA button, link and menuitem has an accessible name",
            help: "ARIA commands must have an accessible name"
          },
          "aria-conditional-attr": {
            description: "Ensures ARIA attributes are used as described in the specification of the element's role",
            help: "ARIA attributes must be used as specified for the element's role"
          },
          "aria-deprecated-role": {
            description: "Ensures elements do not use deprecated roles",
            help: "Deprecated ARIA roles must not be used"
          },
          "aria-dialog-name": {
            description: "Ensures every ARIA dialog and alertdialog node has an accessible name",
            help: "ARIA dialog and alertdialog nodes should have an accessible name"
          },
          "aria-hidden-body": {
            description: 'Ensures aria-hidden="true" is not present on the document body.',
            help: 'aria-hidden="true" must not be present on the document body'
          },
          "aria-hidden-focus": {
            description: "Ensures aria-hidden elements are not focusable nor contain focusable elements",
            help: "ARIA hidden element must not be focusable or contain focusable elements"
          },
          "aria-input-field-name": {
            description: "Ensures every ARIA input field has an accessible name",
            help: "ARIA input fields must have an accessible name"
          },
          "aria-meter-name": {
            description: "Ensures every ARIA meter node has an accessible name",
            help: "ARIA meter nodes must have an accessible name"
          },
          "aria-progressbar-name": {
            description: "Ensures every ARIA progressbar node has an accessible name",
            help: "ARIA progressbar nodes must have an accessible name"
          },
          "aria-prohibited-attr": {
            description: "Ensures ARIA attributes are not prohibited for an element's role",
            help: "Elements must only use permitted ARIA attributes"
          },
          "aria-required-attr": {
            description: "Ensures elements with ARIA roles have all required ARIA attributes",
            help: "Required ARIA attributes must be provided"
          },
          "aria-required-children": {
            description: "Ensures elements with an ARIA role that require child roles contain them",
            help: "Certain ARIA roles must contain particular children"
          },
          "aria-required-parent": {
            description: "Ensures elements with an ARIA role that require parent roles are contained by them",
            help: "Certain ARIA roles must be contained by particular parents"
          },
          "aria-roledescription": {
            description: "Ensure aria-roledescription is only used on elements with an implicit or explicit role",
            help: "aria-roledescription must be on elements with a semantic role"
          },
          "aria-roles": {
            description: "Ensures all elements with a role attribute use a valid value",
            help: "ARIA roles used must conform to valid values"
          },
          "aria-text": {
            description: 'Ensures role="text" is used on elements with no focusable descendants',
            help: '"role=text" should have no focusable descendants'
          },
          "aria-toggle-field-name": {
            description: "Ensures every ARIA toggle field has an accessible name",
            help: "ARIA toggle fields must have an accessible name"
          },
          "aria-tooltip-name": {
            description: "Ensures every ARIA tooltip node has an accessible name",
            help: "ARIA tooltip nodes must have an accessible name"
          },
          "aria-treeitem-name": {
            description: "Ensures every ARIA treeitem node has an accessible name",
            help: "ARIA treeitem nodes should have an accessible name"
          },
          "aria-valid-attr-value": {
            description: "Ensures all ARIA attributes have valid values",
            help: "ARIA attributes must conform to valid values"
          },
          "aria-valid-attr": {
            description: "Ensures attributes that begin with aria- are valid ARIA attributes",
            help: "ARIA attributes must conform to valid names"
          },
          "audio-caption": {
            description: "Ensures <audio> elements have captions",
            help: "<audio> elements must have a captions track"
          },
          "autocomplete-valid": {
            description: "Ensure the autocomplete attribute is correct and suitable for the form field",
            help: "autocomplete attribute must be used correctly"
          },
          "avoid-inline-spacing": {
            description: "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
            help: "Inline text spacing must be adjustable with custom stylesheets"
          },
          blink: {
            description: "Ensures <blink> elements are not used",
            help: "<blink> elements are deprecated and must not be used"
          },
          "button-name": {
            description: "Ensures buttons have discernible text",
            help: "Buttons must have discernible text"
          },
          bypass: {
            description: "Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
            help: "Page must have means to bypass repeated blocks"
          },
          "color-contrast-enhanced": {
            description: "Ensures the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",
            help: "Elements must meet enhanced color contrast ratio thresholds"
          },
          "color-contrast": {
            description: "Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
            help: "Elements must meet minimum color contrast ratio thresholds"
          },
          "css-orientation-lock": {
            description: "Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations",
            help: "CSS Media queries must not lock display orientation"
          },
          "definition-list": {
            description: "Ensures <dl> elements are structured correctly",
            help: "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"
          },
          dlitem: {
            description: "Ensures <dt> and <dd> elements are contained by a <dl>",
            help: "<dt> and <dd> elements must be contained by a <dl>"
          },
          "document-title": {
            description: "Ensures each HTML document contains a non-empty <title> element",
            help: "Documents must have <title> element to aid in navigation"
          },
          "duplicate-id-active": {
            description: "Ensures every id attribute value of active elements is unique",
            help: "IDs of active elements must be unique"
          },
          "duplicate-id-aria": {
            description: "Ensures every id attribute value used in ARIA and in labels is unique",
            help: "IDs used in ARIA and labels must be unique"
          },
          "duplicate-id": {
            description: "Ensures every id attribute value is unique",
            help: "id attribute value must be unique"
          },
          "empty-heading": {
            description: "Ensures headings have discernible text",
            help: "Headings should not be empty"
          },
          "empty-table-header": {
            description: "Ensures table headers have discernible text",
            help: "Table header text should not be empty"
          },
          "focus-order-semantics": {
            description: "Ensures elements in the focus order have a role appropriate for interactive content",
            help: "Elements in the focus order should have an appropriate role"
          },
          "form-field-multiple-labels": {
            description: "Ensures form field does not have multiple label elements",
            help: "Form field must not have multiple label elements"
          },
          "frame-focusable-content": {
            description: "Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",
            help: "Frames with focusable content must not have tabindex=-1"
          },
          "frame-tested": {
            description: "Ensures <iframe> and <frame> elements contain the axe-core script",
            help: "Frames should be tested with axe-core"
          },
          "frame-title-unique": {
            description: "Ensures <iframe> and <frame> elements contain a unique title attribute",
            help: "Frames must have a unique title attribute"
          },
          "frame-title": {
            description: "Ensures <iframe> and <frame> elements have an accessible name",
            help: "Frames must have an accessible name"
          },
          "heading-order": {
            description: "Ensures the order of headings is semantically correct",
            help: "Heading levels should only increase by one"
          },
          "hidden-content": {
            description: "Informs users about hidden content.",
            help: "Hidden content on the page should be analyzed"
          },
          "html-has-lang": {
            description: "Ensures every HTML document has a lang attribute",
            help: "<html> element must have a lang attribute"
          },
          "html-lang-valid": {
            description: "Ensures the lang attribute of the <html> element has a valid value",
            help: "<html> element must have a valid value for the lang attribute"
          },
          "html-xml-lang-mismatch": {
            description: "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
            help: "HTML elements with lang and xml:lang must have the same base language"
          },
          "identical-links-same-purpose": {
            description: "Ensure that links with the same accessible name serve a similar purpose",
            help: "Links with the same name must have a similar purpose"
          },
          "image-alt": {
            description: "Ensures <img> elements have alternate text or a role of none or presentation",
            help: "Images must have alternate text"
          },
          "image-redundant-alt": {
            description: "Ensure image alternative is not repeated as text",
            help: "Alternative text of images should not be repeated as text"
          },
          "input-button-name": {
            description: "Ensures input buttons have discernible text",
            help: "Input buttons must have discernible text"
          },
          "input-image-alt": {
            description: 'Ensures <input type="image"> elements have alternate text',
            help: "Image buttons must have alternate text"
          },
          "label-content-name-mismatch": {
            description: "Ensures that elements labelled through their content must have their visible text as part of their accessible name",
            help: "Elements must have their visible text as part of their accessible name"
          },
          "label-title-only": {
            description: "Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
            help: "Form elements should have a visible label"
          },
          label: {
            description: "Ensures every form element has a label",
            help: "Form elements must have labels"
          },
          "landmark-banner-is-top-level": {
            description: "Ensures the banner landmark is at top level",
            help: "Banner landmark should not be contained in another landmark"
          },
          "landmark-complementary-is-top-level": {
            description: "Ensures the complementary landmark or aside is at top level",
            help: "Aside should not be contained in another landmark"
          },
          "landmark-contentinfo-is-top-level": {
            description: "Ensures the contentinfo landmark is at top level",
            help: "Contentinfo landmark should not be contained in another landmark"
          },
          "landmark-main-is-top-level": {
            description: "Ensures the main landmark is at top level",
            help: "Main landmark should not be contained in another landmark"
          },
          "landmark-no-duplicate-banner": {
            description: "Ensures the document has at most one banner landmark",
            help: "Document should not have more than one banner landmark"
          },
          "landmark-no-duplicate-contentinfo": {
            description: "Ensures the document has at most one contentinfo landmark",
            help: "Document should not have more than one contentinfo landmark"
          },
          "landmark-no-duplicate-main": {
            description: "Ensures the document has at most one main landmark",
            help: "Document should not have more than one main landmark"
          },
          "landmark-one-main": {
            description: "Ensures the document has a main landmark",
            help: "Document should have one main landmark"
          },
          "landmark-unique": {
            help: "Ensures landmarks are unique",
            description: "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"
          },
          "link-in-text-block": {
            description: "Ensure links are distinguished from surrounding text in a way that does not rely on color",
            help: "Links must be distinguishable without relying on color"
          },
          "link-name": {
            description: "Ensures links have discernible text",
            help: "Links must have discernible text"
          },
          list: {
            description: "Ensures that lists are structured correctly",
            help: "<ul> and <ol> must only directly contain <li>, <script> or <template> elements"
          },
          listitem: {
            description: "Ensures <li> elements are used semantically",
            help: "<li> elements must be contained in a <ul> or <ol>"
          },
          marquee: {
            description: "Ensures <marquee> elements are not used",
            help: "<marquee> elements are deprecated and must not be used"
          },
          "meta-refresh-no-exceptions": {
            description: 'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
            help: "Delayed refresh must not be used"
          },
          "meta-refresh": {
            description: 'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
            help: "Delayed refresh under 20 hours must not be used"
          },
          "meta-viewport-large": {
            description: 'Ensures <meta name="viewport"> can scale a significant amount',
            help: "Users should be able to zoom and scale the text up to 500%"
          },
          "meta-viewport": {
            description: 'Ensures <meta name="viewport"> does not disable text scaling and zooming',
            help: "Zooming and scaling must not be disabled"
          },
          "nested-interactive": {
            description: "Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
            help: "Interactive controls must not be nested"
          },
          "no-autoplay-audio": {
            description: "Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
            help: "<video> or <audio> elements must not play automatically"
          },
          "object-alt": {
            description: "Ensures <object> elements have alternate text",
            help: "<object> elements must have alternate text"
          },
          "p-as-heading": {
            description: "Ensure bold, italic text and font-size is not used to style <p> elements as a heading",
            help: "Styled <p> elements must not be used as headings"
          },
          "page-has-heading-one": {
            description: "Ensure that the page, or at least one of its frames contains a level-one heading",
            help: "Page should contain a level-one heading"
          },
          "presentation-role-conflict": {
            description: "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",
            help: "Ensure elements marked as presentational are consistently ignored"
          },
          region: {
            description: "Ensures all page content is contained by landmarks",
            help: "All page content should be contained by landmarks"
          },
          "role-img-alt": {
            description: 'Ensures [role="img"] elements have alternate text',
            help: '[role="img"] elements must have an alternative text'
          },
          "scope-attr-valid": {
            description: "Ensures the scope attribute is used correctly on tables",
            help: "scope attribute should be used correctly"
          },
          "scrollable-region-focusable": {
            description: "Ensure elements that have scrollable content are accessible by keyboard",
            help: "Scrollable region must have keyboard access"
          },
          "select-name": {
            description: "Ensures select element has an accessible name",
            help: "Select element must have an accessible name"
          },
          "server-side-image-map": {
            description: "Ensures that server-side image maps are not used",
            help: "Server-side image maps must not be used"
          },
          "skip-link": {
            description: "Ensure all skip links have a focusable target",
            help: "The skip-link target should exist and be focusable"
          },
          "svg-img-alt": {
            description: "Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",
            help: "<svg> elements with an img role must have an alternative text"
          },
          tabindex: {
            description: "Ensures tabindex attribute values are not greater than 0",
            help: "Elements should not have tabindex greater than zero"
          },
          "table-duplicate-name": {
            description: "Ensure the <caption> element does not contain the same text as the summary attribute",
            help: "tables should not have the same summary and caption"
          },
          "table-fake-caption": {
            description: "Ensure that tables with a caption use the <caption> element.",
            help: "Data or header cells must not be used to give caption to a data table."
          },
          "target-size": {
            description: "Ensure touch target have sufficient size and space",
            help: "All touch targets must be 24px large, or leave sufficient space"
          },
          "td-has-header": {
            description: "Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",
            help: "Non-empty <td> elements in larger <table> must have an associated table header"
          },
          "td-headers-attr": {
            description: "Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",
            help: "Table cells that use the headers attribute must only refer to cells in the same table"
          },
          "th-has-data-cells": {
            description: "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
            help: "Table headers in a data table must refer to data cells"
          },
          "valid-lang": {
            description: "Ensures lang attributes have valid values",
            help: "lang attribute must have a valid value"
          },
          "video-caption": {
            description: "Ensures <video> elements have captions",
            help: "<video> elements must have captions"
          }
        },
        checks: {
          abstractrole: {
            impact: "serious",
            messages: {
              pass: "Abstract roles are not used",
              fail: {
                singular: "Abstract role cannot be directly used: ${data.values}",
                plural: "Abstract roles cannot be directly used: ${data.values}"
              }
            }
          },
          "aria-allowed-attr": {
            impact: "critical",
            messages: {
              pass: "ARIA attributes are used correctly for the defined role",
              fail: {
                singular: "ARIA attribute is not allowed: ${data.values}",
                plural: "ARIA attributes are not allowed: ${data.values}"
              },
              incomplete: "Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"
            }
          },
          "aria-allowed-role": {
            impact: "minor",
            messages: {
              pass: "ARIA role is allowed for given element",
              fail: {
                singular: "ARIA role ${data.values} is not allowed for given element",
                plural: "ARIA roles ${data.values} are not allowed for given element"
              },
              incomplete: {
                singular: "ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",
                plural: "ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"
              }
            }
          },
          "aria-busy": {
            impact: "serious",
            messages: {
              pass: "Element has an aria-busy attribute",
              fail: 'Element uses aria-busy="true" while showing a loader'
            }
          },
          "aria-conditional-attr": {
            impact: "serious",
            messages: {
              pass: "ARIA attribute is allowed",
              fail: {
                checkbox: 'Remove aria-checked, or set it to "${data.checkState}" to match the real checkbox state',
                rowSingular: "This attribute is supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}",
                rowPlural: "These attributes are supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}"
              }
            }
          },
          "aria-errormessage": {
            impact: "critical",
            messages: {
              pass: "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",
              fail: {
                singular: "aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",
                plural: "aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",
                hidden: "aria-errormessage value `${data.values}` cannot reference a hidden element"
              },
              incomplete: {
                singular: "ensure aria-errormessage value `${data.values}` references an existing element",
                plural: "ensure aria-errormessage values `${data.values}` reference existing elements",
                idrefs: "unable to determine if aria-errormessage element exists on the page: ${data.values}"
              }
            }
          },
          "aria-hidden-body": {
            impact: "critical",
            messages: {
              pass: "No aria-hidden attribute is present on document body",
              fail: "aria-hidden=true should not be present on the document body"
            }
          },
          "aria-level": {
            impact: "serious",
            messages: {
              pass: "aria-level values are valid",
              incomplete: "aria-level values greater than 6 are not supported in all screenreader and browser combinations"
            }
          },
          "aria-prohibited-attr": {
            impact: "serious",
            messages: {
              pass: "ARIA attribute is allowed",
              fail: {
                hasRolePlural: '${data.prohibited} attributes cannot be used with role "${data.role}".',
                hasRoleSingular: '${data.prohibited} attribute cannot be used with role "${data.role}".',
                noRolePlural: "${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",
                noRoleSingular: "${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."
              },
              incomplete: {
                hasRoleSingular: '${data.prohibited} attribute is not well supported with role "${data.role}".',
                hasRolePlural: '${data.prohibited} attributes are not well supported with role "${data.role}".',
                noRoleSingular: "${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",
                noRolePlural: "${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."
              }
            }
          },
          "aria-required-attr": {
            impact: "critical",
            messages: {
              pass: "All required ARIA attributes are present",
              fail: {
                singular: "Required ARIA attribute not present: ${data.values}",
                plural: "Required ARIA attributes not present: ${data.values}"
              }
            }
          },
          "aria-required-children": {
            impact: "critical",
            messages: {
              pass: "Required ARIA children are present",
              fail: {
                singular: "Required ARIA child role not present: ${data.values}",
                plural: "Required ARIA children role not present: ${data.values}",
                unallowed: "Element has children which are not allowed: ${data.values}"
              },
              incomplete: {
                singular: "Expecting ARIA child role to be added: ${data.values}",
                plural: "Expecting ARIA children role to be added: ${data.values}"
              }
            }
          },
          "aria-required-parent": {
            impact: "critical",
            messages: {
              pass: "Required ARIA parent role present",
              fail: {
                singular: "Required ARIA parent role not present: ${data.values}",
                plural: "Required ARIA parents role not present: ${data.values}"
              }
            }
          },
          "aria-roledescription": {
            impact: "serious",
            messages: {
              pass: "aria-roledescription used on a supported semantic role",
              incomplete: "Check that the aria-roledescription is announced by supported screen readers",
              fail: "Give the element a role that supports aria-roledescription"
            }
          },
          "aria-unsupported-attr": {
            impact: "critical",
            messages: {
              pass: "ARIA attribute is supported",
              fail: "ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"
            }
          },
          "aria-valid-attr-value": {
            impact: "critical",
            messages: {
              pass: "ARIA attribute values are valid",
              fail: {
                singular: "Invalid ARIA attribute value: ${data.values}",
                plural: "Invalid ARIA attribute values: ${data.values}"
              },
              incomplete: {
                noId: "ARIA attribute element ID does not exist on the page: ${data.needsReview}",
                noIdShadow: "ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",
                ariaCurrent: 'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',
                idrefs: "Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",
                empty: "ARIA attribute value is ignored while empty: ${data.needsReview}"
              }
            }
          },
          "aria-valid-attr": {
            impact: "critical",
            messages: {
              pass: "ARIA attribute name is valid",
              fail: {
                singular: "Invalid ARIA attribute name: ${data.values}",
                plural: "Invalid ARIA attribute names: ${data.values}"
              }
            }
          },
          "braille-label-equivalent": {
            impact: "serious",
            messages: {
              pass: "aria-braillelabel is used on an element with accessible text",
              fail: "aria-braillelabel is used on an element with no accessible text",
              incomplete: "Unable to compute accessible text"
            }
          },
          "braille-roledescription-equivalent": {
            impact: "serious",
            messages: {
              pass: "aria-brailleroledescription is used on an element with aria-roledescription",
              fail: {
                noRoleDescription: "aria-brailleroledescription is used on an element with no aria-roledescription",
                emptyRoleDescription: "aria-brailleroledescription is used on an element with an empty aria-roledescription"
              }
            }
          },
          deprecatedrole: {
            impact: "minor",
            messages: {
              pass: "ARIA role is not deprecated",
              fail: "The role used is deprecated: ${data}"
            }
          },
          fallbackrole: {
            impact: "serious",
            messages: {
              pass: "Only one role value used",
              fail: "Use only one role value, since fallback roles are not supported in older browsers",
              incomplete: "Use only role 'presentation' or 'none' since they are synonymous."
            }
          },
          "has-global-aria-attribute": {
            impact: "minor",
            messages: {
              pass: {
                singular: "Element has global ARIA attribute: ${data.values}",
                plural: "Element has global ARIA attributes: ${data.values}"
              },
              fail: "Element does not have global ARIA attribute"
            }
          },
          "has-widget-role": {
            impact: "minor",
            messages: {
              pass: "Element has a widget role.",
              fail: "Element does not have a widget role."
            }
          },
          invalidrole: {
            impact: "critical",
            messages: {
              pass: "ARIA role is valid",
              fail: {
                singular: "Role must be one of the valid ARIA roles: ${data.values}",
                plural: "Roles must be one of the valid ARIA roles: ${data.values}"
              }
            }
          },
          "is-element-focusable": {
            impact: "minor",
            messages: {
              pass: "Element is focusable.",
              fail: "Element is not focusable."
            }
          },
          "no-implicit-explicit-label": {
            impact: "serious",
            messages: {
              pass: "There is no mismatch between a <label> and accessible name",
              incomplete: "Check that the <label> does not need be part of the ARIA ${data} field's name"
            }
          },
          unsupportedrole: {
            impact: "critical",
            messages: {
              pass: "ARIA role is supported",
              fail: "The role used is not widely supported in screen readers and assistive technologies: ${data}"
            }
          },
          "valid-scrollable-semantics": {
            impact: "minor",
            messages: {
              pass: "Element has valid semantics for an element in the focus order.",
              fail: "Element has invalid semantics for an element in the focus order."
            }
          },
          "color-contrast-enhanced": {
            impact: "serious",
            messages: {
              pass: "Element has sufficient color contrast of ${data.contrastRatio}",
              fail: {
                default: "Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                fgOnShadowColor: "Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                shadowOnBgColor: "Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"
              },
              incomplete: {
                default: "Unable to determine contrast ratio",
                bgImage: "Element's background color could not be determined due to a background image",
                bgGradient: "Element's background color could not be determined due to a background gradient",
                imgNode: "Element's background color could not be determined because element contains an image node",
                bgOverlap: "Element's background color could not be determined because it is overlapped by another element",
                fgAlpha: "Element's foreground color could not be determined because of alpha transparency",
                elmPartiallyObscured: "Element's background color could not be determined because it's partially obscured by another element",
                elmPartiallyObscuring: "Element's background color could not be determined because it partially overlaps other elements",
                outsideViewport: "Element's background color could not be determined because it's outside the viewport",
                equalRatio: "Element has a 1:1 contrast ratio with the background",
                shortTextContent: "Element content is too short to determine if it is actual text content",
                nonBmp: "Element content contains only non-text characters",
                pseudoContent: "Element's background color could not be determined due to a pseudo element"
              }
            }
          },
          "color-contrast": {
            impact: "serious",
            messages: {
              pass: {
                default: "Element has sufficient color contrast of ${data.contrastRatio}",
                hidden: "Element is hidden"
              },
              fail: {
                default: "Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                fgOnShadowColor: "Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                shadowOnBgColor: "Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"
              },
              incomplete: {
                default: "Unable to determine contrast ratio",
                bgImage: "Element's background color could not be determined due to a background image",
                bgGradient: "Element's background color could not be determined due to a background gradient",
                imgNode: "Element's background color could not be determined because element contains an image node",
                bgOverlap: "Element's background color could not be determined because it is overlapped by another element",
                complexTextShadows: "Element's contrast could not be determined because it uses complex text shadows",
                fgAlpha: "Element's foreground color could not be determined because of alpha transparency",
                elmPartiallyObscured: "Element's background color could not be determined because it's partially obscured by another element",
                elmPartiallyObscuring: "Element's background color could not be determined because it partially overlaps other elements",
                outsideViewport: "Element's background color could not be determined because it's outside the viewport",
                equalRatio: "Element has a 1:1 contrast ratio with the background",
                shortTextContent: "Element content is too short to determine if it is actual text content",
                nonBmp: "Element content contains only non-text characters",
                pseudoContent: "Element's background color could not be determined due to a pseudo element"
              }
            }
          },
          "link-in-text-block-style": {
            impact: "serious",
            messages: {
              pass: "Links can be distinguished from surrounding text by visual styling",
              incomplete: {
                default: "Check if the link needs styling to distinguish it from nearby text",
                pseudoContent: "Check if the link's pseudo style is sufficient to distinguish it from the surrounding text"
              },
              fail: "The link has no styling (such as underline) to distinguish it from the surrounding text"
            }
          },
          "link-in-text-block": {
            impact: "serious",
            messages: {
              pass: "Links can be distinguished from surrounding text in some way other than by color",
              fail: {
                fgContrast: "The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",
                bgContrast: "The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})"
              },
              incomplete: {
                default: "Element's foreground contrast ratio could not be determined",
                bgContrast: "Element's background contrast ratio could not be determined",
                bgImage: "Element's contrast ratio could not be determined due to a background image",
                bgGradient: "Element's contrast ratio could not be determined due to a background gradient",
                imgNode: "Element's contrast ratio could not be determined because element contains an image node",
                bgOverlap: "Element's contrast ratio could not be determined because of element overlap"
              }
            }
          },
          "autocomplete-appropriate": {
            impact: "serious",
            messages: {
              pass: "the autocomplete value is on an appropriate element",
              fail: "the autocomplete value is inappropriate for this type of input"
            }
          },
          "autocomplete-valid": {
            impact: "serious",
            messages: {
              pass: "the autocomplete attribute is correctly formatted",
              fail: "the autocomplete attribute is incorrectly formatted"
            }
          },
          accesskeys: {
            impact: "serious",
            messages: {
              pass: "Accesskey attribute value is unique",
              fail: "Document has multiple elements with the same accesskey"
            }
          },
          "focusable-content": {
            impact: "serious",
            messages: {
              pass: "Element contains focusable elements",
              fail: "Element should have focusable content"
            }
          },
          "focusable-disabled": {
            impact: "serious",
            messages: {
              pass: "No focusable elements contained within element",
              incomplete: "Check if the focusable elements immediately move the focus indicator",
              fail: "Focusable content should be disabled or be removed from the DOM"
            }
          },
          "focusable-element": {
            impact: "serious",
            messages: {
              pass: "Element is focusable",
              fail: "Element should be focusable"
            }
          },
          "focusable-modal-open": {
            impact: "serious",
            messages: {
              pass: "No focusable elements while a modal is open",
              incomplete: "Check that focusable elements are not tabbable in the current state"
            }
          },
          "focusable-no-name": {
            impact: "serious",
            messages: {
              pass: "Element is not in tab order or has accessible text",
              fail: "Element is in tab order and does not have accessible text",
              incomplete: "Unable to determine if element has an accessible name"
            }
          },
          "focusable-not-tabbable": {
            impact: "serious",
            messages: {
              pass: "No focusable elements contained within element",
              incomplete: "Check if the focusable elements immediately move the focus indicator",
              fail: 'Focusable content should have tabindex="-1" or be removed from the DOM'
            }
          },
          "frame-focusable-content": {
            impact: "serious",
            messages: {
              pass: "Element does not have focusable descendants",
              fail: "Element has focusable descendants",
              incomplete: "Could not determine if element has descendants"
            }
          },
          "landmark-is-top-level": {
            impact: "moderate",
            messages: {
              pass: "The ${data.role} landmark is at the top level.",
              fail: "The ${data.role} landmark is contained in another landmark."
            }
          },
          "no-focusable-content": {
            impact: "serious",
            messages: {
              pass: "Element does not have focusable descendants",
              fail: {
                default: "Element has focusable descendants",
                notHidden: 'Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")'
              },
              incomplete: "Could not determine if element has descendants"
            }
          },
          "page-has-heading-one": {
            impact: "moderate",
            messages: {
              pass: "Page has at least one level-one heading",
              fail: "Page must have a level-one heading"
            }
          },
          "page-has-main": {
            impact: "moderate",
            messages: {
              pass: "Document has at least one main landmark",
              fail: "Document does not have a main landmark"
            }
          },
          "page-no-duplicate-banner": {
            impact: "moderate",
            messages: {
              pass: "Document does not have more than one banner landmark",
              fail: "Document has more than one banner landmark"
            }
          },
          "page-no-duplicate-contentinfo": {
            impact: "moderate",
            messages: {
              pass: "Document does not have more than one contentinfo landmark",
              fail: "Document has more than one contentinfo landmark"
            }
          },
          "page-no-duplicate-main": {
            impact: "moderate",
            messages: {
              pass: "Document does not have more than one main landmark",
              fail: "Document has more than one main landmark"
            }
          },
          tabindex: {
            impact: "serious",
            messages: {
              pass: "Element does not have a tabindex greater than 0",
              fail: "Element has a tabindex greater than 0"
            }
          },
          "alt-space-value": {
            impact: "critical",
            messages: {
              pass: "Element has a valid alt attribute value",
              fail: "Element has an alt attribute containing only a space character, which is not ignored by all screen readers"
            }
          },
          "duplicate-img-label": {
            impact: "minor",
            messages: {
              pass: "Element does not duplicate existing text in <img> alt text",
              fail: "Element contains <img> element with alt text that duplicates existing text"
            }
          },
          "explicit-label": {
            impact: "critical",
            messages: {
              pass: "Form element has an explicit <label>",
              fail: "Form element does not have an explicit <label>",
              incomplete: "Unable to determine if form element has an explicit <label>"
            }
          },
          "help-same-as-label": {
            impact: "minor",
            messages: {
              pass: "Help text (title or aria-describedby) does not duplicate label text",
              fail: "Help text (title or aria-describedby) text is the same as the label text"
            }
          },
          "hidden-explicit-label": {
            impact: "critical",
            messages: {
              pass: "Form element has a visible explicit <label>",
              fail: "Form element has explicit <label> that is hidden",
              incomplete: "Unable to determine if form element has explicit <label> that is hidden"
            }
          },
          "implicit-label": {
            impact: "critical",
            messages: {
              pass: "Form element has an implicit (wrapped) <label>",
              fail: "Form element does not have an implicit (wrapped) <label>",
              incomplete: "Unable to determine if form element has an implicit (wrapped} <label>"
            }
          },
          "label-content-name-mismatch": {
            impact: "serious",
            messages: {
              pass: "Element contains visible text as part of it's accessible name",
              fail: "Text inside the element is not included in the accessible name"
            }
          },
          "multiple-label": {
            impact: "moderate",
            messages: {
              pass: "Form field does not have multiple label elements",
              incomplete: "Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."
            }
          },
          "title-only": {
            impact: "serious",
            messages: {
              pass: "Form element does not solely use title attribute for its label",
              fail: "Only title used to generate label for form element"
            }
          },
          "landmark-is-unique": {
            impact: "moderate",
            messages: {
              pass: "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",
              fail: "The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"
            }
          },
          "has-lang": {
            impact: "serious",
            messages: {
              pass: "The <html> element has a lang attribute",
              fail: {
                noXHTML: "The xml:lang attribute is not valid on HTML pages, use the lang attribute.",
                noLang: "The <html> element does not have a lang attribute"
              }
            }
          },
          "valid-lang": {
            impact: "serious",
            messages: {
              pass: "Value of lang attribute is included in the list of valid languages",
              fail: "Value of lang attribute not included in the list of valid languages"
            }
          },
          "xml-lang-mismatch": {
            impact: "moderate",
            messages: {
              pass: "Lang and xml:lang attributes have the same base language",
              fail: "Lang and xml:lang attributes do not have the same base language"
            }
          },
          dlitem: {
            impact: "serious",
            messages: {
              pass: "Description list item has a <dl> parent element",
              fail: "Description list item does not have a <dl> parent element"
            }
          },
          listitem: {
            impact: "serious",
            messages: {
              pass: 'List item has a <ul>, <ol> or role="list" parent element',
              fail: {
                default: "List item does not have a <ul>, <ol> parent element",
                roleNotValid: 'List item does not have a <ul>, <ol> parent element without a role, or a role="list"'
              }
            }
          },
          "only-dlitems": {
            impact: "serious",
            messages: {
              pass: "dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",
              fail: "dl element has direct children that are not allowed: ${data.values}"
            }
          },
          "only-listitems": {
            impact: "serious",
            messages: {
              pass: "List element only has direct children that are allowed inside <li> elements",
              fail: "List element has direct children that are not allowed: ${data.values}"
            }
          },
          "structured-dlitems": {
            impact: "serious",
            messages: {
              pass: "When not empty, element has both <dt> and <dd> elements",
              fail: "When not empty, element does not have at least one <dt> element followed by at least one <dd> element"
            }
          },
          caption: {
            impact: "critical",
            messages: {
              pass: "The multimedia element has a captions track",
              incomplete: "Check that captions is available for the element"
            }
          },
          "frame-tested": {
            impact: "critical",
            messages: {
              pass: "The iframe was tested with axe-core",
              fail: "The iframe could not be tested with axe-core",
              incomplete: "The iframe still has to be tested with axe-core"
            }
          },
          "no-autoplay-audio": {
            impact: "moderate",
            messages: {
              pass: "<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",
              fail: "<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",
              incomplete: "Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"
            }
          },
          "css-orientation-lock": {
            impact: "serious",
            messages: {
              pass: "Display is operable, and orientation lock does not exist",
              fail: "CSS Orientation lock is applied, and makes display inoperable",
              incomplete: "CSS Orientation lock cannot be determined"
            }
          },
          "meta-viewport-large": {
            impact: "minor",
            messages: {
              pass: "<meta> tag does not prevent significant zooming on mobile devices",
              fail: "<meta> tag limits zooming on mobile devices"
            }
          },
          "meta-viewport": {
            impact: "critical",
            messages: {
              pass: "<meta> tag does not disable zooming on mobile devices",
              fail: "${data} on <meta> tag disables zooming on mobile devices"
            }
          },
          "target-offset": {
            impact: "serious",
            messages: {
              pass: "Target has sufficient space from its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px which is at least ${data.minOffset}px.",
              fail: "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px.",
              incomplete: {
                default: "Element with negative tabindex has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is this a target?",
                nonTabbableNeighbor: "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is the neighbor a target?"
              }
            }
          },
          "target-size": {
            impact: "serious",
            messages: {
              pass: {
                default: "Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",
                obscured: "Control is ignored because it is fully obscured and thus not clickable"
              },
              fail: {
                default: "Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",
                partiallyObscured: "Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)"
              },
              incomplete: {
                default: "Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",
                contentOverflow: "Element size could not be accurately determined due to overflow content",
                partiallyObscured: "Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",
                partiallyObscuredNonTabbable: "Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?"
              }
            }
          },
          "header-present": {
            impact: "serious",
            messages: {
              pass: "Page has a heading",
              fail: "Page does not have a heading"
            }
          },
          "heading-order": {
            impact: "moderate",
            messages: {
              pass: "Heading order valid",
              fail: "Heading order invalid",
              incomplete: "Unable to determine previous heading"
            }
          },
          "identical-links-same-purpose": {
            impact: "minor",
            messages: {
              pass: "There are no other links with the same name, that go to a different URL",
              incomplete: "Check that links have the same purpose, or are intentionally ambiguous."
            }
          },
          "internal-link-present": {
            impact: "serious",
            messages: {
              pass: "Valid skip link found",
              fail: "No valid skip link found"
            }
          },
          landmark: {
            impact: "serious",
            messages: {
              pass: "Page has a landmark region",
              fail: "Page does not have a landmark region"
            }
          },
          "meta-refresh-no-exceptions": {
            impact: "minor",
            messages: {
              pass: "<meta> tag does not immediately refresh the page",
              fail: "<meta> tag forces timed refresh of page"
            }
          },
          "meta-refresh": {
            impact: "critical",
            messages: {
              pass: "<meta> tag does not immediately refresh the page",
              fail: "<meta> tag forces timed refresh of page (less than 20 hours)"
            }
          },
          "p-as-heading": {
            impact: "serious",
            messages: {
              pass: "<p> elements are not styled as headings",
              fail: "Heading elements should be used instead of styled <p> elements",
              incomplete: "Unable to determine if <p> elements are styled as headings"
            }
          },
          region: {
            impact: "moderate",
            messages: {
              pass: "All page content is contained by landmarks",
              fail: "Some page content is not contained by landmarks"
            }
          },
          "skip-link": {
            impact: "moderate",
            messages: {
              pass: "Skip link target exists",
              incomplete: "Skip link target should become visible on activation",
              fail: "No skip link target"
            }
          },
          "unique-frame-title": {
            impact: "serious",
            messages: {
              pass: "Element's title attribute is unique",
              fail: "Element's title attribute is not unique"
            }
          },
          "duplicate-id-active": {
            impact: "serious",
            messages: {
              pass: "Document has no active elements that share the same id attribute",
              fail: "Document has active elements with the same id attribute: ${data}"
            }
          },
          "duplicate-id-aria": {
            impact: "critical",
            messages: {
              pass: "Document has no elements referenced with ARIA or labels that share the same id attribute",
              fail: "Document has multiple elements referenced with ARIA with the same id attribute: ${data}"
            }
          },
          "duplicate-id": {
            impact: "minor",
            messages: {
              pass: "Document has no static elements that share the same id attribute",
              fail: "Document has multiple static elements with the same id attribute: ${data}"
            }
          },
          "aria-label": {
            impact: "serious",
            messages: {
              pass: "aria-label attribute exists and is not empty",
              fail: "aria-label attribute does not exist or is empty"
            }
          },
          "aria-labelledby": {
            impact: "serious",
            messages: {
              pass: "aria-labelledby attribute exists and references elements that are visible to screen readers",
              fail: "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
              incomplete: "ensure aria-labelledby references an existing element"
            }
          },
          "avoid-inline-spacing": {
            impact: "serious",
            messages: {
              pass: "No inline styles with '!important' that affect text spacing has been specified",
              fail: {
                singular: "Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",
                plural: "Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"
              }
            }
          },
          "button-has-visible-text": {
            impact: "critical",
            messages: {
              pass: "Element has inner text that is visible to screen readers",
              fail: "Element does not have inner text that is visible to screen readers",
              incomplete: "Unable to determine if element has children"
            }
          },
          "doc-has-title": {
            impact: "serious",
            messages: {
              pass: "Document has a non-empty <title> element",
              fail: "Document does not have a non-empty <title> element"
            }
          },
          exists: {
            impact: "minor",
            messages: {
              pass: "Element does not exist",
              incomplete: "Element exists"
            }
          },
          "has-alt": {
            impact: "critical",
            messages: {
              pass: "Element has an alt attribute",
              fail: "Element does not have an alt attribute"
            }
          },
          "has-visible-text": {
            impact: "minor",
            messages: {
              pass: "Element has text that is visible to screen readers",
              fail: "Element does not have text that is visible to screen readers",
              incomplete: "Unable to determine if element has children"
            }
          },
          "important-letter-spacing": {
            impact: "serious",
            messages: {
              pass: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
              fail: "letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"
            }
          },
          "important-line-height": {
            impact: "serious",
            messages: {
              pass: "line-height in the style attribute is not set to !important, or meets the minimum",
              fail: "line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"
            }
          },
          "important-word-spacing": {
            impact: "serious",
            messages: {
              pass: "word-spacing in the style attribute is not set to !important, or meets the minimum",
              fail: "word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"
            }
          },
          "is-on-screen": {
            impact: "serious",
            messages: {
              pass: "Element is not visible",
              fail: "Element is visible"
            }
          },
          "non-empty-alt": {
            impact: "critical",
            messages: {
              pass: "Element has a non-empty alt attribute",
              fail: {
                noAttr: "Element has no alt attribute",
                emptyAttr: "Element has an empty alt attribute"
              }
            }
          },
          "non-empty-if-present": {
            impact: "critical",
            messages: {
              pass: {
                default: "Element does not have a value attribute",
                "has-label": "Element has a non-empty value attribute"
              },
              fail: "Element has a value attribute and the value attribute is empty"
            }
          },
          "non-empty-placeholder": {
            impact: "serious",
            messages: {
              pass: "Element has a placeholder attribute",
              fail: {
                noAttr: "Element has no placeholder attribute",
                emptyAttr: "Element has an empty placeholder attribute"
              }
            }
          },
          "non-empty-title": {
            impact: "serious",
            messages: {
              pass: "Element has a title attribute",
              fail: {
                noAttr: "Element has no title attribute",
                emptyAttr: "Element has an empty title attribute"
              }
            }
          },
          "non-empty-value": {
            impact: "critical",
            messages: {
              pass: "Element has a non-empty value attribute",
              fail: {
                noAttr: "Element has no value attribute",
                emptyAttr: "Element has an empty value attribute"
              }
            }
          },
          "presentational-role": {
            impact: "minor",
            messages: {
              pass: 'Element\'s default semantics were overriden with role="${data.role}"',
              fail: {
                default: `Element's default semantics were not overridden with role="none" or role="presentation"`,
                globalAria: "Element's role is not presentational because it has a global ARIA attribute",
                focusable: "Element's role is not presentational because it is focusable",
                both: "Element's role is not presentational because it has a global ARIA attribute and is focusable",
                iframe: 'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers'
              }
            }
          },
          "role-none": {
            impact: "minor",
            messages: {
              pass: `Element's default semantics were overriden with role="none"`,
              fail: `Element's default semantics were not overridden with role="none"`
            }
          },
          "role-presentation": {
            impact: "minor",
            messages: {
              pass: `Element's default semantics were overriden with role="presentation"`,
              fail: `Element's default semantics were not overridden with role="presentation"`
            }
          },
          "svg-non-empty-title": {
            impact: "serious",
            messages: {
              pass: "Element has a child that is a title",
              fail: {
                noTitle: "Element has no child that is a title",
                emptyTitle: "Element child title is empty"
              },
              incomplete: "Unable to determine element has a child that is a title"
            }
          },
          "caption-faked": {
            impact: "serious",
            messages: {
              pass: "The first row of a table is not used as a caption",
              fail: "The first child of the table should be a caption instead of a table cell"
            }
          },
          "html5-scope": {
            impact: "moderate",
            messages: {
              pass: "Scope attribute is only used on table header elements (<th>)",
              fail: "In HTML 5, scope attributes may only be used on table header elements (<th>)"
            }
          },
          "same-caption-summary": {
            impact: "minor",
            messages: {
              pass: "Content of summary attribute and <caption> are not duplicated",
              fail: "Content of summary attribute and <caption> element are identical",
              incomplete: "Unable to determine if <table> element has a caption"
            }
          },
          "scope-value": {
            impact: "critical",
            messages: {
              pass: "Scope attribute is used correctly",
              fail: "The value of the scope attribute may only be 'row' or 'col'"
            }
          },
          "td-has-header": {
            impact: "critical",
            messages: {
              pass: "All non-empty data cells have table headers",
              fail: "Some non-empty data cells do not have table headers"
            }
          },
          "td-headers-attr": {
            impact: "serious",
            messages: {
              pass: "The headers attribute is exclusively used to refer to other cells in the table",
              incomplete: "The headers attribute is empty",
              fail: "The headers attribute is not exclusively used to refer to other cells in the table"
            }
          },
          "th-has-data-cells": {
            impact: "serious",
            messages: {
              pass: "All table header cells refer to data cells",
              fail: "Not all table header cells refer to data cells",
              incomplete: "Table data cells are missing or empty"
            }
          },
          "hidden-content": {
            impact: "minor",
            messages: {
              pass: "All content on the page has been analyzed.",
              fail: "There were problems analyzing the content on this page.",
              incomplete: "There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."
            }
          }
        },
        failureSummaries: {
          any: {
            failureMessage: function(T) {
              var N = "Fix any of the following:", K = T;
              if (K)
                for (var pe, ge = -1, Je = K.length - 1; ge < Je; )
                  pe = K[ge += 1], N += `
  ` + pe.split(`
`).join(`
  `);
              return N;
            }
          },
          none: {
            failureMessage: function(T) {
              var N = "Fix all of the following:", K = T;
              if (K)
                for (var pe, ge = -1, Je = K.length - 1; ge < Je; )
                  pe = K[ge += 1], N += `
  ` + pe.split(`
`).join(`
  `);
              return N;
            }
          }
        },
        incompleteFallbackMessage: "axe couldn't tell the reason. Time to break out the element inspector!"
      },
      rules: [{
        id: "accesskeys",
        impact: "serious",
        selector: "[accesskey]",
        excludeHidden: !1,
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: [],
        none: ["accesskeys"]
      }, {
        id: "area-alt",
        impact: "critical",
        selector: "map area[href]",
        excludeHidden: !1,
        tags: ["cat.text-alternatives", "wcag2a", "wcag244", "wcag412", "section508", "section508.22.a", "TTv5", "TT6.a", "EN-301-549", "EN-9.2.4.4", "EN-9.4.1.2", "ACT"],
        actIds: ["c487ae"],
        all: [],
        any: [{
          options: {
            attribute: "alt"
          },
          id: "non-empty-alt"
        }, "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-allowed-attr",
        impact: "critical",
        matches: "aria-allowed-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["5c01ea"],
        all: [{
          options: {
            validTreeRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
          },
          id: "aria-allowed-attr"
        }],
        any: [],
        none: ["aria-unsupported-attr"]
      }, {
        id: "aria-allowed-role",
        impact: "minor",
        excludeHidden: !1,
        selector: "[role]",
        matches: "aria-allowed-role-matches",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: [{
          options: {
            allowImplicit: !0,
            ignoredTags: []
          },
          id: "aria-allowed-role"
        }],
        none: []
      }, {
        id: "aria-braille-equivalent",
        reviewOnFail: !0,
        impact: "serious",
        selector: "[aria-brailleroledescription], [aria-braillelabel]",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        all: ["braille-roledescription-equivalent", "braille-label-equivalent"],
        any: [],
        none: []
      }, {
        id: "aria-command-name",
        impact: "serious",
        selector: '[role="link"], [role="button"], [role="menuitem"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2", "ACT"],
        actIds: ["97a4e1"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-conditional-attr",
        impact: "serious",
        matches: "aria-allowed-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["5c01ea"],
        all: [{
          options: {
            invalidTableRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
          },
          id: "aria-conditional-attr"
        }],
        any: [],
        none: []
      }, {
        id: "aria-deprecated-role",
        impact: "minor",
        selector: "[role]",
        matches: "no-empty-role-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["674b10"],
        all: [],
        any: [],
        none: ["deprecatedrole"]
      }, {
        id: "aria-dialog-name",
        impact: "serious",
        selector: '[role="dialog"], [role="alertdialog"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-hidden-body",
        impact: "critical",
        selector: "body",
        excludeHidden: !1,
        matches: "is-initiator-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        all: [],
        any: ["aria-hidden-body"],
        none: []
      }, {
        id: "aria-hidden-focus",
        impact: "serious",
        selector: '[aria-hidden="true"]',
        matches: "aria-hidden-focus-matches",
        excludeHidden: !1,
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["6cfa84"],
        all: ["focusable-modal-open", "focusable-disabled", "focusable-not-tabbable"],
        any: [],
        none: []
      }, {
        id: "aria-input-field-name",
        impact: "serious",
        selector: '[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"],
        actIds: ["e086e5"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: ["no-implicit-explicit-label"]
      }, {
        id: "aria-meter-name",
        impact: "serious",
        selector: '[role="meter"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag111", "EN-301-549", "EN-9.1.1.1"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-progressbar-name",
        impact: "serious",
        selector: '[role="progressbar"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag111", "EN-301-549", "EN-9.1.1.1"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-prohibited-attr",
        impact: "serious",
        matches: "aria-allowed-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["5c01ea"],
        all: [],
        any: [],
        none: [{
          options: {
            elementsAllowedAriaLabel: ["applet", "input"]
          },
          id: "aria-prohibited-attr"
        }]
      }, {
        id: "aria-required-attr",
        impact: "critical",
        selector: "[role]",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["4e8ab6"],
        all: [],
        any: ["aria-required-attr"],
        none: []
      }, {
        id: "aria-required-children",
        impact: "critical",
        selector: "[role]",
        matches: "aria-required-children-matches",
        tags: ["cat.aria", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
        actIds: ["bc4a75", "ff89c9"],
        all: [],
        any: [{
          options: {
            reviewEmpty: ["doc-bibliography", "doc-endnotes", "grid", "list", "listbox", "menu", "menubar", "table", "tablist", "tree", "treegrid", "rowgroup"]
          },
          id: "aria-required-children"
        }, "aria-busy"],
        none: []
      }, {
        id: "aria-required-parent",
        impact: "critical",
        selector: "[role]",
        matches: "aria-required-parent-matches",
        tags: ["cat.aria", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
        actIds: ["ff89c9"],
        all: [],
        any: [{
          options: {
            ownGroupRoles: ["listitem", "treeitem"]
          },
          id: "aria-required-parent"
        }],
        none: []
      }, {
        id: "aria-roledescription",
        impact: "serious",
        selector: "[aria-roledescription]",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2", "deprecated"],
        enabled: !1,
        all: [],
        any: [{
          options: {
            supportedRoles: ["button", "img", "checkbox", "radio", "combobox", "menuitemcheckbox", "menuitemradio"]
          },
          id: "aria-roledescription"
        }],
        none: []
      }, {
        id: "aria-roles",
        impact: "critical",
        selector: "[role]",
        matches: "no-empty-role-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["674b10"],
        all: [],
        any: [],
        none: ["invalidrole", "abstractrole", "unsupportedrole"]
      }, {
        id: "aria-text",
        impact: "serious",
        selector: "[role=text]",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: ["no-focusable-content"],
        none: []
      }, {
        id: "aria-toggle-field-name",
        impact: "serious",
        selector: '[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"],
        actIds: ["e086e5"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: ["no-implicit-explicit-label"]
      }, {
        id: "aria-tooltip-name",
        impact: "serious",
        selector: '[role="tooltip"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-treeitem-name",
        impact: "serious",
        selector: '[role="treeitem"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-valid-attr-value",
        impact: "critical",
        matches: "aria-has-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["6a7281"],
        all: [{
          options: [],
          id: "aria-valid-attr-value"
        }, "aria-errormessage", "aria-level"],
        any: [],
        none: []
      }, {
        id: "aria-valid-attr",
        impact: "critical",
        matches: "aria-has-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["5f99a7"],
        all: [],
        any: [{
          options: [],
          id: "aria-valid-attr"
        }],
        none: []
      }, {
        id: "audio-caption",
        impact: "critical",
        selector: "audio",
        enabled: !1,
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag121", "EN-301-549", "EN-9.1.2.1", "section508", "section508.22.a", "deprecated"],
        actIds: ["2eb176", "afb423"],
        all: [],
        any: [],
        none: ["caption"]
      }, {
        id: "autocomplete-valid",
        impact: "serious",
        matches: "autocomplete-matches",
        tags: ["cat.forms", "wcag21aa", "wcag135", "EN-301-549", "EN-9.1.3.5", "ACT"],
        actIds: ["73f2c2"],
        all: [{
          options: {
            stateTerms: ["none", "false", "true", "disabled", "enabled", "undefined", "null"]
          },
          id: "autocomplete-valid"
        }],
        any: [],
        none: []
      }, {
        id: "avoid-inline-spacing",
        impact: "serious",
        selector: "[style]",
        matches: "is-visible-on-screen-matches",
        tags: ["cat.structure", "wcag21aa", "wcag1412", "EN-301-549", "EN-9.1.4.12", "ACT"],
        actIds: ["24afc2", "9e45ec", "78fd32"],
        all: [{
          options: {
            cssProperty: "letter-spacing",
            minValue: 0.12
          },
          id: "important-letter-spacing"
        }, {
          options: {
            cssProperty: "word-spacing",
            minValue: 0.16
          },
          id: "important-word-spacing"
        }, {
          options: {
            multiLineOnly: !0,
            cssProperty: "line-height",
            minValue: 1.5,
            normalValue: 1
          },
          id: "important-line-height"
        }],
        any: [],
        none: []
      }, {
        id: "blink",
        impact: "serious",
        selector: "blink",
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag222", "section508", "section508.22.j", "TTv5", "TT2.b", "EN-301-549", "EN-9.2.2.2"],
        all: [],
        any: [],
        none: ["is-on-screen"]
      }, {
        id: "button-name",
        impact: "critical",
        selector: "button",
        matches: "no-explicit-name-required-matches",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2", "ACT"],
        actIds: ["97a4e1", "m6b1q3"],
        all: [],
        any: ["button-has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: []
      }, {
        id: "bypass",
        impact: "serious",
        selector: "html",
        pageLevel: !0,
        matches: "bypass-matches",
        reviewOnFail: !0,
        tags: ["cat.keyboard", "wcag2a", "wcag241", "section508", "section508.22.o", "TTv5", "TT9.a", "EN-301-549", "EN-9.2.4.1"],
        actIds: ["cf77f2", "047fe0", "b40fd1", "3e12e1", "ye5d6e"],
        all: [],
        any: ["internal-link-present", {
          options: {
            selector: ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"
          },
          id: "header-present"
        }, {
          options: {
            selector: "main, [role=main]"
          },
          id: "landmark"
        }],
        none: []
      }, {
        id: "color-contrast-enhanced",
        impact: "serious",
        matches: "color-contrast-matches",
        excludeHidden: !1,
        enabled: !1,
        tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"],
        actIds: ["09o5cg"],
        all: [],
        any: [{
          options: {
            ignoreUnicode: !0,
            ignoreLength: !1,
            ignorePseudo: !1,
            boldValue: 700,
            boldTextPt: 14,
            largeTextPt: 18,
            contrastRatio: {
              normal: {
                expected: 7,
                minThreshold: 4.5
              },
              large: {
                expected: 4.5,
                minThreshold: 3
              }
            },
            pseudoSizeThreshold: 0.25,
            shadowOutlineEmMax: 0.1,
            textStrokeEmMin: 0.03
          },
          id: "color-contrast-enhanced"
        }],
        none: []
      }, {
        id: "color-contrast",
        impact: "serious",
        matches: "color-contrast-matches",
        excludeHidden: !1,
        tags: ["cat.color", "wcag2aa", "wcag143", "TTv5", "TT13.c", "EN-301-549", "EN-9.1.4.3", "ACT"],
        actIds: ["afw4f7", "09o5cg"],
        all: [],
        any: [{
          options: {
            ignoreUnicode: !0,
            ignoreLength: !1,
            ignorePseudo: !1,
            boldValue: 700,
            boldTextPt: 14,
            largeTextPt: 18,
            contrastRatio: {
              normal: {
                expected: 4.5
              },
              large: {
                expected: 3
              }
            },
            pseudoSizeThreshold: 0.25,
            shadowOutlineEmMax: 0.2,
            textStrokeEmMin: 0.03
          },
          id: "color-contrast"
        }],
        none: []
      }, {
        id: "css-orientation-lock",
        impact: "serious",
        selector: "html",
        tags: ["cat.structure", "wcag134", "wcag21aa", "EN-301-549", "EN-9.1.3.4", "experimental"],
        actIds: ["b33eff"],
        all: [{
          options: {
            degreeThreshold: 2
          },
          id: "css-orientation-lock"
        }],
        any: [],
        none: [],
        preload: !0
      }, {
        id: "definition-list",
        impact: "serious",
        selector: "dl",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
        all: [],
        any: [],
        none: ["structured-dlitems", {
          options: {
            validRoles: ["definition", "term", "listitem"],
            validNodeNames: ["dt", "dd"],
            divGroups: !0
          },
          id: "only-dlitems"
        }]
      }, {
        id: "dlitem",
        impact: "serious",
        selector: "dd, dt",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
        all: [],
        any: ["dlitem"],
        none: []
      }, {
        id: "document-title",
        impact: "serious",
        selector: "html",
        matches: "is-initiator-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag242", "TTv5", "TT12.a", "EN-301-549", "EN-9.2.4.2", "ACT"],
        actIds: ["2779a5"],
        all: [],
        any: ["doc-has-title"],
        none: []
      }, {
        id: "duplicate-id-active",
        impact: "serious",
        selector: "[id]",
        matches: "duplicate-id-active-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a-obsolete", "wcag411", "deprecated"],
        enabled: !1,
        actIds: ["3ea0c8"],
        all: [],
        any: ["duplicate-id-active"],
        none: []
      }, {
        id: "duplicate-id-aria",
        impact: "critical",
        selector: "[id]",
        matches: "duplicate-id-aria-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        reviewOnFail: !0,
        actIds: ["3ea0c8"],
        all: [],
        any: ["duplicate-id-aria"],
        none: []
      }, {
        id: "duplicate-id",
        impact: "minor",
        selector: "[id]",
        matches: "duplicate-id-misc-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a-obsolete", "wcag411", "deprecated"],
        enabled: !1,
        actIds: ["3ea0c8"],
        all: [],
        any: ["duplicate-id"],
        none: []
      }, {
        id: "empty-heading",
        impact: "minor",
        selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
        matches: "heading-matches",
        tags: ["cat.name-role-value", "best-practice"],
        actIds: ["ffd0e9"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "empty-table-header",
        impact: "minor",
        selector: 'th:not([role]), [role="rowheader"], [role="columnheader"]',
        tags: ["cat.name-role-value", "best-practice"],
        all: [],
        any: ["has-visible-text"],
        none: []
      }, {
        id: "focus-order-semantics",
        impact: "minor",
        selector: "div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",
        matches: "inserted-into-focus-order-matches",
        tags: ["cat.keyboard", "best-practice", "experimental"],
        all: [],
        any: [{
          options: [],
          id: "has-widget-role"
        }, {
          options: {
            roles: ["tooltip"]
          },
          id: "valid-scrollable-semantics"
        }],
        none: []
      }, {
        id: "form-field-multiple-labels",
        impact: "moderate",
        selector: "input, select, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "wcag2a", "wcag332", "TTv5", "TT5.c", "EN-301-549", "EN-9.3.3.2"],
        all: [],
        any: [],
        none: ["multiple-label"]
      }, {
        id: "frame-focusable-content",
        impact: "serious",
        selector: "html",
        matches: "frame-focusable-content-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag211", "TTv5", "TT4.a", "EN-301-549", "EN-9.2.1.1"],
        actIds: ["akn7bn"],
        all: [],
        any: ["frame-focusable-content"],
        none: []
      }, {
        id: "frame-tested",
        impact: "critical",
        selector: "html, frame, iframe",
        tags: ["cat.structure", "best-practice", "review-item"],
        all: [{
          options: {
            isViolation: !1
          },
          id: "frame-tested"
        }],
        any: [],
        none: []
      }, {
        id: "frame-title-unique",
        impact: "serious",
        selector: "frame[title], iframe[title]",
        matches: "frame-title-has-text-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag412", "TTv5", "TT12.d", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["4b1c6c"],
        all: [],
        any: [],
        none: ["unique-frame-title"],
        reviewOnFail: !0
      }, {
        id: "frame-title",
        impact: "serious",
        selector: "frame, iframe",
        matches: "no-negative-tabindex-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag412", "section508", "section508.22.i", "TTv5", "TT12.d", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["cae760"],
        all: [],
        any: [{
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "aria-label", "aria-labelledby", "presentational-role"],
        none: []
      }, {
        id: "heading-order",
        impact: "moderate",
        selector: "h1, h2, h3, h4, h5, h6, [role=heading]",
        matches: "heading-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["heading-order"],
        none: []
      }, {
        id: "hidden-content",
        impact: "minor",
        selector: "*",
        excludeHidden: !1,
        tags: ["cat.structure", "best-practice", "experimental", "review-item"],
        all: [],
        any: ["hidden-content"],
        none: []
      }, {
        id: "html-has-lang",
        impact: "serious",
        selector: "html",
        matches: "is-initiator-matches",
        tags: ["cat.language", "wcag2a", "wcag311", "TTv5", "TT11.a", "EN-301-549", "EN-9.3.1.1", "ACT"],
        actIds: ["b5c3f8"],
        all: [],
        any: [{
          options: {
            attributes: ["lang", "xml:lang"]
          },
          id: "has-lang"
        }],
        none: []
      }, {
        id: "html-lang-valid",
        impact: "serious",
        selector: 'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',
        tags: ["cat.language", "wcag2a", "wcag311", "TTv5", "TT11.a", "EN-301-549", "EN-9.3.1.1", "ACT"],
        actIds: ["bf051a"],
        all: [],
        any: [],
        none: [{
          options: {
            attributes: ["lang", "xml:lang"]
          },
          id: "valid-lang"
        }]
      }, {
        id: "html-xml-lang-mismatch",
        impact: "moderate",
        selector: "html[lang][xml\\:lang]",
        matches: "xml-lang-mismatch-matches",
        tags: ["cat.language", "wcag2a", "wcag311", "EN-301-549", "EN-9.3.1.1", "ACT"],
        actIds: ["5b7ae0"],
        all: ["xml-lang-mismatch"],
        any: [],
        none: []
      }, {
        id: "identical-links-same-purpose",
        impact: "minor",
        selector: 'a[href], area[href], [role="link"]',
        excludeHidden: !1,
        enabled: !1,
        matches: "identical-links-same-purpose-matches",
        tags: ["cat.semantics", "wcag2aaa", "wcag249"],
        actIds: ["b20e66"],
        all: ["identical-links-same-purpose"],
        any: [],
        none: []
      }, {
        id: "image-alt",
        impact: "critical",
        selector: "img",
        matches: "no-explicit-name-required-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "TTv5", "TT7.a", "TT7.b", "EN-301-549", "EN-9.1.1.1", "ACT"],
        actIds: ["23a2a8"],
        all: [],
        any: ["has-alt", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: ["alt-space-value"]
      }, {
        id: "image-redundant-alt",
        impact: "minor",
        selector: "img",
        tags: ["cat.text-alternatives", "best-practice"],
        all: [],
        any: [],
        none: [{
          options: {
            parentSelector: "button, [role=button], a[href], p, li, td, th"
          },
          id: "duplicate-img-label"
        }]
      }, {
        id: "input-button-name",
        impact: "critical",
        selector: 'input[type="button"], input[type="submit"], input[type="reset"]',
        matches: "no-explicit-name-required-matches",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"],
        actIds: ["97a4e1"],
        all: [],
        any: ["non-empty-if-present", {
          options: {
            attribute: "value"
          },
          id: "non-empty-value"
        }, "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: []
      }, {
        id: "input-image-alt",
        impact: "critical",
        selector: 'input[type="image"]',
        matches: "no-explicit-name-required-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "wcag412", "section508", "section508.22.a", "TTv5", "TT7.a", "EN-301-549", "EN-9.1.1.1", "EN-9.4.1.2", "ACT"],
        actIds: ["59796f"],
        all: [],
        any: [{
          options: {
            attribute: "alt"
          },
          id: "non-empty-alt"
        }, "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "label-content-name-mismatch",
        impact: "serious",
        matches: "label-content-name-mismatch-matches",
        tags: ["cat.semantics", "wcag21a", "wcag253", "EN-301-549", "EN-9.2.5.3", "experimental"],
        actIds: ["2ee8b8"],
        all: [],
        any: [{
          options: {
            pixelThreshold: 0.1,
            occurrenceThreshold: 3
          },
          id: "label-content-name-mismatch"
        }],
        none: []
      }, {
        id: "label-title-only",
        impact: "serious",
        selector: "input, select, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "best-practice"],
        all: [],
        any: [],
        none: ["title-only"]
      }, {
        id: "label",
        impact: "critical",
        selector: "input, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"],
        actIds: ["e086e5"],
        all: [],
        any: ["implicit-label", "explicit-label", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, {
          options: {
            attribute: "placeholder"
          },
          id: "non-empty-placeholder"
        }, "presentational-role"],
        none: ["hidden-explicit-label"]
      }, {
        id: "landmark-banner-is-top-level",
        impact: "moderate",
        selector: "header:not([role]), [role=banner]",
        matches: "landmark-has-body-context-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-complementary-is-top-level",
        impact: "moderate",
        selector: "aside:not([role]), [role=complementary]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-contentinfo-is-top-level",
        impact: "moderate",
        selector: "footer:not([role]), [role=contentinfo]",
        matches: "landmark-has-body-context-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-main-is-top-level",
        impact: "moderate",
        selector: "main:not([role]), [role=main]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-no-duplicate-banner",
        impact: "moderate",
        selector: "header:not([role]), [role=banner]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "header:not([role]), [role=banner]",
            role: "banner"
          },
          id: "page-no-duplicate-banner"
        }],
        none: []
      }, {
        id: "landmark-no-duplicate-contentinfo",
        impact: "moderate",
        selector: "footer:not([role]), [role=contentinfo]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "footer:not([role]), [role=contentinfo]",
            role: "contentinfo"
          },
          id: "page-no-duplicate-contentinfo"
        }],
        none: []
      }, {
        id: "landmark-no-duplicate-main",
        impact: "moderate",
        selector: "main:not([role]), [role=main]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "main:not([role]), [role='main']"
          },
          id: "page-no-duplicate-main"
        }],
        none: []
      }, {
        id: "landmark-one-main",
        impact: "moderate",
        selector: "html",
        tags: ["cat.semantics", "best-practice"],
        all: [{
          options: {
            selector: "main:not([role]), [role='main']",
            passForModal: !0
          },
          id: "page-has-main"
        }],
        any: [],
        none: []
      }, {
        id: "landmark-unique",
        impact: "moderate",
        selector: "[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",
        tags: ["cat.semantics", "best-practice"],
        matches: "landmark-unique-matches",
        all: [],
        any: ["landmark-is-unique"],
        none: []
      }, {
        id: "link-in-text-block",
        impact: "serious",
        selector: "a[href], [role=link]",
        matches: "link-in-text-block-matches",
        excludeHidden: !1,
        tags: ["cat.color", "wcag2a", "wcag141", "TTv5", "TT13.a", "EN-301-549", "EN-9.1.4.1"],
        all: [],
        any: [{
          options: {
            requiredContrastRatio: 3,
            allowSameColor: !0
          },
          id: "link-in-text-block"
        }, "link-in-text-block-style"],
        none: []
      }, {
        id: "link-name",
        impact: "serious",
        selector: "a[href]",
        tags: ["cat.name-role-value", "wcag2a", "wcag244", "wcag412", "section508", "section508.22.a", "TTv5", "TT6.a", "EN-301-549", "EN-9.2.4.4", "EN-9.4.1.2", "ACT"],
        actIds: ["c487ae"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: ["focusable-no-name"]
      }, {
        id: "list",
        impact: "serious",
        selector: "ul, ol",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
        all: [],
        any: [],
        none: [{
          options: {
            validRoles: ["listitem"],
            validNodeNames: ["li"]
          },
          id: "only-listitems"
        }]
      }, {
        id: "listitem",
        impact: "serious",
        selector: "li",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
        all: [],
        any: ["listitem"],
        none: []
      }, {
        id: "marquee",
        impact: "serious",
        selector: "marquee",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag222", "TTv5", "TT2.b", "EN-301-549", "EN-9.2.2.2"],
        all: [],
        any: [],
        none: ["is-on-screen"]
      }, {
        id: "meta-refresh-no-exceptions",
        impact: "minor",
        selector: 'meta[http-equiv="refresh"][content]',
        excludeHidden: !1,
        enabled: !1,
        tags: ["cat.time-and-media", "wcag2aaa", "wcag224", "wcag325"],
        actIds: ["bisz58"],
        all: [],
        any: [{
          options: {
            minDelay: 72e3,
            maxDelay: !1
          },
          id: "meta-refresh-no-exceptions"
        }],
        none: []
      }, {
        id: "meta-refresh",
        impact: "critical",
        selector: 'meta[http-equiv="refresh"][content]',
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag221", "TTv5", "TT8.a", "EN-301-549", "EN-9.2.2.1"],
        actIds: ["bc659a", "bisz58"],
        all: [],
        any: [{
          options: {
            minDelay: 0,
            maxDelay: 72e3
          },
          id: "meta-refresh"
        }],
        none: []
      }, {
        id: "meta-viewport-large",
        impact: "minor",
        selector: 'meta[name="viewport"]',
        matches: "is-initiator-matches",
        excludeHidden: !1,
        tags: ["cat.sensory-and-visual-cues", "best-practice"],
        all: [],
        any: [{
          options: {
            scaleMinimum: 5,
            lowerBound: 2
          },
          id: "meta-viewport-large"
        }],
        none: []
      }, {
        id: "meta-viewport",
        impact: "critical",
        selector: 'meta[name="viewport"]',
        matches: "is-initiator-matches",
        excludeHidden: !1,
        tags: ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "EN-301-549", "EN-9.1.4.4", "ACT"],
        actIds: ["b4f0c3"],
        all: [],
        any: [{
          options: {
            scaleMinimum: 2
          },
          id: "meta-viewport"
        }],
        none: []
      }, {
        id: "nested-interactive",
        impact: "serious",
        matches: "nested-interactive-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag412", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["307n5z"],
        all: [],
        any: ["no-focusable-content"],
        none: []
      }, {
        id: "no-autoplay-audio",
        impact: "moderate",
        excludeHidden: !1,
        selector: "audio[autoplay], video[autoplay]",
        matches: "no-autoplay-audio-matches",
        reviewOnFail: !0,
        tags: ["cat.time-and-media", "wcag2a", "wcag142", "TTv5", "TT2.a", "EN-301-549", "EN-9.1.4.2", "ACT"],
        actIds: ["80f0bf"],
        preload: !0,
        all: [{
          options: {
            allowedDuration: 3
          },
          id: "no-autoplay-audio"
        }],
        any: [],
        none: []
      }, {
        id: "object-alt",
        impact: "serious",
        selector: "object[data]",
        matches: "object-is-loaded-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "EN-301-549", "EN-9.1.1.1"],
        actIds: ["8fc3b6"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: []
      }, {
        id: "p-as-heading",
        impact: "serious",
        selector: "p",
        matches: "p-as-heading-matches",
        tags: ["cat.semantics", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1", "experimental"],
        all: [{
          options: {
            margins: [{
              weight: 150,
              italic: !0
            }, {
              weight: 150,
              size: 1.15
            }, {
              italic: !0,
              size: 1.15
            }, {
              size: 1.4
            }],
            passLength: 1,
            failLength: 0.5
          },
          id: "p-as-heading"
        }],
        any: [],
        none: []
      }, {
        id: "page-has-heading-one",
        impact: "moderate",
        selector: "html",
        tags: ["cat.semantics", "best-practice"],
        all: [{
          options: {
            selector: "h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",
            passForModal: !0
          },
          id: "page-has-heading-one"
        }],
        any: [],
        none: []
      }, {
        id: "presentation-role-conflict",
        impact: "minor",
        selector: `img[alt=''], [role="none"], [role="presentation"]`,
        matches: "has-implicit-chromium-role-matches",
        tags: ["cat.aria", "best-practice", "ACT"],
        actIds: ["46ca7f"],
        all: [],
        any: [],
        none: ["is-element-focusable", "has-global-aria-attribute"]
      }, {
        id: "region",
        impact: "moderate",
        selector: "body *",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: [{
          options: {
            regionMatcher: "dialog, [role=dialog], [role=alertdialog], svg"
          },
          id: "region"
        }],
        none: []
      }, {
        id: "role-img-alt",
        impact: "serious",
        selector: "[role='img']:not(img, area, input, object)",
        matches: "html-namespace-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "TTv5", "TT7.a", "EN-301-549", "EN-9.1.1.1", "ACT"],
        actIds: ["23a2a8"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "scope-attr-valid",
        impact: "moderate",
        selector: "td[scope], th[scope]",
        tags: ["cat.tables", "best-practice"],
        all: ["html5-scope", {
          options: {
            values: ["row", "col", "rowgroup", "colgroup"]
          },
          id: "scope-value"
        }],
        any: [],
        none: []
      }, {
        id: "scrollable-region-focusable",
        impact: "serious",
        selector: "*:not(select,textarea)",
        matches: "scrollable-region-focusable-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag211", "TTv5", "TT4.a", "EN-301-549", "EN-9.2.1.1"],
        actIds: ["0ssw9k"],
        all: [],
        any: ["focusable-content", "focusable-element"],
        none: []
      }, {
        id: "select-name",
        impact: "critical",
        selector: "select",
        tags: ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"],
        actIds: ["e086e5"],
        all: [],
        any: ["implicit-label", "explicit-label", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: ["hidden-explicit-label"]
      }, {
        id: "server-side-image-map",
        impact: "minor",
        selector: "img[ismap]",
        tags: ["cat.text-alternatives", "wcag2a", "wcag211", "section508", "section508.22.f", "TTv5", "TT4.a", "EN-301-549", "EN-9.2.1.1"],
        all: [],
        any: [],
        none: ["exists"]
      }, {
        id: "skip-link",
        impact: "moderate",
        selector: 'a[href^="#"], a[href^="/#"]',
        matches: "skip-link-matches",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: ["skip-link"],
        none: []
      }, {
        id: "svg-img-alt",
        impact: "serious",
        selector: '[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',
        matches: "svg-namespace-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "TTv5", "TT7.a", "EN-301-549", "EN-9.1.1.1", "ACT"],
        actIds: ["7d6734"],
        all: [],
        any: ["svg-non-empty-title", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "tabindex",
        impact: "serious",
        selector: "[tabindex]",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: ["tabindex"],
        none: []
      }, {
        id: "table-duplicate-name",
        impact: "minor",
        selector: "table",
        tags: ["cat.tables", "best-practice"],
        all: [],
        any: [],
        none: ["same-caption-summary"]
      }, {
        id: "table-fake-caption",
        impact: "serious",
        selector: "table",
        matches: "data-table-matches",
        tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g", "EN-301-549", "EN-9.1.3.1"],
        all: ["caption-faked"],
        any: [],
        none: []
      }, {
        id: "target-size",
        impact: "serious",
        selector: "*",
        enabled: !1,
        matches: "widget-not-inline-matches",
        tags: ["cat.sensory-and-visual-cues", "wcag22aa", "wcag258"],
        all: [],
        any: [{
          options: {
            minSize: 24
          },
          id: "target-size"
        }, {
          options: {
            minOffset: 24
          },
          id: "target-offset"
        }],
        none: []
      }, {
        id: "td-has-header",
        impact: "critical",
        selector: "table",
        matches: "data-table-large-matches",
        tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b", "EN-301-549", "EN-9.1.3.1"],
        all: ["td-has-header"],
        any: [],
        none: []
      }, {
        id: "td-headers-attr",
        impact: "serious",
        selector: "table",
        matches: "table-or-grid-role-matches",
        tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b", "EN-301-549", "EN-9.1.3.1"],
        actIds: ["a25f45"],
        all: ["td-headers-attr"],
        any: [],
        none: []
      }, {
        id: "th-has-data-cells",
        impact: "serious",
        selector: "table",
        matches: "data-table-matches",
        tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b", "EN-301-549", "EN-9.1.3.1"],
        actIds: ["d0f69e"],
        all: ["th-has-data-cells"],
        any: [],
        none: []
      }, {
        id: "valid-lang",
        impact: "serious",
        selector: "[lang]:not(html), [xml\\:lang]:not(html)",
        tags: ["cat.language", "wcag2aa", "wcag312", "TTv5", "TT11.b", "EN-301-549", "EN-9.3.1.2", "ACT"],
        actIds: ["de46e4"],
        all: [],
        any: [],
        none: [{
          options: {
            attributes: ["lang", "xml:lang"]
          },
          id: "valid-lang"
        }]
      }, {
        id: "video-caption",
        impact: "critical",
        selector: "video",
        tags: ["cat.text-alternatives", "wcag2a", "wcag122", "section508", "section508.22.a", "TTv5", "TT17.a", "EN-301-549", "EN-9.1.2.2"],
        actIds: ["eac66b"],
        all: [],
        any: [],
        none: ["caption"]
      }],
      checks: [{
        id: "abstractrole",
        evaluate: "abstractrole-evaluate"
      }, {
        id: "aria-allowed-attr",
        evaluate: "aria-allowed-attr-evaluate",
        options: {
          validTreeRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
        }
      }, {
        id: "aria-allowed-role",
        evaluate: "aria-allowed-role-evaluate",
        options: {
          allowImplicit: !0,
          ignoredTags: []
        }
      }, {
        id: "aria-busy",
        evaluate: "aria-busy-evaluate"
      }, {
        id: "aria-conditional-attr",
        evaluate: "aria-conditional-attr-evaluate",
        options: {
          invalidTableRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
        }
      }, {
        id: "aria-errormessage",
        evaluate: "aria-errormessage-evaluate"
      }, {
        id: "aria-hidden-body",
        evaluate: "aria-hidden-body-evaluate"
      }, {
        id: "aria-level",
        evaluate: "aria-level-evaluate"
      }, {
        id: "aria-prohibited-attr",
        evaluate: "aria-prohibited-attr-evaluate",
        options: {
          elementsAllowedAriaLabel: ["applet", "input"]
        }
      }, {
        id: "aria-required-attr",
        evaluate: "aria-required-attr-evaluate"
      }, {
        id: "aria-required-children",
        evaluate: "aria-required-children-evaluate",
        options: {
          reviewEmpty: ["doc-bibliography", "doc-endnotes", "grid", "list", "listbox", "menu", "menubar", "table", "tablist", "tree", "treegrid", "rowgroup"]
        }
      }, {
        id: "aria-required-parent",
        evaluate: "aria-required-parent-evaluate",
        options: {
          ownGroupRoles: ["listitem", "treeitem"]
        }
      }, {
        id: "aria-roledescription",
        evaluate: "aria-roledescription-evaluate",
        options: {
          supportedRoles: ["button", "img", "checkbox", "radio", "combobox", "menuitemcheckbox", "menuitemradio"]
        }
      }, {
        id: "aria-unsupported-attr",
        evaluate: "aria-unsupported-attr-evaluate"
      }, {
        id: "aria-valid-attr-value",
        evaluate: "aria-valid-attr-value-evaluate",
        options: []
      }, {
        id: "aria-valid-attr",
        evaluate: "aria-valid-attr-evaluate",
        options: []
      }, {
        id: "braille-label-equivalent",
        evaluate: "braille-label-equivalent-evaluate"
      }, {
        id: "braille-roledescription-equivalent",
        evaluate: "braille-roledescription-equivalent-evaluate"
      }, {
        id: "deprecatedrole",
        evaluate: "deprecatedrole-evaluate"
      }, {
        id: "fallbackrole",
        evaluate: "fallbackrole-evaluate"
      }, {
        id: "has-global-aria-attribute",
        evaluate: "has-global-aria-attribute-evaluate"
      }, {
        id: "has-widget-role",
        evaluate: "has-widget-role-evaluate",
        options: []
      }, {
        id: "invalidrole",
        evaluate: "invalidrole-evaluate"
      }, {
        id: "is-element-focusable",
        evaluate: "is-element-focusable-evaluate"
      }, {
        id: "no-implicit-explicit-label",
        evaluate: "no-implicit-explicit-label-evaluate"
      }, {
        id: "unsupportedrole",
        evaluate: "unsupportedrole-evaluate"
      }, {
        id: "valid-scrollable-semantics",
        evaluate: "valid-scrollable-semantics-evaluate",
        options: {
          roles: ["tooltip"]
        }
      }, {
        id: "color-contrast-enhanced",
        evaluate: "color-contrast-evaluate",
        options: {
          ignoreUnicode: !0,
          ignoreLength: !1,
          ignorePseudo: !1,
          boldValue: 700,
          boldTextPt: 14,
          largeTextPt: 18,
          contrastRatio: {
            normal: {
              expected: 7,
              minThreshold: 4.5
            },
            large: {
              expected: 4.5,
              minThreshold: 3
            }
          },
          pseudoSizeThreshold: 0.25,
          shadowOutlineEmMax: 0.1,
          textStrokeEmMin: 0.03
        }
      }, {
        id: "color-contrast",
        evaluate: "color-contrast-evaluate",
        options: {
          ignoreUnicode: !0,
          ignoreLength: !1,
          ignorePseudo: !1,
          boldValue: 700,
          boldTextPt: 14,
          largeTextPt: 18,
          contrastRatio: {
            normal: {
              expected: 4.5
            },
            large: {
              expected: 3
            }
          },
          pseudoSizeThreshold: 0.25,
          shadowOutlineEmMax: 0.2,
          textStrokeEmMin: 0.03
        }
      }, {
        id: "link-in-text-block-style",
        evaluate: "link-in-text-block-style-evaluate"
      }, {
        id: "link-in-text-block",
        evaluate: "link-in-text-block-evaluate",
        options: {
          requiredContrastRatio: 3,
          allowSameColor: !0
        }
      }, {
        id: "autocomplete-appropriate",
        evaluate: "autocomplete-appropriate-evaluate",
        deprecated: !0
      }, {
        id: "autocomplete-valid",
        evaluate: "autocomplete-valid-evaluate",
        options: {
          stateTerms: ["none", "false", "true", "disabled", "enabled", "undefined", "null"]
        }
      }, {
        id: "accesskeys",
        evaluate: "accesskeys-evaluate",
        after: "accesskeys-after"
      }, {
        id: "focusable-content",
        evaluate: "focusable-content-evaluate"
      }, {
        id: "focusable-disabled",
        evaluate: "focusable-disabled-evaluate"
      }, {
        id: "focusable-element",
        evaluate: "focusable-element-evaluate"
      }, {
        id: "focusable-modal-open",
        evaluate: "focusable-modal-open-evaluate"
      }, {
        id: "focusable-no-name",
        evaluate: "focusable-no-name-evaluate"
      }, {
        id: "focusable-not-tabbable",
        evaluate: "focusable-not-tabbable-evaluate"
      }, {
        id: "frame-focusable-content",
        evaluate: "frame-focusable-content-evaluate"
      }, {
        id: "landmark-is-top-level",
        evaluate: "landmark-is-top-level-evaluate"
      }, {
        id: "no-focusable-content",
        evaluate: "no-focusable-content-evaluate"
      }, {
        id: "page-has-heading-one",
        evaluate: "has-descendant-evaluate",
        after: "has-descendant-after",
        options: {
          selector: "h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",
          passForModal: !0
        }
      }, {
        id: "page-has-main",
        evaluate: "has-descendant-evaluate",
        after: "has-descendant-after",
        options: {
          selector: "main:not([role]), [role='main']",
          passForModal: !0
        }
      }, {
        id: "page-no-duplicate-banner",
        evaluate: "page-no-duplicate-evaluate",
        after: "page-no-duplicate-after",
        options: {
          selector: "header:not([role]), [role=banner]",
          role: "banner"
        }
      }, {
        id: "page-no-duplicate-contentinfo",
        evaluate: "page-no-duplicate-evaluate",
        after: "page-no-duplicate-after",
        options: {
          selector: "footer:not([role]), [role=contentinfo]",
          role: "contentinfo"
        }
      }, {
        id: "page-no-duplicate-main",
        evaluate: "page-no-duplicate-evaluate",
        after: "page-no-duplicate-after",
        options: {
          selector: "main:not([role]), [role='main']"
        }
      }, {
        id: "tabindex",
        evaluate: "tabindex-evaluate"
      }, {
        id: "alt-space-value",
        evaluate: "alt-space-value-evaluate"
      }, {
        id: "duplicate-img-label",
        evaluate: "duplicate-img-label-evaluate",
        options: {
          parentSelector: "button, [role=button], a[href], p, li, td, th"
        }
      }, {
        id: "explicit-label",
        evaluate: "explicit-evaluate"
      }, {
        id: "help-same-as-label",
        evaluate: "help-same-as-label-evaluate"
      }, {
        id: "hidden-explicit-label",
        evaluate: "hidden-explicit-label-evaluate"
      }, {
        id: "implicit-label",
        evaluate: "implicit-evaluate"
      }, {
        id: "label-content-name-mismatch",
        evaluate: "label-content-name-mismatch-evaluate",
        options: {
          pixelThreshold: 0.1,
          occurrenceThreshold: 3
        }
      }, {
        id: "multiple-label",
        evaluate: "multiple-label-evaluate"
      }, {
        id: "title-only",
        evaluate: "title-only-evaluate"
      }, {
        id: "landmark-is-unique",
        evaluate: "landmark-is-unique-evaluate",
        after: "landmark-is-unique-after"
      }, {
        id: "has-lang",
        evaluate: "has-lang-evaluate",
        options: {
          attributes: ["lang", "xml:lang"]
        }
      }, {
        id: "valid-lang",
        evaluate: "valid-lang-evaluate",
        options: {
          attributes: ["lang", "xml:lang"]
        }
      }, {
        id: "xml-lang-mismatch",
        evaluate: "xml-lang-mismatch-evaluate"
      }, {
        id: "dlitem",
        evaluate: "dlitem-evaluate"
      }, {
        id: "listitem",
        evaluate: "listitem-evaluate"
      }, {
        id: "only-dlitems",
        evaluate: "invalid-children-evaluate",
        options: {
          validRoles: ["definition", "term", "listitem"],
          validNodeNames: ["dt", "dd"],
          divGroups: !0
        }
      }, {
        id: "only-listitems",
        evaluate: "invalid-children-evaluate",
        options: {
          validRoles: ["listitem"],
          validNodeNames: ["li"]
        }
      }, {
        id: "structured-dlitems",
        evaluate: "structured-dlitems-evaluate"
      }, {
        id: "caption",
        evaluate: "caption-evaluate"
      }, {
        id: "frame-tested",
        evaluate: "frame-tested-evaluate",
        after: "frame-tested-after",
        options: {
          isViolation: !1
        }
      }, {
        id: "no-autoplay-audio",
        evaluate: "no-autoplay-audio-evaluate",
        options: {
          allowedDuration: 3
        }
      }, {
        id: "css-orientation-lock",
        evaluate: "css-orientation-lock-evaluate",
        options: {
          degreeThreshold: 2
        }
      }, {
        id: "meta-viewport-large",
        evaluate: "meta-viewport-scale-evaluate",
        options: {
          scaleMinimum: 5,
          lowerBound: 2
        }
      }, {
        id: "meta-viewport",
        evaluate: "meta-viewport-scale-evaluate",
        options: {
          scaleMinimum: 2
        }
      }, {
        id: "target-offset",
        evaluate: "target-offset-evaluate",
        options: {
          minOffset: 24
        }
      }, {
        id: "target-size",
        evaluate: "target-size-evaluate",
        options: {
          minSize: 24
        }
      }, {
        id: "header-present",
        evaluate: "has-descendant-evaluate",
        after: "has-descendant-after",
        options: {
          selector: ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"
        }
      }, {
        id: "heading-order",
        evaluate: "heading-order-evaluate",
        after: "heading-order-after"
      }, {
        id: "identical-links-same-purpose",
        evaluate: "identical-links-same-purpose-evaluate",
        after: "identical-links-same-purpose-after"
      }, {
        id: "internal-link-present",
        evaluate: "internal-link-present-evaluate"
      }, {
        id: "landmark",
        evaluate: "has-descendant-evaluate",
        options: {
          selector: "main, [role=main]"
        }
      }, {
        id: "meta-refresh-no-exceptions",
        evaluate: "meta-refresh-evaluate",
        options: {
          minDelay: 72e3,
          maxDelay: !1
        }
      }, {
        id: "meta-refresh",
        evaluate: "meta-refresh-evaluate",
        options: {
          minDelay: 0,
          maxDelay: 72e3
        }
      }, {
        id: "p-as-heading",
        evaluate: "p-as-heading-evaluate",
        options: {
          margins: [{
            weight: 150,
            italic: !0
          }, {
            weight: 150,
            size: 1.15
          }, {
            italic: !0,
            size: 1.15
          }, {
            size: 1.4
          }],
          passLength: 1,
          failLength: 0.5
        }
      }, {
        id: "region",
        evaluate: "region-evaluate",
        after: "region-after",
        options: {
          regionMatcher: "dialog, [role=dialog], [role=alertdialog], svg"
        }
      }, {
        id: "skip-link",
        evaluate: "skip-link-evaluate"
      }, {
        id: "unique-frame-title",
        evaluate: "unique-frame-title-evaluate",
        after: "unique-frame-title-after"
      }, {
        id: "duplicate-id-active",
        evaluate: "duplicate-id-evaluate",
        after: "duplicate-id-after"
      }, {
        id: "duplicate-id-aria",
        evaluate: "duplicate-id-evaluate",
        after: "duplicate-id-after"
      }, {
        id: "duplicate-id",
        evaluate: "duplicate-id-evaluate",
        after: "duplicate-id-after"
      }, {
        id: "aria-label",
        evaluate: "aria-label-evaluate"
      }, {
        id: "aria-labelledby",
        evaluate: "aria-labelledby-evaluate"
      }, {
        id: "avoid-inline-spacing",
        evaluate: "avoid-inline-spacing-evaluate",
        options: {
          cssProperties: ["line-height", "letter-spacing", "word-spacing"]
        }
      }, {
        id: "button-has-visible-text",
        evaluate: "has-text-content-evaluate"
      }, {
        id: "doc-has-title",
        evaluate: "doc-has-title-evaluate"
      }, {
        id: "exists",
        evaluate: "exists-evaluate"
      }, {
        id: "has-alt",
        evaluate: "has-alt-evaluate"
      }, {
        id: "has-visible-text",
        evaluate: "has-text-content-evaluate"
      }, {
        id: "important-letter-spacing",
        evaluate: "inline-style-property-evaluate",
        options: {
          cssProperty: "letter-spacing",
          minValue: 0.12
        }
      }, {
        id: "important-line-height",
        evaluate: "inline-style-property-evaluate",
        options: {
          multiLineOnly: !0,
          cssProperty: "line-height",
          minValue: 1.5,
          normalValue: 1
        }
      }, {
        id: "important-word-spacing",
        evaluate: "inline-style-property-evaluate",
        options: {
          cssProperty: "word-spacing",
          minValue: 0.16
        }
      }, {
        id: "is-on-screen",
        evaluate: "is-on-screen-evaluate"
      }, {
        id: "non-empty-alt",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "alt"
        }
      }, {
        id: "non-empty-if-present",
        evaluate: "non-empty-if-present-evaluate"
      }, {
        id: "non-empty-placeholder",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "placeholder"
        }
      }, {
        id: "non-empty-title",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "title"
        }
      }, {
        id: "non-empty-value",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "value"
        }
      }, {
        id: "presentational-role",
        evaluate: "presentational-role-evaluate"
      }, {
        id: "role-none",
        evaluate: "matches-definition-evaluate",
        deprecated: !0,
        options: {
          matcher: {
            attributes: {
              role: "none"
            }
          }
        }
      }, {
        id: "role-presentation",
        evaluate: "matches-definition-evaluate",
        deprecated: !0,
        options: {
          matcher: {
            attributes: {
              role: "presentation"
            }
          }
        }
      }, {
        id: "svg-non-empty-title",
        evaluate: "svg-non-empty-title-evaluate"
      }, {
        id: "caption-faked",
        evaluate: "caption-faked-evaluate"
      }, {
        id: "html5-scope",
        evaluate: "html5-scope-evaluate"
      }, {
        id: "same-caption-summary",
        evaluate: "same-caption-summary-evaluate"
      }, {
        id: "scope-value",
        evaluate: "scope-value-evaluate",
        options: {
          values: ["row", "col", "rowgroup", "colgroup"]
        }
      }, {
        id: "td-has-header",
        evaluate: "td-has-header-evaluate"
      }, {
        id: "td-headers-attr",
        evaluate: "td-headers-attr-evaluate"
      }, {
        id: "th-has-data-cells",
        evaluate: "th-has-data-cells-evaluate"
      }, {
        id: "hidden-content",
        evaluate: "hidden-content-evaluate"
      }]
    });
  })(typeof window == "object" ? window : FF);
})(yu);
var TF = yu.exports;
const RF = /* @__PURE__ */ AF(TF), SF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RF
}, Symbol.toStringTag, { value: "Module" }));
export {
  SF as a
};