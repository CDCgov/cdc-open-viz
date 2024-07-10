import { R as Be, r as vA } from "./storybook-index-9_ikpx_Z.es.js";
import { L as St, E as _r } from "./storybook-Loading-BWOxMRmm.es.js";
import { P as ds } from "./storybook-papaparse.min-GWP-ia-H.es.js";
import { u as sr, a as sa, t as Br, b as Ba, c as be, d as ps, e as Le, f as xe, g as Es, h as De } from "./storybook-year-CExuJshh.es.js";
import { n as Pr } from "./storybook-numberFromString-F9iyDl4b.es.js";
import { _ as ir } from "./storybook-lodash-ClpRvLhc.es.js";
import { a as Hs } from "./storybook-Icon-avKQaL8M.es.js";
import { T as Mt } from "./storybook-Table-DSckOn-z.es.js";
function Ot(e) {
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
function ms(e) {
  var A = e.dateTime, t = e.date, r = e.time, n = e.periods, a = e.days, s = e.shortDays, B = e.months, i = e.shortMonths, o = ue(n), c = ge(n), u = ue(a), l = ge(a), w = ue(s), g = ge(s), Q = ue(B), C = ge(B), f = ue(i), h = ge(i), H = {
    a: q,
    A: fA,
    b: BA,
    B: lA,
    c: null,
    d: zr,
    e: zr,
    f: Ys,
    g: nB,
    G: sB,
    H: Xs,
    I: Js,
    j: Ws,
    L: ia,
    m: Zs,
    M: zs,
    p: CA,
    q: UA,
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
  }, I = {
    a: x,
    A: G,
    b: D,
    B: V,
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
    p: $,
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
  }, v = {
    a: R,
    A: Z,
    b: z,
    B: T,
    c: X,
    d: Yr,
    e: Yr,
    f: Vs,
    g: Wr,
    G: Jr,
    H: Zr,
    I: Zr,
    j: Os,
    L: Gs,
    m: Ms,
    M: Rs,
    p: m,
    q: Ss,
    Q: _s,
    s: Ps,
    S: Ns,
    u: bs,
    U: Ls,
    V: xs,
    w: Ks,
    W: Ds,
    x: wA,
    X: j,
    y: Wr,
    Y: Jr,
    Z: Ts,
    "%": ks
  };
  H.x = F(t, H), H.X = F(r, H), H.c = F(A, H), I.x = F(t, I), I.X = F(r, I), I.c = F(A, I);
  function F(p, b) {
    return function(S) {
      var U = [], oA = -1, k = 0, uA = p.length, gA, _A, kr;
      for (S instanceof Date || (S = /* @__PURE__ */ new Date(+S)); ++oA < uA; )
        p.charCodeAt(oA) === 37 && (U.push(p.slice(k, oA)), (_A = Xr[gA = p.charAt(++oA)]) != null ? gA = p.charAt(++oA) : _A = gA === "e" ? " " : "0", (kr = b[gA]) && (gA = kr(S, _A)), U.push(gA), k = oA + 1);
      return U.push(p.slice(k, oA)), U.join("");
    };
  }
  function K(p, b) {
    return function(S) {
      var U = le(1900, void 0, 1), oA = y(U, p, S += "", 0), k, uA;
      if (oA != S.length) return null;
      if ("Q" in U) return new Date(U.Q);
      if ("s" in U) return new Date(U.s * 1e3 + ("L" in U ? U.L : 0));
      if (b && !("Z" in U) && (U.Z = 0), "p" in U && (U.H = U.H % 12 + U.p * 12), U.m === void 0 && (U.m = "q" in U ? U.q : 0), "V" in U) {
        if (U.V < 1 || U.V > 53) return null;
        "w" in U || (U.w = 1), "Z" in U ? (k = Rt(le(U.y, 0, 1)), uA = k.getUTCDay(), k = uA > 4 || uA === 0 ? sr.ceil(k) : sr(k), k = sa.offset(k, (U.V - 1) * 7), U.y = k.getUTCFullYear(), U.m = k.getUTCMonth(), U.d = k.getUTCDate() + (U.w + 6) % 7) : (k = Ot(le(U.y, 0, 1)), uA = k.getDay(), k = uA > 4 || uA === 0 ? Br.ceil(k) : Br(k), k = Ba.offset(k, (U.V - 1) * 7), U.y = k.getFullYear(), U.m = k.getMonth(), U.d = k.getDate() + (U.w + 6) % 7);
      } else ("W" in U || "U" in U) && ("w" in U || (U.w = "u" in U ? U.u % 7 : "W" in U ? 1 : 0), uA = "Z" in U ? Rt(le(U.y, 0, 1)).getUTCDay() : Ot(le(U.y, 0, 1)).getDay(), U.m = 0, U.d = "W" in U ? (U.w + 6) % 7 + U.W * 7 - (uA + 5) % 7 : U.w + U.U * 7 - (uA + 6) % 7);
      return "Z" in U ? (U.H += U.Z / 100 | 0, U.M += U.Z % 100, Rt(U)) : Ot(U);
    };
  }
  function y(p, b, S, U) {
    for (var oA = 0, k = b.length, uA = S.length, gA, _A; oA < k; ) {
      if (U >= uA) return -1;
      if (gA = b.charCodeAt(oA++), gA === 37) {
        if (gA = b.charAt(oA++), _A = v[gA in Xr ? b.charAt(oA++) : gA], !_A || (U = _A(p, S, U)) < 0) return -1;
      } else if (gA != S.charCodeAt(U++))
        return -1;
    }
    return U;
  }
  function m(p, b, S) {
    var U = o.exec(b.slice(S));
    return U ? (p.p = c.get(U[0].toLowerCase()), S + U[0].length) : -1;
  }
  function R(p, b, S) {
    var U = w.exec(b.slice(S));
    return U ? (p.w = g.get(U[0].toLowerCase()), S + U[0].length) : -1;
  }
  function Z(p, b, S) {
    var U = u.exec(b.slice(S));
    return U ? (p.w = l.get(U[0].toLowerCase()), S + U[0].length) : -1;
  }
  function z(p, b, S) {
    var U = f.exec(b.slice(S));
    return U ? (p.m = h.get(U[0].toLowerCase()), S + U[0].length) : -1;
  }
  function T(p, b, S) {
    var U = Q.exec(b.slice(S));
    return U ? (p.m = C.get(U[0].toLowerCase()), S + U[0].length) : -1;
  }
  function X(p, b, S) {
    return y(p, A, b, S);
  }
  function wA(p, b, S) {
    return y(p, t, b, S);
  }
  function j(p, b, S) {
    return y(p, r, b, S);
  }
  function q(p) {
    return s[p.getDay()];
  }
  function fA(p) {
    return a[p.getDay()];
  }
  function BA(p) {
    return i[p.getMonth()];
  }
  function lA(p) {
    return B[p.getMonth()];
  }
  function CA(p) {
    return n[+(p.getHours() >= 12)];
  }
  function UA(p) {
    return 1 + ~~(p.getMonth() / 3);
  }
  function x(p) {
    return s[p.getUTCDay()];
  }
  function G(p) {
    return a[p.getUTCDay()];
  }
  function D(p) {
    return i[p.getUTCMonth()];
  }
  function V(p) {
    return B[p.getUTCMonth()];
  }
  function $(p) {
    return n[+(p.getUTCHours() >= 12)];
  }
  function DA(p) {
    return 1 + ~~(p.getUTCMonth() / 3);
  }
  return {
    format: function(p) {
      var b = F(p += "", H);
      return b.toString = function() {
        return p;
      }, b;
    },
    parse: function(p) {
      var b = K(p += "", !1);
      return b.toString = function() {
        return p;
      }, b;
    },
    utcFormat: function(p) {
      var b = F(p += "", I);
      return b.toString = function() {
        return p;
      }, b;
    },
    utcParse: function(p) {
      var b = K(p += "", !0);
      return b.toString = function() {
        return p;
      }, b;
    }
  };
}
var Xr = { "-": "", _: " ", 0: "0" }, tA = /^\s*\d+/, vs = /^%/, Is = /[\\^$*+?|[\]().{}]/g;
function M(e, A, t) {
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
function Ks(e, A, t) {
  var r = tA.exec(A.slice(t, t + 1));
  return r ? (e.w = +r[0], t + r[0].length) : -1;
}
function bs(e, A, t) {
  var r = tA.exec(A.slice(t, t + 1));
  return r ? (e.u = +r[0], t + r[0].length) : -1;
}
function Ls(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.U = +r[0], t + r[0].length) : -1;
}
function xs(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.V = +r[0], t + r[0].length) : -1;
}
function Ds(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.W = +r[0], t + r[0].length) : -1;
}
function Jr(e, A, t) {
  var r = tA.exec(A.slice(t, t + 4));
  return r ? (e.y = +r[0], t + r[0].length) : -1;
}
function Wr(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), t + r[0].length) : -1;
}
function Ts(e, A, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(A.slice(t, t + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function Ss(e, A, t) {
  var r = tA.exec(A.slice(t, t + 1));
  return r ? (e.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function Ms(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.m = r[0] - 1, t + r[0].length) : -1;
}
function Yr(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.d = +r[0], t + r[0].length) : -1;
}
function Os(e, A, t) {
  var r = tA.exec(A.slice(t, t + 3));
  return r ? (e.m = 0, e.d = +r[0], t + r[0].length) : -1;
}
function Zr(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.H = +r[0], t + r[0].length) : -1;
}
function Rs(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.M = +r[0], t + r[0].length) : -1;
}
function Ns(e, A, t) {
  var r = tA.exec(A.slice(t, t + 2));
  return r ? (e.S = +r[0], t + r[0].length) : -1;
}
function Gs(e, A, t) {
  var r = tA.exec(A.slice(t, t + 3));
  return r ? (e.L = +r[0], t + r[0].length) : -1;
}
function Vs(e, A, t) {
  var r = tA.exec(A.slice(t, t + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function ks(e, A, t) {
  var r = vs.exec(A.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function _s(e, A, t) {
  var r = tA.exec(A.slice(t));
  return r ? (e.Q = +r[0], t + r[0].length) : -1;
}
function Ps(e, A, t) {
  var r = tA.exec(A.slice(t));
  return r ? (e.s = +r[0], t + r[0].length) : -1;
}
function zr(e, A) {
  return M(e.getDate(), A, 2);
}
function Xs(e, A) {
  return M(e.getHours(), A, 2);
}
function Js(e, A) {
  return M(e.getHours() % 12 || 12, A, 2);
}
function Ws(e, A) {
  return M(1 + Ba.count(be(e), e), A, 3);
}
function ia(e, A) {
  return M(e.getMilliseconds(), A, 3);
}
function Ys(e, A) {
  return ia(e, A) + "000";
}
function Zs(e, A) {
  return M(e.getMonth() + 1, A, 2);
}
function zs(e, A) {
  return M(e.getMinutes(), A, 2);
}
function js(e, A) {
  return M(e.getSeconds(), A, 2);
}
function qs(e) {
  var A = e.getDay();
  return A === 0 ? 7 : A;
}
function $s(e, A) {
  return M(ps.count(be(e) - 1, e), A, 2);
}
function oa(e) {
  var A = e.getDay();
  return A >= 4 || A === 0 ? Le(e) : Le.ceil(e);
}
function AB(e, A) {
  return e = oa(e), M(Le.count(be(e), e) + (be(e).getDay() === 4), A, 2);
}
function eB(e) {
  return e.getDay();
}
function tB(e, A) {
  return M(Br.count(be(e) - 1, e), A, 2);
}
function rB(e, A) {
  return M(e.getFullYear() % 100, A, 2);
}
function nB(e, A) {
  return e = oa(e), M(e.getFullYear() % 100, A, 2);
}
function aB(e, A) {
  return M(e.getFullYear() % 1e4, A, 4);
}
function sB(e, A) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? Le(e) : Le.ceil(e), M(e.getFullYear() % 1e4, A, 4);
}
function BB(e) {
  var A = e.getTimezoneOffset();
  return (A > 0 ? "-" : (A *= -1, "+")) + M(A / 60 | 0, "0", 2) + M(A % 60, "0", 2);
}
function jr(e, A) {
  return M(e.getUTCDate(), A, 2);
}
function iB(e, A) {
  return M(e.getUTCHours(), A, 2);
}
function oB(e, A) {
  return M(e.getUTCHours() % 12 || 12, A, 2);
}
function cB(e, A) {
  return M(1 + sa.count(xe(e), e), A, 3);
}
function ca(e, A) {
  return M(e.getUTCMilliseconds(), A, 3);
}
function lB(e, A) {
  return ca(e, A) + "000";
}
function uB(e, A) {
  return M(e.getUTCMonth() + 1, A, 2);
}
function gB(e, A) {
  return M(e.getUTCMinutes(), A, 2);
}
function QB(e, A) {
  return M(e.getUTCSeconds(), A, 2);
}
function wB(e) {
  var A = e.getUTCDay();
  return A === 0 ? 7 : A;
}
function fB(e, A) {
  return M(Es.count(xe(e) - 1, e), A, 2);
}
function la(e) {
  var A = e.getUTCDay();
  return A >= 4 || A === 0 ? De(e) : De.ceil(e);
}
function CB(e, A) {
  return e = la(e), M(De.count(xe(e), e) + (xe(e).getUTCDay() === 4), A, 2);
}
function UB(e) {
  return e.getUTCDay();
}
function FB(e, A) {
  return M(sr.count(xe(e) - 1, e), A, 2);
}
function hB(e, A) {
  return M(e.getUTCFullYear() % 100, A, 2);
}
function dB(e, A) {
  return e = la(e), M(e.getUTCFullYear() % 100, A, 2);
}
function pB(e, A) {
  return M(e.getUTCFullYear() % 1e4, A, 4);
}
function EB(e, A) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? De(e) : De.ceil(e), M(e.getUTCFullYear() % 1e4, A, 4);
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
var ZA, ua, Qt;
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
  return ZA = ms(e), ua = ZA.format, Qt = ZA.parse, ZA.utcFormat, ZA.utcParse, ZA;
}
const en = (e) => {
  let A = "", t = Math.abs(e);
  return t >= 1e9 ? (A = "B", e = e / 1e9) : t >= 1e6 ? (A = "M", e = e / 1e6) : t >= 1e3 && (A = "K", e = e / 1e3), e + A;
}, tn = (e, A, t = !1, r = null, n = null) => {
  if (r || console.error("no config found in formatNumber"), isNaN(e) || !e) return e;
  const a = e < 0;
  a && (e = Math.abs(e));
  let {
    dataFormat: { commas: s, abbreviated: B, roundTo: i, prefix: o, suffix: c, rightRoundTo: u, bottomRoundTo: l, rightPrefix: w, rightSuffix: g, bottomPrefix: Q, bottomSuffix: C, bottomAbbreviated: f }
  } = r;
  const { addColCommas: h, addColRoundTo: H, addColPrefix: I, addColSuffix: v } = n;
  String(e).indexOf(",") !== -1 && (e = e.replaceAll(",", ""));
  let F = e, K;
  if (A === "left") {
    let m;
    H !== void 0 ? m = H ? Number(H) : 0 : m = i ? Number(i) : 0, m < 0 && (m = 0);
    let R;
    h !== void 0 ? R = !!h : R = !!r.dataFormat.commas, K = {
      useGrouping: R,
      minimumFractionDigits: m,
      maximumFractionDigits: m
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
  if (!r.dataFormat) return e;
  if (r.dataCutoff) {
    let m = Pr(r.dataCutoff);
    e < m && (e = m);
  }
  A === "left" && s && B && t || A === "bottom" && s && B && t ? e = e : e = e.toLocaleString("en-US", K);
  let y = "";
  return B && A === "left" && t && (e = en(parseFloat(e))), f && A === "bottom" && t && (e = en(parseFloat(e))), I !== void 0 && A === "left" ? y = I + y : o && A === "left" && (y = o + y), w && A === "right" && (y += w), Q && A === "bottom" && (y += Q), y += e, v !== void 0 && A === "left" ? y += v : c && A === "left" && (y += c), g && A === "right" && (y += g), C && A === "bottom" && (y += C), a && (y = "-" + y), String(y);
}, bg = (e = "medium") => ({ small: 16, medium: 18, large: 20 })[e];
function vB(e = void 0, A) {
  return ua(e)(A);
}
function or(e = void 0, A) {
  return Qt(e)(A) || /* @__PURE__ */ new Date();
}
const Lg = (e) => {
  try {
    if (!e) throw new Error("COVE: No axis passed to isDateScale");
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
  return /* @__PURE__ */ Be.createElement("span", { className: "legend-item", style: a });
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
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, cr(e, A);
};
function HA(e, A) {
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
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (A[a] = t[a]);
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
    o((r = r.apply(e, [])).next());
  });
}
function aA(e, A) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
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
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (r = 1, n && (a = o[0] & 2 ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
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
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function Ne(e, A, t) {
  if (arguments.length === 2) for (var r = 0, n = A.length, a; r < n; r++)
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
var KB = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, a, s, B, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    a = Ue[e.charCodeAt(r)], s = Ue[e.charCodeAt(r + 1)], B = Ue[e.charCodeAt(r + 2)], i = Ue[e.charCodeAt(r + 3)], c[n++] = a << 2 | s >> 4, c[n++] = (s & 15) << 4 | B >> 2, c[n++] = (B & 3) << 6 | i & 63;
  return o;
}, bB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, LB = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, WA = 5, Sr = 11, Nt = 2, xB = Sr - WA, Qa = 65536 >> WA, DB = 1 << WA, Gt = DB - 1, TB = 1024 >> WA, SB = Qa + TB, MB = SB, OB = 32, RB = MB + OB, NB = 65536 >> Sr, GB = 1 << xB, VB = GB - 1, an = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, kB = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, _B = function(e, A) {
  var t = KB(e), r = Array.isArray(t) ? LB(t) : new Uint32Array(t), n = Array.isArray(t) ? bB(t) : new Uint16Array(t), a = 24, s = an(n, a / 2, r[4] / 2), B = r[5] === 2 ? an(n, (a + r[4]) / 2) : kB(r, Math.ceil((a + r[4]) / 4));
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
          return t = this.index[A >> WA], t = (t << Nt) + (A & Gt), this.data[t];
        if (A <= 65535)
          return t = this.index[Qa + (A - 55296 >> WA)], t = (t << Nt) + (A & Gt), this.data[t];
        if (A < this.highStart)
          return t = RB - NB + (A >> Sr), t = this.index[t], t += A >> WA & VB, t = this.index[t], t = (t << Nt) + (A & Gt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), sn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", XB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ke = 0; ke < sn.length; ke++)
  XB[sn.charCodeAt(ke)] = ke;
var JB = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Bn = 50, WB = 1, wa = 2, fa = 3, YB = 4, ZB = 5, on = 7, Ca = 8, cn = 9, OA = 10, ur = 11, ln = 12, gr = 13, zB = 14, Fe = 15, Qr = 16, _e = 17, Qe = 18, jB = 19, un = 20, wr = 21, we = 22, Vt = 23, zA = 24, QA = 25, he = 26, de = 27, jA = 28, qB = 29, XA = 30, $B = 31, Pe = 32, Xe = 33, fr = 34, Cr = 35, Ur = 36, Te = 37, Fr = 38, it = 39, ot = 40, kt = 41, Ua = 42, Ai = 43, ei = [9001, 65288], Fa = "!", L = "×", Je = "÷", hr = _B(JB), KA = [XA, Ur], dr = [WB, wa, fa, ZB], ha = [OA, Ca], gn = [de, he], ti = dr.concat(ha), Qn = [Fr, it, ot, fr, Cr], ri = [Fe, gr], ni = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(a, s) {
    var B = hr.get(a);
    if (B > Bn ? (n.push(!0), B -= Bn) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(a) !== -1)
      return r.push(s), t.push(Qr);
    if (B === YB || B === ur) {
      if (s === 0)
        return r.push(s), t.push(XA);
      var i = t[s - 1];
      return ti.indexOf(i) === -1 ? (r.push(r[s - 1]), t.push(i)) : (r.push(s), t.push(XA));
    }
    if (r.push(s), B === $B)
      return t.push(A === "strict" ? wr : Te);
    if (B === Ua || B === qB)
      return t.push(XA);
    if (B === Ai)
      return a >= 131072 && a <= 196605 || a >= 196608 && a <= 262141 ? t.push(Te) : t.push(XA);
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
      if (s !== OA)
        break;
    }
  if (n === OA)
    for (var a = t; a > 0; ) {
      a--;
      var B = r[a];
      if (Array.isArray(e) ? e.indexOf(B) !== -1 : e === B)
        for (var i = t; i <= r.length; ) {
          i++;
          var s = r[i];
          if (s === A)
            return !0;
          if (s !== OA)
            break;
        }
      if (B !== OA)
        break;
    }
  return !1;
}, wn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r === OA)
      t--;
    else
      return r;
  }
  return 0;
}, ai = function(e, A, t, r, n) {
  if (t[r] === 0)
    return L;
  var a = r - 1;
  if (Array.isArray(n) && n[a] === !0)
    return L;
  var s = a - 1, B = a + 1, i = A[a], o = s >= 0 ? A[s] : 0, c = A[B];
  if (i === wa && c === fa)
    return L;
  if (dr.indexOf(i) !== -1)
    return Fa;
  if (dr.indexOf(c) !== -1 || ha.indexOf(c) !== -1)
    return L;
  if (wn(a, A) === Ca)
    return Je;
  if (hr.get(e[a]) === ur || (i === Pe || i === Xe) && hr.get(e[B]) === ur || i === on || c === on || i === cn || [OA, gr, Fe].indexOf(i) === -1 && c === cn || [_e, Qe, jB, zA, jA].indexOf(c) !== -1 || wn(a, A) === we || _t(Vt, we, a, A) || _t([_e, Qe], wr, a, A) || _t(ln, ln, a, A))
    return L;
  if (i === OA)
    return Je;
  if (i === Vt || c === Vt)
    return L;
  if (c === Qr || i === Qr)
    return Je;
  if ([gr, Fe, wr].indexOf(c) !== -1 || i === zB || o === Ur && ri.indexOf(i) !== -1 || i === jA && c === Ur || c === un || KA.indexOf(c) !== -1 && i === QA || KA.indexOf(i) !== -1 && c === QA || i === de && [Te, Pe, Xe].indexOf(c) !== -1 || [Te, Pe, Xe].indexOf(i) !== -1 && c === he || KA.indexOf(i) !== -1 && gn.indexOf(c) !== -1 || gn.indexOf(i) !== -1 && KA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [de, he].indexOf(i) !== -1 && (c === QA || [we, Fe].indexOf(c) !== -1 && A[B + 1] === QA) || // ( OP | HY ) × NU
  [we, Fe].indexOf(i) !== -1 && c === QA || // NU ×	(NU | SY | IS)
  i === QA && [QA, jA, zA].indexOf(c) !== -1)
    return L;
  if ([QA, jA, zA, _e, Qe].indexOf(c) !== -1)
    for (var u = a; u >= 0; ) {
      var l = A[u];
      if (l === QA)
        return L;
      if ([jA, zA].indexOf(l) !== -1)
        u--;
      else
        break;
    }
  if ([de, he].indexOf(c) !== -1)
    for (var u = [_e, Qe].indexOf(i) !== -1 ? s : a; u >= 0; ) {
      var l = A[u];
      if (l === QA)
        return L;
      if ([jA, zA].indexOf(l) !== -1)
        u--;
      else
        break;
    }
  if (Fr === i && [Fr, it, fr, Cr].indexOf(c) !== -1 || [it, fr].indexOf(i) !== -1 && [it, ot].indexOf(c) !== -1 || [ot, Cr].indexOf(i) !== -1 && c === ot || Qn.indexOf(i) !== -1 && [un, he].indexOf(c) !== -1 || Qn.indexOf(c) !== -1 && i === de || KA.indexOf(i) !== -1 && KA.indexOf(c) !== -1 || i === zA && KA.indexOf(c) !== -1 || KA.concat(QA).indexOf(i) !== -1 && c === we && ei.indexOf(e[B]) === -1 || KA.concat(QA).indexOf(c) !== -1 && i === Qe)
    return L;
  if (i === kt && c === kt) {
    for (var w = t[a], g = 1; w > 0 && (w--, A[w] === kt); )
      g++;
    if (g % 2 !== 0)
      return L;
  }
  return i === Pe && c === Xe ? L : Je;
}, si = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = ni(e, A.lineBreak), r = t[0], n = t[1], a = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(B) {
    return [QA, XA, Ua].indexOf(B) !== -1 ? Te : B;
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
      for (var c = L; o < B && (c = ai(t, a, n, ++o, s)) === L; )
        ;
      if (c !== L || o === B) {
        var u = new Bi(t, c, i, o);
        return i = o, { value: u, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, oi = 1, ci = 2, Oe = 4, fn = 8, wt = 10, Cn = 47, me = 92, li = 9, ui = 32, We = 34, fe = 61, gi = 35, Qi = 36, wi = 37, Ye = 39, Ze = 40, Ce = 41, fi = 95, cA = 45, Ci = 33, Ui = 60, Fi = 62, hi = 64, di = 91, pi = 93, Ei = 61, Hi = 123, ze = 63, mi = 125, Un = 124, vi = 126, Ii = 128, Fn = 65533, Pt = 42, JA = 43, yi = 44, Ki = 58, bi = 59, Se = 46, Li = 0, xi = 8, Di = 11, Ti = 14, Si = 31, Mi = 127, mA = -1, da = 48, pa = 97, Ea = 101, Oi = 102, Ri = 117, Ni = 122, Ha = 65, ma = 69, va = 70, Gi = 85, Vi = 90, sA = function(e) {
  return e >= da && e <= 57;
}, ki = function(e) {
  return e >= 55296 && e <= 57343;
}, qA = function(e) {
  return sA(e) || e >= Ha && e <= va || e >= pa && e <= Oi;
}, _i = function(e) {
  return e >= pa && e <= Ni;
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
  return ft(e) || sA(e) || e === cA;
}, Wi = function(e) {
  return e >= Li && e <= xi || e === Di || e >= Ti && e <= Si || e === Mi;
}, MA = function(e, A) {
  return e !== me ? !1 : A !== wt;
}, qe = function(e, A, t) {
  return e === cA ? ft(A) || MA(A, t) : ft(e) ? !0 : !!(e === me && MA(e, A));
}, Xt = function(e, A, t) {
  return e === JA || e === cA ? sA(A) ? !0 : A === Se && sA(t) : sA(e === Se ? A : e);
}, Yi = function(e) {
  var A = 0, t = 1;
  (e[A] === JA || e[A] === cA) && (e[A] === cA && (t = -1), A++);
  for (var r = []; sA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(W.apply(void 0, r), 10) : 0;
  e[A] === Se && A++;
  for (var a = []; sA(e[A]); )
    a.push(e[A++]);
  var s = a.length, B = s ? parseInt(W.apply(void 0, a), 10) : 0;
  (e[A] === ma || e[A] === Ea) && A++;
  var i = 1;
  (e[A] === JA || e[A] === cA) && (e[A] === cA && (i = -1), A++);
  for (var o = []; sA(e[A]); )
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
        case We:
          return this.consumeStringToken(We);
        case gi:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (hn(t) || MA(r, n)) {
            var a = qe(t, r, n) ? ci : oi, s = this.consumeName();
            return { type: 5, value: s, flags: a };
          }
          break;
        case Qi:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), qi;
          break;
        case Ye:
          return this.consumeStringToken(Ye);
        case Ze:
          return Zi;
        case Ce:
          return zi;
        case Pt:
          if (this.peekCodePoint(0) === fe)
            return this.consumeCodePoint(), ao;
          break;
        case JA:
          if (Xt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case yi:
          return ji;
        case cA:
          var B = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (Xt(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (qe(B, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === cA && o === Fi)
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
              if (c === mA)
                return this.consumeToken();
            }
          break;
        case Ki:
          return oo;
        case bi:
          return co;
        case Ui:
          if (this.peekCodePoint(0) === Ci && this.peekCodePoint(1) === cA && this.peekCodePoint(2) === cA)
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
          if (MA(A, this.peekCodePoint(0)))
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
        case Ri:
        case Gi:
          var g = this.peekCodePoint(0), Q = this.peekCodePoint(1);
          return g === JA && (qA(Q) || Q === ze) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
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
        case mA:
          return pr;
      }
      return je(A) ? (this.consumeWhiteSpace(), go) : sA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : ft(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: W(A) };
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
      if (this.peekCodePoint(0) === cA && qA(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var B = []; qA(t) && B.length < 6; )
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
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === mA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ye || t === We) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === mA || this.peekCodePoint(0) === Ce) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), $e);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === mA || n === Ce)
          return { type: 22, value: W.apply(void 0, A) };
        if (je(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === mA || this.peekCodePoint(0) === Ce ? (this.consumeCodePoint(), { type: 22, value: W.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), $e);
        if (n === We || n === Ye || n === Ze || Wi(n))
          return this.consumeBadUrlRemnants(), $e;
        if (n === me)
          if (MA(n, this.peekCodePoint(0)))
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
        if (A === Ce || A === mA)
          return;
        MA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
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
        if (n === mA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === wt)
          return this._value.splice(0, r), so;
        if (n === me) {
          var a = this._value[r + 1];
          a !== mA && a !== void 0 && (a === wt ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : MA(n, a) && (t += this.consumeStringSlice(r), t += W(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Oe, r = this.peekCodePoint(0);
      for ((r === JA || r === cA) && A.push(this.consumeCodePoint()); sA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Se && sA(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = fn; sA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var a = this.peekCodePoint(2);
      if ((r === ma || r === Ea) && ((n === JA || n === cA) && sA(a) || sA(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = fn; sA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [Yi(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), a = this.peekCodePoint(1), s = this.peekCodePoint(2);
      if (qe(n, a, s)) {
        var B = this.consumeName();
        return { type: 15, number: t, flags: r, unit: B };
      }
      return n === wi ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if (qA(A)) {
        for (var t = W(A); qA(this.peekCodePoint(0)) && t.length < 6; )
          t += W(this.consumeCodePoint());
        je(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || ki(r) || r > 1114111 ? Fn : r;
      }
      return A === mA ? Fn : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (hn(t))
          A += W(t);
        else if (MA(t, this.peekCodePoint(0)))
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
), Re = function(e) {
  return e.type === 15;
}, ce = function(e) {
  return e.type === 17;
}, N = function(e) {
  return e.type === 20;
}, Qo = function(e) {
  return e.type === 0;
}, Er = function(e, A) {
  return N(e) && e.value === A;
}, Ka = function(e) {
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
}, kA = function(e) {
  return e.type === 17 || e.type === 15;
}, Y = function(e) {
  return e.type === 16 || kA(e);
}, ba = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, nA = {
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
  return [_(r, A), _(typeof n < "u" ? n : r, t)];
}, _ = function(e, A) {
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
  var A = e.filter(N).map(function(t) {
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
      return dA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [nA, RA];
    case "to right":
    case "left":
      return dA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [RA, RA];
    case "to bottom":
    case "top":
      return dA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [RA, nA];
    case "to left":
    case "right":
      return dA(270);
  }
  return 0;
}, dA = function(e) {
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
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), a = A.value.substring(2, 3);
        return NA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(a + a, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), a = A.value.substring(2, 3), s = A.value.substring(3, 4);
        return NA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(a + a, 16), parseInt(s + s, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), a = A.value.substring(4, 6);
        return NA(parseInt(r, 16), parseInt(n, 16), parseInt(a, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), a = A.value.substring(4, 6), s = A.value.substring(6, 8);
        return NA(parseInt(r, 16), parseInt(n, 16), parseInt(a, 16), parseInt(s, 16) / 255);
      }
    }
    if (A.type === 20) {
      var B = LA[A.value.toUpperCase()];
      if (typeof B < "u")
        return B;
    }
    return LA.TRANSPARENT;
  }
}, VA = function(e) {
  return (255 & e) === 0;
}, eA = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, NA = function(e, A, t, r) {
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
    return NA(n, a, s, 1);
  }
  if (t.length === 4) {
    var B = t.map(dn), n = B[0], a = B[1], s = B[2], i = B[3];
    return NA(n, a, s, i);
  }
  return 0;
};
function Jt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var En = function(e, A) {
  var t = A.filter(ie), r = t[0], n = t[1], a = t[2], s = t[3], B = (r.type === 17 ? dA(r.number) : It.parse(e, r)) / (Math.PI * 2), i = Y(n) ? n.number / 100 : 0, o = Y(a) ? a.number / 100 : 0, c = typeof s < "u" && Y(s) ? _(s, 1) : 1;
  if (i === 0)
    return NA(o * 255, o * 255, o * 255, 1);
  var u = o <= 0.5 ? o * (i + 1) : o + i - o * i, l = o * 2 - u, w = Jt(l, u, B + 1 / 3), g = Jt(l, u, B), Q = Jt(l, u, B - 1 / 3);
  return NA(w * 255, g * 255, Q * 255, c);
}, fo = {
  hsl: En,
  hsla: En,
  rgb: pn,
  rgba: pn
}, ve = function(e, A) {
  return GA.parse(e, ya.create(A).parseComponentValue());
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
      if (N(t))
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
  var t = GA.parse(e, A[0]), r = A[1];
  return r && Y(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Hn = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = nA), r.stop === null && (r.stop = RA);
  for (var n = [], a = 0, s = 0; s < e.length; s++) {
    var B = e[s].stop;
    if (B !== null) {
      var i = _(B, A);
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
  var r = A / 2, n = t / 2, a = _(e[0], A) - r, s = n - _(e[1], t);
  return (Math.atan2(s, a) + Math.PI * 2) % (Math.PI * 2);
}, ho = function(e, A, t) {
  var r = typeof e == "number" ? e : Fo(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), a = A / 2, s = t / 2, B = n / 2, i = Math.sin(r - Math.PI / 2) * B, o = Math.cos(r - Math.PI / 2) * B;
  return [n, a - o, a + o, s - i, s + i];
}, EA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, mn = function(e, A, t, r, n) {
  var a = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return a.reduce(function(s, B) {
    var i = B[0], o = B[1], c = EA(t - i, r - o);
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
        a = s = Math.min(EA(A, t), EA(A, t - n), EA(A - r, t), EA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), i = mn(r, n, A, t, !0), o = i[0], c = i[1];
        a = EA(o - A, (c - t) / B), s = B * a;
      }
      break;
    case 1:
      e.shape === 0 ? a = s = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (a = Math.max(Math.abs(A), Math.abs(A - r)), s = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        a = s = Math.max(EA(A, t), EA(A, t - n), EA(A - r, t), EA(A - r, t - n));
      else if (e.shape === 1) {
        var B = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), u = mn(r, n, A, t, !1), o = u[0], c = u[1];
        a = EA(o - A, (c - t) / B), s = B * a;
      }
      break;
  }
  return Array.isArray(e.size) && (a = _(e.size[0], r), s = e.size.length === 2 ? _(e.size[1], n) : a), [a, s];
}, Eo = function(e, A) {
  var t = dA(180), r = [];
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
  var t = dA(180), r = [];
  return IA(A).forEach(function(n, a) {
    if (a === 0) {
      var s = n[0];
      if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
        t = Ma(n);
        return;
      } else if (Sa(s)) {
        t = (It.parse(e, s) + dA(270)) % dA(360);
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
  var t = dA(180), r = [], n = 1, a = 0, s = 3, B = [];
  return IA(A).forEach(function(i, o) {
    var c = i[0];
    if (o === 0) {
      if (N(c) && c.value === "linear") {
        n = 1;
        return;
      } else if (N(c) && c.value === "radial") {
        n = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var u = GA.parse(e, c.values[0]);
        r.push({ stop: nA, color: u });
      } else if (c.name === "to") {
        var u = GA.parse(e, c.values[0]);
        r.push({ stop: RA, color: u });
      } else if (c.name === "color-stop") {
        var l = c.values.filter(ie);
        if (l.length === 2) {
          var u = GA.parse(e, l[1]), w = l[0];
          ce(w) && r.push({
            stop: { type: 16, number: w.number * 100, flags: w.flags },
            color: u
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + dA(180)) % dA(360),
    stops: r,
    type: n
  } : { size: s, shape: a, stops: r, position: B, type: n };
}, Oa = "closest-side", Ra = "farthest-side", Na = "closest-corner", Ga = "farthest-corner", Va = "circle", ka = "ellipse", _a = "cover", Pa = "contain", mo = function(e, A) {
  var t = 0, r = 3, n = [], a = [];
  return IA(A).forEach(function(s, B) {
    var i = !0;
    if (B === 0) {
      var o = !1;
      i = s.reduce(function(u, l) {
        if (o)
          if (N(l))
            switch (l.value) {
              case "center":
                return a.push(Mr), u;
              case "top":
              case "left":
                return a.push(nA), u;
              case "right":
              case "bottom":
                return a.push(RA), u;
            }
          else (Y(l) || kA(l)) && a.push(l);
        else if (N(l))
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
            case Ra:
              return r = 1, !1;
            case Pa:
            case Na:
              return r = 2, !1;
            case Ga:
              return r = 3, !1;
          }
        else if (kA(l) || Y(l))
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
      if (N(u))
        switch (u.value) {
          case "center":
            return a.push(Mr), !1;
          case "top":
          case "left":
            return a.push(nA), !1;
          case "right":
          case "bottom":
            return a.push(RA), !1;
        }
      else if (Y(u) || kA(u))
        return a.push(u), !1;
      return c;
    }, i) : B === 1 && (i = s.reduce(function(c, u) {
      if (N(u))
        switch (u.value) {
          case Va:
            return t = 0, !1;
          case ka:
            return t = 1, !1;
          case Pa:
          case Oa:
            return r = 0, !1;
          case Ra:
            return r = 1, !1;
          case Na:
            return r = 2, !1;
          case _a:
          case Ga:
            return r = 3, !1;
        }
      else if (kA(u) || Y(u))
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
      return ie(r) && yo(r);
    }).map(function(r) {
      return Or.parse(e, r);
    });
  }
}, bo = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (N(t))
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
      return t.filter(Y);
    }).map(ba);
  }
}, xo = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return IA(A).map(function(t) {
      return t.filter(N).map(function(r) {
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
}, se;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(se || (se = {}));
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
  return N(e) || Y(e);
}, Kt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, Mo = Kt("top"), Oo = Kt("right"), Ro = Kt("bottom"), No = Kt("left"), bt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return ba(t.filter(Y));
    }
  };
}, Go = bt("top-left"), Vo = bt("top-right"), ko = bt("bottom-right"), _o = bt("bottom-left"), Lt = function(e) {
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
}, Po = Lt("top"), Xo = Lt("right"), Jo = Lt("bottom"), Wo = Lt("left"), xt = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return Re(t) ? t.number : 0;
    }
  };
}, Yo = xt("top"), Zo = xt("right"), zo = xt("bottom"), jo = xt("left"), qo = {
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
    return A.filter(N).reduce(
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
  return N(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : Y(e) ? _(e, A) : A;
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
    return A.filter(N).map(function(t) {
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
        offsetX: nA,
        offsetY: nA,
        blur: nA
      }, n = 0, a = 0; a < t.length; a++) {
        var s = t[a];
        kA(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : r.blur = s, n++) : r.color = GA.parse(e, s);
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
    var t = A.filter(Y);
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
}, bc = {
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
    return A.filter(N).map(function(t) {
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
    if (N(A))
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
    return A.filter(N).map(function(t) {
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
}, Nc = {
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
    for (var r = [], n = A.filter(Ka), a = 0; a < n.length; a++) {
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
    for (var t = [], r = A.filter(Ka), n = 0; n < r.length; n++) {
      var a = r[n], s = r[n + 1];
      if (N(a) && a.value !== "none") {
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
    return A.filter(Re).map(function(t) {
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
        offsetX: nA,
        offsetY: nA,
        blur: nA,
        spread: nA,
        inset: !1
      }, n = 0, a = 0; a < t.length; a++) {
        var s = t[a];
        Er(s, "inset") ? r.inset = !0 : kA(s) ? (n === 0 ? r.offsetX = s : n === 1 ? r.offsetY = s : n === 2 ? r.blur = s : r.spread = s, n++) : r.color = GA.parse(e, s);
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
    return A.filter(N).forEach(function(n) {
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
    return Re(A) ? A.number : 0;
  }
}, Yc = (
  /** @class */
  function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = E(A, kc, t.animationDuration), this.backgroundClip = E(A, Co, t.backgroundClip), this.backgroundColor = E(A, Uo, t.backgroundColor), this.backgroundImage = E(A, Ko, t.backgroundImage), this.backgroundOrigin = E(A, bo, t.backgroundOrigin), this.backgroundPosition = E(A, Lo, t.backgroundPosition), this.backgroundRepeat = E(A, xo, t.backgroundRepeat), this.backgroundSize = E(A, To, t.backgroundSize), this.borderTopColor = E(A, Mo, t.borderTopColor), this.borderRightColor = E(A, Oo, t.borderRightColor), this.borderBottomColor = E(A, Ro, t.borderBottomColor), this.borderLeftColor = E(A, No, t.borderLeftColor), this.borderTopLeftRadius = E(A, Go, t.borderTopLeftRadius), this.borderTopRightRadius = E(A, Vo, t.borderTopRightRadius), this.borderBottomRightRadius = E(A, ko, t.borderBottomRightRadius), this.borderBottomLeftRadius = E(A, _o, t.borderBottomLeftRadius), this.borderTopStyle = E(A, Po, t.borderTopStyle), this.borderRightStyle = E(A, Xo, t.borderRightStyle), this.borderBottomStyle = E(A, Jo, t.borderBottomStyle), this.borderLeftStyle = E(A, Wo, t.borderLeftStyle), this.borderTopWidth = E(A, Yo, t.borderTopWidth), this.borderRightWidth = E(A, Zo, t.borderRightWidth), this.borderBottomWidth = E(A, zo, t.borderBottomWidth), this.borderLeftWidth = E(A, jo, t.borderLeftWidth), this.boxShadow = E(A, Pc, t.boxShadow), this.color = E(A, qo, t.color), this.direction = E(A, $o, t.direction), this.display = E(A, Ac, t.display), this.float = E(A, tc, t.cssFloat), this.fontFamily = E(A, Tc, t.fontFamily), this.fontSize = E(A, Sc, t.fontSize), this.fontStyle = E(A, Rc, t.fontStyle), this.fontVariant = E(A, Oc, t.fontVariant), this.fontWeight = E(A, Mc, t.fontWeight), this.letterSpacing = E(A, rc, t.letterSpacing), this.lineBreak = E(A, nc, t.lineBreak), this.lineHeight = E(A, ac, t.lineHeight), this.listStyleImage = E(A, sc, t.listStyleImage), this.listStylePosition = E(A, Bc, t.listStylePosition), this.listStyleType = E(A, Hr, t.listStyleType), this.marginTop = E(A, ic, t.marginTop), this.marginRight = E(A, oc, t.marginRight), this.marginBottom = E(A, cc, t.marginBottom), this.marginLeft = E(A, lc, t.marginLeft), this.opacity = E(A, Lc, t.opacity);
      var a = E(A, uc, t.overflow);
      this.overflowX = a[0], this.overflowY = a[a.length > 1 ? 1 : 0], this.overflowWrap = E(A, gc, t.overflowWrap), this.paddingTop = E(A, Qc, t.paddingTop), this.paddingRight = E(A, wc, t.paddingRight), this.paddingBottom = E(A, fc, t.paddingBottom), this.paddingLeft = E(A, Cc, t.paddingLeft), this.paintOrder = E(A, Xc, t.paintOrder), this.position = E(A, Fc, t.position), this.textAlign = E(A, Uc, t.textAlign), this.textDecorationColor = E(A, xc, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = E(A, Dc, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = E(A, hc, t.textShadow), this.textTransform = E(A, dc, t.textTransform), this.transform = E(A, pc, t.transform), this.transformOrigin = E(A, Ic, t.transformOrigin), this.visibility = E(A, yc, t.visibility), this.webkitTextStrokeColor = E(A, Jc, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = E(A, Wc, t.webkitTextStrokeWidth), this.wordBreak = E(A, Kc, t.wordBreak), this.zIndex = E(A, bc, t.zIndex);
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
), Zc = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.content = E(A, Nc, t.content), this.quotes = E(A, _c, t.quotes);
    }
    return e;
  }()
), Kn = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.counterIncrement = E(A, Gc, t.counterIncrement), this.counterReset = E(A, Vc, t.counterReset);
    }
    return e;
  }()
), E = function(e, A, t) {
  var r = new Ia(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var a = new ya(r.read());
  switch (A.type) {
    case 2:
      var s = a.parseComponentValue();
      return A.parse(e, N(s) ? s.value : A.initialValue);
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
          return GA.parse(e, a.parseComponentValue());
        case "image":
          return Or.parse(e, a.parseComponentValue());
        case "length":
          var B = a.parseComponentValue();
          return kA(B) ? B : nA;
        case "length-percentage":
          var i = a.parseComponentValue();
          return Y(i) ? i : nA;
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
  /* @__PURE__ */ function() {
    function e(A, t) {
      if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, mr(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Yc(A, window.getComputedStyle(t, null)), yr(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = mt(this.context, t), mr(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), qc = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", bn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ee = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var tt = 0; tt < bn.length; tt++)
  Ee[bn.charCodeAt(tt)] = tt;
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
}, YA = 5, Rr = 11, Wt = 2, tl = Rr - YA, Wa = 65536 >> YA, rl = 1 << YA, Yt = rl - 1, nl = 1024 >> YA, al = Wa + nl, sl = al, Bl = 32, il = sl + Bl, ol = 65536 >> Rr, cl = 1 << tl, ll = cl - 1, Ln = function(e, A, t) {
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
          return t = this.index[A >> YA], t = (t << Wt) + (A & Yt), this.data[t];
        if (A <= 65535)
          return t = this.index[Wa + (A - 55296 >> YA)], t = (t << Wt) + (A & Yt), this.data[t];
        if (A < this.highStart)
          return t = il - ol + (A >> Rr), t = this.index[t], t += A >> YA & ll, t = this.index[t], t = (t << Wt) + (A & Yt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), xn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", wl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var rt = 0; rt < xn.length; rt++)
  wl[xn.charCodeAt(rt)] = rt;
var fl = 1, Zt = 2, zt = 3, Dn = 4, Tn = 5, Cl = 7, Sn = 8, jt = 9, qt = 10, Mn = 11, On = 12, Rn = 13, Nn = 14, $t = 15, Ul = function(e) {
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
}, hl = gl(qc), FA = "×", Ar = "÷", dl = function(e) {
  return hl.get(e);
}, pl = function(e, A, t) {
  var r = t - 2, n = A[r], a = A[t - 1], s = A[t];
  if (a === Zt && s === zt)
    return FA;
  if (a === Zt || a === zt || a === Dn || s === Zt || s === zt || s === Dn)
    return Ar;
  if (a === Sn && [Sn, jt, Mn, On].indexOf(s) !== -1 || (a === Mn || a === jt) && (s === jt || s === qt) || (a === On || a === qt) && s === qt || s === Rn || s === Tn || s === Cl || a === fl)
    return FA;
  if (a === Rn && s === Nn) {
    for (; n === Tn; )
      n = A[--r];
    if (n === Nn)
      return FA;
  }
  if (a === $t && s === $t) {
    for (var B = 0; n === $t; )
      B++, n = A[--r];
    if (B % 2 === 0)
      return FA;
  }
  return Ar;
}, El = function(e) {
  var A = Ul(e), t = A.length, r = 0, n = 0, a = A.map(dl);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var s = FA; r < t && (s = pl(A, a, ++r)) === FA; )
        ;
      if (s !== FA || r === t) {
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
}, bl = function(e) {
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
}, rA = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = ml(document);
    return Object.defineProperty(rA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = rA.SUPPORT_RANGE_BOUNDS && vl(document);
    return Object.defineProperty(rA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = Kl(document);
    return Object.defineProperty(rA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? bl(document) : Promise.resolve(!1);
    return Object.defineProperty(rA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = Il();
    return Object.defineProperty(rA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = yl();
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
}, ye = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), Ll = function(e, A, t, r) {
  var n = Tl(A, t), a = [], s = 0;
  return n.forEach(function(B) {
    if (t.textDecorationLine.length || B.trim().length > 0)
      if (rA.SUPPORT_RANGE_BOUNDS) {
        var i = kn(r, s, B.length).getClientRects();
        if (i.length > 1) {
          var o = Nr(B), c = 0;
          o.forEach(function(l) {
            a.push(new ye(l, xA.fromDOMRectList(e, kn(r, c + s, l.length).getClientRects()))), c += l.length;
          });
        } else
          a.push(new ye(B, xA.fromDOMRectList(e, i)));
      } else {
        var u = r.splitText(B.length);
        a.push(new ye(B, xl(e, r))), r = u;
      }
    else rA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(B.length));
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
}, Nr = function(e) {
  if (rA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return Hl(e);
}, Dl = function(e, A) {
  if (rA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Ml(e, A);
}, Tl = function(e, A) {
  return A.letterSpacing !== 0 ? Nr(e) : Dl(e, A);
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
  /* @__PURE__ */ function() {
    function e(A, t, r) {
      this.text = Rl(t.data, r.textTransform), this.textBounds = Ll(A, this.text, r, t);
    }
    return e;
  }()
), Rl = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Nl, Gl);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Nl = /(^|\s|:|-|\(|\))([a-z])/g, Gl = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Ya = (
  /** @class */
  function(e) {
    HA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  }(yA)
), Za = (
  /** @class */
  function(e) {
    HA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  }(yA)
), za = (
  /** @class */
  function(e) {
    HA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, a = new XMLSerializer(), s = mt(t, r);
      return r.setAttribute("width", s.width + "px"), r.setAttribute("height", s.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(a.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  }(yA)
), ja = (
  /** @class */
  function(e) {
    HA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(yA)
), Ir = (
  /** @class */
  function(e) {
    HA(A, e);
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
    HA(A, e);
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
    HA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, a = r.options[r.selectedIndex || 0];
      return n.value = a && a.text || "", n;
    }
    return A;
  }(yA)
), $a = (
  /** @class */
  function(e) {
    HA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(yA)
), As = (
  /** @class */
  function(e) {
    HA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = ts(t, r.contentWindow.document.documentElement);
          var a = r.contentWindow.document.documentElement ? ve(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : LA.TRANSPARENT, s = r.contentWindow.document.body ? ve(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : LA.TRANSPARENT;
          n.backgroundColor = VA(a) ? VA(s) ? n.styles.backgroundColor : s : a;
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
    else if (ae(n))
      if (Bs(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(B) {
          return ct(e, B, t, r);
        });
      else {
        var s = es(e, n);
        s.styles.isVisible() && (Wl(n, s, r) ? s.flags |= 4 : Yl(s.styles) && (s.flags |= 2), Jl.indexOf(n.tagName) !== -1 && (s.flags |= 8), t.elements.push(s), n.slot, n.shadowRoot ? ct(e, n.shadowRoot, s, r) : !ht(n) && !ns(n) && !dt(n) && ct(e, n, s, r));
      }
}, es = function(e, A) {
  return Kr(A) ? new Ya(e, A) : as(A) ? new Za(e, A) : ns(A) ? new za(e, A) : Zl(A) ? new ja(e, A) : zl(A) ? new Ir(e, A) : jl(A) ? new Gr(e, A) : dt(A) ? new qa(e, A) : ht(A) ? new $a(e, A) : ss(A) ? new As(e, A) : new yA(e, A);
}, ts = function(e, A) {
  var t = es(e, A);
  return t.flags |= 4, ct(e, A, t, t), t;
}, Wl = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Vr(e) && t.styles.isTransparent();
}, Yl = function(e) {
  return e.isPositioned() || e.isFloating();
}, rs = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, ae = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, yr = function(e) {
  return ae(e) && typeof e.style < "u" && !lt(e);
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
}, Kr = function(e) {
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
}, $A = function(e, A, t, r, n, a) {
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
}, J = function(e, A, t, r, n) {
  var a = t - A + 1;
  return (e < 0 ? "-" : "") + (is(Math.abs(e), a, r, function(s) {
    return W(Math.floor(s % a) + A);
  }) + n);
}, PA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return is(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, te = 1, TA = 2, SA = 4, He = 8, bA = function(e, A, t, r, n, a) {
  if (e < -9999 || e > 9999)
    return Me(e, 4, n.length > 0);
  var s = Math.abs(e), B = n;
  if (s === 0)
    return A[0] + B;
  for (var i = 0; s > 0 && i <= 4; i++) {
    var o = s % 10;
    o === 0 && AA(a, te) && B !== "" ? B = A[o] + B : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && AA(a, TA) || o === 1 && i === 1 && AA(a, SA) && e > 100 || o === 1 && i > 1 && AA(a, He) ? B = A[o] + (i > 0 ? t[i - 1] : "") + B : o === 1 && i > 0 && (B = t[i - 1] + B), s = Math.floor(s / 10);
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
      var B = J(e, 48, 57, !0, r);
      return B.length < 4 ? "0" + B : B;
    case 4:
      return PA(e, "〇一二三四五六七八九", n);
    case 6:
      return $A(e, 1, 3999, Wn, 3, r).toLowerCase();
    case 7:
      return $A(e, 1, 3999, Wn, 3, r);
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
      return $A(e, 1, 9999, Yn, 3, r);
    case 35:
      return $A(e, 1, 9999, Yn, 3, r).toLowerCase();
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
      return bA(e, "零一二三四五六七八九", Zn, "負", n, TA | SA | He);
    case 47:
      return bA(e, "零壹貳參肆伍陸柒捌玖", zn, "負", n, te | TA | SA | He);
    case 42:
      return bA(e, "零一二三四五六七八九", Zn, "负", n, TA | SA | He);
    case 41:
      return bA(e, "零壹贰叁肆伍陆柒捌玖", zn, "负", n, te | TA | SA | He);
    case 26:
      return bA(e, "〇一二三四五六七八九", "十百千万", jn, n, 0);
    case 25:
      return bA(e, "零壱弐参四伍六七八九", "拾百千万", jn, n, te | TA | SA);
    case 31:
      return bA(e, "영일이삼사오육칠팔구", "십백천만", er, a, te | TA | SA);
    case 33:
      return bA(e, "零一二三四五六七八九", "十百千萬", er, a, 0);
    case 32:
      return bA(e, "零壹貳參四五六七八九", "拾百千", er, a, te | TA | SA);
    case 18:
      return J(e, 2406, 2415, !0, r);
    case 20:
      return $A(e, 1, 19999, tu, 3, r);
    case 21:
      return J(e, 2790, 2799, !0, r);
    case 22:
      return J(e, 2662, 2671, !0, r);
    case 22:
      return $A(e, 1, 10999, eu, 3, r);
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
        return iA(r, void 0, void 0, function() {
          var c, u;
          return aA(this, function(l) {
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
      return Kr(t) && (Kr(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Jn(t) ? this.createCustomElementClone(t) : t;
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
      (!ae(t) || !$l(t) && !t.hasAttribute(os) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !ae(t) || !Xn(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, a = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; a; a = a.nextSibling)
        if (ae(a) && Bs(a) && typeof a.assignedNodes == "function") {
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
      if (r && ae(A) && (yr(A) || lt(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var a = r.getComputedStyle(A), s = r.getComputedStyle(A, ":before"), B = r.getComputedStyle(A, ":after");
        this.referenceElement === A && yr(n) && (this.clonedReferenceElement = n), Vr(n) && gu(n);
        var i = this.counters.parse(new Kn(this.context, a)), o = this.resolvePseudoContent(A, n, s, Ke.BEFORE);
        Jn(A) && (t = !0), Pn(A) || this.cloneChildNodes(A, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(A, n, B, Ke.AFTER);
        return c && n.appendChild(c), this.counters.pop(i), (a && (this.options.copyStyles || lt(A)) && !ss(A) || t) && tr(a, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (ht(A) || dt(A)) && (ht(n) || dt(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var a = this;
      if (r) {
        var s = r.content, B = t.ownerDocument;
        if (!(!B || !s || s === "none" || s === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Kn(this.context, r));
          var i = new Zc(this.context, r), o = B.createElement("html2canvaspseudoelement");
          tr(r, o), i.content.forEach(function(u) {
            if (u.type === 0)
              o.appendChild(B.createTextNode(u.value));
            else if (u.type === 22) {
              var l = B.createElement("img");
              l.src = u.value, l.style.opacity = "1", o.appendChild(l);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var w = u.values.filter(N);
                w.length && o.appendChild(B.createTextNode(A.getAttribute(w[0].value) || ""));
              } else if (u.name === "counter") {
                var g = u.values.filter(ie), Q = g[0], C = g[1];
                if (Q && N(Q)) {
                  var f = a.counters.getCounterValue(Q.value), h = C && N(C) ? Hr.parse(a.context, C.value) : 3;
                  o.appendChild(B.createTextNode(Me(f, h, !1)));
                }
              } else if (u.name === "counters") {
                var H = u.values.filter(ie), Q = H[0], I = H[1], C = H[2];
                if (Q && N(Q)) {
                  var v = a.counters.getCounterValues(Q.value), F = C && N(C) ? Hr.parse(a.context, C.value) : 3, K = I && I.type === 0 ? I.value : "", y = v.map(function(Z) {
                    return Me(Z, F, !1);
                  }).join(K);
                  o.appendChild(B.createTextNode(y));
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
          }), o.className = br + " " + Lr;
          var c = n === Ke.BEFORE ? " " + br : " " + Lr;
          return lt(t) ? t.className.baseValue += c : t.className += c, o;
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
}, lu = ":before", uu = ":after", br = "___html2canvas___pseudoelement_before", Lr = "___html2canvas___pseudoelement_after", $n = `{
    content: "" !important;
    display: none !important;
}`, gu = function(e) {
  Qu(e, "." + br + lu + $n + `
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
      return iA(this, void 0, void 0, function() {
        var t, r, n, a, s = this;
        return aA(this, function(B) {
          switch (B.label) {
            case 0:
              return t = cs.isSameOrigin(A), r = !rr(A) && this._options.useCORS === !0 && rA.SUPPORT_CORS_IMAGES && !t, n = !rr(A) && !t && !nr(A) && typeof this._options.proxy == "string" && rA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !rr(A) && !nr(A) && !n && !r ? [
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
        var B = rA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
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
  return rA.SUPPORT_SVG_DRAWING || !du(e);
}, rr = function(e) {
  return Uu.test(e);
}, hu = function(e) {
  return Cu.test(e);
}, nr = function(e) {
  return e.substr(0, 4) === "blob";
}, du = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || fu.test(e);
}, d = (
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
  return new d(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, nt = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = Ae(this.start, this.startControl, A), n = Ae(this.startControl, this.endControl, A), a = Ae(this.endControl, this.end, A), s = Ae(r, n, A), B = Ae(n, a, A), i = Ae(s, B, A);
      return t ? new e(this.start, r, s, i) : new e(i, B, a, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), hA = function(e) {
  return e.type === 1;
}, pu = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = pe(t.borderTopLeftRadius, r.width, r.height), a = n[0], s = n[1], B = pe(t.borderTopRightRadius, r.width, r.height), i = B[0], o = B[1], c = pe(t.borderBottomRightRadius, r.width, r.height), u = c[0], l = c[1], w = pe(t.borderBottomLeftRadius, r.width, r.height), g = w[0], Q = w[1], C = [];
      C.push((a + i) / r.width), C.push((g + u) / r.width), C.push((s + Q) / r.height), C.push((o + l) / r.height);
      var f = Math.max.apply(Math, C);
      f > 1 && (a /= f, s /= f, i /= f, o /= f, u /= f, l /= f, g /= f, Q /= f);
      var h = r.width - i, H = r.height - l, I = r.width - u, v = r.height - Q, F = t.borderTopWidth, K = t.borderRightWidth, y = t.borderBottomWidth, m = t.borderLeftWidth, R = _(t.paddingTop, A.bounds.width), Z = _(t.paddingRight, A.bounds.width), z = _(t.paddingBottom, A.bounds.width), T = _(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = a > 0 || s > 0 ? P(r.left + m / 3, r.top + F / 3, a - m / 3, s - F / 3, O.TOP_LEFT) : new d(r.left + m / 3, r.top + F / 3), this.topRightBorderDoubleOuterBox = a > 0 || s > 0 ? P(r.left + h, r.top + F / 3, i - K / 3, o - F / 3, O.TOP_RIGHT) : new d(r.left + r.width - K / 3, r.top + F / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || l > 0 ? P(r.left + I, r.top + H, u - K / 3, l - y / 3, O.BOTTOM_RIGHT) : new d(r.left + r.width - K / 3, r.top + r.height - y / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || Q > 0 ? P(r.left + m / 3, r.top + v, g - m / 3, Q - y / 3, O.BOTTOM_LEFT) : new d(r.left + m / 3, r.top + r.height - y / 3), this.topLeftBorderDoubleInnerBox = a > 0 || s > 0 ? P(r.left + m * 2 / 3, r.top + F * 2 / 3, a - m * 2 / 3, s - F * 2 / 3, O.TOP_LEFT) : new d(r.left + m * 2 / 3, r.top + F * 2 / 3), this.topRightBorderDoubleInnerBox = a > 0 || s > 0 ? P(r.left + h, r.top + F * 2 / 3, i - K * 2 / 3, o - F * 2 / 3, O.TOP_RIGHT) : new d(r.left + r.width - K * 2 / 3, r.top + F * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || l > 0 ? P(r.left + I, r.top + H, u - K * 2 / 3, l - y * 2 / 3, O.BOTTOM_RIGHT) : new d(r.left + r.width - K * 2 / 3, r.top + r.height - y * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || Q > 0 ? P(r.left + m * 2 / 3, r.top + v, g - m * 2 / 3, Q - y * 2 / 3, O.BOTTOM_LEFT) : new d(r.left + m * 2 / 3, r.top + r.height - y * 2 / 3), this.topLeftBorderStroke = a > 0 || s > 0 ? P(r.left + m / 2, r.top + F / 2, a - m / 2, s - F / 2, O.TOP_LEFT) : new d(r.left + m / 2, r.top + F / 2), this.topRightBorderStroke = a > 0 || s > 0 ? P(r.left + h, r.top + F / 2, i - K / 2, o - F / 2, O.TOP_RIGHT) : new d(r.left + r.width - K / 2, r.top + F / 2), this.bottomRightBorderStroke = u > 0 || l > 0 ? P(r.left + I, r.top + H, u - K / 2, l - y / 2, O.BOTTOM_RIGHT) : new d(r.left + r.width - K / 2, r.top + r.height - y / 2), this.bottomLeftBorderStroke = g > 0 || Q > 0 ? P(r.left + m / 2, r.top + v, g - m / 2, Q - y / 2, O.BOTTOM_LEFT) : new d(r.left + m / 2, r.top + r.height - y / 2), this.topLeftBorderBox = a > 0 || s > 0 ? P(r.left, r.top, a, s, O.TOP_LEFT) : new d(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? P(r.left + h, r.top, i, o, O.TOP_RIGHT) : new d(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || l > 0 ? P(r.left + I, r.top + H, u, l, O.BOTTOM_RIGHT) : new d(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || Q > 0 ? P(r.left, r.top + v, g, Q, O.BOTTOM_LEFT) : new d(r.left, r.top + r.height), this.topLeftPaddingBox = a > 0 || s > 0 ? P(r.left + m, r.top + F, Math.max(0, a - m), Math.max(0, s - F), O.TOP_LEFT) : new d(r.left + m, r.top + F), this.topRightPaddingBox = i > 0 || o > 0 ? P(r.left + Math.min(h, r.width - K), r.top + F, h > r.width + K ? 0 : Math.max(0, i - K), Math.max(0, o - F), O.TOP_RIGHT) : new d(r.left + r.width - K, r.top + F), this.bottomRightPaddingBox = u > 0 || l > 0 ? P(r.left + Math.min(I, r.width - m), r.top + Math.min(H, r.height - y), Math.max(0, u - K), Math.max(0, l - y), O.BOTTOM_RIGHT) : new d(r.left + r.width - K, r.top + r.height - y), this.bottomLeftPaddingBox = g > 0 || Q > 0 ? P(r.left + m, r.top + Math.min(v, r.height - y), Math.max(0, g - m), Math.max(0, Q - y), O.BOTTOM_LEFT) : new d(r.left + m, r.top + r.height - y), this.topLeftContentBox = a > 0 || s > 0 ? P(r.left + m + T, r.top + F + R, Math.max(0, a - (m + T)), Math.max(0, s - (F + R)), O.TOP_LEFT) : new d(r.left + m + T, r.top + F + R), this.topRightContentBox = i > 0 || o > 0 ? P(r.left + Math.min(h, r.width + m + T), r.top + F + R, h > r.width + m + T ? 0 : i - m + T, o - (F + R), O.TOP_RIGHT) : new d(r.left + r.width - (K + Z), r.top + F + R), this.bottomRightContentBox = u > 0 || l > 0 ? P(r.left + Math.min(I, r.width - (m + T)), r.top + Math.min(H, r.height + F + R), Math.max(0, u - (K + Z)), l - (y + z), O.BOTTOM_RIGHT) : new d(r.left + r.width - (K + Z), r.top + r.height - (y + z)), this.bottomLeftContentBox = g > 0 || Q > 0 ? P(r.left + m + T, r.top + v, Math.max(0, g - (m + T)), Q - (y + z), O.BOTTOM_LEFT) : new d(r.left + m + T, r.top + r.height - (y + z));
    }
    return e;
  }()
), O;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(O || (O = {}));
var P = function(e, A, t, r, n) {
  var a = 4 * ((Math.sqrt(2) - 1) / 3), s = t * a, B = r * a, i = e + t, o = A + r;
  switch (n) {
    case O.TOP_LEFT:
      return new nt(new d(e, o), new d(e, o - B), new d(i - s, A), new d(i, A));
    case O.TOP_RIGHT:
      return new nt(new d(e, A), new d(e + s, A), new d(i, o - B), new d(i, o));
    case O.BOTTOM_RIGHT:
      return new nt(new d(i, A), new d(i, A + B), new d(e + s, o), new d(e, o));
    case O.BOTTOM_LEFT:
    default:
      return new nt(new d(i, o), new d(i - s, o), new d(e, A + B), new d(e, A));
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
  /* @__PURE__ */ function() {
    function e(A, t, r) {
      this.offsetX = A, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return e;
  }()
), at = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.path = A, this.target = t, this.type = 1;
    }
    return e;
  }()
), mu = (
  /** @class */
  /* @__PURE__ */ function() {
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
  /* @__PURE__ */ function() {
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
        return AA(i.target, A);
      });
    }, e;
  }()
), xr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var a = AA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), s = AA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), B = new gs(n, e);
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
    AA(
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
}, Ku = function(e) {
  var A = new gs(e, null), t = new us(A), r = [];
  return xr(A, t, t, r), Qs(A.container, r), t;
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
}, bu = function(e, A) {
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
}, Lu = function(e, A) {
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
  return hA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), hA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, pA = function(e, A, t, r) {
  var n = [];
  return hA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), hA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), hA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), hA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, ws = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Ht = function(e) {
  var A = e.styles, t = e.bounds, r = _(A.paddingLeft, t.width), n = _(A.paddingRight, t.width), a = _(A.paddingTop, t.width), s = _(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, a + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + a + s));
}, Du = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Ht(A) : ws(A);
}, Tu = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Ht(A) : ws(A);
}, ar = function(e, A, t) {
  var r = Du(re(e.styles.backgroundOrigin, A), e), n = Tu(re(e.styles.backgroundClip, A), e), a = Su(re(e.styles.backgroundSize, A), t, r), s = a[0], B = a[1], i = pe(re(e.styles.backgroundPosition, A), r.width - s, r.height - B), o = Mu(re(e.styles.backgroundRepeat, A), i, a, r, n), c = Math.round(r.left + i[0]), u = Math.round(r.top + i[1]);
  return [o, c, u, s, B];
}, ee = function(e) {
  return N(e) && e.value === se.AUTO;
}, Bt = function(e) {
  return typeof e == "number";
}, Su = function(e, A, t) {
  var r = A[0], n = A[1], a = A[2], s = e[0], B = e[1];
  if (!s)
    return [0, 0];
  if (Y(s) && B && Y(B))
    return [_(s, t.width), _(B, t.height)];
  var i = Bt(a);
  if (N(s) && (s.value === se.CONTAIN || s.value === se.COVER)) {
    if (Bt(a)) {
      var o = t.width / t.height;
      return o < a != (s.value === se.COVER) ? [t.width, t.width / a] : [t.height * a, t.height];
    }
    return [t.width, t.height];
  }
  var c = Bt(r), u = Bt(n), l = c || u;
  if (ee(s) && (!B || ee(B))) {
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
    var f = 0, h = 0;
    return Y(s) ? f = _(s, t.width) : Y(B) && (h = _(B, t.height)), ee(s) ? f = h * a : (!B || ee(B)) && (h = f / a), [f, h];
  }
  var H = null, I = null;
  if (Y(s) ? H = _(s, t.width) : B && Y(B) && (I = _(B, t.height)), H !== null && (!B || ee(B)) && (I = c && u ? H / r * n : t.height), I !== null && ee(s) && (H = c && u ? I / n * r : t.width), H !== null && I !== null)
    return [H, I];
  throw new Error("Unable to calculate background-size for element");
}, re = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Mu = function(e, A, t, r, n) {
  var a = A[0], s = A[1], B = t[0], i = t[1];
  switch (e) {
    case 2:
      return [
        new d(Math.round(r.left), Math.round(r.top + s)),
        new d(Math.round(r.left + r.width), Math.round(r.top + s)),
        new d(Math.round(r.left + r.width), Math.round(i + r.top + s)),
        new d(Math.round(r.left), Math.round(i + r.top + s))
      ];
    case 3:
      return [
        new d(Math.round(r.left + a), Math.round(r.top)),
        new d(Math.round(r.left + a + B), Math.round(r.top)),
        new d(Math.round(r.left + a + B), Math.round(r.height + r.top)),
        new d(Math.round(r.left + a), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new d(Math.round(r.left + a), Math.round(r.top + s)),
        new d(Math.round(r.left + a + B), Math.round(r.top + s)),
        new d(Math.round(r.left + a + B), Math.round(r.top + s + i)),
        new d(Math.round(r.left + a), Math.round(r.top + s + i))
      ];
    default:
      return [
        new d(Math.round(n.left), Math.round(n.top)),
        new d(Math.round(n.left + n.width), Math.round(n.top)),
        new d(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new d(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, Ou = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ta = "Hidden Text", Ru = (
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
  /* @__PURE__ */ function() {
    function e(A, t) {
      this.context = A, this.options = t;
    }
    return e;
  }()
), Nu = 1e4, Gu = (
  /** @class */
  function(e) {
    HA(A, e);
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
      this.ctx.save(), Iu(t) && (this.ctx.globalAlpha = t.opacity), vu(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), ls(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
      var a = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var s = Nr(t.text);
        s.reduce(function(B, i) {
          return a.ctx.fillText(i, B, t.bounds.top + n), B + a.ctx.measureText(i).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(s) {
        return s === "normal" || s === "small-caps";
      }).join(""), n = Xu(t.fontFamily).join(", "), a = Re(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, a, n].join(" "),
        n,
        a
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return iA(this, void 0, void 0, function() {
        var n, a, s, B, i, o, c, u, l = this;
        return aA(this, function(w) {
          return n = this.createFontStyle(r), a = n[0], s = n[1], B = n[2], this.ctx.font = a, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(s, B), o = i.baseline, c = i.middle, u = r.paintOrder, t.textBounds.forEach(function(g) {
            u.forEach(function(Q) {
              switch (Q) {
                case 0:
                  l.ctx.fillStyle = eA(r.color), l.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  var C = r.textShadow;
                  C.length && g.text.trim().length && (C.slice(0).reverse().forEach(function(f) {
                    l.ctx.shadowColor = eA(f.color), l.ctx.shadowOffsetX = f.offsetX.number * l.options.scale, l.ctx.shadowOffsetY = f.offsetY.number * l.options.scale, l.ctx.shadowBlur = f.blur.number, l.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  }), l.ctx.shadowColor = "", l.ctx.shadowOffsetX = 0, l.ctx.shadowOffsetY = 0, l.ctx.shadowBlur = 0), r.textDecorationLine.length && (l.ctx.fillStyle = eA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(f) {
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
                  r.webkitTextStrokeWidth && g.text.trim().length && (l.ctx.strokeStyle = eA(r.webkitTextStrokeColor), l.ctx.lineWidth = r.webkitTextStrokeWidth, l.ctx.lineJoin = window.chrome ? "miter" : "round", l.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + o)), l.ctx.strokeStyle = "", l.ctx.lineWidth = 0, l.ctx.lineJoin = "miter";
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
      return iA(this, void 0, void 0, function() {
        var r, n, a, s, B, i, h, h, o, c, u, l, I, w, g, v, Q, C, f, h, H, I, v;
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
              if (!(r instanceof Ya)) return [3, 8];
              F.label = 5;
            case 5:
              return F.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return h = F.sent(), this.renderReplacedElement(r, n, h), [3, 8];
            case 7:
              return F.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Za && this.renderReplacedElement(r, n, r.canvas), !(r instanceof za)) return [3, 12];
              F.label = 9;
            case 9:
              return F.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return h = F.sent(), this.renderReplacedElement(r, n, h), [3, 12];
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
                new d(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new d(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new d(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new d(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new d(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new d(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new d(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = eA(_n), this.ctx.fill(), this.ctx.restore()) : r.type === Ft && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = eA(_n), this.ctx.fill(), this.ctx.restore())), Vu(r) && r.value.length) {
                switch (l = this.createFontStyle(a), I = l[0], w = l[1], g = this.fontMetrics.getMetrics(I, w).baseline, this.ctx.font = I, this.ctx.fillStyle = eA(a.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = _u(r.styles.textAlign), v = Ht(r), Q = 0, r.styles.textAlign) {
                  case 1:
                    Q += v.width / 2;
                    break;
                  case 2:
                    Q += v.width;
                    break;
                }
                C = v.add(Q, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([
                  new d(v.left, v.top),
                  new d(v.left + v.width, v.top),
                  new d(v.left + v.width, v.top + v.height),
                  new d(v.left, v.top + v.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ye(r.value, C), a.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!AA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (f = r.styles.listStyleImage, f.type !== 0) return [3, 18];
              h = void 0, H = f.url, F.label = 15;
            case 15:
              return F.trys.push([15, 17, , 18]), [4, this.context.cache.match(H)];
            case 16:
              return h = F.sent(), this.ctx.drawImage(h, r.bounds.left - (h.width + 10), r.bounds.top), [3, 18];
            case 17:
              return F.sent(), this.context.logger.error("Error loading list-style-image " + H), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (I = this.createFontStyle(a)[0], this.ctx.font = I, this.ctx.fillStyle = eA(a.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new xA(r.bounds.left, r.bounds.top + _(r.styles.paddingTop, r.bounds.width), r.bounds.width, vn(a.lineHeight, a.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ye(t.listValue, v), a.letterSpacing, vn(a.lineHeight, a.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), F.label = 20;
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
        var r, n, f, a, s, f, B, i, f, o, c, f, u, l, f, w, g, f, Q, C, f;
        return aA(this, function(h) {
          switch (h.label) {
            case 0:
              if (AA(
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
              u = 0, l = t.inlineLevel, h.label = 19;
            case 19:
              return u < l.length ? (f = l[u], [4, this.renderNode(f)]) : [3, 22];
            case 20:
              h.sent(), h.label = 21;
            case 21:
              return u++, [3, 19];
            case 22:
              w = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, h.label = 23;
            case 23:
              return w < g.length ? (f = g[w], [4, this.renderStack(f)]) : [3, 26];
            case 24:
              h.sent(), h.label = 25;
            case 25:
              return w++, [3, 23];
            case 26:
              Q = 0, C = t.positiveZIndex, h.label = 27;
            case 27:
              return Q < C.length ? (f = C[Q], [4, this.renderStack(f)]) : [3, 30];
            case 28:
              h.sent(), h.label = 29;
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
                var u, l, w, R, j, q, T, X, y, g, R, j, q, T, X, Q, C, f, h, H, I, v, F, K, y, m, R, Z, z, T, X, wA, j, q, fA, BA, lA, CA, UA, x, G, D;
                return aA(this, function(V) {
                  switch (V.label) {
                    case 0:
                      if (c.type !== 0) return [3, 5];
                      u = void 0, l = c.url, V.label = 1;
                    case 1:
                      return V.trys.push([1, 3, , 4]), [4, a.context.cache.match(l)];
                    case 2:
                      return u = V.sent(), [3, 4];
                    case 3:
                      return V.sent(), a.context.logger.error("Error loading background-image " + l), [3, 4];
                    case 4:
                      return u && (w = ar(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), R = w[0], j = w[1], q = w[2], T = w[3], X = w[4], y = a.ctx.createPattern(a.resizeImage(u, T, X), "repeat"), a.renderRepeat(R, y, j, q)), [3, 6];
                    case 5:
                      vo(c) ? (g = ar(t, r, [null, null, null]), R = g[0], j = g[1], q = g[2], T = g[3], X = g[4], Q = ho(c.angle, T, X), C = Q[0], f = Q[1], h = Q[2], H = Q[3], I = Q[4], v = document.createElement("canvas"), v.width = T, v.height = X, F = v.getContext("2d"), K = F.createLinearGradient(f, H, h, I), Hn(c.stops, C).forEach(function($) {
                        return K.addColorStop($.stop, eA($.color));
                      }), F.fillStyle = K, F.fillRect(0, 0, T, X), T > 0 && X > 0 && (y = a.ctx.createPattern(v, "repeat"), a.renderRepeat(R, y, j, q))) : Io(c) && (m = ar(t, r, [
                        null,
                        null,
                        null
                      ]), R = m[0], Z = m[1], z = m[2], T = m[3], X = m[4], wA = c.position.length === 0 ? [Mr] : c.position, j = _(wA[0], T), q = _(wA[wA.length - 1], X), fA = po(c, j, q, T, X), BA = fA[0], lA = fA[1], BA > 0 && lA > 0 && (CA = a.ctx.createRadialGradient(Z + j, z + q, 0, Z + j, z + q, BA), Hn(c.stops, BA * 2).forEach(function($) {
                        return CA.addColorStop($.stop, eA($.color));
                      }), a.path(R), a.ctx.fillStyle = CA, BA !== lA ? (UA = t.bounds.left + 0.5 * t.bounds.width, x = t.bounds.top + 0.5 * t.bounds.height, G = lA / BA, D = 1 / G, a.ctx.save(), a.ctx.translate(UA, x), a.ctx.transform(1, 0, 0, G, 0, 0), a.ctx.translate(-UA, -x), a.ctx.fillRect(Z, D * (z - x) + x, T, X * D), a.ctx.restore()) : a.ctx.fill())), V.label = 6;
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
          return this.path(ea(n, r)), this.ctx.fillStyle = eA(t), this.ctx.fill(), [
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
              return s = bu(a, n), this.path(s), this.ctx.fillStyle = eA(t), this.ctx.fill(), B = Lu(a, n), this.path(B), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return iA(this, void 0, void 0, function() {
        var r, n, a, s, B, i, o, c, u = this;
        return aA(this, function(l) {
          switch (l.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !VA(r.backgroundColor) || r.backgroundImage.length, a = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], s = ku(re(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), VA(r.backgroundColor) || (this.ctx.fillStyle = eA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              l.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(w) {
                u.ctx.save();
                var g = pt(t.curves), Q = w.inset ? 0 : Nu, C = yu(g, -Q + (w.inset ? 1 : -1) * w.spread.number, (w.inset ? 1 : -1) * w.spread.number, w.spread.number * (w.inset ? -2 : 2), w.spread.number * (w.inset ? -2 : 2));
                w.inset ? (u.path(g), u.ctx.clip(), u.mask(C)) : (u.mask(g), u.ctx.clip(), u.path(C)), u.ctx.shadowOffsetX = w.offsetX.number + Q, u.ctx.shadowOffsetY = w.offsetY.number, u.ctx.shadowColor = eA(w.color), u.ctx.shadowBlur = w.blur.number, u.ctx.fillStyle = w.inset ? eA(w.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), l.label = 2;
            case 2:
              B = 0, i = 0, o = a, l.label = 3;
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
    }, A.prototype.renderDashedDottedBorder = function(t, r, n, a, s) {
      return iA(this, void 0, void 0, function() {
        var B, i, o, c, u, l, w, g, Q, C, f, h, H, I, v, F, v, F;
        return aA(this, function(K) {
          return this.ctx.save(), B = xu(a, n), i = ea(a, n), s === 2 && (this.path(i), this.ctx.clip()), hA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), hA(i[1]) ? (u = i[1].end.x, l = i[1].end.y) : (u = i[1].x, l = i[1].y), n === 0 || n === 2 ? w = Math.abs(o - u) : w = Math.abs(c - l), this.ctx.beginPath(), s === 3 ? this.formatPath(B) : this.formatPath(i.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, Q = r < 3 ? r * 2 : r, s === 3 && (g = r, Q = r), C = !0, w <= g * 2 ? C = !1 : w <= g * 2 + Q ? (f = w / (2 * g + Q), g *= f, Q *= f) : (h = Math.floor((w + Q) / (g + Q)), H = (w - h * g) / (h - 1), I = (w - (h + 1) * g) / h, Q = I <= 0 || Math.abs(Q - H) < Math.abs(Q - I) ? H : I), C && (s === 3 ? this.ctx.setLineDash([0, g + Q]) : this.ctx.setLineDash([g, Q])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = eA(t), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (hA(i[0]) && (v = i[3], F = i[0], this.ctx.beginPath(), this.formatPath([new d(v.end.x, v.end.y), new d(F.start.x, F.start.y)]), this.ctx.stroke()), hA(i[1]) && (v = i[1], F = i[2], this.ctx.beginPath(), this.formatPath([new d(v.end.x, v.end.y), new d(F.start.x, F.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
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
              return this.options.backgroundColor && (this.ctx.fillStyle = eA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Ku(t), [4, this.renderStack(r)];
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
    HA(A, e);
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
              return r = vr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Wu(r)];
            case 1:
              return n = a.sent(), this.options.backgroundColor && (this.ctx.fillStyle = eA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(fs)
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
typeof window < "u" && cs.setContext(window);
var ju = function(e, A) {
  return iA(void 0, void 0, void 0, function() {
    var t, r, n, a, s, B, i, o, c, u, l, w, g, Q, C, f, h, H, I, v, K, F, K, y, m, R, Z, z, T, X, wA, j, q, fA, BA, lA, CA, UA, x, G;
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
            allowTaint: (y = A.allowTaint) !== null && y !== void 0 ? y : !1,
            imageTimeout: (m = A.imageTimeout) !== null && m !== void 0 ? m : 15e3,
            proxy: A.proxy,
            useCORS: (R = A.useCORS) !== null && R !== void 0 ? R : !1
          }, a = lr({ logging: (Z = A.logging) !== null && Z !== void 0 ? Z : !0, cache: A.cache }, n), s = {
            windowWidth: (z = A.windowWidth) !== null && z !== void 0 ? z : r.innerWidth,
            windowHeight: (T = A.windowHeight) !== null && T !== void 0 ? T : r.innerHeight,
            scrollX: (X = A.scrollX) !== null && X !== void 0 ? X : r.pageXOffset,
            scrollY: (wA = A.scrollY) !== null && wA !== void 0 ? wA : r.pageYOffset
          }, B = new xA(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight), i = new Zu(a, B), o = (j = A.foreignObjectRendering) !== null && j !== void 0 ? j : !1, c = {
            allowTaint: (q = A.allowTaint) !== null && q !== void 0 ? q : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + B.width + "x" + B.height + " scrolled to " + -B.left + "," + -B.top), u = new qn(i, e, c), l = u.clonedReferenceElement, l ? [4, u.toIFrame(t, B)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return w = D.sent(), g = Vr(l) || ql(l) ? IB(l.ownerDocument) : mt(i, l), Q = g.width, C = g.height, f = g.left, h = g.top, H = qu(i, l, A.backgroundColor), I = {
            canvas: A.canvas,
            backgroundColor: H,
            scale: (BA = (fA = A.scale) !== null && fA !== void 0 ? fA : r.devicePixelRatio) !== null && BA !== void 0 ? BA : 1,
            x: ((lA = A.x) !== null && lA !== void 0 ? lA : 0) + f,
            y: ((CA = A.y) !== null && CA !== void 0 ? CA : 0) + h,
            width: (UA = A.width) !== null && UA !== void 0 ? UA : Math.ceil(Q),
            height: (x = A.height) !== null && x !== void 0 ? x : Math.ceil(C)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), K = new Ju(i, I), [4, K.render(l)]) : [3, 3];
        case 2:
          return v = D.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + f + "," + h + " with size " + Q + "x" + C + " using computed rendering"), i.logger.debug("Starting DOM parsing"), F = ts(i, l), H === F.styles.backgroundColor && (F.styles.backgroundColor = LA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + I.x + "," + I.y + " with size " + I.width + "x" + I.height), K = new Gu(i, I), [4, K.render(F)];
        case 4:
          v = D.sent(), D.label = 5;
        case 5:
          return (!((G = A.removeContainer) !== null && G !== void 0) || G) && (qn.destroy(w) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, v];
      }
    });
  });
}, qu = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? ve(e, getComputedStyle(r.documentElement).backgroundColor) : LA.TRANSPARENT, a = r.body ? ve(e, getComputedStyle(r.body).backgroundColor) : LA.TRANSPARENT, s = typeof t == "string" ? ve(e, t) : t === null ? LA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? VA(n) ? VA(a) ? s : a : n : s;
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
  return /* @__PURE__ */ Be.createElement("button", { className: a.join(" "), title: r, onClick: () => Cs(e, t, n), style: { lineHeight: "1.4em" } }, ut[t]);
}, tg = ({ config: e, dashboardDataConfig: A }) => {
  var r;
  let t = A || e;
  return t.dataFileSourceType === "url" && t.dataFileName && e.table.showDownloadUrl ? /* @__PURE__ */ Be.createElement("a", { href: t.dataFileName, title: ut.link, target: "_blank" }, ut.link) : (r = e == null ? void 0 : e.table) != null && r.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ Be.createElement("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank" }, ut.link) : null;
}, rg = ({ children: e, classes: A }) => /* @__PURE__ */ Be.createElement("section", { className: A.join(" ") }, /* @__PURE__ */ Be.createElement("span", null, e)), oe = () => null;
oe.Section = rg;
oe.Link = tg;
oe.Button = eg;
oe.generateMedia = Cs;
const ng = ({ rawData: e, fileName: A, headerColor: t, skipId: r }) => {
  const n = ds.unparse(e), a = new Blob([n], { type: "text/csv;charset=utf-8;" }), s = () => {
    typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(a, A);
  };
  return /* @__PURE__ */ React.createElement("a", { download: A, type: "button", onClick: s, href: URL.createObjectURL(a), "aria-label": "Download this data in a CSV file format.", className: `${t} no-border`, id: `${r}`, "data-html2canvas-ignore": !0, role: "button" }, "Download Data (CSV)");
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
}, ne = (e, A, t, r) => {
  var i, o, c, u, l, w, g;
  if (t.visualizationType === "Sankey" || (i = r == null ? void 0 : r[0]) != null && i.tableData) return r[e][A];
  const n = r[e];
  let a, s = n[A];
  if (A === ((o = t.xAxis) == null ? void 0 : o.dataKey))
    a = ((c = t.xAxis) == null ? void 0 : c.type) === "date" ? vB(((u = t.table) == null ? void 0 : u.dateDisplayFormat) || ((l = t.xAxis) == null ? void 0 : l.dateDisplayFormat), or((w = t.xAxis) == null ? void 0 : w.dateParseFormat, s)) : s;
  else {
    let Q = "left", C = t.series ? t.series.filter((H) => (H == null ? void 0 : H.axis) === "Left") : [], f = t.series ? t.series.filter((H) => (H == null ? void 0 : H.axis) === "Right") : [];
    C.map((H) => {
      H.dataKey === A && (Q = "left");
    }), f.map((H) => {
      H.dataKey === A && (Q = "right");
    });
    let h = sg(A, t);
    h ? a = t.dataFormat ? tn(r[e][A], Q, !1, t, h) : r[e][A] : a = t.dataFormat ? tn(r[e][A], Q, !1, t) : r[e][A];
  }
  return (g = t.preliminaryData) == null || g.forEach((Q) => {
    var v, F, K, y;
    const C = String(Q.value) === String(s), f = !Q.column || Q.column === A, h = (F = (v = t.runtime) == null ? void 0 : v.barSeriesKeys) == null ? void 0 : F.includes(A), H = (y = (K = t.runtime) == null ? void 0 : K.lineSeriesKeys) == null ? void 0 : y.includes(A), I = t.table.showSuppressedSymbol;
    if (C && f && Q.displayTable && Q.type === "suppression")
      switch (t.visualizationType) {
        case "Combo":
          a = h && I ? Q.iconCode : H && I ? Q.lineCode : "";
          break;
        case "Bar":
          a = I ? Q.iconCode : "";
          break;
        case "Line":
          a = I ? Q.lineCode : "";
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
  if (A.runtimeSeriesLabels && A.runtimeSeriesLabels[e]) return A.runtimeSeriesLabels[e];
  const r = e === ((s = A.xAxis) == null ? void 0 : s.dataKey), n = (B = A.table) == null ? void 0 : B.indexLabel;
  return r && n ? n : Bg(e, A);
}, Fs = (e, A, t) => {
  var i, o, c, u, l, w;
  if (e.visualizationType === "Sankey") return Object.keys((o = (i = e == null ? void 0 : e.data) == null ? void 0 : i[0]) == null ? void 0 : o.tableData[0]);
  const r = ir.cloneDeep(e.columns) || {}, n = Object.values(r).filter((g) => g.dataTable === !1).map((g) => g.name);
  let a = [];
  e.visualizationType !== "Pie" ? (a = A ? [(c = e.xAxis) == null ? void 0 : c.dataKey] : [], e.series ? e.series.forEach((g) => {
    a.push(g.dataKey);
  }) : t && t.length > 0 && (a = Object.keys(t[0]))) : a = A ? [(u = e.xAxis) == null ? void 0 : u.dataKey, (l = e.yAxis) == null ? void 0 : l.dataKey] : [(w = e.yAxis) == null ? void 0 : w.dataKey];
  const s = Object.keys(t[0] || {});
  Object.values(r).forEach(function(g) {
    var f;
    if (!g.name) return;
    const Q = a.includes(g.name), C = s.includes(g.name);
    g.name !== ((f = e.xAxis) == null ? void 0 : f.dataKey) && g.dataTable === !0 && !Q && C && a.push(g.name);
  });
  const B = Object.values(r).reduce((g, Q) => (Q.order !== void 0 && (g[Q.name] = Q.order - 1), g), {});
  return a = a.filter((g) => !n.includes(g)), a.forEach((g, Q) => {
    B[g] === void 0 && (Object.values(B).includes(Q) ? B[g] = Q + 1 : B[g] = Q);
  }), a.sort((g, Q) => B[g] - B[Q]), a;
}, Dr = () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ React.createElement("path", { d: "M0 5l5-5 5 5z" })), Tr = () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ React.createElement("path", { d: "M0 0l5 5 5-5z" })), hs = (e) => {
  const A = e.as;
  return /* @__PURE__ */ React.createElement(A, { className: "cdcdataviz-sr-only" }, e.children);
}, ig = ({ data: e, isVertical: A, config: t, setSortBy: r, sortBy: n, hasRowType: a }) => {
  var u;
  const s = (u = t.table) == null ? void 0 : u.groupBy;
  if (!e) return;
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
      return /* @__PURE__ */ React.createElement("span", { className: "cdcdataviz-sr-only" }, `Press command, modifier, or enter key to sort by ${C} in ${g.column !== C ? "ascending" : g.column === "desc" ? "descending" : "ascending"}  order`);
  }, c = ({ column: l, text: w, config: g }) => {
    let Q = "Not Applicable";
    return w === "__series__" && g.table.indexLabel ? `${g.table.indexLabel} ` : w === "__series__" && !g.table.indexLabel ? /* @__PURE__ */ React.createElement(hs, { as: "span" }, Q) : w;
  };
  if (A) {
    if (a) {
      const l = /row[_-]?type/i, w = B.findIndex((g) => l.test(g));
      w > -1 && B.splice(w, 1);
    }
    return /* @__PURE__ */ React.createElement("tr", null, B.map((l, w) => {
      const g = Us(l, t);
      return /* @__PURE__ */ React.createElement(
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
        /* @__PURE__ */ React.createElement(c, { text: g, column: l, config: t }),
        l === n.column && /* @__PURE__ */ React.createElement("span", { className: "sort-icon" }, n.asc ? /* @__PURE__ */ React.createElement(Tr, null) : /* @__PURE__ */ React.createElement(Dr, null)),
        /* @__PURE__ */ React.createElement(o, { sortBy: n, config: t, text: g })
      );
    }));
  } else {
    const l = t.visualizationType === "Pie" ? 1 : 0;
    return /* @__PURE__ */ React.createElement("tr", null, ["__series__", ...Object.keys(e)].slice(l).map((w, g) => {
      var f;
      let Q = (f = t.xAxis) == null ? void 0 : f.dataKey, C = w !== "__series__" ? ne(w, Q, t, e) : "__series__";
      return /* @__PURE__ */ React.createElement(
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
          onKeyDown: (h) => {
            h.keyCode === 13 && r({ column: C, asc: n.column === C ? !n.asc : !1, colIndex: g });
          },
          className: i(n, C),
          ...n.column === C ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        /* @__PURE__ */ React.createElement(c, { text: C, column: Q, config: t }),
        g === n.colIndex && /* @__PURE__ */ React.createElement("span", { className: "sort-icon" }, n.asc ? /* @__PURE__ */ React.createElement(Tr, null) : /* @__PURE__ */ React.createElement(Dr, null)),
        /* @__PURE__ */ React.createElement(o, { text: C, config: t, sortBy: n })
      );
    }));
  }
}, og = ({ categories: e }) => {
  let A = ["Measures", ...e];
  return /* @__PURE__ */ React.createElement("tr", null, A.map((t) => /* @__PURE__ */ React.createElement("th", { key: `col-header-${t}`, tabIndex: 0, title: t, role: "columnheader", scope: "col" }, t)));
}, cg = ({ column: e, text: A, config: t }) => {
  let r = "Not Applicable";
  return A === "__series__" && t.table.indexLabel ? `${t.table.indexLabel} ` : A === "__series__" && !t.table.indexLabel ? /* @__PURE__ */ React.createElement(hs, { as: "span" }, r) : A;
}, lg = ({ columns: e, config: A, indexTitle: t, sortBy: r, setSortBy: n }) => /* @__PURE__ */ React.createElement("tr", null, Object.keys(e).filter((a) => e[a].dataTable === !0 && e[a].name).map((a, s) => {
  var i;
  let B;
  return a !== "geo" ? B = e[a].label ? e[a].label : e[a].name : B = A.type === "map" ? t : (i = A.xAxis) == null ? void 0 : i.dataKey, A.type === "map" && (B === void 0 || B === "") && (B = "Location"), /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement(cg, { text: B, config: A, column: a }),
    r.column === a && /* @__PURE__ */ React.createElement("span", { className: "sort-icon" }, r.asc ? /* @__PURE__ */ React.createElement(Tr, null) : /* @__PURE__ */ React.createElement(Dr, null)),
    /* @__PURE__ */ React.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${B} in ${r.column === a && r.asc ? "ascending" : "descending"} order`)
  );
})), na = ({ skipId: e, skipMessage: A }) => {
  const t = vA.useId(), r = () => {
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
}, aa = ({ expanded: e, setExpanded: A, tableTitle: t, fontSize: r, viewport: n }) => {
  const a = { small: 16, medium: 18, large: 20 }, s = ["sm", "xs", "xxs"].includes(n) ? "13px" : `${a[r]}px`;
  return /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement(Hs, { display: e ? "minus" : "plus", base: !0 }),
    t
  );
}, ug = (e) => /* @__PURE__ */ vA.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ vA.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" }));
function gg(e) {
  const A = ["cdc.gov", "localhost", "facebook.com", "twitter.com", "linkedin.com", "pinterest.com", "youtube.com", "youtube-nocookie.com", "plus.google.com", "instagram.com", "flickr.com", "tumblr.com", "cdc.sharepoint.com", "vaccines.gov", "vacunas.gov"], t = new URL(e, window.location.origin).hostname;
  let r = !0;
  return A.forEach((n) => {
    t.indexOf(n) !== -1 && t.indexOf(n) === t.length - n.length && (r = !1);
  }), r;
}
const Qg = ({ markup: e, row: A, columns: t, navigationHandler: r, mapZoomHandler: n }) => t.navigate && A[t.navigate.name] ? /* @__PURE__ */ React.createElement(
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
  gg(A[t.navigate.name]) && /* @__PURE__ */ React.createElement(ug, { className: "inline-icon" })
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
) : /* @__PURE__ */ React.createElement(React.Fragment, null, e), wg = ({ rows: e, columns: A, runtimeData: t, config: r, applyLegendToRow: n, displayGeoName: a, formatLegendLocation: s, displayDataAsText: B, navigationHandler: i, setFilteredCountryCode: o, viewport: c }) => e.map(
  (u) => Object.keys(A).filter((l) => A[l].dataTable === !0 && A[l].name).map((l) => {
    let w;
    if (l === "geo") {
      const g = t[u], Q = n(g);
      let C;
      const f = r.general.type === "bubble" && r.general.allowMapZoom && r.general.geoType === "world" ? () => o(u) : void 0;
      if (r.general.geoType !== "single-state" && r.general.geoType !== "us-county" || r.general.type === "us-geocode") {
        const h = (H) => H.charAt(0).toUpperCase() + H.slice(1);
        C = a(u), C = String(C).startsWith("region") ? h(C) : C;
      } else
        C = s(u);
      w = /* @__PURE__ */ React.createElement("div", { className: "col-12" }, /* @__PURE__ */ React.createElement(ga, { viewport: c, fill: Q[0] }), /* @__PURE__ */ React.createElement(Qg, { markup: C, row: g, columns: A, navigationHandler: i, mapZoomHandler: f }));
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
    if (n.column === "__series__") return gt(l, w, n, t);
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
          i === C ? g = ne(w, C, t, A) : Q.push(ne(w, C, t, A));
        }), l[g] ? l[g].push(Q) : l[g] = [Q];
      }), l;
    } else
      return e.map((l) => {
        if (s) {
          const w = fg(A[l]), g = o.map((Q) => ne(l, Q, t, A));
          return [w, ...g];
        } else
          return o.map((w, g) => ne(l, w, t, A));
      });
  else
    return c().map((l) => {
      const w = Us(l, t);
      return (t.visualizationType !== "Pie" ? [
        /* @__PURE__ */ React.createElement(React.Fragment, null, a && a(w) && /* @__PURE__ */ React.createElement(ga, { viewport: B, fill: a(w) }), w)
      ] : []).concat(e.map((Q, C) => ne(Q, l, t, A)));
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
  let r = (s, B) => Number(s) === 0 ? !0 : Number(s) === 1 ? B.columnMax : Number(s) === 2 ? B.columnThirdQuartile : Number(s) === 3 ? B.columnMedian : Number(s) === 4 ? B.columnFirstQuartile : Number(s) === 5 ? B.columnMin : Number(s) === 6 ? B.columnTotal : Number(s) === 7 ? B.columnSd : Number(s) === 8 ? B.columnMean : Number(s) === 9 ? B.columnOutliers.length > 0 ? B.columnOutliers.toString() : "-" : Number(s) === 10 ? B.values.length > 0 ? B.values.toString() : "-" : /* @__PURE__ */ React.createElement("p", null, "-"), n = e.map((s) => s[0]), a = ["Measures", ...A.boxplot.categories];
  return n.shift(), n.map((s, B) => a.map((i, o) => {
    let c;
    if (i === "Measures") {
      let u = B > 0 ? t(s) : "";
      c = /* @__PURE__ */ React.createElement(React.Fragment, null, u);
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
  var j, q, fA, BA, lA, CA, UA;
  const { config: A, dataConfig: t, tableTitle: r, vizTitle: n, rawData: a, runtimeData: s, headerColor: B, expandDataTable: i, columns: o, viewport: c, formatLegendLocation: u, tabbingId: l, wrapColumns: w } = e, g = vA.useMemo(() => {
    const x = hg(s);
    if (A.table.pivot) {
      const { columnName: G, valueColumn: D } = A.table.pivot;
      if (G && D)
        return dg(x, G, D);
    }
    return x;
  }, [s, (j = A.table.pivot) == null ? void 0 : j.columnName, (q = A.table.pivot) == null ? void 0 : q.valueColumn]), [Q, C] = vA.useState(i), [f, h] = vA.useState({ column: A.type === "map" ? "geo" : "date", asc: !1, colIndex: null }), [H, I] = vA.useState(""), v = !(A.type === "chart" && !((fA = A.table) != null && fA.showVertical)), K = `btn__${Math.random().toString(16).substr(2, 8)}`, y = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  };
  switch (vA.useEffect(() => {
    const x = "Accessible data table.", G = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    Q === !0 && H !== x && I(x), Q === !1 && H !== G && I(G);
  }, [Q]), A.visualizationType) {
    case "Box Plot":
      if (!A.boxplot) return /* @__PURE__ */ React.createElement(St, null);
      break;
    case "Line":
      if (!g) return /* @__PURE__ */ React.createElement(St, null);
      break;
    default:
      if (!g) return /* @__PURE__ */ React.createElement(St, null);
      break;
  }
  const m = Object.keys(g).filter((x) => x != "columns"), R = v ? m.sort((x, G) => {
    let D, V;
    if (A.type === "map" && A.columns) {
      const $ = A.columns[f.column].name;
      D = g[x][$], V = g[G][$];
    }
    return (A.type === "chart" || A.type === "dashboard") && (D = g[x][f.column], V = g[G][f.column]), !D && !V && A.type === "chart" && A.xAxis && A.xAxis.type === "date-time" && (D = Qt(A.runtime.xAxis.dateParseFormat)(g[x][A.xAxis.dataKey]), V = Qt(A.runtime.xAxis.dateParseFormat)(g[G][A.xAxis.dataKey])), D && V ? gt(D, V, f, A) : 0;
  }) : m, Z = {
    maxHeight: A.table.limitHeight && `${A.table.height}px`,
    OverflowY: "scroll"
  }, z = !!Object.keys((a == null ? void 0 : a[0]) || {}).find((x) => x.match(/row[_-]?type/i)), T = vA.useMemo(() => A.type === "map" ? A.table.caption ? A.table.caption : `Data table showing data for the ${y[A.general.geoType]} figure.` : A.table.caption ? A.table.caption : `Data table showing data for the ${A.type} figure.`, [A.table.caption]), X = (BA = A == null ? void 0 : A.regions) == null ? void 0 : BA.every((x) => {
    const G = x.toType === "Fixed", D = x.fromType === "Fixed", V = !x.toType, $ = !x.fromType;
    return G && D || V && $ || G && $ || D && V;
  }), wA = vA.useMemo(
    () => {
      var x, G, D, V, $, DA, p;
      return (G = (x = A.data) == null ? void 0 : x[0]) != null && G.tableData ? (V = (D = A.data) == null ? void 0 : D[0]) == null ? void 0 : V.tableData : A.visualizationType === "Sankey" ? (DA = ($ = A.data) == null ? void 0 : $[0]) == null ? void 0 : DA.tableData : A.visualizationType === "Pie" ? [A.yAxis.dataKey] : A.visualizationType === "Box Plot" ? Object.entries(A.boxplot.tableData[0]) : (p = A.runtime) == null ? void 0 : p.seriesKeys;
    },
    [(lA = A.runtime) == null ? void 0 : lA.seriesKeys]
  );
  if (A.visualizationType !== "Box Plot") {
    const x = () => {
      var D;
      return ((D = A.general) == null ? void 0 : D.geoType) === "us-county" ? a.map((V) => ({ FullGeoName: u(V[A.columns.geo.name]), ...V })) : a;
    }, G = () => {
      var $, DA, p;
      const D = ["download-links"], V = (($ = A == null ? void 0 : A.legend) == null ? void 0 : $.position) === "bottom" || ["sm", "xs", "xxs"].includes(c);
      return (DA = A.brush) != null && DA.active && !V && D.push("brush-active"), (p = A.brush) != null && p.active && A.legend.hide && D.push("brush-active"), D;
    };
    return /* @__PURE__ */ React.createElement(_r, { component: "DataTable" }, /* @__PURE__ */ React.createElement(oe.Section, { classes: G() }, /* @__PURE__ */ React.createElement(oe.Link, { config: A, dashboardDataConfig: t }), (A.table.download || ((CA = A.general) == null ? void 0 : CA.showDownloadButton)) && /* @__PURE__ */ React.createElement(ng, { rawData: x(), fileName: `${n || "data-table"}.csv`, headerColor: B })), /* @__PURE__ */ React.createElement("section", { id: l.replace("#", ""), className: `data-table-container ${c}`, "aria-label": H }, /* @__PURE__ */ React.createElement(na, { skipId: K, skipMessage: "Skip Data Table" }), A.table.collapsible !== !1 && /* @__PURE__ */ React.createElement(aa, { expanded: Q, setExpanded: C, fontSize: A.fontSize, tableTitle: r, viewport: c }), /* @__PURE__ */ React.createElement("div", { className: "table-container", style: Z }, /* @__PURE__ */ React.createElement(
      Mt,
      {
        viewport: c,
        wrapColumns: w,
        childrenMatrix: A.type === "map" ? wg({ rows: R, wrapColumns: w, ...e, runtimeData: g, viewport: c }) : Cg({ rows: R, ...e, runtimeData: g, isVertical: v, sortBy: f, hasRowType: z, viewport: c }),
        tableName: A.type,
        caption: T,
        stickyHeader: !0,
        hasRowType: z,
        headContent: A.type === "map" ? /* @__PURE__ */ React.createElement(lg, { columns: o, ...e, sortBy: f, setSortBy: h }) : /* @__PURE__ */ React.createElement(ig, { data: g, ...e, hasRowType: z, isVertical: v, sortBy: f, setSortBy: h }),
        tableOptions: { className: `${Q ? "data-table" : "data-table cdcdataviz-sr-only"}${v ? "" : " horizontal"}`, "aria-live": "assertive", "aria-rowcount": (UA = A == null ? void 0 : A.data) != null && UA.length ? A.data.length : -1, hidden: !Q },
        fontSize: A.fontSize
      }
    ), X && A.regions && A.regions.length > 0 && A.visualizationType !== "Box Plot" && /* @__PURE__ */ React.createElement(
      Mt,
      {
        viewport: c,
        wrapColumns: w,
        childrenMatrix: Ug({ config: A }),
        tableName: A.visualizationType,
        caption: "Table of the highlighted regions in the visualization",
        headContent: /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Region Name"), /* @__PURE__ */ React.createElement("th", null, "Start Date"), /* @__PURE__ */ React.createElement("th", null, "End Date")),
        tableOptions: { className: "region-table data-table" },
        fontSize: A.fontSize
      }
    ))), /* @__PURE__ */ React.createElement("div", { id: K, className: "cdcdataviz-sr-only" }, "Skipped data table."));
  } else
    return /* @__PURE__ */ React.createElement(_r, { component: "DataTable" }, /* @__PURE__ */ React.createElement("section", { id: l.replace("#", ""), className: `data-table-container ${c}`, "aria-label": H }, /* @__PURE__ */ React.createElement(na, { skipId: K, skipMessage: "Skip Data Table" }), /* @__PURE__ */ React.createElement(aa, { expanded: Q, setExpanded: C, tableTitle: r }), /* @__PURE__ */ React.createElement("div", { className: "table-container", style: Z }, /* @__PURE__ */ React.createElement(
      Mt,
      {
        viewport: c,
        wrapColumns: w,
        childrenMatrix: Fg({ rows: wA, config: A }),
        tableName: A.visualizationType,
        caption: T,
        stickyHeader: !0,
        headContent: /* @__PURE__ */ React.createElement(og, { categories: A.boxplot.categories }),
        tableOptions: { className: `${Q ? "data-table" : "data-table cdcdataviz-sr-only"}`, "aria-live": "assertive", "aria-rowcount": 11, hidden: !Q },
        fontSize: A.fontSize
      }
    ))), /* @__PURE__ */ React.createElement("div", { id: K, className: "cdcdataviz-sr-only" }, "Skipped data table."));
};
export {
  xg as D,
  ga as L,
  oe as M,
  na as S,
  Lg as a,
  vB as b,
  tn as f,
  bg as g,
  gg as i,
  ua as t
};
