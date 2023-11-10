import { R as f, r as EA } from "./storybook-e61d95ab.es.js";
import { P as un } from "./storybook-7366772a.es.js";
import { I as fn, b as gn, c as za } from "./storybook-d6b8e24c.es.js";
import { L as rr, E as wn } from "./storybook-a0c99f4a.es.js";
import { u as Kr, a as Ss, t as Lr, b as Os, c as je, d as qa, e as ze, f as qe, g as $a, h as $e } from "./storybook-bedc547d.es.js";
import { n as Qn } from "./storybook-28c41e3d.es.js";
function nr(A) {
  if (0 <= A.y && A.y < 100) {
    var e = new Date(-1, A.m, A.d, A.H, A.M, A.S, A.L);
    return e.setFullYear(A.y), e;
  }
  return new Date(A.y, A.m, A.d, A.H, A.M, A.S, A.L);
}
function sr(A) {
  if (0 <= A.y && A.y < 100) {
    var e = new Date(Date.UTC(-1, A.m, A.d, A.H, A.M, A.S, A.L));
    return e.setUTCFullYear(A.y), e;
  }
  return new Date(Date.UTC(A.y, A.m, A.d, A.H, A.M, A.S, A.L));
}
function Le(A, e, t) {
  return { y: A, m: e, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function AB(A) {
  var e = A.dateTime, t = A.date, r = A.time, n = A.periods, s = A.days, a = A.shortDays, i = A.months, B = A.shortMonths, o = xe(n), c = De(n), l = xe(s), u = De(s), d = xe(a), w = De(a), g = xe(i), D = De(i), p = xe(B), F = De(B), O = {
    a: sA,
    A: SA,
    b: CA,
    B: HA,
    c: null,
    d: pn,
    e: pn,
    f: EB,
    g: DB,
    G: SB,
    H: FB,
    I: dB,
    j: pB,
    L: Ms,
    m: mB,
    M: HB,
    p: OA,
    q: vA,
    Q: Hn,
    s: vn,
    S: vB,
    u: yB,
    U: IB,
    V: bB,
    w: KB,
    W: LB,
    x: null,
    X: null,
    y: xB,
    Y: TB,
    Z: OB,
    "%": mn
  }, S = {
    a: yA,
    A: bA,
    b: fA,
    B: GA,
    c: null,
    d: En,
    e: En,
    f: GB,
    g: jB,
    G: qB,
    H: MB,
    I: NB,
    j: RB,
    L: Rs,
    m: VB,
    M: _B,
    p: YA,
    q: at,
    Q: Hn,
    s: vn,
    S: PB,
    u: kB,
    U: XB,
    V: JB,
    w: YB,
    W: WB,
    x: null,
    X: null,
    y: ZB,
    Y: zB,
    Z: $B,
    "%": mn
  }, m = {
    a: k,
    A: tA,
    b: j,
    B: R,
    c: z,
    d: Fn,
    e: Fn,
    f: QB,
    g: hn,
    G: Un,
    H: dn,
    I: dn,
    j: uB,
    L: wB,
    m: lB,
    M: fB,
    p: b,
    q: cB,
    Q: UB,
    s: hB,
    S: gB,
    u: sB,
    U: aB,
    V: BB,
    w: nB,
    W: iB,
    x: TA,
    X: AA,
    y: hn,
    Y: Un,
    Z: oB,
    "%": CB
  };
  O.x = h(t, O), O.X = h(r, O), O.c = h(e, O), S.x = h(t, S), S.X = h(r, S), S.c = h(e, S);
  function h(y, N) {
    return function(G) {
      var C = [], oA = -1, X = 0, UA = y.length, gA, VA, Ke;
      for (G instanceof Date || (G = /* @__PURE__ */ new Date(+G)); ++oA < UA; )
        y.charCodeAt(oA) === 37 && (C.push(y.slice(X, oA)), (VA = Cn[gA = y.charAt(++oA)]) != null ? gA = y.charAt(++oA) : VA = gA === "e" ? " " : "0", (Ke = N[gA]) && (gA = Ke(G, VA)), C.push(gA), X = oA + 1);
      return C.push(y.slice(X, oA)), C.join("");
    };
  }
  function Q(y, N) {
    return function(G) {
      var C = Le(1900, void 0, 1), oA = L(C, y, G += "", 0), X, UA;
      if (oA != G.length)
        return null;
      if ("Q" in C)
        return new Date(C.Q);
      if ("s" in C)
        return new Date(C.s * 1e3 + ("L" in C ? C.L : 0));
      if (N && !("Z" in C) && (C.Z = 0), "p" in C && (C.H = C.H % 12 + C.p * 12), C.m === void 0 && (C.m = "q" in C ? C.q : 0), "V" in C) {
        if (C.V < 1 || C.V > 53)
          return null;
        "w" in C || (C.w = 1), "Z" in C ? (X = sr(Le(C.y, 0, 1)), UA = X.getUTCDay(), X = UA > 4 || UA === 0 ? Kr.ceil(X) : Kr(X), X = Ss.offset(X, (C.V - 1) * 7), C.y = X.getUTCFullYear(), C.m = X.getUTCMonth(), C.d = X.getUTCDate() + (C.w + 6) % 7) : (X = nr(Le(C.y, 0, 1)), UA = X.getDay(), X = UA > 4 || UA === 0 ? Lr.ceil(X) : Lr(X), X = Os.offset(X, (C.V - 1) * 7), C.y = X.getFullYear(), C.m = X.getMonth(), C.d = X.getDate() + (C.w + 6) % 7);
      } else
        ("W" in C || "U" in C) && ("w" in C || (C.w = "u" in C ? C.u % 7 : "W" in C ? 1 : 0), UA = "Z" in C ? sr(Le(C.y, 0, 1)).getUTCDay() : nr(Le(C.y, 0, 1)).getDay(), C.m = 0, C.d = "W" in C ? (C.w + 6) % 7 + C.W * 7 - (UA + 5) % 7 : C.w + C.U * 7 - (UA + 6) % 7);
      return "Z" in C ? (C.H += C.Z / 100 | 0, C.M += C.Z % 100, sr(C)) : nr(C);
    };
  }
  function L(y, N, G, C) {
    for (var oA = 0, X = N.length, UA = G.length, gA, VA; oA < X; ) {
      if (C >= UA)
        return -1;
      if (gA = N.charCodeAt(oA++), gA === 37) {
        if (gA = N.charAt(oA++), VA = m[gA in Cn ? N.charAt(oA++) : gA], !VA || (C = VA(y, G, C)) < 0)
          return -1;
      } else if (gA != G.charCodeAt(C++))
        return -1;
    }
    return C;
  }
  function b(y, N, G) {
    var C = o.exec(N.slice(G));
    return C ? (y.p = c.get(C[0].toLowerCase()), G + C[0].length) : -1;
  }
  function k(y, N, G) {
    var C = d.exec(N.slice(G));
    return C ? (y.w = w.get(C[0].toLowerCase()), G + C[0].length) : -1;
  }
  function tA(y, N, G) {
    var C = l.exec(N.slice(G));
    return C ? (y.w = u.get(C[0].toLowerCase()), G + C[0].length) : -1;
  }
  function j(y, N, G) {
    var C = p.exec(N.slice(G));
    return C ? (y.m = F.get(C[0].toLowerCase()), G + C[0].length) : -1;
  }
  function R(y, N, G) {
    var C = g.exec(N.slice(G));
    return C ? (y.m = D.get(C[0].toLowerCase()), G + C[0].length) : -1;
  }
  function z(y, N, G) {
    return L(y, e, N, G);
  }
  function TA(y, N, G) {
    return L(y, t, N, G);
  }
  function AA(y, N, G) {
    return L(y, r, N, G);
  }
  function sA(y) {
    return a[y.getDay()];
  }
  function SA(y) {
    return s[y.getDay()];
  }
  function CA(y) {
    return B[y.getMonth()];
  }
  function HA(y) {
    return i[y.getMonth()];
  }
  function OA(y) {
    return n[+(y.getHours() >= 12)];
  }
  function vA(y) {
    return 1 + ~~(y.getMonth() / 3);
  }
  function yA(y) {
    return a[y.getUTCDay()];
  }
  function bA(y) {
    return s[y.getUTCDay()];
  }
  function fA(y) {
    return B[y.getUTCMonth()];
  }
  function GA(y) {
    return i[y.getUTCMonth()];
  }
  function YA(y) {
    return n[+(y.getUTCHours() >= 12)];
  }
  function at(y) {
    return 1 + ~~(y.getUTCMonth() / 3);
  }
  return {
    format: function(y) {
      var N = h(y += "", O);
      return N.toString = function() {
        return y;
      }, N;
    },
    parse: function(y) {
      var N = Q(y += "", !1);
      return N.toString = function() {
        return y;
      }, N;
    },
    utcFormat: function(y) {
      var N = h(y += "", S);
      return N.toString = function() {
        return y;
      }, N;
    },
    utcParse: function(y) {
      var N = Q(y += "", !0);
      return N.toString = function() {
        return y;
      }, N;
    }
  };
}
var Cn = { "-": "", _: " ", 0: "0" }, iA = /^\s*\d+/, eB = /^%/, tB = /[\\^$*+?|[\]().{}]/g;
function _(A, e, t) {
  var r = A < 0 ? "-" : "", n = (r ? -A : A) + "", s = n.length;
  return r + (s < t ? new Array(t - s + 1).join(e) + n : n);
}
function rB(A) {
  return A.replace(tB, "\\$&");
}
function xe(A) {
  return new RegExp("^(?:" + A.map(rB).join("|") + ")", "i");
}
function De(A) {
  return new Map(A.map((e, t) => [e.toLowerCase(), t]));
}
function nB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 1));
  return r ? (A.w = +r[0], t + r[0].length) : -1;
}
function sB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 1));
  return r ? (A.u = +r[0], t + r[0].length) : -1;
}
function aB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 2));
  return r ? (A.U = +r[0], t + r[0].length) : -1;
}
function BB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 2));
  return r ? (A.V = +r[0], t + r[0].length) : -1;
}
function iB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 2));
  return r ? (A.W = +r[0], t + r[0].length) : -1;
}
function Un(A, e, t) {
  var r = iA.exec(e.slice(t, t + 4));
  return r ? (A.y = +r[0], t + r[0].length) : -1;
}
function hn(A, e, t) {
  var r = iA.exec(e.slice(t, t + 2));
  return r ? (A.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), t + r[0].length) : -1;
}
function oB(A, e, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(t, t + 6));
  return r ? (A.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function cB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 1));
  return r ? (A.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function lB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 2));
  return r ? (A.m = r[0] - 1, t + r[0].length) : -1;
}
function Fn(A, e, t) {
  var r = iA.exec(e.slice(t, t + 2));
  return r ? (A.d = +r[0], t + r[0].length) : -1;
}
function uB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 3));
  return r ? (A.m = 0, A.d = +r[0], t + r[0].length) : -1;
}
function dn(A, e, t) {
  var r = iA.exec(e.slice(t, t + 2));
  return r ? (A.H = +r[0], t + r[0].length) : -1;
}
function fB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 2));
  return r ? (A.M = +r[0], t + r[0].length) : -1;
}
function gB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 2));
  return r ? (A.S = +r[0], t + r[0].length) : -1;
}
function wB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 3));
  return r ? (A.L = +r[0], t + r[0].length) : -1;
}
function QB(A, e, t) {
  var r = iA.exec(e.slice(t, t + 6));
  return r ? (A.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function CB(A, e, t) {
  var r = eB.exec(e.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function UB(A, e, t) {
  var r = iA.exec(e.slice(t));
  return r ? (A.Q = +r[0], t + r[0].length) : -1;
}
function hB(A, e, t) {
  var r = iA.exec(e.slice(t));
  return r ? (A.s = +r[0], t + r[0].length) : -1;
}
function pn(A, e) {
  return _(A.getDate(), e, 2);
}
function FB(A, e) {
  return _(A.getHours(), e, 2);
}
function dB(A, e) {
  return _(A.getHours() % 12 || 12, e, 2);
}
function pB(A, e) {
  return _(1 + Os.count(je(A), A), e, 3);
}
function Ms(A, e) {
  return _(A.getMilliseconds(), e, 3);
}
function EB(A, e) {
  return Ms(A, e) + "000";
}
function mB(A, e) {
  return _(A.getMonth() + 1, e, 2);
}
function HB(A, e) {
  return _(A.getMinutes(), e, 2);
}
function vB(A, e) {
  return _(A.getSeconds(), e, 2);
}
function yB(A) {
  var e = A.getDay();
  return e === 0 ? 7 : e;
}
function IB(A, e) {
  return _(qa.count(je(A) - 1, A), e, 2);
}
function Ns(A) {
  var e = A.getDay();
  return e >= 4 || e === 0 ? ze(A) : ze.ceil(A);
}
function bB(A, e) {
  return A = Ns(A), _(ze.count(je(A), A) + (je(A).getDay() === 4), e, 2);
}
function KB(A) {
  return A.getDay();
}
function LB(A, e) {
  return _(Lr.count(je(A) - 1, A), e, 2);
}
function xB(A, e) {
  return _(A.getFullYear() % 100, e, 2);
}
function DB(A, e) {
  return A = Ns(A), _(A.getFullYear() % 100, e, 2);
}
function TB(A, e) {
  return _(A.getFullYear() % 1e4, e, 4);
}
function SB(A, e) {
  var t = A.getDay();
  return A = t >= 4 || t === 0 ? ze(A) : ze.ceil(A), _(A.getFullYear() % 1e4, e, 4);
}
function OB(A) {
  var e = A.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + _(e / 60 | 0, "0", 2) + _(e % 60, "0", 2);
}
function En(A, e) {
  return _(A.getUTCDate(), e, 2);
}
function MB(A, e) {
  return _(A.getUTCHours(), e, 2);
}
function NB(A, e) {
  return _(A.getUTCHours() % 12 || 12, e, 2);
}
function RB(A, e) {
  return _(1 + Ss.count(qe(A), A), e, 3);
}
function Rs(A, e) {
  return _(A.getUTCMilliseconds(), e, 3);
}
function GB(A, e) {
  return Rs(A, e) + "000";
}
function VB(A, e) {
  return _(A.getUTCMonth() + 1, e, 2);
}
function _B(A, e) {
  return _(A.getUTCMinutes(), e, 2);
}
function PB(A, e) {
  return _(A.getUTCSeconds(), e, 2);
}
function kB(A) {
  var e = A.getUTCDay();
  return e === 0 ? 7 : e;
}
function XB(A, e) {
  return _($a.count(qe(A) - 1, A), e, 2);
}
function Gs(A) {
  var e = A.getUTCDay();
  return e >= 4 || e === 0 ? $e(A) : $e.ceil(A);
}
function JB(A, e) {
  return A = Gs(A), _($e.count(qe(A), A) + (qe(A).getUTCDay() === 4), e, 2);
}
function YB(A) {
  return A.getUTCDay();
}
function WB(A, e) {
  return _(Kr.count(qe(A) - 1, A), e, 2);
}
function ZB(A, e) {
  return _(A.getUTCFullYear() % 100, e, 2);
}
function jB(A, e) {
  return A = Gs(A), _(A.getUTCFullYear() % 100, e, 2);
}
function zB(A, e) {
  return _(A.getUTCFullYear() % 1e4, e, 4);
}
function qB(A, e) {
  var t = A.getUTCDay();
  return A = t >= 4 || t === 0 ? $e(A) : $e.ceil(A), _(A.getUTCFullYear() % 1e4, e, 4);
}
function $B() {
  return "+0000";
}
function mn() {
  return "%";
}
function Hn(A) {
  return +A;
}
function vn(A) {
  return Math.floor(+A / 1e3);
}
var we, Vs, _s;
Ai({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Ai(A) {
  return we = AB(A), Vs = we.format, _s = we.parse, we.utcFormat, we.utcParse, we;
}
var lA = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, dA = {
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
function ei(A) {
  return A && DataView.prototype.isPrototypeOf(A);
}
if (dA.arrayBuffer)
  var ti = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], ri = ArrayBuffer.isView || function(A) {
    return A && ti.indexOf(Object.prototype.toString.call(A)) > -1;
  };
function Ie(A) {
  if (typeof A != "string" && (A = String(A)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(A) || A === "")
    throw new TypeError('Invalid character in header field name: "' + A + '"');
  return A.toLowerCase();
}
function en(A) {
  return typeof A != "string" && (A = String(A)), A;
}
function tn(A) {
  var e = {
    next: function() {
      var t = A.shift();
      return { done: t === void 0, value: t };
    }
  };
  return dA.iterable && (e[Symbol.iterator] = function() {
    return e;
  }), e;
}
function nA(A) {
  this.map = {}, A instanceof nA ? A.forEach(function(e, t) {
    this.append(t, e);
  }, this) : Array.isArray(A) ? A.forEach(function(e) {
    if (e.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + e.length);
    this.append(e[0], e[1]);
  }, this) : A && Object.getOwnPropertyNames(A).forEach(function(e) {
    this.append(e, A[e]);
  }, this);
}
nA.prototype.append = function(A, e) {
  A = Ie(A), e = en(e);
  var t = this.map[A];
  this.map[A] = t ? t + ", " + e : e;
};
nA.prototype.delete = function(A) {
  delete this.map[Ie(A)];
};
nA.prototype.get = function(A) {
  return A = Ie(A), this.has(A) ? this.map[A] : null;
};
nA.prototype.has = function(A) {
  return this.map.hasOwnProperty(Ie(A));
};
nA.prototype.set = function(A, e) {
  this.map[Ie(A)] = en(e);
};
nA.prototype.forEach = function(A, e) {
  for (var t in this.map)
    this.map.hasOwnProperty(t) && A.call(e, this.map[t], t, this);
};
nA.prototype.keys = function() {
  var A = [];
  return this.forEach(function(e, t) {
    A.push(t);
  }), tn(A);
};
nA.prototype.values = function() {
  var A = [];
  return this.forEach(function(e) {
    A.push(e);
  }), tn(A);
};
nA.prototype.entries = function() {
  var A = [];
  return this.forEach(function(e, t) {
    A.push([t, e]);
  }), tn(A);
};
dA.iterable && (nA.prototype[Symbol.iterator] = nA.prototype.entries);
function ar(A) {
  if (!A._noBody) {
    if (A.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    A.bodyUsed = !0;
  }
}
function Ps(A) {
  return new Promise(function(e, t) {
    A.onload = function() {
      e(A.result);
    }, A.onerror = function() {
      t(A.error);
    };
  });
}
function ni(A) {
  var e = new FileReader(), t = Ps(e);
  return e.readAsArrayBuffer(A), t;
}
function si(A) {
  var e = new FileReader(), t = Ps(e), r = /charset=([A-Za-z0-9_-]+)/.exec(A.type), n = r ? r[1] : "utf-8";
  return e.readAsText(A, n), t;
}
function ai(A) {
  for (var e = new Uint8Array(A), t = new Array(e.length), r = 0; r < e.length; r++)
    t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function yn(A) {
  if (A.slice)
    return A.slice(0);
  var e = new Uint8Array(A.byteLength);
  return e.set(new Uint8Array(A)), e.buffer;
}
function ks() {
  return this.bodyUsed = !1, this._initBody = function(A) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = A, A ? typeof A == "string" ? this._bodyText = A : dA.blob && Blob.prototype.isPrototypeOf(A) ? this._bodyBlob = A : dA.formData && FormData.prototype.isPrototypeOf(A) ? this._bodyFormData = A : dA.searchParams && URLSearchParams.prototype.isPrototypeOf(A) ? this._bodyText = A.toString() : dA.arrayBuffer && dA.blob && ei(A) ? (this._bodyArrayBuffer = yn(A.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : dA.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(A) || ri(A)) ? this._bodyArrayBuffer = yn(A) : this._bodyText = A = Object.prototype.toString.call(A) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof A == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : dA.searchParams && URLSearchParams.prototype.isPrototypeOf(A) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, dA.blob && (this.blob = function() {
    var A = ar(this);
    if (A)
      return A;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }), this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var A = ar(this);
      return A || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (dA.blob)
        return this.blob().then(ni);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var A = ar(this);
    if (A)
      return A;
    if (this._bodyBlob)
      return si(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(ai(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, dA.formData && (this.formData = function() {
    return this.text().then(oi);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var Bi = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function ii(A) {
  var e = A.toUpperCase();
  return Bi.indexOf(e) > -1 ? e : A;
}
function ge(A, e) {
  if (!(this instanceof ge))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  e = e || {};
  var t = e.body;
  if (A instanceof ge) {
    if (A.bodyUsed)
      throw new TypeError("Already read");
    this.url = A.url, this.credentials = A.credentials, e.headers || (this.headers = new nA(A.headers)), this.method = A.method, this.mode = A.mode, this.signal = A.signal, !t && A._bodyInit != null && (t = A._bodyInit, A.bodyUsed = !0);
  } else
    this.url = String(A);
  if (this.credentials = e.credentials || this.credentials || "same-origin", (e.headers || !this.headers) && (this.headers = new nA(e.headers)), this.method = ii(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal || function() {
    if ("AbortController" in lA) {
      var s = new AbortController();
      return s.signal;
    }
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && t)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(t), (this.method === "GET" || this.method === "HEAD") && (e.cache === "no-store" || e.cache === "no-cache")) {
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
function oi(A) {
  var e = new FormData();
  return A.trim().split("&").forEach(function(t) {
    if (t) {
      var r = t.split("="), n = r.shift().replace(/\+/g, " "), s = r.join("=").replace(/\+/g, " ");
      e.append(decodeURIComponent(n), decodeURIComponent(s));
    }
  }), e;
}
function ci(A) {
  var e = new nA(), t = A.replace(/\r?\n[\t ]+/g, " ");
  return t.split("\r").map(function(r) {
    return r.indexOf(`
`) === 0 ? r.substr(1, r.length) : r;
  }).forEach(function(r) {
    var n = r.split(":"), s = n.shift().trim();
    if (s) {
      var a = n.join(":").trim();
      try {
        e.append(s, a);
      } catch (i) {
        console.warn("Response " + i.message);
      }
    }
  }), e;
}
ks.call(ge.prototype);
function kA(A, e) {
  if (!(this instanceof kA))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (e || (e = {}), this.type = "default", this.status = e.status === void 0 ? 200 : e.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText === void 0 ? "" : "" + e.statusText, this.headers = new nA(e.headers), this.url = e.url || "", this._initBody(A);
}
ks.call(kA.prototype);
kA.prototype.clone = function() {
  return new kA(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new nA(this.headers),
    url: this.url
  });
};
kA.error = function() {
  var A = new kA(null, { status: 200, statusText: "" });
  return A.status = 0, A.type = "error", A;
};
var li = [301, 302, 303, 307, 308];
kA.redirect = function(A, e) {
  if (li.indexOf(e) === -1)
    throw new RangeError("Invalid status code");
  return new kA(null, { status: e, headers: { location: A } });
};
var oe = lA.DOMException;
try {
  new oe();
} catch {
  oe = function(e, t) {
    this.message = e, this.name = t;
    var r = Error(e);
    this.stack = r.stack;
  }, oe.prototype = Object.create(Error.prototype), oe.prototype.constructor = oe;
}
function Xs(A, e) {
  return new Promise(function(t, r) {
    var n = new ge(A, e);
    if (n.signal && n.signal.aborted)
      return r(new oe("Aborted", "AbortError"));
    var s = new XMLHttpRequest();
    function a() {
      s.abort();
    }
    s.onload = function() {
      var o = {
        statusText: s.statusText,
        headers: ci(s.getAllResponseHeaders() || "")
      };
      n.url.startsWith("file://") && (s.status < 200 || s.status > 599) ? o.status = 200 : o.status = s.status, o.url = "responseURL" in s ? s.responseURL : o.headers.get("X-Request-URL");
      var c = "response" in s ? s.response : s.responseText;
      setTimeout(function() {
        t(new kA(c, o));
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
    function i(o) {
      try {
        return o === "" && lA.location.href ? lA.location.href : o;
      } catch {
        return o;
      }
    }
    if (s.open(n.method, i(n.url), !0), n.credentials === "include" ? s.withCredentials = !0 : n.credentials === "omit" && (s.withCredentials = !1), "responseType" in s && (dA.blob ? s.responseType = "blob" : dA.arrayBuffer && (s.responseType = "arraybuffer")), e && typeof e.headers == "object" && !(e.headers instanceof nA || lA.Headers && e.headers instanceof lA.Headers)) {
      var B = [];
      Object.getOwnPropertyNames(e.headers).forEach(function(o) {
        B.push(Ie(o)), s.setRequestHeader(o, en(e.headers[o]));
      }), n.headers.forEach(function(o, c) {
        B.indexOf(c) === -1 && s.setRequestHeader(c, o);
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
Xs.polyfill = !0;
lA.fetch || (lA.fetch = Xs, lA.Headers = nA, lA.Request = ge, lA.Response = kA);
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
var xr = function(A, e) {
  return xr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, xr(A, e);
};
function RA(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  xr(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Dr = function() {
  return Dr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, Dr.apply(this, arguments);
};
function FA(A, e, t, r) {
  function n(s) {
    return s instanceof t ? s : new t(function(a) {
      a(s);
    });
  }
  return new (t || (t = Promise))(function(s, a) {
    function i(c) {
      try {
        o(r.next(c));
      } catch (l) {
        a(l);
      }
    }
    function B(c) {
      try {
        o(r.throw(c));
      } catch (l) {
        a(l);
      }
    }
    function o(c) {
      c.done ? s(c.value) : n(c.value).then(i, B);
    }
    o((r = r.apply(A, e || [])).next());
  });
}
function wA(A, e) {
  var t = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, n, s, a;
  return a = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function i(o) {
    return function(c) {
      return B([o, c]);
    };
  }
  function B(o) {
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
        o = e.call(A, t);
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
function it(A, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = e.length, s; r < n; r++)
      (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return A.concat(s || e);
}
var zA = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.left = e, this.top = t, this.width = r, this.height = n;
    }
    return A.prototype.add = function(e, t, r, n) {
      return new A(this.left + e, this.top + t, this.width + r, this.height + n);
    }, A.fromClientRect = function(e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function(e, t) {
      var r = Array.from(t).find(function(n) {
        return n.width !== 0;
      });
      return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  }()
), Jt = function(A, e) {
  return zA.fromClientRect(A, e.getBoundingClientRect());
}, ui = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new zA(0, 0, r, n);
}, Yt = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = A.charCodeAt(t++);
      (s & 64512) === 56320 ? e.push(((n & 1023) << 10) + (s & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, $ = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], n = -1, s = ""; ++n < t; ) {
    var a = A[n];
    a <= 65535 ? r.push(a) : (a -= 65536, r.push((a >> 10) + 55296, a % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, In = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ot = 0; ot < In.length; ot++)
  fi[In.charCodeAt(ot)] = ot;
var bn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ne = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ct = 0; ct < bn.length; ct++)
  Ne[bn.charCodeAt(ct)] = ct;
var gi = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, s, a, i, B;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    s = Ne[A.charCodeAt(r)], a = Ne[A.charCodeAt(r + 1)], i = Ne[A.charCodeAt(r + 2)], B = Ne[A.charCodeAt(r + 3)], c[n++] = s << 2 | a >> 4, c[n++] = (a & 15) << 4 | i >> 2, c[n++] = (i & 3) << 6 | B & 63;
  return o;
}, wi = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, Qi = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, ue = 5, rn = 6 + 5, Br = 2, Ci = rn - ue, Js = 65536 >> ue, Ui = 1 << ue, ir = Ui - 1, hi = 1024 >> ue, Fi = Js + hi, di = Fi, pi = 32, Ei = di + pi, mi = 65536 >> rn, Hi = 1 << Ci, vi = Hi - 1, Kn = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, yi = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, Ii = function(A, e) {
  var t = gi(A), r = Array.isArray(t) ? Qi(t) : new Uint32Array(t), n = Array.isArray(t) ? wi(t) : new Uint16Array(t), s = 24, a = Kn(n, s / 2, r[4] / 2), i = r[5] === 2 ? Kn(n, (s + r[4]) / 2) : yi(r, Math.ceil((s + r[4]) / 4));
  return new bi(r[0], r[1], r[2], r[3], a, i);
}, bi = (
  /** @class */
  function() {
    function A(e, t, r, n, s, a) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = a;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> ue], t = (t << Br) + (e & ir), this.data[t];
        if (e <= 65535)
          return t = this.index[Js + (e - 55296 >> ue)], t = (t << Br) + (e & ir), this.data[t];
        if (e < this.highStart)
          return t = Ei - mi + (e >> rn), t = this.index[t], t += e >> ue & vi, t = this.index[t], t = (t << Br) + (e & ir), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), Ln = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ki = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var lt = 0; lt < Ln.length; lt++)
  Ki[Ln.charCodeAt(lt)] = lt;
var Li = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", xn = 50, xi = 1, Ys = 2, Ws = 3, Di = 4, Ti = 5, Dn = 7, Zs = 8, Tn = 9, ee = 10, Tr = 11, Sn = 12, Sr = 13, Si = 14, Re = 15, Or = 16, ut = 17, Te = 18, Oi = 19, On = 20, Mr = 21, Se = 22, or = 23, Qe = 24, IA = 25, Ge = 26, Ve = 27, Ce = 28, Mi = 29, ce = 30, Ni = 31, ft = 32, gt = 33, Nr = 34, Rr = 35, Gr = 36, At = 37, Vr = 38, Lt = 39, xt = 40, cr = 41, js = 42, Ri = 43, Gi = [9001, 65288], zs = "!", V = "×", wt = "÷", _r = Ii(Li), WA = [ce, Gr], Pr = [xi, Ys, Ws, Ti], qs = [ee, Zs], Mn = [Ve, Ge], Vi = Pr.concat(qs), Nn = [Vr, Lt, xt, Nr, Rr], _i = [Re, Sr], Pi = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], n = [];
  return A.forEach(function(s, a) {
    var i = _r.get(s);
    if (i > xn ? (n.push(!0), i -= xn) : n.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(s) !== -1)
      return r.push(a), t.push(Or);
    if (i === Di || i === Tr) {
      if (a === 0)
        return r.push(a), t.push(ce);
      var B = t[a - 1];
      return Vi.indexOf(B) === -1 ? (r.push(r[a - 1]), t.push(B)) : (r.push(a), t.push(ce));
    }
    if (r.push(a), i === Ni)
      return t.push(e === "strict" ? Mr : At);
    if (i === js || i === Mi)
      return t.push(ce);
    if (i === Ri)
      return s >= 131072 && s <= 196605 || s >= 196608 && s <= 262141 ? t.push(At) : t.push(ce);
    t.push(i);
  }), [r, t, n];
}, lr = function(A, e, t, r) {
  var n = r[t];
  if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n)
    for (var s = t; s <= r.length; ) {
      s++;
      var a = r[s];
      if (a === e)
        return !0;
      if (a !== ee)
        break;
    }
  if (n === ee)
    for (var s = t; s > 0; ) {
      s--;
      var i = r[s];
      if (Array.isArray(A) ? A.indexOf(i) !== -1 : A === i)
        for (var B = t; B <= r.length; ) {
          B++;
          var a = r[B];
          if (a === e)
            return !0;
          if (a !== ee)
            break;
        }
      if (i !== ee)
        break;
    }
  return !1;
}, Rn = function(A, e) {
  for (var t = A; t >= 0; ) {
    var r = e[t];
    if (r === ee)
      t--;
    else
      return r;
  }
  return 0;
}, ki = function(A, e, t, r, n) {
  if (t[r] === 0)
    return V;
  var s = r - 1;
  if (Array.isArray(n) && n[s] === !0)
    return V;
  var a = s - 1, i = s + 1, B = e[s], o = a >= 0 ? e[a] : 0, c = e[i];
  if (B === Ys && c === Ws)
    return V;
  if (Pr.indexOf(B) !== -1)
    return zs;
  if (Pr.indexOf(c) !== -1 || qs.indexOf(c) !== -1)
    return V;
  if (Rn(s, e) === Zs)
    return wt;
  if (_r.get(A[s]) === Tr || (B === ft || B === gt) && _r.get(A[i]) === Tr || B === Dn || c === Dn || B === Tn || [ee, Sr, Re].indexOf(B) === -1 && c === Tn || [ut, Te, Oi, Qe, Ce].indexOf(c) !== -1 || Rn(s, e) === Se || lr(or, Se, s, e) || lr([ut, Te], Mr, s, e) || lr(Sn, Sn, s, e))
    return V;
  if (B === ee)
    return wt;
  if (B === or || c === or)
    return V;
  if (c === Or || B === Or)
    return wt;
  if ([Sr, Re, Mr].indexOf(c) !== -1 || B === Si || o === Gr && _i.indexOf(B) !== -1 || B === Ce && c === Gr || c === On || WA.indexOf(c) !== -1 && B === IA || WA.indexOf(B) !== -1 && c === IA || B === Ve && [At, ft, gt].indexOf(c) !== -1 || [At, ft, gt].indexOf(B) !== -1 && c === Ge || WA.indexOf(B) !== -1 && Mn.indexOf(c) !== -1 || Mn.indexOf(B) !== -1 && WA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Ve, Ge].indexOf(B) !== -1 && (c === IA || [Se, Re].indexOf(c) !== -1 && e[i + 1] === IA) || // ( OP | HY ) × NU
  [Se, Re].indexOf(B) !== -1 && c === IA || // NU ×	(NU | SY | IS)
  B === IA && [IA, Ce, Qe].indexOf(c) !== -1)
    return V;
  if ([IA, Ce, Qe, ut, Te].indexOf(c) !== -1)
    for (var l = s; l >= 0; ) {
      var u = e[l];
      if (u === IA)
        return V;
      if ([Ce, Qe].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if ([Ve, Ge].indexOf(c) !== -1)
    for (var l = [ut, Te].indexOf(B) !== -1 ? a : s; l >= 0; ) {
      var u = e[l];
      if (u === IA)
        return V;
      if ([Ce, Qe].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if (Vr === B && [Vr, Lt, Nr, Rr].indexOf(c) !== -1 || [Lt, Nr].indexOf(B) !== -1 && [Lt, xt].indexOf(c) !== -1 || [xt, Rr].indexOf(B) !== -1 && c === xt || Nn.indexOf(B) !== -1 && [On, Ge].indexOf(c) !== -1 || Nn.indexOf(c) !== -1 && B === Ve || WA.indexOf(B) !== -1 && WA.indexOf(c) !== -1 || B === Qe && WA.indexOf(c) !== -1 || WA.concat(IA).indexOf(B) !== -1 && c === Se && Gi.indexOf(A[i]) === -1 || WA.concat(IA).indexOf(c) !== -1 && B === Te)
    return V;
  if (B === cr && c === cr) {
    for (var d = t[s], w = 1; d > 0 && (d--, e[d] === cr); )
      w++;
    if (w % 2 !== 0)
      return V;
  }
  return B === ft && c === gt ? V : wt;
}, Xi = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = Pi(A, e.lineBreak), r = t[0], n = t[1], s = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(i) {
    return [IA, ce, js].indexOf(i) !== -1 ? At : i;
  }));
  var a = e.wordBreak === "keep-all" ? s.map(function(i, B) {
    return i && A[B] >= 19968 && A[B] <= 40959;
  }) : void 0;
  return [r, n, a];
}, Ji = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === zs, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return $.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), Yi = function(A, e) {
  var t = Yt(A), r = Xi(t, e), n = r[0], s = r[1], a = r[2], i = t.length, B = 0, o = 0;
  return {
    next: function() {
      if (o >= i)
        return { done: !0, value: null };
      for (var c = V; o < i && (c = ki(t, s, n, ++o, a)) === V; )
        ;
      if (c !== V || o === i) {
        var l = new Ji(t, c, B, o);
        return B = o, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Wi = 1, Zi = 2, nt = 4, Gn = 8, Ot = 10, Vn = 47, Xe = 92, ji = 9, zi = 32, Qt = 34, Oe = 61, qi = 35, $i = 36, Ao = 37, Ct = 39, Ut = 40, Me = 41, eo = 95, mA = 45, to = 33, ro = 60, no = 62, so = 64, ao = 91, Bo = 93, io = 61, oo = 123, ht = 63, co = 125, _n = 124, lo = 126, uo = 128, Pn = 65533, ur = 42, le = 43, fo = 44, go = 58, wo = 59, et = 46, Qo = 0, Co = 8, Uo = 11, ho = 14, Fo = 31, po = 127, PA = -1, $s = 48, Aa = 97, ea = 101, Eo = 102, mo = 117, Ho = 122, ta = 65, ra = 69, na = 70, vo = 85, yo = 90, QA = function(A) {
  return A >= $s && A <= 57;
}, Io = function(A) {
  return A >= 55296 && A <= 57343;
}, Ue = function(A) {
  return QA(A) || A >= ta && A <= na || A >= Aa && A <= Eo;
}, bo = function(A) {
  return A >= Aa && A <= Ho;
}, Ko = function(A) {
  return A >= ta && A <= yo;
}, Lo = function(A) {
  return bo(A) || Ko(A);
}, xo = function(A) {
  return A >= uo;
}, Ft = function(A) {
  return A === Ot || A === ji || A === zi;
}, Mt = function(A) {
  return Lo(A) || xo(A) || A === eo;
}, kn = function(A) {
  return Mt(A) || QA(A) || A === mA;
}, Do = function(A) {
  return A >= Qo && A <= Co || A === Uo || A >= ho && A <= Fo || A === po;
}, Ae = function(A, e) {
  return A !== Xe ? !1 : e !== Ot;
}, dt = function(A, e, t) {
  return A === mA ? Mt(e) || Ae(e, t) : Mt(A) ? !0 : !!(A === Xe && Ae(A, e));
}, fr = function(A, e, t) {
  return A === le || A === mA ? QA(e) ? !0 : e === et && QA(t) : QA(A === et ? e : A);
}, To = function(A) {
  var e = 0, t = 1;
  (A[e] === le || A[e] === mA) && (A[e] === mA && (t = -1), e++);
  for (var r = []; QA(A[e]); )
    r.push(A[e++]);
  var n = r.length ? parseInt($.apply(void 0, r), 10) : 0;
  A[e] === et && e++;
  for (var s = []; QA(A[e]); )
    s.push(A[e++]);
  var a = s.length, i = a ? parseInt($.apply(void 0, s), 10) : 0;
  (A[e] === ra || A[e] === ea) && e++;
  var B = 1;
  (A[e] === le || A[e] === mA) && (A[e] === mA && (B = -1), e++);
  for (var o = []; QA(A[e]); )
    o.push(A[e++]);
  var c = o.length ? parseInt($.apply(void 0, o), 10) : 0;
  return t * (n + i * Math.pow(10, -a)) * Math.pow(10, B * c);
}, So = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, Oo = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, Mo = {
  type: 4
  /* COMMA_TOKEN */
}, No = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, Ro = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, Go = {
  type: 21
  /* COLUMN_TOKEN */
}, Vo = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, _o = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, Po = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, ko = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, Xo = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, pt = {
  type: 23
  /* BAD_URL_TOKEN */
}, Jo = {
  type: 1
  /* BAD_STRING_TOKEN */
}, Yo = {
  type: 25
  /* CDO_TOKEN */
}, Wo = {
  type: 24
  /* CDC_TOKEN */
}, Zo = {
  type: 26
  /* COLON_TOKEN */
}, jo = {
  type: 27
  /* SEMICOLON_TOKEN */
}, zo = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, qo = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, $o = {
  type: 31
  /* WHITESPACE_TOKEN */
}, kr = {
  type: 32
  /* EOF_TOKEN */
}, sa = (
  /** @class */
  function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Yt(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== kr; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Qt:
          return this.consumeStringToken(Qt);
        case qi:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (kn(t) || Ae(r, n)) {
            var s = dt(t, r, n) ? Zi : Wi, a = this.consumeName();
            return { type: 5, value: a, flags: s };
          }
          break;
        case $i:
          if (this.peekCodePoint(0) === Oe)
            return this.consumeCodePoint(), No;
          break;
        case Ct:
          return this.consumeStringToken(Ct);
        case Ut:
          return So;
        case Me:
          return Oo;
        case ur:
          if (this.peekCodePoint(0) === Oe)
            return this.consumeCodePoint(), Xo;
          break;
        case le:
          if (fr(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case fo:
          return Mo;
        case mA:
          var i = e, B = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (fr(i, B, o))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (dt(i, B, o))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (B === mA && o === no)
            return this.consumeCodePoint(), this.consumeCodePoint(), Wo;
          break;
        case et:
          if (fr(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Vn:
          if (this.peekCodePoint(0) === ur)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === ur && (c = this.consumeCodePoint(), c === Vn))
                return this.consumeToken();
              if (c === PA)
                return this.consumeToken();
            }
          break;
        case go:
          return Zo;
        case wo:
          return jo;
        case ro:
          if (this.peekCodePoint(0) === to && this.peekCodePoint(1) === mA && this.peekCodePoint(2) === mA)
            return this.consumeCodePoint(), this.consumeCodePoint(), Yo;
          break;
        case so:
          var l = this.peekCodePoint(0), u = this.peekCodePoint(1), d = this.peekCodePoint(2);
          if (dt(l, u, d)) {
            var a = this.consumeName();
            return { type: 7, value: a };
          }
          break;
        case ao:
          return zo;
        case Xe:
          if (Ae(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case Bo:
          return qo;
        case io:
          if (this.peekCodePoint(0) === Oe)
            return this.consumeCodePoint(), Ro;
          break;
        case oo:
          return Po;
        case co:
          return ko;
        case mo:
        case vo:
          var w = this.peekCodePoint(0), g = this.peekCodePoint(1);
          return w === le && (Ue(g) || g === ht) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case _n:
          if (this.peekCodePoint(0) === Oe)
            return this.consumeCodePoint(), Vo;
          if (this.peekCodePoint(0) === _n)
            return this.consumeCodePoint(), Go;
          break;
        case lo:
          if (this.peekCodePoint(0) === Oe)
            return this.consumeCodePoint(), _o;
          break;
        case PA:
          return kr;
      }
      return Ft(e) ? (this.consumeWhiteSpace(), $o) : QA(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : Mt(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: $(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); Ue(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === ht && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt($.apply(void 0, e.map(function(B) {
          return B === ht ? $s : B;
        })), 16), s = parseInt($.apply(void 0, e.map(function(B) {
          return B === ht ? na : B;
        })), 16);
        return { type: 30, start: n, end: s };
      }
      var a = parseInt($.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === mA && Ue(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var i = []; Ue(t) && i.length < 6; )
          i.push(t), t = this.consumeCodePoint();
        var s = parseInt($.apply(void 0, i), 16);
        return { type: 30, start: a, end: s };
      } else
        return { type: 30, start: a, end: a };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Ut ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Ut ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === PA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ct || t === Qt) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === PA || this.peekCodePoint(0) === Me) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), pt);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === PA || n === Me)
          return { type: 22, value: $.apply(void 0, e) };
        if (Ft(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === PA || this.peekCodePoint(0) === Me ? (this.consumeCodePoint(), { type: 22, value: $.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), pt);
        if (n === Qt || n === Ct || n === Ut || Do(n))
          return this.consumeBadUrlRemnants(), pt;
        if (n === Xe)
          if (Ae(n, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), pt;
        else
          e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Ft(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Me || e === PA)
          return;
        Ae(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += $.apply(void 0, this._value.splice(0, n)), e -= n;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === PA || n === void 0 || n === e)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === Ot)
          return this._value.splice(0, r), Jo;
        if (n === Xe) {
          var s = this._value[r + 1];
          s !== PA && s !== void 0 && (s === Ot ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : Ae(n, s) && (t += this.consumeStringSlice(r), t += $(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = nt, r = this.peekCodePoint(0);
      for ((r === le || r === mA) && e.push(this.consumeCodePoint()); QA(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === et && QA(n))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Gn; QA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var s = this.peekCodePoint(2);
      if ((r === ra || r === ea) && ((n === le || n === mA) && QA(s) || QA(n)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Gn; QA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [To(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), s = this.peekCodePoint(1), a = this.peekCodePoint(2);
      if (dt(n, s, a)) {
        var i = this.consumeName();
        return { type: 15, number: t, flags: r, unit: i };
      }
      return n === Ao ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (Ue(e)) {
        for (var t = $(e); Ue(this.peekCodePoint(0)) && t.length < 6; )
          t += $(this.consumeCodePoint());
        Ft(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Io(r) || r > 1114111 ? Pn : r;
      }
      return e === PA ? Pn : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (kn(t))
          e += $(t);
        else if (Ae(t, this.peekCodePoint(0)))
          e += $(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }()
), aa = (
  /** @class */
  function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new sa();
      return t.write(e), new A(t.read());
    }, A.parseValue = function(e) {
      return A.create(e).parseComponentValue();
    }, A.parseValues = function(e) {
      return A.create(e).parseComponentValues();
    }, A.prototype.parseComponentValue = function() {
      for (var e = this.consumeToken(); e.type === 31; )
        e = this.consumeToken();
      if (e.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(e);
      var t = this.consumeComponentValue();
      do
        e = this.consumeToken();
      while (e.type === 31);
      if (e.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, A.prototype.parseComponentValues = function() {
      for (var e = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return e;
        e.push(t), e.push();
      }
    }, A.prototype.consumeComponentValue = function() {
      var e = this.consumeToken();
      switch (e.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(e.type);
        case 19:
          return this.consumeFunction(e);
      }
      return e;
    }, A.prototype.consumeSimpleBlock = function(e) {
      for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || ec(r, e))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function(e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function() {
      var e = this._tokens.shift();
      return typeof e > "u" ? kr : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  }()
), st = function(A) {
  return A.type === 15;
}, be = function(A) {
  return A.type === 17;
}, J = function(A) {
  return A.type === 20;
}, Ac = function(A) {
  return A.type === 0;
}, Xr = function(A, e) {
  return J(A) && A.value === e;
}, Ba = function(A) {
  return A.type !== 31;
}, ve = function(A) {
  return A.type !== 31 && A.type !== 4;
}, XA = function(A) {
  var e = [], t = [];
  return A.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      e.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && e.push(t), e;
}, ec = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, ae = function(A) {
  return A.type === 17 || A.type === 15;
}, eA = function(A) {
  return A.type === 16 || ae(A);
}, ia = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
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
}, _e = function(A, e, t) {
  var r = A[0], n = A[1];
  return [Y(r, e), Y(typeof n < "u" ? n : r, t)];
}, Y = function(A, e) {
  if (A.type === 16)
    return A.number / 100 * e;
  if (st(A))
    switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      case "px":
      default:
        return A.number;
    }
  return A.number;
}, oa = "deg", ca = "grad", la = "rad", ua = "turn", Wt = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case oa:
          return Math.PI * e.number / 180;
        case ca:
          return Math.PI / 200 * e.number;
        case la:
          return e.number;
        case ua:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, fa = function(A) {
  return A.type === 15 && (A.unit === oa || A.unit === ca || A.unit === la || A.unit === ua);
}, ga = function(A) {
  var e = A.filter(J).map(function(t) {
    return t.value;
  }).join(" ");
  switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [uA, uA];
    case "to top":
    case "bottom":
      return xA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [uA, te];
    case "to right":
    case "left":
      return xA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [te, te];
    case "to bottom":
    case "top":
      return xA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [te, uA];
    case "to left":
    case "right":
      return xA(270);
  }
  return 0;
}, xA = function(A) {
  return Math.PI * A / 180;
}, ne = {
  name: "color",
  parse: function(A, e) {
    if (e.type === 18) {
      var t = tc[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values);
    }
    if (e.type === 5) {
      if (e.value.length === 3) {
        var r = e.value.substring(0, 1), n = e.value.substring(1, 2), s = e.value.substring(2, 3);
        return re(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
      }
      if (e.value.length === 4) {
        var r = e.value.substring(0, 1), n = e.value.substring(1, 2), s = e.value.substring(2, 3), a = e.value.substring(3, 4);
        return re(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(a + a, 16) / 255);
      }
      if (e.value.length === 6) {
        var r = e.value.substring(0, 2), n = e.value.substring(2, 4), s = e.value.substring(4, 6);
        return re(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
      }
      if (e.value.length === 8) {
        var r = e.value.substring(0, 2), n = e.value.substring(2, 4), s = e.value.substring(4, 6), a = e.value.substring(6, 8);
        return re(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(a, 16) / 255);
      }
    }
    if (e.type === 20) {
      var i = jA[e.value.toUpperCase()];
      if (typeof i < "u")
        return i;
    }
    return jA.TRANSPARENT;
  }
}, se = function(A) {
  return (255 & A) === 0;
}, BA = function(A) {
  var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
  return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, re = function(A, e, t, r) {
  return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, Xn = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, Jn = function(A, e) {
  var t = e.filter(ve);
  if (t.length === 3) {
    var r = t.map(Xn), n = r[0], s = r[1], a = r[2];
    return re(n, s, a, 1);
  }
  if (t.length === 4) {
    var i = t.map(Xn), n = i[0], s = i[1], a = i[2], B = i[3];
    return re(n, s, a, B);
  }
  return 0;
};
function gr(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var Yn = function(A, e) {
  var t = e.filter(ve), r = t[0], n = t[1], s = t[2], a = t[3], i = (r.type === 17 ? xA(r.number) : Wt.parse(A, r)) / (Math.PI * 2), B = eA(n) ? n.number / 100 : 0, o = eA(s) ? s.number / 100 : 0, c = typeof a < "u" && eA(a) ? Y(a, 1) : 1;
  if (B === 0)
    return re(o * 255, o * 255, o * 255, 1);
  var l = o <= 0.5 ? o * (B + 1) : o + B - o * B, u = o * 2 - l, d = gr(u, l, i + 1 / 3), w = gr(u, l, i), g = gr(u, l, i - 1 / 3);
  return re(d * 255, w * 255, g * 255, c);
}, tc = {
  hsl: Yn,
  hsla: Yn,
  rgb: Jn,
  rgba: Jn
}, Je = function(A, e) {
  return ne.parse(A, aa.create(e).parseComponentValue());
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
}, rc = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
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
}, nc = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Zt = function(A, e) {
  var t = ne.parse(A, e[0]), r = e[1];
  return r && eA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Wn = function(A, e) {
  var t = A[0], r = A[A.length - 1];
  t.stop === null && (t.stop = uA), r.stop === null && (r.stop = te);
  for (var n = [], s = 0, a = 0; a < A.length; a++) {
    var i = A[a].stop;
    if (i !== null) {
      var B = Y(i, e);
      B > s ? n.push(B) : n.push(s), s = B;
    } else
      n.push(null);
  }
  for (var o = null, a = 0; a < n.length; a++) {
    var c = n[a];
    if (c === null)
      o === null && (o = a);
    else if (o !== null) {
      for (var l = a - o, u = n[o - 1], d = (c - u) / (l + 1), w = 1; w <= l; w++)
        n[o + w - 1] = d * w;
      o = null;
    }
  }
  return A.map(function(g, D) {
    var p = g.color;
    return { color: p, stop: Math.max(Math.min(1, n[D] / e), 0) };
  });
}, sc = function(A, e, t) {
  var r = e / 2, n = t / 2, s = Y(A[0], e) - r, a = n - Y(A[1], t);
  return (Math.atan2(a, s) + Math.PI * 2) % (Math.PI * 2);
}, ac = function(A, e, t) {
  var r = typeof A == "number" ? A : sc(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = e / 2, a = t / 2, i = n / 2, B = Math.sin(r - Math.PI / 2) * i, o = Math.cos(r - Math.PI / 2) * i;
  return [n, s - o, s + o, a - B, a + B];
}, NA = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, Zn = function(A, e, t, r, n) {
  var s = [
    [0, 0],
    [0, e],
    [A, 0],
    [A, e]
  ];
  return s.reduce(function(a, i) {
    var B = i[0], o = i[1], c = NA(t - B, r - o);
    return (n ? c < a.optimumDistance : c > a.optimumDistance) ? {
      optimumCorner: i,
      optimumDistance: c
    } : a;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, Bc = function(A, e, t, r, n) {
  var s = 0, a = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? s = a = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (s = Math.min(Math.abs(e), Math.abs(e - r)), a = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (A.shape === 0)
        s = a = Math.min(NA(e, t), NA(e, t - n), NA(e - r, t), NA(e - r, t - n));
      else if (A.shape === 1) {
        var i = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), B = Zn(r, n, e, t, !0), o = B[0], c = B[1];
        s = NA(o - e, (c - t) / i), a = i * s;
      }
      break;
    case 1:
      A.shape === 0 ? s = a = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (s = Math.max(Math.abs(e), Math.abs(e - r)), a = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (A.shape === 0)
        s = a = Math.max(NA(e, t), NA(e, t - n), NA(e - r, t), NA(e - r, t - n));
      else if (A.shape === 1) {
        var i = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), l = Zn(r, n, e, t, !1), o = l[0], c = l[1];
        s = NA(o - e, (c - t) / i), a = i * s;
      }
      break;
  }
  return Array.isArray(A.size) && (s = Y(A.size[0], r), a = A.size.length === 2 ? Y(A.size[1], n) : s), [s, a];
}, ic = function(A, e) {
  var t = xA(180), r = [];
  return XA(e).forEach(function(n, s) {
    if (s === 0) {
      var a = n[0];
      if (a.type === 20 && a.value === "to") {
        t = ga(n);
        return;
      } else if (fa(a)) {
        t = Wt.parse(A, a);
        return;
      }
    }
    var i = Zt(A, n);
    r.push(i);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Et = function(A, e) {
  var t = xA(180), r = [];
  return XA(e).forEach(function(n, s) {
    if (s === 0) {
      var a = n[0];
      if (a.type === 20 && ["top", "left", "right", "bottom"].indexOf(a.value) !== -1) {
        t = ga(n);
        return;
      } else if (fa(a)) {
        t = (Wt.parse(A, a) + xA(270)) % xA(360);
        return;
      }
    }
    var i = Zt(A, n);
    r.push(i);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, oc = function(A, e) {
  var t = xA(180), r = [], n = 1, s = 0, a = 3, i = [];
  return XA(e).forEach(function(B, o) {
    var c = B[0];
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
        var l = ne.parse(A, c.values[0]);
        r.push({ stop: uA, color: l });
      } else if (c.name === "to") {
        var l = ne.parse(A, c.values[0]);
        r.push({ stop: te, color: l });
      } else if (c.name === "color-stop") {
        var u = c.values.filter(ve);
        if (u.length === 2) {
          var l = ne.parse(A, u[1]), d = u[0];
          be(d) && r.push({
            stop: { type: 16, number: d.number * 100, flags: d.flags },
            color: l
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + xA(180)) % xA(360),
    stops: r,
    type: n
  } : { size: a, shape: s, stops: r, position: i, type: n };
}, wa = "closest-side", Qa = "farthest-side", Ca = "closest-corner", Ua = "farthest-corner", ha = "circle", Fa = "ellipse", da = "cover", pa = "contain", cc = function(A, e) {
  var t = 0, r = 3, n = [], s = [];
  return XA(e).forEach(function(a, i) {
    var B = !0;
    if (i === 0) {
      var o = !1;
      B = a.reduce(function(l, u) {
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
            case ha:
              return t = 0, !1;
            case Fa:
              return t = 1, !1;
            case "at":
              return o = !0, !1;
            case wa:
              return r = 0, !1;
            case da:
            case Qa:
              return r = 1, !1;
            case pa:
            case Ca:
              return r = 2, !1;
            case Ua:
              return r = 3, !1;
          }
        else if (ae(u) || eA(u))
          return Array.isArray(r) || (r = []), r.push(u), !1;
        return l;
      }, B);
    }
    if (B) {
      var c = Zt(A, a);
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
}, mt = function(A, e) {
  var t = 0, r = 3, n = [], s = [];
  return XA(e).forEach(function(a, i) {
    var B = !0;
    if (i === 0 ? B = a.reduce(function(c, l) {
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
    }, B) : i === 1 && (B = a.reduce(function(c, l) {
      if (J(l))
        switch (l.value) {
          case ha:
            return t = 0, !1;
          case Fa:
            return t = 1, !1;
          case pa:
          case wa:
            return r = 0, !1;
          case Qa:
            return r = 1, !1;
          case Ca:
            return r = 2, !1;
          case da:
          case Ua:
            return r = 3, !1;
        }
      else if (ae(l) || eA(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return c;
    }, B)), B) {
      var o = Zt(A, a);
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
}, lc = function(A) {
  return A.type === 1;
}, uc = function(A) {
  return A.type === 2;
}, sn = {
  name: "image",
  parse: function(A, e) {
    if (e.type === 22) {
      var t = {
        url: e.value,
        type: 0
        /* URL */
      };
      return A.cache.addImage(e.value), t;
    }
    if (e.type === 18) {
      var r = Ea[e.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function fc(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!Ea[A.name]);
}
var Ea = {
  "linear-gradient": ic,
  "-moz-linear-gradient": Et,
  "-ms-linear-gradient": Et,
  "-o-linear-gradient": Et,
  "-webkit-linear-gradient": Et,
  "radial-gradient": cc,
  "-moz-radial-gradient": mt,
  "-ms-radial-gradient": mt,
  "-o-radial-gradient": mt,
  "-webkit-radial-gradient": mt,
  "-webkit-gradient": oc
}, gc = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return ve(r) && fc(r);
    }).map(function(r) {
      return sn.parse(A, r);
    });
  }
}, wc = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
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
}, Qc = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return XA(e).map(function(t) {
      return t.filter(eA);
    }).map(ia);
  }
}, Cc = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return XA(e).map(function(t) {
      return t.filter(J).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Uc);
  }
}, Uc = function(A) {
  switch (A) {
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
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(He || (He = {}));
var hc = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return XA(e).map(function(t) {
      return t.filter(Fc);
    });
  }
}, Fc = function(A) {
  return J(A) || eA(A);
}, jt = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, dc = jt("top"), pc = jt("right"), Ec = jt("bottom"), mc = jt("left"), zt = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return ia(t.filter(eA));
    }
  };
}, Hc = zt("top-left"), vc = zt("top-right"), yc = zt("bottom-right"), Ic = zt("bottom-left"), qt = function(A) {
  return {
    name: "border-" + A + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(e, t) {
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
}, bc = qt("top"), Kc = qt("right"), Lc = qt("bottom"), xc = qt("left"), $t = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return st(t) ? t.number : 0;
    }
  };
}, Dc = $t("top"), Tc = $t("right"), Sc = $t("bottom"), Oc = $t("left"), Mc = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Nc = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, Rc = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(J).reduce(
      function(t, r) {
        return t | Gc(r.value);
      },
      0
      /* NONE */
    );
  }
}, Gc = function(A) {
  switch (A) {
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
}, Vc = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
}, _c = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, Nt;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(Nt || (Nt = {}));
var Pc = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return Nt.STRICT;
      case "normal":
      default:
        return Nt.NORMAL;
    }
  }
}, kc = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, jn = function(A, e) {
  return J(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : eA(A) ? Y(A, e) : e;
}, Xc = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : sn.parse(A, e);
  }
}, Jc = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
  parse: function(A, e) {
    switch (e) {
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
}, Ar = function(A) {
  return {
    name: "margin-" + A,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, Yc = Ar("top"), Wc = Ar("right"), Zc = Ar("bottom"), jc = Ar("left"), zc = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(J).map(function(t) {
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
}, qc = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, er = function(A) {
  return {
    name: "padding-" + A,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, $c = er("top"), Al = er("right"), el = er("bottom"), tl = er("left"), rl = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
}, nl = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
}, sl = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Xr(e[0], "none") ? [] : XA(e).map(function(t) {
      for (var r = {
        color: jA.TRANSPARENT,
        offsetX: uA,
        offsetY: uA,
        blur: uA
      }, n = 0, s = 0; s < t.length; s++) {
        var a = t[s];
        ae(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : r.blur = a, n++) : r.color = ne.parse(A, a);
      }
      return r;
    });
  }
}, al = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, Bl = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = cl[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, il = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, ol = function(A) {
  var e = A.filter(function(B) {
    return B.type === 17;
  }).map(function(B) {
    return B.number;
  }), t = e[0], r = e[1];
  e[2], e[3];
  var n = e[4], s = e[5];
  e[6], e[7], e[8], e[9], e[10], e[11];
  var a = e[12], i = e[13];
  return e[14], e[15], e.length === 16 ? [t, r, n, s, a, i] : null;
}, cl = {
  matrix: il,
  matrix3d: ol
}, zn = {
  type: 16,
  number: 50,
  flags: nt
}, ll = [zn, zn], ul = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(eA);
    return t.length !== 2 ? ll : [t[0], t[1]];
  }
}, fl = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(Ye || (Ye = {}));
var gl = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return Ye.BREAK_ALL;
      case "keep-all":
        return Ye.KEEP_ALL;
      case "normal":
      default:
        return Ye.NORMAL;
    }
  }
}, wl = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (be(e))
      return { auto: !1, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, ma = {
  name: "time",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
    throw new Error("Unsupported time type");
  }
}, Ql = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return be(e) ? e.number : 1;
  }
}, Cl = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Ul = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(J).map(function(t) {
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
}, hl = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [], r = [];
    return e.forEach(function(n) {
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
}, Fl = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, dl = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (be(e))
      return e.number;
    if (J(e))
      switch (e.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, pl = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(J).map(function(t) {
      return t.value;
    });
  }
}, El = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, rA = function(A, e) {
  return (A & e) !== 0;
}, ml = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e;
  }
}, Hl = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r = [], n = e.filter(Ba), s = 0; s < n.length; s++) {
      var a = n[s], i = n[s + 1];
      if (a.type === 20) {
        var B = i && be(i) ? i.number : 1;
        r.push({ counter: a.value, increment: B });
      }
    }
    return r;
  }
}, vl = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(Ba), n = 0; n < r.length; n++) {
      var s = r[n], a = r[n + 1];
      if (J(s) && s.value !== "none") {
        var i = a && be(a) ? a.number : 0;
        t.push({ counter: s.value, reset: i });
      }
    }
    return t;
  }
}, yl = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(st).map(function(t) {
      return ma.parse(A, t);
    });
  }
}, Il = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r = [], n = e.filter(Ac);
    if (n.length % 2 !== 0)
      return null;
    for (var s = 0; s < n.length; s += 2) {
      var a = n[s].value, i = n[s + 1].value;
      r.push({ open: a, close: i });
    }
    return r;
  }
}, qn = function(A, e, t) {
  if (!A)
    return "";
  var r = A[Math.min(e, A.length - 1)];
  return r ? t ? r.open : r.close : "";
}, bl = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Xr(e[0], "none") ? [] : XA(e).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: uA,
        offsetY: uA,
        blur: uA,
        spread: uA,
        inset: !1
      }, n = 0, s = 0; s < t.length; s++) {
        var a = t[s];
        Xr(a, "inset") ? r.inset = !0 : ae(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : n === 2 ? r.blur = a : r.spread = a, n++) : r.color = ne.parse(A, a);
      }
      return r;
    });
  }
}, Kl = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r = [];
    return e.filter(J).forEach(function(n) {
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
}, Ll = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, xl = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return st(e) ? e.number : 0;
  }
}, Dl = (
  /** @class */
  function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = H(e, yl, t.animationDuration), this.backgroundClip = H(e, rc, t.backgroundClip), this.backgroundColor = H(e, nc, t.backgroundColor), this.backgroundImage = H(e, gc, t.backgroundImage), this.backgroundOrigin = H(e, wc, t.backgroundOrigin), this.backgroundPosition = H(e, Qc, t.backgroundPosition), this.backgroundRepeat = H(e, Cc, t.backgroundRepeat), this.backgroundSize = H(e, hc, t.backgroundSize), this.borderTopColor = H(e, dc, t.borderTopColor), this.borderRightColor = H(e, pc, t.borderRightColor), this.borderBottomColor = H(e, Ec, t.borderBottomColor), this.borderLeftColor = H(e, mc, t.borderLeftColor), this.borderTopLeftRadius = H(e, Hc, t.borderTopLeftRadius), this.borderTopRightRadius = H(e, vc, t.borderTopRightRadius), this.borderBottomRightRadius = H(e, yc, t.borderBottomRightRadius), this.borderBottomLeftRadius = H(e, Ic, t.borderBottomLeftRadius), this.borderTopStyle = H(e, bc, t.borderTopStyle), this.borderRightStyle = H(e, Kc, t.borderRightStyle), this.borderBottomStyle = H(e, Lc, t.borderBottomStyle), this.borderLeftStyle = H(e, xc, t.borderLeftStyle), this.borderTopWidth = H(e, Dc, t.borderTopWidth), this.borderRightWidth = H(e, Tc, t.borderRightWidth), this.borderBottomWidth = H(e, Sc, t.borderBottomWidth), this.borderLeftWidth = H(e, Oc, t.borderLeftWidth), this.boxShadow = H(e, bl, t.boxShadow), this.color = H(e, Mc, t.color), this.direction = H(e, Nc, t.direction), this.display = H(e, Rc, t.display), this.float = H(e, Vc, t.cssFloat), this.fontFamily = H(e, hl, t.fontFamily), this.fontSize = H(e, Fl, t.fontSize), this.fontStyle = H(e, El, t.fontStyle), this.fontVariant = H(e, pl, t.fontVariant), this.fontWeight = H(e, dl, t.fontWeight), this.letterSpacing = H(e, _c, t.letterSpacing), this.lineBreak = H(e, Pc, t.lineBreak), this.lineHeight = H(e, kc, t.lineHeight), this.listStyleImage = H(e, Xc, t.listStyleImage), this.listStylePosition = H(e, Jc, t.listStylePosition), this.listStyleType = H(e, Jr, t.listStyleType), this.marginTop = H(e, Yc, t.marginTop), this.marginRight = H(e, Wc, t.marginRight), this.marginBottom = H(e, Zc, t.marginBottom), this.marginLeft = H(e, jc, t.marginLeft), this.opacity = H(e, Ql, t.opacity);
      var s = H(e, zc, t.overflow);
      this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = H(e, qc, t.overflowWrap), this.paddingTop = H(e, $c, t.paddingTop), this.paddingRight = H(e, Al, t.paddingRight), this.paddingBottom = H(e, el, t.paddingBottom), this.paddingLeft = H(e, tl, t.paddingLeft), this.paintOrder = H(e, Kl, t.paintOrder), this.position = H(e, nl, t.position), this.textAlign = H(e, rl, t.textAlign), this.textDecorationColor = H(e, Cl, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = H(e, Ul, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = H(e, sl, t.textShadow), this.textTransform = H(e, al, t.textTransform), this.transform = H(e, Bl, t.transform), this.transformOrigin = H(e, ul, t.transformOrigin), this.visibility = H(e, fl, t.visibility), this.webkitTextStrokeColor = H(e, Ll, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = H(e, xl, t.webkitTextStrokeWidth), this.wordBreak = H(e, gl, t.wordBreak), this.zIndex = H(e, wl, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return se(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return rA(
        this.display,
        4
        /* INLINE */
      ) || rA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || rA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || rA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || rA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || rA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  }()
), Tl = (
  /** @class */
  function() {
    function A(e, t) {
      this.content = H(e, ml, t.content), this.quotes = H(e, Il, t.quotes);
    }
    return A;
  }()
), $n = (
  /** @class */
  function() {
    function A(e, t) {
      this.counterIncrement = H(e, Hl, t.counterIncrement), this.counterReset = H(e, vl, t.counterReset);
    }
    return A;
  }()
), H = function(A, e, t) {
  var r = new sa(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r.write(n);
  var s = new aa(r.read());
  switch (e.type) {
    case 2:
      var a = s.parseComponentValue();
      return e.parse(A, J(a) ? a.value : e.initialValue);
    case 0:
      return e.parse(A, s.parseComponentValue());
    case 1:
      return e.parse(A, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (e.format) {
        case "angle":
          return Wt.parse(A, s.parseComponentValue());
        case "color":
          return ne.parse(A, s.parseComponentValue());
        case "image":
          return sn.parse(A, s.parseComponentValue());
        case "length":
          var i = s.parseComponentValue();
          return ae(i) ? i : uA;
        case "length-percentage":
          var B = s.parseComponentValue();
          return eA(B) ? B : uA;
        case "time":
          return ma.parse(A, s.parseComponentValue());
      }
      break;
  }
}, Sl = "data-html2canvas-debug", Ol = function(A) {
  var e = A.getAttribute(Sl);
  switch (e) {
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
}, Yr = function(A, e) {
  var t = Ol(A);
  return t === 1 || e === t;
}, JA = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Yr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Dl(e, window.getComputedStyle(t, null)), jr(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Jt(this.context, t), Yr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), Ml = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", As = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Pe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ht = 0; Ht < As.length; Ht++)
  Pe[As.charCodeAt(Ht)] = Ht;
var Nl = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, s, a, i, B;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    s = Pe[A.charCodeAt(r)], a = Pe[A.charCodeAt(r + 1)], i = Pe[A.charCodeAt(r + 2)], B = Pe[A.charCodeAt(r + 3)], c[n++] = s << 2 | a >> 4, c[n++] = (a & 15) << 4 | i >> 2, c[n++] = (i & 3) << 6 | B & 63;
  return o;
}, Rl = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, Gl = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, fe = 5, an = 6 + 5, wr = 2, Vl = an - fe, Ha = 65536 >> fe, _l = 1 << fe, Qr = _l - 1, Pl = 1024 >> fe, kl = Ha + Pl, Xl = kl, Jl = 32, Yl = Xl + Jl, Wl = 65536 >> an, Zl = 1 << Vl, jl = Zl - 1, es = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, zl = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, ql = function(A, e) {
  var t = Nl(A), r = Array.isArray(t) ? Gl(t) : new Uint32Array(t), n = Array.isArray(t) ? Rl(t) : new Uint16Array(t), s = 24, a = es(n, s / 2, r[4] / 2), i = r[5] === 2 ? es(n, (s + r[4]) / 2) : zl(r, Math.ceil((s + r[4]) / 4));
  return new $l(r[0], r[1], r[2], r[3], a, i);
}, $l = (
  /** @class */
  function() {
    function A(e, t, r, n, s, a) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = a;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> fe], t = (t << wr) + (e & Qr), this.data[t];
        if (e <= 65535)
          return t = this.index[Ha + (e - 55296 >> fe)], t = (t << wr) + (e & Qr), this.data[t];
        if (e < this.highStart)
          return t = Yl - Wl + (e >> an), t = this.index[t], t += e >> fe & jl, t = this.index[t], t = (t << wr) + (e & Qr), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), ts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Au = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var vt = 0; vt < ts.length; vt++)
  Au[ts.charCodeAt(vt)] = vt;
var eu = 1, Cr = 2, Ur = 3, rs = 4, ns = 5, tu = 7, ss = 8, hr = 9, Fr = 10, as = 11, Bs = 12, is = 13, os = 14, dr = 15, ru = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = A.charCodeAt(t++);
      (s & 64512) === 56320 ? e.push(((n & 1023) << 10) + (s & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, nu = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], n = -1, s = ""; ++n < t; ) {
    var a = A[n];
    a <= 65535 ? r.push(a) : (a -= 65536, r.push((a >> 10) + 55296, a % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, su = ql(Ml), KA = "×", pr = "÷", au = function(A) {
  return su.get(A);
}, Bu = function(A, e, t) {
  var r = t - 2, n = e[r], s = e[t - 1], a = e[t];
  if (s === Cr && a === Ur)
    return KA;
  if (s === Cr || s === Ur || s === rs || a === Cr || a === Ur || a === rs)
    return pr;
  if (s === ss && [ss, hr, as, Bs].indexOf(a) !== -1 || (s === as || s === hr) && (a === hr || a === Fr) || (s === Bs || s === Fr) && a === Fr || a === is || a === ns || a === tu || s === eu)
    return KA;
  if (s === is && a === os) {
    for (; n === ns; )
      n = e[--r];
    if (n === os)
      return KA;
  }
  if (s === dr && a === dr) {
    for (var i = 0; n === dr; )
      i++, n = e[--r];
    if (i % 2 === 0)
      return KA;
  }
  return pr;
}, iu = function(A) {
  var e = ru(A), t = e.length, r = 0, n = 0, s = e.map(au);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var a = KA; r < t && (a = Bu(e, s, ++r)) === KA; )
        ;
      if (a !== KA || r === t) {
        var i = nu.apply(null, e.slice(n, r));
        return n = r, { value: i, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, ou = function(A) {
  for (var e = iu(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, cu = function(A) {
  var e = 123;
  if (A.createRange) {
    var t = A.createRange();
    if (t.getBoundingClientRect) {
      var r = A.createElement("boundtest");
      r.style.height = e + "px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
      var n = t.getBoundingClientRect(), s = Math.round(n.height);
      if (A.body.removeChild(r), s === e)
        return !0;
    }
  }
  return !1;
}, lu = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = e.firstChild, n = Yt(r.data).map(function(B) {
    return $(B);
  }), s = 0, a = {}, i = n.every(function(B, o) {
    t.setStart(r, s), t.setEnd(r, s + B.length);
    var c = t.getBoundingClientRect();
    s += B.length;
    var l = c.x > a.x || c.y > a.y;
    return a = c, o === 0 ? !0 : l;
  });
  return A.body.removeChild(e), i;
}, uu = function() {
  return typeof new Image().crossOrigin < "u";
}, fu = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, gu = function(A) {
  var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(e, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, cs = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, wu = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var r = e.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), s = e.toDataURL();
  n.src = s;
  var a = Wr(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), ls(a).then(function(i) {
    r.drawImage(i, 0, 0);
    var B = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var o = A.createElement("div");
    return o.style.backgroundImage = "url(" + s + ")", o.style.height = t + "px", cs(B) ? ls(Wr(t, t, 0, 0, o)) : Promise.reject(!1);
  }).then(function(i) {
    return r.drawImage(i, 0, 0), cs(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Wr = function(A, e, t, r, n) {
  var s = "http://www.w3.org/2000/svg", a = document.createElementNS(s, "svg"), i = document.createElementNS(s, "foreignObject");
  return a.setAttributeNS(null, "width", A.toString()), a.setAttributeNS(null, "height", e.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", r.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), a.appendChild(i), i.appendChild(n), a;
}, ls = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      return e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, cA = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = cu(document);
    return Object.defineProperty(cA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = cA.SUPPORT_RANGE_BOUNDS && lu(document);
    return Object.defineProperty(cA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = gu(document);
    return Object.defineProperty(cA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? wu(document) : Promise.resolve(!1);
    return Object.defineProperty(cA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = uu();
    return Object.defineProperty(cA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = fu();
    return Object.defineProperty(cA, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
  },
  get SUPPORT_CORS_XHR() {
    var A = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(cA, "SUPPORT_CORS_XHR", { value: A }), A;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var A = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(cA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A;
  }
}, We = (
  /** @class */
  function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }()
), Qu = function(A, e, t, r) {
  var n = hu(e, t), s = [], a = 0;
  return n.forEach(function(i) {
    if (t.textDecorationLine.length || i.trim().length > 0)
      if (cA.SUPPORT_RANGE_BOUNDS) {
        var B = us(r, a, i.length).getClientRects();
        if (B.length > 1) {
          var o = Bn(i), c = 0;
          o.forEach(function(u) {
            s.push(new We(u, zA.fromDOMRectList(A, us(r, c + a, u.length).getClientRects()))), c += u.length;
          });
        } else
          s.push(new We(i, zA.fromDOMRectList(A, B)));
      } else {
        var l = r.splitText(i.length);
        s.push(new We(i, Cu(A, r))), r = l;
      }
    else
      cA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(i.length));
    a += i.length;
  }), s;
}, Cu = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(e.cloneNode(!0));
    var n = e.parentNode;
    if (n) {
      n.replaceChild(r, e);
      var s = Jt(A, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), s;
    }
  }
  return zA.EMPTY;
}, us = function(A, e, t) {
  var r = A.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(A, e), n.setEnd(A, e + t), n;
}, Bn = function(A) {
  if (cA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return ou(A);
}, Uu = function(A, e) {
  if (cA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return du(A, e);
}, hu = function(A, e) {
  return e.letterSpacing !== 0 ? Bn(A) : Uu(A, e);
}, Fu = [32, 160, 4961, 65792, 65793, 4153, 4241], du = function(A, e) {
  for (var t = Yi(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], n, s = function() {
    if (n.value) {
      var a = n.value.slice(), i = Yt(a), B = "";
      i.forEach(function(o) {
        Fu.indexOf(o) === -1 ? B += $(o) : (B.length && r.push(B), r.push($(o)), B = "");
      }), B.length && r.push(B);
    }
  }; !(n = t.next()).done; )
    s();
  return r;
}, pu = (
  /** @class */
  function() {
    function A(e, t, r) {
      this.text = Eu(t.data, r.textTransform), this.textBounds = Qu(e, this.text, r, t);
    }
    return A;
  }()
), Eu = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(mu, Hu);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, mu = /(^|\s|:|-|\(|\))([a-z])/g, Hu = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, va = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  }(JA)
), ya = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  }(JA)
), Ia = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, s = new XMLSerializer(), a = Jt(t, r);
      return r.setAttribute("width", a.width + "px"), r.setAttribute("height", a.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  }(JA)
), ba = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(JA)
), Zr = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return e;
  }(JA)
), vu = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], yu = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Iu = function(A) {
  return A.width > A.height ? new zA(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new zA(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, bu = function(A) {
  var e = A.type === Ku ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, Rt = "checkbox", Gt = "radio", Ku = "password", fs = 707406591, on = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = bu(r), (n.type === Rt || n.type === Gt) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = Iu(n.bounds)), n.type) {
        case Rt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = vu;
          break;
        case Gt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = yu;
          break;
      }
      return n;
    }
    return e;
  }(JA)
), Ka = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, s = r.options[r.selectedIndex || 0];
      return n.value = s && s.text || "", n;
    }
    return e;
  }(JA)
), La = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(JA)
), xa = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = Ta(t, r.contentWindow.document.documentElement);
          var s = r.contentWindow.document.documentElement ? Je(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : jA.TRANSPARENT, a = r.contentWindow.document.body ? Je(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : jA.TRANSPARENT;
          n.backgroundColor = se(s) ? se(a) ? n.styles.backgroundColor : a : s;
        }
      } catch {
      }
      return n;
    }
    return e;
  }(JA)
), Lu = ["OL", "UL", "MENU"], Dt = function(A, e, t, r) {
  for (var n = e.firstChild, s = void 0; n; n = s)
    if (s = n.nextSibling, Sa(n) && n.data.trim().length > 0)
      t.textNodes.push(new pu(A, n, t.styles));
    else if (me(n))
      if (Ra(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(i) {
          return Dt(A, i, t, r);
        });
      else {
        var a = Da(A, n);
        a.styles.isVisible() && (xu(n, a, r) ? a.flags |= 4 : Du(a.styles) && (a.flags |= 2), Lu.indexOf(n.tagName) !== -1 && (a.flags |= 8), t.elements.push(a), n.slot, n.shadowRoot ? Dt(A, n.shadowRoot, a, r) : !Vt(n) && !Oa(n) && !_t(n) && Dt(A, n, a, r));
      }
}, Da = function(A, e) {
  return zr(e) ? new va(A, e) : Ma(e) ? new ya(A, e) : Oa(e) ? new Ia(A, e) : Tu(e) ? new ba(A, e) : Su(e) ? new Zr(A, e) : Ou(e) ? new on(A, e) : _t(e) ? new Ka(A, e) : Vt(e) ? new La(A, e) : Na(e) ? new xa(A, e) : new JA(A, e);
}, Ta = function(A, e) {
  var t = Da(A, e);
  return t.flags |= 4, Dt(A, e, t, t), t;
}, xu = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || cn(A) && t.styles.isTransparent();
}, Du = function(A) {
  return A.isPositioned() || A.isFloating();
}, Sa = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, me = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, jr = function(A) {
  return me(A) && typeof A.style < "u" && !Tt(A);
}, Tt = function(A) {
  return typeof A.className == "object";
}, Tu = function(A) {
  return A.tagName === "LI";
}, Su = function(A) {
  return A.tagName === "OL";
}, Ou = function(A) {
  return A.tagName === "INPUT";
}, Mu = function(A) {
  return A.tagName === "HTML";
}, Oa = function(A) {
  return A.tagName === "svg";
}, cn = function(A) {
  return A.tagName === "BODY";
}, Ma = function(A) {
  return A.tagName === "CANVAS";
}, gs = function(A) {
  return A.tagName === "VIDEO";
}, zr = function(A) {
  return A.tagName === "IMG";
}, Na = function(A) {
  return A.tagName === "IFRAME";
}, ws = function(A) {
  return A.tagName === "STYLE";
}, Nu = function(A) {
  return A.tagName === "SCRIPT";
}, Vt = function(A) {
  return A.tagName === "TEXTAREA";
}, _t = function(A) {
  return A.tagName === "SELECT";
}, Ra = function(A) {
  return A.tagName === "SLOT";
}, Qs = function(A) {
  return A.tagName.indexOf("-") > 0;
}, Ru = (
  /** @class */
  function() {
    function A() {
      this.counters = {};
    }
    return A.prototype.getCounterValue = function(e) {
      var t = this.counters[e];
      return t && t.length ? t[t.length - 1] : 1;
    }, A.prototype.getCounterValues = function(e) {
      var t = this.counters[e];
      return t || [];
    }, A.prototype.pop = function(e) {
      var t = this;
      e.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, A.prototype.parse = function(e) {
      var t = this, r = e.counterIncrement, n = e.counterReset, s = !0;
      r !== null && r.forEach(function(i) {
        var B = t.counters[i.counter];
        B && i.increment !== 0 && (s = !1, B.length || B.push(1), B[Math.max(0, B.length - 1)] += i.increment);
      });
      var a = [];
      return s && n.forEach(function(i) {
        var B = t.counters[i.counter];
        a.push(i.counter), B || (B = t.counters[i.counter] = []), B.push(i.reset);
      }), a;
    }, A;
  }()
), Cs = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Us = {
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
}, Vu = {
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
}, he = function(A, e, t, r, n, s) {
  return A < e || A > t ? tt(A, n, s.length > 0) : r.integers.reduce(function(a, i, B) {
    for (; A >= i; )
      A -= i, a += r.values[B];
    return a;
  }, "") + s;
}, Ga = function(A, e, t, r) {
  var n = "";
  do
    t || A--, n = r(A) + n, A /= e;
  while (A * e >= e);
  return n;
}, q = function(A, e, t, r, n) {
  var s = t - e + 1;
  return (A < 0 ? "-" : "") + (Ga(Math.abs(A), s, r, function(a) {
    return $(Math.floor(a % s) + e);
  }) + n);
}, Be = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r = e.length;
  return Ga(Math.abs(A), r, !1, function(n) {
    return e[Math.floor(n % r)];
  }) + t;
}, pe = 1, qA = 2, $A = 4, ke = 8, ZA = function(A, e, t, r, n, s) {
  if (A < -9999 || A > 9999)
    return tt(A, 4, n.length > 0);
  var a = Math.abs(A), i = n;
  if (a === 0)
    return e[0] + i;
  for (var B = 0; a > 0 && B <= 4; B++) {
    var o = a % 10;
    o === 0 && rA(s, pe) && i !== "" ? i = e[o] + i : o > 1 || o === 1 && B === 0 || o === 1 && B === 1 && rA(s, qA) || o === 1 && B === 1 && rA(s, $A) && A > 100 || o === 1 && B > 1 && rA(s, ke) ? i = e[o] + (B > 0 ? t[B - 1] : "") + i : o === 1 && B > 0 && (i = t[B - 1] + i), a = Math.floor(a / 10);
  }
  return (A < 0 ? r : "") + i;
}, hs = "十百千萬", Fs = "拾佰仟萬", ds = "マイナス", Er = "마이너스", tt = function(A, e, t) {
  var r = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", a = t ? " " : "";
  switch (e) {
    case 0:
      return "•" + a;
    case 1:
      return "◦" + a;
    case 2:
      return "◾" + a;
    case 5:
      var i = q(A, 48, 57, !0, r);
      return i.length < 4 ? "0" + i : i;
    case 4:
      return Be(A, "〇一二三四五六七八九", n);
    case 6:
      return he(A, 1, 3999, Cs, 3, r).toLowerCase();
    case 7:
      return he(A, 1, 3999, Cs, 3, r);
    case 8:
      return q(A, 945, 969, !1, r);
    case 9:
      return q(A, 97, 122, !1, r);
    case 10:
      return q(A, 65, 90, !1, r);
    case 11:
      return q(A, 1632, 1641, !0, r);
    case 12:
    case 49:
      return he(A, 1, 9999, Us, 3, r);
    case 35:
      return he(A, 1, 9999, Us, 3, r).toLowerCase();
    case 13:
      return q(A, 2534, 2543, !0, r);
    case 14:
    case 30:
      return q(A, 6112, 6121, !0, r);
    case 15:
      return Be(A, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return Be(A, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return ZA(A, "零一二三四五六七八九", hs, "負", n, qA | $A | ke);
    case 47:
      return ZA(A, "零壹貳參肆伍陸柒捌玖", Fs, "負", n, pe | qA | $A | ke);
    case 42:
      return ZA(A, "零一二三四五六七八九", hs, "负", n, qA | $A | ke);
    case 41:
      return ZA(A, "零壹贰叁肆伍陆柒捌玖", Fs, "负", n, pe | qA | $A | ke);
    case 26:
      return ZA(A, "〇一二三四五六七八九", "十百千万", ds, n, 0);
    case 25:
      return ZA(A, "零壱弐参四伍六七八九", "拾百千万", ds, n, pe | qA | $A);
    case 31:
      return ZA(A, "영일이삼사오육칠팔구", "십백천만", Er, s, pe | qA | $A);
    case 33:
      return ZA(A, "零一二三四五六七八九", "十百千萬", Er, s, 0);
    case 32:
      return ZA(A, "零壹貳參四五六七八九", "拾百千", Er, s, pe | qA | $A);
    case 18:
      return q(A, 2406, 2415, !0, r);
    case 20:
      return he(A, 1, 19999, Vu, 3, r);
    case 21:
      return q(A, 2790, 2799, !0, r);
    case 22:
      return q(A, 2662, 2671, !0, r);
    case 22:
      return he(A, 1, 10999, Gu, 3, r);
    case 23:
      return Be(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Be(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return q(A, 3302, 3311, !0, r);
    case 28:
      return Be(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return Be(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return q(A, 3792, 3801, !0, r);
    case 37:
      return q(A, 6160, 6169, !0, r);
    case 38:
      return q(A, 4160, 4169, !0, r);
    case 39:
      return q(A, 2918, 2927, !0, r);
    case 40:
      return q(A, 1776, 1785, !0, r);
    case 43:
      return q(A, 3046, 3055, !0, r);
    case 44:
      return q(A, 3174, 3183, !0, r);
    case 45:
      return q(A, 3664, 3673, !0, r);
    case 46:
      return q(A, 3872, 3881, !0, r);
    case 3:
    default:
      return q(A, 48, 57, !0, r);
  }
}, Va = "data-html2canvas-ignore", ps = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Ru(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = _u(e, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var s = e.defaultView.pageXOffset, a = e.defaultView.pageYOffset, i = n.contentWindow, B = i.document, o = Xu(n).then(function() {
        return FA(r, void 0, void 0, function() {
          var c, l;
          return wA(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(Zu), i && (i.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (i.scrollY !== t.top || i.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - t.left, i.scrollY - t.top, 0, 0))), c = this.options.onclone, l = this.clonedReferenceElement, typeof l > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : B.fonts && B.fonts.ready ? [4, B.fonts.ready] : [3, 2];
              case 1:
                u.sent(), u.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, ku(B)] : [3, 4];
              case 3:
                u.sent(), u.label = 4;
              case 4:
                return typeof c == "function" ? [2, Promise.resolve().then(function() {
                  return c(B, l);
                }).then(function() {
                  return n;
                })] : [2, n];
            }
          });
        });
      });
      return B.open(), B.write(Yu(document.doctype) + "<html></html>"), Wu(this.referenceElement.ownerDocument, s, a), B.replaceChild(B.adoptNode(this.documentElement), B.documentElement), B.close(), o;
    }, A.prototype.createElementClone = function(e) {
      if (Yr(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (Ma(e))
        return this.createCanvasClone(e);
      if (gs(e))
        return this.createVideoClone(e);
      if (ws(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return zr(t) && (zr(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Qs(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return mr(e.style, t), t;
    }, A.prototype.createStyleClone = function(e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(s, a) {
            return a && typeof a.cssText == "string" ? s + a.cssText : s;
          }, ""), n = e.cloneNode(!1);
          return n.textContent = r, n;
        }
      } catch (s) {
        if (this.context.logger.error("Unable to access cssRules property", s), s.name !== "SecurityError")
          throw s;
      }
      return e.cloneNode(!1);
    }, A.prototype.createCanvasClone = function(e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var r = e.ownerDocument.createElement("img");
        try {
          return r.src = e.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var n = e.cloneNode(!1);
      try {
        n.width = e.width, n.height = e.height;
        var s = e.getContext("2d"), a = n.getContext("2d");
        if (a)
          if (!this.options.allowTaint && s)
            a.putImageData(s.getImageData(0, 0, e.width, e.height), 0, 0);
          else {
            var i = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
            if (i) {
              var B = i.getContextAttributes();
              (B == null ? void 0 : B.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
            }
            a.drawImage(e, 0, 0);
          }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return n;
    }, A.prototype.createVideoClone = function(e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var n = e.ownerDocument.createElement("canvas");
      return n.width = e.offsetWidth, n.height = e.offsetHeight, n;
    }, A.prototype.appendChildNode = function(e, t, r) {
      (!me(t) || !Nu(t) && !t.hasAttribute(Va) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !me(t) || !ws(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, s = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; s; s = s.nextSibling)
        if (me(s) && Ra(s) && typeof s.assignedNodes == "function") {
          var a = s.assignedNodes();
          a.length && a.forEach(function(i) {
            return n.appendChildNode(t, i, r);
          });
        } else
          this.appendChildNode(t, s, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (Sa(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && me(e) && (jr(e) || Tt(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var s = r.getComputedStyle(e), a = r.getComputedStyle(e, ":before"), i = r.getComputedStyle(e, ":after");
        this.referenceElement === e && jr(n) && (this.clonedReferenceElement = n), cn(n) && qu(n);
        var B = this.counters.parse(new $n(this.context, s)), o = this.resolvePseudoContent(e, n, a, Ze.BEFORE);
        Qs(e) && (t = !0), gs(e) || this.cloneChildNodes(e, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(e, n, i, Ze.AFTER);
        return c && n.appendChild(c), this.counters.pop(B), (s && (this.options.copyStyles || Tt(e)) && !Na(e) || t) && mr(s, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]), (Vt(e) || _t(e)) && (Vt(n) || _t(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var s = this;
      if (r) {
        var a = r.content, i = t.ownerDocument;
        if (!(!i || !a || a === "none" || a === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new $n(this.context, r));
          var B = new Tl(this.context, r), o = i.createElement("html2canvaspseudoelement");
          mr(r, o), B.content.forEach(function(l) {
            if (l.type === 0)
              o.appendChild(i.createTextNode(l.value));
            else if (l.type === 22) {
              var u = i.createElement("img");
              u.src = l.value, u.style.opacity = "1", o.appendChild(u);
            } else if (l.type === 18) {
              if (l.name === "attr") {
                var d = l.values.filter(J);
                d.length && o.appendChild(i.createTextNode(e.getAttribute(d[0].value) || ""));
              } else if (l.name === "counter") {
                var w = l.values.filter(ve), g = w[0], D = w[1];
                if (g && J(g)) {
                  var p = s.counters.getCounterValue(g.value), F = D && J(D) ? Jr.parse(s.context, D.value) : 3;
                  o.appendChild(i.createTextNode(tt(p, F, !1)));
                }
              } else if (l.name === "counters") {
                var O = l.values.filter(ve), g = O[0], S = O[1], D = O[2];
                if (g && J(g)) {
                  var m = s.counters.getCounterValues(g.value), h = D && J(D) ? Jr.parse(s.context, D.value) : 3, Q = S && S.type === 0 ? S.value : "", L = m.map(function(tA) {
                    return tt(tA, h, !1);
                  }).join(Q);
                  o.appendChild(i.createTextNode(L));
                }
              }
            } else if (l.type === 20)
              switch (l.value) {
                case "open-quote":
                  o.appendChild(i.createTextNode(qn(B.quotes, s.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(i.createTextNode(qn(B.quotes, --s.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(i.createTextNode(l.value));
              }
          }), o.className = qr + " " + $r;
          var c = n === Ze.BEFORE ? " " + qr : " " + $r;
          return Tt(t) ? t.className.baseValue += c : t.className += c, o;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
    }, A;
  }()
), Ze;
(function(A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(Ze || (Ze = {}));
var _u = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(Va, "true"), A.body.appendChild(t), t;
}, Pu = function(A) {
  return new Promise(function(e) {
    if (A.complete) {
      e();
      return;
    }
    if (!A.src) {
      e();
      return;
    }
    A.onload = e, A.onerror = e;
  });
}, ku = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(Pu));
}, Xu = function(A) {
  return new Promise(function(e, t) {
    var r = A.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var n = r.document;
    r.onload = A.onload = function() {
      r.onload = A.onload = null;
      var s = setInterval(function() {
        n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(s), e(A));
      }, 50);
    };
  });
}, Ju = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], mr = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    Ju.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, Yu = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, Wu = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, Zu = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, ju = ":before", zu = ":after", qr = "___html2canvas___pseudoelement_before", $r = "___html2canvas___pseudoelement_after", Es = `{
    content: "" !important;
    display: none !important;
}`, qu = function(A) {
  $u(A, "." + qr + ju + Es + `
         .` + $r + zu + Es);
}, $u = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r);
  }
}, _a = (
  /** @class */
  function() {
    function A() {
    }
    return A.getOrigin = function(e) {
      var t = A._link;
      return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, A.isSameOrigin = function(e) {
      return A.getOrigin(e) === A._origin;
    }, A.setContext = function(e) {
      A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href);
    }, A._origin = "about:blank", A;
  }()
), Af = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (vr(e) || nf(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return FA(this, void 0, void 0, function() {
        var t, r, n, s, a = this;
        return wA(this, function(i) {
          switch (i.label) {
            case 0:
              return t = _a.isSameOrigin(e), r = !Hr(e) && this._options.useCORS === !0 && cA.SUPPORT_CORS_IMAGES && !t, n = !Hr(e) && !t && !vr(e) && typeof this._options.proxy == "string" && cA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !Hr(e) && !vr(e) && !n && !r ? [
                2
                /*return*/
              ] : (s = e, n ? [4, this.proxy(s)] : [3, 2]);
            case 1:
              s = i.sent(), i.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(B, o) {
                var c = new Image();
                c.onload = function() {
                  return B(c);
                }, c.onerror = o, (sf(s) || r) && (c.crossOrigin = "anonymous"), c.src = s, c.complete === !0 && setTimeout(function() {
                  return B(c);
                }, 500), a._options.imageTimeout > 0 && setTimeout(function() {
                  return o("Timed out (" + a._options.imageTimeout + "ms) loading image");
                }, a._options.imageTimeout);
              })];
            case 3:
              return [2, i.sent()];
          }
        });
      });
    }, A.prototype.has = function(e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function(e) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var n = e.substring(0, 256);
      return new Promise(function(s, a) {
        var i = cA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", B = new XMLHttpRequest();
        B.onload = function() {
          if (B.status === 200)
            if (i === "text")
              s(B.response);
            else {
              var l = new FileReader();
              l.addEventListener("load", function() {
                return s(l.result);
              }, !1), l.addEventListener("error", function(u) {
                return a(u);
              }, !1), l.readAsDataURL(B.response);
            }
          else
            a("Failed to proxy resource " + n + " with status code " + B.status);
        }, B.onerror = a;
        var o = r.indexOf("?") > -1 ? "&" : "?";
        if (B.open("GET", "" + r + o + "url=" + encodeURIComponent(e) + "&responseType=" + i), i !== "text" && B instanceof XMLHttpRequest && (B.responseType = i), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          B.timeout = c, B.ontimeout = function() {
            return a("Timed out (" + c + "ms) proxying " + n);
          };
        }
        B.send();
      });
    }, A;
  }()
), ef = /^data:image\/svg\+xml/i, tf = /^data:image\/.*;base64,/i, rf = /^data:image\/.*/i, nf = function(A) {
  return cA.SUPPORT_SVG_DRAWING || !af(A);
}, Hr = function(A) {
  return rf.test(A);
}, sf = function(A) {
  return tf.test(A);
}, vr = function(A) {
  return A.substr(0, 4) === "blob";
}, af = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || ef.test(A);
}, E = (
  /** @class */
  function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  }()
), Fe = function(A, e, t) {
  return new E(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, yt = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = Fe(this.start, this.startControl, e), n = Fe(this.startControl, this.endControl, e), s = Fe(this.endControl, this.end, e), a = Fe(r, n, e), i = Fe(n, s, e), B = Fe(a, i, e);
      return t ? new A(this.start, r, a, B) : new A(B, i, s, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), LA = function(A) {
  return A.type === 1;
}, Bf = (
  /** @class */
  function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = _e(t.borderTopLeftRadius, r.width, r.height), s = n[0], a = n[1], i = _e(t.borderTopRightRadius, r.width, r.height), B = i[0], o = i[1], c = _e(t.borderBottomRightRadius, r.width, r.height), l = c[0], u = c[1], d = _e(t.borderBottomLeftRadius, r.width, r.height), w = d[0], g = d[1], D = [];
      D.push((s + B) / r.width), D.push((w + l) / r.width), D.push((a + g) / r.height), D.push((o + u) / r.height);
      var p = Math.max.apply(Math, D);
      p > 1 && (s /= p, a /= p, B /= p, o /= p, l /= p, u /= p, w /= p, g /= p);
      var F = r.width - B, O = r.height - u, S = r.width - l, m = r.height - g, h = t.borderTopWidth, Q = t.borderRightWidth, L = t.borderBottomWidth, b = t.borderLeftWidth, k = Y(t.paddingTop, e.bounds.width), tA = Y(t.paddingRight, e.bounds.width), j = Y(t.paddingBottom, e.bounds.width), R = Y(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = s > 0 || a > 0 ? Z(r.left + b / 3, r.top + h / 3, s - b / 3, a - h / 3, P.TOP_LEFT) : new E(r.left + b / 3, r.top + h / 3), this.topRightBorderDoubleOuterBox = s > 0 || a > 0 ? Z(r.left + F, r.top + h / 3, B - Q / 3, o - h / 3, P.TOP_RIGHT) : new E(r.left + r.width - Q / 3, r.top + h / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || u > 0 ? Z(r.left + S, r.top + O, l - Q / 3, u - L / 3, P.BOTTOM_RIGHT) : new E(r.left + r.width - Q / 3, r.top + r.height - L / 3), this.bottomLeftBorderDoubleOuterBox = w > 0 || g > 0 ? Z(r.left + b / 3, r.top + m, w - b / 3, g - L / 3, P.BOTTOM_LEFT) : new E(r.left + b / 3, r.top + r.height - L / 3), this.topLeftBorderDoubleInnerBox = s > 0 || a > 0 ? Z(r.left + b * 2 / 3, r.top + h * 2 / 3, s - b * 2 / 3, a - h * 2 / 3, P.TOP_LEFT) : new E(r.left + b * 2 / 3, r.top + h * 2 / 3), this.topRightBorderDoubleInnerBox = s > 0 || a > 0 ? Z(r.left + F, r.top + h * 2 / 3, B - Q * 2 / 3, o - h * 2 / 3, P.TOP_RIGHT) : new E(r.left + r.width - Q * 2 / 3, r.top + h * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || u > 0 ? Z(r.left + S, r.top + O, l - Q * 2 / 3, u - L * 2 / 3, P.BOTTOM_RIGHT) : new E(r.left + r.width - Q * 2 / 3, r.top + r.height - L * 2 / 3), this.bottomLeftBorderDoubleInnerBox = w > 0 || g > 0 ? Z(r.left + b * 2 / 3, r.top + m, w - b * 2 / 3, g - L * 2 / 3, P.BOTTOM_LEFT) : new E(r.left + b * 2 / 3, r.top + r.height - L * 2 / 3), this.topLeftBorderStroke = s > 0 || a > 0 ? Z(r.left + b / 2, r.top + h / 2, s - b / 2, a - h / 2, P.TOP_LEFT) : new E(r.left + b / 2, r.top + h / 2), this.topRightBorderStroke = s > 0 || a > 0 ? Z(r.left + F, r.top + h / 2, B - Q / 2, o - h / 2, P.TOP_RIGHT) : new E(r.left + r.width - Q / 2, r.top + h / 2), this.bottomRightBorderStroke = l > 0 || u > 0 ? Z(r.left + S, r.top + O, l - Q / 2, u - L / 2, P.BOTTOM_RIGHT) : new E(r.left + r.width - Q / 2, r.top + r.height - L / 2), this.bottomLeftBorderStroke = w > 0 || g > 0 ? Z(r.left + b / 2, r.top + m, w - b / 2, g - L / 2, P.BOTTOM_LEFT) : new E(r.left + b / 2, r.top + r.height - L / 2), this.topLeftBorderBox = s > 0 || a > 0 ? Z(r.left, r.top, s, a, P.TOP_LEFT) : new E(r.left, r.top), this.topRightBorderBox = B > 0 || o > 0 ? Z(r.left + F, r.top, B, o, P.TOP_RIGHT) : new E(r.left + r.width, r.top), this.bottomRightBorderBox = l > 0 || u > 0 ? Z(r.left + S, r.top + O, l, u, P.BOTTOM_RIGHT) : new E(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = w > 0 || g > 0 ? Z(r.left, r.top + m, w, g, P.BOTTOM_LEFT) : new E(r.left, r.top + r.height), this.topLeftPaddingBox = s > 0 || a > 0 ? Z(r.left + b, r.top + h, Math.max(0, s - b), Math.max(0, a - h), P.TOP_LEFT) : new E(r.left + b, r.top + h), this.topRightPaddingBox = B > 0 || o > 0 ? Z(r.left + Math.min(F, r.width - Q), r.top + h, F > r.width + Q ? 0 : Math.max(0, B - Q), Math.max(0, o - h), P.TOP_RIGHT) : new E(r.left + r.width - Q, r.top + h), this.bottomRightPaddingBox = l > 0 || u > 0 ? Z(r.left + Math.min(S, r.width - b), r.top + Math.min(O, r.height - L), Math.max(0, l - Q), Math.max(0, u - L), P.BOTTOM_RIGHT) : new E(r.left + r.width - Q, r.top + r.height - L), this.bottomLeftPaddingBox = w > 0 || g > 0 ? Z(r.left + b, r.top + Math.min(m, r.height - L), Math.max(0, w - b), Math.max(0, g - L), P.BOTTOM_LEFT) : new E(r.left + b, r.top + r.height - L), this.topLeftContentBox = s > 0 || a > 0 ? Z(r.left + b + R, r.top + h + k, Math.max(0, s - (b + R)), Math.max(0, a - (h + k)), P.TOP_LEFT) : new E(r.left + b + R, r.top + h + k), this.topRightContentBox = B > 0 || o > 0 ? Z(r.left + Math.min(F, r.width + b + R), r.top + h + k, F > r.width + b + R ? 0 : B - b + R, o - (h + k), P.TOP_RIGHT) : new E(r.left + r.width - (Q + tA), r.top + h + k), this.bottomRightContentBox = l > 0 || u > 0 ? Z(r.left + Math.min(S, r.width - (b + R)), r.top + Math.min(O, r.height + h + k), Math.max(0, l - (Q + tA)), u - (L + j), P.BOTTOM_RIGHT) : new E(r.left + r.width - (Q + tA), r.top + r.height - (L + j)), this.bottomLeftContentBox = w > 0 || g > 0 ? Z(r.left + b + R, r.top + m, Math.max(0, w - (b + R)), g - (L + j), P.BOTTOM_LEFT) : new E(r.left + b + R, r.top + r.height - (L + j));
    }
    return A;
  }()
), P;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(P || (P = {}));
var Z = function(A, e, t, r, n) {
  var s = 4 * ((Math.sqrt(2) - 1) / 3), a = t * s, i = r * s, B = A + t, o = e + r;
  switch (n) {
    case P.TOP_LEFT:
      return new yt(new E(A, o), new E(A, o - i), new E(B - a, e), new E(B, e));
    case P.TOP_RIGHT:
      return new yt(new E(A, e), new E(A + a, e), new E(B, o - i), new E(B, o));
    case P.BOTTOM_RIGHT:
      return new yt(new E(B, e), new E(B, e + i), new E(A + a, o), new E(A, o));
    case P.BOTTOM_LEFT:
    default:
      return new yt(new E(B, o), new E(B - a, o), new E(A, e + i), new E(A, e));
  }
}, Pt = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, of = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, kt = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, cf = (
  /** @class */
  function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  }()
), It = (
  /** @class */
  function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  }()
), lf = (
  /** @class */
  function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), uf = function(A) {
  return A.type === 0;
}, Pa = function(A) {
  return A.type === 1;
}, ff = function(A) {
  return A.type === 2;
}, ms = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, gf = function(A, e, t, r, n) {
  return A.map(function(s, a) {
    switch (a) {
      case 0:
        return s.add(e, t);
      case 1:
        return s.add(e + r, t);
      case 2:
        return s.add(e + r, t + n);
      case 3:
        return s.add(e, t + n);
    }
    return s;
  });
}, ka = (
  /** @class */
  function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), Xa = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new Bf(this.container), this.container.styles.opacity < 1 && this.effects.push(new lf(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
        this.effects.push(new cf(r, n, s));
      }
      if (this.container.styles.overflowX !== 0) {
        var a = Pt(this.curves), i = kt(this.curves);
        ms(a, i) ? this.effects.push(new It(
          a,
          6
          /* CONTENT */
        )) : (this.effects.push(new It(
          a,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new It(
          i,
          4
          /* CONTENT */
        )));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var s = r.effects.filter(function(B) {
          return !Pa(B);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, s), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var a = Pt(r.curves), i = kt(r.curves);
            ms(a, i) || n.unshift(new It(
              i,
              6
              /* CONTENT */
            ));
          }
        } else
          n.unshift.apply(n, s);
        r = r.parent;
      }
      return n.filter(function(B) {
        return rA(B.target, e);
      });
    }, A;
  }()
), An = function(A, e, t, r) {
  A.container.elements.forEach(function(n) {
    var s = rA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), a = rA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), i = new Xa(n, A);
    rA(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(i);
    var B = rA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (s || a) {
      var o = s || n.styles.isPositioned() ? t : e, c = new ka(i);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var l = n.styles.zIndex.order;
        if (l < 0) {
          var u = 0;
          o.negativeZIndex.some(function(w, g) {
            return l > w.element.container.styles.zIndex.order ? (u = g, !1) : u > 0;
          }), o.negativeZIndex.splice(u, 0, c);
        } else if (l > 0) {
          var d = 0;
          o.positiveZIndex.some(function(w, g) {
            return l >= w.element.container.styles.zIndex.order ? (d = g + 1, !1) : d > 0;
          }), o.positiveZIndex.splice(d, 0, c);
        } else
          o.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        n.styles.isFloating() ? o.nonPositionedFloats.push(c) : o.nonPositionedInlineLevel.push(c);
      An(i, c, s ? c : t, B);
    } else
      n.styles.isInlineLevel() ? e.inlineLevel.push(i) : e.nonInlineLevel.push(i), An(i, e, t, B);
    rA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && Ja(n, B);
  });
}, Ja = function(A, e) {
  for (var t = A instanceof Zr ? A.start : 1, r = A instanceof Zr ? A.reversed : !1, n = 0; n < e.length; n++) {
    var s = e[n];
    s.container instanceof ba && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = tt(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, wf = function(A) {
  var e = new Xa(A, null), t = new ka(e), r = [];
  return An(e, t, t, r), Ja(e.container, r), t;
}, Hs = function(A, e) {
  switch (e) {
    case 0:
      return DA(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
      return DA(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
      return DA(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return DA(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
  }
}, Qf = function(A, e) {
  switch (e) {
    case 0:
      return DA(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
    case 1:
      return DA(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
    case 2:
      return DA(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return DA(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
  }
}, Cf = function(A, e) {
  switch (e) {
    case 0:
      return DA(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
    case 1:
      return DA(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
    case 2:
      return DA(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return DA(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
  }
}, Uf = function(A, e) {
  switch (e) {
    case 0:
      return bt(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
      return bt(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
      return bt(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
      return bt(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
  }
}, bt = function(A, e) {
  var t = [];
  return LA(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), LA(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, DA = function(A, e, t, r) {
  var n = [];
  return LA(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A), LA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), LA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), LA(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e), n;
}, Ya = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Xt = function(A) {
  var e = A.styles, t = A.bounds, r = Y(e.paddingLeft, t.width), n = Y(e.paddingRight, t.width), s = Y(e.paddingTop, t.width), a = Y(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, s + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + s + a));
}, hf = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? Xt(e) : Ya(e);
}, Ff = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? Xt(e) : Ya(e);
}, yr = function(A, e, t) {
  var r = hf(Ee(A.styles.backgroundOrigin, e), A), n = Ff(Ee(A.styles.backgroundClip, e), A), s = df(Ee(A.styles.backgroundSize, e), t, r), a = s[0], i = s[1], B = _e(Ee(A.styles.backgroundPosition, e), r.width - a, r.height - i), o = pf(Ee(A.styles.backgroundRepeat, e), B, s, r, n), c = Math.round(r.left + B[0]), l = Math.round(r.top + B[1]);
  return [o, c, l, a, i];
}, de = function(A) {
  return J(A) && A.value === He.AUTO;
}, Kt = function(A) {
  return typeof A == "number";
}, df = function(A, e, t) {
  var r = e[0], n = e[1], s = e[2], a = A[0], i = A[1];
  if (!a)
    return [0, 0];
  if (eA(a) && i && eA(i))
    return [Y(a, t.width), Y(i, t.height)];
  var B = Kt(s);
  if (J(a) && (a.value === He.CONTAIN || a.value === He.COVER)) {
    if (Kt(s)) {
      var o = t.width / t.height;
      return o < s != (a.value === He.COVER) ? [t.width, t.width / s] : [t.height * s, t.height];
    }
    return [t.width, t.height];
  }
  var c = Kt(r), l = Kt(n), u = c || l;
  if (de(a) && (!i || de(i))) {
    if (c && l)
      return [r, n];
    if (!B && !u)
      return [t.width, t.height];
    if (u && B) {
      var d = c ? r : n * s, w = l ? n : r / s;
      return [d, w];
    }
    var g = c ? r : t.width, D = l ? n : t.height;
    return [g, D];
  }
  if (B) {
    var p = 0, F = 0;
    return eA(a) ? p = Y(a, t.width) : eA(i) && (F = Y(i, t.height)), de(a) ? p = F * s : (!i || de(i)) && (F = p / s), [p, F];
  }
  var O = null, S = null;
  if (eA(a) ? O = Y(a, t.width) : i && eA(i) && (S = Y(i, t.height)), O !== null && (!i || de(i)) && (S = c && l ? O / r * n : t.height), S !== null && de(a) && (O = c && l ? S / n * r : t.width), O !== null && S !== null)
    return [O, S];
  throw new Error("Unable to calculate background-size for element");
}, Ee = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, pf = function(A, e, t, r, n) {
  var s = e[0], a = e[1], i = t[0], B = t[1];
  switch (A) {
    case 2:
      return [
        new E(Math.round(r.left), Math.round(r.top + a)),
        new E(Math.round(r.left + r.width), Math.round(r.top + a)),
        new E(Math.round(r.left + r.width), Math.round(B + r.top + a)),
        new E(Math.round(r.left), Math.round(B + r.top + a))
      ];
    case 3:
      return [
        new E(Math.round(r.left + s), Math.round(r.top)),
        new E(Math.round(r.left + s + i), Math.round(r.top)),
        new E(Math.round(r.left + s + i), Math.round(r.height + r.top)),
        new E(Math.round(r.left + s), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new E(Math.round(r.left + s), Math.round(r.top + a)),
        new E(Math.round(r.left + s + i), Math.round(r.top + a)),
        new E(Math.round(r.left + s + i), Math.round(r.top + a + B)),
        new E(Math.round(r.left + s), Math.round(r.top + a + B))
      ];
    default:
      return [
        new E(Math.round(n.left), Math.round(n.top)),
        new E(Math.round(n.left + n.width), Math.round(n.top)),
        new E(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new E(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, Ef = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", vs = "Hidden Text", mf = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), s = this._document.createElement("span"), a = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", a.appendChild(r), n.src = Ef, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", s.style.fontFamily = e, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(vs)), r.appendChild(s), r.appendChild(n);
      var i = n.offsetTop - s.offsetTop + 2;
      r.removeChild(s), r.appendChild(this._document.createTextNode(vs)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var B = n.offsetTop - r.offsetTop + 2;
      return a.removeChild(r), { baseline: i, middle: B };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }()
), Wa = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), Hf = 1e4, vf = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new mf(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), ff(t) && (this.ctx.globalAlpha = t.opacity), uf(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Pa(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return FA(this, void 0, void 0, function() {
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
    }, e.prototype.renderNode = function(t) {
      return FA(this, void 0, void 0, function() {
        return wA(this, function(r) {
          switch (r.label) {
            case 0:
              if (rA(
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
    }, e.prototype.renderTextWithLetterSpacing = function(t, r, n) {
      var s = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var a = Bn(t.text);
        a.reduce(function(i, B) {
          return s.ctx.fillText(B, i, t.bounds.top + n), i + s.ctx.measureText(B).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(a) {
        return a === "normal" || a === "small-caps";
      }).join(""), n = Lf(t.fontFamily).join(", "), s = st(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, s, n].join(" "),
        n,
        s
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return FA(this, void 0, void 0, function() {
        var n, s, a, i, B, o, c, l, u = this;
        return wA(this, function(d) {
          return n = this.createFontStyle(r), s = n[0], a = n[1], i = n[2], this.ctx.font = s, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", B = this.fontMetrics.getMetrics(a, i), o = B.baseline, c = B.middle, l = r.paintOrder, t.textBounds.forEach(function(w) {
            l.forEach(function(g) {
              switch (g) {
                case 0:
                  u.ctx.fillStyle = BA(r.color), u.renderTextWithLetterSpacing(w, r.letterSpacing, o);
                  var D = r.textShadow;
                  D.length && w.text.trim().length && (D.slice(0).reverse().forEach(function(p) {
                    u.ctx.shadowColor = BA(p.color), u.ctx.shadowOffsetX = p.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = p.offsetY.number * u.options.scale, u.ctx.shadowBlur = p.blur.number, u.renderTextWithLetterSpacing(w, r.letterSpacing, o);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = BA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(p) {
                    switch (p) {
                      case 1:
                        u.ctx.fillRect(w.bounds.left, Math.round(w.bounds.top + o), w.bounds.width, 1);
                        break;
                      case 2:
                        u.ctx.fillRect(w.bounds.left, Math.round(w.bounds.top), w.bounds.width, 1);
                        break;
                      case 3:
                        u.ctx.fillRect(w.bounds.left, Math.ceil(w.bounds.top + c), w.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && w.text.trim().length && (u.ctx.strokeStyle = BA(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(w.text, w.bounds.left, w.bounds.top + o)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderReplacedElement = function(t, r, n) {
      if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var s = Xt(t), a = kt(r);
        this.path(a), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return FA(this, void 0, void 0, function() {
        var r, n, s, a, i, B, F, F, o, c, l, u, S, d, w, m, g, D, p, F, O, S, m;
        return wA(this, function(h) {
          switch (h.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, s = r.styles, a = 0, i = r.textNodes, h.label = 1;
            case 1:
              return a < i.length ? (B = i[a], [4, this.renderTextNode(B, s)]) : [3, 4];
            case 2:
              h.sent(), h.label = 3;
            case 3:
              return a++, [3, 1];
            case 4:
              if (!(r instanceof va))
                return [3, 8];
              h.label = 5;
            case 5:
              return h.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return F = h.sent(), this.renderReplacedElement(r, n, F), [3, 8];
            case 7:
              return h.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof ya && this.renderReplacedElement(r, n, r.canvas), !(r instanceof Ia))
                return [3, 12];
              h.label = 9;
            case 9:
              return h.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return F = h.sent(), this.renderReplacedElement(r, n, F), [3, 12];
            case 11:
              return h.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof xa && r.tree ? (o = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, o.render(r.tree)]) : [3, 14];
            case 13:
              c = h.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), h.label = 14;
            case 14:
              if (r instanceof on && (l = Math.min(r.bounds.width, r.bounds.height), r.type === Rt ? r.checked && (this.ctx.save(), this.path([
                new E(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79),
                new E(r.bounds.left + l * 0.16, r.bounds.top + l * 0.5549),
                new E(r.bounds.left + l * 0.27347, r.bounds.top + l * 0.44071),
                new E(r.bounds.left + l * 0.39694, r.bounds.top + l * 0.5649),
                new E(r.bounds.left + l * 0.72983, r.bounds.top + l * 0.23),
                new E(r.bounds.left + l * 0.84, r.bounds.top + l * 0.34085),
                new E(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79)
              ]), this.ctx.fillStyle = BA(fs), this.ctx.fill(), this.ctx.restore()) : r.type === Gt && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + l / 2, r.bounds.top + l / 2, l / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = BA(fs), this.ctx.fill(), this.ctx.restore())), yf(r) && r.value.length) {
                switch (u = this.createFontStyle(s), S = u[0], d = u[1], w = this.fontMetrics.getMetrics(S, d).baseline, this.ctx.font = S, this.ctx.fillStyle = BA(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = bf(r.styles.textAlign), m = Xt(r), g = 0, r.styles.textAlign) {
                  case 1:
                    g += m.width / 2;
                    break;
                  case 2:
                    g += m.width;
                    break;
                }
                D = m.add(g, 0, 0, -m.height / 2 + 1), this.ctx.save(), this.path([
                  new E(m.left, m.top),
                  new E(m.left + m.width, m.top),
                  new E(m.left + m.width, m.top + m.height),
                  new E(m.left, m.top + m.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new We(r.value, D), s.letterSpacing, w), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!rA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (p = r.styles.listStyleImage, p.type !== 0)
                return [3, 18];
              F = void 0, O = p.url, h.label = 15;
            case 15:
              return h.trys.push([15, 17, , 18]), [4, this.context.cache.match(O)];
            case 16:
              return F = h.sent(), this.ctx.drawImage(F, r.bounds.left - (F.width + 10), r.bounds.top), [3, 18];
            case 17:
              return h.sent(), this.context.logger.error("Error loading list-style-image " + O), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (S = this.createFontStyle(s)[0], this.ctx.font = S, this.ctx.fillStyle = BA(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", m = new zA(r.bounds.left, r.bounds.top + Y(r.styles.paddingTop, r.bounds.width), r.bounds.width, jn(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new We(t.listValue, m), s.letterSpacing, jn(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), h.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return FA(this, void 0, void 0, function() {
        var r, n, p, s, a, p, i, B, p, o, c, p, l, u, p, d, w, p, g, D, p;
        return wA(this, function(F) {
          switch (F.label) {
            case 0:
              if (rA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              F.sent(), r = 0, n = t.negativeZIndex, F.label = 2;
            case 2:
              return r < n.length ? (p = n[r], [4, this.renderStack(p)]) : [3, 5];
            case 3:
              F.sent(), F.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              F.sent(), s = 0, a = t.nonInlineLevel, F.label = 7;
            case 7:
              return s < a.length ? (p = a[s], [4, this.renderNode(p)]) : [3, 10];
            case 8:
              F.sent(), F.label = 9;
            case 9:
              return s++, [3, 7];
            case 10:
              i = 0, B = t.nonPositionedFloats, F.label = 11;
            case 11:
              return i < B.length ? (p = B[i], [4, this.renderStack(p)]) : [3, 14];
            case 12:
              F.sent(), F.label = 13;
            case 13:
              return i++, [3, 11];
            case 14:
              o = 0, c = t.nonPositionedInlineLevel, F.label = 15;
            case 15:
              return o < c.length ? (p = c[o], [4, this.renderStack(p)]) : [3, 18];
            case 16:
              F.sent(), F.label = 17;
            case 17:
              return o++, [3, 15];
            case 18:
              l = 0, u = t.inlineLevel, F.label = 19;
            case 19:
              return l < u.length ? (p = u[l], [4, this.renderNode(p)]) : [3, 22];
            case 20:
              F.sent(), F.label = 21;
            case 21:
              return l++, [3, 19];
            case 22:
              d = 0, w = t.zeroOrAutoZIndexOrTransformedOrOpacity, F.label = 23;
            case 23:
              return d < w.length ? (p = w[d], [4, this.renderStack(p)]) : [3, 26];
            case 24:
              F.sent(), F.label = 25;
            case 25:
              return d++, [3, 23];
            case 26:
              g = 0, D = t.positiveZIndex, F.label = 27;
            case 27:
              return g < D.length ? (p = D[g], [4, this.renderStack(p)]) : [3, 30];
            case 28:
              F.sent(), F.label = 29;
            case 29:
              return g++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, e.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, e.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(n, s) {
        var a = LA(n) ? n.start : n;
        s === 0 ? r.ctx.moveTo(a.x, a.y) : r.ctx.lineTo(a.x, a.y), LA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, e.prototype.renderRepeat = function(t, r, n, s) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, s), this.ctx.fill(), this.ctx.translate(-n, -s);
    }, e.prototype.resizeImage = function(t, r, n) {
      var s;
      if (t.width === r && t.height === n)
        return t;
      var a = (s = this.canvas.ownerDocument) !== null && s !== void 0 ? s : document, i = a.createElement("canvas");
      i.width = Math.max(1, r), i.height = Math.max(1, n);
      var B = i.getContext("2d");
      return B.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), i;
    }, e.prototype.renderBackgroundImage = function(t) {
      return FA(this, void 0, void 0, function() {
        var r, n, s, a, i, B;
        return wA(this, function(o) {
          switch (o.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var l, u, d, k, AA, sA, R, z, L, w, k, AA, sA, R, z, g, D, p, F, O, S, m, h, Q, L, b, k, tA, j, R, z, TA, AA, sA, SA, CA, HA, OA, vA, yA, bA, fA;
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
                      return l && (d = yr(t, r, [
                        l.width,
                        l.height,
                        l.width / l.height
                      ]), k = d[0], AA = d[1], sA = d[2], R = d[3], z = d[4], L = s.ctx.createPattern(s.resizeImage(l, R, z), "repeat"), s.renderRepeat(k, L, AA, sA)), [3, 6];
                    case 5:
                      lc(c) ? (w = yr(t, r, [null, null, null]), k = w[0], AA = w[1], sA = w[2], R = w[3], z = w[4], g = ac(c.angle, R, z), D = g[0], p = g[1], F = g[2], O = g[3], S = g[4], m = document.createElement("canvas"), m.width = R, m.height = z, h = m.getContext("2d"), Q = h.createLinearGradient(p, O, F, S), Wn(c.stops, D).forEach(function(YA) {
                        return Q.addColorStop(YA.stop, BA(YA.color));
                      }), h.fillStyle = Q, h.fillRect(0, 0, R, z), R > 0 && z > 0 && (L = s.ctx.createPattern(m, "repeat"), s.renderRepeat(k, L, AA, sA))) : uc(c) && (b = yr(t, r, [
                        null,
                        null,
                        null
                      ]), k = b[0], tA = b[1], j = b[2], R = b[3], z = b[4], TA = c.position.length === 0 ? [nn] : c.position, AA = Y(TA[0], R), sA = Y(TA[TA.length - 1], z), SA = Bc(c, AA, sA, R, z), CA = SA[0], HA = SA[1], CA > 0 && HA > 0 && (OA = s.ctx.createRadialGradient(tA + AA, j + sA, 0, tA + AA, j + sA, CA), Wn(c.stops, CA * 2).forEach(function(YA) {
                        return OA.addColorStop(YA.stop, BA(YA.color));
                      }), s.path(k), s.ctx.fillStyle = OA, CA !== HA ? (vA = t.bounds.left + 0.5 * t.bounds.width, yA = t.bounds.top + 0.5 * t.bounds.height, bA = HA / CA, fA = 1 / bA, s.ctx.save(), s.ctx.translate(vA, yA), s.ctx.transform(1, 0, 0, bA, 0, 0), s.ctx.translate(-vA, -yA), s.ctx.fillRect(tA, fA * (j - yA) + yA, R, z * fA), s.ctx.restore()) : s.ctx.fill())), GA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, s = this, a = 0, i = t.styles.backgroundImage.slice(0).reverse(), o.label = 1;
            case 1:
              return a < i.length ? (B = i[a], [5, n(B)]) : [3, 4];
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
    }, e.prototype.renderSolidBorder = function(t, r, n) {
      return FA(this, void 0, void 0, function() {
        return wA(this, function(s) {
          return this.path(Hs(n, r)), this.ctx.fillStyle = BA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, s) {
      return FA(this, void 0, void 0, function() {
        var a, i;
        return wA(this, function(B) {
          switch (B.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, s)] : [3, 2];
            case 1:
              return B.sent(), [
                2
                /*return*/
              ];
            case 2:
              return a = Qf(s, n), this.path(a), this.ctx.fillStyle = BA(t), this.ctx.fill(), i = Cf(s, n), this.path(i), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return FA(this, void 0, void 0, function() {
        var r, n, s, a, i, B, o, c, l = this;
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
              ], a = If(Ee(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(a), this.ctx.clip(), se(r.backgroundColor) || (this.ctx.fillStyle = BA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(d) {
                l.ctx.save();
                var w = Pt(t.curves), g = d.inset ? 0 : Hf, D = gf(w, -g + (d.inset ? 1 : -1) * d.spread.number, (d.inset ? 1 : -1) * d.spread.number, d.spread.number * (d.inset ? -2 : 2), d.spread.number * (d.inset ? -2 : 2));
                d.inset ? (l.path(w), l.ctx.clip(), l.mask(D)) : (l.mask(w), l.ctx.clip(), l.path(D)), l.ctx.shadowOffsetX = d.offsetX.number + g, l.ctx.shadowOffsetY = d.offsetY.number, l.ctx.shadowColor = BA(d.color), l.ctx.shadowBlur = d.blur.number, l.ctx.fillStyle = d.inset ? BA(d.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
              }), u.label = 2;
            case 2:
              i = 0, B = 0, o = s, u.label = 3;
            case 3:
              return B < o.length ? (c = o[B], c.style !== 0 && !se(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                i,
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
                i,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return u.sent(), [3, 11];
            case 7:
              return c.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, i, t.curves)];
            case 8:
              return u.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(c.color, i, t.curves)];
            case 10:
              u.sent(), u.label = 11;
            case 11:
              i++, u.label = 12;
            case 12:
              return B++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderDashedDottedBorder = function(t, r, n, s, a) {
      return FA(this, void 0, void 0, function() {
        var i, B, o, c, l, u, d, w, g, D, p, F, O, S, m, h, m, h;
        return wA(this, function(Q) {
          return this.ctx.save(), i = Uf(s, n), B = Hs(s, n), a === 2 && (this.path(B), this.ctx.clip()), LA(B[0]) ? (o = B[0].start.x, c = B[0].start.y) : (o = B[0].x, c = B[0].y), LA(B[1]) ? (l = B[1].end.x, u = B[1].end.y) : (l = B[1].x, u = B[1].y), n === 0 || n === 2 ? d = Math.abs(o - l) : d = Math.abs(c - u), this.ctx.beginPath(), a === 3 ? this.formatPath(i) : this.formatPath(B.slice(0, 2)), w = r < 3 ? r * 3 : r * 2, g = r < 3 ? r * 2 : r, a === 3 && (w = r, g = r), D = !0, d <= w * 2 ? D = !1 : d <= w * 2 + g ? (p = d / (2 * w + g), w *= p, g *= p) : (F = Math.floor((d + g) / (w + g)), O = (d - F * w) / (F - 1), S = (d - (F + 1) * w) / F, g = S <= 0 || Math.abs(g - O) < Math.abs(g - S) ? O : S), D && (a === 3 ? this.ctx.setLineDash([0, w + g]) : this.ctx.setLineDash([w, g])), a === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = BA(t), this.ctx.stroke(), this.ctx.setLineDash([]), a === 2 && (LA(B[0]) && (m = B[3], h = B[0], this.ctx.beginPath(), this.formatPath([new E(m.end.x, m.end.y), new E(h.start.x, h.start.y)]), this.ctx.stroke()), LA(B[1]) && (m = B[1], h = B[2], this.ctx.beginPath(), this.formatPath([new E(m.end.x, m.end.y), new E(h.start.x, h.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return FA(this, void 0, void 0, function() {
        var r;
        return wA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = BA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = wf(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(Wa)
), yf = function(A) {
  return A instanceof La || A instanceof Ka ? !0 : A instanceof on && A.type !== Gt && A.type !== Rt;
}, If = function(A, e) {
  switch (A) {
    case 0:
      return Pt(e);
    case 2:
      return of(e);
    case 1:
    default:
      return kt(e);
  }
}, bf = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, Kf = ["-apple-system", "system-ui"], Lf = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return Kf.indexOf(e) === -1;
  }) : A;
}, xf = (
  /** @class */
  function(A) {
    RA(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return FA(this, void 0, void 0, function() {
        var r, n;
        return wA(this, function(s) {
          switch (s.label) {
            case 0:
              return r = Wr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Df(r)];
            case 1:
              return n = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = BA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(Wa)
), Df = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, Tf = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, it([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, it([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, it([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, it([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }()
), Sf = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new Tf({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new Af(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), Of = function(A, e) {
  return e === void 0 && (e = {}), Mf(A, e);
};
typeof window < "u" && _a.setContext(window);
var Mf = function(A, e) {
  return FA(void 0, void 0, void 0, function() {
    var t, r, n, s, a, i, B, o, c, l, u, d, w, g, D, p, F, O, S, m, Q, h, Q, L, b, k, tA, j, R, z, TA, AA, sA, SA, CA, HA, OA, vA, yA, bA;
    return wA(this, function(fA) {
      switch (fA.label) {
        case 0:
          if (!A || typeof A != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = A.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (L = e.allowTaint) !== null && L !== void 0 ? L : !1,
            imageTimeout: (b = e.imageTimeout) !== null && b !== void 0 ? b : 15e3,
            proxy: e.proxy,
            useCORS: (k = e.useCORS) !== null && k !== void 0 ? k : !1
          }, s = Dr({ logging: (tA = e.logging) !== null && tA !== void 0 ? tA : !0, cache: e.cache }, n), a = {
            windowWidth: (j = e.windowWidth) !== null && j !== void 0 ? j : r.innerWidth,
            windowHeight: (R = e.windowHeight) !== null && R !== void 0 ? R : r.innerHeight,
            scrollX: (z = e.scrollX) !== null && z !== void 0 ? z : r.pageXOffset,
            scrollY: (TA = e.scrollY) !== null && TA !== void 0 ? TA : r.pageYOffset
          }, i = new zA(a.scrollX, a.scrollY, a.windowWidth, a.windowHeight), B = new Sf(s, i), o = (AA = e.foreignObjectRendering) !== null && AA !== void 0 ? AA : !1, c = {
            allowTaint: (sA = e.allowTaint) !== null && sA !== void 0 ? sA : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, B.logger.debug("Starting document clone with size " + i.width + "x" + i.height + " scrolled to " + -i.left + "," + -i.top), l = new ps(B, A, c), u = l.clonedReferenceElement, u ? [4, l.toIFrame(t, i)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return d = fA.sent(), w = cn(u) || Mu(u) ? ui(u.ownerDocument) : Jt(B, u), g = w.width, D = w.height, p = w.left, F = w.top, O = Nf(B, u, e.backgroundColor), S = {
            canvas: e.canvas,
            backgroundColor: O,
            scale: (CA = (SA = e.scale) !== null && SA !== void 0 ? SA : r.devicePixelRatio) !== null && CA !== void 0 ? CA : 1,
            x: ((HA = e.x) !== null && HA !== void 0 ? HA : 0) + p,
            y: ((OA = e.y) !== null && OA !== void 0 ? OA : 0) + F,
            width: (vA = e.width) !== null && vA !== void 0 ? vA : Math.ceil(g),
            height: (yA = e.height) !== null && yA !== void 0 ? yA : Math.ceil(D)
          }, o ? (B.logger.debug("Document cloned, using foreign object rendering"), Q = new xf(B, S), [4, Q.render(u)]) : [3, 3];
        case 2:
          return m = fA.sent(), [3, 5];
        case 3:
          return B.logger.debug("Document cloned, element located at " + p + "," + F + " with size " + g + "x" + D + " using computed rendering"), B.logger.debug("Starting DOM parsing"), h = Ta(B, u), O === h.styles.backgroundColor && (h.styles.backgroundColor = jA.TRANSPARENT), B.logger.debug("Starting renderer for element at " + S.x + "," + S.y + " with size " + S.width + "x" + S.height), Q = new vf(B, S), [4, Q.render(h)];
        case 4:
          m = fA.sent(), fA.label = 5;
        case 5:
          return (!((bA = e.removeContainer) !== null && bA !== void 0) || bA) && (ps.destroy(d) || B.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), B.logger.debug("Finished rendering"), [2, m];
      }
    });
  });
}, Nf = function(A, e, t) {
  var r = e.ownerDocument, n = r.documentElement ? Je(A, getComputedStyle(r.documentElement).backgroundColor) : jA.TRANSPARENT, s = r.body ? Je(A, getComputedStyle(r.body).backgroundColor) : jA.TRANSPARENT, a = typeof t == "string" ? Je(A, t) : t === null ? jA.TRANSPARENT : 4294967295;
  return e === r.documentElement ? se(n) ? se(s) ? a : s : n : a;
};
const St = {
  pdf: "Download PDF",
  image: "Download Image",
  csv: "Download Data (CSV)",
  link: "Link to Dataset"
}, Rf = (A, e) => {
  const t = navigator.userAgent.match(/MSIE\s([\d.]+)/), r = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/), n = navigator.userAgent.match(/Edge/g);
  if ((t ? t[1] : r ? 11 : n ? 12 : -1) > -1) {
    const a = new Blob([A], {
      type: "image/png"
    });
    window.navigator.msSaveBlob(a, e);
  } else {
    const a = document.createElement("a");
    typeof a.download == "string" ? (a.href = A, a.download = e, a.onclick = (i) => document.body.removeChild(i.target), document.body.appendChild(a), a.click()) : window.open(A);
  }
}, Za = (A, e, t) => {
  const r = document.querySelector(`[data-download-id=${t}]`), n = (i) => {
    var B, o;
    return (B = i == null ? void 0 : i.dashboard) != null && B.title ? i.dashboard.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : (o = i == null ? void 0 : i.general) != null && o.title ? i.general.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : i != null && i.title ? i.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : "no-title";
  }, s = /* @__PURE__ */ new Date(), a = n(A);
  switch (e) {
    case "image":
      Of(r, { foreignObjectRendering: !0 }).then((i) => {
        Rf(i.toDataURL(), a + ".png");
      });
      return;
    case "pdf":
      console.warn("COVE: pdf downloads disabled");
      break;
    default:
      console.warn("COVE: generateMedia param 2 type must be 'image' or 'pdf'");
      break;
  }
}, Gf = (A) => A != null && A.headerColor ? A.headerColor : A != null && A.theme ? A.theme : "theme-notFound", Vf = ({ state: A, text: e, type: t, title: r, elementToCapture: n }) => {
  const s = ["btn", "btn-download", `${Gf(A)}`];
  return /* @__PURE__ */ f.createElement("button", { className: s.join(" "), title: r, onClick: () => Za(A, t, n), style: { lineHeight: "1.4em" } }, St[t]);
}, _f = ({ config: A, dashboardDataConfig: e }) => {
  var r;
  let t = e || A;
  return t.dataFileSourceType === "url" && t.dataFileName && A.table.showDownloadUrl ? /* @__PURE__ */ f.createElement("a", { href: t.dataFileName, title: St.link, target: "_blank" }, St.link) : (r = A == null ? void 0 : A.table) != null && r.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ f.createElement("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank" }, St.link) : null;
}, Pf = ({ children: A, classes: e }) => /* @__PURE__ */ f.createElement("section", { className: e.join(" ") }, /* @__PURE__ */ f.createElement("span", null, A)), ye = () => null;
ye.Section = Pf;
ye.Link = _f;
ye.Button = Vf;
ye.generateMedia = Za;
const kf = (A) => /* @__PURE__ */ EA.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...A }, /* @__PURE__ */ EA.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" }));
function ys({ fill: A, borderColor: e }) {
  const t = {
    marginRight: "5px",
    borderRadius: "300px",
    verticalAlign: "middle",
    display: "inline-block",
    height: "1em",
    width: "1em",
    border: e ? `${e}  1px solid` : "rgba(0,0,0,.3) 1px solid",
    backgroundColor: A
  };
  return /* @__PURE__ */ f.createElement("span", { className: "legend-item", style: t });
}
function Xf(A = void 0, e) {
  return Vs(A)(e);
}
function Ir(A = void 0, e) {
  return _s(A)(e) || /* @__PURE__ */ new Date();
}
const Is = (A) => {
  let e = "", t = Math.abs(A);
  return t >= 1e9 ? (e = "B", A = A / 1e9) : t >= 1e6 ? (e = "M", A = A / 1e6) : t >= 1e3 && (e = "K", A = A / 1e3), A + e;
}, bs = (A, e, t = !1, r = null, n = null) => {
  if (r || console.error("no config found in formatNumber"), isNaN(A) || !A)
    return A;
  const s = A < 0;
  s && (A = Math.abs(A));
  let {
    dataFormat: { commas: a, abbreviated: i, roundTo: B, prefix: o, suffix: c, rightRoundTo: l, bottomRoundTo: u, rightPrefix: d, rightSuffix: w, bottomPrefix: g, bottomSuffix: D, bottomAbbreviated: p }
  } = r;
  const { addColCommas: F, addColRoundTo: O, addColPrefix: S, addColSuffix: m } = n;
  String(A).indexOf(",") !== -1 && (A = A.replaceAll(",", ""));
  let h = A, Q;
  if (e === "left") {
    let b;
    O !== void 0 ? b = O ? Number(O) : 0 : b = B ? Number(B) : 0, b < 0 && (b = 0);
    let k;
    F !== void 0 ? k = !!F : k = !!r.dataFormat.commas, Q = {
      useGrouping: k,
      minimumFractionDigits: b,
      maximumFractionDigits: b
    };
  }
  if (e === "right" && (Q = {
    useGrouping: !!r.dataFormat.rightCommas,
    minimumFractionDigits: l ? Number(l) : 0,
    maximumFractionDigits: l ? Number(l) : 0
  }), e === "bottom" && (Q = {
    useGrouping: !!r.dataFormat.bottomCommas,
    minimumFractionDigits: u ? Number(u) : 0,
    maximumFractionDigits: u ? Number(u) : 0
  }), A = Qn(A), isNaN(A))
    return r.runtime.editorErrorMessage = `Unable to parse number from data ${h}. Try reviewing your data and selections in the Data Series section.`, h;
  if (!r.dataFormat)
    return A;
  if (r.dataCutoff) {
    let b = Qn(r.dataCutoff);
    A < b && (A = b);
  }
  e === "left" && a && i && t || e === "bottom" && a && i && t ? A = A : A = A.toLocaleString("en-US", Q);
  let L = "";
  return i && e === "left" && t && (A = Is(parseFloat(A))), p && e === "bottom" && t && (A = Is(parseFloat(A))), S !== void 0 && e === "left" ? L = S + L : o && e === "left" && (L = o + L), d && e === "right" && (L += d), g && e === "bottom" && (L += g), L += A, m !== void 0 && e === "left" ? L += m : c && e === "left" && (L += c), w && e === "right" && (L += w), D && e === "bottom" && (L += D), s && (L = "-" + L), String(L);
}, og = (A = "medium") => ({ small: 16, medium: 18, large: 20 })[A], cg = (A) => {
  var gA, VA, Ke, ln;
  const { setFilteredCountryCode: e, config: t, dataConfig: r, tableTitle: n, indexTitle: s, vizTitle: a, rawData: i, runtimeData: B, headerColor: o, colorScale: c, expandDataTable: l, columns: u, displayDataAsText: d, applyLegendToRow: w, displayGeoName: g, navigationHandler: D, viewport: p, formatLegendLocation: F, tabbingId: O, isDebug: S } = A;
  S && (console.log("core/DataTable: props=", A), console.log("core/DataTable: runtimeData=", B), console.log("core/DataTable: rawData=", i), console.log("core/DataTable: config=", t));
  const [m, h] = EA.useState(l), [Q, L] = EA.useState({ column: t.type === "map" ? "geo" : "date", asc: !1, colIndex: null }), [b, k] = EA.useState(""), tA = `${a || "data-table"}.csv`, j = !(t.type === "chart" && !((gA = t.table) != null && gA.showVertical)), R = (x, v) => {
    var MA;
    let U = x, T = v;
    U = U === !1 || U === !0 || U === null ? "" : U, T = T === !1 || T == !0 || T === null ? "" : T;
    const I = String(U).trim(), K = String(T).trim();
    if (((MA = t.xAxis) == null ? void 0 : MA.dataKey) === Q.column && t.xAxis.type === "date") {
      let aA = Ir(t.xAxis.dateParseFormat, I), _A = Ir(t.xAxis.dateParseFormat, K);
      return aA && aA.getTime && (aA = aA.getTime()), _A && _A.getTime && (_A = _A.getTime()), Q.asc ? _A - aA : aA - _A;
    }
    const M = !isNaN(Number(U)) && U !== void 0 && U !== null && I !== "", W = !isNaN(Number(T)) && T !== void 0 && T !== null && K !== "";
    return I === "" && K !== "" ? Q.asc ? 1 : -1 : I !== "" && K === "" ? Q.asc ? -1 : 1 : M && W ? Q.asc ? Number(T) - Number(U) : Number(U) - Number(T) : M ? Q.asc ? 1 : -1 : W ? Q.asc ? -1 : 1 : Q.asc ? K.localeCompare(I) : I.localeCompare(K);
  }, z = (x, v) => (u.navigate && v[u.navigate.name] && (x = /* @__PURE__ */ f.createElement(
    "span",
    {
      onClick: () => D(v[u.navigate.name]),
      className: "table-link",
      title: "Click for more information (Opens in a new window)",
      role: "link",
      tabIndex: "0",
      onKeyDown: (U) => {
        U.keyCode === 13 && D(v[u.navigate.name]);
      }
    },
    x,
    /* @__PURE__ */ f.createElement(kf, { className: "inline-icon" })
  )), x), AA = `btn__${Math.random().toString(16).substr(2, 8)}`, sA = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  }, SA = EA.memo(() => {
    var x;
    if (i !== void 0) {
      let v;
      ((x = t.general) == null ? void 0 : x.geoType) === "us-county" ? v = un.unparse(i.map((I) => ({ FullGeoName: F(I[t.columns.geo.name]), ...I }))) : v = un.unparse(i);
      const U = new Blob([v], { type: "text/csv;charset=utf-8;" }), T = () => {
        typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(U, tA);
      };
      return /* @__PURE__ */ f.createElement("a", { download: tA, type: "button", onClick: T, href: URL.createObjectURL(U), "aria-label": "Download this data in a CSV file format.", className: `${o} no-border`, id: `${AA}`, "data-html2canvas-ignore": !0, role: "button" }, "Download Data (CSV)");
    } else
      return /* @__PURE__ */ f.createElement(f.Fragment, null);
  }, [i]);
  switch (EA.useEffect(() => {
    const x = "Accessible data table.", v = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    m === !0 && b !== x && k(x), m === !1 && b !== v && k(v);
  }, [m]), t.visualizationType) {
    case "Box Plot":
      if (!t.boxplot)
        return /* @__PURE__ */ f.createElement(rr, null);
      break;
    case "Line":
      if (!B)
        return /* @__PURE__ */ f.createElement(rr, null);
      break;
    default:
      if (!B)
        return /* @__PURE__ */ f.createElement(rr, null);
      break;
  }
  const CA = Object.keys(B), HA = j ? CA.sort((x, v) => {
    let U = 0;
    return t.type === "map" && t.columns && (U = R(B[x][t.columns[Q.column].name], B[v][t.columns[Q.column].name])), (t.type === "chart" || t.type === "dashboard") && (U = R(B[x][Q.column], B[v][Q.column])), U;
  }) : CA, OA = (x) => x.map((U) => /* @__PURE__ */ f.createElement("tr", { role: "row" }, Object.keys(u).filter((T) => u[T].dataTable === !0 && u[T].name).map((T) => {
    let I;
    if (T === "geo") {
      const M = B[U], W = w(M);
      var K;
      t.general.geoType !== "single-state" && t.general.geoType !== "us-county" || t.general.type === "us-geocode" ? K = g(U) : K = F(U), K = z(K, M), I = /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(ys, { fill: W[0] }), K);
    } else {
      let M = "";
      if (t.legend.specialClasses && t.legend.specialClasses.length && typeof t.legend.specialClasses[0] == "object")
        for (let W = 0; W < t.legend.specialClasses.length; W++)
          t.legend.specialClasses[W].key === t.columns[T].name && String(B[U][t.legend.specialClasses[W].key]) === t.legend.specialClasses[W].value && (M = t.legend.specialClasses[W].label);
      I = d(M || B[U][t.columns[T].name], T);
    }
    return /* @__PURE__ */ f.createElement("td", { tabIndex: "0", role: "gridcell", onClick: (M) => t.general.type === "bubble" && t.general.allowMapZoom && t.general.geoType === "world" ? e(U) : !0 }, I);
  }))), vA = () => {
    var v, U, T, I;
    let x;
    return t.visualizationType !== "Pie" ? (x = j ? [(v = t.xAxis) == null ? void 0 : v.dataKey] : [], t.series ? t.series.forEach((K) => {
      x.push(K.dataKey);
    }) : B && B.length > 0 && (x = Object.keys(B[0]))) : x = j ? [(U = t.xAxis) == null ? void 0 : U.dataKey, (T = t.yAxis) == null ? void 0 : T.dataKey] : [(I = t.yAxis) == null ? void 0 : I.dataKey], t.columns && Object.keys(t.columns).length > 0 && Object.keys(t.columns).forEach(function(K) {
      var W;
      var M = t.columns[K];
      M.name !== ((W = t.xAxis) == null ? void 0 : W.dataKey) && M.dataTable === !0 && x.push(M.name);
    }), x;
  }, yA = () => vA().sort((x, v) => {
    if (Q.column === "__series__")
      return R(x, v);
    let U = B.find((I) => {
      var K;
      return I[(K = t.xAxis) == null ? void 0 : K.dataKey] === Q.column;
    });
    const T = B[Q.colIndex - 1];
    if (U)
      return R(U[x], U[v]);
    if (U === void 0 && T)
      return R(T[x], T[v]);
  }), bA = (x) => {
    let v = "";
    if (t.columns && Object.keys(t.columns).length > 0)
      return Object.keys(t.columns).forEach(function(U) {
        var T = t.columns[U];
        T.name === x && (v = T.label);
      }), v;
  }, fA = (x) => {
    var I, K, M;
    let v = t.series ? (K = (I = t.series.filter((W) => W.dataKey === x)) == null ? void 0 : I[0]) == null ? void 0 : K.name : "";
    if (v)
      return v;
    if (t.runtimeSeriesLabels && t.runtimeSeriesLabels[x])
      return t.runtimeSeriesLabels[x];
    let U = bA(x) ? bA(x) : x;
    return x === ((M = t.xAxis) == null ? void 0 : M.dataKey) ? t.table.indexLabel : U;
  }, GA = (x, v) => {
    if (v) {
      if (j)
        return /* @__PURE__ */ f.createElement("tr", null, vA().map((U, T) => {
          const I = fA(U);
          return /* @__PURE__ */ f.createElement(
            "th",
            {
              key: `col-header-${U}__${T}`,
              tabIndex: "0",
              title: I,
              role: "columnheader",
              scope: "col",
              onClick: () => {
                L({ column: U, asc: Q.column === U ? !Q.asc : !1, colIndex: T });
              },
              onKeyDown: (K) => {
                K.keyCode === 13 && (setColIndex(T), L({ column: U, asc: Q.column === U ? !Q.asc : !1, colIndex: T }));
              },
              className: Q.column === U ? Q.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
              ...Q.column === U ? Q.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
            },
            I,
            U === Q.column && /* @__PURE__ */ f.createElement("span", { className: "sort-icon" }, Q.asc ? C : G),
            /* @__PURE__ */ f.createElement("button", null, /* @__PURE__ */ f.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${I} in ${Q.column === U && Q.asc ? "ascending" : "descending"} `, " order"))
          );
        }));
      {
        const U = t.visualizationType === "Pie" ? 1 : 0;
        return /* @__PURE__ */ f.createElement("tr", null, ["__series__", ...Object.keys(B)].slice(U).map((T, I) => {
          var W;
          let K = (W = t.xAxis) == null ? void 0 : W.dataKey, M = T !== "__series__" ? at(T, K) : "__series__";
          return /* @__PURE__ */ f.createElement(
            "th",
            {
              key: `col-header-${M}__${I}`,
              tabIndex: "0",
              title: M,
              role: "columnheader",
              scope: "col",
              onClick: () => {
                L({ column: M, asc: Q.column === M ? !Q.asc : !1, colIndex: I });
              },
              onKeyDown: (MA) => {
                MA.keyCode === 13 && L({ column: M, asc: Q.column === M ? !Q.asc : !1, colIndex: I });
              },
              className: Q.column === M ? Q.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
              ...Q.column === M ? Q.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
            },
            M === "__series__" ? "" : M,
            I === Q.colIndex && /* @__PURE__ */ f.createElement("span", { className: "sort-icon" }, Q.asc ? C : G),
            /* @__PURE__ */ f.createElement("button", null, /* @__PURE__ */ f.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${M} in ${Q.column === M && Q.asc ? "ascending" : "descending"} `, " order"))
          );
        }));
      }
    }
  }, YA = (x) => {
    let v = {};
    return t.columns && Object.keys(t.columns).forEach((U) => {
      t.columns[U].name === x && (v = {
        addColPrefix: t.columns[U].prefix,
        addColSuffix: t.columns[U].suffix,
        addColRoundTo: t.columns[U].roundToPlace ? t.columns[U].roundToPlace : "",
        addColCommas: t.columns[U].commas
      });
    }), v;
  }, at = (x, v) => {
    var K, M, W, MA;
    const U = B[x];
    let T, I = U[v];
    if (v === ((K = t.xAxis) == null ? void 0 : K.dataKey))
      T = ((M = t.xAxis) == null ? void 0 : M.type) === "date" ? Xf((W = t.xAxis) == null ? void 0 : W.dateDisplayFormat, Ir((MA = t.xAxis) == null ? void 0 : MA.dateParseFormat, I)) : I;
    else {
      let aA = "left", _A = t.series ? t.series.filter((hA) => (hA == null ? void 0 : hA.axis) === "Left") : [], tr = t.series ? t.series.filter((hA) => (hA == null ? void 0 : hA.axis) === "Right") : [];
      _A.map((hA) => {
        hA.dataKey === v && (aA = "left");
      }), tr.map((hA) => {
        hA.dataKey === v && (aA = "right");
      });
      let Bt = YA(v);
      Bt ? T = t.dataFormat ? bs(B[x][v], aA, !1, t, Bt) : B[x][v] : T = t.dataFormat ? bs(B[x][v], aA, !1, t) : B[x][v];
    }
    return T;
  }, y = (x, v) => {
    var U, T;
    return /* @__PURE__ */ f.createElement("td", { tabIndex: "0", role: "gridcell", id: `${B[(T = (U = t.runtime) == null ? void 0 : U.originalXAxis) == null ? void 0 : T.dataKey]}--${x}` }, at(x, v));
  }, N = (x) => j ? x.map((U, T) => /* @__PURE__ */ f.createElement("tr", { key: `${U}__${T}`, role: "row" }, vA().map((I) => y(U, I)))) : yA().map((U) => /* @__PURE__ */ f.createElement("tr", { role: "row" }, t.visualizationType !== "Pie" && /* @__PURE__ */ f.createElement("td", null, c && c(fA(U)) && /* @__PURE__ */ f.createElement(ys, { fill: c(fA(U)) }), fA(U)), x.map((T) => y(T, U)))), G = /* @__PURE__ */ f.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ f.createElement("path", { d: "M0 5l5-5 5 5z" })), C = /* @__PURE__ */ f.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ f.createElement("path", { d: "M0 0l5 5 5-5z" })), oA = {
    maxHeight: t.table.limitHeight && `${t.table.height}px`,
    overflowY: "scroll",
    marginBottom: "33px"
  }, X = EA.useMemo(() => t.type === "map" ? t.table.caption ? t.table.caption : `Data table showing data for the ${sA[t.general.geoType]} figure.` : t.table.caption ? t.table.caption : `Data table showing data for the ${t.type} figure.`, [t.table.caption]), UA = EA.useMemo(
    () => {
      var x;
      return t.visualizationType === "Pie" ? [t.yAxis.dataKey] : t.visualizationType === "Box Plot" ? Object.entries(t.boxplot.tableData[0]) : (x = t.runtime) == null ? void 0 : x.seriesKeys;
    },
    [(VA = t.runtime) == null ? void 0 : VA.seriesKeys]
  );
  if (t.visualizationType !== "Box Plot") {
    const x = (v) => /* @__PURE__ */ f.createElement("tr", null, Object.keys(v).filter((U) => v[U].dataTable === !0 && v[U].name).map((U, T) => {
      var K;
      let I;
      return U !== "geo" ? I = v[U].label ? v[U].label : v[U].name : I = t.type === "map" ? s : (K = t.xAxis) == null ? void 0 : K.dataKey, t.type === "map" && (I === void 0 || I === "") && (I = "Location"), /* @__PURE__ */ f.createElement(
        "th",
        {
          key: `col-header-${U}__${T}`,
          id: U,
          tabIndex: "0",
          title: I,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            L({ column: U, asc: Q.column === U ? !Q.asc : !1 });
          },
          onKeyDown: (M) => {
            M.keyCode === 13 && L({ column: U, asc: Q.column === U ? !Q.asc : !1 });
          },
          className: Q.column === U ? Q.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
          ...Q.column === U ? Q.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        I,
        Q.column === U && /* @__PURE__ */ f.createElement("span", { className: "sort-icon" }, Q.asc ? C : G),
        /* @__PURE__ */ f.createElement("button", null, /* @__PURE__ */ f.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${I} in ${Q.column === U && Q.asc ? "ascending" : "descending"} `, " order"))
      );
    }));
    return /* @__PURE__ */ f.createElement(wn, { component: "DataTable" }, /* @__PURE__ */ f.createElement(ye.Section, { classes: ["download-links"] }, /* @__PURE__ */ f.createElement(ye.Link, { config: t, dashboardDataConfig: r }), (t.table.download || ((Ke = t.general) == null ? void 0 : Ke.showDownloadButton)) && /* @__PURE__ */ f.createElement(SA, null)), /* @__PURE__ */ f.createElement("section", { id: O.replace("#", ""), className: `data-table-container ${p}`, "aria-label": b }, /* @__PURE__ */ f.createElement("a", { id: "skip-nav", className: "cdcdataviz-sr-only-focusable", href: `#${AA}` }, "Skip Navigation or Skip to Content"), /* @__PURE__ */ f.createElement(
      "div",
      {
        className: m ? "data-table-heading" : "collapsed data-table-heading",
        onClick: () => {
          h(!m);
        },
        tabIndex: "0",
        onKeyDown: (v) => {
          v.keyCode === 13 && h(!m);
        }
      },
      /* @__PURE__ */ f.createElement(fn, { display: m ? "minus" : "plus", base: !0 }),
      n
    ), /* @__PURE__ */ f.createElement("div", { className: "table-container", style: oA }, /* @__PURE__ */ f.createElement("table", { height: m ? null : 0, role: "table", "aria-live": "assertive", className: `${m ? "data-table" : "data-table cdcdataviz-sr-only"}${j ? "" : " horizontal"}`, hidden: !m, "aria-rowcount": (ln = t == null ? void 0 : t.data) != null && ln.length ? t.data.length : "-1" }, /* @__PURE__ */ f.createElement("caption", { className: "cdcdataviz-sr-only" }, X), /* @__PURE__ */ f.createElement("thead", { style: { position: "sticky", top: 0, zIndex: 999 } }, t.type === "map" ? x(u) : GA(u, B)), /* @__PURE__ */ f.createElement("tbody", null, t.type === "map" ? OA(HA) : N(HA))), t.regions && t.regions.length > 0 && t.visualizationType !== "Box Plot" ? /* @__PURE__ */ f.createElement("table", { className: "region-table data-table" }, /* @__PURE__ */ f.createElement("caption", { className: "visually-hidden" }, "Table of the highlighted regions in the visualization"), /* @__PURE__ */ f.createElement("thead", null, /* @__PURE__ */ f.createElement("tr", null, /* @__PURE__ */ f.createElement("th", null, "Region Name"), /* @__PURE__ */ f.createElement("th", null, "Start Date"), /* @__PURE__ */ f.createElement("th", null, "End Date"))), /* @__PURE__ */ f.createElement("tbody", null, t.regions.map((v, U) => t.visualizationType === "Box Plot" ? !1 : !Object.keys(v).includes("from") || !Object.keys(v).includes("to") ? null : /* @__PURE__ */ f.createElement("tr", { key: `row-${v.label}--${U}` }, /* @__PURE__ */ f.createElement("td", null, v.label), /* @__PURE__ */ f.createElement("td", null, v.from), /* @__PURE__ */ f.createElement("td", null, v.to))))) : "")));
  } else {
    const x = (I) => {
      let K = ["Measures", ...I];
      return /* @__PURE__ */ f.createElement("tr", null, K.map((M) => /* @__PURE__ */ f.createElement("th", { key: `col-header-${M}`, tabIndex: "0", title: M, role: "columnheader", scope: "col" }, M)));
    }, v = (I) => {
      let {
        boxplot: { labels: K }
      } = t;
      return {
        columnMean: K.mean,
        columnMax: K.maximum,
        columnMin: K.minimum,
        columnIqr: K.iqr,
        columnCategory: "Category",
        columnMedian: K.median,
        columnFirstQuartile: K.q1,
        columnThirdQuartile: K.q3,
        columnOutliers: K.outliers,
        values: K.values,
        columnTotal: K.total,
        columnSd: "Standard Deviation",
        nonOutlierValues: "Non Outliers",
        columnLowerBounds: K.lowerBounds,
        columnUpperBounds: K.upperBounds
      }[I];
    };
    let U = (I, K) => Number(I) === 0 ? !0 : Number(I) === 1 ? K.columnMax : Number(I) === 2 ? K.columnThirdQuartile : Number(I) === 3 ? K.columnMedian : Number(I) === 4 ? K.columnFirstQuartile : Number(I) === 5 ? K.columnMin : Number(I) === 6 ? K.columnTotal : Number(I) === 7 ? K.columnSd : Number(I) === 8 ? K.columnMean : Number(I) === 9 ? K.columnOutliers.length > 0 ? K.columnOutliers.toString() : "-" : Number(I) === 10 ? K.values.length > 0 ? K.values.toString() : "-" : /* @__PURE__ */ f.createElement("p", null, "-");
    const T = (I) => {
      let K = I.map((MA) => MA[0]), M = ["Measures", ...t.boxplot.categories];
      return K.map((MA, aA) => {
        if (aA === 0)
          return "";
        let _A = `row-Box-Plot--${aA}`;
        return /* @__PURE__ */ f.createElement("tr", { role: "row", key: `tbody__tr-${aA}`, className: _A }, M.map((tr, Bt) => {
          let hA;
          if (tr === "Measures") {
            let ja = aA > 0 ? v(MA) : "";
            hA = /* @__PURE__ */ f.createElement(f.Fragment, null, ja);
          } else
            hA = U(aA, t.boxplot.plots[Bt - 1]);
          return /* @__PURE__ */ f.createElement("td", { tabIndex: "0", key: `tbody__tr__td-${aA}`, className: "boxplot-td", role: "gridcell" }, hA);
        }));
      });
    };
    return /* @__PURE__ */ f.createElement(wn, { component: "DataTable" }, /* @__PURE__ */ f.createElement("section", { id: O.replace("#", ""), className: `data-table-container ${p}`, "aria-label": b }, /* @__PURE__ */ f.createElement("a", { id: "skip-nav", className: "cdcdataviz-sr-only-focusable", href: `#${AA}` }, "Skip Navigation or Skip to Content"), /* @__PURE__ */ f.createElement(
      "div",
      {
        className: m ? "data-table-heading" : "collapsed data-table-heading",
        onClick: () => {
          h(!m);
        },
        tabIndex: "0",
        onKeyDown: (I) => {
          I.keyCode === 13 && h(!m);
        }
      },
      /* @__PURE__ */ f.createElement(fn, { display: m ? "minus" : "plus", base: !0 }),
      n
    ), /* @__PURE__ */ f.createElement("div", { className: "table-container", style: oA }, /* @__PURE__ */ f.createElement("table", { height: m ? null : 0, role: "table", "aria-live": "assertive", className: m ? "data-table" : "data-table cdcdataviz-sr-only", hidden: !m, "aria-rowcount": "11" }, /* @__PURE__ */ f.createElement("caption", { className: "cdcdataviz-sr-only" }, X), /* @__PURE__ */ f.createElement("thead", { style: { position: "sticky", top: 0, zIndex: 999 } }, x(t.boxplot.categories)), /* @__PURE__ */ f.createElement("tbody", null, T(UA))))));
  }
};
function rt(A) {
  "@babel/helpers - typeof";
  return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, rt(A);
}
function Jf(A, e) {
  if (rt(A) !== "object" || A === null)
    return A;
  var t = A[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(A, e || "default");
    if (rt(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(A);
}
function Yf(A) {
  var e = Jf(A, "string");
  return rt(e) === "symbol" ? e : String(e);
}
function Wf(A, e, t) {
  return e = Yf(e), e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
function Ks(A, e) {
  var t = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(A);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(A, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ls(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ks(Object(t), !0).forEach(function(r) {
      Wf(A, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : Ks(Object(t)).forEach(function(r) {
      Object.defineProperty(A, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return A;
}
function pA(A) {
  return "Minified Redux error #" + A + "; visit https://redux.js.org/Errors?code=" + A + " for the full message or use the non-minified dev environment for full errors. ";
}
var xs = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), br = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Ds = {
  INIT: "@@redux/INIT" + br(),
  REPLACE: "@@redux/REPLACE" + br(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + br();
  }
};
function Zf(A) {
  if (typeof A != "object" || A === null)
    return !1;
  for (var e = A; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(A) === e;
}
function jf(A) {
  if (A === void 0)
    return "undefined";
  if (A === null)
    return "null";
  var e = typeof A;
  switch (e) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return e;
  }
  if (Array.isArray(A))
    return "array";
  if ($f(A))
    return "date";
  if (qf(A))
    return "error";
  var t = zf(A);
  switch (t) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return t;
  }
  return e.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function zf(A) {
  return typeof A.constructor == "function" ? A.constructor.name : null;
}
function qf(A) {
  return A instanceof Error || typeof A.message == "string" && A.constructor && typeof A.constructor.stackTraceLimit == "number";
}
function $f(A) {
  return A instanceof Date ? !0 : typeof A.toDateString == "function" && typeof A.getDate == "function" && typeof A.setDate == "function";
}
function ie(A) {
  var e = typeof A;
  return process.env.NODE_ENV !== "production" && (e = jf(A)), e;
}
function Ag(A, e, t) {
  var r;
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? pA(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(process.env.NODE_ENV === "production" ? pA(1) : "Expected the enhancer to be a function. Instead, received: '" + ie(t) + "'");
    return t(Ag)(A, e);
  }
  if (typeof A != "function")
    throw new Error(process.env.NODE_ENV === "production" ? pA(2) : "Expected the root reducer to be a function. Instead, received: '" + ie(A) + "'");
  var n = A, s = e, a = [], i = a, B = !1;
  function o() {
    i === a && (i = a.slice());
  }
  function c() {
    if (B)
      throw new Error(process.env.NODE_ENV === "production" ? pA(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return s;
  }
  function l(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? pA(4) : "Expected the listener to be a function. Instead, received: '" + ie(g) + "'");
    if (B)
      throw new Error(process.env.NODE_ENV === "production" ? pA(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var D = !0;
    return o(), i.push(g), function() {
      if (D) {
        if (B)
          throw new Error(process.env.NODE_ENV === "production" ? pA(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        D = !1, o();
        var F = i.indexOf(g);
        i.splice(F, 1), a = null;
      }
    };
  }
  function u(g) {
    if (!Zf(g))
      throw new Error(process.env.NODE_ENV === "production" ? pA(7) : "Actions must be plain objects. Instead, the actual type was: '" + ie(g) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof g.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? pA(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (B)
      throw new Error(process.env.NODE_ENV === "production" ? pA(9) : "Reducers may not dispatch actions.");
    try {
      B = !0, s = n(s, g);
    } finally {
      B = !1;
    }
    for (var D = a = i, p = 0; p < D.length; p++) {
      var F = D[p];
      F();
    }
    return g;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? pA(10) : "Expected the nextReducer to be a function. Instead, received: '" + ie(g));
    n = g, u({
      type: Ds.REPLACE
    });
  }
  function w() {
    var g, D = l;
    return g = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(F) {
        if (typeof F != "object" || F === null)
          throw new Error(process.env.NODE_ENV === "production" ? pA(11) : "Expected the observer to be an object. Instead, received: '" + ie(F) + "'");
        function O() {
          F.next && F.next(c());
        }
        O();
        var S = D(O);
        return {
          unsubscribe: S
        };
      }
    }, g[xs] = function() {
      return this;
    }, g;
  }
  return u({
    type: Ds.INIT
  }), r = {
    dispatch: u,
    subscribe: l,
    getState: c,
    replaceReducer: d
  }, r[xs] = w, r;
}
function Ts(A, e) {
  return function() {
    return e(A.apply(this, arguments));
  };
}
function lg(A, e) {
  if (typeof A == "function")
    return Ts(A, e);
  if (typeof A != "object" || A === null)
    throw new Error(process.env.NODE_ENV === "production" ? pA(16) : "bindActionCreators expected an object or a function, but instead received: '" + ie(A) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var t = {};
  for (var r in A) {
    var n = A[r];
    typeof n == "function" && (t[r] = Ts(n, e));
  }
  return t;
}
function eg() {
  for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++)
    e[t] = arguments[t];
  return e.length === 0 ? function(r) {
    return r;
  } : e.length === 1 ? e[0] : e.reduce(function(r, n) {
    return function() {
      return r(n.apply(void 0, arguments));
    };
  });
}
function ug() {
  for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++)
    e[t] = arguments[t];
  return function(r) {
    return function() {
      var n = r.apply(void 0, arguments), s = function() {
        throw new Error(process.env.NODE_ENV === "production" ? pA(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: n.getState,
        dispatch: function() {
          return s.apply(void 0, arguments);
        }
      }, i = e.map(function(B) {
        return B(a);
      });
      return s = eg.apply(void 0, i)(n.dispatch), Ls(Ls({}, n), {}, {
        dispatch: s
      });
    };
  };
}
const tg = (A) => /* @__PURE__ */ EA.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...A }, /* @__PURE__ */ EA.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), fg = ({ loadConfig: A, state: e, convertStateToConfig: t }) => {
  const [r, n] = EA.useState(!1), [s, a] = EA.useState({});
  EA.useEffect(() => {
    let B = e;
    e.type !== "dashboard" ? B = t() : B = JSON.parse(JSON.stringify(B));
    const o = JSON.stringify(B, void 0, 2);
    a(o);
  }, [e]);
  const i = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ f.createElement(gn, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ f.createElement(gn, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ f.createElement(tg, null)],
    "markup-include": ["Markup Include", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html", /* @__PURE__ */ f.createElement(za, null)]
  };
  return e.type ? /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("a", { href: i[e.type][1], target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, i[e.type][2], /* @__PURE__ */ f.createElement("div", null, /* @__PURE__ */ f.createElement("span", { className: "heading-3" }, "Get Help with ", i[e.type][0]), /* @__PURE__ */ f.createElement("p", null, "Examples and documentation"))), /* @__PURE__ */ f.createElement("div", { className: "advanced" }, /* @__PURE__ */ f.createElement("span", { className: "advanced-toggle-link", onClick: () => n(!r) }, /* @__PURE__ */ f.createElement("span", null, r ? "— " : "+ "), "Advanced Options"), r && /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("section", { className: "error-box py-2 px-3 my-2" }, /* @__PURE__ */ f.createElement("div", null, /* @__PURE__ */ f.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ f.createElement("p", null, "This can cause serious errors in your visualization."))), /* @__PURE__ */ f.createElement("p", { className: "pb-2" }, "This tool displays the actual ", /* @__PURE__ */ f.createElement("acronym", { title: "JavaScript Object Notation" }, "JSON"), " configuration that is generated by this editor and allows you to edit properties directly and apply them."), /* @__PURE__ */ f.createElement("textarea", { value: s, onChange: (B) => a(B.target.value) }), /* @__PURE__ */ f.createElement("button", { className: "btn full-width", onClick: () => A(JSON.parse(s)) }, "Apply")))) : /* @__PURE__ */ f.createElement(f.Fragment, null);
};
export {
  fg as A,
  cg as D,
  ys as L,
  ye as M,
  Ag as a,
  lg as b,
  eg as c,
  ug as d,
  bs as f,
  og as g,
  Vs as t
};
