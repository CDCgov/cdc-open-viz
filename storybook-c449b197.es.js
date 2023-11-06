import { R as g, r as HA } from "./storybook-e61d95ab.es.js";
import { P as ln } from "./storybook-7366772a.es.js";
import { I as un, b as fn, c as ja } from "./storybook-d6b8e24c.es.js";
import { L as rr, E as gn } from "./storybook-a0c99f4a.es.js";
import { u as Kr, a as Ts, t as Lr, b as Ss, c as je, d as za, e as ze, f as qe, g as qa, h as $e } from "./storybook-bedc547d.es.js";
import { n as wn } from "./storybook-28c41e3d.es.js";
function nr(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return A.setFullYear(e.y), A;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function sr(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return A.setUTCFullYear(e.y), A;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Le(e, A, t) {
  return { y: e, m: A, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function $a(e) {
  var A = e.dateTime, t = e.date, r = e.time, n = e.periods, s = e.days, a = e.shortDays, B = e.months, i = e.shortMonths, o = xe(n), c = De(n), l = xe(s), u = De(s), F = xe(a), Q = De(a), w = xe(B), x = De(B), d = xe(i), h = De(i), S = {
    a: sA,
    A: KA,
    b: CA,
    B: LA,
    c: null,
    d: dn,
    e: dn,
    f: pB,
    g: xB,
    G: TB,
    H: hB,
    I: FB,
    j: dB,
    L: Os,
    m: EB,
    M: mB,
    p: yA,
    q: OA,
    Q: mn,
    s: Hn,
    S: HB,
    u: vB,
    U: yB,
    V: IB,
    w: bB,
    W: KB,
    x: null,
    X: null,
    y: LB,
    Y: DB,
    Z: SB,
    "%": En
  }, E = {
    a: pA,
    A: EA,
    b: IA,
    B: GA,
    c: null,
    d: pn,
    e: pn,
    f: RB,
    g: ZB,
    G: zB,
    H: OB,
    I: MB,
    j: NB,
    L: Ns,
    m: GB,
    M: VB,
    p: VA,
    q: at,
    Q: mn,
    s: Hn,
    S: _B,
    u: PB,
    U: kB,
    V: XB,
    w: JB,
    W: YB,
    x: null,
    X: null,
    y: WB,
    Y: jB,
    Z: qB,
    "%": En
  }, D = {
    a: k,
    A: j,
    b: z,
    B: V,
    c: AA,
    d: hn,
    e: hn,
    f: wB,
    g: Un,
    G: Cn,
    H: Fn,
    I: Fn,
    j: lB,
    L: gB,
    m: cB,
    M: uB,
    p: b,
    q: oB,
    Q: CB,
    s: UB,
    S: fB,
    u: nB,
    U: sB,
    V: aB,
    w: rB,
    W: BB,
    x: dA,
    X: nA,
    y: Un,
    Y: Cn,
    Z: iB,
    "%": QB
  };
  S.x = f(t, S), S.X = f(r, S), S.c = f(A, S), E.x = f(t, E), E.X = f(r, E), E.c = f(A, E);
  function f(v, N) {
    return function(R) {
      var U = [], oA = -1, X = 0, fA = v.length, gA, _A, Ke;
      for (R instanceof Date || (R = /* @__PURE__ */ new Date(+R)); ++oA < fA; )
        v.charCodeAt(oA) === 37 && (U.push(v.slice(X, oA)), (_A = Qn[gA = v.charAt(++oA)]) != null ? gA = v.charAt(++oA) : _A = gA === "e" ? " " : "0", (Ke = N[gA]) && (gA = Ke(R, _A)), U.push(gA), X = oA + 1);
      return U.push(v.slice(X, oA)), U.join("");
    };
  }
  function O(v, N) {
    return function(R) {
      var U = Le(1900, void 0, 1), oA = K(U, v, R += "", 0), X, fA;
      if (oA != R.length)
        return null;
      if ("Q" in U)
        return new Date(U.Q);
      if ("s" in U)
        return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (N && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53)
          return null;
        "w" in U || (U.w = 1), "Z" in U ? (X = sr(Le(U.y, 0, 1)), fA = X.getUTCDay(), X = fA > 4 || fA === 0 ? Kr.ceil(X) : Kr(X), X = Ts.offset(X, (U.V - 1) * 7), U.y = X.getUTCFullYear(), U.m = X.getUTCMonth(), U.d = X.getUTCDate() + (U.w + 6) % 7) : (X = nr(Le(U.y, 0, 1)), fA = X.getDay(), X = fA > 4 || fA === 0 ? Lr.ceil(X) : Lr(X), X = Ss.offset(X, (U.V - 1) * 7), U.y = X.getFullYear(), U.m = X.getMonth(), U.d = X.getDate() + (U.w + 6) % 7);
      } else
        ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), fA = "Z" in U ? sr(Le(U.y, 0, 1)).getUTCDay() : nr(Le(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (fA + 5) % 7 : U.w + U.U * 7 - (fA + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, sr(U)) : nr(U);
    };
  }
  function K(v, N, R, U) {
    for (var oA = 0, X = N.length, fA = R.length, gA, _A; oA < X; ) {
      if (U >= fA)
        return -1;
      if (gA = N.charCodeAt(oA++), gA === 37) {
        if (gA = N.charAt(oA++), _A = D[gA in Qn ? N.charAt(oA++) : gA], !_A || (U = _A(v, R, U)) < 0)
          return -1;
      } else if (gA != R.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function b(v, N, R) {
    var U = o.exec(N.slice(R));
    return U ? (v.p = c.get(U[0].toLowerCase()), R + U[0].length) : -1;
  }
  function k(v, N, R) {
    var U = F.exec(N.slice(R));
    return U ? (v.w = Q.get(U[0].toLowerCase()), R + U[0].length) : -1;
  }
  function j(v, N, R) {
    var U = l.exec(N.slice(R));
    return U ? (v.w = u.get(U[0].toLowerCase()), R + U[0].length) : -1;
  }
  function z(v, N, R) {
    var U = d.exec(N.slice(R));
    return U ? (v.m = h.get(U[0].toLowerCase()), R + U[0].length) : -1;
  }
  function V(v, N, R) {
    var U = w.exec(N.slice(R));
    return U ? (v.m = x.get(U[0].toLowerCase()), R + U[0].length) : -1;
  }
  function AA(v, N, R) {
    return K(v, A, N, R);
  }
  function dA(v, N, R) {
    return K(v, t, N, R);
  }
  function nA(v, N, R) {
    return K(v, r, N, R);
  }
  function sA(v) {
    return a[v.getDay()];
  }
  function KA(v) {
    return s[v.getDay()];
  }
  function CA(v) {
    return i[v.getMonth()];
  }
  function LA(v) {
    return B[v.getMonth()];
  }
  function yA(v) {
    return n[+(v.getHours() >= 12)];
  }
  function OA(v) {
    return 1 + ~~(v.getMonth() / 3);
  }
  function pA(v) {
    return a[v.getUTCDay()];
  }
  function EA(v) {
    return s[v.getUTCDay()];
  }
  function IA(v) {
    return i[v.getUTCMonth()];
  }
  function GA(v) {
    return B[v.getUTCMonth()];
  }
  function VA(v) {
    return n[+(v.getUTCHours() >= 12)];
  }
  function at(v) {
    return 1 + ~~(v.getUTCMonth() / 3);
  }
  return {
    format: function(v) {
      var N = f(v += "", S);
      return N.toString = function() {
        return v;
      }, N;
    },
    parse: function(v) {
      var N = O(v += "", !1);
      return N.toString = function() {
        return v;
      }, N;
    },
    utcFormat: function(v) {
      var N = f(v += "", E);
      return N.toString = function() {
        return v;
      }, N;
    },
    utcParse: function(v) {
      var N = O(v += "", !0);
      return N.toString = function() {
        return v;
      }, N;
    }
  };
}
var Qn = { "-": "", _: " ", 0: "0" }, iA = /^\s*\d+/, AB = /^%/, eB = /[\\^$*+?|[\]().{}]/g;
function _(e, A, t) {
  var r = e < 0 ? "-" : "", n = (r ? -e : e) + "", s = n.length;
  return r + (s < t ? new Array(t - s + 1).join(A) + n : n);
}
function tB(e) {
  return e.replace(eB, "\\$&");
}
function xe(e) {
  return new RegExp("^(?:" + e.map(tB).join("|") + ")", "i");
}
function De(e) {
  return new Map(e.map((A, t) => [A.toLowerCase(), t]));
}
function rB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 1));
  return r ? (e.w = +r[0], t + r[0].length) : -1;
}
function nB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 1));
  return r ? (e.u = +r[0], t + r[0].length) : -1;
}
function sB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 2));
  return r ? (e.U = +r[0], t + r[0].length) : -1;
}
function aB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 2));
  return r ? (e.V = +r[0], t + r[0].length) : -1;
}
function BB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 2));
  return r ? (e.W = +r[0], t + r[0].length) : -1;
}
function Cn(e, A, t) {
  var r = iA.exec(A.slice(t, t + 4));
  return r ? (e.y = +r[0], t + r[0].length) : -1;
}
function Un(e, A, t) {
  var r = iA.exec(A.slice(t, t + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), t + r[0].length) : -1;
}
function iB(e, A, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(A.slice(t, t + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function oB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 1));
  return r ? (e.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function cB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 2));
  return r ? (e.m = r[0] - 1, t + r[0].length) : -1;
}
function hn(e, A, t) {
  var r = iA.exec(A.slice(t, t + 2));
  return r ? (e.d = +r[0], t + r[0].length) : -1;
}
function lB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 3));
  return r ? (e.m = 0, e.d = +r[0], t + r[0].length) : -1;
}
function Fn(e, A, t) {
  var r = iA.exec(A.slice(t, t + 2));
  return r ? (e.H = +r[0], t + r[0].length) : -1;
}
function uB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 2));
  return r ? (e.M = +r[0], t + r[0].length) : -1;
}
function fB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 2));
  return r ? (e.S = +r[0], t + r[0].length) : -1;
}
function gB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 3));
  return r ? (e.L = +r[0], t + r[0].length) : -1;
}
function wB(e, A, t) {
  var r = iA.exec(A.slice(t, t + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function QB(e, A, t) {
  var r = AB.exec(A.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function CB(e, A, t) {
  var r = iA.exec(A.slice(t));
  return r ? (e.Q = +r[0], t + r[0].length) : -1;
}
function UB(e, A, t) {
  var r = iA.exec(A.slice(t));
  return r ? (e.s = +r[0], t + r[0].length) : -1;
}
function dn(e, A) {
  return _(e.getDate(), A, 2);
}
function hB(e, A) {
  return _(e.getHours(), A, 2);
}
function FB(e, A) {
  return _(e.getHours() % 12 || 12, A, 2);
}
function dB(e, A) {
  return _(1 + Ss.count(je(e), e), A, 3);
}
function Os(e, A) {
  return _(e.getMilliseconds(), A, 3);
}
function pB(e, A) {
  return Os(e, A) + "000";
}
function EB(e, A) {
  return _(e.getMonth() + 1, A, 2);
}
function mB(e, A) {
  return _(e.getMinutes(), A, 2);
}
function HB(e, A) {
  return _(e.getSeconds(), A, 2);
}
function vB(e) {
  var A = e.getDay();
  return A === 0 ? 7 : A;
}
function yB(e, A) {
  return _(za.count(je(e) - 1, e), A, 2);
}
function Ms(e) {
  var A = e.getDay();
  return A >= 4 || A === 0 ? ze(e) : ze.ceil(e);
}
function IB(e, A) {
  return e = Ms(e), _(ze.count(je(e), e) + (je(e).getDay() === 4), A, 2);
}
function bB(e) {
  return e.getDay();
}
function KB(e, A) {
  return _(Lr.count(je(e) - 1, e), A, 2);
}
function LB(e, A) {
  return _(e.getFullYear() % 100, A, 2);
}
function xB(e, A) {
  return e = Ms(e), _(e.getFullYear() % 100, A, 2);
}
function DB(e, A) {
  return _(e.getFullYear() % 1e4, A, 4);
}
function TB(e, A) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? ze(e) : ze.ceil(e), _(e.getFullYear() % 1e4, A, 4);
}
function SB(e) {
  var A = e.getTimezoneOffset();
  return (A > 0 ? "-" : (A *= -1, "+")) + _(A / 60 | 0, "0", 2) + _(A % 60, "0", 2);
}
function pn(e, A) {
  return _(e.getUTCDate(), A, 2);
}
function OB(e, A) {
  return _(e.getUTCHours(), A, 2);
}
function MB(e, A) {
  return _(e.getUTCHours() % 12 || 12, A, 2);
}
function NB(e, A) {
  return _(1 + Ts.count(qe(e), e), A, 3);
}
function Ns(e, A) {
  return _(e.getUTCMilliseconds(), A, 3);
}
function RB(e, A) {
  return Ns(e, A) + "000";
}
function GB(e, A) {
  return _(e.getUTCMonth() + 1, A, 2);
}
function VB(e, A) {
  return _(e.getUTCMinutes(), A, 2);
}
function _B(e, A) {
  return _(e.getUTCSeconds(), A, 2);
}
function PB(e) {
  var A = e.getUTCDay();
  return A === 0 ? 7 : A;
}
function kB(e, A) {
  return _(qa.count(qe(e) - 1, e), A, 2);
}
function Rs(e) {
  var A = e.getUTCDay();
  return A >= 4 || A === 0 ? $e(e) : $e.ceil(e);
}
function XB(e, A) {
  return e = Rs(e), _($e.count(qe(e), e) + (qe(e).getUTCDay() === 4), A, 2);
}
function JB(e) {
  return e.getUTCDay();
}
function YB(e, A) {
  return _(Kr.count(qe(e) - 1, e), A, 2);
}
function WB(e, A) {
  return _(e.getUTCFullYear() % 100, A, 2);
}
function ZB(e, A) {
  return e = Rs(e), _(e.getUTCFullYear() % 100, A, 2);
}
function jB(e, A) {
  return _(e.getUTCFullYear() % 1e4, A, 4);
}
function zB(e, A) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? $e(e) : $e.ceil(e), _(e.getUTCFullYear() % 1e4, A, 4);
}
function qB() {
  return "+0000";
}
function En() {
  return "%";
}
function mn(e) {
  return +e;
}
function Hn(e) {
  return Math.floor(+e / 1e3);
}
var we, Gs, Vs;
$B({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function $B(e) {
  return we = $a(e), Gs = we.format, Vs = we.parse, we.utcFormat, we.utcParse, we;
}
var lA = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, FA = {
  searchParams: "URLSearchParams" in lA,
  iterable: "Symbol" in lA && "iterator" in Symbol,
  blob: "FileReader" in lA && "Blob" in lA && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in lA,
  arrayBuffer: "ArrayBuffer" in lA
};
function Ai(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (FA.arrayBuffer)
  var ei = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], ti = ArrayBuffer.isView || function(e) {
    return e && ei.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function Ie(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function en(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function tn(e) {
  var A = {
    next: function() {
      var t = e.shift();
      return { done: t === void 0, value: t };
    }
  };
  return FA.iterable && (A[Symbol.iterator] = function() {
    return A;
  }), A;
}
function rA(e) {
  this.map = {}, e instanceof rA ? e.forEach(function(A, t) {
    this.append(t, A);
  }, this) : Array.isArray(e) ? e.forEach(function(A) {
    if (A.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + A.length);
    this.append(A[0], A[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(A) {
    this.append(A, e[A]);
  }, this);
}
rA.prototype.append = function(e, A) {
  e = Ie(e), A = en(A);
  var t = this.map[e];
  this.map[e] = t ? t + ", " + A : A;
};
rA.prototype.delete = function(e) {
  delete this.map[Ie(e)];
};
rA.prototype.get = function(e) {
  return e = Ie(e), this.has(e) ? this.map[e] : null;
};
rA.prototype.has = function(e) {
  return this.map.hasOwnProperty(Ie(e));
};
rA.prototype.set = function(e, A) {
  this.map[Ie(e)] = en(A);
};
rA.prototype.forEach = function(e, A) {
  for (var t in this.map)
    this.map.hasOwnProperty(t) && e.call(A, this.map[t], t, this);
};
rA.prototype.keys = function() {
  var e = [];
  return this.forEach(function(A, t) {
    e.push(t);
  }), tn(e);
};
rA.prototype.values = function() {
  var e = [];
  return this.forEach(function(A) {
    e.push(A);
  }), tn(e);
};
rA.prototype.entries = function() {
  var e = [];
  return this.forEach(function(A, t) {
    e.push([t, A]);
  }), tn(e);
};
FA.iterable && (rA.prototype[Symbol.iterator] = rA.prototype.entries);
function ar(e) {
  if (!e._noBody) {
    if (e.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
}
function _s(e) {
  return new Promise(function(A, t) {
    e.onload = function() {
      A(e.result);
    }, e.onerror = function() {
      t(e.error);
    };
  });
}
function ri(e) {
  var A = new FileReader(), t = _s(A);
  return A.readAsArrayBuffer(e), t;
}
function ni(e) {
  var A = new FileReader(), t = _s(A), r = /charset=([A-Za-z0-9_-]+)/.exec(e.type), n = r ? r[1] : "utf-8";
  return A.readAsText(e, n), t;
}
function si(e) {
  for (var A = new Uint8Array(e), t = new Array(A.length), r = 0; r < A.length; r++)
    t[r] = String.fromCharCode(A[r]);
  return t.join("");
}
function vn(e) {
  if (e.slice)
    return e.slice(0);
  var A = new Uint8Array(e.byteLength);
  return A.set(new Uint8Array(e)), A.buffer;
}
function Ps() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : FA.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : FA.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : FA.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : FA.arrayBuffer && FA.blob && Ai(e) ? (this._bodyArrayBuffer = vn(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : FA.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || ti(e)) ? this._bodyArrayBuffer = vn(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : FA.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, FA.blob && (this.blob = function() {
    var e = ar(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }), this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var e = ar(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (FA.blob)
        return this.blob().then(ri);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = ar(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return ni(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(si(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, FA.formData && (this.formData = function() {
    return this.text().then(ii);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var ai = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function Bi(e) {
  var A = e.toUpperCase();
  return ai.indexOf(A) > -1 ? A : e;
}
function ge(e, A) {
  if (!(this instanceof ge))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  A = A || {};
  var t = A.body;
  if (e instanceof ge) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, A.headers || (this.headers = new rA(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !t && e._bodyInit != null && (t = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = A.credentials || this.credentials || "same-origin", (A.headers || !this.headers) && (this.headers = new rA(A.headers)), this.method = Bi(A.method || this.method || "GET"), this.mode = A.mode || this.mode || null, this.signal = A.signal || this.signal || function() {
    if ("AbortController" in lA) {
      var s = new AbortController();
      return s.signal;
    }
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && t)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(t), (this.method === "GET" || this.method === "HEAD") && (A.cache === "no-store" || A.cache === "no-cache")) {
    var r = /([?&])_=[^&]*/;
    if (r.test(this.url))
      this.url = this.url.replace(r, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
    else {
      var n = /\?/;
      this.url += (n.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
    }
  }
}
ge.prototype.clone = function() {
  return new ge(this, { body: this._bodyInit });
};
function ii(e) {
  var A = new FormData();
  return e.trim().split("&").forEach(function(t) {
    if (t) {
      var r = t.split("="), n = r.shift().replace(/\+/g, " "), s = r.join("=").replace(/\+/g, " ");
      A.append(decodeURIComponent(n), decodeURIComponent(s));
    }
  }), A;
}
function oi(e) {
  var A = new rA(), t = e.replace(/\r?\n[\t ]+/g, " ");
  return t.split("\r").map(function(r) {
    return r.indexOf(`
`) === 0 ? r.substr(1, r.length) : r;
  }).forEach(function(r) {
    var n = r.split(":"), s = n.shift().trim();
    if (s) {
      var a = n.join(":").trim();
      try {
        A.append(s, a);
      } catch (B) {
        console.warn("Response " + B.message);
      }
    }
  }), A;
}
Ps.call(ge.prototype);
function XA(e, A) {
  if (!(this instanceof XA))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (A || (A = {}), this.type = "default", this.status = A.status === void 0 ? 200 : A.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = A.statusText === void 0 ? "" : "" + A.statusText, this.headers = new rA(A.headers), this.url = A.url || "", this._initBody(e);
}
Ps.call(XA.prototype);
XA.prototype.clone = function() {
  return new XA(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new rA(this.headers),
    url: this.url
  });
};
XA.error = function() {
  var e = new XA(null, { status: 200, statusText: "" });
  return e.status = 0, e.type = "error", e;
};
var ci = [301, 302, 303, 307, 308];
XA.redirect = function(e, A) {
  if (ci.indexOf(A) === -1)
    throw new RangeError("Invalid status code");
  return new XA(null, { status: A, headers: { location: e } });
};
var oe = lA.DOMException;
try {
  new oe();
} catch {
  oe = function(A, t) {
    this.message = A, this.name = t;
    var r = Error(A);
    this.stack = r.stack;
  }, oe.prototype = Object.create(Error.prototype), oe.prototype.constructor = oe;
}
function ks(e, A) {
  return new Promise(function(t, r) {
    var n = new ge(e, A);
    if (n.signal && n.signal.aborted)
      return r(new oe("Aborted", "AbortError"));
    var s = new XMLHttpRequest();
    function a() {
      s.abort();
    }
    s.onload = function() {
      var o = {
        statusText: s.statusText,
        headers: oi(s.getAllResponseHeaders() || "")
      };
      n.url.startsWith("file://") && (s.status < 200 || s.status > 599) ? o.status = 200 : o.status = s.status, o.url = "responseURL" in s ? s.responseURL : o.headers.get("X-Request-URL");
      var c = "response" in s ? s.response : s.responseText;
      setTimeout(function() {
        t(new XA(c, o));
      }, 0);
    }, s.onerror = function() {
      setTimeout(function() {
        r(new TypeError("Network request failed"));
      }, 0);
    }, s.ontimeout = function() {
      setTimeout(function() {
        r(new TypeError("Network request timed out"));
      }, 0);
    }, s.onabort = function() {
      setTimeout(function() {
        r(new oe("Aborted", "AbortError"));
      }, 0);
    };
    function B(o) {
      try {
        return o === "" && lA.location.href ? lA.location.href : o;
      } catch {
        return o;
      }
    }
    if (s.open(n.method, B(n.url), !0), n.credentials === "include" ? s.withCredentials = !0 : n.credentials === "omit" && (s.withCredentials = !1), "responseType" in s && (FA.blob ? s.responseType = "blob" : FA.arrayBuffer && (s.responseType = "arraybuffer")), A && typeof A.headers == "object" && !(A.headers instanceof rA || lA.Headers && A.headers instanceof lA.Headers)) {
      var i = [];
      Object.getOwnPropertyNames(A.headers).forEach(function(o) {
        i.push(Ie(o)), s.setRequestHeader(o, en(A.headers[o]));
      }), n.headers.forEach(function(o, c) {
        i.indexOf(c) === -1 && s.setRequestHeader(c, o);
      });
    } else
      n.headers.forEach(function(o, c) {
        s.setRequestHeader(c, o);
      });
    n.signal && (n.signal.addEventListener("abort", a), s.onreadystatechange = function() {
      s.readyState === 4 && n.signal.removeEventListener("abort", a);
    }), s.send(typeof n._bodyInit > "u" ? null : n._bodyInit);
  });
}
ks.polyfill = !0;
lA.fetch || (lA.fetch = ks, lA.Headers = rA, lA.Request = ge, lA.Response = XA);
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var xr = function(e, A) {
  return xr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, xr(e, A);
};
function RA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  xr(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var Dr = function() {
  return Dr = Object.assign || function(A) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (A[s] = t[s]);
    }
    return A;
  }, Dr.apply(this, arguments);
};
function hA(e, A, t, r) {
  function n(s) {
    return s instanceof t ? s : new t(function(a) {
      a(s);
    });
  }
  return new (t || (t = Promise))(function(s, a) {
    function B(c) {
      try {
        o(r.next(c));
      } catch (l) {
        a(l);
      }
    }
    function i(c) {
      try {
        o(r.throw(c));
      } catch (l) {
        a(l);
      }
    }
    function o(c) {
      c.done ? s(c.value) : n(c.value).then(B, i);
    }
    o((r = r.apply(e, A || [])).next());
  });
}
function wA(e, A) {
  var t = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, n, s, a;
  return a = { next: B(0), throw: B(1), return: B(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function B(o) {
    return function(c) {
      return i([o, c]);
    };
  }
  function i(o) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, n && (s = o[0] & 2 ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, o[1])).done)
          return s;
        switch (n = 0, s && (o = [o[0] & 2, s.value]), o[0]) {
          case 0:
          case 1:
            s = o;
            break;
          case 4:
            return t.label++, { value: o[1], done: !1 };
          case 5:
            t.label++, n = o[1], o = [0];
            continue;
          case 7:
            o = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              t = 0;
              continue;
            }
            if (o[0] === 3 && (!s || o[1] > s[0] && o[1] < s[3])) {
              t.label = o[1];
              break;
            }
            if (o[0] === 6 && t.label < s[1]) {
              t.label = s[1], s = o;
              break;
            }
            if (s && t.label < s[2]) {
              t.label = s[2], t.ops.push(o);
              break;
            }
            s[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        o = A.call(e, t);
      } catch (c) {
        o = [6, c], n = 0;
      } finally {
        r = s = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function it(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = A.length, s; r < n; r++)
      (s || !(r in A)) && (s || (s = Array.prototype.slice.call(A, 0, r)), s[r] = A[r]);
  return e.concat(s || A);
}
var zA = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.left = A, this.top = t, this.width = r, this.height = n;
    }
    return e.prototype.add = function(A, t, r, n) {
      return new e(this.left + A, this.top + t, this.width + r, this.height + n);
    }, e.fromClientRect = function(A, t) {
      return new e(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height);
    }, e.fromDOMRectList = function(A, t) {
      var r = Array.from(t).find(function(n) {
        return n.width !== 0;
      });
      return r ? new e(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height) : e.EMPTY;
    }, e.EMPTY = new e(0, 0, 0, 0), e;
  }()
), Jt = function(e, A) {
  return zA.fromClientRect(e, A.getBoundingClientRect());
}, li = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new zA(0, 0, r, n);
}, Yt = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, $ = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, s = ""; ++n < t; ) {
    var a = e[n];
    a <= 65535 ? r.push(a) : (a -= 65536, r.push((a >> 10) + 55296, a % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, yn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ui = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ot = 0; ot < yn.length; ot++)
  ui[yn.charCodeAt(ot)] = ot;
var In = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ne = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ct = 0; ct < In.length; ct++)
  Ne[In.charCodeAt(ct)] = ct;
var fi = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, s, a, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    s = Ne[e.charCodeAt(r)], a = Ne[e.charCodeAt(r + 1)], B = Ne[e.charCodeAt(r + 2)], i = Ne[e.charCodeAt(r + 3)], c[n++] = s << 2 | a >> 4, c[n++] = (a & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, gi = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, wi = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, ue = 5, rn = 6 + 5, Br = 2, Qi = rn - ue, Xs = 65536 >> ue, Ci = 1 << ue, ir = Ci - 1, Ui = 1024 >> ue, hi = Xs + Ui, Fi = hi, di = 32, pi = Fi + di, Ei = 65536 >> rn, mi = 1 << Qi, Hi = mi - 1, bn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, vi = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, yi = function(e, A) {
  var t = fi(e), r = Array.isArray(t) ? wi(t) : new Uint32Array(t), n = Array.isArray(t) ? gi(t) : new Uint16Array(t), s = 24, a = bn(n, s / 2, r[4] / 2), B = r[5] === 2 ? bn(n, (s + r[4]) / 2) : vi(r, Math.ceil((s + r[4]) / 4));
  return new Ii(r[0], r[1], r[2], r[3], a, B);
}, Ii = (
  /** @class */
  function() {
    function e(A, t, r, n, s, a) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = a;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> ue], t = (t << Br) + (A & ir), this.data[t];
        if (A <= 65535)
          return t = this.index[Xs + (A - 55296 >> ue)], t = (t << Br) + (A & ir), this.data[t];
        if (A < this.highStart)
          return t = pi - Ei + (A >> rn), t = this.index[t], t += A >> ue & Hi, t = this.index[t], t = (t << Br) + (A & ir), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Kn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var lt = 0; lt < Kn.length; lt++)
  bi[Kn.charCodeAt(lt)] = lt;
var Ki = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Ln = 50, Li = 1, Js = 2, Ys = 3, xi = 4, Di = 5, xn = 7, Ws = 8, Dn = 9, ee = 10, Tr = 11, Tn = 12, Sr = 13, Ti = 14, Re = 15, Or = 16, ut = 17, Te = 18, Si = 19, Sn = 20, Mr = 21, Se = 22, or = 23, Qe = 24, bA = 25, Ge = 26, Ve = 27, Ce = 28, Oi = 29, ce = 30, Mi = 31, ft = 32, gt = 33, Nr = 34, Rr = 35, Gr = 36, At = 37, Vr = 38, Lt = 39, xt = 40, cr = 41, Zs = 42, Ni = 43, Ri = [9001, 65288], js = "!", G = "×", wt = "÷", _r = yi(Ki), WA = [ce, Gr], Pr = [Li, Js, Ys, Di], zs = [ee, Ws], On = [Ve, Ge], Gi = Pr.concat(zs), Mn = [Vr, Lt, xt, Nr, Rr], Vi = [Re, Sr], _i = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(s, a) {
    var B = _r.get(s);
    if (B > Ln ? (n.push(!0), B -= Ln) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(s) !== -1)
      return r.push(a), t.push(Or);
    if (B === xi || B === Tr) {
      if (a === 0)
        return r.push(a), t.push(ce);
      var i = t[a - 1];
      return Gi.indexOf(i) === -1 ? (r.push(r[a - 1]), t.push(i)) : (r.push(a), t.push(ce));
    }
    if (r.push(a), B === Mi)
      return t.push(A === "strict" ? Mr : At);
    if (B === Zs || B === Oi)
      return t.push(ce);
    if (B === Ni)
      return s >= 131072 && s <= 196605 || s >= 196608 && s <= 262141 ? t.push(At) : t.push(ce);
    t.push(B);
  }), [r, t, n];
}, lr = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var s = t; s <= r.length; ) {
      s++;
      var a = r[s];
      if (a === A)
        return !0;
      if (a !== ee)
        break;
    }
  if (n === ee)
    for (var s = t; s > 0; ) {
      s--;
      var B = r[s];
      if (Array.isArray(e) ? e.indexOf(B) !== -1 : e === B)
        for (var i = t; i <= r.length; ) {
          i++;
          var a = r[i];
          if (a === A)
            return !0;
          if (a !== ee)
            break;
        }
      if (B !== ee)
        break;
    }
  return !1;
}, Nn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === ee)
      t--;
    else
      return r;
  }
  return 0;
}, Pi = function(e, A, t, r, n) {
  if (t[r] === 0)
    return G;
  var s = r - 1;
  if (Array.isArray(n) && n[s] === !0)
    return G;
  var a = s - 1, B = s + 1, i = A[s], o = a >= 0 ? A[a] : 0, c = A[B];
  if (i === Js && c === Ys)
    return G;
  if (Pr.indexOf(i) !== -1)
    return js;
  if (Pr.indexOf(c) !== -1 || zs.indexOf(c) !== -1)
    return G;
  if (Nn(s, A) === Ws)
    return wt;
  if (_r.get(e[s]) === Tr || (i === ft || i === gt) && _r.get(e[B]) === Tr || i === xn || c === xn || i === Dn || [ee, Sr, Re].indexOf(i) === -1 && c === Dn || [ut, Te, Si, Qe, Ce].indexOf(c) !== -1 || Nn(s, A) === Se || lr(or, Se, s, A) || lr([ut, Te], Mr, s, A) || lr(Tn, Tn, s, A))
    return G;
  if (i === ee)
    return wt;
  if (i === or || c === or)
    return G;
  if (c === Or || i === Or)
    return wt;
  if ([Sr, Re, Mr].indexOf(c) !== -1 || i === Ti || o === Gr && Vi.indexOf(i) !== -1 || i === Ce && c === Gr || c === Sn || WA.indexOf(c) !== -1 && i === bA || WA.indexOf(i) !== -1 && c === bA || i === Ve && [At, ft, gt].indexOf(c) !== -1 || [At, ft, gt].indexOf(i) !== -1 && c === Ge || WA.indexOf(i) !== -1 && On.indexOf(c) !== -1 || On.indexOf(i) !== -1 && WA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Ve, Ge].indexOf(i) !== -1 && (c === bA || [Se, Re].indexOf(c) !== -1 && A[B + 1] === bA) || // ( OP | HY ) × NU
  [Se, Re].indexOf(i) !== -1 && c === bA || // NU ×	(NU | SY | IS)
  i === bA && [bA, Ce, Qe].indexOf(c) !== -1)
    return G;
  if ([bA, Ce, Qe, ut, Te].indexOf(c) !== -1)
    for (var l = s; l >= 0; ) {
      var u = A[l];
      if (u === bA)
        return G;
      if ([Ce, Qe].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if ([Ve, Ge].indexOf(c) !== -1)
    for (var l = [ut, Te].indexOf(i) !== -1 ? a : s; l >= 0; ) {
      var u = A[l];
      if (u === bA)
        return G;
      if ([Ce, Qe].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if (Vr === i && [Vr, Lt, Nr, Rr].indexOf(c) !== -1 || [Lt, Nr].indexOf(i) !== -1 && [Lt, xt].indexOf(c) !== -1 || [xt, Rr].indexOf(i) !== -1 && c === xt || Mn.indexOf(i) !== -1 && [Sn, Ge].indexOf(c) !== -1 || Mn.indexOf(c) !== -1 && i === Ve || WA.indexOf(i) !== -1 && WA.indexOf(c) !== -1 || i === Qe && WA.indexOf(c) !== -1 || WA.concat(bA).indexOf(i) !== -1 && c === Se && Ri.indexOf(e[B]) === -1 || WA.concat(bA).indexOf(c) !== -1 && i === Te)
    return G;
  if (i === cr && c === cr) {
    for (var F = t[s], Q = 1; F > 0 && (F--, A[F] === cr); )
      Q++;
    if (Q % 2 !== 0)
      return G;
  }
  return i === ft && c === gt ? G : wt;
}, ki = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = _i(e, A.lineBreak), r = t[0], n = t[1], s = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(B) {
    return [bA, ce, Zs].indexOf(B) !== -1 ? At : B;
  }));
  var a = A.wordBreak === "keep-all" ? s.map(function(B, i) {
    return B && e[i] >= 19968 && e[i] <= 40959;
  }) : void 0;
  return [r, n, a];
}, Xi = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === js, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return $.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), Ji = function(e, A) {
  var t = Yt(e), r = ki(t, A), n = r[0], s = r[1], a = r[2], B = t.length, i = 0, o = 0;
  return {
    next: function() {
      if (o >= B)
        return { done: !0, value: null };
      for (var c = G; o < B && (c = Pi(t, s, n, ++o, a)) === G; )
        ;
      if (c !== G || o === B) {
        var l = new Xi(t, c, i, o);
        return i = o, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Yi = 1, Wi = 2, nt = 4, Rn = 8, Ot = 10, Gn = 47, Xe = 92, Zi = 9, ji = 32, Qt = 34, Oe = 61, zi = 35, qi = 36, $i = 37, Ct = 39, Ut = 40, Me = 41, Ao = 95, vA = 45, eo = 33, to = 60, ro = 62, no = 64, so = 91, ao = 93, Bo = 61, io = 123, ht = 63, oo = 125, Vn = 124, co = 126, lo = 128, _n = 65533, ur = 42, le = 43, uo = 44, fo = 58, go = 59, et = 46, wo = 0, Qo = 8, Co = 11, Uo = 14, ho = 31, Fo = 127, kA = -1, qs = 48, $s = 97, Aa = 101, po = 102, Eo = 117, mo = 122, ea = 65, ta = 69, ra = 70, Ho = 85, vo = 90, QA = function(e) {
  return e >= qs && e <= 57;
}, yo = function(e) {
  return e >= 55296 && e <= 57343;
}, Ue = function(e) {
  return QA(e) || e >= ea && e <= ra || e >= $s && e <= po;
}, Io = function(e) {
  return e >= $s && e <= mo;
}, bo = function(e) {
  return e >= ea && e <= vo;
}, Ko = function(e) {
  return Io(e) || bo(e);
}, Lo = function(e) {
  return e >= lo;
}, Ft = function(e) {
  return e === Ot || e === Zi || e === ji;
}, Mt = function(e) {
  return Ko(e) || Lo(e) || e === Ao;
}, Pn = function(e) {
  return Mt(e) || QA(e) || e === vA;
}, xo = function(e) {
  return e >= wo && e <= Qo || e === Co || e >= Uo && e <= ho || e === Fo;
}, Ae = function(e, A) {
  return e !== Xe ? !1 : A !== Ot;
}, dt = function(e, A, t) {
  return e === vA ? Mt(A) || Ae(A, t) : Mt(e) ? !0 : !!(e === Xe && Ae(e, A));
}, fr = function(e, A, t) {
  return e === le || e === vA ? QA(A) ? !0 : A === et && QA(t) : QA(e === et ? A : e);
}, Do = function(e) {
  var A = 0, t = 1;
  (e[A] === le || e[A] === vA) && (e[A] === vA && (t = -1), A++);
  for (var r = []; QA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt($.apply(void 0, r), 10) : 0;
  e[A] === et && A++;
  for (var s = []; QA(e[A]); )
    s.push(e[A++]);
  var a = s.length, B = a ? parseInt($.apply(void 0, s), 10) : 0;
  (e[A] === ta || e[A] === Aa) && A++;
  var i = 1;
  (e[A] === le || e[A] === vA) && (e[A] === vA && (i = -1), A++);
  for (var o = []; QA(e[A]); )
    o.push(e[A++]);
  var c = o.length ? parseInt($.apply(void 0, o), 10) : 0;
  return t * (n + B * Math.pow(10, -a)) * Math.pow(10, i * c);
}, To = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, So = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, Oo = {
  type: 4
  /* COMMA_TOKEN */
}, Mo = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, No = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, Ro = {
  type: 21
  /* COLUMN_TOKEN */
}, Go = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, Vo = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, _o = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, Po = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, ko = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, pt = {
  type: 23
  /* BAD_URL_TOKEN */
}, Xo = {
  type: 1
  /* BAD_STRING_TOKEN */
}, Jo = {
  type: 25
  /* CDO_TOKEN */
}, Yo = {
  type: 24
  /* CDC_TOKEN */
}, Wo = {
  type: 26
  /* COLON_TOKEN */
}, Zo = {
  type: 27
  /* SEMICOLON_TOKEN */
}, jo = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, zo = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, qo = {
  type: 31
  /* WHITESPACE_TOKEN */
}, kr = {
  type: 32
  /* EOF_TOKEN */
}, na = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(Yt(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== kr; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Qt:
          return this.consumeStringToken(Qt);
        case zi:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (Pn(t) || Ae(r, n)) {
            var s = dt(t, r, n) ? Wi : Yi, a = this.consumeName();
            return { type: 5, value: a, flags: s };
          }
          break;
        case qi:
          if (this.peekCodePoint(0) === Oe)
            return this.consumeCodePoint(), Mo;
          break;
        case Ct:
          return this.consumeStringToken(Ct);
        case Ut:
          return To;
        case Me:
          return So;
        case ur:
          if (this.peekCodePoint(0) === Oe)
            return this.consumeCodePoint(), ko;
          break;
        case le:
          if (fr(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case uo:
          return Oo;
        case vA:
          var B = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (fr(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (dt(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === vA && o === ro)
            return this.consumeCodePoint(), this.consumeCodePoint(), Yo;
          break;
        case et:
          if (fr(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Gn:
          if (this.peekCodePoint(0) === ur)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === ur && (c = this.consumeCodePoint(), c === Gn))
                return this.consumeToken();
              if (c === kA)
                return this.consumeToken();
            }
          break;
        case fo:
          return Wo;
        case go:
          return Zo;
        case to:
          if (this.peekCodePoint(0) === eo && this.peekCodePoint(1) === vA && this.peekCodePoint(2) === vA)
            return this.consumeCodePoint(), this.consumeCodePoint(), Jo;
          break;
        case no:
          var l = this.peekCodePoint(0), u = this.peekCodePoint(1), F = this.peekCodePoint(2);
          if (dt(l, u, F)) {
            var a = this.consumeName();
            return { type: 7, value: a };
          }
          break;
        case so:
          return jo;
        case Xe:
          if (Ae(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case ao:
          return zo;
        case Bo:
          if (this.peekCodePoint(0) === Oe)
            return this.consumeCodePoint(), No;
          break;
        case io:
          return _o;
        case oo:
          return Po;
        case Eo:
        case Ho:
          var Q = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return Q === le && (Ue(w) || w === ht) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Vn:
          if (this.peekCodePoint(0) === Oe)
            return this.consumeCodePoint(), Go;
          if (this.peekCodePoint(0) === Vn)
            return this.consumeCodePoint(), Ro;
          break;
        case co:
          if (this.peekCodePoint(0) === Oe)
            return this.consumeCodePoint(), Vo;
          break;
        case kA:
          return kr;
      }
      return Ft(A) ? (this.consumeWhiteSpace(), qo) : QA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Mt(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: $(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); Ue(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === ht && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt($.apply(void 0, A.map(function(i) {
          return i === ht ? qs : i;
        })), 16), s = parseInt($.apply(void 0, A.map(function(i) {
          return i === ht ? ra : i;
        })), 16);
        return { type: 30, start: n, end: s };
      }
      var a = parseInt($.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === vA && Ue(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var B = []; Ue(t) && B.length < 6; )
          B.push(t), t = this.consumeCodePoint();
        var s = parseInt($.apply(void 0, B), 16);
        return { type: 30, start: a, end: s };
      } else
        return { type: 30, start: a, end: a };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === Ut ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Ut ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === kA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ct || t === Qt) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === kA || this.peekCodePoint(0) === Me) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), pt);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === kA || n === Me)
          return { type: 22, value: $.apply(void 0, A) };
        if (Ft(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === kA || this.peekCodePoint(0) === Me ? (this.consumeCodePoint(), { type: 22, value: $.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), pt);
        if (n === Qt || n === Ct || n === Ut || xo(n))
          return this.consumeBadUrlRemnants(), pt;
        if (n === Xe)
          if (Ae(n, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), pt;
        else
          A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; Ft(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === Me || A === kA)
          return;
        Ae(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var n = Math.min(t, A);
        r += $.apply(void 0, this._value.splice(0, n)), A -= n;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === kA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === Ot)
          return this._value.splice(0, r), Xo;
        if (n === Xe) {
          var s = this._value[r + 1];
          s !== kA && s !== void 0 && (s === Ot ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : Ae(n, s) && (t += this.consumeStringSlice(r), t += $(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = nt, r = this.peekCodePoint(0);
      for ((r === le || r === vA) && A.push(this.consumeCodePoint()); QA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === et && QA(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Rn; QA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var s = this.peekCodePoint(2);
      if ((r === ta || r === Aa) && ((n === le || n === vA) && QA(s) || QA(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Rn; QA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [Do(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), s = this.peekCodePoint(1), a = this.peekCodePoint(2);
      if (dt(n, s, a)) {
        var B = this.consumeName();
        return { type: 15, number: t, flags: r, unit: B };
      }
      return n === $i ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (Ue(A)) {
        for (var t = $(A); Ue(this.peekCodePoint(0)) && t.length < 6; )
          t += $(this.consumeCodePoint());
        Ft(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || yo(r) || r > 1114111 ? _n : r;
      }
      return A === kA ? _n : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Pn(t))
          A += $(t);
        else if (Ae(t, this.peekCodePoint(0)))
          A += $(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  }()
), sa = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new na();
      return t.write(A), new e(t.read());
    }, e.parseValue = function(A) {
      return e.create(A).parseComponentValue();
    }, e.parseValues = function(A) {
      return e.create(A).parseComponentValues();
    }, e.prototype.parseComponentValue = function() {
      for (var A = this.consumeToken(); A.type === 31; )
        A = this.consumeToken();
      if (A.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(A);
      var t = this.consumeComponentValue();
      do
        A = this.consumeToken();
      while (A.type === 31);
      if (A.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, e.prototype.parseComponentValues = function() {
      for (var A = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return A;
        A.push(t), A.push();
      }
    }, e.prototype.consumeComponentValue = function() {
      var A = this.consumeToken();
      switch (A.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(A.type);
        case 19:
          return this.consumeFunction(A);
      }
      return A;
    }, e.prototype.consumeSimpleBlock = function(A) {
      for (var t = { type: A, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || Ac(r, A))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, e.prototype.consumeFunction = function(A) {
      for (var t = {
        name: A.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, e.prototype.consumeToken = function() {
      var A = this._tokens.shift();
      return typeof A > "u" ? kr : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  }()
), st = function(e) {
  return e.type === 15;
}, be = function(e) {
  return e.type === 17;
}, J = function(e) {
  return e.type === 20;
}, $o = function(e) {
  return e.type === 0;
}, Xr = function(e, A) {
  return J(e) && e.value === A;
}, aa = function(e) {
  return e.type !== 31;
}, ve = function(e) {
  return e.type !== 31 && e.type !== 4;
}, JA = function(e) {
  var A = [], t = [];
  return e.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && A.push(t), A;
}, Ac = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, ae = function(e) {
  return e.type === 17 || e.type === 15;
}, eA = function(e) {
  return e.type === 16 || ae(e);
}, Ba = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, uA = {
  type: 17,
  number: 0,
  flags: nt
}, nn = {
  type: 16,
  number: 50,
  flags: nt
}, te = {
  type: 16,
  number: 100,
  flags: nt
}, _e = function(e, A, t) {
  var r = e[0], n = e[1];
  return [Y(r, A), Y(typeof n < "u" ? n : r, t)];
}, Y = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (st(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, ia = "deg", oa = "grad", ca = "rad", la = "turn", Wt = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case ia:
          return Math.PI * A.number / 180;
        case oa:
          return Math.PI / 200 * A.number;
        case ca:
          return A.number;
        case la:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, ua = function(e) {
  return e.type === 15 && (e.unit === ia || e.unit === oa || e.unit === ca || e.unit === la);
}, fa = function(e) {
  var A = e.filter(J).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [uA, uA];
    case "to top":
    case "bottom":
      return TA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [uA, te];
    case "to right":
    case "left":
      return TA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [te, te];
    case "to bottom":
    case "top":
      return TA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [te, uA];
    case "to left":
    case "right":
      return TA(270);
  }
  return 0;
}, TA = function(e) {
  return Math.PI * e / 180;
}, ne = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = ec[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
        return re(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3), a = A.value.substring(3, 4);
        return re(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(a + a, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6);
        return re(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), a = A.value.substring(6, 8);
        return re(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(a, 16) / 255);
      }
    }
    if (A.type === 20) {
      var B = jA[A.value.toUpperCase()];
      if (typeof B < "u")
        return B;
    }
    return jA.TRANSPARENT;
  }
}, se = function(e) {
  return (255 & e) === 0;
}, BA = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, re = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, kn = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, Xn = function(e, A) {
  var t = A.filter(ve);
  if (t.length === 3) {
    var r = t.map(kn), n = r[0], s = r[1], a = r[2];
    return re(n, s, a, 1);
  }
  if (t.length === 4) {
    var B = t.map(kn), n = B[0], s = B[1], a = B[2], i = B[3];
    return re(n, s, a, i);
  }
  return 0;
};
function gr(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var Jn = function(e, A) {
  var t = A.filter(ve), r = t[0], n = t[1], s = t[2], a = t[3], B = (r.type === 17 ? TA(r.number) : Wt.parse(e, r)) / (Math.PI * 2), i = eA(n) ? n.number / 100 : 0, o = eA(s) ? s.number / 100 : 0, c = typeof a < "u" && eA(a) ? Y(a, 1) : 1;
  if (i === 0)
    return re(o * 255, o * 255, o * 255, 1);
  var l = o <= 0.5 ? o * (i + 1) : o + i - o * i, u = o * 2 - l, F = gr(u, l, B + 1 / 3), Q = gr(u, l, B), w = gr(u, l, B - 1 / 3);
  return re(F * 255, Q * 255, w * 255, c);
}, ec = {
  hsl: Jn,
  hsla: Jn,
  rgb: Xn,
  rgba: Xn
}, Je = function(e, A) {
  return ne.parse(e, sa.create(A).parseComponentValue());
}, jA = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, tc = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (J(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, rc = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Zt = function(e, A) {
  var t = ne.parse(e, A[0]), r = A[1];
  return r && eA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Yn = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = uA), r.stop === null && (r.stop = te);
  for (var n = [], s = 0, a = 0; a < e.length; a++) {
    var B = e[a].stop;
    if (B !== null) {
      var i = Y(B, A);
      i > s ? n.push(i) : n.push(s), s = i;
    } else
      n.push(null);
  }
  for (var o = null, a = 0; a < n.length; a++) {
    var c = n[a];
    if (c === null)
      o === null && (o = a);
    else if (o !== null) {
      for (var l = a - o, u = n[o - 1], F = (c - u) / (l + 1), Q = 1; Q <= l; Q++)
        n[o + Q - 1] = F * Q;
      o = null;
    }
  }
  return e.map(function(w, x) {
    var d = w.color;
    return { color: d, stop: Math.max(Math.min(1, n[x] / A), 0) };
  });
}, nc = function(e, A, t) {
  var r = A / 2, n = t / 2, s = Y(e[0], A) - r, a = n - Y(e[1], t);
  return (Math.atan2(a, s) + Math.PI * 2) % (Math.PI * 2);
}, sc = function(e, A, t) {
  var r = typeof e == "number" ? e : nc(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = A / 2, a = t / 2, B = n / 2, i = Math.sin(r - Math.PI / 2) * B, o = Math.cos(r - Math.PI / 2) * B;
  return [n, s - o, s + o, a - i, a + i];
}, NA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, Wn = function(e, A, t, r, n) {
  var s = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return s.reduce(function(a, B) {
    var i = B[0], o = B[1], c = NA(t - i, r - o);
    return (n ? c < a.optimumDistance : c > a.optimumDistance) ? {
      optimumCorner: B,
      optimumDistance: c
    } : a;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, ac = function(e, A, t, r, n) {
  var s = 0, a = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? s = a = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.min(Math.abs(A), Math.abs(A - r)), a = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        s = a = Math.min(NA(A, t), NA(A, t - n), NA(A - r, t), NA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), i = Wn(r, n, A, t, !0), o = i[0], c = i[1];
        s = NA(o - A, (c - t) / B), a = B * s;
      }
      break;
    case 1:
      e.shape === 0 ? s = a = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.max(Math.abs(A), Math.abs(A - r)), a = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        s = a = Math.max(NA(A, t), NA(A, t - n), NA(A - r, t), NA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), l = Wn(r, n, A, t, !1), o = l[0], c = l[1];
        s = NA(o - A, (c - t) / B), a = B * s;
      }
      break;
  }
  return Array.isArray(e.size) && (s = Y(e.size[0], r), a = e.size.length === 2 ? Y(e.size[1], n) : s), [s, a];
}, Bc = function(e, A) {
  var t = TA(180), r = [];
  return JA(A).forEach(function(n, s) {
    if (s === 0) {
      var a = n[0];
      if (a.type === 20 && a.value === "to") {
        t = fa(n);
        return;
      } else if (ua(a)) {
        t = Wt.parse(e, a);
        return;
      }
    }
    var B = Zt(e, n);
    r.push(B);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Et = function(e, A) {
  var t = TA(180), r = [];
  return JA(A).forEach(function(n, s) {
    if (s === 0) {
      var a = n[0];
      if (a.type === 20 && ["top", "left", "right", "bottom"].indexOf(a.value) !== -1) {
        t = fa(n);
        return;
      } else if (ua(a)) {
        t = (Wt.parse(e, a) + TA(270)) % TA(360);
        return;
      }
    }
    var B = Zt(e, n);
    r.push(B);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, ic = function(e, A) {
  var t = TA(180), r = [], n = 1, s = 0, a = 3, B = [];
  return JA(A).forEach(function(i, o) {
    var c = i[0];
    if (o === 0) {
      if (J(c) && c.value === "linear") {
        n = 1;
        return;
      } else if (J(c) && c.value === "radial") {
        n = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var l = ne.parse(e, c.values[0]);
        r.push({ stop: uA, color: l });
      } else if (c.name === "to") {
        var l = ne.parse(e, c.values[0]);
        r.push({ stop: te, color: l });
      } else if (c.name === "color-stop") {
        var u = c.values.filter(ve);
        if (u.length === 2) {
          var l = ne.parse(e, u[1]), F = u[0];
          be(F) && r.push({
            stop: { type: 16, number: F.number * 100, flags: F.flags },
            color: l
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + TA(180)) % TA(360),
    stops: r,
    type: n
  } : { size: a, shape: s, stops: r, position: B, type: n };
}, ga = "closest-side", wa = "farthest-side", Qa = "closest-corner", Ca = "farthest-corner", Ua = "circle", ha = "ellipse", Fa = "cover", da = "contain", oc = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return JA(A).forEach(function(a, B) {
    var i = !0;
    if (B === 0) {
      var o = !1;
      i = a.reduce(function(l, u) {
        if (o)
          if (J(u))
            switch (u.value) {
              case "center":
                return s.push(nn), l;
              case "top":
              case "left":
                return s.push(uA), l;
              case "right":
              case "bottom":
                return s.push(te), l;
            }
          else
            (eA(u) || ae(u)) && s.push(u);
        else if (J(u))
          switch (u.value) {
            case Ua:
              return t = 0, !1;
            case ha:
              return t = 1, !1;
            case "at":
              return o = !0, !1;
            case ga:
              return r = 0, !1;
            case Fa:
            case wa:
              return r = 1, !1;
            case da:
            case Qa:
              return r = 2, !1;
            case Ca:
              return r = 3, !1;
          }
        else if (ae(u) || eA(u))
          return Array.isArray(r) || (r = []), r.push(u), !1;
        return l;
      }, i);
    }
    if (i) {
      var c = Zt(e, a);
      n.push(c);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: s,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, mt = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return JA(A).forEach(function(a, B) {
    var i = !0;
    if (B === 0 ? i = a.reduce(function(c, l) {
      if (J(l))
        switch (l.value) {
          case "center":
            return s.push(nn), !1;
          case "top":
          case "left":
            return s.push(uA), !1;
          case "right":
          case "bottom":
            return s.push(te), !1;
        }
      else if (eA(l) || ae(l))
        return s.push(l), !1;
      return c;
    }, i) : B === 1 && (i = a.reduce(function(c, l) {
      if (J(l))
        switch (l.value) {
          case Ua:
            return t = 0, !1;
          case ha:
            return t = 1, !1;
          case da:
          case ga:
            return r = 0, !1;
          case wa:
            return r = 1, !1;
          case Qa:
            return r = 2, !1;
          case Fa:
          case Ca:
            return r = 3, !1;
        }
      else if (ae(l) || eA(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return c;
    }, i)), i) {
      var o = Zt(e, a);
      n.push(o);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: s,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, cc = function(e) {
  return e.type === 1;
}, lc = function(e) {
  return e.type === 2;
}, sn = {
  name: "image",
  parse: function(e, A) {
    if (A.type === 22) {
      var t = {
        url: A.value,
        type: 0
        /* URL */
      };
      return e.cache.addImage(A.value), t;
    }
    if (A.type === 18) {
      var r = pa[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function uc(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!pa[e.name]);
}
var pa = {
  "linear-gradient": Bc,
  "-moz-linear-gradient": Et,
  "-ms-linear-gradient": Et,
  "-o-linear-gradient": Et,
  "-webkit-linear-gradient": Et,
  "radial-gradient": oc,
  "-moz-radial-gradient": mt,
  "-ms-radial-gradient": mt,
  "-o-radial-gradient": mt,
  "-webkit-radial-gradient": mt,
  "-webkit-gradient": ic
}, fc = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return ve(r) && uc(r);
    }).map(function(r) {
      return sn.parse(e, r);
    });
  }
}, gc = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (J(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, wc = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return JA(A).map(function(t) {
      return t.filter(eA);
    }).map(Ba);
  }
}, Qc = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return JA(A).map(function(t) {
      return t.filter(J).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Cc);
  }
}, Cc = function(e) {
  switch (e) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, He;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(He || (He = {}));
var Uc = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return JA(A).map(function(t) {
      return t.filter(hc);
    });
  }
}, hc = function(e) {
  return J(e) || eA(e);
}, jt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Fc = jt("top"), dc = jt("right"), pc = jt("bottom"), Ec = jt("left"), zt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return Ba(t.filter(eA));
    }
  };
}, mc = zt("top-left"), Hc = zt("top-right"), vc = zt("bottom-right"), yc = zt("bottom-left"), qt = function(e) {
  return {
    name: "border-" + e + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(A, t) {
      switch (t) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, Ic = qt("top"), bc = qt("right"), Kc = qt("bottom"), Lc = qt("left"), $t = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return st(t) ? t.number : 0;
    }
  };
}, xc = $t("top"), Dc = $t("right"), Tc = $t("bottom"), Sc = $t("left"), Oc = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Mc = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, Nc = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(J).reduce(
      function(t, r) {
        return t | Rc(r.value);
      },
      0
      /* NONE */
    );
  }
}, Rc = function(e) {
  switch (e) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, Gc = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, Vc = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, Nt;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Nt || (Nt = {}));
var _c = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return Nt.STRICT;
      case "normal":
      default:
        return Nt.NORMAL;
    }
  }
}, Pc = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Zn = function(e, A) {
  return J(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : eA(e) ? Y(e, A) : A;
}, kc = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : sn.parse(e, A);
  }
}, Xc = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, Jr = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, Ar = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, Jc = Ar("top"), Yc = Ar("right"), Wc = Ar("bottom"), Zc = Ar("left"), jc = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(J).map(function(t) {
      switch (t.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, zc = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, er = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, qc = er("top"), $c = er("right"), Al = er("bottom"), el = er("left"), tl = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, rl = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, nl = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Xr(A[0], "none") ? [] : JA(A).map(function(t) {
      for (var r = {
        color: jA.TRANSPARENT,
        offsetX: uA,
        offsetY: uA,
        blur: uA
      }, n = 0, s = 0; s < t.length; s++) {
        var a = t[s];
        ae(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : r.blur = a, n++) : r.color = ne.parse(e, a);
      }
      return r;
    });
  }
}, sl = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, al = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = ol[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, Bl = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, il = function(e) {
  var A = e.filter(function(i) {
    return i.type === 17;
  }).map(function(i) {
    return i.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var n = A[4], s = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var a = A[12], B = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, n, s, a, B] : null;
}, ol = {
  matrix: Bl,
  matrix3d: il
}, jn = {
  type: 16,
  number: 50,
  flags: nt
}, cl = [jn, jn], ll = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(eA);
    return t.length !== 2 ? cl : [t[0], t[1]];
  }
}, ul = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, Ye;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(Ye || (Ye = {}));
var fl = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return Ye.BREAK_ALL;
      case "keep-all":
        return Ye.KEEP_ALL;
      case "normal":
      default:
        return Ye.NORMAL;
    }
  }
}, gl = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (be(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Ea = {
  name: "time",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
    throw new Error("Unsupported time type");
  }
}, wl = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return be(A) ? A.number : 1;
  }
}, Ql = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Cl = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(J).map(function(t) {
      switch (t.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(t) {
      return t !== 0;
    });
  }
}, Ul = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var t = [], r = [];
    return A.forEach(function(n) {
      switch (n.type) {
        case 20:
        case 0:
          t.push(n.value);
          break;
        case 17:
          t.push(n.number.toString());
          break;
        case 4:
          r.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && r.push(t.join(" ")), r.map(function(n) {
      return n.indexOf(" ") === -1 ? n : "'" + n + "'";
    });
  }
}, hl = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Fl = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (be(A))
      return A.number;
    if (J(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, dl = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(J).map(function(t) {
      return t.value;
    });
  }
}, pl = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, tA = function(e, A) {
  return (e & A) !== 0;
}, El = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A;
  }
}, ml = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r = [], n = A.filter(aa), s = 0; s < n.length; s++) {
      var a = n[s], B = n[s + 1];
      if (a.type === 20) {
        var i = B && be(B) ? B.number : 1;
        r.push({ counter: a.value, increment: i });
      }
    }
    return r;
  }
}, Hl = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(aa), n = 0; n < r.length; n++) {
      var s = r[n], a = r[n + 1];
      if (J(s) && s.value !== "none") {
        var B = a && be(a) ? a.number : 0;
        t.push({ counter: s.value, reset: B });
      }
    }
    return t;
  }
}, vl = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(st).map(function(t) {
      return Ea.parse(e, t);
    });
  }
}, yl = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return null;
    var t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r = [], n = A.filter($o);
    if (n.length % 2 !== 0)
      return null;
    for (var s = 0; s < n.length; s += 2) {
      var a = n[s].value, B = n[s + 1].value;
      r.push({ open: a, close: B });
    }
    return r;
  }
}, zn = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Il = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Xr(A[0], "none") ? [] : JA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: uA,
        offsetY: uA,
        blur: uA,
        spread: uA,
        inset: !1
      }, n = 0, s = 0; s < t.length; s++) {
        var a = t[s];
        Xr(a, "inset") ? r.inset = !0 : ae(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : n === 2 ? r.blur = a : r.spread = a, n++) : r.color = ne.parse(e, a);
      }
      return r;
    });
  }
}, bl = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r = [];
    return A.filter(J).forEach(function(n) {
      switch (n.value) {
        case "stroke":
          r.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          r.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          r.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(n) {
      r.indexOf(n) === -1 && r.push(n);
    }), r;
  }
}, Kl = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Ll = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return st(A) ? A.number : 0;
  }
}, xl = (
  /** @class */
  function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = m(A, vl, t.animationDuration), this.backgroundClip = m(A, tc, t.backgroundClip), this.backgroundColor = m(A, rc, t.backgroundColor), this.backgroundImage = m(A, fc, t.backgroundImage), this.backgroundOrigin = m(A, gc, t.backgroundOrigin), this.backgroundPosition = m(A, wc, t.backgroundPosition), this.backgroundRepeat = m(A, Qc, t.backgroundRepeat), this.backgroundSize = m(A, Uc, t.backgroundSize), this.borderTopColor = m(A, Fc, t.borderTopColor), this.borderRightColor = m(A, dc, t.borderRightColor), this.borderBottomColor = m(A, pc, t.borderBottomColor), this.borderLeftColor = m(A, Ec, t.borderLeftColor), this.borderTopLeftRadius = m(A, mc, t.borderTopLeftRadius), this.borderTopRightRadius = m(A, Hc, t.borderTopRightRadius), this.borderBottomRightRadius = m(A, vc, t.borderBottomRightRadius), this.borderBottomLeftRadius = m(A, yc, t.borderBottomLeftRadius), this.borderTopStyle = m(A, Ic, t.borderTopStyle), this.borderRightStyle = m(A, bc, t.borderRightStyle), this.borderBottomStyle = m(A, Kc, t.borderBottomStyle), this.borderLeftStyle = m(A, Lc, t.borderLeftStyle), this.borderTopWidth = m(A, xc, t.borderTopWidth), this.borderRightWidth = m(A, Dc, t.borderRightWidth), this.borderBottomWidth = m(A, Tc, t.borderBottomWidth), this.borderLeftWidth = m(A, Sc, t.borderLeftWidth), this.boxShadow = m(A, Il, t.boxShadow), this.color = m(A, Oc, t.color), this.direction = m(A, Mc, t.direction), this.display = m(A, Nc, t.display), this.float = m(A, Gc, t.cssFloat), this.fontFamily = m(A, Ul, t.fontFamily), this.fontSize = m(A, hl, t.fontSize), this.fontStyle = m(A, pl, t.fontStyle), this.fontVariant = m(A, dl, t.fontVariant), this.fontWeight = m(A, Fl, t.fontWeight), this.letterSpacing = m(A, Vc, t.letterSpacing), this.lineBreak = m(A, _c, t.lineBreak), this.lineHeight = m(A, Pc, t.lineHeight), this.listStyleImage = m(A, kc, t.listStyleImage), this.listStylePosition = m(A, Xc, t.listStylePosition), this.listStyleType = m(A, Jr, t.listStyleType), this.marginTop = m(A, Jc, t.marginTop), this.marginRight = m(A, Yc, t.marginRight), this.marginBottom = m(A, Wc, t.marginBottom), this.marginLeft = m(A, Zc, t.marginLeft), this.opacity = m(A, wl, t.opacity);
      var s = m(A, jc, t.overflow);
      this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = m(A, zc, t.overflowWrap), this.paddingTop = m(A, qc, t.paddingTop), this.paddingRight = m(A, $c, t.paddingRight), this.paddingBottom = m(A, Al, t.paddingBottom), this.paddingLeft = m(A, el, t.paddingLeft), this.paintOrder = m(A, bl, t.paintOrder), this.position = m(A, rl, t.position), this.textAlign = m(A, tl, t.textAlign), this.textDecorationColor = m(A, Ql, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = m(A, Cl, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = m(A, nl, t.textShadow), this.textTransform = m(A, sl, t.textTransform), this.transform = m(A, al, t.transform), this.transformOrigin = m(A, ll, t.transformOrigin), this.visibility = m(A, ul, t.visibility), this.webkitTextStrokeColor = m(A, Kl, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = m(A, Ll, t.webkitTextStrokeWidth), this.wordBreak = m(A, fl, t.wordBreak), this.zIndex = m(A, gl, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return se(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return tA(
        this.display,
        4
        /* INLINE */
      ) || tA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || tA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || tA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || tA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || tA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), Dl = (
  /** @class */
  function() {
    function e(A, t) {
      this.content = m(A, El, t.content), this.quotes = m(A, yl, t.quotes);
    }
    return e;
  }()
), qn = (
  /** @class */
  function() {
    function e(A, t) {
      this.counterIncrement = m(A, ml, t.counterIncrement), this.counterReset = m(A, Hl, t.counterReset);
    }
    return e;
  }()
), m = function(e, A, t) {
  var r = new na(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var s = new sa(r.read());
  switch (A.type) {
    case 2:
      var a = s.parseComponentValue();
      return A.parse(e, J(a) ? a.value : A.initialValue);
    case 0:
      return A.parse(e, s.parseComponentValue());
    case 1:
      return A.parse(e, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Wt.parse(e, s.parseComponentValue());
        case "color":
          return ne.parse(e, s.parseComponentValue());
        case "image":
          return sn.parse(e, s.parseComponentValue());
        case "length":
          var B = s.parseComponentValue();
          return ae(B) ? B : uA;
        case "length-percentage":
          var i = s.parseComponentValue();
          return eA(i) ? i : uA;
        case "time":
          return Ea.parse(e, s.parseComponentValue());
      }
      break;
  }
}, Tl = "data-html2canvas-debug", Sl = function(e) {
  var A = e.getAttribute(Tl);
  switch (A) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, Yr = function(e, A) {
  var t = Sl(e);
  return t === 1 || A === t;
}, YA = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Yr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new xl(A, window.getComputedStyle(t, null)), jr(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Jt(this.context, t), Yr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), Ol = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", $n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Pe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ht = 0; Ht < $n.length; Ht++)
  Pe[$n.charCodeAt(Ht)] = Ht;
var Ml = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, s, a, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    s = Pe[e.charCodeAt(r)], a = Pe[e.charCodeAt(r + 1)], B = Pe[e.charCodeAt(r + 2)], i = Pe[e.charCodeAt(r + 3)], c[n++] = s << 2 | a >> 4, c[n++] = (a & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, Nl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, Rl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, fe = 5, an = 6 + 5, wr = 2, Gl = an - fe, ma = 65536 >> fe, Vl = 1 << fe, Qr = Vl - 1, _l = 1024 >> fe, Pl = ma + _l, kl = Pl, Xl = 32, Jl = kl + Xl, Yl = 65536 >> an, Wl = 1 << Gl, Zl = Wl - 1, As = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, jl = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, zl = function(e, A) {
  var t = Ml(e), r = Array.isArray(t) ? Rl(t) : new Uint32Array(t), n = Array.isArray(t) ? Nl(t) : new Uint16Array(t), s = 24, a = As(n, s / 2, r[4] / 2), B = r[5] === 2 ? As(n, (s + r[4]) / 2) : jl(r, Math.ceil((s + r[4]) / 4));
  return new ql(r[0], r[1], r[2], r[3], a, B);
}, ql = (
  /** @class */
  function() {
    function e(A, t, r, n, s, a) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = a;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> fe], t = (t << wr) + (A & Qr), this.data[t];
        if (A <= 65535)
          return t = this.index[ma + (A - 55296 >> fe)], t = (t << wr) + (A & Qr), this.data[t];
        if (A < this.highStart)
          return t = Jl - Yl + (A >> an), t = this.index[t], t += A >> fe & Zl, t = this.index[t], t = (t << wr) + (A & Qr), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), es = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $l = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var vt = 0; vt < es.length; vt++)
  $l[es.charCodeAt(vt)] = vt;
var Au = 1, Cr = 2, Ur = 3, ts = 4, rs = 5, eu = 7, ns = 8, hr = 9, Fr = 10, ss = 11, as = 12, Bs = 13, is = 14, dr = 15, tu = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, ru = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, s = ""; ++n < t; ) {
    var a = e[n];
    a <= 65535 ? r.push(a) : (a -= 65536, r.push((a >> 10) + 55296, a % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, nu = zl(Ol), xA = "×", pr = "÷", su = function(e) {
  return nu.get(e);
}, au = function(e, A, t) {
  var r = t - 2, n = A[r], s = A[t - 1], a = A[t];
  if (s === Cr && a === Ur)
    return xA;
  if (s === Cr || s === Ur || s === ts || a === Cr || a === Ur || a === ts)
    return pr;
  if (s === ns && [ns, hr, ss, as].indexOf(a) !== -1 || (s === ss || s === hr) && (a === hr || a === Fr) || (s === as || s === Fr) && a === Fr || a === Bs || a === rs || a === eu || s === Au)
    return xA;
  if (s === Bs && a === is) {
    for (; n === rs; )
      n = A[--r];
    if (n === is)
      return xA;
  }
  if (s === dr && a === dr) {
    for (var B = 0; n === dr; )
      B++, n = A[--r];
    if (B % 2 === 0)
      return xA;
  }
  return pr;
}, Bu = function(e) {
  var A = tu(e), t = A.length, r = 0, n = 0, s = A.map(su);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var a = xA; r < t && (a = au(A, s, ++r)) === xA; )
        ;
      if (a !== xA || r === t) {
        var B = ru.apply(null, A.slice(n, r));
        return n = r, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, iu = function(e) {
  for (var A = Bu(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, ou = function(e) {
  var A = 123;
  if (e.createRange) {
    var t = e.createRange();
    if (t.getBoundingClientRect) {
      var r = e.createElement("boundtest");
      r.style.height = A + "px", r.style.display = "block", e.body.appendChild(r), t.selectNode(r);
      var n = t.getBoundingClientRect(), s = Math.round(n.height);
      if (e.body.removeChild(r), s === A)
        return !0;
    }
  }
  return !1;
}, cu = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = Yt(r.data).map(function(i) {
    return $(i);
  }), s = 0, a = {}, B = n.every(function(i, o) {
    t.setStart(r, s), t.setEnd(r, s + i.length);
    var c = t.getBoundingClientRect();
    s += i.length;
    var l = c.x > a.x || c.y > a.y;
    return a = c, o === 0 ? !0 : l;
  });
  return e.body.removeChild(A), B;
}, lu = function() {
  return typeof new Image().crossOrigin < "u";
}, uu = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, fu = function(e) {
  var A = new Image(), t = e.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(A, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, os = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, gu = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), s = A.toDataURL();
  n.src = s;
  var a = Wr(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), cs(a).then(function(B) {
    r.drawImage(B, 0, 0);
    var i = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var o = e.createElement("div");
    return o.style.backgroundImage = "url(" + s + ")", o.style.height = t + "px", os(i) ? cs(Wr(t, t, 0, 0, o)) : Promise.reject(!1);
  }).then(function(B) {
    return r.drawImage(B, 0, 0), os(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Wr = function(e, A, t, r, n) {
  var s = "http://www.w3.org/2000/svg", a = document.createElementNS(s, "svg"), B = document.createElementNS(s, "foreignObject");
  return a.setAttributeNS(null, "width", e.toString()), a.setAttributeNS(null, "height", A.toString()), B.setAttributeNS(null, "width", "100%"), B.setAttributeNS(null, "height", "100%"), B.setAttributeNS(null, "x", t.toString()), B.setAttributeNS(null, "y", r.toString()), B.setAttributeNS(null, "externalResourcesRequired", "true"), a.appendChild(B), B.appendChild(n), a;
}, cs = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, cA = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = ou(document);
    return Object.defineProperty(cA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = cA.SUPPORT_RANGE_BOUNDS && cu(document);
    return Object.defineProperty(cA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = fu(document);
    return Object.defineProperty(cA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? gu(document) : Promise.resolve(!1);
    return Object.defineProperty(cA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = lu();
    return Object.defineProperty(cA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = uu();
    return Object.defineProperty(cA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(cA, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(cA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, We = (
  /** @class */
  function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), wu = function(e, A, t, r) {
  var n = Uu(A, t), s = [], a = 0;
  return n.forEach(function(B) {
    if (t.textDecorationLine.length || B.trim().length > 0)
      if (cA.SUPPORT_RANGE_BOUNDS) {
        var i = ls(r, a, B.length).getClientRects();
        if (i.length > 1) {
          var o = Bn(B), c = 0;
          o.forEach(function(u) {
            s.push(new We(u, zA.fromDOMRectList(e, ls(r, c + a, u.length).getClientRects()))), c += u.length;
          });
        } else
          s.push(new We(B, zA.fromDOMRectList(e, i)));
      } else {
        var l = r.splitText(B.length);
        s.push(new We(B, Qu(e, r))), r = l;
      }
    else
      cA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(B.length));
    a += B.length;
  }), s;
}, Qu = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var s = Jt(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), s;
    }
  }
  return zA.EMPTY;
}, ls = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, Bn = function(e) {
  if (cA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return iu(e);
}, Cu = function(e, A) {
  if (cA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Fu(e, A);
}, Uu = function(e, A) {
  return A.letterSpacing !== 0 ? Bn(e) : Cu(e, A);
}, hu = [32, 160, 4961, 65792, 65793, 4153, 4241], Fu = function(e, A) {
  for (var t = Ji(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, s = function() {
    if (n.value) {
      var a = n.value.slice(), B = Yt(a), i = "";
      B.forEach(function(o) {
        hu.indexOf(o) === -1 ? i += $(o) : (i.length && r.push(i), r.push($(o)), i = "");
      }), i.length && r.push(i);
    }
  }; !(n = t.next()).done; )
    s();
  return r;
}, du = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.text = pu(t.data, r.textTransform), this.textBounds = wu(A, this.text, r, t);
    }
    return e;
  }()
), pu = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Eu, mu);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Eu = /(^|\s|:|-|\(|\))([a-z])/g, mu = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Ha = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  }(YA)
), va = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  }(YA)
), ya = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, s = new XMLSerializer(), a = Jt(t, r);
      return r.setAttribute("width", a.width + "px"), r.setAttribute("height", a.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  }(YA)
), Ia = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(YA)
), Zr = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return A;
  }(YA)
), Hu = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], vu = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], yu = function(e) {
  return e.width > e.height ? new zA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new zA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, Iu = function(e) {
  var A = e.type === bu ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, Rt = "checkbox", Gt = "radio", bu = "password", us = 707406591, on = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Iu(r), (n.type === Rt || n.type === Gt) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = yu(n.bounds)), n.type) {
        case Rt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Hu;
          break;
        case Gt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = vu;
          break;
      }
      return n;
    }
    return A;
  }(YA)
), ba = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, s = r.options[r.selectedIndex || 0];
      return n.value = s && s.text || "", n;
    }
    return A;
  }(YA)
), Ka = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(YA)
), La = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = Da(t, r.contentWindow.document.documentElement);
          var s = r.contentWindow.document.documentElement ? Je(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : jA.TRANSPARENT, a = r.contentWindow.document.body ? Je(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : jA.TRANSPARENT;
          n.backgroundColor = se(s) ? se(a) ? n.styles.backgroundColor : a : s;
        }
      } catch {
      }
      return n;
    }
    return A;
  }(YA)
), Ku = ["OL", "UL", "MENU"], Dt = function(e, A, t, r) {
  for (var n = A.firstChild, s = void 0; n; n = s)
    if (s = n.nextSibling, Ta(n) && n.data.trim().length > 0)
      t.textNodes.push(new du(e, n, t.styles));
    else if (me(n))
      if (Na(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(B) {
          return Dt(e, B, t, r);
        });
      else {
        var a = xa(e, n);
        a.styles.isVisible() && (Lu(n, a, r) ? a.flags |= 4 : xu(a.styles) && (a.flags |= 2), Ku.indexOf(n.tagName) !== -1 && (a.flags |= 8), t.elements.push(a), n.slot, n.shadowRoot ? Dt(e, n.shadowRoot, a, r) : !Vt(n) && !Sa(n) && !_t(n) && Dt(e, n, a, r));
      }
}, xa = function(e, A) {
  return zr(A) ? new Ha(e, A) : Oa(A) ? new va(e, A) : Sa(A) ? new ya(e, A) : Du(A) ? new Ia(e, A) : Tu(A) ? new Zr(e, A) : Su(A) ? new on(e, A) : _t(A) ? new ba(e, A) : Vt(A) ? new Ka(e, A) : Ma(A) ? new La(e, A) : new YA(e, A);
}, Da = function(e, A) {
  var t = xa(e, A);
  return t.flags |= 4, Dt(e, A, t, t), t;
}, Lu = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || cn(e) && t.styles.isTransparent();
}, xu = function(e) {
  return e.isPositioned() || e.isFloating();
}, Ta = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, me = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, jr = function(e) {
  return me(e) && typeof e.style < "u" && !Tt(e);
}, Tt = function(e) {
  return typeof e.className == "object";
}, Du = function(e) {
  return e.tagName === "LI";
}, Tu = function(e) {
  return e.tagName === "OL";
}, Su = function(e) {
  return e.tagName === "INPUT";
}, Ou = function(e) {
  return e.tagName === "HTML";
}, Sa = function(e) {
  return e.tagName === "svg";
}, cn = function(e) {
  return e.tagName === "BODY";
}, Oa = function(e) {
  return e.tagName === "CANVAS";
}, fs = function(e) {
  return e.tagName === "VIDEO";
}, zr = function(e) {
  return e.tagName === "IMG";
}, Ma = function(e) {
  return e.tagName === "IFRAME";
}, gs = function(e) {
  return e.tagName === "STYLE";
}, Mu = function(e) {
  return e.tagName === "SCRIPT";
}, Vt = function(e) {
  return e.tagName === "TEXTAREA";
}, _t = function(e) {
  return e.tagName === "SELECT";
}, Na = function(e) {
  return e.tagName === "SLOT";
}, ws = function(e) {
  return e.tagName.indexOf("-") > 0;
}, Nu = (
  /** @class */
  function() {
    function e() {
      this.counters = {};
    }
    return e.prototype.getCounterValue = function(A) {
      var t = this.counters[A];
      return t && t.length ? t[t.length - 1] : 1;
    }, e.prototype.getCounterValues = function(A) {
      var t = this.counters[A];
      return t || [];
    }, e.prototype.pop = function(A) {
      var t = this;
      A.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, e.prototype.parse = function(A) {
      var t = this, r = A.counterIncrement, n = A.counterReset, s = !0;
      r !== null && r.forEach(function(B) {
        var i = t.counters[B.counter];
        i && B.increment !== 0 && (s = !1, i.length || i.push(1), i[Math.max(0, i.length - 1)] += B.increment);
      });
      var a = [];
      return s && n.forEach(function(B) {
        var i = t.counters[B.counter];
        a.push(B.counter), i || (i = t.counters[B.counter] = []), i.push(B.reset);
      }), a;
    }, e;
  }()
), Qs = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Cs = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, Ru = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, Gu = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, he = function(e, A, t, r, n, s) {
  return e < A || e > t ? tt(e, n, s.length > 0) : r.integers.reduce(function(a, B, i) {
    for (; e >= B; )
      e -= B, a += r.values[i];
    return a;
  }, "") + s;
}, Ra = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, q = function(e, A, t, r, n) {
  var s = t - A + 1;
  return (e < 0 ? "-" : "") + (Ra(Math.abs(e), s, r, function(a) {
    return $(Math.floor(a % s) + A);
  }) + n);
}, Be = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return Ra(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, pe = 1, qA = 2, $A = 4, ke = 8, ZA = function(e, A, t, r, n, s) {
  if (e < -9999 || e > 9999)
    return tt(e, 4, n.length > 0);
  var a = Math.abs(e), B = n;
  if (a === 0)
    return A[0] + B;
  for (var i = 0; a > 0 && i <= 4; i++) {
    var o = a % 10;
    o === 0 && tA(s, pe) && B !== "" ? B = A[o] + B : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && tA(s, qA) || o === 1 && i === 1 && tA(s, $A) && e > 100 || o === 1 && i > 1 && tA(s, ke) ? B = A[o] + (i > 0 ? t[i - 1] : "") + B : o === 1 && i > 0 && (B = t[i - 1] + B), a = Math.floor(a / 10);
  }
  return (e < 0 ? r : "") + B;
}, Us = "十百千萬", hs = "拾佰仟萬", Fs = "マイナス", Er = "마이너스", tt = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", a = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + a;
    case 1:
      return "◦" + a;
    case 2:
      return "◾" + a;
    case 5:
      var B = q(e, 48, 57, !0, r);
      return B.length < 4 ? "0" + B : B;
    case 4:
      return Be(e, "〇一二三四五六七八九", n);
    case 6:
      return he(e, 1, 3999, Qs, 3, r).toLowerCase();
    case 7:
      return he(e, 1, 3999, Qs, 3, r);
    case 8:
      return q(e, 945, 969, !1, r);
    case 9:
      return q(e, 97, 122, !1, r);
    case 10:
      return q(e, 65, 90, !1, r);
    case 11:
      return q(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return he(e, 1, 9999, Cs, 3, r);
    case 35:
      return he(e, 1, 9999, Cs, 3, r).toLowerCase();
    case 13:
      return q(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return q(e, 6112, 6121, !0, r);
    case 15:
      return Be(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return Be(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return ZA(e, "零一二三四五六七八九", Us, "負", n, qA | $A | ke);
    case 47:
      return ZA(e, "零壹貳參肆伍陸柒捌玖", hs, "負", n, pe | qA | $A | ke);
    case 42:
      return ZA(e, "零一二三四五六七八九", Us, "负", n, qA | $A | ke);
    case 41:
      return ZA(e, "零壹贰叁肆伍陆柒捌玖", hs, "负", n, pe | qA | $A | ke);
    case 26:
      return ZA(e, "〇一二三四五六七八九", "十百千万", Fs, n, 0);
    case 25:
      return ZA(e, "零壱弐参四伍六七八九", "拾百千万", Fs, n, pe | qA | $A);
    case 31:
      return ZA(e, "영일이삼사오육칠팔구", "십백천만", Er, s, pe | qA | $A);
    case 33:
      return ZA(e, "零一二三四五六七八九", "十百千萬", Er, s, 0);
    case 32:
      return ZA(e, "零壹貳參四五六七八九", "拾百千", Er, s, pe | qA | $A);
    case 18:
      return q(e, 2406, 2415, !0, r);
    case 20:
      return he(e, 1, 19999, Gu, 3, r);
    case 21:
      return q(e, 2790, 2799, !0, r);
    case 22:
      return q(e, 2662, 2671, !0, r);
    case 22:
      return he(e, 1, 10999, Ru, 3, r);
    case 23:
      return Be(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Be(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return q(e, 3302, 3311, !0, r);
    case 28:
      return Be(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return Be(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return q(e, 3792, 3801, !0, r);
    case 37:
      return q(e, 6160, 6169, !0, r);
    case 38:
      return q(e, 4160, 4169, !0, r);
    case 39:
      return q(e, 2918, 2927, !0, r);
    case 40:
      return q(e, 1776, 1785, !0, r);
    case 43:
      return q(e, 3046, 3055, !0, r);
    case 44:
      return q(e, 3174, 3183, !0, r);
    case 45:
      return q(e, 3664, 3673, !0, r);
    case 46:
      return q(e, 3872, 3881, !0, r);
    case 3:
    default:
      return q(e, 48, 57, !0, r);
  }
}, Ga = "data-html2canvas-ignore", ds = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Nu(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = Vu(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var s = A.defaultView.pageXOffset, a = A.defaultView.pageYOffset, B = n.contentWindow, i = B.document, o = ku(n).then(function() {
        return hA(r, void 0, void 0, function() {
          var c, l;
          return wA(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(Wu), B && (B.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (B.scrollY !== t.top || B.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(B.scrollX - t.left, B.scrollY - t.top, 0, 0))), c = this.options.onclone, l = this.clonedReferenceElement, typeof l > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
              case 1:
                u.sent(), u.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Pu(i)] : [3, 4];
              case 3:
                u.sent(), u.label = 4;
              case 4:
                return typeof c == "function" ? [2, Promise.resolve().then(function() {
                  return c(i, l);
                }).then(function() {
                  return n;
                })] : [2, n];
            }
          });
        });
      });
      return i.open(), i.write(Ju(document.doctype) + "<html></html>"), Yu(this.referenceElement.ownerDocument, s, a), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), o;
    }, e.prototype.createElementClone = function(A) {
      if (Yr(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (Oa(A))
        return this.createCanvasClone(A);
      if (fs(A))
        return this.createVideoClone(A);
      if (gs(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return zr(t) && (zr(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), ws(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return mr(A.style, t), t;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var t = A.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(s, a) {
            return a && typeof a.cssText == "string" ? s + a.cssText : s;
          }, ""), n = A.cloneNode(!1);
          return n.textContent = r, n;
        }
      } catch (s) {
        if (this.context.logger.error("Unable to access cssRules property", s), s.name !== "SecurityError")
          throw s;
      }
      return A.cloneNode(!1);
    }, e.prototype.createCanvasClone = function(A) {
      var t;
      if (this.options.inlineImages && A.ownerDocument) {
        var r = A.ownerDocument.createElement("img");
        try {
          return r.src = A.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
        }
      }
      var n = A.cloneNode(!1);
      try {
        n.width = A.width, n.height = A.height;
        var s = A.getContext("2d"), a = n.getContext("2d");
        if (a)
          if (!this.options.allowTaint && s)
            a.putImageData(s.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var B = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
            if (B) {
              var i = B.getContextAttributes();
              (i == null ? void 0 : i.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
            }
            a.drawImage(A, 0, 0);
          }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", A);
      }
      return n;
    }, e.prototype.createVideoClone = function(A) {
      var t = A.ownerDocument.createElement("canvas");
      t.width = A.offsetWidth, t.height = A.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(A, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", A);
      }
      var n = A.ownerDocument.createElement("canvas");
      return n.width = A.offsetWidth, n.height = A.offsetHeight, n;
    }, e.prototype.appendChildNode = function(A, t, r) {
      (!me(t) || !Mu(t) && !t.hasAttribute(Ga) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !me(t) || !gs(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, s = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; s; s = s.nextSibling)
        if (me(s) && Na(s) && typeof s.assignedNodes == "function") {
          var a = s.assignedNodes();
          a.length && a.forEach(function(B) {
            return n.appendChildNode(t, B, r);
          });
        } else
          this.appendChildNode(t, s, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (Ta(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && me(A) && (jr(A) || Tt(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var s = r.getComputedStyle(A), a = r.getComputedStyle(A, ":before"), B = r.getComputedStyle(A, ":after");
        this.referenceElement === A && jr(n) && (this.clonedReferenceElement = n), cn(n) && zu(n);
        var i = this.counters.parse(new qn(this.context, s)), o = this.resolvePseudoContent(A, n, a, Ze.BEFORE);
        ws(A) && (t = !0), fs(A) || this.cloneChildNodes(A, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(A, n, B, Ze.AFTER);
        return c && n.appendChild(c), this.counters.pop(i), (s && (this.options.copyStyles || Tt(A)) && !Ma(A) || t) && mr(s, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (Vt(A) || _t(A)) && (Vt(n) || _t(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var s = this;
      if (r) {
        var a = r.content, B = t.ownerDocument;
        if (!(!B || !a || a === "none" || a === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new qn(this.context, r));
          var i = new Dl(this.context, r), o = B.createElement("html2canvaspseudoelement");
          mr(r, o), i.content.forEach(function(l) {
            if (l.type === 0)
              o.appendChild(B.createTextNode(l.value));
            else if (l.type === 22) {
              var u = B.createElement("img");
              u.src = l.value, u.style.opacity = "1", o.appendChild(u);
            } else if (l.type === 18) {
              if (l.name === "attr") {
                var F = l.values.filter(J);
                F.length && o.appendChild(B.createTextNode(A.getAttribute(F[0].value) || ""));
              } else if (l.name === "counter") {
                var Q = l.values.filter(ve), w = Q[0], x = Q[1];
                if (w && J(w)) {
                  var d = s.counters.getCounterValue(w.value), h = x && J(x) ? Jr.parse(s.context, x.value) : 3;
                  o.appendChild(B.createTextNode(tt(d, h, !1)));
                }
              } else if (l.name === "counters") {
                var S = l.values.filter(ve), w = S[0], E = S[1], x = S[2];
                if (w && J(w)) {
                  var D = s.counters.getCounterValues(w.value), f = x && J(x) ? Jr.parse(s.context, x.value) : 3, O = E && E.type === 0 ? E.value : "", K = D.map(function(j) {
                    return tt(j, f, !1);
                  }).join(O);
                  o.appendChild(B.createTextNode(K));
                }
              }
            } else if (l.type === 20)
              switch (l.value) {
                case "open-quote":
                  o.appendChild(B.createTextNode(zn(i.quotes, s.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(B.createTextNode(zn(i.quotes, --s.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(B.createTextNode(l.value));
              }
          }), o.className = qr + " " + $r;
          var c = n === Ze.BEFORE ? " " + qr : " " + $r;
          return Tt(t) ? t.className.baseValue += c : t.className += c, o;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  }()
), Ze;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ze || (Ze = {}));
var Vu = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(Ga, "true"), e.body.appendChild(t), t;
}, _u = function(e) {
  return new Promise(function(A) {
    if (e.complete) {
      A();
      return;
    }
    if (!e.src) {
      A();
      return;
    }
    e.onload = A, e.onerror = A;
  });
}, Pu = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(_u));
}, ku = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var n = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var s = setInterval(function() {
        n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(s), A(e));
      }, 50);
    };
  });
}, Xu = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], mr = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    Xu.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, Ju = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, Yu = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, Wu = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Zu = ":before", ju = ":after", qr = "___html2canvas___pseudoelement_before", $r = "___html2canvas___pseudoelement_after", ps = `{
    content: "" !important;
    display: none !important;
}`, zu = function(e) {
  qu(e, "." + qr + Zu + ps + `
         .` + $r + ju + ps);
}, qu = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, Va = (
  /** @class */
  function() {
    function e() {
    }
    return e.getOrigin = function(A) {
      var t = e._link;
      return t ? (t.href = A, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, e.isSameOrigin = function(A) {
      return e.getOrigin(A) === e._origin;
    }, e.setContext = function(A) {
      e._link = A.document.createElement("a"), e._origin = e.getOrigin(A.location.href);
    }, e._origin = "about:blank", e;
  }()
), $u = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (vr(A) || rf(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return hA(this, void 0, void 0, function() {
        var t, r, n, s, a = this;
        return wA(this, function(B) {
          switch (B.label) {
            case 0:
              return t = Va.isSameOrigin(A), r = !Hr(A) && this._options.useCORS === !0 && cA.SUPPORT_CORS_IMAGES && !t, n = !Hr(A) && !t && !vr(A) && typeof this._options.proxy == "string" && cA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !Hr(A) && !vr(A) && !n && !r ? [
                2
                /*return*/
              ] : (s = A, n ? [4, this.proxy(s)] : [3, 2]);
            case 1:
              s = B.sent(), B.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(i, o) {
                var c = new Image();
                c.onload = function() {
                  return i(c);
                }, c.onerror = o, (nf(s) || r) && (c.crossOrigin = "anonymous"), c.src = s, c.complete === !0 && setTimeout(function() {
                  return i(c);
                }, 500), a._options.imageTimeout > 0 && setTimeout(function() {
                  return o("Timed out (" + a._options.imageTimeout + "ms) loading image");
                }, a._options.imageTimeout);
              })];
            case 3:
              return [2, B.sent()];
          }
        });
      });
    }, e.prototype.has = function(A) {
      return typeof this._cache[A] < "u";
    }, e.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, e.prototype.proxy = function(A) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var n = A.substring(0, 256);
      return new Promise(function(s, a) {
        var B = cA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
        i.onload = function() {
          if (i.status === 200)
            if (B === "text")
              s(i.response);
            else {
              var l = new FileReader();
              l.addEventListener("load", function() {
                return s(l.result);
              }, !1), l.addEventListener("error", function(u) {
                return a(u);
              }, !1), l.readAsDataURL(i.response);
            }
          else
            a("Failed to proxy resource " + n + " with status code " + i.status);
        }, i.onerror = a;
        var o = r.indexOf("?") > -1 ? "&" : "?";
        if (i.open("GET", "" + r + o + "url=" + encodeURIComponent(A) + "&responseType=" + B), B !== "text" && i instanceof XMLHttpRequest && (i.responseType = B), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          i.timeout = c, i.ontimeout = function() {
            return a("Timed out (" + c + "ms) proxying " + n);
          };
        }
        i.send();
      });
    }, e;
  }()
), Af = /^data:image\/svg\+xml/i, ef = /^data:image\/.*;base64,/i, tf = /^data:image\/.*/i, rf = function(e) {
  return cA.SUPPORT_SVG_DRAWING || !sf(e);
}, Hr = function(e) {
  return tf.test(e);
}, nf = function(e) {
  return ef.test(e);
}, vr = function(e) {
  return e.substr(0, 4) === "blob";
}, sf = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || Af.test(e);
}, p = (
  /** @class */
  function() {
    function e(A, t) {
      this.type = 0, this.x = A, this.y = t;
    }
    return e.prototype.add = function(A, t) {
      return new e(this.x + A, this.y + t);
    }, e;
  }()
), Fe = function(e, A, t) {
  return new p(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, yt = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = Fe(this.start, this.startControl, A), n = Fe(this.startControl, this.endControl, A), s = Fe(this.endControl, this.end, A), a = Fe(r, n, A), B = Fe(n, s, A), i = Fe(a, B, A);
      return t ? new e(this.start, r, a, i) : new e(i, B, s, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), DA = function(e) {
  return e.type === 1;
}, af = (
  /** @class */
  function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = _e(t.borderTopLeftRadius, r.width, r.height), s = n[0], a = n[1], B = _e(t.borderTopRightRadius, r.width, r.height), i = B[0], o = B[1], c = _e(t.borderBottomRightRadius, r.width, r.height), l = c[0], u = c[1], F = _e(t.borderBottomLeftRadius, r.width, r.height), Q = F[0], w = F[1], x = [];
      x.push((s + i) / r.width), x.push((Q + l) / r.width), x.push((a + w) / r.height), x.push((o + u) / r.height);
      var d = Math.max.apply(Math, x);
      d > 1 && (s /= d, a /= d, i /= d, o /= d, l /= d, u /= d, Q /= d, w /= d);
      var h = r.width - i, S = r.height - u, E = r.width - l, D = r.height - w, f = t.borderTopWidth, O = t.borderRightWidth, K = t.borderBottomWidth, b = t.borderLeftWidth, k = Y(t.paddingTop, A.bounds.width), j = Y(t.paddingRight, A.bounds.width), z = Y(t.paddingBottom, A.bounds.width), V = Y(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = s > 0 || a > 0 ? Z(r.left + b / 3, r.top + f / 3, s - b / 3, a - f / 3, P.TOP_LEFT) : new p(r.left + b / 3, r.top + f / 3), this.topRightBorderDoubleOuterBox = s > 0 || a > 0 ? Z(r.left + h, r.top + f / 3, i - O / 3, o - f / 3, P.TOP_RIGHT) : new p(r.left + r.width - O / 3, r.top + f / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || u > 0 ? Z(r.left + E, r.top + S, l - O / 3, u - K / 3, P.BOTTOM_RIGHT) : new p(r.left + r.width - O / 3, r.top + r.height - K / 3), this.bottomLeftBorderDoubleOuterBox = Q > 0 || w > 0 ? Z(r.left + b / 3, r.top + D, Q - b / 3, w - K / 3, P.BOTTOM_LEFT) : new p(r.left + b / 3, r.top + r.height - K / 3), this.topLeftBorderDoubleInnerBox = s > 0 || a > 0 ? Z(r.left + b * 2 / 3, r.top + f * 2 / 3, s - b * 2 / 3, a - f * 2 / 3, P.TOP_LEFT) : new p(r.left + b * 2 / 3, r.top + f * 2 / 3), this.topRightBorderDoubleInnerBox = s > 0 || a > 0 ? Z(r.left + h, r.top + f * 2 / 3, i - O * 2 / 3, o - f * 2 / 3, P.TOP_RIGHT) : new p(r.left + r.width - O * 2 / 3, r.top + f * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || u > 0 ? Z(r.left + E, r.top + S, l - O * 2 / 3, u - K * 2 / 3, P.BOTTOM_RIGHT) : new p(r.left + r.width - O * 2 / 3, r.top + r.height - K * 2 / 3), this.bottomLeftBorderDoubleInnerBox = Q > 0 || w > 0 ? Z(r.left + b * 2 / 3, r.top + D, Q - b * 2 / 3, w - K * 2 / 3, P.BOTTOM_LEFT) : new p(r.left + b * 2 / 3, r.top + r.height - K * 2 / 3), this.topLeftBorderStroke = s > 0 || a > 0 ? Z(r.left + b / 2, r.top + f / 2, s - b / 2, a - f / 2, P.TOP_LEFT) : new p(r.left + b / 2, r.top + f / 2), this.topRightBorderStroke = s > 0 || a > 0 ? Z(r.left + h, r.top + f / 2, i - O / 2, o - f / 2, P.TOP_RIGHT) : new p(r.left + r.width - O / 2, r.top + f / 2), this.bottomRightBorderStroke = l > 0 || u > 0 ? Z(r.left + E, r.top + S, l - O / 2, u - K / 2, P.BOTTOM_RIGHT) : new p(r.left + r.width - O / 2, r.top + r.height - K / 2), this.bottomLeftBorderStroke = Q > 0 || w > 0 ? Z(r.left + b / 2, r.top + D, Q - b / 2, w - K / 2, P.BOTTOM_LEFT) : new p(r.left + b / 2, r.top + r.height - K / 2), this.topLeftBorderBox = s > 0 || a > 0 ? Z(r.left, r.top, s, a, P.TOP_LEFT) : new p(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? Z(r.left + h, r.top, i, o, P.TOP_RIGHT) : new p(r.left + r.width, r.top), this.bottomRightBorderBox = l > 0 || u > 0 ? Z(r.left + E, r.top + S, l, u, P.BOTTOM_RIGHT) : new p(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = Q > 0 || w > 0 ? Z(r.left, r.top + D, Q, w, P.BOTTOM_LEFT) : new p(r.left, r.top + r.height), this.topLeftPaddingBox = s > 0 || a > 0 ? Z(r.left + b, r.top + f, Math.max(0, s - b), Math.max(0, a - f), P.TOP_LEFT) : new p(r.left + b, r.top + f), this.topRightPaddingBox = i > 0 || o > 0 ? Z(r.left + Math.min(h, r.width - O), r.top + f, h > r.width + O ? 0 : Math.max(0, i - O), Math.max(0, o - f), P.TOP_RIGHT) : new p(r.left + r.width - O, r.top + f), this.bottomRightPaddingBox = l > 0 || u > 0 ? Z(r.left + Math.min(E, r.width - b), r.top + Math.min(S, r.height - K), Math.max(0, l - O), Math.max(0, u - K), P.BOTTOM_RIGHT) : new p(r.left + r.width - O, r.top + r.height - K), this.bottomLeftPaddingBox = Q > 0 || w > 0 ? Z(r.left + b, r.top + Math.min(D, r.height - K), Math.max(0, Q - b), Math.max(0, w - K), P.BOTTOM_LEFT) : new p(r.left + b, r.top + r.height - K), this.topLeftContentBox = s > 0 || a > 0 ? Z(r.left + b + V, r.top + f + k, Math.max(0, s - (b + V)), Math.max(0, a - (f + k)), P.TOP_LEFT) : new p(r.left + b + V, r.top + f + k), this.topRightContentBox = i > 0 || o > 0 ? Z(r.left + Math.min(h, r.width + b + V), r.top + f + k, h > r.width + b + V ? 0 : i - b + V, o - (f + k), P.TOP_RIGHT) : new p(r.left + r.width - (O + j), r.top + f + k), this.bottomRightContentBox = l > 0 || u > 0 ? Z(r.left + Math.min(E, r.width - (b + V)), r.top + Math.min(S, r.height + f + k), Math.max(0, l - (O + j)), u - (K + z), P.BOTTOM_RIGHT) : new p(r.left + r.width - (O + j), r.top + r.height - (K + z)), this.bottomLeftContentBox = Q > 0 || w > 0 ? Z(r.left + b + V, r.top + D, Math.max(0, Q - (b + V)), w - (K + z), P.BOTTOM_LEFT) : new p(r.left + b + V, r.top + r.height - (K + z));
    }
    return e;
  }()
), P;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(P || (P = {}));
var Z = function(e, A, t, r, n) {
  var s = 4 * ((Math.sqrt(2) - 1) / 3), a = t * s, B = r * s, i = e + t, o = A + r;
  switch (n) {
    case P.TOP_LEFT:
      return new yt(new p(e, o), new p(e, o - B), new p(i - a, A), new p(i, A));
    case P.TOP_RIGHT:
      return new yt(new p(e, A), new p(e + a, A), new p(i, o - B), new p(i, o));
    case P.BOTTOM_RIGHT:
      return new yt(new p(i, A), new p(i, A + B), new p(e + a, o), new p(e, o));
    case P.BOTTOM_LEFT:
    default:
      return new yt(new p(i, o), new p(i - a, o), new p(e, A + B), new p(e, A));
  }
}, Pt = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Bf = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, kt = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, of = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  }()
), It = (
  /** @class */
  function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  }()
), cf = (
  /** @class */
  function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), lf = function(e) {
  return e.type === 0;
}, _a = function(e) {
  return e.type === 1;
}, uf = function(e) {
  return e.type === 2;
}, Es = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, ff = function(e, A, t, r, n) {
  return e.map(function(s, a) {
    switch (a) {
      case 0:
        return s.add(A, t);
      case 1:
        return s.add(A + r, t);
      case 2:
        return s.add(A + r, t + n);
      case 3:
        return s.add(A, t + n);
    }
    return s;
  });
}, Pa = (
  /** @class */
  function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), ka = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new af(this.container), this.container.styles.opacity < 1 && this.effects.push(new cf(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
        this.effects.push(new of(r, n, s));
      }
      if (this.container.styles.overflowX !== 0) {
        var a = Pt(this.curves), B = kt(this.curves);
        Es(a, B) ? this.effects.push(new It(
          a,
          6
          /* CONTENT */
        )) : (this.effects.push(new It(
          a,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new It(
          B,
          4
          /* CONTENT */
        )));
      }
    }
    return e.prototype.getEffects = function(A) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var s = r.effects.filter(function(i) {
          return !_a(i);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, s), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var a = Pt(r.curves), B = kt(r.curves);
            Es(a, B) || n.unshift(new It(
              B,
              6
              /* CONTENT */
            ));
          }
        } else
          n.unshift.apply(n, s);
        r = r.parent;
      }
      return n.filter(function(i) {
        return tA(i.target, A);
      });
    }, e;
  }()
), An = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var s = tA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), a = tA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), B = new ka(n, e);
    tA(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(B);
    var i = tA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (s || a) {
      var o = s || n.styles.isPositioned() ? t : A, c = new Pa(B);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var l = n.styles.zIndex.order;
        if (l < 0) {
          var u = 0;
          o.negativeZIndex.some(function(Q, w) {
            return l > Q.element.container.styles.zIndex.order ? (u = w, !1) : u > 0;
          }), o.negativeZIndex.splice(u, 0, c);
        } else if (l > 0) {
          var F = 0;
          o.positiveZIndex.some(function(Q, w) {
            return l >= Q.element.container.styles.zIndex.order ? (F = w + 1, !1) : F > 0;
          }), o.positiveZIndex.splice(F, 0, c);
        } else
          o.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        n.styles.isFloating() ? o.nonPositionedFloats.push(c) : o.nonPositionedInlineLevel.push(c);
      An(B, c, s ? c : t, i);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(B) : A.nonInlineLevel.push(B), An(B, A, t, i);
    tA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && Xa(n, i);
  });
}, Xa = function(e, A) {
  for (var t = e instanceof Zr ? e.start : 1, r = e instanceof Zr ? e.reversed : !1, n = 0; n < A.length; n++) {
    var s = A[n];
    s.container instanceof Ia && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = tt(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, gf = function(e) {
  var A = new ka(e, null), t = new Pa(A), r = [];
  return An(A, t, t, r), Xa(A.container, r), t;
}, ms = function(e, A) {
  switch (A) {
    case 0:
      return SA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return SA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return SA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return SA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, wf = function(e, A) {
  switch (A) {
    case 0:
      return SA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return SA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return SA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return SA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, Qf = function(e, A) {
  switch (A) {
    case 0:
      return SA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return SA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return SA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return SA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, Cf = function(e, A) {
  switch (A) {
    case 0:
      return bt(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return bt(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return bt(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return bt(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, bt = function(e, A) {
  var t = [];
  return DA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), DA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, SA = function(e, A, t, r) {
  var n = [];
  return DA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), DA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), DA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), DA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, Ja = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Xt = function(e) {
  var A = e.styles, t = e.bounds, r = Y(A.paddingLeft, t.width), n = Y(A.paddingRight, t.width), s = Y(A.paddingTop, t.width), a = Y(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, s + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + s + a));
}, Uf = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Xt(A) : Ja(A);
}, hf = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Xt(A) : Ja(A);
}, yr = function(e, A, t) {
  var r = Uf(Ee(e.styles.backgroundOrigin, A), e), n = hf(Ee(e.styles.backgroundClip, A), e), s = Ff(Ee(e.styles.backgroundSize, A), t, r), a = s[0], B = s[1], i = _e(Ee(e.styles.backgroundPosition, A), r.width - a, r.height - B), o = df(Ee(e.styles.backgroundRepeat, A), i, s, r, n), c = Math.round(r.left + i[0]), l = Math.round(r.top + i[1]);
  return [o, c, l, a, B];
}, de = function(e) {
  return J(e) && e.value === He.AUTO;
}, Kt = function(e) {
  return typeof e == "number";
}, Ff = function(e, A, t) {
  var r = A[0], n = A[1], s = A[2], a = e[0], B = e[1];
  if (!a)
    return [0, 0];
  if (eA(a) && B && eA(B))
    return [Y(a, t.width), Y(B, t.height)];
  var i = Kt(s);
  if (J(a) && (a.value === He.CONTAIN || a.value === He.COVER)) {
    if (Kt(s)) {
      var o = t.width / t.height;
      return o < s != (a.value === He.COVER) ? [t.width, t.width / s] : [t.height * s, t.height];
    }
    return [t.width, t.height];
  }
  var c = Kt(r), l = Kt(n), u = c || l;
  if (de(a) && (!B || de(B))) {
    if (c && l)
      return [r, n];
    if (!i && !u)
      return [t.width, t.height];
    if (u && i) {
      var F = c ? r : n * s, Q = l ? n : r / s;
      return [F, Q];
    }
    var w = c ? r : t.width, x = l ? n : t.height;
    return [w, x];
  }
  if (i) {
    var d = 0, h = 0;
    return eA(a) ? d = Y(a, t.width) : eA(B) && (h = Y(B, t.height)), de(a) ? d = h * s : (!B || de(B)) && (h = d / s), [d, h];
  }
  var S = null, E = null;
  if (eA(a) ? S = Y(a, t.width) : B && eA(B) && (E = Y(B, t.height)), S !== null && (!B || de(B)) && (E = c && l ? S / r * n : t.height), E !== null && de(a) && (S = c && l ? E / n * r : t.width), S !== null && E !== null)
    return [S, E];
  throw new Error("Unable to calculate background-size for element");
}, Ee = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, df = function(e, A, t, r, n) {
  var s = A[0], a = A[1], B = t[0], i = t[1];
  switch (e) {
    case 2:
      return [
        new p(Math.round(r.left), Math.round(r.top + a)),
        new p(Math.round(r.left + r.width), Math.round(r.top + a)),
        new p(Math.round(r.left + r.width), Math.round(i + r.top + a)),
        new p(Math.round(r.left), Math.round(i + r.top + a))
      ];
    case 3:
      return [
        new p(Math.round(r.left + s), Math.round(r.top)),
        new p(Math.round(r.left + s + B), Math.round(r.top)),
        new p(Math.round(r.left + s + B), Math.round(r.height + r.top)),
        new p(Math.round(r.left + s), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new p(Math.round(r.left + s), Math.round(r.top + a)),
        new p(Math.round(r.left + s + B), Math.round(r.top + a)),
        new p(Math.round(r.left + s + B), Math.round(r.top + a + i)),
        new p(Math.round(r.left + s), Math.round(r.top + a + i))
      ];
    default:
      return [
        new p(Math.round(n.left), Math.round(n.top)),
        new p(Math.round(n.left + n.width), Math.round(n.top)),
        new p(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new p(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, pf = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Hs = "Hidden Text", Ef = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), s = this._document.createElement("span"), a = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", a.appendChild(r), n.src = pf, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(Hs)), r.appendChild(s), r.appendChild(n);
      var B = n.offsetTop - s.offsetTop + 2;
      r.removeChild(s), r.appendChild(this._document.createTextNode(Hs)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var i = n.offsetTop - r.offsetTop + 2;
      return a.removeChild(r), { baseline: B, middle: i };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), Ya = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), mf = 1e4, Hf = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new Ef(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), uf(t) && (this.ctx.globalAlpha = t.opacity), lf(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), _a(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return hA(this, void 0, void 0, function() {
        var r;
        return wA(this, function(n) {
          switch (n.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              n.sent(), n.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNode = function(t) {
      return hA(this, void 0, void 0, function() {
        return wA(this, function(r) {
          switch (r.label) {
            case 0:
              if (tA(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderTextWithLetterSpacing = function(t, r, n) {
      var s = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var a = Bn(t.text);
        a.reduce(function(B, i) {
          return s.ctx.fillText(i, B, t.bounds.top + n), B + s.ctx.measureText(i).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(a) {
        return a === "normal" || a === "small-caps";
      }).join(""), n = Kf(t.fontFamily).join(", "), s = st(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, s, n].join(" "),
        n,
        s
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return hA(this, void 0, void 0, function() {
        var n, s, a, B, i, o, c, l, u = this;
        return wA(this, function(F) {
          return n = this.createFontStyle(r), s = n[0], a = n[1], B = n[2], this.ctx.font = s, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(a, B), o = i.baseline, c = i.middle, l = r.paintOrder, t.textBounds.forEach(function(Q) {
            l.forEach(function(w) {
              switch (w) {
                case 0:
                  u.ctx.fillStyle = BA(r.color), u.renderTextWithLetterSpacing(Q, r.letterSpacing, o);
                  var x = r.textShadow;
                  x.length && Q.text.trim().length && (x.slice(0).reverse().forEach(function(d) {
                    u.ctx.shadowColor = BA(d.color), u.ctx.shadowOffsetX = d.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = d.offsetY.number * u.options.scale, u.ctx.shadowBlur = d.blur.number, u.renderTextWithLetterSpacing(Q, r.letterSpacing, o);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = BA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(d) {
                    switch (d) {
                      case 1:
                        u.ctx.fillRect(Q.bounds.left, Math.round(Q.bounds.top + o), Q.bounds.width, 1);
                        break;
                      case 2:
                        u.ctx.fillRect(Q.bounds.left, Math.round(Q.bounds.top), Q.bounds.width, 1);
                        break;
                      case 3:
                        u.ctx.fillRect(Q.bounds.left, Math.ceil(Q.bounds.top + c), Q.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && Q.text.trim().length && (u.ctx.strokeStyle = BA(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(Q.text, Q.bounds.left, Q.bounds.top + o)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderReplacedElement = function(t, r, n) {
      if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var s = Xt(t), a = kt(r);
        this.path(a), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return hA(this, void 0, void 0, function() {
        var r, n, s, a, B, i, h, h, o, c, l, u, E, F, Q, D, w, x, d, h, S, E, D;
        return wA(this, function(f) {
          switch (f.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, s = r.styles, a = 0, B = r.textNodes, f.label = 1;
            case 1:
              return a < B.length ? (i = B[a], [4, this.renderTextNode(i, s)]) : [3, 4];
            case 2:
              f.sent(), f.label = 3;
            case 3:
              return a++, [3, 1];
            case 4:
              if (!(r instanceof Ha))
                return [3, 8];
              f.label = 5;
            case 5:
              return f.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return h = f.sent(), this.renderReplacedElement(r, n, h), [3, 8];
            case 7:
              return f.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof va && this.renderReplacedElement(r, n, r.canvas), !(r instanceof ya))
                return [3, 12];
              f.label = 9;
            case 9:
              return f.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return h = f.sent(), this.renderReplacedElement(r, n, h), [3, 12];
            case 11:
              return f.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof La && r.tree ? (o = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, o.render(r.tree)]) : [3, 14];
            case 13:
              c = f.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), f.label = 14;
            case 14:
              if (r instanceof on && (l = Math.min(r.bounds.width, r.bounds.height), r.type === Rt ? r.checked && (this.ctx.save(), this.path([
                new p(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79),
                new p(r.bounds.left + l * 0.16, r.bounds.top + l * 0.5549),
                new p(r.bounds.left + l * 0.27347, r.bounds.top + l * 0.44071),
                new p(r.bounds.left + l * 0.39694, r.bounds.top + l * 0.5649),
                new p(r.bounds.left + l * 0.72983, r.bounds.top + l * 0.23),
                new p(r.bounds.left + l * 0.84, r.bounds.top + l * 0.34085),
                new p(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79)
              ]), this.ctx.fillStyle = BA(us), this.ctx.fill(), this.ctx.restore()) : r.type === Gt && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + l / 2, r.bounds.top + l / 2, l / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = BA(us), this.ctx.fill(), this.ctx.restore())), vf(r) && r.value.length) {
                switch (u = this.createFontStyle(s), E = u[0], F = u[1], Q = this.fontMetrics.getMetrics(E, F).baseline, this.ctx.font = E, this.ctx.fillStyle = BA(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = If(r.styles.textAlign), D = Xt(r), w = 0, r.styles.textAlign) {
                  case 1:
                    w += D.width / 2;
                    break;
                  case 2:
                    w += D.width;
                    break;
                }
                x = D.add(w, 0, 0, -D.height / 2 + 1), this.ctx.save(), this.path([
                  new p(D.left, D.top),
                  new p(D.left + D.width, D.top),
                  new p(D.left + D.width, D.top + D.height),
                  new p(D.left, D.top + D.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new We(r.value, x), s.letterSpacing, Q), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!tA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (d = r.styles.listStyleImage, d.type !== 0)
                return [3, 18];
              h = void 0, S = d.url, f.label = 15;
            case 15:
              return f.trys.push([15, 17, , 18]), [4, this.context.cache.match(S)];
            case 16:
              return h = f.sent(), this.ctx.drawImage(h, r.bounds.left - (h.width + 10), r.bounds.top), [3, 18];
            case 17:
              return f.sent(), this.context.logger.error("Error loading list-style-image " + S), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (E = this.createFontStyle(s)[0], this.ctx.font = E, this.ctx.fillStyle = BA(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", D = new zA(r.bounds.left, r.bounds.top + Y(r.styles.paddingTop, r.bounds.width), r.bounds.width, Zn(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new We(t.listValue, D), s.letterSpacing, Zn(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), f.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(t) {
      return hA(this, void 0, void 0, function() {
        var r, n, d, s, a, d, B, i, d, o, c, d, l, u, d, F, Q, d, w, x, d;
        return wA(this, function(h) {
          switch (h.label) {
            case 0:
              if (tA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              h.sent(), r = 0, n = t.negativeZIndex, h.label = 2;
            case 2:
              return r < n.length ? (d = n[r], [4, this.renderStack(d)]) : [3, 5];
            case 3:
              h.sent(), h.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              h.sent(), s = 0, a = t.nonInlineLevel, h.label = 7;
            case 7:
              return s < a.length ? (d = a[s], [4, this.renderNode(d)]) : [3, 10];
            case 8:
              h.sent(), h.label = 9;
            case 9:
              return s++, [3, 7];
            case 10:
              B = 0, i = t.nonPositionedFloats, h.label = 11;
            case 11:
              return B < i.length ? (d = i[B], [4, this.renderStack(d)]) : [3, 14];
            case 12:
              h.sent(), h.label = 13;
            case 13:
              return B++, [3, 11];
            case 14:
              o = 0, c = t.nonPositionedInlineLevel, h.label = 15;
            case 15:
              return o < c.length ? (d = c[o], [4, this.renderStack(d)]) : [3, 18];
            case 16:
              h.sent(), h.label = 17;
            case 17:
              return o++, [3, 15];
            case 18:
              l = 0, u = t.inlineLevel, h.label = 19;
            case 19:
              return l < u.length ? (d = u[l], [4, this.renderNode(d)]) : [3, 22];
            case 20:
              h.sent(), h.label = 21;
            case 21:
              return l++, [3, 19];
            case 22:
              F = 0, Q = t.zeroOrAutoZIndexOrTransformedOrOpacity, h.label = 23;
            case 23:
              return F < Q.length ? (d = Q[F], [4, this.renderStack(d)]) : [3, 26];
            case 24:
              h.sent(), h.label = 25;
            case 25:
              return F++, [3, 23];
            case 26:
              w = 0, x = t.positiveZIndex, h.label = 27;
            case 27:
              return w < x.length ? (d = x[w], [4, this.renderStack(d)]) : [3, 30];
            case 28:
              h.sent(), h.label = 29;
            case 29:
              return w++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, A.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, A.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(n, s) {
        var a = DA(n) ? n.start : n;
        s === 0 ? r.ctx.moveTo(a.x, a.y) : r.ctx.lineTo(a.x, a.y), DA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, A.prototype.renderRepeat = function(t, r, n, s) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, s), this.ctx.fill(), this.ctx.translate(-n, -s);
    }, A.prototype.resizeImage = function(t, r, n) {
      var s;
      if (t.width === r && t.height === n)
        return t;
      var a = (s = this.canvas.ownerDocument) !== null && s !== void 0 ? s : document, B = a.createElement("canvas");
      B.width = Math.max(1, r), B.height = Math.max(1, n);
      var i = B.getContext("2d");
      return i.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), B;
    }, A.prototype.renderBackgroundImage = function(t) {
      return hA(this, void 0, void 0, function() {
        var r, n, s, a, B, i;
        return wA(this, function(o) {
          switch (o.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var l, u, F, k, nA, sA, V, AA, K, Q, k, nA, sA, V, AA, w, x, d, h, S, E, D, f, O, K, b, k, j, z, V, AA, dA, nA, sA, KA, CA, LA, yA, OA, pA, EA, IA;
                return wA(this, function(GA) {
                  switch (GA.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      l = void 0, u = c.url, GA.label = 1;
                    case 1:
                      return GA.trys.push([1, 3, , 4]), [4, s.context.cache.match(u)];
                    case 2:
                      return l = GA.sent(), [3, 4];
                    case 3:
                      return GA.sent(), s.context.logger.error("Error loading background-image " + u), [3, 4];
                    case 4:
                      return l && (F = yr(t, r, [
                        l.width,
                        l.height,
                        l.width / l.height
                      ]), k = F[0], nA = F[1], sA = F[2], V = F[3], AA = F[4], K = s.ctx.createPattern(s.resizeImage(l, V, AA), "repeat"), s.renderRepeat(k, K, nA, sA)), [3, 6];
                    case 5:
                      cc(c) ? (Q = yr(t, r, [null, null, null]), k = Q[0], nA = Q[1], sA = Q[2], V = Q[3], AA = Q[4], w = sc(c.angle, V, AA), x = w[0], d = w[1], h = w[2], S = w[3], E = w[4], D = document.createElement("canvas"), D.width = V, D.height = AA, f = D.getContext("2d"), O = f.createLinearGradient(d, S, h, E), Yn(c.stops, x).forEach(function(VA) {
                        return O.addColorStop(VA.stop, BA(VA.color));
                      }), f.fillStyle = O, f.fillRect(0, 0, V, AA), V > 0 && AA > 0 && (K = s.ctx.createPattern(D, "repeat"), s.renderRepeat(k, K, nA, sA))) : lc(c) && (b = yr(t, r, [
                        null,
                        null,
                        null
                      ]), k = b[0], j = b[1], z = b[2], V = b[3], AA = b[4], dA = c.position.length === 0 ? [nn] : c.position, nA = Y(dA[0], V), sA = Y(dA[dA.length - 1], AA), KA = ac(c, nA, sA, V, AA), CA = KA[0], LA = KA[1], CA > 0 && LA > 0 && (yA = s.ctx.createRadialGradient(j + nA, z + sA, 0, j + nA, z + sA, CA), Yn(c.stops, CA * 2).forEach(function(VA) {
                        return yA.addColorStop(VA.stop, BA(VA.color));
                      }), s.path(k), s.ctx.fillStyle = yA, CA !== LA ? (OA = t.bounds.left + 0.5 * t.bounds.width, pA = t.bounds.top + 0.5 * t.bounds.height, EA = LA / CA, IA = 1 / EA, s.ctx.save(), s.ctx.translate(OA, pA), s.ctx.transform(1, 0, 0, EA, 0, 0), s.ctx.translate(-OA, -pA), s.ctx.fillRect(j, IA * (z - pA) + pA, V, AA * IA), s.ctx.restore()) : s.ctx.fill())), GA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, s = this, a = 0, B = t.styles.backgroundImage.slice(0).reverse(), o.label = 1;
            case 1:
              return a < B.length ? (i = B[a], [5, n(i)]) : [3, 4];
            case 2:
              o.sent(), o.label = 3;
            case 3:
              return a++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderSolidBorder = function(t, r, n) {
      return hA(this, void 0, void 0, function() {
        return wA(this, function(s) {
          return this.path(ms(n, r)), this.ctx.fillStyle = BA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, n, s) {
      return hA(this, void 0, void 0, function() {
        var a, B;
        return wA(this, function(i) {
          switch (i.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, s)] : [3, 2];
            case 1:
              return i.sent(), [
                2
                /*return*/
              ];
            case 2:
              return a = wf(s, n), this.path(a), this.ctx.fillStyle = BA(t), this.ctx.fill(), B = Qf(s, n), this.path(B), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return hA(this, void 0, void 0, function() {
        var r, n, s, a, B, i, o, c, l = this;
        return wA(this, function(u) {
          switch (u.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !se(r.backgroundColor) || r.backgroundImage.length, s = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], a = yf(Ee(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(a), this.ctx.clip(), se(r.backgroundColor) || (this.ctx.fillStyle = BA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(F) {
                l.ctx.save();
                var Q = Pt(t.curves), w = F.inset ? 0 : mf, x = ff(Q, -w + (F.inset ? 1 : -1) * F.spread.number, (F.inset ? 1 : -1) * F.spread.number, F.spread.number * (F.inset ? -2 : 2), F.spread.number * (F.inset ? -2 : 2));
                F.inset ? (l.path(Q), l.ctx.clip(), l.mask(x)) : (l.mask(Q), l.ctx.clip(), l.path(x)), l.ctx.shadowOffsetX = F.offsetX.number + w, l.ctx.shadowOffsetY = F.offsetY.number, l.ctx.shadowColor = BA(F.color), l.ctx.shadowBlur = F.blur.number, l.ctx.fillStyle = F.inset ? BA(F.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
              }), u.label = 2;
            case 2:
              B = 0, i = 0, o = s, u.label = 3;
            case 3:
              return i < o.length ? (c = o[i], c.style !== 0 && !se(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                B,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return u.sent(), [3, 11];
            case 5:
              return c.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                B,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return u.sent(), [3, 11];
            case 7:
              return c.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, B, t.curves)];
            case 8:
              return u.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(c.color, B, t.curves)];
            case 10:
              u.sent(), u.label = 11;
            case 11:
              B++, u.label = 12;
            case 12:
              return i++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderDashedDottedBorder = function(t, r, n, s, a) {
      return hA(this, void 0, void 0, function() {
        var B, i, o, c, l, u, F, Q, w, x, d, h, S, E, D, f, D, f;
        return wA(this, function(O) {
          return this.ctx.save(), B = Cf(s, n), i = ms(s, n), a === 2 && (this.path(i), this.ctx.clip()), DA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), DA(i[1]) ? (l = i[1].end.x, u = i[1].end.y) : (l = i[1].x, u = i[1].y), n === 0 || n === 2 ? F = Math.abs(o - l) : F = Math.abs(c - u), this.ctx.beginPath(), a === 3 ? this.formatPath(B) : this.formatPath(i.slice(0, 2)), Q = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, a === 3 && (Q = r, w = r), x = !0, F <= Q * 2 ? x = !1 : F <= Q * 2 + w ? (d = F / (2 * Q + w), Q *= d, w *= d) : (h = Math.floor((F + w) / (Q + w)), S = (F - h * Q) / (h - 1), E = (F - (h + 1) * Q) / h, w = E <= 0 || Math.abs(w - S) < Math.abs(w - E) ? S : E), x && (a === 3 ? this.ctx.setLineDash([0, Q + w]) : this.ctx.setLineDash([Q, w])), a === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = BA(t), this.ctx.stroke(), this.ctx.setLineDash([]), a === 2 && (DA(i[0]) && (D = i[3], f = i[0], this.ctx.beginPath(), this.formatPath([new p(D.end.x, D.end.y), new p(f.start.x, f.start.y)]), this.ctx.stroke()), DA(i[1]) && (D = i[1], f = i[2], this.ctx.beginPath(), this.formatPath([new p(D.end.x, D.end.y), new p(f.start.x, f.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return hA(this, void 0, void 0, function() {
        var r;
        return wA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = BA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = gf(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Ya)
), vf = function(e) {
  return e instanceof Ka || e instanceof ba ? !0 : e instanceof on && e.type !== Gt && e.type !== Rt;
}, yf = function(e, A) {
  switch (e) {
    case 0:
      return Pt(A);
    case 2:
      return Bf(A);
    case 1:
    default:
      return kt(A);
  }
}, If = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, bf = ["-apple-system", "system-ui"], Kf = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return bf.indexOf(A) === -1;
  }) : e;
}, Lf = (
  /** @class */
  function(e) {
    RA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return A.prototype.render = function(t) {
      return hA(this, void 0, void 0, function() {
        var r, n;
        return wA(this, function(s) {
          switch (s.label) {
            case 0:
              return r = Wr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, xf(r)];
            case 1:
              return n = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = BA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Ya)
), xf = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Df = (
  /** @class */
  function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, it([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, it([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, it([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, it([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  }()
), Tf = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Df({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new $u(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), Sf = function(e, A) {
  return A === void 0 && (A = {}), Of(e, A);
};
typeof window < "u" && Va.setContext(window);
var Of = function(e, A) {
  return hA(void 0, void 0, void 0, function() {
    var t, r, n, s, a, B, i, o, c, l, u, F, Q, w, x, d, h, S, E, D, O, f, O, K, b, k, j, z, V, AA, dA, nA, sA, KA, CA, LA, yA, OA, pA, EA;
    return wA(this, function(IA) {
      switch (IA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (K = A.allowTaint) !== null && K !== void 0 ? K : !1,
            imageTimeout: (b = A.imageTimeout) !== null && b !== void 0 ? b : 15e3,
            proxy: A.proxy,
            useCORS: (k = A.useCORS) !== null && k !== void 0 ? k : !1
          }, s = Dr({ logging: (j = A.logging) !== null && j !== void 0 ? j : !0, cache: A.cache }, n), a = {
            windowWidth: (z = A.windowWidth) !== null && z !== void 0 ? z : r.innerWidth,
            windowHeight: (V = A.windowHeight) !== null && V !== void 0 ? V : r.innerHeight,
            scrollX: (AA = A.scrollX) !== null && AA !== void 0 ? AA : r.pageXOffset,
            scrollY: (dA = A.scrollY) !== null && dA !== void 0 ? dA : r.pageYOffset
          }, B = new zA(a.scrollX, a.scrollY, a.windowWidth, a.windowHeight), i = new Tf(s, B), o = (nA = A.foreignObjectRendering) !== null && nA !== void 0 ? nA : !1, c = {
            allowTaint: (sA = A.allowTaint) !== null && sA !== void 0 ? sA : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + B.width + "x" + B.height + " scrolled to " + -B.left + "," + -B.top), l = new ds(i, e, c), u = l.clonedReferenceElement, u ? [4, l.toIFrame(t, B)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return F = IA.sent(), Q = cn(u) || Ou(u) ? li(u.ownerDocument) : Jt(i, u), w = Q.width, x = Q.height, d = Q.left, h = Q.top, S = Mf(i, u, A.backgroundColor), E = {
            canvas: A.canvas,
            backgroundColor: S,
            scale: (CA = (KA = A.scale) !== null && KA !== void 0 ? KA : r.devicePixelRatio) !== null && CA !== void 0 ? CA : 1,
            x: ((LA = A.x) !== null && LA !== void 0 ? LA : 0) + d,
            y: ((yA = A.y) !== null && yA !== void 0 ? yA : 0) + h,
            width: (OA = A.width) !== null && OA !== void 0 ? OA : Math.ceil(w),
            height: (pA = A.height) !== null && pA !== void 0 ? pA : Math.ceil(x)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), O = new Lf(i, E), [4, O.render(u)]) : [3, 3];
        case 2:
          return D = IA.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + d + "," + h + " with size " + w + "x" + x + " using computed rendering"), i.logger.debug("Starting DOM parsing"), f = Da(i, u), S === f.styles.backgroundColor && (f.styles.backgroundColor = jA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + E.x + "," + E.y + " with size " + E.width + "x" + E.height), O = new Hf(i, E), [4, O.render(f)];
        case 4:
          D = IA.sent(), IA.label = 5;
        case 5:
          return (!((EA = A.removeContainer) !== null && EA !== void 0) || EA) && (ds.destroy(F) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, D];
      }
    });
  });
}, Mf = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? Je(e, getComputedStyle(r.documentElement).backgroundColor) : jA.TRANSPARENT, s = r.body ? Je(e, getComputedStyle(r.body).backgroundColor) : jA.TRANSPARENT, a = typeof t == "string" ? Je(e, t) : t === null ? jA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? se(n) ? se(s) ? a : s : n : a;
};
const St = {
  pdf: "Download PDF",
  image: "Download Image",
  csv: "Download Data (CSV)",
  link: "Link to Dataset"
}, Nf = (e, A) => {
  const t = navigator.userAgent.match(/MSIE\s([\d.]+)/), r = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/), n = navigator.userAgent.match(/Edge/g);
  if ((t ? t[1] : r ? 11 : n ? 12 : -1) > -1) {
    const a = new Blob([e], {
      type: "image/png"
    });
    window.navigator.msSaveBlob(a, A);
  } else {
    const a = document.createElement("a");
    typeof a.download == "string" ? (a.href = e, a.download = A, a.onclick = (B) => document.body.removeChild(B.target), document.body.appendChild(a), a.click()) : window.open(e);
  }
}, Wa = (e, A, t) => {
  const r = document.querySelector(`[data-download-id=${t}]`), n = (B) => {
    var i, o;
    return (i = B == null ? void 0 : B.dashboard) != null && i.title ? B.dashboard.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : (o = B == null ? void 0 : B.general) != null && o.title ? B.general.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : B != null && B.title ? B.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : "no-title";
  }, s = /* @__PURE__ */ new Date(), a = n(e);
  switch (A) {
    case "image":
      Sf(r, { foreignObjectRendering: !0 }).then((B) => {
        Nf(B.toDataURL(), a + ".png");
      });
      return;
    case "pdf":
      console.warn("COVE: pdf downloads disabled");
      break;
    default:
      console.warn("COVE: generateMedia param 2 type must be 'image' or 'pdf'");
      break;
  }
}, Rf = (e) => e != null && e.headerColor ? e.headerColor : e != null && e.theme ? e.theme : "theme-notFound", Gf = ({ state: e, text: A, type: t, title: r, elementToCapture: n }) => {
  const s = ["btn", "btn-download", `${Rf(e)}`];
  return /* @__PURE__ */ g.createElement("button", { className: s.join(" "), title: r, onClick: () => Wa(e, t, n), style: { lineHeight: "1.4em" } }, St[t]);
}, Vf = ({ config: e, dashboardDataConfig: A }) => {
  var r;
  let t = A || e;
  return t.dataFileSourceType === "url" && t.dataFileName && e.table.showDownloadUrl ? /* @__PURE__ */ g.createElement("a", { href: t.dataFileName, title: St.link, target: "_blank" }, St.link) : (r = e == null ? void 0 : e.table) != null && r.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ g.createElement("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank" }, St.link) : null;
}, _f = ({ children: e, classes: A }) => /* @__PURE__ */ g.createElement("section", { className: A.join(" ") }, /* @__PURE__ */ g.createElement("span", null, e)), ye = () => null;
ye.Section = _f;
ye.Link = Vf;
ye.Button = Gf;
ye.generateMedia = Wa;
const Pf = (e) => /* @__PURE__ */ HA.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ HA.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" }));
function vs({ fill: e, borderColor: A }) {
  const t = {
    marginRight: "5px",
    borderRadius: "300px",
    verticalAlign: "middle",
    display: "inline-block",
    height: "1em",
    width: "1em",
    border: A ? `${A}  1px solid` : "rgba(0,0,0,.3) 1px solid",
    backgroundColor: e
  };
  return /* @__PURE__ */ g.createElement("span", { className: "legend-item", style: t });
}
function kf(e = void 0, A) {
  return Gs(e)(A);
}
function Ir(e = void 0, A) {
  return Vs(e)(A) || /* @__PURE__ */ new Date();
}
const ys = (e) => {
  let A = "", t = Math.abs(e);
  return t >= 1e9 ? (A = "B", e = e / 1e9) : t >= 1e6 ? (A = "M", e = e / 1e6) : t >= 1e3 && (A = "K", e = e / 1e3), e + A;
}, Is = (e, A, t = !1, r = null, n = null) => {
  if (r || console.error("no config found in formatNumber"), isNaN(e) || !e)
    return e;
  const s = e < 0;
  s && (e = Math.abs(e));
  let {
    dataFormat: { commas: a, abbreviated: B, roundTo: i, prefix: o, suffix: c, rightRoundTo: l, bottomRoundTo: u, rightPrefix: F, rightSuffix: Q, bottomPrefix: w, bottomSuffix: x, bottomAbbreviated: d }
  } = r;
  const { addColCommas: h, addColRoundTo: S, addColPrefix: E, addColSuffix: D } = n;
  String(e).indexOf(",") !== -1 && (e = e.replaceAll(",", ""));
  let f = e, O;
  if (A === "left") {
    let b;
    S !== void 0 ? b = S ? Number(S) : 0 : b = i ? Number(i) : 0, b < 0 && (b = 0);
    let k;
    h !== void 0 ? k = !!h : k = !!r.dataFormat.commas, O = {
      useGrouping: k,
      minimumFractionDigits: b,
      maximumFractionDigits: b
    };
  }
  if (A === "right" && (O = {
    useGrouping: !!r.dataFormat.rightCommas,
    minimumFractionDigits: l ? Number(l) : 0,
    maximumFractionDigits: l ? Number(l) : 0
  }), A === "bottom" && (O = {
    useGrouping: !!r.dataFormat.bottomCommas,
    minimumFractionDigits: u ? Number(u) : 0,
    maximumFractionDigits: u ? Number(u) : 0
  }), e = wn(e), isNaN(e))
    return r.runtime.editorErrorMessage = `Unable to parse number from data ${f}. Try reviewing your data and selections in the Data Series section.`, f;
  if (!r.dataFormat)
    return e;
  if (r.dataCutoff) {
    let b = wn(r.dataCutoff);
    e < b && (e = b);
  }
  A === "left" && a && B && t || A === "bottom" && a && B && t ? e = e : e = e.toLocaleString("en-US", O);
  let K = "";
  return B && A === "left" && t && (e = ys(parseFloat(e))), d && A === "bottom" && t && (e = ys(parseFloat(e))), E !== void 0 && A === "left" ? K = E + K : o && A === "left" && (K = o + K), F && A === "right" && (K += F), w && A === "bottom" && (K += w), K += e, D !== void 0 && A === "left" ? K += D : c && A === "left" && (K += c), Q && A === "right" && (K += Q), x && A === "bottom" && (K += x), s && (K = "-" + K), String(K);
}, ig = (e = "medium") => ({ small: 16, medium: 18, large: 20 })[e], og = (e) => {
  var fA, gA, _A, Ke;
  const { config: A, dataConfig: t, tableTitle: r, indexTitle: n, vizTitle: s, rawData: a, runtimeData: B, headerColor: i, colorScale: o, expandDataTable: c, columns: l, displayDataAsText: u, applyLegendToRow: F, displayGeoName: Q, navigationHandler: w, viewport: x, formatLegendLocation: d, tabbingId: h, isDebug: S } = e;
  S && (console.log("core/DataTable: props=", e), console.log("core/DataTable: runtimeData=", B), console.log("core/DataTable: rawData=", a), console.log("core/DataTable: config=", A));
  const [E, D] = HA.useState(c), [f, O] = HA.useState({ column: A.type === "map" ? "geo" : "date", asc: !1, colIndex: null }), [K, b] = HA.useState(""), k = `${s || "data-table"}.csv`, j = !(A.type === "chart" && !((fA = A.table) != null && fA.showVertical)), z = (L, H) => {
    var MA;
    let C = L, T = H;
    C = C === !1 || C === !0 || C === null ? "" : C, T = T === !1 || T == !0 || T === null ? "" : T;
    const y = String(C).trim(), I = String(T).trim();
    if (((MA = A.xAxis) == null ? void 0 : MA.dataKey) === f.column && A.xAxis.type === "date") {
      let aA = Ir(A.xAxis.dateParseFormat, y), PA = Ir(A.xAxis.dateParseFormat, I);
      return aA && aA.getTime && (aA = aA.getTime()), PA && PA.getTime && (PA = PA.getTime()), f.asc ? PA - aA : aA - PA;
    }
    const M = !isNaN(Number(C)) && C !== void 0 && C !== null && y !== "", W = !isNaN(Number(T)) && T !== void 0 && T !== null && I !== "";
    return y === "" && I !== "" ? f.asc ? 1 : -1 : y !== "" && I === "" ? f.asc ? -1 : 1 : M && W ? f.asc ? Number(T) - Number(C) : Number(C) - Number(T) : M ? f.asc ? 1 : -1 : W ? f.asc ? -1 : 1 : f.asc ? I.localeCompare(y) : y.localeCompare(I);
  }, V = (L, H) => (l.navigate && H[l.navigate.name] && (L = /* @__PURE__ */ g.createElement(
    "span",
    {
      onClick: () => w(H[l.navigate.name]),
      className: "table-link",
      title: "Click for more information (Opens in a new window)",
      role: "link",
      tabIndex: "0",
      onKeyDown: (C) => {
        C.keyCode === 13 && w(H[l.navigate.name]);
      }
    },
    L,
    /* @__PURE__ */ g.createElement(Pf, { className: "inline-icon" })
  )), L), dA = `btn__${Math.random().toString(16).substr(2, 8)}`, nA = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  }, sA = HA.memo(() => {
    var L;
    if (a !== void 0) {
      let H;
      ((L = A.general) == null ? void 0 : L.geoType) === "us-county" ? H = ln.unparse(a.map((y) => ({ FullGeoName: d(y[A.columns.geo.name]), ...y }))) : H = ln.unparse(a);
      const C = new Blob([H], { type: "text/csv;charset=utf-8;" }), T = () => {
        typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(C, k);
      };
      return /* @__PURE__ */ g.createElement("a", { download: k, type: "button", onClick: T, href: URL.createObjectURL(C), "aria-label": "Download this data in a CSV file format.", className: `${i} no-border`, id: `${dA}`, "data-html2canvas-ignore": !0, role: "button" }, "Download Data (CSV)");
    } else
      return /* @__PURE__ */ g.createElement(g.Fragment, null);
  }, [a]);
  switch (HA.useEffect(() => {
    const L = "Accessible data table.", H = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    E === !0 && K !== L && b(L), E === !1 && K !== H && b(H);
  }, [E]), A.visualizationType) {
    case "Box Plot":
      if (!A.boxplot)
        return /* @__PURE__ */ g.createElement(rr, null);
      break;
    case "Line":
      if (!B)
        return /* @__PURE__ */ g.createElement(rr, null);
      break;
    default:
      if (!B)
        return /* @__PURE__ */ g.createElement(rr, null);
      break;
  }
  const KA = Object.keys(B), CA = j ? KA.sort((L, H) => {
    let C = 0;
    return A.type === "map" && A.columns && (C = z(B[L][A.columns[f.column].name], B[H][A.columns[f.column].name])), (A.type === "chart" || A.type === "dashboard") && (C = z(B[L][f.column], B[H][f.column])), C;
  }) : KA, LA = (L) => L.map((C) => /* @__PURE__ */ g.createElement("tr", { role: "row" }, Object.keys(l).filter((T) => l[T].dataTable === !0 && l[T].name).map((T) => {
    let y;
    if (T === "geo") {
      const M = B[C], W = F(M);
      var I;
      A.general.geoType !== "single-state" && A.general.geoType !== "us-county" || A.general.type === "us-geocode" ? I = Q(C) : I = d(C), I = V(I, M), y = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(vs, { fill: W[0] }), I);
    } else {
      let M = "";
      if (A.legend.specialClasses && A.legend.specialClasses.length && typeof A.legend.specialClasses[0] == "object")
        for (let W = 0; W < A.legend.specialClasses.length; W++)
          A.legend.specialClasses[W].key === A.columns[T].name && String(B[C][A.legend.specialClasses[W].key]) === A.legend.specialClasses[W].value && (M = A.legend.specialClasses[W].label);
      y = u(M || B[C][A.columns[T].name], T);
    }
    return /* @__PURE__ */ g.createElement("td", { tabIndex: "0", role: "gridcell", onClick: (M) => A.general.type === "bubble" && A.general.allowMapZoom && A.general.geoType === "world" ? setFilteredCountryCode(C) : !0 }, y);
  }))), yA = () => {
    var H, C, T, y;
    let L;
    return A.visualizationType !== "Pie" ? (L = j ? [(H = A.xAxis) == null ? void 0 : H.dataKey] : [], A.series ? A.series.forEach((I) => {
      L.push(I.dataKey);
    }) : B && B.length > 0 && (L = Object.keys(B[0]))) : L = j ? [(C = A.xAxis) == null ? void 0 : C.dataKey, (T = A.yAxis) == null ? void 0 : T.dataKey] : [(y = A.yAxis) == null ? void 0 : y.dataKey], A.columns && Object.keys(A.columns).length > 0 && Object.keys(A.columns).forEach(function(I) {
      var W;
      var M = A.columns[I];
      M.name !== ((W = A.xAxis) == null ? void 0 : W.dataKey) && M.dataTable === !0 && L.push(M.name);
    }), L;
  }, OA = () => yA().sort((L, H) => {
    if (f.column === "__series__")
      return z(L, H);
    let C = B.find((y) => {
      var I;
      return y[(I = A.xAxis) == null ? void 0 : I.dataKey] === f.column;
    });
    const T = B[f.colIndex - 1];
    if (C)
      return z(C[L], C[H]);
    if (C === void 0 && T)
      return z(T[L], T[H]);
  }), pA = (L) => {
    let H = "";
    if (A.columns && Object.keys(A.columns).length > 0)
      return Object.keys(A.columns).forEach(function(C) {
        var T = A.columns[C];
        T.name === L && (H = T.label);
      }), H;
  }, EA = (L) => {
    var y, I, M;
    let H = A.series ? (I = (y = A.series.filter((W) => W.dataKey === L)) == null ? void 0 : y[0]) == null ? void 0 : I.name : "";
    if (H)
      return H;
    if (A.runtimeSeriesLabels && A.runtimeSeriesLabels[L])
      return A.runtimeSeriesLabels[L];
    let C = pA(L) ? pA(L) : L;
    return L === ((M = A.xAxis) == null ? void 0 : M.dataKey) ? A.table.indexLabel : C;
  }, IA = (L, H) => {
    if (H) {
      if (j)
        return /* @__PURE__ */ g.createElement("tr", null, yA().map((C, T) => {
          const y = EA(C);
          return /* @__PURE__ */ g.createElement(
            "th",
            {
              key: `col-header-${C}__${T}`,
              tabIndex: "0",
              title: y,
              role: "columnheader",
              scope: "col",
              onClick: () => {
                O({ column: C, asc: f.column === C ? !f.asc : !1, colIndex: T });
              },
              onKeyDown: (I) => {
                I.keyCode === 13 && (setColIndex(T), O({ column: C, asc: f.column === C ? !f.asc : !1, colIndex: T }));
              },
              className: f.column === C ? f.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
              ...f.column === C ? f.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
            },
            y,
            C === f.column && /* @__PURE__ */ g.createElement("span", { className: "sort-icon" }, f.asc ? R : N),
            /* @__PURE__ */ g.createElement("button", null, /* @__PURE__ */ g.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${y} in ${f.column === C && f.asc ? "ascending" : "descending"} `, " order"))
          );
        }));
      {
        const C = A.visualizationType === "Pie" ? 1 : 0;
        return /* @__PURE__ */ g.createElement("tr", null, ["__series__", ...Object.keys(B)].slice(C).map((T, y) => {
          var W;
          let I = (W = A.xAxis) == null ? void 0 : W.dataKey, M = T !== "__series__" ? VA(T, I) : "__series__";
          return /* @__PURE__ */ g.createElement(
            "th",
            {
              key: `col-header-${M}__${y}`,
              tabIndex: "0",
              title: M,
              role: "columnheader",
              scope: "col",
              onClick: () => {
                O({ column: M, asc: f.column === M ? !f.asc : !1, colIndex: y });
              },
              onKeyDown: (MA) => {
                MA.keyCode === 13 && O({ column: M, asc: f.column === M ? !f.asc : !1, colIndex: y });
              },
              className: f.column === M ? f.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
              ...f.column === M ? f.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
            },
            M === "__series__" ? "" : M,
            y === f.colIndex && /* @__PURE__ */ g.createElement("span", { className: "sort-icon" }, f.asc ? R : N),
            /* @__PURE__ */ g.createElement("button", null, /* @__PURE__ */ g.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${M} in ${f.column === M && f.asc ? "ascending" : "descending"} `, " order"))
          );
        }));
      }
    }
  }, GA = (L) => {
    let H = {};
    return A.columns && Object.keys(A.columns).forEach((C) => {
      A.columns[C].name === L && (H = {
        addColPrefix: A.columns[C].prefix,
        addColSuffix: A.columns[C].suffix,
        addColRoundTo: A.columns[C].roundToPlace ? A.columns[C].roundToPlace : "",
        addColCommas: A.columns[C].commas
      });
    }), H;
  }, VA = (L, H) => {
    var I, M, W, MA;
    const C = B[L];
    let T, y = C[H];
    if (H === ((I = A.xAxis) == null ? void 0 : I.dataKey))
      T = ((M = A.xAxis) == null ? void 0 : M.type) === "date" ? kf((W = A.xAxis) == null ? void 0 : W.dateDisplayFormat, Ir((MA = A.xAxis) == null ? void 0 : MA.dateParseFormat, y)) : y;
    else {
      let aA = "left", PA = A.series ? A.series.filter((UA) => (UA == null ? void 0 : UA.axis) === "Left") : [], tr = A.series ? A.series.filter((UA) => (UA == null ? void 0 : UA.axis) === "Right") : [];
      PA.map((UA) => {
        UA.dataKey === H && (aA = "left");
      }), tr.map((UA) => {
        UA.dataKey === H && (aA = "right");
      });
      let Bt = GA(H);
      Bt ? T = A.dataFormat ? Is(B[L][H], aA, !1, A, Bt) : B[L][H] : T = A.dataFormat ? Is(B[L][H], aA, !1, A) : B[L][H];
    }
    return T;
  }, at = (L, H) => {
    var C, T;
    return /* @__PURE__ */ g.createElement("td", { tabIndex: "0", role: "gridcell", id: `${B[(T = (C = A.runtime) == null ? void 0 : C.originalXAxis) == null ? void 0 : T.dataKey]}--${L}` }, VA(L, H));
  }, v = (L) => j ? L.map((C, T) => /* @__PURE__ */ g.createElement("tr", { key: `${C}__${T}`, role: "row" }, yA().map((y) => at(C, y)))) : OA().map((C) => /* @__PURE__ */ g.createElement("tr", { role: "row" }, A.visualizationType !== "Pie" && /* @__PURE__ */ g.createElement("td", null, o && o(EA(C)) && /* @__PURE__ */ g.createElement(vs, { fill: o(EA(C)) }), EA(C)), L.map((T) => at(T, C)))), N = /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ g.createElement("path", { d: "M0 5l5-5 5 5z" })), R = /* @__PURE__ */ g.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ g.createElement("path", { d: "M0 0l5 5 5-5z" })), U = {
    maxHeight: A.table.limitHeight && `${A.table.height}px`,
    overflowY: "scroll",
    marginBottom: "33px"
  }, oA = HA.useMemo(() => A.type === "map" ? A.table.caption ? A.table.caption : `Data table showing data for the ${nA[A.general.geoType]} figure.` : A.table.caption ? A.table.caption : `Data table showing data for the ${A.type} figure.`, [A.table.caption]), X = HA.useMemo(
    () => {
      var L;
      return A.visualizationType === "Pie" ? [A.yAxis.dataKey] : A.visualizationType === "Box Plot" ? Object.entries(A.boxplot.tableData[0]) : (L = A.runtime) == null ? void 0 : L.seriesKeys;
    },
    [(gA = A.runtime) == null ? void 0 : gA.seriesKeys]
  );
  if (A.visualizationType !== "Box Plot") {
    const L = (H) => /* @__PURE__ */ g.createElement("tr", null, Object.keys(H).filter((C) => H[C].dataTable === !0 && H[C].name).map((C, T) => {
      var I;
      let y;
      return C !== "geo" ? y = H[C].label ? H[C].label : H[C].name : y = A.type === "map" ? n : (I = A.xAxis) == null ? void 0 : I.dataKey, A.type === "map" && (y === void 0 || y === "") && (y = "Location"), /* @__PURE__ */ g.createElement(
        "th",
        {
          key: `col-header-${C}__${T}`,
          id: C,
          tabIndex: "0",
          title: y,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            O({ column: C, asc: f.column === C ? !f.asc : !1 });
          },
          onKeyDown: (M) => {
            M.keyCode === 13 && O({ column: C, asc: f.column === C ? !f.asc : !1 });
          },
          className: f.column === C ? f.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
          ...f.column === C ? f.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        y,
        f.column === C && /* @__PURE__ */ g.createElement("span", { className: "sort-icon" }, f.asc ? R : N),
        /* @__PURE__ */ g.createElement("button", null, /* @__PURE__ */ g.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${y} in ${f.column === C && f.asc ? "ascending" : "descending"} `, " order"))
      );
    }));
    return /* @__PURE__ */ g.createElement(gn, { component: "DataTable" }, /* @__PURE__ */ g.createElement(ye.Section, { classes: ["download-links"] }, /* @__PURE__ */ g.createElement(ye.Link, { config: A, dashboardDataConfig: t }), (A.table.download || ((_A = A.general) == null ? void 0 : _A.showDownloadButton)) && /* @__PURE__ */ g.createElement(sA, null)), /* @__PURE__ */ g.createElement("section", { id: h.replace("#", ""), className: `data-table-container ${x}`, "aria-label": K }, /* @__PURE__ */ g.createElement("a", { id: "skip-nav", className: "cdcdataviz-sr-only-focusable", href: `#${dA}` }, "Skip Navigation or Skip to Content"), /* @__PURE__ */ g.createElement(
      "div",
      {
        className: E ? "data-table-heading" : "collapsed data-table-heading",
        onClick: () => {
          D(!E);
        },
        tabIndex: "0",
        onKeyDown: (H) => {
          H.keyCode === 13 && D(!E);
        }
      },
      /* @__PURE__ */ g.createElement(un, { display: E ? "minus" : "plus", base: !0 }),
      r
    ), /* @__PURE__ */ g.createElement("div", { className: "table-container", style: U }, /* @__PURE__ */ g.createElement("table", { height: E ? null : 0, role: "table", "aria-live": "assertive", className: `${E ? "data-table" : "data-table cdcdataviz-sr-only"}${j ? "" : " horizontal"}`, hidden: !E, "aria-rowcount": (Ke = A == null ? void 0 : A.data) != null && Ke.length ? A.data.length : "-1" }, /* @__PURE__ */ g.createElement("caption", { className: "cdcdataviz-sr-only" }, oA), /* @__PURE__ */ g.createElement("thead", { style: { position: "sticky", top: 0, zIndex: 999 } }, A.type === "map" ? L(l) : IA(l, B)), /* @__PURE__ */ g.createElement("tbody", null, A.type === "map" ? LA(CA) : v(CA))), A.regions && A.regions.length > 0 && A.visualizationType !== "Box Plot" ? /* @__PURE__ */ g.createElement("table", { className: "region-table data-table" }, /* @__PURE__ */ g.createElement("caption", { className: "visually-hidden" }, "Table of the highlighted regions in the visualization"), /* @__PURE__ */ g.createElement("thead", null, /* @__PURE__ */ g.createElement("tr", null, /* @__PURE__ */ g.createElement("th", null, "Region Name"), /* @__PURE__ */ g.createElement("th", null, "Start Date"), /* @__PURE__ */ g.createElement("th", null, "End Date"))), /* @__PURE__ */ g.createElement("tbody", null, A.regions.map((H, C) => A.visualizationType === "Box Plot" ? !1 : !Object.keys(H).includes("from") || !Object.keys(H).includes("to") ? null : /* @__PURE__ */ g.createElement("tr", { key: `row-${H.label}--${C}` }, /* @__PURE__ */ g.createElement("td", null, H.label), /* @__PURE__ */ g.createElement("td", null, H.from), /* @__PURE__ */ g.createElement("td", null, H.to))))) : "")));
  } else {
    const L = (y) => {
      let I = ["Measures", ...y];
      return /* @__PURE__ */ g.createElement("tr", null, I.map((M) => /* @__PURE__ */ g.createElement("th", { key: `col-header-${M}`, tabIndex: "0", title: M, role: "columnheader", scope: "col" }, M)));
    }, H = (y) => {
      let {
        boxplot: { labels: I }
      } = A;
      return {
        columnMean: I.mean,
        columnMax: I.maximum,
        columnMin: I.minimum,
        columnIqr: I.iqr,
        columnCategory: "Category",
        columnMedian: I.median,
        columnFirstQuartile: I.q1,
        columnThirdQuartile: I.q3,
        columnOutliers: I.outliers,
        values: I.values,
        columnTotal: I.total,
        columnSd: "Standard Deviation",
        nonOutlierValues: "Non Outliers",
        columnLowerBounds: I.lowerBounds,
        columnUpperBounds: I.upperBounds
      }[y];
    };
    let C = (y, I) => Number(y) === 0 ? !0 : Number(y) === 1 ? I.columnMax : Number(y) === 2 ? I.columnThirdQuartile : Number(y) === 3 ? I.columnMedian : Number(y) === 4 ? I.columnFirstQuartile : Number(y) === 5 ? I.columnMin : Number(y) === 6 ? I.columnTotal : Number(y) === 7 ? I.columnSd : Number(y) === 8 ? I.columnMean : Number(y) === 9 ? I.columnOutliers.length > 0 ? I.columnOutliers.toString() : "-" : Number(y) === 10 ? I.values.length > 0 ? I.values.toString() : "-" : /* @__PURE__ */ g.createElement("p", null, "-");
    const T = (y) => {
      let I = y.map((MA) => MA[0]), M = ["Measures", ...A.boxplot.categories];
      return I.map((MA, aA) => {
        if (aA === 0)
          return "";
        let PA = `row-Box-Plot--${aA}`;
        return /* @__PURE__ */ g.createElement("tr", { role: "row", key: `tbody__tr-${aA}`, className: PA }, M.map((tr, Bt) => {
          let UA;
          if (tr === "Measures") {
            let Za = aA > 0 ? H(MA) : "";
            UA = /* @__PURE__ */ g.createElement(g.Fragment, null, Za);
          } else
            UA = C(aA, A.boxplot.plots[Bt - 1]);
          return /* @__PURE__ */ g.createElement("td", { tabIndex: "0", key: `tbody__tr__td-${aA}`, className: "boxplot-td", role: "gridcell" }, UA);
        }));
      });
    };
    return /* @__PURE__ */ g.createElement(gn, { component: "DataTable" }, /* @__PURE__ */ g.createElement("section", { id: h.replace("#", ""), className: `data-table-container ${x}`, "aria-label": K }, /* @__PURE__ */ g.createElement("a", { id: "skip-nav", className: "cdcdataviz-sr-only-focusable", href: `#${dA}` }, "Skip Navigation or Skip to Content"), /* @__PURE__ */ g.createElement(
      "div",
      {
        className: E ? "data-table-heading" : "collapsed data-table-heading",
        onClick: () => {
          D(!E);
        },
        tabIndex: "0",
        onKeyDown: (y) => {
          y.keyCode === 13 && D(!E);
        }
      },
      /* @__PURE__ */ g.createElement(un, { display: E ? "minus" : "plus", base: !0 }),
      r
    ), /* @__PURE__ */ g.createElement("div", { className: "table-container", style: U }, /* @__PURE__ */ g.createElement("table", { height: E ? null : 0, role: "table", "aria-live": "assertive", className: E ? "data-table" : "data-table cdcdataviz-sr-only", hidden: !E, "aria-rowcount": "11" }, /* @__PURE__ */ g.createElement("caption", { className: "cdcdataviz-sr-only" }, oA), /* @__PURE__ */ g.createElement("thead", { style: { position: "sticky", top: 0, zIndex: 999 } }, L(A.boxplot.categories)), /* @__PURE__ */ g.createElement("tbody", null, T(X))))));
  }
};
function rt(e) {
  "@babel/helpers - typeof";
  return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A) {
    return typeof A;
  } : function(A) {
    return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
  }, rt(e);
}
function Xf(e, A) {
  if (rt(e) !== "object" || e === null)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, A || "default");
    if (rt(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (A === "string" ? String : Number)(e);
}
function Jf(e) {
  var A = Xf(e, "string");
  return rt(A) === "symbol" ? A : String(A);
}
function Yf(e, A, t) {
  return A = Jf(A), A in e ? Object.defineProperty(e, A, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[A] = t, e;
}
function bs(e, A) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    A && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ks(e) {
  for (var A = 1; A < arguments.length; A++) {
    var t = arguments[A] != null ? arguments[A] : {};
    A % 2 ? bs(Object(t), !0).forEach(function(r) {
      Yf(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : bs(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function mA(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Ls = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), br = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, xs = {
  INIT: "@@redux/INIT" + br(),
  REPLACE: "@@redux/REPLACE" + br(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + br();
  }
};
function Wf(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var A = e; Object.getPrototypeOf(A) !== null; )
    A = Object.getPrototypeOf(A);
  return Object.getPrototypeOf(e) === A;
}
function Zf(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  var A = typeof e;
  switch (A) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return A;
  }
  if (Array.isArray(e))
    return "array";
  if (qf(e))
    return "date";
  if (zf(e))
    return "error";
  var t = jf(e);
  switch (t) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return t;
  }
  return A.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function jf(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function zf(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function qf(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ie(e) {
  var A = typeof e;
  return process.env.NODE_ENV !== "production" && (A = Zf(e)), A;
}
function $f(e, A, t) {
  var r;
  if (typeof A == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? mA(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof A == "function" && typeof t > "u" && (t = A, A = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(process.env.NODE_ENV === "production" ? mA(1) : "Expected the enhancer to be a function. Instead, received: '" + ie(t) + "'");
    return t($f)(e, A);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? mA(2) : "Expected the root reducer to be a function. Instead, received: '" + ie(e) + "'");
  var n = e, s = A, a = [], B = a, i = !1;
  function o() {
    B === a && (B = a.slice());
  }
  function c() {
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? mA(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return s;
  }
  function l(w) {
    if (typeof w != "function")
      throw new Error(process.env.NODE_ENV === "production" ? mA(4) : "Expected the listener to be a function. Instead, received: '" + ie(w) + "'");
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? mA(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var x = !0;
    return o(), B.push(w), function() {
      if (x) {
        if (i)
          throw new Error(process.env.NODE_ENV === "production" ? mA(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        x = !1, o();
        var h = B.indexOf(w);
        B.splice(h, 1), a = null;
      }
    };
  }
  function u(w) {
    if (!Wf(w))
      throw new Error(process.env.NODE_ENV === "production" ? mA(7) : "Actions must be plain objects. Instead, the actual type was: '" + ie(w) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof w.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? mA(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? mA(9) : "Reducers may not dispatch actions.");
    try {
      i = !0, s = n(s, w);
    } finally {
      i = !1;
    }
    for (var x = a = B, d = 0; d < x.length; d++) {
      var h = x[d];
      h();
    }
    return w;
  }
  function F(w) {
    if (typeof w != "function")
      throw new Error(process.env.NODE_ENV === "production" ? mA(10) : "Expected the nextReducer to be a function. Instead, received: '" + ie(w));
    n = w, u({
      type: xs.REPLACE
    });
  }
  function Q() {
    var w, x = l;
    return w = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(h) {
        if (typeof h != "object" || h === null)
          throw new Error(process.env.NODE_ENV === "production" ? mA(11) : "Expected the observer to be an object. Instead, received: '" + ie(h) + "'");
        function S() {
          h.next && h.next(c());
        }
        S();
        var E = x(S);
        return {
          unsubscribe: E
        };
      }
    }, w[Ls] = function() {
      return this;
    }, w;
  }
  return u({
    type: xs.INIT
  }), r = {
    dispatch: u,
    subscribe: l,
    getState: c,
    replaceReducer: F
  }, r[Ls] = Q, r;
}
function Ds(e, A) {
  return function() {
    return A(e.apply(this, arguments));
  };
}
function cg(e, A) {
  if (typeof e == "function")
    return Ds(e, A);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? mA(16) : "bindActionCreators expected an object or a function, but instead received: '" + ie(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var t = {};
  for (var r in e) {
    var n = e[r];
    typeof n == "function" && (t[r] = Ds(n, A));
  }
  return t;
}
function Ag() {
  for (var e = arguments.length, A = new Array(e), t = 0; t < e; t++)
    A[t] = arguments[t];
  return A.length === 0 ? function(r) {
    return r;
  } : A.length === 1 ? A[0] : A.reduce(function(r, n) {
    return function() {
      return r(n.apply(void 0, arguments));
    };
  });
}
function lg() {
  for (var e = arguments.length, A = new Array(e), t = 0; t < e; t++)
    A[t] = arguments[t];
  return function(r) {
    return function() {
      var n = r.apply(void 0, arguments), s = function() {
        throw new Error(process.env.NODE_ENV === "production" ? mA(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: n.getState,
        dispatch: function() {
          return s.apply(void 0, arguments);
        }
      }, B = A.map(function(i) {
        return i(a);
      });
      return s = Ag.apply(void 0, B)(n.dispatch), Ks(Ks({}, n), {}, {
        dispatch: s
      });
    };
  };
}
const eg = (e) => /* @__PURE__ */ HA.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ HA.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), ug = ({ loadConfig: e, state: A, convertStateToConfig: t }) => {
  const [r, n] = HA.useState(!1), [s, a] = HA.useState({});
  HA.useEffect(() => {
    let i = A;
    A.type !== "dashboard" ? i = t() : i = JSON.parse(JSON.stringify(i));
    const o = JSON.stringify(i, void 0, 2);
    a(o);
  }, [A]);
  const B = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ g.createElement(fn, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ g.createElement(fn, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ g.createElement(eg, null)],
    "markup-include": ["Markup Include", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html", /* @__PURE__ */ g.createElement(ja, null)]
  };
  return A.type ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("a", { href: B[A.type][1], target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, B[A.type][2], /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("span", { className: "heading-3" }, "Get Help with ", B[A.type][0]), /* @__PURE__ */ g.createElement("p", null, "Examples and documentation"))), /* @__PURE__ */ g.createElement("div", { className: "advanced" }, /* @__PURE__ */ g.createElement("span", { className: "advanced-toggle-link", onClick: () => n(!r) }, /* @__PURE__ */ g.createElement("span", null, r ? "— " : "+ "), "Advanced Options"), r && /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("section", { className: "error-box py-2 px-3 my-2" }, /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ g.createElement("p", null, "This can cause serious errors in your visualization."))), /* @__PURE__ */ g.createElement("p", { className: "pb-2" }, "This tool displays the actual ", /* @__PURE__ */ g.createElement("acronym", { title: "JavaScript Object Notation" }, "JSON"), " configuration that is generated by this editor and allows you to edit properties directly and apply them."), /* @__PURE__ */ g.createElement("textarea", { value: s, onChange: (i) => a(i.target.value) }), /* @__PURE__ */ g.createElement("button", { className: "btn full-width", onClick: () => e(JSON.parse(s)) }, "Apply")))) : /* @__PURE__ */ g.createElement(g.Fragment, null);
};
export {
  ug as A,
  og as D,
  vs as L,
  ye as M,
  $f as a,
  cg as b,
  Ag as c,
  lg as d,
  Is as f,
  ig as g,
  Gs as t
};
