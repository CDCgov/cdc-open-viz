import { r as L, R as B } from "./storybook-index-f2fed736.es.js";
import { g as se } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { m as pe } from "./storybook-memoize-b2d53f3a.es.js";
var fe = te;
function te(e, t, a) {
  e instanceof RegExp && (e = Y(e, a)), t instanceof RegExp && (t = Y(t, a));
  var n = ne(e, t, a);
  return n && {
    start: n[0],
    end: n[1],
    pre: a.slice(0, n[0]),
    body: a.slice(n[0] + e.length, n[1]),
    post: a.slice(n[1] + t.length)
  };
}
function Y(e, t) {
  var a = t.match(e);
  return a ? a[0] : null;
}
te.range = ne;
function ne(e, t, a) {
  var n, u, r, h, o, l = a.indexOf(e), i = a.indexOf(t, l + 1), s = l;
  if (l >= 0 && i > 0) {
    for (n = [], r = a.length; s >= 0 && !o; )
      s == l ? (n.push(s), l = a.indexOf(e, s + 1)) : n.length == 1 ? o = [n.pop(), i] : (u = n.pop(), u < r && (r = u, h = i), i = a.indexOf(t, s + 1)), s = l < i && l >= 0 ? l : i;
    n.length && (o = [r, h]);
  }
  return o;
}
var ve = ae;
function ae(e, t, a) {
  e instanceof RegExp && (e = J(e, a)), t instanceof RegExp && (t = J(t, a));
  var n = re(e, t, a);
  return n && {
    start: n[0],
    end: n[1],
    pre: a.slice(0, n[0]),
    body: a.slice(n[0] + e.length, n[1]),
    post: a.slice(n[1] + t.length)
  };
}
function J(e, t) {
  var a = t.match(e);
  return a ? a[0] : null;
}
ae.range = re;
function re(e, t, a) {
  var n, u, r, h, o, l = a.indexOf(e), i = a.indexOf(t, l + 1), s = l;
  if (l >= 0 && i > 0) {
    if (e === t)
      return [l, i];
    for (n = [], r = a.length; s >= 0 && !o; )
      s == l ? (n.push(s), l = a.indexOf(e, s + 1)) : n.length == 1 ? o = [n.pop(), i] : (u = n.pop(), u < r && (r = u, h = i), i = a.indexOf(t, s + 1)), s = l < i && l >= 0 ? l : i;
    n.length && (o = [r, h]);
  }
  return o;
}
var ce = ve, ye = ue;
function ue(e, t, a) {
  var n = e;
  return de(e, t).reduce(function(u, r) {
    return u.replace(r.functionIdentifier + "(" + r.matches.body + ")", ge(r.matches.body, r.functionIdentifier, a, n, t));
  }, e);
}
function de(e, t) {
  var a = [], n = typeof t == "string" ? new RegExp("\\b(" + t + ")\\(") : t;
  do {
    var u = n.exec(e);
    if (!u)
      return a;
    if (u[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + t);
    var r = u[1], h = u.index, o = ce("(", ")", e.substring(h));
    if (!o || o.start !== u[0].length - 1)
      throw new SyntaxError(r + "(): missing closing ')' in the value '" + e + "'");
    a.push({ matches: o, functionIdentifier: r }), e = o.post;
  } while (n.test(e));
  return a;
}
function ge(e, t, a, n, u) {
  return a(ue(e, u, a), t, n);
}
var w = function(e) {
  this.value = e;
};
w.math = {
  isDegree: !0,
  // mode of calculator
  acos: function(e) {
    return w.math.isDegree ? 180 / Math.PI * Math.acos(e) : Math.acos(e);
  },
  add: function(e, t) {
    return e + t;
  },
  asin: function(e) {
    return w.math.isDegree ? 180 / Math.PI * Math.asin(e) : Math.asin(e);
  },
  atan: function(e) {
    return w.math.isDegree ? 180 / Math.PI * Math.atan(e) : Math.atan(e);
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
    var a = 1, n = e - t, u = t;
    u < n && (u = n, n = t);
    for (var r = u + 1; r <= e; r++)
      a *= r;
    return a / w.math.fact(n);
  },
  changeSign: function(e) {
    return -e;
  },
  cos: function(e) {
    return w.math.isDegree && (e = w.math.toRadian(e)), Math.cos(e);
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
    for (var n = 1, u = e; u <= t; u++)
      n *= Number(a.postfixEval({
        n: u
      }));
    return n;
  },
  pow10x: function(e) {
    for (var t = 1; e--; )
      t *= 10;
    return t;
  },
  sigma: function(e, t, a) {
    for (var n = 0, u = e; u <= t; u++)
      n += Number(a.postfixEval({
        n: u
      }));
    return n;
  },
  sin: function(e) {
    return w.math.isDegree && (e = w.math.toRadian(e)), Math.sin(e);
  },
  sinh: function(e) {
    return (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e)) / 2;
  },
  sub: function(e, t) {
    return e - t;
  },
  tan: function(e) {
    return w.math.isDegree && (e = w.math.toRadian(e)), Math.tan(e);
  },
  tanh: function(e) {
    return w.sinha(e) / w.cosha(e);
  },
  toRadian: function(e) {
    return e * Math.PI / 180;
  },
  and: function(e, t) {
    return e & t;
  }
};
w.Exception = function(e) {
  this.message = e;
};
var we = w, p = we;
function g(e, t) {
  for (var a = 0; a < e.length; a++)
    e[a] += t;
  return e;
}
var N = [
  { token: "sin", show: "sin", type: 0, value: p.math.sin },
  { token: "cos", show: "cos", type: 0, value: p.math.cos },
  { token: "tan", show: "tan", type: 0, value: p.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: p.math.P },
  { token: "C", show: "C", type: 10, value: p.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: p.math.asin },
  { token: "acos", show: "acos", type: 0, value: p.math.acos },
  { token: "atan", show: "atan", type: 0, value: p.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: p.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: p.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: p.math.div },
  { token: "!", show: "!", type: 7, value: p.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: p.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: p.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: p.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: p.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: p.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: p.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: p.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: p.math.add },
  { token: "-", show: "-", type: 9, value: p.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: p.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: p.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: p.math.and }
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
for (var D = 0; D < N.length; D++)
  N[D].precedence = V[N[D].type];
var A = {
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
}, I = {
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
}, me = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, x = {}, F = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, Ee = {
  1: !0
}, m = [
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
function Me(e, t, a, n) {
  for (var u = 0; u < n; u++)
    if (e[a + u] !== t[u])
      return !1;
  return !0;
}
p.tokenTypes = {
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
p.addToken = function(e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t].token.length, n = -1;
    e[t].type === p.tokenTypes.FUNCTION_WITH_N_ARGS && e[t].numberOfArguments === void 0 && (e[t].numberOfArguments = 2), m[a] = m[a] || [];
    for (var u = 0; u < m[a].length; u++)
      if (e[t].token === m[a][u]) {
        n = oe(m[a][u], N);
        break;
      }
    n === -1 ? (N.push(e[t]), e[t].precedence = V[e[t].type], m.length <= e[t].token.length && (m[e[t].token.length] = []), m[e[t].token.length].push(e[t].token)) : (N[n] = e[t], e[t].precedence = V[e[t].type]);
  }
};
function oe(e, t) {
  for (var a = 0; a < t.length; a++)
    if (t[a].token === e)
      return a;
  return -1;
}
function xe(e) {
  for (var t = [], a = e.length, n, u, r, h = 0; h < a; h++)
    if (!(h < a - 1 && e[h] === " " && e[h + 1] === " ")) {
      for (n = "", u = e.length - h > m.length - 2 ? m.length - 1 : e.length - h; u > 0; u--)
        if (m[u] !== void 0)
          for (r = 0; r < m[u].length; r++)
            Me(e, m[u][r], h, u) && (n = m[u][r], r = m[u].length, u = 0);
      if (h += n.length - 1, n === "")
        throw new p.Exception("Can't understand after " + e.slice(h));
      t.push(N[oe(n, N)]);
    }
  return t;
}
var _e = {
  value: p.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, T = {
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
p.lex = function(e, t) {
  var a = [H], n = [], u = e, r = A, h = 0, o = x, l = "", i;
  typeof t < "u" && p.addToken(t);
  var s = {}, c = xe(u);
  for (i = 0; i < c.length; i++) {
    var y = c[i];
    if (y.type === 14) {
      if (i > 0 && i < c.length - 1 && c[i + 1].type === 1 && (c[i - 1].type === 1 || c[i - 1].type === 6))
        throw new p.Exception("Unexpected Space");
      continue;
    }
    var O = y.token, v = y.type, d = y.value, k = y.precedence, E = y.show, f = a[a.length - 1], _;
    for (_ = n.length; _-- && n[_] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(v) !== -1) {
        if (r[v] !== !0)
          throw new p.Exception(O + " is not allowed after " + l);
        a.push(T), r = I, o = F, n.pop();
      }
    if (r[v] !== !0)
      throw new p.Exception(O + " is not allowed after " + l);
    if (o[v] === !0 && (v = 2, d = p.math.mul, E = "&times;", k = 3, i = i - 1), s = {
      value: d,
      type: v,
      pre: k,
      show: E,
      numberOfArguments: y.numberOfArguments
    }, v === 0)
      r = A, o = x, g(n, 2), a.push(s), c[i + 1].type !== 4 && (a.push(H), n.push(2));
    else if (v === 1)
      f.type === 1 ? (f.value += d, g(n, 1)) : a.push(s), r = I, o = me;
    else if (v === 2)
      r = A, o = x, g(n, 2), a.push(s);
    else if (v === 3)
      a.push(s), r = I, o = F;
    else if (v === 4)
      g(n, 1), h++, r = A, o = x, a.push(s);
    else if (v === 5) {
      if (!h)
        throw new p.Exception("Closing parenthesis are more than opening one, wait What!!!");
      h--, r = I, o = F, a.push(s), g(n, 1);
    } else if (v === 6) {
      if (f.hasDec)
        throw new p.Exception("Two decimals are not allowed in one number");
      f.type !== 1 && (f = {
        value: 0,
        type: 1,
        pre: 0
      }, a.push(f)), r = Ee, g(n, 1), o = x, f.value += d, f.hasDec = !0;
    } else
      v === 7 && (r = I, o = F, g(n, 1), a.push(s));
    v === 8 ? (r = A, o = x, g(n, y.numberOfArguments + 2), a.push(s), c[i + 1].type !== 4 && (a.push(H), n.push(y.numberOfArguments + 2))) : v === 9 ? (f.type === 9 ? f.value === p.math.add ? (f.value = d, f.show = E, g(n, 1)) : f.value === p.math.sub && E === "-" && (f.value = p.math.add, f.show = "+", g(n, 1)) : f.type !== 5 && f.type !== 7 && f.type !== 1 && f.type !== 3 && f.type !== 13 ? O === "-" && (r = A, o = x, g(n, 2).push(2), a.push(_e), a.push(H)) : (a.push(s), g(n, 2)), r = A, o = x) : v === 10 ? (r = A, o = x, g(n, 2), a.push(s)) : v === 11 ? (r = A, o = x, a.push(s)) : v === 12 ? (r = A, o = x, g(n, 6), a.push(s), c[i + 1].type !== 4 && (a.push(H), n.push(6))) : v === 13 && (r = I, o = F, a.push(s)), g(n, -1), l = O;
  }
  for (_ = n.length; _--; )
    a.push(T);
  if (r[5] !== !0)
    throw new p.Exception("complete the expression");
  for (; h--; )
    a.push(T);
  return a.push(T), new p(a);
};
var Ae = p, K = Ae;
K.prototype.toPostfix = function() {
  for (var e = [], t, a, n, u, r, h = [{ value: "(", type: 4, pre: 0 }], o = this.value, l = 1; l < o.length; l++)
    if (o[l].type === 1 || o[l].type === 3 || o[l].type === 13)
      o[l].type === 1 && (o[l].value = Number(o[l].value)), e.push(o[l]);
    else if (o[l].type === 4)
      h.push(o[l]);
    else if (o[l].type === 5)
      for (; (a = h.pop()).type !== 4; )
        e.push(a);
    else if (o[l].type === 11) {
      for (; (a = h.pop()).type !== 4; )
        e.push(a);
      h.push(a);
    } else {
      t = o[l], u = t.pre, r = h[h.length - 1], n = r.pre;
      var i = r.value == "Math.pow" && t.value == "Math.pow";
      if (u > n)
        h.push(t);
      else {
        for (; n >= u && !i || i && u < n; )
          a = h.pop(), r = h[h.length - 1], e.push(a), n = r.pre, i = t.value == "Math.pow" && r.value == "Math.pow";
        h.push(t);
      }
    }
  return new K(e);
};
var Oe = K, W = Oe;
W.prototype.postfixEval = function(e) {
  e = e || {}, e.PI = Math.PI, e.E = Math.E;
  for (var t = [], a, n, u, r = this.value, h = typeof e.n < "u", o = 0; o < r.length; o++)
    if (r[o].type === 1)
      t.push({ value: r[o].value, type: 1 });
    else if (r[o].type === 3)
      t.push({ value: e[r[o].value], type: 1 });
    else if (r[o].type === 0)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(r[o]) : t[t.length - 1].value = r[o].value(t[t.length - 1].value);
    else if (r[o].type === 7)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(r[o]) : t[t.length - 1].value = r[o].value(t[t.length - 1].value);
    else if (r[o].type === 8) {
      for (var l = [], i = 0; i < r[o].numberOfArguments; i++)
        l.push(t.pop().value);
      t.push({ type: 1, value: r[o].value.apply(r[o], l.reverse()) });
    } else
      r[o].type === 10 ? (a = t.pop(), n = t.pop(), typeof n.type > "u" ? (n.value = n.concat(a), n.value.push(r[o]), t.push(n)) : typeof a.type > "u" ? (a.unshift(n), a.push(r[o]), t.push(a)) : t.push({ type: 1, value: r[o].value(n.value, a.value) })) : r[o].type === 2 || r[o].type === 9 ? (a = t.pop(), n = t.pop(), typeof n.type > "u" ? (n = n.concat(a), n.push(r[o]), t.push(n)) : typeof a.type > "u" ? (a.unshift(n), a.push(r[o]), t.push(a)) : t.push({ type: 1, value: r[o].value(n.value, a.value) })) : r[o].type === 12 ? (a = t.pop(), typeof a.type < "u" && (a = [a]), n = t.pop(), u = t.pop(), t.push({ type: 1, value: r[o].value(u.value, n.value, new W(a)) })) : r[o].type === 13 && (h ? t.push({ value: e[r[o].value], type: 3 }) : t.push([r[o]]));
  if (t.length > 1)
    throw new W.Exception("Uncaught Syntax error");
  return t[0].value > 1e15 ? "Infinity" : parseFloat(t[0].value.toFixed(15));
};
W.eval = function(e, t, a) {
  return typeof t > "u" ? this.lex(e).toPostfix().postfixEval() : typeof a > "u" ? typeof t.length < "u" ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(a);
};
var ke = W, he = ke;
he.prototype.formulaEval = function() {
  for (var e, t, a, n = [], u = this.value, r = 0; r < u.length; r++)
    u[r].type === 1 || u[r].type === 3 ? n.push({ value: u[r].type === 3 ? u[r].show : u[r].value, type: 1 }) : u[r].type === 13 ? n.push({ value: u[r].show, type: 1 }) : u[r].type === 0 ? n[n.length - 1] = { value: u[r].show + (u[r].show != "-" ? "(" : "") + n[n.length - 1].value + (u[r].show != "-" ? ")" : ""), type: 0 } : u[r].type === 7 ? n[n.length - 1] = { value: (n[n.length - 1].type != 1 ? "(" : "") + n[n.length - 1].value + (n[n.length - 1].type != 1 ? ")" : "") + u[r].show, type: 7 } : u[r].type === 10 ? (e = n.pop(), t = n.pop(), u[r].show === "P" || u[r].show === "C" ? n.push({ value: "<sup>" + t.value + "</sup>" + u[r].show + "<sub>" + e.value + "</sub>", type: 10 }) : n.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + "<sup>" + e.value + "</sup>", type: 1 })) : u[r].type === 2 || u[r].type === 9 ? (e = n.pop(), t = n.pop(), n.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + u[r].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""), type: u[r].type })) : u[r].type === 12 && (e = n.pop(), t = n.pop(), a = n.pop(), n.push({ value: u[r].show + "(" + a.value + "," + t.value + "," + e.value + ")", type: 12 }));
  return n[0].value;
};
var be = he, Ce = fe, Ne = ye, Pe = be, Re = 100, Se = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, G, Ie = $e;
function $e(e, t) {
  G = 0, t = Math.pow(10, t === void 0 ? 5 : t), e = e.replace(/\n+/g, " ");
  function a(u, r, h) {
    if (G++ > Re)
      throw G = 0, new Error("Call stack overflow for " + h);
    if (u === "")
      throw new Error(r + "(): '" + h + "' must contain a non-whitespace string");
    u = n(u, h);
    var o = Fe(u);
    if (o.length > 1 || u.indexOf("var(") > -1)
      return r + "(" + u + ")";
    var l = o[0] || "";
    l === "%" && (u = u.replace(/\b[0-9\.]+%/g, function(c) {
      return parseFloat(c.slice(0, -1)) * 0.01;
    }));
    var i = u.replace(new RegExp(l, "gi"), ""), s;
    try {
      s = Pe.eval(i);
    } catch {
      return r + "(" + u + ")";
    }
    return l === "%" && (s *= 100), (r.length || l === "%") && (s = Math.round(s * t) / t), s += l, s;
  }
  function n(u, r) {
    u = u.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var h = "", o = u, l; l = Se.exec(o); ) {
      l[0].index > 0 && (h += o.substring(0, l[0].index));
      var i = Ce("(", ")", o.substring([0].index));
      if (i.body === "")
        throw new Error("'" + u + "' must contain a non-whitespace string");
      var s = a(i.body, "", r);
      h += i.pre + s, o = i.post;
    }
    return h + o;
  }
  return Ne(e, /((?:\-[a-z]+\-)?calc)\(/, a);
}
function Fe(e) {
  for (var t = [], a = [], n = /[\.0-9]([%a-z]+)/gi, u = n.exec(e); u; )
    !u || !u[1] || (a.indexOf(u[1].toLowerCase()) === -1 && (t.push(u[1]), a.push(u[1].toLowerCase())), u = n.exec(e));
  return t;
}
const j = /* @__PURE__ */ se(Ie);
var Q = "__react_svg_text_measurement_id";
function He(e, t) {
  try {
    var a = document.getElementById(Q);
    if (!a) {
      var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      n.setAttribute("aria-hidden", "true"), n.style.width = "0", n.style.height = "0", n.style.position = "absolute", n.style.top = "-100%", n.style.left = "-100%", a = document.createElementNS("http://www.w3.org/2000/svg", "text"), a.setAttribute("id", Q), n.appendChild(a), document.body.appendChild(n);
    }
    return Object.assign(a.style, t), a.textContent = e, a.getComputedTextLength();
  } catch {
    return null;
  }
}
const Z = pe(He, function(e, t) {
  return e + "_" + JSON.stringify(t);
});
var We = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function Le(e, t) {
  if (e == null)
    return {};
  var a = {}, n = Object.keys(e), u, r;
  for (r = 0; r < n.length; r++)
    u = n[r], !(t.indexOf(u) >= 0) && (a[u] = e[u]);
  return a;
}
function q(e) {
  return typeof e == "number";
}
function ee(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function De(e) {
  var t = e.verticalAnchor, a = t === void 0 ? "end" : t, n = e.scaleToFit, u = n === void 0 ? !1 : n, r = e.angle, h = e.width, o = e.lineHeight, l = o === void 0 ? "1em" : o, i = e.capHeight, s = i === void 0 ? "0.71em" : i, c = e.children, y = e.style, O = Le(e, We), v = O.x, d = v === void 0 ? 0 : v, k = O.y, E = k === void 0 ? 0 : k, f = !ee(d) || !ee(E), _ = L.useMemo(function() {
    var M = c == null ? [] : c.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: M.map(function(b) {
        return {
          word: b,
          wordWidth: Z(b, y) || 0
        };
      }),
      spaceWidth: Z(" ", y) || 0
    };
  }, [c, y]), $ = _.wordsWithWidth, U = _.spaceWidth, P = L.useMemo(function() {
    return f ? [] : h || u ? $.reduce(function(M, b) {
      var R = b.word, S = b.wordWidth, C = M[M.length - 1];
      if (C && (h == null || u || (C.width || 0) + S + U < h))
        C.words.push(R), C.width = C.width || 0, C.width += S + U;
      else {
        var z = {
          words: [R],
          width: S
        };
        M.push(z);
      }
      return M;
    }, []) : [{
      words: c == null ? [] : c.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [f, h, u, c, $, U]), le = L.useMemo(function() {
    var M = f ? "" : j(a === "start" ? "calc(" + s + ")" : a === "middle" ? "calc(" + (P.length - 1) / 2 + " * -" + l + " + (" + s + " / 2))" : "calc(" + (P.length - 1) + " * -" + l + ")");
    return M;
  }, [f, a, s, P.length, l]), ie = L.useMemo(function() {
    var M = [];
    if (f)
      return "";
    if (q(d) && q(E) && q(h) && u && P.length > 0) {
      var b = P[0].width || 1, R = u === "shrink-only" ? Math.min(h / b, 1) : h / b, S = R, C = d - R * d, z = E - S * E;
      M.push("matrix(" + R + ", 0, 0, " + S + ", " + C + ", " + z + ")");
    }
    return r && M.push("rotate(" + r + ", " + d + ", " + E + ")"), M.length > 0 ? M.join(" ") : "";
  }, [f, d, E, h, u, P, r]);
  return {
    wordsByLines: P,
    startDy: le,
    transform: ie
  };
}
var Te = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, X.apply(this, arguments);
}
function Ue(e, t) {
  if (e == null)
    return {};
  var a = {}, n = Object.keys(e), u, r;
  for (r = 0; r < n.length; r++)
    u = n[r], !(t.indexOf(u) >= 0) && (a[u] = e[u]);
  return a;
}
var ze = {
  overflow: "visible"
};
function qe(e) {
  var t = e.dx, a = t === void 0 ? 0 : t, n = e.dy, u = n === void 0 ? 0 : n, r = e.textAnchor, h = r === void 0 ? "start" : r, o = e.innerRef, l = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var i = e.lineHeight, s = i === void 0 ? "1em" : i;
  e.scaleToFit, e.capHeight, e.width;
  var c = Ue(e, Te), y = c.x, O = y === void 0 ? 0 : y, v = c.fontSize, d = De(e), k = d.wordsByLines, E = d.startDy, f = d.transform;
  return /* @__PURE__ */ B.createElement("svg", {
    ref: o,
    x: a,
    y: u,
    fontSize: v,
    style: ze
  }, k.length > 0 ? /* @__PURE__ */ B.createElement("text", X({
    ref: l,
    transform: f
  }, c, {
    textAnchor: h
  }), k.map(function(_, $) {
    return /* @__PURE__ */ B.createElement("tspan", {
      key: $,
      x: O,
      dy: $ === 0 ? E : s
    }, _.words.join(" "));
  })) : null);
}
export {
  qe as T
};
