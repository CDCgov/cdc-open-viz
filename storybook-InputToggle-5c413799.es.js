import { a as oe, n as Oe, b as Ne } from "./storybook-Group-6a29c5f6.es.js";
import { r as R, R as b } from "./storybook-index-45401197.es.js";
import { g as Pe } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { m as Be } from "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
import { c as ke } from "./storybook-chroma-b564050a.es.js";
import { P as O } from "./storybook-index-43433e35.es.js";
import "./storybook-index-4ed993c7.es.js";
function De(e = oe) {
  if (e === oe)
    return de;
  if (typeof e != "function")
    throw new TypeError("compare is not a function");
  return (t, n) => {
    const a = e(t, n);
    return a || a === 0 ? a : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function de(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
function ie(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n < a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let r of e)
      (r = t(r, ++a, e)) != null && (n < r || n === void 0 && r >= r) && (n = r);
  }
  return n;
}
function ue(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n > a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let r of e)
      (r = t(r, ++a, e)) != null && (n > r || n === void 0 && r >= r) && (n = r);
  }
  return n;
}
function ye(e, t, n = 0, a = 1 / 0, r) {
  if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), a = Math.floor(Math.min(e.length - 1, a)), !(n <= t && t <= a))
    return e;
  for (r = r === void 0 ? de : De(r); a > n; ) {
    if (a - n > 600) {
      const u = a - n + 1, s = t - n + 1, f = Math.log(u), c = 0.5 * Math.exp(2 * f / 3), d = 0.5 * Math.sqrt(f * c * (u - c) / u) * (s - u / 2 < 0 ? -1 : 1), w = Math.max(n, Math.floor(t - s * c / u + d)), p = Math.min(a, Math.floor(t + (u - s) * c / u + d));
      ye(e, t, w, p, r);
    }
    const o = e[t];
    let l = n, i = a;
    for (L(e, n, t), r(e[a], o) > 0 && L(e, n, a); l < i; ) {
      for (L(e, l, i), ++l, --i; r(e[l], o) < 0; )
        ++l;
      for (; r(e[i], o) > 0; )
        --i;
    }
    r(e[n], o) === 0 ? L(e, n, i) : (++i, L(e, i, a)), i <= t && (n = i + 1), t <= i && (a = i - 1);
  }
  return e;
}
function L(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function Nt(e, t, n) {
  if (e = Float64Array.from(Oe(e, n)), !(!(a = e.length) || isNaN(t = +t))) {
    if (t <= 0 || a < 2)
      return ue(e);
    if (t >= 1)
      return ie(e);
    var a, r = (a - 1) * t, o = Math.floor(r), l = ie(ye(e, o).subarray(0, o + 1)), i = ue(e.subarray(o + 1));
    return l + (i - l) * (r - o);
  }
}
function Pt(e, t, n = Ne) {
  if (!(!(a = e.length) || isNaN(t = +t))) {
    if (t <= 0 || a < 2)
      return +n(e[0], 0, e);
    if (t >= 1)
      return +n(e[a - 1], a - 1, e);
    var a, r = (a - 1) * t, o = Math.floor(r), l = +n(e[o], o, e), i = +n(e[o + 1], o + 1, e);
    return l + (i - l) * (r - o);
  }
}
var J = Math.PI, Q = 2 * J, I = 1e-6, Se = Q - I;
function V() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Ie() {
  return new V();
}
V.prototype = Ie.prototype = {
  constructor: V,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, n, a) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +a);
  },
  bezierCurveTo: function(e, t, n, a, r, o) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +a + "," + (this._x1 = +r) + "," + (this._y1 = +o);
  },
  arcTo: function(e, t, n, a, r) {
    e = +e, t = +t, n = +n, a = +a, r = +r;
    var o = this._x1, l = this._y1, i = n - e, u = a - t, s = o - e, f = l - t, c = s * s + f * f;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (c > I)
      if (!(Math.abs(f * i - u * s) > I) || !r)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var d = n - o, w = a - l, p = i * i + u * u, m = d * d + w * w, M = Math.sqrt(p), g = Math.sqrt(c), v = r * Math.tan((J - Math.acos((p + c - m) / (2 * M * g))) / 2), y = v / g, N = v / M;
        Math.abs(y - 1) > I && (this._ += "L" + (e + y * s) + "," + (t + y * f)), this._ += "A" + r + "," + r + ",0,0," + +(f * d > s * w) + "," + (this._x1 = e + N * i) + "," + (this._y1 = t + N * u);
      }
  },
  arc: function(e, t, n, a, r, o) {
    e = +e, t = +t, n = +n, o = !!o;
    var l = n * Math.cos(a), i = n * Math.sin(a), u = e + l, s = t + i, f = 1 ^ o, c = o ? a - r : r - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + u + "," + s : (Math.abs(this._x1 - u) > I || Math.abs(this._y1 - s) > I) && (this._ += "L" + u + "," + s), n && (c < 0 && (c = c % Q + Q), c > Se ? this._ += "A" + n + "," + n + ",0,1," + f + "," + (e - l) + "," + (t - i) + "A" + n + "," + n + ",0,1," + f + "," + (this._x1 = u) + "," + (this._y1 = s) : c > I && (this._ += "A" + n + "," + n + ",0," + +(c >= J) + "," + f + "," + (this._x1 = e + n * Math.cos(r)) + "," + (this._y1 = t + n * Math.sin(r))));
  },
  rect: function(e, t, n, a) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +a + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Bt(e) {
  return function() {
    return e;
  };
}
var kt = Math.abs, Dt = Math.atan2, St = Math.cos, It = Math.max, Rt = Math.min, qt = Math.sin, Tt = Math.sqrt, $t = 1e-12, ae = Math.PI, le = ae / 2, Lt = 2 * ae;
function Wt(e) {
  return e > 1 ? 0 : e < -1 ? ae : Math.acos(e);
}
function Ht(e) {
  return e >= 1 ? le : e <= -1 ? -le : Math.asin(e);
}
var Re = me;
function me(e, t, n) {
  e instanceof RegExp && (e = se(e, n)), t instanceof RegExp && (t = se(t, n));
  var a = ge(e, t, n);
  return a && {
    start: a[0],
    end: a[1],
    pre: n.slice(0, a[0]),
    body: n.slice(a[0] + e.length, a[1]),
    post: n.slice(a[1] + t.length)
  };
}
function se(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
me.range = ge;
function ge(e, t, n) {
  var a, r, o, l, i, u = n.indexOf(e), s = n.indexOf(t, u + 1), f = u;
  if (u >= 0 && s > 0) {
    for (a = [], o = n.length; f >= 0 && !i; )
      f == u ? (a.push(f), u = n.indexOf(e, f + 1)) : a.length == 1 ? i = [a.pop(), s] : (r = a.pop(), r < o && (o = r, l = s), s = n.indexOf(t, f + 1)), f = u < s && u >= 0 ? u : s;
    a.length && (i = [o, l]);
  }
  return i;
}
var qe = we;
function we(e, t, n) {
  e instanceof RegExp && (e = fe(e, n)), t instanceof RegExp && (t = fe(t, n));
  var a = be(e, t, n);
  return a && {
    start: a[0],
    end: a[1],
    pre: n.slice(0, a[0]),
    body: n.slice(a[0] + e.length, a[1]),
    post: n.slice(a[1] + t.length)
  };
}
function fe(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
we.range = be;
function be(e, t, n) {
  var a, r, o, l, i, u = n.indexOf(e), s = n.indexOf(t, u + 1), f = u;
  if (u >= 0 && s > 0) {
    if (e === t)
      return [u, s];
    for (a = [], o = n.length; f >= 0 && !i; )
      f == u ? (a.push(f), u = n.indexOf(e, f + 1)) : a.length == 1 ? i = [a.pop(), s] : (r = a.pop(), r < o && (o = r, l = s), s = n.indexOf(t, f + 1)), f = u < s && u >= 0 ? u : s;
    a.length && (i = [o, l]);
  }
  return i;
}
var Te = qe, $e = Ee;
function Ee(e, t, n) {
  var a = e;
  return Le(e, t).reduce(function(r, o) {
    return r.replace(o.functionIdentifier + "(" + o.matches.body + ")", We(o.matches.body, o.functionIdentifier, n, a, t));
  }, e);
}
function Le(e, t) {
  var n = [], a = typeof t == "string" ? new RegExp("\\b(" + t + ")\\(") : t;
  do {
    var r = a.exec(e);
    if (!r)
      return n;
    if (r[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + t);
    var o = r[1], l = r.index, i = Te("(", ")", e.substring(l));
    if (!i || i.start !== r[0].length - 1)
      throw new SyntaxError(o + "(): missing closing ')' in the value '" + e + "'");
    n.push({ matches: i, functionIdentifier: o }), e = i.post;
  } while (a.test(e));
  return n;
}
function We(e, t, n, a, r) {
  return n(Ee(e, r, n), t, a);
}
var _ = function(e) {
  this.value = e;
};
_.math = {
  isDegree: !0,
  // mode of calculator
  acos: function(e) {
    return _.math.isDegree ? 180 / Math.PI * Math.acos(e) : Math.acos(e);
  },
  add: function(e, t) {
    return e + t;
  },
  asin: function(e) {
    return _.math.isDegree ? 180 / Math.PI * Math.asin(e) : Math.asin(e);
  },
  atan: function(e) {
    return _.math.isDegree ? 180 / Math.PI * Math.atan(e) : Math.atan(e);
  },
  acosh: function(e) {
    return Math.log(e + Math.sqrt(e * e - 1));
  },
  asinh: function(e) {
    return Math.log(e + Math.sqrt(e * e + 1));
  },
  atanh: function(e) {
    return Math.log((1 + e) / (1 - e));
  },
  C: function(e, t) {
    var n = 1, a = e - t, r = t;
    r < a && (r = a, a = t);
    for (var o = r + 1; o <= e; o++)
      n *= o;
    return n / _.math.fact(a);
  },
  changeSign: function(e) {
    return -e;
  },
  cos: function(e) {
    return _.math.isDegree && (e = _.math.toRadian(e)), Math.cos(e);
  },
  cosh: function(e) {
    return (Math.pow(Math.E, e) + Math.pow(Math.E, -1 * e)) / 2;
  },
  div: function(e, t) {
    return e / t;
  },
  fact: function(e) {
    if (e % 1 !== 0)
      return "NaN";
    for (var t = 1, n = 2; n <= e; n++)
      t *= n;
    return t;
  },
  inverse: function(e) {
    return 1 / e;
  },
  log: function(e) {
    return Math.log(e) / Math.log(10);
  },
  mod: function(e, t) {
    return e % t;
  },
  mul: function(e, t) {
    return e * t;
  },
  P: function(e, t) {
    for (var n = 1, a = Math.floor(e) - Math.floor(t) + 1; a <= Math.floor(e); a++)
      n *= a;
    return n;
  },
  Pi: function(e, t, n) {
    for (var a = 1, r = e; r <= t; r++)
      a *= Number(n.postfixEval({
        n: r
      }));
    return a;
  },
  pow10x: function(e) {
    for (var t = 1; e--; )
      t *= 10;
    return t;
  },
  sigma: function(e, t, n) {
    for (var a = 0, r = e; r <= t; r++)
      a += Number(n.postfixEval({
        n: r
      }));
    return a;
  },
  sin: function(e) {
    return _.math.isDegree && (e = _.math.toRadian(e)), Math.sin(e);
  },
  sinh: function(e) {
    return (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e)) / 2;
  },
  sub: function(e, t) {
    return e - t;
  },
  tan: function(e) {
    return _.math.isDegree && (e = _.math.toRadian(e)), Math.tan(e);
  },
  tanh: function(e) {
    return _.sinha(e) / _.cosha(e);
  },
  toRadian: function(e) {
    return e * Math.PI / 180;
  },
  and: function(e, t) {
    return e & t;
  }
};
_.Exception = function(e) {
  this.message = e;
};
var He = _, h = He;
function E(e, t) {
  for (var n = 0; n < e.length; n++)
    e[n] += t;
  return e;
}
var k = [
  { token: "sin", show: "sin", type: 0, value: h.math.sin },
  { token: "cos", show: "cos", type: 0, value: h.math.cos },
  { token: "tan", show: "tan", type: 0, value: h.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: h.math.P },
  { token: "C", show: "C", type: 10, value: h.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: h.math.asin },
  { token: "acos", show: "acos", type: 0, value: h.math.acos },
  { token: "atan", show: "atan", type: 0, value: h.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: h.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: h.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: h.math.div },
  { token: "!", show: "!", type: 7, value: h.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: h.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: h.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: h.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: h.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: h.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: h.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: h.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: h.math.add },
  { token: "-", show: "-", type: 9, value: h.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: h.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: h.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: h.math.and }
], ee = {
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
for (var j = 0; j < k.length; j++)
  k[j].precedence = ee[k[j].type];
var x = {
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
}, $ = {
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
}, ze = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, A = {}, W = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, je = {
  1: !0
}, F = [
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
function Ge(e, t, n, a) {
  for (var r = 0; r < a; r++)
    if (e[n + r] !== t[r])
      return !1;
  return !0;
}
h.tokenTypes = {
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
h.addToken = function(e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t].token.length, a = -1;
    e[t].type === h.tokenTypes.FUNCTION_WITH_N_ARGS && e[t].numberOfArguments === void 0 && (e[t].numberOfArguments = 2), F[n] = F[n] || [];
    for (var r = 0; r < F[n].length; r++)
      if (e[t].token === F[n][r]) {
        a = _e(F[n][r], k);
        break;
      }
    a === -1 ? (k.push(e[t]), e[t].precedence = ee[e[t].type], F.length <= e[t].token.length && (F[e[t].token.length] = []), F[e[t].token.length].push(e[t].token)) : (k[a] = e[t], e[t].precedence = ee[e[t].type]);
  }
};
function _e(e, t) {
  for (var n = 0; n < t.length; n++)
    if (t[n].token === e)
      return n;
  return -1;
}
function Ue(e) {
  for (var t = [], n = e.length, a, r, o, l = 0; l < n; l++)
    if (!(l < n - 1 && e[l] === " " && e[l + 1] === " ")) {
      for (a = "", r = e.length - l > F.length - 2 ? F.length - 1 : e.length - l; r > 0; r--)
        if (F[r] !== void 0)
          for (o = 0; o < F[r].length; o++)
            Ge(e, F[r][o], l, r) && (a = F[r][o], o = F[r].length, r = 0);
      if (l += a.length - 1, a === "")
        throw new h.Exception("Can't understand after " + e.slice(l));
      t.push(k[_e(a, k)]);
    }
  return t;
}
var Xe = {
  value: h.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, G = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, H = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
h.lex = function(e, t) {
  var n = [H], a = [], r = e, o = x, l = 0, i = A, u = "", s;
  typeof t < "u" && h.addToken(t);
  var f = {}, c = Ue(r);
  for (s = 0; s < c.length; s++) {
    var d = c[s];
    if (d.type === 14) {
      if (s > 0 && s < c.length - 1 && c[s + 1].type === 1 && (c[s - 1].type === 1 || c[s - 1].type === 6))
        throw new h.Exception("Unexpected Space");
      continue;
    }
    var w = d.token, p = d.type, m = d.value, M = d.precedence, g = d.show, v = n[n.length - 1], y;
    for (y = a.length; y-- && a[y] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(p) !== -1) {
        if (o[p] !== !0)
          throw new h.Exception(w + " is not allowed after " + u);
        n.push(G), o = $, i = W, a.pop();
      }
    if (o[p] !== !0)
      throw new h.Exception(w + " is not allowed after " + u);
    if (i[p] === !0 && (p = 2, m = h.math.mul, g = "&times;", M = 3, s = s - 1), f = {
      value: m,
      type: p,
      pre: M,
      show: g,
      numberOfArguments: d.numberOfArguments
    }, p === 0)
      o = x, i = A, E(a, 2), n.push(f), c[s + 1].type !== 4 && (n.push(H), a.push(2));
    else if (p === 1)
      v.type === 1 ? (v.value += m, E(a, 1)) : n.push(f), o = $, i = ze;
    else if (p === 2)
      o = x, i = A, E(a, 2), n.push(f);
    else if (p === 3)
      n.push(f), o = $, i = W;
    else if (p === 4)
      E(a, 1), l++, o = x, i = A, n.push(f);
    else if (p === 5) {
      if (!l)
        throw new h.Exception("Closing parenthesis are more than opening one, wait What!!!");
      l--, o = $, i = W, n.push(f), E(a, 1);
    } else if (p === 6) {
      if (v.hasDec)
        throw new h.Exception("Two decimals are not allowed in one number");
      v.type !== 1 && (v = {
        value: 0,
        type: 1,
        pre: 0
      }, n.push(v)), o = je, E(a, 1), i = A, v.value += m, v.hasDec = !0;
    } else
      p === 7 && (o = $, i = W, E(a, 1), n.push(f));
    p === 8 ? (o = x, i = A, E(a, d.numberOfArguments + 2), n.push(f), c[s + 1].type !== 4 && (n.push(H), a.push(d.numberOfArguments + 2))) : p === 9 ? (v.type === 9 ? v.value === h.math.add ? (v.value = m, v.show = g, E(a, 1)) : v.value === h.math.sub && g === "-" && (v.value = h.math.add, v.show = "+", E(a, 1)) : v.type !== 5 && v.type !== 7 && v.type !== 1 && v.type !== 3 && v.type !== 13 ? w === "-" && (o = x, i = A, E(a, 2).push(2), n.push(Xe), n.push(H)) : (n.push(f), E(a, 2)), o = x, i = A) : p === 10 ? (o = x, i = A, E(a, 2), n.push(f)) : p === 11 ? (o = x, i = A, n.push(f)) : p === 12 ? (o = x, i = A, E(a, 6), n.push(f), c[s + 1].type !== 4 && (n.push(H), a.push(6))) : p === 13 && (o = $, i = W, n.push(f)), E(a, -1), u = w;
  }
  for (y = a.length; y--; )
    n.push(G);
  if (o[5] !== !0)
    throw new h.Exception("complete the expression");
  for (; l--; )
    n.push(G);
  return n.push(G), new h(n);
};
var Ke = h, te = Ke;
te.prototype.toPostfix = function() {
  for (var e = [], t, n, a, r, o, l = [{ value: "(", type: 4, pre: 0 }], i = this.value, u = 1; u < i.length; u++)
    if (i[u].type === 1 || i[u].type === 3 || i[u].type === 13)
      i[u].type === 1 && (i[u].value = Number(i[u].value)), e.push(i[u]);
    else if (i[u].type === 4)
      l.push(i[u]);
    else if (i[u].type === 5)
      for (; (n = l.pop()).type !== 4; )
        e.push(n);
    else if (i[u].type === 11) {
      for (; (n = l.pop()).type !== 4; )
        e.push(n);
      l.push(n);
    } else {
      t = i[u], r = t.pre, o = l[l.length - 1], a = o.pre;
      var s = o.value == "Math.pow" && t.value == "Math.pow";
      if (r > a)
        l.push(t);
      else {
        for (; a >= r && !s || s && r < a; )
          n = l.pop(), o = l[l.length - 1], e.push(n), a = o.pre, s = t.value == "Math.pow" && o.value == "Math.pow";
        l.push(t);
      }
    }
  return new te(e);
};
var Ye = te, z = Ye;
z.prototype.postfixEval = function(e) {
  e = e || {}, e.PI = Math.PI, e.E = Math.E;
  for (var t = [], n, a, r, o = this.value, l = typeof e.n < "u", i = 0; i < o.length; i++)
    if (o[i].type === 1)
      t.push({ value: o[i].value, type: 1 });
    else if (o[i].type === 3)
      t.push({ value: e[o[i].value], type: 1 });
    else if (o[i].type === 0)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(o[i]) : t[t.length - 1].value = o[i].value(t[t.length - 1].value);
    else if (o[i].type === 7)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(o[i]) : t[t.length - 1].value = o[i].value(t[t.length - 1].value);
    else if (o[i].type === 8) {
      for (var u = [], s = 0; s < o[i].numberOfArguments; s++)
        u.push(t.pop().value);
      t.push({ type: 1, value: o[i].value.apply(o[i], u.reverse()) });
    } else
      o[i].type === 10 ? (n = t.pop(), a = t.pop(), typeof a.type > "u" ? (a.value = a.concat(n), a.value.push(o[i]), t.push(a)) : typeof n.type > "u" ? (n.unshift(a), n.push(o[i]), t.push(n)) : t.push({ type: 1, value: o[i].value(a.value, n.value) })) : o[i].type === 2 || o[i].type === 9 ? (n = t.pop(), a = t.pop(), typeof a.type > "u" ? (a = a.concat(n), a.push(o[i]), t.push(a)) : typeof n.type > "u" ? (n.unshift(a), n.push(o[i]), t.push(n)) : t.push({ type: 1, value: o[i].value(a.value, n.value) })) : o[i].type === 12 ? (n = t.pop(), typeof n.type < "u" && (n = [n]), a = t.pop(), r = t.pop(), t.push({ type: 1, value: o[i].value(r.value, a.value, new z(n)) })) : o[i].type === 13 && (l ? t.push({ value: e[o[i].value], type: 3 }) : t.push([o[i]]));
  if (t.length > 1)
    throw new z.Exception("Uncaught Syntax error");
  return t[0].value > 1e15 ? "Infinity" : parseFloat(t[0].value.toFixed(15));
};
z.eval = function(e, t, n) {
  return typeof t > "u" ? this.lex(e).toPostfix().postfixEval() : typeof n > "u" ? typeof t.length < "u" ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(n);
};
var Ze = z, Fe = Ze;
Fe.prototype.formulaEval = function() {
  for (var e, t, n, a = [], r = this.value, o = 0; o < r.length; o++)
    r[o].type === 1 || r[o].type === 3 ? a.push({ value: r[o].type === 3 ? r[o].show : r[o].value, type: 1 }) : r[o].type === 13 ? a.push({ value: r[o].show, type: 1 }) : r[o].type === 0 ? a[a.length - 1] = { value: r[o].show + (r[o].show != "-" ? "(" : "") + a[a.length - 1].value + (r[o].show != "-" ? ")" : ""), type: 0 } : r[o].type === 7 ? a[a.length - 1] = { value: (a[a.length - 1].type != 1 ? "(" : "") + a[a.length - 1].value + (a[a.length - 1].type != 1 ? ")" : "") + r[o].show, type: 7 } : r[o].type === 10 ? (e = a.pop(), t = a.pop(), r[o].show === "P" || r[o].show === "C" ? a.push({ value: "<sup>" + t.value + "</sup>" + r[o].show + "<sub>" + e.value + "</sub>", type: 10 }) : a.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + "<sup>" + e.value + "</sup>", type: 1 })) : r[o].type === 2 || r[o].type === 9 ? (e = a.pop(), t = a.pop(), a.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + r[o].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""), type: r[o].type })) : r[o].type === 12 && (e = a.pop(), t = a.pop(), n = a.pop(), a.push({ value: r[o].show + "(" + n.value + "," + t.value + "," + e.value + ")", type: 12 }));
  return a[0].value;
};
var Je = Fe, Qe = Re, Ve = $e, et = Je, tt = 100, nt = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, K, at = rt;
function rt(e, t) {
  K = 0, t = Math.pow(10, t === void 0 ? 5 : t), e = e.replace(/\n+/g, " ");
  function n(r, o, l) {
    if (K++ > tt)
      throw K = 0, new Error("Call stack overflow for " + l);
    if (r === "")
      throw new Error(o + "(): '" + l + "' must contain a non-whitespace string");
    r = a(r, l);
    var i = ot(r);
    if (i.length > 1 || r.indexOf("var(") > -1)
      return o + "(" + r + ")";
    var u = i[0] || "";
    u === "%" && (r = r.replace(/\b[0-9\.]+%/g, function(c) {
      return parseFloat(c.slice(0, -1)) * 0.01;
    }));
    var s = r.replace(new RegExp(u, "gi"), ""), f;
    try {
      f = et.eval(s);
    } catch {
      return o + "(" + r + ")";
    }
    return u === "%" && (f *= 100), (o.length || u === "%") && (f = Math.round(f * t) / t), f += u, f;
  }
  function a(r, o) {
    r = r.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var l = "", i = r, u; u = nt.exec(i); ) {
      u[0].index > 0 && (l += i.substring(0, u[0].index));
      var s = Qe("(", ")", i.substring([0].index));
      if (s.body === "")
        throw new Error("'" + r + "' must contain a non-whitespace string");
      var f = n(s.body, "", o);
      l += s.pre + f, i = s.post;
    }
    return l + i;
  }
  return Ve(e, /((?:\-[a-z]+\-)?calc)\(/, n);
}
function ot(e) {
  for (var t = [], n = [], a = /[\.0-9]([%a-z]+)/gi, r = a.exec(e); r; )
    !r || !r[1] || (n.indexOf(r[1].toLowerCase()) === -1 && (t.push(r[1]), n.push(r[1].toLowerCase())), r = a.exec(e));
  return t;
}
const Y = /* @__PURE__ */ Pe(at);
var he = "__react_svg_text_measurement_id";
function it(e, t) {
  try {
    var n = document.getElementById(he);
    if (!n) {
      var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      a.setAttribute("aria-hidden", "true"), a.style.width = "0", a.style.height = "0", a.style.position = "absolute", a.style.top = "-100%", a.style.left = "-100%", n = document.createElementNS("http://www.w3.org/2000/svg", "text"), n.setAttribute("id", he), a.appendChild(n), document.body.appendChild(a);
    }
    return Object.assign(n.style, t), n.textContent = e, n.getComputedTextLength();
  } catch {
    return null;
  }
}
const ce = Be(it, function(e, t) {
  return e + "_" + JSON.stringify(t);
});
var ut = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function lt(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Z(e) {
  return typeof e == "number";
}
function pe(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function st(e) {
  var t = e.verticalAnchor, n = t === void 0 ? "end" : t, a = e.scaleToFit, r = a === void 0 ? !1 : a, o = e.angle, l = e.width, i = e.lineHeight, u = i === void 0 ? "1em" : i, s = e.capHeight, f = s === void 0 ? "0.71em" : s, c = e.children, d = e.style, w = lt(e, ut), p = w.x, m = p === void 0 ? 0 : p, M = w.y, g = M === void 0 ? 0 : M, v = !pe(m) || !pe(g), y = R.useMemo(function() {
    var C = c == null ? [] : c.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: C.map(function(P) {
        return {
          word: P,
          wordWidth: ce(P, d) || 0
        };
      }),
      spaceWidth: ce(" ", d) || 0
    };
  }, [c, d]), N = y.wordsWithWidth, U = y.spaceWidth, S = R.useMemo(function() {
    return v ? [] : l || r ? N.reduce(function(C, P) {
      var q = P.word, T = P.wordWidth, B = C[C.length - 1];
      if (B && (l == null || r || (B.width || 0) + T + U < l))
        B.words.push(q), B.width = B.width || 0, B.width += T + U;
      else {
        var X = {
          words: [q],
          width: T
        };
        C.push(X);
      }
      return C;
    }, []) : [{
      words: c == null ? [] : c.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [v, l, r, c, N, U]), Ae = R.useMemo(function() {
    var C = v ? "" : Y(n === "start" ? "calc(" + f + ")" : n === "middle" ? "calc(" + (S.length - 1) / 2 + " * -" + u + " + (" + f + " / 2))" : "calc(" + (S.length - 1) + " * -" + u + ")");
    return C;
  }, [v, n, f, S.length, u]), xe = R.useMemo(function() {
    var C = [];
    if (v)
      return "";
    if (Z(m) && Z(g) && Z(l) && r && S.length > 0) {
      var P = S[0].width || 1, q = r === "shrink-only" ? Math.min(l / P, 1) : l / P, T = q, B = m - q * m, X = g - T * g;
      C.push("matrix(" + q + ", 0, 0, " + T + ", " + B + ", " + X + ")");
    }
    return o && C.push("rotate(" + o + ", " + m + ", " + g + ")"), C.length > 0 ? C.join(" ") : "";
  }, [v, m, g, l, r, S, o]);
  return {
    wordsByLines: S,
    startDy: Ae,
    transform: xe
  };
}
var ft = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function ne() {
  return ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ne.apply(this, arguments);
}
function ht(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var ct = {
  overflow: "visible"
};
function zt(e) {
  var t = e.dx, n = t === void 0 ? 0 : t, a = e.dy, r = a === void 0 ? 0 : a, o = e.textAnchor, l = o === void 0 ? "start" : o, i = e.innerRef, u = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var s = e.lineHeight, f = s === void 0 ? "1em" : s;
  e.scaleToFit, e.capHeight, e.width;
  var c = ht(e, ft), d = c.x, w = d === void 0 ? 0 : d, p = c.fontSize, m = st(e), M = m.wordsByLines, g = m.startDy, v = m.transform;
  return /* @__PURE__ */ b.createElement("svg", {
    ref: i,
    x: n,
    y: r,
    fontSize: p,
    style: ct
  }, M.length > 0 ? /* @__PURE__ */ b.createElement("text", ne({
    ref: u,
    transform: v
  }, c, {
    textAnchor: l
  }), M.map(function(y, N) {
    return /* @__PURE__ */ b.createElement("tspan", {
      key: N,
      x: w,
      dy: N === 0 ? g : f
    }, y.words.join(" "));
  })) : null);
}
function re(e) {
  delete e.qualitative9;
  let t = {};
  for (const [n, a] of Object.entries(e)) {
    const r = String(n);
    if (r.endsWith("reverse"))
      t = { ...e };
    else {
      let o = r.concat("reverse");
      t[o] = [...a].reverse();
    }
  }
  return { ...t, ...e };
}
const pt = {
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
  // qualitative9 doesn't appear to be used anywhere...
  qualitative9: ["#497d0c", "#84BC49", "#88c3ea", "#fcad90", "#f26b4f", "#c31b1f", "#c31b1f"],
  "sequential-blue-2(MPX)": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "sequential-orange(MPX)": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"]
}, vt = {
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
}, dt = {
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
}, yt = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, jt = yt, Gt = re(vt), Ut = re(pt), Xt = re(dt);
var Me = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ve = b.createContext && b.createContext(Me), D = globalThis && globalThis.__assign || function() {
  return D = Object.assign || function(e) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, D.apply(this, arguments);
}, mt = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
      t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
  return n;
};
function Ce(e) {
  return e && e.map(function(t, n) {
    return b.createElement(t.tag, D({
      key: n
    }, t.attr), Ce(t.child));
  });
}
function Kt(e) {
  return function(t) {
    return b.createElement(gt, D({
      attr: D({}, e.attr)
    }, t), Ce(e.child));
  };
}
function gt(e) {
  var t = function(n) {
    var a = e.attr, r = e.size, o = e.title, l = mt(e, ["attr", "size", "title"]), i = r || n.size || "1em", u;
    return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), b.createElement("svg", D({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, a, l, {
      className: u,
      style: D(D({
        color: e.color || n.color
      }, n.style), e.style),
      height: i,
      width: i,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && b.createElement("title", null, o), e.children);
  };
  return ve !== void 0 ? b.createElement(ve.Consumer, null, function(n) {
    return t(n);
  }) : t(Me);
}
const wt = 4.5, Yt = (e, t) => {
  if (ke.contrast(e, t) < wt)
    switch (e) {
      case "#FFF":
        return "#000";
      case "#000":
        return "#FFF";
      default:
        return e;
    }
  return e;
}, bt = ({
  label: e,
  sliderType: t = "flat",
  size: n = "medium",
  activeColor: a = null,
  section: r = null,
  subsection: o = null,
  fieldName: l,
  updateField: i,
  value: u,
  i: s = null,
  min: f = null,
  max: c = null,
  onClick: d,
  ...w
}) => {
  const [p, m] = R.useState(u);
  let M = () => {
    let y = "";
    return r && (y += r + "-"), o && (y += o + "-"), l && (y += l), y;
  };
  const g = () => ({
    flat: " slider--flat",
    block: " slider--block",
    pill: " slider--pill",
    "3d": " slider--3d"
  })[t] || "";
  R.useEffect(() => {
    u !== void 0 && u !== p && m(u);
  }, [u]), R.useEffect(() => {
    u !== void 0 && u !== p && i && i(r, o, l, p, s);
  }, [p]);
  const v = (y) => {
    m(!p), d && d(y);
  };
  return /* @__PURE__ */ b.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ b.createElement("label", null, e), /* @__PURE__ */ b.createElement("div", { className: "cove-input__slider" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + g() + (p ? " active" : ""), onClick: v }, /* @__PURE__ */ b.createElement("div", { className: "cove-input__slider-button" }), /* @__PURE__ */ b.createElement("div", { className: "cove-input__slider-track", style: p && a ? { backgroundColor: a } : null }), /* @__PURE__ */ b.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: M(), checked: p || !1, readOnly: !0 })));
};
bt.propTypes = {
  /** Add label to the input field */
  label: O.string,
  /** Select the preferred display style of the slider */
  sliderType: O.oneOf(["flat", "block", "pill", "3d"]),
  /** Select the preferred size of the slider */
  size: O.oneOf(["small", "medium", "large"]),
  /** Select the preferred color for the slider when active */
  activeColor: O.string,
  /** Parent key value of nested target config option
   *
   * (optional)*/
  section: O.string,
  /** Child key value of nested target config option
   *
   * (optional, requires `section` value)*/
  subsection: O.string,
  /** Key value of targeted config option */
  fieldName: O.string,
  /** Prop drill down of the updateField function */
  updateField: O.func,
  /** Current value of the input, usually the current config option value */
  stateValue: O.object
};
export {
  Kt as G,
  bt as I,
  zt as T,
  Ie as a,
  Ut as b,
  Bt as c,
  Nt as d,
  St as e,
  $t as f,
  Yt as g,
  le as h,
  Tt as i,
  kt as j,
  Dt as k,
  Ht as l,
  Rt as m,
  Wt as n,
  It as o,
  ae as p,
  Pt as q,
  Xt as r,
  qt as s,
  Lt as t,
  Gt as u,
  jt as v,
  ue as w,
  ie as x
};
