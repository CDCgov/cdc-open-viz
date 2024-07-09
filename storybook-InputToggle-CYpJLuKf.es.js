import { r as R, R as w } from "./storybook-index-BmAYD2Ot.es.js";
import { g as _e } from "./storybook-_commonjsHelpers-CT_km90n.es.js";
import { m as Ce } from "./storybook-memoize-_GlkRUnG.es.js";
import "./storybook-lodash-QEop74tm.es.js";
import { e as Fe } from "./storybook-index-CUdl0IAB.es.js";
import { P as O } from "./storybook-index-Cdio1Uc1.es.js";
/* empty css                            */
var Z = Math.PI, J = 2 * Z, I = 1e-6, Me = J - I;
function Q() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Ae() {
  return new Q();
}
Q.prototype = Ae.prototype = {
  constructor: Q,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, a, n) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +a) + "," + (this._y1 = +n);
  },
  bezierCurveTo: function(e, t, a, n, r, o) {
    this._ += "C" + +e + "," + +t + "," + +a + "," + +n + "," + (this._x1 = +r) + "," + (this._y1 = +o);
  },
  arcTo: function(e, t, a, n, r) {
    e = +e, t = +t, a = +a, n = +n, r = +r;
    var o = this._x1, l = this._y1, u = a - e, i = n - t, s = o - e, h = l - t, p = s * s + h * h;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (p > I)
      if (!(Math.abs(h * u - i * s) > I) || !r)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var d = a - o, C = n - l, c = u * u + i * i, m = d * d + C * C, F = Math.sqrt(c), g = Math.sqrt(p), v = r * Math.tan((Z - Math.acos((c + p - m) / (2 * F * g))) / 2), y = v / g, k = v / F;
        Math.abs(y - 1) > I && (this._ += "L" + (e + y * s) + "," + (t + y * h)), this._ += "A" + r + "," + r + ",0,0," + +(h * d > s * C) + "," + (this._x1 = e + k * u) + "," + (this._y1 = t + k * i);
      }
  },
  arc: function(e, t, a, n, r, o) {
    e = +e, t = +t, a = +a, o = !!o;
    var l = a * Math.cos(n), u = a * Math.sin(n), i = e + l, s = t + u, h = 1 ^ o, p = o ? n - r : r - n;
    if (a < 0)
      throw new Error("negative radius: " + a);
    this._x1 === null ? this._ += "M" + i + "," + s : (Math.abs(this._x1 - i) > I || Math.abs(this._y1 - s) > I) && (this._ += "L" + i + "," + s), a && (p < 0 && (p = p % J + J), p > Me ? this._ += "A" + a + "," + a + ",0,1," + h + "," + (e - l) + "," + (t - u) + "A" + a + "," + a + ",0,1," + h + "," + (this._x1 = i) + "," + (this._y1 = s) : p > I && (this._ += "A" + a + "," + a + ",0," + +(p >= Z) + "," + h + "," + (this._x1 = e + a * Math.cos(r)) + "," + (this._y1 = t + a * Math.sin(r))));
  },
  rect: function(e, t, a, n) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +a + "v" + +n + "h" + -a + "Z";
  },
  toString: function() {
    return this._;
  }
};
function wt(e) {
  return function() {
    return e;
  };
}
var bt = Math.abs, Et = Math.atan2, _t = Math.cos, Ct = Math.max, Ft = Math.min, Mt = Math.sin, At = Math.sqrt, xt = 1e-12, ae = Math.PI, re = ae / 2, Ot = 2 * ae;
function kt(e) {
  return e > 1 ? 0 : e < -1 ? ae : Math.acos(e);
}
function Bt(e) {
  return e >= 1 ? re : e <= -1 ? -re : Math.asin(e);
}
var xe = fe;
function fe(e, t, a) {
  e instanceof RegExp && (e = oe(e, a)), t instanceof RegExp && (t = oe(t, a));
  var n = ce(e, t, a);
  return n && {
    start: n[0],
    end: n[1],
    pre: a.slice(0, n[0]),
    body: a.slice(n[0] + e.length, n[1]),
    post: a.slice(n[1] + t.length)
  };
}
function oe(e, t) {
  var a = t.match(e);
  return a ? a[0] : null;
}
fe.range = ce;
function ce(e, t, a) {
  var n, r, o, l, u, i = a.indexOf(e), s = a.indexOf(t, i + 1), h = i;
  if (i >= 0 && s > 0) {
    for (n = [], o = a.length; h >= 0 && !u; )
      h == i ? (n.push(h), i = a.indexOf(e, h + 1)) : n.length == 1 ? u = [n.pop(), s] : (r = n.pop(), r < o && (o = r, l = s), s = a.indexOf(t, h + 1)), h = i < s && i >= 0 ? i : s;
    n.length && (u = [o, l]);
  }
  return u;
}
var Oe = pe;
function pe(e, t, a) {
  e instanceof RegExp && (e = ue(e, a)), t instanceof RegExp && (t = ue(t, a));
  var n = ve(e, t, a);
  return n && {
    start: n[0],
    end: n[1],
    pre: a.slice(0, n[0]),
    body: a.slice(n[0] + e.length, n[1]),
    post: a.slice(n[1] + t.length)
  };
}
function ue(e, t) {
  var a = t.match(e);
  return a ? a[0] : null;
}
pe.range = ve;
function ve(e, t, a) {
  var n, r, o, l, u, i = a.indexOf(e), s = a.indexOf(t, i + 1), h = i;
  if (i >= 0 && s > 0) {
    if (e === t)
      return [i, s];
    for (n = [], o = a.length; h >= 0 && !u; )
      h == i ? (n.push(h), i = a.indexOf(e, h + 1)) : n.length == 1 ? u = [n.pop(), s] : (r = n.pop(), r < o && (o = r, l = s), s = a.indexOf(t, h + 1)), h = i < s && i >= 0 ? i : s;
    n.length && (u = [o, l]);
  }
  return u;
}
var ke = Oe, Be = de;
function de(e, t, a) {
  var n = e;
  return Ne(e, t).reduce(function(r, o) {
    return r.replace(o.functionIdentifier + "(" + o.matches.body + ")", Pe(o.matches.body, o.functionIdentifier, a, n, t));
  }, e);
}
function Ne(e, t) {
  var a = [], n = typeof t == "string" ? new RegExp("\\b(" + t + ")\\(") : t;
  do {
    var r = n.exec(e);
    if (!r)
      return a;
    if (r[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + t);
    var o = r[1], l = r.index, u = ke("(", ")", e.substring(l));
    if (!u || u.start !== r[0].length - 1)
      throw new SyntaxError(o + "(): missing closing ')' in the value '" + e + "'");
    a.push({ matches: u, functionIdentifier: o }), e = u.post;
  } while (n.test(e));
  return a;
}
function Pe(e, t, a, n, r) {
  return a(de(e, r, a), t, n);
}
var E = function(e) {
  this.value = e;
};
E.math = {
  isDegree: !0,
  // mode of calculator
  acos: function(e) {
    return E.math.isDegree ? 180 / Math.PI * Math.acos(e) : Math.acos(e);
  },
  add: function(e, t) {
    return e + t;
  },
  asin: function(e) {
    return E.math.isDegree ? 180 / Math.PI * Math.asin(e) : Math.asin(e);
  },
  atan: function(e) {
    return E.math.isDegree ? 180 / Math.PI * Math.atan(e) : Math.atan(e);
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
    var a = 1, n = e - t, r = t;
    r < n && (r = n, n = t);
    for (var o = r + 1; o <= e; o++)
      a *= o;
    return a / E.math.fact(n);
  },
  changeSign: function(e) {
    return -e;
  },
  cos: function(e) {
    return E.math.isDegree && (e = E.math.toRadian(e)), Math.cos(e);
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
    for (var t = 1, a = 2; a <= e; a++)
      t *= a;
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
    for (var a = 1, n = Math.floor(e) - Math.floor(t) + 1; n <= Math.floor(e); n++)
      a *= n;
    return a;
  },
  Pi: function(e, t, a) {
    for (var n = 1, r = e; r <= t; r++)
      n *= Number(a.postfixEval({
        n: r
      }));
    return n;
  },
  pow10x: function(e) {
    for (var t = 1; e--; )
      t *= 10;
    return t;
  },
  sigma: function(e, t, a) {
    for (var n = 0, r = e; r <= t; r++)
      n += Number(a.postfixEval({
        n: r
      }));
    return n;
  },
  sin: function(e) {
    return E.math.isDegree && (e = E.math.toRadian(e)), Math.sin(e);
  },
  sinh: function(e) {
    return (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e)) / 2;
  },
  sub: function(e, t) {
    return e - t;
  },
  tan: function(e) {
    return E.math.isDegree && (e = E.math.toRadian(e)), Math.tan(e);
  },
  tanh: function(e) {
    return E.sinha(e) / E.cosha(e);
  },
  toRadian: function(e) {
    return e * Math.PI / 180;
  },
  and: function(e, t) {
    return e & t;
  }
};
E.Exception = function(e) {
  this.message = e;
};
var Se = E, f = Se;
function b(e, t) {
  for (var a = 0; a < e.length; a++)
    e[a] += t;
  return e;
}
var P = [
  { token: "sin", show: "sin", type: 0, value: f.math.sin },
  { token: "cos", show: "cos", type: 0, value: f.math.cos },
  { token: "tan", show: "tan", type: 0, value: f.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: f.math.P },
  { token: "C", show: "C", type: 10, value: f.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: f.math.asin },
  { token: "acos", show: "acos", type: 0, value: f.math.acos },
  { token: "atan", show: "atan", type: 0, value: f.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: f.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: f.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: f.math.div },
  { token: "!", show: "!", type: 7, value: f.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: f.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: f.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: f.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: f.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: f.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: f.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: f.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: f.math.add },
  { token: "-", show: "-", type: 9, value: f.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: f.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: f.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: f.math.and }
], V = {
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
for (var j = 0; j < P.length; j++)
  P[j].precedence = V[P[j].type];
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
}, De = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, A = {}, L = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, Ie = {
  1: !0
}, _ = [
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
function Re(e, t, a, n) {
  for (var r = 0; r < n; r++)
    if (e[a + r] !== t[r])
      return !1;
  return !0;
}
f.tokenTypes = {
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
f.addToken = function(e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t].token.length, n = -1;
    e[t].type === f.tokenTypes.FUNCTION_WITH_N_ARGS && e[t].numberOfArguments === void 0 && (e[t].numberOfArguments = 2), _[a] = _[a] || [];
    for (var r = 0; r < _[a].length; r++)
      if (e[t].token === _[a][r]) {
        n = ye(_[a][r], P);
        break;
      }
    n === -1 ? (P.push(e[t]), e[t].precedence = V[e[t].type], _.length <= e[t].token.length && (_[e[t].token.length] = []), _[e[t].token.length].push(e[t].token)) : (P[n] = e[t], e[t].precedence = V[e[t].type]);
  }
};
function ye(e, t) {
  for (var a = 0; a < t.length; a++)
    if (t[a].token === e)
      return a;
  return -1;
}
function qe(e) {
  for (var t = [], a = e.length, n, r, o, l = 0; l < a; l++)
    if (!(l < a - 1 && e[l] === " " && e[l + 1] === " ")) {
      for (n = "", r = e.length - l > _.length - 2 ? _.length - 1 : e.length - l; r > 0; r--)
        if (_[r] !== void 0)
          for (o = 0; o < _[r].length; o++)
            Re(e, _[r][o], l, r) && (n = _[r][o], o = _[r].length, r = 0);
      if (l += n.length - 1, n === "")
        throw new f.Exception("Can't understand after " + e.slice(l));
      t.push(P[ye(n, P)]);
    }
  return t;
}
var Te = {
  value: f.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, z = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, W = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
f.lex = function(e, t) {
  var a = [W], n = [], r = e, o = x, l = 0, u = A, i = "", s;
  typeof t < "u" && f.addToken(t);
  var h = {}, p = qe(r);
  for (s = 0; s < p.length; s++) {
    var d = p[s];
    if (d.type === 14) {
      if (s > 0 && s < p.length - 1 && p[s + 1].type === 1 && (p[s - 1].type === 1 || p[s - 1].type === 6))
        throw new f.Exception("Unexpected Space");
      continue;
    }
    var C = d.token, c = d.type, m = d.value, F = d.precedence, g = d.show, v = a[a.length - 1], y;
    for (y = n.length; y-- && n[y] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(c) !== -1) {
        if (o[c] !== !0)
          throw new f.Exception(C + " is not allowed after " + i);
        a.push(z), o = $, u = L, n.pop();
      }
    if (o[c] !== !0)
      throw new f.Exception(C + " is not allowed after " + i);
    if (u[c] === !0 && (c = 2, m = f.math.mul, g = "&times;", F = 3, s = s - 1), h = {
      value: m,
      type: c,
      pre: F,
      show: g,
      numberOfArguments: d.numberOfArguments
    }, c === 0)
      o = x, u = A, b(n, 2), a.push(h), p[s + 1].type !== 4 && (a.push(W), n.push(2));
    else if (c === 1)
      v.type === 1 ? (v.value += m, b(n, 1)) : a.push(h), o = $, u = De;
    else if (c === 2)
      o = x, u = A, b(n, 2), a.push(h);
    else if (c === 3)
      a.push(h), o = $, u = L;
    else if (c === 4)
      b(n, 1), l++, o = x, u = A, a.push(h);
    else if (c === 5) {
      if (!l)
        throw new f.Exception("Closing parenthesis are more than opening one, wait What!!!");
      l--, o = $, u = L, a.push(h), b(n, 1);
    } else if (c === 6) {
      if (v.hasDec)
        throw new f.Exception("Two decimals are not allowed in one number");
      v.type !== 1 && (v = {
        value: 0,
        type: 1,
        pre: 0
      }, a.push(v)), o = Ie, b(n, 1), u = A, v.value += m, v.hasDec = !0;
    } else
      c === 7 && (o = $, u = L, b(n, 1), a.push(h));
    c === 8 ? (o = x, u = A, b(n, d.numberOfArguments + 2), a.push(h), p[s + 1].type !== 4 && (a.push(W), n.push(d.numberOfArguments + 2))) : c === 9 ? (v.type === 9 ? v.value === f.math.add ? (v.value = m, v.show = g, b(n, 1)) : v.value === f.math.sub && g === "-" && (v.value = f.math.add, v.show = "+", b(n, 1)) : v.type !== 5 && v.type !== 7 && v.type !== 1 && v.type !== 3 && v.type !== 13 ? C === "-" && (o = x, u = A, b(n, 2).push(2), a.push(Te), a.push(W)) : (a.push(h), b(n, 2)), o = x, u = A) : c === 10 ? (o = x, u = A, b(n, 2), a.push(h)) : c === 11 ? (o = x, u = A, a.push(h)) : c === 12 ? (o = x, u = A, b(n, 6), a.push(h), p[s + 1].type !== 4 && (a.push(W), n.push(6))) : c === 13 && (o = $, u = L, a.push(h)), b(n, -1), i = C;
  }
  for (y = n.length; y--; )
    a.push(z);
  if (o[5] !== !0)
    throw new f.Exception("complete the expression");
  for (; l--; )
    a.push(z);
  return a.push(z), new f(a);
};
var $e = f, ee = $e;
ee.prototype.toPostfix = function() {
  for (var e = [], t, a, n, r, o, l = [{ value: "(", type: 4, pre: 0 }], u = this.value, i = 1; i < u.length; i++)
    if (u[i].type === 1 || u[i].type === 3 || u[i].type === 13)
      u[i].type === 1 && (u[i].value = Number(u[i].value)), e.push(u[i]);
    else if (u[i].type === 4)
      l.push(u[i]);
    else if (u[i].type === 5)
      for (; (a = l.pop()).type !== 4; )
        e.push(a);
    else if (u[i].type === 11) {
      for (; (a = l.pop()).type !== 4; )
        e.push(a);
      l.push(a);
    } else {
      t = u[i], r = t.pre, o = l[l.length - 1], n = o.pre;
      var s = o.value == "Math.pow" && t.value == "Math.pow";
      if (r > n)
        l.push(t);
      else {
        for (; n >= r && !s || s && r < n; )
          a = l.pop(), o = l[l.length - 1], e.push(a), n = o.pre, s = t.value == "Math.pow" && o.value == "Math.pow";
        l.push(t);
      }
    }
  return new ee(e);
};
var Le = ee, H = Le;
H.prototype.postfixEval = function(e) {
  e = e || {}, e.PI = Math.PI, e.E = Math.E;
  for (var t = [], a, n, r, o = this.value, l = typeof e.n < "u", u = 0; u < o.length; u++)
    if (o[u].type === 1)
      t.push({ value: o[u].value, type: 1 });
    else if (o[u].type === 3)
      t.push({ value: e[o[u].value], type: 1 });
    else if (o[u].type === 0)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(o[u]) : t[t.length - 1].value = o[u].value(t[t.length - 1].value);
    else if (o[u].type === 7)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(o[u]) : t[t.length - 1].value = o[u].value(t[t.length - 1].value);
    else if (o[u].type === 8) {
      for (var i = [], s = 0; s < o[u].numberOfArguments; s++)
        i.push(t.pop().value);
      t.push({ type: 1, value: o[u].value.apply(o[u], i.reverse()) });
    } else
      o[u].type === 10 ? (a = t.pop(), n = t.pop(), typeof n.type > "u" ? (n.value = n.concat(a), n.value.push(o[u]), t.push(n)) : typeof a.type > "u" ? (a.unshift(n), a.push(o[u]), t.push(a)) : t.push({ type: 1, value: o[u].value(n.value, a.value) })) : o[u].type === 2 || o[u].type === 9 ? (a = t.pop(), n = t.pop(), typeof n.type > "u" ? (n = n.concat(a), n.push(o[u]), t.push(n)) : typeof a.type > "u" ? (a.unshift(n), a.push(o[u]), t.push(a)) : t.push({ type: 1, value: o[u].value(n.value, a.value) })) : o[u].type === 12 ? (a = t.pop(), typeof a.type < "u" && (a = [a]), n = t.pop(), r = t.pop(), t.push({ type: 1, value: o[u].value(r.value, n.value, new H(a)) })) : o[u].type === 13 && (l ? t.push({ value: e[o[u].value], type: 3 }) : t.push([o[u]]));
  if (t.length > 1)
    throw new H.Exception("Uncaught Syntax error");
  return t[0].value > 1e15 ? "Infinity" : parseFloat(t[0].value.toFixed(15));
};
H.eval = function(e, t, a) {
  return typeof t > "u" ? this.lex(e).toPostfix().postfixEval() : typeof a > "u" ? typeof t.length < "u" ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(a);
};
var We = H, me = We;
me.prototype.formulaEval = function() {
  for (var e, t, a, n = [], r = this.value, o = 0; o < r.length; o++)
    r[o].type === 1 || r[o].type === 3 ? n.push({ value: r[o].type === 3 ? r[o].show : r[o].value, type: 1 }) : r[o].type === 13 ? n.push({ value: r[o].show, type: 1 }) : r[o].type === 0 ? n[n.length - 1] = { value: r[o].show + (r[o].show != "-" ? "(" : "") + n[n.length - 1].value + (r[o].show != "-" ? ")" : ""), type: 0 } : r[o].type === 7 ? n[n.length - 1] = { value: (n[n.length - 1].type != 1 ? "(" : "") + n[n.length - 1].value + (n[n.length - 1].type != 1 ? ")" : "") + r[o].show, type: 7 } : r[o].type === 10 ? (e = n.pop(), t = n.pop(), r[o].show === "P" || r[o].show === "C" ? n.push({ value: "<sup>" + t.value + "</sup>" + r[o].show + "<sub>" + e.value + "</sub>", type: 10 }) : n.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + "<sup>" + e.value + "</sup>", type: 1 })) : r[o].type === 2 || r[o].type === 9 ? (e = n.pop(), t = n.pop(), n.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + r[o].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""), type: r[o].type })) : r[o].type === 12 && (e = n.pop(), t = n.pop(), a = n.pop(), n.push({ value: r[o].show + "(" + a.value + "," + t.value + "," + e.value + ")", type: 12 }));
  return n[0].value;
};
var He = me, je = xe, ze = Be, Ge = He, Ue = 100, Xe = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, X, Ke = Ye;
function Ye(e, t) {
  X = 0, t = Math.pow(10, t === void 0 ? 5 : t), e = e.replace(/\n+/g, " ");
  function a(r, o, l) {
    if (X++ > Ue)
      throw X = 0, new Error("Call stack overflow for " + l);
    if (r === "")
      throw new Error(o + "(): '" + l + "' must contain a non-whitespace string");
    r = n(r, l);
    var u = Ze(r);
    if (u.length > 1 || r.indexOf("var(") > -1)
      return o + "(" + r + ")";
    var i = u[0] || "";
    i === "%" && (r = r.replace(/\b[0-9\.]+%/g, function(p) {
      return parseFloat(p.slice(0, -1)) * 0.01;
    }));
    var s = r.replace(new RegExp(i, "gi"), ""), h;
    try {
      h = Ge.eval(s);
    } catch {
      return o + "(" + r + ")";
    }
    return i === "%" && (h *= 100), (o.length || i === "%") && (h = Math.round(h * t) / t), h += i, h;
  }
  function n(r, o) {
    r = r.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var l = "", u = r, i; i = Xe.exec(u); ) {
      i[0].index > 0 && (l += u.substring(0, i[0].index));
      var s = je("(", ")", u.substring([0].index));
      if (s.body === "")
        throw new Error("'" + r + "' must contain a non-whitespace string");
      var h = a(s.body, "", o);
      l += s.pre + h, u = s.post;
    }
    return l + u;
  }
  return ze(e, /((?:\-[a-z]+\-)?calc)\(/, a);
}
function Ze(e) {
  for (var t = [], a = [], n = /[\.0-9]([%a-z]+)/gi, r = n.exec(e); r; )
    !r || !r[1] || (a.indexOf(r[1].toLowerCase()) === -1 && (t.push(r[1]), a.push(r[1].toLowerCase())), r = n.exec(e));
  return t;
}
const K = /* @__PURE__ */ _e(Ke);
var ie = "__react_svg_text_measurement_id";
function Je(e, t) {
  try {
    var a = document.getElementById(ie);
    if (!a) {
      var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      n.setAttribute("aria-hidden", "true"), n.style.width = "0", n.style.height = "0", n.style.position = "absolute", n.style.top = "-100%", n.style.left = "-100%", a = document.createElementNS("http://www.w3.org/2000/svg", "text"), a.setAttribute("id", ie), n.appendChild(a), document.body.appendChild(n);
    }
    return Object.assign(a.style, t), a.textContent = e, a.getComputedTextLength();
  } catch {
    return null;
  }
}
const le = Ce(Je, function(e, t) {
  return e + "_" + JSON.stringify(t);
});
var Qe = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function Ve(e, t) {
  if (e == null)
    return {};
  var a = {}, n = Object.keys(e), r, o;
  for (o = 0; o < n.length; o++)
    r = n[o], !(t.indexOf(r) >= 0) && (a[r] = e[r]);
  return a;
}
function Y(e) {
  return typeof e == "number";
}
function se(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function et(e) {
  var t = e.verticalAnchor, a = t === void 0 ? "end" : t, n = e.scaleToFit, r = n === void 0 ? !1 : n, o = e.angle, l = e.width, u = e.lineHeight, i = u === void 0 ? "1em" : u, s = e.capHeight, h = s === void 0 ? "0.71em" : s, p = e.children, d = e.style, C = Ve(e, Qe), c = C.x, m = c === void 0 ? 0 : c, F = C.y, g = F === void 0 ? 0 : F, v = !se(m) || !se(g), y = R.useMemo(function() {
    var M = p == null ? [] : p.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: M.map(function(B) {
        return {
          word: B,
          wordWidth: le(B, d) || 0
        };
      }),
      spaceWidth: le(" ", d) || 0
    };
  }, [p, d]), k = y.wordsWithWidth, G = y.spaceWidth, D = R.useMemo(function() {
    return v ? [] : l || r ? k.reduce(function(M, B) {
      var q = B.word, T = B.wordWidth, N = M[M.length - 1];
      if (N && (l == null || r || (N.width || 0) + T + G < l))
        N.words.push(q), N.width = N.width || 0, N.width += T + G;
      else {
        var U = {
          words: [q],
          width: T
        };
        M.push(U);
      }
      return M;
    }, []) : [{
      words: p == null ? [] : p.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [v, l, r, p, k, G]), be = R.useMemo(function() {
    var M = v ? "" : K(a === "start" ? "calc(" + h + ")" : a === "middle" ? "calc(" + (D.length - 1) / 2 + " * -" + i + " + (" + h + " / 2))" : "calc(" + (D.length - 1) + " * -" + i + ")");
    return M;
  }, [v, a, h, D.length, i]), Ee = R.useMemo(function() {
    var M = [];
    if (v)
      return "";
    if (Y(m) && Y(g) && Y(l) && r && D.length > 0) {
      var B = D[0].width || 1, q = r === "shrink-only" ? Math.min(l / B, 1) : l / B, T = q, N = m - q * m, U = g - T * g;
      M.push("matrix(" + q + ", 0, 0, " + T + ", " + N + ", " + U + ")");
    }
    return o && M.push("rotate(" + o + ", " + m + ", " + g + ")"), M.length > 0 ? M.join(" ") : "";
  }, [v, m, g, l, r, D, o]);
  return {
    wordsByLines: D,
    startDy: be,
    transform: Ee
  };
}
var tt = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function te() {
  return te = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, te.apply(this, arguments);
}
function at(e, t) {
  if (e == null)
    return {};
  var a = {}, n = Object.keys(e), r, o;
  for (o = 0; o < n.length; o++)
    r = n[o], !(t.indexOf(r) >= 0) && (a[r] = e[r]);
  return a;
}
var nt = {
  overflow: "visible"
};
function Nt(e) {
  var t = e.dx, a = t === void 0 ? 0 : t, n = e.dy, r = n === void 0 ? 0 : n, o = e.textAnchor, l = o === void 0 ? "start" : o, u = e.innerRef, i = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var s = e.lineHeight, h = s === void 0 ? "1em" : s;
  e.scaleToFit, e.capHeight, e.width;
  var p = at(e, tt), d = p.x, C = d === void 0 ? 0 : d, c = p.fontSize, m = et(e), F = m.wordsByLines, g = m.startDy, v = m.transform;
  return /* @__PURE__ */ w.createElement("svg", {
    ref: u,
    x: a,
    y: r,
    fontSize: c,
    style: nt
  }, F.length > 0 ? /* @__PURE__ */ w.createElement("text", te({
    ref: i,
    transform: v
  }, p, {
    textAnchor: l
  }), F.map(function(y, k) {
    return /* @__PURE__ */ w.createElement("tspan", {
      key: k,
      x: C,
      dy: k === 0 ? g : h
    }, y.words.join(" "));
  })) : null);
}
function ne(e) {
  delete e.qualitative9;
  let t = {};
  for (const [a, n] of Object.entries(e)) {
    const r = String(a);
    if (r.endsWith("reverse"))
      t = { ...e };
    else {
      let o = r.concat("reverse");
      t[o] = [...n].reverse();
    }
  }
  return { ...t, ...e };
}
const rt = {
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
}, ot = {
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
}, ut = {
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
}, it = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, Pt = it, St = ne(ot), Dt = ne(rt), It = ne(ut);
var ge = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, he = w.createContext && w.createContext(ge), S = function() {
  return S = Object.assign || function(e) {
    for (var t, a = 1, n = arguments.length; a < n; a++) {
      t = arguments[a];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, S.apply(this, arguments);
}, lt = function(e, t) {
  var a = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]]);
  return a;
};
function we(e) {
  return e && e.map(function(t, a) {
    return w.createElement(t.tag, S({
      key: a
    }, t.attr), we(t.child));
  });
}
function Rt(e) {
  return function(t) {
    return w.createElement(st, S({
      attr: S({}, e.attr)
    }, t), we(e.child));
  };
}
function st(e) {
  var t = function(a) {
    var n = e.attr, r = e.size, o = e.title, l = lt(e, ["attr", "size", "title"]), u = r || a.size || "1em", i;
    return a.className && (i = a.className), e.className && (i = (i ? i + " " : "") + e.className), w.createElement("svg", S({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, n, l, {
      className: i,
      style: S(S({
        color: e.color || a.color
      }, a.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && w.createElement("title", null, o), e.children);
  };
  return he !== void 0 ? w.createElement(he.Consumer, null, function(a) {
    return t(a);
  }) : t(ge);
}
const ht = 4.5, qt = (e, t) => {
  if (t) {
    if (Fe.contrast(e, t) < ht)
      switch (e) {
        case "#FFF":
          return "#000";
        case "#000":
          return "#FFF";
        default:
          return e;
      }
    return e;
  }
}, Tt = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep",
  "Curve Basis": "curveBasis"
}, ft = ({
  label: e,
  sliderType: t = "flat",
  size: a = "medium",
  activeColor: n = null,
  section: r = null,
  subsection: o = null,
  fieldName: l,
  updateField: u,
  value: i,
  i: s = null,
  min: h = null,
  max: p = null,
  onClick: d,
  ...C
}) => {
  const [c, m] = R.useState(i);
  let F = () => {
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
    i !== void 0 && i !== c && m(i);
  }, [i]), R.useEffect(() => {
    i !== void 0 && i !== c && u && u(r, o, l, c, s);
  }, [c]);
  const v = (y) => {
    m(!c), d && d(y);
  };
  return /* @__PURE__ */ w.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ w.createElement("label", null, e), /* @__PURE__ */ w.createElement("div", { className: "cove-input__slider" + (a === "small" ? "--small" : a === "large" ? "--large" : "") + g() + (c ? " active" : ""), onClick: v }, /* @__PURE__ */ w.createElement("div", { className: "cove-input__slider-button" }), /* @__PURE__ */ w.createElement("div", { className: "cove-input__slider-track", style: c && n ? { backgroundColor: n } : null }), /* @__PURE__ */ w.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: F(), checked: c || !1, readOnly: !0 })));
};
ft.propTypes = {
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
  Rt as G,
  ft as I,
  Nt as T,
  Ae as a,
  Tt as b,
  wt as c,
  Dt as d,
  _t as e,
  xt as f,
  qt as g,
  re as h,
  At as i,
  bt as j,
  Et as k,
  Bt as l,
  Ft as m,
  kt as n,
  Ct as o,
  ae as p,
  It as q,
  St as r,
  Mt as s,
  Ot as t,
  Pt as u
};
