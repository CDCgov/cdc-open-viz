import { j as H, a as cA, F as Or } from "./storybook-jsx-runtime-36872362.es.js";
import { r as bA } from "./storybook-index-45401197.es.js";
import { L as Ot, E as Jr, a as ma } from "./storybook-viewports-678eca6e.es.js";
import { P as Ia } from "./storybook-papaparse.min-b07ddc33.es.js";
import { i as or, u as cs, j as cr, c as ls, f as xe, e as ya, k as De, h as Te, g as ba, l as Se } from "./storybook-year-24bd1dc7.es.js";
import { n as Wr } from "./storybook-numberFromString-24623c03.es.js";
import { _ as zA } from "./storybook-lodash-a4231e1c.es.js";
import { a as Ka } from "./storybook-Icon-5df8fab3.es.js";
import { T as Nt } from "./storybook-Table-1cfab80e.es.js";
const Yr = ({ skipId: e, skipMessage: A }) => {
  const t = bA.useId(), r = () => {
    const n = document.getElementById(e);
    if (n) {
      n.scrollIntoView(), n.setAttribute("tabIndex", "-1"), n.focus();
      const s = () => {
        n.removeAttribute("tabIndex"), n.removeEventListener("blur", s);
      };
      n.addEventListener("blur", s);
    }
  };
  return /* @__PURE__ */ H(
    "div",
    {
      tabIndex: 0,
      id: `skip-nav--${t}`,
      className: "cdcdataviz-sr-only-focusable",
      onClick: r,
      onKeyDown: (n) => {
        (n.key === "Enter" || n.key === " ") && r();
      },
      role: "link",
      "aria-label": A,
      children: A
    }
  );
};
function Rt(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return A.setFullYear(e.y), A;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Gt(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return A.setUTCFullYear(e.y), A;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ge(e, A, t) {
  return { y: e, m: A, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function La(e) {
  var A = e.dateTime, t = e.date, r = e.time, n = e.periods, s = e.days, a = e.shortDays, B = e.months, i = e.shortMonths, o = Qe(n), c = we(n), l = Qe(s), u = we(s), Q = Qe(a), g = we(a), w = Qe(B), C = we(B), f = Qe(i), h = we(i), y = {
    a: Z,
    A: CA,
    b: iA,
    B: QA,
    c: null,
    d: An,
    e: An,
    f: AB,
    g: cB,
    G: uB,
    H: za,
    I: qa,
    j: $a,
    L: us,
    m: eB,
    M: tB,
    p: UA,
    q: FA,
    Q: rn,
    s: nn,
    S: rB,
    u: nB,
    U: sB,
    V: aB,
    w: BB,
    W: iB,
    x: null,
    X: null,
    y: oB,
    Y: lB,
    Z: gB,
    "%": tn
  }, v = {
    a: lA,
    A: hA,
    b: uA,
    B: vA,
    c: null,
    d: en,
    e: en,
    f: CB,
    g: IB,
    G: bB,
    H: QB,
    I: wB,
    j: fB,
    L: Qs,
    m: UB,
    M: FB,
    p: T,
    q,
    Q: rn,
    s: nn,
    S: hB,
    u: dB,
    U: pB,
    V: EB,
    w: HB,
    W: vB,
    x: null,
    X: null,
    y: mB,
    Y: yB,
    Z: KB,
    "%": tn
  }, m = {
    a: D,
    A: V,
    b: X,
    B: M,
    c: J,
    d: qr,
    e: qr,
    f: Wa,
    g: zr,
    G: jr,
    H: $r,
    I: $r,
    j: _a,
    L: Ja,
    m: ka,
    M: Pa,
    p: b,
    q: Va,
    Q: Za,
    s: ja,
    S: Xa,
    u: Ma,
    U: Oa,
    V: Na,
    w: Sa,
    W: Ra,
    x: fA,
    X: AA,
    y: zr,
    Y: jr,
    Z: Ga,
    "%": Ya
  };
  y.x = F(t, y), y.X = F(r, y), y.c = F(A, y), v.x = F(t, v), v.X = F(r, v), v.c = F(A, v);
  function F(d, I) {
    return function(K) {
      var U = [], N = -1, O = 0, j = d.length, sA, xA, Xr;
      for (K instanceof Date || (K = /* @__PURE__ */ new Date(+K)); ++N < j; )
        d.charCodeAt(N) === 37 && (U.push(d.slice(O, N)), (xA = Zr[sA = d.charAt(++N)]) != null ? sA = d.charAt(++N) : xA = sA === "e" ? " " : "0", (Xr = I[sA]) && (sA = Xr(K, xA)), U.push(sA), O = N + 1);
      return U.push(d.slice(O, N)), U.join("");
    };
  }
  function x(d, I) {
    return function(K) {
      var U = ge(1900, void 0, 1), N = L(U, d, K += "", 0), O, j;
      if (N != K.length)
        return null;
      if ("Q" in U)
        return new Date(U.Q);
      if ("s" in U)
        return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (I && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53)
          return null;
        "w" in U || (U.w = 1), "Z" in U ? (O = Gt(ge(U.y, 0, 1)), j = O.getUTCDay(), O = j > 4 || j === 0 ? or.ceil(O) : or(O), O = cs.offset(O, (U.V - 1) * 7), U.y = O.getUTCFullYear(), U.m = O.getUTCMonth(), U.d = O.getUTCDate() + (U.w + 6) % 7) : (O = Rt(ge(U.y, 0, 1)), j = O.getDay(), O = j > 4 || j === 0 ? cr.ceil(O) : cr(O), O = ls.offset(O, (U.V - 1) * 7), U.y = O.getFullYear(), U.m = O.getMonth(), U.d = O.getDate() + (U.w + 6) % 7);
      } else
        ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), j = "Z" in U ? Gt(ge(U.y, 0, 1)).getUTCDay() : Rt(ge(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (j + 5) % 7 : U.w + U.U * 7 - (j + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Gt(U)) : Rt(U);
    };
  }
  function L(d, I, K, U) {
    for (var N = 0, O = I.length, j = K.length, sA, xA; N < O; ) {
      if (U >= j)
        return -1;
      if (sA = I.charCodeAt(N++), sA === 37) {
        if (sA = I.charAt(N++), xA = m[sA in Zr ? I.charAt(N++) : sA], !xA || (U = xA(d, K, U)) < 0)
          return -1;
      } else if (sA != K.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function b(d, I, K) {
    var U = o.exec(I.slice(K));
    return U ? (d.p = c.get(U[0].toLowerCase()), K + U[0].length) : -1;
  }
  function D(d, I, K) {
    var U = Q.exec(I.slice(K));
    return U ? (d.w = g.get(U[0].toLowerCase()), K + U[0].length) : -1;
  }
  function V(d, I, K) {
    var U = l.exec(I.slice(K));
    return U ? (d.w = u.get(U[0].toLowerCase()), K + U[0].length) : -1;
  }
  function X(d, I, K) {
    var U = f.exec(I.slice(K));
    return U ? (d.m = h.get(U[0].toLowerCase()), K + U[0].length) : -1;
  }
  function M(d, I, K) {
    var U = w.exec(I.slice(K));
    return U ? (d.m = C.get(U[0].toLowerCase()), K + U[0].length) : -1;
  }
  function J(d, I, K) {
    return L(d, A, I, K);
  }
  function fA(d, I, K) {
    return L(d, t, I, K);
  }
  function AA(d, I, K) {
    return L(d, r, I, K);
  }
  function Z(d) {
    return a[d.getDay()];
  }
  function CA(d) {
    return s[d.getDay()];
  }
  function iA(d) {
    return i[d.getMonth()];
  }
  function QA(d) {
    return B[d.getMonth()];
  }
  function UA(d) {
    return n[+(d.getHours() >= 12)];
  }
  function FA(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function lA(d) {
    return a[d.getUTCDay()];
  }
  function hA(d) {
    return s[d.getUTCDay()];
  }
  function uA(d) {
    return i[d.getUTCMonth()];
  }
  function vA(d) {
    return B[d.getUTCMonth()];
  }
  function T(d) {
    return n[+(d.getUTCHours() >= 12)];
  }
  function q(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(d) {
      var I = F(d += "", y);
      return I.toString = function() {
        return d;
      }, I;
    },
    parse: function(d) {
      var I = x(d += "", !1);
      return I.toString = function() {
        return d;
      }, I;
    },
    utcFormat: function(d) {
      var I = F(d += "", v);
      return I.toString = function() {
        return d;
      }, I;
    },
    utcParse: function(d) {
      var I = x(d += "", !0);
      return I.toString = function() {
        return d;
      }, I;
    }
  };
}
var Zr = { "-": "", _: " ", 0: "0" }, tA = /^\s*\d+/, xa = /^%/, Da = /[\\^$*+?|[\]().{}]/g;
function R(e, A, t) {
  var r = e < 0 ? "-" : "", n = (r ? -e : e) + "", s = n.length;
  return r + (s < t ? new Array(t - s + 1).join(A) + n : n);
}
function Ta(e) {
  return e.replace(Da, "\\$&");
}
function Qe(e) {
  return new RegExp("^(?:" + e.map(Ta).join("|") + ")", "i");
}
function we(e) {
  return new Map(e.map((A, t) => [A.toLowerCase(), t]));
}
function Sa(e, A, t) {
  var r = tA.exec(A.slice(t, t + 1));
  return r ? (e.w = +r[0], t + r[0].length) : -1;
}
function Ma(e, A, t) {
  var r = tA.exec(A.slice(t, t + 1));
  return r ? (e.u = +r[0], t + r[0].length) : -1;
}
function Oa(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.U = +r[0], t + r[0].length) : -1;
}
function Na(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.V = +r[0], t + r[0].length) : -1;
}
function Ra(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.W = +r[0], t + r[0].length) : -1;
}
function jr(e, A, t) {
  var r = tA.exec(A.slice(t, t + 4));
  return r ? (e.y = +r[0], t + r[0].length) : -1;
}
function zr(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), t + r[0].length) : -1;
}
function Ga(e, A, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(A.slice(t, t + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function Va(e, A, t) {
  var r = tA.exec(A.slice(t, t + 1));
  return r ? (e.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function ka(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.m = r[0] - 1, t + r[0].length) : -1;
}
function qr(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.d = +r[0], t + r[0].length) : -1;
}
function _a(e, A, t) {
  var r = tA.exec(A.slice(t, t + 3));
  return r ? (e.m = 0, e.d = +r[0], t + r[0].length) : -1;
}
function $r(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.H = +r[0], t + r[0].length) : -1;
}
function Pa(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.M = +r[0], t + r[0].length) : -1;
}
function Xa(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.S = +r[0], t + r[0].length) : -1;
}
function Ja(e, A, t) {
  var r = tA.exec(A.slice(t, t + 3));
  return r ? (e.L = +r[0], t + r[0].length) : -1;
}
function Wa(e, A, t) {
  var r = tA.exec(A.slice(t, t + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function Ya(e, A, t) {
  var r = xa.exec(A.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function Za(e, A, t) {
  var r = tA.exec(A.slice(t));
  return r ? (e.Q = +r[0], t + r[0].length) : -1;
}
function ja(e, A, t) {
  var r = tA.exec(A.slice(t));
  return r ? (e.s = +r[0], t + r[0].length) : -1;
}
function An(e, A) {
  return R(e.getDate(), A, 2);
}
function za(e, A) {
  return R(e.getHours(), A, 2);
}
function qa(e, A) {
  return R(e.getHours() % 12 || 12, A, 2);
}
function $a(e, A) {
  return R(1 + ls.count(xe(e), e), A, 3);
}
function us(e, A) {
  return R(e.getMilliseconds(), A, 3);
}
function AB(e, A) {
  return us(e, A) + "000";
}
function eB(e, A) {
  return R(e.getMonth() + 1, A, 2);
}
function tB(e, A) {
  return R(e.getMinutes(), A, 2);
}
function rB(e, A) {
  return R(e.getSeconds(), A, 2);
}
function nB(e) {
  var A = e.getDay();
  return A === 0 ? 7 : A;
}
function sB(e, A) {
  return R(ya.count(xe(e) - 1, e), A, 2);
}
function gs(e) {
  var A = e.getDay();
  return A >= 4 || A === 0 ? De(e) : De.ceil(e);
}
function aB(e, A) {
  return e = gs(e), R(De.count(xe(e), e) + (xe(e).getDay() === 4), A, 2);
}
function BB(e) {
  return e.getDay();
}
function iB(e, A) {
  return R(cr.count(xe(e) - 1, e), A, 2);
}
function oB(e, A) {
  return R(e.getFullYear() % 100, A, 2);
}
function cB(e, A) {
  return e = gs(e), R(e.getFullYear() % 100, A, 2);
}
function lB(e, A) {
  return R(e.getFullYear() % 1e4, A, 4);
}
function uB(e, A) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? De(e) : De.ceil(e), R(e.getFullYear() % 1e4, A, 4);
}
function gB(e) {
  var A = e.getTimezoneOffset();
  return (A > 0 ? "-" : (A *= -1, "+")) + R(A / 60 | 0, "0", 2) + R(A % 60, "0", 2);
}
function en(e, A) {
  return R(e.getUTCDate(), A, 2);
}
function QB(e, A) {
  return R(e.getUTCHours(), A, 2);
}
function wB(e, A) {
  return R(e.getUTCHours() % 12 || 12, A, 2);
}
function fB(e, A) {
  return R(1 + cs.count(Te(e), e), A, 3);
}
function Qs(e, A) {
  return R(e.getUTCMilliseconds(), A, 3);
}
function CB(e, A) {
  return Qs(e, A) + "000";
}
function UB(e, A) {
  return R(e.getUTCMonth() + 1, A, 2);
}
function FB(e, A) {
  return R(e.getUTCMinutes(), A, 2);
}
function hB(e, A) {
  return R(e.getUTCSeconds(), A, 2);
}
function dB(e) {
  var A = e.getUTCDay();
  return A === 0 ? 7 : A;
}
function pB(e, A) {
  return R(ba.count(Te(e) - 1, e), A, 2);
}
function ws(e) {
  var A = e.getUTCDay();
  return A >= 4 || A === 0 ? Se(e) : Se.ceil(e);
}
function EB(e, A) {
  return e = ws(e), R(Se.count(Te(e), e) + (Te(e).getUTCDay() === 4), A, 2);
}
function HB(e) {
  return e.getUTCDay();
}
function vB(e, A) {
  return R(or.count(Te(e) - 1, e), A, 2);
}
function mB(e, A) {
  return R(e.getUTCFullYear() % 100, A, 2);
}
function IB(e, A) {
  return e = ws(e), R(e.getUTCFullYear() % 100, A, 2);
}
function yB(e, A) {
  return R(e.getUTCFullYear() % 1e4, A, 4);
}
function bB(e, A) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? Se(e) : Se.ceil(e), R(e.getUTCFullYear() % 1e4, A, 4);
}
function KB() {
  return "+0000";
}
function tn() {
  return "%";
}
function rn(e) {
  return +e;
}
function nn(e) {
  return Math.floor(+e / 1e3);
}
var qA, fs, ft;
LB({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function LB(e) {
  return qA = La(e), fs = qA.format, ft = qA.parse, qA.utcFormat, qA.utcParse, qA;
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
var lr = function(e, A) {
  return lr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, lr(e, A);
};
function IA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  lr(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var ur = function() {
  return ur = Object.assign || function(A) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (A[s] = t[s]);
    }
    return A;
  }, ur.apply(this, arguments);
};
function oA(e, A, t, r) {
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
function aA(e, A) {
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
function Ve(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = A.length, s; r < n; r++)
      (s || !(r in A)) && (s || (s = Array.prototype.slice.call(A, 0, r)), s[r] = A[r]);
  return e.concat(s || A);
}
var MA = (
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
), It = function(e, A) {
  return MA.fromClientRect(e, A.getBoundingClientRect());
}, xB = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new MA(0, 0, r, n);
}, yt = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, Y = function() {
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
}, sn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", DB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ke = 0; ke < sn.length; ke++)
  DB[sn.charCodeAt(ke)] = ke;
var an = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", he = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var _e = 0; _e < an.length; _e++)
  he[an.charCodeAt(_e)] = _e;
var TB = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, s, a, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    s = he[e.charCodeAt(r)], a = he[e.charCodeAt(r + 1)], B = he[e.charCodeAt(r + 2)], i = he[e.charCodeAt(r + 3)], c[n++] = s << 2 | a >> 4, c[n++] = (a & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, SB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, MB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, ZA = 5, Nr = 6 + 5, Vt = 2, OB = Nr - ZA, Cs = 65536 >> ZA, NB = 1 << ZA, kt = NB - 1, RB = 1024 >> ZA, GB = Cs + RB, VB = GB, kB = 32, _B = VB + kB, PB = 65536 >> Nr, XB = 1 << OB, JB = XB - 1, Bn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, WB = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, YB = function(e, A) {
  var t = TB(e), r = Array.isArray(t) ? MB(t) : new Uint32Array(t), n = Array.isArray(t) ? SB(t) : new Uint16Array(t), s = 24, a = Bn(n, s / 2, r[4] / 2), B = r[5] === 2 ? Bn(n, (s + r[4]) / 2) : WB(r, Math.ceil((s + r[4]) / 4));
  return new ZB(r[0], r[1], r[2], r[3], a, B);
}, ZB = (
  /** @class */
  function() {
    function e(A, t, r, n, s, a) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = a;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> ZA], t = (t << Vt) + (A & kt), this.data[t];
        if (A <= 65535)
          return t = this.index[Cs + (A - 55296 >> ZA)], t = (t << Vt) + (A & kt), this.data[t];
        if (A < this.highStart)
          return t = _B - PB + (A >> Nr), t = this.index[t], t += A >> ZA & JB, t = this.index[t], t = (t << Vt) + (A & kt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), on = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", jB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Pe = 0; Pe < on.length; Pe++)
  jB[on.charCodeAt(Pe)] = Pe;
var zB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", cn = 50, qB = 1, Us = 2, Fs = 3, $B = 4, Ai = 5, ln = 7, hs = 8, un = 9, GA = 10, gr = 11, gn = 12, Qr = 13, ei = 14, de = 15, wr = 16, Xe = 17, fe = 18, ti = 19, Qn = 20, fr = 21, Ce = 22, _t = 23, $A = 24, wA = 25, pe = 26, Ee = 27, Ae = 28, ri = 29, WA = 30, ni = 31, Je = 32, We = 33, Cr = 34, Ur = 35, Fr = 36, Me = 37, hr = 38, ct = 39, lt = 40, Pt = 41, ds = 42, si = 43, ai = [9001, 65288], ps = "!", S = "×", Ye = "÷", dr = YB(zB), DA = [WA, Fr], pr = [qB, Us, Fs, Ai], Es = [GA, hs], wn = [Ee, pe], Bi = pr.concat(Es), fn = [hr, ct, lt, Cr, Ur], ii = [de, Qr], oi = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(s, a) {
    var B = dr.get(s);
    if (B > cn ? (n.push(!0), B -= cn) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(s) !== -1)
      return r.push(a), t.push(wr);
    if (B === $B || B === gr) {
      if (a === 0)
        return r.push(a), t.push(WA);
      var i = t[a - 1];
      return Bi.indexOf(i) === -1 ? (r.push(r[a - 1]), t.push(i)) : (r.push(a), t.push(WA));
    }
    if (r.push(a), B === ni)
      return t.push(A === "strict" ? fr : Me);
    if (B === ds || B === ri)
      return t.push(WA);
    if (B === si)
      return s >= 131072 && s <= 196605 || s >= 196608 && s <= 262141 ? t.push(Me) : t.push(WA);
    t.push(B);
  }), [r, t, n];
}, Xt = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var s = t; s <= r.length; ) {
      s++;
      var a = r[s];
      if (a === A)
        return !0;
      if (a !== GA)
        break;
    }
  if (n === GA)
    for (var s = t; s > 0; ) {
      s--;
      var B = r[s];
      if (Array.isArray(e) ? e.indexOf(B) !== -1 : e === B)
        for (var i = t; i <= r.length; ) {
          i++;
          var a = r[i];
          if (a === A)
            return !0;
          if (a !== GA)
            break;
        }
      if (B !== GA)
        break;
    }
  return !1;
}, Cn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === GA)
      t--;
    else
      return r;
  }
  return 0;
}, ci = function(e, A, t, r, n) {
  if (t[r] === 0)
    return S;
  var s = r - 1;
  if (Array.isArray(n) && n[s] === !0)
    return S;
  var a = s - 1, B = s + 1, i = A[s], o = a >= 0 ? A[a] : 0, c = A[B];
  if (i === Us && c === Fs)
    return S;
  if (pr.indexOf(i) !== -1)
    return ps;
  if (pr.indexOf(c) !== -1 || Es.indexOf(c) !== -1)
    return S;
  if (Cn(s, A) === hs)
    return Ye;
  if (dr.get(e[s]) === gr || (i === Je || i === We) && dr.get(e[B]) === gr || i === ln || c === ln || i === un || [GA, Qr, de].indexOf(i) === -1 && c === un || [Xe, fe, ti, $A, Ae].indexOf(c) !== -1 || Cn(s, A) === Ce || Xt(_t, Ce, s, A) || Xt([Xe, fe], fr, s, A) || Xt(gn, gn, s, A))
    return S;
  if (i === GA)
    return Ye;
  if (i === _t || c === _t)
    return S;
  if (c === wr || i === wr)
    return Ye;
  if ([Qr, de, fr].indexOf(c) !== -1 || i === ei || o === Fr && ii.indexOf(i) !== -1 || i === Ae && c === Fr || c === Qn || DA.indexOf(c) !== -1 && i === wA || DA.indexOf(i) !== -1 && c === wA || i === Ee && [Me, Je, We].indexOf(c) !== -1 || [Me, Je, We].indexOf(i) !== -1 && c === pe || DA.indexOf(i) !== -1 && wn.indexOf(c) !== -1 || wn.indexOf(i) !== -1 && DA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Ee, pe].indexOf(i) !== -1 && (c === wA || [Ce, de].indexOf(c) !== -1 && A[B + 1] === wA) || // ( OP | HY ) × NU
  [Ce, de].indexOf(i) !== -1 && c === wA || // NU ×	(NU | SY | IS)
  i === wA && [wA, Ae, $A].indexOf(c) !== -1)
    return S;
  if ([wA, Ae, $A, Xe, fe].indexOf(c) !== -1)
    for (var l = s; l >= 0; ) {
      var u = A[l];
      if (u === wA)
        return S;
      if ([Ae, $A].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if ([Ee, pe].indexOf(c) !== -1)
    for (var l = [Xe, fe].indexOf(i) !== -1 ? a : s; l >= 0; ) {
      var u = A[l];
      if (u === wA)
        return S;
      if ([Ae, $A].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if (hr === i && [hr, ct, Cr, Ur].indexOf(c) !== -1 || [ct, Cr].indexOf(i) !== -1 && [ct, lt].indexOf(c) !== -1 || [lt, Ur].indexOf(i) !== -1 && c === lt || fn.indexOf(i) !== -1 && [Qn, pe].indexOf(c) !== -1 || fn.indexOf(c) !== -1 && i === Ee || DA.indexOf(i) !== -1 && DA.indexOf(c) !== -1 || i === $A && DA.indexOf(c) !== -1 || DA.concat(wA).indexOf(i) !== -1 && c === Ce && ai.indexOf(e[B]) === -1 || DA.concat(wA).indexOf(c) !== -1 && i === fe)
    return S;
  if (i === Pt && c === Pt) {
    for (var Q = t[s], g = 1; Q > 0 && (Q--, A[Q] === Pt); )
      g++;
    if (g % 2 !== 0)
      return S;
  }
  return i === Je && c === We ? S : Ye;
}, li = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = oi(e, A.lineBreak), r = t[0], n = t[1], s = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(B) {
    return [wA, WA, ds].indexOf(B) !== -1 ? Me : B;
  }));
  var a = A.wordBreak === "keep-all" ? s.map(function(B, i) {
    return B && e[i] >= 19968 && e[i] <= 40959;
  }) : void 0;
  return [r, n, a];
}, ui = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === ps, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return Y.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), gi = function(e, A) {
  var t = yt(e), r = li(t, A), n = r[0], s = r[1], a = r[2], B = t.length, i = 0, o = 0;
  return {
    next: function() {
      if (o >= B)
        return { done: !0, value: null };
      for (var c = S; o < B && (c = ci(t, s, n, ++o, a)) === S; )
        ;
      if (c !== S || o === B) {
        var l = new ui(t, c, i, o);
        return i = o, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Qi = 1, wi = 2, Re = 4, Un = 8, Ct = 10, Fn = 47, Ie = 92, fi = 9, Ci = 32, Ze = 34, Ue = 61, Ui = 35, Fi = 36, hi = 37, je = 39, ze = 40, Fe = 41, di = 95, gA = 45, pi = 33, Ei = 60, Hi = 62, vi = 64, mi = 91, Ii = 93, yi = 61, bi = 123, qe = 63, Ki = 125, hn = 124, Li = 126, xi = 128, dn = 65533, Jt = 42, YA = 43, Di = 44, Ti = 58, Si = 59, Oe = 46, Mi = 0, Oi = 8, Ni = 11, Ri = 14, Gi = 31, Vi = 127, yA = -1, Hs = 48, vs = 97, ms = 101, ki = 102, _i = 117, Pi = 122, Is = 65, ys = 69, bs = 70, Xi = 85, Ji = 90, BA = function(e) {
  return e >= Hs && e <= 57;
}, Wi = function(e) {
  return e >= 55296 && e <= 57343;
}, ee = function(e) {
  return BA(e) || e >= Is && e <= bs || e >= vs && e <= ki;
}, Yi = function(e) {
  return e >= vs && e <= Pi;
}, Zi = function(e) {
  return e >= Is && e <= Ji;
}, ji = function(e) {
  return Yi(e) || Zi(e);
}, zi = function(e) {
  return e >= xi;
}, $e = function(e) {
  return e === Ct || e === fi || e === Ci;
}, Ut = function(e) {
  return ji(e) || zi(e) || e === di;
}, pn = function(e) {
  return Ut(e) || BA(e) || e === gA;
}, qi = function(e) {
  return e >= Mi && e <= Oi || e === Ni || e >= Ri && e <= Gi || e === Vi;
}, RA = function(e, A) {
  return e !== Ie ? !1 : A !== Ct;
}, At = function(e, A, t) {
  return e === gA ? Ut(A) || RA(A, t) : Ut(e) ? !0 : !!(e === Ie && RA(e, A));
}, Wt = function(e, A, t) {
  return e === YA || e === gA ? BA(A) ? !0 : A === Oe && BA(t) : BA(e === Oe ? A : e);
}, $i = function(e) {
  var A = 0, t = 1;
  (e[A] === YA || e[A] === gA) && (e[A] === gA && (t = -1), A++);
  for (var r = []; BA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(Y.apply(void 0, r), 10) : 0;
  e[A] === Oe && A++;
  for (var s = []; BA(e[A]); )
    s.push(e[A++]);
  var a = s.length, B = a ? parseInt(Y.apply(void 0, s), 10) : 0;
  (e[A] === ys || e[A] === ms) && A++;
  var i = 1;
  (e[A] === YA || e[A] === gA) && (e[A] === gA && (i = -1), A++);
  for (var o = []; BA(e[A]); )
    o.push(e[A++]);
  var c = o.length ? parseInt(Y.apply(void 0, o), 10) : 0;
  return t * (n + B * Math.pow(10, -a)) * Math.pow(10, i * c);
}, Ao = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, eo = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, to = {
  type: 4
  /* COMMA_TOKEN */
}, ro = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, no = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, so = {
  type: 21
  /* COLUMN_TOKEN */
}, ao = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, Bo = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, io = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, oo = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, co = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, et = {
  type: 23
  /* BAD_URL_TOKEN */
}, lo = {
  type: 1
  /* BAD_STRING_TOKEN */
}, uo = {
  type: 25
  /* CDO_TOKEN */
}, go = {
  type: 24
  /* CDC_TOKEN */
}, Qo = {
  type: 26
  /* COLON_TOKEN */
}, wo = {
  type: 27
  /* SEMICOLON_TOKEN */
}, fo = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, Co = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, Uo = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Er = {
  type: 32
  /* EOF_TOKEN */
}, Ks = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(yt(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== Er; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Ze:
          return this.consumeStringToken(Ze);
        case Ui:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (pn(t) || RA(r, n)) {
            var s = At(t, r, n) ? wi : Qi, a = this.consumeName();
            return { type: 5, value: a, flags: s };
          }
          break;
        case Fi:
          if (this.peekCodePoint(0) === Ue)
            return this.consumeCodePoint(), ro;
          break;
        case je:
          return this.consumeStringToken(je);
        case ze:
          return Ao;
        case Fe:
          return eo;
        case Jt:
          if (this.peekCodePoint(0) === Ue)
            return this.consumeCodePoint(), co;
          break;
        case YA:
          if (Wt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Di:
          return to;
        case gA:
          var B = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (Wt(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (At(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === gA && o === Hi)
            return this.consumeCodePoint(), this.consumeCodePoint(), go;
          break;
        case Oe:
          if (Wt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Fn:
          if (this.peekCodePoint(0) === Jt)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === Jt && (c = this.consumeCodePoint(), c === Fn))
                return this.consumeToken();
              if (c === yA)
                return this.consumeToken();
            }
          break;
        case Ti:
          return Qo;
        case Si:
          return wo;
        case Ei:
          if (this.peekCodePoint(0) === pi && this.peekCodePoint(1) === gA && this.peekCodePoint(2) === gA)
            return this.consumeCodePoint(), this.consumeCodePoint(), uo;
          break;
        case vi:
          var l = this.peekCodePoint(0), u = this.peekCodePoint(1), Q = this.peekCodePoint(2);
          if (At(l, u, Q)) {
            var a = this.consumeName();
            return { type: 7, value: a };
          }
          break;
        case mi:
          return fo;
        case Ie:
          if (RA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case Ii:
          return Co;
        case yi:
          if (this.peekCodePoint(0) === Ue)
            return this.consumeCodePoint(), no;
          break;
        case bi:
          return io;
        case Ki:
          return oo;
        case _i:
        case Xi:
          var g = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return g === YA && (ee(w) || w === qe) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case hn:
          if (this.peekCodePoint(0) === Ue)
            return this.consumeCodePoint(), ao;
          if (this.peekCodePoint(0) === hn)
            return this.consumeCodePoint(), so;
          break;
        case Li:
          if (this.peekCodePoint(0) === Ue)
            return this.consumeCodePoint(), Bo;
          break;
        case yA:
          return Er;
      }
      return $e(A) ? (this.consumeWhiteSpace(), Uo) : BA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Ut(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: Y(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); ee(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === qe && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(Y.apply(void 0, A.map(function(i) {
          return i === qe ? Hs : i;
        })), 16), s = parseInt(Y.apply(void 0, A.map(function(i) {
          return i === qe ? bs : i;
        })), 16);
        return { type: 30, start: n, end: s };
      }
      var a = parseInt(Y.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === gA && ee(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var B = []; ee(t) && B.length < 6; )
          B.push(t), t = this.consumeCodePoint();
        var s = parseInt(Y.apply(void 0, B), 16);
        return { type: 30, start: a, end: s };
      } else
        return { type: 30, start: a, end: a };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === ze ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === ze ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === yA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === je || t === Ze) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === yA || this.peekCodePoint(0) === Fe) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), et);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === yA || n === Fe)
          return { type: 22, value: Y.apply(void 0, A) };
        if ($e(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === yA || this.peekCodePoint(0) === Fe ? (this.consumeCodePoint(), { type: 22, value: Y.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), et);
        if (n === Ze || n === je || n === ze || qi(n))
          return this.consumeBadUrlRemnants(), et;
        if (n === Ie)
          if (RA(n, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), et;
        else
          A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; $e(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === Fe || A === yA)
          return;
        RA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var n = Math.min(t, A);
        r += Y.apply(void 0, this._value.splice(0, n)), A -= n;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === yA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === Ct)
          return this._value.splice(0, r), lo;
        if (n === Ie) {
          var s = this._value[r + 1];
          s !== yA && s !== void 0 && (s === Ct ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : RA(n, s) && (t += this.consumeStringSlice(r), t += Y(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Re, r = this.peekCodePoint(0);
      for ((r === YA || r === gA) && A.push(this.consumeCodePoint()); BA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Oe && BA(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Un; BA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var s = this.peekCodePoint(2);
      if ((r === ys || r === ms) && ((n === YA || n === gA) && BA(s) || BA(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Un; BA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [$i(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), s = this.peekCodePoint(1), a = this.peekCodePoint(2);
      if (At(n, s, a)) {
        var B = this.consumeName();
        return { type: 15, number: t, flags: r, unit: B };
      }
      return n === hi ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (ee(A)) {
        for (var t = Y(A); ee(this.peekCodePoint(0)) && t.length < 6; )
          t += Y(this.consumeCodePoint());
        $e(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Wi(r) || r > 1114111 ? dn : r;
      }
      return A === yA ? dn : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (pn(t))
          A += Y(t);
        else if (RA(t, this.peekCodePoint(0)))
          A += Y(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  }()
), Ls = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new Ks();
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
        if (r.type === 32 || ho(r, A))
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
      return typeof A > "u" ? Er : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  }()
), Ge = function(e) {
  return e.type === 15;
}, ue = function(e) {
  return e.type === 17;
}, k = function(e) {
  return e.type === 20;
}, Fo = function(e) {
  return e.type === 0;
}, Hr = function(e, A) {
  return k(e) && e.value === A;
}, xs = function(e) {
  return e.type !== 31;
}, ce = function(e) {
  return e.type !== 31 && e.type !== 4;
}, KA = function(e) {
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
}, ho = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, XA = function(e) {
  return e.type === 17 || e.type === 15;
}, z = function(e) {
  return e.type === 16 || XA(e);
}, Ds = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, nA = {
  type: 17,
  number: 0,
  flags: Re
}, Rr = {
  type: 16,
  number: 50,
  flags: Re
}, VA = {
  type: 16,
  number: 100,
  flags: Re
}, He = function(e, A, t) {
  var r = e[0], n = e[1];
  return [_(r, A), _(typeof n < "u" ? n : r, t)];
}, _ = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (Ge(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, Ts = "deg", Ss = "grad", Ms = "rad", Os = "turn", bt = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case Ts:
          return Math.PI * A.number / 180;
        case Ss:
          return Math.PI / 200 * A.number;
        case Ms:
          return A.number;
        case Os:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Ns = function(e) {
  return e.type === 15 && (e.unit === Ts || e.unit === Ss || e.unit === Ms || e.unit === Os);
}, Rs = function(e) {
  var A = e.filter(k).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [nA, nA];
    case "to top":
    case "bottom":
      return EA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [nA, VA];
    case "to right":
    case "left":
      return EA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [VA, VA];
    case "to bottom":
    case "top":
      return EA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [VA, nA];
    case "to left":
    case "right":
      return EA(270);
  }
  return 0;
}, EA = function(e) {
  return Math.PI * e / 180;
}, _A = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = po[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
        return kA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3), a = A.value.substring(3, 4);
        return kA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(a + a, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6);
        return kA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), a = A.value.substring(6, 8);
        return kA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(a, 16) / 255);
      }
    }
    if (A.type === 20) {
      var B = SA[A.value.toUpperCase()];
      if (typeof B < "u")
        return B;
    }
    return SA.TRANSPARENT;
  }
}, PA = function(e) {
  return (255 & e) === 0;
}, eA = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, kA = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, En = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, Hn = function(e, A) {
  var t = A.filter(ce);
  if (t.length === 3) {
    var r = t.map(En), n = r[0], s = r[1], a = r[2];
    return kA(n, s, a, 1);
  }
  if (t.length === 4) {
    var B = t.map(En), n = B[0], s = B[1], a = B[2], i = B[3];
    return kA(n, s, a, i);
  }
  return 0;
};
function Yt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var vn = function(e, A) {
  var t = A.filter(ce), r = t[0], n = t[1], s = t[2], a = t[3], B = (r.type === 17 ? EA(r.number) : bt.parse(e, r)) / (Math.PI * 2), i = z(n) ? n.number / 100 : 0, o = z(s) ? s.number / 100 : 0, c = typeof a < "u" && z(a) ? _(a, 1) : 1;
  if (i === 0)
    return kA(o * 255, o * 255, o * 255, 1);
  var l = o <= 0.5 ? o * (i + 1) : o + i - o * i, u = o * 2 - l, Q = Yt(u, l, B + 1 / 3), g = Yt(u, l, B), w = Yt(u, l, B - 1 / 3);
  return kA(Q * 255, g * 255, w * 255, c);
}, po = {
  hsl: vn,
  hsla: vn,
  rgb: Hn,
  rgba: Hn
}, ye = function(e, A) {
  return _A.parse(e, Ls.create(A).parseComponentValue());
}, SA = {
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
}, Eo = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (k(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Ho = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Kt = function(e, A) {
  var t = _A.parse(e, A[0]), r = A[1];
  return r && z(r) ? { color: t, stop: r } : { color: t, stop: null };
}, mn = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = nA), r.stop === null && (r.stop = VA);
  for (var n = [], s = 0, a = 0; a < e.length; a++) {
    var B = e[a].stop;
    if (B !== null) {
      var i = _(B, A);
      i > s ? n.push(i) : n.push(s), s = i;
    } else
      n.push(null);
  }
  for (var o = null, a = 0; a < n.length; a++) {
    var c = n[a];
    if (c === null)
      o === null && (o = a);
    else if (o !== null) {
      for (var l = a - o, u = n[o - 1], Q = (c - u) / (l + 1), g = 1; g <= l; g++)
        n[o + g - 1] = Q * g;
      o = null;
    }
  }
  return e.map(function(w, C) {
    var f = w.color;
    return { color: f, stop: Math.max(Math.min(1, n[C] / A), 0) };
  });
}, vo = function(e, A, t) {
  var r = A / 2, n = t / 2, s = _(e[0], A) - r, a = n - _(e[1], t);
  return (Math.atan2(a, s) + Math.PI * 2) % (Math.PI * 2);
}, mo = function(e, A, t) {
  var r = typeof e == "number" ? e : vo(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = A / 2, a = t / 2, B = n / 2, i = Math.sin(r - Math.PI / 2) * B, o = Math.cos(r - Math.PI / 2) * B;
  return [n, s - o, s + o, a - i, a + i];
}, mA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, In = function(e, A, t, r, n) {
  var s = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return s.reduce(function(a, B) {
    var i = B[0], o = B[1], c = mA(t - i, r - o);
    return (n ? c < a.optimumDistance : c > a.optimumDistance) ? {
      optimumCorner: B,
      optimumDistance: c
    } : a;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, Io = function(e, A, t, r, n) {
  var s = 0, a = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? s = a = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.min(Math.abs(A), Math.abs(A - r)), a = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        s = a = Math.min(mA(A, t), mA(A, t - n), mA(A - r, t), mA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), i = In(r, n, A, t, !0), o = i[0], c = i[1];
        s = mA(o - A, (c - t) / B), a = B * s;
      }
      break;
    case 1:
      e.shape === 0 ? s = a = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.max(Math.abs(A), Math.abs(A - r)), a = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        s = a = Math.max(mA(A, t), mA(A, t - n), mA(A - r, t), mA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), l = In(r, n, A, t, !1), o = l[0], c = l[1];
        s = mA(o - A, (c - t) / B), a = B * s;
      }
      break;
  }
  return Array.isArray(e.size) && (s = _(e.size[0], r), a = e.size.length === 2 ? _(e.size[1], n) : s), [s, a];
}, yo = function(e, A) {
  var t = EA(180), r = [];
  return KA(A).forEach(function(n, s) {
    if (s === 0) {
      var a = n[0];
      if (a.type === 20 && a.value === "to") {
        t = Rs(n);
        return;
      } else if (Ns(a)) {
        t = bt.parse(e, a);
        return;
      }
    }
    var B = Kt(e, n);
    r.push(B);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, tt = function(e, A) {
  var t = EA(180), r = [];
  return KA(A).forEach(function(n, s) {
    if (s === 0) {
      var a = n[0];
      if (a.type === 20 && ["top", "left", "right", "bottom"].indexOf(a.value) !== -1) {
        t = Rs(n);
        return;
      } else if (Ns(a)) {
        t = (bt.parse(e, a) + EA(270)) % EA(360);
        return;
      }
    }
    var B = Kt(e, n);
    r.push(B);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, bo = function(e, A) {
  var t = EA(180), r = [], n = 1, s = 0, a = 3, B = [];
  return KA(A).forEach(function(i, o) {
    var c = i[0];
    if (o === 0) {
      if (k(c) && c.value === "linear") {
        n = 1;
        return;
      } else if (k(c) && c.value === "radial") {
        n = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var l = _A.parse(e, c.values[0]);
        r.push({ stop: nA, color: l });
      } else if (c.name === "to") {
        var l = _A.parse(e, c.values[0]);
        r.push({ stop: VA, color: l });
      } else if (c.name === "color-stop") {
        var u = c.values.filter(ce);
        if (u.length === 2) {
          var l = _A.parse(e, u[1]), Q = u[0];
          ue(Q) && r.push({
            stop: { type: 16, number: Q.number * 100, flags: Q.flags },
            color: l
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + EA(180)) % EA(360),
    stops: r,
    type: n
  } : { size: a, shape: s, stops: r, position: B, type: n };
}, Gs = "closest-side", Vs = "farthest-side", ks = "closest-corner", _s = "farthest-corner", Ps = "circle", Xs = "ellipse", Js = "cover", Ws = "contain", Ko = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return KA(A).forEach(function(a, B) {
    var i = !0;
    if (B === 0) {
      var o = !1;
      i = a.reduce(function(l, u) {
        if (o)
          if (k(u))
            switch (u.value) {
              case "center":
                return s.push(Rr), l;
              case "top":
              case "left":
                return s.push(nA), l;
              case "right":
              case "bottom":
                return s.push(VA), l;
            }
          else
            (z(u) || XA(u)) && s.push(u);
        else if (k(u))
          switch (u.value) {
            case Ps:
              return t = 0, !1;
            case Xs:
              return t = 1, !1;
            case "at":
              return o = !0, !1;
            case Gs:
              return r = 0, !1;
            case Js:
            case Vs:
              return r = 1, !1;
            case Ws:
            case ks:
              return r = 2, !1;
            case _s:
              return r = 3, !1;
          }
        else if (XA(u) || z(u))
          return Array.isArray(r) || (r = []), r.push(u), !1;
        return l;
      }, i);
    }
    if (i) {
      var c = Kt(e, a);
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
}, rt = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return KA(A).forEach(function(a, B) {
    var i = !0;
    if (B === 0 ? i = a.reduce(function(c, l) {
      if (k(l))
        switch (l.value) {
          case "center":
            return s.push(Rr), !1;
          case "top":
          case "left":
            return s.push(nA), !1;
          case "right":
          case "bottom":
            return s.push(VA), !1;
        }
      else if (z(l) || XA(l))
        return s.push(l), !1;
      return c;
    }, i) : B === 1 && (i = a.reduce(function(c, l) {
      if (k(l))
        switch (l.value) {
          case Ps:
            return t = 0, !1;
          case Xs:
            return t = 1, !1;
          case Ws:
          case Gs:
            return r = 0, !1;
          case Vs:
            return r = 1, !1;
          case ks:
            return r = 2, !1;
          case Js:
          case _s:
            return r = 3, !1;
        }
      else if (XA(l) || z(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return c;
    }, i)), i) {
      var o = Kt(e, a);
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
}, Lo = function(e) {
  return e.type === 1;
}, xo = function(e) {
  return e.type === 2;
}, Gr = {
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
      var r = Ys[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function Do(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Ys[e.name]);
}
var Ys = {
  "linear-gradient": yo,
  "-moz-linear-gradient": tt,
  "-ms-linear-gradient": tt,
  "-o-linear-gradient": tt,
  "-webkit-linear-gradient": tt,
  "radial-gradient": Ko,
  "-moz-radial-gradient": rt,
  "-ms-radial-gradient": rt,
  "-o-radial-gradient": rt,
  "-webkit-radial-gradient": rt,
  "-webkit-gradient": bo
}, To = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return ce(r) && Do(r);
    }).map(function(r) {
      return Gr.parse(e, r);
    });
  }
}, So = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (k(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Mo = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return KA(A).map(function(t) {
      return t.filter(z);
    }).map(Ds);
  }
}, Oo = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return KA(A).map(function(t) {
      return t.filter(k).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(No);
  }
}, No = function(e) {
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
}, oe;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(oe || (oe = {}));
var Ro = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return KA(A).map(function(t) {
      return t.filter(Go);
    });
  }
}, Go = function(e) {
  return k(e) || z(e);
}, Lt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Vo = Lt("top"), ko = Lt("right"), _o = Lt("bottom"), Po = Lt("left"), xt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return Ds(t.filter(z));
    }
  };
}, Xo = xt("top-left"), Jo = xt("top-right"), Wo = xt("bottom-right"), Yo = xt("bottom-left"), Dt = function(e) {
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
}, Zo = Dt("top"), jo = Dt("right"), zo = Dt("bottom"), qo = Dt("left"), Tt = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return Ge(t) ? t.number : 0;
    }
  };
}, $o = Tt("top"), Ac = Tt("right"), ec = Tt("bottom"), tc = Tt("left"), rc = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, nc = {
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
}, sc = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(k).reduce(
      function(t, r) {
        return t | ac(r.value);
      },
      0
      /* NONE */
    );
  }
}, ac = function(e) {
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
}, Bc = {
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
}, ic = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, Ft;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Ft || (Ft = {}));
var oc = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return Ft.STRICT;
      case "normal":
      default:
        return Ft.NORMAL;
    }
  }
}, cc = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, yn = function(e, A) {
  return k(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : z(e) ? _(e, A) : A;
}, lc = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Gr.parse(e, A);
  }
}, uc = {
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
}, vr = {
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
}, St = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, gc = St("top"), Qc = St("right"), wc = St("bottom"), fc = St("left"), Cc = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(k).map(function(t) {
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
}, Uc = {
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
}, Mt = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, Fc = Mt("top"), hc = Mt("right"), dc = Mt("bottom"), pc = Mt("left"), Ec = {
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
}, Hc = {
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
}, vc = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Hr(A[0], "none") ? [] : KA(A).map(function(t) {
      for (var r = {
        color: SA.TRANSPARENT,
        offsetX: nA,
        offsetY: nA,
        blur: nA
      }, n = 0, s = 0; s < t.length; s++) {
        var a = t[s];
        XA(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : r.blur = a, n++) : r.color = _A.parse(e, a);
      }
      return r;
    });
  }
}, mc = {
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
}, Ic = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = Kc[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, yc = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, bc = function(e) {
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
}, Kc = {
  matrix: yc,
  matrix3d: bc
}, bn = {
  type: 16,
  number: 50,
  flags: Re
}, Lc = [bn, bn], xc = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(z);
    return t.length !== 2 ? Lc : [t[0], t[1]];
  }
}, Dc = {
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
}, be;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(be || (be = {}));
var Tc = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return be.BREAK_ALL;
      case "keep-all":
        return be.KEEP_ALL;
      case "normal":
      default:
        return be.NORMAL;
    }
  }
}, Sc = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (ue(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Zs = {
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
}, Mc = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return ue(A) ? A.number : 1;
  }
}, Oc = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Nc = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(k).map(function(t) {
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
}, Rc = {
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
}, Gc = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Vc = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (ue(A))
      return A.number;
    if (k(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, kc = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(k).map(function(t) {
      return t.value;
    });
  }
}, _c = {
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
}, $ = function(e, A) {
  return (e & A) !== 0;
}, Pc = {
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
}, Xc = {
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
    for (var r = [], n = A.filter(xs), s = 0; s < n.length; s++) {
      var a = n[s], B = n[s + 1];
      if (a.type === 20) {
        var i = B && ue(B) ? B.number : 1;
        r.push({ counter: a.value, increment: i });
      }
    }
    return r;
  }
}, Jc = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(xs), n = 0; n < r.length; n++) {
      var s = r[n], a = r[n + 1];
      if (k(s) && s.value !== "none") {
        var B = a && ue(a) ? a.number : 0;
        t.push({ counter: s.value, reset: B });
      }
    }
    return t;
  }
}, Wc = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(Ge).map(function(t) {
      return Zs.parse(e, t);
    });
  }
}, Yc = {
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
    var r = [], n = A.filter(Fo);
    if (n.length % 2 !== 0)
      return null;
    for (var s = 0; s < n.length; s += 2) {
      var a = n[s].value, B = n[s + 1].value;
      r.push({ open: a, close: B });
    }
    return r;
  }
}, Kn = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Zc = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Hr(A[0], "none") ? [] : KA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: nA,
        offsetY: nA,
        blur: nA,
        spread: nA,
        inset: !1
      }, n = 0, s = 0; s < t.length; s++) {
        var a = t[s];
        Hr(a, "inset") ? r.inset = !0 : XA(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : n === 2 ? r.blur = a : r.spread = a, n++) : r.color = _A.parse(e, a);
      }
      return r;
    });
  }
}, jc = {
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
    return A.filter(k).forEach(function(n) {
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
}, zc = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, qc = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return Ge(A) ? A.number : 0;
  }
}, $c = (
  /** @class */
  function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = E(A, Wc, t.animationDuration), this.backgroundClip = E(A, Eo, t.backgroundClip), this.backgroundColor = E(A, Ho, t.backgroundColor), this.backgroundImage = E(A, To, t.backgroundImage), this.backgroundOrigin = E(A, So, t.backgroundOrigin), this.backgroundPosition = E(A, Mo, t.backgroundPosition), this.backgroundRepeat = E(A, Oo, t.backgroundRepeat), this.backgroundSize = E(A, Ro, t.backgroundSize), this.borderTopColor = E(A, Vo, t.borderTopColor), this.borderRightColor = E(A, ko, t.borderRightColor), this.borderBottomColor = E(A, _o, t.borderBottomColor), this.borderLeftColor = E(A, Po, t.borderLeftColor), this.borderTopLeftRadius = E(A, Xo, t.borderTopLeftRadius), this.borderTopRightRadius = E(A, Jo, t.borderTopRightRadius), this.borderBottomRightRadius = E(A, Wo, t.borderBottomRightRadius), this.borderBottomLeftRadius = E(A, Yo, t.borderBottomLeftRadius), this.borderTopStyle = E(A, Zo, t.borderTopStyle), this.borderRightStyle = E(A, jo, t.borderRightStyle), this.borderBottomStyle = E(A, zo, t.borderBottomStyle), this.borderLeftStyle = E(A, qo, t.borderLeftStyle), this.borderTopWidth = E(A, $o, t.borderTopWidth), this.borderRightWidth = E(A, Ac, t.borderRightWidth), this.borderBottomWidth = E(A, ec, t.borderBottomWidth), this.borderLeftWidth = E(A, tc, t.borderLeftWidth), this.boxShadow = E(A, Zc, t.boxShadow), this.color = E(A, rc, t.color), this.direction = E(A, nc, t.direction), this.display = E(A, sc, t.display), this.float = E(A, Bc, t.cssFloat), this.fontFamily = E(A, Rc, t.fontFamily), this.fontSize = E(A, Gc, t.fontSize), this.fontStyle = E(A, _c, t.fontStyle), this.fontVariant = E(A, kc, t.fontVariant), this.fontWeight = E(A, Vc, t.fontWeight), this.letterSpacing = E(A, ic, t.letterSpacing), this.lineBreak = E(A, oc, t.lineBreak), this.lineHeight = E(A, cc, t.lineHeight), this.listStyleImage = E(A, lc, t.listStyleImage), this.listStylePosition = E(A, uc, t.listStylePosition), this.listStyleType = E(A, vr, t.listStyleType), this.marginTop = E(A, gc, t.marginTop), this.marginRight = E(A, Qc, t.marginRight), this.marginBottom = E(A, wc, t.marginBottom), this.marginLeft = E(A, fc, t.marginLeft), this.opacity = E(A, Mc, t.opacity);
      var s = E(A, Cc, t.overflow);
      this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = E(A, Uc, t.overflowWrap), this.paddingTop = E(A, Fc, t.paddingTop), this.paddingRight = E(A, hc, t.paddingRight), this.paddingBottom = E(A, dc, t.paddingBottom), this.paddingLeft = E(A, pc, t.paddingLeft), this.paintOrder = E(A, jc, t.paintOrder), this.position = E(A, Hc, t.position), this.textAlign = E(A, Ec, t.textAlign), this.textDecorationColor = E(A, Oc, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = E(A, Nc, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = E(A, vc, t.textShadow), this.textTransform = E(A, mc, t.textTransform), this.transform = E(A, Ic, t.transform), this.transformOrigin = E(A, xc, t.transformOrigin), this.visibility = E(A, Dc, t.visibility), this.webkitTextStrokeColor = E(A, zc, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = E(A, qc, t.webkitTextStrokeWidth), this.wordBreak = E(A, Tc, t.wordBreak), this.zIndex = E(A, Sc, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return PA(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return $(
        this.display,
        4
        /* INLINE */
      ) || $(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || $(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || $(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || $(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || $(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), Al = (
  /** @class */
  function() {
    function e(A, t) {
      this.content = E(A, Pc, t.content), this.quotes = E(A, Yc, t.quotes);
    }
    return e;
  }()
), Ln = (
  /** @class */
  function() {
    function e(A, t) {
      this.counterIncrement = E(A, Xc, t.counterIncrement), this.counterReset = E(A, Jc, t.counterReset);
    }
    return e;
  }()
), E = function(e, A, t) {
  var r = new Ks(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var s = new Ls(r.read());
  switch (A.type) {
    case 2:
      var a = s.parseComponentValue();
      return A.parse(e, k(a) ? a.value : A.initialValue);
    case 0:
      return A.parse(e, s.parseComponentValue());
    case 1:
      return A.parse(e, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return bt.parse(e, s.parseComponentValue());
        case "color":
          return _A.parse(e, s.parseComponentValue());
        case "image":
          return Gr.parse(e, s.parseComponentValue());
        case "length":
          var B = s.parseComponentValue();
          return XA(B) ? B : nA;
        case "length-percentage":
          var i = s.parseComponentValue();
          return z(i) ? i : nA;
        case "time":
          return Zs.parse(e, s.parseComponentValue());
      }
      break;
  }
}, el = "data-html2canvas-debug", tl = function(e) {
  var A = e.getAttribute(el);
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
}, mr = function(e, A) {
  var t = tl(e);
  return t === 1 || A === t;
}, LA = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, mr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new $c(A, window.getComputedStyle(t, null)), br(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = It(this.context, t), mr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), rl = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", xn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ve = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var nt = 0; nt < xn.length; nt++)
  ve[xn.charCodeAt(nt)] = nt;
var nl = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, s, a, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    s = ve[e.charCodeAt(r)], a = ve[e.charCodeAt(r + 1)], B = ve[e.charCodeAt(r + 2)], i = ve[e.charCodeAt(r + 3)], c[n++] = s << 2 | a >> 4, c[n++] = (a & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, sl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, al = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, jA = 5, Vr = 6 + 5, Zt = 2, Bl = Vr - jA, js = 65536 >> jA, il = 1 << jA, jt = il - 1, ol = 1024 >> jA, cl = js + ol, ll = cl, ul = 32, gl = ll + ul, Ql = 65536 >> Vr, wl = 1 << Bl, fl = wl - 1, Dn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Cl = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Ul = function(e, A) {
  var t = nl(e), r = Array.isArray(t) ? al(t) : new Uint32Array(t), n = Array.isArray(t) ? sl(t) : new Uint16Array(t), s = 24, a = Dn(n, s / 2, r[4] / 2), B = r[5] === 2 ? Dn(n, (s + r[4]) / 2) : Cl(r, Math.ceil((s + r[4]) / 4));
  return new Fl(r[0], r[1], r[2], r[3], a, B);
}, Fl = (
  /** @class */
  function() {
    function e(A, t, r, n, s, a) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = a;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> jA], t = (t << Zt) + (A & jt), this.data[t];
        if (A <= 65535)
          return t = this.index[js + (A - 55296 >> jA)], t = (t << Zt) + (A & jt), this.data[t];
        if (A < this.highStart)
          return t = gl - Ql + (A >> Vr), t = this.index[t], t += A >> jA & fl, t = this.index[t], t = (t << Zt) + (A & jt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Tn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var st = 0; st < Tn.length; st++)
  hl[Tn.charCodeAt(st)] = st;
var dl = 1, zt = 2, qt = 3, Sn = 4, Mn = 5, pl = 7, On = 8, $t = 9, Ar = 10, Nn = 11, Rn = 12, Gn = 13, Vn = 14, er = 15, El = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, Hl = function() {
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
}, vl = Ul(rl), dA = "×", tr = "÷", ml = function(e) {
  return vl.get(e);
}, Il = function(e, A, t) {
  var r = t - 2, n = A[r], s = A[t - 1], a = A[t];
  if (s === zt && a === qt)
    return dA;
  if (s === zt || s === qt || s === Sn || a === zt || a === qt || a === Sn)
    return tr;
  if (s === On && [On, $t, Nn, Rn].indexOf(a) !== -1 || (s === Nn || s === $t) && (a === $t || a === Ar) || (s === Rn || s === Ar) && a === Ar || a === Gn || a === Mn || a === pl || s === dl)
    return dA;
  if (s === Gn && a === Vn) {
    for (; n === Mn; )
      n = A[--r];
    if (n === Vn)
      return dA;
  }
  if (s === er && a === er) {
    for (var B = 0; n === er; )
      B++, n = A[--r];
    if (B % 2 === 0)
      return dA;
  }
  return tr;
}, yl = function(e) {
  var A = El(e), t = A.length, r = 0, n = 0, s = A.map(ml);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var a = dA; r < t && (a = Il(A, s, ++r)) === dA; )
        ;
      if (a !== dA || r === t) {
        var B = Hl.apply(null, A.slice(n, r));
        return n = r, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, bl = function(e) {
  for (var A = yl(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, Kl = function(e) {
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
}, Ll = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = yt(r.data).map(function(i) {
    return Y(i);
  }), s = 0, a = {}, B = n.every(function(i, o) {
    t.setStart(r, s), t.setEnd(r, s + i.length);
    var c = t.getBoundingClientRect();
    s += i.length;
    var l = c.x > a.x || c.y > a.y;
    return a = c, o === 0 ? !0 : l;
  });
  return e.body.removeChild(A), B;
}, xl = function() {
  return typeof new Image().crossOrigin < "u";
}, Dl = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Tl = function(e) {
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
}, kn = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Sl = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), s = A.toDataURL();
  n.src = s;
  var a = Ir(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), _n(a).then(function(B) {
    r.drawImage(B, 0, 0);
    var i = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var o = e.createElement("div");
    return o.style.backgroundImage = "url(" + s + ")", o.style.height = t + "px", kn(i) ? _n(Ir(t, t, 0, 0, o)) : Promise.reject(!1);
  }).then(function(B) {
    return r.drawImage(B, 0, 0), kn(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Ir = function(e, A, t, r, n) {
  var s = "http://www.w3.org/2000/svg", a = document.createElementNS(s, "svg"), B = document.createElementNS(s, "foreignObject");
  return a.setAttributeNS(null, "width", e.toString()), a.setAttributeNS(null, "height", A.toString()), B.setAttributeNS(null, "width", "100%"), B.setAttributeNS(null, "height", "100%"), B.setAttributeNS(null, "x", t.toString()), B.setAttributeNS(null, "y", r.toString()), B.setAttributeNS(null, "externalResourcesRequired", "true"), a.appendChild(B), B.appendChild(n), a;
}, _n = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, rA = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = Kl(document);
    return Object.defineProperty(rA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = rA.SUPPORT_RANGE_BOUNDS && Ll(document);
    return Object.defineProperty(rA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = Tl(document);
    return Object.defineProperty(rA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? Sl(document) : Promise.resolve(!1);
    return Object.defineProperty(rA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = xl();
    return Object.defineProperty(rA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = Dl();
    return Object.defineProperty(rA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(rA, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(rA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, Ke = (
  /** @class */
  function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), Ml = function(e, A, t, r) {
  var n = Rl(A, t), s = [], a = 0;
  return n.forEach(function(B) {
    if (t.textDecorationLine.length || B.trim().length > 0)
      if (rA.SUPPORT_RANGE_BOUNDS) {
        var i = Pn(r, a, B.length).getClientRects();
        if (i.length > 1) {
          var o = kr(B), c = 0;
          o.forEach(function(u) {
            s.push(new Ke(u, MA.fromDOMRectList(e, Pn(r, c + a, u.length).getClientRects()))), c += u.length;
          });
        } else
          s.push(new Ke(B, MA.fromDOMRectList(e, i)));
      } else {
        var l = r.splitText(B.length);
        s.push(new Ke(B, Ol(e, r))), r = l;
      }
    else
      rA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(B.length));
    a += B.length;
  }), s;
}, Ol = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var s = It(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), s;
    }
  }
  return MA.EMPTY;
}, Pn = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, kr = function(e) {
  if (rA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return bl(e);
}, Nl = function(e, A) {
  if (rA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Vl(e, A);
}, Rl = function(e, A) {
  return A.letterSpacing !== 0 ? kr(e) : Nl(e, A);
}, Gl = [32, 160, 4961, 65792, 65793, 4153, 4241], Vl = function(e, A) {
  for (var t = gi(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, s = function() {
    if (n.value) {
      var a = n.value.slice(), B = yt(a), i = "";
      B.forEach(function(o) {
        Gl.indexOf(o) === -1 ? i += Y(o) : (i.length && r.push(i), r.push(Y(o)), i = "");
      }), i.length && r.push(i);
    }
  }; !(n = t.next()).done; )
    s();
  return r;
}, kl = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.text = _l(t.data, r.textTransform), this.textBounds = Ml(A, this.text, r, t);
    }
    return e;
  }()
), _l = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Pl, Xl);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Pl = /(^|\s|:|-|\(|\))([a-z])/g, Xl = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, zs = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  }(LA)
), qs = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  }(LA)
), $s = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, s = new XMLSerializer(), a = It(t, r);
      return r.setAttribute("width", a.width + "px"), r.setAttribute("height", a.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  }(LA)
), Aa = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(LA)
), yr = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return A;
  }(LA)
), Jl = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Wl = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Yl = function(e) {
  return e.width > e.height ? new MA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new MA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, Zl = function(e) {
  var A = e.type === jl ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, ht = "checkbox", dt = "radio", jl = "password", Xn = 707406591, _r = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Zl(r), (n.type === ht || n.type === dt) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = Yl(n.bounds)), n.type) {
        case ht:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Jl;
          break;
        case dt:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Wl;
          break;
      }
      return n;
    }
    return A;
  }(LA)
), ea = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, s = r.options[r.selectedIndex || 0];
      return n.value = s && s.text || "", n;
    }
    return A;
  }(LA)
), ta = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(LA)
), ra = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = sa(t, r.contentWindow.document.documentElement);
          var s = r.contentWindow.document.documentElement ? ye(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : SA.TRANSPARENT, a = r.contentWindow.document.body ? ye(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : SA.TRANSPARENT;
          n.backgroundColor = PA(s) ? PA(a) ? n.styles.backgroundColor : a : s;
        }
      } catch {
      }
      return n;
    }
    return A;
  }(LA)
), zl = ["OL", "UL", "MENU"], ut = function(e, A, t, r) {
  for (var n = A.firstChild, s = void 0; n; n = s)
    if (s = n.nextSibling, aa(n) && n.data.trim().length > 0)
      t.textNodes.push(new kl(e, n, t.styles));
    else if (ie(n))
      if (ca(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(B) {
          return ut(e, B, t, r);
        });
      else {
        var a = na(e, n);
        a.styles.isVisible() && (ql(n, a, r) ? a.flags |= 4 : $l(a.styles) && (a.flags |= 2), zl.indexOf(n.tagName) !== -1 && (a.flags |= 8), t.elements.push(a), n.slot, n.shadowRoot ? ut(e, n.shadowRoot, a, r) : !pt(n) && !Ba(n) && !Et(n) && ut(e, n, a, r));
      }
}, na = function(e, A) {
  return Kr(A) ? new zs(e, A) : ia(A) ? new qs(e, A) : Ba(A) ? new $s(e, A) : Au(A) ? new Aa(e, A) : eu(A) ? new yr(e, A) : tu(A) ? new _r(e, A) : Et(A) ? new ea(e, A) : pt(A) ? new ta(e, A) : oa(A) ? new ra(e, A) : new LA(e, A);
}, sa = function(e, A) {
  var t = na(e, A);
  return t.flags |= 4, ut(e, A, t, t), t;
}, ql = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Pr(e) && t.styles.isTransparent();
}, $l = function(e) {
  return e.isPositioned() || e.isFloating();
}, aa = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, ie = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, br = function(e) {
  return ie(e) && typeof e.style < "u" && !gt(e);
}, gt = function(e) {
  return typeof e.className == "object";
}, Au = function(e) {
  return e.tagName === "LI";
}, eu = function(e) {
  return e.tagName === "OL";
}, tu = function(e) {
  return e.tagName === "INPUT";
}, ru = function(e) {
  return e.tagName === "HTML";
}, Ba = function(e) {
  return e.tagName === "svg";
}, Pr = function(e) {
  return e.tagName === "BODY";
}, ia = function(e) {
  return e.tagName === "CANVAS";
}, Jn = function(e) {
  return e.tagName === "VIDEO";
}, Kr = function(e) {
  return e.tagName === "IMG";
}, oa = function(e) {
  return e.tagName === "IFRAME";
}, Wn = function(e) {
  return e.tagName === "STYLE";
}, nu = function(e) {
  return e.tagName === "SCRIPT";
}, pt = function(e) {
  return e.tagName === "TEXTAREA";
}, Et = function(e) {
  return e.tagName === "SELECT";
}, ca = function(e) {
  return e.tagName === "SLOT";
}, Yn = function(e) {
  return e.tagName.indexOf("-") > 0;
}, su = (
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
), Zn = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, jn = {
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
}, au = {
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
}, Bu = {
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
}, te = function(e, A, t, r, n, s) {
  return e < A || e > t ? Ne(e, n, s.length > 0) : r.integers.reduce(function(a, B, i) {
    for (; e >= B; )
      e -= B, a += r.values[i];
    return a;
  }, "") + s;
}, la = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, W = function(e, A, t, r, n) {
  var s = t - A + 1;
  return (e < 0 ? "-" : "") + (la(Math.abs(e), s, r, function(a) {
    return Y(Math.floor(a % s) + A);
  }) + n);
}, JA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return la(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, se = 1, OA = 2, NA = 4, me = 8, TA = function(e, A, t, r, n, s) {
  if (e < -9999 || e > 9999)
    return Ne(e, 4, n.length > 0);
  var a = Math.abs(e), B = n;
  if (a === 0)
    return A[0] + B;
  for (var i = 0; a > 0 && i <= 4; i++) {
    var o = a % 10;
    o === 0 && $(s, se) && B !== "" ? B = A[o] + B : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && $(s, OA) || o === 1 && i === 1 && $(s, NA) && e > 100 || o === 1 && i > 1 && $(s, me) ? B = A[o] + (i > 0 ? t[i - 1] : "") + B : o === 1 && i > 0 && (B = t[i - 1] + B), a = Math.floor(a / 10);
  }
  return (e < 0 ? r : "") + B;
}, zn = "十百千萬", qn = "拾佰仟萬", $n = "マイナス", rr = "마이너스", Ne = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", a = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + a;
    case 1:
      return "◦" + a;
    case 2:
      return "◾" + a;
    case 5:
      var B = W(e, 48, 57, !0, r);
      return B.length < 4 ? "0" + B : B;
    case 4:
      return JA(e, "〇一二三四五六七八九", n);
    case 6:
      return te(e, 1, 3999, Zn, 3, r).toLowerCase();
    case 7:
      return te(e, 1, 3999, Zn, 3, r);
    case 8:
      return W(e, 945, 969, !1, r);
    case 9:
      return W(e, 97, 122, !1, r);
    case 10:
      return W(e, 65, 90, !1, r);
    case 11:
      return W(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return te(e, 1, 9999, jn, 3, r);
    case 35:
      return te(e, 1, 9999, jn, 3, r).toLowerCase();
    case 13:
      return W(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return W(e, 6112, 6121, !0, r);
    case 15:
      return JA(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return JA(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return TA(e, "零一二三四五六七八九", zn, "負", n, OA | NA | me);
    case 47:
      return TA(e, "零壹貳參肆伍陸柒捌玖", qn, "負", n, se | OA | NA | me);
    case 42:
      return TA(e, "零一二三四五六七八九", zn, "负", n, OA | NA | me);
    case 41:
      return TA(e, "零壹贰叁肆伍陆柒捌玖", qn, "负", n, se | OA | NA | me);
    case 26:
      return TA(e, "〇一二三四五六七八九", "十百千万", $n, n, 0);
    case 25:
      return TA(e, "零壱弐参四伍六七八九", "拾百千万", $n, n, se | OA | NA);
    case 31:
      return TA(e, "영일이삼사오육칠팔구", "십백천만", rr, s, se | OA | NA);
    case 33:
      return TA(e, "零一二三四五六七八九", "十百千萬", rr, s, 0);
    case 32:
      return TA(e, "零壹貳參四五六七八九", "拾百千", rr, s, se | OA | NA);
    case 18:
      return W(e, 2406, 2415, !0, r);
    case 20:
      return te(e, 1, 19999, Bu, 3, r);
    case 21:
      return W(e, 2790, 2799, !0, r);
    case 22:
      return W(e, 2662, 2671, !0, r);
    case 22:
      return te(e, 1, 10999, au, 3, r);
    case 23:
      return JA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return JA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return W(e, 3302, 3311, !0, r);
    case 28:
      return JA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return JA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return W(e, 3792, 3801, !0, r);
    case 37:
      return W(e, 6160, 6169, !0, r);
    case 38:
      return W(e, 4160, 4169, !0, r);
    case 39:
      return W(e, 2918, 2927, !0, r);
    case 40:
      return W(e, 1776, 1785, !0, r);
    case 43:
      return W(e, 3046, 3055, !0, r);
    case 44:
      return W(e, 3174, 3183, !0, r);
    case 45:
      return W(e, 3664, 3673, !0, r);
    case 46:
      return W(e, 3872, 3881, !0, r);
    case 3:
    default:
      return W(e, 48, 57, !0, r);
  }
}, ua = "data-html2canvas-ignore", As = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new su(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = iu(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var s = A.defaultView.pageXOffset, a = A.defaultView.pageYOffset, B = n.contentWindow, i = B.document, o = lu(n).then(function() {
        return oA(r, void 0, void 0, function() {
          var c, l;
          return aA(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(wu), B && (B.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (B.scrollY !== t.top || B.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(B.scrollX - t.left, B.scrollY - t.top, 0, 0))), c = this.options.onclone, l = this.clonedReferenceElement, typeof l > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
              case 1:
                u.sent(), u.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, cu(i)] : [3, 4];
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
      return i.open(), i.write(gu(document.doctype) + "<html></html>"), Qu(this.referenceElement.ownerDocument, s, a), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), o;
    }, e.prototype.createElementClone = function(A) {
      if (mr(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (ia(A))
        return this.createCanvasClone(A);
      if (Jn(A))
        return this.createVideoClone(A);
      if (Wn(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return Kr(t) && (Kr(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Yn(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return nr(A.style, t), t;
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
      (!ie(t) || !nu(t) && !t.hasAttribute(ua) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !ie(t) || !Wn(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, s = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; s; s = s.nextSibling)
        if (ie(s) && ca(s) && typeof s.assignedNodes == "function") {
          var a = s.assignedNodes();
          a.length && a.forEach(function(B) {
            return n.appendChildNode(t, B, r);
          });
        } else
          this.appendChildNode(t, s, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (aa(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && ie(A) && (br(A) || gt(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var s = r.getComputedStyle(A), a = r.getComputedStyle(A, ":before"), B = r.getComputedStyle(A, ":after");
        this.referenceElement === A && br(n) && (this.clonedReferenceElement = n), Pr(n) && Uu(n);
        var i = this.counters.parse(new Ln(this.context, s)), o = this.resolvePseudoContent(A, n, a, Le.BEFORE);
        Yn(A) && (t = !0), Jn(A) || this.cloneChildNodes(A, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(A, n, B, Le.AFTER);
        return c && n.appendChild(c), this.counters.pop(i), (s && (this.options.copyStyles || gt(A)) && !oa(A) || t) && nr(s, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (pt(A) || Et(A)) && (pt(n) || Et(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var s = this;
      if (r) {
        var a = r.content, B = t.ownerDocument;
        if (!(!B || !a || a === "none" || a === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Ln(this.context, r));
          var i = new Al(this.context, r), o = B.createElement("html2canvaspseudoelement");
          nr(r, o), i.content.forEach(function(l) {
            if (l.type === 0)
              o.appendChild(B.createTextNode(l.value));
            else if (l.type === 22) {
              var u = B.createElement("img");
              u.src = l.value, u.style.opacity = "1", o.appendChild(u);
            } else if (l.type === 18) {
              if (l.name === "attr") {
                var Q = l.values.filter(k);
                Q.length && o.appendChild(B.createTextNode(A.getAttribute(Q[0].value) || ""));
              } else if (l.name === "counter") {
                var g = l.values.filter(ce), w = g[0], C = g[1];
                if (w && k(w)) {
                  var f = s.counters.getCounterValue(w.value), h = C && k(C) ? vr.parse(s.context, C.value) : 3;
                  o.appendChild(B.createTextNode(Ne(f, h, !1)));
                }
              } else if (l.name === "counters") {
                var y = l.values.filter(ce), w = y[0], v = y[1], C = y[2];
                if (w && k(w)) {
                  var m = s.counters.getCounterValues(w.value), F = C && k(C) ? vr.parse(s.context, C.value) : 3, x = v && v.type === 0 ? v.value : "", L = m.map(function(V) {
                    return Ne(V, F, !1);
                  }).join(x);
                  o.appendChild(B.createTextNode(L));
                }
              }
            } else if (l.type === 20)
              switch (l.value) {
                case "open-quote":
                  o.appendChild(B.createTextNode(Kn(i.quotes, s.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(B.createTextNode(Kn(i.quotes, --s.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(B.createTextNode(l.value));
              }
          }), o.className = Lr + " " + xr;
          var c = n === Le.BEFORE ? " " + Lr : " " + xr;
          return gt(t) ? t.className.baseValue += c : t.className += c, o;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  }()
), Le;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Le || (Le = {}));
var iu = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(ua, "true"), e.body.appendChild(t), t;
}, ou = function(e) {
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
}, cu = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(ou));
}, lu = function(e) {
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
}, uu = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], nr = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    uu.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, gu = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, Qu = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, wu = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, fu = ":before", Cu = ":after", Lr = "___html2canvas___pseudoelement_before", xr = "___html2canvas___pseudoelement_after", es = `{
    content: "" !important;
    display: none !important;
}`, Uu = function(e) {
  Fu(e, "." + Lr + fu + es + `
         .` + xr + Cu + es);
}, Fu = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, ga = (
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
), hu = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (ar(A) || Hu(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return oA(this, void 0, void 0, function() {
        var t, r, n, s, a = this;
        return aA(this, function(B) {
          switch (B.label) {
            case 0:
              return t = ga.isSameOrigin(A), r = !sr(A) && this._options.useCORS === !0 && rA.SUPPORT_CORS_IMAGES && !t, n = !sr(A) && !t && !ar(A) && typeof this._options.proxy == "string" && rA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !sr(A) && !ar(A) && !n && !r ? [
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
                }, c.onerror = o, (vu(s) || r) && (c.crossOrigin = "anonymous"), c.src = s, c.complete === !0 && setTimeout(function() {
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
        var B = rA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
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
), du = /^data:image\/svg\+xml/i, pu = /^data:image\/.*;base64,/i, Eu = /^data:image\/.*/i, Hu = function(e) {
  return rA.SUPPORT_SVG_DRAWING || !mu(e);
}, sr = function(e) {
  return Eu.test(e);
}, vu = function(e) {
  return pu.test(e);
}, ar = function(e) {
  return e.substr(0, 4) === "blob";
}, mu = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || du.test(e);
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
), re = function(e, A, t) {
  return new p(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, at = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = re(this.start, this.startControl, A), n = re(this.startControl, this.endControl, A), s = re(this.endControl, this.end, A), a = re(r, n, A), B = re(n, s, A), i = re(a, B, A);
      return t ? new e(this.start, r, a, i) : new e(i, B, s, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), pA = function(e) {
  return e.type === 1;
}, Iu = (
  /** @class */
  function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = He(t.borderTopLeftRadius, r.width, r.height), s = n[0], a = n[1], B = He(t.borderTopRightRadius, r.width, r.height), i = B[0], o = B[1], c = He(t.borderBottomRightRadius, r.width, r.height), l = c[0], u = c[1], Q = He(t.borderBottomLeftRadius, r.width, r.height), g = Q[0], w = Q[1], C = [];
      C.push((s + i) / r.width), C.push((g + l) / r.width), C.push((a + w) / r.height), C.push((o + u) / r.height);
      var f = Math.max.apply(Math, C);
      f > 1 && (s /= f, a /= f, i /= f, o /= f, l /= f, u /= f, g /= f, w /= f);
      var h = r.width - i, y = r.height - u, v = r.width - l, m = r.height - w, F = t.borderTopWidth, x = t.borderRightWidth, L = t.borderBottomWidth, b = t.borderLeftWidth, D = _(t.paddingTop, A.bounds.width), V = _(t.paddingRight, A.bounds.width), X = _(t.paddingBottom, A.bounds.width), M = _(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = s > 0 || a > 0 ? P(r.left + b / 3, r.top + F / 3, s - b / 3, a - F / 3, G.TOP_LEFT) : new p(r.left + b / 3, r.top + F / 3), this.topRightBorderDoubleOuterBox = s > 0 || a > 0 ? P(r.left + h, r.top + F / 3, i - x / 3, o - F / 3, G.TOP_RIGHT) : new p(r.left + r.width - x / 3, r.top + F / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || u > 0 ? P(r.left + v, r.top + y, l - x / 3, u - L / 3, G.BOTTOM_RIGHT) : new p(r.left + r.width - x / 3, r.top + r.height - L / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || w > 0 ? P(r.left + b / 3, r.top + m, g - b / 3, w - L / 3, G.BOTTOM_LEFT) : new p(r.left + b / 3, r.top + r.height - L / 3), this.topLeftBorderDoubleInnerBox = s > 0 || a > 0 ? P(r.left + b * 2 / 3, r.top + F * 2 / 3, s - b * 2 / 3, a - F * 2 / 3, G.TOP_LEFT) : new p(r.left + b * 2 / 3, r.top + F * 2 / 3), this.topRightBorderDoubleInnerBox = s > 0 || a > 0 ? P(r.left + h, r.top + F * 2 / 3, i - x * 2 / 3, o - F * 2 / 3, G.TOP_RIGHT) : new p(r.left + r.width - x * 2 / 3, r.top + F * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || u > 0 ? P(r.left + v, r.top + y, l - x * 2 / 3, u - L * 2 / 3, G.BOTTOM_RIGHT) : new p(r.left + r.width - x * 2 / 3, r.top + r.height - L * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || w > 0 ? P(r.left + b * 2 / 3, r.top + m, g - b * 2 / 3, w - L * 2 / 3, G.BOTTOM_LEFT) : new p(r.left + b * 2 / 3, r.top + r.height - L * 2 / 3), this.topLeftBorderStroke = s > 0 || a > 0 ? P(r.left + b / 2, r.top + F / 2, s - b / 2, a - F / 2, G.TOP_LEFT) : new p(r.left + b / 2, r.top + F / 2), this.topRightBorderStroke = s > 0 || a > 0 ? P(r.left + h, r.top + F / 2, i - x / 2, o - F / 2, G.TOP_RIGHT) : new p(r.left + r.width - x / 2, r.top + F / 2), this.bottomRightBorderStroke = l > 0 || u > 0 ? P(r.left + v, r.top + y, l - x / 2, u - L / 2, G.BOTTOM_RIGHT) : new p(r.left + r.width - x / 2, r.top + r.height - L / 2), this.bottomLeftBorderStroke = g > 0 || w > 0 ? P(r.left + b / 2, r.top + m, g - b / 2, w - L / 2, G.BOTTOM_LEFT) : new p(r.left + b / 2, r.top + r.height - L / 2), this.topLeftBorderBox = s > 0 || a > 0 ? P(r.left, r.top, s, a, G.TOP_LEFT) : new p(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? P(r.left + h, r.top, i, o, G.TOP_RIGHT) : new p(r.left + r.width, r.top), this.bottomRightBorderBox = l > 0 || u > 0 ? P(r.left + v, r.top + y, l, u, G.BOTTOM_RIGHT) : new p(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || w > 0 ? P(r.left, r.top + m, g, w, G.BOTTOM_LEFT) : new p(r.left, r.top + r.height), this.topLeftPaddingBox = s > 0 || a > 0 ? P(r.left + b, r.top + F, Math.max(0, s - b), Math.max(0, a - F), G.TOP_LEFT) : new p(r.left + b, r.top + F), this.topRightPaddingBox = i > 0 || o > 0 ? P(r.left + Math.min(h, r.width - x), r.top + F, h > r.width + x ? 0 : Math.max(0, i - x), Math.max(0, o - F), G.TOP_RIGHT) : new p(r.left + r.width - x, r.top + F), this.bottomRightPaddingBox = l > 0 || u > 0 ? P(r.left + Math.min(v, r.width - b), r.top + Math.min(y, r.height - L), Math.max(0, l - x), Math.max(0, u - L), G.BOTTOM_RIGHT) : new p(r.left + r.width - x, r.top + r.height - L), this.bottomLeftPaddingBox = g > 0 || w > 0 ? P(r.left + b, r.top + Math.min(m, r.height - L), Math.max(0, g - b), Math.max(0, w - L), G.BOTTOM_LEFT) : new p(r.left + b, r.top + r.height - L), this.topLeftContentBox = s > 0 || a > 0 ? P(r.left + b + M, r.top + F + D, Math.max(0, s - (b + M)), Math.max(0, a - (F + D)), G.TOP_LEFT) : new p(r.left + b + M, r.top + F + D), this.topRightContentBox = i > 0 || o > 0 ? P(r.left + Math.min(h, r.width + b + M), r.top + F + D, h > r.width + b + M ? 0 : i - b + M, o - (F + D), G.TOP_RIGHT) : new p(r.left + r.width - (x + V), r.top + F + D), this.bottomRightContentBox = l > 0 || u > 0 ? P(r.left + Math.min(v, r.width - (b + M)), r.top + Math.min(y, r.height + F + D), Math.max(0, l - (x + V)), u - (L + X), G.BOTTOM_RIGHT) : new p(r.left + r.width - (x + V), r.top + r.height - (L + X)), this.bottomLeftContentBox = g > 0 || w > 0 ? P(r.left + b + M, r.top + m, Math.max(0, g - (b + M)), w - (L + X), G.BOTTOM_LEFT) : new p(r.left + b + M, r.top + r.height - (L + X));
    }
    return e;
  }()
), G;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(G || (G = {}));
var P = function(e, A, t, r, n) {
  var s = 4 * ((Math.sqrt(2) - 1) / 3), a = t * s, B = r * s, i = e + t, o = A + r;
  switch (n) {
    case G.TOP_LEFT:
      return new at(new p(e, o), new p(e, o - B), new p(i - a, A), new p(i, A));
    case G.TOP_RIGHT:
      return new at(new p(e, A), new p(e + a, A), new p(i, o - B), new p(i, o));
    case G.BOTTOM_RIGHT:
      return new at(new p(i, A), new p(i, A + B), new p(e + a, o), new p(e, o));
    case G.BOTTOM_LEFT:
    default:
      return new at(new p(i, o), new p(i - a, o), new p(e, A + B), new p(e, A));
  }
}, Ht = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, yu = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, vt = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, bu = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  }()
), Bt = (
  /** @class */
  function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  }()
), Ku = (
  /** @class */
  function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), Lu = function(e) {
  return e.type === 0;
}, Qa = function(e) {
  return e.type === 1;
}, xu = function(e) {
  return e.type === 2;
}, ts = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, Du = function(e, A, t, r, n) {
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
}, wa = (
  /** @class */
  function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), fa = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new Iu(this.container), this.container.styles.opacity < 1 && this.effects.push(new Ku(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
        this.effects.push(new bu(r, n, s));
      }
      if (this.container.styles.overflowX !== 0) {
        var a = Ht(this.curves), B = vt(this.curves);
        ts(a, B) ? this.effects.push(new Bt(
          a,
          6
          /* CONTENT */
        )) : (this.effects.push(new Bt(
          a,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Bt(
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
          return !Qa(i);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, s), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var a = Ht(r.curves), B = vt(r.curves);
            ts(a, B) || n.unshift(new Bt(
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
        return $(i.target, A);
      });
    }, e;
  }()
), Dr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var s = $(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), a = $(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), B = new fa(n, e);
    $(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(B);
    var i = $(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (s || a) {
      var o = s || n.styles.isPositioned() ? t : A, c = new wa(B);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var l = n.styles.zIndex.order;
        if (l < 0) {
          var u = 0;
          o.negativeZIndex.some(function(g, w) {
            return l > g.element.container.styles.zIndex.order ? (u = w, !1) : u > 0;
          }), o.negativeZIndex.splice(u, 0, c);
        } else if (l > 0) {
          var Q = 0;
          o.positiveZIndex.some(function(g, w) {
            return l >= g.element.container.styles.zIndex.order ? (Q = w + 1, !1) : Q > 0;
          }), o.positiveZIndex.splice(Q, 0, c);
        } else
          o.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        n.styles.isFloating() ? o.nonPositionedFloats.push(c) : o.nonPositionedInlineLevel.push(c);
      Dr(B, c, s ? c : t, i);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(B) : A.nonInlineLevel.push(B), Dr(B, A, t, i);
    $(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && Ca(n, i);
  });
}, Ca = function(e, A) {
  for (var t = e instanceof yr ? e.start : 1, r = e instanceof yr ? e.reversed : !1, n = 0; n < A.length; n++) {
    var s = A[n];
    s.container instanceof Aa && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = Ne(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Tu = function(e) {
  var A = new fa(e, null), t = new wa(A), r = [];
  return Dr(A, t, t, r), Ca(A.container, r), t;
}, rs = function(e, A) {
  switch (A) {
    case 0:
      return HA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return HA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return HA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return HA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Su = function(e, A) {
  switch (A) {
    case 0:
      return HA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return HA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return HA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return HA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, Mu = function(e, A) {
  switch (A) {
    case 0:
      return HA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return HA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return HA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return HA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, Ou = function(e, A) {
  switch (A) {
    case 0:
      return it(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return it(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return it(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return it(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, it = function(e, A) {
  var t = [];
  return pA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), pA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, HA = function(e, A, t, r) {
  var n = [];
  return pA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), pA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), pA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), pA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, Ua = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, mt = function(e) {
  var A = e.styles, t = e.bounds, r = _(A.paddingLeft, t.width), n = _(A.paddingRight, t.width), s = _(A.paddingTop, t.width), a = _(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, s + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + s + a));
}, Nu = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? mt(A) : Ua(A);
}, Ru = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? mt(A) : Ua(A);
}, Br = function(e, A, t) {
  var r = Nu(ae(e.styles.backgroundOrigin, A), e), n = Ru(ae(e.styles.backgroundClip, A), e), s = Gu(ae(e.styles.backgroundSize, A), t, r), a = s[0], B = s[1], i = He(ae(e.styles.backgroundPosition, A), r.width - a, r.height - B), o = Vu(ae(e.styles.backgroundRepeat, A), i, s, r, n), c = Math.round(r.left + i[0]), l = Math.round(r.top + i[1]);
  return [o, c, l, a, B];
}, ne = function(e) {
  return k(e) && e.value === oe.AUTO;
}, ot = function(e) {
  return typeof e == "number";
}, Gu = function(e, A, t) {
  var r = A[0], n = A[1], s = A[2], a = e[0], B = e[1];
  if (!a)
    return [0, 0];
  if (z(a) && B && z(B))
    return [_(a, t.width), _(B, t.height)];
  var i = ot(s);
  if (k(a) && (a.value === oe.CONTAIN || a.value === oe.COVER)) {
    if (ot(s)) {
      var o = t.width / t.height;
      return o < s != (a.value === oe.COVER) ? [t.width, t.width / s] : [t.height * s, t.height];
    }
    return [t.width, t.height];
  }
  var c = ot(r), l = ot(n), u = c || l;
  if (ne(a) && (!B || ne(B))) {
    if (c && l)
      return [r, n];
    if (!i && !u)
      return [t.width, t.height];
    if (u && i) {
      var Q = c ? r : n * s, g = l ? n : r / s;
      return [Q, g];
    }
    var w = c ? r : t.width, C = l ? n : t.height;
    return [w, C];
  }
  if (i) {
    var f = 0, h = 0;
    return z(a) ? f = _(a, t.width) : z(B) && (h = _(B, t.height)), ne(a) ? f = h * s : (!B || ne(B)) && (h = f / s), [f, h];
  }
  var y = null, v = null;
  if (z(a) ? y = _(a, t.width) : B && z(B) && (v = _(B, t.height)), y !== null && (!B || ne(B)) && (v = c && l ? y / r * n : t.height), v !== null && ne(a) && (y = c && l ? v / n * r : t.width), y !== null && v !== null)
    return [y, v];
  throw new Error("Unable to calculate background-size for element");
}, ae = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Vu = function(e, A, t, r, n) {
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
}, ku = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ns = "Hidden Text", _u = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), s = this._document.createElement("span"), a = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", a.appendChild(r), n.src = ku, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(ns)), r.appendChild(s), r.appendChild(n);
      var B = n.offsetTop - s.offsetTop + 2;
      r.removeChild(s), r.appendChild(this._document.createTextNode(ns)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var i = n.offsetTop - r.offsetTop + 2;
      return a.removeChild(r), { baseline: B, middle: i };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), Fa = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), Pu = 1e4, Xu = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new _u(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), xu(t) && (this.ctx.globalAlpha = t.opacity), Lu(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Qa(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return oA(this, void 0, void 0, function() {
        var r;
        return aA(this, function(n) {
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
      return oA(this, void 0, void 0, function() {
        return aA(this, function(r) {
          switch (r.label) {
            case 0:
              if ($(
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
        var a = kr(t.text);
        a.reduce(function(B, i) {
          return s.ctx.fillText(i, B, t.bounds.top + n), B + s.ctx.measureText(i).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(a) {
        return a === "normal" || a === "small-caps";
      }).join(""), n = ju(t.fontFamily).join(", "), s = Ge(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, s, n].join(" "),
        n,
        s
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return oA(this, void 0, void 0, function() {
        var n, s, a, B, i, o, c, l, u = this;
        return aA(this, function(Q) {
          return n = this.createFontStyle(r), s = n[0], a = n[1], B = n[2], this.ctx.font = s, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(a, B), o = i.baseline, c = i.middle, l = r.paintOrder, t.textBounds.forEach(function(g) {
            l.forEach(function(w) {
              switch (w) {
                case 0:
                  u.ctx.fillStyle = eA(r.color), u.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  var C = r.textShadow;
                  C.length && g.text.trim().length && (C.slice(0).reverse().forEach(function(f) {
                    u.ctx.shadowColor = eA(f.color), u.ctx.shadowOffsetX = f.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = f.offsetY.number * u.options.scale, u.ctx.shadowBlur = f.blur.number, u.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = eA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(f) {
                    switch (f) {
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
                  r.webkitTextStrokeWidth && g.text.trim().length && (u.ctx.strokeStyle = eA(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + o)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
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
        var s = mt(t), a = vt(r);
        this.path(a), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n, s, a, B, i, h, h, o, c, l, u, v, Q, g, m, w, C, f, h, y, v, m;
        return aA(this, function(F) {
          switch (F.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, s = r.styles, a = 0, B = r.textNodes, F.label = 1;
            case 1:
              return a < B.length ? (i = B[a], [4, this.renderTextNode(i, s)]) : [3, 4];
            case 2:
              F.sent(), F.label = 3;
            case 3:
              return a++, [3, 1];
            case 4:
              if (!(r instanceof zs))
                return [3, 8];
              F.label = 5;
            case 5:
              return F.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return h = F.sent(), this.renderReplacedElement(r, n, h), [3, 8];
            case 7:
              return F.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof qs && this.renderReplacedElement(r, n, r.canvas), !(r instanceof $s))
                return [3, 12];
              F.label = 9;
            case 9:
              return F.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return h = F.sent(), this.renderReplacedElement(r, n, h), [3, 12];
            case 11:
              return F.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof ra && r.tree ? (o = new A(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, o.render(r.tree)]) : [3, 14];
            case 13:
              c = F.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), F.label = 14;
            case 14:
              if (r instanceof _r && (l = Math.min(r.bounds.width, r.bounds.height), r.type === ht ? r.checked && (this.ctx.save(), this.path([
                new p(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79),
                new p(r.bounds.left + l * 0.16, r.bounds.top + l * 0.5549),
                new p(r.bounds.left + l * 0.27347, r.bounds.top + l * 0.44071),
                new p(r.bounds.left + l * 0.39694, r.bounds.top + l * 0.5649),
                new p(r.bounds.left + l * 0.72983, r.bounds.top + l * 0.23),
                new p(r.bounds.left + l * 0.84, r.bounds.top + l * 0.34085),
                new p(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79)
              ]), this.ctx.fillStyle = eA(Xn), this.ctx.fill(), this.ctx.restore()) : r.type === dt && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + l / 2, r.bounds.top + l / 2, l / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = eA(Xn), this.ctx.fill(), this.ctx.restore())), Ju(r) && r.value.length) {
                switch (u = this.createFontStyle(s), v = u[0], Q = u[1], g = this.fontMetrics.getMetrics(v, Q).baseline, this.ctx.font = v, this.ctx.fillStyle = eA(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Yu(r.styles.textAlign), m = mt(r), w = 0, r.styles.textAlign) {
                  case 1:
                    w += m.width / 2;
                    break;
                  case 2:
                    w += m.width;
                    break;
                }
                C = m.add(w, 0, 0, -m.height / 2 + 1), this.ctx.save(), this.path([
                  new p(m.left, m.top),
                  new p(m.left + m.width, m.top),
                  new p(m.left + m.width, m.top + m.height),
                  new p(m.left, m.top + m.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Ke(r.value, C), s.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!$(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (f = r.styles.listStyleImage, f.type !== 0)
                return [3, 18];
              h = void 0, y = f.url, F.label = 15;
            case 15:
              return F.trys.push([15, 17, , 18]), [4, this.context.cache.match(y)];
            case 16:
              return h = F.sent(), this.ctx.drawImage(h, r.bounds.left - (h.width + 10), r.bounds.top), [3, 18];
            case 17:
              return F.sent(), this.context.logger.error("Error loading list-style-image " + y), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (v = this.createFontStyle(s)[0], this.ctx.font = v, this.ctx.fillStyle = eA(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", m = new MA(r.bounds.left, r.bounds.top + _(r.styles.paddingTop, r.bounds.width), r.bounds.width, yn(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Ke(t.listValue, m), s.letterSpacing, yn(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), F.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n, f, s, a, f, B, i, f, o, c, f, l, u, f, Q, g, f, w, C, f;
        return aA(this, function(h) {
          switch (h.label) {
            case 0:
              if ($(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              h.sent(), r = 0, n = t.negativeZIndex, h.label = 2;
            case 2:
              return r < n.length ? (f = n[r], [4, this.renderStack(f)]) : [3, 5];
            case 3:
              h.sent(), h.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              h.sent(), s = 0, a = t.nonInlineLevel, h.label = 7;
            case 7:
              return s < a.length ? (f = a[s], [4, this.renderNode(f)]) : [3, 10];
            case 8:
              h.sent(), h.label = 9;
            case 9:
              return s++, [3, 7];
            case 10:
              B = 0, i = t.nonPositionedFloats, h.label = 11;
            case 11:
              return B < i.length ? (f = i[B], [4, this.renderStack(f)]) : [3, 14];
            case 12:
              h.sent(), h.label = 13;
            case 13:
              return B++, [3, 11];
            case 14:
              o = 0, c = t.nonPositionedInlineLevel, h.label = 15;
            case 15:
              return o < c.length ? (f = c[o], [4, this.renderStack(f)]) : [3, 18];
            case 16:
              h.sent(), h.label = 17;
            case 17:
              return o++, [3, 15];
            case 18:
              l = 0, u = t.inlineLevel, h.label = 19;
            case 19:
              return l < u.length ? (f = u[l], [4, this.renderNode(f)]) : [3, 22];
            case 20:
              h.sent(), h.label = 21;
            case 21:
              return l++, [3, 19];
            case 22:
              Q = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, h.label = 23;
            case 23:
              return Q < g.length ? (f = g[Q], [4, this.renderStack(f)]) : [3, 26];
            case 24:
              h.sent(), h.label = 25;
            case 25:
              return Q++, [3, 23];
            case 26:
              w = 0, C = t.positiveZIndex, h.label = 27;
            case 27:
              return w < C.length ? (f = C[w], [4, this.renderStack(f)]) : [3, 30];
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
        var a = pA(n) ? n.start : n;
        s === 0 ? r.ctx.moveTo(a.x, a.y) : r.ctx.lineTo(a.x, a.y), pA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
      return oA(this, void 0, void 0, function() {
        var r, n, s, a, B, i;
        return aA(this, function(o) {
          switch (o.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var l, u, Q, D, AA, Z, M, J, L, g, D, AA, Z, M, J, w, C, f, h, y, v, m, F, x, L, b, D, V, X, M, J, fA, AA, Z, CA, iA, QA, UA, FA, lA, hA, uA;
                return aA(this, function(vA) {
                  switch (vA.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      l = void 0, u = c.url, vA.label = 1;
                    case 1:
                      return vA.trys.push([1, 3, , 4]), [4, s.context.cache.match(u)];
                    case 2:
                      return l = vA.sent(), [3, 4];
                    case 3:
                      return vA.sent(), s.context.logger.error("Error loading background-image " + u), [3, 4];
                    case 4:
                      return l && (Q = Br(t, r, [
                        l.width,
                        l.height,
                        l.width / l.height
                      ]), D = Q[0], AA = Q[1], Z = Q[2], M = Q[3], J = Q[4], L = s.ctx.createPattern(s.resizeImage(l, M, J), "repeat"), s.renderRepeat(D, L, AA, Z)), [3, 6];
                    case 5:
                      Lo(c) ? (g = Br(t, r, [null, null, null]), D = g[0], AA = g[1], Z = g[2], M = g[3], J = g[4], w = mo(c.angle, M, J), C = w[0], f = w[1], h = w[2], y = w[3], v = w[4], m = document.createElement("canvas"), m.width = M, m.height = J, F = m.getContext("2d"), x = F.createLinearGradient(f, y, h, v), mn(c.stops, C).forEach(function(T) {
                        return x.addColorStop(T.stop, eA(T.color));
                      }), F.fillStyle = x, F.fillRect(0, 0, M, J), M > 0 && J > 0 && (L = s.ctx.createPattern(m, "repeat"), s.renderRepeat(D, L, AA, Z))) : xo(c) && (b = Br(t, r, [
                        null,
                        null,
                        null
                      ]), D = b[0], V = b[1], X = b[2], M = b[3], J = b[4], fA = c.position.length === 0 ? [Rr] : c.position, AA = _(fA[0], M), Z = _(fA[fA.length - 1], J), CA = Io(c, AA, Z, M, J), iA = CA[0], QA = CA[1], iA > 0 && QA > 0 && (UA = s.ctx.createRadialGradient(V + AA, X + Z, 0, V + AA, X + Z, iA), mn(c.stops, iA * 2).forEach(function(T) {
                        return UA.addColorStop(T.stop, eA(T.color));
                      }), s.path(D), s.ctx.fillStyle = UA, iA !== QA ? (FA = t.bounds.left + 0.5 * t.bounds.width, lA = t.bounds.top + 0.5 * t.bounds.height, hA = QA / iA, uA = 1 / hA, s.ctx.save(), s.ctx.translate(FA, lA), s.ctx.transform(1, 0, 0, hA, 0, 0), s.ctx.translate(-FA, -lA), s.ctx.fillRect(V, uA * (X - lA) + lA, M, J * uA), s.ctx.restore()) : s.ctx.fill())), vA.label = 6;
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
      return oA(this, void 0, void 0, function() {
        return aA(this, function(s) {
          return this.path(rs(n, r)), this.ctx.fillStyle = eA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, n, s) {
      return oA(this, void 0, void 0, function() {
        var a, B;
        return aA(this, function(i) {
          switch (i.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, s)] : [3, 2];
            case 1:
              return i.sent(), [
                2
                /*return*/
              ];
            case 2:
              return a = Su(s, n), this.path(a), this.ctx.fillStyle = eA(t), this.ctx.fill(), B = Mu(s, n), this.path(B), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n, s, a, B, i, o, c, l = this;
        return aA(this, function(u) {
          switch (u.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !PA(r.backgroundColor) || r.backgroundImage.length, s = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], a = Wu(ae(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(a), this.ctx.clip(), PA(r.backgroundColor) || (this.ctx.fillStyle = eA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(Q) {
                l.ctx.save();
                var g = Ht(t.curves), w = Q.inset ? 0 : Pu, C = Du(g, -w + (Q.inset ? 1 : -1) * Q.spread.number, (Q.inset ? 1 : -1) * Q.spread.number, Q.spread.number * (Q.inset ? -2 : 2), Q.spread.number * (Q.inset ? -2 : 2));
                Q.inset ? (l.path(g), l.ctx.clip(), l.mask(C)) : (l.mask(g), l.ctx.clip(), l.path(C)), l.ctx.shadowOffsetX = Q.offsetX.number + w, l.ctx.shadowOffsetY = Q.offsetY.number, l.ctx.shadowColor = eA(Q.color), l.ctx.shadowBlur = Q.blur.number, l.ctx.fillStyle = Q.inset ? eA(Q.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
              }), u.label = 2;
            case 2:
              B = 0, i = 0, o = s, u.label = 3;
            case 3:
              return i < o.length ? (c = o[i], c.style !== 0 && !PA(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
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
      return oA(this, void 0, void 0, function() {
        var B, i, o, c, l, u, Q, g, w, C, f, h, y, v, m, F, m, F;
        return aA(this, function(x) {
          return this.ctx.save(), B = Ou(s, n), i = rs(s, n), a === 2 && (this.path(i), this.ctx.clip()), pA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), pA(i[1]) ? (l = i[1].end.x, u = i[1].end.y) : (l = i[1].x, u = i[1].y), n === 0 || n === 2 ? Q = Math.abs(o - l) : Q = Math.abs(c - u), this.ctx.beginPath(), a === 3 ? this.formatPath(B) : this.formatPath(i.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, a === 3 && (g = r, w = r), C = !0, Q <= g * 2 ? C = !1 : Q <= g * 2 + w ? (f = Q / (2 * g + w), g *= f, w *= f) : (h = Math.floor((Q + w) / (g + w)), y = (Q - h * g) / (h - 1), v = (Q - (h + 1) * g) / h, w = v <= 0 || Math.abs(w - y) < Math.abs(w - v) ? y : v), C && (a === 3 ? this.ctx.setLineDash([0, g + w]) : this.ctx.setLineDash([g, w])), a === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = eA(t), this.ctx.stroke(), this.ctx.setLineDash([]), a === 2 && (pA(i[0]) && (m = i[3], F = i[0], this.ctx.beginPath(), this.formatPath([new p(m.end.x, m.end.y), new p(F.start.x, F.start.y)]), this.ctx.stroke()), pA(i[1]) && (m = i[1], F = i[2], this.ctx.beginPath(), this.formatPath([new p(m.end.x, m.end.y), new p(F.start.x, F.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return oA(this, void 0, void 0, function() {
        var r;
        return aA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = eA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Tu(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Fa)
), Ju = function(e) {
  return e instanceof ta || e instanceof ea ? !0 : e instanceof _r && e.type !== dt && e.type !== ht;
}, Wu = function(e, A) {
  switch (e) {
    case 0:
      return Ht(A);
    case 2:
      return yu(A);
    case 1:
    default:
      return vt(A);
  }
}, Yu = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, Zu = ["-apple-system", "system-ui"], ju = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return Zu.indexOf(A) === -1;
  }) : e;
}, zu = (
  /** @class */
  function(e) {
    IA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return A.prototype.render = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n;
        return aA(this, function(s) {
          switch (s.label) {
            case 0:
              return r = Ir(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, qu(r)];
            case 1:
              return n = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = eA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Fa)
), qu = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, $u = (
  /** @class */
  function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Ve([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Ve([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Ve([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Ve([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  }()
), Ag = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new $u({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new hu(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), eg = function(e, A) {
  return A === void 0 && (A = {}), tg(e, A);
};
typeof window < "u" && ga.setContext(window);
var tg = function(e, A) {
  return oA(void 0, void 0, void 0, function() {
    var t, r, n, s, a, B, i, o, c, l, u, Q, g, w, C, f, h, y, v, m, x, F, x, L, b, D, V, X, M, J, fA, AA, Z, CA, iA, QA, UA, FA, lA, hA;
    return aA(this, function(uA) {
      switch (uA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (L = A.allowTaint) !== null && L !== void 0 ? L : !1,
            imageTimeout: (b = A.imageTimeout) !== null && b !== void 0 ? b : 15e3,
            proxy: A.proxy,
            useCORS: (D = A.useCORS) !== null && D !== void 0 ? D : !1
          }, s = ur({ logging: (V = A.logging) !== null && V !== void 0 ? V : !0, cache: A.cache }, n), a = {
            windowWidth: (X = A.windowWidth) !== null && X !== void 0 ? X : r.innerWidth,
            windowHeight: (M = A.windowHeight) !== null && M !== void 0 ? M : r.innerHeight,
            scrollX: (J = A.scrollX) !== null && J !== void 0 ? J : r.pageXOffset,
            scrollY: (fA = A.scrollY) !== null && fA !== void 0 ? fA : r.pageYOffset
          }, B = new MA(a.scrollX, a.scrollY, a.windowWidth, a.windowHeight), i = new Ag(s, B), o = (AA = A.foreignObjectRendering) !== null && AA !== void 0 ? AA : !1, c = {
            allowTaint: (Z = A.allowTaint) !== null && Z !== void 0 ? Z : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + B.width + "x" + B.height + " scrolled to " + -B.left + "," + -B.top), l = new As(i, e, c), u = l.clonedReferenceElement, u ? [4, l.toIFrame(t, B)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return Q = uA.sent(), g = Pr(u) || ru(u) ? xB(u.ownerDocument) : It(i, u), w = g.width, C = g.height, f = g.left, h = g.top, y = rg(i, u, A.backgroundColor), v = {
            canvas: A.canvas,
            backgroundColor: y,
            scale: (iA = (CA = A.scale) !== null && CA !== void 0 ? CA : r.devicePixelRatio) !== null && iA !== void 0 ? iA : 1,
            x: ((QA = A.x) !== null && QA !== void 0 ? QA : 0) + f,
            y: ((UA = A.y) !== null && UA !== void 0 ? UA : 0) + h,
            width: (FA = A.width) !== null && FA !== void 0 ? FA : Math.ceil(w),
            height: (lA = A.height) !== null && lA !== void 0 ? lA : Math.ceil(C)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), x = new zu(i, v), [4, x.render(u)]) : [3, 3];
        case 2:
          return m = uA.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + f + "," + h + " with size " + w + "x" + C + " using computed rendering"), i.logger.debug("Starting DOM parsing"), F = sa(i, u), y === F.styles.backgroundColor && (F.styles.backgroundColor = SA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), x = new Xu(i, v), [4, x.render(F)];
        case 4:
          m = uA.sent(), uA.label = 5;
        case 5:
          return (!((hA = A.removeContainer) !== null && hA !== void 0) || hA) && (As.destroy(Q) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, m];
      }
    });
  });
}, rg = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? ye(e, getComputedStyle(r.documentElement).backgroundColor) : SA.TRANSPARENT, s = r.body ? ye(e, getComputedStyle(r.body).backgroundColor) : SA.TRANSPARENT, a = typeof t == "string" ? ye(e, t) : t === null ? SA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? PA(n) ? PA(s) ? a : s : n : a;
};
const Qt = {
  pdf: "Download PDF",
  image: "Download Image",
  csv: "Download Data (CSV)",
  link: "Link to Dataset"
}, ng = (e, A) => {
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
}, ha = (e, A, t) => {
  const r = document.querySelector(`[data-download-id=${t}]`), n = (B) => {
    var i, o;
    return (i = B == null ? void 0 : B.dashboard) != null && i.title ? B.dashboard.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : (o = B == null ? void 0 : B.general) != null && o.title ? B.general.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : B != null && B.title ? B.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : "no-title";
  }, s = /* @__PURE__ */ new Date(), a = n(e);
  switch (A) {
    case "image":
      eg(r, {
        ignoreElements: (B) => {
          var i;
          return ((i = B.className) == null ? void 0 : i.indexOf) && B.className.search(/download-buttons|download-links|data-table-container/) !== -1;
        }
      }).then((B) => {
        ng(B.toDataURL(), a + ".png");
      });
      return;
    case "pdf":
      console.warn("COVE: pdf downloads disabled");
      break;
    default:
      console.warn("COVE: generateMedia param 2 type must be 'image' or 'pdf'");
      break;
  }
}, sg = ({ state: e, text: A, type: t, title: r, elementToCapture: n }) => /* @__PURE__ */ H(
  "button",
  {
    className: ["btn", "btn-primary"].join(" "),
    title: r,
    onClick: () => ha(e, t, n),
    style: { lineHeight: "1.4em" },
    children: Qt[t]
  }
), ag = ({ config: e, dashboardDataConfig: A }) => {
  var r;
  let t = A || e;
  return t.dataFileSourceType === "url" && t.dataFileName && e.table.showDownloadUrl ? /* @__PURE__ */ H("a", { href: t.dataFileName, title: Qt.link, target: "_blank", children: Qt.link }) : (r = e == null ? void 0 : e.table) != null && r.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ H("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank", children: Qt.link }) : null;
}, Bg = ({ children: e, classes: A }) => /* @__PURE__ */ H("section", { className: A.join(" "), children: /* @__PURE__ */ H("span", { children: e }) }), le = () => null;
le.Section = Bg;
le.Link = ag;
le.Button = sg;
le.generateMedia = ha;
const ig = ({ rawData: e, fileName: A, headerColor: t, skipId: r }) => {
  const n = Ia.unparse(e), s = new Blob([n], { type: "text/csv;charset=utf-8;" });
  return /* @__PURE__ */ H("a", { download: A, type: "button", onClick: () => {
    typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(s, A);
  }, href: URL.createObjectURL(s), "aria-label": "Download this data in a CSV file format.", className: `${t} no-border`, id: `${r}`, "data-html2canvas-ignore": !0, role: "button", children: "Download Data (CSV)" });
};
function og(e = void 0, A) {
  return fs(e)(A);
}
function Tr(e = void 0, A) {
  return ft(e)(A) || /* @__PURE__ */ new Date();
}
const kg = (e) => {
  try {
    if (!e)
      throw new Error("COVE: No axis passed to isDateScale");
    return ["date", "date-time"].includes(e.type);
  } catch ({ message: A }) {
    console.warn(A);
  }
}, cg = {
  AL: "Alabama",
  AK: "Alaska",
  AS: "American Samoa",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District Of Columbia",
  FM: "Federated States Of Micronesia",
  FL: "Florida",
  GA: "Georgia",
  GU: "Guam",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MH: "Marshall Islands",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  MP: "Northern Mariana Islands",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PW: "Palau",
  PA: "Pennsylvania",
  PR: "Puerto Rico",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VI: "Virgin Islands",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming"
}, ss = (e) => {
  if (typeof e != "string" || !isNaN(Number(e)))
    return e;
  const A = e.toUpperCase();
  return ["U.S. VIRGIN ISLANDS", "VI", "US VIRGIN ISLANDS", "VIRGIN ISLANDS"].includes(A) ? "U.S. VIRGIN ISLANDS" : cg[A] || e;
}, wt = (e, A, t, r) => {
  var c, l, u;
  let n = e, s = A;
  if (r.type === "map" && (n = ss(e), s = ss(A), String(n).toLowerCase().includes("region") && String(s).toLowerCase().includes("region"))) {
    const Q = parseInt(e.match(/\d+$/)[0], 10), g = parseInt(A.match(/\d+$/)[0], 10);
    return t.asc ? Number(Q) - Number(g) : Number(g) - Number(Q);
  }
  n = n === !1 || n === !0 || n === null ? "" : n, s = s === !1 || s === !0 || s === null ? "" : s;
  const a = String(n).trim(), B = String(s).trim();
  if (((c = r.xAxis) == null ? void 0 : c.dataKey) === t.column && ["date", "date-time"].includes(r.xAxis.type)) {
    const Q = (l = Tr(r.xAxis.dateParseFormat, a)) == null ? void 0 : l.getTime(), g = (u = Tr(r.xAxis.dateParseFormat, B)) == null ? void 0 : u.getTime();
    return t.asc ? Q - g : g - Q;
  }
  const i = !isNaN(Number(n)) && n !== void 0 && n !== null && a !== "", o = !isNaN(Number(s)) && s !== void 0 && s !== null && B !== "";
  return a === "" && B !== "" ? t.asc ? -1 : 1 : a !== "" && B === "" ? t.asc ? 1 : -1 : i && o ? t.asc ? Number(n) - Number(s) : Number(s) - Number(n) : i ? t.asc ? -1 : 1 : o ? t.asc ? 1 : -1 : t.asc ? a.localeCompare(B) : B.localeCompare(a);
}, as = (e) => {
  let A = "", t = Math.abs(e);
  return t >= 1e9 ? (A = "B", e = e / 1e9) : t >= 1e6 ? (A = "M", e = e / 1e6) : t >= 1e3 && (A = "K", e = e / 1e3), e + A;
}, ir = (e, A, t = !1, r = null, n = null) => {
  if (r || console.error("no config found in formatNumber"), isNaN(e) || !e)
    return e;
  const s = e < 0;
  s && (e = Math.abs(e));
  let {
    dataFormat: {
      abbreviated: a,
      bottomAbbreviated: B,
      bottomPrefix: i,
      bottomRoundTo: o,
      bottomSuffix: c,
      bottomComas: l,
      commas: u,
      onlyShowTopPrefixSuffix: Q,
      prefix: g,
      rightPrefix: w,
      rightRoundTo: C,
      rightSuffix: f,
      roundTo: h,
      suffix: y
    }
  } = r;
  const { addColCommas: v, addColRoundTo: m, addColPrefix: F, addColSuffix: x } = n || {};
  String(e).indexOf(",") !== -1 && (e = e.replaceAll(",", ""));
  let L = e, b;
  if (A === "left") {
    let V;
    m !== void 0 ? V = m ? Number(m) : 0 : V = h ? Number(h) : 0, V < 0 && (V = 0);
    let X;
    v !== void 0 ? X = !!v : X = !!r.dataFormat.commas, b = {
      useGrouping: X,
      minimumFractionDigits: V,
      maximumFractionDigits: V
    };
  }
  if (A === "right" && (b = {
    useGrouping: !!r.dataFormat.rightCommas,
    minimumFractionDigits: C ? Number(C) : 0,
    maximumFractionDigits: C ? Number(C) : 0
  }), A === "bottom" && (b = {
    useGrouping: !!r.dataFormat.bottomCommas,
    minimumFractionDigits: o ? Number(o) : 0,
    maximumFractionDigits: o ? Number(o) : 0
  }), e = Wr(e), isNaN(e))
    return r.runtime.editorErrorMessage = `Unable to parse number from data ${L}. Try reviewing your data and selections in the Data Series section.`, L;
  if (!r.dataFormat)
    return e;
  if (r.dataCutoff) {
    let V = Wr(r.dataCutoff);
    e < V && (e = V);
  }
  A === "left" && u && a && t || A === "bottom" && u && a && t ? e = e : e = e.toLocaleString("en-US", b);
  let D = "";
  return a && A === "left" && t && (e = as(parseFloat(e))), B && A === "bottom" && t && (e = as(parseFloat(e))), Q || (F !== void 0 && A === "left" ? D = F + D : g && A === "left" && (D = g + D), w && A === "right" && (D += w), i && A === "bottom" && (D += i)), D += e, Q || (x !== void 0 && A === "left" ? D += x : y && A === "left" && (D += y), f && A === "right" && (D += f), c && A === "bottom" && (D += c)), s && (D = "-" + D), String(D);
}, lg = (e, A) => {
  let t = {};
  const { columns: r } = A;
  return r && Object.keys(r).forEach((n) => {
    const s = r[n];
    s.name === e && (t = {
      addColPrefix: s.prefix,
      addColSuffix: s.suffix,
      addColRoundTo: s.roundToPlace ? s.roundToPlace : "",
      addColCommas: s.commas
    });
  }), t;
}, Be = (e, A, t, r) => {
  var i, o, c, l, u;
  if (t.visualizationType === "Sankey" || (i = r == null ? void 0 : r[0]) != null && i.tableData)
    return r[e][A];
  const n = r[e];
  let s;
  const a = n[A];
  if (A === ((o = t.xAxis) == null ? void 0 : o.dataKey)) {
    const { type: Q, dateDisplayFormat: g, dateParseFormat: w } = t.xAxis || {}, C = ((c = t.table) == null ? void 0 : c.dateDisplayFormat) || g;
    Q === "date" || Q === "date-time" ? s = og(C, Tr(w, a)) : Q === "continuous" ? s = ir(r[e][A], "bottom", !1, t) : s = a;
  } else {
    let Q = "left", g = t.series ? t.series.filter((f) => (f == null ? void 0 : f.axis) === "Left") : [], w = t.series ? t.series.filter((f) => (f == null ? void 0 : f.axis) === "Right") : [];
    g.map((f) => {
      f.dataKey === A && (Q = "left");
    }), w.map((f) => {
      f.dataKey === A && (Q = "right");
    });
    let C = lg(A, t);
    C ? s = t.dataFormat ? ir(r[e][A], Q, !1, t, C) : r[e][A] : s = t.dataFormat ? ir(r[e][A], Q, !1, t) : r[e][A];
  }
  return (l = t.preliminaryData) == null || l.forEach((Q) => {
    var y, v, m, F;
    const g = String(Q.value) === String(a), w = !Q.column || Q.column === A, C = (v = (y = t.runtime) == null ? void 0 : y.barSeriesKeys) == null ? void 0 : v.includes(A), f = (F = (m = t.runtime) == null ? void 0 : m.lineSeriesKeys) == null ? void 0 : F.includes(A), h = t.general.showSuppressedSymbol;
    if (g && w && Q.displayTable && Q.type === "suppression" && t.visualizationSubType !== "stacked")
      switch (t.visualizationType) {
        case "Combo":
          s = C && h ? Q.iconCode : f && h ? Q.lineCode : "";
          break;
        case "Bar":
          s = h ? Q.iconCode : "";
          break;
        case "Line":
          s = h ? Q.lineCode : "";
          break;
      }
  }), ((u = t.general) == null ? void 0 : u.showMissingDataLabel) && (!a || a === "null") ? "N/A" : s;
}, ug = (e, A) => {
  const r = Object.values(A.columns || {}).find((n) => n.name === e);
  return r != null && r.label ? r.label : e;
}, da = (e, A) => {
  var s, a, B;
  const t = (s = A.series) == null ? void 0 : s.find((i) => i.dataKey === e);
  if (t != null && t.name)
    return t.name;
  if (A.runtimeSeriesLabels && A.runtimeSeriesLabels[e])
    return A.runtimeSeriesLabels[e];
  const r = e === ((a = A.xAxis) == null ? void 0 : a.dataKey), n = (B = A.table) == null ? void 0 : B.indexLabel;
  return r && n ? n : ug(e, A);
}, pa = (e, A, t) => {
  var i, o, c, l, u, Q, g, w;
  if (e.visualizationType === "Sankey")
    return Object.keys((o = (i = e == null ? void 0 : e.data) == null ? void 0 : i[0]) == null ? void 0 : o.tableData[0]);
  const r = zA.cloneDeep(e.columns) || {}, n = Object.values(r).filter((C) => C.dataTable === !1).map((C) => C.name);
  let s = [];
  e.visualizationType !== "Pie" ? (s = A ? [(c = e.xAxis) == null ? void 0 : c.dataKey] : [], (l = e.runtime) != null && l.series ? (u = e.runtime) == null || u.series.forEach((C) => {
    s.push(C.dataKey);
  }) : t && t.length > 0 && (s = Object.keys(t[0]))) : s = A ? [(Q = e.xAxis) == null ? void 0 : Q.dataKey, (g = e.yAxis) == null ? void 0 : g.dataKey] : [(w = e.yAxis) == null ? void 0 : w.dataKey];
  const a = Object.keys(t[0] || {});
  Object.values(r).forEach(function(C) {
    var y;
    if (!C.name)
      return;
    const f = s.includes(C.name), h = a.includes(C.name);
    C.name !== ((y = e.xAxis) == null ? void 0 : y.dataKey) && C.dataTable === !0 && !f && h && s.push(C.name);
  });
  const B = Object.values(r).reduce((C, f) => (f.order !== void 0 && (C[f.name] = f.order - 1), C), {});
  return s = s.filter((C) => !n.includes(C)), s.forEach((C, f) => {
    B[C] === void 0 && (Object.values(B).includes(f) ? B[C] = f + 1 : B[C] = f);
  }), s.sort((C, f) => C === "pivotColumn" ? -1 : f === "pivotColumn" ? 1 : B[C] - B[f]), s;
}, Ea = (e) => {
  const A = e.as;
  return /* @__PURE__ */ H(A, { className: "cdcdataviz-sr-only", children: e.children });
};
const gg = ({ active: e }) => /* @__PURE__ */ H("svg", { className: "up" + (e ? " active" : ""), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5", children: /* @__PURE__ */ H("path", { d: "M0 5l5-5 5 5z" }) }), Qg = ({ active: e }) => /* @__PURE__ */ H("svg", { className: "down" + (e ? " active" : ""), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5", children: /* @__PURE__ */ H("path", { d: "M0 0l5 5 5-5z" }) }), Sr = ({ ascending: e }) => /* @__PURE__ */ cA("span", { role: "button", className: "sort-icon", children: [
  /* @__PURE__ */ H(gg, { active: e === !0 }),
  /* @__PURE__ */ H(Qg, { active: e === !1 })
] }), Mr = (e, A, t) => {
  let r, n = A;
  const s = e.asc === !0, a = e.asc === !1, B = e.asc === void 0;
  return e.column === void 0 || e.column !== A ? r = !0 : (a && (n = void 0, r = void 0), B && (r = !0), s && (r = !1)), { column: n, asc: r, colIndex: t };
}, wg = ({
  data: e,
  isVertical: A,
  config: t,
  setSortBy: r,
  sortBy: n,
  hasRowType: s,
  viewport: a,
  rightAlignedCols: B
}) => {
  var u;
  const i = (u = t.table) == null ? void 0 : u.groupBy;
  if (!e)
    return;
  let o = pa(t, A, e);
  if (i) {
    let Q = o.filter((g) => g !== i);
    Q.length != o.length && (o = Q);
  }
  const c = ({ text: Q, config: g, sortBy: w }) => {
    const C = "Not Applicable";
    let f = `${Q} `;
    if ((Q !== "__series__" || Q !== "") && (f = `${Q} `), (Q === "__series__" || Q === "") && !g.table.indexLabel && (f = C), (Q === "__series__" || Q === "") && g.table.indexLabel && (f = g.table.indexLabel), f !== C)
      return /* @__PURE__ */ H("span", { className: "cdcdataviz-sr-only", children: `Press command, modifier, or enter key to sort by ${f} in ${w.column !== f ? "ascending" : w.column === "desc" ? "descending" : "ascending"}  order` });
  }, l = ({ column: Q, text: g, config: w }) => {
    if (g === "pivotColumn")
      return "";
    let C = "Not Applicable";
    return g === "__series__" && w.table.indexLabel ? `${w.table.indexLabel} ` : g === "__series__" && !w.table.indexLabel ? /* @__PURE__ */ H(Ea, { as: "span", children: C }) : g;
  };
  if (A) {
    if (s) {
      const Q = /row[_-]?type/i, g = o.findIndex((w) => Q.test(w));
      g > -1 && o.splice(g, 1);
    }
    return /* @__PURE__ */ H("tr", { children: o.map((Q, g) => {
      const w = da(Q, t), C = Mr(n, Q, g), f = n.column === Q ? n.asc : void 0, h = Q === n.column && !s;
      return /* @__PURE__ */ cA(
        "th",
        {
          style: {
            minWidth: (t.table.cellMinWidth || 0) + "px",
            textAlign: B && B[g] ? "right" : "",
            paddingRight: h ? "1.3em" : ""
          },
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            s || r(C);
          },
          onKeyDown: (y) => {
            s || y.keyCode === 13 && r(C);
          },
          ...n.column === Q ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null,
          children: [
            /* @__PURE__ */ H(l, { text: w, column: Q, config: t }),
            h && /* @__PURE__ */ H(Sr, { ascending: f }),
            /* @__PURE__ */ H(c, { sortBy: n, config: t, text: w })
          ]
        },
        `col-header-${Q}__${g}`
      );
    }) });
  } else {
    const Q = t.visualizationType === "Pie" ? 1 : 0;
    return /* @__PURE__ */ H("tr", { children: ["__series__", ...Object.keys(e)].slice(Q).map((g, w) => {
      var m;
      let C = (m = t.xAxis) == null ? void 0 : m.dataKey, f = g !== "__series__" ? Be(g, C, t, e) : "__series__";
      const h = Mr(n, C, w), y = n.colIndex === w ? n.asc : void 0, v = w === n.colIndex && !s;
      return /* @__PURE__ */ cA(
        "th",
        {
          style: {
            minWidth: (t.table.cellMinWidth || 0) + "px",
            textAlign: B && B[w] ? "right" : "",
            paddingRight: v ? "1.3em" : ""
          },
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            r(h);
          },
          onKeyDown: (F) => {
            F.keyCode === 13 && r(h);
          },
          ...n.column === f ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null,
          children: [
            /* @__PURE__ */ H(l, { text: f, column: C, config: t }),
            v && /* @__PURE__ */ H(Sr, { ascending: y }),
            /* @__PURE__ */ H(c, { text: f, config: t, sortBy: n })
          ]
        },
        `col-header-${f}__${w}`
      );
    }) });
  }
}, fg = ({ categories: e }) => {
  let A = ["Measures", ...e];
  return /* @__PURE__ */ H("tr", { children: A.map((t) => /* @__PURE__ */ H("th", { tabIndex: 0, title: t, role: "columnheader", scope: "col", children: t }, `col-header-${t}`)) });
}, Cg = ({ text: e, config: A }) => {
  let t = "Not Applicable";
  return e === "__series__" && A.table.indexLabel ? `${A.table.indexLabel} ` : e === "__series__" && !A.table.indexLabel ? /* @__PURE__ */ H(Ea, { as: "span", children: t }) : e;
}, Ug = ({ columns: e, config: A, indexTitle: t, sortBy: r, setSortBy: n, rightAlignedCols: s }) => /* @__PURE__ */ H("tr", { children: Object.keys(e).filter((a) => e[a].dataTable === !0 && e[a].name).map((a, B) => {
  var l;
  let i;
  a && a !== "geo" ? i = e[a].label ? e[a].label : e[a].name : i = A.type === "map" ? t : (l = A.xAxis) == null ? void 0 : l.dataKey, A.type === "map" && (i === void 0 || i === "") && (i = "Location");
  const o = Mr(r, a, B), c = r.column === a ? r.asc : void 0;
  return /* @__PURE__ */ cA(
    "th",
    {
      style: {
        textAlign: s && s[B] ? "right" : "",
        paddingRight: "1.3em"
      },
      id: a,
      tabIndex: 0,
      role: "columnheader",
      scope: "col",
      onClick: () => {
        n(o);
      },
      onKeyDown: (u) => {
        u.keyCode === 13 && n(o);
      },
      className: r.column === a ? r.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
      ...r.column === a ? r.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null,
      children: [
        /* @__PURE__ */ H(Cg, { text: i, config: A, column: a }),
        /* @__PURE__ */ H(Sr, { ascending: c }),
        /* @__PURE__ */ H("span", { className: "cdcdataviz-sr-only", children: `Sort by ${i} in ${r.column === a && r.asc ? "ascending" : "descending"} order` })
      ]
    },
    `col-header-${a}__${B}`
  );
}) }), Bs = ({ expanded: e, setExpanded: A, tableTitle: t, fontSize: r, viewport: n }) => /* @__PURE__ */ cA(
  "div",
  {
    role: "button",
    className: e ? "data-table-heading p-3" : "collapsed data-table-heading p-3",
    onClick: () => {
      A(!e);
    },
    tabIndex: 0,
    onKeyDown: (s) => {
      s.keyCode === 13 && A(!e);
    },
    children: [
      /* @__PURE__ */ H(Ka, { display: e ? "minus" : "plus", base: !0 }),
      t
    ]
  }
), Ha = (e) => {
  const { fill: A, borderColor: t, display: r = "inline-block", shape: n = "circle" } = e, s = { width: "1em", height: "1em" }, a = ["circle", "square"].includes(n), B = {
    borderRadius: n === "circle" ? "50%" : "0px",
    verticalAlign: "middle",
    display: r,
    height: s.height,
    width: s.width,
    border: t ? `${t} 1px solid` : "rgba(0,0,0,.3) 1px solid",
    backgroundColor: A
  };
  return /* @__PURE__ */ H("span", { className: `legend-item ${a ? "me-2" : ""}`, style: B });
}, Fg = (e) => /* @__PURE__ */ bA.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ bA.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" }));
function hg(e) {
  const A = ["cdc.gov", "localhost", "facebook.com", "twitter.com", "linkedin.com", "pinterest.com", "youtube.com", "youtube-nocookie.com", "plus.google.com", "instagram.com", "flickr.com", "tumblr.com", "cdc.sharepoint.com", "vaccines.gov", "vacunas.gov"], t = new URL(e, window.location.origin).hostname;
  let r = !0;
  return A.forEach((n) => {
    t.indexOf(n) !== -1 && t.indexOf(n) === t.length - n.length && (r = !1);
  }), r;
}
const dg = ({ markup: e, row: A, columns: t, navigationHandler: r, mapZoomHandler: n }) => t.navigate && A[t.navigate.name] ? /* @__PURE__ */ cA(
  "span",
  {
    onClick: () => r(A[t.navigate.name]),
    className: "table-link",
    title: "Click for more information (Opens in a new window)",
    role: "link",
    tabIndex: 0,
    onKeyDown: (s) => {
      s.keyCode === 13 && r(A[t.navigate.name]);
    },
    children: [
      e,
      hg(A[t.navigate.name]) && /* @__PURE__ */ H(Fg, { className: "inline-icon" })
    ]
  }
) : n ? /* @__PURE__ */ H(
  "span",
  {
    onClick: n,
    className: "table-link",
    title: "Click to view on map",
    role: "link",
    tabIndex: 0,
    onKeyDown: (s) => {
      s.keyCode === 13 && n();
    },
    children: e
  }
) : /* @__PURE__ */ H(Or, { children: e }), pg = (e, A, t) => {
  var s;
  if (!t)
    return e;
  if (e === null || e === "" || e === void 0)
    return "";
  if (typeof e == "string" && e.length > 0 && /[a-zA-Z]/.test(e) && ((s = t == null ? void 0 : t.legend) == null ? void 0 : s.type) === "equalnumber")
    return e;
  let r = e, n = t.columns[A];
  if (n === void 0 && (n = t.columns.primary, n.useCommas = n.commas, n.roundToPlace = n.roundTo ? n.roundTo : ""), n) {
    if (Number(e)) {
      const a = n.roundToPlace && (n.roundToPlace !== "" || n.roundToPlace !== null), B = n.roundToPlace ? Number(n.roundToPlace) : 0;
      n.hasOwnProperty("roundToPlace") && a && (r = Number(e).toFixed(B)), n.hasOwnProperty("useCommas") && n.useCommas === !0 && (r = Number(e).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: a ? B : 0,
        maximumFractionDigits: a ? B : 5
      }));
    }
    t.legend.specialClasses.includes(String(e)) === !1 && (r = (n.prefix || "") + r + (n.suffix || ""));
  }
  return r;
}, Eg = ({
  rows: e,
  columns: A,
  runtimeData: t,
  config: r,
  applyLegendToRow: n,
  displayGeoName: s,
  formatLegendLocation: a,
  navigationHandler: B,
  setFilteredCountryCode: i
}) => e.map(
  (o) => Object.keys(A).filter((c) => A[c].dataTable === !0 && A[c].name).map((c) => {
    let l;
    if (c === "geo") {
      const u = t[o], Q = n(u);
      let g;
      const w = r.general.type === "bubble" && r.general.allowMapZoom && r.general.geoType === "world" ? () => i(o) : void 0;
      if (r.general.geoType !== "single-state" && r.general.geoType !== "us-county" || r.general.type === "us-geocode") {
        const C = (f) => f.charAt(0).toUpperCase() + f.slice(1);
        g = s(o), g = String(g).startsWith("region") ? C(g) : g;
      } else
        g = a(o);
      l = /* @__PURE__ */ cA("div", { className: "col-12", children: [
        /* @__PURE__ */ H(Ha, { fill: Q[0] }),
        /* @__PURE__ */ H(
          dg,
          {
            markup: g,
            row: u,
            columns: A,
            navigationHandler: B,
            mapZoomHandler: w
          }
        )
      ] });
    } else {
      let u = "", Q = r.columns[c].name;
      const { specialClasses: g } = r.legend;
      g && g.length && typeof g[0] == "object" && g.forEach((w) => {
        w.key === Q && String(t[o][w.key]) === w.value && (u = w.label);
      }), l = pg(u || t[o][Q], c, r);
    }
    return l;
  })
), Hg = (e) => {
  const A = Object.keys(e).find((t) => t.match(/row[_-]?type/i));
  return e[A];
}, vg = ({
  rows: e,
  runtimeData: A,
  config: t,
  isVertical: r,
  sortBy: n,
  colorScale: s,
  hasRowType: a
}) => {
  var c;
  const B = (c = t.table) == null ? void 0 : c.groupBy, i = pa(t, r, A), o = () => !n && n.colIndex === null ? i : i.sort((l, u) => {
    if (n.column === "__series__")
      return wt(l, u, n, t);
    let Q = A.find((w) => {
      var C;
      return w[(C = t.xAxis) == null ? void 0 : C.dataKey] === n.column;
    });
    const g = A[n.colIndex - 1];
    if (Q)
      return wt(Q[l], Q[u], n, t);
    if (Q === void 0 && g)
      return wt(g[l], g[u], n, t);
  });
  if (r)
    if (B) {
      const l = /* @__PURE__ */ new Map();
      return e.forEach((u) => {
        let Q, g = [];
        if (i.forEach((w, C) => {
          B === w ? Q = Be(u, w, t, A) : g.push(Be(u, w, t, A));
        }), !l.has(Q))
          l.set(Q, [g]);
        else {
          const w = l.get(Q);
          l.set(Q, [...w, g]);
        }
      }), l;
    } else
      return e.map((l) => {
        if (a) {
          const u = Hg(A[l]), Q = i.map((g) => Be(l, g, t, A));
          return [u, ...Q];
        } else
          return i.map((u, Q) => Be(l, u, t, A));
      });
  else
    return o().map((l) => {
      const u = da(l, t);
      return (t.visualizationType !== "Pie" ? [
        /* @__PURE__ */ cA(Or, { children: [
          s && s(u) && /* @__PURE__ */ H(Ha, { fill: s(u) }),
          u
        ] })
      ] : []).concat(e.map((g, w) => Be(g, l, t, A)));
    });
}, mg = ({ config: e }) => e.regions.map((A) => e.visualizationType === "Box Plot" ? [] : !Object.keys(A).includes("from") || !Object.keys(A).includes("to") ? [] : [A.label, A.from, A.to]), Ig = ({ rows: e, config: A }) => {
  const t = (a) => {
    let {
      boxplot: { labels: B }
    } = A;
    return {
      columnMean: B.mean,
      columnMax: B.maximum,
      columnMin: B.minimum,
      columnIqr: B.iqr,
      columnCategory: "Category",
      columnMedian: B.median,
      columnFirstQuartile: B.q1,
      columnThirdQuartile: B.q3,
      columnOutliers: B.outliers,
      values: B.values,
      columnCount: B.count,
      columnSd: "Standard Deviation",
      columnNonOutliers: "Non Outliers",
      columnLowerBounds: B.lowerBounds,
      columnUpperBounds: B.upperBounds
    }[a];
  };
  let r = (a, B) => Number(a) === 0 ? B.columnMax : Number(a) === 1 ? B.columnThirdQuartile : Number(a) === 2 ? B.columnMedian : Number(a) === 3 ? B.columnFirstQuartile : Number(a) === 4 ? B.columnMin : Number(a) === 5 ? B.columnCount : Number(a) === 6 ? B.columnSd : Number(a) === 7 ? B.columnMean : Number(a) === 8 ? B.columnIqr : Number(a) === 9 ? B.values.length > 0 ? B.values.toString() : "-" : Number(a) === 10 ? B.columnLowerBounds : Number(a) === 11 ? B.columnUpperBounds : Number(a) === 12 ? B.columnOutliers.length > 0 ? B.columnOutliers.toString() : "-" : Number(a) === 13 ? B.columnNonOutliers.length > 0 ? B.columnNonOutliers.toString() : "-" : /* @__PURE__ */ H("p", { children: "-" }), n = e.map((a) => a[0]), s = ["Measures", ...A.boxplot.categories];
  return n.shift(), n.map((a, B) => s.map((i, o) => {
    let c;
    if (i === "Measures") {
      let l = t(a);
      c = /* @__PURE__ */ H(Or, { children: l });
    } else
      c = r(B, A.boxplot.plots[o - 1]);
    return c;
  }));
}, yg = (e) => {
  if (Array.isArray(e)) {
    const A = {};
    return e.forEach((t) => {
      Object.keys(t).forEach((r) => {
        A[r] === void 0 && (A[r] = null), t[r] !== null && (A[r] = !0);
      });
    }), e.map((t) => {
      const r = {};
      return Object.keys(t).forEach((n) => {
        n.match(/row[_-]?type/i) && (r.row_type = t[n]), A[n] === !0 && (r[n] = t[n]);
      }), r;
    });
  } else
    return e;
}, is = (e, A) => A.map((t) => e[t] || "").join(":"), bg = (e, A, t) => {
  const r = [A, ...t];
  return zA.uniq(e.flatMap((n) => Object.keys(n))).filter((n) => !r.includes(n));
}, Kg = (e, A, t) => {
  const r = bg(e, A, t), n = {}, s = e.reduce((a, B) => {
    const i = is(B, r);
    return a[i] || (a[i] = {}), a;
  }, {});
  return e.forEach((a) => {
    const B = is(a, r);
    if (t.length > 1)
      t.forEach((i) => {
        const o = zA.omit(a, [A, ...t]);
        s[B][i] = {
          ...s[B][i],
          ...o,
          [a[A]]: a[i]
        };
      });
    else {
      const i = t[0], o = zA.omit(a, [A, ...t]);
      s[B] = {
        ...s[B],
        ...o,
        [a[A]]: a[i]
      };
    }
    n[a[A]] = "";
  }), t.length > 1 ? Object.keys(s).flatMap((a) => Object.keys(s[a]).map((B) => ({
    pivotColumn: B,
    ...s[a][B]
  }))) : Object.values(s).map((a) => ({ ...n, ...a }));
}, os = [
  ["*", "Asterisk"],
  ["†", "Dagger"],
  ["§", "Section Symbol"],
  ["¶", "Paragraph Symbol"]
], va = os.concat(os.map(([e, A]) => [e + e, "Double " + A])), _g = zA.fromPairs(zA.map(va, ([e, A]) => [A, e])), Lg = ["N/A", "NA", ""].concat(va.map((e) => e[0]));
function xg(e = "") {
  return e ? typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? Lg.includes(e) || /^[\$\d\.\%\,\-]*$/.test(e) : !1 : !1;
}
const Pg = (e) => {
  var iA, QA, UA, FA, lA, hA, uA, vA;
  const {
    config: A,
    dataConfig: t,
    defaultSortBy: r,
    tableTitle: n,
    vizTitle: s,
    rawData: a,
    runtimeData: B,
    headerColor: i,
    expandDataTable: o,
    columns: c,
    viewport: l,
    formatLegendLocation: u,
    tabbingId: Q,
    wrapColumns: g
  } = e, w = bA.useMemo(() => {
    const T = yg(B);
    if (A.table.pivot) {
      const q = Object.values(A.columns || {}).filter((K) => K.dataTable === !1).map((K) => K.name), { columnName: d, valueColumns: I } = A.table.pivot;
      if (d && I) {
        const K = T.map((U) => zA.omit(U, q));
        return Kg(K, d, I);
      }
    }
    return T;
  }, [B, (iA = A.table.pivot) == null ? void 0 : iA.columnName, (QA = A.table.pivot) == null ? void 0 : QA.valueColumn]), [C, f] = bA.useState(o), [h, y] = bA.useState({
    column: r || "",
    asc: !1,
    colIndex: null
  }), [v, m] = bA.useState(""), F = !(A.type === "chart" && !((UA = A.table) != null && UA.showVertical)), L = `btn__${Math.random().toString(16).substr(2, 8)}`, b = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  };
  switch (bA.useEffect(() => {
    const T = "Accessible data table.", q = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    C === !0 && v !== T && m(T), C === !1 && v !== q && m(q);
  }, [C]), A.visualizationType) {
    case "Box Plot":
      if (!A.boxplot)
        return /* @__PURE__ */ H(Ot, {});
      break;
    case "Line":
      if (!w)
        return /* @__PURE__ */ H(Ot, {});
      break;
    default:
      if (!w)
        return /* @__PURE__ */ H(Ot, {});
      break;
  }
  const D = Object.keys(w).filter((T) => T != "columns"), V = F && h.column ? D.sort((T, q) => {
    let d, I;
    if (A.type === "map" && A.columns) {
      const K = A.columns[h.column].name;
      d = w[T][K], I = w[q][K];
    }
    return ["chart", "dashboard", "table"].includes(A.type) && (d = w[T][h.column], I = w[q][h.column]), !d && !I && A.type === "chart" && A.xAxis && A.xAxis.type === "date-time" && (d = ft(A.runtime.xAxis.dateParseFormat)(w[T][A.xAxis.dataKey]), I = ft(A.runtime.xAxis.dateParseFormat)(w[q][A.xAxis.dataKey])), d && I ? wt(d, I, h, A) : 0;
  }) : D, X = {
    maxHeight: A.table.limitHeight && `${A.table.height}px`,
    OverflowY: "scroll"
  }, M = !!Object.keys((a == null ? void 0 : a[0]) || {}).find((T) => T.match(/row[_-]?type/i)), J = bA.useMemo(() => {
    var T;
    return A.type === "map" ? A.table.caption ? A.table.caption : `Data table showing data for the ${b[(T = A.general) == null ? void 0 : T.geoType]} figure.` : A.table.caption ? A.table.caption : `Data table showing data for the ${A.type} figure.`;
  }, [A.table.caption]), fA = (FA = A == null ? void 0 : A.regions) == null ? void 0 : FA.every((T) => {
    const q = T.toType === "Fixed", d = T.fromType === "Fixed", I = !T.toType, K = !T.fromType;
    return q && d || I && K || q && K || d && I;
  }), AA = bA.useMemo(
    () => {
      var T, q, d, I, K, U, N, O, j;
      return (q = (T = A.data) == null ? void 0 : T[0]) != null && q.tableData ? (I = (d = A.data) == null ? void 0 : d[0]) == null ? void 0 : I.tableData : A.visualizationType === "Sankey" ? (U = (K = A.data) == null ? void 0 : K[0]) == null ? void 0 : U.tableData : A.visualizationType === "Pie" ? [A.yAxis.dataKey] : A.visualizationType === "Box Plot" ? (O = (N = A == null ? void 0 : A.boxplot) == null ? void 0 : N.plots) != null && O[0] ? Object.entries(A.boxplot.plots[0]) : [] : (j = A.runtime) == null ? void 0 : j.seriesKeys;
    },
    [(lA = A.runtime) == null ? void 0 : lA.seriesKeys]
  ), Z = w.length === 0, CA = () => {
    var d, I, K;
    const T = ["data-table-container"];
    return (d = A.general) != null && d.showDownloadButton && !A.table.showDownloadLinkBelow && T.push("mt-4"), ((I = A == null ? void 0 : A.brush) == null ? void 0 : I.active) && ((K = A.legend) == null ? void 0 : K.position) !== "bottom" && T.push("brush-active"), T.push(l), T.join(" ");
  };
  if (A.visualizationType !== "Box Plot") {
    const T = () => {
      var U;
      return ((U = A.general) == null ? void 0 : U.geoType) === "us-county" ? a.map((N) => ({ FullGeoName: u(N[A.columns.geo.name]), ...N })) : a;
    }, q = (U) => {
      var O, j, sA;
      const N = ["download-links"];
      if (U)
        N.push("mt-2");
      else {
        N.push("mt-4", "mb-2");
        const xA = ((O = A == null ? void 0 : A.legend) == null ? void 0 : O.position) === "bottom" || ma(l);
        (j = A.brush) != null && j.active && !xA && N.push("brush-active"), (sA = A.brush) != null && sA.active && A.legend.hide && N.push("brush-active");
      }
      return N;
    }, d = A.type === "map" ? Eg({ rows: V, wrapColumns: g, ...e, runtimeData: w, viewport: l }) : vg({ rows: V, ...e, runtimeData: w, isVertical: F, sortBy: h, hasRowType: M, viewport: l }), I = d.length ? Object.fromEntries(
      Object.keys(d[0]).filter(
        (U) => d.filter((N) => xg(N[U])).length === d.length
      ).map((U) => [U, !0])
    ) : {}, K = ({ belowTable: U }) => {
      var N;
      return /* @__PURE__ */ cA(le.Section, { classes: q(U), children: [
        /* @__PURE__ */ H(le.Link, { config: A, dashboardDataConfig: t }),
        (A.table.download || ((N = A.general) == null ? void 0 : N.showDownloadButton)) && /* @__PURE__ */ H(
          ig,
          {
            rawData: T(),
            fileName: `${s || "data-table"}.csv`,
            headerColor: i
          }
        )
      ] });
    };
    return /* @__PURE__ */ cA(Jr, { component: "DataTable", children: [
      ((hA = A.general) == null ? void 0 : hA.showDownloadButton) && !A.table.showDownloadLinkBelow && /* @__PURE__ */ H(K, {}),
      /* @__PURE__ */ cA("section", { id: Q.replace("#", ""), className: CA(), "aria-label": v, children: [
        /* @__PURE__ */ H(Yr, { skipId: L, skipMessage: "Skip Data Table" }),
        A.table.collapsible !== !1 && /* @__PURE__ */ H(Bs, { expanded: C, setExpanded: f, tableTitle: n, viewport: l }),
        /* @__PURE__ */ cA("div", { className: "table-container", style: X, children: [
          /* @__PURE__ */ H(
            Nt,
            {
              preliminaryData: A.preliminaryData,
              viewport: l,
              wrapColumns: g,
              noData: Z,
              childrenMatrix: d,
              tableName: A.type,
              caption: J,
              stickyHeader: !0,
              hasRowType: M,
              headContent: A.type === "map" ? /* @__PURE__ */ H(
                Ug,
                {
                  columns: c,
                  ...e,
                  sortBy: h,
                  setSortBy: y,
                  rightAlignedCols: I
                }
              ) : /* @__PURE__ */ H(
                wg,
                {
                  data: w,
                  ...e,
                  hasRowType: M,
                  isVertical: F,
                  sortBy: h,
                  setSortBy: y,
                  viewport: l,
                  rightAlignedCols: I
                }
              ),
              tableOptions: {
                className: `table table-striped ${C ? "data-table" : "data-table cdcdataviz-sr-only"}${F ? "" : " horizontal"}`,
                "aria-live": "assertive",
                "aria-rowcount": (uA = A == null ? void 0 : A.data) != null && uA.length ? A.data.length : -1,
                hidden: !C
              },
              rightAlignedCols: I
            }
          ),
          fA && A.regions && A.regions.length > 0 && A.visualizationType !== "Box Plot" && /* @__PURE__ */ H(
            Nt,
            {
              viewport: l,
              wrapColumns: g,
              childrenMatrix: mg({ config: A }),
              noData: Z,
              tableName: A.visualizationType,
              caption: "Table of the highlighted regions in the visualization",
              headContent: /* @__PURE__ */ cA("tr", { children: [
                /* @__PURE__ */ H("th", { children: "Region Name" }),
                /* @__PURE__ */ H("th", { children: "Start Date" }),
                /* @__PURE__ */ H("th", { children: "End Date" })
              ] }),
              tableOptions: { className: "table table-striped region-table data-table" }
            }
          )
        ] })
      ] }),
      ((vA = A.general) == null ? void 0 : vA.showDownloadButton) && A.table.showDownloadLinkBelow && /* @__PURE__ */ H(K, { belowTable: !0 }),
      /* @__PURE__ */ H("div", { id: L, className: "cdcdataviz-sr-only", children: "Skipped data table." })
    ] });
  } else
    return /* @__PURE__ */ cA(Jr, { component: "DataTable", children: [
      /* @__PURE__ */ cA("section", { id: Q.replace("#", ""), className: CA(), "aria-label": v, children: [
        /* @__PURE__ */ H(Yr, { skipId: L, skipMessage: "Skip Data Table" }),
        /* @__PURE__ */ H(Bs, { expanded: C, setExpanded: f, tableTitle: n }),
        /* @__PURE__ */ H("div", { className: "table-container", style: X, children: /* @__PURE__ */ H(
          Nt,
          {
            viewport: l,
            wrapColumns: g,
            childrenMatrix: Ig({ rows: AA, config: A }),
            noData: Z,
            tableName: A.visualizationType,
            caption: J,
            stickyHeader: !0,
            headContent: /* @__PURE__ */ H(fg, { categories: A.boxplot.categories }),
            tableOptions: {
              className: `table table-striped ${C ? "data-table" : "data-table cdcdataviz-sr-only"}`,
              "aria-live": "assertive",
              "aria-rowcount": 11,
              hidden: !C
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ H("div", { id: L, className: "cdcdataviz-sr-only", children: "Skipped data table." })
    ] });
};
export {
  Pg as D,
  Ha as L,
  le as M,
  Yr as S,
  kg as a,
  ir as b,
  og as c,
  pg as d,
  _g as e,
  va as f,
  hg as i,
  fs as t
};
