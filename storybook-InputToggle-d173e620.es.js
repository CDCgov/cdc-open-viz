import { r as L, R as C } from "./storybook-index-45401197.es.js";
import { g as $n, a as jn } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { m as yr } from "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
import { c as nt } from "./storybook-chroma-b564050a.es.js";
import { P as _ } from "./storybook-index-43433e35.es.js";
import { c as zt, G as Er } from "./storybook-Group-e6c0d0df.es.js";
import "./storybook-index-4ed993c7.es.js";
var wt = Math.PI, Mt = 2 * wt, _e = 1e-6, br = Mt - _e;
function Ct() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function _r() {
  return new Ct();
}
Ct.prototype = _r.prototype = {
  constructor: Ct,
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
        var b = n - o, D = r - u, m = s * s + l * l, M = b * b + D * D, N = Math.sqrt(m), T = Math.sqrt(v), d = a * Math.tan((wt - Math.acos((m + v - M) / (2 * N * T))) / 2), y = d / T, A = d / N;
        Math.abs(y - 1) > _e && (this._ += "L" + (e + y * c) + "," + (t + y * h)), this._ += "A" + a + "," + a + ",0,0," + +(h * b > c * D) + "," + (this._x1 = e + A * s) + "," + (this._y1 = t + A * l);
      }
  },
  arc: function(e, t, n, r, a, o) {
    e = +e, t = +t, n = +n, o = !!o;
    var u = n * Math.cos(r), s = n * Math.sin(r), l = e + u, c = t + s, h = 1 ^ o, v = o ? r - a : a - r;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + l + "," + c : (Math.abs(this._x1 - l) > _e || Math.abs(this._y1 - c) > _e) && (this._ += "L" + l + "," + c), n && (v < 0 && (v = v % Mt + Mt), v > br ? this._ += "A" + n + "," + n + ",0,1," + h + "," + (e - u) + "," + (t - s) + "A" + n + "," + n + ",0,1," + h + "," + (this._x1 = l) + "," + (this._y1 = c) : v > _e && (this._ += "A" + n + "," + n + ",0," + +(v >= wt) + "," + h + "," + (this._x1 = e + n * Math.cos(a)) + "," + (this._y1 = t + n * Math.sin(a))));
  },
  rect: function(e, t, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Co(e) {
  return function() {
    return e;
  };
}
var Oo = Math.abs, So = Math.atan2, Do = Math.cos, Po = Math.max, No = Math.min, Ro = Math.sin, Lo = Math.sqrt, ko = 1e-12, Ht = Math.PI, bn = Ht / 2, Fo = 2 * Ht;
function Io(e) {
  return e > 1 ? 0 : e < -1 ? Ht : Math.acos(e);
}
function Bo(e) {
  return e >= 1 ? bn : e <= -1 ? -bn : Math.asin(e);
}
var Ar = Gn;
function Gn(e, t, n) {
  e instanceof RegExp && (e = _n(e, n)), t instanceof RegExp && (t = _n(t, n));
  var r = qn(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function _n(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
Gn.range = qn;
function qn(e, t, n) {
  var r, a, o, u, s, l = n.indexOf(e), c = n.indexOf(t, l + 1), h = l;
  if (l >= 0 && c > 0) {
    for (r = [], o = n.length; h >= 0 && !s; )
      h == l ? (r.push(h), l = n.indexOf(e, h + 1)) : r.length == 1 ? s = [r.pop(), c] : (a = r.pop(), a < o && (o = a, u = c), c = n.indexOf(t, h + 1)), h = l < c && l >= 0 ? l : c;
    r.length && (s = [o, u]);
  }
  return s;
}
var xr = Yn;
function Yn(e, t, n) {
  e instanceof RegExp && (e = An(e, n)), t instanceof RegExp && (t = An(t, n));
  var r = Xn(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function An(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
Yn.range = Xn;
function Xn(e, t, n) {
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
var Tr = xr, wr = Vn;
function Vn(e, t, n) {
  var r = e;
  return Mr(e, t).reduce(function(a, o) {
    return a.replace(o.functionIdentifier + "(" + o.matches.body + ")", Cr(o.matches.body, o.functionIdentifier, n, r, t));
  }, e);
}
function Mr(e, t) {
  var n = [], r = typeof t == "string" ? new RegExp("\\b(" + t + ")\\(") : t;
  do {
    var a = r.exec(e);
    if (!a)
      return n;
    if (a[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + t);
    var o = a[1], u = a.index, s = Tr("(", ")", e.substring(u));
    if (!s || s.start !== a[0].length - 1)
      throw new SyntaxError(o + "(): missing closing ')' in the value '" + e + "'");
    n.push({ matches: s, functionIdentifier: o }), e = s.post;
  } while (r.test(e));
  return n;
}
function Cr(e, t, n, r, a) {
  return n(Vn(e, a, n), t, r);
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
var Or = te, w = Or;
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
], Ot = {
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
for (var Ke = 0; Ke < ve.length; Ke++)
  ve[Ke].precedence = Ot[ve[Ke].type];
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
}, Se = {
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
}, Sr = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, le = {}, Fe = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, Dr = {
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
function Pr(e, t, n, r) {
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
        r = Kn(ne[n][a], ve);
        break;
      }
    r === -1 ? (ve.push(e[t]), e[t].precedence = Ot[e[t].type], ne.length <= e[t].token.length && (ne[e[t].token.length] = []), ne[e[t].token.length].push(e[t].token)) : (ve[r] = e[t], e[t].precedence = Ot[e[t].type]);
  }
};
function Kn(e, t) {
  for (var n = 0; n < t.length; n++)
    if (t[n].token === e)
      return n;
  return -1;
}
function Nr(e) {
  for (var t = [], n = e.length, r, a, o, u = 0; u < n; u++)
    if (!(u < n - 1 && e[u] === " " && e[u + 1] === " ")) {
      for (r = "", a = e.length - u > ne.length - 2 ? ne.length - 1 : e.length - u; a > 0; a--)
        if (ne[a] !== void 0)
          for (o = 0; o < ne[a].length; o++)
            Pr(e, ne[a][o], u, a) && (r = ne[a][o], o = ne[a].length, a = 0);
      if (u += r.length - 1, r === "")
        throw new w.Exception("Can't understand after " + e.slice(u));
      t.push(ve[Kn(r, ve)]);
    }
  return t;
}
var Rr = {
  value: w.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, Ze = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, Ie = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
w.lex = function(e, t) {
  var n = [Ie], r = [], a = e, o = he, u = 0, s = le, l = "", c;
  typeof t < "u" && w.addToken(t);
  var h = {}, v = Nr(a);
  for (c = 0; c < v.length; c++) {
    var b = v[c];
    if (b.type === 14) {
      if (c > 0 && c < v.length - 1 && v[c + 1].type === 1 && (v[c - 1].type === 1 || v[c - 1].type === 6))
        throw new w.Exception("Unexpected Space");
      continue;
    }
    var D = b.token, m = b.type, M = b.value, N = b.precedence, T = b.show, d = n[n.length - 1], y;
    for (y = r.length; y-- && r[y] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(m) !== -1) {
        if (o[m] !== !0)
          throw new w.Exception(D + " is not allowed after " + l);
        n.push(Ze), o = Se, s = Fe, r.pop();
      }
    if (o[m] !== !0)
      throw new w.Exception(D + " is not allowed after " + l);
    if (s[m] === !0 && (m = 2, M = w.math.mul, T = "&times;", N = 3, c = c - 1), h = {
      value: M,
      type: m,
      pre: N,
      show: T,
      numberOfArguments: b.numberOfArguments
    }, m === 0)
      o = he, s = le, Q(r, 2), n.push(h), v[c + 1].type !== 4 && (n.push(Ie), r.push(2));
    else if (m === 1)
      d.type === 1 ? (d.value += M, Q(r, 1)) : n.push(h), o = Se, s = Sr;
    else if (m === 2)
      o = he, s = le, Q(r, 2), n.push(h);
    else if (m === 3)
      n.push(h), o = Se, s = Fe;
    else if (m === 4)
      Q(r, 1), u++, o = he, s = le, n.push(h);
    else if (m === 5) {
      if (!u)
        throw new w.Exception("Closing parenthesis are more than opening one, wait What!!!");
      u--, o = Se, s = Fe, n.push(h), Q(r, 1);
    } else if (m === 6) {
      if (d.hasDec)
        throw new w.Exception("Two decimals are not allowed in one number");
      d.type !== 1 && (d = {
        value: 0,
        type: 1,
        pre: 0
      }, n.push(d)), o = Dr, Q(r, 1), s = le, d.value += M, d.hasDec = !0;
    } else
      m === 7 && (o = Se, s = Fe, Q(r, 1), n.push(h));
    m === 8 ? (o = he, s = le, Q(r, b.numberOfArguments + 2), n.push(h), v[c + 1].type !== 4 && (n.push(Ie), r.push(b.numberOfArguments + 2))) : m === 9 ? (d.type === 9 ? d.value === w.math.add ? (d.value = M, d.show = T, Q(r, 1)) : d.value === w.math.sub && T === "-" && (d.value = w.math.add, d.show = "+", Q(r, 1)) : d.type !== 5 && d.type !== 7 && d.type !== 1 && d.type !== 3 && d.type !== 13 ? D === "-" && (o = he, s = le, Q(r, 2).push(2), n.push(Rr), n.push(Ie)) : (n.push(h), Q(r, 2)), o = he, s = le) : m === 10 ? (o = he, s = le, Q(r, 2), n.push(h)) : m === 11 ? (o = he, s = le, n.push(h)) : m === 12 ? (o = he, s = le, Q(r, 6), n.push(h), v[c + 1].type !== 4 && (n.push(Ie), r.push(6))) : m === 13 && (o = Se, s = Fe, n.push(h)), Q(r, -1), l = D;
  }
  for (y = r.length; y--; )
    n.push(Ze);
  if (o[5] !== !0)
    throw new w.Exception("complete the expression");
  for (; u--; )
    n.push(Ze);
  return n.push(Ze), new w(n);
};
var Lr = w, St = Lr;
St.prototype.toPostfix = function() {
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
  return new St(e);
};
var kr = St, We = kr;
We.prototype.postfixEval = function(e) {
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
      o[s].type === 10 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r.value = r.concat(n), r.value.push(o[s]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(o[s]), t.push(n)) : t.push({ type: 1, value: o[s].value(r.value, n.value) })) : o[s].type === 2 || o[s].type === 9 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r = r.concat(n), r.push(o[s]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(o[s]), t.push(n)) : t.push({ type: 1, value: o[s].value(r.value, n.value) })) : o[s].type === 12 ? (n = t.pop(), typeof n.type < "u" && (n = [n]), r = t.pop(), a = t.pop(), t.push({ type: 1, value: o[s].value(a.value, r.value, new We(n)) })) : o[s].type === 13 && (u ? t.push({ value: e[o[s].value], type: 3 }) : t.push([o[s]]));
  if (t.length > 1)
    throw new We.Exception("Uncaught Syntax error");
  return t[0].value > 1e15 ? "Infinity" : parseFloat(t[0].value.toFixed(15));
};
We.eval = function(e, t, n) {
  return typeof t > "u" ? this.lex(e).toPostfix().postfixEval() : typeof n > "u" ? typeof t.length < "u" ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(n);
};
var Fr = We, Zn = Fr;
Zn.prototype.formulaEval = function() {
  for (var e, t, n, r = [], a = this.value, o = 0; o < a.length; o++)
    a[o].type === 1 || a[o].type === 3 ? r.push({ value: a[o].type === 3 ? a[o].show : a[o].value, type: 1 }) : a[o].type === 13 ? r.push({ value: a[o].show, type: 1 }) : a[o].type === 0 ? r[r.length - 1] = { value: a[o].show + (a[o].show != "-" ? "(" : "") + r[r.length - 1].value + (a[o].show != "-" ? ")" : ""), type: 0 } : a[o].type === 7 ? r[r.length - 1] = { value: (r[r.length - 1].type != 1 ? "(" : "") + r[r.length - 1].value + (r[r.length - 1].type != 1 ? ")" : "") + a[o].show, type: 7 } : a[o].type === 10 ? (e = r.pop(), t = r.pop(), a[o].show === "P" || a[o].show === "C" ? r.push({ value: "<sup>" + t.value + "</sup>" + a[o].show + "<sub>" + e.value + "</sub>", type: 10 }) : r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + "<sup>" + e.value + "</sup>", type: 1 })) : a[o].type === 2 || a[o].type === 9 ? (e = r.pop(), t = r.pop(), r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + a[o].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""), type: a[o].type })) : a[o].type === 12 && (e = r.pop(), t = r.pop(), n = r.pop(), r.push({ value: a[o].show + "(" + n.value + "," + t.value + "," + e.value + ")", type: 12 }));
  return r[0].value;
};
var Ir = Zn, Br = Ar, Ur = wr, zr = Ir, Hr = 100, Wr = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, vt, $r = jr;
function jr(e, t) {
  vt = 0, t = Math.pow(10, t === void 0 ? 5 : t), e = e.replace(/\n+/g, " ");
  function n(a, o, u) {
    if (vt++ > Hr)
      throw vt = 0, new Error("Call stack overflow for " + u);
    if (a === "")
      throw new Error(o + "(): '" + u + "' must contain a non-whitespace string");
    a = r(a, u);
    var s = Gr(a);
    if (s.length > 1 || a.indexOf("var(") > -1)
      return o + "(" + a + ")";
    var l = s[0] || "";
    l === "%" && (a = a.replace(/\b[0-9\.]+%/g, function(v) {
      return parseFloat(v.slice(0, -1)) * 0.01;
    }));
    var c = a.replace(new RegExp(l, "gi"), ""), h;
    try {
      h = zr.eval(c);
    } catch {
      return o + "(" + a + ")";
    }
    return l === "%" && (h *= 100), (o.length || l === "%") && (h = Math.round(h * t) / t), h += l, h;
  }
  function r(a, o) {
    a = a.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var u = "", s = a, l; l = Wr.exec(s); ) {
      l[0].index > 0 && (u += s.substring(0, l[0].index));
      var c = Br("(", ")", s.substring([0].index));
      if (c.body === "")
        throw new Error("'" + a + "' must contain a non-whitespace string");
      var h = n(c.body, "", o);
      u += c.pre + h, s = c.post;
    }
    return u + s;
  }
  return Ur(e, /((?:\-[a-z]+\-)?calc)\(/, n);
}
function Gr(e) {
  for (var t = [], n = [], r = /[\.0-9]([%a-z]+)/gi, a = r.exec(e); a; )
    !a || !a[1] || (n.indexOf(a[1].toLowerCase()) === -1 && (t.push(a[1]), n.push(a[1].toLowerCase())), a = r.exec(e));
  return t;
}
const gt = /* @__PURE__ */ $n($r);
var xn = "__react_svg_text_measurement_id";
function qr(e, t) {
  try {
    var n = document.getElementById(xn);
    if (!n) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttribute("aria-hidden", "true"), r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", n = document.createElementNS("http://www.w3.org/2000/svg", "text"), n.setAttribute("id", xn), r.appendChild(n), document.body.appendChild(r);
    }
    return Object.assign(n.style, t), n.textContent = e, n.getComputedTextLength();
  } catch {
    return null;
  }
}
const Tn = yr(qr, function(e, t) {
  return e + "_" + JSON.stringify(t);
});
var Yr = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function Xr(e, t) {
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
function wn(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function Vr(e) {
  var t = e.verticalAnchor, n = t === void 0 ? "end" : t, r = e.scaleToFit, a = r === void 0 ? !1 : r, o = e.angle, u = e.width, s = e.lineHeight, l = s === void 0 ? "1em" : s, c = e.capHeight, h = c === void 0 ? "0.71em" : c, v = e.children, b = e.style, D = Xr(e, Yr), m = D.x, M = m === void 0 ? 0 : m, N = D.y, T = N === void 0 ? 0 : N, d = !wn(M) || !wn(T), y = L.useMemo(function() {
    var I = v == null ? [] : v.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: I.map(function(E) {
        return {
          word: E,
          wordWidth: Tn(E, b) || 0
        };
      }),
      spaceWidth: Tn(" ", b) || 0
    };
  }, [v, b]), A = y.wordsWithWidth, k = y.spaceWidth, F = L.useMemo(function() {
    return d ? [] : u || a ? A.reduce(function(I, E) {
      var O = E.word, P = E.wordWidth, x = I[I.length - 1];
      if (x && (u == null || a || (x.width || 0) + P + k < u))
        x.words.push(O), x.width = x.width || 0, x.width += P + k;
      else {
        var U = {
          words: [O],
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
    if (yt(M) && yt(T) && yt(u) && a && F.length > 0) {
      var E = F[0].width || 1, O = a === "shrink-only" ? Math.min(u / E, 1) : u / E, P = O, x = M - O * M, U = T - P * T;
      I.push("matrix(" + O + ", 0, 0, " + P + ", " + x + ", " + U + ")");
    }
    return o && I.push("rotate(" + o + ", " + M + ", " + T + ")"), I.length > 0 ? I.join(" ") : "";
  }, [d, M, T, u, a, F, o]);
  return {
    wordsByLines: F,
    startDy: q,
    transform: z
  };
}
var Kr = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
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
function Zr(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Jr = {
  overflow: "visible"
};
function Uo(e) {
  var t = e.dx, n = t === void 0 ? 0 : t, r = e.dy, a = r === void 0 ? 0 : r, o = e.textAnchor, u = o === void 0 ? "start" : o, s = e.innerRef, l = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var c = e.lineHeight, h = c === void 0 ? "1em" : c;
  e.scaleToFit, e.capHeight, e.width;
  var v = Zr(e, Kr), b = v.x, D = b === void 0 ? 0 : b, m = v.fontSize, M = Vr(e), N = M.wordsByLines, T = M.startDy, d = M.transform;
  return /* @__PURE__ */ C.createElement("svg", {
    ref: s,
    x: n,
    y: a,
    fontSize: m,
    style: Jr
  }, N.length > 0 ? /* @__PURE__ */ C.createElement("text", Dt({
    ref: l,
    transform: d
  }, v, {
    textAnchor: u
  }), N.map(function(y, A) {
    return /* @__PURE__ */ C.createElement("tspan", {
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
var Qr = Pt;
const Mn = /* @__PURE__ */ $n(Qr);
function ea(e) {
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
      } = l.current.element.getBoundingClientRect(), O = {
        left: y,
        top: A,
        width: k,
        height: F,
        bottom: q,
        right: z,
        x: I,
        y: E
      };
      l.current.element instanceof HTMLElement && a && (O.height = l.current.element.offsetHeight, O.width = l.current.element.offsetWidth), Object.freeze(O), v.current && !aa(l.current.lastBounds, O) && s(l.current.lastBounds = O);
    };
    return [d, h ? Mn(d, h) : d, c ? Mn(d, c) : d];
  }, [s, a, c, h]);
  function M() {
    l.current.scrollContainers && (l.current.scrollContainers.forEach((d) => d.removeEventListener("scroll", m, !0)), l.current.scrollContainers = null), l.current.resizeObserver && (l.current.resizeObserver.disconnect(), l.current.resizeObserver = null);
  }
  function N() {
    l.current.element && (l.current.resizeObserver = new o(m), l.current.resizeObserver.observe(l.current.element), n && l.current.scrollContainers && l.current.scrollContainers.forEach((d) => d.addEventListener("scroll", m, {
      capture: !0,
      passive: !0
    })));
  }
  const T = (d) => {
    !d || d === l.current.element || (M(), l.current.element = d, l.current.scrollContainers = Jn(d), N());
  };
  return na(m, !!n), ta(D), L.useEffect(() => {
    M(), N();
  }, [n, m, D]), L.useEffect(() => M, []), [T, u, b];
}
function ta(e) {
  L.useEffect(() => {
    const t = e;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [e]);
}
function na(e, t) {
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
function Jn(e) {
  const t = [];
  if (!e || e === document.body)
    return t;
  const {
    overflow: n,
    overflowX: r,
    overflowY: a
  } = window.getComputedStyle(e);
  return [n, r, a].some((o) => o === "auto" || o === "scroll") && t.push(e), [...t, ...Jn(e.parentElement)];
}
const ra = ["x", "y", "top", "bottom", "left", "right", "width", "height"], aa = (e, t) => ra.every((n) => e[n] === t[n]);
function Wt(e) {
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
const oa = {
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
}, ia = {
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
}, sa = {
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
}, la = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, Ho = la, Wo = Wt(ia), $o = Wt(oa), jo = Wt(sa);
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
function ua(e, t) {
  return new je({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function ca(e, t) {
  return new je({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: je,
  subtractPoints: ca,
  sumPoints: ua
}, Symbol.toStringTag, { value: "Module" }));
function ha(e) {
  return !!e && e instanceof Element;
}
function da(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function pa(e) {
  return !!e && "createSVGPoint" in e;
}
function ma(e) {
  return !!e && "getScreenCTM" in e;
}
function va(e) {
  return !!e && "changedTouches" in e;
}
function ga(e) {
  return !!e && "clientX" in e;
}
function ya(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function $e() {
  return $e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $e.apply(this, arguments);
}
var Et = {
  x: 0,
  y: 0
};
function Ea(e) {
  if (!e)
    return $e({}, Et);
  if (va(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : $e({}, Et);
  if (ga(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : $e({}, Et);
}
function Nt(e, t) {
  if (!e || !t)
    return null;
  var n = Ea(t), r = da(e) ? e.ownerSVGElement : e, a = ma(r) ? r.getScreenCTM() : null;
  if (pa(r) && a) {
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
function ba(e, t) {
  if (ha(e) && t)
    return Nt(e, t);
  if (ya(e)) {
    var n = e, r = n.target;
    if (r)
      return Nt(r, n);
  }
  return null;
}
const _a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: ba,
  touchPoint: Nt
}, Symbol.toStringTag, { value: "Module" }));
var Qn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Cn = C.createContext && C.createContext(Qn), ge = globalThis && globalThis.__assign || function() {
  return ge = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ge.apply(this, arguments);
}, Aa = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function er(e) {
  return e && e.map(function(t, n) {
    return C.createElement(t.tag, ge({
      key: n
    }, t.attr), er(t.child));
  });
}
function Go(e) {
  return function(t) {
    return C.createElement(xa, ge({
      attr: ge({}, e.attr)
    }, t), er(e.child));
  };
}
function xa(e) {
  var t = function(n) {
    var r = e.attr, a = e.size, o = e.title, u = Aa(e, ["attr", "size", "title"]), s = a || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), C.createElement("svg", ge({
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
    }), o && C.createElement("title", null, o), e.children);
  };
  return Cn !== void 0 ? C.createElement(Cn.Consumer, null, function(n) {
    return t(n);
  }) : t(Qn);
}
const Ta = 4.5, wa = 3.5, qo = (e, t) => {
  if (t) {
    if (nt.contrast(e, t) < Ta)
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
}, Yo = (e, t) => !nt.valid(e) || !nt.valid(t) ? !1 : nt.contrast(e, t) >= wa, Xo = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep",
  "Curve Basis": "curveBasis"
};
/*! @license DOMPurify 3.1.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.5/LICENSE */
const {
  entries: tr,
  setPrototypeOf: On,
  isFrozen: Ma,
  getPrototypeOf: Ca,
  getOwnPropertyDescriptor: Oa
} = Object;
let {
  freeze: re,
  seal: se,
  create: nr
} = Object, {
  apply: Rt,
  construct: Lt
} = typeof Reflect < "u" && Reflect;
re || (re = function(t) {
  return t;
});
se || (se = function(t) {
  return t;
});
Rt || (Rt = function(t, n, r) {
  return t.apply(n, r);
});
Lt || (Lt = function(t, n) {
  return new t(...n);
});
const Je = ie(Array.prototype.forEach), Sn = ie(Array.prototype.pop), Be = ie(Array.prototype.push), rt = ie(String.prototype.toLowerCase), bt = ie(String.prototype.toString), Dn = ie(String.prototype.match), Ue = ie(String.prototype.replace), Sa = ie(String.prototype.indexOf), Da = ie(String.prototype.trim), ue = ie(Object.prototype.hasOwnProperty), ee = ie(RegExp.prototype.test), ze = Pa(TypeError);
function ie(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    return Rt(e, t, r);
  };
}
function Pa(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Lt(e, n);
  };
}
function S(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rt;
  On && On(e, null);
  let r = t.length;
  for (; r--; ) {
    let a = t[r];
    if (typeof a == "string") {
      const o = n(a);
      o !== a && (Ma(t) || (t[r] = o), a = o);
    }
    e[a] = !0;
  }
  return e;
}
function Na(e) {
  for (let t = 0; t < e.length; t++)
    ue(e, t) || (e[t] = null);
  return e;
}
function Ae(e) {
  const t = nr(null);
  for (const [n, r] of tr(e))
    ue(e, n) && (Array.isArray(r) ? t[n] = Na(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Ae(r) : t[n] = r);
  return t;
}
function Qe(e, t) {
  for (; e !== null; ) {
    const r = Oa(e, t);
    if (r) {
      if (r.get)
        return ie(r.get);
      if (typeof r.value == "function")
        return ie(r.value);
    }
    e = Ca(e);
  }
  function n() {
    return null;
  }
  return n;
}
const Pn = re(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), _t = re(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), At = re(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ra = re(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xt = re(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), La = re(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Nn = re(["#text"]), Rn = re(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Tt = re(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ln = re(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), et = re(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ka = se(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Fa = se(/<%[\w\W]*|[\w\W]*%>/gm), Ia = se(/\${[\w\W]*}/gm), Ba = se(/^data-[\-\w.\u00B7-\uFFFF]/), Ua = se(/^aria-[\-\w]+$/), rr = se(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), za = se(/^(?:\w+script|data):/i), Ha = se(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ar = se(/^html$/i), Wa = se(/^[a-z][.\w]*(-[.\w]+)+$/i);
var kn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: ka,
  ERB_EXPR: Fa,
  TMPLIT_EXPR: Ia,
  DATA_ATTR: Ba,
  ARIA_ATTR: Ua,
  IS_ALLOWED_URI: rr,
  IS_SCRIPT_OR_DATA: za,
  ATTR_WHITESPACE: Ha,
  DOCTYPE_NAME: ar,
  CUSTOM_ELEMENT: Wa
});
const He = {
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
}, $a = function() {
  return typeof window > "u" ? null : window;
}, ja = function(t, n) {
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
function or() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $a();
  const t = (g) => or(g);
  if (t.version = "3.1.5", t.removed = [], !e || !e.document || e.document.nodeType !== He.document)
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
  } = e, m = l.prototype, M = Qe(m, "cloneNode"), N = Qe(m, "nextSibling"), T = Qe(m, "childNodes"), d = Qe(m, "parentNode");
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
  t.isSupported = typeof tr == "function" && typeof d == "function" && k && k.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: O,
    ERB_EXPR: P,
    TMPLIT_EXPR: x,
    DATA_ATTR: U,
    ARIA_ATTR: $,
    IS_SCRIPT_OR_DATA: Y,
    ATTR_WHITESPACE: V,
    CUSTOM_ELEMENT: K
  } = kn;
  let {
    IS_ALLOWED_URI: Z
  } = kn, R = null;
  const ae = S({}, [...Pn, ..._t, ...At, ...xt, ...Nn]);
  let W = null;
  const ye = S({}, [...Rn, ...Tt, ...Ln, ...et]);
  let H = Object.seal(nr(null, {
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
  })), Ne = null, it = null, Vt = !0, st = !0, Kt = !1, Zt = !0, xe = !1, lt = !0, Ee = !1, ut = !1, ct = !1, Te = !1, Ge = !1, qe = !1, Jt = !0, Qt = !1;
  const cr = "user-content-";
  let ft = !0, Re = !1, we = {}, Me = null;
  const en = S({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let tn = null;
  const nn = S({}, ["audio", "video", "img", "source", "image", "track"]);
  let ht = null;
  const rn = S({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ye = "http://www.w3.org/1998/Math/MathML", Xe = "http://www.w3.org/2000/svg", pe = "http://www.w3.org/1999/xhtml";
  let Ce = pe, dt = !1, pt = null;
  const fr = S({}, [Ye, Xe, pe], bt);
  let Le = null;
  const hr = ["application/xhtml+xml", "text/html"], dr = "text/html";
  let j = null, Oe = null;
  const pr = n.createElement("form"), an = function(i) {
    return i instanceof RegExp || i instanceof Function;
  }, mt = function() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Oe && Oe === i)) {
      if ((!i || typeof i != "object") && (i = {}), i = Ae(i), Le = // eslint-disable-next-line unicorn/prefer-includes
      hr.indexOf(i.PARSER_MEDIA_TYPE) === -1 ? dr : i.PARSER_MEDIA_TYPE, j = Le === "application/xhtml+xml" ? bt : rt, R = ue(i, "ALLOWED_TAGS") ? S({}, i.ALLOWED_TAGS, j) : ae, W = ue(i, "ALLOWED_ATTR") ? S({}, i.ALLOWED_ATTR, j) : ye, pt = ue(i, "ALLOWED_NAMESPACES") ? S({}, i.ALLOWED_NAMESPACES, bt) : fr, ht = ue(i, "ADD_URI_SAFE_ATTR") ? S(
        Ae(rn),
        // eslint-disable-line indent
        i.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        j
        // eslint-disable-line indent
      ) : rn, tn = ue(i, "ADD_DATA_URI_TAGS") ? S(
        Ae(nn),
        // eslint-disable-line indent
        i.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        j
        // eslint-disable-line indent
      ) : nn, Me = ue(i, "FORBID_CONTENTS") ? S({}, i.FORBID_CONTENTS, j) : en, Ne = ue(i, "FORBID_TAGS") ? S({}, i.FORBID_TAGS, j) : {}, it = ue(i, "FORBID_ATTR") ? S({}, i.FORBID_ATTR, j) : {}, we = ue(i, "USE_PROFILES") ? i.USE_PROFILES : !1, Vt = i.ALLOW_ARIA_ATTR !== !1, st = i.ALLOW_DATA_ATTR !== !1, Kt = i.ALLOW_UNKNOWN_PROTOCOLS || !1, Zt = i.ALLOW_SELF_CLOSE_IN_ATTR !== !1, xe = i.SAFE_FOR_TEMPLATES || !1, lt = i.SAFE_FOR_XML !== !1, Ee = i.WHOLE_DOCUMENT || !1, Te = i.RETURN_DOM || !1, Ge = i.RETURN_DOM_FRAGMENT || !1, qe = i.RETURN_TRUSTED_TYPE || !1, ct = i.FORCE_BODY || !1, Jt = i.SANITIZE_DOM !== !1, Qt = i.SANITIZE_NAMED_PROPS || !1, ft = i.KEEP_CONTENT !== !1, Re = i.IN_PLACE || !1, Z = i.ALLOWED_URI_REGEXP || rr, Ce = i.NAMESPACE || pe, H = i.CUSTOM_ELEMENT_HANDLING || {}, i.CUSTOM_ELEMENT_HANDLING && an(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = i.CUSTOM_ELEMENT_HANDLING.tagNameCheck), i.CUSTOM_ELEMENT_HANDLING && an(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), i.CUSTOM_ELEMENT_HANDLING && typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), xe && (st = !1), Ge && (Te = !0), we && (R = S({}, Nn), W = [], we.html === !0 && (S(R, Pn), S(W, Rn)), we.svg === !0 && (S(R, _t), S(W, Tt), S(W, et)), we.svgFilters === !0 && (S(R, At), S(W, Tt), S(W, et)), we.mathMl === !0 && (S(R, xt), S(W, Ln), S(W, et))), i.ADD_TAGS && (R === ae && (R = Ae(R)), S(R, i.ADD_TAGS, j)), i.ADD_ATTR && (W === ye && (W = Ae(W)), S(W, i.ADD_ATTR, j)), i.ADD_URI_SAFE_ATTR && S(ht, i.ADD_URI_SAFE_ATTR, j), i.FORBID_CONTENTS && (Me === en && (Me = Ae(Me)), S(Me, i.FORBID_CONTENTS, j)), ft && (R["#text"] = !0), Ee && S(R, ["html", "head", "body"]), R.table && (S(R, ["tbody"]), delete Ne.tbody), i.TRUSTED_TYPES_POLICY) {
        if (typeof i.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ze('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof i.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ze('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        y = i.TRUSTED_TYPES_POLICY, A = y.createHTML("");
      } else
        y === void 0 && (y = ja(D, a)), y !== null && typeof A == "string" && (A = y.createHTML(""));
      re && re(i), Oe = i;
    }
  }, on = S({}, ["mi", "mo", "mn", "ms", "mtext"]), sn = S({}, ["foreignobject", "annotation-xml"]), mr = S({}, ["title", "style", "font", "a", "script"]), ln = S({}, [..._t, ...At, ...Ra]), un = S({}, [...xt, ...La]), vr = function(i) {
    let f = d(i);
    (!f || !f.tagName) && (f = {
      namespaceURI: Ce,
      tagName: "template"
    });
    const p = rt(i.tagName), B = rt(f.tagName);
    return pt[i.namespaceURI] ? i.namespaceURI === Xe ? f.namespaceURI === pe ? p === "svg" : f.namespaceURI === Ye ? p === "svg" && (B === "annotation-xml" || on[B]) : !!ln[p] : i.namespaceURI === Ye ? f.namespaceURI === pe ? p === "math" : f.namespaceURI === Xe ? p === "math" && sn[B] : !!un[p] : i.namespaceURI === pe ? f.namespaceURI === Xe && !sn[B] || f.namespaceURI === Ye && !on[B] ? !1 : !un[p] && (mr[p] || !ln[p]) : !!(Le === "application/xhtml+xml" && pt[i.namespaceURI]) : !1;
  }, ce = function(i) {
    Be(t.removed, {
      element: i
    });
    try {
      i.parentNode.removeChild(i);
    } catch {
      i.remove();
    }
  }, Ve = function(i, f) {
    try {
      Be(t.removed, {
        attribute: f.getAttributeNode(i),
        from: f
      });
    } catch {
      Be(t.removed, {
        attribute: null,
        from: f
      });
    }
    if (f.removeAttribute(i), i === "is" && !W[i])
      if (Te || Ge)
        try {
          ce(f);
        } catch {
        }
      else
        try {
          f.setAttribute(i, "");
        } catch {
        }
  }, cn = function(i) {
    let f = null, p = null;
    if (ct)
      i = "<remove></remove>" + i;
    else {
      const G = Dn(i, /^[\r\n\t ]+/);
      p = G && G[0];
    }
    Le === "application/xhtml+xml" && Ce === pe && (i = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + i + "</body></html>");
    const B = y ? y.createHTML(i) : i;
    if (Ce === pe)
      try {
        f = new b().parseFromString(B, Le);
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
  }, fn = function(i) {
    return F.call(
      i.ownerDocument || i,
      i,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, hn = function(i) {
    return i instanceof v && (typeof i.nodeName != "string" || typeof i.textContent != "string" || typeof i.removeChild != "function" || !(i.attributes instanceof h) || typeof i.removeAttribute != "function" || typeof i.setAttribute != "function" || typeof i.namespaceURI != "string" || typeof i.insertBefore != "function" || typeof i.hasChildNodes != "function");
  }, dn = function(i) {
    return typeof s == "function" && i instanceof s;
  }, me = function(i, f, p) {
    E[i] && Je(E[i], (B) => {
      B.call(t, f, p, Oe);
    });
  }, pn = function(i) {
    let f = null;
    if (me("beforeSanitizeElements", i, null), hn(i))
      return ce(i), !0;
    const p = j(i.nodeName);
    if (me("uponSanitizeElement", i, {
      tagName: p,
      allowedTags: R
    }), i.hasChildNodes() && !dn(i.firstElementChild) && ee(/<[/\w]/g, i.innerHTML) && ee(/<[/\w]/g, i.textContent) || i.nodeType === He.progressingInstruction || lt && i.nodeType === He.comment && ee(/<[/\w]/g, i.data))
      return ce(i), !0;
    if (!R[p] || Ne[p]) {
      if (!Ne[p] && vn(p) && (H.tagNameCheck instanceof RegExp && ee(H.tagNameCheck, p) || H.tagNameCheck instanceof Function && H.tagNameCheck(p)))
        return !1;
      if (ft && !Me[p]) {
        const B = d(i) || i.parentNode, X = T(i) || i.childNodes;
        if (X && B) {
          const G = X.length;
          for (let oe = G - 1; oe >= 0; --oe) {
            const fe = M(X[oe], !0);
            fe.__removalCount = (i.__removalCount || 0) + 1, B.insertBefore(fe, N(i));
          }
        }
      }
      return ce(i), !0;
    }
    return i instanceof l && !vr(i) || (p === "noscript" || p === "noembed" || p === "noframes") && ee(/<\/no(script|embed|frames)/i, i.innerHTML) ? (ce(i), !0) : (xe && i.nodeType === He.text && (f = i.textContent, Je([O, P, x], (B) => {
      f = Ue(f, B, " ");
    }), i.textContent !== f && (Be(t.removed, {
      element: i.cloneNode()
    }), i.textContent = f)), me("afterSanitizeElements", i, null), !1);
  }, mn = function(i, f, p) {
    if (Jt && (f === "id" || f === "name") && (p in n || p in pr))
      return !1;
    if (!(st && !it[f] && ee(U, f))) {
      if (!(Vt && ee($, f))) {
        if (!W[f] || it[f]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vn(i) && (H.tagNameCheck instanceof RegExp && ee(H.tagNameCheck, i) || H.tagNameCheck instanceof Function && H.tagNameCheck(i)) && (H.attributeNameCheck instanceof RegExp && ee(H.attributeNameCheck, f) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(f)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            f === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && ee(H.tagNameCheck, p) || H.tagNameCheck instanceof Function && H.tagNameCheck(p)))
          )
            return !1;
        } else if (!ht[f]) {
          if (!ee(Z, Ue(p, V, ""))) {
            if (!((f === "src" || f === "xlink:href" || f === "href") && i !== "script" && Sa(p, "data:") === 0 && tn[i])) {
              if (!(Kt && !ee(Y, Ue(p, V, "")))) {
                if (p)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, vn = function(i) {
    return i !== "annotation-xml" && Dn(i, K);
  }, gn = function(i) {
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
        name: G,
        namespaceURI: oe,
        value: fe
      } = X, ke = j(G);
      let J = G === "value" ? fe : Da(fe);
      if (p.attrName = ke, p.attrValue = J, p.keepAttr = !0, p.forceKeepAttr = void 0, me("uponSanitizeAttribute", i, p), J = p.attrValue, p.forceKeepAttr || (Ve(G, i), !p.keepAttr))
        continue;
      if (!Zt && ee(/\/>/i, J)) {
        Ve(G, i);
        continue;
      }
      if (lt && ee(/((--!?|])>)|<\/(style|title)/i, J)) {
        Ve(G, i);
        continue;
      }
      xe && Je([O, P, x], (En) => {
        J = Ue(J, En, " ");
      });
      const yn = j(i.nodeName);
      if (mn(yn, ke, J)) {
        if (Qt && (ke === "id" || ke === "name") && (Ve(G, i), J = cr + J), y && typeof D == "object" && typeof D.getAttributeType == "function" && !oe)
          switch (D.getAttributeType(yn, ke)) {
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
          oe ? i.setAttributeNS(oe, G, J) : i.setAttribute(G, J), hn(i) ? ce(i) : Sn(t.removed);
        } catch {
        }
      }
    }
    me("afterSanitizeAttributes", i, null);
  }, gr = function g(i) {
    let f = null;
    const p = fn(i);
    for (me("beforeSanitizeShadowDOM", i, null); f = p.nextNode(); )
      me("uponSanitizeShadowNode", f, null), !pn(f) && (f.content instanceof o && g(f.content), gn(f));
    me("afterSanitizeShadowDOM", i, null);
  };
  return t.sanitize = function(g) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = null, p = null, B = null, X = null;
    if (dt = !g, dt && (g = "<!-->"), typeof g != "string" && !dn(g))
      if (typeof g.toString == "function") {
        if (g = g.toString(), typeof g != "string")
          throw ze("dirty is not a string, aborting");
      } else
        throw ze("toString is not a function");
    if (!t.isSupported)
      return g;
    if (ut || mt(i), t.removed = [], typeof g == "string" && (Re = !1), Re) {
      if (g.nodeName) {
        const fe = j(g.nodeName);
        if (!R[fe] || Ne[fe])
          throw ze("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (g instanceof s)
      f = cn("<!---->"), p = f.ownerDocument.importNode(g, !0), p.nodeType === He.element && p.nodeName === "BODY" || p.nodeName === "HTML" ? f = p : f.appendChild(p);
    else {
      if (!Te && !xe && !Ee && // eslint-disable-next-line unicorn/prefer-includes
      g.indexOf("<") === -1)
        return y && qe ? y.createHTML(g) : g;
      if (f = cn(g), !f)
        return Te ? null : qe ? A : "";
    }
    f && ct && ce(f.firstChild);
    const G = fn(Re ? g : f);
    for (; B = G.nextNode(); )
      pn(B) || (B.content instanceof o && gr(B.content), gn(B));
    if (Re)
      return g;
    if (Te) {
      if (Ge)
        for (X = q.call(f.ownerDocument); f.firstChild; )
          X.appendChild(f.firstChild);
      else
        X = f;
      return (W.shadowroot || W.shadowrootmode) && (X = I.call(r, X, !0)), X;
    }
    let oe = Ee ? f.outerHTML : f.innerHTML;
    return Ee && R["!doctype"] && f.ownerDocument && f.ownerDocument.doctype && f.ownerDocument.doctype.name && ee(ar, f.ownerDocument.doctype.name) && (oe = "<!DOCTYPE " + f.ownerDocument.doctype.name + `>
` + oe), xe && Je([O, P, x], (fe) => {
      oe = Ue(oe, fe, " ");
    }), y && qe ? y.createHTML(oe) : oe;
  }, t.setConfig = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    mt(g), ut = !0;
  }, t.clearConfig = function() {
    Oe = null, ut = !1;
  }, t.isValidAttribute = function(g, i, f) {
    Oe || mt({});
    const p = j(g), B = j(i);
    return mn(p, B, f);
  }, t.addHook = function(g, i) {
    typeof i == "function" && (E[g] = E[g] || [], Be(E[g], i));
  }, t.removeHook = function(g) {
    if (E[g])
      return Sn(E[g]);
  }, t.removeHooks = function(g) {
    E[g] && (E[g] = []);
  }, t.removeAllHooks = function() {
    E = {};
  }, t;
}
var Vo = or(), Ga = /* @__PURE__ */ L.createContext({});
const ot = Ga;
function kt() {
  return kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, kt.apply(this, arguments);
}
function qa(e) {
  var t, n, r, a, o = e.className, u = e.x, s = e.y, l = e.dx, c = e.dy, h = e.type, v = h === void 0 ? "elbow" : h, b = e.stroke, D = b === void 0 ? "#222" : b, m = e.pathProps, M = L.useContext(ot), N = u ?? ((t = M.x) != null ? t : 0), T = s ?? ((n = M.y) != null ? n : 0), d = l ?? ((r = M.dx) != null ? r : 0), y = c ?? ((a = M.dy) != null ? a : 0), A = N, k = T, F = N + d, q = T + y;
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
  return /* @__PURE__ */ C.createElement("path", kt({
    className: zt("visx-annotation-connector", o),
    strokeWidth: 1,
    stroke: D,
    fill: "transparent",
    pointerEvents: "none",
    d: "M" + N + "," + T + (v === "elbow" ? "L" + A + "," + k : "") + "L" + F + "," + q
  }, m));
}
qa.propTypes = {
  className: _.string,
  type: _.oneOf(["line", "elbow"]),
  stroke: _.string
};
function Pe() {
  return Pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Pe.apply(this, arguments);
}
function ir(e) {
  var t = e.anchorLineOrientation, n = e.anchorLineStroke, r = e.verticalAnchor, a = e.horizontalAnchor, o = e.width, u = e.height, s = {
    stroke: n,
    strokeWidth: 2
  };
  return /* @__PURE__ */ C.createElement(C.Fragment, null, t === "horizontal" && r === "start" && /* @__PURE__ */ C.createElement("line", Pe({}, s, {
    x1: 0,
    x2: o,
    y1: 0,
    y2: 0
  })), t === "horizontal" && r === "end" && /* @__PURE__ */ C.createElement("line", Pe({}, s, {
    x1: 0,
    x2: o,
    y1: u,
    y2: u
  })), t === "vertical" && a === "start" && /* @__PURE__ */ C.createElement("line", Pe({}, s, {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: u
  })), t === "vertical" && a === "end" && /* @__PURE__ */ C.createElement("line", Pe({}, s, {
    x1: o,
    x2: o,
    y1: 0,
    y2: u
  })));
}
ir.propTypes = {
  anchorLineOrientation: _.oneOf(["horizontal", "vertical"]).isRequired,
  anchorLineStroke: _.string.isRequired,
  width: _.number.isRequired,
  height: _.number.isRequired
};
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ft.apply(this, arguments);
}
var Fn = {
  display: "inline-block"
};
function Ya(e) {
  var t = e.anchorLineStroke, n = t === void 0 ? "#222" : t, r = e.children, a = e.className, o = e.containerStyle, u = e.horizontalAnchor, s = e.resizeObserverPolyfill, l = e.showAnchorLine, c = l === void 0 ? !0 : l, h = e.verticalAnchor, v = e.x, b = e.y, D = ea({
    polyfill: s
  }), m = D[0], M = D[1], N = M.width, T = M.height, d = L.useContext(ot), y = d.x, A = y === void 0 ? 0 : y, k = d.y, F = k === void 0 ? 0 : k, q = d.dx, z = q === void 0 ? 0 : q, I = d.dy, E = I === void 0 ? 0 : I, O = u || (Math.abs(z) < Math.abs(E) ? "middle" : z > 0 ? "start" : "end"), P = h || (Math.abs(z) > Math.abs(E) ? "middle" : E > 0 ? "start" : "end"), x = L.useMemo(function() {
    var U = v ?? A + z, $ = b ?? F + E;
    return O === "middle" && (U -= N / 2), O === "end" && (U -= N), P === "middle" && ($ -= T / 2), P === "end" && ($ -= T), {
      x: U,
      y: $
    };
  }, [v, A, z, b, F, E, O, P, N, T]);
  return /* @__PURE__ */ C.createElement(Er, {
    top: x.y,
    left: x.x,
    pointerEvents: "none",
    className: zt("visx-annotationlabel", a)
  }, /* @__PURE__ */ C.createElement("foreignObject", {
    width: N,
    height: T,
    overflow: "visible"
  }, /* @__PURE__ */ C.createElement("div", {
    ref: m,
    style: o ? Ft({}, Fn, o) : Fn
  }, r)), c && /* @__PURE__ */ C.createElement(ir, {
    anchorLineOrientation: Math.abs(z) > Math.abs(E) ? "vertical" : "horizontal",
    anchorLineStroke: n,
    verticalAnchor: P,
    horizontalAnchor: O,
    width: N,
    height: T
  }));
}
Ya.propTypes = {
  children: _.node
};
var Xa = ["className", "x", "y", "stroke", "radius"];
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
function Va(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ka(e) {
  var t = e.className, n = e.x, r = e.y, a = e.stroke, o = a === void 0 ? "#222" : a, u = e.radius, s = u === void 0 ? 16 : u, l = Va(e, Xa), c = L.useContext(ot);
  return /* @__PURE__ */ C.createElement("circle", It({
    className: zt("visx-annotation-subject", "visx-annotation-subject-circle", t),
    cx: n || c.x,
    cy: r || c.y,
    r: s,
    fill: "transparent",
    pointerEvents: "none",
    stroke: o
  }, l));
}
Ka.propTypes = {
  className: _.string,
  stroke: _.string,
  radius: _.number
};
function sr(e) {
  var t = e.x, n = e.y, r = e.dx, a = e.dy, o = e.children, u = L.useMemo(function() {
    return {
      x: t,
      y: n,
      dx: r,
      dy: a
    };
  }, [t, n, r, a]);
  return /* @__PURE__ */ C.createElement(ot.Provider, {
    value: u
  }, o);
}
sr.propTypes = {
  children: _.node.isRequired
};
const Za = /* @__PURE__ */ jn(fa), Ja = /* @__PURE__ */ jn(_a);
var $t = {};
$t.__esModule = !0;
$t.default = Qa;
var tt = L;
function Qa(e) {
  var t = (0, tt.useState)(e), n = t[0], r = t[1], a = (0, tt.useRef)(null), o = (0, tt.useCallback)(function(u, s) {
    a.current = s || null, r(u);
  }, [r]);
  return (0, tt.useLayoutEffect)(function() {
    a.current && (a.current(n), a.current = null);
  }, [n]), [n, o];
}
var jt = {}, Gt = {};
Gt.__esModule = !0;
Gt.default = eo;
function eo(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var qt = {};
qt.__esModule = !0;
qt.default = ro;
function to(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = no(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function no(e, t) {
  if (e) {
    if (typeof e == "string")
      return In(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return In(e, t);
  }
}
function In(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ro(e, t) {
  for (var n = e, r = 1 / 0, a = to(t), o; !(o = a()).done; ) {
    var u = o.value, s = Math.sqrt(Math.pow(u.x - e.x, 2) + Math.pow(u.y - e.y, 2));
    s < r && (r = s, n = {
      x: u.x,
      y: u.y
    });
  }
  return n;
}
jt.__esModule = !0;
jt.default = oo;
var Bn = lr(Gt), ao = lr(qt);
function lr(e) {
  return e && e.__esModule ? e : { default: e };
}
function oo(e, t, n) {
  var r, a, o, u;
  return n === void 0 && (n = {}), t.length > 0 ? (0, ao.default)(e, t) : {
    x: (0, Bn.default)(e.x, (r = n.xMin) != null ? r : -1 / 0, (a = n.xMax) != null ? a : 1 / 0),
    y: (0, Bn.default)(e.y, (o = n.yMin) != null ? o : -1 / 0, (u = n.yMax) != null ? u : 1 / 0)
  };
}
var Yt = {};
Yt.__esModule = !0;
Yt.default = lo;
var io = L;
function so(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var r = [], a = e.getTotalLength(), o = 0; o <= a; o += n) {
    var u = e.getPointAtLength(o), s = u.matrixTransform(t);
    r.push(s);
  }
  return r;
}
function lo(e) {
  var t = (0, io.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return so(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
var Un = fo, be = L, De = Za, zn = Ja, uo = Xt($t), Hn = Xt(jt), co = Xt(Yt);
function Xt(e) {
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
function fo(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, r = n === void 0 ? !1 : n, a = t.snapToPointer, o = a === void 0 ? !0 : a, u = t.onDragEnd, s = t.onDragMove, l = t.onDragStart, c = t.x, h = t.y, v = t.dx, b = t.dy, D = t.isDragging, m = t.restrict, M = m === void 0 ? {} : m, N = t.restrictToPath, T = (0, be.useRef)({
    x: c,
    y: h,
    dx: v,
    dy: b
  }), d = (0, uo.default)({
    x: c,
    y: h,
    dx: v ?? 0,
    dy: b ?? 0,
    isDragging: !1
  }), y = d[0], A = d[1], k = (0, be.useState)(new De.Point({
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
  var z = (0, co.default)(N), I = (0, be.useCallback)(function(P) {
    P.persist(), A(function(x) {
      var U = x.x, $ = U === void 0 ? 0 : U, Y = x.y, V = Y === void 0 ? 0 : Y, K = x.dx, Z = x.dy, R = new De.Point({
        x: ($ || 0) + K,
        y: (V || 0) + Z
      }), ae = (0, zn.localPoint)(P) || new De.Point({
        x: 0,
        y: 0
      }), W = o ? ae : R, ye = (0, Hn.default)(W, z, M);
      return q((0, De.subtractPoints)(R, ae)), {
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
  }, [l, r, M, z, A, o]), E = (0, be.useCallback)(function(P) {
    P.persist(), A(function(x) {
      if (!x.isDragging)
        return x;
      var U = x.x, $ = U === void 0 ? 0 : U, Y = x.y, V = Y === void 0 ? 0 : Y, K = (0, zn.localPoint)(P) || new De.Point({
        x: 0,
        y: 0
      }), Z = o ? K : (0, De.sumPoints)(K, F), R = (0, Hn.default)(Z, z, M);
      return de({}, x, {
        dx: R.x - $,
        dy: R.y - V
      });
    }, s && function(x) {
      x.isDragging && s(de({}, x, {
        event: P
      }));
    });
  }, [A, s, o, F, z, M]), O = (0, be.useCallback)(function(P) {
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
    dragEnd: O,
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
var Wn = {
  r: 10,
  fill: "transparent",
  stroke: "#777",
  strokeDasharray: "4,2",
  strokeWidth: 2
};
function ho(e) {
  var t = e.canEditLabel, n = t === void 0 ? !0 : t, r = e.canEditSubject, a = r === void 0 ? !0 : r, o = e.children, u = e.dx, s = u === void 0 ? 0 : u, l = e.dy, c = l === void 0 ? 0 : l, h = e.height, v = e.labelDragHandleProps, b = e.onDragEnd, D = e.onDragMove, m = e.onDragStart, M = e.subjectDragHandleProps, N = e.width, T = e.x, d = T === void 0 ? 0 : T, y = e.y, A = y === void 0 ? 0 : y, k = L.useRef(), F = L.useRef(), q = L.useCallback(function(P) {
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
  }, [s, c, b, d, A]), E = Un({
    onDragStart: q,
    onDragMove: z,
    onDragEnd: I,
    x: d,
    y: A
  }), O = Un({
    onDragStart: q,
    onDragMove: z,
    onDragEnd: I,
    x: s,
    y: c
  });
  return k.current = E, F.current = O, /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(sr, {
    x: d + E.dx,
    y: A + E.dy,
    dx: s + O.dx,
    dy: c + O.dy
  }, o), E.isDragging && /* @__PURE__ */ C.createElement("rect", {
    width: N,
    height: h,
    onMouseMove: E.dragMove,
    onMouseUp: E.dragEnd,
    fill: "transparent"
  }), a && /* @__PURE__ */ C.createElement("circle", at({
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
  }, Wn, M)), O.isDragging && /* @__PURE__ */ C.createElement("rect", {
    width: N,
    height: h,
    onMouseMove: O.dragMove,
    onMouseUp: O.dragEnd,
    fill: "transparent"
  }), n && /* @__PURE__ */ C.createElement("circle", at({
    cx: d + E.dx + s,
    cy: A + E.dy + c,
    transform: "translate(" + O.dx + "," + O.dy + ")",
    onMouseMove: O.dragMove,
    onMouseUp: O.dragEnd,
    onMouseDown: O.dragStart,
    onTouchStart: O.dragStart,
    onTouchMove: O.dragMove,
    onTouchEnd: O.dragEnd,
    cursor: O.isDragging ? "grabbing" : "grab"
  }, Wn, v)));
}
ho.propTypes = {
  width: _.number.isRequired,
  height: _.number.isRequired,
  children: _.node.isRequired,
  canEditLabel: _.bool,
  canEditSubject: _.bool,
  onDragStart: _.func,
  onDragMove: _.func,
  onDragEnd: _.func
};
var po = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
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
function mo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function ur(e) {
  var t = e.id, n = e.markerWidth, r = n === void 0 ? 3 : n, a = e.markerHeight, o = a === void 0 ? 3 : a, u = e.markerUnits, s = u === void 0 ? "userSpaceOnUse" : u, l = e.children, c = mo(e, po);
  return /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("marker", Bt({
    id: t,
    markerWidth: r,
    markerHeight: o,
    markerUnits: s
  }, c), l));
}
ur.propTypes = {
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
var vo = ["id", "size", "strokeWidth"];
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
function go(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ko(e) {
  var t = e.id, n = e.size, r = n === void 0 ? 9 : n, a = e.strokeWidth, o = a === void 0 ? 1 : a, u = go(e, vo), s = r + o * 2, l = r, c = s / 2, h = "0 0, " + r + " " + r / 2 + ", 0 " + r;
  return /* @__PURE__ */ C.createElement(ur, Ut({
    id: t,
    markerWidth: s,
    markerHeight: s,
    refX: l,
    refY: c,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: o
  }, u), /* @__PURE__ */ C.createElement("g", {
    transform: "translate(" + o + ", " + o + ")"
  }, /* @__PURE__ */ C.createElement("polyline", {
    points: h
  })));
}
const yo = ({
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
  const [m, M] = L.useState(l);
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
    l !== void 0 && l !== m && M(l);
  }, [l]), L.useEffect(() => {
    l !== void 0 && l !== m && s && s(a, o, u, m, c);
  }, [m]);
  const d = (y) => {
    M(!m), b && b(y);
  };
  return /* @__PURE__ */ C.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ C.createElement("label", null, e), /* @__PURE__ */ C.createElement("div", { className: "cove-input__slider" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + T() + (m ? " active" : ""), onClick: d }, /* @__PURE__ */ C.createElement("div", { className: "cove-input__slider-button" }), /* @__PURE__ */ C.createElement("div", { className: "cove-input__slider-track", style: m && r ? { backgroundColor: r } : null }), /* @__PURE__ */ C.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: N(), checked: m || !1, readOnly: !0 })));
};
yo.propTypes = {
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
  sr as A,
  Ho as B,
  qa as C,
  ho as E,
  Go as G,
  Ya as H,
  yo as I,
  Ko as M,
  je as P,
  Uo as T,
  _r as a,
  ua as b,
  Co as c,
  Ka as d,
  Vo as e,
  Xo as f,
  $o as g,
  qo as h,
  Yo as i,
  Do as j,
  Ro as k,
  ba as l,
  bn as m,
  ko as n,
  Lo as o,
  Ht as p,
  No as q,
  Oo as r,
  ca as s,
  Fo as t,
  So as u,
  Bo as v,
  Io as w,
  Po as x,
  jo as y,
  Wo as z
};
