import { R as h, r as TA } from "./storybook-index-45401197.es.js";
import { L as St, E as _r } from "./storybook-Loading-f180d060.es.js";
import { P as ds } from "./storybook-papaparse.min-b07ddc33.es.js";
import { u as sr, a as sa, t as Br, b as Ba, c as Ke, d as ps, e as Le, f as xe, g as Es, h as De } from "./storybook-year-bedc547d.es.js";
import { n as Pr } from "./storybook-numberFromString-24623c03.es.js";
import { _ as ir } from "./storybook-lodash-c15d8e1c.es.js";
import { a as Hs } from "./storybook-Icon-736fb775.es.js";
import { T as Mt } from "./storybook-Table-12c53202.es.js";
function Ot(e) {
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
function le(e, A, t) {
  return { y: e, m: A, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function ms(e) {
  var A = e.dateTime, t = e.date, r = e.time, n = e.periods, a = e.days, s = e.shortDays, B = e.months, i = e.shortMonths, o = ue(n), c = ge(n), u = ue(a), l = ge(a), w = ue(s), g = ge(s), Q = ue(B), C = ge(B), f = ue(i), d = ge(i), m = {
    a: $,
    A: CA,
    b: iA,
    B: uA,
    c: null,
    d: zr,
    e: zr,
    f: Ws,
    g: nB,
    G: sB,
    H: Xs,
    I: Js,
    j: Ys,
    L: ia,
    m: Zs,
    M: zs,
    p: UA,
    q: FA,
    Q: $r,
    s: An,
    S: js,
    u: qs,
    U: $s,
    V: AB,
    w: eB,
    W: tB,
    x: null,
    X: null,
    y: rB,
    Y: aB,
    Z: BB,
    "%": qr
  }, y = {
    a: D,
    A: V,
    b: T,
    B: k,
    c: null,
    d: jr,
    e: jr,
    f: lB,
    g: dB,
    G: EB,
    H: iB,
    I: oB,
    j: cB,
    L: ca,
    m: uB,
    M: gB,
    p: AA,
    q: DA,
    Q: $r,
    s: An,
    S: QB,
    u: wB,
    U: fB,
    V: CB,
    w: UB,
    W: FB,
    x: null,
    X: null,
    y: hB,
    Y: pB,
    Z: HB,
    "%": qr
  }, I = {
    a: R,
    A: z,
    b: j,
    B: S,
    c: J,
    d: Wr,
    e: Wr,
    f: Vs,
    g: Yr,
    G: Jr,
    H: Zr,
    I: Zr,
    j: Os,
    L: Gs,
    m: Ms,
    M: Ns,
    p: v,
    q: Ss,
    Q: _s,
    s: Ps,
    S: Rs,
    u: Ks,
    U: Ls,
    V: xs,
    w: bs,
    W: Ds,
    x: fA,
    X: q,
    y: Yr,
    Y: Jr,
    Z: Ts,
    "%": ks
  };
  m.x = F(t, m), m.X = F(r, m), m.c = F(A, m), y.x = F(t, y), y.X = F(r, y), y.c = F(A, y);
  function F(E, L) {
    return function(M) {
      var U = [], cA = -1, _ = 0, gA = E.length, QA, PA, kr;
      for (M instanceof Date || (M = /* @__PURE__ */ new Date(+M)); ++cA < gA; )
        E.charCodeAt(cA) === 37 && (U.push(E.slice(_, cA)), (PA = Xr[QA = E.charAt(++cA)]) != null ? QA = E.charAt(++cA) : PA = QA === "e" ? " " : "0", (kr = L[QA]) && (QA = kr(M, PA)), U.push(QA), _ = cA + 1);
      return U.push(E.slice(_, cA)), U.join("");
    };
  }
  function K(E, L) {
    return function(M) {
      var U = le(1900, void 0, 1), cA = b(U, E, M += "", 0), _, gA;
      if (cA != M.length)
        return null;
      if ("Q" in U)
        return new Date(U.Q);
      if ("s" in U)
        return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (L && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53)
          return null;
        "w" in U || (U.w = 1), "Z" in U ? (_ = Nt(le(U.y, 0, 1)), gA = _.getUTCDay(), _ = gA > 4 || gA === 0 ? sr.ceil(_) : sr(_), _ = sa.offset(_, (U.V - 1) * 7), U.y = _.getUTCFullYear(), U.m = _.getUTCMonth(), U.d = _.getUTCDate() + (U.w + 6) % 7) : (_ = Ot(le(U.y, 0, 1)), gA = _.getDay(), _ = gA > 4 || gA === 0 ? Br.ceil(_) : Br(_), _ = Ba.offset(_, (U.V - 1) * 7), U.y = _.getFullYear(), U.m = _.getMonth(), U.d = _.getDate() + (U.w + 6) % 7);
      } else
        ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), gA = "Z" in U ? Nt(le(U.y, 0, 1)).getUTCDay() : Ot(le(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (gA + 5) % 7 : U.w + U.U * 7 - (gA + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Nt(U)) : Ot(U);
    };
  }
  function b(E, L, M, U) {
    for (var cA = 0, _ = L.length, gA = M.length, QA, PA; cA < _; ) {
      if (U >= gA)
        return -1;
      if (QA = L.charCodeAt(cA++), QA === 37) {
        if (QA = L.charAt(cA++), PA = I[QA in Xr ? L.charAt(cA++) : QA], !PA || (U = PA(E, M, U)) < 0)
          return -1;
      } else if (QA != M.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function v(E, L, M) {
    var U = o.exec(L.slice(M));
    return U ? (E.p = c.get(U[0].toLowerCase()), M + U[0].length) : -1;
  }
  function R(E, L, M) {
    var U = w.exec(L.slice(M));
    return U ? (E.w = g.get(U[0].toLowerCase()), M + U[0].length) : -1;
  }
  function z(E, L, M) {
    var U = u.exec(L.slice(M));
    return U ? (E.w = l.get(U[0].toLowerCase()), M + U[0].length) : -1;
  }
  function j(E, L, M) {
    var U = f.exec(L.slice(M));
    return U ? (E.m = d.get(U[0].toLowerCase()), M + U[0].length) : -1;
  }
  function S(E, L, M) {
    var U = Q.exec(L.slice(M));
    return U ? (E.m = C.get(U[0].toLowerCase()), M + U[0].length) : -1;
  }
  function J(E, L, M) {
    return b(E, A, L, M);
  }
  function fA(E, L, M) {
    return b(E, t, L, M);
  }
  function q(E, L, M) {
    return b(E, r, L, M);
  }
  function $(E) {
    return s[E.getDay()];
  }
  function CA(E) {
    return a[E.getDay()];
  }
  function iA(E) {
    return i[E.getMonth()];
  }
  function uA(E) {
    return B[E.getMonth()];
  }
  function UA(E) {
    return n[+(E.getHours() >= 12)];
  }
  function FA(E) {
    return 1 + ~~(E.getMonth() / 3);
  }
  function D(E) {
    return s[E.getUTCDay()];
  }
  function V(E) {
    return a[E.getUTCDay()];
  }
  function T(E) {
    return i[E.getUTCMonth()];
  }
  function k(E) {
    return B[E.getUTCMonth()];
  }
  function AA(E) {
    return n[+(E.getUTCHours() >= 12)];
  }
  function DA(E) {
    return 1 + ~~(E.getUTCMonth() / 3);
  }
  return {
    format: function(E) {
      var L = F(E += "", m);
      return L.toString = function() {
        return E;
      }, L;
    },
    parse: function(E) {
      var L = K(E += "", !1);
      return L.toString = function() {
        return E;
      }, L;
    },
    utcFormat: function(E) {
      var L = F(E += "", y);
      return L.toString = function() {
        return E;
      }, L;
    },
    utcParse: function(E) {
      var L = K(E += "", !0);
      return L.toString = function() {
        return E;
      }, L;
    }
  };
}
var Xr = { "-": "", _: " ", 0: "0" }, rA = /^\s*\d+/, vs = /^%/, Is = /[\\^$*+?|[\]().{}]/g;
function O(e, A, t) {
  var r = e < 0 ? "-" : "", n = (r ? -e : e) + "", a = n.length;
  return r + (a < t ? new Array(t - a + 1).join(A) + n : n);
}
function ys(e) {
  return e.replace(Is, "\\$&");
}
function ue(e) {
  return new RegExp("^(?:" + e.map(ys).join("|") + ")", "i");
}
function ge(e) {
  return new Map(e.map((A, t) => [A.toLowerCase(), t]));
}
function bs(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.w = +r[0], t + r[0].length) : -1;
}
function Ks(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.u = +r[0], t + r[0].length) : -1;
}
function Ls(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.U = +r[0], t + r[0].length) : -1;
}
function xs(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.V = +r[0], t + r[0].length) : -1;
}
function Ds(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.W = +r[0], t + r[0].length) : -1;
}
function Jr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 4));
  return r ? (e.y = +r[0], t + r[0].length) : -1;
}
function Yr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), t + r[0].length) : -1;
}
function Ts(e, A, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(A.slice(t, t + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function Ss(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function Ms(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.m = r[0] - 1, t + r[0].length) : -1;
}
function Wr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.d = +r[0], t + r[0].length) : -1;
}
function Os(e, A, t) {
  var r = rA.exec(A.slice(t, t + 3));
  return r ? (e.m = 0, e.d = +r[0], t + r[0].length) : -1;
}
function Zr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.H = +r[0], t + r[0].length) : -1;
}
function Ns(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.M = +r[0], t + r[0].length) : -1;
}
function Rs(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.S = +r[0], t + r[0].length) : -1;
}
function Gs(e, A, t) {
  var r = rA.exec(A.slice(t, t + 3));
  return r ? (e.L = +r[0], t + r[0].length) : -1;
}
function Vs(e, A, t) {
  var r = rA.exec(A.slice(t, t + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function ks(e, A, t) {
  var r = vs.exec(A.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function _s(e, A, t) {
  var r = rA.exec(A.slice(t));
  return r ? (e.Q = +r[0], t + r[0].length) : -1;
}
function Ps(e, A, t) {
  var r = rA.exec(A.slice(t));
  return r ? (e.s = +r[0], t + r[0].length) : -1;
}
function zr(e, A) {
  return O(e.getDate(), A, 2);
}
function Xs(e, A) {
  return O(e.getHours(), A, 2);
}
function Js(e, A) {
  return O(e.getHours() % 12 || 12, A, 2);
}
function Ys(e, A) {
  return O(1 + Ba.count(Ke(e), e), A, 3);
}
function ia(e, A) {
  return O(e.getMilliseconds(), A, 3);
}
function Ws(e, A) {
  return ia(e, A) + "000";
}
function Zs(e, A) {
  return O(e.getMonth() + 1, A, 2);
}
function zs(e, A) {
  return O(e.getMinutes(), A, 2);
}
function js(e, A) {
  return O(e.getSeconds(), A, 2);
}
function qs(e) {
  var A = e.getDay();
  return A === 0 ? 7 : A;
}
function $s(e, A) {
  return O(ps.count(Ke(e) - 1, e), A, 2);
}
function oa(e) {
  var A = e.getDay();
  return A >= 4 || A === 0 ? Le(e) : Le.ceil(e);
}
function AB(e, A) {
  return e = oa(e), O(Le.count(Ke(e), e) + (Ke(e).getDay() === 4), A, 2);
}
function eB(e) {
  return e.getDay();
}
function tB(e, A) {
  return O(Br.count(Ke(e) - 1, e), A, 2);
}
function rB(e, A) {
  return O(e.getFullYear() % 100, A, 2);
}
function nB(e, A) {
  return e = oa(e), O(e.getFullYear() % 100, A, 2);
}
function aB(e, A) {
  return O(e.getFullYear() % 1e4, A, 4);
}
function sB(e, A) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? Le(e) : Le.ceil(e), O(e.getFullYear() % 1e4, A, 4);
}
function BB(e) {
  var A = e.getTimezoneOffset();
  return (A > 0 ? "-" : (A *= -1, "+")) + O(A / 60 | 0, "0", 2) + O(A % 60, "0", 2);
}
function jr(e, A) {
  return O(e.getUTCDate(), A, 2);
}
function iB(e, A) {
  return O(e.getUTCHours(), A, 2);
}
function oB(e, A) {
  return O(e.getUTCHours() % 12 || 12, A, 2);
}
function cB(e, A) {
  return O(1 + sa.count(xe(e), e), A, 3);
}
function ca(e, A) {
  return O(e.getUTCMilliseconds(), A, 3);
}
function lB(e, A) {
  return ca(e, A) + "000";
}
function uB(e, A) {
  return O(e.getUTCMonth() + 1, A, 2);
}
function gB(e, A) {
  return O(e.getUTCMinutes(), A, 2);
}
function QB(e, A) {
  return O(e.getUTCSeconds(), A, 2);
}
function wB(e) {
  var A = e.getUTCDay();
  return A === 0 ? 7 : A;
}
function fB(e, A) {
  return O(Es.count(xe(e) - 1, e), A, 2);
}
function la(e) {
  var A = e.getUTCDay();
  return A >= 4 || A === 0 ? De(e) : De.ceil(e);
}
function CB(e, A) {
  return e = la(e), O(De.count(xe(e), e) + (xe(e).getUTCDay() === 4), A, 2);
}
function UB(e) {
  return e.getUTCDay();
}
function FB(e, A) {
  return O(sr.count(xe(e) - 1, e), A, 2);
}
function hB(e, A) {
  return O(e.getUTCFullYear() % 100, A, 2);
}
function dB(e, A) {
  return e = la(e), O(e.getUTCFullYear() % 100, A, 2);
}
function pB(e, A) {
  return O(e.getUTCFullYear() % 1e4, A, 4);
}
function EB(e, A) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? De(e) : De.ceil(e), O(e.getUTCFullYear() % 1e4, A, 4);
}
function HB() {
  return "+0000";
}
function qr() {
  return "%";
}
function $r(e) {
  return +e;
}
function An(e) {
  return Math.floor(+e / 1e3);
}
var zA, ua, Qt;
mB({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function mB(e) {
  return zA = ms(e), ua = zA.format, Qt = zA.parse, zA.utcFormat, zA.utcParse, zA;
}
const en = (e) => {
  let A = "", t = Math.abs(e);
  return t >= 1e9 ? (A = "B", e = e / 1e9) : t >= 1e6 ? (A = "M", e = e / 1e6) : t >= 1e3 && (A = "K", e = e / 1e3), e + A;
}, tn = (e, A, t = !1, r = null, n = null) => {
  if (r || console.error("no config found in formatNumber"), isNaN(e) || !e)
    return e;
  const a = e < 0;
  a && (e = Math.abs(e));
  let {
    dataFormat: { commas: s, abbreviated: B, roundTo: i, prefix: o, suffix: c, rightRoundTo: u, bottomRoundTo: l, rightPrefix: w, rightSuffix: g, bottomPrefix: Q, bottomSuffix: C, bottomAbbreviated: f }
  } = r;
  const { addColCommas: d, addColRoundTo: m, addColPrefix: y, addColSuffix: I } = n;
  String(e).indexOf(",") !== -1 && (e = e.replaceAll(",", ""));
  let F = e, K;
  if (A === "left") {
    let v;
    m !== void 0 ? v = m ? Number(m) : 0 : v = i ? Number(i) : 0, v < 0 && (v = 0);
    let R;
    d !== void 0 ? R = !!d : R = !!r.dataFormat.commas, K = {
      useGrouping: R,
      minimumFractionDigits: v,
      maximumFractionDigits: v
    };
  }
  if (A === "right" && (K = {
    useGrouping: !!r.dataFormat.rightCommas,
    minimumFractionDigits: u ? Number(u) : 0,
    maximumFractionDigits: u ? Number(u) : 0
  }), A === "bottom" && (K = {
    useGrouping: !!r.dataFormat.bottomCommas,
    minimumFractionDigits: l ? Number(l) : 0,
    maximumFractionDigits: l ? Number(l) : 0
  }), e = Pr(e), isNaN(e))
    return r.runtime.editorErrorMessage = `Unable to parse number from data ${F}. Try reviewing your data and selections in the Data Series section.`, F;
  if (!r.dataFormat)
    return e;
  if (r.dataCutoff) {
    let v = Pr(r.dataCutoff);
    e < v && (e = v);
  }
  A === "left" && s && B && t || A === "bottom" && s && B && t ? e = e : e = e.toLocaleString("en-US", K);
  let b = "";
  return B && A === "left" && t && (e = en(parseFloat(e))), f && A === "bottom" && t && (e = en(parseFloat(e))), y !== void 0 && A === "left" ? b = y + b : o && A === "left" && (b = o + b), w && A === "right" && (b += w), Q && A === "bottom" && (b += Q), b += e, I !== void 0 && A === "left" ? b += I : c && A === "left" && (b += c), g && A === "right" && (b += g), C && A === "bottom" && (b += C), a && (b = "-" + b), String(b);
}, Kg = (e = "medium") => ({ small: 16, medium: 18, large: 20 })[e];
function vB(e = void 0, A) {
  return ua(e)(A);
}
function or(e = void 0, A) {
  return Qt(e)(A) || /* @__PURE__ */ new Date();
}
const Lg = (e) => {
  try {
    if (!e)
      throw new Error("COVE: No axis passed to isDateScale");
    return ["date", "date-time"].includes(e.type);
  } catch ({ message: A }) {
    console.warn(A);
  }
};
function ga({ fill: e, borderColor: A, display: t = "inline-block", viewport: r }) {
  const n = ["sm", "xs", "xxs"].includes(r) ? { width: "0.7em", height: "0.7em" } : { width: "1em", height: "1em" }, a = {
    marginRight: "5px",
    borderRadius: "300px",
    verticalAlign: "middle",
    display: t,
    height: n.height || "1em",
    width: n.width || "1em",
    border: A ? `${A}  1px solid` : "rgba(0,0,0,.3) 1px solid",
    backgroundColor: e
  };
  return /* @__PURE__ */ h.createElement("span", { className: "legend-item", style: a });
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
function oA(e, A, t, r) {
  function n(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function B(c) {
      try {
        o(r.next(c));
      } catch (u) {
        s(u);
      }
    }
    function i(c) {
      try {
        o(r.throw(c));
      } catch (u) {
        s(u);
      }
    }
    function o(c) {
      c.done ? a(c.value) : n(c.value).then(B, i);
    }
    o((r = r.apply(e, A || [])).next());
  });
}
function sA(e, A) {
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
function Re(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = A.length, a; r < n; r++)
      (a || !(r in A)) && (a || (a = Array.prototype.slice.call(A, 0, r)), a[r] = A[r]);
  return e.concat(a || A);
}
var xA = (
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
), mt = function(e, A) {
  return xA.fromClientRect(e, A.getBoundingClientRect());
}, IB = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new xA(0, 0, r, n);
}, vt = function(e) {
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
}, rn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ge = 0; Ge < rn.length; Ge++)
  yB[rn.charCodeAt(Ge)] = Ge;
var nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ue = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ve = 0; Ve < nn.length; Ve++)
  Ue[nn.charCodeAt(Ve)] = Ve;
var bB = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, a, s, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    a = Ue[e.charCodeAt(r)], s = Ue[e.charCodeAt(r + 1)], B = Ue[e.charCodeAt(r + 2)], i = Ue[e.charCodeAt(r + 3)], c[n++] = a << 2 | s >> 4, c[n++] = (s & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, KB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, LB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, WA = 5, Sr = 6 + 5, Rt = 2, xB = Sr - WA, Qa = 65536 >> WA, DB = 1 << WA, Gt = DB - 1, TB = 1024 >> WA, SB = Qa + TB, MB = SB, OB = 32, NB = MB + OB, RB = 65536 >> Sr, GB = 1 << xB, VB = GB - 1, an = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, kB = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, _B = function(e, A) {
  var t = bB(e), r = Array.isArray(t) ? LB(t) : new Uint32Array(t), n = Array.isArray(t) ? KB(t) : new Uint16Array(t), a = 24, s = an(n, a / 2, r[4] / 2), B = r[5] === 2 ? an(n, (a + r[4]) / 2) : kB(r, Math.ceil((a + r[4]) / 4));
  return new PB(r[0], r[1], r[2], r[3], s, B);
}, PB = (
  /** @class */
  function() {
    function e(A, t, r, n, a, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = a, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> WA], t = (t << Rt) + (A & Gt), this.data[t];
        if (A <= 65535)
          return t = this.index[Qa + (A - 55296 >> WA)], t = (t << Rt) + (A & Gt), this.data[t];
        if (A < this.highStart)
          return t = NB - RB + (A >> Sr), t = this.index[t], t += A >> WA & VB, t = this.index[t], t = (t << Rt) + (A & Gt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), sn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", XB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ke = 0; ke < sn.length; ke++)
  XB[sn.charCodeAt(ke)] = ke;
var JB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Bn = 50, YB = 1, wa = 2, fa = 3, WB = 4, ZB = 5, on = 7, Ca = 8, cn = 9, NA = 10, ur = 11, ln = 12, gr = 13, zB = 14, Fe = 15, Qr = 16, _e = 17, Qe = 18, jB = 19, un = 20, wr = 21, we = 22, Vt = 23, jA = 24, wA = 25, he = 26, de = 27, qA = 28, qB = 29, JA = 30, $B = 31, Pe = 32, Xe = 33, fr = 34, Cr = 35, Ur = 36, Te = 37, Fr = 38, it = 39, ot = 40, kt = 41, Ua = 42, Ai = 43, ei = [9001, 65288], Fa = "!", x = "×", Je = "÷", hr = _B(JB), bA = [JA, Ur], dr = [YB, wa, fa, ZB], ha = [NA, Ca], gn = [de, he], ti = dr.concat(ha), Qn = [Fr, it, ot, fr, Cr], ri = [Fe, gr], ni = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(a, s) {
    var B = hr.get(a);
    if (B > Bn ? (n.push(!0), B -= Bn) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(a) !== -1)
      return r.push(s), t.push(Qr);
    if (B === WB || B === ur) {
      if (s === 0)
        return r.push(s), t.push(JA);
      var i = t[s - 1];
      return ti.indexOf(i) === -1 ? (r.push(r[s - 1]), t.push(i)) : (r.push(s), t.push(JA));
    }
    if (r.push(s), B === $B)
      return t.push(A === "strict" ? wr : Te);
    if (B === Ua || B === qB)
      return t.push(JA);
    if (B === Ai)
      return a >= 131072 && a <= 196605 || a >= 196608 && a <= 262141 ? t.push(Te) : t.push(JA);
    t.push(B);
  }), [r, t, n];
}, _t = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var a = t; a <= r.length; ) {
      a++;
      var s = r[a];
      if (s === A)
        return !0;
      if (s !== NA)
        break;
    }
  if (n === NA)
    for (var a = t; a > 0; ) {
      a--;
      var B = r[a];
      if (Array.isArray(e) ? e.indexOf(B) !== -1 : e === B)
        for (var i = t; i <= r.length; ) {
          i++;
          var s = r[i];
          if (s === A)
            return !0;
          if (s !== NA)
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
    return x;
  var a = r - 1;
  if (Array.isArray(n) && n[a] === !0)
    return x;
  var s = a - 1, B = a + 1, i = A[a], o = s >= 0 ? A[s] : 0, c = A[B];
  if (i === wa && c === fa)
    return x;
  if (dr.indexOf(i) !== -1)
    return Fa;
  if (dr.indexOf(c) !== -1 || ha.indexOf(c) !== -1)
    return x;
  if (wn(a, A) === Ca)
    return Je;
  if (hr.get(e[a]) === ur || (i === Pe || i === Xe) && hr.get(e[B]) === ur || i === on || c === on || i === cn || [NA, gr, Fe].indexOf(i) === -1 && c === cn || [_e, Qe, jB, jA, qA].indexOf(c) !== -1 || wn(a, A) === we || _t(Vt, we, a, A) || _t([_e, Qe], wr, a, A) || _t(ln, ln, a, A))
    return x;
  if (i === NA)
    return Je;
  if (i === Vt || c === Vt)
    return x;
  if (c === Qr || i === Qr)
    return Je;
  if ([gr, Fe, wr].indexOf(c) !== -1 || i === zB || o === Ur && ri.indexOf(i) !== -1 || i === qA && c === Ur || c === un || bA.indexOf(c) !== -1 && i === wA || bA.indexOf(i) !== -1 && c === wA || i === de && [Te, Pe, Xe].indexOf(c) !== -1 || [Te, Pe, Xe].indexOf(i) !== -1 && c === he || bA.indexOf(i) !== -1 && gn.indexOf(c) !== -1 || gn.indexOf(i) !== -1 && bA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [de, he].indexOf(i) !== -1 && (c === wA || [we, Fe].indexOf(c) !== -1 && A[B + 1] === wA) || // ( OP | HY ) × NU
  [we, Fe].indexOf(i) !== -1 && c === wA || // NU ×	(NU | SY | IS)
  i === wA && [wA, qA, jA].indexOf(c) !== -1)
    return x;
  if ([wA, qA, jA, _e, Qe].indexOf(c) !== -1)
    for (var u = a; u >= 0; ) {
      var l = A[u];
      if (l === wA)
        return x;
      if ([qA, jA].indexOf(l) !== -1)
        u--;
      else
        break;
    }
  if ([de, he].indexOf(c) !== -1)
    for (var u = [_e, Qe].indexOf(i) !== -1 ? s : a; u >= 0; ) {
      var l = A[u];
      if (l === wA)
        return x;
      if ([qA, jA].indexOf(l) !== -1)
        u--;
      else
        break;
    }
  if (Fr === i && [Fr, it, fr, Cr].indexOf(c) !== -1 || [it, fr].indexOf(i) !== -1 && [it, ot].indexOf(c) !== -1 || [ot, Cr].indexOf(i) !== -1 && c === ot || Qn.indexOf(i) !== -1 && [un, he].indexOf(c) !== -1 || Qn.indexOf(c) !== -1 && i === de || bA.indexOf(i) !== -1 && bA.indexOf(c) !== -1 || i === jA && bA.indexOf(c) !== -1 || bA.concat(wA).indexOf(i) !== -1 && c === we && ei.indexOf(e[B]) === -1 || bA.concat(wA).indexOf(c) !== -1 && i === Qe)
    return x;
  if (i === kt && c === kt) {
    for (var w = t[a], g = 1; w > 0 && (w--, A[w] === kt); )
      g++;
    if (g % 2 !== 0)
      return x;
  }
  return i === Pe && c === Xe ? x : Je;
}, si = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = ni(e, A.lineBreak), r = t[0], n = t[1], a = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(B) {
    return [wA, JA, Ua].indexOf(B) !== -1 ? Te : B;
  }));
  var s = A.wordBreak === "keep-all" ? a.map(function(B, i) {
    return B && e[i] >= 19968 && e[i] <= 40959;
  }) : void 0;
  return [r, n, s];
}, Bi = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === Fa, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return W.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), ii = function(e, A) {
  var t = vt(e), r = si(t, A), n = r[0], a = r[1], s = r[2], B = t.length, i = 0, o = 0;
  return {
    next: function() {
      if (o >= B)
        return { done: !0, value: null };
      for (var c = x; o < B && (c = ai(t, a, n, ++o, s)) === x; )
        ;
      if (c !== x || o === B) {
        var u = new Bi(t, c, i, o);
        return i = o, { value: u, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, oi = 1, ci = 2, Oe = 4, fn = 8, wt = 10, Cn = 47, me = 92, li = 9, ui = 32, Ye = 34, fe = 61, gi = 35, Qi = 36, wi = 37, We = 39, Ze = 40, Ce = 41, fi = 95, lA = 45, Ci = 33, Ui = 60, Fi = 62, hi = 64, di = 91, pi = 93, Ei = 61, Hi = 123, ze = 63, mi = 125, Un = 124, vi = 126, Ii = 128, Fn = 65533, Pt = 42, YA = 43, yi = 44, bi = 58, Ki = 59, Se = 46, Li = 0, xi = 8, Di = 11, Ti = 14, Si = 31, Mi = 127, vA = -1, da = 48, pa = 97, Ea = 101, Oi = 102, Ni = 117, Ri = 122, Ha = 65, ma = 69, va = 70, Gi = 85, Vi = 90, BA = function(e) {
  return e >= da && e <= 57;
}, ki = function(e) {
  return e >= 55296 && e <= 57343;
}, $A = function(e) {
  return BA(e) || e >= Ha && e <= va || e >= pa && e <= Oi;
}, _i = function(e) {
  return e >= pa && e <= Ri;
}, Pi = function(e) {
  return e >= Ha && e <= Vi;
}, Xi = function(e) {
  return _i(e) || Pi(e);
}, Ji = function(e) {
  return e >= Ii;
}, je = function(e) {
  return e === wt || e === li || e === ui;
}, ft = function(e) {
  return Xi(e) || Ji(e) || e === fi;
}, hn = function(e) {
  return ft(e) || BA(e) || e === lA;
}, Yi = function(e) {
  return e >= Li && e <= xi || e === Di || e >= Ti && e <= Si || e === Mi;
}, OA = function(e, A) {
  return e !== me ? !1 : A !== wt;
}, qe = function(e, A, t) {
  return e === lA ? ft(A) || OA(A, t) : ft(e) ? !0 : !!(e === me && OA(e, A));
}, Xt = function(e, A, t) {
  return e === YA || e === lA ? BA(A) ? !0 : A === Se && BA(t) : BA(e === Se ? A : e);
}, Wi = function(e) {
  var A = 0, t = 1;
  (e[A] === YA || e[A] === lA) && (e[A] === lA && (t = -1), A++);
  for (var r = []; BA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(W.apply(void 0, r), 10) : 0;
  e[A] === Se && A++;
  for (var a = []; BA(e[A]); )
    a.push(e[A++]);
  var s = a.length, B = s ? parseInt(W.apply(void 0, a), 10) : 0;
  (e[A] === ma || e[A] === Ea) && A++;
  var i = 1;
  (e[A] === YA || e[A] === lA) && (e[A] === lA && (i = -1), A++);
  for (var o = []; BA(e[A]); )
    o.push(e[A++]);
  var c = o.length ? parseInt(W.apply(void 0, o), 10) : 0;
  return t * (n + B * Math.pow(10, -s)) * Math.pow(10, i * c);
}, Zi = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, zi = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, ji = {
  type: 4
  /* COMMA_TOKEN */
}, qi = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, $i = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, Ao = {
  type: 21
  /* COLUMN_TOKEN */
}, eo = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, to = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, ro = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, no = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, ao = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, $e = {
  type: 23
  /* BAD_URL_TOKEN */
}, so = {
  type: 1
  /* BAD_STRING_TOKEN */
}, Bo = {
  type: 25
  /* CDO_TOKEN */
}, io = {
  type: 24
  /* CDC_TOKEN */
}, oo = {
  type: 26
  /* COLON_TOKEN */
}, co = {
  type: 27
  /* SEMICOLON_TOKEN */
}, lo = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, uo = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, go = {
  type: 31
  /* WHITESPACE_TOKEN */
}, pr = {
  type: 32
  /* EOF_TOKEN */
}, Ia = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(vt(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== pr; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Ye:
          return this.consumeStringToken(Ye);
        case gi:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (hn(t) || OA(r, n)) {
            var a = qe(t, r, n) ? ci : oi, s = this.consumeName();
            return { type: 5, value: s, flags: a };
          }
          break;
        case Qi:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), qi;
          break;
        case We:
          return this.consumeStringToken(We);
        case Ze:
          return Zi;
        case Ce:
          return zi;
        case Pt:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), ao;
          break;
        case YA:
          if (Xt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case yi:
          return ji;
        case lA:
          var B = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (Xt(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (qe(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === lA && o === Fi)
            return this.consumeCodePoint(), this.consumeCodePoint(), io;
          break;
        case Se:
          if (Xt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Cn:
          if (this.peekCodePoint(0) === Pt)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === Pt && (c = this.consumeCodePoint(), c === Cn))
                return this.consumeToken();
              if (c === vA)
                return this.consumeToken();
            }
          break;
        case bi:
          return oo;
        case Ki:
          return co;
        case Ui:
          if (this.peekCodePoint(0) === Ci && this.peekCodePoint(1) === lA && this.peekCodePoint(2) === lA)
            return this.consumeCodePoint(), this.consumeCodePoint(), Bo;
          break;
        case hi:
          var u = this.peekCodePoint(0), l = this.peekCodePoint(1), w = this.peekCodePoint(2);
          if (qe(u, l, w)) {
            var s = this.consumeName();
            return { type: 7, value: s };
          }
          break;
        case di:
          return lo;
        case me:
          if (OA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case pi:
          return uo;
        case Ei:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), $i;
          break;
        case Hi:
          return ro;
        case mi:
          return no;
        case Ni:
        case Gi:
          var g = this.peekCodePoint(0), Q = this.peekCodePoint(1);
          return g === YA && ($A(Q) || Q === ze) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Un:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), eo;
          if (this.peekCodePoint(0) === Un)
            return this.consumeCodePoint(), Ao;
          break;
        case vi:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), to;
          break;
        case vA:
          return pr;
      }
      return je(A) ? (this.consumeWhiteSpace(), go) : BA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : ft(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: W(A) };
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
          return i === ze ? da : i;
        })), 16), a = parseInt(W.apply(void 0, A.map(function(i) {
          return i === ze ? va : i;
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
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === Ze ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Ze ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === vA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === We || t === Ye) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === vA || this.peekCodePoint(0) === Ce) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), $e);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === vA || n === Ce)
          return { type: 22, value: W.apply(void 0, A) };
        if (je(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === vA || this.peekCodePoint(0) === Ce ? (this.consumeCodePoint(), { type: 22, value: W.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), $e);
        if (n === Ye || n === We || n === Ze || Yi(n))
          return this.consumeBadUrlRemnants(), $e;
        if (n === me)
          if (OA(n, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), $e;
        else
          A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; je(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === Ce || A === vA)
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
        if (n === wt)
          return this._value.splice(0, r), so;
        if (n === me) {
          var a = this._value[r + 1];
          a !== vA && a !== void 0 && (a === wt ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : OA(n, a) && (t += this.consumeStringSlice(r), t += W(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Oe, r = this.peekCodePoint(0);
      for ((r === YA || r === lA) && A.push(this.consumeCodePoint()); BA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Se && BA(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = fn; BA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var a = this.peekCodePoint(2);
      if ((r === ma || r === Ea) && ((n === YA || n === lA) && BA(a) || BA(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = fn; BA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [Wi(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), a = this.peekCodePoint(1), s = this.peekCodePoint(2);
      if (qe(n, a, s)) {
        var B = this.consumeName();
        return { type: 15, number: t, flags: r, unit: B };
      }
      return n === wi ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if ($A(A)) {
        for (var t = W(A); $A(this.peekCodePoint(0)) && t.length < 6; )
          t += W(this.consumeCodePoint());
        je(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || ki(r) || r > 1114111 ? Fn : r;
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
), ya = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new Ia();
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
        if (r.type === 32 || wo(r, A))
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
}, ce = function(e) {
  return e.type === 17;
}, G = function(e) {
  return e.type === 20;
}, Qo = function(e) {
  return e.type === 0;
}, Er = function(e, A) {
  return G(e) && e.value === A;
}, ba = function(e) {
  return e.type !== 31;
}, ie = function(e) {
  return e.type !== 31 && e.type !== 4;
}, IA = function(e) {
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
}, wo = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, _A = function(e) {
  return e.type === 17 || e.type === 15;
}, Z = function(e) {
  return e.type === 16 || _A(e);
}, Ka = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, aA = {
  type: 17,
  number: 0,
  flags: Oe
}, Mr = {
  type: 16,
  number: 50,
  flags: Oe
}, RA = {
  type: 16,
  number: 100,
  flags: Oe
}, pe = function(e, A, t) {
  var r = e[0], n = e[1];
  return [P(r, A), P(typeof n < "u" ? n : r, t)];
}, P = function(e, A) {
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
}, La = "deg", xa = "grad", Da = "rad", Ta = "turn", It = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case La:
          return Math.PI * A.number / 180;
        case xa:
          return Math.PI / 200 * A.number;
        case Da:
          return A.number;
        case Ta:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Sa = function(e) {
  return e.type === 15 && (e.unit === La || e.unit === xa || e.unit === Da || e.unit === Ta);
}, Ma = function(e) {
  var A = e.filter(G).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [aA, aA];
    case "to top":
    case "bottom":
      return pA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [aA, RA];
    case "to right":
    case "left":
      return pA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [RA, RA];
    case "to bottom":
    case "top":
      return pA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [RA, aA];
    case "to left":
    case "right":
      return pA(270);
  }
  return 0;
}, pA = function(e) {
  return Math.PI * e / 180;
}, VA = {
  name: "color",
  parse: function(e, A) {
    if (A.type === 18) {
      var t = fo[A.name];
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
      var B = LA[A.value.toUpperCase()];
      if (typeof B < "u")
        return B;
    }
    return LA.TRANSPARENT;
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
    var r = t.map(dn), n = r[0], a = r[1], s = r[2];
    return GA(n, a, s, 1);
  }
  if (t.length === 4) {
    var B = t.map(dn), n = B[0], a = B[1], s = B[2], i = B[3];
    return GA(n, a, s, i);
  }
  return 0;
};
function Jt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var En = function(e, A) {
  var t = A.filter(ie), r = t[0], n = t[1], a = t[2], s = t[3], B = (r.type === 17 ? pA(r.number) : It.parse(e, r)) / (Math.PI * 2), i = Z(n) ? n.number / 100 : 0, o = Z(a) ? a.number / 100 : 0, c = typeof s < "u" && Z(s) ? P(s, 1) : 1;
  if (i === 0)
    return GA(o * 255, o * 255, o * 255, 1);
  var u = o <= 0.5 ? o * (i + 1) : o + i - o * i, l = o * 2 - u, w = Jt(l, u, B + 1 / 3), g = Jt(l, u, B), Q = Jt(l, u, B - 1 / 3);
  return GA(w * 255, g * 255, Q * 255, c);
}, fo = {
  hsl: En,
  hsla: En,
  rgb: pn,
  rgba: pn
}, ve = function(e, A) {
  return VA.parse(e, ya.create(A).parseComponentValue());
}, LA = {
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
}, Co = {
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
}, Uo = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, yt = function(e, A) {
  var t = VA.parse(e, A[0]), r = A[1];
  return r && Z(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Hn = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = aA), r.stop === null && (r.stop = RA);
  for (var n = [], a = 0, s = 0; s < e.length; s++) {
    var B = e[s].stop;
    if (B !== null) {
      var i = P(B, A);
      i > a ? n.push(i) : n.push(a), a = i;
    } else
      n.push(null);
  }
  for (var o = null, s = 0; s < n.length; s++) {
    var c = n[s];
    if (c === null)
      o === null && (o = s);
    else if (o !== null) {
      for (var u = s - o, l = n[o - 1], w = (c - l) / (u + 1), g = 1; g <= u; g++)
        n[o + g - 1] = w * g;
      o = null;
    }
  }
  return e.map(function(Q, C) {
    var f = Q.color;
    return { color: f, stop: Math.max(Math.min(1, n[C] / A), 0) };
  });
}, Fo = function(e, A, t) {
  var r = A / 2, n = t / 2, a = P(e[0], A) - r, s = n - P(e[1], t);
  return (Math.atan2(s, a) + Math.PI * 2) % (Math.PI * 2);
}, ho = function(e, A, t) {
  var r = typeof e == "number" ? e : Fo(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), a = A / 2, s = t / 2, B = n / 2, i = Math.sin(r - Math.PI / 2) * B, o = Math.cos(r - Math.PI / 2) * B;
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
}, po = function(e, A, t, r, n) {
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
        var B = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), u = mn(r, n, A, t, !1), o = u[0], c = u[1];
        a = HA(o - A, (c - t) / B), s = B * a;
      }
      break;
  }
  return Array.isArray(e.size) && (a = P(e.size[0], r), s = e.size.length === 2 ? P(e.size[1], n) : a), [a, s];
}, Eo = function(e, A) {
  var t = pA(180), r = [];
  return IA(A).forEach(function(n, a) {
    if (a === 0) {
      var s = n[0];
      if (s.type === 20 && s.value === "to") {
        t = Ma(n);
        return;
      } else if (Sa(s)) {
        t = It.parse(e, s);
        return;
      }
    }
    var B = yt(e, n);
    r.push(B);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, At = function(e, A) {
  var t = pA(180), r = [];
  return IA(A).forEach(function(n, a) {
    if (a === 0) {
      var s = n[0];
      if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
        t = Ma(n);
        return;
      } else if (Sa(s)) {
        t = (It.parse(e, s) + pA(270)) % pA(360);
        return;
      }
    }
    var B = yt(e, n);
    r.push(B);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Ho = function(e, A) {
  var t = pA(180), r = [], n = 1, a = 0, s = 3, B = [];
  return IA(A).forEach(function(i, o) {
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
        var u = VA.parse(e, c.values[0]);
        r.push({ stop: aA, color: u });
      } else if (c.name === "to") {
        var u = VA.parse(e, c.values[0]);
        r.push({ stop: RA, color: u });
      } else if (c.name === "color-stop") {
        var l = c.values.filter(ie);
        if (l.length === 2) {
          var u = VA.parse(e, l[1]), w = l[0];
          ce(w) && r.push({
            stop: { type: 16, number: w.number * 100, flags: w.flags },
            color: u
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + pA(180)) % pA(360),
    stops: r,
    type: n
  } : { size: s, shape: a, stops: r, position: B, type: n };
}, Oa = "closest-side", Na = "farthest-side", Ra = "closest-corner", Ga = "farthest-corner", Va = "circle", ka = "ellipse", _a = "cover", Pa = "contain", mo = function(e, A) {
  var t = 0, r = 3, n = [], a = [];
  return IA(A).forEach(function(s, B) {
    var i = !0;
    if (B === 0) {
      var o = !1;
      i = s.reduce(function(u, l) {
        if (o)
          if (G(l))
            switch (l.value) {
              case "center":
                return a.push(Mr), u;
              case "top":
              case "left":
                return a.push(aA), u;
              case "right":
              case "bottom":
                return a.push(RA), u;
            }
          else
            (Z(l) || _A(l)) && a.push(l);
        else if (G(l))
          switch (l.value) {
            case Va:
              return t = 0, !1;
            case ka:
              return t = 1, !1;
            case "at":
              return o = !0, !1;
            case Oa:
              return r = 0, !1;
            case _a:
            case Na:
              return r = 1, !1;
            case Pa:
            case Ra:
              return r = 2, !1;
            case Ga:
              return r = 3, !1;
          }
        else if (_A(l) || Z(l))
          return Array.isArray(r) || (r = []), r.push(l), !1;
        return u;
      }, i);
    }
    if (i) {
      var c = yt(e, s);
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
}, et = function(e, A) {
  var t = 0, r = 3, n = [], a = [];
  return IA(A).forEach(function(s, B) {
    var i = !0;
    if (B === 0 ? i = s.reduce(function(c, u) {
      if (G(u))
        switch (u.value) {
          case "center":
            return a.push(Mr), !1;
          case "top":
          case "left":
            return a.push(aA), !1;
          case "right":
          case "bottom":
            return a.push(RA), !1;
        }
      else if (Z(u) || _A(u))
        return a.push(u), !1;
      return c;
    }, i) : B === 1 && (i = s.reduce(function(c, u) {
      if (G(u))
        switch (u.value) {
          case Va:
            return t = 0, !1;
          case ka:
            return t = 1, !1;
          case Pa:
          case Oa:
            return r = 0, !1;
          case Na:
            return r = 1, !1;
          case Ra:
            return r = 2, !1;
          case _a:
          case Ga:
            return r = 3, !1;
        }
      else if (_A(u) || Z(u))
        return Array.isArray(r) || (r = []), r.push(u), !1;
      return c;
    }, i)), i) {
      var o = yt(e, s);
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
}, vo = function(e) {
  return e.type === 1;
}, Io = function(e) {
  return e.type === 2;
}, Or = {
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
      var r = Xa[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function yo(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Xa[e.name]);
}
var Xa = {
  "linear-gradient": Eo,
  "-moz-linear-gradient": At,
  "-ms-linear-gradient": At,
  "-o-linear-gradient": At,
  "-webkit-linear-gradient": At,
  "radial-gradient": mo,
  "-moz-radial-gradient": et,
  "-ms-radial-gradient": et,
  "-o-radial-gradient": et,
  "-webkit-radial-gradient": et,
  "-webkit-gradient": Ho
}, bo = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return ie(r) && yo(r);
    }).map(function(r) {
      return Or.parse(e, r);
    });
  }
}, Ko = {
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
}, Lo = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return IA(A).map(function(t) {
      return t.filter(Z);
    }).map(Ka);
  }
}, xo = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return IA(A).map(function(t) {
      return t.filter(G).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(Do);
  }
}, Do = function(e) {
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
var To = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return IA(A).map(function(t) {
      return t.filter(So);
    });
  }
}, So = function(e) {
  return G(e) || Z(e);
}, bt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Mo = bt("top"), Oo = bt("right"), No = bt("bottom"), Ro = bt("left"), Kt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return Ka(t.filter(Z));
    }
  };
}, Go = Kt("top-left"), Vo = Kt("top-right"), ko = Kt("bottom-right"), _o = Kt("bottom-left"), Lt = function(e) {
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
}, Po = Lt("top"), Xo = Lt("right"), Jo = Lt("bottom"), Yo = Lt("left"), xt = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return Ne(t) ? t.number : 0;
    }
  };
}, Wo = xt("top"), Zo = xt("right"), zo = xt("bottom"), jo = xt("left"), qo = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, $o = {
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
}, Ac = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(G).reduce(
      function(t, r) {
        return t | ec(r.value);
      },
      0
      /* NONE */
    );
  }
}, ec = function(e) {
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
}, tc = {
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
}, rc = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
  }
}, Ct;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Ct || (Ct = {}));
var nc = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return Ct.STRICT;
      case "normal":
      default:
        return Ct.NORMAL;
    }
  }
}, ac = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, vn = function(e, A) {
  return G(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : Z(e) ? P(e, A) : A;
}, sc = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Or.parse(e, A);
  }
}, Bc = {
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
}, Dt = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, ic = Dt("top"), oc = Dt("right"), cc = Dt("bottom"), lc = Dt("left"), uc = {
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
}, gc = {
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
}, Tt = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, Qc = Tt("top"), wc = Tt("right"), fc = Tt("bottom"), Cc = Tt("left"), Uc = {
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
}, Fc = {
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
}, hc = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Er(A[0], "none") ? [] : IA(A).map(function(t) {
      for (var r = {
        color: LA.TRANSPARENT,
        offsetX: aA,
        offsetY: aA,
        blur: aA
      }, n = 0, a = 0; a < t.length; a++) {
        var s = t[a];
        _A(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : r.blur = s, n++) : r.color = VA.parse(e, s);
      }
      return r;
    });
  }
}, dc = {
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
}, pc = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      var t = mc[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
      return t(A.values);
    }
    return null;
  }
}, Ec = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, Hc = function(e) {
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
}, mc = {
  matrix: Ec,
  matrix3d: Hc
}, In = {
  type: 16,
  number: 50,
  flags: Oe
}, vc = [In, In], Ic = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(Z);
    return t.length !== 2 ? vc : [t[0], t[1]];
  }
}, yc = {
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
var bc = {
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
}, Kc = {
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
}, Ja = {
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
}, Lc = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return ce(A) ? A.number : 1;
  }
}, xc = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Dc = {
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
}, Tc = {
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
}, Sc = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Mc = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (ce(A))
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
}, Oc = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(G).map(function(t) {
      return t.value;
    });
  }
}, Nc = {
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
}, eA = function(e, A) {
  return (e & A) !== 0;
}, Rc = {
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
}, Gc = {
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
    for (var r = [], n = A.filter(ba), a = 0; a < n.length; a++) {
      var s = n[a], B = n[a + 1];
      if (s.type === 20) {
        var i = B && ce(B) ? B.number : 1;
        r.push({ counter: s.value, increment: i });
      }
    }
    return r;
  }
}, Vc = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(ba), n = 0; n < r.length; n++) {
      var a = r[n], s = r[n + 1];
      if (G(a) && a.value !== "none") {
        var B = s && ce(s) ? s.number : 0;
        t.push({ counter: a.value, reset: B });
      }
    }
    return t;
  }
}, kc = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(Ne).map(function(t) {
      return Ja.parse(e, t);
    });
  }
}, _c = {
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
    var r = [], n = A.filter(Qo);
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
}, Pc = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && Er(A[0], "none") ? [] : IA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: aA,
        offsetY: aA,
        blur: aA,
        spread: aA,
        inset: !1
      }, n = 0, a = 0; a < t.length; a++) {
        var s = t[a];
        Er(s, "inset") ? r.inset = !0 : _A(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : n === 2 ? r.blur = s : r.spread = s, n++) : r.color = VA.parse(e, s);
      }
      return r;
    });
  }
}, Xc = {
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
}, Jc = {
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
    return Ne(A) ? A.number : 0;
  }
}, Wc = (
  /** @class */
  function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = H(A, kc, t.animationDuration), this.backgroundClip = H(A, Co, t.backgroundClip), this.backgroundColor = H(A, Uo, t.backgroundColor), this.backgroundImage = H(A, bo, t.backgroundImage), this.backgroundOrigin = H(A, Ko, t.backgroundOrigin), this.backgroundPosition = H(A, Lo, t.backgroundPosition), this.backgroundRepeat = H(A, xo, t.backgroundRepeat), this.backgroundSize = H(A, To, t.backgroundSize), this.borderTopColor = H(A, Mo, t.borderTopColor), this.borderRightColor = H(A, Oo, t.borderRightColor), this.borderBottomColor = H(A, No, t.borderBottomColor), this.borderLeftColor = H(A, Ro, t.borderLeftColor), this.borderTopLeftRadius = H(A, Go, t.borderTopLeftRadius), this.borderTopRightRadius = H(A, Vo, t.borderTopRightRadius), this.borderBottomRightRadius = H(A, ko, t.borderBottomRightRadius), this.borderBottomLeftRadius = H(A, _o, t.borderBottomLeftRadius), this.borderTopStyle = H(A, Po, t.borderTopStyle), this.borderRightStyle = H(A, Xo, t.borderRightStyle), this.borderBottomStyle = H(A, Jo, t.borderBottomStyle), this.borderLeftStyle = H(A, Yo, t.borderLeftStyle), this.borderTopWidth = H(A, Wo, t.borderTopWidth), this.borderRightWidth = H(A, Zo, t.borderRightWidth), this.borderBottomWidth = H(A, zo, t.borderBottomWidth), this.borderLeftWidth = H(A, jo, t.borderLeftWidth), this.boxShadow = H(A, Pc, t.boxShadow), this.color = H(A, qo, t.color), this.direction = H(A, $o, t.direction), this.display = H(A, Ac, t.display), this.float = H(A, tc, t.cssFloat), this.fontFamily = H(A, Tc, t.fontFamily), this.fontSize = H(A, Sc, t.fontSize), this.fontStyle = H(A, Nc, t.fontStyle), this.fontVariant = H(A, Oc, t.fontVariant), this.fontWeight = H(A, Mc, t.fontWeight), this.letterSpacing = H(A, rc, t.letterSpacing), this.lineBreak = H(A, nc, t.lineBreak), this.lineHeight = H(A, ac, t.lineHeight), this.listStyleImage = H(A, sc, t.listStyleImage), this.listStylePosition = H(A, Bc, t.listStylePosition), this.listStyleType = H(A, Hr, t.listStyleType), this.marginTop = H(A, ic, t.marginTop), this.marginRight = H(A, oc, t.marginRight), this.marginBottom = H(A, cc, t.marginBottom), this.marginLeft = H(A, lc, t.marginLeft), this.opacity = H(A, Lc, t.opacity);
      var a = H(A, uc, t.overflow);
      this.overflowX = a[0], this.overflowY = a[a.length > 1 ? 1 : 0], this.overflowWrap = H(A, gc, t.overflowWrap), this.paddingTop = H(A, Qc, t.paddingTop), this.paddingRight = H(A, wc, t.paddingRight), this.paddingBottom = H(A, fc, t.paddingBottom), this.paddingLeft = H(A, Cc, t.paddingLeft), this.paintOrder = H(A, Xc, t.paintOrder), this.position = H(A, Fc, t.position), this.textAlign = H(A, Uc, t.textAlign), this.textDecorationColor = H(A, xc, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = H(A, Dc, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = H(A, hc, t.textShadow), this.textTransform = H(A, dc, t.textTransform), this.transform = H(A, pc, t.transform), this.transformOrigin = H(A, Ic, t.transformOrigin), this.visibility = H(A, yc, t.visibility), this.webkitTextStrokeColor = H(A, Jc, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = H(A, Yc, t.webkitTextStrokeWidth), this.wordBreak = H(A, bc, t.wordBreak), this.zIndex = H(A, Kc, t.zIndex);
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
      return eA(
        this.display,
        4
        /* INLINE */
      ) || eA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || eA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || eA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || eA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || eA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, e;
  }()
), Zc = (
  /** @class */
  function() {
    function e(A, t) {
      this.content = H(A, Rc, t.content), this.quotes = H(A, _c, t.quotes);
    }
    return e;
  }()
), bn = (
  /** @class */
  function() {
    function e(A, t) {
      this.counterIncrement = H(A, Gc, t.counterIncrement), this.counterReset = H(A, Vc, t.counterReset);
    }
    return e;
  }()
), H = function(e, A, t) {
  var r = new Ia(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var a = new ya(r.read());
  switch (A.type) {
    case 2:
      var s = a.parseComponentValue();
      return A.parse(e, G(s) ? s.value : A.initialValue);
    case 0:
      return A.parse(e, a.parseComponentValue());
    case 1:
      return A.parse(e, a.parseComponentValues());
    case 4:
      return a.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return It.parse(e, a.parseComponentValue());
        case "color":
          return VA.parse(e, a.parseComponentValue());
        case "image":
          return Or.parse(e, a.parseComponentValue());
        case "length":
          var B = a.parseComponentValue();
          return _A(B) ? B : aA;
        case "length-percentage":
          var i = a.parseComponentValue();
          return Z(i) ? i : aA;
        case "time":
          return Ja.parse(e, a.parseComponentValue());
      }
      break;
  }
}, zc = "data-html2canvas-debug", jc = function(e) {
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
  var t = jc(e);
  return t === 1 || A === t;
}, yA = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, mr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Wc(A, window.getComputedStyle(t, null)), yr(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = mt(this.context, t), mr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), qc = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Kn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ee = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var tt = 0; tt < Kn.length; tt++)
  Ee[Kn.charCodeAt(tt)] = tt;
var $c = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, a, s, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    a = Ee[e.charCodeAt(r)], s = Ee[e.charCodeAt(r + 1)], B = Ee[e.charCodeAt(r + 2)], i = Ee[e.charCodeAt(r + 3)], c[n++] = a << 2 | s >> 4, c[n++] = (s & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, Al = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, el = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, ZA = 5, Nr = 6 + 5, Yt = 2, tl = Nr - ZA, Ya = 65536 >> ZA, rl = 1 << ZA, Wt = rl - 1, nl = 1024 >> ZA, al = Ya + nl, sl = al, Bl = 32, il = sl + Bl, ol = 65536 >> Nr, cl = 1 << tl, ll = cl - 1, Ln = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, ul = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, gl = function(e, A) {
  var t = $c(e), r = Array.isArray(t) ? el(t) : new Uint32Array(t), n = Array.isArray(t) ? Al(t) : new Uint16Array(t), a = 24, s = Ln(n, a / 2, r[4] / 2), B = r[5] === 2 ? Ln(n, (a + r[4]) / 2) : ul(r, Math.ceil((a + r[4]) / 4));
  return new Ql(r[0], r[1], r[2], r[3], s, B);
}, Ql = (
  /** @class */
  function() {
    function e(A, t, r, n, a, s) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = a, this.data = s;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> ZA], t = (t << Yt) + (A & Wt), this.data[t];
        if (A <= 65535)
          return t = this.index[Ya + (A - 55296 >> ZA)], t = (t << Yt) + (A & Wt), this.data[t];
        if (A < this.highStart)
          return t = il - ol + (A >> Nr), t = this.index[t], t += A >> ZA & ll, t = this.index[t], t = (t << Yt) + (A & Wt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), xn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", wl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var rt = 0; rt < xn.length; rt++)
  wl[xn.charCodeAt(rt)] = rt;
var fl = 1, Zt = 2, zt = 3, Dn = 4, Tn = 5, Cl = 7, Sn = 8, jt = 9, qt = 10, Mn = 11, On = 12, Nn = 13, Rn = 14, $t = 15, Ul = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var a = e.charCodeAt(t++);
      (a & 64512) === 56320 ? A.push(((n & 1023) << 10) + (a & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, Fl = function() {
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
}, hl = gl(qc), hA = "×", Ar = "÷", dl = function(e) {
  return hl.get(e);
}, pl = function(e, A, t) {
  var r = t - 2, n = A[r], a = A[t - 1], s = A[t];
  if (a === Zt && s === zt)
    return hA;
  if (a === Zt || a === zt || a === Dn || s === Zt || s === zt || s === Dn)
    return Ar;
  if (a === Sn && [Sn, jt, Mn, On].indexOf(s) !== -1 || (a === Mn || a === jt) && (s === jt || s === qt) || (a === On || a === qt) && s === qt || s === Nn || s === Tn || s === Cl || a === fl)
    return hA;
  if (a === Nn && s === Rn) {
    for (; n === Tn; )
      n = A[--r];
    if (n === Rn)
      return hA;
  }
  if (a === $t && s === $t) {
    for (var B = 0; n === $t; )
      B++, n = A[--r];
    if (B % 2 === 0)
      return hA;
  }
  return Ar;
}, El = function(e) {
  var A = Ul(e), t = A.length, r = 0, n = 0, a = A.map(dl);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var s = hA; r < t && (s = pl(A, a, ++r)) === hA; )
        ;
      if (s !== hA || r === t) {
        var B = Fl.apply(null, A.slice(n, r));
        return n = r, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Hl = function(e) {
  for (var A = El(e), t = [], r; !(r = A.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, ml = function(e) {
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
}, vl = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = vt(r.data).map(function(i) {
    return W(i);
  }), a = 0, s = {}, B = n.every(function(i, o) {
    t.setStart(r, a), t.setEnd(r, a + i.length);
    var c = t.getBoundingClientRect();
    a += i.length;
    var u = c.x > s.x || c.y > s.y;
    return s = c, o === 0 ? !0 : u;
  });
  return e.body.removeChild(A), B;
}, Il = function() {
  return typeof new Image().crossOrigin < "u";
}, yl = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, bl = function(e) {
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
}, Kl = function(e) {
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
}, nA = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = ml(document);
    return Object.defineProperty(nA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = nA.SUPPORT_RANGE_BOUNDS && vl(document);
    return Object.defineProperty(nA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = bl(document);
    return Object.defineProperty(nA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? Kl(document) : Promise.resolve(!1);
    return Object.defineProperty(nA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = Il();
    return Object.defineProperty(nA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = yl();
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
), Ll = function(e, A, t, r) {
  var n = Tl(A, t), a = [], s = 0;
  return n.forEach(function(B) {
    if (t.textDecorationLine.length || B.trim().length > 0)
      if (nA.SUPPORT_RANGE_BOUNDS) {
        var i = kn(r, s, B.length).getClientRects();
        if (i.length > 1) {
          var o = Rr(B), c = 0;
          o.forEach(function(l) {
            a.push(new ye(l, xA.fromDOMRectList(e, kn(r, c + s, l.length).getClientRects()))), c += l.length;
          });
        } else
          a.push(new ye(B, xA.fromDOMRectList(e, i)));
      } else {
        var u = r.splitText(B.length);
        a.push(new ye(B, xl(e, r))), r = u;
      }
    else
      nA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(B.length));
    s += B.length;
  }), a;
}, xl = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var a = mt(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), a;
    }
  }
  return xA.EMPTY;
}, kn = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, Rr = function(e) {
  if (nA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return Hl(e);
}, Dl = function(e, A) {
  if (nA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Ml(e, A);
}, Tl = function(e, A) {
  return A.letterSpacing !== 0 ? Rr(e) : Dl(e, A);
}, Sl = [32, 160, 4961, 65792, 65793, 4153, 4241], Ml = function(e, A) {
  for (var t = ii(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, a = function() {
    if (n.value) {
      var s = n.value.slice(), B = vt(s), i = "";
      B.forEach(function(o) {
        Sl.indexOf(o) === -1 ? i += W(o) : (i.length && r.push(i), r.push(W(o)), i = "");
      }), i.length && r.push(i);
    }
  }; !(n = t.next()).done; )
    a();
  return r;
}, Ol = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.text = Nl(t.data, r.textTransform), this.textBounds = Ll(A, this.text, r, t);
    }
    return e;
  }()
), Nl = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Rl, Gl);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Rl = /(^|\s|:|-|\(|\))([a-z])/g, Gl = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Wa = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  }(yA)
), Za = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  }(yA)
), za = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, a = new XMLSerializer(), s = mt(t, r);
      return r.setAttribute("width", s.width + "px"), r.setAttribute("height", s.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(a.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  }(yA)
), ja = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(yA)
), Ir = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return A;
  }(yA)
), Vl = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], kl = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], _l = function(e) {
  return e.width > e.height ? new xA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new xA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, Pl = function(e) {
  var A = e.type === Xl ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, Ut = "checkbox", Ft = "radio", Xl = "password", _n = 707406591, Gr = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Pl(r), (n.type === Ut || n.type === Ft) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = _l(n.bounds)), n.type) {
        case Ut:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Vl;
          break;
        case Ft:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = kl;
          break;
      }
      return n;
    }
    return A;
  }(yA)
), qa = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, a = r.options[r.selectedIndex || 0];
      return n.value = a && a.text || "", n;
    }
    return A;
  }(yA)
), $a = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(yA)
), As = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = ts(t, r.contentWindow.document.documentElement);
          var a = r.contentWindow.document.documentElement ? ve(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : LA.TRANSPARENT, s = r.contentWindow.document.body ? ve(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : LA.TRANSPARENT;
          n.backgroundColor = kA(a) ? kA(s) ? n.styles.backgroundColor : s : a;
        }
      } catch {
      }
      return n;
    }
    return A;
  }(yA)
), Jl = ["OL", "UL", "MENU"], ct = function(e, A, t, r) {
  for (var n = A.firstChild, a = void 0; n; n = a)
    if (a = n.nextSibling, rs(n) && n.data.trim().length > 0)
      t.textNodes.push(new Ol(e, n, t.styles));
    else if (se(n))
      if (Bs(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(B) {
          return ct(e, B, t, r);
        });
      else {
        var s = es(e, n);
        s.styles.isVisible() && (Yl(n, s, r) ? s.flags |= 4 : Wl(s.styles) && (s.flags |= 2), Jl.indexOf(n.tagName) !== -1 && (s.flags |= 8), t.elements.push(s), n.slot, n.shadowRoot ? ct(e, n.shadowRoot, s, r) : !ht(n) && !ns(n) && !dt(n) && ct(e, n, s, r));
      }
}, es = function(e, A) {
  return br(A) ? new Wa(e, A) : as(A) ? new Za(e, A) : ns(A) ? new za(e, A) : Zl(A) ? new ja(e, A) : zl(A) ? new Ir(e, A) : jl(A) ? new Gr(e, A) : dt(A) ? new qa(e, A) : ht(A) ? new $a(e, A) : ss(A) ? new As(e, A) : new yA(e, A);
}, ts = function(e, A) {
  var t = es(e, A);
  return t.flags |= 4, ct(e, A, t, t), t;
}, Yl = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Vr(e) && t.styles.isTransparent();
}, Wl = function(e) {
  return e.isPositioned() || e.isFloating();
}, rs = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, se = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, yr = function(e) {
  return se(e) && typeof e.style < "u" && !lt(e);
}, lt = function(e) {
  return typeof e.className == "object";
}, Zl = function(e) {
  return e.tagName === "LI";
}, zl = function(e) {
  return e.tagName === "OL";
}, jl = function(e) {
  return e.tagName === "INPUT";
}, ql = function(e) {
  return e.tagName === "HTML";
}, ns = function(e) {
  return e.tagName === "svg";
}, Vr = function(e) {
  return e.tagName === "BODY";
}, as = function(e) {
  return e.tagName === "CANVAS";
}, Pn = function(e) {
  return e.tagName === "VIDEO";
}, br = function(e) {
  return e.tagName === "IMG";
}, ss = function(e) {
  return e.tagName === "IFRAME";
}, Xn = function(e) {
  return e.tagName === "STYLE";
}, $l = function(e) {
  return e.tagName === "SCRIPT";
}, ht = function(e) {
  return e.tagName === "TEXTAREA";
}, dt = function(e) {
  return e.tagName === "SELECT";
}, Bs = function(e) {
  return e.tagName === "SLOT";
}, Jn = function(e) {
  return e.tagName.indexOf("-") > 0;
}, Au = (
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
), Yn = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Wn = {
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
}, eu = {
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
  return e < A || e > t ? Me(e, n, a.length > 0) : r.integers.reduce(function(s, B, i) {
    for (; e >= B; )
      e -= B, s += r.values[i];
    return s;
  }, "") + a;
}, is = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, Y = function(e, A, t, r, n) {
  var a = t - A + 1;
  return (e < 0 ? "-" : "") + (is(Math.abs(e), a, r, function(s) {
    return W(Math.floor(s % a) + A);
  }) + n);
}, XA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return is(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, re = 1, SA = 2, MA = 4, He = 8, KA = function(e, A, t, r, n, a) {
  if (e < -9999 || e > 9999)
    return Me(e, 4, n.length > 0);
  var s = Math.abs(e), B = n;
  if (s === 0)
    return A[0] + B;
  for (var i = 0; s > 0 && i <= 4; i++) {
    var o = s % 10;
    o === 0 && eA(a, re) && B !== "" ? B = A[o] + B : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && eA(a, SA) || o === 1 && i === 1 && eA(a, MA) && e > 100 || o === 1 && i > 1 && eA(a, He) ? B = A[o] + (i > 0 ? t[i - 1] : "") + B : o === 1 && i > 0 && (B = t[i - 1] + B), s = Math.floor(s / 10);
  }
  return (e < 0 ? r : "") + B;
}, Zn = "十百千萬", zn = "拾佰仟萬", jn = "マイナス", er = "마이너스", Me = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", a = t ? ", " : "", s = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + s;
    case 1:
      return "◦" + s;
    case 2:
      return "◾" + s;
    case 5:
      var B = Y(e, 48, 57, !0, r);
      return B.length < 4 ? "0" + B : B;
    case 4:
      return XA(e, "〇一二三四五六七八九", n);
    case 6:
      return Ae(e, 1, 3999, Yn, 3, r).toLowerCase();
    case 7:
      return Ae(e, 1, 3999, Yn, 3, r);
    case 8:
      return Y(e, 945, 969, !1, r);
    case 9:
      return Y(e, 97, 122, !1, r);
    case 10:
      return Y(e, 65, 90, !1, r);
    case 11:
      return Y(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Ae(e, 1, 9999, Wn, 3, r);
    case 35:
      return Ae(e, 1, 9999, Wn, 3, r).toLowerCase();
    case 13:
      return Y(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return Y(e, 6112, 6121, !0, r);
    case 15:
      return XA(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return XA(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return KA(e, "零一二三四五六七八九", Zn, "負", n, SA | MA | He);
    case 47:
      return KA(e, "零壹貳參肆伍陸柒捌玖", zn, "負", n, re | SA | MA | He);
    case 42:
      return KA(e, "零一二三四五六七八九", Zn, "负", n, SA | MA | He);
    case 41:
      return KA(e, "零壹贰叁肆伍陆柒捌玖", zn, "负", n, re | SA | MA | He);
    case 26:
      return KA(e, "〇一二三四五六七八九", "十百千万", jn, n, 0);
    case 25:
      return KA(e, "零壱弐参四伍六七八九", "拾百千万", jn, n, re | SA | MA);
    case 31:
      return KA(e, "영일이삼사오육칠팔구", "십백천만", er, a, re | SA | MA);
    case 33:
      return KA(e, "零一二三四五六七八九", "十百千萬", er, a, 0);
    case 32:
      return KA(e, "零壹貳參四五六七八九", "拾百千", er, a, re | SA | MA);
    case 18:
      return Y(e, 2406, 2415, !0, r);
    case 20:
      return Ae(e, 1, 19999, tu, 3, r);
    case 21:
      return Y(e, 2790, 2799, !0, r);
    case 22:
      return Y(e, 2662, 2671, !0, r);
    case 22:
      return Ae(e, 1, 10999, eu, 3, r);
    case 23:
      return XA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return XA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return Y(e, 3302, 3311, !0, r);
    case 28:
      return XA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return XA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return Y(e, 3792, 3801, !0, r);
    case 37:
      return Y(e, 6160, 6169, !0, r);
    case 38:
      return Y(e, 4160, 4169, !0, r);
    case 39:
      return Y(e, 2918, 2927, !0, r);
    case 40:
      return Y(e, 1776, 1785, !0, r);
    case 43:
      return Y(e, 3046, 3055, !0, r);
    case 44:
      return Y(e, 3174, 3183, !0, r);
    case 45:
      return Y(e, 3664, 3673, !0, r);
    case 46:
      return Y(e, 3872, 3881, !0, r);
    case 3:
    default:
      return Y(e, 48, 57, !0, r);
  }
}, os = "data-html2canvas-ignore", qn = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Au(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = ru(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var a = A.defaultView.pageXOffset, s = A.defaultView.pageYOffset, B = n.contentWindow, i = B.document, o = su(n).then(function() {
        return oA(r, void 0, void 0, function() {
          var c, u;
          return sA(this, function(l) {
            switch (l.label) {
              case 0:
                return this.scrolledElements.forEach(cu), B && (B.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (B.scrollY !== t.top || B.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(B.scrollX - t.left, B.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
              case 1:
                l.sent(), l.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, au(i)] : [3, 4];
              case 3:
                l.sent(), l.label = 4;
              case 4:
                return typeof c == "function" ? [2, Promise.resolve().then(function() {
                  return c(i, u);
                }).then(function() {
                  return n;
                })] : [2, n];
            }
          });
        });
      });
      return i.open(), i.write(iu(document.doctype) + "<html></html>"), ou(this.referenceElement.ownerDocument, a, s), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), o;
    }, e.prototype.createElementClone = function(A) {
      if (mr(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (as(A))
        return this.createCanvasClone(A);
      if (Pn(A))
        return this.createVideoClone(A);
      if (Xn(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return br(t) && (br(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Jn(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return tr(A.style, t), t;
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
      (!se(t) || !$l(t) && !t.hasAttribute(os) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !se(t) || !Xn(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, a = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; a; a = a.nextSibling)
        if (se(a) && Bs(a) && typeof a.assignedNodes == "function") {
          var s = a.assignedNodes();
          s.length && s.forEach(function(B) {
            return n.appendChildNode(t, B, r);
          });
        } else
          this.appendChildNode(t, a, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (rs(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && se(A) && (yr(A) || lt(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var a = r.getComputedStyle(A), s = r.getComputedStyle(A, ":before"), B = r.getComputedStyle(A, ":after");
        this.referenceElement === A && yr(n) && (this.clonedReferenceElement = n), Vr(n) && gu(n);
        var i = this.counters.parse(new bn(this.context, a)), o = this.resolvePseudoContent(A, n, s, be.BEFORE);
        Jn(A) && (t = !0), Pn(A) || this.cloneChildNodes(A, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(A, n, B, be.AFTER);
        return c && n.appendChild(c), this.counters.pop(i), (a && (this.options.copyStyles || lt(A)) && !ss(A) || t) && tr(a, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (ht(A) || dt(A)) && (ht(n) || dt(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var a = this;
      if (r) {
        var s = r.content, B = t.ownerDocument;
        if (!(!B || !s || s === "none" || s === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new bn(this.context, r));
          var i = new Zc(this.context, r), o = B.createElement("html2canvaspseudoelement");
          tr(r, o), i.content.forEach(function(u) {
            if (u.type === 0)
              o.appendChild(B.createTextNode(u.value));
            else if (u.type === 22) {
              var l = B.createElement("img");
              l.src = u.value, l.style.opacity = "1", o.appendChild(l);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var w = u.values.filter(G);
                w.length && o.appendChild(B.createTextNode(A.getAttribute(w[0].value) || ""));
              } else if (u.name === "counter") {
                var g = u.values.filter(ie), Q = g[0], C = g[1];
                if (Q && G(Q)) {
                  var f = a.counters.getCounterValue(Q.value), d = C && G(C) ? Hr.parse(a.context, C.value) : 3;
                  o.appendChild(B.createTextNode(Me(f, d, !1)));
                }
              } else if (u.name === "counters") {
                var m = u.values.filter(ie), Q = m[0], y = m[1], C = m[2];
                if (Q && G(Q)) {
                  var I = a.counters.getCounterValues(Q.value), F = C && G(C) ? Hr.parse(a.context, C.value) : 3, K = y && y.type === 0 ? y.value : "", b = I.map(function(z) {
                    return Me(z, F, !1);
                  }).join(K);
                  o.appendChild(B.createTextNode(b));
                }
              }
            } else if (u.type === 20)
              switch (u.value) {
                case "open-quote":
                  o.appendChild(B.createTextNode(yn(i.quotes, a.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(B.createTextNode(yn(i.quotes, --a.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(B.createTextNode(u.value));
              }
          }), o.className = Kr + " " + Lr;
          var c = n === be.BEFORE ? " " + Kr : " " + Lr;
          return lt(t) ? t.className.baseValue += c : t.className += c, o;
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
var ru = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(os, "true"), e.body.appendChild(t), t;
}, nu = function(e) {
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
  return Promise.all([].slice.call(e.images, 0).map(nu));
}, su = function(e) {
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
}, Bu = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], tr = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    Bu.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, iu = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, ou = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, cu = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, lu = ":before", uu = ":after", Kr = "___html2canvas___pseudoelement_before", Lr = "___html2canvas___pseudoelement_after", $n = `{
    content: "" !important;
    display: none !important;
}`, gu = function(e) {
  Qu(e, "." + Kr + lu + $n + `
         .` + Lr + uu + $n);
}, Qu = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, cs = (
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
), wu = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (nr(A) || Fu(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return oA(this, void 0, void 0, function() {
        var t, r, n, a, s = this;
        return sA(this, function(B) {
          switch (B.label) {
            case 0:
              return t = cs.isSameOrigin(A), r = !rr(A) && this._options.useCORS === !0 && nA.SUPPORT_CORS_IMAGES && !t, n = !rr(A) && !t && !nr(A) && typeof this._options.proxy == "string" && nA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !rr(A) && !nr(A) && !n && !r ? [
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
                }, c.onerror = o, (hu(a) || r) && (c.crossOrigin = "anonymous"), c.src = a, c.complete === !0 && setTimeout(function() {
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
        var B = nA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
        i.onload = function() {
          if (i.status === 200)
            if (B === "text")
              a(i.response);
            else {
              var u = new FileReader();
              u.addEventListener("load", function() {
                return a(u.result);
              }, !1), u.addEventListener("error", function(l) {
                return s(l);
              }, !1), u.readAsDataURL(i.response);
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
), fu = /^data:image\/svg\+xml/i, Cu = /^data:image\/.*;base64,/i, Uu = /^data:image\/.*/i, Fu = function(e) {
  return nA.SUPPORT_SVG_DRAWING || !du(e);
}, rr = function(e) {
  return Uu.test(e);
}, hu = function(e) {
  return Cu.test(e);
}, nr = function(e) {
  return e.substr(0, 4) === "blob";
}, du = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || fu.test(e);
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
}, nt = (
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
), dA = function(e) {
  return e.type === 1;
}, pu = (
  /** @class */
  function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = pe(t.borderTopLeftRadius, r.width, r.height), a = n[0], s = n[1], B = pe(t.borderTopRightRadius, r.width, r.height), i = B[0], o = B[1], c = pe(t.borderBottomRightRadius, r.width, r.height), u = c[0], l = c[1], w = pe(t.borderBottomLeftRadius, r.width, r.height), g = w[0], Q = w[1], C = [];
      C.push((a + i) / r.width), C.push((g + u) / r.width), C.push((s + Q) / r.height), C.push((o + l) / r.height);
      var f = Math.max.apply(Math, C);
      f > 1 && (a /= f, s /= f, i /= f, o /= f, u /= f, l /= f, g /= f, Q /= f);
      var d = r.width - i, m = r.height - l, y = r.width - u, I = r.height - Q, F = t.borderTopWidth, K = t.borderRightWidth, b = t.borderBottomWidth, v = t.borderLeftWidth, R = P(t.paddingTop, A.bounds.width), z = P(t.paddingRight, A.bounds.width), j = P(t.paddingBottom, A.bounds.width), S = P(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = a > 0 || s > 0 ? X(r.left + v / 3, r.top + F / 3, a - v / 3, s - F / 3, N.TOP_LEFT) : new p(r.left + v / 3, r.top + F / 3), this.topRightBorderDoubleOuterBox = a > 0 || s > 0 ? X(r.left + d, r.top + F / 3, i - K / 3, o - F / 3, N.TOP_RIGHT) : new p(r.left + r.width - K / 3, r.top + F / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || l > 0 ? X(r.left + y, r.top + m, u - K / 3, l - b / 3, N.BOTTOM_RIGHT) : new p(r.left + r.width - K / 3, r.top + r.height - b / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || Q > 0 ? X(r.left + v / 3, r.top + I, g - v / 3, Q - b / 3, N.BOTTOM_LEFT) : new p(r.left + v / 3, r.top + r.height - b / 3), this.topLeftBorderDoubleInnerBox = a > 0 || s > 0 ? X(r.left + v * 2 / 3, r.top + F * 2 / 3, a - v * 2 / 3, s - F * 2 / 3, N.TOP_LEFT) : new p(r.left + v * 2 / 3, r.top + F * 2 / 3), this.topRightBorderDoubleInnerBox = a > 0 || s > 0 ? X(r.left + d, r.top + F * 2 / 3, i - K * 2 / 3, o - F * 2 / 3, N.TOP_RIGHT) : new p(r.left + r.width - K * 2 / 3, r.top + F * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || l > 0 ? X(r.left + y, r.top + m, u - K * 2 / 3, l - b * 2 / 3, N.BOTTOM_RIGHT) : new p(r.left + r.width - K * 2 / 3, r.top + r.height - b * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || Q > 0 ? X(r.left + v * 2 / 3, r.top + I, g - v * 2 / 3, Q - b * 2 / 3, N.BOTTOM_LEFT) : new p(r.left + v * 2 / 3, r.top + r.height - b * 2 / 3), this.topLeftBorderStroke = a > 0 || s > 0 ? X(r.left + v / 2, r.top + F / 2, a - v / 2, s - F / 2, N.TOP_LEFT) : new p(r.left + v / 2, r.top + F / 2), this.topRightBorderStroke = a > 0 || s > 0 ? X(r.left + d, r.top + F / 2, i - K / 2, o - F / 2, N.TOP_RIGHT) : new p(r.left + r.width - K / 2, r.top + F / 2), this.bottomRightBorderStroke = u > 0 || l > 0 ? X(r.left + y, r.top + m, u - K / 2, l - b / 2, N.BOTTOM_RIGHT) : new p(r.left + r.width - K / 2, r.top + r.height - b / 2), this.bottomLeftBorderStroke = g > 0 || Q > 0 ? X(r.left + v / 2, r.top + I, g - v / 2, Q - b / 2, N.BOTTOM_LEFT) : new p(r.left + v / 2, r.top + r.height - b / 2), this.topLeftBorderBox = a > 0 || s > 0 ? X(r.left, r.top, a, s, N.TOP_LEFT) : new p(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? X(r.left + d, r.top, i, o, N.TOP_RIGHT) : new p(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || l > 0 ? X(r.left + y, r.top + m, u, l, N.BOTTOM_RIGHT) : new p(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || Q > 0 ? X(r.left, r.top + I, g, Q, N.BOTTOM_LEFT) : new p(r.left, r.top + r.height), this.topLeftPaddingBox = a > 0 || s > 0 ? X(r.left + v, r.top + F, Math.max(0, a - v), Math.max(0, s - F), N.TOP_LEFT) : new p(r.left + v, r.top + F), this.topRightPaddingBox = i > 0 || o > 0 ? X(r.left + Math.min(d, r.width - K), r.top + F, d > r.width + K ? 0 : Math.max(0, i - K), Math.max(0, o - F), N.TOP_RIGHT) : new p(r.left + r.width - K, r.top + F), this.bottomRightPaddingBox = u > 0 || l > 0 ? X(r.left + Math.min(y, r.width - v), r.top + Math.min(m, r.height - b), Math.max(0, u - K), Math.max(0, l - b), N.BOTTOM_RIGHT) : new p(r.left + r.width - K, r.top + r.height - b), this.bottomLeftPaddingBox = g > 0 || Q > 0 ? X(r.left + v, r.top + Math.min(I, r.height - b), Math.max(0, g - v), Math.max(0, Q - b), N.BOTTOM_LEFT) : new p(r.left + v, r.top + r.height - b), this.topLeftContentBox = a > 0 || s > 0 ? X(r.left + v + S, r.top + F + R, Math.max(0, a - (v + S)), Math.max(0, s - (F + R)), N.TOP_LEFT) : new p(r.left + v + S, r.top + F + R), this.topRightContentBox = i > 0 || o > 0 ? X(r.left + Math.min(d, r.width + v + S), r.top + F + R, d > r.width + v + S ? 0 : i - v + S, o - (F + R), N.TOP_RIGHT) : new p(r.left + r.width - (K + z), r.top + F + R), this.bottomRightContentBox = u > 0 || l > 0 ? X(r.left + Math.min(y, r.width - (v + S)), r.top + Math.min(m, r.height + F + R), Math.max(0, u - (K + z)), l - (b + j), N.BOTTOM_RIGHT) : new p(r.left + r.width - (K + z), r.top + r.height - (b + j)), this.bottomLeftContentBox = g > 0 || Q > 0 ? X(r.left + v + S, r.top + I, Math.max(0, g - (v + S)), Q - (b + j), N.BOTTOM_LEFT) : new p(r.left + v + S, r.top + r.height - (b + j));
    }
    return e;
  }()
), N;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(N || (N = {}));
var X = function(e, A, t, r, n) {
  var a = 4 * ((Math.sqrt(2) - 1) / 3), s = t * a, B = r * a, i = e + t, o = A + r;
  switch (n) {
    case N.TOP_LEFT:
      return new nt(new p(e, o), new p(e, o - B), new p(i - s, A), new p(i, A));
    case N.TOP_RIGHT:
      return new nt(new p(e, A), new p(e + s, A), new p(i, o - B), new p(i, o));
    case N.BOTTOM_RIGHT:
      return new nt(new p(i, A), new p(i, A + B), new p(e + s, o), new p(e, o));
    case N.BOTTOM_LEFT:
    default:
      return new nt(new p(i, o), new p(i - s, o), new p(e, A + B), new p(e, A));
  }
}, pt = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Eu = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, Et = function(e) {
  return [
    e.topLeftPaddingBox,
    e.topRightPaddingBox,
    e.bottomRightPaddingBox,
    e.bottomLeftPaddingBox
  ];
}, Hu = (
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
), mu = (
  /** @class */
  function() {
    function e(A) {
      this.opacity = A, this.type = 2, this.target = 6;
    }
    return e;
  }()
), vu = function(e) {
  return e.type === 0;
}, ls = function(e) {
  return e.type === 1;
}, Iu = function(e) {
  return e.type === 2;
}, Aa = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, yu = function(e, A, t, r, n) {
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
}, us = (
  /** @class */
  function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), gs = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new pu(this.container), this.container.styles.opacity < 1 && this.effects.push(new mu(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, a = this.container.styles.transform;
        this.effects.push(new Hu(r, n, a));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = pt(this.curves), B = Et(this.curves);
        Aa(s, B) ? this.effects.push(new at(
          s,
          6
          /* CONTENT */
        )) : (this.effects.push(new at(
          s,
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
        var a = r.effects.filter(function(i) {
          return !ls(i);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, a), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var s = pt(r.curves), B = Et(r.curves);
            Aa(s, B) || n.unshift(new at(
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
        return eA(i.target, A);
      });
    }, e;
  }()
), xr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var a = eA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), s = eA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), B = new gs(n, e);
    eA(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(B);
    var i = eA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (a || s) {
      var o = a || n.styles.isPositioned() ? t : A, c = new us(B);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var u = n.styles.zIndex.order;
        if (u < 0) {
          var l = 0;
          o.negativeZIndex.some(function(g, Q) {
            return u > g.element.container.styles.zIndex.order ? (l = Q, !1) : l > 0;
          }), o.negativeZIndex.splice(l, 0, c);
        } else if (u > 0) {
          var w = 0;
          o.positiveZIndex.some(function(g, Q) {
            return u >= g.element.container.styles.zIndex.order ? (w = Q + 1, !1) : w > 0;
          }), o.positiveZIndex.splice(w, 0, c);
        } else
          o.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
      } else
        n.styles.isFloating() ? o.nonPositionedFloats.push(c) : o.nonPositionedInlineLevel.push(c);
      xr(B, c, a ? c : t, i);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(B) : A.nonInlineLevel.push(B), xr(B, A, t, i);
    eA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && Qs(n, i);
  });
}, Qs = function(e, A) {
  for (var t = e instanceof Ir ? e.start : 1, r = e instanceof Ir ? e.reversed : !1, n = 0; n < A.length; n++) {
    var a = A[n];
    a.container instanceof ja && typeof a.container.value == "number" && a.container.value !== 0 && (t = a.container.value), a.listValue = Me(t, a.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, bu = function(e) {
  var A = new gs(e, null), t = new us(A), r = [];
  return xr(A, t, t, r), Qs(A.container, r), t;
}, ea = function(e, A) {
  switch (A) {
    case 0:
      return EA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return EA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return EA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return EA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Ku = function(e, A) {
  switch (A) {
    case 0:
      return EA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return EA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return EA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return EA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, Lu = function(e, A) {
  switch (A) {
    case 0:
      return EA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return EA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return EA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return EA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, xu = function(e, A) {
  switch (A) {
    case 0:
      return st(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return st(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return st(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return st(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, st = function(e, A) {
  var t = [];
  return dA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), dA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, EA = function(e, A, t, r) {
  var n = [];
  return dA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), dA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), dA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), dA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, ws = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Ht = function(e) {
  var A = e.styles, t = e.bounds, r = P(A.paddingLeft, t.width), n = P(A.paddingRight, t.width), a = P(A.paddingTop, t.width), s = P(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, a + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + a + s));
}, Du = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Ht(A) : ws(A);
}, Tu = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Ht(A) : ws(A);
}, ar = function(e, A, t) {
  var r = Du(ne(e.styles.backgroundOrigin, A), e), n = Tu(ne(e.styles.backgroundClip, A), e), a = Su(ne(e.styles.backgroundSize, A), t, r), s = a[0], B = a[1], i = pe(ne(e.styles.backgroundPosition, A), r.width - s, r.height - B), o = Mu(ne(e.styles.backgroundRepeat, A), i, a, r, n), c = Math.round(r.left + i[0]), u = Math.round(r.top + i[1]);
  return [o, c, u, s, B];
}, te = function(e) {
  return G(e) && e.value === Be.AUTO;
}, Bt = function(e) {
  return typeof e == "number";
}, Su = function(e, A, t) {
  var r = A[0], n = A[1], a = A[2], s = e[0], B = e[1];
  if (!s)
    return [0, 0];
  if (Z(s) && B && Z(B))
    return [P(s, t.width), P(B, t.height)];
  var i = Bt(a);
  if (G(s) && (s.value === Be.CONTAIN || s.value === Be.COVER)) {
    if (Bt(a)) {
      var o = t.width / t.height;
      return o < a != (s.value === Be.COVER) ? [t.width, t.width / a] : [t.height * a, t.height];
    }
    return [t.width, t.height];
  }
  var c = Bt(r), u = Bt(n), l = c || u;
  if (te(s) && (!B || te(B))) {
    if (c && u)
      return [r, n];
    if (!i && !l)
      return [t.width, t.height];
    if (l && i) {
      var w = c ? r : n * a, g = u ? n : r / a;
      return [w, g];
    }
    var Q = c ? r : t.width, C = u ? n : t.height;
    return [Q, C];
  }
  if (i) {
    var f = 0, d = 0;
    return Z(s) ? f = P(s, t.width) : Z(B) && (d = P(B, t.height)), te(s) ? f = d * a : (!B || te(B)) && (d = f / a), [f, d];
  }
  var m = null, y = null;
  if (Z(s) ? m = P(s, t.width) : B && Z(B) && (y = P(B, t.height)), m !== null && (!B || te(B)) && (y = c && u ? m / r * n : t.height), y !== null && te(s) && (m = c && u ? y / n * r : t.width), m !== null && y !== null)
    return [m, y];
  throw new Error("Unable to calculate background-size for element");
}, ne = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Mu = function(e, A, t, r, n) {
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
}, Ou = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ta = "Hidden Text", Nu = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), a = this._document.createElement("span"), s = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", s.appendChild(r), n.src = Ou, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", a.style.fontFamily = A, a.style.fontSize = t, a.style.margin = "0", a.style.padding = "0", a.appendChild(this._document.createTextNode(ta)), r.appendChild(a), r.appendChild(n);
      var B = n.offsetTop - a.offsetTop + 2;
      r.removeChild(a), r.appendChild(this._document.createTextNode(ta)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var i = n.offsetTop - r.offsetTop + 2;
      return s.removeChild(r), { baseline: B, middle: i };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), fs = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), Ru = 1e4, Gu = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new Nu(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), Iu(t) && (this.ctx.globalAlpha = t.opacity), vu(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), ls(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return oA(this, void 0, void 0, function() {
        var r;
        return sA(this, function(n) {
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
        return sA(this, function(r) {
          switch (r.label) {
            case 0:
              if (eA(
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
        var s = Rr(t.text);
        s.reduce(function(B, i) {
          return a.ctx.fillText(i, B, t.bounds.top + n), B + a.ctx.measureText(i).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(s) {
        return s === "normal" || s === "small-caps";
      }).join(""), n = Xu(t.fontFamily).join(", "), a = Ne(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, a, n].join(" "),
        n,
        a
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return oA(this, void 0, void 0, function() {
        var n, a, s, B, i, o, c, u, l = this;
        return sA(this, function(w) {
          return n = this.createFontStyle(r), a = n[0], s = n[1], B = n[2], this.ctx.font = a, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(s, B), o = i.baseline, c = i.middle, u = r.paintOrder, t.textBounds.forEach(function(g) {
            u.forEach(function(Q) {
              switch (Q) {
                case 0:
                  l.ctx.fillStyle = tA(r.color), l.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  var C = r.textShadow;
                  C.length && g.text.trim().length && (C.slice(0).reverse().forEach(function(f) {
                    l.ctx.shadowColor = tA(f.color), l.ctx.shadowOffsetX = f.offsetX.number * l.options.scale, l.ctx.shadowOffsetY = f.offsetY.number * l.options.scale, l.ctx.shadowBlur = f.blur.number, l.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  }), l.ctx.shadowColor = "", l.ctx.shadowOffsetX = 0, l.ctx.shadowOffsetY = 0, l.ctx.shadowBlur = 0), r.textDecorationLine.length && (l.ctx.fillStyle = tA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(f) {
                    switch (f) {
                      case 1:
                        l.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top + o), g.bounds.width, 1);
                        break;
                      case 2:
                        l.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top), g.bounds.width, 1);
                        break;
                      case 3:
                        l.ctx.fillRect(g.bounds.left, Math.ceil(g.bounds.top + c), g.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && g.text.trim().length && (l.ctx.strokeStyle = tA(r.webkitTextStrokeColor), l.ctx.lineWidth = r.webkitTextStrokeWidth, l.ctx.lineJoin = window.chrome ? "miter" : "round", l.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + o)), l.ctx.strokeStyle = "", l.ctx.lineWidth = 0, l.ctx.lineJoin = "miter";
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
        var a = Ht(t), s = Et(r);
        this.path(s), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, a.left, a.top, a.width, a.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n, a, s, B, i, d, d, o, c, u, l, y, w, g, I, Q, C, f, d, m, y, I;
        return sA(this, function(F) {
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
              if (!(r instanceof Wa))
                return [3, 8];
              F.label = 5;
            case 5:
              return F.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return d = F.sent(), this.renderReplacedElement(r, n, d), [3, 8];
            case 7:
              return F.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Za && this.renderReplacedElement(r, n, r.canvas), !(r instanceof za))
                return [3, 12];
              F.label = 9;
            case 9:
              return F.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return d = F.sent(), this.renderReplacedElement(r, n, d), [3, 12];
            case 11:
              return F.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof As && r.tree ? (o = new A(this.context, {
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
              if (r instanceof Gr && (u = Math.min(r.bounds.width, r.bounds.height), r.type === Ut ? r.checked && (this.ctx.save(), this.path([
                new p(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new p(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new p(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new p(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new p(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new p(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new p(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = tA(_n), this.ctx.fill(), this.ctx.restore()) : r.type === Ft && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = tA(_n), this.ctx.fill(), this.ctx.restore())), Vu(r) && r.value.length) {
                switch (l = this.createFontStyle(a), y = l[0], w = l[1], g = this.fontMetrics.getMetrics(y, w).baseline, this.ctx.font = y, this.ctx.fillStyle = tA(a.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = _u(r.styles.textAlign), I = Ht(r), Q = 0, r.styles.textAlign) {
                  case 1:
                    Q += I.width / 2;
                    break;
                  case 2:
                    Q += I.width;
                    break;
                }
                C = I.add(Q, 0, 0, -I.height / 2 + 1), this.ctx.save(), this.path([
                  new p(I.left, I.top),
                  new p(I.left + I.width, I.top),
                  new p(I.left + I.width, I.top + I.height),
                  new p(I.left, I.top + I.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ye(r.value, C), a.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!eA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (f = r.styles.listStyleImage, f.type !== 0)
                return [3, 18];
              d = void 0, m = f.url, F.label = 15;
            case 15:
              return F.trys.push([15, 17, , 18]), [4, this.context.cache.match(m)];
            case 16:
              return d = F.sent(), this.ctx.drawImage(d, r.bounds.left - (d.width + 10), r.bounds.top), [3, 18];
            case 17:
              return F.sent(), this.context.logger.error("Error loading list-style-image " + m), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (y = this.createFontStyle(a)[0], this.ctx.font = y, this.ctx.fillStyle = tA(a.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", I = new xA(r.bounds.left, r.bounds.top + P(r.styles.paddingTop, r.bounds.width), r.bounds.width, vn(a.lineHeight, a.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ye(t.listValue, I), a.letterSpacing, vn(a.lineHeight, a.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), F.label = 20;
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
        var r, n, f, a, s, f, B, i, f, o, c, f, u, l, f, w, g, f, Q, C, f;
        return sA(this, function(d) {
          switch (d.label) {
            case 0:
              if (eA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              d.sent(), r = 0, n = t.negativeZIndex, d.label = 2;
            case 2:
              return r < n.length ? (f = n[r], [4, this.renderStack(f)]) : [3, 5];
            case 3:
              d.sent(), d.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              d.sent(), a = 0, s = t.nonInlineLevel, d.label = 7;
            case 7:
              return a < s.length ? (f = s[a], [4, this.renderNode(f)]) : [3, 10];
            case 8:
              d.sent(), d.label = 9;
            case 9:
              return a++, [3, 7];
            case 10:
              B = 0, i = t.nonPositionedFloats, d.label = 11;
            case 11:
              return B < i.length ? (f = i[B], [4, this.renderStack(f)]) : [3, 14];
            case 12:
              d.sent(), d.label = 13;
            case 13:
              return B++, [3, 11];
            case 14:
              o = 0, c = t.nonPositionedInlineLevel, d.label = 15;
            case 15:
              return o < c.length ? (f = c[o], [4, this.renderStack(f)]) : [3, 18];
            case 16:
              d.sent(), d.label = 17;
            case 17:
              return o++, [3, 15];
            case 18:
              u = 0, l = t.inlineLevel, d.label = 19;
            case 19:
              return u < l.length ? (f = l[u], [4, this.renderNode(f)]) : [3, 22];
            case 20:
              d.sent(), d.label = 21;
            case 21:
              return u++, [3, 19];
            case 22:
              w = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, d.label = 23;
            case 23:
              return w < g.length ? (f = g[w], [4, this.renderStack(f)]) : [3, 26];
            case 24:
              d.sent(), d.label = 25;
            case 25:
              return w++, [3, 23];
            case 26:
              Q = 0, C = t.positiveZIndex, d.label = 27;
            case 27:
              return Q < C.length ? (f = C[Q], [4, this.renderStack(f)]) : [3, 30];
            case 28:
              d.sent(), d.label = 29;
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
      t.forEach(function(n, a) {
        var s = dA(n) ? n.start : n;
        a === 0 ? r.ctx.moveTo(s.x, s.y) : r.ctx.lineTo(s.x, s.y), dA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
      return oA(this, void 0, void 0, function() {
        var r, n, a, s, B, i;
        return sA(this, function(o) {
          switch (o.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var u, l, w, R, q, $, S, J, b, g, R, q, $, S, J, Q, C, f, d, m, y, I, F, K, b, v, R, z, j, S, J, fA, q, $, CA, iA, uA, UA, FA, D, V, T;
                return sA(this, function(k) {
                  switch (k.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      u = void 0, l = c.url, k.label = 1;
                    case 1:
                      return k.trys.push([1, 3, , 4]), [4, a.context.cache.match(l)];
                    case 2:
                      return u = k.sent(), [3, 4];
                    case 3:
                      return k.sent(), a.context.logger.error("Error loading background-image " + l), [3, 4];
                    case 4:
                      return u && (w = ar(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), R = w[0], q = w[1], $ = w[2], S = w[3], J = w[4], b = a.ctx.createPattern(a.resizeImage(u, S, J), "repeat"), a.renderRepeat(R, b, q, $)), [3, 6];
                    case 5:
                      vo(c) ? (g = ar(t, r, [null, null, null]), R = g[0], q = g[1], $ = g[2], S = g[3], J = g[4], Q = ho(c.angle, S, J), C = Q[0], f = Q[1], d = Q[2], m = Q[3], y = Q[4], I = document.createElement("canvas"), I.width = S, I.height = J, F = I.getContext("2d"), K = F.createLinearGradient(f, m, d, y), Hn(c.stops, C).forEach(function(AA) {
                        return K.addColorStop(AA.stop, tA(AA.color));
                      }), F.fillStyle = K, F.fillRect(0, 0, S, J), S > 0 && J > 0 && (b = a.ctx.createPattern(I, "repeat"), a.renderRepeat(R, b, q, $))) : Io(c) && (v = ar(t, r, [
                        null,
                        null,
                        null
                      ]), R = v[0], z = v[1], j = v[2], S = v[3], J = v[4], fA = c.position.length === 0 ? [Mr] : c.position, q = P(fA[0], S), $ = P(fA[fA.length - 1], J), CA = po(c, q, $, S, J), iA = CA[0], uA = CA[1], iA > 0 && uA > 0 && (UA = a.ctx.createRadialGradient(z + q, j + $, 0, z + q, j + $, iA), Hn(c.stops, iA * 2).forEach(function(AA) {
                        return UA.addColorStop(AA.stop, tA(AA.color));
                      }), a.path(R), a.ctx.fillStyle = UA, iA !== uA ? (FA = t.bounds.left + 0.5 * t.bounds.width, D = t.bounds.top + 0.5 * t.bounds.height, V = uA / iA, T = 1 / V, a.ctx.save(), a.ctx.translate(FA, D), a.ctx.transform(1, 0, 0, V, 0, 0), a.ctx.translate(-FA, -D), a.ctx.fillRect(z, T * (j - D) + D, S, J * T), a.ctx.restore()) : a.ctx.fill())), k.label = 6;
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
      return oA(this, void 0, void 0, function() {
        return sA(this, function(a) {
          return this.path(ea(n, r)), this.ctx.fillStyle = tA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, n, a) {
      return oA(this, void 0, void 0, function() {
        var s, B;
        return sA(this, function(i) {
          switch (i.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, a)] : [3, 2];
            case 1:
              return i.sent(), [
                2
                /*return*/
              ];
            case 2:
              return s = Ku(a, n), this.path(s), this.ctx.fillStyle = tA(t), this.ctx.fill(), B = Lu(a, n), this.path(B), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n, a, s, B, i, o, c, u = this;
        return sA(this, function(l) {
          switch (l.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !kA(r.backgroundColor) || r.backgroundImage.length, a = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], s = ku(ne(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), kA(r.backgroundColor) || (this.ctx.fillStyle = tA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              l.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(w) {
                u.ctx.save();
                var g = pt(t.curves), Q = w.inset ? 0 : Ru, C = yu(g, -Q + (w.inset ? 1 : -1) * w.spread.number, (w.inset ? 1 : -1) * w.spread.number, w.spread.number * (w.inset ? -2 : 2), w.spread.number * (w.inset ? -2 : 2));
                w.inset ? (u.path(g), u.ctx.clip(), u.mask(C)) : (u.mask(g), u.ctx.clip(), u.path(C)), u.ctx.shadowOffsetX = w.offsetX.number + Q, u.ctx.shadowOffsetY = w.offsetY.number, u.ctx.shadowColor = tA(w.color), u.ctx.shadowBlur = w.blur.number, u.ctx.fillStyle = w.inset ? tA(w.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), l.label = 2;
            case 2:
              B = 0, i = 0, o = a, l.label = 3;
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
              return l.sent(), [3, 11];
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
              return l.sent(), [3, 11];
            case 7:
              return c.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, B, t.curves)];
            case 8:
              return l.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(c.color, B, t.curves)];
            case 10:
              l.sent(), l.label = 11;
            case 11:
              B++, l.label = 12;
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
      return oA(this, void 0, void 0, function() {
        var B, i, o, c, u, l, w, g, Q, C, f, d, m, y, I, F, I, F;
        return sA(this, function(K) {
          return this.ctx.save(), B = xu(a, n), i = ea(a, n), s === 2 && (this.path(i), this.ctx.clip()), dA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), dA(i[1]) ? (u = i[1].end.x, l = i[1].end.y) : (u = i[1].x, l = i[1].y), n === 0 || n === 2 ? w = Math.abs(o - u) : w = Math.abs(c - l), this.ctx.beginPath(), s === 3 ? this.formatPath(B) : this.formatPath(i.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, Q = r < 3 ? r * 2 : r, s === 3 && (g = r, Q = r), C = !0, w <= g * 2 ? C = !1 : w <= g * 2 + Q ? (f = w / (2 * g + Q), g *= f, Q *= f) : (d = Math.floor((w + Q) / (g + Q)), m = (w - d * g) / (d - 1), y = (w - (d + 1) * g) / d, Q = y <= 0 || Math.abs(Q - m) < Math.abs(Q - y) ? m : y), C && (s === 3 ? this.ctx.setLineDash([0, g + Q]) : this.ctx.setLineDash([g, Q])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = tA(t), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (dA(i[0]) && (I = i[3], F = i[0], this.ctx.beginPath(), this.formatPath([new p(I.end.x, I.end.y), new p(F.start.x, F.start.y)]), this.ctx.stroke()), dA(i[1]) && (I = i[1], F = i[2], this.ctx.beginPath(), this.formatPath([new p(I.end.x, I.end.y), new p(F.start.x, F.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return oA(this, void 0, void 0, function() {
        var r;
        return sA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = tA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = bu(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(fs)
), Vu = function(e) {
  return e instanceof $a || e instanceof qa ? !0 : e instanceof Gr && e.type !== Ft && e.type !== Ut;
}, ku = function(e, A) {
  switch (e) {
    case 0:
      return pt(A);
    case 2:
      return Eu(A);
    case 1:
    default:
      return Et(A);
  }
}, _u = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, Pu = ["-apple-system", "system-ui"], Xu = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return Pu.indexOf(A) === -1;
  }) : e;
}, Ju = (
  /** @class */
  function(e) {
    mA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return A.prototype.render = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n;
        return sA(this, function(a) {
          switch (a.label) {
            case 0:
              return r = vr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Yu(r)];
            case 1:
              return n = a.sent(), this.options.backgroundColor && (this.ctx.fillStyle = tA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(fs)
), Yu = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Wu = (
  /** @class */
  function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Re([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Re([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Re([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Re([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  }()
), Zu = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Wu({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new wu(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), zu = function(e, A) {
  return A === void 0 && (A = {}), ju(e, A);
};
typeof window < "u" && cs.setContext(window);
var ju = function(e, A) {
  return oA(void 0, void 0, void 0, function() {
    var t, r, n, a, s, B, i, o, c, u, l, w, g, Q, C, f, d, m, y, I, K, F, K, b, v, R, z, j, S, J, fA, q, $, CA, iA, uA, UA, FA, D, V;
    return sA(this, function(T) {
      switch (T.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (b = A.allowTaint) !== null && b !== void 0 ? b : !1,
            imageTimeout: (v = A.imageTimeout) !== null && v !== void 0 ? v : 15e3,
            proxy: A.proxy,
            useCORS: (R = A.useCORS) !== null && R !== void 0 ? R : !1
          }, a = lr({ logging: (z = A.logging) !== null && z !== void 0 ? z : !0, cache: A.cache }, n), s = {
            windowWidth: (j = A.windowWidth) !== null && j !== void 0 ? j : r.innerWidth,
            windowHeight: (S = A.windowHeight) !== null && S !== void 0 ? S : r.innerHeight,
            scrollX: (J = A.scrollX) !== null && J !== void 0 ? J : r.pageXOffset,
            scrollY: (fA = A.scrollY) !== null && fA !== void 0 ? fA : r.pageYOffset
          }, B = new xA(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight), i = new Zu(a, B), o = (q = A.foreignObjectRendering) !== null && q !== void 0 ? q : !1, c = {
            allowTaint: ($ = A.allowTaint) !== null && $ !== void 0 ? $ : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + B.width + "x" + B.height + " scrolled to " + -B.left + "," + -B.top), u = new qn(i, e, c), l = u.clonedReferenceElement, l ? [4, u.toIFrame(t, B)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return w = T.sent(), g = Vr(l) || ql(l) ? IB(l.ownerDocument) : mt(i, l), Q = g.width, C = g.height, f = g.left, d = g.top, m = qu(i, l, A.backgroundColor), y = {
            canvas: A.canvas,
            backgroundColor: m,
            scale: (iA = (CA = A.scale) !== null && CA !== void 0 ? CA : r.devicePixelRatio) !== null && iA !== void 0 ? iA : 1,
            x: ((uA = A.x) !== null && uA !== void 0 ? uA : 0) + f,
            y: ((UA = A.y) !== null && UA !== void 0 ? UA : 0) + d,
            width: (FA = A.width) !== null && FA !== void 0 ? FA : Math.ceil(Q),
            height: (D = A.height) !== null && D !== void 0 ? D : Math.ceil(C)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), K = new Ju(i, y), [4, K.render(l)]) : [3, 3];
        case 2:
          return I = T.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + f + "," + d + " with size " + Q + "x" + C + " using computed rendering"), i.logger.debug("Starting DOM parsing"), F = ts(i, l), m === F.styles.backgroundColor && (F.styles.backgroundColor = LA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + y.x + "," + y.y + " with size " + y.width + "x" + y.height), K = new Gu(i, y), [4, K.render(F)];
        case 4:
          I = T.sent(), T.label = 5;
        case 5:
          return (!((V = A.removeContainer) !== null && V !== void 0) || V) && (qn.destroy(w) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, I];
      }
    });
  });
}, qu = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? ve(e, getComputedStyle(r.documentElement).backgroundColor) : LA.TRANSPARENT, a = r.body ? ve(e, getComputedStyle(r.body).backgroundColor) : LA.TRANSPARENT, s = typeof t == "string" ? ve(e, t) : t === null ? LA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? kA(n) ? kA(a) ? s : a : n : s;
};
const ut = {
  pdf: "Download PDF",
  image: "Download Image",
  csv: "Download Data (CSV)",
  link: "Link to Dataset"
}, $u = (e, A) => {
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
}, Cs = (e, A, t) => {
  const r = document.querySelector(`[data-download-id=${t}]`), n = (B) => {
    var i, o;
    return (i = B == null ? void 0 : B.dashboard) != null && i.title ? B.dashboard.title.replace(/\s+/g, "-").toLowerCase() + "-" + a.getDate() + a.getMonth() + a.getFullYear() : (o = B == null ? void 0 : B.general) != null && o.title ? B.general.title.replace(/\s+/g, "-").toLowerCase() + "-" + a.getDate() + a.getMonth() + a.getFullYear() : B != null && B.title ? B.title.replace(/\s+/g, "-").toLowerCase() + "-" + a.getDate() + a.getMonth() + a.getFullYear() : "no-title";
  }, a = /* @__PURE__ */ new Date(), s = n(e);
  switch (A) {
    case "image":
      zu(r, { ignoreElements: (B) => {
        var i;
        return ((i = B.className) == null ? void 0 : i.indexOf) && B.className.search(/download-buttons|download-links|data-table-container/) !== -1;
      } }).then((B) => {
        $u(B.toDataURL(), s + ".png");
      });
      return;
    case "pdf":
      console.warn("COVE: pdf downloads disabled");
      break;
    default:
      console.warn("COVE: generateMedia param 2 type must be 'image' or 'pdf'");
      break;
  }
}, Ag = (e) => e != null && e.headerColor ? e.headerColor : e != null && e.theme ? e.theme : "theme-notFound", eg = ({ state: e, text: A, type: t, title: r, elementToCapture: n }) => {
  const a = ["btn", "btn-download", `${Ag(e)}`];
  return /* @__PURE__ */ h.createElement("button", { className: a.join(" "), title: r, onClick: () => Cs(e, t, n), style: { lineHeight: "1.4em" } }, ut[t]);
}, tg = ({ config: e, dashboardDataConfig: A }) => {
  var r;
  let t = A || e;
  return t.dataFileSourceType === "url" && t.dataFileName && e.table.showDownloadUrl ? /* @__PURE__ */ h.createElement("a", { href: t.dataFileName, title: ut.link, target: "_blank" }, ut.link) : (r = e == null ? void 0 : e.table) != null && r.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ h.createElement("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank" }, ut.link) : null;
}, rg = ({ children: e, classes: A }) => /* @__PURE__ */ h.createElement("section", { className: A.join(" ") }, /* @__PURE__ */ h.createElement("span", null, e)), oe = () => null;
oe.Section = rg;
oe.Link = tg;
oe.Button = eg;
oe.generateMedia = Cs;
const ng = ({ rawData: e, fileName: A, headerColor: t, skipId: r }) => {
  const n = ds.unparse(e), a = new Blob([n], { type: "text/csv;charset=utf-8;" }), s = () => {
    typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(a, A);
  };
  return /* @__PURE__ */ h.createElement("a", { download: A, type: "button", onClick: s, href: URL.createObjectURL(a), "aria-label": "Download this data in a CSV file format.", className: `${t} no-border`, id: `${r}`, "data-html2canvas-ignore": !0, role: "button" }, "Download Data (CSV)");
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
}, ra = (e) => {
  if (typeof e != "string" || !isNaN(Number(e)))
    return e;
  const A = e.toUpperCase();
  return ["U.S. VIRGIN ISLANDS", "VI", "US VIRGIN ISLANDS", "VIRGIN ISLANDS"].includes(A) ? "U.S. VIRGIN ISLANDS" : ag[A] || e;
}, gt = (e, A, t, r) => {
  var c;
  let n = e, a = A;
  if (r.type === "map" && (n = ra(e), a = ra(A), String(n).toLowerCase().includes("region") && String(a).toLowerCase().includes("region"))) {
    const u = parseInt(e.match(/\d+$/)[0], 10), l = parseInt(A.match(/\d+$/)[0], 10);
    return t.asc ? Number(l) - Number(u) : Number(u) - Number(l);
  }
  n = n === !1 || n === !0 || n === null ? "" : n, a = a === !1 || a === !0 || a === null ? "" : a;
  const s = String(n).trim(), B = String(a).trim();
  if (((c = r.xAxis) == null ? void 0 : c.dataKey) === t.column && r.xAxis.type === "date") {
    let u = or(r.xAxis.dateParseFormat, s), l = or(r.xAxis.dateParseFormat, B);
    return u && u.getTime && (u = u.getTime()), l && l.getTime && (l = l.getTime()), t.asc ? l - u : u - l;
  }
  const i = !isNaN(Number(n)) && n !== void 0 && n !== null && s !== "", o = !isNaN(Number(a)) && a !== void 0 && a !== null && B !== "";
  return s === "" && B !== "" ? t.asc ? 1 : -1 : s !== "" && B === "" ? t.asc ? -1 : 1 : i && o ? t.asc ? Number(a) - Number(n) : Number(n) - Number(a) : i ? t.asc ? 1 : -1 : o ? t.asc ? -1 : 1 : t.asc ? B.localeCompare(s) : s.localeCompare(B);
}, sg = (e, A) => {
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
  var i, o, c, u, l, w, g;
  if (t.visualizationType === "Sankey" || (i = r == null ? void 0 : r[0]) != null && i.tableData)
    return r[e][A];
  const n = r[e];
  let a, s = n[A];
  if (A === ((o = t.xAxis) == null ? void 0 : o.dataKey))
    a = ((c = t.xAxis) == null ? void 0 : c.type) === "date" ? vB(((u = t.table) == null ? void 0 : u.dateDisplayFormat) || ((l = t.xAxis) == null ? void 0 : l.dateDisplayFormat), or((w = t.xAxis) == null ? void 0 : w.dateParseFormat, s)) : s;
  else {
    let Q = "left", C = t.series ? t.series.filter((m) => (m == null ? void 0 : m.axis) === "Left") : [], f = t.series ? t.series.filter((m) => (m == null ? void 0 : m.axis) === "Right") : [];
    C.map((m) => {
      m.dataKey === A && (Q = "left");
    }), f.map((m) => {
      m.dataKey === A && (Q = "right");
    });
    let d = sg(A, t);
    d ? a = t.dataFormat ? tn(r[e][A], Q, !1, t, d) : r[e][A] : a = t.dataFormat ? tn(r[e][A], Q, !1, t) : r[e][A];
  }
  return (g = t.preliminaryData) == null || g.forEach((Q) => {
    var I, F, K, b;
    const C = String(Q.value) === String(s), f = !Q.column || Q.column === A, d = (F = (I = t.runtime) == null ? void 0 : I.barSeriesKeys) == null ? void 0 : F.includes(A), m = (b = (K = t.runtime) == null ? void 0 : K.lineSeriesKeys) == null ? void 0 : b.includes(A), y = t.table.showSuppressedSymbol;
    if (C && f && Q.displayTable && Q.type === "suppression")
      switch (t.visualizationType) {
        case "Combo":
          a = d && y ? Q.iconCode : m && y ? Q.lineCode : "";
          break;
        case "Bar":
          a = y ? Q.iconCode : "";
          break;
        case "Line":
          a = y ? Q.lineCode : "";
          break;
      }
  }), t.table.showMissingDataLabel && !s ? "N/A" : a;
}, Bg = (e, A) => {
  const r = Object.values(A.columns || {}).find((n) => n.name === e);
  return r != null && r.label ? r.label : e;
}, Us = (e, A) => {
  var a, s, B;
  const t = (a = A.series) == null ? void 0 : a.find((i) => i.dataKey === e);
  if (t != null && t.name)
    return t.name;
  if (A.runtimeSeriesLabels && A.runtimeSeriesLabels[e])
    return A.runtimeSeriesLabels[e];
  const r = e === ((s = A.xAxis) == null ? void 0 : s.dataKey), n = (B = A.table) == null ? void 0 : B.indexLabel;
  return r && n ? n : Bg(e, A);
}, Fs = (e, A, t) => {
  var i, o, c, u, l, w;
  if (e.visualizationType === "Sankey")
    return Object.keys((o = (i = e == null ? void 0 : e.data) == null ? void 0 : i[0]) == null ? void 0 : o.tableData[0]);
  const r = ir.cloneDeep(e.columns) || {}, n = Object.values(r).filter((g) => g.dataTable === !1).map((g) => g.name);
  let a = [];
  e.visualizationType !== "Pie" ? (a = A ? [(c = e.xAxis) == null ? void 0 : c.dataKey] : [], e.series ? e.series.forEach((g) => {
    a.push(g.dataKey);
  }) : t && t.length > 0 && (a = Object.keys(t[0]))) : a = A ? [(u = e.xAxis) == null ? void 0 : u.dataKey, (l = e.yAxis) == null ? void 0 : l.dataKey] : [(w = e.yAxis) == null ? void 0 : w.dataKey];
  const s = Object.keys(t[0] || {});
  Object.values(r).forEach(function(g) {
    var f;
    if (!g.name)
      return;
    const Q = a.includes(g.name), C = s.includes(g.name);
    g.name !== ((f = e.xAxis) == null ? void 0 : f.dataKey) && g.dataTable === !0 && !Q && C && a.push(g.name);
  });
  const B = Object.values(r).reduce((g, Q) => (Q.order !== void 0 && (g[Q.name] = Q.order - 1), g), {});
  return a = a.filter((g) => !n.includes(g)), a.forEach((g, Q) => {
    B[g] === void 0 && (Object.values(B).includes(Q) ? B[g] = Q + 1 : B[g] = Q);
  }), a.sort((g, Q) => B[g] - B[Q]), a;
}, Dr = () => /* @__PURE__ */ h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ h.createElement("path", { d: "M0 5l5-5 5 5z" })), Tr = () => /* @__PURE__ */ h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ h.createElement("path", { d: "M0 0l5 5 5-5z" })), hs = (e) => {
  const A = e.as;
  return /* @__PURE__ */ h.createElement(A, { className: "cdcdataviz-sr-only" }, e.children);
}, ig = ({ data: e, isVertical: A, config: t, setSortBy: r, sortBy: n, hasRowType: a }) => {
  var u;
  const s = (u = t.table) == null ? void 0 : u.groupBy;
  if (!e)
    return;
  let B = Fs(t, A, e);
  if (s) {
    let l = B.filter((w) => w !== s);
    l.length != B.length && (B = l);
  }
  const i = (l, w) => {
    let g = ["sort"];
    return l.column === w && l.asc && g.push("sort-asc"), l.column === w && l.desc && g.push("sort-desc"), g.join(" ");
  }, o = ({ text: l, config: w, sortBy: g }) => {
    const Q = "Not Applicable";
    let C = `${l} `;
    if ((l !== "__series__" || l !== "") && (C = `${l} `), (l === "__series__" || l === "") && !w.table.indexLabel && (C = Q), (l === "__series__" || l === "") && w.table.indexLabel && (C = w.table.indexLabel), C !== Q)
      return /* @__PURE__ */ h.createElement("span", { className: "cdcdataviz-sr-only" }, `Press command, modifier, or enter key to sort by ${C} in ${g.column !== C ? "ascending" : g.column === "desc" ? "descending" : "ascending"}  order`);
  }, c = ({ column: l, text: w, config: g }) => {
    let Q = "Not Applicable";
    return w === "__series__" && g.table.indexLabel ? `${g.table.indexLabel} ` : w === "__series__" && !g.table.indexLabel ? /* @__PURE__ */ h.createElement(hs, { as: "span" }, Q) : w;
  };
  if (A) {
    if (a) {
      const l = /row[_-]?type/i, w = B.findIndex((g) => l.test(g));
      w > -1 && B.splice(w, 1);
    }
    return /* @__PURE__ */ h.createElement("tr", null, B.map((l, w) => {
      const g = Us(l, t);
      return /* @__PURE__ */ h.createElement(
        "th",
        {
          style: { minWidth: (t.table.cellMinWidth || 0) + "px" },
          key: `col-header-${l}__${w}`,
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            a || r({ column: l, asc: n.column === l ? !n.asc : !1, colIndex: w });
          },
          onKeyDown: (Q) => {
            a || Q.keyCode === 13 && r({ column: l, asc: n.column === l ? !n.asc : !1, colIndex: w });
          },
          className: i(n, g),
          ...n.column === l ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        /* @__PURE__ */ h.createElement(c, { text: g, column: l, config: t }),
        l === n.column && /* @__PURE__ */ h.createElement("span", { className: "sort-icon" }, n.asc ? /* @__PURE__ */ h.createElement(Tr, null) : /* @__PURE__ */ h.createElement(Dr, null)),
        /* @__PURE__ */ h.createElement(o, { sortBy: n, config: t, text: g })
      );
    }));
  } else {
    const l = t.visualizationType === "Pie" ? 1 : 0;
    return /* @__PURE__ */ h.createElement("tr", null, ["__series__", ...Object.keys(e)].slice(l).map((w, g) => {
      var f;
      let Q = (f = t.xAxis) == null ? void 0 : f.dataKey, C = w !== "__series__" ? ae(w, Q, t, e) : "__series__";
      return /* @__PURE__ */ h.createElement(
        "th",
        {
          style: { minWidth: (t.table.cellMinWidth || 0) + "px" },
          key: `col-header-${C}__${g}`,
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            r({ column: C, asc: n.column === C ? !n.asc : !1, colIndex: g });
          },
          onKeyDown: (d) => {
            d.keyCode === 13 && r({ column: C, asc: n.column === C ? !n.asc : !1, colIndex: g });
          },
          className: i(n, C),
          ...n.column === C ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        /* @__PURE__ */ h.createElement(c, { text: C, column: Q, config: t }),
        g === n.colIndex && /* @__PURE__ */ h.createElement("span", { className: "sort-icon" }, n.asc ? /* @__PURE__ */ h.createElement(Tr, null) : /* @__PURE__ */ h.createElement(Dr, null)),
        /* @__PURE__ */ h.createElement(o, { text: C, config: t, sortBy: n })
      );
    }));
  }
}, og = ({ categories: e }) => {
  let A = ["Measures", ...e];
  return /* @__PURE__ */ h.createElement("tr", null, A.map((t) => /* @__PURE__ */ h.createElement("th", { key: `col-header-${t}`, tabIndex: 0, title: t, role: "columnheader", scope: "col" }, t)));
}, cg = ({ column: e, text: A, config: t }) => {
  let r = "Not Applicable";
  return A === "__series__" && t.table.indexLabel ? `${t.table.indexLabel} ` : A === "__series__" && !t.table.indexLabel ? /* @__PURE__ */ h.createElement(hs, { as: "span" }, r) : A;
}, lg = ({ columns: e, config: A, indexTitle: t, sortBy: r, setSortBy: n }) => /* @__PURE__ */ h.createElement("tr", null, Object.keys(e).filter((a) => e[a].dataTable === !0 && e[a].name).map((a, s) => {
  var i;
  let B;
  return a !== "geo" ? B = e[a].label ? e[a].label : e[a].name : B = A.type === "map" ? t : (i = A.xAxis) == null ? void 0 : i.dataKey, A.type === "map" && (B === void 0 || B === "") && (B = "Location"), /* @__PURE__ */ h.createElement(
    "th",
    {
      key: `col-header-${a}__${s}`,
      id: a,
      tabIndex: 0,
      role: "columnheader",
      scope: "col",
      onClick: () => {
        n({ column: a, asc: r.column === a ? !r.asc : !1 });
      },
      onKeyDown: (o) => {
        o.keyCode === 13 && n({ column: a, asc: r.column === a ? !r.asc : !1 });
      },
      className: r.column === a ? r.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
      ...r.column === a ? r.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
    },
    /* @__PURE__ */ h.createElement(cg, { text: B, config: A, column: a }),
    r.column === a && /* @__PURE__ */ h.createElement("span", { className: "sort-icon" }, r.asc ? /* @__PURE__ */ h.createElement(Tr, null) : /* @__PURE__ */ h.createElement(Dr, null)),
    /* @__PURE__ */ h.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${B} in ${r.column === a && r.asc ? "ascending" : "descending"} order`)
  );
})), na = ({ skipId: e, skipMessage: A }) => {
  const t = TA.useId(), r = () => {
    const n = document.getElementById(e);
    if (n) {
      n.scrollIntoView(), n.setAttribute("tabIndex", "-1"), n.focus();
      const a = () => {
        n.removeAttribute("tabIndex"), n.removeEventListener("blur", a);
      };
      n.addEventListener("blur", a);
    }
  };
  return /* @__PURE__ */ h.createElement(
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
}, aa = ({ expanded: e, setExpanded: A, tableTitle: t, fontSize: r, viewport: n }) => {
  const a = { small: 16, medium: 18, large: 20 }, s = ["sm", "xs", "xxs"].includes(n) ? "13px" : `${a[r]}px`;
  return /* @__PURE__ */ h.createElement(
    "div",
    {
      style: { fontSize: s },
      role: "button",
      className: e ? "data-table-heading" : "collapsed data-table-heading",
      onClick: () => {
        A(!e);
      },
      tabIndex: 0,
      onKeyDown: (B) => {
        B.keyCode === 13 && A(!e);
      }
    },
    /* @__PURE__ */ h.createElement(Hs, { display: e ? "minus" : "plus", base: !0 }),
    t
  );
}, ug = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDMyIDMyMGgtMzJjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2MTEySDY0VjEyOGgxNDRjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY4MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDQ4QzIxLjQ5IDY0IDAgODUuNDkgMCAxMTJ2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWMzM2YzAtOC44MzctNy4xNjMtMTYtMTYtMTZ6TTQ4OCAwSDM2MGMtMjEuMzcgMC0zMi4wNSAyNS45MS0xNyA0MWwzNS43MyAzNS43M0wxMzUgMzIwLjM3YTI0IDI0IDAgMDAwIDM0TDE1Ny42NyAzNzdhMjQgMjQgMCAwMDM0IDBsMjQzLjYxLTI0My42OEw0NzEgMTY5YzE1IDE1IDQxIDQuNSA0MS0xN1YyNGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjR6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";
function gg(e) {
  const A = ["cdc.gov", "localhost", "facebook.com", "twitter.com", "linkedin.com", "pinterest.com", "youtube.com", "youtube-nocookie.com", "plus.google.com", "instagram.com", "flickr.com", "tumblr.com", "cdc.sharepoint.com", "vaccines.gov", "vacunas.gov"], t = new URL(e, window.location.origin).hostname;
  let r = !0;
  return A.forEach((n) => {
    t.indexOf(n) !== -1 && t.indexOf(n) === t.length - n.length && (r = !1);
  }), r;
}
const Qg = ({ markup: e, row: A, columns: t, navigationHandler: r, mapZoomHandler: n }) => t.navigate && A[t.navigate.name] ? /* @__PURE__ */ h.createElement(
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
  gg(A[t.navigate.name]) && /* @__PURE__ */ h.createElement(ug, { className: "inline-icon" })
) : n ? /* @__PURE__ */ h.createElement(
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
) : /* @__PURE__ */ h.createElement(h.Fragment, null, e), wg = ({ rows: e, columns: A, runtimeData: t, config: r, applyLegendToRow: n, displayGeoName: a, formatLegendLocation: s, displayDataAsText: B, navigationHandler: i, setFilteredCountryCode: o, viewport: c }) => e.map(
  (u) => Object.keys(A).filter((l) => A[l].dataTable === !0 && A[l].name).map((l) => {
    let w;
    if (l === "geo") {
      const g = t[u], Q = n(g);
      let C;
      const f = r.general.type === "bubble" && r.general.allowMapZoom && r.general.geoType === "world" ? () => o(u) : void 0;
      if (r.general.geoType !== "single-state" && r.general.geoType !== "us-county" || r.general.type === "us-geocode") {
        const d = (m) => m.charAt(0).toUpperCase() + m.slice(1);
        C = a(u), C = String(C).startsWith("region") ? d(C) : C;
      } else
        C = s(u);
      w = /* @__PURE__ */ h.createElement("div", { className: "col-12" }, /* @__PURE__ */ h.createElement(ga, { viewport: c, fill: Q[0] }), /* @__PURE__ */ h.createElement(Qg, { markup: C, row: g, columns: A, navigationHandler: i, mapZoomHandler: f }));
    } else {
      let g = "", Q = r.columns[l].name;
      const { specialClasses: C } = r.legend;
      C && C.length && typeof C[0] == "object" && C.forEach((f) => {
        f.key === Q && String(t[u][f.key]) === f.value && (g = f.label);
      }), w = B(g || t[u][Q], l);
    }
    return w;
  })
), fg = (e) => {
  const A = Object.keys(e).find((t) => t.match(/row[_-]?type/i));
  return e[A];
}, Cg = ({ rows: e, runtimeData: A, config: t, isVertical: r, sortBy: n, colorScale: a, hasRowType: s, viewport: B }) => {
  var u;
  const i = (u = t.table) == null ? void 0 : u.groupBy, o = Fs(t, r, A), c = () => !n && n.colIndex === null ? o : o.sort((l, w) => {
    if (n.column === "__series__")
      return gt(l, w, n, t);
    let g = A.find((C) => {
      var f;
      return C[(f = t.xAxis) == null ? void 0 : f.dataKey] === n.column;
    });
    const Q = A[n.colIndex - 1];
    if (g)
      return gt(g[l], g[w], n, t);
    if (g === void 0 && Q)
      return gt(Q[l], Q[w], n, t);
  });
  if (r)
    if (i) {
      const l = {};
      return e.forEach((w) => {
        let g, Q = [];
        o.forEach((C, f) => {
          i === C ? g = ae(w, C, t, A) : Q.push(ae(w, C, t, A));
        }), l[g] ? l[g].push(Q) : l[g] = [Q];
      }), l;
    } else
      return e.map((l) => {
        if (s) {
          const w = fg(A[l]), g = o.map((Q) => ae(l, Q, t, A));
          return [w, ...g];
        } else
          return o.map((w, g) => ae(l, w, t, A));
      });
  else
    return c().map((l) => {
      const w = Us(l, t);
      return (t.visualizationType !== "Pie" ? [
        /* @__PURE__ */ h.createElement(h.Fragment, null, a && a(w) && /* @__PURE__ */ h.createElement(ga, { viewport: B, fill: a(w) }), w)
      ] : []).concat(e.map((Q, C) => ae(Q, l, t, A)));
    });
}, Ug = ({ config: e }) => e.regions.map((A) => e.visualizationType === "Box Plot" ? [] : !Object.keys(A).includes("from") || !Object.keys(A).includes("to") ? [] : [A.label, A.from, A.to]), Fg = ({ rows: e, config: A }) => {
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
      columnTotal: B.total,
      columnSd: "Standard Deviation",
      nonOutlierValues: "Non Outliers",
      columnLowerBounds: B.lowerBounds,
      columnUpperBounds: B.upperBounds
    }[s];
  };
  let r = (s, B) => Number(s) === 0 ? !0 : Number(s) === 1 ? B.columnMax : Number(s) === 2 ? B.columnThirdQuartile : Number(s) === 3 ? B.columnMedian : Number(s) === 4 ? B.columnFirstQuartile : Number(s) === 5 ? B.columnMin : Number(s) === 6 ? B.columnTotal : Number(s) === 7 ? B.columnSd : Number(s) === 8 ? B.columnMean : Number(s) === 9 ? B.columnOutliers.length > 0 ? B.columnOutliers.toString() : "-" : Number(s) === 10 ? B.values.length > 0 ? B.values.toString() : "-" : /* @__PURE__ */ h.createElement("p", null, "-"), n = e.map((s) => s[0]), a = ["Measures", ...A.boxplot.categories];
  return n.shift(), n.map((s, B) => a.map((i, o) => {
    let c;
    if (i === "Measures") {
      let u = B > 0 ? t(s) : "";
      c = /* @__PURE__ */ h.createElement(h.Fragment, null, u);
    } else
      c = r(B, A.boxplot.plots[o - 1]);
    return c;
  }));
}, hg = (e) => {
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
}, dg = (e, A, t) => {
  const r = ir.groupBy(e, (a) => a[A]), n = [];
  for (const a in r)
    r[a].forEach((B, i) => {
      const o = n[i] || {};
      o[a] = B[t];
      const c = ir.omit(B, [A, t]);
      n[i] = { ...c, ...o };
    });
  return n;
}, xg = (e) => {
  var q, $, CA, iA, uA, UA, FA;
  const { config: A, dataConfig: t, tableTitle: r, vizTitle: n, rawData: a, runtimeData: s, headerColor: B, expandDataTable: i, columns: o, viewport: c, formatLegendLocation: u, tabbingId: l, wrapColumns: w } = e, g = TA.useMemo(() => {
    const D = hg(s);
    if (A.table.pivot) {
      const { columnName: V, valueColumn: T } = A.table.pivot;
      if (V && T)
        return dg(D, V, T);
    }
    return D;
  }, [s, (q = A.table.pivot) == null ? void 0 : q.columnName, ($ = A.table.pivot) == null ? void 0 : $.valueColumn]), [Q, C] = TA.useState(i), [f, d] = TA.useState({ column: A.type === "map" ? "geo" : "date", asc: !1, colIndex: null }), [m, y] = TA.useState(""), I = !(A.type === "chart" && !((CA = A.table) != null && CA.showVertical)), K = `btn__${Math.random().toString(16).substr(2, 8)}`, b = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  };
  switch (TA.useEffect(() => {
    const D = "Accessible data table.", V = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    Q === !0 && m !== D && y(D), Q === !1 && m !== V && y(V);
  }, [Q]), A.visualizationType) {
    case "Box Plot":
      if (!A.boxplot)
        return /* @__PURE__ */ h.createElement(St, null);
      break;
    case "Line":
      if (!g)
        return /* @__PURE__ */ h.createElement(St, null);
      break;
    default:
      if (!g)
        return /* @__PURE__ */ h.createElement(St, null);
      break;
  }
  const v = Object.keys(g).filter((D) => D != "columns"), R = I ? v.sort((D, V) => {
    let T, k;
    if (A.type === "map" && A.columns) {
      const AA = A.columns[f.column].name;
      T = g[D][AA], k = g[V][AA];
    }
    return (A.type === "chart" || A.type === "dashboard") && (T = g[D][f.column], k = g[V][f.column]), !T && !k && A.type === "chart" && A.xAxis && A.xAxis.type === "date-time" && (T = Qt(A.runtime.xAxis.dateParseFormat)(g[D][A.xAxis.dataKey]), k = Qt(A.runtime.xAxis.dateParseFormat)(g[V][A.xAxis.dataKey])), T && k ? gt(T, k, f, A) : 0;
  }) : v, z = {
    maxHeight: A.table.limitHeight && `${A.table.height}px`,
    OverflowY: "scroll"
  }, j = !!Object.keys((a == null ? void 0 : a[0]) || {}).find((D) => D.match(/row[_-]?type/i)), S = TA.useMemo(() => A.type === "map" ? A.table.caption ? A.table.caption : `Data table showing data for the ${b[A.general.geoType]} figure.` : A.table.caption ? A.table.caption : `Data table showing data for the ${A.type} figure.`, [A.table.caption]), J = (iA = A == null ? void 0 : A.regions) == null ? void 0 : iA.every((D) => {
    const V = D.toType === "Fixed", T = D.fromType === "Fixed", k = !D.toType, AA = !D.fromType;
    return V && T || k && AA || V && AA || T && k;
  }), fA = TA.useMemo(
    () => {
      var D, V, T, k, AA, DA, E;
      return (V = (D = A.data) == null ? void 0 : D[0]) != null && V.tableData ? (k = (T = A.data) == null ? void 0 : T[0]) == null ? void 0 : k.tableData : A.visualizationType === "Sankey" ? (DA = (AA = A.data) == null ? void 0 : AA[0]) == null ? void 0 : DA.tableData : A.visualizationType === "Pie" ? [A.yAxis.dataKey] : A.visualizationType === "Box Plot" ? Object.entries(A.boxplot.tableData[0]) : (E = A.runtime) == null ? void 0 : E.seriesKeys;
    },
    [(uA = A.runtime) == null ? void 0 : uA.seriesKeys]
  );
  if (A.visualizationType !== "Box Plot") {
    const D = () => {
      var T;
      return ((T = A.general) == null ? void 0 : T.geoType) === "us-county" ? a.map((k) => ({ FullGeoName: u(k[A.columns.geo.name]), ...k })) : a;
    }, V = () => {
      var AA, DA, E;
      const T = ["download-links"], k = ((AA = A == null ? void 0 : A.legend) == null ? void 0 : AA.position) === "bottom" || ["sm", "xs", "xxs"].includes(c);
      return (DA = A.brush) != null && DA.active && !k && T.push("brush-active"), (E = A.brush) != null && E.active && A.legend.hide && T.push("brush-active"), T;
    };
    return /* @__PURE__ */ h.createElement(_r, { component: "DataTable" }, /* @__PURE__ */ h.createElement(oe.Section, { classes: V() }, /* @__PURE__ */ h.createElement(oe.Link, { config: A, dashboardDataConfig: t }), (A.table.download || ((UA = A.general) == null ? void 0 : UA.showDownloadButton)) && /* @__PURE__ */ h.createElement(ng, { rawData: D(), fileName: `${n || "data-table"}.csv`, headerColor: B })), /* @__PURE__ */ h.createElement("section", { id: l.replace("#", ""), className: `data-table-container ${c}`, "aria-label": m }, /* @__PURE__ */ h.createElement(na, { skipId: K, skipMessage: "Skip Data Table" }), A.table.collapsible !== !1 && /* @__PURE__ */ h.createElement(aa, { expanded: Q, setExpanded: C, fontSize: A.fontSize, tableTitle: r, viewport: c }), /* @__PURE__ */ h.createElement("div", { className: "table-container", style: z }, /* @__PURE__ */ h.createElement(
      Mt,
      {
        viewport: c,
        wrapColumns: w,
        childrenMatrix: A.type === "map" ? wg({ rows: R, wrapColumns: w, ...e, runtimeData: g, viewport: c }) : Cg({ rows: R, ...e, runtimeData: g, isVertical: I, sortBy: f, hasRowType: j, viewport: c }),
        tableName: A.type,
        caption: S,
        stickyHeader: !0,
        hasRowType: j,
        headContent: A.type === "map" ? /* @__PURE__ */ h.createElement(lg, { columns: o, ...e, sortBy: f, setSortBy: d }) : /* @__PURE__ */ h.createElement(ig, { data: g, ...e, hasRowType: j, isVertical: I, sortBy: f, setSortBy: d }),
        tableOptions: { className: `${Q ? "data-table" : "data-table cdcdataviz-sr-only"}${I ? "" : " horizontal"}`, "aria-live": "assertive", "aria-rowcount": (FA = A == null ? void 0 : A.data) != null && FA.length ? A.data.length : -1, hidden: !Q },
        fontSize: A.fontSize
      }
    ), J && A.regions && A.regions.length > 0 && A.visualizationType !== "Box Plot" && /* @__PURE__ */ h.createElement(
      Mt,
      {
        viewport: c,
        wrapColumns: w,
        childrenMatrix: Ug({ config: A }),
        tableName: A.visualizationType,
        caption: "Table of the highlighted regions in the visualization",
        headContent: /* @__PURE__ */ h.createElement("tr", null, /* @__PURE__ */ h.createElement("th", null, "Region Name"), /* @__PURE__ */ h.createElement("th", null, "Start Date"), /* @__PURE__ */ h.createElement("th", null, "End Date")),
        tableOptions: { className: "region-table data-table" },
        fontSize: A.fontSize
      }
    ))), /* @__PURE__ */ h.createElement("div", { id: K, className: "cdcdataviz-sr-only" }, "Skipped data table."));
  } else
    return /* @__PURE__ */ h.createElement(_r, { component: "DataTable" }, /* @__PURE__ */ h.createElement("section", { id: l.replace("#", ""), className: `data-table-container ${c}`, "aria-label": m }, /* @__PURE__ */ h.createElement(na, { skipId: K, skipMessage: "Skip Data Table" }), /* @__PURE__ */ h.createElement(aa, { expanded: Q, setExpanded: C, tableTitle: r }), /* @__PURE__ */ h.createElement("div", { className: "table-container", style: z }, /* @__PURE__ */ h.createElement(
      Mt,
      {
        viewport: c,
        wrapColumns: w,
        childrenMatrix: Fg({ rows: fA, config: A }),
        tableName: A.visualizationType,
        caption: S,
        stickyHeader: !0,
        headContent: /* @__PURE__ */ h.createElement(og, { categories: A.boxplot.categories }),
        tableOptions: { className: `${Q ? "data-table" : "data-table cdcdataviz-sr-only"}`, "aria-live": "assertive", "aria-rowcount": 11, hidden: !Q },
        fontSize: A.fontSize
      }
    ))), /* @__PURE__ */ h.createElement("div", { id: K, className: "cdcdataviz-sr-only" }, "Skipped data table."));
};
export {
  xg as D,
  ga as L,
  oe as M,
  na as S,
  Lg as a,
  vB as b,
  tn as f,
  Kg as g,
  gg as i,
  ua as t
};
