import { r as N, R as O } from "./storybook-index-45401197.es.js";
import { g as eo } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { m as xs } from "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-coveUpdateWorker-13bda73e.es.js";
import { e as _s } from "./storybook-index-66852bf6.es.js";
import { r as gn, R as Os } from "./storybook-index-633d712d.es.js";
import { c as Is, b as Yn, a as As, d as Ps, g as Kn, u as Xn } from "./storybook-queryStringUtils-aa6bd55f.es.js";
import { _ as Be } from "./storybook-extends-70f3d2a3.es.js";
import { i as Jn } from "./storybook-tiny-invariant-9f3340e2.es.js";
import { P as Q } from "./storybook-index-43433e35.es.js";
import "./storybook-index-4ed993c7.es.js";
import { B as Rs } from "./storybook-Button-d74e310e.es.js";
function to(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, s;
  for (s = 0; s < r.length; s++)
    o = r[s], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Qt = Math.PI, Zt = 2 * Qt, _e = 1e-6, Ts = Zt - _e;
function en() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Ms() {
  return new en();
}
en.prototype = Ms.prototype = {
  constructor: en,
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
  bezierCurveTo: function(e, t, n, r, o, s) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +o) + "," + (this._y1 = +s);
  },
  arcTo: function(e, t, n, r, o) {
    e = +e, t = +t, n = +n, r = +r, o = +o;
    var s = this._x1, i = this._y1, a = n - e, c = r - t, l = s - e, f = i - t, u = l * l + f * f;
    if (o < 0)
      throw new Error("negative radius: " + o);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (u > _e)
      if (!(Math.abs(f * a - c * l) > _e) || !o)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var d = n - s, p = r - i, g = a * a + c * c, b = d * d + p * p, m = Math.sqrt(g), C = Math.sqrt(u), D = o * Math.tan((Qt - Math.acos((g + u - b) / (2 * m * C))) / 2), y = D / C, E = D / m;
        Math.abs(y - 1) > _e && (this._ += "L" + (e + y * l) + "," + (t + y * f)), this._ += "A" + o + "," + o + ",0,0," + +(f * d > l * p) + "," + (this._x1 = e + E * a) + "," + (this._y1 = t + E * c);
      }
  },
  arc: function(e, t, n, r, o, s) {
    e = +e, t = +t, n = +n, s = !!s;
    var i = n * Math.cos(r), a = n * Math.sin(r), c = e + i, l = t + a, f = 1 ^ s, u = s ? r - o : o - r;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + c + "," + l : (Math.abs(this._x1 - c) > _e || Math.abs(this._y1 - l) > _e) && (this._ += "L" + c + "," + l), n && (u < 0 && (u = u % Zt + Zt), u > Ts ? this._ += "A" + n + "," + n + ",0,1," + f + "," + (e - i) + "," + (t - a) + "A" + n + "," + n + ",0,1," + f + "," + (this._x1 = c) + "," + (this._y1 = l) : u > _e && (this._ += "A" + n + "," + n + ",0," + +(u >= Qt) + "," + f + "," + (this._x1 = e + n * Math.cos(o)) + "," + (this._y1 = t + n * Math.sin(o))));
  },
  rect: function(e, t, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Of(e) {
  return function() {
    return e;
  };
}
var If = Math.abs, Af = Math.atan2, Pf = Math.cos, Rf = Math.max, Tf = Math.min, Mf = Math.sin, Bf = Math.sqrt, $f = 1e-12, vn = Math.PI, Qn = vn / 2, Lf = 2 * vn;
function Ff(e) {
  return e > 1 ? 0 : e < -1 ? vn : Math.acos(e);
}
function Vf(e) {
  return e >= 1 ? Qn : e <= -1 ? -Qn : Math.asin(e);
}
var Bs = no;
function no(e, t, n) {
  e instanceof RegExp && (e = Zn(e, n)), t instanceof RegExp && (t = Zn(t, n));
  var r = ro(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function Zn(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
no.range = ro;
function ro(e, t, n) {
  var r, o, s, i, a, c = n.indexOf(e), l = n.indexOf(t, c + 1), f = c;
  if (c >= 0 && l > 0) {
    for (r = [], s = n.length; f >= 0 && !a; )
      f == c ? (r.push(f), c = n.indexOf(e, f + 1)) : r.length == 1 ? a = [r.pop(), l] : (o = r.pop(), o < s && (s = o, i = l), l = n.indexOf(t, f + 1)), f = c < l && c >= 0 ? c : l;
    r.length && (a = [s, i]);
  }
  return a;
}
var $s = oo;
function oo(e, t, n) {
  e instanceof RegExp && (e = er(e, n)), t instanceof RegExp && (t = er(t, n));
  var r = so(e, t, n);
  return r && {
    start: r[0],
    end: r[1],
    pre: n.slice(0, r[0]),
    body: n.slice(r[0] + e.length, r[1]),
    post: n.slice(r[1] + t.length)
  };
}
function er(e, t) {
  var n = t.match(e);
  return n ? n[0] : null;
}
oo.range = so;
function so(e, t, n) {
  var r, o, s, i, a, c = n.indexOf(e), l = n.indexOf(t, c + 1), f = c;
  if (c >= 0 && l > 0) {
    if (e === t)
      return [c, l];
    for (r = [], s = n.length; f >= 0 && !a; )
      f == c ? (r.push(f), c = n.indexOf(e, f + 1)) : r.length == 1 ? a = [r.pop(), l] : (o = r.pop(), o < s && (s = o, i = l), l = n.indexOf(t, f + 1)), f = c < l && c >= 0 ? c : l;
    r.length && (a = [s, i]);
  }
  return a;
}
var Ls = $s, Fs = io;
function io(e, t, n) {
  var r = e;
  return Vs(e, t).reduce(function(o, s) {
    return o.replace(s.functionIdentifier + "(" + s.matches.body + ")", Gs(s.matches.body, s.functionIdentifier, n, r, t));
  }, e);
}
function Vs(e, t) {
  var n = [], r = typeof t == "string" ? new RegExp("\\b(" + t + ")\\(") : t;
  do {
    var o = r.exec(e);
    if (!o)
      return n;
    if (o[1] === void 0)
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + t);
    var s = o[1], i = o.index, a = Ls("(", ")", e.substring(i));
    if (!a || a.start !== o[0].length - 1)
      throw new SyntaxError(s + "(): missing closing ')' in the value '" + e + "'");
    n.push({ matches: a, functionIdentifier: s }), e = a.post;
  } while (r.test(e));
  return n;
}
function Gs(e, t, n, r, o) {
  return n(io(e, o, n), t, r);
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
var ks = te, B = ks;
function Z(e, t) {
  for (var n = 0; n < e.length; n++)
    e[n] += t;
  return e;
}
var be = [
  { token: "sin", show: "sin", type: 0, value: B.math.sin },
  { token: "cos", show: "cos", type: 0, value: B.math.cos },
  { token: "tan", show: "tan", type: 0, value: B.math.tan },
  { token: "pi", show: "&pi;", type: 3, value: "PI" },
  { token: "(", show: "(", type: 4, value: "(" },
  { token: ")", show: ")", type: 5, value: ")" },
  { token: "P", show: "P", type: 10, value: B.math.P },
  { token: "C", show: "C", type: 10, value: B.math.C },
  { token: " ", show: " ", type: 14, value: " ".anchor },
  { token: "asin", show: "asin", type: 0, value: B.math.asin },
  { token: "acos", show: "acos", type: 0, value: B.math.acos },
  { token: "atan", show: "atan", type: 0, value: B.math.atan },
  { token: "7", show: "7", type: 1, value: "7" },
  { token: "8", show: "8", type: 1, value: "8" },
  { token: "9", show: "9", type: 1, value: "9" },
  { token: "int", show: "Int", type: 0, value: Math.floor },
  { token: "cosh", show: "cosh", type: 0, value: B.math.cosh },
  { token: "acosh", show: "acosh", type: 0, value: B.math.acosh },
  { token: "ln", show: " ln", type: 0, value: Math.log },
  { token: "^", show: "^", type: 10, value: Math.pow },
  { token: "root", show: "root", type: 0, value: Math.sqrt },
  { token: "4", show: "4", type: 1, value: "4" },
  { token: "5", show: "5", type: 1, value: "5" },
  { token: "6", show: "6", type: 1, value: "6" },
  { token: "/", show: "&divide;", type: 2, value: B.math.div },
  { token: "!", show: "!", type: 7, value: B.math.fact },
  { token: "tanh", show: "tanh", type: 0, value: B.math.tanh },
  { token: "atanh", show: "atanh", type: 0, value: B.math.atanh },
  { token: "Mod", show: " Mod ", type: 2, value: B.math.mod },
  { token: "1", show: "1", type: 1, value: "1" },
  { token: "2", show: "2", type: 1, value: "2" },
  { token: "3", show: "3", type: 1, value: "3" },
  { token: "*", show: "&times;", type: 2, value: B.math.mul },
  { token: "sinh", show: "sinh", type: 0, value: B.math.sinh },
  { token: "asinh", show: "asinh", type: 0, value: B.math.asinh },
  { token: "e", show: "e", type: 3, value: "E" },
  { token: "log", show: " log", type: 0, value: B.math.log },
  { token: "0", show: "0", type: 1, value: "0" },
  { token: ".", show: ".", type: 6, value: "." },
  { token: "+", show: "+", type: 9, value: B.math.add },
  { token: "-", show: "-", type: 9, value: B.math.sub },
  { token: ",", show: ",", type: 11, value: "," },
  { token: "Sigma", show: "&Sigma;", type: 12, value: B.math.sigma },
  { token: "n", show: "n", type: 13, value: "n" },
  { token: "Pi", show: "&Pi;", type: 12, value: B.math.Pi },
  { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
  { token: "&", show: "&", type: 9, value: B.math.and }
], tn = {
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
for (var pt = 0; pt < be.length; pt++)
  be[pt].precedence = tn[be[pt].type];
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
}, Me = {
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
}, Ws = {
  0: !0,
  3: !0,
  4: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, fe = {}, We = {
  0: !0,
  1: !0,
  3: !0,
  4: !0,
  6: !0,
  8: !0,
  12: !0,
  13: !0,
  15: !0
}, Us = {
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
function Hs(e, t, n, r) {
  for (var o = 0; o < r; o++)
    if (e[n + o] !== t[o])
      return !1;
  return !0;
}
B.tokenTypes = {
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
B.addToken = function(e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t].token.length, r = -1;
    e[t].type === B.tokenTypes.FUNCTION_WITH_N_ARGS && e[t].numberOfArguments === void 0 && (e[t].numberOfArguments = 2), ne[n] = ne[n] || [];
    for (var o = 0; o < ne[n].length; o++)
      if (e[t].token === ne[n][o]) {
        r = ao(ne[n][o], be);
        break;
      }
    r === -1 ? (be.push(e[t]), e[t].precedence = tn[e[t].type], ne.length <= e[t].token.length && (ne[e[t].token.length] = []), ne[e[t].token.length].push(e[t].token)) : (be[r] = e[t], e[t].precedence = tn[e[t].type]);
  }
};
function ao(e, t) {
  for (var n = 0; n < t.length; n++)
    if (t[n].token === e)
      return n;
  return -1;
}
function qs(e) {
  for (var t = [], n = e.length, r, o, s, i = 0; i < n; i++)
    if (!(i < n - 1 && e[i] === " " && e[i + 1] === " ")) {
      for (r = "", o = e.length - i > ne.length - 2 ? ne.length - 1 : e.length - i; o > 0; o--)
        if (ne[o] !== void 0)
          for (s = 0; s < ne[o].length; s++)
            Hs(e, ne[o][s], i, o) && (r = ne[o][s], s = ne[o].length, o = 0);
      if (i += r.length - 1, r === "")
        throw new B.Exception("Can't understand after " + e.slice(i));
      t.push(be[ao(r, be)]);
    }
  return t;
}
var zs = {
  value: B.math.changeSign,
  type: 0,
  pre: 21,
  show: "-"
}, ht = {
  value: ")",
  show: ")",
  type: 5,
  pre: 0
}, Ue = {
  value: "(",
  type: 4,
  pre: 0,
  show: "("
};
B.lex = function(e, t) {
  var n = [Ue], r = [], o = e, s = he, i = 0, a = fe, c = "", l;
  typeof t < "u" && B.addToken(t);
  var f = {}, u = qs(o);
  for (l = 0; l < u.length; l++) {
    var d = u[l];
    if (d.type === 14) {
      if (l > 0 && l < u.length - 1 && u[l + 1].type === 1 && (u[l - 1].type === 1 || u[l - 1].type === 6))
        throw new B.Exception("Unexpected Space");
      continue;
    }
    var p = d.token, g = d.type, b = d.value, m = d.precedence, C = d.show, D = n[n.length - 1], y;
    for (y = r.length; y-- && r[y] === 0; )
      if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(g) !== -1) {
        if (s[g] !== !0)
          throw new B.Exception(p + " is not allowed after " + c);
        n.push(ht), s = Me, a = We, r.pop();
      }
    if (s[g] !== !0)
      throw new B.Exception(p + " is not allowed after " + c);
    if (a[g] === !0 && (g = 2, b = B.math.mul, C = "&times;", m = 3, l = l - 1), f = {
      value: b,
      type: g,
      pre: m,
      show: C,
      numberOfArguments: d.numberOfArguments
    }, g === 0)
      s = he, a = fe, Z(r, 2), n.push(f), u[l + 1].type !== 4 && (n.push(Ue), r.push(2));
    else if (g === 1)
      D.type === 1 ? (D.value += b, Z(r, 1)) : n.push(f), s = Me, a = Ws;
    else if (g === 2)
      s = he, a = fe, Z(r, 2), n.push(f);
    else if (g === 3)
      n.push(f), s = Me, a = We;
    else if (g === 4)
      Z(r, 1), i++, s = he, a = fe, n.push(f);
    else if (g === 5) {
      if (!i)
        throw new B.Exception("Closing parenthesis are more than opening one, wait What!!!");
      i--, s = Me, a = We, n.push(f), Z(r, 1);
    } else if (g === 6) {
      if (D.hasDec)
        throw new B.Exception("Two decimals are not allowed in one number");
      D.type !== 1 && (D = {
        value: 0,
        type: 1,
        pre: 0
      }, n.push(D)), s = Us, Z(r, 1), a = fe, D.value += b, D.hasDec = !0;
    } else
      g === 7 && (s = Me, a = We, Z(r, 1), n.push(f));
    g === 8 ? (s = he, a = fe, Z(r, d.numberOfArguments + 2), n.push(f), u[l + 1].type !== 4 && (n.push(Ue), r.push(d.numberOfArguments + 2))) : g === 9 ? (D.type === 9 ? D.value === B.math.add ? (D.value = b, D.show = C, Z(r, 1)) : D.value === B.math.sub && C === "-" && (D.value = B.math.add, D.show = "+", Z(r, 1)) : D.type !== 5 && D.type !== 7 && D.type !== 1 && D.type !== 3 && D.type !== 13 ? p === "-" && (s = he, a = fe, Z(r, 2).push(2), n.push(zs), n.push(Ue)) : (n.push(f), Z(r, 2)), s = he, a = fe) : g === 10 ? (s = he, a = fe, Z(r, 2), n.push(f)) : g === 11 ? (s = he, a = fe, n.push(f)) : g === 12 ? (s = he, a = fe, Z(r, 6), n.push(f), u[l + 1].type !== 4 && (n.push(Ue), r.push(6))) : g === 13 && (s = Me, a = We, n.push(f)), Z(r, -1), c = p;
  }
  for (y = r.length; y--; )
    n.push(ht);
  if (s[5] !== !0)
    throw new B.Exception("complete the expression");
  for (; i--; )
    n.push(ht);
  return n.push(ht), new B(n);
};
var js = B, nn = js;
nn.prototype.toPostfix = function() {
  for (var e = [], t, n, r, o, s, i = [{ value: "(", type: 4, pre: 0 }], a = this.value, c = 1; c < a.length; c++)
    if (a[c].type === 1 || a[c].type === 3 || a[c].type === 13)
      a[c].type === 1 && (a[c].value = Number(a[c].value)), e.push(a[c]);
    else if (a[c].type === 4)
      i.push(a[c]);
    else if (a[c].type === 5)
      for (; (n = i.pop()).type !== 4; )
        e.push(n);
    else if (a[c].type === 11) {
      for (; (n = i.pop()).type !== 4; )
        e.push(n);
      i.push(n);
    } else {
      t = a[c], o = t.pre, s = i[i.length - 1], r = s.pre;
      var l = s.value == "Math.pow" && t.value == "Math.pow";
      if (o > r)
        i.push(t);
      else {
        for (; r >= o && !l || l && o < r; )
          n = i.pop(), s = i[i.length - 1], e.push(n), r = s.pre, l = t.value == "Math.pow" && s.value == "Math.pow";
        i.push(t);
      }
    }
  return new nn(e);
};
var Ys = nn, je = Ys;
je.prototype.postfixEval = function(e) {
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
      for (var c = [], l = 0; l < s[a].numberOfArguments; l++)
        c.push(t.pop().value);
      t.push({ type: 1, value: s[a].value.apply(s[a], c.reverse()) });
    } else
      s[a].type === 10 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r.value = r.concat(n), r.value.push(s[a]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(s[a]), t.push(n)) : t.push({ type: 1, value: s[a].value(r.value, n.value) })) : s[a].type === 2 || s[a].type === 9 ? (n = t.pop(), r = t.pop(), typeof r.type > "u" ? (r = r.concat(n), r.push(s[a]), t.push(r)) : typeof n.type > "u" ? (n.unshift(r), n.push(s[a]), t.push(n)) : t.push({ type: 1, value: s[a].value(r.value, n.value) })) : s[a].type === 12 ? (n = t.pop(), typeof n.type < "u" && (n = [n]), r = t.pop(), o = t.pop(), t.push({ type: 1, value: s[a].value(o.value, r.value, new je(n)) })) : s[a].type === 13 && (i ? t.push({ value: e[s[a].value], type: 3 }) : t.push([s[a]]));
  if (t.length > 1)
    throw new je.Exception("Uncaught Syntax error");
  return t[0].value > 1e15 ? "Infinity" : parseFloat(t[0].value.toFixed(15));
};
je.eval = function(e, t, n) {
  return typeof t > "u" ? this.lex(e).toPostfix().postfixEval() : typeof n > "u" ? typeof t.length < "u" ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(n);
};
var Ks = je, co = Ks;
co.prototype.formulaEval = function() {
  for (var e, t, n, r = [], o = this.value, s = 0; s < o.length; s++)
    o[s].type === 1 || o[s].type === 3 ? r.push({ value: o[s].type === 3 ? o[s].show : o[s].value, type: 1 }) : o[s].type === 13 ? r.push({ value: o[s].show, type: 1 }) : o[s].type === 0 ? r[r.length - 1] = { value: o[s].show + (o[s].show != "-" ? "(" : "") + r[r.length - 1].value + (o[s].show != "-" ? ")" : ""), type: 0 } : o[s].type === 7 ? r[r.length - 1] = { value: (r[r.length - 1].type != 1 ? "(" : "") + r[r.length - 1].value + (r[r.length - 1].type != 1 ? ")" : "") + o[s].show, type: 7 } : o[s].type === 10 ? (e = r.pop(), t = r.pop(), o[s].show === "P" || o[s].show === "C" ? r.push({ value: "<sup>" + t.value + "</sup>" + o[s].show + "<sub>" + e.value + "</sub>", type: 10 }) : r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + "<sup>" + e.value + "</sup>", type: 1 })) : o[s].type === 2 || o[s].type === 9 ? (e = r.pop(), t = r.pop(), r.push({ value: (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : "") + o[s].show + (e.type != 1 ? "(" : "") + e.value + (e.type != 1 ? ")" : ""), type: o[s].type })) : o[s].type === 12 && (e = r.pop(), t = r.pop(), n = r.pop(), r.push({ value: o[s].show + "(" + n.value + "," + t.value + "," + e.value + ")", type: 12 }));
  return r[0].value;
};
var Xs = co, Js = Bs, Qs = Fs, Zs = Xs, ei = 100, ti = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, Pt, ni = ri;
function ri(e, t) {
  Pt = 0, t = Math.pow(10, t === void 0 ? 5 : t), e = e.replace(/\n+/g, " ");
  function n(o, s, i) {
    if (Pt++ > ei)
      throw Pt = 0, new Error("Call stack overflow for " + i);
    if (o === "")
      throw new Error(s + "(): '" + i + "' must contain a non-whitespace string");
    o = r(o, i);
    var a = oi(o);
    if (a.length > 1 || o.indexOf("var(") > -1)
      return s + "(" + o + ")";
    var c = a[0] || "";
    c === "%" && (o = o.replace(/\b[0-9\.]+%/g, function(u) {
      return parseFloat(u.slice(0, -1)) * 0.01;
    }));
    var l = o.replace(new RegExp(c, "gi"), ""), f;
    try {
      f = Zs.eval(l);
    } catch {
      return s + "(" + o + ")";
    }
    return c === "%" && (f *= 100), (s.length || c === "%") && (f = Math.round(f * t) / t), f += c, f;
  }
  function r(o, s) {
    o = o.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    for (var i = "", a = o, c; c = ti.exec(a); ) {
      c[0].index > 0 && (i += a.substring(0, c[0].index));
      var l = Js("(", ")", a.substring([0].index));
      if (l.body === "")
        throw new Error("'" + o + "' must contain a non-whitespace string");
      var f = n(l.body, "", s);
      i += l.pre + f, a = l.post;
    }
    return i + a;
  }
  return Qs(e, /((?:\-[a-z]+\-)?calc)\(/, n);
}
function oi(e) {
  for (var t = [], n = [], r = /[\.0-9]([%a-z]+)/gi, o = r.exec(e); o; )
    !o || !o[1] || (n.indexOf(o[1].toLowerCase()) === -1 && (t.push(o[1]), n.push(o[1].toLowerCase())), o = r.exec(e));
  return t;
}
const Rt = /* @__PURE__ */ eo(ni);
var tr = "__react_svg_text_measurement_id";
function si(e, t) {
  try {
    var n = document.getElementById(tr);
    if (!n) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttribute("aria-hidden", "true"), r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", n = document.createElementNS("http://www.w3.org/2000/svg", "text"), n.setAttribute("id", tr), r.appendChild(n), document.body.appendChild(r);
    }
    return Object.assign(n.style, t), n.textContent = e, n.getComputedTextLength();
  } catch {
    return null;
  }
}
const nr = xs(si, function(e, t) {
  return e + "_" + JSON.stringify(t);
});
var ii = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function ai(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, s;
  for (s = 0; s < r.length; s++)
    o = r[s], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Tt(e) {
  return typeof e == "number";
}
function rr(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function ci(e) {
  var t = e.verticalAnchor, n = t === void 0 ? "end" : t, r = e.scaleToFit, o = r === void 0 ? !1 : r, s = e.angle, i = e.width, a = e.lineHeight, c = a === void 0 ? "1em" : a, l = e.capHeight, f = l === void 0 ? "0.71em" : l, u = e.children, d = e.style, p = ai(e, ii), g = p.x, b = g === void 0 ? 0 : g, m = p.y, C = m === void 0 ? 0 : m, D = !rr(b) || !rr(C), y = N.useMemo(function() {
    var x = u == null ? [] : u.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: x.map(function(I) {
        return {
          word: I,
          wordWidth: nr(I, d) || 0
        };
      }),
      spaceWidth: nr(" ", d) || 0
    };
  }, [u, d]), E = y.wordsWithWidth, v = y.spaceWidth, S = N.useMemo(function() {
    return D ? [] : i || o ? E.reduce(function(x, I) {
      var M = I.word, T = I.wordWidth, $ = x[x.length - 1];
      if ($ && (i == null || o || ($.width || 0) + T + v < i))
        $.words.push(M), $.width = $.width || 0, $.width += T + v;
      else {
        var W = {
          words: [M],
          width: T
        };
        x.push(W);
      }
      return x;
    }, []) : [{
      words: u == null ? [] : u.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [D, i, o, u, E, v]), _ = N.useMemo(function() {
    var x = D ? "" : Rt(n === "start" ? "calc(" + f + ")" : n === "middle" ? "calc(" + (S.length - 1) / 2 + " * -" + c + " + (" + f + " / 2))" : "calc(" + (S.length - 1) + " * -" + c + ")");
    return x;
  }, [D, n, f, S.length, c]), w = N.useMemo(function() {
    var x = [];
    if (D)
      return "";
    if (Tt(b) && Tt(C) && Tt(i) && o && S.length > 0) {
      var I = S[0].width || 1, M = o === "shrink-only" ? Math.min(i / I, 1) : i / I, T = M, $ = b - M * b, W = C - T * C;
      x.push("matrix(" + M + ", 0, 0, " + T + ", " + $ + ", " + W + ")");
    }
    return s && x.push("rotate(" + s + ", " + b + ", " + C + ")"), x.length > 0 ? x.join(" ") : "";
  }, [D, b, C, i, o, S, s]);
  return {
    wordsByLines: S,
    startDy: _,
    transform: w
  };
}
var li = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function rn() {
  return rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, rn.apply(this, arguments);
}
function ui(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, s;
  for (s = 0; s < r.length; s++)
    o = r[s], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var di = {
  overflow: "visible"
};
function Gf(e) {
  var t = e.dx, n = t === void 0 ? 0 : t, r = e.dy, o = r === void 0 ? 0 : r, s = e.textAnchor, i = s === void 0 ? "start" : s, a = e.innerRef, c = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var l = e.lineHeight, f = l === void 0 ? "1em" : l;
  e.scaleToFit, e.capHeight, e.width;
  var u = ui(e, li), d = u.x, p = d === void 0 ? 0 : d, g = u.fontSize, b = ci(e), m = b.wordsByLines, C = b.startDy, D = b.transform;
  return /* @__PURE__ */ O.createElement("svg", {
    ref: a,
    x: n,
    y: o,
    fontSize: g,
    style: di
  }, m.length > 0 ? /* @__PURE__ */ O.createElement("text", rn({
    ref: c,
    transform: D
  }, u, {
    textAnchor: i
  }), m.map(function(y, E) {
    return /* @__PURE__ */ O.createElement("tspan", {
      key: E,
      x: p,
      dy: E === 0 ? C : f
    }, y.words.join(" "));
  })) : null);
}
function bn(e) {
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
const fi = {
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
}, pi = {
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
}, hi = {
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
}, mi = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": ["#F5FEFF", "#E1FBFF", "#C0F2FD", "#94E2ED", "#5EBAD4", "#3695BE", "#2273A0", "#0E5181", "#093460"],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": ["#FFFDF0", "#FFF7DC", "#FFE9C2", "#FFD097", "#F7A866", "#EB7723", "#B95117", "#853209", "#661F00"],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, kf = mi, Wf = bn(pi), Uf = bn(fi), Hf = bn(hi);
var lo = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, or = O.createContext && O.createContext(lo), ye = globalThis && globalThis.__assign || function() {
  return ye = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ye.apply(this, arguments);
}, gi = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function uo(e) {
  return e && e.map(function(t, n) {
    return O.createElement(t.tag, ye({
      key: n
    }, t.attr), uo(t.child));
  });
}
function qf(e) {
  return function(t) {
    return O.createElement(vi, ye({
      attr: ye({}, e.attr)
    }, t), uo(e.child));
  };
}
function vi(e) {
  var t = function(n) {
    var r = e.attr, o = e.size, s = e.title, i = gi(e, ["attr", "size", "title"]), a = o || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), O.createElement("svg", ye({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, i, {
      className: c,
      style: ye(ye({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && O.createElement("title", null, s), e.children);
  };
  return or !== void 0 ? O.createElement(or.Consumer, null, function(n) {
    return t(n);
  }) : t(lo);
}
const bi = 4.5, zf = (e, t) => {
  if (_s.contrast(e, t) < bi)
    switch (e) {
      case "#FFF":
        return "#000";
      case "#000":
        return "#FFF";
      default:
        return e;
    }
  return e;
};
var on = { exports: {} }, Mt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function yi() {
  if (sr)
    return Mt;
  sr = 1;
  var e = N;
  function t(u, d) {
    return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, s = e.useLayoutEffect, i = e.useDebugValue;
  function a(u, d) {
    var p = d(), g = r({ inst: { value: p, getSnapshot: d } }), b = g[0].inst, m = g[1];
    return s(function() {
      b.value = p, b.getSnapshot = d, c(b) && m({ inst: b });
    }, [u, p, d]), o(function() {
      return c(b) && m({ inst: b }), u(function() {
        c(b) && m({ inst: b });
      });
    }, [u]), i(p), p;
  }
  function c(u) {
    var d = u.getSnapshot;
    u = u.value;
    try {
      var p = d();
      return !n(u, p);
    } catch {
      return !0;
    }
  }
  function l(u, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return Mt.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Mt;
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
var ir;
function Ei() {
  return ir || (ir = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var E = arguments.length, v = new Array(E > 1 ? E - 1 : 0), S = 1; S < E; S++)
          v[S - 1] = arguments[S];
        r("error", y, v);
      }
    }
    function r(y, E, v) {
      {
        var S = t.ReactDebugCurrentFrame, _ = S.getStackAddendum();
        _ !== "" && (E += "%s", v = v.concat([_]));
        var w = v.map(function(x) {
          return String(x);
        });
        w.unshift("Warning: " + E), Function.prototype.apply.call(console[y], console, w);
      }
    }
    function o(y, E) {
      return y === E && (y !== 0 || 1 / y === 1 / E) || y !== y && E !== E;
    }
    var s = typeof Object.is == "function" ? Object.is : o, i = e.useState, a = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, f = !1, u = !1;
    function d(y, E, v) {
      f || e.startTransition !== void 0 && (f = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = E();
      if (!u) {
        var _ = E();
        s(S, _) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), u = !0);
      }
      var w = i({
        inst: {
          value: S,
          getSnapshot: E
        }
      }), x = w[0].inst, I = w[1];
      return c(function() {
        x.value = S, x.getSnapshot = E, p(x) && I({
          inst: x
        });
      }, [y, S, E]), a(function() {
        p(x) && I({
          inst: x
        });
        var M = function() {
          p(x) && I({
            inst: x
          });
        };
        return y(M);
      }, [y]), l(S), S;
    }
    function p(y) {
      var E = y.getSnapshot, v = y.value;
      try {
        var S = E();
        return !s(v, S);
      } catch {
        return !0;
      }
    }
    function g(y, E, v) {
      return E();
    }
    var b = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !b, C = m ? g : d, D = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : C;
    Bt.useSyncExternalStore = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bt;
}
process.env.NODE_ENV === "production" ? on.exports = yi() : on.exports = Ei();
var yn = on.exports, $t = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function Di() {
  if (ar)
    return $t;
  ar = 1;
  var e = N, t = yn;
  function n(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, a = e.useMemo, c = e.useDebugValue;
  return $t.useSyncExternalStoreWithSelector = function(l, f, u, d, p) {
    var g = s(null);
    if (g.current === null) {
      var b = { hasValue: !1, value: null };
      g.current = b;
    } else
      b = g.current;
    g = a(function() {
      function C(S) {
        if (!D) {
          if (D = !0, y = S, S = d(S), p !== void 0 && b.hasValue) {
            var _ = b.value;
            if (p(_, S))
              return E = _;
          }
          return E = S;
        }
        if (_ = E, r(y, S))
          return _;
        var w = d(S);
        return p !== void 0 && p(_, w) ? _ : (y = S, E = w);
      }
      var D = !1, y, E, v = u === void 0 ? null : u;
      return [function() {
        return C(f());
      }, v === null ? void 0 : function() {
        return C(v());
      }];
    }, [f, u, d, p]);
    var m = o(l, g[0], g[1]);
    return i(function() {
      b.hasValue = !0, b.value = m;
    }, [m]), c(m), m;
  }, $t;
}
var Lt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Si() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = yn;
    function n(f, u) {
      return f === u && (f !== 0 || 1 / f === 1 / u) || f !== f && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, a = e.useMemo, c = e.useDebugValue;
    function l(f, u, d, p, g) {
      var b = s(null), m;
      b.current === null ? (m = {
        hasValue: !1,
        value: null
      }, b.current = m) : m = b.current;
      var C = a(function() {
        var v = !1, S, _, w = function(T) {
          if (!v) {
            v = !0, S = T;
            var $ = p(T);
            if (g !== void 0 && m.hasValue) {
              var W = m.value;
              if (g(W, $))
                return _ = W, W;
            }
            return _ = $, $;
          }
          var z = S, K = _;
          if (r(z, T))
            return K;
          var X = p(T);
          return g !== void 0 && g(K, X) ? K : (S = T, _ = X, X);
        }, x = d === void 0 ? null : d, I = function() {
          return w(u());
        }, M = x === null ? void 0 : function() {
          return w(x());
        };
        return [I, M];
      }, [u, d, p, g]), D = C[0], y = C[1], E = o(f, D, y);
      return i(function() {
        m.hasValue = !0, m.value = E;
      }, [E]), c(E), E;
    }
    Lt.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Lt;
}
process.env.NODE_ENV === "production" ? Di() : Si();
function Ci(e) {
  e();
}
let fo = Ci;
const Ni = (e) => fo = e, wi = () => fo, lr = Symbol.for("react-redux-context"), ur = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function xi() {
  var e;
  if (!N.createContext)
    return {};
  const t = (e = ur[lr]) != null ? e : ur[lr] = /* @__PURE__ */ new Map();
  let n = t.get(N.createContext);
  return n || (n = N.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(N.createContext, n)), n;
}
const po = /* @__PURE__ */ xi(), _i = () => {
  throw new Error("uSES not initialized!");
};
var sn = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function Oi() {
  if (dr)
    return F;
  dr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function y(v) {
    if (typeof v == "object" && v !== null) {
      var S = v.$$typeof;
      switch (S) {
        case t:
          switch (v = v.type, v) {
            case c:
            case l:
            case r:
            case s:
            case o:
            case u:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case f:
                case g:
                case p:
                case i:
                  return v;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function E(v) {
    return y(v) === l;
  }
  return F.AsyncMode = c, F.ConcurrentMode = l, F.ContextConsumer = a, F.ContextProvider = i, F.Element = t, F.ForwardRef = f, F.Fragment = r, F.Lazy = g, F.Memo = p, F.Portal = n, F.Profiler = s, F.StrictMode = o, F.Suspense = u, F.isAsyncMode = function(v) {
    return E(v) || y(v) === c;
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
    return y(v) === g;
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
    return typeof v == "string" || typeof v == "function" || v === r || v === l || v === s || v === o || v === u || v === d || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === p || v.$$typeof === i || v.$$typeof === a || v.$$typeof === f || v.$$typeof === m || v.$$typeof === C || v.$$typeof === D || v.$$typeof === b);
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
var fr;
function Ii() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function y(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === l || A === s || A === o || A === u || A === d || typeof A == "object" && A !== null && (A.$$typeof === g || A.$$typeof === p || A.$$typeof === i || A.$$typeof === a || A.$$typeof === f || A.$$typeof === m || A.$$typeof === C || A.$$typeof === D || A.$$typeof === b);
    }
    function E(A) {
      if (typeof A == "object" && A !== null) {
        var de = A.$$typeof;
        switch (de) {
          case t:
            var R = A.type;
            switch (R) {
              case c:
              case l:
              case r:
              case s:
              case o:
              case u:
                return R;
              default:
                var Te = R && R.$$typeof;
                switch (Te) {
                  case a:
                  case f:
                  case g:
                  case p:
                  case i:
                    return Te;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var v = c, S = l, _ = a, w = i, x = t, I = f, M = r, T = g, $ = p, W = n, z = s, K = o, X = u, re = !1;
    function H(A) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ae(A) || E(A) === c;
    }
    function ae(A) {
      return E(A) === l;
    }
    function me(A) {
      return E(A) === a;
    }
    function ge(A) {
      return E(A) === i;
    }
    function q(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function Pe(A) {
      return E(A) === f;
    }
    function Ce(A) {
      return E(A) === r;
    }
    function Ne(A) {
      return E(A) === g;
    }
    function Re(A) {
      return E(A) === p;
    }
    function ke(A) {
      return E(A) === n;
    }
    function ve(A) {
      return E(A) === s;
    }
    function we(A) {
      return E(A) === o;
    }
    function dt(A) {
      return E(A) === u;
    }
    V.AsyncMode = v, V.ConcurrentMode = S, V.ContextConsumer = _, V.ContextProvider = w, V.Element = x, V.ForwardRef = I, V.Fragment = M, V.Lazy = T, V.Memo = $, V.Portal = W, V.Profiler = z, V.StrictMode = K, V.Suspense = X, V.isAsyncMode = H, V.isConcurrentMode = ae, V.isContextConsumer = me, V.isContextProvider = ge, V.isElement = q, V.isForwardRef = Pe, V.isFragment = Ce, V.isLazy = Ne, V.isMemo = Re, V.isPortal = ke, V.isProfiler = ve, V.isStrictMode = we, V.isSuspense = dt, V.isValidElementType = y, V.typeOf = E;
  }()), V;
}
process.env.NODE_ENV === "production" ? sn.exports = Oi() : sn.exports = Ii();
var Ai = sn.exports, En = Ai, Pi = {
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
}, Ri = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ti = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ho = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Dn = {};
Dn[En.ForwardRef] = Ti;
Dn[En.Memo] = ho;
function pr(e) {
  return En.isMemo(e) ? ho : Dn[e.$$typeof] || Pi;
}
var Mi = Object.defineProperty, Bi = Object.getOwnPropertyNames, hr = Object.getOwnPropertySymbols, $i = Object.getOwnPropertyDescriptor, Li = Object.getPrototypeOf, mr = Object.prototype;
function mo(e, t, n) {
  if (typeof t != "string") {
    if (mr) {
      var r = Li(t);
      r && r !== mr && mo(e, r, n);
    }
    var o = Bi(t);
    hr && (o = o.concat(hr(t)));
    for (var s = pr(e), i = pr(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!Ri[c] && !(n && n[c]) && !(i && i[c]) && !(s && s[c])) {
        var l = $i(t, c);
        try {
          Mi(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var Fi = mo;
const gr = /* @__PURE__ */ eo(Fi);
var an = { exports: {} }, G = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function Vi() {
  if (vr)
    return G;
  vr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var C = m.$$typeof;
      switch (C) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case l:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case i:
                case c:
                case d:
                case u:
                case s:
                  return m;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return G.ContextConsumer = i, G.ContextProvider = s, G.Element = e, G.ForwardRef = c, G.Fragment = n, G.Lazy = d, G.Memo = u, G.Portal = t, G.Profiler = o, G.StrictMode = r, G.Suspense = l, G.SuspenseList = f, G.isAsyncMode = function() {
    return !1;
  }, G.isConcurrentMode = function() {
    return !1;
  }, G.isContextConsumer = function(m) {
    return b(m) === i;
  }, G.isContextProvider = function(m) {
    return b(m) === s;
  }, G.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, G.isForwardRef = function(m) {
    return b(m) === c;
  }, G.isFragment = function(m) {
    return b(m) === n;
  }, G.isLazy = function(m) {
    return b(m) === d;
  }, G.isMemo = function(m) {
    return b(m) === u;
  }, G.isPortal = function(m) {
    return b(m) === t;
  }, G.isProfiler = function(m) {
    return b(m) === o;
  }, G.isStrictMode = function(m) {
    return b(m) === r;
  }, G.isSuspense = function(m) {
    return b(m) === l;
  }, G.isSuspenseList = function(m) {
    return b(m) === f;
  }, G.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === l || m === f || m === p || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === u || m.$$typeof === s || m.$$typeof === i || m.$$typeof === c || m.$$typeof === g || m.getModuleId !== void 0);
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
var br;
function Gi() {
  return br || (br = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = !1, b = !1, m = !1, C = !1, D = !1, y;
    y = Symbol.for("react.module.reference");
    function E(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === o || D || R === r || R === l || R === f || C || R === p || g || b || m || typeof R == "object" && R !== null && (R.$$typeof === d || R.$$typeof === u || R.$$typeof === s || R.$$typeof === i || R.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === y || R.getModuleId !== void 0));
    }
    function v(R) {
      if (typeof R == "object" && R !== null) {
        var Te = R.$$typeof;
        switch (Te) {
          case e:
            var ft = R.type;
            switch (ft) {
              case n:
              case o:
              case r:
              case l:
              case f:
                return ft;
              default:
                var jn = ft && ft.$$typeof;
                switch (jn) {
                  case a:
                  case i:
                  case c:
                  case d:
                  case u:
                  case s:
                    return jn;
                  default:
                    return Te;
                }
            }
          case t:
            return Te;
        }
      }
    }
    var S = i, _ = s, w = e, x = c, I = n, M = d, T = u, $ = t, W = o, z = r, K = l, X = f, re = !1, H = !1;
    function ae(R) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function me(R) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ge(R) {
      return v(R) === i;
    }
    function q(R) {
      return v(R) === s;
    }
    function Pe(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function Ce(R) {
      return v(R) === c;
    }
    function Ne(R) {
      return v(R) === n;
    }
    function Re(R) {
      return v(R) === d;
    }
    function ke(R) {
      return v(R) === u;
    }
    function ve(R) {
      return v(R) === t;
    }
    function we(R) {
      return v(R) === o;
    }
    function dt(R) {
      return v(R) === r;
    }
    function A(R) {
      return v(R) === l;
    }
    function de(R) {
      return v(R) === f;
    }
    k.ContextConsumer = S, k.ContextProvider = _, k.Element = w, k.ForwardRef = x, k.Fragment = I, k.Lazy = M, k.Memo = T, k.Portal = $, k.Profiler = W, k.StrictMode = z, k.Suspense = K, k.SuspenseList = X, k.isAsyncMode = ae, k.isConcurrentMode = me, k.isContextConsumer = ge, k.isContextProvider = q, k.isElement = Pe, k.isForwardRef = Ce, k.isFragment = Ne, k.isLazy = Re, k.isMemo = ke, k.isPortal = ve, k.isProfiler = we, k.isStrictMode = dt, k.isSuspense = A, k.isSuspenseList = de, k.isValidElementType = E, k.typeOf = v;
  }()), k;
}
process.env.NODE_ENV === "production" ? an.exports = Vi() : an.exports = Gi();
var yr = an.exports;
function Sn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ft(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Sn(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function ki(e, t, n) {
  Ft(e, "mapStateToProps"), Ft(t, "mapDispatchToProps"), Ft(n, "mergeProps");
}
const Wi = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Ui(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: s,
  areStatePropsEqual: i
}) {
  let a = !1, c, l, f, u, d;
  function p(D, y) {
    return c = D, l = y, f = e(c, l), u = t(r, l), d = n(f, u, l), a = !0, d;
  }
  function g() {
    return f = e(c, l), t.dependsOnOwnProps && (u = t(r, l)), d = n(f, u, l), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, l)), t.dependsOnOwnProps && (u = t(r, l)), d = n(f, u, l), d;
  }
  function m() {
    const D = e(c, l), y = !i(D, f);
    return f = D, y && (d = n(f, u, l)), d;
  }
  function C(D, y) {
    const E = !s(y, l), v = !o(D, c, y, l);
    return c = D, l = y, E && v ? g() : E ? b() : v ? m() : d;
  }
  return function(y, E) {
    return a ? C(y, E) : p(y, E);
  };
}
function Hi(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, s = to(t, Wi);
  const i = n(e, s), a = r(e, s), c = o(e, s);
  return process.env.NODE_ENV !== "production" && ki(i, a, c), Ui(i, a, c, e, s);
}
function qi(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...s) => t(o(...s)));
  }
  return n;
}
function zi(e) {
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
function go(e, t, n) {
  zi(e) || Sn(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
}
function cn(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Er(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function vo(e, t) {
  return function(r, {
    displayName: o
  }) {
    const s = function(a, c) {
      return s.dependsOnOwnProps ? s.mapToProps(a, c) : s.mapToProps(a, void 0);
    };
    return s.dependsOnOwnProps = !0, s.mapToProps = function(a, c) {
      s.mapToProps = e, s.dependsOnOwnProps = Er(e);
      let l = s(a, c);
      return typeof l == "function" && (s.mapToProps = l, s.dependsOnOwnProps = Er(l), l = s(a, c)), process.env.NODE_ENV !== "production" && go(l, o, t), l;
    }, s;
  };
}
function Cn(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function ji(e) {
  return e && typeof e == "object" ? cn((t) => (
    // @ts-ignore
    qi(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    vo(e, "mapDispatchToProps")
  ) : Cn(e, "mapDispatchToProps") : cn((t) => ({
    dispatch: t
  }));
}
function Yi(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    vo(e, "mapStateToProps")
  ) : Cn(e, "mapStateToProps") : cn(() => ({}));
}
function Ki(e, t, n) {
  return Be({}, n, e, t);
}
function Xi(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let s = !1, i;
    return function(c, l, f) {
      const u = e(c, l, f);
      return s ? o(u, i) || (i = u) : (s = !0, i = u, process.env.NODE_ENV !== "production" && go(i, r, "mergeProps")), i;
    };
  };
}
function Ji(e) {
  return e ? typeof e == "function" ? Xi(e) : Cn(e, "mergeProps") : () => Ki;
}
function Qi() {
  const e = wi();
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
const Dr = {
  notify() {
  },
  get: () => []
};
function bo(e, t) {
  let n, r = Dr, o = 0, s = !1;
  function i(b) {
    f();
    const m = r.subscribe(b);
    let C = !1;
    return () => {
      C || (C = !0, m(), u());
    };
  }
  function a() {
    r.notify();
  }
  function c() {
    g.onStateChange && g.onStateChange();
  }
  function l() {
    return s;
  }
  function f() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = Qi());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Dr);
  }
  function d() {
    s || (s = !0, f());
  }
  function p() {
    s && (s = !1, u());
  }
  const g = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return g;
}
const Zi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", yt = Zi ? N.useLayoutEffect : N.useEffect;
function Sr(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Vt(e, t) {
  if (Sr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Sr(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const ea = ["reactReduxForwardedRef"];
let yo = _i;
const ta = (e) => {
  yo = e;
}, na = [null, null], ra = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function oa(e, t, n) {
  yt(() => e(...t), n);
}
function sa(e, t, n, r, o, s) {
  e.current = r, n.current = !1, o.current && (o.current = null, s());
}
function ia(e, t, n, r, o, s, i, a, c, l, f) {
  if (!e)
    return () => {
    };
  let u = !1, d = null;
  const p = () => {
    if (u || !a.current)
      return;
    const b = t.getState();
    let m, C;
    try {
      m = r(b, o.current);
    } catch (D) {
      C = D, d = D;
    }
    C || (d = null), m === s.current ? i.current || l() : (s.current = m, c.current = m, i.current = !0, f());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (u = !0, n.tryUnsubscribe(), n.onStateChange = null, d)
      throw d;
  };
}
function aa(e, t) {
  return e === t;
}
let Cr = !1;
function Eo(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = aa,
  areOwnPropsEqual: s = Vt,
  areStatePropsEqual: i = Vt,
  areMergedPropsEqual: a = Vt,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = po
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !Cr && (Cr = !0, Sn('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = l, u = Yi(e), d = ji(t), p = Ji(n), g = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !yr.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${ra(m)}`);
    const C = m.displayName || m.name || "Component", D = `Connect(${C})`, y = {
      shouldHandleStateChanges: g,
      displayName: D,
      wrappedComponentName: C,
      WrappedComponent: m,
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
    function E(_) {
      const [w, x, I] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: A
        } = _, de = to(_, ea);
        return [_.context, A, de];
      }, [_]), M = N.useMemo(() => w && w.Consumer && // @ts-ignore
      yr.isContextConsumer(/* @__PURE__ */ N.createElement(w.Consumer, null)) ? w : f, [w, f]), T = N.useContext(M), $ = !!_.store && !!_.store.getState && !!_.store.dispatch, W = !!T && !!T.store;
      if (process.env.NODE_ENV !== "production" && !$ && !W)
        throw new Error(`Could not find "store" in the context of "${D}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${D} in connect options.`);
      const z = $ ? _.store : T.store, K = W ? T.getServerState : z.getState, X = N.useMemo(() => Hi(z.dispatch, y), [z]), [re, H] = N.useMemo(() => {
        if (!g)
          return na;
        const A = bo(z, $ ? void 0 : T.subscription), de = A.notifyNestedSubs.bind(A);
        return [A, de];
      }, [z, $, T]), ae = N.useMemo(() => $ ? T : Be({}, T, {
        subscription: re
      }), [$, T, re]), me = N.useRef(), ge = N.useRef(I), q = N.useRef(), Pe = N.useRef(!1);
      N.useRef(!1);
      const Ce = N.useRef(!1), Ne = N.useRef();
      yt(() => (Ce.current = !0, () => {
        Ce.current = !1;
      }), []);
      const Re = N.useMemo(() => () => q.current && I === ge.current ? q.current : X(z.getState(), I), [z, I]), ke = N.useMemo(() => (de) => re ? ia(
        g,
        z,
        re,
        // @ts-ignore
        X,
        ge,
        me,
        Pe,
        Ce,
        q,
        H,
        de
      ) : () => {
      }, [re]);
      oa(sa, [ge, me, Pe, I, q, H]);
      let ve;
      try {
        ve = yo(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ke,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Re,
          K ? () => X(K(), I) : Re
        );
      } catch (A) {
        throw Ne.current && (A.message += `
The error may be correlated with this previous error:
${Ne.current.stack}

`), A;
      }
      yt(() => {
        Ne.current = void 0, q.current = void 0, me.current = ve;
      });
      const we = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(m, Be({}, ve, {
          ref: x
        }))
      ), [x, m, ve]);
      return N.useMemo(() => g ? /* @__PURE__ */ N.createElement(M.Provider, {
        value: ae
      }, we) : we, [M, we, ae]);
    }
    const S = N.memo(E);
    if (S.WrappedComponent = m, S.displayName = E.displayName = D, c) {
      const w = N.forwardRef(function(I, M) {
        return /* @__PURE__ */ N.createElement(S, Be({}, I, {
          reactReduxForwardedRef: M
        }));
      });
      return w.displayName = D, w.WrappedComponent = m, gr(w, m);
    }
    return gr(S, m);
  };
}
function ca({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: s = "once"
}) {
  const i = N.useMemo(() => {
    const l = bo(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: s
    };
  }, [e, r, o, s]), a = N.useMemo(() => e.getState(), [e]);
  yt(() => {
    const {
      subscription: l
    } = i;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [i, a]);
  const c = t || po;
  return /* @__PURE__ */ N.createElement(c.Provider, {
    value: i
  }, n);
}
ta(yn.useSyncExternalStore);
Ni(gn.unstable_batchedUpdates);
function la(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Do(e, t) {
  var n = N.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = N.useRef(!0), o = N.useRef(n), s = r.current || !!(t && o.current.inputs && la(t, o.current.inputs)), i = s ? o.current : {
    inputs: t,
    result: e()
  };
  return N.useEffect(function() {
    r.current = !1, o.current = i;
  }, [i]), i.result;
}
function ua(e, t) {
  return Do(function() {
    return e;
  }, t);
}
var L = Do, P = ua, pe = function(t) {
  var n = t.top, r = t.right, o = t.bottom, s = t.left, i = r - s, a = o - n, c = {
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
  return c;
}, Nn = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Nr = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, da = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Gt = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, wn = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Gt : r, s = t.border, i = s === void 0 ? Gt : s, a = t.padding, c = a === void 0 ? Gt : a, l = pe(Nn(n, o)), f = pe(Nr(n, i)), u = pe(Nr(f, c));
  return {
    marginBox: l,
    borderBox: pe(n),
    paddingBox: f,
    contentBox: u,
    margin: o,
    border: i,
    padding: c
  };
}, ce = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Jn(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : Jn(!1)), o;
}, fa = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Et = function(t, n) {
  var r = t.borderBox, o = t.border, s = t.margin, i = t.padding, a = da(r, n);
  return wn({
    borderBox: a,
    border: o,
    margin: s,
    padding: i
  });
}, Dt = function(t, n) {
  return n === void 0 && (n = fa()), Et(t, n);
}, So = function(t, n) {
  var r = {
    top: ce(n.marginTop),
    right: ce(n.marginRight),
    bottom: ce(n.marginBottom),
    left: ce(n.marginLeft)
  }, o = {
    top: ce(n.paddingTop),
    right: ce(n.paddingRight),
    bottom: ce(n.paddingBottom),
    left: ce(n.paddingLeft)
  }, s = {
    top: ce(n.borderTopWidth),
    right: ce(n.borderRightWidth),
    bottom: ce(n.borderBottomWidth),
    left: ce(n.borderLeftWidth)
  };
  return wn({
    borderBox: t,
    margin: r,
    padding: o,
    border: s
  });
}, Co = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return So(n, r);
}, wr = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function pa(e, t) {
  return !!(e === t || wr(e) && wr(t));
}
function ha(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!pa(e[n], t[n]))
      return !1;
  return !0;
}
function j(e, t) {
  t === void 0 && (t = ha);
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
var ma = function(t) {
  var n = [], r = null, o = function() {
    for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++)
      a[c] = arguments[c];
    n = a, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const Xe = ma, ga = process.env.NODE_ENV === "production", va = /[ \t]{2,}/g, ba = /^[ \t]*/gm, xr = (e) => e.replace(va, " ").replace(ba, "").trim(), ya = (e) => xr(`
  %c@hello-pangea/dnd

  %c${xr(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Ea = (e) => [ya(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Da = "__@hello-pangea/dnd-disable-dev-warnings";
function No(e, t) {
  ga || typeof window < "u" && window[Da] || console[e](...Ea(t));
}
const U = No.bind(null, "warn"), ln = No.bind(null, "error");
function Ee() {
}
function Sa(e, t) {
  return {
    ...e,
    ...t
  };
}
function le(e, t, n) {
  const r = t.map((o) => {
    const s = Sa(n, o.options);
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
const Ca = process.env.NODE_ENV === "production", _r = "Invariant failed";
class Je extends Error {
}
Je.prototype.toString = function() {
  return this.message;
};
function h(e, t) {
  if (!e)
    throw Ca ? new Je(_r) : new Je(`${_r}: ${t || ""}`);
}
class Na extends O.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Ee, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && U(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof Je && (n.preventDefault(), process.env.NODE_ENV !== "production" && ln(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = le(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Je) {
      process.env.NODE_ENV !== "production" && ln(t.message), this.setState({});
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
const wa = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, St = (e) => e + 1, xa = (e) => `
  You have lifted an item in position ${St(e.source.index)}
`, wo = (e, t) => {
  const n = e.droppableId === t.droppableId, r = St(e.index), o = St(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, xo = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, _a = (e) => {
  const t = e.destination;
  if (t)
    return wo(e.source, t);
  const n = e.combine;
  return n ? xo(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Or = (e) => `
  The item has returned to its starting position
  of ${St(e.index)}
`, Oa = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Or(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${wo(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${xo(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Or(e.source)}
  `;
}, Ia = {
  dragHandleUsageInstructions: wa,
  onDragStart: xa,
  onDragUpdate: _a,
  onDragEnd: Oa
};
var bt = Ia;
const Y = {
  x: 0,
  y: 0
}, J = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), oe = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), De = (e, t) => e.x === t.x && e.y === t.y, Ve = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ie = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, Qe = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Ir = (e, t) => Math.min(...t.map((n) => Qe(e, n))), _o = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Aa = (e, t) => {
  const n = pe({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const st = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Ar = (e) => [{
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
}], Pa = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ra = (e, t) => t ? st(e, t.scroll.diff.displacement) : e, Ta = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, Ma = (e, t) => t && t.shouldClipSubject ? Aa(t.pageMarginBox, e) : pe(e);
var $e = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = Ra(e.marginBox, r), s = Ta(o, n, t), i = Ma(s, r);
  return {
    page: e,
    withPlaceholder: t,
    active: i
  };
}, xn = (e, t) => {
  e.frame || (process.env.NODE_ENV, h(!1));
  const n = e.frame, r = oe(t, n.scroll.initial), o = Ve(r), s = {
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
  }, i = $e({
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
const Oo = j((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Io = j((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), wt = j((e) => Object.values(e)), Ba = j((e) => Object.values(e));
var Ae = j((e, t) => Ba(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function _n(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function xt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var _t = j((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), $a = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !_n(o))
    return null;
  function i(p) {
    const g = {
      type: "COMBINE",
      combine: {
        draggableId: p,
        droppableId: n.descriptor.id
      }
    };
    return {
      ...o,
      at: g
    };
  }
  const a = o.displaced.all, c = a.length ? a[0] : null;
  if (e)
    return c ? i(c) : null;
  const l = _t(t, r);
  if (!c) {
    if (!l.length)
      return null;
    const p = l[l.length - 1];
    return i(p.descriptor.id);
  }
  const f = l.findIndex((p) => p.descriptor.id === c);
  f === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Could not find displaced item in set") : h(!1));
  const u = f - 1;
  if (u < 0)
    return null;
  const d = l[u];
  return i(d.descriptor.id);
}, Ge = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Ao = {
  point: Y,
  value: 0
}, Ze = {
  invisible: {},
  visible: {},
  all: []
}, La = {
  displaced: Ze,
  displacedBy: Ao,
  at: null
};
var Fa = La, ue = (e, t) => (n) => e <= n && n <= t, Po = (e) => {
  const t = ue(e.top, e.bottom), n = ue(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const s = t(r.top) || t(r.bottom), i = n(r.left) || n(r.right);
    if (s && i)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && i || l && s;
  };
}, Va = (e) => {
  const t = ue(e.top, e.bottom), n = ue(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const On = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Ro = {
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
var Ga = (e) => (t) => {
  const n = ue(t.top, t.bottom), r = ue(t.left, t.right);
  return (o) => e === On ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const ka = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : Y;
  return st(e, n);
}, Wa = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, Ua = (e, t, n) => n(t)(e), In = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const s = r ? ka(e, t) : e;
  return Wa(s, t, o) && Ua(s, n, o);
}, Ha = (e) => In({
  ...e,
  isVisibleThroughFrameFn: Po
}), To = (e) => In({
  ...e,
  isVisibleThroughFrameFn: Va
}), qa = (e) => In({
  ...e,
  isVisibleThroughFrameFn: Ga(e.destination.axis)
}), za = (e, t, n) => {
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
function ja(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return pe(Nn(n, r));
}
function et({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: s
}) {
  return e.reduce(function(a, c) {
    const l = ja(c, n), f = c.descriptor.id;
    if (a.all.push(f), !Ha({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const d = za(f, s, o), p = {
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
function Ya(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Pr({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = Ya(e, {
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
function Ct({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: s,
  index: i,
  forceShouldAnimate: a
}) {
  const c = Ge(e, n);
  if (i == null)
    return Pr({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((g) => g.descriptor.index === i);
  if (!l)
    return Pr({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const f = _t(e, t), u = t.indexOf(l), d = f.slice(u);
  return {
    displaced: et({
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
var Ka = ({
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
}, Xa = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, s = e ? o + 1 : o - 1, i = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, c = t ? a : a + 1;
  return s < i || s > c ? null : s;
}, Ja = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: s,
  previousImpact: i,
  viewport: a,
  afterCritical: c
}) => {
  const l = i.at;
  if (l || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot move in direction without previous impact location") : h(!1)), l.type === "REORDER") {
    const u = Xa({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: s
    });
    return u == null ? null : Ct({
      draggable: n,
      insideDestination: s,
      destination: o,
      viewport: a,
      last: i.displaced,
      displacedBy: i.displacedBy,
      index: u
    });
  }
  const f = Ka({
    isMovingForward: e,
    destination: o,
    displaced: i.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return f == null ? null : Ct({
    draggable: n,
    insideDestination: s,
    destination: o,
    viewport: a,
    last: i.displaced,
    displacedBy: i.displacedBy,
    index: f
  });
}, Qa = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Se(n, t) ? o ? Y : Ve(r.point) : o ? r.point : Y;
}, Za = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = xt(t);
  r || (process.env.NODE_ENV, h(!1));
  const o = r.draggableId, s = n[o].page.borderBox.center, i = Qa({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return J(s, i);
};
const Mo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, ec = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, An = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Rr = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ie(e.line, t.marginBox[e.end] + Mo(e, n), An(e, t.marginBox, n)), Tr = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Ie(e.line, t.marginBox[e.start] - ec(e, n), An(e, t.marginBox, n)), tc = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Ie(e.line, t.contentBox[e.start] + Mo(e, n), An(e, t.contentBox, n));
var nc = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const s = Ae(r.descriptor.id, n), i = t.page, a = r.axis;
  if (!s.length)
    return tc({
      axis: a,
      moveInto: r.page,
      isMoving: i
    });
  const {
    displaced: c,
    displacedBy: l
  } = e, f = c.all[0];
  if (f) {
    const d = n[f];
    if (Se(f, o))
      return Tr({
        axis: a,
        moveRelativeTo: d.page,
        isMoving: i
      });
    const p = Et(d.page, l.point);
    return Tr({
      axis: a,
      moveRelativeTo: p,
      isMoving: i
    });
  }
  const u = s[s.length - 1];
  if (u.descriptor.id === t.descriptor.id)
    return i.borderBox.center;
  if (Se(u.descriptor.id, o)) {
    const d = Et(u.page, Ve(o.displacedBy.point));
    return Rr({
      axis: a,
      moveRelativeTo: d,
      isMoving: i
    });
  }
  return Rr({
    axis: a,
    moveRelativeTo: u.page,
    isMoving: i
  });
}, un = (e, t) => {
  const n = e.frame;
  return n ? J(t, n.scroll.diff.displacement) : t;
};
const rc = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const s = t.page.borderBox.center, i = e.at;
  return !n || !i ? s : i.type === "REORDER" ? nc({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : Za({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var Ot = (e) => {
  const t = rc(e), n = e.droppable;
  return n ? un(n, t) : t;
}, Bo = (e, t) => {
  const n = oe(t, e.scroll.initial), r = Ve(n);
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
function Mr(e, t) {
  return e.map((n) => t[n]);
}
function oc(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var sc = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const s = Bo(t, J(t.scroll.current, o)), i = n.frame ? xn(n, J(n.frame.scroll.current, o)) : n, a = e.displaced, c = et({
    afterDragging: Mr(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: s.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = et({
    afterDragging: Mr(a.all, r),
    destination: i,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), f = {}, u = {}, d = [a, c, l];
  return a.all.forEach((g) => {
    const b = oc(g, d);
    if (b) {
      u[g] = b;
      return;
    }
    f[g] = !0;
  }), {
    ...e,
    displaced: {
      all: a.all,
      invisible: f,
      visible: u
    }
  };
}, ic = (e, t) => J(e.scroll.diff.displacement, t), Pn = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = ic(n, e), o = oe(r, t.page.borderBox.center);
  return J(t.client.borderBox.center, o);
}, $o = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: s = !1
}) => {
  const i = oe(n, e.page.borderBox.center), c = {
    target: st(e.page.borderBox, i),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return s ? qa(c) : To(c);
}, ac = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: s,
  previousPageBorderBoxCenter: i,
  previousClientSelection: a,
  afterCritical: c
}) => {
  if (!n.isEnabled)
    return null;
  const l = Ae(n.descriptor.id, r), f = Ge(t, n), u = $a({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || Ja({
    isMovingForward: e,
    isInHomeList: f,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: l,
    previousImpact: o,
    viewport: s,
    afterCritical: c
  });
  if (!u)
    return null;
  const d = Ot({
    impact: u,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if ($o({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: d,
    viewport: s.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Pn({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: s
      }),
      impact: u,
      scrollJumpRequest: null
    };
  const g = oe(d, i), b = sc({
    impact: u,
    viewport: s,
    destination: n,
    draggables: r,
    maxScrollChange: g
  });
  return {
    clientSelection: a,
    impact: b,
    scrollJumpRequest: g
  };
};
const ee = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get clipped area from droppable") : h(!1)), t;
};
var cc = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const s = n.subject.active;
  if (!s)
    return null;
  const i = n.axis, a = ue(s[i.start], s[i.end]), c = wt(r).filter((f) => f !== n).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Po(o.frame)(ee(f))).filter((f) => {
    const u = ee(f);
    return e ? s[i.crossAxisEnd] < u[i.crossAxisEnd] : u[i.crossAxisStart] < s[i.crossAxisStart];
  }).filter((f) => {
    const u = ee(f), d = ue(u[i.start], u[i.end]);
    return a(u[i.start]) || a(u[i.end]) || d(s[i.start]) || d(s[i.end]);
  }).sort((f, u) => {
    const d = ee(f)[i.crossAxisStart], p = ee(u)[i.crossAxisStart];
    return e ? d - p : p - d;
  }).filter((f, u, d) => ee(f)[i.crossAxisStart] === ee(d[0])[i.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((f) => ue(ee(f)[i.start], ee(f)[i.end])(t[i.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((f, u) => ee(f)[i.start] - ee(u)[i.start])[0] : c.sort((f, u) => {
    const d = Ir(t, Ar(ee(f))), p = Ir(t, Ar(ee(u)));
    return d !== p ? d - p : ee(f)[i.start] - ee(u)[i.start];
  })[0];
};
const Br = (e, t) => {
  const n = e.page.borderBox.center;
  return Se(e.descriptor.id, t) ? oe(n, t.displacedBy.point) : n;
}, lc = (e, t) => {
  const n = e.page.borderBox;
  return Se(e.descriptor.id, t) ? st(n, Ve(t.displacedBy.point)) : n;
};
var uc = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((i) => To({
  target: lc(i, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((i, a) => {
  const c = Qe(e, un(n, Br(i, o))), l = Qe(e, un(n, Br(a, o)));
  return c < l ? -1 : l < c ? 1 : i.descriptor.index - a.descriptor.index;
})[0] || null, it = j(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Ie(t.line, r)
  };
});
const dc = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ie(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = Ae(e.descriptor.id, n).reduce((l, f) => l + f.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Ie(r.line, c);
}, Lo = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Fo = (e, t, n) => {
  const r = e.frame;
  Ge(t, e) && (process.env.NODE_ENV !== "production" ? h(!1, "Should not add placeholder space to home list") : h(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot add placeholder size to a subject when it already has one") : h(!1));
  const o = it(e.axis, t.displaceBy).point, s = dc(e, o, n), i = {
    placeholderSize: o,
    increasedBy: s,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const f = $e({
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
  const a = s ? J(r.scroll.max, s) : r.scroll.max, c = Lo(r, a), l = $e({
    page: e.subject.page,
    withPlaceholder: i,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: l,
    frame: c
  };
}, fc = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot remove placeholder form subject when there was none") : h(!1));
  const n = e.frame;
  if (!n) {
    const i = $e({
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
  r || (process.env.NODE_ENV !== "production" ? h(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : h(!1));
  const o = Lo(n, r), s = $e({
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
var pc = ({
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
      displacedBy: Ao,
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
    }), p = Ge(r, s) ? s : Fo(s, r, o);
    return $o({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: d,
      viewport: i.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? u : null;
  }
  const c = e[s.axis.line] <= t.page.borderBox.center[s.axis.line], l = (() => {
    const u = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? u : u + 1;
  })(), f = it(s.axis, r.displaceBy);
  return Ct({
    draggable: r,
    insideDestination: n,
    destination: s,
    viewport: i,
    displacedBy: f,
    last: Ze,
    index: l
  });
}, hc = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: s,
  viewport: i,
  afterCritical: a
}) => {
  const c = cc({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: s,
    viewport: i
  });
  if (!c)
    return null;
  const l = Ae(c.descriptor.id, o), f = uc({
    pageBorderBoxCenter: t,
    viewport: i,
    destination: c,
    insideDestination: l,
    afterCritical: a
  }), u = pc({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: n,
    draggables: o,
    moveRelativeTo: f,
    insideDestination: l,
    viewport: i,
    afterCritical: a
  });
  if (!u)
    return null;
  const d = Ot({
    impact: u,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: Pn({
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
const mc = (e, t) => {
  const n = se(e);
  return n ? t[n] : null;
};
var gc = ({
  state: e,
  type: t
}) => {
  const n = mc(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], s = n || o, i = s.axis.direction, a = i === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || i === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: u,
    droppables: d
  } = e.dimensions;
  return a ? ac({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: l,
    destination: s,
    draggables: u,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : hc({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: l,
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
function Vo(e) {
  const t = ue(e.top, e.bottom), n = ue(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function vc(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function bc({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((s) => {
    const i = s.axis, a = Ie(s.axis.line, e.center[i.line], s.page.borderBox.center[i.crossAxisLine]);
    return {
      id: s.descriptor.id,
      distance: Qe(r, a)
    };
  }).sort((s, i) => i.distance - s.distance);
  return o[0] ? o[0].id : null;
}
function yc({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = wt(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const s = o.subject.active;
    if (!s || !vc(e, s))
      return !1;
    if (Vo(s)(e.center))
      return !0;
    const i = o.axis, a = s.center[i.crossAxisLine], c = e[i.crossAxisStart], l = e[i.crossAxisEnd], f = ue(s[i.crossAxisStart], s[i.crossAxisEnd]), u = f(c), d = f(l);
    return !u && !d ? !0 : u ? c < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : bc({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Go = (e, t) => pe(st(e, t));
var Ec = (e, t) => {
  const n = e.frame;
  return n ? Go(t, n.scroll.diff.value) : t;
};
function ko({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Dc({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Sc = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = n.axis, c = it(n.axis, t.displaceBy), l = c.value, f = e[a.start], u = e[a.end], p = _t(t, r).find((b) => {
    const m = b.descriptor.id, C = b.page.borderBox.center[a.line], D = Se(m, i), y = ko({
      displaced: o,
      id: m
    });
    return D ? y ? u <= C : f < C - l : y ? u <= C + l : f < C;
  }) || null, g = Dc({
    draggable: t,
    closest: p,
    inHomeList: Ge(t, n)
  });
  return Ct({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: s,
    last: o,
    displacedBy: c,
    index: g
  });
};
const Cc = 4;
var Nc = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: s
}) => {
  if (!r.isCombineEnabled)
    return null;
  const i = r.axis, a = it(r.axis, e.displaceBy), c = a.value, l = t[i.start], f = t[i.end], d = _t(e, o).find((g) => {
    const b = g.descriptor.id, m = g.page.borderBox, D = m[i.size] / Cc, y = Se(b, s), E = ko({
      displaced: n.displaced,
      id: b
    });
    return y ? E ? f > m[i.start] + D && f < m[i.end] - D : l > m[i.start] - c + D && l < m[i.end] - c - D : E ? f > m[i.start] + c + D && f < m[i.end] + c - D : l > m[i.start] + D && l < m[i.end] - D;
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
}, Wo = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = Go(t.page.borderBox, e), c = yc({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!c)
    return Fa;
  const l = r[c], f = Ae(l.descriptor.id, n), u = Ec(l, a);
  return Nc({
    pageBorderBoxWithDroppableScroll: u,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: f,
    afterCritical: i
  }) || Sc({
    pageBorderBoxWithDroppableScroll: u,
    draggable: t,
    destination: l,
    insideDestination: f,
    last: o.displaced,
    viewport: s,
    afterCritical: i
  });
}, Rn = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const wc = ({
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
  const i = fc(s);
  return Rn(n, i);
};
var xc = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const s = wc({
    previousImpact: r,
    impact: o,
    droppables: n
  }), i = se(o);
  if (!i)
    return s;
  const a = n[i];
  if (Ge(e, a) || a.subject.withPlaceholder)
    return s;
  const c = Fo(a, e, t);
  return Rn(s, c);
}, Ye = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: s
}) => {
  const i = r || e.viewport, a = n || e.dimensions, c = t || e.current.client.selection, l = oe(c, e.initial.client.selection), f = {
    offset: l,
    selection: c,
    borderBoxCenter: J(e.initial.client.borderBoxCenter, l)
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
  const p = a.draggables[e.critical.draggable.id], g = o || Wo({
    pageOffset: u.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: i,
    afterCritical: e.afterCritical
  }), b = xc({
    draggable: p,
    impact: g,
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
    impact: g,
    viewport: i,
    scrollJumpRequest: s || null,
    forceShouldAnimate: s ? !1 : null
  };
};
function _c(e, t) {
  return e.map((n) => t[n]);
}
var Uo = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const s = e.displaced, i = _c(s.all, n), a = et({
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
}, Ho = ({
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
  return Pn({
    pageBorderBoxCenter: i,
    draggable: t,
    viewport: o
  });
}, qo = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, h(!1));
  const r = e.impact, o = n || e.viewport, s = t || e.dimensions, {
    draggables: i,
    droppables: a
  } = s, c = i[e.critical.draggable.id], l = se(r);
  l || (process.env.NODE_ENV !== "production" ? h(!1, "Must be over a destination in SNAP movement mode") : h(!1));
  const f = a[l], u = Uo({
    impact: r,
    viewport: o,
    destination: f,
    draggables: i
  }), d = Ho({
    impact: u,
    draggable: c,
    droppable: f,
    draggables: i,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Ye({
    impact: u,
    clientSelection: d,
    state: e,
    dimensions: s,
    viewport: o
  });
}, Oc = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), zo = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = it(t.axis, e.displaceBy), s = Ae(t.descriptor.id, n), i = s.indexOf(e);
  i === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Expected draggable to be inside home list") : h(!1));
  const a = s.slice(i + 1), c = a.reduce((d, p) => (d[p.descriptor.id] = !0, d), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: et({
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
        destination: Oc(e.descriptor)
      }
    },
    afterCritical: l
  };
}, Ic = (e, t) => ({
  draggables: e.draggables,
  droppables: Rn(e.droppables, t)
});
const at = (e) => {
  process.env.NODE_ENV;
}, ct = (e) => {
  process.env.NODE_ENV;
};
var Ac = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = Et(e.client, t), o = Dt(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, Pc = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Expected Droppable to have a frame") : h(!1)), t;
}, Rc = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const s = o.descriptor.droppableId, i = t[s], c = Pc(i).scroll.diff.value, l = J(r, c);
    return Ac({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Tc = ({
  state: e,
  published: t
}) => {
  at();
  const n = t.modified.map((C) => {
    const D = e.dimensions.droppables[C.droppableId];
    return xn(D, C.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Oo(n)
  }, o = Io(Rc({
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
  }, a = se(e.impact), c = a ? i.droppables[a] : null, l = i.draggables[e.critical.draggable.id], f = i.droppables[e.critical.droppable.id], {
    impact: u,
    afterCritical: d
  } = zo({
    draggable: l,
    home: f,
    draggables: s,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : u, g = Wo({
    pageOffset: e.current.page.offset,
    draggable: i.draggables[e.critical.draggable.id],
    draggables: i.draggables,
    droppables: i.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: d
  });
  ct();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: g,
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
const dn = (e) => e.movementMode === "SNAP", kt = (e, t, n) => {
  const r = Ic(e.dimensions, t);
  return !dn(e) || n ? Ye({
    state: e,
    dimensions: r
  }) : qo({
    state: e,
    dimensions: r
  });
};
function Wt(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const $r = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Mc = (e = $r, t) => {
  if (t.type === "FLUSH")
    return {
      ...$r,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "INITIAL_PUBLISH must come after a IDLE phase") : h(!1));
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: s,
      movementMode: i
    } = t.payload, a = s.draggables[n.draggable.id], c = s.droppables[n.droppable.id], l = {
      selection: r,
      borderBoxCenter: a.client.borderBox.center,
      offset: Y
    }, f = {
      client: l,
      page: {
        selection: J(l.selection, o.scroll.initial),
        borderBoxCenter: J(l.selection, o.scroll.initial),
        offset: J(l.selection, o.scroll.diff.value)
      }
    }, u = wt(s.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: p
    } = zo({
      draggable: a,
      home: c,
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? h(!1, `Collection cannot start from phase ${e.phase}`) : h(!1)), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : h(!1)), Tc({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} not permitted in phase ${e.phase}`) : h(!1));
    const {
      client: n
    } = t.payload;
    return De(n, e.current.client.selection) ? e : Ye({
      state: e,
      clientSelection: n,
      impact: dn(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Wt(e);
    Oe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} not permitted in phase ${e.phase}`) : h(!1));
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const s = xn(o, r);
    return kt(e, s, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Attempting to move in an unsupported phase ${e.phase}`) : h(!1));
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : h(!1)), o.isEnabled === r && (process.env.NODE_ENV !== "production" ? h(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(o.isEnabled)}`) : h(!1));
    const s = {
      ...o,
      isEnabled: r
    };
    return kt(e, s, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Attempting to move in an unsupported phase ${e.phase}`) : h(!1));
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : h(!1)), o.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? h(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(o.isCombineEnabled)}`) : h(!1));
    const s = {
      ...o,
      isCombineEnabled: r
    };
    return kt(e, s, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot move by window in phase ${e.phase}`) : h(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? h(!1, "Window scrolling is currently not supported for fixed lists") : h(!1));
    const n = t.payload.newScroll;
    if (De(e.viewport.scroll.current, n))
      return Wt(e);
    const r = Bo(e.viewport, n);
    return dn(e) ? qo({
      state: e,
      viewport: r
    }) : Ye({
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} received while not in DRAGGING phase`) : h(!1));
    const n = gc({
      state: e,
      type: t.type
    });
    return n ? Ye({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? h(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : h(!1)), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot animate drop from phase ${e.phase}`) : h(!1)), {
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
const Bc = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), $c = (e) => ({
  type: "LIFT",
  payload: e
}), Lc = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Fc = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Vc = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Gc = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), kc = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Wc = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), jo = (e) => ({
  type: "MOVE",
  payload: e
}), Uc = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Hc = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), qc = () => ({
  type: "MOVE_UP",
  payload: null
}), zc = () => ({
  type: "MOVE_DOWN",
  payload: null
}), jc = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Yc = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Tn = () => ({
  type: "FLUSH",
  payload: null
}), Kc = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Mn = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Yo = (e) => ({
  type: "DROP",
  payload: e
}), Xc = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Ko = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Jc(e) {
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
function Qc(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ae(e.droppable.id, t.draggables);
    Jc(n);
  }
}
var Zc = (e) => ({
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
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(Mn({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Unexpected phase to start a drag") : h(!1)), n(Tn()), n(Bc({
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
  Qc(u, d), n(Lc({
    critical: u,
    dimensions: d,
    clientSelection: i,
    movementMode: a,
    viewport: p
  }));
}, el = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const Bn = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, tt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Xo = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, xe = `${Xo.outOfTheWay}s ${Bn.outOfTheWay}`, Ke = {
  fluid: `opacity ${xe}`,
  snap: `transform ${xe}, opacity ${xe}`,
  drop: (e) => {
    const t = `${e}s ${Bn.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${xe}`,
  placeholder: `height ${xe}, width ${xe}, margin ${xe}`
}, Lr = (e) => De(e, Y) ? void 0 : `translate(${e.x}px, ${e.y}px)`, fn = {
  moveTo: Lr,
  drop: (e, t) => {
    const n = Lr(e);
    if (n)
      return t ? `${n} scale(${tt.scale.drop})` : n;
  }
}, {
  minDropTime: pn,
  maxDropTime: Jo
} = Xo, tl = Jo - pn, Fr = 1500, nl = 0.6;
var rl = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = Qe(e, t);
  if (r <= 0)
    return pn;
  if (r >= Fr)
    return Jo;
  const o = r / Fr, s = pn + tl * o, i = n === "CANCEL" ? s * nl : s;
  return Number(i.toFixed(2));
}, ol = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: s,
    droppables: i
  } = n, a = se(e), c = a ? i[a] : null, l = i[t.descriptor.droppableId], f = Ho({
    impact: e,
    draggable: t,
    draggables: s,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return oe(f, t.client.borderBox.center);
}, sl = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: s
}) => !n.at || t !== "DROP" ? {
  impact: Uo({
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
const il = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), s = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Xc({
      reason: s
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? h(!1, "A DROP action occurred while DROP_PENDING and still waiting") : h(!1)), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot drop in phase: ${o.phase}`) : h(!1));
  const a = o.critical, c = o.dimensions, l = c.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: u
  } = sl({
    reason: s,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = u ? _n(f) : null, p = u ? xt(f) : null, g = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, b = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: g,
    reason: s,
    mode: o.movementMode,
    destination: d,
    combine: p
  }, m = ol({
    impact: f,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), C = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: b,
    impact: f
  };
  if (!(!De(o.current.client.offset, m) || !!b.combine)) {
    t(Mn({
      completed: C
    }));
    return;
  }
  const y = rl({
    current: o.current.client.offset,
    destination: m,
    reason: s
  });
  t(Kc({
    newHomeClientOffset: m,
    dropDuration: y,
    completed: C
  }));
};
var al = il, Qo = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function cl(e) {
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
function ll({
  onWindowScroll: e
}) {
  function t() {
    e(Qo());
  }
  const n = Xe(t), r = cl(n);
  let o = Ee;
  function s() {
    return o !== Ee;
  }
  function i() {
    s() && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start scroll listener when already active") : h(!1)), o = le(window, [r]);
  }
  function a() {
    s() || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop scroll listener when not active") : h(!1)), n.cancel(), o(), o = Ee;
  }
  return {
    start: i,
    stop: a,
    isActive: s
  };
}
const ul = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", dl = (e) => {
  const t = ll({
    onWindowScroll: (n) => {
      e.dispatch(Uc({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && ul(r) && t.stop(), n(r);
  };
};
var fl = dl, pl = (e) => {
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
}, hl = () => {
  const e = [], t = (o) => {
    const s = e.findIndex((a) => a.timerId === o);
    s === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Could not find timer") : h(!1));
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
const ml = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, gl = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, vl = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, He = (e, t) => {
  at(), t(), ct();
}, mt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Ut(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = pl(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var bl = (e, t) => {
  const n = hl();
  let r = null;
  const o = (u, d) => {
    r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : h(!1)), He("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: u,
        mode: d
      });
    });
  }, s = (u, d) => {
    r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h(!1)), He("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(mt(u, d));
    });
  }, i = (u, d) => {
    r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h(!1));
    const p = mt(u, d);
    r = {
      mode: d,
      lastCritical: u,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      He("onDragStart", () => Ut(e().onDragStart, p, t, bt.onDragStart));
    });
  }, a = (u, d) => {
    const p = _n(d), g = xt(d);
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragMove when onDragStart has not been called") : h(!1));
    const b = !vl(u, r.lastCritical);
    b && (r.lastCritical = u);
    const m = !ml(r.lastLocation, p);
    m && (r.lastLocation = p);
    const C = !gl(r.lastCombine, g);
    if (C && (r.lastCombine = g), !b && !m && !C)
      return;
    const D = {
      ...mt(u, r.mode),
      combine: g,
      destination: p
    };
    n.add(() => {
      He("onDragUpdate", () => Ut(e().onDragUpdate, D, t, bt.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Can only flush responders while dragging") : h(!1)), n.flush();
  }, l = (u) => {
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : h(!1)), r = null, He("onDragEnd", () => Ut(e().onDragEnd, u, t, bt.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: s,
    start: i,
    update: a,
    flush: c,
    drop: l,
    abort: () => {
      if (!r)
        return;
      const u = {
        ...mt(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(u);
    }
  };
}, yl = (e, t) => {
  const n = bl(e, t);
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
const El = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot finish a drop animating when no drop is occurring") : h(!1)), e.dispatch(Mn({
    completed: r.completed
  }));
};
var Dl = El;
const Sl = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Ko());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = le(window, [i]);
    });
  };
};
var Cl = Sl, Nl = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, wl = (e) => {
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
const xl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var _l = (e) => (t) => (n) => (r) => {
  if (xl(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : h(!1)), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const Ol = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Yo({
    reason: r.reason
  })));
};
var Il = Ol;
const Al = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Is;
var Pl = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: s
}) => As(Mc, Al(Ps(el(n), Nl(e), Zc(e), al, Dl, Cl, Il, _l(s), fl, wl(t), yl(r, o))));
const Ht = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Rl({
  registry: e,
  callbacks: t
}) {
  let n = Ht(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, at();
      const {
        additions: c,
        removals: l,
        modified: f
      } = n, u = Object.keys(c).map((g) => e.draggable.getById(g).getDimension(Y)).sort((g, b) => g.descriptor.index - b.descriptor.index), d = Object.keys(f).map((g) => {
        const m = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
          scroll: m
        };
      }), p = {
        additions: u,
        removals: Object.keys(l),
        modified: d
      };
      n = Ht(), ct(), t.publish(p);
    }));
  };
  return {
    add: (c) => {
      const l = c.descriptor.id;
      n.additions[l] = c, n.modified[c.descriptor.droppableId] = !0, n.removals[l] && delete n.removals[l], o();
    },
    remove: (c) => {
      const l = c.descriptor;
      n.removals[l.id] = !0, n.modified[l.droppableId] = !0, n.additions[l.id] && delete n.additions[l.id], o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), r = null, n = Ht());
    }
  };
}
var Zo = ({
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
}, es = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find document.documentElement") : h(!1)), e;
}, ts = () => {
  const e = es();
  return Zo({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Tl = () => {
  const e = Qo(), t = ts(), n = e.y, r = e.x, o = es(), s = o.clientWidth, i = o.clientHeight, a = r + s, c = n + i;
  return {
    frame: pe({
      top: n,
      left: r,
      right: a,
      bottom: c
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
}, Ml = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  at();
  const r = Tl(), o = r.scroll.current, s = e.droppable, i = n.droppable.getAllByType(s.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: Io(a),
    droppables: Oo(i)
  };
  return ct(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function Vr(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && U(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Bl = (e, t) => {
  let n = null;
  const r = Rl({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, p) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : h(!1)), n && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: p
    });
  }, s = (d, p) => {
    n && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : h(!1)), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: p
    }));
  }, i = (d, p) => {
    n && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : h(!1)), t.updateDroppableScroll({
      id: d,
      newScroll: p
    }));
  }, a = (d, p) => {
    n && e.droppable.getById(d).callbacks.scroll(p);
  }, c = () => {
    if (!n)
      return;
    r.stop();
    const d = n.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, l = (d) => {
    n || (process.env.NODE_ENV !== "production" ? h(!1, "Should only be subscribed when a collection is occurring") : h(!1));
    const p = n.critical.draggable;
    d.type === "ADDITION" && Vr(e, p, d.value) && r.add(d.value), d.type === "REMOVAL" && Vr(e, p, d.value) && r.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: s,
    scrollDroppable: a,
    updateDroppableScroll: i,
    startPublishing: (d) => {
      n && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start capturing critical dimensions as there is already a collection") : h(!1));
      const p = e.draggable.getById(d.draggableId), g = e.droppable.getById(p.descriptor.droppableId), b = {
        draggable: p.descriptor,
        droppable: g.descriptor
      }, m = e.subscribe(l);
      return n = {
        critical: b,
        unsubscribe: m
      }, Ml({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, ns = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", $l = (e) => {
  window.scrollBy(e.x, e.y);
};
const Ll = j((e) => wt(e).filter((t) => !(!t.isEnabled || !t.frame))), Fl = (e, t) => Ll(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? h(!1, "Invalid result") : h(!1)), Vo(r.frame.pageMarginBox)(e))) || null;
var Vl = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return Fl(e, n);
};
const nt = {
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
var Gl = (e, t, n = () => nt) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, s = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: s
  };
}, rs = ({
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
}, $n = 1, kl = (e, t, n = () => nt) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return $n;
  const s = 1 - rs({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), i = r.maxPixelScroll * r.ease(s);
  return Math.ceil(i);
}, Wl = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, s = r.durationDampening.stopDampeningAt, i = t, a = s, l = Date.now() - i;
  if (l >= s)
    return e;
  if (l < o)
    return $n;
  const f = rs({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), u = e * r.ease(f);
  return Math.ceil(u);
}, Gr = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const s = kl(e, t, o);
  return s === 0 ? 0 : r ? Math.max(Wl(s, n, o), $n) : s;
}, kr = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = Gl(e, r, s);
  return t[r.end] < t[r.start] ? Gr({
    distanceToEdge: t[r.end],
    thresholds: i,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }) : -1 * Gr({
    distanceToEdge: t[r.start],
    thresholds: i,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
}, Ul = ({
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
const Hl = _o((e) => e === 0 ? 0 : e);
var os = ({
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
  }, a = kr({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: On,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), c = kr({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: Ro,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), l = Hl({
    x: c,
    y: a
  });
  if (De(l, Y))
    return null;
  const f = Ul({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return f ? De(f, Y) ? null : f : null;
};
const ql = _o((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Ln = (() => {
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
})(), ss = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = ql(n), s = Ln({
    max: r,
    current: t,
    change: o
  });
  return !s || o.x !== 0 && s.x === 0 || o.y !== 0 && s.y === 0;
}, Fn = (e, t) => ss({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), zl = (e, t) => {
  if (!Fn(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Ln({
    current: r,
    max: n,
    change: t
  });
}, Vn = (e, t) => {
  const n = e.frame;
  return n ? ss({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, jl = (e, t) => {
  const n = e.frame;
  return !n || !Vn(e, t) ? null : Ln({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var Yl = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = os({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return i && Fn(e, i) ? i : null;
}, Kl = ({
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
  const a = os({
    dragStartTime: r,
    container: i.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return a && Vn(e, a) ? a : null;
}, Wr = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const u = e.viewport, d = Yl({
      dragStartTime: t,
      viewport: u,
      subject: c,
      center: i,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: s
    });
    if (d) {
      r(d);
      return;
    }
  }
  const l = Vl({
    center: i,
    destination: se(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const f = Kl({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: i,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: s
  });
  f && o(l.descriptor.id, f);
}, Xl = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => nt
}) => {
  const r = Xe(e), o = Xe(t);
  let s = null;
  const i = (l) => {
    s || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fluid scroll if not dragging") : h(!1));
    const {
      shouldUseTimeDampening: f,
      dragStartTime: u
    } = s;
    Wr({
      state: l,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: u,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (l) => {
      at(), s && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start auto scrolling when already started") : h(!1));
      const f = Date.now();
      let u = !1;
      const d = () => {
        u = !0;
      };
      Wr({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: n
      }), s = {
        dragStartTime: f,
        shouldUseTimeDampening: u
      }, ct(), u && i(l);
    },
    stop: () => {
      s && (r.cancel(), o.cancel(), s = null);
    },
    scroll: i
  };
}, Jl = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (a, c) => {
    const l = J(a.current.client.selection, c);
    e({
      client: l
    });
  }, o = (a, c) => {
    if (!Vn(a, c))
      return c;
    const l = jl(a, c);
    if (!l)
      return t(a.descriptor.id, c), null;
    const f = oe(c, l);
    return t(a.descriptor.id, f), oe(c, f);
  }, s = (a, c, l) => {
    if (!a || !Fn(c, l))
      return l;
    const f = zl(c, l);
    if (!f)
      return n(l), null;
    const u = oe(l, f);
    return n(u), oe(l, u);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const l = se(a.impact);
    l || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot perform a jump scroll when there is no destination") : h(!1));
    const f = o(a.dimensions.droppables[l], c);
    if (!f)
      return;
    const u = a.viewport, d = s(a.isWindowScrollAllowed, u, f);
    d && r(a, d);
  };
}, Ql = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = Xl({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), s = Jl({
    move: n,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (c) => {
      if (!(r().disabled || c.phase !== "DRAGGING")) {
        if (c.movementMode === "FLUID") {
          o.scroll(c);
          return;
        }
        c.scrollJumpRequest && s(c);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const Le = "data-rfd", Fe = (() => {
  const e = `${Le}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), hn = (() => {
  const e = `${Le}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Zl = (() => {
  const e = `${Le}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Ur = {
  contextId: `${Le}-scroll-container-context-id`
}, eu = (e) => (t) => `[${t}="${e}"]`, qe = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), tu = "pointer-events: none;";
var nu = (e) => {
  const t = eu(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Fe.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: tu,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${Ke.outOfTheWay};
    `;
    return {
      selector: t(hn.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(Zl.contextId),
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
    always: qe(i, "always"),
    resting: qe(i, "resting"),
    dragging: qe(i, "dragging"),
    dropAnimating: qe(i, "dropAnimating"),
    userCancel: qe(i, "userCancel")
  };
};
const ru = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? N.useLayoutEffect : N.useEffect;
var ie = ru;
const qt = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find the head to append a style to") : h(!1)), e;
}, Hr = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function ou(e, t) {
  const n = L(() => nu(e), [e]), r = N.useRef(null), o = N.useRef(null), s = P(j((u) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot set dynamic style element if it is not set") : h(!1)), d.textContent = u;
  }), []), i = P((u) => {
    const d = r.current;
    d || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot set dynamic style element if it is not set") : h(!1)), d.textContent = u;
  }, []);
  ie(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? h(!1, "style elements already mounted") : h(!1));
    const u = Hr(t), d = Hr(t);
    return r.current = u, o.current = d, u.setAttribute(`${Le}-always`, e), d.setAttribute(`${Le}-dynamic`, e), qt().appendChild(u), qt().appendChild(d), i(n.always), s(n.resting), () => {
      const p = (g) => {
        const b = g.current;
        b || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot unmount ref as it is not set") : h(!1)), qt().removeChild(b), g.current = null;
      };
      p(r), p(o);
    };
  }, [t, i, s, n.always, n.resting, e]);
  const a = P(() => s(n.dragging), [s, n.dragging]), c = P((u) => {
    if (u === "DROP") {
      s(n.dropAnimating);
      return;
    }
    s(n.userCancel);
  }, [s, n.dropAnimating, n.userCancel]), l = P(() => {
    o.current && s(n.resting);
  }, [s, n.resting]);
  return L(() => ({
    dragging: a,
    dropping: c,
    resting: l
  }), [a, c, l]);
}
function is(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var as = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function lt(e) {
  return e instanceof as(e).HTMLElement;
}
function cs(e, t) {
  const n = `[${Fe.contextId}="${e}"]`, r = is(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && U(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((s) => s.getAttribute(Fe.draggableId) === t);
  return o ? lt(o) ? o : (process.env.NODE_ENV !== "production" && U("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && U(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function su(e) {
  const t = N.useRef({}), n = N.useRef(null), r = N.useRef(null), o = N.useRef(!1), s = P(function(d, p) {
    const g = {
      id: d,
      focus: p
    };
    return t.current[d] = g, function() {
      const m = t.current;
      m[d] !== g && delete m[d];
    };
  }, []), i = P(function(d) {
    const p = cs(e, d);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = P(function(d, p) {
    n.current === d && (n.current = p);
  }, []), c = P(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const d = n.current;
      d && i(d);
    }));
  }, [i]), l = P(function(d) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Fe.draggableId) === d && (n.current = d);
  }, []);
  return ie(() => (o.current = !0, function() {
    o.current = !1;
    const d = r.current;
    d && cancelAnimationFrame(d);
  }), []), L(() => ({
    register: s,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: a
  }), [s, l, c, a]);
}
function iu() {
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
    return d || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find draggable entry with id [${u}]`) : h(!1)), d;
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
  function c(u) {
    const d = a(u);
    return d || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find droppable entry with id [${u}]`) : h(!1)), d;
  }
  const l = {
    register: (u) => {
      e.droppables[u.descriptor.id] = u;
    },
    unregister: (u) => {
      const d = a(u.descriptor.id);
      d && u.uniqueId === d.uniqueId && delete e.droppables[u.descriptor.id];
    },
    getById: c,
    findById: a,
    exists: (u) => !!a(u),
    getAllByType: (u) => Object.values(e.droppables).filter((d) => d.descriptor.type === u)
  };
  function f() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: i,
    droppable: l,
    subscribe: n,
    clean: f
  };
}
function au() {
  const e = L(iu, []);
  return N.useEffect(() => function() {
    O.version.startsWith("16") || O.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Gn = O.createContext(null), rt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find document.body") : h(!1)), e;
};
const cu = {
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
var lu = cu;
const uu = (e) => `rfd-announcement-${e}`;
function du(e) {
  const t = L(() => uu(e), [e]), n = N.useRef(null);
  return N.useEffect(function() {
    const s = document.createElement("div");
    return n.current = s, s.id = t, s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true"), Be(s.style, lu), rt().appendChild(s), function() {
      setTimeout(function() {
        const c = rt();
        c.contains(s) && c.removeChild(s), s === n.current && (n.current = null);
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
let fu = 0;
const ls = {
  separator: "::"
};
function pu(e, t = ls) {
  return L(() => `${e}${t.separator}${fu++}`, [t.separator, e]);
}
function hu(e, t = ls) {
  const n = O.useId();
  return L(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var kn = "useId" in O ? hu : pu;
function mu({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function gu({
  contextId: e,
  text: t
}) {
  const n = kn("hidden-text", {
    separator: "-"
  }), r = L(() => mu({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return N.useEffect(function() {
    const s = document.createElement("div");
    return s.id = r, s.textContent = t, s.style.display = "none", rt().appendChild(s), function() {
      const a = rt();
      a.contains(s) && a.removeChild(s);
    };
  }, [r, t]), r;
}
var It = O.createContext(null), vu = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const bu = /(\d+)\.(\d+)\.(\d+)/, qr = (e) => {
  const t = bu.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? h(!1, `Unable to parse React version ${e}`) : h(!1));
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, yu = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Eu = (e, t) => {
  const n = qr(e), r = qr(t);
  yu(n, r) || process.env.NODE_ENV !== "production" && U(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const zt = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Du = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && U(`
      No <!doctype html> found.

      ${zt}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && U(`
      Unexpected <!doctype> found: (${t.name})

      ${zt}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && U(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${zt}
    `);
};
function Wn(e) {
  process.env.NODE_ENV !== "production" && e();
}
function ut(e, t) {
  Wn(() => {
    N.useEffect(() => {
      try {
        e();
      } catch (n) {
        ln(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function Su() {
  ut(() => {
    Eu(vu.react, O.version), Du(document);
  }, []);
}
function Un(e) {
  const t = N.useRef(e);
  return N.useEffect(() => {
    t.current = e;
  }), t;
}
function Cu() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(i) {
    return i === e;
  }
  function r(i) {
    e && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot claim lock as it is already claimed") : h(!1));
    const a = {
      abandon: i
    };
    return e = a, a;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot release lock when there is no lock") : h(!1)), e = null;
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
function ot(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Nu = 9, wu = 13, Hn = 27, us = 32, xu = 33, _u = 34, Ou = 35, Iu = 36, Au = 37, Pu = 38, Ru = 39, Tu = 40, Mu = {
  [wu]: !0,
  [Nu]: !0
};
var ds = (e) => {
  Mu[e.keyCode] && e.preventDefault();
};
const Bu = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var At = Bu;
const fs = 0, zr = 5;
function $u(e, t) {
  return Math.abs(t.x - e.x) >= zr || Math.abs(t.y - e.y) >= zr;
}
const jr = {
  type: "IDLE"
};
function Lu({
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
      if (s !== fs)
        return;
      const c = {
        x: i,
        y: a
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(c);
        return;
      }
      l.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot be IDLE") : h(!1));
      const f = l.point;
      if (!$u(f, c))
        return;
      o.preventDefault();
      const u = l.actions.fluidLift(c);
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
      if (o.keyCode === Hn) {
        o.preventDefault(), e();
        return;
      }
      ds(o);
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
      if (s.type === "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Unexpected phase") : h(!1)), s.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: At,
    fn: e
  }];
}
function Fu(e) {
  const t = N.useRef(jr), n = N.useRef(Ee), r = L(() => ({
    eventName: "mousedown",
    fn: function(u) {
      if (u.defaultPrevented || u.button !== fs || u.ctrlKey || u.metaKey || u.shiftKey || u.altKey)
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
      const g = {
        x: u.clientX,
        y: u.clientY
      };
      n.current(), l(p, g);
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
    n.current = le(window, [o, r], u);
  }, [o, r]), i = P(() => {
    t.current.type !== "IDLE" && (t.current = jr, n.current(), s());
  }, [s]), a = P(() => {
    const f = t.current;
    i(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [i]), c = P(function() {
    const u = {
      capture: !0,
      passive: !1
    }, d = Lu({
      cancel: a,
      completed: i,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = le(window, d, u);
  }, [a, i]), l = P(function(u, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected to move from IDLE to PENDING drag") : h(!1)), t.current = {
      type: "PENDING",
      point: d,
      actions: u
    }, c();
  }, [c]);
  ie(function() {
    return s(), function() {
      n.current();
    };
  }, [s]);
}
function Vu() {
}
const Gu = {
  [_u]: !0,
  [xu]: !0,
  [Iu]: !0,
  [Ou]: !0
};
function ku(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Hn) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === us) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Tu) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Pu) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Ru) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Au) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Gu[o.keyCode]) {
        o.preventDefault();
        return;
      }
      ds(o);
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
    eventName: At,
    fn: n
  }];
}
function Wu(e) {
  const t = N.useRef(Vu), n = L(() => ({
    eventName: "keydown",
    fn: function(s) {
      if (s.defaultPrevented || s.keyCode !== us)
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
      let c = !0;
      const l = a.snapLift();
      t.current();
      function f() {
        c || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop capturing a keyboard drag when not capturing") : h(!1)), c = !1, t.current(), r();
      }
      t.current = le(window, ku(l, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = P(function() {
    const s = {
      passive: !1,
      capture: !0
    };
    t.current = le(window, [n], s);
  }, [n]);
  ie(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const jt = {
  type: "IDLE"
}, Uu = 120, Hu = 0.15;
function qu({
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
      n.keyCode === Hn && n.preventDefault(), e();
    }
  }, {
    eventName: At,
    fn: e
  }];
}
function zu({
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
      o.type === "IDLE" && (process.env.NODE_ENV, h(!1));
      const s = r.touches[0];
      if (!s || !(s.force >= Hu))
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
    eventName: At,
    fn: e
  }];
}
function ju(e) {
  const t = N.useRef(jt), n = N.useRef(Ee), r = P(function() {
    return t.current;
  }, []), o = P(function(p) {
    t.current = p;
  }, []), s = L(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const g = e.findClosestDraggableId(p);
      if (!g)
        return;
      const b = e.tryGetLock(g, a, {
        sourceEvent: p
      });
      if (!b)
        return;
      const m = p.touches[0], {
        clientX: C,
        clientY: D
      } = m, y = {
        x: C,
        y: D
      };
      n.current(), u(b, y);
    }
  }), [e]), i = P(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = le(window, [s], p);
  }, [s]), a = P(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(jt), n.current(), i());
  }, [i, o]), c = P(() => {
    const d = t.current;
    a(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [a]), l = P(function() {
    const p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: c,
      completed: a,
      getPhase: r
    }, b = le(window, zu(g), p), m = le(window, qu(g), p);
    n.current = function() {
      b(), m();
    };
  }, [c, r, a]), f = P(function() {
    const p = r();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? h(!1, `Cannot start dragging from phase ${p.type}`) : h(!1));
    const g = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [r, o]), u = P(function(p, g) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected to move from IDLE to PENDING drag") : h(!1));
    const b = setTimeout(f, Uu);
    o({
      type: "PENDING",
      point: g,
      actions: p,
      longPressTimerId: b
    }), l();
  }, [l, r, o, f]);
  ie(function() {
    return i(), function() {
      n.current();
      const g = r();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(jt));
    };
  }, [r, i, o]), ie(function() {
    return le(window, [{
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
function Yu(e) {
  Wn(() => {
    const t = Un(e);
    ut(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot change the amount of sensor hooks after mounting") : h(!1));
    });
  });
}
const Ku = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function ps(e, t) {
  if (t == null)
    return !1;
  if (Ku.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : ps(e, t.parentElement);
}
function Xu(e, t) {
  const n = t.target;
  return lt(n) ? ps(e, n) : !1;
}
var Ju = (e) => pe(e.getBoundingClientRect()).center;
function Qu(e) {
  return e instanceof as(e).Element;
}
const Zu = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function hs(e, t) {
  return e == null ? null : e[Zu](t) ? e : hs(e.parentElement, t);
}
function ed(e, t) {
  return e.closest ? e.closest(t) : hs(e, t);
}
function td(e) {
  return `[${Fe.contextId}="${e}"]`;
}
function nd(e, t) {
  const n = t.target;
  if (!Qu(n))
    return process.env.NODE_ENV !== "production" && U("event.target must be a Element"), null;
  const r = td(e), o = ed(n, r);
  return o ? lt(o) ? o : (process.env.NODE_ENV !== "production" && U("drag handle must be a HTMLElement"), null) : null;
}
function rd(e, t) {
  const n = nd(e, t);
  return n ? n.getAttribute(Fe.draggableId) : null;
}
function od(e, t) {
  const n = `[${hn.contextId}="${e}"]`, o = is(document, n).find((s) => s.getAttribute(hn.id) === t);
  return o ? lt(o) ? o : (process.env.NODE_ENV !== "production" && U("Draggable element is not a HTMLElement"), null) : null;
}
function sd(e) {
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
function ms({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !ns(t.getState(), r)) : (process.env.NODE_ENV !== "production" && U(`Unable to find draggable with id: ${r}`), !1);
}
function id({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: s,
  sourceEvent: i
}) {
  if (!ms({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = od(t, c.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && U(`Unable to find draggable element with id: ${o}`), null;
  if (i && !c.options.canDragInteractiveElements && Xu(l, i))
    return null;
  const f = e.claim(s || Ee);
  let u = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function g(v, S) {
    gt({
      expected: v,
      phase: u,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(S());
  }
  const b = g.bind(null, "DRAGGING");
  function m(v) {
    function S() {
      e.release(), u = "COMPLETED";
    }
    u !== "PRE_DRAG" && (S(), process.env.NODE_ENV !== "production" ? h(!1, `Cannot lift in phase ${u}`) : h(!1)), n.dispatch($c(v.liftActionArgs)), u = "DRAGGING";
    function _(w, x = {
      shouldBlockNextClick: !1
    }) {
      if (v.cleanup(), x.shouldBlockNextClick) {
        const I = le(window, [{
          eventName: "click",
          fn: sd,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(I);
      }
      S(), n.dispatch(Yo({
        reason: w
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
      drop: (w) => _("DROP", w),
      cancel: (w) => _("CANCEL", w),
      ...v.actions
    };
  }
  function C(v) {
    const S = Xe((w) => {
      b(() => jo({
        client: w
      }));
    });
    return {
      ...m({
        liftActionArgs: {
          id: o,
          clientSelection: v,
          movementMode: "FLUID"
        },
        cleanup: () => S.cancel(),
        actions: {
          move: S
        }
      }),
      move: S
    };
  }
  function D() {
    const v = {
      moveUp: () => b(qc),
      moveRight: () => b(jc),
      moveDown: () => b(zc),
      moveLeft: () => b(Yc)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: Ju(l),
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
    snapLift: D,
    abort: y
  };
}
const ad = [Fu, Wu, ju];
function cd({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const s = [...o ? ad : [], ...r || []], i = N.useState(() => Cu())[0], a = P(function(m, C) {
    ot(m) && !ot(C) && i.tryAbandon();
  }, [i]);
  ie(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const D = t.getState();
      a(m, D), m = D;
    });
  }, [i, t, a]), ie(() => i.tryAbandon, [i.tryAbandon]);
  const c = P((b) => ms({
    lockAPI: i,
    registry: n,
    store: t,
    draggableId: b
  }), [i, n, t]), l = P((b, m, C) => id({
    lockAPI: i,
    registry: n,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: m || null,
    sourceEvent: C && C.sourceEvent ? C.sourceEvent : null
  }), [e, i, n, t]), f = P((b) => rd(e, b), [e]), u = P((b) => {
    const m = n.draggable.findById(b);
    return m ? m.options : null;
  }, [n.draggable]), d = P(function() {
    i.isClaimed() && (i.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Tn()));
  }, [i, t]), p = P(() => i.isClaimed(), [i]), g = L(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: f,
    findOptionsForDraggable: u,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, l, f, u, d, p]);
  Yu(s);
  for (let b = 0; b < s.length; b++)
    s[b](g);
}
const ld = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    O.version.startsWith("16") || O.version.startsWith("17") ? n() : gn.flushSync(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), ud = (e) => ({
  ...nt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...nt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function ze(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find store from lazy ref") : h(!1)), e.current;
}
function dd(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: s
  } = e, i = N.useRef(null);
  Su();
  const a = Un(e), c = P(() => ld(a.current), [a]), l = P(() => ud(a.current), [a]), f = du(t), u = gu({
    contextId: t,
    text: s
  }), d = ou(t, o), p = P((I) => {
    ze(i).dispatch(I);
  }, []), g = L(() => Yn({
    publishWhileDragging: Fc,
    updateDroppableScroll: Gc,
    updateDroppableIsEnabled: kc,
    updateDroppableIsCombineEnabled: Wc,
    collectionStarting: Vc
  }, p), [p]), b = au(), m = L(() => Bl(b, g), [b, g]), C = L(() => Ql({
    scrollWindow: $l,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Yn({
      move: jo
    }, p)
  }), [m.scrollDroppable, p, l]), D = su(t), y = L(() => Pl({
    announce: f,
    autoScroller: C,
    dimensionMarshal: m,
    focusMarshal: D,
    getResponders: c,
    styleMarshal: d
  }), [f, C, m, D, c, d]);
  process.env.NODE_ENV !== "production" && i.current && i.current !== y && process.env.NODE_ENV !== "production" && U("unexpected store change"), i.current = y;
  const E = P(() => {
    const I = ze(i);
    I.getState().phase !== "IDLE" && I.dispatch(Tn());
  }, []), v = P(() => {
    const I = ze(i).getState();
    return I.phase === "DROP_ANIMATING" ? !0 : I.phase === "IDLE" ? !1 : I.isDragging;
  }, []), S = L(() => ({
    isDragging: v,
    tryAbort: E
  }), [v, E]);
  n(S);
  const _ = P((I) => ns(ze(i).getState(), I), []), w = P(() => Oe(ze(i).getState()), []), x = L(() => ({
    marshal: m,
    focus: D,
    contextId: t,
    canLift: _,
    isMovementAllowed: w,
    dragHandleUsageInstructionsId: u,
    registry: b
  }), [t, m, u, D, _, w, b]);
  return cd({
    contextId: t,
    store: y,
    registry: b,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), N.useEffect(() => E, [E]), O.createElement(It.Provider, {
    value: x
  }, O.createElement(ca, {
    context: Gn,
    store: y
  }, e.children));
}
let fd = 0;
function pd() {
  return L(() => `${fd++}`, []);
}
function hd() {
  return O.useId();
}
var md = "useId" in O ? hd : pd;
function jf(e) {
  const t = md(), n = e.dragHandleUsageInstructions || bt.dragHandleUsageInstructions;
  return O.createElement(Na, null, (r) => O.createElement(dd, {
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
const Yr = {
  dragging: 5e3,
  dropAnimating: 4500
}, gd = (e, t) => t ? Ke.drop(t.duration) : e ? Ke.snap : Ke.fluid, vd = (e, t) => {
  if (e)
    return t ? tt.opacity.drop : tt.opacity.combining;
}, bd = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function yd(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: s
  } = e, i = !!o, a = bd(e), c = !!s, l = c ? fn.drop(r, i) : fn.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: gd(a, s),
    transform: l,
    opacity: vd(i, c),
    zIndex: c ? Yr.dropAnimating : Yr.dragging,
    pointerEvents: "none"
  };
}
function Ed(e) {
  return {
    transform: fn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Dd(e) {
  return e.type === "DRAGGING" ? yd(e) : Ed(e);
}
function Sd(e, t, n = Y) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), s = So(o, r), i = Dt(s, n), a = {
    client: s,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, c = {
    x: s.marginBox.width,
    y: s.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: a,
    displaceBy: c,
    client: s,
    page: i
  };
}
function Cd(e) {
  const t = kn("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  } = e, c = L(() => ({
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  }), [s, a, i]), l = P((p) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get dimension when no ref is set") : h(!1)), Sd(n, g, p);
  }, [n, o]), f = L(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), u = N.useRef(f), d = N.useRef(!0);
  ie(() => (r.draggable.register(u.current), () => r.draggable.unregister(u.current)), [r.draggable]), ie(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = u.current;
    u.current = f, r.draggable.update(f, p);
  }, [f, r.draggable]);
}
var qn = O.createContext(null);
function gs(e) {
  e && lt(e) || (process.env.NODE_ENV !== "production" ? h(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : h(!1));
}
function Nd(e, t, n) {
  ut(() => {
    function r(s) {
      return `Draggable[id: ${s}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? h(!1, "Draggable requires a draggableId") : h(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? h(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : h(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? h(!1, `${r(o)} requires an integer index prop`) : h(!1)), e.mapped.type !== "DRAGGING" && (gs(n()), e.isEnabled && (cs(t, o) || (process.env.NODE_ENV !== "production" ? h(!1, `${r(o)} Unable to find drag handle`) : h(!1))));
  });
}
function wd(e) {
  Wn(() => {
    const t = N.useRef(e);
    ut(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Draggable isClone prop value changed during component life") : h(!1));
    }, [e]);
  });
}
function Nt(e) {
  const t = N.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find required context") : h(!1)), t;
}
function xd(e) {
  e.preventDefault();
}
const _d = (e) => {
  const t = N.useRef(null), n = P((S = null) => {
    t.current = S;
  }, []), r = P(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: s,
    registry: i
  } = Nt(It), {
    type: a,
    droppableId: c
  } = Nt(qn), l = L(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: c
  }), [e.draggableId, e.index, a, c]), {
    children: f,
    draggableId: u,
    isEnabled: d,
    shouldRespectForcePress: p,
    canDragInteractiveElements: g,
    isClone: b,
    mapped: m,
    dropAnimationFinished: C
  } = e;
  if (Nd(e, o, r), wd(b), !b) {
    const S = L(() => ({
      descriptor: l,
      registry: i,
      getDraggableRef: r,
      canDragInteractiveElements: g,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [l, i, r, g, p, d]);
    Cd(S);
  }
  const D = L(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": s,
    "data-rfd-drag-handle-draggable-id": u,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: xd
  } : null, [o, s, u, d]), y = P((S) => {
    m.type === "DRAGGING" && m.dropping && S.propertyName === "transform" && (O.version.startsWith("16") || O.version.startsWith("17") ? C() : gn.flushSync(C));
  }, [C, m]), E = L(() => {
    const S = Dd(m), _ = m.type === "DRAGGING" && m.dropping ? y : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": u,
        style: S,
        onTransitionEnd: _
      },
      dragHandleProps: D
    };
  }, [o, D, u, m, y, n]), v = L(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return O.createElement(O.Fragment, null, f(E, m.snapshot, v));
};
var Od = _d, vs = (e, t) => e === t, bs = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const Id = (e) => e.combine ? e.combine.draggableId : null, Ad = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Pd() {
  const e = j((o, s) => ({
    x: o,
    y: s
  })), t = j((o, s, i = null, a = null, c = null) => ({
    isDragging: !0,
    isClone: s,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), n = j((o, s, i, a, c = null, l = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: l,
      mode: s,
      offset: o,
      dimension: i,
      forceShouldAnimate: f,
      snapshot: t(s, a, c, l, null)
    }
  }));
  return (o, s) => {
    if (ot(o)) {
      if (o.critical.draggable.id !== s.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[s.draggableId], c = se(o.impact), l = Ad(o.impact), f = o.forceShouldAnimate;
      return n(e(i.x, i.y), o.movementMode, a, s.isClone, c, l, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== s.draggableId)
        return null;
      const a = s.isClone, c = o.dimensions.draggables[s.draggableId], l = i.result, f = l.mode, u = bs(l), d = Id(l), g = {
        duration: o.dropDuration,
        curve: Bn.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? tt.opacity.drop : null,
        scale: d ? tt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: g,
          draggingOver: u,
          combineWith: d,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, a, u, d, g)
        }
      };
    }
    return null;
  };
}
function ys(e = null) {
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
const Rd = {
  mapped: {
    type: "SECONDARY",
    offset: Y,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ys(null)
  }
};
function Td() {
  const e = j((i, a) => ({
    x: i,
    y: a
  })), t = j(ys), n = j((i, a = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: c,
      snapshot: t(a)
    }
  })), r = (i) => i ? n(Y, i, !0) : null, o = (i, a, c, l) => {
    const f = c.displaced.visible[i], u = !!(l.inVirtualList && l.effected[i]), d = xt(c), p = d && d.draggableId === i ? a : null;
    if (!f) {
      if (!u)
        return r(p);
      if (c.displaced.invisible[i])
        return null;
      const m = Ve(l.displacedBy.point), C = e(m.x, m.y);
      return n(C, p, !0);
    }
    if (u)
      return r(p);
    const g = c.displacedBy.point, b = e(g.x, g.y);
    return n(b, p, f.shouldAnimate);
  };
  return (i, a) => {
    if (ot(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const c = i.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const Md = () => {
  const e = Pd(), t = Td();
  return (r, o) => e(r, o) || t(r, o) || Rd;
}, Bd = {
  dropAnimationFinished: Ko
}, $d = Eo(Md, Bd, null, {
  context: Gn,
  areStatePropsEqual: vs
})(Od);
var Ld = $d;
function Es(e) {
  return Nt(qn).isUsingCloneFor === e.draggableId && !e.isClone ? null : O.createElement(Ld, e);
}
function Yf(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return O.createElement(Es, Be({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const zn = (e) => (t) => e === t, Fd = zn("scroll"), Vd = zn("auto"), Gd = zn("visible"), Kr = (e, t) => t(e.overflowX) || t(e.overflowY), kd = (e, t) => t(e.overflowX) && t(e.overflowY), Ds = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Kr(n, Fd) || Kr(n, Vd);
}, Wd = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = rt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, h(!1)), !Ds(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return kd(r, Gd) || process.env.NODE_ENV !== "production" && U(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ss = (e) => e == null ? null : e === document.body ? Wd() ? e : null : e === document.documentElement ? null : Ds(e) ? e : Ss(e.parentElement);
var Cs = Ss, Ud = (e) => {
  !e || !Cs(e.parentElement) || process.env.NODE_ENV !== "production" && U(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, mn = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ns = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ns(e.parentElement) : !1;
var Hd = (e) => {
  const t = Cs(e), n = Ns(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, qd = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: s,
  page: i,
  closest: a
}) => {
  const c = (() => {
    if (!a)
      return null;
    const {
      scrollSize: d,
      client: p
    } = a, g = Zo({
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
        max: g,
        diff: {
          value: Y,
          displacement: Y
        }
      }
    };
  })(), l = o === "vertical" ? On : Ro, f = $e({
    page: i,
    withPlaceholder: null,
    axis: l,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: l,
    isEnabled: t,
    client: s,
    page: i,
    frame: c,
    subject: f
  };
};
const zd = (e, t) => {
  const n = Co(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, s = r + t.scrollHeight, i = o + t.scrollWidth, c = Nn({
    top: r,
    right: i,
    bottom: s,
    left: o
  }, n.border);
  return wn({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var jd = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: s,
  isCombineEnabled: i,
  shouldClipSubject: a
}) => {
  const c = n.closestScrollable, l = zd(e, c), f = Dt(l, r), u = (() => {
    if (!c)
      return null;
    const p = Co(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: Dt(p, r),
      scroll: mn(c),
      scrollSize: g,
      shouldClipSubject: a
    };
  })();
  return qd({
    descriptor: t,
    isEnabled: !s,
    isCombineEnabled: i,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: f,
    closest: u
  });
};
const Yd = {
  passive: !1
}, Kd = {
  passive: !0
};
var Xr = (e) => e.shouldPublishImmediately ? Yd : Kd;
const vt = (e) => e && e.env.closestScrollable || null;
function Xd(e) {
  const t = N.useRef(null), n = Nt(It), r = kn("droppable"), {
    registry: o,
    marshal: s
  } = n, i = Un(e), a = L(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = N.useRef(a), l = L(() => j((E, v) => {
    t.current || (process.env.NODE_ENV !== "production" ? h(!1, "Can only update scroll when dragging") : h(!1));
    const S = {
      x: E,
      y: v
    };
    s.updateDroppableScroll(a.id, S);
  }), [a.id, s]), f = P(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? Y : mn(E.env.closestScrollable);
  }, []), u = P(() => {
    const E = f();
    l(E.x, E.y);
  }, [f, l]), d = L(() => Xe(u), [u]), p = P(() => {
    const E = t.current, v = vt(E);
    if (E && v || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find scroll options while scrolling") : h(!1)), E.scrollOptions.shouldPublishImmediately) {
      u();
      return;
    }
    d();
  }, [d, u]), g = P((E, v) => {
    t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect a droppable while a drag is occurring") : h(!1));
    const S = i.current, _ = S.getDroppableRef();
    _ || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect without a droppable ref") : h(!1));
    const w = Hd(_), x = {
      ref: _,
      descriptor: a,
      env: w,
      scrollOptions: v
    };
    t.current = x;
    const I = jd({
      ref: _,
      descriptor: a,
      env: w,
      windowScroll: E,
      direction: S.direction,
      isDropDisabled: S.isDropDisabled,
      isCombineEnabled: S.isCombineEnabled,
      shouldClipSubject: !S.ignoreContainerClipping
    }), M = w.closestScrollable;
    return M && (M.setAttribute(Ur.contextId, n.contextId), M.addEventListener("scroll", p, Xr(x.scrollOptions)), process.env.NODE_ENV !== "production" && Ud(M)), I;
  }, [n.contextId, a, p, i]), b = P(() => {
    const E = t.current, v = vt(E);
    return E && v || (process.env.NODE_ENV !== "production" ? h(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : h(!1)), mn(v);
  }, []), m = P(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop drag when no active drag") : h(!1));
    const v = vt(E);
    t.current = null, v && (d.cancel(), v.removeAttribute(Ur.contextId), v.removeEventListener("scroll", p, Xr(E.scrollOptions)));
  }, [p, d]), C = P((E) => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll when there is no drag") : h(!1));
    const S = vt(v);
    S || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll a droppable with no closest scrollable") : h(!1)), S.scrollTop += E.y, S.scrollLeft += E.x;
  }, []), D = L(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: b,
    dragStopped: m,
    scroll: C
  }), [m, g, b, C]), y = L(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: D
  }), [D, a, r]);
  ie(() => (c.current = y.descriptor, o.droppable.register(y), () => {
    t.current && (process.env.NODE_ENV !== "production" && U("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(y);
  }), [D, a, m, y, s, o.droppable]), ie(() => {
    t.current && s.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, s]), ie(() => {
    t.current && s.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, s]);
}
function Yt() {
}
const Jr = {
  width: 0,
  height: 0,
  margin: Pa
}, Jd = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Jr : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Qd = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = Jd({
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
    transition: n !== "none" ? Ke.placeholder : null
  };
}, Zd = (e) => {
  const t = N.useRef(null), n = P(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: s,
    contextId: i
  } = e, [a, c] = N.useState(e.animate === "open");
  N.useEffect(() => a ? r !== "open" ? (n(), c(!1), Yt) : t.current ? Yt : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Yt, [r, a, n]);
  const l = P((u) => {
    u.propertyName === "height" && (o(), r === "close" && s());
  }, [r, s, o]), f = Qd({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return O.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": i,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var ef = O.memo(Zd);
function Kt(e) {
  return typeof e == "boolean";
}
function Xt(e, t) {
  t.forEach((n) => n(e));
}
const tf = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? h(!1, "A Droppable requires a droppableId prop") : h(!1)), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? h(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : h(!1));
}, function({
  props: t
}) {
  Kt(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? h(!1, "isDropDisabled must be a boolean") : h(!1)), Kt(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? h(!1, "isCombineEnabled must be a boolean") : h(!1)), Kt(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? h(!1, "ignoreContainerClipping must be a boolean") : h(!1));
}, function({
  getDroppableRef: t
}) {
  gs(t());
}], nf = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && U(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], rf = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? h(!1, "Must provide a clone render function (renderClone) for virtual lists") : h(!1));
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? h(!1, "Expected virtual list to not have a placeholder") : h(!1));
}];
function of(e) {
  ut(() => {
    Xt(e, tf), e.props.mode === "standard" && Xt(e, nf), e.props.mode === "virtual" && Xt(e, rf);
  });
}
class sf extends O.PureComponent {
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
const af = (e) => {
  const t = N.useContext(It);
  t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find app context") : h(!1));
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = N.useRef(null), s = N.useRef(null), {
    children: i,
    droppableId: a,
    type: c,
    mode: l,
    direction: f,
    ignoreContainerClipping: u,
    isDropDisabled: d,
    isCombineEnabled: p,
    snapshot: g,
    useClone: b,
    updateViewportMaxScroll: m,
    getContainerForClone: C
  } = e, D = P(() => o.current, []), y = P((T = null) => {
    o.current = T;
  }, []), E = P(() => s.current, []), v = P((T = null) => {
    s.current = T;
  }, []);
  of({
    props: e,
    getDroppableRef: D,
    getPlaceholderRef: E
  });
  const S = P(() => {
    r() && m({
      maxScroll: ts()
    });
  }, [r, m]);
  Xd({
    droppableId: a,
    type: c,
    mode: l,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: u,
    getDroppableRef: D
  });
  const _ = L(() => O.createElement(sf, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: T,
    data: $,
    animate: W
  }) => O.createElement(ef, {
    placeholder: $,
    onClose: T,
    innerRef: v,
    animate: W,
    contextId: n,
    onTransitionEnd: S
  })), [n, S, e.placeholder, e.shouldAnimatePlaceholder, v]), w = L(() => ({
    innerRef: y,
    placeholder: _,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, _, y]), x = b ? b.dragging.draggableId : null, I = L(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: x
  }), [a, x, c]);
  function M() {
    if (!b)
      return null;
    const {
      dragging: T,
      render: $
    } = b, W = O.createElement(Es, {
      draggableId: T.draggableId,
      index: T.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, K) => $(z, K, T));
    return Os.createPortal(W, C());
  }
  return O.createElement(qn.Provider, {
    value: I
  }, i(w, g), M());
};
var cf = af;
function lf() {
  return document.body || (process.env.NODE_ENV !== "production" ? h(!1, "document.body is not ready") : h(!1)), document.body;
}
const Qr = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: lf
}, ws = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Qr)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Qr[n]
    });
  return t;
}, Jt = (e, t) => e === t.droppable.type, Zr = (e, t) => t.draggables[e.draggable.id], uf = () => {
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
  })), r = j((s, i, a, c, l, f) => {
    const u = l.descriptor.id;
    if (l.descriptor.droppableId === s) {
      const g = f ? {
        render: f,
        dragging: n(l.descriptor)
      } : null, b = {
        isDraggingOver: a,
        draggingOverWith: a ? u : null,
        draggingFromThisWith: u,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: b,
        useClone: g
      };
    }
    if (!i)
      return t;
    if (!c)
      return e;
    const p = {
      isDraggingOver: a,
      draggingOverWith: u,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: l.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (s, i) => {
    const a = ws(i), c = a.droppableId, l = a.type, f = !a.isDropDisabled, u = a.renderClone;
    if (ot(s)) {
      const d = s.critical;
      if (!Jt(l, d))
        return t;
      const p = Zr(d, s.dimensions), g = se(s.impact) === c;
      return r(c, f, g, g, p, u);
    }
    if (s.phase === "DROP_ANIMATING") {
      const d = s.completed;
      if (!Jt(l, d.critical))
        return t;
      const p = Zr(d.critical, s.dimensions);
      return r(c, f, bs(d.result) === c, se(d.impact) === c, p, u);
    }
    if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
      const d = s.completed;
      if (!Jt(l, d.critical))
        return t;
      const p = se(d.impact) === c, g = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === c;
      return p ? g ? e : t : b ? e : t;
    }
    return t;
  };
}, df = {
  updateViewportMaxScroll: Hc
}, ff = Eo(uf, df, (e, t, n) => ({
  ...ws(n),
  ...e,
  ...t
}), {
  context: Gn,
  areStatePropsEqual: vs
})(cf);
var Kf = ff;
const pf = ({
  label: e,
  sliderType: t = "flat",
  size: n = "medium",
  activeColor: r = null,
  section: o = null,
  subsection: s = null,
  fieldName: i,
  updateField: a,
  value: c,
  i: l = null,
  min: f = null,
  max: u = null,
  onClick: d,
  ...p
}) => {
  const [g, b] = N.useState(c);
  let m = () => {
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
    c !== void 0 && c !== g && b(c);
  }, [c]), N.useEffect(() => {
    c !== void 0 && c !== g && a && a(o, s, i, g, l);
  }, [g]);
  const D = (y) => {
    b(!g), d && d(y);
  };
  return /* @__PURE__ */ O.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ O.createElement("label", null, e), /* @__PURE__ */ O.createElement("div", { className: "cove-input__slider" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + C() + (g ? " active" : ""), onClick: D }, /* @__PURE__ */ O.createElement("div", { className: "cove-input__slider-button" }), /* @__PURE__ */ O.createElement("div", { className: "cove-input__slider-track", style: g && r ? { backgroundColor: r } : null }), /* @__PURE__ */ O.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: m(), checked: g || !1, readOnly: !0 })));
};
pf.propTypes = {
  /** Add label to the input field */
  label: Q.string,
  /** Select the preferred display style of the slider */
  sliderType: Q.oneOf(["flat", "block", "pill", "3d"]),
  /** Select the preferred size of the slider */
  size: Q.oneOf(["small", "medium", "large"]),
  /** Select the preferred color for the slider when active */
  activeColor: Q.string,
  /** Parent key value of nested target config option
   *
   * (optional)*/
  section: Q.string,
  /** Child key value of nested target config option
   *
   * (optional, requires `section` value)*/
  subsection: Q.string,
  /** Key value of targeted config option */
  fieldName: Q.string,
  /** Prop drill down of the updateField function */
  updateField: Q.func,
  /** Current value of the input, usually the current config option value */
  stateValue: Q.object
};
const hf = (e) => {
  const [t, n] = N.useState(!1), { config: r, setConfig: o, filteredData: s, setFilteredData: i, excludedData: a, filterData: c } = e, { type: l, filterBehavior: f, filters: u } = r, d = ["dropdown", "pill", "tab", "tab bar"], p = [
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
  ], g = (v, S, _, w) => {
    const x = [...w.values], [I] = x.splice(v, 1);
    x.splice(S, 0, I);
    const M = r.type === "chart" ? [...r.filters] : [...s], T = { ...M[_] };
    T.values = x, T.orderedValues = x, T.active = x[0], T.order = "cust", M[_] = T, r.type === "map" && i(M), o({ ...r, filters: M });
  }, b = (v) => {
  }, m = (v, S) => {
    const _ = r.type === "map" ? [...s] : [...r.filters];
    if (r.filterBehavior === "Apply Button")
      _[v].queuedActive = S, n(!0);
    else {
      const w = _[v];
      w.active = S;
      const x = Kn();
      w.setByQueryParameter && x[w.setByQueryParameter] !== w.active && (x[w.setByQueryParameter] = w.active, Xn(x));
    }
    o({
      ...r,
      filters: _
    }), r.type === "map" && r.filterBehavior === "Filter Change" && i(_), r.type === "chart" && r.filterBehavior === "Filter Change" && i(c(_, a));
  }, C = (v) => {
    let S = !1;
    const _ = Kn();
    v.forEach((w) => {
      w.queuedActive && (w.active = w.queuedActive, delete w.queuedActive, w.setByQueryParameter && _[w.setByQueryParameter] !== w.active && (_[w.setByQueryParameter] = w.active, S = !0));
    }), S && Xn(_), o({ ...r, filters: v }), l === "map" && i(v, a), l === "chart" && i(c(v, a)), n(!1);
  }, D = (v) => {
    let S = [...r.filters];
    v.preventDefault(), S.map((_) => (_ = E(_), _.active = _.values[0], _)), l === "map" ? i(S, a) : i(c(S, a)), o({ ...r, filters: S });
  }, y = {
    buttonText: "Apply Filters",
    resetText: "Reset All",
    introText: "Make a selection from the filters to change the visualization information.",
    applyText: "Select the apply button to update the visualization information."
  }, E = (v) => {
    const { order: S } = v, _ = (x, I) => x.toString().localeCompare(I.toString(), "en", { numeric: !0 }), w = (x, I) => I.toString().localeCompare(x.toString(), "en", { numeric: !0 });
    return (!S || S === "") && (v.order = "asc"), S === "desc" && (v.values = v.values.sort(w)), S === "asc" && (v.values = v.values.sort(_)), v;
  };
  return {
    handleApplyButton: C,
    changeFilterActive: m,
    announceChange: b,
    showApplyButton: t,
    handleReset: D,
    filterConstants: y,
    filterStyleOptions: d,
    filterOrderOptions: p,
    handleFilterOrder: g,
    handleSorting: E
  };
}, mf = (e) => {
  var _;
  const { config: t, filteredData: n, dimensions: r } = e, { filters: o, type: s, general: i, theme: a, filterBehavior: c } = t, [l, f] = N.useState(!1), [u, d] = N.useState(""), p = N.useId(), {
    handleApplyButton: g,
    changeFilterActive: b,
    announceChange: m,
    showApplyButton: C,
    handleReset: D,
    filterConstants: y,
    handleSorting: E
  } = hf(e);
  N.useEffect(() => {
    r && (r[0] < 768 && (o == null ? void 0 : o.length) > 0 ? f(!0) : f(!1));
  }, [r]), N.useEffect(() => {
    if (u) {
      let w = document.getElementById(u.id);
      w && w.focus();
    }
  }, [b, u]);
  const v = (w) => w.children, S = ["filters-section", s === "map" ? i.headerColor : (t == null ? void 0 : t.visualizationType) === "Spark Line" ? null : a];
  if (v.Section = (w) => (t == null ? void 0 : t.filters) && /* @__PURE__ */ O.createElement("section", { className: S.join(" ") }, /* @__PURE__ */ O.createElement("p", { className: "filters-section__intro-text" }, y.introText, " ", t.filterBehavior === "Apply Button" && y.applyText), /* @__PURE__ */ O.createElement("div", { className: "filters-section__wrapper" }, w.children)), v.ApplyBehavior = (w) => {
    if (c !== "Apply Button")
      return;
    const x = [i != null && i.headerColor ? i.headerColor : a, "apply"];
    return /* @__PURE__ */ O.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ O.createElement(Rs, { onClick: () => g(o), disabled: !C, className: x.join(" ") }, y.buttonText), /* @__PURE__ */ O.createElement("a", { href: "#!", role: "button", onClick: D }, y.resetText));
  }, v.TabBar = (w) => {
    const { filter: x, index: I } = w;
    return /* @__PURE__ */ O.createElement("section", { className: "single-filters__tab-bar" }, x.values.map((M, T) => {
      const $ = ["button__tab-bar", x.active === M ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ O.createElement(
        "button",
        {
          id: `${M}-${I}-${T}-${p}`,
          className: $.join(" "),
          key: M,
          onClick: (W) => {
            b(I, M), d(W.target);
          },
          onKeyDown: (W) => {
            W.keyCode === 13 && (b(I, M), d(W.target));
          }
        },
        M
      );
    }));
  }, v.Pills = (w) => w.pills, v.Tabs = (w) => w.tabs, v.Dropdown = (w) => {
    const { index: x, label: I, active: M, filters: T } = w;
    return /* @__PURE__ */ O.createElement(
      "select",
      {
        id: `filter-${x}`,
        name: I,
        "aria-label": `Filter by ${I}`,
        className: "filter-select",
        "data-index": "0",
        value: M,
        onChange: ($) => {
          b(x, $.target.value), m(`Filter ${I} value has been changed to ${$.target.value}, please reference the data table to see updated values.`);
        }
      },
      T
    );
  }, v.Style = () => {
    if (o || n) {
      let w = s === "map" ? n : o;
      return delete w.fromHash, w.map((x, I) => {
        if (x.showDropdown === !1)
          return;
        const M = [], T = [], $ = [], { active: W, queuedActive: z, label: K, filterStyle: X } = x;
        E(x), x.values.forEach((H, ae) => {
          const me = ["pill", W === H ? "pill--active" : null, a && a], ge = ["tab", W === H && "tab--active", a && a];
          T.push(
            /* @__PURE__ */ O.createElement("div", { className: "pill__wrapper", key: `pill-${ae}` }, /* @__PURE__ */ O.createElement(
              "button",
              {
                id: `${H}-${I}-${ae}-${p}`,
                className: me.join(" "),
                onKeyDown: (q) => {
                  q.keyCode === 13 && (b(I, H), d(q.target));
                },
                onClick: (q) => {
                  b(I, H), d(q.target);
                },
                name: K
              },
              H
            ))
          ), M.push(
            /* @__PURE__ */ O.createElement("option", { key: ae, value: H, "aria-label": H }, x.labels && x.labels[H] ? x.labels[H] : H)
          ), $.push(
            /* @__PURE__ */ O.createElement(
              "button",
              {
                id: `${H}-${I}-${ae}-${p}`,
                className: ge.join(" "),
                onClick: (q) => {
                  b(I, H), d(q.target);
                },
                onKeyDown: (q) => {
                  q.keyCode === 13 && (b(I, H), d(q.target));
                }
              },
              H
            )
          );
        });
        const re = ["single-filters", l ? "single-filters--dropdown" : `single-filters--${X}`];
        return /* @__PURE__ */ O.createElement("div", { className: re.join(" "), key: I }, /* @__PURE__ */ O.createElement(O.Fragment, null, K && /* @__PURE__ */ O.createElement("label", { htmlFor: `filter-${I}` }, K), X === "tab" && !l && /* @__PURE__ */ O.createElement(v.Tabs, { tabs: $ }), X === "pill" && !l && /* @__PURE__ */ O.createElement(v.Pills, { pills: T }), X === "tab bar" && !l && /* @__PURE__ */ O.createElement(v.TabBar, { filter: x, index: I }), (X === "dropdown" || l) && /* @__PURE__ */ O.createElement(v.Dropdown, { filter: x, index: I, label: K, active: z || W, filters: M })));
      });
    }
  }, ((_ = t == null ? void 0 : t.filters) == null ? void 0 : _.length) !== 0)
    return /* @__PURE__ */ O.createElement(v, null, /* @__PURE__ */ O.createElement(v.Section, null, /* @__PURE__ */ O.createElement(v.Style, null), /* @__PURE__ */ O.createElement(v.ApplyBehavior, null)));
};
mf.propTypes = {
  // runtimeFilters in place
  filteredData: Q.array,
  // function for updating the runtime filters
  setFilteredData: Q.func,
  // the full apps config
  config: Q.object,
  // updating function for setting fitlerBehavior
  setConfig: Q.func,
  // exclusions
  excludedData: Q.array,
  // function for filtering the data
  filterData: Q.func,
  dimensions: Q.array
};
export {
  Kf as C,
  jf as D,
  mf as F,
  qf as G,
  pf as I,
  Yf as P,
  Gf as T,
  to as _,
  Ms as a,
  Uf as b,
  Of as c,
  Pf as d,
  $f as e,
  Bf as f,
  zf as g,
  Qn as h,
  If as i,
  Af as j,
  Vf as k,
  Ff as l,
  Tf as m,
  Rf as n,
  Hf as o,
  vn as p,
  Wf as q,
  kf as r,
  Mf as s,
  Lf as t,
  hf as u
};
