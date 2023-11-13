import { c as Er, g as cf } from "./storybook-c5d32002.es.js";
import { r as V, R as X } from "./storybook-e61d95ab.es.js";
import { B as hE } from "./storybook-8d78bf52.es.js";
import { P as Ye } from "./storybook-b8c9afe4.es.js";
import { r as ta, R as vE, m as mE } from "./storybook-ac19c974.es.js";
import { c as bE, b as ac, a as yE, d as EE } from "./storybook-43b78725.es.js";
import { _ as Xn } from "./storybook-70f3d2a3.es.js";
import { i as lc } from "./storybook-9f3340e2.es.js";
import "./storybook-4ed993c7.es.js";
var Vo = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Vo.exports;
(function(t, r) {
  (function() {
    var o, s = "4.17.21", a = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", h = 500, b = "__lodash_placeholder__", g = 1, v = 2, E = 4, D = 1, O = 2, w = 1, M = 2, F = 4, R = 8, T = 16, A = 32, $ = 64, G = 128, z = 256, U = 512, q = 30, ne = "...", Q = 800, ue = 16, ve = 1, Ce = 2, Be = 3, Re = 1 / 0, de = 9007199254740991, tt = 17976931348623157e292, nt = 0 / 0, Le = 4294967295, Me = Le - 1, Tt = Le >>> 1, rn = [
      ["ary", G],
      ["bind", w],
      ["bindKey", M],
      ["curry", R],
      ["curryRight", T],
      ["flip", U],
      ["partial", A],
      ["partialRight", $],
      ["rearg", z]
    ], rt = "[object Arguments]", yt = "[object Array]", on = "[object AsyncFunction]", Bt = "[object Boolean]", ot = "[object Date]", zt = "[object DOMException]", Yt = "[object Error]", k = "[object Function]", it = "[object GeneratorFunction]", Y = "[object Map]", Et = "[object Number]", Pn = "[object Null]", _t = "[object Object]", Ra = "[object Promise]", Td = "[object Proxy]", tr = "[object RegExp]", Lt = "[object Set]", nr = "[object String]", qr = "[object Symbol]", Bd = "[object Undefined]", rr = "[object WeakMap]", Ld = "[object WeakSet]", or = "[object ArrayBuffer]", Tn = "[object DataView]", jo = "[object Float32Array]", ei = "[object Float64Array]", ti = "[object Int8Array]", ni = "[object Int16Array]", ri = "[object Int32Array]", oi = "[object Uint8Array]", ii = "[object Uint8ClampedArray]", si = "[object Uint16Array]", ai = "[object Uint32Array]", Md = /\b__p \+= '';/g, Fd = /\b(__p \+=) '' \+/g, $d = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Pa = /&(?:amp|lt|gt|quot|#39);/g, Ta = /[&<>"']/g, Wd = RegExp(Pa.source), Vd = RegExp(Ta.source), Gd = /<%-([\s\S]+?)%>/g, Ud = /<%([\s\S]+?)%>/g, Ba = /<%=([\s\S]+?)%>/g, Hd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qd = /^\w*$/, kd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, li = /[\\^$.*+?()[\]{}|]/g, zd = RegExp(li.source), ui = /^\s+/, Yd = /\s/, Kd = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Xd = /\{\n\/\* \[wrapped with (.+)\] \*/, Jd = /,? & /, Zd = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Qd = /[()=,{}\[\]\/\s]/, jd = /\\(\\)?/g, ep = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, La = /\w*$/, tp = /^[-+]0x[0-9a-f]+$/i, np = /^0b[01]+$/i, rp = /^\[object .+?Constructor\]$/, op = /^0o[0-7]+$/i, ip = /^(?:0|[1-9]\d*)$/, sp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, kr = /($^)/, ap = /['\n\r\u2028\u2029\\]/g, zr = "\\ud800-\\udfff", lp = "\\u0300-\\u036f", up = "\\ufe20-\\ufe2f", cp = "\\u20d0-\\u20ff", Ma = lp + up + cp, Fa = "\\u2700-\\u27bf", $a = "a-z\\xdf-\\xf6\\xf8-\\xff", fp = "\\xac\\xb1\\xd7\\xf7", dp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", pp = "\\u2000-\\u206f", gp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Wa = "A-Z\\xc0-\\xd6\\xd8-\\xde", Va = "\\ufe0e\\ufe0f", Ga = fp + dp + pp + gp, ci = "['’]", hp = "[" + zr + "]", Ua = "[" + Ga + "]", Yr = "[" + Ma + "]", Ha = "\\d+", vp = "[" + Fa + "]", qa = "[" + $a + "]", ka = "[^" + zr + Ga + Ha + Fa + $a + Wa + "]", fi = "\\ud83c[\\udffb-\\udfff]", mp = "(?:" + Yr + "|" + fi + ")", za = "[^" + zr + "]", di = "(?:\\ud83c[\\udde6-\\uddff]){2}", pi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Bn = "[" + Wa + "]", Ya = "\\u200d", Ka = "(?:" + qa + "|" + ka + ")", bp = "(?:" + Bn + "|" + ka + ")", Xa = "(?:" + ci + "(?:d|ll|m|re|s|t|ve))?", Ja = "(?:" + ci + "(?:D|LL|M|RE|S|T|VE))?", Za = mp + "?", Qa = "[" + Va + "]?", yp = "(?:" + Ya + "(?:" + [za, di, pi].join("|") + ")" + Qa + Za + ")*", Ep = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", _p = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ja = Qa + Za + yp, wp = "(?:" + [vp, di, pi].join("|") + ")" + ja, xp = "(?:" + [za + Yr + "?", Yr, di, pi, hp].join("|") + ")", Dp = RegExp(ci, "g"), Sp = RegExp(Yr, "g"), gi = RegExp(fi + "(?=" + fi + ")|" + xp + ja, "g"), Cp = RegExp([
      Bn + "?" + qa + "+" + Xa + "(?=" + [Ua, Bn, "$"].join("|") + ")",
      bp + "+" + Ja + "(?=" + [Ua, Bn + Ka, "$"].join("|") + ")",
      Bn + "?" + Ka + "+" + Xa,
      Bn + "+" + Ja,
      _p,
      Ep,
      Ha,
      wp
    ].join("|"), "g"), Ap = RegExp("[" + Ya + zr + Ma + Va + "]"), Ip = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Op = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Np = -1, Ae = {};
    Ae[jo] = Ae[ei] = Ae[ti] = Ae[ni] = Ae[ri] = Ae[oi] = Ae[ii] = Ae[si] = Ae[ai] = !0, Ae[rt] = Ae[yt] = Ae[or] = Ae[Bt] = Ae[Tn] = Ae[ot] = Ae[Yt] = Ae[k] = Ae[Y] = Ae[Et] = Ae[_t] = Ae[tr] = Ae[Lt] = Ae[nr] = Ae[rr] = !1;
    var De = {};
    De[rt] = De[yt] = De[or] = De[Tn] = De[Bt] = De[ot] = De[jo] = De[ei] = De[ti] = De[ni] = De[ri] = De[Y] = De[Et] = De[_t] = De[tr] = De[Lt] = De[nr] = De[qr] = De[oi] = De[ii] = De[si] = De[ai] = !0, De[Yt] = De[k] = De[rr] = !1;
    var Rp = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Pp = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Tp = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Bp = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Lp = parseFloat, Mp = parseInt, el = typeof Er == "object" && Er && Er.Object === Object && Er, Fp = typeof self == "object" && self && self.Object === Object && self, Ue = el || Fp || Function("return this")(), hi = r && !r.nodeType && r, yn = hi && !0 && t && !t.nodeType && t, tl = yn && yn.exports === hi, vi = tl && el.process, wt = function() {
      try {
        var C = yn && yn.require && yn.require("util").types;
        return C || vi && vi.binding && vi.binding("util");
      } catch {
      }
    }(), nl = wt && wt.isArrayBuffer, rl = wt && wt.isDate, ol = wt && wt.isMap, il = wt && wt.isRegExp, sl = wt && wt.isSet, al = wt && wt.isTypedArray;
    function ct(C, P, N) {
      switch (N.length) {
        case 0:
          return C.call(P);
        case 1:
          return C.call(P, N[0]);
        case 2:
          return C.call(P, N[0], N[1]);
        case 3:
          return C.call(P, N[0], N[1], N[2]);
      }
      return C.apply(P, N);
    }
    function $p(C, P, N, K) {
      for (var re = -1, he = C == null ? 0 : C.length; ++re < he; ) {
        var Fe = C[re];
        P(K, Fe, N(Fe), C);
      }
      return K;
    }
    function xt(C, P) {
      for (var N = -1, K = C == null ? 0 : C.length; ++N < K && P(C[N], N, C) !== !1; )
        ;
      return C;
    }
    function Wp(C, P) {
      for (var N = C == null ? 0 : C.length; N-- && P(C[N], N, C) !== !1; )
        ;
      return C;
    }
    function ll(C, P) {
      for (var N = -1, K = C == null ? 0 : C.length; ++N < K; )
        if (!P(C[N], N, C))
          return !1;
      return !0;
    }
    function sn(C, P) {
      for (var N = -1, K = C == null ? 0 : C.length, re = 0, he = []; ++N < K; ) {
        var Fe = C[N];
        P(Fe, N, C) && (he[re++] = Fe);
      }
      return he;
    }
    function Kr(C, P) {
      var N = C == null ? 0 : C.length;
      return !!N && Ln(C, P, 0) > -1;
    }
    function mi(C, P, N) {
      for (var K = -1, re = C == null ? 0 : C.length; ++K < re; )
        if (N(P, C[K]))
          return !0;
      return !1;
    }
    function Ie(C, P) {
      for (var N = -1, K = C == null ? 0 : C.length, re = Array(K); ++N < K; )
        re[N] = P(C[N], N, C);
      return re;
    }
    function an(C, P) {
      for (var N = -1, K = P.length, re = C.length; ++N < K; )
        C[re + N] = P[N];
      return C;
    }
    function bi(C, P, N, K) {
      var re = -1, he = C == null ? 0 : C.length;
      for (K && he && (N = C[++re]); ++re < he; )
        N = P(N, C[re], re, C);
      return N;
    }
    function Vp(C, P, N, K) {
      var re = C == null ? 0 : C.length;
      for (K && re && (N = C[--re]); re--; )
        N = P(N, C[re], re, C);
      return N;
    }
    function yi(C, P) {
      for (var N = -1, K = C == null ? 0 : C.length; ++N < K; )
        if (P(C[N], N, C))
          return !0;
      return !1;
    }
    var Gp = Ei("length");
    function Up(C) {
      return C.split("");
    }
    function Hp(C) {
      return C.match(Zd) || [];
    }
    function ul(C, P, N) {
      var K;
      return N(C, function(re, he, Fe) {
        if (P(re, he, Fe))
          return K = he, !1;
      }), K;
    }
    function Xr(C, P, N, K) {
      for (var re = C.length, he = N + (K ? 1 : -1); K ? he-- : ++he < re; )
        if (P(C[he], he, C))
          return he;
      return -1;
    }
    function Ln(C, P, N) {
      return P === P ? tg(C, P, N) : Xr(C, cl, N);
    }
    function qp(C, P, N, K) {
      for (var re = N - 1, he = C.length; ++re < he; )
        if (K(C[re], P))
          return re;
      return -1;
    }
    function cl(C) {
      return C !== C;
    }
    function fl(C, P) {
      var N = C == null ? 0 : C.length;
      return N ? wi(C, P) / N : nt;
    }
    function Ei(C) {
      return function(P) {
        return P == null ? o : P[C];
      };
    }
    function _i(C) {
      return function(P) {
        return C == null ? o : C[P];
      };
    }
    function dl(C, P, N, K, re) {
      return re(C, function(he, Fe, xe) {
        N = K ? (K = !1, he) : P(N, he, Fe, xe);
      }), N;
    }
    function kp(C, P) {
      var N = C.length;
      for (C.sort(P); N--; )
        C[N] = C[N].value;
      return C;
    }
    function wi(C, P) {
      for (var N, K = -1, re = C.length; ++K < re; ) {
        var he = P(C[K]);
        he !== o && (N = N === o ? he : N + he);
      }
      return N;
    }
    function xi(C, P) {
      for (var N = -1, K = Array(C); ++N < C; )
        K[N] = P(N);
      return K;
    }
    function zp(C, P) {
      return Ie(P, function(N) {
        return [N, C[N]];
      });
    }
    function pl(C) {
      return C && C.slice(0, ml(C) + 1).replace(ui, "");
    }
    function ft(C) {
      return function(P) {
        return C(P);
      };
    }
    function Di(C, P) {
      return Ie(P, function(N) {
        return C[N];
      });
    }
    function ir(C, P) {
      return C.has(P);
    }
    function gl(C, P) {
      for (var N = -1, K = C.length; ++N < K && Ln(P, C[N], 0) > -1; )
        ;
      return N;
    }
    function hl(C, P) {
      for (var N = C.length; N-- && Ln(P, C[N], 0) > -1; )
        ;
      return N;
    }
    function Yp(C, P) {
      for (var N = C.length, K = 0; N--; )
        C[N] === P && ++K;
      return K;
    }
    var Kp = _i(Rp), Xp = _i(Pp);
    function Jp(C) {
      return "\\" + Bp[C];
    }
    function Zp(C, P) {
      return C == null ? o : C[P];
    }
    function Mn(C) {
      return Ap.test(C);
    }
    function Qp(C) {
      return Ip.test(C);
    }
    function jp(C) {
      for (var P, N = []; !(P = C.next()).done; )
        N.push(P.value);
      return N;
    }
    function Si(C) {
      var P = -1, N = Array(C.size);
      return C.forEach(function(K, re) {
        N[++P] = [re, K];
      }), N;
    }
    function vl(C, P) {
      return function(N) {
        return C(P(N));
      };
    }
    function ln(C, P) {
      for (var N = -1, K = C.length, re = 0, he = []; ++N < K; ) {
        var Fe = C[N];
        (Fe === P || Fe === b) && (C[N] = b, he[re++] = N);
      }
      return he;
    }
    function Jr(C) {
      var P = -1, N = Array(C.size);
      return C.forEach(function(K) {
        N[++P] = K;
      }), N;
    }
    function eg(C) {
      var P = -1, N = Array(C.size);
      return C.forEach(function(K) {
        N[++P] = [K, K];
      }), N;
    }
    function tg(C, P, N) {
      for (var K = N - 1, re = C.length; ++K < re; )
        if (C[K] === P)
          return K;
      return -1;
    }
    function ng(C, P, N) {
      for (var K = N + 1; K--; )
        if (C[K] === P)
          return K;
      return K;
    }
    function Fn(C) {
      return Mn(C) ? og(C) : Gp(C);
    }
    function Mt(C) {
      return Mn(C) ? ig(C) : Up(C);
    }
    function ml(C) {
      for (var P = C.length; P-- && Yd.test(C.charAt(P)); )
        ;
      return P;
    }
    var rg = _i(Tp);
    function og(C) {
      for (var P = gi.lastIndex = 0; gi.test(C); )
        ++P;
      return P;
    }
    function ig(C) {
      return C.match(gi) || [];
    }
    function sg(C) {
      return C.match(Cp) || [];
    }
    var ag = function C(P) {
      P = P == null ? Ue : $n.defaults(Ue.Object(), P, $n.pick(Ue, Op));
      var N = P.Array, K = P.Date, re = P.Error, he = P.Function, Fe = P.Math, xe = P.Object, Ci = P.RegExp, lg = P.String, Dt = P.TypeError, Zr = N.prototype, ug = he.prototype, Wn = xe.prototype, Qr = P["__core-js_shared__"], jr = ug.toString, we = Wn.hasOwnProperty, cg = 0, bl = function() {
        var e = /[^.]+$/.exec(Qr && Qr.keys && Qr.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), eo = Wn.toString, fg = jr.call(xe), dg = Ue._, pg = Ci(
        "^" + jr.call(we).replace(li, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), to = tl ? P.Buffer : o, un = P.Symbol, no = P.Uint8Array, yl = to ? to.allocUnsafe : o, ro = vl(xe.getPrototypeOf, xe), El = xe.create, _l = Wn.propertyIsEnumerable, oo = Zr.splice, wl = un ? un.isConcatSpreadable : o, sr = un ? un.iterator : o, En = un ? un.toStringTag : o, io = function() {
        try {
          var e = Sn(xe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), gg = P.clearTimeout !== Ue.clearTimeout && P.clearTimeout, hg = K && K.now !== Ue.Date.now && K.now, vg = P.setTimeout !== Ue.setTimeout && P.setTimeout, so = Fe.ceil, ao = Fe.floor, Ai = xe.getOwnPropertySymbols, mg = to ? to.isBuffer : o, xl = P.isFinite, bg = Zr.join, yg = vl(xe.keys, xe), $e = Fe.max, ke = Fe.min, Eg = K.now, _g = P.parseInt, Dl = Fe.random, wg = Zr.reverse, Ii = Sn(P, "DataView"), ar = Sn(P, "Map"), Oi = Sn(P, "Promise"), Vn = Sn(P, "Set"), lr = Sn(P, "WeakMap"), ur = Sn(xe, "create"), lo = lr && new lr(), Gn = {}, xg = Cn(Ii), Dg = Cn(ar), Sg = Cn(Oi), Cg = Cn(Vn), Ag = Cn(lr), uo = un ? un.prototype : o, cr = uo ? uo.valueOf : o, Sl = uo ? uo.toString : o;
      function m(e) {
        if (Ne(e) && !oe(e) && !(e instanceof fe)) {
          if (e instanceof St)
            return e;
          if (we.call(e, "__wrapped__"))
            return Cu(e);
        }
        return new St(e);
      }
      var Un = function() {
        function e() {
        }
        return function(n) {
          if (!Oe(n))
            return {};
          if (El)
            return El(n);
          e.prototype = n;
          var i = new e();
          return e.prototype = o, i;
        };
      }();
      function co() {
      }
      function St(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
      }
      m.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Gd,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ud,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Ba,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: m
        }
      }, m.prototype = co.prototype, m.prototype.constructor = m, St.prototype = Un(co.prototype), St.prototype.constructor = St;
      function fe(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Le, this.__views__ = [];
      }
      function Ig() {
        var e = new fe(this.__wrapped__);
        return e.__actions__ = st(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = st(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = st(this.__views__), e;
      }
      function Og() {
        if (this.__filtered__) {
          var e = new fe(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Ng() {
        var e = this.__wrapped__.value(), n = this.__dir__, i = oe(e), u = n < 0, d = i ? e.length : 0, y = Uh(0, d, this.__views__), _ = y.start, x = y.end, I = x - _, B = u ? x : _ - 1, L = this.__iteratees__, W = L.length, H = 0, J = ke(I, this.__takeCount__);
        if (!i || !u && d == I && J == I)
          return Xl(e, this.__actions__);
        var ee = [];
        e:
          for (; I-- && H < J; ) {
            B += n;
            for (var ae = -1, te = e[B]; ++ae < W; ) {
              var ce = L[ae], pe = ce.iteratee, gt = ce.type, Je = pe(te);
              if (gt == Ce)
                te = Je;
              else if (!Je) {
                if (gt == ve)
                  continue e;
                break e;
              }
            }
            ee[H++] = te;
          }
        return ee;
      }
      fe.prototype = Un(co.prototype), fe.prototype.constructor = fe;
      function _n(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var u = e[n];
          this.set(u[0], u[1]);
        }
      }
      function Rg() {
        this.__data__ = ur ? ur(null) : {}, this.size = 0;
      }
      function Pg(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function Tg(e) {
        var n = this.__data__;
        if (ur) {
          var i = n[e];
          return i === p ? o : i;
        }
        return we.call(n, e) ? n[e] : o;
      }
      function Bg(e) {
        var n = this.__data__;
        return ur ? n[e] !== o : we.call(n, e);
      }
      function Lg(e, n) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = ur && n === o ? p : n, this;
      }
      _n.prototype.clear = Rg, _n.prototype.delete = Pg, _n.prototype.get = Tg, _n.prototype.has = Bg, _n.prototype.set = Lg;
      function Kt(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var u = e[n];
          this.set(u[0], u[1]);
        }
      }
      function Mg() {
        this.__data__ = [], this.size = 0;
      }
      function Fg(e) {
        var n = this.__data__, i = fo(n, e);
        if (i < 0)
          return !1;
        var u = n.length - 1;
        return i == u ? n.pop() : oo.call(n, i, 1), --this.size, !0;
      }
      function $g(e) {
        var n = this.__data__, i = fo(n, e);
        return i < 0 ? o : n[i][1];
      }
      function Wg(e) {
        return fo(this.__data__, e) > -1;
      }
      function Vg(e, n) {
        var i = this.__data__, u = fo(i, e);
        return u < 0 ? (++this.size, i.push([e, n])) : i[u][1] = n, this;
      }
      Kt.prototype.clear = Mg, Kt.prototype.delete = Fg, Kt.prototype.get = $g, Kt.prototype.has = Wg, Kt.prototype.set = Vg;
      function Xt(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var u = e[n];
          this.set(u[0], u[1]);
        }
      }
      function Gg() {
        this.size = 0, this.__data__ = {
          hash: new _n(),
          map: new (ar || Kt)(),
          string: new _n()
        };
      }
      function Ug(e) {
        var n = Do(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Hg(e) {
        return Do(this, e).get(e);
      }
      function qg(e) {
        return Do(this, e).has(e);
      }
      function kg(e, n) {
        var i = Do(this, e), u = i.size;
        return i.set(e, n), this.size += i.size == u ? 0 : 1, this;
      }
      Xt.prototype.clear = Gg, Xt.prototype.delete = Ug, Xt.prototype.get = Hg, Xt.prototype.has = qg, Xt.prototype.set = kg;
      function wn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new Xt(); ++n < i; )
          this.add(e[n]);
      }
      function zg(e) {
        return this.__data__.set(e, p), this;
      }
      function Yg(e) {
        return this.__data__.has(e);
      }
      wn.prototype.add = wn.prototype.push = zg, wn.prototype.has = Yg;
      function Ft(e) {
        var n = this.__data__ = new Kt(e);
        this.size = n.size;
      }
      function Kg() {
        this.__data__ = new Kt(), this.size = 0;
      }
      function Xg(e) {
        var n = this.__data__, i = n.delete(e);
        return this.size = n.size, i;
      }
      function Jg(e) {
        return this.__data__.get(e);
      }
      function Zg(e) {
        return this.__data__.has(e);
      }
      function Qg(e, n) {
        var i = this.__data__;
        if (i instanceof Kt) {
          var u = i.__data__;
          if (!ar || u.length < a - 1)
            return u.push([e, n]), this.size = ++i.size, this;
          i = this.__data__ = new Xt(u);
        }
        return i.set(e, n), this.size = i.size, this;
      }
      Ft.prototype.clear = Kg, Ft.prototype.delete = Xg, Ft.prototype.get = Jg, Ft.prototype.has = Zg, Ft.prototype.set = Qg;
      function Cl(e, n) {
        var i = oe(e), u = !i && An(e), d = !i && !u && gn(e), y = !i && !u && !d && zn(e), _ = i || u || d || y, x = _ ? xi(e.length, lg) : [], I = x.length;
        for (var B in e)
          (n || we.call(e, B)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
          (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          d && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          y && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
          jt(B, I))) && x.push(B);
        return x;
      }
      function Al(e) {
        var n = e.length;
        return n ? e[Vi(0, n - 1)] : o;
      }
      function jg(e, n) {
        return So(st(e), xn(n, 0, e.length));
      }
      function eh(e) {
        return So(st(e));
      }
      function Ni(e, n, i) {
        (i !== o && !$t(e[n], i) || i === o && !(n in e)) && Jt(e, n, i);
      }
      function fr(e, n, i) {
        var u = e[n];
        (!(we.call(e, n) && $t(u, i)) || i === o && !(n in e)) && Jt(e, n, i);
      }
      function fo(e, n) {
        for (var i = e.length; i--; )
          if ($t(e[i][0], n))
            return i;
        return -1;
      }
      function th(e, n, i, u) {
        return cn(e, function(d, y, _) {
          n(u, d, i(d), _);
        }), u;
      }
      function Il(e, n) {
        return e && Ht(n, We(n), e);
      }
      function nh(e, n) {
        return e && Ht(n, lt(n), e);
      }
      function Jt(e, n, i) {
        n == "__proto__" && io ? io(e, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[n] = i;
      }
      function Ri(e, n) {
        for (var i = -1, u = n.length, d = N(u), y = e == null; ++i < u; )
          d[i] = y ? o : fs(e, n[i]);
        return d;
      }
      function xn(e, n, i) {
        return e === e && (i !== o && (e = e <= i ? e : i), n !== o && (e = e >= n ? e : n)), e;
      }
      function Ct(e, n, i, u, d, y) {
        var _, x = n & g, I = n & v, B = n & E;
        if (i && (_ = d ? i(e, u, d, y) : i(e)), _ !== o)
          return _;
        if (!Oe(e))
          return e;
        var L = oe(e);
        if (L) {
          if (_ = qh(e), !x)
            return st(e, _);
        } else {
          var W = ze(e), H = W == k || W == it;
          if (gn(e))
            return Ql(e, x);
          if (W == _t || W == rt || H && !d) {
            if (_ = I || H ? {} : mu(e), !x)
              return I ? Th(e, nh(_, e)) : Ph(e, Il(_, e));
          } else {
            if (!De[W])
              return d ? e : {};
            _ = kh(e, W, x);
          }
        }
        y || (y = new Ft());
        var J = y.get(e);
        if (J)
          return J;
        y.set(e, _), zu(e) ? e.forEach(function(te) {
          _.add(Ct(te, n, i, te, e, y));
        }) : qu(e) && e.forEach(function(te, ce) {
          _.set(ce, Ct(te, n, i, ce, e, y));
        });
        var ee = B ? I ? Zi : Ji : I ? lt : We, ae = L ? o : ee(e);
        return xt(ae || e, function(te, ce) {
          ae && (ce = te, te = e[ce]), fr(_, ce, Ct(te, n, i, ce, e, y));
        }), _;
      }
      function rh(e) {
        var n = We(e);
        return function(i) {
          return Ol(i, e, n);
        };
      }
      function Ol(e, n, i) {
        var u = i.length;
        if (e == null)
          return !u;
        for (e = xe(e); u--; ) {
          var d = i[u], y = n[d], _ = e[d];
          if (_ === o && !(d in e) || !y(_))
            return !1;
        }
        return !0;
      }
      function Nl(e, n, i) {
        if (typeof e != "function")
          throw new Dt(c);
        return br(function() {
          e.apply(o, i);
        }, n);
      }
      function dr(e, n, i, u) {
        var d = -1, y = Kr, _ = !0, x = e.length, I = [], B = n.length;
        if (!x)
          return I;
        i && (n = Ie(n, ft(i))), u ? (y = mi, _ = !1) : n.length >= a && (y = ir, _ = !1, n = new wn(n));
        e:
          for (; ++d < x; ) {
            var L = e[d], W = i == null ? L : i(L);
            if (L = u || L !== 0 ? L : 0, _ && W === W) {
              for (var H = B; H--; )
                if (n[H] === W)
                  continue e;
              I.push(L);
            } else
              y(n, W, u) || I.push(L);
          }
        return I;
      }
      var cn = ru(Ut), Rl = ru(Ti, !0);
      function oh(e, n) {
        var i = !0;
        return cn(e, function(u, d, y) {
          return i = !!n(u, d, y), i;
        }), i;
      }
      function po(e, n, i) {
        for (var u = -1, d = e.length; ++u < d; ) {
          var y = e[u], _ = n(y);
          if (_ != null && (x === o ? _ === _ && !pt(_) : i(_, x)))
            var x = _, I = y;
        }
        return I;
      }
      function ih(e, n, i, u) {
        var d = e.length;
        for (i = se(i), i < 0 && (i = -i > d ? 0 : d + i), u = u === o || u > d ? d : se(u), u < 0 && (u += d), u = i > u ? 0 : Ku(u); i < u; )
          e[i++] = n;
        return e;
      }
      function Pl(e, n) {
        var i = [];
        return cn(e, function(u, d, y) {
          n(u, d, y) && i.push(u);
        }), i;
      }
      function He(e, n, i, u, d) {
        var y = -1, _ = e.length;
        for (i || (i = Yh), d || (d = []); ++y < _; ) {
          var x = e[y];
          n > 0 && i(x) ? n > 1 ? He(x, n - 1, i, u, d) : an(d, x) : u || (d[d.length] = x);
        }
        return d;
      }
      var Pi = ou(), Tl = ou(!0);
      function Ut(e, n) {
        return e && Pi(e, n, We);
      }
      function Ti(e, n) {
        return e && Tl(e, n, We);
      }
      function go(e, n) {
        return sn(n, function(i) {
          return en(e[i]);
        });
      }
      function Dn(e, n) {
        n = dn(n, e);
        for (var i = 0, u = n.length; e != null && i < u; )
          e = e[qt(n[i++])];
        return i && i == u ? e : o;
      }
      function Bl(e, n, i) {
        var u = n(e);
        return oe(e) ? u : an(u, i(e));
      }
      function Ke(e) {
        return e == null ? e === o ? Bd : Pn : En && En in xe(e) ? Gh(e) : ev(e);
      }
      function Bi(e, n) {
        return e > n;
      }
      function sh(e, n) {
        return e != null && we.call(e, n);
      }
      function ah(e, n) {
        return e != null && n in xe(e);
      }
      function lh(e, n, i) {
        return e >= ke(n, i) && e < $e(n, i);
      }
      function Li(e, n, i) {
        for (var u = i ? mi : Kr, d = e[0].length, y = e.length, _ = y, x = N(y), I = 1 / 0, B = []; _--; ) {
          var L = e[_];
          _ && n && (L = Ie(L, ft(n))), I = ke(L.length, I), x[_] = !i && (n || d >= 120 && L.length >= 120) ? new wn(_ && L) : o;
        }
        L = e[0];
        var W = -1, H = x[0];
        e:
          for (; ++W < d && B.length < I; ) {
            var J = L[W], ee = n ? n(J) : J;
            if (J = i || J !== 0 ? J : 0, !(H ? ir(H, ee) : u(B, ee, i))) {
              for (_ = y; --_; ) {
                var ae = x[_];
                if (!(ae ? ir(ae, ee) : u(e[_], ee, i)))
                  continue e;
              }
              H && H.push(ee), B.push(J);
            }
          }
        return B;
      }
      function uh(e, n, i, u) {
        return Ut(e, function(d, y, _) {
          n(u, i(d), y, _);
        }), u;
      }
      function pr(e, n, i) {
        n = dn(n, e), e = _u(e, n);
        var u = e == null ? e : e[qt(It(n))];
        return u == null ? o : ct(u, e, i);
      }
      function Ll(e) {
        return Ne(e) && Ke(e) == rt;
      }
      function ch(e) {
        return Ne(e) && Ke(e) == or;
      }
      function fh(e) {
        return Ne(e) && Ke(e) == ot;
      }
      function gr(e, n, i, u, d) {
        return e === n ? !0 : e == null || n == null || !Ne(e) && !Ne(n) ? e !== e && n !== n : dh(e, n, i, u, gr, d);
      }
      function dh(e, n, i, u, d, y) {
        var _ = oe(e), x = oe(n), I = _ ? yt : ze(e), B = x ? yt : ze(n);
        I = I == rt ? _t : I, B = B == rt ? _t : B;
        var L = I == _t, W = B == _t, H = I == B;
        if (H && gn(e)) {
          if (!gn(n))
            return !1;
          _ = !0, L = !1;
        }
        if (H && !L)
          return y || (y = new Ft()), _ || zn(e) ? gu(e, n, i, u, d, y) : Wh(e, n, I, i, u, d, y);
        if (!(i & D)) {
          var J = L && we.call(e, "__wrapped__"), ee = W && we.call(n, "__wrapped__");
          if (J || ee) {
            var ae = J ? e.value() : e, te = ee ? n.value() : n;
            return y || (y = new Ft()), d(ae, te, i, u, y);
          }
        }
        return H ? (y || (y = new Ft()), Vh(e, n, i, u, d, y)) : !1;
      }
      function ph(e) {
        return Ne(e) && ze(e) == Y;
      }
      function Mi(e, n, i, u) {
        var d = i.length, y = d, _ = !u;
        if (e == null)
          return !y;
        for (e = xe(e); d--; ) {
          var x = i[d];
          if (_ && x[2] ? x[1] !== e[x[0]] : !(x[0] in e))
            return !1;
        }
        for (; ++d < y; ) {
          x = i[d];
          var I = x[0], B = e[I], L = x[1];
          if (_ && x[2]) {
            if (B === o && !(I in e))
              return !1;
          } else {
            var W = new Ft();
            if (u)
              var H = u(B, L, I, e, n, W);
            if (!(H === o ? gr(L, B, D | O, u, W) : H))
              return !1;
          }
        }
        return !0;
      }
      function Ml(e) {
        if (!Oe(e) || Xh(e))
          return !1;
        var n = en(e) ? pg : rp;
        return n.test(Cn(e));
      }
      function gh(e) {
        return Ne(e) && Ke(e) == tr;
      }
      function hh(e) {
        return Ne(e) && ze(e) == Lt;
      }
      function vh(e) {
        return Ne(e) && Ro(e.length) && !!Ae[Ke(e)];
      }
      function Fl(e) {
        return typeof e == "function" ? e : e == null ? ut : typeof e == "object" ? oe(e) ? Vl(e[0], e[1]) : Wl(e) : ic(e);
      }
      function Fi(e) {
        if (!mr(e))
          return yg(e);
        var n = [];
        for (var i in xe(e))
          we.call(e, i) && i != "constructor" && n.push(i);
        return n;
      }
      function mh(e) {
        if (!Oe(e))
          return jh(e);
        var n = mr(e), i = [];
        for (var u in e)
          u == "constructor" && (n || !we.call(e, u)) || i.push(u);
        return i;
      }
      function $i(e, n) {
        return e < n;
      }
      function $l(e, n) {
        var i = -1, u = at(e) ? N(e.length) : [];
        return cn(e, function(d, y, _) {
          u[++i] = n(d, y, _);
        }), u;
      }
      function Wl(e) {
        var n = ji(e);
        return n.length == 1 && n[0][2] ? yu(n[0][0], n[0][1]) : function(i) {
          return i === e || Mi(i, e, n);
        };
      }
      function Vl(e, n) {
        return ts(e) && bu(n) ? yu(qt(e), n) : function(i) {
          var u = fs(i, e);
          return u === o && u === n ? ds(i, e) : gr(n, u, D | O);
        };
      }
      function ho(e, n, i, u, d) {
        e !== n && Pi(n, function(y, _) {
          if (d || (d = new Ft()), Oe(y))
            bh(e, n, _, i, ho, u, d);
          else {
            var x = u ? u(rs(e, _), y, _ + "", e, n, d) : o;
            x === o && (x = y), Ni(e, _, x);
          }
        }, lt);
      }
      function bh(e, n, i, u, d, y, _) {
        var x = rs(e, i), I = rs(n, i), B = _.get(I);
        if (B) {
          Ni(e, i, B);
          return;
        }
        var L = y ? y(x, I, i + "", e, n, _) : o, W = L === o;
        if (W) {
          var H = oe(I), J = !H && gn(I), ee = !H && !J && zn(I);
          L = I, H || J || ee ? oe(x) ? L = x : Pe(x) ? L = st(x) : J ? (W = !1, L = Ql(I, !0)) : ee ? (W = !1, L = jl(I, !0)) : L = [] : yr(I) || An(I) ? (L = x, An(x) ? L = Xu(x) : (!Oe(x) || en(x)) && (L = mu(I))) : W = !1;
        }
        W && (_.set(I, L), d(L, I, u, y, _), _.delete(I)), Ni(e, i, L);
      }
      function Gl(e, n) {
        var i = e.length;
        if (i)
          return n += n < 0 ? i : 0, jt(n, i) ? e[n] : o;
      }
      function Ul(e, n, i) {
        n.length ? n = Ie(n, function(y) {
          return oe(y) ? function(_) {
            return Dn(_, y.length === 1 ? y[0] : y);
          } : y;
        }) : n = [ut];
        var u = -1;
        n = Ie(n, ft(j()));
        var d = $l(e, function(y, _, x) {
          var I = Ie(n, function(B) {
            return B(y);
          });
          return { criteria: I, index: ++u, value: y };
        });
        return kp(d, function(y, _) {
          return Rh(y, _, i);
        });
      }
      function yh(e, n) {
        return Hl(e, n, function(i, u) {
          return ds(e, u);
        });
      }
      function Hl(e, n, i) {
        for (var u = -1, d = n.length, y = {}; ++u < d; ) {
          var _ = n[u], x = Dn(e, _);
          i(x, _) && hr(y, dn(_, e), x);
        }
        return y;
      }
      function Eh(e) {
        return function(n) {
          return Dn(n, e);
        };
      }
      function Wi(e, n, i, u) {
        var d = u ? qp : Ln, y = -1, _ = n.length, x = e;
        for (e === n && (n = st(n)), i && (x = Ie(e, ft(i))); ++y < _; )
          for (var I = 0, B = n[y], L = i ? i(B) : B; (I = d(x, L, I, u)) > -1; )
            x !== e && oo.call(x, I, 1), oo.call(e, I, 1);
        return e;
      }
      function ql(e, n) {
        for (var i = e ? n.length : 0, u = i - 1; i--; ) {
          var d = n[i];
          if (i == u || d !== y) {
            var y = d;
            jt(d) ? oo.call(e, d, 1) : Hi(e, d);
          }
        }
        return e;
      }
      function Vi(e, n) {
        return e + ao(Dl() * (n - e + 1));
      }
      function _h(e, n, i, u) {
        for (var d = -1, y = $e(so((n - e) / (i || 1)), 0), _ = N(y); y--; )
          _[u ? y : ++d] = e, e += i;
        return _;
      }
      function Gi(e, n) {
        var i = "";
        if (!e || n < 1 || n > de)
          return i;
        do
          n % 2 && (i += e), n = ao(n / 2), n && (e += e);
        while (n);
        return i;
      }
      function le(e, n) {
        return os(Eu(e, n, ut), e + "");
      }
      function wh(e) {
        return Al(Yn(e));
      }
      function xh(e, n) {
        var i = Yn(e);
        return So(i, xn(n, 0, i.length));
      }
      function hr(e, n, i, u) {
        if (!Oe(e))
          return e;
        n = dn(n, e);
        for (var d = -1, y = n.length, _ = y - 1, x = e; x != null && ++d < y; ) {
          var I = qt(n[d]), B = i;
          if (I === "__proto__" || I === "constructor" || I === "prototype")
            return e;
          if (d != _) {
            var L = x[I];
            B = u ? u(L, I, x) : o, B === o && (B = Oe(L) ? L : jt(n[d + 1]) ? [] : {});
          }
          fr(x, I, B), x = x[I];
        }
        return e;
      }
      var kl = lo ? function(e, n) {
        return lo.set(e, n), e;
      } : ut, Dh = io ? function(e, n) {
        return io(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: gs(n),
          writable: !0
        });
      } : ut;
      function Sh(e) {
        return So(Yn(e));
      }
      function At(e, n, i) {
        var u = -1, d = e.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var y = N(d); ++u < d; )
          y[u] = e[u + n];
        return y;
      }
      function Ch(e, n) {
        var i;
        return cn(e, function(u, d, y) {
          return i = n(u, d, y), !i;
        }), !!i;
      }
      function vo(e, n, i) {
        var u = 0, d = e == null ? u : e.length;
        if (typeof n == "number" && n === n && d <= Tt) {
          for (; u < d; ) {
            var y = u + d >>> 1, _ = e[y];
            _ !== null && !pt(_) && (i ? _ <= n : _ < n) ? u = y + 1 : d = y;
          }
          return d;
        }
        return Ui(e, n, ut, i);
      }
      function Ui(e, n, i, u) {
        var d = 0, y = e == null ? 0 : e.length;
        if (y === 0)
          return 0;
        n = i(n);
        for (var _ = n !== n, x = n === null, I = pt(n), B = n === o; d < y; ) {
          var L = ao((d + y) / 2), W = i(e[L]), H = W !== o, J = W === null, ee = W === W, ae = pt(W);
          if (_)
            var te = u || ee;
          else
            B ? te = ee && (u || H) : x ? te = ee && H && (u || !J) : I ? te = ee && H && !J && (u || !ae) : J || ae ? te = !1 : te = u ? W <= n : W < n;
          te ? d = L + 1 : y = L;
        }
        return ke(y, Me);
      }
      function zl(e, n) {
        for (var i = -1, u = e.length, d = 0, y = []; ++i < u; ) {
          var _ = e[i], x = n ? n(_) : _;
          if (!i || !$t(x, I)) {
            var I = x;
            y[d++] = _ === 0 ? 0 : _;
          }
        }
        return y;
      }
      function Yl(e) {
        return typeof e == "number" ? e : pt(e) ? nt : +e;
      }
      function dt(e) {
        if (typeof e == "string")
          return e;
        if (oe(e))
          return Ie(e, dt) + "";
        if (pt(e))
          return Sl ? Sl.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Re ? "-0" : n;
      }
      function fn(e, n, i) {
        var u = -1, d = Kr, y = e.length, _ = !0, x = [], I = x;
        if (i)
          _ = !1, d = mi;
        else if (y >= a) {
          var B = n ? null : Fh(e);
          if (B)
            return Jr(B);
          _ = !1, d = ir, I = new wn();
        } else
          I = n ? [] : x;
        e:
          for (; ++u < y; ) {
            var L = e[u], W = n ? n(L) : L;
            if (L = i || L !== 0 ? L : 0, _ && W === W) {
              for (var H = I.length; H--; )
                if (I[H] === W)
                  continue e;
              n && I.push(W), x.push(L);
            } else
              d(I, W, i) || (I !== x && I.push(W), x.push(L));
          }
        return x;
      }
      function Hi(e, n) {
        return n = dn(n, e), e = _u(e, n), e == null || delete e[qt(It(n))];
      }
      function Kl(e, n, i, u) {
        return hr(e, n, i(Dn(e, n)), u);
      }
      function mo(e, n, i, u) {
        for (var d = e.length, y = u ? d : -1; (u ? y-- : ++y < d) && n(e[y], y, e); )
          ;
        return i ? At(e, u ? 0 : y, u ? y + 1 : d) : At(e, u ? y + 1 : 0, u ? d : y);
      }
      function Xl(e, n) {
        var i = e;
        return i instanceof fe && (i = i.value()), bi(n, function(u, d) {
          return d.func.apply(d.thisArg, an([u], d.args));
        }, i);
      }
      function qi(e, n, i) {
        var u = e.length;
        if (u < 2)
          return u ? fn(e[0]) : [];
        for (var d = -1, y = N(u); ++d < u; )
          for (var _ = e[d], x = -1; ++x < u; )
            x != d && (y[d] = dr(y[d] || _, e[x], n, i));
        return fn(He(y, 1), n, i);
      }
      function Jl(e, n, i) {
        for (var u = -1, d = e.length, y = n.length, _ = {}; ++u < d; ) {
          var x = u < y ? n[u] : o;
          i(_, e[u], x);
        }
        return _;
      }
      function ki(e) {
        return Pe(e) ? e : [];
      }
      function zi(e) {
        return typeof e == "function" ? e : ut;
      }
      function dn(e, n) {
        return oe(e) ? e : ts(e, n) ? [e] : Su(me(e));
      }
      var Ah = le;
      function pn(e, n, i) {
        var u = e.length;
        return i = i === o ? u : i, !n && i >= u ? e : At(e, n, i);
      }
      var Zl = gg || function(e) {
        return Ue.clearTimeout(e);
      };
      function Ql(e, n) {
        if (n)
          return e.slice();
        var i = e.length, u = yl ? yl(i) : new e.constructor(i);
        return e.copy(u), u;
      }
      function Yi(e) {
        var n = new e.constructor(e.byteLength);
        return new no(n).set(new no(e)), n;
      }
      function Ih(e, n) {
        var i = n ? Yi(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function Oh(e) {
        var n = new e.constructor(e.source, La.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function Nh(e) {
        return cr ? xe(cr.call(e)) : {};
      }
      function jl(e, n) {
        var i = n ? Yi(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function eu(e, n) {
        if (e !== n) {
          var i = e !== o, u = e === null, d = e === e, y = pt(e), _ = n !== o, x = n === null, I = n === n, B = pt(n);
          if (!x && !B && !y && e > n || y && _ && I && !x && !B || u && _ && I || !i && I || !d)
            return 1;
          if (!u && !y && !B && e < n || B && i && d && !u && !y || x && i && d || !_ && d || !I)
            return -1;
        }
        return 0;
      }
      function Rh(e, n, i) {
        for (var u = -1, d = e.criteria, y = n.criteria, _ = d.length, x = i.length; ++u < _; ) {
          var I = eu(d[u], y[u]);
          if (I) {
            if (u >= x)
              return I;
            var B = i[u];
            return I * (B == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function tu(e, n, i, u) {
        for (var d = -1, y = e.length, _ = i.length, x = -1, I = n.length, B = $e(y - _, 0), L = N(I + B), W = !u; ++x < I; )
          L[x] = n[x];
        for (; ++d < _; )
          (W || d < y) && (L[i[d]] = e[d]);
        for (; B--; )
          L[x++] = e[d++];
        return L;
      }
      function nu(e, n, i, u) {
        for (var d = -1, y = e.length, _ = -1, x = i.length, I = -1, B = n.length, L = $e(y - x, 0), W = N(L + B), H = !u; ++d < L; )
          W[d] = e[d];
        for (var J = d; ++I < B; )
          W[J + I] = n[I];
        for (; ++_ < x; )
          (H || d < y) && (W[J + i[_]] = e[d++]);
        return W;
      }
      function st(e, n) {
        var i = -1, u = e.length;
        for (n || (n = N(u)); ++i < u; )
          n[i] = e[i];
        return n;
      }
      function Ht(e, n, i, u) {
        var d = !i;
        i || (i = {});
        for (var y = -1, _ = n.length; ++y < _; ) {
          var x = n[y], I = u ? u(i[x], e[x], x, i, e) : o;
          I === o && (I = e[x]), d ? Jt(i, x, I) : fr(i, x, I);
        }
        return i;
      }
      function Ph(e, n) {
        return Ht(e, es(e), n);
      }
      function Th(e, n) {
        return Ht(e, hu(e), n);
      }
      function bo(e, n) {
        return function(i, u) {
          var d = oe(i) ? $p : th, y = n ? n() : {};
          return d(i, e, j(u, 2), y);
        };
      }
      function Hn(e) {
        return le(function(n, i) {
          var u = -1, d = i.length, y = d > 1 ? i[d - 1] : o, _ = d > 2 ? i[2] : o;
          for (y = e.length > 3 && typeof y == "function" ? (d--, y) : o, _ && Xe(i[0], i[1], _) && (y = d < 3 ? o : y, d = 1), n = xe(n); ++u < d; ) {
            var x = i[u];
            x && e(n, x, u, y);
          }
          return n;
        });
      }
      function ru(e, n) {
        return function(i, u) {
          if (i == null)
            return i;
          if (!at(i))
            return e(i, u);
          for (var d = i.length, y = n ? d : -1, _ = xe(i); (n ? y-- : ++y < d) && u(_[y], y, _) !== !1; )
            ;
          return i;
        };
      }
      function ou(e) {
        return function(n, i, u) {
          for (var d = -1, y = xe(n), _ = u(n), x = _.length; x--; ) {
            var I = _[e ? x : ++d];
            if (i(y[I], I, y) === !1)
              break;
          }
          return n;
        };
      }
      function Bh(e, n, i) {
        var u = n & w, d = vr(e);
        function y() {
          var _ = this && this !== Ue && this instanceof y ? d : e;
          return _.apply(u ? i : this, arguments);
        }
        return y;
      }
      function iu(e) {
        return function(n) {
          n = me(n);
          var i = Mn(n) ? Mt(n) : o, u = i ? i[0] : n.charAt(0), d = i ? pn(i, 1).join("") : n.slice(1);
          return u[e]() + d;
        };
      }
      function qn(e) {
        return function(n) {
          return bi(rc(nc(n).replace(Dp, "")), e, "");
        };
      }
      function vr(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var i = Un(e.prototype), u = e.apply(i, n);
          return Oe(u) ? u : i;
        };
      }
      function Lh(e, n, i) {
        var u = vr(e);
        function d() {
          for (var y = arguments.length, _ = N(y), x = y, I = kn(d); x--; )
            _[x] = arguments[x];
          var B = y < 3 && _[0] !== I && _[y - 1] !== I ? [] : ln(_, I);
          if (y -= B.length, y < i)
            return cu(
              e,
              n,
              yo,
              d.placeholder,
              o,
              _,
              B,
              o,
              o,
              i - y
            );
          var L = this && this !== Ue && this instanceof d ? u : e;
          return ct(L, this, _);
        }
        return d;
      }
      function su(e) {
        return function(n, i, u) {
          var d = xe(n);
          if (!at(n)) {
            var y = j(i, 3);
            n = We(n), i = function(x) {
              return y(d[x], x, d);
            };
          }
          var _ = e(n, i, u);
          return _ > -1 ? d[y ? n[_] : _] : o;
        };
      }
      function au(e) {
        return Qt(function(n) {
          var i = n.length, u = i, d = St.prototype.thru;
          for (e && n.reverse(); u--; ) {
            var y = n[u];
            if (typeof y != "function")
              throw new Dt(c);
            if (d && !_ && xo(y) == "wrapper")
              var _ = new St([], !0);
          }
          for (u = _ ? u : i; ++u < i; ) {
            y = n[u];
            var x = xo(y), I = x == "wrapper" ? Qi(y) : o;
            I && ns(I[0]) && I[1] == (G | R | A | z) && !I[4].length && I[9] == 1 ? _ = _[xo(I[0])].apply(_, I[3]) : _ = y.length == 1 && ns(y) ? _[x]() : _.thru(y);
          }
          return function() {
            var B = arguments, L = B[0];
            if (_ && B.length == 1 && oe(L))
              return _.plant(L).value();
            for (var W = 0, H = i ? n[W].apply(this, B) : L; ++W < i; )
              H = n[W].call(this, H);
            return H;
          };
        });
      }
      function yo(e, n, i, u, d, y, _, x, I, B) {
        var L = n & G, W = n & w, H = n & M, J = n & (R | T), ee = n & U, ae = H ? o : vr(e);
        function te() {
          for (var ce = arguments.length, pe = N(ce), gt = ce; gt--; )
            pe[gt] = arguments[gt];
          if (J)
            var Je = kn(te), ht = Yp(pe, Je);
          if (u && (pe = tu(pe, u, d, J)), y && (pe = nu(pe, y, _, J)), ce -= ht, J && ce < B) {
            var Te = ln(pe, Je);
            return cu(
              e,
              n,
              yo,
              te.placeholder,
              i,
              pe,
              Te,
              x,
              I,
              B - ce
            );
          }
          var Wt = W ? i : this, nn = H ? Wt[e] : e;
          return ce = pe.length, x ? pe = tv(pe, x) : ee && ce > 1 && pe.reverse(), L && I < ce && (pe.length = I), this && this !== Ue && this instanceof te && (nn = ae || vr(nn)), nn.apply(Wt, pe);
        }
        return te;
      }
      function lu(e, n) {
        return function(i, u) {
          return uh(i, e, n(u), {});
        };
      }
      function Eo(e, n) {
        return function(i, u) {
          var d;
          if (i === o && u === o)
            return n;
          if (i !== o && (d = i), u !== o) {
            if (d === o)
              return u;
            typeof i == "string" || typeof u == "string" ? (i = dt(i), u = dt(u)) : (i = Yl(i), u = Yl(u)), d = e(i, u);
          }
          return d;
        };
      }
      function Ki(e) {
        return Qt(function(n) {
          return n = Ie(n, ft(j())), le(function(i) {
            var u = this;
            return e(n, function(d) {
              return ct(d, u, i);
            });
          });
        });
      }
      function _o(e, n) {
        n = n === o ? " " : dt(n);
        var i = n.length;
        if (i < 2)
          return i ? Gi(n, e) : n;
        var u = Gi(n, so(e / Fn(n)));
        return Mn(n) ? pn(Mt(u), 0, e).join("") : u.slice(0, e);
      }
      function Mh(e, n, i, u) {
        var d = n & w, y = vr(e);
        function _() {
          for (var x = -1, I = arguments.length, B = -1, L = u.length, W = N(L + I), H = this && this !== Ue && this instanceof _ ? y : e; ++B < L; )
            W[B] = u[B];
          for (; I--; )
            W[B++] = arguments[++x];
          return ct(H, d ? i : this, W);
        }
        return _;
      }
      function uu(e) {
        return function(n, i, u) {
          return u && typeof u != "number" && Xe(n, i, u) && (i = u = o), n = tn(n), i === o ? (i = n, n = 0) : i = tn(i), u = u === o ? n < i ? 1 : -1 : tn(u), _h(n, i, u, e);
        };
      }
      function wo(e) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Ot(n), i = Ot(i)), e(n, i);
        };
      }
      function cu(e, n, i, u, d, y, _, x, I, B) {
        var L = n & R, W = L ? _ : o, H = L ? o : _, J = L ? y : o, ee = L ? o : y;
        n |= L ? A : $, n &= ~(L ? $ : A), n & F || (n &= ~(w | M));
        var ae = [
          e,
          n,
          d,
          J,
          W,
          ee,
          H,
          x,
          I,
          B
        ], te = i.apply(o, ae);
        return ns(e) && wu(te, ae), te.placeholder = u, xu(te, e, n);
      }
      function Xi(e) {
        var n = Fe[e];
        return function(i, u) {
          if (i = Ot(i), u = u == null ? 0 : ke(se(u), 292), u && xl(i)) {
            var d = (me(i) + "e").split("e"), y = n(d[0] + "e" + (+d[1] + u));
            return d = (me(y) + "e").split("e"), +(d[0] + "e" + (+d[1] - u));
          }
          return n(i);
        };
      }
      var Fh = Vn && 1 / Jr(new Vn([, -0]))[1] == Re ? function(e) {
        return new Vn(e);
      } : ms;
      function fu(e) {
        return function(n) {
          var i = ze(n);
          return i == Y ? Si(n) : i == Lt ? eg(n) : zp(n, e(n));
        };
      }
      function Zt(e, n, i, u, d, y, _, x) {
        var I = n & M;
        if (!I && typeof e != "function")
          throw new Dt(c);
        var B = u ? u.length : 0;
        if (B || (n &= ~(A | $), u = d = o), _ = _ === o ? _ : $e(se(_), 0), x = x === o ? x : se(x), B -= d ? d.length : 0, n & $) {
          var L = u, W = d;
          u = d = o;
        }
        var H = I ? o : Qi(e), J = [
          e,
          n,
          i,
          u,
          d,
          L,
          W,
          y,
          _,
          x
        ];
        if (H && Qh(J, H), e = J[0], n = J[1], i = J[2], u = J[3], d = J[4], x = J[9] = J[9] === o ? I ? 0 : e.length : $e(J[9] - B, 0), !x && n & (R | T) && (n &= ~(R | T)), !n || n == w)
          var ee = Bh(e, n, i);
        else
          n == R || n == T ? ee = Lh(e, n, x) : (n == A || n == (w | A)) && !d.length ? ee = Mh(e, n, i, u) : ee = yo.apply(o, J);
        var ae = H ? kl : wu;
        return xu(ae(ee, J), e, n);
      }
      function du(e, n, i, u) {
        return e === o || $t(e, Wn[i]) && !we.call(u, i) ? n : e;
      }
      function pu(e, n, i, u, d, y) {
        return Oe(e) && Oe(n) && (y.set(n, e), ho(e, n, o, pu, y), y.delete(n)), e;
      }
      function $h(e) {
        return yr(e) ? o : e;
      }
      function gu(e, n, i, u, d, y) {
        var _ = i & D, x = e.length, I = n.length;
        if (x != I && !(_ && I > x))
          return !1;
        var B = y.get(e), L = y.get(n);
        if (B && L)
          return B == n && L == e;
        var W = -1, H = !0, J = i & O ? new wn() : o;
        for (y.set(e, n), y.set(n, e); ++W < x; ) {
          var ee = e[W], ae = n[W];
          if (u)
            var te = _ ? u(ae, ee, W, n, e, y) : u(ee, ae, W, e, n, y);
          if (te !== o) {
            if (te)
              continue;
            H = !1;
            break;
          }
          if (J) {
            if (!yi(n, function(ce, pe) {
              if (!ir(J, pe) && (ee === ce || d(ee, ce, i, u, y)))
                return J.push(pe);
            })) {
              H = !1;
              break;
            }
          } else if (!(ee === ae || d(ee, ae, i, u, y))) {
            H = !1;
            break;
          }
        }
        return y.delete(e), y.delete(n), H;
      }
      function Wh(e, n, i, u, d, y, _) {
        switch (i) {
          case Tn:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case or:
            return !(e.byteLength != n.byteLength || !y(new no(e), new no(n)));
          case Bt:
          case ot:
          case Et:
            return $t(+e, +n);
          case Yt:
            return e.name == n.name && e.message == n.message;
          case tr:
          case nr:
            return e == n + "";
          case Y:
            var x = Si;
          case Lt:
            var I = u & D;
            if (x || (x = Jr), e.size != n.size && !I)
              return !1;
            var B = _.get(e);
            if (B)
              return B == n;
            u |= O, _.set(e, n);
            var L = gu(x(e), x(n), u, d, y, _);
            return _.delete(e), L;
          case qr:
            if (cr)
              return cr.call(e) == cr.call(n);
        }
        return !1;
      }
      function Vh(e, n, i, u, d, y) {
        var _ = i & D, x = Ji(e), I = x.length, B = Ji(n), L = B.length;
        if (I != L && !_)
          return !1;
        for (var W = I; W--; ) {
          var H = x[W];
          if (!(_ ? H in n : we.call(n, H)))
            return !1;
        }
        var J = y.get(e), ee = y.get(n);
        if (J && ee)
          return J == n && ee == e;
        var ae = !0;
        y.set(e, n), y.set(n, e);
        for (var te = _; ++W < I; ) {
          H = x[W];
          var ce = e[H], pe = n[H];
          if (u)
            var gt = _ ? u(pe, ce, H, n, e, y) : u(ce, pe, H, e, n, y);
          if (!(gt === o ? ce === pe || d(ce, pe, i, u, y) : gt)) {
            ae = !1;
            break;
          }
          te || (te = H == "constructor");
        }
        if (ae && !te) {
          var Je = e.constructor, ht = n.constructor;
          Je != ht && "constructor" in e && "constructor" in n && !(typeof Je == "function" && Je instanceof Je && typeof ht == "function" && ht instanceof ht) && (ae = !1);
        }
        return y.delete(e), y.delete(n), ae;
      }
      function Qt(e) {
        return os(Eu(e, o, Ou), e + "");
      }
      function Ji(e) {
        return Bl(e, We, es);
      }
      function Zi(e) {
        return Bl(e, lt, hu);
      }
      var Qi = lo ? function(e) {
        return lo.get(e);
      } : ms;
      function xo(e) {
        for (var n = e.name + "", i = Gn[n], u = we.call(Gn, n) ? i.length : 0; u--; ) {
          var d = i[u], y = d.func;
          if (y == null || y == e)
            return d.name;
        }
        return n;
      }
      function kn(e) {
        var n = we.call(m, "placeholder") ? m : e;
        return n.placeholder;
      }
      function j() {
        var e = m.iteratee || hs;
        return e = e === hs ? Fl : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Do(e, n) {
        var i = e.__data__;
        return Kh(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function ji(e) {
        for (var n = We(e), i = n.length; i--; ) {
          var u = n[i], d = e[u];
          n[i] = [u, d, bu(d)];
        }
        return n;
      }
      function Sn(e, n) {
        var i = Zp(e, n);
        return Ml(i) ? i : o;
      }
      function Gh(e) {
        var n = we.call(e, En), i = e[En];
        try {
          e[En] = o;
          var u = !0;
        } catch {
        }
        var d = eo.call(e);
        return u && (n ? e[En] = i : delete e[En]), d;
      }
      var es = Ai ? function(e) {
        return e == null ? [] : (e = xe(e), sn(Ai(e), function(n) {
          return _l.call(e, n);
        }));
      } : bs, hu = Ai ? function(e) {
        for (var n = []; e; )
          an(n, es(e)), e = ro(e);
        return n;
      } : bs, ze = Ke;
      (Ii && ze(new Ii(new ArrayBuffer(1))) != Tn || ar && ze(new ar()) != Y || Oi && ze(Oi.resolve()) != Ra || Vn && ze(new Vn()) != Lt || lr && ze(new lr()) != rr) && (ze = function(e) {
        var n = Ke(e), i = n == _t ? e.constructor : o, u = i ? Cn(i) : "";
        if (u)
          switch (u) {
            case xg:
              return Tn;
            case Dg:
              return Y;
            case Sg:
              return Ra;
            case Cg:
              return Lt;
            case Ag:
              return rr;
          }
        return n;
      });
      function Uh(e, n, i) {
        for (var u = -1, d = i.length; ++u < d; ) {
          var y = i[u], _ = y.size;
          switch (y.type) {
            case "drop":
              e += _;
              break;
            case "dropRight":
              n -= _;
              break;
            case "take":
              n = ke(n, e + _);
              break;
            case "takeRight":
              e = $e(e, n - _);
              break;
          }
        }
        return { start: e, end: n };
      }
      function Hh(e) {
        var n = e.match(Xd);
        return n ? n[1].split(Jd) : [];
      }
      function vu(e, n, i) {
        n = dn(n, e);
        for (var u = -1, d = n.length, y = !1; ++u < d; ) {
          var _ = qt(n[u]);
          if (!(y = e != null && i(e, _)))
            break;
          e = e[_];
        }
        return y || ++u != d ? y : (d = e == null ? 0 : e.length, !!d && Ro(d) && jt(_, d) && (oe(e) || An(e)));
      }
      function qh(e) {
        var n = e.length, i = new e.constructor(n);
        return n && typeof e[0] == "string" && we.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function mu(e) {
        return typeof e.constructor == "function" && !mr(e) ? Un(ro(e)) : {};
      }
      function kh(e, n, i) {
        var u = e.constructor;
        switch (n) {
          case or:
            return Yi(e);
          case Bt:
          case ot:
            return new u(+e);
          case Tn:
            return Ih(e, i);
          case jo:
          case ei:
          case ti:
          case ni:
          case ri:
          case oi:
          case ii:
          case si:
          case ai:
            return jl(e, i);
          case Y:
            return new u();
          case Et:
          case nr:
            return new u(e);
          case tr:
            return Oh(e);
          case Lt:
            return new u();
          case qr:
            return Nh(e);
        }
      }
      function zh(e, n) {
        var i = n.length;
        if (!i)
          return e;
        var u = i - 1;
        return n[u] = (i > 1 ? "& " : "") + n[u], n = n.join(i > 2 ? ", " : " "), e.replace(Kd, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Yh(e) {
        return oe(e) || An(e) || !!(wl && e && e[wl]);
      }
      function jt(e, n) {
        var i = typeof e;
        return n = n ?? de, !!n && (i == "number" || i != "symbol" && ip.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Xe(e, n, i) {
        if (!Oe(i))
          return !1;
        var u = typeof n;
        return (u == "number" ? at(i) && jt(n, i.length) : u == "string" && n in i) ? $t(i[n], e) : !1;
      }
      function ts(e, n) {
        if (oe(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || pt(e) ? !0 : qd.test(e) || !Hd.test(e) || n != null && e in xe(n);
      }
      function Kh(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function ns(e) {
        var n = xo(e), i = m[n];
        if (typeof i != "function" || !(n in fe.prototype))
          return !1;
        if (e === i)
          return !0;
        var u = Qi(i);
        return !!u && e === u[0];
      }
      function Xh(e) {
        return !!bl && bl in e;
      }
      var Jh = Qr ? en : ys;
      function mr(e) {
        var n = e && e.constructor, i = typeof n == "function" && n.prototype || Wn;
        return e === i;
      }
      function bu(e) {
        return e === e && !Oe(e);
      }
      function yu(e, n) {
        return function(i) {
          return i == null ? !1 : i[e] === n && (n !== o || e in xe(i));
        };
      }
      function Zh(e) {
        var n = Oo(e, function(u) {
          return i.size === h && i.clear(), u;
        }), i = n.cache;
        return n;
      }
      function Qh(e, n) {
        var i = e[1], u = n[1], d = i | u, y = d < (w | M | G), _ = u == G && i == R || u == G && i == z && e[7].length <= n[8] || u == (G | z) && n[7].length <= n[8] && i == R;
        if (!(y || _))
          return e;
        u & w && (e[2] = n[2], d |= i & w ? 0 : F);
        var x = n[3];
        if (x) {
          var I = e[3];
          e[3] = I ? tu(I, x, n[4]) : x, e[4] = I ? ln(e[3], b) : n[4];
        }
        return x = n[5], x && (I = e[5], e[5] = I ? nu(I, x, n[6]) : x, e[6] = I ? ln(e[5], b) : n[6]), x = n[7], x && (e[7] = x), u & G && (e[8] = e[8] == null ? n[8] : ke(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = d, e;
      }
      function jh(e) {
        var n = [];
        if (e != null)
          for (var i in xe(e))
            n.push(i);
        return n;
      }
      function ev(e) {
        return eo.call(e);
      }
      function Eu(e, n, i) {
        return n = $e(n === o ? e.length - 1 : n, 0), function() {
          for (var u = arguments, d = -1, y = $e(u.length - n, 0), _ = N(y); ++d < y; )
            _[d] = u[n + d];
          d = -1;
          for (var x = N(n + 1); ++d < n; )
            x[d] = u[d];
          return x[n] = i(_), ct(e, this, x);
        };
      }
      function _u(e, n) {
        return n.length < 2 ? e : Dn(e, At(n, 0, -1));
      }
      function tv(e, n) {
        for (var i = e.length, u = ke(n.length, i), d = st(e); u--; ) {
          var y = n[u];
          e[u] = jt(y, i) ? d[y] : o;
        }
        return e;
      }
      function rs(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var wu = Du(kl), br = vg || function(e, n) {
        return Ue.setTimeout(e, n);
      }, os = Du(Dh);
      function xu(e, n, i) {
        var u = n + "";
        return os(e, zh(u, nv(Hh(u), i)));
      }
      function Du(e) {
        var n = 0, i = 0;
        return function() {
          var u = Eg(), d = ue - (u - i);
          if (i = u, d > 0) {
            if (++n >= Q)
              return arguments[0];
          } else
            n = 0;
          return e.apply(o, arguments);
        };
      }
      function So(e, n) {
        var i = -1, u = e.length, d = u - 1;
        for (n = n === o ? u : n; ++i < n; ) {
          var y = Vi(i, d), _ = e[y];
          e[y] = e[i], e[i] = _;
        }
        return e.length = n, e;
      }
      var Su = Zh(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(kd, function(i, u, d, y) {
          n.push(d ? y.replace(jd, "$1") : u || i);
        }), n;
      });
      function qt(e) {
        if (typeof e == "string" || pt(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Re ? "-0" : n;
      }
      function Cn(e) {
        if (e != null) {
          try {
            return jr.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function nv(e, n) {
        return xt(rn, function(i) {
          var u = "_." + i[0];
          n & i[1] && !Kr(e, u) && e.push(u);
        }), e.sort();
      }
      function Cu(e) {
        if (e instanceof fe)
          return e.clone();
        var n = new St(e.__wrapped__, e.__chain__);
        return n.__actions__ = st(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function rv(e, n, i) {
        (i ? Xe(e, n, i) : n === o) ? n = 1 : n = $e(se(n), 0);
        var u = e == null ? 0 : e.length;
        if (!u || n < 1)
          return [];
        for (var d = 0, y = 0, _ = N(so(u / n)); d < u; )
          _[y++] = At(e, d, d += n);
        return _;
      }
      function ov(e) {
        for (var n = -1, i = e == null ? 0 : e.length, u = 0, d = []; ++n < i; ) {
          var y = e[n];
          y && (d[u++] = y);
        }
        return d;
      }
      function iv() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = N(e - 1), i = arguments[0], u = e; u--; )
          n[u - 1] = arguments[u];
        return an(oe(i) ? st(i) : [i], He(n, 1));
      }
      var sv = le(function(e, n) {
        return Pe(e) ? dr(e, He(n, 1, Pe, !0)) : [];
      }), av = le(function(e, n) {
        var i = It(n);
        return Pe(i) && (i = o), Pe(e) ? dr(e, He(n, 1, Pe, !0), j(i, 2)) : [];
      }), lv = le(function(e, n) {
        var i = It(n);
        return Pe(i) && (i = o), Pe(e) ? dr(e, He(n, 1, Pe, !0), o, i) : [];
      });
      function uv(e, n, i) {
        var u = e == null ? 0 : e.length;
        return u ? (n = i || n === o ? 1 : se(n), At(e, n < 0 ? 0 : n, u)) : [];
      }
      function cv(e, n, i) {
        var u = e == null ? 0 : e.length;
        return u ? (n = i || n === o ? 1 : se(n), n = u - n, At(e, 0, n < 0 ? 0 : n)) : [];
      }
      function fv(e, n) {
        return e && e.length ? mo(e, j(n, 3), !0, !0) : [];
      }
      function dv(e, n) {
        return e && e.length ? mo(e, j(n, 3), !0) : [];
      }
      function pv(e, n, i, u) {
        var d = e == null ? 0 : e.length;
        return d ? (i && typeof i != "number" && Xe(e, n, i) && (i = 0, u = d), ih(e, n, i, u)) : [];
      }
      function Au(e, n, i) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var d = i == null ? 0 : se(i);
        return d < 0 && (d = $e(u + d, 0)), Xr(e, j(n, 3), d);
      }
      function Iu(e, n, i) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var d = u - 1;
        return i !== o && (d = se(i), d = i < 0 ? $e(u + d, 0) : ke(d, u - 1)), Xr(e, j(n, 3), d, !0);
      }
      function Ou(e) {
        var n = e == null ? 0 : e.length;
        return n ? He(e, 1) : [];
      }
      function gv(e) {
        var n = e == null ? 0 : e.length;
        return n ? He(e, Re) : [];
      }
      function hv(e, n) {
        var i = e == null ? 0 : e.length;
        return i ? (n = n === o ? 1 : se(n), He(e, n)) : [];
      }
      function vv(e) {
        for (var n = -1, i = e == null ? 0 : e.length, u = {}; ++n < i; ) {
          var d = e[n];
          u[d[0]] = d[1];
        }
        return u;
      }
      function Nu(e) {
        return e && e.length ? e[0] : o;
      }
      function mv(e, n, i) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var d = i == null ? 0 : se(i);
        return d < 0 && (d = $e(u + d, 0)), Ln(e, n, d);
      }
      function bv(e) {
        var n = e == null ? 0 : e.length;
        return n ? At(e, 0, -1) : [];
      }
      var yv = le(function(e) {
        var n = Ie(e, ki);
        return n.length && n[0] === e[0] ? Li(n) : [];
      }), Ev = le(function(e) {
        var n = It(e), i = Ie(e, ki);
        return n === It(i) ? n = o : i.pop(), i.length && i[0] === e[0] ? Li(i, j(n, 2)) : [];
      }), _v = le(function(e) {
        var n = It(e), i = Ie(e, ki);
        return n = typeof n == "function" ? n : o, n && i.pop(), i.length && i[0] === e[0] ? Li(i, o, n) : [];
      });
      function wv(e, n) {
        return e == null ? "" : bg.call(e, n);
      }
      function It(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : o;
      }
      function xv(e, n, i) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var d = u;
        return i !== o && (d = se(i), d = d < 0 ? $e(u + d, 0) : ke(d, u - 1)), n === n ? ng(e, n, d) : Xr(e, cl, d, !0);
      }
      function Dv(e, n) {
        return e && e.length ? Gl(e, se(n)) : o;
      }
      var Sv = le(Ru);
      function Ru(e, n) {
        return e && e.length && n && n.length ? Wi(e, n) : e;
      }
      function Cv(e, n, i) {
        return e && e.length && n && n.length ? Wi(e, n, j(i, 2)) : e;
      }
      function Av(e, n, i) {
        return e && e.length && n && n.length ? Wi(e, n, o, i) : e;
      }
      var Iv = Qt(function(e, n) {
        var i = e == null ? 0 : e.length, u = Ri(e, n);
        return ql(e, Ie(n, function(d) {
          return jt(d, i) ? +d : d;
        }).sort(eu)), u;
      });
      function Ov(e, n) {
        var i = [];
        if (!(e && e.length))
          return i;
        var u = -1, d = [], y = e.length;
        for (n = j(n, 3); ++u < y; ) {
          var _ = e[u];
          n(_, u, e) && (i.push(_), d.push(u));
        }
        return ql(e, d), i;
      }
      function is(e) {
        return e == null ? e : wg.call(e);
      }
      function Nv(e, n, i) {
        var u = e == null ? 0 : e.length;
        return u ? (i && typeof i != "number" && Xe(e, n, i) ? (n = 0, i = u) : (n = n == null ? 0 : se(n), i = i === o ? u : se(i)), At(e, n, i)) : [];
      }
      function Rv(e, n) {
        return vo(e, n);
      }
      function Pv(e, n, i) {
        return Ui(e, n, j(i, 2));
      }
      function Tv(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var u = vo(e, n);
          if (u < i && $t(e[u], n))
            return u;
        }
        return -1;
      }
      function Bv(e, n) {
        return vo(e, n, !0);
      }
      function Lv(e, n, i) {
        return Ui(e, n, j(i, 2), !0);
      }
      function Mv(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var u = vo(e, n, !0) - 1;
          if ($t(e[u], n))
            return u;
        }
        return -1;
      }
      function Fv(e) {
        return e && e.length ? zl(e) : [];
      }
      function $v(e, n) {
        return e && e.length ? zl(e, j(n, 2)) : [];
      }
      function Wv(e) {
        var n = e == null ? 0 : e.length;
        return n ? At(e, 1, n) : [];
      }
      function Vv(e, n, i) {
        return e && e.length ? (n = i || n === o ? 1 : se(n), At(e, 0, n < 0 ? 0 : n)) : [];
      }
      function Gv(e, n, i) {
        var u = e == null ? 0 : e.length;
        return u ? (n = i || n === o ? 1 : se(n), n = u - n, At(e, n < 0 ? 0 : n, u)) : [];
      }
      function Uv(e, n) {
        return e && e.length ? mo(e, j(n, 3), !1, !0) : [];
      }
      function Hv(e, n) {
        return e && e.length ? mo(e, j(n, 3)) : [];
      }
      var qv = le(function(e) {
        return fn(He(e, 1, Pe, !0));
      }), kv = le(function(e) {
        var n = It(e);
        return Pe(n) && (n = o), fn(He(e, 1, Pe, !0), j(n, 2));
      }), zv = le(function(e) {
        var n = It(e);
        return n = typeof n == "function" ? n : o, fn(He(e, 1, Pe, !0), o, n);
      });
      function Yv(e) {
        return e && e.length ? fn(e) : [];
      }
      function Kv(e, n) {
        return e && e.length ? fn(e, j(n, 2)) : [];
      }
      function Xv(e, n) {
        return n = typeof n == "function" ? n : o, e && e.length ? fn(e, o, n) : [];
      }
      function ss(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = sn(e, function(i) {
          if (Pe(i))
            return n = $e(i.length, n), !0;
        }), xi(n, function(i) {
          return Ie(e, Ei(i));
        });
      }
      function Pu(e, n) {
        if (!(e && e.length))
          return [];
        var i = ss(e);
        return n == null ? i : Ie(i, function(u) {
          return ct(n, o, u);
        });
      }
      var Jv = le(function(e, n) {
        return Pe(e) ? dr(e, n) : [];
      }), Zv = le(function(e) {
        return qi(sn(e, Pe));
      }), Qv = le(function(e) {
        var n = It(e);
        return Pe(n) && (n = o), qi(sn(e, Pe), j(n, 2));
      }), jv = le(function(e) {
        var n = It(e);
        return n = typeof n == "function" ? n : o, qi(sn(e, Pe), o, n);
      }), em = le(ss);
      function tm(e, n) {
        return Jl(e || [], n || [], fr);
      }
      function nm(e, n) {
        return Jl(e || [], n || [], hr);
      }
      var rm = le(function(e) {
        var n = e.length, i = n > 1 ? e[n - 1] : o;
        return i = typeof i == "function" ? (e.pop(), i) : o, Pu(e, i);
      });
      function Tu(e) {
        var n = m(e);
        return n.__chain__ = !0, n;
      }
      function om(e, n) {
        return n(e), e;
      }
      function Co(e, n) {
        return n(e);
      }
      var im = Qt(function(e) {
        var n = e.length, i = n ? e[0] : 0, u = this.__wrapped__, d = function(y) {
          return Ri(y, e);
        };
        return n > 1 || this.__actions__.length || !(u instanceof fe) || !jt(i) ? this.thru(d) : (u = u.slice(i, +i + (n ? 1 : 0)), u.__actions__.push({
          func: Co,
          args: [d],
          thisArg: o
        }), new St(u, this.__chain__).thru(function(y) {
          return n && !y.length && y.push(o), y;
        }));
      });
      function sm() {
        return Tu(this);
      }
      function am() {
        return new St(this.value(), this.__chain__);
      }
      function lm() {
        this.__values__ === o && (this.__values__ = Yu(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? o : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function um() {
        return this;
      }
      function cm(e) {
        for (var n, i = this; i instanceof co; ) {
          var u = Cu(i);
          u.__index__ = 0, u.__values__ = o, n ? d.__wrapped__ = u : n = u;
          var d = u;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = e, n;
      }
      function fm() {
        var e = this.__wrapped__;
        if (e instanceof fe) {
          var n = e;
          return this.__actions__.length && (n = new fe(this)), n = n.reverse(), n.__actions__.push({
            func: Co,
            args: [is],
            thisArg: o
          }), new St(n, this.__chain__);
        }
        return this.thru(is);
      }
      function dm() {
        return Xl(this.__wrapped__, this.__actions__);
      }
      var pm = bo(function(e, n, i) {
        we.call(e, i) ? ++e[i] : Jt(e, i, 1);
      });
      function gm(e, n, i) {
        var u = oe(e) ? ll : oh;
        return i && Xe(e, n, i) && (n = o), u(e, j(n, 3));
      }
      function hm(e, n) {
        var i = oe(e) ? sn : Pl;
        return i(e, j(n, 3));
      }
      var vm = su(Au), mm = su(Iu);
      function bm(e, n) {
        return He(Ao(e, n), 1);
      }
      function ym(e, n) {
        return He(Ao(e, n), Re);
      }
      function Em(e, n, i) {
        return i = i === o ? 1 : se(i), He(Ao(e, n), i);
      }
      function Bu(e, n) {
        var i = oe(e) ? xt : cn;
        return i(e, j(n, 3));
      }
      function Lu(e, n) {
        var i = oe(e) ? Wp : Rl;
        return i(e, j(n, 3));
      }
      var _m = bo(function(e, n, i) {
        we.call(e, i) ? e[i].push(n) : Jt(e, i, [n]);
      });
      function wm(e, n, i, u) {
        e = at(e) ? e : Yn(e), i = i && !u ? se(i) : 0;
        var d = e.length;
        return i < 0 && (i = $e(d + i, 0)), Po(e) ? i <= d && e.indexOf(n, i) > -1 : !!d && Ln(e, n, i) > -1;
      }
      var xm = le(function(e, n, i) {
        var u = -1, d = typeof n == "function", y = at(e) ? N(e.length) : [];
        return cn(e, function(_) {
          y[++u] = d ? ct(n, _, i) : pr(_, n, i);
        }), y;
      }), Dm = bo(function(e, n, i) {
        Jt(e, i, n);
      });
      function Ao(e, n) {
        var i = oe(e) ? Ie : $l;
        return i(e, j(n, 3));
      }
      function Sm(e, n, i, u) {
        return e == null ? [] : (oe(n) || (n = n == null ? [] : [n]), i = u ? o : i, oe(i) || (i = i == null ? [] : [i]), Ul(e, n, i));
      }
      var Cm = bo(function(e, n, i) {
        e[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Am(e, n, i) {
        var u = oe(e) ? bi : dl, d = arguments.length < 3;
        return u(e, j(n, 4), i, d, cn);
      }
      function Im(e, n, i) {
        var u = oe(e) ? Vp : dl, d = arguments.length < 3;
        return u(e, j(n, 4), i, d, Rl);
      }
      function Om(e, n) {
        var i = oe(e) ? sn : Pl;
        return i(e, No(j(n, 3)));
      }
      function Nm(e) {
        var n = oe(e) ? Al : wh;
        return n(e);
      }
      function Rm(e, n, i) {
        (i ? Xe(e, n, i) : n === o) ? n = 1 : n = se(n);
        var u = oe(e) ? jg : xh;
        return u(e, n);
      }
      function Pm(e) {
        var n = oe(e) ? eh : Sh;
        return n(e);
      }
      function Tm(e) {
        if (e == null)
          return 0;
        if (at(e))
          return Po(e) ? Fn(e) : e.length;
        var n = ze(e);
        return n == Y || n == Lt ? e.size : Fi(e).length;
      }
      function Bm(e, n, i) {
        var u = oe(e) ? yi : Ch;
        return i && Xe(e, n, i) && (n = o), u(e, j(n, 3));
      }
      var Lm = le(function(e, n) {
        if (e == null)
          return [];
        var i = n.length;
        return i > 1 && Xe(e, n[0], n[1]) ? n = [] : i > 2 && Xe(n[0], n[1], n[2]) && (n = [n[0]]), Ul(e, He(n, 1), []);
      }), Io = hg || function() {
        return Ue.Date.now();
      };
      function Mm(e, n) {
        if (typeof n != "function")
          throw new Dt(c);
        return e = se(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function Mu(e, n, i) {
        return n = i ? o : n, n = e && n == null ? e.length : n, Zt(e, G, o, o, o, o, n);
      }
      function Fu(e, n) {
        var i;
        if (typeof n != "function")
          throw new Dt(c);
        return e = se(e), function() {
          return --e > 0 && (i = n.apply(this, arguments)), e <= 1 && (n = o), i;
        };
      }
      var as = le(function(e, n, i) {
        var u = w;
        if (i.length) {
          var d = ln(i, kn(as));
          u |= A;
        }
        return Zt(e, u, n, i, d);
      }), $u = le(function(e, n, i) {
        var u = w | M;
        if (i.length) {
          var d = ln(i, kn($u));
          u |= A;
        }
        return Zt(n, u, e, i, d);
      });
      function Wu(e, n, i) {
        n = i ? o : n;
        var u = Zt(e, R, o, o, o, o, o, n);
        return u.placeholder = Wu.placeholder, u;
      }
      function Vu(e, n, i) {
        n = i ? o : n;
        var u = Zt(e, T, o, o, o, o, o, n);
        return u.placeholder = Vu.placeholder, u;
      }
      function Gu(e, n, i) {
        var u, d, y, _, x, I, B = 0, L = !1, W = !1, H = !0;
        if (typeof e != "function")
          throw new Dt(c);
        n = Ot(n) || 0, Oe(i) && (L = !!i.leading, W = "maxWait" in i, y = W ? $e(Ot(i.maxWait) || 0, n) : y, H = "trailing" in i ? !!i.trailing : H);
        function J(Te) {
          var Wt = u, nn = d;
          return u = d = o, B = Te, _ = e.apply(nn, Wt), _;
        }
        function ee(Te) {
          return B = Te, x = br(ce, n), L ? J(Te) : _;
        }
        function ae(Te) {
          var Wt = Te - I, nn = Te - B, sc = n - Wt;
          return W ? ke(sc, y - nn) : sc;
        }
        function te(Te) {
          var Wt = Te - I, nn = Te - B;
          return I === o || Wt >= n || Wt < 0 || W && nn >= y;
        }
        function ce() {
          var Te = Io();
          if (te(Te))
            return pe(Te);
          x = br(ce, ae(Te));
        }
        function pe(Te) {
          return x = o, H && u ? J(Te) : (u = d = o, _);
        }
        function gt() {
          x !== o && Zl(x), B = 0, u = I = d = x = o;
        }
        function Je() {
          return x === o ? _ : pe(Io());
        }
        function ht() {
          var Te = Io(), Wt = te(Te);
          if (u = arguments, d = this, I = Te, Wt) {
            if (x === o)
              return ee(I);
            if (W)
              return Zl(x), x = br(ce, n), J(I);
          }
          return x === o && (x = br(ce, n)), _;
        }
        return ht.cancel = gt, ht.flush = Je, ht;
      }
      var Fm = le(function(e, n) {
        return Nl(e, 1, n);
      }), $m = le(function(e, n, i) {
        return Nl(e, Ot(n) || 0, i);
      });
      function Wm(e) {
        return Zt(e, U);
      }
      function Oo(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Dt(c);
        var i = function() {
          var u = arguments, d = n ? n.apply(this, u) : u[0], y = i.cache;
          if (y.has(d))
            return y.get(d);
          var _ = e.apply(this, u);
          return i.cache = y.set(d, _) || y, _;
        };
        return i.cache = new (Oo.Cache || Xt)(), i;
      }
      Oo.Cache = Xt;
      function No(e) {
        if (typeof e != "function")
          throw new Dt(c);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function Vm(e) {
        return Fu(2, e);
      }
      var Gm = Ah(function(e, n) {
        n = n.length == 1 && oe(n[0]) ? Ie(n[0], ft(j())) : Ie(He(n, 1), ft(j()));
        var i = n.length;
        return le(function(u) {
          for (var d = -1, y = ke(u.length, i); ++d < y; )
            u[d] = n[d].call(this, u[d]);
          return ct(e, this, u);
        });
      }), ls = le(function(e, n) {
        var i = ln(n, kn(ls));
        return Zt(e, A, o, n, i);
      }), Uu = le(function(e, n) {
        var i = ln(n, kn(Uu));
        return Zt(e, $, o, n, i);
      }), Um = Qt(function(e, n) {
        return Zt(e, z, o, o, o, n);
      });
      function Hm(e, n) {
        if (typeof e != "function")
          throw new Dt(c);
        return n = n === o ? n : se(n), le(e, n);
      }
      function qm(e, n) {
        if (typeof e != "function")
          throw new Dt(c);
        return n = n == null ? 0 : $e(se(n), 0), le(function(i) {
          var u = i[n], d = pn(i, 0, n);
          return u && an(d, u), ct(e, this, d);
        });
      }
      function km(e, n, i) {
        var u = !0, d = !0;
        if (typeof e != "function")
          throw new Dt(c);
        return Oe(i) && (u = "leading" in i ? !!i.leading : u, d = "trailing" in i ? !!i.trailing : d), Gu(e, n, {
          leading: u,
          maxWait: n,
          trailing: d
        });
      }
      function zm(e) {
        return Mu(e, 1);
      }
      function Ym(e, n) {
        return ls(zi(n), e);
      }
      function Km() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return oe(e) ? e : [e];
      }
      function Xm(e) {
        return Ct(e, E);
      }
      function Jm(e, n) {
        return n = typeof n == "function" ? n : o, Ct(e, E, n);
      }
      function Zm(e) {
        return Ct(e, g | E);
      }
      function Qm(e, n) {
        return n = typeof n == "function" ? n : o, Ct(e, g | E, n);
      }
      function jm(e, n) {
        return n == null || Ol(e, n, We(n));
      }
      function $t(e, n) {
        return e === n || e !== e && n !== n;
      }
      var eb = wo(Bi), tb = wo(function(e, n) {
        return e >= n;
      }), An = Ll(function() {
        return arguments;
      }()) ? Ll : function(e) {
        return Ne(e) && we.call(e, "callee") && !_l.call(e, "callee");
      }, oe = N.isArray, nb = nl ? ft(nl) : ch;
      function at(e) {
        return e != null && Ro(e.length) && !en(e);
      }
      function Pe(e) {
        return Ne(e) && at(e);
      }
      function rb(e) {
        return e === !0 || e === !1 || Ne(e) && Ke(e) == Bt;
      }
      var gn = mg || ys, ob = rl ? ft(rl) : fh;
      function ib(e) {
        return Ne(e) && e.nodeType === 1 && !yr(e);
      }
      function sb(e) {
        if (e == null)
          return !0;
        if (at(e) && (oe(e) || typeof e == "string" || typeof e.splice == "function" || gn(e) || zn(e) || An(e)))
          return !e.length;
        var n = ze(e);
        if (n == Y || n == Lt)
          return !e.size;
        if (mr(e))
          return !Fi(e).length;
        for (var i in e)
          if (we.call(e, i))
            return !1;
        return !0;
      }
      function ab(e, n) {
        return gr(e, n);
      }
      function lb(e, n, i) {
        i = typeof i == "function" ? i : o;
        var u = i ? i(e, n) : o;
        return u === o ? gr(e, n, o, i) : !!u;
      }
      function us(e) {
        if (!Ne(e))
          return !1;
        var n = Ke(e);
        return n == Yt || n == zt || typeof e.message == "string" && typeof e.name == "string" && !yr(e);
      }
      function ub(e) {
        return typeof e == "number" && xl(e);
      }
      function en(e) {
        if (!Oe(e))
          return !1;
        var n = Ke(e);
        return n == k || n == it || n == on || n == Td;
      }
      function Hu(e) {
        return typeof e == "number" && e == se(e);
      }
      function Ro(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= de;
      }
      function Oe(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function Ne(e) {
        return e != null && typeof e == "object";
      }
      var qu = ol ? ft(ol) : ph;
      function cb(e, n) {
        return e === n || Mi(e, n, ji(n));
      }
      function fb(e, n, i) {
        return i = typeof i == "function" ? i : o, Mi(e, n, ji(n), i);
      }
      function db(e) {
        return ku(e) && e != +e;
      }
      function pb(e) {
        if (Jh(e))
          throw new re(l);
        return Ml(e);
      }
      function gb(e) {
        return e === null;
      }
      function hb(e) {
        return e == null;
      }
      function ku(e) {
        return typeof e == "number" || Ne(e) && Ke(e) == Et;
      }
      function yr(e) {
        if (!Ne(e) || Ke(e) != _t)
          return !1;
        var n = ro(e);
        if (n === null)
          return !0;
        var i = we.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && jr.call(i) == fg;
      }
      var cs = il ? ft(il) : gh;
      function vb(e) {
        return Hu(e) && e >= -de && e <= de;
      }
      var zu = sl ? ft(sl) : hh;
      function Po(e) {
        return typeof e == "string" || !oe(e) && Ne(e) && Ke(e) == nr;
      }
      function pt(e) {
        return typeof e == "symbol" || Ne(e) && Ke(e) == qr;
      }
      var zn = al ? ft(al) : vh;
      function mb(e) {
        return e === o;
      }
      function bb(e) {
        return Ne(e) && ze(e) == rr;
      }
      function yb(e) {
        return Ne(e) && Ke(e) == Ld;
      }
      var Eb = wo($i), _b = wo(function(e, n) {
        return e <= n;
      });
      function Yu(e) {
        if (!e)
          return [];
        if (at(e))
          return Po(e) ? Mt(e) : st(e);
        if (sr && e[sr])
          return jp(e[sr]());
        var n = ze(e), i = n == Y ? Si : n == Lt ? Jr : Yn;
        return i(e);
      }
      function tn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Ot(e), e === Re || e === -Re) {
          var n = e < 0 ? -1 : 1;
          return n * tt;
        }
        return e === e ? e : 0;
      }
      function se(e) {
        var n = tn(e), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function Ku(e) {
        return e ? xn(se(e), 0, Le) : 0;
      }
      function Ot(e) {
        if (typeof e == "number")
          return e;
        if (pt(e))
          return nt;
        if (Oe(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Oe(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = pl(e);
        var i = np.test(e);
        return i || op.test(e) ? Mp(e.slice(2), i ? 2 : 8) : tp.test(e) ? nt : +e;
      }
      function Xu(e) {
        return Ht(e, lt(e));
      }
      function wb(e) {
        return e ? xn(se(e), -de, de) : e === 0 ? e : 0;
      }
      function me(e) {
        return e == null ? "" : dt(e);
      }
      var xb = Hn(function(e, n) {
        if (mr(n) || at(n)) {
          Ht(n, We(n), e);
          return;
        }
        for (var i in n)
          we.call(n, i) && fr(e, i, n[i]);
      }), Ju = Hn(function(e, n) {
        Ht(n, lt(n), e);
      }), To = Hn(function(e, n, i, u) {
        Ht(n, lt(n), e, u);
      }), Db = Hn(function(e, n, i, u) {
        Ht(n, We(n), e, u);
      }), Sb = Qt(Ri);
      function Cb(e, n) {
        var i = Un(e);
        return n == null ? i : Il(i, n);
      }
      var Ab = le(function(e, n) {
        e = xe(e);
        var i = -1, u = n.length, d = u > 2 ? n[2] : o;
        for (d && Xe(n[0], n[1], d) && (u = 1); ++i < u; )
          for (var y = n[i], _ = lt(y), x = -1, I = _.length; ++x < I; ) {
            var B = _[x], L = e[B];
            (L === o || $t(L, Wn[B]) && !we.call(e, B)) && (e[B] = y[B]);
          }
        return e;
      }), Ib = le(function(e) {
        return e.push(o, pu), ct(Zu, o, e);
      });
      function Ob(e, n) {
        return ul(e, j(n, 3), Ut);
      }
      function Nb(e, n) {
        return ul(e, j(n, 3), Ti);
      }
      function Rb(e, n) {
        return e == null ? e : Pi(e, j(n, 3), lt);
      }
      function Pb(e, n) {
        return e == null ? e : Tl(e, j(n, 3), lt);
      }
      function Tb(e, n) {
        return e && Ut(e, j(n, 3));
      }
      function Bb(e, n) {
        return e && Ti(e, j(n, 3));
      }
      function Lb(e) {
        return e == null ? [] : go(e, We(e));
      }
      function Mb(e) {
        return e == null ? [] : go(e, lt(e));
      }
      function fs(e, n, i) {
        var u = e == null ? o : Dn(e, n);
        return u === o ? i : u;
      }
      function Fb(e, n) {
        return e != null && vu(e, n, sh);
      }
      function ds(e, n) {
        return e != null && vu(e, n, ah);
      }
      var $b = lu(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = eo.call(n)), e[n] = i;
      }, gs(ut)), Wb = lu(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = eo.call(n)), we.call(e, n) ? e[n].push(i) : e[n] = [i];
      }, j), Vb = le(pr);
      function We(e) {
        return at(e) ? Cl(e) : Fi(e);
      }
      function lt(e) {
        return at(e) ? Cl(e, !0) : mh(e);
      }
      function Gb(e, n) {
        var i = {};
        return n = j(n, 3), Ut(e, function(u, d, y) {
          Jt(i, n(u, d, y), u);
        }), i;
      }
      function Ub(e, n) {
        var i = {};
        return n = j(n, 3), Ut(e, function(u, d, y) {
          Jt(i, d, n(u, d, y));
        }), i;
      }
      var Hb = Hn(function(e, n, i) {
        ho(e, n, i);
      }), Zu = Hn(function(e, n, i, u) {
        ho(e, n, i, u);
      }), qb = Qt(function(e, n) {
        var i = {};
        if (e == null)
          return i;
        var u = !1;
        n = Ie(n, function(y) {
          return y = dn(y, e), u || (u = y.length > 1), y;
        }), Ht(e, Zi(e), i), u && (i = Ct(i, g | v | E, $h));
        for (var d = n.length; d--; )
          Hi(i, n[d]);
        return i;
      });
      function kb(e, n) {
        return Qu(e, No(j(n)));
      }
      var zb = Qt(function(e, n) {
        return e == null ? {} : yh(e, n);
      });
      function Qu(e, n) {
        if (e == null)
          return {};
        var i = Ie(Zi(e), function(u) {
          return [u];
        });
        return n = j(n), Hl(e, i, function(u, d) {
          return n(u, d[0]);
        });
      }
      function Yb(e, n, i) {
        n = dn(n, e);
        var u = -1, d = n.length;
        for (d || (d = 1, e = o); ++u < d; ) {
          var y = e == null ? o : e[qt(n[u])];
          y === o && (u = d, y = i), e = en(y) ? y.call(e) : y;
        }
        return e;
      }
      function Kb(e, n, i) {
        return e == null ? e : hr(e, n, i);
      }
      function Xb(e, n, i, u) {
        return u = typeof u == "function" ? u : o, e == null ? e : hr(e, n, i, u);
      }
      var ju = fu(We), ec = fu(lt);
      function Jb(e, n, i) {
        var u = oe(e), d = u || gn(e) || zn(e);
        if (n = j(n, 4), i == null) {
          var y = e && e.constructor;
          d ? i = u ? new y() : [] : Oe(e) ? i = en(y) ? Un(ro(e)) : {} : i = {};
        }
        return (d ? xt : Ut)(e, function(_, x, I) {
          return n(i, _, x, I);
        }), i;
      }
      function Zb(e, n) {
        return e == null ? !0 : Hi(e, n);
      }
      function Qb(e, n, i) {
        return e == null ? e : Kl(e, n, zi(i));
      }
      function jb(e, n, i, u) {
        return u = typeof u == "function" ? u : o, e == null ? e : Kl(e, n, zi(i), u);
      }
      function Yn(e) {
        return e == null ? [] : Di(e, We(e));
      }
      function ey(e) {
        return e == null ? [] : Di(e, lt(e));
      }
      function ty(e, n, i) {
        return i === o && (i = n, n = o), i !== o && (i = Ot(i), i = i === i ? i : 0), n !== o && (n = Ot(n), n = n === n ? n : 0), xn(Ot(e), n, i);
      }
      function ny(e, n, i) {
        return n = tn(n), i === o ? (i = n, n = 0) : i = tn(i), e = Ot(e), lh(e, n, i);
      }
      function ry(e, n, i) {
        if (i && typeof i != "boolean" && Xe(e, n, i) && (n = i = o), i === o && (typeof n == "boolean" ? (i = n, n = o) : typeof e == "boolean" && (i = e, e = o)), e === o && n === o ? (e = 0, n = 1) : (e = tn(e), n === o ? (n = e, e = 0) : n = tn(n)), e > n) {
          var u = e;
          e = n, n = u;
        }
        if (i || e % 1 || n % 1) {
          var d = Dl();
          return ke(e + d * (n - e + Lp("1e-" + ((d + "").length - 1))), n);
        }
        return Vi(e, n);
      }
      var oy = qn(function(e, n, i) {
        return n = n.toLowerCase(), e + (i ? tc(n) : n);
      });
      function tc(e) {
        return ps(me(e).toLowerCase());
      }
      function nc(e) {
        return e = me(e), e && e.replace(sp, Kp).replace(Sp, "");
      }
      function iy(e, n, i) {
        e = me(e), n = dt(n);
        var u = e.length;
        i = i === o ? u : xn(se(i), 0, u);
        var d = i;
        return i -= n.length, i >= 0 && e.slice(i, d) == n;
      }
      function sy(e) {
        return e = me(e), e && Vd.test(e) ? e.replace(Ta, Xp) : e;
      }
      function ay(e) {
        return e = me(e), e && zd.test(e) ? e.replace(li, "\\$&") : e;
      }
      var ly = qn(function(e, n, i) {
        return e + (i ? "-" : "") + n.toLowerCase();
      }), uy = qn(function(e, n, i) {
        return e + (i ? " " : "") + n.toLowerCase();
      }), cy = iu("toLowerCase");
      function fy(e, n, i) {
        e = me(e), n = se(n);
        var u = n ? Fn(e) : 0;
        if (!n || u >= n)
          return e;
        var d = (n - u) / 2;
        return _o(ao(d), i) + e + _o(so(d), i);
      }
      function dy(e, n, i) {
        e = me(e), n = se(n);
        var u = n ? Fn(e) : 0;
        return n && u < n ? e + _o(n - u, i) : e;
      }
      function py(e, n, i) {
        e = me(e), n = se(n);
        var u = n ? Fn(e) : 0;
        return n && u < n ? _o(n - u, i) + e : e;
      }
      function gy(e, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), _g(me(e).replace(ui, ""), n || 0);
      }
      function hy(e, n, i) {
        return (i ? Xe(e, n, i) : n === o) ? n = 1 : n = se(n), Gi(me(e), n);
      }
      function vy() {
        var e = arguments, n = me(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var my = qn(function(e, n, i) {
        return e + (i ? "_" : "") + n.toLowerCase();
      });
      function by(e, n, i) {
        return i && typeof i != "number" && Xe(e, n, i) && (n = i = o), i = i === o ? Le : i >>> 0, i ? (e = me(e), e && (typeof n == "string" || n != null && !cs(n)) && (n = dt(n), !n && Mn(e)) ? pn(Mt(e), 0, i) : e.split(n, i)) : [];
      }
      var yy = qn(function(e, n, i) {
        return e + (i ? " " : "") + ps(n);
      });
      function Ey(e, n, i) {
        return e = me(e), i = i == null ? 0 : xn(se(i), 0, e.length), n = dt(n), e.slice(i, i + n.length) == n;
      }
      function _y(e, n, i) {
        var u = m.templateSettings;
        i && Xe(e, n, i) && (n = o), e = me(e), n = To({}, n, u, du);
        var d = To({}, n.imports, u.imports, du), y = We(d), _ = Di(d, y), x, I, B = 0, L = n.interpolate || kr, W = "__p += '", H = Ci(
          (n.escape || kr).source + "|" + L.source + "|" + (L === Ba ? ep : kr).source + "|" + (n.evaluate || kr).source + "|$",
          "g"
        ), J = "//# sourceURL=" + (we.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Np + "]") + `
`;
        e.replace(H, function(te, ce, pe, gt, Je, ht) {
          return pe || (pe = gt), W += e.slice(B, ht).replace(ap, Jp), ce && (x = !0, W += `' +
__e(` + ce + `) +
'`), Je && (I = !0, W += `';
` + Je + `;
__p += '`), pe && (W += `' +
((__t = (` + pe + `)) == null ? '' : __t) +
'`), B = ht + te.length, te;
        }), W += `';
`;
        var ee = we.call(n, "variable") && n.variable;
        if (!ee)
          W = `with (obj) {
` + W + `
}
`;
        else if (Qd.test(ee))
          throw new re(f);
        W = (I ? W.replace(Md, "") : W).replace(Fd, "$1").replace($d, "$1;"), W = "function(" + (ee || "obj") + `) {
` + (ee ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (x ? ", __e = _.escape" : "") + (I ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + W + `return __p
}`;
        var ae = oc(function() {
          return he(y, J + "return " + W).apply(o, _);
        });
        if (ae.source = W, us(ae))
          throw ae;
        return ae;
      }
      function wy(e) {
        return me(e).toLowerCase();
      }
      function xy(e) {
        return me(e).toUpperCase();
      }
      function Dy(e, n, i) {
        if (e = me(e), e && (i || n === o))
          return pl(e);
        if (!e || !(n = dt(n)))
          return e;
        var u = Mt(e), d = Mt(n), y = gl(u, d), _ = hl(u, d) + 1;
        return pn(u, y, _).join("");
      }
      function Sy(e, n, i) {
        if (e = me(e), e && (i || n === o))
          return e.slice(0, ml(e) + 1);
        if (!e || !(n = dt(n)))
          return e;
        var u = Mt(e), d = hl(u, Mt(n)) + 1;
        return pn(u, 0, d).join("");
      }
      function Cy(e, n, i) {
        if (e = me(e), e && (i || n === o))
          return e.replace(ui, "");
        if (!e || !(n = dt(n)))
          return e;
        var u = Mt(e), d = gl(u, Mt(n));
        return pn(u, d).join("");
      }
      function Ay(e, n) {
        var i = q, u = ne;
        if (Oe(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? se(n.length) : i, u = "omission" in n ? dt(n.omission) : u;
        }
        e = me(e);
        var y = e.length;
        if (Mn(e)) {
          var _ = Mt(e);
          y = _.length;
        }
        if (i >= y)
          return e;
        var x = i - Fn(u);
        if (x < 1)
          return u;
        var I = _ ? pn(_, 0, x).join("") : e.slice(0, x);
        if (d === o)
          return I + u;
        if (_ && (x += I.length - x), cs(d)) {
          if (e.slice(x).search(d)) {
            var B, L = I;
            for (d.global || (d = Ci(d.source, me(La.exec(d)) + "g")), d.lastIndex = 0; B = d.exec(L); )
              var W = B.index;
            I = I.slice(0, W === o ? x : W);
          }
        } else if (e.indexOf(dt(d), x) != x) {
          var H = I.lastIndexOf(d);
          H > -1 && (I = I.slice(0, H));
        }
        return I + u;
      }
      function Iy(e) {
        return e = me(e), e && Wd.test(e) ? e.replace(Pa, rg) : e;
      }
      var Oy = qn(function(e, n, i) {
        return e + (i ? " " : "") + n.toUpperCase();
      }), ps = iu("toUpperCase");
      function rc(e, n, i) {
        return e = me(e), n = i ? o : n, n === o ? Qp(e) ? sg(e) : Hp(e) : e.match(n) || [];
      }
      var oc = le(function(e, n) {
        try {
          return ct(e, o, n);
        } catch (i) {
          return us(i) ? i : new re(i);
        }
      }), Ny = Qt(function(e, n) {
        return xt(n, function(i) {
          i = qt(i), Jt(e, i, as(e[i], e));
        }), e;
      });
      function Ry(e) {
        var n = e == null ? 0 : e.length, i = j();
        return e = n ? Ie(e, function(u) {
          if (typeof u[1] != "function")
            throw new Dt(c);
          return [i(u[0]), u[1]];
        }) : [], le(function(u) {
          for (var d = -1; ++d < n; ) {
            var y = e[d];
            if (ct(y[0], this, u))
              return ct(y[1], this, u);
          }
        });
      }
      function Py(e) {
        return rh(Ct(e, g));
      }
      function gs(e) {
        return function() {
          return e;
        };
      }
      function Ty(e, n) {
        return e == null || e !== e ? n : e;
      }
      var By = au(), Ly = au(!0);
      function ut(e) {
        return e;
      }
      function hs(e) {
        return Fl(typeof e == "function" ? e : Ct(e, g));
      }
      function My(e) {
        return Wl(Ct(e, g));
      }
      function Fy(e, n) {
        return Vl(e, Ct(n, g));
      }
      var $y = le(function(e, n) {
        return function(i) {
          return pr(i, e, n);
        };
      }), Wy = le(function(e, n) {
        return function(i) {
          return pr(e, i, n);
        };
      });
      function vs(e, n, i) {
        var u = We(n), d = go(n, u);
        i == null && !(Oe(n) && (d.length || !u.length)) && (i = n, n = e, e = this, d = go(n, We(n)));
        var y = !(Oe(i) && "chain" in i) || !!i.chain, _ = en(e);
        return xt(d, function(x) {
          var I = n[x];
          e[x] = I, _ && (e.prototype[x] = function() {
            var B = this.__chain__;
            if (y || B) {
              var L = e(this.__wrapped__), W = L.__actions__ = st(this.__actions__);
              return W.push({ func: I, args: arguments, thisArg: e }), L.__chain__ = B, L;
            }
            return I.apply(e, an([this.value()], arguments));
          });
        }), e;
      }
      function Vy() {
        return Ue._ === this && (Ue._ = dg), this;
      }
      function ms() {
      }
      function Gy(e) {
        return e = se(e), le(function(n) {
          return Gl(n, e);
        });
      }
      var Uy = Ki(Ie), Hy = Ki(ll), qy = Ki(yi);
      function ic(e) {
        return ts(e) ? Ei(qt(e)) : Eh(e);
      }
      function ky(e) {
        return function(n) {
          return e == null ? o : Dn(e, n);
        };
      }
      var zy = uu(), Yy = uu(!0);
      function bs() {
        return [];
      }
      function ys() {
        return !1;
      }
      function Ky() {
        return {};
      }
      function Xy() {
        return "";
      }
      function Jy() {
        return !0;
      }
      function Zy(e, n) {
        if (e = se(e), e < 1 || e > de)
          return [];
        var i = Le, u = ke(e, Le);
        n = j(n), e -= Le;
        for (var d = xi(u, n); ++i < e; )
          n(i);
        return d;
      }
      function Qy(e) {
        return oe(e) ? Ie(e, qt) : pt(e) ? [e] : st(Su(me(e)));
      }
      function jy(e) {
        var n = ++cg;
        return me(e) + n;
      }
      var eE = Eo(function(e, n) {
        return e + n;
      }, 0), tE = Xi("ceil"), nE = Eo(function(e, n) {
        return e / n;
      }, 1), rE = Xi("floor");
      function oE(e) {
        return e && e.length ? po(e, ut, Bi) : o;
      }
      function iE(e, n) {
        return e && e.length ? po(e, j(n, 2), Bi) : o;
      }
      function sE(e) {
        return fl(e, ut);
      }
      function aE(e, n) {
        return fl(e, j(n, 2));
      }
      function lE(e) {
        return e && e.length ? po(e, ut, $i) : o;
      }
      function uE(e, n) {
        return e && e.length ? po(e, j(n, 2), $i) : o;
      }
      var cE = Eo(function(e, n) {
        return e * n;
      }, 1), fE = Xi("round"), dE = Eo(function(e, n) {
        return e - n;
      }, 0);
      function pE(e) {
        return e && e.length ? wi(e, ut) : 0;
      }
      function gE(e, n) {
        return e && e.length ? wi(e, j(n, 2)) : 0;
      }
      return m.after = Mm, m.ary = Mu, m.assign = xb, m.assignIn = Ju, m.assignInWith = To, m.assignWith = Db, m.at = Sb, m.before = Fu, m.bind = as, m.bindAll = Ny, m.bindKey = $u, m.castArray = Km, m.chain = Tu, m.chunk = rv, m.compact = ov, m.concat = iv, m.cond = Ry, m.conforms = Py, m.constant = gs, m.countBy = pm, m.create = Cb, m.curry = Wu, m.curryRight = Vu, m.debounce = Gu, m.defaults = Ab, m.defaultsDeep = Ib, m.defer = Fm, m.delay = $m, m.difference = sv, m.differenceBy = av, m.differenceWith = lv, m.drop = uv, m.dropRight = cv, m.dropRightWhile = fv, m.dropWhile = dv, m.fill = pv, m.filter = hm, m.flatMap = bm, m.flatMapDeep = ym, m.flatMapDepth = Em, m.flatten = Ou, m.flattenDeep = gv, m.flattenDepth = hv, m.flip = Wm, m.flow = By, m.flowRight = Ly, m.fromPairs = vv, m.functions = Lb, m.functionsIn = Mb, m.groupBy = _m, m.initial = bv, m.intersection = yv, m.intersectionBy = Ev, m.intersectionWith = _v, m.invert = $b, m.invertBy = Wb, m.invokeMap = xm, m.iteratee = hs, m.keyBy = Dm, m.keys = We, m.keysIn = lt, m.map = Ao, m.mapKeys = Gb, m.mapValues = Ub, m.matches = My, m.matchesProperty = Fy, m.memoize = Oo, m.merge = Hb, m.mergeWith = Zu, m.method = $y, m.methodOf = Wy, m.mixin = vs, m.negate = No, m.nthArg = Gy, m.omit = qb, m.omitBy = kb, m.once = Vm, m.orderBy = Sm, m.over = Uy, m.overArgs = Gm, m.overEvery = Hy, m.overSome = qy, m.partial = ls, m.partialRight = Uu, m.partition = Cm, m.pick = zb, m.pickBy = Qu, m.property = ic, m.propertyOf = ky, m.pull = Sv, m.pullAll = Ru, m.pullAllBy = Cv, m.pullAllWith = Av, m.pullAt = Iv, m.range = zy, m.rangeRight = Yy, m.rearg = Um, m.reject = Om, m.remove = Ov, m.rest = Hm, m.reverse = is, m.sampleSize = Rm, m.set = Kb, m.setWith = Xb, m.shuffle = Pm, m.slice = Nv, m.sortBy = Lm, m.sortedUniq = Fv, m.sortedUniqBy = $v, m.split = by, m.spread = qm, m.tail = Wv, m.take = Vv, m.takeRight = Gv, m.takeRightWhile = Uv, m.takeWhile = Hv, m.tap = om, m.throttle = km, m.thru = Co, m.toArray = Yu, m.toPairs = ju, m.toPairsIn = ec, m.toPath = Qy, m.toPlainObject = Xu, m.transform = Jb, m.unary = zm, m.union = qv, m.unionBy = kv, m.unionWith = zv, m.uniq = Yv, m.uniqBy = Kv, m.uniqWith = Xv, m.unset = Zb, m.unzip = ss, m.unzipWith = Pu, m.update = Qb, m.updateWith = jb, m.values = Yn, m.valuesIn = ey, m.without = Jv, m.words = rc, m.wrap = Ym, m.xor = Zv, m.xorBy = Qv, m.xorWith = jv, m.zip = em, m.zipObject = tm, m.zipObjectDeep = nm, m.zipWith = rm, m.entries = ju, m.entriesIn = ec, m.extend = Ju, m.extendWith = To, vs(m, m), m.add = eE, m.attempt = oc, m.camelCase = oy, m.capitalize = tc, m.ceil = tE, m.clamp = ty, m.clone = Xm, m.cloneDeep = Zm, m.cloneDeepWith = Qm, m.cloneWith = Jm, m.conformsTo = jm, m.deburr = nc, m.defaultTo = Ty, m.divide = nE, m.endsWith = iy, m.eq = $t, m.escape = sy, m.escapeRegExp = ay, m.every = gm, m.find = vm, m.findIndex = Au, m.findKey = Ob, m.findLast = mm, m.findLastIndex = Iu, m.findLastKey = Nb, m.floor = rE, m.forEach = Bu, m.forEachRight = Lu, m.forIn = Rb, m.forInRight = Pb, m.forOwn = Tb, m.forOwnRight = Bb, m.get = fs, m.gt = eb, m.gte = tb, m.has = Fb, m.hasIn = ds, m.head = Nu, m.identity = ut, m.includes = wm, m.indexOf = mv, m.inRange = ny, m.invoke = Vb, m.isArguments = An, m.isArray = oe, m.isArrayBuffer = nb, m.isArrayLike = at, m.isArrayLikeObject = Pe, m.isBoolean = rb, m.isBuffer = gn, m.isDate = ob, m.isElement = ib, m.isEmpty = sb, m.isEqual = ab, m.isEqualWith = lb, m.isError = us, m.isFinite = ub, m.isFunction = en, m.isInteger = Hu, m.isLength = Ro, m.isMap = qu, m.isMatch = cb, m.isMatchWith = fb, m.isNaN = db, m.isNative = pb, m.isNil = hb, m.isNull = gb, m.isNumber = ku, m.isObject = Oe, m.isObjectLike = Ne, m.isPlainObject = yr, m.isRegExp = cs, m.isSafeInteger = vb, m.isSet = zu, m.isString = Po, m.isSymbol = pt, m.isTypedArray = zn, m.isUndefined = mb, m.isWeakMap = bb, m.isWeakSet = yb, m.join = wv, m.kebabCase = ly, m.last = It, m.lastIndexOf = xv, m.lowerCase = uy, m.lowerFirst = cy, m.lt = Eb, m.lte = _b, m.max = oE, m.maxBy = iE, m.mean = sE, m.meanBy = aE, m.min = lE, m.minBy = uE, m.stubArray = bs, m.stubFalse = ys, m.stubObject = Ky, m.stubString = Xy, m.stubTrue = Jy, m.multiply = cE, m.nth = Dv, m.noConflict = Vy, m.noop = ms, m.now = Io, m.pad = fy, m.padEnd = dy, m.padStart = py, m.parseInt = gy, m.random = ry, m.reduce = Am, m.reduceRight = Im, m.repeat = hy, m.replace = vy, m.result = Yb, m.round = fE, m.runInContext = C, m.sample = Nm, m.size = Tm, m.snakeCase = my, m.some = Bm, m.sortedIndex = Rv, m.sortedIndexBy = Pv, m.sortedIndexOf = Tv, m.sortedLastIndex = Bv, m.sortedLastIndexBy = Lv, m.sortedLastIndexOf = Mv, m.startCase = yy, m.startsWith = Ey, m.subtract = dE, m.sum = pE, m.sumBy = gE, m.template = _y, m.times = Zy, m.toFinite = tn, m.toInteger = se, m.toLength = Ku, m.toLower = wy, m.toNumber = Ot, m.toSafeInteger = wb, m.toString = me, m.toUpper = xy, m.trim = Dy, m.trimEnd = Sy, m.trimStart = Cy, m.truncate = Ay, m.unescape = Iy, m.uniqueId = jy, m.upperCase = Oy, m.upperFirst = ps, m.each = Bu, m.eachRight = Lu, m.first = Nu, vs(m, function() {
        var e = {};
        return Ut(m, function(n, i) {
          we.call(m.prototype, i) || (e[i] = n);
        }), e;
      }(), { chain: !1 }), m.VERSION = s, xt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        m[e].placeholder = m;
      }), xt(["drop", "take"], function(e, n) {
        fe.prototype[e] = function(i) {
          i = i === o ? 1 : $e(se(i), 0);
          var u = this.__filtered__ && !n ? new fe(this) : this.clone();
          return u.__filtered__ ? u.__takeCount__ = ke(i, u.__takeCount__) : u.__views__.push({
            size: ke(i, Le),
            type: e + (u.__dir__ < 0 ? "Right" : "")
          }), u;
        }, fe.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), xt(["filter", "map", "takeWhile"], function(e, n) {
        var i = n + 1, u = i == ve || i == Be;
        fe.prototype[e] = function(d) {
          var y = this.clone();
          return y.__iteratees__.push({
            iteratee: j(d, 3),
            type: i
          }), y.__filtered__ = y.__filtered__ || u, y;
        };
      }), xt(["head", "last"], function(e, n) {
        var i = "take" + (n ? "Right" : "");
        fe.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), xt(["initial", "tail"], function(e, n) {
        var i = "drop" + (n ? "" : "Right");
        fe.prototype[e] = function() {
          return this.__filtered__ ? new fe(this) : this[i](1);
        };
      }), fe.prototype.compact = function() {
        return this.filter(ut);
      }, fe.prototype.find = function(e) {
        return this.filter(e).head();
      }, fe.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, fe.prototype.invokeMap = le(function(e, n) {
        return typeof e == "function" ? new fe(this) : this.map(function(i) {
          return pr(i, e, n);
        });
      }), fe.prototype.reject = function(e) {
        return this.filter(No(j(e)));
      }, fe.prototype.slice = function(e, n) {
        e = se(e);
        var i = this;
        return i.__filtered__ && (e > 0 || n < 0) ? new fe(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), n !== o && (n = se(n), i = n < 0 ? i.dropRight(-n) : i.take(n - e)), i);
      }, fe.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, fe.prototype.toArray = function() {
        return this.take(Le);
      }, Ut(fe.prototype, function(e, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), u = /^(?:head|last)$/.test(n), d = m[u ? "take" + (n == "last" ? "Right" : "") : n], y = u || /^find/.test(n);
        d && (m.prototype[n] = function() {
          var _ = this.__wrapped__, x = u ? [1] : arguments, I = _ instanceof fe, B = x[0], L = I || oe(_), W = function(ce) {
            var pe = d.apply(m, an([ce], x));
            return u && H ? pe[0] : pe;
          };
          L && i && typeof B == "function" && B.length != 1 && (I = L = !1);
          var H = this.__chain__, J = !!this.__actions__.length, ee = y && !H, ae = I && !J;
          if (!y && L) {
            _ = ae ? _ : new fe(this);
            var te = e.apply(_, x);
            return te.__actions__.push({ func: Co, args: [W], thisArg: o }), new St(te, H);
          }
          return ee && ae ? e.apply(this, x) : (te = this.thru(W), ee ? u ? te.value()[0] : te.value() : te);
        });
      }), xt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Zr[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", u = /^(?:pop|shift)$/.test(e);
        m.prototype[e] = function() {
          var d = arguments;
          if (u && !this.__chain__) {
            var y = this.value();
            return n.apply(oe(y) ? y : [], d);
          }
          return this[i](function(_) {
            return n.apply(oe(_) ? _ : [], d);
          });
        };
      }), Ut(fe.prototype, function(e, n) {
        var i = m[n];
        if (i) {
          var u = i.name + "";
          we.call(Gn, u) || (Gn[u] = []), Gn[u].push({ name: n, func: i });
        }
      }), Gn[yo(o, M).name] = [{
        name: "wrapper",
        func: o
      }], fe.prototype.clone = Ig, fe.prototype.reverse = Og, fe.prototype.value = Ng, m.prototype.at = im, m.prototype.chain = sm, m.prototype.commit = am, m.prototype.next = lm, m.prototype.plant = cm, m.prototype.reverse = fm, m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = dm, m.prototype.first = m.prototype.head, sr && (m.prototype[sr] = um), m;
    }, $n = ag();
    yn ? ((yn.exports = $n)._ = $n, hi._ = $n) : Ue._ = $n;
  }).call(Er);
})(Vo, Vo.exports);
Vo.exports;
function na(t) {
  delete t.qualitative9;
  let r = {};
  for (const [o, s] of Object.entries(t)) {
    const a = String(o);
    if (a.endsWith("reverse"))
      r = { ...t };
    else {
      let l = a.concat("reverse");
      r[l] = [...s].reverse();
    }
  }
  return { ...r, ...t };
}
const _E = {
  yelloworangered: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  yelloworangebrown: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  pinkpurple: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  bluegreen: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  orangered: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  red: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  greenblue: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#267BA6", "#0868ac", "#084081"],
  yellowpurple: ["#FFF0B0", "#F5CC76", "#EDAE4B", "#E3683C", "#BF2A48", "#6D2059", "#8F0C4B", "#310958", "#0E0943"],
  qualitative1: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#6a3d9a", "#cab2d6", "#E31A90", "#15017A", "#C2C0FC"],
  qualitative2: ["#7fc97f", "#beaed4", "#ff9", "#386cb0", "#f0027f", "#bf5b17", "#666", "#fedab8"],
  qualitative3: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666"],
  qualitative4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ff3", "#a65628", "#f781bf"],
  qualitative9: ["#497d0c", "#84BC49", "#88c3ea", "#fcad90", "#f26b4f", "#c31b1f", "#c31b1f"],
  "sequential-blue-2(MPX)": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "sequential-orange(MPX)": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"]
}, wE = {
  "qualitative-bold": ["#377eb8", "#ff7f00", "#4daf4a", "#984ea3", "#e41a1c", "#ffff33", "#a65628", "#f781bf", "#3399CC"],
  "qualitative-soft": ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#ACA9EB"],
  qualitative1: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#6a3d9a", "#cab2d6", "#E31A90", "#15017A", "#C2C0FC"],
  qualitative2: ["#7fc97f", "#beaed4", "#ff9", "#386cb0", "#f0027f", "#bf5b17", "#666", "#fedab8"],
  qualitative3: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666"],
  qualitative4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ff3", "#a65628", "#f781bf"],
  "sequential-blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "sequential-blue-2-(MPX)": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "sequential-orange-(MPX)": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "sequential-green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, xE = {
  "monochrome-1": ["#A6CEE3", "#15017A"],
  "monochrome-2": ["#C2C0FC", "#15017A"],
  "monochrome-3": ["#cab2d6", "#6a3d9a"],
  "monochrome-4": ["#C2C0FC", "#6a3d9a"],
  "monochrome-5": ["#fedab8", "#bf5b17"],
  "cool-1": ["#b2df8a", "#1f78b4"],
  "cool-2": ["#a6cee3", "#72D66B"],
  "cool-3": ["#C2C0FC", "#386cb0"],
  "cool-4": ["#72D66B", "#6a3d9a"],
  "cool-5": ["#a6cee3", "#6a3d9a"],
  "warm-1": ["#e31a1c", "#fedab8"],
  "complementary-1": ["#1f78b4", "#e6ab02"],
  "complementary-2": ["#1f78b4", "#ff7f00"],
  "complementary-3": ["#6a3d9a", "#ff7f00"],
  "complementary-4": ["#6a3d9a", "#e6ab02"],
  "complementary-5": ["#df168c", "#1EB386"]
}, DE = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, aS = DE, lS = na(wE), uS = na(_E), cS = na(xE), SE = (t) => {
  const [r, o] = V.useState(!1), { config: s, setConfig: a, filteredData: l, setFilteredData: c, excludedData: f, filterData: p } = t, { type: h, filterBehavior: b, filters: g } = s, v = ["dropdown", "pill", "tab", "tab bar"], E = [
    {
      label: "Ascending Alphanumeric",
      value: "asc"
    },
    {
      label: "Descending Alphanumeric",
      value: "desc"
    },
    {
      label: "Custom",
      value: "cust"
    }
  ], D = (A, $, G, z) => {
    const U = [...z.values], [q] = U.splice(A, 1);
    U.splice($, 0, q);
    const ne = s.type === "chart" ? [...s.filters] : [...l], Q = { ...ne[G] };
    Q.values = U, Q.orderedValues = U, Q.active = U[0], Q.order = "cust", ne[G] = Q, s.type === "map" && c(ne), a({ ...s, filters: ne });
  }, O = (A) => {
  }, w = (A, $) => {
    let G = s.type === "map" ? [...l] : [...s.filters];
    G[A].active = $, a({ ...s }), s.filterBehavior === "Apply Button" && o(!0), s.filterBehavior !== "Apply Button" && a({
      ...s,
      filters: G
    }), s.type === "map" && s.filterBehavior === "Filter Change" && c(G), s.type === "chart" && s.filterBehavior === "Filter Change" && c(p(G, f));
  }, M = (A) => {
    a({ ...s, filters: A }), h === "map" && c(A, f), h === "chart" && c(p(A, f)), o(!1);
  }, F = (A) => {
    let $ = [...s.filters];
    A.preventDefault(), $.map((G) => (G = T(G), G.active = G.values[0], G)), h === "map" ? c($, f) : c(p($, f)), a({ ...s, filters: $ });
  }, R = {
    buttonText: "Apply Filters",
    resetText: "Reset All",
    introText: "Make a selection from the filters to change the visualization information.",
    applyText: "Select the apply button to update the visualization information."
  }, T = (A) => {
    const { order: $ } = A, G = (U, q) => U.toString().localeCompare(q.toString(), "en", { numeric: !0 }), z = (U, q) => q.toString().localeCompare(U.toString(), "en", { numeric: !0 });
    return (!$ || $ === "") && (A.order = "asc"), $ === "desc" && (A.values = A.values.sort(z)), $ === "asc" && (A.values = A.values.sort(G)), A;
  };
  return {
    handleApplyButton: M,
    changeFilterActive: w,
    announceChange: O,
    showApplyButton: r,
    handleReset: F,
    filterConstants: R,
    filterStyleOptions: v,
    filterOrderOptions: E,
    handleFilterOrder: D,
    handleSorting: T
  };
}, CE = (t) => {
  var G;
  const { config: r, filteredData: o, dimensions: s } = t, { filters: a, type: l, general: c, theme: f, filterBehavior: p } = r, [h, b] = V.useState(!1), [g, v] = V.useState(""), E = V.useId(), {
    handleApplyButton: D,
    changeFilterActive: O,
    announceChange: w,
    showApplyButton: M,
    handleReset: F,
    filterConstants: R,
    handleSorting: T
  } = SE(t);
  V.useEffect(() => {
    s && (s[0] < 768 && (a == null ? void 0 : a.length) > 0 ? b(!0) : b(!1));
  }, [s]), V.useEffect(() => {
    if (g) {
      let z = document.getElementById(g.id);
      z && z.focus();
    }
  }, [O, g]);
  const A = (z) => z.children, $ = ["filters-section", l === "map" ? c.headerColor : f];
  if (A.Section = (z) => /* @__PURE__ */ X.createElement("section", { className: $.join(" ") }, /* @__PURE__ */ X.createElement("p", { className: "filters-section__intro-text" }, R.introText, " ", r.filterBehavior === "Apply Button" && R.applyText), /* @__PURE__ */ X.createElement("div", { className: "filters-section__wrapper" }, z.children)), A.ApplyBehavior = (z) => {
    if (p !== "Apply Button")
      return;
    const U = [c != null && c.headerColor ? c.headerColor : f, "apply"];
    return /* @__PURE__ */ X.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ X.createElement(hE, { onClick: () => D(a), disabled: !M, className: U.join(" ") }, R.buttonText), /* @__PURE__ */ X.createElement("a", { href: "#!", role: "button", onClick: F }, R.resetText));
  }, A.TabBar = (z) => {
    const { filter: U, index: q } = z;
    return /* @__PURE__ */ X.createElement("section", { className: "single-filters__tab-bar" }, U.values.map((ne, Q) => {
      const ue = ["button__tab-bar", U.active === ne ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ X.createElement(
        "button",
        {
          id: `${ne}-${q}-${Q}-${E}`,
          className: ue.join(" "),
          key: ne,
          onClick: (ve) => {
            O(q, ne), v(ve.target);
          },
          onKeyDown: (ve) => {
            ve.keyCode === 13 && (O(q, ne), v(ve.target));
          }
        },
        ne
      );
    }));
  }, A.Pills = (z) => z.pills, A.Tabs = (z) => z.tabs, A.Dropdown = (z) => {
    const { index: U, label: q, active: ne, filters: Q } = z;
    return /* @__PURE__ */ X.createElement(
      "select",
      {
        id: `filter-${U}`,
        name: q,
        "aria-label": q,
        className: "filter-select",
        "data-index": "0",
        value: ne,
        onChange: (ue) => {
          O(U, ue.target.value), w(`Filter ${q} value has been changed to ${ue.target.value}, please reference the data table to see updated values.`);
        }
      },
      Q
    );
  }, A.Style = () => {
    if (a || o) {
      let z = l === "map" ? o : a;
      return delete z.fromHash, z.map((U, q) => {
        if (U.showDropdown === !1)
          return;
        const ne = [], Q = [], ue = [], { active: ve, label: Ce, filterStyle: Be } = U;
        T(U), U.values.forEach((de, tt) => {
          const nt = ["pill", ve === de ? "pill--active" : null, f && f], Le = ["tab", ve === de && "tab--active", f && f];
          Q.push(
            /* @__PURE__ */ X.createElement("div", { className: "pill__wrapper", key: `pill-${tt}` }, /* @__PURE__ */ X.createElement(
              "button",
              {
                id: `${de}-${q}-${tt}-${E}`,
                className: nt.join(" "),
                onKeyDown: (Me) => {
                  Me.keyCode === 13 && (O(q, de), v(Me.target));
                },
                onClick: (Me) => {
                  O(q, de), v(Me.target);
                },
                name: Ce
              },
              de
            ))
          ), ne.push(
            /* @__PURE__ */ X.createElement("option", { key: tt, value: de }, U.labels && U.labels[de] ? U.labels[de] : de)
          ), ue.push(
            /* @__PURE__ */ X.createElement(
              "button",
              {
                id: `${de}-${q}-${tt}-${E}`,
                className: Le.join(" "),
                onClick: (Me) => {
                  O(q, de), v(Me.target);
                },
                onKeyDown: (Me) => {
                  Me.keyCode === 13 && (O(q, de), v(Me.target));
                }
              },
              de
            )
          );
        });
        const Re = ["single-filters", h ? "single-filters--dropdown" : `single-filters--${Be}`];
        return /* @__PURE__ */ X.createElement("div", { className: Re.join(" "), key: q }, /* @__PURE__ */ X.createElement(X.Fragment, null, Ce && /* @__PURE__ */ X.createElement("label", { htmlFor: `filter-${q}` }, Ce), Be === "tab" && !h && /* @__PURE__ */ X.createElement(A.Tabs, { tabs: ue }), Be === "pill" && !h && /* @__PURE__ */ X.createElement(A.Pills, { pills: Q }), Be === "tab bar" && !h && /* @__PURE__ */ X.createElement(A.TabBar, { filter: U, index: q }), (Be === "dropdown" || h) && /* @__PURE__ */ X.createElement(A.Dropdown, { filter: U, index: q, label: Ce, active: ve, filters: ne })));
      });
    }
  }, ((G = r == null ? void 0 : r.filters) == null ? void 0 : G.length) !== 0)
    return /* @__PURE__ */ X.createElement(A, null, /* @__PURE__ */ X.createElement(A.Section, null, /* @__PURE__ */ X.createElement(A.Style, null), /* @__PURE__ */ X.createElement(A.ApplyBehavior, null)));
};
CE.propTypes = {
  // runtimeFilters in place
  filteredData: Ye.array,
  // function for updating the runtime filters
  setFilteredData: Ye.func,
  // the full apps config
  config: Ye.object,
  // updating function for setting fitlerBehavior
  setConfig: Ye.func,
  // exclusions
  excludedData: Ye.array,
  // function for filtering the data
  filterData: Ye.func,
  dimensions: Ye.array
};
var Gs = { exports: {} }, Es = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uc;
function AE() {
  if (uc)
    return Es;
  uc = 1;
  var t = V;
  function r(g, v) {
    return g === v && (g !== 0 || 1 / g === 1 / v) || g !== g && v !== v;
  }
  var o = typeof Object.is == "function" ? Object.is : r, s = t.useState, a = t.useEffect, l = t.useLayoutEffect, c = t.useDebugValue;
  function f(g, v) {
    var E = v(), D = s({ inst: { value: E, getSnapshot: v } }), O = D[0].inst, w = D[1];
    return l(function() {
      O.value = E, O.getSnapshot = v, p(O) && w({ inst: O });
    }, [g, E, v]), a(function() {
      return p(O) && w({ inst: O }), g(function() {
        p(O) && w({ inst: O });
      });
    }, [g]), c(E), E;
  }
  function p(g) {
    var v = g.getSnapshot;
    g = g.value;
    try {
      var E = v();
      return !o(g, E);
    } catch {
      return !0;
    }
  }
  function h(g, v) {
    return v();
  }
  var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : f;
  return Es.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : b, Es;
}
var _s = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cc;
function IE() {
  return cc || (cc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = V, r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function o(R) {
      {
        for (var T = arguments.length, A = new Array(T > 1 ? T - 1 : 0), $ = 1; $ < T; $++)
          A[$ - 1] = arguments[$];
        s("error", R, A);
      }
    }
    function s(R, T, A) {
      {
        var $ = r.ReactDebugCurrentFrame, G = $.getStackAddendum();
        G !== "" && (T += "%s", A = A.concat([G]));
        var z = A.map(function(U) {
          return String(U);
        });
        z.unshift("Warning: " + T), Function.prototype.apply.call(console[R], console, z);
      }
    }
    function a(R, T) {
      return R === T && (R !== 0 || 1 / R === 1 / T) || R !== R && T !== T;
    }
    var l = typeof Object.is == "function" ? Object.is : a, c = t.useState, f = t.useEffect, p = t.useLayoutEffect, h = t.useDebugValue, b = !1, g = !1;
    function v(R, T, A) {
      b || t.startTransition !== void 0 && (b = !0, o("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var $ = T();
      if (!g) {
        var G = T();
        l($, G) || (o("The result of getSnapshot should be cached to avoid an infinite loop"), g = !0);
      }
      var z = c({
        inst: {
          value: $,
          getSnapshot: T
        }
      }), U = z[0].inst, q = z[1];
      return p(function() {
        U.value = $, U.getSnapshot = T, E(U) && q({
          inst: U
        });
      }, [R, $, T]), f(function() {
        E(U) && q({
          inst: U
        });
        var ne = function() {
          E(U) && q({
            inst: U
          });
        };
        return R(ne);
      }, [R]), h($), $;
    }
    function E(R) {
      var T = R.getSnapshot, A = R.value;
      try {
        var $ = T();
        return !l(A, $);
      } catch {
        return !0;
      }
    }
    function D(R, T, A) {
      return T();
    }
    var O = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", w = !O, M = w ? D : v, F = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : M;
    _s.useSyncExternalStore = F, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), _s;
}
process.env.NODE_ENV === "production" ? Gs.exports = AE() : Gs.exports = IE();
var ra = Gs.exports, ws = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fc;
function OE() {
  if (fc)
    return ws;
  fc = 1;
  var t = V, r = ra;
  function o(h, b) {
    return h === b && (h !== 0 || 1 / h === 1 / b) || h !== h && b !== b;
  }
  var s = typeof Object.is == "function" ? Object.is : o, a = r.useSyncExternalStore, l = t.useRef, c = t.useEffect, f = t.useMemo, p = t.useDebugValue;
  return ws.useSyncExternalStoreWithSelector = function(h, b, g, v, E) {
    var D = l(null);
    if (D.current === null) {
      var O = { hasValue: !1, value: null };
      D.current = O;
    } else
      O = D.current;
    D = f(function() {
      function M($) {
        if (!F) {
          if (F = !0, R = $, $ = v($), E !== void 0 && O.hasValue) {
            var G = O.value;
            if (E(G, $))
              return T = G;
          }
          return T = $;
        }
        if (G = T, s(R, $))
          return G;
        var z = v($);
        return E !== void 0 && E(G, z) ? G : (R = $, T = z);
      }
      var F = !1, R, T, A = g === void 0 ? null : g;
      return [function() {
        return M(b());
      }, A === null ? void 0 : function() {
        return M(A());
      }];
    }, [b, g, v, E]);
    var w = a(h, D[0], D[1]);
    return c(function() {
      O.hasValue = !0, O.value = w;
    }, [w]), p(w), w;
  }, ws;
}
var xs = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dc;
function NE() {
  return dc || (dc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = V, r = ra;
    function o(b, g) {
      return b === g && (b !== 0 || 1 / b === 1 / g) || b !== b && g !== g;
    }
    var s = typeof Object.is == "function" ? Object.is : o, a = r.useSyncExternalStore, l = t.useRef, c = t.useEffect, f = t.useMemo, p = t.useDebugValue;
    function h(b, g, v, E, D) {
      var O = l(null), w;
      O.current === null ? (w = {
        hasValue: !1,
        value: null
      }, O.current = w) : w = O.current;
      var M = f(function() {
        var A = !1, $, G, z = function(Q) {
          if (!A) {
            A = !0, $ = Q;
            var ue = E(Q);
            if (D !== void 0 && w.hasValue) {
              var ve = w.value;
              if (D(ve, ue))
                return G = ve, ve;
            }
            return G = ue, ue;
          }
          var Ce = $, Be = G;
          if (s(Ce, Q))
            return Be;
          var Re = E(Q);
          return D !== void 0 && D(Be, Re) ? Be : ($ = Q, G = Re, Re);
        }, U = v === void 0 ? null : v, q = function() {
          return z(g());
        }, ne = U === null ? void 0 : function() {
          return z(U());
        };
        return [q, ne];
      }, [g, v, E, D]), F = M[0], R = M[1], T = a(b, F, R);
      return c(function() {
        w.hasValue = !0, w.value = T;
      }, [T]), p(T), T;
    }
    xs.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xs;
}
process.env.NODE_ENV === "production" ? OE() : NE();
function RE(t) {
  t();
}
let ff = RE;
const PE = (t) => ff = t, TE = () => ff, pc = Symbol.for("react-redux-context"), gc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function BE() {
  var t;
  if (!V.createContext)
    return {};
  const r = (t = gc[pc]) != null ? t : gc[pc] = /* @__PURE__ */ new Map();
  let o = r.get(V.createContext);
  return o || (o = V.createContext(null), process.env.NODE_ENV !== "production" && (o.displayName = "ReactRedux"), r.set(V.createContext, o)), o;
}
const df = /* @__PURE__ */ BE(), LE = () => {
  throw new Error("uSES not initialized!");
};
function pf(t, r) {
  if (t == null)
    return {};
  var o = {}, s = Object.keys(t), a, l;
  for (l = 0; l < s.length; l++)
    a = s[l], !(r.indexOf(a) >= 0) && (o[a] = t[a]);
  return o;
}
var Us = { exports: {} }, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hc;
function ME() {
  if (hc)
    return be;
  hc = 1;
  var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, o = t ? Symbol.for("react.portal") : 60106, s = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, l = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, f = t ? Symbol.for("react.context") : 60110, p = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, v = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, D = t ? Symbol.for("react.lazy") : 60116, O = t ? Symbol.for("react.block") : 60121, w = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, F = t ? Symbol.for("react.scope") : 60119;
  function R(A) {
    if (typeof A == "object" && A !== null) {
      var $ = A.$$typeof;
      switch ($) {
        case r:
          switch (A = A.type, A) {
            case p:
            case h:
            case s:
            case l:
            case a:
            case g:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case f:
                case b:
                case D:
                case E:
                case c:
                  return A;
                default:
                  return $;
              }
          }
        case o:
          return $;
      }
    }
  }
  function T(A) {
    return R(A) === h;
  }
  return be.AsyncMode = p, be.ConcurrentMode = h, be.ContextConsumer = f, be.ContextProvider = c, be.Element = r, be.ForwardRef = b, be.Fragment = s, be.Lazy = D, be.Memo = E, be.Portal = o, be.Profiler = l, be.StrictMode = a, be.Suspense = g, be.isAsyncMode = function(A) {
    return T(A) || R(A) === p;
  }, be.isConcurrentMode = T, be.isContextConsumer = function(A) {
    return R(A) === f;
  }, be.isContextProvider = function(A) {
    return R(A) === c;
  }, be.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === r;
  }, be.isForwardRef = function(A) {
    return R(A) === b;
  }, be.isFragment = function(A) {
    return R(A) === s;
  }, be.isLazy = function(A) {
    return R(A) === D;
  }, be.isMemo = function(A) {
    return R(A) === E;
  }, be.isPortal = function(A) {
    return R(A) === o;
  }, be.isProfiler = function(A) {
    return R(A) === l;
  }, be.isStrictMode = function(A) {
    return R(A) === a;
  }, be.isSuspense = function(A) {
    return R(A) === g;
  }, be.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === s || A === h || A === l || A === a || A === g || A === v || typeof A == "object" && A !== null && (A.$$typeof === D || A.$$typeof === E || A.$$typeof === c || A.$$typeof === f || A.$$typeof === b || A.$$typeof === w || A.$$typeof === M || A.$$typeof === F || A.$$typeof === O);
  }, be.typeOf = R, be;
}
var ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vc;
function FE() {
  return vc || (vc = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, o = t ? Symbol.for("react.portal") : 60106, s = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, l = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, f = t ? Symbol.for("react.context") : 60110, p = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, b = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, v = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, D = t ? Symbol.for("react.lazy") : 60116, O = t ? Symbol.for("react.block") : 60121, w = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, F = t ? Symbol.for("react.scope") : 60119;
    function R(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === s || k === h || k === l || k === a || k === g || k === v || typeof k == "object" && k !== null && (k.$$typeof === D || k.$$typeof === E || k.$$typeof === c || k.$$typeof === f || k.$$typeof === b || k.$$typeof === w || k.$$typeof === M || k.$$typeof === F || k.$$typeof === O);
    }
    function T(k) {
      if (typeof k == "object" && k !== null) {
        var it = k.$$typeof;
        switch (it) {
          case r:
            var Y = k.type;
            switch (Y) {
              case p:
              case h:
              case s:
              case l:
              case a:
              case g:
                return Y;
              default:
                var Et = Y && Y.$$typeof;
                switch (Et) {
                  case f:
                  case b:
                  case D:
                  case E:
                  case c:
                    return Et;
                  default:
                    return it;
                }
            }
          case o:
            return it;
        }
      }
    }
    var A = p, $ = h, G = f, z = c, U = r, q = b, ne = s, Q = D, ue = E, ve = o, Ce = l, Be = a, Re = g, de = !1;
    function tt(k) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), nt(k) || T(k) === p;
    }
    function nt(k) {
      return T(k) === h;
    }
    function Le(k) {
      return T(k) === f;
    }
    function Me(k) {
      return T(k) === c;
    }
    function Tt(k) {
      return typeof k == "object" && k !== null && k.$$typeof === r;
    }
    function rn(k) {
      return T(k) === b;
    }
    function rt(k) {
      return T(k) === s;
    }
    function yt(k) {
      return T(k) === D;
    }
    function on(k) {
      return T(k) === E;
    }
    function Bt(k) {
      return T(k) === o;
    }
    function ot(k) {
      return T(k) === l;
    }
    function zt(k) {
      return T(k) === a;
    }
    function Yt(k) {
      return T(k) === g;
    }
    ye.AsyncMode = A, ye.ConcurrentMode = $, ye.ContextConsumer = G, ye.ContextProvider = z, ye.Element = U, ye.ForwardRef = q, ye.Fragment = ne, ye.Lazy = Q, ye.Memo = ue, ye.Portal = ve, ye.Profiler = Ce, ye.StrictMode = Be, ye.Suspense = Re, ye.isAsyncMode = tt, ye.isConcurrentMode = nt, ye.isContextConsumer = Le, ye.isContextProvider = Me, ye.isElement = Tt, ye.isForwardRef = rn, ye.isFragment = rt, ye.isLazy = yt, ye.isMemo = on, ye.isPortal = Bt, ye.isProfiler = ot, ye.isStrictMode = zt, ye.isSuspense = Yt, ye.isValidElementType = R, ye.typeOf = T;
  }()), ye;
}
process.env.NODE_ENV === "production" ? Us.exports = ME() : Us.exports = FE();
var $E = Us.exports, oa = $E, WE = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, VE = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, GE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, gf = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ia = {};
ia[oa.ForwardRef] = GE;
ia[oa.Memo] = gf;
function mc(t) {
  return oa.isMemo(t) ? gf : ia[t.$$typeof] || WE;
}
var UE = Object.defineProperty, HE = Object.getOwnPropertyNames, bc = Object.getOwnPropertySymbols, qE = Object.getOwnPropertyDescriptor, kE = Object.getPrototypeOf, yc = Object.prototype;
function hf(t, r, o) {
  if (typeof r != "string") {
    if (yc) {
      var s = kE(r);
      s && s !== yc && hf(t, s, o);
    }
    var a = HE(r);
    bc && (a = a.concat(bc(r)));
    for (var l = mc(t), c = mc(r), f = 0; f < a.length; ++f) {
      var p = a[f];
      if (!VE[p] && !(o && o[p]) && !(c && c[p]) && !(l && l[p])) {
        var h = qE(r, p);
        try {
          UE(t, p, h);
        } catch {
        }
      }
    }
  }
  return t;
}
var zE = hf;
const Ec = /* @__PURE__ */ cf(zE);
var Hs = { exports: {} }, Ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _c;
function YE() {
  if (_c)
    return Ee;
  _c = 1;
  var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.server_context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), D;
  D = Symbol.for("react.module.reference");
  function O(w) {
    if (typeof w == "object" && w !== null) {
      var M = w.$$typeof;
      switch (M) {
        case t:
          switch (w = w.type, w) {
            case o:
            case a:
            case s:
            case h:
            case b:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case f:
                case c:
                case p:
                case v:
                case g:
                case l:
                  return w;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  return Ee.ContextConsumer = c, Ee.ContextProvider = l, Ee.Element = t, Ee.ForwardRef = p, Ee.Fragment = o, Ee.Lazy = v, Ee.Memo = g, Ee.Portal = r, Ee.Profiler = a, Ee.StrictMode = s, Ee.Suspense = h, Ee.SuspenseList = b, Ee.isAsyncMode = function() {
    return !1;
  }, Ee.isConcurrentMode = function() {
    return !1;
  }, Ee.isContextConsumer = function(w) {
    return O(w) === c;
  }, Ee.isContextProvider = function(w) {
    return O(w) === l;
  }, Ee.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Ee.isForwardRef = function(w) {
    return O(w) === p;
  }, Ee.isFragment = function(w) {
    return O(w) === o;
  }, Ee.isLazy = function(w) {
    return O(w) === v;
  }, Ee.isMemo = function(w) {
    return O(w) === g;
  }, Ee.isPortal = function(w) {
    return O(w) === r;
  }, Ee.isProfiler = function(w) {
    return O(w) === a;
  }, Ee.isStrictMode = function(w) {
    return O(w) === s;
  }, Ee.isSuspense = function(w) {
    return O(w) === h;
  }, Ee.isSuspenseList = function(w) {
    return O(w) === b;
  }, Ee.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === o || w === a || w === s || w === h || w === b || w === E || typeof w == "object" && w !== null && (w.$$typeof === v || w.$$typeof === g || w.$$typeof === l || w.$$typeof === c || w.$$typeof === p || w.$$typeof === D || w.getModuleId !== void 0);
  }, Ee.typeOf = O, Ee;
}
var _e = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wc;
function KE() {
  return wc || (wc = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.server_context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), D = !1, O = !1, w = !1, M = !1, F = !1, R;
    R = Symbol.for("react.module.reference");
    function T(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === o || Y === a || F || Y === s || Y === h || Y === b || M || Y === E || D || O || w || typeof Y == "object" && Y !== null && (Y.$$typeof === v || Y.$$typeof === g || Y.$$typeof === l || Y.$$typeof === c || Y.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Y.$$typeof === R || Y.getModuleId !== void 0));
    }
    function A(Y) {
      if (typeof Y == "object" && Y !== null) {
        var Et = Y.$$typeof;
        switch (Et) {
          case t:
            var Pn = Y.type;
            switch (Pn) {
              case o:
              case a:
              case s:
              case h:
              case b:
                return Pn;
              default:
                var _t = Pn && Pn.$$typeof;
                switch (_t) {
                  case f:
                  case c:
                  case p:
                  case v:
                  case g:
                  case l:
                    return _t;
                  default:
                    return Et;
                }
            }
          case r:
            return Et;
        }
      }
    }
    var $ = c, G = l, z = t, U = p, q = o, ne = v, Q = g, ue = r, ve = a, Ce = s, Be = h, Re = b, de = !1, tt = !1;
    function nt(Y) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Le(Y) {
      return tt || (tt = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Me(Y) {
      return A(Y) === c;
    }
    function Tt(Y) {
      return A(Y) === l;
    }
    function rn(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === t;
    }
    function rt(Y) {
      return A(Y) === p;
    }
    function yt(Y) {
      return A(Y) === o;
    }
    function on(Y) {
      return A(Y) === v;
    }
    function Bt(Y) {
      return A(Y) === g;
    }
    function ot(Y) {
      return A(Y) === r;
    }
    function zt(Y) {
      return A(Y) === a;
    }
    function Yt(Y) {
      return A(Y) === s;
    }
    function k(Y) {
      return A(Y) === h;
    }
    function it(Y) {
      return A(Y) === b;
    }
    _e.ContextConsumer = $, _e.ContextProvider = G, _e.Element = z, _e.ForwardRef = U, _e.Fragment = q, _e.Lazy = ne, _e.Memo = Q, _e.Portal = ue, _e.Profiler = ve, _e.StrictMode = Ce, _e.Suspense = Be, _e.SuspenseList = Re, _e.isAsyncMode = nt, _e.isConcurrentMode = Le, _e.isContextConsumer = Me, _e.isContextProvider = Tt, _e.isElement = rn, _e.isForwardRef = rt, _e.isFragment = yt, _e.isLazy = on, _e.isMemo = Bt, _e.isPortal = ot, _e.isProfiler = zt, _e.isStrictMode = Yt, _e.isSuspense = k, _e.isSuspenseList = it, _e.isValidElementType = T, _e.typeOf = A;
  }()), _e;
}
process.env.NODE_ENV === "production" ? Hs.exports = YE() : Hs.exports = KE();
var xc = Hs.exports;
function sa(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function Ds(t, r) {
  if (t)
    (r === "mapStateToProps" || r === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(t, "dependsOnOwnProps") || sa(`The selector for ${r} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${r} in connect.`);
}
function XE(t, r, o) {
  Ds(t, "mapStateToProps"), Ds(r, "mapDispatchToProps"), Ds(o, "mergeProps");
}
const JE = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function ZE(t, r, o, s, {
  areStatesEqual: a,
  areOwnPropsEqual: l,
  areStatePropsEqual: c
}) {
  let f = !1, p, h, b, g, v;
  function E(F, R) {
    return p = F, h = R, b = t(p, h), g = r(s, h), v = o(b, g, h), f = !0, v;
  }
  function D() {
    return b = t(p, h), r.dependsOnOwnProps && (g = r(s, h)), v = o(b, g, h), v;
  }
  function O() {
    return t.dependsOnOwnProps && (b = t(p, h)), r.dependsOnOwnProps && (g = r(s, h)), v = o(b, g, h), v;
  }
  function w() {
    const F = t(p, h), R = !c(F, b);
    return b = F, R && (v = o(b, g, h)), v;
  }
  function M(F, R) {
    const T = !l(R, h), A = !a(F, p, R, h);
    return p = F, h = R, T && A ? D() : T ? O() : A ? w() : v;
  }
  return function(R, T) {
    return f ? M(R, T) : E(R, T);
  };
}
function QE(t, r) {
  let {
    initMapStateToProps: o,
    initMapDispatchToProps: s,
    initMergeProps: a
  } = r, l = pf(r, JE);
  const c = o(t, l), f = s(t, l), p = a(t, l);
  return process.env.NODE_ENV !== "production" && XE(c, f, p), ZE(c, f, p, t, l);
}
function jE(t, r) {
  const o = {};
  for (const s in t) {
    const a = t[s];
    typeof a == "function" && (o[s] = (...l) => r(a(...l)));
  }
  return o;
}
function e0(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let r = Object.getPrototypeOf(t);
  if (r === null)
    return !0;
  let o = r;
  for (; Object.getPrototypeOf(o) !== null; )
    o = Object.getPrototypeOf(o);
  return r === o;
}
function vf(t, r, o) {
  e0(t) || sa(`${o}() in ${r} must return a plain object. Instead received ${t}.`);
}
function qs(t) {
  return function(o) {
    const s = t(o);
    function a() {
      return s;
    }
    return a.dependsOnOwnProps = !1, a;
  };
}
function Dc(t) {
  return t.dependsOnOwnProps ? !!t.dependsOnOwnProps : t.length !== 1;
}
function mf(t, r) {
  return function(s, {
    displayName: a
  }) {
    const l = function(f, p) {
      return l.dependsOnOwnProps ? l.mapToProps(f, p) : l.mapToProps(f, void 0);
    };
    return l.dependsOnOwnProps = !0, l.mapToProps = function(f, p) {
      l.mapToProps = t, l.dependsOnOwnProps = Dc(t);
      let h = l(f, p);
      return typeof h == "function" && (l.mapToProps = h, l.dependsOnOwnProps = Dc(h), h = l(f, p)), process.env.NODE_ENV !== "production" && vf(h, a, r), h;
    }, l;
  };
}
function aa(t, r) {
  return (o, s) => {
    throw new Error(`Invalid value of type ${typeof t} for ${r} argument when connecting component ${s.wrappedComponentName}.`);
  };
}
function t0(t) {
  return t && typeof t == "object" ? qs((r) => (
    // @ts-ignore
    jE(t, r)
  )) : t ? typeof t == "function" ? (
    // @ts-ignore
    mf(t, "mapDispatchToProps")
  ) : aa(t, "mapDispatchToProps") : qs((r) => ({
    dispatch: r
  }));
}
function n0(t) {
  return t ? typeof t == "function" ? (
    // @ts-ignore
    mf(t, "mapStateToProps")
  ) : aa(t, "mapStateToProps") : qs(() => ({}));
}
function r0(t, r, o) {
  return Xn({}, o, t, r);
}
function o0(t) {
  return function(o, {
    displayName: s,
    areMergedPropsEqual: a
  }) {
    let l = !1, c;
    return function(p, h, b) {
      const g = t(p, h, b);
      return l ? a(g, c) || (c = g) : (l = !0, c = g, process.env.NODE_ENV !== "production" && vf(c, s, "mergeProps")), c;
    };
  };
}
function i0(t) {
  return t ? typeof t == "function" ? o0(t) : aa(t, "mergeProps") : () => r0;
}
function s0() {
  const t = TE();
  let r = null, o = null;
  return {
    clear() {
      r = null, o = null;
    },
    notify() {
      t(() => {
        let s = r;
        for (; s; )
          s.callback(), s = s.next;
      });
    },
    get() {
      let s = [], a = r;
      for (; a; )
        s.push(a), a = a.next;
      return s;
    },
    subscribe(s) {
      let a = !0, l = o = {
        callback: s,
        next: null,
        prev: o
      };
      return l.prev ? l.prev.next = l : r = l, function() {
        !a || r === null || (a = !1, l.next ? l.next.prev = l.prev : o = l.prev, l.prev ? l.prev.next = l.next : r = l.next);
      };
    }
  };
}
const Sc = {
  notify() {
  },
  get: () => []
};
function bf(t, r) {
  let o, s = Sc, a = 0, l = !1;
  function c(O) {
    b();
    const w = s.subscribe(O);
    let M = !1;
    return () => {
      M || (M = !0, w(), g());
    };
  }
  function f() {
    s.notify();
  }
  function p() {
    D.onStateChange && D.onStateChange();
  }
  function h() {
    return l;
  }
  function b() {
    a++, o || (o = r ? r.addNestedSub(p) : t.subscribe(p), s = s0());
  }
  function g() {
    a--, o && a === 0 && (o(), o = void 0, s.clear(), s = Sc);
  }
  function v() {
    l || (l = !0, b());
  }
  function E() {
    l && (l = !1, g());
  }
  const D = {
    addNestedSub: c,
    notifyNestedSubs: f,
    handleChangeWrapper: p,
    isSubscribed: h,
    trySubscribe: v,
    tryUnsubscribe: E,
    getListeners: () => s
  };
  return D;
}
const a0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Go = a0 ? V.useLayoutEffect : V.useEffect;
function Cc(t, r) {
  return t === r ? t !== 0 || r !== 0 || 1 / t === 1 / r : t !== t && r !== r;
}
function Ss(t, r) {
  if (Cc(t, r))
    return !0;
  if (typeof t != "object" || t === null || typeof r != "object" || r === null)
    return !1;
  const o = Object.keys(t), s = Object.keys(r);
  if (o.length !== s.length)
    return !1;
  for (let a = 0; a < o.length; a++)
    if (!Object.prototype.hasOwnProperty.call(r, o[a]) || !Cc(t[o[a]], r[o[a]]))
      return !1;
  return !0;
}
const l0 = ["reactReduxForwardedRef"];
let yf = LE;
const u0 = (t) => {
  yf = t;
}, c0 = [null, null], f0 = (t) => {
  try {
    return JSON.stringify(t);
  } catch {
    return String(t);
  }
};
function d0(t, r, o) {
  Go(() => t(...r), o);
}
function p0(t, r, o, s, a, l) {
  t.current = s, o.current = !1, a.current && (a.current = null, l());
}
function g0(t, r, o, s, a, l, c, f, p, h, b) {
  if (!t)
    return () => {
    };
  let g = !1, v = null;
  const E = () => {
    if (g || !f.current)
      return;
    const O = r.getState();
    let w, M;
    try {
      w = s(O, a.current);
    } catch (F) {
      M = F, v = F;
    }
    M || (v = null), w === l.current ? c.current || h() : (l.current = w, p.current = w, c.current = !0, b());
  };
  return o.onStateChange = E, o.trySubscribe(), E(), () => {
    if (g = !0, o.tryUnsubscribe(), o.onStateChange = null, v)
      throw v;
  };
}
function h0(t, r) {
  return t === r;
}
let Ac = !1;
function Ef(t, r, o, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: s,
  areStatesEqual: a = h0,
  areOwnPropsEqual: l = Ss,
  areStatePropsEqual: c = Ss,
  areMergedPropsEqual: f = Ss,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: p = !1,
  // the context consumer to use
  context: h = df
} = {}) {
  process.env.NODE_ENV !== "production" && s !== void 0 && !Ac && (Ac = !0, sa('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const b = h, g = n0(t), v = t0(r), E = i0(o), D = !!t;
  return (w) => {
    if (process.env.NODE_ENV !== "production" && !xc.isValidElementType(w))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${f0(w)}`);
    const M = w.displayName || w.name || "Component", F = `Connect(${M})`, R = {
      shouldHandleStateChanges: D,
      displayName: F,
      wrappedComponentName: M,
      WrappedComponent: w,
      // @ts-ignore
      initMapStateToProps: g,
      // @ts-ignore
      initMapDispatchToProps: v,
      initMergeProps: E,
      areStatesEqual: a,
      areStatePropsEqual: c,
      areOwnPropsEqual: l,
      areMergedPropsEqual: f
    };
    function T(G) {
      const [z, U, q] = V.useMemo(() => {
        const {
          reactReduxForwardedRef: k
        } = G, it = pf(G, l0);
        return [G.context, k, it];
      }, [G]), ne = V.useMemo(() => z && z.Consumer && // @ts-ignore
      xc.isContextConsumer(/* @__PURE__ */ V.createElement(z.Consumer, null)) ? z : b, [z, b]), Q = V.useContext(ne), ue = !!G.store && !!G.store.getState && !!G.store.dispatch, ve = !!Q && !!Q.store;
      if (process.env.NODE_ENV !== "production" && !ue && !ve)
        throw new Error(`Could not find "store" in the context of "${F}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${F} in connect options.`);
      const Ce = ue ? G.store : Q.store, Be = ve ? Q.getServerState : Ce.getState, Re = V.useMemo(() => QE(Ce.dispatch, R), [Ce]), [de, tt] = V.useMemo(() => {
        if (!D)
          return c0;
        const k = bf(Ce, ue ? void 0 : Q.subscription), it = k.notifyNestedSubs.bind(k);
        return [k, it];
      }, [Ce, ue, Q]), nt = V.useMemo(() => ue ? Q : Xn({}, Q, {
        subscription: de
      }), [ue, Q, de]), Le = V.useRef(), Me = V.useRef(q), Tt = V.useRef(), rn = V.useRef(!1);
      V.useRef(!1);
      const rt = V.useRef(!1), yt = V.useRef();
      Go(() => (rt.current = !0, () => {
        rt.current = !1;
      }), []);
      const on = V.useMemo(() => () => Tt.current && q === Me.current ? Tt.current : Re(Ce.getState(), q), [Ce, q]), Bt = V.useMemo(() => (it) => de ? g0(
        D,
        Ce,
        de,
        // @ts-ignore
        Re,
        Me,
        Le,
        rn,
        rt,
        Tt,
        tt,
        it
      ) : () => {
      }, [de]);
      d0(p0, [Me, Le, rn, q, Tt, tt]);
      let ot;
      try {
        ot = yf(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Bt,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          on,
          Be ? () => Re(Be(), q) : on
        );
      } catch (k) {
        throw yt.current && (k.message += `
The error may be correlated with this previous error:
${yt.current.stack}

`), k;
      }
      Go(() => {
        yt.current = void 0, Tt.current = void 0, Le.current = ot;
      });
      const zt = V.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ V.createElement(w, Xn({}, ot, {
          ref: U
        }))
      ), [U, w, ot]);
      return V.useMemo(() => D ? /* @__PURE__ */ V.createElement(ne.Provider, {
        value: nt
      }, zt) : zt, [ne, zt, nt]);
    }
    const $ = V.memo(T);
    if ($.WrappedComponent = w, $.displayName = T.displayName = F, p) {
      const z = V.forwardRef(function(q, ne) {
        return /* @__PURE__ */ V.createElement($, Xn({}, q, {
          reactReduxForwardedRef: ne
        }));
      });
      return z.displayName = F, z.WrappedComponent = w, Ec(z, w);
    }
    return Ec($, w);
  };
}
function v0({
  store: t,
  context: r,
  children: o,
  serverState: s,
  stabilityCheck: a = "once",
  noopCheck: l = "once"
}) {
  const c = V.useMemo(() => {
    const h = bf(t);
    return {
      store: t,
      subscription: h,
      getServerState: s ? () => s : void 0,
      stabilityCheck: a,
      noopCheck: l
    };
  }, [t, s, a, l]), f = V.useMemo(() => t.getState(), [t]);
  Go(() => {
    const {
      subscription: h
    } = c;
    return h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), f !== t.getState() && h.notifyNestedSubs(), () => {
      h.tryUnsubscribe(), h.onStateChange = void 0;
    };
  }, [c, f]);
  const p = r || df;
  return /* @__PURE__ */ V.createElement(p.Provider, {
    value: c
  }, o);
}
u0(ra.useSyncExternalStore);
PE(ta.unstable_batchedUpdates);
function m0(t, r) {
  if (t.length !== r.length)
    return !1;
  for (var o = 0; o < t.length; o++)
    if (t[o] !== r[o])
      return !1;
  return !0;
}
function _f(t, r) {
  var o = V.useState(function() {
    return {
      inputs: r,
      result: t()
    };
  })[0], s = V.useRef(!0), a = V.useRef(o), l = s.current || !!(r && a.current.inputs && m0(r, a.current.inputs)), c = l ? a.current : {
    inputs: r,
    result: t()
  };
  return V.useEffect(function() {
    s.current = !1, a.current = c;
  }, [c]), c.result;
}
function b0(t, r) {
  return _f(function() {
    return t;
  }, r);
}
var ge = _f, Z = b0, Gt = function(r) {
  var o = r.top, s = r.right, a = r.bottom, l = r.left, c = s - l, f = a - o, p = {
    top: o,
    right: s,
    bottom: a,
    left: l,
    width: c,
    height: f,
    x: l,
    y: o,
    center: {
      x: (s + l) / 2,
      y: (a + o) / 2
    }
  };
  return p;
}, la = function(r, o) {
  return {
    top: r.top - o.top,
    left: r.left - o.left,
    bottom: r.bottom + o.bottom,
    right: r.right + o.right
  };
}, Ic = function(r, o) {
  return {
    top: r.top + o.top,
    left: r.left + o.left,
    bottom: r.bottom - o.bottom,
    right: r.right - o.right
  };
}, y0 = function(r, o) {
  return {
    top: r.top + o.y,
    left: r.left + o.x,
    bottom: r.bottom + o.y,
    right: r.right + o.x
  };
}, Cs = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ua = function(r) {
  var o = r.borderBox, s = r.margin, a = s === void 0 ? Cs : s, l = r.border, c = l === void 0 ? Cs : l, f = r.padding, p = f === void 0 ? Cs : f, h = Gt(la(o, a)), b = Gt(Ic(o, c)), g = Gt(Ic(b, p));
  return {
    marginBox: h,
    borderBox: Gt(o),
    paddingBox: b,
    contentBox: g,
    margin: a,
    border: c,
    padding: p
  };
}, Nt = function(r) {
  var o = r.slice(0, -2), s = r.slice(-2);
  if (s !== "px")
    return 0;
  var a = Number(o);
  return isNaN(a) && (process.env.NODE_ENV !== "production" ? lc(!1, "Could not parse value [raw: " + r + ", without suffix: " + o + "]") : lc(!1)), a;
}, E0 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Uo = function(r, o) {
  var s = r.borderBox, a = r.border, l = r.margin, c = r.padding, f = y0(s, o);
  return ua({
    borderBox: f,
    border: a,
    margin: l,
    padding: c
  });
}, Ho = function(r, o) {
  return o === void 0 && (o = E0()), Uo(r, o);
}, wf = function(r, o) {
  var s = {
    top: Nt(o.marginTop),
    right: Nt(o.marginRight),
    bottom: Nt(o.marginBottom),
    left: Nt(o.marginLeft)
  }, a = {
    top: Nt(o.paddingTop),
    right: Nt(o.paddingRight),
    bottom: Nt(o.paddingBottom),
    left: Nt(o.paddingLeft)
  }, l = {
    top: Nt(o.borderTopWidth),
    right: Nt(o.borderRightWidth),
    bottom: Nt(o.borderBottomWidth),
    left: Nt(o.borderLeftWidth)
  };
  return ua({
    borderBox: r,
    margin: s,
    padding: a,
    border: l
  });
}, xf = function(r) {
  var o = r.getBoundingClientRect(), s = window.getComputedStyle(r);
  return wf(o, s);
}, Oc = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};
function _0(t, r) {
  return !!(t === r || Oc(t) && Oc(r));
}
function w0(t, r) {
  if (t.length !== r.length)
    return !1;
  for (var o = 0; o < t.length; o++)
    if (!_0(t[o], r[o]))
      return !1;
  return !0;
}
function Ve(t, r) {
  r === void 0 && (r = w0);
  var o = null;
  function s() {
    for (var a = [], l = 0; l < arguments.length; l++)
      a[l] = arguments[l];
    if (o && o.lastThis === this && r(a, o.lastArgs))
      return o.lastResult;
    var c = t.apply(this, a);
    return o = {
      lastResult: c,
      lastArgs: a,
      lastThis: this
    }, c;
  }
  return s.clear = function() {
    o = null;
  }, s;
}
var x0 = function(r) {
  var o = [], s = null, a = function() {
    for (var c = arguments.length, f = new Array(c), p = 0; p < c; p++)
      f[p] = arguments[p];
    o = f, !s && (s = requestAnimationFrame(function() {
      s = null, r.apply(void 0, o);
    }));
  };
  return a.cancel = function() {
    s && (cancelAnimationFrame(s), s = null);
  }, a;
};
const Or = x0, D0 = process.env.NODE_ENV === "production", S0 = /[ \t]{2,}/g, C0 = /^[ \t]*/gm, Nc = (t) => t.replace(S0, " ").replace(C0, "").trim(), A0 = (t) => Nc(`
  %c@hello-pangea/dnd

  %c${Nc(t)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), I0 = (t) => [A0(t), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], O0 = "__@hello-pangea/dnd-disable-dev-warnings";
function Df(t, r) {
  D0 || typeof window < "u" && window[O0] || console[t](...I0(r));
}
const Se = Df.bind(null, "warn"), ks = Df.bind(null, "error");
function hn() {
}
function N0(t, r) {
  return {
    ...t,
    ...r
  };
}
function Rt(t, r, o) {
  const s = r.map((a) => {
    const l = N0(o, a.options);
    return t.addEventListener(a.eventName, a.fn, l), function() {
      t.removeEventListener(a.eventName, a.fn, l);
    };
  });
  return function() {
    s.forEach((l) => {
      l();
    });
  };
}
const R0 = process.env.NODE_ENV === "production", Rc = "Invariant failed";
class Nr extends Error {
}
Nr.prototype.toString = function() {
  return this.message;
};
function S(t, r) {
  if (!t)
    throw R0 ? new Nr(Rc) : new Nr(`${Rc}: ${r || ""}`);
}
class P0 extends X.Component {
  constructor() {
    super(...arguments), this.callbacks = null, this.unbind = hn, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Se(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const s = r.error;
      s instanceof Nr && (r.preventDefault(), process.env.NODE_ENV !== "production" && ks(s.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Rt(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(r) {
    if (r instanceof Nr) {
      process.env.NODE_ENV !== "production" && ks(r.message), this.setState({});
      return;
    }
    throw r;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const T0 = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, qo = (t) => t + 1, B0 = (t) => `
  You have lifted an item in position ${qo(t.source.index)}
`, Sf = (t, r) => {
  const o = t.droppableId === r.droppableId, s = qo(t.index), a = qo(r.index);
  return o ? `
      You have moved the item from position ${s}
      to position ${a}
    ` : `
    You have moved the item from position ${s}
    in list ${t.droppableId}
    to list ${r.droppableId}
    in position ${a}
  `;
}, Cf = (t, r, o) => r.droppableId === o.droppableId ? `
      The item ${t}
      has been combined with ${o.draggableId}` : `
      The item ${t}
      in list ${r.droppableId}
      has been combined with ${o.draggableId}
      in list ${o.droppableId}
    `, L0 = (t) => {
  const r = t.destination;
  if (r)
    return Sf(t.source, r);
  const o = t.combine;
  return o ? Cf(t.draggableId, t.source, o) : "You are over an area that cannot be dropped on";
}, Pc = (t) => `
  The item has returned to its starting position
  of ${qo(t.index)}
`, M0 = (t) => {
  if (t.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Pc(t.source)}
    `;
  const r = t.destination, o = t.combine;
  return r ? `
      You have dropped the item.
      ${Sf(t.source, r)}
    ` : o ? `
      You have dropped the item.
      ${Cf(t.draggableId, t.source, o)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Pc(t.source)}
  `;
}, F0 = {
  dragHandleUsageInstructions: T0,
  onDragStart: B0,
  onDragUpdate: L0,
  onDragEnd: M0
};
var Wo = F0;
const Ge = {
  x: 0,
  y: 0
}, qe = (t, r) => ({
  x: t.x + r.x,
  y: t.y + r.y
}), vt = (t, r) => ({
  x: t.x - r.x,
  y: t.y - r.y
}), vn = (t, r) => t.x === r.x && t.y === r.y, jn = (t) => ({
  x: t.x !== 0 ? -t.x : 0,
  y: t.y !== 0 ? -t.y : 0
}), Nn = function(t, r, o) {
  return o === void 0 && (o = 0), t === "x" ? {
    x: r,
    y: o
  } : {
    x: o,
    y: r
  };
}, Rr = (t, r) => Math.sqrt((r.x - t.x) ** 2 + (r.y - t.y) ** 2), Tc = (t, r) => Math.min(...r.map((o) => Rr(t, o))), Af = (t) => (r) => ({
  x: t(r.x),
  y: t(r.y)
});
var $0 = (t, r) => {
  const o = Gt({
    top: Math.max(r.top, t.top),
    right: Math.min(r.right, t.right),
    bottom: Math.min(r.bottom, t.bottom),
    left: Math.max(r.left, t.left)
  });
  return o.width <= 0 || o.height <= 0 ? null : o;
};
const $r = (t, r) => ({
  top: t.top + r.y,
  left: t.left + r.x,
  bottom: t.bottom + r.y,
  right: t.right + r.x
}), Bc = (t) => [{
  x: t.left,
  y: t.top
}, {
  x: t.right,
  y: t.top
}, {
  x: t.left,
  y: t.bottom
}, {
  x: t.right,
  y: t.bottom
}], W0 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, V0 = (t, r) => r ? $r(t, r.scroll.diff.displacement) : t, G0 = (t, r, o) => o && o.increasedBy ? {
  ...t,
  [r.end]: t[r.end] + o.increasedBy[r.line]
} : t, U0 = (t, r) => r && r.shouldClipSubject ? $0(r.pageMarginBox, t) : Gt(t);
var Jn = (t) => {
  let {
    page: r,
    withPlaceholder: o,
    axis: s,
    frame: a
  } = t;
  const l = V0(r.marginBox, a), c = G0(l, s, o), f = U0(c, a);
  return {
    page: r,
    withPlaceholder: o,
    active: f
  };
}, ca = (t, r) => {
  t.frame || (process.env.NODE_ENV, S(!1));
  const o = t.frame, s = vt(r, o.scroll.initial), a = jn(s), l = {
    ...o,
    scroll: {
      initial: o.scroll.initial,
      current: r,
      diff: {
        value: s,
        displacement: a
      },
      max: o.scroll.max
    }
  }, c = Jn({
    page: t.subject.page,
    withPlaceholder: t.subject.withPlaceholder,
    axis: t.axis,
    frame: l
  });
  return {
    ...t,
    frame: l,
    subject: c
  };
};
const If = Ve((t) => t.reduce((r, o) => (r[o.descriptor.id] = o, r), {})), Of = Ve((t) => t.reduce((r, o) => (r[o.descriptor.id] = o, r), {})), Yo = Ve((t) => Object.values(t)), H0 = Ve((t) => Object.values(t));
var Rn = Ve((t, r) => H0(r).filter((s) => t === s.descriptor.droppableId).sort((s, a) => s.descriptor.index - a.descriptor.index));
function fa(t) {
  return t.at && t.at.type === "REORDER" ? t.at.destination : null;
}
function Ko(t) {
  return t.at && t.at.type === "COMBINE" ? t.at.combine : null;
}
var Xo = Ve((t, r) => r.filter((o) => o.descriptor.id !== t.descriptor.id)), q0 = (t) => {
  let {
    isMovingForward: r,
    draggable: o,
    destination: s,
    insideDestination: a,
    previousImpact: l
  } = t;
  if (!s.isCombineEnabled || !fa(l))
    return null;
  function f(D) {
    const O = {
      type: "COMBINE",
      combine: {
        draggableId: D,
        droppableId: s.descriptor.id
      }
    };
    return {
      ...l,
      at: O
    };
  }
  const p = l.displaced.all, h = p.length ? p[0] : null;
  if (r)
    return h ? f(h) : null;
  const b = Xo(o, a);
  if (!h) {
    if (!b.length)
      return null;
    const D = b[b.length - 1];
    return f(D.descriptor.id);
  }
  const g = b.findIndex((D) => D.descriptor.id === h);
  g === -1 && (process.env.NODE_ENV !== "production" ? S(!1, "Could not find displaced item in set") : S(!1));
  const v = g - 1;
  if (v < 0)
    return null;
  const E = b[v];
  return f(E.descriptor.id);
}, er = (t, r) => t.descriptor.droppableId === r.descriptor.id;
const Nf = {
  point: Ge,
  value: 0
}, Pr = {
  invisible: {},
  visible: {},
  all: []
}, k0 = {
  displaced: Pr,
  displacedBy: Nf,
  at: null
};
var z0 = k0, Pt = (t, r) => (o) => t <= o && o <= r, Rf = (t) => {
  const r = Pt(t.top, t.bottom), o = Pt(t.left, t.right);
  return (s) => {
    if (r(s.top) && r(s.bottom) && o(s.left) && o(s.right))
      return !0;
    const l = r(s.top) || r(s.bottom), c = o(s.left) || o(s.right);
    if (l && c)
      return !0;
    const p = s.top < t.top && s.bottom > t.bottom, h = s.left < t.left && s.right > t.right;
    return p && h ? !0 : p && c || h && l;
  };
}, Y0 = (t) => {
  const r = Pt(t.top, t.bottom), o = Pt(t.left, t.right);
  return (s) => r(s.top) && r(s.bottom) && o(s.left) && o(s.right);
};
const da = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Pf = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var K0 = (t) => (r) => {
  const o = Pt(r.top, r.bottom), s = Pt(r.left, r.right);
  return (a) => t === da ? o(a.top) && o(a.bottom) : s(a.left) && s(a.right);
};
const X0 = (t, r) => {
  const o = r.frame ? r.frame.scroll.diff.displacement : Ge;
  return $r(t, o);
}, J0 = (t, r, o) => r.subject.active ? o(r.subject.active)(t) : !1, Z0 = (t, r, o) => o(r)(t), pa = (t) => {
  let {
    target: r,
    destination: o,
    viewport: s,
    withDroppableDisplacement: a,
    isVisibleThroughFrameFn: l
  } = t;
  const c = a ? X0(r, o) : r;
  return J0(c, o, l) && Z0(c, s, l);
}, Q0 = (t) => pa({
  ...t,
  isVisibleThroughFrameFn: Rf
}), Tf = (t) => pa({
  ...t,
  isVisibleThroughFrameFn: Y0
}), j0 = (t) => pa({
  ...t,
  isVisibleThroughFrameFn: K0(t.destination.axis)
}), e_ = (t, r, o) => {
  if (typeof o == "boolean")
    return o;
  if (!r)
    return !0;
  const {
    invisible: s,
    visible: a
  } = r;
  if (s[t])
    return !1;
  const l = a[t];
  return l ? l.shouldAnimate : !0;
};
function t_(t, r) {
  const o = t.page.marginBox, s = {
    top: r.point.y,
    right: 0,
    bottom: 0,
    left: r.point.x
  };
  return Gt(la(o, s));
}
function Tr(t) {
  let {
    afterDragging: r,
    destination: o,
    displacedBy: s,
    viewport: a,
    forceShouldAnimate: l,
    last: c
  } = t;
  return r.reduce(function(p, h) {
    const b = t_(h, s), g = h.descriptor.id;
    if (p.all.push(g), !Q0({
      target: b,
      destination: o,
      viewport: a,
      withDroppableDisplacement: !0
    }))
      return p.invisible[h.descriptor.id] = !0, p;
    const E = e_(g, c, l), D = {
      draggableId: g,
      shouldAnimate: E
    };
    return p.visible[g] = D, p;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function n_(t, r) {
  if (!t.length)
    return 0;
  const o = t[t.length - 1].descriptor.index;
  return r.inHomeList ? o : o + 1;
}
function Lc(t) {
  let {
    insideDestination: r,
    inHomeList: o,
    displacedBy: s,
    destination: a
  } = t;
  const l = n_(r, {
    inHomeList: o
  });
  return {
    displaced: Pr,
    displacedBy: s,
    at: {
      type: "REORDER",
      destination: {
        droppableId: a.descriptor.id,
        index: l
      }
    }
  };
}
function ko(t) {
  let {
    draggable: r,
    insideDestination: o,
    destination: s,
    viewport: a,
    displacedBy: l,
    last: c,
    index: f,
    forceShouldAnimate: p
  } = t;
  const h = er(r, s);
  if (f == null)
    return Lc({
      insideDestination: o,
      inHomeList: h,
      displacedBy: l,
      destination: s
    });
  const b = o.find((O) => O.descriptor.index === f);
  if (!b)
    return Lc({
      insideDestination: o,
      inHomeList: h,
      displacedBy: l,
      destination: s
    });
  const g = Xo(r, o), v = o.indexOf(b), E = g.slice(v);
  return {
    displaced: Tr({
      afterDragging: E,
      destination: s,
      displacedBy: l,
      last: c,
      viewport: a.frame,
      forceShouldAnimate: p
    }),
    displacedBy: l,
    at: {
      type: "REORDER",
      destination: {
        droppableId: s.descriptor.id,
        index: f
      }
    }
  };
}
function bn(t, r) {
  return !!r.effected[t];
}
var r_ = (t) => {
  let {
    isMovingForward: r,
    destination: o,
    draggables: s,
    combine: a,
    afterCritical: l
  } = t;
  if (!o.isCombineEnabled)
    return null;
  const c = a.draggableId, p = s[c].descriptor.index;
  return bn(c, l) ? r ? p : p - 1 : r ? p + 1 : p;
}, o_ = (t) => {
  let {
    isMovingForward: r,
    isInHomeList: o,
    insideDestination: s,
    location: a
  } = t;
  if (!s.length)
    return null;
  const l = a.index, c = r ? l + 1 : l - 1, f = s[0].descriptor.index, p = s[s.length - 1].descriptor.index, h = o ? p : p + 1;
  return c < f || c > h ? null : c;
}, i_ = (t) => {
  let {
    isMovingForward: r,
    isInHomeList: o,
    draggable: s,
    draggables: a,
    destination: l,
    insideDestination: c,
    previousImpact: f,
    viewport: p,
    afterCritical: h
  } = t;
  const b = f.at;
  if (b || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot move in direction without previous impact location") : S(!1)), b.type === "REORDER") {
    const v = o_({
      isMovingForward: r,
      isInHomeList: o,
      location: b.destination,
      insideDestination: c
    });
    return v == null ? null : ko({
      draggable: s,
      insideDestination: c,
      destination: l,
      viewport: p,
      last: f.displaced,
      displacedBy: f.displacedBy,
      index: v
    });
  }
  const g = r_({
    isMovingForward: r,
    destination: l,
    displaced: f.displaced,
    draggables: a,
    combine: b.combine,
    afterCritical: h
  });
  return g == null ? null : ko({
    draggable: s,
    insideDestination: c,
    destination: l,
    viewport: p,
    last: f.displaced,
    displacedBy: f.displacedBy,
    index: g
  });
}, s_ = (t) => {
  let {
    displaced: r,
    afterCritical: o,
    combineWith: s,
    displacedBy: a
  } = t;
  const l = !!(r.visible[s] || r.invisible[s]);
  return bn(s, o) ? l ? Ge : jn(a.point) : l ? a.point : Ge;
}, a_ = (t) => {
  let {
    afterCritical: r,
    impact: o,
    draggables: s
  } = t;
  const a = Ko(o);
  a || (process.env.NODE_ENV, S(!1));
  const l = a.draggableId, c = s[l].page.borderBox.center, f = s_({
    displaced: o.displaced,
    afterCritical: r,
    combineWith: l,
    displacedBy: o.displacedBy
  });
  return qe(c, f);
};
const Bf = (t, r) => r.margin[t.start] + r.borderBox[t.size] / 2, l_ = (t, r) => r.margin[t.end] + r.borderBox[t.size] / 2, ga = (t, r, o) => r[t.crossAxisStart] + o.margin[t.crossAxisStart] + o.borderBox[t.crossAxisSize] / 2, Mc = (t) => {
  let {
    axis: r,
    moveRelativeTo: o,
    isMoving: s
  } = t;
  return Nn(r.line, o.marginBox[r.end] + Bf(r, s), ga(r, o.marginBox, s));
}, Fc = (t) => {
  let {
    axis: r,
    moveRelativeTo: o,
    isMoving: s
  } = t;
  return Nn(r.line, o.marginBox[r.start] - l_(r, s), ga(r, o.marginBox, s));
}, u_ = (t) => {
  let {
    axis: r,
    moveInto: o,
    isMoving: s
  } = t;
  return Nn(r.line, o.contentBox[r.start] + Bf(r, s), ga(r, o.contentBox, s));
};
var c_ = (t) => {
  let {
    impact: r,
    draggable: o,
    draggables: s,
    droppable: a,
    afterCritical: l
  } = t;
  const c = Rn(a.descriptor.id, s), f = o.page, p = a.axis;
  if (!c.length)
    return u_({
      axis: p,
      moveInto: a.page,
      isMoving: f
    });
  const {
    displaced: h,
    displacedBy: b
  } = r, g = h.all[0];
  if (g) {
    const E = s[g];
    if (bn(g, l))
      return Fc({
        axis: p,
        moveRelativeTo: E.page,
        isMoving: f
      });
    const D = Uo(E.page, b.point);
    return Fc({
      axis: p,
      moveRelativeTo: D,
      isMoving: f
    });
  }
  const v = c[c.length - 1];
  if (v.descriptor.id === o.descriptor.id)
    return f.borderBox.center;
  if (bn(v.descriptor.id, l)) {
    const E = Uo(v.page, jn(l.displacedBy.point));
    return Mc({
      axis: p,
      moveRelativeTo: E,
      isMoving: f
    });
  }
  return Mc({
    axis: p,
    moveRelativeTo: v.page,
    isMoving: f
  });
}, zs = (t, r) => {
  const o = t.frame;
  return o ? qe(r, o.scroll.diff.displacement) : r;
};
const f_ = (t) => {
  let {
    impact: r,
    draggable: o,
    droppable: s,
    draggables: a,
    afterCritical: l
  } = t;
  const c = o.page.borderBox.center, f = r.at;
  return !s || !f ? c : f.type === "REORDER" ? c_({
    impact: r,
    draggable: o,
    draggables: a,
    droppable: s,
    afterCritical: l
  }) : a_({
    impact: r,
    draggables: a,
    afterCritical: l
  });
};
var Jo = (t) => {
  const r = f_(t), o = t.droppable;
  return o ? zs(o, r) : r;
}, Lf = (t, r) => {
  const o = vt(r, t.scroll.initial), s = jn(o);
  return {
    frame: Gt({
      top: r.y,
      bottom: r.y + t.frame.height,
      left: r.x,
      right: r.x + t.frame.width
    }),
    scroll: {
      initial: t.scroll.initial,
      max: t.scroll.max,
      current: r,
      diff: {
        value: o,
        displacement: s
      }
    }
  };
};
function $c(t, r) {
  return t.map((o) => r[o]);
}
function d_(t, r) {
  for (let o = 0; o < r.length; o++) {
    const s = r[o].visible[t];
    if (s)
      return s;
  }
  return null;
}
var p_ = (t) => {
  let {
    impact: r,
    viewport: o,
    destination: s,
    draggables: a,
    maxScrollChange: l
  } = t;
  const c = Lf(o, qe(o.scroll.current, l)), f = s.frame ? ca(s, qe(s.frame.scroll.current, l)) : s, p = r.displaced, h = Tr({
    afterDragging: $c(p.all, a),
    destination: s,
    displacedBy: r.displacedBy,
    viewport: c.frame,
    last: p,
    forceShouldAnimate: !1
  }), b = Tr({
    afterDragging: $c(p.all, a),
    destination: f,
    displacedBy: r.displacedBy,
    viewport: o.frame,
    last: p,
    forceShouldAnimate: !1
  }), g = {}, v = {}, E = [p, h, b];
  return p.all.forEach((O) => {
    const w = d_(O, E);
    if (w) {
      v[O] = w;
      return;
    }
    g[O] = !0;
  }), {
    ...r,
    displaced: {
      all: p.all,
      invisible: g,
      visible: v
    }
  };
}, g_ = (t, r) => qe(t.scroll.diff.displacement, r), ha = (t) => {
  let {
    pageBorderBoxCenter: r,
    draggable: o,
    viewport: s
  } = t;
  const a = g_(s, r), l = vt(a, o.page.borderBox.center);
  return qe(o.client.borderBox.center, l);
}, Mf = (t) => {
  let {
    draggable: r,
    destination: o,
    newPageBorderBoxCenter: s,
    viewport: a,
    withDroppableDisplacement: l,
    onlyOnMainAxis: c = !1
  } = t;
  const f = vt(s, r.page.borderBox.center), h = {
    target: $r(r.page.borderBox, f),
    destination: o,
    withDroppableDisplacement: l,
    viewport: a
  };
  return c ? j0(h) : Tf(h);
}, h_ = (t) => {
  let {
    isMovingForward: r,
    draggable: o,
    destination: s,
    draggables: a,
    previousImpact: l,
    viewport: c,
    previousPageBorderBoxCenter: f,
    previousClientSelection: p,
    afterCritical: h
  } = t;
  if (!s.isEnabled)
    return null;
  const b = Rn(s.descriptor.id, a), g = er(o, s), v = q0({
    isMovingForward: r,
    draggable: o,
    destination: s,
    insideDestination: b,
    previousImpact: l
  }) || i_({
    isMovingForward: r,
    isInHomeList: g,
    draggable: o,
    draggables: a,
    destination: s,
    insideDestination: b,
    previousImpact: l,
    viewport: c,
    afterCritical: h
  });
  if (!v)
    return null;
  const E = Jo({
    impact: v,
    draggable: o,
    droppable: s,
    draggables: a,
    afterCritical: h
  });
  if (Mf({
    draggable: o,
    destination: s,
    newPageBorderBoxCenter: E,
    viewport: c.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: ha({
        pageBorderBoxCenter: E,
        draggable: o,
        viewport: c
      }),
      impact: v,
      scrollJumpRequest: null
    };
  const O = vt(E, f), w = p_({
    impact: v,
    viewport: c,
    destination: s,
    draggables: a,
    maxScrollChange: O
  });
  return {
    clientSelection: p,
    impact: w,
    scrollJumpRequest: O
  };
};
const Ze = (t) => {
  const r = t.subject.active;
  return r || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot get clipped area from droppable") : S(!1)), r;
};
var v_ = (t) => {
  let {
    isMovingForward: r,
    pageBorderBoxCenter: o,
    source: s,
    droppables: a,
    viewport: l
  } = t;
  const c = s.subject.active;
  if (!c)
    return null;
  const f = s.axis, p = Pt(c[f.start], c[f.end]), h = Yo(a).filter((g) => g !== s).filter((g) => g.isEnabled).filter((g) => !!g.subject.active).filter((g) => Rf(l.frame)(Ze(g))).filter((g) => {
    const v = Ze(g);
    return r ? c[f.crossAxisEnd] < v[f.crossAxisEnd] : v[f.crossAxisStart] < c[f.crossAxisStart];
  }).filter((g) => {
    const v = Ze(g), E = Pt(v[f.start], v[f.end]);
    return p(v[f.start]) || p(v[f.end]) || E(c[f.start]) || E(c[f.end]);
  }).sort((g, v) => {
    const E = Ze(g)[f.crossAxisStart], D = Ze(v)[f.crossAxisStart];
    return r ? E - D : D - E;
  }).filter((g, v, E) => Ze(g)[f.crossAxisStart] === Ze(E[0])[f.crossAxisStart]);
  if (!h.length)
    return null;
  if (h.length === 1)
    return h[0];
  const b = h.filter((g) => Pt(Ze(g)[f.start], Ze(g)[f.end])(o[f.line]));
  return b.length === 1 ? b[0] : b.length > 1 ? b.sort((g, v) => Ze(g)[f.start] - Ze(v)[f.start])[0] : h.sort((g, v) => {
    const E = Tc(o, Bc(Ze(g))), D = Tc(o, Bc(Ze(v)));
    return E !== D ? E - D : Ze(g)[f.start] - Ze(v)[f.start];
  })[0];
};
const Wc = (t, r) => {
  const o = t.page.borderBox.center;
  return bn(t.descriptor.id, r) ? vt(o, r.displacedBy.point) : o;
}, m_ = (t, r) => {
  const o = t.page.borderBox;
  return bn(t.descriptor.id, r) ? $r(o, jn(r.displacedBy.point)) : o;
};
var b_ = (t) => {
  let {
    pageBorderBoxCenter: r,
    viewport: o,
    destination: s,
    insideDestination: a,
    afterCritical: l
  } = t;
  return a.filter((f) => Tf({
    target: m_(f, l),
    destination: s,
    viewport: o.frame,
    withDroppableDisplacement: !0
  })).sort((f, p) => {
    const h = Rr(r, zs(s, Wc(f, l))), b = Rr(r, zs(s, Wc(p, l)));
    return h < b ? -1 : b < h ? 1 : f.descriptor.index - p.descriptor.index;
  })[0] || null;
}, Wr = Ve(function(r, o) {
  const s = o[r.line];
  return {
    value: s,
    point: Nn(r.line, s)
  };
});
const y_ = (t, r, o) => {
  const s = t.axis;
  if (t.descriptor.mode === "virtual")
    return Nn(s.line, r[s.line]);
  const a = t.subject.page.contentBox[s.size], p = Rn(t.descriptor.id, o).reduce((h, b) => h + b.client.marginBox[s.size], 0) + r[s.line] - a;
  return p <= 0 ? null : Nn(s.line, p);
}, Ff = (t, r) => ({
  ...t,
  scroll: {
    ...t.scroll,
    max: r
  }
}), $f = (t, r, o) => {
  const s = t.frame;
  er(r, t) && (process.env.NODE_ENV !== "production" ? S(!1, "Should not add placeholder space to home list") : S(!1)), t.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot add placeholder size to a subject when it already has one") : S(!1));
  const a = Wr(t.axis, r.displaceBy).point, l = y_(t, a, o), c = {
    placeholderSize: a,
    increasedBy: l,
    oldFrameMaxScroll: t.frame ? t.frame.scroll.max : null
  };
  if (!s) {
    const b = Jn({
      page: t.subject.page,
      withPlaceholder: c,
      axis: t.axis,
      frame: t.frame
    });
    return {
      ...t,
      subject: b
    };
  }
  const f = l ? qe(s.scroll.max, l) : s.scroll.max, p = Ff(s, f), h = Jn({
    page: t.subject.page,
    withPlaceholder: c,
    axis: t.axis,
    frame: p
  });
  return {
    ...t,
    subject: h,
    frame: p
  };
}, E_ = (t) => {
  const r = t.subject.withPlaceholder;
  r || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot remove placeholder form subject when there was none") : S(!1));
  const o = t.frame;
  if (!o) {
    const c = Jn({
      page: t.subject.page,
      axis: t.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...t,
      subject: c
    };
  }
  const s = r.oldFrameMaxScroll;
  s || (process.env.NODE_ENV !== "production" ? S(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : S(!1));
  const a = Ff(o, s), l = Jn({
    page: t.subject.page,
    axis: t.axis,
    frame: a,
    withPlaceholder: null
  });
  return {
    ...t,
    subject: l,
    frame: a
  };
};
var __ = (t) => {
  let {
    previousPageBorderBoxCenter: r,
    moveRelativeTo: o,
    insideDestination: s,
    draggable: a,
    draggables: l,
    destination: c,
    viewport: f,
    afterCritical: p
  } = t;
  if (!o) {
    if (s.length)
      return null;
    const v = {
      displaced: Pr,
      displacedBy: Nf,
      at: {
        type: "REORDER",
        destination: {
          droppableId: c.descriptor.id,
          index: 0
        }
      }
    }, E = Jo({
      impact: v,
      draggable: a,
      droppable: c,
      draggables: l,
      afterCritical: p
    }), D = er(a, c) ? c : $f(c, a, l);
    return Mf({
      draggable: a,
      destination: D,
      newPageBorderBoxCenter: E,
      viewport: f.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? v : null;
  }
  const h = r[c.axis.line] <= o.page.borderBox.center[c.axis.line], b = (() => {
    const v = o.descriptor.index;
    return o.descriptor.id === a.descriptor.id || h ? v : v + 1;
  })(), g = Wr(c.axis, a.displaceBy);
  return ko({
    draggable: a,
    insideDestination: s,
    destination: c,
    viewport: f,
    displacedBy: g,
    last: Pr,
    index: b
  });
}, w_ = (t) => {
  let {
    isMovingForward: r,
    previousPageBorderBoxCenter: o,
    draggable: s,
    isOver: a,
    draggables: l,
    droppables: c,
    viewport: f,
    afterCritical: p
  } = t;
  const h = v_({
    isMovingForward: r,
    pageBorderBoxCenter: o,
    source: a,
    droppables: c,
    viewport: f
  });
  if (!h)
    return null;
  const b = Rn(h.descriptor.id, l), g = b_({
    pageBorderBoxCenter: o,
    viewport: f,
    destination: h,
    insideDestination: b,
    afterCritical: p
  }), v = __({
    previousPageBorderBoxCenter: o,
    destination: h,
    draggable: s,
    draggables: l,
    moveRelativeTo: g,
    insideDestination: b,
    viewport: f,
    afterCritical: p
  });
  if (!v)
    return null;
  const E = Jo({
    impact: v,
    draggable: s,
    droppable: h,
    draggables: l,
    afterCritical: p
  });
  return {
    clientSelection: ha({
      pageBorderBoxCenter: E,
      draggable: s,
      viewport: f
    }),
    impact: v,
    scrollJumpRequest: null
  };
}, mt = (t) => {
  const r = t.at;
  return r ? r.type === "REORDER" ? r.destination.droppableId : r.combine.droppableId : null;
};
const x_ = (t, r) => {
  const o = mt(t);
  return o ? r[o] : null;
};
var D_ = (t) => {
  let {
    state: r,
    type: o
  } = t;
  const s = x_(r.impact, r.dimensions.droppables), a = !!s, l = r.dimensions.droppables[r.critical.droppable.id], c = s || l, f = c.axis.direction, p = f === "vertical" && (o === "MOVE_UP" || o === "MOVE_DOWN") || f === "horizontal" && (o === "MOVE_LEFT" || o === "MOVE_RIGHT");
  if (p && !a)
    return null;
  const h = o === "MOVE_DOWN" || o === "MOVE_RIGHT", b = r.dimensions.draggables[r.critical.draggable.id], g = r.current.page.borderBoxCenter, {
    draggables: v,
    droppables: E
  } = r.dimensions;
  return p ? h_({
    isMovingForward: h,
    previousPageBorderBoxCenter: g,
    draggable: b,
    destination: c,
    draggables: v,
    viewport: r.viewport,
    previousClientSelection: r.current.client.selection,
    previousImpact: r.impact,
    afterCritical: r.afterCritical
  }) : w_({
    isMovingForward: h,
    previousPageBorderBoxCenter: g,
    draggable: b,
    isOver: c,
    draggables: v,
    droppables: E,
    viewport: r.viewport,
    afterCritical: r.afterCritical
  });
};
function On(t) {
  return t.phase === "DRAGGING" || t.phase === "COLLECTING";
}
function Wf(t) {
  const r = Pt(t.top, t.bottom), o = Pt(t.left, t.right);
  return function(a) {
    return r(a.y) && o(a.x);
  };
}
function S_(t, r) {
  return t.left < r.right && t.right > r.left && t.top < r.bottom && t.bottom > r.top;
}
function C_(t) {
  let {
    pageBorderBox: r,
    draggable: o,
    candidates: s
  } = t;
  const a = o.page.borderBox.center, l = s.map((c) => {
    const f = c.axis, p = Nn(c.axis.line, r.center[f.line], c.page.borderBox.center[f.crossAxisLine]);
    return {
      id: c.descriptor.id,
      distance: Rr(a, p)
    };
  }).sort((c, f) => f.distance - c.distance);
  return l[0] ? l[0].id : null;
}
function A_(t) {
  let {
    pageBorderBox: r,
    draggable: o,
    droppables: s
  } = t;
  const a = Yo(s).filter((l) => {
    if (!l.isEnabled)
      return !1;
    const c = l.subject.active;
    if (!c || !S_(r, c))
      return !1;
    if (Wf(c)(r.center))
      return !0;
    const f = l.axis, p = c.center[f.crossAxisLine], h = r[f.crossAxisStart], b = r[f.crossAxisEnd], g = Pt(c[f.crossAxisStart], c[f.crossAxisEnd]), v = g(h), E = g(b);
    return !v && !E ? !0 : v ? h < p : b > p;
  });
  return a.length ? a.length === 1 ? a[0].descriptor.id : C_({
    pageBorderBox: r,
    draggable: o,
    candidates: a
  }) : null;
}
const Vf = (t, r) => Gt($r(t, r));
var I_ = (t, r) => {
  const o = t.frame;
  return o ? Vf(r, o.scroll.diff.value) : r;
};
function Gf(t) {
  let {
    displaced: r,
    id: o
  } = t;
  return !!(r.visible[o] || r.invisible[o]);
}
function O_(t) {
  let {
    draggable: r,
    closest: o,
    inHomeList: s
  } = t;
  return o ? s && o.descriptor.index > r.descriptor.index ? o.descriptor.index - 1 : o.descriptor.index : null;
}
var N_ = (t) => {
  let {
    pageBorderBoxWithDroppableScroll: r,
    draggable: o,
    destination: s,
    insideDestination: a,
    last: l,
    viewport: c,
    afterCritical: f
  } = t;
  const p = s.axis, h = Wr(s.axis, o.displaceBy), b = h.value, g = r[p.start], v = r[p.end], D = Xo(o, a).find((w) => {
    const M = w.descriptor.id, F = w.page.borderBox.center[p.line], R = bn(M, f), T = Gf({
      displaced: l,
      id: M
    });
    return R ? T ? v <= F : g < F - b : T ? v <= F + b : g < F;
  }) || null, O = O_({
    draggable: o,
    closest: D,
    inHomeList: er(o, s)
  });
  return ko({
    draggable: o,
    insideDestination: a,
    destination: s,
    viewport: c,
    last: l,
    displacedBy: h,
    index: O
  });
};
const R_ = 4;
var P_ = (t) => {
  let {
    draggable: r,
    pageBorderBoxWithDroppableScroll: o,
    previousImpact: s,
    destination: a,
    insideDestination: l,
    afterCritical: c
  } = t;
  if (!a.isCombineEnabled)
    return null;
  const f = a.axis, p = Wr(a.axis, r.displaceBy), h = p.value, b = o[f.start], g = o[f.end], E = Xo(r, l).find((O) => {
    const w = O.descriptor.id, M = O.page.borderBox, R = M[f.size] / R_, T = bn(w, c), A = Gf({
      displaced: s.displaced,
      id: w
    });
    return T ? A ? g > M[f.start] + R && g < M[f.end] - R : b > M[f.start] - h + R && b < M[f.end] - h - R : A ? g > M[f.start] + h + R && g < M[f.end] + h - R : b > M[f.start] + R && b < M[f.end] - R;
  });
  return E ? {
    displacedBy: p,
    displaced: s.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: E.descriptor.id,
        droppableId: a.descriptor.id
      }
    }
  } : null;
}, Uf = (t) => {
  let {
    pageOffset: r,
    draggable: o,
    draggables: s,
    droppables: a,
    previousImpact: l,
    viewport: c,
    afterCritical: f
  } = t;
  const p = Vf(o.page.borderBox, r), h = A_({
    pageBorderBox: p,
    draggable: o,
    droppables: a
  });
  if (!h)
    return z0;
  const b = a[h], g = Rn(b.descriptor.id, s), v = I_(b, p);
  return P_({
    pageBorderBoxWithDroppableScroll: v,
    draggable: o,
    previousImpact: l,
    destination: b,
    insideDestination: g,
    afterCritical: f
  }) || N_({
    pageBorderBoxWithDroppableScroll: v,
    draggable: o,
    destination: b,
    insideDestination: g,
    last: l.displaced,
    viewport: c,
    afterCritical: f
  });
}, va = (t, r) => ({
  ...t,
  [r.descriptor.id]: r
});
const T_ = (t) => {
  let {
    previousImpact: r,
    impact: o,
    droppables: s
  } = t;
  const a = mt(r), l = mt(o);
  if (!a || a === l)
    return s;
  const c = s[a];
  if (!c.subject.withPlaceholder)
    return s;
  const f = E_(c);
  return va(s, f);
};
var B_ = (t) => {
  let {
    draggable: r,
    draggables: o,
    droppables: s,
    previousImpact: a,
    impact: l
  } = t;
  const c = T_({
    previousImpact: a,
    impact: l,
    droppables: s
  }), f = mt(l);
  if (!f)
    return c;
  const p = s[f];
  if (er(r, p) || p.subject.withPlaceholder)
    return c;
  const h = $f(p, r, o);
  return va(c, h);
}, Cr = (t) => {
  let {
    state: r,
    clientSelection: o,
    dimensions: s,
    viewport: a,
    impact: l,
    scrollJumpRequest: c
  } = t;
  const f = a || r.viewport, p = s || r.dimensions, h = o || r.current.client.selection, b = vt(h, r.initial.client.selection), g = {
    offset: b,
    selection: h,
    borderBoxCenter: qe(r.initial.client.borderBoxCenter, b)
  }, v = {
    selection: qe(g.selection, f.scroll.current),
    borderBoxCenter: qe(g.borderBoxCenter, f.scroll.current),
    offset: qe(g.offset, f.scroll.diff.value)
  }, E = {
    client: g,
    page: v
  };
  if (r.phase === "COLLECTING")
    return {
      ...r,
      dimensions: p,
      viewport: f,
      current: E
    };
  const D = p.draggables[r.critical.draggable.id], O = l || Uf({
    pageOffset: v.offset,
    draggable: D,
    draggables: p.draggables,
    droppables: p.droppables,
    previousImpact: r.impact,
    viewport: f,
    afterCritical: r.afterCritical
  }), w = B_({
    draggable: D,
    impact: O,
    previousImpact: r.impact,
    draggables: p.draggables,
    droppables: p.droppables
  });
  return {
    ...r,
    current: E,
    dimensions: {
      draggables: p.draggables,
      droppables: w
    },
    impact: O,
    viewport: f,
    scrollJumpRequest: c || null,
    forceShouldAnimate: c ? !1 : null
  };
};
function L_(t, r) {
  return t.map((o) => r[o]);
}
var Hf = (t) => {
  let {
    impact: r,
    viewport: o,
    draggables: s,
    destination: a,
    forceShouldAnimate: l
  } = t;
  const c = r.displaced, f = L_(c.all, s), p = Tr({
    afterDragging: f,
    destination: a,
    displacedBy: r.displacedBy,
    viewport: o.frame,
    forceShouldAnimate: l,
    last: c
  });
  return {
    ...r,
    displaced: p
  };
}, qf = (t) => {
  let {
    impact: r,
    draggable: o,
    droppable: s,
    draggables: a,
    viewport: l,
    afterCritical: c
  } = t;
  const f = Jo({
    impact: r,
    draggable: o,
    draggables: a,
    droppable: s,
    afterCritical: c
  });
  return ha({
    pageBorderBoxCenter: f,
    draggable: o,
    viewport: l
  });
}, kf = (t) => {
  let {
    state: r,
    dimensions: o,
    viewport: s
  } = t;
  r.movementMode !== "SNAP" && (process.env.NODE_ENV, S(!1));
  const a = r.impact, l = s || r.viewport, c = o || r.dimensions, {
    draggables: f,
    droppables: p
  } = c, h = f[r.critical.draggable.id], b = mt(a);
  b || (process.env.NODE_ENV !== "production" ? S(!1, "Must be over a destination in SNAP movement mode") : S(!1));
  const g = p[b], v = Hf({
    impact: a,
    viewport: l,
    destination: g,
    draggables: f
  }), E = qf({
    impact: v,
    draggable: h,
    droppable: g,
    draggables: f,
    viewport: l,
    afterCritical: r.afterCritical
  });
  return Cr({
    impact: v,
    clientSelection: E,
    state: r,
    dimensions: c,
    viewport: l
  });
}, M_ = (t) => ({
  index: t.index,
  droppableId: t.droppableId
}), zf = (t) => {
  let {
    draggable: r,
    home: o,
    draggables: s,
    viewport: a
  } = t;
  const l = Wr(o.axis, r.displaceBy), c = Rn(o.descriptor.id, s), f = c.indexOf(r);
  f === -1 && (process.env.NODE_ENV !== "production" ? S(!1, "Expected draggable to be inside home list") : S(!1));
  const p = c.slice(f + 1), h = p.reduce((E, D) => (E[D.descriptor.id] = !0, E), {}), b = {
    inVirtualList: o.descriptor.mode === "virtual",
    displacedBy: l,
    effected: h
  };
  return {
    impact: {
      displaced: Tr({
        afterDragging: p,
        destination: o,
        displacedBy: l,
        last: null,
        viewport: a.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: l,
      at: {
        type: "REORDER",
        destination: M_(r.descriptor)
      }
    },
    afterCritical: b
  };
}, F_ = (t, r) => ({
  draggables: t.draggables,
  droppables: va(t.droppables, r)
});
const Vr = (t) => {
  process.env.NODE_ENV;
}, Gr = (t) => {
  process.env.NODE_ENV;
};
var $_ = (t) => {
  let {
    draggable: r,
    offset: o,
    initialWindowScroll: s
  } = t;
  const a = Uo(r.client, o), l = Ho(a, s);
  return {
    ...r,
    placeholder: {
      ...r.placeholder,
      client: a
    },
    client: a,
    page: l
  };
}, W_ = (t) => {
  const r = t.frame;
  return r || (process.env.NODE_ENV !== "production" ? S(!1, "Expected Droppable to have a frame") : S(!1)), r;
}, V_ = (t) => {
  let {
    additions: r,
    updatedDroppables: o,
    viewport: s
  } = t;
  const a = s.scroll.diff.value;
  return r.map((l) => {
    const c = l.descriptor.droppableId, f = o[c], h = W_(f).scroll.diff.value, b = qe(a, h);
    return $_({
      draggable: l,
      offset: b,
      initialWindowScroll: s.scroll.initial
    });
  });
}, G_ = (t) => {
  let {
    state: r,
    published: o
  } = t;
  Vr();
  const s = o.modified.map((F) => {
    const R = r.dimensions.droppables[F.droppableId];
    return ca(R, F.scroll);
  }), a = {
    ...r.dimensions.droppables,
    ...If(s)
  }, l = Of(V_({
    additions: o.additions,
    updatedDroppables: a,
    viewport: r.viewport
  })), c = {
    ...r.dimensions.draggables,
    ...l
  };
  o.removals.forEach((F) => {
    delete c[F];
  });
  const f = {
    droppables: a,
    draggables: c
  }, p = mt(r.impact), h = p ? f.droppables[p] : null, b = f.draggables[r.critical.draggable.id], g = f.droppables[r.critical.droppable.id], {
    impact: v,
    afterCritical: E
  } = zf({
    draggable: b,
    home: g,
    draggables: c,
    viewport: r.viewport
  }), D = h && h.isCombineEnabled ? r.impact : v, O = Uf({
    pageOffset: r.current.page.offset,
    draggable: f.draggables[r.critical.draggable.id],
    draggables: f.draggables,
    droppables: f.droppables,
    previousImpact: D,
    viewport: r.viewport,
    afterCritical: E
  });
  Gr();
  const w = {
    ...r,
    phase: "DRAGGING",
    impact: O,
    onLiftImpact: v,
    dimensions: f,
    afterCritical: E,
    forceShouldAnimate: !1
  };
  return r.phase === "COLLECTING" ? w : {
    ...w,
    phase: "DROP_PENDING",
    reason: r.reason,
    isWaiting: !1
  };
};
const Ys = (t) => t.movementMode === "SNAP", As = (t, r, o) => {
  const s = F_(t.dimensions, r);
  return !Ys(t) || o ? Cr({
    state: t,
    dimensions: s
  }) : kf({
    state: t,
    dimensions: s
  });
};
function Is(t) {
  return t.isDragging && t.movementMode === "SNAP" ? {
    ...t,
    scrollJumpRequest: null
  } : t;
}
const Vc = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var U_ = function(t, r) {
  if (t === void 0 && (t = Vc), r.type === "FLUSH")
    return {
      ...Vc,
      shouldFlush: !0
    };
  if (r.type === "INITIAL_PUBLISH") {
    t.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? S(!1, "INITIAL_PUBLISH must come after a IDLE phase") : S(!1));
    const {
      critical: o,
      clientSelection: s,
      viewport: a,
      dimensions: l,
      movementMode: c
    } = r.payload, f = l.draggables[o.draggable.id], p = l.droppables[o.droppable.id], h = {
      selection: s,
      borderBoxCenter: f.client.borderBox.center,
      offset: Ge
    }, b = {
      client: h,
      page: {
        selection: qe(h.selection, a.scroll.initial),
        borderBoxCenter: qe(h.selection, a.scroll.initial),
        offset: qe(h.selection, a.scroll.diff.value)
      }
    }, g = Yo(l.droppables).every((O) => !O.isFixedOnPage), {
      impact: v,
      afterCritical: E
    } = zf({
      draggable: f,
      home: p,
      draggables: l.draggables,
      viewport: a
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: o,
      movementMode: c,
      dimensions: l,
      initial: b,
      current: b,
      isWindowScrollAllowed: g,
      impact: v,
      afterCritical: E,
      onLiftImpact: v,
      viewport: a,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (r.type === "COLLECTION_STARTING")
    return t.phase === "COLLECTING" || t.phase === "DROP_PENDING" ? t : (t.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? S(!1, `Collection cannot start from phase ${t.phase}`) : S(!1)), {
      ...t,
      phase: "COLLECTING"
    });
  if (r.type === "PUBLISH_WHILE_DRAGGING")
    return t.phase === "COLLECTING" || t.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? S(!1, `Unexpected ${r.type} received in phase ${t.phase}`) : S(!1)), G_({
      state: t,
      published: r.payload
    });
  if (r.type === "MOVE") {
    if (t.phase === "DROP_PENDING")
      return t;
    On(t) || (process.env.NODE_ENV !== "production" ? S(!1, `${r.type} not permitted in phase ${t.phase}`) : S(!1));
    const {
      client: o
    } = r.payload;
    return vn(o, t.current.client.selection) ? t : Cr({
      state: t,
      clientSelection: o,
      impact: Ys(t) ? t.impact : null
    });
  }
  if (r.type === "UPDATE_DROPPABLE_SCROLL") {
    if (t.phase === "DROP_PENDING" || t.phase === "COLLECTING")
      return Is(t);
    On(t) || (process.env.NODE_ENV !== "production" ? S(!1, `${r.type} not permitted in phase ${t.phase}`) : S(!1));
    const {
      id: o,
      newScroll: s
    } = r.payload, a = t.dimensions.droppables[o];
    if (!a)
      return t;
    const l = ca(a, s);
    return As(t, l, !1);
  }
  if (r.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (t.phase === "DROP_PENDING")
      return t;
    On(t) || (process.env.NODE_ENV !== "production" ? S(!1, `Attempting to move in an unsupported phase ${t.phase}`) : S(!1));
    const {
      id: o,
      isEnabled: s
    } = r.payload, a = t.dimensions.droppables[o];
    a || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot find Droppable[id: ${o}] to toggle its enabled state`) : S(!1)), a.isEnabled === s && (process.env.NODE_ENV !== "production" ? S(!1, `Trying to set droppable isEnabled to ${String(s)}
      but it is already ${String(a.isEnabled)}`) : S(!1));
    const l = {
      ...a,
      isEnabled: s
    };
    return As(t, l, !0);
  }
  if (r.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (t.phase === "DROP_PENDING")
      return t;
    On(t) || (process.env.NODE_ENV !== "production" ? S(!1, `Attempting to move in an unsupported phase ${t.phase}`) : S(!1));
    const {
      id: o,
      isCombineEnabled: s
    } = r.payload, a = t.dimensions.droppables[o];
    a || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot find Droppable[id: ${o}] to toggle its isCombineEnabled state`) : S(!1)), a.isCombineEnabled === s && (process.env.NODE_ENV !== "production" ? S(!1, `Trying to set droppable isCombineEnabled to ${String(s)}
      but it is already ${String(a.isCombineEnabled)}`) : S(!1));
    const l = {
      ...a,
      isCombineEnabled: s
    };
    return As(t, l, !0);
  }
  if (r.type === "MOVE_BY_WINDOW_SCROLL") {
    if (t.phase === "DROP_PENDING" || t.phase === "DROP_ANIMATING")
      return t;
    On(t) || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot move by window in phase ${t.phase}`) : S(!1)), t.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? S(!1, "Window scrolling is currently not supported for fixed lists") : S(!1));
    const o = r.payload.newScroll;
    if (vn(t.viewport.scroll.current, o))
      return Is(t);
    const s = Lf(t.viewport, o);
    return Ys(t) ? kf({
      state: t,
      viewport: s
    }) : Cr({
      state: t,
      viewport: s
    });
  }
  if (r.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!On(t))
      return t;
    const o = r.payload.maxScroll;
    if (vn(o, t.viewport.scroll.max))
      return t;
    const s = {
      ...t.viewport,
      scroll: {
        ...t.viewport.scroll,
        max: o
      }
    };
    return {
      ...t,
      viewport: s
    };
  }
  if (r.type === "MOVE_UP" || r.type === "MOVE_DOWN" || r.type === "MOVE_LEFT" || r.type === "MOVE_RIGHT") {
    if (t.phase === "COLLECTING" || t.phase === "DROP_PENDING")
      return t;
    t.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? S(!1, `${r.type} received while not in DRAGGING phase`) : S(!1));
    const o = D_({
      state: t,
      type: r.type
    });
    return o ? Cr({
      state: t,
      impact: o.impact,
      clientSelection: o.clientSelection,
      scrollJumpRequest: o.scrollJumpRequest
    }) : t;
  }
  if (r.type === "DROP_PENDING") {
    const o = r.payload.reason;
    return t.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? S(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : S(!1)), {
      ...t,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: o
    };
  }
  if (r.type === "DROP_ANIMATE") {
    const {
      completed: o,
      dropDuration: s,
      newHomeClientOffset: a
    } = r.payload;
    return t.phase === "DRAGGING" || t.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot animate drop from phase ${t.phase}`) : S(!1)), {
      phase: "DROP_ANIMATING",
      completed: o,
      dropDuration: s,
      newHomeClientOffset: a,
      dimensions: t.dimensions
    };
  }
  if (r.type === "DROP_COMPLETE") {
    const {
      completed: o
    } = r.payload;
    return {
      phase: "IDLE",
      completed: o,
      shouldFlush: !1
    };
  }
  return t;
};
const H_ = (t) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: t
}), q_ = (t) => ({
  type: "LIFT",
  payload: t
}), k_ = (t) => ({
  type: "INITIAL_PUBLISH",
  payload: t
}), z_ = (t) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: t
}), Y_ = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), K_ = (t) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: t
}), X_ = (t) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: t
}), J_ = (t) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: t
}), Yf = (t) => ({
  type: "MOVE",
  payload: t
}), Z_ = (t) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: t
}), Q_ = (t) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: t
}), j_ = () => ({
  type: "MOVE_UP",
  payload: null
}), ew = () => ({
  type: "MOVE_DOWN",
  payload: null
}), tw = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), nw = () => ({
  type: "MOVE_LEFT",
  payload: null
}), ma = () => ({
  type: "FLUSH",
  payload: null
}), rw = (t) => ({
  type: "DROP_ANIMATE",
  payload: t
}), ba = (t) => ({
  type: "DROP_COMPLETE",
  payload: t
}), Kf = (t) => ({
  type: "DROP",
  payload: t
}), ow = (t) => ({
  type: "DROP_PENDING",
  payload: t
}), Xf = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function iw(t) {
  if (t.length <= 1)
    return;
  const r = t.map((a) => a.descriptor.index), o = {};
  for (let a = 1; a < r.length; a++) {
    const l = r[a], c = r[a - 1];
    l !== c + 1 && (o[l] = !0);
  }
  if (!Object.keys(o).length)
    return;
  const s = r.map((a) => !!o[a] ? `[🔥${a}]` : `${a}`).join(", ");
  process.env.NODE_ENV !== "production" && Se(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${s}
  `);
}
function sw(t, r) {
  if (process.env.NODE_ENV !== "production") {
    const o = Rn(t.droppable.id, r.draggables);
    iw(o);
  }
}
var aw = (t) => (r) => {
  let {
    getState: o,
    dispatch: s
  } = r;
  return (a) => (l) => {
    if (l.type !== "LIFT") {
      a(l);
      return;
    }
    const {
      id: c,
      clientSelection: f,
      movementMode: p
    } = l.payload, h = o();
    h.phase === "DROP_ANIMATING" && s(ba({
      completed: h.completed
    })), o().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? S(!1, "Unexpected phase to start a drag") : S(!1)), s(ma()), s(H_({
      draggableId: c,
      movementMode: p
    }));
    const g = {
      draggableId: c,
      scrollOptions: {
        shouldPublishImmediately: p === "SNAP"
      }
    }, {
      critical: v,
      dimensions: E,
      viewport: D
    } = t.startPublishing(g);
    sw(v, E), s(k_({
      critical: v,
      dimensions: E,
      clientSelection: f,
      movementMode: p,
      viewport: D
    }));
  };
}, lw = (t) => () => (r) => (o) => {
  o.type === "INITIAL_PUBLISH" && t.dragging(), o.type === "DROP_ANIMATE" && t.dropping(o.payload.completed.result.reason), (o.type === "FLUSH" || o.type === "DROP_COMPLETE") && t.resting(), r(o);
};
const ya = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Br = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Jf = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, In = `${Jf.outOfTheWay}s ${ya.outOfTheWay}`, Ar = {
  fluid: `opacity ${In}`,
  snap: `transform ${In}, opacity ${In}`,
  drop: (t) => {
    const r = `${t}s ${ya.drop}`;
    return `transform ${r}, opacity ${r}`;
  },
  outOfTheWay: `transform ${In}`,
  placeholder: `height ${In}, width ${In}, margin ${In}`
}, Gc = (t) => vn(t, Ge) ? void 0 : `translate(${t.x}px, ${t.y}px)`, Ks = {
  moveTo: Gc,
  drop: (t, r) => {
    const o = Gc(t);
    if (o)
      return r ? `${o} scale(${Br.scale.drop})` : o;
  }
}, {
  minDropTime: Xs,
  maxDropTime: Zf
} = Jf, uw = Zf - Xs, Uc = 1500, cw = 0.6;
var fw = (t) => {
  let {
    current: r,
    destination: o,
    reason: s
  } = t;
  const a = Rr(r, o);
  if (a <= 0)
    return Xs;
  if (a >= Uc)
    return Zf;
  const l = a / Uc, c = Xs + uw * l, f = s === "CANCEL" ? c * cw : c;
  return Number(f.toFixed(2));
}, dw = (t) => {
  let {
    impact: r,
    draggable: o,
    dimensions: s,
    viewport: a,
    afterCritical: l
  } = t;
  const {
    draggables: c,
    droppables: f
  } = s, p = mt(r), h = p ? f[p] : null, b = f[o.descriptor.droppableId], g = qf({
    impact: r,
    draggable: o,
    draggables: c,
    afterCritical: l,
    droppable: h || b,
    viewport: a
  });
  return vt(g, o.client.borderBox.center);
}, pw = (t) => {
  let {
    draggables: r,
    reason: o,
    lastImpact: s,
    home: a,
    viewport: l,
    onLiftImpact: c
  } = t;
  return !s.at || o !== "DROP" ? {
    impact: Hf({
      draggables: r,
      impact: c,
      destination: a,
      viewport: l,
      forceShouldAnimate: !0
    }),
    didDropInsideDroppable: !1
  } : s.at.type === "REORDER" ? {
    impact: s,
    didDropInsideDroppable: !0
  } : {
    impact: {
      ...s,
      displaced: Pr
    },
    didDropInsideDroppable: !0
  };
};
const gw = (t) => {
  let {
    getState: r,
    dispatch: o
  } = t;
  return (s) => (a) => {
    if (a.type !== "DROP") {
      s(a);
      return;
    }
    const l = r(), c = a.payload.reason;
    if (l.phase === "COLLECTING") {
      o(ow({
        reason: c
      }));
      return;
    }
    if (l.phase === "IDLE")
      return;
    l.phase === "DROP_PENDING" && l.isWaiting && (process.env.NODE_ENV !== "production" ? S(!1, "A DROP action occurred while DROP_PENDING and still waiting") : S(!1)), l.phase === "DRAGGING" || l.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot drop in phase: ${l.phase}`) : S(!1));
    const p = l.critical, h = l.dimensions, b = h.draggables[l.critical.draggable.id], {
      impact: g,
      didDropInsideDroppable: v
    } = pw({
      reason: c,
      lastImpact: l.impact,
      afterCritical: l.afterCritical,
      onLiftImpact: l.onLiftImpact,
      home: l.dimensions.droppables[l.critical.droppable.id],
      viewport: l.viewport,
      draggables: l.dimensions.draggables
    }), E = v ? fa(g) : null, D = v ? Ko(g) : null, O = {
      index: p.draggable.index,
      droppableId: p.droppable.id
    }, w = {
      draggableId: b.descriptor.id,
      type: b.descriptor.type,
      source: O,
      reason: c,
      mode: l.movementMode,
      destination: E,
      combine: D
    }, M = dw({
      impact: g,
      draggable: b,
      dimensions: h,
      viewport: l.viewport,
      afterCritical: l.afterCritical
    }), F = {
      critical: l.critical,
      afterCritical: l.afterCritical,
      result: w,
      impact: g
    };
    if (!(!vn(l.current.client.offset, M) || !!w.combine)) {
      o(ba({
        completed: F
      }));
      return;
    }
    const T = fw({
      current: l.current.client.offset,
      destination: M,
      reason: c
    });
    o(rw({
      newHomeClientOffset: M,
      dropDuration: T,
      completed: F
    }));
  };
};
var hw = gw, Qf = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function vw(t) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: (r) => {
      r.target !== window && r.target !== window.document || t();
    }
  };
}
function mw(t) {
  let {
    onWindowScroll: r
  } = t;
  function o() {
    r(Qf());
  }
  const s = Or(o), a = vw(s);
  let l = hn;
  function c() {
    return l !== hn;
  }
  function f() {
    c() && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot start scroll listener when already active") : S(!1)), l = Rt(window, [a]);
  }
  function p() {
    c() || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot stop scroll listener when not active") : S(!1)), s.cancel(), l(), l = hn;
  }
  return {
    start: f,
    stop: p,
    isActive: c
  };
}
const bw = (t) => t.type === "DROP_COMPLETE" || t.type === "DROP_ANIMATE" || t.type === "FLUSH", yw = (t) => {
  const r = mw({
    onWindowScroll: (o) => {
      t.dispatch(Z_({
        newScroll: o
      }));
    }
  });
  return (o) => (s) => {
    !r.isActive() && s.type === "INITIAL_PUBLISH" && r.start(), r.isActive() && bw(s) && r.stop(), o(s);
  };
};
var Ew = yw, _w = (t) => {
  let r = !1, o = !1;
  const s = setTimeout(() => {
    o = !0;
  }), a = (l) => {
    if (r) {
      process.env.NODE_ENV !== "production" && Se("Announcement already made. Not making a second announcement");
      return;
    }
    if (o) {
      process.env.NODE_ENV !== "production" && Se(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    r = !0, t(l), clearTimeout(s);
  };
  return a.wasCalled = () => r, a;
}, ww = () => {
  const t = [], r = (a) => {
    const l = t.findIndex((f) => f.timerId === a);
    l === -1 && (process.env.NODE_ENV !== "production" ? S(!1, "Could not find timer") : S(!1));
    const [c] = t.splice(l, 1);
    c.callback();
  };
  return {
    add: (a) => {
      const l = setTimeout(() => r(l)), c = {
        timerId: l,
        callback: a
      };
      t.push(c);
    },
    flush: () => {
      if (!t.length)
        return;
      const a = [...t];
      t.length = 0, a.forEach((l) => {
        clearTimeout(l.timerId), l.callback();
      });
    }
  };
};
const xw = (t, r) => t == null && r == null ? !0 : t == null || r == null ? !1 : t.droppableId === r.droppableId && t.index === r.index, Dw = (t, r) => t == null && r == null ? !0 : t == null || r == null ? !1 : t.draggableId === r.draggableId && t.droppableId === r.droppableId, Sw = (t, r) => {
  if (t === r)
    return !0;
  const o = t.draggable.id === r.draggable.id && t.draggable.droppableId === r.draggable.droppableId && t.draggable.type === r.draggable.type && t.draggable.index === r.draggable.index, s = t.droppable.id === r.droppable.id && t.droppable.type === r.droppable.type;
  return o && s;
}, _r = (t, r) => {
  Vr(), r(), Gr();
}, Bo = (t, r) => ({
  draggableId: t.draggable.id,
  type: t.droppable.type,
  source: {
    droppableId: t.droppable.id,
    index: t.draggable.index
  },
  mode: r
});
function Os(t, r, o, s) {
  if (!t) {
    o(s(r));
    return;
  }
  const a = _w(o);
  t(r, {
    announce: a
  }), a.wasCalled() || o(s(r));
}
var Cw = (t, r) => {
  const o = ww();
  let s = null;
  const a = (g, v) => {
    s && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : S(!1)), _r("onBeforeCapture", () => {
      const E = t().onBeforeCapture;
      E && E({
        draggableId: g,
        mode: v
      });
    });
  }, l = (g, v) => {
    s && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : S(!1)), _r("onBeforeDragStart", () => {
      const E = t().onBeforeDragStart;
      E && E(Bo(g, v));
    });
  }, c = (g, v) => {
    s && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : S(!1));
    const E = Bo(g, v);
    s = {
      mode: v,
      lastCritical: g,
      lastLocation: E.source,
      lastCombine: null
    }, o.add(() => {
      _r("onDragStart", () => Os(t().onDragStart, E, r, Wo.onDragStart));
    });
  }, f = (g, v) => {
    const E = fa(v), D = Ko(v);
    s || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fire onDragMove when onDragStart has not been called") : S(!1));
    const O = !Sw(g, s.lastCritical);
    O && (s.lastCritical = g);
    const w = !xw(s.lastLocation, E);
    w && (s.lastLocation = E);
    const M = !Dw(s.lastCombine, D);
    if (M && (s.lastCombine = D), !O && !w && !M)
      return;
    const F = {
      ...Bo(g, s.mode),
      combine: D,
      destination: E
    };
    o.add(() => {
      _r("onDragUpdate", () => Os(t().onDragUpdate, F, r, Wo.onDragUpdate));
    });
  }, p = () => {
    s || (process.env.NODE_ENV !== "production" ? S(!1, "Can only flush responders while dragging") : S(!1)), o.flush();
  }, h = (g) => {
    s || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : S(!1)), s = null, _r("onDragEnd", () => Os(t().onDragEnd, g, r, Wo.onDragEnd));
  };
  return {
    beforeCapture: a,
    beforeStart: l,
    start: c,
    update: f,
    flush: p,
    drop: h,
    abort: () => {
      if (!s)
        return;
      const g = {
        ...Bo(s.lastCritical, s.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      h(g);
    }
  };
}, Aw = (t, r) => {
  const o = Cw(t, r);
  return (s) => (a) => (l) => {
    if (l.type === "BEFORE_INITIAL_CAPTURE") {
      o.beforeCapture(l.payload.draggableId, l.payload.movementMode);
      return;
    }
    if (l.type === "INITIAL_PUBLISH") {
      const f = l.payload.critical;
      o.beforeStart(f, l.payload.movementMode), a(l), o.start(f, l.payload.movementMode);
      return;
    }
    if (l.type === "DROP_COMPLETE") {
      const f = l.payload.completed.result;
      o.flush(), a(l), o.drop(f);
      return;
    }
    if (a(l), l.type === "FLUSH") {
      o.abort();
      return;
    }
    const c = s.getState();
    c.phase === "DRAGGING" && o.update(c.critical, c.impact);
  };
};
const Iw = (t) => (r) => (o) => {
  if (o.type !== "DROP_ANIMATION_FINISHED") {
    r(o);
    return;
  }
  const s = t.getState();
  s.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot finish a drop animating when no drop is occurring") : S(!1)), t.dispatch(ba({
    completed: s.completed
  }));
};
var Ow = Iw;
const Nw = (t) => {
  let r = null, o = null;
  function s() {
    o && (cancelAnimationFrame(o), o = null), r && (r(), r = null);
  }
  return (a) => (l) => {
    if ((l.type === "FLUSH" || l.type === "DROP_COMPLETE" || l.type === "DROP_ANIMATION_FINISHED") && s(), a(l), l.type !== "DROP_ANIMATE")
      return;
    const c = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        t.getState().phase === "DROP_ANIMATING" && t.dispatch(Xf());
      }
    };
    o = requestAnimationFrame(() => {
      o = null, r = Rt(window, [c]);
    });
  };
};
var Rw = Nw, Pw = (t) => () => (r) => (o) => {
  (o.type === "DROP_COMPLETE" || o.type === "FLUSH" || o.type === "DROP_ANIMATE") && t.stopPublishing(), r(o);
}, Tw = (t) => {
  let r = !1;
  return () => (o) => (s) => {
    if (s.type === "INITIAL_PUBLISH") {
      r = !0, t.tryRecordFocus(s.payload.critical.draggable.id), o(s), t.tryRestoreFocusRecorded();
      return;
    }
    if (o(s), !!r) {
      if (s.type === "FLUSH") {
        r = !1, t.tryRestoreFocusRecorded();
        return;
      }
      if (s.type === "DROP_COMPLETE") {
        r = !1;
        const a = s.payload.completed.result;
        a.combine && t.tryShiftRecord(a.draggableId, a.combine.draggableId), t.tryRestoreFocusRecorded();
      }
    }
  };
};
const Bw = (t) => t.type === "DROP_COMPLETE" || t.type === "DROP_ANIMATE" || t.type === "FLUSH";
var Lw = (t) => (r) => (o) => (s) => {
  if (Bw(s)) {
    t.stop(), o(s);
    return;
  }
  if (s.type === "INITIAL_PUBLISH") {
    o(s);
    const a = r.getState();
    a.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? S(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : S(!1)), t.start(a);
    return;
  }
  o(s), t.scroll(r.getState());
};
const Mw = (t) => (r) => (o) => {
  if (r(o), o.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const s = t.getState();
  s.phase === "DROP_PENDING" && (s.isWaiting || t.dispatch(Kf({
    reason: s.reason
  })));
};
var Fw = Mw;
const $w = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : bE;
var Ww = (t) => {
  let {
    dimensionMarshal: r,
    focusMarshal: o,
    styleMarshal: s,
    getResponders: a,
    announce: l,
    autoScroller: c
  } = t;
  return yE(U_, $w(EE(lw(s), Pw(r), aw(r), hw, Ow, Rw, Fw, Lw(c), Ew, Tw(o), Aw(a, l))));
};
const Ns = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Vw(t) {
  let {
    registry: r,
    callbacks: o
  } = t, s = Ns(), a = null;
  const l = () => {
    a || (o.collectionStarting(), a = requestAnimationFrame(() => {
      a = null, Vr();
      const {
        additions: h,
        removals: b,
        modified: g
      } = s, v = Object.keys(h).map((O) => r.draggable.getById(O).getDimension(Ge)).sort((O, w) => O.descriptor.index - w.descriptor.index), E = Object.keys(g).map((O) => {
        const M = r.droppable.getById(O).callbacks.getScrollWhileDragging();
        return {
          droppableId: O,
          scroll: M
        };
      }), D = {
        additions: v,
        removals: Object.keys(b),
        modified: E
      };
      s = Ns(), Gr(), o.publish(D);
    }));
  };
  return {
    add: (h) => {
      const b = h.descriptor.id;
      s.additions[b] = h, s.modified[h.descriptor.droppableId] = !0, s.removals[b] && delete s.removals[b], l();
    },
    remove: (h) => {
      const b = h.descriptor;
      s.removals[b.id] = !0, s.modified[b.droppableId] = !0, s.additions[b.id] && delete s.additions[b.id], l();
    },
    stop: () => {
      a && (cancelAnimationFrame(a), a = null, s = Ns());
    }
  };
}
var jf = (t) => {
  let {
    scrollHeight: r,
    scrollWidth: o,
    height: s,
    width: a
  } = t;
  const l = vt({
    x: o,
    y: r
  }, {
    x: a,
    y: s
  });
  return {
    x: Math.max(0, l.x),
    y: Math.max(0, l.y)
  };
}, ed = () => {
  const t = document.documentElement;
  return t || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot find document.documentElement") : S(!1)), t;
}, td = () => {
  const t = ed();
  return jf({
    scrollHeight: t.scrollHeight,
    scrollWidth: t.scrollWidth,
    width: t.clientWidth,
    height: t.clientHeight
  });
}, Gw = () => {
  const t = Qf(), r = td(), o = t.y, s = t.x, a = ed(), l = a.clientWidth, c = a.clientHeight, f = s + l, p = o + c;
  return {
    frame: Gt({
      top: o,
      left: s,
      right: f,
      bottom: p
    }),
    scroll: {
      initial: t,
      current: t,
      max: r,
      diff: {
        value: Ge,
        displacement: Ge
      }
    }
  };
}, Uw = (t) => {
  let {
    critical: r,
    scrollOptions: o,
    registry: s
  } = t;
  Vr();
  const a = Gw(), l = a.scroll.current, c = r.droppable, f = s.droppable.getAllByType(c.type).map((g) => g.callbacks.getDimensionAndWatchScroll(l, o)), p = s.draggable.getAllByType(r.draggable.type).map((g) => g.getDimension(l)), h = {
    draggables: Of(p),
    droppables: If(f)
  };
  return Gr(), {
    dimensions: h,
    critical: r,
    viewport: a
  };
};
function Hc(t, r, o) {
  return o.descriptor.id === r.id || o.descriptor.type !== r.type ? !1 : t.droppable.getById(o.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Se(`
      You are attempting to add or remove a Draggable [id: ${o.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Hw = (t, r) => {
  let o = null;
  const s = Vw({
    callbacks: {
      publish: r.publishWhileDragging,
      collectionStarting: r.collectionStarting
    },
    registry: t
  }), a = (v, E) => {
    t.droppable.exists(v) || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot update is enabled flag of Droppable ${v} as it is not registered`) : S(!1)), o && r.updateDroppableIsEnabled({
      id: v,
      isEnabled: E
    });
  }, l = (v, E) => {
    o && (t.droppable.exists(v) || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot update isCombineEnabled flag of Droppable ${v} as it is not registered`) : S(!1)), r.updateDroppableIsCombineEnabled({
      id: v,
      isCombineEnabled: E
    }));
  }, c = (v, E) => {
    o && (t.droppable.exists(v) || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot update the scroll on Droppable ${v} as it is not registered`) : S(!1)), r.updateDroppableScroll({
      id: v,
      newScroll: E
    }));
  }, f = (v, E) => {
    o && t.droppable.getById(v).callbacks.scroll(E);
  }, p = () => {
    if (!o)
      return;
    s.stop();
    const v = o.critical.droppable;
    t.droppable.getAllByType(v.type).forEach((E) => E.callbacks.dragStopped()), o.unsubscribe(), o = null;
  }, h = (v) => {
    o || (process.env.NODE_ENV !== "production" ? S(!1, "Should only be subscribed when a collection is occurring") : S(!1));
    const E = o.critical.draggable;
    v.type === "ADDITION" && Hc(t, E, v.value) && s.add(v.value), v.type === "REMOVAL" && Hc(t, E, v.value) && s.remove(v.value);
  };
  return {
    updateDroppableIsEnabled: a,
    updateDroppableIsCombineEnabled: l,
    scrollDroppable: f,
    updateDroppableScroll: c,
    startPublishing: (v) => {
      o && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot start capturing critical dimensions as there is already a collection") : S(!1));
      const E = t.draggable.getById(v.draggableId), D = t.droppable.getById(E.descriptor.droppableId), O = {
        draggable: E.descriptor,
        droppable: D.descriptor
      }, w = t.subscribe(h);
      return o = {
        critical: O,
        unsubscribe: w
      }, Uw({
        critical: O,
        registry: t,
        scrollOptions: v.scrollOptions
      });
    },
    stopPublishing: p
  };
}, nd = (t, r) => t.phase === "IDLE" ? !0 : t.phase !== "DROP_ANIMATING" || t.completed.result.draggableId === r ? !1 : t.completed.result.reason === "DROP", qw = (t) => {
  window.scrollBy(t.x, t.y);
};
const kw = Ve((t) => Yo(t).filter((r) => !(!r.isEnabled || !r.frame))), zw = (t, r) => kw(r).find((s) => (s.frame || (process.env.NODE_ENV !== "production" ? S(!1, "Invalid result") : S(!1)), Wf(s.frame.pageMarginBox)(t))) || null;
var Yw = (t) => {
  let {
    center: r,
    destination: o,
    droppables: s
  } = t;
  if (o) {
    const l = s[o];
    return l.frame ? l : null;
  }
  return zw(r, s);
};
const Lr = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (t) => t ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: !1
};
var Kw = function(t, r, o) {
  o === void 0 && (o = () => Lr);
  const s = o(), a = t[r.size] * s.startFromPercentage, l = t[r.size] * s.maxScrollAtPercentage;
  return {
    startScrollingFrom: a,
    maxScrollValueAt: l
  };
}, rd = (t) => {
  let {
    startOfRange: r,
    endOfRange: o,
    current: s
  } = t;
  const a = o - r;
  return a === 0 ? (process.env.NODE_ENV !== "production" && Se(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (s - r) / a;
}, Ea = 1, Xw = function(t, r, o) {
  o === void 0 && (o = () => Lr);
  const s = o();
  if (t > r.startScrollingFrom)
    return 0;
  if (t <= r.maxScrollValueAt)
    return s.maxPixelScroll;
  if (t === r.startScrollingFrom)
    return Ea;
  const l = 1 - rd({
    startOfRange: r.maxScrollValueAt,
    endOfRange: r.startScrollingFrom,
    current: t
  }), c = s.maxPixelScroll * s.ease(l);
  return Math.ceil(c);
}, Jw = (t, r, o) => {
  const s = o(), a = s.durationDampening.accelerateAt, l = s.durationDampening.stopDampeningAt, c = r, f = l, h = Date.now() - c;
  if (h >= l)
    return t;
  if (h < a)
    return Ea;
  const b = rd({
    startOfRange: a,
    endOfRange: f,
    current: h
  }), g = t * s.ease(b);
  return Math.ceil(g);
}, qc = (t) => {
  let {
    distanceToEdge: r,
    thresholds: o,
    dragStartTime: s,
    shouldUseTimeDampening: a,
    getAutoScrollerOptions: l
  } = t;
  const c = Xw(r, o, l);
  return c === 0 ? 0 : a ? Math.max(Jw(c, s, l), Ea) : c;
}, kc = (t) => {
  let {
    container: r,
    distanceToEdges: o,
    dragStartTime: s,
    axis: a,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: c
  } = t;
  const f = Kw(r, a, c);
  return o[a.end] < o[a.start] ? qc({
    distanceToEdge: o[a.end],
    thresholds: f,
    dragStartTime: s,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: c
  }) : -1 * qc({
    distanceToEdge: o[a.start],
    thresholds: f,
    dragStartTime: s,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: c
  });
}, Zw = (t) => {
  let {
    container: r,
    subject: o,
    proposedScroll: s
  } = t;
  const a = o.height > r.height, l = o.width > r.width;
  return !l && !a ? s : l && a ? null : {
    x: l ? 0 : s.x,
    y: a ? 0 : s.y
  };
};
const Qw = Af((t) => t === 0 ? 0 : t);
var od = (t) => {
  let {
    dragStartTime: r,
    container: o,
    subject: s,
    center: a,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: c
  } = t;
  const f = {
    top: a.y - o.top,
    right: o.right - a.x,
    bottom: o.bottom - a.y,
    left: a.x - o.left
  }, p = kc({
    container: o,
    distanceToEdges: f,
    dragStartTime: r,
    axis: da,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: c
  }), h = kc({
    container: o,
    distanceToEdges: f,
    dragStartTime: r,
    axis: Pf,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: c
  }), b = Qw({
    x: h,
    y: p
  });
  if (vn(b, Ge))
    return null;
  const g = Zw({
    container: o,
    subject: s,
    proposedScroll: b
  });
  return g ? vn(g, Ge) ? null : g : null;
};
const jw = Af((t) => t === 0 ? 0 : t > 0 ? 1 : -1), _a = (() => {
  const t = (r, o) => r < 0 ? r : r > o ? r - o : 0;
  return (r) => {
    let {
      current: o,
      max: s,
      change: a
    } = r;
    const l = qe(o, a), c = {
      x: t(l.x, s.x),
      y: t(l.y, s.y)
    };
    return vn(c, Ge) ? null : c;
  };
})(), id = (t) => {
  let {
    max: r,
    current: o,
    change: s
  } = t;
  const a = {
    x: Math.max(o.x, r.x),
    y: Math.max(o.y, r.y)
  }, l = jw(s), c = _a({
    max: a,
    current: o,
    change: l
  });
  return !c || l.x !== 0 && c.x === 0 || l.y !== 0 && c.y === 0;
}, wa = (t, r) => id({
  current: t.scroll.current,
  max: t.scroll.max,
  change: r
}), e1 = (t, r) => {
  if (!wa(t, r))
    return null;
  const o = t.scroll.max, s = t.scroll.current;
  return _a({
    current: s,
    max: o,
    change: r
  });
}, xa = (t, r) => {
  const o = t.frame;
  return o ? id({
    current: o.scroll.current,
    max: o.scroll.max,
    change: r
  }) : !1;
}, t1 = (t, r) => {
  const o = t.frame;
  return !o || !xa(t, r) ? null : _a({
    current: o.scroll.current,
    max: o.scroll.max,
    change: r
  });
};
var n1 = (t) => {
  let {
    viewport: r,
    subject: o,
    center: s,
    dragStartTime: a,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: c
  } = t;
  const f = od({
    dragStartTime: a,
    container: r.frame,
    subject: o,
    center: s,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: c
  });
  return f && wa(r, f) ? f : null;
}, r1 = (t) => {
  let {
    droppable: r,
    subject: o,
    center: s,
    dragStartTime: a,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: c
  } = t;
  const f = r.frame;
  if (!f)
    return null;
  const p = od({
    dragStartTime: a,
    container: f.pageMarginBox,
    subject: o,
    center: s,
    shouldUseTimeDampening: l,
    getAutoScrollerOptions: c
  });
  return p && xa(r, p) ? p : null;
}, zc = (t) => {
  let {
    state: r,
    dragStartTime: o,
    shouldUseTimeDampening: s,
    scrollWindow: a,
    scrollDroppable: l,
    getAutoScrollerOptions: c
  } = t;
  const f = r.current.page.borderBoxCenter, h = r.dimensions.draggables[r.critical.draggable.id].page.marginBox;
  if (r.isWindowScrollAllowed) {
    const v = r.viewport, E = n1({
      dragStartTime: o,
      viewport: v,
      subject: h,
      center: f,
      shouldUseTimeDampening: s,
      getAutoScrollerOptions: c
    });
    if (E) {
      a(E);
      return;
    }
  }
  const b = Yw({
    center: f,
    destination: mt(r.impact),
    droppables: r.dimensions.droppables
  });
  if (!b)
    return;
  const g = r1({
    dragStartTime: o,
    droppable: b,
    subject: h,
    center: f,
    shouldUseTimeDampening: s,
    getAutoScrollerOptions: c
  });
  g && l(b.descriptor.id, g);
}, o1 = (t) => {
  let {
    scrollWindow: r,
    scrollDroppable: o,
    getAutoScrollerOptions: s = () => Lr
  } = t;
  const a = Or(r), l = Or(o);
  let c = null;
  const f = (b) => {
    c || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot fluid scroll if not dragging") : S(!1));
    const {
      shouldUseTimeDampening: g,
      dragStartTime: v
    } = c;
    zc({
      state: b,
      scrollWindow: a,
      scrollDroppable: l,
      dragStartTime: v,
      shouldUseTimeDampening: g,
      getAutoScrollerOptions: s
    });
  };
  return {
    start: (b) => {
      Vr(), c && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot start auto scrolling when already started") : S(!1));
      const g = Date.now();
      let v = !1;
      const E = () => {
        v = !0;
      };
      zc({
        state: b,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: E,
        scrollDroppable: E,
        getAutoScrollerOptions: s
      }), c = {
        dragStartTime: g,
        shouldUseTimeDampening: v
      }, Gr(), v && f(b);
    },
    stop: () => {
      c && (a.cancel(), l.cancel(), c = null);
    },
    scroll: f
  };
}, i1 = (t) => {
  let {
    move: r,
    scrollDroppable: o,
    scrollWindow: s
  } = t;
  const a = (p, h) => {
    const b = qe(p.current.client.selection, h);
    r({
      client: b
    });
  }, l = (p, h) => {
    if (!xa(p, h))
      return h;
    const b = t1(p, h);
    if (!b)
      return o(p.descriptor.id, h), null;
    const g = vt(h, b);
    return o(p.descriptor.id, g), vt(h, g);
  }, c = (p, h, b) => {
    if (!p || !wa(h, b))
      return b;
    const g = e1(h, b);
    if (!g)
      return s(b), null;
    const v = vt(b, g);
    return s(v), vt(b, v);
  };
  return (p) => {
    const h = p.scrollJumpRequest;
    if (!h)
      return;
    const b = mt(p.impact);
    b || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot perform a jump scroll when there is no destination") : S(!1));
    const g = l(p.dimensions.droppables[b], h);
    if (!g)
      return;
    const v = p.viewport, E = c(p.isWindowScrollAllowed, v, g);
    E && a(p, E);
  };
}, s1 = (t) => {
  let {
    scrollDroppable: r,
    scrollWindow: o,
    move: s,
    getAutoScrollerOptions: a
  } = t;
  const l = o1({
    scrollWindow: o,
    scrollDroppable: r,
    getAutoScrollerOptions: a
  }), c = i1({
    move: s,
    scrollWindow: o,
    scrollDroppable: r
  });
  return {
    scroll: (h) => {
      if (!(a().disabled || h.phase !== "DRAGGING")) {
        if (h.movementMode === "FLUID") {
          l.scroll(h);
          return;
        }
        h.scrollJumpRequest && c(h);
      }
    },
    start: l.start,
    stop: l.stop
  };
};
const Zn = "data-rfd", Qn = (() => {
  const t = `${Zn}-drag-handle`;
  return {
    base: t,
    draggableId: `${t}-draggable-id`,
    contextId: `${t}-context-id`
  };
})(), Js = (() => {
  const t = `${Zn}-draggable`;
  return {
    base: t,
    contextId: `${t}-context-id`,
    id: `${t}-id`
  };
})(), a1 = (() => {
  const t = `${Zn}-droppable`;
  return {
    base: t,
    contextId: `${t}-context-id`,
    id: `${t}-id`
  };
})(), Yc = {
  contextId: `${Zn}-scroll-container-context-id`
}, l1 = (t) => (r) => `[${r}="${t}"]`, wr = (t, r) => t.map((o) => {
  const s = o.styles[r];
  return s ? `${o.selector} { ${s} }` : "";
}).join(" "), u1 = "pointer-events: none;";
var c1 = (t) => {
  const r = l1(t), o = (() => {
    const f = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: r(Qn.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: f,
        dragging: u1,
        dropAnimating: f
      }
    };
  })(), s = (() => {
    const f = `
      transition: ${Ar.outOfTheWay};
    `;
    return {
      selector: r(Js.contextId),
      styles: {
        dragging: f,
        dropAnimating: f,
        userCancel: f
      }
    };
  })(), a = {
    selector: r(a1.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, c = [s, o, a, {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  }];
  return {
    always: wr(c, "always"),
    resting: wr(c, "resting"),
    dragging: wr(c, "dragging"),
    dropAnimating: wr(c, "dropAnimating"),
    userCancel: wr(c, "userCancel")
  };
};
const f1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? V.useLayoutEffect : V.useEffect;
var bt = f1;
const Rs = () => {
  const t = document.querySelector("head");
  return t || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot find the head to append a style to") : S(!1)), t;
}, Kc = (t) => {
  const r = document.createElement("style");
  return t && r.setAttribute("nonce", t), r.type = "text/css", r;
};
function d1(t, r) {
  const o = ge(() => c1(t), [t]), s = V.useRef(null), a = V.useRef(null), l = Z(Ve((g) => {
    const v = a.current;
    v || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot set dynamic style element if it is not set") : S(!1)), v.textContent = g;
  }), []), c = Z((g) => {
    const v = s.current;
    v || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot set dynamic style element if it is not set") : S(!1)), v.textContent = g;
  }, []);
  bt(() => {
    !s.current && !a.current || (process.env.NODE_ENV !== "production" ? S(!1, "style elements already mounted") : S(!1));
    const g = Kc(r), v = Kc(r);
    return s.current = g, a.current = v, g.setAttribute(`${Zn}-always`, t), v.setAttribute(`${Zn}-dynamic`, t), Rs().appendChild(g), Rs().appendChild(v), c(o.always), l(o.resting), () => {
      const E = (D) => {
        const O = D.current;
        O || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot unmount ref as it is not set") : S(!1)), Rs().removeChild(O), D.current = null;
      };
      E(s), E(a);
    };
  }, [r, c, l, o.always, o.resting, t]);
  const f = Z(() => l(o.dragging), [l, o.dragging]), p = Z((g) => {
    if (g === "DROP") {
      l(o.dropAnimating);
      return;
    }
    l(o.userCancel);
  }, [l, o.dropAnimating, o.userCancel]), h = Z(() => {
    a.current && l(o.resting);
  }, [l, o.resting]);
  return ge(() => ({
    dragging: f,
    dropping: p,
    resting: h
  }), [f, p, h]);
}
function sd(t, r) {
  return Array.from(t.querySelectorAll(r));
}
var ad = (t) => {
  var r;
  return ((r = t == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
};
function Ur(t) {
  return t instanceof ad(t).HTMLElement;
}
function ld(t, r) {
  const o = `[${Qn.contextId}="${t}"]`, s = sd(document, o);
  if (!s.length)
    return process.env.NODE_ENV !== "production" && Se(`Unable to find any drag handles in the context "${t}"`), null;
  const a = s.find((l) => l.getAttribute(Qn.draggableId) === r);
  return a ? Ur(a) ? a : (process.env.NODE_ENV !== "production" && Se("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Se(`Unable to find drag handle with id "${r}" as no handle with a matching id was found`), null);
}
function p1(t) {
  const r = V.useRef({}), o = V.useRef(null), s = V.useRef(null), a = V.useRef(!1), l = Z(function(v, E) {
    const D = {
      id: v,
      focus: E
    };
    return r.current[v] = D, function() {
      const w = r.current;
      w[v] !== D && delete w[v];
    };
  }, []), c = Z(function(v) {
    const E = ld(t, v);
    E && E !== document.activeElement && E.focus();
  }, [t]), f = Z(function(v, E) {
    o.current === v && (o.current = E);
  }, []), p = Z(function() {
    s.current || a.current && (s.current = requestAnimationFrame(() => {
      s.current = null;
      const v = o.current;
      v && c(v);
    }));
  }, [c]), h = Z(function(v) {
    o.current = null;
    const E = document.activeElement;
    E && E.getAttribute(Qn.draggableId) === v && (o.current = v);
  }, []);
  return bt(() => (a.current = !0, function() {
    a.current = !1;
    const v = s.current;
    v && cancelAnimationFrame(v);
  }), []), ge(() => ({
    register: l,
    tryRecordFocus: h,
    tryRestoreFocusRecorded: p,
    tryShiftRecord: f
  }), [l, h, p, f]);
}
function g1() {
  const t = {
    draggables: {},
    droppables: {}
  }, r = [];
  function o(g) {
    return r.push(g), function() {
      const E = r.indexOf(g);
      E !== -1 && r.splice(E, 1);
    };
  }
  function s(g) {
    r.length && r.forEach((v) => v(g));
  }
  function a(g) {
    return t.draggables[g] || null;
  }
  function l(g) {
    const v = a(g);
    return v || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot find draggable entry with id [${g}]`) : S(!1)), v;
  }
  const c = {
    register: (g) => {
      t.draggables[g.descriptor.id] = g, s({
        type: "ADDITION",
        value: g
      });
    },
    update: (g, v) => {
      const E = t.draggables[v.descriptor.id];
      E && E.uniqueId === g.uniqueId && (delete t.draggables[v.descriptor.id], t.draggables[g.descriptor.id] = g);
    },
    unregister: (g) => {
      const v = g.descriptor.id, E = a(v);
      E && g.uniqueId === E.uniqueId && (delete t.draggables[v], t.droppables[g.descriptor.droppableId] && s({
        type: "REMOVAL",
        value: g
      }));
    },
    getById: l,
    findById: a,
    exists: (g) => !!a(g),
    getAllByType: (g) => Object.values(t.draggables).filter((v) => v.descriptor.type === g)
  };
  function f(g) {
    return t.droppables[g] || null;
  }
  function p(g) {
    const v = f(g);
    return v || (process.env.NODE_ENV !== "production" ? S(!1, `Cannot find droppable entry with id [${g}]`) : S(!1)), v;
  }
  const h = {
    register: (g) => {
      t.droppables[g.descriptor.id] = g;
    },
    unregister: (g) => {
      const v = f(g.descriptor.id);
      v && g.uniqueId === v.uniqueId && delete t.droppables[g.descriptor.id];
    },
    getById: p,
    findById: f,
    exists: (g) => !!f(g),
    getAllByType: (g) => Object.values(t.droppables).filter((v) => v.descriptor.type === g)
  };
  function b() {
    t.draggables = {}, t.droppables = {}, r.length = 0;
  }
  return {
    draggable: c,
    droppable: h,
    subscribe: o,
    clean: b
  };
}
function h1() {
  const t = ge(g1, []);
  return V.useEffect(() => function() {
    X.version.startsWith("16") || X.version.startsWith("17") ? requestAnimationFrame(t.clean) : t.clean();
  }, [t]), t;
}
var Da = X.createContext(null), Mr = () => {
  const t = document.body;
  return t || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot find document.body") : S(!1)), t;
};
const v1 = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var m1 = v1;
const b1 = (t) => `rfd-announcement-${t}`;
function y1(t) {
  const r = ge(() => b1(t), [t]), o = V.useRef(null);
  return V.useEffect(function() {
    const l = document.createElement("div");
    return o.current = l, l.id = r, l.setAttribute("aria-live", "assertive"), l.setAttribute("aria-atomic", "true"), Xn(l.style, m1), Mr().appendChild(l), function() {
      setTimeout(function() {
        const p = Mr();
        p.contains(l) && p.removeChild(l), l === o.current && (o.current = null);
      });
    };
  }, [r]), Z((a) => {
    const l = o.current;
    if (l) {
      l.textContent = a;
      return;
    }
    process.env.NODE_ENV !== "production" && Se(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${a}"
    `);
  }, []);
}
let E1 = 0;
const ud = {
  separator: "::"
};
function _1(t, r) {
  return r === void 0 && (r = ud), ge(() => `${t}${r.separator}${E1++}`, [r.separator, t]);
}
function w1(t, r) {
  r === void 0 && (r = ud);
  const o = X.useId();
  return ge(() => `${t}${r.separator}${o}`, [r.separator, t, o]);
}
var Sa = "useId" in X ? w1 : _1;
function x1(t) {
  let {
    contextId: r,
    uniqueId: o
  } = t;
  return `rfd-hidden-text-${r}-${o}`;
}
function D1(t) {
  let {
    contextId: r,
    text: o
  } = t;
  const s = Sa("hidden-text", {
    separator: "-"
  }), a = ge(() => x1({
    contextId: r,
    uniqueId: s
  }), [s, r]);
  return V.useEffect(function() {
    const c = document.createElement("div");
    return c.id = a, c.textContent = o, c.style.display = "none", Mr().appendChild(c), function() {
      const p = Mr();
      p.contains(c) && p.removeChild(c);
    };
  }, [a, o]), a;
}
var Zo = X.createContext(null), S1 = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const C1 = /(\d+)\.(\d+)\.(\d+)/, Xc = (t) => {
  const r = C1.exec(t);
  r == null && (process.env.NODE_ENV !== "production" ? S(!1, `Unable to parse React version ${t}`) : S(!1));
  const o = Number(r[1]), s = Number(r[2]), a = Number(r[3]);
  return {
    major: o,
    minor: s,
    patch: a,
    raw: t
  };
}, A1 = (t, r) => r.major > t.major ? !0 : r.major < t.major ? !1 : r.minor > t.minor ? !0 : r.minor < t.minor ? !1 : r.patch >= t.patch;
var I1 = (t, r) => {
  const o = Xc(t), s = Xc(r);
  A1(o, s) || process.env.NODE_ENV !== "production" && Se(`
    React version: [${s.raw}]
    does not satisfy expected peer dependency version: [${o.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Ps = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var O1 = (t) => {
  const r = t.doctype;
  if (!r) {
    process.env.NODE_ENV !== "production" && Se(`
      No <!doctype html> found.

      ${Ps}
    `);
    return;
  }
  r.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Se(`
      Unexpected <!doctype> found: (${r.name})

      ${Ps}
    `), r.publicId !== "" && process.env.NODE_ENV !== "production" && Se(`
      Unexpected <!doctype> publicId found: (${r.publicId})
      A html5 doctype does not have a publicId

      ${Ps}
    `);
};
function Ca(t) {
  process.env.NODE_ENV !== "production" && t();
}
function Hr(t, r) {
  Ca(() => {
    V.useEffect(() => {
      try {
        t();
      } catch (o) {
        ks(`
          A setup problem was encountered.

          > ${o.message}
        `);
      }
    }, r);
  });
}
function N1() {
  Hr(() => {
    I1(S1.react, X.version), O1(document);
  }, []);
}
function Aa(t) {
  const r = V.useRef(t);
  return V.useEffect(() => {
    r.current = t;
  }), r;
}
function R1() {
  let t = null;
  function r() {
    return !!t;
  }
  function o(c) {
    return c === t;
  }
  function s(c) {
    t && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot claim lock as it is already claimed") : S(!1));
    const f = {
      abandon: c
    };
    return t = f, f;
  }
  function a() {
    t || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot release lock when there is no lock") : S(!1)), t = null;
  }
  function l() {
    t && (t.abandon(), a());
  }
  return {
    isClaimed: r,
    isActive: o,
    claim: s,
    release: a,
    tryAbandon: l
  };
}
function Fr(t) {
  return t.phase === "IDLE" || t.phase === "DROP_ANIMATING" ? !1 : t.isDragging;
}
const P1 = 9, T1 = 13, Ia = 27, cd = 32, B1 = 33, L1 = 34, M1 = 35, F1 = 36, $1 = 37, W1 = 38, V1 = 39, G1 = 40, U1 = {
  [T1]: !0,
  [P1]: !0
};
var fd = (t) => {
  U1[t.keyCode] && t.preventDefault();
};
const H1 = (() => {
  const t = "visibilitychange";
  return typeof document > "u" ? t : [t, `ms${t}`, `webkit${t}`, `moz${t}`, `o${t}`].find((s) => `on${s}` in document) || t;
})();
var Qo = H1;
const dd = 0, Jc = 5;
function q1(t, r) {
  return Math.abs(r.x - t.x) >= Jc || Math.abs(r.y - t.y) >= Jc;
}
const Zc = {
  type: "IDLE"
};
function k1(t) {
  let {
    cancel: r,
    completed: o,
    getPhase: s,
    setPhase: a
  } = t;
  return [{
    eventName: "mousemove",
    fn: (l) => {
      const {
        button: c,
        clientX: f,
        clientY: p
      } = l;
      if (c !== dd)
        return;
      const h = {
        x: f,
        y: p
      }, b = s();
      if (b.type === "DRAGGING") {
        l.preventDefault(), b.actions.move(h);
        return;
      }
      b.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot be IDLE") : S(!1));
      const g = b.point;
      if (!q1(g, h))
        return;
      l.preventDefault();
      const v = b.actions.fluidLift(h);
      a({
        type: "DRAGGING",
        actions: v
      });
    }
  }, {
    eventName: "mouseup",
    fn: (l) => {
      const c = s();
      if (c.type !== "DRAGGING") {
        r();
        return;
      }
      l.preventDefault(), c.actions.drop({
        shouldBlockNextClick: !0
      }), o();
    }
  }, {
    eventName: "mousedown",
    fn: (l) => {
      s().type === "DRAGGING" && l.preventDefault(), r();
    }
  }, {
    eventName: "keydown",
    fn: (l) => {
      if (s().type === "PENDING") {
        r();
        return;
      }
      if (l.keyCode === Ia) {
        l.preventDefault(), r();
        return;
      }
      fd(l);
    }
  }, {
    eventName: "resize",
    fn: r
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: () => {
      s().type === "PENDING" && r();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (l) => {
      const c = s();
      if (c.type === "IDLE" && (process.env.NODE_ENV !== "production" ? S(!1, "Unexpected phase") : S(!1)), c.actions.shouldRespectForcePress()) {
        r();
        return;
      }
      l.preventDefault();
    }
  }, {
    eventName: Qo,
    fn: r
  }];
}
function z1(t) {
  const r = V.useRef(Zc), o = V.useRef(hn), s = ge(() => ({
    eventName: "mousedown",
    fn: function(g) {
      if (g.defaultPrevented || g.button !== dd || g.ctrlKey || g.metaKey || g.shiftKey || g.altKey)
        return;
      const v = t.findClosestDraggableId(g);
      if (!v)
        return;
      const E = t.tryGetLock(v, c, {
        sourceEvent: g
      });
      if (!E)
        return;
      g.preventDefault();
      const D = {
        x: g.clientX,
        y: g.clientY
      };
      o.current(), h(E, D);
    }
  }), [t]), a = ge(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (b) => {
      if (b.defaultPrevented)
        return;
      const g = t.findClosestDraggableId(b);
      if (!g)
        return;
      const v = t.findOptionsForDraggable(g);
      v && (v.shouldRespectForcePress || t.canGetLock(g) && b.preventDefault());
    }
  }), [t]), l = Z(function() {
    const g = {
      passive: !1,
      capture: !0
    };
    o.current = Rt(window, [a, s], g);
  }, [a, s]), c = Z(() => {
    r.current.type !== "IDLE" && (r.current = Zc, o.current(), l());
  }, [l]), f = Z(() => {
    const b = r.current;
    c(), b.type === "DRAGGING" && b.actions.cancel({
      shouldBlockNextClick: !0
    }), b.type === "PENDING" && b.actions.abort();
  }, [c]), p = Z(function() {
    const g = {
      capture: !0,
      passive: !1
    }, v = k1({
      cancel: f,
      completed: c,
      getPhase: () => r.current,
      setPhase: (E) => {
        r.current = E;
      }
    });
    o.current = Rt(window, v, g);
  }, [f, c]), h = Z(function(g, v) {
    r.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? S(!1, "Expected to move from IDLE to PENDING drag") : S(!1)), r.current = {
      type: "PENDING",
      point: v,
      actions: g
    }, p();
  }, [p]);
  bt(function() {
    return l(), function() {
      o.current();
    };
  }, [l]);
}
function Y1() {
}
const K1 = {
  [L1]: !0,
  [B1]: !0,
  [F1]: !0,
  [M1]: !0
};
function X1(t, r) {
  function o() {
    r(), t.cancel();
  }
  function s() {
    r(), t.drop();
  }
  return [{
    eventName: "keydown",
    fn: (a) => {
      if (a.keyCode === Ia) {
        a.preventDefault(), o();
        return;
      }
      if (a.keyCode === cd) {
        a.preventDefault(), s();
        return;
      }
      if (a.keyCode === G1) {
        a.preventDefault(), t.moveDown();
        return;
      }
      if (a.keyCode === W1) {
        a.preventDefault(), t.moveUp();
        return;
      }
      if (a.keyCode === V1) {
        a.preventDefault(), t.moveRight();
        return;
      }
      if (a.keyCode === $1) {
        a.preventDefault(), t.moveLeft();
        return;
      }
      if (K1[a.keyCode]) {
        a.preventDefault();
        return;
      }
      fd(a);
    }
  }, {
    eventName: "mousedown",
    fn: o
  }, {
    eventName: "mouseup",
    fn: o
  }, {
    eventName: "click",
    fn: o
  }, {
    eventName: "touchstart",
    fn: o
  }, {
    eventName: "resize",
    fn: o
  }, {
    eventName: "wheel",
    fn: o,
    options: {
      passive: !0
    }
  }, {
    eventName: Qo,
    fn: o
  }];
}
function J1(t) {
  const r = V.useRef(Y1), o = ge(() => ({
    eventName: "keydown",
    fn: function(l) {
      if (l.defaultPrevented || l.keyCode !== cd)
        return;
      const c = t.findClosestDraggableId(l);
      if (!c)
        return;
      const f = t.tryGetLock(c, b, {
        sourceEvent: l
      });
      if (!f)
        return;
      l.preventDefault();
      let p = !0;
      const h = f.snapLift();
      r.current();
      function b() {
        p || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot stop capturing a keyboard drag when not capturing") : S(!1)), p = !1, r.current(), s();
      }
      r.current = Rt(window, X1(h, b), {
        capture: !0,
        passive: !1
      });
    }
  }), [t]), s = Z(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = Rt(window, [o], l);
  }, [o]);
  bt(function() {
    return s(), function() {
      r.current();
    };
  }, [s]);
}
const Ts = {
  type: "IDLE"
}, Z1 = 120, Q1 = 0.15;
function j1(t) {
  let {
    cancel: r,
    getPhase: o
  } = t;
  return [{
    eventName: "orientationchange",
    fn: r
  }, {
    eventName: "resize",
    fn: r
  }, {
    eventName: "contextmenu",
    fn: (s) => {
      s.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (s) => {
      if (o().type !== "DRAGGING") {
        r();
        return;
      }
      s.keyCode === Ia && s.preventDefault(), r();
    }
  }, {
    eventName: Qo,
    fn: r
  }];
}
function ex(t) {
  let {
    cancel: r,
    completed: o,
    getPhase: s
  } = t;
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (a) => {
      const l = s();
      if (l.type !== "DRAGGING") {
        r();
        return;
      }
      l.hasMoved = !0;
      const {
        clientX: c,
        clientY: f
      } = a.touches[0], p = {
        x: c,
        y: f
      };
      a.preventDefault(), l.actions.move(p);
    }
  }, {
    eventName: "touchend",
    fn: (a) => {
      const l = s();
      if (l.type !== "DRAGGING") {
        r();
        return;
      }
      a.preventDefault(), l.actions.drop({
        shouldBlockNextClick: !0
      }), o();
    }
  }, {
    eventName: "touchcancel",
    fn: (a) => {
      if (s().type !== "DRAGGING") {
        r();
        return;
      }
      a.preventDefault(), r();
    }
  }, {
    eventName: "touchforcechange",
    fn: (a) => {
      const l = s();
      l.type === "IDLE" && (process.env.NODE_ENV, S(!1));
      const c = a.touches[0];
      if (!c || !(c.force >= Q1))
        return;
      const p = l.actions.shouldRespectForcePress();
      if (l.type === "PENDING") {
        p && r();
        return;
      }
      if (p) {
        if (l.hasMoved) {
          a.preventDefault();
          return;
        }
        r();
        return;
      }
      a.preventDefault();
    }
  }, {
    eventName: Qo,
    fn: r
  }];
}
function tx(t) {
  const r = V.useRef(Ts), o = V.useRef(hn), s = Z(function() {
    return r.current;
  }, []), a = Z(function(E) {
    r.current = E;
  }, []), l = ge(() => ({
    eventName: "touchstart",
    fn: function(E) {
      if (E.defaultPrevented)
        return;
      const D = t.findClosestDraggableId(E);
      if (!D)
        return;
      const O = t.tryGetLock(D, f, {
        sourceEvent: E
      });
      if (!O)
        return;
      const w = E.touches[0], {
        clientX: M,
        clientY: F
      } = w, R = {
        x: M,
        y: F
      };
      o.current(), g(O, R);
    }
  }), [t]), c = Z(function() {
    const E = {
      capture: !0,
      passive: !1
    };
    o.current = Rt(window, [l], E);
  }, [l]), f = Z(() => {
    const v = r.current;
    v.type !== "IDLE" && (v.type === "PENDING" && clearTimeout(v.longPressTimerId), a(Ts), o.current(), c());
  }, [c, a]), p = Z(() => {
    const v = r.current;
    f(), v.type === "DRAGGING" && v.actions.cancel({
      shouldBlockNextClick: !0
    }), v.type === "PENDING" && v.actions.abort();
  }, [f]), h = Z(function() {
    const E = {
      capture: !0,
      passive: !1
    }, D = {
      cancel: p,
      completed: f,
      getPhase: s
    }, O = Rt(window, ex(D), E), w = Rt(window, j1(D), E);
    o.current = function() {
      O(), w();
    };
  }, [p, s, f]), b = Z(function() {
    const E = s();
    E.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? S(!1, `Cannot start dragging from phase ${E.type}`) : S(!1));
    const D = E.actions.fluidLift(E.point);
    a({
      type: "DRAGGING",
      actions: D,
      hasMoved: !1
    });
  }, [s, a]), g = Z(function(E, D) {
    s().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? S(!1, "Expected to move from IDLE to PENDING drag") : S(!1));
    const O = setTimeout(b, Z1);
    a({
      type: "PENDING",
      point: D,
      actions: E,
      longPressTimerId: O
    }), h();
  }, [h, s, a, b]);
  bt(function() {
    return c(), function() {
      o.current();
      const D = s();
      D.type === "PENDING" && (clearTimeout(D.longPressTimerId), a(Ts));
    };
  }, [s, c, a]), bt(function() {
    return Rt(window, [{
      eventName: "touchmove",
      fn: () => {
      },
      options: {
        capture: !1,
        passive: !1
      }
    }]);
  }, []);
}
function nx(t) {
  Ca(() => {
    const r = Aa(t);
    Hr(() => {
      r.current.length !== t.length && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot change the amount of sensor hooks after mounting") : S(!1));
    });
  });
}
const rx = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function pd(t, r) {
  if (r == null)
    return !1;
  if (rx.includes(r.tagName.toLowerCase()))
    return !0;
  const s = r.getAttribute("contenteditable");
  return s === "true" || s === "" ? !0 : r === t ? !1 : pd(t, r.parentElement);
}
function ox(t, r) {
  const o = r.target;
  return Ur(o) ? pd(t, o) : !1;
}
var ix = (t) => Gt(t.getBoundingClientRect()).center;
function sx(t) {
  return t instanceof ad(t).Element;
}
const ax = (() => {
  const t = "matches";
  return typeof document > "u" ? t : [t, "msMatchesSelector", "webkitMatchesSelector"].find((s) => s in Element.prototype) || t;
})();
function gd(t, r) {
  return t == null ? null : t[ax](r) ? t : gd(t.parentElement, r);
}
function lx(t, r) {
  return t.closest ? t.closest(r) : gd(t, r);
}
function ux(t) {
  return `[${Qn.contextId}="${t}"]`;
}
function cx(t, r) {
  const o = r.target;
  if (!sx(o))
    return process.env.NODE_ENV !== "production" && Se("event.target must be a Element"), null;
  const s = ux(t), a = lx(o, s);
  return a ? Ur(a) ? a : (process.env.NODE_ENV !== "production" && Se("drag handle must be a HTMLElement"), null) : null;
}
function fx(t, r) {
  const o = cx(t, r);
  return o ? o.getAttribute(Qn.draggableId) : null;
}
function dx(t, r) {
  const o = `[${Js.contextId}="${t}"]`, a = sd(document, o).find((l) => l.getAttribute(Js.id) === r);
  return a ? Ur(a) ? a : (process.env.NODE_ENV !== "production" && Se("Draggable element is not a HTMLElement"), null) : null;
}
function px(t) {
  t.preventDefault();
}
function Lo(t) {
  let {
    expected: r,
    phase: o,
    isLockActive: s,
    shouldWarn: a
  } = t;
  return s() ? r !== o ? (a && process.env.NODE_ENV !== "production" && Se(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${r}
        You called an action from outdated phase: ${o}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (a && process.env.NODE_ENV !== "production" && Se(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function hd(t) {
  let {
    lockAPI: r,
    store: o,
    registry: s,
    draggableId: a
  } = t;
  if (r.isClaimed())
    return !1;
  const l = s.draggable.findById(a);
  return l ? !(!l.options.isEnabled || !nd(o.getState(), a)) : (process.env.NODE_ENV !== "production" && Se(`Unable to find draggable with id: ${a}`), !1);
}
function gx(t) {
  let {
    lockAPI: r,
    contextId: o,
    store: s,
    registry: a,
    draggableId: l,
    forceSensorStop: c,
    sourceEvent: f
  } = t;
  if (!hd({
    lockAPI: r,
    store: s,
    registry: a,
    draggableId: l
  }))
    return null;
  const h = a.draggable.getById(l), b = dx(o, h.descriptor.id);
  if (!b)
    return process.env.NODE_ENV !== "production" && Se(`Unable to find draggable element with id: ${l}`), null;
  if (f && !h.options.canDragInteractiveElements && ox(b, f))
    return null;
  const g = r.claim(c || hn);
  let v = "PRE_DRAG";
  function E() {
    return h.options.shouldRespectForcePress;
  }
  function D() {
    return r.isActive(g);
  }
  function O($, G) {
    Lo({
      expected: $,
      phase: v,
      isLockActive: D,
      shouldWarn: !0
    }) && s.dispatch(G());
  }
  const w = O.bind(null, "DRAGGING");
  function M($) {
    function G() {
      r.release(), v = "COMPLETED";
    }
    v !== "PRE_DRAG" && (G(), process.env.NODE_ENV !== "production" ? S(!1, `Cannot lift in phase ${v}`) : S(!1)), s.dispatch(q_($.liftActionArgs)), v = "DRAGGING";
    function z(U, q) {
      if (q === void 0 && (q = {
        shouldBlockNextClick: !1
      }), $.cleanup(), q.shouldBlockNextClick) {
        const ne = Rt(window, [{
          eventName: "click",
          fn: px,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(ne);
      }
      G(), s.dispatch(Kf({
        reason: U
      }));
    }
    return {
      isActive: () => Lo({
        expected: "DRAGGING",
        phase: v,
        isLockActive: D,
        shouldWarn: !1
      }),
      shouldRespectForcePress: E,
      drop: (U) => z("DROP", U),
      cancel: (U) => z("CANCEL", U),
      ...$.actions
    };
  }
  function F($) {
    const G = Or((U) => {
      w(() => Yf({
        client: U
      }));
    });
    return {
      ...M({
        liftActionArgs: {
          id: l,
          clientSelection: $,
          movementMode: "FLUID"
        },
        cleanup: () => G.cancel(),
        actions: {
          move: G
        }
      }),
      move: G
    };
  }
  function R() {
    const $ = {
      moveUp: () => w(j_),
      moveRight: () => w(tw),
      moveDown: () => w(ew),
      moveLeft: () => w(nw)
    };
    return M({
      liftActionArgs: {
        id: l,
        clientSelection: ix(b),
        movementMode: "SNAP"
      },
      cleanup: hn,
      actions: $
    });
  }
  function T() {
    Lo({
      expected: "PRE_DRAG",
      phase: v,
      isLockActive: D,
      shouldWarn: !0
    }) && r.release();
  }
  return {
    isActive: () => Lo({
      expected: "PRE_DRAG",
      phase: v,
      isLockActive: D,
      shouldWarn: !1
    }),
    shouldRespectForcePress: E,
    fluidLift: F,
    snapLift: R,
    abort: T
  };
}
const hx = [z1, J1, tx];
function vx(t) {
  let {
    contextId: r,
    store: o,
    registry: s,
    customSensors: a,
    enableDefaultSensors: l
  } = t;
  const c = [...l ? hx : [], ...a || []], f = V.useState(() => R1())[0], p = Z(function(M, F) {
    Fr(M) && !Fr(F) && f.tryAbandon();
  }, [f]);
  bt(function() {
    let M = o.getState();
    return o.subscribe(() => {
      const R = o.getState();
      p(M, R), M = R;
    });
  }, [f, o, p]), bt(() => f.tryAbandon, [f.tryAbandon]);
  const h = Z((w) => hd({
    lockAPI: f,
    registry: s,
    store: o,
    draggableId: w
  }), [f, s, o]), b = Z((w, M, F) => gx({
    lockAPI: f,
    registry: s,
    contextId: r,
    store: o,
    draggableId: w,
    forceSensorStop: M || null,
    sourceEvent: F && F.sourceEvent ? F.sourceEvent : null
  }), [r, f, s, o]), g = Z((w) => fx(r, w), [r]), v = Z((w) => {
    const M = s.draggable.findById(w);
    return M ? M.options : null;
  }, [s.draggable]), E = Z(function() {
    f.isClaimed() && (f.tryAbandon(), o.getState().phase !== "IDLE" && o.dispatch(ma()));
  }, [f, o]), D = Z(() => f.isClaimed(), [f]), O = ge(() => ({
    canGetLock: h,
    tryGetLock: b,
    findClosestDraggableId: g,
    findOptionsForDraggable: v,
    tryReleaseLock: E,
    isLockClaimed: D
  }), [h, b, g, v, E, D]);
  nx(c);
  for (let w = 0; w < c.length; w++)
    c[w](O);
}
const mx = (t) => ({
  onBeforeCapture: (r) => {
    const o = () => {
      t.onBeforeCapture && t.onBeforeCapture(r);
    };
    X.version.startsWith("16") || X.version.startsWith("17") ? o() : ta.flushSync(o);
  },
  onBeforeDragStart: t.onBeforeDragStart,
  onDragStart: t.onDragStart,
  onDragEnd: t.onDragEnd,
  onDragUpdate: t.onDragUpdate
}), bx = (t) => ({
  ...Lr,
  ...t.autoScrollerOptions,
  durationDampening: {
    ...Lr.durationDampening,
    ...t.autoScrollerOptions
  }
});
function xr(t) {
  return t.current || (process.env.NODE_ENV !== "production" ? S(!1, "Could not find store from lazy ref") : S(!1)), t.current;
}
function yx(t) {
  const {
    contextId: r,
    setCallbacks: o,
    sensors: s,
    nonce: a,
    dragHandleUsageInstructions: l
  } = t, c = V.useRef(null);
  N1();
  const f = Aa(t), p = Z(() => mx(f.current), [f]), h = Z(() => bx(f.current), [f]), b = y1(r), g = D1({
    contextId: r,
    text: l
  }), v = d1(r, a), E = Z((q) => {
    xr(c).dispatch(q);
  }, []), D = ge(() => ac({
    publishWhileDragging: z_,
    updateDroppableScroll: K_,
    updateDroppableIsEnabled: X_,
    updateDroppableIsCombineEnabled: J_,
    collectionStarting: Y_
  }, E), [E]), O = h1(), w = ge(() => Hw(O, D), [O, D]), M = ge(() => s1({
    scrollWindow: qw,
    scrollDroppable: w.scrollDroppable,
    getAutoScrollerOptions: h,
    ...ac({
      move: Yf
    }, E)
  }), [w.scrollDroppable, E, h]), F = p1(r), R = ge(() => Ww({
    announce: b,
    autoScroller: M,
    dimensionMarshal: w,
    focusMarshal: F,
    getResponders: p,
    styleMarshal: v
  }), [b, M, w, F, p, v]);
  process.env.NODE_ENV !== "production" && c.current && c.current !== R && process.env.NODE_ENV !== "production" && Se("unexpected store change"), c.current = R;
  const T = Z(() => {
    const q = xr(c);
    q.getState().phase !== "IDLE" && q.dispatch(ma());
  }, []), A = Z(() => {
    const q = xr(c).getState();
    return q.phase === "DROP_ANIMATING" ? !0 : q.phase === "IDLE" ? !1 : q.isDragging;
  }, []), $ = ge(() => ({
    isDragging: A,
    tryAbort: T
  }), [A, T]);
  o($);
  const G = Z((q) => nd(xr(c).getState(), q), []), z = Z(() => On(xr(c).getState()), []), U = ge(() => ({
    marshal: w,
    focus: F,
    contextId: r,
    canLift: G,
    isMovementAllowed: z,
    dragHandleUsageInstructionsId: g,
    registry: O
  }), [r, w, g, F, G, z, O]);
  return vx({
    contextId: r,
    store: R,
    registry: O,
    customSensors: s || null,
    enableDefaultSensors: t.enableDefaultSensors !== !1
  }), V.useEffect(() => T, [T]), X.createElement(Zo.Provider, {
    value: U
  }, X.createElement(v0, {
    context: Da,
    store: R
  }, t.children));
}
let Ex = 0;
function _x() {
  return ge(() => `${Ex++}`, []);
}
function wx() {
  return X.useId();
}
var xx = "useId" in X ? wx : _x;
function fS(t) {
  const r = xx(), o = t.dragHandleUsageInstructions || Wo.dragHandleUsageInstructions;
  return X.createElement(P0, null, (s) => X.createElement(yx, {
    nonce: t.nonce,
    contextId: r,
    setCallbacks: s,
    dragHandleUsageInstructions: o,
    enableDefaultSensors: t.enableDefaultSensors,
    sensors: t.sensors,
    onBeforeCapture: t.onBeforeCapture,
    onBeforeDragStart: t.onBeforeDragStart,
    onDragStart: t.onDragStart,
    onDragUpdate: t.onDragUpdate,
    onDragEnd: t.onDragEnd,
    autoScrollerOptions: t.autoScrollerOptions
  }, t.children));
}
const Qc = {
  dragging: 5e3,
  dropAnimating: 4500
}, Dx = (t, r) => r ? Ar.drop(r.duration) : t ? Ar.snap : Ar.fluid, Sx = (t, r) => {
  if (t)
    return r ? Br.opacity.drop : Br.opacity.combining;
}, Cx = (t) => t.forceShouldAnimate != null ? t.forceShouldAnimate : t.mode === "SNAP";
function Ax(t) {
  const o = t.dimension.client, {
    offset: s,
    combineWith: a,
    dropping: l
  } = t, c = !!a, f = Cx(t), p = !!l, h = p ? Ks.drop(s, c) : Ks.moveTo(s);
  return {
    position: "fixed",
    top: o.marginBox.top,
    left: o.marginBox.left,
    boxSizing: "border-box",
    width: o.borderBox.width,
    height: o.borderBox.height,
    transition: Dx(f, l),
    transform: h,
    opacity: Sx(c, p),
    zIndex: p ? Qc.dropAnimating : Qc.dragging,
    pointerEvents: "none"
  };
}
function Ix(t) {
  return {
    transform: Ks.moveTo(t.offset),
    transition: t.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Ox(t) {
  return t.type === "DRAGGING" ? Ax(t) : Ix(t);
}
function Nx(t, r, o) {
  o === void 0 && (o = Ge);
  const s = window.getComputedStyle(r), a = r.getBoundingClientRect(), l = wf(a, s), c = Ho(l, o), f = {
    client: l,
    tagName: r.tagName.toLowerCase(),
    display: s.display
  }, p = {
    x: l.marginBox.width,
    y: l.marginBox.height
  };
  return {
    descriptor: t,
    placeholder: f,
    displaceBy: p,
    client: l,
    page: c
  };
}
function Rx(t) {
  const r = Sa("draggable"), {
    descriptor: o,
    registry: s,
    getDraggableRef: a,
    canDragInteractiveElements: l,
    shouldRespectForcePress: c,
    isEnabled: f
  } = t, p = ge(() => ({
    canDragInteractiveElements: l,
    shouldRespectForcePress: c,
    isEnabled: f
  }), [l, f, c]), h = Z((E) => {
    const D = a();
    return D || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot get dimension when no ref is set") : S(!1)), Nx(o, D, E);
  }, [o, a]), b = ge(() => ({
    uniqueId: r,
    descriptor: o,
    options: p,
    getDimension: h
  }), [o, h, p, r]), g = V.useRef(b), v = V.useRef(!0);
  bt(() => (s.draggable.register(g.current), () => s.draggable.unregister(g.current)), [s.draggable]), bt(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    const E = g.current;
    g.current = b, s.draggable.update(b, E);
  }, [b, s.draggable]);
}
var Oa = X.createContext(null);
function vd(t) {
  t && Ur(t) || (process.env.NODE_ENV !== "production" ? S(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : S(!1));
}
function Px(t, r, o) {
  Hr(() => {
    function s(l) {
      return `Draggable[id: ${l}]: `;
    }
    const a = t.draggableId;
    a || (process.env.NODE_ENV !== "production" ? S(!1, "Draggable requires a draggableId") : S(!1)), typeof a != "string" && (process.env.NODE_ENV !== "production" ? S(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof a}] (value: ${a})`) : S(!1)), Number.isInteger(t.index) || (process.env.NODE_ENV !== "production" ? S(!1, `${s(a)} requires an integer index prop`) : S(!1)), t.mapped.type !== "DRAGGING" && (vd(o()), t.isEnabled && (ld(r, a) || (process.env.NODE_ENV !== "production" ? S(!1, `${s(a)} Unable to find drag handle`) : S(!1))));
  });
}
function Tx(t) {
  Ca(() => {
    const r = V.useRef(t);
    Hr(() => {
      t !== r.current && (process.env.NODE_ENV !== "production" ? S(!1, "Draggable isClone prop value changed during component life") : S(!1));
    }, [t]);
  });
}
function zo(t) {
  const r = V.useContext(t);
  return r || (process.env.NODE_ENV !== "production" ? S(!1, "Could not find required context") : S(!1)), r;
}
function Bx(t) {
  t.preventDefault();
}
const Lx = (t) => {
  const r = V.useRef(null), o = Z(function($) {
    $ === void 0 && ($ = null), r.current = $;
  }, []), s = Z(() => r.current, []), {
    contextId: a,
    dragHandleUsageInstructionsId: l,
    registry: c
  } = zo(Zo), {
    type: f,
    droppableId: p
  } = zo(Oa), h = ge(() => ({
    id: t.draggableId,
    index: t.index,
    type: f,
    droppableId: p
  }), [t.draggableId, t.index, f, p]), {
    children: b,
    draggableId: g,
    isEnabled: v,
    shouldRespectForcePress: E,
    canDragInteractiveElements: D,
    isClone: O,
    mapped: w,
    dropAnimationFinished: M
  } = t;
  if (Px(t, a, s), Tx(O), !O) {
    const $ = ge(() => ({
      descriptor: h,
      registry: c,
      getDraggableRef: s,
      canDragInteractiveElements: D,
      shouldRespectForcePress: E,
      isEnabled: v
    }), [h, c, s, D, E, v]);
    Rx($);
  }
  const F = ge(() => v ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": l,
    "data-rfd-drag-handle-draggable-id": g,
    "data-rfd-drag-handle-context-id": a,
    draggable: !1,
    onDragStart: Bx
  } : null, [a, l, g, v]), R = Z(($) => {
    w.type === "DRAGGING" && w.dropping && $.propertyName === "transform" && (X.version.startsWith("16") || X.version.startsWith("17") ? M() : ta.flushSync(M));
  }, [M, w]), T = ge(() => {
    const $ = Ox(w), G = w.type === "DRAGGING" && w.dropping ? R : void 0;
    return {
      innerRef: o,
      draggableProps: {
        "data-rfd-draggable-context-id": a,
        "data-rfd-draggable-id": g,
        style: $,
        onTransitionEnd: G
      },
      dragHandleProps: F
    };
  }, [a, F, g, w, R, o]), A = ge(() => ({
    draggableId: h.id,
    type: h.type,
    source: {
      index: h.index,
      droppableId: h.droppableId
    }
  }), [h.droppableId, h.id, h.index, h.type]);
  return X.createElement(X.Fragment, null, b(T, w.snapshot, A));
};
var Mx = Lx, md = (t, r) => t === r, bd = (t) => {
  const {
    combine: r,
    destination: o
  } = t;
  return o ? o.droppableId : r ? r.droppableId : null;
};
const Fx = (t) => t.combine ? t.combine.draggableId : null, $x = (t) => t.at && t.at.type === "COMBINE" ? t.at.combine.draggableId : null;
function Wx() {
  const t = Ve((a, l) => ({
    x: a,
    y: l
  })), r = Ve(function(a, l, c, f, p) {
    return c === void 0 && (c = null), f === void 0 && (f = null), p === void 0 && (p = null), {
      isDragging: !0,
      isClone: l,
      isDropAnimating: !!p,
      dropAnimation: p,
      mode: a,
      draggingOver: c,
      combineWith: f,
      combineTargetFor: null
    };
  }), o = Ve(function(a, l, c, f, p, h, b) {
    return p === void 0 && (p = null), h === void 0 && (h = null), b === void 0 && (b = null), {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: p,
        combineWith: h,
        mode: l,
        offset: a,
        dimension: c,
        forceShouldAnimate: b,
        snapshot: r(l, f, p, h, null)
      }
    };
  });
  return (a, l) => {
    if (Fr(a)) {
      if (a.critical.draggable.id !== l.draggableId)
        return null;
      const c = a.current.client.offset, f = a.dimensions.draggables[l.draggableId], p = mt(a.impact), h = $x(a.impact), b = a.forceShouldAnimate;
      return o(t(c.x, c.y), a.movementMode, f, l.isClone, p, h, b);
    }
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      if (c.result.draggableId !== l.draggableId)
        return null;
      const f = l.isClone, p = a.dimensions.draggables[l.draggableId], h = c.result, b = h.mode, g = bd(h), v = Fx(h), D = {
        duration: a.dropDuration,
        curve: ya.drop,
        moveTo: a.newHomeClientOffset,
        opacity: v ? Br.opacity.drop : null,
        scale: v ? Br.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: a.newHomeClientOffset,
          dimension: p,
          dropping: D,
          draggingOver: g,
          combineWith: v,
          mode: b,
          forceShouldAnimate: null,
          snapshot: r(b, f, g, v, D)
        }
      };
    }
    return null;
  };
}
function yd(t) {
  return t === void 0 && (t = null), {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: t,
    combineWith: null
  };
}
const Vx = {
  mapped: {
    type: "SECONDARY",
    offset: Ge,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: yd(null)
  }
};
function Gx() {
  const t = Ve((c, f) => ({
    x: c,
    y: f
  })), r = Ve(yd), o = Ve(function(c, f, p) {
    return f === void 0 && (f = null), {
      mapped: {
        type: "SECONDARY",
        offset: c,
        combineTargetFor: f,
        shouldAnimateDisplacement: p,
        snapshot: r(f)
      }
    };
  }), s = (c) => c ? o(Ge, c, !0) : null, a = (c, f, p, h) => {
    const b = p.displaced.visible[c], g = !!(h.inVirtualList && h.effected[c]), v = Ko(p), E = v && v.draggableId === c ? f : null;
    if (!b) {
      if (!g)
        return s(E);
      if (p.displaced.invisible[c])
        return null;
      const w = jn(h.displacedBy.point), M = t(w.x, w.y);
      return o(M, E, !0);
    }
    if (g)
      return s(E);
    const D = p.displacedBy.point, O = t(D.x, D.y);
    return o(O, E, b.shouldAnimate);
  };
  return (c, f) => {
    if (Fr(c))
      return c.critical.draggable.id === f.draggableId ? null : a(f.draggableId, c.critical.draggable.id, c.impact, c.afterCritical);
    if (c.phase === "DROP_ANIMATING") {
      const p = c.completed;
      return p.result.draggableId === f.draggableId ? null : a(f.draggableId, p.result.draggableId, p.impact, p.afterCritical);
    }
    return null;
  };
}
const Ux = () => {
  const t = Wx(), r = Gx();
  return (s, a) => t(s, a) || r(s, a) || Vx;
}, Hx = {
  dropAnimationFinished: Xf
}, qx = Ef(Ux, Hx, null, {
  context: Da,
  areStatePropsEqual: md
})(Mx);
var kx = qx;
function Ed(t) {
  return zo(Oa).isUsingCloneFor === t.draggableId && !t.isClone ? null : X.createElement(kx, t);
}
function dS(t) {
  const r = typeof t.isDragDisabled == "boolean" ? !t.isDragDisabled : !0, o = !!t.disableInteractiveElementBlocking, s = !!t.shouldRespectForcePress;
  return X.createElement(Ed, Xn({}, t, {
    isClone: !1,
    isEnabled: r,
    canDragInteractiveElements: o,
    shouldRespectForcePress: s
  }));
}
const Na = (t) => (r) => t === r, zx = Na("scroll"), Yx = Na("auto"), Kx = Na("visible"), jc = (t, r) => r(t.overflowX) || r(t.overflowY), Xx = (t, r) => r(t.overflowX) && r(t.overflowY), _d = (t) => {
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return jc(o, zx) || jc(o, Yx);
}, Jx = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const t = Mr(), r = document.documentElement;
  if (r || (process.env.NODE_ENV, S(!1)), !_d(t))
    return !1;
  const o = window.getComputedStyle(r), s = {
    overflowX: o.overflowX,
    overflowY: o.overflowY
  };
  return Xx(s, Kx) || process.env.NODE_ENV !== "production" && Se(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, wd = (t) => t == null ? null : t === document.body ? Jx() ? t : null : t === document.documentElement ? null : _d(t) ? t : wd(t.parentElement);
var xd = wd, Zx = (t) => {
  !t || !xd(t.parentElement) || process.env.NODE_ENV !== "production" && Se(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Zs = (t) => ({
  x: t.scrollLeft,
  y: t.scrollTop
});
const Dd = (t) => t ? window.getComputedStyle(t).position === "fixed" ? !0 : Dd(t.parentElement) : !1;
var Qx = (t) => {
  const r = xd(t), o = Dd(t);
  return {
    closestScrollable: r,
    isFixedOnPage: o
  };
}, jx = (t) => {
  let {
    descriptor: r,
    isEnabled: o,
    isCombineEnabled: s,
    isFixedOnPage: a,
    direction: l,
    client: c,
    page: f,
    closest: p
  } = t;
  const h = (() => {
    if (!p)
      return null;
    const {
      scrollSize: E,
      client: D
    } = p, O = jf({
      scrollHeight: E.scrollHeight,
      scrollWidth: E.scrollWidth,
      height: D.paddingBox.height,
      width: D.paddingBox.width
    });
    return {
      pageMarginBox: p.page.marginBox,
      frameClient: D,
      scrollSize: E,
      shouldClipSubject: p.shouldClipSubject,
      scroll: {
        initial: p.scroll,
        current: p.scroll,
        max: O,
        diff: {
          value: Ge,
          displacement: Ge
        }
      }
    };
  })(), b = l === "vertical" ? da : Pf, g = Jn({
    page: f,
    withPlaceholder: null,
    axis: b,
    frame: h
  });
  return {
    descriptor: r,
    isCombineEnabled: s,
    isFixedOnPage: a,
    axis: b,
    isEnabled: o,
    client: c,
    page: f,
    frame: h,
    subject: g
  };
};
const eD = (t, r) => {
  const o = xf(t);
  if (!r || t !== r)
    return o;
  const s = o.paddingBox.top - r.scrollTop, a = o.paddingBox.left - r.scrollLeft, l = s + r.scrollHeight, c = a + r.scrollWidth, p = la({
    top: s,
    right: c,
    bottom: l,
    left: a
  }, o.border);
  return ua({
    borderBox: p,
    margin: o.margin,
    border: o.border,
    padding: o.padding
  });
};
var tD = (t) => {
  let {
    ref: r,
    descriptor: o,
    env: s,
    windowScroll: a,
    direction: l,
    isDropDisabled: c,
    isCombineEnabled: f,
    shouldClipSubject: p
  } = t;
  const h = s.closestScrollable, b = eD(r, h), g = Ho(b, a), v = (() => {
    if (!h)
      return null;
    const D = xf(h), O = {
      scrollHeight: h.scrollHeight,
      scrollWidth: h.scrollWidth
    };
    return {
      client: D,
      page: Ho(D, a),
      scroll: Zs(h),
      scrollSize: O,
      shouldClipSubject: p
    };
  })();
  return jx({
    descriptor: o,
    isEnabled: !c,
    isCombineEnabled: f,
    isFixedOnPage: s.isFixedOnPage,
    direction: l,
    client: b,
    page: g,
    closest: v
  });
};
const nD = {
  passive: !1
}, rD = {
  passive: !0
};
var ef = (t) => t.shouldPublishImmediately ? nD : rD;
const Mo = (t) => t && t.env.closestScrollable || null;
function oD(t) {
  const r = V.useRef(null), o = zo(Zo), s = Sa("droppable"), {
    registry: a,
    marshal: l
  } = o, c = Aa(t), f = ge(() => ({
    id: t.droppableId,
    type: t.type,
    mode: t.mode
  }), [t.droppableId, t.mode, t.type]), p = V.useRef(f), h = ge(() => Ve((T, A) => {
    r.current || (process.env.NODE_ENV !== "production" ? S(!1, "Can only update scroll when dragging") : S(!1));
    const $ = {
      x: T,
      y: A
    };
    l.updateDroppableScroll(f.id, $);
  }), [f.id, l]), b = Z(() => {
    const T = r.current;
    return !T || !T.env.closestScrollable ? Ge : Zs(T.env.closestScrollable);
  }, []), g = Z(() => {
    const T = b();
    h(T.x, T.y);
  }, [b, h]), v = ge(() => Or(g), [g]), E = Z(() => {
    const T = r.current, A = Mo(T);
    if (T && A || (process.env.NODE_ENV !== "production" ? S(!1, "Could not find scroll options while scrolling") : S(!1)), T.scrollOptions.shouldPublishImmediately) {
      g();
      return;
    }
    v();
  }, [v, g]), D = Z((T, A) => {
    r.current && (process.env.NODE_ENV !== "production" ? S(!1, "Cannot collect a droppable while a drag is occurring") : S(!1));
    const $ = c.current, G = $.getDroppableRef();
    G || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot collect without a droppable ref") : S(!1));
    const z = Qx(G), U = {
      ref: G,
      descriptor: f,
      env: z,
      scrollOptions: A
    };
    r.current = U;
    const q = tD({
      ref: G,
      descriptor: f,
      env: z,
      windowScroll: T,
      direction: $.direction,
      isDropDisabled: $.isDropDisabled,
      isCombineEnabled: $.isCombineEnabled,
      shouldClipSubject: !$.ignoreContainerClipping
    }), ne = z.closestScrollable;
    return ne && (ne.setAttribute(Yc.contextId, o.contextId), ne.addEventListener("scroll", E, ef(U.scrollOptions)), process.env.NODE_ENV !== "production" && Zx(ne)), q;
  }, [o.contextId, f, E, c]), O = Z(() => {
    const T = r.current, A = Mo(T);
    return T && A || (process.env.NODE_ENV !== "production" ? S(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : S(!1)), Zs(A);
  }, []), w = Z(() => {
    const T = r.current;
    T || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot stop drag when no active drag") : S(!1));
    const A = Mo(T);
    r.current = null, A && (v.cancel(), A.removeAttribute(Yc.contextId), A.removeEventListener("scroll", E, ef(T.scrollOptions)));
  }, [E, v]), M = Z((T) => {
    const A = r.current;
    A || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot scroll when there is no drag") : S(!1));
    const $ = Mo(A);
    $ || (process.env.NODE_ENV !== "production" ? S(!1, "Cannot scroll a droppable with no closest scrollable") : S(!1)), $.scrollTop += T.y, $.scrollLeft += T.x;
  }, []), F = ge(() => ({
    getDimensionAndWatchScroll: D,
    getScrollWhileDragging: O,
    dragStopped: w,
    scroll: M
  }), [w, D, O, M]), R = ge(() => ({
    uniqueId: s,
    descriptor: f,
    callbacks: F
  }), [F, f, s]);
  bt(() => (p.current = R.descriptor, a.droppable.register(R), () => {
    r.current && (process.env.NODE_ENV !== "production" && Se("Unsupported: changing the droppableId or type of a Droppable during a drag"), w()), a.droppable.unregister(R);
  }), [F, f, w, R, l, a.droppable]), bt(() => {
    r.current && l.updateDroppableIsEnabled(p.current.id, !t.isDropDisabled);
  }, [t.isDropDisabled, l]), bt(() => {
    r.current && l.updateDroppableIsCombineEnabled(p.current.id, t.isCombineEnabled);
  }, [t.isCombineEnabled, l]);
}
function Bs() {
}
const tf = {
  width: 0,
  height: 0,
  margin: W0
}, iD = (t) => {
  let {
    isAnimatingOpenOnMount: r,
    placeholder: o,
    animate: s
  } = t;
  return r || s === "close" ? tf : {
    height: o.client.borderBox.height,
    width: o.client.borderBox.width,
    margin: o.client.margin
  };
}, sD = (t) => {
  let {
    isAnimatingOpenOnMount: r,
    placeholder: o,
    animate: s
  } = t;
  const a = iD({
    isAnimatingOpenOnMount: r,
    placeholder: o,
    animate: s
  });
  return {
    display: o.display,
    boxSizing: "border-box",
    width: a.width,
    height: a.height,
    marginTop: a.margin.top,
    marginRight: a.margin.right,
    marginBottom: a.margin.bottom,
    marginLeft: a.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: s !== "none" ? Ar.placeholder : null
  };
}, aD = (t) => {
  const r = V.useRef(null), o = Z(() => {
    r.current && (clearTimeout(r.current), r.current = null);
  }, []), {
    animate: s,
    onTransitionEnd: a,
    onClose: l,
    contextId: c
  } = t, [f, p] = V.useState(t.animate === "open");
  V.useEffect(() => f ? s !== "open" ? (o(), p(!1), Bs) : r.current ? Bs : (r.current = setTimeout(() => {
    r.current = null, p(!1);
  }), o) : Bs, [s, f, o]);
  const h = Z((g) => {
    g.propertyName === "height" && (a(), s === "close" && l());
  }, [s, l, a]), b = sD({
    isAnimatingOpenOnMount: f,
    animate: t.animate,
    placeholder: t.placeholder
  });
  return X.createElement(t.placeholder.tagName, {
    style: b,
    "data-rfd-placeholder-context-id": c,
    onTransitionEnd: h,
    ref: t.innerRef
  });
};
var lD = X.memo(aD);
function Ls(t) {
  return typeof t == "boolean";
}
function Ms(t, r) {
  r.forEach((o) => o(t));
}
const uD = [function(r) {
  let {
    props: o
  } = r;
  o.droppableId || (process.env.NODE_ENV !== "production" ? S(!1, "A Droppable requires a droppableId prop") : S(!1)), typeof o.droppableId != "string" && (process.env.NODE_ENV !== "production" ? S(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof o.droppableId}]`) : S(!1));
}, function(r) {
  let {
    props: o
  } = r;
  Ls(o.isDropDisabled) || (process.env.NODE_ENV !== "production" ? S(!1, "isDropDisabled must be a boolean") : S(!1)), Ls(o.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? S(!1, "isCombineEnabled must be a boolean") : S(!1)), Ls(o.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? S(!1, "ignoreContainerClipping must be a boolean") : S(!1));
}, function(r) {
  let {
    getDroppableRef: o
  } = r;
  vd(o());
}], cD = [function(r) {
  let {
    props: o,
    getPlaceholderRef: s
  } = r;
  !o.placeholder || s() || process.env.NODE_ENV !== "production" && Se(`
      Droppable setup issue [droppableId: "${o.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], fD = [function(r) {
  let {
    props: o
  } = r;
  o.renderClone || (process.env.NODE_ENV !== "production" ? S(!1, "Must provide a clone render function (renderClone) for virtual lists") : S(!1));
}, function(r) {
  let {
    getPlaceholderRef: o
  } = r;
  o() && (process.env.NODE_ENV !== "production" ? S(!1, "Expected virtual list to not have a placeholder") : S(!1));
}];
function dD(t) {
  Hr(() => {
    Ms(t, uD), t.props.mode === "standard" && Ms(t, cD), t.props.mode === "virtual" && Ms(t, fD);
  });
}
class pD extends X.PureComponent {
  constructor() {
    super(...arguments), this.state = {
      isVisible: !!this.props.on,
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    }, this.onClose = () => {
      this.state.animate === "close" && this.setState({
        isVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(r, o) {
    return r.shouldAnimate ? r.on ? {
      isVisible: !0,
      data: r.on,
      animate: "open"
    } : o.isVisible ? {
      isVisible: !0,
      data: o.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: !!r.on,
      data: r.on,
      animate: "none"
    };
  }
  render() {
    if (!this.state.isVisible)
      return null;
    const r = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(r);
  }
}
const gD = (t) => {
  const r = V.useContext(Zo);
  r || (process.env.NODE_ENV !== "production" ? S(!1, "Could not find app context") : S(!1));
  const {
    contextId: o,
    isMovementAllowed: s
  } = r, a = V.useRef(null), l = V.useRef(null), {
    children: c,
    droppableId: f,
    type: p,
    mode: h,
    direction: b,
    ignoreContainerClipping: g,
    isDropDisabled: v,
    isCombineEnabled: E,
    snapshot: D,
    useClone: O,
    updateViewportMaxScroll: w,
    getContainerForClone: M
  } = t, F = Z(() => a.current, []), R = Z(function(Q) {
    Q === void 0 && (Q = null), a.current = Q;
  }, []), T = Z(() => l.current, []), A = Z(function(Q) {
    Q === void 0 && (Q = null), l.current = Q;
  }, []);
  dD({
    props: t,
    getDroppableRef: F,
    getPlaceholderRef: T
  });
  const $ = Z(() => {
    s() && w({
      maxScroll: td()
    });
  }, [s, w]);
  oD({
    droppableId: f,
    type: p,
    mode: h,
    direction: b,
    isDropDisabled: v,
    isCombineEnabled: E,
    ignoreContainerClipping: g,
    getDroppableRef: F
  });
  const G = ge(() => X.createElement(pD, {
    on: t.placeholder,
    shouldAnimate: t.shouldAnimatePlaceholder
  }, (Q) => {
    let {
      onClose: ue,
      data: ve,
      animate: Ce
    } = Q;
    return X.createElement(lD, {
      placeholder: ve,
      onClose: ue,
      innerRef: A,
      animate: Ce,
      contextId: o,
      onTransitionEnd: $
    });
  }), [o, $, t.placeholder, t.shouldAnimatePlaceholder, A]), z = ge(() => ({
    innerRef: R,
    placeholder: G,
    droppableProps: {
      "data-rfd-droppable-id": f,
      "data-rfd-droppable-context-id": o
    }
  }), [o, f, G, R]), U = O ? O.dragging.draggableId : null, q = ge(() => ({
    droppableId: f,
    type: p,
    isUsingCloneFor: U
  }), [f, U, p]);
  function ne() {
    if (!O)
      return null;
    const {
      dragging: Q,
      render: ue
    } = O, ve = X.createElement(Ed, {
      draggableId: Q.draggableId,
      index: Q.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (Ce, Be) => ue(Ce, Be, Q));
    return vE.createPortal(ve, M());
  }
  return X.createElement(Oa.Provider, {
    value: q
  }, c(z, D), ne());
};
var hD = gD;
function vD() {
  return document.body || (process.env.NODE_ENV !== "production" ? S(!1, "document.body is not ready") : S(!1)), document.body;
}
const nf = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: vD
}, Sd = (t) => {
  let r = {
    ...t
  }, o;
  for (o in nf)
    t[o] === void 0 && (r = {
      ...r,
      [o]: nf[o]
    });
  return r;
}, Fs = (t, r) => t === r.droppable.type, rf = (t, r) => r.draggables[t.draggable.id], mD = () => {
  const t = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, r = {
    ...t,
    shouldAnimatePlaceholder: !1
  }, o = Ve((l) => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  })), s = Ve((l, c, f, p, h, b) => {
    const g = h.descriptor.id;
    if (h.descriptor.droppableId === l) {
      const D = b ? {
        render: b,
        dragging: o(h.descriptor)
      } : null, O = {
        isDraggingOver: f,
        draggingOverWith: f ? g : null,
        draggingFromThisWith: g,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: h.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: O,
        useClone: D
      };
    }
    if (!c)
      return r;
    if (!p)
      return t;
    const E = {
      isDraggingOver: f,
      draggingOverWith: g,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: h.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: E,
      useClone: null
    };
  });
  return (l, c) => {
    const f = Sd(c), p = f.droppableId, h = f.type, b = !f.isDropDisabled, g = f.renderClone;
    if (Fr(l)) {
      const v = l.critical;
      if (!Fs(h, v))
        return r;
      const E = rf(v, l.dimensions), D = mt(l.impact) === p;
      return s(p, b, D, D, E, g);
    }
    if (l.phase === "DROP_ANIMATING") {
      const v = l.completed;
      if (!Fs(h, v.critical))
        return r;
      const E = rf(v.critical, l.dimensions);
      return s(p, b, bd(v.result) === p, mt(v.impact) === p, E, g);
    }
    if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
      const v = l.completed;
      if (!Fs(h, v.critical))
        return r;
      const E = mt(v.impact) === p, D = !!(v.impact.at && v.impact.at.type === "COMBINE"), O = v.critical.droppable.id === p;
      return E ? D ? t : r : O ? t : r;
    }
    return r;
  };
}, bD = {
  updateViewportMaxScroll: Q_
}, yD = Ef(mD, bD, (t, r, o) => ({
  ...Sd(o),
  ...t,
  ...r
}), {
  context: Da,
  areStatePropsEqual: md
})(hD);
var pS = yD;
const ED = ({
  label: t,
  sliderType: r = "flat",
  size: o = "medium",
  activeColor: s = null,
  section: a = null,
  subsection: l = null,
  fieldName: c,
  updateField: f,
  value: p,
  i: h = null,
  min: b = null,
  max: g = null,
  onClick: v,
  ...E
}) => {
  const [D, O] = V.useState(p);
  let w = () => {
    let R = "";
    return a && (R += a + "-"), l && (R += l + "-"), c && (R += c), R;
  };
  const M = () => ({
    flat: " slider--flat",
    block: " slider--block",
    pill: " slider--pill",
    "3d": " slider--3d"
  })[r] || "";
  V.useEffect(() => {
    p !== void 0 && p !== D && O(p);
  }, [p]), V.useEffect(() => {
    p !== void 0 && p !== D && f && f(a, l, c, D, h);
  }, [D]);
  const F = (R) => {
    O(!D), v && v(R);
  };
  return /* @__PURE__ */ X.createElement("div", { className: "input-group" }, t && /* @__PURE__ */ X.createElement("label", null, t), /* @__PURE__ */ X.createElement("div", { className: "cove-input__slider" + (o === "small" ? "--small" : o === "large" ? "--large" : "") + M() + (D ? " active" : ""), onClick: F }, /* @__PURE__ */ X.createElement("div", { className: "cove-input__slider-button" }), /* @__PURE__ */ X.createElement("div", { className: "cove-input__slider-track", style: D && s ? { backgroundColor: s } : null }), /* @__PURE__ */ X.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: w(), checked: D || !1, readOnly: !0 })));
};
ED.propTypes = {
  /** Add label to the input field */
  label: Ye.string,
  /** Select the preferred display style of the slider */
  sliderType: Ye.oneOf(["flat", "block", "pill", "3d"]),
  /** Select the preferred size of the slider */
  size: Ye.oneOf(["small", "medium", "large"]),
  /** Select the preferred color for the slider when active */
  activeColor: Ye.string,
  /** Parent key value of nested target config option
   *
   * (optional)*/
  section: Ye.string,
  /** Child key value of nested target config option
   *
   * (optional, requires `section` value)*/
  subsection: Ye.string,
  /** Key value of targeted config option */
  fieldName: Ye.string,
  /** Prop drill down of the updateField function */
  updateField: Ye.func,
  /** Current value of the input, usually the current config option value */
  stateValue: Ye.object
};
var _D = Cd;
function Cd(t, r, o) {
  t instanceof RegExp && (t = of(t, o)), r instanceof RegExp && (r = of(r, o));
  var s = Ad(t, r, o);
  return s && {
    start: s[0],
    end: s[1],
    pre: o.slice(0, s[0]),
    body: o.slice(s[0] + t.length, s[1]),
    post: o.slice(s[1] + r.length)
  };
}
function of(t, r) {
  var o = r.match(t);
  return o ? o[0] : null;
}
Cd.range = Ad;
function Ad(t, r, o) {
  var s, a, l, c, f, p = o.indexOf(t), h = o.indexOf(r, p + 1), b = p;
  if (p >= 0 && h > 0) {
    for (s = [], l = o.length; b >= 0 && !f; )
      b == p ? (s.push(b), p = o.indexOf(t, b + 1)) : s.length == 1 ? f = [s.pop(), h] : (a = s.pop(), a < l && (l = a, c = h), h = o.indexOf(r, b + 1)), b = p < h && p >= 0 ? p : h;
    s.length && (f = [l, c]);
  }
  return f;
}
var wD = Id;
function Id(t, r, o) {
  t instanceof RegExp && (t = sf(t, o)), r instanceof RegExp && (r = sf(r, o));
  var s = Od(t, r, o);
  return s && {
    start: s[0],
    end: s[1],
    pre: o.slice(0, s[0]),
    body: o.slice(s[0] + t.length, s[1]),
    post: o.slice(s[1] + r.length)
  };
}
function sf(t, r) {
  var o = r.match(t);
  return o ? o[0] : null;
}
Id.range = Od;
function Od(t, r, o) {
  var s, a, l, c, f, p = o.indexOf(t), h = o.indexOf(r, p + 1), b = p;
  if (p >= 0 && h > 0) {
    if (t === r)
      return [p, h];
    for (s = [], l = o.length; b >= 0 && !f; )
      b == p ? (s.push(b), p = o.indexOf(t, b + 1)) : s.length == 1 ? f = [s.pop(), h] : (a = s.pop(), a < l && (l = a, c = h), h = o.indexOf(r, b + 1)), b = p < h && p >= 0 ? p : h;
    s.length && (f = [l, c]);
  }
  return f;
}
var xD = wD, DD = Nd;
function Nd(t, r, o) {
  var s = t;
  return SD(t, r).reduce(function(a, l) {
    return a.replace(l.functionIdentifier + "(" + l.matches.body + ")", CD(l.matches.body, l.functionIdentifier, o, s, r));
  }, t);
}
function SD(t, r) {
  var o = [], s = typeof r == "string" ? new RegExp("\\b(" + r + ")\\(") : r;
  do {
    var a = s.exec(t);
    if (!a)
      return o;
    if (a[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + r);
    var l = a[1], c = a.index, f = xD("(", ")", t.substring(c));
    if (!f || f.start !== a[0].length - 1)
      throw new SyntaxError(l + "(): missing closing ')' in the value '" + t + "'");
    o.push({ matches: f, functionIdentifier: l }), t = f.post;
  } while (s.test(t));
  return o;
}
function CD(t, r, o, s, a) {
  return o(Nd(t, a, o), r, s);
}
var je = function(t) {
  this.value = t;
};
je.math = {
  isDegree: !0,
  // mode of calculator
  acos: function(t) {
    return je.math.isDegree ? 180 / Math.PI * Math.acos(t) : Math.acos(t);
  },
  add: function(t, r) {
    return t + r;
  },
  asin: function(t) {
    return je.math.isDegree ? 180 / Math.PI * Math.asin(t) : Math.asin(t);
  },
  atan: function(t) {
    return je.math.isDegree ? 180 / Math.PI * Math.atan(t) : Math.atan(t);
  },
  acosh: function(t) {
    return Math.log(t + Math.sqrt(t * t - 1));
  },
  asinh: function(t) {
    return Math.log(t + Math.sqrt(t * t + 1));
  },
  atanh: function(t) {
    return Math.log((1 + t) / (1 - t));
  },
  C: function(t, r) {
    var o = 1, s = t - r, a = r;
    a < s && (a = s, s = r);
    for (var l = a + 1; l <= t; l++)
      o *= l;
    return o / je.math.fact(s);
  },
  changeSign: function(t) {
    return -t;
  },
  cos: function(t) {
    return je.math.isDegree && (t = je.math.toRadian(t)), Math.cos(t);
  },
  cosh: function(t) {
    return (Math.pow(Math.E, t) + Math.pow(Math.E, -1 * t)) / 2;
  },
  div: function(t, r) {
    return t / r;
  },
  fact: function(t) {
    if (t % 1 !== 0)
      return "NaN";
    for (var r = 1, o = 2; o <= t; o++)
      r *= o;
    return r;
  },
  inverse: function(t) {
    return 1 / t;
  },
  log: function(t) {
    return Math.log(t) / Math.log(10);
  },
  mod: function(t, r) {
    return t % r;
  },
  mul: function(t, r) {
    return t * r;
  },
  P: function(t, r) {
    for (var o = 1, s = Math.floor(t) - Math.floor(r) + 1; s <= Math.floor(t); s++)
      o *= s;
    return o;
  },
  Pi: function(t, r, o) {
    for (var s = 1, a = t; a <= r; a++)
      s *= Number(o.postfixEval({
        n: a
      }));
    return s;
  },
  pow10x: function(t) {
    for (var r = 1; t--; )
      r *= 10;
    return r;
  },
  sigma: function(t, r, o) {
    for (var s = 0, a = t; a <= r; a++)
      s += Number(o.postfixEval({
        n: a
      }));
    return s;
  },
  sin: function(t) {
    return je.math.isDegree && (t = je.math.toRadian(t)), Math.sin(t);
  },
  sinh: function(t) {
    return (Math.pow(Math.E, t) - Math.pow(Math.E, -1 * t)) / 2;
  },
  sub: function(t, r) {
    return t - r;
  },
  tan: function(t) {
    return je.math.isDegree && (t = je.math.toRadian(t)), Math.tan(t);
  },
  tanh: function(t) {
    return je.sinha(t) / je.cosha(t);
  },
  toRadian: function(t) {
    return t * Math.PI / 180;
  },
  and: function(t, r) {
    return t & r;
  }
};
je.Exception = function(t) {
  this.message = t;
};
var AD = je, ie = AD;
function Qe(t, r) {
  for (var o = 0; o < t.length; o++)
    t[o] += r;
  return t;
}
var mn = [
  { token: "sin", show: "sin", type: 0, value: ie.math.sin },
  { token: "cos", show: "cos", type: 0, value: ie.math.cos },
  { token: "tan", show: "tan", type: 0, value: ie.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: ie.math.P },
  { token: "C", show: "C", type: 10, value: ie.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: ie.math.asin },
  { token: "acos", show: "acos", type: 0, value: ie.math.acos },
  { token: "atan", show: "atan", type: 0, value: ie.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: ie.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: ie.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: ie.math.div },
  { token: "!", show: "!", type: 7, value: ie.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: ie.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: ie.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: ie.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: ie.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: ie.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: ie.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: ie.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: ie.math.add },
  { token: "-", show: "-", type: 9, value: ie.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: ie.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: ie.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: ie.math.and }
], Qs = {
  0: 11,
  1: 0,
  2: 3,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 11,
  8: 11,
  9: 1,
  10: 10,
  11: 0,
  12: 11,
  13: 0,
  14: -1,
  15: 11
  // will be filtered after lexer
};
for (var Fo = 0; Fo < mn.length; Fo++)
  mn[Fo].precedence = Qs[mn[Fo].type];
var kt = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  9: !0,
  12: !0,
  13: !0,
  14: !0,
  15: !0
}, Kn = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0,
  10: !0,
  11: !0,
  12: !0,
  13: !0,
  15: !0
}, ID = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, Vt = {}, Dr = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, OD = {
  1: !0
}, et = [
  [],
  [
    "1",
    "2",
    "3",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "+",
    "-",
    "*",
    "/",
    "(",
    ")",
    "^",
    "!",
    "P",
    "C",
    "e",
    "0",
    ".",
    ",",
    "n",
    " ",
    "&"
  ],
  ["pi", "ln", "Pi"],
  ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"],
  ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"],
  ["acosh", "atanh", "asinh", "Sigma"]
];
function ND(t, r, o, s) {
  for (var a = 0; a < s; a++)
    if (t[o + a] !== r[a])
      return !1;
  return !0;
}
ie.tokenTypes = {
  FUNCTION_WITH_ONE_ARG: 0,
  NUMBER: 1,
  BINARY_OPERATOR_HIGH_PRECENDENCE: 2,
  CONSTANT: 3,
  OPENING_PARENTHESIS: 4,
  CLOSING_PARENTHESIS: 5,
  DECIMAL: 6,
  POSTFIX_FUNCTION_WITH_ONE_ARG: 7,
  FUNCTION_WITH_N_ARGS: 8,
  BINARY_OPERATOR_LOW_PRECENDENCE: 9,
  BINARY_OPERATOR_PERMUTATION: 10,
  COMMA: 11,
  EVALUATED_FUNCTION: 12,
  EVALUATED_FUNCTION_PARAMETER: 13,
  SPACE: 14
};
ie.addToken = function(t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r].token.length, s = -1;
    t[r].type === ie.tokenTypes.FUNCTION_WITH_N_ARGS && t[r].numberOfArguments === void 0 && (t[r].numberOfArguments = 2), et[o] = et[o] || [];
    for (var a = 0; a < et[o].length; a++)
      if (t[r].token === et[o][a]) {
        s = Rd(et[o][a], mn);
        break;
      }
    s === -1 ? (mn.push(t[r]), t[r].precedence = Qs[t[r].type], et.length <= t[r].token.length && (et[t[r].token.length] = []), et[t[r].token.length].push(t[r].token)) : (mn[s] = t[r], t[r].precedence = Qs[t[r].type]);
  }
};
function Rd(t, r) {
  for (var o = 0; o < r.length; o++)
    if (r[o].token === t)
      return o;
  return -1;
}
function RD(t) {
  for (var r = [], o = t.length, s, a, l, c = 0; c < o; c++)
    if (!(c < o - 1 && t[c] === " " && t[c + 1] === " ")) {
      for (s = "", a = t.length - c > et.length - 2 ? et.length - 1 : t.length - c; a > 0; a--)
        if (et[a] !== void 0)
          for (l = 0; l < et[a].length; l++)
            ND(t, et[a][l], c, a) && (s = et[a][l], l = et[a].length, a = 0);
      if (c += s.length - 1, s === "")
        throw new ie.Exception("Can't understand after " + t.slice(c));
      r.push(mn[Rd(s, mn)]);
    }
  return r;
}
var PD = {
  value: ie.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, $o = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, Sr = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
ie.lex = function(t, r) {
  var o = [Sr], s = [], a = t, l = kt, c = 0, f = Vt, p = "", h;
  typeof r < "u" && ie.addToken(r);
  var b = {}, g = RD(a);
  for (h = 0; h < g.length; h++) {
    var v = g[h];
    if (v.type === 14) {
      if (h > 0 && h < g.length - 1 && g[h + 1].type === 1 && (g[h - 1].type === 1 || g[h - 1].type === 6))
        throw new ie.Exception("Unexpected Space");
      continue;
    }
    var E = v.token, D = v.type, O = v.value, w = v.precedence, M = v.show, F = o[o.length - 1], R;
    for (R = s.length; R-- && s[R] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(D) !== -1) {
        if (l[D] !== !0)
          throw new ie.Exception(E + " is not allowed after " + p);
        o.push($o), l = Kn, f = Dr, s.pop();
      }
    if (l[D] !== !0)
      throw new ie.Exception(E + " is not allowed after " + p);
    if (f[D] === !0 && (D = 2, O = ie.math.mul, M = "&times;", w = 3, h = h - 1), b = {
      value: O,
      type: D,
      pre: w,
      show: M,
      numberOfArguments: v.numberOfArguments
    }, D === 0)
      l = kt, f = Vt, Qe(s, 2), o.push(b), g[h + 1].type !== 4 && (o.push(Sr), s.push(2));
    else if (D === 1)
      F.type === 1 ? (F.value += O, Qe(s, 1)) : o.push(b), l = Kn, f = ID;
    else if (D === 2)
      l = kt, f = Vt, Qe(s, 2), o.push(b);
    else if (D === 3)
      o.push(b), l = Kn, f = Dr;
    else if (D === 4)
      Qe(s, 1), c++, l = kt, f = Vt, o.push(b);
    else if (D === 5) {
      if (!c)
        throw new ie.Exception("Closing parenthesis are more than opening one, wait What!!!");
      c--, l = Kn, f = Dr, o.push(b), Qe(s, 1);
    } else if (D === 6) {
      if (F.hasDec)
        throw new ie.Exception("Two decimals are not allowed in one number");
      F.type !== 1 && (F = {
        value: 0,
        type: 1,
        pre: 0
      }, o.push(F)), l = OD, Qe(s, 1), f = Vt, F.value += O, F.hasDec = !0;
    } else
      D === 7 && (l = Kn, f = Dr, Qe(s, 1), o.push(b));
    D === 8 ? (l = kt, f = Vt, Qe(s, v.numberOfArguments + 2), o.push(b), g[h + 1].type !== 4 && (o.push(Sr), s.push(v.numberOfArguments + 2))) : D === 9 ? (F.type === 9 ? F.value === ie.math.add ? (F.value = O, F.show = M, Qe(s, 1)) : F.value === ie.math.sub && M === "-" && (F.value = ie.math.add, F.show = "+", Qe(s, 1)) : F.type !== 5 && F.type !== 7 && F.type !== 1 && F.type !== 3 && F.type !== 13 ? E === "-" && (l = kt, f = Vt, Qe(s, 2).push(2), o.push(PD), o.push(Sr)) : (o.push(b), Qe(s, 2)), l = kt, f = Vt) : D === 10 ? (l = kt, f = Vt, Qe(s, 2), o.push(b)) : D === 11 ? (l = kt, f = Vt, o.push(b)) : D === 12 ? (l = kt, f = Vt, Qe(s, 6), o.push(b), g[h + 1].type !== 4 && (o.push(Sr), s.push(6))) : D === 13 && (l = Kn, f = Dr, o.push(b)), Qe(s, -1), p = E;
  }
  for (R = s.length; R--; )
    o.push($o);
  if (l[5] !== !0)
    throw new ie.Exception("complete the expression");
  for (; c--; )
    o.push($o);
  return o.push($o), new ie(o);
};
var TD = ie, js = TD;
js.prototype.toPostfix = function() {
  for (var t = [], r, o, s, a, l, c = [{ value: "(", type: 4, pre: 0 }], f = this.value, p = 1; p < f.length; p++)
    if (f[p].type === 1 || f[p].type === 3 || f[p].type === 13)
      f[p].type === 1 && (f[p].value = Number(f[p].value)), t.push(f[p]);
    else if (f[p].type === 4)
      c.push(f[p]);
    else if (f[p].type === 5)
      for (; (o = c.pop()).type !== 4; )
        t.push(o);
    else if (f[p].type === 11) {
      for (; (o = c.pop()).type !== 4; )
        t.push(o);
      c.push(o);
    } else {
      r = f[p], a = r.pre, l = c[c.length - 1], s = l.pre;
      var h = l.value == "Math.pow" && r.value == "Math.pow";
      if (a > s)
        c.push(r);
      else {
        for (; s >= a && !h || h && a < s; )
          o = c.pop(), l = c[c.length - 1], t.push(o), s = l.pre, h = r.value == "Math.pow" && l.value == "Math.pow";
        c.push(r);
      }
    }
  return new js(t);
};
var BD = js, Ir = BD;
Ir.prototype.postfixEval = function(t) {
  t = t || {}, t.PI = Math.PI, t.E = Math.E;
  for (var r = [], o, s, a, l = this.value, c = typeof t.n < "u", f = 0; f < l.length; f++)
    if (l[f].type === 1)
      r.push({ value: l[f].value, type: 1 });
    else if (l[f].type === 3)
      r.push({ value: t[l[f].value], type: 1 });
    else if (l[f].type === 0)
      typeof r[r.length - 1].type > "u" ? r[r.length - 1].value.push(l[f]) : r[r.length - 1].value = l[f].value(r[r.length - 1].value);
    else if (l[f].type === 7)
      typeof r[r.length - 1].type > "u" ? r[r.length - 1].value.push(l[f]) : r[r.length - 1].value = l[f].value(r[r.length - 1].value);
    else if (l[f].type === 8) {
      for (var p = [], h = 0; h < l[f].numberOfArguments; h++)
        p.push(r.pop().value);
      r.push({ type: 1, value: l[f].value.apply(l[f], p.reverse()) });
    } else
      l[f].type === 10 ? (o = r.pop(), s = r.pop(), typeof s.type > "u" ? (s.value = s.concat(o), s.value.push(l[f]), r.push(s)) : typeof o.type > "u" ? (o.unshift(s), o.push(l[f]), r.push(o)) : r.push({ type: 1, value: l[f].value(s.value, o.value) })) : l[f].type === 2 || l[f].type === 9 ? (o = r.pop(), s = r.pop(), typeof s.type > "u" ? (s = s.concat(o), s.push(l[f]), r.push(s)) : typeof o.type > "u" ? (o.unshift(s), o.push(l[f]), r.push(o)) : r.push({ type: 1, value: l[f].value(s.value, o.value) })) : l[f].type === 12 ? (o = r.pop(), typeof o.type < "u" && (o = [o]), s = r.pop(), a = r.pop(), r.push({ type: 1, value: l[f].value(a.value, s.value, new Ir(o)) })) : l[f].type === 13 && (c ? r.push({ value: t[l[f].value], type: 3 }) : r.push([l[f]]));
  if (r.length > 1)
    throw new Ir.Exception("Uncaught Syntax error");
  return r[0].value > 1e15 ? "Infinity" : parseFloat(r[0].value.toFixed(15));
};
Ir.eval = function(t, r, o) {
  return typeof r > "u" ? this.lex(t).toPostfix().postfixEval() : typeof o > "u" ? typeof r.length < "u" ? this.lex(t, r).toPostfix().postfixEval() : this.lex(t).toPostfix().postfixEval(r) : this.lex(t, r).toPostfix().postfixEval(o);
};
var LD = Ir, Pd = LD;
Pd.prototype.formulaEval = function() {
  for (var t, r, o, s = [], a = this.value, l = 0; l < a.length; l++)
    a[l].type === 1 || a[l].type === 3 ? s.push({ value: a[l].type === 3 ? a[l].show : a[l].value, type: 1 }) : a[l].type === 13 ? s.push({ value: a[l].show, type: 1 }) : a[l].type === 0 ? s[s.length - 1] = { value: a[l].show + (a[l].show != "-" ? "(" : "") + s[s.length - 1].value + (a[l].show != "-" ? ")" : ""), type: 0 } : a[l].type === 7 ? s[s.length - 1] = { value: (s[s.length - 1].type != 1 ? "(" : "") + s[s.length - 1].value + (s[s.length - 1].type != 1 ? ")" : "") + a[l].show, type: 7 } : a[l].type === 10 ? (t = s.pop(), r = s.pop(), a[l].show === "P" || a[l].show === "C" ? s.push({ value: "<sup>" + r.value + "</sup>" + a[l].show + "<sub>" + t.value + "</sub>", type: 10 }) : s.push({ value: (r.type != 1 ? "(" : "") + r.value + (r.type != 1 ? ")" : "") + "<sup>" + t.value + "</sup>", type: 1 })) : a[l].type === 2 || a[l].type === 9 ? (t = s.pop(), r = s.pop(), s.push({ value: (r.type != 1 ? "(" : "") + r.value + (r.type != 1 ? ")" : "") + a[l].show + (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : ""), type: a[l].type })) : a[l].type === 12 && (t = s.pop(), r = s.pop(), o = s.pop(), s.push({ value: a[l].show + "(" + o.value + "," + r.value + "," + t.value + ")", type: 12 }));
  return s[0].value;
};
var MD = Pd, FD = _D, $D = DD, WD = MD, VD = 100, GD = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, $s, UD = HD;
function HD(t, r) {
  $s = 0, r = Math.pow(10, r === void 0 ? 5 : r), t = t.replace(/\n+/g, " ");
  function o(a, l, c) {
    if ($s++ > VD)
      throw $s = 0, new Error("Call stack overflow for " + c);
    if (a === "")
      throw new Error(l + "(): '" + c + "' must contain a non-whitespace string");
    a = s(a, c);
    var f = qD(a);
    if (f.length > 1 || a.indexOf("var(") > -1)
      return l + "(" + a + ")";
    var p = f[0] || "";
    p === "%" && (a = a.replace(/\b[0-9\.]+%/g, function(g) {
      return parseFloat(g.slice(0, -1)) * 0.01;
    }));
    var h = a.replace(new RegExp(p, "gi"), ""), b;
    try {
      b = WD.eval(h);
    } catch {
      return l + "(" + a + ")";
    }
    return p === "%" && (b *= 100), (l.length || p === "%") && (b = Math.round(b * r) / r), b += p, b;
  }
  function s(a, l) {
    a = a.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var c = "", f = a, p; p = GD.exec(f); ) {
      p[0].index > 0 && (c += f.substring(0, p[0].index));
      var h = FD("(", ")", f.substring([0].index));
      if (h.body === "")
        throw new Error("'" + a + "' must contain a non-whitespace string");
      var b = o(h.body, "", l);
      c += h.pre + b, f = h.post;
    }
    return c + f;
  }
  return $D(t, /((?:\-[a-z]+\-)?calc)\(/, o);
}
function qD(t) {
  for (var r = [], o = [], s = /[\.0-9]([%a-z]+)/gi, a = s.exec(t); a; )
    !a || !a[1] || (o.indexOf(a[1].toLowerCase()) === -1 && (r.push(a[1]), o.push(a[1].toLowerCase())), a = s.exec(t));
  return r;
}
const Ws = /* @__PURE__ */ cf(UD);
var af = "__react_svg_text_measurement_id";
function kD(t, r) {
  try {
    var o = document.getElementById(af);
    if (!o) {
      var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      s.setAttribute("aria-hidden", "true"), s.style.width = "0", s.style.height = "0", s.style.position = "absolute", s.style.top = "-100%", s.style.left = "-100%", o = document.createElementNS("http://www.w3.org/2000/svg", "text"), o.setAttribute("id", af), s.appendChild(o), document.body.appendChild(s);
    }
    return Object.assign(o.style, r), o.textContent = t, o.getComputedTextLength();
  } catch {
    return null;
  }
}
const lf = mE(kD, function(t, r) {
  return t + "_" + JSON.stringify(r);
});
var zD = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function YD(t, r) {
  if (t == null)
    return {};
  var o = {}, s = Object.keys(t), a, l;
  for (l = 0; l < s.length; l++)
    a = s[l], !(r.indexOf(a) >= 0) && (o[a] = t[a]);
  return o;
}
function Vs(t) {
  return typeof t == "number";
}
function uf(t) {
  return (
    // number that is not NaN or Infinity
    typeof t == "number" && Number.isFinite(t) || // for percentage
    typeof t == "string"
  );
}
function KD(t) {
  var r = t.verticalAnchor, o = r === void 0 ? "end" : r, s = t.scaleToFit, a = s === void 0 ? !1 : s, l = t.angle, c = t.width, f = t.lineHeight, p = f === void 0 ? "1em" : f, h = t.capHeight, b = h === void 0 ? "0.71em" : h, g = t.children, v = t.style, E = YD(t, zD), D = E.x, O = D === void 0 ? 0 : D, w = E.y, M = w === void 0 ? 0 : w, F = !uf(O) || !uf(M), R = V.useMemo(function() {
    var U = g == null ? [] : g.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: U.map(function(q) {
        return {
          word: q,
          wordWidth: lf(q, v) || 0
        };
      }),
      spaceWidth: lf(" ", v) || 0
    };
  }, [g, v]), T = R.wordsWithWidth, A = R.spaceWidth, $ = V.useMemo(function() {
    return F ? [] : c || a ? T.reduce(function(U, q) {
      var ne = q.word, Q = q.wordWidth, ue = U[U.length - 1];
      if (ue && (c == null || a || (ue.width || 0) + Q + A < c))
        ue.words.push(ne), ue.width = ue.width || 0, ue.width += Q + A;
      else {
        var ve = {
          words: [ne],
          width: Q
        };
        U.push(ve);
      }
      return U;
    }, []) : [{
      words: g == null ? [] : g.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [F, c, a, g, T, A]), G = V.useMemo(function() {
    var U = F ? "" : Ws(o === "start" ? "calc(" + b + ")" : o === "middle" ? "calc(" + ($.length - 1) / 2 + " * -" + p + " + (" + b + " / 2))" : "calc(" + ($.length - 1) + " * -" + p + ")");
    return U;
  }, [F, o, b, $.length, p]), z = V.useMemo(function() {
    var U = [];
    if (F)
      return "";
    if (Vs(O) && Vs(M) && Vs(c) && a && $.length > 0) {
      var q = $[0].width || 1, ne = a === "shrink-only" ? Math.min(c / q, 1) : c / q, Q = ne, ue = O - ne * O, ve = M - Q * M;
      U.push("matrix(" + ne + ", 0, 0, " + Q + ", " + ue + ", " + ve + ")");
    }
    return l && U.push("rotate(" + l + ", " + O + ", " + M + ")"), U.length > 0 ? U.join(" ") : "";
  }, [F, O, M, c, a, $, l]);
  return {
    wordsByLines: $,
    startDy: G,
    transform: z
  };
}
var XD = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function ea() {
  return ea = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var o = arguments[r];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
    }
    return t;
  }, ea.apply(this, arguments);
}
function JD(t, r) {
  if (t == null)
    return {};
  var o = {}, s = Object.keys(t), a, l;
  for (l = 0; l < s.length; l++)
    a = s[l], !(r.indexOf(a) >= 0) && (o[a] = t[a]);
  return o;
}
var ZD = {
  overflow: "visible"
};
function gS(t) {
  var r = t.dx, o = r === void 0 ? 0 : r, s = t.dy, a = s === void 0 ? 0 : s, l = t.textAnchor, c = l === void 0 ? "start" : l, f = t.innerRef, p = t.innerTextRef;
  t.verticalAnchor, t.angle;
  var h = t.lineHeight, b = h === void 0 ? "1em" : h;
  t.scaleToFit, t.capHeight, t.width;
  var g = JD(t, XD), v = g.x, E = v === void 0 ? 0 : v, D = g.fontSize, O = KD(t), w = O.wordsByLines, M = O.startDy, F = O.transform;
  return /* @__PURE__ */ X.createElement("svg", {
    ref: f,
    x: o,
    y: a,
    fontSize: D,
    style: ZD
  }, w.length > 0 ? /* @__PURE__ */ X.createElement("text", ea({
    ref: p,
    transform: F
  }, g, {
    textAnchor: c
  }), w.map(function(R, T) {
    return /* @__PURE__ */ X.createElement("tspan", {
      key: T,
      x: E,
      dy: T === 0 ? M : b
    }, R.words.join(" "));
  })) : null);
}
export {
  pS as C,
  fS as D,
  CE as F,
  ED as I,
  dS as P,
  gS as T,
  pf as _,
  uS as a,
  lS as c,
  aS as s,
  cS as t,
  SE as u
};
