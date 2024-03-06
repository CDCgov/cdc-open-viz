import { r as N, R as x } from "./storybook-e61d95ab.es.js";
import { g as zr } from "./storybook-c5d32002.es.js";
import { m as bs } from "./storybook-2aba9bd9.es.js";
import { c as ys, b as Un, a as Es, d as Ds } from "./storybook-659f370e.es.js";
import { r as fn, R as Ss } from "./storybook-e604ac6e.es.js";
import { _ as Be } from "./storybook-70f3d2a3.es.js";
import { i as Hn } from "./storybook-9f3340e2.es.js";
import { P as Z } from "./storybook-b8c9afe4.es.js";
import "./storybook-4ed993c7.es.js";
import { B as Cs } from "./storybook-8d78bf52.es.js";
function jr(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, s;
  for (s = 0; s < r.length; s++)
    o = r[s], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Ns = Yr;
function Yr(e, t, n) {
  e instanceof RegExp && (e = qn(e, n)), t instanceof RegExp && (t = qn(t, n));
  var r = Kr(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function qn(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
Yr.range = Kr;
function Kr(e, t, n) {
  var r, o, s, i, a, l = n.indexOf(e), c = n.indexOf(t, l + 1), f = l;
  if (l >= 0 && c > 0) {
    for (r = [], s = n.length; f >= 0 && !a; )
      f == l ? (r.push(f), l = n.indexOf(e, f + 1)) : r.length == 1 ? a = [r.pop(), c] : (o = r.pop(), o < s && (s = o, i = c), c = n.indexOf(t, f + 1)), f = l < c && l >= 0 ? l : c;
    r.length && (a = [s, i]);
  }
  return a;
}
var ws = Xr;
function Xr(e, t, n) {
  e instanceof RegExp && (e = zn(e, n)), t instanceof RegExp && (t = zn(t, n));
  var r = Jr(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function zn(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
Xr.range = Jr;
function Jr(e, t, n) {
  var r, o, s, i, a, l = n.indexOf(e), c = n.indexOf(t, l + 1), f = l;
  if (l >= 0 && c > 0) {
    if (e === t)
      return [l, c];
    for (r = [], s = n.length; f >= 0 && !a; )
      f == l ? (r.push(f), l = n.indexOf(e, f + 1)) : r.length == 1 ? a = [r.pop(), c] : (o = r.pop(), o < s && (s = o, i = c), c = n.indexOf(t, f + 1)), f = l < c && l >= 0 ? l : c;
    r.length && (a = [s, i]);
  }
  return a;
}
var xs = ws, Os = Zr;
function Zr(e, t, n) {
  var r = e;
  return _s(e, t).reduce(function(o, s) {
    return o.replace(s.functionIdentifier + "(" + s.matches.body + ")", Is(s.matches.body, s.functionIdentifier, n, r, t));
  }, e);
}
function _s(e, t) {
  var n = [], r = typeof t == "string" ? new RegExp("\\b(" + t + ")\\(") : t;
  do {
    var o = r.exec(e);
    if (!o)
      return n;
    if (o[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + t);
    var s = o[1], i = o.index, a = xs("(", ")", e.substring(i));
    if (!a || a.start !== o[0].length - 1)
      throw new SyntaxError(s + "(): missing closing ')' in the value '" + e + "'");
    n.push({ matches: a, functionIdentifier: s }), e = a.post;
  } while (r.test(e));
  return n;
}
function Is(e, t, n, r, o) {
  return n(Zr(e, o, n), t, r);
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
    var n = 1, r = e - t, o = t;
    o < r && (o = r, r = t);
    for (var s = o + 1; s <= e; s++)
      n *= s;
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
    for (var r = 1, o = e; o <= t; o++)
      r *= Number(n.postfixEval({
        n: o
      }));
    return r;
  },
  pow10x: function(e) {
    for (var t = 1; e--; )
      t *= 10;
    return t;
  },
  sigma: function(e, t, n) {
    for (var r = 0, o = e; o <= t; o++)
      r += Number(n.postfixEval({
        n: o
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
var As = te, M = As;
function Q(e, t) {
  for (var n = 0; n < e.length; n++)
    e[n] += t;
  return e;
}
var be = [
  { token: "sin", show: "sin", type: 0, value: M.math.sin },
  { token: "cos", show: "cos", type: 0, value: M.math.cos },
  { token: "tan", show: "tan", type: 0, value: M.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: M.math.P },
  { token: "C", show: "C", type: 10, value: M.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: M.math.asin },
  { token: "acos", show: "acos", type: 0, value: M.math.acos },
  { token: "atan", show: "atan", type: 0, value: M.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: M.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: M.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: M.math.div },
  { token: "!", show: "!", type: 7, value: M.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: M.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: M.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: M.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: M.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: M.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: M.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: M.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: M.math.add },
  { token: "-", show: "-", type: 9, value: M.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: M.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: M.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: M.math.and }
], Jt = {
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
for (var ft = 0; ft < be.length; ft++)
  be[ft].precedence = Jt[be[ft].type];
var me = {
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
}, Te = {
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
}, Ps = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, fe = {}, ke = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, Rs = {
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
function Ts(e, t, n, r) {
  for (var o = 0; o < r; o++)
    if (e[n + o] !== t[o])
      return !1;
  return !0;
}
M.tokenTypes = {
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
M.addToken = function(e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t].token.length, r = -1;
    e[t].type === M.tokenTypes.FUNCTION_WITH_N_ARGS && e[t].numberOfArguments === void 0 && (e[t].numberOfArguments = 2), ne[n] = ne[n] || [];
    for (var o = 0; o < ne[n].length; o++)
      if (e[t].token === ne[n][o]) {
        r = Qr(ne[n][o], be);
        break;
      }
    r === -1 ? (be.push(e[t]), e[t].precedence = Jt[e[t].type], ne.length <= e[t].token.length && (ne[e[t].token.length] = []), ne[e[t].token.length].push(e[t].token)) : (be[r] = e[t], e[t].precedence = Jt[e[t].type]);
  }
};
function Qr(e, t) {
  for (var n = 0; n < t.length; n++)
    if (t[n].token === e)
      return n;
  return -1;
}
function Bs(e) {
  for (var t = [], n = e.length, r, o, s, i = 0; i < n; i++)
    if (!(i < n - 1 && e[i] === " " && e[i + 1] === " ")) {
      for (r = "", o = e.length - i > ne.length - 2 ? ne.length - 1 : e.length - i; o > 0; o--)
        if (ne[o] !== void 0)
          for (s = 0; s < ne[o].length; s++)
            Ts(e, ne[o][s], i, o) && (r = ne[o][s], s = ne[o].length, o = 0);
      if (i += r.length - 1, r === "")
        throw new M.Exception("Can't understand after " + e.slice(i));
      t.push(be[Qr(r, be)]);
    }
  return t;
}
var Ms = {
  value: M.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, pt = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, We = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
M.lex = function(e, t) {
  var n = [We], r = [], o = e, s = me, i = 0, a = fe, l = "", c;
  typeof t < "u" && M.addToken(t);
  var f = {}, u = Bs(o);
  for (c = 0; c < u.length; c++) {
    var d = u[c];
    if (d.type === 14) {
      if (c > 0 && c < u.length - 1 && u[c + 1].type === 1 && (u[c - 1].type === 1 || u[c - 1].type === 6))
        throw new M.Exception("Unexpected Space");
      continue;
    }
    var p = d.token, h = d.type, b = d.value, g = d.precedence, C = d.show, S = n[n.length - 1], y;
    for (y = r.length; y-- && r[y] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(h) !== -1) {
        if (s[h] !== !0)
          throw new M.Exception(p + " is not allowed after " + l);
        n.push(pt), s = Te, a = ke, r.pop();
      }
    if (s[h] !== !0)
      throw new M.Exception(p + " is not allowed after " + l);
    if (a[h] === !0 && (h = 2, b = M.math.mul, C = "&times;", g = 3, c = c - 1), f = {
      value: b,
      type: h,
      pre: g,
      show: C,
      numberOfArguments: d.numberOfArguments
    }, h === 0)
      s = me, a = fe, Q(r, 2), n.push(f), u[c + 1].type !== 4 && (n.push(We), r.push(2));
    else if (h === 1)
      S.type === 1 ? (S.value += b, Q(r, 1)) : n.push(f), s = Te, a = Ps;
    else if (h === 2)
      s = me, a = fe, Q(r, 2), n.push(f);
    else if (h === 3)
      n.push(f), s = Te, a = ke;
    else if (h === 4)
      Q(r, 1), i++, s = me, a = fe, n.push(f);
    else if (h === 5) {
      if (!i)
        throw new M.Exception("Closing parenthesis are more than opening one, wait What!!!");
      i--, s = Te, a = ke, n.push(f), Q(r, 1);
    } else if (h === 6) {
      if (S.hasDec)
        throw new M.Exception("Two decimals are not allowed in one number");
      S.type !== 1 && (S = {
        value: 0,
        type: 1,
        pre: 0
      }, n.push(S)), s = Rs, Q(r, 1), a = fe, S.value += b, S.hasDec = !0;
    } else
      h === 7 && (s = Te, a = ke, Q(r, 1), n.push(f));
    h === 8 ? (s = me, a = fe, Q(r, d.numberOfArguments + 2), n.push(f), u[c + 1].type !== 4 && (n.push(We), r.push(d.numberOfArguments + 2))) : h === 9 ? (S.type === 9 ? S.value === M.math.add ? (S.value = b, S.show = C, Q(r, 1)) : S.value === M.math.sub && C === "-" && (S.value = M.math.add, S.show = "+", Q(r, 1)) : S.type !== 5 && S.type !== 7 && S.type !== 1 && S.type !== 3 && S.type !== 13 ? p === "-" && (s = me, a = fe, Q(r, 2).push(2), n.push(Ms), n.push(We)) : (n.push(f), Q(r, 2)), s = me, a = fe) : h === 10 ? (s = me, a = fe, Q(r, 2), n.push(f)) : h === 11 ? (s = me, a = fe, n.push(f)) : h === 12 ? (s = me, a = fe, Q(r, 6), n.push(f), u[c + 1].type !== 4 && (n.push(We), r.push(6))) : h === 13 && (s = Te, a = ke, n.push(f)), Q(r, -1), l = p;
  }
  for (y = r.length; y--; )
    n.push(pt);
  if (s[5] !== !0)
    throw new M.Exception("complete the expression");
  for (; i--; )
    n.push(pt);
  return n.push(pt), new M(n);
};
var $s = M, Zt = $s;
Zt.prototype.toPostfix = function() {
  for (var e = [], t, n, r, o, s, i = [{ value: "(", type: 4, pre: 0 }], a = this.value, l = 1; l < a.length; l++)
    if (a[l].type === 1 || a[l].type === 3 || a[l].type === 13)
      a[l].type === 1 && (a[l].value = Number(a[l].value)), e.push(a[l]);
    else if (a[l].type === 4)
      i.push(a[l]);
    else if (a[l].type === 5)
      for (; (n = i.pop()).type !== 4; )
        e.push(n);
    else if (a[l].type === 11) {
      for (; (n = i.pop()).type !== 4; )
        e.push(n);
      i.push(n);
    } else {
      t = a[l], o = t.pre, s = i[i.length - 1], r = s.pre;
      var c = s.value == "Math.pow" && t.value == "Math.pow";
      if (o > r)
        i.push(t);
      else {
        for (; r >= o && !c || c && o < r; )
          n = i.pop(), s = i[i.length - 1], e.push(n), r = s.pre, c = t.value == "Math.pow" && s.value == "Math.pow";
        i.push(t);
      }
    }
  return new Zt(e);
};
var Ls = Zt, ze = Ls;
ze.prototype.postfixEval = function(e) {
  e = e || {}, e.PI = Math.PI, e.E = Math.E;
  for (var t = [], n, r, o, s = this.value, i = typeof e.n < "u", a = 0; a < s.length; a++)
    if (s[a].type === 1)
      t.push({ value: s[a].value, type: 1 });
    else if (s[a].type === 3)
      t.push({ value: e[s[a].value], type: 1 });
    else if (s[a].type === 0)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(s[a]) : t[t.length - 1].value = s[a].value(t[t.length - 1].value);
    else if (s[a].type === 7)
      typeof t[t.length - 1].type > "u" ? t[t.length - 1].value.push(s[a]) : t[t.length - 1].value = s[a].value(t[t.length - 1].value);
    else if (s[a].type === 8) {
      for (var l = [], c = 0; c < s[a].numberOfArguments; c++)
        l.push(t.pop().value);
      t.push({ type: 1, value: s[a].value.apply(s[a], l.reverse()) });
    } else
      s[a].type === 10 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r.value = r.concat(n), r.value.push(s[a]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(s[a]), t.push(n)) : t.push({ type: 1, value: s[a].value(r.value, n.value) })) : s[a].type === 2 || s[a].type === 9 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r = r.concat(n), r.push(s[a]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(s[a]), t.push(n)) : t.push({ type: 1, value: s[a].value(r.value, n.value) })) : s[a].type === 12 ? (n = t.pop(), typeof n.type < "u" && (n = [n]), r = t.pop(), o = t.pop(), t.push({ type: 1, value: s[a].value(o.value, r.value, new ze(n)) })) : s[a].type === 13 && (i ? t.push({ value: e[s[a].value], type: 3 }) : t.push([s[a]]));
  if (t.length > 1)
    throw new ze.Exception("Uncaught Syntax error");
  return t[0].value > 1e15 ? "Infinity" : parseFloat(t[0].value.toFixed(15));
};
ze.eval = function(e, t, n) {
  return typeof t > "u" ? this.lex(e).toPostfix().postfixEval() : typeof n > "u" ? typeof t.length < "u" ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(n);
};
var Fs = ze, eo = Fs;
eo.prototype.formulaEval = function() {
  for (var e, t, n, r = [], o = this.value, s = 0; s < o.length; s++)
    o[s].type === 1 || o[s].type === 3 ? r.push({ value: o[s].type === 3 ? o[s].show : o[s].value, type: 1 }) : o[s].type === 13 ? r.push({ value: o[s].show, type: 1 }) : o[s].type === 0 ? r[r.length - 1] = { value: o[s].show + (o[s].show != "-" ? "(" : "") + r[r.length - 1].value + (o[s].show != "-" ? ")" : ""), type: 0 } : o[s].type === 7 ? r[r.length - 1] = { value: (r[r.length - 1].type != 1 ? "(" : "") + r[r.length - 1].value + (r[r.length - 1].type != 1 ? ")" : "") + o[s].show, type: 7 } : o[s].type === 10 ? (e = r.pop(), t = r.pop(), o[s].show === "P" || o[s].show === "C" ? r.push({ value: "<sup>" + t.value + "</sup>" + o[s].show + "<sub>" + e.value + "</sub>", type: 10 }) : r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + "<sup>" + e.value + "</sup>", type: 1 })) : o[s].type === 2 || o[s].type === 9 ? (e = r.pop(), t = r.pop(), r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + o[s].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""), type: o[s].type })) : o[s].type === 12 && (e = r.pop(), t = r.pop(), n = r.pop(), r.push({ value: o[s].show + "(" + n.value + "," + t.value + "," + e.value + ")", type: 12 }));
  return r[0].value;
};
var Vs = eo, Gs = Ns, ks = Os, Ws = Vs, Us = 100, Hs = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, At, qs = zs;
function zs(e, t) {
  At = 0, t = Math.pow(10, t === void 0 ? 5 : t), e = e.replace(/\n+/g, " ");
  function n(o, s, i) {
    if (At++ > Us)
      throw At = 0, new Error("Call stack overflow for " + i);
    if (o === "")
      throw new Error(s + "(): '" + i + "' must contain a non-whitespace string");
    o = r(o, i);
    var a = js(o);
    if (a.length > 1 || o.indexOf("var(") > -1)
      return s + "(" + o + ")";
    var l = a[0] || "";
    l === "%" && (o = o.replace(/\b[0-9\.]+%/g, function(u) {
      return parseFloat(u.slice(0, -1)) * 0.01;
    }));
    var c = o.replace(new RegExp(l, "gi"), ""), f;
    try {
      f = Ws.eval(c);
    } catch {
      return s + "(" + o + ")";
    }
    return l === "%" && (f *= 100), (s.length || l === "%") && (f = Math.round(f * t) / t), f += l, f;
  }
  function r(o, s) {
    o = o.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var i = "", a = o, l; l = Hs.exec(a); ) {
      l[0].index > 0 && (i += a.substring(0, l[0].index));
      var c = Gs("(", ")", a.substring([0].index));
      if (c.body === "")
        throw new Error("'" + o + "' must contain a non-whitespace string");
      var f = n(c.body, "", s);
      i += c.pre + f, a = c.post;
    }
    return i + a;
  }
  return ks(e, /((?:\-[a-z]+\-)?calc)\(/, n);
}
function js(e) {
  for (var t = [], n = [], r = /[\.0-9]([%a-z]+)/gi, o = r.exec(e); o; )
    !o || !o[1] || (n.indexOf(o[1].toLowerCase()) === -1 && (t.push(o[1]), n.push(o[1].toLowerCase())), o = r.exec(e));
  return t;
}
const Pt = /* @__PURE__ */ zr(qs);
var jn = "__react_svg_text_measurement_id";
function Ys(e, t) {
  try {
    var n = document.getElementById(jn);
    if (!n) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttribute("aria-hidden", "true"), r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", n = document.createElementNS("http://www.w3.org/2000/svg", "text"), n.setAttribute("id", jn), r.appendChild(n), document.body.appendChild(r);
    }
    return Object.assign(n.style, t), n.textContent = e, n.getComputedTextLength();
  } catch {
    return null;
  }
}
const Yn = bs(Ys, function(e, t) {
  return e + "_" + JSON.stringify(t);
});
var Ks = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function Xs(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, s;
  for (s = 0; s < r.length; s++)
    o = r[s], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Rt(e) {
  return typeof e == "number";
}
function Kn(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function Js(e) {
  var t = e.verticalAnchor, n = t === void 0 ? "end" : t, r = e.scaleToFit, o = r === void 0 ? !1 : r, s = e.angle, i = e.width, a = e.lineHeight, l = a === void 0 ? "1em" : a, c = e.capHeight, f = c === void 0 ? "0.71em" : c, u = e.children, d = e.style, p = Xs(e, Ks), h = p.x, b = h === void 0 ? 0 : h, g = p.y, C = g === void 0 ? 0 : g, S = !Kn(b) || !Kn(C), y = N.useMemo(function() {
    var w = u == null ? [] : u.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: w.map(function(_) {
        return {
          word: _,
          wordWidth: Yn(_, d) || 0
        };
      }),
      spaceWidth: Yn(" ", d) || 0
    };
  }, [u, d]), E = y.wordsWithWidth, v = y.spaceWidth, D = N.useMemo(function() {
    return S ? [] : i || o ? E.reduce(function(w, _) {
      var B = _.word, T = _.wordWidth, $ = w[w.length - 1];
      if ($ && (i == null || o || ($.width || 0) + T + v < i))
        $.words.push(B), $.width = $.width || 0, $.width += T + v;
      else {
        var W = {
          words: [B],
          width: T
        };
        w.push(W);
      }
      return w;
    }, []) : [{
      words: u == null ? [] : u.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [S, i, o, u, E, v]), O = N.useMemo(function() {
    var w = S ? "" : Pt(n === "start" ? "calc(" + f + ")" : n === "middle" ? "calc(" + (D.length - 1) / 2 + " * -" + l + " + (" + f + " / 2))" : "calc(" + (D.length - 1) + " * -" + l + ")");
    return w;
  }, [S, n, f, D.length, l]), I = N.useMemo(function() {
    var w = [];
    if (S)
      return "";
    if (Rt(b) && Rt(C) && Rt(i) && o && D.length > 0) {
      var _ = D[0].width || 1, B = o === "shrink-only" ? Math.min(i / _, 1) : i / _, T = B, $ = b - B * b, W = C - T * C;
      w.push("matrix(" + B + ", 0, 0, " + T + ", " + $ + ", " + W + ")");
    }
    return s && w.push("rotate(" + s + ", " + b + ", " + C + ")"), w.length > 0 ? w.join(" ") : "";
  }, [S, b, C, i, o, D, s]);
  return {
    wordsByLines: D,
    startDy: O,
    transform: I
  };
}
var Zs = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qt.apply(this, arguments);
}
function Qs(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, s;
  for (s = 0; s < r.length; s++)
    o = r[s], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ei = {
  overflow: "visible"
};
function mf(e) {
  var t = e.dx, n = t === void 0 ? 0 : t, r = e.dy, o = r === void 0 ? 0 : r, s = e.textAnchor, i = s === void 0 ? "start" : s, a = e.innerRef, l = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var c = e.lineHeight, f = c === void 0 ? "1em" : c;
  e.scaleToFit, e.capHeight, e.width;
  var u = Qs(e, Zs), d = u.x, p = d === void 0 ? 0 : d, h = u.fontSize, b = Js(e), g = b.wordsByLines, C = b.startDy, S = b.transform;
  return /* @__PURE__ */ x.createElement("svg", {
    ref: a,
    x: n,
    y: o,
    fontSize: h,
    style: ei
  }, g.length > 0 ? /* @__PURE__ */ x.createElement("text", Qt({
    ref: l,
    transform: S
  }, u, {
    textAnchor: i
  }), g.map(function(y, E) {
    return /* @__PURE__ */ x.createElement("tspan", {
      key: E,
      x: p,
      dy: E === 0 ? C : f
    }, y.words.join(" "));
  })) : null);
}
function pn(e) {
  delete e.qualitative9;
  let t = {};
  for (const [n, r] of Object.entries(e)) {
    const o = String(n);
    if (o.endsWith("reverse"))
      t = { ...e };
    else {
      let s = o.concat("reverse");
      t[s] = [...r].reverse();
    }
  }
  return { ...t, ...e };
}
const ti = {
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
}, ni = {
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
}, ri = {
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
}, oi = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, gf = oi, hf = pn(ni), vf = pn(ti), bf = pn(ri);
var to = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Xn = x.createContext && x.createContext(to), ye = globalThis && globalThis.__assign || function() {
  return ye = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ye.apply(this, arguments);
}, si = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function no(e) {
  return e && e.map(function(t, n) {
    return x.createElement(t.tag, ye({
      key: n
    }, t.attr), no(t.child));
  });
}
function yf(e) {
  return function(t) {
    return x.createElement(ii, ye({
      attr: ye({}, e.attr)
    }, t), no(e.child));
  };
}
function ii(e) {
  var t = function(n) {
    var r = e.attr, o = e.size, s = e.title, i = si(e, ["attr", "size", "title"]), a = o || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), x.createElement("svg", ye({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, i, {
      className: l,
      style: ye(ye({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && x.createElement("title", null, s), e.children);
  };
  return Xn !== void 0 ? x.createElement(Xn.Consumer, null, function(n) {
    return t(n);
  }) : t(to);
}
var en = { exports: {} }, Tt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function ai() {
  if (Jn)
    return Tt;
  Jn = 1;
  var e = N;
  function t(u, d) {
    return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, s = e.useLayoutEffect, i = e.useDebugValue;
  function a(u, d) {
    var p = d(), h = r({ inst: { value: p, getSnapshot: d } }), b = h[0].inst, g = h[1];
    return s(function() {
      b.value = p, b.getSnapshot = d, l(b) && g({ inst: b });
    }, [u, p, d]), o(function() {
      return l(b) && g({ inst: b }), u(function() {
        l(b) && g({ inst: b });
      });
    }, [u]), i(p), p;
  }
  function l(u) {
    var d = u.getSnapshot;
    u = u.value;
    try {
      var p = d();
      return !n(u, p);
    } catch {
      return !0;
    }
  }
  function c(u, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
  return Tt.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Tt;
}
var Bt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function li() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var E = arguments.length, v = new Array(E > 1 ? E - 1 : 0), D = 1; D < E; D++)
          v[D - 1] = arguments[D];
        r("error", y, v);
      }
    }
    function r(y, E, v) {
      {
        var D = t.ReactDebugCurrentFrame, O = D.getStackAddendum();
        O !== "" && (E += "%s", v = v.concat([O]));
        var I = v.map(function(w) {
          return String(w);
        });
        I.unshift("Warning: " + E), Function.prototype.apply.call(console[y], console, I);
      }
    }
    function o(y, E) {
      return y === E && (y !== 0 || 1 / y === 1 / E) || y !== y && E !== E;
    }
    var s = typeof Object.is == "function" ? Object.is : o, i = e.useState, a = e.useEffect, l = e.useLayoutEffect, c = e.useDebugValue, f = !1, u = !1;
    function d(y, E, v) {
      f || e.startTransition !== void 0 && (f = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var D = E();
      if (!u) {
        var O = E();
        s(D, O) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), u = !0);
      }
      var I = i({
        inst: {
          value: D,
          getSnapshot: E
        }
      }), w = I[0].inst, _ = I[1];
      return l(function() {
        w.value = D, w.getSnapshot = E, p(w) && _({
          inst: w
        });
      }, [y, D, E]), a(function() {
        p(w) && _({
          inst: w
        });
        var B = function() {
          p(w) && _({
            inst: w
          });
        };
        return y(B);
      }, [y]), c(D), D;
    }
    function p(y) {
      var E = y.getSnapshot, v = y.value;
      try {
        var D = E();
        return !s(v, D);
      } catch {
        return !0;
      }
    }
    function h(y, E, v) {
      return E();
    }
    var b = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !b, C = g ? h : d, S = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : C;
    Bt.useSyncExternalStore = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bt;
}
process.env.NODE_ENV === "production" ? en.exports = ai() : en.exports = li();
var mn = en.exports, Mt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function ci() {
  if (Qn)
    return Mt;
  Qn = 1;
  var e = N, t = mn;
  function n(c, f) {
    return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return Mt.useSyncExternalStoreWithSelector = function(c, f, u, d, p) {
    var h = s(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else
      b = h.current;
    h = a(function() {
      function C(D) {
        if (!S) {
          if (S = !0, y = D, D = d(D), p !== void 0 && b.hasValue) {
            var O = b.value;
            if (p(O, D))
              return E = O;
          }
          return E = D;
        }
        if (O = E, r(y, D))
          return O;
        var I = d(D);
        return p !== void 0 && p(O, I) ? O : (y = D, E = I);
      }
      var S = !1, y, E, v = u === void 0 ? null : u;
      return [function() {
        return C(f());
      }, v === null ? void 0 : function() {
        return C(v());
      }];
    }, [f, u, d, p]);
    var g = o(c, h[0], h[1]);
    return i(function() {
      b.hasValue = !0, b.value = g;
    }, [g]), l(g), g;
  }, Mt;
}
var $t = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function ui() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = mn;
    function n(f, u) {
      return f === u && (f !== 0 || 1 / f === 1 / u) || f !== f && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, a = e.useMemo, l = e.useDebugValue;
    function c(f, u, d, p, h) {
      var b = s(null), g;
      b.current === null ? (g = {
        hasValue: !1,
        value: null
      }, b.current = g) : g = b.current;
      var C = a(function() {
        var v = !1, D, O, I = function(T) {
          if (!v) {
            v = !0, D = T;
            var $ = p(T);
            if (h !== void 0 && g.hasValue) {
              var W = g.value;
              if (h(W, $))
                return O = W, W;
            }
            return O = $, $;
          }
          var z = D, K = O;
          if (r(z, T))
            return K;
          var X = p(T);
          return h !== void 0 && h(K, X) ? K : (D = T, O = X, X);
        }, w = d === void 0 ? null : d, _ = function() {
          return I(u());
        }, B = w === null ? void 0 : function() {
          return I(w());
        };
        return [_, B];
      }, [u, d, p, h]), S = C[0], y = C[1], E = o(f, S, y);
      return i(function() {
        g.hasValue = !0, g.value = E;
      }, [E]), l(E), E;
    }
    $t.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), $t;
}
process.env.NODE_ENV === "production" ? ci() : ui();
function di(e) {
  e();
}
let ro = di;
const fi = (e) => ro = e, pi = () => ro, tr = Symbol.for("react-redux-context"), nr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function mi() {
  var e;
  if (!N.createContext)
    return {};
  const t = (e = nr[tr]) != null ? e : nr[tr] = /* @__PURE__ */ new Map();
  let n = t.get(N.createContext);
  return n || (n = N.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(N.createContext, n)), n;
}
const oo = /* @__PURE__ */ mi(), gi = () => {
  throw new Error("uSES not initialized!");
};
var tn = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function hi() {
  if (rr)
    return F;
  rr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function y(v) {
    if (typeof v == "object" && v !== null) {
      var D = v.$$typeof;
      switch (D) {
        case t:
          switch (v = v.type, v) {
            case l:
            case c:
            case r:
            case s:
            case o:
            case u:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case f:
                case h:
                case p:
                case i:
                  return v;
                default:
                  return D;
              }
          }
        case n:
          return D;
      }
    }
  }
  function E(v) {
    return y(v) === c;
  }
  return F.AsyncMode = l, F.ConcurrentMode = c, F.ContextConsumer = a, F.ContextProvider = i, F.Element = t, F.ForwardRef = f, F.Fragment = r, F.Lazy = h, F.Memo = p, F.Portal = n, F.Profiler = s, F.StrictMode = o, F.Suspense = u, F.isAsyncMode = function(v) {
    return E(v) || y(v) === l;
  }, F.isConcurrentMode = E, F.isContextConsumer = function(v) {
    return y(v) === a;
  }, F.isContextProvider = function(v) {
    return y(v) === i;
  }, F.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, F.isForwardRef = function(v) {
    return y(v) === f;
  }, F.isFragment = function(v) {
    return y(v) === r;
  }, F.isLazy = function(v) {
    return y(v) === h;
  }, F.isMemo = function(v) {
    return y(v) === p;
  }, F.isPortal = function(v) {
    return y(v) === n;
  }, F.isProfiler = function(v) {
    return y(v) === s;
  }, F.isStrictMode = function(v) {
    return y(v) === o;
  }, F.isSuspense = function(v) {
    return y(v) === u;
  }, F.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === c || v === s || v === o || v === u || v === d || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === p || v.$$typeof === i || v.$$typeof === a || v.$$typeof === f || v.$$typeof === g || v.$$typeof === C || v.$$typeof === S || v.$$typeof === b);
  }, F.typeOf = y, F;
}
var V = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function vi() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function y(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === c || A === s || A === o || A === u || A === d || typeof A == "object" && A !== null && (A.$$typeof === h || A.$$typeof === p || A.$$typeof === i || A.$$typeof === a || A.$$typeof === f || A.$$typeof === g || A.$$typeof === C || A.$$typeof === S || A.$$typeof === b);
    }
    function E(A) {
      if (typeof A == "object" && A !== null) {
        var de = A.$$typeof;
        switch (de) {
          case t:
            var R = A.type;
            switch (R) {
              case l:
              case c:
              case r:
              case s:
              case o:
              case u:
                return R;
              default:
                var Re = R && R.$$typeof;
                switch (Re) {
                  case a:
                  case f:
                  case h:
                  case p:
                  case i:
                    return Re;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var v = l, D = c, O = a, I = i, w = t, _ = f, B = r, T = h, $ = p, W = n, z = s, K = o, X = u, re = !1;
    function H(A) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ae(A) || E(A) === l;
    }
    function ae(A) {
      return E(A) === c;
    }
    function ge(A) {
      return E(A) === a;
    }
    function he(A) {
      return E(A) === i;
    }
    function q(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function Ae(A) {
      return E(A) === f;
    }
    function Ce(A) {
      return E(A) === r;
    }
    function Ne(A) {
      return E(A) === h;
    }
    function Pe(A) {
      return E(A) === p;
    }
    function Ge(A) {
      return E(A) === n;
    }
    function ve(A) {
      return E(A) === s;
    }
    function we(A) {
      return E(A) === o;
    }
    function ut(A) {
      return E(A) === u;
    }
    V.AsyncMode = v, V.ConcurrentMode = D, V.ContextConsumer = O, V.ContextProvider = I, V.Element = w, V.ForwardRef = _, V.Fragment = B, V.Lazy = T, V.Memo = $, V.Portal = W, V.Profiler = z, V.StrictMode = K, V.Suspense = X, V.isAsyncMode = H, V.isConcurrentMode = ae, V.isContextConsumer = ge, V.isContextProvider = he, V.isElement = q, V.isForwardRef = Ae, V.isFragment = Ce, V.isLazy = Ne, V.isMemo = Pe, V.isPortal = Ge, V.isProfiler = ve, V.isStrictMode = we, V.isSuspense = ut, V.isValidElementType = y, V.typeOf = E;
  }()), V;
}
process.env.NODE_ENV === "production" ? tn.exports = hi() : tn.exports = vi();
var bi = tn.exports, gn = bi, yi = {
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
}, Ei = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Di = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, so = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, hn = {};
hn[gn.ForwardRef] = Di;
hn[gn.Memo] = so;
function sr(e) {
  return gn.isMemo(e) ? so : hn[e.$$typeof] || yi;
}
var Si = Object.defineProperty, Ci = Object.getOwnPropertyNames, ir = Object.getOwnPropertySymbols, Ni = Object.getOwnPropertyDescriptor, wi = Object.getPrototypeOf, ar = Object.prototype;
function io(e, t, n) {
  if (typeof t != "string") {
    if (ar) {
      var r = wi(t);
      r && r !== ar && io(e, r, n);
    }
    var o = Ci(t);
    ir && (o = o.concat(ir(t)));
    for (var s = sr(e), i = sr(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!Ei[l] && !(n && n[l]) && !(i && i[l]) && !(s && s[l])) {
        var c = Ni(t, l);
        try {
          Si(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var xi = io;
const lr = /* @__PURE__ */ zr(xi);
var nn = { exports: {} }, G = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Oi() {
  if (cr)
    return G;
  cr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(g) {
    if (typeof g == "object" && g !== null) {
      var C = g.$$typeof;
      switch (C) {
        case e:
          switch (g = g.type, g) {
            case n:
            case o:
            case r:
            case c:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case a:
                case i:
                case l:
                case d:
                case u:
                case s:
                  return g;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return G.ContextConsumer = i, G.ContextProvider = s, G.Element = e, G.ForwardRef = l, G.Fragment = n, G.Lazy = d, G.Memo = u, G.Portal = t, G.Profiler = o, G.StrictMode = r, G.Suspense = c, G.SuspenseList = f, G.isAsyncMode = function() {
    return !1;
  }, G.isConcurrentMode = function() {
    return !1;
  }, G.isContextConsumer = function(g) {
    return b(g) === i;
  }, G.isContextProvider = function(g) {
    return b(g) === s;
  }, G.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, G.isForwardRef = function(g) {
    return b(g) === l;
  }, G.isFragment = function(g) {
    return b(g) === n;
  }, G.isLazy = function(g) {
    return b(g) === d;
  }, G.isMemo = function(g) {
    return b(g) === u;
  }, G.isPortal = function(g) {
    return b(g) === t;
  }, G.isProfiler = function(g) {
    return b(g) === o;
  }, G.isStrictMode = function(g) {
    return b(g) === r;
  }, G.isSuspense = function(g) {
    return b(g) === c;
  }, G.isSuspenseList = function(g) {
    return b(g) === f;
  }, G.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === o || g === r || g === c || g === f || g === p || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === u || g.$$typeof === s || g.$$typeof === i || g.$$typeof === l || g.$$typeof === h || g.getModuleId !== void 0);
  }, G.typeOf = b, G;
}
var k = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function _i() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = !1, b = !1, g = !1, C = !1, S = !1, y;
    y = Symbol.for("react.module.reference");
    function E(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === o || S || R === r || R === c || R === f || C || R === p || h || b || g || typeof R == "object" && R !== null && (R.$$typeof === d || R.$$typeof === u || R.$$typeof === s || R.$$typeof === i || R.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === y || R.getModuleId !== void 0));
    }
    function v(R) {
      if (typeof R == "object" && R !== null) {
        var Re = R.$$typeof;
        switch (Re) {
          case e:
            var dt = R.type;
            switch (dt) {
              case n:
              case o:
              case r:
              case c:
              case f:
                return dt;
              default:
                var Wn = dt && dt.$$typeof;
                switch (Wn) {
                  case a:
                  case i:
                  case l:
                  case d:
                  case u:
                  case s:
                    return Wn;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var D = i, O = s, I = e, w = l, _ = n, B = d, T = u, $ = t, W = o, z = r, K = c, X = f, re = !1, H = !1;
    function ae(R) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ge(R) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function he(R) {
      return v(R) === i;
    }
    function q(R) {
      return v(R) === s;
    }
    function Ae(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function Ce(R) {
      return v(R) === l;
    }
    function Ne(R) {
      return v(R) === n;
    }
    function Pe(R) {
      return v(R) === d;
    }
    function Ge(R) {
      return v(R) === u;
    }
    function ve(R) {
      return v(R) === t;
    }
    function we(R) {
      return v(R) === o;
    }
    function ut(R) {
      return v(R) === r;
    }
    function A(R) {
      return v(R) === c;
    }
    function de(R) {
      return v(R) === f;
    }
    k.ContextConsumer = D, k.ContextProvider = O, k.Element = I, k.ForwardRef = w, k.Fragment = _, k.Lazy = B, k.Memo = T, k.Portal = $, k.Profiler = W, k.StrictMode = z, k.Suspense = K, k.SuspenseList = X, k.isAsyncMode = ae, k.isConcurrentMode = ge, k.isContextConsumer = he, k.isContextProvider = q, k.isElement = Ae, k.isForwardRef = Ce, k.isFragment = Ne, k.isLazy = Pe, k.isMemo = Ge, k.isPortal = ve, k.isProfiler = we, k.isStrictMode = ut, k.isSuspense = A, k.isSuspenseList = de, k.isValidElementType = E, k.typeOf = v;
  }()), k;
}
process.env.NODE_ENV === "production" ? nn.exports = Oi() : nn.exports = _i();
var dr = nn.exports;
function vn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Lt(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || vn(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function Ii(e, t, n) {
  Lt(e, "mapStateToProps"), Lt(t, "mapDispatchToProps"), Lt(n, "mergeProps");
}
const Ai = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Pi(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: s,
  areStatePropsEqual: i
}) {
  let a = !1, l, c, f, u, d;
  function p(S, y) {
    return l = S, c = y, f = e(l, c), u = t(r, c), d = n(f, u, c), a = !0, d;
  }
  function h() {
    return f = e(l, c), t.dependsOnOwnProps && (u = t(r, c)), d = n(f, u, c), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(l, c)), t.dependsOnOwnProps && (u = t(r, c)), d = n(f, u, c), d;
  }
  function g() {
    const S = e(l, c), y = !i(S, f);
    return f = S, y && (d = n(f, u, c)), d;
  }
  function C(S, y) {
    const E = !s(y, c), v = !o(S, l, y, c);
    return l = S, c = y, E && v ? h() : E ? b() : v ? g() : d;
  }
  return function(y, E) {
    return a ? C(y, E) : p(y, E);
  };
}
function Ri(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, s = jr(t, Ai);
  const i = n(e, s), a = r(e, s), l = o(e, s);
  return process.env.NODE_ENV !== "production" && Ii(i, a, l), Pi(i, a, l, e, s);
}
function Ti(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...s) => t(o(...s)));
  }
  return n;
}
function Bi(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function ao(e, t, n) {
  Bi(e) || vn(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
}
function rn(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function fr(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function lo(e, t) {
  return function(r, {
    displayName: o
  }) {
    const s = function(a, l) {
      return s.dependsOnOwnProps ? s.mapToProps(a, l) : s.mapToProps(a, void 0);
    };
    return s.dependsOnOwnProps = !0, s.mapToProps = function(a, l) {
      s.mapToProps = e, s.dependsOnOwnProps = fr(e);
      let c = s(a, l);
      return typeof c == "function" && (s.mapToProps = c, s.dependsOnOwnProps = fr(c), c = s(a, l)), process.env.NODE_ENV !== "production" && ao(c, o, t), c;
    }, s;
  };
}
function bn(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function Mi(e) {
  return e && typeof e == "object" ? rn((t) => (
    // @ts-ignore
    Ti(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    lo(e, "mapDispatchToProps")
  ) : bn(e, "mapDispatchToProps") : rn((t) => ({
    dispatch: t
  }));
}
function $i(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    lo(e, "mapStateToProps")
  ) : bn(e, "mapStateToProps") : rn(() => ({}));
}
function Li(e, t, n) {
  return Be({}, n, e, t);
}
function Fi(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let s = !1, i;
    return function(l, c, f) {
      const u = e(l, c, f);
      return s ? o(u, i) || (i = u) : (s = !0, i = u, process.env.NODE_ENV !== "production" && ao(i, r, "mergeProps")), i;
    };
  };
}
function Vi(e) {
  return e ? typeof e == "function" ? Fi(e) : bn(e, "mergeProps") : () => Li;
}
function Gi() {
  const e = pi();
  let t = null, n = null;
  return {
    clear() {
      t = null, n = null;
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      let r = [], o = t;
      for (; o; )
        r.push(o), o = o.next;
      return r;
    },
    subscribe(r) {
      let o = !0, s = n = {
        callback: r,
        next: null,
        prev: n
      };
      return s.prev ? s.prev.next = s : t = s, function() {
        !o || t === null || (o = !1, s.next ? s.next.prev = s.prev : n = s.prev, s.prev ? s.prev.next = s.next : t = s.next);
      };
    }
  };
}
const pr = {
  notify() {
  },
  get: () => []
};
function co(e, t) {
  let n, r = pr, o = 0, s = !1;
  function i(b) {
    f();
    const g = r.subscribe(b);
    let C = !1;
    return () => {
      C || (C = !0, g(), u());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function c() {
    return s;
  }
  function f() {
    o++, n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = Gi());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = pr);
  }
  function d() {
    s || (s = !0, f());
  }
  function p() {
    s && (s = !1, u());
  }
  const h = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return h;
}
const ki = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", bt = ki ? N.useLayoutEffect : N.useEffect;
function mr(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ft(e, t) {
  if (mr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !mr(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const Wi = ["reactReduxForwardedRef"];
let uo = gi;
const Ui = (e) => {
  uo = e;
}, Hi = [null, null], qi = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function zi(e, t, n) {
  bt(() => e(...t), n);
}
function ji(e, t, n, r, o, s) {
  e.current = r, n.current = !1, o.current && (o.current = null, s());
}
function Yi(e, t, n, r, o, s, i, a, l, c, f) {
  if (!e)
    return () => {
    };
  let u = !1, d = null;
  const p = () => {
    if (u || !a.current)
      return;
    const b = t.getState();
    let g, C;
    try {
      g = r(b, o.current);
    } catch (S) {
      C = S, d = S;
    }
    C || (d = null), g === s.current ? i.current || c() : (s.current = g, l.current = g, i.current = !0, f());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (u = !0, n.tryUnsubscribe(), n.onStateChange = null, d)
      throw d;
  };
}
function Ki(e, t) {
  return e === t;
}
let gr = !1;
function fo(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Ki,
  areOwnPropsEqual: s = Ft,
  areStatePropsEqual: i = Ft,
  areMergedPropsEqual: a = Ft,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: c = oo
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !gr && (gr = !0, vn('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = c, u = $i(e), d = Mi(t), p = Vi(n), h = !!e;
  return (g) => {
    if (process.env.NODE_ENV !== "production" && !dr.isValidElementType(g))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${qi(g)}`);
    const C = g.displayName || g.name || "Component", S = `Connect(${C})`, y = {
      shouldHandleStateChanges: h,
      displayName: S,
      wrappedComponentName: C,
      WrappedComponent: g,
      // @ts-ignore
      initMapStateToProps: u,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: i,
      areOwnPropsEqual: s,
      areMergedPropsEqual: a
    };
    function E(O) {
      const [I, w, _] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: A
        } = O, de = jr(O, Wi);
        return [O.context, A, de];
      }, [O]), B = N.useMemo(() => I && I.Consumer && // @ts-ignore
      dr.isContextConsumer(/* @__PURE__ */ N.createElement(I.Consumer, null)) ? I : f, [I, f]), T = N.useContext(B), $ = !!O.store && !!O.store.getState && !!O.store.dispatch, W = !!T && !!T.store;
      if (process.env.NODE_ENV !== "production" && !$ && !W)
        throw new Error(`Could not find "store" in the context of "${S}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${S} in connect options.`);
      const z = $ ? O.store : T.store, K = W ? T.getServerState : z.getState, X = N.useMemo(() => Ri(z.dispatch, y), [z]), [re, H] = N.useMemo(() => {
        if (!h)
          return Hi;
        const A = co(z, $ ? void 0 : T.subscription), de = A.notifyNestedSubs.bind(A);
        return [A, de];
      }, [z, $, T]), ae = N.useMemo(() => $ ? T : Be({}, T, {
        subscription: re
      }), [$, T, re]), ge = N.useRef(), he = N.useRef(_), q = N.useRef(), Ae = N.useRef(!1);
      N.useRef(!1);
      const Ce = N.useRef(!1), Ne = N.useRef();
      bt(() => (Ce.current = !0, () => {
        Ce.current = !1;
      }), []);
      const Pe = N.useMemo(() => () => q.current && _ === he.current ? q.current : X(z.getState(), _), [z, _]), Ge = N.useMemo(() => (de) => re ? Yi(
        h,
        z,
        re,
        // @ts-ignore
        X,
        he,
        ge,
        Ae,
        Ce,
        q,
        H,
        de
      ) : () => {
      }, [re]);
      zi(ji, [he, ge, Ae, _, q, H]);
      let ve;
      try {
        ve = uo(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Ge,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Pe,
          K ? () => X(K(), _) : Pe
        );
      } catch (A) {
        throw Ne.current && (A.message += `
The error may be correlated with this previous error:
${Ne.current.stack}

`), A;
      }
      bt(() => {
        Ne.current = void 0, q.current = void 0, ge.current = ve;
      });
      const we = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(g, Be({}, ve, {
          ref: w
        }))
      ), [w, g, ve]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(B.Provider, {
        value: ae
      }, we) : we, [B, we, ae]);
    }
    const D = N.memo(E);
    if (D.WrappedComponent = g, D.displayName = E.displayName = S, l) {
      const I = N.forwardRef(function(_, B) {
        return /* @__PURE__ */ N.createElement(D, Be({}, _, {
          reactReduxForwardedRef: B
        }));
      });
      return I.displayName = S, I.WrappedComponent = g, lr(I, g);
    }
    return lr(D, g);
  };
}
function Xi({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: s = "once"
}) {
  const i = N.useMemo(() => {
    const c = co(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: s
    };
  }, [e, r, o, s]), a = N.useMemo(() => e.getState(), [e]);
  bt(() => {
    const {
      subscription: c
    } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, a]);
  const l = t || oo;
  return /* @__PURE__ */ N.createElement(l.Provider, {
    value: i
  }, n);
}
Ui(mn.useSyncExternalStore);
fi(fn.unstable_batchedUpdates);
function Ji(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function po(e, t) {
  var n = N.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = N.useRef(!0), o = N.useRef(n), s = r.current || !!(t && o.current.inputs && Ji(t, o.current.inputs)), i = s ? o.current : {
    inputs: t,
    result: e()
  };
  return N.useEffect(function() {
    r.current = !1, o.current = i;
  }, [i]), i.result;
}
function Zi(e, t) {
  return po(function() {
    return e;
  }, t);
}
var L = po, P = Zi, pe = function(t) {
  var n = t.top, r = t.right, o = t.bottom, s = t.left, i = r - s, a = o - n, l = {
    top: n,
    right: r,
    bottom: o,
    left: s,
    width: i,
    height: a,
    x: s,
    y: n,
    center: {
      x: (r + s) / 2,
      y: (o + n) / 2
    }
  };
  return l;
}, yn = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, hr = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, Qi = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Vt = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, En = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Vt : r, s = t.border, i = s === void 0 ? Vt : s, a = t.padding, l = a === void 0 ? Vt : a, c = pe(yn(n, o)), f = pe(hr(n, i)), u = pe(hr(f, l));
  return {
    marginBox: c,
    borderBox: pe(n),
    paddingBox: f,
    contentBox: u,
    margin: o,
    border: i,
    padding: l
  };
}, le = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Hn(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : Hn(!1)), o;
}, ea = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, yt = function(t, n) {
  var r = t.borderBox, o = t.border, s = t.margin, i = t.padding, a = Qi(r, n);
  return En({
    borderBox: a,
    border: o,
    margin: s,
    padding: i
  });
}, Et = function(t, n) {
  return n === void 0 && (n = ea()), yt(t, n);
}, mo = function(t, n) {
  var r = {
    top: le(n.marginTop),
    right: le(n.marginRight),
    bottom: le(n.marginBottom),
    left: le(n.marginLeft)
  }, o = {
    top: le(n.paddingTop),
    right: le(n.paddingRight),
    bottom: le(n.paddingBottom),
    left: le(n.paddingLeft)
  }, s = {
    top: le(n.borderTopWidth),
    right: le(n.borderRightWidth),
    bottom: le(n.borderBottomWidth),
    left: le(n.borderLeftWidth)
  };
  return En({
    borderBox: t,
    margin: r,
    padding: o,
    border: s
  });
}, go = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return mo(n, r);
}, vr = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function ta(e, t) {
  return !!(e === t || vr(e) && vr(t));
}
function na(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!ta(e[n], t[n]))
      return !1;
  return !0;
}
function j(e, t) {
  t === void 0 && (t = na);
  var n = null;
  function r() {
    for (var o = [], s = 0; s < arguments.length; s++)
      o[s] = arguments[s];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var i = e.apply(this, o);
    return n = {
      lastResult: i,
      lastArgs: o,
      lastThis: this
    }, i;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var ra = function(t) {
  var n = [], r = null, o = function() {
    for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++)
      a[l] = arguments[l];
    n = a, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const Ke = ra, oa = process.env.NODE_ENV === "production", sa = /[ \t]{2,}/g, ia = /^[ \t]*/gm, br = (e) => e.replace(sa, " ").replace(ia, "").trim(), aa = (e) => br(`
  %c@hello-pangea/dnd

  %c${br(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), la = (e) => [aa(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], ca = "__@hello-pangea/dnd-disable-dev-warnings";
function ho(e, t) {
  oa || typeof window < "u" && window[ca] || console[e](...la(t));
}
const U = ho.bind(null, "warn"), on = ho.bind(null, "error");
function Ee() {
}
function ua(e, t) {
  return {
    ...e,
    ...t
  };
}
function ce(e, t, n) {
  const r = t.map((o) => {
    const s = ua(n, o.options);
    return e.addEventListener(o.eventName, o.fn, s), function() {
      e.removeEventListener(o.eventName, o.fn, s);
    };
  });
  return function() {
    r.forEach((s) => {
      s();
    });
  };
}
const da = process.env.NODE_ENV === "production", yr = "Invariant failed";
class Xe extends Error {
}
Xe.prototype.toString = function() {
  return this.message;
};
function m(e, t) {
  if (!e)
    throw da ? new Xe(yr) : new Xe(`${yr}: ${t || ""}`);
}
class fa extends x.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Ee, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && U(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof Xe && (n.preventDefault(), process.env.NODE_ENV !== "production" && on(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = ce(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Xe) {
      process.env.NODE_ENV !== "production" && on(t.message), this.setState({});
      return;
    }
    throw t;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const pa = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Dt = (e) => e + 1, ma = (e) => `
  You have lifted an item in position ${Dt(e.source.index)}
`, vo = (e, t) => {
  const n = e.droppableId === t.droppableId, r = Dt(e.index), o = Dt(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, bo = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, ga = (e) => {
  const t = e.destination;
  if (t)
    return vo(e.source, t);
  const n = e.combine;
  return n ? bo(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Er = (e) => `
  The item has returned to its starting position
  of ${Dt(e.index)}
`, ha = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Er(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${vo(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${bo(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Er(e.source)}
  `;
}, va = {
  dragHandleUsageInstructions: pa,
  onDragStart: ma,
  onDragUpdate: ga,
  onDragEnd: ha
};
var vt = va;
const Y = {
  x: 0,
  y: 0
}, J = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), oe = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), De = (e, t) => e.x === t.x && e.y === t.y, Fe = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), _e = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, Je = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Dr = (e, t) => Math.min(...t.map((n) => Je(e, n))), yo = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var ba = (e, t) => {
  const n = pe({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const ot = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Sr = (e) => [{
  x: e.left,
  y: e.top
}, {
  x: e.right,
  y: e.top
}, {
  x: e.left,
  y: e.bottom
}, {
  x: e.right,
  y: e.bottom
}], ya = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ea = (e, t) => t ? ot(e, t.scroll.diff.displacement) : e, Da = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, Sa = (e, t) => t && t.shouldClipSubject ? ba(t.pageMarginBox, e) : pe(e);
var Me = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = Ea(e.marginBox, r), s = Da(o, n, t), i = Sa(s, r);
  return {
    page: e,
    withPlaceholder: t,
    active: i
  };
}, Dn = (e, t) => {
  e.frame || (process.env.NODE_ENV, m(!1));
  const n = e.frame, r = oe(t, n.scroll.initial), o = Fe(r), s = {
    ...n,
    scroll: {
      initial: n.scroll.initial,
      current: t,
      diff: {
        value: r,
        displacement: o
      },
      max: n.scroll.max
    }
  }, i = Me({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: s
  });
  return {
    ...e,
    frame: s,
    subject: i
  };
};
const Eo = j((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Do = j((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Nt = j((e) => Object.values(e)), Ca = j((e) => Object.values(e));
var Ie = j((e, t) => Ca(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Sn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function wt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var xt = j((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), Na = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Sn(o))
    return null;
  function i(p) {
    const h = {
      type: "COMBINE",
      combine: {
        draggableId: p,
        droppableId: n.descriptor.id
      }
    };
    return {
      ...o,
      at: h
    };
  }
  const a = o.displaced.all, l = a.length ? a[0] : null;
  if (e)
    return l ? i(l) : null;
  const c = xt(t, r);
  if (!l) {
    if (!c.length)
      return null;
    const p = c[c.length - 1];
    return i(p.descriptor.id);
  }
  const f = c.findIndex((p) => p.descriptor.id === l);
  f === -1 && (process.env.NODE_ENV !== "production" ? m(!1, "Could not find displaced item in set") : m(!1));
  const u = f - 1;
  if (u < 0)
    return null;
  const d = c[u];
  return i(d.descriptor.id);
}, Ve = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const So = {
  point: Y,
  value: 0
}, Ze = {
  invisible: {},
  visible: {},
  all: []
}, wa = {
  displaced: Ze,
  displacedBy: So,
  at: null
};
var xa = wa, ue = (e, t) => (n) => e <= n && n <= t, Co = (e) => {
  const t = ue(e.top, e.bottom), n = ue(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const s = t(r.top) || t(r.bottom), i = n(r.left) || n(r.right);
    if (s && i)
      return !0;
    const l = r.top < e.top && r.bottom > e.bottom, c = r.left < e.left && r.right > e.right;
    return l && c ? !0 : l && i || c && s;
  };
}, Oa = (e) => {
  const t = ue(e.top, e.bottom), n = ue(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Cn = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, No = {
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
var _a = (e) => (t) => {
  const n = ue(t.top, t.bottom), r = ue(t.left, t.right);
  return (o) => e === Cn ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const Ia = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : Y;
  return ot(e, n);
}, Aa = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, Pa = (e, t, n) => n(t)(e), Nn = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const s = r ? Ia(e, t) : e;
  return Aa(s, t, o) && Pa(s, n, o);
}, Ra = (e) => Nn({
  ...e,
  isVisibleThroughFrameFn: Co
}), wo = (e) => Nn({
  ...e,
  isVisibleThroughFrameFn: Oa
}), Ta = (e) => Nn({
  ...e,
  isVisibleThroughFrameFn: _a(e.destination.axis)
}), Ba = (e, t, n) => {
  if (typeof n == "boolean")
    return n;
  if (!t)
    return !0;
  const {
    invisible: r,
    visible: o
  } = t;
  if (r[e])
    return !1;
  const s = o[e];
  return s ? s.shouldAnimate : !0;
};
function Ma(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return pe(yn(n, r));
}
function Qe({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: s
}) {
  return e.reduce(function(a, l) {
    const c = Ma(l, n), f = l.descriptor.id;
    if (a.all.push(f), !Ra({
      target: c,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[l.descriptor.id] = !0, a;
    const d = Ba(f, s, o), p = {
      draggableId: f,
      shouldAnimate: d
    };
    return a.visible[f] = p, a;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function $a(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Cr({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = $a(e, {
    inHomeList: t
  });
  return {
    displaced: Ze,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: o
      }
    }
  };
}
function St({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: s,
  index: i,
  forceShouldAnimate: a
}) {
  const l = Ve(e, n);
  if (i == null)
    return Cr({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: n
    });
  const c = t.find((h) => h.descriptor.index === i);
  if (!c)
    return Cr({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: n
    });
  const f = xt(e, t), u = t.indexOf(c), d = f.slice(u);
  return {
    displaced: Qe({
      afterDragging: d,
      destination: n,
      displacedBy: o,
      last: s,
      viewport: r.frame,
      forceShouldAnimate: a
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: i
      }
    }
  };
}
function Se(e, t) {
  return !!t.effected[e];
}
var La = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const s = r.draggableId, a = n[s].descriptor.index;
  return Se(s, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, Fa = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, s = e ? o + 1 : o - 1, i = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, l = t ? a : a + 1;
  return s < i || s > l ? null : s;
}, Va = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: s,
  previousImpact: i,
  viewport: a,
  afterCritical: l
}) => {
  const c = i.at;
  if (c || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot move in direction without previous impact location") : m(!1)), c.type === "REORDER") {
    const u = Fa({
      isMovingForward: e,
      isInHomeList: t,
      location: c.destination,
      insideDestination: s
    });
    return u == null ? null : St({
      draggable: n,
      insideDestination: s,
      destination: o,
      viewport: a,
      last: i.displaced,
      displacedBy: i.displacedBy,
      index: u
    });
  }
  const f = La({
    isMovingForward: e,
    destination: o,
    displaced: i.displaced,
    draggables: r,
    combine: c.combine,
    afterCritical: l
  });
  return f == null ? null : St({
    draggable: n,
    insideDestination: s,
    destination: o,
    viewport: a,
    last: i.displaced,
    displacedBy: i.displacedBy,
    index: f
  });
}, Ga = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Se(n, t) ? o ? Y : Fe(r.point) : o ? r.point : Y;
}, ka = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = wt(t);
  r || (process.env.NODE_ENV, m(!1));
  const o = r.draggableId, s = n[o].page.borderBox.center, i = Ga({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return J(s, i);
};
const xo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Wa = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, wn = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Nr = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => _e(e.line, t.marginBox[e.end] + xo(e, n), wn(e, t.marginBox, n)), wr = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => _e(e.line, t.marginBox[e.start] - Wa(e, n), wn(e, t.marginBox, n)), Ua = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => _e(e.line, t.contentBox[e.start] + xo(e, n), wn(e, t.contentBox, n));
var Ha = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const s = Ie(r.descriptor.id, n), i = t.page, a = r.axis;
  if (!s.length)
    return Ua({
      axis: a,
      moveInto: r.page,
      isMoving: i
    });
  const {
    displaced: l,
    displacedBy: c
  } = e, f = l.all[0];
  if (f) {
    const d = n[f];
    if (Se(f, o))
      return wr({
        axis: a,
        moveRelativeTo: d.page,
        isMoving: i
      });
    const p = yt(d.page, c.point);
    return wr({
      axis: a,
      moveRelativeTo: p,
      isMoving: i
    });
  }
  const u = s[s.length - 1];
  if (u.descriptor.id === t.descriptor.id)
    return i.borderBox.center;
  if (Se(u.descriptor.id, o)) {
    const d = yt(u.page, Fe(o.displacedBy.point));
    return Nr({
      axis: a,
      moveRelativeTo: d,
      isMoving: i
    });
  }
  return Nr({
    axis: a,
    moveRelativeTo: u.page,
    isMoving: i
  });
}, sn = (e, t) => {
  const n = e.frame;
  return n ? J(t, n.scroll.diff.displacement) : t;
};
const qa = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const s = t.page.borderBox.center, i = e.at;
  return !n || !i ? s : i.type === "REORDER" ? Ha({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : ka({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var Ot = (e) => {
  const t = qa(e), n = e.droppable;
  return n ? sn(n, t) : t;
}, Oo = (e, t) => {
  const n = oe(t, e.scroll.initial), r = Fe(n);
  return {
    frame: pe({
      top: t.y,
      bottom: t.y + e.frame.height,
      left: t.x,
      right: t.x + e.frame.width
    }),
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: t,
      diff: {
        value: n,
        displacement: r
      }
    }
  };
};
function xr(e, t) {
  return e.map((n) => t[n]);
}
function za(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var ja = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const s = Oo(t, J(t.scroll.current, o)), i = n.frame ? Dn(n, J(n.frame.scroll.current, o)) : n, a = e.displaced, l = Qe({
    afterDragging: xr(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: s.frame,
    last: a,
    forceShouldAnimate: !1
  }), c = Qe({
    afterDragging: xr(a.all, r),
    destination: i,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), f = {}, u = {}, d = [a, l, c];
  return a.all.forEach((h) => {
    const b = za(h, d);
    if (b) {
      u[h] = b;
      return;
    }
    f[h] = !0;
  }), {
    ...e,
    displaced: {
      all: a.all,
      invisible: f,
      visible: u
    }
  };
}, Ya = (e, t) => J(e.scroll.diff.displacement, t), xn = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Ya(n, e), o = oe(r, t.page.borderBox.center);
  return J(t.client.borderBox.center, o);
}, _o = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: s = !1
}) => {
  const i = oe(n, e.page.borderBox.center), l = {
    target: ot(e.page.borderBox, i),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return s ? Ta(l) : wo(l);
}, Ka = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: s,
  previousPageBorderBoxCenter: i,
  previousClientSelection: a,
  afterCritical: l
}) => {
  if (!n.isEnabled)
    return null;
  const c = Ie(n.descriptor.id, r), f = Ve(t, n), u = Na({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: c,
    previousImpact: o
  }) || Va({
    isMovingForward: e,
    isInHomeList: f,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: c,
    previousImpact: o,
    viewport: s,
    afterCritical: l
  });
  if (!u)
    return null;
  const d = Ot({
    impact: u,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: l
  });
  if (_o({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: d,
    viewport: s.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: xn({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: s
      }),
      impact: u,
      scrollJumpRequest: null
    };
  const h = oe(d, i), b = ja({
    impact: u,
    viewport: s,
    destination: n,
    draggables: r,
    maxScrollChange: h
  });
  return {
    clientSelection: a,
    impact: b,
    scrollJumpRequest: h
  };
};
const ee = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot get clipped area from droppable") : m(!1)), t;
};
var Xa = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const s = n.subject.active;
  if (!s)
    return null;
  const i = n.axis, a = ue(s[i.start], s[i.end]), l = Nt(r).filter((f) => f !== n).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Co(o.frame)(ee(f))).filter((f) => {
    const u = ee(f);
    return e ? s[i.crossAxisEnd] < u[i.crossAxisEnd] : u[i.crossAxisStart] < s[i.crossAxisStart];
  }).filter((f) => {
    const u = ee(f), d = ue(u[i.start], u[i.end]);
    return a(u[i.start]) || a(u[i.end]) || d(s[i.start]) || d(s[i.end]);
  }).sort((f, u) => {
    const d = ee(f)[i.crossAxisStart], p = ee(u)[i.crossAxisStart];
    return e ? d - p : p - d;
  }).filter((f, u, d) => ee(f)[i.crossAxisStart] === ee(d[0])[i.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const c = l.filter((f) => ue(ee(f)[i.start], ee(f)[i.end])(t[i.line]));
  return c.length === 1 ? c[0] : c.length > 1 ? c.sort((f, u) => ee(f)[i.start] - ee(u)[i.start])[0] : l.sort((f, u) => {
    const d = Dr(t, Sr(ee(f))), p = Dr(t, Sr(ee(u)));
    return d !== p ? d - p : ee(f)[i.start] - ee(u)[i.start];
  })[0];
};
const Or = (e, t) => {
  const n = e.page.borderBox.center;
  return Se(e.descriptor.id, t) ? oe(n, t.displacedBy.point) : n;
}, Ja = (e, t) => {
  const n = e.page.borderBox;
  return Se(e.descriptor.id, t) ? ot(n, Fe(t.displacedBy.point)) : n;
};
var Za = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((i) => wo({
  target: Ja(i, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((i, a) => {
  const l = Je(e, sn(n, Or(i, o))), c = Je(e, sn(n, Or(a, o)));
  return l < c ? -1 : c < l ? 1 : i.descriptor.index - a.descriptor.index;
})[0] || null, st = j(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: _e(t.line, r)
  };
});
const Qa = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return _e(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], l = Ie(e.descriptor.id, n).reduce((c, f) => c + f.client.marginBox[r.size], 0) + t[r.line] - o;
  return l <= 0 ? null : _e(r.line, l);
}, Io = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Ao = (e, t, n) => {
  const r = e.frame;
  Ve(t, e) && (process.env.NODE_ENV !== "production" ? m(!1, "Should not add placeholder space to home list") : m(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot add placeholder size to a subject when it already has one") : m(!1));
  const o = st(e.axis, t.displaceBy).point, s = Qa(e, o, n), i = {
    placeholderSize: o,
    increasedBy: s,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const f = Me({
      page: e.subject.page,
      withPlaceholder: i,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: f
    };
  }
  const a = s ? J(r.scroll.max, s) : r.scroll.max, l = Io(r, a), c = Me({
    page: e.subject.page,
    withPlaceholder: i,
    axis: e.axis,
    frame: l
  });
  return {
    ...e,
    subject: c,
    frame: l
  };
}, el = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot remove placeholder form subject when there was none") : m(!1));
  const n = e.frame;
  if (!n) {
    const i = Me({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: i
    };
  }
  const r = t.oldFrameMaxScroll;
  r || (process.env.NODE_ENV !== "production" ? m(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : m(!1));
  const o = Io(n, r), s = Me({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: s,
    frame: o
  };
};
var tl = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: n,
  draggable: r,
  draggables: o,
  destination: s,
  viewport: i,
  afterCritical: a
}) => {
  if (!t) {
    if (n.length)
      return null;
    const u = {
      displaced: Ze,
      displacedBy: So,
      at: {
        type: "REORDER",
        destination: {
          droppableId: s.descriptor.id,
          index: 0
        }
      }
    }, d = Ot({
      impact: u,
      draggable: r,
      droppable: s,
      draggables: o,
      afterCritical: a
    }), p = Ve(r, s) ? s : Ao(s, r, o);
    return _o({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: d,
      viewport: i.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? u : null;
  }
  const l = e[s.axis.line] <= t.page.borderBox.center[s.axis.line], c = (() => {
    const u = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || l ? u : u + 1;
  })(), f = st(s.axis, r.displaceBy);
  return St({
    draggable: r,
    insideDestination: n,
    destination: s,
    viewport: i,
    displacedBy: f,
    last: Ze,
    index: c
  });
}, nl = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: s,
  viewport: i,
  afterCritical: a
}) => {
  const l = Xa({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: s,
    viewport: i
  });
  if (!l)
    return null;
  const c = Ie(l.descriptor.id, o), f = Za({
    pageBorderBoxCenter: t,
    viewport: i,
    destination: l,
    insideDestination: c,
    afterCritical: a
  }), u = tl({
    previousPageBorderBoxCenter: t,
    destination: l,
    draggable: n,
    draggables: o,
    moveRelativeTo: f,
    insideDestination: c,
    viewport: i,
    afterCritical: a
  });
  if (!u)
    return null;
  const d = Ot({
    impact: u,
    draggable: n,
    droppable: l,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: xn({
      pageBorderBoxCenter: d,
      draggable: n,
      viewport: i
    }),
    impact: u,
    scrollJumpRequest: null
  };
}, se = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const rl = (e, t) => {
  const n = se(e);
  return n ? t[n] : null;
};
var ol = ({
  state: e,
  type: t
}) => {
  const n = rl(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], s = n || o, i = s.axis.direction, a = i === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || i === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", c = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: u,
    droppables: d
  } = e.dimensions;
  return a ? Ka({
    isMovingForward: l,
    previousPageBorderBoxCenter: f,
    draggable: c,
    destination: s,
    draggables: u,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : nl({
    isMovingForward: l,
    previousPageBorderBoxCenter: f,
    draggable: c,
    isOver: s,
    draggables: u,
    droppables: d,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function Oe(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Po(e) {
  const t = ue(e.top, e.bottom), n = ue(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function sl(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function il({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((s) => {
    const i = s.axis, a = _e(s.axis.line, e.center[i.line], s.page.borderBox.center[i.crossAxisLine]);
    return {
      id: s.descriptor.id,
      distance: Je(r, a)
    };
  }).sort((s, i) => i.distance - s.distance);
  return o[0] ? o[0].id : null;
}
function al({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = Nt(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const s = o.subject.active;
    if (!s || !sl(e, s))
      return !1;
    if (Po(s)(e.center))
      return !0;
    const i = o.axis, a = s.center[i.crossAxisLine], l = e[i.crossAxisStart], c = e[i.crossAxisEnd], f = ue(s[i.crossAxisStart], s[i.crossAxisEnd]), u = f(l), d = f(c);
    return !u && !d ? !0 : u ? l < a : c > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : il({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Ro = (e, t) => pe(ot(e, t));
var ll = (e, t) => {
  const n = e.frame;
  return n ? Ro(t, n.scroll.diff.value) : t;
};
function To({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function cl({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var ul = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = n.axis, l = st(n.axis, t.displaceBy), c = l.value, f = e[a.start], u = e[a.end], p = xt(t, r).find((b) => {
    const g = b.descriptor.id, C = b.page.borderBox.center[a.line], S = Se(g, i), y = To({
      displaced: o,
      id: g
    });
    return S ? y ? u <= C : f < C - c : y ? u <= C + c : f < C;
  }) || null, h = cl({
    draggable: t,
    closest: p,
    inHomeList: Ve(t, n)
  });
  return St({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: s,
    last: o,
    displacedBy: l,
    index: h
  });
};
const dl = 4;
var fl = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: s
}) => {
  if (!r.isCombineEnabled)
    return null;
  const i = r.axis, a = st(r.axis, e.displaceBy), l = a.value, c = t[i.start], f = t[i.end], d = xt(e, o).find((h) => {
    const b = h.descriptor.id, g = h.page.borderBox, S = g[i.size] / dl, y = Se(b, s), E = To({
      displaced: n.displaced,
      id: b
    });
    return y ? E ? f > g[i.start] + S && f < g[i.end] - S : c > g[i.start] - l + S && c < g[i.end] - l - S : E ? f > g[i.start] + l + S && f < g[i.end] + l - S : c > g[i.start] + S && c < g[i.end] - S;
  });
  return d ? {
    displacedBy: a,
    displaced: n.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: d.descriptor.id,
        droppableId: r.descriptor.id
      }
    }
  } : null;
}, Bo = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = Ro(t.page.borderBox, e), l = al({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!l)
    return xa;
  const c = r[l], f = Ie(c.descriptor.id, n), u = ll(c, a);
  return fl({
    pageBorderBoxWithDroppableScroll: u,
    draggable: t,
    previousImpact: o,
    destination: c,
    insideDestination: f,
    afterCritical: i
  }) || ul({
    pageBorderBoxWithDroppableScroll: u,
    draggable: t,
    destination: c,
    insideDestination: f,
    last: o.displaced,
    viewport: s,
    afterCritical: i
  });
}, On = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const pl = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = se(e), o = se(t);
  if (!r || r === o)
    return n;
  const s = n[r];
  if (!s.subject.withPlaceholder)
    return n;
  const i = el(s);
  return On(n, i);
};
var ml = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const s = pl({
    previousImpact: r,
    impact: o,
    droppables: n
  }), i = se(o);
  if (!i)
    return s;
  const a = n[i];
  if (Ve(e, a) || a.subject.withPlaceholder)
    return s;
  const l = Ao(a, e, t);
  return On(s, l);
}, je = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: s
}) => {
  const i = r || e.viewport, a = n || e.dimensions, l = t || e.current.client.selection, c = oe(l, e.initial.client.selection), f = {
    offset: c,
    selection: l,
    borderBoxCenter: J(e.initial.client.borderBoxCenter, c)
  }, u = {
    selection: J(f.selection, i.scroll.current),
    borderBoxCenter: J(f.borderBoxCenter, i.scroll.current),
    offset: J(f.offset, i.scroll.diff.value)
  }, d = {
    client: f,
    page: u
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: a,
      viewport: i,
      current: d
    };
  const p = a.draggables[e.critical.draggable.id], h = o || Bo({
    pageOffset: u.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: i,
    afterCritical: e.afterCritical
  }), b = ml({
    draggable: p,
    impact: h,
    previousImpact: e.impact,
    draggables: a.draggables,
    droppables: a.droppables
  });
  return {
    ...e,
    current: d,
    dimensions: {
      draggables: a.draggables,
      droppables: b
    },
    impact: h,
    viewport: i,
    scrollJumpRequest: s || null,
    forceShouldAnimate: s ? !1 : null
  };
};
function gl(e, t) {
  return e.map((n) => t[n]);
}
var Mo = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const s = e.displaced, i = gl(s.all, n), a = Qe({
    afterDragging: i,
    destination: r,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: s
  });
  return {
    ...e,
    displaced: a
  };
}, $o = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: s
}) => {
  const i = Ot({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: s
  });
  return xn({
    pageBorderBoxCenter: i,
    draggable: t,
    viewport: o
  });
}, Lo = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, m(!1));
  const r = e.impact, o = n || e.viewport, s = t || e.dimensions, {
    draggables: i,
    droppables: a
  } = s, l = i[e.critical.draggable.id], c = se(r);
  c || (process.env.NODE_ENV !== "production" ? m(!1, "Must be over a destination in SNAP movement mode") : m(!1));
  const f = a[c], u = Mo({
    impact: r,
    viewport: o,
    destination: f,
    draggables: i
  }), d = $o({
    impact: u,
    draggable: l,
    droppable: f,
    draggables: i,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return je({
    impact: u,
    clientSelection: d,
    state: e,
    dimensions: s,
    viewport: o
  });
}, hl = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Fo = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = st(t.axis, e.displaceBy), s = Ie(t.descriptor.id, n), i = s.indexOf(e);
  i === -1 && (process.env.NODE_ENV !== "production" ? m(!1, "Expected draggable to be inside home list") : m(!1));
  const a = s.slice(i + 1), l = a.reduce((d, p) => (d[p.descriptor.id] = !0, d), {}), c = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: Qe({
        afterDragging: a,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: r.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: hl(e.descriptor)
      }
    },
    afterCritical: c
  };
}, vl = (e, t) => ({
  draggables: e.draggables,
  droppables: On(e.droppables, t)
});
const it = (e) => {
  process.env.NODE_ENV;
}, at = (e) => {
  process.env.NODE_ENV;
};
var bl = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = yt(e.client, t), o = Et(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, yl = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Expected Droppable to have a frame") : m(!1)), t;
}, El = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const s = o.descriptor.droppableId, i = t[s], l = yl(i).scroll.diff.value, c = J(r, l);
    return bl({
      draggable: o,
      offset: c,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Dl = ({
  state: e,
  published: t
}) => {
  it();
  const n = t.modified.map((C) => {
    const S = e.dimensions.droppables[C.droppableId];
    return Dn(S, C.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Eo(n)
  }, o = Do(El({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), s = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((C) => {
    delete s[C];
  });
  const i = {
    droppables: r,
    draggables: s
  }, a = se(e.impact), l = a ? i.droppables[a] : null, c = i.draggables[e.critical.draggable.id], f = i.droppables[e.critical.droppable.id], {
    impact: u,
    afterCritical: d
  } = Fo({
    draggable: c,
    home: f,
    draggables: s,
    viewport: e.viewport
  }), p = l && l.isCombineEnabled ? e.impact : u, h = Bo({
    pageOffset: e.current.page.offset,
    draggable: i.draggables[e.critical.draggable.id],
    draggables: i.draggables,
    droppables: i.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: d
  });
  at();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: h,
    onLiftImpact: u,
    dimensions: i,
    afterCritical: d,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? b : {
    ...b,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const an = (e) => e.movementMode === "SNAP", Gt = (e, t, n) => {
  const r = vl(e.dimensions, t);
  return !an(e) || n ? je({
    state: e,
    dimensions: r
  }) : Lo({
    state: e,
    dimensions: r
  });
};
function kt(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const _r = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Sl = (e = _r, t) => {
  if (t.type === "FLUSH")
    return {
      ..._r,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "INITIAL_PUBLISH must come after a IDLE phase") : m(!1));
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: s,
      movementMode: i
    } = t.payload, a = s.draggables[n.draggable.id], l = s.droppables[n.droppable.id], c = {
      selection: r,
      borderBoxCenter: a.client.borderBox.center,
      offset: Y
    }, f = {
      client: c,
      page: {
        selection: J(c.selection, o.scroll.initial),
        borderBoxCenter: J(c.selection, o.scroll.initial),
        offset: J(c.selection, o.scroll.diff.value)
      }
    }, u = Nt(s.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: p
    } = Fo({
      draggable: a,
      home: l,
      draggables: s.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: i,
      dimensions: s,
      initial: f,
      current: f,
      isWindowScrollAllowed: u,
      impact: d,
      afterCritical: p,
      onLiftImpact: d,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? m(!1, `Collection cannot start from phase ${e.phase}`) : m(!1)), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? m(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : m(!1)), Dl({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} not permitted in phase ${e.phase}`) : m(!1));
    const {
      client: n
    } = t.payload;
    return De(n, e.current.client.selection) ? e : je({
      state: e,
      clientSelection: n,
      impact: an(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return kt(e);
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} not permitted in phase ${e.phase}`) : m(!1));
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const s = Dn(o, r);
    return Gt(e, s, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Attempting to move in an unsupported phase ${e.phase}`) : m(!1));
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : m(!1)), o.isEnabled === r && (process.env.NODE_ENV !== "production" ? m(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(o.isEnabled)}`) : m(!1));
    const s = {
      ...o,
      isEnabled: r
    };
    return Gt(e, s, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Attempting to move in an unsupported phase ${e.phase}`) : m(!1));
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : m(!1)), o.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? m(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(o.isCombineEnabled)}`) : m(!1));
    const s = {
      ...o,
      isCombineEnabled: r
    };
    return Gt(e, s, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot move by window in phase ${e.phase}`) : m(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? m(!1, "Window scrolling is currently not supported for fixed lists") : m(!1));
    const n = t.payload.newScroll;
    if (De(e.viewport.scroll.current, n))
      return kt(e);
    const r = Oo(e.viewport, n);
    return an(e) ? Lo({
      state: e,
      viewport: r
    }) : je({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Oe(e))
      return e;
    const n = t.payload.maxScroll;
    if (De(n, e.viewport.scroll.max))
      return e;
    const r = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: n
      }
    };
    return {
      ...e,
      viewport: r
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} received while not in DRAGGING phase`) : m(!1));
    const n = ol({
      state: e,
      type: t.type
    });
    return n ? je({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? m(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : m(!1)), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: n
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot animate drop from phase ${e.phase}`) : m(!1)), {
      phase: "DROP_ANIMATING",
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o,
      dimensions: e.dimensions
    };
  }
  if (t.type === "DROP_COMPLETE") {
    const {
      completed: n
    } = t.payload;
    return {
      phase: "IDLE",
      completed: n,
      shouldFlush: !1
    };
  }
  return e;
};
const Cl = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Nl = (e) => ({
  type: "LIFT",
  payload: e
}), wl = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), xl = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Ol = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), _l = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Il = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Al = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Vo = (e) => ({
  type: "MOVE",
  payload: e
}), Pl = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Rl = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Tl = () => ({
  type: "MOVE_UP",
  payload: null
}), Bl = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Ml = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), $l = () => ({
  type: "MOVE_LEFT",
  payload: null
}), _n = () => ({
  type: "FLUSH",
  payload: null
}), Ll = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), In = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Go = (e) => ({
  type: "DROP",
  payload: e
}), Fl = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ko = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Vl(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), n = {};
  for (let o = 1; o < t.length; o++) {
    const s = t[o], i = t[o - 1];
    s !== i + 1 && (n[s] = !0);
  }
  if (!Object.keys(n).length)
    return;
  const r = t.map((o) => !!n[o] ? `[🔥${o}]` : `${o}`).join(", ");
  process.env.NODE_ENV !== "production" && U(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function Gl(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ie(e.droppable.id, t.draggables);
    Vl(n);
  }
}
var kl = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (o.type !== "LIFT") {
    r(o);
    return;
  }
  const {
    id: s,
    clientSelection: i,
    movementMode: a
  } = o.payload, l = t();
  l.phase === "DROP_ANIMATING" && n(In({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Unexpected phase to start a drag") : m(!1)), n(_n()), n(Cl({
    draggableId: s,
    movementMode: a
  }));
  const f = {
    draggableId: s,
    scrollOptions: {
      shouldPublishImmediately: a === "SNAP"
    }
  }, {
    critical: u,
    dimensions: d,
    viewport: p
  } = e.startPublishing(f);
  Gl(u, d), n(wl({
    critical: u,
    dimensions: d,
    clientSelection: i,
    movementMode: a,
    viewport: p
  }));
}, Wl = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const An = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, et = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Wo = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, xe = `${Wo.outOfTheWay}s ${An.outOfTheWay}`, Ye = {
  fluid: `opacity ${xe}`,
  snap: `transform ${xe}, opacity ${xe}`,
  drop: (e) => {
    const t = `${e}s ${An.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${xe}`,
  placeholder: `height ${xe}, width ${xe}, margin ${xe}`
}, Ir = (e) => De(e, Y) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ln = {
  moveTo: Ir,
  drop: (e, t) => {
    const n = Ir(e);
    if (n)
      return t ? `${n} scale(${et.scale.drop})` : n;
  }
}, {
  minDropTime: cn,
  maxDropTime: Uo
} = Wo, Ul = Uo - cn, Ar = 1500, Hl = 0.6;
var ql = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = Je(e, t);
  if (r <= 0)
    return cn;
  if (r >= Ar)
    return Uo;
  const o = r / Ar, s = cn + Ul * o, i = n === "CANCEL" ? s * Hl : s;
  return Number(i.toFixed(2));
}, zl = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: s,
    droppables: i
  } = n, a = se(e), l = a ? i[a] : null, c = i[t.descriptor.droppableId], f = $o({
    impact: e,
    draggable: t,
    draggables: s,
    afterCritical: o,
    droppable: l || c,
    viewport: r
  });
  return oe(f, t.client.borderBox.center);
}, jl = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: s
}) => !n.at || t !== "DROP" ? {
  impact: Mo({
    draggables: e,
    impact: s,
    destination: r,
    viewport: o,
    forceShouldAnimate: !0
  }),
  didDropInsideDroppable: !1
} : n.at.type === "REORDER" ? {
  impact: n,
  didDropInsideDroppable: !0
} : {
  impact: {
    ...n,
    displaced: Ze
  },
  didDropInsideDroppable: !0
};
const Yl = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), s = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Fl({
      reason: s
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? m(!1, "A DROP action occurred while DROP_PENDING and still waiting") : m(!1)), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot drop in phase: ${o.phase}`) : m(!1));
  const a = o.critical, l = o.dimensions, c = l.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: u
  } = jl({
    reason: s,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = u ? Sn(f) : null, p = u ? wt(f) : null, h = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, b = {
    draggableId: c.descriptor.id,
    type: c.descriptor.type,
    source: h,
    reason: s,
    mode: o.movementMode,
    destination: d,
    combine: p
  }, g = zl({
    impact: f,
    draggable: c,
    dimensions: l,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), C = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: b,
    impact: f
  };
  if (!(!De(o.current.client.offset, g) || !!b.combine)) {
    t(In({
      completed: C
    }));
    return;
  }
  const y = ql({
    current: o.current.client.offset,
    destination: g,
    reason: s
  });
  t(Ll({
    newHomeClientOffset: g,
    dropDuration: y,
    completed: C
  }));
};
var Kl = Yl, Ho = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Xl(e) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: (t) => {
      t.target !== window && t.target !== window.document || e();
    }
  };
}
function Jl({
  onWindowScroll: e
}) {
  function t() {
    e(Ho());
  }
  const n = Ke(t), r = Xl(n);
  let o = Ee;
  function s() {
    return o !== Ee;
  }
  function i() {
    s() && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start scroll listener when already active") : m(!1)), o = ce(window, [r]);
  }
  function a() {
    s() || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop scroll listener when not active") : m(!1)), n.cancel(), o(), o = Ee;
  }
  return {
    start: i,
    stop: a,
    isActive: s
  };
}
const Zl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Ql = (e) => {
  const t = Jl({
    onWindowScroll: (n) => {
      e.dispatch(Pl({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Zl(r) && t.stop(), n(r);
  };
};
var ec = Ql, tc = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (s) => {
    if (t) {
      process.env.NODE_ENV !== "production" && U("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && U(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(s), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, nc = () => {
  const e = [], t = (o) => {
    const s = e.findIndex((a) => a.timerId === o);
    s === -1 && (process.env.NODE_ENV !== "production" ? m(!1, "Could not find timer") : m(!1));
    const [i] = e.splice(s, 1);
    i.callback();
  };
  return {
    add: (o) => {
      const s = setTimeout(() => t(s)), i = {
        timerId: s,
        callback: o
      };
      e.push(i);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((s) => {
        clearTimeout(s.timerId), s.callback();
      });
    }
  };
};
const rc = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, oc = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, sc = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Ue = (e, t) => {
  it(), t(), at();
}, mt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Wt(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = tc(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var ic = (e, t) => {
  const n = nc();
  let r = null;
  const o = (u, d) => {
    r && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : m(!1)), Ue("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: u,
        mode: d
      });
    });
  }, s = (u, d) => {
    r && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : m(!1)), Ue("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(mt(u, d));
    });
  }, i = (u, d) => {
    r && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : m(!1));
    const p = mt(u, d);
    r = {
      mode: d,
      lastCritical: u,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Ue("onDragStart", () => Wt(e().onDragStart, p, t, vt.onDragStart));
    });
  }, a = (u, d) => {
    const p = Sn(d), h = wt(d);
    r || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onDragMove when onDragStart has not been called") : m(!1));
    const b = !sc(u, r.lastCritical);
    b && (r.lastCritical = u);
    const g = !rc(r.lastLocation, p);
    g && (r.lastLocation = p);
    const C = !oc(r.lastCombine, h);
    if (C && (r.lastCombine = h), !b && !g && !C)
      return;
    const S = {
      ...mt(u, r.mode),
      combine: h,
      destination: p
    };
    n.add(() => {
      Ue("onDragUpdate", () => Wt(e().onDragUpdate, S, t, vt.onDragUpdate));
    });
  }, l = () => {
    r || (process.env.NODE_ENV !== "production" ? m(!1, "Can only flush responders while dragging") : m(!1)), n.flush();
  }, c = (u) => {
    r || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : m(!1)), r = null, Ue("onDragEnd", () => Wt(e().onDragEnd, u, t, vt.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: s,
    start: i,
    update: a,
    flush: l,
    drop: c,
    abort: () => {
      if (!r)
        return;
      const u = {
        ...mt(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      c(u);
    }
  };
}, ac = (e, t) => {
  const n = ic(e, t);
  return (r) => (o) => (s) => {
    if (s.type === "BEFORE_INITIAL_CAPTURE") {
      n.beforeCapture(s.payload.draggableId, s.payload.movementMode);
      return;
    }
    if (s.type === "INITIAL_PUBLISH") {
      const a = s.payload.critical;
      n.beforeStart(a, s.payload.movementMode), o(s), n.start(a, s.payload.movementMode);
      return;
    }
    if (s.type === "DROP_COMPLETE") {
      const a = s.payload.completed.result;
      n.flush(), o(s), n.drop(a);
      return;
    }
    if (o(s), s.type === "FLUSH") {
      n.abort();
      return;
    }
    const i = r.getState();
    i.phase === "DRAGGING" && n.update(i.critical, i.impact);
  };
};
const lc = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot finish a drop animating when no drop is occurring") : m(!1)), e.dispatch(In({
    completed: r.completed
  }));
};
var cc = lc;
const uc = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (s) => {
    if ((s.type === "FLUSH" || s.type === "DROP_COMPLETE" || s.type === "DROP_ANIMATION_FINISHED") && r(), o(s), s.type !== "DROP_ANIMATE")
      return;
    const i = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ko());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = ce(window, [i]);
    });
  };
};
var dc = uc, fc = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, pc = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (r.type === "INITIAL_PUBLISH") {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (r.type === "FLUSH") {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (r.type === "DROP_COMPLETE") {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const mc = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var gc = (e) => (t) => (n) => (r) => {
  if (mc(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : m(!1)), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const hc = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Go({
    reason: r.reason
  })));
};
var vc = hc;
const bc = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : ys;
var yc = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: s
}) => Es(Sl, bc(Ds(Wl(n), fc(e), kl(e), Kl, cc, dc, vc, gc(s), ec, pc(t), ac(r, o))));
const Ut = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Ec({
  registry: e,
  callbacks: t
}) {
  let n = Ut(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, it();
      const {
        additions: l,
        removals: c,
        modified: f
      } = n, u = Object.keys(l).map((h) => e.draggable.getById(h).getDimension(Y)).sort((h, b) => h.descriptor.index - b.descriptor.index), d = Object.keys(f).map((h) => {
        const g = e.droppable.getById(h).callbacks.getScrollWhileDragging();
        return {
          droppableId: h,
          scroll: g
        };
      }), p = {
        additions: u,
        removals: Object.keys(c),
        modified: d
      };
      n = Ut(), at(), t.publish(p);
    }));
  };
  return {
    add: (l) => {
      const c = l.descriptor.id;
      n.additions[c] = l, n.modified[l.descriptor.droppableId] = !0, n.removals[c] && delete n.removals[c], o();
    },
    remove: (l) => {
      const c = l.descriptor;
      n.removals[c.id] = !0, n.modified[c.droppableId] = !0, n.additions[c.id] && delete n.additions[c.id], o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), r = null, n = Ut());
    }
  };
}
var qo = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = oe({
    x: t,
    y: e
  }, {
    x: r,
    y: n
  });
  return {
    x: Math.max(0, o.x),
    y: Math.max(0, o.y)
  };
}, zo = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find document.documentElement") : m(!1)), e;
}, jo = () => {
  const e = zo();
  return qo({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Dc = () => {
  const e = Ho(), t = jo(), n = e.y, r = e.x, o = zo(), s = o.clientWidth, i = o.clientHeight, a = r + s, l = n + i;
  return {
    frame: pe({
      top: n,
      left: r,
      right: a,
      bottom: l
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: Y,
        displacement: Y
      }
    }
  };
}, Sc = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  it();
  const r = Dc(), o = r.scroll.current, s = e.droppable, i = n.droppable.getAllByType(s.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), l = {
    draggables: Do(a),
    droppables: Eo(i)
  };
  return at(), {
    dimensions: l,
    critical: e,
    viewport: r
  };
};
function Pr(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && U(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Cc = (e, t) => {
  let n = null;
  const r = Ec({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, p) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : m(!1)), n && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: p
    });
  }, s = (d, p) => {
    n && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : m(!1)), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: p
    }));
  }, i = (d, p) => {
    n && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : m(!1)), t.updateDroppableScroll({
      id: d,
      newScroll: p
    }));
  }, a = (d, p) => {
    n && e.droppable.getById(d).callbacks.scroll(p);
  }, l = () => {
    if (!n)
      return;
    r.stop();
    const d = n.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, c = (d) => {
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Should only be subscribed when a collection is occurring") : m(!1));
    const p = n.critical.draggable;
    d.type === "ADDITION" && Pr(e, p, d.value) && r.add(d.value), d.type === "REMOVAL" && Pr(e, p, d.value) && r.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: s,
    scrollDroppable: a,
    updateDroppableScroll: i,
    startPublishing: (d) => {
      n && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start capturing critical dimensions as there is already a collection") : m(!1));
      const p = e.draggable.getById(d.draggableId), h = e.droppable.getById(p.descriptor.droppableId), b = {
        draggable: p.descriptor,
        droppable: h.descriptor
      }, g = e.subscribe(c);
      return n = {
        critical: b,
        unsubscribe: g
      }, Sc({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: l
  };
}, Yo = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Nc = (e) => {
  window.scrollBy(e.x, e.y);
};
const wc = j((e) => Nt(e).filter((t) => !(!t.isEnabled || !t.frame))), xc = (e, t) => wc(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? m(!1, "Invalid result") : m(!1)), Po(r.frame.pageMarginBox)(e))) || null;
var Oc = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return xc(e, n);
};
const tt = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (e) => e ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: !1
};
var _c = (e, t, n = () => tt) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, s = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: s
  };
}, Ko = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? (process.env.NODE_ENV !== "production" && U(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, Pn = 1, Ic = (e, t, n = () => tt) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Pn;
  const s = 1 - Ko({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), i = r.maxPixelScroll * r.ease(s);
  return Math.ceil(i);
}, Ac = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, s = r.durationDampening.stopDampeningAt, i = t, a = s, c = Date.now() - i;
  if (c >= s)
    return e;
  if (c < o)
    return Pn;
  const f = Ko({
    startOfRange: o,
    endOfRange: a,
    current: c
  }), u = e * r.ease(f);
  return Math.ceil(u);
}, Rr = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const s = Ic(e, t, o);
  return s === 0 ? 0 : r ? Math.max(Ac(s, n, o), Pn) : s;
}, Tr = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = _c(e, r, s);
  return t[r.end] < t[r.start] ? Rr({
    distanceToEdge: t[r.end],
    thresholds: i,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }) : -1 * Rr({
    distanceToEdge: t[r.start],
    thresholds: i,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
}, Pc = ({
  container: e,
  subject: t,
  proposedScroll: n
}) => {
  const r = t.height > e.height, o = t.width > e.width;
  return !o && !r ? n : o && r ? null : {
    x: o ? 0 : n.x,
    y: r ? 0 : n.y
  };
};
const Rc = yo((e) => e === 0 ? 0 : e);
var Xo = ({
  dragStartTime: e,
  container: t,
  subject: n,
  center: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = {
    top: r.y - t.top,
    right: t.right - r.x,
    bottom: t.bottom - r.y,
    left: r.x - t.left
  }, a = Tr({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: Cn,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), l = Tr({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: No,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), c = Rc({
    x: l,
    y: a
  });
  if (De(c, Y))
    return null;
  const f = Pc({
    container: t,
    subject: n,
    proposedScroll: c
  });
  return f ? De(f, Y) ? null : f : null;
};
const Tc = yo((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Rn = (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = J(t, r), s = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return De(s, Y) ? null : s;
  };
})(), Jo = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Tc(n), s = Rn({
    max: r,
    current: t,
    change: o
  });
  return !s || o.x !== 0 && s.x === 0 || o.y !== 0 && s.y === 0;
}, Tn = (e, t) => Jo({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Bc = (e, t) => {
  if (!Tn(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Rn({
    current: r,
    max: n,
    change: t
  });
}, Bn = (e, t) => {
  const n = e.frame;
  return n ? Jo({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, Mc = (e, t) => {
  const n = e.frame;
  return !n || !Bn(e, t) ? null : Rn({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var $c = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = Xo({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return i && Tn(e, i) ? i : null;
}, Lc = ({
  droppable: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.frame;
  if (!i)
    return null;
  const a = Xo({
    dragStartTime: r,
    container: i.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return a && Bn(e, a) ? a : null;
}, Br = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const u = e.viewport, d = $c({
      dragStartTime: t,
      viewport: u,
      subject: l,
      center: i,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: s
    });
    if (d) {
      r(d);
      return;
    }
  }
  const c = Oc({
    center: i,
    destination: se(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!c)
    return;
  const f = Lc({
    dragStartTime: t,
    droppable: c,
    subject: l,
    center: i,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: s
  });
  f && o(c.descriptor.id, f);
}, Fc = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => tt
}) => {
  const r = Ke(e), o = Ke(t);
  let s = null;
  const i = (c) => {
    s || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fluid scroll if not dragging") : m(!1));
    const {
      shouldUseTimeDampening: f,
      dragStartTime: u
    } = s;
    Br({
      state: c,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: u,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (c) => {
      it(), s && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start auto scrolling when already started") : m(!1));
      const f = Date.now();
      let u = !1;
      const d = () => {
        u = !0;
      };
      Br({
        state: c,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: n
      }), s = {
        dragStartTime: f,
        shouldUseTimeDampening: u
      }, at(), u && i(c);
    },
    stop: () => {
      s && (r.cancel(), o.cancel(), s = null);
    },
    scroll: i
  };
}, Vc = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (a, l) => {
    const c = J(a.current.client.selection, l);
    e({
      client: c
    });
  }, o = (a, l) => {
    if (!Bn(a, l))
      return l;
    const c = Mc(a, l);
    if (!c)
      return t(a.descriptor.id, l), null;
    const f = oe(l, c);
    return t(a.descriptor.id, f), oe(l, f);
  }, s = (a, l, c) => {
    if (!a || !Tn(l, c))
      return c;
    const f = Bc(l, c);
    if (!f)
      return n(c), null;
    const u = oe(c, f);
    return n(u), oe(c, u);
  };
  return (a) => {
    const l = a.scrollJumpRequest;
    if (!l)
      return;
    const c = se(a.impact);
    c || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot perform a jump scroll when there is no destination") : m(!1));
    const f = o(a.dimensions.droppables[c], l);
    if (!f)
      return;
    const u = a.viewport, d = s(a.isWindowScrollAllowed, u, f);
    d && r(a, d);
  };
}, Gc = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = Fc({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), s = Vc({
    move: n,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (l) => {
      if (!(r().disabled || l.phase !== "DRAGGING")) {
        if (l.movementMode === "FLUID") {
          o.scroll(l);
          return;
        }
        l.scrollJumpRequest && s(l);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const $e = "data-rfd", Le = (() => {
  const e = `${$e}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), un = (() => {
  const e = `${$e}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), kc = (() => {
  const e = `${$e}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Mr = {
  contextId: `${$e}-scroll-container-context-id`
}, Wc = (e) => (t) => `[${t}="${e}"]`, He = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), Uc = "pointer-events: none;";
var Hc = (e) => {
  const t = Wc(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Le.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: Uc,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${Ye.outOfTheWay};
    `;
    return {
      selector: t(un.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(kc.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, i = [r, n, o, {
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
    always: He(i, "always"),
    resting: He(i, "resting"),
    dragging: He(i, "dragging"),
    dropAnimating: He(i, "dropAnimating"),
    userCancel: He(i, "userCancel")
  };
};
const qc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? N.useLayoutEffect : N.useEffect;
var ie = qc;
const Ht = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find the head to append a style to") : m(!1)), e;
}, $r = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function zc(e, t) {
  const n = L(() => Hc(e), [e]), r = N.useRef(null), o = N.useRef(null), s = P(j((u) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot set dynamic style element if it is not set") : m(!1)), d.textContent = u;
  }), []), i = P((u) => {
    const d = r.current;
    d || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot set dynamic style element if it is not set") : m(!1)), d.textContent = u;
  }, []);
  ie(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? m(!1, "style elements already mounted") : m(!1));
    const u = $r(t), d = $r(t);
    return r.current = u, o.current = d, u.setAttribute(`${$e}-always`, e), d.setAttribute(`${$e}-dynamic`, e), Ht().appendChild(u), Ht().appendChild(d), i(n.always), s(n.resting), () => {
      const p = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot unmount ref as it is not set") : m(!1)), Ht().removeChild(b), h.current = null;
      };
      p(r), p(o);
    };
  }, [t, i, s, n.always, n.resting, e]);
  const a = P(() => s(n.dragging), [s, n.dragging]), l = P((u) => {
    if (u === "DROP") {
      s(n.dropAnimating);
      return;
    }
    s(n.userCancel);
  }, [s, n.dropAnimating, n.userCancel]), c = P(() => {
    o.current && s(n.resting);
  }, [s, n.resting]);
  return L(() => ({
    dragging: a,
    dropping: l,
    resting: c
  }), [a, l, c]);
}
function Zo(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Qo = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function lt(e) {
  return e instanceof Qo(e).HTMLElement;
}
function es(e, t) {
  const n = `[${Le.contextId}="${e}"]`, r = Zo(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && U(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((s) => s.getAttribute(Le.draggableId) === t);
  return o ? lt(o) ? o : (process.env.NODE_ENV !== "production" && U("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && U(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function jc(e) {
  const t = N.useRef({}), n = N.useRef(null), r = N.useRef(null), o = N.useRef(!1), s = P(function(d, p) {
    const h = {
      id: d,
      focus: p
    };
    return t.current[d] = h, function() {
      const g = t.current;
      g[d] !== h && delete g[d];
    };
  }, []), i = P(function(d) {
    const p = es(e, d);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = P(function(d, p) {
    n.current === d && (n.current = p);
  }, []), l = P(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const d = n.current;
      d && i(d);
    }));
  }, [i]), c = P(function(d) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Le.draggableId) === d && (n.current = d);
  }, []);
  return ie(() => (o.current = !0, function() {
    o.current = !1;
    const d = r.current;
    d && cancelAnimationFrame(d);
  }), []), L(() => ({
    register: s,
    tryRecordFocus: c,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: a
  }), [s, c, l, a]);
}
function Yc() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(u) {
    return t.push(u), function() {
      const p = t.indexOf(u);
      p !== -1 && t.splice(p, 1);
    };
  }
  function r(u) {
    t.length && t.forEach((d) => d(u));
  }
  function o(u) {
    return e.draggables[u] || null;
  }
  function s(u) {
    const d = o(u);
    return d || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find draggable entry with id [${u}]`) : m(!1)), d;
  }
  const i = {
    register: (u) => {
      e.draggables[u.descriptor.id] = u, r({
        type: "ADDITION",
        value: u
      });
    },
    update: (u, d) => {
      const p = e.draggables[d.descriptor.id];
      p && p.uniqueId === u.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[u.descriptor.id] = u);
    },
    unregister: (u) => {
      const d = u.descriptor.id, p = o(d);
      p && u.uniqueId === p.uniqueId && (delete e.draggables[d], e.droppables[u.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: u
      }));
    },
    getById: s,
    findById: o,
    exists: (u) => !!o(u),
    getAllByType: (u) => Object.values(e.draggables).filter((d) => d.descriptor.type === u)
  };
  function a(u) {
    return e.droppables[u] || null;
  }
  function l(u) {
    const d = a(u);
    return d || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find droppable entry with id [${u}]`) : m(!1)), d;
  }
  const c = {
    register: (u) => {
      e.droppables[u.descriptor.id] = u;
    },
    unregister: (u) => {
      const d = a(u.descriptor.id);
      d && u.uniqueId === d.uniqueId && delete e.droppables[u.descriptor.id];
    },
    getById: l,
    findById: a,
    exists: (u) => !!a(u),
    getAllByType: (u) => Object.values(e.droppables).filter((d) => d.descriptor.type === u)
  };
  function f() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: i,
    droppable: c,
    subscribe: n,
    clean: f
  };
}
function Kc() {
  const e = L(Yc, []);
  return N.useEffect(() => function() {
    x.version.startsWith("16") || x.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Mn = x.createContext(null), nt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find document.body") : m(!1)), e;
};
const Xc = {
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
var Jc = Xc;
const Zc = (e) => `rfd-announcement-${e}`;
function Qc(e) {
  const t = L(() => Zc(e), [e]), n = N.useRef(null);
  return N.useEffect(function() {
    const s = document.createElement("div");
    return n.current = s, s.id = t, s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true"), Be(s.style, Jc), nt().appendChild(s), function() {
      setTimeout(function() {
        const l = nt();
        l.contains(s) && l.removeChild(s), s === n.current && (n.current = null);
      });
    };
  }, [t]), P((o) => {
    const s = n.current;
    if (s) {
      s.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && U(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let eu = 0;
const ts = {
  separator: "::"
};
function tu(e, t = ts) {
  return L(() => `${e}${t.separator}${eu++}`, [t.separator, e]);
}
function nu(e, t = ts) {
  const n = x.useId();
  return L(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var $n = "useId" in x ? nu : tu;
function ru({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function ou({
  contextId: e,
  text: t
}) {
  const n = $n("hidden-text", {
    separator: "-"
  }), r = L(() => ru({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return N.useEffect(function() {
    const s = document.createElement("div");
    return s.id = r, s.textContent = t, s.style.display = "none", nt().appendChild(s), function() {
      const a = nt();
      a.contains(s) && a.removeChild(s);
    };
  }, [r, t]), r;
}
var _t = x.createContext(null), su = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const iu = /(\d+)\.(\d+)\.(\d+)/, Lr = (e) => {
  const t = iu.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? m(!1, `Unable to parse React version ${e}`) : m(!1));
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, au = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var lu = (e, t) => {
  const n = Lr(e), r = Lr(t);
  au(n, r) || process.env.NODE_ENV !== "production" && U(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const qt = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var cu = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && U(`
      No <!doctype html> found.

      ${qt}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && U(`
      Unexpected <!doctype> found: (${t.name})

      ${qt}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && U(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${qt}
    `);
};
function Ln(e) {
  process.env.NODE_ENV !== "production" && e();
}
function ct(e, t) {
  Ln(() => {
    N.useEffect(() => {
      try {
        e();
      } catch (n) {
        on(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function uu() {
  ct(() => {
    lu(su.react, x.version), cu(document);
  }, []);
}
function Fn(e) {
  const t = N.useRef(e);
  return N.useEffect(() => {
    t.current = e;
  }), t;
}
function du() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(i) {
    return i === e;
  }
  function r(i) {
    e && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot claim lock as it is already claimed") : m(!1));
    const a = {
      abandon: i
    };
    return e = a, a;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot release lock when there is no lock") : m(!1)), e = null;
  }
  function s() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: n,
    claim: r,
    release: o,
    tryAbandon: s
  };
}
function rt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const fu = 9, pu = 13, Vn = 27, ns = 32, mu = 33, gu = 34, hu = 35, vu = 36, bu = 37, yu = 38, Eu = 39, Du = 40, Su = {
  [pu]: !0,
  [fu]: !0
};
var rs = (e) => {
  Su[e.keyCode] && e.preventDefault();
};
const Cu = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var It = Cu;
const os = 0, Fr = 5;
function Nu(e, t) {
  return Math.abs(t.x - e.x) >= Fr || Math.abs(t.y - e.y) >= Fr;
}
const Vr = {
  type: "IDLE"
};
function wu({
  cancel: e,
  completed: t,
  getPhase: n,
  setPhase: r
}) {
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: s,
        clientX: i,
        clientY: a
      } = o;
      if (s !== os)
        return;
      const l = {
        x: i,
        y: a
      }, c = n();
      if (c.type === "DRAGGING") {
        o.preventDefault(), c.actions.move(l);
        return;
      }
      c.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot be IDLE") : m(!1));
      const f = c.point;
      if (!Nu(f, l))
        return;
      o.preventDefault();
      const u = c.actions.fluidLift(l);
      r({
        type: "DRAGGING",
        actions: u
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const s = n();
      if (s.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), s.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: (o) => {
      n().type === "DRAGGING" && o.preventDefault(), e();
    }
  }, {
    eventName: "keydown",
    fn: (o) => {
      if (n().type === "PENDING") {
        e();
        return;
      }
      if (o.keyCode === Vn) {
        o.preventDefault(), e();
        return;
      }
      rs(o);
    }
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: () => {
      n().type === "PENDING" && e();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (o) => {
      const s = n();
      if (s.type === "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Unexpected phase") : m(!1)), s.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: It,
    fn: e
  }];
}
function xu(e) {
  const t = N.useRef(Vr), n = N.useRef(Ee), r = L(() => ({
    eventName: "mousedown",
    fn: function(u) {
      if (u.defaultPrevented || u.button !== os || u.ctrlKey || u.metaKey || u.shiftKey || u.altKey)
        return;
      const d = e.findClosestDraggableId(u);
      if (!d)
        return;
      const p = e.tryGetLock(d, i, {
        sourceEvent: u
      });
      if (!p)
        return;
      u.preventDefault();
      const h = {
        x: u.clientX,
        y: u.clientY
      };
      n.current(), c(p, h);
    }
  }), [e]), o = L(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (f) => {
      if (f.defaultPrevented)
        return;
      const u = e.findClosestDraggableId(f);
      if (!u)
        return;
      const d = e.findOptionsForDraggable(u);
      d && (d.shouldRespectForcePress || e.canGetLock(u) && f.preventDefault());
    }
  }), [e]), s = P(function() {
    const u = {
      passive: !1,
      capture: !0
    };
    n.current = ce(window, [o, r], u);
  }, [o, r]), i = P(() => {
    t.current.type !== "IDLE" && (t.current = Vr, n.current(), s());
  }, [s]), a = P(() => {
    const f = t.current;
    i(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [i]), l = P(function() {
    const u = {
      capture: !0,
      passive: !1
    }, d = wu({
      cancel: a,
      completed: i,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = ce(window, d, u);
  }, [a, i]), c = P(function(u, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected to move from IDLE to PENDING drag") : m(!1)), t.current = {
      type: "PENDING",
      point: d,
      actions: u
    }, l();
  }, [l]);
  ie(function() {
    return s(), function() {
      n.current();
    };
  }, [s]);
}
function Ou() {
}
const _u = {
  [gu]: !0,
  [mu]: !0,
  [vu]: !0,
  [hu]: !0
};
function Iu(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Vn) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === ns) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Du) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === yu) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Eu) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === bu) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (_u[o.keyCode]) {
        o.preventDefault();
        return;
      }
      rs(o);
    }
  }, {
    eventName: "mousedown",
    fn: n
  }, {
    eventName: "mouseup",
    fn: n
  }, {
    eventName: "click",
    fn: n
  }, {
    eventName: "touchstart",
    fn: n
  }, {
    eventName: "resize",
    fn: n
  }, {
    eventName: "wheel",
    fn: n,
    options: {
      passive: !0
    }
  }, {
    eventName: It,
    fn: n
  }];
}
function Au(e) {
  const t = N.useRef(Ou), n = L(() => ({
    eventName: "keydown",
    fn: function(s) {
      if (s.defaultPrevented || s.keyCode !== ns)
        return;
      const i = e.findClosestDraggableId(s);
      if (!i)
        return;
      const a = e.tryGetLock(i, f, {
        sourceEvent: s
      });
      if (!a)
        return;
      s.preventDefault();
      let l = !0;
      const c = a.snapLift();
      t.current();
      function f() {
        l || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop capturing a keyboard drag when not capturing") : m(!1)), l = !1, t.current(), r();
      }
      t.current = ce(window, Iu(c, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = P(function() {
    const s = {
      passive: !1,
      capture: !0
    };
    t.current = ce(window, [n], s);
  }, [n]);
  ie(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const zt = {
  type: "IDLE"
}, Pu = 120, Ru = 0.15;
function Tu({
  cancel: e,
  getPhase: t
}) {
  return [{
    eventName: "orientationchange",
    fn: e
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "contextmenu",
    fn: (n) => {
      n.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (n) => {
      if (t().type !== "DRAGGING") {
        e();
        return;
      }
      n.keyCode === Vn && n.preventDefault(), e();
    }
  }, {
    eventName: It,
    fn: e
  }];
}
function Bu({
  cancel: e,
  completed: t,
  getPhase: n
}) {
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      o.hasMoved = !0;
      const {
        clientX: s,
        clientY: i
      } = r.touches[0], a = {
        x: s,
        y: i
      };
      r.preventDefault(), o.actions.move(a);
    }
  }, {
    eventName: "touchend",
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), o.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: (r) => {
      if (n().type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), e();
    }
  }, {
    eventName: "touchforcechange",
    fn: (r) => {
      const o = n();
      o.type === "IDLE" && (process.env.NODE_ENV, m(!1));
      const s = r.touches[0];
      if (!s || !(s.force >= Ru))
        return;
      const a = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        a && e();
        return;
      }
      if (a) {
        if (o.hasMoved) {
          r.preventDefault();
          return;
        }
        e();
        return;
      }
      r.preventDefault();
    }
  }, {
    eventName: It,
    fn: e
  }];
}
function Mu(e) {
  const t = N.useRef(zt), n = N.useRef(Ee), r = P(function() {
    return t.current;
  }, []), o = P(function(p) {
    t.current = p;
  }, []), s = L(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const h = e.findClosestDraggableId(p);
      if (!h)
        return;
      const b = e.tryGetLock(h, a, {
        sourceEvent: p
      });
      if (!b)
        return;
      const g = p.touches[0], {
        clientX: C,
        clientY: S
      } = g, y = {
        x: C,
        y: S
      };
      n.current(), u(b, y);
    }
  }), [e]), i = P(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = ce(window, [s], p);
  }, [s]), a = P(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(zt), n.current(), i());
  }, [i, o]), l = P(() => {
    const d = t.current;
    a(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [a]), c = P(function() {
    const p = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: l,
      completed: a,
      getPhase: r
    }, b = ce(window, Bu(h), p), g = ce(window, Tu(h), p);
    n.current = function() {
      b(), g();
    };
  }, [l, r, a]), f = P(function() {
    const p = r();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? m(!1, `Cannot start dragging from phase ${p.type}`) : m(!1));
    const h = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [r, o]), u = P(function(p, h) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected to move from IDLE to PENDING drag") : m(!1));
    const b = setTimeout(f, Pu);
    o({
      type: "PENDING",
      point: h,
      actions: p,
      longPressTimerId: b
    }), c();
  }, [c, r, o, f]);
  ie(function() {
    return i(), function() {
      n.current();
      const h = r();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), o(zt));
    };
  }, [r, i, o]), ie(function() {
    return ce(window, [{
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
function $u(e) {
  Ln(() => {
    const t = Fn(e);
    ct(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot change the amount of sensor hooks after mounting") : m(!1));
    });
  });
}
const Lu = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function ss(e, t) {
  if (t == null)
    return !1;
  if (Lu.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : ss(e, t.parentElement);
}
function Fu(e, t) {
  const n = t.target;
  return lt(n) ? ss(e, n) : !1;
}
var Vu = (e) => pe(e.getBoundingClientRect()).center;
function Gu(e) {
  return e instanceof Qo(e).Element;
}
const ku = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function is(e, t) {
  return e == null ? null : e[ku](t) ? e : is(e.parentElement, t);
}
function Wu(e, t) {
  return e.closest ? e.closest(t) : is(e, t);
}
function Uu(e) {
  return `[${Le.contextId}="${e}"]`;
}
function Hu(e, t) {
  const n = t.target;
  if (!Gu(n))
    return process.env.NODE_ENV !== "production" && U("event.target must be a Element"), null;
  const r = Uu(e), o = Wu(n, r);
  return o ? lt(o) ? o : (process.env.NODE_ENV !== "production" && U("drag handle must be a HTMLElement"), null) : null;
}
function qu(e, t) {
  const n = Hu(e, t);
  return n ? n.getAttribute(Le.draggableId) : null;
}
function zu(e, t) {
  const n = `[${un.contextId}="${e}"]`, o = Zo(document, n).find((s) => s.getAttribute(un.id) === t);
  return o ? lt(o) ? o : (process.env.NODE_ENV !== "production" && U("Draggable element is not a HTMLElement"), null) : null;
}
function ju(e) {
  e.preventDefault();
}
function gt({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && U(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && U(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function as({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !Yo(t.getState(), r)) : (process.env.NODE_ENV !== "production" && U(`Unable to find draggable with id: ${r}`), !1);
}
function Yu({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: s,
  sourceEvent: i
}) {
  if (!as({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const l = r.draggable.getById(o), c = zu(t, l.descriptor.id);
  if (!c)
    return process.env.NODE_ENV !== "production" && U(`Unable to find draggable element with id: ${o}`), null;
  if (i && !l.options.canDragInteractiveElements && Fu(c, i))
    return null;
  const f = e.claim(s || Ee);
  let u = "PRE_DRAG";
  function d() {
    return l.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function h(v, D) {
    gt({
      expected: v,
      phase: u,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(D());
  }
  const b = h.bind(null, "DRAGGING");
  function g(v) {
    function D() {
      e.release(), u = "COMPLETED";
    }
    u !== "PRE_DRAG" && (D(), process.env.NODE_ENV !== "production" ? m(!1, `Cannot lift in phase ${u}`) : m(!1)), n.dispatch(Nl(v.liftActionArgs)), u = "DRAGGING";
    function O(I, w = {
      shouldBlockNextClick: !1
    }) {
      if (v.cleanup(), w.shouldBlockNextClick) {
        const _ = ce(window, [{
          eventName: "click",
          fn: ju,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(_);
      }
      D(), n.dispatch(Go({
        reason: I
      }));
    }
    return {
      isActive: () => gt({
        expected: "DRAGGING",
        phase: u,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (I) => O("DROP", I),
      cancel: (I) => O("CANCEL", I),
      ...v.actions
    };
  }
  function C(v) {
    const D = Ke((I) => {
      b(() => Vo({
        client: I
      }));
    });
    return {
      ...g({
        liftActionArgs: {
          id: o,
          clientSelection: v,
          movementMode: "FLUID"
        },
        cleanup: () => D.cancel(),
        actions: {
          move: D
        }
      }),
      move: D
    };
  }
  function S() {
    const v = {
      moveUp: () => b(Tl),
      moveRight: () => b(Ml),
      moveDown: () => b(Bl),
      moveLeft: () => b($l)
    };
    return g({
      liftActionArgs: {
        id: o,
        clientSelection: Vu(c),
        movementMode: "SNAP"
      },
      cleanup: Ee,
      actions: v
    });
  }
  function y() {
    gt({
      expected: "PRE_DRAG",
      phase: u,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => gt({
      expected: "PRE_DRAG",
      phase: u,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: C,
    snapLift: S,
    abort: y
  };
}
const Ku = [xu, Au, Mu];
function Xu({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const s = [...o ? Ku : [], ...r || []], i = N.useState(() => du())[0], a = P(function(g, C) {
    rt(g) && !rt(C) && i.tryAbandon();
  }, [i]);
  ie(function() {
    let g = t.getState();
    return t.subscribe(() => {
      const S = t.getState();
      a(g, S), g = S;
    });
  }, [i, t, a]), ie(() => i.tryAbandon, [i.tryAbandon]);
  const l = P((b) => as({
    lockAPI: i,
    registry: n,
    store: t,
    draggableId: b
  }), [i, n, t]), c = P((b, g, C) => Yu({
    lockAPI: i,
    registry: n,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: g || null,
    sourceEvent: C && C.sourceEvent ? C.sourceEvent : null
  }), [e, i, n, t]), f = P((b) => qu(e, b), [e]), u = P((b) => {
    const g = n.draggable.findById(b);
    return g ? g.options : null;
  }, [n.draggable]), d = P(function() {
    i.isClaimed() && (i.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(_n()));
  }, [i, t]), p = P(() => i.isClaimed(), [i]), h = L(() => ({
    canGetLock: l,
    tryGetLock: c,
    findClosestDraggableId: f,
    findOptionsForDraggable: u,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [l, c, f, u, d, p]);
  $u(s);
  for (let b = 0; b < s.length; b++)
    s[b](h);
}
const Ju = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    x.version.startsWith("16") || x.version.startsWith("17") ? n() : fn.flushSync(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Zu = (e) => ({
  ...tt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...tt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function qe(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find store from lazy ref") : m(!1)), e.current;
}
function Qu(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: s
  } = e, i = N.useRef(null);
  uu();
  const a = Fn(e), l = P(() => Ju(a.current), [a]), c = P(() => Zu(a.current), [a]), f = Qc(t), u = ou({
    contextId: t,
    text: s
  }), d = zc(t, o), p = P((_) => {
    qe(i).dispatch(_);
  }, []), h = L(() => Un({
    publishWhileDragging: xl,
    updateDroppableScroll: _l,
    updateDroppableIsEnabled: Il,
    updateDroppableIsCombineEnabled: Al,
    collectionStarting: Ol
  }, p), [p]), b = Kc(), g = L(() => Cc(b, h), [b, h]), C = L(() => Gc({
    scrollWindow: Nc,
    scrollDroppable: g.scrollDroppable,
    getAutoScrollerOptions: c,
    ...Un({
      move: Vo
    }, p)
  }), [g.scrollDroppable, p, c]), S = jc(t), y = L(() => yc({
    announce: f,
    autoScroller: C,
    dimensionMarshal: g,
    focusMarshal: S,
    getResponders: l,
    styleMarshal: d
  }), [f, C, g, S, l, d]);
  process.env.NODE_ENV !== "production" && i.current && i.current !== y && process.env.NODE_ENV !== "production" && U("unexpected store change"), i.current = y;
  const E = P(() => {
    const _ = qe(i);
    _.getState().phase !== "IDLE" && _.dispatch(_n());
  }, []), v = P(() => {
    const _ = qe(i).getState();
    return _.phase === "DROP_ANIMATING" ? !0 : _.phase === "IDLE" ? !1 : _.isDragging;
  }, []), D = L(() => ({
    isDragging: v,
    tryAbort: E
  }), [v, E]);
  n(D);
  const O = P((_) => Yo(qe(i).getState(), _), []), I = P(() => Oe(qe(i).getState()), []), w = L(() => ({
    marshal: g,
    focus: S,
    contextId: t,
    canLift: O,
    isMovementAllowed: I,
    dragHandleUsageInstructionsId: u,
    registry: b
  }), [t, g, u, S, O, I, b]);
  return Xu({
    contextId: t,
    store: y,
    registry: b,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), N.useEffect(() => E, [E]), x.createElement(_t.Provider, {
    value: w
  }, x.createElement(Xi, {
    context: Mn,
    store: y
  }, e.children));
}
let ed = 0;
function td() {
  return L(() => `${ed++}`, []);
}
function nd() {
  return x.useId();
}
var rd = "useId" in x ? nd : td;
function Ef(e) {
  const t = rd(), n = e.dragHandleUsageInstructions || vt.dragHandleUsageInstructions;
  return x.createElement(fa, null, (r) => x.createElement(Qu, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: r,
    dragHandleUsageInstructions: n,
    enableDefaultSensors: e.enableDefaultSensors,
    sensors: e.sensors,
    onBeforeCapture: e.onBeforeCapture,
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragUpdate: e.onDragUpdate,
    onDragEnd: e.onDragEnd,
    autoScrollerOptions: e.autoScrollerOptions
  }, e.children));
}
const Gr = {
  dragging: 5e3,
  dropAnimating: 4500
}, od = (e, t) => t ? Ye.drop(t.duration) : e ? Ye.snap : Ye.fluid, sd = (e, t) => {
  if (e)
    return t ? et.opacity.drop : et.opacity.combining;
}, id = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function ad(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: s
  } = e, i = !!o, a = id(e), l = !!s, c = l ? ln.drop(r, i) : ln.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: od(a, s),
    transform: c,
    opacity: sd(i, l),
    zIndex: l ? Gr.dropAnimating : Gr.dragging,
    pointerEvents: "none"
  };
}
function ld(e) {
  return {
    transform: ln.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function cd(e) {
  return e.type === "DRAGGING" ? ad(e) : ld(e);
}
function ud(e, t, n = Y) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), s = mo(o, r), i = Et(s, n), a = {
    client: s,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, l = {
    x: s.marginBox.width,
    y: s.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: a,
    displaceBy: l,
    client: s,
    page: i
  };
}
function dd(e) {
  const t = $n("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  } = e, l = L(() => ({
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  }), [s, a, i]), c = P((p) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot get dimension when no ref is set") : m(!1)), ud(n, h, p);
  }, [n, o]), f = L(() => ({
    uniqueId: t,
    descriptor: n,
    options: l,
    getDimension: c
  }), [n, c, l, t]), u = N.useRef(f), d = N.useRef(!0);
  ie(() => (r.draggable.register(u.current), () => r.draggable.unregister(u.current)), [r.draggable]), ie(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = u.current;
    u.current = f, r.draggable.update(f, p);
  }, [f, r.draggable]);
}
var Gn = x.createContext(null);
function ls(e) {
  e && lt(e) || (process.env.NODE_ENV !== "production" ? m(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : m(!1));
}
function fd(e, t, n) {
  ct(() => {
    function r(s) {
      return `Draggable[id: ${s}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? m(!1, "Draggable requires a draggableId") : m(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? m(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : m(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? m(!1, `${r(o)} requires an integer index prop`) : m(!1)), e.mapped.type !== "DRAGGING" && (ls(n()), e.isEnabled && (es(t, o) || (process.env.NODE_ENV !== "production" ? m(!1, `${r(o)} Unable to find drag handle`) : m(!1))));
  });
}
function pd(e) {
  Ln(() => {
    const t = N.useRef(e);
    ct(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? m(!1, "Draggable isClone prop value changed during component life") : m(!1));
    }, [e]);
  });
}
function Ct(e) {
  const t = N.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find required context") : m(!1)), t;
}
function md(e) {
  e.preventDefault();
}
const gd = (e) => {
  const t = N.useRef(null), n = P((D = null) => {
    t.current = D;
  }, []), r = P(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: s,
    registry: i
  } = Ct(_t), {
    type: a,
    droppableId: l
  } = Ct(Gn), c = L(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: l
  }), [e.draggableId, e.index, a, l]), {
    children: f,
    draggableId: u,
    isEnabled: d,
    shouldRespectForcePress: p,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: g,
    dropAnimationFinished: C
  } = e;
  if (fd(e, o, r), pd(b), !b) {
    const D = L(() => ({
      descriptor: c,
      registry: i,
      getDraggableRef: r,
      canDragInteractiveElements: h,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [c, i, r, h, p, d]);
    dd(D);
  }
  const S = L(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": s,
    "data-rfd-drag-handle-draggable-id": u,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: md
  } : null, [o, s, u, d]), y = P((D) => {
    g.type === "DRAGGING" && g.dropping && D.propertyName === "transform" && (x.version.startsWith("16") || x.version.startsWith("17") ? C() : fn.flushSync(C));
  }, [C, g]), E = L(() => {
    const D = cd(g), O = g.type === "DRAGGING" && g.dropping ? y : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": u,
        style: D,
        onTransitionEnd: O
      },
      dragHandleProps: S
    };
  }, [o, S, u, g, y, n]), v = L(() => ({
    draggableId: c.id,
    type: c.type,
    source: {
      index: c.index,
      droppableId: c.droppableId
    }
  }), [c.droppableId, c.id, c.index, c.type]);
  return x.createElement(x.Fragment, null, f(E, g.snapshot, v));
};
var hd = gd, cs = (e, t) => e === t, us = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const vd = (e) => e.combine ? e.combine.draggableId : null, bd = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function yd() {
  const e = j((o, s) => ({
    x: o,
    y: s
  })), t = j((o, s, i = null, a = null, l = null) => ({
    isDragging: !0,
    isClone: s,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), n = j((o, s, i, a, l = null, c = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: l,
      combineWith: c,
      mode: s,
      offset: o,
      dimension: i,
      forceShouldAnimate: f,
      snapshot: t(s, a, l, c, null)
    }
  }));
  return (o, s) => {
    if (rt(o)) {
      if (o.critical.draggable.id !== s.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[s.draggableId], l = se(o.impact), c = bd(o.impact), f = o.forceShouldAnimate;
      return n(e(i.x, i.y), o.movementMode, a, s.isClone, l, c, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== s.draggableId)
        return null;
      const a = s.isClone, l = o.dimensions.draggables[s.draggableId], c = i.result, f = c.mode, u = us(c), d = vd(c), h = {
        duration: o.dropDuration,
        curve: An.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? et.opacity.drop : null,
        scale: d ? et.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: l,
          dropping: h,
          draggingOver: u,
          combineWith: d,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, a, u, d, h)
        }
      };
    }
    return null;
  };
}
function ds(e = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  };
}
const Ed = {
  mapped: {
    type: "SECONDARY",
    offset: Y,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ds(null)
  }
};
function Dd() {
  const e = j((i, a) => ({
    x: i,
    y: a
  })), t = j(ds), n = j((i, a = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: l,
      snapshot: t(a)
    }
  })), r = (i) => i ? n(Y, i, !0) : null, o = (i, a, l, c) => {
    const f = l.displaced.visible[i], u = !!(c.inVirtualList && c.effected[i]), d = wt(l), p = d && d.draggableId === i ? a : null;
    if (!f) {
      if (!u)
        return r(p);
      if (l.displaced.invisible[i])
        return null;
      const g = Fe(c.displacedBy.point), C = e(g.x, g.y);
      return n(C, p, !0);
    }
    if (u)
      return r(p);
    const h = l.displacedBy.point, b = e(h.x, h.y);
    return n(b, p, f.shouldAnimate);
  };
  return (i, a) => {
    if (rt(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const l = i.completed;
      return l.result.draggableId === a.draggableId ? null : o(a.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const Sd = () => {
  const e = yd(), t = Dd();
  return (r, o) => e(r, o) || t(r, o) || Ed;
}, Cd = {
  dropAnimationFinished: ko
}, Nd = fo(Sd, Cd, null, {
  context: Mn,
  areStatePropsEqual: cs
})(hd);
var wd = Nd;
function fs(e) {
  return Ct(Gn).isUsingCloneFor === e.draggableId && !e.isClone ? null : x.createElement(wd, e);
}
function Df(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return x.createElement(fs, Be({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const kn = (e) => (t) => e === t, xd = kn("scroll"), Od = kn("auto"), _d = kn("visible"), kr = (e, t) => t(e.overflowX) || t(e.overflowY), Id = (e, t) => t(e.overflowX) && t(e.overflowY), ps = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return kr(n, xd) || kr(n, Od);
}, Ad = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = nt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, m(!1)), !ps(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return Id(r, _d) || process.env.NODE_ENV !== "production" && U(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, ms = (e) => e == null ? null : e === document.body ? Ad() ? e : null : e === document.documentElement ? null : ps(e) ? e : ms(e.parentElement);
var gs = ms, Pd = (e) => {
  !e || !gs(e.parentElement) || process.env.NODE_ENV !== "production" && U(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, dn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const hs = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : hs(e.parentElement) : !1;
var Rd = (e) => {
  const t = gs(e), n = hs(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, Td = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: s,
  page: i,
  closest: a
}) => {
  const l = (() => {
    if (!a)
      return null;
    const {
      scrollSize: d,
      client: p
    } = a, h = qo({
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: a.page.marginBox,
      frameClient: p,
      scrollSize: d,
      shouldClipSubject: a.shouldClipSubject,
      scroll: {
        initial: a.scroll,
        current: a.scroll,
        max: h,
        diff: {
          value: Y,
          displacement: Y
        }
      }
    };
  })(), c = o === "vertical" ? Cn : No, f = Me({
    page: i,
    withPlaceholder: null,
    axis: c,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: c,
    isEnabled: t,
    client: s,
    page: i,
    frame: l,
    subject: f
  };
};
const Bd = (e, t) => {
  const n = go(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, s = r + t.scrollHeight, i = o + t.scrollWidth, l = yn({
    top: r,
    right: i,
    bottom: s,
    left: o
  }, n.border);
  return En({
    borderBox: l,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var Md = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: s,
  isCombineEnabled: i,
  shouldClipSubject: a
}) => {
  const l = n.closestScrollable, c = Bd(e, l), f = Et(c, r), u = (() => {
    if (!l)
      return null;
    const p = go(l), h = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: Et(p, r),
      scroll: dn(l),
      scrollSize: h,
      shouldClipSubject: a
    };
  })();
  return Td({
    descriptor: t,
    isEnabled: !s,
    isCombineEnabled: i,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: c,
    page: f,
    closest: u
  });
};
const $d = {
  passive: !1
}, Ld = {
  passive: !0
};
var Wr = (e) => e.shouldPublishImmediately ? $d : Ld;
const ht = (e) => e && e.env.closestScrollable || null;
function Fd(e) {
  const t = N.useRef(null), n = Ct(_t), r = $n("droppable"), {
    registry: o,
    marshal: s
  } = n, i = Fn(e), a = L(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = N.useRef(a), c = L(() => j((E, v) => {
    t.current || (process.env.NODE_ENV !== "production" ? m(!1, "Can only update scroll when dragging") : m(!1));
    const D = {
      x: E,
      y: v
    };
    s.updateDroppableScroll(a.id, D);
  }), [a.id, s]), f = P(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? Y : dn(E.env.closestScrollable);
  }, []), u = P(() => {
    const E = f();
    c(E.x, E.y);
  }, [f, c]), d = L(() => Ke(u), [u]), p = P(() => {
    const E = t.current, v = ht(E);
    if (E && v || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find scroll options while scrolling") : m(!1)), E.scrollOptions.shouldPublishImmediately) {
      u();
      return;
    }
    d();
  }, [d, u]), h = P((E, v) => {
    t.current && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot collect a droppable while a drag is occurring") : m(!1));
    const D = i.current, O = D.getDroppableRef();
    O || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot collect without a droppable ref") : m(!1));
    const I = Rd(O), w = {
      ref: O,
      descriptor: a,
      env: I,
      scrollOptions: v
    };
    t.current = w;
    const _ = Md({
      ref: O,
      descriptor: a,
      env: I,
      windowScroll: E,
      direction: D.direction,
      isDropDisabled: D.isDropDisabled,
      isCombineEnabled: D.isCombineEnabled,
      shouldClipSubject: !D.ignoreContainerClipping
    }), B = I.closestScrollable;
    return B && (B.setAttribute(Mr.contextId, n.contextId), B.addEventListener("scroll", p, Wr(w.scrollOptions)), process.env.NODE_ENV !== "production" && Pd(B)), _;
  }, [n.contextId, a, p, i]), b = P(() => {
    const E = t.current, v = ht(E);
    return E && v || (process.env.NODE_ENV !== "production" ? m(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : m(!1)), dn(v);
  }, []), g = P(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop drag when no active drag") : m(!1));
    const v = ht(E);
    t.current = null, v && (d.cancel(), v.removeAttribute(Mr.contextId), v.removeEventListener("scroll", p, Wr(E.scrollOptions)));
  }, [p, d]), C = P((E) => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot scroll when there is no drag") : m(!1));
    const D = ht(v);
    D || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot scroll a droppable with no closest scrollable") : m(!1)), D.scrollTop += E.y, D.scrollLeft += E.x;
  }, []), S = L(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: g,
    scroll: C
  }), [g, h, b, C]), y = L(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: S
  }), [S, a, r]);
  ie(() => (l.current = y.descriptor, o.droppable.register(y), () => {
    t.current && (process.env.NODE_ENV !== "production" && U("Unsupported: changing the droppableId or type of a Droppable during a drag"), g()), o.droppable.unregister(y);
  }), [S, a, g, y, s, o.droppable]), ie(() => {
    t.current && s.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, s]), ie(() => {
    t.current && s.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, s]);
}
function jt() {
}
const Ur = {
  width: 0,
  height: 0,
  margin: ya
}, Vd = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Ur : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Gd = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = Vd({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: n
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: r.width,
    height: r.height,
    marginTop: r.margin.top,
    marginRight: r.margin.right,
    marginBottom: r.margin.bottom,
    marginLeft: r.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: n !== "none" ? Ye.placeholder : null
  };
}, kd = (e) => {
  const t = N.useRef(null), n = P(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: s,
    contextId: i
  } = e, [a, l] = N.useState(e.animate === "open");
  N.useEffect(() => a ? r !== "open" ? (n(), l(!1), jt) : t.current ? jt : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), n) : jt, [r, a, n]);
  const c = P((u) => {
    u.propertyName === "height" && (o(), r === "close" && s());
  }, [r, s, o]), f = Gd({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return x.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": i,
    onTransitionEnd: c,
    ref: e.innerRef
  });
};
var Wd = x.memo(kd);
function Yt(e) {
  return typeof e == "boolean";
}
function Kt(e, t) {
  t.forEach((n) => n(e));
}
const Ud = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? m(!1, "A Droppable requires a droppableId prop") : m(!1)), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? m(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : m(!1));
}, function({
  props: t
}) {
  Yt(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? m(!1, "isDropDisabled must be a boolean") : m(!1)), Yt(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? m(!1, "isCombineEnabled must be a boolean") : m(!1)), Yt(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? m(!1, "ignoreContainerClipping must be a boolean") : m(!1));
}, function({
  getDroppableRef: t
}) {
  ls(t());
}], Hd = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && U(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], qd = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? m(!1, "Must provide a clone render function (renderClone) for virtual lists") : m(!1));
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? m(!1, "Expected virtual list to not have a placeholder") : m(!1));
}];
function zd(e) {
  ct(() => {
    Kt(e, Ud), e.props.mode === "standard" && Kt(e, Hd), e.props.mode === "virtual" && Kt(e, qd);
  });
}
class jd extends x.PureComponent {
  constructor(...t) {
    super(...t), this.state = {
      isVisible: !!this.props.on,
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    }, this.onClose = () => {
      this.state.animate === "close" && this.setState({
        isVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(t, n) {
    return t.shouldAnimate ? t.on ? {
      isVisible: !0,
      data: t.on,
      animate: "open"
    } : n.isVisible ? {
      isVisible: !0,
      data: n.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: !!t.on,
      data: t.on,
      animate: "none"
    };
  }
  render() {
    if (!this.state.isVisible)
      return null;
    const t = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(t);
  }
}
const Yd = (e) => {
  const t = N.useContext(_t);
  t || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find app context") : m(!1));
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = N.useRef(null), s = N.useRef(null), {
    children: i,
    droppableId: a,
    type: l,
    mode: c,
    direction: f,
    ignoreContainerClipping: u,
    isDropDisabled: d,
    isCombineEnabled: p,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: g,
    getContainerForClone: C
  } = e, S = P(() => o.current, []), y = P((T = null) => {
    o.current = T;
  }, []), E = P(() => s.current, []), v = P((T = null) => {
    s.current = T;
  }, []);
  zd({
    props: e,
    getDroppableRef: S,
    getPlaceholderRef: E
  });
  const D = P(() => {
    r() && g({
      maxScroll: jo()
    });
  }, [r, g]);
  Fd({
    droppableId: a,
    type: l,
    mode: c,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: u,
    getDroppableRef: S
  });
  const O = L(() => x.createElement(jd, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: T,
    data: $,
    animate: W
  }) => x.createElement(Wd, {
    placeholder: $,
    onClose: T,
    innerRef: v,
    animate: W,
    contextId: n,
    onTransitionEnd: D
  })), [n, D, e.placeholder, e.shouldAnimatePlaceholder, v]), I = L(() => ({
    innerRef: y,
    placeholder: O,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, O, y]), w = b ? b.dragging.draggableId : null, _ = L(() => ({
    droppableId: a,
    type: l,
    isUsingCloneFor: w
  }), [a, w, l]);
  function B() {
    if (!b)
      return null;
    const {
      dragging: T,
      render: $
    } = b, W = x.createElement(fs, {
      draggableId: T.draggableId,
      index: T.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, K) => $(z, K, T));
    return Ss.createPortal(W, C());
  }
  return x.createElement(Gn.Provider, {
    value: _
  }, i(I, h), B());
};
var Kd = Yd;
function Xd() {
  return document.body || (process.env.NODE_ENV !== "production" ? m(!1, "document.body is not ready") : m(!1)), document.body;
}
const Hr = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Xd
}, vs = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Hr)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Hr[n]
    });
  return t;
}, Xt = (e, t) => e === t.droppable.type, qr = (e, t) => t.draggables[e.draggable.id], Jd = () => {
  const e = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, t = {
    ...e,
    shouldAnimatePlaceholder: !1
  }, n = j((s) => ({
    draggableId: s.id,
    type: s.type,
    source: {
      index: s.index,
      droppableId: s.droppableId
    }
  })), r = j((s, i, a, l, c, f) => {
    const u = c.descriptor.id;
    if (c.descriptor.droppableId === s) {
      const h = f ? {
        render: f,
        dragging: n(c.descriptor)
      } : null, b = {
        isDraggingOver: a,
        draggingOverWith: a ? u : null,
        draggingFromThisWith: u,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: b,
        useClone: h
      };
    }
    if (!i)
      return t;
    if (!l)
      return e;
    const p = {
      isDraggingOver: a,
      draggingOverWith: u,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (s, i) => {
    const a = vs(i), l = a.droppableId, c = a.type, f = !a.isDropDisabled, u = a.renderClone;
    if (rt(s)) {
      const d = s.critical;
      if (!Xt(c, d))
        return t;
      const p = qr(d, s.dimensions), h = se(s.impact) === l;
      return r(l, f, h, h, p, u);
    }
    if (s.phase === "DROP_ANIMATING") {
      const d = s.completed;
      if (!Xt(c, d.critical))
        return t;
      const p = qr(d.critical, s.dimensions);
      return r(l, f, us(d.result) === l, se(d.impact) === l, p, u);
    }
    if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
      const d = s.completed;
      if (!Xt(c, d.critical))
        return t;
      const p = se(d.impact) === l, h = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === l;
      return p ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, Zd = {
  updateViewportMaxScroll: Rl
}, Qd = fo(Jd, Zd, (e, t, n) => ({
  ...vs(n),
  ...e,
  ...t
}), {
  context: Mn,
  areStatePropsEqual: cs
})(Kd);
var Sf = Qd;
const ef = ({
  label: e,
  sliderType: t = "flat",
  size: n = "medium",
  activeColor: r = null,
  section: o = null,
  subsection: s = null,
  fieldName: i,
  updateField: a,
  value: l,
  i: c = null,
  min: f = null,
  max: u = null,
  onClick: d,
  ...p
}) => {
  const [h, b] = N.useState(l);
  let g = () => {
    let y = "";
    return o && (y += o + "-"), s && (y += s + "-"), i && (y += i), y;
  };
  const C = () => ({
    flat: " slider--flat",
    block: " slider--block",
    pill: " slider--pill",
    "3d": " slider--3d"
  })[t] || "";
  N.useEffect(() => {
    l !== void 0 && l !== h && b(l);
  }, [l]), N.useEffect(() => {
    l !== void 0 && l !== h && a && a(o, s, i, h, c);
  }, [h]);
  const S = (y) => {
    b(!h), d && d(y);
  };
  return /* @__PURE__ */ x.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ x.createElement("label", null, e), /* @__PURE__ */ x.createElement("div", { className: "cove-input__slider" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + C() + (h ? " active" : ""), onClick: S }, /* @__PURE__ */ x.createElement("div", { className: "cove-input__slider-button" }), /* @__PURE__ */ x.createElement("div", { className: "cove-input__slider-track", style: h && r ? { backgroundColor: r } : null }), /* @__PURE__ */ x.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: g(), checked: h || !1, readOnly: !0 })));
};
ef.propTypes = {
  /** Add label to the input field */
  label: Z.string,
  /** Select the preferred display style of the slider */
  sliderType: Z.oneOf(["flat", "block", "pill", "3d"]),
  /** Select the preferred size of the slider */
  size: Z.oneOf(["small", "medium", "large"]),
  /** Select the preferred color for the slider when active */
  activeColor: Z.string,
  /** Parent key value of nested target config option
   *
   * (optional)*/
  section: Z.string,
  /** Child key value of nested target config option
   *
   * (optional, requires `section` value)*/
  subsection: Z.string,
  /** Key value of targeted config option */
  fieldName: Z.string,
  /** Prop drill down of the updateField function */
  updateField: Z.func,
  /** Current value of the input, usually the current config option value */
  stateValue: Z.object
};
const tf = (e) => {
  const [t, n] = N.useState(!1), { config: r, setConfig: o, filteredData: s, setFilteredData: i, excludedData: a, filterData: l } = e, { type: c, filterBehavior: f, filters: u } = r, d = ["dropdown", "pill", "tab", "tab bar"], p = [
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
  ], h = (v, D, O, I) => {
    const w = [...I.values], [_] = w.splice(v, 1);
    w.splice(D, 0, _);
    const B = r.type === "chart" ? [...r.filters] : [...s], T = { ...B[O] };
    T.values = w, T.orderedValues = w, T.active = w[0], T.order = "cust", B[O] = T, r.type === "map" && i(B), o({ ...r, filters: B });
  }, b = (v) => {
  }, g = (v, D) => {
    let O = r.type === "map" ? [...s] : [...r.filters];
    r.filterBehavior === "Apply Button" ? (O[v].queuedActive = D, n(!0)) : O[v].active = D, o({
      ...r,
      filters: O
    }), r.type === "map" && r.filterBehavior === "Filter Change" && i(O), r.type === "chart" && r.filterBehavior === "Filter Change" && i(l(O, a));
  }, C = (v) => {
    v.forEach((D) => {
      D.queuedActive && (D.active = D.queuedActive, delete D.queuedActive);
    }), o({ ...r, filters: v }), c === "map" && i(v, a), c === "chart" && i(l(v, a)), n(!1);
  }, S = (v) => {
    let D = [...r.filters];
    v.preventDefault(), D.map((O) => (O = E(O), O.active = O.values[0], O)), c === "map" ? i(D, a) : i(l(D, a)), o({ ...r, filters: D });
  }, y = {
    buttonText: "Apply Filters",
    resetText: "Reset All",
    introText: "Make a selection from the filters to change the visualization information.",
    applyText: "Select the apply button to update the visualization information."
  }, E = (v) => {
    const { order: D } = v, O = (w, _) => w.toString().localeCompare(_.toString(), "en", { numeric: !0 }), I = (w, _) => _.toString().localeCompare(w.toString(), "en", { numeric: !0 });
    return (!D || D === "") && (v.order = "asc"), D === "desc" && (v.values = v.values.sort(I)), D === "asc" && (v.values = v.values.sort(O)), v;
  };
  return {
    handleApplyButton: C,
    changeFilterActive: g,
    announceChange: b,
    showApplyButton: t,
    handleReset: S,
    filterConstants: y,
    filterStyleOptions: d,
    filterOrderOptions: p,
    handleFilterOrder: h,
    handleSorting: E
  };
}, nf = (e) => {
  var O;
  const { config: t, filteredData: n, dimensions: r } = e, { filters: o, type: s, general: i, theme: a, filterBehavior: l } = t, [c, f] = N.useState(!1), [u, d] = N.useState(""), p = N.useId(), {
    handleApplyButton: h,
    changeFilterActive: b,
    announceChange: g,
    showApplyButton: C,
    handleReset: S,
    filterConstants: y,
    handleSorting: E
  } = tf(e);
  N.useEffect(() => {
    r && (r[0] < 768 && (o == null ? void 0 : o.length) > 0 ? f(!0) : f(!1));
  }, [r]), N.useEffect(() => {
    if (u) {
      let I = document.getElementById(u.id);
      I && I.focus();
    }
  }, [b, u]);
  const v = (I) => I.children, D = ["filters-section", s === "map" ? i.headerColor : a];
  if (v.Section = (I) => /* @__PURE__ */ x.createElement("section", { className: D.join(" ") }, /* @__PURE__ */ x.createElement("p", { className: "filters-section__intro-text" }, y.introText, " ", t.filterBehavior === "Apply Button" && y.applyText), /* @__PURE__ */ x.createElement("div", { className: "filters-section__wrapper" }, I.children)), v.ApplyBehavior = (I) => {
    if (l !== "Apply Button")
      return;
    const w = [i != null && i.headerColor ? i.headerColor : a, "apply"];
    return /* @__PURE__ */ x.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ x.createElement(Cs, { onClick: () => h(o), disabled: !C, className: w.join(" ") }, y.buttonText), /* @__PURE__ */ x.createElement("a", { href: "#!", role: "button", onClick: S }, y.resetText));
  }, v.TabBar = (I) => {
    const { filter: w, index: _ } = I;
    return /* @__PURE__ */ x.createElement("section", { className: "single-filters__tab-bar" }, w.values.map((B, T) => {
      const $ = ["button__tab-bar", w.active === B ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ x.createElement(
        "button",
        {
          id: `${B}-${_}-${T}-${p}`,
          className: $.join(" "),
          key: B,
          onClick: (W) => {
            b(_, B), d(W.target);
          },
          onKeyDown: (W) => {
            W.keyCode === 13 && (b(_, B), d(W.target));
          }
        },
        B
      );
    }));
  }, v.Pills = (I) => I.pills, v.Tabs = (I) => I.tabs, v.Dropdown = (I) => {
    const { index: w, label: _, active: B, filters: T } = I;
    return /* @__PURE__ */ x.createElement(
      "select",
      {
        id: `filter-${w}`,
        name: _,
        "aria-label": _,
        className: "filter-select",
        "data-index": "0",
        value: B,
        onChange: ($) => {
          b(w, $.target.value), g(`Filter ${_} value has been changed to ${$.target.value}, please reference the data table to see updated values.`);
        }
      },
      T
    );
  }, v.Style = () => {
    if (o || n) {
      let I = s === "map" ? n : o;
      return delete I.fromHash, I.map((w, _) => {
        if (w.showDropdown === !1)
          return;
        const B = [], T = [], $ = [], { active: W, queuedActive: z, label: K, filterStyle: X } = w;
        E(w), w.values.forEach((H, ae) => {
          const ge = ["pill", W === H ? "pill--active" : null, a && a], he = ["tab", W === H && "tab--active", a && a];
          T.push(
            /* @__PURE__ */ x.createElement("div", { className: "pill__wrapper", key: `pill-${ae}` }, /* @__PURE__ */ x.createElement(
              "button",
              {
                id: `${H}-${_}-${ae}-${p}`,
                className: ge.join(" "),
                onKeyDown: (q) => {
                  q.keyCode === 13 && (b(_, H), d(q.target));
                },
                onClick: (q) => {
                  b(_, H), d(q.target);
                },
                name: K
              },
              H
            ))
          ), B.push(
            /* @__PURE__ */ x.createElement("option", { key: ae, value: H }, w.labels && w.labels[H] ? w.labels[H] : H)
          ), $.push(
            /* @__PURE__ */ x.createElement(
              "button",
              {
                id: `${H}-${_}-${ae}-${p}`,
                className: he.join(" "),
                onClick: (q) => {
                  b(_, H), d(q.target);
                },
                onKeyDown: (q) => {
                  q.keyCode === 13 && (b(_, H), d(q.target));
                }
              },
              H
            )
          );
        });
        const re = ["single-filters", c ? "single-filters--dropdown" : `single-filters--${X}`];
        return /* @__PURE__ */ x.createElement("div", { className: re.join(" "), key: _ }, /* @__PURE__ */ x.createElement(x.Fragment, null, K && /* @__PURE__ */ x.createElement("label", { htmlFor: `filter-${_}` }, K), X === "tab" && !c && /* @__PURE__ */ x.createElement(v.Tabs, { tabs: $ }), X === "pill" && !c && /* @__PURE__ */ x.createElement(v.Pills, { pills: T }), X === "tab bar" && !c && /* @__PURE__ */ x.createElement(v.TabBar, { filter: w, index: _ }), (X === "dropdown" || c) && /* @__PURE__ */ x.createElement(v.Dropdown, { filter: w, index: _, label: K, active: z || W, filters: B })));
      });
    }
  }, ((O = t == null ? void 0 : t.filters) == null ? void 0 : O.length) !== 0)
    return /* @__PURE__ */ x.createElement(v, null, /* @__PURE__ */ x.createElement(v.Section, null, /* @__PURE__ */ x.createElement(v.Style, null), /* @__PURE__ */ x.createElement(v.ApplyBehavior, null)));
};
nf.propTypes = {
  // runtimeFilters in place
  filteredData: Z.array,
  // function for updating the runtime filters
  setFilteredData: Z.func,
  // the full apps config
  config: Z.object,
  // updating function for setting fitlerBehavior
  setConfig: Z.func,
  // exclusions
  excludedData: Z.array,
  // function for filtering the data
  filterData: Z.func,
  dimensions: Z.array
};
export {
  Sf as C,
  Ef as D,
  nf as F,
  yf as G,
  ef as I,
  Df as P,
  mf as T,
  jr as _,
  hf as a,
  vf as c,
  gf as s,
  bf as t,
  tf as u
};
