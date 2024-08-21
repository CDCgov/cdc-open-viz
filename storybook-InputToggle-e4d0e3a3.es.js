import { r as L, R as M } from "./storybook-index-45401197.es.js";
import { g as qn, a as Yn } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { m as Ar } from "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
import { c as xe } from "./storybook-chroma-b564050a.es.js";
import { S as An, r as xr } from "./storybook-transform-e0776740.es.js";
import { P as _ } from "./storybook-index-43433e35.es.js";
import { c as Wt, G as Tr } from "./storybook-Group-ce878ea9.es.js";
import "./storybook-index-4ed993c7.es.js";
function Lo(e, t) {
  let n, r;
  if (t === void 0)
    for (const a of e)
      a != null && (n === void 0 ? a >= a && (n = r = a) : (n > a && (n = a), r < a && (r = a)));
  else {
    let a = -1;
    for (let o of e)
      (o = t(o, ++a, e)) != null && (n === void 0 ? o >= o && (n = r = o) : (n > o && (n = o), r < o && (r = o)));
  }
  return [n, r];
}
var wt = Math.PI, St = 2 * wt, _e = 1e-6, wr = St - _e;
function Mt() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Sr() {
  return new Mt();
}
Mt.prototype = Sr.prototype = {
  constructor: Mt,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, n, r) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
  },
  bezierCurveTo: function(e, t, n, r, a, o) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +a) + "," + (this._y1 = +o);
  },
  arcTo: function(e, t, n, r, a) {
    e = +e, t = +t, n = +n, r = +r, a = +a;
    var o = this._x1, u = this._y1, s = n - e, l = r - t, c = o - e, h = u - t, v = c * c + h * h;
    if (a < 0)
      throw new Error("negative radius: " + a);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (v > _e)
      if (!(Math.abs(h * s - l * c) > _e) || !a)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var b = n - o, D = r - u, m = s * s + l * l, S = b * b + D * D, N = Math.sqrt(m), T = Math.sqrt(v), d = a * Math.tan((wt - Math.acos((m + v - S) / (2 * N * T))) / 2), y = d / T, A = d / N;
        Math.abs(y - 1) > _e && (this._ += "L" + (e + y * c) + "," + (t + y * h)), this._ += "A" + a + "," + a + ",0,0," + +(h * b > c * D) + "," + (this._x1 = e + A * s) + "," + (this._y1 = t + A * l);
      }
  },
  arc: function(e, t, n, r, a, o) {
    e = +e, t = +t, n = +n, o = !!o;
    var u = n * Math.cos(r), s = n * Math.sin(r), l = e + u, c = t + s, h = 1 ^ o, v = o ? r - a : a - r;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + l + "," + c : (Math.abs(this._x1 - l) > _e || Math.abs(this._y1 - c) > _e) && (this._ += "L" + l + "," + c), n && (v < 0 && (v = v % St + St), v > wr ? this._ += "A" + n + "," + n + ",0,1," + h + "," + (e - u) + "," + (t - s) + "A" + n + "," + n + ",0,1," + h + "," + (this._x1 = l) + "," + (this._y1 = c) : v > _e && (this._ += "A" + n + "," + n + ",0," + +(v >= wt) + "," + h + "," + (this._x1 = e + n * Math.cos(a)) + "," + (this._y1 = t + n * Math.sin(a))));
  },
  rect: function(e, t, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function ko(e) {
  return function() {
    return e;
  };
}
var Fo = Math.abs, Io = Math.atan2, Bo = Math.cos, Uo = Math.max, zo = Math.min, Ho = Math.sin, Wo = Math.sqrt, $o = 1e-12, $t = Math.PI, xn = $t / 2, Go = 2 * $t;
function jo(e) {
  return e > 1 ? 0 : e < -1 ? $t : Math.acos(e);
}
function qo(e) {
  return e >= 1 ? xn : e <= -1 ? -xn : Math.asin(e);
}
var Mr = Xn;
function Xn(e, t, n) {
  e instanceof RegExp && (e = Tn(e, n)), t instanceof RegExp && (t = Tn(t, n));
  var r = Vn(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function Tn(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
Xn.range = Vn;
function Vn(e, t, n) {
  var r, a, o, u, s, l = n.indexOf(e), c = n.indexOf(t, l + 1), h = l;
  if (l >= 0 && c > 0) {
    for (r = [], o = n.length; h >= 0 && !s; )
      h == l ? (r.push(h), l = n.indexOf(e, h + 1)) : r.length == 1 ? s = [r.pop(), c] : (a = r.pop(), a < o && (o = a, u = c), c = n.indexOf(t, h + 1)), h = l < c && l >= 0 ? l : c;
    r.length && (s = [o, u]);
  }
  return s;
}
var Cr = Kn;
function Kn(e, t, n) {
  e instanceof RegExp && (e = wn(e, n)), t instanceof RegExp && (t = wn(t, n));
  var r = Zn(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function wn(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
Kn.range = Zn;
function Zn(e, t, n) {
  var r, a, o, u, s, l = n.indexOf(e), c = n.indexOf(t, l + 1), h = l;
  if (l >= 0 && c > 0) {
    if (e === t)
      return [l, c];
    for (r = [], o = n.length; h >= 0 && !s; )
      h == l ? (r.push(h), l = n.indexOf(e, h + 1)) : r.length == 1 ? s = [r.pop(), c] : (a = r.pop(), a < o && (o = a, u = c), c = n.indexOf(t, h + 1)), h = l < c && l >= 0 ? l : c;
    r.length && (s = [o, u]);
  }
  return s;
}
var Or = Cr, Dr = Jn;
function Jn(e, t, n) {
  var r = e;
  return Pr(e, t).reduce(function(a, o) {
    return a.replace(o.functionIdentifier + "(" + o.matches.body + ")", Nr(o.matches.body, o.functionIdentifier, n, r, t));
  }, e);
}
function Pr(e, t) {
  var n = [], r = typeof t == "string" ? new RegExp("\\b(" + t + ")\\(") : t;
  do {
    var a = r.exec(e);
    if (!a)
      return n;
    if (a[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + t);
    var o = a[1], u = a.index, s = Or("(", ")", e.substring(u));
    if (!s || s.start !== a[0].length - 1)
      throw new SyntaxError(o + "(): missing closing ')' in the value '" + e + "'");
    n.push({ matches: s, functionIdentifier: o }), e = s.post;
  } while (r.test(e));
  return n;
}
function Nr(e, t, n, r, a) {
  return n(Jn(e, a, n), t, r);
}
var te = function(e) {
  this.value = e;
};
te.math = {
  isDegree: !0,
  // mode of calculator
  acos: function(e) {
    return te.math.isDegree ? 180 / Math.PI * Math.acos(e) : Math.acos(e);
  },
  add: function(e, t) {
    return e + t;
  },
  asin: function(e) {
    return te.math.isDegree ? 180 / Math.PI * Math.asin(e) : Math.asin(e);
  },
  atan: function(e) {
    return te.math.isDegree ? 180 / Math.PI * Math.atan(e) : Math.atan(e);
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
    var n = 1, r = e - t, a = t;
    a < r && (a = r, r = t);
    for (var o = a + 1; o <= e; o++)
      n *= o;
    return n / te.math.fact(r);
  },
  changeSign: function(e) {
    return -e;
  },
  cos: function(e) {
    return te.math.isDegree && (e = te.math.toRadian(e)), Math.cos(e);
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
    for (var n = 1, r = Math.floor(e) - Math.floor(t) + 1; r <= Math.floor(e); r++)
      n *= r;
    return n;
  },
  Pi: function(e, t, n) {
    for (var r = 1, a = e; a <= t; a++)
      r *= Number(n.postfixEval({
        n: a
      }));
    return r;
  },
  pow10x: function(e) {
    for (var t = 1; e--; )
      t *= 10;
    return t;
  },
  sigma: function(e, t, n) {
    for (var r = 0, a = e; a <= t; a++)
      r += Number(n.postfixEval({
        n: a
      }));
    return r;
  },
  sin: function(e) {
    return te.math.isDegree && (e = te.math.toRadian(e)), Math.sin(e);
  },
  sinh: function(e) {
    return (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e)) / 2;
  },
  sub: function(e, t) {
    return e - t;
  },
  tan: function(e) {
    return te.math.isDegree && (e = te.math.toRadian(e)), Math.tan(e);
  },
  tanh: function(e) {
    return te.sinha(e) / te.cosha(e);
  },
  toRadian: function(e) {
    return e * Math.PI / 180;
  },
  and: function(e, t) {
    return e & t;
  }
};
te.Exception = function(e) {
  this.message = e;
};
var Rr = te, w = Rr;
function Q(e, t) {
  for (var n = 0; n < e.length; n++)
    e[n] += t;
  return e;
}
var ve = [
  { token: "sin", show: "sin", type: 0, value: w.math.sin },
  { token: "cos", show: "cos", type: 0, value: w.math.cos },
  { token: "tan", show: "tan", type: 0, value: w.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: w.math.P },
  { token: "C", show: "C", type: 10, value: w.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: w.math.asin },
  { token: "acos", show: "acos", type: 0, value: w.math.acos },
  { token: "atan", show: "atan", type: 0, value: w.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: w.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: w.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: w.math.div },
  { token: "!", show: "!", type: 7, value: w.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: w.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: w.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: w.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: w.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: w.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: w.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: w.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: w.math.add },
  { token: "-", show: "-", type: 9, value: w.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: w.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: w.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: w.math.and }
], Ct = {
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
for (var Ze = 0; Ze < ve.length; Ze++)
  ve[Ze].precedence = Ct[ve[Ze].type];
var he = {
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
}, De = {
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
}, Lr = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, le = {}, Ie = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, kr = {
  1: !0
}, ne = [
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
function Fr(e, t, n, r) {
  for (var a = 0; a < r; a++)
    if (e[n + a] !== t[a])
      return !1;
  return !0;
}
w.tokenTypes = {
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
w.addToken = function(e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t].token.length, r = -1;
    e[t].type === w.tokenTypes.FUNCTION_WITH_N_ARGS && e[t].numberOfArguments === void 0 && (e[t].numberOfArguments = 2), ne[n] = ne[n] || [];
    for (var a = 0; a < ne[n].length; a++)
      if (e[t].token === ne[n][a]) {
        r = Qn(ne[n][a], ve);
        break;
      }
    r === -1 ? (ve.push(e[t]), e[t].precedence = Ct[e[t].type], ne.length <= e[t].token.length && (ne[e[t].token.length] = []), ne[e[t].token.length].push(e[t].token)) : (ve[r] = e[t], e[t].precedence = Ct[e[t].type]);
  }
};
function Qn(e, t) {
  for (var n = 0; n < t.length; n++)
    if (t[n].token === e)
      return n;
  return -1;
}
function Ir(e) {
  for (var t = [], n = e.length, r, a, o, u = 0; u < n; u++)
    if (!(u < n - 1 && e[u] === " " && e[u + 1] === " ")) {
      for (r = "", a = e.length - u > ne.length - 2 ? ne.length - 1 : e.length - u; a > 0; a--)
        if (ne[a] !== void 0)
          for (o = 0; o < ne[a].length; o++)
            Fr(e, ne[a][o], u, a) && (r = ne[a][o], o = ne[a].length, a = 0);
      if (u += r.length - 1, r === "")
        throw new w.Exception("Can't understand after " + e.slice(u));
      t.push(ve[Qn(r, ve)]);
    }
  return t;
}
var Br = {
  value: w.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, Je = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, Be = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
w.lex = function(e, t) {
  var n = [Be], r = [], a = e, o = he, u = 0, s = le, l = "", c;
  typeof t < "u" && w.addToken(t);
  var h = {}, v = Ir(a);
  for (c = 0; c < v.length; c++) {
    var b = v[c];
    if (b.type === 14) {
      if (c > 0 && c < v.length - 1 && v[c + 1].type === 1 && (v[c - 1].type === 1 || v[c - 1].type === 6))
        throw new w.Exception("Unexpected Space");
      continue;
    }
    var D = b.token, m = b.type, S = b.value, N = b.precedence, T = b.show, d = n[n.length - 1], y;
    for (y = r.length; y-- && r[y] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(m) !== -1) {
        if (o[m] !== !0)
          throw new w.Exception(D + " is not allowed after " + l);
        n.push(Je), o = De, s = Ie, r.pop();
      }
    if (o[m] !== !0)
      throw new w.Exception(D + " is not allowed after " + l);
    if (s[m] === !0 && (m = 2, S = w.math.mul, T = "&times;", N = 3, c = c - 1), h = {
      value: S,
      type: m,
      pre: N,
      show: T,
      numberOfArguments: b.numberOfArguments
    }, m === 0)
      o = he, s = le, Q(r, 2), n.push(h), v[c + 1].type !== 4 && (n.push(Be), r.push(2));
    else if (m === 1)
      d.type === 1 ? (d.value += S, Q(r, 1)) : n.push(h), o = De, s = Lr;
    else if (m === 2)
      o = he, s = le, Q(r, 2), n.push(h);
    else if (m === 3)
      n.push(h), o = De, s = Ie;
    else if (m === 4)
      Q(r, 1), u++, o = he, s = le, n.push(h);
    else if (m === 5) {
      if (!u)
        throw new w.Exception("Closing parenthesis are more than opening one, wait What!!!");
      u--, o = De, s = Ie, n.push(h), Q(r, 1);
    } else if (m === 6) {
      if (d.hasDec)
        throw new w.Exception("Two decimals are not allowed in one number");
      d.type !== 1 && (d = {
        value: 0,
        type: 1,
        pre: 0
      }, n.push(d)), o = kr, Q(r, 1), s = le, d.value += S, d.hasDec = !0;
    } else
      m === 7 && (o = De, s = Ie, Q(r, 1), n.push(h));
    m === 8 ? (o = he, s = le, Q(r, b.numberOfArguments + 2), n.push(h), v[c + 1].type !== 4 && (n.push(Be), r.push(b.numberOfArguments + 2))) : m === 9 ? (d.type === 9 ? d.value === w.math.add ? (d.value = S, d.show = T, Q(r, 1)) : d.value === w.math.sub && T === "-" && (d.value = w.math.add, d.show = "+", Q(r, 1)) : d.type !== 5 && d.type !== 7 && d.type !== 1 && d.type !== 3 && d.type !== 13 ? D === "-" && (o = he, s = le, Q(r, 2).push(2), n.push(Br), n.push(Be)) : (n.push(h), Q(r, 2)), o = he, s = le) : m === 10 ? (o = he, s = le, Q(r, 2), n.push(h)) : m === 11 ? (o = he, s = le, n.push(h)) : m === 12 ? (o = he, s = le, Q(r, 6), n.push(h), v[c + 1].type !== 4 && (n.push(Be), r.push(6))) : m === 13 && (o = De, s = Ie, n.push(h)), Q(r, -1), l = D;
  }
  for (y = r.length; y--; )
    n.push(Je);
  if (o[5] !== !0)
    throw new w.Exception("complete the expression");
  for (; u--; )
    n.push(Je);
  return n.push(Je), new w(n);
};
var Ur = w, Ot = Ur;
Ot.prototype.toPostfix = function() {
  for (var e = [], t, n, r, a, o, u = [{ value: "(", type: 4, pre: 0 }], s = this.value, l = 1; l < s.length; l++)
    if (s[l].type === 1 || s[l].type === 3 || s[l].type === 13)
      s[l].type === 1 && (s[l].value = Number(s[l].value)), e.push(s[l]);
    else if (s[l].type === 4)
      u.push(s[l]);
    else if (s[l].type === 5)
      for (; (n = u.pop()).type !== 4; )
        e.push(n);
    else if (s[l].type === 11) {
      for (; (n = u.pop()).type !== 4; )
        e.push(n);
      u.push(n);
    } else {
      t = s[l], a = t.pre, o = u[u.length - 1], r = o.pre;
      var c = o.value == "Math.pow" && t.value == "Math.pow";
      if (a > r)
        u.push(t);
      else {
        for (; r >= a && !c || c && a < r; )
          n = u.pop(), o = u[u.length - 1], e.push(n), r = o.pre, c = t.value == "Math.pow" && o.value == "Math.pow";
        u.push(t);
      }
    }
  return new Ot(e);
};
var zr = Ot, $e = zr;
$e.prototype.postfixEval = function(e) {
  e = e || {}, e.PI = Math.PI, e.E = Math.E;
  for (var t = [], n, r, a, o = this.value, u = typeof e.n < "u", s = 0; s < o.length; s++)
    if (o[s].type === 1)
      t.push({ value: o[s].value, type: 1 });
    else if (o[s].type === 3)
      t.push({ value: e[o[s].value], type: 1 });
    else if (o[s].type === 0)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(o[s]) : t[t.length - 1].value = o[s].value(t[t.length - 1].value);
    else if (o[s].type === 7)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(o[s]) : t[t.length - 1].value = o[s].value(t[t.length - 1].value);
    else if (o[s].type === 8) {
      for (var l = [], c = 0; c < o[s].numberOfArguments; c++)
        l.push(t.pop().value);
      t.push({ type: 1, value: o[s].value.apply(o[s], l.reverse()) });
    } else
      o[s].type === 10 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r.value = r.concat(n), r.value.push(o[s]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(o[s]), t.push(n)) : t.push({ type: 1, value: o[s].value(r.value, n.value) })) : o[s].type === 2 || o[s].type === 9 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r = r.concat(n), r.push(o[s]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(o[s]), t.push(n)) : t.push({ type: 1, value: o[s].value(r.value, n.value) })) : o[s].type === 12 ? (n = t.pop(), typeof n.type < "u" && (n = [n]), r = t.pop(), a = t.pop(), t.push({ type: 1, value: o[s].value(a.value, r.value, new $e(n)) })) : o[s].type === 13 && (u ? t.push({ value: e[o[s].value], type: 3 }) : t.push([o[s]]));
  if (t.length > 1)
    throw new $e.Exception("Uncaught Syntax error");
  return t[0].value > 1e15 ? "Infinity" : parseFloat(t[0].value.toFixed(15));
};
$e.eval = function(e, t, n) {
  return typeof t > "u" ? this.lex(e).toPostfix().postfixEval() : typeof n > "u" ? typeof t.length < "u" ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(n);
};
var Hr = $e, er = Hr;
er.prototype.formulaEval = function() {
  for (var e, t, n, r = [], a = this.value, o = 0; o < a.length; o++)
    a[o].type === 1 || a[o].type === 3 ? r.push({ value: a[o].type === 3 ? a[o].show : a[o].value, type: 1 }) : a[o].type === 13 ? r.push({ value: a[o].show, type: 1 }) : a[o].type === 0 ? r[r.length - 1] = { value: a[o].show + (a[o].show != "-" ? "(" : "") + r[r.length - 1].value + (a[o].show != "-" ? ")" : ""), type: 0 } : a[o].type === 7 ? r[r.length - 1] = { value: (r[r.length - 1].type != 1 ? "(" : "") + r[r.length - 1].value + (r[r.length - 1].type != 1 ? ")" : "") + a[o].show, type: 7 } : a[o].type === 10 ? (e = r.pop(), t = r.pop(), a[o].show === "P" || a[o].show === "C" ? r.push({ value: "<sup>" + t.value + "</sup>" + a[o].show + "<sub>" + e.value + "</sub>", type: 10 }) : r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + "<sup>" + e.value + "</sup>", type: 1 })) : a[o].type === 2 || a[o].type === 9 ? (e = r.pop(), t = r.pop(), r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + a[o].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""), type: a[o].type })) : a[o].type === 12 && (e = r.pop(), t = r.pop(), n = r.pop(), r.push({ value: a[o].show + "(" + n.value + "," + t.value + "," + e.value + ")", type: 12 }));
  return r[0].value;
};
var Wr = er, $r = Mr, Gr = Dr, jr = Wr, qr = 100, Yr = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, vt, Xr = Vr;
function Vr(e, t) {
  vt = 0, t = Math.pow(10, t === void 0 ? 5 : t), e = e.replace(/\n+/g, " ");
  function n(a, o, u) {
    if (vt++ > qr)
      throw vt = 0, new Error("Call stack overflow for " + u);
    if (a === "")
      throw new Error(o + "(): '" + u + "' must contain a non-whitespace string");
    a = r(a, u);
    var s = Kr(a);
    if (s.length > 1 || a.indexOf("var(") > -1)
      return o + "(" + a + ")";
    var l = s[0] || "";
    l === "%" && (a = a.replace(/\b[0-9\.]+%/g, function(v) {
      return parseFloat(v.slice(0, -1)) * 0.01;
    }));
    var c = a.replace(new RegExp(l, "gi"), ""), h;
    try {
      h = jr.eval(c);
    } catch {
      return o + "(" + a + ")";
    }
    return l === "%" && (h *= 100), (o.length || l === "%") && (h = Math.round(h * t) / t), h += l, h;
  }
  function r(a, o) {
    a = a.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var u = "", s = a, l; l = Yr.exec(s); ) {
      l[0].index > 0 && (u += s.substring(0, l[0].index));
      var c = $r("(", ")", s.substring([0].index));
      if (c.body === "")
        throw new Error("'" + a + "' must contain a non-whitespace string");
      var h = n(c.body, "", o);
      u += c.pre + h, s = c.post;
    }
    return u + s;
  }
  return Gr(e, /((?:\-[a-z]+\-)?calc)\(/, n);
}
function Kr(e) {
  for (var t = [], n = [], r = /[\.0-9]([%a-z]+)/gi, a = r.exec(e); a; )
    !a || !a[1] || (n.indexOf(a[1].toLowerCase()) === -1 && (t.push(a[1]), n.push(a[1].toLowerCase())), a = r.exec(e));
  return t;
}
const gt = /* @__PURE__ */ qn(Xr);
var Sn = "__react_svg_text_measurement_id";
function Zr(e, t) {
  try {
    var n = document.getElementById(Sn);
    if (!n) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttribute("aria-hidden", "true"), r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", n = document.createElementNS("http://www.w3.org/2000/svg", "text"), n.setAttribute("id", Sn), r.appendChild(n), document.body.appendChild(r);
    }
    return Object.assign(n.style, t), n.textContent = e, n.getComputedTextLength();
  } catch {
    return null;
  }
}
const Mn = Ar(Zr, function(e, t) {
  return e + "_" + JSON.stringify(t);
});
var Jr = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function Qr(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function yt(e) {
  return typeof e == "number";
}
function Cn(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function ea(e) {
  var t = e.verticalAnchor, n = t === void 0 ? "end" : t, r = e.scaleToFit, a = r === void 0 ? !1 : r, o = e.angle, u = e.width, s = e.lineHeight, l = s === void 0 ? "1em" : s, c = e.capHeight, h = c === void 0 ? "0.71em" : c, v = e.children, b = e.style, D = Qr(e, Jr), m = D.x, S = m === void 0 ? 0 : m, N = D.y, T = N === void 0 ? 0 : N, d = !Cn(S) || !Cn(T), y = L.useMemo(function() {
    var I = v == null ? [] : v.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: I.map(function(E) {
        return {
          word: E,
          wordWidth: Mn(E, b) || 0
        };
      }),
      spaceWidth: Mn(" ", b) || 0
    };
  }, [v, b]), A = y.wordsWithWidth, k = y.spaceWidth, F = L.useMemo(function() {
    return d ? [] : u || a ? A.reduce(function(I, E) {
      var C = E.word, P = E.wordWidth, x = I[I.length - 1];
      if (x && (u == null || a || (x.width || 0) + P + k < u))
        x.words.push(C), x.width = x.width || 0, x.width += P + k;
      else {
        var U = {
          words: [C],
          width: P
        };
        I.push(U);
      }
      return I;
    }, []) : [{
      words: v == null ? [] : v.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [d, u, a, v, A, k]), q = L.useMemo(function() {
    var I = d ? "" : gt(n === "start" ? "calc(" + h + ")" : n === "middle" ? "calc(" + (F.length - 1) / 2 + " * -" + l + " + (" + h + " / 2))" : "calc(" + (F.length - 1) + " * -" + l + ")");
    return I;
  }, [d, n, h, F.length, l]), z = L.useMemo(function() {
    var I = [];
    if (d)
      return "";
    if (yt(S) && yt(T) && yt(u) && a && F.length > 0) {
      var E = F[0].width || 1, C = a === "shrink-only" ? Math.min(u / E, 1) : u / E, P = C, x = S - C * S, U = T - P * T;
      I.push("matrix(" + C + ", 0, 0, " + P + ", " + x + ", " + U + ")");
    }
    return o && I.push("rotate(" + o + ", " + S + ", " + T + ")"), I.length > 0 ? I.join(" ") : "";
  }, [d, S, T, u, a, F, o]);
  return {
    wordsByLines: F,
    startDy: q,
    transform: z
  };
}
var ta = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Dt.apply(this, arguments);
}
function na(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var ra = {
  overflow: "visible"
};
function Yo(e) {
  var t = e.dx, n = t === void 0 ? 0 : t, r = e.dy, a = r === void 0 ? 0 : r, o = e.textAnchor, u = o === void 0 ? "start" : o, s = e.innerRef, l = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var c = e.lineHeight, h = c === void 0 ? "1em" : c;
  e.scaleToFit, e.capHeight, e.width;
  var v = na(e, ta), b = v.x, D = b === void 0 ? 0 : b, m = v.fontSize, S = ea(e), N = S.wordsByLines, T = S.startDy, d = S.transform;
  return /* @__PURE__ */ M.createElement("svg", {
    ref: s,
    x: n,
    y: a,
    fontSize: m,
    style: ra
  }, N.length > 0 ? /* @__PURE__ */ M.createElement("text", Dt({
    ref: l,
    transform: d
  }, v, {
    textAnchor: u
  }), N.map(function(y, A) {
    return /* @__PURE__ */ M.createElement("tspan", {
      key: A,
      x: D,
      dy: A === 0 ? T : h
    }, y.words.join(" "));
  })) : null);
}
function Pt(e, t, n) {
  var r, a, o, u, s;
  t == null && (t = 100);
  function l() {
    var h = Date.now() - u;
    h < t && h >= 0 ? r = setTimeout(l, t - h) : (r = null, n || (s = e.apply(o, a), o = a = null));
  }
  var c = function() {
    o = this, a = arguments, u = Date.now();
    var h = n && !r;
    return r || (r = setTimeout(l, t)), h && (s = e.apply(o, a), o = a = null), s;
  };
  return c.clear = function() {
    r && (clearTimeout(r), r = null);
  }, c.flush = function() {
    r && (s = e.apply(o, a), o = a = null, clearTimeout(r), r = null);
  }, c;
}
Pt.debounce = Pt;
var aa = Pt;
const On = /* @__PURE__ */ qn(aa);
function oa(e) {
  let {
    debounce: t,
    scroll: n,
    polyfill: r,
    offsetSize: a
  } = e === void 0 ? {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
  } : e;
  const o = r || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!o)
    throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [u, s] = L.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  }), l = L.useRef({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: u
  }), c = t ? typeof t == "number" ? t : t.scroll : null, h = t ? typeof t == "number" ? t : t.resize : null, v = L.useRef(!1);
  L.useEffect(() => (v.current = !0, () => void (v.current = !1)));
  const [b, D, m] = L.useMemo(() => {
    const d = () => {
      if (!l.current.element)
        return;
      const {
        left: y,
        top: A,
        width: k,
        height: F,
        bottom: q,
        right: z,
        x: I,
        y: E
      } = l.current.element.getBoundingClientRect(), C = {
        left: y,
        top: A,
        width: k,
        height: F,
        bottom: q,
        right: z,
        x: I,
        y: E
      };
      l.current.element instanceof HTMLElement && a && (C.height = l.current.element.offsetHeight, C.width = l.current.element.offsetWidth), Object.freeze(C), v.current && !ua(l.current.lastBounds, C) && s(l.current.lastBounds = C);
    };
    return [d, h ? On(d, h) : d, c ? On(d, c) : d];
  }, [s, a, c, h]);
  function S() {
    l.current.scrollContainers && (l.current.scrollContainers.forEach((d) => d.removeEventListener("scroll", m, !0)), l.current.scrollContainers = null), l.current.resizeObserver && (l.current.resizeObserver.disconnect(), l.current.resizeObserver = null);
  }
  function N() {
    l.current.element && (l.current.resizeObserver = new o(m), l.current.resizeObserver.observe(l.current.element), n && l.current.scrollContainers && l.current.scrollContainers.forEach((d) => d.addEventListener("scroll", m, {
      capture: !0,
      passive: !0
    })));
  }
  const T = (d) => {
    !d || d === l.current.element || (S(), l.current.element = d, l.current.scrollContainers = tr(d), N());
  };
  return sa(m, !!n), ia(D), L.useEffect(() => {
    S(), N();
  }, [n, m, D]), L.useEffect(() => S, []), [T, u, b];
}
function ia(e) {
  L.useEffect(() => {
    const t = e;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [e]);
}
function sa(e, t) {
  L.useEffect(() => {
    if (t) {
      const n = e;
      return window.addEventListener("scroll", n, {
        capture: !0,
        passive: !0
      }), () => void window.removeEventListener("scroll", n, !0);
    }
  }, [e, t]);
}
function tr(e) {
  const t = [];
  if (!e || e === document.body)
    return t;
  const {
    overflow: n,
    overflowX: r,
    overflowY: a
  } = window.getComputedStyle(e);
  return [n, r, a].some((o) => o === "auto" || o === "scroll") && t.push(e), [...t, ...tr(e.parentElement)];
}
const la = ["x", "y", "top", "bottom", "left", "right", "width", "height"], ua = (e, t) => la.every((n) => e[n] === t[n]);
function Gt(e) {
  delete e.qualitative9;
  let t = {};
  for (const [n, r] of Object.entries(e)) {
    const a = String(n);
    if (a.endsWith("reverse"))
      t = { ...e };
    else {
      let o = a.concat("reverse");
      t[o] = [...r].reverse();
    }
  }
  return { ...t, ...e };
}
const ca = {
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
}, fa = {
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
}, ha = {
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
}, da = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, Vo = da, Ko = Gt(fa), Zo = Gt(ca), Jo = Gt(ha);
var je = /* @__PURE__ */ function() {
  function e(n) {
    var r = n.x, a = r === void 0 ? 0 : r, o = n.y, u = o === void 0 ? 0 : o;
    this.x = 0, this.y = 0, this.x = a, this.y = u;
  }
  var t = e.prototype;
  return t.value = function() {
    return {
      x: this.x,
      y: this.y
    };
  }, t.toArray = function() {
    return [this.x, this.y];
  }, e;
}();
function pa(e, t) {
  return new je({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function ma(e, t) {
  return new je({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: je,
  subtractPoints: ma,
  sumPoints: pa
}, Symbol.toStringTag, { value: "Module" }));
function ga(e) {
  return !!e && e instanceof Element;
}
function ya(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function Ea(e) {
  return !!e && "createSVGPoint" in e;
}
function ba(e) {
  return !!e && "getScreenCTM" in e;
}
function _a(e) {
  return !!e && "changedTouches" in e;
}
function Aa(e) {
  return !!e && "clientX" in e;
}
function xa(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function Ge() {
  return Ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ge.apply(this, arguments);
}
var Et = {
  x: 0,
  y: 0
};
function Ta(e) {
  if (!e)
    return Ge({}, Et);
  if (_a(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : Ge({}, Et);
  if (Aa(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : Ge({}, Et);
}
function Nt(e, t) {
  if (!e || !t)
    return null;
  var n = Ta(t), r = ya(e) ? e.ownerSVGElement : e, a = ba(r) ? r.getScreenCTM() : null;
  if (Ea(r) && a) {
    var o = r.createSVGPoint();
    return o.x = n.x, o.y = n.y, o = o.matrixTransform(a.inverse()), new je({
      x: o.x,
      y: o.y
    });
  }
  var u = e.getBoundingClientRect();
  return new je({
    x: n.x - u.left - e.clientLeft,
    y: n.y - u.top - e.clientTop
  });
}
function wa(e, t) {
  if (ga(e) && t)
    return Nt(e, t);
  if (xa(e)) {
    var n = e, r = n.target;
    if (r)
      return Nt(r, n);
  }
  return null;
}
const Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: wa,
  touchPoint: Nt
}, Symbol.toStringTag, { value: "Module" }));
var nr = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Dn = M.createContext && M.createContext(nr), ge = globalThis && globalThis.__assign || function() {
  return ge = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ge.apply(this, arguments);
}, Ma = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function rr(e) {
  return e && e.map(function(t, n) {
    return M.createElement(t.tag, ge({
      key: n
    }, t.attr), rr(t.child));
  });
}
function Qo(e) {
  return function(t) {
    return M.createElement(Ca, ge({
      attr: ge({}, e.attr)
    }, t), rr(e.child));
  };
}
function Ca(e) {
  var t = function(n) {
    var r = e.attr, a = e.size, o = e.title, u = Ma(e, ["attr", "size", "title"]), s = a || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), M.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, u, {
      className: l,
      style: ge(ge({
        color: e.color || n.color
      }, n.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && M.createElement("title", null, o), e.children);
  };
  return Dn !== void 0 ? M.createElement(Dn.Consumer, null, function(n) {
    return t(n);
  }) : t(nr);
}
const Oa = 4.5, Da = 3.5, ei = (e, t) => {
  if (t) {
    if (xe.contrast(e, t) < Oa)
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
}, ti = (e, t) => !xe.valid(e) || !xe.valid(t) ? !1 : xe.contrast(e, t) >= Da, ni = (e, t) => !xe.valid(e) || !xe.valid(t) ? !1 : xe.contrast(e, t);
function ar(e) {
  return typeof e == "string" ? new An([[document.querySelector(e)]], [document.documentElement]) : new An([[e]], xr);
}
function Pa(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function ri(e, t) {
  if (e = Pa(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var a = t.getBoundingClientRect();
      return [e.clientX - a.left - t.clientLeft, e.clientY - a.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Rt = { capture: !0, passive: !1 };
function Lt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function ai(e) {
  var t = e.document.documentElement, n = ar(e).on("dragstart.drag", Lt, Rt);
  "onselectstart" in t ? n.on("selectstart.drag", Lt, Rt) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function oi(e, t) {
  var n = e.document.documentElement, r = ar(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Lt, Rt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ii = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep",
  "Curve Basis": "curveBasis"
};
/*! @license DOMPurify 3.1.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.5/LICENSE */
const {
  entries: or,
  setPrototypeOf: Pn,
  isFrozen: Na,
  getPrototypeOf: Ra,
  getOwnPropertyDescriptor: La
} = Object;
let {
  freeze: re,
  seal: se,
  create: ir
} = Object, {
  apply: kt,
  construct: Ft
} = typeof Reflect < "u" && Reflect;
re || (re = function(t) {
  return t;
});
se || (se = function(t) {
  return t;
});
kt || (kt = function(t, n, r) {
  return t.apply(n, r);
});
Ft || (Ft = function(t, n) {
  return new t(...n);
});
const Qe = ie(Array.prototype.forEach), Nn = ie(Array.prototype.pop), Ue = ie(Array.prototype.push), rt = ie(String.prototype.toLowerCase), bt = ie(String.prototype.toString), Rn = ie(String.prototype.match), ze = ie(String.prototype.replace), ka = ie(String.prototype.indexOf), Fa = ie(String.prototype.trim), ue = ie(Object.prototype.hasOwnProperty), ee = ie(RegExp.prototype.test), He = Ia(TypeError);
function ie(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    return kt(e, t, r);
  };
}
function Ia(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ft(e, n);
  };
}
function O(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rt;
  Pn && Pn(e, null);
  let r = t.length;
  for (; r--; ) {
    let a = t[r];
    if (typeof a == "string") {
      const o = n(a);
      o !== a && (Na(t) || (t[r] = o), a = o);
    }
    e[a] = !0;
  }
  return e;
}
function Ba(e) {
  for (let t = 0; t < e.length; t++)
    ue(e, t) || (e[t] = null);
  return e;
}
function Ae(e) {
  const t = ir(null);
  for (const [n, r] of or(e))
    ue(e, n) && (Array.isArray(r) ? t[n] = Ba(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Ae(r) : t[n] = r);
  return t;
}
function et(e, t) {
  for (; e !== null; ) {
    const r = La(e, t);
    if (r) {
      if (r.get)
        return ie(r.get);
      if (typeof r.value == "function")
        return ie(r.value);
    }
    e = Ra(e);
  }
  function n() {
    return null;
  }
  return n;
}
const Ln = re(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), _t = re(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), At = re(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ua = re(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xt = re(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), za = re(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), kn = re(["#text"]), Fn = re(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Tt = re(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), In = re(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), tt = re(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ha = se(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Wa = se(/<%[\w\W]*|[\w\W]*%>/gm), $a = se(/\${[\w\W]*}/gm), Ga = se(/^data-[\-\w.\u00B7-\uFFFF]/), ja = se(/^aria-[\-\w]+$/), sr = se(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), qa = se(/^(?:\w+script|data):/i), Ya = se(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), lr = se(/^html$/i), Xa = se(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Bn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Ha,
  ERB_EXPR: Wa,
  TMPLIT_EXPR: $a,
  DATA_ATTR: Ga,
  ARIA_ATTR: ja,
  IS_ALLOWED_URI: sr,
  IS_SCRIPT_OR_DATA: qa,
  ATTR_WHITESPACE: Ya,
  DOCTYPE_NAME: lr,
  CUSTOM_ELEMENT: Xa
});
const We = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, Va = function() {
  return typeof window > "u" ? null : window;
}, Ka = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const a = "data-tt-policy-suffix";
  n && n.hasAttribute(a) && (r = n.getAttribute(a));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(o, {
      createHTML(u) {
        return u;
      },
      createScriptURL(u) {
        return u;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function ur() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Va();
  const t = (g) => ur(g);
  if (t.version = "3.1.5", t.removed = [], !e || !e.document || e.document.nodeType !== We.document)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, a = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: u,
    Node: s,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: h = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: v,
    DOMParser: b,
    trustedTypes: D
  } = e, m = l.prototype, S = et(m, "cloneNode"), N = et(m, "nextSibling"), T = et(m, "childNodes"), d = et(m, "parentNode");
  if (typeof u == "function") {
    const g = n.createElement("template");
    g.content && g.content.ownerDocument && (n = g.content.ownerDocument);
  }
  let y, A = "";
  const {
    implementation: k,
    createNodeIterator: F,
    createDocumentFragment: q,
    getElementsByTagName: z
  } = n, {
    importNode: I
  } = r;
  let E = {};
  t.isSupported = typeof or == "function" && typeof d == "function" && k && k.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: C,
    ERB_EXPR: P,
    TMPLIT_EXPR: x,
    DATA_ATTR: U,
    ARIA_ATTR: $,
    IS_SCRIPT_OR_DATA: Y,
    ATTR_WHITESPACE: V,
    CUSTOM_ELEMENT: K
  } = Bn;
  let {
    IS_ALLOWED_URI: Z
  } = Bn, R = null;
  const ae = O({}, [...Ln, ..._t, ...At, ...xt, ...kn]);
  let W = null;
  const ye = O({}, [...Fn, ...Tt, ...In, ...tt]);
  let H = Object.seal(ir(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Re = null, it = null, Zt = !0, st = !0, Jt = !1, Qt = !0, Te = !1, lt = !0, Ee = !1, ut = !1, ct = !1, we = !1, qe = !1, Ye = !1, en = !0, tn = !1;
  const pr = "user-content-";
  let ft = !0, Le = !1, Se = {}, Me = null;
  const nn = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let rn = null;
  const an = O({}, ["audio", "video", "img", "source", "image", "track"]);
  let ht = null;
  const on = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Xe = "http://www.w3.org/1998/Math/MathML", Ve = "http://www.w3.org/2000/svg", pe = "http://www.w3.org/1999/xhtml";
  let Ce = pe, dt = !1, pt = null;
  const mr = O({}, [Xe, Ve, pe], bt);
  let ke = null;
  const vr = ["application/xhtml+xml", "text/html"], gr = "text/html";
  let G = null, Oe = null;
  const yr = n.createElement("form"), sn = function(i) {
    return i instanceof RegExp || i instanceof Function;
  }, mt = function() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Oe && Oe === i)) {
      if ((!i || typeof i != "object") && (i = {}), i = Ae(i), ke = // eslint-disable-next-line unicorn/prefer-includes
      vr.indexOf(i.PARSER_MEDIA_TYPE) === -1 ? gr : i.PARSER_MEDIA_TYPE, G = ke === "application/xhtml+xml" ? bt : rt, R = ue(i, "ALLOWED_TAGS") ? O({}, i.ALLOWED_TAGS, G) : ae, W = ue(i, "ALLOWED_ATTR") ? O({}, i.ALLOWED_ATTR, G) : ye, pt = ue(i, "ALLOWED_NAMESPACES") ? O({}, i.ALLOWED_NAMESPACES, bt) : mr, ht = ue(i, "ADD_URI_SAFE_ATTR") ? O(
        Ae(on),
        // eslint-disable-line indent
        i.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        G
        // eslint-disable-line indent
      ) : on, rn = ue(i, "ADD_DATA_URI_TAGS") ? O(
        Ae(an),
        // eslint-disable-line indent
        i.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        G
        // eslint-disable-line indent
      ) : an, Me = ue(i, "FORBID_CONTENTS") ? O({}, i.FORBID_CONTENTS, G) : nn, Re = ue(i, "FORBID_TAGS") ? O({}, i.FORBID_TAGS, G) : {}, it = ue(i, "FORBID_ATTR") ? O({}, i.FORBID_ATTR, G) : {}, Se = ue(i, "USE_PROFILES") ? i.USE_PROFILES : !1, Zt = i.ALLOW_ARIA_ATTR !== !1, st = i.ALLOW_DATA_ATTR !== !1, Jt = i.ALLOW_UNKNOWN_PROTOCOLS || !1, Qt = i.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Te = i.SAFE_FOR_TEMPLATES || !1, lt = i.SAFE_FOR_XML !== !1, Ee = i.WHOLE_DOCUMENT || !1, we = i.RETURN_DOM || !1, qe = i.RETURN_DOM_FRAGMENT || !1, Ye = i.RETURN_TRUSTED_TYPE || !1, ct = i.FORCE_BODY || !1, en = i.SANITIZE_DOM !== !1, tn = i.SANITIZE_NAMED_PROPS || !1, ft = i.KEEP_CONTENT !== !1, Le = i.IN_PLACE || !1, Z = i.ALLOWED_URI_REGEXP || sr, Ce = i.NAMESPACE || pe, H = i.CUSTOM_ELEMENT_HANDLING || {}, i.CUSTOM_ELEMENT_HANDLING && sn(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = i.CUSTOM_ELEMENT_HANDLING.tagNameCheck), i.CUSTOM_ELEMENT_HANDLING && sn(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), i.CUSTOM_ELEMENT_HANDLING && typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Te && (st = !1), qe && (we = !0), Se && (R = O({}, kn), W = [], Se.html === !0 && (O(R, Ln), O(W, Fn)), Se.svg === !0 && (O(R, _t), O(W, Tt), O(W, tt)), Se.svgFilters === !0 && (O(R, At), O(W, Tt), O(W, tt)), Se.mathMl === !0 && (O(R, xt), O(W, In), O(W, tt))), i.ADD_TAGS && (R === ae && (R = Ae(R)), O(R, i.ADD_TAGS, G)), i.ADD_ATTR && (W === ye && (W = Ae(W)), O(W, i.ADD_ATTR, G)), i.ADD_URI_SAFE_ATTR && O(ht, i.ADD_URI_SAFE_ATTR, G), i.FORBID_CONTENTS && (Me === nn && (Me = Ae(Me)), O(Me, i.FORBID_CONTENTS, G)), ft && (R["#text"] = !0), Ee && O(R, ["html", "head", "body"]), R.table && (O(R, ["tbody"]), delete Re.tbody), i.TRUSTED_TYPES_POLICY) {
        if (typeof i.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw He('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof i.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw He('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        y = i.TRUSTED_TYPES_POLICY, A = y.createHTML("");
      } else
        y === void 0 && (y = Ka(D, a)), y !== null && typeof A == "string" && (A = y.createHTML(""));
      re && re(i), Oe = i;
    }
  }, ln = O({}, ["mi", "mo", "mn", "ms", "mtext"]), un = O({}, ["foreignobject", "annotation-xml"]), Er = O({}, ["title", "style", "font", "a", "script"]), cn = O({}, [..._t, ...At, ...Ua]), fn = O({}, [...xt, ...za]), br = function(i) {
    let f = d(i);
    (!f || !f.tagName) && (f = {
      namespaceURI: Ce,
      tagName: "template"
    });
    const p = rt(i.tagName), B = rt(f.tagName);
    return pt[i.namespaceURI] ? i.namespaceURI === Ve ? f.namespaceURI === pe ? p === "svg" : f.namespaceURI === Xe ? p === "svg" && (B === "annotation-xml" || ln[B]) : !!cn[p] : i.namespaceURI === Xe ? f.namespaceURI === pe ? p === "math" : f.namespaceURI === Ve ? p === "math" && un[B] : !!fn[p] : i.namespaceURI === pe ? f.namespaceURI === Ve && !un[B] || f.namespaceURI === Xe && !ln[B] ? !1 : !fn[p] && (Er[p] || !cn[p]) : !!(ke === "application/xhtml+xml" && pt[i.namespaceURI]) : !1;
  }, ce = function(i) {
    Ue(t.removed, {
      element: i
    });
    try {
      i.parentNode.removeChild(i);
    } catch {
      i.remove();
    }
  }, Ke = function(i, f) {
    try {
      Ue(t.removed, {
        attribute: f.getAttributeNode(i),
        from: f
      });
    } catch {
      Ue(t.removed, {
        attribute: null,
        from: f
      });
    }
    if (f.removeAttribute(i), i === "is" && !W[i])
      if (we || qe)
        try {
          ce(f);
        } catch {
        }
      else
        try {
          f.setAttribute(i, "");
        } catch {
        }
  }, hn = function(i) {
    let f = null, p = null;
    if (ct)
      i = "<remove></remove>" + i;
    else {
      const j = Rn(i, /^[\r\n\t ]+/);
      p = j && j[0];
    }
    ke === "application/xhtml+xml" && Ce === pe && (i = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + i + "</body></html>");
    const B = y ? y.createHTML(i) : i;
    if (Ce === pe)
      try {
        f = new b().parseFromString(B, ke);
      } catch {
      }
    if (!f || !f.documentElement) {
      f = k.createDocument(Ce, "template", null);
      try {
        f.documentElement.innerHTML = dt ? A : B;
      } catch {
      }
    }
    const X = f.body || f.documentElement;
    return i && p && X.insertBefore(n.createTextNode(p), X.childNodes[0] || null), Ce === pe ? z.call(f, Ee ? "html" : "body")[0] : Ee ? f.documentElement : X;
  }, dn = function(i) {
    return F.call(
      i.ownerDocument || i,
      i,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, pn = function(i) {
    return i instanceof v && (typeof i.nodeName != "string" || typeof i.textContent != "string" || typeof i.removeChild != "function" || !(i.attributes instanceof h) || typeof i.removeAttribute != "function" || typeof i.setAttribute != "function" || typeof i.namespaceURI != "string" || typeof i.insertBefore != "function" || typeof i.hasChildNodes != "function");
  }, mn = function(i) {
    return typeof s == "function" && i instanceof s;
  }, me = function(i, f, p) {
    E[i] && Qe(E[i], (B) => {
      B.call(t, f, p, Oe);
    });
  }, vn = function(i) {
    let f = null;
    if (me("beforeSanitizeElements", i, null), pn(i))
      return ce(i), !0;
    const p = G(i.nodeName);
    if (me("uponSanitizeElement", i, {
      tagName: p,
      allowedTags: R
    }), i.hasChildNodes() && !mn(i.firstElementChild) && ee(/<[/\w]/g, i.innerHTML) && ee(/<[/\w]/g, i.textContent) || i.nodeType === We.progressingInstruction || lt && i.nodeType === We.comment && ee(/<[/\w]/g, i.data))
      return ce(i), !0;
    if (!R[p] || Re[p]) {
      if (!Re[p] && yn(p) && (H.tagNameCheck instanceof RegExp && ee(H.tagNameCheck, p) || H.tagNameCheck instanceof Function && H.tagNameCheck(p)))
        return !1;
      if (ft && !Me[p]) {
        const B = d(i) || i.parentNode, X = T(i) || i.childNodes;
        if (X && B) {
          const j = X.length;
          for (let oe = j - 1; oe >= 0; --oe) {
            const fe = S(X[oe], !0);
            fe.__removalCount = (i.__removalCount || 0) + 1, B.insertBefore(fe, N(i));
          }
        }
      }
      return ce(i), !0;
    }
    return i instanceof l && !br(i) || (p === "noscript" || p === "noembed" || p === "noframes") && ee(/<\/no(script|embed|frames)/i, i.innerHTML) ? (ce(i), !0) : (Te && i.nodeType === We.text && (f = i.textContent, Qe([C, P, x], (B) => {
      f = ze(f, B, " ");
    }), i.textContent !== f && (Ue(t.removed, {
      element: i.cloneNode()
    }), i.textContent = f)), me("afterSanitizeElements", i, null), !1);
  }, gn = function(i, f, p) {
    if (en && (f === "id" || f === "name") && (p in n || p in yr))
      return !1;
    if (!(st && !it[f] && ee(U, f))) {
      if (!(Zt && ee($, f))) {
        if (!W[f] || it[f]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(yn(i) && (H.tagNameCheck instanceof RegExp && ee(H.tagNameCheck, i) || H.tagNameCheck instanceof Function && H.tagNameCheck(i)) && (H.attributeNameCheck instanceof RegExp && ee(H.attributeNameCheck, f) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(f)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            f === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && ee(H.tagNameCheck, p) || H.tagNameCheck instanceof Function && H.tagNameCheck(p)))
          )
            return !1;
        } else if (!ht[f]) {
          if (!ee(Z, ze(p, V, ""))) {
            if (!((f === "src" || f === "xlink:href" || f === "href") && i !== "script" && ka(p, "data:") === 0 && rn[i])) {
              if (!(Jt && !ee(Y, ze(p, V, "")))) {
                if (p)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, yn = function(i) {
    return i !== "annotation-xml" && Rn(i, K);
  }, En = function(i) {
    me("beforeSanitizeAttributes", i, null);
    const {
      attributes: f
    } = i;
    if (!f)
      return;
    const p = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: W
    };
    let B = f.length;
    for (; B--; ) {
      const X = f[B], {
        name: j,
        namespaceURI: oe,
        value: fe
      } = X, Fe = G(j);
      let J = j === "value" ? fe : Fa(fe);
      if (p.attrName = Fe, p.attrValue = J, p.keepAttr = !0, p.forceKeepAttr = void 0, me("uponSanitizeAttribute", i, p), J = p.attrValue, p.forceKeepAttr || (Ke(j, i), !p.keepAttr))
        continue;
      if (!Qt && ee(/\/>/i, J)) {
        Ke(j, i);
        continue;
      }
      if (lt && ee(/((--!?|])>)|<\/(style|title)/i, J)) {
        Ke(j, i);
        continue;
      }
      Te && Qe([C, P, x], (_n) => {
        J = ze(J, _n, " ");
      });
      const bn = G(i.nodeName);
      if (gn(bn, Fe, J)) {
        if (tn && (Fe === "id" || Fe === "name") && (Ke(j, i), J = pr + J), y && typeof D == "object" && typeof D.getAttributeType == "function" && !oe)
          switch (D.getAttributeType(bn, Fe)) {
            case "TrustedHTML": {
              J = y.createHTML(J);
              break;
            }
            case "TrustedScriptURL": {
              J = y.createScriptURL(J);
              break;
            }
          }
        try {
          oe ? i.setAttributeNS(oe, j, J) : i.setAttribute(j, J), pn(i) ? ce(i) : Nn(t.removed);
        } catch {
        }
      }
    }
    me("afterSanitizeAttributes", i, null);
  }, _r = function g(i) {
    let f = null;
    const p = dn(i);
    for (me("beforeSanitizeShadowDOM", i, null); f = p.nextNode(); )
      me("uponSanitizeShadowNode", f, null), !vn(f) && (f.content instanceof o && g(f.content), En(f));
    me("afterSanitizeShadowDOM", i, null);
  };
  return t.sanitize = function(g) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = null, p = null, B = null, X = null;
    if (dt = !g, dt && (g = "<!-->"), typeof g != "string" && !mn(g))
      if (typeof g.toString == "function") {
        if (g = g.toString(), typeof g != "string")
          throw He("dirty is not a string, aborting");
      } else
        throw He("toString is not a function");
    if (!t.isSupported)
      return g;
    if (ut || mt(i), t.removed = [], typeof g == "string" && (Le = !1), Le) {
      if (g.nodeName) {
        const fe = G(g.nodeName);
        if (!R[fe] || Re[fe])
          throw He("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (g instanceof s)
      f = hn("<!---->"), p = f.ownerDocument.importNode(g, !0), p.nodeType === We.element && p.nodeName === "BODY" || p.nodeName === "HTML" ? f = p : f.appendChild(p);
    else {
      if (!we && !Te && !Ee && // eslint-disable-next-line unicorn/prefer-includes
      g.indexOf("<") === -1)
        return y && Ye ? y.createHTML(g) : g;
      if (f = hn(g), !f)
        return we ? null : Ye ? A : "";
    }
    f && ct && ce(f.firstChild);
    const j = dn(Le ? g : f);
    for (; B = j.nextNode(); )
      vn(B) || (B.content instanceof o && _r(B.content), En(B));
    if (Le)
      return g;
    if (we) {
      if (qe)
        for (X = q.call(f.ownerDocument); f.firstChild; )
          X.appendChild(f.firstChild);
      else
        X = f;
      return (W.shadowroot || W.shadowrootmode) && (X = I.call(r, X, !0)), X;
    }
    let oe = Ee ? f.outerHTML : f.innerHTML;
    return Ee && R["!doctype"] && f.ownerDocument && f.ownerDocument.doctype && f.ownerDocument.doctype.name && ee(lr, f.ownerDocument.doctype.name) && (oe = "<!DOCTYPE " + f.ownerDocument.doctype.name + `>
` + oe), Te && Qe([C, P, x], (fe) => {
      oe = ze(oe, fe, " ");
    }), y && Ye ? y.createHTML(oe) : oe;
  }, t.setConfig = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    mt(g), ut = !0;
  }, t.clearConfig = function() {
    Oe = null, ut = !1;
  }, t.isValidAttribute = function(g, i, f) {
    Oe || mt({});
    const p = G(g), B = G(i);
    return gn(p, B, f);
  }, t.addHook = function(g, i) {
    typeof i == "function" && (E[g] = E[g] || [], Ue(E[g], i));
  }, t.removeHook = function(g) {
    if (E[g])
      return Nn(E[g]);
  }, t.removeHooks = function(g) {
    E[g] && (E[g] = []);
  }, t.removeAllHooks = function() {
    E = {};
  }, t;
}
var si = ur(), Za = /* @__PURE__ */ L.createContext({});
const ot = Za;
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, It.apply(this, arguments);
}
function Ja(e) {
  var t, n, r, a, o = e.className, u = e.x, s = e.y, l = e.dx, c = e.dy, h = e.type, v = h === void 0 ? "elbow" : h, b = e.stroke, D = b === void 0 ? "#222" : b, m = e.pathProps, S = L.useContext(ot), N = u ?? ((t = S.x) != null ? t : 0), T = s ?? ((n = S.y) != null ? n : 0), d = l ?? ((r = S.dx) != null ? r : 0), y = c ?? ((a = S.dy) != null ? a : 0), A = N, k = T, F = N + d, q = T + y;
  if (v === "elbow")
    if (Math.abs(d) <= Math.abs(y)) {
      A = F;
      var z = y > 0 ? 1 : -1;
      k = T + z * Math.abs(A - N);
    } else {
      k = q;
      var I = d > 0 ? 1 : -1;
      A = N + I * Math.abs(k - T);
    }
  return /* @__PURE__ */ M.createElement("path", It({
    className: Wt("visx-annotation-connector", o),
    strokeWidth: 1,
    stroke: D,
    fill: "transparent",
    pointerEvents: "none",
    d: "M" + N + "," + T + (v === "elbow" ? "L" + A + "," + k : "") + "L" + F + "," + q
  }, m));
}
Ja.propTypes = {
  className: _.string,
  type: _.oneOf(["line", "elbow"]),
  stroke: _.string
};
function Ne() {
  return Ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ne.apply(this, arguments);
}
function cr(e) {
  var t = e.anchorLineOrientation, n = e.anchorLineStroke, r = e.verticalAnchor, a = e.horizontalAnchor, o = e.width, u = e.height, s = {
    stroke: n,
    strokeWidth: 2
  };
  return /* @__PURE__ */ M.createElement(M.Fragment, null, t === "horizontal" && r === "start" && /* @__PURE__ */ M.createElement("line", Ne({}, s, {
    x1: 0,
    x2: o,
    y1: 0,
    y2: 0
  })), t === "horizontal" && r === "end" && /* @__PURE__ */ M.createElement("line", Ne({}, s, {
    x1: 0,
    x2: o,
    y1: u,
    y2: u
  })), t === "vertical" && a === "start" && /* @__PURE__ */ M.createElement("line", Ne({}, s, {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: u
  })), t === "vertical" && a === "end" && /* @__PURE__ */ M.createElement("line", Ne({}, s, {
    x1: o,
    x2: o,
    y1: 0,
    y2: u
  })));
}
cr.propTypes = {
  anchorLineOrientation: _.oneOf(["horizontal", "vertical"]).isRequired,
  anchorLineStroke: _.string.isRequired,
  width: _.number.isRequired,
  height: _.number.isRequired
};
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bt.apply(this, arguments);
}
var Un = {
  display: "inline-block"
};
function Qa(e) {
  var t = e.anchorLineStroke, n = t === void 0 ? "#222" : t, r = e.children, a = e.className, o = e.containerStyle, u = e.horizontalAnchor, s = e.resizeObserverPolyfill, l = e.showAnchorLine, c = l === void 0 ? !0 : l, h = e.verticalAnchor, v = e.x, b = e.y, D = oa({
    polyfill: s
  }), m = D[0], S = D[1], N = S.width, T = S.height, d = L.useContext(ot), y = d.x, A = y === void 0 ? 0 : y, k = d.y, F = k === void 0 ? 0 : k, q = d.dx, z = q === void 0 ? 0 : q, I = d.dy, E = I === void 0 ? 0 : I, C = u || (Math.abs(z) < Math.abs(E) ? "middle" : z > 0 ? "start" : "end"), P = h || (Math.abs(z) > Math.abs(E) ? "middle" : E > 0 ? "start" : "end"), x = L.useMemo(function() {
    var U = v ?? A + z, $ = b ?? F + E;
    return C === "middle" && (U -= N / 2), C === "end" && (U -= N), P === "middle" && ($ -= T / 2), P === "end" && ($ -= T), {
      x: U,
      y: $
    };
  }, [v, A, z, b, F, E, C, P, N, T]);
  return /* @__PURE__ */ M.createElement(Tr, {
    top: x.y,
    left: x.x,
    pointerEvents: "none",
    className: Wt("visx-annotationlabel", a)
  }, /* @__PURE__ */ M.createElement("foreignObject", {
    width: N,
    height: T,
    overflow: "visible"
  }, /* @__PURE__ */ M.createElement("div", {
    ref: m,
    style: o ? Bt({}, Un, o) : Un
  }, r)), c && /* @__PURE__ */ M.createElement(cr, {
    anchorLineOrientation: Math.abs(z) > Math.abs(E) ? "vertical" : "horizontal",
    anchorLineStroke: n,
    verticalAnchor: P,
    horizontalAnchor: C,
    width: N,
    height: T
  }));
}
Qa.propTypes = {
  children: _.node
};
var eo = ["className", "x", "y", "stroke", "radius"];
function Ut() {
  return Ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ut.apply(this, arguments);
}
function to(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function no(e) {
  var t = e.className, n = e.x, r = e.y, a = e.stroke, o = a === void 0 ? "#222" : a, u = e.radius, s = u === void 0 ? 16 : u, l = to(e, eo), c = L.useContext(ot);
  return /* @__PURE__ */ M.createElement("circle", Ut({
    className: Wt("visx-annotation-subject", "visx-annotation-subject-circle", t),
    cx: n || c.x,
    cy: r || c.y,
    r: s,
    fill: "transparent",
    pointerEvents: "none",
    stroke: o
  }, l));
}
no.propTypes = {
  className: _.string,
  stroke: _.string,
  radius: _.number
};
function fr(e) {
  var t = e.x, n = e.y, r = e.dx, a = e.dy, o = e.children, u = L.useMemo(function() {
    return {
      x: t,
      y: n,
      dx: r,
      dy: a
    };
  }, [t, n, r, a]);
  return /* @__PURE__ */ M.createElement(ot.Provider, {
    value: u
  }, o);
}
fr.propTypes = {
  children: _.node.isRequired
};
const ro = /* @__PURE__ */ Yn(va), ao = /* @__PURE__ */ Yn(Sa);
var jt = {};
jt.__esModule = !0;
jt.default = oo;
var nt = L;
function oo(e) {
  var t = (0, nt.useState)(e), n = t[0], r = t[1], a = (0, nt.useRef)(null), o = (0, nt.useCallback)(function(u, s) {
    a.current = s || null, r(u);
  }, [r]);
  return (0, nt.useLayoutEffect)(function() {
    a.current && (a.current(n), a.current = null);
  }, [n]), [n, o];
}
var qt = {}, Yt = {};
Yt.__esModule = !0;
Yt.default = io;
function io(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var Xt = {};
Xt.__esModule = !0;
Xt.default = uo;
function so(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = lo(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lo(e, t) {
  if (e) {
    if (typeof e == "string")
      return zn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return zn(e, t);
  }
}
function zn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function uo(e, t) {
  for (var n = e, r = 1 / 0, a = so(t), o; !(o = a()).done; ) {
    var u = o.value, s = Math.sqrt(Math.pow(u.x - e.x, 2) + Math.pow(u.y - e.y, 2));
    s < r && (r = s, n = {
      x: u.x,
      y: u.y
    });
  }
  return n;
}
qt.__esModule = !0;
qt.default = fo;
var Hn = hr(Yt), co = hr(Xt);
function hr(e) {
  return e && e.__esModule ? e : { default: e };
}
function fo(e, t, n) {
  var r, a, o, u;
  return n === void 0 && (n = {}), t.length > 0 ? (0, co.default)(e, t) : {
    x: (0, Hn.default)(e.x, (r = n.xMin) != null ? r : -1 / 0, (a = n.xMax) != null ? a : 1 / 0),
    y: (0, Hn.default)(e.y, (o = n.yMin) != null ? o : -1 / 0, (u = n.yMax) != null ? u : 1 / 0)
  };
}
var Vt = {};
Vt.__esModule = !0;
Vt.default = mo;
var ho = L;
function po(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var r = [], a = e.getTotalLength(), o = 0; o <= a; o += n) {
    var u = e.getPointAtLength(o), s = u.matrixTransform(t);
    r.push(s);
  }
  return r;
}
function mo(e) {
  var t = (0, ho.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return po(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
var Wn = yo, be = L, Pe = ro, $n = ao, vo = Kt(jt), Gn = Kt(qt), go = Kt(Vt);
function Kt(e) {
  return e && e.__esModule ? e : { default: e };
}
function de() {
  return de = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, de.apply(this, arguments);
}
function yo(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, r = n === void 0 ? !1 : n, a = t.snapToPointer, o = a === void 0 ? !0 : a, u = t.onDragEnd, s = t.onDragMove, l = t.onDragStart, c = t.x, h = t.y, v = t.dx, b = t.dy, D = t.isDragging, m = t.restrict, S = m === void 0 ? {} : m, N = t.restrictToPath, T = (0, be.useRef)({
    x: c,
    y: h,
    dx: v,
    dy: b
  }), d = (0, vo.default)({
    x: c,
    y: h,
    dx: v ?? 0,
    dy: b ?? 0,
    isDragging: !1
  }), y = d[0], A = d[1], k = (0, be.useState)(new Pe.Point({
    x: 0,
    y: 0
  })), F = k[0], q = k[1];
  (0, be.useEffect)(function() {
    (T.current.x !== c || T.current.y !== h || T.current.dx !== v || T.current.dy !== b) && (T.current = {
      x: c,
      y: h,
      dx: v,
      dy: b
    }, A(function(P) {
      return de({}, P, {
        x: c,
        y: h,
        dx: v ?? 0,
        dy: b ?? 0
      });
    }));
  }), (0, be.useEffect)(function() {
    D !== void 0 && y.isDragging !== D && A(function(P) {
      return de({}, P, {
        isDragging: D
      });
    });
  }, [y.isDragging, D, A]);
  var z = (0, go.default)(N), I = (0, be.useCallback)(function(P) {
    P.persist(), A(function(x) {
      var U = x.x, $ = U === void 0 ? 0 : U, Y = x.y, V = Y === void 0 ? 0 : Y, K = x.dx, Z = x.dy, R = new Pe.Point({
        x: ($ || 0) + K,
        y: (V || 0) + Z
      }), ae = (0, $n.localPoint)(P) || new Pe.Point({
        x: 0,
        y: 0
      }), W = o ? ae : R, ye = (0, Gn.default)(W, z, S);
      return q((0, Pe.subtractPoints)(R, ae)), {
        isDragging: !0,
        dx: r ? 0 : x.dx,
        dy: r ? 0 : x.dy,
        x: r ? ye.x : ye.x - x.dx,
        y: r ? ye.y : ye.y - x.dy
      };
    }, l && function(x) {
      l(de({}, x, {
        event: P
      }));
    });
  }, [l, r, S, z, A, o]), E = (0, be.useCallback)(function(P) {
    P.persist(), A(function(x) {
      if (!x.isDragging)
        return x;
      var U = x.x, $ = U === void 0 ? 0 : U, Y = x.y, V = Y === void 0 ? 0 : Y, K = (0, $n.localPoint)(P) || new Pe.Point({
        x: 0,
        y: 0
      }), Z = o ? K : (0, Pe.sumPoints)(K, F), R = (0, Gn.default)(Z, z, S);
      return de({}, x, {
        dx: R.x - $,
        dy: R.y - V
      });
    }, s && function(x) {
      x.isDragging && s(de({}, x, {
        event: P
      }));
    });
  }, [A, s, o, F, z, S]), C = (0, be.useCallback)(function(P) {
    P.persist(), A(function(x) {
      return de({}, x, {
        isDragging: !1
      });
    }, u && function(x) {
      u(de({}, x, {
        event: P
      }));
    });
  }, [u, A]);
  return de({}, y, {
    dragEnd: C,
    dragMove: E,
    dragStart: I
  });
}
function at() {
  return at = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, at.apply(this, arguments);
}
var jn = {
  r: 10,
  fill: "transparent",
  stroke: "#777",
  strokeDasharray: "4,2",
  strokeWidth: 2
};
function Eo(e) {
  var t = e.canEditLabel, n = t === void 0 ? !0 : t, r = e.canEditSubject, a = r === void 0 ? !0 : r, o = e.children, u = e.dx, s = u === void 0 ? 0 : u, l = e.dy, c = l === void 0 ? 0 : l, h = e.height, v = e.labelDragHandleProps, b = e.onDragEnd, D = e.onDragMove, m = e.onDragStart, S = e.subjectDragHandleProps, N = e.width, T = e.x, d = T === void 0 ? 0 : T, y = e.y, A = y === void 0 ? 0 : y, k = L.useRef(), F = L.useRef(), q = L.useCallback(function(P) {
    var x = P.event;
    if (m) {
      var U, $, Y, V, K, Z, R, ae;
      m({
        event: x,
        x: d + ((U = ($ = k.current) == null ? void 0 : $.dx) != null ? U : 0),
        y: A + ((Y = (V = k.current) == null ? void 0 : V.dy) != null ? Y : 0),
        dx: s + ((K = (Z = F.current) == null ? void 0 : Z.dx) != null ? K : 0),
        dy: c + ((R = (ae = F.current) == null ? void 0 : ae.dy) != null ? R : 0)
      });
    }
  }, [s, c, m, d, A]), z = L.useCallback(function(P) {
    var x = P.event;
    if (D) {
      var U, $, Y, V, K, Z, R, ae;
      D({
        event: x,
        x: d + ((U = ($ = k.current) == null ? void 0 : $.dx) != null ? U : 0),
        y: A + ((Y = (V = k.current) == null ? void 0 : V.dy) != null ? Y : 0),
        dx: s + ((K = (Z = F.current) == null ? void 0 : Z.dx) != null ? K : 0),
        dy: c + ((R = (ae = F.current) == null ? void 0 : ae.dy) != null ? R : 0)
      });
    }
  }, [s, c, D, d, A]), I = L.useCallback(function(P) {
    var x = P.event;
    if (b) {
      var U, $, Y, V, K, Z, R, ae;
      b({
        event: x,
        x: d + ((U = ($ = k.current) == null ? void 0 : $.dx) != null ? U : 0),
        y: A + ((Y = (V = k.current) == null ? void 0 : V.dy) != null ? Y : 0),
        dx: s + ((K = (Z = F.current) == null ? void 0 : Z.dx) != null ? K : 0),
        dy: c + ((R = (ae = F.current) == null ? void 0 : ae.dy) != null ? R : 0)
      });
    }
  }, [s, c, b, d, A]), E = Wn({
    onDragStart: q,
    onDragMove: z,
    onDragEnd: I,
    x: d,
    y: A
  }), C = Wn({
    onDragStart: q,
    onDragMove: z,
    onDragEnd: I,
    x: s,
    y: c
  });
  return k.current = E, F.current = C, /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(fr, {
    x: d + E.dx,
    y: A + E.dy,
    dx: s + C.dx,
    dy: c + C.dy
  }, o), E.isDragging && /* @__PURE__ */ M.createElement("rect", {
    width: N,
    height: h,
    onMouseMove: E.dragMove,
    onMouseUp: E.dragEnd,
    fill: "transparent"
  }), a && /* @__PURE__ */ M.createElement("circle", at({
    cx: d,
    cy: A,
    transform: "translate(" + E.dx + "," + E.dy + ")",
    onMouseMove: E.dragMove,
    onMouseUp: E.dragEnd,
    onMouseDown: E.dragStart,
    onTouchStart: E.dragStart,
    onTouchMove: E.dragMove,
    onTouchEnd: E.dragEnd,
    cursor: E.isDragging ? "grabbing" : "grab"
  }, jn, S)), C.isDragging && /* @__PURE__ */ M.createElement("rect", {
    width: N,
    height: h,
    onMouseMove: C.dragMove,
    onMouseUp: C.dragEnd,
    fill: "transparent"
  }), n && /* @__PURE__ */ M.createElement("circle", at({
    cx: d + E.dx + s,
    cy: A + E.dy + c,
    transform: "translate(" + C.dx + "," + C.dy + ")",
    onMouseMove: C.dragMove,
    onMouseUp: C.dragEnd,
    onMouseDown: C.dragStart,
    onTouchStart: C.dragStart,
    onTouchMove: C.dragMove,
    onTouchEnd: C.dragEnd,
    cursor: C.isDragging ? "grabbing" : "grab"
  }, jn, v)));
}
Eo.propTypes = {
  width: _.number.isRequired,
  height: _.number.isRequired,
  children: _.node.isRequired,
  canEditLabel: _.bool,
  canEditSubject: _.bool,
  onDragStart: _.func,
  onDragMove: _.func,
  onDragEnd: _.func
};
var bo = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function zt() {
  return zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zt.apply(this, arguments);
}
function _o(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function dr(e) {
  var t = e.id, n = e.markerWidth, r = n === void 0 ? 3 : n, a = e.markerHeight, o = a === void 0 ? 3 : a, u = e.markerUnits, s = u === void 0 ? "userSpaceOnUse" : u, l = e.children, c = _o(e, bo);
  return /* @__PURE__ */ M.createElement("defs", null, /* @__PURE__ */ M.createElement("marker", zt({
    id: t,
    markerWidth: r,
    markerHeight: o,
    markerUnits: s
  }, c), l));
}
dr.propTypes = {
  id: _.string.isRequired,
  size: _.number,
  markerWidth: _.oneOfType([_.string, _.number]),
  markerHeight: _.oneOfType([_.string, _.number]),
  markerUnits: _.string,
  refX: _.oneOfType([_.string, _.number]),
  refY: _.oneOfType([_.string, _.number]),
  strokeWidth: _.number,
  children: _.node.isRequired
};
var Ao = ["id", "size", "strokeWidth"];
function Ht() {
  return Ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ht.apply(this, arguments);
}
function xo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function li(e) {
  var t = e.id, n = e.size, r = n === void 0 ? 9 : n, a = e.strokeWidth, o = a === void 0 ? 1 : a, u = xo(e, Ao), s = r + o * 2, l = r, c = s / 2, h = "0 0, " + r + " " + r / 2 + ", 0 " + r;
  return /* @__PURE__ */ M.createElement(dr, Ht({
    id: t,
    markerWidth: s,
    markerHeight: s,
    refX: l,
    refY: c,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: o
  }, u), /* @__PURE__ */ M.createElement("g", {
    transform: "translate(" + o + ", " + o + ")"
  }, /* @__PURE__ */ M.createElement("polyline", {
    points: h
  })));
}
const To = ({
  label: e,
  sliderType: t = "flat",
  size: n = "medium",
  activeColor: r = null,
  section: a = null,
  subsection: o = null,
  fieldName: u,
  updateField: s,
  value: l,
  i: c = null,
  min: h = null,
  max: v = null,
  onClick: b,
  ...D
}) => {
  const [m, S] = L.useState(l);
  let N = () => {
    let y = "";
    return a && (y += a + "-"), o && (y += o + "-"), u && (y += u), y;
  };
  const T = () => ({
    flat: " slider--flat",
    block: " slider--block",
    pill: " slider--pill",
    "3d": " slider--3d"
  })[t] || "";
  L.useEffect(() => {
    l !== void 0 && l !== m && S(l);
  }, [l]), L.useEffect(() => {
    l !== void 0 && l !== m && s && s(a, o, u, m, c);
  }, [m]);
  const d = (y) => {
    S(!m), b && b(y);
  };
  return /* @__PURE__ */ M.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ M.createElement("label", null, e), /* @__PURE__ */ M.createElement("div", { className: "cove-input__slider" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + T() + (m ? " active" : ""), onClick: d }, /* @__PURE__ */ M.createElement("div", { className: "cove-input__slider-button" }), /* @__PURE__ */ M.createElement("div", { className: "cove-input__slider-track", style: m && r ? { backgroundColor: r } : null }), /* @__PURE__ */ M.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: N(), checked: m || !1, readOnly: !0 })));
};
To.propTypes = {
  /** Add label to the input field */
  label: _.string,
  /** Select the preferred display style of the slider */
  sliderType: _.oneOf(["flat", "block", "pill", "3d"]),
  /** Select the preferred size of the slider */
  size: _.oneOf(["small", "medium", "large"]),
  /** Select the preferred color for the slider when active */
  activeColor: _.string,
  /** Parent key value of nested target config option
   *
   * (optional)*/
  section: _.string,
  /** Child key value of nested target config option
   *
   * (optional, requires `section` value)*/
  subsection: _.string,
  /** Key value of targeted config option */
  fieldName: _.string,
  /** Prop drill down of the updateField function */
  updateField: _.func,
  /** Current value of the input, usually the current config option value */
  stateValue: _.object
};
export {
  fr as A,
  Io as B,
  Ja as C,
  qo as D,
  Eo as E,
  jo as F,
  Qo as G,
  Qa as H,
  To as I,
  Uo as J,
  Jo as K,
  Ko as L,
  li as M,
  Vo as N,
  je as P,
  Yo as T,
  Sr as a,
  ri as b,
  ko as c,
  ar as d,
  ai as e,
  pa as f,
  no as g,
  si as h,
  ii as i,
  ei as j,
  ti as k,
  wa as l,
  ni as m,
  Zo as n,
  Lo as o,
  $t as p,
  Bo as q,
  Ho as r,
  ma as s,
  Go as t,
  xn as u,
  $o as v,
  Wo as w,
  zo as x,
  oi as y,
  Fo as z
};
