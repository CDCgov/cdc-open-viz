import { R as h, r as SA } from "./storybook-e61d95ab.es.js";
import { L as Tt, E as kr } from "./storybook-a0c99f4a.es.js";
import { P as Fa } from "./storybook-76833471.es.js";
import { u as Br, a as BB, t as ar, b as aB, c as Ke, d as ha, e as Le, f as be, g as da, h as xe } from "./storybook-bedc547d.es.js";
import { n as _r } from "./storybook-24623c03.es.js";
import { a as pa } from "./storybook-1ecf1faa.es.js";
import { T as St } from "./storybook-a7890f0d.es.js";
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
function Ea(e) {
  var A = e.dateTime, t = e.date, r = e.time, n = e.periods, B = e.days, a = e.shortDays, s = e.months, i = e.shortMonths, o = le(n), c = ue(n), l = le(B), u = ue(B), Q = le(a), g = ue(a), w = le(s), H = ue(s), U = le(i), F = ue(i), K = {
    a: AA,
    A: CA,
    b: iA,
    B: uA,
    c: null,
    d: Zr,
    e: Zr,
    f: Ja,
    g: ts,
    G: ns,
    H: _a,
    I: Pa,
    j: Xa,
    L: sB,
    m: Wa,
    M: Ya,
    p: M,
    q: _,
    Q: qr,
    s: $r,
    S: Za,
    u: za,
    U: ja,
    V: qa,
    w: $a,
    W: As,
    x: null,
    X: null,
    y: es,
    Y: rs,
    Z: Bs,
    "%": jr
  }, m = {
    a: G,
    A: X,
    b: Z,
    B: UA,
    c: null,
    d: zr,
    e: zr,
    f: os,
    g: Fs,
    G: ds,
    H: as,
    I: ss,
    j: is,
    L: oB,
    m: cs,
    M: ls,
    p: EA,
    q: Gr,
    Q: qr,
    s: $r,
    S: us,
    u: gs,
    U: Qs,
    V: ws,
    w: fs,
    W: Cs,
    x: null,
    X: null,
    y: Us,
    Y: hs,
    Z: ps,
    "%": jr
  }, y = {
    a: N,
    A: j,
    b: q,
    B: D,
    c: J,
    d: Wr,
    e: Wr,
    f: Ra,
    g: Jr,
    G: Xr,
    H: Yr,
    I: Yr,
    j: Sa,
    L: Na,
    m: Ta,
    M: Ma,
    p: I,
    q: Da,
    Q: Va,
    s: ka,
    S: Oa,
    u: ya,
    U: Ka,
    V: La,
    w: ma,
    W: ba,
    x: fA,
    X: $,
    y: Jr,
    Y: Xr,
    Z: xa,
    "%": Ga
  };
  K.x = C(t, K), K.X = C(r, K), K.c = C(A, K), m.x = C(t, m), m.X = C(r, m), m.c = C(A, m);
  function C(v, b) {
    return function(T) {
      var f = [], cA = -1, V = 0, gA = v.length, QA, _A, Vr;
      for (T instanceof Date || (T = /* @__PURE__ */ new Date(+T)); ++cA < gA; )
        v.charCodeAt(cA) === 37 && (f.push(v.slice(V, cA)), (_A = Pr[QA = v.charAt(++cA)]) != null ? QA = v.charAt(++cA) : _A = QA === "e" ? " " : "0", (Vr = b[QA]) && (QA = Vr(T, _A)), f.push(QA), V = cA + 1);
      return f.push(v.slice(V, cA)), f.join("");
    };
  }
  function L(v, b) {
    return function(T) {
      var f = ce(1900, void 0, 1), cA = E(f, v, T += "", 0), V, gA;
      if (cA != T.length)
        return null;
      if ("Q" in f)
        return new Date(f.Q);
      if ("s" in f)
        return new Date(f.s * 1e3 + ("L" in f ? f.L : 0));
      if (b && !("Z" in f) && (f.Z = 0), "p" in f && (f.H = f.H % 12 + f.p * 12), f.m === void 0 && (f.m = "q" in f ? f.q : 0), "V" in f) {
        if (f.V < 1 || f.V > 53)
          return null;
        "w" in f || (f.w = 1), "Z" in f ? (V = Ot(ce(f.y, 0, 1)), gA = V.getUTCDay(), V = gA > 4 || gA === 0 ? Br.ceil(V) : Br(V), V = BB.offset(V, (f.V - 1) * 7), f.y = V.getUTCFullYear(), f.m = V.getUTCMonth(), f.d = V.getUTCDate() + (f.w + 6) % 7) : (V = Mt(ce(f.y, 0, 1)), gA = V.getDay(), V = gA > 4 || gA === 0 ? ar.ceil(V) : ar(V), V = aB.offset(V, (f.V - 1) * 7), f.y = V.getFullYear(), f.m = V.getMonth(), f.d = V.getDate() + (f.w + 6) % 7);
      } else
        ("W" in f || "U" in f) && ("w" in f || (f.w = "u" in f ? f.u % 7 : "W" in f ? 1 : 0), gA = "Z" in f ? Ot(ce(f.y, 0, 1)).getUTCDay() : Mt(ce(f.y, 0, 1)).getDay(), f.m = 0, f.d = "W" in f ? (f.w + 6) % 7 + f.W * 7 - (gA + 5) % 7 : f.w + f.U * 7 - (gA + 6) % 7);
      return "Z" in f ? (f.H += f.Z / 100 | 0, f.M += f.Z % 100, Ot(f)) : Mt(f);
    };
  }
  function E(v, b, T, f) {
    for (var cA = 0, V = b.length, gA = T.length, QA, _A; cA < V; ) {
      if (f >= gA)
        return -1;
      if (QA = b.charCodeAt(cA++), QA === 37) {
        if (QA = b.charAt(cA++), _A = y[QA in Pr ? b.charAt(cA++) : QA], !_A || (f = _A(v, T, f)) < 0)
          return -1;
      } else if (QA != T.charCodeAt(f++))
        return -1;
    }
    return f;
  }
  function I(v, b, T) {
    var f = o.exec(b.slice(T));
    return f ? (v.p = c.get(f[0].toLowerCase()), T + f[0].length) : -1;
  }
  function N(v, b, T) {
    var f = Q.exec(b.slice(T));
    return f ? (v.w = g.get(f[0].toLowerCase()), T + f[0].length) : -1;
  }
  function j(v, b, T) {
    var f = l.exec(b.slice(T));
    return f ? (v.w = u.get(f[0].toLowerCase()), T + f[0].length) : -1;
  }
  function q(v, b, T) {
    var f = U.exec(b.slice(T));
    return f ? (v.m = F.get(f[0].toLowerCase()), T + f[0].length) : -1;
  }
  function D(v, b, T) {
    var f = w.exec(b.slice(T));
    return f ? (v.m = H.get(f[0].toLowerCase()), T + f[0].length) : -1;
  }
  function J(v, b, T) {
    return E(v, A, b, T);
  }
  function fA(v, b, T) {
    return E(v, t, b, T);
  }
  function $(v, b, T) {
    return E(v, r, b, T);
  }
  function AA(v) {
    return a[v.getDay()];
  }
  function CA(v) {
    return B[v.getDay()];
  }
  function iA(v) {
    return i[v.getMonth()];
  }
  function uA(v) {
    return s[v.getMonth()];
  }
  function M(v) {
    return n[+(v.getHours() >= 12)];
  }
  function _(v) {
    return 1 + ~~(v.getMonth() / 3);
  }
  function G(v) {
    return a[v.getUTCDay()];
  }
  function X(v) {
    return B[v.getUTCDay()];
  }
  function Z(v) {
    return i[v.getUTCMonth()];
  }
  function UA(v) {
    return s[v.getUTCMonth()];
  }
  function EA(v) {
    return n[+(v.getUTCHours() >= 12)];
  }
  function Gr(v) {
    return 1 + ~~(v.getUTCMonth() / 3);
  }
  return {
    format: function(v) {
      var b = C(v += "", K);
      return b.toString = function() {
        return v;
      }, b;
    },
    parse: function(v) {
      var b = L(v += "", !1);
      return b.toString = function() {
        return v;
      }, b;
    },
    utcFormat: function(v) {
      var b = C(v += "", m);
      return b.toString = function() {
        return v;
      }, b;
    },
    utcParse: function(v) {
      var b = L(v += "", !0);
      return b.toString = function() {
        return v;
      }, b;
    }
  };
}
var Pr = { "-": "", _: " ", 0: "0" }, rA = /^\s*\d+/, Ha = /^%/, va = /[\\^$*+?|[\]().{}]/g;
function S(e, A, t) {
  var r = e < 0 ? "-" : "", n = (r ? -e : e) + "", B = n.length;
  return r + (B < t ? new Array(t - B + 1).join(A) + n : n);
}
function Ia(e) {
  return e.replace(va, "\\$&");
}
function le(e) {
  return new RegExp("^(?:" + e.map(Ia).join("|") + ")", "i");
}
function ue(e) {
  return new Map(e.map((A, t) => [A.toLowerCase(), t]));
}
function ma(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.w = +r[0], t + r[0].length) : -1;
}
function ya(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.u = +r[0], t + r[0].length) : -1;
}
function Ka(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.U = +r[0], t + r[0].length) : -1;
}
function La(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.V = +r[0], t + r[0].length) : -1;
}
function ba(e, A, t) {
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
function xa(e, A, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(A.slice(t, t + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function Da(e, A, t) {
  var r = rA.exec(A.slice(t, t + 1));
  return r ? (e.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function Ta(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.m = r[0] - 1, t + r[0].length) : -1;
}
function Wr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.d = +r[0], t + r[0].length) : -1;
}
function Sa(e, A, t) {
  var r = rA.exec(A.slice(t, t + 3));
  return r ? (e.m = 0, e.d = +r[0], t + r[0].length) : -1;
}
function Yr(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.H = +r[0], t + r[0].length) : -1;
}
function Ma(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.M = +r[0], t + r[0].length) : -1;
}
function Oa(e, A, t) {
  var r = rA.exec(A.slice(t, t + 2));
  return r ? (e.S = +r[0], t + r[0].length) : -1;
}
function Na(e, A, t) {
  var r = rA.exec(A.slice(t, t + 3));
  return r ? (e.L = +r[0], t + r[0].length) : -1;
}
function Ra(e, A, t) {
  var r = rA.exec(A.slice(t, t + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function Ga(e, A, t) {
  var r = Ha.exec(A.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function Va(e, A, t) {
  var r = rA.exec(A.slice(t));
  return r ? (e.Q = +r[0], t + r[0].length) : -1;
}
function ka(e, A, t) {
  var r = rA.exec(A.slice(t));
  return r ? (e.s = +r[0], t + r[0].length) : -1;
}
function Zr(e, A) {
  return S(e.getDate(), A, 2);
}
function _a(e, A) {
  return S(e.getHours(), A, 2);
}
function Pa(e, A) {
  return S(e.getHours() % 12 || 12, A, 2);
}
function Xa(e, A) {
  return S(1 + aB.count(Ke(e), e), A, 3);
}
function sB(e, A) {
  return S(e.getMilliseconds(), A, 3);
}
function Ja(e, A) {
  return sB(e, A) + "000";
}
function Wa(e, A) {
  return S(e.getMonth() + 1, A, 2);
}
function Ya(e, A) {
  return S(e.getMinutes(), A, 2);
}
function Za(e, A) {
  return S(e.getSeconds(), A, 2);
}
function za(e) {
  var A = e.getDay();
  return A === 0 ? 7 : A;
}
function ja(e, A) {
  return S(ha.count(Ke(e) - 1, e), A, 2);
}
function iB(e) {
  var A = e.getDay();
  return A >= 4 || A === 0 ? Le(e) : Le.ceil(e);
}
function qa(e, A) {
  return e = iB(e), S(Le.count(Ke(e), e) + (Ke(e).getDay() === 4), A, 2);
}
function $a(e) {
  return e.getDay();
}
function As(e, A) {
  return S(ar.count(Ke(e) - 1, e), A, 2);
}
function es(e, A) {
  return S(e.getFullYear() % 100, A, 2);
}
function ts(e, A) {
  return e = iB(e), S(e.getFullYear() % 100, A, 2);
}
function rs(e, A) {
  return S(e.getFullYear() % 1e4, A, 4);
}
function ns(e, A) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? Le(e) : Le.ceil(e), S(e.getFullYear() % 1e4, A, 4);
}
function Bs(e) {
  var A = e.getTimezoneOffset();
  return (A > 0 ? "-" : (A *= -1, "+")) + S(A / 60 | 0, "0", 2) + S(A % 60, "0", 2);
}
function zr(e, A) {
  return S(e.getUTCDate(), A, 2);
}
function as(e, A) {
  return S(e.getUTCHours(), A, 2);
}
function ss(e, A) {
  return S(e.getUTCHours() % 12 || 12, A, 2);
}
function is(e, A) {
  return S(1 + BB.count(be(e), e), A, 3);
}
function oB(e, A) {
  return S(e.getUTCMilliseconds(), A, 3);
}
function os(e, A) {
  return oB(e, A) + "000";
}
function cs(e, A) {
  return S(e.getUTCMonth() + 1, A, 2);
}
function ls(e, A) {
  return S(e.getUTCMinutes(), A, 2);
}
function us(e, A) {
  return S(e.getUTCSeconds(), A, 2);
}
function gs(e) {
  var A = e.getUTCDay();
  return A === 0 ? 7 : A;
}
function Qs(e, A) {
  return S(da.count(be(e) - 1, e), A, 2);
}
function cB(e) {
  var A = e.getUTCDay();
  return A >= 4 || A === 0 ? xe(e) : xe.ceil(e);
}
function ws(e, A) {
  return e = cB(e), S(xe.count(be(e), e) + (be(e).getUTCDay() === 4), A, 2);
}
function fs(e) {
  return e.getUTCDay();
}
function Cs(e, A) {
  return S(Br.count(be(e) - 1, e), A, 2);
}
function Us(e, A) {
  return S(e.getUTCFullYear() % 100, A, 2);
}
function Fs(e, A) {
  return e = cB(e), S(e.getUTCFullYear() % 100, A, 2);
}
function hs(e, A) {
  return S(e.getUTCFullYear() % 1e4, A, 4);
}
function ds(e, A) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? xe(e) : xe.ceil(e), S(e.getUTCFullYear() % 1e4, A, 4);
}
function ps() {
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
var zA, lB, gt;
Es({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Es(e) {
  return zA = Ea(e), lB = zA.format, gt = zA.parse, zA.utcFormat, zA.utcParse, zA;
}
const An = (e) => {
  let A = "", t = Math.abs(e);
  return t >= 1e9 ? (A = "B", e = e / 1e9) : t >= 1e6 ? (A = "M", e = e / 1e6) : t >= 1e3 && (A = "K", e = e / 1e3), e + A;
}, en = (e, A, t = !1, r = null, n = null) => {
  if (r || console.error("no config found in formatNumber"), isNaN(e) || !e)
    return e;
  const B = e < 0;
  B && (e = Math.abs(e));
  let {
    dataFormat: { commas: a, abbreviated: s, roundTo: i, prefix: o, suffix: c, rightRoundTo: l, bottomRoundTo: u, rightPrefix: Q, rightSuffix: g, bottomPrefix: w, bottomSuffix: H, bottomAbbreviated: U }
  } = r;
  const { addColCommas: F, addColRoundTo: K, addColPrefix: m, addColSuffix: y } = n;
  String(e).indexOf(",") !== -1 && (e = e.replaceAll(",", ""));
  let C = e, L;
  if (A === "left") {
    let I;
    K !== void 0 ? I = K ? Number(K) : 0 : I = i ? Number(i) : 0, I < 0 && (I = 0);
    let N;
    F !== void 0 ? N = !!F : N = !!r.dataFormat.commas, L = {
      useGrouping: N,
      minimumFractionDigits: I,
      maximumFractionDigits: I
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
  }), e = _r(e), isNaN(e))
    return r.runtime.editorErrorMessage = `Unable to parse number from data ${C}. Try reviewing your data and selections in the Data Series section.`, C;
  if (!r.dataFormat)
    return e;
  if (r.dataCutoff) {
    let I = _r(r.dataCutoff);
    e < I && (e = I);
  }
  A === "left" && a && s && t || A === "bottom" && a && s && t ? e = e : e = e.toLocaleString("en-US", L);
  let E = "";
  return s && A === "left" && t && (e = An(parseFloat(e))), U && A === "bottom" && t && (e = An(parseFloat(e))), m !== void 0 && A === "left" ? E = m + E : o && A === "left" && (E = o + E), Q && A === "right" && (E += Q), w && A === "bottom" && (E += w), E += e, y !== void 0 && A === "left" ? E += y : c && A === "left" && (E += c), g && A === "right" && (E += g), H && A === "bottom" && (E += H), B && (E = "-" + E), String(E);
}, Hg = (e = "medium") => ({ small: 16, medium: 18, large: 20 })[e];
function uB({ fill: e, borderColor: A, display: t = "inline-block" }) {
  const r = {
    marginRight: "5px",
    borderRadius: "300px",
    verticalAlign: "middle",
    display: t,
    height: "1em",
    width: "1em",
    border: A ? `${A}  1px solid` : "rgba(0,0,0,.3) 1px solid",
    backgroundColor: e
  };
  return /* @__PURE__ */ h.createElement("span", { className: "legend-item", style: r });
}
function Hs(e = void 0, A) {
  return lB(e)(A);
}
function sr(e = void 0, A) {
  return gt(e)(A) || /* @__PURE__ */ new Date();
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
      for (var B in t)
        Object.prototype.hasOwnProperty.call(t, B) && (A[B] = t[B]);
    }
    return A;
  }, or.apply(this, arguments);
};
function oA(e, A, t, r) {
  function n(B) {
    return B instanceof t ? B : new t(function(a) {
      a(B);
    });
  }
  return new (t || (t = Promise))(function(B, a) {
    function s(c) {
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
      c.done ? B(c.value) : n(c.value).then(s, i);
    }
    o((r = r.apply(e, A || [])).next());
  });
}
function aA(e, A) {
  var t = { label: 0, sent: function() {
    if (B[0] & 1)
      throw B[1];
    return B[1];
  }, trys: [], ops: [] }, r, n, B, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(o) {
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
function Ne(e, A, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = A.length, B; r < n; r++)
      (B || !(r in A)) && (B || (B = Array.prototype.slice.call(A, 0, r)), B[r] = A[r]);
  return e.concat(B || A);
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
), Ht = function(e, A) {
  return xA.fromClientRect(e, A.getBoundingClientRect());
}, vs = function(e) {
  var A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new xA(0, 0, r, n);
}, vt = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var B = e.charCodeAt(t++);
      (B & 64512) === 56320 ? A.push(((n & 1023) << 10) + (B & 1023) + 65536) : (A.push(n), t--);
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
  for (var r = [], n = -1, B = ""; ++n < t; ) {
    var a = e[n];
    a <= 65535 ? r.push(a) : (a -= 65536, r.push((a >> 10) + 55296, a % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (B += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return B;
}, tn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Is = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Re = 0; Re < tn.length; Re++)
  Is[tn.charCodeAt(Re)] = Re;
var rn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ce = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ge = 0; Ge < rn.length; Ge++)
  Ce[rn.charCodeAt(Ge)] = Ge;
var ms = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, B, a, s, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    B = Ce[e.charCodeAt(r)], a = Ce[e.charCodeAt(r + 1)], s = Ce[e.charCodeAt(r + 2)], i = Ce[e.charCodeAt(r + 3)], c[n++] = B << 2 | a >> 4, c[n++] = (a & 15) << 4 | s >> 2, c[n++] = (s & 3) << 6 | i & 63;
  return o;
}, ys = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, Ks = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, YA = 5, Dr = 6 + 5, Nt = 2, Ls = Dr - YA, gB = 65536 >> YA, bs = 1 << YA, Rt = bs - 1, xs = 1024 >> YA, Ds = gB + xs, Ts = Ds, Ss = 32, Ms = Ts + Ss, Os = 65536 >> Dr, Ns = 1 << Ls, Rs = Ns - 1, nn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Gs = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Vs = function(e, A) {
  var t = ms(e), r = Array.isArray(t) ? Ks(t) : new Uint32Array(t), n = Array.isArray(t) ? ys(t) : new Uint16Array(t), B = 24, a = nn(n, B / 2, r[4] / 2), s = r[5] === 2 ? nn(n, (B + r[4]) / 2) : Gs(r, Math.ceil((B + r[4]) / 4));
  return new ks(r[0], r[1], r[2], r[3], a, s);
}, ks = (
  /** @class */
  function() {
    function e(A, t, r, n, B, a) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = B, this.data = a;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> YA], t = (t << Nt) + (A & Rt), this.data[t];
        if (A <= 65535)
          return t = this.index[gB + (A - 55296 >> YA)], t = (t << Nt) + (A & Rt), this.data[t];
        if (A < this.highStart)
          return t = Ms - Os + (A >> Dr), t = this.index[t], t += A >> YA & Rs, t = this.index[t], t = (t << Nt) + (A & Rt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Bn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _s = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ve = 0; Ve < Bn.length; Ve++)
  _s[Bn.charCodeAt(Ve)] = Ve;
var Ps = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", an = 50, Xs = 1, QB = 2, wB = 3, Js = 4, Ws = 5, sn = 7, fB = 8, on = 9, OA = 10, cr = 11, cn = 12, lr = 13, Ys = 14, Ue = 15, ur = 16, ke = 17, ge = 18, Zs = 19, ln = 20, gr = 21, Qe = 22, Gt = 23, jA = 24, wA = 25, Fe = 26, he = 27, qA = 28, zs = 29, JA = 30, js = 31, _e = 32, Pe = 33, Qr = 34, wr = 35, fr = 36, De = 37, Cr = 38, st = 39, it = 40, Vt = 41, CB = 42, qs = 43, $s = [9001, 65288], UB = "!", x = "×", Xe = "÷", Ur = Vs(Ps), KA = [JA, fr], Fr = [Xs, QB, wB, Ws], FB = [OA, fB], un = [he, Fe], Ai = Fr.concat(FB), gn = [Cr, st, it, Qr, wr], ei = [Ue, lr], ti = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], r = [], n = [];
  return e.forEach(function(B, a) {
    var s = Ur.get(B);
    if (s > an ? (n.push(!0), s -= an) : n.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(B) !== -1)
      return r.push(a), t.push(ur);
    if (s === Js || s === cr) {
      if (a === 0)
        return r.push(a), t.push(JA);
      var i = t[a - 1];
      return Ai.indexOf(i) === -1 ? (r.push(r[a - 1]), t.push(i)) : (r.push(a), t.push(JA));
    }
    if (r.push(a), s === js)
      return t.push(A === "strict" ? gr : De);
    if (s === CB || s === zs)
      return t.push(JA);
    if (s === qs)
      return B >= 131072 && B <= 196605 || B >= 196608 && B <= 262141 ? t.push(De) : t.push(JA);
    t.push(s);
  }), [r, t, n];
}, kt = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var B = t; B <= r.length; ) {
      B++;
      var a = r[B];
      if (a === A)
        return !0;
      if (a !== OA)
        break;
    }
  if (n === OA)
    for (var B = t; B > 0; ) {
      B--;
      var s = r[B];
      if (Array.isArray(e) ? e.indexOf(s) !== -1 : e === s)
        for (var i = t; i <= r.length; ) {
          i++;
          var a = r[i];
          if (a === A)
            return !0;
          if (a !== OA)
            break;
        }
      if (s !== OA)
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
}, ri = function(e, A, t, r, n) {
  if (t[r] === 0)
    return x;
  var B = r - 1;
  if (Array.isArray(n) && n[B] === !0)
    return x;
  var a = B - 1, s = B + 1, i = A[B], o = a >= 0 ? A[a] : 0, c = A[s];
  if (i === QB && c === wB)
    return x;
  if (Fr.indexOf(i) !== -1)
    return UB;
  if (Fr.indexOf(c) !== -1 || FB.indexOf(c) !== -1)
    return x;
  if (Qn(B, A) === fB)
    return Xe;
  if (Ur.get(e[B]) === cr || (i === _e || i === Pe) && Ur.get(e[s]) === cr || i === sn || c === sn || i === on || [OA, lr, Ue].indexOf(i) === -1 && c === on || [ke, ge, Zs, jA, qA].indexOf(c) !== -1 || Qn(B, A) === Qe || kt(Gt, Qe, B, A) || kt([ke, ge], gr, B, A) || kt(cn, cn, B, A))
    return x;
  if (i === OA)
    return Xe;
  if (i === Gt || c === Gt)
    return x;
  if (c === ur || i === ur)
    return Xe;
  if ([lr, Ue, gr].indexOf(c) !== -1 || i === Ys || o === fr && ei.indexOf(i) !== -1 || i === qA && c === fr || c === ln || KA.indexOf(c) !== -1 && i === wA || KA.indexOf(i) !== -1 && c === wA || i === he && [De, _e, Pe].indexOf(c) !== -1 || [De, _e, Pe].indexOf(i) !== -1 && c === Fe || KA.indexOf(i) !== -1 && un.indexOf(c) !== -1 || un.indexOf(i) !== -1 && KA.indexOf(c) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [he, Fe].indexOf(i) !== -1 && (c === wA || [Qe, Ue].indexOf(c) !== -1 && A[s + 1] === wA) || // ( OP | HY ) × NU
  [Qe, Ue].indexOf(i) !== -1 && c === wA || // NU ×	(NU | SY | IS)
  i === wA && [wA, qA, jA].indexOf(c) !== -1)
    return x;
  if ([wA, qA, jA, ke, ge].indexOf(c) !== -1)
    for (var l = B; l >= 0; ) {
      var u = A[l];
      if (u === wA)
        return x;
      if ([qA, jA].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if ([he, Fe].indexOf(c) !== -1)
    for (var l = [ke, ge].indexOf(i) !== -1 ? a : B; l >= 0; ) {
      var u = A[l];
      if (u === wA)
        return x;
      if ([qA, jA].indexOf(u) !== -1)
        l--;
      else
        break;
    }
  if (Cr === i && [Cr, st, Qr, wr].indexOf(c) !== -1 || [st, Qr].indexOf(i) !== -1 && [st, it].indexOf(c) !== -1 || [it, wr].indexOf(i) !== -1 && c === it || gn.indexOf(i) !== -1 && [ln, Fe].indexOf(c) !== -1 || gn.indexOf(c) !== -1 && i === he || KA.indexOf(i) !== -1 && KA.indexOf(c) !== -1 || i === jA && KA.indexOf(c) !== -1 || KA.concat(wA).indexOf(i) !== -1 && c === Qe && $s.indexOf(e[s]) === -1 || KA.concat(wA).indexOf(c) !== -1 && i === ge)
    return x;
  if (i === Vt && c === Vt) {
    for (var Q = t[B], g = 1; Q > 0 && (Q--, A[Q] === Vt); )
      g++;
    if (g % 2 !== 0)
      return x;
  }
  return i === _e && c === Pe ? x : Xe;
}, ni = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = ti(e, A.lineBreak), r = t[0], n = t[1], B = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function(s) {
    return [wA, JA, CB].indexOf(s) !== -1 ? De : s;
  }));
  var a = A.wordBreak === "keep-all" ? B.map(function(s, i) {
    return s && e[i] >= 19968 && e[i] <= 40959;
  }) : void 0;
  return [r, n, a];
}, Bi = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.codePoints = A, this.required = t === UB, this.start = r, this.end = n;
    }
    return e.prototype.slice = function() {
      return Y.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), ai = function(e, A) {
  var t = vt(e), r = ni(t, A), n = r[0], B = r[1], a = r[2], s = t.length, i = 0, o = 0;
  return {
    next: function() {
      if (o >= s)
        return { done: !0, value: null };
      for (var c = x; o < s && (c = ri(t, B, n, ++o, a)) === x; )
        ;
      if (c !== x || o === s) {
        var l = new Bi(t, c, i, o);
        return i = o, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, si = 1, ii = 2, Me = 4, wn = 8, Qt = 10, fn = 47, He = 92, oi = 9, ci = 32, Je = 34, we = 61, li = 35, ui = 36, gi = 37, We = 39, Ye = 40, fe = 41, Qi = 95, lA = 45, wi = 33, fi = 60, Ci = 62, Ui = 64, Fi = 91, hi = 93, di = 61, pi = 123, Ze = 63, Ei = 125, Cn = 124, Hi = 126, vi = 128, Un = 65533, _t = 42, WA = 43, Ii = 44, mi = 58, yi = 59, Te = 46, Ki = 0, Li = 8, bi = 11, xi = 14, Di = 31, Ti = 127, IA = -1, hB = 48, dB = 97, pB = 101, Si = 102, Mi = 117, Oi = 122, EB = 65, HB = 69, vB = 70, Ni = 85, Ri = 90, sA = function(e) {
  return e >= hB && e <= 57;
}, Gi = function(e) {
  return e >= 55296 && e <= 57343;
}, $A = function(e) {
  return sA(e) || e >= EB && e <= vB || e >= dB && e <= Si;
}, Vi = function(e) {
  return e >= dB && e <= Oi;
}, ki = function(e) {
  return e >= EB && e <= Ri;
}, _i = function(e) {
  return Vi(e) || ki(e);
}, Pi = function(e) {
  return e >= vi;
}, ze = function(e) {
  return e === Qt || e === oi || e === ci;
}, wt = function(e) {
  return _i(e) || Pi(e) || e === Qi;
}, Fn = function(e) {
  return wt(e) || sA(e) || e === lA;
}, Xi = function(e) {
  return e >= Ki && e <= Li || e === bi || e >= xi && e <= Di || e === Ti;
}, MA = function(e, A) {
  return e !== He ? !1 : A !== Qt;
}, je = function(e, A, t) {
  return e === lA ? wt(A) || MA(A, t) : wt(e) ? !0 : !!(e === He && MA(e, A));
}, Pt = function(e, A, t) {
  return e === WA || e === lA ? sA(A) ? !0 : A === Te && sA(t) : sA(e === Te ? A : e);
}, Ji = function(e) {
  var A = 0, t = 1;
  (e[A] === WA || e[A] === lA) && (e[A] === lA && (t = -1), A++);
  for (var r = []; sA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(Y.apply(void 0, r), 10) : 0;
  e[A] === Te && A++;
  for (var B = []; sA(e[A]); )
    B.push(e[A++]);
  var a = B.length, s = a ? parseInt(Y.apply(void 0, B), 10) : 0;
  (e[A] === HB || e[A] === pB) && A++;
  var i = 1;
  (e[A] === WA || e[A] === lA) && (e[A] === lA && (i = -1), A++);
  for (var o = []; sA(e[A]); )
    o.push(e[A++]);
  var c = o.length ? parseInt(Y.apply(void 0, o), 10) : 0;
  return t * (n + s * Math.pow(10, -a)) * Math.pow(10, i * c);
}, Wi = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, Yi = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, Zi = {
  type: 4
  /* COMMA_TOKEN */
}, zi = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, ji = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, qi = {
  type: 21
  /* COLUMN_TOKEN */
}, $i = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, Ao = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, eo = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, to = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, ro = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, qe = {
  type: 23
  /* BAD_URL_TOKEN */
}, no = {
  type: 1
  /* BAD_STRING_TOKEN */
}, Bo = {
  type: 25
  /* CDO_TOKEN */
}, ao = {
  type: 24
  /* CDC_TOKEN */
}, so = {
  type: 26
  /* COLON_TOKEN */
}, io = {
  type: 27
  /* SEMICOLON_TOKEN */
}, oo = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, co = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, lo = {
  type: 31
  /* WHITESPACE_TOKEN */
}, hr = {
  type: 32
  /* EOF_TOKEN */
}, IB = (
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
        case li:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (Fn(t) || MA(r, n)) {
            var B = je(t, r, n) ? ii : si, a = this.consumeName();
            return { type: 5, value: a, flags: B };
          }
          break;
        case ui:
          if (this.peekCodePoint(0) === we)
            return this.consumeCodePoint(), zi;
          break;
        case We:
          return this.consumeStringToken(We);
        case Ye:
          return Wi;
        case fe:
          return Yi;
        case _t:
          if (this.peekCodePoint(0) === we)
            return this.consumeCodePoint(), ro;
          break;
        case WA:
          if (Pt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case Ii:
          return Zi;
        case lA:
          var s = A, i = this.peekCodePoint(0), o = this.peekCodePoint(1);
          if (Pt(s, i, o))
            return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (je(s, i, o))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (i === lA && o === Ci)
            return this.consumeCodePoint(), this.consumeCodePoint(), ao;
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
              if (c === IA)
                return this.consumeToken();
            }
          break;
        case mi:
          return so;
        case yi:
          return io;
        case fi:
          if (this.peekCodePoint(0) === wi && this.peekCodePoint(1) === lA && this.peekCodePoint(2) === lA)
            return this.consumeCodePoint(), this.consumeCodePoint(), Bo;
          break;
        case Ui:
          var l = this.peekCodePoint(0), u = this.peekCodePoint(1), Q = this.peekCodePoint(2);
          if (je(l, u, Q)) {
            var a = this.consumeName();
            return { type: 7, value: a };
          }
          break;
        case Fi:
          return oo;
        case He:
          if (MA(A, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case hi:
          return co;
        case di:
          if (this.peekCodePoint(0) === we)
            return this.consumeCodePoint(), ji;
          break;
        case pi:
          return eo;
        case Ei:
          return to;
        case Mi:
        case Ni:
          var g = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return g === WA && ($A(w) || w === Ze) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case Cn:
          if (this.peekCodePoint(0) === we)
            return this.consumeCodePoint(), $i;
          if (this.peekCodePoint(0) === Cn)
            return this.consumeCodePoint(), qi;
          break;
        case Hi:
          if (this.peekCodePoint(0) === we)
            return this.consumeCodePoint(), Ao;
          break;
        case IA:
          return hr;
      }
      return ze(A) ? (this.consumeWhiteSpace(), lo) : sA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : wt(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: Y(A) };
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
      for (var r = !1; t === Ze && A.length < 6; )
        A.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(Y.apply(void 0, A.map(function(i) {
          return i === Ze ? hB : i;
        })), 16), B = parseInt(Y.apply(void 0, A.map(function(i) {
          return i === Ze ? vB : i;
        })), 16);
        return { type: 30, start: n, end: B };
      }
      var a = parseInt(Y.apply(void 0, A), 16);
      if (this.peekCodePoint(0) === lA && $A(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var s = []; $A(t) && s.length < 6; )
          s.push(t), t = this.consumeCodePoint();
        var B = parseInt(Y.apply(void 0, s), 16);
        return { type: 30, start: a, end: B };
      } else
        return { type: 30, start: a, end: a };
    }, e.prototype.consumeIdentLikeToken = function() {
      var A = this.consumeName();
      return A.toLowerCase() === "url" && this.peekCodePoint(0) === Ye ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Ye ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
    }, e.prototype.consumeUrlToken = function() {
      var A = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === IA)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === We || t === Je) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === IA || this.peekCodePoint(0) === fe) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), qe);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === IA || n === fe)
          return { type: 22, value: Y.apply(void 0, A) };
        if (ze(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === IA || this.peekCodePoint(0) === fe ? (this.consumeCodePoint(), { type: 22, value: Y.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), qe);
        if (n === Je || n === We || n === Ye || Xi(n))
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
        if (A === fe || A === IA)
          return;
        MA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
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
        if (n === IA || n === void 0 || n === A)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === Qt)
          return this._value.splice(0, r), no;
        if (n === He) {
          var B = this._value[r + 1];
          B !== IA && B !== void 0 && (B === Qt ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : MA(n, B) && (t += this.consumeStringSlice(r), t += Y(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, e.prototype.consumeNumber = function() {
      var A = [], t = Me, r = this.peekCodePoint(0);
      for ((r === WA || r === lA) && A.push(this.consumeCodePoint()); sA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Te && sA(n))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = wn; sA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var B = this.peekCodePoint(2);
      if ((r === HB || r === pB) && ((n === WA || n === lA) && sA(B) || sA(n)))
        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = wn; sA(this.peekCodePoint(0)); )
          A.push(this.consumeCodePoint());
      return [Ji(A), t];
    }, e.prototype.consumeNumericToken = function() {
      var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), B = this.peekCodePoint(1), a = this.peekCodePoint(2);
      if (je(n, B, a)) {
        var s = this.consumeName();
        return { type: 15, number: t, flags: r, unit: s };
      }
      return n === gi ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, e.prototype.consumeEscapedCodePoint = function() {
      var A = this.consumeCodePoint();
      if ($A(A)) {
        for (var t = Y(A); $A(this.peekCodePoint(0)) && t.length < 6; )
          t += Y(this.consumeCodePoint());
        ze(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Gi(r) || r > 1114111 ? Un : r;
      }
      return A === IA ? Un : A;
    }, e.prototype.consumeName = function() {
      for (var A = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Fn(t))
          A += Y(t);
        else if (MA(t, this.peekCodePoint(0)))
          A += Y(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), A;
      }
    }, e;
  }()
), mB = (
  /** @class */
  function() {
    function e(A) {
      this._tokens = A;
    }
    return e.create = function(A) {
      var t = new IB();
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
        if (r.type === 32 || go(r, A))
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
}, R = function(e) {
  return e.type === 20;
}, uo = function(e) {
  return e.type === 0;
}, dr = function(e, A) {
  return R(e) && e.value === A;
}, yB = function(e) {
  return e.type !== 31;
}, se = function(e) {
  return e.type !== 31 && e.type !== 4;
}, mA = function(e) {
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
}, go = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3;
}, kA = function(e) {
  return e.type === 17 || e.type === 15;
}, z = function(e) {
  return e.type === 16 || kA(e);
}, KB = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, BA = {
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
  return [k(r, A), k(typeof n < "u" ? n : r, t)];
}, k = function(e, A) {
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
}, LB = "deg", bB = "grad", xB = "rad", DB = "turn", It = {
  name: "angle",
  parse: function(e, A) {
    if (A.type === 15)
      switch (A.unit) {
        case LB:
          return Math.PI * A.number / 180;
        case bB:
          return Math.PI / 200 * A.number;
        case xB:
          return A.number;
        case DB:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, TB = function(e) {
  return e.type === 15 && (e.unit === LB || e.unit === bB || e.unit === xB || e.unit === DB);
}, SB = function(e) {
  var A = e.filter(R).map(function(t) {
    return t.value;
  }).join(" ");
  switch (A) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [BA, BA];
    case "to top":
    case "bottom":
      return dA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [BA, NA];
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
      return [NA, BA];
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
      var t = Qo[A.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
      return t(e, A.values);
    }
    if (A.type === 5) {
      if (A.value.length === 3) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), B = A.value.substring(2, 3);
        return RA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(B + B, 16), 1);
      }
      if (A.value.length === 4) {
        var r = A.value.substring(0, 1), n = A.value.substring(1, 2), B = A.value.substring(2, 3), a = A.value.substring(3, 4);
        return RA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(B + B, 16), parseInt(a + a, 16) / 255);
      }
      if (A.value.length === 6) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), B = A.value.substring(4, 6);
        return RA(parseInt(r, 16), parseInt(n, 16), parseInt(B, 16), 1);
      }
      if (A.value.length === 8) {
        var r = A.value.substring(0, 2), n = A.value.substring(2, 4), B = A.value.substring(4, 6), a = A.value.substring(6, 8);
        return RA(parseInt(r, 16), parseInt(n, 16), parseInt(B, 16), parseInt(a, 16) / 255);
      }
    }
    if (A.type === 20) {
      var s = bA[A.value.toUpperCase()];
      if (typeof s < "u")
        return s;
    }
    return bA.TRANSPARENT;
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
  var t = A.filter(se);
  if (t.length === 3) {
    var r = t.map(hn), n = r[0], B = r[1], a = r[2];
    return RA(n, B, a, 1);
  }
  if (t.length === 4) {
    var s = t.map(hn), n = s[0], B = s[1], a = s[2], i = s[3];
    return RA(n, B, a, i);
  }
  return 0;
};
function Xt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e;
}
var pn = function(e, A) {
  var t = A.filter(se), r = t[0], n = t[1], B = t[2], a = t[3], s = (r.type === 17 ? dA(r.number) : It.parse(e, r)) / (Math.PI * 2), i = z(n) ? n.number / 100 : 0, o = z(B) ? B.number / 100 : 0, c = typeof a < "u" && z(a) ? k(a, 1) : 1;
  if (i === 0)
    return RA(o * 255, o * 255, o * 255, 1);
  var l = o <= 0.5 ? o * (i + 1) : o + i - o * i, u = o * 2 - l, Q = Xt(u, l, s + 1 / 3), g = Xt(u, l, s), w = Xt(u, l, s - 1 / 3);
  return RA(Q * 255, g * 255, w * 255, c);
}, Qo = {
  hsl: pn,
  hsla: pn,
  rgb: dn,
  rgba: dn
}, ve = function(e, A) {
  return GA.parse(e, mB.create(A).parseComponentValue());
}, bA = {
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
}, wo = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (R(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, fo = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, mt = function(e, A) {
  var t = GA.parse(e, A[0]), r = A[1];
  return r && z(r) ? { color: t, stop: r } : { color: t, stop: null };
}, En = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = BA), r.stop === null && (r.stop = NA);
  for (var n = [], B = 0, a = 0; a < e.length; a++) {
    var s = e[a].stop;
    if (s !== null) {
      var i = k(s, A);
      i > B ? n.push(i) : n.push(B), B = i;
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
  return e.map(function(w, H) {
    var U = w.color;
    return { color: U, stop: Math.max(Math.min(1, n[H] / A), 0) };
  });
}, Co = function(e, A, t) {
  var r = A / 2, n = t / 2, B = k(e[0], A) - r, a = n - k(e[1], t);
  return (Math.atan2(a, B) + Math.PI * 2) % (Math.PI * 2);
}, Uo = function(e, A, t) {
  var r = typeof e == "number" ? e : Co(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), B = A / 2, a = t / 2, s = n / 2, i = Math.sin(r - Math.PI / 2) * s, o = Math.cos(r - Math.PI / 2) * s;
  return [n, B - o, B + o, a - i, a + i];
}, HA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, Hn = function(e, A, t, r, n) {
  var B = [
    [0, 0],
    [0, A],
    [e, 0],
    [e, A]
  ];
  return B.reduce(function(a, s) {
    var i = s[0], o = s[1], c = HA(t - i, r - o);
    return (n ? c < a.optimumDistance : c > a.optimumDistance) ? {
      optimumCorner: s,
      optimumDistance: c
    } : a;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, Fo = function(e, A, t, r, n) {
  var B = 0, a = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? B = a = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (B = Math.min(Math.abs(A), Math.abs(A - r)), a = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (e.shape === 0)
        B = a = Math.min(HA(A, t), HA(A, t - n), HA(A - r, t), HA(A - r, t - n));
      else if (e.shape === 1) {
        var s = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r)), i = Hn(r, n, A, t, !0), o = i[0], c = i[1];
        B = HA(o - A, (c - t) / s), a = s * B;
      }
      break;
    case 1:
      e.shape === 0 ? B = a = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (B = Math.max(Math.abs(A), Math.abs(A - r)), a = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (e.shape === 0)
        B = a = Math.max(HA(A, t), HA(A, t - n), HA(A - r, t), HA(A - r, t - n));
      else if (e.shape === 1) {
        var s = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r)), l = Hn(r, n, A, t, !1), o = l[0], c = l[1];
        B = HA(o - A, (c - t) / s), a = s * B;
      }
      break;
  }
  return Array.isArray(e.size) && (B = k(e.size[0], r), a = e.size.length === 2 ? k(e.size[1], n) : B), [B, a];
}, ho = function(e, A) {
  var t = dA(180), r = [];
  return mA(A).forEach(function(n, B) {
    if (B === 0) {
      var a = n[0];
      if (a.type === 20 && a.value === "to") {
        t = SB(n);
        return;
      } else if (TB(a)) {
        t = It.parse(e, a);
        return;
      }
    }
    var s = mt(e, n);
    r.push(s);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, $e = function(e, A) {
  var t = dA(180), r = [];
  return mA(A).forEach(function(n, B) {
    if (B === 0) {
      var a = n[0];
      if (a.type === 20 && ["top", "left", "right", "bottom"].indexOf(a.value) !== -1) {
        t = SB(n);
        return;
      } else if (TB(a)) {
        t = (It.parse(e, a) + dA(270)) % dA(360);
        return;
      }
    }
    var s = mt(e, n);
    r.push(s);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, po = function(e, A) {
  var t = dA(180), r = [], n = 1, B = 0, a = 3, s = [];
  return mA(A).forEach(function(i, o) {
    var c = i[0];
    if (o === 0) {
      if (R(c) && c.value === "linear") {
        n = 1;
        return;
      } else if (R(c) && c.value === "radial") {
        n = 2;
        return;
      }
    }
    if (c.type === 18) {
      if (c.name === "from") {
        var l = GA.parse(e, c.values[0]);
        r.push({ stop: BA, color: l });
      } else if (c.name === "to") {
        var l = GA.parse(e, c.values[0]);
        r.push({ stop: NA, color: l });
      } else if (c.name === "color-stop") {
        var u = c.values.filter(se);
        if (u.length === 2) {
          var l = GA.parse(e, u[1]), Q = u[0];
          oe(Q) && r.push({
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
  } : { size: a, shape: B, stops: r, position: s, type: n };
}, MB = "closest-side", OB = "farthest-side", NB = "closest-corner", RB = "farthest-corner", GB = "circle", VB = "ellipse", kB = "cover", _B = "contain", Eo = function(e, A) {
  var t = 0, r = 3, n = [], B = [];
  return mA(A).forEach(function(a, s) {
    var i = !0;
    if (s === 0) {
      var o = !1;
      i = a.reduce(function(l, u) {
        if (o)
          if (R(u))
            switch (u.value) {
              case "center":
                return B.push(Tr), l;
              case "top":
              case "left":
                return B.push(BA), l;
              case "right":
              case "bottom":
                return B.push(NA), l;
            }
          else
            (z(u) || kA(u)) && B.push(u);
        else if (R(u))
          switch (u.value) {
            case GB:
              return t = 0, !1;
            case VB:
              return t = 1, !1;
            case "at":
              return o = !0, !1;
            case MB:
              return r = 0, !1;
            case kB:
            case OB:
              return r = 1, !1;
            case _B:
            case NB:
              return r = 2, !1;
            case RB:
              return r = 3, !1;
          }
        else if (kA(u) || z(u))
          return Array.isArray(r) || (r = []), r.push(u), !1;
        return l;
      }, i);
    }
    if (i) {
      var c = mt(e, a);
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
  return mA(A).forEach(function(a, s) {
    var i = !0;
    if (s === 0 ? i = a.reduce(function(c, l) {
      if (R(l))
        switch (l.value) {
          case "center":
            return B.push(Tr), !1;
          case "top":
          case "left":
            return B.push(BA), !1;
          case "right":
          case "bottom":
            return B.push(NA), !1;
        }
      else if (z(l) || kA(l))
        return B.push(l), !1;
      return c;
    }, i) : s === 1 && (i = a.reduce(function(c, l) {
      if (R(l))
        switch (l.value) {
          case GB:
            return t = 0, !1;
          case VB:
            return t = 1, !1;
          case _B:
          case MB:
            return r = 0, !1;
          case OB:
            return r = 1, !1;
          case NB:
            return r = 2, !1;
          case kB:
          case RB:
            return r = 3, !1;
        }
      else if (kA(l) || z(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return c;
    }, i)), i) {
      var o = mt(e, a);
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
}, Ho = function(e) {
  return e.type === 1;
}, vo = function(e) {
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
      var r = PB[A.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
      return r(e, A.values);
    }
    throw new Error("Unsupported image type " + A.type);
  }
};
function Io(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!PB[e.name]);
}
var PB = {
  "linear-gradient": ho,
  "-moz-linear-gradient": $e,
  "-ms-linear-gradient": $e,
  "-o-linear-gradient": $e,
  "-webkit-linear-gradient": $e,
  "radial-gradient": Eo,
  "-moz-radial-gradient": At,
  "-ms-radial-gradient": At,
  "-o-radial-gradient": At,
  "-webkit-radial-gradient": At,
  "-webkit-gradient": po
}, mo = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    var t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
      return se(r) && Io(r);
    }).map(function(r) {
      return Sr.parse(e, r);
    });
  }
}, yo = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.map(function(t) {
      if (R(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, Ko = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return mA(A).map(function(t) {
      return t.filter(z);
    }).map(KB);
  }
}, Lo = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return mA(A).map(function(t) {
      return t.filter(R).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(bo);
  }
}, bo = function(e) {
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
var xo = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return mA(A).map(function(t) {
      return t.filter(Do);
    });
  }
}, Do = function(e) {
  return R(e) || z(e);
}, yt = function(e) {
  return {
    name: "border-" + e + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, To = yt("top"), So = yt("right"), Mo = yt("bottom"), Oo = yt("left"), Kt = function(e) {
  return {
    name: "border-radius-" + e,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(A, t) {
      return KB(t.filter(z));
    }
  };
}, No = Kt("top-left"), Ro = Kt("top-right"), Go = Kt("bottom-right"), Vo = Kt("bottom-left"), Lt = function(e) {
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
}, ko = Lt("top"), _o = Lt("right"), Po = Lt("bottom"), Xo = Lt("left"), bt = function(e) {
  return {
    name: "border-" + e + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(A, t) {
      return Oe(t) ? t.number : 0;
    }
  };
}, Jo = bt("top"), Wo = bt("right"), Yo = bt("bottom"), Zo = bt("left"), zo = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, jo = {
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
    return A.filter(R).reduce(
      function(t, r) {
        return t | $o(r.value);
      },
      0
      /* NONE */
    );
  }
}, $o = function(e) {
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
}, Ac = {
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
}, ec = {
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
var tc = {
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
}, rc = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, vn = function(e, A) {
  return R(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : z(e) ? k(e, A) : A;
}, nc = {
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
}, ac = xt("top"), sc = xt("right"), ic = xt("bottom"), oc = xt("left"), cc = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(R).map(function(t) {
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
}, lc = {
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
}, uc = Dt("top"), gc = Dt("right"), Qc = Dt("bottom"), wc = Dt("left"), fc = {
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
}, Cc = {
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
}, Uc = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && dr(A[0], "none") ? [] : mA(A).map(function(t) {
      for (var r = {
        color: bA.TRANSPARENT,
        offsetX: BA,
        offsetY: BA,
        blur: BA
      }, n = 0, B = 0; B < t.length; B++) {
        var a = t[B];
        kA(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : r.blur = a, n++) : r.color = GA.parse(e, a);
      }
      return r;
    });
  }
}, Fc = {
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
}, hc = {
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
}, dc = function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, pc = function(e) {
  var A = e.filter(function(i) {
    return i.type === 17;
  }).map(function(i) {
    return i.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var n = A[4], B = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var a = A[12], s = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, n, B, a, s] : null;
}, Ec = {
  matrix: dc,
  matrix3d: pc
}, In = {
  type: 16,
  number: 50,
  flags: Me
}, Hc = [In, In], vc = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    var t = A.filter(z);
    return t.length !== 2 ? Hc : [t[0], t[1]];
  }
}, Ic = {
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
var mc = {
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
}, yc = {
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
}, XB = {
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
}, Kc = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return oe(A) ? A.number : 1;
  }
}, Lc = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, bc = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(R).map(function(t) {
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
}, xc = {
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
}, Dc = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, Tc = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    if (oe(A))
      return A.number;
    if (R(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, Sc = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.filter(R).map(function(t) {
      return t.value;
    });
  }
}, Mc = {
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
}, Oc = {
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
}, Nc = {
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
    for (var r = [], n = A.filter(yB), B = 0; B < n.length; B++) {
      var a = n[B], s = n[B + 1];
      if (a.type === 20) {
        var i = s && oe(s) ? s.number : 1;
        r.push({ counter: a.value, increment: i });
      }
    }
    return r;
  }
}, Rc = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(e, A) {
    if (A.length === 0)
      return [];
    for (var t = [], r = A.filter(yB), n = 0; n < r.length; n++) {
      var B = r[n], a = r[n + 1];
      if (R(B) && B.value !== "none") {
        var s = a && oe(a) ? a.number : 0;
        t.push({ counter: B.value, reset: s });
      }
    }
    return t;
  }
}, Gc = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(e, A) {
    return A.filter(Oe).map(function(t) {
      return XB.parse(e, t);
    });
  }
}, Vc = {
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
    var r = [], n = A.filter(uo);
    if (n.length % 2 !== 0)
      return null;
    for (var B = 0; B < n.length; B += 2) {
      var a = n[B].value, s = n[B + 1].value;
      r.push({ open: a, close: s });
    }
    return r;
  }
}, mn = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, kc = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(e, A) {
    return A.length === 1 && dr(A[0], "none") ? [] : mA(A).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: BA,
        offsetY: BA,
        blur: BA,
        spread: BA,
        inset: !1
      }, n = 0, B = 0; B < t.length; B++) {
        var a = t[B];
        dr(a, "inset") ? r.inset = !0 : kA(a) ? (n === 0 ? r.offsetX = a : n === 1 ? r.offsetY = a : n === 2 ? r.blur = a : r.spread = a, n++) : r.color = GA.parse(e, a);
      }
      return r;
    });
  }
}, _c = {
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
    return A.filter(R).forEach(function(n) {
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
}, Pc = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Xc = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(e, A) {
    return Oe(A) ? A.number : 0;
  }
}, Jc = (
  /** @class */
  function() {
    function e(A, t) {
      var r, n;
      this.animationDuration = p(A, Gc, t.animationDuration), this.backgroundClip = p(A, wo, t.backgroundClip), this.backgroundColor = p(A, fo, t.backgroundColor), this.backgroundImage = p(A, mo, t.backgroundImage), this.backgroundOrigin = p(A, yo, t.backgroundOrigin), this.backgroundPosition = p(A, Ko, t.backgroundPosition), this.backgroundRepeat = p(A, Lo, t.backgroundRepeat), this.backgroundSize = p(A, xo, t.backgroundSize), this.borderTopColor = p(A, To, t.borderTopColor), this.borderRightColor = p(A, So, t.borderRightColor), this.borderBottomColor = p(A, Mo, t.borderBottomColor), this.borderLeftColor = p(A, Oo, t.borderLeftColor), this.borderTopLeftRadius = p(A, No, t.borderTopLeftRadius), this.borderTopRightRadius = p(A, Ro, t.borderTopRightRadius), this.borderBottomRightRadius = p(A, Go, t.borderBottomRightRadius), this.borderBottomLeftRadius = p(A, Vo, t.borderBottomLeftRadius), this.borderTopStyle = p(A, ko, t.borderTopStyle), this.borderRightStyle = p(A, _o, t.borderRightStyle), this.borderBottomStyle = p(A, Po, t.borderBottomStyle), this.borderLeftStyle = p(A, Xo, t.borderLeftStyle), this.borderTopWidth = p(A, Jo, t.borderTopWidth), this.borderRightWidth = p(A, Wo, t.borderRightWidth), this.borderBottomWidth = p(A, Yo, t.borderBottomWidth), this.borderLeftWidth = p(A, Zo, t.borderLeftWidth), this.boxShadow = p(A, kc, t.boxShadow), this.color = p(A, zo, t.color), this.direction = p(A, jo, t.direction), this.display = p(A, qo, t.display), this.float = p(A, Ac, t.cssFloat), this.fontFamily = p(A, xc, t.fontFamily), this.fontSize = p(A, Dc, t.fontSize), this.fontStyle = p(A, Mc, t.fontStyle), this.fontVariant = p(A, Sc, t.fontVariant), this.fontWeight = p(A, Tc, t.fontWeight), this.letterSpacing = p(A, ec, t.letterSpacing), this.lineBreak = p(A, tc, t.lineBreak), this.lineHeight = p(A, rc, t.lineHeight), this.listStyleImage = p(A, nc, t.listStyleImage), this.listStylePosition = p(A, Bc, t.listStylePosition), this.listStyleType = p(A, pr, t.listStyleType), this.marginTop = p(A, ac, t.marginTop), this.marginRight = p(A, sc, t.marginRight), this.marginBottom = p(A, ic, t.marginBottom), this.marginLeft = p(A, oc, t.marginLeft), this.opacity = p(A, Kc, t.opacity);
      var B = p(A, cc, t.overflow);
      this.overflowX = B[0], this.overflowY = B[B.length > 1 ? 1 : 0], this.overflowWrap = p(A, lc, t.overflowWrap), this.paddingTop = p(A, uc, t.paddingTop), this.paddingRight = p(A, gc, t.paddingRight), this.paddingBottom = p(A, Qc, t.paddingBottom), this.paddingLeft = p(A, wc, t.paddingLeft), this.paintOrder = p(A, _c, t.paintOrder), this.position = p(A, Cc, t.position), this.textAlign = p(A, fc, t.textAlign), this.textDecorationColor = p(A, Lc, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = p(A, bc, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = p(A, Uc, t.textShadow), this.textTransform = p(A, Fc, t.textTransform), this.transform = p(A, hc, t.transform), this.transformOrigin = p(A, vc, t.transformOrigin), this.visibility = p(A, Ic, t.visibility), this.webkitTextStrokeColor = p(A, Pc, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = p(A, Xc, t.webkitTextStrokeWidth), this.wordBreak = p(A, mc, t.wordBreak), this.zIndex = p(A, yc, t.zIndex);
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
), Wc = (
  /** @class */
  function() {
    function e(A, t) {
      this.content = p(A, Oc, t.content), this.quotes = p(A, Vc, t.quotes);
    }
    return e;
  }()
), yn = (
  /** @class */
  function() {
    function e(A, t) {
      this.counterIncrement = p(A, Nc, t.counterIncrement), this.counterReset = p(A, Rc, t.counterReset);
    }
    return e;
  }()
), p = function(e, A, t) {
  var r = new IB(), n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  r.write(n);
  var B = new mB(r.read());
  switch (A.type) {
    case 2:
      var a = B.parseComponentValue();
      return A.parse(e, R(a) ? a.value : A.initialValue);
    case 0:
      return A.parse(e, B.parseComponentValue());
    case 1:
      return A.parse(e, B.parseComponentValues());
    case 4:
      return B.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return It.parse(e, B.parseComponentValue());
        case "color":
          return GA.parse(e, B.parseComponentValue());
        case "image":
          return Sr.parse(e, B.parseComponentValue());
        case "length":
          var s = B.parseComponentValue();
          return kA(s) ? s : BA;
        case "length-percentage":
          var i = B.parseComponentValue();
          return z(i) ? i : BA;
        case "time":
          return XB.parse(e, B.parseComponentValue());
      }
      break;
  }
}, Yc = "data-html2canvas-debug", Zc = function(e) {
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
}, Er = function(e, A) {
  var t = Zc(e);
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
      this.styles = new Jc(A, window.getComputedStyle(t, null)), Ir(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Ht(this.context, t), Er(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return e;
  }()
), zc = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Kn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var et = 0; et < Kn.length; et++)
  pe[Kn.charCodeAt(et)] = et;
var jc = function(e) {
  var A = e.length * 0.75, t = e.length, r, n = 0, B, a, s, i;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var o = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), c = Array.isArray(o) ? o : new Uint8Array(o);
  for (r = 0; r < t; r += 4)
    B = pe[e.charCodeAt(r)], a = pe[e.charCodeAt(r + 1)], s = pe[e.charCodeAt(r + 2)], i = pe[e.charCodeAt(r + 3)], c[n++] = B << 2 | a >> 4, c[n++] = (a & 15) << 4 | s >> 2, c[n++] = (s & 3) << 6 | i & 63;
  return o;
}, qc = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 2)
    t.push(e[r + 1] << 8 | e[r]);
  return t;
}, $c = function(e) {
  for (var A = e.length, t = [], r = 0; r < A; r += 4)
    t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
  return t;
}, ZA = 5, Mr = 6 + 5, Jt = 2, Al = Mr - ZA, JB = 65536 >> ZA, el = 1 << ZA, Wt = el - 1, tl = 1024 >> ZA, rl = JB + tl, nl = rl, Bl = 32, al = nl + Bl, sl = 65536 >> Mr, il = 1 << Al, ol = il - 1, Ln = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, cl = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, ll = function(e, A) {
  var t = jc(e), r = Array.isArray(t) ? $c(t) : new Uint32Array(t), n = Array.isArray(t) ? qc(t) : new Uint16Array(t), B = 24, a = Ln(n, B / 2, r[4] / 2), s = r[5] === 2 ? Ln(n, (B + r[4]) / 2) : cl(r, Math.ceil((B + r[4]) / 4));
  return new ul(r[0], r[1], r[2], r[3], a, s);
}, ul = (
  /** @class */
  function() {
    function e(A, t, r, n, B, a) {
      this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = B, this.data = a;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> ZA], t = (t << Jt) + (A & Wt), this.data[t];
        if (A <= 65535)
          return t = this.index[JB + (A - 55296 >> ZA)], t = (t << Jt) + (A & Wt), this.data[t];
        if (A < this.highStart)
          return t = al - sl + (A >> Mr), t = this.index[t], t += A >> ZA & ol, t = this.index[t], t = (t << Jt) + (A & Wt), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), bn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", gl = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var tt = 0; tt < bn.length; tt++)
  gl[bn.charCodeAt(tt)] = tt;
var Ql = 1, Yt = 2, Zt = 3, xn = 4, Dn = 5, wl = 7, Tn = 8, zt = 9, jt = 10, Sn = 11, Mn = 12, On = 13, Nn = 14, qt = 15, fl = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var B = e.charCodeAt(t++);
      (B & 64512) === 56320 ? A.push(((n & 1023) << 10) + (B & 1023) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, Cl = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, B = ""; ++n < t; ) {
    var a = e[n];
    a <= 65535 ? r.push(a) : (a -= 65536, r.push((a >> 10) + 55296, a % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (B += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return B;
}, Ul = ll(zc), FA = "×", $t = "÷", Fl = function(e) {
  return Ul.get(e);
}, hl = function(e, A, t) {
  var r = t - 2, n = A[r], B = A[t - 1], a = A[t];
  if (B === Yt && a === Zt)
    return FA;
  if (B === Yt || B === Zt || B === xn || a === Yt || a === Zt || a === xn)
    return $t;
  if (B === Tn && [Tn, zt, Sn, Mn].indexOf(a) !== -1 || (B === Sn || B === zt) && (a === zt || a === jt) || (B === Mn || B === jt) && a === jt || a === On || a === Dn || a === wl || B === Ql)
    return FA;
  if (B === On && a === Nn) {
    for (; n === Dn; )
      n = A[--r];
    if (n === Nn)
      return FA;
  }
  if (B === qt && a === qt) {
    for (var s = 0; n === qt; )
      s++, n = A[--r];
    if (s % 2 === 0)
      return FA;
  }
  return $t;
}, dl = function(e) {
  var A = fl(e), t = A.length, r = 0, n = 0, B = A.map(Fl);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var a = FA; r < t && (a = hl(A, B, ++r)) === FA; )
        ;
      if (a !== FA || r === t) {
        var s = Cl.apply(null, A.slice(n, r));
        return n = r, { value: s, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, pl = function(e) {
  for (var A = dl(e), t = [], r; !(r = A.next()).done; )
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
}, Hl = function(e) {
  var A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  var t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = A.firstChild, n = vt(r.data).map(function(i) {
    return Y(i);
  }), B = 0, a = {}, s = n.every(function(i, o) {
    t.setStart(r, B), t.setEnd(r, B + i.length);
    var c = t.getBoundingClientRect();
    B += i.length;
    var l = c.x > a.x || c.y > a.y;
    return a = c, o === 0 ? !0 : l;
  });
  return e.body.removeChild(A), s;
}, vl = function() {
  return typeof new Image().crossOrigin < "u";
}, Il = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, ml = function(e) {
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
}, yl = function(e) {
  var A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  var r = A.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), B = A.toDataURL();
  n.src = B;
  var a = Hr(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), Gn(a).then(function(s) {
    r.drawImage(s, 0, 0);
    var i = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var o = e.createElement("div");
    return o.style.backgroundImage = "url(" + B + ")", o.style.height = t + "px", Rn(i) ? Gn(Hr(t, t, 0, 0, o)) : Promise.reject(!1);
  }).then(function(s) {
    return r.drawImage(s, 0, 0), Rn(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Hr = function(e, A, t, r, n) {
  var B = "http://www.w3.org/2000/svg", a = document.createElementNS(B, "svg"), s = document.createElementNS(B, "foreignObject");
  return a.setAttributeNS(null, "width", e.toString()), a.setAttributeNS(null, "height", A.toString()), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", t.toString()), s.setAttributeNS(null, "y", r.toString()), s.setAttributeNS(null, "externalResourcesRequired", "true"), a.appendChild(s), s.appendChild(n), a;
}, Gn = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, nA = {
  get SUPPORT_RANGE_BOUNDS() {
    var e = El(document);
    return Object.defineProperty(nA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    var e = nA.SUPPORT_RANGE_BOUNDS && Hl(document);
    return Object.defineProperty(nA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    var e = ml(document);
    return Object.defineProperty(nA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var e = typeof Array.from == "function" && typeof window.fetch == "function" ? yl(document) : Promise.resolve(!1);
    return Object.defineProperty(nA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    var e = vl();
    return Object.defineProperty(nA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var e = Il();
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
}, me = (
  /** @class */
  function() {
    function e(A, t) {
      this.text = A, this.bounds = t;
    }
    return e;
  }()
), Kl = function(e, A, t, r) {
  var n = xl(A, t), B = [], a = 0;
  return n.forEach(function(s) {
    if (t.textDecorationLine.length || s.trim().length > 0)
      if (nA.SUPPORT_RANGE_BOUNDS) {
        var i = Vn(r, a, s.length).getClientRects();
        if (i.length > 1) {
          var o = Or(s), c = 0;
          o.forEach(function(u) {
            B.push(new me(u, xA.fromDOMRectList(e, Vn(r, c + a, u.length).getClientRects()))), c += u.length;
          });
        } else
          B.push(new me(s, xA.fromDOMRectList(e, i)));
      } else {
        var l = r.splitText(s.length);
        B.push(new me(s, Ll(e, r))), r = l;
      }
    else
      nA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(s.length));
    a += s.length;
  }), B;
}, Ll = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var B = Ht(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), B;
    }
  }
  return xA.EMPTY;
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
  return pl(e);
}, bl = function(e, A) {
  if (nA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return Tl(e, A);
}, xl = function(e, A) {
  return A.letterSpacing !== 0 ? Or(e) : bl(e, A);
}, Dl = [32, 160, 4961, 65792, 65793, 4153, 4241], Tl = function(e, A) {
  for (var t = ai(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), r = [], n, B = function() {
    if (n.value) {
      var a = n.value.slice(), s = vt(a), i = "";
      s.forEach(function(o) {
        Dl.indexOf(o) === -1 ? i += Y(o) : (i.length && r.push(i), r.push(Y(o)), i = "");
      }), i.length && r.push(i);
    }
  }; !(n = t.next()).done; )
    B();
  return r;
}, Sl = (
  /** @class */
  function() {
    function e(A, t, r) {
      this.text = Ml(t.data, r.textTransform), this.textBounds = Kl(A, this.text, r, t);
    }
    return e;
  }()
), Ml = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Ol, Nl);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Ol = /(^|\s|:|-|\(|\))([a-z])/g, Nl = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, WB = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return A;
  }(yA)
), YB = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return A;
  }(yA)
), ZB = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, B = new XMLSerializer(), a = Ht(t, r);
      return r.setAttribute("width", a.width + "px"), r.setAttribute("height", a.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(B.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return A;
  }(yA)
), zB = (
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
), Rl = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], Gl = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Vl = function(e) {
  return e.width > e.height ? new xA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new xA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
}, kl = function(e) {
  var A = e.type === _l ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, Ct = "checkbox", Ut = "radio", _l = "password", kn = 707406591, Nr = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = kl(r), (n.type === Ct || n.type === Ut) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = Vl(n.bounds)), n.type) {
        case Ct:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Rl;
          break;
        case Ut:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Gl;
          break;
      }
      return n;
    }
    return A;
  }(yA)
), jB = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this, B = r.options[r.selectedIndex || 0];
      return n.value = B && B.text || "", n;
    }
    return A;
  }(yA)
), qB = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return A;
  }(yA)
), $B = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = ea(t, r.contentWindow.document.documentElement);
          var B = r.contentWindow.document.documentElement ? ve(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : bA.TRANSPARENT, a = r.contentWindow.document.body ? ve(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : bA.TRANSPARENT;
          n.backgroundColor = VA(B) ? VA(a) ? n.styles.backgroundColor : a : B;
        }
      } catch {
      }
      return n;
    }
    return A;
  }(yA)
), Pl = ["OL", "UL", "MENU"], ot = function(e, A, t, r) {
  for (var n = A.firstChild, B = void 0; n; n = B)
    if (B = n.nextSibling, ta(n) && n.data.trim().length > 0)
      t.textNodes.push(new Sl(e, n, t.styles));
    else if (Be(n))
      if (aa(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(s) {
          return ot(e, s, t, r);
        });
      else {
        var a = Aa(e, n);
        a.styles.isVisible() && (Xl(n, a, r) ? a.flags |= 4 : Jl(a.styles) && (a.flags |= 2), Pl.indexOf(n.tagName) !== -1 && (a.flags |= 8), t.elements.push(a), n.slot, n.shadowRoot ? ot(e, n.shadowRoot, a, r) : !Ft(n) && !ra(n) && !ht(n) && ot(e, n, a, r));
      }
}, Aa = function(e, A) {
  return mr(A) ? new WB(e, A) : na(A) ? new YB(e, A) : ra(A) ? new ZB(e, A) : Wl(A) ? new zB(e, A) : Yl(A) ? new vr(e, A) : Zl(A) ? new Nr(e, A) : ht(A) ? new jB(e, A) : Ft(A) ? new qB(e, A) : Ba(A) ? new $B(e, A) : new yA(e, A);
}, ea = function(e, A) {
  var t = Aa(e, A);
  return t.flags |= 4, ot(e, A, t, t), t;
}, Xl = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Rr(e) && t.styles.isTransparent();
}, Jl = function(e) {
  return e.isPositioned() || e.isFloating();
}, ta = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, Be = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Ir = function(e) {
  return Be(e) && typeof e.style < "u" && !ct(e);
}, ct = function(e) {
  return typeof e.className == "object";
}, Wl = function(e) {
  return e.tagName === "LI";
}, Yl = function(e) {
  return e.tagName === "OL";
}, Zl = function(e) {
  return e.tagName === "INPUT";
}, zl = function(e) {
  return e.tagName === "HTML";
}, ra = function(e) {
  return e.tagName === "svg";
}, Rr = function(e) {
  return e.tagName === "BODY";
}, na = function(e) {
  return e.tagName === "CANVAS";
}, _n = function(e) {
  return e.tagName === "VIDEO";
}, mr = function(e) {
  return e.tagName === "IMG";
}, Ba = function(e) {
  return e.tagName === "IFRAME";
}, Pn = function(e) {
  return e.tagName === "STYLE";
}, jl = function(e) {
  return e.tagName === "SCRIPT";
}, Ft = function(e) {
  return e.tagName === "TEXTAREA";
}, ht = function(e) {
  return e.tagName === "SELECT";
}, aa = function(e) {
  return e.tagName === "SLOT";
}, Xn = function(e) {
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
      r !== null && r.forEach(function(s) {
        var i = t.counters[s.counter];
        i && s.increment !== 0 && (B = !1, i.length || i.push(1), i[Math.max(0, i.length - 1)] += s.increment);
      });
      var a = [];
      return B && n.forEach(function(s) {
        var i = t.counters[s.counter];
        a.push(s.counter), i || (i = t.counters[s.counter] = []), i.push(s.reset);
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
}, Au = {
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
}, Ae = function(e, A, t, r, n, B) {
  return e < A || e > t ? Se(e, n, B.length > 0) : r.integers.reduce(function(a, s, i) {
    for (; e >= s; )
      e -= s, a += r.values[i];
    return a;
  }, "") + B;
}, sa = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, W = function(e, A, t, r, n) {
  var B = t - A + 1;
  return (e < 0 ? "-" : "") + (sa(Math.abs(e), B, r, function(a) {
    return Y(Math.floor(a % B) + A);
  }) + n);
}, PA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return sa(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, re = 1, DA = 2, TA = 4, Ee = 8, LA = function(e, A, t, r, n, B) {
  if (e < -9999 || e > 9999)
    return Se(e, 4, n.length > 0);
  var a = Math.abs(e), s = n;
  if (a === 0)
    return A[0] + s;
  for (var i = 0; a > 0 && i <= 4; i++) {
    var o = a % 10;
    o === 0 && eA(B, re) && s !== "" ? s = A[o] + s : o > 1 || o === 1 && i === 0 || o === 1 && i === 1 && eA(B, DA) || o === 1 && i === 1 && eA(B, TA) && e > 100 || o === 1 && i > 1 && eA(B, Ee) ? s = A[o] + (i > 0 ? t[i - 1] : "") + s : o === 1 && i > 0 && (s = t[i - 1] + s), a = Math.floor(a / 10);
  }
  return (e < 0 ? r : "") + s;
}, Yn = "十百千萬", Zn = "拾佰仟萬", zn = "マイナス", Ar = "마이너스", Se = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", B = t ? ", " : "", a = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + a;
    case 1:
      return "◦" + a;
    case 2:
      return "◾" + a;
    case 5:
      var s = W(e, 48, 57, !0, r);
      return s.length < 4 ? "0" + s : s;
    case 4:
      return PA(e, "〇一二三四五六七八九", n);
    case 6:
      return Ae(e, 1, 3999, Jn, 3, r).toLowerCase();
    case 7:
      return Ae(e, 1, 3999, Jn, 3, r);
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
      return Ae(e, 1, 9999, Wn, 3, r);
    case 35:
      return Ae(e, 1, 9999, Wn, 3, r).toLowerCase();
    case 13:
      return W(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return W(e, 6112, 6121, !0, r);
    case 15:
      return PA(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return PA(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return LA(e, "零一二三四五六七八九", Yn, "負", n, DA | TA | Ee);
    case 47:
      return LA(e, "零壹貳參肆伍陸柒捌玖", Zn, "負", n, re | DA | TA | Ee);
    case 42:
      return LA(e, "零一二三四五六七八九", Yn, "负", n, DA | TA | Ee);
    case 41:
      return LA(e, "零壹贰叁肆伍陆柒捌玖", Zn, "负", n, re | DA | TA | Ee);
    case 26:
      return LA(e, "〇一二三四五六七八九", "十百千万", zn, n, 0);
    case 25:
      return LA(e, "零壱弐参四伍六七八九", "拾百千万", zn, n, re | DA | TA);
    case 31:
      return LA(e, "영일이삼사오육칠팔구", "십백천만", Ar, B, re | DA | TA);
    case 33:
      return LA(e, "零一二三四五六七八九", "十百千萬", Ar, B, 0);
    case 32:
      return LA(e, "零壹貳參四五六七八九", "拾百千", Ar, B, re | DA | TA);
    case 18:
      return W(e, 2406, 2415, !0, r);
    case 20:
      return Ae(e, 1, 19999, Au, 3, r);
    case 21:
      return W(e, 2790, 2799, !0, r);
    case 22:
      return W(e, 2662, 2671, !0, r);
    case 22:
      return Ae(e, 1, 10999, $l, 3, r);
    case 23:
      return PA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return PA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return W(e, 3302, 3311, !0, r);
    case 28:
      return PA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return PA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
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
}, ia = "data-html2canvas-ignore", jn = (
  /** @class */
  function() {
    function e(A, t, r) {
      if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new ql(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return e.prototype.toIFrame = function(A, t) {
      var r = this, n = eu(A, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var B = A.defaultView.pageXOffset, a = A.defaultView.pageYOffset, s = n.contentWindow, i = s.document, o = nu(n).then(function() {
        return oA(r, void 0, void 0, function() {
          var c, l;
          return aA(this, function(u) {
            switch (u.label) {
              case 0:
                return this.scrolledElements.forEach(iu), s && (s.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (s.scrollY !== t.top || s.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(s.scrollX - t.left, s.scrollY - t.top, 0, 0))), c = this.options.onclone, l = this.clonedReferenceElement, typeof l > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
              case 1:
                u.sent(), u.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, ru(i)] : [3, 4];
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
      return i.open(), i.write(au(document.doctype) + "<html></html>"), su(this.referenceElement.ownerDocument, B, a), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), o;
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
      return mr(t) && (mr(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Xn(t) ? this.createCustomElementClone(t) : t;
    }, e.prototype.createCustomElementClone = function(A) {
      var t = document.createElement("html2canvascustomelement");
      return er(A.style, t), t;
    }, e.prototype.createStyleClone = function(A) {
      try {
        var t = A.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(B, a) {
            return a && typeof a.cssText == "string" ? B + a.cssText : B;
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
        var B = A.getContext("2d"), a = n.getContext("2d");
        if (a)
          if (!this.options.allowTaint && B)
            a.putImageData(B.getImageData(0, 0, A.width, A.height), 0, 0);
          else {
            var s = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
            if (s) {
              var i = s.getContextAttributes();
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
      (!Be(t) || !jl(t) && !t.hasAttribute(ia) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Be(t) || !Pn(t)) && A.appendChild(this.cloneNode(t, r));
    }, e.prototype.cloneChildNodes = function(A, t, r) {
      for (var n = this, B = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; B; B = B.nextSibling)
        if (Be(B) && aa(B) && typeof B.assignedNodes == "function") {
          var a = B.assignedNodes();
          a.length && a.forEach(function(s) {
            return n.appendChildNode(t, s, r);
          });
        } else
          this.appendChildNode(t, B, r);
    }, e.prototype.cloneNode = function(A, t) {
      if (ta(A))
        return document.createTextNode(A.data);
      if (!A.ownerDocument)
        return A.cloneNode(!1);
      var r = A.ownerDocument.defaultView;
      if (r && Be(A) && (Ir(A) || ct(A))) {
        var n = this.createElementClone(A);
        n.style.transitionProperty = "none";
        var B = r.getComputedStyle(A), a = r.getComputedStyle(A, ":before"), s = r.getComputedStyle(A, ":after");
        this.referenceElement === A && Ir(n) && (this.clonedReferenceElement = n), Rr(n) && lu(n);
        var i = this.counters.parse(new yn(this.context, B)), o = this.resolvePseudoContent(A, n, a, ye.BEFORE);
        Xn(A) && (t = !0), _n(A) || this.cloneChildNodes(A, n, t), o && n.insertBefore(o, n.firstChild);
        var c = this.resolvePseudoContent(A, n, s, ye.AFTER);
        return c && n.appendChild(c), this.counters.pop(i), (B && (this.options.copyStyles || ct(A)) && !Ba(A) || t) && er(B, n), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (Ft(A) || ht(A)) && (Ft(n) || ht(n)) && (n.value = A.value), n;
      }
      return A.cloneNode(!1);
    }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
      var B = this;
      if (r) {
        var a = r.content, s = t.ownerDocument;
        if (!(!s || !a || a === "none" || a === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new yn(this.context, r));
          var i = new Wc(this.context, r), o = s.createElement("html2canvaspseudoelement");
          er(r, o), i.content.forEach(function(l) {
            if (l.type === 0)
              o.appendChild(s.createTextNode(l.value));
            else if (l.type === 22) {
              var u = s.createElement("img");
              u.src = l.value, u.style.opacity = "1", o.appendChild(u);
            } else if (l.type === 18) {
              if (l.name === "attr") {
                var Q = l.values.filter(R);
                Q.length && o.appendChild(s.createTextNode(A.getAttribute(Q[0].value) || ""));
              } else if (l.name === "counter") {
                var g = l.values.filter(se), w = g[0], H = g[1];
                if (w && R(w)) {
                  var U = B.counters.getCounterValue(w.value), F = H && R(H) ? pr.parse(B.context, H.value) : 3;
                  o.appendChild(s.createTextNode(Se(U, F, !1)));
                }
              } else if (l.name === "counters") {
                var K = l.values.filter(se), w = K[0], m = K[1], H = K[2];
                if (w && R(w)) {
                  var y = B.counters.getCounterValues(w.value), C = H && R(H) ? pr.parse(B.context, H.value) : 3, L = m && m.type === 0 ? m.value : "", E = y.map(function(j) {
                    return Se(j, C, !1);
                  }).join(L);
                  o.appendChild(s.createTextNode(E));
                }
              }
            } else if (l.type === 20)
              switch (l.value) {
                case "open-quote":
                  o.appendChild(s.createTextNode(mn(i.quotes, B.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  o.appendChild(s.createTextNode(mn(i.quotes, --B.quoteDepth, !1)));
                  break;
                default:
                  o.appendChild(s.createTextNode(l.value));
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
var eu = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(ia, "true"), e.body.appendChild(t), t;
}, tu = function(e) {
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
}, ru = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(tu));
}, nu = function(e) {
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
}, au = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, su = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, iu = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, ou = ":before", cu = ":after", yr = "___html2canvas___pseudoelement_before", Kr = "___html2canvas___pseudoelement_after", qn = `{
    content: "" !important;
    display: none !important;
}`, lu = function(e) {
  uu(e, "." + yr + ou + qn + `
         .` + Kr + cu + qn);
}, uu = function(e, A) {
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
), gu = (
  /** @class */
  function() {
    function e(A, t) {
      this.context = A, this._options = t, this._cache = {};
    }
    return e.prototype.addImage = function(A) {
      var t = Promise.resolve();
      return this.has(A) || (rr(A) || Cu(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
      }), t;
    }, e.prototype.match = function(A) {
      return this._cache[A];
    }, e.prototype.loadImage = function(A) {
      return oA(this, void 0, void 0, function() {
        var t, r, n, B, a = this;
        return aA(this, function(s) {
          switch (s.label) {
            case 0:
              return t = oa.isSameOrigin(A), r = !tr(A) && this._options.useCORS === !0 && nA.SUPPORT_CORS_IMAGES && !t, n = !tr(A) && !t && !rr(A) && typeof this._options.proxy == "string" && nA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !tr(A) && !rr(A) && !n && !r ? [
                2
                /*return*/
              ] : (B = A, n ? [4, this.proxy(B)] : [3, 2]);
            case 1:
              B = s.sent(), s.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(i, o) {
                var c = new Image();
                c.onload = function() {
                  return i(c);
                }, c.onerror = o, (Uu(B) || r) && (c.crossOrigin = "anonymous"), c.src = B, c.complete === !0 && setTimeout(function() {
                  return i(c);
                }, 500), a._options.imageTimeout > 0 && setTimeout(function() {
                  return o("Timed out (" + a._options.imageTimeout + "ms) loading image");
                }, a._options.imageTimeout);
              })];
            case 3:
              return [2, s.sent()];
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
      return new Promise(function(B, a) {
        var s = nA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
        i.onload = function() {
          if (i.status === 200)
            if (s === "text")
              B(i.response);
            else {
              var l = new FileReader();
              l.addEventListener("load", function() {
                return B(l.result);
              }, !1), l.addEventListener("error", function(u) {
                return a(u);
              }, !1), l.readAsDataURL(i.response);
            }
          else
            a("Failed to proxy resource " + n + " with status code " + i.status);
        }, i.onerror = a;
        var o = r.indexOf("?") > -1 ? "&" : "?";
        if (i.open("GET", "" + r + o + "url=" + encodeURIComponent(A) + "&responseType=" + s), s !== "text" && i instanceof XMLHttpRequest && (i.responseType = s), t._options.imageTimeout) {
          var c = t._options.imageTimeout;
          i.timeout = c, i.ontimeout = function() {
            return a("Timed out (" + c + "ms) proxying " + n);
          };
        }
        i.send();
      });
    }, e;
  }()
), Qu = /^data:image\/svg\+xml/i, wu = /^data:image\/.*;base64,/i, fu = /^data:image\/.*/i, Cu = function(e) {
  return nA.SUPPORT_SVG_DRAWING || !Fu(e);
}, tr = function(e) {
  return fu.test(e);
}, Uu = function(e) {
  return wu.test(e);
}, rr = function(e) {
  return e.substr(0, 4) === "blob";
}, Fu = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || Qu.test(e);
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
), ee = function(e, A, t) {
  return new d(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, rt = (
  /** @class */
  function() {
    function e(A, t, r, n) {
      this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
    }
    return e.prototype.subdivide = function(A, t) {
      var r = ee(this.start, this.startControl, A), n = ee(this.startControl, this.endControl, A), B = ee(this.endControl, this.end, A), a = ee(r, n, A), s = ee(n, B, A), i = ee(a, s, A);
      return t ? new e(this.start, r, a, i) : new e(i, s, B, this.end);
    }, e.prototype.add = function(A, t) {
      return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
    }, e.prototype.reverse = function() {
      return new e(this.end, this.endControl, this.startControl, this.start);
    }, e;
  }()
), hA = function(e) {
  return e.type === 1;
}, hu = (
  /** @class */
  function() {
    function e(A) {
      var t = A.styles, r = A.bounds, n = de(t.borderTopLeftRadius, r.width, r.height), B = n[0], a = n[1], s = de(t.borderTopRightRadius, r.width, r.height), i = s[0], o = s[1], c = de(t.borderBottomRightRadius, r.width, r.height), l = c[0], u = c[1], Q = de(t.borderBottomLeftRadius, r.width, r.height), g = Q[0], w = Q[1], H = [];
      H.push((B + i) / r.width), H.push((g + l) / r.width), H.push((a + w) / r.height), H.push((o + u) / r.height);
      var U = Math.max.apply(Math, H);
      U > 1 && (B /= U, a /= U, i /= U, o /= U, l /= U, u /= U, g /= U, w /= U);
      var F = r.width - i, K = r.height - u, m = r.width - l, y = r.height - w, C = t.borderTopWidth, L = t.borderRightWidth, E = t.borderBottomWidth, I = t.borderLeftWidth, N = k(t.paddingTop, A.bounds.width), j = k(t.paddingRight, A.bounds.width), q = k(t.paddingBottom, A.bounds.width), D = k(t.paddingLeft, A.bounds.width);
      this.topLeftBorderDoubleOuterBox = B > 0 || a > 0 ? P(r.left + I / 3, r.top + C / 3, B - I / 3, a - C / 3, O.TOP_LEFT) : new d(r.left + I / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = B > 0 || a > 0 ? P(r.left + F, r.top + C / 3, i - L / 3, o - C / 3, O.TOP_RIGHT) : new d(r.left + r.width - L / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || u > 0 ? P(r.left + m, r.top + K, l - L / 3, u - E / 3, O.BOTTOM_RIGHT) : new d(r.left + r.width - L / 3, r.top + r.height - E / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || w > 0 ? P(r.left + I / 3, r.top + y, g - I / 3, w - E / 3, O.BOTTOM_LEFT) : new d(r.left + I / 3, r.top + r.height - E / 3), this.topLeftBorderDoubleInnerBox = B > 0 || a > 0 ? P(r.left + I * 2 / 3, r.top + C * 2 / 3, B - I * 2 / 3, a - C * 2 / 3, O.TOP_LEFT) : new d(r.left + I * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = B > 0 || a > 0 ? P(r.left + F, r.top + C * 2 / 3, i - L * 2 / 3, o - C * 2 / 3, O.TOP_RIGHT) : new d(r.left + r.width - L * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || u > 0 ? P(r.left + m, r.top + K, l - L * 2 / 3, u - E * 2 / 3, O.BOTTOM_RIGHT) : new d(r.left + r.width - L * 2 / 3, r.top + r.height - E * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || w > 0 ? P(r.left + I * 2 / 3, r.top + y, g - I * 2 / 3, w - E * 2 / 3, O.BOTTOM_LEFT) : new d(r.left + I * 2 / 3, r.top + r.height - E * 2 / 3), this.topLeftBorderStroke = B > 0 || a > 0 ? P(r.left + I / 2, r.top + C / 2, B - I / 2, a - C / 2, O.TOP_LEFT) : new d(r.left + I / 2, r.top + C / 2), this.topRightBorderStroke = B > 0 || a > 0 ? P(r.left + F, r.top + C / 2, i - L / 2, o - C / 2, O.TOP_RIGHT) : new d(r.left + r.width - L / 2, r.top + C / 2), this.bottomRightBorderStroke = l > 0 || u > 0 ? P(r.left + m, r.top + K, l - L / 2, u - E / 2, O.BOTTOM_RIGHT) : new d(r.left + r.width - L / 2, r.top + r.height - E / 2), this.bottomLeftBorderStroke = g > 0 || w > 0 ? P(r.left + I / 2, r.top + y, g - I / 2, w - E / 2, O.BOTTOM_LEFT) : new d(r.left + I / 2, r.top + r.height - E / 2), this.topLeftBorderBox = B > 0 || a > 0 ? P(r.left, r.top, B, a, O.TOP_LEFT) : new d(r.left, r.top), this.topRightBorderBox = i > 0 || o > 0 ? P(r.left + F, r.top, i, o, O.TOP_RIGHT) : new d(r.left + r.width, r.top), this.bottomRightBorderBox = l > 0 || u > 0 ? P(r.left + m, r.top + K, l, u, O.BOTTOM_RIGHT) : new d(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || w > 0 ? P(r.left, r.top + y, g, w, O.BOTTOM_LEFT) : new d(r.left, r.top + r.height), this.topLeftPaddingBox = B > 0 || a > 0 ? P(r.left + I, r.top + C, Math.max(0, B - I), Math.max(0, a - C), O.TOP_LEFT) : new d(r.left + I, r.top + C), this.topRightPaddingBox = i > 0 || o > 0 ? P(r.left + Math.min(F, r.width - L), r.top + C, F > r.width + L ? 0 : Math.max(0, i - L), Math.max(0, o - C), O.TOP_RIGHT) : new d(r.left + r.width - L, r.top + C), this.bottomRightPaddingBox = l > 0 || u > 0 ? P(r.left + Math.min(m, r.width - I), r.top + Math.min(K, r.height - E), Math.max(0, l - L), Math.max(0, u - E), O.BOTTOM_RIGHT) : new d(r.left + r.width - L, r.top + r.height - E), this.bottomLeftPaddingBox = g > 0 || w > 0 ? P(r.left + I, r.top + Math.min(y, r.height - E), Math.max(0, g - I), Math.max(0, w - E), O.BOTTOM_LEFT) : new d(r.left + I, r.top + r.height - E), this.topLeftContentBox = B > 0 || a > 0 ? P(r.left + I + D, r.top + C + N, Math.max(0, B - (I + D)), Math.max(0, a - (C + N)), O.TOP_LEFT) : new d(r.left + I + D, r.top + C + N), this.topRightContentBox = i > 0 || o > 0 ? P(r.left + Math.min(F, r.width + I + D), r.top + C + N, F > r.width + I + D ? 0 : i - I + D, o - (C + N), O.TOP_RIGHT) : new d(r.left + r.width - (L + j), r.top + C + N), this.bottomRightContentBox = l > 0 || u > 0 ? P(r.left + Math.min(m, r.width - (I + D)), r.top + Math.min(K, r.height + C + N), Math.max(0, l - (L + j)), u - (E + q), O.BOTTOM_RIGHT) : new d(r.left + r.width - (L + j), r.top + r.height - (E + q)), this.bottomLeftContentBox = g > 0 || w > 0 ? P(r.left + I + D, r.top + y, Math.max(0, g - (I + D)), w - (E + q), O.BOTTOM_LEFT) : new d(r.left + I + D, r.top + r.height - (E + q));
    }
    return e;
  }()
), O;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(O || (O = {}));
var P = function(e, A, t, r, n) {
  var B = 4 * ((Math.sqrt(2) - 1) / 3), a = t * B, s = r * B, i = e + t, o = A + r;
  switch (n) {
    case O.TOP_LEFT:
      return new rt(new d(e, o), new d(e, o - s), new d(i - a, A), new d(i, A));
    case O.TOP_RIGHT:
      return new rt(new d(e, A), new d(e + a, A), new d(i, o - s), new d(i, o));
    case O.BOTTOM_RIGHT:
      return new rt(new d(i, A), new d(i, A + s), new d(e + a, o), new d(e, o));
    case O.BOTTOM_LEFT:
    default:
      return new rt(new d(i, o), new d(i - a, o), new d(e, A + s), new d(e, A));
  }
}, dt = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, du = function(e) {
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
}, pu = (
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
), Hu = function(e) {
  return e.type === 0;
}, ca = function(e) {
  return e.type === 1;
}, vu = function(e) {
  return e.type === 2;
}, $n = function(e, A) {
  return e.length === A.length ? e.some(function(t, r) {
    return t === A[r];
  }) : !1;
}, Iu = function(e, A, t, r, n) {
  return e.map(function(B, a) {
    switch (a) {
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
      if (this.container = A, this.parent = t, this.effects = [], this.curves = new hu(this.container), this.container.styles.opacity < 1 && this.effects.push(new Eu(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, B = this.container.styles.transform;
        this.effects.push(new pu(r, n, B));
      }
      if (this.container.styles.overflowX !== 0) {
        var a = dt(this.curves), s = pt(this.curves);
        $n(a, s) ? this.effects.push(new nt(
          a,
          6
          /* CONTENT */
        )) : (this.effects.push(new nt(
          a,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new nt(
          s,
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
          return !ca(i);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, B), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var a = dt(r.curves), s = pt(r.curves);
            $n(a, s) || n.unshift(new nt(
              s,
              6
              /* CONTENT */
            ));
          }
        } else
          n.unshift.apply(n, B);
        r = r.parent;
      }
      return n.filter(function(i) {
        return eA(i.target, A);
      });
    }, e;
  }()
), Lr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var B = eA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), a = eA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), s = new ua(n, e);
    eA(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(s);
    var i = eA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (B || a) {
      var o = B || n.styles.isPositioned() ? t : A, c = new la(s);
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
      Lr(s, c, B ? c : t, i);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(s) : A.nonInlineLevel.push(s), Lr(s, A, t, i);
    eA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && ga(n, i);
  });
}, ga = function(e, A) {
  for (var t = e instanceof vr ? e.start : 1, r = e instanceof vr ? e.reversed : !1, n = 0; n < A.length; n++) {
    var B = A[n];
    B.container instanceof zB && typeof B.container.value == "number" && B.container.value !== 0 && (t = B.container.value), B.listValue = Se(t, B.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, mu = function(e) {
  var A = new ua(e, null), t = new la(A), r = [];
  return Lr(A, t, t, r), ga(A.container, r), t;
}, AB = function(e, A) {
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
}, yu = function(e, A) {
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
}, Ku = function(e, A) {
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
}, Lu = function(e, A) {
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
}, Qa = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Et = function(e) {
  var A = e.styles, t = e.bounds, r = k(A.paddingLeft, t.width), n = k(A.paddingRight, t.width), B = k(A.paddingTop, t.width), a = k(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, B + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + B + a));
}, bu = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Et(A) : Qa(A);
}, xu = function(e, A) {
  return e === 0 ? A.bounds : e === 2 ? Et(A) : Qa(A);
}, nr = function(e, A, t) {
  var r = bu(ne(e.styles.backgroundOrigin, A), e), n = xu(ne(e.styles.backgroundClip, A), e), B = Du(ne(e.styles.backgroundSize, A), t, r), a = B[0], s = B[1], i = de(ne(e.styles.backgroundPosition, A), r.width - a, r.height - s), o = Tu(ne(e.styles.backgroundRepeat, A), i, B, r, n), c = Math.round(r.left + i[0]), l = Math.round(r.top + i[1]);
  return [o, c, l, a, s];
}, te = function(e) {
  return R(e) && e.value === ae.AUTO;
}, at = function(e) {
  return typeof e == "number";
}, Du = function(e, A, t) {
  var r = A[0], n = A[1], B = A[2], a = e[0], s = e[1];
  if (!a)
    return [0, 0];
  if (z(a) && s && z(s))
    return [k(a, t.width), k(s, t.height)];
  var i = at(B);
  if (R(a) && (a.value === ae.CONTAIN || a.value === ae.COVER)) {
    if (at(B)) {
      var o = t.width / t.height;
      return o < B != (a.value === ae.COVER) ? [t.width, t.width / B] : [t.height * B, t.height];
    }
    return [t.width, t.height];
  }
  var c = at(r), l = at(n), u = c || l;
  if (te(a) && (!s || te(s))) {
    if (c && l)
      return [r, n];
    if (!i && !u)
      return [t.width, t.height];
    if (u && i) {
      var Q = c ? r : n * B, g = l ? n : r / B;
      return [Q, g];
    }
    var w = c ? r : t.width, H = l ? n : t.height;
    return [w, H];
  }
  if (i) {
    var U = 0, F = 0;
    return z(a) ? U = k(a, t.width) : z(s) && (F = k(s, t.height)), te(a) ? U = F * B : (!s || te(s)) && (F = U / B), [U, F];
  }
  var K = null, m = null;
  if (z(a) ? K = k(a, t.width) : s && z(s) && (m = k(s, t.height)), K !== null && (!s || te(s)) && (m = c && l ? K / r * n : t.height), m !== null && te(a) && (K = c && l ? m / n * r : t.width), K !== null && m !== null)
    return [K, m];
  throw new Error("Unable to calculate background-size for element");
}, ne = function(e, A) {
  var t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Tu = function(e, A, t, r, n) {
  var B = A[0], a = A[1], s = t[0], i = t[1];
  switch (e) {
    case 2:
      return [
        new d(Math.round(r.left), Math.round(r.top + a)),
        new d(Math.round(r.left + r.width), Math.round(r.top + a)),
        new d(Math.round(r.left + r.width), Math.round(i + r.top + a)),
        new d(Math.round(r.left), Math.round(i + r.top + a))
      ];
    case 3:
      return [
        new d(Math.round(r.left + B), Math.round(r.top)),
        new d(Math.round(r.left + B + s), Math.round(r.top)),
        new d(Math.round(r.left + B + s), Math.round(r.height + r.top)),
        new d(Math.round(r.left + B), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new d(Math.round(r.left + B), Math.round(r.top + a)),
        new d(Math.round(r.left + B + s), Math.round(r.top + a)),
        new d(Math.round(r.left + B + s), Math.round(r.top + a + i)),
        new d(Math.round(r.left + B), Math.round(r.top + a + i))
      ];
    default:
      return [
        new d(Math.round(n.left), Math.round(n.top)),
        new d(Math.round(n.left + n.width), Math.round(n.top)),
        new d(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new d(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, Su = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", eB = "Hidden Text", Mu = (
  /** @class */
  function() {
    function e(A) {
      this._data = {}, this._document = A;
    }
    return e.prototype.parseMetrics = function(A, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), B = this._document.createElement("span"), a = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", a.appendChild(r), n.src = Su, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", B.style.fontFamily = A, B.style.fontSize = t, B.style.margin = "0", B.style.padding = "0", B.appendChild(this._document.createTextNode(eB)), r.appendChild(B), r.appendChild(n);
      var s = n.offsetTop - B.offsetTop + 2;
      r.removeChild(B), r.appendChild(this._document.createTextNode(eB)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var i = n.offsetTop - r.offsetTop + 2;
      return a.removeChild(r), { baseline: s, middle: i };
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
), Ou = 1e4, Nu = (
  /** @class */
  function(e) {
    vA(A, e);
    function A(t, r) {
      var n = e.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new Mu(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return A.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, A.prototype.applyEffect = function(t) {
      this.ctx.save(), vu(t) && (this.ctx.globalAlpha = t.opacity), Hu(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), ca(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
      var B = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var a = Or(t.text);
        a.reduce(function(s, i) {
          return B.ctx.fillText(i, s, t.bounds.top + n), s + B.ctx.measureText(i).width;
        }, t.bounds.left);
      }
    }, A.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(a) {
        return a === "normal" || a === "small-caps";
      }).join(""), n = _u(t.fontFamily).join(", "), B = Oe(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, B, n].join(" "),
        n,
        B
      ];
    }, A.prototype.renderTextNode = function(t, r) {
      return oA(this, void 0, void 0, function() {
        var n, B, a, s, i, o, c, l, u = this;
        return aA(this, function(Q) {
          return n = this.createFontStyle(r), B = n[0], a = n[1], s = n[2], this.ctx.font = B, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(a, s), o = i.baseline, c = i.middle, l = r.paintOrder, t.textBounds.forEach(function(g) {
            l.forEach(function(w) {
              switch (w) {
                case 0:
                  u.ctx.fillStyle = tA(r.color), u.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  var H = r.textShadow;
                  H.length && g.text.trim().length && (H.slice(0).reverse().forEach(function(U) {
                    u.ctx.shadowColor = tA(U.color), u.ctx.shadowOffsetX = U.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = U.offsetY.number * u.options.scale, u.ctx.shadowBlur = U.blur.number, u.renderTextWithLetterSpacing(g, r.letterSpacing, o);
                  }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = tA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(U) {
                    switch (U) {
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
        var B = Et(t), a = pt(r);
        this.path(a), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, B.left, B.top, B.width, B.height), this.ctx.restore();
      }
    }, A.prototype.renderNodeContent = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n, B, a, s, i, F, F, o, c, l, u, m, Q, g, y, w, H, U, F, K, m, y;
        return aA(this, function(C) {
          switch (C.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, B = r.styles, a = 0, s = r.textNodes, C.label = 1;
            case 1:
              return a < s.length ? (i = s[a], [4, this.renderTextNode(i, B)]) : [3, 4];
            case 2:
              C.sent(), C.label = 3;
            case 3:
              return a++, [3, 1];
            case 4:
              if (!(r instanceof WB))
                return [3, 8];
              C.label = 5;
            case 5:
              return C.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return F = C.sent(), this.renderReplacedElement(r, n, F), [3, 8];
            case 7:
              return C.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof YB && this.renderReplacedElement(r, n, r.canvas), !(r instanceof ZB))
                return [3, 12];
              C.label = 9;
            case 9:
              return C.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return F = C.sent(), this.renderReplacedElement(r, n, F), [3, 12];
            case 11:
              return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof $B && r.tree ? (o = new A(this.context, {
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
              if (r instanceof Nr && (l = Math.min(r.bounds.width, r.bounds.height), r.type === Ct ? r.checked && (this.ctx.save(), this.path([
                new d(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79),
                new d(r.bounds.left + l * 0.16, r.bounds.top + l * 0.5549),
                new d(r.bounds.left + l * 0.27347, r.bounds.top + l * 0.44071),
                new d(r.bounds.left + l * 0.39694, r.bounds.top + l * 0.5649),
                new d(r.bounds.left + l * 0.72983, r.bounds.top + l * 0.23),
                new d(r.bounds.left + l * 0.84, r.bounds.top + l * 0.34085),
                new d(r.bounds.left + l * 0.39363, r.bounds.top + l * 0.79)
              ]), this.ctx.fillStyle = tA(kn), this.ctx.fill(), this.ctx.restore()) : r.type === Ut && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + l / 2, r.bounds.top + l / 2, l / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = tA(kn), this.ctx.fill(), this.ctx.restore())), Ru(r) && r.value.length) {
                switch (u = this.createFontStyle(B), m = u[0], Q = u[1], g = this.fontMetrics.getMetrics(m, Q).baseline, this.ctx.font = m, this.ctx.fillStyle = tA(B.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Vu(r.styles.textAlign), y = Et(r), w = 0, r.styles.textAlign) {
                  case 1:
                    w += y.width / 2;
                    break;
                  case 2:
                    w += y.width;
                    break;
                }
                H = y.add(w, 0, 0, -y.height / 2 + 1), this.ctx.save(), this.path([
                  new d(y.left, y.top),
                  new d(y.left + y.width, y.top),
                  new d(y.left + y.width, y.top + y.height),
                  new d(y.left, y.top + y.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new me(r.value, H), B.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!eA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              ))
                return [3, 20];
              if (r.styles.listStyleImage === null)
                return [3, 19];
              if (U = r.styles.listStyleImage, U.type !== 0)
                return [3, 18];
              F = void 0, K = U.url, C.label = 15;
            case 15:
              return C.trys.push([15, 17, , 18]), [4, this.context.cache.match(K)];
            case 16:
              return F = C.sent(), this.ctx.drawImage(F, r.bounds.left - (F.width + 10), r.bounds.top), [3, 18];
            case 17:
              return C.sent(), this.context.logger.error("Error loading list-style-image " + K), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (m = this.createFontStyle(B)[0], this.ctx.font = m, this.ctx.fillStyle = tA(B.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", y = new xA(r.bounds.left, r.bounds.top + k(r.styles.paddingTop, r.bounds.width), r.bounds.width, vn(B.lineHeight, B.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new me(t.listValue, y), B.letterSpacing, vn(B.lineHeight, B.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
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
        var r, n, U, B, a, U, s, i, U, o, c, U, l, u, U, Q, g, U, w, H, U;
        return aA(this, function(F) {
          switch (F.label) {
            case 0:
              if (eA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              F.sent(), r = 0, n = t.negativeZIndex, F.label = 2;
            case 2:
              return r < n.length ? (U = n[r], [4, this.renderStack(U)]) : [3, 5];
            case 3:
              F.sent(), F.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              F.sent(), B = 0, a = t.nonInlineLevel, F.label = 7;
            case 7:
              return B < a.length ? (U = a[B], [4, this.renderNode(U)]) : [3, 10];
            case 8:
              F.sent(), F.label = 9;
            case 9:
              return B++, [3, 7];
            case 10:
              s = 0, i = t.nonPositionedFloats, F.label = 11;
            case 11:
              return s < i.length ? (U = i[s], [4, this.renderStack(U)]) : [3, 14];
            case 12:
              F.sent(), F.label = 13;
            case 13:
              return s++, [3, 11];
            case 14:
              o = 0, c = t.nonPositionedInlineLevel, F.label = 15;
            case 15:
              return o < c.length ? (U = c[o], [4, this.renderStack(U)]) : [3, 18];
            case 16:
              F.sent(), F.label = 17;
            case 17:
              return o++, [3, 15];
            case 18:
              l = 0, u = t.inlineLevel, F.label = 19;
            case 19:
              return l < u.length ? (U = u[l], [4, this.renderNode(U)]) : [3, 22];
            case 20:
              F.sent(), F.label = 21;
            case 21:
              return l++, [3, 19];
            case 22:
              Q = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, F.label = 23;
            case 23:
              return Q < g.length ? (U = g[Q], [4, this.renderStack(U)]) : [3, 26];
            case 24:
              F.sent(), F.label = 25;
            case 25:
              return Q++, [3, 23];
            case 26:
              w = 0, H = t.positiveZIndex, F.label = 27;
            case 27:
              return w < H.length ? (U = H[w], [4, this.renderStack(U)]) : [3, 30];
            case 28:
              F.sent(), F.label = 29;
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
      t.forEach(function(n, B) {
        var a = hA(n) ? n.start : n;
        B === 0 ? r.ctx.moveTo(a.x, a.y) : r.ctx.lineTo(a.x, a.y), hA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, A.prototype.renderRepeat = function(t, r, n, B) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, B), this.ctx.fill(), this.ctx.translate(-n, -B);
    }, A.prototype.resizeImage = function(t, r, n) {
      var B;
      if (t.width === r && t.height === n)
        return t;
      var a = (B = this.canvas.ownerDocument) !== null && B !== void 0 ? B : document, s = a.createElement("canvas");
      s.width = Math.max(1, r), s.height = Math.max(1, n);
      var i = s.getContext("2d");
      return i.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), s;
    }, A.prototype.renderBackgroundImage = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n, B, a, s, i;
        return aA(this, function(o) {
          switch (o.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var l, u, Q, N, $, AA, D, J, E, g, N, $, AA, D, J, w, H, U, F, K, m, y, C, L, E, I, N, j, q, D, J, fA, $, AA, CA, iA, uA, M, _, G, X, Z;
                return aA(this, function(UA) {
                  switch (UA.label) {
                    case 0:
                      if (c.type !== 0)
                        return [3, 5];
                      l = void 0, u = c.url, UA.label = 1;
                    case 1:
                      return UA.trys.push([1, 3, , 4]), [4, B.context.cache.match(u)];
                    case 2:
                      return l = UA.sent(), [3, 4];
                    case 3:
                      return UA.sent(), B.context.logger.error("Error loading background-image " + u), [3, 4];
                    case 4:
                      return l && (Q = nr(t, r, [
                        l.width,
                        l.height,
                        l.width / l.height
                      ]), N = Q[0], $ = Q[1], AA = Q[2], D = Q[3], J = Q[4], E = B.ctx.createPattern(B.resizeImage(l, D, J), "repeat"), B.renderRepeat(N, E, $, AA)), [3, 6];
                    case 5:
                      Ho(c) ? (g = nr(t, r, [null, null, null]), N = g[0], $ = g[1], AA = g[2], D = g[3], J = g[4], w = Uo(c.angle, D, J), H = w[0], U = w[1], F = w[2], K = w[3], m = w[4], y = document.createElement("canvas"), y.width = D, y.height = J, C = y.getContext("2d"), L = C.createLinearGradient(U, K, F, m), En(c.stops, H).forEach(function(EA) {
                        return L.addColorStop(EA.stop, tA(EA.color));
                      }), C.fillStyle = L, C.fillRect(0, 0, D, J), D > 0 && J > 0 && (E = B.ctx.createPattern(y, "repeat"), B.renderRepeat(N, E, $, AA))) : vo(c) && (I = nr(t, r, [
                        null,
                        null,
                        null
                      ]), N = I[0], j = I[1], q = I[2], D = I[3], J = I[4], fA = c.position.length === 0 ? [Tr] : c.position, $ = k(fA[0], D), AA = k(fA[fA.length - 1], J), CA = Fo(c, $, AA, D, J), iA = CA[0], uA = CA[1], iA > 0 && uA > 0 && (M = B.ctx.createRadialGradient(j + $, q + AA, 0, j + $, q + AA, iA), En(c.stops, iA * 2).forEach(function(EA) {
                        return M.addColorStop(EA.stop, tA(EA.color));
                      }), B.path(N), B.ctx.fillStyle = M, iA !== uA ? (_ = t.bounds.left + 0.5 * t.bounds.width, G = t.bounds.top + 0.5 * t.bounds.height, X = uA / iA, Z = 1 / X, B.ctx.save(), B.ctx.translate(_, G), B.ctx.transform(1, 0, 0, X, 0, 0), B.ctx.translate(-_, -G), B.ctx.fillRect(j, Z * (q - G) + G, D, J * Z), B.ctx.restore()) : B.ctx.fill())), UA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, B = this, a = 0, s = t.styles.backgroundImage.slice(0).reverse(), o.label = 1;
            case 1:
              return a < s.length ? (i = s[a], [5, n(i)]) : [3, 4];
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
        return aA(this, function(B) {
          return this.path(AB(n, r)), this.ctx.fillStyle = tA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, A.prototype.renderDoubleBorder = function(t, r, n, B) {
      return oA(this, void 0, void 0, function() {
        var a, s;
        return aA(this, function(i) {
          switch (i.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, B)] : [3, 2];
            case 1:
              return i.sent(), [
                2
                /*return*/
              ];
            case 2:
              return a = yu(B, n), this.path(a), this.ctx.fillStyle = tA(t), this.ctx.fill(), s = Ku(B, n), this.path(s), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
      return oA(this, void 0, void 0, function() {
        var r, n, B, a, s, i, o, c, l = this;
        return aA(this, function(u) {
          switch (u.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !VA(r.backgroundColor) || r.backgroundImage.length, B = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], a = Gu(ne(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(a), this.ctx.clip(), VA(r.backgroundColor) || (this.ctx.fillStyle = tA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(Q) {
                l.ctx.save();
                var g = dt(t.curves), w = Q.inset ? 0 : Ou, H = Iu(g, -w + (Q.inset ? 1 : -1) * Q.spread.number, (Q.inset ? 1 : -1) * Q.spread.number, Q.spread.number * (Q.inset ? -2 : 2), Q.spread.number * (Q.inset ? -2 : 2));
                Q.inset ? (l.path(g), l.ctx.clip(), l.mask(H)) : (l.mask(g), l.ctx.clip(), l.path(H)), l.ctx.shadowOffsetX = Q.offsetX.number + w, l.ctx.shadowOffsetY = Q.offsetY.number, l.ctx.shadowColor = tA(Q.color), l.ctx.shadowBlur = Q.blur.number, l.ctx.fillStyle = Q.inset ? tA(Q.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
              }), u.label = 2;
            case 2:
              s = 0, i = 0, o = B, u.label = 3;
            case 3:
              return i < o.length ? (c = o[i], c.style !== 0 && !VA(c.color) && c.width > 0 ? c.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                c.color,
                c.width,
                s,
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
                s,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return u.sent(), [3, 11];
            case 7:
              return c.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(c.color, c.width, s, t.curves)];
            case 8:
              return u.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(c.color, s, t.curves)];
            case 10:
              u.sent(), u.label = 11;
            case 11:
              s++, u.label = 12;
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
    }, A.prototype.renderDashedDottedBorder = function(t, r, n, B, a) {
      return oA(this, void 0, void 0, function() {
        var s, i, o, c, l, u, Q, g, w, H, U, F, K, m, y, C, y, C;
        return aA(this, function(L) {
          return this.ctx.save(), s = Lu(B, n), i = AB(B, n), a === 2 && (this.path(i), this.ctx.clip()), hA(i[0]) ? (o = i[0].start.x, c = i[0].start.y) : (o = i[0].x, c = i[0].y), hA(i[1]) ? (l = i[1].end.x, u = i[1].end.y) : (l = i[1].x, u = i[1].y), n === 0 || n === 2 ? Q = Math.abs(o - l) : Q = Math.abs(c - u), this.ctx.beginPath(), a === 3 ? this.formatPath(s) : this.formatPath(i.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, a === 3 && (g = r, w = r), H = !0, Q <= g * 2 ? H = !1 : Q <= g * 2 + w ? (U = Q / (2 * g + w), g *= U, w *= U) : (F = Math.floor((Q + w) / (g + w)), K = (Q - F * g) / (F - 1), m = (Q - (F + 1) * g) / F, w = m <= 0 || Math.abs(w - K) < Math.abs(w - m) ? K : m), H && (a === 3 ? this.ctx.setLineDash([0, g + w]) : this.ctx.setLineDash([g, w])), a === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = tA(t), this.ctx.stroke(), this.ctx.setLineDash([]), a === 2 && (hA(i[0]) && (y = i[3], C = i[0], this.ctx.beginPath(), this.formatPath([new d(y.end.x, y.end.y), new d(C.start.x, C.start.y)]), this.ctx.stroke()), hA(i[1]) && (y = i[1], C = i[2], this.ctx.beginPath(), this.formatPath([new d(y.end.x, y.end.y), new d(C.start.x, C.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
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
              return this.options.backgroundColor && (this.ctx.fillStyle = tA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = mu(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, A;
  }(wa)
), Ru = function(e) {
  return e instanceof qB || e instanceof jB ? !0 : e instanceof Nr && e.type !== Ut && e.type !== Ct;
}, Gu = function(e, A) {
  switch (e) {
    case 0:
      return dt(A);
    case 2:
      return du(A);
    case 1:
    default:
      return pt(A);
  }
}, Vu = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, ku = ["-apple-system", "system-ui"], _u = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return ku.indexOf(A) === -1;
  }) : e;
}, Pu = (
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
        return aA(this, function(B) {
          switch (B.label) {
            case 0:
              return r = Hr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Xu(r)];
            case 1:
              return n = B.sent(), this.options.backgroundColor && (this.ctx.fillStyle = tA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, A;
  }(wa)
), Xu = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Ju = (
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
), Wu = (
  /** @class */
  function() {
    function e(A, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Ju({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new gu(this, A);
    }
    return e.instanceCount = 1, e;
  }()
), Yu = function(e, A) {
  return A === void 0 && (A = {}), Zu(e, A);
};
typeof window < "u" && oa.setContext(window);
var Zu = function(e, A) {
  return oA(void 0, void 0, void 0, function() {
    var t, r, n, B, a, s, i, o, c, l, u, Q, g, w, H, U, F, K, m, y, L, C, L, E, I, N, j, q, D, J, fA, $, AA, CA, iA, uA, M, _, G, X;
    return aA(this, function(Z) {
      switch (Z.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = e.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (E = A.allowTaint) !== null && E !== void 0 ? E : !1,
            imageTimeout: (I = A.imageTimeout) !== null && I !== void 0 ? I : 15e3,
            proxy: A.proxy,
            useCORS: (N = A.useCORS) !== null && N !== void 0 ? N : !1
          }, B = or({ logging: (j = A.logging) !== null && j !== void 0 ? j : !0, cache: A.cache }, n), a = {
            windowWidth: (q = A.windowWidth) !== null && q !== void 0 ? q : r.innerWidth,
            windowHeight: (D = A.windowHeight) !== null && D !== void 0 ? D : r.innerHeight,
            scrollX: (J = A.scrollX) !== null && J !== void 0 ? J : r.pageXOffset,
            scrollY: (fA = A.scrollY) !== null && fA !== void 0 ? fA : r.pageYOffset
          }, s = new xA(a.scrollX, a.scrollY, a.windowWidth, a.windowHeight), i = new Wu(B, s), o = ($ = A.foreignObjectRendering) !== null && $ !== void 0 ? $ : !1, c = {
            allowTaint: (AA = A.allowTaint) !== null && AA !== void 0 ? AA : !1,
            onclone: A.onclone,
            ignoreElements: A.ignoreElements,
            inlineImages: o,
            copyStyles: o
          }, i.logger.debug("Starting document clone with size " + s.width + "x" + s.height + " scrolled to " + -s.left + "," + -s.top), l = new jn(i, e, c), u = l.clonedReferenceElement, u ? [4, l.toIFrame(t, s)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return Q = Z.sent(), g = Rr(u) || zl(u) ? vs(u.ownerDocument) : Ht(i, u), w = g.width, H = g.height, U = g.left, F = g.top, K = zu(i, u, A.backgroundColor), m = {
            canvas: A.canvas,
            backgroundColor: K,
            scale: (iA = (CA = A.scale) !== null && CA !== void 0 ? CA : r.devicePixelRatio) !== null && iA !== void 0 ? iA : 1,
            x: ((uA = A.x) !== null && uA !== void 0 ? uA : 0) + U,
            y: ((M = A.y) !== null && M !== void 0 ? M : 0) + F,
            width: (_ = A.width) !== null && _ !== void 0 ? _ : Math.ceil(w),
            height: (G = A.height) !== null && G !== void 0 ? G : Math.ceil(H)
          }, o ? (i.logger.debug("Document cloned, using foreign object rendering"), L = new Pu(i, m), [4, L.render(u)]) : [3, 3];
        case 2:
          return y = Z.sent(), [3, 5];
        case 3:
          return i.logger.debug("Document cloned, element located at " + U + "," + F + " with size " + w + "x" + H + " using computed rendering"), i.logger.debug("Starting DOM parsing"), C = ea(i, u), K === C.styles.backgroundColor && (C.styles.backgroundColor = bA.TRANSPARENT), i.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height), L = new Nu(i, m), [4, L.render(C)];
        case 4:
          y = Z.sent(), Z.label = 5;
        case 5:
          return (!((X = A.removeContainer) !== null && X !== void 0) || X) && (jn.destroy(Q) || i.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), i.logger.debug("Finished rendering"), [2, y];
      }
    });
  });
}, zu = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? ve(e, getComputedStyle(r.documentElement).backgroundColor) : bA.TRANSPARENT, B = r.body ? ve(e, getComputedStyle(r.body).backgroundColor) : bA.TRANSPARENT, a = typeof t == "string" ? ve(e, t) : t === null ? bA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? VA(n) ? VA(B) ? a : B : n : a;
};
const lt = {
  pdf: "Download PDF",
  image: "Download Image",
  csv: "Download Data (CSV)",
  link: "Link to Dataset"
}, ju = (e, A) => {
  const t = navigator.userAgent.match(/MSIE\s([\d.]+)/), r = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/), n = navigator.userAgent.match(/Edge/g);
  if ((t ? t[1] : r ? 11 : n ? 12 : -1) > -1) {
    const a = new Blob([e], {
      type: "image/png"
    });
    window.navigator.msSaveBlob(a, A);
  } else {
    const a = document.createElement("a");
    typeof a.download == "string" ? (a.href = e, a.download = A, a.onclick = (s) => document.body.removeChild(s.target), document.body.appendChild(a), a.click()) : window.open(e);
  }
}, fa = (e, A, t) => {
  const r = document.querySelector(`[data-download-id=${t}]`), n = (s) => {
    var i, o;
    return (i = s == null ? void 0 : s.dashboard) != null && i.title ? s.dashboard.title.replace(/\s+/g, "-").toLowerCase() + "-" + B.getDate() + B.getMonth() + B.getFullYear() : (o = s == null ? void 0 : s.general) != null && o.title ? s.general.title.replace(/\s+/g, "-").toLowerCase() + "-" + B.getDate() + B.getMonth() + B.getFullYear() : s != null && s.title ? s.title.replace(/\s+/g, "-").toLowerCase() + "-" + B.getDate() + B.getMonth() + B.getFullYear() : "no-title";
  }, B = /* @__PURE__ */ new Date(), a = n(e);
  switch (A) {
    case "image":
      Yu(r, { foreignObjectRendering: !0, x: -1 * (window.pageXOffset + r.getBoundingClientRect().left), y: -1 * (window.pageYOffset + r.getBoundingClientRect().top) }).then((s) => {
        ju(s.toDataURL(), a + ".png");
      });
      return;
    case "pdf":
      console.warn("COVE: pdf downloads disabled");
      break;
    default:
      console.warn("COVE: generateMedia param 2 type must be 'image' or 'pdf'");
      break;
  }
}, qu = (e) => e != null && e.headerColor ? e.headerColor : e != null && e.theme ? e.theme : "theme-notFound", $u = ({ state: e, text: A, type: t, title: r, elementToCapture: n }) => {
  const B = ["btn", "btn-download", `${qu(e)}`];
  return /* @__PURE__ */ h.createElement("button", { className: B.join(" "), title: r, onClick: () => fa(e, t, n), style: { lineHeight: "1.4em" } }, lt[t]);
}, Ag = ({ config: e, dashboardDataConfig: A }) => {
  var r;
  let t = A || e;
  return t.dataFileSourceType === "url" && t.dataFileName && e.table.showDownloadUrl ? /* @__PURE__ */ h.createElement("a", { href: t.dataFileName, title: lt.link, target: "_blank" }, lt.link) : (r = e == null ? void 0 : e.table) != null && r.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ h.createElement("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank" }, lt.link) : null;
}, eg = ({ children: e, classes: A }) => /* @__PURE__ */ h.createElement("section", { className: A.join(" ") }, /* @__PURE__ */ h.createElement("span", null, e)), ie = () => null;
ie.Section = eg;
ie.Link = Ag;
ie.Button = $u;
ie.generateMedia = fa;
const tg = ({ rawData: e, fileName: A, headerColor: t, skipId: r }) => {
  const n = Fa.unparse(e), B = new Blob([n], { type: "text/csv;charset=utf-8;" }), a = () => {
    typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(B, A);
  };
  return /* @__PURE__ */ h.createElement("a", { download: A, type: "button", onClick: a, href: URL.createObjectURL(B), "aria-label": "Download this data in a CSV file format.", className: `${t} no-border`, id: `${r}`, "data-html2canvas-ignore": !0, role: "button" }, "Download Data (CSV)");
}, rg = {
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
}, tB = (e) => {
  if (typeof e != "string" || !isNaN(Number(e)))
    return e;
  const A = e.toUpperCase();
  return ["U.S. VIRGIN ISLANDS", "VI", "US VIRGIN ISLANDS", "VIRGIN ISLANDS"].includes(A) ? "U.S. VIRGIN ISLANDS" : rg[A] || e;
}, ut = (e, A, t, r) => {
  var c;
  let n = e, B = A;
  if (r.type === "map" && (n = tB(e), B = tB(A), String(n).toLowerCase().includes("region") && String(B).toLowerCase().includes("region"))) {
    const l = parseInt(e.match(/\d+$/)[0], 10), u = parseInt(A.match(/\d+$/)[0], 10);
    return t.asc ? Number(u) - Number(l) : Number(l) - Number(u);
  }
  n = n === !1 || n === !0 || n === null ? "" : n, B = B === !1 || B === !0 || B === null ? "" : B;
  const a = String(n).trim(), s = String(B).trim();
  if (((c = r.xAxis) == null ? void 0 : c.dataKey) === t.column && r.xAxis.type === "date") {
    let l = sr(r.xAxis.dateParseFormat, a), u = sr(r.xAxis.dateParseFormat, s);
    return l && l.getTime && (l = l.getTime()), u && u.getTime && (u = u.getTime()), t.asc ? u - l : l - u;
  }
  const i = !isNaN(Number(n)) && n !== void 0 && n !== null && a !== "", o = !isNaN(Number(B)) && B !== void 0 && B !== null && s !== "";
  return a === "" && s !== "" ? t.asc ? 1 : -1 : a !== "" && s === "" ? t.asc ? -1 : 1 : i && o ? t.asc ? Number(B) - Number(n) : Number(n) - Number(B) : i ? t.asc ? 1 : -1 : o ? t.asc ? -1 : 1 : t.asc ? s.localeCompare(a) : a.localeCompare(s);
}, ng = (e, A) => {
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
}, XA = (e, A, t, r) => {
  var s, i, o, c, l, u;
  if (t.table.customTableConfig || t.visualizationType === "Sankey" || (s = r == null ? void 0 : r[0]) != null && s.tableData)
    return r[e][A];
  const n = r[e];
  let B, a = n[A];
  if (A === ((i = t.xAxis) == null ? void 0 : i.dataKey))
    B = ((o = t.xAxis) == null ? void 0 : o.type) === "date" ? Hs(((c = t.table) == null ? void 0 : c.dateDisplayFormat) || ((l = t.xAxis) == null ? void 0 : l.dateDisplayFormat), sr((u = t.xAxis) == null ? void 0 : u.dateParseFormat, a)) : a;
  else {
    let Q = "left", g = t.series ? t.series.filter((U) => (U == null ? void 0 : U.axis) === "Left") : [], w = t.series ? t.series.filter((U) => (U == null ? void 0 : U.axis) === "Right") : [];
    g.map((U) => {
      U.dataKey === A && (Q = "left");
    }), w.map((U) => {
      U.dataKey === A && (Q = "right");
    });
    let H = ng(A, t);
    H ? B = t.dataFormat ? en(r[e][A], Q, !1, t, H) : r[e][A] : B = t.dataFormat ? en(r[e][A], Q, !1, t) : r[e][A];
  }
  return B;
}, Bg = (e, A) => {
  const r = Object.values(A.columns || {}).find((n) => n.name === e);
  return r != null && r.label ? r.label : e;
}, Ca = (e, A) => {
  var n, B;
  const t = (n = A.series) == null ? void 0 : n.find((a) => a.dataKey === e);
  return t != null && t.name ? t.name : A.runtimeSeriesLabels && A.runtimeSeriesLabels[e] ? A.runtimeSeriesLabels[e] : e === ((B = A.xAxis) == null ? void 0 : B.dataKey) ? A.table.indexLabel : Bg(e, A);
}, Ua = (e, A, t) => {
  var n, B, a, s;
  if (e.table.customTableConfig || e.type === "table")
    return t[0] ? Object.keys(t[0]) : [];
  let r;
  return e.visualizationType !== "Pie" ? (r = A ? [(n = e.xAxis) == null ? void 0 : n.dataKey] : [], e.series ? e.series.forEach((i) => {
    r.push(i.dataKey);
  }) : t && t.length > 0 && (r = Object.keys(t[0]))) : r = A ? [(B = e.xAxis) == null ? void 0 : B.dataKey, (a = e.yAxis) == null ? void 0 : a.dataKey] : [(s = e.yAxis) == null ? void 0 : s.dataKey], e.columns && Object.keys(e.columns).length > 0 && Object.keys(e.columns).forEach(function(i) {
    var c;
    var o = e.columns[i];
    o.name !== ((c = e.xAxis) == null ? void 0 : c.dataKey) && o.dataTable === !0 && r.push(o.name);
  }), r;
}, br = () => /* @__PURE__ */ h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ h.createElement("path", { d: "M0 5l5-5 5 5z" })), xr = () => /* @__PURE__ */ h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5" }, /* @__PURE__ */ h.createElement("path", { d: "M0 0l5 5 5-5z" })), ag = ({ data: e, isVertical: A, config: t, setSortBy: r, sortBy: n, groupBy: B, hasRowType: a }) => {
  if (!e)
    return;
  let s = Ua(t, A, e);
  if (B) {
    let i = s.filter((o) => o !== B);
    i.length != s.length && (s = i);
  }
  if (A) {
    if (a) {
      const i = /row[_-]?type/i, o = s.findIndex((c) => i.test(c));
      o > -1 && s.splice(o, 1);
    }
    return /* @__PURE__ */ h.createElement("tr", null, s.map((i, o) => {
      const c = Ca(i, t);
      return /* @__PURE__ */ h.createElement(
        "th",
        {
          style: { minWidth: (t.table.cellMinWidth || 0) + "px" },
          key: `col-header-${i}__${o}`,
          tabIndex: 0,
          title: c,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            a || r({ column: i, asc: n.column === i ? !n.asc : !1, colIndex: o });
          },
          onKeyDown: (l) => {
            a || l.keyCode === 13 && r({ column: i, asc: n.column === i ? !n.asc : !1, colIndex: o });
          },
          className: n.column === i ? n.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
          ...n.column === i ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        c,
        i === n.column && /* @__PURE__ */ h.createElement("span", { className: "sort-icon" }, n.asc ? /* @__PURE__ */ h.createElement(xr, null) : /* @__PURE__ */ h.createElement(br, null)),
        /* @__PURE__ */ h.createElement("button", null, /* @__PURE__ */ h.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${c} in ${n.column === i && n.asc ? "ascending" : "descending"} `, " order"))
      );
    }));
  } else {
    const i = t.visualizationType === "Pie" ? 1 : 0;
    return /* @__PURE__ */ h.createElement("tr", null, ["__series__", ...Object.keys(e)].slice(i).map((o, c) => {
      var Q;
      let l = (Q = t.xAxis) == null ? void 0 : Q.dataKey, u = o !== "__series__" ? XA(o, l, t, e) : "__series__";
      return /* @__PURE__ */ h.createElement(
        "th",
        {
          style: { minWidth: (t.table.cellMinWidth || 0) + "px" },
          key: `col-header-${u}__${c}`,
          tabIndex: 0,
          title: u,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            r({ column: u, asc: n.column === u ? !n.asc : !1, colIndex: c });
          },
          onKeyDown: (g) => {
            g.keyCode === 13 && r({ column: u, asc: n.column === u ? !n.asc : !1, colIndex: c });
          },
          className: n.column === u ? n.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
          ...n.column === u ? n.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null
        },
        u === "__series__" ? "" : u,
        c === n.colIndex && /* @__PURE__ */ h.createElement("span", { className: "sort-icon" }, n.asc ? /* @__PURE__ */ h.createElement(xr, null) : /* @__PURE__ */ h.createElement(br, null)),
        /* @__PURE__ */ h.createElement("button", null, /* @__PURE__ */ h.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${u} in ${n.column === u && n.asc ? "ascending" : "descending"} `, " order"))
      );
    }));
  }
}, sg = ({ categories: e }) => {
  let A = ["Measures", ...e];
  return /* @__PURE__ */ h.createElement("tr", null, A.map((t) => /* @__PURE__ */ h.createElement("th", { key: `col-header-${t}`, tabIndex: 0, title: t, role: "columnheader", scope: "col" }, t)));
}, ig = ({ columns: e, config: A, indexTitle: t, sortBy: r, setSortBy: n }) => /* @__PURE__ */ h.createElement("tr", null, Object.keys(e).filter((B) => e[B].dataTable === !0 && e[B].name).map((B, a) => {
  var i;
  let s;
  return B !== "geo" ? s = e[B].label ? e[B].label : e[B].name : s = A.type === "map" ? t : (i = A.xAxis) == null ? void 0 : i.dataKey, A.type === "map" && (s === void 0 || s === "") && (s = "Location"), /* @__PURE__ */ h.createElement(
    "th",
    {
      key: `col-header-${B}__${a}`,
      id: B,
      tabIndex: 0,
      title: s,
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
    s,
    r.column === B && /* @__PURE__ */ h.createElement("span", { className: "sort-icon" }, r.asc ? /* @__PURE__ */ h.createElement(xr, null) : /* @__PURE__ */ h.createElement(br, null)),
    /* @__PURE__ */ h.createElement("button", null, /* @__PURE__ */ h.createElement("span", { className: "cdcdataviz-sr-only" }, `Sort by ${s} in ${r.column === B && r.asc ? "ascending" : "descending"} `, " order"))
  );
})), rB = (e) => /* @__PURE__ */ h.createElement("a", { id: "skip-nav", className: "cdcdataviz-sr-only-focusable", href: `#${e}` }, "Skip Navigation or Skip to Content"), nB = ({ expanded: e, setExpanded: A, tableTitle: t }) => /* @__PURE__ */ h.createElement(
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
  /* @__PURE__ */ h.createElement(pa, { display: e ? "minus" : "plus", base: !0 }),
  t
), og = (e) => /* @__PURE__ */ SA.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ SA.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" })), cg = [
  "cdc.gov",
  "localhost",
  "facebook.com",
  "twitter.com",
  "linkedin.com",
  "pinterest.com",
  "youtube.com",
  "youtube-nocookie.com",
  "plus.google.com",
  "instagram.com",
  "flickr.com",
  "tumblr.com",
  "cdc.sharepoint.com",
  "vaccines.gov",
  "vacunas.gov"
], lg = ({ markup: e, row: A, columns: t, navigationHandler: r, mapZoomHandler: n }) => {
  const B = new URL(A[t.navigate.name], window.location.origin).hostname;
  let a = !0;
  return cg.forEach((s) => {
    B.indexOf(s) !== -1 && B.indexOf(s) === B.length - s.length && (a = !1);
  }), t.navigate && A[t.navigate.name] ? /* @__PURE__ */ h.createElement(
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
    a && /* @__PURE__ */ h.createElement(og, { className: "inline-icon" })
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
  ) : /* @__PURE__ */ h.createElement(h.Fragment, null, e);
}, ug = ({ rows: e, columns: A, runtimeData: t, config: r, applyLegendToRow: n, displayGeoName: B, formatLegendLocation: a, displayDataAsText: s, navigationHandler: i, setFilteredCountryCode: o }) => e.map(
  (c) => Object.keys(A).filter((l) => A[l].dataTable === !0 && A[l].name).map((l) => {
    let u;
    if (l === "geo") {
      const Q = t[c], g = n(Q);
      let w;
      const H = r.general.type === "bubble" && r.general.allowMapZoom && r.general.geoType === "world" ? () => o(c) : void 0;
      if (r.general.geoType !== "single-state" && r.general.geoType !== "us-county" || r.general.type === "us-geocode") {
        const U = (F) => F.charAt(0).toUpperCase() + F.slice(1);
        w = B(c), w = String(w).startsWith("region") ? U(w) : w;
      } else
        w = a(c);
      u = /* @__PURE__ */ h.createElement("div", { className: "col-12" }, /* @__PURE__ */ h.createElement(uB, { fill: g[0] }), /* @__PURE__ */ h.createElement(lg, { markup: w, row: Q, columns: A, navigationHandler: i, mapZoomHandler: H }));
    } else {
      let Q = "", g = r.columns[l].name;
      const { specialClasses: w } = r.legend;
      w && w.length && typeof w[0] == "object" && w.forEach((H) => {
        H.key === g && String(t[c][H.key]) === H.value && (Q = H.label);
      }), u = s(Q || t[c][g], l);
    }
    return u;
  })
), gg = ({ rows: e, runtimeData: A, config: t, isVertical: r, sortBy: n, colorScale: B, groupBy: a, hasRowType: s }) => {
  const i = Ua(t, r, A), o = () => !n && n.colIndex === null ? i : i.sort((c, l) => {
    if (n.column === "__series__")
      return ut(c, l, n, t);
    let u = A.find((g) => {
      var w;
      return g[(w = t.xAxis) == null ? void 0 : w.dataKey] === n.column;
    });
    const Q = A[n.colIndex - 1];
    if (u)
      return ut(u[c], u[l], n, t);
    if (u === void 0 && Q)
      return ut(Q[c], Q[l], n, t);
  });
  if (r)
    if (a) {
      const c = {};
      return e.forEach((l) => {
        let u, Q = [];
        i.forEach((g, w) => {
          a === g ? u = XA(l, g, t, A) : Q.push(XA(l, g, t, A));
        }), c[u] ? c[u].push(Q) : c[u] = [Q];
      }), c;
    } else
      return e.map((c) => {
        if (s) {
          let l, u = [];
          return i.forEach((Q, g) => {
            Q.match(/row[_-]?type/i) ? l = XA(c, Q, t, A) : u.push(XA(c, Q, t, A));
          }), [l, ...u];
        } else
          return i.map((l, u) => XA(c, l, t, A));
      });
  else
    return o().map((c) => {
      const l = Ca(c, t);
      return (t.visualizationType !== "Pie" ? [
        /* @__PURE__ */ h.createElement(h.Fragment, null, B && B(l) && /* @__PURE__ */ h.createElement(uB, { fill: B(l) }), l)
      ] : []).concat(e.map((Q, g) => XA(Q, c, t, A)));
    });
}, Qg = ({ config: e }) => e.regions.map((A) => e.visualizationType === "Box Plot" ? [] : !Object.keys(A).includes("from") || !Object.keys(A).includes("to") ? [] : [A.label, A.from, A.to]), wg = ({ rows: e, config: A }) => {
  const t = (a) => {
    let {
      boxplot: { labels: s }
    } = A;
    return {
      columnMean: s.mean,
      columnMax: s.maximum,
      columnMin: s.minimum,
      columnIqr: s.iqr,
      columnCategory: "Category",
      columnMedian: s.median,
      columnFirstQuartile: s.q1,
      columnThirdQuartile: s.q3,
      columnOutliers: s.outliers,
      values: s.values,
      columnTotal: s.total,
      columnSd: "Standard Deviation",
      nonOutlierValues: "Non Outliers",
      columnLowerBounds: s.lowerBounds,
      columnUpperBounds: s.upperBounds
    }[a];
  };
  let r = (a, s) => Number(a) === 0 ? !0 : Number(a) === 1 ? s.columnMax : Number(a) === 2 ? s.columnThirdQuartile : Number(a) === 3 ? s.columnMedian : Number(a) === 4 ? s.columnFirstQuartile : Number(a) === 5 ? s.columnMin : Number(a) === 6 ? s.columnTotal : Number(a) === 7 ? s.columnSd : Number(a) === 8 ? s.columnMean : Number(a) === 9 ? s.columnOutliers.length > 0 ? s.columnOutliers.toString() : "-" : Number(a) === 10 ? s.values.length > 0 ? s.values.toString() : "-" : /* @__PURE__ */ h.createElement("p", null, "-"), n = e.map((a) => a[0]), B = ["Measures", ...A.boxplot.categories];
  return n.shift(), n.map((a, s) => B.map((i, o) => {
    let c;
    if (i === "Measures") {
      let l = s > 0 ? t(a) : "";
      c = /* @__PURE__ */ h.createElement(h.Fragment, null, l);
    } else
      c = r(s, A.boxplot.plots[o - 1]);
    return c;
  }));
}, fg = (e, A = []) => {
  if (Array.isArray(e)) {
    const t = {};
    return e.forEach((r) => {
      Object.keys(r).forEach((n) => {
        t[n] === void 0 && (t[n] = null), r[n] !== null && !A.includes(n) && (t[n] = !0);
      });
    }), e.map((r) => {
      const n = {};
      return Object.keys(r).forEach((B) => {
        B.match(/row[_-]?type/i) && (n.row_type = r[B]), t[B] === !0 && (n[B] = r[B]);
      }), n;
    });
  } else
    return e;
}, vg = (e) => {
  var $, AA, CA, iA, uA;
  const { config: A, dataConfig: t, tableTitle: r, vizTitle: n, rawData: B, runtimeData: a, headerColor: s, expandDataTable: i, columns: o, viewport: c, formatLegendLocation: l, tabbingId: u, wrapColumns: Q } = e, [g, w] = SA.useState(i), [H, U] = SA.useState({ column: A.type === "map" ? "geo" : "date", asc: !1, colIndex: null }), [F, K] = SA.useState(""), m = !(A.type === "chart" && !(($ = A.table) != null && $.showVertical)), C = `btn__${Math.random().toString(16).substr(2, 8)}`, L = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  };
  switch (SA.useEffect(() => {
    const M = "Accessible data table.", _ = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    g === !0 && F !== M && K(M), g === !1 && F !== _ && K(_);
  }, [g]), A.visualizationType) {
    case "Box Plot":
      if (!A.boxplot)
        return /* @__PURE__ */ h.createElement(Tt, null);
      break;
    case "Line":
      if (!a)
        return /* @__PURE__ */ h.createElement(Tt, null);
      break;
    default:
      if (!a)
        return /* @__PURE__ */ h.createElement(Tt, null);
      break;
  }
  const E = A.table.customTableConfig ? fg(B, A.table.excludeColumns) : a, I = Object.keys(E).filter((M) => M != "columns"), N = m ? I.sort((M, _) => {
    let G, X;
    if (A.type === "map" && A.columns) {
      const Z = A.columns[H.column].name;
      G = E[M][Z], X = E[_][Z];
    }
    return (A.type === "chart" || A.type === "dashboard") && (G = E[M][H.column], X = E[_][H.column]), !G && !X && A.type === "chart" && A.xAxis && A.xAxis.type === "date" && A.xAxis.sortDates && (G = gt(A.runtime.xAxis.dateParseFormat)(E[M][A.xAxis.dataKey]), X = gt(A.runtime.xAxis.dateParseFormat)(E[_][A.xAxis.dataKey])), G && X ? ut(G, X, H, A) : 0;
  }) : I, j = {
    maxHeight: A.table.limitHeight && `${A.table.height}px`,
    OverflowY: "scroll"
  }, q = !!Object.keys((B == null ? void 0 : B[0]) || {}).find((M) => M.match(/row[_-]?type/i)), D = SA.useMemo(() => A.type === "map" ? A.table.caption ? A.table.caption : `Data table showing data for the ${L[A.general.geoType]} figure.` : A.table.caption ? A.table.caption : `Data table showing data for the ${A.type} figure.`, [A.table.caption]), J = (AA = A == null ? void 0 : A.regions) == null ? void 0 : AA.every((M) => {
    const _ = M.toType === "Fixed", G = M.fromType === "Fixed", X = !M.toType, Z = !M.fromType;
    return _ && G || X && Z || _ && Z || G && X;
  }), fA = SA.useMemo(
    () => {
      var M, _, G, X, Z, UA, EA;
      return (_ = (M = A.data) == null ? void 0 : M[0]) != null && _.tableData ? (X = (G = A.data) == null ? void 0 : G[0]) == null ? void 0 : X.tableData : A.visualizationType === "Sankey" ? (UA = (Z = A.data) == null ? void 0 : Z[0]) == null ? void 0 : UA.tableData : A.visualizationType === "Pie" ? [A.yAxis.dataKey] : A.visualizationType === "Box Plot" ? Object.entries(A.boxplot.tableData[0]) : (EA = A.runtime) == null ? void 0 : EA.seriesKeys;
    },
    [(CA = A.runtime) == null ? void 0 : CA.seriesKeys]
  );
  if (A.visualizationType !== "Box Plot") {
    const M = () => {
      var _;
      return ((_ = A.general) == null ? void 0 : _.geoType) === "us-county" ? B.map((G) => ({ FullGeoName: l(G[A.columns.geo.name]), ...G })) : B;
    };
    return /* @__PURE__ */ h.createElement(kr, { component: "DataTable" }, /* @__PURE__ */ h.createElement(ie.Section, { classes: ["download-links"] }, /* @__PURE__ */ h.createElement(ie.Link, { config: A, dashboardDataConfig: t }), (A.table.download || ((iA = A.general) == null ? void 0 : iA.showDownloadButton)) && /* @__PURE__ */ h.createElement(tg, { rawData: M(), fileName: `${n || "data-table"}.csv`, headerColor: s, skipId: C })), /* @__PURE__ */ h.createElement("section", { id: u.replace("#", ""), className: `data-table-container ${c}`, "aria-label": F }, /* @__PURE__ */ h.createElement(rB, { skipId: C }), /* @__PURE__ */ h.createElement(nB, { expanded: g, setExpanded: w, tableTitle: r }), /* @__PURE__ */ h.createElement("div", { className: "table-container", style: j }, /* @__PURE__ */ h.createElement(
      St,
      {
        wrapColumns: Q,
        childrenMatrix: A.type === "map" ? ug({ rows: N, wrapColumns: Q, ...e, runtimeData: E }) : gg({ rows: N, ...e, runtimeData: E, isVertical: m, sortBy: H, hasRowType: q }),
        tableName: A.type,
        caption: D,
        stickyHeader: !0,
        hasRowType: q,
        headContent: A.type === "map" ? /* @__PURE__ */ h.createElement(ig, { columns: o, ...e, sortBy: H, setSortBy: U }) : /* @__PURE__ */ h.createElement(ag, { data: E, ...e, hasRowType: q, isVertical: m, sortBy: H, setSortBy: U }),
        tableOptions: { className: `${g ? "data-table" : "data-table cdcdataviz-sr-only"}${m ? "" : " horizontal"}`, "aria-live": "assertive", "aria-rowcount": (uA = A == null ? void 0 : A.data) != null && uA.length ? A.data.length : -1, hidden: !g }
      }
    ), J && A.regions && A.regions.length > 0 && A.visualizationType !== "Box Plot" && /* @__PURE__ */ h.createElement(
      St,
      {
        wrapColumns: Q,
        childrenMatrix: Qg({ config: A }),
        tableName: A.visualizationType,
        caption: "Table of the highlighted regions in the visualization",
        headContent: /* @__PURE__ */ h.createElement("tr", null, /* @__PURE__ */ h.createElement("th", null, "Region Name"), /* @__PURE__ */ h.createElement("th", null, "Start Date"), /* @__PURE__ */ h.createElement("th", null, "End Date")),
        tableOptions: { className: "region-table data-table" }
      }
    ))));
  } else
    return /* @__PURE__ */ h.createElement(kr, { component: "DataTable" }, /* @__PURE__ */ h.createElement("section", { id: u.replace("#", ""), className: `data-table-container ${c}`, "aria-label": F }, /* @__PURE__ */ h.createElement(rB, { skipId: C }), /* @__PURE__ */ h.createElement(nB, { expanded: g, setExpanded: w, tableTitle: r }), /* @__PURE__ */ h.createElement("div", { className: "table-container", style: j }, /* @__PURE__ */ h.createElement(
      St,
      {
        wrapColumns: Q,
        childrenMatrix: wg({ rows: fA, config: A }),
        tableName: A.visualizationType,
        caption: D,
        stickyHeader: !0,
        headContent: /* @__PURE__ */ h.createElement(sg, { categories: A.boxplot.categories }),
        tableOptions: { className: `${g ? "data-table" : "data-table cdcdataviz-sr-only"}`, "aria-live": "assertive", "aria-rowcount": 11, hidden: !g }
      }
    ))));
};
export {
  vg as D,
  uB as L,
  ie as M,
  Hs as a,
  en as f,
  Hg as g,
  lB as t
};
