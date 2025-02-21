import { r as IA, R as ie } from "./storybook-index-45401197.es.js";
import { L as Mt, E as Pr, a as Hs } from "./storybook-viewports-5c5d7af1.es.js";
import { P as ms } from "./storybook-papaparse.min-b07ddc33.es.js";
import { i as ir, u as ia, j as or, c as oa, f as Le, e as vs, k as xe, h as De, g as Is, l as Te } from "./storybook-year-24bd1dc7.es.js";
import { n as Xr } from "./storybook-numberFromString-24623c03.es.js";
import { _ as ZA } from "./storybook-lodash-a4231e1c.es.js";
import { a as ys } from "./storybook-Icon-d8cd8abc.es.js";
import { T as Ot } from "./storybook-Table-437adc6c.es.js";
const Jr = ({ skipId: e, skipMessage: A }) => {
  const t = IA.useId(), r = () => {
    const n = document.getElementById(e);
    if (n) {
      n.scrollIntoView(), n.setAttribute("tabIndex", "-1"), n.focus();
      const a = () => {
        n.removeAttribute("tabIndex"), n.removeEventListener("blur", a);
      };
      n.addEventListener("blur", a);
    }
  };
  return /* @__PURE__ */ React.createElement(
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
function Rt(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return A.setFullYear(e.y), A;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Nt(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return A.setUTCFullYear(e.y), A;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ue(e, A, t) {
  return { y: e, m: A, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function bs(e) {
  var A = e.dateTime, t = e.date, r = e.time, n = e.periods, a = e.days, s = e.shortDays, B = e.months, i = e.shortMonths, o = ge(n), c = Qe(n), l = ge(a), u = Qe(a), Q = ge(s), g = Qe(s), w = ge(B), C = Qe(B), f = ge(i), h = Qe(i), I = {
    a: Y,
    A: wA,
    b: BA,
    B: uA,
    c: null,
    d: qr,
    e: qr,
    f: qs,
    g: iB,
    G: cB,
    H: Zs,
    I: js,
    j: zs,
    L: ca,
    m: $s,
    M: AB,
    p: fA,
    q: CA,
    Q: en,
    s: tn,
    S: eB,
    u: tB,
    U: rB,
    V: nB,
    w: aB,
    W: sB,
    x: null,
    X: null,
    y: BB,
    Y: oB,
    Z: lB,
    "%": An
  }, H = {
    a: oA,
    A: UA,
    b: cA,
    B: EA,
    c: null,
    d: $r,
    e: $r,
    f: wB,
    g: mB,
    G: IB,
    H: uB,
    I: gB,
    j: QB,
    L: ua,
    m: fB,
    M: CB,
    p: D,
    q: z,
    Q: en,
    s: tn,
    S: UB,
    u: FB,
    U: hB,
    V: dB,
    w: pB,
    W: EB,
    x: null,
    X: null,
    y: HB,
    Y: vB,
    Z: yB,
    "%": An
  }, m = {
    a: x,
    A: G,
    b: P,
    B: S,
    c: X,
    d: jr,
    e: jr,
    f: Xs,
    g: Zr,
    G: Yr,
    H: zr,
    I: zr,
    j: Vs,
    L: Ps,
    m: Gs,
    M: ks,
    p: y,
    q: Ns,
    Q: Ws,
    s: Ys,
    S: _s,
    u: Ts,
    U: Ss,
    V: Ms,
    w: Ds,
    W: Os,
    x: QA,
    X: $,
    y: Zr,
    Y: Yr,
    Z: Rs,
    "%": Js
  };
  I.x = F(t, I), I.X = F(r, I), I.c = F(A, I), H.x = F(t, H), H.X = F(r, H), H.c = F(A, H);
  function F(d, v) {
    return function(b) {
      var U = [], O = -1, M = 0, Z = d.length, nA, KA, _r;
      for (b instanceof Date || (b = /* @__PURE__ */ new Date(+b)); ++O < Z; )
        d.charCodeAt(O) === 37 && (U.push(d.slice(M, O)), (KA = Wr[nA = d.charAt(++O)]) != null ? nA = d.charAt(++O) : KA = nA === "e" ? " " : "0", (_r = v[nA]) && (nA = _r(b, KA)), U.push(nA), M = O + 1);
      return U.push(d.slice(M, O)), U.join("");
    };
  }
  function L(d, v) {
    return function(b) {
      var U = ue(1900, void 0, 1), O = K(U, d, b += "", 0), M, Z;
      if (O != b.length)
        return null;
      if ("Q" in U)
        return new Date(U.Q);
      if ("s" in U)
        return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (v && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53)
          return null;
        "w" in U || (U.w = 1), "Z" in U ? (M = Nt(ue(U.y, 0, 1)), Z = M.getUTCDay(), M = Z > 4 || Z === 0 ? ir.ceil(M) : ir(M), M = ia.offset(M, (U.V - 1) * 7), U.y = M.getUTCFullYear(), U.m = M.getUTCMonth(), U.d = M.getUTCDate() + (U.w + 6) % 7) : (M = Rt(ue(U.y, 0, 1)), Z = M.getDay(), M = Z > 4 || Z === 0 ? or.ceil(M) : or(M), M = oa.offset(M, (U.V - 1) * 7), U.y = M.getFullYear(), U.m = M.getMonth(), U.d = M.getDate() + (U.w + 6) % 7);
      } else
        ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), Z = "Z" in U ? Nt(ue(U.y, 0, 1)).getUTCDay() : Rt(ue(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (Z + 5) % 7 : U.w + U.U * 7 - (Z + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Nt(U)) : Rt(U);
    };
  }
  function K(d, v, b, U) {
    for (var O = 0, M = v.length, Z = b.length, nA, KA; O < M; ) {
      if (U >= Z)
        return -1;
      if (nA = v.charCodeAt(O++), nA === 37) {
        if (nA = v.charAt(O++), KA = m[nA in Wr ? v.charAt(O++) : nA], !KA || (U = KA(d, b, U)) < 0)
          return -1;
      } else if (nA != b.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function y(d, v, b) {
    var U = o.exec(v.slice(b));
    return U ? (d.p = c.get(U[0].toLowerCase()), b + U[0].length) : -1;
  }
  function x(d, v, b) {
    var U = Q.exec(v.slice(b));
    return U ? (d.w = g.get(U[0].toLowerCase()), b + U[0].length) : -1;
  }
  function G(d, v, b) {
    var U = l.exec(v.slice(b));
    return U ? (d.w = u.get(U[0].toLowerCase()), b + U[0].length) : -1;
  }
  function P(d, v, b) {
    var U = f.exec(v.slice(b));
    return U ? (d.m = h.get(U[0].toLowerCase()), b + U[0].length) : -1;
  }
  function S(d, v, b) {
    var U = w.exec(v.slice(b));
    return U ? (d.m = C.get(U[0].toLowerCase()), b + U[0].length) : -1;
  }
  function X(d, v, b) {
    return K(d, A, v, b);
  }
  function QA(d, v, b) {
    return K(d, t, v, b);
  }
  function $(d, v, b) {
    return K(d, r, v, b);
  }
  function Y(d) {
    return s[d.getDay()];
  }
  function wA(d) {
    return a[d.getDay()];
  }
  function BA(d) {
    return i[d.getMonth()];
  }
  function uA(d) {
    return B[d.getMonth()];
  }
  function fA(d) {
    return n[+(d.getHours() >= 12)];
  }
  function CA(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function oA(d) {
    return s[d.getUTCDay()];
  }
  function UA(d) {
    return a[d.getUTCDay()];
  }
  function cA(d) {
    return i[d.getUTCMonth()];
  }
  function EA(d) {
    return B[d.getUTCMonth()];
  }
  function D(d) {
    return n[+(d.getUTCHours() >= 12)];
  }
  function z(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(d) {
      var v = F(d += "", I);
      return v.toString = function() {
        return d;
      }, v;
    },
    parse: function(d) {
      var v = L(d += "", !1);
      return v.toString = function() {
        return d;
      }, v;
    },
    utcFormat: function(d) {
      var v = F(d += "", H);
      return v.toString = function() {
        return d;
      }, v;
    },
    utcParse: function(d) {
      var v = L(d += "", !0);
      return v.toString = function() {
        return d;
      }, v;
    }
  };
}
var Wr = { "-": "", _: " ", 0: "0" }, eA = /^\s*\d+/, Ks = /^%/, Ls = /[\\^$*+?|[\]().{}]/g;
function R(e, A, t) {
  var r = e < 0 ? "-" : "", n = (r ? -e : e) + "", a = n.length;
  return r + (a < t ? new Array(t - a + 1).join(A) + n : n);
}
function xs(e) {
  return e.replace(Ls, "\\$&");
}
function ge(e) {
  return new RegExp("^(?:" + e.map(xs).join("|") + ")", "i");
}
function Qe(e) {
  return new Map(e.map((A, t) => [A.toLowerCase(), t]));
}
function Ds(e, A, t) {
  var r = eA.exec(A.slice(t, t + 1));
  return r ? (e.w = +r[0], t + r[0].length) : -1;
}
function Ts(e, A, t) {
  var r = eA.exec(A.slice(t, t + 1));
  return r ? (e.u = +r[0], t + r[0].length) : -1;
}
function Ss(e, A, t) {
  var r = eA.exec(A.slice(t, t + 2));
  return r ? (e.U = +r[0], t + r[0].length) : -1;
}
function Ms(e, A, t) {
  var r = eA.exec(A.slice(t, t + 2));
  return r ? (e.V = +r[0], t + r[0].length) : -1;
}
function Os(e, A, t) {
  var r = eA.exec(A.slice(t, t + 2));
  return r ? (e.W = +r[0], t + r[0].length) : -1;
}
function Yr(e, A, t) {
  var r = eA.exec(A.slice(t, t + 4));
  return r ? (e.y = +r[0], t + r[0].length) : -1;
}
function Zr(e, A, t) {
  var r = eA.exec(A.slice(t, t + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), t + r[0].length) : -1;
}
function Rs(e, A, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(A.slice(t, t + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function Ns(e, A, t) {
  var r = eA.exec(A.slice(t, t + 1));
  return r ? (e.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function Gs(e, A, t) {
  var r = eA.exec(A.slice(t, t + 2));
  return r ? (e.m = r[0] - 1, t + r[0].length) : -1;
}
function jr(e, A, t) {
  var r = eA.exec(A.slice(t, t + 2));
  return r ? (e.d = +r[0], t + r[0].length) : -1;
}
function Vs(e, A, t) {
  var r = eA.exec(A.slice(t, t + 3));
  return r ? (e.m = 0, e.d = +r[0], t + r[0].length) : -1;
}
function zr(e, A, t) {
  var r = eA.exec(A.slice(t, t + 2));
  return r ? (e.H = +r[0], t + r[0].length) : -1;
}
function ks(e, A, t) {
  var r = eA.exec(A.slice(t, t + 2));
  return r ? (e.M = +r[0], t + r[0].length) : -1;
}
function _s(e, A, t) {
  var r = eA.exec(A.slice(t, t + 2));
  return r ? (e.S = +r[0], t + r[0].length) : -1;
}
function Ps(e, A, t) {
  var r = eA.exec(A.slice(t, t + 3));
  return r ? (e.L = +r[0], t + r[0].length) : -1;
}
function Xs(e, A, t) {
  var r = eA.exec(A.slice(t, t + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function Js(e, A, t) {
  var r = Ks.exec(A.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function Ws(e, A, t) {
  var r = eA.exec(A.slice(t));
  return r ? (e.Q = +r[0], t + r[0].length) : -1;
}
function Ys(e, A, t) {
  var r = eA.exec(A.slice(t));
  return r ? (e.s = +r[0], t + r[0].length) : -1;
}
function qr(e, A) {
  return R(e.getDate(), A, 2);
}
function Zs(e, A) {
  return R(e.getHours(), A, 2);
}
function js(e, A) {
  return R(e.getHours() % 12 || 12, A, 2);
}
function zs(e, A) {
  return R(1 + oa.count(Le(e), e), A, 3);
}
function ca(e, A) {
  return R(e.getMilliseconds(), A, 3);
}
function qs(e, A) {
  return ca(e, A) + "000";
}
function $s(e, A) {
  return R(e.getMonth() + 1, A, 2);
}
function AB(e, A) {
  return R(e.getMinutes(), A, 2);
}
function eB(e, A) {
  return R(e.getSeconds(), A, 2);
}
function tB(e) {
  var A = e.getDay();
  return A === 0 ? 7 : A;
}
function rB(e, A) {
  return R(vs.count(Le(e) - 1, e), A, 2);
}
function la(e) {
  var A = e.getDay();
  return A >= 4 || A === 0 ? xe(e) : xe.ceil(e);
}
function nB(e, A) {
  return e = la(e), R(xe.count(Le(e), e) + (Le(e).getDay() === 4), A, 2);
}
function aB(e) {
  return e.getDay();
}
function sB(e, A) {
  return R(or.count(Le(e) - 1, e), A, 2);
}
function BB(e, A) {
  return R(e.getFullYear() % 100, A, 2);
}
function iB(e, A) {
  return e = la(e), R(e.getFullYear() % 100, A, 2);
}
function oB(e, A) {
  return R(e.getFullYear() % 1e4, A, 4);
}
function cB(e, A) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? xe(e) : xe.ceil(e), R(e.getFullYear() % 1e4, A, 4);
}
function lB(e) {
  var A = e.getTimezoneOffset();
  return (A > 0 ? "-" : (A *= -1, "+")) + R(A / 60 | 0, "0", 2) + R(A % 60, "0", 2);
}
function $r(e, A) {
  return R(e.getUTCDate(), A, 2);
}
function uB(e, A) {
  return R(e.getUTCHours(), A, 2);
}
function gB(e, A) {
  return R(e.getUTCHours() % 12 || 12, A, 2);
}
function QB(e, A) {
  return R(1 + ia.count(De(e), e), A, 3);
}
function ua(e, A) {
  return R(e.getUTCMilliseconds(), A, 3);
}
function wB(e, A) {
  return ua(e, A) + "000";
}
function fB(e, A) {
  return R(e.getUTCMonth() + 1, A, 2);
}
function CB(e, A) {
  return R(e.getUTCMinutes(), A, 2);
}
function UB(e, A) {
  return R(e.getUTCSeconds(), A, 2);
}
function FB(e) {
  var A = e.getUTCDay();
  return A === 0 ? 7 : A;
}
function hB(e, A) {
  return R(Is.count(De(e) - 1, e), A, 2);
}
function ga(e) {
  var A = e.getUTCDay();
  return A >= 4 || A === 0 ? Te(e) : Te.ceil(e);
}
function dB(e, A) {
  return e = ga(e), R(Te.count(De(e), e) + (De(e).getUTCDay() === 4), A, 2);
}
function pB(e) {
  return e.getUTCDay();
}
function EB(e, A) {
  return R(ir.count(De(e) - 1, e), A, 2);
}
function HB(e, A) {
  return R(e.getUTCFullYear() % 100, A, 2);
}
function mB(e, A) {
  return e = ga(e), R(e.getUTCFullYear() % 100, A, 2);
}
function vB(e, A) {
  return R(e.getUTCFullYear() % 1e4, A, 4);
}
function IB(e, A) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? Te(e) : Te.ceil(e), R(e.getUTCFullYear() % 1e4, A, 4);
}
function yB() {
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
var jA, Qa, wt;
bB({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function bB(e) {
  return jA = bs(e), Qa = jA.format, wt = jA.parse, jA.utcFormat, jA.utcParse, jA;
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
function mA(e, A) {
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
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (A[a] = t[a]);
    }
    return A;
  }, lr.apply(this, arguments);
};
function iA(e, A, t, r) {
  function n(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function B(c) {
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
      c.done ? a(c.value) : n(c.value).then(B, i);
    }
    o((r = r.apply(e, A || [])).next());
  });
}
function aA(e, A) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, n, a, s;
  return s = { next: B(0), throw: B(1), return: B(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
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
        if (r = 1, n && (a = o[0] & 2 ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done)
          return a;
        switch (n = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
          case 0:
          case 1:
            a = o;
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
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              t = 0;
              continue;
            }
            if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
              t.label = o[1];
              break;
            }
            if (o[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = o;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(o);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        o = A.call(e, t);
      } catch (c) {
        o = [6, c], n = 0;
      } finally {
        r = a = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function Ge(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = A.length, a; r < n; r++)
      (a || !(r in A)) && (a || (a = Array.prototype.slice.call(A, 0, r)), a[r] = A[r]);
  return e.concat(a || A);
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
}, KB = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new TA(0, 0, r, n);
}, It = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var a = e.charCodeAt(t++);
      (a & 64512) === 56320 ? A.push(((n & 1023) << 10) + (a & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, W = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, a = ""; ++n < t; ) {
    var s = e[n];
    s <= 65535 ? r.push(s) : (s -= 65536, r.push((s >> 10) + 55296, s % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (a += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return a;
}, rn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", LB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ve = 0; Ve < rn.length; Ve++)
  LB[rn.charCodeAt(Ve)] = Ve;
var nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ke = 0; ke < nn.length; ke++)
  Fe[nn.charCodeAt(ke)] = ke;
var xB = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, a, s, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    a = Fe[e.charCodeAt(r)], s = Fe[e.charCodeAt(r + 1)], B = Fe[e.charCodeAt(r + 2)], i = Fe[e.charCodeAt(r + 3)], c[n++] = a << 2 | s >> 4, c[n++] = (s & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, DB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, TB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, WA = 5, Mr = 6 + 5, Gt = 2, SB = Mr - WA, wa = 65536 >> WA, MB = 1 << WA, Vt = MB - 1, OB = 1024 >> WA, RB = wa + OB, NB = RB, GB = 32, VB = NB + GB, kB = 65536 >> Mr, _B = 1 << SB, PB = _B - 1, an = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, XB = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, JB = function(e, A) {
  var t = xB(e), r = Array.isArray(t) ? TB(t) : new Uint32Array(t), n = Array.isArray(t) ? DB(t) : new Uint16Array(t), a = 24, s = an(n, a / 2, r[4] / 2), B = r[5] === 2 ? an(n, (a + r[4]) / 2) : XB(r, Math.ceil((a + r[4]) / 4));
  return new WB(r[0], r[1], r[2], r[3], s, B);
}, WB = (
  /** @class */
  function() {
    function e(A, t, r, n, a, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = a, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> WA], t = (t << Gt) + (A & Vt), this.data[t];
        if (A <= 65535)
          return t = this.index[wa + (A - 55296 >> WA)], t = (t << Gt) + (A & Vt), this.data[t];
        if (A < this.highStart)
          return t = VB - kB + (A >> Mr), t = this.index[t], t += A >> WA & PB, t = this.index[t], t = (t << Gt) + (A & Vt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), sn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", YB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var _e = 0; _e < sn.length; _e++)
  YB[sn.charCodeAt(_e)] = _e;
var ZB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Bn = 50, jB = 1, fa = 2, Ca = 3, zB = 4, qB = 5, on = 7, Ua = 8, cn = 9, RA = 10, ur = 11, ln = 12, gr = 13, $B = 14, he = 15, Qr = 16, Pe = 17, we = 18, Ai = 19, un = 20, wr = 21, fe = 22, kt = 23, zA = 24, gA = 25, de = 26, pe = 27, qA = 28, ei = 29, XA = 30, ti = 31, Xe = 32, Je = 33, fr = 34, Cr = 35, Ur = 36, Se = 37, Fr = 38, ot = 39, ct = 40, _t = 41, Fa = 42, ri = 43, ni = [9001, 65288], ha = "!", T = "×", We = "÷", hr = JB(ZB), LA = [XA, Ur], dr = [jB, fa, Ca, qB], da = [RA, Ua], gn = [pe, de], ai = dr.concat(da), Qn = [Fr, ot, ct, fr, Cr], si = [he, gr], Bi = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(a, s) {
    var B = hr.get(a);
    if (B > Bn ? (n.push(!0), B -= Bn) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(a) !== -1)
      return r.push(s), t.push(Qr);
    if (B === zB || B === ur) {
      if (s === 0)
        return r.push(s), t.push(XA);
      var i = t[s - 1];
      return ai.indexOf(i) === -1 ? (r.push(r[s - 1]), t.push(i)) : (r.push(s), t.push(XA));
    }
    if (r.push(s), B === ti)
      return t.push(A === "strict" ? wr : Se);
    if (B === Fa || B === ei)
      return t.push(XA);
    if (B === ri)
      return a >= 131072 && a <= 196605 || a >= 196608 && a <= 262141 ? t.push(Se) : t.push(XA);
    t.push(B);
  }), [r, t, n];
}, Pt = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var a = t; a <= r.length; ) {
      a++;
      var s = r[a];
      if (s === A)
        return !0;
      if (s !== RA)
        break;
    }
  if (n === RA)
    for (var a = t; a > 0; ) {
      a--;
      var B = r[a];
      if (Array.isArray(e) ? e.indexOf(B) !== -1 : e === B)
        for (var i = t; i <= r.length; ) {
          i++;
          var s = r[i];
          if (s === A)
            return !0;
          if (s !== RA)
            break;
        }
      if (B !== RA)
        break;
    }
  return !1;
}, wn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === RA)
      t--;
    else
      return r;
  }
  return 0;
}, ii = function(e, A, t, r, n) {
  if (t[r] === 0)
    return T;
  var a = r - 1;
  if (Array.isArray(n) && n[a] === !0)
    return T;
  var s = a - 1, B = a + 1, i = A[a], o = s >= 0 ? A[s] : 0, c = A[B];
  if (i === fa && c === Ca)
    return T;
  if (dr.indexOf(i) !== -1)
    return ha;
  if (dr.indexOf(c) !== -1 || da.indexOf(c) !== -1)
    return T;
  if (wn(a, A) === Ua)
    return We;
  if (hr.get(e[a]) === ur || (i === Xe || i === Je) && hr.get(e[B]) === ur || i === on || c === on || i === cn || [RA, gr, he].indexOf(i) === -1 && c === cn || [Pe, we, Ai, zA, qA].indexOf(c) !== -1 || wn(a, A) === fe || Pt(kt, fe, a, A) || Pt([Pe, we], wr, a, A) || Pt(ln, ln, a, A))
    return T;
  if (i === RA)
    return We;
  if (i === kt || c === kt)
    return T;
  if (c === Qr || i === Qr)
    return We;
  if ([gr, he, wr].indexOf(c) !== -1 || i === $B || o === Ur && si.indexOf(i) !== -1 || i === qA && c === Ur || c === un || LA.indexOf(c) !== -1 && i === gA || LA.indexOf(i) !== -1 && c === gA || i === pe && [Se, Xe, Je].indexOf(c) !== -1 || [Se, Xe, Je].indexOf(i) !== -1 && c === de || LA.indexOf(i) !== -1 && gn.indexOf(c) !== -1 || gn.indexOf(i) !== -1 && LA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [pe, de].indexOf(i) !== -1 && (c === gA || [fe, he].indexOf(c) !== -1 && A[B + 1] === gA) || // ( OP | HY ) × NU
  [fe, he].indexOf(i) !== -1 && c === gA || // NU ×	(NU | SY | IS)
  i === gA && [gA, qA, zA].indexOf(c) !== -1)
    return T;
  if ([gA, qA, zA, Pe, we].indexOf(c) !== -1)
    for (var l = a; l >= 0; ) {
      var u = A[l];
      if (u === gA)
        return T;
      if ([qA, zA].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if ([pe, de].indexOf(c) !== -1)
    for (var l = [Pe, we].indexOf(i) !== -1 ? s : a; l >= 0; ) {
      var u = A[l];
      if (u === gA)
        return T;
      if ([qA, zA].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if (Fr === i && [Fr, ot, fr, Cr].indexOf(c) !== -1 || [ot, fr].indexOf(i) !== -1 && [ot, ct].indexOf(c) !== -1 || [ct, Cr].indexOf(i) !== -1 && c === ct || Qn.indexOf(i) !== -1 && [un, de].indexOf(c) !== -1 || Qn.indexOf(c) !== -1 && i === pe || LA.indexOf(i) !== -1 && LA.indexOf(c) !== -1 || i === zA && LA.indexOf(c) !== -1 || LA.concat(gA).indexOf(i) !== -1 && c === fe && ni.indexOf(e[B]) === -1 || LA.concat(gA).indexOf(c) !== -1 && i === we)
    return T;
  if (i === _t && c === _t) {
    for (var Q = t[a], g = 1; Q > 0 && (Q--, A[Q] === _t); )
      g++;
    if (g % 2 !== 0)
      return T;
  }
  return i === Xe && c === Je ? T : We;
}, oi = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = Bi(e, A.lineBreak), r = t[0], n = t[1], a = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(B) {
    return [gA, XA, Fa].indexOf(B) !== -1 ? Se : B;
  }));
  var s = A.wordBreak === "keep-all" ? a.map(function(B, i) {
    return B && e[i] >= 19968 && e[i] <= 40959;
  }) : void 0;
  return [r, n, s];
}, ci = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === ha, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return W.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), li = function(e, A) {
  var t = It(e), r = oi(t, A), n = r[0], a = r[1], s = r[2], B = t.length, i = 0, o = 0;
  return {
    next: function() {
      if (o >= B)
        return { done: !0, value: null };
      for (var c = T; o < B && (c = ii(t, a, n, ++o, s)) === T; )
        ;
      if (c !== T || o === B) {
        var l = new ci(t, c, i, o);
        return i = o, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, ui = 1, gi = 2, Re = 4, fn = 8, ft = 10, Cn = 47, ve = 92, Qi = 9, wi = 32, Ye = 34, Ce = 61, fi = 35, Ci = 36, Ui = 37, Ze = 39, je = 40, Ue = 41, Fi = 95, lA = 45, hi = 33, di = 60, pi = 62, Ei = 64, Hi = 91, mi = 93, vi = 61, Ii = 123, ze = 63, yi = 125, Un = 124, bi = 126, Ki = 128, Fn = 65533, Xt = 42, JA = 43, Li = 44, xi = 58, Di = 59, Me = 46, Ti = 0, Si = 8, Mi = 11, Oi = 14, Ri = 31, Ni = 127, vA = -1, pa = 48, Ea = 97, Ha = 101, Gi = 102, Vi = 117, ki = 122, ma = 65, va = 69, Ia = 70, _i = 85, Pi = 90, sA = function(e) {
  return e >= pa && e <= 57;
}, Xi = function(e) {
  return e >= 55296 && e <= 57343;
}, $A = function(e) {
  return sA(e) || e >= ma && e <= Ia || e >= Ea && e <= Gi;
}, Ji = function(e) {
  return e >= Ea && e <= ki;
}, Wi = function(e) {
  return e >= ma && e <= Pi;
}, Yi = function(e) {
  return Ji(e) || Wi(e);
}, Zi = function(e) {
  return e >= Ki;
}, qe = function(e) {
  return e === ft || e === Qi || e === wi;
}, Ct = function(e) {
  return Yi(e) || Zi(e) || e === Fi;
}, hn = function(e) {
  return Ct(e) || sA(e) || e === lA;
}, ji = function(e) {
  return e >= Ti && e <= Si || e === Mi || e >= Oi && e <= Ri || e === Ni;
}, OA = function(e, A) {
  return e !== ve ? !1 : A !== ft;
}, $e = function(e, A, t) {
  return e === lA ? Ct(A) || OA(A, t) : Ct(e) ? !0 : !!(e === ve && OA(e, A));
}, Jt = function(e, A, t) {
  return e === JA || e === lA ? sA(A) ? !0 : A === Me && sA(t) : sA(e === Me ? A : e);
}, zi = function(e) {
  var A = 0, t = 1;
  (e[A] === JA || e[A] === lA) && (e[A] === lA && (t = -1), A++);
  for (var r = []; sA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(W.apply(void 0, r), 10) : 0;
  e[A] === Me && A++;
  for (var a = []; sA(e[A]); )
    a.push(e[A++]);
  var s = a.length, B = s ? parseInt(W.apply(void 0, a), 10) : 0;
  (e[A] === va || e[A] === Ha) && A++;
  var i = 1;
  (e[A] === JA || e[A] === lA) && (e[A] === lA && (i = -1), A++);
  for (var o = []; sA(e[A]); )
    o.push(e[A++]);
  var c = o.length ? parseInt(W.apply(void 0, o), 10) : 0;
  return t * (n + B * Math.pow(10, -s)) * Math.pow(10, i * c);
}, qi = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, $i = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, Ao = {
  type: 4
  /* COMMA_TOKEN */
}, eo = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, to = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, ro = {
  type: 21
  /* COLUMN_TOKEN */
}, no = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, ao = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, so = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, Bo = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, io = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, At = {
  type: 23
  /* BAD_URL_TOKEN */
}, oo = {
  type: 1
  /* BAD_STRING_TOKEN */
}, co = {
  type: 25
  /* CDO_TOKEN */
}, lo = {
  type: 24
  /* CDC_TOKEN */
}, uo = {
  type: 26
  /* COLON_TOKEN */
}, go = {
  type: 27
  /* SEMICOLON_TOKEN */
}, Qo = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, wo = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, fo = {
  type: 31
  /* WHITESPACE_TOKEN */
}, pr = {
  type: 32
  /* EOF_TOKEN */
}, ya = (
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
        case fi:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (hn(t) || OA(r, n)) {
            var a = $e(t, r, n) ? gi : ui, s = this.consumeName();
            return { type: 5, value: s, flags: a };
          }
          break;
        case Ci:
          if (this.peekCodePoint(0) === Ce)
            return this.consumeCodePoint(), eo;
          break;
        case Ze:
          return this.consumeStringToken(Ze);
        case je:
          return qi;
        case Ue:
          return $i;
        case Xt:
          if (this.peekCodePoint(0) === Ce)
            return this.consumeCodePoint(), io;
          break;
        case JA:
          if (Jt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Li:
          return Ao;
        case lA:
          var B = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (Jt(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if ($e(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === lA && o === pi)
            return this.consumeCodePoint(), this.consumeCodePoint(), lo;
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
              if (c === vA)
                return this.consumeToken();
            }
          break;
        case xi:
          return uo;
        case Di:
          return go;
        case di:
          if (this.peekCodePoint(0) === hi && this.peekCodePoint(1) === lA && this.peekCodePoint(2) === lA)
            return this.consumeCodePoint(), this.consumeCodePoint(), co;
          break;
        case Ei:
          var l = this.peekCodePoint(0), u = this.peekCodePoint(1), Q = this.peekCodePoint(2);
          if ($e(l, u, Q)) {
            var s = this.consumeName();
            return { type: 7, value: s };
          }
          break;
        case Hi:
          return Qo;
        case ve:
          if (OA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case mi:
          return wo;
        case vi:
          if (this.peekCodePoint(0) === Ce)
            return this.consumeCodePoint(), to;
          break;
        case Ii:
          return so;
        case yi:
          return Bo;
        case Vi:
        case _i:
          var g = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return g === JA && ($A(w) || w === ze) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Un:
          if (this.peekCodePoint(0) === Ce)
            return this.consumeCodePoint(), no;
          if (this.peekCodePoint(0) === Un)
            return this.consumeCodePoint(), ro;
          break;
        case bi:
          if (this.peekCodePoint(0) === Ce)
            return this.consumeCodePoint(), ao;
          break;
        case vA:
          return pr;
      }
      return qe(A) ? (this.consumeWhiteSpace(), fo) : sA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Ct(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: W(A) };
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
        var n = parseInt(W.apply(void 0, A.map(function(i) {
          return i === ze ? pa : i;
        })), 16), a = parseInt(W.apply(void 0, A.map(function(i) {
          return i === ze ? Ia : i;
        })), 16);
        return { type: 30, start: n, end: a };
      }
      var s = parseInt(W.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === lA && $A(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var B = []; $A(t) && B.length < 6; )
          B.push(t), t = this.consumeCodePoint();
        var a = parseInt(W.apply(void 0, B), 16);
        return { type: 30, start: s, end: a };
      } else
        return { type: 30, start: s, end: s };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === je ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === je ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === vA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ze || t === Ye) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === vA || this.peekCodePoint(0) === Ue) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), At);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === vA || n === Ue)
          return { type: 22, value: W.apply(void 0, A) };
        if (qe(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === vA || this.peekCodePoint(0) === Ue ? (this.consumeCodePoint(), { type: 22, value: W.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), At);
        if (n === Ye || n === Ze || n === je || ji(n))
          return this.consumeBadUrlRemnants(), At;
        if (n === ve)
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
        if (A === Ue || A === vA)
          return;
        OA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var n = Math.min(t, A);
        r += W.apply(void 0, this._value.splice(0, n)), A -= n;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === vA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === ft)
          return this._value.splice(0, r), oo;
        if (n === ve) {
          var a = this._value[r + 1];
          a !== vA && a !== void 0 && (a === ft ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : OA(n, a) && (t += this.consumeStringSlice(r), t += W(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Re, r = this.peekCodePoint(0);
      for ((r === JA || r === lA) && A.push(this.consumeCodePoint()); sA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Me && sA(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = fn; sA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var a = this.peekCodePoint(2);
      if ((r === va || r === Ha) && ((n === JA || n === lA) && sA(a) || sA(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = fn; sA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [zi(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), a = this.peekCodePoint(1), s = this.peekCodePoint(2);
      if ($e(n, a, s)) {
        var B = this.consumeName();
        return { type: 15, number: t, flags: r, unit: B };
      }
      return n === Ui ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if ($A(A)) {
        for (var t = W(A); $A(this.peekCodePoint(0)) && t.length < 6; )
          t += W(this.consumeCodePoint());
        qe(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Xi(r) || r > 1114111 ? Fn : r;
      }
      return A === vA ? Fn : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (hn(t))
          A += W(t);
        else if (OA(t, this.peekCodePoint(0)))
          A += W(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  }()
), ba = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new ya();
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
        if (r.type === 32 || Uo(r, A))
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
), Ne = function(e) {
  return e.type === 15;
}, le = function(e) {
  return e.type === 17;
}, V = function(e) {
  return e.type === 20;
}, Co = function(e) {
  return e.type === 0;
}, Er = function(e, A) {
  return V(e) && e.value === A;
}, Ka = function(e) {
  return e.type !== 31;
}, oe = function(e) {
  return e.type !== 31 && e.type !== 4;
}, yA = function(e) {
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
}, Uo = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, _A = function(e) {
  return e.type === 17 || e.type === 15;
}, j = function(e) {
  return e.type === 16 || _A(e);
}, La = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, rA = {
  type: 17,
  number: 0,
  flags: Re
}, Or = {
  type: 16,
  number: 50,
  flags: Re
}, NA = {
  type: 16,
  number: 100,
  flags: Re
}, Ee = function(e, A, t) {
  var r = e[0], n = e[1];
  return [k(r, A), k(typeof n < "u" ? n : r, t)];
}, k = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (Ne(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, xa = "deg", Da = "grad", Ta = "rad", Sa = "turn", yt = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case xa:
          return Math.PI * A.number / 180;
        case Da:
          return Math.PI / 200 * A.number;
        case Ta:
          return A.number;
        case Sa:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Ma = function(e) {
  return e.type === 15 && (e.unit === xa || e.unit === Da || e.unit === Ta || e.unit === Sa);
}, Oa = function(e) {
  var A = e.filter(V).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [rA, rA];
    case "to top":
    case "bottom":
      return dA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [rA, NA];
    case "to right":
    case "left":
      return dA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [NA, NA];
    case "to bottom":
    case "top":
      return dA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [NA, rA];
    case "to left":
    case "right":
      return dA(270);
  }
  return 0;
}, dA = function(e) {
  return Math.PI * e / 180;
}, VA = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = Fo[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), a = A.value.substring(2, 3);
        return GA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(a + a, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), a = A.value.substring(2, 3), s = A.value.substring(3, 4);
        return GA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(a + a, 16), parseInt(s + s, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), a = A.value.substring(4, 6);
        return GA(parseInt(r, 16), parseInt(n, 16), parseInt(a, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), a = A.value.substring(4, 6), s = A.value.substring(6, 8);
        return GA(parseInt(r, 16), parseInt(n, 16), parseInt(a, 16), parseInt(s, 16) / 255);
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
}, AA = function(e) {
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
  var t = A.filter(oe);
  if (t.length === 3) {
    var r = t.map(dn), n = r[0], a = r[1], s = r[2];
    return GA(n, a, s, 1);
  }
  if (t.length === 4) {
    var B = t.map(dn), n = B[0], a = B[1], s = B[2], i = B[3];
    return GA(n, a, s, i);
  }
  return 0;
};
function Wt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var En = function(e, A) {
  var t = A.filter(oe), r = t[0], n = t[1], a = t[2], s = t[3], B = (r.type === 17 ? dA(r.number) : yt.parse(e, r)) / (Math.PI * 2), i = j(n) ? n.number / 100 : 0, o = j(a) ? a.number / 100 : 0, c = typeof s < "u" && j(s) ? k(s, 1) : 1;
  if (i === 0)
    return GA(o * 255, o * 255, o * 255, 1);
  var l = o <= 0.5 ? o * (i + 1) : o + i - o * i, u = o * 2 - l, Q = Wt(u, l, B + 1 / 3), g = Wt(u, l, B), w = Wt(u, l, B - 1 / 3);
  return GA(Q * 255, g * 255, w * 255, c);
}, Fo = {
  hsl: En,
  hsla: En,
  rgb: pn,
  rgba: pn
}, Ie = function(e, A) {
  return VA.parse(e, ba.create(A).parseComponentValue());
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
}, ho = {
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
}, po = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, bt = function(e, A) {
  var t = VA.parse(e, A[0]), r = A[1];
  return r && j(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Hn = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = rA), r.stop === null && (r.stop = NA);
  for (var n = [], a = 0, s = 0; s < e.length; s++) {
    var B = e[s].stop;
    if (B !== null) {
      var i = k(B, A);
      i > a ? n.push(i) : n.push(a), a = i;
    } else
      n.push(null);
  }
  for (var o = null, s = 0; s < n.length; s++) {
    var c = n[s];
    if (c === null)
      o === null && (o = s);
    else if (o !== null) {
      for (var l = s - o, u = n[o - 1], Q = (c - u) / (l + 1), g = 1; g <= l; g++)
        n[o + g - 1] = Q * g;
      o = null;
    }
  }
  return e.map(function(w, C) {
    var f = w.color;
    return { color: f, stop: Math.max(Math.min(1, n[C] / A), 0) };
  });
}, Eo = function(e, A, t) {
  var r = A / 2, n = t / 2, a = k(e[0], A) - r, s = n - k(e[1], t);
  return (Math.atan2(s, a) + Math.PI * 2) % (Math.PI * 2);
}, Ho = function(e, A, t) {
  var r = typeof e == "number" ? e : Eo(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), a = A / 2, s = t / 2, B = n / 2, i = Math.sin(r - Math.PI / 2) * B, o = Math.cos(r - Math.PI / 2) * B;
  return [n, a - o, a + o, s - i, s + i];
}, HA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, mn = function(e, A, t, r, n) {
  var a = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return a.reduce(function(s, B) {
    var i = B[0], o = B[1], c = HA(t - i, r - o);
    return (n ? c < s.optimumDistance : c > s.optimumDistance) ? {
      optimumCorner: B,
      optimumDistance: c
    } : s;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, mo = function(e, A, t, r, n) {
  var a = 0, s = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? a = s = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (a = Math.min(Math.abs(A), Math.abs(A - r)), s = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        a = s = Math.min(HA(A, t), HA(A, t - n), HA(A - r, t), HA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), i = mn(r, n, A, t, !0), o = i[0], c = i[1];
        a = HA(o - A, (c - t) / B), s = B * a;
      }
      break;
    case 1:
      e.shape === 0 ? a = s = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (a = Math.max(Math.abs(A), Math.abs(A - r)), s = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        a = s = Math.max(HA(A, t), HA(A, t - n), HA(A - r, t), HA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), l = mn(r, n, A, t, !1), o = l[0], c = l[1];
        a = HA(o - A, (c - t) / B), s = B * a;
      }
      break;
  }
  return Array.isArray(e.size) && (a = k(e.size[0], r), s = e.size.length === 2 ? k(e.size[1], n) : a), [a, s];
}, vo = function(e, A) {
  var t = dA(180), r = [];
  return yA(A).forEach(function(n, a) {
    if (a === 0) {
      var s = n[0];
      if (s.type === 20 && s.value === "to") {
        t = Oa(n);
        return;
      } else if (Ma(s)) {
        t = yt.parse(e, s);
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
  var t = dA(180), r = [];
  return yA(A).forEach(function(n, a) {
    if (a === 0) {
      var s = n[0];
      if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
        t = Oa(n);
        return;
      } else if (Ma(s)) {
        t = (yt.parse(e, s) + dA(270)) % dA(360);
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
}, Io = function(e, A) {
  var t = dA(180), r = [], n = 1, a = 0, s = 3, B = [];
  return yA(A).forEach(function(i, o) {
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
        r.push({ stop: rA, color: l });
      } else if (c.name === "to") {
        var l = VA.parse(e, c.values[0]);
        r.push({ stop: NA, color: l });
      } else if (c.name === "color-stop") {
        var u = c.values.filter(oe);
        if (u.length === 2) {
          var l = VA.parse(e, u[1]), Q = u[0];
          le(Q) && r.push({
            stop: { type: 16, number: Q.number * 100, flags: Q.flags },
            color: l
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + dA(180)) % dA(360),
    stops: r,
    type: n
  } : { size: s, shape: a, stops: r, position: B, type: n };
}, Ra = "closest-side", Na = "farthest-side", Ga = "closest-corner", Va = "farthest-corner", ka = "circle", _a = "ellipse", Pa = "cover", Xa = "contain", yo = function(e, A) {
  var t = 0, r = 3, n = [], a = [];
  return yA(A).forEach(function(s, B) {
    var i = !0;
    if (B === 0) {
      var o = !1;
      i = s.reduce(function(l, u) {
        if (o)
          if (V(u))
            switch (u.value) {
              case "center":
                return a.push(Or), l;
              case "top":
              case "left":
                return a.push(rA), l;
              case "right":
              case "bottom":
                return a.push(NA), l;
            }
          else
            (j(u) || _A(u)) && a.push(u);
        else if (V(u))
          switch (u.value) {
            case ka:
              return t = 0, !1;
            case _a:
              return t = 1, !1;
            case "at":
              return o = !0, !1;
            case Ra:
              return r = 0, !1;
            case Pa:
            case Na:
              return r = 1, !1;
            case Xa:
            case Ga:
              return r = 2, !1;
            case Va:
              return r = 3, !1;
          }
        else if (_A(u) || j(u))
          return Array.isArray(r) || (r = []), r.push(u), !1;
        return l;
      }, i);
    }
    if (i) {
      var c = bt(e, s);
      n.push(c);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: a,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, tt = function(e, A) {
  var t = 0, r = 3, n = [], a = [];
  return yA(A).forEach(function(s, B) {
    var i = !0;
    if (B === 0 ? i = s.reduce(function(c, l) {
      if (V(l))
        switch (l.value) {
          case "center":
            return a.push(Or), !1;
          case "top":
          case "left":
            return a.push(rA), !1;
          case "right":
          case "bottom":
            return a.push(NA), !1;
        }
      else if (j(l) || _A(l))
        return a.push(l), !1;
      return c;
    }, i) : B === 1 && (i = s.reduce(function(c, l) {
      if (V(l))
        switch (l.value) {
          case ka:
            return t = 0, !1;
          case _a:
            return t = 1, !1;
          case Xa:
          case Ra:
            return r = 0, !1;
          case Na:
            return r = 1, !1;
          case Ga:
            return r = 2, !1;
          case Pa:
          case Va:
            return r = 3, !1;
        }
      else if (_A(l) || j(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return c;
    }, i)), i) {
      var o = bt(e, s);
      n.push(o);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: a,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, bo = function(e) {
  return e.type === 1;
}, Ko = function(e) {
  return e.type === 2;
}, Rr = {
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
      var r = Ja[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function Lo(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Ja[e.name]);
}
var Ja = {
  "linear-gradient": vo,
  "-moz-linear-gradient": et,
  "-ms-linear-gradient": et,
  "-o-linear-gradient": et,
  "-webkit-linear-gradient": et,
  "radial-gradient": yo,
  "-moz-radial-gradient": tt,
  "-ms-radial-gradient": tt,
  "-o-radial-gradient": tt,
  "-webkit-radial-gradient": tt,
  "-webkit-gradient": Io
}, xo = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return oe(r) && Lo(r);
    }).map(function(r) {
      return Rr.parse(e, r);
    });
  }
}, Do = {
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
}, To = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return yA(A).map(function(t) {
      return t.filter(j);
    }).map(La);
  }
}, So = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return yA(A).map(function(t) {
      return t.filter(V).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Mo);
  }
}, Mo = function(e) {
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
var Oo = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return yA(A).map(function(t) {
      return t.filter(Ro);
    });
  }
}, Ro = function(e) {
  return V(e) || j(e);
}, Kt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, No = Kt("top"), Go = Kt("right"), Vo = Kt("bottom"), ko = Kt("left"), Lt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return La(t.filter(j));
    }
  };
}, _o = Lt("top-left"), Po = Lt("top-right"), Xo = Lt("bottom-right"), Jo = Lt("bottom-left"), xt = function(e) {
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
}, Wo = xt("top"), Yo = xt("right"), Zo = xt("bottom"), jo = xt("left"), Dt = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return Ne(t) ? t.number : 0;
    }
  };
}, zo = Dt("top"), qo = Dt("right"), $o = Dt("bottom"), Ac = Dt("left"), ec = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, tc = {
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
}, rc = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(V).reduce(
      function(t, r) {
        return t | nc(r.value);
      },
      0
      /* NONE */
    );
  }
}, nc = function(e) {
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
}, ac = {
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
}, sc = {
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
var Bc = {
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
}, ic = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, vn = function(e, A) {
  return V(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : j(e) ? k(e, A) : A;
}, oc = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Rr.parse(e, A);
  }
}, cc = {
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
}, lc = Tt("top"), uc = Tt("right"), gc = Tt("bottom"), Qc = Tt("left"), wc = {
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
}, fc = {
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
}, Cc = St("top"), Uc = St("right"), Fc = St("bottom"), hc = St("left"), dc = {
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
}, pc = {
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
}, Ec = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Er(A[0], "none") ? [] : yA(A).map(function(t) {
      for (var r = {
        color: DA.TRANSPARENT,
        offsetX: rA,
        offsetY: rA,
        blur: rA
      }, n = 0, a = 0; a < t.length; a++) {
        var s = t[a];
        _A(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : r.blur = s, n++) : r.color = VA.parse(e, s);
      }
      return r;
    });
  }
}, Hc = {
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
}, mc = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = yc[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, vc = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, Ic = function(e) {
  var A = e.filter(function(i) {
    return i.type === 17;
  }).map(function(i) {
    return i.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var n = A[4], a = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var s = A[12], B = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, n, a, s, B] : null;
}, yc = {
  matrix: vc,
  matrix3d: Ic
}, In = {
  type: 16,
  number: 50,
  flags: Re
}, bc = [In, In], Kc = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(j);
    return t.length !== 2 ? bc : [t[0], t[1]];
  }
}, Lc = {
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
}, ye;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(ye || (ye = {}));
var xc = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return ye.BREAK_ALL;
      case "keep-all":
        return ye.KEEP_ALL;
      case "normal":
      default:
        return ye.NORMAL;
    }
  }
}, Dc = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (le(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Wa = {
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
}, Tc = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return le(A) ? A.number : 1;
  }
}, Sc = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Mc = {
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
}, Oc = {
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
}, Rc = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Nc = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (le(A))
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
}, Gc = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(V).map(function(t) {
      return t.value;
    });
  }
}, Vc = {
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
}, q = function(e, A) {
  return (e & A) !== 0;
}, kc = {
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
}, _c = {
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
    for (var r = [], n = A.filter(Ka), a = 0; a < n.length; a++) {
      var s = n[a], B = n[a + 1];
      if (s.type === 20) {
        var i = B && le(B) ? B.number : 1;
        r.push({ counter: s.value, increment: i });
      }
    }
    return r;
  }
}, Pc = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(Ka), n = 0; n < r.length; n++) {
      var a = r[n], s = r[n + 1];
      if (V(a) && a.value !== "none") {
        var B = s && le(s) ? s.number : 0;
        t.push({ counter: a.value, reset: B });
      }
    }
    return t;
  }
}, Xc = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(Ne).map(function(t) {
      return Wa.parse(e, t);
    });
  }
}, Jc = {
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
    var r = [], n = A.filter(Co);
    if (n.length % 2 !== 0)
      return null;
    for (var a = 0; a < n.length; a += 2) {
      var s = n[a].value, B = n[a + 1].value;
      r.push({ open: s, close: B });
    }
    return r;
  }
}, yn = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Wc = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Er(A[0], "none") ? [] : yA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: rA,
        offsetY: rA,
        blur: rA,
        spread: rA,
        inset: !1
      }, n = 0, a = 0; a < t.length; a++) {
        var s = t[a];
        Er(s, "inset") ? r.inset = !0 : _A(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : n === 2 ? r.blur = s : r.spread = s, n++) : r.color = VA.parse(e, s);
      }
      return r;
    });
  }
}, Yc = {
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
}, Zc = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, jc = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return Ne(A) ? A.number : 0;
  }
}, zc = (
  /** @class */
  function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = E(A, Xc, t.animationDuration), this.backgroundClip = E(A, ho, t.backgroundClip), this.backgroundColor = E(A, po, t.backgroundColor), this.backgroundImage = E(A, xo, t.backgroundImage), this.backgroundOrigin = E(A, Do, t.backgroundOrigin), this.backgroundPosition = E(A, To, t.backgroundPosition), this.backgroundRepeat = E(A, So, t.backgroundRepeat), this.backgroundSize = E(A, Oo, t.backgroundSize), this.borderTopColor = E(A, No, t.borderTopColor), this.borderRightColor = E(A, Go, t.borderRightColor), this.borderBottomColor = E(A, Vo, t.borderBottomColor), this.borderLeftColor = E(A, ko, t.borderLeftColor), this.borderTopLeftRadius = E(A, _o, t.borderTopLeftRadius), this.borderTopRightRadius = E(A, Po, t.borderTopRightRadius), this.borderBottomRightRadius = E(A, Xo, t.borderBottomRightRadius), this.borderBottomLeftRadius = E(A, Jo, t.borderBottomLeftRadius), this.borderTopStyle = E(A, Wo, t.borderTopStyle), this.borderRightStyle = E(A, Yo, t.borderRightStyle), this.borderBottomStyle = E(A, Zo, t.borderBottomStyle), this.borderLeftStyle = E(A, jo, t.borderLeftStyle), this.borderTopWidth = E(A, zo, t.borderTopWidth), this.borderRightWidth = E(A, qo, t.borderRightWidth), this.borderBottomWidth = E(A, $o, t.borderBottomWidth), this.borderLeftWidth = E(A, Ac, t.borderLeftWidth), this.boxShadow = E(A, Wc, t.boxShadow), this.color = E(A, ec, t.color), this.direction = E(A, tc, t.direction), this.display = E(A, rc, t.display), this.float = E(A, ac, t.cssFloat), this.fontFamily = E(A, Oc, t.fontFamily), this.fontSize = E(A, Rc, t.fontSize), this.fontStyle = E(A, Vc, t.fontStyle), this.fontVariant = E(A, Gc, t.fontVariant), this.fontWeight = E(A, Nc, t.fontWeight), this.letterSpacing = E(A, sc, t.letterSpacing), this.lineBreak = E(A, Bc, t.lineBreak), this.lineHeight = E(A, ic, t.lineHeight), this.listStyleImage = E(A, oc, t.listStyleImage), this.listStylePosition = E(A, cc, t.listStylePosition), this.listStyleType = E(A, Hr, t.listStyleType), this.marginTop = E(A, lc, t.marginTop), this.marginRight = E(A, uc, t.marginRight), this.marginBottom = E(A, gc, t.marginBottom), this.marginLeft = E(A, Qc, t.marginLeft), this.opacity = E(A, Tc, t.opacity);
      var a = E(A, wc, t.overflow);
      this.overflowX = a[0], this.overflowY = a[a.length > 1 ? 1 : 0], this.overflowWrap = E(A, fc, t.overflowWrap), this.paddingTop = E(A, Cc, t.paddingTop), this.paddingRight = E(A, Uc, t.paddingRight), this.paddingBottom = E(A, Fc, t.paddingBottom), this.paddingLeft = E(A, hc, t.paddingLeft), this.paintOrder = E(A, Yc, t.paintOrder), this.position = E(A, pc, t.position), this.textAlign = E(A, dc, t.textAlign), this.textDecorationColor = E(A, Sc, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = E(A, Mc, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = E(A, Ec, t.textShadow), this.textTransform = E(A, Hc, t.textTransform), this.transform = E(A, mc, t.transform), this.transformOrigin = E(A, Kc, t.transformOrigin), this.visibility = E(A, Lc, t.visibility), this.webkitTextStrokeColor = E(A, Zc, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = E(A, jc, t.webkitTextStrokeWidth), this.wordBreak = E(A, xc, t.wordBreak), this.zIndex = E(A, Dc, t.zIndex);
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
      return q(
        this.display,
        4
        /* INLINE */
      ) || q(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || q(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || q(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || q(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || q(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), qc = (
  /** @class */
  function() {
    function e(A, t) {
      this.content = E(A, kc, t.content), this.quotes = E(A, Jc, t.quotes);
    }
    return e;
  }()
), bn = (
  /** @class */
  function() {
    function e(A, t) {
      this.counterIncrement = E(A, _c, t.counterIncrement), this.counterReset = E(A, Pc, t.counterReset);
    }
    return e;
  }()
), E = function(e, A, t) {
  var r = new ya(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var a = new ba(r.read());
  switch (A.type) {
    case 2:
      var s = a.parseComponentValue();
      return A.parse(e, V(s) ? s.value : A.initialValue);
    case 0:
      return A.parse(e, a.parseComponentValue());
    case 1:
      return A.parse(e, a.parseComponentValues());
    case 4:
      return a.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return yt.parse(e, a.parseComponentValue());
        case "color":
          return VA.parse(e, a.parseComponentValue());
        case "image":
          return Rr.parse(e, a.parseComponentValue());
        case "length":
          var B = a.parseComponentValue();
          return _A(B) ? B : rA;
        case "length-percentage":
          var i = a.parseComponentValue();
          return j(i) ? i : rA;
        case "time":
          return Wa.parse(e, a.parseComponentValue());
      }
      break;
  }
}, $c = "data-html2canvas-debug", Al = function(e) {
  var A = e.getAttribute($c);
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
  var t = Al(e);
  return t === 1 || A === t;
}, bA = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, mr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new zc(A, window.getComputedStyle(t, null)), yr(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = vt(this.context, t), mr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), el = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Kn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", He = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var rt = 0; rt < Kn.length; rt++)
  He[Kn.charCodeAt(rt)] = rt;
var tl = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, a, s, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    a = He[e.charCodeAt(r)], s = He[e.charCodeAt(r + 1)], B = He[e.charCodeAt(r + 2)], i = He[e.charCodeAt(r + 3)], c[n++] = a << 2 | s >> 4, c[n++] = (s & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, rl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, nl = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, YA = 5, Nr = 6 + 5, Yt = 2, al = Nr - YA, Ya = 65536 >> YA, sl = 1 << YA, Zt = sl - 1, Bl = 1024 >> YA, il = Ya + Bl, ol = il, cl = 32, ll = ol + cl, ul = 65536 >> Nr, gl = 1 << al, Ql = gl - 1, Ln = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, wl = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, fl = function(e, A) {
  var t = tl(e), r = Array.isArray(t) ? nl(t) : new Uint32Array(t), n = Array.isArray(t) ? rl(t) : new Uint16Array(t), a = 24, s = Ln(n, a / 2, r[4] / 2), B = r[5] === 2 ? Ln(n, (a + r[4]) / 2) : wl(r, Math.ceil((a + r[4]) / 4));
  return new Cl(r[0], r[1], r[2], r[3], s, B);
}, Cl = (
  /** @class */
  function() {
    function e(A, t, r, n, a, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = a, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> YA], t = (t << Yt) + (A & Zt), this.data[t];
        if (A <= 65535)
          return t = this.index[Ya + (A - 55296 >> YA)], t = (t << Yt) + (A & Zt), this.data[t];
        if (A < this.highStart)
          return t = ll - ul + (A >> Nr), t = this.index[t], t += A >> YA & Ql, t = this.index[t], t = (t << Yt) + (A & Zt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), xn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ul = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var nt = 0; nt < xn.length; nt++)
  Ul[xn.charCodeAt(nt)] = nt;
var Fl = 1, jt = 2, zt = 3, Dn = 4, Tn = 5, hl = 7, Sn = 8, qt = 9, $t = 10, Mn = 11, On = 12, Rn = 13, Nn = 14, Ar = 15, dl = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var a = e.charCodeAt(t++);
      (a & 64512) === 56320 ? A.push(((n & 1023) << 10) + (a & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, pl = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, a = ""; ++n < t; ) {
    var s = e[n];
    s <= 65535 ? r.push(s) : (s -= 65536, r.push((s >> 10) + 55296, s % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (a += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return a;
}, El = fl(el), FA = "×", er = "÷", Hl = function(e) {
  return El.get(e);
}, ml = function(e, A, t) {
  var r = t - 2, n = A[r], a = A[t - 1], s = A[t];
  if (a === jt && s === zt)
    return FA;
  if (a === jt || a === zt || a === Dn || s === jt || s === zt || s === Dn)
    return er;
  if (a === Sn && [Sn, qt, Mn, On].indexOf(s) !== -1 || (a === Mn || a === qt) && (s === qt || s === $t) || (a === On || a === $t) && s === $t || s === Rn || s === Tn || s === hl || a === Fl)
    return FA;
  if (a === Rn && s === Nn) {
    for (; n === Tn; )
      n = A[--r];
    if (n === Nn)
      return FA;
  }
  if (a === Ar && s === Ar) {
    for (var B = 0; n === Ar; )
      B++, n = A[--r];
    if (B % 2 === 0)
      return FA;
  }
  return er;
}, vl = function(e) {
  var A = dl(e), t = A.length, r = 0, n = 0, a = A.map(Hl);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var s = FA; r < t && (s = ml(A, a, ++r)) === FA; )
        ;
      if (s !== FA || r === t) {
        var B = pl.apply(null, A.slice(n, r));
        return n = r, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Il = function(e) {
  for (var A = vl(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, yl = function(e) {
  var A = 123;
  if (e.createRange) {
    var t = e.createRange();
    if (t.getBoundingClientRect) {
      var r = e.createElement("boundtest");
      r.style.height = A + "px", r.style.display = "block", e.body.appendChild(r), t.selectNode(r);
      var n = t.getBoundingClientRect(), a = Math.round(n.height);
      if (e.body.removeChild(r), a === A)
        return !0;
    }
  }
  return !1;
}, bl = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = It(r.data).map(function(i) {
    return W(i);
  }), a = 0, s = {}, B = n.every(function(i, o) {
    t.setStart(r, a), t.setEnd(r, a + i.length);
    var c = t.getBoundingClientRect();
    a += i.length;
    var l = c.x > s.x || c.y > s.y;
    return s = c, o === 0 ? !0 : l;
  });
  return e.body.removeChild(A), B;
}, Kl = function() {
  return typeof new Image().crossOrigin < "u";
}, Ll = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, xl = function(e) {
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
}, Dl = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), a = A.toDataURL();
  n.src = a;
  var s = vr(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), Vn(s).then(function(B) {
    r.drawImage(B, 0, 0);
    var i = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var o = e.createElement("div");
    return o.style.backgroundImage = "url(" + a + ")", o.style.height = t + "px", Gn(i) ? Vn(vr(t, t, 0, 0, o)) : Promise.reject(!1);
  }).then(function(B) {
    return r.drawImage(B, 0, 0), Gn(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, vr = function(e, A, t, r, n) {
  var a = "http://www.w3.org/2000/svg", s = document.createElementNS(a, "svg"), B = document.createElementNS(a, "foreignObject");
  return s.setAttributeNS(null, "width", e.toString()), s.setAttributeNS(null, "height", A.toString()), B.setAttributeNS(null, "width", "100%"), B.setAttributeNS(null, "height", "100%"), B.setAttributeNS(null, "x", t.toString()), B.setAttributeNS(null, "y", r.toString()), B.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(B), B.appendChild(n), s;
}, Vn = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, tA = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = yl(document);
    return Object.defineProperty(tA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = tA.SUPPORT_RANGE_BOUNDS && bl(document);
    return Object.defineProperty(tA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = xl(document);
    return Object.defineProperty(tA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? Dl(document) : Promise.resolve(!1);
    return Object.defineProperty(tA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = Kl();
    return Object.defineProperty(tA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = Ll();
    return Object.defineProperty(tA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    var e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(tA, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(tA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
}, be = (
  /** @class */
  function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), Tl = function(e, A, t, r) {
  var n = Ol(A, t), a = [], s = 0;
  return n.forEach(function(B) {
    if (t.textDecorationLine.length || B.trim().length > 0)
      if (tA.SUPPORT_RANGE_BOUNDS) {
        var i = kn(r, s, B.length).getClientRects();
        if (i.length > 1) {
          var o = Gr(B), c = 0;
          o.forEach(function(u) {
            a.push(new be(u, TA.fromDOMRectList(e, kn(r, c + s, u.length).getClientRects()))), c += u.length;
          });
        } else
          a.push(new be(B, TA.fromDOMRectList(e, i)));
      } else {
        var l = r.splitText(B.length);
        a.push(new be(B, Sl(e, r))), r = l;
      }
    else
      tA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(B.length));
    s += B.length;
  }), a;
}, Sl = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var a = vt(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), a;
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
  if (tA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return Il(e);
}, Ml = function(e, A) {
  if (tA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Nl(e, A);
}, Ol = function(e, A) {
  return A.letterSpacing !== 0 ? Gr(e) : Ml(e, A);
}, Rl = [32, 160, 4961, 65792, 65793, 4153, 4241], Nl = function(e, A) {
  for (var t = li(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, a = function() {
    if (n.value) {
      var s = n.value.slice(), B = It(s), i = "";
      B.forEach(function(o) {
        Rl.indexOf(o) === -1 ? i += W(o) : (i.length && r.push(i), r.push(W(o)), i = "");
      }), i.length && r.push(i);
    }
  }; !(n = t.next()).done; )
    a();
  return r;
}, Gl = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.text = Vl(t.data, r.textTransform), this.textBounds = Tl(A, this.text, r, t);
    }
    return e;
  }()
), Vl = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(kl, _l);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, kl = /(^|\s|:|-|\(|\))([a-z])/g, _l = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Za = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  }(bA)
), ja = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  }(bA)
), za = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, a = new XMLSerializer(), s = vt(t, r);
      return r.setAttribute("width", s.width + "px"), r.setAttribute("height", s.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(a.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  }(bA)
), qa = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(bA)
), Ir = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return A;
  }(bA)
), Pl = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Xl = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Jl = function(e) {
  return e.width > e.height ? new TA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new TA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, Wl = function(e) {
  var A = e.type === Yl ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, Ft = "checkbox", ht = "radio", Yl = "password", _n = 707406591, Vr = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Wl(r), (n.type === Ft || n.type === ht) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = Jl(n.bounds)), n.type) {
        case Ft:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Pl;
          break;
        case ht:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Xl;
          break;
      }
      return n;
    }
    return A;
  }(bA)
), $a = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, a = r.options[r.selectedIndex || 0];
      return n.value = a && a.text || "", n;
    }
    return A;
  }(bA)
), As = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(bA)
), es = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = rs(t, r.contentWindow.document.documentElement);
          var a = r.contentWindow.document.documentElement ? Ie(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : DA.TRANSPARENT, s = r.contentWindow.document.body ? Ie(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : DA.TRANSPARENT;
          n.backgroundColor = kA(a) ? kA(s) ? n.styles.backgroundColor : s : a;
        }
      } catch {
      }
      return n;
    }
    return A;
  }(bA)
), Zl = ["OL", "UL", "MENU"], lt = function(e, A, t, r) {
  for (var n = A.firstChild, a = void 0; n; n = a)
    if (a = n.nextSibling, ns(n) && n.data.trim().length > 0)
      t.textNodes.push(new Gl(e, n, t.styles));
    else if (se(n))
      if (is(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(B) {
          return lt(e, B, t, r);
        });
      else {
        var s = ts(e, n);
        s.styles.isVisible() && (jl(n, s, r) ? s.flags |= 4 : zl(s.styles) && (s.flags |= 2), Zl.indexOf(n.tagName) !== -1 && (s.flags |= 8), t.elements.push(s), n.slot, n.shadowRoot ? lt(e, n.shadowRoot, s, r) : !dt(n) && !as(n) && !pt(n) && lt(e, n, s, r));
      }
}, ts = function(e, A) {
  return br(A) ? new Za(e, A) : ss(A) ? new ja(e, A) : as(A) ? new za(e, A) : ql(A) ? new qa(e, A) : $l(A) ? new Ir(e, A) : Au(A) ? new Vr(e, A) : pt(A) ? new $a(e, A) : dt(A) ? new As(e, A) : Bs(A) ? new es(e, A) : new bA(e, A);
}, rs = function(e, A) {
  var t = ts(e, A);
  return t.flags |= 4, lt(e, A, t, t), t;
}, jl = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || kr(e) && t.styles.isTransparent();
}, zl = function(e) {
  return e.isPositioned() || e.isFloating();
}, ns = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, se = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, yr = function(e) {
  return se(e) && typeof e.style < "u" && !ut(e);
}, ut = function(e) {
  return typeof e.className == "object";
}, ql = function(e) {
  return e.tagName === "LI";
}, $l = function(e) {
  return e.tagName === "OL";
}, Au = function(e) {
  return e.tagName === "INPUT";
}, eu = function(e) {
  return e.tagName === "HTML";
}, as = function(e) {
  return e.tagName === "svg";
}, kr = function(e) {
  return e.tagName === "BODY";
}, ss = function(e) {
  return e.tagName === "CANVAS";
}, Pn = function(e) {
  return e.tagName === "VIDEO";
}, br = function(e) {
  return e.tagName === "IMG";
}, Bs = function(e) {
  return e.tagName === "IFRAME";
}, Xn = function(e) {
  return e.tagName === "STYLE";
}, tu = function(e) {
  return e.tagName === "SCRIPT";
}, dt = function(e) {
  return e.tagName === "TEXTAREA";
}, pt = function(e) {
  return e.tagName === "SELECT";
}, is = function(e) {
  return e.tagName === "SLOT";
}, Jn = function(e) {
  return e.tagName.indexOf("-") > 0;
}, ru = (
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
      var t = this, r = A.counterIncrement, n = A.counterReset, a = !0;
      r !== null && r.forEach(function(B) {
        var i = t.counters[B.counter];
        i && B.increment !== 0 && (a = !1, i.length || i.push(1), i[Math.max(0, i.length - 1)] += B.increment);
      });
      var s = [];
      return a && n.forEach(function(B) {
        var i = t.counters[B.counter];
        s.push(B.counter), i || (i = t.counters[B.counter] = []), i.push(B.reset);
      }), s;
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
}, nu = {
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
}, Ae = function(e, A, t, r, n, a) {
  return e < A || e > t ? Oe(e, n, a.length > 0) : r.integers.reduce(function(s, B, i) {
    for (; e >= B; )
      e -= B, s += r.values[i];
    return s;
  }, "") + a;
}, os = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, J = function(e, A, t, r, n) {
  var a = t - A + 1;
  return (e < 0 ? "-" : "") + (os(Math.abs(e), a, r, function(s) {
    return W(Math.floor(s % a) + A);
  }) + n);
}, PA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return os(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, re = 1, SA = 2, MA = 4, me = 8, xA = function(e, A, t, r, n, a) {
  if (e < -9999 || e > 9999)
    return Oe(e, 4, n.length > 0);
  var s = Math.abs(e), B = n;
  if (s === 0)
    return A[0] + B;
  for (var i = 0; s > 0 && i <= 4; i++) {
    var o = s % 10;
    o === 0 && q(a, re) && B !== "" ? B = A[o] + B : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && q(a, SA) || o === 1 && i === 1 && q(a, MA) && e > 100 || o === 1 && i > 1 && q(a, me) ? B = A[o] + (i > 0 ? t[i - 1] : "") + B : o === 1 && i > 0 && (B = t[i - 1] + B), s = Math.floor(s / 10);
  }
  return (e < 0 ? r : "") + B;
}, Zn = "十百千萬", jn = "拾佰仟萬", zn = "マイナス", tr = "마이너스", Oe = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", a = t ? ", " : "", s = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + s;
    case 1:
      return "◦" + s;
    case 2:
      return "◾" + s;
    case 5:
      var B = J(e, 48, 57, !0, r);
      return B.length < 4 ? "0" + B : B;
    case 4:
      return PA(e, "〇一二三四五六七八九", n);
    case 6:
      return Ae(e, 1, 3999, Wn, 3, r).toLowerCase();
    case 7:
      return Ae(e, 1, 3999, Wn, 3, r);
    case 8:
      return J(e, 945, 969, !1, r);
    case 9:
      return J(e, 97, 122, !1, r);
    case 10:
      return J(e, 65, 90, !1, r);
    case 11:
      return J(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Ae(e, 1, 9999, Yn, 3, r);
    case 35:
      return Ae(e, 1, 9999, Yn, 3, r).toLowerCase();
    case 13:
      return J(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return J(e, 6112, 6121, !0, r);
    case 15:
      return PA(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return PA(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return xA(e, "零一二三四五六七八九", Zn, "負", n, SA | MA | me);
    case 47:
      return xA(e, "零壹貳參肆伍陸柒捌玖", jn, "負", n, re | SA | MA | me);
    case 42:
      return xA(e, "零一二三四五六七八九", Zn, "负", n, SA | MA | me);
    case 41:
      return xA(e, "零壹贰叁肆伍陆柒捌玖", jn, "负", n, re | SA | MA | me);
    case 26:
      return xA(e, "〇一二三四五六七八九", "十百千万", zn, n, 0);
    case 25:
      return xA(e, "零壱弐参四伍六七八九", "拾百千万", zn, n, re | SA | MA);
    case 31:
      return xA(e, "영일이삼사오육칠팔구", "십백천만", tr, a, re | SA | MA);
    case 33:
      return xA(e, "零一二三四五六七八九", "十百千萬", tr, a, 0);
    case 32:
      return xA(e, "零壹貳參四五六七八九", "拾百千", tr, a, re | SA | MA);
    case 18:
      return J(e, 2406, 2415, !0, r);
    case 20:
      return Ae(e, 1, 19999, au, 3, r);
    case 21:
      return J(e, 2790, 2799, !0, r);
    case 22:
      return J(e, 2662, 2671, !0, r);
    case 22:
      return Ae(e, 1, 10999, nu, 3, r);
    case 23:
      return PA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return PA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return J(e, 3302, 3311, !0, r);
    case 28:
      return PA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return PA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return J(e, 3792, 3801, !0, r);
    case 37:
      return J(e, 6160, 6169, !0, r);
    case 38:
      return J(e, 4160, 4169, !0, r);
    case 39:
      return J(e, 2918, 2927, !0, r);
    case 40:
      return J(e, 1776, 1785, !0, r);
    case 43:
      return J(e, 3046, 3055, !0, r);
    case 44:
      return J(e, 3174, 3183, !0, r);
    case 45:
      return J(e, 3664, 3673, !0, r);
    case 46:
      return J(e, 3872, 3881, !0, r);
    case 3:
    default:
      return J(e, 48, 57, !0, r);
  }
}, cs = "data-html2canvas-ignore", qn = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new ru(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = su(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var a = A.defaultView.pageXOffset, s = A.defaultView.pageYOffset, B = n.contentWindow, i = B.document, o = ou(n).then(function() {
        return iA(r, void 0, void 0, function() {
          var c, l;
          return aA(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(gu), B && (B.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (B.scrollY !== t.top || B.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(B.scrollX - t.left, B.scrollY - t.top, 0, 0))), c = this.options.onclone, l = this.clonedReferenceElement, typeof l > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
              case 1:
                u.sent(), u.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, iu(i)] : [3, 4];
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
      return i.open(), i.write(lu(document.doctype) + "<html></html>"), uu(this.referenceElement.ownerDocument, a, s), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), o;
    }, e.prototype.createElementClone = function(A) {
      if (mr(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (ss(A))
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
          var r = [].slice.call(t.cssRules, 0).reduce(function(a, s) {
            return s && typeof s.cssText == "string" ? a + s.cssText : a;
          }, ""), n = A.cloneNode(!1);
          return n.textContent = r, n;
        }
      } catch (a) {
        if (this.context.logger.error("Unable to access cssRules property", a), a.name !== "SecurityError")
          throw a;
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
        var a = A.getContext("2d"), s = n.getContext("2d");
        if (s)
          if (!this.options.allowTaint && a)
            s.putImageData(a.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var B = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
            if (B) {
              var i = B.getContextAttributes();
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
      (!se(t) || !tu(t) && !t.hasAttribute(cs) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !se(t) || !Xn(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, a = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; a; a = a.nextSibling)
        if (se(a) && is(a) && typeof a.assignedNodes == "function") {
          var s = a.assignedNodes();
          s.length && s.forEach(function(B) {
            return n.appendChildNode(t, B, r);
          });
        } else
          this.appendChildNode(t, a, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (ns(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && se(A) && (yr(A) || ut(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var a = r.getComputedStyle(A), s = r.getComputedStyle(A, ":before"), B = r.getComputedStyle(A, ":after");
        this.referenceElement === A && yr(n) && (this.clonedReferenceElement = n), kr(n) && fu(n);
        var i = this.counters.parse(new bn(this.context, a)), o = this.resolvePseudoContent(A, n, s, Ke.BEFORE);
        Jn(A) && (t = !0), Pn(A) || this.cloneChildNodes(A, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(A, n, B, Ke.AFTER);
        return c && n.appendChild(c), this.counters.pop(i), (a && (this.options.copyStyles || ut(A)) && !Bs(A) || t) && rr(a, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (dt(A) || pt(A)) && (dt(n) || pt(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var a = this;
      if (r) {
        var s = r.content, B = t.ownerDocument;
        if (!(!B || !s || s === "none" || s === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new bn(this.context, r));
          var i = new qc(this.context, r), o = B.createElement("html2canvaspseudoelement");
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
                var g = l.values.filter(oe), w = g[0], C = g[1];
                if (w && V(w)) {
                  var f = a.counters.getCounterValue(w.value), h = C && V(C) ? Hr.parse(a.context, C.value) : 3;
                  o.appendChild(B.createTextNode(Oe(f, h, !1)));
                }
              } else if (l.name === "counters") {
                var I = l.values.filter(oe), w = I[0], H = I[1], C = I[2];
                if (w && V(w)) {
                  var m = a.counters.getCounterValues(w.value), F = C && V(C) ? Hr.parse(a.context, C.value) : 3, L = H && H.type === 0 ? H.value : "", K = m.map(function(G) {
                    return Oe(G, F, !1);
                  }).join(L);
                  o.appendChild(B.createTextNode(K));
                }
              }
            } else if (l.type === 20)
              switch (l.value) {
                case "open-quote":
                  o.appendChild(B.createTextNode(yn(i.quotes, a.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(B.createTextNode(yn(i.quotes, --a.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(B.createTextNode(l.value));
              }
          }), o.className = Kr + " " + Lr;
          var c = n === Ke.BEFORE ? " " + Kr : " " + Lr;
          return ut(t) ? t.className.baseValue += c : t.className += c, o;
        }
      }
    }, e.destroy = function(A) {
      return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
    }, e;
  }()
), Ke;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ke || (Ke = {}));
var su = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(cs, "true"), e.body.appendChild(t), t;
}, Bu = function(e) {
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
}, iu = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(Bu));
}, ou = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var n = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var a = setInterval(function() {
        n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(a), A(e));
      }, 50);
    };
  });
}, cu = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], rr = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    cu.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, lu = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, uu = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, gu = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Qu = ":before", wu = ":after", Kr = "___html2canvas___pseudoelement_before", Lr = "___html2canvas___pseudoelement_after", $n = `{
    content: "" !important;
    display: none !important;
}`, fu = function(e) {
  Cu(e, "." + Kr + Qu + $n + `
         .` + Lr + wu + $n);
}, Cu = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, ls = (
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
), Uu = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (ar(A) || pu(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return iA(this, void 0, void 0, function() {
        var t, r, n, a, s = this;
        return aA(this, function(B) {
          switch (B.label) {
            case 0:
              return t = ls.isSameOrigin(A), r = !nr(A) && this._options.useCORS === !0 && tA.SUPPORT_CORS_IMAGES && !t, n = !nr(A) && !t && !ar(A) && typeof this._options.proxy == "string" && tA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !nr(A) && !ar(A) && !n && !r ? [
                2
                /*return*/
              ] : (a = A, n ? [4, this.proxy(a)] : [3, 2]);
            case 1:
              a = B.sent(), B.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(i, o) {
                var c = new Image();
                c.onload = function() {
                  return i(c);
                }, c.onerror = o, (Eu(a) || r) && (c.crossOrigin = "anonymous"), c.src = a, c.complete === !0 && setTimeout(function() {
                  return i(c);
                }, 500), s._options.imageTimeout > 0 && setTimeout(function() {
                  return o("Timed out (" + s._options.imageTimeout + "ms) loading image");
                }, s._options.imageTimeout);
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
      return new Promise(function(a, s) {
        var B = tA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
        i.onload = function() {
          if (i.status === 200)
            if (B === "text")
              a(i.response);
            else {
              var l = new FileReader();
              l.addEventListener("load", function() {
                return a(l.result);
              }, !1), l.addEventListener("error", function(u) {
                return s(u);
              }, !1), l.readAsDataURL(i.response);
            }
          else
            s("Failed to proxy resource " + n + " with status code " + i.status);
        }, i.onerror = s;
        var o = r.indexOf("?") > -1 ? "&" : "?";
        if (i.open("GET", "" + r + o + "url=" + encodeURIComponent(A) + "&responseType=" + B), B !== "text" && i instanceof XMLHttpRequest && (i.responseType = B), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          i.timeout = c, i.ontimeout = function() {
            return s("Timed out (" + c + "ms) proxying " + n);
          };
        }
        i.send();
      });
    }, e;
  }()
), Fu = /^data:image\/svg\+xml/i, hu = /^data:image\/.*;base64,/i, du = /^data:image\/.*/i, pu = function(e) {
  return tA.SUPPORT_SVG_DRAWING || !Hu(e);
}, nr = function(e) {
  return du.test(e);
}, Eu = function(e) {
  return hu.test(e);
}, ar = function(e) {
  return e.substr(0, 4) === "blob";
}, Hu = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || Fu.test(e);
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
), ee = function(e, A, t) {
  return new p(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, at = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = ee(this.start, this.startControl, A), n = ee(this.startControl, this.endControl, A), a = ee(this.endControl, this.end, A), s = ee(r, n, A), B = ee(n, a, A), i = ee(s, B, A);
      return t ? new e(this.start, r, s, i) : new e(i, B, a, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), hA = function(e) {
  return e.type === 1;
}, mu = (
  /** @class */
  function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = Ee(t.borderTopLeftRadius, r.width, r.height), a = n[0], s = n[1], B = Ee(t.borderTopRightRadius, r.width, r.height), i = B[0], o = B[1], c = Ee(t.borderBottomRightRadius, r.width, r.height), l = c[0], u = c[1], Q = Ee(t.borderBottomLeftRadius, r.width, r.height), g = Q[0], w = Q[1], C = [];
      C.push((a + i) / r.width), C.push((g + l) / r.width), C.push((s + w) / r.height), C.push((o + u) / r.height);
      var f = Math.max.apply(Math, C);
      f > 1 && (a /= f, s /= f, i /= f, o /= f, l /= f, u /= f, g /= f, w /= f);
      var h = r.width - i, I = r.height - u, H = r.width - l, m = r.height - w, F = t.borderTopWidth, L = t.borderRightWidth, K = t.borderBottomWidth, y = t.borderLeftWidth, x = k(t.paddingTop, A.bounds.width), G = k(t.paddingRight, A.bounds.width), P = k(t.paddingBottom, A.bounds.width), S = k(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = a > 0 || s > 0 ? _(r.left + y / 3, r.top + F / 3, a - y / 3, s - F / 3, N.TOP_LEFT) : new p(r.left + y / 3, r.top + F / 3), this.topRightBorderDoubleOuterBox = a > 0 || s > 0 ? _(r.left + h, r.top + F / 3, i - L / 3, o - F / 3, N.TOP_RIGHT) : new p(r.left + r.width - L / 3, r.top + F / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || u > 0 ? _(r.left + H, r.top + I, l - L / 3, u - K / 3, N.BOTTOM_RIGHT) : new p(r.left + r.width - L / 3, r.top + r.height - K / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || w > 0 ? _(r.left + y / 3, r.top + m, g - y / 3, w - K / 3, N.BOTTOM_LEFT) : new p(r.left + y / 3, r.top + r.height - K / 3), this.topLeftBorderDoubleInnerBox = a > 0 || s > 0 ? _(r.left + y * 2 / 3, r.top + F * 2 / 3, a - y * 2 / 3, s - F * 2 / 3, N.TOP_LEFT) : new p(r.left + y * 2 / 3, r.top + F * 2 / 3), this.topRightBorderDoubleInnerBox = a > 0 || s > 0 ? _(r.left + h, r.top + F * 2 / 3, i - L * 2 / 3, o - F * 2 / 3, N.TOP_RIGHT) : new p(r.left + r.width - L * 2 / 3, r.top + F * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || u > 0 ? _(r.left + H, r.top + I, l - L * 2 / 3, u - K * 2 / 3, N.BOTTOM_RIGHT) : new p(r.left + r.width - L * 2 / 3, r.top + r.height - K * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || w > 0 ? _(r.left + y * 2 / 3, r.top + m, g - y * 2 / 3, w - K * 2 / 3, N.BOTTOM_LEFT) : new p(r.left + y * 2 / 3, r.top + r.height - K * 2 / 3), this.topLeftBorderStroke = a > 0 || s > 0 ? _(r.left + y / 2, r.top + F / 2, a - y / 2, s - F / 2, N.TOP_LEFT) : new p(r.left + y / 2, r.top + F / 2), this.topRightBorderStroke = a > 0 || s > 0 ? _(r.left + h, r.top + F / 2, i - L / 2, o - F / 2, N.TOP_RIGHT) : new p(r.left + r.width - L / 2, r.top + F / 2), this.bottomRightBorderStroke = l > 0 || u > 0 ? _(r.left + H, r.top + I, l - L / 2, u - K / 2, N.BOTTOM_RIGHT) : new p(r.left + r.width - L / 2, r.top + r.height - K / 2), this.bottomLeftBorderStroke = g > 0 || w > 0 ? _(r.left + y / 2, r.top + m, g - y / 2, w - K / 2, N.BOTTOM_LEFT) : new p(r.left + y / 2, r.top + r.height - K / 2), this.topLeftBorderBox = a > 0 || s > 0 ? _(r.left, r.top, a, s, N.TOP_LEFT) : new p(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? _(r.left + h, r.top, i, o, N.TOP_RIGHT) : new p(r.left + r.width, r.top), this.bottomRightBorderBox = l > 0 || u > 0 ? _(r.left + H, r.top + I, l, u, N.BOTTOM_RIGHT) : new p(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || w > 0 ? _(r.left, r.top + m, g, w, N.BOTTOM_LEFT) : new p(r.left, r.top + r.height), this.topLeftPaddingBox = a > 0 || s > 0 ? _(r.left + y, r.top + F, Math.max(0, a - y), Math.max(0, s - F), N.TOP_LEFT) : new p(r.left + y, r.top + F), this.topRightPaddingBox = i > 0 || o > 0 ? _(r.left + Math.min(h, r.width - L), r.top + F, h > r.width + L ? 0 : Math.max(0, i - L), Math.max(0, o - F), N.TOP_RIGHT) : new p(r.left + r.width - L, r.top + F), this.bottomRightPaddingBox = l > 0 || u > 0 ? _(r.left + Math.min(H, r.width - y), r.top + Math.min(I, r.height - K), Math.max(0, l - L), Math.max(0, u - K), N.BOTTOM_RIGHT) : new p(r.left + r.width - L, r.top + r.height - K), this.bottomLeftPaddingBox = g > 0 || w > 0 ? _(r.left + y, r.top + Math.min(m, r.height - K), Math.max(0, g - y), Math.max(0, w - K), N.BOTTOM_LEFT) : new p(r.left + y, r.top + r.height - K), this.topLeftContentBox = a > 0 || s > 0 ? _(r.left + y + S, r.top + F + x, Math.max(0, a - (y + S)), Math.max(0, s - (F + x)), N.TOP_LEFT) : new p(r.left + y + S, r.top + F + x), this.topRightContentBox = i > 0 || o > 0 ? _(r.left + Math.min(h, r.width + y + S), r.top + F + x, h > r.width + y + S ? 0 : i - y + S, o - (F + x), N.TOP_RIGHT) : new p(r.left + r.width - (L + G), r.top + F + x), this.bottomRightContentBox = l > 0 || u > 0 ? _(r.left + Math.min(H, r.width - (y + S)), r.top + Math.min(I, r.height + F + x), Math.max(0, l - (L + G)), u - (K + P), N.BOTTOM_RIGHT) : new p(r.left + r.width - (L + G), r.top + r.height - (K + P)), this.bottomLeftContentBox = g > 0 || w > 0 ? _(r.left + y + S, r.top + m, Math.max(0, g - (y + S)), w - (K + P), N.BOTTOM_LEFT) : new p(r.left + y + S, r.top + r.height - (K + P));
    }
    return e;
  }()
), N;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(N || (N = {}));
var _ = function(e, A, t, r, n) {
  var a = 4 * ((Math.sqrt(2) - 1) / 3), s = t * a, B = r * a, i = e + t, o = A + r;
  switch (n) {
    case N.TOP_LEFT:
      return new at(new p(e, o), new p(e, o - B), new p(i - s, A), new p(i, A));
    case N.TOP_RIGHT:
      return new at(new p(e, A), new p(e + s, A), new p(i, o - B), new p(i, o));
    case N.BOTTOM_RIGHT:
      return new at(new p(i, A), new p(i, A + B), new p(e + s, o), new p(e, o));
    case N.BOTTOM_LEFT:
    default:
      return new at(new p(i, o), new p(i - s, o), new p(e, A + B), new p(e, A));
  }
}, Et = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, vu = function(e) {
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
}, Iu = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  }()
), st = (
  /** @class */
  function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  }()
), yu = (
  /** @class */
  function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), bu = function(e) {
  return e.type === 0;
}, us = function(e) {
  return e.type === 1;
}, Ku = function(e) {
  return e.type === 2;
}, Aa = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, Lu = function(e, A, t, r, n) {
  return e.map(function(a, s) {
    switch (s) {
      case 0:
        return a.add(A, t);
      case 1:
        return a.add(A + r, t);
      case 2:
        return a.add(A + r, t + n);
      case 3:
        return a.add(A, t + n);
    }
    return a;
  });
}, gs = (
  /** @class */
  function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), Qs = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new mu(this.container), this.container.styles.opacity < 1 && this.effects.push(new yu(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, a = this.container.styles.transform;
        this.effects.push(new Iu(r, n, a));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = Et(this.curves), B = Ht(this.curves);
        Aa(s, B) ? this.effects.push(new st(
          s,
          6
          /* CONTENT */
        )) : (this.effects.push(new st(
          s,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new st(
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
        var a = r.effects.filter(function(i) {
          return !us(i);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, a), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var s = Et(r.curves), B = Ht(r.curves);
            Aa(s, B) || n.unshift(new st(
              B,
              6
              /* CONTENT */
            ));
          }
        } else
          n.unshift.apply(n, a);
        r = r.parent;
      }
      return n.filter(function(i) {
        return q(i.target, A);
      });
    }, e;
  }()
), xr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var a = q(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), s = q(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), B = new Qs(n, e);
    q(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(B);
    var i = q(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (a || s) {
      var o = a || n.styles.isPositioned() ? t : A, c = new gs(B);
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
      xr(B, c, a ? c : t, i);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(B) : A.nonInlineLevel.push(B), xr(B, A, t, i);
    q(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && ws(n, i);
  });
}, ws = function(e, A) {
  for (var t = e instanceof Ir ? e.start : 1, r = e instanceof Ir ? e.reversed : !1, n = 0; n < A.length; n++) {
    var a = A[n];
    a.container instanceof qa && typeof a.container.value == "number" && a.container.value !== 0 && (t = a.container.value), a.listValue = Oe(t, a.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, xu = function(e) {
  var A = new Qs(e, null), t = new gs(A), r = [];
  return xr(A, t, t, r), ws(A.container, r), t;
}, ea = function(e, A) {
  switch (A) {
    case 0:
      return pA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return pA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return pA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return pA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Du = function(e, A) {
  switch (A) {
    case 0:
      return pA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return pA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return pA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return pA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, Tu = function(e, A) {
  switch (A) {
    case 0:
      return pA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return pA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return pA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return pA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, Su = function(e, A) {
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
  return hA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), hA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, pA = function(e, A, t, r) {
  var n = [];
  return hA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), hA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), hA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), hA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, fs = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, mt = function(e) {
  var A = e.styles, t = e.bounds, r = k(A.paddingLeft, t.width), n = k(A.paddingRight, t.width), a = k(A.paddingTop, t.width), s = k(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, a + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + a + s));
}, Mu = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? mt(A) : fs(A);
}, Ou = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? mt(A) : fs(A);
}, sr = function(e, A, t) {
  var r = Mu(ne(e.styles.backgroundOrigin, A), e), n = Ou(ne(e.styles.backgroundClip, A), e), a = Ru(ne(e.styles.backgroundSize, A), t, r), s = a[0], B = a[1], i = Ee(ne(e.styles.backgroundPosition, A), r.width - s, r.height - B), o = Nu(ne(e.styles.backgroundRepeat, A), i, a, r, n), c = Math.round(r.left + i[0]), l = Math.round(r.top + i[1]);
  return [o, c, l, s, B];
}, te = function(e) {
  return V(e) && e.value === Be.AUTO;
}, it = function(e) {
  return typeof e == "number";
}, Ru = function(e, A, t) {
  var r = A[0], n = A[1], a = A[2], s = e[0], B = e[1];
  if (!s)
    return [0, 0];
  if (j(s) && B && j(B))
    return [k(s, t.width), k(B, t.height)];
  var i = it(a);
  if (V(s) && (s.value === Be.CONTAIN || s.value === Be.COVER)) {
    if (it(a)) {
      var o = t.width / t.height;
      return o < a != (s.value === Be.COVER) ? [t.width, t.width / a] : [t.height * a, t.height];
    }
    return [t.width, t.height];
  }
  var c = it(r), l = it(n), u = c || l;
  if (te(s) && (!B || te(B))) {
    if (c && l)
      return [r, n];
    if (!i && !u)
      return [t.width, t.height];
    if (u && i) {
      var Q = c ? r : n * a, g = l ? n : r / a;
      return [Q, g];
    }
    var w = c ? r : t.width, C = l ? n : t.height;
    return [w, C];
  }
  if (i) {
    var f = 0, h = 0;
    return j(s) ? f = k(s, t.width) : j(B) && (h = k(B, t.height)), te(s) ? f = h * a : (!B || te(B)) && (h = f / a), [f, h];
  }
  var I = null, H = null;
  if (j(s) ? I = k(s, t.width) : B && j(B) && (H = k(B, t.height)), I !== null && (!B || te(B)) && (H = c && l ? I / r * n : t.height), H !== null && te(s) && (I = c && l ? H / n * r : t.width), I !== null && H !== null)
    return [I, H];
  throw new Error("Unable to calculate background-size for element");
}, ne = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Nu = function(e, A, t, r, n) {
  var a = A[0], s = A[1], B = t[0], i = t[1];
  switch (e) {
    case 2:
      return [
        new p(Math.round(r.left), Math.round(r.top + s)),
        new p(Math.round(r.left + r.width), Math.round(r.top + s)),
        new p(Math.round(r.left + r.width), Math.round(i + r.top + s)),
        new p(Math.round(r.left), Math.round(i + r.top + s))
      ];
    case 3:
      return [
        new p(Math.round(r.left + a), Math.round(r.top)),
        new p(Math.round(r.left + a + B), Math.round(r.top)),
        new p(Math.round(r.left + a + B), Math.round(r.height + r.top)),
        new p(Math.round(r.left + a), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new p(Math.round(r.left + a), Math.round(r.top + s)),
        new p(Math.round(r.left + a + B), Math.round(r.top + s)),
        new p(Math.round(r.left + a + B), Math.round(r.top + s + i)),
        new p(Math.round(r.left + a), Math.round(r.top + s + i))
      ];
    default:
      return [
        new p(Math.round(n.left), Math.round(n.top)),
        new p(Math.round(n.left + n.width), Math.round(n.top)),
        new p(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new p(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, Gu = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ta = "Hidden Text", Vu = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), a = this._document.createElement("span"), s = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", s.appendChild(r), n.src = Gu, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", a.style.fontFamily = A, a.style.fontSize = t, a.style.margin = "0", a.style.padding = "0", a.appendChild(this._document.createTextNode(ta)), r.appendChild(a), r.appendChild(n);
      var B = n.offsetTop - a.offsetTop + 2;
      r.removeChild(a), r.appendChild(this._document.createTextNode(ta)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var i = n.offsetTop - r.offsetTop + 2;
      return s.removeChild(r), { baseline: B, middle: i };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), Cs = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), ku = 1e4, _u = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new Vu(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), Ku(t) && (this.ctx.globalAlpha = t.opacity), bu(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), us(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return iA(this, void 0, void 0, function() {
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
      return iA(this, void 0, void 0, function() {
        return aA(this, function(r) {
          switch (r.label) {
            case 0:
              if (q(
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
      var a = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var s = Gr(t.text);
        s.reduce(function(B, i) {
          return a.ctx.fillText(i, B, t.bounds.top + n), B + a.ctx.measureText(i).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(s) {
        return s === "normal" || s === "small-caps";
      }).join(""), n = Yu(t.fontFamily).join(", "), a = Ne(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, a, n].join(" "),
        n,
        a
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return iA(this, void 0, void 0, function() {
        var n, a, s, B, i, o, c, l, u = this;
        return aA(this, function(Q) {
          return n = this.createFontStyle(r), a = n[0], s = n[1], B = n[2], this.ctx.font = a, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(s, B), o = i.baseline, c = i.middle, l = r.paintOrder, t.textBounds.forEach(function(g) {
            l.forEach(function(w) {
              switch (w) {
                case 0:
                  u.ctx.fillStyle = AA(r.color), u.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  var C = r.textShadow;
                  C.length && g.text.trim().length && (C.slice(0).reverse().forEach(function(f) {
                    u.ctx.shadowColor = AA(f.color), u.ctx.shadowOffsetX = f.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = f.offsetY.number * u.options.scale, u.ctx.shadowBlur = f.blur.number, u.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = AA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(f) {
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
                  r.webkitTextStrokeWidth && g.text.trim().length && (u.ctx.strokeStyle = AA(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + o)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
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
        var a = mt(t), s = Ht(r);
        this.path(s), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, a.left, a.top, a.width, a.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return iA(this, void 0, void 0, function() {
        var r, n, a, s, B, i, h, h, o, c, l, u, H, Q, g, m, w, C, f, h, I, H, m;
        return aA(this, function(F) {
          switch (F.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, a = r.styles, s = 0, B = r.textNodes, F.label = 1;
            case 1:
              return s < B.length ? (i = B[s], [4, this.renderTextNode(i, a)]) : [3, 4];
            case 2:
              F.sent(), F.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              if (!(r instanceof Za))
                return [3, 8];
              F.label = 5;
            case 5:
              return F.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return h = F.sent(), this.renderReplacedElement(r, n, h), [3, 8];
            case 7:
              return F.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof ja && this.renderReplacedElement(r, n, r.canvas), !(r instanceof za))
                return [3, 12];
              F.label = 9;
            case 9:
              return F.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return h = F.sent(), this.renderReplacedElement(r, n, h), [3, 12];
            case 11:
              return F.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof es && r.tree ? (o = new A(this.context, {
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
                new p(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79),
                new p(r.bounds.left + l * 0.16, r.bounds.top + l * 0.5549),
                new p(r.bounds.left + l * 0.27347, r.bounds.top + l * 0.44071),
                new p(r.bounds.left + l * 0.39694, r.bounds.top + l * 0.5649),
                new p(r.bounds.left + l * 0.72983, r.bounds.top + l * 0.23),
                new p(r.bounds.left + l * 0.84, r.bounds.top + l * 0.34085),
                new p(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79)
              ]), this.ctx.fillStyle = AA(_n), this.ctx.fill(), this.ctx.restore()) : r.type === ht && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + l / 2, r.bounds.top + l / 2, l / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = AA(_n), this.ctx.fill(), this.ctx.restore())), Pu(r) && r.value.length) {
                switch (u = this.createFontStyle(a), H = u[0], Q = u[1], g = this.fontMetrics.getMetrics(H, Q).baseline, this.ctx.font = H, this.ctx.fillStyle = AA(a.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Ju(r.styles.textAlign), m = mt(r), w = 0, r.styles.textAlign) {
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
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new be(r.value, C), a.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!q(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (f = r.styles.listStyleImage, f.type !== 0)
                return [3, 18];
              h = void 0, I = f.url, F.label = 15;
            case 15:
              return F.trys.push([15, 17, , 18]), [4, this.context.cache.match(I)];
            case 16:
              return h = F.sent(), this.ctx.drawImage(h, r.bounds.left - (h.width + 10), r.bounds.top), [3, 18];
            case 17:
              return F.sent(), this.context.logger.error("Error loading list-style-image " + I), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (H = this.createFontStyle(a)[0], this.ctx.font = H, this.ctx.fillStyle = AA(a.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", m = new TA(r.bounds.left, r.bounds.top + k(r.styles.paddingTop, r.bounds.width), r.bounds.width, vn(a.lineHeight, a.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new be(t.listValue, m), a.letterSpacing, vn(a.lineHeight, a.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), F.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(t) {
      return iA(this, void 0, void 0, function() {
        var r, n, f, a, s, f, B, i, f, o, c, f, l, u, f, Q, g, f, w, C, f;
        return aA(this, function(h) {
          switch (h.label) {
            case 0:
              if (q(
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
              h.sent(), a = 0, s = t.nonInlineLevel, h.label = 7;
            case 7:
              return a < s.length ? (f = s[a], [4, this.renderNode(f)]) : [3, 10];
            case 8:
              h.sent(), h.label = 9;
            case 9:
              return a++, [3, 7];
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
      t.forEach(function(n, a) {
        var s = hA(n) ? n.start : n;
        a === 0 ? r.ctx.moveTo(s.x, s.y) : r.ctx.lineTo(s.x, s.y), hA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, A.prototype.renderRepeat = function(t, r, n, a) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, a), this.ctx.fill(), this.ctx.translate(-n, -a);
    }, A.prototype.resizeImage = function(t, r, n) {
      var a;
      if (t.width === r && t.height === n)
        return t;
      var s = (a = this.canvas.ownerDocument) !== null && a !== void 0 ? a : document, B = s.createElement("canvas");
      B.width = Math.max(1, r), B.height = Math.max(1, n);
      var i = B.getContext("2d");
      return i.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), B;
    }, A.prototype.renderBackgroundImage = function(t) {
      return iA(this, void 0, void 0, function() {
        var r, n, a, s, B, i;
        return aA(this, function(o) {
          switch (o.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var l, u, Q, x, $, Y, S, X, K, g, x, $, Y, S, X, w, C, f, h, I, H, m, F, L, K, y, x, G, P, S, X, QA, $, Y, wA, BA, uA, fA, CA, oA, UA, cA;
                return aA(this, function(EA) {
                  switch (EA.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      l = void 0, u = c.url, EA.label = 1;
                    case 1:
                      return EA.trys.push([1, 3, , 4]), [4, a.context.cache.match(u)];
                    case 2:
                      return l = EA.sent(), [3, 4];
                    case 3:
                      return EA.sent(), a.context.logger.error("Error loading background-image " + u), [3, 4];
                    case 4:
                      return l && (Q = sr(t, r, [
                        l.width,
                        l.height,
                        l.width / l.height
                      ]), x = Q[0], $ = Q[1], Y = Q[2], S = Q[3], X = Q[4], K = a.ctx.createPattern(a.resizeImage(l, S, X), "repeat"), a.renderRepeat(x, K, $, Y)), [3, 6];
                    case 5:
                      bo(c) ? (g = sr(t, r, [null, null, null]), x = g[0], $ = g[1], Y = g[2], S = g[3], X = g[4], w = Ho(c.angle, S, X), C = w[0], f = w[1], h = w[2], I = w[3], H = w[4], m = document.createElement("canvas"), m.width = S, m.height = X, F = m.getContext("2d"), L = F.createLinearGradient(f, I, h, H), Hn(c.stops, C).forEach(function(D) {
                        return L.addColorStop(D.stop, AA(D.color));
                      }), F.fillStyle = L, F.fillRect(0, 0, S, X), S > 0 && X > 0 && (K = a.ctx.createPattern(m, "repeat"), a.renderRepeat(x, K, $, Y))) : Ko(c) && (y = sr(t, r, [
                        null,
                        null,
                        null
                      ]), x = y[0], G = y[1], P = y[2], S = y[3], X = y[4], QA = c.position.length === 0 ? [Or] : c.position, $ = k(QA[0], S), Y = k(QA[QA.length - 1], X), wA = mo(c, $, Y, S, X), BA = wA[0], uA = wA[1], BA > 0 && uA > 0 && (fA = a.ctx.createRadialGradient(G + $, P + Y, 0, G + $, P + Y, BA), Hn(c.stops, BA * 2).forEach(function(D) {
                        return fA.addColorStop(D.stop, AA(D.color));
                      }), a.path(x), a.ctx.fillStyle = fA, BA !== uA ? (CA = t.bounds.left + 0.5 * t.bounds.width, oA = t.bounds.top + 0.5 * t.bounds.height, UA = uA / BA, cA = 1 / UA, a.ctx.save(), a.ctx.translate(CA, oA), a.ctx.transform(1, 0, 0, UA, 0, 0), a.ctx.translate(-CA, -oA), a.ctx.fillRect(G, cA * (P - oA) + oA, S, X * cA), a.ctx.restore()) : a.ctx.fill())), EA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, a = this, s = 0, B = t.styles.backgroundImage.slice(0).reverse(), o.label = 1;
            case 1:
              return s < B.length ? (i = B[s], [5, n(i)]) : [3, 4];
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
      return iA(this, void 0, void 0, function() {
        return aA(this, function(a) {
          return this.path(ea(n, r)), this.ctx.fillStyle = AA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, n, a) {
      return iA(this, void 0, void 0, function() {
        var s, B;
        return aA(this, function(i) {
          switch (i.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, a)] : [3, 2];
            case 1:
              return i.sent(), [
                2
                /*return*/
              ];
            case 2:
              return s = Du(a, n), this.path(s), this.ctx.fillStyle = AA(t), this.ctx.fill(), B = Tu(a, n), this.path(B), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return iA(this, void 0, void 0, function() {
        var r, n, a, s, B, i, o, c, l = this;
        return aA(this, function(u) {
          switch (u.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !kA(r.backgroundColor) || r.backgroundImage.length, a = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], s = Xu(ne(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), kA(r.backgroundColor) || (this.ctx.fillStyle = AA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(Q) {
                l.ctx.save();
                var g = Et(t.curves), w = Q.inset ? 0 : ku, C = Lu(g, -w + (Q.inset ? 1 : -1) * Q.spread.number, (Q.inset ? 1 : -1) * Q.spread.number, Q.spread.number * (Q.inset ? -2 : 2), Q.spread.number * (Q.inset ? -2 : 2));
                Q.inset ? (l.path(g), l.ctx.clip(), l.mask(C)) : (l.mask(g), l.ctx.clip(), l.path(C)), l.ctx.shadowOffsetX = Q.offsetX.number + w, l.ctx.shadowOffsetY = Q.offsetY.number, l.ctx.shadowColor = AA(Q.color), l.ctx.shadowBlur = Q.blur.number, l.ctx.fillStyle = Q.inset ? AA(Q.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
              }), u.label = 2;
            case 2:
              B = 0, i = 0, o = a, u.label = 3;
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
    }, A.prototype.renderDashedDottedBorder = function(t, r, n, a, s) {
      return iA(this, void 0, void 0, function() {
        var B, i, o, c, l, u, Q, g, w, C, f, h, I, H, m, F, m, F;
        return aA(this, function(L) {
          return this.ctx.save(), B = Su(a, n), i = ea(a, n), s === 2 && (this.path(i), this.ctx.clip()), hA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), hA(i[1]) ? (l = i[1].end.x, u = i[1].end.y) : (l = i[1].x, u = i[1].y), n === 0 || n === 2 ? Q = Math.abs(o - l) : Q = Math.abs(c - u), this.ctx.beginPath(), s === 3 ? this.formatPath(B) : this.formatPath(i.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, s === 3 && (g = r, w = r), C = !0, Q <= g * 2 ? C = !1 : Q <= g * 2 + w ? (f = Q / (2 * g + w), g *= f, w *= f) : (h = Math.floor((Q + w) / (g + w)), I = (Q - h * g) / (h - 1), H = (Q - (h + 1) * g) / h, w = H <= 0 || Math.abs(w - I) < Math.abs(w - H) ? I : H), C && (s === 3 ? this.ctx.setLineDash([0, g + w]) : this.ctx.setLineDash([g, w])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = AA(t), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (hA(i[0]) && (m = i[3], F = i[0], this.ctx.beginPath(), this.formatPath([new p(m.end.x, m.end.y), new p(F.start.x, F.start.y)]), this.ctx.stroke()), hA(i[1]) && (m = i[1], F = i[2], this.ctx.beginPath(), this.formatPath([new p(m.end.x, m.end.y), new p(F.start.x, F.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return iA(this, void 0, void 0, function() {
        var r;
        return aA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = AA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = xu(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Cs)
), Pu = function(e) {
  return e instanceof As || e instanceof $a ? !0 : e instanceof Vr && e.type !== ht && e.type !== Ft;
}, Xu = function(e, A) {
  switch (e) {
    case 0:
      return Et(A);
    case 2:
      return vu(A);
    case 1:
    default:
      return Ht(A);
  }
}, Ju = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, Wu = ["-apple-system", "system-ui"], Yu = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return Wu.indexOf(A) === -1;
  }) : e;
}, Zu = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return A.prototype.render = function(t) {
      return iA(this, void 0, void 0, function() {
        var r, n;
        return aA(this, function(a) {
          switch (a.label) {
            case 0:
              return r = vr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, ju(r)];
            case 1:
              return n = a.sent(), this.options.backgroundColor && (this.ctx.fillStyle = AA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(Cs)
), ju = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, zu = (
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
), qu = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new zu({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new Uu(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), $u = function(e, A) {
  return A === void 0 && (A = {}), Ag(e, A);
};
typeof window < "u" && ls.setContext(window);
var Ag = function(e, A) {
  return iA(void 0, void 0, void 0, function() {
    var t, r, n, a, s, B, i, o, c, l, u, Q, g, w, C, f, h, I, H, m, L, F, L, K, y, x, G, P, S, X, QA, $, Y, wA, BA, uA, fA, CA, oA, UA;
    return aA(this, function(cA) {
      switch (cA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (K = A.allowTaint) !== null && K !== void 0 ? K : !1,
            imageTimeout: (y = A.imageTimeout) !== null && y !== void 0 ? y : 15e3,
            proxy: A.proxy,
            useCORS: (x = A.useCORS) !== null && x !== void 0 ? x : !1
          }, a = lr({ logging: (G = A.logging) !== null && G !== void 0 ? G : !0, cache: A.cache }, n), s = {
            windowWidth: (P = A.windowWidth) !== null && P !== void 0 ? P : r.innerWidth,
            windowHeight: (S = A.windowHeight) !== null && S !== void 0 ? S : r.innerHeight,
            scrollX: (X = A.scrollX) !== null && X !== void 0 ? X : r.pageXOffset,
            scrollY: (QA = A.scrollY) !== null && QA !== void 0 ? QA : r.pageYOffset
          }, B = new TA(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight), i = new qu(a, B), o = ($ = A.foreignObjectRendering) !== null && $ !== void 0 ? $ : !1, c = {
            allowTaint: (Y = A.allowTaint) !== null && Y !== void 0 ? Y : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + B.width + "x" + B.height + " scrolled to " + -B.left + "," + -B.top), l = new qn(i, e, c), u = l.clonedReferenceElement, u ? [4, l.toIFrame(t, B)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return Q = cA.sent(), g = kr(u) || eu(u) ? KB(u.ownerDocument) : vt(i, u), w = g.width, C = g.height, f = g.left, h = g.top, I = eg(i, u, A.backgroundColor), H = {
            canvas: A.canvas,
            backgroundColor: I,
            scale: (BA = (wA = A.scale) !== null && wA !== void 0 ? wA : r.devicePixelRatio) !== null && BA !== void 0 ? BA : 1,
            x: ((uA = A.x) !== null && uA !== void 0 ? uA : 0) + f,
            y: ((fA = A.y) !== null && fA !== void 0 ? fA : 0) + h,
            width: (CA = A.width) !== null && CA !== void 0 ? CA : Math.ceil(w),
            height: (oA = A.height) !== null && oA !== void 0 ? oA : Math.ceil(C)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), L = new Zu(i, H), [4, L.render(u)]) : [3, 3];
        case 2:
          return m = cA.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + f + "," + h + " with size " + w + "x" + C + " using computed rendering"), i.logger.debug("Starting DOM parsing"), F = rs(i, u), I === F.styles.backgroundColor && (F.styles.backgroundColor = DA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + H.x + "," + H.y + " with size " + H.width + "x" + H.height), L = new _u(i, H), [4, L.render(F)];
        case 4:
          m = cA.sent(), cA.label = 5;
        case 5:
          return (!((UA = A.removeContainer) !== null && UA !== void 0) || UA) && (qn.destroy(Q) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, m];
      }
    });
  });
}, eg = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? Ie(e, getComputedStyle(r.documentElement).backgroundColor) : DA.TRANSPARENT, a = r.body ? Ie(e, getComputedStyle(r.body).backgroundColor) : DA.TRANSPARENT, s = typeof t == "string" ? Ie(e, t) : t === null ? DA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? kA(n) ? kA(a) ? s : a : n : s;
};
const gt = {
  pdf: "Download PDF",
  image: "Download Image",
  csv: "Download Data (CSV)",
  link: "Link to Dataset"
}, tg = (e, A) => {
  const t = navigator.userAgent.match(/MSIE\s([\d.]+)/), r = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/), n = navigator.userAgent.match(/Edge/g);
  if ((t ? t[1] : r ? 11 : n ? 12 : -1) > -1) {
    const s = new Blob([e], {
      type: "image/png"
    });
    window.navigator.msSaveBlob(s, A);
  } else {
    const s = document.createElement("a");
    typeof s.download == "string" ? (s.href = e, s.download = A, s.onclick = (B) => document.body.removeChild(B.target), document.body.appendChild(s), s.click()) : window.open(e);
  }
}, Us = (e, A, t) => {
  const r = document.querySelector(`[data-download-id=${t}]`), n = (B) => {
    var i, o;
    return (i = B == null ? void 0 : B.dashboard) != null && i.title ? B.dashboard.title.replace(/\s+/g, "-").toLowerCase() + "-" + a.getDate() + a.getMonth() + a.getFullYear() : (o = B == null ? void 0 : B.general) != null && o.title ? B.general.title.replace(/\s+/g, "-").toLowerCase() + "-" + a.getDate() + a.getMonth() + a.getFullYear() : B != null && B.title ? B.title.replace(/\s+/g, "-").toLowerCase() + "-" + a.getDate() + a.getMonth() + a.getFullYear() : "no-title";
  }, a = /* @__PURE__ */ new Date(), s = n(e);
  switch (A) {
    case "image":
      $u(r, {
        ignoreElements: (B) => {
          var i;
          return ((i = B.className) == null ? void 0 : i.indexOf) && B.className.search(/download-buttons|download-links|data-table-container/) !== -1;
        }
      }).then((B) => {
        tg(B.toDataURL(), s + ".png");
      });
      return;
    case "pdf":
      console.warn("COVE: pdf downloads disabled");
      break;
    default:
      console.warn("COVE: generateMedia param 2 type must be 'image' or 'pdf'");
      break;
  }
}, rg = ({ state: e, text: A, type: t, title: r, elementToCapture: n }) => {
  const a = ["btn", "btn-primary"];
  return /* @__PURE__ */ ie.createElement(
    "button",
    {
      className: a.join(" "),
      title: r,
      onClick: () => Us(e, t, n),
      style: { lineHeight: "1.4em" }
    },
    gt[t]
  );
}, ng = ({ config: e, dashboardDataConfig: A }) => {
  var r;
  let t = A || e;
  return t.dataFileSourceType === "url" && t.dataFileName && e.table.showDownloadUrl ? /* @__PURE__ */ ie.createElement("a", { href: t.dataFileName, title: gt.link, target: "_blank" }, gt.link) : (r = e == null ? void 0 : e.table) != null && r.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ ie.createElement("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank" }, gt.link) : null;
}, ag = ({ children: e, classes: A }) => /* @__PURE__ */ ie.createElement("section", { className: A.join(" ") }, /* @__PURE__ */ ie.createElement("span", null, e)), ce = () => null;
ce.Section = ag;
ce.Link = ng;
ce.Button = rg;
ce.generateMedia = Us;
const sg = ({ rawData: e, fileName: A, headerColor: t, skipId: r }) => {
  const n = ms.unparse(e), a = new Blob([n], { type: "text/csv;charset=utf-8;" }), s = () => {
    typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(a, A);
  };
  return /* @__PURE__ */ React.createElement("a", { download: A, type: "button", onClick: s, href: URL.createObjectURL(a), "aria-label": "Download this data in a CSV file format.", className: `${t} no-border`, id: `${r}`, "data-html2canvas-ignore": !0, role: "button" }, "Download Data (CSV)");
};
function Bg(e = void 0, A) {
  return Qa(e)(A);
}
function Dr(e = void 0, A) {
  return wt(e)(A) || /* @__PURE__ */ new Date();
}
const Ng = (e) => {
  try {
    if (!e)
      throw new Error("COVE: No axis passed to isDateScale");
    return ["date", "date-time"].includes(e.type);
  } catch ({ message: A }) {
    console.warn(A);
  }
}, ig = {
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
}, ra = (e) => {
  if (typeof e != "string" || !isNaN(Number(e)))
    return e;
  const A = e.toUpperCase();
  return ["U.S. VIRGIN ISLANDS", "VI", "US VIRGIN ISLANDS", "VIRGIN ISLANDS"].includes(A) ? "U.S. VIRGIN ISLANDS" : ig[A] || e;
}, Qt = (e, A, t, r) => {
  var c, l, u;
  let n = e, a = A;
  if (r.type === "map" && (n = ra(e), a = ra(A), String(n).toLowerCase().includes("region") && String(a).toLowerCase().includes("region"))) {
    const Q = parseInt(e.match(/\d+$/)[0], 10), g = parseInt(A.match(/\d+$/)[0], 10);
    return t.asc ? Number(Q) - Number(g) : Number(g) - Number(Q);
  }
  n = n === !1 || n === !0 || n === null ? "" : n, a = a === !1 || a === !0 || a === null ? "" : a;
  const s = String(n).trim(), B = String(a).trim();
  if (((c = r.xAxis) == null ? void 0 : c.dataKey) === t.column && ["date", "date-time"].includes(r.xAxis.type)) {
    const Q = (l = Dr(r.xAxis.dateParseFormat, s)) == null ? void 0 : l.getTime(), g = (u = Dr(r.xAxis.dateParseFormat, B)) == null ? void 0 : u.getTime();
    return t.asc ? Q - g : g - Q;
  }
  const i = !isNaN(Number(n)) && n !== void 0 && n !== null && s !== "", o = !isNaN(Number(a)) && a !== void 0 && a !== null && B !== "";
  return s === "" && B !== "" ? t.asc ? -1 : 1 : s !== "" && B === "" ? t.asc ? 1 : -1 : i && o ? t.asc ? Number(n) - Number(a) : Number(a) - Number(n) : i ? t.asc ? -1 : 1 : o ? t.asc ? 1 : -1 : t.asc ? s.localeCompare(B) : B.localeCompare(s);
}, na = (e) => {
  let A = "", t = Math.abs(e);
  return t >= 1e9 ? (A = "B", e = e / 1e9) : t >= 1e6 ? (A = "M", e = e / 1e6) : t >= 1e3 && (A = "K", e = e / 1e3), e + A;
}, Br = (e, A, t = !1, r = null, n = null) => {
  if (r || console.error("no config found in formatNumber"), isNaN(e) || !e)
    return e;
  const a = e < 0;
  a && (e = Math.abs(e));
  let {
    dataFormat: {
      abbreviated: s,
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
      suffix: I
    }
  } = r;
  const { addColCommas: H, addColRoundTo: m, addColPrefix: F, addColSuffix: L } = n || {};
  String(e).indexOf(",") !== -1 && (e = e.replaceAll(",", ""));
  let K = e, y;
  if (A === "left") {
    let G;
    m !== void 0 ? G = m ? Number(m) : 0 : G = h ? Number(h) : 0, G < 0 && (G = 0);
    let P;
    H !== void 0 ? P = !!H : P = !!r.dataFormat.commas, y = {
      useGrouping: P,
      minimumFractionDigits: G,
      maximumFractionDigits: G
    };
  }
  if (A === "right" && (y = {
    useGrouping: !!r.dataFormat.rightCommas,
    minimumFractionDigits: C ? Number(C) : 0,
    maximumFractionDigits: C ? Number(C) : 0
  }), A === "bottom" && (y = {
    useGrouping: !!r.dataFormat.bottomCommas,
    minimumFractionDigits: o ? Number(o) : 0,
    maximumFractionDigits: o ? Number(o) : 0
  }), e = Xr(e), isNaN(e))
    return r.runtime.editorErrorMessage = `Unable to parse number from data ${K}. Try reviewing your data and selections in the Data Series section.`, K;
  if (!r.dataFormat)
    return e;
  if (r.dataCutoff) {
    let G = Xr(r.dataCutoff);
    e < G && (e = G);
  }
  A === "left" && u && s && t || A === "bottom" && u && s && t ? e = e : e = e.toLocaleString("en-US", y);
  let x = "";
  return s && A === "left" && t && (e = na(parseFloat(e))), B && A === "bottom" && t && (e = na(parseFloat(e))), Q || (F !== void 0 && A === "left" ? x = F + x : g && A === "left" && (x = g + x), w && A === "right" && (x += w), i && A === "bottom" && (x += i)), x += e, Q || (L !== void 0 && A === "left" ? x += L : I && A === "left" && (x += I), f && A === "right" && (x += f), c && A === "bottom" && (x += c)), a && (x = "-" + x), String(x);
}, og = (e, A) => {
  let t = {};
  const { columns: r } = A;
  return r && Object.keys(r).forEach((n) => {
    const a = r[n];
    a.name === e && (t = {
      addColPrefix: a.prefix,
      addColSuffix: a.suffix,
      addColRoundTo: a.roundToPlace ? a.roundToPlace : "",
      addColCommas: a.commas
    });
  }), t;
}, ae = (e, A, t, r) => {
  var i, o, c, l, u;
  if (t.visualizationType === "Sankey" || (i = r == null ? void 0 : r[0]) != null && i.tableData)
    return r[e][A];
  const n = r[e];
  let a;
  const s = n[A];
  if (A === ((o = t.xAxis) == null ? void 0 : o.dataKey)) {
    const { type: Q, dateDisplayFormat: g, dateParseFormat: w } = t.xAxis || {}, C = ((c = t.table) == null ? void 0 : c.dateDisplayFormat) || g;
    Q === "date" || Q === "date-time" ? a = Bg(C, Dr(w, s)) : Q === "continuous" ? a = Br(r[e][A], "bottom", !1, t) : a = s;
  } else {
    let Q = "left", g = t.series ? t.series.filter((f) => (f == null ? void 0 : f.axis) === "Left") : [], w = t.series ? t.series.filter((f) => (f == null ? void 0 : f.axis) === "Right") : [];
    g.map((f) => {
      f.dataKey === A && (Q = "left");
    }), w.map((f) => {
      f.dataKey === A && (Q = "right");
    });
    let C = og(A, t);
    C ? a = t.dataFormat ? Br(r[e][A], Q, !1, t, C) : r[e][A] : a = t.dataFormat ? Br(r[e][A], Q, !1, t) : r[e][A];
  }
  return (l = t.preliminaryData) == null || l.forEach((Q) => {
    var I, H, m, F;
    const g = String(Q.value) === String(s), w = !Q.column || Q.column === A, C = (H = (I = t.runtime) == null ? void 0 : I.barSeriesKeys) == null ? void 0 : H.includes(A), f = (F = (m = t.runtime) == null ? void 0 : m.lineSeriesKeys) == null ? void 0 : F.includes(A), h = t.general.showSuppressedSymbol;
    if (g && w && Q.displayTable && Q.type === "suppression" && t.visualizationSubType !== "stacked")
      switch (t.visualizationType) {
        case "Combo":
          a = C && h ? Q.iconCode : f && h ? Q.lineCode : "";
          break;
        case "Bar":
          a = h ? Q.iconCode : "";
          break;
        case "Line":
          a = h ? Q.lineCode : "";
          break;
      }
  }), ((u = t.general) == null ? void 0 : u.showMissingDataLabel) && (!s || s === "null") ? "N/A" : a;
}, cg = (e, A) => {
  const r = Object.values(A.columns || {}).find((n) => n.name === e);
  return r != null && r.label ? r.label : e;
}, Fs = (e, A) => {
  var a, s, B;
  const t = (a = A.series) == null ? void 0 : a.find((i) => i.dataKey === e);
  if (t != null && t.name)
    return t.name;
  if (A.runtimeSeriesLabels && A.runtimeSeriesLabels[e])
    return A.runtimeSeriesLabels[e];
  const r = e === ((s = A.xAxis) == null ? void 0 : s.dataKey), n = (B = A.table) == null ? void 0 : B.indexLabel;
  return r && n ? n : cg(e, A);
}, hs = (e, A, t) => {
  var i, o, c, l, u, Q, g, w;
  if (e.visualizationType === "Sankey")
    return Object.keys((o = (i = e == null ? void 0 : e.data) == null ? void 0 : i[0]) == null ? void 0 : o.tableData[0]);
  const r = ZA.cloneDeep(e.columns) || {}, n = Object.values(r).filter((C) => C.dataTable === !1).map((C) => C.name);
  let a = [];
  e.visualizationType !== "Pie" ? (a = A ? [(c = e.xAxis) == null ? void 0 : c.dataKey] : [], (l = e.runtime) != null && l.series ? (u = e.runtime) == null || u.series.forEach((C) => {
    a.push(C.dataKey);
  }) : t && t.length > 0 && (a = Object.keys(t[0]))) : a = A ? [(Q = e.xAxis) == null ? void 0 : Q.dataKey, (g = e.yAxis) == null ? void 0 : g.dataKey] : [(w = e.yAxis) == null ? void 0 : w.dataKey];
  const s = Object.keys(t[0] || {});
  Object.values(r).forEach(function(C) {
    var I;
    if (!C.name)
      return;
    const f = a.includes(C.name), h = s.includes(C.name);
    C.name !== ((I = e.xAxis) == null ? void 0 : I.dataKey) && C.dataTable === !0 && !f && h && a.push(C.name);
  });
  const B = Object.values(r).reduce((C, f) => (f.order !== void 0 && (C[f.name] = f.order - 1), C), {});
  return a = a.filter((C) => !n.includes(C)), a.forEach((C, f) => {
    B[C] === void 0 && (Object.values(B).includes(f) ? B[C] = f + 1 : B[C] = f);
  }), a.sort((C, f) => C === "pivotColumn" ? -1 : f === "pivotColumn" ? 1 : B[C] - B[f]), a;
}, ds = (e) => {
  const A = e.as;
  return /* @__PURE__ */ React.createElement(A, { className: "cdcdataviz-sr-only" }, e.children);
};
const lg = ({ active: e }) => /* @__PURE__ */ React.createElement("svg", { className: "up" + (e ? " active" : ""), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ React.createElement("path", { d: "M0 5l5-5 5 5z" })), ug = ({ active: e }) => /* @__PURE__ */ React.createElement("svg", { className: "down" + (e ? " active" : ""), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ React.createElement("path", { d: "M0 0l5 5 5-5z" })), Tr = ({ ascending: e }) => /* @__PURE__ */ React.createElement("span", { role: "button", className: "sort-icon" }, /* @__PURE__ */ React.createElement(lg, { active: e === !0 }), /* @__PURE__ */ React.createElement(ug, { active: e === !1 })), Sr = (e, A, t) => {
  let r, n = A;
  const a = e.asc === !0, s = e.asc === !1, B = e.asc === void 0;
  return e.column === void 0 || e.column !== A ? r = !0 : (s && (n = void 0, r = void 0), B && (r = !0), a && (r = !1)), { column: n, asc: r, colIndex: t };
}, gg = ({
  data: e,
  isVertical: A,
  config: t,
  setSortBy: r,
  sortBy: n,
  hasRowType: a,
  viewport: s,
  rightAlignedCols: B
}) => {
  var u;
  const i = (u = t.table) == null ? void 0 : u.groupBy;
  if (!e)
    return;
  let o = hs(t, A, e);
  if (i) {
    let Q = o.filter((g) => g !== i);
    Q.length != o.length && (o = Q);
  }
  const c = ({ text: Q, config: g, sortBy: w }) => {
    const C = "Not Applicable";
    let f = `${Q} `;
    if ((Q !== "__series__" || Q !== "") && (f = `${Q} `), (Q === "__series__" || Q === "") && !g.table.indexLabel && (f = C), (Q === "__series__" || Q === "") && g.table.indexLabel && (f = g.table.indexLabel), f !== C)
      return /* @__PURE__ */ React.createElement("span", { className: "cdcdataviz-sr-only" }, `Press command, modifier, or enter key to sort by ${f} in ${w.column !== f ? "ascending" : w.column === "desc" ? "descending" : "ascending"}  order`);
  }, l = ({ column: Q, text: g, config: w }) => {
    if (g === "pivotColumn")
      return "";
    let C = "Not Applicable";
    return g === "__series__" && w.table.indexLabel ? `${w.table.indexLabel} ` : g === "__series__" && !w.table.indexLabel ? /* @__PURE__ */ React.createElement(ds, { as: "span" }, C) : g;
  };
  if (A) {
    if (a) {
      const Q = /row[_-]?type/i, g = o.findIndex((w) => Q.test(w));
      g > -1 && o.splice(g, 1);
    }
    return /* @__PURE__ */ React.createElement("tr", null, o.map((Q, g) => {
      const w = Fs(Q, t), C = Sr(n, Q, g), f = n.column === Q ? n.asc : void 0, h = Q === n.column && !a;
      return /* @__PURE__ */ React.createElement(
        "th",
        {
          style: {
            minWidth: (t.table.cellMinWidth || 0) + "px",
            textAlign: B && B[g] ? "right" : "",
            paddingRight: h ? "1.3em" : ""
          },
          key: `col-header-${Q}__${g}`,
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            a || r(C);
          },
          onKeyDown: (I) => {
            a || I.keyCode === 13 && r(C);
          },
          ...n.column === Q ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        /* @__PURE__ */ React.createElement(l, { text: w, column: Q, config: t }),
        h && /* @__PURE__ */ React.createElement(Tr, { ascending: f }),
        /* @__PURE__ */ React.createElement(c, { sortBy: n, config: t, text: w })
      );
    }));
  } else {
    const Q = t.visualizationType === "Pie" ? 1 : 0;
    return /* @__PURE__ */ React.createElement("tr", null, ["__series__", ...Object.keys(e)].slice(Q).map((g, w) => {
      var m;
      let C = (m = t.xAxis) == null ? void 0 : m.dataKey, f = g !== "__series__" ? ae(g, C, t, e) : "__series__";
      const h = Sr(n, C, w), I = n.colIndex === w ? n.asc : void 0, H = w === n.colIndex && !a;
      return /* @__PURE__ */ React.createElement(
        "th",
        {
          style: {
            minWidth: (t.table.cellMinWidth || 0) + "px",
            textAlign: B && B[w] ? "right" : "",
            paddingRight: H ? "1.3em" : ""
          },
          key: `col-header-${f}__${w}`,
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            r(h);
          },
          onKeyDown: (F) => {
            F.keyCode === 13 && r(h);
          },
          ...n.column === f ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        /* @__PURE__ */ React.createElement(l, { text: f, column: C, config: t }),
        H && /* @__PURE__ */ React.createElement(Tr, { ascending: I }),
        /* @__PURE__ */ React.createElement(c, { text: f, config: t, sortBy: n })
      );
    }));
  }
}, Qg = ({ categories: e }) => {
  let A = ["Measures", ...e];
  return /* @__PURE__ */ React.createElement("tr", null, A.map((t) => /* @__PURE__ */ React.createElement("th", { key: `col-header-${t}`, tabIndex: 0, title: t, role: "columnheader", scope: "col" }, t)));
}, wg = ({ text: e, config: A }) => {
  let t = "Not Applicable";
  return e === "__series__" && A.table.indexLabel ? `${A.table.indexLabel} ` : e === "__series__" && !A.table.indexLabel ? /* @__PURE__ */ React.createElement(ds, { as: "span" }, t) : e;
}, fg = ({ columns: e, config: A, indexTitle: t, sortBy: r, setSortBy: n, rightAlignedCols: a }) => /* @__PURE__ */ React.createElement("tr", null, Object.keys(e).filter((s) => e[s].dataTable === !0 && e[s].name).map((s, B) => {
  var l;
  let i;
  s && s !== "geo" ? i = e[s].label ? e[s].label : e[s].name : i = A.type === "map" ? t : (l = A.xAxis) == null ? void 0 : l.dataKey, A.type === "map" && (i === void 0 || i === "") && (i = "Location");
  const o = Sr(r, s, B), c = r.column === s ? r.asc : void 0;
  return /* @__PURE__ */ React.createElement(
    "th",
    {
      style: {
        textAlign: a && a[B] ? "right" : "",
        paddingRight: "1.3em"
      },
      key: `col-header-${s}__${B}`,
      id: s,
      tabIndex: 0,
      role: "columnheader",
      scope: "col",
      onClick: () => {
        n(o);
      },
      onKeyDown: (u) => {
        u.keyCode === 13 && n(o);
      },
      className: r.column === s ? r.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
      ...r.column === s ? r.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
    },
    /* @__PURE__ */ React.createElement(wg, { text: i, config: A, column: s }),
    /* @__PURE__ */ React.createElement(Tr, { ascending: c }),
    /* @__PURE__ */ React.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${i} in ${r.column === s && r.asc ? "ascending" : "descending"} order`)
  );
})), aa = ({ expanded: e, setExpanded: A, tableTitle: t, fontSize: r, viewport: n }) => /* @__PURE__ */ React.createElement(
  "div",
  {
    role: "button",
    className: e ? "data-table-heading p-3" : "collapsed data-table-heading p-3",
    onClick: () => {
      A(!e);
    },
    tabIndex: 0,
    onKeyDown: (a) => {
      a.keyCode === 13 && A(!e);
    }
  },
  /* @__PURE__ */ React.createElement(ys, { display: e ? "minus" : "plus", base: !0 }),
  t
), ps = (e) => {
  const { fill: A, borderColor: t, display: r = "inline-block", shape: n = "circle" } = e, a = { width: "1em", height: "1em" }, s = ["circle", "square"].includes(n), B = {
    borderRadius: n === "circle" ? "50%" : "0px",
    verticalAlign: "middle",
    display: r,
    height: a.height,
    width: a.width,
    border: t ? `${t} 1px solid` : "rgba(0,0,0,.3) 1px solid",
    backgroundColor: A
  };
  return /* @__PURE__ */ ie.createElement("span", { className: `legend-item ${s ? "me-2" : ""}`, style: B });
}, Cg = (e) => /* @__PURE__ */ IA.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ IA.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" }));
function Ug(e) {
  const A = ["cdc.gov", "localhost", "facebook.com", "twitter.com", "linkedin.com", "pinterest.com", "youtube.com", "youtube-nocookie.com", "plus.google.com", "instagram.com", "flickr.com", "tumblr.com", "cdc.sharepoint.com", "vaccines.gov", "vacunas.gov"], t = new URL(e, window.location.origin).hostname;
  let r = !0;
  return A.forEach((n) => {
    t.indexOf(n) !== -1 && t.indexOf(n) === t.length - n.length && (r = !1);
  }), r;
}
const Fg = ({ markup: e, row: A, columns: t, navigationHandler: r, mapZoomHandler: n }) => t.navigate && A[t.navigate.name] ? /* @__PURE__ */ React.createElement(
  "span",
  {
    onClick: () => r(A[t.navigate.name]),
    className: "table-link",
    title: "Click for more information (Opens in a new window)",
    role: "link",
    tabIndex: 0,
    onKeyDown: (a) => {
      a.keyCode === 13 && r(A[t.navigate.name]);
    }
  },
  e,
  Ug(A[t.navigate.name]) && /* @__PURE__ */ React.createElement(Cg, { className: "inline-icon" })
) : n ? /* @__PURE__ */ React.createElement(
  "span",
  {
    onClick: n,
    className: "table-link",
    title: "Click to view on map",
    role: "link",
    tabIndex: 0,
    onKeyDown: (a) => {
      a.keyCode === 13 && n();
    }
  },
  e
) : /* @__PURE__ */ React.createElement(React.Fragment, null, e), hg = (e, A, t) => {
  var a;
  if (!t)
    return e;
  if (e === null || e === "" || e === void 0)
    return "";
  if (typeof e == "string" && e.length > 0 && /[a-zA-Z]/.test(e) && ((a = t == null ? void 0 : t.legend) == null ? void 0 : a.type) === "equalnumber")
    return e;
  let r = e, n = t.columns[A];
  if (n === void 0 && (n = t.columns.primary, n.useCommas = n.commas, n.roundToPlace = n.roundTo ? n.roundTo : ""), n) {
    if (Number(e)) {
      const s = n.roundToPlace && (n.roundToPlace !== "" || n.roundToPlace !== null), B = n.roundToPlace ? Number(n.roundToPlace) : 0;
      n.hasOwnProperty("roundToPlace") && s && (r = Number(e).toFixed(B)), n.hasOwnProperty("useCommas") && n.useCommas === !0 && (r = Number(e).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: s ? B : 0,
        maximumFractionDigits: s ? B : 5
      }));
    }
    t.legend.specialClasses.includes(String(e)) === !1 && (r = (n.prefix || "") + r + (n.suffix || ""));
  }
  return r;
}, dg = ({
  rows: e,
  columns: A,
  runtimeData: t,
  config: r,
  applyLegendToRow: n,
  displayGeoName: a,
  formatLegendLocation: s,
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
        g = a(o), g = String(g).startsWith("region") ? C(g) : g;
      } else
        g = s(o);
      l = /* @__PURE__ */ React.createElement("div", { className: "col-12" }, /* @__PURE__ */ React.createElement(ps, { fill: Q[0] }), /* @__PURE__ */ React.createElement(
        Fg,
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
      }), l = hg(u || t[o][Q], c, r);
    }
    return l;
  })
), pg = (e) => {
  const A = Object.keys(e).find((t) => t.match(/row[_-]?type/i));
  return e[A];
}, Eg = ({
  rows: e,
  runtimeData: A,
  config: t,
  isVertical: r,
  sortBy: n,
  colorScale: a,
  hasRowType: s
}) => {
  var c;
  const B = (c = t.table) == null ? void 0 : c.groupBy, i = hs(t, r, A), o = () => !n && n.colIndex === null ? i : i.sort((l, u) => {
    if (n.column === "__series__")
      return Qt(l, u, n, t);
    let Q = A.find((w) => {
      var C;
      return w[(C = t.xAxis) == null ? void 0 : C.dataKey] === n.column;
    });
    const g = A[n.colIndex - 1];
    if (Q)
      return Qt(Q[l], Q[u], n, t);
    if (Q === void 0 && g)
      return Qt(g[l], g[u], n, t);
  });
  if (r)
    if (B) {
      const l = /* @__PURE__ */ new Map();
      return e.forEach((u) => {
        let Q, g = [];
        if (i.forEach((w, C) => {
          B === w ? Q = ae(u, w, t, A) : g.push(ae(u, w, t, A));
        }), !l.has(Q))
          l.set(Q, [g]);
        else {
          const w = l.get(Q);
          l.set(Q, [...w, g]);
        }
      }), l;
    } else
      return e.map((l) => {
        if (s) {
          const u = pg(A[l]), Q = i.map((g) => ae(l, g, t, A));
          return [u, ...Q];
        } else
          return i.map((u, Q) => ae(l, u, t, A));
      });
  else
    return o().map((l) => {
      const u = Fs(l, t);
      return (t.visualizationType !== "Pie" ? [
        /* @__PURE__ */ React.createElement(React.Fragment, null, a && a(u) && /* @__PURE__ */ React.createElement(ps, { fill: a(u) }), u)
      ] : []).concat(e.map((g, w) => ae(g, l, t, A)));
    });
}, Hg = ({ config: e }) => e.regions.map((A) => e.visualizationType === "Box Plot" ? [] : !Object.keys(A).includes("from") || !Object.keys(A).includes("to") ? [] : [A.label, A.from, A.to]), mg = ({ rows: e, config: A }) => {
  const t = (s) => {
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
    }[s];
  };
  let r = (s, B) => Number(s) === 0 ? B.columnMax : Number(s) === 1 ? B.columnThirdQuartile : Number(s) === 2 ? B.columnMedian : Number(s) === 3 ? B.columnFirstQuartile : Number(s) === 4 ? B.columnMin : Number(s) === 5 ? B.columnCount : Number(s) === 6 ? B.columnSd : Number(s) === 7 ? B.columnMean : Number(s) === 8 ? B.columnIqr : Number(s) === 9 ? B.values.length > 0 ? B.values.toString() : "-" : Number(s) === 10 ? B.columnLowerBounds : Number(s) === 11 ? B.columnUpperBounds : Number(s) === 12 ? B.columnOutliers.length > 0 ? B.columnOutliers.toString() : "-" : Number(s) === 13 ? B.columnNonOutliers.length > 0 ? B.columnNonOutliers.toString() : "-" : /* @__PURE__ */ React.createElement("p", null, "-"), n = e.map((s) => s[0]), a = ["Measures", ...A.boxplot.categories];
  return n.shift(), n.map((s, B) => a.map((i, o) => {
    let c;
    if (i === "Measures") {
      let l = t(s);
      c = /* @__PURE__ */ React.createElement(React.Fragment, null, l);
    } else
      c = r(B, A.boxplot.plots[o - 1]);
    return c;
  }));
}, vg = (e) => {
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
}, sa = (e, A) => A.map((t) => e[t] || "").join(":"), Ig = (e, A, t) => {
  const r = [A, ...t];
  return ZA.uniq(e.flatMap((n) => Object.keys(n))).filter((n) => !r.includes(n));
}, yg = (e, A, t) => {
  const r = Ig(e, A, t), n = {}, a = e.reduce((s, B) => {
    const i = sa(B, r);
    return s[i] || (s[i] = {}), s;
  }, {});
  return e.forEach((s) => {
    const B = sa(s, r);
    if (t.length > 1)
      t.forEach((i) => {
        const o = ZA.omit(s, [A, ...t]);
        a[B][i] = {
          ...a[B][i],
          ...o,
          [s[A]]: s[i]
        };
      });
    else {
      const i = t[0], o = ZA.omit(s, [A, ...t]);
      a[B] = {
        ...a[B],
        ...o,
        [s[A]]: s[i]
      };
    }
    n[s[A]] = "";
  }), t.length > 1 ? Object.keys(a).flatMap((s) => Object.keys(a[s]).map((B) => ({
    pivotColumn: B,
    ...a[s][B]
  }))) : Object.values(a).map((s) => ({ ...n, ...s }));
}, Ba = [
  ["*", "Asterisk"],
  ["†", "Dagger"],
  ["§", "Section Symbol"],
  ["¶", "Paragraph Symbol"]
], Es = Ba.concat(Ba.map(([e, A]) => [e + e, "Double " + A])), Gg = ZA.fromPairs(ZA.map(Es, ([e, A]) => [A, e])), bg = ["N/A", "NA", ""].concat(Es.map((e) => e[0]));
function Kg(e = "") {
  return e ? typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? bg.includes(e) || /^[\$\d\.\%\,\-]*$/.test(e) : !1 : !1;
}
const Vg = (e) => {
  var BA, uA, fA, CA, oA, UA, cA, EA;
  const {
    config: A,
    dataConfig: t,
    defaultSortBy: r,
    tableTitle: n,
    vizTitle: a,
    rawData: s,
    runtimeData: B,
    headerColor: i,
    expandDataTable: o,
    columns: c,
    viewport: l,
    formatLegendLocation: u,
    tabbingId: Q,
    wrapColumns: g
  } = e, w = IA.useMemo(() => {
    const D = vg(B);
    if (A.table.pivot) {
      const z = Object.values(A.columns || {}).filter((b) => b.dataTable === !1).map((b) => b.name), { columnName: d, valueColumns: v } = A.table.pivot;
      if (d && v) {
        const b = D.map((U) => ZA.omit(U, z));
        return yg(b, d, v);
      }
    }
    return D;
  }, [B, (BA = A.table.pivot) == null ? void 0 : BA.columnName, (uA = A.table.pivot) == null ? void 0 : uA.valueColumn]), [C, f] = IA.useState(o), [h, I] = IA.useState({
    column: r || "",
    asc: !1,
    colIndex: null
  }), [H, m] = IA.useState(""), F = !(A.type === "chart" && !((fA = A.table) != null && fA.showVertical)), K = `btn__${Math.random().toString(16).substr(2, 8)}`, y = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  };
  switch (IA.useEffect(() => {
    const D = "Accessible data table.", z = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    C === !0 && H !== D && m(D), C === !1 && H !== z && m(z);
  }, [C]), A.visualizationType) {
    case "Box Plot":
      if (!A.boxplot)
        return /* @__PURE__ */ React.createElement(Mt, null);
      break;
    case "Line":
      if (!w)
        return /* @__PURE__ */ React.createElement(Mt, null);
      break;
    default:
      if (!w)
        return /* @__PURE__ */ React.createElement(Mt, null);
      break;
  }
  const x = Object.keys(w).filter((D) => D != "columns"), G = F && h.column ? x.sort((D, z) => {
    let d, v;
    if (A.type === "map" && A.columns) {
      const b = A.columns[h.column].name;
      d = w[D][b], v = w[z][b];
    }
    return ["chart", "dashboard", "table"].includes(A.type) && (d = w[D][h.column], v = w[z][h.column]), !d && !v && A.type === "chart" && A.xAxis && A.xAxis.type === "date-time" && (d = wt(A.runtime.xAxis.dateParseFormat)(w[D][A.xAxis.dataKey]), v = wt(A.runtime.xAxis.dateParseFormat)(w[z][A.xAxis.dataKey])), d && v ? Qt(d, v, h, A) : 0;
  }) : x, P = {
    maxHeight: A.table.limitHeight && `${A.table.height}px`,
    OverflowY: "scroll"
  }, S = !!Object.keys((s == null ? void 0 : s[0]) || {}).find((D) => D.match(/row[_-]?type/i)), X = IA.useMemo(() => {
    var D;
    return A.type === "map" ? A.table.caption ? A.table.caption : `Data table showing data for the ${y[(D = A.general) == null ? void 0 : D.geoType]} figure.` : A.table.caption ? A.table.caption : `Data table showing data for the ${A.type} figure.`;
  }, [A.table.caption]), QA = (CA = A == null ? void 0 : A.regions) == null ? void 0 : CA.every((D) => {
    const z = D.toType === "Fixed", d = D.fromType === "Fixed", v = !D.toType, b = !D.fromType;
    return z && d || v && b || z && b || d && v;
  }), $ = IA.useMemo(
    () => {
      var D, z, d, v, b, U, O, M, Z;
      return (z = (D = A.data) == null ? void 0 : D[0]) != null && z.tableData ? (v = (d = A.data) == null ? void 0 : d[0]) == null ? void 0 : v.tableData : A.visualizationType === "Sankey" ? (U = (b = A.data) == null ? void 0 : b[0]) == null ? void 0 : U.tableData : A.visualizationType === "Pie" ? [A.yAxis.dataKey] : A.visualizationType === "Box Plot" ? (M = (O = A == null ? void 0 : A.boxplot) == null ? void 0 : O.plots) != null && M[0] ? Object.entries(A.boxplot.plots[0]) : [] : (Z = A.runtime) == null ? void 0 : Z.seriesKeys;
    },
    [(oA = A.runtime) == null ? void 0 : oA.seriesKeys]
  ), Y = w.length === 0, wA = () => {
    var d, v, b;
    const D = ["data-table-container"];
    return (d = A.general) != null && d.showDownloadButton && !A.table.showDownloadLinkBelow && D.push("mt-4"), ((v = A == null ? void 0 : A.brush) == null ? void 0 : v.active) && ((b = A.legend) == null ? void 0 : b.position) !== "bottom" && D.push("brush-active"), D.push(l), D.join(" ");
  };
  if (A.visualizationType !== "Box Plot") {
    const D = () => {
      var U;
      return ((U = A.general) == null ? void 0 : U.geoType) === "us-county" ? s.map((O) => ({ FullGeoName: u(O[A.columns.geo.name]), ...O })) : s;
    }, z = (U) => {
      var M, Z, nA;
      const O = ["download-links"];
      if (U)
        O.push("mt-2");
      else {
        O.push("mt-4", "mb-2");
        const KA = ((M = A == null ? void 0 : A.legend) == null ? void 0 : M.position) === "bottom" || Hs(l);
        (Z = A.brush) != null && Z.active && !KA && O.push("brush-active"), (nA = A.brush) != null && nA.active && A.legend.hide && O.push("brush-active");
      }
      return O;
    }, d = A.type === "map" ? dg({ rows: G, wrapColumns: g, ...e, runtimeData: w, viewport: l }) : Eg({ rows: G, ...e, runtimeData: w, isVertical: F, sortBy: h, hasRowType: S, viewport: l }), v = d.length ? Object.fromEntries(
      Object.keys(d[0]).filter(
        (U) => d.filter((O) => Kg(O[U])).length === d.length
      ).map((U) => [U, !0])
    ) : {}, b = ({ belowTable: U }) => {
      var O;
      return /* @__PURE__ */ React.createElement(ce.Section, { classes: z(U) }, /* @__PURE__ */ React.createElement(ce.Link, { config: A, dashboardDataConfig: t }), (A.table.download || ((O = A.general) == null ? void 0 : O.showDownloadButton)) && /* @__PURE__ */ React.createElement(
        sg,
        {
          rawData: D(),
          fileName: `${a || "data-table"}.csv`,
          headerColor: i
        }
      ));
    };
    return /* @__PURE__ */ React.createElement(Pr, { component: "DataTable" }, ((UA = A.general) == null ? void 0 : UA.showDownloadButton) && !A.table.showDownloadLinkBelow && /* @__PURE__ */ React.createElement(b, null), /* @__PURE__ */ React.createElement("section", { id: Q.replace("#", ""), className: wA(), "aria-label": H }, /* @__PURE__ */ React.createElement(Jr, { skipId: K, skipMessage: "Skip Data Table" }), A.table.collapsible !== !1 && /* @__PURE__ */ React.createElement(aa, { expanded: C, setExpanded: f, tableTitle: n, viewport: l }), /* @__PURE__ */ React.createElement("div", { className: "table-container", style: P }, /* @__PURE__ */ React.createElement(
      Ot,
      {
        preliminaryData: A.preliminaryData,
        viewport: l,
        wrapColumns: g,
        noData: Y,
        childrenMatrix: d,
        tableName: A.type,
        caption: X,
        stickyHeader: !0,
        hasRowType: S,
        headContent: A.type === "map" ? /* @__PURE__ */ React.createElement(
          fg,
          {
            columns: c,
            ...e,
            sortBy: h,
            setSortBy: I,
            rightAlignedCols: v
          }
        ) : /* @__PURE__ */ React.createElement(
          gg,
          {
            data: w,
            ...e,
            hasRowType: S,
            isVertical: F,
            sortBy: h,
            setSortBy: I,
            viewport: l,
            rightAlignedCols: v
          }
        ),
        tableOptions: {
          className: `table table-striped ${C ? "data-table" : "data-table cdcdataviz-sr-only"}${F ? "" : " horizontal"}`,
          "aria-live": "assertive",
          "aria-rowcount": (cA = A == null ? void 0 : A.data) != null && cA.length ? A.data.length : -1,
          hidden: !C
        },
        rightAlignedCols: v
      }
    ), QA && A.regions && A.regions.length > 0 && A.visualizationType !== "Box Plot" && /* @__PURE__ */ React.createElement(
      Ot,
      {
        viewport: l,
        wrapColumns: g,
        childrenMatrix: Hg({ config: A }),
        noData: Y,
        tableName: A.visualizationType,
        caption: "Table of the highlighted regions in the visualization",
        headContent: /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Region Name"), /* @__PURE__ */ React.createElement("th", null, "Start Date"), /* @__PURE__ */ React.createElement("th", null, "End Date")),
        tableOptions: { className: "table table-striped region-table data-table" }
      }
    ))), ((EA = A.general) == null ? void 0 : EA.showDownloadButton) && A.table.showDownloadLinkBelow && /* @__PURE__ */ React.createElement(b, { belowTable: !0 }), /* @__PURE__ */ React.createElement("div", { id: K, className: "cdcdataviz-sr-only" }, "Skipped data table."));
  } else
    return /* @__PURE__ */ React.createElement(Pr, { component: "DataTable" }, /* @__PURE__ */ React.createElement("section", { id: Q.replace("#", ""), className: wA(), "aria-label": H }, /* @__PURE__ */ React.createElement(Jr, { skipId: K, skipMessage: "Skip Data Table" }), /* @__PURE__ */ React.createElement(aa, { expanded: C, setExpanded: f, tableTitle: n }), /* @__PURE__ */ React.createElement("div", { className: "table-container", style: P }, /* @__PURE__ */ React.createElement(
      Ot,
      {
        viewport: l,
        wrapColumns: g,
        childrenMatrix: mg({ rows: $, config: A }),
        noData: Y,
        tableName: A.visualizationType,
        caption: X,
        stickyHeader: !0,
        headContent: /* @__PURE__ */ React.createElement(Qg, { categories: A.boxplot.categories }),
        tableOptions: {
          className: `table table-striped ${C ? "data-table" : "data-table cdcdataviz-sr-only"}`,
          "aria-live": "assertive",
          "aria-rowcount": 11,
          hidden: !C
        }
      }
    ))), /* @__PURE__ */ React.createElement("div", { id: K, className: "cdcdataviz-sr-only" }, "Skipped data table."));
};
export {
  Vg as D,
  ps as L,
  ce as M,
  Jr as S,
  Ng as a,
  Br as b,
  Bg as c,
  hg as d,
  Gg as e,
  Es as f,
  Ug as i,
  Qa as t
};
