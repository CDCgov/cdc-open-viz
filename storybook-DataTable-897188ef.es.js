import { r as yA, R as p } from "./storybook-index-45401197.es.js";
import { L as Mt, E as Pr, a as pa } from "./storybook-viewports-5c5d7af1.es.js";
import { P as Ea } from "./storybook-papaparse.min-b07ddc33.es.js";
import { i as ir, u as Bs, j as or, c as is, f as Ke, e as Ha, k as Le, h as xe, g as ma, l as De } from "./storybook-year-24bd1dc7.es.js";
import { n as Xr } from "./storybook-numberFromString-24623c03.es.js";
import { _ as Te } from "./storybook-lodash-a4231e1c.es.js";
import { a as va } from "./storybook-Icon-4f5978ba.es.js";
import { T as Ot } from "./storybook-Table-79b9238f.es.js";
const Jr = ({ skipId: e, skipMessage: A }) => {
  const t = yA.useId(), r = () => {
    const n = document.getElementById(e);
    if (n) {
      n.scrollIntoView(), n.setAttribute("tabIndex", "-1"), n.focus();
      const s = () => {
        n.removeAttribute("tabIndex"), n.removeEventListener("blur", s);
      };
      n.addEventListener("blur", s);
    }
  };
  return /* @__PURE__ */ p.createElement(
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
      "aria-label": A
    },
    A
  );
};
function Nt(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return A.setFullYear(e.y), A;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Rt(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return A.setUTCFullYear(e.y), A;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function le(e, A, t) {
  return { y: e, m: A, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function Ia(e) {
  var A = e.dateTime, t = e.date, r = e.time, n = e.periods, s = e.days, a = e.shortDays, B = e.months, i = e.shortMonths, o = ue(n), c = ge(n), l = ue(s), u = ge(s), Q = ue(a), g = ge(a), w = ue(B), f = ge(B), C = ue(i), d = ge(i), I = {
    a: z,
    A: CA,
    b: iA,
    B: uA,
    c: null,
    d: qr,
    e: qr,
    f: ja,
    g: aB,
    G: iB,
    H: Wa,
    I: Ya,
    j: Za,
    L: os,
    m: za,
    M: qa,
    p: UA,
    q: FA,
    Q: en,
    s: tn,
    S: $a,
    u: AB,
    U: eB,
    V: tB,
    w: rB,
    W: nB,
    x: null,
    X: null,
    y: sB,
    Y: BB,
    Z: oB,
    "%": An
  }, m = {
    a: cA,
    A: hA,
    b: D,
    B: _,
    c: null,
    d: $r,
    e: $r,
    f: gB,
    g: EB,
    G: mB,
    H: cB,
    I: lB,
    j: uB,
    L: ls,
    m: QB,
    M: wB,
    p: G,
    q: k,
    Q: en,
    s: tn,
    S: fB,
    u: CB,
    U: UB,
    V: FB,
    w: hB,
    W: dB,
    x: null,
    X: null,
    y: pB,
    Y: HB,
    Z: vB,
    "%": An
  }, v = {
    a: x,
    A: R,
    b: W,
    B: M,
    c: Y,
    d: jr,
    e: jr,
    f: _a,
    g: Zr,
    G: Yr,
    H: zr,
    I: zr,
    j: Ra,
    L: ka,
    m: Na,
    M: Ga,
    p: y,
    q: Oa,
    Q: Xa,
    s: Ja,
    S: Va,
    u: xa,
    U: Da,
    V: Ta,
    w: La,
    W: Sa,
    x: fA,
    X: eA,
    y: Zr,
    Y: Yr,
    Z: Ma,
    "%": Pa
  };
  I.x = F(t, I), I.X = F(r, I), I.c = F(A, I), m.x = F(t, m), m.X = F(r, m), m.c = F(A, m);
  function F(h, K) {
    return function(T) {
      var U = [], q = -1, P = 0, gA = h.length, QA, PA, _r;
      for (T instanceof Date || (T = /* @__PURE__ */ new Date(+T)); ++q < gA; )
        h.charCodeAt(q) === 37 && (U.push(h.slice(P, q)), (PA = Wr[QA = h.charAt(++q)]) != null ? QA = h.charAt(++q) : PA = QA === "e" ? " " : "0", (_r = K[QA]) && (QA = _r(T, PA)), U.push(QA), P = q + 1);
      return U.push(h.slice(P, q)), U.join("");
    };
  }
  function L(h, K) {
    return function(T) {
      var U = le(1900, void 0, 1), q = b(U, h, T += "", 0), P, gA;
      if (q != T.length)
        return null;
      if ("Q" in U)
        return new Date(U.Q);
      if ("s" in U)
        return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (K && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53)
          return null;
        "w" in U || (U.w = 1), "Z" in U ? (P = Rt(le(U.y, 0, 1)), gA = P.getUTCDay(), P = gA > 4 || gA === 0 ? ir.ceil(P) : ir(P), P = Bs.offset(P, (U.V - 1) * 7), U.y = P.getUTCFullYear(), U.m = P.getUTCMonth(), U.d = P.getUTCDate() + (U.w + 6) % 7) : (P = Nt(le(U.y, 0, 1)), gA = P.getDay(), P = gA > 4 || gA === 0 ? or.ceil(P) : or(P), P = is.offset(P, (U.V - 1) * 7), U.y = P.getFullYear(), U.m = P.getMonth(), U.d = P.getDate() + (U.w + 6) % 7);
      } else
        ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), gA = "Z" in U ? Rt(le(U.y, 0, 1)).getUTCDay() : Nt(le(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (gA + 5) % 7 : U.w + U.U * 7 - (gA + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Rt(U)) : Nt(U);
    };
  }
  function b(h, K, T, U) {
    for (var q = 0, P = K.length, gA = T.length, QA, PA; q < P; ) {
      if (U >= gA)
        return -1;
      if (QA = K.charCodeAt(q++), QA === 37) {
        if (QA = K.charAt(q++), PA = v[QA in Wr ? K.charAt(q++) : QA], !PA || (U = PA(h, T, U)) < 0)
          return -1;
      } else if (QA != T.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function y(h, K, T) {
    var U = o.exec(K.slice(T));
    return U ? (h.p = c.get(U[0].toLowerCase()), T + U[0].length) : -1;
  }
  function x(h, K, T) {
    var U = Q.exec(K.slice(T));
    return U ? (h.w = g.get(U[0].toLowerCase()), T + U[0].length) : -1;
  }
  function R(h, K, T) {
    var U = l.exec(K.slice(T));
    return U ? (h.w = u.get(U[0].toLowerCase()), T + U[0].length) : -1;
  }
  function W(h, K, T) {
    var U = C.exec(K.slice(T));
    return U ? (h.m = d.get(U[0].toLowerCase()), T + U[0].length) : -1;
  }
  function M(h, K, T) {
    var U = w.exec(K.slice(T));
    return U ? (h.m = f.get(U[0].toLowerCase()), T + U[0].length) : -1;
  }
  function Y(h, K, T) {
    return b(h, A, K, T);
  }
  function fA(h, K, T) {
    return b(h, t, K, T);
  }
  function eA(h, K, T) {
    return b(h, r, K, T);
  }
  function z(h) {
    return a[h.getDay()];
  }
  function CA(h) {
    return s[h.getDay()];
  }
  function iA(h) {
    return i[h.getMonth()];
  }
  function uA(h) {
    return B[h.getMonth()];
  }
  function UA(h) {
    return n[+(h.getHours() >= 12)];
  }
  function FA(h) {
    return 1 + ~~(h.getMonth() / 3);
  }
  function cA(h) {
    return a[h.getUTCDay()];
  }
  function hA(h) {
    return s[h.getUTCDay()];
  }
  function D(h) {
    return i[h.getUTCMonth()];
  }
  function _(h) {
    return B[h.getUTCMonth()];
  }
  function G(h) {
    return n[+(h.getUTCHours() >= 12)];
  }
  function k(h) {
    return 1 + ~~(h.getUTCMonth() / 3);
  }
  return {
    format: function(h) {
      var K = F(h += "", I);
      return K.toString = function() {
        return h;
      }, K;
    },
    parse: function(h) {
      var K = L(h += "", !1);
      return K.toString = function() {
        return h;
      }, K;
    },
    utcFormat: function(h) {
      var K = F(h += "", m);
      return K.toString = function() {
        return h;
      }, K;
    },
    utcParse: function(h) {
      var K = L(h += "", !0);
      return K.toString = function() {
        return h;
      }, K;
    }
  };
}
var Wr = { "-": "", _: " ", 0: "0" }, rA = /^\s*\d+/, ya = /^%/, ba = /[\\^$*+?|[\]().{}]/g;
function O(e, A, t) {
  var r = e < 0 ? "-" : "", n = (r ? -e : e) + "", s = n.length;
  return r + (s < t ? new Array(t - s + 1).join(A) + n : n);
}
function Ka(e) {
  return e.replace(ba, "\\$&");
}
function ue(e) {
  return new RegExp("^(?:" + e.map(Ka).join("|") + ")", "i");
}
function ge(e) {
  return new Map(e.map((A, t) => [A.toLowerCase(), t]));
}
function La(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.w = +r[0], t + r[0].length) : -1;
}
function xa(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.u = +r[0], t + r[0].length) : -1;
}
function Da(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.U = +r[0], t + r[0].length) : -1;
}
function Ta(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.V = +r[0], t + r[0].length) : -1;
}
function Sa(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.W = +r[0], t + r[0].length) : -1;
}
function Yr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 4));
  return r ? (e.y = +r[0], t + r[0].length) : -1;
}
function Zr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), t + r[0].length) : -1;
}
function Ma(e, A, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(A.slice(t, t + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function Oa(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function Na(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.m = r[0] - 1, t + r[0].length) : -1;
}
function jr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.d = +r[0], t + r[0].length) : -1;
}
function Ra(e, A, t) {
  var r = rA.exec(A.slice(t, t + 3));
  return r ? (e.m = 0, e.d = +r[0], t + r[0].length) : -1;
}
function zr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.H = +r[0], t + r[0].length) : -1;
}
function Ga(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.M = +r[0], t + r[0].length) : -1;
}
function Va(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.S = +r[0], t + r[0].length) : -1;
}
function ka(e, A, t) {
  var r = rA.exec(A.slice(t, t + 3));
  return r ? (e.L = +r[0], t + r[0].length) : -1;
}
function _a(e, A, t) {
  var r = rA.exec(A.slice(t, t + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function Pa(e, A, t) {
  var r = ya.exec(A.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function Xa(e, A, t) {
  var r = rA.exec(A.slice(t));
  return r ? (e.Q = +r[0], t + r[0].length) : -1;
}
function Ja(e, A, t) {
  var r = rA.exec(A.slice(t));
  return r ? (e.s = +r[0], t + r[0].length) : -1;
}
function qr(e, A) {
  return O(e.getDate(), A, 2);
}
function Wa(e, A) {
  return O(e.getHours(), A, 2);
}
function Ya(e, A) {
  return O(e.getHours() % 12 || 12, A, 2);
}
function Za(e, A) {
  return O(1 + is.count(Ke(e), e), A, 3);
}
function os(e, A) {
  return O(e.getMilliseconds(), A, 3);
}
function ja(e, A) {
  return os(e, A) + "000";
}
function za(e, A) {
  return O(e.getMonth() + 1, A, 2);
}
function qa(e, A) {
  return O(e.getMinutes(), A, 2);
}
function $a(e, A) {
  return O(e.getSeconds(), A, 2);
}
function AB(e) {
  var A = e.getDay();
  return A === 0 ? 7 : A;
}
function eB(e, A) {
  return O(Ha.count(Ke(e) - 1, e), A, 2);
}
function cs(e) {
  var A = e.getDay();
  return A >= 4 || A === 0 ? Le(e) : Le.ceil(e);
}
function tB(e, A) {
  return e = cs(e), O(Le.count(Ke(e), e) + (Ke(e).getDay() === 4), A, 2);
}
function rB(e) {
  return e.getDay();
}
function nB(e, A) {
  return O(or.count(Ke(e) - 1, e), A, 2);
}
function sB(e, A) {
  return O(e.getFullYear() % 100, A, 2);
}
function aB(e, A) {
  return e = cs(e), O(e.getFullYear() % 100, A, 2);
}
function BB(e, A) {
  return O(e.getFullYear() % 1e4, A, 4);
}
function iB(e, A) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? Le(e) : Le.ceil(e), O(e.getFullYear() % 1e4, A, 4);
}
function oB(e) {
  var A = e.getTimezoneOffset();
  return (A > 0 ? "-" : (A *= -1, "+")) + O(A / 60 | 0, "0", 2) + O(A % 60, "0", 2);
}
function $r(e, A) {
  return O(e.getUTCDate(), A, 2);
}
function cB(e, A) {
  return O(e.getUTCHours(), A, 2);
}
function lB(e, A) {
  return O(e.getUTCHours() % 12 || 12, A, 2);
}
function uB(e, A) {
  return O(1 + Bs.count(xe(e), e), A, 3);
}
function ls(e, A) {
  return O(e.getUTCMilliseconds(), A, 3);
}
function gB(e, A) {
  return ls(e, A) + "000";
}
function QB(e, A) {
  return O(e.getUTCMonth() + 1, A, 2);
}
function wB(e, A) {
  return O(e.getUTCMinutes(), A, 2);
}
function fB(e, A) {
  return O(e.getUTCSeconds(), A, 2);
}
function CB(e) {
  var A = e.getUTCDay();
  return A === 0 ? 7 : A;
}
function UB(e, A) {
  return O(ma.count(xe(e) - 1, e), A, 2);
}
function us(e) {
  var A = e.getUTCDay();
  return A >= 4 || A === 0 ? De(e) : De.ceil(e);
}
function FB(e, A) {
  return e = us(e), O(De.count(xe(e), e) + (xe(e).getUTCDay() === 4), A, 2);
}
function hB(e) {
  return e.getUTCDay();
}
function dB(e, A) {
  return O(ir.count(xe(e) - 1, e), A, 2);
}
function pB(e, A) {
  return O(e.getUTCFullYear() % 100, A, 2);
}
function EB(e, A) {
  return e = us(e), O(e.getUTCFullYear() % 100, A, 2);
}
function HB(e, A) {
  return O(e.getUTCFullYear() % 1e4, A, 4);
}
function mB(e, A) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? De(e) : De.ceil(e), O(e.getUTCFullYear() % 1e4, A, 4);
}
function vB() {
  return "+0000";
}
function An() {
  return "%";
}
function en(e) {
  return +e;
}
function tn(e) {
  return Math.floor(+e / 1e3);
}
var jA, gs, wt;
IB({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function IB(e) {
  return jA = Ia(e), gs = jA.format, wt = jA.parse, jA.utcFormat, jA.utcParse, jA;
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
var cr = function(e, A) {
  return cr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, cr(e, A);
};
function vA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  cr(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var lr = function() {
  return lr = Object.assign || function(A) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (A[s] = t[s]);
    }
    return A;
  }, lr.apply(this, arguments);
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
function Ge(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = A.length, s; r < n; r++)
      (s || !(r in A)) && (s || (s = Array.prototype.slice.call(A, 0, r)), s[r] = A[r]);
  return e.concat(s || A);
}
var TA = (
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
), vt = function(e, A) {
  return TA.fromClientRect(e, A.getBoundingClientRect());
}, yB = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new TA(0, 0, r, n);
}, It = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, j = function() {
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
}, rn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ve = 0; Ve < rn.length; Ve++)
  bB[rn.charCodeAt(Ve)] = Ve;
var nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ue = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ke = 0; ke < nn.length; ke++)
  Ue[nn.charCodeAt(ke)] = ke;
var KB = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, s, a, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    s = Ue[e.charCodeAt(r)], a = Ue[e.charCodeAt(r + 1)], B = Ue[e.charCodeAt(r + 2)], i = Ue[e.charCodeAt(r + 3)], c[n++] = s << 2 | a >> 4, c[n++] = (a & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, LB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, xB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, YA = 5, Mr = 6 + 5, Gt = 2, DB = Mr - YA, Qs = 65536 >> YA, TB = 1 << YA, Vt = TB - 1, SB = 1024 >> YA, MB = Qs + SB, OB = MB, NB = 32, RB = OB + NB, GB = 65536 >> Mr, VB = 1 << DB, kB = VB - 1, sn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, _B = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, PB = function(e, A) {
  var t = KB(e), r = Array.isArray(t) ? xB(t) : new Uint32Array(t), n = Array.isArray(t) ? LB(t) : new Uint16Array(t), s = 24, a = sn(n, s / 2, r[4] / 2), B = r[5] === 2 ? sn(n, (s + r[4]) / 2) : _B(r, Math.ceil((s + r[4]) / 4));
  return new XB(r[0], r[1], r[2], r[3], a, B);
}, XB = (
  /** @class */
  function() {
    function e(A, t, r, n, s, a) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = a;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> YA], t = (t << Gt) + (A & Vt), this.data[t];
        if (A <= 65535)
          return t = this.index[Qs + (A - 55296 >> YA)], t = (t << Gt) + (A & Vt), this.data[t];
        if (A < this.highStart)
          return t = RB - GB + (A >> Mr), t = this.index[t], t += A >> YA & kB, t = this.index[t], t = (t << Gt) + (A & Vt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), an = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", JB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var _e = 0; _e < an.length; _e++)
  JB[an.charCodeAt(_e)] = _e;
var WB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Bn = 50, YB = 1, ws = 2, fs = 3, ZB = 4, jB = 5, on = 7, Cs = 8, cn = 9, NA = 10, ur = 11, ln = 12, gr = 13, zB = 14, Fe = 15, Qr = 16, Pe = 17, Qe = 18, qB = 19, un = 20, wr = 21, we = 22, kt = 23, zA = 24, wA = 25, he = 26, de = 27, qA = 28, $B = 29, JA = 30, Ai = 31, Xe = 32, Je = 33, fr = 34, Cr = 35, Ur = 36, Se = 37, Fr = 38, ot = 39, ct = 40, _t = 41, Us = 42, ei = 43, ti = [9001, 65288], Fs = "!", S = "×", We = "÷", hr = PB(WB), LA = [JA, Ur], dr = [YB, ws, fs, jB], hs = [NA, Cs], gn = [de, he], ri = dr.concat(hs), Qn = [Fr, ot, ct, fr, Cr], ni = [Fe, gr], si = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(s, a) {
    var B = hr.get(s);
    if (B > Bn ? (n.push(!0), B -= Bn) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(s) !== -1)
      return r.push(a), t.push(Qr);
    if (B === ZB || B === ur) {
      if (a === 0)
        return r.push(a), t.push(JA);
      var i = t[a - 1];
      return ri.indexOf(i) === -1 ? (r.push(r[a - 1]), t.push(i)) : (r.push(a), t.push(JA));
    }
    if (r.push(a), B === Ai)
      return t.push(A === "strict" ? wr : Se);
    if (B === Us || B === $B)
      return t.push(JA);
    if (B === ei)
      return s >= 131072 && s <= 196605 || s >= 196608 && s <= 262141 ? t.push(Se) : t.push(JA);
    t.push(B);
  }), [r, t, n];
}, Pt = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var s = t; s <= r.length; ) {
      s++;
      var a = r[s];
      if (a === A)
        return !0;
      if (a !== NA)
        break;
    }
  if (n === NA)
    for (var s = t; s > 0; ) {
      s--;
      var B = r[s];
      if (Array.isArray(e) ? e.indexOf(B) !== -1 : e === B)
        for (var i = t; i <= r.length; ) {
          i++;
          var a = r[i];
          if (a === A)
            return !0;
          if (a !== NA)
            break;
        }
      if (B !== NA)
        break;
    }
  return !1;
}, wn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === NA)
      t--;
    else
      return r;
  }
  return 0;
}, ai = function(e, A, t, r, n) {
  if (t[r] === 0)
    return S;
  var s = r - 1;
  if (Array.isArray(n) && n[s] === !0)
    return S;
  var a = s - 1, B = s + 1, i = A[s], o = a >= 0 ? A[a] : 0, c = A[B];
  if (i === ws && c === fs)
    return S;
  if (dr.indexOf(i) !== -1)
    return Fs;
  if (dr.indexOf(c) !== -1 || hs.indexOf(c) !== -1)
    return S;
  if (wn(s, A) === Cs)
    return We;
  if (hr.get(e[s]) === ur || (i === Xe || i === Je) && hr.get(e[B]) === ur || i === on || c === on || i === cn || [NA, gr, Fe].indexOf(i) === -1 && c === cn || [Pe, Qe, qB, zA, qA].indexOf(c) !== -1 || wn(s, A) === we || Pt(kt, we, s, A) || Pt([Pe, Qe], wr, s, A) || Pt(ln, ln, s, A))
    return S;
  if (i === NA)
    return We;
  if (i === kt || c === kt)
    return S;
  if (c === Qr || i === Qr)
    return We;
  if ([gr, Fe, wr].indexOf(c) !== -1 || i === zB || o === Ur && ni.indexOf(i) !== -1 || i === qA && c === Ur || c === un || LA.indexOf(c) !== -1 && i === wA || LA.indexOf(i) !== -1 && c === wA || i === de && [Se, Xe, Je].indexOf(c) !== -1 || [Se, Xe, Je].indexOf(i) !== -1 && c === he || LA.indexOf(i) !== -1 && gn.indexOf(c) !== -1 || gn.indexOf(i) !== -1 && LA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [de, he].indexOf(i) !== -1 && (c === wA || [we, Fe].indexOf(c) !== -1 && A[B + 1] === wA) || // ( OP | HY ) × NU
  [we, Fe].indexOf(i) !== -1 && c === wA || // NU ×	(NU | SY | IS)
  i === wA && [wA, qA, zA].indexOf(c) !== -1)
    return S;
  if ([wA, qA, zA, Pe, Qe].indexOf(c) !== -1)
    for (var l = s; l >= 0; ) {
      var u = A[l];
      if (u === wA)
        return S;
      if ([qA, zA].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if ([de, he].indexOf(c) !== -1)
    for (var l = [Pe, Qe].indexOf(i) !== -1 ? a : s; l >= 0; ) {
      var u = A[l];
      if (u === wA)
        return S;
      if ([qA, zA].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if (Fr === i && [Fr, ot, fr, Cr].indexOf(c) !== -1 || [ot, fr].indexOf(i) !== -1 && [ot, ct].indexOf(c) !== -1 || [ct, Cr].indexOf(i) !== -1 && c === ct || Qn.indexOf(i) !== -1 && [un, he].indexOf(c) !== -1 || Qn.indexOf(c) !== -1 && i === de || LA.indexOf(i) !== -1 && LA.indexOf(c) !== -1 || i === zA && LA.indexOf(c) !== -1 || LA.concat(wA).indexOf(i) !== -1 && c === we && ti.indexOf(e[B]) === -1 || LA.concat(wA).indexOf(c) !== -1 && i === Qe)
    return S;
  if (i === _t && c === _t) {
    for (var Q = t[s], g = 1; Q > 0 && (Q--, A[Q] === _t); )
      g++;
    if (g % 2 !== 0)
      return S;
  }
  return i === Xe && c === Je ? S : We;
}, Bi = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = si(e, A.lineBreak), r = t[0], n = t[1], s = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(B) {
    return [wA, JA, Us].indexOf(B) !== -1 ? Se : B;
  }));
  var a = A.wordBreak === "keep-all" ? s.map(function(B, i) {
    return B && e[i] >= 19968 && e[i] <= 40959;
  }) : void 0;
  return [r, n, a];
}, ii = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === Fs, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return j.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), oi = function(e, A) {
  var t = It(e), r = Bi(t, A), n = r[0], s = r[1], a = r[2], B = t.length, i = 0, o = 0;
  return {
    next: function() {
      if (o >= B)
        return { done: !0, value: null };
      for (var c = S; o < B && (c = ai(t, s, n, ++o, a)) === S; )
        ;
      if (c !== S || o === B) {
        var l = new ii(t, c, i, o);
        return i = o, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, ci = 1, li = 2, Ne = 4, fn = 8, ft = 10, Cn = 47, me = 92, ui = 9, gi = 32, Ye = 34, fe = 61, Qi = 35, wi = 36, fi = 37, Ze = 39, je = 40, Ce = 41, Ci = 95, lA = 45, Ui = 33, Fi = 60, hi = 62, di = 64, pi = 91, Ei = 93, Hi = 61, mi = 123, ze = 63, vi = 125, Un = 124, Ii = 126, yi = 128, Fn = 65533, Xt = 42, WA = 43, bi = 44, Ki = 58, Li = 59, Me = 46, xi = 0, Di = 8, Ti = 11, Si = 14, Mi = 31, Oi = 127, IA = -1, ds = 48, ps = 97, Es = 101, Ni = 102, Ri = 117, Gi = 122, Hs = 65, ms = 69, vs = 70, Vi = 85, ki = 90, BA = function(e) {
  return e >= ds && e <= 57;
}, _i = function(e) {
  return e >= 55296 && e <= 57343;
}, $A = function(e) {
  return BA(e) || e >= Hs && e <= vs || e >= ps && e <= Ni;
}, Pi = function(e) {
  return e >= ps && e <= Gi;
}, Xi = function(e) {
  return e >= Hs && e <= ki;
}, Ji = function(e) {
  return Pi(e) || Xi(e);
}, Wi = function(e) {
  return e >= yi;
}, qe = function(e) {
  return e === ft || e === ui || e === gi;
}, Ct = function(e) {
  return Ji(e) || Wi(e) || e === Ci;
}, hn = function(e) {
  return Ct(e) || BA(e) || e === lA;
}, Yi = function(e) {
  return e >= xi && e <= Di || e === Ti || e >= Si && e <= Mi || e === Oi;
}, OA = function(e, A) {
  return e !== me ? !1 : A !== ft;
}, $e = function(e, A, t) {
  return e === lA ? Ct(A) || OA(A, t) : Ct(e) ? !0 : !!(e === me && OA(e, A));
}, Jt = function(e, A, t) {
  return e === WA || e === lA ? BA(A) ? !0 : A === Me && BA(t) : BA(e === Me ? A : e);
}, Zi = function(e) {
  var A = 0, t = 1;
  (e[A] === WA || e[A] === lA) && (e[A] === lA && (t = -1), A++);
  for (var r = []; BA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(j.apply(void 0, r), 10) : 0;
  e[A] === Me && A++;
  for (var s = []; BA(e[A]); )
    s.push(e[A++]);
  var a = s.length, B = a ? parseInt(j.apply(void 0, s), 10) : 0;
  (e[A] === ms || e[A] === Es) && A++;
  var i = 1;
  (e[A] === WA || e[A] === lA) && (e[A] === lA && (i = -1), A++);
  for (var o = []; BA(e[A]); )
    o.push(e[A++]);
  var c = o.length ? parseInt(j.apply(void 0, o), 10) : 0;
  return t * (n + B * Math.pow(10, -a)) * Math.pow(10, i * c);
}, ji = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, zi = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, qi = {
  type: 4
  /* COMMA_TOKEN */
}, $i = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, Ao = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, eo = {
  type: 21
  /* COLUMN_TOKEN */
}, to = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, ro = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, no = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, so = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, ao = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, At = {
  type: 23
  /* BAD_URL_TOKEN */
}, Bo = {
  type: 1
  /* BAD_STRING_TOKEN */
}, io = {
  type: 25
  /* CDO_TOKEN */
}, oo = {
  type: 24
  /* CDC_TOKEN */
}, co = {
  type: 26
  /* COLON_TOKEN */
}, lo = {
  type: 27
  /* SEMICOLON_TOKEN */
}, uo = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, go = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, Qo = {
  type: 31
  /* WHITESPACE_TOKEN */
}, pr = {
  type: 32
  /* EOF_TOKEN */
}, Is = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(It(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== pr; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Ye:
          return this.consumeStringToken(Ye);
        case Qi:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (hn(t) || OA(r, n)) {
            var s = $e(t, r, n) ? li : ci, a = this.consumeName();
            return { type: 5, value: a, flags: s };
          }
          break;
        case wi:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), $i;
          break;
        case Ze:
          return this.consumeStringToken(Ze);
        case je:
          return ji;
        case Ce:
          return zi;
        case Xt:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), ao;
          break;
        case WA:
          if (Jt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case bi:
          return qi;
        case lA:
          var B = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (Jt(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if ($e(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === lA && o === hi)
            return this.consumeCodePoint(), this.consumeCodePoint(), oo;
          break;
        case Me:
          if (Jt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Cn:
          if (this.peekCodePoint(0) === Xt)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === Xt && (c = this.consumeCodePoint(), c === Cn))
                return this.consumeToken();
              if (c === IA)
                return this.consumeToken();
            }
          break;
        case Ki:
          return co;
        case Li:
          return lo;
        case Fi:
          if (this.peekCodePoint(0) === Ui && this.peekCodePoint(1) === lA && this.peekCodePoint(2) === lA)
            return this.consumeCodePoint(), this.consumeCodePoint(), io;
          break;
        case di:
          var l = this.peekCodePoint(0), u = this.peekCodePoint(1), Q = this.peekCodePoint(2);
          if ($e(l, u, Q)) {
            var a = this.consumeName();
            return { type: 7, value: a };
          }
          break;
        case pi:
          return uo;
        case me:
          if (OA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case Ei:
          return go;
        case Hi:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), Ao;
          break;
        case mi:
          return no;
        case vi:
          return so;
        case Ri:
        case Vi:
          var g = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return g === WA && ($A(w) || w === ze) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Un:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), to;
          if (this.peekCodePoint(0) === Un)
            return this.consumeCodePoint(), eo;
          break;
        case Ii:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), ro;
          break;
        case IA:
          return pr;
      }
      return qe(A) ? (this.consumeWhiteSpace(), Qo) : BA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Ct(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: j(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); $A(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === ze && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(j.apply(void 0, A.map(function(i) {
          return i === ze ? ds : i;
        })), 16), s = parseInt(j.apply(void 0, A.map(function(i) {
          return i === ze ? vs : i;
        })), 16);
        return { type: 30, start: n, end: s };
      }
      var a = parseInt(j.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === lA && $A(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var B = []; $A(t) && B.length < 6; )
          B.push(t), t = this.consumeCodePoint();
        var s = parseInt(j.apply(void 0, B), 16);
        return { type: 30, start: a, end: s };
      } else
        return { type: 30, start: a, end: a };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === je ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === je ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === IA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ze || t === Ye) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === IA || this.peekCodePoint(0) === Ce) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), At);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === IA || n === Ce)
          return { type: 22, value: j.apply(void 0, A) };
        if (qe(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === IA || this.peekCodePoint(0) === Ce ? (this.consumeCodePoint(), { type: 22, value: j.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), At);
        if (n === Ye || n === Ze || n === je || Yi(n))
          return this.consumeBadUrlRemnants(), At;
        if (n === me)
          if (OA(n, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), At;
        else
          A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; qe(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === Ce || A === IA)
          return;
        OA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var n = Math.min(t, A);
        r += j.apply(void 0, this._value.splice(0, n)), A -= n;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === IA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === ft)
          return this._value.splice(0, r), Bo;
        if (n === me) {
          var s = this._value[r + 1];
          s !== IA && s !== void 0 && (s === ft ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : OA(n, s) && (t += this.consumeStringSlice(r), t += j(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Ne, r = this.peekCodePoint(0);
      for ((r === WA || r === lA) && A.push(this.consumeCodePoint()); BA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Me && BA(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = fn; BA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var s = this.peekCodePoint(2);
      if ((r === ms || r === Es) && ((n === WA || n === lA) && BA(s) || BA(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = fn; BA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [Zi(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), s = this.peekCodePoint(1), a = this.peekCodePoint(2);
      if ($e(n, s, a)) {
        var B = this.consumeName();
        return { type: 15, number: t, flags: r, unit: B };
      }
      return n === fi ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if ($A(A)) {
        for (var t = j(A); $A(this.peekCodePoint(0)) && t.length < 6; )
          t += j(this.consumeCodePoint());
        qe(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || _i(r) || r > 1114111 ? Fn : r;
      }
      return A === IA ? Fn : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (hn(t))
          A += j(t);
        else if (OA(t, this.peekCodePoint(0)))
          A += j(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  }()
), ys = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new Is();
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
        if (r.type === 32 || fo(r, A))
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
      return typeof A > "u" ? pr : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  }()
), Re = function(e) {
  return e.type === 15;
}, ce = function(e) {
  return e.type === 17;
}, V = function(e) {
  return e.type === 20;
}, wo = function(e) {
  return e.type === 0;
}, Er = function(e, A) {
  return V(e) && e.value === A;
}, bs = function(e) {
  return e.type !== 31;
}, ie = function(e) {
  return e.type !== 31 && e.type !== 4;
}, bA = function(e) {
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
}, fo = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, _A = function(e) {
  return e.type === 17 || e.type === 15;
}, $ = function(e) {
  return e.type === 16 || _A(e);
}, Ks = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, sA = {
  type: 17,
  number: 0,
  flags: Ne
}, Or = {
  type: 16,
  number: 50,
  flags: Ne
}, RA = {
  type: 16,
  number: 100,
  flags: Ne
}, pe = function(e, A, t) {
  var r = e[0], n = e[1];
  return [X(r, A), X(typeof n < "u" ? n : r, t)];
}, X = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (Re(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, Ls = "deg", xs = "grad", Ds = "rad", Ts = "turn", yt = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case Ls:
          return Math.PI * A.number / 180;
        case xs:
          return Math.PI / 200 * A.number;
        case Ds:
          return A.number;
        case Ts:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Ss = function(e) {
  return e.type === 15 && (e.unit === Ls || e.unit === xs || e.unit === Ds || e.unit === Ts);
}, Ms = function(e) {
  var A = e.filter(V).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [sA, sA];
    case "to top":
    case "bottom":
      return EA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [sA, RA];
    case "to right":
    case "left":
      return EA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [RA, RA];
    case "to bottom":
    case "top":
      return EA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [RA, sA];
    case "to left":
    case "right":
      return EA(270);
  }
  return 0;
}, EA = function(e) {
  return Math.PI * e / 180;
}, VA = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = Co[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
        return GA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3), a = A.value.substring(3, 4);
        return GA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(a + a, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6);
        return GA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), a = A.value.substring(6, 8);
        return GA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(a, 16) / 255);
      }
    }
    if (A.type === 20) {
      var B = DA[A.value.toUpperCase()];
      if (typeof B < "u")
        return B;
    }
    return DA.TRANSPARENT;
  }
}, kA = function(e) {
  return (255 & e) === 0;
}, tA = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, GA = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, dn = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, pn = function(e, A) {
  var t = A.filter(ie);
  if (t.length === 3) {
    var r = t.map(dn), n = r[0], s = r[1], a = r[2];
    return GA(n, s, a, 1);
  }
  if (t.length === 4) {
    var B = t.map(dn), n = B[0], s = B[1], a = B[2], i = B[3];
    return GA(n, s, a, i);
  }
  return 0;
};
function Wt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var En = function(e, A) {
  var t = A.filter(ie), r = t[0], n = t[1], s = t[2], a = t[3], B = (r.type === 17 ? EA(r.number) : yt.parse(e, r)) / (Math.PI * 2), i = $(n) ? n.number / 100 : 0, o = $(s) ? s.number / 100 : 0, c = typeof a < "u" && $(a) ? X(a, 1) : 1;
  if (i === 0)
    return GA(o * 255, o * 255, o * 255, 1);
  var l = o <= 0.5 ? o * (i + 1) : o + i - o * i, u = o * 2 - l, Q = Wt(u, l, B + 1 / 3), g = Wt(u, l, B), w = Wt(u, l, B - 1 / 3);
  return GA(Q * 255, g * 255, w * 255, c);
}, Co = {
  hsl: En,
  hsla: En,
  rgb: pn,
  rgba: pn
}, ve = function(e, A) {
  return VA.parse(e, ys.create(A).parseComponentValue());
}, DA = {
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
}, Uo = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (V(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Fo = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, bt = function(e, A) {
  var t = VA.parse(e, A[0]), r = A[1];
  return r && $(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Hn = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = sA), r.stop === null && (r.stop = RA);
  for (var n = [], s = 0, a = 0; a < e.length; a++) {
    var B = e[a].stop;
    if (B !== null) {
      var i = X(B, A);
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
  return e.map(function(w, f) {
    var C = w.color;
    return { color: C, stop: Math.max(Math.min(1, n[f] / A), 0) };
  });
}, ho = function(e, A, t) {
  var r = A / 2, n = t / 2, s = X(e[0], A) - r, a = n - X(e[1], t);
  return (Math.atan2(a, s) + Math.PI * 2) % (Math.PI * 2);
}, po = function(e, A, t) {
  var r = typeof e == "number" ? e : ho(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = A / 2, a = t / 2, B = n / 2, i = Math.sin(r - Math.PI / 2) * B, o = Math.cos(r - Math.PI / 2) * B;
  return [n, s - o, s + o, a - i, a + i];
}, mA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, mn = function(e, A, t, r, n) {
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
}, Eo = function(e, A, t, r, n) {
  var s = 0, a = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? s = a = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.min(Math.abs(A), Math.abs(A - r)), a = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        s = a = Math.min(mA(A, t), mA(A, t - n), mA(A - r, t), mA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), i = mn(r, n, A, t, !0), o = i[0], c = i[1];
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
        var B = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), l = mn(r, n, A, t, !1), o = l[0], c = l[1];
        s = mA(o - A, (c - t) / B), a = B * s;
      }
      break;
  }
  return Array.isArray(e.size) && (s = X(e.size[0], r), a = e.size.length === 2 ? X(e.size[1], n) : s), [s, a];
}, Ho = function(e, A) {
  var t = EA(180), r = [];
  return bA(A).forEach(function(n, s) {
    if (s === 0) {
      var a = n[0];
      if (a.type === 20 && a.value === "to") {
        t = Ms(n);
        return;
      } else if (Ss(a)) {
        t = yt.parse(e, a);
        return;
      }
    }
    var B = bt(e, n);
    r.push(B);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, et = function(e, A) {
  var t = EA(180), r = [];
  return bA(A).forEach(function(n, s) {
    if (s === 0) {
      var a = n[0];
      if (a.type === 20 && ["top", "left", "right", "bottom"].indexOf(a.value) !== -1) {
        t = Ms(n);
        return;
      } else if (Ss(a)) {
        t = (yt.parse(e, a) + EA(270)) % EA(360);
        return;
      }
    }
    var B = bt(e, n);
    r.push(B);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, mo = function(e, A) {
  var t = EA(180), r = [], n = 1, s = 0, a = 3, B = [];
  return bA(A).forEach(function(i, o) {
    var c = i[0];
    if (o === 0) {
      if (V(c) && c.value === "linear") {
        n = 1;
        return;
      } else if (V(c) && c.value === "radial") {
        n = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var l = VA.parse(e, c.values[0]);
        r.push({ stop: sA, color: l });
      } else if (c.name === "to") {
        var l = VA.parse(e, c.values[0]);
        r.push({ stop: RA, color: l });
      } else if (c.name === "color-stop") {
        var u = c.values.filter(ie);
        if (u.length === 2) {
          var l = VA.parse(e, u[1]), Q = u[0];
          ce(Q) && r.push({
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
}, Os = "closest-side", Ns = "farthest-side", Rs = "closest-corner", Gs = "farthest-corner", Vs = "circle", ks = "ellipse", _s = "cover", Ps = "contain", vo = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return bA(A).forEach(function(a, B) {
    var i = !0;
    if (B === 0) {
      var o = !1;
      i = a.reduce(function(l, u) {
        if (o)
          if (V(u))
            switch (u.value) {
              case "center":
                return s.push(Or), l;
              case "top":
              case "left":
                return s.push(sA), l;
              case "right":
              case "bottom":
                return s.push(RA), l;
            }
          else
            ($(u) || _A(u)) && s.push(u);
        else if (V(u))
          switch (u.value) {
            case Vs:
              return t = 0, !1;
            case ks:
              return t = 1, !1;
            case "at":
              return o = !0, !1;
            case Os:
              return r = 0, !1;
            case _s:
            case Ns:
              return r = 1, !1;
            case Ps:
            case Rs:
              return r = 2, !1;
            case Gs:
              return r = 3, !1;
          }
        else if (_A(u) || $(u))
          return Array.isArray(r) || (r = []), r.push(u), !1;
        return l;
      }, i);
    }
    if (i) {
      var c = bt(e, a);
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
}, tt = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return bA(A).forEach(function(a, B) {
    var i = !0;
    if (B === 0 ? i = a.reduce(function(c, l) {
      if (V(l))
        switch (l.value) {
          case "center":
            return s.push(Or), !1;
          case "top":
          case "left":
            return s.push(sA), !1;
          case "right":
          case "bottom":
            return s.push(RA), !1;
        }
      else if ($(l) || _A(l))
        return s.push(l), !1;
      return c;
    }, i) : B === 1 && (i = a.reduce(function(c, l) {
      if (V(l))
        switch (l.value) {
          case Vs:
            return t = 0, !1;
          case ks:
            return t = 1, !1;
          case Ps:
          case Os:
            return r = 0, !1;
          case Ns:
            return r = 1, !1;
          case Rs:
            return r = 2, !1;
          case _s:
          case Gs:
            return r = 3, !1;
        }
      else if (_A(l) || $(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return c;
    }, i)), i) {
      var o = bt(e, a);
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
}, Io = function(e) {
  return e.type === 1;
}, yo = function(e) {
  return e.type === 2;
}, Nr = {
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
      var r = Xs[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function bo(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Xs[e.name]);
}
var Xs = {
  "linear-gradient": Ho,
  "-moz-linear-gradient": et,
  "-ms-linear-gradient": et,
  "-o-linear-gradient": et,
  "-webkit-linear-gradient": et,
  "radial-gradient": vo,
  "-moz-radial-gradient": tt,
  "-ms-radial-gradient": tt,
  "-o-radial-gradient": tt,
  "-webkit-radial-gradient": tt,
  "-webkit-gradient": mo
}, Ko = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return ie(r) && bo(r);
    }).map(function(r) {
      return Nr.parse(e, r);
    });
  }
}, Lo = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (V(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, xo = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return bA(A).map(function(t) {
      return t.filter($);
    }).map(Ks);
  }
}, Do = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return bA(A).map(function(t) {
      return t.filter(V).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(To);
  }
}, To = function(e) {
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
var So = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return bA(A).map(function(t) {
      return t.filter(Mo);
    });
  }
}, Mo = function(e) {
  return V(e) || $(e);
}, Kt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Oo = Kt("top"), No = Kt("right"), Ro = Kt("bottom"), Go = Kt("left"), Lt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return Ks(t.filter($));
    }
  };
}, Vo = Lt("top-left"), ko = Lt("top-right"), _o = Lt("bottom-right"), Po = Lt("bottom-left"), xt = function(e) {
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
}, Xo = xt("top"), Jo = xt("right"), Wo = xt("bottom"), Yo = xt("left"), Dt = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return Re(t) ? t.number : 0;
    }
  };
}, Zo = Dt("top"), jo = Dt("right"), zo = Dt("bottom"), qo = Dt("left"), $o = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Ac = {
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
}, ec = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(V).reduce(
      function(t, r) {
        return t | tc(r.value);
      },
      0
      /* NONE */
    );
  }
}, tc = function(e) {
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
}, rc = {
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
}, nc = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, Ut;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Ut || (Ut = {}));
var sc = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return Ut.STRICT;
      case "normal":
      default:
        return Ut.NORMAL;
    }
  }
}, ac = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, vn = function(e, A) {
  return V(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : $(e) ? X(e, A) : A;
}, Bc = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Nr.parse(e, A);
  }
}, ic = {
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
}, Hr = {
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
}, Tt = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, oc = Tt("top"), cc = Tt("right"), lc = Tt("bottom"), uc = Tt("left"), gc = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(V).map(function(t) {
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
}, Qc = {
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
}, St = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, wc = St("top"), fc = St("right"), Cc = St("bottom"), Uc = St("left"), Fc = {
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
}, hc = {
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
}, dc = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Er(A[0], "none") ? [] : bA(A).map(function(t) {
      for (var r = {
        color: DA.TRANSPARENT,
        offsetX: sA,
        offsetY: sA,
        blur: sA
      }, n = 0, s = 0; s < t.length; s++) {
        var a = t[s];
        _A(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : r.blur = a, n++) : r.color = VA.parse(e, a);
      }
      return r;
    });
  }
}, pc = {
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
}, Ec = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = vc[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, Hc = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, mc = function(e) {
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
}, vc = {
  matrix: Hc,
  matrix3d: mc
}, In = {
  type: 16,
  number: 50,
  flags: Ne
}, Ic = [In, In], yc = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter($);
    return t.length !== 2 ? Ic : [t[0], t[1]];
  }
}, bc = {
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
var Kc = {
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
}, Lc = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (ce(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Js = {
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
}, xc = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return ce(A) ? A.number : 1;
  }
}, Dc = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Tc = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(V).map(function(t) {
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
}, Sc = {
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
}, Mc = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Oc = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (ce(A))
      return A.number;
    if (V(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, Nc = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(V).map(function(t) {
      return t.value;
    });
  }
}, Rc = {
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
}, AA = function(e, A) {
  return (e & A) !== 0;
}, Gc = {
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
}, Vc = {
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
    for (var r = [], n = A.filter(bs), s = 0; s < n.length; s++) {
      var a = n[s], B = n[s + 1];
      if (a.type === 20) {
        var i = B && ce(B) ? B.number : 1;
        r.push({ counter: a.value, increment: i });
      }
    }
    return r;
  }
}, kc = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(bs), n = 0; n < r.length; n++) {
      var s = r[n], a = r[n + 1];
      if (V(s) && s.value !== "none") {
        var B = a && ce(a) ? a.number : 0;
        t.push({ counter: s.value, reset: B });
      }
    }
    return t;
  }
}, _c = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(Re).map(function(t) {
      return Js.parse(e, t);
    });
  }
}, Pc = {
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
    var r = [], n = A.filter(wo);
    if (n.length % 2 !== 0)
      return null;
    for (var s = 0; s < n.length; s += 2) {
      var a = n[s].value, B = n[s + 1].value;
      r.push({ open: a, close: B });
    }
    return r;
  }
}, yn = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Xc = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Er(A[0], "none") ? [] : bA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: sA,
        offsetY: sA,
        blur: sA,
        spread: sA,
        inset: !1
      }, n = 0, s = 0; s < t.length; s++) {
        var a = t[s];
        Er(a, "inset") ? r.inset = !0 : _A(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : n === 2 ? r.blur = a : r.spread = a, n++) : r.color = VA.parse(e, a);
      }
      return r;
    });
  }
}, Jc = {
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
    return A.filter(V).forEach(function(n) {
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
}, Wc = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Yc = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return Re(A) ? A.number : 0;
  }
}, Zc = (
  /** @class */
  function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = H(A, _c, t.animationDuration), this.backgroundClip = H(A, Uo, t.backgroundClip), this.backgroundColor = H(A, Fo, t.backgroundColor), this.backgroundImage = H(A, Ko, t.backgroundImage), this.backgroundOrigin = H(A, Lo, t.backgroundOrigin), this.backgroundPosition = H(A, xo, t.backgroundPosition), this.backgroundRepeat = H(A, Do, t.backgroundRepeat), this.backgroundSize = H(A, So, t.backgroundSize), this.borderTopColor = H(A, Oo, t.borderTopColor), this.borderRightColor = H(A, No, t.borderRightColor), this.borderBottomColor = H(A, Ro, t.borderBottomColor), this.borderLeftColor = H(A, Go, t.borderLeftColor), this.borderTopLeftRadius = H(A, Vo, t.borderTopLeftRadius), this.borderTopRightRadius = H(A, ko, t.borderTopRightRadius), this.borderBottomRightRadius = H(A, _o, t.borderBottomRightRadius), this.borderBottomLeftRadius = H(A, Po, t.borderBottomLeftRadius), this.borderTopStyle = H(A, Xo, t.borderTopStyle), this.borderRightStyle = H(A, Jo, t.borderRightStyle), this.borderBottomStyle = H(A, Wo, t.borderBottomStyle), this.borderLeftStyle = H(A, Yo, t.borderLeftStyle), this.borderTopWidth = H(A, Zo, t.borderTopWidth), this.borderRightWidth = H(A, jo, t.borderRightWidth), this.borderBottomWidth = H(A, zo, t.borderBottomWidth), this.borderLeftWidth = H(A, qo, t.borderLeftWidth), this.boxShadow = H(A, Xc, t.boxShadow), this.color = H(A, $o, t.color), this.direction = H(A, Ac, t.direction), this.display = H(A, ec, t.display), this.float = H(A, rc, t.cssFloat), this.fontFamily = H(A, Sc, t.fontFamily), this.fontSize = H(A, Mc, t.fontSize), this.fontStyle = H(A, Rc, t.fontStyle), this.fontVariant = H(A, Nc, t.fontVariant), this.fontWeight = H(A, Oc, t.fontWeight), this.letterSpacing = H(A, nc, t.letterSpacing), this.lineBreak = H(A, sc, t.lineBreak), this.lineHeight = H(A, ac, t.lineHeight), this.listStyleImage = H(A, Bc, t.listStyleImage), this.listStylePosition = H(A, ic, t.listStylePosition), this.listStyleType = H(A, Hr, t.listStyleType), this.marginTop = H(A, oc, t.marginTop), this.marginRight = H(A, cc, t.marginRight), this.marginBottom = H(A, lc, t.marginBottom), this.marginLeft = H(A, uc, t.marginLeft), this.opacity = H(A, xc, t.opacity);
      var s = H(A, gc, t.overflow);
      this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = H(A, Qc, t.overflowWrap), this.paddingTop = H(A, wc, t.paddingTop), this.paddingRight = H(A, fc, t.paddingRight), this.paddingBottom = H(A, Cc, t.paddingBottom), this.paddingLeft = H(A, Uc, t.paddingLeft), this.paintOrder = H(A, Jc, t.paintOrder), this.position = H(A, hc, t.position), this.textAlign = H(A, Fc, t.textAlign), this.textDecorationColor = H(A, Dc, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = H(A, Tc, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = H(A, dc, t.textShadow), this.textTransform = H(A, pc, t.textTransform), this.transform = H(A, Ec, t.transform), this.transformOrigin = H(A, yc, t.transformOrigin), this.visibility = H(A, bc, t.visibility), this.webkitTextStrokeColor = H(A, Wc, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = H(A, Yc, t.webkitTextStrokeWidth), this.wordBreak = H(A, Kc, t.wordBreak), this.zIndex = H(A, Lc, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return kA(this.backgroundColor);
    }, e.prototype.isTransformed = function() {
      return this.transform !== null;
    }, e.prototype.isPositioned = function() {
      return this.position !== 0;
    }, e.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, e.prototype.isFloating = function() {
      return this.float !== 0;
    }, e.prototype.isInlineLevel = function() {
      return AA(
        this.display,
        4
        /* INLINE */
      ) || AA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || AA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || AA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || AA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || AA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), jc = (
  /** @class */
  function() {
    function e(A, t) {
      this.content = H(A, Gc, t.content), this.quotes = H(A, Pc, t.quotes);
    }
    return e;
  }()
), bn = (
  /** @class */
  function() {
    function e(A, t) {
      this.counterIncrement = H(A, Vc, t.counterIncrement), this.counterReset = H(A, kc, t.counterReset);
    }
    return e;
  }()
), H = function(e, A, t) {
  var r = new Is(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var s = new ys(r.read());
  switch (A.type) {
    case 2:
      var a = s.parseComponentValue();
      return A.parse(e, V(a) ? a.value : A.initialValue);
    case 0:
      return A.parse(e, s.parseComponentValue());
    case 1:
      return A.parse(e, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return yt.parse(e, s.parseComponentValue());
        case "color":
          return VA.parse(e, s.parseComponentValue());
        case "image":
          return Nr.parse(e, s.parseComponentValue());
        case "length":
          var B = s.parseComponentValue();
          return _A(B) ? B : sA;
        case "length-percentage":
          var i = s.parseComponentValue();
          return $(i) ? i : sA;
        case "time":
          return Js.parse(e, s.parseComponentValue());
      }
      break;
  }
}, zc = "data-html2canvas-debug", qc = function(e) {
  var A = e.getAttribute(zc);
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
  var t = qc(e);
  return t === 1 || A === t;
}, KA = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, mr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Zc(A, window.getComputedStyle(t, null)), yr(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = vt(this.context, t), mr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), $c = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Kn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ee = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var rt = 0; rt < Kn.length; rt++)
  Ee[Kn.charCodeAt(rt)] = rt;
var Al = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, s, a, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    s = Ee[e.charCodeAt(r)], a = Ee[e.charCodeAt(r + 1)], B = Ee[e.charCodeAt(r + 2)], i = Ee[e.charCodeAt(r + 3)], c[n++] = s << 2 | a >> 4, c[n++] = (a & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, el = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, tl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, ZA = 5, Rr = 6 + 5, Yt = 2, rl = Rr - ZA, Ws = 65536 >> ZA, nl = 1 << ZA, Zt = nl - 1, sl = 1024 >> ZA, al = Ws + sl, Bl = al, il = 32, ol = Bl + il, cl = 65536 >> Rr, ll = 1 << rl, ul = ll - 1, Ln = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, gl = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Ql = function(e, A) {
  var t = Al(e), r = Array.isArray(t) ? tl(t) : new Uint32Array(t), n = Array.isArray(t) ? el(t) : new Uint16Array(t), s = 24, a = Ln(n, s / 2, r[4] / 2), B = r[5] === 2 ? Ln(n, (s + r[4]) / 2) : gl(r, Math.ceil((s + r[4]) / 4));
  return new wl(r[0], r[1], r[2], r[3], a, B);
}, wl = (
  /** @class */
  function() {
    function e(A, t, r, n, s, a) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = a;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> ZA], t = (t << Yt) + (A & Zt), this.data[t];
        if (A <= 65535)
          return t = this.index[Ws + (A - 55296 >> ZA)], t = (t << Yt) + (A & Zt), this.data[t];
        if (A < this.highStart)
          return t = ol - cl + (A >> Rr), t = this.index[t], t += A >> ZA & ul, t = this.index[t], t = (t << Yt) + (A & Zt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), xn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var nt = 0; nt < xn.length; nt++)
  fl[xn.charCodeAt(nt)] = nt;
var Cl = 1, jt = 2, zt = 3, Dn = 4, Tn = 5, Ul = 7, Sn = 8, qt = 9, $t = 10, Mn = 11, On = 12, Nn = 13, Rn = 14, Ar = 15, Fl = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, hl = function() {
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
}, dl = Ql($c), dA = "×", er = "÷", pl = function(e) {
  return dl.get(e);
}, El = function(e, A, t) {
  var r = t - 2, n = A[r], s = A[t - 1], a = A[t];
  if (s === jt && a === zt)
    return dA;
  if (s === jt || s === zt || s === Dn || a === jt || a === zt || a === Dn)
    return er;
  if (s === Sn && [Sn, qt, Mn, On].indexOf(a) !== -1 || (s === Mn || s === qt) && (a === qt || a === $t) || (s === On || s === $t) && a === $t || a === Nn || a === Tn || a === Ul || s === Cl)
    return dA;
  if (s === Nn && a === Rn) {
    for (; n === Tn; )
      n = A[--r];
    if (n === Rn)
      return dA;
  }
  if (s === Ar && a === Ar) {
    for (var B = 0; n === Ar; )
      B++, n = A[--r];
    if (B % 2 === 0)
      return dA;
  }
  return er;
}, Hl = function(e) {
  var A = Fl(e), t = A.length, r = 0, n = 0, s = A.map(pl);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var a = dA; r < t && (a = El(A, s, ++r)) === dA; )
        ;
      if (a !== dA || r === t) {
        var B = hl.apply(null, A.slice(n, r));
        return n = r, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, ml = function(e) {
  for (var A = Hl(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, vl = function(e) {
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
}, Il = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = It(r.data).map(function(i) {
    return j(i);
  }), s = 0, a = {}, B = n.every(function(i, o) {
    t.setStart(r, s), t.setEnd(r, s + i.length);
    var c = t.getBoundingClientRect();
    s += i.length;
    var l = c.x > a.x || c.y > a.y;
    return a = c, o === 0 ? !0 : l;
  });
  return e.body.removeChild(A), B;
}, yl = function() {
  return typeof new Image().crossOrigin < "u";
}, bl = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Kl = function(e) {
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
}, Gn = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Ll = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), s = A.toDataURL();
  n.src = s;
  var a = vr(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), Vn(a).then(function(B) {
    r.drawImage(B, 0, 0);
    var i = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var o = e.createElement("div");
    return o.style.backgroundImage = "url(" + s + ")", o.style.height = t + "px", Gn(i) ? Vn(vr(t, t, 0, 0, o)) : Promise.reject(!1);
  }).then(function(B) {
    return r.drawImage(B, 0, 0), Gn(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, vr = function(e, A, t, r, n) {
  var s = "http://www.w3.org/2000/svg", a = document.createElementNS(s, "svg"), B = document.createElementNS(s, "foreignObject");
  return a.setAttributeNS(null, "width", e.toString()), a.setAttributeNS(null, "height", A.toString()), B.setAttributeNS(null, "width", "100%"), B.setAttributeNS(null, "height", "100%"), B.setAttributeNS(null, "x", t.toString()), B.setAttributeNS(null, "y", r.toString()), B.setAttributeNS(null, "externalResourcesRequired", "true"), a.appendChild(B), B.appendChild(n), a;
}, Vn = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, nA = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = vl(document);
    return Object.defineProperty(nA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = nA.SUPPORT_RANGE_BOUNDS && Il(document);
    return Object.defineProperty(nA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = Kl(document);
    return Object.defineProperty(nA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? Ll(document) : Promise.resolve(!1);
    return Object.defineProperty(nA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = yl();
    return Object.defineProperty(nA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = bl();
    return Object.defineProperty(nA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(nA, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(nA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, ye = (
  /** @class */
  function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), xl = function(e, A, t, r) {
  var n = Sl(A, t), s = [], a = 0;
  return n.forEach(function(B) {
    if (t.textDecorationLine.length || B.trim().length > 0)
      if (nA.SUPPORT_RANGE_BOUNDS) {
        var i = kn(r, a, B.length).getClientRects();
        if (i.length > 1) {
          var o = Gr(B), c = 0;
          o.forEach(function(u) {
            s.push(new ye(u, TA.fromDOMRectList(e, kn(r, c + a, u.length).getClientRects()))), c += u.length;
          });
        } else
          s.push(new ye(B, TA.fromDOMRectList(e, i)));
      } else {
        var l = r.splitText(B.length);
        s.push(new ye(B, Dl(e, r))), r = l;
      }
    else
      nA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(B.length));
    a += B.length;
  }), s;
}, Dl = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var s = vt(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), s;
    }
  }
  return TA.EMPTY;
}, kn = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, Gr = function(e) {
  if (nA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return ml(e);
}, Tl = function(e, A) {
  if (nA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Ol(e, A);
}, Sl = function(e, A) {
  return A.letterSpacing !== 0 ? Gr(e) : Tl(e, A);
}, Ml = [32, 160, 4961, 65792, 65793, 4153, 4241], Ol = function(e, A) {
  for (var t = oi(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, s = function() {
    if (n.value) {
      var a = n.value.slice(), B = It(a), i = "";
      B.forEach(function(o) {
        Ml.indexOf(o) === -1 ? i += j(o) : (i.length && r.push(i), r.push(j(o)), i = "");
      }), i.length && r.push(i);
    }
  }; !(n = t.next()).done; )
    s();
  return r;
}, Nl = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.text = Rl(t.data, r.textTransform), this.textBounds = xl(A, this.text, r, t);
    }
    return e;
  }()
), Rl = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Gl, Vl);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Gl = /(^|\s|:|-|\(|\))([a-z])/g, Vl = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Ys = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  }(KA)
), Zs = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  }(KA)
), js = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, s = new XMLSerializer(), a = vt(t, r);
      return r.setAttribute("width", a.width + "px"), r.setAttribute("height", a.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  }(KA)
), zs = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(KA)
), Ir = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return A;
  }(KA)
), kl = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], _l = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Pl = function(e) {
  return e.width > e.height ? new TA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new TA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, Xl = function(e) {
  var A = e.type === Jl ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, Ft = "checkbox", ht = "radio", Jl = "password", _n = 707406591, Vr = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Xl(r), (n.type === Ft || n.type === ht) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = Pl(n.bounds)), n.type) {
        case Ft:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = kl;
          break;
        case ht:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = _l;
          break;
      }
      return n;
    }
    return A;
  }(KA)
), qs = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, s = r.options[r.selectedIndex || 0];
      return n.value = s && s.text || "", n;
    }
    return A;
  }(KA)
), $s = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(KA)
), Aa = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = ta(t, r.contentWindow.document.documentElement);
          var s = r.contentWindow.document.documentElement ? ve(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : DA.TRANSPARENT, a = r.contentWindow.document.body ? ve(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : DA.TRANSPARENT;
          n.backgroundColor = kA(s) ? kA(a) ? n.styles.backgroundColor : a : s;
        }
      } catch {
      }
      return n;
    }
    return A;
  }(KA)
), Wl = ["OL", "UL", "MENU"], lt = function(e, A, t, r) {
  for (var n = A.firstChild, s = void 0; n; n = s)
    if (s = n.nextSibling, ra(n) && n.data.trim().length > 0)
      t.textNodes.push(new Nl(e, n, t.styles));
    else if (ae(n))
      if (Ba(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(B) {
          return lt(e, B, t, r);
        });
      else {
        var a = ea(e, n);
        a.styles.isVisible() && (Yl(n, a, r) ? a.flags |= 4 : Zl(a.styles) && (a.flags |= 2), Wl.indexOf(n.tagName) !== -1 && (a.flags |= 8), t.elements.push(a), n.slot, n.shadowRoot ? lt(e, n.shadowRoot, a, r) : !dt(n) && !na(n) && !pt(n) && lt(e, n, a, r));
      }
}, ea = function(e, A) {
  return br(A) ? new Ys(e, A) : sa(A) ? new Zs(e, A) : na(A) ? new js(e, A) : jl(A) ? new zs(e, A) : zl(A) ? new Ir(e, A) : ql(A) ? new Vr(e, A) : pt(A) ? new qs(e, A) : dt(A) ? new $s(e, A) : aa(A) ? new Aa(e, A) : new KA(e, A);
}, ta = function(e, A) {
  var t = ea(e, A);
  return t.flags |= 4, lt(e, A, t, t), t;
}, Yl = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || kr(e) && t.styles.isTransparent();
}, Zl = function(e) {
  return e.isPositioned() || e.isFloating();
}, ra = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, ae = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, yr = function(e) {
  return ae(e) && typeof e.style < "u" && !ut(e);
}, ut = function(e) {
  return typeof e.className == "object";
}, jl = function(e) {
  return e.tagName === "LI";
}, zl = function(e) {
  return e.tagName === "OL";
}, ql = function(e) {
  return e.tagName === "INPUT";
}, $l = function(e) {
  return e.tagName === "HTML";
}, na = function(e) {
  return e.tagName === "svg";
}, kr = function(e) {
  return e.tagName === "BODY";
}, sa = function(e) {
  return e.tagName === "CANVAS";
}, Pn = function(e) {
  return e.tagName === "VIDEO";
}, br = function(e) {
  return e.tagName === "IMG";
}, aa = function(e) {
  return e.tagName === "IFRAME";
}, Xn = function(e) {
  return e.tagName === "STYLE";
}, Au = function(e) {
  return e.tagName === "SCRIPT";
}, dt = function(e) {
  return e.tagName === "TEXTAREA";
}, pt = function(e) {
  return e.tagName === "SELECT";
}, Ba = function(e) {
  return e.tagName === "SLOT";
}, Jn = function(e) {
  return e.tagName.indexOf("-") > 0;
}, eu = (
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
), Wn = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Yn = {
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
}, tu = {
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
}, ru = {
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
}, Ae = function(e, A, t, r, n, s) {
  return e < A || e > t ? Oe(e, n, s.length > 0) : r.integers.reduce(function(a, B, i) {
    for (; e >= B; )
      e -= B, a += r.values[i];
    return a;
  }, "") + s;
}, ia = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, Z = function(e, A, t, r, n) {
  var s = t - A + 1;
  return (e < 0 ? "-" : "") + (ia(Math.abs(e), s, r, function(a) {
    return j(Math.floor(a % s) + A);
  }) + n);
}, XA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return ia(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, re = 1, SA = 2, MA = 4, He = 8, xA = function(e, A, t, r, n, s) {
  if (e < -9999 || e > 9999)
    return Oe(e, 4, n.length > 0);
  var a = Math.abs(e), B = n;
  if (a === 0)
    return A[0] + B;
  for (var i = 0; a > 0 && i <= 4; i++) {
    var o = a % 10;
    o === 0 && AA(s, re) && B !== "" ? B = A[o] + B : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && AA(s, SA) || o === 1 && i === 1 && AA(s, MA) && e > 100 || o === 1 && i > 1 && AA(s, He) ? B = A[o] + (i > 0 ? t[i - 1] : "") + B : o === 1 && i > 0 && (B = t[i - 1] + B), a = Math.floor(a / 10);
  }
  return (e < 0 ? r : "") + B;
}, Zn = "十百千萬", jn = "拾佰仟萬", zn = "マイナス", tr = "마이너스", Oe = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", a = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + a;
    case 1:
      return "◦" + a;
    case 2:
      return "◾" + a;
    case 5:
      var B = Z(e, 48, 57, !0, r);
      return B.length < 4 ? "0" + B : B;
    case 4:
      return XA(e, "〇一二三四五六七八九", n);
    case 6:
      return Ae(e, 1, 3999, Wn, 3, r).toLowerCase();
    case 7:
      return Ae(e, 1, 3999, Wn, 3, r);
    case 8:
      return Z(e, 945, 969, !1, r);
    case 9:
      return Z(e, 97, 122, !1, r);
    case 10:
      return Z(e, 65, 90, !1, r);
    case 11:
      return Z(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Ae(e, 1, 9999, Yn, 3, r);
    case 35:
      return Ae(e, 1, 9999, Yn, 3, r).toLowerCase();
    case 13:
      return Z(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return Z(e, 6112, 6121, !0, r);
    case 15:
      return XA(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return XA(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return xA(e, "零一二三四五六七八九", Zn, "負", n, SA | MA | He);
    case 47:
      return xA(e, "零壹貳參肆伍陸柒捌玖", jn, "負", n, re | SA | MA | He);
    case 42:
      return xA(e, "零一二三四五六七八九", Zn, "负", n, SA | MA | He);
    case 41:
      return xA(e, "零壹贰叁肆伍陆柒捌玖", jn, "负", n, re | SA | MA | He);
    case 26:
      return xA(e, "〇一二三四五六七八九", "十百千万", zn, n, 0);
    case 25:
      return xA(e, "零壱弐参四伍六七八九", "拾百千万", zn, n, re | SA | MA);
    case 31:
      return xA(e, "영일이삼사오육칠팔구", "십백천만", tr, s, re | SA | MA);
    case 33:
      return xA(e, "零一二三四五六七八九", "十百千萬", tr, s, 0);
    case 32:
      return xA(e, "零壹貳參四五六七八九", "拾百千", tr, s, re | SA | MA);
    case 18:
      return Z(e, 2406, 2415, !0, r);
    case 20:
      return Ae(e, 1, 19999, ru, 3, r);
    case 21:
      return Z(e, 2790, 2799, !0, r);
    case 22:
      return Z(e, 2662, 2671, !0, r);
    case 22:
      return Ae(e, 1, 10999, tu, 3, r);
    case 23:
      return XA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return XA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return Z(e, 3302, 3311, !0, r);
    case 28:
      return XA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return XA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return Z(e, 3792, 3801, !0, r);
    case 37:
      return Z(e, 6160, 6169, !0, r);
    case 38:
      return Z(e, 4160, 4169, !0, r);
    case 39:
      return Z(e, 2918, 2927, !0, r);
    case 40:
      return Z(e, 1776, 1785, !0, r);
    case 43:
      return Z(e, 3046, 3055, !0, r);
    case 44:
      return Z(e, 3174, 3183, !0, r);
    case 45:
      return Z(e, 3664, 3673, !0, r);
    case 46:
      return Z(e, 3872, 3881, !0, r);
    case 3:
    default:
      return Z(e, 48, 57, !0, r);
  }
}, oa = "data-html2canvas-ignore", qn = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new eu(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = nu(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var s = A.defaultView.pageXOffset, a = A.defaultView.pageYOffset, B = n.contentWindow, i = B.document, o = Bu(n).then(function() {
        return oA(r, void 0, void 0, function() {
          var c, l;
          return aA(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(lu), B && (B.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (B.scrollY !== t.top || B.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(B.scrollX - t.left, B.scrollY - t.top, 0, 0))), c = this.options.onclone, l = this.clonedReferenceElement, typeof l > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
              case 1:
                u.sent(), u.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, au(i)] : [3, 4];
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
      return i.open(), i.write(ou(document.doctype) + "<html></html>"), cu(this.referenceElement.ownerDocument, s, a), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), o;
    }, e.prototype.createElementClone = function(A) {
      if (mr(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (sa(A))
        return this.createCanvasClone(A);
      if (Pn(A))
        return this.createVideoClone(A);
      if (Xn(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return br(t) && (br(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Jn(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return rr(A.style, t), t;
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
      (!ae(t) || !Au(t) && !t.hasAttribute(oa) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !ae(t) || !Xn(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, s = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; s; s = s.nextSibling)
        if (ae(s) && Ba(s) && typeof s.assignedNodes == "function") {
          var a = s.assignedNodes();
          a.length && a.forEach(function(B) {
            return n.appendChildNode(t, B, r);
          });
        } else
          this.appendChildNode(t, s, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (ra(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && ae(A) && (yr(A) || ut(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var s = r.getComputedStyle(A), a = r.getComputedStyle(A, ":before"), B = r.getComputedStyle(A, ":after");
        this.referenceElement === A && yr(n) && (this.clonedReferenceElement = n), kr(n) && Qu(n);
        var i = this.counters.parse(new bn(this.context, s)), o = this.resolvePseudoContent(A, n, a, be.BEFORE);
        Jn(A) && (t = !0), Pn(A) || this.cloneChildNodes(A, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(A, n, B, be.AFTER);
        return c && n.appendChild(c), this.counters.pop(i), (s && (this.options.copyStyles || ut(A)) && !aa(A) || t) && rr(s, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (dt(A) || pt(A)) && (dt(n) || pt(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var s = this;
      if (r) {
        var a = r.content, B = t.ownerDocument;
        if (!(!B || !a || a === "none" || a === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new bn(this.context, r));
          var i = new jc(this.context, r), o = B.createElement("html2canvaspseudoelement");
          rr(r, o), i.content.forEach(function(l) {
            if (l.type === 0)
              o.appendChild(B.createTextNode(l.value));
            else if (l.type === 22) {
              var u = B.createElement("img");
              u.src = l.value, u.style.opacity = "1", o.appendChild(u);
            } else if (l.type === 18) {
              if (l.name === "attr") {
                var Q = l.values.filter(V);
                Q.length && o.appendChild(B.createTextNode(A.getAttribute(Q[0].value) || ""));
              } else if (l.name === "counter") {
                var g = l.values.filter(ie), w = g[0], f = g[1];
                if (w && V(w)) {
                  var C = s.counters.getCounterValue(w.value), d = f && V(f) ? Hr.parse(s.context, f.value) : 3;
                  o.appendChild(B.createTextNode(Oe(C, d, !1)));
                }
              } else if (l.name === "counters") {
                var I = l.values.filter(ie), w = I[0], m = I[1], f = I[2];
                if (w && V(w)) {
                  var v = s.counters.getCounterValues(w.value), F = f && V(f) ? Hr.parse(s.context, f.value) : 3, L = m && m.type === 0 ? m.value : "", b = v.map(function(R) {
                    return Oe(R, F, !1);
                  }).join(L);
                  o.appendChild(B.createTextNode(b));
                }
              }
            } else if (l.type === 20)
              switch (l.value) {
                case "open-quote":
                  o.appendChild(B.createTextNode(yn(i.quotes, s.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(B.createTextNode(yn(i.quotes, --s.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(B.createTextNode(l.value));
              }
          }), o.className = Kr + " " + Lr;
          var c = n === be.BEFORE ? " " + Kr : " " + Lr;
          return ut(t) ? t.className.baseValue += c : t.className += c, o;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  }()
), be;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(be || (be = {}));
var nu = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(oa, "true"), e.body.appendChild(t), t;
}, su = function(e) {
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
}, au = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(su));
}, Bu = function(e) {
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
}, iu = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], rr = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    iu.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, ou = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, cu = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, lu = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, uu = ":before", gu = ":after", Kr = "___html2canvas___pseudoelement_before", Lr = "___html2canvas___pseudoelement_after", $n = `{
    content: "" !important;
    display: none !important;
}`, Qu = function(e) {
  wu(e, "." + Kr + uu + $n + `
         .` + Lr + gu + $n);
}, wu = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, ca = (
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
), fu = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (sr(A) || hu(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return oA(this, void 0, void 0, function() {
        var t, r, n, s, a = this;
        return aA(this, function(B) {
          switch (B.label) {
            case 0:
              return t = ca.isSameOrigin(A), r = !nr(A) && this._options.useCORS === !0 && nA.SUPPORT_CORS_IMAGES && !t, n = !nr(A) && !t && !sr(A) && typeof this._options.proxy == "string" && nA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !nr(A) && !sr(A) && !n && !r ? [
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
                }, c.onerror = o, (du(s) || r) && (c.crossOrigin = "anonymous"), c.src = s, c.complete === !0 && setTimeout(function() {
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
        var B = nA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
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
), Cu = /^data:image\/svg\+xml/i, Uu = /^data:image\/.*;base64,/i, Fu = /^data:image\/.*/i, hu = function(e) {
  return nA.SUPPORT_SVG_DRAWING || !pu(e);
}, nr = function(e) {
  return Fu.test(e);
}, du = function(e) {
  return Uu.test(e);
}, sr = function(e) {
  return e.substr(0, 4) === "blob";
}, pu = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || Cu.test(e);
}, E = (
  /** @class */
  function() {
    function e(A, t) {
      this.type = 0, this.x = A, this.y = t;
    }
    return e.prototype.add = function(A, t) {
      return new e(this.x + A, this.y + t);
    }, e;
  }()
), ee = function(e, A, t) {
  return new E(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, st = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = ee(this.start, this.startControl, A), n = ee(this.startControl, this.endControl, A), s = ee(this.endControl, this.end, A), a = ee(r, n, A), B = ee(n, s, A), i = ee(a, B, A);
      return t ? new e(this.start, r, a, i) : new e(i, B, s, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), pA = function(e) {
  return e.type === 1;
}, Eu = (
  /** @class */
  function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = pe(t.borderTopLeftRadius, r.width, r.height), s = n[0], a = n[1], B = pe(t.borderTopRightRadius, r.width, r.height), i = B[0], o = B[1], c = pe(t.borderBottomRightRadius, r.width, r.height), l = c[0], u = c[1], Q = pe(t.borderBottomLeftRadius, r.width, r.height), g = Q[0], w = Q[1], f = [];
      f.push((s + i) / r.width), f.push((g + l) / r.width), f.push((a + w) / r.height), f.push((o + u) / r.height);
      var C = Math.max.apply(Math, f);
      C > 1 && (s /= C, a /= C, i /= C, o /= C, l /= C, u /= C, g /= C, w /= C);
      var d = r.width - i, I = r.height - u, m = r.width - l, v = r.height - w, F = t.borderTopWidth, L = t.borderRightWidth, b = t.borderBottomWidth, y = t.borderLeftWidth, x = X(t.paddingTop, A.bounds.width), R = X(t.paddingRight, A.bounds.width), W = X(t.paddingBottom, A.bounds.width), M = X(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = s > 0 || a > 0 ? J(r.left + y / 3, r.top + F / 3, s - y / 3, a - F / 3, N.TOP_LEFT) : new E(r.left + y / 3, r.top + F / 3), this.topRightBorderDoubleOuterBox = s > 0 || a > 0 ? J(r.left + d, r.top + F / 3, i - L / 3, o - F / 3, N.TOP_RIGHT) : new E(r.left + r.width - L / 3, r.top + F / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || u > 0 ? J(r.left + m, r.top + I, l - L / 3, u - b / 3, N.BOTTOM_RIGHT) : new E(r.left + r.width - L / 3, r.top + r.height - b / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || w > 0 ? J(r.left + y / 3, r.top + v, g - y / 3, w - b / 3, N.BOTTOM_LEFT) : new E(r.left + y / 3, r.top + r.height - b / 3), this.topLeftBorderDoubleInnerBox = s > 0 || a > 0 ? J(r.left + y * 2 / 3, r.top + F * 2 / 3, s - y * 2 / 3, a - F * 2 / 3, N.TOP_LEFT) : new E(r.left + y * 2 / 3, r.top + F * 2 / 3), this.topRightBorderDoubleInnerBox = s > 0 || a > 0 ? J(r.left + d, r.top + F * 2 / 3, i - L * 2 / 3, o - F * 2 / 3, N.TOP_RIGHT) : new E(r.left + r.width - L * 2 / 3, r.top + F * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || u > 0 ? J(r.left + m, r.top + I, l - L * 2 / 3, u - b * 2 / 3, N.BOTTOM_RIGHT) : new E(r.left + r.width - L * 2 / 3, r.top + r.height - b * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || w > 0 ? J(r.left + y * 2 / 3, r.top + v, g - y * 2 / 3, w - b * 2 / 3, N.BOTTOM_LEFT) : new E(r.left + y * 2 / 3, r.top + r.height - b * 2 / 3), this.topLeftBorderStroke = s > 0 || a > 0 ? J(r.left + y / 2, r.top + F / 2, s - y / 2, a - F / 2, N.TOP_LEFT) : new E(r.left + y / 2, r.top + F / 2), this.topRightBorderStroke = s > 0 || a > 0 ? J(r.left + d, r.top + F / 2, i - L / 2, o - F / 2, N.TOP_RIGHT) : new E(r.left + r.width - L / 2, r.top + F / 2), this.bottomRightBorderStroke = l > 0 || u > 0 ? J(r.left + m, r.top + I, l - L / 2, u - b / 2, N.BOTTOM_RIGHT) : new E(r.left + r.width - L / 2, r.top + r.height - b / 2), this.bottomLeftBorderStroke = g > 0 || w > 0 ? J(r.left + y / 2, r.top + v, g - y / 2, w - b / 2, N.BOTTOM_LEFT) : new E(r.left + y / 2, r.top + r.height - b / 2), this.topLeftBorderBox = s > 0 || a > 0 ? J(r.left, r.top, s, a, N.TOP_LEFT) : new E(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? J(r.left + d, r.top, i, o, N.TOP_RIGHT) : new E(r.left + r.width, r.top), this.bottomRightBorderBox = l > 0 || u > 0 ? J(r.left + m, r.top + I, l, u, N.BOTTOM_RIGHT) : new E(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || w > 0 ? J(r.left, r.top + v, g, w, N.BOTTOM_LEFT) : new E(r.left, r.top + r.height), this.topLeftPaddingBox = s > 0 || a > 0 ? J(r.left + y, r.top + F, Math.max(0, s - y), Math.max(0, a - F), N.TOP_LEFT) : new E(r.left + y, r.top + F), this.topRightPaddingBox = i > 0 || o > 0 ? J(r.left + Math.min(d, r.width - L), r.top + F, d > r.width + L ? 0 : Math.max(0, i - L), Math.max(0, o - F), N.TOP_RIGHT) : new E(r.left + r.width - L, r.top + F), this.bottomRightPaddingBox = l > 0 || u > 0 ? J(r.left + Math.min(m, r.width - y), r.top + Math.min(I, r.height - b), Math.max(0, l - L), Math.max(0, u - b), N.BOTTOM_RIGHT) : new E(r.left + r.width - L, r.top + r.height - b), this.bottomLeftPaddingBox = g > 0 || w > 0 ? J(r.left + y, r.top + Math.min(v, r.height - b), Math.max(0, g - y), Math.max(0, w - b), N.BOTTOM_LEFT) : new E(r.left + y, r.top + r.height - b), this.topLeftContentBox = s > 0 || a > 0 ? J(r.left + y + M, r.top + F + x, Math.max(0, s - (y + M)), Math.max(0, a - (F + x)), N.TOP_LEFT) : new E(r.left + y + M, r.top + F + x), this.topRightContentBox = i > 0 || o > 0 ? J(r.left + Math.min(d, r.width + y + M), r.top + F + x, d > r.width + y + M ? 0 : i - y + M, o - (F + x), N.TOP_RIGHT) : new E(r.left + r.width - (L + R), r.top + F + x), this.bottomRightContentBox = l > 0 || u > 0 ? J(r.left + Math.min(m, r.width - (y + M)), r.top + Math.min(I, r.height + F + x), Math.max(0, l - (L + R)), u - (b + W), N.BOTTOM_RIGHT) : new E(r.left + r.width - (L + R), r.top + r.height - (b + W)), this.bottomLeftContentBox = g > 0 || w > 0 ? J(r.left + y + M, r.top + v, Math.max(0, g - (y + M)), w - (b + W), N.BOTTOM_LEFT) : new E(r.left + y + M, r.top + r.height - (b + W));
    }
    return e;
  }()
), N;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(N || (N = {}));
var J = function(e, A, t, r, n) {
  var s = 4 * ((Math.sqrt(2) - 1) / 3), a = t * s, B = r * s, i = e + t, o = A + r;
  switch (n) {
    case N.TOP_LEFT:
      return new st(new E(e, o), new E(e, o - B), new E(i - a, A), new E(i, A));
    case N.TOP_RIGHT:
      return new st(new E(e, A), new E(e + a, A), new E(i, o - B), new E(i, o));
    case N.BOTTOM_RIGHT:
      return new st(new E(i, A), new E(i, A + B), new E(e + a, o), new E(e, o));
    case N.BOTTOM_LEFT:
    default:
      return new st(new E(i, o), new E(i - a, o), new E(e, A + B), new E(e, A));
  }
}, Et = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Hu = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, Ht = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, mu = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  }()
), at = (
  /** @class */
  function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  }()
), vu = (
  /** @class */
  function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), Iu = function(e) {
  return e.type === 0;
}, la = function(e) {
  return e.type === 1;
}, yu = function(e) {
  return e.type === 2;
}, As = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, bu = function(e, A, t, r, n) {
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
}, ua = (
  /** @class */
  function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), ga = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new Eu(this.container), this.container.styles.opacity < 1 && this.effects.push(new vu(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
        this.effects.push(new mu(r, n, s));
      }
      if (this.container.styles.overflowX !== 0) {
        var a = Et(this.curves), B = Ht(this.curves);
        As(a, B) ? this.effects.push(new at(
          a,
          6
          /* CONTENT */
        )) : (this.effects.push(new at(
          a,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new at(
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
          return !la(i);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, s), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var a = Et(r.curves), B = Ht(r.curves);
            As(a, B) || n.unshift(new at(
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
        return AA(i.target, A);
      });
    }, e;
  }()
), xr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var s = AA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), a = AA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), B = new ga(n, e);
    AA(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(B);
    var i = AA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (s || a) {
      var o = s || n.styles.isPositioned() ? t : A, c = new ua(B);
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
      xr(B, c, s ? c : t, i);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(B) : A.nonInlineLevel.push(B), xr(B, A, t, i);
    AA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && Qa(n, i);
  });
}, Qa = function(e, A) {
  for (var t = e instanceof Ir ? e.start : 1, r = e instanceof Ir ? e.reversed : !1, n = 0; n < A.length; n++) {
    var s = A[n];
    s.container instanceof zs && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = Oe(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Ku = function(e) {
  var A = new ga(e, null), t = new ua(A), r = [];
  return xr(A, t, t, r), Qa(A.container, r), t;
}, es = function(e, A) {
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
}, Lu = function(e, A) {
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
}, xu = function(e, A) {
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
}, Du = function(e, A) {
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
  return pA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), pA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, HA = function(e, A, t, r) {
  var n = [];
  return pA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), pA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), pA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), pA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, wa = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, mt = function(e) {
  var A = e.styles, t = e.bounds, r = X(A.paddingLeft, t.width), n = X(A.paddingRight, t.width), s = X(A.paddingTop, t.width), a = X(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, s + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + s + a));
}, Tu = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? mt(A) : wa(A);
}, Su = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? mt(A) : wa(A);
}, ar = function(e, A, t) {
  var r = Tu(ne(e.styles.backgroundOrigin, A), e), n = Su(ne(e.styles.backgroundClip, A), e), s = Mu(ne(e.styles.backgroundSize, A), t, r), a = s[0], B = s[1], i = pe(ne(e.styles.backgroundPosition, A), r.width - a, r.height - B), o = Ou(ne(e.styles.backgroundRepeat, A), i, s, r, n), c = Math.round(r.left + i[0]), l = Math.round(r.top + i[1]);
  return [o, c, l, a, B];
}, te = function(e) {
  return V(e) && e.value === Be.AUTO;
}, it = function(e) {
  return typeof e == "number";
}, Mu = function(e, A, t) {
  var r = A[0], n = A[1], s = A[2], a = e[0], B = e[1];
  if (!a)
    return [0, 0];
  if ($(a) && B && $(B))
    return [X(a, t.width), X(B, t.height)];
  var i = it(s);
  if (V(a) && (a.value === Be.CONTAIN || a.value === Be.COVER)) {
    if (it(s)) {
      var o = t.width / t.height;
      return o < s != (a.value === Be.COVER) ? [t.width, t.width / s] : [t.height * s, t.height];
    }
    return [t.width, t.height];
  }
  var c = it(r), l = it(n), u = c || l;
  if (te(a) && (!B || te(B))) {
    if (c && l)
      return [r, n];
    if (!i && !u)
      return [t.width, t.height];
    if (u && i) {
      var Q = c ? r : n * s, g = l ? n : r / s;
      return [Q, g];
    }
    var w = c ? r : t.width, f = l ? n : t.height;
    return [w, f];
  }
  if (i) {
    var C = 0, d = 0;
    return $(a) ? C = X(a, t.width) : $(B) && (d = X(B, t.height)), te(a) ? C = d * s : (!B || te(B)) && (d = C / s), [C, d];
  }
  var I = null, m = null;
  if ($(a) ? I = X(a, t.width) : B && $(B) && (m = X(B, t.height)), I !== null && (!B || te(B)) && (m = c && l ? I / r * n : t.height), m !== null && te(a) && (I = c && l ? m / n * r : t.width), I !== null && m !== null)
    return [I, m];
  throw new Error("Unable to calculate background-size for element");
}, ne = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Ou = function(e, A, t, r, n) {
  var s = A[0], a = A[1], B = t[0], i = t[1];
  switch (e) {
    case 2:
      return [
        new E(Math.round(r.left), Math.round(r.top + a)),
        new E(Math.round(r.left + r.width), Math.round(r.top + a)),
        new E(Math.round(r.left + r.width), Math.round(i + r.top + a)),
        new E(Math.round(r.left), Math.round(i + r.top + a))
      ];
    case 3:
      return [
        new E(Math.round(r.left + s), Math.round(r.top)),
        new E(Math.round(r.left + s + B), Math.round(r.top)),
        new E(Math.round(r.left + s + B), Math.round(r.height + r.top)),
        new E(Math.round(r.left + s), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new E(Math.round(r.left + s), Math.round(r.top + a)),
        new E(Math.round(r.left + s + B), Math.round(r.top + a)),
        new E(Math.round(r.left + s + B), Math.round(r.top + a + i)),
        new E(Math.round(r.left + s), Math.round(r.top + a + i))
      ];
    default:
      return [
        new E(Math.round(n.left), Math.round(n.top)),
        new E(Math.round(n.left + n.width), Math.round(n.top)),
        new E(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new E(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, Nu = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ts = "Hidden Text", Ru = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), s = this._document.createElement("span"), a = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", a.appendChild(r), n.src = Nu, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(ts)), r.appendChild(s), r.appendChild(n);
      var B = n.offsetTop - s.offsetTop + 2;
      r.removeChild(s), r.appendChild(this._document.createTextNode(ts)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var i = n.offsetTop - r.offsetTop + 2;
      return a.removeChild(r), { baseline: B, middle: i };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), fa = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), Gu = 1e4, Vu = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new Ru(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), yu(t) && (this.ctx.globalAlpha = t.opacity), Iu(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), la(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
              if (AA(
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
        var a = Gr(t.text);
        a.reduce(function(B, i) {
          return s.ctx.fillText(i, B, t.bounds.top + n), B + s.ctx.measureText(i).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(a) {
        return a === "normal" || a === "small-caps";
      }).join(""), n = Ju(t.fontFamily).join(", "), s = Re(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
                  u.ctx.fillStyle = tA(r.color), u.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  var f = r.textShadow;
                  f.length && g.text.trim().length && (f.slice(0).reverse().forEach(function(C) {
                    u.ctx.shadowColor = tA(C.color), u.ctx.shadowOffsetX = C.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = C.offsetY.number * u.options.scale, u.ctx.shadowBlur = C.blur.number, u.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = tA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(C) {
                    switch (C) {
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
                  r.webkitTextStrokeWidth && g.text.trim().length && (u.ctx.strokeStyle = tA(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + o)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
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
        var s = mt(t), a = Ht(r);
        this.path(a), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n, s, a, B, i, d, d, o, c, l, u, m, Q, g, v, w, f, C, d, I, m, v;
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
              if (!(r instanceof Ys))
                return [3, 8];
              F.label = 5;
            case 5:
              return F.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return d = F.sent(), this.renderReplacedElement(r, n, d), [3, 8];
            case 7:
              return F.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Zs && this.renderReplacedElement(r, n, r.canvas), !(r instanceof js))
                return [3, 12];
              F.label = 9;
            case 9:
              return F.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return d = F.sent(), this.renderReplacedElement(r, n, d), [3, 12];
            case 11:
              return F.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof Aa && r.tree ? (o = new A(this.context, {
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
              if (r instanceof Vr && (l = Math.min(r.bounds.width, r.bounds.height), r.type === Ft ? r.checked && (this.ctx.save(), this.path([
                new E(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79),
                new E(r.bounds.left + l * 0.16, r.bounds.top + l * 0.5549),
                new E(r.bounds.left + l * 0.27347, r.bounds.top + l * 0.44071),
                new E(r.bounds.left + l * 0.39694, r.bounds.top + l * 0.5649),
                new E(r.bounds.left + l * 0.72983, r.bounds.top + l * 0.23),
                new E(r.bounds.left + l * 0.84, r.bounds.top + l * 0.34085),
                new E(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79)
              ]), this.ctx.fillStyle = tA(_n), this.ctx.fill(), this.ctx.restore()) : r.type === ht && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + l / 2, r.bounds.top + l / 2, l / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = tA(_n), this.ctx.fill(), this.ctx.restore())), ku(r) && r.value.length) {
                switch (u = this.createFontStyle(s), m = u[0], Q = u[1], g = this.fontMetrics.getMetrics(m, Q).baseline, this.ctx.font = m, this.ctx.fillStyle = tA(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Pu(r.styles.textAlign), v = mt(r), w = 0, r.styles.textAlign) {
                  case 1:
                    w += v.width / 2;
                    break;
                  case 2:
                    w += v.width;
                    break;
                }
                f = v.add(w, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([
                  new E(v.left, v.top),
                  new E(v.left + v.width, v.top),
                  new E(v.left + v.width, v.top + v.height),
                  new E(v.left, v.top + v.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ye(r.value, f), s.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!AA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (C = r.styles.listStyleImage, C.type !== 0)
                return [3, 18];
              d = void 0, I = C.url, F.label = 15;
            case 15:
              return F.trys.push([15, 17, , 18]), [4, this.context.cache.match(I)];
            case 16:
              return d = F.sent(), this.ctx.drawImage(d, r.bounds.left - (d.width + 10), r.bounds.top), [3, 18];
            case 17:
              return F.sent(), this.context.logger.error("Error loading list-style-image " + I), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (m = this.createFontStyle(s)[0], this.ctx.font = m, this.ctx.fillStyle = tA(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new TA(r.bounds.left, r.bounds.top + X(r.styles.paddingTop, r.bounds.width), r.bounds.width, vn(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ye(t.listValue, v), s.letterSpacing, vn(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), F.label = 20;
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
        var r, n, C, s, a, C, B, i, C, o, c, C, l, u, C, Q, g, C, w, f, C;
        return aA(this, function(d) {
          switch (d.label) {
            case 0:
              if (AA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              d.sent(), r = 0, n = t.negativeZIndex, d.label = 2;
            case 2:
              return r < n.length ? (C = n[r], [4, this.renderStack(C)]) : [3, 5];
            case 3:
              d.sent(), d.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              d.sent(), s = 0, a = t.nonInlineLevel, d.label = 7;
            case 7:
              return s < a.length ? (C = a[s], [4, this.renderNode(C)]) : [3, 10];
            case 8:
              d.sent(), d.label = 9;
            case 9:
              return s++, [3, 7];
            case 10:
              B = 0, i = t.nonPositionedFloats, d.label = 11;
            case 11:
              return B < i.length ? (C = i[B], [4, this.renderStack(C)]) : [3, 14];
            case 12:
              d.sent(), d.label = 13;
            case 13:
              return B++, [3, 11];
            case 14:
              o = 0, c = t.nonPositionedInlineLevel, d.label = 15;
            case 15:
              return o < c.length ? (C = c[o], [4, this.renderStack(C)]) : [3, 18];
            case 16:
              d.sent(), d.label = 17;
            case 17:
              return o++, [3, 15];
            case 18:
              l = 0, u = t.inlineLevel, d.label = 19;
            case 19:
              return l < u.length ? (C = u[l], [4, this.renderNode(C)]) : [3, 22];
            case 20:
              d.sent(), d.label = 21;
            case 21:
              return l++, [3, 19];
            case 22:
              Q = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, d.label = 23;
            case 23:
              return Q < g.length ? (C = g[Q], [4, this.renderStack(C)]) : [3, 26];
            case 24:
              d.sent(), d.label = 25;
            case 25:
              return Q++, [3, 23];
            case 26:
              w = 0, f = t.positiveZIndex, d.label = 27;
            case 27:
              return w < f.length ? (C = f[w], [4, this.renderStack(C)]) : [3, 30];
            case 28:
              d.sent(), d.label = 29;
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
                var l, u, Q, x, eA, z, M, Y, b, g, x, eA, z, M, Y, w, f, C, d, I, m, v, F, L, b, y, x, R, W, M, Y, fA, eA, z, CA, iA, uA, UA, FA, cA, hA, D;
                return aA(this, function(_) {
                  switch (_.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      l = void 0, u = c.url, _.label = 1;
                    case 1:
                      return _.trys.push([1, 3, , 4]), [4, s.context.cache.match(u)];
                    case 2:
                      return l = _.sent(), [3, 4];
                    case 3:
                      return _.sent(), s.context.logger.error("Error loading background-image " + u), [3, 4];
                    case 4:
                      return l && (Q = ar(t, r, [
                        l.width,
                        l.height,
                        l.width / l.height
                      ]), x = Q[0], eA = Q[1], z = Q[2], M = Q[3], Y = Q[4], b = s.ctx.createPattern(s.resizeImage(l, M, Y), "repeat"), s.renderRepeat(x, b, eA, z)), [3, 6];
                    case 5:
                      Io(c) ? (g = ar(t, r, [null, null, null]), x = g[0], eA = g[1], z = g[2], M = g[3], Y = g[4], w = po(c.angle, M, Y), f = w[0], C = w[1], d = w[2], I = w[3], m = w[4], v = document.createElement("canvas"), v.width = M, v.height = Y, F = v.getContext("2d"), L = F.createLinearGradient(C, I, d, m), Hn(c.stops, f).forEach(function(G) {
                        return L.addColorStop(G.stop, tA(G.color));
                      }), F.fillStyle = L, F.fillRect(0, 0, M, Y), M > 0 && Y > 0 && (b = s.ctx.createPattern(v, "repeat"), s.renderRepeat(x, b, eA, z))) : yo(c) && (y = ar(t, r, [
                        null,
                        null,
                        null
                      ]), x = y[0], R = y[1], W = y[2], M = y[3], Y = y[4], fA = c.position.length === 0 ? [Or] : c.position, eA = X(fA[0], M), z = X(fA[fA.length - 1], Y), CA = Eo(c, eA, z, M, Y), iA = CA[0], uA = CA[1], iA > 0 && uA > 0 && (UA = s.ctx.createRadialGradient(R + eA, W + z, 0, R + eA, W + z, iA), Hn(c.stops, iA * 2).forEach(function(G) {
                        return UA.addColorStop(G.stop, tA(G.color));
                      }), s.path(x), s.ctx.fillStyle = UA, iA !== uA ? (FA = t.bounds.left + 0.5 * t.bounds.width, cA = t.bounds.top + 0.5 * t.bounds.height, hA = uA / iA, D = 1 / hA, s.ctx.save(), s.ctx.translate(FA, cA), s.ctx.transform(1, 0, 0, hA, 0, 0), s.ctx.translate(-FA, -cA), s.ctx.fillRect(R, D * (W - cA) + cA, M, Y * D), s.ctx.restore()) : s.ctx.fill())), _.label = 6;
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
          return this.path(es(n, r)), this.ctx.fillStyle = tA(t), this.ctx.fill(), [
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
              return a = Lu(s, n), this.path(a), this.ctx.fillStyle = tA(t), this.ctx.fill(), B = xu(s, n), this.path(B), this.ctx.fill(), [
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
              )), r = t.container.styles, n = !kA(r.backgroundColor) || r.backgroundImage.length, s = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], a = _u(ne(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(a), this.ctx.clip(), kA(r.backgroundColor) || (this.ctx.fillStyle = tA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(Q) {
                l.ctx.save();
                var g = Et(t.curves), w = Q.inset ? 0 : Gu, f = bu(g, -w + (Q.inset ? 1 : -1) * Q.spread.number, (Q.inset ? 1 : -1) * Q.spread.number, Q.spread.number * (Q.inset ? -2 : 2), Q.spread.number * (Q.inset ? -2 : 2));
                Q.inset ? (l.path(g), l.ctx.clip(), l.mask(f)) : (l.mask(g), l.ctx.clip(), l.path(f)), l.ctx.shadowOffsetX = Q.offsetX.number + w, l.ctx.shadowOffsetY = Q.offsetY.number, l.ctx.shadowColor = tA(Q.color), l.ctx.shadowBlur = Q.blur.number, l.ctx.fillStyle = Q.inset ? tA(Q.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
              }), u.label = 2;
            case 2:
              B = 0, i = 0, o = s, u.label = 3;
            case 3:
              return i < o.length ? (c = o[i], c.style !== 0 && !kA(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
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
        var B, i, o, c, l, u, Q, g, w, f, C, d, I, m, v, F, v, F;
        return aA(this, function(L) {
          return this.ctx.save(), B = Du(s, n), i = es(s, n), a === 2 && (this.path(i), this.ctx.clip()), pA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), pA(i[1]) ? (l = i[1].end.x, u = i[1].end.y) : (l = i[1].x, u = i[1].y), n === 0 || n === 2 ? Q = Math.abs(o - l) : Q = Math.abs(c - u), this.ctx.beginPath(), a === 3 ? this.formatPath(B) : this.formatPath(i.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, a === 3 && (g = r, w = r), f = !0, Q <= g * 2 ? f = !1 : Q <= g * 2 + w ? (C = Q / (2 * g + w), g *= C, w *= C) : (d = Math.floor((Q + w) / (g + w)), I = (Q - d * g) / (d - 1), m = (Q - (d + 1) * g) / d, w = m <= 0 || Math.abs(w - I) < Math.abs(w - m) ? I : m), f && (a === 3 ? this.ctx.setLineDash([0, g + w]) : this.ctx.setLineDash([g, w])), a === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = tA(t), this.ctx.stroke(), this.ctx.setLineDash([]), a === 2 && (pA(i[0]) && (v = i[3], F = i[0], this.ctx.beginPath(), this.formatPath([new E(v.end.x, v.end.y), new E(F.start.x, F.start.y)]), this.ctx.stroke()), pA(i[1]) && (v = i[1], F = i[2], this.ctx.beginPath(), this.formatPath([new E(v.end.x, v.end.y), new E(F.start.x, F.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
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
              return this.options.backgroundColor && (this.ctx.fillStyle = tA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Ku(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(fa)
), ku = function(e) {
  return e instanceof $s || e instanceof qs ? !0 : e instanceof Vr && e.type !== ht && e.type !== Ft;
}, _u = function(e, A) {
  switch (e) {
    case 0:
      return Et(A);
    case 2:
      return Hu(A);
    case 1:
    default:
      return Ht(A);
  }
}, Pu = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, Xu = ["-apple-system", "system-ui"], Ju = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return Xu.indexOf(A) === -1;
  }) : e;
}, Wu = (
  /** @class */
  function(e) {
    vA(A, e);
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
              return r = vr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Yu(r)];
            case 1:
              return n = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = tA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(fa)
), Yu = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Zu = (
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
), ju = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Zu({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new fu(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), zu = function(e, A) {
  return A === void 0 && (A = {}), qu(e, A);
};
typeof window < "u" && ca.setContext(window);
var qu = function(e, A) {
  return oA(void 0, void 0, void 0, function() {
    var t, r, n, s, a, B, i, o, c, l, u, Q, g, w, f, C, d, I, m, v, L, F, L, b, y, x, R, W, M, Y, fA, eA, z, CA, iA, uA, UA, FA, cA, hA;
    return aA(this, function(D) {
      switch (D.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (b = A.allowTaint) !== null && b !== void 0 ? b : !1,
            imageTimeout: (y = A.imageTimeout) !== null && y !== void 0 ? y : 15e3,
            proxy: A.proxy,
            useCORS: (x = A.useCORS) !== null && x !== void 0 ? x : !1
          }, s = lr({ logging: (R = A.logging) !== null && R !== void 0 ? R : !0, cache: A.cache }, n), a = {
            windowWidth: (W = A.windowWidth) !== null && W !== void 0 ? W : r.innerWidth,
            windowHeight: (M = A.windowHeight) !== null && M !== void 0 ? M : r.innerHeight,
            scrollX: (Y = A.scrollX) !== null && Y !== void 0 ? Y : r.pageXOffset,
            scrollY: (fA = A.scrollY) !== null && fA !== void 0 ? fA : r.pageYOffset
          }, B = new TA(a.scrollX, a.scrollY, a.windowWidth, a.windowHeight), i = new ju(s, B), o = (eA = A.foreignObjectRendering) !== null && eA !== void 0 ? eA : !1, c = {
            allowTaint: (z = A.allowTaint) !== null && z !== void 0 ? z : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + B.width + "x" + B.height + " scrolled to " + -B.left + "," + -B.top), l = new qn(i, e, c), u = l.clonedReferenceElement, u ? [4, l.toIFrame(t, B)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return Q = D.sent(), g = kr(u) || $l(u) ? yB(u.ownerDocument) : vt(i, u), w = g.width, f = g.height, C = g.left, d = g.top, I = $u(i, u, A.backgroundColor), m = {
            canvas: A.canvas,
            backgroundColor: I,
            scale: (iA = (CA = A.scale) !== null && CA !== void 0 ? CA : r.devicePixelRatio) !== null && iA !== void 0 ? iA : 1,
            x: ((uA = A.x) !== null && uA !== void 0 ? uA : 0) + C,
            y: ((UA = A.y) !== null && UA !== void 0 ? UA : 0) + d,
            width: (FA = A.width) !== null && FA !== void 0 ? FA : Math.ceil(w),
            height: (cA = A.height) !== null && cA !== void 0 ? cA : Math.ceil(f)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), L = new Wu(i, m), [4, L.render(u)]) : [3, 3];
        case 2:
          return v = D.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + C + "," + d + " with size " + w + "x" + f + " using computed rendering"), i.logger.debug("Starting DOM parsing"), F = ta(i, u), I === F.styles.backgroundColor && (F.styles.backgroundColor = DA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height), L = new Vu(i, m), [4, L.render(F)];
        case 4:
          v = D.sent(), D.label = 5;
        case 5:
          return (!((hA = A.removeContainer) !== null && hA !== void 0) || hA) && (qn.destroy(Q) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, v];
      }
    });
  });
}, $u = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? ve(e, getComputedStyle(r.documentElement).backgroundColor) : DA.TRANSPARENT, s = r.body ? ve(e, getComputedStyle(r.body).backgroundColor) : DA.TRANSPARENT, a = typeof t == "string" ? ve(e, t) : t === null ? DA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? kA(n) ? kA(s) ? a : s : n : a;
};
const gt = {
  pdf: "Download PDF",
  image: "Download Image",
  csv: "Download Data (CSV)",
  link: "Link to Dataset"
}, Ag = (e, A) => {
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
}, Ca = (e, A, t) => {
  const r = document.querySelector(`[data-download-id=${t}]`), n = (B) => {
    var i, o;
    return (i = B == null ? void 0 : B.dashboard) != null && i.title ? B.dashboard.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : (o = B == null ? void 0 : B.general) != null && o.title ? B.general.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : B != null && B.title ? B.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : "no-title";
  }, s = /* @__PURE__ */ new Date(), a = n(e);
  switch (A) {
    case "image":
      zu(r, {
        ignoreElements: (B) => {
          var i;
          return ((i = B.className) == null ? void 0 : i.indexOf) && B.className.search(/download-buttons|download-links|data-table-container/) !== -1;
        }
      }).then((B) => {
        Ag(B.toDataURL(), a + ".png");
      });
      return;
    case "pdf":
      console.warn("COVE: pdf downloads disabled");
      break;
    default:
      console.warn("COVE: generateMedia param 2 type must be 'image' or 'pdf'");
      break;
  }
}, eg = ({ state: e, text: A, type: t, title: r, elementToCapture: n }) => {
  const s = ["btn", "btn-primary"];
  return /* @__PURE__ */ p.createElement(
    "button",
    {
      className: s.join(" "),
      title: r,
      onClick: () => Ca(e, t, n),
      style: { lineHeight: "1.4em" }
    },
    gt[t]
  );
}, tg = ({ config: e, dashboardDataConfig: A }) => {
  var r;
  let t = A || e;
  return t.dataFileSourceType === "url" && t.dataFileName && e.table.showDownloadUrl ? /* @__PURE__ */ p.createElement("a", { href: t.dataFileName, title: gt.link, target: "_blank" }, gt.link) : (r = e == null ? void 0 : e.table) != null && r.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ p.createElement("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank" }, gt.link) : null;
}, rg = ({ children: e, classes: A }) => /* @__PURE__ */ p.createElement("section", { className: A.join(" ") }, /* @__PURE__ */ p.createElement("span", null, e)), oe = () => null;
oe.Section = rg;
oe.Link = tg;
oe.Button = eg;
oe.generateMedia = Ca;
const ng = ({ rawData: e, fileName: A, headerColor: t, skipId: r }) => {
  const n = Ea.unparse(e), s = new Blob([n], { type: "text/csv;charset=utf-8;" }), a = () => {
    typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(s, A);
  };
  return /* @__PURE__ */ p.createElement("a", { download: A, type: "button", onClick: a, href: URL.createObjectURL(s), "aria-label": "Download this data in a CSV file format.", className: `${t} no-border`, id: `${r}`, "data-html2canvas-ignore": !0, role: "button" }, "Download Data (CSV)");
};
function sg(e = void 0, A) {
  return gs(e)(A);
}
function Dr(e = void 0, A) {
  return wt(e)(A) || /* @__PURE__ */ new Date();
}
const Sg = (e) => {
  try {
    if (!e)
      throw new Error("COVE: No axis passed to isDateScale");
    return ["date", "date-time"].includes(e.type);
  } catch ({ message: A }) {
    console.warn(A);
  }
}, ag = {
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
}, rs = (e) => {
  if (typeof e != "string" || !isNaN(Number(e)))
    return e;
  const A = e.toUpperCase();
  return ["U.S. VIRGIN ISLANDS", "VI", "US VIRGIN ISLANDS", "VIRGIN ISLANDS"].includes(A) ? "U.S. VIRGIN ISLANDS" : ag[A] || e;
}, Qt = (e, A, t, r) => {
  var c, l, u;
  let n = e, s = A;
  if (r.type === "map" && (n = rs(e), s = rs(A), String(n).toLowerCase().includes("region") && String(s).toLowerCase().includes("region"))) {
    const Q = parseInt(e.match(/\d+$/)[0], 10), g = parseInt(A.match(/\d+$/)[0], 10);
    return t.asc ? Number(Q) - Number(g) : Number(g) - Number(Q);
  }
  n = n === !1 || n === !0 || n === null ? "" : n, s = s === !1 || s === !0 || s === null ? "" : s;
  const a = String(n).trim(), B = String(s).trim();
  if (((c = r.xAxis) == null ? void 0 : c.dataKey) === t.column && ["date", "date-time"].includes(r.xAxis.type)) {
    const Q = (l = Dr(r.xAxis.dateParseFormat, a)) == null ? void 0 : l.getTime(), g = (u = Dr(r.xAxis.dateParseFormat, B)) == null ? void 0 : u.getTime();
    return t.asc ? Q - g : g - Q;
  }
  const i = !isNaN(Number(n)) && n !== void 0 && n !== null && a !== "", o = !isNaN(Number(s)) && s !== void 0 && s !== null && B !== "";
  return a === "" && B !== "" ? t.asc ? -1 : 1 : a !== "" && B === "" ? t.asc ? 1 : -1 : i && o ? t.asc ? Number(n) - Number(s) : Number(s) - Number(n) : i ? t.asc ? -1 : 1 : o ? t.asc ? 1 : -1 : t.asc ? a.localeCompare(B) : B.localeCompare(a);
}, ns = (e) => {
  let A = "", t = Math.abs(e);
  return t >= 1e9 ? (A = "B", e = e / 1e9) : t >= 1e6 ? (A = "M", e = e / 1e6) : t >= 1e3 && (A = "K", e = e / 1e3), e + A;
}, Br = (e, A, t = !1, r = null, n = null) => {
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
      rightRoundTo: f,
      rightSuffix: C,
      roundTo: d,
      suffix: I
    }
  } = r;
  const { addColCommas: m, addColRoundTo: v, addColPrefix: F, addColSuffix: L } = n || {};
  String(e).indexOf(",") !== -1 && (e = e.replaceAll(",", ""));
  let b = e, y;
  if (A === "left") {
    let R;
    v !== void 0 ? R = v ? Number(v) : 0 : R = d ? Number(d) : 0, R < 0 && (R = 0);
    let W;
    m !== void 0 ? W = !!m : W = !!r.dataFormat.commas, y = {
      useGrouping: W,
      minimumFractionDigits: R,
      maximumFractionDigits: R
    };
  }
  if (A === "right" && (y = {
    useGrouping: !!r.dataFormat.rightCommas,
    minimumFractionDigits: f ? Number(f) : 0,
    maximumFractionDigits: f ? Number(f) : 0
  }), A === "bottom" && (y = {
    useGrouping: !!r.dataFormat.bottomCommas,
    minimumFractionDigits: o ? Number(o) : 0,
    maximumFractionDigits: o ? Number(o) : 0
  }), e = Xr(e), isNaN(e))
    return r.runtime.editorErrorMessage = `Unable to parse number from data ${b}. Try reviewing your data and selections in the Data Series section.`, b;
  if (!r.dataFormat)
    return e;
  if (r.dataCutoff) {
    let R = Xr(r.dataCutoff);
    e < R && (e = R);
  }
  A === "left" && u && a && t || A === "bottom" && u && a && t ? e = e : e = e.toLocaleString("en-US", y);
  let x = "";
  return a && A === "left" && t && (e = ns(parseFloat(e))), B && A === "bottom" && t && (e = ns(parseFloat(e))), Q || (F !== void 0 && A === "left" ? x = F + x : g && A === "left" && (x = g + x), w && A === "right" && (x += w), i && A === "bottom" && (x += i)), x += e, Q || (L !== void 0 && A === "left" ? x += L : I && A === "left" && (x += I), C && A === "right" && (x += C), c && A === "bottom" && (x += c)), s && (x = "-" + x), String(x);
}, Bg = (e, A) => {
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
}, se = (e, A, t, r) => {
  var i, o, c, l, u;
  if (t.visualizationType === "Sankey" || (i = r == null ? void 0 : r[0]) != null && i.tableData)
    return r[e][A];
  const n = r[e];
  let s;
  const a = n[A];
  if (A === ((o = t.xAxis) == null ? void 0 : o.dataKey)) {
    const { type: Q, dateDisplayFormat: g, dateParseFormat: w } = t.xAxis || {}, f = ((c = t.table) == null ? void 0 : c.dateDisplayFormat) || g;
    Q === "date" || Q === "date-time" ? s = sg(f, Dr(w, a)) : Q === "continuous" ? s = Br(r[e][A], "bottom", !1, t) : s = a;
  } else {
    let Q = "left", g = t.series ? t.series.filter((C) => (C == null ? void 0 : C.axis) === "Left") : [], w = t.series ? t.series.filter((C) => (C == null ? void 0 : C.axis) === "Right") : [];
    g.map((C) => {
      C.dataKey === A && (Q = "left");
    }), w.map((C) => {
      C.dataKey === A && (Q = "right");
    });
    let f = Bg(A, t);
    f ? s = t.dataFormat ? Br(r[e][A], Q, !1, t, f) : r[e][A] : s = t.dataFormat ? Br(r[e][A], Q, !1, t) : r[e][A];
  }
  return (l = t.preliminaryData) == null || l.forEach((Q) => {
    var I, m, v, F;
    const g = String(Q.value) === String(a), w = !Q.column || Q.column === A, f = (m = (I = t.runtime) == null ? void 0 : I.barSeriesKeys) == null ? void 0 : m.includes(A), C = (F = (v = t.runtime) == null ? void 0 : v.lineSeriesKeys) == null ? void 0 : F.includes(A), d = t.general.showSuppressedSymbol;
    if (g && w && Q.displayTable && Q.type === "suppression" && t.visualizationSubType !== "stacked")
      switch (t.visualizationType) {
        case "Combo":
          s = f && d ? Q.iconCode : C && d ? Q.lineCode : "";
          break;
        case "Bar":
          s = d ? Q.iconCode : "";
          break;
        case "Line":
          s = d ? Q.lineCode : "";
          break;
      }
  }), ((u = t.general) == null ? void 0 : u.showMissingDataLabel) && (!a || a === "null") ? "N/A" : s;
}, ig = (e, A) => {
  const r = Object.values(A.columns || {}).find((n) => n.name === e);
  return r != null && r.label ? r.label : e;
}, Ua = (e, A) => {
  var s, a, B;
  const t = (s = A.series) == null ? void 0 : s.find((i) => i.dataKey === e);
  if (t != null && t.name)
    return t.name;
  if (A.runtimeSeriesLabels && A.runtimeSeriesLabels[e])
    return A.runtimeSeriesLabels[e];
  const r = e === ((a = A.xAxis) == null ? void 0 : a.dataKey), n = (B = A.table) == null ? void 0 : B.indexLabel;
  return r && n ? n : ig(e, A);
}, Fa = (e, A, t) => {
  var i, o, c, l, u, Q, g, w;
  if (e.visualizationType === "Sankey")
    return Object.keys((o = (i = e == null ? void 0 : e.data) == null ? void 0 : i[0]) == null ? void 0 : o.tableData[0]);
  const r = Te.cloneDeep(e.columns) || {}, n = Object.values(r).filter((f) => f.dataTable === !1).map((f) => f.name);
  let s = [];
  e.visualizationType !== "Pie" ? (s = A ? [(c = e.xAxis) == null ? void 0 : c.dataKey] : [], (l = e.runtime) != null && l.series ? (u = e.runtime) == null || u.series.forEach((f) => {
    s.push(f.dataKey);
  }) : t && t.length > 0 && (s = Object.keys(t[0]))) : s = A ? [(Q = e.xAxis) == null ? void 0 : Q.dataKey, (g = e.yAxis) == null ? void 0 : g.dataKey] : [(w = e.yAxis) == null ? void 0 : w.dataKey];
  const a = Object.keys(t[0] || {});
  Object.values(r).forEach(function(f) {
    var I;
    if (!f.name)
      return;
    const C = s.includes(f.name), d = a.includes(f.name);
    f.name !== ((I = e.xAxis) == null ? void 0 : I.dataKey) && f.dataTable === !0 && !C && d && s.push(f.name);
  });
  const B = Object.values(r).reduce((f, C) => (C.order !== void 0 && (f[C.name] = C.order - 1), f), {});
  return s = s.filter((f) => !n.includes(f)), s.forEach((f, C) => {
    B[f] === void 0 && (Object.values(B).includes(C) ? B[f] = C + 1 : B[f] = C);
  }), s.sort((f, C) => f === "pivotColumn" ? -1 : C === "pivotColumn" ? 1 : B[f] - B[C]), s;
}, ha = (e) => {
  const A = e.as;
  return /* @__PURE__ */ p.createElement(A, { className: "cdcdataviz-sr-only" }, e.children);
};
const og = ({ active: e }) => /* @__PURE__ */ p.createElement("svg", { className: "up" + (e ? " active" : ""), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ p.createElement("path", { d: "M0 5l5-5 5 5z" })), cg = ({ active: e }) => /* @__PURE__ */ p.createElement("svg", { className: "down" + (e ? " active" : ""), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ p.createElement("path", { d: "M0 0l5 5 5-5z" })), Tr = ({ ascending: e }) => /* @__PURE__ */ p.createElement("span", { role: "button", className: "sort-icon" }, /* @__PURE__ */ p.createElement(og, { active: e === !0 }), /* @__PURE__ */ p.createElement(cg, { active: e === !1 })), Sr = (e, A, t) => {
  let r, n = A;
  const s = e.asc === !0, a = e.asc === !1, B = e.asc === void 0;
  return e.column === void 0 || e.column !== A ? r = !0 : (a && (n = void 0, r = void 0), B && (r = !0), s && (r = !1)), { column: n, asc: r, colIndex: t };
}, lg = ({ data: e, isVertical: A, config: t, setSortBy: r, sortBy: n, hasRowType: s, viewport: a }) => {
  var l;
  const B = (l = t.table) == null ? void 0 : l.groupBy;
  if (!e)
    return;
  let i = Fa(t, A, e);
  if (B) {
    let u = i.filter((Q) => Q !== B);
    u.length != i.length && (i = u);
  }
  const o = ({ text: u, config: Q, sortBy: g }) => {
    const w = "Not Applicable";
    let f = `${u} `;
    if ((u !== "__series__" || u !== "") && (f = `${u} `), (u === "__series__" || u === "") && !Q.table.indexLabel && (f = w), (u === "__series__" || u === "") && Q.table.indexLabel && (f = Q.table.indexLabel), f !== w)
      return /* @__PURE__ */ p.createElement("span", { className: "cdcdataviz-sr-only" }, `Press command, modifier, or enter key to sort by ${f} in ${g.column !== f ? "ascending" : g.column === "desc" ? "descending" : "ascending"}  order`);
  }, c = ({ column: u, text: Q, config: g }) => {
    if (Q === "pivotColumn")
      return "";
    let w = "Not Applicable";
    return Q === "__series__" && g.table.indexLabel ? `${g.table.indexLabel} ` : Q === "__series__" && !g.table.indexLabel ? /* @__PURE__ */ p.createElement(ha, { as: "span" }, w) : Q;
  };
  if (A) {
    if (s) {
      const u = /row[_-]?type/i, Q = i.findIndex((g) => u.test(g));
      Q > -1 && i.splice(Q, 1);
    }
    return /* @__PURE__ */ p.createElement("tr", null, i.map((u, Q) => {
      const g = Ua(u, t), w = Sr(n, u, Q), f = n.column === u ? n.asc : void 0;
      return /* @__PURE__ */ p.createElement(
        "th",
        {
          style: { minWidth: (t.table.cellMinWidth || 0) + "px" },
          key: `col-header-${u}__${Q}`,
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            s || r(w);
          },
          onKeyDown: (C) => {
            s || C.keyCode === 13 && r(w);
          },
          ...n.column === u ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        /* @__PURE__ */ p.createElement(c, { text: g, column: u, config: t }),
        u === n.column && !s && /* @__PURE__ */ p.createElement(Tr, { ascending: f }),
        /* @__PURE__ */ p.createElement(o, { sortBy: n, config: t, text: g })
      );
    }));
  } else {
    const u = t.visualizationType === "Pie" ? 1 : 0;
    return /* @__PURE__ */ p.createElement("tr", null, ["__series__", ...Object.keys(e)].slice(u).map((Q, g) => {
      var I;
      let w = (I = t.xAxis) == null ? void 0 : I.dataKey, f = Q !== "__series__" ? se(Q, w, t, e) : "__series__";
      const C = Sr(n, w, g), d = n.colIndex === g ? n.asc : void 0;
      return /* @__PURE__ */ p.createElement(
        "th",
        {
          style: { minWidth: (t.table.cellMinWidth || 0) + "px" },
          key: `col-header-${f}__${g}`,
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            r(C);
          },
          onKeyDown: (m) => {
            m.keyCode === 13 && r(C);
          },
          ...n.column === f ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        /* @__PURE__ */ p.createElement(c, { text: f, column: w, config: t }),
        g === n.colIndex && !s && /* @__PURE__ */ p.createElement(Tr, { ascending: d }),
        /* @__PURE__ */ p.createElement(o, { text: f, config: t, sortBy: n })
      );
    }));
  }
}, ug = ({ categories: e }) => {
  let A = ["Measures", ...e];
  return /* @__PURE__ */ p.createElement("tr", null, A.map((t) => /* @__PURE__ */ p.createElement("th", { key: `col-header-${t}`, tabIndex: 0, title: t, role: "columnheader", scope: "col" }, t)));
}, gg = ({ text: e, config: A }) => {
  let t = "Not Applicable";
  return e === "__series__" && A.table.indexLabel ? `${A.table.indexLabel} ` : e === "__series__" && !A.table.indexLabel ? /* @__PURE__ */ p.createElement(ha, { as: "span" }, t) : e;
}, Qg = ({ columns: e, config: A, indexTitle: t, sortBy: r, setSortBy: n }) => /* @__PURE__ */ p.createElement("tr", null, Object.keys(e).filter((s) => e[s].dataTable === !0 && e[s].name).map((s, a) => {
  var c;
  let B;
  s && s !== "geo" ? B = e[s].label ? e[s].label : e[s].name : B = A.type === "map" ? t : (c = A.xAxis) == null ? void 0 : c.dataKey, A.type === "map" && (B === void 0 || B === "") && (B = "Location");
  const i = Sr(r, s, a), o = r.column === s ? r.asc : void 0;
  return /* @__PURE__ */ p.createElement(
    "th",
    {
      key: `col-header-${s}__${a}`,
      id: s,
      tabIndex: 0,
      role: "columnheader",
      scope: "col",
      onClick: () => {
        n(i);
      },
      onKeyDown: (l) => {
        l.keyCode === 13 && n(i);
      },
      className: r.column === s ? r.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
      ...r.column === s ? r.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
    },
    /* @__PURE__ */ p.createElement(gg, { text: B, config: A, column: s }),
    /* @__PURE__ */ p.createElement(Tr, { ascending: o }),
    /* @__PURE__ */ p.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${B} in ${r.column === s && r.asc ? "ascending" : "descending"} order`)
  );
})), ss = ({ expanded: e, setExpanded: A, tableTitle: t, fontSize: r, viewport: n }) => /* @__PURE__ */ p.createElement(
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
    }
  },
  /* @__PURE__ */ p.createElement(va, { display: e ? "minus" : "plus", base: !0 }),
  t
), da = (e) => {
  const { fill: A, borderColor: t, display: r = "inline-block", shape: n = "circle" } = e, s = { width: "1em", height: "1em" }, a = ["circle", "square"].includes(n), B = {
    borderRadius: n === "circle" ? "50%" : "0px",
    verticalAlign: "middle",
    display: r,
    height: s.height,
    width: s.width,
    border: t ? `${t} 1px solid` : "rgba(0,0,0,.3) 1px solid",
    backgroundColor: A
  };
  return /* @__PURE__ */ p.createElement("span", { className: `legend-item ${a ? "me-2" : ""}`, style: B });
}, wg = (e) => /* @__PURE__ */ yA.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ yA.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" }));
function fg(e) {
  const A = ["cdc.gov", "localhost", "facebook.com", "twitter.com", "linkedin.com", "pinterest.com", "youtube.com", "youtube-nocookie.com", "plus.google.com", "instagram.com", "flickr.com", "tumblr.com", "cdc.sharepoint.com", "vaccines.gov", "vacunas.gov"], t = new URL(e, window.location.origin).hostname;
  let r = !0;
  return A.forEach((n) => {
    t.indexOf(n) !== -1 && t.indexOf(n) === t.length - n.length && (r = !1);
  }), r;
}
const Cg = ({ markup: e, row: A, columns: t, navigationHandler: r, mapZoomHandler: n }) => t.navigate && A[t.navigate.name] ? /* @__PURE__ */ p.createElement(
  "span",
  {
    onClick: () => r(A[t.navigate.name]),
    className: "table-link",
    title: "Click for more information (Opens in a new window)",
    role: "link",
    tabIndex: 0,
    onKeyDown: (s) => {
      s.keyCode === 13 && r(A[t.navigate.name]);
    }
  },
  e,
  fg(A[t.navigate.name]) && /* @__PURE__ */ p.createElement(wg, { className: "inline-icon" })
) : n ? /* @__PURE__ */ p.createElement(
  "span",
  {
    onClick: n,
    className: "table-link",
    title: "Click to view on map",
    role: "link",
    tabIndex: 0,
    onKeyDown: (s) => {
      s.keyCode === 13 && n();
    }
  },
  e
) : /* @__PURE__ */ p.createElement(p.Fragment, null, e), Ug = (e, A, t) => {
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
}, Fg = ({
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
        const f = (C) => C.charAt(0).toUpperCase() + C.slice(1);
        g = s(o), g = String(g).startsWith("region") ? f(g) : g;
      } else
        g = a(o);
      l = /* @__PURE__ */ p.createElement("div", { className: "col-12" }, /* @__PURE__ */ p.createElement(da, { fill: Q[0] }), /* @__PURE__ */ p.createElement(
        Cg,
        {
          markup: g,
          row: u,
          columns: A,
          navigationHandler: B,
          mapZoomHandler: w
        }
      ));
    } else {
      let u = "", Q = r.columns[c].name;
      const { specialClasses: g } = r.legend;
      g && g.length && typeof g[0] == "object" && g.forEach((w) => {
        w.key === Q && String(t[o][w.key]) === w.value && (u = w.label);
      }), l = Ug(u || t[o][Q], c, r);
    }
    return l;
  })
), hg = (e) => {
  const A = Object.keys(e).find((t) => t.match(/row[_-]?type/i));
  return e[A];
}, dg = ({ rows: e, runtimeData: A, config: t, isVertical: r, sortBy: n, colorScale: s, hasRowType: a }) => {
  var c;
  const B = (c = t.table) == null ? void 0 : c.groupBy, i = Fa(t, r, A), o = () => !n && n.colIndex === null ? i : i.sort((l, u) => {
    if (n.column === "__series__")
      return Qt(l, u, n, t);
    let Q = A.find((w) => {
      var f;
      return w[(f = t.xAxis) == null ? void 0 : f.dataKey] === n.column;
    });
    const g = A[n.colIndex - 1];
    if (Q)
      return Qt(Q[l], Q[u], n, t);
    if (Q === void 0 && g)
      return Qt(g[l], g[u], n, t);
  });
  if (r)
    if (B) {
      const l = {};
      return e.forEach((u) => {
        let Q, g = [];
        i.forEach((w, f) => {
          B === w ? Q = se(u, w, t, A) : g.push(se(u, w, t, A));
        }), l[Q] ? l[Q].push(g) : l[Q] = [g];
      }), l;
    } else
      return e.map((l) => {
        if (a) {
          const u = hg(A[l]), Q = i.map((g) => se(l, g, t, A));
          return [u, ...Q];
        } else
          return i.map((u, Q) => se(l, u, t, A));
      });
  else
    return o().map((l) => {
      const u = Ua(l, t);
      return (t.visualizationType !== "Pie" ? [
        /* @__PURE__ */ p.createElement(p.Fragment, null, s && s(u) && /* @__PURE__ */ p.createElement(da, { fill: s(u) }), u)
      ] : []).concat(e.map((g, w) => se(g, l, t, A)));
    });
}, pg = ({ config: e }) => e.regions.map((A) => e.visualizationType === "Box Plot" ? [] : !Object.keys(A).includes("from") || !Object.keys(A).includes("to") ? [] : [A.label, A.from, A.to]), Eg = ({ rows: e, config: A }) => {
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
  let r = (a, B) => Number(a) === 0 ? B.columnMax : Number(a) === 1 ? B.columnThirdQuartile : Number(a) === 2 ? B.columnMedian : Number(a) === 3 ? B.columnFirstQuartile : Number(a) === 4 ? B.columnMin : Number(a) === 5 ? B.columnCount : Number(a) === 6 ? B.columnSd : Number(a) === 7 ? B.columnMean : Number(a) === 8 ? B.columnIqr : Number(a) === 9 ? B.values.length > 0 ? B.values.toString() : "-" : Number(a) === 10 ? B.columnLowerBounds : Number(a) === 11 ? B.columnUpperBounds : Number(a) === 12 ? B.columnOutliers.length > 0 ? B.columnOutliers.toString() : "-" : Number(a) === 13 ? B.columnNonOutliers.length > 0 ? B.columnNonOutliers.toString() : "-" : /* @__PURE__ */ p.createElement("p", null, "-"), n = e.map((a) => a[0]), s = ["Measures", ...A.boxplot.categories];
  return n.shift(), n.map((a, B) => s.map((i, o) => {
    let c;
    if (i === "Measures") {
      let l = t(a);
      c = /* @__PURE__ */ p.createElement(p.Fragment, null, l);
    } else
      c = r(B, A.boxplot.plots[o - 1]);
    return c;
  }));
}, Hg = (e) => {
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
}, as = (e, A) => A.map((t) => e[t] || "").join(":"), mg = (e, A, t) => {
  const r = [A, ...t];
  return Te.uniq(e.flatMap((n) => Object.keys(n))).filter((n) => !r.includes(n));
}, vg = (e, A, t) => {
  const r = mg(e, A, t), n = {}, s = e.reduce((a, B) => {
    const i = as(B, r);
    return a[i] || (a[i] = {}), a;
  }, {});
  return e.forEach((a) => {
    const B = as(a, r);
    if (t.length > 1)
      t.forEach((i) => {
        const o = Te.omit(a, [A, ...t]);
        s[B][i] = {
          ...s[B][i],
          ...o,
          [a[A]]: a[i]
        };
      });
    else {
      const i = t[0], o = Te.omit(a, [A, ...t]);
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
};
const Mg = (e) => {
  var iA, uA, UA, FA, cA, hA;
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
  } = e, w = yA.useMemo(() => {
    const D = Hg(B);
    if (A.table.pivot) {
      const _ = Object.values(A.columns || {}).filter((h) => h.dataTable === !1).map((h) => h.name), { columnName: G, valueColumns: k } = A.table.pivot;
      if (G && k) {
        const h = D.map((K) => Te.omit(K, _));
        return vg(h, G, k);
      }
    }
    return D;
  }, [B, (iA = A.table.pivot) == null ? void 0 : iA.columnName, (uA = A.table.pivot) == null ? void 0 : uA.valueColumn]), [f, C] = yA.useState(o), [d, I] = yA.useState({
    column: r || "",
    asc: !1,
    colIndex: null
  }), [m, v] = yA.useState(""), F = !(A.type === "chart" && !((UA = A.table) != null && UA.showVertical)), b = `btn__${Math.random().toString(16).substr(2, 8)}`, y = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  };
  switch (yA.useEffect(() => {
    const D = "Accessible data table.", _ = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    f === !0 && m !== D && v(D), f === !1 && m !== _ && v(_);
  }, [f]), A.visualizationType) {
    case "Box Plot":
      if (!A.boxplot)
        return /* @__PURE__ */ p.createElement(Mt, null);
      break;
    case "Line":
      if (!w)
        return /* @__PURE__ */ p.createElement(Mt, null);
      break;
    default:
      if (!w)
        return /* @__PURE__ */ p.createElement(Mt, null);
      break;
  }
  const x = Object.keys(w).filter((D) => D != "columns"), R = F && d.column ? x.sort((D, _) => {
    let G, k;
    if (A.type === "map" && A.columns) {
      const h = A.columns[d.column].name;
      G = w[D][h], k = w[_][h];
    }
    return ["chart", "dashboard", "table"].includes(A.type) && (G = w[D][d.column], k = w[_][d.column]), !G && !k && A.type === "chart" && A.xAxis && A.xAxis.type === "date-time" && (G = wt(A.runtime.xAxis.dateParseFormat)(w[D][A.xAxis.dataKey]), k = wt(A.runtime.xAxis.dateParseFormat)(w[_][A.xAxis.dataKey])), G && k ? Qt(G, k, d, A) : 0;
  }) : x, W = {
    maxHeight: A.table.limitHeight && `${A.table.height}px`,
    OverflowY: "scroll"
  }, M = !!Object.keys((a == null ? void 0 : a[0]) || {}).find((D) => D.match(/row[_-]?type/i)), Y = yA.useMemo(() => A.type === "map" ? A.table.caption ? A.table.caption : `Data table showing data for the ${y[A.general.geoType]} figure.` : A.table.caption ? A.table.caption : `Data table showing data for the ${A.type} figure.`, [A.table.caption]), fA = (FA = A == null ? void 0 : A.regions) == null ? void 0 : FA.every((D) => {
    const _ = D.toType === "Fixed", G = D.fromType === "Fixed", k = !D.toType, h = !D.fromType;
    return _ && G || k && h || _ && h || G && k;
  }), eA = yA.useMemo(
    () => {
      var D, _, G, k, h, K, T, U, q;
      return (_ = (D = A.data) == null ? void 0 : D[0]) != null && _.tableData ? (k = (G = A.data) == null ? void 0 : G[0]) == null ? void 0 : k.tableData : A.visualizationType === "Sankey" ? (K = (h = A.data) == null ? void 0 : h[0]) == null ? void 0 : K.tableData : A.visualizationType === "Pie" ? [A.yAxis.dataKey] : A.visualizationType === "Box Plot" ? (U = (T = A == null ? void 0 : A.boxplot) == null ? void 0 : T.plots) != null && U[0] ? Object.entries(A.boxplot.plots[0]) : [] : (q = A.runtime) == null ? void 0 : q.seriesKeys;
    },
    [(cA = A.runtime) == null ? void 0 : cA.seriesKeys]
  ), z = w.length === 0, CA = () => {
    var G, k;
    const D = ["data-table-container"];
    return A.table.showDownloadLinkBelow && D.push("mt-4"), ((G = A == null ? void 0 : A.brush) == null ? void 0 : G.active) && ((k = A.legend) == null ? void 0 : k.position) !== "bottom" && D.push("brush-active"), D.push(l), D.join(" ");
  };
  if (A.visualizationType !== "Box Plot") {
    const D = () => {
      var k;
      return ((k = A.general) == null ? void 0 : k.geoType) === "us-county" ? a.map((h) => ({ FullGeoName: u(h[A.columns.geo.name]), ...h })) : a;
    }, _ = (k) => {
      var K, T, U;
      const h = ["download-links"];
      if (k)
        h.push("mt-2");
      else {
        h.push("mt-4", "mb-2");
        const q = ((K = A == null ? void 0 : A.legend) == null ? void 0 : K.position) === "bottom" || pa(l);
        (T = A.brush) != null && T.active && !q && h.push("brush-active"), (U = A.brush) != null && U.active && A.legend.hide && h.push("brush-active");
      }
      return h;
    }, G = ({ belowTable: k }) => {
      var h;
      return /* @__PURE__ */ p.createElement(oe.Section, { classes: _(k) }, /* @__PURE__ */ p.createElement(oe.Link, { config: A, dashboardDataConfig: t }), (A.table.download || ((h = A.general) == null ? void 0 : h.showDownloadButton)) && /* @__PURE__ */ p.createElement(
        ng,
        {
          rawData: D(),
          fileName: `${s || "data-table"}.csv`,
          headerColor: i
        }
      ));
    };
    return /* @__PURE__ */ p.createElement(Pr, { component: "DataTable" }, !A.table.showDownloadLinkBelow && /* @__PURE__ */ p.createElement(G, null), /* @__PURE__ */ p.createElement("section", { id: Q.replace("#", ""), className: CA(), "aria-label": m }, /* @__PURE__ */ p.createElement(Jr, { skipId: b, skipMessage: "Skip Data Table" }), A.table.collapsible !== !1 && /* @__PURE__ */ p.createElement(ss, { expanded: f, setExpanded: C, tableTitle: n, viewport: l }), /* @__PURE__ */ p.createElement("div", { className: "table-container", style: W }, /* @__PURE__ */ p.createElement(
      Ot,
      {
        preliminaryData: A.preliminaryData,
        viewport: l,
        wrapColumns: g,
        noData: z,
        childrenMatrix: A.type === "map" ? Fg({ rows: R, wrapColumns: g, ...e, runtimeData: w, viewport: l }) : dg({ rows: R, ...e, runtimeData: w, isVertical: F, sortBy: d, hasRowType: M, viewport: l }),
        tableName: A.type,
        caption: Y,
        stickyHeader: !0,
        hasRowType: M,
        headContent: A.type === "map" ? /* @__PURE__ */ p.createElement(Qg, { columns: c, ...e, sortBy: d, setSortBy: I }) : /* @__PURE__ */ p.createElement(
          lg,
          {
            data: w,
            ...e,
            hasRowType: M,
            isVertical: F,
            sortBy: d,
            setSortBy: I,
            viewport: l
          }
        ),
        tableOptions: {
          className: `table table-striped ${f ? "data-table" : "data-table cdcdataviz-sr-only"}${F ? "" : " horizontal"}`,
          "aria-live": "assertive",
          "aria-rowcount": (hA = A == null ? void 0 : A.data) != null && hA.length ? A.data.length : -1,
          hidden: !f
        }
      }
    ), fA && A.regions && A.regions.length > 0 && A.visualizationType !== "Box Plot" && /* @__PURE__ */ p.createElement(
      Ot,
      {
        viewport: l,
        wrapColumns: g,
        childrenMatrix: pg({ config: A }),
        noData: z,
        tableName: A.visualizationType,
        caption: "Table of the highlighted regions in the visualization",
        headContent: /* @__PURE__ */ p.createElement("tr", null, /* @__PURE__ */ p.createElement("th", null, "Region Name"), /* @__PURE__ */ p.createElement("th", null, "Start Date"), /* @__PURE__ */ p.createElement("th", null, "End Date")),
        tableOptions: { className: "table table-striped region-table data-table" }
      }
    ))), A.table.showDownloadLinkBelow && /* @__PURE__ */ p.createElement(G, { belowTable: !0 }), /* @__PURE__ */ p.createElement("div", { id: b, className: "cdcdataviz-sr-only" }, "Skipped data table."));
  } else
    return /* @__PURE__ */ p.createElement(Pr, { component: "DataTable" }, /* @__PURE__ */ p.createElement("section", { id: Q.replace("#", ""), className: CA(), "aria-label": m }, /* @__PURE__ */ p.createElement(Jr, { skipId: b, skipMessage: "Skip Data Table" }), /* @__PURE__ */ p.createElement(ss, { expanded: f, setExpanded: C, tableTitle: n }), /* @__PURE__ */ p.createElement("div", { className: "table-container", style: W }, /* @__PURE__ */ p.createElement(
      Ot,
      {
        viewport: l,
        wrapColumns: g,
        childrenMatrix: Eg({ rows: eA, config: A }),
        noData: z,
        tableName: A.visualizationType,
        caption: Y,
        stickyHeader: !0,
        headContent: /* @__PURE__ */ p.createElement(ug, { categories: A.boxplot.categories }),
        tableOptions: {
          className: `table table-striped ${f ? "data-table" : "data-table cdcdataviz-sr-only"}`,
          "aria-live": "assertive",
          "aria-rowcount": 11,
          hidden: !f
        }
      }
    ))), /* @__PURE__ */ p.createElement("div", { id: b, className: "cdcdataviz-sr-only" }, "Skipped data table."));
};
export {
  Mg as D,
  da as L,
  oe as M,
  Jr as S,
  Sg as a,
  sg as b,
  Ug as d,
  Br as f,
  fg as i,
  gs as t
};
