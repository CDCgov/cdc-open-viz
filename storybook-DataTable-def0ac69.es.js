import { R as h, r as LA } from "./storybook-index-45401197.es.js";
import { L as Tt, E as kr } from "./storybook-Loading-f180d060.es.js";
import { P as ha } from "./storybook-papaparse.min-b07ddc33.es.js";
import { u as sr, a as ss, t as ar, b as as, c as Ke, d as da, e as be, f as Le, g as pa, h as xe } from "./storybook-year-bedc547d.es.js";
import { n as _r } from "./storybook-numberFromString-24623c03.es.js";
import { _ as Ea } from "./storybook-lodash-c15d8e1c.es.js";
import { a as Ha } from "./storybook-Icon-ed0ee925.es.js";
import { T as St } from "./storybook-Table-12c53202.es.js";
function Mt(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return A.setFullYear(e.y), A;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ot(e) {
  if (0 <= e.y && e.y < 100) {
    var A = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return A.setUTCFullYear(e.y), A;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ce(e, A, t) {
  return { y: e, m: A, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function va(e) {
  var A = e.dateTime, t = e.date, r = e.time, n = e.periods, s = e.days, a = e.shortDays, B = e.months, i = e.shortMonths, o = le(n), c = ue(n), u = le(s), l = ue(s), w = le(a), g = ue(a), Q = le(B), C = ue(B), f = le(i), d = ue(i), H = {
    a: AA,
    A: FA,
    b: iA,
    B: QA,
    c: null,
    d: Zr,
    e: Zr,
    f: Ya,
    g: nB,
    G: aB,
    H: Xa,
    I: Ja,
    j: Wa,
    L: Bs,
    m: Za,
    M: za,
    p: O,
    q: P,
    Q: qr,
    s: $r,
    S: ja,
    u: qa,
    U: $a,
    V: AB,
    w: eB,
    W: tB,
    x: null,
    X: null,
    y: rB,
    Y: sB,
    Z: BB,
    "%": jr
  }, y = {
    a: M,
    A: V,
    b: J,
    B: oA,
    c: null,
    d: zr,
    e: zr,
    f: lB,
    g: dB,
    G: EB,
    H: iB,
    I: oB,
    j: cB,
    L: os,
    m: uB,
    M: gB,
    p: lA,
    q: Gr,
    Q: qr,
    s: $r,
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
    "%": jr
  }, I = {
    a: R,
    A: j,
    b: q,
    B: D,
    c: W,
    d: Wr,
    e: Wr,
    f: Va,
    g: Jr,
    G: Xr,
    H: Yr,
    I: Yr,
    j: Oa,
    L: Ga,
    m: Ma,
    M: Na,
    p: m,
    q: Sa,
    Q: _a,
    s: Pa,
    S: Ra,
    u: ba,
    U: La,
    V: xa,
    w: Ka,
    W: Da,
    x: UA,
    X: $,
    y: Jr,
    Y: Xr,
    Z: Ta,
    "%": ka
  };
  H.x = F(t, H), H.X = F(r, H), H.c = F(A, H), y.x = F(t, y), y.X = F(r, y), y.c = F(A, y);
  function F(v, L) {
    return function(T) {
      var U = [], uA = -1, k = 0, wA = v.length, fA, _A, Vr;
      for (T instanceof Date || (T = /* @__PURE__ */ new Date(+T)); ++uA < wA; )
        v.charCodeAt(uA) === 37 && (U.push(v.slice(k, uA)), (_A = Pr[fA = v.charAt(++uA)]) != null ? fA = v.charAt(++uA) : _A = fA === "e" ? " " : "0", (Vr = L[fA]) && (fA = Vr(T, _A)), U.push(fA), k = uA + 1);
      return U.push(v.slice(k, uA)), U.join("");
    };
  }
  function b(v, L) {
    return function(T) {
      var U = ce(1900, void 0, 1), uA = K(U, v, T += "", 0), k, wA;
      if (uA != T.length)
        return null;
      if ("Q" in U)
        return new Date(U.Q);
      if ("s" in U)
        return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (L && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53)
          return null;
        "w" in U || (U.w = 1), "Z" in U ? (k = Ot(ce(U.y, 0, 1)), wA = k.getUTCDay(), k = wA > 4 || wA === 0 ? sr.ceil(k) : sr(k), k = ss.offset(k, (U.V - 1) * 7), U.y = k.getUTCFullYear(), U.m = k.getUTCMonth(), U.d = k.getUTCDate() + (U.w + 6) % 7) : (k = Mt(ce(U.y, 0, 1)), wA = k.getDay(), k = wA > 4 || wA === 0 ? ar.ceil(k) : ar(k), k = as.offset(k, (U.V - 1) * 7), U.y = k.getFullYear(), U.m = k.getMonth(), U.d = k.getDate() + (U.w + 6) % 7);
      } else
        ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), wA = "Z" in U ? Ot(ce(U.y, 0, 1)).getUTCDay() : Mt(ce(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (wA + 5) % 7 : U.w + U.U * 7 - (wA + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Ot(U)) : Mt(U);
    };
  }
  function K(v, L, T, U) {
    for (var uA = 0, k = L.length, wA = T.length, fA, _A; uA < k; ) {
      if (U >= wA)
        return -1;
      if (fA = L.charCodeAt(uA++), fA === 37) {
        if (fA = L.charAt(uA++), _A = I[fA in Pr ? L.charAt(uA++) : fA], !_A || (U = _A(v, T, U)) < 0)
          return -1;
      } else if (fA != T.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function m(v, L, T) {
    var U = o.exec(L.slice(T));
    return U ? (v.p = c.get(U[0].toLowerCase()), T + U[0].length) : -1;
  }
  function R(v, L, T) {
    var U = w.exec(L.slice(T));
    return U ? (v.w = g.get(U[0].toLowerCase()), T + U[0].length) : -1;
  }
  function j(v, L, T) {
    var U = u.exec(L.slice(T));
    return U ? (v.w = l.get(U[0].toLowerCase()), T + U[0].length) : -1;
  }
  function q(v, L, T) {
    var U = f.exec(L.slice(T));
    return U ? (v.m = d.get(U[0].toLowerCase()), T + U[0].length) : -1;
  }
  function D(v, L, T) {
    var U = Q.exec(L.slice(T));
    return U ? (v.m = C.get(U[0].toLowerCase()), T + U[0].length) : -1;
  }
  function W(v, L, T) {
    return K(v, A, L, T);
  }
  function UA(v, L, T) {
    return K(v, t, L, T);
  }
  function $(v, L, T) {
    return K(v, r, L, T);
  }
  function AA(v) {
    return a[v.getDay()];
  }
  function FA(v) {
    return s[v.getDay()];
  }
  function iA(v) {
    return i[v.getMonth()];
  }
  function QA(v) {
    return B[v.getMonth()];
  }
  function O(v) {
    return n[+(v.getHours() >= 12)];
  }
  function P(v) {
    return 1 + ~~(v.getMonth() / 3);
  }
  function M(v) {
    return a[v.getUTCDay()];
  }
  function V(v) {
    return s[v.getUTCDay()];
  }
  function J(v) {
    return i[v.getUTCMonth()];
  }
  function oA(v) {
    return B[v.getUTCMonth()];
  }
  function lA(v) {
    return n[+(v.getUTCHours() >= 12)];
  }
  function Gr(v) {
    return 1 + ~~(v.getUTCMonth() / 3);
  }
  return {
    format: function(v) {
      var L = F(v += "", H);
      return L.toString = function() {
        return v;
      }, L;
    },
    parse: function(v) {
      var L = b(v += "", !1);
      return L.toString = function() {
        return v;
      }, L;
    },
    utcFormat: function(v) {
      var L = F(v += "", y);
      return L.toString = function() {
        return v;
      }, L;
    },
    utcParse: function(v) {
      var L = b(v += "", !0);
      return L.toString = function() {
        return v;
      }, L;
    }
  };
}
var Pr = { "-": "", _: " ", 0: "0" }, rA = /^\s*\d+/, ma = /^%/, Ia = /[\\^$*+?|[\]().{}]/g;
function S(e, A, t) {
  var r = e < 0 ? "-" : "", n = (r ? -e : e) + "", s = n.length;
  return r + (s < t ? new Array(t - s + 1).join(A) + n : n);
}
function ya(e) {
  return e.replace(Ia, "\\$&");
}
function le(e) {
  return new RegExp("^(?:" + e.map(ya).join("|") + ")", "i");
}
function ue(e) {
  return new Map(e.map((A, t) => [A.toLowerCase(), t]));
}
function Ka(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.w = +r[0], t + r[0].length) : -1;
}
function ba(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.u = +r[0], t + r[0].length) : -1;
}
function La(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.U = +r[0], t + r[0].length) : -1;
}
function xa(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.V = +r[0], t + r[0].length) : -1;
}
function Da(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.W = +r[0], t + r[0].length) : -1;
}
function Xr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 4));
  return r ? (e.y = +r[0], t + r[0].length) : -1;
}
function Jr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), t + r[0].length) : -1;
}
function Ta(e, A, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(A.slice(t, t + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function Sa(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function Ma(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.m = r[0] - 1, t + r[0].length) : -1;
}
function Wr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.d = +r[0], t + r[0].length) : -1;
}
function Oa(e, A, t) {
  var r = rA.exec(A.slice(t, t + 3));
  return r ? (e.m = 0, e.d = +r[0], t + r[0].length) : -1;
}
function Yr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.H = +r[0], t + r[0].length) : -1;
}
function Na(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.M = +r[0], t + r[0].length) : -1;
}
function Ra(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.S = +r[0], t + r[0].length) : -1;
}
function Ga(e, A, t) {
  var r = rA.exec(A.slice(t, t + 3));
  return r ? (e.L = +r[0], t + r[0].length) : -1;
}
function Va(e, A, t) {
  var r = rA.exec(A.slice(t, t + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function ka(e, A, t) {
  var r = ma.exec(A.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function _a(e, A, t) {
  var r = rA.exec(A.slice(t));
  return r ? (e.Q = +r[0], t + r[0].length) : -1;
}
function Pa(e, A, t) {
  var r = rA.exec(A.slice(t));
  return r ? (e.s = +r[0], t + r[0].length) : -1;
}
function Zr(e, A) {
  return S(e.getDate(), A, 2);
}
function Xa(e, A) {
  return S(e.getHours(), A, 2);
}
function Ja(e, A) {
  return S(e.getHours() % 12 || 12, A, 2);
}
function Wa(e, A) {
  return S(1 + as.count(Ke(e), e), A, 3);
}
function Bs(e, A) {
  return S(e.getMilliseconds(), A, 3);
}
function Ya(e, A) {
  return Bs(e, A) + "000";
}
function Za(e, A) {
  return S(e.getMonth() + 1, A, 2);
}
function za(e, A) {
  return S(e.getMinutes(), A, 2);
}
function ja(e, A) {
  return S(e.getSeconds(), A, 2);
}
function qa(e) {
  var A = e.getDay();
  return A === 0 ? 7 : A;
}
function $a(e, A) {
  return S(da.count(Ke(e) - 1, e), A, 2);
}
function is(e) {
  var A = e.getDay();
  return A >= 4 || A === 0 ? be(e) : be.ceil(e);
}
function AB(e, A) {
  return e = is(e), S(be.count(Ke(e), e) + (Ke(e).getDay() === 4), A, 2);
}
function eB(e) {
  return e.getDay();
}
function tB(e, A) {
  return S(ar.count(Ke(e) - 1, e), A, 2);
}
function rB(e, A) {
  return S(e.getFullYear() % 100, A, 2);
}
function nB(e, A) {
  return e = is(e), S(e.getFullYear() % 100, A, 2);
}
function sB(e, A) {
  return S(e.getFullYear() % 1e4, A, 4);
}
function aB(e, A) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? be(e) : be.ceil(e), S(e.getFullYear() % 1e4, A, 4);
}
function BB(e) {
  var A = e.getTimezoneOffset();
  return (A > 0 ? "-" : (A *= -1, "+")) + S(A / 60 | 0, "0", 2) + S(A % 60, "0", 2);
}
function zr(e, A) {
  return S(e.getUTCDate(), A, 2);
}
function iB(e, A) {
  return S(e.getUTCHours(), A, 2);
}
function oB(e, A) {
  return S(e.getUTCHours() % 12 || 12, A, 2);
}
function cB(e, A) {
  return S(1 + ss.count(Le(e), e), A, 3);
}
function os(e, A) {
  return S(e.getUTCMilliseconds(), A, 3);
}
function lB(e, A) {
  return os(e, A) + "000";
}
function uB(e, A) {
  return S(e.getUTCMonth() + 1, A, 2);
}
function gB(e, A) {
  return S(e.getUTCMinutes(), A, 2);
}
function QB(e, A) {
  return S(e.getUTCSeconds(), A, 2);
}
function wB(e) {
  var A = e.getUTCDay();
  return A === 0 ? 7 : A;
}
function fB(e, A) {
  return S(pa.count(Le(e) - 1, e), A, 2);
}
function cs(e) {
  var A = e.getUTCDay();
  return A >= 4 || A === 0 ? xe(e) : xe.ceil(e);
}
function CB(e, A) {
  return e = cs(e), S(xe.count(Le(e), e) + (Le(e).getUTCDay() === 4), A, 2);
}
function UB(e) {
  return e.getUTCDay();
}
function FB(e, A) {
  return S(sr.count(Le(e) - 1, e), A, 2);
}
function hB(e, A) {
  return S(e.getUTCFullYear() % 100, A, 2);
}
function dB(e, A) {
  return e = cs(e), S(e.getUTCFullYear() % 100, A, 2);
}
function pB(e, A) {
  return S(e.getUTCFullYear() % 1e4, A, 4);
}
function EB(e, A) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? xe(e) : xe.ceil(e), S(e.getUTCFullYear() % 1e4, A, 4);
}
function HB() {
  return "+0000";
}
function jr() {
  return "%";
}
function qr(e) {
  return +e;
}
function $r(e) {
  return Math.floor(+e / 1e3);
}
var ZA, ls, gt;
vB({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function vB(e) {
  return ZA = va(e), ls = ZA.format, gt = ZA.parse, ZA.utcFormat, ZA.utcParse, ZA;
}
const An = (e) => {
  let A = "", t = Math.abs(e);
  return t >= 1e9 ? (A = "B", e = e / 1e9) : t >= 1e6 ? (A = "M", e = e / 1e6) : t >= 1e3 && (A = "K", e = e / 1e3), e + A;
}, en = (e, A, t = !1, r = null, n = null) => {
  if (r || console.error("no config found in formatNumber"), isNaN(e) || !e)
    return e;
  const s = e < 0;
  s && (e = Math.abs(e));
  let {
    dataFormat: { commas: a, abbreviated: B, roundTo: i, prefix: o, suffix: c, rightRoundTo: u, bottomRoundTo: l, rightPrefix: w, rightSuffix: g, bottomPrefix: Q, bottomSuffix: C, bottomAbbreviated: f }
  } = r;
  const { addColCommas: d, addColRoundTo: H, addColPrefix: y, addColSuffix: I } = n;
  String(e).indexOf(",") !== -1 && (e = e.replaceAll(",", ""));
  let F = e, b;
  if (A === "left") {
    let m;
    H !== void 0 ? m = H ? Number(H) : 0 : m = i ? Number(i) : 0, m < 0 && (m = 0);
    let R;
    d !== void 0 ? R = !!d : R = !!r.dataFormat.commas, b = {
      useGrouping: R,
      minimumFractionDigits: m,
      maximumFractionDigits: m
    };
  }
  if (A === "right" && (b = {
    useGrouping: !!r.dataFormat.rightCommas,
    minimumFractionDigits: u ? Number(u) : 0,
    maximumFractionDigits: u ? Number(u) : 0
  }), A === "bottom" && (b = {
    useGrouping: !!r.dataFormat.bottomCommas,
    minimumFractionDigits: l ? Number(l) : 0,
    maximumFractionDigits: l ? Number(l) : 0
  }), e = _r(e), isNaN(e))
    return r.runtime.editorErrorMessage = `Unable to parse number from data ${F}. Try reviewing your data and selections in the Data Series section.`, F;
  if (!r.dataFormat)
    return e;
  if (r.dataCutoff) {
    let m = _r(r.dataCutoff);
    e < m && (e = m);
  }
  A === "left" && a && B && t || A === "bottom" && a && B && t ? e = e : e = e.toLocaleString("en-US", b);
  let K = "";
  return B && A === "left" && t && (e = An(parseFloat(e))), f && A === "bottom" && t && (e = An(parseFloat(e))), y !== void 0 && A === "left" ? K = y + K : o && A === "left" && (K = o + K), w && A === "right" && (K += w), Q && A === "bottom" && (K += Q), K += e, I !== void 0 && A === "left" ? K += I : c && A === "left" && (K += c), g && A === "right" && (K += g), C && A === "bottom" && (K += C), s && (K = "-" + K), String(K);
}, Kg = (e = "medium") => ({ small: 16, medium: 18, large: 20 })[e];
function mB(e = void 0, A) {
  return ls(e)(A);
}
function Br(e = void 0, A) {
  return gt(e)(A) || /* @__PURE__ */ new Date();
}
const bg = (e) => {
  try {
    if (!e)
      throw new Error("COVE: No axis passed to isDateScale");
    return ["date", "date-time"].includes(e.type);
  } catch ({ message: A }) {
    console.warn(A);
  }
};
function us({ fill: e, borderColor: A, display: t = "inline-block", viewport: r }) {
  const n = ["sm", "xs", "xxs"].includes(r) ? { width: "0.7em", height: "0.7em" } : { width: "1em", height: "1em" }, s = {
    marginRight: "5px",
    borderRadius: "300px",
    verticalAlign: "middle",
    display: t,
    height: n.height || "1em",
    width: n.width || "1em",
    border: A ? `${A}  1px solid` : "rgba(0,0,0,.3) 1px solid",
    backgroundColor: e
  };
  return /* @__PURE__ */ h.createElement("span", { className: "legend-item", style: s });
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
var ir = function(e, A) {
  return ir = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, ir(e, A);
};
function vA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  ir(e, A);
  function t() {
    this.constructor = e;
  }
  e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var or = function() {
  return or = Object.assign || function(A) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (A[s] = t[s]);
    }
    return A;
  }, or.apply(this, arguments);
};
function cA(e, A, t, r) {
  function n(s) {
    return s instanceof t ? s : new t(function(a) {
      a(s);
    });
  }
  return new (t || (t = Promise))(function(s, a) {
    function B(c) {
      try {
        o(r.next(c));
      } catch (u) {
        a(u);
      }
    }
    function i(c) {
      try {
        o(r.throw(c));
      } catch (u) {
        a(u);
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
function Ne(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = A.length, s; r < n; r++)
      (s || !(r in A)) && (s || (s = Array.prototype.slice.call(A, 0, r)), s[r] = A[r]);
  return e.concat(s || A);
}
var DA = (
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
), Ht = function(e, A) {
  return DA.fromClientRect(e, A.getBoundingClientRect());
}, IB = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new DA(0, 0, r, n);
}, vt = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, Z = function() {
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
}, tn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Re = 0; Re < tn.length; Re++)
  yB[tn.charCodeAt(Re)] = Re;
var rn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ce = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ge = 0; Ge < rn.length; Ge++)
  Ce[rn.charCodeAt(Ge)] = Ge;
var KB = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, s, a, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    s = Ce[e.charCodeAt(r)], a = Ce[e.charCodeAt(r + 1)], B = Ce[e.charCodeAt(r + 2)], i = Ce[e.charCodeAt(r + 3)], c[n++] = s << 2 | a >> 4, c[n++] = (a & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, bB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, LB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, WA = 5, Dr = 6 + 5, Nt = 2, xB = Dr - WA, gs = 65536 >> WA, DB = 1 << WA, Rt = DB - 1, TB = 1024 >> WA, SB = gs + TB, MB = SB, OB = 32, NB = MB + OB, RB = 65536 >> Dr, GB = 1 << xB, VB = GB - 1, nn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, kB = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, _B = function(e, A) {
  var t = KB(e), r = Array.isArray(t) ? LB(t) : new Uint32Array(t), n = Array.isArray(t) ? bB(t) : new Uint16Array(t), s = 24, a = nn(n, s / 2, r[4] / 2), B = r[5] === 2 ? nn(n, (s + r[4]) / 2) : kB(r, Math.ceil((s + r[4]) / 4));
  return new PB(r[0], r[1], r[2], r[3], a, B);
}, PB = (
  /** @class */
  function() {
    function e(A, t, r, n, s, a) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = a;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> WA], t = (t << Nt) + (A & Rt), this.data[t];
        if (A <= 65535)
          return t = this.index[gs + (A - 55296 >> WA)], t = (t << Nt) + (A & Rt), this.data[t];
        if (A < this.highStart)
          return t = NB - RB + (A >> Dr), t = this.index[t], t += A >> WA & VB, t = this.index[t], t = (t << Nt) + (A & Rt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), sn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", XB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ve = 0; Ve < sn.length; Ve++)
  XB[sn.charCodeAt(Ve)] = Ve;
var JB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", an = 50, WB = 1, Qs = 2, ws = 3, YB = 4, ZB = 5, Bn = 7, fs = 8, on = 9, OA = 10, cr = 11, cn = 12, lr = 13, zB = 14, Ue = 15, ur = 16, ke = 17, ge = 18, jB = 19, ln = 20, gr = 21, Qe = 22, Gt = 23, zA = 24, CA = 25, Fe = 26, he = 27, jA = 28, qB = 29, XA = 30, $B = 31, _e = 32, Pe = 33, Qr = 34, wr = 35, fr = 36, De = 37, Cr = 38, Bt = 39, it = 40, Vt = 41, Cs = 42, Ai = 43, ei = [9001, 65288], Us = "!", x = "×", Xe = "÷", Ur = _B(JB), KA = [XA, fr], Fr = [WB, Qs, ws, ZB], Fs = [OA, fs], un = [he, Fe], ti = Fr.concat(Fs), gn = [Cr, Bt, it, Qr, wr], ri = [Ue, lr], ni = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(s, a) {
    var B = Ur.get(s);
    if (B > an ? (n.push(!0), B -= an) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(s) !== -1)
      return r.push(a), t.push(ur);
    if (B === YB || B === cr) {
      if (a === 0)
        return r.push(a), t.push(XA);
      var i = t[a - 1];
      return ti.indexOf(i) === -1 ? (r.push(r[a - 1]), t.push(i)) : (r.push(a), t.push(XA));
    }
    if (r.push(a), B === $B)
      return t.push(A === "strict" ? gr : De);
    if (B === Cs || B === qB)
      return t.push(XA);
    if (B === Ai)
      return s >= 131072 && s <= 196605 || s >= 196608 && s <= 262141 ? t.push(De) : t.push(XA);
    t.push(B);
  }), [r, t, n];
}, kt = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var s = t; s <= r.length; ) {
      s++;
      var a = r[s];
      if (a === A)
        return !0;
      if (a !== OA)
        break;
    }
  if (n === OA)
    for (var s = t; s > 0; ) {
      s--;
      var B = r[s];
      if (Array.isArray(e) ? e.indexOf(B) !== -1 : e === B)
        for (var i = t; i <= r.length; ) {
          i++;
          var a = r[i];
          if (a === A)
            return !0;
          if (a !== OA)
            break;
        }
      if (B !== OA)
        break;
    }
  return !1;
}, Qn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === OA)
      t--;
    else
      return r;
  }
  return 0;
}, si = function(e, A, t, r, n) {
  if (t[r] === 0)
    return x;
  var s = r - 1;
  if (Array.isArray(n) && n[s] === !0)
    return x;
  var a = s - 1, B = s + 1, i = A[s], o = a >= 0 ? A[a] : 0, c = A[B];
  if (i === Qs && c === ws)
    return x;
  if (Fr.indexOf(i) !== -1)
    return Us;
  if (Fr.indexOf(c) !== -1 || Fs.indexOf(c) !== -1)
    return x;
  if (Qn(s, A) === fs)
    return Xe;
  if (Ur.get(e[s]) === cr || (i === _e || i === Pe) && Ur.get(e[B]) === cr || i === Bn || c === Bn || i === on || [OA, lr, Ue].indexOf(i) === -1 && c === on || [ke, ge, jB, zA, jA].indexOf(c) !== -1 || Qn(s, A) === Qe || kt(Gt, Qe, s, A) || kt([ke, ge], gr, s, A) || kt(cn, cn, s, A))
    return x;
  if (i === OA)
    return Xe;
  if (i === Gt || c === Gt)
    return x;
  if (c === ur || i === ur)
    return Xe;
  if ([lr, Ue, gr].indexOf(c) !== -1 || i === zB || o === fr && ri.indexOf(i) !== -1 || i === jA && c === fr || c === ln || KA.indexOf(c) !== -1 && i === CA || KA.indexOf(i) !== -1 && c === CA || i === he && [De, _e, Pe].indexOf(c) !== -1 || [De, _e, Pe].indexOf(i) !== -1 && c === Fe || KA.indexOf(i) !== -1 && un.indexOf(c) !== -1 || un.indexOf(i) !== -1 && KA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [he, Fe].indexOf(i) !== -1 && (c === CA || [Qe, Ue].indexOf(c) !== -1 && A[B + 1] === CA) || // ( OP | HY ) × NU
  [Qe, Ue].indexOf(i) !== -1 && c === CA || // NU ×	(NU | SY | IS)
  i === CA && [CA, jA, zA].indexOf(c) !== -1)
    return x;
  if ([CA, jA, zA, ke, ge].indexOf(c) !== -1)
    for (var u = s; u >= 0; ) {
      var l = A[u];
      if (l === CA)
        return x;
      if ([jA, zA].indexOf(l) !== -1)
        u--;
      else
        break;
    }
  if ([he, Fe].indexOf(c) !== -1)
    for (var u = [ke, ge].indexOf(i) !== -1 ? a : s; u >= 0; ) {
      var l = A[u];
      if (l === CA)
        return x;
      if ([jA, zA].indexOf(l) !== -1)
        u--;
      else
        break;
    }
  if (Cr === i && [Cr, Bt, Qr, wr].indexOf(c) !== -1 || [Bt, Qr].indexOf(i) !== -1 && [Bt, it].indexOf(c) !== -1 || [it, wr].indexOf(i) !== -1 && c === it || gn.indexOf(i) !== -1 && [ln, Fe].indexOf(c) !== -1 || gn.indexOf(c) !== -1 && i === he || KA.indexOf(i) !== -1 && KA.indexOf(c) !== -1 || i === zA && KA.indexOf(c) !== -1 || KA.concat(CA).indexOf(i) !== -1 && c === Qe && ei.indexOf(e[B]) === -1 || KA.concat(CA).indexOf(c) !== -1 && i === ge)
    return x;
  if (i === Vt && c === Vt) {
    for (var w = t[s], g = 1; w > 0 && (w--, A[w] === Vt); )
      g++;
    if (g % 2 !== 0)
      return x;
  }
  return i === _e && c === Pe ? x : Xe;
}, ai = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = ni(e, A.lineBreak), r = t[0], n = t[1], s = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(B) {
    return [CA, XA, Cs].indexOf(B) !== -1 ? De : B;
  }));
  var a = A.wordBreak === "keep-all" ? s.map(function(B, i) {
    return B && e[i] >= 19968 && e[i] <= 40959;
  }) : void 0;
  return [r, n, a];
}, Bi = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === Us, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return Z.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), ii = function(e, A) {
  var t = vt(e), r = ai(t, A), n = r[0], s = r[1], a = r[2], B = t.length, i = 0, o = 0;
  return {
    next: function() {
      if (o >= B)
        return { done: !0, value: null };
      for (var c = x; o < B && (c = si(t, s, n, ++o, a)) === x; )
        ;
      if (c !== x || o === B) {
        var u = new Bi(t, c, i, o);
        return i = o, { value: u, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, oi = 1, ci = 2, Me = 4, wn = 8, Qt = 10, fn = 47, He = 92, li = 9, ui = 32, Je = 34, we = 61, gi = 35, Qi = 36, wi = 37, We = 39, Ye = 40, fe = 41, fi = 95, gA = 45, Ci = 33, Ui = 60, Fi = 62, hi = 64, di = 91, pi = 93, Ei = 61, Hi = 123, Ze = 63, vi = 125, Cn = 124, mi = 126, Ii = 128, Un = 65533, _t = 42, JA = 43, yi = 44, Ki = 58, bi = 59, Te = 46, Li = 0, xi = 8, Di = 11, Ti = 14, Si = 31, Mi = 127, mA = -1, hs = 48, ds = 97, ps = 101, Oi = 102, Ni = 117, Ri = 122, Es = 65, Hs = 69, vs = 70, Gi = 85, Vi = 90, BA = function(e) {
  return e >= hs && e <= 57;
}, ki = function(e) {
  return e >= 55296 && e <= 57343;
}, qA = function(e) {
  return BA(e) || e >= Es && e <= vs || e >= ds && e <= Oi;
}, _i = function(e) {
  return e >= ds && e <= Ri;
}, Pi = function(e) {
  return e >= Es && e <= Vi;
}, Xi = function(e) {
  return _i(e) || Pi(e);
}, Ji = function(e) {
  return e >= Ii;
}, ze = function(e) {
  return e === Qt || e === li || e === ui;
}, wt = function(e) {
  return Xi(e) || Ji(e) || e === fi;
}, Fn = function(e) {
  return wt(e) || BA(e) || e === gA;
}, Wi = function(e) {
  return e >= Li && e <= xi || e === Di || e >= Ti && e <= Si || e === Mi;
}, MA = function(e, A) {
  return e !== He ? !1 : A !== Qt;
}, je = function(e, A, t) {
  return e === gA ? wt(A) || MA(A, t) : wt(e) ? !0 : !!(e === He && MA(e, A));
}, Pt = function(e, A, t) {
  return e === JA || e === gA ? BA(A) ? !0 : A === Te && BA(t) : BA(e === Te ? A : e);
}, Yi = function(e) {
  var A = 0, t = 1;
  (e[A] === JA || e[A] === gA) && (e[A] === gA && (t = -1), A++);
  for (var r = []; BA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(Z.apply(void 0, r), 10) : 0;
  e[A] === Te && A++;
  for (var s = []; BA(e[A]); )
    s.push(e[A++]);
  var a = s.length, B = a ? parseInt(Z.apply(void 0, s), 10) : 0;
  (e[A] === Hs || e[A] === ps) && A++;
  var i = 1;
  (e[A] === JA || e[A] === gA) && (e[A] === gA && (i = -1), A++);
  for (var o = []; BA(e[A]); )
    o.push(e[A++]);
  var c = o.length ? parseInt(Z.apply(void 0, o), 10) : 0;
  return t * (n + B * Math.pow(10, -a)) * Math.pow(10, i * c);
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
}, so = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, qe = {
  type: 23
  /* BAD_URL_TOKEN */
}, ao = {
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
}, hr = {
  type: 32
  /* EOF_TOKEN */
}, ms = (
  /** @class */
  function() {
    function e() {
      this._value = [];
    }
    return e.prototype.write = function(A) {
      this._value = this._value.concat(vt(A));
    }, e.prototype.read = function() {
      for (var A = [], t = this.consumeToken(); t !== hr; )
        A.push(t), t = this.consumeToken();
      return A;
    }, e.prototype.consumeToken = function() {
      var A = this.consumeCodePoint();
      switch (A) {
        case Je:
          return this.consumeStringToken(Je);
        case gi:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (Fn(t) || MA(r, n)) {
            var s = je(t, r, n) ? ci : oi, a = this.consumeName();
            return { type: 5, value: a, flags: s };
          }
          break;
        case Qi:
          if (this.peekCodePoint(0) === we)
            return this.consumeCodePoint(), qi;
          break;
        case We:
          return this.consumeStringToken(We);
        case Ye:
          return Zi;
        case fe:
          return zi;
        case _t:
          if (this.peekCodePoint(0) === we)
            return this.consumeCodePoint(), so;
          break;
        case JA:
          if (Pt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case yi:
          return ji;
        case gA:
          var B = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (Pt(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (je(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === gA && o === Fi)
            return this.consumeCodePoint(), this.consumeCodePoint(), io;
          break;
        case Te:
          if (Pt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case fn:
          if (this.peekCodePoint(0) === _t)
            for (this.consumeCodePoint(); ; ) {
              var c = this.consumeCodePoint();
              if (c === _t && (c = this.consumeCodePoint(), c === fn))
                return this.consumeToken();
              if (c === mA)
                return this.consumeToken();
            }
          break;
        case Ki:
          return oo;
        case bi:
          return co;
        case Ui:
          if (this.peekCodePoint(0) === Ci && this.peekCodePoint(1) === gA && this.peekCodePoint(2) === gA)
            return this.consumeCodePoint(), this.consumeCodePoint(), Bo;
          break;
        case hi:
          var u = this.peekCodePoint(0), l = this.peekCodePoint(1), w = this.peekCodePoint(2);
          if (je(u, l, w)) {
            var a = this.consumeName();
            return { type: 7, value: a };
          }
          break;
        case di:
          return lo;
        case He:
          if (MA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case pi:
          return uo;
        case Ei:
          if (this.peekCodePoint(0) === we)
            return this.consumeCodePoint(), $i;
          break;
        case Hi:
          return ro;
        case vi:
          return no;
        case Ni:
        case Gi:
          var g = this.peekCodePoint(0), Q = this.peekCodePoint(1);
          return g === JA && (qA(Q) || Q === Ze) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Cn:
          if (this.peekCodePoint(0) === we)
            return this.consumeCodePoint(), eo;
          if (this.peekCodePoint(0) === Cn)
            return this.consumeCodePoint(), Ao;
          break;
        case mi:
          if (this.peekCodePoint(0) === we)
            return this.consumeCodePoint(), to;
          break;
        case mA:
          return hr;
      }
      return ze(A) ? (this.consumeWhiteSpace(), go) : BA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : wt(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: Z(A) };
    }, e.prototype.consumeCodePoint = function() {
      var A = this._value.shift();
      return typeof A > "u" ? -1 : A;
    }, e.prototype.reconsumeCodePoint = function(A) {
      this._value.unshift(A);
    }, e.prototype.peekCodePoint = function(A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, e.prototype.consumeUnicodeRangeToken = function() {
      for (var A = [], t = this.consumeCodePoint(); qA(t) && A.length < 6; )
        A.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === Ze && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(Z.apply(void 0, A.map(function(i) {
          return i === Ze ? hs : i;
        })), 16), s = parseInt(Z.apply(void 0, A.map(function(i) {
          return i === Ze ? vs : i;
        })), 16);
        return { type: 30, start: n, end: s };
      }
      var a = parseInt(Z.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === gA && qA(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var B = []; qA(t) && B.length < 6; )
          B.push(t), t = this.consumeCodePoint();
        var s = parseInt(Z.apply(void 0, B), 16);
        return { type: 30, start: a, end: s };
      } else
        return { type: 30, start: a, end: a };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === Ye ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Ye ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === mA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === We || t === Je) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === mA || this.peekCodePoint(0) === fe) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), qe);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === mA || n === fe)
          return { type: 22, value: Z.apply(void 0, A) };
        if (ze(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === mA || this.peekCodePoint(0) === fe ? (this.consumeCodePoint(), { type: 22, value: Z.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), qe);
        if (n === Je || n === We || n === Ye || Wi(n))
          return this.consumeBadUrlRemnants(), qe;
        if (n === He)
          if (MA(n, this.peekCodePoint(0)))
            A.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), qe;
        else
          A.push(n);
      }
    }, e.prototype.consumeWhiteSpace = function() {
      for (; ze(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, e.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var A = this.consumeCodePoint();
        if (A === fe || A === mA)
          return;
        MA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, e.prototype.consumeStringSlice = function(A) {
      for (var t = 5e4, r = ""; A > 0; ) {
        var n = Math.min(t, A);
        r += Z.apply(void 0, this._value.splice(0, n)), A -= n;
      }
      return this._value.shift(), r;
    }, e.prototype.consumeStringToken = function(A) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === mA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === Qt)
          return this._value.splice(0, r), ao;
        if (n === He) {
          var s = this._value[r + 1];
          s !== mA && s !== void 0 && (s === Qt ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : MA(n, s) && (t += this.consumeStringSlice(r), t += Z(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Me, r = this.peekCodePoint(0);
      for ((r === JA || r === gA) && A.push(this.consumeCodePoint()); BA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Te && BA(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = wn; BA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var s = this.peekCodePoint(2);
      if ((r === Hs || r === ps) && ((n === JA || n === gA) && BA(s) || BA(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = wn; BA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [Yi(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), s = this.peekCodePoint(1), a = this.peekCodePoint(2);
      if (je(n, s, a)) {
        var B = this.consumeName();
        return { type: 15, number: t, flags: r, unit: B };
      }
      return n === wi ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (qA(A)) {
        for (var t = Z(A); qA(this.peekCodePoint(0)) && t.length < 6; )
          t += Z(this.consumeCodePoint());
        ze(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || ki(r) || r > 1114111 ? Un : r;
      }
      return A === mA ? Un : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Fn(t))
          A += Z(t);
        else if (MA(t, this.peekCodePoint(0)))
          A += Z(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  }()
), Is = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new ms();
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
      return typeof A > "u" ? hr : A;
    }, e.prototype.reconsumeToken = function(A) {
      this._tokens.unshift(A);
    }, e;
  }()
), Oe = function(e) {
  return e.type === 15;
}, oe = function(e) {
  return e.type === 17;
}, G = function(e) {
  return e.type === 20;
}, Qo = function(e) {
  return e.type === 0;
}, dr = function(e, A) {
  return G(e) && e.value === A;
}, ys = function(e) {
  return e.type !== 31;
}, Be = function(e) {
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
}, kA = function(e) {
  return e.type === 17 || e.type === 15;
}, z = function(e) {
  return e.type === 16 || kA(e);
}, Ks = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, sA = {
  type: 17,
  number: 0,
  flags: Me
}, Tr = {
  type: 16,
  number: 50,
  flags: Me
}, NA = {
  type: 16,
  number: 100,
  flags: Me
}, de = function(e, A, t) {
  var r = e[0], n = e[1];
  return [_(r, A), _(typeof n < "u" ? n : r, t)];
}, _ = function(e, A) {
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
}, bs = "deg", Ls = "grad", xs = "rad", Ds = "turn", mt = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case bs:
          return Math.PI * A.number / 180;
        case Ls:
          return Math.PI / 200 * A.number;
        case xs:
          return A.number;
        case Ds:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Ts = function(e) {
  return e.type === 15 && (e.unit === bs || e.unit === Ls || e.unit === xs || e.unit === Ds);
}, Ss = function(e) {
  var A = e.filter(G).map(function(t) {
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
      return pA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [sA, NA];
    case "to right":
    case "left":
      return pA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [NA, NA];
    case "to bottom":
    case "top":
      return pA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [NA, sA];
    case "to left":
    case "right":
      return pA(270);
  }
  return 0;
}, pA = function(e) {
  return Math.PI * e / 180;
}, GA = {
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
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
        return RA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3), a = A.value.substring(3, 4);
        return RA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(a + a, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6);
        return RA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), a = A.value.substring(6, 8);
        return RA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(a, 16) / 255);
      }
    }
    if (A.type === 20) {
      var B = xA[A.value.toUpperCase()];
      if (typeof B < "u")
        return B;
    }
    return xA.TRANSPARENT;
  }
}, VA = function(e) {
  return (255 & e) === 0;
}, tA = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, RA = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, hn = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, dn = function(e, A) {
  var t = A.filter(Be);
  if (t.length === 3) {
    var r = t.map(hn), n = r[0], s = r[1], a = r[2];
    return RA(n, s, a, 1);
  }
  if (t.length === 4) {
    var B = t.map(hn), n = B[0], s = B[1], a = B[2], i = B[3];
    return RA(n, s, a, i);
  }
  return 0;
};
function Xt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var pn = function(e, A) {
  var t = A.filter(Be), r = t[0], n = t[1], s = t[2], a = t[3], B = (r.type === 17 ? pA(r.number) : mt.parse(e, r)) / (Math.PI * 2), i = z(n) ? n.number / 100 : 0, o = z(s) ? s.number / 100 : 0, c = typeof a < "u" && z(a) ? _(a, 1) : 1;
  if (i === 0)
    return RA(o * 255, o * 255, o * 255, 1);
  var u = o <= 0.5 ? o * (i + 1) : o + i - o * i, l = o * 2 - u, w = Xt(l, u, B + 1 / 3), g = Xt(l, u, B), Q = Xt(l, u, B - 1 / 3);
  return RA(w * 255, g * 255, Q * 255, c);
}, fo = {
  hsl: pn,
  hsla: pn,
  rgb: dn,
  rgba: dn
}, ve = function(e, A) {
  return GA.parse(e, Is.create(A).parseComponentValue());
}, xA = {
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
}, It = function(e, A) {
  var t = GA.parse(e, A[0]), r = A[1];
  return r && z(r) ? { color: t, stop: r } : { color: t, stop: null };
}, En = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = sA), r.stop === null && (r.stop = NA);
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
      for (var u = a - o, l = n[o - 1], w = (c - l) / (u + 1), g = 1; g <= u; g++)
        n[o + g - 1] = w * g;
      o = null;
    }
  }
  return e.map(function(Q, C) {
    var f = Q.color;
    return { color: f, stop: Math.max(Math.min(1, n[C] / A), 0) };
  });
}, Fo = function(e, A, t) {
  var r = A / 2, n = t / 2, s = _(e[0], A) - r, a = n - _(e[1], t);
  return (Math.atan2(a, s) + Math.PI * 2) % (Math.PI * 2);
}, ho = function(e, A, t) {
  var r = typeof e == "number" ? e : Fo(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = A / 2, a = t / 2, B = n / 2, i = Math.sin(r - Math.PI / 2) * B, o = Math.cos(r - Math.PI / 2) * B;
  return [n, s - o, s + o, a - i, a + i];
}, HA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, Hn = function(e, A, t, r, n) {
  var s = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return s.reduce(function(a, B) {
    var i = B[0], o = B[1], c = HA(t - i, r - o);
    return (n ? c < a.optimumDistance : c > a.optimumDistance) ? {
      optimumCorner: B,
      optimumDistance: c
    } : a;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, po = function(e, A, t, r, n) {
  var s = 0, a = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? s = a = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.min(Math.abs(A), Math.abs(A - r)), a = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        s = a = Math.min(HA(A, t), HA(A, t - n), HA(A - r, t), HA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), i = Hn(r, n, A, t, !0), o = i[0], c = i[1];
        s = HA(o - A, (c - t) / B), a = B * s;
      }
      break;
    case 1:
      e.shape === 0 ? s = a = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.max(Math.abs(A), Math.abs(A - r)), a = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        s = a = Math.max(HA(A, t), HA(A, t - n), HA(A - r, t), HA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), u = Hn(r, n, A, t, !1), o = u[0], c = u[1];
        s = HA(o - A, (c - t) / B), a = B * s;
      }
      break;
  }
  return Array.isArray(e.size) && (s = _(e.size[0], r), a = e.size.length === 2 ? _(e.size[1], n) : s), [s, a];
}, Eo = function(e, A) {
  var t = pA(180), r = [];
  return IA(A).forEach(function(n, s) {
    if (s === 0) {
      var a = n[0];
      if (a.type === 20 && a.value === "to") {
        t = Ss(n);
        return;
      } else if (Ts(a)) {
        t = mt.parse(e, a);
        return;
      }
    }
    var B = It(e, n);
    r.push(B);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, $e = function(e, A) {
  var t = pA(180), r = [];
  return IA(A).forEach(function(n, s) {
    if (s === 0) {
      var a = n[0];
      if (a.type === 20 && ["top", "left", "right", "bottom"].indexOf(a.value) !== -1) {
        t = Ss(n);
        return;
      } else if (Ts(a)) {
        t = (mt.parse(e, a) + pA(270)) % pA(360);
        return;
      }
    }
    var B = It(e, n);
    r.push(B);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Ho = function(e, A) {
  var t = pA(180), r = [], n = 1, s = 0, a = 3, B = [];
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
        var u = GA.parse(e, c.values[0]);
        r.push({ stop: sA, color: u });
      } else if (c.name === "to") {
        var u = GA.parse(e, c.values[0]);
        r.push({ stop: NA, color: u });
      } else if (c.name === "color-stop") {
        var l = c.values.filter(Be);
        if (l.length === 2) {
          var u = GA.parse(e, l[1]), w = l[0];
          oe(w) && r.push({
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
  } : { size: a, shape: s, stops: r, position: B, type: n };
}, Ms = "closest-side", Os = "farthest-side", Ns = "closest-corner", Rs = "farthest-corner", Gs = "circle", Vs = "ellipse", ks = "cover", _s = "contain", vo = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return IA(A).forEach(function(a, B) {
    var i = !0;
    if (B === 0) {
      var o = !1;
      i = a.reduce(function(u, l) {
        if (o)
          if (G(l))
            switch (l.value) {
              case "center":
                return s.push(Tr), u;
              case "top":
              case "left":
                return s.push(sA), u;
              case "right":
              case "bottom":
                return s.push(NA), u;
            }
          else
            (z(l) || kA(l)) && s.push(l);
        else if (G(l))
          switch (l.value) {
            case Gs:
              return t = 0, !1;
            case Vs:
              return t = 1, !1;
            case "at":
              return o = !0, !1;
            case Ms:
              return r = 0, !1;
            case ks:
            case Os:
              return r = 1, !1;
            case _s:
            case Ns:
              return r = 2, !1;
            case Rs:
              return r = 3, !1;
          }
        else if (kA(l) || z(l))
          return Array.isArray(r) || (r = []), r.push(l), !1;
        return u;
      }, i);
    }
    if (i) {
      var c = It(e, a);
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
}, At = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return IA(A).forEach(function(a, B) {
    var i = !0;
    if (B === 0 ? i = a.reduce(function(c, u) {
      if (G(u))
        switch (u.value) {
          case "center":
            return s.push(Tr), !1;
          case "top":
          case "left":
            return s.push(sA), !1;
          case "right":
          case "bottom":
            return s.push(NA), !1;
        }
      else if (z(u) || kA(u))
        return s.push(u), !1;
      return c;
    }, i) : B === 1 && (i = a.reduce(function(c, u) {
      if (G(u))
        switch (u.value) {
          case Gs:
            return t = 0, !1;
          case Vs:
            return t = 1, !1;
          case _s:
          case Ms:
            return r = 0, !1;
          case Os:
            return r = 1, !1;
          case Ns:
            return r = 2, !1;
          case ks:
          case Rs:
            return r = 3, !1;
        }
      else if (kA(u) || z(u))
        return Array.isArray(r) || (r = []), r.push(u), !1;
      return c;
    }, i)), i) {
      var o = It(e, a);
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
}, mo = function(e) {
  return e.type === 1;
}, Io = function(e) {
  return e.type === 2;
}, Sr = {
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
      var r = Ps[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function yo(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Ps[e.name]);
}
var Ps = {
  "linear-gradient": Eo,
  "-moz-linear-gradient": $e,
  "-ms-linear-gradient": $e,
  "-o-linear-gradient": $e,
  "-webkit-linear-gradient": $e,
  "radial-gradient": vo,
  "-moz-radial-gradient": At,
  "-ms-radial-gradient": At,
  "-o-radial-gradient": At,
  "-webkit-radial-gradient": At,
  "-webkit-gradient": Ho
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
      return Be(r) && yo(r);
    }).map(function(r) {
      return Sr.parse(e, r);
    });
  }
}, bo = {
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
      return t.filter(z);
    }).map(Ks);
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
}, ae;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(ae || (ae = {}));
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
  return G(e) || z(e);
}, yt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Mo = yt("top"), Oo = yt("right"), No = yt("bottom"), Ro = yt("left"), Kt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return Ks(t.filter(z));
    }
  };
}, Go = Kt("top-left"), Vo = Kt("top-right"), ko = Kt("bottom-right"), _o = Kt("bottom-left"), bt = function(e) {
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
}, Po = bt("top"), Xo = bt("right"), Jo = bt("bottom"), Wo = bt("left"), Lt = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return Oe(t) ? t.number : 0;
    }
  };
}, Yo = Lt("top"), Zo = Lt("right"), zo = Lt("bottom"), jo = Lt("left"), qo = {
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
}, ft;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(ft || (ft = {}));
var nc = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "strict":
        return ft.STRICT;
      case "normal":
      default:
        return ft.NORMAL;
    }
  }
}, sc = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, vn = function(e, A) {
  return G(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : z(e) ? _(e, A) : A;
}, ac = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return A.type === 20 && A.value === "none" ? null : Sr.parse(e, A);
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
}, pr = {
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
}, xt = function(e) {
  return {
    name: "margin-" + e,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, ic = xt("top"), oc = xt("right"), cc = xt("bottom"), lc = xt("left"), uc = {
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
}, Dt = function(e) {
  return {
    name: "padding-" + e,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, Qc = Dt("top"), wc = Dt("right"), fc = Dt("bottom"), Cc = Dt("left"), Uc = {
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
    return A.length === 1 && dr(A[0], "none") ? [] : IA(A).map(function(t) {
      for (var r = {
        color: xA.TRANSPARENT,
        offsetX: sA,
        offsetY: sA,
        blur: sA
      }, n = 0, s = 0; s < t.length; s++) {
        var a = t[s];
        kA(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : r.blur = a, n++) : r.color = GA.parse(e, a);
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
      var t = vc[A.name];
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
  var n = A[4], s = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var a = A[12], B = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, n, s, a, B] : null;
}, vc = {
  matrix: Ec,
  matrix3d: Hc
}, mn = {
  type: 16,
  number: 50,
  flags: Me
}, mc = [mn, mn], Ic = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(z);
    return t.length !== 2 ? mc : [t[0], t[1]];
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
}, me;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(me || (me = {}));
var Kc = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(e, A) {
    switch (A) {
      case "break-all":
        return me.BREAK_ALL;
      case "keep-all":
        return me.KEEP_ALL;
      case "normal":
      default:
        return me.NORMAL;
    }
  }
}, bc = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(e, A) {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (oe(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Xs = {
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
    return oe(A) ? A.number : 1;
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
    if (oe(A))
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
    for (var r = [], n = A.filter(ys), s = 0; s < n.length; s++) {
      var a = n[s], B = n[s + 1];
      if (a.type === 20) {
        var i = B && oe(B) ? B.number : 1;
        r.push({ counter: a.value, increment: i });
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
    for (var t = [], r = A.filter(ys), n = 0; n < r.length; n++) {
      var s = r[n], a = r[n + 1];
      if (G(s) && s.value !== "none") {
        var B = a && oe(a) ? a.number : 0;
        t.push({ counter: s.value, reset: B });
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
    return A.filter(Oe).map(function(t) {
      return Xs.parse(e, t);
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
    for (var s = 0; s < n.length; s += 2) {
      var a = n[s].value, B = n[s + 1].value;
      r.push({ open: a, close: B });
    }
    return r;
  }
}, In = function(e, A, t) {
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
    return A.length === 1 && dr(A[0], "none") ? [] : IA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: sA,
        offsetY: sA,
        blur: sA,
        spread: sA,
        inset: !1
      }, n = 0, s = 0; s < t.length; s++) {
        var a = t[s];
        dr(a, "inset") ? r.inset = !0 : kA(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : n === 2 ? r.blur = a : r.spread = a, n++) : r.color = GA.parse(e, a);
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
}, Wc = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return Oe(A) ? A.number : 0;
  }
}, Yc = (
  /** @class */
  function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = E(A, kc, t.animationDuration), this.backgroundClip = E(A, Co, t.backgroundClip), this.backgroundColor = E(A, Uo, t.backgroundColor), this.backgroundImage = E(A, Ko, t.backgroundImage), this.backgroundOrigin = E(A, bo, t.backgroundOrigin), this.backgroundPosition = E(A, Lo, t.backgroundPosition), this.backgroundRepeat = E(A, xo, t.backgroundRepeat), this.backgroundSize = E(A, To, t.backgroundSize), this.borderTopColor = E(A, Mo, t.borderTopColor), this.borderRightColor = E(A, Oo, t.borderRightColor), this.borderBottomColor = E(A, No, t.borderBottomColor), this.borderLeftColor = E(A, Ro, t.borderLeftColor), this.borderTopLeftRadius = E(A, Go, t.borderTopLeftRadius), this.borderTopRightRadius = E(A, Vo, t.borderTopRightRadius), this.borderBottomRightRadius = E(A, ko, t.borderBottomRightRadius), this.borderBottomLeftRadius = E(A, _o, t.borderBottomLeftRadius), this.borderTopStyle = E(A, Po, t.borderTopStyle), this.borderRightStyle = E(A, Xo, t.borderRightStyle), this.borderBottomStyle = E(A, Jo, t.borderBottomStyle), this.borderLeftStyle = E(A, Wo, t.borderLeftStyle), this.borderTopWidth = E(A, Yo, t.borderTopWidth), this.borderRightWidth = E(A, Zo, t.borderRightWidth), this.borderBottomWidth = E(A, zo, t.borderBottomWidth), this.borderLeftWidth = E(A, jo, t.borderLeftWidth), this.boxShadow = E(A, Pc, t.boxShadow), this.color = E(A, qo, t.color), this.direction = E(A, $o, t.direction), this.display = E(A, Ac, t.display), this.float = E(A, tc, t.cssFloat), this.fontFamily = E(A, Tc, t.fontFamily), this.fontSize = E(A, Sc, t.fontSize), this.fontStyle = E(A, Nc, t.fontStyle), this.fontVariant = E(A, Oc, t.fontVariant), this.fontWeight = E(A, Mc, t.fontWeight), this.letterSpacing = E(A, rc, t.letterSpacing), this.lineBreak = E(A, nc, t.lineBreak), this.lineHeight = E(A, sc, t.lineHeight), this.listStyleImage = E(A, ac, t.listStyleImage), this.listStylePosition = E(A, Bc, t.listStylePosition), this.listStyleType = E(A, pr, t.listStyleType), this.marginTop = E(A, ic, t.marginTop), this.marginRight = E(A, oc, t.marginRight), this.marginBottom = E(A, cc, t.marginBottom), this.marginLeft = E(A, lc, t.marginLeft), this.opacity = E(A, Lc, t.opacity);
      var s = E(A, uc, t.overflow);
      this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = E(A, gc, t.overflowWrap), this.paddingTop = E(A, Qc, t.paddingTop), this.paddingRight = E(A, wc, t.paddingRight), this.paddingBottom = E(A, fc, t.paddingBottom), this.paddingLeft = E(A, Cc, t.paddingLeft), this.paintOrder = E(A, Xc, t.paintOrder), this.position = E(A, Fc, t.position), this.textAlign = E(A, Uc, t.textAlign), this.textDecorationColor = E(A, xc, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = E(A, Dc, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = E(A, hc, t.textShadow), this.textTransform = E(A, dc, t.textTransform), this.transform = E(A, pc, t.transform), this.transformOrigin = E(A, Ic, t.transformOrigin), this.visibility = E(A, yc, t.visibility), this.webkitTextStrokeColor = E(A, Jc, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = E(A, Wc, t.webkitTextStrokeWidth), this.wordBreak = E(A, Kc, t.wordBreak), this.zIndex = E(A, bc, t.zIndex);
    }
    return e.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, e.prototype.isTransparent = function() {
      return VA(this.backgroundColor);
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
      this.content = E(A, Rc, t.content), this.quotes = E(A, _c, t.quotes);
    }
    return e;
  }()
), yn = (
  /** @class */
  function() {
    function e(A, t) {
      this.counterIncrement = E(A, Gc, t.counterIncrement), this.counterReset = E(A, Vc, t.counterReset);
    }
    return e;
  }()
), E = function(e, A, t) {
  var r = new ms(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var s = new Is(r.read());
  switch (A.type) {
    case 2:
      var a = s.parseComponentValue();
      return A.parse(e, G(a) ? a.value : A.initialValue);
    case 0:
      return A.parse(e, s.parseComponentValue());
    case 1:
      return A.parse(e, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return mt.parse(e, s.parseComponentValue());
        case "color":
          return GA.parse(e, s.parseComponentValue());
        case "image":
          return Sr.parse(e, s.parseComponentValue());
        case "length":
          var B = s.parseComponentValue();
          return kA(B) ? B : sA;
        case "length-percentage":
          var i = s.parseComponentValue();
          return z(i) ? i : sA;
        case "time":
          return Xs.parse(e, s.parseComponentValue());
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
}, Er = function(e, A) {
  var t = jc(e);
  return t === 1 || A === t;
}, yA = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Er(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Yc(A, window.getComputedStyle(t, null)), mr(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Ht(this.context, t), Er(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), qc = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Kn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var et = 0; et < Kn.length; et++)
  pe[Kn.charCodeAt(et)] = et;
var $c = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, s, a, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    s = pe[e.charCodeAt(r)], a = pe[e.charCodeAt(r + 1)], B = pe[e.charCodeAt(r + 2)], i = pe[e.charCodeAt(r + 3)], c[n++] = s << 2 | a >> 4, c[n++] = (a & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, Al = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, el = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, YA = 5, Mr = 6 + 5, Jt = 2, tl = Mr - YA, Js = 65536 >> YA, rl = 1 << YA, Wt = rl - 1, nl = 1024 >> YA, sl = Js + nl, al = sl, Bl = 32, il = al + Bl, ol = 65536 >> Mr, cl = 1 << tl, ll = cl - 1, bn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, ul = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, gl = function(e, A) {
  var t = $c(e), r = Array.isArray(t) ? el(t) : new Uint32Array(t), n = Array.isArray(t) ? Al(t) : new Uint16Array(t), s = 24, a = bn(n, s / 2, r[4] / 2), B = r[5] === 2 ? bn(n, (s + r[4]) / 2) : ul(r, Math.ceil((s + r[4]) / 4));
  return new Ql(r[0], r[1], r[2], r[3], a, B);
}, Ql = (
  /** @class */
  function() {
    function e(A, t, r, n, s, a) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = a;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> YA], t = (t << Jt) + (A & Wt), this.data[t];
        if (A <= 65535)
          return t = this.index[Js + (A - 55296 >> YA)], t = (t << Jt) + (A & Wt), this.data[t];
        if (A < this.highStart)
          return t = il - ol + (A >> Mr), t = this.index[t], t += A >> YA & ll, t = this.index[t], t = (t << Jt) + (A & Wt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Ln = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", wl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var tt = 0; tt < Ln.length; tt++)
  wl[Ln.charCodeAt(tt)] = tt;
var fl = 1, Yt = 2, Zt = 3, xn = 4, Dn = 5, Cl = 7, Tn = 8, zt = 9, jt = 10, Sn = 11, Mn = 12, On = 13, Nn = 14, qt = 15, Ul = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n), t--);
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
  for (var r = [], n = -1, s = ""; ++n < t; ) {
    var a = e[n];
    a <= 65535 ? r.push(a) : (a -= 65536, r.push((a >> 10) + 55296, a % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, hl = gl(qc), hA = "×", $t = "÷", dl = function(e) {
  return hl.get(e);
}, pl = function(e, A, t) {
  var r = t - 2, n = A[r], s = A[t - 1], a = A[t];
  if (s === Yt && a === Zt)
    return hA;
  if (s === Yt || s === Zt || s === xn || a === Yt || a === Zt || a === xn)
    return $t;
  if (s === Tn && [Tn, zt, Sn, Mn].indexOf(a) !== -1 || (s === Sn || s === zt) && (a === zt || a === jt) || (s === Mn || s === jt) && a === jt || a === On || a === Dn || a === Cl || s === fl)
    return hA;
  if (s === On && a === Nn) {
    for (; n === Dn; )
      n = A[--r];
    if (n === Nn)
      return hA;
  }
  if (s === qt && a === qt) {
    for (var B = 0; n === qt; )
      B++, n = A[--r];
    if (B % 2 === 0)
      return hA;
  }
  return $t;
}, El = function(e) {
  var A = Ul(e), t = A.length, r = 0, n = 0, s = A.map(dl);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var a = hA; r < t && (a = pl(A, s, ++r)) === hA; )
        ;
      if (a !== hA || r === t) {
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
}, ml = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = vt(r.data).map(function(i) {
    return Z(i);
  }), s = 0, a = {}, B = n.every(function(i, o) {
    t.setStart(r, s), t.setEnd(r, s + i.length);
    var c = t.getBoundingClientRect();
    s += i.length;
    var u = c.x > a.x || c.y > a.y;
    return a = c, o === 0 ? !0 : u;
  });
  return e.body.removeChild(A), B;
}, Il = function() {
  return typeof new Image().crossOrigin < "u";
}, yl = function() {
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
}, Rn = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, bl = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), s = A.toDataURL();
  n.src = s;
  var a = Hr(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), Gn(a).then(function(B) {
    r.drawImage(B, 0, 0);
    var i = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var o = e.createElement("div");
    return o.style.backgroundImage = "url(" + s + ")", o.style.height = t + "px", Rn(i) ? Gn(Hr(t, t, 0, 0, o)) : Promise.reject(!1);
  }).then(function(B) {
    return r.drawImage(B, 0, 0), Rn(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Hr = function(e, A, t, r, n) {
  var s = "http://www.w3.org/2000/svg", a = document.createElementNS(s, "svg"), B = document.createElementNS(s, "foreignObject");
  return a.setAttributeNS(null, "width", e.toString()), a.setAttributeNS(null, "height", A.toString()), B.setAttributeNS(null, "width", "100%"), B.setAttributeNS(null, "height", "100%"), B.setAttributeNS(null, "x", t.toString()), B.setAttributeNS(null, "y", r.toString()), B.setAttributeNS(null, "externalResourcesRequired", "true"), a.appendChild(B), B.appendChild(n), a;
}, Gn = function(e) {
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
    var e = nA.SUPPORT_RANGE_BOUNDS && ml(document);
    return Object.defineProperty(nA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = Kl(document);
    return Object.defineProperty(nA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? bl(document) : Promise.resolve(!1);
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
}, Ie = (
  /** @class */
  function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), Ll = function(e, A, t, r) {
  var n = Tl(A, t), s = [], a = 0;
  return n.forEach(function(B) {
    if (t.textDecorationLine.length || B.trim().length > 0)
      if (nA.SUPPORT_RANGE_BOUNDS) {
        var i = Vn(r, a, B.length).getClientRects();
        if (i.length > 1) {
          var o = Or(B), c = 0;
          o.forEach(function(l) {
            s.push(new Ie(l, DA.fromDOMRectList(e, Vn(r, c + a, l.length).getClientRects()))), c += l.length;
          });
        } else
          s.push(new Ie(B, DA.fromDOMRectList(e, i)));
      } else {
        var u = r.splitText(B.length);
        s.push(new Ie(B, xl(e, r))), r = u;
      }
    else
      nA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(B.length));
    a += B.length;
  }), s;
}, xl = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var s = Ht(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), s;
    }
  }
  return DA.EMPTY;
}, Vn = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, Or = function(e) {
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
  return A.letterSpacing !== 0 ? Or(e) : Dl(e, A);
}, Sl = [32, 160, 4961, 65792, 65793, 4153, 4241], Ml = function(e, A) {
  for (var t = ii(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, s = function() {
    if (n.value) {
      var a = n.value.slice(), B = vt(a), i = "";
      B.forEach(function(o) {
        Sl.indexOf(o) === -1 ? i += Z(o) : (i.length && r.push(i), r.push(Z(o)), i = "");
      }), i.length && r.push(i);
    }
  }; !(n = t.next()).done; )
    s();
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
}, Ws = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  }(yA)
), Ys = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  }(yA)
), Zs = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, s = new XMLSerializer(), a = Ht(t, r);
      return r.setAttribute("width", a.width + "px"), r.setAttribute("height", a.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  }(yA)
), zs = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(yA)
), vr = (
  /** @class */
  function(e) {
    vA(A, e);
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
  return e.width > e.height ? new DA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new DA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, Pl = function(e) {
  var A = e.type === Xl ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, Ct = "checkbox", Ut = "radio", Xl = "password", kn = 707406591, Nr = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Pl(r), (n.type === Ct || n.type === Ut) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = _l(n.bounds)), n.type) {
        case Ct:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Vl;
          break;
        case Ut:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = kl;
          break;
      }
      return n;
    }
    return A;
  }(yA)
), js = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, s = r.options[r.selectedIndex || 0];
      return n.value = s && s.text || "", n;
    }
    return A;
  }(yA)
), qs = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(yA)
), $s = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = ea(t, r.contentWindow.document.documentElement);
          var s = r.contentWindow.document.documentElement ? ve(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : xA.TRANSPARENT, a = r.contentWindow.document.body ? ve(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : xA.TRANSPARENT;
          n.backgroundColor = VA(s) ? VA(a) ? n.styles.backgroundColor : a : s;
        }
      } catch {
      }
      return n;
    }
    return A;
  }(yA)
), Jl = ["OL", "UL", "MENU"], ot = function(e, A, t, r) {
  for (var n = A.firstChild, s = void 0; n; n = s)
    if (s = n.nextSibling, ta(n) && n.data.trim().length > 0)
      t.textNodes.push(new Ol(e, n, t.styles));
    else if (se(n))
      if (aa(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(B) {
          return ot(e, B, t, r);
        });
      else {
        var a = Aa(e, n);
        a.styles.isVisible() && (Wl(n, a, r) ? a.flags |= 4 : Yl(a.styles) && (a.flags |= 2), Jl.indexOf(n.tagName) !== -1 && (a.flags |= 8), t.elements.push(a), n.slot, n.shadowRoot ? ot(e, n.shadowRoot, a, r) : !Ft(n) && !ra(n) && !ht(n) && ot(e, n, a, r));
      }
}, Aa = function(e, A) {
  return Ir(A) ? new Ws(e, A) : na(A) ? new Ys(e, A) : ra(A) ? new Zs(e, A) : Zl(A) ? new zs(e, A) : zl(A) ? new vr(e, A) : jl(A) ? new Nr(e, A) : ht(A) ? new js(e, A) : Ft(A) ? new qs(e, A) : sa(A) ? new $s(e, A) : new yA(e, A);
}, ea = function(e, A) {
  var t = Aa(e, A);
  return t.flags |= 4, ot(e, A, t, t), t;
}, Wl = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Rr(e) && t.styles.isTransparent();
}, Yl = function(e) {
  return e.isPositioned() || e.isFloating();
}, ta = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, se = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, mr = function(e) {
  return se(e) && typeof e.style < "u" && !ct(e);
}, ct = function(e) {
  return typeof e.className == "object";
}, Zl = function(e) {
  return e.tagName === "LI";
}, zl = function(e) {
  return e.tagName === "OL";
}, jl = function(e) {
  return e.tagName === "INPUT";
}, ql = function(e) {
  return e.tagName === "HTML";
}, ra = function(e) {
  return e.tagName === "svg";
}, Rr = function(e) {
  return e.tagName === "BODY";
}, na = function(e) {
  return e.tagName === "CANVAS";
}, _n = function(e) {
  return e.tagName === "VIDEO";
}, Ir = function(e) {
  return e.tagName === "IMG";
}, sa = function(e) {
  return e.tagName === "IFRAME";
}, Pn = function(e) {
  return e.tagName === "STYLE";
}, $l = function(e) {
  return e.tagName === "SCRIPT";
}, Ft = function(e) {
  return e.tagName === "TEXTAREA";
}, ht = function(e) {
  return e.tagName === "SELECT";
}, aa = function(e) {
  return e.tagName === "SLOT";
}, Xn = function(e) {
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
), Jn = {
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
}, $A = function(e, A, t, r, n, s) {
  return e < A || e > t ? Se(e, n, s.length > 0) : r.integers.reduce(function(a, B, i) {
    for (; e >= B; )
      e -= B, a += r.values[i];
    return a;
  }, "") + s;
}, Ba = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, Y = function(e, A, t, r, n) {
  var s = t - A + 1;
  return (e < 0 ? "-" : "") + (Ba(Math.abs(e), s, r, function(a) {
    return Z(Math.floor(a % s) + A);
  }) + n);
}, PA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return Ba(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, te = 1, TA = 2, SA = 4, Ee = 8, bA = function(e, A, t, r, n, s) {
  if (e < -9999 || e > 9999)
    return Se(e, 4, n.length > 0);
  var a = Math.abs(e), B = n;
  if (a === 0)
    return A[0] + B;
  for (var i = 0; a > 0 && i <= 4; i++) {
    var o = a % 10;
    o === 0 && eA(s, te) && B !== "" ? B = A[o] + B : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && eA(s, TA) || o === 1 && i === 1 && eA(s, SA) && e > 100 || o === 1 && i > 1 && eA(s, Ee) ? B = A[o] + (i > 0 ? t[i - 1] : "") + B : o === 1 && i > 0 && (B = t[i - 1] + B), a = Math.floor(a / 10);
  }
  return (e < 0 ? r : "") + B;
}, Yn = "十百千萬", Zn = "拾佰仟萬", zn = "マイナス", Ar = "마이너스", Se = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", a = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + a;
    case 1:
      return "◦" + a;
    case 2:
      return "◾" + a;
    case 5:
      var B = Y(e, 48, 57, !0, r);
      return B.length < 4 ? "0" + B : B;
    case 4:
      return PA(e, "〇一二三四五六七八九", n);
    case 6:
      return $A(e, 1, 3999, Jn, 3, r).toLowerCase();
    case 7:
      return $A(e, 1, 3999, Jn, 3, r);
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
      return $A(e, 1, 9999, Wn, 3, r);
    case 35:
      return $A(e, 1, 9999, Wn, 3, r).toLowerCase();
    case 13:
      return Y(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return Y(e, 6112, 6121, !0, r);
    case 15:
      return PA(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return PA(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return bA(e, "零一二三四五六七八九", Yn, "負", n, TA | SA | Ee);
    case 47:
      return bA(e, "零壹貳參肆伍陸柒捌玖", Zn, "負", n, te | TA | SA | Ee);
    case 42:
      return bA(e, "零一二三四五六七八九", Yn, "负", n, TA | SA | Ee);
    case 41:
      return bA(e, "零壹贰叁肆伍陆柒捌玖", Zn, "负", n, te | TA | SA | Ee);
    case 26:
      return bA(e, "〇一二三四五六七八九", "十百千万", zn, n, 0);
    case 25:
      return bA(e, "零壱弐参四伍六七八九", "拾百千万", zn, n, te | TA | SA);
    case 31:
      return bA(e, "영일이삼사오육칠팔구", "십백천만", Ar, s, te | TA | SA);
    case 33:
      return bA(e, "零一二三四五六七八九", "十百千萬", Ar, s, 0);
    case 32:
      return bA(e, "零壹貳參四五六七八九", "拾百千", Ar, s, te | TA | SA);
    case 18:
      return Y(e, 2406, 2415, !0, r);
    case 20:
      return $A(e, 1, 19999, tu, 3, r);
    case 21:
      return Y(e, 2790, 2799, !0, r);
    case 22:
      return Y(e, 2662, 2671, !0, r);
    case 22:
      return $A(e, 1, 10999, eu, 3, r);
    case 23:
      return PA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return PA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return Y(e, 3302, 3311, !0, r);
    case 28:
      return PA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return PA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
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
}, ia = "data-html2canvas-ignore", jn = (
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
      var s = A.defaultView.pageXOffset, a = A.defaultView.pageYOffset, B = n.contentWindow, i = B.document, o = au(n).then(function() {
        return cA(r, void 0, void 0, function() {
          var c, u;
          return aA(this, function(l) {
            switch (l.label) {
              case 0:
                return this.scrolledElements.forEach(cu), B && (B.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (B.scrollY !== t.top || B.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(B.scrollX - t.left, B.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
              case 1:
                l.sent(), l.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, su(i)] : [3, 4];
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
      return i.open(), i.write(iu(document.doctype) + "<html></html>"), ou(this.referenceElement.ownerDocument, s, a), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), o;
    }, e.prototype.createElementClone = function(A) {
      if (Er(
        A,
        2
        /* CLONE */
      ))
        debugger;
      if (na(A))
        return this.createCanvasClone(A);
      if (_n(A))
        return this.createVideoClone(A);
      if (Pn(A))
        return this.createStyleClone(A);
      var t = A.cloneNode(!1);
      return Ir(t) && (Ir(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Xn(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return er(A.style, t), t;
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
      (!se(t) || !$l(t) && !t.hasAttribute(ia) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !se(t) || !Pn(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, s = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; s; s = s.nextSibling)
        if (se(s) && aa(s) && typeof s.assignedNodes == "function") {
          var a = s.assignedNodes();
          a.length && a.forEach(function(B) {
            return n.appendChildNode(t, B, r);
          });
        } else
          this.appendChildNode(t, s, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (ta(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && se(A) && (mr(A) || ct(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var s = r.getComputedStyle(A), a = r.getComputedStyle(A, ":before"), B = r.getComputedStyle(A, ":after");
        this.referenceElement === A && mr(n) && (this.clonedReferenceElement = n), Rr(n) && gu(n);
        var i = this.counters.parse(new yn(this.context, s)), o = this.resolvePseudoContent(A, n, a, ye.BEFORE);
        Xn(A) && (t = !0), _n(A) || this.cloneChildNodes(A, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(A, n, B, ye.AFTER);
        return c && n.appendChild(c), this.counters.pop(i), (s && (this.options.copyStyles || ct(A)) && !sa(A) || t) && er(s, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (Ft(A) || ht(A)) && (Ft(n) || ht(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var s = this;
      if (r) {
        var a = r.content, B = t.ownerDocument;
        if (!(!B || !a || a === "none" || a === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new yn(this.context, r));
          var i = new Zc(this.context, r), o = B.createElement("html2canvaspseudoelement");
          er(r, o), i.content.forEach(function(u) {
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
                var g = u.values.filter(Be), Q = g[0], C = g[1];
                if (Q && G(Q)) {
                  var f = s.counters.getCounterValue(Q.value), d = C && G(C) ? pr.parse(s.context, C.value) : 3;
                  o.appendChild(B.createTextNode(Se(f, d, !1)));
                }
              } else if (u.name === "counters") {
                var H = u.values.filter(Be), Q = H[0], y = H[1], C = H[2];
                if (Q && G(Q)) {
                  var I = s.counters.getCounterValues(Q.value), F = C && G(C) ? pr.parse(s.context, C.value) : 3, b = y && y.type === 0 ? y.value : "", K = I.map(function(j) {
                    return Se(j, F, !1);
                  }).join(b);
                  o.appendChild(B.createTextNode(K));
                }
              }
            } else if (u.type === 20)
              switch (u.value) {
                case "open-quote":
                  o.appendChild(B.createTextNode(In(i.quotes, s.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(B.createTextNode(In(i.quotes, --s.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(B.createTextNode(u.value));
              }
          }), o.className = yr + " " + Kr;
          var c = n === ye.BEFORE ? " " + yr : " " + Kr;
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
var ru = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(ia, "true"), e.body.appendChild(t), t;
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
}, su = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(nu));
}, au = function(e) {
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
}, Bu = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], er = function(e, A) {
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
}, lu = ":before", uu = ":after", yr = "___html2canvas___pseudoelement_before", Kr = "___html2canvas___pseudoelement_after", qn = `{
    content: "" !important;
    display: none !important;
}`, gu = function(e) {
  Qu(e, "." + yr + lu + qn + `
         .` + Kr + uu + qn);
}, Qu = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, oa = (
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
      return this.has(A) || (rr(A) || Fu(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return cA(this, void 0, void 0, function() {
        var t, r, n, s, a = this;
        return aA(this, function(B) {
          switch (B.label) {
            case 0:
              return t = oa.isSameOrigin(A), r = !tr(A) && this._options.useCORS === !0 && nA.SUPPORT_CORS_IMAGES && !t, n = !tr(A) && !t && !rr(A) && typeof this._options.proxy == "string" && nA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !tr(A) && !rr(A) && !n && !r ? [
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
                }, c.onerror = o, (hu(s) || r) && (c.crossOrigin = "anonymous"), c.src = s, c.complete === !0 && setTimeout(function() {
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
              var u = new FileReader();
              u.addEventListener("load", function() {
                return s(u.result);
              }, !1), u.addEventListener("error", function(l) {
                return a(l);
              }, !1), u.readAsDataURL(i.response);
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
), fu = /^data:image\/svg\+xml/i, Cu = /^data:image\/.*;base64,/i, Uu = /^data:image\/.*/i, Fu = function(e) {
  return nA.SUPPORT_SVG_DRAWING || !du(e);
}, tr = function(e) {
  return Uu.test(e);
}, hu = function(e) {
  return Cu.test(e);
}, rr = function(e) {
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
), Ae = function(e, A, t) {
  return new p(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, rt = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = Ae(this.start, this.startControl, A), n = Ae(this.startControl, this.endControl, A), s = Ae(this.endControl, this.end, A), a = Ae(r, n, A), B = Ae(n, s, A), i = Ae(a, B, A);
      return t ? new e(this.start, r, a, i) : new e(i, B, s, this.end);
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
      var t = A.styles, r = A.bounds, n = de(t.borderTopLeftRadius, r.width, r.height), s = n[0], a = n[1], B = de(t.borderTopRightRadius, r.width, r.height), i = B[0], o = B[1], c = de(t.borderBottomRightRadius, r.width, r.height), u = c[0], l = c[1], w = de(t.borderBottomLeftRadius, r.width, r.height), g = w[0], Q = w[1], C = [];
      C.push((s + i) / r.width), C.push((g + u) / r.width), C.push((a + Q) / r.height), C.push((o + l) / r.height);
      var f = Math.max.apply(Math, C);
      f > 1 && (s /= f, a /= f, i /= f, o /= f, u /= f, l /= f, g /= f, Q /= f);
      var d = r.width - i, H = r.height - l, y = r.width - u, I = r.height - Q, F = t.borderTopWidth, b = t.borderRightWidth, K = t.borderBottomWidth, m = t.borderLeftWidth, R = _(t.paddingTop, A.bounds.width), j = _(t.paddingRight, A.bounds.width), q = _(t.paddingBottom, A.bounds.width), D = _(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = s > 0 || a > 0 ? X(r.left + m / 3, r.top + F / 3, s - m / 3, a - F / 3, N.TOP_LEFT) : new p(r.left + m / 3, r.top + F / 3), this.topRightBorderDoubleOuterBox = s > 0 || a > 0 ? X(r.left + d, r.top + F / 3, i - b / 3, o - F / 3, N.TOP_RIGHT) : new p(r.left + r.width - b / 3, r.top + F / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || l > 0 ? X(r.left + y, r.top + H, u - b / 3, l - K / 3, N.BOTTOM_RIGHT) : new p(r.left + r.width - b / 3, r.top + r.height - K / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || Q > 0 ? X(r.left + m / 3, r.top + I, g - m / 3, Q - K / 3, N.BOTTOM_LEFT) : new p(r.left + m / 3, r.top + r.height - K / 3), this.topLeftBorderDoubleInnerBox = s > 0 || a > 0 ? X(r.left + m * 2 / 3, r.top + F * 2 / 3, s - m * 2 / 3, a - F * 2 / 3, N.TOP_LEFT) : new p(r.left + m * 2 / 3, r.top + F * 2 / 3), this.topRightBorderDoubleInnerBox = s > 0 || a > 0 ? X(r.left + d, r.top + F * 2 / 3, i - b * 2 / 3, o - F * 2 / 3, N.TOP_RIGHT) : new p(r.left + r.width - b * 2 / 3, r.top + F * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || l > 0 ? X(r.left + y, r.top + H, u - b * 2 / 3, l - K * 2 / 3, N.BOTTOM_RIGHT) : new p(r.left + r.width - b * 2 / 3, r.top + r.height - K * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || Q > 0 ? X(r.left + m * 2 / 3, r.top + I, g - m * 2 / 3, Q - K * 2 / 3, N.BOTTOM_LEFT) : new p(r.left + m * 2 / 3, r.top + r.height - K * 2 / 3), this.topLeftBorderStroke = s > 0 || a > 0 ? X(r.left + m / 2, r.top + F / 2, s - m / 2, a - F / 2, N.TOP_LEFT) : new p(r.left + m / 2, r.top + F / 2), this.topRightBorderStroke = s > 0 || a > 0 ? X(r.left + d, r.top + F / 2, i - b / 2, o - F / 2, N.TOP_RIGHT) : new p(r.left + r.width - b / 2, r.top + F / 2), this.bottomRightBorderStroke = u > 0 || l > 0 ? X(r.left + y, r.top + H, u - b / 2, l - K / 2, N.BOTTOM_RIGHT) : new p(r.left + r.width - b / 2, r.top + r.height - K / 2), this.bottomLeftBorderStroke = g > 0 || Q > 0 ? X(r.left + m / 2, r.top + I, g - m / 2, Q - K / 2, N.BOTTOM_LEFT) : new p(r.left + m / 2, r.top + r.height - K / 2), this.topLeftBorderBox = s > 0 || a > 0 ? X(r.left, r.top, s, a, N.TOP_LEFT) : new p(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? X(r.left + d, r.top, i, o, N.TOP_RIGHT) : new p(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || l > 0 ? X(r.left + y, r.top + H, u, l, N.BOTTOM_RIGHT) : new p(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || Q > 0 ? X(r.left, r.top + I, g, Q, N.BOTTOM_LEFT) : new p(r.left, r.top + r.height), this.topLeftPaddingBox = s > 0 || a > 0 ? X(r.left + m, r.top + F, Math.max(0, s - m), Math.max(0, a - F), N.TOP_LEFT) : new p(r.left + m, r.top + F), this.topRightPaddingBox = i > 0 || o > 0 ? X(r.left + Math.min(d, r.width - b), r.top + F, d > r.width + b ? 0 : Math.max(0, i - b), Math.max(0, o - F), N.TOP_RIGHT) : new p(r.left + r.width - b, r.top + F), this.bottomRightPaddingBox = u > 0 || l > 0 ? X(r.left + Math.min(y, r.width - m), r.top + Math.min(H, r.height - K), Math.max(0, u - b), Math.max(0, l - K), N.BOTTOM_RIGHT) : new p(r.left + r.width - b, r.top + r.height - K), this.bottomLeftPaddingBox = g > 0 || Q > 0 ? X(r.left + m, r.top + Math.min(I, r.height - K), Math.max(0, g - m), Math.max(0, Q - K), N.BOTTOM_LEFT) : new p(r.left + m, r.top + r.height - K), this.topLeftContentBox = s > 0 || a > 0 ? X(r.left + m + D, r.top + F + R, Math.max(0, s - (m + D)), Math.max(0, a - (F + R)), N.TOP_LEFT) : new p(r.left + m + D, r.top + F + R), this.topRightContentBox = i > 0 || o > 0 ? X(r.left + Math.min(d, r.width + m + D), r.top + F + R, d > r.width + m + D ? 0 : i - m + D, o - (F + R), N.TOP_RIGHT) : new p(r.left + r.width - (b + j), r.top + F + R), this.bottomRightContentBox = u > 0 || l > 0 ? X(r.left + Math.min(y, r.width - (m + D)), r.top + Math.min(H, r.height + F + R), Math.max(0, u - (b + j)), l - (K + q), N.BOTTOM_RIGHT) : new p(r.left + r.width - (b + j), r.top + r.height - (K + q)), this.bottomLeftContentBox = g > 0 || Q > 0 ? X(r.left + m + D, r.top + I, Math.max(0, g - (m + D)), Q - (K + q), N.BOTTOM_LEFT) : new p(r.left + m + D, r.top + r.height - (K + q));
    }
    return e;
  }()
), N;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(N || (N = {}));
var X = function(e, A, t, r, n) {
  var s = 4 * ((Math.sqrt(2) - 1) / 3), a = t * s, B = r * s, i = e + t, o = A + r;
  switch (n) {
    case N.TOP_LEFT:
      return new rt(new p(e, o), new p(e, o - B), new p(i - a, A), new p(i, A));
    case N.TOP_RIGHT:
      return new rt(new p(e, A), new p(e + a, A), new p(i, o - B), new p(i, o));
    case N.BOTTOM_RIGHT:
      return new rt(new p(i, A), new p(i, A + B), new p(e + a, o), new p(e, o));
    case N.BOTTOM_LEFT:
    default:
      return new rt(new p(i, o), new p(i - a, o), new p(e, A + B), new p(e, A));
  }
}, dt = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Eu = function(e) {
  return [
    e.topLeftContentBox,
    e.topRightContentBox,
    e.bottomRightContentBox,
    e.bottomLeftContentBox
  ];
}, pt = function(e) {
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
), nt = (
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
), mu = function(e) {
  return e.type === 0;
}, ca = function(e) {
  return e.type === 1;
}, Iu = function(e) {
  return e.type === 2;
}, $n = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, yu = function(e, A, t, r, n) {
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
}, la = (
  /** @class */
  function() {
    function e(A) {
      this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return e;
  }()
), ua = (
  /** @class */
  function() {
    function e(A, t) {
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new pu(this.container), this.container.styles.opacity < 1 && this.effects.push(new vu(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
        this.effects.push(new Hu(r, n, s));
      }
      if (this.container.styles.overflowX !== 0) {
        var a = dt(this.curves), B = pt(this.curves);
        $n(a, B) ? this.effects.push(new nt(
          a,
          6
          /* CONTENT */
        )) : (this.effects.push(new nt(
          a,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new nt(
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
          return !ca(i);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, s), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var a = dt(r.curves), B = pt(r.curves);
            $n(a, B) || n.unshift(new nt(
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
        return eA(i.target, A);
      });
    }, e;
  }()
), br = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var s = eA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), a = eA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), B = new ua(n, e);
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
    if (s || a) {
      var o = s || n.styles.isPositioned() ? t : A, c = new la(B);
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
      br(B, c, s ? c : t, i);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(B) : A.nonInlineLevel.push(B), br(B, A, t, i);
    eA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && ga(n, i);
  });
}, ga = function(e, A) {
  for (var t = e instanceof vr ? e.start : 1, r = e instanceof vr ? e.reversed : !1, n = 0; n < A.length; n++) {
    var s = A[n];
    s.container instanceof zs && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = Se(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Ku = function(e) {
  var A = new ua(e, null), t = new la(A), r = [];
  return br(A, t, t, r), ga(A.container, r), t;
}, As = function(e, A) {
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
}, bu = function(e, A) {
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
}, Qa = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Et = function(e) {
  var A = e.styles, t = e.bounds, r = _(A.paddingLeft, t.width), n = _(A.paddingRight, t.width), s = _(A.paddingTop, t.width), a = _(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, s + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + s + a));
}, Du = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Et(A) : Qa(A);
}, Tu = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Et(A) : Qa(A);
}, nr = function(e, A, t) {
  var r = Du(re(e.styles.backgroundOrigin, A), e), n = Tu(re(e.styles.backgroundClip, A), e), s = Su(re(e.styles.backgroundSize, A), t, r), a = s[0], B = s[1], i = de(re(e.styles.backgroundPosition, A), r.width - a, r.height - B), o = Mu(re(e.styles.backgroundRepeat, A), i, s, r, n), c = Math.round(r.left + i[0]), u = Math.round(r.top + i[1]);
  return [o, c, u, a, B];
}, ee = function(e) {
  return G(e) && e.value === ae.AUTO;
}, at = function(e) {
  return typeof e == "number";
}, Su = function(e, A, t) {
  var r = A[0], n = A[1], s = A[2], a = e[0], B = e[1];
  if (!a)
    return [0, 0];
  if (z(a) && B && z(B))
    return [_(a, t.width), _(B, t.height)];
  var i = at(s);
  if (G(a) && (a.value === ae.CONTAIN || a.value === ae.COVER)) {
    if (at(s)) {
      var o = t.width / t.height;
      return o < s != (a.value === ae.COVER) ? [t.width, t.width / s] : [t.height * s, t.height];
    }
    return [t.width, t.height];
  }
  var c = at(r), u = at(n), l = c || u;
  if (ee(a) && (!B || ee(B))) {
    if (c && u)
      return [r, n];
    if (!i && !l)
      return [t.width, t.height];
    if (l && i) {
      var w = c ? r : n * s, g = u ? n : r / s;
      return [w, g];
    }
    var Q = c ? r : t.width, C = u ? n : t.height;
    return [Q, C];
  }
  if (i) {
    var f = 0, d = 0;
    return z(a) ? f = _(a, t.width) : z(B) && (d = _(B, t.height)), ee(a) ? f = d * s : (!B || ee(B)) && (d = f / s), [f, d];
  }
  var H = null, y = null;
  if (z(a) ? H = _(a, t.width) : B && z(B) && (y = _(B, t.height)), H !== null && (!B || ee(B)) && (y = c && u ? H / r * n : t.height), y !== null && ee(a) && (H = c && u ? y / n * r : t.width), H !== null && y !== null)
    return [H, y];
  throw new Error("Unable to calculate background-size for element");
}, re = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Mu = function(e, A, t, r, n) {
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
}, Ou = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", es = "Hidden Text", Nu = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), s = this._document.createElement("span"), a = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", a.appendChild(r), n.src = Ou, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(es)), r.appendChild(s), r.appendChild(n);
      var B = n.offsetTop - s.offsetTop + 2;
      r.removeChild(s), r.appendChild(this._document.createTextNode(es)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var i = n.offsetTop - r.offsetTop + 2;
      return a.removeChild(r), { baseline: B, middle: i };
    }, e.prototype.getMetrics = function(A, t) {
      var r = A + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
    }, e;
  }()
), wa = (
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
    vA(A, e);
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
      this.ctx.save(), Iu(t) && (this.ctx.globalAlpha = t.opacity), mu(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), ca(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, A.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, A.prototype.renderStack = function(t) {
      return cA(this, void 0, void 0, function() {
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
      return cA(this, void 0, void 0, function() {
        return aA(this, function(r) {
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
      var s = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var a = Or(t.text);
        a.reduce(function(B, i) {
          return s.ctx.fillText(i, B, t.bounds.top + n), B + s.ctx.measureText(i).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(a) {
        return a === "normal" || a === "small-caps";
      }).join(""), n = Xu(t.fontFamily).join(", "), s = Oe(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, s, n].join(" "),
        n,
        s
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return cA(this, void 0, void 0, function() {
        var n, s, a, B, i, o, c, u, l = this;
        return aA(this, function(w) {
          return n = this.createFontStyle(r), s = n[0], a = n[1], B = n[2], this.ctx.font = s, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(a, B), o = i.baseline, c = i.middle, u = r.paintOrder, t.textBounds.forEach(function(g) {
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
        var s = Et(t), a = pt(r);
        this.path(a), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return cA(this, void 0, void 0, function() {
        var r, n, s, a, B, i, d, d, o, c, u, l, y, w, g, I, Q, C, f, d, H, y, I;
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
              if (!(r instanceof Ws))
                return [3, 8];
              F.label = 5;
            case 5:
              return F.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return d = F.sent(), this.renderReplacedElement(r, n, d), [3, 8];
            case 7:
              return F.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Ys && this.renderReplacedElement(r, n, r.canvas), !(r instanceof Zs))
                return [3, 12];
              F.label = 9;
            case 9:
              return F.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return d = F.sent(), this.renderReplacedElement(r, n, d), [3, 12];
            case 11:
              return F.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof $s && r.tree ? (o = new A(this.context, {
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
              if (r instanceof Nr && (u = Math.min(r.bounds.width, r.bounds.height), r.type === Ct ? r.checked && (this.ctx.save(), this.path([
                new p(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new p(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new p(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new p(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new p(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new p(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new p(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = tA(kn), this.ctx.fill(), this.ctx.restore()) : r.type === Ut && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = tA(kn), this.ctx.fill(), this.ctx.restore())), Vu(r) && r.value.length) {
                switch (l = this.createFontStyle(s), y = l[0], w = l[1], g = this.fontMetrics.getMetrics(y, w).baseline, this.ctx.font = y, this.ctx.fillStyle = tA(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = _u(r.styles.textAlign), I = Et(r), Q = 0, r.styles.textAlign) {
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
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Ie(r.value, C), s.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
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
              d = void 0, H = f.url, F.label = 15;
            case 15:
              return F.trys.push([15, 17, , 18]), [4, this.context.cache.match(H)];
            case 16:
              return d = F.sent(), this.ctx.drawImage(d, r.bounds.left - (d.width + 10), r.bounds.top), [3, 18];
            case 17:
              return F.sent(), this.context.logger.error("Error loading list-style-image " + H), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (y = this.createFontStyle(s)[0], this.ctx.font = y, this.ctx.fillStyle = tA(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", I = new DA(r.bounds.left, r.bounds.top + _(r.styles.paddingTop, r.bounds.width), r.bounds.width, vn(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Ie(t.listValue, I), s.letterSpacing, vn(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), F.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderStackContent = function(t) {
      return cA(this, void 0, void 0, function() {
        var r, n, f, s, a, f, B, i, f, o, c, f, u, l, f, w, g, f, Q, C, f;
        return aA(this, function(d) {
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
              d.sent(), s = 0, a = t.nonInlineLevel, d.label = 7;
            case 7:
              return s < a.length ? (f = a[s], [4, this.renderNode(f)]) : [3, 10];
            case 8:
              d.sent(), d.label = 9;
            case 9:
              return s++, [3, 7];
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
      t.forEach(function(n, s) {
        var a = dA(n) ? n.start : n;
        s === 0 ? r.ctx.moveTo(a.x, a.y) : r.ctx.lineTo(a.x, a.y), dA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
      return cA(this, void 0, void 0, function() {
        var r, n, s, a, B, i;
        return aA(this, function(o) {
          switch (o.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var u, l, w, R, $, AA, D, W, K, g, R, $, AA, D, W, Q, C, f, d, H, y, I, F, b, K, m, R, j, q, D, W, UA, $, AA, FA, iA, QA, O, P, M, V, J;
                return aA(this, function(oA) {
                  switch (oA.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      u = void 0, l = c.url, oA.label = 1;
                    case 1:
                      return oA.trys.push([1, 3, , 4]), [4, s.context.cache.match(l)];
                    case 2:
                      return u = oA.sent(), [3, 4];
                    case 3:
                      return oA.sent(), s.context.logger.error("Error loading background-image " + l), [3, 4];
                    case 4:
                      return u && (w = nr(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), R = w[0], $ = w[1], AA = w[2], D = w[3], W = w[4], K = s.ctx.createPattern(s.resizeImage(u, D, W), "repeat"), s.renderRepeat(R, K, $, AA)), [3, 6];
                    case 5:
                      mo(c) ? (g = nr(t, r, [null, null, null]), R = g[0], $ = g[1], AA = g[2], D = g[3], W = g[4], Q = ho(c.angle, D, W), C = Q[0], f = Q[1], d = Q[2], H = Q[3], y = Q[4], I = document.createElement("canvas"), I.width = D, I.height = W, F = I.getContext("2d"), b = F.createLinearGradient(f, H, d, y), En(c.stops, C).forEach(function(lA) {
                        return b.addColorStop(lA.stop, tA(lA.color));
                      }), F.fillStyle = b, F.fillRect(0, 0, D, W), D > 0 && W > 0 && (K = s.ctx.createPattern(I, "repeat"), s.renderRepeat(R, K, $, AA))) : Io(c) && (m = nr(t, r, [
                        null,
                        null,
                        null
                      ]), R = m[0], j = m[1], q = m[2], D = m[3], W = m[4], UA = c.position.length === 0 ? [Tr] : c.position, $ = _(UA[0], D), AA = _(UA[UA.length - 1], W), FA = po(c, $, AA, D, W), iA = FA[0], QA = FA[1], iA > 0 && QA > 0 && (O = s.ctx.createRadialGradient(j + $, q + AA, 0, j + $, q + AA, iA), En(c.stops, iA * 2).forEach(function(lA) {
                        return O.addColorStop(lA.stop, tA(lA.color));
                      }), s.path(R), s.ctx.fillStyle = O, iA !== QA ? (P = t.bounds.left + 0.5 * t.bounds.width, M = t.bounds.top + 0.5 * t.bounds.height, V = QA / iA, J = 1 / V, s.ctx.save(), s.ctx.translate(P, M), s.ctx.transform(1, 0, 0, V, 0, 0), s.ctx.translate(-P, -M), s.ctx.fillRect(j, J * (q - M) + M, D, W * J), s.ctx.restore()) : s.ctx.fill())), oA.label = 6;
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
      return cA(this, void 0, void 0, function() {
        return aA(this, function(s) {
          return this.path(As(n, r)), this.ctx.fillStyle = tA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, n, s) {
      return cA(this, void 0, void 0, function() {
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
              return a = bu(s, n), this.path(a), this.ctx.fillStyle = tA(t), this.ctx.fill(), B = Lu(s, n), this.path(B), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return cA(this, void 0, void 0, function() {
        var r, n, s, a, B, i, o, c, u = this;
        return aA(this, function(l) {
          switch (l.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !VA(r.backgroundColor) || r.backgroundImage.length, s = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], a = ku(re(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(a), this.ctx.clip(), VA(r.backgroundColor) || (this.ctx.fillStyle = tA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              l.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(w) {
                u.ctx.save();
                var g = dt(t.curves), Q = w.inset ? 0 : Ru, C = yu(g, -Q + (w.inset ? 1 : -1) * w.spread.number, (w.inset ? 1 : -1) * w.spread.number, w.spread.number * (w.inset ? -2 : 2), w.spread.number * (w.inset ? -2 : 2));
                w.inset ? (u.path(g), u.ctx.clip(), u.mask(C)) : (u.mask(g), u.ctx.clip(), u.path(C)), u.ctx.shadowOffsetX = w.offsetX.number + Q, u.ctx.shadowOffsetY = w.offsetY.number, u.ctx.shadowColor = tA(w.color), u.ctx.shadowBlur = w.blur.number, u.ctx.fillStyle = w.inset ? tA(w.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), l.label = 2;
            case 2:
              B = 0, i = 0, o = s, l.label = 3;
            case 3:
              return i < o.length ? (c = o[i], c.style !== 0 && !VA(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
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
    }, A.prototype.renderDashedDottedBorder = function(t, r, n, s, a) {
      return cA(this, void 0, void 0, function() {
        var B, i, o, c, u, l, w, g, Q, C, f, d, H, y, I, F, I, F;
        return aA(this, function(b) {
          return this.ctx.save(), B = xu(s, n), i = As(s, n), a === 2 && (this.path(i), this.ctx.clip()), dA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), dA(i[1]) ? (u = i[1].end.x, l = i[1].end.y) : (u = i[1].x, l = i[1].y), n === 0 || n === 2 ? w = Math.abs(o - u) : w = Math.abs(c - l), this.ctx.beginPath(), a === 3 ? this.formatPath(B) : this.formatPath(i.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, Q = r < 3 ? r * 2 : r, a === 3 && (g = r, Q = r), C = !0, w <= g * 2 ? C = !1 : w <= g * 2 + Q ? (f = w / (2 * g + Q), g *= f, Q *= f) : (d = Math.floor((w + Q) / (g + Q)), H = (w - d * g) / (d - 1), y = (w - (d + 1) * g) / d, Q = y <= 0 || Math.abs(Q - H) < Math.abs(Q - y) ? H : y), C && (a === 3 ? this.ctx.setLineDash([0, g + Q]) : this.ctx.setLineDash([g, Q])), a === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = tA(t), this.ctx.stroke(), this.ctx.setLineDash([]), a === 2 && (dA(i[0]) && (I = i[3], F = i[0], this.ctx.beginPath(), this.formatPath([new p(I.end.x, I.end.y), new p(F.start.x, F.start.y)]), this.ctx.stroke()), dA(i[1]) && (I = i[1], F = i[2], this.ctx.beginPath(), this.formatPath([new p(I.end.x, I.end.y), new p(F.start.x, F.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.render = function(t) {
      return cA(this, void 0, void 0, function() {
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
  }(wa)
), Vu = function(e) {
  return e instanceof qs || e instanceof js ? !0 : e instanceof Nr && e.type !== Ut && e.type !== Ct;
}, ku = function(e, A) {
  switch (e) {
    case 0:
      return dt(A);
    case 2:
      return Eu(A);
    case 1:
    default:
      return pt(A);
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
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return A.prototype.render = function(t) {
      return cA(this, void 0, void 0, function() {
        var r, n;
        return aA(this, function(s) {
          switch (s.label) {
            case 0:
              return r = Hr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Wu(r)];
            case 1:
              return n = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = tA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(wa)
), Wu = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Yu = (
  /** @class */
  function() {
    function e(A) {
      var t = A.id, r = A.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return e.prototype.debug = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Ne([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.getTime = function() {
      return Date.now() - this.start;
    }, e.prototype.info = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Ne([this.id, this.getTime() + "ms"], A));
    }, e.prototype.warn = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Ne([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.prototype.error = function() {
      for (var A = [], t = 0; t < arguments.length; t++)
        A[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Ne([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, e.instances = {}, e;
  }()
), Zu = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Yu({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new wu(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), zu = function(e, A) {
  return A === void 0 && (A = {}), ju(e, A);
};
typeof window < "u" && oa.setContext(window);
var ju = function(e, A) {
  return cA(void 0, void 0, void 0, function() {
    var t, r, n, s, a, B, i, o, c, u, l, w, g, Q, C, f, d, H, y, I, b, F, b, K, m, R, j, q, D, W, UA, $, AA, FA, iA, QA, O, P, M, V;
    return aA(this, function(J) {
      switch (J.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (K = A.allowTaint) !== null && K !== void 0 ? K : !1,
            imageTimeout: (m = A.imageTimeout) !== null && m !== void 0 ? m : 15e3,
            proxy: A.proxy,
            useCORS: (R = A.useCORS) !== null && R !== void 0 ? R : !1
          }, s = or({ logging: (j = A.logging) !== null && j !== void 0 ? j : !0, cache: A.cache }, n), a = {
            windowWidth: (q = A.windowWidth) !== null && q !== void 0 ? q : r.innerWidth,
            windowHeight: (D = A.windowHeight) !== null && D !== void 0 ? D : r.innerHeight,
            scrollX: (W = A.scrollX) !== null && W !== void 0 ? W : r.pageXOffset,
            scrollY: (UA = A.scrollY) !== null && UA !== void 0 ? UA : r.pageYOffset
          }, B = new DA(a.scrollX, a.scrollY, a.windowWidth, a.windowHeight), i = new Zu(s, B), o = ($ = A.foreignObjectRendering) !== null && $ !== void 0 ? $ : !1, c = {
            allowTaint: (AA = A.allowTaint) !== null && AA !== void 0 ? AA : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + B.width + "x" + B.height + " scrolled to " + -B.left + "," + -B.top), u = new jn(i, e, c), l = u.clonedReferenceElement, l ? [4, u.toIFrame(t, B)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return w = J.sent(), g = Rr(l) || ql(l) ? IB(l.ownerDocument) : Ht(i, l), Q = g.width, C = g.height, f = g.left, d = g.top, H = qu(i, l, A.backgroundColor), y = {
            canvas: A.canvas,
            backgroundColor: H,
            scale: (iA = (FA = A.scale) !== null && FA !== void 0 ? FA : r.devicePixelRatio) !== null && iA !== void 0 ? iA : 1,
            x: ((QA = A.x) !== null && QA !== void 0 ? QA : 0) + f,
            y: ((O = A.y) !== null && O !== void 0 ? O : 0) + d,
            width: (P = A.width) !== null && P !== void 0 ? P : Math.ceil(Q),
            height: (M = A.height) !== null && M !== void 0 ? M : Math.ceil(C)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), b = new Ju(i, y), [4, b.render(l)]) : [3, 3];
        case 2:
          return I = J.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + f + "," + d + " with size " + Q + "x" + C + " using computed rendering"), i.logger.debug("Starting DOM parsing"), F = ea(i, l), H === F.styles.backgroundColor && (F.styles.backgroundColor = xA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + y.x + "," + y.y + " with size " + y.width + "x" + y.height), b = new Gu(i, y), [4, b.render(F)];
        case 4:
          I = J.sent(), J.label = 5;
        case 5:
          return (!((V = A.removeContainer) !== null && V !== void 0) || V) && (jn.destroy(w) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, I];
      }
    });
  });
}, qu = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? ve(e, getComputedStyle(r.documentElement).backgroundColor) : xA.TRANSPARENT, s = r.body ? ve(e, getComputedStyle(r.body).backgroundColor) : xA.TRANSPARENT, a = typeof t == "string" ? ve(e, t) : t === null ? xA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? VA(n) ? VA(s) ? a : s : n : a;
};
const lt = {
  pdf: "Download PDF",
  image: "Download Image",
  csv: "Download Data (CSV)",
  link: "Link to Dataset"
}, $u = (e, A) => {
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
}, fa = (e, A, t) => {
  const r = document.querySelector(`[data-download-id=${t}]`), n = (B) => {
    var i, o;
    return (i = B == null ? void 0 : B.dashboard) != null && i.title ? B.dashboard.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : (o = B == null ? void 0 : B.general) != null && o.title ? B.general.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : B != null && B.title ? B.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : "no-title";
  }, s = /* @__PURE__ */ new Date(), a = n(e);
  switch (A) {
    case "image":
      zu(r, { ignoreElements: (B) => {
        var i;
        return ((i = B.className) == null ? void 0 : i.indexOf) && B.className.search(/download-buttons|download-links|data-table-container/) !== -1;
      } }).then((B) => {
        $u(B.toDataURL(), a + ".png");
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
  const s = ["btn", "btn-download", `${Ag(e)}`];
  return /* @__PURE__ */ h.createElement("button", { className: s.join(" "), title: r, onClick: () => fa(e, t, n), style: { lineHeight: "1.4em" } }, lt[t]);
}, tg = ({ config: e, dashboardDataConfig: A }) => {
  var r;
  let t = A || e;
  return t.dataFileSourceType === "url" && t.dataFileName && e.table.showDownloadUrl ? /* @__PURE__ */ h.createElement("a", { href: t.dataFileName, title: lt.link, target: "_blank" }, lt.link) : (r = e == null ? void 0 : e.table) != null && r.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ h.createElement("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank" }, lt.link) : null;
}, rg = ({ children: e, classes: A }) => /* @__PURE__ */ h.createElement("section", { className: A.join(" ") }, /* @__PURE__ */ h.createElement("span", null, e)), ie = () => null;
ie.Section = rg;
ie.Link = tg;
ie.Button = eg;
ie.generateMedia = fa;
const ng = ({ rawData: e, fileName: A, headerColor: t, skipId: r }) => {
  const n = ha.unparse(e), s = new Blob([n], { type: "text/csv;charset=utf-8;" }), a = () => {
    typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(s, A);
  };
  return /* @__PURE__ */ h.createElement("a", { download: A, type: "button", onClick: a, href: URL.createObjectURL(s), "aria-label": "Download this data in a CSV file format.", className: `${t} no-border`, id: `${r}`, "data-html2canvas-ignore": !0, role: "button" }, "Download Data (CSV)");
}, sg = {
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
}, ts = (e) => {
  if (typeof e != "string" || !isNaN(Number(e)))
    return e;
  const A = e.toUpperCase();
  return ["U.S. VIRGIN ISLANDS", "VI", "US VIRGIN ISLANDS", "VIRGIN ISLANDS"].includes(A) ? "U.S. VIRGIN ISLANDS" : sg[A] || e;
}, ut = (e, A, t, r) => {
  var c;
  let n = e, s = A;
  if (r.type === "map" && (n = ts(e), s = ts(A), String(n).toLowerCase().includes("region") && String(s).toLowerCase().includes("region"))) {
    const u = parseInt(e.match(/\d+$/)[0], 10), l = parseInt(A.match(/\d+$/)[0], 10);
    return t.asc ? Number(l) - Number(u) : Number(u) - Number(l);
  }
  n = n === !1 || n === !0 || n === null ? "" : n, s = s === !1 || s === !0 || s === null ? "" : s;
  const a = String(n).trim(), B = String(s).trim();
  if (((c = r.xAxis) == null ? void 0 : c.dataKey) === t.column && r.xAxis.type === "date") {
    let u = Br(r.xAxis.dateParseFormat, a), l = Br(r.xAxis.dateParseFormat, B);
    return u && u.getTime && (u = u.getTime()), l && l.getTime && (l = l.getTime()), t.asc ? l - u : u - l;
  }
  const i = !isNaN(Number(n)) && n !== void 0 && n !== null && a !== "", o = !isNaN(Number(s)) && s !== void 0 && s !== null && B !== "";
  return a === "" && B !== "" ? t.asc ? 1 : -1 : a !== "" && B === "" ? t.asc ? -1 : 1 : i && o ? t.asc ? Number(s) - Number(n) : Number(n) - Number(s) : i ? t.asc ? 1 : -1 : o ? t.asc ? -1 : 1 : t.asc ? B.localeCompare(a) : a.localeCompare(B);
}, ag = (e, A) => {
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
}, ne = (e, A, t, r) => {
  var i, o, c, u, l, w, g;
  if (t.visualizationType === "Sankey" || (i = r == null ? void 0 : r[0]) != null && i.tableData)
    return r[e][A];
  const n = r[e];
  let s, a = n[A];
  if (A === ((o = t.xAxis) == null ? void 0 : o.dataKey))
    s = ((c = t.xAxis) == null ? void 0 : c.type) === "date" ? mB(((u = t.table) == null ? void 0 : u.dateDisplayFormat) || ((l = t.xAxis) == null ? void 0 : l.dateDisplayFormat), Br((w = t.xAxis) == null ? void 0 : w.dateParseFormat, a)) : a;
  else {
    let Q = "left", C = t.series ? t.series.filter((H) => (H == null ? void 0 : H.axis) === "Left") : [], f = t.series ? t.series.filter((H) => (H == null ? void 0 : H.axis) === "Right") : [];
    C.map((H) => {
      H.dataKey === A && (Q = "left");
    }), f.map((H) => {
      H.dataKey === A && (Q = "right");
    });
    let d = ag(A, t);
    d ? s = t.dataFormat ? en(r[e][A], Q, !1, t, d) : r[e][A] : s = t.dataFormat ? en(r[e][A], Q, !1, t) : r[e][A];
  }
  return (g = t.preliminaryData) == null || g.forEach((Q) => {
    var I, F, b, K;
    const C = String(Q.value) === String(a), f = !Q.column || Q.column === A, d = (F = (I = t.runtime) == null ? void 0 : I.barSeriesKeys) == null ? void 0 : F.includes(A), H = (K = (b = t.runtime) == null ? void 0 : b.lineSeriesKeys) == null ? void 0 : K.includes(A), y = t.table.showSuppressedSymbol;
    if (C && f && Q.displayTable && Q.type === "suppression")
      switch (t.visualizationType) {
        case "Combo":
          s = d && y ? Q.iconCode : H && y ? Q.lineCode : "";
          break;
        case "Bar":
          s = y ? Q.iconCode : "";
          break;
        case "Line":
          s = y ? Q.lineCode : "";
          break;
      }
  }), t.table.showMissingDataLabel && !a ? "N/A" : s;
}, Bg = (e, A) => {
  const r = Object.values(A.columns || {}).find((n) => n.name === e);
  return r != null && r.label ? r.label : e;
}, Ca = (e, A) => {
  var s, a, B;
  const t = (s = A.series) == null ? void 0 : s.find((i) => i.dataKey === e);
  if (t != null && t.name)
    return t.name;
  if (A.runtimeSeriesLabels && A.runtimeSeriesLabels[e])
    return A.runtimeSeriesLabels[e];
  const r = e === ((a = A.xAxis) == null ? void 0 : a.dataKey), n = (B = A.table) == null ? void 0 : B.indexLabel;
  return r && n ? n : Bg(e, A);
}, Ua = (e, A, t) => {
  var i, o, c, u, l, w;
  if (e.visualizationType === "Sankey")
    return Object.keys((o = (i = e == null ? void 0 : e.data) == null ? void 0 : i[0]) == null ? void 0 : o.tableData[0]);
  const r = Ea.cloneDeep(e.columns) || {}, n = Object.values(r).filter((g) => g.dataTable === !1).map((g) => g.name);
  let s = [];
  e.visualizationType !== "Pie" ? (s = A ? [(c = e.xAxis) == null ? void 0 : c.dataKey] : [], e.series ? e.series.forEach((g) => {
    s.push(g.dataKey);
  }) : t && t.length > 0 && (s = Object.keys(t[0]))) : s = A ? [(u = e.xAxis) == null ? void 0 : u.dataKey, (l = e.yAxis) == null ? void 0 : l.dataKey] : [(w = e.yAxis) == null ? void 0 : w.dataKey];
  const a = Object.keys(t[0] || {});
  Object.values(r).forEach(function(g) {
    var f;
    if (!g.name)
      return;
    const Q = s.includes(g.name), C = a.includes(g.name);
    g.name !== ((f = e.xAxis) == null ? void 0 : f.dataKey) && g.dataTable === !0 && !Q && C && s.push(g.name);
  });
  const B = Object.values(r).reduce((g, Q) => (Q.order !== void 0 && (g[Q.name] = Q.order - 1), g), {});
  return s = s.filter((g) => !n.includes(g)), s.forEach((g, Q) => {
    B[g] === void 0 && (Object.values(B).includes(Q) ? B[g] = Q + 1 : B[g] = Q);
  }), s.sort((g, Q) => B[g] - B[Q]), s;
}, Lr = () => /* @__PURE__ */ h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ h.createElement("path", { d: "M0 5l5-5 5 5z" })), xr = () => /* @__PURE__ */ h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ h.createElement("path", { d: "M0 0l5 5 5-5z" })), Fa = (e) => {
  const A = e.as;
  return /* @__PURE__ */ h.createElement(A, { className: "cdcdataviz-sr-only" }, e.children);
}, ig = ({ data: e, isVertical: A, config: t, setSortBy: r, sortBy: n, hasRowType: s }) => {
  var u;
  const a = (u = t.table) == null ? void 0 : u.groupBy;
  if (!e)
    return;
  let B = Ua(t, A, e);
  if (a) {
    let l = B.filter((w) => w !== a);
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
    return w === "__series__" && g.table.indexLabel ? `${g.table.indexLabel} ` : w === "__series__" && !g.table.indexLabel ? /* @__PURE__ */ h.createElement(Fa, { as: "span" }, Q) : w;
  };
  if (A) {
    if (s) {
      const l = /row[_-]?type/i, w = B.findIndex((g) => l.test(g));
      w > -1 && B.splice(w, 1);
    }
    return /* @__PURE__ */ h.createElement("tr", null, B.map((l, w) => {
      const g = Ca(l, t);
      return /* @__PURE__ */ h.createElement(
        "th",
        {
          style: { minWidth: (t.table.cellMinWidth || 0) + "px" },
          key: `col-header-${l}__${w}`,
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            s || r({ column: l, asc: n.column === l ? !n.asc : !1, colIndex: w });
          },
          onKeyDown: (Q) => {
            s || Q.keyCode === 13 && r({ column: l, asc: n.column === l ? !n.asc : !1, colIndex: w });
          },
          className: i(n, g),
          ...n.column === l ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        /* @__PURE__ */ h.createElement(c, { text: g, column: l, config: t }),
        l === n.column && /* @__PURE__ */ h.createElement("span", { className: "sort-icon" }, n.asc ? /* @__PURE__ */ h.createElement(xr, null) : /* @__PURE__ */ h.createElement(Lr, null)),
        /* @__PURE__ */ h.createElement(o, { sortBy: n, config: t, text: g })
      );
    }));
  } else {
    const l = t.visualizationType === "Pie" ? 1 : 0;
    return /* @__PURE__ */ h.createElement("tr", null, ["__series__", ...Object.keys(e)].slice(l).map((w, g) => {
      var f;
      let Q = (f = t.xAxis) == null ? void 0 : f.dataKey, C = w !== "__series__" ? ne(w, Q, t, e) : "__series__";
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
        g === n.colIndex && /* @__PURE__ */ h.createElement("span", { className: "sort-icon" }, n.asc ? /* @__PURE__ */ h.createElement(xr, null) : /* @__PURE__ */ h.createElement(Lr, null)),
        /* @__PURE__ */ h.createElement(o, { text: C, config: t, sortBy: n })
      );
    }));
  }
}, og = ({ categories: e }) => {
  let A = ["Measures", ...e];
  return /* @__PURE__ */ h.createElement("tr", null, A.map((t) => /* @__PURE__ */ h.createElement("th", { key: `col-header-${t}`, tabIndex: 0, title: t, role: "columnheader", scope: "col" }, t)));
}, cg = ({ column: e, text: A, config: t }) => {
  let r = "Not Applicable";
  return A === "__series__" && t.table.indexLabel ? `${t.table.indexLabel} ` : A === "__series__" && !t.table.indexLabel ? /* @__PURE__ */ h.createElement(Fa, { as: "span" }, r) : A;
}, lg = ({ columns: e, config: A, indexTitle: t, sortBy: r, setSortBy: n }) => /* @__PURE__ */ h.createElement("tr", null, Object.keys(e).filter((s) => e[s].dataTable === !0 && e[s].name).map((s, a) => {
  var i;
  let B;
  return s !== "geo" ? B = e[s].label ? e[s].label : e[s].name : B = A.type === "map" ? t : (i = A.xAxis) == null ? void 0 : i.dataKey, A.type === "map" && (B === void 0 || B === "") && (B = "Location"), /* @__PURE__ */ h.createElement(
    "th",
    {
      key: `col-header-${s}__${a}`,
      id: s,
      tabIndex: 0,
      role: "columnheader",
      scope: "col",
      onClick: () => {
        n({ column: s, asc: r.column === s ? !r.asc : !1 });
      },
      onKeyDown: (o) => {
        o.keyCode === 13 && n({ column: s, asc: r.column === s ? !r.asc : !1 });
      },
      className: r.column === s ? r.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
      ...r.column === s ? r.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
    },
    /* @__PURE__ */ h.createElement(cg, { text: B, config: A, column: s }),
    r.column === s && /* @__PURE__ */ h.createElement("span", { className: "sort-icon" }, r.asc ? /* @__PURE__ */ h.createElement(xr, null) : /* @__PURE__ */ h.createElement(Lr, null)),
    /* @__PURE__ */ h.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${B} in ${r.column === s && r.asc ? "ascending" : "descending"} order`)
  );
})), rs = ({ skipId: e, skipMessage: A }) => {
  const t = LA.useId(), r = () => {
    const n = document.getElementById(e);
    if (n) {
      n.scrollIntoView(), n.setAttribute("tabIndex", "-1"), n.focus();
      const s = () => {
        n.removeAttribute("tabIndex"), n.removeEventListener("blur", s);
      };
      n.addEventListener("blur", s);
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
}, ns = ({ expanded: e, setExpanded: A, tableTitle: t, fontSize: r, viewport: n }) => {
  const s = { small: 16, medium: 18, large: 20 }, a = ["sm", "xs", "xxs"].includes(n) ? "13px" : `${s[r]}px`;
  return /* @__PURE__ */ h.createElement(
    "div",
    {
      style: { fontSize: a },
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
    /* @__PURE__ */ h.createElement(Ha, { display: e ? "minus" : "plus", base: !0 }),
    t
  );
}, ug = (e) => /* @__PURE__ */ LA.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ LA.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" }));
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
    onKeyDown: (s) => {
      s.keyCode === 13 && r(A[t.navigate.name]);
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
    onKeyDown: (s) => {
      s.keyCode === 13 && n();
    }
  },
  e
) : /* @__PURE__ */ h.createElement(h.Fragment, null, e), wg = ({ rows: e, columns: A, runtimeData: t, config: r, applyLegendToRow: n, displayGeoName: s, formatLegendLocation: a, displayDataAsText: B, navigationHandler: i, setFilteredCountryCode: o, viewport: c }) => e.map(
  (u) => Object.keys(A).filter((l) => A[l].dataTable === !0 && A[l].name).map((l) => {
    let w;
    if (l === "geo") {
      const g = t[u], Q = n(g);
      let C;
      const f = r.general.type === "bubble" && r.general.allowMapZoom && r.general.geoType === "world" ? () => o(u) : void 0;
      if (r.general.geoType !== "single-state" && r.general.geoType !== "us-county" || r.general.type === "us-geocode") {
        const d = (H) => H.charAt(0).toUpperCase() + H.slice(1);
        C = s(u), C = String(C).startsWith("region") ? d(C) : C;
      } else
        C = a(u);
      w = /* @__PURE__ */ h.createElement("div", { className: "col-12" }, /* @__PURE__ */ h.createElement(us, { viewport: c, fill: Q[0] }), /* @__PURE__ */ h.createElement(Qg, { markup: C, row: g, columns: A, navigationHandler: i, mapZoomHandler: f }));
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
}, Cg = ({ rows: e, runtimeData: A, config: t, isVertical: r, sortBy: n, colorScale: s, hasRowType: a, viewport: B }) => {
  var u;
  const i = (u = t.table) == null ? void 0 : u.groupBy, o = Ua(t, r, A), c = () => !n && n.colIndex === null ? o : o.sort((l, w) => {
    if (n.column === "__series__")
      return ut(l, w, n, t);
    let g = A.find((C) => {
      var f;
      return C[(f = t.xAxis) == null ? void 0 : f.dataKey] === n.column;
    });
    const Q = A[n.colIndex - 1];
    if (g)
      return ut(g[l], g[w], n, t);
    if (g === void 0 && Q)
      return ut(Q[l], Q[w], n, t);
  });
  if (r)
    if (i) {
      const l = {};
      return e.forEach((w) => {
        let g, Q = [];
        o.forEach((C, f) => {
          i === C ? g = ne(w, C, t, A) : Q.push(ne(w, C, t, A));
        }), l[g] ? l[g].push(Q) : l[g] = [Q];
      }), l;
    } else
      return e.map((l) => {
        if (a) {
          const w = fg(A[l]), g = o.map((Q) => ne(l, Q, t, A));
          return [w, ...g];
        } else
          return o.map((w, g) => ne(l, w, t, A));
      });
  else
    return c().map((l) => {
      const w = Ca(l, t);
      return (t.visualizationType !== "Pie" ? [
        /* @__PURE__ */ h.createElement(h.Fragment, null, s && s(w) && /* @__PURE__ */ h.createElement(us, { viewport: B, fill: s(w) }), w)
      ] : []).concat(e.map((Q, C) => ne(Q, l, t, A)));
    });
}, Ug = ({ config: e }) => e.regions.map((A) => e.visualizationType === "Box Plot" ? [] : !Object.keys(A).includes("from") || !Object.keys(A).includes("to") ? [] : [A.label, A.from, A.to]), Fg = ({ rows: e, config: A }) => {
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
      columnTotal: B.total,
      columnSd: "Standard Deviation",
      nonOutlierValues: "Non Outliers",
      columnLowerBounds: B.lowerBounds,
      columnUpperBounds: B.upperBounds
    }[a];
  };
  let r = (a, B) => Number(a) === 0 ? !0 : Number(a) === 1 ? B.columnMax : Number(a) === 2 ? B.columnThirdQuartile : Number(a) === 3 ? B.columnMedian : Number(a) === 4 ? B.columnFirstQuartile : Number(a) === 5 ? B.columnMin : Number(a) === 6 ? B.columnTotal : Number(a) === 7 ? B.columnSd : Number(a) === 8 ? B.columnMean : Number(a) === 9 ? B.columnOutliers.length > 0 ? B.columnOutliers.toString() : "-" : Number(a) === 10 ? B.values.length > 0 ? B.values.toString() : "-" : /* @__PURE__ */ h.createElement("p", null, "-"), n = e.map((a) => a[0]), s = ["Measures", ...A.boxplot.categories];
  return n.shift(), n.map((a, B) => s.map((i, o) => {
    let c;
    if (i === "Measures") {
      let u = B > 0 ? t(a) : "";
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
}, Lg = (e) => {
  var $, AA, FA, iA, QA;
  const { config: A, dataConfig: t, tableTitle: r, vizTitle: n, rawData: s, runtimeData: a, headerColor: B, expandDataTable: i, columns: o, viewport: c, formatLegendLocation: u, tabbingId: l, wrapColumns: w } = e, g = hg(a), [Q, C] = LA.useState(i), [f, d] = LA.useState({ column: A.type === "map" ? "geo" : "date", asc: !1, colIndex: null }), [H, y] = LA.useState(""), I = !(A.type === "chart" && !(($ = A.table) != null && $.showVertical)), b = `btn__${Math.random().toString(16).substr(2, 8)}`, K = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  };
  switch (LA.useEffect(() => {
    const O = "Accessible data table.", P = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    Q === !0 && H !== O && y(O), Q === !1 && H !== P && y(P);
  }, [Q]), A.visualizationType) {
    case "Box Plot":
      if (!A.boxplot)
        return /* @__PURE__ */ h.createElement(Tt, null);
      break;
    case "Line":
      if (!g)
        return /* @__PURE__ */ h.createElement(Tt, null);
      break;
    default:
      if (!g)
        return /* @__PURE__ */ h.createElement(Tt, null);
      break;
  }
  const m = Object.keys(g).filter((O) => O != "columns"), R = I ? m.sort((O, P) => {
    let M, V;
    if (A.type === "map" && A.columns) {
      const J = A.columns[f.column].name;
      M = g[O][J], V = g[P][J];
    }
    return (A.type === "chart" || A.type === "dashboard") && (M = g[O][f.column], V = g[P][f.column]), !M && !V && A.type === "chart" && A.xAxis && A.xAxis.type === "date-time" && (M = gt(A.runtime.xAxis.dateParseFormat)(g[O][A.xAxis.dataKey]), V = gt(A.runtime.xAxis.dateParseFormat)(g[P][A.xAxis.dataKey])), M && V ? ut(M, V, f, A) : 0;
  }) : m, j = {
    maxHeight: A.table.limitHeight && `${A.table.height}px`,
    OverflowY: "scroll"
  }, q = !!Object.keys((s == null ? void 0 : s[0]) || {}).find((O) => O.match(/row[_-]?type/i)), D = LA.useMemo(() => A.type === "map" ? A.table.caption ? A.table.caption : `Data table showing data for the ${K[A.general.geoType]} figure.` : A.table.caption ? A.table.caption : `Data table showing data for the ${A.type} figure.`, [A.table.caption]), W = (AA = A == null ? void 0 : A.regions) == null ? void 0 : AA.every((O) => {
    const P = O.toType === "Fixed", M = O.fromType === "Fixed", V = !O.toType, J = !O.fromType;
    return P && M || V && J || P && J || M && V;
  }), UA = LA.useMemo(
    () => {
      var O, P, M, V, J, oA, lA;
      return (P = (O = A.data) == null ? void 0 : O[0]) != null && P.tableData ? (V = (M = A.data) == null ? void 0 : M[0]) == null ? void 0 : V.tableData : A.visualizationType === "Sankey" ? (oA = (J = A.data) == null ? void 0 : J[0]) == null ? void 0 : oA.tableData : A.visualizationType === "Pie" ? [A.yAxis.dataKey] : A.visualizationType === "Box Plot" ? Object.entries(A.boxplot.tableData[0]) : (lA = A.runtime) == null ? void 0 : lA.seriesKeys;
    },
    [(FA = A.runtime) == null ? void 0 : FA.seriesKeys]
  );
  if (A.visualizationType !== "Box Plot") {
    const O = () => {
      var M;
      return ((M = A.general) == null ? void 0 : M.geoType) === "us-county" ? s.map((V) => ({ FullGeoName: u(V[A.columns.geo.name]), ...V })) : s;
    }, P = () => {
      var J, oA, lA;
      const M = ["download-links"], V = ((J = A == null ? void 0 : A.legend) == null ? void 0 : J.position) === "bottom" || ["sm", "xs", "xxs"].includes(c);
      return (oA = A.brush) != null && oA.active && !V && M.push("brush-active"), (lA = A.brush) != null && lA.active && A.legend.hide && M.push("brush-active"), M;
    };
    return /* @__PURE__ */ h.createElement(kr, { component: "DataTable" }, /* @__PURE__ */ h.createElement(ie.Section, { classes: P() }, /* @__PURE__ */ h.createElement(ie.Link, { config: A, dashboardDataConfig: t }), (A.table.download || ((iA = A.general) == null ? void 0 : iA.showDownloadButton)) && /* @__PURE__ */ h.createElement(ng, { rawData: O(), fileName: `${n || "data-table"}.csv`, headerColor: B })), /* @__PURE__ */ h.createElement("section", { id: l.replace("#", ""), className: `data-table-container ${c}`, "aria-label": H }, /* @__PURE__ */ h.createElement(rs, { skipId: b, skipMessage: "Skip Data Table" }), A.table.collapsible !== !1 && /* @__PURE__ */ h.createElement(ns, { expanded: Q, setExpanded: C, fontSize: A.fontSize, tableTitle: r, viewport: c }), /* @__PURE__ */ h.createElement("div", { className: "table-container", style: j }, /* @__PURE__ */ h.createElement(
      St,
      {
        viewport: c,
        wrapColumns: w,
        childrenMatrix: A.type === "map" ? wg({ rows: R, wrapColumns: w, ...e, runtimeData: g, viewport: c }) : Cg({ rows: R, ...e, runtimeData: g, isVertical: I, sortBy: f, hasRowType: q, viewport: c }),
        tableName: A.type,
        caption: D,
        stickyHeader: !0,
        hasRowType: q,
        headContent: A.type === "map" ? /* @__PURE__ */ h.createElement(lg, { columns: o, ...e, sortBy: f, setSortBy: d }) : /* @__PURE__ */ h.createElement(ig, { data: g, ...e, hasRowType: q, isVertical: I, sortBy: f, setSortBy: d }),
        tableOptions: { className: `${Q ? "data-table" : "data-table cdcdataviz-sr-only"}${I ? "" : " horizontal"}`, "aria-live": "assertive", "aria-rowcount": (QA = A == null ? void 0 : A.data) != null && QA.length ? A.data.length : -1, hidden: !Q },
        fontSize: A.fontSize
      }
    ), W && A.regions && A.regions.length > 0 && A.visualizationType !== "Box Plot" && /* @__PURE__ */ h.createElement(
      St,
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
    ))), /* @__PURE__ */ h.createElement("div", { id: b, className: "cdcdataviz-sr-only" }, "Skipped data table."));
  } else
    return /* @__PURE__ */ h.createElement(kr, { component: "DataTable" }, /* @__PURE__ */ h.createElement("section", { id: l.replace("#", ""), className: `data-table-container ${c}`, "aria-label": H }, /* @__PURE__ */ h.createElement(rs, { skipId: b, skipMessage: "Skip Data Table" }), /* @__PURE__ */ h.createElement(ns, { expanded: Q, setExpanded: C, tableTitle: r }), /* @__PURE__ */ h.createElement("div", { className: "table-container", style: j }, /* @__PURE__ */ h.createElement(
      St,
      {
        viewport: c,
        wrapColumns: w,
        childrenMatrix: Fg({ rows: UA, config: A }),
        tableName: A.visualizationType,
        caption: D,
        stickyHeader: !0,
        headContent: /* @__PURE__ */ h.createElement(og, { categories: A.boxplot.categories }),
        tableOptions: { className: `${Q ? "data-table" : "data-table cdcdataviz-sr-only"}`, "aria-live": "assertive", "aria-rowcount": 11, hidden: !Q },
        fontSize: A.fontSize
      }
    ))), /* @__PURE__ */ h.createElement("div", { id: b, className: "cdcdataviz-sr-only" }, "Skipped data table."));
};
export {
  Lg as D,
  us as L,
  ie as M,
  rs as S,
  bg as a,
  mB as b,
  en as f,
  Kg as g,
  gg as i,
  ls as t
};
