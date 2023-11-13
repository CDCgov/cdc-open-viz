import { R as U, r as TA } from "./storybook-e61d95ab.es.js";
import { L as Dt, E as Nr } from "./storybook-a0c99f4a.es.js";
import { P as Fs } from "./storybook-76833471.es.js";
import { u as nr, a as rB, t as Br, b as nB, c as Ke, d as hs, e as Le, f as be, g as ds, h as xe } from "./storybook-bedc547d.es.js";
import { n as Vr } from "./storybook-24623c03.es.js";
import { I as Es } from "./storybook-5db1e0e0.es.js";
import { T as Tt } from "./storybook-fe996ed4.es.js";
function St(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return A.setFullYear(e.y), A;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Mt(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return A.setUTCFullYear(e.y), A;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function oe(e, A, t) {
  return { y: e, m: A, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function ps(e) {
  var A = e.dateTime, t = e.date, r = e.time, n = e.periods, B = e.days, s = e.shortDays, a = e.months, i = e.shortMonths, o = ce(n), c = le(n), l = ce(B), u = le(B), w = ce(s), g = le(s), Q = ce(a), I = le(a), d = ce(i), F = le(i), K = {
    a: k,
    A: $,
    b: AA,
    B: oA,
    c: null,
    d: Yr,
    e: Yr,
    f: Js,
    g: ta,
    G: na,
    H: _s,
    I: Ps,
    j: Xs,
    L: BB,
    m: Ys,
    M: Ws,
    p: HA,
    q: vA,
    Q: zr,
    s: qr,
    S: Zs,
    u: zs,
    U: qs,
    V: js,
    w: $s,
    W: Aa,
    x: null,
    X: null,
    y: ea,
    Y: ra,
    Z: Ba,
    "%": Zr
  }, y = {
    a: CA,
    A: IA,
    b: UA,
    B: bA,
    c: null,
    d: Wr,
    e: Wr,
    f: oa,
    g: Fa,
    G: da,
    H: sa,
    I: aa,
    j: ia,
    L: aB,
    m: ca,
    M: la,
    p: kA,
    q: Us,
    Q: zr,
    s: qr,
    S: ua,
    u: ga,
    U: Qa,
    V: wa,
    w: fa,
    W: Ca,
    x: null,
    X: null,
    y: Ua,
    Y: ha,
    Z: Ea,
    "%": Zr
  }, m = {
    a: O,
    A: Z,
    b: z,
    B: D,
    c: P,
    d: Xr,
    e: Xr,
    f: Rs,
    g: Pr,
    G: _r,
    H: Jr,
    I: Jr,
    j: Ss,
    L: Gs,
    m: Ts,
    M: Ms,
    p: H,
    q: Ds,
    Q: Vs,
    s: ks,
    S: Os,
    u: ys,
    U: Ks,
    V: Ls,
    w: ms,
    W: bs,
    x: iA,
    X: R,
    y: Pr,
    Y: _r,
    Z: xs,
    "%": Ns
  };
  K.x = C(t, K), K.X = C(r, K), K.c = C(A, K), y.x = C(t, y), y.X = C(r, y), y.c = C(A, y);
  function C(p, b) {
    return function(T) {
      var f = [], sA = -1, N = 0, cA = p.length, lA, _A, Rr;
      for (T instanceof Date || (T = /* @__PURE__ */ new Date(+T)); ++sA < cA; )
        p.charCodeAt(sA) === 37 && (f.push(p.slice(N, sA)), (_A = kr[lA = p.charAt(++sA)]) != null ? lA = p.charAt(++sA) : _A = lA === "e" ? " " : "0", (Rr = b[lA]) && (lA = Rr(T, _A)), f.push(lA), N = sA + 1);
      return f.push(p.slice(N, sA)), f.join("");
    };
  }
  function L(p, b) {
    return function(T) {
      var f = oe(1900, void 0, 1), sA = v(f, p, T += "", 0), N, cA;
      if (sA != T.length)
        return null;
      if ("Q" in f)
        return new Date(f.Q);
      if ("s" in f)
        return new Date(f.s * 1e3 + ("L" in f ? f.L : 0));
      if (b && !("Z" in f) && (f.Z = 0), "p" in f && (f.H = f.H % 12 + f.p * 12), f.m === void 0 && (f.m = "q" in f ? f.q : 0), "V" in f) {
        if (f.V < 1 || f.V > 53)
          return null;
        "w" in f || (f.w = 1), "Z" in f ? (N = Mt(oe(f.y, 0, 1)), cA = N.getUTCDay(), N = cA > 4 || cA === 0 ? nr.ceil(N) : nr(N), N = rB.offset(N, (f.V - 1) * 7), f.y = N.getUTCFullYear(), f.m = N.getUTCMonth(), f.d = N.getUTCDate() + (f.w + 6) % 7) : (N = St(oe(f.y, 0, 1)), cA = N.getDay(), N = cA > 4 || cA === 0 ? Br.ceil(N) : Br(N), N = nB.offset(N, (f.V - 1) * 7), f.y = N.getFullYear(), f.m = N.getMonth(), f.d = N.getDate() + (f.w + 6) % 7);
      } else
        ("W" in f || "U" in f) && ("w" in f || (f.w = "u" in f ? f.u % 7 : "W" in f ? 1 : 0), cA = "Z" in f ? Mt(oe(f.y, 0, 1)).getUTCDay() : St(oe(f.y, 0, 1)).getDay(), f.m = 0, f.d = "W" in f ? (f.w + 6) % 7 + f.W * 7 - (cA + 5) % 7 : f.w + f.U * 7 - (cA + 6) % 7);
      return "Z" in f ? (f.H += f.Z / 100 | 0, f.M += f.Z % 100, Mt(f)) : St(f);
    };
  }
  function v(p, b, T, f) {
    for (var sA = 0, N = b.length, cA = T.length, lA, _A; sA < N; ) {
      if (f >= cA)
        return -1;
      if (lA = b.charCodeAt(sA++), lA === 37) {
        if (lA = b.charAt(sA++), _A = m[lA in kr ? b.charAt(sA++) : lA], !_A || (f = _A(p, T, f)) < 0)
          return -1;
      } else if (lA != T.charCodeAt(f++))
        return -1;
    }
    return f;
  }
  function H(p, b, T) {
    var f = o.exec(b.slice(T));
    return f ? (p.p = c.get(f[0].toLowerCase()), T + f[0].length) : -1;
  }
  function O(p, b, T) {
    var f = w.exec(b.slice(T));
    return f ? (p.w = g.get(f[0].toLowerCase()), T + f[0].length) : -1;
  }
  function Z(p, b, T) {
    var f = l.exec(b.slice(T));
    return f ? (p.w = u.get(f[0].toLowerCase()), T + f[0].length) : -1;
  }
  function z(p, b, T) {
    var f = d.exec(b.slice(T));
    return f ? (p.m = F.get(f[0].toLowerCase()), T + f[0].length) : -1;
  }
  function D(p, b, T) {
    var f = Q.exec(b.slice(T));
    return f ? (p.m = I.get(f[0].toLowerCase()), T + f[0].length) : -1;
  }
  function P(p, b, T) {
    return v(p, A, b, T);
  }
  function iA(p, b, T) {
    return v(p, t, b, T);
  }
  function R(p, b, T) {
    return v(p, r, b, T);
  }
  function k(p) {
    return s[p.getDay()];
  }
  function $(p) {
    return B[p.getDay()];
  }
  function AA(p) {
    return i[p.getMonth()];
  }
  function oA(p) {
    return a[p.getMonth()];
  }
  function HA(p) {
    return n[+(p.getHours() >= 12)];
  }
  function vA(p) {
    return 1 + ~~(p.getMonth() / 3);
  }
  function CA(p) {
    return s[p.getUTCDay()];
  }
  function IA(p) {
    return B[p.getUTCDay()];
  }
  function UA(p) {
    return i[p.getUTCMonth()];
  }
  function bA(p) {
    return a[p.getUTCMonth()];
  }
  function kA(p) {
    return n[+(p.getUTCHours() >= 12)];
  }
  function Us(p) {
    return 1 + ~~(p.getUTCMonth() / 3);
  }
  return {
    format: function(p) {
      var b = C(p += "", K);
      return b.toString = function() {
        return p;
      }, b;
    },
    parse: function(p) {
      var b = L(p += "", !1);
      return b.toString = function() {
        return p;
      }, b;
    },
    utcFormat: function(p) {
      var b = C(p += "", y);
      return b.toString = function() {
        return p;
      }, b;
    },
    utcParse: function(p) {
      var b = L(p += "", !0);
      return b.toString = function() {
        return p;
      }, b;
    }
  };
}
var kr = { "-": "", _: " ", 0: "0" }, j = /^\s*\d+/, Hs = /^%/, vs = /[\\^$*+?|[\]().{}]/g;
function S(e, A, t) {
  var r = e < 0 ? "-" : "", n = (r ? -e : e) + "", B = n.length;
  return r + (B < t ? new Array(t - B + 1).join(A) + n : n);
}
function Is(e) {
  return e.replace(vs, "\\$&");
}
function ce(e) {
  return new RegExp("^(?:" + e.map(Is).join("|") + ")", "i");
}
function le(e) {
  return new Map(e.map((A, t) => [A.toLowerCase(), t]));
}
function ms(e, A, t) {
  var r = j.exec(A.slice(t, t + 1));
  return r ? (e.w = +r[0], t + r[0].length) : -1;
}
function ys(e, A, t) {
  var r = j.exec(A.slice(t, t + 1));
  return r ? (e.u = +r[0], t + r[0].length) : -1;
}
function Ks(e, A, t) {
  var r = j.exec(A.slice(t, t + 2));
  return r ? (e.U = +r[0], t + r[0].length) : -1;
}
function Ls(e, A, t) {
  var r = j.exec(A.slice(t, t + 2));
  return r ? (e.V = +r[0], t + r[0].length) : -1;
}
function bs(e, A, t) {
  var r = j.exec(A.slice(t, t + 2));
  return r ? (e.W = +r[0], t + r[0].length) : -1;
}
function _r(e, A, t) {
  var r = j.exec(A.slice(t, t + 4));
  return r ? (e.y = +r[0], t + r[0].length) : -1;
}
function Pr(e, A, t) {
  var r = j.exec(A.slice(t, t + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), t + r[0].length) : -1;
}
function xs(e, A, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(A.slice(t, t + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function Ds(e, A, t) {
  var r = j.exec(A.slice(t, t + 1));
  return r ? (e.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function Ts(e, A, t) {
  var r = j.exec(A.slice(t, t + 2));
  return r ? (e.m = r[0] - 1, t + r[0].length) : -1;
}
function Xr(e, A, t) {
  var r = j.exec(A.slice(t, t + 2));
  return r ? (e.d = +r[0], t + r[0].length) : -1;
}
function Ss(e, A, t) {
  var r = j.exec(A.slice(t, t + 3));
  return r ? (e.m = 0, e.d = +r[0], t + r[0].length) : -1;
}
function Jr(e, A, t) {
  var r = j.exec(A.slice(t, t + 2));
  return r ? (e.H = +r[0], t + r[0].length) : -1;
}
function Ms(e, A, t) {
  var r = j.exec(A.slice(t, t + 2));
  return r ? (e.M = +r[0], t + r[0].length) : -1;
}
function Os(e, A, t) {
  var r = j.exec(A.slice(t, t + 2));
  return r ? (e.S = +r[0], t + r[0].length) : -1;
}
function Gs(e, A, t) {
  var r = j.exec(A.slice(t, t + 3));
  return r ? (e.L = +r[0], t + r[0].length) : -1;
}
function Rs(e, A, t) {
  var r = j.exec(A.slice(t, t + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function Ns(e, A, t) {
  var r = Hs.exec(A.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function Vs(e, A, t) {
  var r = j.exec(A.slice(t));
  return r ? (e.Q = +r[0], t + r[0].length) : -1;
}
function ks(e, A, t) {
  var r = j.exec(A.slice(t));
  return r ? (e.s = +r[0], t + r[0].length) : -1;
}
function Yr(e, A) {
  return S(e.getDate(), A, 2);
}
function _s(e, A) {
  return S(e.getHours(), A, 2);
}
function Ps(e, A) {
  return S(e.getHours() % 12 || 12, A, 2);
}
function Xs(e, A) {
  return S(1 + nB.count(Ke(e), e), A, 3);
}
function BB(e, A) {
  return S(e.getMilliseconds(), A, 3);
}
function Js(e, A) {
  return BB(e, A) + "000";
}
function Ys(e, A) {
  return S(e.getMonth() + 1, A, 2);
}
function Ws(e, A) {
  return S(e.getMinutes(), A, 2);
}
function Zs(e, A) {
  return S(e.getSeconds(), A, 2);
}
function zs(e) {
  var A = e.getDay();
  return A === 0 ? 7 : A;
}
function qs(e, A) {
  return S(hs.count(Ke(e) - 1, e), A, 2);
}
function sB(e) {
  var A = e.getDay();
  return A >= 4 || A === 0 ? Le(e) : Le.ceil(e);
}
function js(e, A) {
  return e = sB(e), S(Le.count(Ke(e), e) + (Ke(e).getDay() === 4), A, 2);
}
function $s(e) {
  return e.getDay();
}
function Aa(e, A) {
  return S(Br.count(Ke(e) - 1, e), A, 2);
}
function ea(e, A) {
  return S(e.getFullYear() % 100, A, 2);
}
function ta(e, A) {
  return e = sB(e), S(e.getFullYear() % 100, A, 2);
}
function ra(e, A) {
  return S(e.getFullYear() % 1e4, A, 4);
}
function na(e, A) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? Le(e) : Le.ceil(e), S(e.getFullYear() % 1e4, A, 4);
}
function Ba(e) {
  var A = e.getTimezoneOffset();
  return (A > 0 ? "-" : (A *= -1, "+")) + S(A / 60 | 0, "0", 2) + S(A % 60, "0", 2);
}
function Wr(e, A) {
  return S(e.getUTCDate(), A, 2);
}
function sa(e, A) {
  return S(e.getUTCHours(), A, 2);
}
function aa(e, A) {
  return S(e.getUTCHours() % 12 || 12, A, 2);
}
function ia(e, A) {
  return S(1 + rB.count(be(e), e), A, 3);
}
function aB(e, A) {
  return S(e.getUTCMilliseconds(), A, 3);
}
function oa(e, A) {
  return aB(e, A) + "000";
}
function ca(e, A) {
  return S(e.getUTCMonth() + 1, A, 2);
}
function la(e, A) {
  return S(e.getUTCMinutes(), A, 2);
}
function ua(e, A) {
  return S(e.getUTCSeconds(), A, 2);
}
function ga(e) {
  var A = e.getUTCDay();
  return A === 0 ? 7 : A;
}
function Qa(e, A) {
  return S(ds.count(be(e) - 1, e), A, 2);
}
function iB(e) {
  var A = e.getUTCDay();
  return A >= 4 || A === 0 ? xe(e) : xe.ceil(e);
}
function wa(e, A) {
  return e = iB(e), S(xe.count(be(e), e) + (be(e).getUTCDay() === 4), A, 2);
}
function fa(e) {
  return e.getUTCDay();
}
function Ca(e, A) {
  return S(nr.count(be(e) - 1, e), A, 2);
}
function Ua(e, A) {
  return S(e.getUTCFullYear() % 100, A, 2);
}
function Fa(e, A) {
  return e = iB(e), S(e.getUTCFullYear() % 100, A, 2);
}
function ha(e, A) {
  return S(e.getUTCFullYear() % 1e4, A, 4);
}
function da(e, A) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? xe(e) : xe.ceil(e), S(e.getUTCFullYear() % 1e4, A, 4);
}
function Ea() {
  return "+0000";
}
function Zr() {
  return "%";
}
function zr(e) {
  return +e;
}
function qr(e) {
  return Math.floor(+e / 1e3);
}
var ZA, oB, cB;
pa({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function pa(e) {
  return ZA = ps(e), oB = ZA.format, cB = ZA.parse, ZA.utcFormat, ZA.utcParse, ZA;
}
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
var sr = function(e, A) {
  return sr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, sr(e, A);
};
function hA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  sr(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var ar = function() {
  return ar = Object.assign || function(A) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var B in t)
        Object.prototype.hasOwnProperty.call(t, B) && (A[B] = t[B]);
    }
    return A;
  }, ar.apply(this, arguments);
};
function BA(e, A, t, r) {
  function n(B) {
    return B instanceof t ? B : new t(function(s) {
      s(B);
    });
  }
  return new (t || (t = Promise))(function(B, s) {
    function a(c) {
      try {
        o(r.next(c));
      } catch (l) {
        s(l);
      }
    }
    function i(c) {
      try {
        o(r.throw(c));
      } catch (l) {
        s(l);
      }
    }
    function o(c) {
      c.done ? B(c.value) : n(c.value).then(a, i);
    }
    o((r = r.apply(e, A || [])).next());
  });
}
function rA(e, A) {
  var t = { label: 0, sent: function() {
    if (B[0] & 1)
      throw B[1];
    return B[1];
  }, trys: [], ops: [] }, r, n, B, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(o) {
    return function(c) {
      return i([o, c]);
    };
  }
  function i(o) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (r = 1, n && (B = o[0] & 2 ? n.return : o[0] ? n.throw || ((B = n.return) && B.call(n), 0) : n.next) && !(B = B.call(n, o[1])).done)
          return B;
        switch (n = 0, B && (o = [o[0] & 2, B.value]), o[0]) {
          case 0:
          case 1:
            B = o;
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
            if (B = t.trys, !(B = B.length > 0 && B[B.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              t = 0;
              continue;
            }
            if (o[0] === 3 && (!B || o[1] > B[0] && o[1] < B[3])) {
              t.label = o[1];
              break;
            }
            if (o[0] === 6 && t.label < B[1]) {
              t.label = B[1], B = o;
              break;
            }
            if (B && t.label < B[2]) {
              t.label = B[2], t.ops.push(o);
              break;
            }
            B[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        o = A.call(e, t);
      } catch (c) {
        o = [6, c], n = 0;
      } finally {
        r = B = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function Ge(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = A.length, B; r < n; r++)
      (B || !(r in A)) && (B || (B = Array.prototype.slice.call(A, 0, r)), B[r] = A[r]);
  return e.concat(B || A);
}
var LA = (
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
), pt = function(e, A) {
  return LA.fromClientRect(e, A.getBoundingClientRect());
}, Ha = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new LA(0, 0, r, n);
}, Ht = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var B = e.charCodeAt(t++);
      (B & 64512) === 56320 ? A.push(((n & 1023) << 10) + (B & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, J = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, B = ""; ++n < t; ) {
    var s = e[n];
    s <= 65535 ? r.push(s) : (s -= 65536, r.push((s >> 10) + 55296, s % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (B += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return B;
}, jr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", va = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Re = 0; Re < jr.length; Re++)
  va[jr.charCodeAt(Re)] = Re;
var $r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ne = 0; Ne < $r.length; Ne++)
  fe[$r.charCodeAt(Ne)] = Ne;
var Ia = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, B, s, a, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    B = fe[e.charCodeAt(r)], s = fe[e.charCodeAt(r + 1)], a = fe[e.charCodeAt(r + 2)], i = fe[e.charCodeAt(r + 3)], c[n++] = B << 2 | s >> 4, c[n++] = (s & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | i & 63;
  return o;
}, ma = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, ya = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, YA = 5, xr = 6 + 5, Ot = 2, Ka = xr - YA, lB = 65536 >> YA, La = 1 << YA, Gt = La - 1, ba = 1024 >> YA, xa = lB + ba, Da = xa, Ta = 32, Sa = Da + Ta, Ma = 65536 >> xr, Oa = 1 << Ka, Ga = Oa - 1, An = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Ra = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Na = function(e, A) {
  var t = Ia(e), r = Array.isArray(t) ? ya(t) : new Uint32Array(t), n = Array.isArray(t) ? ma(t) : new Uint16Array(t), B = 24, s = An(n, B / 2, r[4] / 2), a = r[5] === 2 ? An(n, (B + r[4]) / 2) : Ra(r, Math.ceil((B + r[4]) / 4));
  return new Va(r[0], r[1], r[2], r[3], s, a);
}, Va = (
  /** @class */
  function() {
    function e(A, t, r, n, B, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = B, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> YA], t = (t << Ot) + (A & Gt), this.data[t];
        if (A <= 65535)
          return t = this.index[lB + (A - 55296 >> YA)], t = (t << Ot) + (A & Gt), this.data[t];
        if (A < this.highStart)
          return t = Sa - Ma + (A >> xr), t = this.index[t], t += A >> YA & Ga, t = this.index[t], t = (t << Ot) + (A & Gt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), en = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ka = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ve = 0; Ve < en.length; Ve++)
  ka[en.charCodeAt(Ve)] = Ve;
var _a = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", tn = 50, Pa = 1, uB = 2, gB = 3, Xa = 4, Ja = 5, rn = 7, QB = 8, nn = 9, MA = 10, ir = 11, Bn = 12, or = 13, Ya = 14, Ce = 15, cr = 16, ke = 17, ue = 18, Wa = 19, sn = 20, lr = 21, ge = 22, Rt = 23, zA = 24, uA = 25, Ue = 26, Fe = 27, qA = 28, Za = 29, XA = 30, za = 31, _e = 32, Pe = 33, ur = 34, gr = 35, Qr = 36, De = 37, wr = 38, at = 39, it = 40, Nt = 41, wB = 42, qa = 43, ja = [9001, 65288], fB = "!", x = "×", Xe = "÷", fr = Na(_a), mA = [XA, Qr], Cr = [Pa, uB, gB, Ja], CB = [MA, QB], an = [Fe, Ue], $a = Cr.concat(CB), on = [wr, at, it, ur, gr], Ai = [Ce, or], ei = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(B, s) {
    var a = fr.get(B);
    if (a > tn ? (n.push(!0), a -= tn) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(B) !== -1)
      return r.push(s), t.push(cr);
    if (a === Xa || a === ir) {
      if (s === 0)
        return r.push(s), t.push(XA);
      var i = t[s - 1];
      return $a.indexOf(i) === -1 ? (r.push(r[s - 1]), t.push(i)) : (r.push(s), t.push(XA));
    }
    if (r.push(s), a === za)
      return t.push(A === "strict" ? lr : De);
    if (a === wB || a === Za)
      return t.push(XA);
    if (a === qa)
      return B >= 131072 && B <= 196605 || B >= 196608 && B <= 262141 ? t.push(De) : t.push(XA);
    t.push(a);
  }), [r, t, n];
}, Vt = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var B = t; B <= r.length; ) {
      B++;
      var s = r[B];
      if (s === A)
        return !0;
      if (s !== MA)
        break;
    }
  if (n === MA)
    for (var B = t; B > 0; ) {
      B--;
      var a = r[B];
      if (Array.isArray(e) ? e.indexOf(a) !== -1 : e === a)
        for (var i = t; i <= r.length; ) {
          i++;
          var s = r[i];
          if (s === A)
            return !0;
          if (s !== MA)
            break;
        }
      if (a !== MA)
        break;
    }
  return !1;
}, cn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === MA)
      t--;
    else
      return r;
  }
  return 0;
}, ti = function(e, A, t, r, n) {
  if (t[r] === 0)
    return x;
  var B = r - 1;
  if (Array.isArray(n) && n[B] === !0)
    return x;
  var s = B - 1, a = B + 1, i = A[B], o = s >= 0 ? A[s] : 0, c = A[a];
  if (i === uB && c === gB)
    return x;
  if (Cr.indexOf(i) !== -1)
    return fB;
  if (Cr.indexOf(c) !== -1 || CB.indexOf(c) !== -1)
    return x;
  if (cn(B, A) === QB)
    return Xe;
  if (fr.get(e[B]) === ir || (i === _e || i === Pe) && fr.get(e[a]) === ir || i === rn || c === rn || i === nn || [MA, or, Ce].indexOf(i) === -1 && c === nn || [ke, ue, Wa, zA, qA].indexOf(c) !== -1 || cn(B, A) === ge || Vt(Rt, ge, B, A) || Vt([ke, ue], lr, B, A) || Vt(Bn, Bn, B, A))
    return x;
  if (i === MA)
    return Xe;
  if (i === Rt || c === Rt)
    return x;
  if (c === cr || i === cr)
    return Xe;
  if ([or, Ce, lr].indexOf(c) !== -1 || i === Ya || o === Qr && Ai.indexOf(i) !== -1 || i === qA && c === Qr || c === sn || mA.indexOf(c) !== -1 && i === uA || mA.indexOf(i) !== -1 && c === uA || i === Fe && [De, _e, Pe].indexOf(c) !== -1 || [De, _e, Pe].indexOf(i) !== -1 && c === Ue || mA.indexOf(i) !== -1 && an.indexOf(c) !== -1 || an.indexOf(i) !== -1 && mA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Fe, Ue].indexOf(i) !== -1 && (c === uA || [ge, Ce].indexOf(c) !== -1 && A[a + 1] === uA) || // ( OP | HY ) × NU
  [ge, Ce].indexOf(i) !== -1 && c === uA || // NU ×	(NU | SY | IS)
  i === uA && [uA, qA, zA].indexOf(c) !== -1)
    return x;
  if ([uA, qA, zA, ke, ue].indexOf(c) !== -1)
    for (var l = B; l >= 0; ) {
      var u = A[l];
      if (u === uA)
        return x;
      if ([qA, zA].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if ([Fe, Ue].indexOf(c) !== -1)
    for (var l = [ke, ue].indexOf(i) !== -1 ? s : B; l >= 0; ) {
      var u = A[l];
      if (u === uA)
        return x;
      if ([qA, zA].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if (wr === i && [wr, at, ur, gr].indexOf(c) !== -1 || [at, ur].indexOf(i) !== -1 && [at, it].indexOf(c) !== -1 || [it, gr].indexOf(i) !== -1 && c === it || on.indexOf(i) !== -1 && [sn, Ue].indexOf(c) !== -1 || on.indexOf(c) !== -1 && i === Fe || mA.indexOf(i) !== -1 && mA.indexOf(c) !== -1 || i === zA && mA.indexOf(c) !== -1 || mA.concat(uA).indexOf(i) !== -1 && c === ge && ja.indexOf(e[a]) === -1 || mA.concat(uA).indexOf(c) !== -1 && i === ue)
    return x;
  if (i === Nt && c === Nt) {
    for (var w = t[B], g = 1; w > 0 && (w--, A[w] === Nt); )
      g++;
    if (g % 2 !== 0)
      return x;
  }
  return i === _e && c === Pe ? x : Xe;
}, ri = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = ei(e, A.lineBreak), r = t[0], n = t[1], B = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(a) {
    return [uA, XA, wB].indexOf(a) !== -1 ? De : a;
  }));
  var s = A.wordBreak === "keep-all" ? B.map(function(a, i) {
    return a && e[i] >= 19968 && e[i] <= 40959;
  }) : void 0;
  return [r, n, s];
}, ni = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === fB, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return J.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), Bi = function(e, A) {
  var t = Ht(e), r = ri(t, A), n = r[0], B = r[1], s = r[2], a = t.length, i = 0, o = 0;
  return {
    next: function() {
      if (o >= a)
        return { done: !0, value: null };
      for (var c = x; o < a && (c = ti(t, B, n, ++o, s)) === x; )
        ;
      if (c !== x || o === a) {
        var l = new ni(t, c, i, o);
        return i = o, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, si = 1, ai = 2, Me = 4, ln = 8, gt = 10, un = 47, He = 92, ii = 9, oi = 32, Je = 34, Qe = 61, ci = 35, li = 36, ui = 37, Ye = 39, We = 40, we = 41, gi = 95, aA = 45, Qi = 33, wi = 60, fi = 62, Ci = 64, Ui = 91, Fi = 93, hi = 61, di = 123, Ze = 63, Ei = 125, gn = 124, pi = 126, Hi = 128, Qn = 65533, kt = 42, JA = 43, vi = 44, Ii = 58, mi = 59, Te = 46, yi = 0, Ki = 8, Li = 11, bi = 14, xi = 31, Di = 127, dA = -1, UB = 48, FB = 97, hB = 101, Ti = 102, Si = 117, Mi = 122, dB = 65, EB = 69, pB = 70, Oi = 85, Gi = 90, nA = function(e) {
  return e >= UB && e <= 57;
}, Ri = function(e) {
  return e >= 55296 && e <= 57343;
}, jA = function(e) {
  return nA(e) || e >= dB && e <= pB || e >= FB && e <= Ti;
}, Ni = function(e) {
  return e >= FB && e <= Mi;
}, Vi = function(e) {
  return e >= dB && e <= Gi;
}, ki = function(e) {
  return Ni(e) || Vi(e);
}, _i = function(e) {
  return e >= Hi;
}, ze = function(e) {
  return e === gt || e === ii || e === oi;
}, Qt = function(e) {
  return ki(e) || _i(e) || e === gi;
}, wn = function(e) {
  return Qt(e) || nA(e) || e === aA;
}, Pi = function(e) {
  return e >= yi && e <= Ki || e === Li || e >= bi && e <= xi || e === Di;
}, SA = function(e, A) {
  return e !== He ? !1 : A !== gt;
}, qe = function(e, A, t) {
  return e === aA ? Qt(A) || SA(A, t) : Qt(e) ? !0 : !!(e === He && SA(e, A));
}, _t = function(e, A, t) {
  return e === JA || e === aA ? nA(A) ? !0 : A === Te && nA(t) : nA(e === Te ? A : e);
}, Xi = function(e) {
  var A = 0, t = 1;
  (e[A] === JA || e[A] === aA) && (e[A] === aA && (t = -1), A++);
  for (var r = []; nA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(J.apply(void 0, r), 10) : 0;
  e[A] === Te && A++;
  for (var B = []; nA(e[A]); )
    B.push(e[A++]);
  var s = B.length, a = s ? parseInt(J.apply(void 0, B), 10) : 0;
  (e[A] === EB || e[A] === hB) && A++;
  var i = 1;
  (e[A] === JA || e[A] === aA) && (e[A] === aA && (i = -1), A++);
  for (var o = []; nA(e[A]); )
    o.push(e[A++]);
  var c = o.length ? parseInt(J.apply(void 0, o), 10) : 0;
  return t * (n + a * Math.pow(10, -s)) * Math.pow(10, i * c);
}, Ji = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, Yi = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, Wi = {
  type: 4
  /* COMMA_TOKEN */
}, Zi = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, zi = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, qi = {
  type: 21
  /* COLUMN_TOKEN */
}, ji = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, $i = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, Ao = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, eo = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, to = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, je = {
  type: 23
  /* BAD_URL_TOKEN */
}, ro = {
  type: 1
  /* BAD_STRING_TOKEN */
}, no = {
  type: 25
  /* CDO_TOKEN */
}, Bo = {
  type: 24
  /* CDC_TOKEN */
}, so = {
  type: 26
  /* COLON_TOKEN */
}, ao = {
  type: 27
  /* SEMICOLON_TOKEN */
}, io = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, oo = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, co = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Ur = {
  type: 32
  /* EOF_TOKEN */
}, HB = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(Ht(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== Ur; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Je:
          return this.consumeStringToken(Je);
        case ci:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (wn(t) || SA(r, n)) {
            var B = qe(t, r, n) ? ai : si, s = this.consumeName();
            return { type: 5, value: s, flags: B };
          }
          break;
        case li:
          if (this.peekCodePoint(0) === Qe)
            return this.consumeCodePoint(), Zi;
          break;
        case Ye:
          return this.consumeStringToken(Ye);
        case We:
          return Ji;
        case we:
          return Yi;
        case kt:
          if (this.peekCodePoint(0) === Qe)
            return this.consumeCodePoint(), to;
          break;
        case JA:
          if (_t(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case vi:
          return Wi;
        case aA:
          var a = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (_t(a, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (qe(a, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === aA && o === fi)
            return this.consumeCodePoint(), this.consumeCodePoint(), Bo;
          break;
        case Te:
          if (_t(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case un:
          if (this.peekCodePoint(0) === kt)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === kt && (c = this.consumeCodePoint(), c === un))
                return this.consumeToken();
              if (c === dA)
                return this.consumeToken();
            }
          break;
        case Ii:
          return so;
        case mi:
          return ao;
        case wi:
          if (this.peekCodePoint(0) === Qi && this.peekCodePoint(1) === aA && this.peekCodePoint(2) === aA)
            return this.consumeCodePoint(), this.consumeCodePoint(), no;
          break;
        case Ci:
          var l = this.peekCodePoint(0), u = this.peekCodePoint(1), w = this.peekCodePoint(2);
          if (qe(l, u, w)) {
            var s = this.consumeName();
            return { type: 7, value: s };
          }
          break;
        case Ui:
          return io;
        case He:
          if (SA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case Fi:
          return oo;
        case hi:
          if (this.peekCodePoint(0) === Qe)
            return this.consumeCodePoint(), zi;
          break;
        case di:
          return Ao;
        case Ei:
          return eo;
        case Si:
        case Oi:
          var g = this.peekCodePoint(0), Q = this.peekCodePoint(1);
          return g === JA && (jA(Q) || Q === Ze) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case gn:
          if (this.peekCodePoint(0) === Qe)
            return this.consumeCodePoint(), ji;
          if (this.peekCodePoint(0) === gn)
            return this.consumeCodePoint(), qi;
          break;
        case pi:
          if (this.peekCodePoint(0) === Qe)
            return this.consumeCodePoint(), $i;
          break;
        case dA:
          return Ur;
      }
      return ze(A) ? (this.consumeWhiteSpace(), co) : nA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Qt(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: J(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); jA(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === Ze && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(J.apply(void 0, A.map(function(i) {
          return i === Ze ? UB : i;
        })), 16), B = parseInt(J.apply(void 0, A.map(function(i) {
          return i === Ze ? pB : i;
        })), 16);
        return { type: 30, start: n, end: B };
      }
      var s = parseInt(J.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === aA && jA(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; jA(t) && a.length < 6; )
          a.push(t), t = this.consumeCodePoint();
        var B = parseInt(J.apply(void 0, a), 16);
        return { type: 30, start: s, end: B };
      } else
        return { type: 30, start: s, end: s };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === We ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === We ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === dA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ye || t === Je) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === dA || this.peekCodePoint(0) === we) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), je);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === dA || n === we)
          return { type: 22, value: J.apply(void 0, A) };
        if (ze(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === dA || this.peekCodePoint(0) === we ? (this.consumeCodePoint(), { type: 22, value: J.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), je);
        if (n === Je || n === Ye || n === We || Pi(n))
          return this.consumeBadUrlRemnants(), je;
        if (n === He)
          if (SA(n, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), je;
        else
          A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; ze(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === we || A === dA)
          return;
        SA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var n = Math.min(t, A);
        r += J.apply(void 0, this._value.splice(0, n)), A -= n;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === dA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === gt)
          return this._value.splice(0, r), ro;
        if (n === He) {
          var B = this._value[r + 1];
          B !== dA && B !== void 0 && (B === gt ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : SA(n, B) && (t += this.consumeStringSlice(r), t += J(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Me, r = this.peekCodePoint(0);
      for ((r === JA || r === aA) && A.push(this.consumeCodePoint()); nA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Te && nA(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ln; nA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var B = this.peekCodePoint(2);
      if ((r === EB || r === hB) && ((n === JA || n === aA) && nA(B) || nA(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ln; nA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [Xi(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), B = this.peekCodePoint(1), s = this.peekCodePoint(2);
      if (qe(n, B, s)) {
        var a = this.consumeName();
        return { type: 15, number: t, flags: r, unit: a };
      }
      return n === ui ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (jA(A)) {
        for (var t = J(A); jA(this.peekCodePoint(0)) && t.length < 6; )
          t += J(this.consumeCodePoint());
        ze(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Ri(r) || r > 1114111 ? Qn : r;
      }
      return A === dA ? Qn : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (wn(t))
          A += J(t);
        else if (SA(t, this.peekCodePoint(0)))
          A += J(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  }()
), vB = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new HB();
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
        if (r.type === 32 || uo(r, A))
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
      return typeof A > "u" ? Ur : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  }()
), Oe = function(e) {
  return e.type === 15;
}, ie = function(e) {
  return e.type === 17;
}, G = function(e) {
  return e.type === 20;
}, lo = function(e) {
  return e.type === 0;
}, Fr = function(e, A) {
  return G(e) && e.value === A;
}, IB = function(e) {
  return e.type !== 31;
}, se = function(e) {
  return e.type !== 31 && e.type !== 4;
}, EA = function(e) {
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
}, uo = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, VA = function(e) {
  return e.type === 17 || e.type === 15;
}, Y = function(e) {
  return e.type === 16 || VA(e);
}, mB = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, tA = {
  type: 17,
  number: 0,
  flags: Me
}, Dr = {
  type: 16,
  number: 50,
  flags: Me
}, OA = {
  type: 16,
  number: 100,
  flags: Me
}, he = function(e, A, t) {
  var r = e[0], n = e[1];
  return [V(r, A), V(typeof n < "u" ? n : r, t)];
}, V = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (Oe(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, yB = "deg", KB = "grad", LB = "rad", bB = "turn", vt = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case yB:
          return Math.PI * A.number / 180;
        case KB:
          return Math.PI / 200 * A.number;
        case LB:
          return A.number;
        case bB:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, xB = function(e) {
  return e.type === 15 && (e.unit === yB || e.unit === KB || e.unit === LB || e.unit === bB);
}, DB = function(e) {
  var A = e.filter(G).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [tA, tA];
    case "to top":
    case "bottom":
      return wA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [tA, OA];
    case "to right":
    case "left":
      return wA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [OA, OA];
    case "to bottom":
    case "top":
      return wA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [OA, tA];
    case "to left":
    case "right":
      return wA(270);
  }
  return 0;
}, wA = function(e) {
  return Math.PI * e / 180;
}, RA = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = go[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), B = A.value.substring(2, 3);
        return GA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(B + B, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), B = A.value.substring(2, 3), s = A.value.substring(3, 4);
        return GA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(B + B, 16), parseInt(s + s, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), B = A.value.substring(4, 6);
        return GA(parseInt(r, 16), parseInt(n, 16), parseInt(B, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), B = A.value.substring(4, 6), s = A.value.substring(6, 8);
        return GA(parseInt(r, 16), parseInt(n, 16), parseInt(B, 16), parseInt(s, 16) / 255);
      }
    }
    if (A.type === 20) {
      var a = KA[A.value.toUpperCase()];
      if (typeof a < "u")
        return a;
    }
    return KA.TRANSPARENT;
  }
}, NA = function(e) {
  return (255 & e) === 0;
}, q = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, GA = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, fn = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, Cn = function(e, A) {
  var t = A.filter(se);
  if (t.length === 3) {
    var r = t.map(fn), n = r[0], B = r[1], s = r[2];
    return GA(n, B, s, 1);
  }
  if (t.length === 4) {
    var a = t.map(fn), n = a[0], B = a[1], s = a[2], i = a[3];
    return GA(n, B, s, i);
  }
  return 0;
};
function Pt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var Un = function(e, A) {
  var t = A.filter(se), r = t[0], n = t[1], B = t[2], s = t[3], a = (r.type === 17 ? wA(r.number) : vt.parse(e, r)) / (Math.PI * 2), i = Y(n) ? n.number / 100 : 0, o = Y(B) ? B.number / 100 : 0, c = typeof s < "u" && Y(s) ? V(s, 1) : 1;
  if (i === 0)
    return GA(o * 255, o * 255, o * 255, 1);
  var l = o <= 0.5 ? o * (i + 1) : o + i - o * i, u = o * 2 - l, w = Pt(u, l, a + 1 / 3), g = Pt(u, l, a), Q = Pt(u, l, a - 1 / 3);
  return GA(w * 255, g * 255, Q * 255, c);
}, go = {
  hsl: Un,
  hsla: Un,
  rgb: Cn,
  rgba: Cn
}, ve = function(e, A) {
  return RA.parse(e, vB.create(A).parseComponentValue());
}, KA = {
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
}, Qo = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (G(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, wo = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, It = function(e, A) {
  var t = RA.parse(e, A[0]), r = A[1];
  return r && Y(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Fn = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = tA), r.stop === null && (r.stop = OA);
  for (var n = [], B = 0, s = 0; s < e.length; s++) {
    var a = e[s].stop;
    if (a !== null) {
      var i = V(a, A);
      i > B ? n.push(i) : n.push(B), B = i;
    } else
      n.push(null);
  }
  for (var o = null, s = 0; s < n.length; s++) {
    var c = n[s];
    if (c === null)
      o === null && (o = s);
    else if (o !== null) {
      for (var l = s - o, u = n[o - 1], w = (c - u) / (l + 1), g = 1; g <= l; g++)
        n[o + g - 1] = w * g;
      o = null;
    }
  }
  return e.map(function(Q, I) {
    var d = Q.color;
    return { color: d, stop: Math.max(Math.min(1, n[I] / A), 0) };
  });
}, fo = function(e, A, t) {
  var r = A / 2, n = t / 2, B = V(e[0], A) - r, s = n - V(e[1], t);
  return (Math.atan2(s, B) + Math.PI * 2) % (Math.PI * 2);
}, Co = function(e, A, t) {
  var r = typeof e == "number" ? e : fo(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), B = A / 2, s = t / 2, a = n / 2, i = Math.sin(r - Math.PI / 2) * a, o = Math.cos(r - Math.PI / 2) * a;
  return [n, B - o, B + o, s - i, s + i];
}, FA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, hn = function(e, A, t, r, n) {
  var B = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return B.reduce(function(s, a) {
    var i = a[0], o = a[1], c = FA(t - i, r - o);
    return (n ? c < s.optimumDistance : c > s.optimumDistance) ? {
      optimumCorner: a,
      optimumDistance: c
    } : s;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, Uo = function(e, A, t, r, n) {
  var B = 0, s = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? B = s = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (B = Math.min(Math.abs(A), Math.abs(A - r)), s = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        B = s = Math.min(FA(A, t), FA(A, t - n), FA(A - r, t), FA(A - r, t - n));
      else if (e.shape === 1) {
        var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), i = hn(r, n, A, t, !0), o = i[0], c = i[1];
        B = FA(o - A, (c - t) / a), s = a * B;
      }
      break;
    case 1:
      e.shape === 0 ? B = s = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (B = Math.max(Math.abs(A), Math.abs(A - r)), s = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        B = s = Math.max(FA(A, t), FA(A, t - n), FA(A - r, t), FA(A - r, t - n));
      else if (e.shape === 1) {
        var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), l = hn(r, n, A, t, !1), o = l[0], c = l[1];
        B = FA(o - A, (c - t) / a), s = a * B;
      }
      break;
  }
  return Array.isArray(e.size) && (B = V(e.size[0], r), s = e.size.length === 2 ? V(e.size[1], n) : B), [B, s];
}, Fo = function(e, A) {
  var t = wA(180), r = [];
  return EA(A).forEach(function(n, B) {
    if (B === 0) {
      var s = n[0];
      if (s.type === 20 && s.value === "to") {
        t = DB(n);
        return;
      } else if (xB(s)) {
        t = vt.parse(e, s);
        return;
      }
    }
    var a = It(e, n);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, $e = function(e, A) {
  var t = wA(180), r = [];
  return EA(A).forEach(function(n, B) {
    if (B === 0) {
      var s = n[0];
      if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
        t = DB(n);
        return;
      } else if (xB(s)) {
        t = (vt.parse(e, s) + wA(270)) % wA(360);
        return;
      }
    }
    var a = It(e, n);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, ho = function(e, A) {
  var t = wA(180), r = [], n = 1, B = 0, s = 3, a = [];
  return EA(A).forEach(function(i, o) {
    var c = i[0];
    if (o === 0) {
      if (G(c) && c.value === "linear") {
        n = 1;
        return;
      } else if (G(c) && c.value === "radial") {
        n = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var l = RA.parse(e, c.values[0]);
        r.push({ stop: tA, color: l });
      } else if (c.name === "to") {
        var l = RA.parse(e, c.values[0]);
        r.push({ stop: OA, color: l });
      } else if (c.name === "color-stop") {
        var u = c.values.filter(se);
        if (u.length === 2) {
          var l = RA.parse(e, u[1]), w = u[0];
          ie(w) && r.push({
            stop: { type: 16, number: w.number * 100, flags: w.flags },
            color: l
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + wA(180)) % wA(360),
    stops: r,
    type: n
  } : { size: s, shape: B, stops: r, position: a, type: n };
}, TB = "closest-side", SB = "farthest-side", MB = "closest-corner", OB = "farthest-corner", GB = "circle", RB = "ellipse", NB = "cover", VB = "contain", Eo = function(e, A) {
  var t = 0, r = 3, n = [], B = [];
  return EA(A).forEach(function(s, a) {
    var i = !0;
    if (a === 0) {
      var o = !1;
      i = s.reduce(function(l, u) {
        if (o)
          if (G(u))
            switch (u.value) {
              case "center":
                return B.push(Dr), l;
              case "top":
              case "left":
                return B.push(tA), l;
              case "right":
              case "bottom":
                return B.push(OA), l;
            }
          else
            (Y(u) || VA(u)) && B.push(u);
        else if (G(u))
          switch (u.value) {
            case GB:
              return t = 0, !1;
            case RB:
              return t = 1, !1;
            case "at":
              return o = !0, !1;
            case TB:
              return r = 0, !1;
            case NB:
            case SB:
              return r = 1, !1;
            case VB:
            case MB:
              return r = 2, !1;
            case OB:
              return r = 3, !1;
          }
        else if (VA(u) || Y(u))
          return Array.isArray(r) || (r = []), r.push(u), !1;
        return l;
      }, i);
    }
    if (i) {
      var c = It(e, s);
      n.push(c);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: B,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, At = function(e, A) {
  var t = 0, r = 3, n = [], B = [];
  return EA(A).forEach(function(s, a) {
    var i = !0;
    if (a === 0 ? i = s.reduce(function(c, l) {
      if (G(l))
        switch (l.value) {
          case "center":
            return B.push(Dr), !1;
          case "top":
          case "left":
            return B.push(tA), !1;
          case "right":
          case "bottom":
            return B.push(OA), !1;
        }
      else if (Y(l) || VA(l))
        return B.push(l), !1;
      return c;
    }, i) : a === 1 && (i = s.reduce(function(c, l) {
      if (G(l))
        switch (l.value) {
          case GB:
            return t = 0, !1;
          case RB:
            return t = 1, !1;
          case VB:
          case TB:
            return r = 0, !1;
          case SB:
            return r = 1, !1;
          case MB:
            return r = 2, !1;
          case NB:
          case OB:
            return r = 3, !1;
        }
      else if (VA(l) || Y(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return c;
    }, i)), i) {
      var o = It(e, s);
      n.push(o);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: B,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, po = function(e) {
  return e.type === 1;
}, Ho = function(e) {
  return e.type === 2;
}, Tr = {
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
      var r = kB[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function vo(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!kB[e.name]);
}
var kB = {
  "linear-gradient": Fo,
  "-moz-linear-gradient": $e,
  "-ms-linear-gradient": $e,
  "-o-linear-gradient": $e,
  "-webkit-linear-gradient": $e,
  "radial-gradient": Eo,
  "-moz-radial-gradient": At,
  "-ms-radial-gradient": At,
  "-o-radial-gradient": At,
  "-webkit-radial-gradient": At,
  "-webkit-gradient": ho
}, Io = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return se(r) && vo(r);
    }).map(function(r) {
      return Tr.parse(e, r);
    });
  }
}, mo = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (G(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, yo = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return EA(A).map(function(t) {
      return t.filter(Y);
    }).map(mB);
  }
}, Ko = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return EA(A).map(function(t) {
      return t.filter(G).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Lo);
  }
}, Lo = function(e) {
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
}, Be;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(Be || (Be = {}));
var bo = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return EA(A).map(function(t) {
      return t.filter(xo);
    });
  }
}, xo = function(e) {
  return G(e) || Y(e);
}, mt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Do = mt("top"), To = mt("right"), So = mt("bottom"), Mo = mt("left"), yt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return mB(t.filter(Y));
    }
  };
}, Oo = yt("top-left"), Go = yt("top-right"), Ro = yt("bottom-right"), No = yt("bottom-left"), Kt = function(e) {
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
}, Vo = Kt("top"), ko = Kt("right"), _o = Kt("bottom"), Po = Kt("left"), Lt = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return Oe(t) ? t.number : 0;
    }
  };
}, Xo = Lt("top"), Jo = Lt("right"), Yo = Lt("bottom"), Wo = Lt("left"), Zo = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, zo = {
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
}, qo = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(G).reduce(
      function(t, r) {
        return t | jo(r.value);
      },
      0
      /* NONE */
    );
  }
}, jo = function(e) {
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
}, $o = {
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
}, Ac = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, wt;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(wt || (wt = {}));
var ec = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return wt.STRICT;
      case "normal":
      default:
        return wt.NORMAL;
    }
  }
}, tc = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, dn = function(e, A) {
  return G(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : Y(e) ? V(e, A) : A;
}, rc = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Tr.parse(e, A);
  }
}, nc = {
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
}, hr = {
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
}, bt = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, Bc = bt("top"), sc = bt("right"), ac = bt("bottom"), ic = bt("left"), oc = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(G).map(function(t) {
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
}, cc = {
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
}, xt = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, lc = xt("top"), uc = xt("right"), gc = xt("bottom"), Qc = xt("left"), wc = {
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
}, fc = {
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
}, Cc = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Fr(A[0], "none") ? [] : EA(A).map(function(t) {
      for (var r = {
        color: KA.TRANSPARENT,
        offsetX: tA,
        offsetY: tA,
        blur: tA
      }, n = 0, B = 0; B < t.length; B++) {
        var s = t[B];
        VA(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : r.blur = s, n++) : r.color = RA.parse(e, s);
      }
      return r;
    });
  }
}, Uc = {
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
}, Fc = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = Ec[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, hc = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, dc = function(e) {
  var A = e.filter(function(i) {
    return i.type === 17;
  }).map(function(i) {
    return i.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var n = A[4], B = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var s = A[12], a = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, n, B, s, a] : null;
}, Ec = {
  matrix: hc,
  matrix3d: dc
}, En = {
  type: 16,
  number: 50,
  flags: Me
}, pc = [En, En], Hc = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(Y);
    return t.length !== 2 ? pc : [t[0], t[1]];
  }
}, vc = {
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
}, Ie;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(Ie || (Ie = {}));
var Ic = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return Ie.BREAK_ALL;
      case "keep-all":
        return Ie.KEEP_ALL;
      case "normal":
      default:
        return Ie.NORMAL;
    }
  }
}, mc = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (ie(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, _B = {
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
}, yc = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return ie(A) ? A.number : 1;
  }
}, Kc = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Lc = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(G).map(function(t) {
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
}, bc = {
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
}, xc = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Dc = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (ie(A))
      return A.number;
    if (G(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, Tc = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(G).map(function(t) {
      return t.value;
    });
  }
}, Sc = {
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
}, W = function(e, A) {
  return (e & A) !== 0;
}, Mc = {
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
}, Oc = {
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
    for (var r = [], n = A.filter(IB), B = 0; B < n.length; B++) {
      var s = n[B], a = n[B + 1];
      if (s.type === 20) {
        var i = a && ie(a) ? a.number : 1;
        r.push({ counter: s.value, increment: i });
      }
    }
    return r;
  }
}, Gc = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(IB), n = 0; n < r.length; n++) {
      var B = r[n], s = r[n + 1];
      if (G(B) && B.value !== "none") {
        var a = s && ie(s) ? s.number : 0;
        t.push({ counter: B.value, reset: a });
      }
    }
    return t;
  }
}, Rc = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(Oe).map(function(t) {
      return _B.parse(e, t);
    });
  }
}, Nc = {
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
    var r = [], n = A.filter(lo);
    if (n.length % 2 !== 0)
      return null;
    for (var B = 0; B < n.length; B += 2) {
      var s = n[B].value, a = n[B + 1].value;
      r.push({ open: s, close: a });
    }
    return r;
  }
}, pn = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Vc = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Fr(A[0], "none") ? [] : EA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: tA,
        offsetY: tA,
        blur: tA,
        spread: tA,
        inset: !1
      }, n = 0, B = 0; B < t.length; B++) {
        var s = t[B];
        Fr(s, "inset") ? r.inset = !0 : VA(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : n === 2 ? r.blur = s : r.spread = s, n++) : r.color = RA.parse(e, s);
      }
      return r;
    });
  }
}, kc = {
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
    return A.filter(G).forEach(function(n) {
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
}, _c = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Pc = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return Oe(A) ? A.number : 0;
  }
}, Xc = (
  /** @class */
  function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = E(A, Rc, t.animationDuration), this.backgroundClip = E(A, Qo, t.backgroundClip), this.backgroundColor = E(A, wo, t.backgroundColor), this.backgroundImage = E(A, Io, t.backgroundImage), this.backgroundOrigin = E(A, mo, t.backgroundOrigin), this.backgroundPosition = E(A, yo, t.backgroundPosition), this.backgroundRepeat = E(A, Ko, t.backgroundRepeat), this.backgroundSize = E(A, bo, t.backgroundSize), this.borderTopColor = E(A, Do, t.borderTopColor), this.borderRightColor = E(A, To, t.borderRightColor), this.borderBottomColor = E(A, So, t.borderBottomColor), this.borderLeftColor = E(A, Mo, t.borderLeftColor), this.borderTopLeftRadius = E(A, Oo, t.borderTopLeftRadius), this.borderTopRightRadius = E(A, Go, t.borderTopRightRadius), this.borderBottomRightRadius = E(A, Ro, t.borderBottomRightRadius), this.borderBottomLeftRadius = E(A, No, t.borderBottomLeftRadius), this.borderTopStyle = E(A, Vo, t.borderTopStyle), this.borderRightStyle = E(A, ko, t.borderRightStyle), this.borderBottomStyle = E(A, _o, t.borderBottomStyle), this.borderLeftStyle = E(A, Po, t.borderLeftStyle), this.borderTopWidth = E(A, Xo, t.borderTopWidth), this.borderRightWidth = E(A, Jo, t.borderRightWidth), this.borderBottomWidth = E(A, Yo, t.borderBottomWidth), this.borderLeftWidth = E(A, Wo, t.borderLeftWidth), this.boxShadow = E(A, Vc, t.boxShadow), this.color = E(A, Zo, t.color), this.direction = E(A, zo, t.direction), this.display = E(A, qo, t.display), this.float = E(A, $o, t.cssFloat), this.fontFamily = E(A, bc, t.fontFamily), this.fontSize = E(A, xc, t.fontSize), this.fontStyle = E(A, Sc, t.fontStyle), this.fontVariant = E(A, Tc, t.fontVariant), this.fontWeight = E(A, Dc, t.fontWeight), this.letterSpacing = E(A, Ac, t.letterSpacing), this.lineBreak = E(A, ec, t.lineBreak), this.lineHeight = E(A, tc, t.lineHeight), this.listStyleImage = E(A, rc, t.listStyleImage), this.listStylePosition = E(A, nc, t.listStylePosition), this.listStyleType = E(A, hr, t.listStyleType), this.marginTop = E(A, Bc, t.marginTop), this.marginRight = E(A, sc, t.marginRight), this.marginBottom = E(A, ac, t.marginBottom), this.marginLeft = E(A, ic, t.marginLeft), this.opacity = E(A, yc, t.opacity);
      var B = E(A, oc, t.overflow);
      this.overflowX = B[0], this.overflowY = B[B.length > 1 ? 1 : 0], this.overflowWrap = E(A, cc, t.overflowWrap), this.paddingTop = E(A, lc, t.paddingTop), this.paddingRight = E(A, uc, t.paddingRight), this.paddingBottom = E(A, gc, t.paddingBottom), this.paddingLeft = E(A, Qc, t.paddingLeft), this.paintOrder = E(A, kc, t.paintOrder), this.position = E(A, fc, t.position), this.textAlign = E(A, wc, t.textAlign), this.textDecorationColor = E(A, Kc, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = E(A, Lc, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = E(A, Cc, t.textShadow), this.textTransform = E(A, Uc, t.textTransform), this.transform = E(A, Fc, t.transform), this.transformOrigin = E(A, Hc, t.transformOrigin), this.visibility = E(A, vc, t.visibility), this.webkitTextStrokeColor = E(A, _c, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = E(A, Pc, t.webkitTextStrokeWidth), this.wordBreak = E(A, Ic, t.wordBreak), this.zIndex = E(A, mc, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return NA(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return W(
        this.display,
        4
        /* INLINE */
      ) || W(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || W(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || W(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || W(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || W(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), Jc = (
  /** @class */
  function() {
    function e(A, t) {
      this.content = E(A, Mc, t.content), this.quotes = E(A, Nc, t.quotes);
    }
    return e;
  }()
), Hn = (
  /** @class */
  function() {
    function e(A, t) {
      this.counterIncrement = E(A, Oc, t.counterIncrement), this.counterReset = E(A, Gc, t.counterReset);
    }
    return e;
  }()
), E = function(e, A, t) {
  var r = new HB(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var B = new vB(r.read());
  switch (A.type) {
    case 2:
      var s = B.parseComponentValue();
      return A.parse(e, G(s) ? s.value : A.initialValue);
    case 0:
      return A.parse(e, B.parseComponentValue());
    case 1:
      return A.parse(e, B.parseComponentValues());
    case 4:
      return B.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return vt.parse(e, B.parseComponentValue());
        case "color":
          return RA.parse(e, B.parseComponentValue());
        case "image":
          return Tr.parse(e, B.parseComponentValue());
        case "length":
          var a = B.parseComponentValue();
          return VA(a) ? a : tA;
        case "length-percentage":
          var i = B.parseComponentValue();
          return Y(i) ? i : tA;
        case "time":
          return _B.parse(e, B.parseComponentValue());
      }
      break;
  }
}, Yc = "data-html2canvas-debug", Wc = function(e) {
  var A = e.getAttribute(Yc);
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
}, dr = function(e, A) {
  var t = Wc(e);
  return t === 1 || A === t;
}, pA = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, dr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Xc(A, window.getComputedStyle(t, null)), Hr(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = pt(this.context, t), dr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), Zc = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", vn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", de = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var et = 0; et < vn.length; et++)
  de[vn.charCodeAt(et)] = et;
var zc = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, B, s, a, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    B = de[e.charCodeAt(r)], s = de[e.charCodeAt(r + 1)], a = de[e.charCodeAt(r + 2)], i = de[e.charCodeAt(r + 3)], c[n++] = B << 2 | s >> 4, c[n++] = (s & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | i & 63;
  return o;
}, qc = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, jc = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, WA = 5, Sr = 6 + 5, Xt = 2, $c = Sr - WA, PB = 65536 >> WA, Al = 1 << WA, Jt = Al - 1, el = 1024 >> WA, tl = PB + el, rl = tl, nl = 32, Bl = rl + nl, sl = 65536 >> Sr, al = 1 << $c, il = al - 1, In = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, ol = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, cl = function(e, A) {
  var t = zc(e), r = Array.isArray(t) ? jc(t) : new Uint32Array(t), n = Array.isArray(t) ? qc(t) : new Uint16Array(t), B = 24, s = In(n, B / 2, r[4] / 2), a = r[5] === 2 ? In(n, (B + r[4]) / 2) : ol(r, Math.ceil((B + r[4]) / 4));
  return new ll(r[0], r[1], r[2], r[3], s, a);
}, ll = (
  /** @class */
  function() {
    function e(A, t, r, n, B, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = B, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> WA], t = (t << Xt) + (A & Jt), this.data[t];
        if (A <= 65535)
          return t = this.index[PB + (A - 55296 >> WA)], t = (t << Xt) + (A & Jt), this.data[t];
        if (A < this.highStart)
          return t = Bl - sl + (A >> Sr), t = this.index[t], t += A >> WA & il, t = this.index[t], t = (t << Xt) + (A & Jt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), mn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ul = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var tt = 0; tt < mn.length; tt++)
  ul[mn.charCodeAt(tt)] = tt;
var gl = 1, Yt = 2, Wt = 3, yn = 4, Kn = 5, Ql = 7, Ln = 8, Zt = 9, zt = 10, bn = 11, xn = 12, Dn = 13, Tn = 14, qt = 15, wl = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var B = e.charCodeAt(t++);
      (B & 64512) === 56320 ? A.push(((n & 1023) << 10) + (B & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, fl = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, B = ""; ++n < t; ) {
    var s = e[n];
    s <= 65535 ? r.push(s) : (s -= 65536, r.push((s >> 10) + 55296, s % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (B += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return B;
}, Cl = cl(Zc), gA = "×", jt = "÷", Ul = function(e) {
  return Cl.get(e);
}, Fl = function(e, A, t) {
  var r = t - 2, n = A[r], B = A[t - 1], s = A[t];
  if (B === Yt && s === Wt)
    return gA;
  if (B === Yt || B === Wt || B === yn || s === Yt || s === Wt || s === yn)
    return jt;
  if (B === Ln && [Ln, Zt, bn, xn].indexOf(s) !== -1 || (B === bn || B === Zt) && (s === Zt || s === zt) || (B === xn || B === zt) && s === zt || s === Dn || s === Kn || s === Ql || B === gl)
    return gA;
  if (B === Dn && s === Tn) {
    for (; n === Kn; )
      n = A[--r];
    if (n === Tn)
      return gA;
  }
  if (B === qt && s === qt) {
    for (var a = 0; n === qt; )
      a++, n = A[--r];
    if (a % 2 === 0)
      return gA;
  }
  return jt;
}, hl = function(e) {
  var A = wl(e), t = A.length, r = 0, n = 0, B = A.map(Ul);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var s = gA; r < t && (s = Fl(A, B, ++r)) === gA; )
        ;
      if (s !== gA || r === t) {
        var a = fl.apply(null, A.slice(n, r));
        return n = r, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, dl = function(e) {
  for (var A = hl(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, El = function(e) {
  var A = 123;
  if (e.createRange) {
    var t = e.createRange();
    if (t.getBoundingClientRect) {
      var r = e.createElement("boundtest");
      r.style.height = A + "px", r.style.display = "block", e.body.appendChild(r), t.selectNode(r);
      var n = t.getBoundingClientRect(), B = Math.round(n.height);
      if (e.body.removeChild(r), B === A)
        return !0;
    }
  }
  return !1;
}, pl = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = Ht(r.data).map(function(i) {
    return J(i);
  }), B = 0, s = {}, a = n.every(function(i, o) {
    t.setStart(r, B), t.setEnd(r, B + i.length);
    var c = t.getBoundingClientRect();
    B += i.length;
    var l = c.x > s.x || c.y > s.y;
    return s = c, o === 0 ? !0 : l;
  });
  return e.body.removeChild(A), a;
}, Hl = function() {
  return typeof new Image().crossOrigin < "u";
}, vl = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Il = function(e) {
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
}, Sn = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, ml = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), B = A.toDataURL();
  n.src = B;
  var s = Er(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), Mn(s).then(function(a) {
    r.drawImage(a, 0, 0);
    var i = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var o = e.createElement("div");
    return o.style.backgroundImage = "url(" + B + ")", o.style.height = t + "px", Sn(i) ? Mn(Er(t, t, 0, 0, o)) : Promise.reject(!1);
  }).then(function(a) {
    return r.drawImage(a, 0, 0), Sn(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Er = function(e, A, t, r, n) {
  var B = "http://www.w3.org/2000/svg", s = document.createElementNS(B, "svg"), a = document.createElementNS(B, "foreignObject");
  return s.setAttributeNS(null, "width", e.toString()), s.setAttributeNS(null, "height", A.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(a), a.appendChild(n), s;
}, Mn = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, eA = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = El(document);
    return Object.defineProperty(eA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = eA.SUPPORT_RANGE_BOUNDS && pl(document);
    return Object.defineProperty(eA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = Il(document);
    return Object.defineProperty(eA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? ml(document) : Promise.resolve(!1);
    return Object.defineProperty(eA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = Hl();
    return Object.defineProperty(eA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = vl();
    return Object.defineProperty(eA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(eA, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(eA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, me = (
  /** @class */
  function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), yl = function(e, A, t, r) {
  var n = bl(A, t), B = [], s = 0;
  return n.forEach(function(a) {
    if (t.textDecorationLine.length || a.trim().length > 0)
      if (eA.SUPPORT_RANGE_BOUNDS) {
        var i = On(r, s, a.length).getClientRects();
        if (i.length > 1) {
          var o = Mr(a), c = 0;
          o.forEach(function(u) {
            B.push(new me(u, LA.fromDOMRectList(e, On(r, c + s, u.length).getClientRects()))), c += u.length;
          });
        } else
          B.push(new me(a, LA.fromDOMRectList(e, i)));
      } else {
        var l = r.splitText(a.length);
        B.push(new me(a, Kl(e, r))), r = l;
      }
    else
      eA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
    s += a.length;
  }), B;
}, Kl = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var B = pt(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), B;
    }
  }
  return LA.EMPTY;
}, On = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, Mr = function(e) {
  if (eA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return dl(e);
}, Ll = function(e, A) {
  if (eA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Dl(e, A);
}, bl = function(e, A) {
  return A.letterSpacing !== 0 ? Mr(e) : Ll(e, A);
}, xl = [32, 160, 4961, 65792, 65793, 4153, 4241], Dl = function(e, A) {
  for (var t = Bi(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, B = function() {
    if (n.value) {
      var s = n.value.slice(), a = Ht(s), i = "";
      a.forEach(function(o) {
        xl.indexOf(o) === -1 ? i += J(o) : (i.length && r.push(i), r.push(J(o)), i = "");
      }), i.length && r.push(i);
    }
  }; !(n = t.next()).done; )
    B();
  return r;
}, Tl = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.text = Sl(t.data, r.textTransform), this.textBounds = yl(A, this.text, r, t);
    }
    return e;
  }()
), Sl = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Ml, Ol);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Ml = /(^|\s|:|-|\(|\))([a-z])/g, Ol = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, XB = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  }(pA)
), JB = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  }(pA)
), YB = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, B = new XMLSerializer(), s = pt(t, r);
      return r.setAttribute("width", s.width + "px"), r.setAttribute("height", s.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(B.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  }(pA)
), WB = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(pA)
), pr = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return A;
  }(pA)
), Gl = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Rl = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Nl = function(e) {
  return e.width > e.height ? new LA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new LA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, Vl = function(e) {
  var A = e.type === kl ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, ft = "checkbox", Ct = "radio", kl = "password", Gn = 707406591, Or = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Vl(r), (n.type === ft || n.type === Ct) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = Nl(n.bounds)), n.type) {
        case ft:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Gl;
          break;
        case Ct:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Rl;
          break;
      }
      return n;
    }
    return A;
  }(pA)
), ZB = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, B = r.options[r.selectedIndex || 0];
      return n.value = B && B.text || "", n;
    }
    return A;
  }(pA)
), zB = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(pA)
), qB = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = $B(t, r.contentWindow.document.documentElement);
          var B = r.contentWindow.document.documentElement ? ve(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : KA.TRANSPARENT, s = r.contentWindow.document.body ? ve(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : KA.TRANSPARENT;
          n.backgroundColor = NA(B) ? NA(s) ? n.styles.backgroundColor : s : B;
        }
      } catch {
      }
      return n;
    }
    return A;
  }(pA)
), _l = ["OL", "UL", "MENU"], ot = function(e, A, t, r) {
  for (var n = A.firstChild, B = void 0; n; n = B)
    if (B = n.nextSibling, As(n) && n.data.trim().length > 0)
      t.textNodes.push(new Tl(e, n, t.styles));
    else if (ne(n))
      if (ns(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(a) {
          return ot(e, a, t, r);
        });
      else {
        var s = jB(e, n);
        s.styles.isVisible() && (Pl(n, s, r) ? s.flags |= 4 : Xl(s.styles) && (s.flags |= 2), _l.indexOf(n.tagName) !== -1 && (s.flags |= 8), t.elements.push(s), n.slot, n.shadowRoot ? ot(e, n.shadowRoot, s, r) : !Ut(n) && !es(n) && !Ft(n) && ot(e, n, s, r));
      }
}, jB = function(e, A) {
  return vr(A) ? new XB(e, A) : ts(A) ? new JB(e, A) : es(A) ? new YB(e, A) : Jl(A) ? new WB(e, A) : Yl(A) ? new pr(e, A) : Wl(A) ? new Or(e, A) : Ft(A) ? new ZB(e, A) : Ut(A) ? new zB(e, A) : rs(A) ? new qB(e, A) : new pA(e, A);
}, $B = function(e, A) {
  var t = jB(e, A);
  return t.flags |= 4, ot(e, A, t, t), t;
}, Pl = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Gr(e) && t.styles.isTransparent();
}, Xl = function(e) {
  return e.isPositioned() || e.isFloating();
}, As = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, ne = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Hr = function(e) {
  return ne(e) && typeof e.style < "u" && !ct(e);
}, ct = function(e) {
  return typeof e.className == "object";
}, Jl = function(e) {
  return e.tagName === "LI";
}, Yl = function(e) {
  return e.tagName === "OL";
}, Wl = function(e) {
  return e.tagName === "INPUT";
}, Zl = function(e) {
  return e.tagName === "HTML";
}, es = function(e) {
  return e.tagName === "svg";
}, Gr = function(e) {
  return e.tagName === "BODY";
}, ts = function(e) {
  return e.tagName === "CANVAS";
}, Rn = function(e) {
  return e.tagName === "VIDEO";
}, vr = function(e) {
  return e.tagName === "IMG";
}, rs = function(e) {
  return e.tagName === "IFRAME";
}, Nn = function(e) {
  return e.tagName === "STYLE";
}, zl = function(e) {
  return e.tagName === "SCRIPT";
}, Ut = function(e) {
  return e.tagName === "TEXTAREA";
}, Ft = function(e) {
  return e.tagName === "SELECT";
}, ns = function(e) {
  return e.tagName === "SLOT";
}, Vn = function(e) {
  return e.tagName.indexOf("-") > 0;
}, ql = (
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
      var t = this, r = A.counterIncrement, n = A.counterReset, B = !0;
      r !== null && r.forEach(function(a) {
        var i = t.counters[a.counter];
        i && a.increment !== 0 && (B = !1, i.length || i.push(1), i[Math.max(0, i.length - 1)] += a.increment);
      });
      var s = [];
      return B && n.forEach(function(a) {
        var i = t.counters[a.counter];
        s.push(a.counter), i || (i = t.counters[a.counter] = []), i.push(a.reset);
      }), s;
    }, e;
  }()
), kn = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, _n = {
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
}, jl = {
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
}, $l = {
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
}, $A = function(e, A, t, r, n, B) {
  return e < A || e > t ? Se(e, n, B.length > 0) : r.integers.reduce(function(s, a, i) {
    for (; e >= a; )
      e -= a, s += r.values[i];
    return s;
  }, "") + B;
}, Bs = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, X = function(e, A, t, r, n) {
  var B = t - A + 1;
  return (e < 0 ? "-" : "") + (Bs(Math.abs(e), B, r, function(s) {
    return J(Math.floor(s % B) + A);
  }) + n);
}, PA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return Bs(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, te = 1, xA = 2, DA = 4, Ee = 8, yA = function(e, A, t, r, n, B) {
  if (e < -9999 || e > 9999)
    return Se(e, 4, n.length > 0);
  var s = Math.abs(e), a = n;
  if (s === 0)
    return A[0] + a;
  for (var i = 0; s > 0 && i <= 4; i++) {
    var o = s % 10;
    o === 0 && W(B, te) && a !== "" ? a = A[o] + a : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && W(B, xA) || o === 1 && i === 1 && W(B, DA) && e > 100 || o === 1 && i > 1 && W(B, Ee) ? a = A[o] + (i > 0 ? t[i - 1] : "") + a : o === 1 && i > 0 && (a = t[i - 1] + a), s = Math.floor(s / 10);
  }
  return (e < 0 ? r : "") + a;
}, Pn = "十百千萬", Xn = "拾佰仟萬", Jn = "マイナス", $t = "마이너스", Se = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", B = t ? ", " : "", s = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + s;
    case 1:
      return "◦" + s;
    case 2:
      return "◾" + s;
    case 5:
      var a = X(e, 48, 57, !0, r);
      return a.length < 4 ? "0" + a : a;
    case 4:
      return PA(e, "〇一二三四五六七八九", n);
    case 6:
      return $A(e, 1, 3999, kn, 3, r).toLowerCase();
    case 7:
      return $A(e, 1, 3999, kn, 3, r);
    case 8:
      return X(e, 945, 969, !1, r);
    case 9:
      return X(e, 97, 122, !1, r);
    case 10:
      return X(e, 65, 90, !1, r);
    case 11:
      return X(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return $A(e, 1, 9999, _n, 3, r);
    case 35:
      return $A(e, 1, 9999, _n, 3, r).toLowerCase();
    case 13:
      return X(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return X(e, 6112, 6121, !0, r);
    case 15:
      return PA(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return PA(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return yA(e, "零一二三四五六七八九", Pn, "負", n, xA | DA | Ee);
    case 47:
      return yA(e, "零壹貳參肆伍陸柒捌玖", Xn, "負", n, te | xA | DA | Ee);
    case 42:
      return yA(e, "零一二三四五六七八九", Pn, "负", n, xA | DA | Ee);
    case 41:
      return yA(e, "零壹贰叁肆伍陆柒捌玖", Xn, "负", n, te | xA | DA | Ee);
    case 26:
      return yA(e, "〇一二三四五六七八九", "十百千万", Jn, n, 0);
    case 25:
      return yA(e, "零壱弐参四伍六七八九", "拾百千万", Jn, n, te | xA | DA);
    case 31:
      return yA(e, "영일이삼사오육칠팔구", "십백천만", $t, B, te | xA | DA);
    case 33:
      return yA(e, "零一二三四五六七八九", "十百千萬", $t, B, 0);
    case 32:
      return yA(e, "零壹貳參四五六七八九", "拾百千", $t, B, te | xA | DA);
    case 18:
      return X(e, 2406, 2415, !0, r);
    case 20:
      return $A(e, 1, 19999, $l, 3, r);
    case 21:
      return X(e, 2790, 2799, !0, r);
    case 22:
      return X(e, 2662, 2671, !0, r);
    case 22:
      return $A(e, 1, 10999, jl, 3, r);
    case 23:
      return PA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return PA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return X(e, 3302, 3311, !0, r);
    case 28:
      return PA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return PA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return X(e, 3792, 3801, !0, r);
    case 37:
      return X(e, 6160, 6169, !0, r);
    case 38:
      return X(e, 4160, 4169, !0, r);
    case 39:
      return X(e, 2918, 2927, !0, r);
    case 40:
      return X(e, 1776, 1785, !0, r);
    case 43:
      return X(e, 3046, 3055, !0, r);
    case 44:
      return X(e, 3174, 3183, !0, r);
    case 45:
      return X(e, 3664, 3673, !0, r);
    case 46:
      return X(e, 3872, 3881, !0, r);
    case 3:
    default:
      return X(e, 48, 57, !0, r);
  }
}, ss = "data-html2canvas-ignore", Yn = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new ql(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = Au(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var B = A.defaultView.pageXOffset, s = A.defaultView.pageYOffset, a = n.contentWindow, i = a.document, o = ru(n).then(function() {
        return BA(r, void 0, void 0, function() {
          var c, l;
          return rA(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(au), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, l = this.clonedReferenceElement, typeof l > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
              case 1:
                u.sent(), u.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, tu(i)] : [3, 4];
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
      return i.open(), i.write(Bu(document.doctype) + "<html></html>"), su(this.referenceElement.ownerDocument, B, s), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), o;
    }, e.prototype.createElementClone = function(A) {
      if (dr(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (ts(A))
        return this.createCanvasClone(A);
      if (Rn(A))
        return this.createVideoClone(A);
      if (Nn(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return vr(t) && (vr(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Vn(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return Ar(A.style, t), t;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var t = A.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(B, s) {
            return s && typeof s.cssText == "string" ? B + s.cssText : B;
          }, ""), n = A.cloneNode(!1);
          return n.textContent = r, n;
        }
      } catch (B) {
        if (this.context.logger.error("Unable to access cssRules property", B), B.name !== "SecurityError")
          throw B;
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
        var B = A.getContext("2d"), s = n.getContext("2d");
        if (s)
          if (!this.options.allowTaint && B)
            s.putImageData(B.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var a = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
            if (a) {
              var i = a.getContextAttributes();
              (i == null ? void 0 : i.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
            }
            s.drawImage(A, 0, 0);
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
      (!ne(t) || !zl(t) && !t.hasAttribute(ss) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !ne(t) || !Nn(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, B = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; B; B = B.nextSibling)
        if (ne(B) && ns(B) && typeof B.assignedNodes == "function") {
          var s = B.assignedNodes();
          s.length && s.forEach(function(a) {
            return n.appendChildNode(t, a, r);
          });
        } else
          this.appendChildNode(t, B, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (As(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && ne(A) && (Hr(A) || ct(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var B = r.getComputedStyle(A), s = r.getComputedStyle(A, ":before"), a = r.getComputedStyle(A, ":after");
        this.referenceElement === A && Hr(n) && (this.clonedReferenceElement = n), Gr(n) && cu(n);
        var i = this.counters.parse(new Hn(this.context, B)), o = this.resolvePseudoContent(A, n, s, ye.BEFORE);
        Vn(A) && (t = !0), Rn(A) || this.cloneChildNodes(A, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(A, n, a, ye.AFTER);
        return c && n.appendChild(c), this.counters.pop(i), (B && (this.options.copyStyles || ct(A)) && !rs(A) || t) && Ar(B, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (Ut(A) || Ft(A)) && (Ut(n) || Ft(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var B = this;
      if (r) {
        var s = r.content, a = t.ownerDocument;
        if (!(!a || !s || s === "none" || s === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Hn(this.context, r));
          var i = new Jc(this.context, r), o = a.createElement("html2canvaspseudoelement");
          Ar(r, o), i.content.forEach(function(l) {
            if (l.type === 0)
              o.appendChild(a.createTextNode(l.value));
            else if (l.type === 22) {
              var u = a.createElement("img");
              u.src = l.value, u.style.opacity = "1", o.appendChild(u);
            } else if (l.type === 18) {
              if (l.name === "attr") {
                var w = l.values.filter(G);
                w.length && o.appendChild(a.createTextNode(A.getAttribute(w[0].value) || ""));
              } else if (l.name === "counter") {
                var g = l.values.filter(se), Q = g[0], I = g[1];
                if (Q && G(Q)) {
                  var d = B.counters.getCounterValue(Q.value), F = I && G(I) ? hr.parse(B.context, I.value) : 3;
                  o.appendChild(a.createTextNode(Se(d, F, !1)));
                }
              } else if (l.name === "counters") {
                var K = l.values.filter(se), Q = K[0], y = K[1], I = K[2];
                if (Q && G(Q)) {
                  var m = B.counters.getCounterValues(Q.value), C = I && G(I) ? hr.parse(B.context, I.value) : 3, L = y && y.type === 0 ? y.value : "", v = m.map(function(Z) {
                    return Se(Z, C, !1);
                  }).join(L);
                  o.appendChild(a.createTextNode(v));
                }
              }
            } else if (l.type === 20)
              switch (l.value) {
                case "open-quote":
                  o.appendChild(a.createTextNode(pn(i.quotes, B.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(a.createTextNode(pn(i.quotes, --B.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(a.createTextNode(l.value));
              }
          }), o.className = Ir + " " + mr;
          var c = n === ye.BEFORE ? " " + Ir : " " + mr;
          return ct(t) ? t.className.baseValue += c : t.className += c, o;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  }()
), ye;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(ye || (ye = {}));
var Au = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(ss, "true"), e.body.appendChild(t), t;
}, eu = function(e) {
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
}, tu = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(eu));
}, ru = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var n = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var B = setInterval(function() {
        n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(B), A(e));
      }, 50);
    };
  });
}, nu = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Ar = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    nu.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, Bu = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, su = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, au = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, iu = ":before", ou = ":after", Ir = "___html2canvas___pseudoelement_before", mr = "___html2canvas___pseudoelement_after", Wn = `{
    content: "" !important;
    display: none !important;
}`, cu = function(e) {
  lu(e, "." + Ir + iu + Wn + `
         .` + mr + ou + Wn);
}, lu = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, as = (
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
), uu = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (tr(A) || fu(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return BA(this, void 0, void 0, function() {
        var t, r, n, B, s = this;
        return rA(this, function(a) {
          switch (a.label) {
            case 0:
              return t = as.isSameOrigin(A), r = !er(A) && this._options.useCORS === !0 && eA.SUPPORT_CORS_IMAGES && !t, n = !er(A) && !t && !tr(A) && typeof this._options.proxy == "string" && eA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !er(A) && !tr(A) && !n && !r ? [
                2
                /*return*/
              ] : (B = A, n ? [4, this.proxy(B)] : [3, 2]);
            case 1:
              B = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(i, o) {
                var c = new Image();
                c.onload = function() {
                  return i(c);
                }, c.onerror = o, (Cu(B) || r) && (c.crossOrigin = "anonymous"), c.src = B, c.complete === !0 && setTimeout(function() {
                  return i(c);
                }, 500), s._options.imageTimeout > 0 && setTimeout(function() {
                  return o("Timed out (" + s._options.imageTimeout + "ms) loading image");
                }, s._options.imageTimeout);
              })];
            case 3:
              return [2, a.sent()];
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
      return new Promise(function(B, s) {
        var a = eA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
        i.onload = function() {
          if (i.status === 200)
            if (a === "text")
              B(i.response);
            else {
              var l = new FileReader();
              l.addEventListener("load", function() {
                return B(l.result);
              }, !1), l.addEventListener("error", function(u) {
                return s(u);
              }, !1), l.readAsDataURL(i.response);
            }
          else
            s("Failed to proxy resource " + n + " with status code " + i.status);
        }, i.onerror = s;
        var o = r.indexOf("?") > -1 ? "&" : "?";
        if (i.open("GET", "" + r + o + "url=" + encodeURIComponent(A) + "&responseType=" + a), a !== "text" && i instanceof XMLHttpRequest && (i.responseType = a), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          i.timeout = c, i.ontimeout = function() {
            return s("Timed out (" + c + "ms) proxying " + n);
          };
        }
        i.send();
      });
    }, e;
  }()
), gu = /^data:image\/svg\+xml/i, Qu = /^data:image\/.*;base64,/i, wu = /^data:image\/.*/i, fu = function(e) {
  return eA.SUPPORT_SVG_DRAWING || !Uu(e);
}, er = function(e) {
  return wu.test(e);
}, Cu = function(e) {
  return Qu.test(e);
}, tr = function(e) {
  return e.substr(0, 4) === "blob";
}, Uu = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || gu.test(e);
}, h = (
  /** @class */
  function() {
    function e(A, t) {
      this.type = 0, this.x = A, this.y = t;
    }
    return e.prototype.add = function(A, t) {
      return new e(this.x + A, this.y + t);
    }, e;
  }()
), Ae = function(e, A, t) {
  return new h(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, rt = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = Ae(this.start, this.startControl, A), n = Ae(this.startControl, this.endControl, A), B = Ae(this.endControl, this.end, A), s = Ae(r, n, A), a = Ae(n, B, A), i = Ae(s, a, A);
      return t ? new e(this.start, r, s, i) : new e(i, a, B, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), QA = function(e) {
  return e.type === 1;
}, Fu = (
  /** @class */
  function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = he(t.borderTopLeftRadius, r.width, r.height), B = n[0], s = n[1], a = he(t.borderTopRightRadius, r.width, r.height), i = a[0], o = a[1], c = he(t.borderBottomRightRadius, r.width, r.height), l = c[0], u = c[1], w = he(t.borderBottomLeftRadius, r.width, r.height), g = w[0], Q = w[1], I = [];
      I.push((B + i) / r.width), I.push((g + l) / r.width), I.push((s + Q) / r.height), I.push((o + u) / r.height);
      var d = Math.max.apply(Math, I);
      d > 1 && (B /= d, s /= d, i /= d, o /= d, l /= d, u /= d, g /= d, Q /= d);
      var F = r.width - i, K = r.height - u, y = r.width - l, m = r.height - Q, C = t.borderTopWidth, L = t.borderRightWidth, v = t.borderBottomWidth, H = t.borderLeftWidth, O = V(t.paddingTop, A.bounds.width), Z = V(t.paddingRight, A.bounds.width), z = V(t.paddingBottom, A.bounds.width), D = V(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = B > 0 || s > 0 ? _(r.left + H / 3, r.top + C / 3, B - H / 3, s - C / 3, M.TOP_LEFT) : new h(r.left + H / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = B > 0 || s > 0 ? _(r.left + F, r.top + C / 3, i - L / 3, o - C / 3, M.TOP_RIGHT) : new h(r.left + r.width - L / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || u > 0 ? _(r.left + y, r.top + K, l - L / 3, u - v / 3, M.BOTTOM_RIGHT) : new h(r.left + r.width - L / 3, r.top + r.height - v / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || Q > 0 ? _(r.left + H / 3, r.top + m, g - H / 3, Q - v / 3, M.BOTTOM_LEFT) : new h(r.left + H / 3, r.top + r.height - v / 3), this.topLeftBorderDoubleInnerBox = B > 0 || s > 0 ? _(r.left + H * 2 / 3, r.top + C * 2 / 3, B - H * 2 / 3, s - C * 2 / 3, M.TOP_LEFT) : new h(r.left + H * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = B > 0 || s > 0 ? _(r.left + F, r.top + C * 2 / 3, i - L * 2 / 3, o - C * 2 / 3, M.TOP_RIGHT) : new h(r.left + r.width - L * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || u > 0 ? _(r.left + y, r.top + K, l - L * 2 / 3, u - v * 2 / 3, M.BOTTOM_RIGHT) : new h(r.left + r.width - L * 2 / 3, r.top + r.height - v * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || Q > 0 ? _(r.left + H * 2 / 3, r.top + m, g - H * 2 / 3, Q - v * 2 / 3, M.BOTTOM_LEFT) : new h(r.left + H * 2 / 3, r.top + r.height - v * 2 / 3), this.topLeftBorderStroke = B > 0 || s > 0 ? _(r.left + H / 2, r.top + C / 2, B - H / 2, s - C / 2, M.TOP_LEFT) : new h(r.left + H / 2, r.top + C / 2), this.topRightBorderStroke = B > 0 || s > 0 ? _(r.left + F, r.top + C / 2, i - L / 2, o - C / 2, M.TOP_RIGHT) : new h(r.left + r.width - L / 2, r.top + C / 2), this.bottomRightBorderStroke = l > 0 || u > 0 ? _(r.left + y, r.top + K, l - L / 2, u - v / 2, M.BOTTOM_RIGHT) : new h(r.left + r.width - L / 2, r.top + r.height - v / 2), this.bottomLeftBorderStroke = g > 0 || Q > 0 ? _(r.left + H / 2, r.top + m, g - H / 2, Q - v / 2, M.BOTTOM_LEFT) : new h(r.left + H / 2, r.top + r.height - v / 2), this.topLeftBorderBox = B > 0 || s > 0 ? _(r.left, r.top, B, s, M.TOP_LEFT) : new h(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? _(r.left + F, r.top, i, o, M.TOP_RIGHT) : new h(r.left + r.width, r.top), this.bottomRightBorderBox = l > 0 || u > 0 ? _(r.left + y, r.top + K, l, u, M.BOTTOM_RIGHT) : new h(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || Q > 0 ? _(r.left, r.top + m, g, Q, M.BOTTOM_LEFT) : new h(r.left, r.top + r.height), this.topLeftPaddingBox = B > 0 || s > 0 ? _(r.left + H, r.top + C, Math.max(0, B - H), Math.max(0, s - C), M.TOP_LEFT) : new h(r.left + H, r.top + C), this.topRightPaddingBox = i > 0 || o > 0 ? _(r.left + Math.min(F, r.width - L), r.top + C, F > r.width + L ? 0 : Math.max(0, i - L), Math.max(0, o - C), M.TOP_RIGHT) : new h(r.left + r.width - L, r.top + C), this.bottomRightPaddingBox = l > 0 || u > 0 ? _(r.left + Math.min(y, r.width - H), r.top + Math.min(K, r.height - v), Math.max(0, l - L), Math.max(0, u - v), M.BOTTOM_RIGHT) : new h(r.left + r.width - L, r.top + r.height - v), this.bottomLeftPaddingBox = g > 0 || Q > 0 ? _(r.left + H, r.top + Math.min(m, r.height - v), Math.max(0, g - H), Math.max(0, Q - v), M.BOTTOM_LEFT) : new h(r.left + H, r.top + r.height - v), this.topLeftContentBox = B > 0 || s > 0 ? _(r.left + H + D, r.top + C + O, Math.max(0, B - (H + D)), Math.max(0, s - (C + O)), M.TOP_LEFT) : new h(r.left + H + D, r.top + C + O), this.topRightContentBox = i > 0 || o > 0 ? _(r.left + Math.min(F, r.width + H + D), r.top + C + O, F > r.width + H + D ? 0 : i - H + D, o - (C + O), M.TOP_RIGHT) : new h(r.left + r.width - (L + Z), r.top + C + O), this.bottomRightContentBox = l > 0 || u > 0 ? _(r.left + Math.min(y, r.width - (H + D)), r.top + Math.min(K, r.height + C + O), Math.max(0, l - (L + Z)), u - (v + z), M.BOTTOM_RIGHT) : new h(r.left + r.width - (L + Z), r.top + r.height - (v + z)), this.bottomLeftContentBox = g > 0 || Q > 0 ? _(r.left + H + D, r.top + m, Math.max(0, g - (H + D)), Q - (v + z), M.BOTTOM_LEFT) : new h(r.left + H + D, r.top + r.height - (v + z));
    }
    return e;
  }()
), M;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(M || (M = {}));
var _ = function(e, A, t, r, n) {
  var B = 4 * ((Math.sqrt(2) - 1) / 3), s = t * B, a = r * B, i = e + t, o = A + r;
  switch (n) {
    case M.TOP_LEFT:
      return new rt(new h(e, o), new h(e, o - a), new h(i - s, A), new h(i, A));
    case M.TOP_RIGHT:
      return new rt(new h(e, A), new h(e + s, A), new h(i, o - a), new h(i, o));
    case M.BOTTOM_RIGHT:
      return new rt(new h(i, A), new h(i, A + a), new h(e + s, o), new h(e, o));
    case M.BOTTOM_LEFT:
    default:
      return new rt(new h(i, o), new h(i - s, o), new h(e, A + a), new h(e, A));
  }
}, ht = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, hu = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, dt = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, du = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  }()
), nt = (
  /** @class */
  function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  }()
), Eu = (
  /** @class */
  function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), pu = function(e) {
  return e.type === 0;
}, is = function(e) {
  return e.type === 1;
}, Hu = function(e) {
  return e.type === 2;
}, Zn = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, vu = function(e, A, t, r, n) {
  return e.map(function(B, s) {
    switch (s) {
      case 0:
        return B.add(A, t);
      case 1:
        return B.add(A + r, t);
      case 2:
        return B.add(A + r, t + n);
      case 3:
        return B.add(A, t + n);
    }
    return B;
  });
}, os = (
  /** @class */
  function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), cs = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new Fu(this.container), this.container.styles.opacity < 1 && this.effects.push(new Eu(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, B = this.container.styles.transform;
        this.effects.push(new du(r, n, B));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = ht(this.curves), a = dt(this.curves);
        Zn(s, a) ? this.effects.push(new nt(
          s,
          6
          /* CONTENT */
        )) : (this.effects.push(new nt(
          s,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new nt(
          a,
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
        var B = r.effects.filter(function(i) {
          return !is(i);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, B), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var s = ht(r.curves), a = dt(r.curves);
            Zn(s, a) || n.unshift(new nt(
              a,
              6
              /* CONTENT */
            ));
          }
        } else
          n.unshift.apply(n, B);
        r = r.parent;
      }
      return n.filter(function(i) {
        return W(i.target, A);
      });
    }, e;
  }()
), yr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var B = W(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), s = W(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), a = new cs(n, e);
    W(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(a);
    var i = W(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (B || s) {
      var o = B || n.styles.isPositioned() ? t : A, c = new os(a);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var l = n.styles.zIndex.order;
        if (l < 0) {
          var u = 0;
          o.negativeZIndex.some(function(g, Q) {
            return l > g.element.container.styles.zIndex.order ? (u = Q, !1) : u > 0;
          }), o.negativeZIndex.splice(u, 0, c);
        } else if (l > 0) {
          var w = 0;
          o.positiveZIndex.some(function(g, Q) {
            return l >= g.element.container.styles.zIndex.order ? (w = Q + 1, !1) : w > 0;
          }), o.positiveZIndex.splice(w, 0, c);
        } else
          o.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        n.styles.isFloating() ? o.nonPositionedFloats.push(c) : o.nonPositionedInlineLevel.push(c);
      yr(a, c, B ? c : t, i);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(a) : A.nonInlineLevel.push(a), yr(a, A, t, i);
    W(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && ls(n, i);
  });
}, ls = function(e, A) {
  for (var t = e instanceof pr ? e.start : 1, r = e instanceof pr ? e.reversed : !1, n = 0; n < A.length; n++) {
    var B = A[n];
    B.container instanceof WB && typeof B.container.value == "number" && B.container.value !== 0 && (t = B.container.value), B.listValue = Se(t, B.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Iu = function(e) {
  var A = new cs(e, null), t = new os(A), r = [];
  return yr(A, t, t, r), ls(A.container, r), t;
}, zn = function(e, A) {
  switch (A) {
    case 0:
      return fA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return fA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return fA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return fA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, mu = function(e, A) {
  switch (A) {
    case 0:
      return fA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return fA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return fA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return fA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, yu = function(e, A) {
  switch (A) {
    case 0:
      return fA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return fA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return fA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return fA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, Ku = function(e, A) {
  switch (A) {
    case 0:
      return Bt(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return Bt(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return Bt(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return Bt(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, Bt = function(e, A) {
  var t = [];
  return QA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), QA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, fA = function(e, A, t, r) {
  var n = [];
  return QA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), QA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), QA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), QA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, us = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Et = function(e) {
  var A = e.styles, t = e.bounds, r = V(A.paddingLeft, t.width), n = V(A.paddingRight, t.width), B = V(A.paddingTop, t.width), s = V(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, B + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + B + s));
}, Lu = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Et(A) : us(A);
}, bu = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Et(A) : us(A);
}, rr = function(e, A, t) {
  var r = Lu(re(e.styles.backgroundOrigin, A), e), n = bu(re(e.styles.backgroundClip, A), e), B = xu(re(e.styles.backgroundSize, A), t, r), s = B[0], a = B[1], i = he(re(e.styles.backgroundPosition, A), r.width - s, r.height - a), o = Du(re(e.styles.backgroundRepeat, A), i, B, r, n), c = Math.round(r.left + i[0]), l = Math.round(r.top + i[1]);
  return [o, c, l, s, a];
}, ee = function(e) {
  return G(e) && e.value === Be.AUTO;
}, st = function(e) {
  return typeof e == "number";
}, xu = function(e, A, t) {
  var r = A[0], n = A[1], B = A[2], s = e[0], a = e[1];
  if (!s)
    return [0, 0];
  if (Y(s) && a && Y(a))
    return [V(s, t.width), V(a, t.height)];
  var i = st(B);
  if (G(s) && (s.value === Be.CONTAIN || s.value === Be.COVER)) {
    if (st(B)) {
      var o = t.width / t.height;
      return o < B != (s.value === Be.COVER) ? [t.width, t.width / B] : [t.height * B, t.height];
    }
    return [t.width, t.height];
  }
  var c = st(r), l = st(n), u = c || l;
  if (ee(s) && (!a || ee(a))) {
    if (c && l)
      return [r, n];
    if (!i && !u)
      return [t.width, t.height];
    if (u && i) {
      var w = c ? r : n * B, g = l ? n : r / B;
      return [w, g];
    }
    var Q = c ? r : t.width, I = l ? n : t.height;
    return [Q, I];
  }
  if (i) {
    var d = 0, F = 0;
    return Y(s) ? d = V(s, t.width) : Y(a) && (F = V(a, t.height)), ee(s) ? d = F * B : (!a || ee(a)) && (F = d / B), [d, F];
  }
  var K = null, y = null;
  if (Y(s) ? K = V(s, t.width) : a && Y(a) && (y = V(a, t.height)), K !== null && (!a || ee(a)) && (y = c && l ? K / r * n : t.height), y !== null && ee(s) && (K = c && l ? y / n * r : t.width), K !== null && y !== null)
    return [K, y];
  throw new Error("Unable to calculate background-size for element");
}, re = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Du = function(e, A, t, r, n) {
  var B = A[0], s = A[1], a = t[0], i = t[1];
  switch (e) {
    case 2:
      return [
        new h(Math.round(r.left), Math.round(r.top + s)),
        new h(Math.round(r.left + r.width), Math.round(r.top + s)),
        new h(Math.round(r.left + r.width), Math.round(i + r.top + s)),
        new h(Math.round(r.left), Math.round(i + r.top + s))
      ];
    case 3:
      return [
        new h(Math.round(r.left + B), Math.round(r.top)),
        new h(Math.round(r.left + B + a), Math.round(r.top)),
        new h(Math.round(r.left + B + a), Math.round(r.height + r.top)),
        new h(Math.round(r.left + B), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new h(Math.round(r.left + B), Math.round(r.top + s)),
        new h(Math.round(r.left + B + a), Math.round(r.top + s)),
        new h(Math.round(r.left + B + a), Math.round(r.top + s + i)),
        new h(Math.round(r.left + B), Math.round(r.top + s + i))
      ];
    default:
      return [
        new h(Math.round(n.left), Math.round(n.top)),
        new h(Math.round(n.left + n.width), Math.round(n.top)),
        new h(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new h(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, Tu = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", qn = "Hidden Text", Su = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), B = this._document.createElement("span"), s = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", s.appendChild(r), n.src = Tu, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", B.style.fontFamily = A, B.style.fontSize = t, B.style.margin = "0", B.style.padding = "0", B.appendChild(this._document.createTextNode(qn)), r.appendChild(B), r.appendChild(n);
      var a = n.offsetTop - B.offsetTop + 2;
      r.removeChild(B), r.appendChild(this._document.createTextNode(qn)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var i = n.offsetTop - r.offsetTop + 2;
      return s.removeChild(r), { baseline: a, middle: i };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), gs = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), Mu = 1e4, Ou = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new Su(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), Hu(t) && (this.ctx.globalAlpha = t.opacity), pu(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), is(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return BA(this, void 0, void 0, function() {
        var r;
        return rA(this, function(n) {
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
      return BA(this, void 0, void 0, function() {
        return rA(this, function(r) {
          switch (r.label) {
            case 0:
              if (W(
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
      var B = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var s = Mr(t.text);
        s.reduce(function(a, i) {
          return B.ctx.fillText(i, a, t.bounds.top + n), a + B.ctx.measureText(i).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(s) {
        return s === "normal" || s === "small-caps";
      }).join(""), n = ku(t.fontFamily).join(", "), B = Oe(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, B, n].join(" "),
        n,
        B
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return BA(this, void 0, void 0, function() {
        var n, B, s, a, i, o, c, l, u = this;
        return rA(this, function(w) {
          return n = this.createFontStyle(r), B = n[0], s = n[1], a = n[2], this.ctx.font = B, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(s, a), o = i.baseline, c = i.middle, l = r.paintOrder, t.textBounds.forEach(function(g) {
            l.forEach(function(Q) {
              switch (Q) {
                case 0:
                  u.ctx.fillStyle = q(r.color), u.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  var I = r.textShadow;
                  I.length && g.text.trim().length && (I.slice(0).reverse().forEach(function(d) {
                    u.ctx.shadowColor = q(d.color), u.ctx.shadowOffsetX = d.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = d.offsetY.number * u.options.scale, u.ctx.shadowBlur = d.blur.number, u.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = q(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(d) {
                    switch (d) {
                      case 1:
                        u.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top + o), g.bounds.width, 1);
                        break;
                      case 2:
                        u.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top), g.bounds.width, 1);
                        break;
                      case 3:
                        u.ctx.fillRect(g.bounds.left, Math.ceil(g.bounds.top + c), g.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && g.text.trim().length && (u.ctx.strokeStyle = q(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + o)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
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
        var B = Et(t), s = dt(r);
        this.path(s), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, B.left, B.top, B.width, B.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return BA(this, void 0, void 0, function() {
        var r, n, B, s, a, i, F, F, o, c, l, u, y, w, g, m, Q, I, d, F, K, y, m;
        return rA(this, function(C) {
          switch (C.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, B = r.styles, s = 0, a = r.textNodes, C.label = 1;
            case 1:
              return s < a.length ? (i = a[s], [4, this.renderTextNode(i, B)]) : [3, 4];
            case 2:
              C.sent(), C.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              if (!(r instanceof XB))
                return [3, 8];
              C.label = 5;
            case 5:
              return C.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return F = C.sent(), this.renderReplacedElement(r, n, F), [3, 8];
            case 7:
              return C.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof JB && this.renderReplacedElement(r, n, r.canvas), !(r instanceof YB))
                return [3, 12];
              C.label = 9;
            case 9:
              return C.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return F = C.sent(), this.renderReplacedElement(r, n, F), [3, 12];
            case 11:
              return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof qB && r.tree ? (o = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, o.render(r.tree)]) : [3, 14];
            case 13:
              c = C.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), C.label = 14;
            case 14:
              if (r instanceof Or && (l = Math.min(r.bounds.width, r.bounds.height), r.type === ft ? r.checked && (this.ctx.save(), this.path([
                new h(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79),
                new h(r.bounds.left + l * 0.16, r.bounds.top + l * 0.5549),
                new h(r.bounds.left + l * 0.27347, r.bounds.top + l * 0.44071),
                new h(r.bounds.left + l * 0.39694, r.bounds.top + l * 0.5649),
                new h(r.bounds.left + l * 0.72983, r.bounds.top + l * 0.23),
                new h(r.bounds.left + l * 0.84, r.bounds.top + l * 0.34085),
                new h(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79)
              ]), this.ctx.fillStyle = q(Gn), this.ctx.fill(), this.ctx.restore()) : r.type === Ct && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + l / 2, r.bounds.top + l / 2, l / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = q(Gn), this.ctx.fill(), this.ctx.restore())), Gu(r) && r.value.length) {
                switch (u = this.createFontStyle(B), y = u[0], w = u[1], g = this.fontMetrics.getMetrics(y, w).baseline, this.ctx.font = y, this.ctx.fillStyle = q(B.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Nu(r.styles.textAlign), m = Et(r), Q = 0, r.styles.textAlign) {
                  case 1:
                    Q += m.width / 2;
                    break;
                  case 2:
                    Q += m.width;
                    break;
                }
                I = m.add(Q, 0, 0, -m.height / 2 + 1), this.ctx.save(), this.path([
                  new h(m.left, m.top),
                  new h(m.left + m.width, m.top),
                  new h(m.left + m.width, m.top + m.height),
                  new h(m.left, m.top + m.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new me(r.value, I), B.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!W(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (d = r.styles.listStyleImage, d.type !== 0)
                return [3, 18];
              F = void 0, K = d.url, C.label = 15;
            case 15:
              return C.trys.push([15, 17, , 18]), [4, this.context.cache.match(K)];
            case 16:
              return F = C.sent(), this.ctx.drawImage(F, r.bounds.left - (F.width + 10), r.bounds.top), [3, 18];
            case 17:
              return C.sent(), this.context.logger.error("Error loading list-style-image " + K), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (y = this.createFontStyle(B)[0], this.ctx.font = y, this.ctx.fillStyle = q(B.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", m = new LA(r.bounds.left, r.bounds.top + V(r.styles.paddingTop, r.bounds.width), r.bounds.width, dn(B.lineHeight, B.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new me(t.listValue, m), B.letterSpacing, dn(B.lineHeight, B.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(t) {
      return BA(this, void 0, void 0, function() {
        var r, n, d, B, s, d, a, i, d, o, c, d, l, u, d, w, g, d, Q, I, d;
        return rA(this, function(F) {
          switch (F.label) {
            case 0:
              if (W(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              F.sent(), r = 0, n = t.negativeZIndex, F.label = 2;
            case 2:
              return r < n.length ? (d = n[r], [4, this.renderStack(d)]) : [3, 5];
            case 3:
              F.sent(), F.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              F.sent(), B = 0, s = t.nonInlineLevel, F.label = 7;
            case 7:
              return B < s.length ? (d = s[B], [4, this.renderNode(d)]) : [3, 10];
            case 8:
              F.sent(), F.label = 9;
            case 9:
              return B++, [3, 7];
            case 10:
              a = 0, i = t.nonPositionedFloats, F.label = 11;
            case 11:
              return a < i.length ? (d = i[a], [4, this.renderStack(d)]) : [3, 14];
            case 12:
              F.sent(), F.label = 13;
            case 13:
              return a++, [3, 11];
            case 14:
              o = 0, c = t.nonPositionedInlineLevel, F.label = 15;
            case 15:
              return o < c.length ? (d = c[o], [4, this.renderStack(d)]) : [3, 18];
            case 16:
              F.sent(), F.label = 17;
            case 17:
              return o++, [3, 15];
            case 18:
              l = 0, u = t.inlineLevel, F.label = 19;
            case 19:
              return l < u.length ? (d = u[l], [4, this.renderNode(d)]) : [3, 22];
            case 20:
              F.sent(), F.label = 21;
            case 21:
              return l++, [3, 19];
            case 22:
              w = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, F.label = 23;
            case 23:
              return w < g.length ? (d = g[w], [4, this.renderStack(d)]) : [3, 26];
            case 24:
              F.sent(), F.label = 25;
            case 25:
              return w++, [3, 23];
            case 26:
              Q = 0, I = t.positiveZIndex, F.label = 27;
            case 27:
              return Q < I.length ? (d = I[Q], [4, this.renderStack(d)]) : [3, 30];
            case 28:
              F.sent(), F.label = 29;
            case 29:
              return Q++, [3, 27];
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
      t.forEach(function(n, B) {
        var s = QA(n) ? n.start : n;
        B === 0 ? r.ctx.moveTo(s.x, s.y) : r.ctx.lineTo(s.x, s.y), QA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, A.prototype.renderRepeat = function(t, r, n, B) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, B), this.ctx.fill(), this.ctx.translate(-n, -B);
    }, A.prototype.resizeImage = function(t, r, n) {
      var B;
      if (t.width === r && t.height === n)
        return t;
      var s = (B = this.canvas.ownerDocument) !== null && B !== void 0 ? B : document, a = s.createElement("canvas");
      a.width = Math.max(1, r), a.height = Math.max(1, n);
      var i = a.getContext("2d");
      return i.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), a;
    }, A.prototype.renderBackgroundImage = function(t) {
      return BA(this, void 0, void 0, function() {
        var r, n, B, s, a, i;
        return rA(this, function(o) {
          switch (o.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var l, u, w, O, R, k, D, P, v, g, O, R, k, D, P, Q, I, d, F, K, y, m, C, L, v, H, O, Z, z, D, P, iA, R, k, $, AA, oA, HA, vA, CA, IA, UA;
                return rA(this, function(bA) {
                  switch (bA.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      l = void 0, u = c.url, bA.label = 1;
                    case 1:
                      return bA.trys.push([1, 3, , 4]), [4, B.context.cache.match(u)];
                    case 2:
                      return l = bA.sent(), [3, 4];
                    case 3:
                      return bA.sent(), B.context.logger.error("Error loading background-image " + u), [3, 4];
                    case 4:
                      return l && (w = rr(t, r, [
                        l.width,
                        l.height,
                        l.width / l.height
                      ]), O = w[0], R = w[1], k = w[2], D = w[3], P = w[4], v = B.ctx.createPattern(B.resizeImage(l, D, P), "repeat"), B.renderRepeat(O, v, R, k)), [3, 6];
                    case 5:
                      po(c) ? (g = rr(t, r, [null, null, null]), O = g[0], R = g[1], k = g[2], D = g[3], P = g[4], Q = Co(c.angle, D, P), I = Q[0], d = Q[1], F = Q[2], K = Q[3], y = Q[4], m = document.createElement("canvas"), m.width = D, m.height = P, C = m.getContext("2d"), L = C.createLinearGradient(d, K, F, y), Fn(c.stops, I).forEach(function(kA) {
                        return L.addColorStop(kA.stop, q(kA.color));
                      }), C.fillStyle = L, C.fillRect(0, 0, D, P), D > 0 && P > 0 && (v = B.ctx.createPattern(m, "repeat"), B.renderRepeat(O, v, R, k))) : Ho(c) && (H = rr(t, r, [
                        null,
                        null,
                        null
                      ]), O = H[0], Z = H[1], z = H[2], D = H[3], P = H[4], iA = c.position.length === 0 ? [Dr] : c.position, R = V(iA[0], D), k = V(iA[iA.length - 1], P), $ = Uo(c, R, k, D, P), AA = $[0], oA = $[1], AA > 0 && oA > 0 && (HA = B.ctx.createRadialGradient(Z + R, z + k, 0, Z + R, z + k, AA), Fn(c.stops, AA * 2).forEach(function(kA) {
                        return HA.addColorStop(kA.stop, q(kA.color));
                      }), B.path(O), B.ctx.fillStyle = HA, AA !== oA ? (vA = t.bounds.left + 0.5 * t.bounds.width, CA = t.bounds.top + 0.5 * t.bounds.height, IA = oA / AA, UA = 1 / IA, B.ctx.save(), B.ctx.translate(vA, CA), B.ctx.transform(1, 0, 0, IA, 0, 0), B.ctx.translate(-vA, -CA), B.ctx.fillRect(Z, UA * (z - CA) + CA, D, P * UA), B.ctx.restore()) : B.ctx.fill())), bA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, B = this, s = 0, a = t.styles.backgroundImage.slice(0).reverse(), o.label = 1;
            case 1:
              return s < a.length ? (i = a[s], [5, n(i)]) : [3, 4];
            case 2:
              o.sent(), o.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderSolidBorder = function(t, r, n) {
      return BA(this, void 0, void 0, function() {
        return rA(this, function(B) {
          return this.path(zn(n, r)), this.ctx.fillStyle = q(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, n, B) {
      return BA(this, void 0, void 0, function() {
        var s, a;
        return rA(this, function(i) {
          switch (i.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, B)] : [3, 2];
            case 1:
              return i.sent(), [
                2
                /*return*/
              ];
            case 2:
              return s = mu(B, n), this.path(s), this.ctx.fillStyle = q(t), this.ctx.fill(), a = yu(B, n), this.path(a), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return BA(this, void 0, void 0, function() {
        var r, n, B, s, a, i, o, c, l = this;
        return rA(this, function(u) {
          switch (u.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !NA(r.backgroundColor) || r.backgroundImage.length, B = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], s = Ru(re(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), NA(r.backgroundColor) || (this.ctx.fillStyle = q(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(w) {
                l.ctx.save();
                var g = ht(t.curves), Q = w.inset ? 0 : Mu, I = vu(g, -Q + (w.inset ? 1 : -1) * w.spread.number, (w.inset ? 1 : -1) * w.spread.number, w.spread.number * (w.inset ? -2 : 2), w.spread.number * (w.inset ? -2 : 2));
                w.inset ? (l.path(g), l.ctx.clip(), l.mask(I)) : (l.mask(g), l.ctx.clip(), l.path(I)), l.ctx.shadowOffsetX = w.offsetX.number + Q, l.ctx.shadowOffsetY = w.offsetY.number, l.ctx.shadowColor = q(w.color), l.ctx.shadowBlur = w.blur.number, l.ctx.fillStyle = w.inset ? q(w.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
              }), u.label = 2;
            case 2:
              a = 0, i = 0, o = B, u.label = 3;
            case 3:
              return i < o.length ? (c = o[i], c.style !== 0 && !NA(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                a,
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
                a,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return u.sent(), [3, 11];
            case 7:
              return c.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, a, t.curves)];
            case 8:
              return u.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(c.color, a, t.curves)];
            case 10:
              u.sent(), u.label = 11;
            case 11:
              a++, u.label = 12;
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
    }, A.prototype.renderDashedDottedBorder = function(t, r, n, B, s) {
      return BA(this, void 0, void 0, function() {
        var a, i, o, c, l, u, w, g, Q, I, d, F, K, y, m, C, m, C;
        return rA(this, function(L) {
          return this.ctx.save(), a = Ku(B, n), i = zn(B, n), s === 2 && (this.path(i), this.ctx.clip()), QA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), QA(i[1]) ? (l = i[1].end.x, u = i[1].end.y) : (l = i[1].x, u = i[1].y), n === 0 || n === 2 ? w = Math.abs(o - l) : w = Math.abs(c - u), this.ctx.beginPath(), s === 3 ? this.formatPath(a) : this.formatPath(i.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, Q = r < 3 ? r * 2 : r, s === 3 && (g = r, Q = r), I = !0, w <= g * 2 ? I = !1 : w <= g * 2 + Q ? (d = w / (2 * g + Q), g *= d, Q *= d) : (F = Math.floor((w + Q) / (g + Q)), K = (w - F * g) / (F - 1), y = (w - (F + 1) * g) / F, Q = y <= 0 || Math.abs(Q - K) < Math.abs(Q - y) ? K : y), I && (s === 3 ? this.ctx.setLineDash([0, g + Q]) : this.ctx.setLineDash([g, Q])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = q(t), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (QA(i[0]) && (m = i[3], C = i[0], this.ctx.beginPath(), this.formatPath([new h(m.end.x, m.end.y), new h(C.start.x, C.start.y)]), this.ctx.stroke()), QA(i[1]) && (m = i[1], C = i[2], this.ctx.beginPath(), this.formatPath([new h(m.end.x, m.end.y), new h(C.start.x, C.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return BA(this, void 0, void 0, function() {
        var r;
        return rA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = q(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Iu(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(gs)
), Gu = function(e) {
  return e instanceof zB || e instanceof ZB ? !0 : e instanceof Or && e.type !== Ct && e.type !== ft;
}, Ru = function(e, A) {
  switch (e) {
    case 0:
      return ht(A);
    case 2:
      return hu(A);
    case 1:
    default:
      return dt(A);
  }
}, Nu = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, Vu = ["-apple-system", "system-ui"], ku = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return Vu.indexOf(A) === -1;
  }) : e;
}, _u = (
  /** @class */
  function(e) {
    hA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return A.prototype.render = function(t) {
      return BA(this, void 0, void 0, function() {
        var r, n;
        return rA(this, function(B) {
          switch (B.label) {
            case 0:
              return r = Er(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Pu(r)];
            case 1:
              return n = B.sent(), this.options.backgroundColor && (this.ctx.fillStyle = q(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(gs)
), Pu = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Xu = (
  /** @class */
  function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Ge([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Ge([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Ge([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Ge([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  }()
), Ju = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Xu({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new uu(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), Yu = function(e, A) {
  return A === void 0 && (A = {}), Wu(e, A);
};
typeof window < "u" && as.setContext(window);
var Wu = function(e, A) {
  return BA(void 0, void 0, void 0, function() {
    var t, r, n, B, s, a, i, o, c, l, u, w, g, Q, I, d, F, K, y, m, L, C, L, v, H, O, Z, z, D, P, iA, R, k, $, AA, oA, HA, vA, CA, IA;
    return rA(this, function(UA) {
      switch (UA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (v = A.allowTaint) !== null && v !== void 0 ? v : !1,
            imageTimeout: (H = A.imageTimeout) !== null && H !== void 0 ? H : 15e3,
            proxy: A.proxy,
            useCORS: (O = A.useCORS) !== null && O !== void 0 ? O : !1
          }, B = ar({ logging: (Z = A.logging) !== null && Z !== void 0 ? Z : !0, cache: A.cache }, n), s = {
            windowWidth: (z = A.windowWidth) !== null && z !== void 0 ? z : r.innerWidth,
            windowHeight: (D = A.windowHeight) !== null && D !== void 0 ? D : r.innerHeight,
            scrollX: (P = A.scrollX) !== null && P !== void 0 ? P : r.pageXOffset,
            scrollY: (iA = A.scrollY) !== null && iA !== void 0 ? iA : r.pageYOffset
          }, a = new LA(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight), i = new Ju(B, a), o = (R = A.foreignObjectRendering) !== null && R !== void 0 ? R : !1, c = {
            allowTaint: (k = A.allowTaint) !== null && k !== void 0 ? k : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), l = new Yn(i, e, c), u = l.clonedReferenceElement, u ? [4, l.toIFrame(t, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return w = UA.sent(), g = Gr(u) || Zl(u) ? Ha(u.ownerDocument) : pt(i, u), Q = g.width, I = g.height, d = g.left, F = g.top, K = Zu(i, u, A.backgroundColor), y = {
            canvas: A.canvas,
            backgroundColor: K,
            scale: (AA = ($ = A.scale) !== null && $ !== void 0 ? $ : r.devicePixelRatio) !== null && AA !== void 0 ? AA : 1,
            x: ((oA = A.x) !== null && oA !== void 0 ? oA : 0) + d,
            y: ((HA = A.y) !== null && HA !== void 0 ? HA : 0) + F,
            width: (vA = A.width) !== null && vA !== void 0 ? vA : Math.ceil(Q),
            height: (CA = A.height) !== null && CA !== void 0 ? CA : Math.ceil(I)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), L = new _u(i, y), [4, L.render(u)]) : [3, 3];
        case 2:
          return m = UA.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + d + "," + F + " with size " + Q + "x" + I + " using computed rendering"), i.logger.debug("Starting DOM parsing"), C = $B(i, u), K === C.styles.backgroundColor && (C.styles.backgroundColor = KA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + y.x + "," + y.y + " with size " + y.width + "x" + y.height), L = new Ou(i, y), [4, L.render(C)];
        case 4:
          m = UA.sent(), UA.label = 5;
        case 5:
          return (!((IA = A.removeContainer) !== null && IA !== void 0) || IA) && (Yn.destroy(w) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, m];
      }
    });
  });
}, Zu = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? ve(e, getComputedStyle(r.documentElement).backgroundColor) : KA.TRANSPARENT, B = r.body ? ve(e, getComputedStyle(r.body).backgroundColor) : KA.TRANSPARENT, s = typeof t == "string" ? ve(e, t) : t === null ? KA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? NA(n) ? NA(B) ? s : B : n : s;
};
const lt = {
  pdf: "Download PDF",
  image: "Download Image",
  csv: "Download Data (CSV)",
  link: "Link to Dataset"
}, zu = (e, A) => {
  const t = navigator.userAgent.match(/MSIE\s([\d.]+)/), r = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/), n = navigator.userAgent.match(/Edge/g);
  if ((t ? t[1] : r ? 11 : n ? 12 : -1) > -1) {
    const s = new Blob([e], {
      type: "image/png"
    });
    window.navigator.msSaveBlob(s, A);
  } else {
    const s = document.createElement("a");
    typeof s.download == "string" ? (s.href = e, s.download = A, s.onclick = (a) => document.body.removeChild(a.target), document.body.appendChild(s), s.click()) : window.open(e);
  }
}, Qs = (e, A, t) => {
  const r = document.querySelector(`[data-download-id=${t}]`), n = (a) => {
    var i, o;
    return (i = a == null ? void 0 : a.dashboard) != null && i.title ? a.dashboard.title.replace(/\s+/g, "-").toLowerCase() + "-" + B.getDate() + B.getMonth() + B.getFullYear() : (o = a == null ? void 0 : a.general) != null && o.title ? a.general.title.replace(/\s+/g, "-").toLowerCase() + "-" + B.getDate() + B.getMonth() + B.getFullYear() : a != null && a.title ? a.title.replace(/\s+/g, "-").toLowerCase() + "-" + B.getDate() + B.getMonth() + B.getFullYear() : "no-title";
  }, B = /* @__PURE__ */ new Date(), s = n(e);
  switch (A) {
    case "image":
      Yu(r, { foreignObjectRendering: !0 }).then((a) => {
        zu(a.toDataURL(), s + ".png");
      });
      return;
    case "pdf":
      console.warn("COVE: pdf downloads disabled");
      break;
    default:
      console.warn("COVE: generateMedia param 2 type must be 'image' or 'pdf'");
      break;
  }
}, qu = (e) => e != null && e.headerColor ? e.headerColor : e != null && e.theme ? e.theme : "theme-notFound", ju = ({ state: e, text: A, type: t, title: r, elementToCapture: n }) => {
  const B = ["btn", "btn-download", `${qu(e)}`];
  return /* @__PURE__ */ U.createElement("button", { className: B.join(" "), title: r, onClick: () => Qs(e, t, n), style: { lineHeight: "1.4em" } }, lt[t]);
}, $u = ({ config: e, dashboardDataConfig: A }) => {
  var r;
  let t = A || e;
  return t.dataFileSourceType === "url" && t.dataFileName && e.table.showDownloadUrl ? /* @__PURE__ */ U.createElement("a", { href: t.dataFileName, title: lt.link, target: "_blank" }, lt.link) : (r = e == null ? void 0 : e.table) != null && r.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ U.createElement("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank" }, lt.link) : null;
}, Ag = ({ children: e, classes: A }) => /* @__PURE__ */ U.createElement("section", { className: A.join(" ") }, /* @__PURE__ */ U.createElement("span", null, e)), ae = () => null;
ae.Section = Ag;
ae.Link = $u;
ae.Button = ju;
ae.generateMedia = Qs;
const eg = ({ rawData: e, fileName: A, headerColor: t, skipId: r }) => {
  const n = Fs.unparse(e), B = new Blob([n], { type: "text/csv;charset=utf-8;" }), s = () => {
    typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(B, A);
  };
  return /* @__PURE__ */ U.createElement("a", { download: A, type: "button", onClick: s, href: URL.createObjectURL(B), "aria-label": "Download this data in a CSV file format.", className: `${t} no-border`, id: `${r}`, "data-html2canvas-ignore": !0, role: "button" }, "Download Data (CSV)");
};
function tg(e = void 0, A) {
  return oB(e)(A);
}
function Kr(e = void 0, A) {
  return cB(e)(A) || /* @__PURE__ */ new Date();
}
const ut = (e, A, t, r) => {
  var c;
  let n = e, B = A;
  n = n === !1 || n === !0 || n === null ? "" : n, B = B === !1 || B == !0 || B === null ? "" : B;
  const s = String(n).trim(), a = String(B).trim();
  if (((c = r.xAxis) == null ? void 0 : c.dataKey) === t.column && r.xAxis.type === "date") {
    let l = Kr(r.xAxis.dateParseFormat, s), u = Kr(r.xAxis.dateParseFormat, a);
    return l && l.getTime && (l = l.getTime()), u && u.getTime && (u = u.getTime()), t.asc ? u - l : l - u;
  }
  const i = !isNaN(Number(n)) && n !== void 0 && n !== null && s !== "", o = !isNaN(Number(B)) && B !== void 0 && B !== null && a !== "";
  return s === "" && a !== "" ? t.asc ? 1 : -1 : s !== "" && a === "" ? t.asc ? -1 : 1 : i && o ? t.asc ? Number(B) - Number(n) : Number(n) - Number(B) : i ? t.asc ? 1 : -1 : o ? t.asc ? -1 : 1 : t.asc ? a.localeCompare(s) : s.localeCompare(a);
}, jn = (e) => {
  let A = "", t = Math.abs(e);
  return t >= 1e9 ? (A = "B", e = e / 1e9) : t >= 1e6 ? (A = "M", e = e / 1e6) : t >= 1e3 && (A = "K", e = e / 1e3), e + A;
}, $n = (e, A, t = !1, r = null, n = null) => {
  if (r || console.error("no config found in formatNumber"), isNaN(e) || !e)
    return e;
  const B = e < 0;
  B && (e = Math.abs(e));
  let {
    dataFormat: { commas: s, abbreviated: a, roundTo: i, prefix: o, suffix: c, rightRoundTo: l, bottomRoundTo: u, rightPrefix: w, rightSuffix: g, bottomPrefix: Q, bottomSuffix: I, bottomAbbreviated: d }
  } = r;
  const { addColCommas: F, addColRoundTo: K, addColPrefix: y, addColSuffix: m } = n;
  String(e).indexOf(",") !== -1 && (e = e.replaceAll(",", ""));
  let C = e, L;
  if (A === "left") {
    let H;
    K !== void 0 ? H = K ? Number(K) : 0 : H = i ? Number(i) : 0, H < 0 && (H = 0);
    let O;
    F !== void 0 ? O = !!F : O = !!r.dataFormat.commas, L = {
      useGrouping: O,
      minimumFractionDigits: H,
      maximumFractionDigits: H
    };
  }
  if (A === "right" && (L = {
    useGrouping: !!r.dataFormat.rightCommas,
    minimumFractionDigits: l ? Number(l) : 0,
    maximumFractionDigits: l ? Number(l) : 0
  }), A === "bottom" && (L = {
    useGrouping: !!r.dataFormat.bottomCommas,
    minimumFractionDigits: u ? Number(u) : 0,
    maximumFractionDigits: u ? Number(u) : 0
  }), e = Vr(e), isNaN(e))
    return r.runtime.editorErrorMessage = `Unable to parse number from data ${C}. Try reviewing your data and selections in the Data Series section.`, C;
  if (!r.dataFormat)
    return e;
  if (r.dataCutoff) {
    let H = Vr(r.dataCutoff);
    e < H && (e = H);
  }
  A === "left" && s && a && t || A === "bottom" && s && a && t ? e = e : e = e.toLocaleString("en-US", L);
  let v = "";
  return a && A === "left" && t && (e = jn(parseFloat(e))), d && A === "bottom" && t && (e = jn(parseFloat(e))), y !== void 0 && A === "left" ? v = y + v : o && A === "left" && (v = o + v), w && A === "right" && (v += w), Q && A === "bottom" && (v += Q), v += e, m !== void 0 && A === "left" ? v += m : c && A === "left" && (v += c), g && A === "right" && (v += g), I && A === "bottom" && (v += I), B && (v = "-" + v), String(v);
}, hg = (e = "medium") => ({ small: 16, medium: 18, large: 20 })[e], rg = (e, A) => {
  let t = {};
  const { columns: r } = A;
  return r && Object.keys(r).forEach((n) => {
    const B = r[n];
    B.name === e && (t = {
      addColPrefix: B.prefix,
      addColSuffix: B.suffix,
      addColRoundTo: B.roundToPlace ? B.roundToPlace : "",
      addColCommas: B.commas
    });
  }), t;
}, pe = (e, A, t, r) => {
  var a, i, o, c;
  const n = r[e];
  let B, s = n[A];
  if (A === ((a = t.xAxis) == null ? void 0 : a.dataKey))
    B = ((i = t.xAxis) == null ? void 0 : i.type) === "date" ? tg((o = t.xAxis) == null ? void 0 : o.dateDisplayFormat, Kr((c = t.xAxis) == null ? void 0 : c.dateParseFormat, s)) : s;
  else {
    let l = "left", u = t.series ? t.series.filter((Q) => (Q == null ? void 0 : Q.axis) === "Left") : [], w = t.series ? t.series.filter((Q) => (Q == null ? void 0 : Q.axis) === "Right") : [];
    u.map((Q) => {
      Q.dataKey === A && (l = "left");
    }), w.map((Q) => {
      Q.dataKey === A && (l = "right");
    });
    let g = rg(A, t);
    g ? B = t.dataFormat ? $n(r[e][A], l, !1, t, g) : r[e][A] : B = t.dataFormat ? $n(r[e][A], l, !1, t) : r[e][A];
  }
  return B;
}, AB = (e, A) => {
  let t = "";
  if (A.columns && Object.keys(A.columns).length > 0)
    return Object.keys(A.columns).forEach(function(r) {
      var n = A.columns[r];
      n.name === e && (t = n.label);
    }), t;
}, ws = (e, A) => {
  var B, s, a;
  let t = A.series ? (s = (B = A.series.filter((i) => i.dataKey === e)) == null ? void 0 : B[0]) == null ? void 0 : s.name : "";
  if (t)
    return t;
  if (A.runtimeSeriesLabels && A.runtimeSeriesLabels[e])
    return A.runtimeSeriesLabels[e];
  let r = AB(e, A) ? AB(e, A) : e;
  return e === ((a = A.xAxis) == null ? void 0 : a.dataKey) ? A.table.indexLabel : r;
}, fs = (e, A, t) => {
  var n, B, s;
  let r;
  return e.visualizationType !== "Pie" ? (r = A ? [(n = e.xAxis) == null ? void 0 : n.dataKey] : [], e.series ? e.series.forEach((a) => {
    r.push(a.dataKey);
  }) : t && t.length > 0 && (r = Object.keys(t[0]))) : r = [(B = e.xAxis) == null ? void 0 : B.dataKey, (s = e.yAxis) == null ? void 0 : s.dataKey], e.columns && Object.keys(e.columns).length > 0 && Object.keys(e.columns).forEach(function(a) {
    var o;
    var i = e.columns[a];
    i.name !== ((o = e.xAxis) == null ? void 0 : o.dataKey) && i.dataTable === !0 && r.push(i.name);
  }), r;
}, Lr = () => /* @__PURE__ */ U.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ U.createElement("path", { d: "M0 5l5-5 5 5z" })), br = () => /* @__PURE__ */ U.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ U.createElement("path", { d: "M0 0l5 5 5-5z" })), ng = ({ data: e, isVertical: A, config: t, runtimeData: r, setSortBy: n, sortBy: B, groupBy: s }) => {
  if (!e)
    return;
  let a = fs(t, A, r);
  if (s) {
    let i = a.filter((o) => o !== s);
    i.length != a.length && (a = i);
  }
  if (A)
    return /* @__PURE__ */ U.createElement("tr", null, a.map((i, o) => {
      const c = ws(i, t);
      return /* @__PURE__ */ U.createElement(
        "th",
        {
          key: `col-header-${i}__${o}`,
          tabIndex: 0,
          title: c,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            n({ column: i, asc: B.column === i ? !B.asc : !1, colIndex: o });
          },
          onKeyDown: (l) => {
            l.keyCode === 13 && n({ column: i, asc: B.column === i ? !B.asc : !1, colIndex: o });
          },
          className: B.column === i ? B.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
          ...B.column === i ? B.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        c,
        i === B.column && /* @__PURE__ */ U.createElement("span", { className: "sort-icon" }, B.asc ? /* @__PURE__ */ U.createElement(br, null) : /* @__PURE__ */ U.createElement(Lr, null)),
        /* @__PURE__ */ U.createElement("button", null, /* @__PURE__ */ U.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${c} in ${B.column === i && B.asc ? "ascending" : "descending"} `, " order"))
      );
    }));
  {
    const i = t.visualizationType === "Pie" ? 1 : 0;
    return /* @__PURE__ */ U.createElement("tr", null, ["__series__", ...Object.keys(r)].slice(i).map((o, c) => {
      var w;
      let l = (w = t.xAxis) == null ? void 0 : w.dataKey, u = o !== "__series__" ? pe(o, l, t, r) : "__series__";
      return /* @__PURE__ */ U.createElement(
        "th",
        {
          key: `col-header-${u}__${c}`,
          tabIndex: 0,
          title: u,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            n({ column: u, asc: B.column === u ? !B.asc : !1, colIndex: c });
          },
          onKeyDown: (g) => {
            g.keyCode === 13 && n({ column: u, asc: B.column === u ? !B.asc : !1, colIndex: c });
          },
          className: B.column === u ? B.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
          ...B.column === u ? B.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        u === "__series__" ? "" : u,
        c === B.colIndex && /* @__PURE__ */ U.createElement("span", { className: "sort-icon" }, B.asc ? /* @__PURE__ */ U.createElement(br, null) : /* @__PURE__ */ U.createElement(Lr, null)),
        /* @__PURE__ */ U.createElement("button", null, /* @__PURE__ */ U.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${u} in ${B.column === u && B.asc ? "ascending" : "descending"} `, " order"))
      );
    }));
  }
}, Bg = ({ categories: e }) => {
  let A = ["Measures", ...e];
  return /* @__PURE__ */ U.createElement("tr", null, A.map((t) => /* @__PURE__ */ U.createElement("th", { key: `col-header-${t}`, tabIndex: 0, title: t, role: "columnheader", scope: "col" }, t)));
}, sg = ({ columns: e, config: A, indexTitle: t, sortBy: r, setSortBy: n }) => /* @__PURE__ */ U.createElement("tr", null, Object.keys(e).filter((B) => e[B].dataTable === !0 && e[B].name).map((B, s) => {
  var i;
  let a;
  return B !== "geo" ? a = e[B].label ? e[B].label : e[B].name : a = A.type === "map" ? t : (i = A.xAxis) == null ? void 0 : i.dataKey, A.type === "map" && (a === void 0 || a === "") && (a = "Location"), /* @__PURE__ */ U.createElement(
    "th",
    {
      key: `col-header-${B}__${s}`,
      id: B,
      tabIndex: 0,
      title: a,
      role: "columnheader",
      scope: "col",
      onClick: () => {
        n({ column: B, asc: r.column === B ? !r.asc : !1 });
      },
      onKeyDown: (o) => {
        o.keyCode === 13 && n({ column: B, asc: r.column === B ? !r.asc : !1 });
      },
      className: r.column === B ? r.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
      ...r.column === B ? r.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
    },
    a,
    r.column === B && /* @__PURE__ */ U.createElement("span", { className: "sort-icon" }, r.asc ? /* @__PURE__ */ U.createElement(br, null) : /* @__PURE__ */ U.createElement(Lr, null)),
    /* @__PURE__ */ U.createElement("button", null, /* @__PURE__ */ U.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${a} in ${r.column === B && r.asc ? "ascending" : "descending"} `, " order"))
  );
})), eB = (e) => /* @__PURE__ */ U.createElement("a", { id: "skip-nav", className: "cdcdataviz-sr-only-focusable", href: `#${e}` }, "Skip Navigation or Skip to Content"), tB = ({ expanded: e, setExpanded: A, tableTitle: t }) => /* @__PURE__ */ U.createElement(
  "div",
  {
    className: e ? "data-table-heading" : "collapsed data-table-heading",
    onClick: () => {
      A(!e);
    },
    tabIndex: 0,
    onKeyDown: (r) => {
      r.keyCode === 13 && A(!e);
    }
  },
  /* @__PURE__ */ U.createElement(Es, { display: e ? "minus" : "plus", base: !0 }),
  t
);
function Cs({ fill: e, borderColor: A }) {
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
  return /* @__PURE__ */ U.createElement("span", { className: "legend-item", style: t });
}
const ag = (e) => /* @__PURE__ */ TA.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ TA.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" })), ig = ({ markup: e, row: A, columns: t, navigationHandler: r, mapZoomHandler: n }) => t.navigate && A[t.navigate.name] ? /* @__PURE__ */ U.createElement(
  "span",
  {
    onClick: () => r(A[t.navigate.name]),
    className: "table-link",
    title: "Click for more information (Opens in a new window)",
    role: "link",
    tabIndex: 0,
    onKeyDown: (B) => {
      B.keyCode === 13 && r(A[t.navigate.name]);
    }
  },
  e,
  /* @__PURE__ */ U.createElement(ag, { className: "inline-icon" })
) : n ? /* @__PURE__ */ U.createElement(
  "span",
  {
    onClick: n,
    className: "table-link",
    title: "Click to view on map",
    role: "link",
    tabIndex: 0,
    onKeyDown: (B) => {
      B.keyCode === 13 && n();
    }
  },
  e
) : /* @__PURE__ */ U.createElement(U.Fragment, null, e), og = ({ rows: e, columns: A, runtimeData: t, config: r, applyLegendToRow: n, displayGeoName: B, formatLegendLocation: s, displayDataAsText: a, navigationHandler: i, setFilteredCountryCode: o }) => e.map(
  (c) => Object.keys(A).filter((l) => A[l].dataTable === !0 && A[l].name).map((l) => {
    let u;
    if (l === "geo") {
      const w = t[c], g = n(w);
      let Q;
      const I = r.general.type === "bubble" && r.general.allowMapZoom && r.general.geoType === "world" ? () => o(c) : void 0;
      r.general.geoType !== "single-state" && r.general.geoType !== "us-county" || r.general.type === "us-geocode" ? Q = B(c) : Q = s(c), u = /* @__PURE__ */ U.createElement("div", { className: "col-12" }, /* @__PURE__ */ U.createElement(Cs, { fill: g[0] }), /* @__PURE__ */ U.createElement(ig, { markup: Q, row: w, columns: A, navigationHandler: i, mapZoomHandler: I }));
    } else {
      let w = "", g = r.columns[l].name;
      const { specialClasses: Q } = r.legend;
      Q && Q.length && typeof Q[0] == "object" && Q.forEach((I) => {
        I.key === g && String(t[c][I.key]) === I.value && (w = I.label);
      }), u = a(w || t[c][g], l);
    }
    return u;
  })
), cg = ({ rows: e, runtimeData: A, config: t, isVertical: r, sortBy: n, colorScale: B, groupBy: s }) => {
  const a = fs(t, r, A), i = () => !n && n.colIndex === null ? a : a.sort((o, c) => {
    if (n.column === "__series__")
      return ut(o, c, n, t);
    let l = A.find((w) => {
      var g;
      return w[(g = t.xAxis) == null ? void 0 : g.dataKey] === n.column;
    });
    const u = A[n.colIndex - 1];
    if (l)
      return ut(l[o], l[c], n, t);
    if (l === void 0 && u)
      return ut(u[o], u[c], n, t);
  });
  if (r)
    if (s) {
      const o = {};
      return e.forEach((c) => {
        let l, u = [];
        a.forEach((w, g) => {
          s === w ? l = pe(c, w, t, A) : u.push(pe(c, w, t, A));
        }), o[l] ? o[l].push(u) : o[l] = [u];
      }), o;
    } else
      return e.map((o) => a.map((c, l) => pe(o, c, t, A)));
  else
    return i().map((o) => {
      const c = ws(o, t);
      return (t.visualizationType !== "Pie" ? [
        /* @__PURE__ */ U.createElement(U.Fragment, null, B && B(c) && /* @__PURE__ */ U.createElement(Cs, { fill: B(c) }), c)
      ] : []).concat(e.map((u, w) => pe(u, o, t, A)));
    });
}, lg = ({ config: e }) => e.regions.map((A) => e.visualizationType === "Box Plot" ? [] : !Object.keys(A).includes("from") || !Object.keys(A).includes("to") ? [] : [A.label, A.from, A.to]), ug = ({ rows: e, config: A }) => {
  const t = (s) => {
    let {
      boxplot: { labels: a }
    } = A;
    return {
      columnMean: a.mean,
      columnMax: a.maximum,
      columnMin: a.minimum,
      columnIqr: a.iqr,
      columnCategory: "Category",
      columnMedian: a.median,
      columnFirstQuartile: a.q1,
      columnThirdQuartile: a.q3,
      columnOutliers: a.outliers,
      values: a.values,
      columnTotal: a.total,
      columnSd: "Standard Deviation",
      nonOutlierValues: "Non Outliers",
      columnLowerBounds: a.lowerBounds,
      columnUpperBounds: a.upperBounds
    }[s];
  };
  let r = (s, a) => Number(s) === 0 ? !0 : Number(s) === 1 ? a.columnMax : Number(s) === 2 ? a.columnThirdQuartile : Number(s) === 3 ? a.columnMedian : Number(s) === 4 ? a.columnFirstQuartile : Number(s) === 5 ? a.columnMin : Number(s) === 6 ? a.columnTotal : Number(s) === 7 ? a.columnSd : Number(s) === 8 ? a.columnMean : Number(s) === 9 ? a.columnOutliers.length > 0 ? a.columnOutliers.toString() : "-" : Number(s) === 10 ? a.values.length > 0 ? a.values.toString() : "-" : /* @__PURE__ */ U.createElement("p", null, "-"), n = e.map((s) => s[0]), B = ["Measures", ...A.boxplot.categories];
  return n.shift(), n.map((s, a) => B.map((i, o) => {
    let c;
    if (i === "Measures") {
      let l = a > 0 ? t(s) : "";
      c = /* @__PURE__ */ U.createElement(U.Fragment, null, l);
    } else
      c = r(a, A.boxplot.plots[o - 1]);
    return c;
  }));
}, dg = (e) => {
  var z, D, P, iA;
  const { config: A, dataConfig: t, tableTitle: r, vizTitle: n, rawData: B, runtimeData: s, headerColor: a, expandDataTable: i, columns: o, viewport: c, formatLegendLocation: l, tabbingId: u } = e, [w, g] = TA.useState(i), [Q, I] = TA.useState({ column: A.type === "map" ? "geo" : "date", asc: !1, colIndex: null }), [d, F] = TA.useState(""), K = !(A.type === "chart" && !((z = A.table) != null && z.showVertical)), m = `btn__${Math.random().toString(16).substr(2, 8)}`, C = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  };
  switch (TA.useEffect(() => {
    const R = "Accessible data table.", k = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    w === !0 && d !== R && F(R), w === !1 && d !== k && F(k);
  }, [w]), A.visualizationType) {
    case "Box Plot":
      if (!A.boxplot)
        return /* @__PURE__ */ U.createElement(Dt, null);
      break;
    case "Line":
      if (!s)
        return /* @__PURE__ */ U.createElement(Dt, null);
      break;
    default:
      if (!s)
        return /* @__PURE__ */ U.createElement(Dt, null);
      break;
  }
  const L = Object.keys(s), v = K ? L.sort((R, k) => {
    let $, AA;
    if (A.type === "map" && A.columns) {
      const oA = A.columns[Q.column].name;
      $ = s[R][oA], AA = s[k][oA];
    }
    return (A.type === "chart" || A.type === "dashboard") && ($ = s[R][Q.column], AA = s[k][Q.column]), $ && AA ? ut($, AA, Q, A) : 0;
  }) : L, H = {
    maxHeight: A.table.limitHeight && `${A.table.height}px`,
    OverflowY: "scroll"
  }, O = TA.useMemo(() => A.type === "map" ? A.table.caption ? A.table.caption : `Data table showing data for the ${C[A.general.geoType]} figure.` : A.table.caption ? A.table.caption : `Data table showing data for the ${A.type} figure.`, [A.table.caption]), Z = TA.useMemo(
    () => {
      var R;
      return A.visualizationType === "Pie" ? [A.yAxis.dataKey] : A.visualizationType === "Box Plot" ? Object.entries(A.boxplot.tableData[0]) : (R = A.runtime) == null ? void 0 : R.seriesKeys;
    },
    [(D = A.runtime) == null ? void 0 : D.seriesKeys]
  );
  if (A.visualizationType !== "Box Plot") {
    const R = () => {
      var k;
      return ((k = A.general) == null ? void 0 : k.geoType) === "us-county" ? B.map(($) => ({ FullGeoName: l($[A.columns.geo.name]), ...$ })) : B;
    };
    return /* @__PURE__ */ U.createElement(Nr, { component: "DataTable" }, /* @__PURE__ */ U.createElement(ae.Section, { classes: ["download-links"] }, /* @__PURE__ */ U.createElement(ae.Link, { config: A, dashboardDataConfig: t }), (A.table.download || ((P = A.general) == null ? void 0 : P.showDownloadButton)) && /* @__PURE__ */ U.createElement(eg, { rawData: R(), fileName: `${n || "data-table"}.csv`, headerColor: a, skipId: m })), /* @__PURE__ */ U.createElement("section", { id: u.replace("#", ""), className: `data-table-container ${c}`, "aria-label": d }, /* @__PURE__ */ U.createElement(eB, { skipId: m }), /* @__PURE__ */ U.createElement(tB, { expanded: w, setExpanded: g, tableTitle: r }), /* @__PURE__ */ U.createElement("div", { className: "table-container", style: H }, /* @__PURE__ */ U.createElement(
      Tt,
      {
        childrenMatrix: A.type === "map" ? og({ rows: v, ...e }) : cg({ rows: v, ...e, isVertical: K, sortBy: Q }),
        tableName: A.type,
        caption: O,
        stickyHeader: !0,
        headContent: A.type === "map" ? /* @__PURE__ */ U.createElement(sg, { columns: o, ...e, sortBy: Q, setSortBy: I }) : /* @__PURE__ */ U.createElement(ng, { data: s, ...e, isVertical: K, sortBy: Q, setSortBy: I }),
        tableOptions: { className: `${w ? "data-table" : "data-table cdcdataviz-sr-only"}${K ? "" : " horizontal"}`, "aria-live": "assertive", "aria-rowcount": (iA = A == null ? void 0 : A.data) != null && iA.length ? A.data.length : -1, hidden: !w }
      }
    ), A.regions && A.regions.length > 0 && A.visualizationType !== "Box Plot" && /* @__PURE__ */ U.createElement(
      Tt,
      {
        childrenMatrix: lg({ config: A }),
        tableName: A.visualizationType,
        caption: "Table of the highlighted regions in the visualization",
        headContent: /* @__PURE__ */ U.createElement("tr", null, /* @__PURE__ */ U.createElement("th", null, "Region Name"), /* @__PURE__ */ U.createElement("th", null, "Start Date"), /* @__PURE__ */ U.createElement("th", null, "End Date")),
        tableOptions: { className: "region-table data-table" }
      }
    ))));
  } else
    return /* @__PURE__ */ U.createElement(Nr, { component: "DataTable" }, /* @__PURE__ */ U.createElement("section", { id: u.replace("#", ""), className: `data-table-container ${c}`, "aria-label": d }, /* @__PURE__ */ U.createElement(eB, { skipId: m }), /* @__PURE__ */ U.createElement(tB, { expanded: w, setExpanded: g, tableTitle: r }), /* @__PURE__ */ U.createElement("div", { className: "table-container", style: H }, /* @__PURE__ */ U.createElement(
      Tt,
      {
        childrenMatrix: ug({ rows: Z, config: A }),
        tableName: A.visualizationType,
        caption: O,
        stickyHeader: !0,
        headContent: /* @__PURE__ */ U.createElement(Bg, { categories: A.boxplot.categories }),
        tableOptions: { className: `${w ? "data-table" : "data-table cdcdataviz-sr-only"}`, "aria-live": "assertive", "aria-rowcount": 11, hidden: !w }
      }
    ))));
};
export {
  dg as D,
  Cs as L,
  ae as M,
  $n as f,
  hg as g,
  oB as t
};
